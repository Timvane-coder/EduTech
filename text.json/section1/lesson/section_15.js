

inheritancePatterns: {
    title: "Inheritance Patterns: Mendelian and Beyond",

    databaseLinks: {
        misconceptions: [
            'mendelianBasics',
            'dominanceAndRecessiveness',
            'sexLinkedInheritance',
            'multipleAllelesAndCodominance',
            'extendedInheritance'
        ],
        contextualScenarios: [
            'mendelianBasics',
            'mendelianKinetics',
            'sexLinkedInheritance',
            'extendedInheritance'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'specimens',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'dissectionAndExperiment'
        ],
        assessmentRubrics: [
            'remember',
            'understand',
            'apply',
            'analyze',
            'evaluate',
            'create'
        ],
        assessmentQuestions: [
            'mendelianBasics',
            'mendelianKinetics',
            'sexLinkedInheritance',
            'extendedInheritance'
        ]
    },

    conceptLinks: {
        "Alleles segregate during gamete formation (Law of Segregation)": {
            misconceptions:      ['mendelianBasics'],
            scenarios:           ['mendelianBasics'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['mendelianBasics']
        },
        "Alleles of different genes assort independently (Law of Independent Assortment)": {
            misconceptions:      ['mendelianBasics'],
            scenarios:           ['mendelianBasics'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['mendelianBasics']
        },
        "Dominance relationships determine phenotype from genotype": {
            misconceptions:      ['dominanceAndRecessiveness'],
            scenarios:           ['mendelianBasics'],
            studyTips:           ['comparisonTables', 'flashcards'],
            assessmentRubrics:   ['understand', 'apply'],
            assessmentQuestions: ['mendelianBasics']
        },
        "Probability rules predict offspring genotype and phenotype ratios": {
            misconceptions:      ['mendelianBasics'],
            scenarios:           ['mendelianKinetics'],
            studyTips:           ['diagrams', 'comparisonTables', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['mendelianKinetics']
        },
        "Sex-linked genes show inheritance patterns tied to sex chromosomes": {
            misconceptions:      ['sexLinkedInheritance'],
            scenarios:           ['sexLinkedInheritance'],
            studyTips:           ['diagrams', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['sexLinkedInheritance']
        },
        "Extensions of Mendelian genetics explain non-3:1 phenotypic ratios": {
            misconceptions:      ['multipleAllelesAndCodominance', 'extendedInheritance'],
            scenarios:           ['extendedInheritance'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['extendedInheritance']
        }
    },

    topicIntroduction: {
        overview: "Inheritance patterns describe how traits are transmitted from parents to offspring through generations. Gregor Mendel's foundational experiments with pea plants in the 1860s revealed two laws — Segregation and Independent Assortment — that remain the bedrock of genetics. Modern genetics has extended Mendel's framework to explain incomplete dominance, codominance, multiple alleles, sex linkage, epistasis, and polygenic traits, creating a comprehensive picture of how genotype produces phenotype.",
        whyItMatters: "Understanding inheritance is fundamental to medicine, agriculture, and evolutionary biology. Genetic counselling relies on inheritance patterns to predict disease risk. Crop breeding exploits known inheritance rules to develop improved varieties. The entire field of genomics — from GWAS studies to personalised medicine — rests on Mendelian foundations. Every time a clinician interprets a family pedigree or a researcher traces a disease gene, they are applying the principles Mendel established.",
        bigPicture: "Genes exist in alternative forms called alleles. During meiosis, allele pairs separate into gametes (segregation), and alleles of different genes distribute into gametes independently (independent assortment, when genes are on different chromosomes). The combination of alleles an organism carries (genotype) determines its observable characteristics (phenotype), filtered through dominance relationships, environmental influence, and gene interactions.",
        priorKnowledge: [
            "Cell division: mitosis and meiosis — particularly how chromosome number is halved in meiosis",
            "Chromosomes: homologous pairs, autosomes vs sex chromosomes",
            "DNA and genes: genes as heritable units on chromosomes",
            "Basic probability: product rule and sum rule",
            "Protein function: how alleles encode functional or non-functional proteins"
        ],
        topicRoadmap: [
            "Mendel's laws: Segregation and Independent Assortment — the experimental basis",
            "Genotype and phenotype: homozygous, heterozygous, dominant, recessive",
            "Monohybrid and dihybrid crosses using Punnett squares and probability rules",
            "Extensions: incomplete dominance, codominance, multiple alleles (ABO blood groups)",
            "Sex determination and sex-linked inheritance (X-linked traits)",
            "Epistasis and gene interaction: modified phenotypic ratios",
            "Polygenic inheritance and the continuous distribution of quantitative traits",
            "Pedigree analysis: tracing inheritance patterns through family trees"
        ]
    },

    concepts: [
        "Alleles segregate during gamete formation (Law of Segregation)",
        "Alleles of different genes assort independently (Law of Independent Assortment)",
        "Dominance relationships determine phenotype from genotype",
        "Probability rules predict offspring genotype and phenotype ratios",
        "Sex-linked genes show inheritance patterns tied to sex chromosomes",
        "Extensions of Mendelian genetics explain non-3:1 phenotypic ratios"
    ],

    theory: "Inheritance follows predictable patterns governed by allele segregation during meiosis, dominance relationships between alleles, and probabilistic combination of gametes. Mendelian ratios are statistical expectations across large numbers of offspring, not guarantees for individual crosses.",

    keyDefinitions: {
        "Gene": "A heritable unit of information occupying a specific locus on a chromosome",
        "Allele": "An alternative form of a gene at a given locus",
        "Locus": "The specific chromosomal position occupied by a gene",
        "Genotype": "The allele combination an organism carries (e.g. Aa, AABB)",
        "Phenotype": "The observable characteristics produced by genotype and environment",
        "Homozygous": "Carrying two identical alleles at a locus (AA or aa)",
        "Heterozygous": "Carrying two different alleles at a locus (Aa)",
        "Dominant": "Allele whose effect is expressed in heterozygotes",
        "Recessive": "Allele whose effect is masked in heterozygotes",
        "P generation": "Parental generation — the original true-breeding parents",
        "F1 generation": "First filial generation — offspring of the P cross",
        "F2 generation": "Second filial generation — offspring of F1 × F1",
        "Monohybrid cross": "Cross tracking one gene with two alleles",
        "Dihybrid cross": "Cross tracking two independently assorting genes",
        "Test cross": "Cross of unknown genotype with homozygous recessive to reveal genotype",
        "Carrier": "Heterozygote who carries a recessive allele without showing the phenotype",
        "Incomplete dominance": "Neither allele fully dominant; heterozygote shows intermediate phenotype",
        "Codominance": "Both alleles fully expressed simultaneously in heterozygote",
        "Multiple alleles": "More than two alleles existing in the population for one gene",
        "Epistasis": "One gene's alleles mask or modify the expression of another gene",
        "Polygenic inheritance": "Phenotype controlled by two or more genes acting additively",
        "Penetrance": "Proportion of individuals with a genotype who show the expected phenotype",
        "Expressivity": "Degree to which a genotype is expressed in individuals who show the phenotype"
    },

    mendelsLaws: {
        lawOfSegregation: {
            statement: "The two alleles of a gene separate during gamete formation; each gamete receives one allele",
            mechanisticBasis: "Homologous chromosomes separate at meiosis I; sister chromatids separate at meiosis II",
            experimentalEvidence: "F2 ratio of 3:1 dominant:recessive phenotype in monohybrid crosses",
            implication: "Each parent contributes exactly one allele per gene to each offspring"
        },
        lawOfIndependentAssortment: {
            statement: "Alleles of different genes assort into gametes independently of one another",
            mechanisticBasis: "Non-homologous chromosomes align randomly at meiosis I (random orientation of bivalents)",
            experimentalEvidence: "F2 ratio of 9:3:3:1 in dihybrid crosses (two independently assorting genes)",
            limitation: "Applies only to genes on different chromosomes or far apart on the same chromosome — linked genes deviate from this law",
            implication: "Explains why dihybrid ratio is the product of two independent monohybrid ratios (3:1 × 3:1 = 9:3:3:1)"
        }
    },

    dominanceRelationships: {
        completeDominance: {
            description: "One allele completely masks the other in heterozygotes",
            heterozygotePhenotype: "Identical to dominant homozygote",
            molecularBasis: "Often: dominant allele produces functional protein; recessive allele produces non-functional version; one copy sufficient"
        },
        incompleteDominance: {
            description: "Neither allele fully dominant; heterozygote shows intermediate phenotype",
            example: "Red × white snapdragon flowers → pink F1",
            ratio: "F2 ratio: 1 red : 2 pink : 1 white (1:2:1 phenotypic ratio)",
            molecularBasis: "Heterozygote produces half the normal amount of pigment — insufficient for full colour"
        },
        codominance: {
            description: "Both alleles independently expressed simultaneously in heterozygote",
            example: "MN blood group: MM = type M, MN = both M and N antigens expressed, NN = type N",
            ratio: "F2 produces 1:2:1 phenotypic ratio (three distinct phenotypes)",
            distinction: "Not a blend — both phenotypes fully present; compare to incomplete dominance (intermediate phenotype)"
        }
    },

    probabilityInGenetics: {
        productRule: {
            statement: "Probability of two independent events both occurring = product of their individual probabilities",
            application: "Probability of offspring being AaBb = P(Aa) × P(Bb)"
        },
        sumRule: {
            statement: "Probability of either of two mutually exclusive events occurring = sum of their individual probabilities",
            application: "Probability of AA or aa offspring = P(AA) + P(aa)"
        },
        punnettSquares: {
            monohybrid: "2×2 grid; tracks one gene; Aa × Aa → 1 AA : 2 Aa : 1 aa (1:2:1 genotypic; 3:1 phenotypic)",
            dihybrid: "4×4 grid; tracks two genes; AaBb × AaBb → 9:3:3:1 phenotypic ratio",
            limitations: "Assumes genes assort independently; breaks down for linked genes"
        },
        forkedLineDiagram: {
            description: "Branching probability diagram; more efficient than Punnett square for three or more genes",
            method: "Multiply probabilities along each branch; sum probabilities of branches producing same phenotype"
        }
    },

    sexDeterminationAndLinkage: {
        sexChromosomes: {
            humanSystem: "XX = female, XY = male; Y carries SRY gene triggering male development",
            sexDetermination: "Father determines offspring sex: X-bearing sperm → daughter; Y-bearing sperm → son"
        },
        xLinkedInheritance: {
            definition: "Gene located on the X chromosome; males hemizygous (only one X, so one allele)",
            xLinkedRecessive: {
                maleExpression: "Males with one recessive allele (X^a Y) always express the trait — no second allele to mask it",
                femaleExpression: "Females require two recessive alleles (X^a X^a) to express trait; X^A X^a = carrier",
                inheritancePattern: "Affected males more common; maternal carrier passes to sons; no father-to-son transmission",
                examples: "Haemophilia A, red-green colour blindness, Duchenne muscular dystrophy"
            },
            xLinkedDominant: {
                description: "One copy of dominant allele on X sufficient to produce phenotype",
                pattern: "Affected fathers pass to ALL daughters but NO sons; affected mothers pass to half sons and half daughters",
                examples: "Hypophosphataemia (X-linked rickets), Rett syndrome"
            }
        },
        yLinkedInheritance: {
            description: "Genes on Y chromosome; passed exclusively from father to all sons",
            examples: "SRY gene; very few other confirmed Y-linked traits in humans"
        }
    },

    multipleAllelesAndBloodGroups: {
        ABOSystem: {
            alleles: "Three alleles: I^A (produces A antigen), I^B (produces B antigen), i (produces no antigen)",
            dominanceRelationships: "I^A and I^B are codominant with each other; both dominant over i",
            genotypePhenotypeTable: {
                "I^A I^A or I^A i": "Blood type A",
                "I^B I^B or I^B i": "Blood type B",
                "I^A I^B": "Blood type AB (codominance — both antigens expressed)",
                "ii": "Blood type O"
            },
            clinicalRelevance: "Incompatible transfusions trigger immune reaction; AB individuals are universal recipients; O individuals are universal donors (for red cells)"
        }
    },

    epistasisAndGeneInteraction: {
        definition: "One gene (epistatic gene) masks or modifies the expression of another gene (hypostatic gene)",
        recessiveEpistasis: {
            description: "Homozygous recessive at epistatic locus masks expression of hypostatic gene",
            ratio: "9:3:4 instead of 9:3:3:1",
            example: "Coat colour in Labrador retrievers: B/b determines black/brown; E/e determines whether pigment is deposited — ee dogs are yellow regardless of B genotype"
        },
        dominantEpistasis: {
            description: "One dominant allele at epistatic locus masks hypostatic gene",
            ratio: "12:3:1",
            example: "Squash fruit colour"
        },
        duplicateRecessive: {
            description: "Recessive alleles at either locus independently produce same effect",
            ratio: "9:7",
            example: "Flower colour in sweet peas — two enzymes both required for pigment production"
        },
        complementaryGenes: {
            description: "Dominant alleles at both loci required to produce wild-type phenotype",
            ratio: "9:7"
        }
    },

    polygenicInheritance: {
        definition: "Phenotype determined by additive effects of two or more genes, each contributing incrementally",
        characteristics: [
            "Continuous variation in phenotype (bell-curve distribution in population)",
            "Difficult to trace through simple Punnett square analysis",
            "Greatly influenced by environment",
            "Examples: height, skin colour, intelligence, blood pressure"
        ],
        skinColourExample: {
            simplified: "Three genes (A, B, C); each uppercase allele adds one unit of pigmentation",
            range: "Aabbcc (lightest) through AABBCC (darkest) — seven phenotypic classes",
            distribution: "Crosses between intermediate parents produce bell-shaped distribution"
        }
    },

    pedigreeAnalysis: {
        symbols: {
            circle: "Female",
            square: "Male",
            filledSymbol: "Affected individual",
            halfFilledSymbol: "Carrier (for X-linked traits)",
            horizontalLine: "Mating",
            verticalLine: "Offspring"
        },
        determiningInheritancePattern: {
            autosomaldominant: [
                "Trait appears in every generation (no skipping)",
                "Affected individuals have at least one affected parent",
                "Approximately half of offspring of affected × unaffected are affected",
                "Males and females equally affected"
            ],
            autosomalRecessive: [
                "Trait can skip generations (carriers unaffected)",
                "Two unaffected parents can have affected child (both carriers)",
                "Higher frequency in offspring of consanguineous (related) parents",
                "Males and females equally affected"
            ],
            xLinkedRecessive: [
                "More affected males than females",
                "Affected males cannot pass trait to sons (sons get Y from father)",
                "All daughters of affected males are carriers",
                "Carrier females have 50% chance of affected sons"
            ],
            xLinkedDominant: [
                "Affected father passes to all daughters, no sons",
                "Affected mother passes to half of sons and half of daughters",
                "More affected females than males"
            ],
            yLinked: [
                "Only males affected",
                "All sons of affected father are affected",
                "No daughters affected"
            ]
        }
    },

    environmentAndGeneExpression: {
        penetrance: "Some individuals with a disease genotype do not show the disease phenotype — incomplete penetrance",
        expressivity: "Individuals with the same genotype may show different degrees of the phenotype",
        environmentalInfluence: [
            "Phenylketonuria: PKU genotype causes intellectual disability only if phenylalanine is in the diet",
            "Height: genetic potential is modified by nutrition",
            "Skin colour: melanin production is UV-light dependent even given a genetic baseline"
        ]
    },

    applications: [
        "Genetic counselling: predicting disease risk from pedigree and carrier testing",
        "Forensics: blood typing and DNA profiling based on allele combinations",
        "Plant and animal breeding: selecting for desired traits using known inheritance patterns",
        "Population genetics: Hardy-Weinberg equilibrium extends Mendelian genetics to allele frequencies",
        "Personalised medicine: pharmacogenomics — inheritance of drug-metabolising enzyme variants",
        "Prenatal diagnosis: amniocentesis and CVS for chromosomal and single-gene disorders"
    ],

    topicSummary: {
        coreInsights: [
            "Mendel's Law of Segregation means every diploid organism passes exactly one allele per gene to each gamete — the two alleles separate cleanly at meiosis I.",
            "The Law of Independent Assortment produces new allele combinations each generation, but applies only to genes on different chromosomes or far apart on the same chromosome.",
            "Dominance is not about strength — it reflects which allele's protein product determines phenotype; incomplete dominance arises when one copy produces insufficient gene product.",
            "Mendelian ratios (3:1, 9:3:3:1) are statistical expectations across many offspring, not guarantees — small families routinely deviate from predicted ratios by chance.",
            "X-linked recessive traits are far more common in males because males are hemizygous — a single recessive allele on the X chromosome is always expressed.",
            "Extensions of Mendelism (epistasis, polygenic inheritance, incomplete dominance) do not violate Mendel's laws — they layer additional molecular complexity on top of the same segregation and assortment principles.",
            "Pedigree analysis allows inference of inheritance pattern and carrier status from family phenotypic data alone — a powerful clinical tool.",
            "Penetrance and expressivity remind us that genotype sets the potential; environment and modifier genes shape the final phenotype."
        ],
        keyRatios: {
            monohybridF2: "3:1 (phenotypic) | 1:2:1 (genotypic)",
            dihybridF2: "9:3:3:1 (complete dominance at both loci)",
            incompleteDominanceF2: "1:2:1 (three distinct phenotypes)",
            codominanceF2: "1:2:1 (three distinct phenotypes, both alleles expressed)",
            recessiveEpistasis: "9:3:4",
            dominantEpistasis: "12:3:1",
            duplicateRecessiveEpistasis: "9:7",
            xLinkedRecessive_carrierMother: "1/4 affected males : 1/4 carrier females : 1/4 unaffected males : 1/4 unaffected females"
        },
        commonMistakesToAvoid: [
            "Mendelian ratios are probabilities, not guarantees — a 3:1 ratio is expected across many crosses, not in every family of four",
            "Dominance describes phenotypic expression, not allele frequency — a dominant allele is not necessarily more common in the population",
            "Independent assortment does NOT apply to linked genes — genes on the same chromosome tend to be inherited together",
            "Males cannot be 'carriers' for X-linked recessive traits — they are either affected (X^a Y) or unaffected (X^A Y); there is no masked state",
            "Incomplete dominance and codominance are not the same — incomplete dominance produces a blend; codominance produces both phenotypes simultaneously",
            "Epistasis does not violate Mendel's laws — genes still segregate and assort normally; the phenotypic ratios change because of gene interactions at the biochemical level"
        ],
        connections: [
            "Meiosis: segregation and independent assortment are direct consequences of chromosome behaviour at meiosis I",
            "Molecular biology: alleles differ at the DNA sequence level; dominance reflects the biochemical function of encoded proteins",
            "Evolution: Mendelian inheritance conserves allele combinations while recombination and independent assortment generate variation for selection to act on",
            "Population genetics: Hardy-Weinberg equilibrium is the direct extension of Mendelian genetics to allele and genotype frequencies in populations",
            "Cancer genetics: tumour suppressor genes follow autosomal recessive inheritance (both copies must be lost); oncogenes behave as dominant gain-of-function alleles",
            "Epigenetics: imprinting shows that gene expression can depend on parental origin of an allele — a layer above simple Mendelian dominance"
        ],
        examReadinessChecklist: [
            "Can you construct and interpret a Punnett square for a monohybrid and a dihybrid cross?",
            "Can you calculate the probability of a specific offspring genotype using the product and sum rules?",
            "Can you predict and explain the F2 ratio for incomplete dominance and codominance?",
            "Can you trace an X-linked recessive trait through a three-generation pedigree?",
            "Can you identify the inheritance pattern from a pedigree using the diagnostic criteria for each pattern?",
            "Can you explain how epistasis modifies a 9:3:3:1 ratio and give a specific molecular reason?",
            "Can you distinguish polygenic inheritance from single-gene inheritance by phenotypic distribution?"
        ]
    }
},  


punnettSquares: {
    title: "Punnett Squares and Mendelian Inheritance",

    databaseLinks: {
        misconceptions: [
            'punnettBasics',
            'probabilityAndRatios',
            'dominanceAndRecessiveness',
            'diHybridCrosses',
            'sexLinkageAndSpecialCases'
        ],
        contextualScenarios: [
            'punnettBasics',
            'probabilityAndRatios',
            'diHybridCrosses',
            'sexLinkageAndSpecialCases'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'specimens',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'dissectionAndExperiment'
        ],
        assessmentRubrics: [
            'remember',
            'understand',
            'apply',
            'analyze',
            'evaluate',
            'create'
        ],
        assessmentQuestions: [
            'punnettBasics',
            'probabilityAndRatios',
            'diHybridCrosses',
            'sexLinkageAndSpecialCases'
        ]
    },

    conceptLinks: {
        "Alleles segregate during meiosis (Law of Segregation)": {
            misconceptions:      ['punnettBasics', 'dominanceAndRecessiveness'],
            scenarios:           ['punnettBasics'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['punnettBasics']
        },
        "Punnett squares predict genotypic and phenotypic ratios": {
            misconceptions:      ['punnettBasics', 'probabilityAndRatios'],
            scenarios:           ['punnettBasics', 'probabilityAndRatios'],
            studyTips:           ['diagrams', 'comparisonTables', 'practiceRoutines'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['punnettBasics', 'probabilityAndRatios']
        },
        "Dominant alleles mask recessive alleles in heterozygotes": {
            misconceptions:      ['dominanceAndRecessiveness'],
            scenarios:           ['punnettBasics'],
            studyTips:           ['flashcards', 'mnemonics'],
            assessmentRubrics:   ['understand', 'apply'],
            assessmentQuestions: ['punnettBasics']
        },
        "Alleles of different genes assort independently (Law of Independent Assortment)": {
            misconceptions:      ['diHybridCrosses'],
            scenarios:           ['diHybridCrosses'],
            studyTips:           ['diagrams', 'comparisonTables', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['diHybridCrosses']
        },
        "Sex-linked traits follow different inheritance patterns from autosomal traits": {
            misconceptions:      ['sexLinkageAndSpecialCases'],
            scenarios:           ['sexLinkageAndSpecialCases'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['sexLinkageAndSpecialCases']
        }
    },

    topicIntroduction: {
        overview: "Punnett squares are predictive grids that apply Mendel's laws of inheritance to calculate the probability of offspring genotypes and phenotypes from a defined cross. Named after Reginald Crowe Punnett, who formalised the tool in 1905, they remain the foundational method for reasoning about genetic outcomes. From predicting whether a child will have a genetic disorder to designing breeding programmes for disease-resistant crops, Punnett squares translate the rules of meiosis into quantitative predictions.",
        whyItMatters: "Genetic counsellors use Punnett square logic to advise families on inherited disease risk. Breeders use it to select for desirable traits. Evolutionary biologists use it to model allele frequency change. Understanding Punnett squares is the entry point into population genetics, medical genetics, and genomics — the tools may become more sophisticated, but the underlying probability logic is the same.",
        bigPicture: "Punnett squares are a visual representation of probability. Each cell in the grid represents one equally likely fertilisation event. The ratios they produce are not fixed outcomes — they are probabilities. A 3:1 phenotypic ratio in a monohybrid cross means each offspring independently has a 75% chance of showing the dominant phenotype and a 25% chance of showing the recessive phenotype.",
        priorKnowledge: [
            "Cell division: mitosis vs meiosis — why meiosis produces gametes with half the chromosome number",
            "Chromosomes: homologous pairs, loci, alleles",
            "Basic probability: equally likely outcomes, multiplication rule, addition rule",
            "Genotype vs phenotype: the difference between genetic constitution and observable trait",
            "DNA and genes: what a gene encodes and how alleles differ at the molecular level"
        ],
        topicRoadmap: [
            "Mendel's laws: segregation and independent assortment — the biological basis",
            "Terminology: gene, allele, locus, genotype, phenotype, homozygous, heterozygous, dominant, recessive",
            "Monohybrid crosses: constructing and interpreting 2×2 Punnett squares",
            "Genotypic and phenotypic ratios: 1:2:1 and 3:1 for F₂ monohybrid crosses",
            "Test crosses: determining unknown genotype from cross with homozygous recessive",
            "Dihybrid crosses: 4×4 Punnett squares and the 9:3:3:1 phenotypic ratio",
            "Sex determination and sex linkage: X-linked recessive and dominant inheritance",
            "Extensions: codominance, incomplete dominance, multiple alleles (ABO blood groups)"
        ]
    },

    concepts: [
        "Alleles segregate during meiosis (Law of Segregation)",
        "Punnett squares predict genotypic and phenotypic ratios",
        "Dominant alleles mask recessive alleles in heterozygotes",
        "Alleles of different genes assort independently (Law of Independent Assortment)",
        "Sex-linked traits follow different inheritance patterns from autosomal traits",
        "Ratios from Punnett squares represent probabilities, not fixed outcomes"
    ],

    theory: "Punnett squares apply Mendel's laws of segregation and independent assortment to predict the genotypic and phenotypic ratios of offspring from defined genetic crosses. Each cell in the grid represents an equally probable fertilisation event, making the tool a visual probability calculator for Mendelian inheritance.",

    keyDefinitions: {
        "Gene": "A heritable unit of information at a specific locus on a chromosome, encoding a functional product",
        "Allele": "One of two or more alternative forms of a gene at a given locus",
        "Locus": "The fixed position of a gene on a chromosome",
        "Genotype": "The genetic constitution of an organism (e.g. Aa, BB, XᴬY)",
        "Phenotype": "The observable physical or biochemical characteristic resulting from genotype and environment",
        "Homozygous": "Having identical alleles at a locus (AA or aa)",
        "Heterozygous": "Having two different alleles at a locus (Aa)",
        "Dominant": "Allele whose effect is expressed in both homozygous (AA) and heterozygous (Aa) states",
        "Recessive": "Allele whose effect is only expressed in the homozygous state (aa)",
        "F₁ Generation": "First filial generation — offspring of the parental (P) cross",
        "F₂ Generation": "Second filial generation — offspring of F₁ × F₁ cross",
        "Test Cross": "Cross of unknown genotype with homozygous recessive to determine genotype",
        "Monohybrid Cross": "Cross examining inheritance of one gene with two alleles",
        "Dihybrid Cross": "Cross examining inheritance of two independently assorting genes",
        "Carrier": "Heterozygous individual (Aa) who does not show the recessive phenotype but can pass the recessive allele to offspring",
        "Sex Linkage": "Genes located on sex chromosomes (usually X) and therefore inherited differently in males and females",
        "Codominance": "Both alleles are expressed simultaneously in the heterozygote (e.g. AᴮOᴮ blood type AB)",
        "Incomplete Dominance": "Heterozygote shows a phenotype intermediate between both homozygotes (e.g. red × white → pink)"
    },

    mechanismOfAction: {
        mendelsLaws: {
            segregation: {
                statement: "The two alleles of a gene separate during gamete formation; each gamete receives exactly one allele",
                biologicalBasis: "Homologous chromosomes separate at meiosis I; sister chromatids separate at meiosis II",
                punnettApplication: "The alleles written along each axis of the Punnett square represent the possible gametes after segregation"
            },
            independentAssortment: {
                statement: "Alleles of different genes assort into gametes independently of one another",
                biologicalBasis: "Non-homologous chromosomes align randomly at the metaphase I plate — orientation of one pair does not affect another",
                limitation: "Only applies to genes on different chromosomes or genes far apart on the same chromosome (not linked genes)",
                punnettApplication: "In dihybrid crosses, four gamete types are produced in equal proportions, giving the 16-cell 4×4 grid"
            }
        },
        constructingPunnettSquares: {
            monohybrid: [
                "Write the genotype of each parent",
                "Determine the possible gametes for each parent (one allele per gamete)",
                "Write gametes of parent 1 along the top of the grid (columns)",
                "Write gametes of parent 2 down the left side (rows)",
                "Fill each cell by combining the column gamete with the row gamete",
                "Count genotype and phenotype frequencies to determine ratios"
            ],
            dihybrid: [
                "Write both allele pairs for each parent (e.g. AaBb × AaBb)",
                "Determine all possible gametes using FOIL or branching (AB, Ab, aB, ab — four types each)",
                "Write all four gamete types along both axes of a 4×4 grid",
                "Fill all 16 cells by combining column and row gametes",
                "Group genotypes by phenotype class to determine the 9:3:3:1 ratio"
            ]
        }
    },

    monohybridCrosses: {
        parentalCross: {
            cross: "AA × aa",
            F1genotypes: "All Aa",
            F1phenotype: "All dominant phenotype",
            note: "When true-breeding parents differ, all F₁ offspring are heterozygous"
        },
        F1Cross: {
            cross: "Aa × Aa",
            genotypicRatio: "1 AA : 2 Aa : 1 aa",
            phenotypicRatio: "3 dominant : 1 recessive",
            probabilities: {
                AA: "25%",
                Aa: "50%",
                aa: "25%",
                dominantPhenotype: "75%",
                recessivePhenotype: "25%"
            }
        },
        testCross: {
            purpose: "Determine whether an individual showing the dominant phenotype is AA or Aa",
            cross: "Unknown (A_) × aa",
            interpretation: {
                allDominant: "Unknown parent is AA (homozygous dominant)",
                halfDominantHalfRecessive: "Unknown parent is Aa (heterozygous carrier)"
            }
        }
    },

    dihybridCrosses: {
        cross: "AaBb × AaBb",
        gametes: ["AB", "Ab", "aB", "ab"],
        phenotypicRatio: "9 A_B_ : 3 A_bb : 3 aaB_ : 1 aabb",
        phenotypicClasses: {
            "9 A_B_": "Both dominant phenotypes",
            "3 A_bb": "Dominant A, recessive b",
            "3 aaB_": "Recessive a, dominant B",
            "1 aabb": "Both recessive phenotypes"
        },
        probabilityRule: "Probability of combined outcome = probability of outcome 1 × probability of outcome 2 (when genes assort independently)",
        example: "P(A_B_) = P(A_) × P(B_) = 3/4 × 3/4 = 9/16"
    },

    sexLinkageAndSpecialCases: {
        sexDetermination: {
            humanSystem: "XX = female, XY = male",
            sexRatio: "1:1 male:female produced by XY × XX cross",
            yChromosome: "Carries SRY gene (sex-determining region Y) but few other functional genes"
        },
        xLinkedRecessive: {
            carrierfemale: "Xᴬ Xᵃ — carrier female, unaffected phenotype",
            affectedMale: "Xᵃ Y — affected male (only one X, so recessive allele is expressed)",
            keyFeatures: [
                "Males affected more frequently than females",
                "Cannot pass X-linked trait from father to son (fathers give Y to sons)",
                "Affected fathers pass X-linked allele to all daughters (who become carriers if mother is normal)",
                "Carrier mothers pass allele to 50% of sons (who are affected) and 50% of daughters (who are carriers)"
            ],
            examples: "Haemophilia A, red-green colour blindness, Duchenne muscular dystrophy"
        },
        codominance: {
            definition: "Both alleles are fully expressed in the heterozygote; neither is dominant or recessive",
            example: "ABO blood group: Iᴬ Iᴮ genotype produces blood type AB — both A and B antigens present",
            punnettNote: "Use superscript notation (Iᴬ, Iᴮ, i) rather than upper/lower case to avoid implying dominance hierarchy"
        },
        incompleteDominance: {
            definition: "Heterozygote phenotype is intermediate between both homozygote phenotypes",
            example: "Snapdragon flower colour: Rᴿ Rᴿ (red) × Rʷ Rʷ (white) → Rᴿ Rʷ (pink F₁); F₂ gives 1 red : 2 pink : 1 white",
            keyDifference: "Phenotypic ratio (1:2:1) mirrors genotypic ratio — unlike complete dominance where 1:2:1 genotypic → 3:1 phenotypic"
        },
        multipleAlleles: {
            definition: "A gene that exists in three or more allelic forms in the population (any one individual carries at most two)",
            example: "ABO blood group — three alleles (Iᴬ, Iᴮ, i); Iᴬ and Iᴮ are codominant; both are dominant to i",
            bloodGroups: {
                "A": "Iᴬ Iᴬ or Iᴬ i",
                "B": "Iᴮ Iᴮ or Iᴮ i",
                "AB": "Iᴬ Iᴮ",
                "O": "ii"
            }
        }
    },

    probabilityRules: {
        multiplicationRule: {
            statement: "Probability of two independent events both occurring = P(A) × P(B)",
            application: "Probability of a child being aa AND female = P(aa) × P(female) = 1/4 × 1/2 = 1/8"
        },
        additionRule: {
            statement: "Probability of either of two mutually exclusive events occurring = P(A) + P(B)",
            application: "Probability of child being AA OR Aa (dominant phenotype) = 1/4 + 1/2 = 3/4"
        },
        binomialRule: {
            statement: "When asking about a specific combination across multiple offspring: P = (n!/k!(n-k)!) × pᵏ × q^(n-k)",
            application: "Probability of exactly 2 out of 4 children being affected (p = 1/4 recessive) — use binomial expansion"
        }
    },

    applications: [
        "Genetic counselling: calculating risk of inherited disease in offspring",
        "Prenatal diagnosis: interpreting carrier status for cystic fibrosis, sickle cell disease",
        "Plant and animal breeding: selecting for homozygous lines",
        "Forensic genetics: paternity testing using blood group inheritance",
        "Population genetics: foundation for Hardy-Weinberg equilibrium modelling",
        "Research: designing experimental crosses to map gene locations"
    ],

    topicSummary: {
        coreInsights: [
            "Punnett squares are probability calculators — each cell represents an equally likely fertilisation event, and ratios represent probabilities, not guarantees.",
            "The 3:1 phenotypic ratio in F₂ monohybrid crosses arises because heterozygotes (Aa) are phenotypically indistinguishable from homozygous dominant (AA) — the ratio is really (1 AA + 2 Aa) : 1 aa.",
            "The test cross is the experimental tool that reveals whether a dominant phenotype is AA or Aa — only a cross with a homozygous recessive (aa) individual can distinguish them.",
            "The 9:3:3:1 dihybrid ratio is simply (3:1) × (3:1) — when two genes assort independently, their probabilities multiply.",
            "Sex linkage breaks the symmetry of autosomal inheritance — males are hemizygous for X-linked genes, so a single recessive allele on their one X chromosome is always expressed.",
            "Codominance and incomplete dominance extend Mendel's model without breaking it — they change how alleles interact at the phenotypic level, not the probability rules governing their transmission.",
            "The ABO blood group demonstrates multiple allelism: three alleles, two relationships (Iᴬ/Iᴮ codominant; both dominant to i), producing four phenotypic classes from six genotypes."
        ],
        keyRatios: {
            monohybridF2genotypic: "1 AA : 2 Aa : 1 aa",
            monohybridF2phenotypic: "3 dominant : 1 recessive",
            testCrossHeterozygous: "1 dominant : 1 recessive",
            dihybridF2phenotypic: "9 : 3 : 3 : 1",
            incompleteDominanceF2: "1 : 2 : 1 (phenotypic = genotypic)",
            xLinkedCarrierMother: "1/2 sons affected, 1/2 daughters carriers"
        },
        dominanceComparison: {
            completeDominance:    { heterozygotePhenotype: "Identical to dominant homozygote",  F2phenotypicRatio: "3:1",   example: "Mendel's pea seed colour" },
            incompleteDominance:  { heterozygotePhenotype: "Intermediate",                      F2phenotypicRatio: "1:2:1", example: "Snapdragon flower colour" },
            codominance:          { heterozygotePhenotype: "Both alleles expressed together",    F2phenotypicRatio: "1:2:1", example: "ABO blood type AB" }
        },
        commonMistakesToAvoid: [
            "Ratios from Punnett squares are probabilities — a 3:1 ratio does NOT mean that exactly 3 out of every 4 children will show the dominant phenotype",
            "Dominant does NOT mean more common in a population — a dominant allele can be rare; frequency and dominance are unrelated concepts",
            "A carrier (Aa) is NOT affected — they have the dominant phenotype; they are carriers of the recessive allele only",
            "Males cannot be carriers of X-linked recessive conditions — they are either affected (Xᵃ Y) or unaffected (Xᴬ Y); 'carrier' applies only to females",
            "Independent assortment only applies to genes on different chromosomes — linked genes do not assort independently and cannot be modelled with a standard dihybrid Punnett square",
            "The 9:3:3:1 ratio assumes both parents are doubly heterozygous (AaBb × AaBb) — different starting genotypes produce different ratios"
        ],
        connections: [
            "Meiosis: the physical basis of segregation and independent assortment — Punnett squares represent the probabilistic outcome of meiotic chromosome behaviour",
            "Population genetics: Hardy-Weinberg equilibrium uses the same allele frequency logic extended to populations rather than individual crosses",
            "Medical genetics: carrier testing, risk calculation, and pedigree analysis all depend on Punnett square probability reasoning",
            "Molecular biology: understanding which genotypes produce which phenotypes requires knowing how alleles produce functional vs non-functional proteins",
            "Evolution: natural selection acts on phenotypic variation whose genetic basis is transmitted according to Mendelian rules"
        ],
        examReadinessChecklist: [
            "Can you construct a Punnett square for any monohybrid cross and correctly state the genotypic and phenotypic ratios?",
            "Can you explain what a test cross is and interpret its result to determine parental genotype?",
            "Can you construct and interpret a 4×4 dihybrid Punnett square and derive the 9:3:3:1 ratio?",
            "Can you set up Punnett squares for X-linked traits, correctly using Xᴬ/Xᵃ/Y notation?",
            "Can you distinguish complete dominance, incomplete dominance, and codominance from phenotypic ratio data?",
            "Can you apply the multiplication rule to calculate probability of a specific genotype across two independently assorting genes?"
        ]
    }
},



enzymes: {
    title: "Enzyme Function and Kinetics: Biological Catalysis",

// 1. Updated databaseLinks and conceptLinks inside the enzyme lesson

databaseLinks: {
    misconceptions: [
        'enzymeBasics',
        'enzymeKinetics',
        'enzymeInhibition',
        'enzymeRegulation',
        'temperatureAndPH'
    ],
    contextualScenarios: [
        'enzymeBasics',
        'enzymeKinetics',
        'enzymeInhibition',
        'enzymeRegulation'
    ],
    studyTips: [
        'diagrams',
        'comparisonTables',
        'specimens',
        'flashcards',
        'mnemonics',
        'practiceRoutines',
        'dissectionAndExperiment'
    ],
    assessmentRubrics: [
        'remember',
        'understand',
        'apply',
        'analyze',
        'evaluate',
        'create'
    ],
    assessmentQuestions: [
        'enzymeBasics',
        'enzymeInhibition',
        'enzymeKinetics',
        'enzymeRegulation'
    ]
},

conceptLinks: {
    "Enzymes are biological catalysts that speed up reactions": {
        misconceptions:       ['enzymeBasics'],
        scenarios:            ['enzymeBasics'],
        studyTips:            ['diagrams', 'specimens'],
        assessmentRubrics:    ['remember', 'understand'],
        assessmentQuestions:  ['enzymeBasics']
    },
    "Active site is specific for substrate (lock-and-key or induced fit)": {
        misconceptions:       ['enzymeBasics'],
        scenarios:            ['enzymeBasics'],
        studyTips:            ['diagrams', 'comparisonTables'],
        assessmentRubrics:    ['remember', 'understand', 'apply'],
        assessmentQuestions:  ['enzymeBasics']
    },
    "Enzyme activity depends on temperature, pH, and cofactors": {
        misconceptions:       ['temperatureAndPH'],
        scenarios:            ['enzymeBasics'],
        studyTips:            ['specimens', 'flashcards'],
        assessmentRubrics:    ['understand', 'apply'],
        assessmentQuestions:  ['enzymeBasics']
    },
    "Michaelis-Menten kinetics describes enzyme behavior": {
        misconceptions:       ['enzymeKinetics'],
        scenarios:            ['enzymeKinetics'],
        studyTips:            ['diagrams', 'comparisonTables', 'practiceRoutines', 'dissectionAndExperiment'],
        assessmentRubrics:    ['apply', 'analyze', 'evaluate'],
        assessmentQuestions:  ['enzymeKinetics']
    },
    "Enzymes can be regulated by inhibitors and activators": {
        misconceptions:       ['enzymeInhibition', 'enzymeRegulation'],
        scenarios:            ['enzymeInhibition', 'enzymeRegulation'],
        studyTips:            ['comparisonTables', 'flashcards', 'mnemonics'],
        assessmentRubrics:    ['apply', 'analyze', 'evaluate', 'create'],
        assessmentQuestions:  ['enzymeInhibition', 'enzymeRegulation']
    }
},

topicIntroduction: {
        overview: "Enzymes are the molecular machines of life — protein catalysts that make biochemical reactions fast enough to sustain living cells. Without enzymes, most biological reactions would occur too slowly to support life at physiological temperatures. In this lesson, we explore how enzymes work, how their activity is measured and regulated, and why understanding enzyme kinetics is fundamental to medicine, biotechnology, and our understanding of metabolism.",
        whyItMatters: "Every drug that targets a biological process, every metabolic disease, and every biotechnology application depends on understanding enzyme function. From the aspirin in your medicine cabinet (an enzyme inhibitor) to the restriction enzymes used in genetic engineering, enzymes are central to modern biology and medicine.",
        bigPicture: "Enzymes are not consumed in reactions — they are reusable molecular tools that lower activation energy by binding substrates at their active sites and stabilising transition states. Their specificity, speed, and regulation make them ideal biological controllers of metabolism.",
        priorKnowledge: [
            "Basic cell biology: organelles and compartmentalisation",
            "Protein structure: primary, secondary, tertiary, quaternary",
            "Chemical reactions: reactants, products, energy changes",
            "Acids and bases: pH scale and ionisation",
            "Basic thermodynamics: activation energy and Gibbs free energy"
        ],
        topicRoadmap: [
            "What enzymes are and how they work (lock-and-key vs induced fit)",
            "Factors affecting enzyme activity (temperature, pH, substrate concentration)",
            "Michaelis-Menten kinetics and the meaning of Km and Vmax",
            "Enzyme inhibition: competitive, non-competitive, uncompetitive, irreversible",
            "Enzyme regulation: allosteric control, feedback inhibition, covalent modification",
            "Classification of enzymes by reaction type",
            "Applications in medicine, industry, and biotechnology"
        ]
    },

    concepts: [
        "Enzymes are biological catalysts that speed up reactions",
        "Enzymes lower activation energy without being consumed",
        "Active site is specific for substrate (lock-and-key or induced fit)",
        "Enzyme activity depends on temperature, pH, and cofactors",
        "Michaelis-Menten kinetics describes enzyme behavior",
        "Enzymes can be regulated by inhibitors and activators"
    ],

    theory: "Enzymes are protein catalysts essential for virtually all biochemical reactions. They achieve remarkable specificity and rate enhancement, making life possible at physiological temperatures.",

    keyDefinitions: {
        "Enzyme": "Biological catalyst (usually protein) that speeds up reactions",
        "Active Site": "Region where substrate binds and reaction occurs",
        "Substrate": "Reactant molecule that binds to enzyme",
        "Product": "Molecule(s) formed by enzyme-catalyzed reaction",
        "Cofactor": "Non-protein helper (metal ion or organic molecule)",
        "Coenzyme": "Organic cofactor (often vitamin-derived)",
        "Apoenzyme": "Protein part of enzyme without cofactor",
        "Holoenzyme": "Complete, active enzyme (apoenzyme + cofactor)",
        "Activation Energy": "Energy needed to start a reaction",
        "Turnover Number (kcat)": "Substrate molecules converted per enzyme per time"
    },

    mechanismOfAction: {
        lockAndKey: {
            proposed: "Emil Fischer (1894)",
            description: "Rigid active site perfectly fits substrate",
            limitation: "Doesn't explain conformational changes"
        },
        inducedFit: {
            proposed: "Daniel Koshland (1958)",
            description: "Active site changes shape upon substrate binding",
            advantage: "Better explains specificity and catalytic mechanisms"
        },
        catalyticStrategies: [
            "Stabilise transition state (lower activation energy)",
            "Provide optimal microenvironment (pH, hydrophobicity)",
            "Bring substrates together (proximity and orientation)",
            "Participate directly in reaction (covalent catalysis)",
            "Strain substrate bonds"
        ]
    },

    factorsAffectingActivity: {
        temperature: {
            low: "Slow molecular motion, low reaction rate",
            optimal: "Maximum activity (typically 35–40°C for human enzymes)",
            high: "Denaturation, loss of activity",
            Qten: "Reaction rate doubles per 10°C increase (until denaturation)"
        },
        pH: {
            optimal: "pH at which enzyme is most active (varies by enzyme)",
            extremes: "Alter ionisation of amino acids, denature enzyme",
            examples: "Pepsin (pH 2), trypsin (pH 8), catalase (pH 7)"
        },
        substrateConcentration: {
            low: "Rate increases linearly with [S]",
            high: "Rate plateaus (enzyme saturation)",
            Vmax: "Maximum rate when all enzyme active sites occupied"
        },
        enzymeConcentration: {
            relationship: "Rate directly proportional to [E] (when substrate not limiting)"
        }
    },

    enzymeKinetics: {
        MichaelisMenten: {
            equation: "v = (Vmax [S]) / (Km + [S])",
            Vmax: "Maximum reaction rate at saturating [S]",
            Km: "Substrate concentration at half Vmax (measure of affinity)",
            assumptions: [
                "Substrate in large excess",
                "Steady-state conditions",
                "Initial rate measured (product doesn't accumulate)"
            ],
            interpretation: {
                lowKm: "High affinity (enzyme binds substrate tightly)",
                highKm: "Low affinity (enzyme binds substrate weakly)"
            }
        },
        LineweaverBurk: {
            equation: "1/v = (Km/Vmax)(1/[S]) + 1/Vmax",
            plot: "Double reciprocal plot (1/v vs 1/[S])",
            yIntercept: "1/Vmax",
            xIntercept: "-1/Km",
            slope: "Km/Vmax",
            use: "Determine kinetic parameters, identify inhibition type"
        }
    },

    enzymeInhibition: {
        competitiveInhibition: {
            mechanism: "Inhibitor competes with substrate for active site",
            effect: "Increases apparent Km, Vmax unchanged",
            overcome: "Increase substrate concentration",
            example: "Malonate inhibits succinate dehydrogenase"
        },
        noncompetitiveInhibition: {
            mechanism: "Inhibitor binds to site other than active site (allosteric)",
            effect: "Decreases Vmax, Km unchanged",
            overcome: "Cannot be overcome by increasing [S]",
            example: "Heavy metals inhibiting many enzymes"
        },
        uncompetitiveInhibition: {
            mechanism: "Inhibitor binds only to ES complex",
            effect: "Decreases both Vmax and Km",
            example: "Less common, some drugs"
        },
        irreversibleInhibition: {
            mechanism: "Inhibitor covalently modifies enzyme (permanent)",
            examples: "Aspirin (COX inhibitor), penicillin (transpeptidase inhibitor)",
            suicide: "Inhibitor activated by enzyme, then inactivates it"
        }
    },

    enzymeRegulation: {
        allostericRegulation: {
            mechanism: "Regulator binds to site other than active site",
            effect: "Changes enzyme conformation and activity",
            positive: "Activator increases activity",
            negative: "Inhibitor decreases activity",
            example: "Phosphofructokinase in glycolysis"
        },
        feedbackInhibition: {
            mechanism: "End product inhibits earlier enzyme in pathway",
            purpose: "Prevents overproduction",
            example: "CTP inhibits aspartate transcarbamoylase"
        },
        covalentModification: {
            phosphorylation: "Addition of phosphate group (activates or inhibits)",
            methylation: "Addition of methyl group",
            example: "Glycogen phosphorylase activated by phosphorylation"
        },
        compartmentalisation: {
            mechanism: "Separate enzymes and substrates in different locations",
            example: "Metabolic pathways in different organelles"
        }
    },

    enzymeClassification: {
        oxidoreductases: "Catalyse oxidation-reduction reactions (dehydrogenases, oxidases)",
        transferases: "Transfer functional groups (kinases, transaminases)",
        hydrolases: "Break bonds using water (proteases, lipases, nucleases)",
        lyases: "Break bonds without water or redox (decarboxylases, aldolases)",
        isomerases: "Rearrange atoms within molecule (racemases, epimerases)",
        ligases: "Form bonds using ATP (synthetases, carboxylases)"
    },

    applications: [
        "Drug design (enzyme inhibitors as drugs)",
        "Diagnostic tests (enzyme markers for disease)",
        "Industrial processes (detergents, food processing)",
        "Biotechnology (restriction enzymes, polymerases)",
        "Understanding metabolic disorders"
    ],

    topicSummary: {
        coreInsights: [
            "Enzymes are protein catalysts that lower activation energy and are not consumed in reactions — they are reusable molecular tools.",
            "Specificity is explained by the induced fit model: the active site reshapes around the substrate, enabling precise substrate recognition.",
            "Enzyme activity is exquisitely sensitive to temperature and pH — each enzyme has an optimal range beyond which it denatures or loses ionisation state.",
            "Michaelis-Menten kinetics quantifies enzyme behaviour: Km measures affinity (low Km = high affinity), Vmax measures maximum catalytic capacity.",
            "The Lineweaver-Burk double reciprocal plot linearises kinetic data and allows graphical identification of inhibition type.",
            "Inhibition type determines pharmaceutical strategy: competitive inhibition is overcome by substrate excess; non-competitive is not.",
            "Allosteric regulation and feedback inhibition allow cells to fine-tune metabolic flux without changing gene expression.",
            "The six enzyme classes (oxidoreductases through ligases) reflect the six fundamental reaction types in biochemistry."
        ],
        keyEquations: {
            MichaelisMenten: "v = (Vmax × [S]) / (Km + [S])",
            LineweaverBurk: "1/v = (Km/Vmax)(1/[S]) + 1/Vmax",
            catalyticEfficiency: "kcat/Km — the best measure of enzyme performance",
            Qten: "Rate₂ / Rate₁ ≈ 2 for every 10°C increase (below denaturation)"
        },
        inhibitionComparison: {
            competitive:    { KmEffect: "Increases",   VmaxEffect: "No change",  overcome: "Yes — add more substrate" },
            nonCompetitive: { KmEffect: "No change",   VmaxEffect: "Decreases",  overcome: "No" },
            uncompetitive:  { KmEffect: "Decreases",   VmaxEffect: "Decreases",  overcome: "No" },
            irreversible:   { KmEffect: "N/A",         VmaxEffect: "Decreases",  overcome: "No — permanent" }
        },
        commonMistakesToAvoid: [
            "Enzymes do NOT change the equilibrium of a reaction — only the rate at which equilibrium is reached",
            "Low Km means HIGH affinity — students frequently invert this relationship",
            "Vmax is a property of the enzyme-substrate system, not the enzyme alone",
            "Non-competitive inhibitors bind to the allosteric site, NOT the active site",
            "Denaturation is not the same as inhibition — denaturation is irreversible structural unfolding",
            "Cofactors are NOT substrates — they assist catalysis but are regenerated"
        ],
        connections: [
            "Metabolism: enzymes control every step of glycolysis, the TCA cycle, and oxidative phosphorylation",
            "Pharmacology: most drugs work by inhibiting specific enzymes (statins, ACE inhibitors, antibiotics)",
            "Genetics: restriction enzymes are the molecular scissors of genetic engineering",
            "Disease: enzyme deficiencies cause inherited metabolic disorders (e.g. PKU, Gaucher's disease)",
            "Evolution: enzyme evolution by mutation and selection is a primary driver of metabolic diversity"
        ],
        examReadinessChecklist: [
            "Can you explain lock-and-key vs induced fit with a diagram?",
            "Can you sketch and interpret a Michaelis-Menten curve and a Lineweaver-Burk plot?",
            "Can you predict the effect of each inhibitor type on Km and Vmax?",
            "Can you explain feedback inhibition with a specific pathway example?",
            "Can you classify an enzyme given its reaction type?",
            "Can you connect enzyme kinetics to real drug mechanisms?"
        ]
    }

},




};         
}  


const EndSection15 = "close"