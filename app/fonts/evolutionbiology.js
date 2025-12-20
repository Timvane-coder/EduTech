
// Enhanced Evolution Biology Workbook - Comprehensive Evolution Content System
import * as math from 'mathjs';

export class EnhancedEvolutionBiologyWorkbook {
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

        this.evolutionSymbols = this.initializeEvolutionSymbols();
        this.setThemeColors();
        this.initializeEvolutionTopics();
        this.initializeMisconceptionDatabase();
        this.initializeExplanationTemplates();
        this.initializeEvolutionLessons();
    }

    setThemeColors() {
        const themes = {
            biological: {
                background: '#ffffff',
                gridColor: '#c0c0c0',
                headerBg: '#1565c0',
                headerText: '#ffffff',
                sectionBg: '#bbdefb',
                sectionText: '#0d47a1',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e3f2fd',
                resultText: '#1565c0',
                definitionBg: '#fff9c4',
                definitionText: '#f57f17',
                stepBg: '#e1f5fe',
                stepText: '#01579b',
                borderColor: '#42a5f5',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#fff3e0'
            },
            scientific: {
                background: '#f8f9fa',
                gridColor: '#4682b4',
                headerBg: '#0d47a1',
                headerText: '#ffffff',
                sectionBg: '#90caf9',
                sectionText: '#01579b',
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

    initializeEvolutionSymbols() {
        return {
            // Common evolution symbols
            'delta': 'Δ',
            'arrow': '→',
            'doubleArrow': '↔',
            'plus': '+',
            'minus': '−',
            'multiply': '×',
            'divide': '÷',
            'approximately': '≈',
            'notEqual': '≠',
            'greaterThan': '>',
            'lessThan': '<',
            'infinity': '∞',
            'proportional': '∝',
            'sum': 'Σ',
            // Hardy-Weinberg notation
            'p': 'p',
            'q': 'q',
            'p2': 'p²',
            'q2': 'q²',
            '2pq': '2pq',
            // Scientific notation
            'squared': '²',
            'cubed': '³',
            'degree': '°'
        };
    }

    initializeEvolutionTopics() {
        this.evolutionTopics = {
            // 1. Natural Selection
            natural_selection: {
                patterns: [
                    /natural.*selection/i,
                    /darwin|darwinian/i,
                    /survival.*fittest/i,
                    /selection.*pressure/i
                ],
                handler: this.handleNaturalSelection.bind(this),
                name: 'Natural Selection',
                category: 'evolution_mechanisms',
                description: 'Process by which organisms better adapted to their environment survive and reproduce'
            },

            // 2. Evolution Mechanisms
            evolution_mechanisms: {
                patterns: [
                    /evolution.*mechanism/i,
                    /genetic.*drift|gene.*flow/i,
                    /mutation.*selection/i,
                    /evolutionary.*force/i
                ],
                handler: this.handleEvolutionMechanisms.bind(this),
                name: 'Evolution Mechanisms',
                category: 'evolution_mechanisms',
                description: 'Various processes that drive evolutionary change'
            },

            // 3. Hardy-Weinberg Equilibrium
            hardy_weinberg: {
                patterns: [
                    /hardy.*weinberg/i,
                    /allele.*frequency/i,
                    /genetic.*equilibrium/i,
                    /population.*genetics/i
                ],
                handler: this.handleHardyWeinberg.bind(this),
                name: 'Hardy-Weinberg Equilibrium',
                category: 'population_genetics',
                description: 'Mathematical model describing allele frequencies in non-evolving populations'
            },

            // 4. Speciation
            speciation: {
                patterns: [
                    /speciation/i,
                    /species.*formation/i,
                    /reproductive.*isolation/i,
                    /allopatric|sympatric/i
                ],
                handler: this.handleSpeciation.bind(this),
                name: 'Speciation',
                category: 'macroevolution',
                description: 'Process by which new species form from existing populations'
            },

            // 5. Evidence for Evolution
            evidence_evolution: {
                patterns: [
                    /evidence.*evolution/i,
                    /fossil.*record/i,
                    /comparative.*anatomy|homologous/i,
                    /biogeography|molecular.*evidence/i
                ],
                handler: this.handleEvidenceEvolution.bind(this),
                name: 'Evidence for Evolution',
                category: 'evolutionary_evidence',
                description: 'Scientific evidence supporting evolutionary theory'
            },

            // 6. Adaptation
            adaptation: {
                patterns: [
                    /adaptation/i,
                    /fitness|selective.*advantage/i,
                    /environmental.*adaptation/i,
                    /trait.*evolution/i
                ],
                handler: this.handleAdaptation.bind(this),
                name: 'Adaptation',
                category: 'evolution_mechanisms',
                description: 'Traits that enhance survival and reproduction in specific environments'
            },

            // 7. Genetic Variation
            genetic_variation: {
                patterns: [
                    /genetic.*variation|variability/i,
                    /polymorphism|diversity/i,
                    /source.*variation/i,
                    /genetic.*diversity/i
                ],
                handler: this.handleGeneticVariation.bind(this),
                name: 'Genetic Variation',
                category: 'population_genetics',
                description: 'Differences in genetic composition among individuals'
            },

            // 8. Phylogeny and Systematics
            phylogeny: {
                patterns: [
                    /phylogeny|phylogenetic/i,
                    /evolutionary.*tree|cladogram/i,
                    /systematics|taxonomy/i,
                    /common.*ancestor/i
                ],
                handler: this.handlePhylogeny.bind(this),
                name: 'Phylogeny and Systematics',
                category: 'evolutionary_relationships',
                description: 'Study of evolutionary relationships among organisms'
            },

            // 9. Microevolution
            microevolution: {
                patterns: [
                    /microevolution/i,
                    /population.*change/i,
                    /allele.*frequency.*change/i,
                    /small.*scale.*evolution/i
                ],
                handler: this.handleMicroevolution.bind(this),
                name: 'Microevolution',
                category: 'evolution_mechanisms',
                description: 'Small-scale evolutionary changes within populations'
            },

            // 10. Macroevolution
            macroevolution: {
                patterns: [
                    /macroevolution/i,
                    /large.*scale.*evolution/i,
                    /major.*evolutionary.*change/i,
                    /origin.*species/i
                ],
                handler: this.handleMacroevolution.bind(this),
                name: 'Macroevolution',
                category: 'macroevolution',
                description: 'Large-scale evolutionary changes above the species level'
            },

            // 11. Coevolution
            coevolution: {
                patterns: [
                    /coevolution/i,
                    /mutualism.*evolution/i,
                    /predator.*prey.*evolution/i,
                    /reciprocal.*adaptation/i
                ],
                handler: this.handleCoevolution.bind(this),
                name: 'Coevolution',
                category: 'ecological_evolution',
                description: 'Reciprocal evolutionary changes between interacting species'
            },

            // 12. Evolutionary Developmental Biology
            evo_devo: {
                patterns: [
                    /evo.*devo|evolutionary.*development/i,
                    /hox.*gene/i,
                    /developmental.*constraint/i,
                    /heterochrony/i
                ],
                handler: this.handleEvoDevo.bind(this),
                name: 'Evolutionary Developmental Biology',
                category: 'evo_devo',
                description: 'Study of how developmental processes evolve'
            }
        };
    }

    initializeEvolutionLessons() {
        this.lessons = {
            natural_selection: {
                title: "Natural Selection: The Driving Force of Evolution",
                concepts: [
                    "Organisms produce more offspring than can survive",
                    "Individuals vary in traits that affect survival and reproduction",
                    "Advantageous traits become more common over generations",
                    "Natural selection leads to adaptation"
                ],
                theory: "Natural selection, proposed by Charles Darwin, is the process by which organisms with traits better suited to their environment are more likely to survive and reproduce, passing those advantageous traits to offspring. Over time, this leads to adaptation and evolutionary change.",
                keyDefinitions: {
                    "Natural Selection": "Differential survival and reproduction based on heritable variation",
                    "Fitness": "Reproductive success; ability to survive and reproduce",
                    "Adaptation": "Heritable trait that increases fitness in a specific environment",
                    "Selection Pressure": "Environmental factors that influence survival and reproduction",
                    "Directional Selection": "Selection favoring one extreme phenotype",
                    "Stabilizing Selection": "Selection favoring intermediate phenotypes",
                    "Disruptive Selection": "Selection favoring both extreme phenotypes"
                },
                mainCategories: [
                    "Variation in populations",
                    "Differential survival and reproduction",
                    "Inheritance of advantageous traits",
                    "Types of natural selection"
                ],
                applications: [
                    "Antibiotic resistance in bacteria",
                    "Pesticide resistance in insects",
                    "Industrial melanism in peppered moths",
                    "Darwin's finches beak evolution",
                    "Conservation biology and endangered species"
                ]
            },

            evolution_mechanisms: {
                title: "Mechanisms of Evolution",
                concepts: [
                    "Multiple mechanisms drive evolutionary change",
                    "Natural selection is only one mechanism of evolution",
                    "Random processes can cause evolution",
                    "Gene flow connects populations genetically"
                ],
                theory: "Evolution occurs through several mechanisms: natural selection (non-random survival), genetic drift (random changes), gene flow (migration), and mutation (source of new variation). These mechanisms can work together or in opposition to shape allele frequencies.",
                keyDefinitions: {
                    "Genetic Drift": "Random changes in allele frequencies, especially in small populations",
                    "Gene Flow": "Movement of alleles between populations through migration",
                    "Mutation": "Random changes in DNA that create new alleles",
                    "Bottleneck Effect": "Genetic drift due to drastic population reduction",
                    "Founder Effect": "Genetic drift when small group establishes new population",
                    "Migration": "Movement of individuals between populations"
                },
                mainCategories: [
                    "Natural selection (non-random)",
                    "Genetic drift (random)",
                    "Gene flow (migration)",
                    "Mutation (creates variation)"
                ],
                applications: [
                    "Conservation genetics of endangered species",
                    "Understanding human genetic diversity",
                    "Island biogeography",
                    "Crop domestication and breeding"
                ]
            },

            hardy_weinberg: {
                title: "Hardy-Weinberg Equilibrium",
                concepts: [
                    "Model describes non-evolving populations",
                    "p + q = 1 (allele frequencies)",
                    "p² + 2pq + q² = 1 (genotype frequencies)",
                    "Five conditions required for equilibrium"
                ],
                theory: "The Hardy-Weinberg principle states that allele and genotype frequencies remain constant from generation to generation in the absence of evolutionary influences. It provides a null hypothesis for detecting evolution.",
                keyDefinitions: {
                    "p": "Frequency of dominant allele",
                    "q": "Frequency of recessive allele",
                    "p²": "Frequency of homozygous dominant genotype",
                    "2pq": "Frequency of heterozygous genotype",
                    "q²": "Frequency of homozygous recessive genotype",
                    "Allele Frequency": "Proportion of a specific allele in population"
                },
                conditions: [
                    "No mutations occurring",
                    "Random mating (no sexual selection)",
                    "No gene flow (no migration)",
                    "Large population size (no genetic drift)",
                    "No natural selection"
                ],
                equations: {
                    alleleFrequency: "p + q = 1",
                    genotypeFrequency: "p² + 2pq + q² = 1"
                },
                applications: [
                    "Calculating carrier frequencies for genetic diseases",
                    "Detecting evolution in populations",
                    "Population genetics studies",
                    "Conservation genetics"
                ]
            },

            speciation: {
                title: "Speciation: The Origin of New Species",
                concepts: [
                    "Speciation is the formation of new species",
                    "Reproductive isolation is key to speciation",
                    "Geographic barriers can lead to speciation",
                    "Speciation can occur without geographic separation"
                ],
                theory: "Speciation occurs when populations become reproductively isolated and diverge genetically to the point where they can no longer interbreed. This can happen through geographic isolation (allopatric) or within the same area (sympatric).",
                keyDefinitions: {
                    "Species": "Group of organisms that can interbreed and produce fertile offspring",
                    "Reproductive Isolation": "Barriers preventing gene flow between populations",
                    "Allopatric Speciation": "Speciation due to geographic separation",
                    "Sympatric Speciation": "Speciation without geographic separation",
                    "Parapatric Speciation": "Speciation in adjacent populations",
                    "Polyploidy": "Having extra sets of chromosomes (common in plants)"
                },
                isolatingMechanisms: {
                    prezygotic: [
                        "Habitat isolation",
                        "Temporal isolation",
                        "Behavioral isolation",
                        "Mechanical isolation",
                        "Gametic isolation"
                    ],
                    postzygotic: [
                        "Reduced hybrid viability",
                        "Reduced hybrid fertility",
                        "Hybrid breakdown"
                    ]
                },
                applications: [
                    "Understanding biodiversity patterns",
                    "Island evolution (Galápagos, Hawaii)",
                    "Polyploid crops and agriculture",
                    "Conservation of distinct populations"
                ]
            },
            evidence_evolution: {
                title: "Evidence for Evolution",
                concepts: [
                    "Multiple lines of evidence support evolution",
                    "Fossils show change over time",
                    "Comparative anatomy reveals common ancestry",
                    "Molecular evidence confirms evolutionary relationships"
                ],
                theory: "Evolution is supported by converging evidence from multiple scientific disciplines including paleontology, comparative anatomy, biogeography, molecular biology, and direct observation of evolutionary change.",
                keyDefinitions: {
                    "Fossil Record": "Chronological collection of fossils showing life's history",
                    "Homologous Structures": "Similar structures inherited from common ancestor",
                    "Analogous Structures": "Similar structures due to convergent evolution",
                    "Vestigial Structures": "Reduced structures with little or no function",
                    "Transitional Fossils": "Fossils showing intermediate features",
                    "Molecular Clock": "Estimate of divergence time based on DNA differences"
                },
                evidenceTypes: [
                    "Fossil record",
                    "Comparative anatomy",
                    "Comparative embryology",
                    "Molecular biology (DNA, proteins)",
                    "Biogeography",
                    "Direct observation"
                ],
                applications: [
                    "Phylogenetic reconstruction",
                    "Dating evolutionary events",
                    "Understanding human evolution",
                    "Medical research and drug development"
                ]
            },

            adaptation: {
                title: "Adaptation and Fitness",
                concepts: [
                    "Adaptations are traits that increase fitness",
                    "Adaptations result from natural selection",
                    "Not all traits are adaptive",
                    "Fitness is relative to environment"
                ],
                theory: "Adaptations are heritable traits that have evolved through natural selection because they enhance survival or reproduction in specific environments. Fitness measures reproductive success, not physical strength.",
                keyDefinitions: {
                    "Adaptation": "Heritable trait increasing fitness in specific environment",
                    "Fitness": "Reproductive success relative to others in population",
                    "Exaptation": "Trait evolved for one function, used for another",
                    "Trade-off": "Benefit in one trait comes at cost to another",
                    "Local Adaptation": "Adaptation to specific local environment",
                    "Maladaptation": "Trait reducing fitness in current environment"
                },
                types: [
                    "Structural adaptations (physical features)",
                    "Physiological adaptations (body functions)",
                    "Behavioral adaptations (actions)",
                    "Molecular adaptations (proteins, enzymes)"
                ],
                applications: [
                    "Understanding antibiotic resistance",
                    "Predicting responses to climate change",
                    "Agricultural pest management",
                    "Conservation planning"
                ]
            },

            genetic_variation: {
                title: "Genetic Variation: The Raw Material of Evolution",
                concepts: [
                    "Variation is essential for evolution",
                    "Multiple sources create genetic variation",
                    "Variation can be measured at different levels",
                    "Some variation is selectively neutral"
                ],
                theory: "Genetic variation provides the raw material for natural selection and evolution. Without variation, populations cannot evolve. Variation arises through mutation, sexual reproduction, and gene flow.",
                keyDefinitions: {
                    "Genetic Variation": "Differences in DNA sequences among individuals",
                    "Polymorphism": "Multiple forms of a gene in a population",
                    "Heterozygosity": "Having two different alleles for a gene",
                    "Neutral Variation": "Genetic differences not affecting fitness",
                    "Balancing Selection": "Selection maintaining multiple alleles",
                    "Genetic Load": "Accumulation of deleterious mutations"
                },
                sources: [
                    "Mutation (creates new alleles)",
                    "Sexual reproduction (recombination)",
                    "Gene flow (immigration)",
                    "Horizontal gene transfer (bacteria)"
                ],
                applications: [
                    "Conservation genetics",
                    "Breeding programs",
                    "Understanding disease susceptibility",
                    "Forensic genetics"
                ]
            },

            phylogeny: {
                title: "Phylogeny and Evolutionary Relationships",
                concepts: [
                    "Phylogenies show evolutionary relationships",
                    "Common ancestry connects all life",
                    "Multiple methods reconstruct phylogenies",
                    "Phylogenies are hypotheses that can be tested"
                ],
                theory: "Phylogeny is the evolutionary history of organisms. Phylogenetic trees (cladograms) depict hypothesized relationships based on shared characteristics and common ancestry. Modern phylogenies use molecular data extensively.",
                keyDefinitions: {
                    "Phylogeny": "Evolutionary history of organisms",
                    "Cladogram": "Branching diagram showing evolutionary relationships",
                    "Common Ancestor": "Ancestral species from which descendants evolved",
                    "Monophyletic Group": "Group containing ancestor and all descendants",
                    "Synapomorphy": "Shared derived characteristic",
                    "Outgroup": "Species used to root phylogenetic tree"
                },
                methods: [
                    "Morphological comparison",
                    "DNA sequence analysis",
                    "Protein sequence analysis",
                    "Fossil evidence integration"
                ],
                applications: [
                    "Classification of organisms",
                    "Understanding disease evolution",
                    "Conservation prioritization",
                    "Biogeographic analysis"
                ]
            },

            microevolution: {
                title: "Microevolution: Changes Within Populations",
                concepts: [
                    "Microevolution is change in allele frequencies",
                    "Observable in real-time",
                    "Foundation for macroevolution",
                    "Occurs in all populations"
                ],
                theory: "Microevolution refers to small-scale evolutionary changes within populations over short time periods, primarily changes in allele frequencies. It's observable and measurable within human lifetimes.",
                keyDefinitions: {
                    "Microevolution": "Changes in allele frequencies within populations",
                    "Allele Frequency": "Proportion of specific allele in population",
                    "Gene Pool": "All alleles in a population",
                    "Population": "Group of interbreeding individuals",
                    "Selective Sweep": "Rapid increase of beneficial allele",
                    "Linkage Disequilibrium": "Non-random association of alleles"
                },
                examples: [
                    "Antibiotic resistance in bacteria",
                    "Industrial melanism in moths",
                    "DDT resistance in insects",
                    "Lactose tolerance in humans",
                    "Sickle cell allele frequency changes"
                ],
                applications: [
                    "Understanding drug resistance",
                    "Pest management",
                    "Breeding programs",
                    "Conservation genetics"
                ]
            },

            macroevolution: {
                title: "Macroevolution: Large-Scale Evolutionary Change",
                concepts: [
                    "Macroevolution involves species-level changes",
                    "Results from accumulated microevolution",
                    "Produces major evolutionary innovations",
                    "Studied through fossil record and comparative biology"
                ],
                theory: "Macroevolution encompasses evolutionary changes at or above the species level, including the origin of new species, adaptive radiations, and extinction. It occurs over long time scales and produces the diversity of life.",
                keyDefinitions: {
                    "Macroevolution": "Large-scale evolution above species level",
                    "Adaptive Radiation": "Rapid diversification into many species",
                    "Extinction": "Complete disappearance of species",
                    "Mass Extinction": "Widespread extinction of many species",
                    "Punctuated Equilibrium": "Long stasis interrupted by rapid change",
                    "Gradualism": "Slow, steady evolutionary change"
                },
                patterns: [
                    "Adaptive radiations",
                    "Mass extinctions",
                    "Convergent evolution",
                    "Coevolution",
                    "Evolutionary trends"
                ],
                applications: [
                    "Understanding biodiversity patterns",
                    "Predicting responses to environmental change",
                    "Conservation planning",
                    "Studying human evolution"
                ]
            },

            coevolution: {
                title: "Coevolution: Reciprocal Evolutionary Change",
                concepts: [
                    "Species evolve in response to each other",
                    "Creates specialized relationships",
                    "Can lead to evolutionary arms races",
                    "Important in shaping biodiversity"
                ],
                theory: "Coevolution occurs when two or more species reciprocally affect each other's evolution. This can occur in predator-prey, parasite-host, and mutualistic relationships.",
                keyDefinitions: {
                    "Coevolution": "Reciprocal evolutionary changes between species",
                    "Mutualism": "Both species benefit",
                    "Parasitism": "One benefits, one harmed",
                    "Predation": "One eats, one eaten",
                    "Arms Race": "Escalating adaptations and counter-adaptations",
                    "Diffuse Coevolution": "Multiple species coevolving together"
                },
                examples: [
                    "Flowering plants and pollinators",
                    "Predators and prey",
                    "Parasites and hosts",
                    "Mutualistic symbionts",
                    "Herbivores and plants"
                ],
                applications: [
                    "Understanding ecosystem dynamics",
                    "Pest management strategies",
                    "Conservation of mutualistic relationships",
                    "Studying disease evolution"
                ]
            },

            evo_devo: {
                title: "Evolutionary Developmental Biology (Evo-Devo)",
                concepts: [
                    "Development and evolution are intimately connected",
                    "Small genetic changes can have large effects",
                    "Developmental genes are highly conserved",
                    "Constraints shape evolutionary possibilities"
                ],
                theory: "Evo-devo studies how changes in developmental processes produce evolutionary change. It reveals that development constrains and channels evolution, and that regulatory genes play crucial roles in morphological evolution.",
                keyDefinitions: {
                    "Hox Genes": "Master regulatory genes controlling body plan",
                    "Heterochrony": "Changes in timing of developmental events",
                    "Heterotopy": "Changes in location of developmental events",
                    "Developmental Constraint": "Limits on evolutionary change due to development",
                    "Modularity": "Semi-independent developmental units",
                    "Pleiotropy": "One gene affecting multiple traits"
                },
                keyGenes: [
                    "Hox genes (body segmentation)",
                    "Pax6 (eye development)",
                    "Sonic hedgehog (limb development)",
                    "BMP genes (bone formation)"
                ],
                applications: [
                    "Understanding morphological evolution",
                    "Medical genetics and birth defects",
                    "Evolutionary origins of novelty",
                    "Predicting evolutionary trajectories"
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            natural_selection: {
                'Mechanism': [
                    'Thinking organisms evolve during their lifetime (individuals don\'t evolve, populations do)',
                    'Believing evolution is goal-directed or purposeful (it\'s not)',
                    'Assuming evolution always produces "better" organisms (it produces better-adapted, not "better")',
                    'Thinking natural selection acts on individuals (it acts on populations over time)'
                ],
                'Survival of the Fittest': [
                    'Interpreting "fittest" as strongest or healthiest (it means best reproductive success)',
                    'Believing all strong organisms survive (fitness is relative to environment)',
                    'Thinking fitness is absolute (it\'s context-dependent)'
                ],
                'Process': [
                    'Believing organisms adapt during lifetime (adaptation is evolutionary, not physiological)',
                    'Thinking needs drive evolution (variation exists before selection acts)',
                    'Assuming evolution is random (mutation is random, selection is not)'
                ]
            },
            evolution_mechanisms: {
                'Genetic Drift': [
                    'Thinking drift only affects small populations (it\'s just stronger in small ones)',
                    'Believing drift is adaptive (it\'s random)',
                    'Confusing drift with natural selection (drift is random, selection is not)'
                ],
                'Gene Flow': [
                    'Thinking gene flow always increases variation (it can homogenize populations)',
                    'Believing migration always helps populations (it can introduce maladaptive alleles)',
                    'Confusing gene flow with genetic drift'
                ],
                'Mutation': [
                    'Believing mutations are always harmful (most are neutral)',
                    'Thinking mutations occur to meet needs (they\'re random)',
                    'Assuming beneficial mutations are common (they\'re rare)'
                ]
            },
            hardy_weinberg: {
                'Equilibrium': [
                    'Thinking real populations are in equilibrium (they rarely are)',
                    'Believing equilibrium means no variation (it means no change in frequencies)',
                    'Confusing equilibrium with lack of evolution (equilibrium IS lack of evolution)'
                ],
                'Calculations': [
                    'Mixing up p and q (p is typically dominant allele)',
                    'Forgetting p + q = 1 before calculating genotypes',
                    'Not recognizing when conditions are violated'
                ],
                'Application': [
                    'Thinking Hardy-Weinberg describes evolution (it describes NON-evolution)',
                    'Using it when conditions aren\'t met',
                    'Misinterpreting deviations from equilibrium'
                ]
            },
            speciation: {
                'Species Concept': [
                    'Thinking all organisms use biological species concept (doesn\'t work for asexual)',
                    'Believing species boundaries are always clear (they\'re often fuzzy)',
                    'Assuming species can never interbreed (some can produce hybrids)'
                ],
                'Process': [
                    'Thinking speciation is always slow (can be rapid, especially polyploidy)',
                    'Believing geographic separation is always required (sympatric speciation occurs)',
                    'Assuming speciation is complete reproductive isolation (it\'s a continuum)'
                ],
                'Types': [
                    'Confusing allopatric and sympatric speciation',
                    'Thinking polyploidy only occurs in plants (rare but occurs in animals)',
                    'Believing all island species formed allopatrically'
                ]
            },
            evidence_evolution: {
                'Fossils': [
                    'Thinking fossil record should be complete (fossilization is rare)',
                    'Believing absence of transitional fossils disproves evolution (many have been found)',
                    'Assuming fossils are only evidence (molecular evidence is extensive)'
                ],
                'Homology': [
                    'Confusing homologous and analogous structures',
                    'Thinking similar function means homology (convergent evolution exists)',
                    'Believing vestigial structures have no function (reduced function, not zero)'
                ],
                'Molecular Evidence': [
                    'Thinking molecular clock is perfectly regular (rates vary)',
                    'Assuming more DNA differences means no relationship (degree of difference matters)',
                    'Believing molecular and fossil evidence always agree (they sometimes conflict)'
                ]
            },
            adaptation: {
                'Fitness': [
                    'Thinking fitness means physical strength (it means reproductive success)',
                    'Believing individual organisms can become adapted (populations adapt)',
                    'Assuming fitness is constant across environments (it\'s environment-dependent)',
                    'Thinking all traits are adaptive (many are neutral or byproducts)'
                ],
                'Process': [
                    'Believing organisms adapt to meet needs (variation exists first, then selection)',
                    'Thinking adaptation is immediate (takes many generations)',
                    'Assuming perfect adaptation is possible (trade-offs and constraints exist)',
                    'Believing evolution produces optimal solutions (produces "good enough")'
                ],
                'Examples': [
                    'Thinking giraffe necks evolved because they stretched (Lamarckism)',
                    'Believing use or disuse drives evolution (variation and selection do)',
                    'Assuming all differences between species are adaptive (some are neutral)'
                ]
            },
            genetic_variation: {
                'Sources': [
                    'Thinking natural selection creates variation (it acts on existing variation)',
                    'Believing all variation is genetic (some is environmental)',
                    'Assuming more variation is always better (can be costly)',
                    'Thinking mutation rates can increase to meet needs (they\'re relatively constant)'
                ],
                'Importance': [
                    'Believing populations can evolve without variation (variation is essential)',
                    'Thinking all genetic variation is visible (much is hidden in heterozygotes)',
                    'Assuming variation is quickly lost (some is maintained by selection)'
                ],
                'Measurement': [
                    'Confusing genetic and phenotypic variation',
                    'Thinking low diversity means recent origin (could be bottleneck)',
                    'Assuming all DNA differences are important (much is neutral)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use side-by-side diagrams to highlight differences',
                effectiveness: 'High for comparing mechanisms and processes'
            },
            analogy: {
                method: 'Relate evolutionary concepts to familiar examples',
                effectiveness: 'High for abstract concepts like fitness and adaptation'
            },
            step_by_step: {
                method: 'Break down evolutionary processes into sequential steps',
                effectiveness: 'High for understanding natural selection and speciation'
            },
            contrast_table: {
                method: 'Create comparison tables showing key differences',
                effectiveness: 'High for distinguishing similar concepts'
            },
            calculation_example: {
                method: 'Work through Hardy-Weinberg calculations step-by-step',
                effectiveness: 'High for mathematical concepts'
            },
            timeline: {
                method: 'Show evolutionary events on geological timescale',
                effectiveness: 'High for understanding macroevolution'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            mechanistic: {
                focus: 'How processes work and mechanisms of change',
                language: 'process-oriented and causal'
            },
            historical: {
                focus: 'Timeline of events and historical development',
                language: 'temporal and narrative'
            },
            comparative: {
                focus: 'Similarities and differences between concepts',
                language: 'contrastive and analytical'
            },
            mathematical: {
                focus: 'Quantitative relationships and calculations',
                language: 'precise and equation-based'
            },
            evidence_based: {
                focus: 'Scientific evidence supporting concepts',
                language: 'empirical and observational'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential information only',
                examples: 'concrete and familiar',
                math: 'minimal calculations'
            },
            intermediate: {
                vocabulary: 'standard biological terms',
                detail: 'main concepts with explanations',
                examples: 'mix of familiar and technical',
                math: 'basic Hardy-Weinberg problems'
            },
            detailed: {
                vocabulary: 'full scientific terminology',
                detail: 'comprehensive with mechanisms',
                examples: 'technical and research-based',
                math: 'complex population genetics'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery approach',
                examples: 'carefully sequenced difficulty',
                math: 'step-by-step with explanations'
            }
        };
    }

    // MAIN HANDLER METHOD
    handleEvolutionProblem(config) {
        const { topic, parameters, subTopic, context } = config;

        try {
            // Parse the evolution query
            this.currentProblem = this.parseEvolutionProblem(topic, parameters, subTopic, context);

            // Get content based on topic
            this.currentContent = this.getEvolutionContent(this.currentProblem);

            // Generate content steps/sections
            this.contentSteps = this.generateEvolutionContent(this.currentProblem, this.currentContent);

            // Generate diagram data if applicable
            this.generateEvolutionDiagramData();

            // Generate workbook
            this.generateEvolutionWorkbook();

            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                diagrams: this.diagramData
            };

        } catch (error) {
            throw new Error(`Failed to process evolution topic: ${error.message}`);
        }
    }

    parseEvolutionProblem(topic, parameters = {}, subTopic = null, context = {}) {
        let topicType = null;

        // Match topic to handler
        for (const [type, config] of Object.entries(this.evolutionTopics)) {
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
            throw new Error(`Unable to recognize evolution topic: ${topic}`);
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

    getEvolutionContent(problem) {
        const handler = this.evolutionTopics[problem.type]?.handler;
        if (!handler) {
            throw new Error(`No handler available for evolution topic: ${problem.type}`);
        }

        return handler(problem);
    }

    // TOPIC HANDLERS

    handleNaturalSelection(problem) {
        return {
            topic: "Natural Selection",
            definition: "Process by which organisms with traits better suited to their environment survive and reproduce at higher rates, leading to evolutionary change",
            proposedBy: "Charles Darwin (1859) in 'On the Origin of Species'",
            prerequisites: [
                "Overproduction: More offspring produced than can survive",
                "Variation: Individuals differ in heritable traits",
                "Differential survival: Some variants survive better than others",
                "Inheritance: Advantageous traits passed to offspring"
            ],
            mechanism: {
                step1: {
                    name: "Variation",
                    description: "Individuals in population vary in traits (size, color, speed, etc.)",
                    source: "Mutation, sexual reproduction, genetic recombination",
                    requirement: "Variation must be heritable (genetic)"
                },
                step2: {
                    name: "Overproduction",
                    description: "More offspring produced than environment can support",
                    result: "Competition for limited resources",
                    example: "A single salmon can produce thousands of eggs, but few survive to adulthood"
                },
                step3: {
                    name: "Differential Survival and Reproduction",
                    description: "Individuals with advantageous traits survive and reproduce more successfully",
                    mechanism: "Selection pressure from environment, predators, competition, disease",
                    result: "Higher fitness for individuals with beneficial traits"
                },
                step4: {
                    name: "Inheritance",
                    description: "Advantageous traits passed to next generation",
                    result: "Increase in frequency of beneficial alleles over time",
                    outcome: "Population becomes better adapted to environment"
                }
            },
            typesOfSelection: {
                directional: {
                    description: "Selection favors one extreme phenotype",
                    effect: "Shifts population mean toward one direction",
                    examples: [
                        "Antibiotic resistance in bacteria",
                        "Larger size in horses over time",
                        "Beak size increase in Darwin's finches during drought"
                    ],
                    graph: "Bell curve shifts left or right"
                },
                stabilizing: {
                    description: "Selection favors intermediate phenotype",
                    effect: "Reduces variation, maintains status quo",
                    examples: [
                        "Human birth weight (very low or high risky)",
                        "Clutch size in birds",
                        "Number of eggs laid by parasitic wasps"
                    ],
                    graph: "Bell curve becomes narrower and taller"
                },
                disruptive: {
                    description: "Selection favors both extreme phenotypes",
                    effect: "Increases variation, creates bimodal distribution",
                    examples: [
                        "Beak sizes in African seedcracker finches",
                        "Light and dark coloration in some moths",
                        "Limpet shell color matching rock types"
                    ],
                    graph: "Bell curve splits into two peaks"
                },
                sexual: {
                    description: "Selection for traits that increase mating",
                    effect: "Can produce traits that reduce survival but increase reproduction",
                    examples: [
                        "Peacock tail feathers",
                        "Deer antlers",
                        "Bird of paradise displays"
                    ],
                    note: "Can conflict with natural selection for survival"
                },
                artificial: {
                    description: "Selective breeding by humans",
                    effect: "Rapid change in domesticated species",
                    examples: [
                        "Dog breeds from wolves",
                        "Agricultural crops from wild plants",
                        "Livestock breeding"
                    ],
                    note: "Demonstrates power of selection"
                }
            },
            classicExamples: [
                {
                    name: "Peppered Moths (Industrial Melanism)",
                    location: "England",
                    context: "Industrial Revolution pollution darkened trees",
                    before: "Light-colored moths more common (camouflaged on light bark)",
                    selectionPressure: "Bird predation",
                    after: "Dark-colored moths increased (camouflaged on soot-darkened bark)",
                    result: "Frequency of dark allele increased from <1% to >90% in polluted areas",
                    reversal: "When pollution decreased, light moths returned",
                    significance: "First documented example of evolution by natural selection"
                },
                {
                    name: "Darwin's Finches",
                    location: "Galápagos Islands",
                    context: "Different islands with different food sources",
                    variation: "Beak size and shape varied among individuals",
                    selectionPressure: "Food availability, especially during droughts",
                    observation: "Beak size changed measurably within decades",
                    mechanism: "Birds with beaks suited to available seeds survived better",
                    significance: "Observable evolution in real-time",
                    researchers: "Peter and Rosemary Grant (1970s-present)"
                },
                {
                    name: "Antibiotic Resistance",
                    organism: "Bacteria",
                    context: "Antibiotic use in medicine and agriculture",
                    variation: "Some bacteria have resistance genes",
                    selectionPressure: "Antibiotics kill susceptible bacteria",
                    result: "Resistant bacteria survive and multiply",
                    timeframe: "Can occur in days to weeks",
                    significance: "Major public health concern, clear example of evolution",
                    mechanism: "Pre-existing variation + strong selection = rapid evolution"
                }
            ],
            keyTerms: {
                fitness: "Reproductive success; number of offspring that survive to reproduce",
                adaptation: "Trait that increases fitness in specific environment",
                selectionPressure: "Environmental factor influencing survival/reproduction",
                selectionCoefficient: "Measure of strength of selection against genotype",
                relativeFITNESS: "Fitness of genotype relative to most fit genotype"
            },
            commonMisunderstandings: [
                "Selection doesn't create variation—it acts on existing variation",
                "Evolution isn't goal-directed—organisms don't evolve 'in order to' do something",
                "Individuals don't evolve—populations evolve over generations",
                "'Survival of the fittest' doesn't mean strongest—means best reproductive success",
                "Not all traits are adaptations—some are neutral or byproducts"
            ],
            category: 'natural_selection'
        };
    }

    handleEvolutionMechanisms(problem) {
        return {
            topic: "Mechanisms of Evolution",
            overview: "Evolution occurs through multiple mechanisms, both random and non-random, that change allele frequencies in populations over time",
            fourMainMechanisms: {
                naturalSelection: {
                    type: "Non-random",
                    description: "Differential survival and reproduction based on heritable traits",
                    effect: "Usually increases adaptation to environment",
                    speed: "Can be rapid or slow",
                    directionality: "Directional (toward better adaptation)",
                    example: "Antibiotic resistance in bacteria"
                },
                geneticDrift: {
                    type: "Random",
                    description: "Random changes in allele frequencies, especially in small populations",
                    effect: "Can increase or decrease any allele, regardless of fitness",
                    speed: "Stronger in smaller populations",
                    directionality: "Random (no direction)",
                    example: "Northern elephant seals (bottleneck reduced variation)"
                },
                geneFlow: {
                    type: "Can be random or non-random",
                    description: "Movement of alleles between populations through migration",
                    effect: "Tends to homogenize populations, increases variation within populations",
                    speed: "Depends on migration rate",
                    directionality: "Toward genetic similarity between populations",
                    example: "Human populations connected by migration"
                },
                mutation: {
                    type: "Random",
                    description: "Changes in DNA sequences creating new alleles",
                    effect: "Creates raw material for other mechanisms",
                    speed: "Usually slow (~10⁻⁸ to 10⁻⁹ per base per generation)",
                    directionality: "Random (no direction)",
                    example: "Sickle cell allele originated by mutation"
                }
            },
            detailedMechanisms: {
                naturalSelection: {
                    howItWorks: [
                        "Variation exists in population",
                        "Some variants have higher fitness",
                        "Advantageous alleles increase in frequency",
                        "Population becomes better adapted"
                    ],
                    types: "Directional, stabilizing, disruptive, sexual, artificial",
                    requirements: "Heritable variation in fitness",
                    strength: "Depends on selection coefficient and heritability",
                    note: "Only mechanism producing adaptation"
                },
                geneticDrift: {
                    howItWorks: [
                        "Random sampling of gametes each generation",
                        "Allele frequencies fluctuate randomly",
                        "Some alleles lost by chance",
                        "Effect stronger in small populations"
                    ],
                    types: {
                        bottleneck: {
                            description: "Drastic reduction in population size",
                            effect: "Severe reduction in genetic variation",
                            examples: [
                                "Northern elephant seals (hunted to ~20 individuals)",
                                "Cheetahs (low genetic diversity from ancient bottleneck)",
                                "Founder populations on islands"
                            ],
                            consequence: "Increased inbreeding, reduced evolutionary potential"
                        },
                        founderEffect: {
                            description: "Small group establishes new population",
                            effect: "New population has reduced variation from source",
                            examples: [
                                "Amish populations and genetic diseases",
                                "Island populations",
                                "Human colonization of Pacific islands"
                            ],
                            consequence: "Certain alleles over- or under-represented by chance"
                        }
                    },
                    mathematicalExpression: "Variance in allele frequency = pq / (2N)",
                    note: "Effect inversely proportional to population size"
                },
                geneFlow: {
                    howItWorks: [
                        "Individuals migrate between populations",
                        "Migrants breed with residents",
                        "Alleles from source population introduced",
                        "Populations become more genetically similar"
                    ],
                    effects: {
                        positive: [
                            "Increases genetic variation within populations",
                            "Can introduce beneficial alleles",
                            "Reduces inbreeding depression",
                            "Connects populations genetically"
                        ],
                        negative: [
                            "Can introduce maladaptive alleles",
                            "Opposes local adaptation",
                            "Can overwhelm local selection",
                            "May reduce unique adaptations"
                        ]
                    },
                    magnitude: "Depends on migration rate (m) and genetic difference",
                    examples: [
                        "Gene flow between dog breeds through interbreeding",
                        "Wind-pollinated plants with long-distance pollen dispersal",
                        "Fish populations connected by ocean currents"
                    ],
                    formula: "Δp = m(pm - p1) where m = migration rate"
                },
                mutation: {
                    howItWorks: [
                        "Errors during DNA replication",
                        "Damage from radiation or chemicals",
                        "Creates new alleles",
                        "Provides raw material for evolution"
                    ],
                    types: {
                        pointMutations: "Single nucleotide changes",
                        insertionsDeletions: "Addition or removal of nucleotides",
                        chromosomalMutations: "Large-scale changes (duplications, inversions, translocations)",
                        polyploidy: "Whole genome duplication (important in plants)"
                    },
                    rates: {
                        perBase: "~10⁻⁸ to 10⁻⁹ per generation",
                        perGene: "~10⁻⁵ to 10⁻⁶ per generation",
                        perGenome: "~100 mutations per human genome per generation"
                    },
                    effects: {
                        neutral: "~70% (no effect on fitness)",
                        deleterious: "~29% (reduce fitness)",
                        beneficial: "<1% (increase fitness)"
                    },
                    note: "Mutation alone is weak evolutionary force, but essential for variation"
                }
            },
            interactions: {
                selectionAndDrift: "Drift can overpower weak selection in small populations; selection dominates in large populations",
                selectionAndGeneFlow: "Gene flow can prevent local adaptation by introducing maladaptive alleles",
                mutationAndSelection: "Balance between mutation creating deleterious alleles and selection removing them",
                driftAndGeneFlow: "Gene flow counteracts drift by introducing variation"
            },
            relativeImportance: {
                smallPopulations: "Drift strongest, selection weakened",
                largePopulations: "Selection dominates, drift negligible",
                isolatedPopulations: "Drift and selection act without gene flow",
                connectedPopulations: "Gene flow prevents divergence"
            },
            comparisonTable: {
                headers: ["Mechanism", "Random?", "Effect", "Speed", "Adaptation?"],
                data: [
                    ["Natural Selection", "No", "Increases fitness", "Varies", "Yes"],
                    ["Genetic Drift", "Yes", "Random changes", "Stronger in small pops", "No"],
                    ["Gene Flow", "Mixed", "Homogenizes pops", "Depends on migration", "Sometimes"],
                    ["Mutation", "Yes", "Creates variation", "Slow", "Rarely directly"]
                ]
            },
            category: 'evolution_mechanisms'
        };
    }

    handleHardyWeinberg(problem) {
        return {
            topic: "Hardy-Weinberg Equilibrium",
            definition: "Mathematical model describing allele and genotype frequencies in a non-evolving population",
            proposedBy: "G.H. Hardy (mathematician) and Wilhelm Weinberg (physician) independently in 1908",
            purpose: "Provides null hypothesis for detecting evolution—if frequencies deviate from predictions, evolution is occurring",
            equations: {
                alleleFrequency: {
                    formula: "p + q = 1",
                    p: "Frequency of dominant allele (A)",
                    q: "Frequency of recessive allele (a)",
                    explanation: "Sum of all allele frequencies must equal 1 (100%)"
                },
                genotypeFrequency: {
                    formula: "p² + 2pq + q² = 1",
                    p2: "Frequency of AA (homozygous dominant)",
                    "2pq": "Frequency of Aa (heterozygous)",
                    q2: "Frequency of aa (homozygous recessive)",
                    derivation: "Expanded from (p + q)² = 1",
                    explanation: "Genotype frequencies in population at equilibrium"
                }
            },
            fiveConditions: {
                condition1: {
                    requirement: "No mutations",
                    reason: "Mutations change allele frequencies",
                    reality: "Mutations always occur, but usually at low rates"
                },
                condition2: {
                    requirement: "Random mating",
                    reason: "Non-random mating changes genotype (not allele) frequencies",
                    reality: "Assortative mating and inbreeding are common"
                },
                condition3: {
                    requirement: "No gene flow (migration)",
                    reason: "Migration changes allele frequencies",
                    reality: "Most populations experience some gene flow"
                },
                condition4: {
                    requirement: "Large (infinite) population size",
                    reason: "Genetic drift occurs in small populations",
                    reality: "All real populations are finite"
                },
                condition5: {
                    requirement: "No natural selection",
                    reason: "Selection changes allele frequencies",
                    reality: "Selection acts on most traits"
                }
            },
            applications: {
                detectingEvolution: "Deviations from H-W predictions indicate evolution is occurring",
                carrierFrequency: "Calculate carriers of recessive genetic diseases",
                forensics: "Estimate genotype frequencies in populations",
                conservation: "Monitor genetic diversity in endangered species"
            },
            solvingProblems: {
                givenGenotypeFrequencies: {
                    steps: [
                        "Count individuals of each genotype",
                        "Calculate genotype frequencies (divide by total)",
                        "Calculate q² (frequency of aa)",
                        "Take square root to get q",
                        "Calculate p = 1 - q",
                        "Check if p² + 2pq + q² = 1"
                    ],
                    example: {
                        population: "100 individuals: 49 AA, 42 Aa, 9 aa",
                        solution: [
                            "Genotype frequencies: AA = 0.49, Aa = 0.42, aa = 0.09",
                            "q² = 0.09, so q = √0.09 = 0.3",
                            "p = 1 - 0.3 = 0.7",
                            "Expected: p² = 0.49, 2pq = 0.42, q² = 0.09",
                            "Observed matches expected → population in H-W equilibrium"
                        ]
                    }
                },
                givenAlleleFrequencies: {
                    steps: [
                        "You're given p or q",
                        "Calculate other allele frequency (p = 1 - q)",
                        "Calculate genotype frequencies: p², 2pq, q²",
                        "Multiply by population size if needed"
                    ],
                    example: {
                        problem: "In population, frequency of A allele = 0.6. Find genotype frequencies.",
                        solution: [
                            "p = 0.6",
                            "q = 1 - 0.6 = 0.4",
                            "AA (p²) = 0.6² = 0.36 (36%)",
                            "Aa (2pq) = 2(0.6)(0.4) = 0.48 (48%)",
                            "aa (q²) = 0.4² = 0.16 (16%)",
                            "Check: 0.36 + 0.48 + 0.16 = 1.00 ✓"
                        ]
                    }
                },
                givenPhenotypeFrequencies: {
                    steps: [
                        "Identify recessive phenotype frequency (q²)",
                        "Calculate q = √q²",
                        "Calculate p = 1 - q",
                        "Calculate other genotype frequencies",
                        "Calculate carrier frequency (2pq)"
                    ],
                    example: {
                        problem: "4% of population has recessive trait. Find carrier frequency.",
                        solution: [
                            "Recessive phenotype (aa) = q² = 0.04",
                            "q = √0.04 = 0.2",
                            "p = 1 - 0.2 = 0.8",
                            "Carrier frequency (Aa) = 2pq = 2(0.8)(0.2) = 0.32 (32%)",
                            "Answer: 32% are carriers"
                        ]
                    }
                }
            },
            realWorldExample: {
                sickleCell: {
                    background: "Sickle cell disease in African populations",
                    genotypes: {
                        AA: "Normal hemoglobin (susceptible to malaria)",
                        AS: "Carrier (resistant to malaria, mild symptoms)",
                        SS: "Sickle cell disease (severe anemia)"
                    },
                    observation: "In malaria regions, AS frequency higher than H-W predicts",
                    reason: "Heterozygote advantage (balancing selection)",
                    conclusion: "Population NOT in H-W equilibrium due to selection",
                    significance: "Shows how H-W helps detect selection"
                }
            },
            limitations: {
                assumptions: "Conditions rarely met in nature",
                applicability: "Best for single-locus traits",
                violations: "Deviations can be due to multiple factors",
                interpretation: "Requires understanding of population biology"
            },
            practiceProblems: [
                {
                    question: "In a population, 9% have blue eyes (recessive). What % are carriers?",
                    hint: "Blue eyes = q², find q, then calculate 2pq",
                    answer: "42%"
                },
                {
                    question: "If p = 0.7, how many heterozygotes in population of 1000?",
                    hint: "Find q first, then calculate 2pq × 1000",
                    answer: "420"
                }
            ],
            category: 'hardy_weinberg'
        };
    }

    handleSpeciation(problem) {
        return {
            topic: "Speciation: The Origin of New Species",
            definition: "Process by which new species arise from existing populations through reproductive isolation and genetic divergence",
            speciesConcepts: {
                biological: {
                    definition: "Groups of actually or potentially interbreeding populations that are reproductively isolated from other such groups",
                    proposedBy: "Ernst Mayr (1942)",
                    strengths: "Works well for sexual, contemporaneous organisms",
                    weaknesses: "Doesn't apply to asexual organisms, extinct species, or geographically separated populations",
                    mostUsed: "Yes, for animals"
                },
                morphological: {
                    definition: "Species defined by structural features",
                    strengths: "Applicable to all organisms, including fossils",
                    weaknesses: "Subjective, doesn't account for cryptic species or polymorphism",
                    usedFor: "Fossils, asexual organisms"
                },
                ecological: {
                    definition: "Species defined by ecological niche",
                    strengths: "Emphasizes functional role",
                    weaknesses: "Different species can occupy same niche in different places",
                    usedFor: "Ecology and conservation"
                },
                phylogenetic: {
                    definition: "Smallest group sharing a common ancestor",
                    strengths: "Based on evolutionary history",
                    weaknesses: "Requires detailed phylogenetic information",
                    usedFor: "Systematics and taxonomy"
                }
            },
            typesOfSpeciation: {
                allopatric: {
                    definition: "Speciation due to geographic isolation",
                    mechanism: [
                        "Population separated by geographic barrier",
                        "Gene flow stopped between populations",
                        "Different mutations and selection in each population",
                        "Populations diverge genetically",
                        "Reproductive isolation evolves",
                        "Even if reunited, populations can't interbreed"
                    ],
                    geographicBarriers: [
                        "Mountains",
                        "Rivers",
                        "Oceans",
                        "Glaciers",
                        "Deserts",
                        "Distance"
                    ],
                    examples: [
                        {
                            name: "Galápagos Finches",
                            isolation: "Island separation",
                            divergence: "Beak shapes adapted to different food sources",
                            result: "13+ species from common ancestor"
                        },
                        {
                            name: "Grand Canyon Squirrels",
                            isolation: "Canyon formation",
                            divergence: "Kaibab and Abert's squirrels on opposite rims",
                            result: "Different coloration and genetics"
                        },
                        {
                            name: "Isthmus of Panama",
                            isolation: "Land bridge separated Caribbean and Pacific",
                            divergence: "Marine species diverged on either side",
                            result: "Sister species pairs"
                        }
                    ],
                    timeframe: "Usually thousands to millions of years",
                    mostCommon: "Yes, especially in animals"
                },
                sympatric: {
                    definition: "Speciation without geographic isolation",
                    mechanism: [
                        "Reproductive isolation arises within population",
                        "No physical barriers",
                        "Often involves polyploidy or disruptive selection",
                        "Gene flow prevented by reproductive barriers"
                    ],
                    types: {
                        polyploidy: {
                            description: "Multiplication of chromosome sets",
                            autopolyploidy: "Within same species (2n → 4n)",
                            allopolyploidy: "Hybrid of two species (2n + 2n → 4n)",
                            mechanism: "Errors in meiosis or fertilization",
                            result: "Instant reproductive isolation",
                            common: "Plants (~50% of flowering plants are polyploid)",
                            examples: [
                                "Wheat (hexaploid)",
                                "Cotton (tetraploid)",
                                "Many crop plants"
                            ],
                            importance: "Major mechanism in plant evolution"
                        },
                        disruptiveSelection: {
                            description: "Selection favors two extremes",
                            mechanism: "Different morphs specialize on different resources",
                            result: "Population splits into two groups",
                            examples: [
                                "African cichlid fish (different feeding morphs)",
                                "Apple maggot flies (host plant specialization)"                                                                            ],                                                              controversy: "Debated how often this leads to complete speciation"
                        },
                        sexualSelection: {
                            description: "Mate preferences drive divergence",
                            mechanism: "Different mating preferences in subgroups",                                                                         examples: [                                                         "African lake cichlids (color preferences)",
                                "Hawaiian Drosophila (courtship songs)"                                                                                     ]                                                           }
                    },
                    timeframe: "Can be rapid (especially polyploidy—one generation) or gradual",
                    rarity: "Rarer than allopatric, but significant in plants"
                },
                parapatric: {
                    definition: "Speciation in adjacent populations with limited gene flow",
                    mechanism: [
                        "Populations occupy adjacent areas",
                        "Some gene flow occurs at boundary",
                        "Strong selection maintains differences",
                        "Reproductive isolation evolves despite gene flow"
                    ],
                    examples: [
                        {
                            name: "Grass species Anthoxanthum odoratum",
                            context: "Mine tailings vs normal soil",
                            selection: "Heavy metal tolerance",
                            result: "Flowering time divergence reduces gene flow"
                        },
                        {
                            name: "Walking-stick insects",
                            context: "Different host plants in adjacent areas",
                            selection: "Host plant specialization",
                            result: "Reproductive isolation evolving"
                        }
                    ],
                    characteristic: "Strong selection overcomes gene flow",
                    timeframe: "Intermediate between allopatric and sympatric"
                },
                peripatric: {
                    definition: "Speciation in small peripheral isolated population",
                    mechanism: [
                        "Small population at edge of range isolated",
                        "Founder effect and genetic drift strong",
                        "Rapid divergence from main population",
                        "Can lead to new species quickly"
                    ],
                    relatedTo: "Allopatric speciation, but emphasizes small population size",
                    examples: [
                        "Island populations",
                        "Peripheral isolates at range margins"
                    ],
                    speed: "Can be rapid due to drift and inbreeding"
                }
            },
            reproductiveIsolation: {
                definition: "Mechanisms preventing gene flow between populations",
                importance: "Essential for maintaining species boundaries",
                types: {
                    prezygotic: {
                        description: "Barriers preventing fertilization",
                        timing: "Before zygote forms",
                        mechanisms: {
                            habitat: {
                                description: "Species occupy different habitats",
                                example: "Water snakes vs terrestrial snakes",
                                effectiveness: "High if habitats don't overlap"
                            },
                            temporal: {
                                description: "Breed at different times",
                                examples: [
                                    "Plant species flowering at different times",
                                    "Frogs breeding in different seasons",
                                    "Cicadas with different emergence cycles"
                                ],
                                effectiveness: "Complete if no overlap"
                            },
                            behavioral: {
                                description: "Different courtship behaviors or signals",
                                examples: [
                                    "Bird songs and displays",
                                    "Firefly flash patterns",
                                    "Frog mating calls"
                                ],
                                importance: "Very common in animals",
                                effectiveness: "Usually strong"
                            },
                            mechanical: {
                                description: "Anatomical incompatibility",
                                examples: [
                                    "Insect genitalia shape",
                                    "Flower and pollinator matching",
                                    "Snail shell coiling direction"
                                ],
                                effectiveness: "Complete physical barrier"
                            },
                            gametic: {
                                description: "Sperm and egg incompatible",
                                examples: [
                                    "Sea urchin sperm-egg recognition",
                                    "Pollen-stigma interactions in plants"
                                ],
                                mechanism: "Molecular recognition systems",
                                effectiveness: "Very strong"
                            }
                        },
                        advantage: "No wasted reproductive effort"
                    },
                    postzygotic: {
                        description: "Barriers acting after fertilization",
                        timing: "After zygote forms",
                        mechanisms: {
                            reducedHybridViability: {
                                description: "Hybrid offspring die before reproduction",
                                examples: [
                                    "Frog hybrids that die as tadpoles",
                                    "Hybrid seeds that don't germinate",
                                    "Salamander hybrids with defects"
                                ],
                                stage: "Embryonic or juvenile"
                            },
                            reducedHybridFertility: {
                                description: "Hybrids viable but sterile",
                                examples: [
                                    "Mule (horse × donkey): sterile",
                                    "Liger (lion × tiger): usually sterile",
                                    "Many plant hybrids"
                                ],
                                mechanism: "Chromosome incompatibility during meiosis",
                                famous: "Mules cannot reproduce"
                            },
                            hybridBreakdown: {
                                description: "F1 hybrids viable and fertile, but F2 or backcross offspring have problems",
                                examples: [
                                    "Some cotton species crosses",
                                    "Rice species hybrids"
                                ],
                                timing: "Second generation"
                            }
                        },
                        disadvantage: "Wasted reproductive effort"
                    }
                }
            },
            ratesOfSpeciation: {
                gradualism: {
                    description: "Slow, steady evolutionary change",
                    proposedBy: "Darwin",
                    pattern: "Continuous change over long periods",
                    fossilRecord: "Should show many intermediate forms",
                    expected: "Linear accumulation of changes"
                },
                punctuatedEquilibrium: {
                    description: "Long periods of stasis interrupted by rapid change",
                    proposedBy: "Eldredge and Gould (1972)",
                    pattern: "Rapid speciation followed by little change",
                    fossilRecord: "Few intermediates, sudden appearances",
                    explanation: "Speciation occurs in small, isolated populations",
                    debate: "Both patterns probably occur"
                }
            },
            adaptiveRadiation: {
                definition: "Rapid diversification of one ancestral species into many new species",
                conditions: [
                    "New environment with empty niches",
                    "Key innovation allowing exploitation of resources",
                    "Few competitors"
                ],
                examples: [
                    {
                        name: "Darwin's Finches",
                        location: "Galápagos Islands",
                        ancestralSpecies: "One finch species from mainland",
                        radiation: "13+ species with different beak shapes",
                        niches: "Seeds, insects, nectar, blood",
                        timeframe: "2-3 million years"
                    },
                    {
                        name: "Hawaiian Honeycreepers",
                        location: "Hawaiian Islands",
                        radiation: "50+ species from one ancestor",
                        diversity: "Incredible beak and feeding diversity",
                        status: "Many extinct, others endangered"
                    },
                    {
                        name: "Cichlid Fish",
                        location: "African Great Lakes",
                        radiation: "Hundreds of species in each lake",
                        diversity: "Feeding, coloration, behavior",
                        speed: "Some lakes <100,000 years old",
                        mechanism: "Sexual selection and ecological specialization"
                    },
                    {
                        name: "Cambrian Explosion",
                        timeframe: "~541 million years ago",
                        radiation: "Most animal phyla appeared rapidly",
                        significance: "Major increase in diversity"
                    }
                ],
                importance: "Explains biodiversity patterns, especially on islands"
            },
            hybridsAndIntrogression: {
                hybrids: {
                    definition: "Offspring of crosses between species",
                    viability: "Range from inviable to fully viable",
                    fertility: "Range from sterile to fully fertile",
                    examples: [
                        "Mules (sterile)",
                        "Wolf-dog hybrids (fertile)",
                        "Many plant hybrids (some fertile)"
                    ]
                },
                introgression: {
                    definition: "Gene flow between species through hybridization and backcrossing",
                    mechanism: "Hybrids backcross to parental species",
                    result: "Genes from one species incorporated into another",
                    examples: [
                        "Neanderthal DNA in modern humans (1-4%)",
                        "Crop plants and wild relatives",
                        "Oak species"
                    ],
                    significance: "Species boundaries can be permeable"
                }
            },
            reinforcement: {
                definition: "Natural selection strengthens reproductive isolation",
                context: "When hybrids have low fitness",
                mechanism: "Selection favors individuals that don't hybridize",
                result: "Prezygotic barriers strengthened in areas of overlap",
                evidence: "Stronger isolation in sympatry than allopatry",
                example: "Closely related frog species have different calls where they overlap"
            },
            category: 'speciation'
        };
    }

    handleEvidenceEvolution(problem) {
        return {
            topic: "Evidence for Evolution",
            overview: "Multiple independent lines of evidence from diverse fields converge to support evolutionary theory",
            majorEvidenceTypes: {
                fossilRecord: {
                    description: "Preserved remains or traces of organisms from the past",
                    whatItShows: [
                        "Life has changed over time",
                        "Extinct species existed",
                        "Transitional forms between groups",
                        "Temporal sequence of organisms",
                        "Patterns of extinction and radiation"
                    ],
                    limitations: [
                        "Fossilization is rare (requires specific conditions)",
                        "Record is incomplete (many organisms don't fossilize)",
                        "Bias toward hard-bodied, abundant, widespread organisms",
                        "Dating can be challenging"
                    ],
                    transitionalFossils: [
                        {
                            name: "Archaeopteryx",
                            transition: "Dinosaurs to birds",
                            features: "Reptilian teeth, claws, tail + bird feathers, wishbone",
                            age: "~150 million years ago",
                            significance: "Classic example of transitional form"
                        },
                        {
                            name: "Tiktaalik",
                            transition: "Fish to tetrapods",
                            features: "Fish gills, scales + tetrapod wrist bones, neck",
                            age: "~375 million years ago",
                            significance: "Predicted and then discovered in Arctic Canada"
                        },
                        {
                            name: "Ambulocetus",
                            transition: "Land mammals to whales",
                            features: "Functional legs + whale-like skull and tail",
                            age: "~49 million years ago",
                            significance: "Shows intermediate aquatic adaptation"
                        },
                        {
                            name: "Homo erectus",
                            transition: "Earlier hominins to modern humans",
                            features: "Intermediate brain size, bipedal, tool use",
                            age: "~2 million to 100,000 years ago",
                            significance: "Human evolution intermediary"
                        }
                    ],
                    fossilSuccession: {
                        observation: "Fossils appear in chronological order",
                        pattern: [
                            "Simple organisms in oldest rocks",
                            "Complex organisms in younger rocks",
                            "No anachronisms (no rabbits in Precambrian)",
                            "Sequential appearance of groups"
                        ],
                        significance: "Consistent with evolution, not separate creation"
                    }
                },
                comparativeAnatomy: {
                    description: "Comparison of body structures across species",
                    homologousStructures: {
                        definition: "Similar structures inherited from common ancestor",
                        characteristics: "Same basic structure, different functions",
                        examples: [
                            {
                                structure: "Vertebrate forelimbs",
                                organisms: "Human arm, bat wing, whale flipper, cat leg",
                                commonBones: "Humerus, radius, ulna, carpals, metacarpals, phalanges",
                                functions: "Grasping, flying, swimming, walking",
                                significance: "Same structure, different uses = common ancestry"
                            },
                            {
                                structure: "Vertebrate embryos",
                                similarity: "All have pharyngeal pouches, tail",
                                interpretation: "Shared developmental program from ancestor"
                            }
                        ],
                        significance: "Evidence of common ancestry and divergent evolution"
                    },
                    analogousStructures: {
                        definition: "Similar structures evolved independently (convergent evolution)",
                        characteristics: "Different structure, similar function",
                        examples: [
                            {
                                structure: "Wings",
                                organisms: "Bird, bat, insect",
                                similarity: "All used for flight",
                                difference: "Completely different structural basis",
                                significance: "Similar environmental pressures = similar solutions"
                            },
                            {
                                structure: "Streamlined body",
                                organisms: "Shark (fish), dolphin (mammal), ichthyosaur (reptile)",
                                significance: "Aquatic lifestyle selects for similar shape"
                            }
                        ],
                        significance: "Shows evolution produces similar solutions independently"
                    },
                    vestigialStructures: {
                        definition: "Reduced structures with little or no function",
                        interpretation: "Remnants of structures functional in ancestors",
                        examples: [
                            {
                                structure: "Human appendix",
                                ancestralFunction: "Digesting cellulose (like in herbivores)",
                                currentFunction: "Limited immune function",
                                significance: "Reduced but not completely lost"
                            },
                            {
                                structure: "Whale hip bones",
                                ancestralFunction: "Supporting hind legs in land mammals",
                                currentFunction: "None for locomotion (tiny internal bones)",
                                significance: "Evidence whales evolved from land mammals"
                            },
                            {
                                structure: "Snake skull remnants of limbs",
                                ancestralFunction: "Walking",
                                currentFunction: "None (some snakes have tiny spurs)",
                                significance: "Snakes evolved from legged lizards"
                            },
                            {
                                structure: "Human tailbone (coccyx)",
                                ancestralFunction: "Tail",
                                currentFunction: "Muscle attachment point",
                                significance: "Reduced tail from ancestors"
                            },
                            {
                                structure: "Blind cave fish eyes",
                                ancestralFunction: "Vision",
                                currentFunction: "None (covered by skin)",
                                significance: "Loss of unused structures"
                            }
                        ],
                        significance: "Hard to explain except as evolutionary remnants"
                    }
                },
                comparativeEmbryology: {
                    description: "Similarities in embryonic development",
                    observations: [                                                     "Vertebrate embryos look very similar early in development",
                        "All have pharyngeal pouches (gill slits)",
                        "All have post-anal tails",
                        "All have similar early body plan"
                    ],
                    interpretation: "Shared developmental program inherited from common ancestor",
                    significance: "Development reflects evolutionary history",
                    example: "Human embryos have gill pouches and tails (later modified or lost)"
                },
                molecularEvidence: {
                    description: "DNA and protein sequence comparisons",
                    principle: "More similar sequences = more recent common ancestor",
                    DNAevidence: {
                        universalGeneticCode: "All organisms use same DNA → RNA → protein code",                                                        sequenceComparison: "Can compare any gene across species",
                        results: [
                            "Humans and chimps share ~99% DNA sequence",
                            "Humans and mice share ~85% DNA sequence",                                                                                      "All mammals share many genes",                                 "Even bacteria and humans share some genes"
                        ],                                                              interpretation: "Hierarchical pattern of similarity = common ancestry"                                                      },
                    molecularClock: {                                                   concept: "DNA changes accumulate at roughly constant rate",                                                                     application: "Estimate divergence times",                                                                                       formula: "Genetic distance ∝ time since divergence",                                                                            example: "Human-chimp split ~6-7 million years ago (from DNA)",
                        limitations: "Rates vary among genes and lineages"                                                                          },
                    pseudogenes: {                                                      definition: "Non-functional gene copies",
                        significance: "Shared pseudogenes in same position = common ancestry",
                        example: "Humans and other primates share broken vitamin C gene",
                        interpretation: "Hard to explain except by inheritance from common ancestor"
                    },
                    cytochromeC: {
                        protein: "Electron transport chain protein",
                        conservation: "Highly conserved across all aerobic organisms",                                                                  differences: "Number of amino acid differences reflects evolutionary distance",
                        example: "Human vs chimp: 0 differences; human vs yeast: 44 differences"
                    }                                                           },
                biogeography: {
                    description: "Geographic distribution of species",                                                                              patterns: [                                                         "Related species found near each other",                        "Island species resemble nearest mainland species",
                        "Unique species on isolated landmasses",                        "Distributions reflect continental drift"                                                                                   ],
                    examples: [                                                         {
                            observation: "Galápagos finches related to South American finches",
                            interpretation: "Colonized from nearby mainland, then diversified",
                            significance: "Geographic proximity = evolutionary relationship"
                        },
                        {
                            observation: "Marsupials dominant in Australia, rare elsewhere",
                            interpretation: "Isolated on Australia, diversified without placental competition",
                            significance: "Isolation leads to unique evolution"
                        },
                        {
                            observation: "Similar environments have different species (deserts, rainforests)",
                            interpretation: "Evolution works with available species, not creating optimal from scratch",
                            example: "Desert cacti (Americas) vs euphorbias (Africa) - similar appearance, unrelated"
                        },                                                              {
                            observation: "No native land mammals on Hawaii",                                                                                interpretation: "Too isolated for mammals to reach (except bats)",
                            significance: "Distribution limited by dispersal ability"                                                                   }
                    ],
                    continentalDrift: {                                                 observation: "Similar fossils on now-separated continents",                                                                     examples: [
                            "Mesosaurus fossils in South America and Africa",                                                                               "Glossopteris plant fossils on southern continents"                                                                         ],
                        interpretation: "Continents were once connected",
                        significance: "Explains biogeographic patterns"
                    }                                                           },
                directObservation: {                                                description: "Watching evolution happen in real-time",
                    importance: "Directly demonstrates evolution occurs",
                    examples: [
                        {
                            name: "Antibiotic Resistance",
                            organism: "Bacteria",
                            timeframe: "Days to years",
                            mechanism: "Selection for resistant mutations",
                            observation: "Resistant strains become dominant",
                            significance: "Evolution observed in hospitals and labs"
                        },
                        {
                            name: "Pesticide Resistance",                                   organism: "Insects",
                            timeframe: "Years to decades",
                            mechanism: "Selection for resistance alleles",
                            examples: "Over 500 insect species resistant to pesticides",
                            significance: "Economic and agricultural importance"
                        },                                                              {                                                                   name: "Darwin's Finches",                                       location: "Galápagos",
                            timeframe: "Decades",
                            researchers: "Peter and Rosemary Grant",
                            observation: "Beak size changed in response to drought",
                            measurement: "Precisely measured over 40+ years",                                                                               significance: "Natural selection observed and quantified"                                                                   },
                        {                                                                   name: "Peppered Moths",
                            location: "England",
                            timeframe: "100+ years",
                            observation: "Dark form increased during industrial pollution, decreased when pollution controlled",
                            mechanism: "Selection by bird predation",
                            significance: "Industrial melanism as evolution example"
                        },
                        {
                            name: "E. coli Long-term Evolution Experiment",
                            researcher: "Richard Lenski",
                            duration: "35+ years, 75,000+ generations",
                            observations: "New traits evolved, including citrate metabolism",
                            significance: "Documented evolution in controlled conditions"
                        }
                    ]                                                           }
            },
            convergingEvidence: {
                principle: "Multiple independent lines of evidence all point to same conclusion",
                power: "Different methods produce consistent evolutionary trees",                                                               example: "Human-chimp relationship supported by anatomy, fossils, DNA, proteins, biogeography",                                 significance: "Evolution is one of best-supported theories in science"
            },                                                              commonObjections: [
                {                                                                   objection: "Fossil record has gaps",
                    response: "Fossilization is rare; many transitional forms have been found; pattern is clear despite gaps"
                },                                                              {
                    objection: "Evolution is 'just a theory'",                      response: "In science, 'theory' means well-supported explanation; evolution is fact and theory"                             },
                {
                    objection: "No one has seen species evolve",
                    response: "Evolution observed in bacteria, insects, finches, and laboratory; speciation takes time"
                },
                {
                    objection: "Structures are too complex to evolve",
                    response: "Complex structures evolve through intermediate stages; eye evolution well-documented"
                }                                                           ],
            category: 'evidence_evolution'
        };
    }

    handleAdaptation(problem) {
        return {
            topic: "Adaptation and Fitness",                                definition: "Heritable trait that increases an organism's fitness (survival and reproduction) in a specific environment",
            keyPrinciples: [
                "Adaptations result from natural selection",
                "Adaptations are relative to specific environments",
                "Not all traits are adaptations",                               "Fitness is measured by reproductive success, not survival alone"                                                           ],
            fitness: {
                definition: "Reproductive success; contribution of genes to next generation relative to others",
                measurement: "Number of surviving, reproducing offspring",
                absoluteFitness: "Actual number of offspring",
                relativeFitness: "Fitness compared to most fit genotype (scaled 0 to 1)",
                components: {                                                       viability: "Survival to reproductive age",
                    matingSuccess: "Ability to obtain mates",
                    fecundity: "Number of offspring produced",
                    offspringViability: "Survival of offspring"
                },
                misconceptions: [
                    "Fitness ≠ physical strength",
                    "Fitness ≠ health",
                    "Fitness ≠ lifespan",
                    "Fitness = reproductive output"
                ],
                examples: [
                    {
                        scenario: "Organism A lives 50 years, 0 offspring",
                        fitness: "Zero (no contribution to next generation)"
                    },
                    {                                                                   scenario: "Organism B lives 2 years, 1000 offspring",
                        fitness: "Very high (large contribution)"
                    }                                                           ]
            },
            typesOfAdaptations: {                                               structural: {
                    description: "Physical features that enhance survival/reproduction",                                                            examples: [                                                         {                                                                   adaptation: "Cactus spines",
                            function: "Reduce water loss, defense from herbivores",                                                                         environment: "Desert",
                            origin: "Modified leaves"                                   },
                        {                                                                   adaptation: "Bird beaks",
                            function: "Feeding on specific foods",
                            variation: "Seed-cracking, insect-probing, nectar-sipping",
                            selection: "Food availability"                              },
                        {
                            adaptation: "Camouflage coloration",
                            function: "Avoid predators or ambush prey",
                            examples: "Stick insects, leaf insects, chameleons, arctic hares",
                            mechanism: "Background matching"
                        },
                        {
                            adaptation: "Streamlined body shape",
                            function: "Reduce drag in water or air",
                            examples: "Fish, dolphins, birds",
                            convergence: "Independent evolution in different groups"
                        }
                    ]
                },
                physiological: {
                    description: "Internal body functions that enhance survival/reproduction",                                                      examples: [
                        {                                                                   adaptation: "Antifreeze proteins",
                            organism: "Antarctic fish",                                     function: "Prevent ice crystal formation in blood",                                                                             environment: "Sub-zero ocean temperatures"
                        },
                        {                                                                   adaptation: "CAM photosynthesis",
                            organism: "Desert plants (cacti, agave)",
                            function: "Open stomata at night to reduce water loss",
                            advantage: "Survive in arid conditions"
                        },                                                              {
                            adaptation: "Hemoglobin variants",                              organism: "High-altitude humans (Tibetans, Andeans)",                                                                           function: "Enhanced oxygen uptake in thin air",
                            mechanism: "Genetic changes in hemoglobin genes"
                        },
                        {                                                                   adaptation: "Venom production",
                            organism: "Snakes, spiders, scorpions",
                            function: "Subdue prey, defense",                               evolution: "Complex mixtures refined over time"
                        },
                        {                                                                   adaptation: "Hibernation",
                            organism: "Bears, ground squirrels",                            function: "Survive winter when food scarce",
                            mechanism: "Extreme metabolic reduction"
                        }                                                           ]
                },                                                              behavioral: {
                    description: "Actions that enhance survival/reproduction",
                    innate: "Genetically programmed behaviors",
                    learned: "Behaviors acquired through experience (can have genetic component)",
                    examples: [
                        {                                                                   adaptation: "Migration",
                            organisms: "Birds, butterflies, whales, salmon",
                            function: "Track resources, reach breeding grounds",
                            mechanism: "Navigation using sun, stars, magnetic field",
                            cost: "Energy expenditure, mortality during journey"
                        },                                                              {
                            adaptation: "Courtship displays",                               organisms: "Birds of paradise, peacocks, bowerbirds",
                            function: "Attract mates, demonstrate quality",                                                                                 selection: "Sexual selection",
                            elaboration: "Can become extreme"
                        },                                                              {
                            adaptation: "Social behavior",
                            organisms: "Ants, bees, wolves, primates",
                            function: "Defense, hunting, reproduction",                                                                                     examples: "Cooperative hunting, alarm calls, division of labor"                                                             },
                        {                                                                   adaptation: "Tool use",
                            organisms: "Chimpanzees, crows, sea otters",
                            function: "Access food",                                        examples: "Chimps using sticks for termites, crows making hooks"                                                            }
                    ]                                                           },
                molecular: {
                    description: "Genetic and molecular-level adaptations",                                                                        
                    examples: [
                        {                                                                   adaptation: "Lactose tolerance",
                            organism: "Humans",                                             mutation: "Persistence of lactase enzyme into adulthood",
                            geography: "Common in populations with dairy history",
                            timeframe: "Evolved within last 10,000 years",                                                                                  significance: "Rapid human evolution example"                                                                               },
                        {                                                                   adaptation: "Sickle cell allele",
                            organism: "Humans in malaria regions",
                            mechanism: "Heterozygotes resistant to malaria",
                            tradeoff: "Homozygotes have sickle cell disease",
                            balance: "Maintained by balancing selection"
                        },
                        {
                            adaptation: "Antibiotic resistance genes",
                            organism: "Bacteria",                                           mechanism: "Enzymes breaking down antibiotics, altered target sites",                                                           evolution: "Rapid due to short generation time",
                            concern: "Public health crisis"
                        }
                    ]
                }
            },
            adaptationVsAcclimation: {
                adaptation: {
                    definition: "Evolutionary change (genetic)",                    timeframe: "Multiple generations",
                    inheritance: "Yes (heritable)",                                 example: "Thick fur in Arctic mammals"
                },                                                              acclimation: {
                    definition: "Physiological adjustment within lifetime",
                    timeframe: "Days to months",
                    inheritance: "No (not heritable)",
                    example: "Tanning in response to sun",                          alternative: "Acclimatization (natural), acclimation (lab)"                                                                 }
            },                                                              constraintsOnAdaptation: {
                historicalConstraints: {                                            description: "Limited by evolutionary history",
                    example: "Vertebrates have only four limbs (tetrapod ancestor had four)",                                                       significance: "Can't evolve solutions that require major redesign"                                                          },
                geneticConstraints: {                                               description: "Limited by available genetic variation",
                    principle: "Can only evolve if variation exists",
                    example: "If no alleles for resistance, can't evolve resistance"                                                            },
                tradeoffs: {                                                        description: "Improvement in one trait costs another",                                                                          examples: [
                        "Large antlers (mating success) vs mobility (predator escape)",
                        "Immune function vs growth rate",
                        "Reproduction vs survival"
                    ],                                                              principle: "Organisms face limited resources and conflicting demands"                                                       },
                developmentalConstraints: {                                         description: "Limited by developmental processes",
                    example: "Mammalian teeth patterns constrained by jaw development"                                                          },
                physicalConstraints: {                                              description: "Limited by laws of physics",
                    examples: [                                                         "Maximum size of flying animals (limited by weight vs wing area)",
                        "Maximum height of trees (limited by water transport)"
                    ]
                }
            },
            notAllTraitsAdaptations: {                                          exaptations: {
                    definition: "Trait evolved for one function, now used for another",
                    example: "Feathers originally for insulation, later co-opted for flight",
                    significance: "Evolution works with existing structures"
                },                                                              byproducts: {
                    definition: "Side effects of other traits",
                    example: "Belly button (scar from umbilical cord, not itself adaptive)",                                                        note: "Not directly selected"
                },                                                              neutralTraits: {
                    definition: "Traits that don't affect fitness",
                    example: "Much DNA sequence variation",                         evolution: "Can change by drift"
                },                                                              vestigialTraits: {
                    definition: "Reduced structures from ancestors",
                    example: "Human appendix, whale hip bones",                     note: "Once adaptive, no longer (or reduced function)"
                }
            },
            adaptationExamples: [                                               {
                    organism: "Giraffe",                                            adaptation: "Long neck",
                    function: "Reach high foliage",
                    mechanism: "Selection favored individuals with longer necks",
                    note: "NOT because they stretched (Lamarckism wrong)",
                    evidence: "Variation existed, longer-necked individuals reproduced more"
                },                                                              {
                    organism: "Cheetah",
                    adaptations: "Speed (flexible spine, large heart, long legs, non-retractable claws)",
                    function: "Catch fast prey",                                    tradeoff: "Weak compared to other big cats",
                    specialization: "Highly adapted sprinter"
                },
                {
                    organism: "Arctic Fox",                                         adaptations: "Thick fur, small ears, compact body, white winter coat",
                    function: "Conserve heat, camouflage",
                    environment: "Arctic tundra",
                    comparison: "Desert foxes have opposite traits (large ears, thin fur)"
                },
                {
                    organism: "Venus Flytrap",
                    adaptation: "Snap traps",                                       function: "Capture insects for nitrogen",
                    environment: "Nitrogen-poor bogs",
                    mechanism: "Modified leaves with trigger hairs"
                }
            ],
            adaptationPitfalls: [
                "Don't assume every trait is adaptive (some are neutral or byproducts)",
                "Don't assume perfect adaptation (tradeoffs and constraints exist)",
                "Don't confuse adaptation (evolution) with acclimation (physiology)",
                "Don't think organisms adapt during lifetime (populations evolve over generations)",                    
                "Don't assume adaptation is goal-directed (it's blind process of variation and selection)"
            ],
            category: 'adaptation'
        };
    }

    handleGeneticVariation(problem) {
        return {
            topic: "Genetic Variation: The Raw Material of Evolution",
            definition: "Differences in DNA sequences among individuals within a population or species",
            importance: [
                "Essential for evolution—without variation, no evolution possible",
                "Allows populations to respond to environmental change",
                "Provides material for natural selection",
                "Determines evolutionary potential of population"
            ],
            levelsOfVariation: {
                nucleotideLevel: {
                    description: "Differences in DNA base pairs",
                    types: "SNPs (single nucleotide polymorphisms), insertions, deletions",
                    measurement: "Nucleotide diversity (π)",
                    example: "Human genomes differ at ~0.1% of positions (~3 million bases)"
                },
                geneLevel: {
                    description: "Different alleles of genes",
                    measurement: "Number of alleles per locus, allele frequencies",
                    example: "ABO blood types (3 alleles: A, B, O)"
                },
                chromosomeLevel: {
                    description: "Inversions, duplications, translocations",
                    importance: "Can affect many genes at once",
                    example: "Human chromosome 2 (fusion of two ape chromosomes)"
                },
                genomeLevel: {
                    description: "Whole genome duplications, chromosome number variation",
                    importance: "Polyploidy common in plants",
                    example: "Wheat is hexaploid (6 sets of chromosomes)"
                }
            },
            sourcesOfVariation: {
                mutation: {
                    description: "Random changes in DNA sequence",
                    types: {
                        pointMutations: {
                            description: "Single nucleotide changes",
                            rate: "~10⁻⁸ to 10⁻⁹ per base per generation",
                            effects: "Silent, missense, nonsense",
                            importance: "Most common type of mutation"
                        },
                        insertionsDeletions: {
                            description: "Addition or removal of nucleotides",
                            effect: "Frameshift if not multiple of 3",
                            importance: "Can have large effects"
                        },
                        chromosomalMutations: {
                            description: "Large-scale changes",
                            types: "Duplications, deletions, inversions, translocations",
                            importance: "Can create new genes or regulatory regions"
                        },
                        geneDuplication: {
                            description: "Copying of gene or gene segment",
                            importance: "Source of new genes (one copy can evolve new function)",
                            example: "Globin gene family arose through duplications"
                        }
                    },
                    rate: "Humans: ~100 new mutations per genome per generation",
                    randomness: "Mutations are random with respect to fitness",
                    importance: "Ultimate source of all genetic variation"
                },
                sexualReproduction: {
                    description: "Shuffling of existing alleles",
                    mechanisms: {
                        independentAssortment: {
                            description: "Random distribution of chromosomes to gametes",
                            result: "2ⁿ possible gamete combinations (n = haploid chromosome number)",
                            humans: "2²³ = 8.4 million possible gametes from each parent",
                            importance: "Creates new combinations of alleles"
                        },
                        crossingOver: {
                            description: "Exchange of DNA between homologous chromosomes",
                            timing: "During meiosis I (prophase I)",
                            result: "Recombinant chromosomes with new allele combinations",
                            frequency: "Average ~2-3 crossovers per chromosome pair",
                            importance: "Breaks up linkage, increases variation"
                        },
                        randomFertilization: {
                            description: "Any sperm can fertilize any egg",
                            result: "(8.4 million)² = 70 trillion possible genetic combinations",
                            importance: "Each offspring genetically unique (except identical twins)"
                        }
                    },
                    advantage: "Creates variation without waiting for new mutations",
                    note: "Doesn't create new alleles, just new combinations"
                },
                geneFlow: {
                    description: "Introduction of alleles from other populations",
                    mechanism: "Migration and interbreeding",
                    effect: "Increases variation within populations",
                    example: "Human populations connected by gene flow",
                    importance: "Introduces alleles that arose elsewhere"
                }
            },
            maintenanceOfVariation: {
                balancingSelection: {
                    description: "Selection maintaining multiple alleles",
                    mechanisms: {
                        heterozygoteAdvantage: {
                            description: "Heterozygotes have higher fitness than either homozygote",
                            example: "Sickle cell: AA (malaria susceptible), AS (resistant, healthy), SS (sickle cell disease)",
                            result: "Both alleles maintained in population",
                            formula: "Equilibrium frequency depends on relative fitness"
                        },
                        frequencyDependentSelection: {
                            description: "Fitness depends on allele frequency",
                            negative: "Rare alleles favored (e.g., immune system diversity)",
                            positive: "Common alleles favored (e.g., warning coloration)",
                            result: "Can maintain polymorphism"
                        },
                        spatialHeterogeneity: {
                            description: "Different alleles favored in different locations",
                            example: "Different color morphs in different habitats",
                            result: "Overall variation maintained across landscape"
                        },
                        temporalVariation: {
                            description: "Different alleles favored at different times",
                            example: "Beak sizes in finches during wet vs dry years",
                            result: "No allele consistently favored"
                        }
                    }
                },
                neutralVariation: {
                    description: "Genetic variation that doesn't affect fitness",
                    proportion: "Much DNA variation is neutral or nearly neutral",
                    maintenance: "Drift and mutation balance",
                    example: "Synonymous substitutions (don't change amino acid)",
                    importance: "Provides 'hidden' variation"
                },
                diploidy: {
                    description: "Two copies of each gene",
                    effect: "Hides recessive alleles in heterozygotes",
                    result: "Recessive deleterious alleles maintained at low frequency",
                    importance: "Protects variation from selection"
                }
            },
            measuringVariation: {
                heterozygosity: {
                    definition: "Proportion of individuals heterozygous at a locus",
                    formula: "H = 2pq (for two alleles under Hardy-Weinberg)",
                    range: "0 (no variation) to 0.5 (maximum for two alleles)",
                    interpretation: "Higher = more variation",
                    example: "Human H ≈ 0.1 to 0.3 for typical locus"
                },
                nucleotideDiversity: {
                    definition: "Average proportion of nucleotide differences between sequences",
                    symbol: "π (pi)",
                    calculation: "Average pairwise differences / total sites",
                    humans: "π ≈ 0.001 (0.1%)",
                    interpretation: "Higher = more variation"
                },
                numberOfAlleles: {
                    definition: "How many different alleles at a locus",
                    range: "1 (monomorphic) to many (polymorphic)",
                    example: "Human MHC genes have 100+ alleles",
                    limitation: "Doesn't account for allele frequencies"
                },
                polymorphism: {
                    definition: "Presence of multiple alleles (usually >1% frequency)",
                    measurement: "Proportion of loci that are polymorphic",
                    interpretation: "Higher = more variation"
                }
            },
            factorsReducingVariation: {
                geneticDrift: {
                    effect: "Random loss of alleles, especially in small populations",
                    rate: "Loss rate = 1/(2N) per generation",
                    result: "Decreased heterozygosity over time"
                },
                directionalSelection: {
                    effect: "Favored allele increases, others decrease",
                    result: "Reduced variation at selected locus",
                    selectiveSweep: "Rapid fixation of beneficial allele"
                },
                purifyingSelection: {
                    effect: "Removes deleterious mutations",
                    result: "Maintains current state, reduces variation",
                    strength: "Most selection is purifying"
                },
                bottlenecks: {
                    effect: "Severe reduction in population size",
                    result: "Large loss of variation by drift",
                    recovery: "Slow (depends on mutation, gene flow)",
                    examples: "Northern elephant seals, cheetahs"
                },
                inbreeding: {
                    effect: "Mating between relatives",
                    result: "Increased homozygosity (but doesn't change allele frequencies)",
                    consequence: "Exposes deleterious recessives",
                    note: "Reduces heterozygosity, not total variation"
                }
            },
            variationInNature: {
                observations: [
                    "Most populations have substantial genetic variation",
                    "Variation is widespread across genome",
                    "Most variation is neutral or nearly neutral",
                    "Some loci have very high variation (e.g., immune genes)",
                    "Variation lower in endangered species with small populations"
                ],
                patterns: {
                    withinVsBetween: "Most variation within populations, less between populations",
                    humans: "~85% of genetic variation within populations, ~15% between",
                    FST: "Measure of population differentiation (0 = no difference, 1 = fixed differences)"
                }
            },
            conservationImplications: {
                importance: "Genetic variation needed for adaptation",
                concerns: [
                    "Small populations lose variation quickly",
                    "Inbreeding depression reduces fitness",
                    "Low variation limits evolutionary potential"
                ],
                management: [
                    "Maintain large populations",
                    "Prevent bottlenecks",
                    "Facilitate gene flow between fragments",
                    "Translocations to increase variation"
                ],
                examples: [
                    "Cheetahs have very low variation (skin grafts between unrelated individuals accepted)",
                    "Florida panthers rescued by introducing Texas panthers (gene flow)"
                ]
            },
            molecularVariation: {
                SNPs: {
                    definition: "Single Nucleotide Polymorphisms",
                    frequency: "~1 per 1000 bases in humans",
                    total: "~10 million SNPs in human genome",
                    uses: "Genome-wide association studies, forensics, ancestry"
                },
                microsatellites: {
                    definition: "Short tandem repeats (e.g., CACACACA)",
                    variability: "High (many alleles per locus)",
                    mutationRate: "Higher than SNPs",
                    uses: "DNA fingerprinting, paternity, population genetics"
                },
                CNVs: {
                    definition: "Copy Number Variants (deletions/duplications)",
                    size: ">1000 bases",
                    importance: "Can affect phenotype",
                    proportion: "~12% of human genome in CNVs"
                }
            },
            category: 'genetic_variation'
        };
    }

    handlePhylogeny(problem) {
        return {
            topic: "Phylogeny and Evolutionary Relationships",
            definition: "The evolutionary history and relationships among organisms or groups of organisms",
            phylogeneticTree: {
                definition: "Branching diagram showing evolutionary relationships",
                alsoKnown: "Cladogram, dendrogram, evolutionary tree",
                components: {
                    tips: "Terminal nodes representing species or groups (taxa)",
                    branches: "Lines representing evolutionary lineages",
                    nodes: "Branch points representing common ancestors",
                    root: "Base of tree representing most ancient common ancestor",
                    clades: "Groups consisting of ancestor and all descendants"
                },
                reading: [
                    "Tips that share recent node are closely related",
                    "Time flows from root (ancient) to tips (present)",
                    "Branch length can represent time or genetic change",
                    "Rotation around nodes doesn't change relationships"
                ]
            },
            buildingPhylogenies: {
                characterBased: {
                    description: "Using shared characteristics to infer relationships",
                    types: {
                        morphological: {
                            data: "Anatomical features",
                            examples: "Bone structure, leaf shape, flower parts",
                            advantages: "Works for fossils",
                            disadvantages: "Convergent evolution can mislead"
                        },
                        molecular: {
                            data: "DNA or protein sequences",
                            examples: "Gene sequences, whole genomes",
                            advantages: "Enormous amount of data, quantitative",
                            disadvantages: "Doesn't work for fossils (usually)",
                            mostUsed: "Yes, in modern phylogenetics"
                        },
                        behavioral: {
                            data: "Behaviors",
                            examples: "Courtship displays, nest building",
                            advantages: "Can reveal relationships",
                            disadvantages: "Hard to quantify, limited applicability"
                        }
                    },
                    principle: "Shared derived characters (synapomorphies) indicate common ancestry"
                },
                methods: {
                    parsimony: {
                        principle: "Simplest explanation (fewest evolutionary changes)",
                        method: "Find tree requiring fewest character state changes",
                        advantage: "Intuitive",
                        disadvantage: "Can be misled by convergence"
                    },
                    maximumLikelihood: {
                        principle: "Tree with highest probability given data and evolutionary model",
                        method: "Calculate likelihood for many trees, choose best",
                        advantage: "Statistically rigorous, uses evolutionary models",
                        disadvantage: "Computationally intensive"
                    },
                    bayesian: {
                        principle: "Probability of tree given data and prior assumptions",
                        method: "Markov chain Monte Carlo sampling",
                        advantage: "Provides probability distribution of trees",
                        disadvantage: "Requires priors, computationally intensive"
                    },
                    distanceBased: {
                        principle: "Cluster taxa based on overall similarity",
                        methods: "UPGMA, neighbor-joining",
                        advantage: "Fast",
                        disadvantage: "Less information used"
                    }
                }
            },
            keyConCepts: {
                homology: {
                    definition: "Similarity due to common ancestry",
                    examples: "Vertebrate forelimbs, flower parts",
                    significance: "Indicates evolutionary relationship",
                    contrast: "Analogy (similarity due to convergence)"
                },
                synapomorphy: {
                    definition: "Shared derived character",
                    example: "Feathers in birds",
                    use: "Defines clades",
                    importance: "Basis for cladistic analysis"
                },
                monophyletic: {
                    definition: "Group containing ancestor and ALL descendants",
                    alsoKnown: "Clade",
                    example: "Mammals (includes all descendants of ancestral mammal)",
                    valid: "Yes, recognized as natural group"
                },
                paraphyletic: {
                    definition: "Group containing ancestor but NOT all descendants",
                    example: "Reptiles (excludes birds, but birds descended from reptiles)",
                    valid: "No, not natural group in modern systematics",
                    problem: "Artificial, doesn't reflect evolution"
                },
                polyphyletic: {
                    definition: "Group NOT containing most recent common ancestor",
                    example: "Warm-blooded animals (birds + mammals, but not reptiles in between)",
                    valid: "No, definitely not natural group",
                    problem: "Members don't form clade"
                },
                outgroup: {
                    definition: "Species outside group of interest, used to root tree",
                    purpose: "Determine which character states are ancestral vs derived",
                    example: "Using sharks as outgroup when studying tetrapods",
                    requirement: "Related, but not too closely"
                }
            },
            molecularPhylogenetics: {
                advantages: [
                    "Vast amount of data (thousands of characters)",
                    "Quantitative and objective",
                    "Works for all organisms",
                    "Can compare any organisms (universal genetic code)"
                ],
                limitations: [
                    "Usually can't include fossils (DNA degrades)",
                    "Rates of evolution vary among lineages and genes",
                    "Incomplete lineage sorting can complicate",
                    "Horizontal gene transfer (especially in bacteria)"
                ],
                commonGenes: {
                    rRNA: "Ribosomal RNA (16S, 18S, 28S)",
                    cytochromeC: "Mitochondrial protein",
                    COI: "Cytochrome oxidase I (DNA barcoding)",
                    wholeGenomes: "Increasingly common, most data"
                },
                molecularClock: {
                    concept: "Mutations accumulate at roughly constant rate",
                    use: "Estimate divergence times",
                    calibration: "Use fossils to set timescale",
                    reality: "Rates vary, but still useful",
                    example: "Human-chimp split ~6-7 million years ago"
                }
            },
            threeDomains: {
                overview: "All life divided into three domains based on molecular phylogenetics",
                bacteria: {
                    characteristics: "Prokaryotic, peptidoglycan cell walls",
                    diversity: "Enormous metabolic diversity",
                    examples: "E. coli, cyanobacteria, streptococcus"
                },
                archaea: {
                    characteristics: "Prokaryotic, unique membrane lipids, no peptidoglycan",
                    discovery: "Recognized as distinct in 1970s (Carl Woese)",
                    habitats: "Often extreme environments",
                    examples: "Methanogens, halophiles, thermophiles",
                    relationship: "More closely related to eukaryotes than bacteria"
                },
                eukarya: {
                    characteristics: "Eukaryotic cells (nucleus, organelles)",
                    kingdoms: "Animals, plants, fungi, protists",
                    origin: "Arose through endosymbiosis",
                    diversity: "Most visible biodiversity"
                },
                evidence: "rRNA sequences clearly show three domains"
            },
            treeOfLife: {
                universalCommonAncestor: {
                    concept: "All life descended from single ancestor (LUCA)",
                    evidence: [
                        "Universal genetic code",
                        "Shared biochemistry (DNA, RNA, proteins, ATP)",
                        "Common metabolic pathways",
                        "Molecular phylogenies converge"
                    ],
                    timeframe: "~3.5-4 billion years ago"
                },
                majorBranches: {
                    bacteria: "Diverse prokaryotes",
                    archaea: "Distinct prokaryotes",
                    protists: "Diverse single-celled eukaryotes (paraphyletic)",
                    plants: "Photosynthetic eukaryotes with cell walls",
                    fungi: "Decomposers with chitin cell walls",
                    animals: "Multicellular heterotrophs"
                }
            },
            phylogeneticApplications: {
                classification: {
                    use: "Organize diversity based on evolutionary relationships",
                    principle: "Classification should reflect phylogeny",
                    result: "Monophyletic groups preferred"
                },
                comparativeBiology: {
                    use: "Account for shared ancestry in comparisons",
                    method: "Phylogenetic comparative methods",
                    example: "Testing if trait correlations due to adaptation vs ancestry"
                },
                conservation: {
                    use: "Prioritize unique evolutionary lineages",
                    concept: "Phylogenetic diversity",
                    example: "Protecting basal lineages preserves more evolutionary history"
                },
                medicine: {
                    use: "Track disease evolution and spread",
                    examples: [
                        "HIV evolution within patients",
                        "COVID-19 variants",
                        "Influenza strain tracking"
                    ]
                },
                forensics: {
                    use: "Identify species from DNA",
                    applications: "Wildlife trafficking, food fraud"
                }
            },
            commonMisconceptions: [
                "Evolution is NOT a ladder (it's a branching tree)",
                "Humans didn't evolve 'from' chimps (we share common ancestor)",
                "'Primitive' organisms aren't less evolved (all equally evolved, just different)",
                "Being on same branch doesn't mean more closely related (node proximity matters)",
                "Evolution doesn't have direction toward complexity (bacteria still dominate)"
            ],
            category: 'phylogeny'
        };
    }

    handleMicroevolution(problem) {
        return {
            topic: "Microevolution: Small-Scale Evolutionary Change",
            definition: "Evolution occurring within populations over relatively short time periods; changes in allele frequencies",
            scale: "Population level, observable within human lifespans",
            observable: "Yes, can be directly measured and observed",
            foundation: "Basis for macroevolution (large-scale changes accumulate from microevolution)",
            measuring: {
                alleleFrequency: {
                    definition: "Proportion of specific allele in population",
                    calculation: "Count alleles, divide by total",
                    example: "If 70% of alleles are A, frequency p = 0.7",
                    change: "Evolution = change in allele frequencies over time"
                },
                genotypeFrequency: {
                    definition: "Proportion of each genotype in population",
                    relationship: "Related to allele frequencies by Hardy-Weinberg",
                    deviation: "Deviations indicate evolution or non-random mating"
                }
            },
            mechanisms: {
                description: "Same four mechanisms as general evolution",
                naturalSelection: {
                    effect: "Non-random changes in allele frequencies",
                    direction: "Toward increased adaptation",
                    speed: "Can be rapid if selection strong",
                    observability: "Often observable in short time"
                },
                geneticDrift: {
                    effect: "Random changes in allele frequencies",
                    strength: "Stronger in smaller populations",
                    direction: "Random",
                    observability: "Can see over few generations"
                },
                geneFlow: {
                    effect: "Change due to migration",
                    direction: "Toward similarity between populations",
                    observability: "Can track migrants and their offspring"
                },
                mutation: {
                    effect: "Introduces new alleles",
                    rate: "Usually slow effect on frequencies",
                    importance: "Source of variation",
                    observability: "New mutations can be detected"
                }
            },
            classicExamples: {
                antibioticResistance: {
                    organism: "Bacteria",
                    timeframe: "Days to years",
                    mechanism: "Strong selection for resistance alleles",
                    observation: [
                        "Initial population mostly susceptible",
                        "Antibiotic kills susceptible bacteria",
                        "Resistant bacteria survive and reproduce",
                        "Resistant allele frequency increases dramatically"
                    ],
                    measurement: "Can track resistance allele from rare to common",
                    significance: "Evolution observed in real-time, major health concern",
                    rates: "Can evolve resistance in single generation"
                },
                pepperedMoths: {
                    organism: "Biston betularia",
                    location: "Industrial England",
                    timeframe: "~100 years (1800s-1900s)",
                    mechanism: "Directional selection by bird predation",
                    observation: [
                        "Before industrialization: light moths common (98%), dark rare (2%)",
                        "During industrialization: dark moths increased to 95% in polluted areas",
                        "After pollution controls: light moths returning"
                    ],
                    measurement: "Precise frequency changes documented",
                    significance: "First documented case of evolution by natural selection",
                    reversal: "Demonstrates ongoing evolution as environment changes"
                },
                darwinsFinches: {
                    organism: "Geospiza fortis (medium ground finch)",
                    location: "Daphne Major, Galápagos",
                    researchers: "Peter and Rosemary Grant",
                    timeframe: "1970s-present (40+ years)",
                    trait: "Beak size",
                    observation: [
                        "Beak size varies among individuals",
                        "During drought: large-seeded plants dominate",
                        "Birds with larger beaks survive better (crack large seeds)",
                        "Average beak size increases measurably in one generation",
                        "During wet years: small seeds abundant, beak size decreases"
                    ],
                    measurement: "Precise measurements of thousands of individuals",
                    heritability: "Beak size highly heritable (h² ≈ 0.9)",
                    significance: "Quantified natural selection in wild, back-and-forth evolution"
                },
                pesticideResistance: {
                    organism: "Insects (especially mosquitoes, flies)",
                    timeframe: "Years to decades",
                    mechanism: "Strong selection for resistance genes",
                    scale: "Over 500 species resistant to one or more pesticides",
                    observation: "Can track resistance alleles from introduction to fixation",
                    economic: "Major agricultural problem",
                    evolution: "Clear demonstration of evolutionary principles"
                }
            },
            populationGenetics: {
                description: "Mathematical study of allele frequency changes",
                hardyWeinberg: {
                    purpose: "Null model (no evolution)",
                    use: "Detect and measure evolution",
                    deviations: "Indicate evolutionary forces at work"
                },
                selectionModels: {
                    directional: "Allele frequency changes toward fixation or loss",
                    balancing: "Allele frequencies maintained at intermediate values",
                    formulas: "Δp = sp(1-p)[p + h(1-2p)]"
                },
                driftModels: {
                    randomWalk: "Allele frequencies fluctuate randomly",
                    fixationTime: "Average 4N generations (N = population size)",
                    heterozygosity: "Decreases at rate 1/(2N) per generation"
                }
            },
            measuringSelection: {
                selectionCoefficient: {
                    symbol: "s",
                    definition: "Reduction in fitness of selected-against genotype",
                    range: "0 (no selection) to 1 (lethal)",
                    example: "If AA has fitness 1.0 and aa has fitness 0.9, then s = 0.1"
                },
                fitnessRelative: {
                    definition: "Reproductive success relative to most fit genotype",
                    scale: "Most fit = 1.0, others scaled accordingly",
                    measurement: "Count offspring surviving to reproduction"
                },
                selectionDifferential: {
                    symbol: "S",
                    definition: "Difference in mean trait before and after selection",
                    measurement: "S = mean(survivors) - mean(before selection)",
                    use: "Quantify strength of selection on quantitative traits"
                },
                heritability: {
                    symbol: "h²",
                    definition: "Proportion of phenotypic variance due to genetic variance",
                    range: "0 (not heritable) to 1 (completely heritable)",
                    importance: "Determines response to selection",
                    formula: "R = h²S (breeder's equation)"
                }
            },
            constraintsOnMicroevolution: {
                lackOfVariation: {
                    problem: "Can't evolve without genetic variation",
                    solution: "Wait for mutations or gene flow",
                    example: "Pesticide resistance can't evolve if no resistance alleles exist"
                },
                tradeoffs: {
                    problem: "Improving one trait may harm another",
                    example: "Pesticide resistance often reduces fitness in absence of pesticide",
                    result: "Limits extent of adaptation"
                },
                geneFlow: {
                    problem: "Immigration of maladapted alleles",
                    effect: "Can prevent local adaptation",
                    example: "Gene flow from lowlands prevents high-altitude adaptation"
                },
                smallPopulationSize: {
                    problem: "Drift overpowers weak selection",
                    effect: "Beneficial alleles can be lost by chance",
                    threshold: "Ne·s > 1 for selection to be effective (Ne = effective population size)"
                }
            },
            experimentalEvolution: {
                description: "Studying evolution in controlled lab conditions",
                advantages: [
                    "Can replicate populations",
                    "Control environment precisely",
                    "Watch evolution in real-time",
                    "Freeze samples for later study"
                ],
                examples: {
                    lenskiExperiment: {
                        organism: "E. coli",
                        started: "1988",
                        duration: "35+ years, 75,000+ generations",
                        replicates: "12 populations",
                        observations: [
                            "All populations evolved larger cell size",
                            "All increased fitness in experimental environment",
                            "One population evolved ability to use citrate (new trait)",
                            "Genomes sequenced, mutations identified"
                        ],
                        significance: "Most detailed view of evolution ever"
                    },
                    bacteriophage: {
                        organism: "Viruses infecting bacteria",
                        timeframe: "Hours to days (very fast)",
                        observations: "Evolution of host range, resistance to antibacterials",
                        advantage: "Enormous population sizes, rapid generations"
                    },
                    yeastAdaptation: {
                        organism: "Saccharomyces cerevisiae",
                        experiments: "Adaptation to different carbon sources, temperatures",
                        advantage: "Eukaryote, sexual reproduction can be controlled"
                    }
                }
            },
            microVsMacroevolution: {
                microevolution: {
                    scale: "Within species, populations",
                    time: "Generations to thousands of years",
                    observable: "Yes, directly",
                    examples: "Antibiotic resistance, finch beaks, moth color"
                },
                macroevolution: {
                    scale: "Above species level, major groups",
                    time: "Millions of years",
                    observable: "Indirectly (fossils, phylogenies)",
                    examples: "Origin of tetrapods, mammals, flowering plants"
                },
                relationship: "Macroevolution is accumulated microevolution over long time",
                controversy: "Some debate whether additional processes involved in macroevolution",
                consensus: "Most biologists: same processes, different timescales"
            },
            category: 'microevolution'
        };
    }

    handleMacroevolution(problem) {
        return {
            topic: "Macroevolution: Large-Scale Evolutionary Change",
            definition: "Evolution above the species level; origin of new taxonomic groups and major evolutionary innovations",
            scale: "Species level and higher (genera, families, orders, etc.)",
            timeframe: "Millions to billions of years",
            study: "Through fossils, phylogenies, comparative biology",
            patternsAndProcesses: {
                speciation: {
                    description: "Origin of new species",
                    importance: "Fundamental macroevolutionary process",
                    mechanisms: "Allopatric, sympatric, parapatric",
                    result: "Increases biodiversity"
                },
                extinction: {
                    description: "Loss of species",
                    importance: "As common as speciation over geologic time",
                    types: "Background extinction vs mass extinction",
                    result: "Decreases biodiversity, opens niches"
                },
                adaptiveRadiation: {
                    description: "Rapid diversification into many species",
                    conditions: "Empty niches, key innovations, isolation",
                    examples: "Mammal radiation after dinosaurs, Galápagos finches",
                    importance: "Explains biodiversity patterns"
                },
                stasis: {
                    description: "Little morphological change over long periods",
                    duration: "Can persist for millions of years",
                    observation: "Many species show little change in fossil record",
                    debate: "Gradualism vs punctuated equilibrium"
                },
                evolutionaryTrends: {
                    description: "Directional changes over long time",
                    examples: [
                        "Increasing body size in horses",
                        "Increasing brain size in hominids",
                        "Increasing complexity in some lineages"
                    ],
                    caution: "Not universal or inevitable"
                }
            },
            massExtinctions: {
                definition: "Widespread, rapid loss of substantial proportion of species",
                bigFive: [
                    {
                        name: "End-Ordovician",
                        when: "~444 million years ago",
                        losses: "~85% of species",
                        cause: "Glaciation, sea level changes",
                        affected: "Marine invertebrates"
                    },
                    {
                        name: "Late Devonian",
                        when: "~375 million years ago",
                        losses: "~75% of species",
                        cause: "Possibly climate change, asteroid",
                        affected: "Marine organisms, early forests"
                    },
                    {
                        name: "End-Permian (The Great Dying)",
                        when: "~252 million years ago",
                        losses: "~96% of marine species, ~70% of terrestrial species",
                        cause: "Volcanic eruptions, climate change, ocean anoxia",
                        affected: "Almost all life",
                        significance: "Largest mass extinction ever"
                    },
                    {
                        name: "End-Triassic",
                        when: "~201 million years ago",
                        losses: "~80% of species",
                        cause: "Volcanic eruptions, climate change",
                        affected: "Many marine and terrestrial groups",
                        result: "Opened niches for dinosaurs"
                    },
                    {
                        name: "End-Cretaceous (K-Pg)",
                        when: "~66 million years ago",
                        losses: "~75% of species",
                        cause: "Asteroid impact + volcanic eruptions",
                        affected: "Non-avian dinosaurs, marine reptiles, many others",
                        significance: "Most famous; opened niches for mammals",
                        evidence: "Iridium layer, Chicxulub crater"
                    }
                ],
                consequences: [
                    "Biodiversity rebounds take millions of years",
                    "Dominant groups replaced by formerly minor groups",
                    "Adaptive radiations in surviving lineages",
                    "Reset of ecological communities"
                ],
                currentSituation: {
                    sixthExtinction: "Ongoing, human-caused",
                    rate: "100-1000× background rate",
                    causes: "Habitat loss, climate change, pollution, overexploitation",
                    concern: "Unprecedented rate and human cause"
                }
            },
            evolutionaryInnovations: {
                definition: "Novel traits enabling new ecological opportunities",
                examples: [
                    {
                        innovation: "Photosynthesis",
                        when: "~3.5 billion years ago",
                        organisms: "Cyanobacteria",
                        impact: "Oxygen atmosphere, aerobic respiration possible",
                        significance: "Changed Earth's atmosphere and enabled complex life"
                    },
                    {
                        innovation: "Eukaryotic cell",
                        when: "~2 billion years ago",
                        mechanism: "Endosymbiosis",
                        impact: "Complex cells, multicellularity possible",
                        significance: "Foundation for all complex life"
                    },
                    {
                        innovation: "Multicellularity",
                        when: "~600 million years ago (animals)",
                        organisms: "Multiple independent origins",
                        impact: "Division of labor, larger size, complexity",
                        significance: "Enabled macroscopic life"
                    },
                    {
                        innovation: "Hard body parts",
                        when: "~540 million years ago (Cambrian)",
                        examples: "Shells, skeletons, exoskeletons",
                        impact: "Protection, support, new ecological roles",
                        significance: "Cambrian explosion of diversity"
                    },
                    {
                        innovation: "Jaws",
                        when: "~420 million years ago",
                        organisms: "Fish",
                        impact: "Predation, diverse feeding strategies",
                        origin: "Modified gill arches",
                        significance: "Major shift in vertebrate ecology"
                    },
                    {
                        innovation: "Limbs",
                        when: "~365 million years ago",
                        organisms: "Tetrapods",
                        impact: "Terrestrial locomotion",
                        origin: "Modified fins",
                        significance: "Colonization of land"
                    },
                    {
                        innovation: "Amniotic egg",
                        when: "~320 million years ago",
                        organisms: "Reptiles",
                        impact: "Reproduction independent of water",
                        significance: "Full terrestriality"
                    },
                    {
                        innovation: "Feathers",
                        when: "~150 million years ago",
                        organisms: "Dinosaurs/birds",
                        original: "Likely insulation",
                        later: "Co-opted for flight",
                        significance: "Enabled bird radiation"
                    },
                    {
                        innovation: "Flowers",
                        when: "~140 million years ago",
                        organisms: "Angiosperms",
                        impact: "Co-evolution with pollinators",
                        significance: "Most diverse plant group"
                    },
                    {
                        innovation: "Placenta",
                        when: "~160 million years ago",
                        organisms: "Placental mammals",
                        impact: "Extended gestation, advanced development",
                        significance: "Enabled mammal diversity"
                    }
                ],
                keyFeatures: [
                    "Often arise from modification of existing structures",
                    "Open new ecological opportunities",
                    "Can lead to adaptive radiations",
                    "Sometimes arise through co-option (exaptation)"
                ]
            },
            gradualism_vs_punctuatedEquilibrium: {
                gradualism: {
                    description: "Slow, steady evolutionary change",
                    proposedBy: "Darwin",
                    prediction: "Fossil record should show many intermediate forms",
                    pattern: "Constant change over time",
                    diagram: "Smooth, gradual slopes"
                },
                punctuatedEquilibrium: {
                    description: "Long periods of stasis punctuated by rapid change",
                    proposedBy: "Eldredge and Gould (1972)",
                    prediction: "Fossil record shows sudden appearances, little change",
                    pattern: "Stasis interrupted by rapid speciation",
                    diagram: "Flat lines with sudden jumps",
                    explanation: [
                        "Most evolution occurs during speciation in small, isolated populations",
                        "Speciation is rapid (geologically speaking: thousands of years)",
                        "After speciation, species remain stable (stasis)",
                        "Rapid speciation in small populations not well-preserved in fossils"
                    ]
                },
                debate: {
                    consensus: "Both patterns occur",
                    evidence: "Some lineages show gradualism, others punctuated equilibrium",
                    resolution: "Rates of evolution vary; not either-or",
                    example: "Trilobites show gradualism; many mollusks show punctuated equilibrium"
                }
            },
            evolutionaryDevelopmentalBiology: {
                connection: "Developmental changes produce morphological evolution",
                keyFindings: [
                    "Small genetic changes can have large morphological effects",
                    "Many developmental genes highly conserved",
                    "Changes in gene regulation more important than new genes",
                    "Developmental constraints shape evolutionary possibilities"
                ],
                hoxGenes: {
                    description: "Master regulatory genes controlling body plan",
                    conservation: "Present in all animals, highly conserved",
                    function: "Specify identity of body segments",
                    evolution: [
                        "Gene duplications created Hox gene families",
                        "Changes in Hox expression create morphological changes",
                        "Snake loss of limbs due to Hox expression changes"
                    ],
                    significance: "Small changes in master regulators = large morphological changes"
                },
                heterochrony: {
                    definition: "Changes in timing of developmental events",
                    types: [
                        "Paedomorphosis: retention of juvenile features",
                        "Peramorphosis: extension of development"
                    ],
                    examples: [
                        "Axolotl (retains larval gills as adult)",
                        "Human features (relatively flat face) due to heterochrony"
                    ]
                },
                modularity: {
                    concept: "Body organized into semi-independent modules",
                    significance: "Modules can evolve independently",
                    example: "Limbs can change without affecting other body parts"
                }
            },
            convergentEvolution: {
                definition: "Independent evolution of similar traits in unrelated lineages",
                cause: "Similar selective pressures in similar environments",
                examples: [
                    {
                        trait: "Streamlined body",
                        organisms: "Sharks (fish), ichthyosaurs (reptiles), dolphins (mammals)",
                        environment: "Aquatic",
                        function: "Reduce drag"
                    },
                    {
                        trait: "Wings",
                        organisms: "Insects, pterosaurs, birds, bats",
                        structures: "Completely different anatomically",
                        function: "Powered flight",
                        note: "At least 4 independent origins"
                    },
                    {
                        trait: "Camera eyes",
                        organisms: "Vertebrates, cephalopods (octopus, squid)",
                        structures: "Similar design, different developmental origin",
                        function: "Vision",
                        convergence: "Lens, retina, pupil all evolved independently"
                    },
                    {
                        trait: "Echolocation",
                        organisms: "Bats, toothed whales",
                        mechanism: "Same genes modified independently",
                        function: "Navigation in darkness/murky water"
                    },
                    {
                        trait: "C4 photosynthesis",
                        organisms: "Multiple plant families",
                        origins: "50+ independent evolutions",
                        function: "Efficiency in hot, dry environments"
                    }
                ],
                significance: "Shows natural selection produces similar solutions to similar problems"
            },
            evolutionaryFaunas: {
                cambrian: {
                    period: "541-485 million years ago",
                    dominant: "Trilobites, brachiopods",
                    event: "Cambrian explosion—rapid appearance of animal phyla",
                    significance: "Origin of most modern body plans"
                },
                paleozoic: {
                    period: "485-252 million years ago",
                    dominant: "Brachiopods, crinoids, trilobites",
                    ending: "End-Permian mass extinction"
                },
                modern: {
                    period: "252 million years ago to present",
                    dominant: "Mollusks, arthropods, fish, tetrapods",
                    began: "After Permian extinction",
                    includes: "Rise of dinosaurs, then mammals"
                }
            },
            ratesOfEvolution: {
                factors: [
                    "Strength of selection",
                    "Generation time (faster in short-lived organisms)",
                    "Population size",
                    "Genetic variation",
                    "Environmental change"
                ],
                observations: [
                    "Rates vary enormously among lineages",
                    "Living fossils (e.g., horseshoe crabs) show minimal change",
                    "Some groups evolve rapidly (e.g., cichlid fish)",
                    "Rate not constant within lineages"
                ],
                livingFossils: {
                    examples: "Horseshoe crabs, coelacanth, ginkgo",
                    note: "Morphologically stable, but still evolving genetically"
                }
            },
            diversityOverTime: {
                pattern: "Overall increase in biodiversity through time",
                exceptions: "Mass extinctions cause temporary decreases",
                currentDiversity: "Highest ever? (hard to measure fossil diversity)",
                factors: [
                    "Speciation rate vs extinction rate",
                    "Ecological opportunity",
                    "Evolutionary innovations",
                    "Geographic changes (plate tectonics)"
                ]
            },
            macroevolutionControversies: {
                sameProcesses: {
                    question: "Are macroevolution and microevolution the same processes?",
                    consensus: "Yes, macroevolution is accumulated microevolution",
                    debate: "Some argue additional processes at macroevolutionary scale"
                },
                progress: {
                    question: "Does evolution have direction toward progress/complexity?",
                    answer: "No inevitable direction",
                    observation: "Complexity has increased in some lineages, decreased in others",
                    note: "Bacteria still most successful organisms"
                },
                constraints: {
                    question: "How much does development constrain evolution?",
                    answer: "Significant constraints, but evolution still versatile",
                    evidence: "Convergence shows some solutions repeatedly found"
                }
            },
            category: 'macroevolution'
        };
    }

    handleCoevolution(problem) {
        return {
            topic: "Coevolution: Reciprocal Evolutionary Change",
            definition: "Reciprocal evolutionary changes in two or more species that interact ecologically",
            keyPrinciple: "Each species acts as selective pressure on the other(s)",
            types: {
                pairwise: "Two species coevolving",
                diffuse: "Multiple species coevolving together",
                guild: "Groups of ecologically similar species"
            },
            relationships: {
                mutualism: {
                    definition: "Both species benefit (+/+)",
                    examples: [
                        {
                            name: "Flowering plants and pollinators",
                            plant: "Provides nectar/pollen",
                            pollinator: "Provides pollination service",
                            coevolution: [
                                "Flower shape matches pollinator morphology",
                                "Flower color/scent attracts specific pollinators",
                                "Pollinator mouthparts match flower structure",
                                "Timing of flowering matches pollinator activity"
                            ],
                            specificity: "Ranges from generalized to highly specific",
                            example: "Yucca and yucca moth (obligate mutualism)"
                        },
                        {
                            name: "Ants and acacia trees",
                            tree: "Provides food (nectar, protein bodies) and shelter (hollow thorns)",
                            ant: "Defends tree from herbivores and competing plants",
                            coevolution: "Tree structures evolved specifically for ants",
                            result: "Obligate relationship in some species"
                        },
                        {
                            name: "Mycorrhizae",
                            fungus: "Provides water and minerals to plant",
                            plant: "Provides sugars to fungus",
                            prevalence: "~90% of plant species have mycorrhizae",
                            ancient: "Evolved ~400 million years ago"
                        },
                        {
                            name: "Gut microbiome",
                            microbes: "Aid digestion, produce vitamins, immune system development",
                            host: "Provides habitat and nutrients",
                            specificity: "Host-specific microbial communities",
                            importance: "Essential for host survival"
                        }
                    ],
                    characteristics: [
                        "Often highly specific relationships",
                        "Can become obligate (neither survives without other)",
                        "Selection favors traits benefiting both",
                        "Can lead to extreme specialization"
                    ]
                },
                antagonism: {
                    description: "One benefits, other harmed",
                    types: ["Predator-prey", "Parasite-host", "Herbivore-plant"],
                predatorPrey: {
                        definition: "Predator eats prey",
                        coevolution: "Arms race—escalating adaptations",
                        preyDefenses: [
                            "Speed (gazelles)",
                            "Camouflage (moths, stick insects)",
                            "Warning coloration (poison dart frogs)",
                            "Armor (turtles, armadillos)",
                            "Toxins (many species)",
                            "Behavioral defenses (herding, mobbing)"
                        ],
                        predatorCounters: [
                            "Speed (cheetahs)",
                            "Stealth (cats)",
                            "Keen senses (raptors)",
                            "Weapons (fangs, claws)",
                            "Cooperative hunting (wolves)",
                            "Ambush tactics (spiders, praying mantis)"
                        ],
                        outcome: "Neither side 'wins'—ongoing arms race",
                        redQueenHypothesis: "Must keep evolving just to maintain status quo"
                    },
                    parasiteHost: {
                        definition: "Parasite lives on/in host, harms it",
                        coevolution: [
                            "Host evolves defenses (immune system)",
                            "Parasite evolves counter-defenses (immune evasion)",
                            "Parasite evolves to manipulate host behavior",
                            "Host evolves resistance genes"
                        ],
                        examples: [
                            {
                                name: "Plasmodium (malaria) and humans",
                                host: "Sickle cell allele provides resistance",
                                parasite: "Evolves drug resistance",
                                ongoing: "Continuous coevolution"
                            },
                            {
                                name: "Cuckoos and host birds",
                                parasite: "Lays eggs in other birds' nests",
                                host: "Evolves egg recognition",
                                counter: "Cuckoo eggs mimic host eggs",
                                result: "Ongoing arms race in egg appearance"
                            }
                        ],
                        geneForGene: {
                            description: "Matching resistance and virulence genes",
                            plants: "R genes (resistance)",
                            pathogens: "Avr genes (avirulence/virulence)",
                            result: "Rapid coevolution of matched genes"
                        }
                    },
                    herbivorePlant: {
                        definition: "Herbivore eats plant",
                        plantDefenses: [
                            "Physical: thorns, spines, tough leaves, trichomes",
                            "Chemical: toxins, digestibility reducers, repellents",
                            "Indirect: attract predators of herbivores"
                        ],
                        herbivoreCounters: [
                            "Detoxification enzymes",
                            "Behavioral avoidance of toxins",
                            "Sequestration of plant toxins for own defense",
                            "Tolerance of toxins"
                        ],
                        examples: [
                            {
                                name: "Monarch butterflies and milkweed",
                                plant: "Produces cardiac glycosides (toxic)",
                                herbivore: "Tolerates toxins, sequesters them",
                                result: "Monarch becomes toxic to predators"
                            },
                            {
                                name: "Grasses and grazing mammals",
                                plant: "Silica in leaves (abrasive)",
                                herbivore: "High-crowned teeth that grow continuously",
                                result: "Coevolution of grass defense and tooth morphology"
                            }
                        ]
                    }
                },
                competition: {
                    definition: "Both species harmed by interaction (−/−)",
                    coevolution: "Character displacement—traits diverge to reduce competition",
                    example: "Darwin's finches—beak sizes diverge on islands where species coexist",
                    result: "Resource partitioning"
                }
            },
            armsRaces: {
                definition: "Escalating adaptations and counter-adaptations",
                metaphor: "Military arms race—continuous escalation",
                examples: [
                    "Predator speed vs prey speed",
                    "Toxins vs detoxification",
                    "Camouflage vs prey detection",
                    "Immune system vs pathogen evasion"
                ],
                redQueenHypothesis: {
                    description: "Species must continually evolve to maintain fitness",
                    metaphor: "Running in place—must run to stay in same spot",
                    proposedBy: "Leigh Van Valen (1973)",
                    quote: "From Alice in Wonderland: 'takes all the running you can do to keep in same place'",
                    evidence: "Constant evolution in host-parasite systems",
                    implication: "No final 'solution'—ongoing coevolution"
                },
                outcome: "Rarely complete 'victory'—balance often reached"
            },
            mimicry: {
                batesian: {
                    definition: "Harmless species mimics harmful one",
                    example: "Harmless snake mimics coral snake pattern",
                    model: "Dangerous species (coral snake)",
                    mimic: "Harmless species (king snake)",
                    receiver: "Predator avoiding danger",
                    coevolution: [
                        "Model evolves conspicuous warning signals",
                        "Mimic evolves to resemble model",
                        "Predator evolves to recognize pattern"
                    ],
                    limitation: "Requires model to be more common (or mimicry doesn't work)"
                },
                mullerian: {
                    definition: "Two harmful species mimic each other",
                    example: "Multiple wasp species with similar black-yellow patterns",
                    advantage: "Share cost of educating predators",
                    coevolution: "Both species evolve toward similar appearance",
                    common: "Many toxic butterflies"
                }
            },
            specificitySpectrum: {
                specialized: {
                    description: "Narrow, specific interactions",
                    examples: [
                        "Yucca moth and yucca plant (one moth species, one plant genus)",
                        "Fig wasps and figs (each fig species has specific wasp)",
                        "Some orchids and their pollinators"
                    ],
                    advantages: "Efficient, reliable partnership",
                    risks: "Extinction of one threatens other"
                },
                generalized: {
                    description: "Broad, less specific interactions",
                    examples: [
                        "Honeybees and many flower species",
                        "Many herbivores eat multiple plant species",
                        "Most predators eat multiple prey types"
                    ],
                    advantages: "Flexible, resilient to loss of partners",
                    tradeoffs: "Less efficient relationships"
                }
            },
            geographicMosaicTheory: {
                proposedBy: "John Thompson",
                concept: "Coevolution varies across geographic range",
                principles: [
                    "Selection varies among populations",
                    "Some populations coevolving, others not",
                    "Gene flow connects populations",
                    "Result: mosaic of coevolutionary outcomes"
                ],
                example: "Plant-herbivore interactions stronger in some locations",
                significance: "Coevolution not uniform—varies spatially"
            },
            coevolutionAndBiodiversity: {
                driver: "Coevolution can drive speciation and diversity",
                mechanisms: [
                    "Host specialization leads to parasite speciation",
                    "Pollinator specialization leads to plant speciation",
                    "Arms races drive continuous evolution"
                ],
                examples: [
                    "Insect diversity partly due to plant-insect coevolution",
                    "Flowering plant diversity linked to pollinator coevolution",
                    "Parasite diversity mirrors host diversity"
                ],
                estimate: "Half of species are parasites—coevolution is major force"
            },
            evidenceForCoevolution: {
                matching: {
                    description: "Traits of interacting species match",
                    examples: [
                        "Bill length matches flower depth",
                        "Chemical defenses match detoxification abilities",
                        "Lock-and-key genitalia in insects"
                    ]
                },
                phylogeneticCongruence: {
                    description: "Phylogenies of interacting species match",
                    example: "Fig phylogeny matches fig wasp phylogeny",
                    interpretation: "Speciation in one group drives speciation in other"
                },
                experimental: {
                    description: "Reciprocal selection demonstrated",
                    example: "Bacteria and phage coevolve in lab experiments",
                    observation: "Traits change in response to each other"
                },
                biogeographic: {
                    description: "Trait matching varies geographically",
                    example: "Plant defenses stronger where herbivores present",
                    interpretation: "Local coevolution"
                }
            },
            category: 'coevolution'
        };
    }

    handleEvoDevo(problem) {
        return {
            topic: "Evolutionary Developmental Biology (Evo-Devo)",
            definition: "Study of how developmental processes evolve and how changes in development produce evolutionary change",
            centralQuestion: "How do changes in genes controlling development produce morphological evolution?",
            keyInsights: [
                "Small genetic changes can have large morphological effects",
                "Developmental genes are highly conserved across animals",
                "Changes in gene regulation more important than new genes",
                "Development both enables and constrains evolution"
            ],
            historicalContext: {
                haeckel: {
                    proposal: "Ontogeny recapitulates phylogeny",
                    idea: "Development replays evolutionary history",
                    status: "Oversimplified, but contains kernel of truth",
                    truth: "Early development shows some ancestral features"
                },
                modernSynthesis: {
                    period: "1930s-1950s",
                    omission: "Largely ignored development",
                    focus: "Population genetics, natural selection",
                    gap: "How do genetic changes produce morphological changes?"
                },
                evoDevoRevival: {
                    period: "1980s-present",
                    trigger: "Discovery of Hox genes and their conservation",
                    impact: "Development integrated into evolutionary biology",
                    synthesis: "Genes → Development → Morphology → Evolution"
                }
            },
            hoxGenes: {
                discovery: "Major breakthrough in 1980s",
                definition: "Master regulatory genes controlling body segmentation and identity",
                structure: "Organized in clusters along chromosome",
                collinearity: "Order on chromosome matches order along body axis",
                function: "Specify identity of body segments (head, thorax, abdomen, etc.)",
                conservation: {
                    observation: "Present in all bilateral animals",
                    similarity: "Mouse and fly Hox genes can substitute for each other",
                    implication: "Common genetic toolkit for building animal bodies",
                    significance: "Fundamental body plan specified by conserved genes"
                },
                evolution: {
                    origin: "Single ancestral Hox gene duplicated repeatedly",
                    vertebrates: "Four Hox clusters (due to whole-genome duplications)",
                    arthropods: "One or two clusters (split in some groups)",
                    changes: [
                        "Gene duplications create new Hox genes",
                        "Changes in expression patterns alter morphology",
                        "Changes in Hox code determine segment identity"
                    ]
                },
                examples: [
                    {
                        organism: "Snakes",
                        change: "Hox genes expressed along entire trunk",
                        result: "Ribs form along entire body, no distinct regions",
                        consequence: "Elongated body, no limbs"
                    },
                    {
                        organism: "Insects",
                        change: "Ultrabithorax (Ubx) gene expression",
                        normal: "Suppresses wing development on third thoracic segment",
                        mutation: "Four-winged fly (extra pair of wings)",
                        significance: "Single gene controls major morphological feature"
                    },
                    {
                        organism: "Vertebrate evolution",
                        change: "Changes in Hox gene number and expression",
                        result: "Different numbers of neck vertebrae, fin/limb position",
                        variation: "Giraffes (7 neck vertebrae), swans (25), mammals (7)"
                    }
                ]
            },
            developmentalToolkit: {
                concept: "Shared set of genes and pathways used across animals",
                components: [
                    "Hox genes (body axis)",
                    "Pax6 (eye development)",
                    "Sonic hedgehog (limb patterning)",
                    "BMP genes (bone/tissue formation)",
                    "Wnt pathway (cell fate)",
                    "Notch pathway (cell-cell signaling)"
                ],
                conservation: "Same genes build eyes, limbs, hearts across animals",
                implication: "Evolution doesn't create new genes much—reuses existing ones",
                example: {
                    pax6: {
                        function: "Master control gene for eye development",
                        organisms: "Fruit flies, mice, humans",
                        experiment: "Mouse Pax6 can trigger eye development in fly",
                        significance: "Same gene builds different types of eyes",
                        interpretation: "Common genetic mechanism, different outcomes"
                    }
                }
            },
            regulatoryEvolution: {
                principle: "Changes in when/where/how much genes expressed, not genes themselves",
                mechanism: {
                    cisRegulatory: {
                        description: "DNA sequences controlling gene expression",
                        location: "Near genes they control",
                        function: "Binding sites for transcription factors",
                        evolution: "Changes in binding sites alter expression",
                        advantage: "Can change one use of gene without affecting others"
                    },
                    transcriptionFactors: {
                        description: "Proteins controlling gene expression",
                        function: "Bind to regulatory DNA, turn genes on/off",
                        networks: "Complex interactions among many factors",
                        evolution: "Changes in factors or binding specificity"
                    }
                },
                examples: [
                    {
                        organism: "Stickleback fish",
                        trait: "Pelvic spine reduction",                                mechanism: "Regulatory change in Pitx1 gene expression",
                        result: "Gene not expressed in pelvis, spine doesn't develop",
                        gene: "Pitx1 still functions elsewhere (mouth, etc.)",                                                                          significance: "Regulatory change allows modular evolution"
                    },
                    {                                                                   organism: "Fruit fly body patterns",
                        trait: "Spot patterns on wings",                                mechanism: "Changes in regulatory regions of pigmentation genes",
                        variation: "Different species have different patterns",
                        evolution: "Regulatory changes between species"                                                                             },
                    {                                                                   organism: "Darwin's finches",
                        trait: "Beak shape",
                        mechanism: "Changes in BMP4 and calmodulin expression levels",
                        result: "Higher BMP4 = deeper, wider beak",
                        significance: "Regulatory changes produce adaptive variation"
                    }                                                           ]                                                           },
            heterochrony: {
                definition: "Changes in timing of developmental events",
                types: {                                                            paedomorphosis: {
                        description: "Retention of juvenile features in adult",
                        mechanisms: [
                            "Neoteny: slower development",
                            "Progenesis: early maturation",                                 "Postdisplacement: delayed start of development"
                        ],                                                              examples: [
                            "Axolotl (retains larval gills as adult)",
                            "Humans (retain juvenile skull proportions)",
                            "Some salamanders (some species lose metamorphosis)"                                                                        ]
                    },
                    peramorphosis: {
                        description: "Extension of development beyond ancestral endpoint",
                        mechanisms: [                                                       "Hypermorphosis: extended development",
                            "Acceleration: faster development",
                            "Predisplacement: earlier start"                            ],
                        examples: [                                                         "Irish elk (extended antler growth)",                                                                                           "Some beetles (extended horn growth)"                                                                                       ]
                    }
                },
                significance: "Simple changes in timing can produce major morphological changes"
            },
            heterotopy: {
                definition: "Changes in spatial location of developmental events",
                mechanism: "Changes in where genes are expressed",
                examples: [
                    {
                        trait: "Tetrapod limbs",
                        change: "Hox genes expressed in different positions",
                        result: "Limbs form in different locations along body",
                        variation: "Snakes (no limb buds), whales (no hind limb buds)"
                    },
                    {
                        trait: "Butterfly eyespots",
                        change: "Focal expression of developmental genes",
                        result: "Eyespots in different wing positions",
                        variation: "Different species, different locations"
                    }
                ],
                importance: "Allows evolution of novel structures in new locations"
            },
            modularity: {
                definition: "Body organized into semi-independent developmental units",
                characteristics: [
                    "Modules develop relatively independently",
                    "Each module has own genetic regulatory network",
                    "Changes in one module don't necessarily affect others"
                ],
                examples: [
                    "Limbs (can evolve without affecting trunk)",
                    "Teeth (each tooth type can evolve independently)",
                    "Vertebrae (neck, trunk, tail can vary independently)",
                    "Flower parts (petals, sepals, stamens independent)"
                ],
                advantages: [
                    "Allows evolution of one part without disrupting others",
                    "Enables fine-tuning of individual structures",
                    "Facilitates adaptation to local conditions"
                ],
                significance: "Explains how complex organisms can evolve without everything breaking"
            },
            developmentalConstraints: {
                definition: "Limitations on evolutionary change due to developmental processes",
                types: {
                    physical: {
                        description: "Physical limitations of development",
                        examples: [
                            "Bilateral symmetry constrains possible body plans",
                            "Cell adhesion limits possible tissue arrangements",
                            "Diffusion limits size of structures"
                        ]
                    },
                    morphogenetic: {
                        description: "Limitations from developmental mechanisms",
                        examples: [
                            "Segmentation constrains body organization",
                            "Limb development constrains limb number (tetrapods have 4)",
                            "Developmental pathways limit possible phenotypes"
                        ]
                    },
                    phylogenetic: {
                        description: "Constraints inherited from ancestors",
                        examples: [
                            "Mammals have 7 cervical vertebrae (with rare exceptions)",
                            "Tetrapods have digits arranged in specific pattern",
                            "Vertebrate eye develops as brain outgrowth"
                        ]
                    }
                },
                debate: "How much do constraints limit evolution?",
                view1: "Constraints are strong—evolution channeled into limited pathways",
                view2: "Evolution is versatile—constraints can be overcome",
                consensus: "Constraints are real but not absolute",
                evidence: [
                    "Convergent evolution shows some solutions repeatedly found",
                    "But also enormous diversity shows constraints not absolute"
                ]
            },
            pleiotropy: {
                definition: "One gene affects multiple traits",
                consequence: "Changes in gene can have multiple effects",
                tradeoff: "Beneficial change in one trait may harm another",
                example: {
                    gene: "Gene controlling bone growth",
                    effects: ["Leg length", "Arm length", "Vertebrae shape", "Skull proportions"],
                    problem: "Can't evolve longer legs without affecting other bones",
                    resolution: "Regulatory evolution allows modular changes"
                },
                importance: "Explains why some traits evolve together (genetic correlation)"
            },
            novelty: {
                definition: "Origin of qualitatively new structures",
                question: "How do genuinely new structures evolve?",
                mechanisms: [
                    "Modification of existing structures (most common)",
                    "Co-option of genes for new functions (exaptation)",
                    "Gene duplication followed by divergence",
                    "Changes in developmental modules"
                ],
                examples: [
                    {
                        structure: "Feathers",
                        origin: "Modified scales",
                        stages: [
                            "Simple filaments (insulation)",
                            "Branched filaments",
                            "Flat vanes (flight)"
                        ],
                        coOption: "Structure for insulation co-opted for flight"
                    },
                    {
                        structure: "Turtle shell",
                        origin: "Modified ribs and vertebrae",
                        development: "Ribs grow laterally into unique structure",
                        novelty: "No other vertebrate has this structure"
                    },
                    {
                        structure: "Insect wings",
                        origin: "Debated—possibly gill-like structures or body wall outgrowths",
                        genes: "Co-opted limb development genes",
                        novelty: "No other arthropods have wings"
                    },
                    {
                        structure: "Vertebrate jaw",
                        origin: "Modified gill arches",
                        transition: "Gradual modification visible in fossils",
                        significance: "Major innovation enabling predation"
                    }
                ]
            },
            geneDuplication: {
                mechanism: "Gene copied, creating two versions",
                fate: [
                    "One copy free to evolve new function",
                    "Both copies may subdivide original function",
                    "One copy may be lost (most common)"
                ],
                importance: "Source of genetic raw material for novelty",
                examples: [
                    {
                        genes: "Globin gene family",
                        origin: "Ancient duplications",
                        diversification: "Myoglobin (muscles), hemoglobin α and β (blood), etc.",
                        function: "Each specialized for different oxygen-binding context"
                    },
                    {
                        genes: "Hox genes",
                        origin: "Repeated duplications from single ancestor",
                        vertebrates: "Whole genome duplications created four Hox clusters",
                        result: "More complex body patterning possible"
                    },
                    {
                        genes: "Opsins (vision genes)",
                        origin: "Duplications",
                        diversification: "Different wavelength sensitivities",
                        result: "Color vision"
                    }
                ]
            },
            evoDevoApplications: {
                medicine: {
                    relevance: "Understanding birth defects",
                    examples: [
                        "Polydactyly (extra digits) due to Sonic hedgehog misexpression",
                        "Limb malformations from thalidomide disrupting development",
                        "Cleft palate from developmental timing issues"
                    ],
                    understanding: "Developmental biology reveals causes of congenital disorders"
                },
                agriculture: {
                    relevance: "Crop improvement",
                    examples: [
                        "Dwarf wheat and rice (changes in growth hormone genes)",
                        "Seedless fruits (disrupted development)",
                        "Flower colors (changes in pigmentation gene regulation)"
                    ],
                    approach: "Manipulate developmental pathways for desired traits"
                },
                conservation: {
                    relevance: "Understanding adaptation potential",
                    consideration: "Developmental constraints limit evolutionary responses",
                    application: "Predicting which traits can evolve rapidly"
                },
                synthetc_biology: {
                    relevance: "Engineering organisms",
                    approach: "Modify developmental programs",
                    potential: "Create novel organisms with desired properties"
                }
            },
            majorFindings: {
                conservationOfGenes: "Same genes build very different animals",
                regulatoryChange: "Most morphological evolution via gene regulation, not new genes",
                modularityEnablesEvolution: "Independent modules allow fine-tuning",
                constraintsAreReal: "Development limits evolutionary possibilities",
                smallChangesLargeEffects: "Changes in key regulatory genes have major impacts",
                developmentIntegrates: "Development connects genotype to phenotype"
            },
            futureDirections: [
                "Connecting specific genetic changes to morphological evolution",
                "Understanding gene regulatory networks in detail",
                "Reconstructing evolutionary changes in extinct organisms",
                "Predicting evolutionary trajectories",
                "Engineering novel developmental programs"
            ],
            category: 'evo_devo'
        };
    }

    // CONTENT GENERATION METHODS

    generateEvolutionContent(problem, content) {
        const contentSections = [];

        // Generate overview section
        contentSections.push(this.generateOverviewSection(problem, content));

        // Generate detailed content based on topic type
        contentSections.push(this.generateDetailedContentSection(content));

        // Add comparisons if available
        if (content.comparisons || content.comparison || content.comparisonTable) {
            contentSections.push(this.generateComparisonsSection(content));
        }

        // Add examples section
        if (content.examples || content.classicExamples) {
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

    generateDetailedContentSection(content) {
        return {
            sectionType: 'detailed_content',
            title: 'Detailed Content',
            content: content
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
            examples: content.examples || content.classicExamples,
            applications: content.applications
        };
    }

    // HELPER METHODS

    extractKeyPoints(content) {
        const keyPoints = [];

        if (content.concepts) keyPoints.push(...content.concepts);
        if (content.keyPrinciples) keyPoints.push(...content.keyPrinciples);
        if (content.prerequisites) keyPoints.push(...content.prerequisites);
        if (content.mainCategories) keyPoints.push(...content.mainCategories);

        return keyPoints.slice(0, 5); // Limit to top 5 key points
    }

    getTopicRelevance(topicType) {
        const relevance = {
            natural_selection: "Natural selection is the primary mechanism of adaptive evolution",
            evolution_mechanisms: "Understanding all evolutionary mechanisms is fundamental to evolutionary biology",
            hardy_weinberg: "Hardy-Weinberg provides mathematical foundation for population genetics",
            speciation: "Speciation explains the origin of biodiversity",
            evidence_evolution: "Multiple lines of evidence strongly support evolutionary theory",
            adaptation: "Adaptation explains how organisms become suited to their environments",
            genetic_variation: "Genetic variation is essential for evolutionary change",
            phylogeny: "Phylogeny reveals evolutionary relationships among organisms",
            microevolution: "Microevolution demonstrates evolution in observable timeframes",
            macroevolution: "Macroevolution explains large-scale patterns in life's history",
            coevolution: "Coevolution shapes ecological relationships and biodiversity",
            evo_devo: "Evo-devo connects genes, development, and morphological evolution"
        };

        return relevance[topicType] || "Important evolutionary concept";
    }

    // DIAGRAM GENERATION

    generateEvolutionDiagramData() {
        if (!this.currentContent) return;

        const { type } = this.currentProblem;

        this.diagramData = {
            type: type,
            diagrams: this.getRelevantDiagrams(type),
            placeholder: true,
            note: "Diagram generation will be implemented with actual evolution diagrams"
        };
    }

    getRelevantDiagrams(topicType) {
        const diagramMap = {
            natural_selection: ["selection_types", "peppered_moth", "finch_beaks", "fitness_landscape"],
            evolution_mechanisms: ["four_mechanisms", "genetic_drift", "gene_flow", "mutation_selection_balance"],
            hardy_weinberg: ["allele_frequency", "punnett_square", "hw_conditions", "hw_calculations"],
            speciation: ["allopatric_speciation", "sympatric_speciation", "reproductive_isolation", "adaptive_radiation"],
            evidence_evolution: ["fossil_record", "homologous_structures", "phylogenetic_tree", "molecular_clock"],
            adaptation: ["adaptation_examples", "fitness_components", "tradeoffs", "local_adaptation"],
            genetic_variation: ["sources_variation", "heterozygosity", "polymorphism", "variation_maintenance"],
            phylogeny: ["phylogenetic_tree", "cladogram", "three_domains", "tree_of_life"],
            microevolution: ["allele_frequency_change", "selection_response", "drift_simulation", "experimental_evolution"],
            macroevolution: ["mass_extinctions", "adaptive_radiation", "gradualism_vs_punctuated", "evolutionary_trends"],
            coevolution: ["arms_race", "mutualism", "mimicry", "coevolution_examples"],
            evo_devo: ["hox_genes", "regulatory_evolution", "heterochrony", "modularity"]
        };

        return diagramMap[topicType] || [];
    }

    // WORKBOOK GENERATION

    generateEvolutionWorkbook() {
        if (!this.currentContent || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createEvolutionProblemSection(),
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
            title: `Evolution Biology Workbook: ${this.currentProblem.originalTopic}`,
            createdAt: new Date().toISOString(),
            type: this.currentProblem.type,
            sections: []
        };
    }

    createEvolutionProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Topic Information',
            type: 'problem',
            data: [
                ['Topic Type', this.currentProblem.type],
                ['Main Topic', this.currentProblem.originalTopic],
                ['Sub-Topic', this.currentProblem.subTopic || 'General'],
                ['Category', this.evolutionTopics[this.currentProblem.type]?.category || 'N/A']
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

        if (this.currentContent.overview) {
            overviewData.push(['Overview', this.currentContent.overview]);
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

        // Add key content from the topic
        Object.entries(this.currentContent).forEach(([key, value]) => {
            if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
                contentData.push([key.toUpperCase(), '']);
                this.flattenObject(value, contentData, '  ');
                contentData.push(['', '']); // Spacing
            } else if (typeof value === 'string') {
                contentData.push([key, value]);
            }
        });

        return contentData.length > 0 ? {
            title: 'Detailed Content',
            type: 'detailed_content',
            data: contentData
        } : null;
    }

    flattenObject(obj, dataArray, indent = '') {
        Object.entries(obj).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                dataArray.push([indent + key, value.join('; ')]);
            } else if (typeof value === 'object' && value !== null) {
                dataArray.push([indent + key, '']);
                this.flattenObject(value, dataArray, indent + '  ');
            } else {
                dataArray.push([indent + key, String(value)]);
            }
        });
    }
    createComparisonsSection() {
        const comparisons = this.currentContent?.comparisons || this.currentContent?.comparison || this.currentContent?.comparisonTable;
        if (!comparisons) return null;                          
        const comparisonData = [];                              
        if (comparisons.headers && comparisons.data) {                      // Table format
            comparisonData.push(comparisons.headers);                       comparisonData.push(...comparisons.data);
        } else if (typeof comparisons === 'object') {                       // Object format
            Object.entries(comparisons).forEach(([name, data]) => {
                comparisonData.push([name.toUpperCase(), '']);
                if (typeof data === 'object') {
                    Object.entries(data).forEach(([key, value]) => {
                        comparisonData.push([`  ${key}`, String(value)]);                                                                           });
                }                                                               comparisonData.push(['', '']);                              });
        }                                                       
        return comparisonData.length > 0 ? {                                title: 'Comparisons and Contrasts',
            type: 'comparisons',                                            data: comparisonData
        } : null;
    }
                                                                    createExamplesApplicationsSection() {
        if (!this.currentContent.examples && !this.currentContent.classicExamples && !this.currentContent.applications) return null;                                                            
        const data = [];                                        
        const examples = this.currentContent.examples || this.currentContent.classicExamples;
        if (examples) {                                                     data.push(['EXAMPLES', '']);
            if (Array.isArray(examples)) {                                      examples.forEach(example => {
                    if (typeof example === 'string') {                                  data.push(['•', example]);
                    } else if (typeof example === 'object') {
                        data.push([example.name || 'Example', '']);
                        Object.entries(example).forEach(([key, value]) => {
                            if (key !== 'name') {
                                const displayValue = Array.isArray(value) ? value.join(', ') : String(value);
                                data.push([`  ${key}`, displayValue]);
                            }                                                           });
                    }
                });
            }                                                               data.push(['', '']); // Spacing
        }

        if (this.currentContent.applications) {                             data.push(['APPLICATIONS', '']);
            if (Array.isArray(this.currentContent.applications)) {
                this.currentContent.applications.forEach(app => {                                                                                   data.push(['•', app]);
                });                                                         }
        }

        return data.length > 0 ? {
            title: 'Examples and Applications',
            type: 'examples_applications',
            data: data                                                  } : null;
    }

    createMisconceptionsSection() {
        if (!this.includeCommonMisconceptions) return null;

        const misconceptions = this.commonMisconceptions[this.currentProblem.type];                                                     if (!misconceptions) return null;

        const data = [['Category', 'Common Misconceptions']];

        Object.entries(misconceptions).forEach(([category, miscList]) => {
            data.push(['', '']); // Spacing                                 data.push([category.toUpperCase(), '']);
            miscList.forEach(misc => {
                data.push(['•', misc]);                                     });
        });                                                     
        return {                                                            title: 'Common Misconceptions',
            type: 'misconceptions',
            data: data
        };
    }

    createPedagogicalNotesSection() {                                   if (!this.includePedagogicalNotes) return null;

        const lesson = this.lessons[this.currentProblem.type];          if (!lesson) return null;
                                                                        const data = [
            ['Lesson Title', lesson.title],                                 ['', ''],
            ['KEY CONCEPTS', '']
        ];                                                      
        if (lesson.concepts) {                                              lesson.concepts.forEach(concept => {
                data.push(['•', concept]);                                  });
        }

        if (lesson.theory) {                                                data.push(['', '']);
            data.push(['THEORY', lesson.theory]);
        }

        if (lesson.keyDefinitions) {
            data.push(['', '']);
            data.push(['KEY DEFINITIONS', '']);
            Object.entries(lesson.keyDefinitions).forEach(([term, definition]) => {
                data.push([term, definition]);                              });
        }                                                       
        if (lesson.mainCategories) {                                        data.push(['', '']);
            data.push(['MAIN CATEGORIES', '']);
            lesson.mainCategories.forEach(cat => {                              data.push(['•', cat]);
            });                                                         }
                                                                        if (lesson.applications) {
            data.push(['', '']);
            data.push(['APPLICATIONS', '']);
            lesson.applications.forEach(app => {                                data.push(['•', app]);
            });
        }                                                       
        return {                                                            title: 'Teaching Notes',
            type: 'pedagogical',                                            data: data
        };
    }                                                           
    createDiagramReferencesSection() {
        if (!this.diagramData || !this.includeVisualizations) return null;
                                                                        const data = [
            ['Topic', this.diagramData.type],
            ['Diagram Status', this.diagramData.placeholder ? 'Placeholder (to be implemented)' : 'Available'],
            ['', ''],                                                       ['RELEVANT DIAGRAMS', '']
        ];

        if (this.diagramData.diagrams) {                                    this.diagramData.diagrams.forEach(diagram => {
                data.push(['•', diagram]);                                  });
        }

        if (this.diagramData.note) {
            data.push(['', '']);                                            data.push(['Note', this.diagramData.note]);
        }                                                       
        return {                                                            title: 'Diagram References',
            type: 'diagrams',
            data: data
        };
    }

    // ASSESSMENT AND LEARNING SUPPORT METHODS                  
    /**assessContentDifficulty() {
        if (!this.currentContent) return 'unknown';             
        let difficultyScore = 0;

        // Simple topics                                                const simpleTopics = ['adaptation', 'evidence_evolution'];                                                                      if (simpleTopics.includes(this.currentProblem.type)) {
            difficultyScore += 1;                                       }

        // Intermediate topics
        const intermediateTopics = ['natural_selection', 'genetic_variation', 'speciation', 'phylogeny'];                               if (intermediateTopics.includes(this.currentProblem.type)) {                                                                        difficultyScore += 2;
        }                                                       
        // Complex topics
        const complexTopics = ['hardy_weinberg', 'evolution_mechanisms', 'coevolution', 'evo_devo', 'macroevolution'];
        if (complexTopics.includes(this.currentProblem.type)) {             difficultyScore += 3;
        }                                                       
        // Adjust based on detail level                                 if (this.explanationLevel === 'detailed') difficultyScore += 1;
        if (this.explanationLevel === 'basic') difficultyScore -= 1;

        // Return difficulty rating
        if (difficultyScore <= 2) return 'beginner';                    if (difficultyScore <= 4) return 'intermediate';
        return 'advanced';
    }  
    */                                                         
    generateLearningObjectives() {
        if (!this.currentProblem) return [];
                                                                        const objectivesDatabase = {
            natural_selection: [                                                "Explain the four requirements for natural selection",
                "Distinguish between types of natural selection (directional, stabilizing, disruptive)",
                "Analyze examples of natural selection in nature",
                "Predict outcomes of selection on populations"
            ],                                                              evolution_mechanisms: [
                "Compare and contrast the four mechanisms of evolution",
                "Explain how genetic drift differs from natural selection",                                                                     "Describe how gene flow affects populations",
                "Analyze which mechanisms dominate in different situations"
            ],
            hardy_weinberg: [
                "State the Hardy-Weinberg equations and their uses",                                                                            "Calculate allele and genotype frequencies",
                "Identify when populations are in Hardy-Weinberg equilibrium",
                "Use Hardy-Weinberg to detect evolution"
            ],
            speciation: [
                "Define species and explain species concepts",
                "Compare allopatric and sympatric speciation",
                "Describe reproductive isolating mechanisms",
                "Analyze examples of speciation in nature"
            ],
            evidence_evolution: [                                               "Describe multiple lines of evidence supporting evolution",
                "Interpret fossil evidence and transitional forms",                                                                             "Explain homologous vs analogous structures",
                "Use molecular evidence to infer relationships"             ],
            adaptation: [                                                       "Define adaptation and fitness correctly",
                "Distinguish adaptation from acclimation",                      "Identify constraints on adaptation",
                "Analyze trade-offs in adaptation"
            ],                                                              genetic_variation: [
                "Explain sources of genetic variation",
                "Describe how variation is measured",
                "Analyze factors affecting variation levels",
                "Understand importance of variation for evolution"                                                                          ],
            phylogeny: [                                                        "Read and interpret phylogenetic trees",
                "Understand how phylogenies are constructed",
                "Distinguish monophyletic, paraphyletic, and polyphyletic groups",
                "Apply phylogenetic thinking to biological questions"
            ],                                                              microevolution: [
                "Define microevolution",
                "Measure changes in allele frequencies",
                "Analyze examples of observable evolution",
                "Connect microevolution to evolutionary mechanisms"
            ],
            macroevolution: [
                "Explain patterns in macroevolution",
                "Describe mass extinctions and their consequences",
                "Understand evolutionary innovations",
                "Connect microevolution to macroevolution"
            ],
            coevolution: [
                "Define coevolution and provide examples",                      "Distinguish mutualism, parasitism, and predation",                                                                             "Explain evolutionary arms races",
                "Analyze coevolutionary relationships"
            ],                                                              evo_devo: [
                "Explain how development relates to evolution",                 "Describe role of Hox genes in evolution",
                "Understand regulatory evolution",                              "Analyze developmental constraints"
            ]
        };

        return objectivesDatabase[this.currentProblem.type] || [
            "Understand key concepts of this topic",
            "Apply knowledge to evolutionary contexts",
            "Make connections to other evolutionary principles"
        ];                                                          }
                                                                    identifyPrerequisites() {
        if (!this.currentProblem) return [];                    
        const prerequisitesDatabase = {
            natural_selection: [                                                "Basic understanding of inheritance",
                "Concept of variation in populations"
            ],
            evolution_mechanisms: [
                "Natural selection basics",                                     "Understanding of alleles and genes"
            ],                                                              hardy_weinberg: [
                "Allele and genotype concepts",
                "Basic algebra",
                "Mendelian genetics"
            ],
            speciation: [                                                       "Natural selection",
                "Geographic isolation concepts",                                "Understanding of species concept"
            ],                                                              evidence_evolution: [
                "Basic evolutionary concepts",
                "Understanding of fossils and geology"
            ],                                                              adaptation: [
                "Natural selection",                                            "Understanding of traits and environments"
            ],                                                              genetic_variation: [
                "Genetics basics (alleles, genes, mutations)",
                "Understanding of DNA and inheritance"
            ],
            phylogeny: [                                                        "Evolution basics",
                "Understanding of common ancestry",
                "Classification concepts"
            ],
            microevolution: [
                "Allele frequency concepts",                                    "Population genetics basics",
                "Hardy-Weinberg equilibrium"                                ],
            macroevolution: [                                                   "Microevolution concepts",
                "Speciation",
                "Geological timescales"
            ],                                                              coevolution: [
                "Natural selection",
                "Ecological interactions",
                "Adaptation concepts"
            ],
            evo_devo: [
                "Basic genetics",
                "Developmental biology",
                "Evolutionary mechanisms"
            ]
        };                                                      
        return prerequisitesDatabase[this.currentProblem.type] || [
            "General biology background"
        ];
    }
    generateStudyTips() {
        if (!this.currentProblem) return [];

        const studyTipsDatabase = {
            natural_selection: [
                "Focus on the FOUR requirements—all must be met",                                                                               "Practice distinguishing types of selection from graphs",                                                                       "Use real-world examples to remember concepts",
                "Don't confuse selection with evolution (selection is one mechanism)"
            ],
            evolution_mechanisms: [
                "Create a comparison table of the four mechanisms",
                "Remember: selection is non-random, drift is random",
                "Practice identifying which mechanism is acting in scenarios",                                                                  "Understand when each mechanism is strongest"
            ],
            hardy_weinberg: [
                "Practice, practice, practice calculations",
                "Always check if p + q = 1",
                "Remember the five conditions—if violated, evolution occurs",                                                                   "Use H-W to detect evolution, not to describe it"                                                                           ],
            speciation: [
                "Draw diagrams of allopatric vs sympatric speciation",
                "Make flashcards for reproductive isolating mechanisms",
                "Practice identifying prezygotic vs postzygotic isolation",                                                                     "Use examples to remember concepts"
            ],                                                              evidence_evolution: [
                "Organize evidence by category (fossils, anatomy, molecular, etc.)",
                "For each category, know examples",                             "Understand why multiple lines of evidence are powerful",
                "Practice explaining evidence to others"
            ],
            adaptation: [                                                       "Remember: fitness = reproductive success, not strength",                                                                       "Distinguish adaptation (evolution) from acclimation (physiology)",
                "Think about trade-offs—no perfect adaptation",
                "Use examples from different organisms and environments"
            ],
            genetic_variation: [
                "Know all sources of variation",                                "Understand which create NEW variation vs shuffle existing",                                                                    "Practice calculating heterozygosity",
                "Connect variation to evolution—no variation, no evolution"
            ],
            phylogeny: [                                                        "Practice reading trees from tips to nodes",
                "Remember: trees can be rotated around nodes",
                "Focus on nodes (common ancestors), not just tips",
                "Draw your own trees to understand relationships"
            ],                                                              microevolution: [
                "Connect to Hardy-Weinberg—deviations = evolution",
                "Practice calculating allele frequency changes",
                "Use real examples (antibiotic resistance, etc.)",
                "Understand it's same processes as macroevolution, shorter time"
            ],                                                              macroevolution: [
                "Learn the big five mass extinctions",                          "Focus on patterns (adaptive radiation, stasis, trends)",
                "Connect to microevolution—accumulated changes",
                "Use geological timescale to put events in context"                                                                         ],
            coevolution: [                                                      "Make flowcharts showing reciprocal changes",
                "Distinguish mutualism, parasitism, predation",                 "Use specific examples for each type",
                "Think about arms races—continuous evolution"
            ],
            evo_devo: [
                "Focus on Hox genes as master regulators",
                "Understand regulatory change vs coding sequence change",
                "Use examples (snakes, stickleback fish) to anchor concepts",
                "Draw connections between genes → development → morphology"
            ]
        };

        return studyTipsDatabase[this.currentProblem.type] || [
            "Review material regularly",
            "Create visual aids and diagrams",
            "Practice active recall",
            "Relate concepts to real-world examples"
        ];
    }

    generateAssessmentQuestions() {
        if (!this.currentProblem) return [];

        const questionsDatabase = {
            natural_selection: [
                {
                    question: "What are the four requirements for natural selection to occur?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "In a drought, finches with larger beaks survive better because they can crack larger seeds. What type of selection is this?",
                    type: "application",
                    difficulty: "medium"
                },
                {
                    question: "Explain why natural selection doesn't create variation—it only acts on existing variation.",
                    type: "explanation",
                    difficulty: "medium"
                }
            ],
            evolution_mechanisms: [
                {
                    question: "Which mechanism of evolution is random with respect to fitness?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "A population of 50 butterflies gets reduced to 5 by a storm. What mechanism will be strongest?",
                    type: "application",
                    difficulty: "medium"
                },
                {
                    question: "Compare and contrast genetic drift and gene flow in terms of their effects on genetic variation.",
                    type: "comparison",
                    difficulty: "hard"
                }
            ],
            hardy_weinberg: [
                {
                    question: "If p = 0.6, what is q?",
                    type: "calculation",
                    difficulty: "easy"
                },
                {
                    question: "In a population, 16% have a recessive trait (aa). What is the frequency of heterozygotes?",
                    type: "calculation",
                    difficulty: "medium"
                },
                {
                    question: "A population is not in Hardy-Weinberg equilibrium. What does this tell you?",
                    type: "interpretation",
                    difficulty: "medium"
                }
            ],
            speciation: [
                {
                    question: "What is the biological species concept?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Distinguish between allopatric and sympatric speciation.",
                    type: "comparison",
                    difficulty: "medium"
                },
                {
                    question: "Why is polyploidy more common in plants than animals as a mechanism of speciation?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            evidence_evolution: [
                {
                    question: "Name three types of evidence for evolution.",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "How do homologous structures provide evidence for common ancestry?",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "Why are gaps in the fossil record not a problem for evolutionary theory?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            adaptation: [
                {
                    question: "Define fitness in evolutionary terms.",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Explain why camouflage in prey is an adaptation.",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "Why can't organisms be perfectly adapted to their environment?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            genetic_variation: [
                {
                    question: "What is the ultimate source of all genetic variation?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "How does sexual reproduction increase genetic variation without creating new alleles?",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "Explain why genetic variation is necessary for natural selection to cause evolution.",
                    type: "analysis",
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
                    question: "Given a tree, identify which two species are most closely related.",
                    type: "interpretation",
                    difficulty: "medium"
                },
                {
                    question: "Why is 'Reptilia' considered a paraphyletic group?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            microevolution: [
                {
                    question: "Define microevolution.",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Give an example of microevolution that has been directly observed.",
                    type: "application",
                    difficulty: "medium"
                },
                {
                    question: "How is microevolution related to macroevolution?",
                    type: "comparison",
                    difficulty: "hard"
                }
            ],
            macroevolution: [
                {
                    question: "What is adaptive radiation?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Describe the consequences of the K-Pg mass extinction.",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "Compare gradualism and punctuated equilibrium.",
                    type: "comparison",
                    difficulty: "hard"
                }
            ],
            coevolution: [
                {
                    question: "Define coevolution.",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Explain the coevolutionary relationship between flowering plants and pollinators.",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "What is the Red Queen hypothesis and how does it relate to coevolution?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            evo_devo: [
                {
                    question: "What are Hox genes?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "How can changes in gene regulation produce morphological evolution?",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "Explain the concept of developmental constraints on evolution.",
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
            natural_selection: ['adaptation', 'evolution_mechanisms', 'microevolution'],
            evolution_mechanisms: ['natural_selection', 'hardy_weinberg', 'genetic_variation'],
            hardy_weinberg: ['evolution_mechanisms', 'microevolution', 'population_genetics'],
            speciation: ['evolution_mechanisms', 'macroevolution', 'phylogeny'],
            evidence_evolution: ['phylogeny', 'macroevolution', 'natural_selection'],
            adaptation: ['natural_selection', 'coevolution', 'genetic_variation'],
            genetic_variation: ['evolution_mechanisms', 'hardy_weinberg', 'microevolution'],
            phylogeny: ['speciation', 'macroevolution', 'evidence_evolution'],
            microevolution: ['hardy_weinberg', 'natural_selection', 'evolution_mechanisms'],
            macroevolution: ['speciation', 'phylogeny', 'evo_devo'],
            coevolution: ['adaptation', 'natural_selection', 'speciation'],
            evo_devo: ['macroevolution', 'adaptation', 'genetic_variation']
        };

        const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];
        
        return relatedTypes.map(type => ({
            type: type,
            name: this.evolutionTopics[type]?.name,
            description: this.evolutionTopics[type]?.description
        }));
    }

    generateGlossary() {
        if (!this.currentContent) return {};

        const glossary = {};

        // Extract key terms from keyDefinitions if available
        const lesson = this.lessons[this.currentProblem.type];
        if (lesson && lesson.keyDefinitions) {
            Object.entries(lesson.keyDefinitions).forEach(([term, definition]) => {
                glossary[term] = definition;
            });
        }

        // Add additional terms from content
        if (this.currentContent.keyTerms) {
            Object.entries(this.currentContent.keyTerms).forEach(([term, definition]) => {
                glossary[term] = definition;
            });
        }

        return glossary;
    }

    generateProcessTimeline(processName) {
        const timelines = {
            'Natural Selection': [
                { step: 'Variation', description: 'Individuals vary in heritable traits' },
                { step: 'Overproduction', description: 'More offspring than can survive' },
                { step: 'Competition', description: 'Struggle for limited resources' },
                { step: 'Differential Survival', description: 'Some variants survive better' },
                { step: 'Reproduction', description: 'Successful variants reproduce more' },
                { step: 'Inheritance', description: 'Advantageous traits passed to offspring' },
                { step: 'Population Change', description: 'Allele frequencies change over generations' }
            ],
            'Speciation': [
                { step: 'Initial Population', description: 'Single interbreeding population' },
                { step: 'Separation', description: 'Geographic or reproductive barrier arises' },
                { step: 'Genetic Divergence', description: 'Populations evolve independently' },
                { step: 'Reproductive Isolation', description: 'Cannot interbreed even if reunited' },
                { step: 'Distinct Species', description: 'Two separate species formed' }
            ],
            'Hardy-Weinberg': [
                { step: 'Calculate p and q', description: 'Determine allele frequencies' },
                { step: 'Apply equation', description: 'Use p² + 2pq + q² = 1' },
                { step: 'Compare to actual', description: 'Compare predicted to observed frequencies' },
                { step: 'Assess equilibrium', description: 'Determine if population evolving' }
            ],
            'Coevolution': [
                { step: 'Initial Interaction', description: 'Species begin interacting ecologically' },
                { step: 'Selection on Species A', description: 'Species B acts as selective pressure' },
                { step: 'Adaptation in Species A', description: 'Species A evolves in response' },
                { step: 'Selection on Species B', description: 'Species A acts as selective pressure' },
                { step: 'Adaptation in Species B', description: 'Species B evolves in response' },
                { step: 'Reciprocal Evolution', description: 'Cycle continues—ongoing arms race' }
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

        // Add major sections as children
        if (this.currentContent.majorEvidenceTypes) {
            hierarchy.children.push({
                name: 'Evidence Types',
                type: 'section',
                count: Object.keys(this.currentContent.majorEvidenceTypes).length
            });
        }

        if (this.currentContent.fourMainMechanisms) {
            hierarchy.children.push({
                name: 'Mechanisms',
                type: 'section',
                count: 4
            });
        }

        if (this.currentContent.typesOfSelection) {
            hierarchy.children.push({
                name: 'Types of Selection',
                type: 'section',
                count: Object.keys(this.currentContent.typesOfSelection).length
            });
        }

        if (this.currentContent.classicExamples) {
            hierarchy.children.push({
                name: 'Examples',
                type: 'section',
                count: this.currentContent.classicExamples.length
            });
        }

        return hierarchy;
    }

    // UTILITY METHODS

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
            difficulty: this.assessContentDifficulty()
        };
    }

    calculateContentCompleteness() {
        if (!this.currentContent) return 0;

        let score = 0;
        const maxScore = 10;

        if (this.currentContent.topic) score += 1;
        if (this.currentContent.definition || this.currentContent.overview) score += 1;
        if (this.currentContent.examples || this.currentContent.classicExamples) score += 1;
        if (this.currentContent.applications) score += 1;
        if (this.currentContent.keyTerms || this.currentContent.keyDefinitions) score += 1;
        
        // Check for substantial content
        const hasSubstantiveContent = Object.keys(this.currentContent).length > 5;
        if (hasSubstantiveContent) score += 3;

        // Check for examples and comparisons
        if (this.currentContent.comparisons || this.currentContent.comparisonTable) score += 1;
        if (this.currentContent.mechanism || this.currentContent.mechanisms) score += 1;

        return Math.round((score / maxScore) * 100);
    }

    getAvailableTopics() {
        return Object.entries(this.evolutionTopics).map(([key, topic]) => ({
            id: key,
            name: topic.name,
            category: topic.category,
            description: topic.description
        }));
    }

    getTopicDetails(topicId) {
        const topic = this.evolutionTopics[topicId];
        if (!topic) return null;

        // Temporarily set current problem to get correct data
        this.currentProblem = { type: topicId };

        const details = {
            id: topicId,
            name: topic.name,
            category: topic.category,
            description: topic.description,
            lesson: this.lessons[topicId],
            prerequisites: this.identifyPrerequisites(),
            learningObjectives: this.generateLearningObjectives(),
            relatedTopics: this.suggestRelatedTopics(),
            studyTips: this.generateStudyTips(),
            assessmentQuestions: this.generateAssessmentQuestions(),
            difficulty: this.assessContentDifficulty()
        };

        // Reset current problem
        this.currentProblem = null;

        return details;
    }

    formatEvolutionTerm(term) {
        // Format evolution terms with proper symbols
        const formatted = term
            .replace(/delta/gi, this.evolutionSymbols.delta)
            .replace(/p\^2/g, this.evolutionSymbols.p2)
            .replace(/q\^2/g, this.evolutionSymbols.q2)
            .replace(/2pq/g, this.evolutionSymbols['2pq'])
            .replace(/->/g, this.evolutionSymbols.arrow)
            .replace(/~/g, this.evolutionSymbols.approximately);

        return formatted;
    }

    validateEvolutionContent(content) {
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

        if (!content.definition && !content.overview) {
            validationResults.suggestions.push("Consider adding a definition or overview");
        }

        // Check for examples
        if (!content.examples && !content.classicExamples) {
            validationResults.suggestions.push("Consider adding examples to illustrate concepts");
        }

        return validationResults;
    }

    exportContent(format = 'json') {
        if (!this.currentContent) return null;

        switch (format) {
            case 'json':
                return JSON.stringify(this.currentContent, null, 2);
            
            case 'text':
                return this.convertToText(this.currentContent);
            
            default:
                return this.currentContent;
        }
    }

    convertToText(content) {
        let text = `${content.topic}\n${'='.repeat(content.topic.length)}\n\n`;

        if (content.definition) {
            text += `Definition: ${content.definition}\n\n`;
        }

        if (content.overview) {
            text += `Overview: ${content.overview}\n\n`;
        }

        // Add other sections as needed

        return text;
    }
}

// Export the class
export default EnhancedEvolutionBiologyWorkbook;
