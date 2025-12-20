
//Enhanced Genetics and Molecular Biology Workbook - Comprehensive Genetics Content System
import * as math from 'mathjs';

export class EnhancedGeneticsMolecularBiologyWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "genetics";
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

        this.geneticsSymbols = this.initializeGeneticsSymbols();
        this.setThemeColors();
        this.initializeGeneticsTopics();
        this.initializeMisconceptionDatabase();
        this.initializeExplanationTemplates();
        this.initializeGeneticsLessons();
    }

    setThemeColors() {
        const themes = {
            genetics: {
                background: '#ffffff',
                gridColor: '#c0c0c0',
                headerBg: '#6a1b9a',
                headerText: '#ffffff',
                sectionBg: '#e1bee7',
                sectionText: '#4a148c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#f3e5f5',
                resultText: '#6a1b9a',
                definitionBg: '#fff9c4',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#ab47bc',
                contentBg: '#e3f2fd',
                contentText: '#0d47a1',
                diagramBg: '#fce4ec',
                structureBg: '#e8f5e9'
            },
            molecular: {
                background: '#f8f9fa',
                gridColor: '#4682b4',
                headerBg: '#283593',
                headerText: '#ffffff',
                sectionBg: '#c5cae9',
                sectionText: '#1a237e',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e8eaf6',
                resultText: '#283593',
                definitionBg: '#fff3e0',
                definitionText: '#e65100',
                stepBg: '#e0f2f1',
                stepText: '#004d40',
                borderColor: '#5c6bc0',
                contentBg: '#fff9c4',
                contentText: '#f57f17',
                diagramBg: '#fce4ec',
                structureBg: '#e1f5fe'
            }
        };

        this.colors = themes[this.theme] || themes.genetics;
    }

    initializeGeneticsSymbols() {
        return {
            // Genetics notation
            'dominant': 'A, B, C (capital letters)',
            'recessive': 'a, b, c (lowercase letters)',
            'cross': '×',
            'heterozygous': 'Aa',
            'homozygousDOM': 'AA',
            'homozygousREC': 'aa',
            'male': '♂',
            'female': '♀',
            'ratio': ':',
            
            // Molecular symbols
            'DNA': 'DNA',
            'RNA': 'RNA',
            'mRNA': 'mRNA',
            'tRNA': 'tRNA',
            'rRNA': 'rRNA',
            'adenine': 'A',
            'thymine': 'T',
            'guanine': 'G',
            'cytosine': 'C',
            'uracil': 'U',
            
            // Mathematical
            'arrow': '→',
            'doubleArrow': '↔',
            'equals': '=',
            'notEquals': '≠',
            'approximately': '≈',
            'prime5': "5'",
            'prime3': "3'",
            'plus': '+',
            'multiply': '×'
        };
    }

    initializeGeneticsTopics() {
        this.geneticsTopics = {
            // 1. Mendelian Genetics
            mendelian_genetics: {
                patterns: [
                    /mendel|mendelian/i,
                    /law.*dominance|law.*segregation|law.*independent.*assortment/i,
                    /dominant.*recessive/i,
                    /basic.*genetics|classical.*genetics/i
                ],
                handler: this.handleMendelianGenetics.bind(this),
                name: 'Mendelian Genetics',
                category: 'classical_genetics',
                description: 'Fundamental principles of inheritance discovered by Gregor Mendel'
            },

            // 2. Punnett Squares
            punnett_squares: {
                patterns: [
                    /punnett.*square/i,
                    /genetic.*cross/i,
                    /monohybrid.*cross|dihybrid.*cross/i,
                    /predict.*offspring/i
                ],
                handler: this.handlePunnettSquares.bind(this),
                name: 'Punnett Squares',
                category: 'genetic_tools',
                description: 'Diagram tool for predicting genetic outcomes'
            },

            // 3. DNA Structure
            dna_structure: {
                patterns: [
                    /DNA.*structure/i,
                    /double.*helix/i,
                    /nucleotide/i,
                    /base.*pair/i,
                    /antiparallel/i
                ],
                handler: this.handleDNAStructure.bind(this),
                name: 'DNA Structure',
                category: 'molecular_genetics',
                description: 'The molecular structure of deoxyribonucleic acid'
            },

            // 4. DNA Replication
            dna_replication: {
                patterns: [
                    /DNA.*replication/i,
                    /semiconservative.*replication/i,
                    /DNA.*polymerase|helicase/i,
                    /replication.*fork/i
                ],
                handler: this.handleDNAReplication.bind(this),
                name: 'DNA Replication',
                category: 'molecular_genetics',
                description: 'Process of copying DNA before cell division'
            },

            // 5. Transcription
            transcription: {
                patterns: [
                    /transcription/i,
                    /DNA.*to.*RNA/i,
                    /RNA.*polymerase/i,
                    /mRNA.*synthesis/i,
                    /gene.*expression.*transcription/i
                ],
                handler: this.handleTranscription.bind(this),
                name: 'Transcription',
                category: 'gene_expression',
                description: 'Process of creating RNA from DNA template'
            },

            // 6. Translation
            translation: {
                patterns: [
                    /translation/i,
                    /protein.*synthesis/i,
                    /ribosome/i,
                    /codon|anticodon/i,
                    /RNA.*to.*protein/i
                ],
                handler: this.handleTranslation.bind(this),
                name: 'Translation',
                category: 'gene_expression',
                description: 'Process of building proteins from mRNA'
            },

            // 7. Mutations
            mutations: {
                patterns: [
                    /mutation/i,
                    /point.*mutation|frameshift/i,
                    /substitution|insertion|deletion/i,
                    /genetic.*change/i
                ],
                handler: this.handleMutations.bind(this),
                name: 'Mutations',
                category: 'genetic_variation',
                description: 'Changes in DNA sequence and their effects'
            },

            // 8. Gene Expression
            gene_expression: {
                patterns: [
                    /gene.*expression/i,
                    /gene.*regulation/i,
                    /central.*dogma/i,
                    /DNA.*RNA.*protein/i
                ],
                handler: this.handleGeneExpression.bind(this),
                name: 'Gene Expression',
                category: 'molecular_genetics',
                description: 'How genes are turned on and off to produce proteins'
            },

            // 9. Inheritance Patterns
            inheritance_patterns: {
                patterns: [
                    /inheritance.*pattern/i,
                    /autosomal|sex.*linked/i,
                    /dominant|recessive.*inheritance/i,
                    /incomplete.*dominance|codominance/i,
                    /multiple.*alleles/i
                ],
                handler: this.handleInheritancePatterns.bind(this),
                name: 'Inheritance Patterns',
                category: 'classical_genetics',
                description: 'Different ways traits are passed from parents to offspring'
            },

            // 10. Chromosomes and Karyotypes
            chromosomes_karyotypes: {
                patterns: [
                    /chromosome/i,
                    /karyotype/i,
                    /autosome|sex.*chromosome/i,
                    /diploid|haploid/i
                ],
                handler: this.handleChromosomesKaryotypes.bind(this),
                name: 'Chromosomes and Karyotypes',
                category: 'cytogenetics',
                description: 'Structure and organization of genetic material'
            },

            // 11. Genetic Disorders
            genetic_disorders: {
                patterns: [
                    /genetic.*disorder|genetic.*disease/i,
                    /hereditary.*disease/i,
                    /sickle.*cell|cystic.*fibrosis|hemophilia/i,
                    /down.*syndrome|turner.*syndrome/i
                ],
                handler: this.handleGeneticDisorders.bind(this),
                name: 'Genetic Disorders',
                category: 'medical_genetics',
                description: 'Inherited diseases and chromosomal abnormalities'
            },

            // 12. Genetic Technology
            genetic_technology: {
                patterns: [
                    /genetic.*engineering|biotechnology/i,
                    /PCR|gel.*electrophoresis/i,
                    /CRISPR|gene.*therapy/i,
                    /recombinant.*DNA/i,
                    /genetic.*testing/i
                ],
                handler: this.handleGeneticTechnology.bind(this),
                name: 'Genetic Technology',
                category: 'applied_genetics',
                description: 'Modern techniques for manipulating and analyzing DNA'
            }
        };
    }

    initializeGeneticsLessons() {
        this.lessons = {
            mendelian_genetics: {
                title: "Mendelian Genetics: Fundamental Principles",
                concepts: [
                    "Genes come in pairs (alleles)",
                    "Dominant alleles mask recessive alleles",
                    "Alleles separate during gamete formation",
                    "Different genes assort independently"
                ],
                theory: "Gregor Mendel's experiments with pea plants (1860s) established the fundamental laws of inheritance. His work revealed that traits are inherited as discrete units (genes) that follow predictable patterns.",
                keyDefinitions: {
                    "Allele": "Alternative form of a gene (e.g., tall vs short)",
                    "Dominant": "Allele that is expressed when present (capital letter)",
                    "Recessive": "Allele only expressed when homozygous (lowercase letter)",
                    "Genotype": "Genetic makeup (e.g., Aa)",
                    "Phenotype": "Physical expression of genes (e.g., tall plant)",
                    "Homozygous": "Two identical alleles (AA or aa)",
                    "Heterozygous": "Two different alleles (Aa)",
                    "P generation": "Parental generation (first cross)",
                    "F1 generation": "First filial (offspring) generation",
                    "F2 generation": "Second filial generation"
                },
                mendelLaws: {
                    lawOfDominance: {
                        statement: "In a heterozygote, one allele may mask the expression of another",
                        example: "Tt plant is tall (T dominant over t)"
                    },
                    lawOfSegregation: {
                        statement: "Allele pairs separate during gamete formation (meiosis)",
                        example: "Aa parent produces A and a gametes in equal proportions"
                    },
                    lawOfIndependentAssortment: {
                        statement: "Genes for different traits segregate independently",
                        example: "Gene for height sorts independently from gene for flower color"
                    }
                },
                mainCategories: [
                    "Monohybrid crosses (one trait)",
                    "Dihybrid crosses (two traits)",
                    "Test crosses (determine unknown genotype)",
                    "Probability in genetics"
                ],
                applications: [
                    "Plant and animal breeding",
                    "Predicting human genetic traits",
                    "Understanding genetic diseases",
                    "Conservation genetics"
                ]
            },

            punnett_squares: {
                title: "Punnett Squares: Predicting Genetic Outcomes",
                concepts: [
                    "Punnett squares organize possible gamete combinations",
                    "Each box represents one possible offspring genotype",
                    "Probability of each outcome can be calculated",
                    "Works for any number of traits"
                ],
                theory: "Punnett squares, developed by Reginald Punnett, provide a visual method for determining the probability of offspring genotypes and phenotypes based on parental genotypes.",
                keyDefinitions: {
                    "Monohybrid Cross": "Cross involving one trait (e.g., Aa × Aa)",
                    "Dihybrid Cross": "Cross involving two traits (e.g., AaBb × AaBb)",
                    "Test Cross": "Cross with homozygous recessive to determine unknown genotype",
                    "Genotypic Ratio": "Ratio of different genotypes (e.g., 1:2:1)",
                    "Phenotypic Ratio": "Ratio of different phenotypes (e.g., 3:1)",
                    "Gametes": "Sex cells carrying one allele per gene"
                },
                squareTypes: {
                    monohybrid: {
                        description: "2×2 grid for single trait",
                        example: "Aa × Aa → 25% AA, 50% Aa, 25% aa",
                        phenotypicRatio: "3:1 (dominant:recessive)"
                    },
                    dihybrid: {
                        description: "4×4 grid for two traits",
                        example: "AaBb × AaBb → 16 possible combinations",
                        phenotypicRatio: "9:3:3:1"
                    },
                    testCross: {
                        description: "Cross with homozygous recessive (aa)",
                        purpose: "Determine if unknown is AA or Aa"
                    }
                },
                mainCategories: [
                    "Setting up the square (determine gametes)",
                    "Filling in offspring combinations",
                    "Calculating genotypic ratios",
                    "Determining phenotypic ratios",
                    "Calculating probabilities"
                ],
                applications: [
                    "Genetic counseling",
                    "Selective breeding",
                    "Predicting disease inheritance",
                    "Agricultural genetics"
                ]
            },

            dna_structure: {
                title: "DNA Structure: The Molecular Basis of Heredity",
                concepts: [
                    "DNA is a double helix made of nucleotides",
                    "Four bases: A, T, G, C pair specifically (A-T, G-C)",
                    "Two strands are antiparallel (opposite directions)",
                    "Sugar-phosphate backbone on outside, bases inside"
                ],
                theory: "Watson and Crick (1953) proposed the double helix model of DNA based on Rosalind Franklin's X-ray crystallography. This structure explains how DNA stores information and replicates.",
                keyDefinitions: {
                    "Nucleotide": "Building block: phosphate + sugar (deoxyribose) + nitrogenous base",
                    "Double Helix": "Two strands twisted into spiral shape",
                    "Antiparallel": "Strands run in opposite directions (5'→3' and 3'→5')",
                    "Complementary Base Pairing": "A pairs with T (2 H-bonds), G pairs with C (3 H-bonds)",
                    "Major Groove": "Wide groove in helix where proteins can bind",
                    "Minor Groove": "Narrow groove in helix",
                    "Purines": "Double-ring bases (A, G)",
                    "Pyrimidines": "Single-ring bases (T, C)"
                },
                structuralLevels: {
                    primary: "Sequence of nucleotides (A, T, G, C)",
                    secondary: "Double helix structure with base pairing",
                    tertiary: "Supercoiling and chromatin packaging"
                },
                mainCategories: [
                    "Nucleotide structure",
                    "Base pairing rules",
                    "Double helix geometry",
                    "DNA packaging in chromosomes"
                ],
                applications: [
                    "DNA fingerprinting",
                    "PCR amplification",
                    "Genetic engineering",
                    "Understanding mutations"
                ]
            },

            dna_replication: {
                title: "DNA Replication: Copying the Genetic Blueprint",
                concepts: [
                    "DNA replication is semiconservative",
                    "Each new DNA has one old and one new strand",
                    "Occurs during S phase of cell cycle",
                    "Multiple enzymes work together in replication"
                ],
                theory: "DNA replication ensures genetic information is accurately copied before cell division. The semiconservative mechanism was proven by Meselson-Stahl experiment (1958).",
                keyDefinitions: {
                    "Semiconservative Replication": "Each new DNA molecule contains one original and one new strand",
                    "Origin of Replication": "Site where replication begins",
                    "Replication Fork": "Y-shaped region where DNA strands separate",
                    "Leading Strand": "Synthesized continuously in 5'→3' direction",
                    "Lagging Strand": "Synthesized discontinuously in Okazaki fragments",
                    "Primer": "Short RNA sequence needed to start DNA synthesis"
                },
                keyEnzymes: {
                    helicase: "Unwinds and separates DNA strands",
                    primase: "Synthesizes RNA primers",
                    dnaPolymeraseIII: "Main enzyme adding nucleotides (5'→3')",
                    dnaPolymeraseI: "Replaces RNA primers with DNA",
                    ligase: "Joins Okazaki fragments",
                    topoisomerase: "Relieves tension from unwinding",
                    ssbProteins: "Stabilize single-stranded DNA"
                },
                mainCategories: [
                    "Initiation (helicase unwinds DNA)",
                    "Elongation (DNA polymerase adds nucleotides)",
                    "Termination (ligase joins fragments)",
                    "Proofreading and error correction"
                ],
                applications: [
                    "PCR technology",
                    "Understanding cancer (uncontrolled replication)",
                    "DNA repair mechanisms",
                    "Genetic engineering"
                ]
            },

            transcription: {
                title: "Transcription: DNA to RNA",
                concepts: [
                    "DNA is transcribed to RNA",
                    "Only one DNA strand (template) is copied",
                    "RNA uses U instead of T",
                    "Occurs in nucleus (eukaryotes)"
                ],
                theory: "Transcription is the first step of gene expression, where genetic information is copied from DNA to messenger RNA (mRNA). This allows genetic instructions to leave the nucleus.",
                keyDefinitions: {
                    "Template Strand": "DNA strand read 3'→5' to make RNA 5'→3'",
                    "Coding Strand": "DNA strand with same sequence as RNA (except T→U)",
                    "Promoter": "DNA sequence where RNA polymerase binds",
                    "Terminator": "DNA sequence signaling end of transcription",
                    "RNA Polymerase": "Enzyme that synthesizes RNA",
                    "Transcription Factors": "Proteins helping RNA polymerase bind",
                    "Introns": "Non-coding sequences removed from pre-mRNA",
                    "Exons": "Coding sequences kept in mature mRNA"
                },
                stages: {
                    initiation: {
                        description: "RNA polymerase binds to promoter",
                        keyEvents: [
                            "Transcription factors recognize promoter",
                            "RNA polymerase binds",
                            "DNA unwinds at transcription start site"
                        ]
                    },
                    elongation: {
                        description: "RNA polymerase synthesizes RNA",
                        keyEvents: [
                            "RNA polymerase moves along template strand 3'→5'",
                            "Adds complementary RNA nucleotides 5'→3'",
                            "DNA re-winds behind polymerase"
                        ]
                    },
                    termination: {
                        description: "RNA polymerase releases RNA transcript",
                        keyEvents: [
                            "Reaches terminator sequence",
                            "RNA transcript released",
                            "RNA polymerase detaches"
                        ]
                    }
                },
                rnaProcessing: {
                    prokaryotes: "mRNA used immediately (no processing)",
                    eukaryotes: [
                        "5' cap added (protection, ribosome recognition)",
                        "3' poly-A tail added (stability, export from nucleus)",
                        "Splicing removes introns, joins exons"
                    ]
                },
                mainCategories: [
                    "Initiation at promoter",
                    "Elongation of RNA chain",
                    "Termination of transcription",
                    "RNA processing (eukaryotes only)"
                ],
                applications: [
                    "Understanding gene regulation",
                    "Developing gene therapies",
                    "Creating mRNA vaccines",
                    "Studying genetic diseases"
                ]
            },

            translation: {
                title: "Translation: RNA to Protein",
                concepts: [
                    "mRNA is translated to protein at ribosomes",
                    "Codons (3 nucleotides) specify amino acids",
                    "tRNA brings amino acids to ribosome",
                    "Occurs in cytoplasm"
                ],
                theory: "Translation converts the nucleotide language of mRNA into the amino acid language of proteins. The genetic code is nearly universal across all organisms.",
                keyDefinitions: {
                    "Codon": "3-nucleotide sequence on mRNA coding for amino acid",
                    "Anticodon": "Complementary 3-nucleotide sequence on tRNA",
                    "Start Codon": "AUG (codes for methionine, starts translation)",
                    "Stop Codons": "UAA, UAG, UGA (signal end of translation)",
                    "Reading Frame": "Way codons are grouped (groups of 3)",
                    "Ribosome": "Molecular machine that performs translation",
                    "Peptide Bond": "Bond linking amino acids in protein",
                    "Polypeptide": "Chain of amino acids (will become protein)"
                },
                geneticCode: {
                    codons: "64 total (4³)",
                    aminoAcids: "20 standard amino acids",
                    redundancy: "Multiple codons per amino acid (except Met, Trp)",
                    universality: "Same code in nearly all organisms",
                    unambiguous: "Each codon specifies only one amino acid",
                    wobble: "Third codon position can vary"
                },
                stages: {
                    initiation: {
                        description: "Ribosome assembles at start codon",
                        keyEvents: [
                            "Small ribosomal subunit binds to mRNA",
                            "tRNA with methionine binds to AUG start codon",
                            "Large ribosomal subunit joins"
                        ],
                        sites: "A (aminoacyl), P (peptidyl), E (exit)"
                    },
                    elongation: {
                        description: "Amino acids added one by one",
                        keyEvents: [
                            "tRNA enters A site with amino acid",
                            "Peptide bond forms between amino acids",
                            "Ribosome moves 3 nucleotides (one codon)",
                            "tRNA exits through E site"
                        ],
                        cycle: "Repeats until stop codon reached"
                    },
                    termination: {
                        description: "Release of completed polypeptide",
                        keyEvents: [
                            "Stop codon (UAA, UAG, UGA) enters A site",
                            "Release factor binds instead of tRNA",
                            "Polypeptide released",
                            "Ribosome disassembles"
                        ]
                    }
                },
                postTranslation: {
                    folding: "Polypeptide folds into 3D shape",
                    modifications: "Phosphorylation, glycosylation, cleavage",
                    targeting: "Proteins sent to correct cellular location"
                },
                mainCategories: [
                    "Initiation at start codon",
                    "Elongation (amino acid addition)",
                    "Termination at stop codon",
                    "Post-translational modifications"
                ],
                applications: [
                    "Antibiotic design (target bacterial ribosomes)",
                    "Understanding genetic diseases",
                    "Protein production (biotechnology)",
                    "Gene therapy"
                ]
            },

            mutations: {
                title: "Mutations: Changes in DNA Sequence",
                concepts: [
                    "Mutations are changes in DNA sequence",
                    "Can be beneficial, harmful, or neutral",
                    "Occur spontaneously or from mutagens",
                    "Source of genetic variation"
                ],
                theory: "Mutations are the ultimate source of all genetic variation. While most are neutral or harmful, rare beneficial mutations drive evolution and adaptation.",
                keyDefinitions: {
                    "Point Mutation": "Change in single nucleotide",
                    "Substitution": "One base replaced by another",
                    "Insertion": "Extra nucleotide(s) added",
                    "Deletion": "Nucleotide(s) removed",
                    "Frameshift": "Insertion/deletion shifts reading frame",
                    "Silent Mutation": "No change in amino acid (due to redundancy)",
                    "Missense Mutation": "Different amino acid coded",
                    "Nonsense Mutation": "Premature stop codon created",
                    "Germline Mutation": "In gametes, passed to offspring",
                    "Somatic Mutation": "In body cells, not inherited"
                },
                mutationTypes: {
                    pointMutations: {
                        substitution: {
                            silent: "No amino acid change (TAC→TAT both code for Tyr)",
                            missense: "Different amino acid (sickle cell: GAA→GUA)",
                            nonsense: "Creates stop codon (UAC→UAA)"
                        }
                    },
                    frameshiftMutations: {
                        insertion: {
                            description: "Adds nucleotide(s), shifts reading frame",
                            effect: "All downstream amino acids changed",
                            severity: "Usually severe"
                        },
                        deletion: {
                            description: "Removes nucleotide(s), shifts reading frame",
                            effect: "All downstream amino acids changed",
                            severity: "Usually severe"
                        }
                    },
                    chromosomalMutations: {
                        deletion: "Segment of chromosome lost",
                        duplication: "Segment copied",
                        inversion: "Segment reversed",
                        translocation: "Segment moved to different chromosome"
                    }
                },
                causes: {
                    spontaneous: [
                        "DNA replication errors",
                        "Spontaneous base changes",
                        "Transposon movement"
                    ],
                    induced: [
                        "Radiation (UV, X-rays)",
                        "Chemicals (benzene, tobacco)",
                        "Viruses"
                    ]
                },
                effects: {
                    beneficial: "Rare, improve survival (antibiotic resistance)",
                    neutral: "Most common, no effect on fitness",
                    harmful: "Reduce survival (genetic diseases)"
                },
                mainCategories: [
                    "Point mutations (substitutions)",
                    "Frameshift mutations (insertions/deletions)",
                    "Chromosomal mutations",
                    "Germline vs somatic mutations"
                ],
                applications: [
                    "Cancer research (accumulation of mutations)",
                    "Evolution studies",
                    "Genetic disease diagnosis",
                    "Mutagenesis for research"
                ]
            },

            gene_expression: {
                title: "Gene Expression: From DNA to Protein",
                concepts: [
                    "Gene expression is regulated at multiple levels",
                    "Not all genes are expressed all the time",
                    "Central dogma: DNA → RNA → Protein",
                    "Expression varies by cell type and conditions"
                ],
                theory: "Gene expression regulation allows cells to respond to their environment and differentiate into specialized cell types despite having identical DNA.",
                keyDefinitions: {
                    "Gene Expression": "Process by which genetic information is used to synthesize proteins",
                    "Central Dogma": "Information flow: DNA → RNA → Protein",
                    "Operon": "Group of genes regulated together (prokaryotes)",
                    "Promoter": "DNA sequence where transcription begins",
                    "Enhancer": "DNA sequence that increases transcription",
                    "Silencer": "DNA sequence that decreases transcription",
                    "Transcription Factor": "Protein that regulates transcription",
                    "Epigenetics": "Heritable changes without DNA sequence changes"
                },
                regulationLevels: {
                    transcriptional: {
                        description: "Control of mRNA synthesis",
                        mechanisms: [
                            "Transcription factors bind to promoter/enhancer",
                            "Chromatin remodeling (DNA accessibility)",
                            "DNA methylation (gene silencing)",
                            "Histone modifications"
                        ],
                        importance: "Primary level of regulation"
                    },
                    postTranscriptional: {
                        description: "Control of mRNA processing and stability",
                        mechanisms: [
                            "Alternative splicing (different proteins from same gene)",
                            "mRNA stability (degradation rate)",
                            "mRNA localization"
                        ]
                    },
                    translational: {
                        description: "Control of protein synthesis",
                        mechanisms: [
                            "Ribosome binding regulation",
                            "Translation initiation factors",
                            "Regulatory proteins blocking translation"
                        ]
                    },
                    postTranslational: {
                        description: "Control of protein activity",
                        mechanisms: [
                            "Protein folding and modification",
                            "Phosphorylation/dephosphorylation",
                            "Protein degradation",
                            "Protein localization"
                        ]
                    }
                },
                prokaryoticRegulation: {
                    lacOperon: {
                        description: "Classic example of negative regulation",
                        genes: "lacZ, lacY, lacA (lactose metabolism)",
                        regulation: [
                            "No lactose: repressor blocks transcription",
                            "Lactose present: lactose binds repressor, genes ON"
                        ],
                        type: "Inducible (turned on by substrate)"
                    },
                    trpOperon: {
                        description: "Example of negative feedback",
                        genes: "Tryptophan synthesis genes",
                        regulation: [
                            "No tryptophan: genes ON (cell makes it)",
                            "Tryptophan present: binds repressor, genes OFF"
                        ],
                        type: "Repressible (turned off by product)"
                    }
                },
                eukaryoticRegulation: {
                    chromatinStructure: "Tight packing silences genes, loose allows expression",
                    transcriptionFactors: "Combinatorial control by multiple factors",
                    alternativeSplicing: "One gene can make multiple proteins",
                    epigenetics: "DNA methylation and histone modifications"
                },
                mainCategories: [
                    "Transcriptional regulation",
                    "Post-transcriptional regulation",
                    "Translational regulation",
                    "Post-translational regulation"
                ],
                applications: [
                    "Understanding development and differentiation",
                    "Cancer research (dysregulated expression)",
                    "Biotechnology (controlling protein production)",
                    "Personalized medicine"
                ]
            },

            inheritance_patterns: {
                title: "Inheritance Patterns: Beyond Simple Dominance",
                concepts: [
                    "Many traits don't follow simple Mendelian patterns",
                    "Incomplete dominance shows blending",
                    "Codominance shows both traits",
                    "Sex-linked traits follow X or Y chromosome"
                ],
                theory: "While Mendel discovered fundamental principles, many traits show more complex inheritance patterns involving multiple alleles, incomplete dominance, and sex linkage.",
                keyDefinitions: {
                    "Complete Dominance": "Heterozygote shows dominant phenotype (Aa = AA)",
                    "Incomplete Dominance": "Heterozygote shows intermediate phenotype (blend)",
                    "Codominance": "Heterozygote shows both phenotypes (both expressed)",
                    "Multiple Alleles": "More than two alleles for a gene in population",
                    "Polygenic Inheritance": "Multiple genes affect one trait",
                    "Sex-Linked": "Gene located on X or Y chromosome",
                    "X-Linked Recessive": "Trait more common in males (XY)",
                    "Autosomal": "Gene on chromosome 1-22 (not sex chromosome)",
                    "Carrier": "Heterozygote for recessive allele (doesn't show trait)"
                },
                patterns: {
                    autosomalDominant: {
                        description: "Dominant allele on autosome (chromosome 1-22)",
                        characteristics: [
                            "Appears in every generation",
                            "Affected person usually has affected parent",
                            "Male and female equally affected",
                            "Can be passed from either parent"
                        ],
                        examples: ["Huntington's disease", "Achondroplasia (dwarfism)"],
                        genotypes: "AA or Aa affected, aa normal"
                    },
                    autosomalRecessive: {
                        description: "Recessive allele on autosome",
                        characteristics: [
                            "Skips generations",
                            "Can appear in children of unaffected parents",
                            "Male and female equally affected",
                            "25% chance if both parents carriers"
                        ],
                        examples: ["Cystic fibrosis", "Sickle cell disease", "Tay-Sachs"],
                        genotypes: "AA and Aa normal (carrier), aa affected"
                    },
                    xLinkedRecessive: {
                        description: "Recessive allele on X chromosome",
                        characteristics: [
                            "More common in males (only need one copy)",
                            "Affected males often have carrier mothers",
                            "Never passed male to male",
                            "Carrier females usually unaffected"
                        ],
                        examples: ["Hemophilia", "Duchenne muscular dystrophy", "Color blindness"],
                        genotypes: {
                            male: "XᴬY normal, XᵃY affected",
                            female: "XᴬXᴬ normal, XᴬXᵃ carrier, XᵃXᵃ affected (rare)"
                        }
                    },
                    xLinkedDominant: {
                        description: "Dominant allele on X chromosome",
                        characteristics: [
                            "Affected males pass to all daughters, no sons",
                            "Affected females can pass to both sons and daughters",
                            "Females more commonly affected (two X chromosomes)"
                        ],
                        examples: ["Fragile X syndrome", "Rett syndrome"]
                    },
                    incompleteDominance: {
                        description: "Heterozygote shows intermediate phenotype",
                        characteristics: [
                            "Blending of traits",
                            "Genotypic and phenotypic ratios same (1:2:1)"
                        ],
                        examples: [
                            "Snapdragon flowers: RR (red) × WW (white) → RW (pink)",
                            "Human hair type: straight, wavy, curly"
                        ]
                    },
                    codominance: {
                        description: "Both alleles fully expressed in heterozygote",
                        characteristics: [
                            "Both traits visible simultaneously",
                            "No blending"
                        ],
                        examples: [
                            "ABO blood type: Iᴬ and Iᴮ both expressed (type AB)",
                            "Roan coat in cattle: red and white hairs"
                        ]
                    },
                    multipleAlleles: {
                        description: "More than two alleles exist in population",
                        characteristics: [
                            "Individual has only two alleles",
                            "Population has three or more"
                        ],
                        examples: [
                            "ABO blood: Iᴬ, Iᴮ, i alleles",
                            "Rabbit coat color: C, cᶜʰ, cʰ, c alleles"
                        ]
                    },
                    polygenicInheritance: {
                        description: "Multiple genes contribute to one trait",
                        characteristics: [
                            "Continuous variation (range of phenotypes)",
                            "Bell-curve distribution",
                            "Environmental influence common"
                        ],
                        examples: ["Height", "Skin color", "Eye color", "Intelligence"]
                    }
                },
                specialCases: {
                    pleiotrophy: "One gene affects multiple traits",
                    epistasis: "One gene masks effect of another gene",
                    linkage: "Genes on same chromosome inherited together",
                    mitochondrialInheritance: "Maternal inheritance (from egg only)"
                },
                mainCategories: [
                    "Autosomal dominant and recessive",
                    "Sex-linked (X-linked and Y-linked)",
                    "Incomplete dominance and codominance",
                    "Multiple alleles and polygenic traits"
                ],
                applications: [
                    "Genetic counseling and pedigree analysis",
                    "Predicting disease risk",
                    "Understanding complex traits",
                    "Forensics and paternity testing"
                ]
            },

            chromosomes_karyotypes: {
                title: "Chromosomes and Karyotypes",
                concepts: [
                    "Chromosomes carry genetic information",
                    "Humans have 46 chromosomes (23 pairs)",
                    "Karyotypes show chromosome number and structure",
                    "Abnormalities cause genetic disorders"
                ],
                theory: "Chromosomes are organized packages of DNA and proteins. Karyotype analysis reveals chromosomal abnormalities that cause genetic disorders.",
                keyDefinitions: {
                    "Chromosome": "Organized structure of DNA and proteins",
                    "Karyotype": "Visual display of all chromosomes arranged by size",
                    "Diploid (2n)": "Two sets of chromosomes (46 in humans)",
                    "Haploid (n)": "One set of chromosomes (23 in human gametes)",
                    "Autosome": "Non-sex chromosome (chromosomes 1-22)",
                    "Sex Chromosome": "X or Y chromosome determining sex",
                    "Homologous Chromosomes": "Matching pair (one from each parent)",
                    "Sister Chromatids": "Identical copies joined at centromere",
                    "Centromere": "Constriction point where chromatids attach",
                    "Telomere": "Protective caps at chromosome ends"
                },
                chromosomeStructure: {
                    components: [
                        "DNA double helix",
                        "Histone proteins (DNA wraps around)",
                        "Non-histone proteins",
                        "Centromere (attachment point)",
                        "Telomeres (chromosome ends)"
                    ],
                    condensation: [
                        "Interphase: loosely packed (chromatin)",
                        "Prophase: condensing",
                        "Metaphase: fully condensed (visible under microscope)"
                    ],
                    types: {
                        metacentric: "Centromere in middle (equal arms)",
                        submetacentric: "Centromere off-center (unequal arms)",
                        acrocentric: "Centromere near end (very unequal arms)",
                        telocentric: "Centromere at end (not in humans)"
                    }
                },
                humanKaryotype: {
                    totalChromosomes: 46,
                    autosomes: "22 pairs (44 chromosomes)",
                    sexChromosomes: "1 pair (XX female, XY male)",
                    largestChromosome: "Chromosome 1 (~249 million base pairs)",
                    smallestChromosome: "Chromosome 21 (~47 million base pairs)",
                    yChromosome: "Smallest (~59 million base pairs)"
                },
                karyotypeAnalysis: {
                    process: [
                        "Obtain cells (blood, amniotic fluid)",
                        "Culture cells and arrest in metaphase",
                        "Stain chromosomes (G-banding)",
                        "Photograph and arrange by size",
                        "Analyze for abnormalities"
                    ],
                    uses: [
                        "Diagnose chromosomal disorders",
                        "Prenatal testing",
                        "Cancer analysis",
                        "Infertility investigation"
                    ]
                },
                abnormalities: {
                    numerical: {
                        aneuploidy: {
                            description: "Abnormal number of chromosomes",
                            types: {
                                monosomy: "Missing one chromosome (2n-1 = 45)",
                                trisomy: "Extra chromosome (2n+1 = 47)",
                                polyploidy: "Extra complete sets (3n, 4n)"
                            },
                            causes: "Nondisjunction during meiosis"
                        },
                        examples: [
                            "Down syndrome (Trisomy 21): 47 chromosomes",
                            "Turner syndrome (45,X): 45 chromosomes",
                            "Klinefelter syndrome (47,XXY): 47 chromosomes"
                        ]
                    },
                    structural: {
                        deletion: "Segment of chromosome lost",
                        duplication: "Segment copied",
                        inversion: "Segment reversed",
                        translocation: "Segment moved to different chromosome",
                        ringChromosome: "Ends fused together"
                    }
                },
                mainCategories: [
                    "Chromosome structure and organization",
                    "Human karyotype (46 chromosomes)",
                    "Karyotype analysis techniques",
                    "Chromosomal abnormalities"
                ],
                applications: [
                    "Prenatal diagnosis",
                    "Cancer cytogenetics",
                    "Genetic counseling",
                    "Evolution studies (comparing karyotypes)"
                ]
            },

            genetic_disorders: {
                title: "Genetic Disorders: Inherited Diseases",
                concepts: [
                    "Genetic disorders caused by mutations or chromosomal abnormalities",
                    "Can be inherited or occur spontaneously",
                    "Range from mild to lethal",
                    "Understanding helps with diagnosis and treatment"
                ],
                theory: "Genetic disorders result from mutations in DNA or abnormal chromosome numbers. Some are inherited following Mendelian patterns, while others result from chromosomal aberrations.",
                keyDefinitions: {
                    "Genetic Disorder": "Disease caused by abnormality in genome",
                    "Hereditary": "Passed from parent to offspring",
                    "Congenital": "Present at birth (may or may not be genetic)",
                    "De Novo Mutation": "New mutation not inherited from parents",
                    "Penetrance": "Percentage of individuals with genotype showing phenotype",
                    "Expressivity": "Degree to which trait is expressed",
                    "Genetic Screening": "Testing for genetic disorders",
                    "Carrier": "Heterozygote for recessive disorder (unaffected)"
                },
                disordersByType: {
                    singleGeneDisorders: {
                        autosomalRecessive: [
                            {
                                name: "Cystic Fibrosis",
                                gene: "CFTR gene (chromosome 7)",
                                effect: "Defective chloride channel, thick mucus",
                                symptoms: "Lung infections, digestive problems",
                                frequency: "1 in 3,500 (Caucasians)",
                                inheritance: "25% if both parents carriers"
                            },
                            {
                                name: "Sickle Cell Disease",
                                gene: "HBB gene (chromosome 11)",
                                effect: "Abnormal hemoglobin, sickle-shaped red blood cells",
                                symptoms: "Pain, anemia, organ damage",
                                frequency: "1 in 365 (African Americans)",
                                advantage: "Carriers resistant to malaria"
                            },
                            {
                                name: "Tay-Sachs Disease",
                                gene: "HEXA gene (chromosome 15)",
                                effect: "Lipid accumulation in brain",
                                symptoms: "Progressive neurological decline, death by age 5",
                                frequency: "High in Ashkenazi Jews"
                            },
                            {
                                name: "Phenylketonuria (PKU)",
                                gene: "PAH gene (chromosome 12)",
                                effect: "Cannot break down phenylalanine",
                                symptoms: "Intellectual disability if untreated",
                                treatment: "Special diet low in phenylalanine"
                            }
                        ],
                        autosomalDominant: [
                            {
                                name: "Huntington's Disease",
                                gene: "HTT gene (chromosome 4)",
                                effect: "CAG repeat expansion, brain degeneration",
                                symptoms: "Movement problems, cognitive decline",
                                onset: "Usually 30-50 years old",
                                inheritance: "50% if one parent affected"
                            },
                            {
                                name: "Marfan Syndrome",
                                gene: "FBN1 gene (chromosome 15)",
                                effect: "Connective tissue disorder",
                                symptoms: "Tall, long limbs, heart problems",
                                variability: "High expressivity variation"
                            },
                            {
                                name: "Achondroplasia",
                                gene: "FGFR3 gene (chromosome 4)",
                                effect: "Bone growth disorder",
                                symptoms: "Dwarfism, short limbs",
                                note: "Often from de novo mutation"
                            }
                        ],
                        xLinkedRecessive: [
                            {
                                name: "Hemophilia A",
                                gene: "F8 gene (X chromosome)",
                                effect: "Blood clotting factor VIII deficiency",
                                symptoms: "Excessive bleeding",
                                affected: "Almost exclusively males",
                                carriers: "Females usually asymptomatic"
                            },
                            {
                                name: "Duchenne Muscular Dystrophy",
                                gene: "DMD gene (X chromosome)",
                                effect: "Dystrophin protein absent",
                                symptoms: "Progressive muscle weakness",
                                onset: "Early childhood",
                                prognosis: "Wheelchair by teens, reduced lifespan"
                            },
                            {
                                name: "Color Blindness (Red-Green)",
                                gene: "OPN1LW, OPN1MW genes (X chromosome)",
                                effect: "Defective color receptors",
                                symptoms: "Cannot distinguish red and green",
                                frequency: "8% males, 0.5% females"
                            }
                        ]
                    },
                    chromosomalDisorders: [
                        {
                            name: "Down Syndrome (Trisomy 21)",
                            cause: "Extra chromosome 21",
                            karyotype: "47,XX,+21 or 47,XY,+21",
                            symptoms: "Intellectual disability, characteristic facial features, heart defects",
                            frequency: "1 in 700 births",
                            riskFactor: "Increases with maternal age"
                        },
                        {
                            name: "Turner Syndrome",
                            cause: "Missing or incomplete X chromosome",
                            karyotype: "45,X",
                            affects: "Females only",
                            symptoms: "Short stature, infertility, heart defects",
                            frequency: "1 in 2,500 females"
                        },
                        {
                            name: "Klinefelter Syndrome",
                            cause: "Extra X chromosome",
                            karyotype: "47,XXY",
                            affects: "Males only",
                            symptoms: "Tall, small testes, infertility, reduced testosterone",
                            frequency: "1 in 500-1,000 males"
                        },
                        {
                            name: "Edwards Syndrome (Trisomy 18)",
                            cause: "Extra chromosome 18",
                            karyotype: "47,XX,+18 or 47,XY,+18",
                            symptoms: "Severe intellectual disability, multiple abnormalities",
                            prognosis: "Most die within first year"
                        },
                        {
                            name: "Patau Syndrome (Trisomy 13)",
                            cause: "Extra chromosome 13",
                            karyotype: "47,XX,+13 or 47,XY,+13",
                            symptoms: "Severe brain, heart defects",
                            prognosis: "Most die within first month"
                        }
                    ],
                    multifactorialDisorders: {
                        description: "Caused by multiple genes plus environment",
                        examples: [
                            "Heart disease",
                            "Diabetes",
                            "Cancer",
                            "Cleft lip/palate",
                            "Neural tube defects"
                        ]
                    }
                },
                detection: {
                    prenatalTesting: [
                        "Amniocentesis (test amniotic fluid)",
                        "Chorionic villus sampling (CVS)",
                        "Ultrasound",
                        "Non-invasive prenatal testing (NIPT)"
                    ],
                    newbornScreening: "Heel prick test for PKU, sickle cell, others",
                    geneticCounseling: "Assess risk, explain options"
                },
                mainCategories: [
                    "Single gene disorders (Mendelian)",
                    "Chromosomal disorders",
                    "Multifactorial disorders",
                    "Mitochondrial disorders"
                ],
                applications: [
                    "Genetic counseling and family planning",
                    "Prenatal diagnosis",
                    "Newborn screening programs",
                    "Gene therapy development"
                ]
            },

            genetic_technology: {
                title: "Genetic Technology: Tools and Applications",
                concepts: [
                    "Modern tools allow DNA manipulation and analysis",
                    "PCR amplifies specific DNA sequences",
                    "Gel electrophoresis separates DNA fragments",
                    "CRISPR enables precise gene editing"
                ],
                theory: "Advances in genetic technology have revolutionized biology, medicine, and agriculture. These tools allow us to read, analyze, and edit genetic information.",
                keyDefinitions: {
                    "Recombinant DNA": "DNA from two different sources combined",
                    "Restriction Enzyme": "Enzyme that cuts DNA at specific sequences",
                    "Vector": "DNA molecule used to carry foreign DNA (plasmid, virus)",
                    "Clone": "Genetically identical copy",
                    "Transgenic Organism": "Contains gene from different species",
                    "GMO": "Genetically Modified Organism",
                    "Gene Therapy": "Treating disease by modifying genes",
                    "Genome": "Complete set of genetic information"
                },
                technologies: {
                    PCR: {
                        name: "Polymerase Chain Reaction",
                        inventor: "Kary Mullis (1983)",
                        purpose: "Amplify (copy) specific DNA sequences",
                        process: [
                            "Denaturation: Heat to 95°C (separate strands)",
                            "Annealing: Cool to 55°C (primers bind)",
                            "Extension: Heat to 72°C (DNA polymerase copies)"
                        ],
                        cycles: "20-40 cycles (exponential amplification)",
                        applications: [
                            "Medical diagnosis (detect pathogens)",
                            "Forensics (DNA profiling)",
                            "Research (gene cloning)",
                            "COVID-19 testing"
                        ],
                        advantages: "Fast, sensitive, specific"
                    },
                    gelElectrophoresis: {
                        name: "Gel Electrophoresis",
                        purpose: "Separate DNA fragments by size",
                        process: [
                            "DNA loaded into wells in gel",
                            "Electric current applied",
                            "DNA (negative) moves toward positive electrode",
                            "Smaller fragments move faster",
                            "Stain to visualize bands"
                        ],
                        applications: [
                            "DNA fingerprinting",
                            "Confirm PCR results",
                            "Analyze restriction digests",
                            "Paternity testing"
                        ]
                    },
                    DNASequencing: {
                        name: "DNA Sequencing",
                        purpose: "Determine exact nucleotide order",
                        methods: {
                            sangerSequencing: "Traditional method (chain termination)",
                            nextGenSequencing: "High-throughput, parallel sequencing"
                        },
                        applications: [
                            "Human Genome Project",
                            "Identify mutations",
                            "Evolutionary studies",
                            "Personalized medicine"
                        ],
                        milestone: "Human genome sequenced (2003)"
                    },
                    CRISPR: {
                        name: "CRISPR-Cas9",
                        discovery: "2012 (Doudna, Charpentier)",
                        purpose: "Precise gene editing",
                        mechanism: [
                            "Guide RNA targets specific DNA sequence",
                            "Cas9 enzyme cuts DNA at target",
                            "Cell repairs cut (can insert, delete, modify)"
                        ],
                        advantages: [
                            "Precise",
                            "Relatively easy",
                            "Inexpensive",
                            "Versatile"
                        ],
                        applications: [
                            "Correct genetic mutations",
                            "Create disease models",
                            "Develop new crops",
                            "Gene therapy trials"
                        ],
                        ethics: "Concerns about germline editing, designer babies"
                    },
                    geneCloning: {
                        name: "Gene Cloning (Recombinant DNA)",
                        purpose: "Make many copies of gene or produce protein",
                        process: [
                            "Isolate gene of interest",
                            "Insert into vector (plasmid)",
                            "Transform into bacteria",
                            "Bacteria replicate, produce protein"
                        ],
                        applications: [
                            "Produce insulin (human)",
                            "Growth hormone production",
                            "Vaccines",
                            "Research"
                        ]
                    },
                    geneticEngineering: {
                        name: "Genetic Engineering",
                        description: "Directly manipulate organism's genes",
                        examples: {
                            agriculture: [
                                "Bt corn (insect resistance)",
                                "Golden rice (vitamin A enriched)",
                                "Herbicide-resistant crops"
                            ],
                            medicine: [
                                "Insulin production in bacteria",
                                "Gene therapy for inherited diseases",
                                "CAR T-cell cancer therapy"
                            ],
                            research: [
                                "Knockout mice (gene function studies)",
                                "Fluorescent proteins (GFP)",
                                "Disease models"
                            ]
                        }
                    },
                    DNAFingerprinting: {
                        name: "DNA Fingerprinting (Profiling)",
                        purpose: "Identify individuals by DNA",
                        method: "Analyze variable regions (STRs, VNTRs)",
                        applications: [
                            "Forensics (crime scenes)",
                            "Paternity testing",
                            "Disaster victim identification",
                            "Wildlife conservation"
                        ],
                        uniqueness: "Extremely low probability of match (except identical twins)"
                    }
                },
                applications: {
                    medicine: [
                        "Disease diagnosis",
                        "Personalized medicine",
                        "Gene therapy",
                        "Pharmacogenomics"
                    ],
                    agriculture: [
                        "Crop improvement",
                        "Pest resistance",
                        "Increased yield",
                        "Nutritional enhancement"
                    ],
                    forensics: [
                        "Criminal identification",
                        "Paternity testing",
                        "Historical mysteries"
                    ],
                    research: [
                        "Gene function studies",
                        "Evolution and phylogenetics",
                        "Disease models"
                    ]
                },
                ethicalIssues: [
                    "GMO safety and labeling",
                    "Gene editing in humans",
                    "Designer babies concerns",
                    "Genetic privacy",
                    "Access and equity"
                ],
                mainCategories: [
                    "DNA amplification and analysis (PCR, sequencing)",
                    "Gene editing (CRISPR, gene therapy)",
                    "Genetic engineering (GMOs, recombinant DNA)",
                    "Forensic applications (DNA profiling)"
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            mendelian_genetics: {
                'Dominance': [
                    'Thinking dominant alleles are "better" or more common (dominance refers to expression, not frequency or quality)',
                    'Believing dominant traits always appear in every generation (recessive traits can skip generations)',
                    'Confusing dominant with "stronger" (dominant just masks recessive in heterozygote)'
                ],
                'Genotype vs Phenotype': [
                    'Thinking genotype and phenotype are the same (genotype is genetic makeup, phenotype is physical expression)',
                    'Believing all genotypes produce different phenotypes (AA and Aa can look identical)',
                    'Assuming you can always determine genotype from phenotype (need test cross for dominant phenotypes)'
                ]
            },
            punnett_squares: {
                'Probability': [
                    'Thinking ratios guarantee exact offspring numbers (they\'re probabilities, not guarantees)',
                    'Believing previous offspring affect next ones (each fertilization is independent event)',
                    'Confusing ratios with percentages (3:1 ratio = 75% dominant, not 3%)'
                ],
                'Setup': [
                    'Forgetting to list all possible gametes (must include all combinations)',
                    'Mixing up parental gametes (rows vs columns)',
                    'Not separating alleles during gamete formation (gametes have one allele per gene)'
                ]
            },
            dna_structure: {
                'Base Pairing': [
                    'Thinking any bases can pair (only A-T and G-C)',
                    'Believing RNA uses thymine (RNA uses uracil instead of thymine)',
                    'Confusing hydrogen bonds with covalent bonds (H-bonds between bases, covalent in backbone)'
                ],
                'Structure': [
                    'Thinking both strands run same direction (they\'re antiparallel: 5\'→3\' and 3\'→5\')',
                    'Believing DNA is always double-stranded (some viruses have single-stranded DNA)',
                    'Confusing DNA and chromosomes (chromosomes are packaged DNA + proteins)'
                ]
            },
            dna_replication: {
                'Mechanism': [
                    'Thinking new DNA is entirely new (it\'s semiconservative: one old, one new strand)',
                    'Believing both strands synthesized same way (leading continuous, lagging discontinuous)',
                    'Confusing direction of synthesis (always 5\'→3\', never 3\'→5\')'
                ],
                'Enzymes': [
                    'Thinking DNA polymerase starts synthesis (it needs primer, primase makes RNA primer)',
                    'Believing helicase copies DNA (it only unwinds, polymerase copies)',
                    'Forgetting about proofreading (DNA polymerase has error-checking)'
                ]
            },
            transcription: {
                'DNA to RNA': [
                    'Thinking both DNA strands are copied (only template strand is used)',
                    'Believing mRNA is identical to DNA (it\'s complementary, and uses U not T)',
                    'Confusing coding strand with template strand (mRNA matches coding strand sequence)'
                ],
                'Processing': [
                    'Thinking bacterial and eukaryotic transcription are identical (eukaryotes have RNA processing)',
                    'Believing introns are translated (they\'re removed during splicing)',
                    'Forgetting about 5\' cap and poly-A tail in eukaryotes'
                ]
            },
            translation: {
                'Genetic Code': [
                    'Thinking one nucleotide codes for one amino acid (it takes three: a codon)',
                    'Believing there are 20 codons for 20 amino acids (there are 64 codons, code is redundant)',
                    'Confusing codon with anticodon (codon on mRNA, anticodon on tRNA)'
                ],
                'Process': [
                    'Thinking translation happens in nucleus (it\'s at ribosomes in cytoplasm)',
                    'Believing tRNA carries codons (tRNA has anticodons, brings amino acids)',
                    'Forgetting that start codon (AUG) codes for methionine'
                ]
            },
            mutations: {
                'Types and Effects': [
                    'Thinking all mutations are harmful (most are neutral, some beneficial)',
                    'Believing all mutations cause disease (many have no effect)',
                    'Confusing somatic and germline mutations (only germline passed to offspring)'
                ],
                'Frameshift vs Point': [
                    'Thinking substitutions always change amino acids (silent mutations don\'t)',
                    'Believing point mutations are worse than frameshifts (usually opposite)',
                    'Forgetting that insertions/deletions of 3 dont cause frameshift (add/remove whole codon)'
                ]
            },
            gene_expression: {
                'Regulation': [
                    'Thinking all genes are always "on" (most genes are regulated)',
                    'Believing all cells express all genes (different cell types express different genes)',
                    'Confusing transcription factors with genes (transcription factors are proteins that regulate genes)'
                ],
                'Central Dogma': [
                    'Thinking information can flow from protein back to DNA (it\'s one-way: DNA→RNA→Protein)',
                    'Believing all DNA codes for proteins (most DNA is non-coding)',
                    'Forgetting about RNA as final product (rRNA, tRNA don\'t become protein)'
                ]
            },
            inheritance_patterns: {
                'Complex Patterns': [
                    'Thinking all traits show complete dominance (many show incomplete dominance or codominance)',
                    'Believing sex-linked traits only affect males (females can be affected if homozygous)',
                    'Confusing incomplete dominance with codominance (blending vs both expressed)'
                ],
                'Sex-Linked': [
                    'Thinking males can be carriers for X-linked traits (males only have one X, so express whatever allele they have)',
                    'Believing fathers pass X-linked traits to sons (fathers give Y to sons, X to daughters)',
                    'Forgetting that carrier females can show mild symptoms (X-inactivation varies)'
                ]
            },
            chromosomes_karyotypes: {
                'Chromosome Number': [
                    'Thinking diploid means two chromosomes (it means two sets, 46 total in humans)',
                    'Believing all organisms have same number of chromosomes (varies widely by species)',
                    'Confusing sister chromatids with homologous chromosomes (sister chromatids are identical copies)'
                ],
                'Abnormalities': [
                    'Thinking all trisomies are viable (most cause miscarriage)',
                    'Believing more chromosomes is always worse (depends on which chromosome)',
                    'Forgetting that sex chromosome abnormalities are often less severe than autosomal'
                ]
            },
            genetic_disorders: {
                'Inheritance': [
                    'Thinking genetic diseases are always inherited (some are de novo mutations)',
                    'Believing carriers of recessive diseases are affected (carriers are usually healthy)',
                    'Confusing "genetic" with "hereditary" (genetic can be spontaneous mutation)'
                ],
                'Risk': [
                    'Thinking 25% risk means 1 in 4 children will be affected (it\'s probability per child)',
                    'Believing dominant disorders can\'t appear spontaneously (many are de novo)',
                    'Forgetting about variable expressivity (same genotype can have different severity)'
                ]
            },
            genetic_technology: {
                'GMOs': [
                    'Thinking GMOs contain "fish genes in tomatoes" type impossibilities (genes are genes, species distinction matters less)',
                    'Believing all genetic modification is artificial (selective breeding is genetic modification too)',
                    'Confusing GMO with "chemicals" or "not natural" (changing DNA, not adding chemicals)'
                ],
                'CRISPR': [
                    'Thinking CRISPR can fix any genetic problem easily (still experimental, many challenges)',
                    'Believing gene editing is 100% precise (can have off-target effects)',
                    'Forgetting ethical concerns about germline editing'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use side-by-side diagrams to highlight differences',
                effectiveness: 'High for structural and process comparisons'
            },
            punnett_demonstration: {
                method: 'Work through Punnett square step-by-step with explanation',
                effectiveness: 'High for understanding probability and crosses'
            },
            analogy: {
                method: 'Relate genetic concepts to familiar everyday examples',
                effectiveness: 'High for abstract molecular concepts'
            },
            step_by_step: {
                method: 'Break down complex processes into sequential steps',
                effectiveness: 'High for understanding DNA replication, transcription, translation'
            },
            contrast_table: {
                method: 'Create comparison tables showing key differences',
                effectiveness: 'High for distinguishing similar concepts (DNA vs RNA, mitosis vs meiosis)'
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
                focus: 'Historical development and significance',
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
                vocabulary: 'standard genetic terms',
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
    handleGeneticsProblem(config) {
        const { topic, parameters, subTopic, context } = config;

        try {
            // Parse the genetics query
            this.currentProblem = this.parseGeneticsProblem(topic, parameters, subTopic, context);

            // Get content based on topic
            this.currentContent = this.getGeneticsContent(this.currentProblem);

            // Generate content steps/sections
            this.contentSteps = this.generateGeneticsContent(this.currentProblem, this.currentContent);

            // Generate diagram data if applicable
            this.generateGeneticsDiagramData();

            // Generate workbook
            this.generateGeneticsWorkbook();

            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                diagrams: this.diagramData
            };

        } catch (error) {
            throw new Error(`Failed to process genetics topic: ${error.message}`);
        }
    }

    parseGeneticsProblem(topic, parameters = {}, subTopic = null, context = {}) {
        let topicType = null;

        // Match topic to handler
        for (const [type, config] of Object.entries(this.geneticsTopics)) {
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
            throw new Error(`Unable to recognize genetics topic: ${topic}`);
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

    getGeneticsContent(problem) {
        const handler = this.geneticsTopics[problem.type]?.handler;
        if (!handler) {
            throw new Error(`No handler available for genetics topic: ${problem.type}`);
        }

        return handler(problem);
    }

    // TOPIC HANDLERS - Each returns structured genetics content

    handleMendelianGenetics(problem) {
        return {
            topic: "Mendelian Genetics",
            discoverer: "Gregor Mendel (1822-1884)",
            experimentalOrganism: "Pea plants (Pisum sativum)",
            timeframe: "1856-1863",
            
            mendelLaws: {
                lawOfDominance: {
                    statement: "When two different alleles are present, one may mask the other",
                    explanation: "In heterozygote (Aa), dominant allele (A) expressed, recessive (a) masked",
                    example: "Tall (T) dominant over short (t): Tt plants are tall"
                },
                lawOfSegregation: {
                    statement: "Allele pairs separate during gamete formation",
                    explanation: "Each gamete receives only one allele from each pair",
                    example: "Aa parent produces 50% A gametes and 50% a gametes",
                    mechanism: "Occurs during meiosis when homologous chromosomes separate"
                },
                lawOfIndependentAssortment: {
                    statement: "Genes for different traits separate independently",
                    explanation: "Inheritance of one trait doesn't affect inheritance of another",
                    example: "Gene for seed color sorts independently from gene for seed shape",
                    limitation: "Only true for genes on different chromosomes (not linked)"
                }
            },

            keyTerms: {
                gene: "Unit of heredity; segment of DNA coding for trait",
                allele: "Alternative form of gene (e.g., T or t for height)",
                dominant: "Allele expressed in heterozygote (capital letter: A, B, T)",
                recessive: "Allele only expressed when homozygous (lowercase: a, b, t)",
                genotype: "Genetic makeup (e.g., Aa, TT, tt)",
                phenotype: "Physical appearance (e.g., tall, short, purple flowers)",
                homozygous: "Two identical alleles (AA or aa); true-breeding",
                heterozygous: "Two different alleles (Aa); hybrid",
                P_generation: "Parental generation (original cross)",
                F1_generation: "First filial generation (offspring of P)",
                F2_generation: "Second filial generation (offspring of F1 × F1)",
                testCross: "Cross with homozygous recessive to determine unknown genotype"
            },

            mendelTraits: [
                { trait: "Seed shape", dominant: "Round (R)", recessive: "Wrinkled (r)" },
                { trait: "Seed color", dominant: "Yellow (Y)", recessive: "Green (y)" },
                { trait: "Flower color", dominant: "Purple (P)", recessive: "White (p)" },
                { trait: "Pod shape", dominant: "Inflated (I)", recessive: "Constricted (i)" },
                { trait: "Pod color", dominant: "Green (G)", recessive: "Yellow (g)" },
                { trait: "Flower position", dominant: "Axial (A)", recessive: "Terminal (a)" },
                { trait: "Plant height", dominant: "Tall (T)", recessive: "Short (t)" }
            ],

            crossTypes: {
                monohybridCross: {
                    description: "Cross involving one trait",
                    example: "Tt × Tt",
                    F1ratio: "All Tt (all tall) from TT × tt",
                    F2ratio: "3:1 phenotypic (3 tall : 1 short)",
                    F2genotypeRatio: "1:2:1 (1 TT : 2 Tt : 1 tt)",
                    diagram: "2×2 Punnett square"
                },
                dihybridCross: {
                    description: "Cross involving two traits",
                    example: "TtYy × TtYy",
                    F1ratio: "All TtYy from TTYY × ttyy",
                    F2ratio: "9:3:3:1 phenotypic",
                    breakdown: "9 tall yellow : 3 tall green : 3 short yellow : 1 short green",
                    F2genotypeRatio: "Multiple genotypes possible",
                    diagram: "4×4 Punnett square"
                },
                testCross: {
                    description: "Cross unknown with homozygous recessive",
                    purpose: "Determine if dominant phenotype is AA or Aa",
                    interpretation: {
                        ifAA: "AA × aa → All Aa (all dominant phenotype)",
                        ifAa: "Aa × aa → 50% Aa, 50% aa (1:1 ratio)"
                    },
                    example: "Tall plant (T?) × short plant (tt)"
                }
            },

            probability: {
                rules: {
                    multiplicationRule: "Probability of independent events both occurring = P(A) × P(B)",
                    additionRule: "Probability of either event occurring = P(A) + P(B)",
                    example: "Probability of Aa × Aa → aa offspring = 1/2 × 1/2 = 1/4"
                },
                independence: "Each fertilization is independent event (previous offspring don't affect next)",
                ratiosAsProbabilities: "3:1 ratio means 3/4 (75%) dominant, 1/4 (25%) recessive"
            },

            whyPeaPlants: [
                "Easy to grow and produce many offspring",
                "Short generation time",
                "Distinct either/or traits (no blending)",
                "Can self-pollinate or cross-pollinate",
                "True-breeding varieties available"
            ],

            historicalContext: {
                publication: "Published 1866, ignored until 1900",
                rediscovery: "Three scientists independently rediscovered (1900)",
                significance: "Foundation of modern genetics",
                nobelPrize: "Mendel died before Nobel Prizes established, but work recognized as fundamental"
            },

            category: 'mendelian_genetics'
        };
    }

    handlePunnettSquares(problem) {
        return {
            topic: "Punnett Squares",
            developer: "Reginald Punnett (1875-1967)",
            purpose: "Visual tool for predicting genetic outcomes of crosses",

            basicPrinciples: {
                concept: "Organize all possible gamete combinations",
                structure: "Grid showing parental gametes and offspring genotypes",
                interpretation: "Each box represents equally probable offspring genotype"
            },

            howToConstruct: {
                step1: {
                    description: "Determine parental genotypes",
                    example: "Parent 1: Aa, Parent 2: Aa"
                },
                step2: {
                    description: "List possible gametes for each parent",
                    explanation: "Each gamete gets one allele per gene (law of segregation)",
                    example: "Aa parent can make A or a gametes"
                },
                step3: {
                    description: "Set up grid",
                    explanation: "One parent's gametes across top, other parent's down side",
                    gridSize: "2×2 for monohybrid, 4×4 for dihybrid"
                },
                step4: {
                    description: "Fill in boxes",
                    explanation: "Combine gametes from row and column",
                    example: "A (top) + a (side) = Aa"
                },
                step5: {
                    description: "Analyze results",
                    tasks: ["Count genotypes", "Determine phenotypes", "Calculate ratios"]
                }
            },

            monohybridCross: {
                description: "Cross involving one gene",
                example: "Aa × Aa",
                setup: {
                    parent1Gametes: ["A", "a"],
                    parent2Gametes: ["A", "a"],
                    gridSize: "2×2 (4 boxes)"
                },
                results: {
                    offspring: ["AA", "Aa", "Aa", "aa"],
                    genotypeRatio: "1 AA : 2 Aa : 1 aa",
                    phenotypeRatio: "3 dominant : 1 recessive (assuming complete dominance)",
                    probabilities: {
                        AA: "25% (1/4)",
                        Aa: "50% (2/4)",
                        aa: "25% (1/4)",
                        dominantPhenotype: "75% (3/4)",
                        recessivePhenotype: "25% (1/4)"
                    }
                }
            },

            dihybridCross: {
                description: "Cross involving two genes",
                example: "AaBb × AaBb",
                setup: {
                    parent1Gametes: ["AB", "Ab", "aB", "ab"],
                    parent2Gametes: ["AB", "Ab", "aB", "ab"],
                    gridSize: "4×4 (16 boxes)",
                    gameteFormation: "Use FOIL method or branching diagram to find all combinations"
                },
                results: {
                    genotypeRatio: "Complex (9 different genotypes possible)",
                    phenotypeRatio: "9:3:3:1",
                    breakdown: {
                        "9/16": "Both dominant (A_B_)",
                        "3/16": "First dominant, second recessive (A_bb)",
                        "3/16": "First recessive, second dominant (aaB_)",
                        "1/16": "Both recessive (aabb)"
                    }
                }
            },

            testCross: {
                description: "Cross unknown genotype with homozygous recessive",
                purpose: "Determine if organism with dominant phenotype is homozygous or heterozygous",
                example: "T? (tall plant) × tt (short plant)",
                interpretation: {
                    scenario1: {
                        unknownGenotype: "TT (homozygous dominant)",
                        cross: "TT × tt",
                        offspring: "All Tt (100% tall)",
                        conclusion: "Unknown was TT"
                    },
                    scenario2: {
                        unknownGenotype: "Tt (heterozygous)",
                        cross: "Tt × tt",
                        offspring: "50% Tt (tall), 50% tt (short)",
                        ratio: "1:1",
                        conclusion: "Unknown was Tt"
                    }
                }
            },

            specialCases: {
                incompleteDominance: {
                    description: "Heterozygote shows intermediate phenotype",
                    example: "Red (RR) × White (WW) → Pink (RW)",
                    punnettSquare: "RW × RW → 1 RR : 2 RW : 1 WW",
                    phenotypeRatio: "1 red : 2 pink : 1 white (not 3:1)",
                    note: "Genotypic and phenotypic ratios are same"
                },
                codominance: {
                    description: "Both alleles fully expressed",
                    example: "Blood type: I^A I^B (type AB shows both A and B antigens)",
                    punnettSquare: "I^A i × I^B i",
                    offspring: "I^A I^B (AB), I^A i (A), I^B i (B), ii (O)",                                                                        note: "All genotypes distinguishable by phenotype"                                                                          },
                multipleAlleles: {                                                  description: "More than two alleles exist in population",
                    example: "ABO blood: I^A, I^B, i",                              note: "Still only two alleles per individual, but Punnett square shows different allele combinations"                       }
            },
                                                                            commonMistakes: [
                "Forgetting to separate alleles in gametes (gametes have one allele per gene)",
                "Not listing all possible gamete combinations (use FOIL for dihybrid)",
                "Confusing probability with certainty (3:1 doesn't mean exactly 3 and 1)",
                "Mixing up rows and columns (keep track of which parent is which)",
                "Forgetting that each box represents equal probability"
            ],

            practiceProblems: {
                easy: "Aa × Aa (monohybrid, complete dominance)",
                medium: "AaBb × aabb (dihybrid, one heterozygous parent)",
                hard: "AaBbCc × AaBbCc (trihybrid, three traits)"
            },

            category: 'punnett_squares'
        };
    }

    handleDNAStructure(problem) {
        return {
            topic: "DNA Structure",
            fullName: "Deoxyribonucleic Acid",
            discoverers: {
                structure: "James Watson and Francis Crick (1953)",
                xRayData: "Rosalind Franklin and Maurice Wilkins",
                chemicalComposition: "Phoebus Levene (nucleotides)",                                                                            transformingPrinciple: "Oswald Avery, Colin MacLeod, Maclyn McCarty (DNA is genetic material)"
            },
                                                                            basicStructure: {
                overview: "Double helix - two strands twisted into spiral",                                                                     comparison: "Like a twisted ladder",
                dimensions: {
                    width: "2 nanometers",                                          helixTurn: "Complete turn every 10 base pairs (3.4 nm)",
                    length: "Human DNA stretched out ≈ 2 meters per cell"                                                                       }
            },                                                  
            nucleotideStructure: {                                              description: "Building block of DNA",
                components: {                                                       phosphateGroup: {
                        formula: "PO₄³⁻",                                               location: "Outside of helix",
                        function: "Links nucleotides together (phosphodiester bonds)"
                    },                                                              deoxyriboseSugar: {
                        description: "5-carbon sugar",
                        name: "Deoxyribose (lacks oxygen at 2' carbon)",                                                                                carbons: "Numbered 1' to 5' (prime notation)",
                        connections: "Phosphate at 5' carbon, base at 1' carbon, next sugar at 3' carbon"
                    },                                                              nitrogenousBase: {
                        description: "Contains nitrogen, forms base pairs",                                                                             types: "Purines (A, G) and Pyrimidines (T, C)"
                    }
                },
                bond: "Phosphodiester bond connects 3' carbon of one sugar to 5' phosphate of next"                                         },

            nitrogenousBases: {
                purines: {
                    description: "Double-ring structure (larger)",
                    bases: {                                                            adenine: {
                            symbol: "A",
                            pairs: "Thymine (T)",
                            bonds: "2 hydrogen bonds",
                            mnemonic: "Apple Tree"
                        },
                        guanine: {
                            symbol: "G",
                            pairs: "Cytosine (C)",
                            bonds: "3 hydrogen bonds",
                            mnemonic: "Car Garage"
                        }
                    }
                },
                pyrimidines: {                                                      description: "Single-ring structure (smaller)",                                                                                 bases: {
                        thymine: {
                            symbol: "T",                                                    pairs: "Adenine (A)",
                            uniqueTo: "DNA (RNA uses uracil instead)"
                        },                                                              cytosine: {
                            symbol: "C",                                                    pairs: "Guanine (G)",
                            foundIn: "Both DNA and RNA"                                 }
                    }                                                           },
                chargaffRule: "Amount of A = amount of T; amount of G = amount of C"
            },                                                  
            basePairing: {
                complementary: "A pairs with T, G pairs with C",
                mechanism: "Hydrogen bonds between bases",
                specificity: {                                                      AT_pairs: "2 hydrogen bonds (weaker)",
                    GC_pairs: "3 hydrogen bonds (stronger)",
                    reason: "Purine (large) must pair with pyrimidine (small) to maintain uniform width"
                },
                significance: "Allows DNA replication and accurate copying"
            },

            doubleHelix: {
                description: "Two antiparallel strands twisted into right-handed helix",
                antiparallel: {
                    meaning: "Strands run in opposite directions",
                    notation: "One strand 5'→3', other strand 3'→5'",
                    importance: "Critical for replication and transcription"
                },
                backbone: {
                    composition: "Alternating sugar and phosphate",
                    location: "Outside of helix",
                    charge: "Negative (from phosphate groups)"
                },
                bases: {
                    location: "Inside helix (protected)",
                    orientation: "Perpendicular to backbone (like ladder rungs)",
                    stacking: "Bases stack on top of each other (hydrophobic interactions)"                                                     },
                grooves: {
                    majorGroove: "Wide groove where proteins can bind and read sequence",
                    minorGroove: "Narrow groove, less protein binding"
                }
            },

            DNAforms: {
                BDNA: {
                    description: "Most common form under normal conditions",
                    characteristics: "Right-handed helix, described by Watson-Crick"
                },
                ADNA: {
                    description: "Dehydrated form",
                    characteristics: "Wider, shorter helix"
                },
                ZDNA: {
                    description: "Left-handed helix",
                    characteristics: "Formed in regions with alternating purines/pyrimidines",
                    function: "May play role in gene regulation"
                }
            },                                                  
            DNApackaging: {                                                     problem: "2 meters of DNA must fit in nucleus (~10 μm diameter)",
                solution: "Hierarchical packaging with histones",
                levels: [                                                           "DNA double helix (2 nm)",                                      "Nucleosome: DNA wrapped around histone octamer (11 nm)",
                    "Chromatin fiber: 'beads on a string' (30 nm)",
                    "Looped domains (300 nm)",                                      "Condensed chromatin (700 nm)",
                    "Metaphase chromosome - most condensed (1400 nm)"
                ],                                                              histones: {
                    description: "Proteins that DNA wraps around",
                    types: "H1, H2A, H2B, H3, H4",                                  nucleosome: "8 histones (2 each of H2A, H2B, H3, H4) with DNA wrapped 1.65 turns",                                              charge: "Positively charged (bind to negative DNA)"                                                                         }
            },

            functionsOfDNA: [
                "Stores genetic information",
                "Transmits hereditary information to offspring",                "Directs protein synthesis (via RNA)",
                "Allows for genetic variation through mutations"            ],
                                                                            category: 'dna_structure'
        };
    }

    handleDNAReplication(problem) {
        return {                                                            topic: "DNA Replication",
            purpose: "Accurately copy DNA before cell division",
            timing: "S phase of interphase (cell cycle)",                   location: "Nucleus (eukaryotes), cytoplasm (prokaryotes)",                                                          
            replicationModel: {
                semiconservative: {
                    description: "Each new DNA molecule has one original (old) strand and one newly synthesized strand",
                    evidence: "Meselson-Stahl experiment (1958)",
                    experiment: {                                                       method: "Grew E. coli in heavy nitrogen (¹⁵N), then light nitrogen (¹⁴N)",
                        results: "After one replication: all DNA intermediate density (one heavy, one light strand)",
                        conclusion: "Proved semiconservative replication"
                    },                                                              alternatives: {
                        conservative: "Both old strands together, both new strands together (disproven)",
                        dispersive: "Old and new DNA interspersed (disproven)"
                    }
                }
            },                                                  
            keyEnzymes: {
                helicase: {                                                         function: "Unwinds DNA double helix",
                    mechanism: "Breaks hydrogen bonds between base pairs",
                    result: "Creates replication fork (Y-shaped region)",
                    energySource: "ATP"
                },
                singleStrandBindingProteins: {
                    abbreviation: "SSB proteins",
                    function: "Stabilize single-stranded DNA",
                    mechanism: "Prevent bases from re-pairing while replication occurs"
                },                                                              topoisomerase: {
                    function: "Relieves tension from unwinding",
                    mechanism: "Cuts and rejoins DNA strands ahead of replication fork",
                    problem: "Unwinding creates supercoiling (overwinding ahead)",
                    solution: "Topoisomerase prevents tangles"
                },
                primase: {
                    function: "Synthesizes short RNA primers",                      reason: "DNA polymerase cannot start from scratch, needs 3'-OH group",
                    primer: "Short RNA sequence (about 10 nucleotides)",
                    removal: "Primers later removed and replaced with DNA"
                },
                dnaPolymeraseIII: {
                    function: "Main enzyme adding nucleotides",
                    direction: "Always synthesizes 5'→3'",
                    mechanism: "Adds nucleotides to 3'-OH group of growing strand",
                    speed: "About 1000 nucleotides per second (prokaryotes)",
                    proofreading: "3'→5' exonuclease activity checks for errors",                                                                   accuracy: "Error rate about 1 in 10 million nucleotides"
                },
                dnaPolymeraseI: {                                                   function: "Removes RNA primers and replaces with DNA",                                                                          mechanism: "5'→3' exonuclease removes primers, polymerase fills gaps",
                    location: "Prokaryotes (eukaryotes use different polymerases)"                                                              },
                ligase: {                                                           function: "Joins Okazaki fragments on lagging strand",                                                                          mechanism: "Forms phosphodiester bonds between adjacent nucleotides",                                                           result: "Continuous DNA strand"
                }                                                           },
                                                                            replicationProcess: {
                initiation: {
                    originOfReplication: {
                        description: "Specific DNA sequence where replication begins",
                        prokaryotes: "Single origin (oriC in E. coli)",
                        eukaryotes: "Multiple origins (hundreds to thousands)",
                        reason: "Eukaryotic chromosomes much longer, multiple origins speed up process"
                    },
                    steps: [
                        "Initiator proteins bind to origin",
                        "Helicase unwinds DNA at origin",
                        "Replication fork forms",                                       "SSB proteins bind to single strands"
                    ]                                                           },
                elongation: {
                    replicationFork: "Y-shaped region where DNA is being unwound and copied",
                    leadingStrand: {                                                    description: "Synthesized continuously in 5'→3' direction",                                                                     mechanism: "DNA polymerase follows helicase continuously",
                        primer: "Only one RNA primer needed"
                    },
                    laggingStrand: {
                        description: "Synthesized discontinuously in short segments",
                        direction: "Still 5'→3', but away from replication fork",                                                                       okazakiFragments: {
                            description: "Short DNA segments (1000-2000 nucleotides in prokaryotes, 100-200 in eukaryotes)",
                            synthesis: [
                                "Primase makes RNA primer",
                                "DNA polymerase III adds nucleotides",
                                "Process repeats as fork moves"
                            ]
                        },
                        joining: [
                            "DNA polymerase I removes RNA primers",
                            "DNA polymerase I fills gaps with DNA",
                            "DNA ligase joins fragments"
                        ]                                                           },
                    bidirectional: "Replication proceeds in both directions from origin"
                },                                                              termination: {
                    prokaryotes: "Ter sequences signal termination",
                    eukaryotes: "Replication forks meet, telomeres at chromosome ends require special mechanism",
                    steps: [
                        "Replication forks meet and merge",
                        "Remaining RNA primers removed",
                        "Final gaps filled and sealed"
                    ]
                }
            },

            telomereProblem: {
                issue: "DNA polymerase cannot fully replicate 5' ends of linear chromosomes",
                consequence: "Chromosomes would shorten with each replication",
                solution: {
                    telomerase: {
                        description: "Special enzyme that extends telomeres",
                        mechanism: "Contains RNA template, adds repetitive sequences (TTAGGG in humans)",
                        activity: "High in embryonic cells, stem cells, cancer cells",
                        aging: "Low telomerase in most adult cells → telomeres shorten → cellular aging"
                    },
                    telomeres: {
                        description: "Repetitive DNA sequences at chromosome ends",
                        function: "Protect genes from being lost during replication",
                        analogy: "Like plastic tips on shoelaces (aglets)",
                        humanSequence: "TTAGGG repeated thousands of times"
                    }
                }
            },

            proofreading: {
                mechanism: "DNA polymerase III has 3'→5' exonuclease activity",
                process: [
                    "DNA polymerase checks each nucleotide after adding it",
                    "If incorrect, polymerase backs up and removes it",
                    "Correct nucleotide then added"
                ],
                accuracy: "Reduces error rate from 1 in 100,000 to 1 in 10 million",
                mismatchRepair: "Additional repair systems catch remaining errors"
            },

            energetics: {
                nucleotideSource: "Nucleoside triphosphates (dATP, dTTP, dGTP, dCTP)",
                energyRelease: "Breaking phosphate bonds provides energy for synthesis",
                reaction: "dNTP → dNMP + PPi (pyrophosphate)",
                ATP: "Also needed for helicase and other enzymes"
            },

            comparison: {
                prokaryoticVsEukaryotic: {
                    speed: {
                        prokaryotic: "~1000 nucleotides/second",
                        eukaryotic: "~50 nucleotides/second"
                    },
                    origins: {
                        prokaryotic: "Single origin of replication",
                        eukaryotic: "Multiple origins (hundreds to thousands)"
                    },
                    duration: {
                        prokaryotic: "~40 minutes (E. coli)",
                        eukaryotic: "~8 hours (S phase)"
                    },
                    location: {
                        prokaryotic: "Cytoplasm",
                        eukaryotic: "Nucleus"
                    },
                    chromosomes: {
                        prokaryotic: "Circular (no telomere problem)",
                        eukaryotic: "Linear (telomerase needed)"
                    }
                }
            },

            replicationErrors: {
                causes: [
                    "DNA polymerase mispairing",
                    "DNA damage from chemicals or radiation",
                    "Spontaneous base changes"
                ],
                consequences: "Mutations (if not corrected)",
                repair: [
                    "Proofreading during replication",
                    "Mismatch repair after replication",
                    "DNA repair mechanisms"
                ]
            },

            applications: [
                "PCR (polymerase chain reaction) mimics DNA replication",
                "Understanding cancer (uncontrolled replication)",
                "DNA repair disorders",
                "Aging research (telomeres)"
            ],

            category: 'dna_replication'
        };
    }

    handleTranscription(problem) {
        return {
            topic: "Transcription",
            definition: "Process of making RNA copy from DNA template",
            purpose: "Transfer genetic information from DNA to RNA",
            location: "Nucleus (eukaryotes), cytoplasm (prokaryotes)",
            enzyme: "RNA polymerase",

            centralDogma: {
                flow: "DNA → RNA → Protein",
                transcription: "DNA → RNA (this process)",
                translation: "RNA → Protein (next process)"
            },

            keyDifferences_DNA_vs_RNA: {
                sugar: {
                    DNA: "Deoxyribose (no oxygen at 2' carbon)",
                    RNA: "Ribose (has oxygen at 2' carbon)"
                },
                bases: {
                    DNA: "A, T, G, C",
                    RNA: "A, U, G, C (uracil instead of thymine)"
                },
                structure: {
                    DNA: "Double-stranded helix",
                    RNA: "Usually single-stranded"
                },
                stability: {
                    DNA: "Very stable (long-term storage)",
                    RNA: "Less stable (temporary messenger)"
                },
                function: {
                    DNA: "Stores genetic information",
                    RNA: "Transfers information, makes proteins, catalyzes reactions"
                }
            },

            templateVsCodingStrand: {
                templateStrand: {
                    description: "DNA strand that is read by RNA polymerase",
                    direction: "Read 3'→5'",
                    relationship: "Complementary and antiparallel to RNA",
                    alsoKnown: "Antisense strand, non-coding strand"
                },
                codingStrand: {
                    description: "DNA strand with same sequence as RNA (except T→U)",
                    direction: "Runs 5'→3'",
                    relationship: "Same sequence as RNA produced",
                    alsoKnown: "Sense strand, non-template strand",
                    note: "Not used as template, but called 'coding' because matches mRNA"
                },
                example: {
                    templateStrand: "3'-TAC-GCA-AAA-5'",
                    codingStrand: "5'-ATG-CGT-TTT-3'",
                    mRNA: "5'-AUG-CGU-UUU-3' (same as coding strand except U for T)"
                }
            },

            transcriptionProcess: {
                initiation: {
                    promoter: {
                        description: "DNA sequence where transcription begins",
                        function: "RNA polymerase binding site",
                        location: "Upstream (5' direction) of gene",
                        prokaryotic: {
                            TATAbox: "TATAAT sequence (-10 position)",
                            minus35: "TTGACA sequence (-35 position)",
                            recognition: "Sigma factor helps RNA polymerase find promoter"
                        },
                        eukaryotic: {
                            TATAbox: "TATAAA sequence (about -25 position)",
                            transcriptionFactors: "Required for RNA polymerase binding",
                            complexity: "Multiple regulatory sequences (enhancers, silencers)"
                        }
                    },
                    steps: [
                        "Transcription factors bind to promoter (eukaryotes)",
                        "RNA polymerase binds to promoter",
                        "DNA unwinds at transcription start site",
                        "Transcription bubble forms (unwound region)",
                        "RNA polymerase positioned at start site"
                    ]
                },
                elongation: {
                    mechanism: "RNA polymerase synthesizes RNA 5'→3'",
                    process: [
                        "RNA polymerase reads template strand 3'→5'",
                        "Adds complementary RNA nucleotides",
                        "RNA grows 5'→3' direction",
                        "DNA unwinds ahead, rewinds behind",
                        "Transcription bubble moves along gene"
                    ],
                    basePairing: "A→U, T→A, G→C, C→G (RNA uses U not T)",
                    speed: "About 40 nucleotides/second (eukaryotes)",
                    energySource: "Nucleoside triphosphates (ATP, UTP, GTP, CTP)",
                    noProofreading: "RNA polymerase lacks proofreading (errors not critical since RNA temporary)"
                },
                termination: {
                    description: "RNA polymerase reaches terminator sequence and stops",
                    prokaryotic: {
                        rhoIndependent: {
                            mechanism: "RNA forms hairpin loop, polymerase falls off",
                            sequence: "Inverted repeats followed by U-rich region"
                        },
                        rhoDependent: {
                            mechanism: "Rho protein binds RNA and pulls it from polymerase",
                            requirement: "Rho recognition site on RNA"
                        }
                    },
                    eukaryotic: {
                        mechanism: "RNA polymerase transcribes past gene",
                        cleavage: "RNA cleaved downstream of gene",
                        polyAsite: "Cleavage near AAUAAA signal"
                    },
                    result: "RNA transcript released, polymerase detaches"
                }
            },

            RNAprocessing_eukaryotes: {
                overview: "Pre-mRNA modified before leaving nucleus",
                reason: "Eukaryotic genes have introns, need protection for export",
                modifications: {
                    fivePrimeCap: {
                        description: "Modified guanine nucleotide added to 5' end",
                        structure: "7-methylguanosine cap",
                        timing: "During transcription (after ~25 nucleotides)",
                        functions: [
                            "Protects mRNA from degradation",
                            "Helps ribosome recognize mRNA",
                            "Aids in mRNA export from nucleus"
                        ]
                    },
                    threePolyAtail: {
                        description: "String of ~200 adenine nucleotides added to 3' end",
                        timing: "After transcription",
                        process: [
                            "RNA cleaved at polyA signal (AAUAAA)",
                            "Poly-A polymerase adds ~200 A nucleotides"
                        ],
                        functions: [
                            "Protects mRNA from degradation",
                            "Aids in mRNA export from nucleus",
                            "Helps with translation initiation"
                        ]
                    },
                    splicing: {
                        description: "Introns removed, exons joined together",
                        introns: "Non-coding sequences (intervening sequences)",
                        exons: "Coding sequences (expressed sequences)",
                        mechanism: {
                            spliceosome: "Complex of proteins and snRNPs (small nuclear ribonucleoproteins)",
                            process: [
                                "Spliceosome recognizes splice sites",
                                "Intron looped out and cut",
                                "Exons joined together",
                                "Intron degraded"
                            ]
                        },
                        spliceJunctions: "GT at 5' end of intron, AG at 3' end (GT-AG rule)",
                        alternativeSplicing: {
                            description: "Different combinations of exons joined",
                            result: "One gene can produce multiple proteins",
                            example: "Human genome ~20,000 genes but >100,000 proteins",
                            importance: "Increases protein diversity without increasing gene number"
                        }
                    }
                },
                matureRNA: "Cap + exons + poly-A tail (ready for translation)"
            },

            RNAtypes: {
                mRNA: {
                    name: "Messenger RNA",
                    function: "Carries genetic information to ribosomes",
                    percentage: "~5% of total RNA",
                    lifespan: "Minutes to hours (short-lived)",
                    prokaryotic: "Used immediately (no processing)",
                    eukaryotic: "Processed then exported from nucleus"
                },
                rRNA: {
                    name: "Ribosomal RNA",
                    function: "Structural and catalytic component of ribosomes",
                    percentage: "~80% of total RNA",
                    catalysis: "Peptidyl transferase activity (forms peptide bonds)",
                    types: "Multiple types in ribosomes (18S, 5.8S, 28S, 5S in eukaryotes)"
                },
                tRNA: {
                    name: "Transfer RNA",
                    function: "Brings amino acids to ribosomes during translation",
                    percentage: "~15% of total RNA",
                    structure: "Cloverleaf shape, 70-90 nucleotides",
                    anticodon: "Three nucleotides that pair with mRNA codon",
                    aminoAcidSite: "3' end where amino acid attaches"
                }
            },

            regulationOfTranscription: {
                prokaryotic: {
                    operonModel: "Genes regulated together",
                    lacOperon: "Lactose metabolism genes",
                    trpOperon: "Tryptophan synthesis genes"
                },
                eukaryotic: {
                    chromatinRemodeling: "DNA accessibility",
                    transcriptionFactors: "Proteins that regulate transcription",
                    enhancers: "DNA sequences that increase transcription",
                    silencers: "DNA sequences that decrease transcription"
                }
            },

            comparison_Prokaryotic_vs_Eukaryotic: {
                coupling: {
                    prokaryotic: "Transcription and translation simultaneous (same compartment)",
                    eukaryotic: "Transcription in nucleus, translation in cytoplasm (separated)"
                },
                processing: {
                    prokaryotic: "None (mRNA used directly)",
                    eukaryotic: "Extensive (capping, tailing, splicing)"
                },
                mRNA: {
                    prokaryotic: "Polycistronic (codes for multiple proteins)",
                    eukaryotic: "Monocistronic (codes for one protein)"
                },
                RNApolymerase: {
                    prokaryotic: "One RNA polymerase for all genes",
                    eukaryotic: "Three RNA polymerases (I, II, III) for different RNA types"
                }
            },

            applications: [
                "Understanding gene expression",
                "Developing gene therapies",
                "Creating mRNA vaccines (COVID-19)",
                "Studying genetic diseases",
                "Antibiotic development (targeting bacterial transcription)"
            ],

            category: 'transcription'
        };
    }

    handleTranslation(problem) {
        return {
            topic: "Translation",
            definition: "Process of synthesizing proteins from mRNA",
            purpose: "Convert nucleotide sequence to amino acid sequence",
            location: "Ribosomes (cytoplasm or rough ER)",
            centralDogma: "DNA → RNA → Protein (this is the final step)",

            geneticCode: {
                description: "Rules for converting mRNA codons to amino acids",
                codon: {
                    definition: "Three-nucleotide sequence on mRNA",
                    number: "64 possible codons (4³ = 64)",
                    example: "AUG, UUU, GCA"
                },
                aminoAcids: "20 standard amino acids",
                properties: {
                    redundant: {
                        description: "Multiple codons for same amino acid",
                        example: "Leucine has 6 codons (UUA, UUG, CUU, CUC, CUA, CUG)",
                        reason: "64 codons for 20 amino acids",
                        wobblePosition: "Third position of codon often variable"
                    },
                    unambiguous: {
                        description: "Each codon specifies only one amino acid",
                        note: "No ambiguity - AUG always codes for methionine"
                    },
                    universal: {
                        description: "Nearly same code in all organisms",
                        exceptions: "Some mitochondria, some protists",
                        significance: "Evidence for common ancestry"
                    },
                    nonOverlapping: {
                        description: "Codons read in sequence, no sharing of nucleotides",
                        example: "AUGCCC read as AUG-CCC, not AUG-UGC-GCC"
                    }
                },
                specialCodons: {
                    startCodon: {
                        sequence: "AUG",
                        aminoAcid: "Methionine (Met)",
                        function: "Signals where translation begins",
                        note: "First amino acid in all proteins (often removed later)"
                    },
                    stopCodons: {
                        sequences: ["UAA", "UAG", "UGA"],
                        names: ["ochre", "amber", "opal"],
                        aminoAcid: "None (no tRNA binds)",
                        function: "Signal end of translation",
                        binding: "Release factors bind instead of tRNA"
                    }
                },
                readingFrame: {
                    definition: "Way codons are grouped (groups of three)",
                    importance: "Must start at correct position",
                    frameshift: "Insertion/deletion shifts frame, changes all downstream amino acids"
                }
            },

            tRNA_structure: {
                description: "Transfer RNA brings amino acids to ribosome",
                structure: {
                    shape: "Cloverleaf (2D) or L-shape (3D)",
                    length: "70-90 nucleotides",
                    arms: "Four arms formed by base pairing"
                },
                components: {
                    anticodon: {
                        location: "Bottom of cloverleaf (anticodon loop)",
                        description: "Three nucleotides complementary to mRNA codon",
                        pairing: "Antiparallel to codon",
                        wobble: "Third anticodon position can pair with multiple bases"
                    },
                    aminoAcidSite: {
                        location: "3' end (CCA sequence)",
                        attachment: "Amino acid attaches here",
                        bond: "Ester bond between amino acid and tRNA"
                    }
                },
                aminoacylation: {
                    description: "Attaching amino acid to tRNA",
                    enzyme: "Aminoacyl-tRNA synthetase (one for each amino acid)",
                    process: [
                        "Enzyme recognizes specific tRNA and amino acid",
                        "Amino acid activated by ATP",
                        "Amino acid attached to tRNA 3' end",
                        "Charged tRNA ready for translation"
                    ],                                                              fidelity: "Enzyme ensures correct amino acid-tRNA pairing"                                                                  },
                number: "~45 different tRNAs for 20 amino acids (due to wobble pairing)"
            },                                                  
            ribosome: {
                description: "Molecular machine that performs translation",
                composition: {                                                      rRNA: "Ribosomal RNA (structural and catalytic)",
                    proteins: "Ribosomal proteins (structural)",                    ratio: "About 2/3 rRNA, 1/3 protein by mass"
                },                                                              subunits: {
                    prokaryotic: {
                        small: "30S subunit",
                        large: "50S subunit",
                        complete: "70S ribosome"
                    },
                    eukaryotic: {
                        small: "40S subunit",                                           large: "60S subunit",
                        complete: "80S ribosome"
                    },                                                              note: "S = Svedberg units (sedimentation rate, not additive)"                                                               },
                bindingSites: {
                    A_site: {
                        name: "Aminoacyl site (A site)",                                function: "Incoming charged tRNA enters here"
                    },                                                              P_site: {
                        name: "Peptidyl site (P site)",                                 function: "tRNA with growing polypeptide chain"
                    },                                                              E_site: {
                        name: "Exit site (E site)",
                        function: "Empty tRNA exits here"
                    }                                                           },
                catalysis: "Peptidyl transferase activity (rRNA in large subunit forms peptide bonds)"
            },                                                  
            translationProcess: {                                               initiation: {
                    description: "Ribosome assembles at start codon",
                    prokaryotic: {
                        shineDalgarno: "mRNA sequence that positions ribosome at start codon",
                        steps: [
                            "Small subunit binds to Shine-Dalgarno sequence",
                            "Initiator tRNA (fMet-tRNA) binds to AUG start codon",
                            "Large subunit joins",                                          "Ribosome ready to translate"
                        ]
                    },                                                              eukaryotic: {
                        fiveCapBinding: "Small subunit binds to 5' cap",
                        scanning: "Ribosome scans for AUG start codon (first AUG usually)",                                                             steps: [
                            "Initiation factors and initiator tRNA (Met-tRNA) bind to small subunit",
                            "Complex binds to 5' cap of mRNA",                              "Scans for AUG start codon",
                            "Large subunit joins at AUG",
                            "Ribosome ready to translate"
                        ]
                    },
                    initiatorTRNA: {
                        prokaryotic: "fMet-tRNA (formyl-methionine)",
                        eukaryotic: "Met-tRNA (methionine)",                            position: "Binds to P site (not A site like other tRNAs)"
                    }
                },
                elongation: {                                                       description: "Amino acids added one by one to growing polypeptide",
                    cycle: [
                        {                                                                   step: "Codon Recognition",
                            description: "Charged tRNA enters A site",
                            details: [
                                "Anticodon must match codon",
                                "Elongation factors help",
                                "GTP hydrolysis provides energy"
                            ]
                        },                                                              {
                            step: "Peptide Bond Formation",                                 description: "Amino acid transferred from P site to A site",
                            details: [
                                "Peptidyl transferase catalyzes reaction",                                                                                      "Peptide bond forms",
                                "Growing chain now on A-site tRNA",
                                "P-site tRNA now empty"
                            ]
                        },
                        {
                            step: "Translocation",
                            description: "Ribosome moves one codon (3 nucleotides)",
                            details: [
                                "A-site tRNA (with polypeptide) moves to P site",
                                "P-site tRNA (empty) moves to E site",
                                "E-site tRNA exits ribosome",
                                "A site now empty, ready for next tRNA",                                                                                        "GTP hydrolysis powers movement"
                            ]                                                           }
                    ],
                    speed: "About 15-20 amino acids per second",
                    direction: "mRNA read 5'→3', protein grows N-terminus to C-terminus",
                    polyribosomes: "Multiple ribosomes translating same mRNA simultaneously"
                },
                termination: {
                    description: "Stop codon reached, polypeptide released",
                    stopCodons: "UAA, UAG, UGA",
                    process: [
                        "Stop codon enters A site",
                        "No tRNA binds (no anticodon for stop codons)",
                        "Release factor (protein) binds to A site",                                                                                     "Release factor triggers hydrolysis",
                        "Polypeptide released from P-site tRNA",
                        "tRNA, mRNA, and release factor released",
                        "Ribosomal subunits dissociate"
                    ],                                                              releaseFactor: {
                        prokaryotic: "RF1 (recognizes UAA, UAG), RF2 (recognizes UAA, UGA)",
                        eukaryotic: "eRF (recognizes all three stop codons)"                                                                        }
                }
            },                                                  
            postTranslationalModification: {                                    description: "Polypeptide modified after translation",                                                                          modifications: {
                    folding: {
                        description: "Polypeptide folds into 3D shape",
                        assistance: "Chaperone proteins help",
                        levels: "Secondary, tertiary, quaternary structure"
                    },                                                              cleavage: {
                        description: "Parts of polypeptide cut off",
                        example: "Signal sequence removed, insulin cleaved"
                    },
                    chemicalModification: {                                             phosphorylation: "Add phosphate group (regulation)",
                        glycosylation: "Add carbohydrate (recognition)",
                        methylation: "Add methyl group",                                acetylation: "Add acetyl group"
                    },                                                              disulfideBonds: "Cysteine residues form S-S bonds (stabilization)"
                },                                                              targeting: {
                    description: "Protein sent to correct location",                                                                                destinations: "Nucleus, mitochondria, ER, secretion, etc.",
                    signals: "Signal sequences direct proteins"
                }
            },

            energyCost: {
                aminoacylation: "2 ATP per amino acid (charging tRNA)",
                initiation: "1 GTP",                                            elongation: "2 GTP per amino acid (codon recognition + translocation)",
                termination: "1 GTP",
                total: "About 4 ATP equivalents per amino acid added"                                                                       },

            comparison_Prokaryotic_vs_Eukaryotic: {
                location: {
                    prokaryotic: "Cytoplasm",
                    eukaryotic: "Cytoplasm or rough ER"
                },
                coupling: {
                    prokaryotic: "Simultaneous with transcription",
                    eukaryotic: "Separated from transcription"
                },
                ribosomes: {
                    prokaryotic: "70S (30S + 50S)",                                 eukaryotic: "80S (40S + 60S)"
                },
                initiation: {                                                       prokaryotic: "Shine-Dalgarno sequence",
                    eukaryotic: "5' cap binding and scanning"                   },
                firstAminoAcid: {
                    prokaryotic: "fMet (formyl-methionine)",
                    eukaryotic: "Met (methionine)"
                }
            },

            applications: [
                "Antibiotic development (target bacterial ribosomes)",
                "Understanding genetic diseases (mutations affect translation)",
                "Protein production (biotechnology)",
                "Studying gene expression regulation"
            ],

            category: 'translation'                                     };
    }
                                                                    handleMutations(problem) {
        return {
            topic: "Mutations",
            definition: "Changes in DNA sequence",
            significance: "Source of genetic variation; can be beneficial, neutral, or harmful",

            causes: {
                spontaneous: {
                    description: "Occur naturally without external influence",
                    mechanisms: [
                        {
                            type: "DNA replication errors",
                            description: "DNA polymerase occasionally makes mistakes",
                            frequency: "About 1 in 10 billion nucleotides (with proofreading)",
                            note: "Most errors corrected, but some escape"                                                                              },
                        {
                            type: "Spontaneous base changes",
                            description: "Chemical instability of bases",
                            examples: [                                                         "Depurination: loss of purine base (A or G)",
                                "Deamination: cytosine → uracil"
                            ]
                        },
                        {
                            type: "Transposable elements",
                            description: "'Jumping genes' move to new locations",
                            effect: "Can disrupt genes if insert in coding sequence"
                        }                                                           ]
                },
                induced: {
                    description: "Caused by external factors (mutagens)",                                                                           types: {
                        physical: {
                            UV_radiation: {
                                effect: "Creates thymine dimers (T-T bonds)",                                                                                   consequence: "Distorts DNA, blocks replication",                                                                                relevance: "Sunlight, skin cancer"
                            },
                            ionizingRadiation: {
                                types: "X-rays, gamma rays",                                    effect: "Breaks DNA strands, damages bases",
                                relevance: "Medical imaging, nuclear accidents"
                            }
                        },
                        chemical: {
                            baseAnalogs: {
                                description: "Molecules resembling DNA bases",                                                                                  example: "5-bromouracil (pairs with A or G)",
                                effect: "Incorporated into DNA, causes mispairing"
                            },
                            intercalatingAgents: {
                                description: "Insert between DNA bases",                                                                                        example: "Ethidium bromide",
                                effect: "Causes insertions/deletions"
                            },
                            alkylatingAgents: {
                                description: "Add alkyl groups to bases",
                                examples: "Nitrosamines (tobacco), mustard gas",
                                effect: "Modified bases mispair"
                            }
                        },
                        biological: {
                            viruses: "Can insert DNA into host genome",
                            transposons: "Mobile genetic elements"
                        }
                    }
                }
            },

            mutationTypes: {
                pointMutations: {
                    description: "Change in single nucleotide",
                    types: {
                        substitution: {
                            description: "One base replaced by another",
                            types: {
                                transition: "Purine → purine (A↔G) or pyrimidine → pyrimidine (C↔T)",
                                transversion: "Purine ↔ pyrimidine"
                            },
                            effects: {                                                          silent: {
                                    description: "No amino acid change (due to codon redundancy)",                                                                  example: "CUA → CUG (both code for leucine)",
                                    frequency: "Most common (about 25% of substitutions)",
                                    impact: "Usually none"
                                },
                                missense: {
                                    description: "Different amino acid coded",
                                    example: "Sickle cell: GAA (Glu) → GUA (Val)",
                                    impact: "Variable - depends on amino acid properties",                                                                          conservative: "Similar amino acid (minimal effect)",                                                                            nonConservative: "Very different amino acid (major effect)"                                                                 },
                                nonsense: {
                                    description: "Normal codon → stop codon",                                                                                       example: "UAC (Tyr) → UAA (stop)",
                                    impact: "Usually severe - truncated (shortened) protein",
                                    result: "Protein likely nonfunctional"
                                }
                            }
                        }
                    }
                },                                                              frameshiftMutations: {
                    description: "Insertion or deletion of nucleotides (not multiple of 3)",
                    mechanism: "Shifts reading frame, changing all downstream codons",
                    types: {
                        insertion: {
                            description: "Extra nucleotide(s) added",
                            example: "AUGCCC → AUGACCC (A inserted)",
                            newReading: "AUG-ACC-C... (frame shifted)"
                        },
                        deletion: {
                            description: "Nucleotide(s) removed",
                            example: "AUGCCC → AUCCC (G deleted)",
                            newReading: "AUC-CC... (frame shifted)"
                        }                                                           },
                    impact: "Usually severe - all amino acids downstream changed",
                    exception: "Insertions/deletions of 3 (or multiples) don't frameshift",
                    note: "Often create premature stop codon"                   },
                chromosomalMutations: {                                             description: "Large-scale changes in chromosome structure",
                    types: {
                        deletion: {
                            description: "Segment of chromosome lost",                                                                                      effect: "Loss of genes",
                            example: "Cri-du-chat syndrome (part of chromosome 5 deleted)"
                        },                                                              duplication: {
                            description: "Segment copied",
                            effect: "Extra copies of genes",
                            significance: "Source of new genes in evolution"
                        },                                                              inversion: {
                            description: "Segment reversed",
                            effect: "Gene order changed, can disrupt genes at breakpoints",
                            pairing: "Problems during meiosis"
                        },
                        translocation: {
                            description: "Segment moved to different chromosome",
                            types: "Reciprocal (two chromosomes exchange) or non-reciprocal",
                            example: "Philadelphia chromosome (9 and 22 translocation) causes leukemia"
                        }
                    }
                }
            },

            effectsOnProtein: {
                lossOfFunction: {
                    description: "Protein loses normal function",
                    causes: "Missense, nonsense, frameshift mutations",
                    examples: [
                        "Cystic fibrosis (CFTR protein doesn't function)",
                        "Phenylketonuria (enzyme can't break down phenylalanine)"
                    ],
                    dominance: "Usually recessive (one good copy often sufficient)"
                },
                gainOfFunction: {
                    description: "Protein gains new function or overactive",
                    causes: "Certain missense mutations, regulatory mutations",
                    examples: [
                        "Some cancers (oncogenes constantly active)",
                        "Huntington's disease (mutant protein toxic)"
                    ],
                    dominance: "Usually dominant (one mutant copy causes problem)"
                },
                neutral: {
                    description: "No effect on protein function",
                    causes: "Silent mutations, mutations in non-coding regions",
                    frequency: "Most common",
                    significance: "Contribute to genetic variation without affecting fitness"
                }
            },

            germlineVsSomatic: {
                germlineMutations: {
                    description: "Occur in gametes (egg or sperm)",
                    inheritance: "Passed to offspring",
                    scope: "Present in all cells of offspring",
                    examples: "Inherited genetic disorders",
                    significance: "Contribute to evolution"
                },
                somaticMutations: {
                    description: "Occur in body cells",
                    inheritance: "NOT passed to offspring",
                    scope: "Only in descendant cells of mutated cell",
                    examples: "Most cancers, age spots",
                    significance: "Can affect individual but not next generation"
                }
            },

            mutationRates: {
                spontaneous: "About 1 × 10⁻⁹ to 1 × 10⁻¹⁰ per base pair per cell division",
                humanGenome: "~3 billion base pairs",
                newMutations: "Each human has ~60-100 new mutations not in either parent",
                variability: "Rates vary by organism, gene, and cell type"
            },

            examplesOfDisease: {
                sickleCellDisease: {
                    mutation: "Point mutation (substitution): GAA → GUA",
                    effect: "Glutamic acid → Valine in hemoglobin",
                    consequence: "Abnormal hemoglobin, sickle-shaped red blood cells",
                    inheritance: "Autosomal recessive",
                    advantage: "Heterozygotes resistant to malaria"
                },
                cysticFibrosis: {
                    mutation: "Most common: deletion of 3 nucleotides (ΔF508)",
                    effect: "Deletion of phenylalanine at position 508",
                    consequence: "Defective CFTR protein, thick mucus",
                    inheritance: "Autosomal recessive"
                },
                huntingtonsDisease: {
                    mutation: "CAG repeat expansion (normally 10-35, disease >40)",
                    effect: "Long polyglutamine tract in huntingtin protein",
                    consequence: "Toxic protein aggregates, neurodegeneration",
                    inheritance: "Autosomal dominant",
                    onset: "Usually 30-50 years old"
                },
                cancer: {
                    nature: "Accumulation of somatic mutations",
                    genes: "Oncogenes (accelerator) and tumor suppressors (brakes)",
                    process: "Multiple mutations needed (multi-hit hypothesis)",
                    example: "p53 tumor suppressor mutated in >50% of cancers"
                }
            },

            beneficialMutations: {
                rare: "Most mutations neutral or harmful, but occasional beneficial ones",
                examples: [
                    "Lactose tolerance in adults (mutation in regulatory region)",
                    "Antibiotic resistance in bacteria",
                    "Pesticide resistance in insects",
                    "HIV resistance (CCR5-Δ32 mutation)"
                ],
                evolution: "Source of variation for natural selection",
                adaptation: "Allow populations to adapt to changing environments"
            },

            mutationDetection: {
                DNAsequencing: "Direct reading of DNA sequence",
                PCR: "Amplify specific regions for analysis",
                gelElectrophoresis: "Detect size changes (insertions/deletions)",
                Southern_blot: "Detect specific sequences",
                microarrays: "Test for known mutations",
                CRISPR_diagnostics: "Detect specific sequences"
            },

            repairMechanisms: {
                proofreading: "DNA polymerase checks nucleotides during replication",
                mismatchRepair: "Fixes errors after replication",
                baseExcisionRepair: "Removes damaged bases",
                nucleotideExcisionRepair: "Removes damaged segments (thymine dimers)",
                doubleStrandBreakRepair: "Fixes broken DNA strands",
                failure: "If repair fails, mutation becomes permanent"
            },

            category: 'mutations'
        };
    }

    handleGeneExpression(problem) {
        return {
            topic: "Gene Expression and Regulation",
            definition: "Process by which genetic information is used to synthesize functional products (proteins or RNA)",
            centralDogma: "DNA → RNA → Protein",

            overview: {
                geneExpression: "Converting genetic information into functional products",
                regulation: "Controlling when, where, and how much gene product is made",
                importance: "Allows cells to respond to environment and differentiate despite identical DNA"
            },

            levelsOfRegulation: {
                transcriptional: {
                    description: "Control of mRNA synthesis",
                    level: "Primary control point",
                    mechanisms: [
                        "Transcription factors (activators and repressors)",
                        "Promoter and enhancer sequences",
                        "Chromatin remodeling",
                        "DNA methylation",
                        "Histone modifications"
                    ],
                    importance: "Most efficient - prevents unnecessary transcription"
                },
                postTranscriptional: {
                    description: "Control after transcription but before translation",
                    mechanisms: [
                        {
                            name: "Alternative splicing",
                            description: "Different exon combinations create different proteins",
                            example: "One gene can produce multiple protein variants",
                            significance: "Increases protein diversity"
                        },
                        {
                            name: "mRNA stability",
                            description: "Control how long mRNA lasts",
                            factors: "Poly-A tail length, RNA-binding proteins",
                            range: "Minutes to hours"
                        },
                        {
                            name: "mRNA localization",
                            description: "Transport mRNA to specific cell regions",
                            example: "Localized translation in neurons"
                        },
                        {
                            name: "RNA interference (RNAi)",
                            description: "Small RNAs block translation or degrade mRNA",
                            types: "miRNA (microRNA), siRNA (small interfering RNA)"
                        }
                    ]
                },
                translational: {
                    description: "Control of protein synthesis",
                    mechanisms: [
                        "Ribosome binding regulation",
                        "Translation initiation factors",
                        "Regulatory proteins blocking ribosome",
                        "Iron response elements (IRP system)"
                    ],
                    example: "Ferritin synthesis controlled by iron levels"
                },
                postTranslational: {
                    description: "Control after protein made",
                    mechanisms: [
                        {
                            name: "Protein modification",
                            types: "Phosphorylation, methylation, acetylation, glycosylation",
                            effect: "Change protein activity, localization, or stability"
                        },
                        {
                            name: "Protein degradation",
                            mechanism: "Ubiquitin-proteasome system",
                            purpose: "Remove damaged or unneeded proteins"
                        },
                        {
                            name: "Protein localization",
                            description: "Signal sequences direct proteins to destinations",
                            destinations: "Nucleus, mitochondria, membrane, secretion"
                        },
                        {
                            name: "Allosteric regulation",
                            description: "Small molecules change protein shape/activity",
                            example: "Feedback inhibition in metabolic pathways"
                        }
                    ]
                }
            },

            prokaryoticRegulation: {
                operonModel: {
                    description: "Cluster of genes regulated together",
                    components: [
                        "Promoter: where RNA polymerase binds",
                        "Operator: where repressor binds",
                        "Structural genes: code for proteins",
                        "Regulatory gene: codes for repressor protein"
                    ]
                },
                lacOperon: {
                    name: "Lactose operon",
                    function: "Lactose metabolism genes",
                    genes: "lacZ (β-galactosidase), lacY (permease), lacA (transacetylase)",
                    regulation: {
                        noLactose: [
                            "Repressor protein binds to operator",
                            "Blocks RNA polymerase",
                            "Genes OFF (no transcription)"
                        ],
                        lactosepresent: [
                            "Lactose (allolactose) binds to repressor",
                            "Repressor changes shape, releases from operator",
                            "RNA polymerase transcribes genes",
                            "Genes ON"
                        ]
                    },
                    type: "Inducible (turned on by substrate)",
                    positiveControl: {
                        CAP_cAMP: "Catabolite activator protein with cAMP",
                        function: "Enhances transcription when glucose low",
                        logic: "Prefer glucose over lactose"
                    }
                },
                trpOperon: {
                    name: "Tryptophan operon",
                    function: "Tryptophan synthesis genes",
                    genes: "Five genes for tryptophan synthesis enzymes",
                    regulation: {
                        noTryptophan: [
                            "Repressor inactive (no corepressor)",
                            "RNA polymerase transcribes genes",
                            "Genes ON (cell makes tryptophan)"
                        ],
                        tryptophanPresent: [
                            "Tryptophan binds to repressor (corepressor)",
                            "Repressor-tryptophan complex binds operator",
                            "Genes OFF (no need to make more)"
                        ]
                    },
                    type: "Repressible (turned off by product)",
                    attenuation: "Additional control by premature termination"
                }
            },

            eukaryoticRegulation: {
                complexity: "More complex than prokaryotic (nuclear membrane, chromatin, development)",
                
                chromatinRemodeling: {
                    description: "Changes in DNA packaging affect accessibility",
                    heterochromatin: {
                        description: "Tightly packed, genes silenced",
                        appearance: "Dark under microscope"
                    },
                    euchromatin: {
                        description: "Loosely packed, genes accessible",
                        appearance: "Light under microscope"
                    },
                    remodelingComplexes: "Proteins that move or remove nucleosomes"
                },
                
                epigeneticModifications: {
                    description: "Heritable changes without altering DNA sequence",
                    DNAmethylation: {
                        modification: "Methyl group added to cytosine (especially CpG islands)",
                        effect: "Gene silencing",
                        inheritance: "Maintained through cell divisions",
                        example: "X-inactivation in females",
                        cancer: "Abnormal methylation common in cancer"
                    },
                    histoneModifications: {
                        types: "Acetylation, methylation, phosphorylation",
                        acetylation: {
                            effect: "Loosens chromatin, increases transcription",
                            enzymes: "HATs (histone acetyltransferases) add, HDACs remove"
                        },
                        methylation: {
                            effect: "Can activate or repress depending on location",
                            complexity: "Different lysines have different effects"
                        },
                        code: "Histone code - combinations of modifications create specific effects"
                    }
                },
                
                transcriptionFactors: {
                    description: "Proteins that regulate transcription",
                    general: {
                        name: "General transcription factors",
                        function: "Required for all transcription",
                        action: "Help RNA polymerase bind to promoter"
                    },
                    specific: {
                        name: "Specific transcription factors",
                        function: "Regulate specific genes",
                        action: "Bind to promoter, enhancer, or silencer sequences",
                        types: {
                            activators: "Increase transcription",
                            repressors: "Decrease transcription"
                        }
                    },
                    combinatorial: "Multiple factors work together for precise control"
                },
                
                regulatorySequences: {
                    promoter: {
                        description: "Where RNA polymerase binds",
                        TATAbox: "Common element in promoters",
                        proximity: "Close to transcription start site"
                    },
                    enhancer: {
                        description: "Increases transcription rate",
                        distance: "Can be far from gene (thousands of base pairs)",
                        orientation: "Works regardless of orientation",
                        mechanism: "DNA loops to bring enhancer near promoter"
                    },
                    silencer: {
                        description: "Decreases transcription rate",
                        mechanism: "Similar to enhancer but opposite effect"
                    }
                },
                
                alternativeSplicing: {
                    description: "Different combinations of exons included in mRNA",
                    mechanism: "Splicing factors determine which exons included",
                    result: "One gene → multiple proteins",
                    example: "Drosophila Dscam gene can produce >38,000 different proteins",
                    regulation: "Tissue-specific splicing factors",
                    significance: "Major source of protein diversity in eukaryotes"
                }
            },

            developmentalRegulation: {
                cellDifferentiation: {
                    concept: "All cells have same DNA, but express different genes",
                    mechanism: "Differential gene expression creates specialized cells",
                    example: "Muscle cells express myosin, nerve cells express neurotransmitters"
                },
                
                homeboxGenes: {
                    description: "Master regulatory genes controlling development",
                    homeobox: "180-nucleotide DNA sequence encoding homeodomain",
                    homeodomain: "DNA-binding domain (60 amino acids)",
                    function: "Control body plan, segment identity",
                    examples: "Hox genes (body axis), Pax6 (eye development)",
                    conservation: "Highly conserved across animals",
                    experiment: "Mouse Pax6 can induce eyes in Drosophila"
                },
                
                morphogens: {
                    description: "Signaling molecules that form concentration gradients",
                    mechanism: "Different concentrations activate different genes",
                    result: "Position-dependent cell fate",
                    example: "Bicoid in Drosophila (anterior-posterior axis)"
                }
            },

            hormonalRegulation: {
                description: "Hormones regulate gene expression",
                steroidHormones: {
                    mechanism: [
                        "Lipid-soluble, cross membrane",
                        "Bind to intracellular receptors",
                        "Hormone-receptor complex enters nucleus",
                        "Binds to DNA response elements",
                        "Activates or represses transcription"
                    ],
                    examples: "Estrogen, testosterone, cortisol",
                    speed: "Slower (hours) but long-lasting"
                },
                peptideHormones: {
                    mechanism: [
                        "Cannot cross membrane",                                        "Bind to cell surface receptors",
                        "Trigger signal transduction cascade",
                        "Activate transcription factors"
                    ],
                    examples: "Insulin, growth hormone",
                    speed: "Faster (minutes) but shorter-lasting"
                }
            },
                                                                            applications: [
                "Understanding development and differentiation",
                "Cancer research (dysregulated gene expression)",
                "Stem cell therapy",                                            "Genetic engineering (controlling expression)",
                "Drug development (targeting transcription factors)",
                "Epigenetics and disease"                                   ],
                                                                            category: 'gene_expression'                                 };                                                          }

    handleInheritancePatterns(problem) {                                return {
            topic: "Inheritance Patterns",                                  description: "Ways traits are passed from parents to offspring",                                                                beyondMendel: "Many traits don't follow simple dominant-recessive patterns",                                        
            patterns: {                                                         completeDominance: {
                    description: "Heterozygote shows dominant phenotype (classic Mendelian)",
                    genotypes: "AA and Aa look identical",                          example: "Tall (T) completely dominant over short (t)",                                                                         ratio: "3:1 phenotypic in F2 (Aa × Aa)",                        commonality: "Less common than once thought"
                },                                              
                incompleteDominance: {                                              description: "Heterozygote shows intermediate (blended) phenotype",
                    genotypes: "All three genotypes distinguishable",
                    example: {                                                          snapdragons: "Red (RR) × White (WW) → Pink (RW)",
                        F2cross: "RW × RW → 1 RR (red) : 2 RW (pink) : 1 WW (white)"                                                                },                                                              ratio: "1:2:1 both genotypic and phenotypic",                                                                                   note: "Alleles don't blend - still separate in gametes",
                    otherExamples: [
                        "Human hair (straight, wavy, curly)",
                        "Familial hypercholesterolemia severity"
                    ]
                },                                              
                codominance: {                                                      description: "Both alleles fully expressed (no blending)",                                                                      genotypes: "Both traits visible simultaneously",                                                                                example: {
                        ABOblood: {                                                         alleles: "I^A, I^B, i",
                            genotypes: {
                                "I^A I^A or I^A i": "Type A",
                                "I^B I^B or I^B i": "Type B",
                                "I^A I^B": "Type AB (both A and B antigens)",
                                "ii": "Type O (no antigens)"
                            },                                                              codominance: "I^A and I^B both expressed in I^A I^B"                                                                        },                                                              roanCattle: "Red and white hairs both present (not pink)"                                                                   },                                                              difference: "Unlike incomplete dominance - both traits distinct, not blended"                                               },                                                                                                                              multipleAlleles: {
                    description: "More than two alleles exist in population",                                                                       individual: "Still has only two alleles",
                    example: {                                                          ABOblood: {
                            alleles: "I^A, I^B, i (three alleles)",
                            combinations: "6 possible genotypes, 4 phenotypes",
                            dominance: "I^A and I^B codominant, both dominant over i"
                        },                                                              rabbitCoat: {
                            alleles: "C (full color), c^ch (chinchilla), c^h (Himalayan), c (albino)",
                            hierarchy: "C > c^ch > c^h > c",
                            combinations: "10 possible genotypes, 4 phenotypes"
                        }                                                           }
                },                                              
                polygenicInheritance: {
                    description: "Multiple genes contribute to one trait",
                    result: "Continuous variation (range of phenotypes)",
                    distribution: "Bell curve (normal distribution)",
                    examples: [
                        {
                            trait: "Human height",
                            genes: "Hundreds of genes contribute",                                                                                          environment: "Nutrition also important",                                                                                        variation: "Continuous from short to tall"                                                                                  },                                                              {                                                                   trait: "Skin color",
                            genes: "Multiple genes for melanin production",                                                                                 range: "Continuous spectrum"
                        },                                                              {                                                                   trait: "Eye color",
                            genes: "Multiple genes (OCA2, HERC2, others)",                                                                                  complexity: "Not simple brown/blue"                         }
                    ],                                                              calculation: "If n genes, 3^n possible genotypes",
                    environment: "Often influenced by environment too"
                },                                              
                sexLinked: {                                                        description: "Gene located on sex chromosome",                                                              
                    xLinkedRecessive: {                                                 description: "Recessive allele on X chromosome",                                                                                notation: "X^A (dominant), X^a (recessive), Y",
                        maleGenotypes: {                                                    "X^A Y": "Normal (only need one dominant allele)",                                                                              "X^a Y": "Affected (only have one X)"                                                                                       },
                        femaleGenotypes: {                                                  "X^A X^A": "Normal",
                            "X^A X^a": "Carrier (usually normal)",                                                                                          "X^a X^a": "Affected (rare - needs two copies)"
                        },
                        patterns: [
                            "More common in males (only need one copy)",                                                                                    "Affected males have carrier mothers",
                            "Never passed male to male (fathers give Y to sons)",
                            "Carrier females can have affected sons"
                        ],                                                              examples: [
                            "Hemophilia A (clotting factor VIII deficiency)",
                            "Duchenne muscular dystrophy",
                            "Red-green color blindness",
                            "Fragile X syndrome"
                        ],
                        punnettExample: {
                            cross: "Carrier female (X^A X^a) × Normal male (X^A Y)",
                            offspring: "25% X^A X^A (normal daughter), 25% X^A X^a (carrier daughter), 25% X^A Y (normal son), 25% X^a Y (affected son)",
                            sonRisk: "50% of sons affected"
                        }                                                           },                                                                                                                              xLinkedDominant: {
                        description: "Dominant allele on X chromosome",                                                                                 patterns: [
                            "Affected males pass to ALL daughters, NO sons",
                            "Affected females pass to 50% of sons and daughters",
                            "Females more commonly affected (two X chromosomes)"
                        ],                                                              examples: [
                            "Fragile X syndrome (most common)",                             "Rett syndrome",
                            "Vitamin D-resistant rickets"                               ]
                    },                                          
                    yLinked: {
                        description: "Gene on Y chromosome",
                        inheritance: "Father to all sons only (male-line only)",                                                                        examples: [
                            "SRY gene (sex determination)",
                            "Some male infertility genes",                                  "Hairy ears (disputed)"
                        ],
                        rarity: "Y chromosome small, few genes"                     }
                },

                autosomalDominant: {
                    description: "Dominant allele on autosome (chromosomes 1-22)",
                    patterns: [
                        "Appears in every generation (usually)",                        "Affected person usually has affected parent",                                                                                  "50% chance if one parent affected (Aa × aa)",                                                                                  "Males and females equally affected",
                        "Can be passed from either parent"
                    ],
                    genotypes: "AA or Aa affected, aa normal",                      pedigree: "Vertical pattern (each generation)",
                    examples: [
                        "Huntington's disease",
                        "Achondroplasia (dwarfism)",
                        "Marfan syndrome",
                        "Polydactyly (extra fingers/toes)"                          ],
                    exceptions: "De novo mutations, incomplete penetrance"                                                                      },

                autosomalRecessive: {                                               description: "Recessive allele on autosome",
                    patterns: [                                                         "Skips generations",
                        "Can appear in children of unaffected parents",
                        "Males and females equally affected",
                        "25% risk if both parents carriers (Aa × Aa)",
                        "Consanguinity (related parents) increases risk"
                    ],                                                              genotypes: "AA and Aa normal, aa affected",
                    carriers: "Aa individuals unaffected but carry allele",
                    pedigree: "Horizontal pattern (within generation)",
                    examples: [
                        "Cystic fibrosis",
                        "Sickle cell disease",
                        "Tay-Sachs disease",                                            "Phenylketonuria (PKU)",
                        "Albinism"
                    ]
                },                                              
                mitochondrialInheritance: {                                         description: "Genes in mitochondrial DNA",                      inheritance: "Maternal only (egg contributes mitochondria, sperm doesn't)",                                                     pattern: [
                        "Affected mother passes to ALL children",                                                                                       "Affected father passes to NO children",                        "Only maternal lineage"
                    ],                                                              examples: [
                        "Leber hereditary optic neuropathy",                            "Mitochondrial myopathy",
                        "Some forms of deafness"                                    ],
                    variability: "Heteroplasmy (mix of normal and mutant mitochondria) causes variable expression"
                }                                                           },
                                                                            specialConcepts: {                                                  pleiotrophy: {                                                      description: "One gene affects multiple traits",                                                                                example: "Sickle cell mutation affects red blood cells, organs, growth",
                    mechanism: "Single protein used in multiple processes"
                },
                                                                                epistasis: {
                    description: "One gene masks or modifies effect of another gene",
                    example: "Labrador retriever coat color (E and B genes interact)",
                    types: "Dominant, recessive, duplicate dominant"
                },

                linkage: {                                                          description: "Genes on same chromosome tend to be inherited together",
                    reason: "Don't assort independently",                           recombination: "Crossing over can separate linked genes",                                                                       mappingUnit: "1 map unit (centimorgan) = 1% recombination"
                },
                                                                                penetrance: {
                    description: "Percentage of individuals with genotype showing phenotype",
                    completePenetrance: "100% - all with genotype show trait",                                                                      incompletePenetrance: "<100% - some with genotype don't show trait",                                                            example: "BRCA1 mutation: 70% penetrance for breast cancer"                                                                 },
                                                                                expressivity: {
                    description: "Degree to which trait is expressed",
                    variable: "Same genotype, different severity",
                    example: "Polydactyly - extra fingers on one or both hands, varying degrees"
                }                                                           },

            pedigreeAnalysis: {                                                 purpose: "Track inheritance through families",
                symbols: {                                                          square: "Male",
                    circle: "Female",                                               filled: "Affected",
                    half_filled: "Carrier",
                    horizontal_line: "Mating",
                    vertical_line: "Offspring"
                },
                determination: [
                    "Look for pattern (skips generations, males only, etc.)",
                    "Autosomal recessive: horizontal, skips generations",
                    "Autosomal dominant: vertical, every generation",                                                                               "X-linked recessive: mostly males, through carrier mothers",                                                                    "Mitochondrial: all children of affected mothers"
                ]
            },
                                                                            category: 'inheritance_patterns'                            };
    }
    

   handleChromosomesKaryotypes(problem) {                              return {
            topic: "Chromosomes and Karyotypes",
            description: "Organization and visualization of genetic material",

            chromosome: {                                                       definition: "Organized structure of DNA and proteins",                                                                          function: "Package and protect DNA, regulate gene expression",                                                                                                                                  structure: {                                                        DNA: "Double helix (2 nm diameter)",
                    histones: {
                        description: "Proteins DNA wraps around",                                                                                       types: "H1, H2A, H2B, H3, H4",                                  charge: "Positively charged (bind negatively charged DNA)"
                    },                                                              nucleosome: {                                                       description: "DNA wrapped around 8 histones",                                                                                   wrapping: "147 base pairs, 1.65 turns",                         diameter: "11 nm"                                           },                                                              chromatin: "DNA-protein complex",                               packaging: "Multiple levels of coiling and folding"                                                                         },
                                                                                parts: {
                    centromere: {
                        description: "Constriction point where sister chromatids attach",                                                               function: "Spindle fiber attachment during cell division",                                                                      kinetochore: "Protein structure at centromere for spindle attachment"                                                       },
                    telomere: {                                                         description: "Protective caps at chromosome ends",
                        sequence: "TTAGGG repeated thousands of times (humans)",
                        function: "Protect genes from being lost, prevent fusion",                                                                      aging: "Shorten with each cell division"
                    },                                                              chromatid: {
                        sisterChromatids: "Identical copies joined at centromere (after DNA replication)",                                              separration: "Separate during cell division"                                                                                },                                                              arms: {                                                             p_arm: "Short arm (petite)",                                    q_arm: "Long arm"
                    }
                },

                types_by_centromere: {                                              metacentric: {
                        description: "Centromere in middle",                            arms: "Equal or nearly equal length",                           example: "Human chromosomes 1, 3, 16, 19, 20"                                                                               },
                    submetacentric: {
                        description: "Centromere off-center",
                        arms: "Unequal arms",                                           example: "Most human chromosomes"
                    },
                    acrocentric: {
                        description: "Centromere near end",
                        arms: "Very short p arm, long q arm",
                        satellites: "Small masses beyond p arm",                        example: "Human chromosomes 13, 14, 15, 21, 22"                                                                             },
                    telocentric: {
                        description: "Centromere at end",                               arms: "Essentially one arm",
                        humans: "None in humans (common in other organisms)"
                    }                                                           }
            },                                                  
            humanKaryotype: {                                                   totalChromosomes: 46,                                           sets: "23 pairs (diploid, 2n)",
                autosomes: {
                    number: "22 pairs (44 chromosomes)",
                    numbering: "1-22 (by size, largest to smallest)",
                    function: "Carry most genes"                                },
                sexChromosomes: {
                    number: "1 pair (2 chromosomes)",
                    female: "XX (46,XX)",
                    male: "XY (46,XY)",
                    determination: "Y chromosome determines maleness (SRY gene)"
                },
                gametes: {                                                          number: "23 chromosomes (haploid, n)",
                    egg: "22 autosomes + X",                                        sperm: "22 autosomes + X or Y"
                },
                sizes: {
                    largest: "Chromosome 1 (~249 million base pairs)",
                    smallest: "Chromosome 21 (~47 million base pairs)",                                                                             Y: "~59 million base pairs (smallest but not #22)"
                },
                geneContent: {
                    total: "~20,000-25,000 genes",
                    codingDNA: "Only ~2% of DNA codes for proteins",
                    nonCoding: "Regulatory sequences, introns, repetitive DNA, etc."
                }
            },

            karyotype: {
                definition: "Visual display of all chromosomes arranged by size and type",
                purpose: "Identify chromosomal abnormalities",
                
                preparation: {
                    steps: [
                        "Obtain cells (blood, amniotic fluid, chorionic villi, tissue)",
                        "Culture cells to stimulate division",
                        "Add colchicine to arrest cells in metaphase (when chromosomes most condensed)",
                        "Treat with hypotonic solution (cells swell, chromosomes spread)",
                        "Fix cells on slide",
                        "Stain chromosomes (G-banding, Q-banding, R-banding)",
                        "Photograph chromosomes under microscope",
                        "Arrange pairs by size and centromere position"
                    ],
                    bestPhase: "Metaphase (chromosomes most condensed and visible)"
                },

                staining: {
                    Gbanding: {
                        name: "Giemsa banding (most common)",
                        pattern: "Dark and light bands",
                        mechanism: "Binds to AT-rich regions",
                        result: "Unique banding pattern for each chromosome",
                        resolution: "Can detect deletions/duplications >4 million base pairs"
                    },
                    Qbanding: {
                        name: "Quinacrine banding",
                        pattern: "Fluorescent bands",
                        use: "Similar to G-banding"
                    },
                    Rbanding: {
                        name: "Reverse banding",
                        pattern: "Opposite of G-banding (light bands dark, dark light)"
                    }
                },

                notation: {
                    normal: {
                        male: "46,XY",
                        female: "46,XX"
                    },
                    abnormal: {
                        downSyndrome: "47,XX,+21 or 47,XY,+21 (extra chromosome 21)",
                        turnerSyndrome: "45,X (missing sex chromosome)",
                        klinefelterSyndrome: "47,XXY (extra X chromosome)"
                    },
                    format: "Total chromosomes, sex chromosomes, abnormalities"
                }
            },

            chromosomalAbnormalities: {
                numerical: {
                    description: "Wrong number of chromosomes",
                    
                    euploidy: {
                        description: "Complete sets of chromosomes",
                        types: {
                            haploid: "n (23 in humans) - normal for gametes",
                            diploid: "2n (46 in humans) - normal for somatic cells",
                            polyploidy: {
                                triploid: "3n (69 chromosomes)",
                                tetraploid: "4n (92 chromosomes)",
                                occurrence: "Rare in humans, lethal; common in plants",
                                plants: "Many crops are polyploid (wheat, cotton, strawberries)"
                            }
                        }
                    },

                    aneuploidy: {
                        description: "Abnormal number of individual chromosomes",
                        cause: "Nondisjunction during meiosis",
                        
                        nondisjunction: {
                            description: "Chromosomes fail to separate properly",
                            meiosis_I: "Homologous chromosomes don't separate",
                            meiosis_II: "Sister chromatids don't separate",
                            result: "Gametes with wrong number (n+1 or n-1)",
                            fertilization: "Results in 2n+1 (trisomy) or 2n-1 (monosomy)"
                        },

                        types: {
                            monosomy: {
                                description: "Missing one chromosome (2n-1 = 45)",
                                notation: "45,X",
                                autosomal: "Usually lethal (except some mosaics)",
                                sexChromosome: "Turner syndrome (45,X) viable"
                            },
                            trisomy: {
                                description: "Extra chromosome (2n+1 = 47)",
                                examples: [
                                    "Trisomy 21 (Down syndrome)",
                                    "Trisomy 18 (Edwards syndrome)",
                                    "Trisomy 13 (Patau syndrome)",
                                    "Trisomy X (47,XXX)",
                                    "Klinefelter (47,XXY)"
                                ],
                                viability: "Only trisomies 13, 18, 21, and sex chromosomes viable"
                            }
                        }
                    },

                    examples: {
                        downSyndrome: {
                            karyotype: "47,XX,+21 or 47,XY,+21",
                            frequency: "1 in 700 births",
                            cause: "Extra chromosome 21 (trisomy 21)",
                            features: [
                                "Intellectual disability (mild to moderate)",
                                "Distinctive facial features",
                                "Heart defects (40%)",
                                "Increased Alzheimer risk",
                                "Shorter lifespan (but improving with care)"
                            ],
                            maternalAge: "Risk increases dramatically with maternal age",
                            types: "95% nondisjunction, 4% translocation, 1% mosaic"
                        },
                        edwardsSyndrome: {
                            karyotype: "47,XX,+18 or 47,XY,+18",
                            frequency: "1 in 5,000 births",
                            cause: "Extra chromosome 18 (trisomy 18)",
                            severity: "Severe - most die within first year",
                            features: "Multiple organ defects, clenched fists, rocker-bottom feet"
                        },
                        patauSyndrome: {
                            karyotype: "47,XX,+13 or 47,XY,+13",
                            frequency: "1 in 10,000 births",
                            cause: "Extra chromosome 13 (trisomy 13)",
                            severity: "Very severe - most die within first month",
                            features: "Brain, heart defects, cleft lip/palate, polydactyly"
                        },
                        turnerSyndrome: {
                            karyotype: "45,X",
                            frequency: "1 in 2,500 female births",
                            cause: "Missing sex chromosome (monosomy X)",
                            affects: "Females only",
                            features: [
                                "Short stature",
                                "Ovarian dysgenesis (infertility)",
                                "Webbed neck",
                                "Heart defects",
                                "Normal intelligence"
                            ],
                            treatment: "Growth hormone, estrogen replacement"
                        },
                        klinefelterSyndrome: {
                            karyotype: "47,XXY (can be 48,XXXY or 48,XXYY)",
                            frequency: "1 in 500-1,000 male births",
                            cause: "Extra X chromosome",
                            affects: "Males only",
                            features: [
                                "Tall stature",
                                "Small testes",
                                "Reduced testosterone",
                                "Infertility",
                                "Gynecomastia (breast development)",
                                "Learning difficulties (some)"
                            ],
                            treatment: "Testosterone replacement"
                        },
                        tripleX: {
                            karyotype: "47,XXX",
                            frequency: "1 in 1,000 female births",
                            features: "Usually normal, may be tall, learning difficulties (mild)",
                            note: "Often undiagnosed"
                        },
                        XYY: {
                            karyotype: "47,XYY",
                            frequency: "1 in 1,000 male births",
                            features: "Usually normal, may be tall",
                            myth: "Not associated with aggression (early myth debunked)"
                        }
                    }
                },

                structural: {
                    description: "Changes in chromosome structure",
                    
                    deletion: {
                        description: "Segment of chromosome lost",
                        effect: "Loss of genes in deleted region",
                        types: {
                            terminal: "End of chromosome deleted",
                            interstitial: "Internal segment deleted"
                        },
                        examples: [
                            "Cri-du-chat syndrome (5p deletion) - cat-like cry",
                            "Wolf-Hirschhorn syndrome (4p deletion)",
                            "Williams syndrome (7q11.23 deletion)"
                        ]
                    },

                    duplication: {
                        description: "Segment of chromosome copied",
                        effect: "Extra copies of genes",
                        evolution: "Important for creating new genes",
                        example: "Charcot-Marie-Tooth disease (17p duplication)"
                    },

                    inversion: {
                        description: "Segment reversed (180° flip)",
                        types: {
                            paracentric: "Doesn't include centromere",
                            pericentric: "Includes centromere"
                        },
                        effect: "Usually no gene loss, but can disrupt genes at breakpoints",
                        meiosis: "Problems with chromosome pairing",
                        note: "Carriers often healthy but risk abnormal gametes"
                    },

                    translocation: {
                        description: "Segment moved to different chromosome",
                        
                        types: {
                            reciprocal: {
                                description: "Two chromosomes exchange segments",
                                balanced: "No genetic material lost - carrier usually normal",
                                unbalanced: "Offspring may have duplications/deletions",
                                example: "9;22 translocation"
                            },
                            robertsonian: {
                                description: "Two acrocentric chromosomes join at centromeres",
                                chromosomes: "13, 14, 15, 21, 22",
                                result: "One large chromosome, lose short arms",
                                carriers: "45 chromosomes but phenotypically normal",
                                risk: "Offspring may have trisomy (e.g., Down syndrome from 14;21)"
                            }
                        },

                        examples: {
                            philadelphiaChromosome: {
                                translocation: "t(9;22)",
                                disease: "Chronic myeloid leukemia (CML)",
                                mechanism: "BCR-ABL fusion gene (constitutively active tyrosine kinase)",
                                treatment: "Gleevec (imatinib) - targeted therapy"
                            },
                            burkittLymphoma: {
                                translocation: "t(8;14)",
                                mechanism: "MYC oncogene placed near immunoglobulin gene"
                            }
                        }
                    },

                    ringChromosome: {
                        description: "Chromosome ends deleted and remaining ends fuse",
                        stability: "Often unstable during cell division",
                        effect: "Depends on genes lost in deletions"
                    },

                    isochromosome: {
                        description: "One arm deleted, other duplicated",
                        result: "Two identical arms",
                        example: "i(17q) in some cancers"
                    }
                }
            },

            applications: {
                prenatalDiagnosis: {
                    methods: [
                        "Amniocentesis (15-20 weeks)",
                        "Chorionic villus sampling (10-13 weeks)",
                        "Cordocentesis (after 18 weeks)",
                        "Non-invasive prenatal testing (NIPT) - cell-free fetal DNA"
                    ],
                    indications: [
                        "Advanced maternal age (>35)",
                        "Abnormal ultrasound",
                        "Positive screening test",
                        "Family history"
                    ]
                },
                cancerCytogenetics: {
                    purpose: "Identify chromosomal changes in cancer cells",
                    examples: [
                        "Philadelphia chromosome (CML)",
                        "Translocations in leukemias and lymphomas",
                        "Gene amplifications (multiple copies)"
                    ],
                    prognosis: "Certain changes indicate better/worse outcomes",
                    treatment: "Guide targeted therapies"
                },
                infertilityTesting: {
                    purpose: "Identify chromosomal causes of infertility",
                    findings: "Translocations, inversions, sex chromosome abnormalities"
                },
                evolutionaryStudies: {
                    purpose: "Compare karyotypes across species",
                    findings: "Chromosome number and structure vary widely",
                    humans: "46 chromosomes; great apes 48 (human 2 is fusion of two ape chromosomes)"
                }
            },

            category: 'chromosomes_karyotypes'
        };
    }

    handleGeneticDisorders(problem) {
        return this.lessons.genetic_disorders; // Already defined in initializeGeneticsLessons
    }

    handleGeneticTechnology(problem) {
        return this.lessons.genetic_technology; // Already defined in initializeGeneticsLessons
    }

    // CONTENT GENERATION METHODS (Following Cell Biology pattern)

    generateGeneticsContent(problem, content) {
        const contentSections = [];

        contentSections.push(this.generateOverviewSection(problem, content));

        if (content.mendelLaws) {
            contentSections.push(this.generateMendelLawsContent(content));
        }

        if (content.crossTypes) {
            contentSections.push(this.generateCrossTypesContent(content));
        }

        if (content.nucleotideStructure || content.basePairing) {
            contentSections.push(this.generateDNAStructureContent(content));
        }

        if (content.replicationProcess) {
            contentSections.push(this.generateReplicationContent(content));
        }

        if (content.transcriptionProcess) {
            contentSections.push(this.generateTranscriptionContent(content));
        }

        if (content.translationProcess) {
            contentSections.push(this.generateTranslationContent(content));
        }

        if (content.mutationTypes) {
            contentSections.push(this.generateMutationsContent(content));
        }

        if (content.levelsOfRegulation) {
            contentSections.push(this.generateGeneExpressionContent(content));
        }

        if (content.patterns) {
            contentSections.push(this.generateInheritancePatternsContent(content));
        }

        if (content.karyotype || content.chromosomalAbnormalities) {
            contentSections.push(this.generateChromosomesContent(content));
        }

        if (content.disordersByType) {
            contentSections.push(this.generateGeneticDisordersContent(content));
        }

        if (content.technologies) {
            contentSections.push(this.generateGeneticTechnologyContent(content));
        }

        if (content.comparison || content.comparisons) {
            contentSections.push(this.generateComparisonsSection(content));
        }

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
            description: content.description || content.definition || `Overview of ${content.topic}`,
            keyPoints: this.extractKeyPoints(content),
            relevance: this.getTopicRelevance(problem.type)
        };
    }

    generateMendelLawsContent(content) {
        return {
            sectionType: 'mendel_laws',
            title: "Mendel's Laws of Inheritance",
            laws: content.mendelLaws,
            traits: content.mendelTraits,
            historicalContext: content.historicalContext
        };
    }

    generateCrossTypesContent(content) {
        return {
            sectionType: 'cross_types',
            title: 'Types of Genetic Crosses',
            crosses: content.crossTypes,
            probability: content.probability
        };
    }

    generateDNAStructureContent(content) {
        return {
            sectionType: 'dna_structure',
            title: 'DNA Structure and Components',
            nucleotide: content.nucleotideStructure,
            bases: content.nitrogenousBases,
            basePairing: content.basePairing,
            doubleHelix: content.doubleHelix
        };
    }

    generateReplicationContent(content) {
        return {
            sectionType: 'replication',
            title: 'DNA Replication Process',
            model: content.replicationModel,
            enzymes: content.keyEnzymes,
            process: content.replicationProcess
        };
    }

    generateTranscriptionContent(content) {
        return {
            sectionType: 'transcription',
            title: 'Transcription: DNA to RNA',
            process: content.transcriptionProcess,
            RNAprocessing: content.RNAprocessing_eukaryotes,
            RNAtypes: content.RNAtypes
        };
    }

    generateTranslationContent(content) {
        return {
            sectionType: 'translation',
            title: 'Translation: RNA to Protein',
            geneticCode: content.geneticCode,
            tRNA: content.tRNA_structure,
            ribosome: content.ribosome,
            process: content.translationProcess
        };
    }

generateMutationsContent(content) {
        return {
            sectionType: 'mutations',
            title: 'Genetic Mutations',
            causes: content.causes,
            types: content.mutationTypes,
            effects: content.effectsOnProtein,
            examples: content.examplesOfDisease
        };
    }

    generateGeneExpressionContent(content) {
        return {
            sectionType: 'gene_expression',
            title: 'Gene Expression and Regulation',
            levels: content.levelsOfRegulation,
            prokaryotic: content.prokaryoticRegulation,
            eukaryotic: content.eukaryoticRegulation
        };
    }

    generateInheritancePatternsContent(content) {
        return {
            sectionType: 'inheritance_patterns',
            title: 'Patterns of Inheritance',
            patterns: content.patterns,
            specialConcepts: content.specialConcepts,
            pedigreeAnalysis: content.pedigreeAnalysis
        };
    }

    generateChromosomesContent(content) {
        return {
            sectionType: 'chromosomes',
            title: 'Chromosomes and Karyotypes',
            chromosome: content.chromosome,
            karyotype: content.karyotype,
            abnormalities: content.chromosomalAbnormalities
        };
    }

    generateGeneticDisordersContent(content) {
        return {
            sectionType: 'genetic_disorders',
            title: 'Genetic Disorders',
            disorders: content.disordersByType,
            detection: content.detection
        };
    }

    generateGeneticTechnologyContent(content) {
        return {
            sectionType: 'genetic_technology',
            title: 'Genetic Technologies',
            technologies: content.technologies,
            applications: content.applications
        };
    }

    generateComparisonsSection(content) {
        const comparisons = content.comparisons || content.comparison;
        if (!comparisons) return null;

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

    // HELPER METHODS (Following Cell Biology pattern)

    extractKeyPoints(content) {
        const keyPoints = [];

        if (content.concepts) keyPoints.push(...content.concepts);
        if (content.keyDefinitions) keyPoints.push(...Object.keys(content.keyDefinitions));
        if (content.mainCategories) keyPoints.push(...content.mainCategories);

        return keyPoints.slice(0, 5);
    }

    getTopicRelevance(topicType) {
        const relevance = {
            mendelian_genetics: "Foundation of understanding inheritance and genetic patterns",
            punnett_squares: "Essential tool for predicting genetic outcomes",
            dna_structure: "Understanding DNA structure explains how genetic information is stored",
            dna_replication: "Critical for cell division and inheritance",
            transcription: "First step in gene expression",
            translation: "Converts genetic information into functional proteins",
            mutations: "Source of genetic variation and cause of genetic diseases",
            gene_expression: "Controls when and how genes produce proteins",
            inheritance_patterns: "Explains how traits pass through families",
            chromosomes_karyotypes: "Chromosomal organization and abnormalities",
            genetic_disorders: "Understanding hereditary diseases",
            genetic_technology: "Modern tools for analyzing and manipulating DNA"
        };

        return relevance[topicType] || "Important genetics concept";
    }

    // DIAGRAM GENERATION

    generateGeneticsDiagramData() {
        if (!this.currentContent) return;

        const { type } = this.currentProblem;

        this.diagramData = {
            type: type,
            diagrams: this.getRelevantDiagrams(type),
            placeholder: true,
            note: "Diagram generation will be implemented with actual genetics diagrams"
        };
    }

    getRelevantDiagrams(topicType) {
        const diagramMap = {
            mendelian_genetics: ["pea_plant_traits", "monohybrid_cross", "dihybrid_cross", "test_cross"],
            punnett_squares: ["2x2_punnett", "4x4_punnett", "punnett_example"],
            dna_structure: ["double_helix", "nucleotide", "base_pairing", "dna_packaging"],
            dna_replication: ["replication_fork", "leading_lagging_strands", "enzymes_diagram"],
            transcription: ["transcription_steps", "RNA_processing", "promoter_terminator"],
            translation: ["ribosome_diagram", "translation_steps", "genetic_code_table"],
            mutations: ["point_mutations", "frameshift", "mutation_effects"],
            gene_expression: ["lac_operon", "trp_operon", "eukaryotic_regulation"],
            inheritance_patterns: ["pedigree_symbols", "x_linked_pedigree", "autosomal_pedigree"],
            chromosomes_karyotypes: ["human_karyotype", "chromosome_structure", "nondisjunction"],
            genetic_disorders: ["disorder_pedigrees", "chromosomal_abnormalities"],
            genetic_technology: ["PCR_diagram", "gel_electrophoresis", "CRISPR_mechanism"]
        };

        return diagramMap[topicType] || [];
    }

    // WORKBOOK GENERATION (Following Cell Biology pattern)

    generateGeneticsWorkbook() {
        if (!this.currentContent || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createGeneticsProblemSection(),
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
            title: `Genetics Workbook: ${this.currentContent.topic}`,
            generated: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            sections: []
        };
    }

    createGeneticsProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Topic Information',
            type: 'problem',
            data: [
                ['Topic Type', this.currentProblem.type],
                ['Main Topic', this.currentProblem.originalTopic],
                ['Sub-Topic', this.currentProblem.subTopic || 'General'],
                ['Category', this.geneticsTopics[this.currentProblem.type]?.category || 'N/A']
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

        if (this.currentContent.description) {
            overviewData.push(['Description', this.currentContent.description]);
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

        // Add content based on topic type
        if (this.currentContent.mendelLaws) {
            Object.entries(this.currentContent.mendelLaws).forEach(([law, details]) => {
                contentData.push([law.replace(/([A-Z])/g, ' $1').trim(), '']);
                contentData.push(['Statement', details.statement]);
                if (details.explanation) contentData.push(['Explanation', details.explanation]);
                if (details.example) contentData.push(['Example', details.example]);
                contentData.push(['', '']);
            });
        }

        // Add more content sections as needed...

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
                    }
                });
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
        if (!this.currentContent.examples && !this.currentContent.applications) return null;

        const data = [];

        if (this.currentContent.examples) {
            data.push(['EXAMPLES', '']);
            if (Array.isArray(this.currentContent.examples)) {
                this.currentContent.examples.forEach(example => {
                    if (typeof example === 'string') {
                        data.push(['•', example]);
                    } else if (typeof example === 'object') {
                        Object.entries(example).forEach(([key, value]) => {
                            data.push([key, Array.isArray(value) ? value.join(', ') : value]);
                        });
                    }
                });
            }
            data.push(['', '']);
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
            ['Diagram Status', this.diagramData.placeholder ? 'Placeholder' : 'Available'],
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

    // UTILITY METHODS FOR ENHANCED EXPLANATIONS
    // UTILITY METHODS FOR ENHANCED EXPLANATIONS

    adaptGeneticsLanguage(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'allele': 'gene version',
                    'genotype': 'genetic makeup',
                    'phenotype': 'physical appearance',
                    'homozygous': 'two identical versions',
                    'heterozygous': 'two different versions',
                    'dominant': 'stronger version',
                    'recessive': 'weaker version',
                    'nucleotide': 'DNA building block',
                    'transcription': 'DNA copying to RNA',
                    'translation': 'making protein from RNA'
                }
            },
            intermediate: {
                replacements: {
                    'allele': 'allele',
                    'genotype': 'genotype',
                    'phenotype': 'phenotype'
                }
            },
            detailed: {
                replacements: {
                    'allele': 'allele (alternative form of a gene)',
                    'genotype': 'genotype (genetic constitution)',
                    'phenotype': 'phenotype (observable characteristics)'
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

    generateGeneticsAnalogy(concept) {
        const analogies = {
            gene: "Like a recipe in a cookbook",
            allele: "Like different versions of the same recipe",
            chromosome: "Like a chapter in the recipe book",
            DNA: "Like the recipe book itself with all instructions",
            transcription: "Like photocopying a recipe to take to the kitchen",
            translation: "Like following the recipe to make the dish",
            mutation: "Like a typo in the recipe that changes the outcome",
            dominance: "Like one ingredient overpowering another in flavor",
            punnett_square: "Like a grid showing all possible combinations",
            genotype: "Like the actual recipe written down",
            phenotype: "Like the finished dish you can see and taste"
        };

        return analogies[concept] || "Important genetic concept";
    }

    formatGeneticsTerm(term) {
        // Format genetics terms with proper notation
        const formatted = term
            .replace(/DNA/g, this.geneticsSymbols.DNA)
            .replace(/RNA/g, this.geneticsSymbols.RNA)
            .replace(/mRNA/g, this.geneticsSymbols.mRNA)
            .replace(/tRNA/g, this.geneticsSymbols.tRNA);

        return formatted;
    }

    // ASSESSMENT AND LEARNING METHODS

    assessContentDifficulty() {
        if (!this.currentContent) return 'unknown';

        let difficultyScore = 0;

        // Simple topics
        const simpleTopics = ['mendelian_genetics', 'punnett_squares'];
        if (simpleTopics.includes(this.currentProblem.type)) {
            difficultyScore += 1;
        }

        // Intermediate topics
        const intermediateTopics = ['dna_structure', 'inheritance_patterns', 'chromosomes_karyotypes'];
        if (intermediateTopics.includes(this.currentProblem.type)) {
            difficultyScore += 2;
        }

        // Complex topics
        const complexTopics = ['dna_replication', 'transcription', 'translation', 'gene_expression', 'genetic_technology'];
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
            mendelian_genetics: [
                "Explain Mendel's three laws of inheritance",
                "Distinguish between genotype and phenotype",
                "Predict offspring ratios using Mendel's laws",
                "Understand the concept of dominant and recessive alleles"
            ],
            punnett_squares: [
                "Construct Punnett squares for monohybrid and dihybrid crosses",
                "Calculate genotypic and phenotypic ratios",
                "Interpret results of test crosses",
                "Apply probability rules to genetic crosses"
            ],
            dna_structure: [
                "Describe the structure of DNA including the double helix",
                "Explain complementary base pairing rules",
                "Identify the components of a nucleotide",
                "Understand DNA packaging in chromosomes"
            ],
            dna_replication: [
                "Explain the semiconservative model of DNA replication",
                "Describe the roles of key enzymes in replication",
                "Distinguish between leading and lagging strand synthesis",
                "Understand the importance of DNA proofreading"
            ],
            transcription: [
                "Describe the process of transcription",
                "Explain the differences between DNA and RNA",
                "Understand RNA processing in eukaryotes",
                "Distinguish between different types of RNA"
            ],
            translation: [
                "Explain how the genetic code works",
                "Describe the roles of mRNA, tRNA, and rRNA",
                "Outline the steps of translation",
                "Understand how codons specify amino acids"
            ],
            mutations: [
                "Classify different types of mutations",
                "Predict the effects of mutations on proteins",
                "Distinguish between germline and somatic mutations",
                "Understand causes of mutations"
            ],
            gene_expression: [
                "Describe the central dogma of molecular biology",
                "Explain different levels of gene regulation",
                "Compare prokaryotic and eukaryotic gene regulation",
                "Understand the lac and trp operons"
            ],
            inheritance_patterns: [
                "Distinguish between different inheritance patterns",
                "Analyze pedigrees to determine inheritance patterns",
                "Explain sex-linked inheritance",
                "Understand incomplete dominance and codominance"
            ],
            chromosomes_karyotypes: [
                "Describe chromosome structure and organization",
                "Interpret human karyotypes",
                "Identify chromosomal abnormalities",
                "Understand causes of aneuploidy"
            ],
            genetic_disorders: [
                "Classify genetic disorders by inheritance pattern",
                "Predict risk of genetic disorders in families",
                "Understand common chromosomal disorders",
                "Explain genetic testing methods"
            ],
            genetic_technology: [
                "Describe modern genetic technologies",
                "Explain the PCR process",
                "Understand CRISPR gene editing",
                "Discuss applications and ethics of genetic engineering"
            ]
        };

        return objectivesDatabase[this.currentProblem.type] || [
            "Understand the key concepts of this genetics topic",
            "Apply knowledge to solve genetic problems",
            "Make connections to other genetic principles"
        ];
    }

    identifyPrerequisites() {
        if (!this.currentProblem) return [];

        const prerequisitesDatabase = {
            mendelian_genetics: [
                "Basic understanding of inheritance",
                "Knowledge of sexual reproduction"
            ],
            punnett_squares: [
                "Understanding of Mendelian genetics",
                "Basic probability concepts",
                "Genotype and phenotype definitions"
            ],
            dna_structure: [
                "Basic chemistry (bonds, molecules)",
                "Understanding of nucleotides"
            ],
            dna_replication: [
                "DNA structure knowledge",
                "Understanding of enzymes",
                "Cell cycle basics"
            ],
            transcription: [
                "DNA structure",
                "Understanding of RNA",
                "Base pairing rules"
            ],
            translation: [
                "Transcription knowledge",
                "Understanding of codons",
                "Protein structure basics"
            ],
            mutations: [
                "DNA structure",
                "Understanding of genes",
                "Basic molecular biology"
            ],
            gene_expression: [
                "Transcription and translation",
                "Understanding of proteins",
                "Cell structure"
            ],
            inheritance_patterns: [
                "Mendelian genetics",
                "Punnett squares",
                "Understanding of chromosomes"
            ],
            chromosomes_karyotypes: [
                "Basic genetics",
                "Understanding of cell division",
                "Chromosome structure"
            ],
            genetic_disorders: [
                "Inheritance patterns",
                "Chromosome knowledge",
                "Pedigree analysis"
            ],
            genetic_technology: [
                "DNA structure and function",
                "Basic molecular biology",
                "Understanding of genes"
            ]
        };

        return prerequisitesDatabase[this.currentProblem.type] || [
            "General biology background"
        ];
    }

    generateStudyTips() {
        if (!this.currentProblem) return [];

        const studyTipsDatabase = {
            mendelian_genetics: [
                "Practice with pea plant trait examples",
                "Create flashcards for key vocabulary",
                "Draw out crosses to visualize inheritance",
                "Remember: Law of Segregation = alleles separate"
            ],
            punnett_squares: [
                "Practice, practice, practice - do many problems",
                "Always list gametes first before filling square",
                "Double-check your work - count all genotypes",
                "Use FOIL method for dihybrid crosses"
            ],
            dna_structure: [
                "Build a DNA model to understand 3D structure",
                "Memorize base pairing: A-T and G-C",
                "Remember antiparallel orientation (5' to 3')",
                "Draw nucleotides to understand components"
            ],
            dna_replication: [
                "Make a flowchart of the replication process",
                "List enzymes and their functions",
                "Understand leading vs lagging strand difference",
                "Draw replication fork diagrams"
            ],
            transcription: [
                "Compare transcription to DNA replication",
                "List RNA processing steps in eukaryotes",
                "Practice template strand problems",
                "Remember: DNA → RNA (T becomes U)"
            ],
            translation: [
                "Use codon table frequently until memorized",
                "Practice translating mRNA sequences",
                "Understand ribosome A, P, E sites",
                "Draw translation steps in sequence"
            ],
            mutations: [
                "Create comparison table of mutation types",
                "Work through example mutations",
                "Understand frameshift vs point mutations",
                "Relate mutations to real genetic diseases"
            ],
            gene_expression: [
                "Draw the central dogma pathway",
                "Understand lac operon thoroughly as model",
                "Compare prokaryotic vs eukaryotic regulation",
                "Make concept maps of regulation levels"
            ],
            inheritance_patterns: [
                "Practice pedigree analysis extensively",
                "Create comparison charts of inheritance patterns",
                "Work through X-linked problems carefully",
                "Understand carrier vs affected distinction"
            ],
            chromosomes_karyotypes: [
                "Practice identifying chromosomes in karyotypes",
                "Memorize common trisomies (13, 18, 21)",
                "Understand nondisjunction mechanism",
                "Compare different chromosomal abnormalities"
            ],
            genetic_disorders: [
                "Make flashcards for major disorders",
                "Practice calculating recurrence risks",
                "Understand autosomal vs X-linked patterns",
                "Study real pedigrees of genetic disorders"
            ],
            genetic_technology: [
                "Understand PCR steps thoroughly",
                "Watch videos of gel electrophoresis",
                "Learn CRISPR mechanism step-by-step",
                "Discuss ethical implications of technologies"
            ]
        };

        return studyTipsDatabase[this.currentProblem.type] || [
            "Review material regularly",
            "Practice problems extensively",
            "Create visual aids",
            "Teach concepts to someone else"
        ];
    }

    generateAssessmentQuestions() {
        if (!this.currentProblem) return [];

        const questionsDatabase = {
            mendelian_genetics: [
                {
                    question: "What is the difference between genotype and phenotype?",
                    type: "definition",
                    difficulty: "easy"
                },
                {
                    question: "If Tt × Tt, what percentage of offspring will be homozygous recessive?",
                    type: "application",
                    difficulty: "medium"
                },
                {
                    question: "Explain why Mendel's Law of Independent Assortment doesn't apply to linked genes.",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            punnett_squares: [
                {
                    question: "In a monohybrid cross Aa × Aa, what is the phenotypic ratio?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Set up a dihybrid cross for AaBb × AaBb and determine the phenotypic ratio.",
                    type: "application",
                    difficulty: "medium"
                },
                {
                    question: "How would you use a test cross to determine if a tall plant is TT or Tt?",
                    type: "problem-solving",
                    difficulty: "hard"
                }
            ],
            dna_structure: [
                {
                    question: "What are the three components of a nucleotide?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "If one DNA strand is 5'-ATGC-3', what is the complementary strand?",
                    type: "application",
                    difficulty: "medium"
                },
                {
                    question: "Explain how the structure of DNA enables it to store genetic information.",
                    type: "explanation",
                    difficulty: "hard"
                }
            ],
            mutations: [
                {
                    question: "What is the difference between a silent and a missense mutation?",
                    type: "comparison",
                    difficulty: "easy"
                },
                {
                    question: "Why are frameshift mutations usually more harmful than point mutations?",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "Compare the consequences of a germline vs. somatic mutation.",
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
            mendelian_genetics: ['punnett_squares', 'inheritance_patterns', 'genetic_disorders'],
            punnett_squares: ['mendelian_genetics', 'inheritance_patterns', 'mutations'],
            dna_structure: ['dna_replication', 'chromosomes_karyotypes', 'mutations'],
            dna_replication: ['dna_structure', 'transcription', 'mutations'],
            transcription: ['dna_structure', 'translation', 'gene_expression'],
            translation: ['transcription', 'mutations', 'gene_expression'],
            mutations: ['dna_structure', 'genetic_disorders', 'translation'],
            gene_expression: ['transcription', 'translation', 'genetic_technology'],
            inheritance_patterns: ['mendelian_genetics', 'punnett_squares', 'genetic_disorders'],
            chromosomes_karyotypes: ['dna_structure', 'genetic_disorders', 'inheritance_patterns'],
            genetic_disorders: ['inheritance_patterns', 'mutations', 'genetic_technology'],
            genetic_technology: ['dna_structure', 'gene_expression', 'genetic_disorders']
        };

        const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];
        
        return relatedTypes.map(type => ({
            type: type,
            name: this.geneticsTopics[type]?.name,
            description: this.geneticsTopics[type]?.description
        }));
    }

    generateGlossary() {
        if (!this.currentContent) return {};

        const glossary = {};

        // Extract key terms from content
        if (this.currentContent.keyTerms) {
            Object.entries(this.currentContent.keyTerms).forEach(([term, definition]) => {
                glossary[term] = definition;
            });
        }

        if (this.currentContent.keyDefinitions) {
            Object.entries(this.currentContent.keyDefinitions).forEach(([term, definition]) => {
                glossary[term] = definition;
            });
        }

        return glossary;
    }

    generateProcessTimeline(processName) {
        const timelines = {
            'DNA Replication': [
                { phase: 'Initiation', location: 'Origin of replication', events: 'Helicase unwinds DNA, primers added' },
                { phase: 'Elongation', location: 'Replication fork', events: 'DNA polymerase adds nucleotides' },
                { phase: 'Termination', location: 'Termination site', events: 'Fragments joined, primers removed' }
            ],
            'Transcription': [
                { phase: 'Initiation', location: 'Promoter', events: 'RNA polymerase binds' },
                { phase: 'Elongation', location: 'Gene', events: 'RNA synthesized 5\'→3\'' },
                { phase: 'Termination', location: 'Terminator', events: 'RNA released' }
            ],
            'Translation': [
                { phase: 'Initiation', location: 'Start codon', events: 'Ribosome assembles at AUG' },
                { phase: 'Elongation', location: 'Ribosome', events: 'Amino acids added one by one' },
                { phase: 'Termination', location: 'Stop codon', events: 'Polypeptide released' }
            ],
            'Meiosis': [
                { phase: 'Meiosis I', events: 'Homologous pairs separate', result: '2 haploid cells' },
                { phase: 'Meiosis II', events: 'Sister chromatids separate', result: '4 haploid gametes' }
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

    validateGeneticsContent(content) {
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
        if (this.currentContent.examples) score += 1;
        if (this.currentContent.applications) score += 1;
        if (this.currentContent.comparison || this.currentContent.comparisons) score += 1;

        const hasMainContent =
            this.currentContent.mendelLaws ||
            this.currentContent.crossTypes ||
            this.currentContent.nucleotideStructure ||
            this.currentContent.replicationProcess ||
            this.currentContent.transcriptionProcess ||
            this.currentContent.translationProcess ||
            this.currentContent.mutationTypes ||
            this.currentContent.patterns;
        if (hasMainContent) score += 5;

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

    // EXPORT AND UTILITY METHODS

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
        return Object.entries(this.geneticsTopics).map(([key, topic]) => ({
            id: key,
            name: topic.name,
            category: topic.category,
            description: topic.description
        }));
    }

    getTopicDetails(topicId) {
        const topic = this.geneticsTopics[topicId];
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

        if (content.description) {
            markdown += `${content.description}\n\n`;
        }

        return markdown;
    }

    convertToHTML(content) {
        let html = `<div class="genetics-content">\n`;
        html += `  <h1>${content.topic}</h1>\n`;

        if (content.definition) {
            html += `  <p class="definition"><strong>Definition:</strong> ${content.definition}</p>\n`;
        }

        html += `</div>`;
        return html;
    }

    searchContent(query) {
        if (!this.currentContent) return null;

        const results = {
            query: query,
            matches: []
        };

        const searchableContent = JSON.stringify(this.currentContent).toLowerCase();
        const queryLower = query.toLowerCase();

        if (searchableContent.includes(queryLower)) {
            results.matches.push({
                type: 'content',
                location: 'main',
                content: this.currentContent.topic
            });
        }

        return results;
    }

    filterContentByCategory(category) {
        if (!this.currentContent) return null;

        return {
            category: category,
            items: []
        };
    }

    generateContentSummary() {
        if (!this.currentContent) return null;

        return {
            topic: this.currentContent.topic,
            category: this.currentContent.category,
            keyPoints: this.extractKeyPoints(this.currentContent),
            completeness: this.calculateContentCompleteness()
        };
    }
}

// Export the class
export default EnhancedGeneticsMolecularBiologyWorkbook;
