// Enhanced Taxonomy and Classification Workbook - Comprehensive Biological Classification System
import * as math from 'mathjs';

export class EnhancedTaxonomyClassificationWorkbook {
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

        this.taxonomicSymbols = this.initializeTaxonomicSymbols();
        this.setThemeColors();
        this.initializeTaxonomyTopics();
        this.initializeMisconceptionDatabase();
        this.initializeExplanationTemplates();
        this.initializeTaxonomyLessons();
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

    initializeTaxonomicSymbols() {
        return {
            // Taxonomic notation symbols
            'genus': 'Genus',
            'species': 'species',
            'subspecies': 'subsp.',
            'variety': 'var.',
            'author': 'Author',
            'year': 'Year',
            'family': '-idae',
            'order': '-ales',
            'class': '-opsida',
            'phylum': '-phyta',
            // Special characters
            'cross': '×',
            'hybrid': '×',
            'approximately': '≈',
            'extinct': '†',
            'synonym': '=',
            'questionable': '?',
            'cf': 'cf.',
            'aff': 'aff.'
        };
    }

    initializeTaxonomyTopics() {
        this.taxonomyTopics = {
            // 1. Classification System
            classification_system: {
                patterns: [
                    /classification.*system/i,
                    /taxonomic.*hierarchy/i,
                    /linnaean.*classification/i,
                    /biological.*classification/i
                ],
                handler: this.handleClassificationSystem.bind(this),
                name: 'Classification System',
                category: 'taxonomy_basics',
                description: 'Hierarchical system for organizing living organisms'
            },

            // 2. Phylogeny and Evolution
            phylogeny: {
                patterns: [
                    /phylogen/i,
                    /evolutionary.*relationship/i,
                    /phylogenetic.*tree/i,
                    /cladistic/i
                ],
                handler: this.handlePhylogeny.bind(this),
                name: 'Phylogeny and Evolutionary Relationships',
                category: 'evolution',
                description: 'Study of evolutionary relationships among organisms'
            },

            // 3. Domains and Kingdoms
            domains_kingdoms: {
                patterns: [
                    /domain/i,
                    /kingdom/i,
                    /three.*domain/i,
                    /five.*kingdom|six.*kingdom/i
                ],
                handler: this.handleDomainsKingdoms.bind(this),
                name: 'Domains and Kingdoms',
                category: 'major_groups',
                description: 'Highest level taxonomic categories of life'
            },

            // 4. Binomial Nomenclature
            binomial_nomenclature: {
                patterns: [
                    /binomial.*nomenclature/i,
                    /scientific.*name/i,
                    /naming.*system/i,
                    /linnaeus.*naming/i
                ],
                handler: this.handleBinomialNomenclature.bind(this),
                name: 'Binomial Nomenclature',
                category: 'naming',
                description: 'Two-part naming system for species'
            },

            // 5. Taxonomic Ranks
            taxonomic_ranks: {
                patterns: [
                    /taxonomic.*rank/i,
                    /hierarchy.*level/i,
                    /classification.*level/i,
                    /taxa.*level/i
                ],
                handler: this.handleTaxonomicRanks.bind(this),
                name: 'Taxonomic Ranks',
                category: 'taxonomy_basics',
                description: 'Hierarchical levels in biological classification'
            },

            // 6. Species Concepts
            species_concepts: {
                patterns: [
                    /species.*concept/i,
                    /define.*species/i,
                    /what.*is.*species/i,
                    /biological.*species/i
                ],
                handler: this.handleSpeciesConcepts.bind(this),
                name: 'Species Concepts',
                category: 'species_definition',
                description: 'Different ways to define what a species is'
            },

            // 7. Phylogenetic Methods
            phylogenetic_methods: {
                patterns: [
                    /phylogenetic.*method/i,
                    /cladistic.*analysis/i,
                    /molecular.*phylogeny/i,
                    /phylogenetic.*tree.*construction/i
                ],
                handler: this.handlePhylogeneticMethods.bind(this),
                name: 'Phylogenetic Methods',
                category: 'analysis_methods',
                description: 'Techniques for determining evolutionary relationships'
            },

            // 8. Taxonomic Keys
            taxonomic_keys: {
                patterns: [
                    /taxonomic.*key/i,
                    /dichotomous.*key/i,
                    /identification.*key/i,
                    /species.*identification/i
                ],
                handler: this.handleTaxonomicKeys.bind(this),
                name: 'Taxonomic Keys',
                category: 'identification',
                description: 'Tools for identifying organisms'
            },

            // 9. Molecular Taxonomy
            molecular_taxonomy: {
                patterns: [
                    /molecular.*taxonomy/i,
                    /DNA.*barcoding/i,
                    /molecular.*classification/i,
                    /genetic.*taxonomy/i
                ],
                handler: this.handleMolecularTaxonomy.bind(this),
                name: 'Molecular Taxonomy',
                category: 'modern_methods',
                description: 'Using molecular data for classification'
            },

            // 10. Taxonomic Revisions
            taxonomic_revisions: {
                patterns: [
                    /taxonomic.*revision/i,
                    /reclassification/i,
                    /taxonomic.*change/i,
                    /synonym/i
                ],
                handler: this.handleTaxonomicRevisions.bind(this),
                name: 'Taxonomic Revisions',
                category: 'taxonomy_dynamics',
                description: 'How and why classifications change'
            },

            // 11. Biodiversity and Classification
            biodiversity_classification: {
                patterns: [
                    /biodiversity.*classification/i,
                    /species.*diversity/i,
                    /cataloging.*life/i,
                    /biodiversity.*assessment/i
                ],
                handler: this.handleBiodiversityClassification.bind(this),
                name: 'Biodiversity and Classification',
                category: 'applications',
                description: 'Role of taxonomy in understanding biodiversity'
            },

            // 12. Conservation Taxonomy
            conservation_taxonomy: {
                patterns: [
                    /conservation.*taxonomy/i,
                    /endangered.*species.*classification/i,
                    /taxonomic.*conservation/i,
                    /cryptic.*species/i
                ],
                handler: this.handleConservationTaxonomy.bind(this),
                name: 'Conservation Taxonomy',
                category: 'applications',
                description: 'Taxonomy in conservation biology'
            }
        };
    }

    initializeTaxonomyLessons() {
        this.lessons = {
            classification_system: {
                title: "Biological Classification System",
                concepts: [
                    "Classification organizes life into hierarchical groups",
                    "Linnaeus developed the modern classification system",
                    "Taxa are grouped based on shared characteristics",
                    "The system reflects evolutionary relationships"
                ],
                theory: "Biological classification (taxonomy) is the science of naming, defining, and classifying organisms into groups based on shared characteristics. The hierarchical system allows us to organize the immense diversity of life in a meaningful way.",
                keyDefinitions: {
                    "Taxonomy": "The science of naming, describing, and classifying organisms",
                    "Taxon": "A group of organisms at any hierarchical level (species, genus, family, etc.)",
                    "Classification": "The arrangement of organisms into groups based on similarities",
                    "Systematics": "The study of biological diversity and evolutionary relationships",
                    "Nomenclature": "The system of naming organisms"
                },
                mainCategories: [
                    "Hierarchical organization from broad to specific",
                    "Seven major taxonomic ranks (Kingdom → Species)",
                    "Based on morphological and molecular similarities",
                    "Reflects evolutionary history and relationships"
                ],
                applications: [
                    "Organizing and cataloging biodiversity",
                    "Understanding evolutionary relationships",
                    "Communication among scientists worldwide",
                    "Conservation planning and priorities",
                    "Predicting organism characteristics"
                ]
            },

            phylogeny: {
                title: "Phylogeny and Evolutionary Relationships",
                concepts: [
                    "Phylogeny is the evolutionary history of organisms",
                    "Phylogenetic trees show relationships",
                    "Common ancestry unites related organisms",
                    "Molecular and morphological data reveal relationships"
                ],
                theory: "Phylogeny represents the evolutionary history and relationships among groups of organisms. These relationships are depicted in branching diagrams called phylogenetic trees or cladograms, which show how species or groups evolved from common ancestors.",
                keyDefinitions: {
                    "Phylogeny": "The evolutionary history and relationships of organisms",
                    "Clade": "A group of organisms consisting of an ancestor and all its descendants",
                    "Common Ancestor": "The most recent species from which two or more species evolved",
                    "Phylogenetic Tree": "A branching diagram showing evolutionary relationships",
                    "Node": "A branching point representing a common ancestor",
                    "Sister Taxa": "Groups that share an immediate common ancestor"
                },
                mainCategories: [
                    "Monophyletic groups (clades): ancestor + all descendants",
                    "Paraphyletic groups: ancestor + some but not all descendants",
                    "Polyphyletic groups: members from different ancestors",
                    "Homologous vs analogous traits"
                ],
                applications: [
                    "Understanding evolutionary processes",
                    "Predicting characteristics of unknown species",
                    "Tracing disease evolution and spread",
                    "Conservation of evolutionary diversity",
                    "Drug and vaccine development"
                ]
            },

            domains_kingdoms: {
                title: "Domains and Kingdoms of Life",
                concepts: [
                    "Life is divided into three domains",
                    "Domains are the highest taxonomic category",
                    "Kingdoms subdivide domains",
                    "Classification reflects fundamental differences in cell type and metabolism"
                ],
                theory: "The three-domain system (Bacteria, Archaea, Eukarya) represents the most fundamental divisions of life, based on differences in cell structure, genetics, and biochemistry. Within domains, organisms are further divided into kingdoms based on additional characteristics.",
                keyDefinitions: {
                    "Domain": "The highest taxonomic rank, above kingdom",
                    "Bacteria": "Domain of prokaryotic organisms with peptidoglycan cell walls",
                    "Archaea": "Domain of prokaryotic organisms with unique biochemistry",
                    "Eukarya": "Domain of organisms with eukaryotic cells",
                    "Kingdom": "Major subdivision within a domain",
                    "Prokaryote": "Organism lacking membrane-bound nucleus",
                    "Eukaryote": "Organism with membrane-bound nucleus and organelles"
                },
                kingdoms: {
                    "Bacteria": "Prokaryotic, diverse metabolism, peptidoglycan walls",
                    "Archaea": "Prokaryotic, extremophiles, unique lipids",
                    "Protista": "Eukaryotic, mostly unicellular, diverse",
                    "Fungi": "Eukaryotic, heterotrophic, chitin walls, decomposers",
                    "Plantae": "Eukaryotic, autotrophic, cellulose walls, photosynthetic",
                    "Animalia": "Eukaryotic, heterotrophic, multicellular, mobile"
                },
                applications: [
                    "Understanding fundamental biology",
                    "Studying evolution of life",
                    "Medical and pharmaceutical research",
                    "Environmental microbiology",
                    "Biotechnology applications"
                ]
            },

            binomial_nomenclature: {
                title: "Binomial Nomenclature: Scientific Naming",
                concepts: [
                    "Each species has a unique two-part scientific name",
                    "First part is genus, second is specific epithet",
                    "Names are Latin or Latinized",
                    "Provides universal communication system"
                ],
                theory: "Binomial nomenclature, developed by Carolus Linnaeus, is the formal system of naming species. Each species receives a unique two-part name consisting of the genus name (capitalized) and specific epithet (lowercase), both italicized or underlined.",
                keyDefinitions: {
                    "Binomial Nomenclature": "Two-part naming system for species",
                    "Genus": "First part of scientific name; group of closely related species",
                    "Specific Epithet": "Second part of scientific name; identifies species within genus",
                    "Type Specimen": "Individual organism serving as reference for species description",
                    "Author Citation": "Name of scientist(s) who first described the species",
                    "Synonym": "Alternative scientific name for the same organism"
                },
                rules: [
                    "Genus name capitalized, specific epithet lowercase",
                    "Both words italicized (or underlined if handwritten)",
                    "Names should be Latin or Latinized",
                    "Genus can be abbreviated after first use (e.g., H. sapiens)",
                    "Names must be unique within each kingdom",
                    "Priority rule: first published name has precedence"
                ],
                examples: [
                    "Homo sapiens - modern humans",
                    "Canis lupus - gray wolf",
                    "Quercus alba - white oak",
                    "Escherichia coli - common gut bacterium",
                    "Tyrannosaurus rex - famous dinosaur"
                ],
                applications: [
                    "Universal scientific communication",
                    "Avoiding confusion from common names",
                    "Legal and regulatory documentation",
                    "Conservation status designation",
                    "Medical and pharmaceutical precision"
                ]
            },

            taxonomic_ranks: {
                title: "Hierarchical Taxonomic Ranks",
                concepts: [
                    "Classification uses nested hierarchical levels",
                    "Each rank groups organisms by similarity",
                    "Ranks become more specific descending the hierarchy",
                    "Mnemonic: King Philip Came Over For Good Soup"
                ],
                theory: "The taxonomic hierarchy organizes life from broad groups (domains, kingdoms) to increasingly specific groups (species). Each organism belongs to one taxon at each rank, creating a nested system that reflects evolutionary relationships.",
                keyDefinitions: {
                    "Domain": "Highest rank; three domains of life",
                    "Kingdom": "Major group within domain",
                    "Phylum": "Major group within kingdom (Division in plants)",
                    "Class": "Subdivision of phylum",
                    "Order": "Subdivision of class",
                    "Family": "Subdivision of order",
                    "Genus": "Group of closely related species",
                    "Species": "Fundamental unit; group of interbreeding organisms"
                },
                hierarchy: [
                    "Domain (broadest, most inclusive)",
                    "Kingdom",
                    "Phylum (or Division)",
                    "Class",
                    "Order",
                    "Family",
                    "Genus",
                    "Species (most specific)"
                ],
                intermediateRanks: [
                    "Superclass, Subclass",
                    "Superorder, Suborder",
                    "Superfamily, Subfamily",
                    "Tribe (between family and genus)",
                    "Subspecies, Variety, Form"
                ],
                example: {
                    organism: "Human",
                    Domain: "Eukarya",
                    Kingdom: "Animalia",
                    Phylum: "Chordata",
                    Class: "Mammalia",
                    Order: "Primates",
                    Family: "Hominidae",
                    Genus: "Homo",
                    Species: "sapiens"
                },
                applications: [
                    "Organizing biodiversity systematically",
                    "Predicting characteristics from classification",
                    "Understanding evolutionary relationships",
                    "Facilitating biological research",
                    "Conservation planning"
                ]
            },

            species_concepts: {
                title: "Defining Species: Multiple Concepts",
                concepts: [
                    "No single universal definition of species",
                    "Different concepts useful in different contexts",
                    "Biological species concept most widely used",
                    "Species boundaries can be fuzzy"
                ],
                theory: "The 'species problem' refers to the difficulty in defining what constitutes a species. Multiple species concepts exist because different criteria are important in different situations, and no single definition works for all organisms.",
                speciesConcepts: {
                    biological: {
                        name: "Biological Species Concept",
                        definition: "Groups of actually or potentially interbreeding populations that are reproductively isolated from other such groups",
                        proposedBy: "Ernst Mayr (1942)",
                        strengths: ["Focus on reproductive isolation", "Emphasizes gene flow", "Widely applicable to sexual organisms"],
                        limitations: ["Doesn't apply to asexual organisms", "Difficult to test with fossils", "Problems with ring species", "Geographic separation ambiguity"]
                    },
                    morphological: {
                        name: "Morphological Species Concept",
                        definition: "Species defined by structural features and physical appearance",
                        strengths: ["Applicable to fossils", "Works for asexual organisms", "Observable traits", "Practical for field identification"],
                        limitations: ["Subjective boundaries", "Sexual dimorphism causes confusion", "Cryptic species not distinguished", "Polymorphism within species"]
                    },
                    ecological: {
                        name: "Ecological Species Concept",
                        definition: "Species defined by ecological niche occupied",
                        strengths: ["Focuses on functional role", "Considers adaptation", "Useful for understanding diversity"],
                        limitations: ["Niches can overlap", "Niche may change over time", "Difficult to measure precisely"]
                    },
                    phylogenetic: {
                        name: "Phylogenetic Species Concept",
                        definition: "Smallest group sharing a common ancestor and forming one branch on tree of life",
                        strengths: ["Based on evolutionary history", "Applicable to all organisms", "Testable with genetic data"],
                        limitations: ["Can result in excessive splitting", "Requires phylogenetic analysis", "Where to draw boundaries unclear"]
                    },
                    genetic: {
                        name: "Genetic Species Concept",
                        definition: "Species defined by genetic similarity and distinctiveness",
                        strengths: ["Objective molecular data", "Applicable to all organisms", "Can identify cryptic species"],
                        limitations: ["How much difference defines species?", "Gene flow vs. genetic distance", "Expensive and technical"]
                    }
                },
                applications: [
                    "Species identification and cataloging",
                    "Conservation status determination",
                    "Understanding speciation processes",
                    "Legal and regulatory frameworks",
                    "Predicting organism behavior and ecology"
                ]
            },

            phylogenetic_methods: {
                title: "Methods for Determining Evolutionary Relationships",
                concepts: [
                    "Multiple data sources reveal phylogeny",
                    "Molecular data increasingly important",
                    "Computer algorithms construct trees",
                    "Different methods can yield different trees"
                ],
                theory: "Phylogenetic methods use various types of data (morphological, molecular, behavioral) and analytical techniques to infer evolutionary relationships and construct phylogenetic trees representing these relationships.",
                keyDefinitions: {
                    "Character": "Any observable feature used in phylogenetic analysis",
                    "Homology": "Similarity due to shared ancestry",
                    "Analogy": "Similarity due to convergent evolution, not shared ancestry",
                    "Parsimony": "Principle that simplest explanation (fewest evolutionary changes) is preferred",
                    "Bootstrap Value": "Statistical measure of confidence in a branch",
                    "Outgroup": "Related taxon outside group of interest, used to root tree"
                },
                dataTypes: [
                    "Morphological characters (anatomy, physiology)",
                    "DNA sequences (nuclear and mitochondrial)",
                    "Protein sequences",
                    "Chromosomal structure",
                    "Behavioral traits",
                    "Fossil evidence"
                ],
                methods: {
                    parsimony: {
                        name: "Maximum Parsimony",
                        principle: "Choose tree requiring fewest evolutionary changes",
                        advantages: "Simple concept, no evolutionary model needed",
                        limitations: "Can be misled by convergent evolution, long-branch attraction"
                    },
                    likelihood: {
                        name: "Maximum Likelihood",
                        principle: "Choose tree with highest probability given data and evolutionary model",
                        advantages: "Statistically rigorous, accounts for different rates of change",
                        limitations: "Computationally intensive, requires evolutionary model"
                    },
                    bayesian: {
                        name: "Bayesian Inference",
                        principle: "Calculate probability of tree given data and prior assumptions",
                        advantages: "Provides probability estimates, flexible modeling",
                        limitations: "Requires prior assumptions, computationally intensive"
                    },
                    distance: {
                        name: "Distance Methods (e.g., Neighbor-Joining)",
                        principle: "Calculate evolutionary distances between sequences, cluster similar ones",
                        advantages: "Fast, good for large datasets",
                        limitations: "Information loss from reducing sequences to distances"
                    }
                },
                applications: [
                    "Understanding evolution of traits",
                    "Dating evolutionary events",
                    "Identifying closest relatives",
                    "Tracking disease spread",
                    "Forensic analysis",
                    "Conservation prioritization"
                ]
            },

            molecular_taxonomy: {
                title: "Molecular Approaches to Taxonomy",
                concepts: [
                    "DNA and protein sequences provide taxonomic information",
                    "Molecular data can resolve difficult classifications",
                    "DNA barcoding enables rapid species identification",
                    "Molecular clocks estimate divergence times"
                ],
                theory: "Molecular taxonomy uses genetic and biochemical information to classify organisms and determine relationships. DNA sequences provide objective, quantifiable data that can reveal relationships not apparent from morphology alone.",
                keyDefinitions: {
                    "DNA Barcoding": "Using short DNA sequences for species identification",
                    "Molecular Clock": "Using mutation rates to estimate time of divergence",
                    "Phylogenomics": "Using whole genome data for phylogenetic analysis",
                    "Metagenomics": "Studying genetic material from environmental samples",
                    "Barcode Gap": "Difference between intra- and inter-species genetic variation"
                },
                molecularMarkers: {
                    mitochondrialDNA: {
                        name: "Mitochondrial DNA (mtDNA)",
                        advantages: "High copy number, maternal inheritance, fast evolution",
                        commonGenes: "COI (animals), matK/rbcL (plants)",
                        uses: "Species identification, population genetics"
                    },
                    nuclearDNA: {
                        name: "Nuclear DNA",
                        advantages: "Biparental inheritance, large number of genes",
                        commonGenes: "ITS, 18S rRNA, various protein-coding genes",
                        uses: "Deep phylogeny, species relationships"
                    },
                    ribosomalRNA: {
                        name: "Ribosomal RNA genes",
                        advantages: "Present in all organisms, conserved and variable regions",
                        commonGenes: "16S rRNA (bacteria), 18S rRNA (eukaryotes)",
                        uses: "Broad taxonomic comparisons, microbial diversity"
                    }
                },
                techniques: [
                    "DNA sequencing (Sanger, next-generation)",
                    "PCR amplification of target genes",
                    "DNA-DNA hybridization",
                    "Restriction fragment analysis",
                    "Genome sequencing and comparison"
                ],
                applications: [
                    "Species identification (barcoding)",
                    "Discovering cryptic species",
                    "Resolving taxonomic controversies",
                    "Microbial diversity studies",
                    "Forensics and food authentication",
                    "Conservation genetics"
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            classification_system: {
                'Taxonomy Basics': [
                    'Thinking classification is arbitrary (it reflects evolutionary relationships)',
                    'Believing higher taxa are "better" than lower ones (just different levels of organization)',
                    'Confusing classification with identification',
                    'Assuming all taxonomic groups are equally well-defined'
                ],
                'Hierarchical Ranks': [
                    'Thinking all members of a group are equally related',
                    'Believing ranks have absolute meanings (they\'re relative)',
                    'Confusing nested hierarchies with linear sequences',
                    'Assuming number of species is same at each rank'
                ]
            },
            phylogeny: {
                'Tree Interpretation': [
                    'Reading phylogenetic trees like ladders (they\'re branching patterns)',
                    'Thinking organisms at tips evolved from each other (they evolved from common ancestors)',
                    'Believing evolution proceeds toward a goal (it\'s not directional)',
                    'Confusing tree topology with time (branch lengths may or may not represent time)'
                ],
                'Evolutionary Relationships': [
                    'Thinking "primitive" means inferior (it means ancestral traits)',
                    'Believing humans are the "most evolved" (all living things are equally evolved)',
                    'Confusing similarity with relatedness (similarity can be from convergence)',
                    'Assuming closely related organisms look similar'
                ]
            },
            domains_kingdoms: {
                'Major Groups': [
                    'Thinking plants and animals are the main divisions of life (microorganisms dominate)',
                    'Believing bacteria and viruses are the same (viruses aren\'t even cells)',
                    'Confusing fungi with plants (fungi are more closely related to animals)',
                    'Thinking all single-celled organisms are bacteria'
                ],
                'Domain vs Kingdom': [
                    'Not understanding domains are above kingdoms',
                    'Thinking five-kingdom system is still current (three-domain system is modern)',
                    'Confusing Bacteria and Archaea (they\'re fundamentally different)',
                    'Believing all prokaryotes are bacteria'
                ]
            },
            binomial_nomenclature: {
                'Naming Rules': [
                    'Capitalizing species epithet (only genus is capitalized)',
                    'Not italicizing scientific names',
                    'Thinking common names are universal (they vary by language/region)',
                    'Using genus name alone to mean species',
                    'Believing scientific names never change'
                ],
                'Name Meaning': [
                    'Assuming scientific names are always descriptive',
                    'Thinking names indicate relationships to other organisms',
                    'Not understanding names may honor people or places',
                    'Believing pronunciation is standardized'
                ]
            },
            species_concepts: {
                'Species Definition': [
                    'Thinking there\'s one correct definition of species',
                    'Believing all members of a species can interbreed',
                    'Confusing inability to breed with unwillingness to breed',
                    'Thinking hybrids prove parents aren\'t different species',
                    'Assuming species boundaries are always clear'
                ],
                'Reproductive Isolation': [
                    'Believing geographic separation always leads to speciation',
                    'Thinking reproductive isolation is always absolute',
                    'Confusing species concepts with speciation mechanisms',
                    'Not understanding ring species challenge biological species concept'
                ]
            },
            phylogenetic_methods: {
                'Phylogenetic Analysis': [
                    'Thinking one tree is "correct" and others "wrong"',
                    'Believing molecular data is always better than morphology',
                    'Confusing similarity with homology',
                    'Not understanding different methods can yield different results',
                    'Thinking phylogenetic trees show actual ancestors (they show relationships)'
                ],
                'Character Analysis': [
                    'Weighing all characters equally',
                    'Not distinguishing homology from analogy',
                    'Believing more similar organisms are always more closely related',
                    'Confusing ancestral and derived character states'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use side-by-side diagrams to highlight differences',
                effectiveness: 'High for structural and hierarchical comparisons'
            },
            analogy: {
                method: 'Relate taxonomic concepts to familiar hierarchies (family tree, filing system)',
                effectiveness: 'High for abstract concepts'
            },
            step_by_step: {
                method:'Break down complex classification processes into sequential steps',
                effectiveness: 'High for understanding naming and classification procedures'
            },
            contrast_table: {
                method: 'Create comparison tables showing key differences between classification systems',
                effectiveness: 'High for distinguishing similar concepts'
            },
            tree_diagram: {
                method: 'Use branching diagrams to show relationships and hierarchies',
                effectiveness: 'High for phylogenetic and hierarchical concepts'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            hierarchical: {
                focus: 'Nested organization and levels',
                language: 'structural and organizational'
            },
            evolutionary: {
                focus: 'Historical development and relationships',
                language: 'temporal and adaptive'
            },
            comparative: {
                focus: 'Similarities and differences between groups',
                language: 'contrastive and analytical'
            },
            systematic: {
                focus: 'Rules, procedures, and methodology',
                language: 'procedural and technical'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential information only',
                examples: 'concrete and familiar organisms'
            },
            intermediate: {
                vocabulary: 'standard taxonomic terms',
                detail: 'main concepts with explanations',
                examples: 'mix of familiar and diverse organisms'
            },
            detailed: {
                vocabulary: 'full scientific terminology',
                detail: 'comprehensive with methodological details',
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
    handleTaxonomyProblem(config) {
        const { topic, parameters, subTopic, context } = config;

        try {
            // Parse the taxonomy query
            this.currentProblem = this.parseTaxonomyProblem(topic, parameters, subTopic, context);

            // Get content based on topic
            this.currentContent = this.getTaxonomyContent(this.currentProblem);

            // Generate content steps/sections
            this.contentSteps = this.generateTaxonomyContent(this.currentProblem, this.currentContent);

            // Generate diagram data if applicable
            this.generateTaxonomyDiagramData();

            // Generate workbook
            this.generateTaxonomyWorkbook();

            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                diagrams: this.diagramData
            };

        } catch (error) {
            throw new Error(`Failed to process taxonomy topic: ${error.message}`);
        }
    }

    parseTaxonomyProblem(topic, parameters = {}, subTopic = null, context = {}) {
        let topicType = null;

        // Match topic to handler
        for (const [type, config] of Object.entries(this.taxonomyTopics)) {
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
            throw new Error(`Unable to recognize taxonomy topic: ${topic}`);
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

    getTaxonomyContent(problem) {
        const handler = this.taxonomyTopics[problem.type]?.handler;
        if (!handler) {
            throw new Error(`No handler available for taxonomy topic: ${problem.type}`);
        }

        return handler(problem);
    }

    // TOPIC HANDLERS - Each returns structured taxonomic content

    handleClassificationSystem(problem) {
        const { subTopic, parameters } = problem;

        return {
            topic: "Biological Classification System",
            category: 'classification_system',
            summary: "The hierarchical system for organizing and categorizing all living organisms based on shared characteristics and evolutionary relationships.",
            
            history: {
                ancientClassification: {
                    period: "Ancient times to 1700s",
                    approach: "Organism grouping based on obvious features",
                    examples: ["Aristotle: animals with/without blood", "Plants grouped by size and form"],
                    limitations: "Arbitrary groupings, no evolutionary basis"
                },
                linnaeanSystem: {
                    period: "1735 - Carl Linnaeus",
                    contribution: "Systema Naturae - formal hierarchical classification",
                    innovations: [
                        "Binomial nomenclature for species",
                        "Hierarchical nested categories",
                        "Standardized naming conventions",
                        "Sexual system for plant classification"
                    ],
                    impact: "Foundation of modern taxonomy"
                },
                evolutionaryClassification: {
                    period: "1859 onwards - Darwin's influence",
                    approach: "Classification reflecting evolutionary relationships",
                    principle: "Groups should be monophyletic (common ancestor + all descendants)",
                    methods: "Cladistics, phylogenetics, molecular systematics"
                },
                modernClassification: {
                    period: "1970s to present",
                    innovations: [
                        "Three-domain system (Woese, 1990)",
                        "Molecular phylogenetics",
                        "DNA sequencing and genomics",
                        "PhyloCode (phylogenetic nomenclature)"
                    ],
                    characteristics: "Integration of multiple data types, computer-aided analysis"
                }
            },

            principles: {
                hierarchy: {
                    description: "Nested levels from broad to specific",
                    structure: "Each level (taxon) contained within level above",
                    ranks: ["Domain", "Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species"],
                    mnemonic: "Dear King Philip Came Over For Good Spaghetti"
                },
                homology: {
                    description: "Similarity due to common ancestry",
                    importance: "Basis for grouping organisms",
                    examples: ["Vertebrate limbs", "Plant flower parts", "DNA sequences"],
                    vsAnalogy: "Analogy is similarity from convergent evolution, not common ancestry"
                },
                monophyly: {
                    description: "Group contains ancestor and ALL descendants",
                    alsoKnown: "Clade, natural group",
                    importance: "Reflects true evolutionary relationships",
                    contrast: "Paraphyletic (excludes some descendants), Polyphyletic (multiple ancestors)"
                },
                parsimony: {
                    description: "Simplest explanation preferred (fewest evolutionary changes)",
                    application: "Choosing among multiple possible phylogenetic trees",
                    limitation: "May not always reflect true history"
                }
            },

            purposes: [
                "Organize immense biological diversity systematically",
                "Provide universal naming system for communication",
                "Reflect evolutionary relationships",
                "Predict characteristics of organisms",
                "Facilitate information retrieval and comparison",
                "Support conservation planning",
                "Enable study of biodiversity patterns"
            ],

            modernApproaches: {
                phenetic: {
                    name: "Phenetic (Numerical) Taxonomy",
                    basis: "Overall similarity using many characters",
                    method: "Statistical clustering based on character states",
                    advantages: "Objective, many characters used",
                    limitations: "Doesn't distinguish homology from analogy, may not reflect phylogeny"
                },
                cladistic: {
                    name: "Cladistic (Phylogenetic) Taxonomy",
                    basis: "Shared derived characters (synapomorphies)",
                    method: "Constructing phylogenetic trees showing relationships",
                    advantages: "Emphasizes evolutionary history, testable hypotheses",
                    limitations: "Requires determining character polarity, may conflict with tradition"
                },
                evolutionary: {
                    name: "Evolutionary Taxonomy",
                    basis: "Both branching pattern and amount of divergence",
                    method: "Combining cladistic relationships with degree of difference",
                    advantages: "Incorporates both phylogeny and phenetic divergence",
                    limitations: "Subjective decisions about divergence importance"
                },
                molecular: {
                    name: "Molecular Systematics",
                    basis: "DNA/protein sequence data",
                    method: "Comparing genetic sequences, constructing gene trees",
                    advantages: "Objective data, vast character source, applicable to all organisms",
                    limitations: "Gene trees may not equal species trees, technical expertise required"
                }
            },

            challenges: [
                "Rapid discovery of new species",
                "Revisions based on new data (especially molecular)",
                "Extinct organisms known only from fossils",
                "Horizontal gene transfer in microorganisms",
                "Hybridization and introgression",
                "Asexual and parthenogenetic species",
                "Ring species and continuous variation",
                "Cryptic species (morphologically identical but genetically distinct)"
            ],

            applications: [
                "Biodiversity assessment and conservation",
                "Understanding disease transmission and vectors",
                "Agricultural pest management",
                "Biotechnology and drug discovery",
                "Forensic identification",
                "Biogeography and invasion biology",
                "Ecosystem function and services"
            ]
        };
    }

    handlePhylogeny(problem) {
        return {
            topic: "Phylogeny and Evolutionary Relationships",
            category: 'phylogeny',
            summary: "The study of evolutionary history and relationships among organisms, typically represented as branching diagrams showing descent from common ancestors.",

            keyDefinitions: {
                "Phylogeny": "The evolutionary history and relationships of a species or group",
                "Phylogenetic Tree": "Branching diagram showing evolutionary relationships",
                "Cladogram": "Phylogenetic tree showing branching pattern only (not time or amount of change)",
                "Phylogram": "Phylogenetic tree where branch lengths represent evolutionary distance",
                "Chronogram": "Phylogenetic tree where branch lengths represent time",
                "Clade": "Monophyletic group - ancestor and all its descendants",
                "Node": "Point where lineages diverge; represents common ancestor",
                "Branch": "Line connecting nodes; represents lineage",
                "Root": "Base of tree; represents common ancestor of all taxa in tree",
                "Tip/Terminal": "End of branch; represents taxa being compared",
                "Sister Taxa": "Groups sharing an immediate common ancestor",
                "Outgroup": "Taxon outside group of interest, used to root tree"
            },

            treeComponents: {
                nodes: {
                    description: "Branching points representing common ancestors",
                    types: ["Internal nodes (ancestors)", "Terminal nodes (tips, taxa)"],
                    interpretation: "More recent common ancestor = more closely related"
                },
                branches: {
                    description: "Lines connecting nodes, representing evolutionary lineages",
                    information: "May show time, genetic distance, or just topology",
                    length: "Can represent time elapsed, mutations accumulated, or be arbitrary"
                },
                topology: {
                    description: "Branching pattern of relationships",
                    importance: "Shows which taxa are most closely related",
                    independence: "Topology independent of branch rotation"
                }
            },

            readingPhylogeneticTrees: {
                commonMistakes: [
                    "Reading across tips as if showing progression",
                    "Thinking proximity on diagram means close relationship",
                    "Assuming tips represent ancestors of other tips",
                    "Confusing branch length with relationship",
                    "Not recognizing nodes can be rotated without changing relationships"
                ],
                correctInterpretation: [
                    "Trace back to find most recent common ancestor",
                    "Count nodes between taxa to assess relatedness",
                    "Remember all tips are equally 'evolved'",
                    "Focus on branching pattern (topology), not visual proximity",
                    "Understand internal nodes represent ancestors, not actual organisms"
                ],
                questions: [
                    "Which taxa are most closely related? (share most recent common ancestor)",
                    "Which group is the outgroup? (branches off first)",
                    "Is this group monophyletic? (includes ancestor and all descendants)",
                    "When did these lineages diverge? (if time-calibrated)"
                ]
            },

            groupTypes: {
                monophyletic: {
                    definition: "Group containing ancestor and ALL descendants",
                    alsoKnown: "Clade, holophyletic, natural group",
                    example: "Mammals (includes all descendants of first mammal)",
                    validity: "Valid phylogenetic group",
                    visual: "Can be 'cut off' tree with single cut"
                },
                paraphyletic: {
                    definition: "Group containing ancestor and SOME but not all descendants",
                    example: "Reptiles (excludes birds, which are descendants of reptile ancestor)",
                    validity: "Not valid under cladistic classification",
                    visual: "Requires multiple cuts to remove",
                    note: "Common in traditional classification"
                },
                polyphyletic: {
                    definition: "Group whose members have different ancestors",
                    example: "Warm-blooded animals (birds and mammals evolved warm-bloodedness independently)",
                    validity: "Not valid phylogenetic group",
                    problem: "Based on convergent evolution, not common ancestry",
                    visual: "Cannot be cut off tree as single group"
                }
            },

            characterTypes: {
                homology: {
                    definition: "Similarity due to shared ancestry",
                    example: "Forelimbs of humans, bats, whales (all from tetrapod ancestor)",
                    importance: "Basis for determining relationships",
                    types: ["Orthology (same gene in different species)", "Paralogy (gene duplication within species)"]
                },
                analogy: {
                    definition: "Similarity due to convergent evolution, not shared ancestry",
                    alsoKnown: "Homoplasy",
                    example: "Wings of birds and insects (evolved independently)",
                    problem: "Can mislead phylogenetic analysis",
                    types: ["Convergence", "Reversal", "Parallelism"]
                },
                synapomorphy: {
                    definition: "Shared derived character (evolved in common ancestor, present in descendants)",
                    importance: "Defines clades",
                    example: "Hair in mammals, feathers in birds",
                    usefulness: "Best for determining relationships"
                },
                symplesiomorphy: {
                    definition: "Shared ancestral character",
                    example: "Vertebrae in mammals (inherited from earlier vertebrate ancestor)",
                    limitation: "Present in many groups, doesn't define specific clade",
                    usefulness: "Not useful for determining relationships within group"
                },
                autapomorphy: {
                    definition: "Unique derived character (present in only one group)",
                    example: "Elephant trunk",
                    usefulness: "Distinguishes group but doesn't show relationships"
                }
            },

            treeTypes: {
                rooted: {
                    description: "Has defined direction of evolution from common ancestor",
                    shows: "Ancestor-descendant relationships",
                    requirement: "Needs outgroup or other information to root",
                    interpretation: "Clear directionality of evolution"
                },
                unrooted: {
                    description: "Shows relationships but not evolutionary direction",
                    shows: "Which taxa are most closely related",
                    limitation: "Doesn't indicate common ancestor location",
                    use: "When outgroup unavailable or direction uncertain"
                },
                bifurcating: {
                    description: "Each node splits into exactly two branches",
                    assumption: "Lineages divide into two descendant lineages",
                    note: "Most common type"
                },
                polytomy: {
                    description: "Node splits into more than two branches",
                    types: ["Hard polytomy (simultaneous divergence)", "Soft polytomy (uncertainty in resolution)"],
                    interpretation: "Often indicates insufficient data to resolve"
                }
            },
            applications: [
                "Understanding evolutionary processes and patterns",
                "Classifying organisms based on relationships",
                "Predicting characteristics of poorly known species",
                "Dating evolutionary events (with molecular clocks)",
                "Tracing origin and spread of diseases",
                "Conservation: preserving evolutionary diversity",
                "Biogeography: understanding distribution patterns",
                "Comparative biology: studying trait evolution",
                "Drug design: understanding target evolution"
            ],

            molecularPhylogeny: {
                advantages: [
                    "Vast number of characters (base pairs, amino acids)",
                    "Applicable to all organisms",
                    "Objective, quantifiable data",
                    "Can analyze extinct organisms (ancient DNA)",
                    "Multiple independent gene trees possible"
                ],
                challenges: [
                    "Gene trees may not equal species trees",
                    "Horizontal gene transfer (especially in bacteria)",
                    "Incomplete lineage sorting",
                    "Different genes may suggest different relationships",
                    "Rate variation across lineages",
                    "Saturation (multiple mutations at same site)"
                ],
                techniques: [
                    "DNA sequencing and alignment",
                    "Phylogenetic tree construction algorithms",
                    "Molecular clock analysis",
                    "Whole genome comparisons",
                    "Single nucleotide polymorphism (SNP) analysis"
                ]
            }
        };
    }

    handleDomainsKingdoms(problem) {
        return {
            topic: "Domains and Kingdoms of Life",
            category: 'domains_kingdoms',
            summary: "The highest-level classification of all living organisms into three domains (Bacteria, Archaea, Eukarya) and further subdivision into kingdoms.",

            threeDomainSystem: {
                history: "Proposed by Carl Woese in 1990 based on ribosomal RNA sequences",
                basis: "Fundamental differences in cellular biochemistry and genetics",
                revolutionaryInsight: "Archaea are as different from Bacteria as both are from Eukaryotes",
                replaces: "Five-kingdom system (Monera, Protista, Fungi, Plantae, Animalia)"
            },

            domains: {
                Bacteria: {
                    type: "Prokaryotic",
                    cellStructure: {
                        nucleus: "No membrane-bound nucleus",
                        organelles: "No membrane-bound organelles",
                        cellWall: "Peptidoglycan cell wall",
                        membrane: "Ester-linked lipids",
                        ribosomes: "70S ribosomes",
                        chromosomes: "Single circular chromosome in nucleoid"
                    },
                    characteristics: [
                        "Most abundant organisms on Earth",
                        "Diverse metabolic capabilities",
                        "Found in virtually every environment",
                        "Reproduce by binary fission",
                        "Can form endospores (some species)",
                        "Genetic exchange via transformation, conjugation, transduction"
                    ],
                    examples: {
                        beneficial: ["E. coli (gut bacteria)", "Rhizobium (nitrogen fixation)", "Lactobacillus (yogurt)"],
                        pathogenic: ["Streptococcus (strep throat)", "Mycobacterium tuberculosis", "Salmonella"],
                        environmental: ["Cyanobacteria (photosynthetic)", "Decomposers", "Extremophiles"]
                    },
                    diversity: "Over 10,000 described species, millions estimated",
                    importance: [
                        "Nutrient cycling (nitrogen, carbon, sulfur)",
                        "Decomposition and recycling",
                        "Food production (cheese, yogurt, fermentation)",
                        "Biotechnology (insulin production, enzymes)",
                        "Normal human microbiome",
                        "Some cause diseases"
                    ]
                },
                Archaea: {
                    type: "Prokaryotic",
                    cellStructure: {
                        nucleus: "No membrane-bound nucleus",
                        organelles: "No membrane-bound organelles",
                        cellWall: "No peptidoglycan (pseudopeptidoglycan or other polymers)",
                        membrane: "Ether-linked lipids (unique)",
                        ribosomes: "70S but more similar to eukaryotic",
                        chromosomes: "Single circular chromosome"
                    },
                    characteristics: [
                        "Often live in extreme environments",
                        "Unique membrane chemistry",
                        "Gene expression machinery similar to eukaryotes",
                        "Many are chemolithoautotrophs",
                        "No known archaeal pathogens",
                        "Methane production by some species"
                    ],
                    types: {
                        methanogens: {
                            description: "Produce methane as metabolic byproduct",
                            habitat: "Anaerobic environments (swamps, guts, deep sea)",
                            example: "Methanobrevibacter (in human gut)"
                        },
                        halophiles: {
                            description: "Thrive in high-salt environments",
                            habitat: "Salt lakes, salt mines",
                            example: "Halobacterium salinarum"
                        },
                        thermophiles: {
                            description: "Thrive at high temperatures",
                            habitat: "Hot springs, hydrothermal vents",
                            example: "Thermococcus, Pyrococcus"
                        },
                        acidophiles: {
                            description: "Thrive in acidic conditions",
                            habitat: "Acidic hot springs, acid mine drainage",
                            example: "Sulfolobus"
                        }
                    },
                    examples: ["Methanobacterium", "Halobacterium", "Sulfolobus", "Pyrococcus"],
                    discovery: "Many archaea only recently discovered",
                    importance: [
                        "Methane production (climate impact)",
                        "Biogeochemical cycling",
                        "Biotechnology (heat-stable enzymes like Taq polymerase)",
                        "Understanding early evolution of life",
                        "Potential for novel biochemicals"
                    ]
                },
                Eukarya: {
                    type: "Eukaryotic",
                    cellStructure: {
                        nucleus: "Membrane-bound nucleus containing chromosomes",
                        organelles: "Membrane-bound organelles (mitochondria, ER, Golgi, etc.)",
                        cellWall: "Present in some (plants, fungi) - cellulose or chitin",
                        membrane: "Ester-linked lipids with cholesterol",
                        ribosomes: "80S ribosomes",
                        chromosomes: "Multiple linear chromosomes with histones"
                    },
                    characteristics: [
                        "Complex cells with compartmentalization",
                        "Sexual reproduction common",
                        "Multicellular body plans evolved multiple times",
                        "Wide range of sizes (microscopic to massive)",
                        "Diverse modes of nutrition"
                    ],
                    kingdoms: {
                        Protista: {
                            description: "Diverse group of mostly unicellular eukaryotes",
                            note: "Paraphyletic group (not natural clade)",
                            types: ["Protozoa (animal-like)", "Algae (plant-like)", "Slime molds (fungus-like)"],
                            examples: ["Amoeba", "Paramecium", "Euglena", "Diatoms", "Kelp"],
                            characteristics: ["Mostly unicellular", "Some colonial or multicellular", "Diverse nutrition modes"],
                            importance: "Base of aquatic food webs, oxygen production, some cause diseases"
                        },
                        Fungi: {
                            description: "Heterotrophic decomposers with chitin cell walls",
                            characteristics: [
                                "Absorptive nutrition (external digestion)",
                                "Chitin cell walls",
                                "Mostly multicellular (except yeasts)",
                                "Hyphae form mycelium",
                                "Reproduce via spores"
                            ],
                            examples: ["Mushrooms", "Yeasts", "Molds", "Lichens (symbiotic)"],
                            importance: [
                                "Decomposition and nutrient recycling",
                                "Food (mushrooms, cheese, bread)",
                                "Medicine (penicillin, statins)",
                                "Some cause diseases (athlete's foot, ringworm)"
                            ]
                        },
                        Plantae: {
                            description: "Multicellular photosynthetic organisms with cellulose cell walls",
                            characteristics: [
                                "Photosynthetic (with some exceptions)",
                                "Cellulose cell walls",
                                "Multicellular with tissue organization",
                                "Alternation of generations life cycle",
                                "Non-motile (mostly)"
                            ],
                            groups: ["Bryophytes (mosses)", "Ferns", "Gymnosperms (conifers)", "Angiosperms (flowering plants)"],
                            examples: ["Mosses", "Ferns", "Pine trees", "Roses", "Grasses", "Wheat"],
                            importance: [
                                "Oxygen production",
                                "Carbon fixation",
                                "Food source (base of terrestrial food webs)",
                                "Habitat and shelter",
                                "Medicine, materials, fuel"
                            ]
                        },
                        Animalia: {
                            description: "Multicellular heterotrophic organisms that ingest food",
                            characteristics: [
                                "Heterotrophic (ingest food)",
                                "No cell walls",
                                "Multicellular with specialized tissues",
                                "Nervous system (most)",
                                "Capable of movement (most)",
                                "Embryonic development with blastula stage"
                            ],
                            groups: ["Invertebrates (95% of species)", "Vertebrates (fish, amphibians, reptiles, birds, mammals)"],
                            examples: ["Sponges", "Jellyfish", "Insects", "Fish", "Birds", "Mammals"],
                            importance: [
                                "Ecosystem function (predation, pollination, seed dispersal)",
                                "Food source",
                                "Companionship",
                                "Scientific models",
                                "Indicators of ecosystem health"
                            ]
                        }
                    },
                    diversity: "Most visible and studied organisms",
                    importance: "Includes humans and most organisms we interact with daily"
                }
            },

            comparisonTable: {
                headers: ["Feature", "Bacteria", "Archaea", "Eukarya"],
                data: [
                    ["Cell Type", "Prokaryotic", "Prokaryotic", "Eukaryotic"],
                    ["Nucleus", "No", "No", "Yes"],
                    ["Organelles", "No", "No", "Yes"],
                    ["Cell Wall", "Peptidoglycan", "No peptidoglycan", "Cellulose/chitin or absent"],
                    ["Membrane Lipids", "Ester-linked", "Ether-linked", "Ester-linked"],
                    ["Ribosomes", "70S", "70S", "80S"],
                    ["Chromosomes", "Circular", "Circular", "Linear with histones"],
                    ["Gene Structure", "No introns", "Some introns", "Introns present"],
                    ["Size", "1-10 μm", "1-10 μm", "10-100 μm"],
                    ["Examples", "E. coli", "Methanogens", "Animals, plants, fungi"]
                ]
            },

            evolutionaryRelationships: {
                commonAncestor: "All life shares a common ancestor (LUCA - Last Universal Common Ancestor)",
                archaeaEukaryaConnection: "Eukaryotes likely evolved from archaeal lineage",
                endosymbioticTheory: "Mitochondria and chloroplasts originated from bacterial endosymbionts",
                evidence: [
                    "rRNA sequence comparisons",
                    "Protein structure similarities",
                    "Membrane lipid chemistry",
                    "DNA replication machinery"
                ]
            },

            applications: [
                "Understanding fundamental biology of all life",
                "Medical microbiology and disease treatment",
                "Biotechnology and industrial applications",
                "Environmental microbiology and bioremediation",
                "Astrobiology: searching for life on other planets",
                "Evolution studies",
                "Antibiotic development"
            ]
        };
    }

    handleBinomialNomenclature(problem) {
        return {
            topic: "Binomial Nomenclature: Scientific Naming System",
            category: 'binomial_nomenclature',
            summary: "The formal two-part naming system for species, developed by Carolus Linnaeus, providing universal scientific names for all organisms.",

            history: {
                developer: "Carolus Linnaeus (Carl von Linné)",
                publication: "Species Plantarum (1753) for plants, Systema Naturae (10th ed., 1758) for animals",
                innovation: "Standardized two-part names replacing long descriptive phrases",
                impact: "Universal system still used today worldwide"
            },

            structure: {
                format: "Genus species",
                example: "Homo sapiens",
                components: {
                    genus: {
                        description: "First part - group of closely related species",
                        capitalization: "Always capitalized",
                        example: "Homo",
                        note: "Can be abbreviated after first use (H. sapiens)"
                    },
                    specificEpithet: {
                        description: "Second part - identifies species within genus",
                        capitalization: "Always lowercase",
                        example: "sapiens",
                        note: "Never used alone; must be with genus",
                        alsoKnown: "Specific epithet, species epithet"
                    }
                },
                formatting: "Italicized or underlined (if handwritten)",
                pronunciation: "Latin pronunciation preferred but variable"
            },

            namingRules: {
                internationalCodes: [
                    "ICN - International Code of Nomenclature for algae, fungi, and plants",
                    "ICZN - International Code of Zoological Nomenclature",
                    "ICNP - International Code of Nomenclature of Prokaryotes (bacteria, archaea)"
                ],
                keyPrinciples: {
                    priority: {
                        rule: "First validly published name has precedence",
                        startingDates: "1753 (plants), 1758 (animals), 1980 (bacteria)",
                        exception: "Conserved names can override priority if widely used"
                    },
                    latinization: {
                        rule: "Names must be Latin or Latinized",
                        sources: ["Latin words", "Greek words (Latinized)", "Personal names (Latinized)", "Place names", "Other languages (Latinized)"],
                        examples: ["latin: Canis (dog)", "Greek: Archaeopteryx (ancient wing)", "Person: Linnaea (after Linnaeus)", "Place: japonicus (from Japan)"]
                    },
                    uniqueness: {
                        rule: "Each species name must be unique within its kingdom",
                        note: "Same specific epithet can be used in different genera",
                        example: "Pieris rapae (butterfly) and Brassica rapae (turnip) - both use 'rapae'"
                    },
                    typeSpecimen: {
                        rule: "Species description must be based on type specimen",
                        holotype: "Single specimen designated as name-bearing type",
                        location: "Deposited in recognized collection (museum, herbarium)",
                        purpose: "Reference for future identifications and comparisons"
                    }
                },
                formation: {
                    adjective: "Agreeing in gender with genus (latinized adjective)",
                    noun: "In genitive case or apposition",
                    commemorative: "Named after person (often with -i or -ii ending)",
                    geographic: "Named after place",
                    descriptive: "Describing characteristic of organism"
                }
            },

            additionalNaming: {
                subspecies: {
                    format: "Genus species subspecies",
                    example: "Panthera leo persica (Asiatic lion)",
                    abbreviation: "subsp. orssp.",
                    use: "Geographic or morphological variants below species level"
                },
                variety: {
                    format: "Genus species var. variety",
                    example: "Brassica oleracea var. italica (broccoli)",
                    abbreviation: "var.",
                    use: "Mainly in botany for distinct forms"
                },
                form: {
                    format: "Genus species f. form",
                    abbreviation: "f.",
                    use: "Minor variants (e.g., color forms)"
                },
                cultivar: {
                    format: "Genus species 'Cultivar Name'",
                    example: "Rosa 'Peace' (Peace rose)",
                    use: "Cultivated varieties in horticulture",
                    notation: "Single quotes, not italicized, capitalized"
                },
                hybrid: {
                    format: "Genus × species (or Genus1 × Genus2)",
                    example: "× Cupressocyparis leylandii (Leyland cypress)",
                    symbol: "× (multiplication sign)",
                    use: "Hybrids between species or genera"
                }
            },

            authorCitation: {
                purpose: "Credit scientist who first described species",
                format: "Genus species Author, Year",
                example: "Homo sapiens Linnaeus, 1758",
                abbreviations: "L. (Linnaeus), DC. (de Candolle), etc.",
                parentheses: "Used when species moved to different genus: (Original Author) New Author",
                exampleWithChange: "Pinus strobus (L.) was originally named by Linnaeus but genus name changed"
            },

            nameChanges: {
                synonyms: {
                    definition: "Different names for the same organism",
                    types: {
                        junior: "Later published name (not valid)",
                        senior: "Earlier published name (valid)"
                    },
                    causes: ["Same species described multiple times", "Species merged", "Nomenclatural changes"],
                    notation: "= indicates synonym"
                },
                reclassification: {
                    reasons: ["New molecular data", "Re-examination of specimens", "Discovery of priorities", "Taxonomic revisions"],
                    example: "African elephant: Loxodonta africana split into L. africana and L. cyclotis",
                    impact: "Names in literature may become outdated"
                },
                conservation: {
                    definition: "Officially preserving widely-used names despite priority violations",
                    reason: "Stability in nomenclature",
                    example: "Tyrannosaurus rex conserved over earlier names",
                    process: "International Commission ruling"
                }
            },

            commonNames: {
                problems: [
                    "Vary by language and region",
                    "Same common name for different species",
                    "Multiple common names for same species",
                    "Some organisms have no common name",
                    "Can be misleading (e.g., sea cucumber is not a vegetable)"
                ],
                advantages: [
                    "Easier to remember and pronounce",
                    "Familiar to general public",
                    "Used in education and outreach"
                ],
                scientificNamesAdvantages: [
                    "Universal - same worldwide",
                    "Unique - one name per species",
                    "Standardized - follows rules",
                    "Informative - shows relationships",
                    "Stable - changes follow formal process"
                ]
            },

            examples: {
                descriptive: [
                    "Cervus elaphus (elk) - elaphus = deer",
                    "Acer rubrum (red maple) - rubrum = red",
                    "Ursus arctos (brown bear) - arctos = bear"
                ],
                geographic: [
                    "Castor canadensis (American beaver)",
                    "Sequoia sempervirens (California redwood)",
                    "Gorilla gorilla (African gorilla)"
                ],
                commemorative: [
                    "Escherichia coli - honors Theodor Escherich",
                    "Linnaea borealis - honors Linnaeus",
                    "Rafflesia arnoldii - honors Sir Stamford Raffles and Joseph Arnold"
                ],
                characteristic: [
                    "Tyrannosaurus rex - tyrant lizard king",
                    "Gigantopithecus blacki - giant ape",
                    "Brachiosaurus - arm lizard (long forelimbs)"
                ]
            },

            pronunciation: {
                general: "Latin pronunciation, but varies by region",
                emphasis: "Typically on second-to-last syllable if it's long, otherwise third-to-last",
                vowels: "Classical Latin pronunciation preferred",
                acceptance: "Variation is common and accepted",
                note: "Primary concern is written form, not pronunciation"
            },

            applications: [
                "Universal scientific communication",
                "Medical prescriptions and pharmacy",
                "Legal documents (endangered species, regulations)",
                "International trade (CITES)",
                "Database and collection management",
                "Literature and publication",
                "Education and public understanding"
            ],

            modernDevelopments: {
                databases: "Online taxonomic databases (ITIS, Catalogue of Life, GBIF)",
                phyloCode: "Alternative system based purely on phylogeny (not widely adopted)",
                barcoding: "DNA barcoding supplements traditional taxonomy",
                registration: "Required registration of new names (ZooBank, MycoBank, etc.)",
                openAccess: "Free access to taxonomic literature increasing"
            }
        };
    }

    handleTaxonomicRanks(problem) {
        return {
            topic: "Taxonomic Ranks: Hierarchical Classification Levels",
            category: 'taxonomic_ranks',
            summary: "The hierarchical system of nested categories used to classify organisms from the most general (Domain) to the most specific (Species).",

            hierarchy: {
                majorRanks: [
                    {
                        rank: "Domain",
                        level: 1,
                        description: "Highest rank; broadest grouping",
                        count: "3 (Bacteria, Archaea, Eukarya)",
                        basis: "Fundamental cell type and biochemistry"
                    },
                    {
                        rank: "Kingdom",
                        level: 2,
                        description: "Major subdivision of domain",
                        count: "6-7 commonly recognized (varies by system)",
                        basis: "Cell type, organization, nutrition mode",
                        suffix: "None specific"
                    },
                    {
                        rank: "Phylum (animals) / Division (plants)",
                        level: 3,
                        description: "Major body plan or structural organization",
                        examples: "Chordata, Arthropoda, Angiospermophyta",
                        basis: "Major anatomical features",
                        suffix: "-phyta (plants), variable (animals)"
                    },
                    {
                        rank: "Class",
                        level: 4,
                        description: "Subdivision of phylum",
                        examples: "Mammalia, Insecta, Magnoliopsida",
                        basis: "Shared major characteristics",
                        suffix: "-opsida (plants), variable (animals)"
                    },
                    {
                        rank: "Order",
                        level: 5,
                        description: "Subdivision of class",
                        examples: "Primates, Carnivora, Rosales",
                        basis: "Shared anatomical features",
                        suffix: "-ales (plants), variable (animals)"
                    },
                    {
                        rank: "Family",
                        level: 6,
                        description: "Group of related genera",
                        examples: "Hominidae, Felidae, Rosaceae",
                        basis: "Closely related genera",
                        suffix: "-idae (animals), -aceae (plants)"
                    },
                    {
                        rank: "Genus",
                        level: 7,
                        description: "Group of closely related species",
                        examples: "Homo, Panthera, Rosa",
                        basis: "Very similar species",
                        suffix: "None"
                    },
                    {
                        rank: "Species",
                        level: 8,
                        description: "Fundamental unit; interbreeding populations",
                        examples: "Homo sapiens, Panthera leo, Rosa rubiginosa",
                        basis: "Reproductive isolation (biological concept)",
                        suffix: "None"
                    }
                ],
                
                intermediateRanks: [
                    "Superclass, Subclass",
                    "Superorder, Suborder, Infraorder",
                    "Superfamily, Subfamily, Tribe, Subtribe",
                    "Subgenus",
                    "Subspecies, Variety, Form"
                ]
            },

            mnemonic: {
                traditional: "King Philip Came Over For Good Spaghetti",
                alternative: "Dear King Philip Came Over For Good Soup (includes Domain)",
                breakdown: [
                    "Domain - Dear",
                    "Kingdom - King",
                    "Phylum - Philip",
                    "Class - Came",
                    "Order - Over",
                    "Family - For",
                    "Genus - Good",
                    "Species - Spaghetti/Soup"
                ]
            },

            detailedExamples: {
                human: {
                    organism: "Human",
                    Domain: "Eukarya",
                    Kingdom: "Animalia",
                    Phylum: "Chordata",
                    Subphylum: "Vertebrata",
                    Class: "Mammalia",
                    Order: "Primates",
                    Family: "Hominidae",
                    Genus: "Homo",
                    Species: "sapiens",
                    fullName: "Homo sapiens"
                },
                domesticDog: {
                    organism: "Domestic Dog",
                    Domain: "Eukarya",
                    Kingdom: "Animalia",
                    Phylum: "Chordata",
                    Subphylum: "Vertebrata",
                    Class: "Mammalia",
                    Order: "Carnivora",
                    Family: "Canidae",
                    Genus: "Canis",
                    Species: "lupus",
                    Subspecies: "familiaris",
                    fullName: "Canis lupus familiaris"
                },
                honeyBee: {
                    organism: "Western Honey Bee",
                    Domain: "Eukarya",
                    Kingdom: "Animalia",
                    Phylum: "Arthropoda",
                    Class: "Insecta",
                    Order: "Hymenoptera",
                    Family: "Apidae",
                    Genus: "Apis",
                    Species: "mellifera",
                    fullName: "Apis mellifera"
                },
                redMaple: {
                    organism: "Red Maple",
                    Domain: "Eukarya",
                    Kingdom: "Plantae",
                    Division: "Magnoliophyta (flowering plants)",
                    Class: "Magnoliopsida (dicots)",
                    Order: "Sapindales",
                    Family: "Sapindaceae",
                    Genus: "Acer",
                    Species: "rubrum",
                    fullName: "Acer rubrum"
                },
                eColi: {
                    organism: "E. coli bacterium",
                    Domain: "Bacteria",
                    Phylum: "Proteobacteria",
                    Class: "Gammaproteobacteria",
                    Order: "Enterobacterales",
                    Family: "Enterobacteriaceae",
                    Genus: "Escherichia",
                    Species: "coli",
                    fullName: "Escherichia coli"
                }
            },

            suffixes: {
                plants: {
                    division: "-phyta (e.g., Magnoliophyta)",
                    class: "-opsida (e.g., Magnoliopsida)",
                    order: "-ales (e.g., Rosales)",
                    family: "-aceae (e.g., Rosaceae)",
                    exceptions: "Eight families allowed to keep traditional names (e.g., Compositae = Asteraceae)"
                },
                animals: {
                    superfamily: "-oidea",
                    family: "-idae (e.g., Hominidae)",
                    subfamily: "-inae",
                    tribe: "-ini",
                    subtribe: "-ina"
                },
                bacteria: {
                    class: "-ia",
                    order: "-ales",
                    family: "-aceae",
                    note: "Rules similar to plants"
                }
            },

            principles: {
                inclusiveness: {
                    description: "Each rank includes all ranks below it",
                    example: "Family includes all genera, species, etc. within it",
                    visualization: "Nested boxes, each containing smaller boxes"
                },
                exclusiveness: {
                    description: "Organisms belong to only one taxon at each rank",
                    example: "A species belongs to only one genus, one family, etc.",
                    exception: "Uncertain classifications may have alternatives"
                },
                hierarchy: {
                    description: "Ranks have fixed order from general to specific",
                    flexibility: "Intermediate ranks can be added for precision",
                    invariant: "Major ranks always in same order"
                }
            },

            numberOfTaxa: {
                species: "~1.5-2 million described, 8-10 million estimated total",
                genera: "~300,000-500,000",
                families: "~10,000-20,000",
                orders: "~1,000-2,000",
                classes: "~200-500",
                phyla: "~35-40 (animals), ~12-14 (plants)",
                kingdoms: "6-7 (commonly recognized)",
                domains: "3",
                note: "Numbers approximate and vary by taxonomic authority"
            },

            purposes: {
                organization: "Systematically organize vast biodiversity",
                communication: "Provide common reference system for scientists worldwide",
                prediction: "Predict characteristics based on classification",
                information: "Organize biological knowledge hierarchically",
                evolution: "Reflect evolutionary relationships",
                identification: "Aid in identifying unknown organisms"
            },

            limitations: {
                arbitrary: "Boundaries between ranks somewhat arbitrary",
                variation: "Different groups may have different rank assignments",
                inconsistency: "No absolute measure of what constitutes each rank",
                revision: "Classifications change with new information",
                debate: "Taxonomists may disagree on appropriate rank",
                naturalness: "Only species and clades have clear biological meaning"
            },

            modernTrends: {
                phylogenetic: "Emphasis on monophyletic groups (clades) over ranks",
                molecular: "DNA data revealing need for reclassifications",
                rankFree: "Some advocate for rank-free classification (phylogenetic nomenclature)",
                databases: "Online databases track changes and synonyms",
                integration: "Combining morphological, molecular, and ecological data"
            },

            applications: [
                "Organizing museum and herbarium collections",
                "Structuring biological databases",
                "Teaching biological diversity",
                "Legal frameworks (endangered species lists)",
                "Communication among researchers",
                "Understanding biodiversity patterns",
                "Conservation planning"
            ]
        };
    }

    handleSpeciesConcepts(problem) {
        return {
            topic: "Species Concepts: Defining the Fundamental Unit",
            category: 'species_concepts',
            summary: "Various approaches to defining what constitutes a species, the fundamental unit of biological classification. No single definition works for all organisms and situations.",

            speciesProblem: {
                description: "The difficulty in defining species universally",
                reasons: [
                    "Different criteria important for different organisms",
                    "Species boundaries can be fuzzy",
                    "Organisms reproduce in different ways",
                    "Fossil species pose special challenges",
                    "Microorganisms have different biology than macroorganisms",
                    "Asexual organisms don't interbreed"
                ],
                consequence: "Multiple species concepts exist, each useful in different contexts"
            },

            majorConcepts: {
                biological: {
                    name: "Biological Species Concept (BSC)",
                    definition: "Species are groups of actually or potentially interbreeding natural populations that are reproductively isolated from other such groups",
                    developer: "Ernst Mayr (1942)",
                    keyIdea: "Reproductive isolation is the defining criterion",
                    strengths: [
                        "Emphasizes gene flow and genetic cohesion",
                        "Widely applicable to sexually reproducing organisms",
                        "Testable (in principle) through breeding experiments",
                        "Focuses on process that maintains species integrity"
                    ],
                    weaknesses: [
                        "Cannot be applied to asexual or parthenogenetic organisms",
                        "Difficult or impossible to test with fossils",
                        "Geographic isolation creates ambiguity (are they potentially interbreeding?)",
                        "Ring species pose problems",
                        "Many closely related species CAN interbreed but don't in nature",
                        "Microorganisms engage in horizontal gene transfer"
                    ],
                    examples: [
                        "Lions (Panthera leo) and tigers (P. tigris) can produce offspring (ligers) but are different species because they don't interbreed in nature",
                        "Eastern and Western meadowlarks look similar but are different species (reproductive isolation)",
                        "Domestic dogs are all one species (Canis lupus familiaris) despite huge variation because they can interbreed"
                    ],
                    bestFor: "Sexually reproducing animals and plants"
                },
                
                morphological: {
                    name: "Morphological Species Concept (MSC)",
                    definition: "Species are groups of individuals that share morphological (structural) characteristics and are distinguishable from other such groups",
                    keyIdea: "Observable physical features define species",
                    strengths: [
                        "Applicable to all organisms, including asexual, extinct, and fossils",
                        "Practical for field identification",
                        "Can be applied without breeding experiments",
                        "Based on observable, measurable traits",
                        "Most traditional classification based on this"
                    ],
                    weaknesses: [
                        "Subjective - how much difference = different species?",
                        "Sexual dimorphism can mislead (males and females look different)",
                        "Polymorphism within species can mislead",
                        "Cryptic species (different genetically but look identical) missed",
                        "Convergent evolution can mislead (unrelated species look similar)",
                        "Age differences (juvenile vs. adult) can confuse"
                    ],
                    examples: [
                        "Most fossil species defined by morphology (only option)",
                        "Plant classification traditionally based on flower structure",
                        "Cryptic species of mosquitoes carrying different diseases look identical"
                    ],
                    bestFor: "Fossils, preliminary field identification, organisms where other methods not feasible"
                },

                ecological: {
                    name: "Ecological Species Concept (ESC)",
                    definition: "Species are groups of organisms that occupy a distinct ecological niche",
                    keyIdea: "Ecological role and adaptation define species",
                    strengths: [
                        "Emphasizes ecological function and adaptation",
                        "Explains how species can coexist (different niches)",
                        "Applicable to all organisms",
                        "Links classification to ecology"
                    ],
                    weaknesses: [
                        "Ecological niches can overlap",
                        "Niches may change over time or in different locations",
                        "Difficult to measure niches precisely",
                        "Young species may have identical niches",
                        "Not always clear where to draw boundaries"
                    ],
                    examples: [
                        "Different warbler species in same forest occupy different niches (different parts of trees)",
                        "Sibling species of insects feeding on different host plants"
                    ],
                    bestFor: "Ecological studies, understanding species coexistence"
                },

                phylogenetic: {
                    name: "Phylogenetic Species Concept (PSC)",
                    definition: "Species are the smallest diagnosable cluster of organisms within which there is a parental pattern of ancestry and descent",
                    alternative: "Species is an irreducible group whose members are descended from a common ancestor",
                    keyIdea: "Shared evolutionary history defines species",
                    strengths: [
                        "Based on evolutionary relationships",
                        "Applicable to all organisms (sexual, asexual, extinct)",
                        "Testable with molecular and morphological data",
                        "Emphasizes monophyly",
                        "Can identify cryptic species"
                    ],
                    weaknesses: [
                        "May result in excessive splitting (too many species)",
                        "Requires phylogenetic analysis (time and resources)",
                        "Unclear exactly where to draw boundaries on phylogenetic tree",
                        "Different genes may show different trees",
                        "Every isolated population could be a species"
                    ],
                    examples: [
                        "DNA barcoding revealing cryptic species",
                        "Molecular data splitting traditional species into multiple species"
                    ],
                    bestFor: "Evolutionary studies, integrating with phylogenetic classification"
                },

                genetic: {
                    name: "Genetic Species Concept",
                    definition: "Species are groups of genetically compatible organisms - groups that share a common gene pool",
                    keyIdea: "Genetic similarity and cohesion define species",
                    strengths: [
                        "Objective molecular data",
                        "Applicable to all organisms",
                        "Can reveal cryptic species",
                        "Quantifiable genetic distance",
                        "Independent of morphology"
                    ],
                    weaknesses: [
                        "How much genetic difference defines separate species? (arbitrary threshold)",
                        "Gene flow between species can occur",
                        "Recently diverged species may be genetically similar",
                        "Different genes show different patterns",
                        "Technical and expensive",
                        "Horizontal gene transfer in microorganisms"
                    ],
                    examples: [
                        "Genetic distance used to distinguish bacterial species",
                        "DNA barcoding for species identification"
                    ],
                    bestFor: "Microorganisms, cryptic species, molecular studies"
                },

                cohesion: {
                    name: "Cohesion Species Concept",
                    definition: "Species are groups of organisms that are phenotypically and/or genetically similar, maintained by cohesion mechanisms",
                    keyIdea: "Cohesion mechanisms (genetic exchangeability, ecological interchangeability) maintain species",
                    strengths: [
                        "Integrates multiple factors",
                        "Explains species stability",
                        "Applicable broadly"
                    ],
                    weaknesses: [
                        "Complex - difficult to apply",
                        "Requires understanding of cohesion mechanisms",
                        "May be hard to test"
                    ],
                    bestFor: "Theoretical discussions, integrative approaches"
                },

                recognition: {
                    name: "Recognition Species Concept",
                    definition: "Species are groups of organisms that recognize each other as potential mates (share specific mate recognition systems)",
                    keyIdea: "Shared mate recognition system defines species",
                    strengths: [
                        "Emphasizes positive aspects (recognition) not just isolation",
                        "Explains speciation process",
                        "Applicable to sexual organisms"
                    ],
                    weaknesses: [
                        "Only applies to sexual organisms",
                        "Difficult to determine recognition systems",
                        "Doesn't explain species in organisms without mate choice"
                    ],
                    bestFor: "Behavioral and evolutionary studies of sexual selection"
                }
            },

            whichConceptToUse: {
                practicalGuide: [
                    "Sexual animals: Biological species concept usually preferred",
                    "Plants: Often morphological or genetic (hybridization common)",
                    "Asexual organisms: Morphological, genetic, or phylogenetic",
                    "Microorganisms: Genetic (often 97% rRNA similarity threshold)",
                    "Fossils: Morphological (only option in most cases)",
                    "Conservation: Often genetic + morphological for precision",
                    "Cryptic species: Genetic or phylogenetic essential"
                ],
                reality: "Most taxonomists use integrated approach, considering multiple lines of evidence"
            },

            specialCases: {
                ringSpecies: {
                    definition: "Chain of populations where adjacent ones interbreed, but endpoints do not",
                    example: "Ensatina salamanders in California - continuous ring around Central Valley, ends overlap but don't interbreed",
                    challenge: "Where to draw species boundary? Biological species concept breaks down",
                    significance: "Shows speciation in action, demonstrates species boundaries can be fuzzy"
                },
                crypticSpecies: {
                    definition: "Species that are morphologically identical but genetically distinct",
                    discovery: "Molecular methods revealing hidden diversity",
                    examples: [
                        "Anopheles mosquitoes (disease vectors)",
                        "Many marine invertebrates",
                        "Microorganisms"
                    ],
                    importance: "May have different ecology, behavior, conservation needs"
                },
                siblingSpecies: {
                    definition: "Closely related species that are morphologically very similar",
                    difference: "May have small morphological differences (vs. cryptic = no differences)",
                    examples: "Drosophila fruit flies, many insects"
                },
                chronospecies: {
                    definition: "Species in evolutionary lineage at different time periods",
                    challenge: "Where to draw boundary in continuous evolutionary change?",
                    example: "Human evolution: H. erectus → H. heidelbergensis → H. sapiens",
                    note: "Arbitrary divisions in continuum"
                },
                hybridZones: {
                    definition: "Geographic areas where two species meet and interbreed",
                    examples: "Crows, warblers, various plants",
                    challenge: "Species maintain identity despite gene flow",
                    significance: "Shows reproductive isolation can be incomplete"
                }
            },

            implications: {
                conservation: "Choice of species concept affects number of species recognized, thus conservation priorities",
                medicine: "Cryptic species may be different disease vectors or have different responses to drugs",
                agriculture: "Important for identifying pests, beneficial organisms",
                law: "Endangered species legislation requires defining what is a species",
                biodiversity: "Estimated number of species varies by concept used",
                evolution: "Understanding speciation requires clear species definition"
            },

            philosophicalIssues: {
                realism: "Are species real natural entities or human constructs?",
                pluralism: "Should we accept multiple species concepts or seek one universal definition?",
                discontinuity: "Why are there discrete species rather than continuous variation?",
                objectivity: "Can species definition be objective or is it necessarily subjective?"
            }
        };
    }

    handlePhylogeneticMethods(problem) {
        return {
            topic: "Phylogenetic Methods: Determining Evolutionary Relationships",
            category: 'phylogenetic_methods',
            summary: "Techniques and approaches for inferring evolutionary relationships among organisms and constructing phylogenetic trees.",

            dataTypes: {
                morphological: {
                    description: "Physical structural features",
                    characteristics: [
                        "Anatomy (bones, organs, tissues)",
                        "Physiology (metabolic pathways)",
                        "Development (embryology)",
                        "Behavior",
                        "Ultrastructure (electron microscopy)"
                    ],
                    advantages: [
                        "Applicable to fossils",
                        "Observable without killing organism",
                        "Historical basis of classification",
                        "Functional significance often clear"
                    ],
                    disadvantages: [
                        "Limited number of characters",
                        "Convergent evolution common",
                        "Subjective character definition",
                        "Homology vs. analogy difficult to determine"
                    ]
                },
                molecular: {
                    description: "DNA and protein sequence data",
                    types: [
                        "DNA sequences (nuclear, mitochondrial, chloroplast)",
                        "Protein sequences (amino acids)",
                        "RNA sequences (ribosomal RNA common)",
                        "Whole genomes"
                    ],
                    advantages: [
                        "Vast number of characters (base pairs)",
                        "Applicable to all organisms",
                        "Objective and quantifiable",
                        "Homology easier to determine",
                        "Can use molecular clocks"
                    ],
                    disadvantages: [
                        "Gene trees may not equal species trees",
                        "Horizontal gene transfer (bacteria)",
                        "Incomplete lineage sorting",
                        "Rate heterogeneity across lineages",
                        "Saturation at deep divergences",
                        "Technical and expensive"
                    ]
                },
                combined: {
                    description: "Integrating multiple data types",
                    approach: "Total evidence approach",
                    rationale: "Different data types provide complementary information",
                    challenge: "How to weight different data types",
                    trend: "Increasingly common in modern phylogenetics"
                }
            },

            characterAnalysis: {
                homology: {
                    definition: "Similarity due to common ancestry",
                    criteria: [
                        "Similarity in position relative to other structures",
                        "Similarity in development",
                        "Similarity in structure",
                        "Phylogenetic continuity"
                    ],
                    types: {
                        orthology: "Genes in different species from common ancestral gene",
                        paralogy: "Genes related by duplication within genome"
                    },
                    importance: "Only homologies should be used in phylogenetic analysis"
                },
                analogy: {
                    definition: "Similarity due to convergent evolution, not common ancestry",
                    alsoKnown: "Homoplasy",
                    types: [
                        "Convergence: similar features evolve independently",
                        "Reversal: return to ancestral state",
                        "Parallelism: similar changes in related lineages"
                    ],
                    examples: [
                        "Wings of birds and insects",
                        "Eyes of vertebrates and cephalopods",
                        "Streamlined body of dolphins and fish"
                    ],
                    problem: "Can mislead phylogenetic analysis"
                },
                characterPolarity: {
                    definition: "Determining which character state is ancestral vs. derived",
                    methods: [
                        "Outgroup comparison (most common)",
                        "Ontogeny (embryonic development)",
                        "Paleontology (fossil record)",
                        "Commonality (widespread = likely ancestral)"
                    ],
                    importance: "Essential for cladistic analysis",
                    terms: {
                        plesiomorphy: "Ancestral character state",
                        apomorphy: "Derived character state",
                        synapomorphy: "Shared derived state (defines clades)",
                        symplesiomorphy: "Shared ancestral state (doesn't define clades)",
                        autapomorphy: "Unique derived state (doesn't show relationships)"
                    }
                }
            },

            treeConstructionMethods: {
                distanceBased: {
                    name: "Distance Methods",
                    principle: "Calculate evolutionary distances between all pairs, cluster most similar",
                    commonMethods: [
                        "UPGMA (Unweighted Pair Group Method with Arithmetic Mean)",
                        "Neighbor-Joining"
                    ],
                    steps: [
                        "Calculate pairwise distances (genetic or morphological)",
                        "Create distance matrix",
                        "Cluster taxa based on distances",
                        "Generate tree"
                    ],
                    advantages: [
                        "Fast computation",
                        "Good for large datasets",
                        "Intuitively simple"
                    ],
                    disadvantages: [
                        "Information loss (sequences reduced to single distance)",
                        "Assumes molecular clock (UPGMA)",
                        "Sensitive to rate variation",
                        "No character state information preserved"
                    ],
                    bestFor: "Quick preliminary analyses, very large datasets"
                },

                parsimony: {
                    name: "Maximum Parsimony",
                    principle: "Choose tree requiring fewest evolutionary changes (most parsimonious)",
                    process: [
                        "Align sequences or score characters",
                        "Generate possible trees",
                        "Count changes required on each tree",
                        "Select tree(s) with minimum changes"
                    ],
                    advantages: [
                        "Simple concept - Occam's razor",
                        "Identifies specific character changes"
                    ],
                    disadvantages: [
                        "Long-branch attraction (fast-evolving lineages incorrectly grouped)",
                        "Assumes equal probability of all changes",
                        "Computationally intensive for many taxa",
                        "May not find true tree if evolution not parsimonious"
                    ],
                    terms: {
                        "tree length": "Total number of evolutionary changes",
                        "consistency index": "Measure of homoplasy (lower = more homoplasy)",
                        "bootstrap": "Resampling method to assess confidence"
                    },
                    bestFor: "Morphological data, moderate-sized datasets, when model-free approach preferred"
                },

                likelihood: {
                    name: "Maximum Likelihood (ML)",
                    principle: "Choose tree with highest probability of producing observed data given evolutionary model",
                    process: [
                        "Align sequences",
                        "Choose evolutionary model (e.g., substitution rates)",
                        "Calculate likelihood for each possible tree",
                        "Select tree with highest likelihood"
                    ],
                    advantages: [
                        "Statistically rigorous",
                        "Accounts for different rates of change",
                        "Can incorporate complex evolutionary models",
                        "Less susceptible to long-branch attraction",
                        "Provides likelihood ratio tests"
                    ],
                    disadvantages: [
                        "Computationally very intensive",
                        "Requires choosing evolutionary model",
                        "Sensitive to model misspecification",
                        "Difficult to interpret likelihood values"
                    ],
                    models: [
                        "Jukes-Cantor (simplest - equal rates)",
                        "Kimura 2-parameter (transitions ≠ transversions)",
                        "HKY85, GTR (general time reversible)",
                        "Models with rate variation (gamma distribution)"
                    ],
                    bestFor: "Molecular data, when computational resources available, rigorous statistical approach needed"
                },

                bayesian: {
                    name: "Bayesian Inference",
                    principle: "Calculate posterior probability of tree given data and prior probabilities",
                    process: [
                        "Define prior probabilities (tree topologies, branch lengths, model parameters)",
                        "Use MCMC (Markov Chain Monte Carlo) to sample tree space",
                        "Calculate posterior probabilities",
                        "Summarize results (consensus tree, credibility intervals)"
                    ],
                    advantages: [
                        "Provides probability estimates for trees and clades",
                        "Can incorporate prior information",
                        "Flexible modeling framework",
                        "Accounts for uncertainty in parameters",
                        "Often faster than ML for complex models"
                    ],
                    disadvantages: [
                        "Requires prior probabilities (can be subjective)",
                        "Computationally intensive",
                        "MCMC convergence must be assessed",
                        "Results depend on priors",
                        "Complex to understand and implement"
                    ],
                    output: [
                        "Posterior probabilities for clades",
                        "Consensus tree",
                        "Credible intervals for divergence times"
                    ],
                    software: "MrBayes, BEAST",
                    bestFor: "Complex models, integrating multiple data types, divergence time estimation"
                }
            },

            supportMeasures: {
                bootstrap: {
                    method: "Parsimony, likelihood",
                    description: "Resample data with replacement, reconstruct tree, measure how often clades appear",
                    interpretation: "Percentage of resampled datasets supporting clade",
                    guideline: ">70% = moderate support, >95% = strong support",
                    note: "Not probability - measures robustness to data resampling"
                },
                posteriorProbability: {
                    method: "Bayesian",
                    description: "Probability of clade given data and model",
                    interpretation: "Direct probability estimate",
                    guideline: ">0.95 = strong support",
                    note: "True probability, tends to be higher than bootstrap values"
                },
                jackknife: {
                    method: "Any",
                    description: "Similar to bootstrap but removes data points rather than resampling",
                    use: "Less common than bootstrap"
                }
            },

            molecularClocks: {
                concept: "Mutations accumulate at relatively constant rate over time",
                application: "Estimate divergence times",
                assumptions: [
                    "Constant rate of molecular evolution",
                    "Neutral mutations (not selected)",
                    "Known calibration point (fossil date, biogeographic event)"
                ],
                types: {
                    strict: "Same rate in all lineages",
                    relaxed: "Rates can vary across lineages",
                    local: "Different rates in different parts of tree"
                },
                calibration: [
                    "Fossil dates",
                    "Biogeographic events (island formation, continental separation)",
                    "Other well-dated events"
                ],
                violations: [
                    "Generation time effects",
                    "Population size effects",
                    "Selection",
                    "DNA repair efficiency differences"
                ],
                software: "BEAST, r8s",
                importance: "Dating evolutionary events, understanding rates of evolution"
            },

            practicalWorkflow: {
                step1: {
                    name: "Data Collection",
                    tasks: [
                        "Choose taxa to include",
                        "Select outgroup(s)",
                        "Collect morphological data or sequence genes",
                        "Generate sequence data"
                    ]
                },
                step2: {
                    name: "Data Preparation",
                    tasks: [
                        "Sequence alignment (MUSCLE, MAFFT, Clustal)",
                        "Remove ambiguous regions",
                        "Code morphological characters",
                        "Check for errors"
                    ]
                },
                step3: {
                    name: "Model Selection",
                    tasks: [
                        "Choose evolutionary model (for molecular data)",
                        "Use model selection tools (jModelTest, PartitionFinder)",
                        "Consider partitioning data (by gene, codon position)"
                    ]
                },
                step4: {
                    name: "Tree Construction",
                    tasks: [
                        "Run phylogenetic analysis",
                        "Try multiple methods",
                        "Assess convergence (Bayesian)",
                        "Obtain support values"
                    ]
                },
                step5: {
                    name: "Tree Evaluation",
                    tasks: [
                        "Examine bootstrap/posterior support",
                        "Compare trees from different methods",
                        "Check for long branches",
                        "Root tree with outgroup"
                    ]
                },
                step6: {
                    name: "Interpretation",
                    tasks: [
                        "Identify well-supported clades",
                        "Compare to previous hypotheses",
                        "Note areas of uncertainty",
                        "Draw biological conclusions"
                    ]
                }
            },

            commonProblems: {
                longBranchAttraction: {
                    description: "Long branches (rapidly evolving) incorrectly grouped together",
                    cause: "Multiple changes at same site, parsimony mislead",
                    solution: "Use likelihood/Bayesian methods, remove fast-evolving sites, add taxa to break up long branches"
                },
                incompleteLineageSorting: {
                    description: "Gene tree doesn't match species tree due to ancestral polymorphism",
                    cause: "Rapid speciation, large ancestral population",
                    solution: "Use multiple genes, coalescent methods"
                },
                horizontalGeneTransfer: {
                    description: "Genes transferred between distantly related organisms (especially bacteria)",
                    problem: "Gene history ≠ species history",
                    solution: "Use multiple genes, recognize and account for HGT"
                },
                saturation: {
                    description: "Multiple mutations at same site obscure phylogenetic signal",
                    cause: "Deep divergences, fast-evolving sites",
                    solution: "Use slow-evolving genes, amino acids instead of DNA, remove saturated sites"
                },
                compositionalBias: {
                    description: "Different base/amino acid composition misleads analysis",
                    cause: "Unequal nucleotide frequencies",
                    solution: "Use composition-aware models, RY-coding"
                }
            },

            software: {
                alignment: ["MUSCLE", "MAFFT", "Clustal Omega", "PASTA"],
                parsimony: ["PAUP*", "TNT", "PHYLIP"],
                likelihood: ["RAxML", "PhyML", "IQ-TREE"],
                bayesian: ["MrBayes", "BEAST", "RevBayes"],
                viewing: ["FigTree", "TreeView", "iTOL"],
                comprehensive: ["MEGA", "PAUP*"]
            },

            applications: [
                "Taxonomic classification",
                "Understanding evolutionary history",
                "Dating evolutionary events",
                "Tracking disease evolution and spread",
                "Conservation (preserving evolutionary diversity)",
                "Comparative genomics",
                "Identifying origins of traits",
                "Forensic analysis",
                "Biogeography"
            ]
        };
    }

    handleTaxonomicKeys(problem) {
        return {
            topic: "Taxonomic Keys: Tools for Organism Identification",
            category: 'taxonomic_keys',
            summary: "Systematic tools using observable characteristics to identify organisms to species or other taxonomic level.",

            keyTypes: {
                dichotomous: {
                    name: "Dichotomous Key",
                    description: "Series of paired statements (couplets) leading to identification",
                    structure: "Each step presents two contrasting choices",
                    howToUse: [
                        "Start at beginning (usually couplet 1)",
                        "Read both choices in couplet",
                        "Choose statement that matches specimen",
                        "Follow direction to next couplet or identification",
                        "Repeat until organism identified"
                    ],
                    advantages: [
                        "Easy to use",
                        "Widely used and familiar",
                        "Works in print format",
                        "Forces attention to diagnostic features"
                    ],
                    disadvantages: [
                        "Must follow set path",
                        "One wrong choice leads to wrong identification",
                        "Difficult if diagnostic feature damaged or absent",
                        "Long keys can be tedious",
                        "Requires organism to match key's region/season"
                    ],
                    example: `
1a. Wings present ................................................... go to 2
1b. Wings absent .................................................... go to 5

2a. One pair of wings ............................................. Diptera (flies)
2b. Two pairs of wings ............................................ go to 3

3a. Front wings hardened (elytra) ............................. Coleoptera (beetles)
3b. Front wings not hardened .................................. go to 4

4a. Wings with scales ............................................. Lepidoptera (butterflies/moths)
4b. Wings membranous ........................................... Hymenoptera (bees/wasps)
                    `
                },
                polytomous: {
                    name: "Polytomous Key",
                    description: "Multiple choices (more than two) at each step",
                    structure: "Each step can have 3+ options",
                    advantages: [
                        "Shorter than dichotomous",
                        "Can be more efficient"
                    ],
                    disadvantages: [
                        "More complex",
                        "Easy to overlook an option",
                        "Less common"
                    ]
                },
                interactive: {
                    name: "Interactive/Multi-access Key",
                    description: "User selects characters in any order",
                    alsoKnown: "Polyclaves, matrix keys",
                    howToUse: [
                        "Observe available characters on specimen",
                        "Enter character states in any order",
                        "Software eliminates non-matching taxa",
                        "Continue until single taxon remains"
                    ],
                    advantages: [
                        "Flexible - use any characters",
                        "Works with incomplete specimens",
                        "Can skip unknown characters",
                        "Less prone to error from single mistake",
                        "Can incorporate images, descriptions"
                    ],
                    disadvantages: [
                        "Requires computer/device",
                        "Software must be developed",
                        "May require more character observations"
                    ],
                    software: ["Lucid", "DELTA", "Xper"],
                    trend: "Increasingly popular, especially for mobile apps"
                },
                pictorial: {
                    name: "Pictorial Key",
                    description: "Uses drawings or photographs with labels",
                    advantages: [
                        "Visual comparison easy",
                        "Good for beginners",
                        "Doesn't require technical terminology"
                    ],
                    disadvantages: [
                        "Limited to easily illustrated features",
                        "Space-intensive",
                        "Variation within species challenging"
                    ],
                    bestFor: "Field guides, educational materials"
                }
            },

            constructingKeys: {
                principles: [
                    "Use readily observable, reliable characters",
                    "Start with most obvious, easily seen features",
                    "Use contrasting characters (present/absent, color differences)",
                    "Avoid overlapping ranges (e.g., 'length 2-5 mm' vs '4-7 mm')",
                    "Use consistent character types within couplets",
                    "Keep couplets close together on page",
                    "Number couplets consistently"
                ],
                characterSelection: {
                    preferred: [
                        "Present in all life stages to be identified",
                        "Not varying with environment, age, or season",
                        "Easily observed (external, not requiring dissection if possible)",
                        "Discrete states (not continuous)",
                        "Diagnostic (clearly differentiate taxa)"
                    ],
                    avoid: [
                        "Subjective terms (large, small, many, few)",
                        "Technical jargon unnecessarily",
                        "Characters requiring special equipment (unless specialized key)",
                        "Highly variable features",
                        "Characters that develop only seasonally"
                    ]
                },
                testing: [
                    "Test with multiple specimens of each species",
                    "Try different starting paths (if choices exist)",
                    "Have others use key and provide feedback",
                    "Revise based on errors and confusion",
                    "Include illustrations for ambiguous features"
                ]
            },

            usingKeys: {
                preparation: [
                    "Ensure specimen is complete as possible",
                    "Have hand lens or microscope if needed",
                    "Good lighting essential",
                    "Understand terminology in key",
                    "Have ruler or measurement tools if needed"
                ],
                process: [
                    "Read both choices completely before deciding",
                    "Look for characters mentioned in key",
                    "Be systematic - don't skip steps",
                    "If unsure, try both paths and see which makes sense",
                    "Take notes on character states observed",
                    "Verify identification with description or image"
                ],
                troubleshooting: [
                    "Specimen doesn't match either choice: specimen may be damaged, not covered by key, or misidentified earlier",
                    "Multiple paths lead to same answer: confirms identification",
                    "Dead end reached: may need different key, specimen damaged, or error in key",
                    "Identification seems wrong: verify with other sources, recheck observations"
                ]
            },

            terminology: {
                couplet: "Pair of contrasting statements in dichotomous key",
                lead: "Each statement in a couplet",
                diagnostic: "Character that reliably distinguishes taxa",
                polytomy: "Branch point with more than two options",
                taxon: "The group (species, genus, etc.) being identified"
            },
            limitations: [
                "Keys are geographic - may not work outside intended range",
                "Require intact specimens with diagnostic features",
                "Can't identify juveniles, damaged, or incomplete specimens (often)",
                "Errors compound - one mistake leads to wrong ID",
                "May use technical terminology",
                "Subjective characters lead to uncertainty",
                "New species not included",
                "Variation within species can cause problems"
            ],

            modernDevelopments: {
                molecularKeys: "Using DNA sequences for identification (DNA barcoding)",
                smartphoneApps: "Image recognition and interactive keys on phones",
                artificialIntelligence: "Machine learning for automated identification from photos",
                onlineKeys: "Web-based interactive keys with images",
                citizenScience: "Apps like iNaturalist combining AI and expert verification"
            },

            examples: {
                fieldGuides: "Peterson Field Guides, Audubon guides",
                floraKeys: "Regional floras (Flora of North America, etc.)",
                onlineKeys: "Tree keys, insect keys, fish keys",
                specializedKeys: "Medical keys for parasites, forensic keys"
            },

            applications: [
                "Species identification in field",
                "Teaching taxonomy and biodiversity",
                "Ecological surveys and monitoring",
                "Agriculture (identifying pests, diseases)",
                "Medicine (identifying pathogens, vectors)",
                "Forensics",
                "Conservation (identifying threatened species)",
                "Citizen science projects"
            ]
        };
    }

    handleMolecularTaxonomy(problem) {
        return {
            topic: "Molecular Taxonomy: DNA-Based Classification",
            category: 'molecular_taxonomy',
            summary: "Using genetic and genomic information to classify organisms, identify species, and determine evolutionary relationships.",

            overview: {
                definition: "Application of molecular data (DNA, RNA, proteins) to taxonomic questions",
                revolution: "Transformed taxonomy since 1980s-1990s",
                advantage: "Provides objective, quantifiable data applicable to all organisms",
                integration: "Complements traditional morphological taxonomy"
            },

            dnaBarcoding: {
                concept: "Using short, standardized DNA region for species identification",
                analogy: "Like barcode on products - unique identifier",
                history: "Proposed by Paul Hebert (2003)",
                standardRegions: {
                    animals: {
                        gene: "COI (cytochrome c oxidase subunit I)",
                        location: "Mitochondrial DNA",
                        length: "~650 base pairs",
                        advantages: "High copy number, maternal inheritance, fast evolution"
                    },
                    plants: {
                        genes: "matK + rbcL (sometimes ITS)",
                        location: "Chloroplast DNA",
                        note: "No single gene works well, so combination used"
                    },
                    fungi: {
                        gene: "ITS (Internal Transcribed Spacer)",
                        location: "Nuclear ribosomal DNA",
                        advantages: "High variation, universal primers"
                    },
                    bacteria: {
                        gene: "16S rRNA",
                        location: "Ribosomal RNA gene",
                        advantages: "Universally present, conserved and variable regions"
                    }
                },
                process: [
                    "Extract DNA from specimen",
                    "PCR amplify barcode region",
                    "Sequence amplified DNA",
                    "Compare sequence to reference database (BOLD, GenBank)",
                    "Match identifies species (if reference available)"
                ],
                applications: [
                    "Rapid species identification",
                    "Identifying eggs, larvae, fragments",
                    "Food authentication (seafood fraud detection)",
                    "Customs/biosecurity (CITES enforcement)",
                    "Environmental DNA (eDNA) surveys",
                    "Diet analysis (from feces, stomach contents)",
                    "Forensics"
                ],
                limitations: [
                    "Requires reference database",
                    "Recent species may not be distinguishable",
                    "Hybridization can confuse results",
                    "Doesn't work for all groups equally well",
                    "Single gene may not reflect species tree"
                ],
                databases: {
                    BOLD: "Barcode of Life Data System - specialized for barcodes",
                    GenBank: "General DNA sequence database",
                    UNITE: "Fungi",
                    SILVA: "Ribosomal RNA genes"
                }
            },

            molecularMarkers: {
                types: {
                    mitochondrialDNA: {
                        description: "DNA from mitochondria",
                        characteristics: [
                            "Maternally inherited (usually)",
                            "High copy number (easy to amplify)",
                            "Fast evolution rate",
                            "No recombination",
                            "Small genome (~16 kb in animals)"
                        ],
                        commonGenes: ["COI", "Cytb (cytochrome b)", "12S and 16S rRNA", "Control region"],
                        uses: ["Species identification", "Population genetics", "Recent evolution"],
                        limitations: ["Maternal inheritance only", "Can be misleading if gene flow", "Introgression possible"]
                    },
                    chloroplastDNA: {
                        description: "DNA from chloroplasts (plants)",
                        characteristics: [
                            "Maternally inherited (usually in angiosperms)",
                            "Slower evolution than mtDNA",
                            "Larger genome (~150 kb)",
                            "Multiple genes useful"
                        ],
                        commonGenes: ["rbcL", "matK", "trnH-psbA", "atpB"],
                        uses: ["Plant phylogenetics", "Species identification"]
                    },
                    nuclearDNA: {
                        description: "DNA from nucleus",
                        characteristics: [
                            "Biparental inheritance",
                            "Recombination",
                            "Large genome",
                            "Multiple copies of some genes"
                        ],
                        commonGenes: ["ITS (ribosomal)", "18S and 28S rRNA", "Various single-copy genes"],
                        uses: ["Deep phylogeny", "Species relationships", "Detecting hybridization"],
                        advantages: "Biparental inheritance, many genes available"
                    },
                    wholeGenomes: {
                        description: "Complete genome sequences",
                        advantages: [
                            "Maximum information",
                            "Multiple independent gene trees",
                            "Can resolve difficult relationships"
                        ],
                        challenges: [
                            "Expensive (though costs decreasing)",
                            "Computational demands",
                            "Gene tree vs. species tree",
                            "Horizontal gene transfer (bacteria)"
                        ],
                        trend: "Phylogenomics increasingly feasible"
                    }
                }
            },

            techniques: {
                PCR: {
                    name: "Polymerase Chain Reaction",
                    purpose: "Amplify specific DNA region",
                    process: "Cycles of heating and cooling with DNA polymerase enzyme",
                    importance: "Enables amplification from tiny amounts of DNA",
                    use: "Prerequisite for most sequencing"
                },
                sangerSequencing: {
                    name: "Sanger Sequencing",
                    description: "Traditional DNA sequencing method",
                    readLength: "~800-1000 bp",
                    accuracy: "Very high (>99.9%)",
                    cost: "Low per sample",
                    use: "Single genes, barcoding, small studies",
                    note: "Gold standard for accuracy"
                },
                nextGenSequencing: {
                    name: "Next-Generation Sequencing (NGS)",
                    description: "High-throughput sequencing technologies",
                    platforms: ["Illumina", "Ion Torrent", "PacBio", "Oxford Nanopore"],
                    advantages: [
                        "Massive parallelization (millions of sequences)",
                        "Decreasing costs",
                        "Whole genomes feasible",
                        "Metabarcoding (environmental samples)"
                    ],
                    applications: [
                        "Phylogenomics",
                        "Population genomics",
                        "Metagenomics",
                        "Transcriptomics"
                    ],
                    challenges: [
                        "Bioinformatics expertise required",
                        "Computational resources",
                        "Shorter read lengths (Illumina)",
                        "Error profiles differ from Sanger"
                    ]
                },
                metabarcoding: {
                    name: "Metabarcoding",
                    description: "Sequencing DNA from environmental samples (soil, water, air)",
                    process: [
                        "Collect environmental sample",
                        "Extract total DNA",
                        "PCR amplify barcode region with universal primers",
                        "NGS sequence all amplicons",
                        "Bioinformatics: identify taxa present"
                    ],
                    applications: [
                        "Biodiversity assessment",
                        "Monitoring (invasive species, endangered species)",
                        "Diet analysis",
                        "Ecosystem health",
                        "Biomonitoring"
                    ],
                    advantages: [
                        "Detects rare, cryptic, small organisms",
                        "Non-invasive",
                        "Comprehensive sampling",
                        "Quantitative (with caveats)"
                    ],
                    limitations: [
                        "PCR biases",
                        "DNA != living organism (eDNA persists)",
                        "Reference database quality",
                        "Quantification challenges"
                    ]
                }
            },

            speciesDelimitation: {
                purpose: "Using molecular data to determine species boundaries",
                challenges: [
                    "How much genetic difference = different species?",
                    "Gene trees may not equal species trees",
                    "Recent divergence hard to detect",
                    "Hybridization and introgression"
                ],
                methods: {
                    thresholds: {
                        description: "Fixed genetic distance threshold",
                        example: "Bacteria: <97% 16S rRNA similarity = different species",
                        advantages: "Simple, objective",
                        problems: "Arbitrary cutoff, doesn't account for variable rates"
                    },
                    barcodeGap: {
                        description: "Gap between intraspecific and interspecific variation",
                        ideal: "Low variation within species, high between species",
                        reality: "Gaps not always clear",
                        visualization: "Histograms of pairwise distances"
                    },
                    coalescent: {
                        description: "Model-based approach using gene genealogies",
                        methods: ["GMYC (General Mixed Yule Coalescent)", "PTP (Poisson Tree Processes)", "BPP (Bayesian Phylogenetics and Phylogeography)"],
                        advantages: "Statistically rigorous, accounts for ancestral polymorphism",
                        challenges: "Computationally intensive, requires multiple genes ideally"
                    }
                },
                integration: "Best practice: combine molecular data with morphology, ecology, geography"
            },

            impactOnClassification: {
                revisions: "Many traditional classifications revised based on molecular data",
                examples: [
                    "Fungi moved from plants to own kingdom, closer to animals",
                    "Bird phylogeny dramatically revised",
                    "Many 'species' revealed as cryptic species complexes",
                    "Some genera/families merged or split",
                    "Three-domain system based on rRNA sequences"
                ],
                crypticSpecies: {
                    description: "Morphologically identical but genetically distinct species",
                    discovery: "Molecular methods revealing hidden diversity",
                    examples: [
                        "Malaria mosquitoes (Anopheles gambiae complex)",
                        "Many marine invertebrates",
                        "Tropical butterflies",
                        "Microbial life"
                    ],
                    importance: [
                        "Conservation (more species to protect)",
                        "Medicine (different disease vectors)",
                        "Ecology (different niches)",
                        "Evolution (speciation without morphological change)"
                    ]
                },
                lumping: {
                    description: "Molecular data showing 'species' are actually one",
                    example: "Some bird species previously thought distinct",
                    reason: "Recent divergence, maintained differences by geography"
                }
            },

            advantages: [
                "Objective, quantifiable data",
                "Applicable to all organisms (living and dead)",
                "Works with any life stage (egg, larva, adult)",
                "Identifies fragments (forensics, diet)",
                "Vast number of characters (base pairs)",
                "Detects cryptic species",
                "Independent of morphology"
            ],

            limitations: [
                "Requires laboratory facilities and expertise",
                "Can be expensive (though decreasing)",
                "Requires reference databases",
                "Gene trees may not reflect species trees",
                "Recent species may not be distinguishable",
                "Horizontal gene transfer (microorganisms)",
                "Doesn't provide ecological/functional information directly"
            ],

            future: [
                "Costs continue to decrease",
                "Portable sequencers (field use)",
                "Improved bioinformatics and AI",
                "Comprehensive reference databases",
                "Integration with morphology and ecology",
                "Real-time species identification",
                "Genomics routine in taxonomy"
            ]
        };
    }

    handleTaxonomicRevisions(problem) {
        return {
            topic: "Taxonomic Revisions: How and Why Classifications Change",
            category: 'taxonomic_revisions',
            summary: "The process by which taxonomic classifications are updated based on new evidence, methods, and understanding.",

            whyRevisionsOccur: {
                newEvidence: [
                    "Molecular data revealing relationships",
                    "Discovery of new species",
                    "Reexamination of type specimens",
                    "New morphological analyses",
                    "Fossil discoveries",
                    "Biogeographic data"
                ],
                newMethods: [
                    "Phylogenetic analysis replacing phenetics",
                    "DNA sequencing technology",
                    "Advanced microscopy",
                    "Statistical methods",
                    "Computer-aided analysis"
                ],
                conceptualChanges: [
                    "Adoption of phylogenetic classification",
                    "Different species concepts applied",
                    "Emphasis on monophyly",
                    "Integration of multiple data types"
                ],
                nomenclaturalIssues: [
                    "Discovery of priority violations",
                    "Clarification of type specimens",
                    "Resolution of homonyms",
                    "Application of nomenclatural rules"
                ]
            },

            typesOfChanges: {
                speciesDescriptions: {
                    newSpecies: "Previously unknown species described and named",
                    example: "~15,000-20,000 new species described per year",
                    process: "Formal description published in scientific journal"
                },
                synonymy: {
                    description: "Two names found to refer to same species",
                    result: "Junior synonym becomes invalid",
                    rule: "Priority - earlier published name takes precedence",
                    example: "Brontosaurus was synonym of Apatosaurus (1903-2015)",
                    conservation: "Widely-used junior synonyms can sometimes be conserved"
                },
                splitting: {
                    description: "One species divided into two or more",
                    reasons: [
                        "Cryptic species revealed by molecular data",
                        "Geographic variation represents distinct species",
                        "Reanalysis shows reproductive isolation"
                    ],
                    example: "African elephant split into Loxodonta africana and L. cyclotis (2010)",
                    impact: "Increases species count, affects conservation status"
                },
                lumping: {
                    description: "Multiple species combined into one",
                    reasons: [
                        "Variation continuous, not discrete",
                        "Molecular data shows little differentiation",
                        "Interbreeding discovered"
                    ],
                    example: "Various populations combined",
                    impact: "Decreases species count"
                },
                reclassification: {
                    description: "Species moved to different genus or higher taxon",
                    reasons: [
                        "Phylogenetic analysis shows different relationships",
                        "Original genus not monophyletic",
                        "Genus redefined"
                    ],
                    notation: "Original author name in parentheses: (Linnaeus) indicates genus change",
                    example: "Many species changed genera based on molecular phylogenies"
                },
                rankChanges: {
                    description: "Taxon moved to different rank level",
                    examples: [
                        "Subspecies elevated to species",
                        "Genus reduced to subgenus",
                        "Family raised to order"
                    ],
                    reason: "Better reflects degree of difference or phylogenetic position"
                }
            },

            revisionProcess: {
                taxonomicRevision: {
                    definition: "Comprehensive study of a taxonomic group",
                    steps: [
                        "Review all specimens and type material",
                        "Examine literature and previous classifications",
                        "Collect new data (molecular, morphological)",
                        "Conduct phylogenetic analyses",
                        "Reassess species boundaries",
                        "Publish revised classification with justification"
                    ],
                    scope: "Can be for genus, family, or larger group",
                    timeframe: "Often takes years or decades",
                    importance: "Updates classification to reflect current knowledge"
                },
                monograph: {
                    definition: "Comprehensive treatment of entire taxonomic group",
                    content: [
                        "Complete species descriptions",
                        "Keys to all species",
                        "Illustrations",
                        "Distribution maps",
                        "Phylogenetic relationships",
                        "Historical review"
                    ],
                    significance: "Definitive reference for group"
                },
                nomenclaturalActs: {
                    description: "Formal changes to names following Code rules",
                    types: [
                        "New names proposed",
                        "Synonymies established",
                        "Lectotypes designated",
                        "Neotypes designated (if type lost)",
                        "Names conserved or rejected"
                    ],
                    publication: "Must be published in peer-reviewed journal",
                    registration: "New names must be registered (ZooBank, MycoBank, etc.)"
                }
            },

            challenges: {
                stability: {
                    issue: "Frequent name changes cause confusion",
                    conflict: "Accuracy vs. stability",
                    views: [
                        "Splitters: favor recognizing more species",
                        "Lumpers: favor fewer, broader species",
                        "Conservatives: resist changing traditional names",
                        "Progressives: embrace changes reflecting new data"
                    ],
                    balance: "Need both accuracy and reasonable stability"
                },
                subjectivity: {
                    issue: "Experts may disagree on classifications",
                    sources: [
                        "Different species concepts",
                        "Different weighting of characters",
                        "Interpretation of data",
                        "Rank assignments"
                    ],
                    resolution: "Consensus emerges over time, additional data"
                },
                resources: {
                    issue: "Taxonomic work underfunded and understaffed",
                    consequences: [
                        "Many groups poorly known",
                        "Type specimens in poor condition",
                        "Insufficient museum staff",
                        "Lack of training programs"
                    ],
                    called: "Taxonomic impediment"
                },
                accessibility: {
                    issue: "Old literature hard to access",
                    problems: [
                        "Papers in obscure journals",
                        "Different languages",
                        "Not digitized",
                        "Type specimens in distant museums"
                    ],
                    solutions: "Digitization efforts, online databases, virtual collections"
                },
                pragmatic: {
                    issue: "Using organisms in applied contexts",
                    problem: "Name changes affect regulations, management plans, literature",
                    examples: [
                        "Endangered species lists use specific names",
                        "Pest management targets specific species",
                        "Medical literature references specific pathogens"
                    ],
                    solution: "Maintain synonym lists, update databases carefully"
                }
            },

            trackingChanges: {
                databases: {
                    catalogueOfLife: "Comprehensive species list, tracks accepted names",
                    ITIS: "Integrated Taxonomic Information System",
                    GBIF: "Global Biodiversity Information Facility",
                    WoRMS: "World Register of Marine Species",
                    IPNI: "International Plant Names Index",
                    purpose: "Track valid names, synonyms, taxonomic changes"
                },
                registration: {
                    ZooBank: "Official registry for animal names",
                    MycoBank: "Official registry for fungal names",
                    requirement: "New names must be registered",
                    benefit: "Tracks nomenclatural acts, prevents duplication"
                },
                literature: {
                    journals: "Taxonomic journals publish revisions",
                    reviews: "Periodic reviews summarize changes",
                    databases: "Searchable literature databases"
                }
            },

            majorRevisions: {
                examples: [
                    {
                        group: "Fungi",
                        change: "Moved from Plantae to own kingdom, recognized as closer to animals",
                        basis: "Molecular phylogenetics (rRNA, proteins)",
                        year: "1990s",
                        impact: "Fundamental reorganization of life"
                    },
                    {
                        group: "Birds (Aves)",
                        change: "Extensive rearrangement of orders and families",
                        basis: "Molecular phylogenetics",
                        year: "2000s-present",
                        impact: "Traditional bird classification largely overturned",
                        example: "Parrots more closely related to passerines than to hawks"
                    },
                    {
                        group: "Dinosaurs",
                        change: "Birds recognized as dinosaurs (theropods)",
                        basis: "Cladistic analysis, new fossils",
                        year: "1980s-present",
                        impact: "Birds are living dinosaurs, not just descended from them"
                    },
                    {
                        group: "Domains",
                        change: "Three-domain system replaced five-kingdom",
                        basis: "Ribosomal RNA sequences",
                        proposer: "Carl Woese (1990)",
                        impact: "Archaea recognized as fundamentally distinct from Bacteria"
                    },
                    {
                        group: "Protists",
                        change: "Recognized as paraphyletic, not natural group",
                        basis: "Molecular phylogenetics",
                        result: "Split into multiple kingdoms/supergroups",
                        note: "Kingdom Protista no longer valid in phylogenetic classification"
                    },
                    {
                        group: "Elephants",
                        change: "African elephant split into two species",
                        original: "Loxodonta africana",
                        revised: "L. africana (savanna) and L. cyclotis (forest)",
                        basis: "Molecular genetics, morphology, ecology",
                        year: "2010",
                        impact: "Conservation: forest elephant more endangered"
                    },
                    {
                        group: "Brontosaurus",
                        change: "Resurrected as valid genus",
                        history: "Described 1879, synonymized with Apatosaurus 1903, revived 2015",
                        basis: "Reanalysis showing sufficient differences",
                        year: "2015",
                        note: "Shows revisions can go both ways"
                    }
                ]
            },

            dealingWithChanges: {
                researchers: [
                    "Stay current with taxonomic literature",
                    "Use online databases for accepted names",
                    "Report which classification system used",
                    "Maintain voucher specimens for verification",
                    "Be prepared to update identifications"
                ],
                databases: [
                    "Maintain synonym lists",
                    "Track changes with dates",
                    "Allow searching by multiple names",
                    "Link to current accepted name"
                ],
                conservation: [
                    "Update species lists regularly",
                    "Recognize that splits may reveal more threatened species",
                    "Use stable identifiers (e.g., LSID) as well as names",
                    "Maintain historical records with original names"
                ],
                education: [
                    "Teach that classification is hypothesis, subject to revision",
                    "Explain reasons for changes",
                    "Emphasize scientific process",
                    "Use current names in teaching materials"
                ]
            },

            benefits: [
                "More accurate classification reflecting evolutionary relationships",
                "Discovery and recognition of hidden diversity",
                "Improved species identification tools",
                "Better understanding of biodiversity patterns",
                "Enhanced conservation decisions",
                "Scientific progress"
            ],

            drawbacks: [
                "Confusion from name changes",
                "Difficulty tracking changes",
                "Literature becomes outdated",
                "Practical complications (regulations, databases)",
                "Public confusion"
            ],

            futureDirections: [
                "Increasing use of genomic data",
                "Automated monitoring of taxonomic changes",
                "Stable identifiers independent of names",
                "Better integration of taxonomy databases",
                "Machine learning to predict needed revisions",
                "Global coordination of taxonomic work"
            ]
        };
    }

    handleBiodiversityClassification(problem) {
        return {
            topic: "Biodiversity and Classification",
            category: 'biodiversity_classification',
            summary: "The role of taxonomy and classification in understanding, documenting, and conserving Earth's biological diversity.",

            biodiversityOverview: {
                definition: "Variety of life at all levels: genetic, species, ecosystem",
                importance: [
                    "Ecosystem services (pollination, water purification, climate regulation)",
                    "Food security and agriculture",
                    "Medicine and pharmaceuticals",
                    "Cultural and aesthetic value",
                    "Intrinsic value of life"
                ],
                threats: [
                    "Habitat loss and fragmentation",
                    "Climate change",
                    "Pollution",
                    "Invasive species",
                    "Overexploitation",
                    "Disease"
                ],
                status: "Currently in sixth mass extinction event, driven by humans"
            },

            taxonomyRoleInBiodiversity: {
                documentation: {
                    description: "Cataloging Earth's species",
                    progress: {
                        described: "~1.5-2 million species named",
                        estimated: "8-10 million species (possibly up to 100 million for microbes)",
                        percentage: "Only 15-25% of species described"
                    },
                    challenges: [
                        "Many species in remote or inaccessible areas",
                        "Small, cryptic species difficult to detect",
                        "Declining number of taxonomists",
                        "Inadequate funding",
                        "Species going extinct before discovery"
                    ],
                    initiatives: [
                        "All Species Foundation",
                        "Encyclopedia of Life",
                        "Catalogue of Life",
                        "Global Genome Biodiversity Network"
                    ]
                },
                identification: {
                    importance: "Can't conserve what we can't identify",
                    tools: [
                        "Taxonomic keys",
                        "Field guides",
                        "DNA barcoding",
                        "Smartphone apps",
                        "Expert networks"
                    ],
                    biomonitoring: "Using indicator species to assess ecosystem health",
                    rapidAssessment: "Quick biodiversity surveys using trained parataxonomists"
                },
                understanding: {
                    patterns: "Distribution of biodiversity",
                    hotspots: "Areas with exceptional species richness and endemism",
                    gradients: "Latitudinal gradients (more species in tropics)",
                    phylogeneticDiversity: "Evolutionary uniqueness, not just species counts"
                },
                prediction: {
                    unknownSpecies: "Using taxonomy to predict where undiscovered species might be",
                    characteristics: "Predicting traits of poorly known species from relatives",
                    invasivePotential: "Using taxonomy to predict which species might become invasive"
                }
            },

            taxonomicBias: {
                vertebrateBias: {
                    description: "Disproportionate study of vertebrates",
                    reality: "Vertebrates <5% of animal species, but most research",
                    reasons: [
                        "Larger, more visible",
                        "Charismatic",
                        "Easier to study",
                        "More funding"
                    ],
                    consequence: "Invertebrate diversity underestimated and under-conserved"
                },
                geographicBias: {
                    description: "Temperate regions better studied than tropics",
                    problem: "Tropics have most biodiversity but fewer taxonomists",
                    solution: "Capacity building in biodiverse regions"
                },
                habitatBias: {
                    description: "Terrestrial better studied than marine, especially deep sea",
                    estimate: "91% of marine species undescribed",
                    recent: "New ocean survey efforts (Census of Marine Life)"
                },
                sizeBias: {
                    description: "Large organisms better studied than small",
                    invisible: "Microbial diversity vastly underestimated",
                    change: "Molecular methods revealing microbial diversity"
                }
            },

            biodiversityHotspots: {
                concept: "Areas with exceptional species richness and endemism under threat",
                criteria: [
                    "At least 1,500 endemic vascular plant species (0.5% of global total)",
                    "Lost at least 70% of original habitat"
                ],
                number: "36 recognized hotspots",
                coverage: "Cover 2.4% of Earth's land surface",
                species: "Support over 50% of plant species and 43% of vertebrate species",
                examples: [
                    "Madagascar and Indian Ocean Islands",
                    "Atlantic Forest (Brazil)",
                    "Sundaland (Southeast Asia)",
                    "Tropical Andes",
                    "Caribbean Islands",
                    "Mediterranean Basin"
                ],
                conservationStrategy: "Prioritize these areas for protection",
                limitations: "Focuses on plants and vertebrates, may miss other diversity"
            },

            endemism: {
                definition: "Species found only in specific geographic area",
                levels: [
                    "Local endemics (single mountain, island)",
                    "Regional endemics (country, ecoregion)",
                    "Continental endemics"
                ],
                importance: [
                    "High conservation priority (extinction = global loss)",
                    "Indicators of unique evolutionary history",
                    "Biogeographic significance"
                ],
                causes: [
                    "Geographic isolation (islands, mountains)",
                    "Specialized habitat requirements",
                    "Recent speciation",
                    "Relict distributions"
                ],
                examples: [
                    "Madagascar lemurs (island isolation)",
                    "Hawaiian honeycreepers (island radiation)",
                    "California condor (relict distribution)"
                ]
            },

            speciesDiscovery: {
                rate: "~15,000-20,000 new species described per year",
                groups: {
                    most: "Insects, especially beetles ('God has an inordinate fondness for beetles' - J.B.S. Haldane)",
                    recent: "Many new primates, amphibians, fish",
                    underExplored: "Deep sea, soil, canopy, tropical forests"
                },
                methods: {
                    traditional: "Morphological examination of specimens",
                    molecular: "DNA barcoding revealing cryptic species",
                    imaging: "Remote sensing, camera traps",
                    acoustic: "Bioacoustics for vocalizing species",
                    citizenScience: "Public reporting new observations"
                },
                remarkable: [
                    "New large mammals still being discovered (muntjac deer, primate species)",
                    "Thousands of marine species from deep-sea expeditions",
                    "Microbial diversity vast and largely unknown"
                ]
            },

            conservationApplications: {
                redLists: {
                    description: "IUCN Red List categories for extinction risk",
                    categories: [
                        "Extinct (EX)",
                        "Extinct in Wild (EW)",
                        "Critically Endangered (CR)",
                        "Endangered (EN)",
                        "Vulnerable (VU)",
                        "Near Threatened (NT)",
                        "Least Concern (LC)",
                        "Data Deficient (DD)"
                    ],
                    requirement: "Accurate taxonomy essential for assessment",
                    problem: "Only small fraction of species assessed"
                },
                evolutionaryDistinctiveness: {
                    concept: "Species with few close relatives are evolutionarily unique",
                    measure: "EDGE scores (Evolutionary Distinct and Globally Endangered)",
                    examples: [
                        "Tuatara (only surviving member of order)",
                        "Aye-aye (unique primate)",
                        "Gharial (distinct crocodilian)"
                    ],
                    conservation: "Losing these species loses disproportionate evolutionary history"
                },
                crypticSpecies: {
                    impact: "Single 'species' revealed as multiple",
                    consequence: [
                        "More species to conserve",
                        "Smaller population sizes (more threatened)",
                        "Different distributions",
                        "Different ecological requirements"
                    ],
                    example: "Giraffe revealed as 4-6 species, not one"
                },
                invasiveSpecies: {
                    role: "Accurate identification critical for management",
                    problem: "Misidentification can lead to wrong control measures",
                    early: "Early detection through monitoring",
                    prediction: "Taxonomy helps predict invasion potential"
                }
            },

            taxonomicImpediment: {
                definition: "Shortage of taxonomic expertise and resources",
                manifestations: [
                    "Declining number of taxonomists",
                    "Few university positions",
                    "Inadequate funding",
                    "Loss of training programs",
                    "Underfunded museums and collections",
                    "Many groups with no experts"
                ],
                consequences: [
                    "Species going extinct before discovery",
                    "Inaccurate identifications",
                    "Delayed revisions",
                    "Poor baseline data for conservation"
                ],
                solutions: [
                    "Train more taxonomists",
                    "Support museum collections",
                    "Integrate molecular and morphological expertise",
                    "Develop automated identification tools",
                    "Engage citizen scientists",
                    "Make taxonomy attractive career"
                ]
            },

            futureDirections: [
                "DNA barcoding and metabarcoding for rapid assessment",
                "Automated species identification (AI, machine learning)",
                "Global biodiversity databases integration",
                "Citizen science engagement",
                "Genomic approaches revealing hidden diversity",
                "Real-time biodiversity monitoring",
                "Protecting taxonomic expertise and collections"
            ]
        };
    }

    handleConservationTaxonomy(problem) {
        return {
            topic: "Conservation Taxonomy and Threatened Species",
            category: 'conservation_taxonomy',
            summary: "The application of taxonomic knowledge to conservation biology, including identifying conservation priorities and managing threatened species.",

            importance: {
                fundamental: "Can't conserve what we can't identify or classify",
                priorities: "Taxonomy determines conservation priorities",
                legislation: "Laws protect specific named species",
                management: "Management plans target defined taxonomic units",
                monitoring: "Tracking requires accurate identification"
            },

            taxonomicUncertainty: {
                problem: "Many conservation-relevant groups poorly known taxonomically",
                consequences: [
                    "Unknown species not protected",
                    "Misidentification leads to wrong management",
                    "Conservation resources misdirected",
                    "Cryptic species missed"
                ],
                solutions: [
                    "Taxonomic research in conservation-priority groups",
                    "Rapid assessment using DNA barcoding",
                    "Precautionary approach when taxonomy uncertain"
                ]
            },

            conservationUnits: {
                species: {
                    description: "Fundamental unit in most conservation legislation",
                    challenge: "Which species concept to use?",
                    impact: "Splitting increases number of threatened species",
                    example: "Giraffe: 1 species → 4-6 species = some critically endangered"
                },
                subspecies: {
                    description: "Geographic variants within species",
                    conservation: "Often listed separately (e.g., Florida panther)",
                    debate: "How distinct must populations be?",
                    example: "Many tiger subspecies extinct or critically endangered"
                },
                ESU: {
                    name: "Evolutionarily Significant Unit",
                    definition: "Population/group with unique evolutionary history and adaptive potential",
                    criteria: [
                        "Reproductively isolated",
                        "Important to evolutionary legacy",
                        "Represents unique ecology"
                    ],
                    use: "US Endangered Species Act for salmon",
                    advantage: "Protects evolutionary diversity within species"
                },
                MU: {
                    name: "Management Unit",
                    definition: "Population with limited genetic exchange, managed separately",
                    criteria: "Limited gene flow between populations",
                    timeframe: "Demographic independence, not long-term reproductive isolation",
                    use: "Practical management even if not evolutionary distinct"
                },
                DPS: {
                    name: "Distinct Population Segment",
                    definition: "Population discrete from others and significant to species",
                    use: "US Endangered Species Act",
                    criteria: [
                        "Discreteness (physical, genetic, ecological)",
                        "Significance (unique adaptations, gap in range, different ecology)"
                    ]
                }
            },

            crypticSpecies: {
                definition: "Morphologically similar but genetically/reproductively distinct",
                discovery: "Molecular methods revealing hidden diversity",
                conservationImplications: {
                    positives: [
                        "More species to celebrate",
                        "Better understanding of diversity"
                    ],
                    challenges: [
                        "More species to protect",
                        "Smaller population sizes (more threatened)",
                        "Different ranges and requirements",
                        "Need to reassess conservation status"
                    ]
                },
                examples: [
                    {
                        group: "Anopheles mosquitoes",
                        species: "Several cryptic species",
                        importance: "Different species transmit different diseases, need different control",
                        implication: "Medical/conservation intersection"
                    },
                    {
                        group: "Giraffes",
                        revision: "1 species → 4-6 species",
                        impact: "Some species critically endangered",
                        year: "2016-present"
                    },
                    {
                        group: "Leopard frogs",
                        species: "Multiple cryptic species in North America",
                        impact: "Different conservation status for each"
                    }
                ]
            },

            taxonomicSplittingLumping: {
                splitting: {
                    description: "Dividing one species into multiple",
                    conservationEffect: "Creates more threatened species",
                    example: "Gorilla: 1 species → 2 species (Western and Eastern)",
                    advantage: "Better reflects evolutionary diversity",
                    concern: "Resources spread thinner"
                },
                lumping: {
                    description: "Combining multiple species into one",
                    conservationEffect: "Fewer species, but may have larger range/population",
                    concern: "Unique populations may lose protection",
                    advantage: "Simplifies management in some cases"
                },
                debate: "Splitters vs. lumpers in conservation context",
                bestPractice: "Follow phylogenetic evidence, consider conservation implications"
            },

            endangeredSpeciesLegislation: {
                global: {
                    IUCN: {
                        name: "International Union for Conservation of Nature Red List",
                        categories: "Extinct → Critically Endangered → Endangered → Vulnerable → Near Threatened → Least Concern",
                        coverage: "~150,000 species assessed (fraction of total)",
                        influence: "Informs national and international policy",
                        criteria: "Population size, decline rate, range size, fragmentation"
                    },
                    CITES: {
                        name: "Convention on International Trade in Endangered Species",
                        purpose: "Regulate international trade in threatened species",
                        appendices: [
                            "Appendix I: Trade banned (most threatened)",
                            "Appendix II: Trade regulated",
                            "Appendix III: Listed by specific countries"
                        ],
                        requirement: "Accurate species identification essential",
                        challenge: "Enforcement, especially for cryptic or similar species"
                    }
                },
                national: {
                    USA: {
                        law: "Endangered Species Act (ESA)",
                        categories: "Endangered, Threatened",
                        protection: "Federal protection of species and habitat",
                        recovery: "Required recovery plans",
                        taxonomicUnit: "Species, subspecies, or DPS",
                        challenge: "Listing process can be slow, many species waiting"
                    },
                    otherCountries: "Various national endangered species laws",
                    effectiveness: "Varies widely by country and enforcement"
                }
            },

            taxonomyInRecovery: {
                breedingPrograms: {
                    importance: "Maintain genetic diversity",
                    requirement: "Accurate identification to avoid hybridization",
                    studbooks: "Track lineages of captive individuals",
                    example: "California condor, black-footed ferret recovery"
                },
                reintroduction: {
                    importance: "Source correct subspecies/population",
                    risk: "Outbreeding depression if wrong population used",
                    example: "Florida panther genetic rescue using Texas cougars (carefully selected)"
                },
                habitatRestoration: {
                    targeting: "Restore habitat for specific threatened species",
                    requirement: "Know species' habitat requirements",
                    monitoring: "Track species recovery"
                }
            },

            forensicTaxonomy: {
                wildlife: {
                    purpose: "Identify species from parts (meat, skin, horns) for law enforcement",
                    methods: [
                        "Morphological examination",
                        "DNA barcoding",
                        "Isotope analysis (origin determination)"
                    ],
                    importance: "Enforce CITES, detect illegal trade",
                    challenges: [
                        "Processed products difficult to identify",
                        "Need reference databases",
                        "Distinguish legal from illegal source"
                    ]
                },
                timber: {
                    purpose: "Identify wood species to prevent illegal logging",
                    methods: "Wood anatomy, DNA barcoding",
                    importance: "Protect threatened tree species"
                },
                seafood: {
                    purpose: "Detect mislabeling, fraud",
                    finding: "25-50% of seafood mislabeled",
                    method: "DNA barcoding",
                    conservation: "Ensure threatened species not sold illegally"
                }
            },

            prioritization: {
                criteria: [
                    "Extinction risk",
                    "Evolutionary distinctiveness (EDGE scores)",
                    "Ecosystem role (keystone species)",
                    "Endemism",
                    "Population trend",
                    "Feasibility of conservation",
                    "Cultural/economic value"
                ],
                triageDebate: "Should we focus on saveable species or most endangered?",
                phylogeneticDiversity: "Preserve evolutionary history, not just species counts",
                ecosystemApproach: "Protect habitats/ecosystems rather than single species"
            },

            challenges: [
                "Taxonomic uncertainty for many groups",
                "Declining taxonomic expertise",
                "Rapid environmental change outpacing study",
                "Limited resources for both taxonomy and conservation",
                "Species going extinct before description",
                "Conflict between taxonomic revision and legislative stability",
                "Cryptic species complicate management"
            ],

            integration: {
                collaboration: "Taxonomists and conservation biologists must work together",
                rapidAssessment: "Quick biodiversity surveys in threatened areas",
                adaptiveManagement: "Update management as taxonomy improves",
                precautionary: "Protect uncertain taxa until resolved"
            },

            future: [
                "DNA barcoding for rapid field identification",
                "eDNA monitoring of threatened species",
                "Genomics revealing population structure",
                "AI-assisted species identification",
                "Global taxonomic database integration",
                "Citizen science contributions",
                "Increased funding for conservation taxonomy"
            ]
        };
    }

    // CONTENT GENERATION METHODS

    generateTaxonomyContent(problem, content) {
        const contentSections = [];

        // Generate overview section
        contentSections.push(this.generateOverviewSection(problem, content));

        // Generate detailed content based on topic type
        if (content.history) {
            contentSections.push(this.generateHistoryContent(content));
        }

        if (content.threeDomainSystem || content.domains) {
            contentSections.push(this.generateDomainsContent(content));
        }

        if (content.hierarchy || content.majorRanks) {
            contentSections.push(this.generateHierarchyContent(content));
        }

        if (content.speciesConcepts || content.majorConcepts) {
            contentSections.push(this.generateSpeciesConceptsContent(content));
        }

        if (content.structure || content.rules) {
            contentSections.push(this.generateNamingContent(content));
        }

        if (content.dataTypes || content.methods) {
            contentSections.push(this.generateMethodsContent(content));
        }

        // Add comparisons if available
        if (content.comparisons || content.comparison || content.comparisonTable) {
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

    generateHistoryContent(content) {
        return {
            sectionType: 'history',
            title: 'Historical Development',
            history: content.history,
            majorDevelopments: Object.values(content.history || {}).map(period => ({
                period: period.period || period.developer || period.description,
                contribution: period.contribution || period.innovations || period.approach,
                impact: period.impact || period.significance || period.importance
            }))
        };
    }

    generateDomainsContent(content) {
        return {
            sectionType: 'domains',
            title: 'Domains and Major Groups',
            domains: content.domains,
            comparison: content.comparisonTable,
            evolutionaryRelationships: content.evolutionaryRelationships
        };
    }

    generateHierarchyContent(content) {
        return {
            sectionType: 'hierarchy',
            title: 'Taxonomic Hierarchy',
            ranks: content.hierarchy?.majorRanks || content.majorRanks,
            mnemonic: content.mnemonic,
            examples: content.detailedExamples || content.example
        };
    }

    generateSpeciesConceptsContent(content) {
        return {
            sectionType: 'species_concepts',
            title: 'Defining Species',
            concepts: content.speciesConcepts || content.majorConcepts,
            specialCases: content.specialCases,
            implications: content.implications
        };
    }

    generateNamingContent(content) {
        return {
            sectionType: 'naming',
            title: 'Naming System',
            structure: content.structure,
            rules: content.rules || content.namingRules,
            examples: content.examples
        };
    }

    generateMethodsContent(content) {
        return {
            sectionType: 'methods',
            title: 'Methods and Techniques',
            dataTypes: content.dataTypes,
            methods: content.methods || content.treeConstructionMethods,
            techniques: content.techniques
        };
    }

    generateComparisonsSection(content) {
        const comparisons = content.comparisons || content.comparison || content.comparisonTable;
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

    // HELPER METHODS

    extractKeyPoints(content) {
        const keyPoints = [];

        if (content.concepts) keyPoints.push(...content.concepts);
        if (content.keyDefinitions) keyPoints.push(...Object.keys(content.keyDefinitions));
        if (content.mainCategories) keyPoints.push(...content.mainCategories);
        if (content.principles) keyPoints.push(...Object.keys(content.principles));

        return keyPoints.slice(0, 5); // Limit to top 5 key points
    }

    getTopicRelevance(topicType) {
        const relevance = {
            classification_system: "Foundation for organizing all biological knowledge",
            phylogeny: "Understanding evolutionary relationships is central to modern biology",
            domains_kingdoms: "Highest-level organization of life on Earth",
            binomial_nomenclature: "Universal naming system enabling global scientific communication",
            taxonomic_ranks: "Hierarchical framework organizing biological diversity",
            species_concepts: "Fundamental to understanding what species are and how to recognize them",
            phylogenetic_methods: "Essential tools for determining evolutionary relationships",
            taxonomic_keys: "Practical tools for identifying organisms",
            molecular_taxonomy: "Modern approach revolutionizing classification",
            taxonomic_revisions: "Understanding how scientific knowledge progresses",
            biodiversity_classification: "Critical for documenting and conserving life on Earth",
            conservation_taxonomy: "Essential for protecting threatened species"
        };

        return relevance[topicType] || "Important taxonomic concept";
    }

    // DIAGRAM GENERATION (Placeholder methods)

    generateTaxonomyDiagramData() {
        if (!this.currentContent) return;

        const { type } = this.currentProblem;

        // Placeholder diagram data generation
        this.diagramData = {
            type: type,
            diagrams: this.getRelevantDiagrams(type),
            placeholder: true,
            note: "Diagram generation will be implemented with actual taxonomic diagrams"
        };
    }

    getRelevantDiagrams(topicType) {
        const diagramMap = {
            classification_system: ["taxonomic_hierarchy", "linnaean_system", "nested_classification"],
            phylogeny: ["phylogenetic_tree", "cladogram", "common_ancestor_diagram"],
            domains_kingdoms: ["three_domain_tree", "tree_of_life", "domain_comparison"],
            binomial_nomenclature: ["naming_structure", "name_examples"],
            taxonomic_ranks: ["rank_hierarchy", "mnemonic_diagram"],
            species_concepts: ["species_concept_comparison", "speciation_diagram"],
            phylogenetic_methods: ["tree_types", "character_analysis", "method_comparison"],
            taxonomic_keys: ["dichotomous_key_example", "key_structure"],
            molecular_taxonomy: ["dna_barcoding_process", "molecular_phylogeny"],
            taxonomic_revisions: ["revision_process", "name_changes"],
            biodiversity_classification: ["biodiversity_hotspots", "species_distribution"],
            conservation_taxonomy: ["conservation_units", "red_list_categories"]
        };

        return diagramMap[topicType] || [];
    }

    // WORKBOOK GENERATION

    generateTaxonomyWorkbook() {
        if (!this.currentContent || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createTaxonomyProblemSection(),
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
            title: 'Taxonomy and Classification Workbook',
            created: new Date().toISOString(),
            sections: []
        };
    }

    createTaxonomyProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Topic Information',
            type: 'problem',
            data: [
                ['Topic Type', this.currentProblem.type],
                ['Main Topic', this.currentProblem.originalTopic],
                ['Sub-Topic', this.currentProblem.subTopic || 'General'],
                ['Category', this.taxonomyTopics[this.currentProblem.type]?.category || 'N/A']
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

        // Add content based on what's available
        if (this.currentContent.history) {
            Object.entries(this.currentContent.history).forEach(([key, value]) => {
                contentData.push([key.toUpperCase(), '']);
                if (typeof value === 'object') {
                    Object.entries(value).forEach(([k, v]) => {
                        contentData.push([`  ${k}`, Array.isArray(v) ? v.join('; ') : v]);
                    });
                }
                contentData.push(['', '']); // Spacing
            });
        }

        if (this.currentContent.domains) {
            Object.entries(this.currentContent.domains).forEach(([domain, info]) => {
                contentData.push([domain.toUpperCase(), '']);
                contentData.push(['Type', info.type]);
                if (info.characteristics) {
                    contentData.push(['Characteristics', Array.isArray(info.characteristics) ? 
                        info.characteristics.join('; ') : info.characteristics]);
                }
                contentData.push(['', '']); // Spacing
            });
        }

        if (this.currentContent.hierarchy) {
            contentData.push(['TAXONOMIC HIERARCHY', '']);
            if (this.currentContent.hierarchy.majorRanks) {
                this.currentContent.hierarchy.majorRanks.forEach(rank => {
                    contentData.push([rank.rank, rank.description]);
                });
            }
            contentData.push(['', '']); // Spacing
        }

        if (this.currentContent.speciesConcepts || this.currentContent.majorConcepts) {
            const concepts = this.currentContent.speciesConcepts || this.currentContent.majorConcepts;
            contentData.push(['SPECIES CONCEPTS', '']);
            Object.entries(concepts).forEach(([key, concept]) => {
                contentData.push([concept.name, concept.definition]);
                if (concept.strengths) {
                    contentData.push(['Strengths', concept.strengths.join('; ')]);
                }
                if (concept.weaknesses) {
                    contentData.push(['Weaknesses', concept.weaknesses.join('; ')]);
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
        const comparisons = this.currentContent?.comparisons || this.currentContent?.comparison || this.currentContent?.comparisonTable;
        if (!comparisons) return null;

        const comparisonData = [];

        if (comparisons.headers && comparisons.data) {
            // Table format
            comparisonData.push(comparisons.headers);
            comparisonData.push(...comparisons.data);
        } else {
            // Object format
            Object.entries(comparisons).forEach(([key, value]) => {
                comparisonData.push([key.toUpperCase(), '']);
                if (typeof value === 'object' && !Array.isArray(value)) {
                    Object.entries(value).forEach(([k, v]) => {
                        comparisonData.push([k, Array.isArray(v) ? v.join(', ') : v]);
                    });
                } else {
                    comparisonData.push(['', value]);
                }
                comparisonData.push(['', '']); // Spacing
            });
        }

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
                        Object.entries(example).forEach(([key, value]) => {
                            data.push([key, Array.isArray(value) ? value.join(', ') : value]);
                        });
                        data.push(['', '']); // Spacing
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

        if (lesson.mainCategories) {
            data.push(['', '']);
            data.push(['MAIN CATEGORIES', '']);
            lesson.mainCategories.forEach(cat => {
                data.push(['•', cat]);
            });
        }

        if (lesson.applications) {
            data.push(['', '']);
            data.push(['APPLICATIONS', '']);
            lesson.applications.forEach(app => {
                data.push(['•', app]);
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

    adaptTaxonomyLanguage(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'taxonomy': 'naming and grouping organisms',
                    'phylogeny': 'family tree of life',
                    'clade': 'group of related organisms',
                    'monophyletic': 'natural group (ancestor and all descendants)',
                    'binomial nomenclature': 'two-part scientific name',
                    'genus': 'group of similar species',
                    'species': 'type of organism'
                }
            },
            intermediate: {
                replacements: {
                    'taxonomy': 'taxonomy',
                    'phylogeny': 'phylogeny',
                    'monophyletic': 'monophyletic'
                }
            },
            detailed: {
                replacements: {
                    'taxonomy': 'systematic taxonomy',
                    'phylogeny': 'phylogenetic relationships',
                    'monophyletic': 'monophyletic (holophyletic) group'
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

    generateTaxonomyAnalogy(concept) {
        const analogies = {
            classification: "Like organizing books in a library by subject, author, and title",
            phylogeny: "Like a family tree showing how relatives are related",
            hierarchy: "Like a filing system: file cabinet → drawer → folder → document",
            binomial_nomenclature: "Like a person's name: last name (genus) + first name (species)",
            species: "Like breeds of dogs - all related but distinct",
            taxonomy: "Like the Dewey Decimal System for organizing all life",
            clade: "Like all descendants from your great-great-grandparents",
            domain: "Like continents - largest divisions of life",
            genus: "Like siblings - very closely related species"
        };

        return analogies[concept] || "Helps organize our understanding of life";
    }

    formatTaxonomicTerm(term) {
        // Format taxonomic terms properly
        // Genus and species should be italicized (represented here with markup)
        if (term.includes(' ') && !term.includes(',')) {
            // Likely a binomial name
            const parts = term.split(' ');
            if (parts.length === 2) {
                return `<i>${parts[0]} ${parts[1]}</i>`;
            }
        }
        return term;
    }

    // ASSESSMENT AND LEARNING METHODS

    assessContentDifficulty() {
        if (!this.currentContent) return 'unknown';

        let difficultyScore = 0;

        // Simple topics
        const simpleTopics = ['binomial_nomenclature', 'taxonomic_ranks'];
        if (simpleTopics.includes(this.currentProblem.type)) {
            difficultyScore += 1;
        }

        // Intermediate topics
        const intermediateTopics = ['classification_system', 'domains_kingdoms', 'taxonomic_keys'];
        if (intermediateTopics.includes(this.currentProblem.type)) {
            difficultyScore += 2;
        }

        // Complex topics
        const complexTopics = ['phylogeny', 'species_concepts', 'phylogenetic_methods', 'molecular_taxonomy'];
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
            classification_system: [
                "Explain the purpose and importance of biological classification",
                "Describe the hierarchical nature of taxonomic classification",
                "Understand the historical development of classification systems",
                "Explain the relationship between classification and evolution"
            ],
            phylogeny: [
                "Read and interpret phylogenetic trees",
                "Distinguish between monophyletic, paraphyletic, and polyphyletic groups",
                "Understand what phylogenetic trees show (and don't show)",
                "Explain how common ancestry is represented in trees"
            ],
            domains_kingdoms: [
                "Identify and describe the three domains of life",
                "Compare and contrast the major characteristics of each domain",
                "Explain the basis for the three-domain system",
                "Describe the major kingdoms within Eukarya"
            ],
            binomial_nomenclature: [
                "Explain the structure and rules of binomial nomenclature",
                "Correctly write scientific names",
                "Understand the advantages of scientific names over common names",
                "Recognize why scientific names sometimes change"
            ],
            taxonomic_ranks: [
                "List the major taxonomic ranks in order",
                "Explain the hierarchical relationships between ranks",
                "Use mnemonics to remember rank order",
                "Classify organisms using the taxonomic hierarchy"
            ],
            species_concepts: [
                "Compare and contrast different species concepts",
                "Explain why no single species definition works for all organisms",
                "Apply appropriate species concepts to different situations",
                "Understand the 'species problem'"
            ],
            phylogenetic_methods: [
                "Describe different types of data used in phylogenetic analysis",
                "Compare different tree construction methods",
                "Understand how to assess confidence in phylogenetic trees",
                "Explain molecular clocks and their applications"
            ],
            taxonomic_keys: [
                "Use dichotomous keys to identify organisms",
                "Understand the structure and logic of taxonomic keys",
                "Recognize advantages and limitations of different key types",
                "Create simple identification keys"
            ],
            molecular_taxonomy: [
                "Explain DNA barcoding and its applications",
                "Describe how molecular data is used in taxonomy",
                "Understand advantages and limitations of molecular approaches",
                "Explain how molecular data has changed classification"
            ],
            taxonomic_revisions: [
                "Understand why and how classifications change",
                "Explain different types of taxonomic changes",
                "Recognize the balance between accuracy and stability",
                "Track taxonomic changes using databases"
            ],
            biodiversity_classification: [
                "Explain the role of taxonomy in documenting biodiversity",
                "Describe biodiversity hotspots and their significance",
                "Understand how classification supports conservation",
                "Recognize taxonomic bias in biodiversity studies"
            ],
            conservation_taxonomy: [
                "Explain how taxonomy informs conservation decisions",
                "Describe conservation units below the species level",
                "Understand the impact of cryptic species on conservation",
                "Explain the role of taxonomy in endangered species legislation"
            ]
        };

        return objectivesDatabase[this.currentProblem.type] || [
            "Understand the key concepts of this topic",
            "Apply knowledge to taxonomic problems",
            "Make connections to broader biological principles"
        ];
    }

    identifyPrerequisites() {
        if (!this.currentProblem) return [];

        const prerequisitesDatabase = {
            classification_system: [
                "Basic understanding of biological diversity",
                "Concept of grouping based on similarities"
            ],
            phylogeny: [
                "Understanding of evolution and common ancestry",
                "Basic concept of classification",
                "Ability to read tree diagrams"
            ],
            domains_kingdoms: [
                "Basic cell biology (prokaryotic vs eukaryotic)",
                "Understanding of classification hierarchy"
            ],
            binomial_nomenclature: [
                "Basic understanding of scientific naming",
                "Concept of genus and species"
            ],
            taxonomic_ranks: [
                "Understanding of hierarchical organization",
                "Basic classification concepts"
            ],
            species_concepts: [
                "Understanding of what organisms are",
                "Concept of reproduction and populations",
                "Basic genetics"
            ],
            phylogenetic_methods: [
                "Phylogeny basics",
                "Understanding of evolution",
                "Basic statistics helpful but not required"
            ],
            taxonomic_keys: [
                "Basic taxonomy and classification",
                "Familiarity with morphological terminology for relevant group"
            ],
            molecular_taxonomy: [
                "Basic genetics and DNA structure",
                "Understanding of classification",
                "Phylogeny concepts"
            ],
            taxonomic_revisions: [
                "Understanding of classification and nomenclature",
                "Phylogeny basics"
            ],
            biodiversity_classification: [
                "Basic ecology",
                "Understanding of classification",
                "Conservation concepts"
            ],
            conservation_taxonomy: [
                "Taxonomy basics",
                "Conservation biology concepts",
                "Understanding of threatened species"
            ]
        };

        return prerequisitesDatabase[this.currentProblem.type] || [
            "General biology background"
        ];
    }

    generateStudyTips() {
        if (!this.currentProblem) return [];

        const studyTipsDatabase = {
            classification_system: [
                "Create concept maps showing relationships between classification levels",
                "Practice with real examples of organisms and their classifications",
                "Understand the 'why' behind classification, not just memorize",
                "Compare historical and modern classification approaches"
            ],
            phylogeny: [
                "Practice reading many different phylogenetic trees",
                "Draw your own trees for familiar groups (e.g., your family)",
                "Focus on branching patterns, not just visual layout",
                "Remember: tips are present-day, nodes are ancestors",
                "Use online interactive phylogeny resources"
            ],
            domains_kingdoms: [
                "Create comparison tables for domains and kingdoms",
                "Use flashcards for key characteristics",
                "Find real-world examples of organisms from each group",
                "Understand cellular differences first, then other features"
            ],
            binomial_nomenclature: [
                "Practice writing scientific names correctly (formatting matters!)",
                "Learn etymology of names - helps remember and understand",
                "Create flashcards with common names and scientific names",
                "Practice abbreviating genus names correctly"
            ],
            taxonomic_ranks: [
                "Use mnemonics (Dear King Philip...)",
                "Practice classifying multiple organisms through all ranks",
                "Create visual hierarchies or nested boxes",
                "Understand that each organism fits at all levels"
            ],
            species_concepts: [
                "Create comparison table of different species concepts",
                "Apply each concept to the same example organisms",
                "Understand advantages and disadvantages of each",
                "Consider which concept works best in different situations"
            ],
            phylogenetic_methods: [
                "Don't try to memorize all methods - understand general principles",
                "Focus on what different methods assume and their limitations",
                "Practice interpreting support values on trees",
                "Use online phylogeny software to explore"
            ],
            taxonomic_keys: [
                "Practice using keys with real specimens or good photos",
                "Create your own simple keys for familiar organisms",
                "Pay attention to specialized terminology",
                "Take notes as you work through keys"
            ],
            molecular_taxonomy: [
                "Understand DNA barcoding concept before details",
                "Learn which genes are used for different groups",
                "Explore online barcode databases (BOLD, GenBank)",
                "Understand advantages over traditional methods"
            ],
            taxonomic_revisions: [
                "Follow a few taxonomic groups you're interested in",
                "Read about recent taxonomic changes in the news",
                "Understand the scientific process behind revisions",
                "Use online databases to track changes"
            ],
            biodiversity_classification: [
                "Learn locations of major biodiversity hotspots",
                "Understand the connection between taxonomy and conservation",
                "Explore online biodiversity databases",
                "Consider taxonomic bias in your learning"
            ],
            conservation_taxonomy: [
                "Learn about endangered species and their taxonomy",
                "Understand how classification affects conservation status",
                "Explore IUCN Red List and species profiles",
                "Consider real conservation case studies"
            ]
        };

        return studyTipsDatabase[this.currentProblem.type] || [
            "Review material regularly",
            "Create visual aids and diagrams",
            "Practice with real examples",
            "Connect concepts to real-world applications"
        ];
    }

    generateAssessmentQuestions() {
        if (!this.currentProblem) return [];

        const questionsDatabase = {
            classification_system: [
                {
                    question: "Why do biologists classify organisms?",
                    type: "explanation",
                    difficulty: "easy"
                },
                {
                    question: "How has the purpose of classification changed from Linnaeus to modern phylogenetic classification?",
                    type: "comparison",
                    difficulty: "medium"
                },
                {
                    question: "Should classification reflect evolutionary relationships or practical utility? Defend your answer.",
                    type: "argument",
                    difficulty: "hard"
                }
            ],
            phylogeny: [
                {
                    question: "What does a node on a phylogenetic tree represent?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Given a phylogenetic tree, identify which taxa are most closely related and explain why.",
                    type: "application",
                    difficulty: "medium"
                },
                {
                    question: "Why might different genes produce different phylogenetic trees for the same set of organisms?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            domains_kingdoms: [
                {
                    question: "What are the three domains of life?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Compare and contrast Bacteria and Archaea.",
                    type: "comparison",
                    difficulty: "medium"
                },
                {
                    question: "Why did the three-domain system replace the five-kingdom system? What evidence supported this change?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            binomial_nomenclature: [
                {
                    question: "What are the two parts of a scientific name?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Write the scientific name for humans correctly, following all formatting rules.",
                    type: "application",
                    difficulty: "medium"
                },
                {
                    question: "Why do scientific names sometimes change, and how does this affect scientific communication?",
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
            classification_system: ['taxonomic_ranks', 'phylogeny', 'binomial_nomenclature'],
            phylogeny: ['phylogenetic_methods', 'classification_system', 'species_concepts'],
            domains_kingdoms: ['classification_system', 'phylogeny', 'biodiversity_classification'],
            binomial_nomenclature: ['classification_system', 'taxonomic_ranks', 'taxonomic_revisions'],
            taxonomic_ranks: ['classification_system', 'binomial_nomenclature'],
            species_concepts: ['phylogeny', 'taxonomic_revisions', 'conservation_taxonomy'],
            phylogenetic_methods: ['phylogeny', 'molecular_taxonomy'],
            taxonomic_keys: ['classification_system', 'biodiversity_classification'],
            molecular_taxonomy: ['phylogenetic_methods', 'species_concepts', 'biodiversity_classification'],
            taxonomic_revisions: ['binomial_nomenclature', 'species_concepts', 'classification_system'],
            biodiversity_classification: ['conservation_taxonomy', 'classification_system', 'taxonomic_keys'],
            conservation_taxonomy: ['biodiversity_classification', 'species_concepts', 'taxonomic_revisions']
        };

        const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];
        
        return relatedTypes.map(type => ({
            type: type,
            name: this.taxonomyTopics[type]?.name,
            description: this.taxonomyTopics[type]?.description
        }));
    }

    generateGlossary() {
        if (!this.currentContent) return {};

        const glossary = {};

        // Extract key terms from keyDefinitions
        if (this.currentContent.keyDefinitions) {
            Object.entries(this.currentContent.keyDefinitions).forEach(([term, definition]) => {
                glossary[term] = definition;
            });
        }

        // Add terms from lesson if available
        const lesson = this.lessons[this.currentProblem?.type];
        if (lesson?.keyDefinitions) {
            Object.entries(lesson.keyDefinitions).forEach(([term, definition]) => {
                if (!glossary[term]) {
                    glossary[term] = definition;
                }
            });
        }

        return glossary;
    }

    generateProcessTimeline(processName) {
        const timelines = {
            'Taxonomic Revision': [
                { phase: 'Literature Review', duration: 'Months', events: 'Review previous classifications and descriptions' },
                { phase: 'Specimen Examination', duration: 'Months to years', events: 'Examine type specimens and collections' },
                { phase: 'Data Collection', duration: 'Variable', events: 'Collect new morphological and molecular data' },
                { phase: 'Analysis', duration: 'Weeks to months', events: 'Phylogenetic analysis, species delimitation' },
                { phase: 'Publication', duration: 'Months', events: 'Write manuscript, peer review, publication' }
            ],
            'DNA Barcoding': [
                { step: 'Sample Collection', time: 'Day', output: 'Tissue sample' },
                { step: 'DNA Extraction', time: 'Hours', output: 'Purified DNA' },
                { step: 'PCR Amplification', time: 'Hours', output: 'Amplified barcode region' },
                { step: 'Sequencing', time: 'Hours to days', output: 'DNA sequence' },
                { step: 'Database Search', time: 'Minutes', output: 'Species identification' }
            ],
            'Classification History': [
                { period: 'Ancient-1700s', milestone: 'Informal grouping based on obvious features' },
                { period: '1735', milestone: 'Linnaeus - Systema Naturae, binomial nomenclature' },
                { period: '1859', milestone: 'Darwin - Origin of Species, evolutionary basis' },
                { period: '1950s-1960s', milestone: 'Hennig - Cladistics, phylogenetic systematics' },
                { period: '1977-1990', milestone: 'Woese - Three-domain system based on rRNA' },
                { period: '1990s-present', milestone: 'Molecular phylogenetics revolution' }
            ],
            'Species Description': [
                { step: 'Discovery', phase: 'Collection of new/unknown specimen' },
                { step: 'Comparison', phase: 'Compare to known species and type specimens' },
                { step: 'Analysis', phase: 'Morphological and molecular analysis' },
                { step: 'Description', phase: 'Write formal description with diagnosis' },
                { step: 'Designation', phase: 'Designate holotype and paratypes' },
                { step: 'Publication', phase: 'Publish in peer-reviewed journal' },
                { step: 'Registration', phase: 'Register name in official database' }
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

        // Add main categories
        if (this.currentContent.mainCategories) {
            hierarchy.children = this.currentContent.mainCategories.map(cat => ({
                name: cat,
                type: 'category'
            }));
        }

        // Add specific content types
        if (this.currentContent.domains) {
            hierarchy.children.push({
                name: 'Domains',
                type: 'section',
                count: Object.keys(this.currentContent.domains).length
            });
        }

        if (this.currentContent.hierarchy) {
            hierarchy.children.push({
                name: 'Hierarchical Ranks',
                type: 'section',
                count: this.currentContent.hierarchy.majorRanks?.length || 0
            });
        }

        if (this.currentContent.speciesConcepts || this.currentContent.majorConcepts) {
            const concepts = this.currentContent.speciesConcepts || this.currentContent.majorConcepts;
            hierarchy.children.push({
                name: 'Species Concepts',
                type: 'section',
                count: Object.keys(concepts).length
            });
        }

        if (this.currentContent.methods) {
            hierarchy.children.push({
                name: 'Methods',
                type: 'section',
                count: Object.keys(this.currentContent.methods).length
            });
        }

        return hierarchy;
    }

    // VALIDATION AND VERIFICATION

    validateTaxonomyContent(content) {
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
            content.history || 
            content.domains || 
            content.hierarchy || 
            content.speciesConcepts || 
            content.methods ||
            content.dataTypes;

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
        if (this.currentContent.comparisons || this.currentContent.comparison || this.currentContent.comparisonTable) score += 1;
        
        // Main content
        const hasMainContent = 
            this.currentContent.history || 
            this.currentContent.domains || 
            this.currentContent.hierarchy ||
            this.currentContent.speciesConcepts ||
            this.currentContent.methods;
        if (hasMainContent) score += 3;

        // Additional depth
        if (this.currentContent.keyDefinitions) score += 1;
        if (this.currentContent.principles) score += 1;

        return Math.round((score / maxScore) * 100);
    }

    getContentQualityMetrics() {
        return {
            completeness: this.calculateContentCompleteness(),
            hasExamples: !!this.currentContent?.examples,
            hasComparisons: !!(this.currentContent?.comparisons || this.currentContent?.comparison || this.currentContent?.comparisonTable),
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

        if (content.keyDefinitions) {
            markdown += `## Key Definitions\n\n`;
            Object.entries(content.keyDefinitions).forEach(([term, definition]) => {
                markdown += `**${term}**: ${definition}\n\n`;
            });
        }

        if (content.domains) {
            markdown += `## Domains of Life\n\n`;
            Object.entries(content.domains).forEach(([domain, info]) => {
                markdown += `### ${domain}\n`;
                markdown += `**Type:** ${info.type}\n\n`;
                if (info.characteristics) {
                    markdown += `**Characteristics:**\n`;
                    info.characteristics.forEach(char => {
                        markdown += `- ${char}\n`;
                    });
                    markdown += `\n`;
                }
            });
        }

        if (content.applications) {
            markdown += `## Applications\n\n`;
            content.applications.forEach(app => {
                markdown += `- ${app}\n`;
            });
            markdown += `\n`;
        }

        return markdown;
    }

    convertToHTML(content) {
        let html = `<div class="taxonomy-content">\n`;
        html += `  <h1>${content.topic}</h1>\n`;

        if (content.summary) {
            html += `  <p class="summary">${content.summary}</p>\n`;
        }

        if (content.keyDefinitions) {
            html += `  <section class="key-definitions">\n`;
            html += `    <h2>Key Definitions</h2>\n`;
            html += `    <dl>\n`;
            Object.entries(content.keyDefinitions).forEach(([term, definition]) => {
                html += `      <dt>${term}</dt>\n`;
                html += `      <dd>${definition}</dd>\n`;
            });
            html += `    </dl>\n`;
            html += `  </section>\n`;
        }

        if (content.domains) {
            html += `  <section class="domains">\n`;
            html += `    <h2>Domains of Life</h2>\n`;
            Object.entries(content.domains).forEach(([domain, info]) => {
                html += `    <article>\n`;
                html += `      <h3>${domain}</h3>\n`;
                html += `      <p><strong>Type:</strong> ${info.type}</p>\n`;
                if (info.characteristics) {
                    html += `      <ul>\n`;
                    info.characteristics.forEach(char => {
                        html += `        <li>${char}</li>\n`;
                    });
                    html += `      </ul>\n`;
                }
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
            if (this.currentContent.domains) {
                Object.entries(this.currentContent.domains).forEach(([domain, info]) => {
                    if (JSON.stringify(info).toLowerCase().includes(queryLower)) {
                        results.matches.push({
                            type: 'domain',
                            name: domain,
                            content: info
                        });
                    }
                });
            }

            if (this.currentContent.keyDefinitions) {
                Object.entries(this.currentContent.keyDefinitions).forEach(([term, definition]) => {
                    if (term.toLowerCase().includes(queryLower) || definition.toLowerCase().includes(queryLower)) {
                        results.matches.push({
                            type: 'definition',
                            term: term,
                            definition: definition
                        });
                    }
                });
            }

            if (this.currentContent.speciesConcepts) {
                Object.entries(this.currentContent.speciesConcepts).forEach(([key, concept]) => {
                    if (JSON.stringify(concept).toLowerCase().includes(queryLower)) {
                        results.matches.push({
                            type: 'species_concept',
                            name: concept.name,
                            content: concept
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
        if (this.currentContent.domains) {
            Object.entries(this.currentContent.domains).forEach(([name, info]) => {
                if (info.type?.toLowerCase().includes(category.toLowerCase())) {
                    filtered.items.push({ name, ...info });
                }
            });
        }

        if (this.currentContent.hierarchy?.majorRanks) {
            const matching = this.currentContent.hierarchy.majorRanks.filter(rank => 
                rank.description?.toLowerCase().includes(category.toLowerCase())
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
        if (this.currentContent.domains) {
            summary.itemCount += Object.keys(this.currentContent.domains).length;
            summary.coverage.domains = Object.keys(this.currentContent.domains).length;
        }

        if (this.currentContent.hierarchy?.majorRanks) {
            summary.itemCount += this.currentContent.hierarchy.majorRanks.length;
            summary.coverage.ranks = this.currentContent.hierarchy.majorRanks.length;
        }

        if (this.currentContent.speciesConcepts || this.currentContent.majorConcepts) {
            const concepts = this.currentContent.speciesConcepts || this.currentContent.majorConcepts;
            summary.itemCount += Object.keys(concepts).length;
            summary.coverage.concepts = Object.keys(concepts).length;
        }

        // Extract key points
        if (this.currentContent.mainCategories) {
            summary.keyPoints.push(...this.currentContent.mainCategories);
        }

        if (this.currentContent.concepts) {
            summary.keyPoints.push(...this.currentContent.concepts.slice(0, 3));
        }

        return summary;
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
        return Object.entries(this.taxonomyTopics).map(([key, topic]) => ({
            id: key,
            name: topic.name,
            category: topic.category,
            description: topic.description
        }));
    }

    getTopicDetails(topicId) {
        const topic = this.taxonomyTopics[topicId];
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
export default EnhancedTaxonomyClassificationWorkbook;
