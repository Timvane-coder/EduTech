// Enhanced Mendelian Genetics Workbook - Comprehensive Heredity and Genetics System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { BiologySvgDiagrams } from '../svg-data.js';
import { BiologyDiagramsRegistry } from '../registry.js';
import { BiologyDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedMendelianGeneticsWorkbook {
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

        this.geneticsSymbols = this.initializeGeneticsSymbols();
        this.setThemeColors();
        this.initializeGeneticsTopics();
        this.initializeGeneticsLessons();
        this.initializeGeneticsExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            genetics: {
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
                experimentBg: '#fff9c4',
                experimentText: '#f57f17',
                dominantBg: '#ffebee',
                recessiveBg: '#e3f2fd',
                heterozygousBg: '#fff3e0',
                homozygousBg: '#e8f5e9',
                punnettBg: '#f5f5f5'
            },
            heredity: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#5e35b1',
                headerText: '#ffffff',
                sectionBg: '#d1c4e9',
                sectionText: '#311b92',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#ede7f6',
                resultText: '#5e35b1',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#e1f5fe',
                stepText: '#01579b',
                borderColor: '#7e57c2',
                contentBg: '#fce4ec',
                contentText: '#880e4f',
                diagramBg: '#e0f2f1',
                experimentBg: '#fffde7',
                experimentText: '#f57f17',
                dominantBg: '#ffcdd2',
                recessiveBg: '#bbdefb',
                heterozygousBg: '#ffe0b2',
                homozygousBg: '#c8e6c9',
                punnettBg: '#f5f5f5'
            }
        };

        this.colors = themes[this.theme] || themes.genetics;
    }

    initializeGeneticsSymbols() {
        return {
            // Genetic notation
            'dominant': '●',
            'recessive': '○',
            'male': '♂',
            'female': '♀',
            'cross': '×',
            'F1': 'F₁',
            'F2': 'F₂',
            'P': 'P',
            
            // Mathematical symbols
            'ratio': ':',
            'chi': 'χ',
            'chi2': 'χ²',
            'squared': '²',
            
            // Genetic symbols
            'heterozygous': 'Aa',
            'homozygousDominant': 'AA',
            'homozygousRecessive': 'aa',
            
            // Arrows
            'arrow': '→',
            'cross_arrow': '⨯',
            
            // Common alleles (examples)
            'T': 'T', // Tall
            't': 't', // short
            'Y': 'Y', // Yellow
            'y': 'y', // green
            'R': 'R', // Round
            'r': 'r'  // wrinkled
        };
    }

    initializeGeneticsTopics() {
        this.geneticsTopics = {
            mendels_laws: {
                patterns: [
                    /mendel|mendelian/i,
                    /law.*segregation|law.*independent.*assortment/i,
                    /dominance|dominant.*recessive/i,
                    /monohybrid|dihybrid/i
                ],
                handler: this.handleMendelsLaws.bind(this),
                name: "Mendel's Laws of Inheritance",
                category: 'classical_genetics',
                description: 'Fundamental principles of heredity discovered by Gregor Mendel',
                difficulty: 'intermediate',
                prerequisites: ['basic_biology', 'cell_division']
            },
            
            monohybrid_crosses: {
                patterns: [
                    /monohybrid.*cross/i,
                    /single.*trait|one.*trait/i,
                    /3:1.*ratio|1:2:1/i,
                    /punnett.*square.*monohybrid/i
                ],
                handler: this.handleMonohybridCrosses.bind(this),
                name: 'Monohybrid Crosses',
                category: 'genetic_crosses',
                description: 'Crosses involving a single trait with two alleles',
                difficulty: 'beginner',
                prerequisites: ['mendels_laws', 'alleles']
            },
            
            dihybrid_crosses: {
                patterns: [
                    /dihybrid.*cross/i,
                    /two.*trait|9:3:3:1/i,
                    /independent.*assortment/i,
                    /punnett.*square.*dihybrid/i
                ],
                handler: this.handleDihybridCrosses.bind(this),
                name: 'Dihybrid Crosses',
                category: 'genetic_crosses',
                description: 'Crosses involving two independent traits',
                difficulty: 'intermediate',
                prerequisites: ['monohybrid_crosses', 'law_of_independent_assortment']
            },
            
            test_crosses: {
                patterns: [
                    /test.*cross|backcross/i,
                    /determine.*genotype/i,
                    /unknown.*allele/i
                ],
                handler: this.handleTestCrosses.bind(this),
                name: 'Test Crosses and Backcrosses',
                category: 'genetic_analysis',
                description: 'Determining unknown genotypes through controlled crosses',
                difficulty: 'intermediate',
                prerequisites: ['monohybrid_crosses', 'genotype_phenotype']
            },
            
            incomplete_dominance: {
                patterns: [
                    /incomplete.*dominance|partial.*dominance/i,
                    /blending.*inheritance/i,
                    /intermediate.*phenotype/i,
                    /codominance/i
                ],
                handler: this.handleIncompleteDominance.bind(this),
                name: 'Incomplete Dominance and Codominance',
                category: 'non_mendelian',
                description: 'Patterns of inheritance that deviate from simple dominance',
                difficulty: 'intermediate',
                prerequisites: ['mendels_laws', 'alleles']
            },
            
            multiple_alleles: {
                patterns: [
                    /multiple.*allele/i,
                    /ABO.*blood.*type/i,
                    /three.*or.*more.*allele/i
                ],
                handler: this.handleMultipleAlleles.bind(this),
                name: 'Multiple Alleles',
                category: 'non_mendelian',
                description: 'Genes with more than two allelic forms',
                difficulty: 'advanced',
                prerequisites: ['mendels_laws', 'codominance']
            },
            
            sex_linked: {
                patterns: [
                    /sex.*link|x.*link|y.*link/i,
                    /hemophilia|color.*blind/i,
                    /sex.*chromosome/i
                ],
                handler: this.handleSexLinked.bind(this),
                name: 'Sex-Linked Inheritance',
                category: 'chromosomal_genetics',
                description: 'Genes located on sex chromosomes',
                difficulty: 'advanced',
                prerequisites: ['chromosomes', 'mendels_laws']
            },
            
            pedigree_analysis: {
                patterns: [
                    /pedigree|family.*tree/i,
                    /inheritance.*pattern/i,
                    /carrier|affected/i
                ],
                handler: this.handlePedigreeAnalysis.bind(this),
                name: 'Pedigree Analysis',
                category: 'genetic_analysis',
                description: 'Tracing inheritance patterns through family trees',
                difficulty: 'advanced',
                prerequisites: ['mendels_laws', 'dominant_recessive']
            },
            
            chi_square: {
                patterns: [
                    /chi.*square|χ²/i,
                    /goodness.*of.*fit/i,
                    /statistical.*analysis.*genetics/i,
                    /expected.*observed.*ratio/i
                ],
                handler: this.handleChiSquare.bind(this),
                name: 'Chi-Square Analysis in Genetics',
                category: 'genetic_statistics',
                description: 'Statistical testing of genetic ratios',
                difficulty: 'advanced',
                prerequisites: ['probability', 'mendelian_ratios']
            }
        };
    }

    initializeGeneticsLessons() {
        this.lessons = {
            mendels_laws: {
                title: "Mendel's Laws of Inheritance: Foundation of Classical Genetics",
                concepts: [
                    "Genes exist in alternative forms called alleles",
                    "Law of Segregation: Allele pairs separate during gamete formation",
                    "Law of Independent Assortment: Genes for different traits assort independently",
                    "Law of Dominance: One allele can mask the expression of another",
                    "Genotype determines phenotype through gene expression"
                ],
                theory: "Gregor Mendel's work with pea plants (1856-1863) established the fundamental principles of heredity. His mathematical approach to breeding experiments revealed that inheritance follows predictable patterns, contradicting the prevailing theory of blending inheritance.",
                
                historicalContext: {
                    scientist: "Gregor Mendel (1822-1884)",
                    location: "Augustinian monastery in Brno (now Czech Republic)",
                    period: "1856-1863 (experiments), 1866 (publication)",
                    recognition: "Work ignored until 1900, rediscovered by de Vries, Correns, and von Tschermak",
                    significance: "Established genetics as mathematical science, foundation for modern genetics"
                },
                
                keyDefinitions: {
                    "Gene": "Unit of heredity that occupies a specific locus on a chromosome",
                    "Allele": "Alternative form of a gene (e.g., tall vs short)",
                    "Dominant Allele": "Allele that expresses its phenotype even in heterozygous condition (represented by capital letter, e.g., T)",
                    "Recessive Allele": "Allele that only expresses phenotype in homozygous condition (lowercase letter, e.g., t)",
                    "Genotype": "Genetic makeup of an organism (e.g., TT, Tt, tt)",
                    "Phenotype": "Observable characteristics of an organism (e.g., tall, short)",
                    "Homozygous": "Two identical alleles for a trait (TT or tt)",
                    "Heterozygous": "Two different alleles for a trait (Tt)",
                    "P Generation": "Parental generation (original cross)",
                    "F1 Generation": "First filial generation (offspring of P cross)",
                    "F2 Generation": "Second filial generation (offspring of F1 cross)",
                    "Locus": "Specific location of gene on chromosome",
                    "True-breeding": "Organism that produces offspring identical to itself when self-pollinated"
                },
                
                mendelsLaws: {
                    lawOfSegregation: {
                        statement: "The two alleles for each trait separate during gamete formation, and each gamete receives only one allele",
                        basis: "Occurs during meiosis when homologous chromosomes separate",
                        implication: "Each parent contributes one allele to offspring",
                        ratio: "F2 genotypic ratio of 1:2:1 (AA:Aa:aa), phenotypic ratio 3:1",
                        example: "Tt × Tt → gametes T and t from each parent → offspring TT, Tt, Tt, tt"
                    },
                    
                    lawOfIndependentAssortment: {
                        statement: "Alleles of different genes assort independently during gamete formation",
                        basis: "Different chromosomes (or distant genes on same chromosome) segregate independently during meiosis",
                        implication: "Inheritance of one trait doesn't affect inheritance of another",
                        ratio: "F2 phenotypic ratio of 9:3:3:1 for dihybrid cross",
                        example: "TtYy × TtYy → 9 tall yellow : 3 tall green : 3 short yellow : 1 short green",
                        limitation: "Does NOT apply to linked genes on same chromosome"
                    },
                    
                    lawOfDominance: {
                        statement: "When two different alleles are present, the dominant allele is fully expressed",
                        note: "Not a universal law (incomplete dominance, codominance exist)",
                        example: "Tt produces tall phenotype (T is dominant over t)"
                    }
                },
                
                mendelsPeaPlantTraits: {
                    why_peas: [
                        "Easy to grow and maintain",
                        "Short generation time (rapid results)",
                        "Produce many offspring (large sample size)",
                        "Self-pollinating but can be cross-pollinated",
                        "Distinct, easily observable traits",
                        "True-breeding varieties available"
                    ],
                    sevenTraits: [
                        {trait: "Plant height", dominant: "Tall (T)", recessive: "Short (t)"},
                        {trait: "Seed shape", dominant: "Round (R)", recessive: "Wrinkled (r)"},
                        {trait: "Seed color", dominant: "Yellow (Y)", recessive: "Green (y)"},
                        {trait: "Pod shape", dominant: "Inflated (I)", recessive: "Constricted (i)"},
                        {trait: "Pod color", dominant: "Green (G)", recessive: "Yellow (g)"},
                        {trait: "Flower position", dominant: "Axial (A)", recessive: "Terminal (a)"},
                        {trait: "Flower color", dominant: "Purple (P)", recessive: "White (p)"}
                    ]
                },
                
                mendelianRatios: {
                    monohybrid: {
                        cross: "Aa × Aa",
                        genotypicRatio: "1 AA : 2 Aa : 1 aa",
                        phenotypicRatio: "3 dominant : 1 recessive",
                        probability: {
                            dominant: "3/4 or 75%",
                            recessive: "1/4 or 25%"
                        }
                    },
                    dihybrid: {
                        cross: "AaBb × AaBb",
                        genotypicRatio: "Complex (9 different genotypes)",
                        phenotypicRatio: "9 A_B_ : 3 A_bb : 3 aaB_ : 1 aabb",
                        phenotypes: "9 both dominant : 3 first dominant only : 3 second dominant only : 1 both recessive"
                    },
                    testCross: {
                        purpose: "Determine genotype of dominant phenotype individual",
                        cross: "A_ × aa (cross with homozygous recessive)",
                        results: {
                            ifHomozygous: "AA × aa → all Aa (100% dominant phenotype)",
                            ifHeterozygous: "Aa × aa → 1 Aa : 1 aa (50% dominant, 50% recessive)"
                        }
                    }
                },
                
                punnettSquareMethod: {
                    steps: [
                        "1. Determine parental genotypes",
                        "2. Determine possible gametes from each parent (use law of segregation)",
                        "3. Set up Punnett square grid",
                        "4. Fill in offspring genotypes by combining gametes",
                        "5. Count genotypic and phenotypic ratios",
                        "6. Calculate probabilities"
                    ],
                    example: {
                        parents: "Tt × Tt",
                        gametes: "Each parent produces T and t gametes",
                        offspring: ["TT (1/4)", "Tt (1/2)", "tt (1/4)"],
                        phenotype: "3/4 tall, 1/4 short"
                    }
                },
                
                probabilityRules: {
                    productRule: {
                        statement: "Probability of independent events occurring together = product of individual probabilities",
                        symbol: "P(A and B) = P(A) × P(B)",
                        example: "Probability of TtYy from Tt × Tt and Yy × Yy = (1/2) × (1/2) = 1/4"
                    },
                    sumRule: {
                        statement: "Probability of either of two mutually exclusive events = sum of individual probabilities",
                        symbol: "P(A or B) = P(A) + P(B)",
                        example: "Probability of Tt or TT = 1/2 + 1/4 = 3/4"
                    }
                },
                
                modernMolecularBasis: {
                    genesAsDNA: "Genes are segments of DNA that code for proteins or RNA",
                    allelesAsDNAVariations: "Alleles are different DNA sequences of same gene",
                    dominanceAtMolecularLevel: {
                        dominant: "One functional copy of gene often sufficient for normal phenotype",
                        recessive: "Two defective copies needed to show recessive phenotype (loss of function)",
                        example: "PKU: Recessive allele produces non-functional enzyme, needs two copies for disease"
                    },
                    segregationDuringMeiosis: "Homologous chromosomes separate during meiosis I, carrying different alleles to different gametes"
                },
                
                applications: [
                    "Predicting offspring ratios in breeding programs",
                    "Understanding human genetic diseases",
                    "Agricultural crop and livestock improvement",
                    "Genetic counseling and pedigree analysis",
                    "Foundation for modern molecular genetics and genomics"
                ]
            },

            monohybrid_crosses: {
                title: "Monohybrid Crosses: Single Trait Inheritance",
                concepts: [
                    "Monohybrid cross examines inheritance of single trait",
                    "F1 generation from crossing two true-breeding parents is uniformly heterozygous",
                    "F2 generation shows 3:1 phenotypic ratio and 1:2:1 genotypic ratio",
                    "Punnett square predicts offspring ratios",
                    "Test cross determines unknown genotypes"
                ],
                theory: "A monohybrid cross follows the inheritance of a single trait controlled by one gene with two alleles. This simple system allows clear observation of Mendel's Law of Segregation.",
                
                keyDefinitions: {
                    "Monohybrid Cross": "Cross between two individuals that differ in one trait",
                    "True-breeding": "Organisms that produce offspring identical to themselves (homozygous)",
                    "F1 Hybrid": "First generation offspring, all heterozygous",
                    "Phenotypic Ratio": "Ratio of observable traits (3:1 in F2)",
                    "Genotypic Ratio": "Ratio of genetic makeup (1:2:1 in F2)"
                },
                
                classicExample: {
                    trait: "Pea plant height",
                    P_generation: {
                        parent1: "TT (tall, homozygous dominant)",
                        parent2: "tt (short, homozygous recessive)"
                    },
                    F1_generation: {
                        cross: "TT × tt",
                        gametes: "All T from TT parent, all t from tt parent",
                        offspring: "100% Tt (all tall, heterozygous)",
                        observation: "All F1 plants tall - demonstrates dominance"
                    },
                    F2_generation: {
                        cross: "Tt × Tt (F1 self-pollination)",
                        gametes: "Each parent produces T and t in equal proportions",
                        punnettSquare: [
                            ["", "T", "t"],
                            ["T", "TT", "Tt"],
                            ["t", "Tt", "tt"]
                        ],
                        genotypicRatio: "1 TT : 2 Tt : 1 tt",
                        phenotypicRatio: "3 tall : 1 short",
                        percentages: "75% tall, 25% short"
                    }
                },
                
                punnettSquareSteps: [
                    "Write parental genotypes (e.g., Tt × Tt)",
                    "Determine gametes: each parent contributes one allele",
                    "Draw 2×2 grid for monohybrid cross",
                    "Write one parent's gametes across top",
                    "Write other parent's gametes down left side",
                    "Fill in boxes by combining alleles",
                    "Count and ratio genotypes and phenotypes"
                ],
                
                possibleCrosses: {
                    homozygousDominant_x_homozygousRecessive: {
                        cross: "AA × aa",
                        result: "100% Aa (all heterozygous, dominant phenotype)",
                        ratio: "4:0 (no recessive phenotype)"
                    },
                    heterozygous_x_heterozygous: {
                        cross: "Aa × Aa",
                        result: "1 AA : 2 Aa : 1 aa",
                        phenotypicRatio: "3:1",
                        mostCommonF2: "This is the classic F2 ratio"
                    },
                    heterozygous_x_homozygousRecessive: {
                        cross: "Aa × aa",
                        result: "1 Aa : 1 aa",
                        phenotypicRatio: "1:1",
                        use: "Test cross to determine genotype"
                    },
                    heterozygous_x_homozygousDominant: {
                        cross: "Aa × AA",
                        result: "1 AA : 1 Aa",
                        ratio: "2:0 (all dominant phenotype, no recessive)"
                    },
                    homozygousDominant_x_homozygousDominant: {
                        cross: "AA × AA",
                        result: "100% AA",
                        ratio: "All dominant"
                    },
                    homozygousRecessive_x_homozygousRecessive: {
                        cross: "aa × aa",
                        result: "100% aa",
                        ratio: "All recessive"
                    }
                },
                
                testCross: {
                    purpose: "Determine whether individual with dominant phenotype is AA or Aa",
                    method: "Cross unknown genotype with homozygous recessive (aa)",
                    interpretation: {
                        allOffspringDominant: "Unknown parent is AA",
                        halfDominantHalfRecessive: "Unknown parent is Aa"
                    },
                    example: {
                        question: "A tall pea plant could be TT or Tt. How to determine?",
                        answer: "Cross with short plant (tt)",
                        ifTT: "TT × tt → all Tt (100% tall)",
                        ifTt: "Tt × tt → 1 Tt : 1 tt (50% tall, 50% short)"
                    }
                },
                
                calculations: {
                    probability: {
                        heterozygousFromHeterozygousCross: "Aa × Aa → P(Aa) = 1/2 or 50%",
                        dominantPhenotypeFromHeterozygousCross: "Aa × Aa → P(dominant) = 3/4 or 75%",
                        recessivePhenotypeFromHeterozygousCross: "Aa × Aa → P(recessive) = 1/4 or 25%"
                    }
                },
                
                humanExamples: [
                    {
                        trait: "Widow's peak",
                        dominant: "Widow's peak (W)",
                        recessive: "Straight hairline (w)",
                        note: "WW or Ww = widow's peak, ww = straight"
                    },
                    {
                        trait: "Attached earlobes",
                        dominant: "Free earlobes (E)",
                        recessive: "Attached earlobes (e)",
                        note: "EE or Ee = free, ee = attached"
                    },
                    {
                        trait: "Tongue rolling",
                        dominant: "Can roll tongue (R)",
                        recessive: "Cannot roll (r)",
                        note: "RR or Rr = roller, rr = non-roller"
                    }
                ],
                
                applications: [
                    "Predicting offspring in animal and plant breeding",
                    "Understanding inheritance of single-gene disorders",
                    "Determining carrier status in genetic counseling",
                    "Agricultural selection for desired traits"
                ]
            },

            dihybrid_crosses: {
                title: "Dihybrid Crosses: Two-Trait Inheritance and Independent Assortment",
                concepts: [
                    "Dihybrid cross examines inheritance of two traits simultaneously",
                    "Demonstrates Mendel's Law of Independent Assortment",
                    "F2 generation shows 9:3:3:1 phenotypic ratio",
                    "16 possible offspring genotypes in F2",
                    "Product rule used to calculate probabilities"
                ],
                theory: "Dihybrid crosses track two traits at once, revealing whether genes assort independently or are linked. When genes are on different chromosomes, they follow Mendel's Law of Independent Assortment, producing the characteristic 9:3:3:1 ratio.",
                
                keyDefinitions: {
                    "Dihybrid Cross": "Cross tracking two traits controlled by genes at different loci",
                    "Independent Assortment": "Alleles of different genes segregate independently during gamete formation",
                    "9:3:3:1 Ratio": "Classic F2 phenotypic ratio from dihybrid cross of two heterozygotes",
                    "Gamete Combinations": "Four possible gamete types from dihybrid (e.g., TY, Ty, tY, ty)"
                },
                
                classicExample: {
                    traits: {
                        trait1: "Seed shape: R (round) dominant over r (wrinkled)",
                        trait2: "Seed color: Y (yellow) dominant over y (green)"
                    },
                    
                    P_generation: {
                        parent1: "RRYY (round, yellow)",
                        parent2: "rryy (wrinkled, green)",
                        both: "True-breeding (homozygous)"
                    },
                    
                    F1_generation: {
                        cross: "RRYY × rryy",
                        gametes: {
                            parent1: "All RY",
                            parent2: "All ry"
                        },
                        offspring: "100% RrYy (all round, yellow)",
                        observation: "All F1 show both dominant traits"
                    },
                    
                    F2_generation: {
                        cross: "RrYy × RrYy",
                        gametes: "Each parent produces RY, Ry, rY, ry in equal proportions (1:1:1:1)",
                        punnettSquare: "4×4 grid (16 boxes)",
                        phenotypicRatio: "9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green",
                        phenotypicClasses: {
                            roundYellow: "9/16 (both dominant)",
                            roundGreen: "3/16 (R_ yy)",
                            wrinkledYellow: "3/16 (rr Y_)",
                            wrinkledGreen: "1/16 (both recessive)"
                        },
                        genotypes: "9 different genotypic combinations"
                    }
                },
                
                determiningGametesForDihybrid: {
                    method: "Use FOIL method or branching diagram",
                    example_RrYy: {
                        alleles: "R or r (for shape), Y or y (for color)",
                        combinations: [
                            "RY (R with Y)",
                            "Ry (R with y)",
                            "rY (r with Y)",
                            "ry (r with y)"
                        ],
                        proportions: "Each gamete type = 1/4 or 25%"
                    },
                    ruleOfThumb: "Number of gamete types = 2^n, where n = number of heterozygous gene pairs"
                },
                
                punnettSquare4x4: {
                    setup: [
                        "Draw 4×4 grid (16 boxes)",
                        "Write one parent's gametes across top: RY, Ry, rY, ry",
                        "Write other parent's gametes down left: RY, Ry, rY, ry",
                        "Fill in all 16 boxes by combining gametes",
                        "Count phenotypes"
                    ],
                    grid: [
                        ["", "RY", "Ry", "rY", "ry"],
                        ["RY", "RRYY", "RRYy", "RrYY", "RrYy"],
                        ["Ry", "RRYy", "RRyy", "RrYy", "Rryy"],
                        ["rY", "RrYY", "RrYy", "rrYY", "rrYy"],
                        ["ry", "RrYy", "Rryy", "rrYy", "rryy"]
                    ]
                },
                
                nineThreeThreeOneRatio: {
                    breakdown: {
                        class1: "9/16 R_Y_ (round, yellow) - both dominant",
                        class2: "3/16 R_yy (round, green) - first dominant, second recessive",
                        class3: "3/16 rrY_ (wrinkled, yellow) - first recessive, second dominant",
                        class4: "1/16 rryy (wrinkled, green) - both recessive"
                    },
                    derivation: "Product of two 3:1 ratios: (3:1) × (3:1) = 9:3:3:1",
                    calculation: {
                        roundYellow: "(3/4 round) × (3/4 yellow) = 9/16",
                        roundGreen: "(3/4 round) × (1/4 green) = 3/16",
                        wrinkledYellow: "(1/4 wrinkled) × (3/4 yellow) = 3/16",
                        wrinkledGreen: "(1/4 wrinkled) × (1/4 green) = 1/16"
                    }
                },
                
                independentAssortmentExplanation: {
                    meaning: "Inheritance of seed shape doesn't affect inheritance of seed color",
                    mechanismDuringMeiosis: "Genes on different chromosomes (or far apart on same chromosome) segregate independently",
                    consequence: "All gamete combinations equally likely (RY, Ry, rY, ry each 25%)",
                    counterexample: "Linked genes on same chromosome do NOT assort independently"
                },
                
                branchDiagramMethod: {
                    description: "Alternative to Punnett square for calculating probabilities",
                    steps: [
                        "Branch 1: Consider first trait alone (Rr × Rr → 3/4 R_, 1/4 rr)",
                        "Branch 2: Consider second trait alone (Yy × Yy → 3/4 Y_, 1/4 yy)",
                        "Combine using product rule"
                    ],
                    example: {
                        question: "Probability of round, green (R_yy) from RrYy × RrYy?",
                        calculation: "P(R_) × P(yy) = 3/4 × 1/4 = 3/16"
                    },
                    advantage: "Faster for large crosses, easy to extend to three or more traits"
                },
                
                productRuleApplication: {
                    rule: "Probability of independent events = product of individual probabilities",
                    dihybridExample: "RrYy × RrYy",
                    question: "Probability of RrYy offspring?",
                    solution: {
                        trait1: "P(Rr) from Rr × Rr = 1/2",
                        trait2: "P(Yy) from Yy × Yy = 1/2",
                        combined: "P(RrYy) = 1/2 × 1/2 = 1/4"
                    }
                },
                
                testCrossForDihybrid: {
                    purpose: "Determine if individual is dihybrid (RrYy) or has different genotype",
                    method: "Cross with double recessive (rryy)",
                    expectedResults: {
                        ifRrYy: "1 RrYy : 1 Rryy : 1 rrYy : 1 rryy (1:1:1:1 ratio)",
                        ifRRYY: "All RrYy (100% round, yellow)",
                        ifRRYy: "1 RrYy : 1 RrYy (all round, 1:1 yellow:green)",
                        interpretation: "Offspring ratios reveal parental genotype"
                    }
                },
                
                humanExamples: [
                    {
                        trait1: "Hair texture: C (curly) dominant over c (straight)",
                        trait2: "Hair color: B (brown) dominant over b (blonde)",
                        cross: "CcBb × CcBb",
                        ratio: "9 curly brown : 3 curly blonde : 3 straight brown : 1 straight blonde"
                    }
                ],
                
                deviationsFrom9331: {
                    linkedGenes: "Genes on same chromosome show parental combinations more often",
                    epistasis: "One gene masks expression of another (e.g., 9:3:4, 12:3:1 ratios)",
                    lethalAlleles: "Some genotypes are lethal, changing expected ratios",
                    note: "Modified ratios indicate non-Mendelian inheritance"
                },
                
                applications: [
                    "Plant and animal breeding for multiple desirable traits",
                    "Predicting genetic diversity in populations",
                    "Understanding complex trait inheritance",
                    "Identifying linked genes when ratios deviate from 9:3:3:1"
                ]
            },

            incomplete_dominance: {
                title: "Incomplete Dominance and Codominance: Non-Mendelian Inheritance Patterns",
                concepts: [
                    "Incomplete dominance: Heterozygote shows intermediate phenotype",
                    "Codominance: Both alleles fully expressed in heterozygote",
                    "Phenotypic and genotypic ratios are the same (1:2:1)",
                    "Challenges simple dominant/recessive classification",
                    "Common in nature, including human traits"
                ],
                theory: "Not all traits follow simple Mendelian dominance. In incomplete dominance, neither allele is completely dominant, resulting in a blended or intermediate phenotype. In codominance, both alleles are fully expressed simultaneously.",
                
                keyDefinitions: {
                    "Incomplete Dominance": "Neither allele is dominant; heterozygote has intermediate phenotype",
                    "Codominance": "Both alleles are equally dominant and both phenotypes are expressed",
                    "Blending Inheritance": "Historical (incorrect) theory that traits blend; incomplete dominance is NOT blending",
                    "Multiple Phenotypes": "In incomplete/codominance, 3 distinct phenotypes possible (not 2)"
                },
                
                incompleteDominance: {
                    definition: "Heterozygote phenotype is intermediate between two homozygotes",
                    
                    classicExample_snapdragons: {
                        trait: "Flower color in snapdragons (Antirrhinum)",
                        alleles: {
                            R: "Red flower allele",
                            r: "White flower allele"
                        },
                        genotypes: {
                            RR: "Red flowers",
                            Rr: "Pink flowers (intermediate)",
                            rr: "White flowers"
                        },
                        notation: "Often use C^R and C^W to show codominant symbols",
                        cross_RR_x_rr: {
                            parents: "RR (red) × rr (white)",
                            F1: "100% Rr (all pink)",
                            observation: "Pink is NOT a blend - it's intermediate expression"
                        },
                        cross_Rr_x_Rr: {
                            parents: "Rr (pink) × Rr (pink)",
                            F2_genotypic: "1 RR : 2 Rr : 1 rr",
                            F2_phenotypic: "1 red : 2 pink : 1 white",
                            ratio: "1:2:1 (phenotypic = genotypic)",
                            note: "Red and white reappear in F2, proving alleles didn't blend"
                        },
                        molecularBasis: "Rr produces half the amount of red pigment → pink color"
                    },
                    
                    otherExamples: [
                        {
                            organism: "Four o'clock plants",
                            trait: "Flower color",
                            inheritance: "Red × White → Pink F1"
                        },
                        {
                            organism: "Chickens",
                            trait: "Feather color (Andalusian fowl)",
                            genotypes: "BB (black), Bb (blue/gray), bb (white)"
                        },
                        {
                            organism: "Humans",
                            trait: "Hypercholesterolemia (familial)",
                            genotypes: "HH (normal), Hh (moderately high cholesterol), hh (extremely high)"
                        }
                    ],
                    
                    importantDistinction: {
                        notBlending: "Alleles remain distinct and separate in F2; NOT permanent blending",
                        particulate: "Inheritance still follows Mendel's particulate theory",
                        genesIntact: "Genes do not merge; they maintain identity"
                    }
                },
                
                codominance: {
                    definition: "Both alleles are fully and simultaneously expressed in heterozygote",
                    characteristic: "Two distinct phenotypes visible at once, not intermediate",
                    
                    classicExample_ABO_blood: {
                        gene: "ABO blood group gene (I gene)",
                        alleles: {
                            I_A: "Produces A antigen on RBC surface",
                            I_B: "Produces B antigen on RBC surface",
                            i: "Produces no antigen (recessive to both I^A and I^B)"
                        },
                        bloodTypes: {
                            A: "Genotypes I^A I^A or I^A i",
                            B: "Genotypes I^B I^B or I^B i",
                            AB: "Genotype I^A I^B (codominant - BOTH antigens present)",
                            O: "Genotype ii (no antigens)"
                        },
                        codominanceShown: "I^A I^B individuals have BOTH A and B antigens (not intermediate)",
                        note: "This is also example of multiple alleles (three alleles: I^A, I^B, i)"
                    },
                    
                    otherExamples: [
                        {
                            organism: "Cattle",
                            trait: "Coat color (roan)",
                            genotypes: "RR (red), R'R' (white), RR' (roan - red and white hairs)",
                            note: "Individual hairs are red OR white, not pink"
                        },
                        {
                            organism: "Chickens",
                            trait: "Feather pattern",
                            genotypes: "MM (black), M'M' (white), MM' (erminette - black and white speckled)"
                        },
                        {
                            organism: "Humans",
                            trait: "MN blood group",
                            genotypes: "L^M L^M (M antigens), L^N L^N (N antigens), L^M L^N (both M and N)"
                        }
                    ],
                    
                    molecularBasis: "Both alleles produce functional proteins that are both detectable"
                },
                
                comparison: {
                    incompleteDominance: {
                        heterozygote: "Intermediate phenotype (blend in appearance)",
                        example: "Red + White → Pink",
                        molecular: "Reduced amount of gene product"
                    },
                    codominance: {
                        heterozygote: "Both phenotypes fully expressed (both visible)",
                        example: "A + B → AB (both A and B antigens)",
                        molecular: "Both gene products fully produced"
                    },
                    completeDominance: {
                        heterozygote: "Same as homozygous dominant",
                        example: "T + t → Tall (same as TT)",
                        molecular: "One functional copy sufficient"
                    }
                },
                
                geneticCrosses: {
                    incompleteDominance_snapdragons: {
                        cross: "Pink × Pink (Rr × Rr)",
                        offspring: "1 RR red : 2 Rr pink : 1 rr white",
                        phenotypicRatio: "1:2:1",
                        genotypicRatio: "1:2:1 (same as phenotypic)"
                    },
                    codominance_ABO: {
                        cross: "AB × O (I^A I^B × ii)",
                        offspring: "1 I^A i (Type A) : 1 I^B i (Type B)",
                        ratio: "1:1 (50% A, 50% B, no AB or O)",
                        note: "Different from Mendelian 3:1"
                    }
                },
                
                implications: {
                    phenotypicRatios: "1:2:1 instead of 3:1 for monohybrid",
                    genotypePrediction: "Can determine genotype from phenotype (phenotype = genotype)",
                    noMasking: "No allele is masked; both contribute to phenotype",
                    molecularInsight: "Reveals gene dosage effects and protein function"
                },
                
                humanHealthExamples: {
                    sickleCellTrait: {
                        genotypes: {
                            HbA_HbA: "Normal hemoglobin",
                            HbA_HbS: "Sickle cell trait (some sickling, malaria resistance) - codominant",
                            HbS_HbS: "Sickle cell disease (severe)"
                        },
                        incomplete: "Heterozygote has intermediate phenotype (mild symptoms)"
                    },
                    familialHypercholesterolemia: {
                        genotypes: {
                            HH: "Normal cholesterol",
                            Hh: "Moderately high (heterozygote)",
                            hh: "Extremely high (homozygous recessive)"
                        },
                        inheritance: "Incomplete dominance"
                    }
                },
                
                applications: [
                    "Understanding ABO blood typing and transfusions",
                    "Breeding programs for flower colors and livestock",
                    "Genetic counseling for diseases showing incomplete dominance",
                    "Research on gene expression and protein function"
                ]
            },

            sex_linked: {
                title: "Sex-Linked Inheritance: Genes on Sex Chromosomes",
                concepts: [
                    "Sex-linked genes are located on X or Y chromosomes",
                    "X-linked traits more common than Y-linked",
                    "Males are hemizygous for X-linked genes (only one copy)",
                    "X-linked recessive traits more common in males",
                    "Carrier females can pass X-linked traits without expressing them",
                    "Criss-cross inheritance pattern characteristic of X-linked traits"
                ],
                theory: "Sex chromosomes (X and Y) carry genes beyond sex determination. X-linked inheritance shows distinctive patterns because males have only one X chromosome, making them more susceptible to X-linked recessive disorders.",
                
                keyDefinitions: {
                    "Sex Chromosomes": "X and Y chromosomes that determine biological sex",
                    "Autosomes": "Non-sex chromosomes (22 pairs in humans)",
                    "X-linked": "Gene located on X chromosome",
                    "Y-linked": "Gene located on Y chromosome (rare)",
                    "Hemizygous": "Having only one copy of a gene (males for X-linked genes)",
                    "Carrier": "Heterozygous female with one recessive X-linked allele (does not express trait)",
                    "Criss-cross Inheritance": "Trait passes from carrier mother to affected son to carrier daughter"
                },
                
                sexDetermination: {
                    humans: {
                        female: "XX (homogametic - produces one type of gamete)",
                        male: "XY (heterogametic - produces two types of gametes)",
                        offspring: "50% XX (female), 50% XY (male)"
                    },
                    notation: {
                        X_with_allele: "X^H or X^h (X chromosome with specific allele)",
                        Y: "Y (Y chromosome, usually no allele for X-linked gene)",
                        example: "X^H X^h (carrier female), X^h Y (affected male)"
                    }
                },
                
                X_linkedRecessive: {
                    characteristics: [
                        "Affects males more than females",
                        "Affected males usually have unaffected parents",
                        "Never passed from father to son (no Y to son from father)",
                        "Passed from carrier mother to son (50% chance)",
                        "Affected female must have affected father AND carrier/affected mother",
                        "Skips generations (carrier females don't show trait)"
                    ],
                    
                    classicExample_colorBlindness: {
                        gene: "Red-green color blindness",
                        alleles: {
                            X_C: "Normal color vision (dominant)",
                            X_c: "Color blind (recessive)"
                        },
                        possibleGenotypes: {
                            females: {
                                X_C_X_C: "Normal vision (homozygous)",
                                X_C_X_c: "Normal vision (carrier)",
                                X_c_X_c: "Color blind (rare)"
                            },
                            males: {
                                X_C_Y: "Normal vision",
                                X_c_Y: "Color blind (hemizygous)"
                            }
                        },
                        prevalence: "~8% of males, ~0.5% of females (much rarer in females)"
                    },
                    
                    cross_carrierFemale_x_normalMale: {
                        parents: "X^C X^c (carrier) × X^C Y (normal male)",
                        punnettSquare: [
                            ["", "X^C", "Y"],
                            ["X^C", "X^C X^C", "X^C Y"],
                            ["X^c", "X^C X^c", "X^c Y"]
                        ],
                        offspring: {
                            females: "50% normal (X^C X^C), 50% carrier (X^C X^c)",
                            males: "50% normal (X^C Y), 50% affected (X^c Y)"
                        },
                        phenotypicRatio: "1 normal female : 1 carrier female : 1 normal male : 1 affected male"
                    },
                    
                    cross_affectedMale_x_normalFemale: {
                        parents: "X^c Y (affected male) × X^C X^C (normal female)",
                        offspring: {
                            females: "100% carrier (X^C X^c)",
                            males: "100% normal (X^C Y)"
                        },
                        note: "No affected offspring, but all daughters are carriers"
                    },
                    
                    cross_carrierFemale_x_affectedMale: {
                        parents: "X^C X^c (carrier) × X^c Y (affected)",
                        offspring: {
                            females: "50% carrier, 50% affected",
                            males: "50% normal, 50% affected"
                        }
                    },
                    
                    humanExamples: [
                        {
                            disorder: "Hemophilia A",
                            gene: "Factor VIII clotting protein",
                            allele: "X^H (normal), X^h (hemophilia)",
                            symptoms: "Blood doesn't clot properly",
                            prevalence: "1 in 5,000 males"
                        },
                        {
                            disorder: "Duchenne Muscular Dystrophy (DMD)",
                            gene: "Dystrophin protein",
                            symptoms: "Progressive muscle weakness",
                            prevalence: "1 in 3,500 males",
                            note: "Females usually asymptomatic carriers"
                        },
                        {
                            disorder: "Red-green color blindness",
                            prevalence: "8% males, 0.5% females",
                            note: "Most common X-linked trait"
                        }
                    ]
                },
                
                X_linkedDominant: {
                    characteristics: [
                        "Affects females more than males (females have 2 X chromosomes)",
                        "Affected males pass trait to ALL daughters, NO sons",
                        "Affected females pass to 50% of children (both sexes)",
                        "NO male-to-male transmission",
                        "Often lethal in males (seen only in females)"
                    ],
                    
                    examples: [
                        {
                            disorder: "Hypophosphatemia (Vitamin D-resistant rickets)",
                            symptoms: "Bone deformities, low phosphate",
                            inheritance: "Affected father → all daughters affected"
                        },
                        {
                            disorder: "Rett Syndrome",
                            symptoms: "Neurological disorder",
                            note: "Lethal in males; only seen in females"
                        }
                    ]
                },
                
                Y_linked: {
                    characteristics: [
                        "Only in males (only males have Y)",
                        "Passed from father to ALL sons",
                        "NO female carriers or affected",
                        "Very rare (Y chromosome has few genes)"
                    ],
                    examples: [
                        {
                            trait: "SRY gene (sex-determining region)",
                            function: "Triggers male development"
                        },
                        {
                            trait: "Hairy ears (hypertrichosis)",
                            note: "Controversial, may not be Y-linked"
                        }
                    ]
                },
                
                crissCrossPattern: {
                    description: "X-linked recessive trait shows diagonal inheritance pattern",
                    pattern: [
                        "Generation 1: Affected grandfather (X^c Y)",
                        "Generation 2: Carrier daughter (X^C X^c) - does not express",
                        "Generation 3: Affected grandson (X^c Y)",
                        "Pattern: Skips generation, affects males, transmitted through carrier females"
                    ]
                },
                
                pedigreePatterns: {
                    X_linkedRecessive: [
                        "More affected males than females",
                        "Affected males often have unaffected parents",
                        "Trait passes from carrier mother to son",
                        "No male-to-male transmission",
                        "Affected females rare (need affected father + carrier mother)"
                    ],
                    X_linkedDominant: [
                        "More affected females",
                        "Affected males pass to all daughters",
                        "Affected females pass to 50% children",
                        "No male-to-male transmission"
                    ],
                    Y_linked: [
                        "Only males affected",
                        "Father passes to all sons",
                        "Vertical pattern (every generation)",
                        "No female involvement"
                    ]
                },
                
                dosageCompensation: {
                    problem: "Females have two X chromosomes, males have one",
                    solution: "X-inactivation (Lyonization)",
                    mechanism: "One X chromosome randomly inactivated in each female cell early in development",
                    consequence: "Mosaic pattern in heterozygous females (some cells express one allele, some the other)",
                    example: "Calico cats - patches of orange and black fur (X-linked coat color gene)"
                },
                
                calculations: {
                    probabilityAffectedSon: {
                        from_carrier_mother_normal_father: "X^C X^c × X^C Y → P(X^c Y son) = 1/4 (25%)",
                        explanation: "50% chance of being male × 50% chance of inheriting X^c"
                    },
                    probabilityCarrierDaughter: {
                        from_affected_father_normal_mother: "X^c Y × X^C X^C → P(carrier daughter) = 100%",
                        explanation: "All daughters get X^c from father, X^C from mother"
                    }
                },
                
                applications: [
                    "Genetic counseling for X-linked disorders",
                    "Carrier detection (genetic testing)",
                    "Pedigree analysis to determine inheritance pattern",
                    "Understanding sex differences in disease prevalence",
                    "Gene therapy research for X-linked diseases"
                ]
            }
        };
    }

    initializeGeneticsExperiments() {
        this.geneticsExperiments = {
            // ========================================
            // EXPERIMENT 1: MENDEL'S MONOHYBRID CROSS
            // ========================================
            
            mendel_monohybrid_peas: {
                name: "Mendel's Monohybrid Cross: The Foundation of Genetics",
                relatedTopics: ['mendels_laws', 'monohybrid_crosses'],
                category: 'classical_genetics',
                
                historicalBackground: {
                    scientist: "Gregor Johann Mendel",
                    lifespan: "1822-1884",
                    location: "Augustinian monastery, Brno (now Czech Republic)",
                    period: "1856-1863 (8 years of experiments)",
                    publication: "1866 - 'Experiments on Plant Hybridization'",
                    recognition: "Work ignored until 1900, rediscovered by Hugo de Vries, Carl Correns, Erich von Tschermak",
                    significance: "Established laws of inheritance, founded science of genetics, introduced mathematical/statistical approach to biology",
                    context: "Contradicted prevailing 'blending inheritance' theory; showed inheritance is particulate (discrete units)",
                    quote: "My scientific studies have afforded me great gratification; and I am convinced that it will not be long before the whole world acknowledges the results of my work.",
                    nobelEquivalent: "Would have won Nobel if alive (Nobel Prize started 1901)",
                    
                    mendelBackground: {
                        education: "Studied physics, mathematics, and natural sciences at University of Vienna",
                        training: "Studied statistics under Franz Unger, physics under Christian Doppler",
                        approach: "Applied mathematical analysis to biological inheritance - revolutionary",
                        failures: "Failed university teaching exams twice, became monk",
                        choice: "Chose pea plants after failed experiments with mice and honeybees"
                    },
                    
                    whyRevolutionary: [
                        "First to use large sample sizes (>28,000 plants)",
                        "First to apply statistical analysis to biology",
                        "First to propose particulate (not blending) inheritance",
                        "First to distinguish genotype from phenotype (though didn't use those terms)",
                        "First to propose laws of inheritance that could make predictions"
                    ],
                    
                    rediscovery1900: {
                        deVries: "Dutch botanist, rediscovered while studying evening primrose",
                        Correns: "German botanist, verified with peas and maize",
                        vonTschermak: "Austrian botanist, experiments with peas",
                        outcome: "All three independently confirmed Mendel's work",
                        recognition: "Mendel finally recognized as father of genetics (16 years after death)"
                    }
                },
                
                labExperiment: {
                    title: "Monohybrid Cross: Tall vs Short Pea Plants",
                    
                    hypothesis: "If inheritance is particulate (Mendel's hypothesis), then crossing true-breeding tall and short pea plants will produce all tall F1, and F2 will show 3:1 tall:short ratio, NOT blending inheritance",
                    
                    purpose: "Demonstrate Mendel's Law of Segregation and Law of Dominance using plant height in peas",
                    
                    background: {
                        blendingTheory: "Prevailing theory: traits blend like mixing paint (tall + short = medium)",
                        mendelProposal: "Traits controlled by discrete 'factors' (genes) that don't blend",
                        prediction: "If Mendel correct: F1 all tall, F2 shows 3:1 ratio, NOT medium height"
                    },
                    
                    whyPeaPlants: {
                        advantages: [
                            "Short generation time (~3 months seed to seed)",
                            "Produce many offspring (large sample size)",
                            "Easy to grow and maintain in monastery garden",
                            "Normally self-pollinating (easy to get true-breeding lines)",
                            "Can be manually cross-pollinated (remove anthers, apply pollen)",
                            "Seven traits with clear, distinct phenotypes (no intermediates)",
                            "True-breeding varieties available from seed suppliers"
                        ],
                        mendelInsight: "Mendel tested ~34 varieties over 2 years before selecting seven traits"
                    },
                    
                    sevenTraitsStudied: [
                        {number: 1, trait: "Plant height", dominant: "Tall (6-7 ft)", recessive: "Short (9-18 in)", symbol: "T/t"},
                        {number: 2, trait: "Seed shape", dominant: "Round", recessive: "Wrinkled", symbol: "R/r"},
                        {number: 3, trait: "Seed color", dominant: "Yellow", recessive: "Green", symbol: "Y/y"},
                        {number: 4, trait: "Pod shape", dominant: "Inflated", recessive: "Constricted", symbol: "I/i"},
                        {number: 5, trait: "Pod color", dominant: "Green", recessive: "Yellow", symbol: "G/g"},
                        {number: 6, trait: "Flower position", dominant: "Axial", recessive: "Terminal", symbol: "A/a"},
                        {number: 7, trait: "Flower color", dominant: "Purple", recessive: "White", symbol: "P/p"}
                    ],
                    
                    variables: {
                        independent: "Parent genotypes (TT vs tt)",
                        dependent: "Offspring phenotype (tall vs short) and ratios",
                        controlled: [
                            "Environmental conditions (light, water, soil)",
                            "Pollination method (manual cross-pollination)",
                            "Sample size (large numbers)",
                            "Trait examined (focus on single trait at a time)"
                        ]
                    },
                    
                    materials: [
                        "True-breeding tall pea plants (TT) - verified over multiple generations",
                        "True-breeding short pea plants (tt) - verified over multiple generations",
                        "Garden plot or large pots with good soil",
                        "Labels and markers",
                        "Tweezers or forceps (for removing anthers)",
                        "Small paintbrush or cotton swab (for transferring pollen)",
                        "Paper bags or mesh covers (prevent unwanted pollination)",
                        "Ruler or measuring tape",
                        "Notebook for recording data",
                        "Calculator for ratio analysis"
                    ],
                    
                    procedure: {
                        yearMinusOne_TrueBreedingVerification: [
                            "Obtain tall and short pea plant seeds from reliable source",
                            "Plant and grow to maturity",
                            "Allow self-pollination (peas naturally self-pollinate)",
                            "Collect seeds and plant F1",
                            "Verify true-breeding: tall × tall → all tall; short × short → all short",
                            "If NOT true-breeding, discard and obtain new stock",
                            "Repeat until confirmed true-breeding for at least 2 generations"
                        ],
                        
                        yearOne_P_generation_cross: [
                            "Select healthy true-breeding tall (TT) and short (tt) plants",
                            "Before flowers open, remove anthers from tall plant flowers (emasculation)",
                            "This prevents self-pollination and ensures cross-pollination",
                            "Cover emasculated flowers with small bag to prevent contamination",
                            "When short plant flowers mature, collect pollen",
                            "Transfer pollen to stigma of emasculated tall flowers using brush",
                            "Alternative: Can also do reciprocal cross (remove anthers from short, pollinate with tall)",
                            "Re-cover pollinated flowers",
                            "Label: P cross: TT × tt, date",
                            "Allow seeds to develop",
                            "Harvest seeds (these are F1 seeds)"
                        ],
                        
                        yearTwo_F1_generation: [
                            "Plant F1 seeds from P cross",
                            "Grow to maturity",
                            "Measure and record height of ALL F1 plants",
                            "Observation: Count how many are tall vs short",
                            "Expected result: ALL should be tall (100%)",
                            "This demonstrates Law of Dominance",
                            "Allow F1 plants to self-pollinate naturally (peas self-pollinate)",
                            "Or manually cross F1 × F1 for more control",
                            "Harvest F2 seeds"
                        ],
                        
                        yearThree_F2_generation: [
                            "Plant ALL F2 seeds (large sample size crucial)",
                            "Grow to maturity",
                            "Carefully measure and record height of EVERY plant",
                            "Classify as tall or short",
                            "Count totals",
                            "Calculate ratio: (number tall) : (number short)",
                            "Expected: Approximately 3:1 ratio"
                        ],
                        
                        dataCollection: [
                            "Record exact numbers, not just ratios",
                            "Measure heights precisely",
                            "Note any ambiguous plants (if any)",
                            "Photograph plants for documentation",
                            "Repeat with large sample size (Mendel used thousands)"
                        ]
                    },
                    
                    mendelsActualResults: {
                        P_cross: {
                            parents: "787 tall × 277 short plants (true-breeding)",
                            F1: "All 1,064 plants tall (100%)",
                            conclusion: "Tall is dominant over short"
                        },
                        F1_cross: {
                            parents: "F1 tall plants self-pollinated",
                            F2_tall: "787 plants",
                            F2_short: "277 plants",
                            F2_total: "1,064 plants",
                            ratio: "787:277 = 2.84:1 ≈ 3:1",
                            expected: "3:1 (75% tall, 25% short)",
                            chisquare: "Excellent fit to 3:1 hypothesis"
                        },
                        statisticalSignificance: "Mendel's ratios remarkably close to predicted (some suspect data too good to be true, possibly rounded)"
                    },
                    
                    expectedResults: {
                        P_generation: {
                            cross: "TT (tall) × tt (short)",
                            gametes: "All T from TT parent, all t from tt parent",
                            F1_genotype: "100% Tt",
                            F1_phenotype: "100% tall (shows dominance of T allele)"
                        },
                        
                        F1_selfCross: {
                            cross: "Tt × Tt",
                            gametes: "Each parent produces T and t in equal proportions (Law of Segregation)",
                            punnettSquare: [
                                ["", "T (50%)", "t (50%)"],
                                ["T (50%)", "TT (25%)", "Tt (25%)"],
                                ["t (50%)", "Tt (25%)", "tt (25%)"]
                            ],
                            F2_genotypicRatio: "1 TT : 2 Tt : 1 tt",
                            F2_phenotypicRatio: "3 tall : 1 short",
                            percentages: "75% tall (TT + Tt), 25% short (tt)"
                        },
                        
                        if100Plants: {
                            expected_tall: "75 plants",
                            expected_short: "25 plants",
                            note: "Actual results will vary slightly due to chance (statistical sampling)"
                        }
                    },
                    
                    observations: [
                        "ALL F1 plants tall - NO medium height plants (rejects blending)",
                        "F2 shows both tall AND short plants - short reappears!",
                        "F2 ratio approximately 3:1 (tall:short)",
                        "Short trait was hidden in F1 but reappeared in F2 - NOT lost",
                        "Larger sample size gives closer approximation to 3:1"
                    ],
                    
                    analysis: {
                        lawOfDominance: "Tall (T) is dominant; masks short (t) in heterozygote (Tt)",
                        lawOfSegregation: "Alleles separate during gamete formation; each gamete gets one allele",
                        particulate: "Traits controlled by discrete factors (genes) that don't blend",
                        mathematical: "Ratios predictable through probability (Mendel's innovation)",
                        
                        whyNotBlending: [
                            "If blending: F1 would be medium height (tall + short blend)",
                            "If blending: F2 would also be medium height",
                            "Actual results: F1 all tall, F2 shows 3:1 ratio",
                            "Conclusion: Inheritance is particulate, NOT blending"
                        ],
                        
                        genotypicVsPhenotypic: {
                            genotypic: "1 TT : 2 Tt : 1 tt (3 types)",
                            phenotypic: "3 tall : 1 short (2 types)",
                            note: "Phenotype doesn't reveal genotype for tall plants (could be TT or Tt)"
                        }
                    },
                    
                    molecularExplanation: {
                        geneLevel: "T allele codes for enzyme promoting stem elongation",
                        dominance: "One functional T allele sufficient for tall phenotype",
                        recessive: "tt plants lack functional enzyme → short",
                        heterozygote: "Tt has one functional copy → produces enough enzyme → tall"
                    },
                    
                    testCrossVerification: {
                        purpose: "Distinguish TT from Tt (both tall)",
                        method: "Cross unknown tall plant with short (tt)",
                        ifTT: "TT × tt → all Tt (100% tall offspring)",
                        ifTt: "Tt × tt → 1 Tt : 1 tt (50% tall, 50% short)",
                        mendelDidThis: "Verified F2 tall plants were 1/3 TT and 2/3 Tt"
                    },
                    
                    statisticalAnalysis: {
                        chiSquare: "Use χ² test to determine if observed ratios fit expected 3:1",
                        hypothesis: "Observed data fits 3:1 ratio",
                        calculation: "χ² = Σ[(observed - expected)² / expected]",
                        interpretation: "If χ² < critical value, accept hypothesis"
                    },
                    
                    conclusions: [
                        "Inheritance follows predictable mathematical patterns (3:1 ratio)",
                        "Traits controlled by discrete factors (genes/alleles) that don't blend",
                        "Law of Dominance: One allele can mask another",
                        "Law of Segregation: Allele pairs separate during gamete formation",
                        "Mendel's particulate theory explains inheritance better than blending",
                        "Recessive traits can be hidden but reappear in later generations"
                    ],
                    
                    extensions: {
                        F3_generation: "Grow F2 plants and self-pollinate to test predictions",
                        expected_F3: "F2 tt plants → all short; F2 TT → all tall; F2 Tt → 3:1 again",
                        dihybrid: "Repeat with two traits simultaneously (seed shape AND color)",
                        otherTraits: "Verify with other six traits Mendel studied"
                    },
                    
                    modernLabAlternatives: {
                        fastPlants: "Wisconsin Fast Plants (Brassica rapa) - 5 week generation time",
                        cornSeeds: "Corn/maize - visible seed traits (color, shape)",
                        fruitFlies: "Drosophila - 10 day generation, many mutants available",
                        simulation: "Computer simulations of genetic crosses"
                    },
                    
                    realWorldRelevance: {
                        agriculture: "Predicting crop traits, selective breeding",
                        medicine: "Understanding genetic disease inheritance",
                        evolution: "Genetic variation maintained in populations",
                        foundation: "Basis for all modern genetics, genomics, biotechnology"
                    },
                    
                    commonStudentErrors: [
                        "Thinking F1 should be medium height (blending misconception)",
                        "Forgetting to verify true-breeding before starting",
                        "Using small sample sizes (need large N for accurate ratios)",
                        "Confusing genotype with phenotype",
                        "Not recognizing that 'tall' can be TT or Tt"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 2: DIHYBRID CROSS - INDEPENDENT ASSORTMENT
            // ========================================
            
            mendel_dihybrid_independent_assortment: {
                name: "Mendel's Dihybrid Cross: Law of Independent Assortment",
                relatedTopics: ['mendels_laws', 'dihybrid_crosses'],
                category: 'classical_genetics',
                
                historicalBackground: {
                    scientist: "Gregor Mendel",
                    discovery: "Law of Independent Assortment (Mendel's Second Law)",
                    year: "1860s (published 1866)",
                    significance: "Demonstrated that inheritance of one trait is independent of another, genes assort independently during gamete formation",
                    context: "After establishing monohybrid patterns, Mendel examined two traits simultaneously to test if they influenced each other",
                    revolutionaryAspect: "Showed genes act independently (we now know this applies to genes on different chromosomes or far apart on same chromosome)",
                    quote: "It requires indeed some courage to undertake a labour of such far-reaching extent",
                    
                    mendelApproach: {
                        systematic: "Tested all seven traits in various combinations",
                        mathematical: "Predicted 9:3:3:1 ratio from probability theory",
                        verification: "Counted thousands of plants to verify ratio",
                        innovation: "First to apply multifactorial analysis to inheritance"
                    },
                    
                    historicalImpact: {
                        1866: "Published but ignored",
                        1900: "Rediscovered, verified by multiple scientists",
                        1902: "Chromosome theory proposed - provided physical basis for Mendel's laws",
                        1910s: "Morgan discovered linked genes (exception to independent assortment)",
                        legacy: "Foundation for understanding genetic recombination and chromosomal inheritance"
                    }
                },
                
                labExperiment: {
                    title: "Dihybrid Cross: Seed Shape and Color in Pea Plants",
                    
                    hypothesis: "If genes for different traits assort independently during gamete formation, then crossing plants differing in two traits will produce F2 offspring in a 9:3:3:1 phenotypic ratio, NOT parental types only",
                    
                    purpose: "Demonstrate Mendel's Law of Independent Assortment by tracking two traits simultaneously (seed shape and seed color)",
                    
                    background: {
                        question: "Do different traits inherit together or independently?",
                        alternatives: {
                            dependent: "If traits linked: only parental combinations would appear",
                            independent: "If independent: all four phenotypic combinations in 9:3:3:1 ratio"
                        },
                        prediction: "Mendel predicted independent assortment would give 9:3:3:1"
                    },
                    
                    traitsExamined: {
                        trait1_seedShape: {
                            gene: "Seed shape gene",
                            dominant: "R = Round",
                            recessive: "r = Wrinkled",
                            molecular: "R allele produces enzyme that converts sugar to starch; r is nonfunctional (high sugar → wrinkled when dried)"
                        },
                        trait2_seedColor: {
                            gene: "Seed color gene",
                            dominant: "Y = Yellow",
                            recessive: "y = Green",
                            molecular: "Y produces enzyme that degrades chlorophyll (yellow carotenoids visible); y is nonfunctional (chlorophyll remains → green)"
                        },
                        advantage: "Both traits visible in seeds (don't need to grow plants to score phenotype)"
                    },
                    
                    variables: {
                        independent: "Parental genotypes (RRYY × rryy)",
                        dependent: "F2 phenotypic ratios (9:3:3:1 expected)",
                        controlled: [
                            "True-breeding P generation",
                            "Cross-pollination technique",
                            "Environmental conditions",
                            "Seed development time"
                        ]
                    },
                    
                    materials: [
                        "True-breeding round yellow pea plants (RRYY)",
                        "True-breeding wrinkled green pea plants (rryy)",
                        "Garden space or large pots",
                        "Pollination tools (tweezers, brush, bags)",
                        "Labels and markers",
                        "Large trays for sorting seeds",
                        "Magnifying glass (for close examination)",
                        "Calculator",
                        "Chi-square statistical table"
                    ],
                    
                    procedure: {
                        yearZero_verification: [
                            "Verify true-breeding lines:",
                            "RRYY × RRYY → all round yellow (at least 2 generations)",
                            "rryy × rryy → all wrinkled green (at least 2 generations)",
                            "Confirm no variation in offspring"
                        ],
                        
                        yearOne_P_cross: [
                            "Select healthy true-breeding plants:",
                            "Parent 1: Round, yellow seeds (RRYY)",
                            "Parent 2: Wrinkled, green seeds (rryy)",
                            "Emasculate flowers of one parent (remove anthers before maturity)",
                            "Cross-pollinate: transfer pollen from other parent",
                            "Label: P cross RRYY × rryy, date",
                            "Cover to prevent contamination",
                            "Allow pods to develop",
                            "Harvest F1 seeds"
                        ],
                        
                        F1_observation: [
                            "Examine ALL F1 seeds (don't need to plant yet)",
                            "Record appearance of each seed:",
                            "  Shape: Round or Wrinkled?",
                            "  Color: Yellow or Green?",
                            "Expected: ALL should be round and yellow (RrYy)",
                            "This demonstrates dominance for both traits",
                            "Select representative F1 seeds to plant for F2 cross"
                        ],
                        
                        yearTwo_F1_cross: [
                            "Plant F1 seeds (RrYy)",
                            "Grow to maturity",
                            "Allow self-pollination OR manually cross F1 × F1",
                            "Harvest F2 seeds (MANY pods - need large sample)",
                            "Collect seeds from multiple F1 plants"
                        ],
                        
                        yearTwo_F2_analysis: [
                            "Harvest ALL F2 seeds (aim for >500 seeds minimum)",
                            "Sort seeds into four phenotypic categories:",
                            "  1. Round, Yellow",
                            "  2. Round, Green",
                            "  3. Wrinkled, Yellow",
                            "  4. Wrinkled, Green",
                            "Count each category carefully",
                            "Record exact numbers",
                            "Calculate ratios",
                            "Perform chi-square test"
                        ],
                        
                        dataCollection: [
                            "Use large sample size (Mendel used 556 seeds for this cross)",
                            "Double-count to avoid errors",
                            "Record all data in table",
                            "Calculate observed ratios",
                            "Compare to expected 9:3:3:1"
                        ]
                    },
                    
                    mendelsActualResults: {
                        P_cross: "RRYY (round, yellow) × rryy (wrinkled, green)",
                        F1: "All 556 F1 seeds: Round, Yellow (RrYy)",
                        
                        F2_data: {
                            roundYellow: "315 seeds",
                            roundGreen: "108 seeds",
                            wrinkledYellow: "101 seeds",
                            wrinkledGreen: "32 seeds",
                            total: "556 seeds"
                        },
                        
                        F2_ratio: "315:108:101:32 = 9.84:3.38:3.16:1 ≈ 9:3:3:1",
                        
                        expected_if_556: {
                            roundYellow: "556 × 9/16 = 312.75",
                            roundGreen: "556 × 3/16 = 104.25",
                            wrinkledYellow: "556 × 3/16 = 104.25",
                            wrinkledGreen: "556 × 1/16 = 34.75"
                        },
                        
                        fit: "Excellent agreement with 9:3:3:1 prediction",
                        conclusion: "Genes for shape and color assort independently"
                    },
                    
                    expectedResults: {
                        P_generation: {
                            cross: "RRYY × rryy",
                            gametes: {
                                RRYY_parent: "All gametes RY",
                                rryy_parent: "All gametes ry"
                            },
                            F1_genotype: "100% RrYy",
                            F1_phenotype: "100% round, yellow"
                        },
                        
                        F1_selfCross: {
                            cross: "RrYy × RrYy",
                            gametes_from_each_parent: "RY, Ry, rY, ry (each 25%)",
                            
                            punnettSquare_4x4: [
                                ["", "RY", "Ry", "rY", "ry"],
                                ["RY", "RRYY", "RRYy", "RrYY", "RrYy"],
                                ["Ry", "RRYy", "RRyy", "RrYy", "Rryy"],
                                ["rY", "RrYY", "RrYy", "rrYY", "rrYy"],
                                ["ry", "RrYy", "Rryy", "rrYy", "rryy"]
                            ],
                            
                            F2_phenotypes: {
                                roundYellow: "9/16 (R_Y_) - both dominant",
                                roundGreen: "3/16 (R_yy) - round only",
                                wrinkledYellow: "3/16 (rrY_) - yellow only",
                                wrinkledGreen: "1/16 (rryy) - both recessive"
                            },
                            
                            phenotypicRatio: "9:3:3:1",
                            
                            genotypicBreakdown: {
                                differentGenotypes: 9,
                                list: ["RRYY(1)", "RRYy(2)", "RRyy(1)", "RrYY(2)", "RrYy(4)", "Rryy(2)", "rrYY(1)", "rrYy(2)", "rryy(1)"]
                            }
                        }
                    },
                    
                    gameteFormation: {
                        lawOfSegregation: "R and r separate; Y and y separate",
                        lawOfIndependentAssortment: "R/r segregation independent of Y/y segregation",
                        result: "Four gamete types in equal proportions",
                        
                        exampleRrYy: {
                            possibleGametes: [
                                "RY (R with Y) - 25%",
                                "Ry (R with y) - 25%",
                                "rY (r with Y) - 25%",
                                "ry (r with y) - 25%"
                            ],
                            equalProbability: "Each combination equally likely because genes assort independently"
                        },
                        
                        formula: "Number of gamete types = 2^n, where n = number of heterozygous gene pairs",
                        forRrYy: "2^2 = 4 gamete types"
                    },
                    
                    probabilityCalculation: {
                        method: "Use product rule (multiply independent probabilities)",
                        
                        example_roundYellow: {
                            question: "Probability of round, yellow (R_Y_) from RrYy × RrYy?",
                            shapeAlone: "Rr × Rr → 3/4 round (R_)",
                            colorAlone: "Yy × Yy → 3/4 yellow (Y_)",
                            combined: "P(round AND yellow) = 3/4 × 3/4 = 9/16"
                        },
                        
                        example_wrinkledGreen: {
                            question: "Probability of wrinkled, green (rryy)?",
                            shape: "Rr × Rr → 1/4 wrinkled (rr)",
                            color: "Yy × Yy → 1/4 green (yy)",
                            combined: "P(wrinkled AND green) = 1/4 × 1/4 = 1/16"
                        },
                        
                        verification: "9/16 + 3/16 + 3/16 + 1/16 = 16/16 = 1 (all possibilities)"
                    },
                    
                    observations: [
                        "F1 all round and yellow - both traits show dominance",
                        "F2 shows FOUR phenotypic classes (not just two parental types)",
                        "New combinations appear: round green and wrinkled yellow (recombinant types)",
                        "Ratio very close to 9:3:3:1",
                        "Recombinant types prove genes assort independently"
                    ],
                    
                    analysis: {
                        independentAssortment: {
                            evidence: "All four phenotypic combinations appear in F2",
                            ratio: "9:3:3:1 matches prediction from independent segregation",
                            newCombinations: "Round-green and wrinkled-yellow are NEW (not in P generation)",
                            conclusion: "Genes for shape and color inherited independently"
                        },
                        
                        ifGenesLinked: {
                            prediction: "Would see only parental types (round-yellow and wrinkled-green)",
                            ratio: "Would be 3:0:0:1 or similar (no recombinants)",
                            actual: "See all four types → genes NOT linked"
                        },
                        
                        molecularBasis: {
                            modern_explanation: "Seed shape gene and seed color gene are on different chromosomes",
                            meiosis: "During meiosis I, chromosomes assort independently into gametes",
                            consequence: "Alleles of different genes segregate independently"
                        },
                        
                        derivationOf9331: {
                            method: "Combine two 3:1 ratios",
                            shape: "Rr × Rr → 3 round : 1 wrinkled",
                            color: "Yy × Yy → 3 yellow : 1 green",
                            product: "(3:1) × (3:1) = 9:3:3:1",
                            breakdown: "3×3=9, 3×1=3, 1×3=3, 1×1=1"
                        }
                    },
                    
                    statisticalAnalysis: {
                        chiSquareTest: {
                            purpose: "Determine if observed data fits expected 9:3:3:1 ratio",
                            nullHypothesis: "Observed ratios match 9:3:3:1 (independent assortment)",
                            
                            calculation: {
                                formula: "χ² = Σ[(Observed - Expected)² / Expected]",
                                degreesOfFreedom: "df = number of categories - 1 = 3",
                                criticalValue: "χ²(0.05, 3) = 7.815",
                                decision: "If calculated χ² < 7.815, accept hypothesis"
                            },
                            
                            exampleWithMendelsData: {
                                observed: [315, 108, 101, 32],
                                expected: [312.75, 104.25, 104.25, 34.75],
                                chiSquare: "χ² = 0.47 (very low, excellent fit)",
                                pValue: "p > 0.05 (accept independent assortment)"
                            }
                        }
                    },
                    
                    testCross_dihybrid: {
                        purpose: "Verify F1 genotype is RrYy",
                        cross: "RrYy × rryy (F1 × homozygous recessive)",
                        expected: "1 RrYy : 1 Rryy : 1 rrYy : 1 rryy (1:1:1:1 ratio)",
                        phenotypes: "1 round yellow : 1 round green : 1 wrinkled yellow : 1 wrinkled green",
                        interpretation: "Equal proportions of all four types confirms RrYy genotype"
                    },
                    
                    conclusions: [
                        "Genes for different traits assort independently during gamete formation (Law of Independent Assortment)",
                        "9:3:3:1 ratio characteristic of dihybrid cross with independent genes",
                        "New phenotypic combinations (recombinants) appear in F2 due to independent assortment",
                        "Each gene segregates independently, allowing prediction using product rule",
                        "Provides evidence for particulate inheritance and chromosomal basis of heredity"
                    ],
                    
                    extensions: {
                        F3_verification: "Self-pollinate F2 plants to verify predicted genotypes",
                        trihybrid: "Extend to three traits (expected ratio 27:9:9:9:3:3:3:1)",
                        otherCombinations: "Test other trait pairs Mendel studied",
                        linkedGenes: "Compare with traits that DON'T assort independently (linked genes)"
                    },
                    
                    modernConnections: {
                        chromosomeTheory: "Genes on different chromosomes assort independently during meiosis",
                        geneticMapping: "Deviations from 9:3:3:1 indicate linkage → used to map genes",
                        breeding: "Independent assortment allows creation of new trait combinations in crops/livestock",
                        genomics: "Principle applies to genome-wide trait analysis"
                    },
                    
                    realWorldApplications: [
                        "Plant breeding: Combine desirable traits from different parents",
                        "Animal husbandry: Predict offspring phenotypes",
                        "Genetic counseling: Calculate risks for multiple traits",
                        "Agriculture: Create new varieties with multiple improved traits",
                        "Evolution: Source of genetic variation in populations"
                    ],
                    
                    commonMistakes: [
                        "Forgetting that each parent produces four gamete types",
                        "Not using 4×4 Punnett square (need 16 boxes)",
                        "Miscounting phenotypes (carefully distinguish round vs wrinkled)",
                        "Expecting only parental types (forgetting recombinants)",
                        "Confusing 9:3:3:1 with other ratios (e.g., 3:1)"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 3: INCOMPLETE DOMINANCE - FLOWER COLOR
            // ========================================
            
            incomplete_dominance_snapdragons: {
                name: "Incomplete Dominance in Snapdragons: Non-Mendelian Inheritance",
                relatedTopics: ['incomplete_dominance', 'non_mendelian'],
                category: 'genetic_variation',
                
                historicalBackground: {
                    scientist: "Carl Correns",
                    year: "1900",
                    contribution: "One of three scientists who rediscovered Mendel's work; discovered incomplete dominance in snapdragons",
                    significance: "Showed that not all traits follow simple Mendelian dominance - some show intermediate phenotypes",
                    context: "Shortly after rediscovering Mendel, Correns found this exception to Mendel's Law of Dominance",
                    
                    corrensBackground: {
                        nationality: "German botanist",
                        work: "Studied plant hybridization, especially Mirabilis (four o'clocks) and Antirrhinum (snapdragons)",
                        discovery: "Simultaneously with de Vries and von Tschermak, rediscovered Mendel's laws (1900)",
                        incompleteDominance: "Recognized that pink flowers were NOT blending inheritance, but intermediate expression of discrete alleles"
                    },
                    
                    importanceToGenetics: {
                        challenge: "Showed Mendel's Law of Dominance is not universal",
                        refinement: "Led to understanding of gene expression levels and protein dosage",
                        expansion: "Broadened genetic theory beyond simple dominant/recessive dichotomy",
                        modern: "Foundation for understanding gene dosage effects, haploinsufficiency, and quantitative traits"
                    },
                    
                    distinctionFromBlending: {
                        blendingTheory: "Historical (wrong) idea that hereditary material permanently mixes",
                        incompleteDominance: "Alleles remain discrete; intermediate phenotype due to expression level, NOT mixing",
                        evidence: "F2 shows reappearance of parental phenotypes (red and white) - proves alleles didn't blend",
                        quote_Correns: "The factors do not blend, they remain distinct even when the character they produce appears intermediate"
                    }
                },
                
                labExperiment: {
                    title: "Incomplete Dominance: Flower Color in Snapdragons (Antirrhinum majus)",
                    
                    hypothesis: "If flower color in snapdragons shows incomplete dominance, then crossing true-breeding red and white flowers will produce all pink F1 (intermediate), and F2 will show 1:2:1 ratio (red:pink:white), NOT 3:1 ratio",
                    
                    purpose: "Demonstrate incomplete dominance as an alternative to complete dominance, showing that heterozygotes can display intermediate phenotypes",
                    
                    background: {
                        mendelianExpectation: "If red is dominant: Red × White → all red F1, 3:1 F2",
                        blendingExpectation: "Red × White → all pink F1, all pink F2 (permanent blend)",
                        actualResult: "All pink F1, 1 red : 2 pink : 1 white F2 → incomplete dominance"
                    },
                    
                    organism: {
                        species: "Antirrhinum majus (snapdragon)",
                        advantages: [
                            "Clear, easily distinguished flower colors",
                            "Easy to cross-pollinate",
                            "Relatively short generation time (~4 months)",
                            "Produces many seeds",
                            "Dramatic demonstration of intermediate phenotype"
                        ],
                        trait: "Flower color (petal pigmentation)"
                    },
                    
                    geneticBasis: {
                        gene: "Pigment production gene (often called C gene)",
                        alleles: {
                            C_R: "Allele for red pigment (produces full pigment)",
                            C_W: "Allele for white (produces no pigment)"
                        },
                        alternativeNotation: "R and r, or C^R and C^W (to avoid confusion with dominant/recessive)",
                        
                        genotypes_and_phenotypes: {
                            C_R_C_R: "Red flowers (full pigment production)",
                            C_R_C_W: "Pink flowers (half pigment production) - INTERMEDIATE",
                            C_W_C_W: "White flowers (no pigment)"
                        },
                        
                        molecularMechanism: {
                            C_R: "Functional enzyme that produces red pigment",
                            C_W: "Nonfunctional enzyme (mutation, no pigment produced)",
                            heterozygote: "C^R C^W has only ONE functional copy → produces ~50% pigment → pink",
                            dosageEffect: "Phenotype depends on amount of enzyme/pigment (gene dosage effect)"
                        }
                    },
                    
                    variables: {
                        independent: "Parental genotypes (C^R C^R vs C^W C^W)",
                        dependent: "Offspring flower color (red, pink, or white) and ratios",
                        controlled: [
                            "Environmental conditions (light, temperature, nutrients)",
                            "True-breeding status of parents",
                            "Pollination method",
                            "Growing conditions for F1 and F2"
                        ]
                    },
                    
                    materials: [
                        "True-breeding red snapdragon plants (C^R C^R)",
                        "True-breeding white snapdragon plants (C^W C^W)",
                        "Garden space or large pots",
                        "Pollination tools (tweezers, small brush, bags)",
                        "Labels and markers",
                        "Camera (for documentation)",
                        "Notebook for data recording"
                    ],
                    
                    procedure: {
                        verification_trueBreeding: [
                            "Year -1: Verify true-breeding lines",
                            "Red plants: Self-pollinate, verify all offspring red (C^R C^R × C^R C^R → all red)",
                            "White plants: Self-pollinate, verify all offspring white (C^W C^W × C^W C^W → all white)",
                            "Discard any plants that produce off-color offspring",
                            "Maintain pure lines for at least 2 generations"
                        ],
                        
                        P_generation_cross: [
                            "Year 1: Perform P cross",
                            "Select healthy true-breeding red and white plants",
                            "Emasculate flowers of one parent (remove anthers before pollen matures)",
                            "Cross-pollinate: Apply pollen from other parent to stigma",
                            "Cover flowers with bags to prevent contamination",
                            "Label: P cross C^R C^R (red) × C^W C^W (white), date",
                            "Can also do reciprocal cross (white × red) to show no maternal effect",
                            "Allow seeds to develop",
                            "Harvest F1 seeds"
                        ],
                        
                        F1_generation: [
                            "Year 2: Grow F1 plants",
                            "Plant F1 seeds",
                            "Grow to flowering stage",
                            "Observe flower color of ALL F1 plants",
                            "Record observations:",
                            "  - ALL should be PINK (intermediate color)",
                            "  - No red or white flowers",
                            "Photograph for documentation",
                            "Compare pink intensity to parents",
                            "This demonstrates incomplete dominance",
                            "Allow F1 plants to self-pollinate OR cross F1 × F1",
                            "Harvest F2 seeds"
                        ],
                        
                        F2_generation: [
                            "Year 3: Grow F2 plants",
                            "Plant ALL F2 seeds (large sample size)",
                            "Grow to flowering",
                            "Carefully record flower color of EVERY plant:",
                            "  - RED (like original red parent)",
                            "  - PINK (like F1)",
                            "  - WHITE (like original white parent)",
                            "Count each category",
                            "Calculate ratios",
                            "Expected: 1 red : 2 pink : 1 white"
                        ],
                        
                        dataCollection: [
                            "Record exact counts, not just ratios",
                            "Photograph representative flowers of each color",
                            "Note: Pink should be clearly intermediate (not light red or light purple)",
                            "Use large sample size (>100 F2 plants if possible)",
                            "Perform chi-square test on F2 data"
                        ]
                    },
                    
                    expectedResults: {
                        P_cross: {
                            parents: "C^R C^R (red) × C^W C^W (white)",
                            gametes: {
                                red_parent: "All C^R",
                                white_parent: "All C^W"
                            },
                            F1_genotype: "100% C^R C^W",
                            F1_phenotype: "100% PINK (intermediate - NOT red, NOT white)"
                        },
                        
                        F1_selfCross: {
                            cross: "C^R C^W (pink) × C^R C^W (pink)",
                            gametes: "Each parent produces C^R and C^W in equal proportions",
                            
                            punnettSquare: [
                                ["", "C^R (50%)", "C^W (50%)"],
                                ["C^R (50%)", "C^R C^R (25%)", "C^R C^W (25%)"],
                                ["C^W (50%)", "C^R C^W (25%)", "C^W C^W (25%)"]
                            ],
                            
                            F2_genotypic: "1 C^R C^R : 2 C^R C^W : 1 C^W C^W",
                            F2_phenotypic: "1 red : 2 pink : 1 white",
                            
                            ratio: "1:2:1 (different from Mendelian 3:1!)",
                            
                            note: "Phenotypic ratio EQUALS genotypic ratio (can determine genotype from phenotype)"
                        },
                        
                        if100Plants: {
                            expected_red: "25 plants (25%)",
                            expected_pink: "50 plants (50%)",
                            expected_white: "25 plants (25%)"
                        }
                    },
                    
                    observations: [
                        "F1: ALL plants have pink flowers (not red, not white, not purple - truly intermediate)",
                        "Pink color intensity intermediate between red and white parents",
                        "F2: Three distinct phenotypes appear (red, pink, white)",
                        "Red and white reappear in F2 (proves alleles didn't blend permanently)",
                        "F2 ratio approximately 1:2:1 (red:pink:white), NOT 3:1",
                        "Most F2 plants (50%) are pink, like F1",
                        "Pink heterozygotes can be distinguished from red and white homozygotes"
                    ],
                    
                    analysis: {
                        incompleteDominance: {
                            definition: "Neither allele is completely dominant; heterozygote shows intermediate phenotype",
                            mechanism: "One functional allele (C^R) produces ~50% of normal pigment → pink color",
                            contrast_completeDominance: "If complete dominance: C^R C^W would be red (like C^R C^R)",
                            actual: "C^R C^W is PINK (intermediate)"
                        },
                        
                        NOT_blending: {
                            evidence: "Red and white reappear in F2 generation",
                            interpretation: "Alleles remain discrete and separate (particulate inheritance)",
                            if_blending: "Would NOT see red or white in F2, only pink",
                            conclusion: "Incomplete dominance ≠ blending inheritance"
                        },
                        
                        phenotype_equals_genotype: {
                            red: "Must be C^R C^R (homozygous)",
                            pink: "Must be C^R C^W (heterozygous)",
                            white: "Must be C^W C^W (homozygous)",
                            advantage: "Can determine genotype by observing phenotype"
                        },
                        
                        ratioComparison: {
                            mendelian_3_to_1: "Expected if complete dominance (3 dominant : 1 recessive)",
                            incompleteDominance_1_2_1: "Observed (1 red : 2 pink : 1 white)",
                            reason: "Three distinguishable phenotypes instead of two"
                        },
                        
                        molecularLevel: {
                            C_R_C_R: "Two functional alleles → 100% pigment → red",
                            C_R_C_W: "One functional allele → ~50% pigment → pink",
                            C_W_C_W: "Zero functional alleles → 0% pigment → white",
                            dosageEffect: "Phenotype proportional to number of functional alleles"
                        }
                    },
                    
                    testCross: {
                        purpose: "Verify pink plants are heterozygous (C^R C^W)",
                        cross: "Pink × White (C^R C^W × C^W C^W)",
                        expected: "1 C^R C^W (pink) : 1 C^W C^W (white)",
                        ratio: "1:1 (50% pink, 50% white, NO red)",
                        interpretation: "Confirms pink parent is heterozygous"
                    },
                    
                    comparisonToMendelian: {
                        similarities: [
                            "Alleles are discrete particles (not blending)",
                            "Alleles segregate during gamete formation (Law of Segregation still applies)",
                            "Predictable ratios based on probability",
                            "F2 shows 1:2:1 genotypic ratio (same as Mendelian)"
                        ],
                        differences: [
                            "Phenotypic ratio is 1:2:1 (not 3:1)",
                            "Three phenotypes instead of two",
                            "Heterozygote distinguishable from homozygous dominant",
                            "No 'dominant' or 'recessive' allele (both contribute)"
                        ]
                    },
                    
                    otherExamplesOfIncompleteDominance: [
                        {
                            organism: "Four o'clock plants (Mirabilis jalapa)",
                            trait: "Flower color",
                            inheritance: "Red × White → Pink F1, 1:2:1 F2",
                            discoverer: "Also studied by Carl Correns"
                        },
                        {
                            organism: "Andalusian chickens",
                            trait: "Feather color",
                            genotypes: "BB (black), Bb (blue/gray), bb (white)",
                            note: "'Blue' is actually black and white feathers mixed"
                        },
                        {
                            organism: "Humans",
                            trait: "Familial hypercholesterolemia",
                            genotypes: "HH (normal), Hh (moderately high), hh (very high cholesterol)",
                            medical: "Heterozygotes have intermediate cholesterol levels"
                        },
                        {
                            organism: "Humans",
                            trait: "Wavy hair (sometimes)",
                            genotypes: "HH (straight), Hh (wavy), hh (curly)",
                            note: "Genetics of hair texture is complex, but this is simplified model"
                        }
                    ],
                    
                    statisticalAnalysis: {
                        chiSquare: {
                            hypothesis: "F2 data fits 1:2:1 ratio",
                            expected_proportions: "1/4 red, 1/2 pink, 1/4 white",
                            example_with_100_plants: {
                                observed: "23 red, 52 pink, 25 white",
                                expected: "25 red, 50 pink, 25 white",
                                chiSquare: "χ² = [(23-25)²/25] + [(52-50)²/50] + [(25-25)²/25] = 0.24",
                                df: 2,
                                criticalValue: "5.99 (at p=0.05)",
                                conclusion: "0.24 < 5.99, accept 1:2:1 hypothesis"
                            }
                        }
                    },
                    
                    conclusions: [
                        "Snapdragons show incomplete dominance for flower color",
                        "Heterozygotes (C^R C^W) have intermediate (pink) phenotype",
                        "F1 × F1 produces 1:2:1 phenotypic ratio (not 3:1)",
                        "Alleles remain discrete (not blending) - red and white reappear in F2",
                        "Incomplete dominance is an exception to Mendel's Law of Dominance",
                        "Phenotype reflects gene dosage (number of functional alleles)",
                        "Demonstrates that dominance is not universal property of alleles"
                    ],
                    
                    extensions: {
                        F3_testing: "Self-pollinate F2 plants to verify genotypes",
                        expected_F3: {
                            from_red_F2: "C^R C^R × C^R C^R → all red",
                            from_pink_F2: "C^R C^W × C^R C^W → 1:2:1 again",
                            from_white_F2: "C^W C^W × C^W C^W → all white"
                        },
                        reciprocal_crosses: "Test if flower color inheritance shows maternal effects (it doesn't)",
                        dihybrid_with_incomplete: "Combine incomplete dominance trait with another trait"
                    },
                    
                    realWorldApplications: [
                        "Breeding ornamental flowers for color variety",
                        "Understanding gene dosage in medical genetics",
                        "Predicting phenotypes in breeding programs",
                        "Genetic counseling for traits showing incomplete dominance",
                        "Research on gene expression and protein function"
                    ],
                    
                    commonMistakes: [
                        "Thinking pink is 'blending' (it's not - alleles stay separate)",
                        "Expecting 3:1 ratio in F2 (should be 1:2:1)",
                        "Calling C^R 'dominant' (neither allele is dominant in incomplete dominance)",
                        "Confusing incomplete dominance with codominance (both alleles expressed vs intermediate)"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 4: SEX-LINKED INHERITANCE - DROSOPHILA
            // ========================================
            
            morgan_sexlinked_drosophila: {
                name: "Morgan's Sex-Linked Inheritance: White-Eyed Drosophila",
                relatedTopics: ['sex_linked', 'pedigree_analysis'],
                category: 'chromosomal_genetics',
                
                historicalBackground: {
                    scientist: "Thomas Hunt Morgan",
                    lifespan: "1866-1945",
                    location: "Columbia University, New York (the 'Fly Room')",
                    discovery: "1910 - First sex-linked trait discovered (white eye in Drosophila)",
                    nobelPrize: "1933 Nobel Prize in Physiology or Medicine",
                    significance: "Provided chromosomal basis for Mendelian inheritance, established Drosophila as model organism, proved genes are on chromosomes",
                    
                    morgansBackground: {
                        skeptic: "Initially skeptical of Mendelism and chromosome theory",
                        conversion: "White-eyed fly discovery convinced him genes are on chromosomes",
                        innovation: "Established first large-scale genetics laboratory",
                        flyRoom: "Small lab at Columbia where revolution in genetics occurred",
                        students: "Trained many future geneticists (Muller, Bridges, Sturtevant)"
                    },
                    
                    whiteyeDiscovery: {
                        year: "May 1910",
                        event: "Morgan found single white-eyed male fly among thousands of red-eyed flies",
                        recognition: "Immediately recognized as mutation",
                        breeding: "Crossed to red-eyed females, studied inheritance pattern",
                        pattern: "White eyes appeared only in males in F1 and F2",
                        conclusion: "Eye color gene must be on X chromosome",
                        quote: "We have made a discovery - a mutation has occurred in the Drosophila stock"
                    },
                    
                    chromosomeTheory: {
                        sutton_boveri: "Proposed chromosome theory (1902-1903) - genes on chromosomes",
                        evidence_needed: "Theory lacked direct proof",
                        morgansContribution: "Sex-linked inheritance provided first solid proof",
                        logic: "If gene on X chromosome, inheritance pattern would match sex chromosome segregation",
                        confirmation: "Observed pattern exactly matched X chromosome behavior",
                        impact: "United Mendelian genetics with cytology (chromosome studies)"
                    },
                    
                    revolutionaryAspects: [
                        "First gene mapped to specific chromosome (X)",
                        "Established physical basis for Mendel's 'factors'",
                        "Showed inheritance patterns differ for sex chromosomes vs autosomes",
                        "Laid foundation for genetic mapping",
                        "Established Drosophila as premier genetics model organism"
                    ],
                    
                    legacy: {
                        drosophila: "Became most important organism in genetics research (1910s-1980s)",
                        geneMapping: "Led to first genetic map (by student Alfred Sturtevant, 1913)",
                        mutationStudies: "Enabled study of hundreds of mutations",
                        modernGenomics: "Drosophila genome sequenced (2000), still major model organism"
                    }
                },
                
                labExperiment: {
                    title: "Sex-Linked Inheritance: White Eye Color in Drosophila melanogaster",
                    
                    hypothesis: "If the eye color gene is located on the X chromosome (sex-linked), then crossing white-eyed males with red-eyed females will produce different ratios in male vs female offspring, with white eyes appearing predominantly in males",
                    
                    purpose: "Demonstrate sex-linked inheritance pattern and provide evidence that genes are located on chromosomes",
                    
                    background: {
                        sexDetermination: "In Drosophila: XX = female, XY = male (like humans)",
                        wildType: "Red eyes (normal, wild-type phenotype)",
                        mutation: "White eyes (recessive mutation, discovered 1910)",
                        location: "Eye color gene on X chromosome (no corresponding gene on Y)",
                        prediction: "If X-linked, males need only one mutant allele to show white eyes (hemizygous)"
                    },
                    
                    organism: {
                        species: "Drosophila melanogaster (fruit fly)",
                        advantages: [
                            "Short generation time (10-14 days)",
                            "Produce many offspring (hundreds per female)",
                            "Easy and inexpensive to maintain",
                            "Small size (can keep thousands in lab)",
                            "Only 4 pairs of chromosomes (simple cytology)",
                            "Many visible mutations available",
                            "Well-characterized genetics and genome"
                        ],
                        disadvantages: [
                            "Requires stereomicroscope to see traits",
                            "Must anesthetize to examine",
                            "Distinguishing sexes requires practice"
                        ]
                    },
                    
                    geneticBasis: {
                        gene: "White (w) gene on X chromosome",
                        location: "X chromosome (locus 1.5 map units)",
                        alleles: {
                            w_plus: "w⁺ (wild-type, red eyes) - dominant",
                            w: "w (white eyes) - recessive"
                        },
                        notation: {
                            females: "X^(w+) X^(w+), X^(w+) X^w, X^w X^w",
                            males: "X^(w+) Y, X^w Y",
                            note: "Males are hemizygous (only one X)"
                        },
                        
                        possibleGenotypes: {
                            females: {
                                "X^(w+) X^(w+)": "Red eyes (homozygous wild-type)",
                                "X^(w+) X^w": "Red eyes (heterozygous carrier)",
                                "X^w X^w": "White eyes (homozygous mutant)"
                            },
                            males: {
                                "X^(w+) Y": "Red eyes",
                                "X^w Y": "White eyes (hemizygous mutant)"
                            }
                        },
                        
                        molecularBasis: {
                            wildType: "w⁺ gene encodes transporter protein for eye pigment precursors",
                            mutant: "w allele is nonfunctional → no pigment transport → white eyes",
                            expression: "Requires functional protein; one copy sufficient in females (w⁺ dominant)"
                        }
                    },
                    
                    variables: {
                        independent: "Parental genotypes and sex",
                        dependent: "Offspring eye color and sex ratios",
                        controlled: [
                            "Temperature (25°C optimal)",
                            "Food medium (standard cornmeal-molasses-agar)",
                            "Virgin females (ensure controlled matings)",
                            "Culture density"
                        ]
                    },
                    
                    materials: [
                        "Wild-type red-eyed Drosophila (stock)",
                        "White-eyed Drosophila (mutant stock)",
                        "Culture vials or bottles",
                        "Culture medium (cornmeal, molasses, agar, yeast)",
                        "Fly pads (anesthesia station) or CO₂ supply",
                        "Stereomicroscope (dissecting microscope)",
                        "Fine brushes for transferring flies",
                        "Incubator (25°C)",
                        "Labels and markers",
                        "Notebook for recording data"
                    ],
                    
                    flyHusbandry: {
                        collectingVirgins: {
                            why: "Females mate only once and store sperm; must use virgins for controlled crosses",
                            method: "Remove all adults from culture, wait 8-10 hours, collect newly emerged females (virgins)",
                            identification: "Virgin females have dark spot on abdomen (meconium), haven't opened wings fully yet",
                            timing: "Collect within 8 hours of eclosion (emergence from pupa)"
                        },
                        sexing: {
                            females: "Larger, pointed abdomen with visible segments, no sex combs",
                            males: "Smaller, rounded abdomen with dark posterior, sex combs on front legs",
                            practice: "Examine many flies under microscope to learn differences"
                        },
                        anesthesia: {
                            CO2: "Standard method - anesthetizes in seconds, recovers in minutes",
                            ether: "Alternative (less common now) - slower, longer recovery",
                            flyNap: "Commercial anesthetic (FlyNap) - gentler, but slower"
                        }
                    },
                    
                    procedure: {
                        cross1_morganOriginal: {
                            title: "Cross 1: White-eyed male × Red-eyed female (Morgan's original cross)",
                            parents: "X^w Y (white male) × X^(w+) X^(w+) (red female)",
                            
                            setup: [
                                "Collect virgin red-eyed females (wild-type stock)",
                                "Collect white-eyed males (mutant stock)",
                                "Place 3-5 virgin females + 2-3 males in culture vial",
                                "Label: Cross 1, P generation, date",
                                "Incubate at 25°C",
                                "Remove parents after 7 days (before F1 emerges)"
                            ],
                            
                            F1_scoring: [
                                "F1 emerges 10-12 days after cross",
                                "Anesthetize flies",
                                "Examine under microscope",
                                "Record eye color and sex of each fly",
                                "Expected: ALL F1 have red eyes (both males and females)",
                                "Collect virgin F1 females and F1 males for F2 cross"
                            ],
                            
                            F1_expected: {
                                punnettSquare: [
                                    ["", "X^(w+) (egg)", "X^(w+) (egg)"],
                                    ["X^w (sperm)", "X^(w+) X^w", "X^(w+) X^w"],
                                    ["Y (sperm)", "X^(w+) Y", "X^(w+) Y"]
                                ],
                                females: "100% X^(w+) X^w (red eyes, carriers)",
                                males: "100% X^(w+) Y (red eyes)",
                                all_red: "ALL F1 have red eyes (w⁺ is dominant)"
                            },
                            
                            F2_cross: [
                                "Cross F1 × F1: X^(w+) X^w females × X^(w+) Y males",
                                "Collect virgin F1 females",
                                "Mate with F1 males",
                                "Incubate, remove parents after 7 days",
                                "Score F2 offspring"
                            ],
                            
                            F2_expected: {
                                punnettSquare: [
                                    ["", "X^(w+) (male gamete)", "Y (male gamete)"],
                                    ["X^(w+) (female gamete)", "X^(w+) X^(w+)", "X^(w+) Y"],
                                    ["X^w (female gamete)", "X^(w+) X^w", "X^w Y"]
                                ],
                                females: "50% X^(w+) X^(w+) red, 50% X^(w+) X^w red → 100% red-eyed females",
                                males: "50% X^(w+) Y red, 50% X^w Y white → 50% red, 50% white males",
                                overall: "3 red : 1 white (3:1 ratio)",
                                SEX_LINKED_PATTERN: "WHITE EYES ONLY IN MALES",
                                ratio_by_sex: "All females red; 1 red male : 1 white male"
                            },
                            
                            keyObservation: "White eyes reappear in F2, but ONLY in males - diagnostic of X-linkage"
                        },
                        
                        cross2_reciprocal: {
                            title: "Cross 2: Reciprocal Cross - Red-eyed male × White-eyed female",
                            parents: "X^(w+) Y (red male) × X^w X^w (white female)",
                            purpose: "Show different pattern from Cross 1 - proves sex-linkage",
                            
                            F1_expected: {
                                punnettSquare: [
                                    ["", "X^(w+) (sperm)", "Y (sperm)"],
                                    ["X^w (egg)", "X^(w+) X^w", "X^w Y"],
                                    ["X^w (egg)", "X^(w+) X^w", "X^w Y"]
                                ],
                                females: "100% X^(w+) X^w (red eyes, carriers)",
                                males: "100% X^w Y (white eyes)",
                                pattern: "CRISS-CROSS: All F1 males white (like mother), all F1 females red (like father)"
                            },
                            
                            F2_expected: {
                                cross: "X^(w+) X^w × X^w Y",
                                females: "50% X^(w+) X^w red, 50% X^w X^w white",
                                males: "50% X^(w+) Y red, 50% X^w Y white",
                                ratio: "1 red female : 1 white female : 1 red male : 1 white male",
                                note: "Both sexes show both phenotypes (unlike Cross 1)"
                            }
                        },
                        
                        dataCollection: [
                            "Score at least 100 F2 flies from each cross",
                            "Record sex and eye color for each fly",
                            "Organize data in table (male red, male white, female red, female white)",
                            "Calculate observed ratios",
                            "Compare to expected sex-linked ratios",
                            "Perform chi-square test"
                        ]
                    },
                    
                    morgansOriginalData: {
                        cross1_F2: {
                            red_females: 2459,
                            white_females: 0,
                            red_males: 1011,
                            white_males: 782,
                            ratio: "Approximately 3:0:1:1 (3 red : 1 white overall; no white females)"
                        },
                        interpretation: "Perfect match to X-linked recessive inheritance pattern",
                        conclusion: "Eye color gene located on X chromosome"
                    },
                    
                    expectedResults: {
                        cross1_summary: {
                            P: "White male × Red female",
                            F1: "All red (both sexes)",
                            F2: "All females red; 50% males red, 50% males white",
                            ratio: "3 red : 1 white (all white are male)"
                        },
                        
                        cross2_summary: {
                            P: "Red male × White female",
                            F1: "All females red; all males white (criss-cross)",
                            F2: "1 red ♀ : 1 white ♀ : 1 red ♂ : 1 white ♂",
                            ratio: "1:1:1:1 (both sexes show both phenotypes)"
                        },
                        
                        diagnostic_pattern: "White eyes predominantly or exclusively in males in Cross 1 → indicates X-linkage"
                    },
                    
                    observations: [
                        "Cross 1: F1 all red eyes (dominance of w⁺)",
                        "Cross 1: F2 white eyes appear ONLY in males (hemizygosity)",
                        "Cross 2: F1 males all white eyes (inherited X from white mother)",
                        "Cross 2: F1 females all red (got X^(w+) from father)",
                        "Reciprocal crosses give DIFFERENT results (indicates sex-linkage)",
                        "No male-to-male transmission possible (males give Y to sons)",
                        "Pattern matches X chromosome segregation perfectly"
                    ],
                    
                    analysis: {
                        sex_linkage_evidence: {
                            criteriaForXLinked: [
                                "Different ratios in males vs females",
                                "Trait appears predominantly in males (Cross 1)",
                                "Reciprocal crosses give different results",
                                "Criss-cross pattern (sons resemble mother)",
                                "No male-to-male transmission"
                            ],
                            allCriteriaMet: "White eye in Drosophila meets ALL criteria for X-linked recessive"
                        },
                        
                        chromosomal_explanation: {
                            males_hemizygous: "Males have only one X chromosome → single recessive allele shows phenotype",
                            females_require_two: "Females need two X^w alleles to show white eyes (rare in Cross 1 F2)",
                            Y_chromosome: "Y chromosome has no eye color gene → males can't mask recessive X allele",
                            segregation: "X chromosomes segregate during meiosis exactly as eye color alleles do",
                            conclusion: "Eye color gene physically located on X chromosome"
                        },
                        
                        chromosome_theory_proof: {
                            before_morgan: "Genes hypothesized but location unknown",
                            parallel: "Gene segregation parallels chromosome segregation",
                            prediction: "If gene on X, should follow X chromosome inheritance",
                            observation: "White eye follows X chromosome perfectly",
                            conclusion: "Genes are physically on chromosomes (chromosomal theory of inheritance)"
                        },
                        
                        why_reciprocals_differ: {
                            autosomal: "If gene on autosome (non-sex chromosome), reciprocal crosses give SAME result",
                            X_linked: "If on X chromosome, reciprocals differ because sexes have different X chromosome combinations",
                            cross1: "Males get X from mother only → inherit her X-linked traits",
                            cross2: "Daughters get one X from each parent → different pattern",
                            proof: "Different reciprocal results prove sex-linkage"
                        }
                    },
                    
                    modernMolecularUnderstanding: {
                        white_gene: {
                            function: "Encodes ABC transporter (ATP-binding cassette transporter)",
                            role: "Transports pigment precursors into pigment cells",
                            mutation: "Loss-of-function mutations prevent pigment deposition",
                            result: "Eyes lack red/brown pigments → appear white"
                        },
                        manyAlleles: "Over 100 different white alleles now known (apricot, eosin, cherry, etc.)",
                        geneStructure: "6 exons, about 5 kb genomic region",
                        expression: "Expressed in eye tissue during development"
                    },
                    
                    testCrosses: {
                        determine_female_genotype: {
                            question: "Is red-eyed female X^(w+) X^(w+) or X^(w+) X^w?",
                            method: "Cross with white-eyed male (X^w Y)",
                            if_homozygous: "X^(w+) X^(w+) × X^w Y → all red offspring",
                            if_heterozygous: "X^(w+) X^w × X^w Y → 50% red, 50% white (in males); all females red"
                        }
                    },
                    
                    statisticalAnalysis: {
                        chiSquare_cross1_F2: {
                            expected: "3 red : 1 white",
                            expected_by_sex: {
                                females: "All red",
                                males: "1 red : 1 white"
                            },
                            example_data: {
                                red_females: 95,
                                white_females: 0,
                                red_males: 48,
                                white_males: 52,
                                total: 200
                            },
                            chi_square_calculation: "Compare observed vs expected for each category",
                            interpretation: "If χ² < critical value, data fits X-linked model"
                        }
                    },
                    
                    humanParallels: {
                        X_linked_recessive_human: [
                            {
                                disorder: "Hemophilia A",
                                gene: "Factor VIII",
                                pattern: "Mostly males affected, carrier mothers",
                                famous: "Royal hemophilia (Queen Victoria carrier)"
                            },
                            {
                                disorder: "Red-green color blindness",
                                gene: "Opsin genes",
                                pattern: "8% males, 0.5% females",
                                note: "Most common X-linked trait in humans"
                            },
                            {
                                disorder: "Duchenne muscular dystrophy",
                                gene: "Dystrophin",
                                pattern: "Affects 1/3500 males",
                                severity: "Progressive muscle weakness"
                            }
                        ],
                        inheritance_parallels: "Human X-linked traits follow same patterns as Drosophila white eye"
                    },
                    
                    extensions: {
                        multiple_X_linked_genes: {
                            description: "Cross flies with two X-linked traits",
                            example: "White eye + yellow body (both X-linked)",
                            purpose: "Demonstrate linkage and recombination"
                        },
                        dosage_compensation: {
                            question: "How do males with one X compensate for gene dosage?",
                            drosophila: "Males hypertranscribe their single X chromosome (2× expression)",
                            mammals: "Females inactivate one X (Barr body, lyonization)"
                        },
                        non_disjunction: {
                            experiment: "Study XXY or XO flies (from meiotic errors)",
                            bridges_experiment: "Calvin Bridges (Morgan's student) used this to prove chromosome theory"
                        }
                    },
                    
                    conclusions: [
                        "Eye color gene in Drosophila is located on X chromosome (sex-linked)",
                        "Males are hemizygous for X-linked genes (only one copy)",
                        "X-linked recessive traits appear predominantly in males",
                        "Reciprocal crosses give different results for sex-linked traits",
                        "Inheritance pattern of eye color exactly parallels X chromosome segregation",
                        "Provides direct evidence that genes are physically located on chromosomes",
                        "Establishes chromosomal theory of inheritance",
                        "Drosophila becomes model organism for genetics"
                    ],
                    
                    historicalImpact: [
                        "First gene mapped to specific chromosome (1910)",
                        "Proved chromosomal theory of inheritance",
                        "Established Drosophila as genetics model",
                        "Led to development of genetic mapping",
                        "Founded modern genetics as experimental science",
                        "Morgan won Nobel Prize (1933)"
                    ],
                    
                    practicalTips: {
                        culturing: [
                            "Keep cultures at 25°C for 10-day generation time",
                            "Use fresh food medium (prevent mold)",
                            "Don't overcrowd cultures (affects development)",
                            "Remove parents before F1 emerges (prevent mixing generations)"
                        ],
                        collecting_virgins: [
                            "Clear all adults from vial",
                            "Check every 8-10 hours for new females",
                            "Virgins have dark meconium spot, haven't fully opened wings",
                            "Critical for controlled crosses"
                        ],
                        sexing_tips: [
                            "Males: smaller, rounded abdomen, sex combs on forelegs",
                            "Females: larger, pointed abdomen, no sex combs",
                            "Practice with known males and females first",
                            "Use good lighting and magnification"
                        ],
                        troubleshooting: [
                            "No offspring: Parents may be infertile or too old",
                            "Ratios off: May have scoring errors or small sample size",
                            "Contamination: Ensure virgin females used",
                            "Flies dying: Check temperature, food freshness"
                        ]
                    },
                    
                    commonStudentErrors: [
                        "Forgetting males are hemizygous (only one X)",
                        "Not using virgin females (leads to uncontrolled crosses)",
                        "Confusing X^(w+) with autosomal dominant",
                        "Expecting reciprocal crosses to be identical",
                        "Misinterpreting 'all females red, half males white' pattern"
                    ],
                    
                    realWorldApplications: [
                        "Understanding human X-linked genetic diseases",
                        "Genetic counseling for carrier detection",
                        "Pedigree analysis of sex-linked traits",
                        "Evolutionary studies of sex chromosome evolution",
                        "Biotechnology and model organism research"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 5: CHI-SQUARE TEST IN GENETICS
            // ========================================
            
            chi_square_goodness_of_fit: {
                name: "Chi-Square Test: Statistical Analysis of Genetic Ratios",
                relatedTopics: ['chi_square', 'mendels_laws', 'monohybrid_crosses', 'dihybrid_crosses'],
                category: 'genetic_statistics',
                
                historicalBackground: {
                    mathematician: "Karl Pearson",
                    lifespan: "1857-1936",
                    year: "1900",
                    invention: "Chi-square (χ²) test for goodness of fit",
                    context: "Developed as statistical method to test if observed data fits expected distribution",
                    significance: "Revolutionized statistical analysis; allowed objective evaluation of experimental results",
                    
                    pearsonBackground: {
                        field: "British mathematician and statistician",
                        contributions: "Founded modern statistics, correlation, regression analysis",
                        biometry: "Applied statistics to biology (biometrics)",
                        galton: "Student of Francis Galton (eugenics, heredity studies)",
                        legacy: "Father of mathematical statistics"
                    },
                    
                    application_to_genetics: {
                        problem: "Mendel and others observed ratios, but how to know if deviations due to chance or real?",
                        solution: "Chi-square test quantifies probability that deviations are due to random sampling",
                        adoption: "Quickly adopted by geneticists to test Mendelian ratios",
                        mendel_controversy: "Ironically, Mendel's data 'too good' - possible fabrication or unconscious bias",
                        modern_use: "Standard statistical tool in genetics, now in all biology textbooks"
                    },
                    
                    revolutionaryAspect: [
                        "Objective criterion for accepting/rejecting hypotheses",
                        "Accounts for sample size (larger samples need closer fit)",
                        "Quantifies probability (p-value)",
                        "Applicable to many fields beyond genetics"
                    ]
                },
                
                labExperiment: {
                    title: "Using Chi-Square Test to Analyze Genetic Crosses",
                    
                    hypothesis: "If observed genetic ratios are due to chance deviations from expected Mendelian ratios, then chi-square test will show no significant difference (p > 0.05) between observed and expected values",
                    
                    purpose: "Learn to apply chi-square statistical test to determine if observed genetic data fits expected Mendelian ratios, and distinguish random sampling error from real deviations",
                    
                    background: {
                        why_needed: "Observed ratios never exactly match expected (e.g., never exactly 3:1 due to random chance)",
                        question: "How much deviation is 'acceptable' vs 'too much'?",
                        chi_square_answers: "Calculates probability that observed deviations are due to chance",
                        decision_rule: "If p > 0.05 (typically), accept hypothesis; if p < 0.05, reject"
                    },
                    
                    theory: {
                        chi_square_statistic: {
                            symbol: "χ² (Greek letter chi, squared)",
                            formula: "χ² = Σ [(Observed - Expected)² / Expected]",
                            meaning: "Sum of squared deviations, weighted by expected values",
                            components: {
                                observed: "Actual counts from experiment",
                                expected: "Predicted counts from hypothesis (e.g., 3:1 ratio)",
                                deviation: "Observed - Expected (how far off)",
                                squared: "Makes all deviations positive, emphasizes large deviations",
                                divided_by_expected: "Standardizes (same deviation more significant in small categories)"
                            }
                        },
                        
                        degrees_of_freedom: {
                            symbol: "df",
                            formula: "df = number of categories - 1",
                            reason: "Last category constrained by total (not free to vary)",
                            example: "For 3:1 ratio (2 categories): df = 2 - 1 = 1"
                        },
                        
                        p_value: {
                            definition: "Probability that observed deviation is due to random chance",
                            interpretation: {
                                high_p: "p > 0.05: Deviations likely due to chance → ACCEPT hypothesis",
                                low_p: "p < 0.05: Deviations unlikely due to chance → REJECT hypothesis"
                            },
                            critical_value: "χ² value corresponding to p = 0.05 (from table)",
                            decision: "If calculated χ² < critical value → accept; if χ² > critical → reject"
                        },
                        
                        null_hypothesis: {
                            statement: "Observed data fits expected ratio (e.g., 3:1)",
                            test: "Chi-square tests this null hypothesis",
                            accept: "Data consistent with hypothesis (could be true)",
                            reject: "Data inconsistent with hypothesis (probably not true)"
                        }
                    },
                    
                    chi_square_table: {
                        description: "Table of critical χ² values for different df and p-values",
                        common_values: [
                            {df: 1, p_005: 3.841, p_001: 6.635},
                            {df: 2, p_005: 5.991, p_001: 9.210},
                            {df: 3, p_005: 7.815, p_001: 11.345},
                            {df: 4, p_005: 9.488, p_001: 13.277}
                        ],
                        usage: "Compare calculated χ² to table value for given df"
                    },
                    
                    step_by_step_procedure: {
                        step1: {
                            title: "State the hypothesis and expected ratio",
                            example: "Hypothesis: Tt × Tt gives 3:1 ratio (tall:short)"
                        },
                        
                        step2: {
                            title: "Calculate expected values",
                            method: "Expected = Total × (ratio fraction)",
                            example: {
                                total: 100,
                                expected_tall: "100 × 3/4 = 75",
                                expected_short: "100 × 1/4 = 25"
                            }
                        },
                        
                        step3: {
                            title: "Determine degrees of freedom",
                            formula: "df = number of categories - 1",
                            example: "2 categories (tall, short) → df = 2 - 1 = 1"
                        },
                        
                        step4: {
                            title: "Calculate chi-square statistic",
                            formula: "χ² = Σ [(O - E)² / E]",
                            method: [
                                "For each category: (Observed - Expected)²",
                                "Divide by Expected",
                                "Sum all categories"
                            ]
                        },
                        
                        step5: {
                            title: "Find critical value from table",
                            lookup: "Use df and chosen significance level (usually 0.05)",
                            example: "df = 1, p = 0.05 → critical χ² = 3.841"
                        },
                        
                        step6: {
                            title: "Compare and make decision",
                            rule: {
                                if_less: "Calculated χ² < critical value → ACCEPT hypothesis (not significant)",
                                if_greater: "Calculated χ² > critical value → REJECT hypothesis (significant difference)"
                            }
                        }
                    },
                    
                    worked_examples: {
                        example1_monohybrid: {
                            title: "Example 1: Monohybrid Cross (3:1 ratio)",
                            cross: "Tt × Tt (tall × tall)",
                            expected_ratio: "3:1 (tall:short)",
                            
                            observed_data: {
                                tall: 72,
                                short: 28,
                                total: 100
                            },
                            
                            expected_data: {
                                tall: "100 × 3/4 = 75",
                                short: "100 × 1/4 = 25",
                                total: 100
                            },
                            
                            chi_square_calculation: {
                                tall: "(72 - 75)² / 75 = 9/75 = 0.12",
                                short: "(28 - 25)² / 25 = 9/25 = 0.36",
                                chi_square: "χ² = 0.12 + 0.36 = 0.48"
                            },
                            
                            degrees_of_freedom: "df = 2 - 1 = 1",
                            critical_value: "3.841 (for df=1, p=0.05)",
                            
                            decision: {
                                comparison: "0.48 < 3.841",
                                conclusion: "ACCEPT hypothesis - data fits 3:1 ratio",
                                interpretation: "Deviations are within expected random variation",
                                p_value: "p > 0.05 (likely p > 0.4)"
                            }
                        },
                        
                        example2_dihybrid: {
                            title: "Example 2: Dihybrid Cross (9:3:3:1 ratio)",
                            cross: "RrYy × RrYy",
                            expected_ratio: "9:3:3:1",
                            
                            observed_data: {
                                round_yellow: 315,
                                round_green: 108,
                                wrinkled_yellow: 101,
                                wrinkled_green: 32,
                                total: 556
                            },
                            
                            expected_data: {
                                round_yellow: "556 × 9/16 = 312.75",
                                round_green: "556 × 3/16 = 104.25",
                                wrinkled_yellow: "556 × 3/16 = 104.25",
                                wrinkled_green: "556 × 1/16 = 34.75"
                            },
                            
                            chi_square_calculation: {
                                RY: "(315-312.75)²/312.75 = 5.0625/312.75 = 0.016",
                                Ry: "(108-104.25)²/104.25 = 14.0625/104.25 = 0.135",
                                rY: "(101-104.25)²/104.25 = 10.5625/104.25 = 0.101",
                                ry: "(32-34.75)²/34.75 = 7.5625/34.75 = 0.218",
                                chi_square: "χ² = 0.016 + 0.135 + 0.101 + 0.218 = 0.470"
                            },
                            
                            degrees_of_freedom: "df = 4 - 1 = 3",
                            critical_value: "7.815 (for df=3, p=0.05)",
                            
                            decision: {
                                comparison: "0.470 < 7.815",
                                conclusion: "ACCEPT - excellent fit to 9:3:3:1 ratio",
                                interpretation: "These are Mendel's actual data - remarkably good fit!",
                                p_value: "p > 0.9 (very high probability of chance deviation)"
                            },
                            
                            note: "Some historians suspect Mendel's data TOO good - may have been 'adjusted'"
                        },
                        
                        example3_reject_hypothesis: {
                            title: "Example 3: Data That REJECTS Hypothesis",
                            cross: "Supposedly Aa × Aa",
                            expected_ratio: "3:1",
                            
                            observed_data: {
                                dominant: 88,
                                recessive: 12,
                                total: 100
                            },
                            
                            expected_data: {
                                dominant: 75,
                                recessive: 25
                            },
                            
                            chi_square_calculation: {
                                dominant: "(88-75)²/75 = 169/75 = 2.253",
                                recessive: "(12-25)²/25 = 169/25 = 6.760",
                                chi_square: "χ² = 2.253 + 6.760 = 9.013"
                            },
                            
                            df: 1,
                            critical_value: "3.841 (p=0.05)",
                            
                            decision: {
                                comparison: "9.013 > 3.841",
                                conclusion: "REJECT 3:1 hypothesis",
                                interpretation: "Data does NOT fit 3:1 ratio - something else going on",
                                possible_reasons: [
                                    "Parents not both heterozygous (one might be AA)",
                                    "Lethal allele (some genotypes die before counting)",
                                    "Sampling error (though unlikely with χ² this high)",
                                    "Experimental error"
                                ],
                                p_value: "p < 0.01 (very unlikely due to chance)"
                            }
                        }
                    },
                    
                    practice_problems: {
                        problem1: {
                            scenario: "Monohybrid cross of pea plants (tall × tall)",
                            data: {tall: 787, short: 277, total: 1064},
                            expected_ratio: "3:1",
                            student_task: "Calculate χ² and determine if data fits 3:1 ratio",
                            answer: {
                                expected: {tall: 798, short: 266},
                                chi_square: "χ² ≈ 0.60",
                                decision: "Accept (χ² < 3.841)"
                            }
                        },
                        
                        problem2: {
                            scenario: "Cross involving incomplete dominance (RR × rr → Rr F1)",
                            F2_cross: "Rr × Rr",
                            data: {red: 24, pink: 52, white: 24, total: 100},
                            expected_ratio: "1:2:1",
                            student_task: "Test if data fits 1:2:1 ratio",
                            answer: {
                                expected: {red: 25, pink: 50, white: 25},
                                chi_square: "χ² ≈ 0.24",
                                df: 2,
                                critical: 5.991,
                                decision: "Accept"
                            }
                        }
                    },
                    
                    common_genetics_applications: {
                        test_3_to_1: {
                            use: "Monohybrid heterozygous cross",
                            ratio: "3:1",
                            df: 1,
                            critical: 3.841
                        },
                        test_1_2_1: {
                            use: "Incomplete dominance or test cross",
                            ratio: "1:2:1 or 1:1",
                            df: "2 or 1",
                            critical: "5.991 or 3.841"
                        },
                        test_9_3_3_1: {
                            use: "Dihybrid heterozygous cross",
                            ratio: "9:3:3:1",
                            df: 3,
                            critical: 7.815
                        },
                        test_1_1_1_1: {
                            use: "Dihybrid test cross",
                            ratio: "1:1:1:1",
                            df: 3,
                            critical: 7.815
                        }
                    },
                    
                    interpretation_guide: {
                        very_low_chi_square: {
                            range: "χ² much smaller than expected",
                            meaning: "Data fits TOO well",
                            suspicion: "Possible data manipulation or bias",
                            example: "Mendel's data"
                        },
                        low_chi_square: {
                            range: "χ² < critical value",
                            meaning: "Good fit to hypothesis",
                            conclusion: "Accept hypothesis",
                            p_value: "p > 0.05"
                        },
                        high_chi_square: {
                            range: "χ² > critical value",
                            meaning: "Poor fit to hypothesis",
                            conclusion: "Reject hypothesis",
                            p_value: "p < 0.05",
                            next_steps: "Consider alternative hypotheses"
                        }
                    },
                    
                    limitations: {
                        sample_size: "Need sufficiently large sample (expected values > 5 in each category)",
                        independence: "Observations must be independent",
                        mutually_exclusive: "Categories must not overlap",
                        hypothesis_testing_only: "Doesn't prove hypothesis, only tests consistency"
                    },
                    
                    real_world_applications: [
                        "Analyzing genetic crosses in research",
                        "Quality control in breeding programs",
                        "Clinical genetics (testing inheritance patterns)",
                        "Population genetics studies",
                        "Linkage analysis (detecting linked genes)",
                        "Forensic genetics"
                    ],
                    
                    common_student_errors: [
                        "Forgetting to square the deviations",
                        "Using wrong degrees of freedom",
                        "Comparing to wrong critical value (wrong df or p-level)",
                        "Not checking if expected values are all > 5",
                        "Confusing 'accept' with 'prove' (we never prove hypothesis, only test it)"
                    ],
                    
                    extensions: {
                        linkage_detection: {
                            description: "Use chi-square to detect linked genes",
                            method: "If observed ratios deviate significantly from 9:3:3:1, genes may be linked",
                            example: "9:3:3:1 expected, but observe 12:1:1:4 → suggests linkage"
                        },
                        Hardy_Weinberg: {
                            description: "Test if population is in Hardy-Weinberg equilibrium",
                            application: "Population genetics"
                        }
                    },
                    
                    conclusions: [
                        "Chi-square test provides objective criterion for evaluating genetic ratios",
                        "Accounts for random sampling variation in small experiments",
                        "Calculated χ² < critical value → accept hypothesis; > critical → reject",
                        "Standard tool in genetics for hypothesis testing",
                        "p-value indicates probability that deviations are due to chance",
                        "Essential skill for analyzing genetic experiments"
                    ]
                }
            }
        };

        // Link experiments to topics
        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.geneticsExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.geneticsTopics[topicId]) {
                    if (!this.geneticsTopics[topicId].relatedExperiments) {
                        this.geneticsTopics[topicId].relatedExperiments = [];
                    }
                    this.geneticsTopics[topicId].relatedExperiments.push({
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
            mendels_laws: {
                'Dominance and Recessiveness': [
                    'Thinking dominant means "better" or "more common" (dominance just means expressed in heterozygote)',
                    'Believing dominant alleles are always more frequent in populations (actually can be rare)',
                    'Confusing dominance with fitness or strength',
                    'Thinking recessive alleles disappear (they remain in carriers)',
                    'Believing you can tell genotype from phenotype for dominant trait (AA vs Aa look same)'
                ],
                'Segregation': [
                    'Thinking alleles blend together (they separate intact during meiosis)',
                    'Confusing segregation with independent assortment',
                    'Forgetting that gametes get only one allele (not both)',
                    'Thinking segregation only applies to sex cells (actually produces variation)'
                ],
                'Independent Assortment': [
                    'Assuming ALL genes assort independently (linked genes on same chromosome do NOT)',
                    'Forgetting this applies only to genes on different chromosomes or far apart',
                    'Thinking independent assortment applies within a gene (it\'s between genes)'
                ]
            },
            
            genetic_crosses: {
                'Monohybrid': [
                    'Expecting exactly 3:1 ratio every time (random variation exists)',
                    'Thinking small deviations mean hypothesis is wrong',
                    'Forgetting to verify true-breeding parents',
                    'Confusing F1 and F2 generations'
                ],
                'Dihybrid': [
                    'Forgetting that each parent produces 4 gamete types (RY, Ry, rY, ry)',
                    'Not using 4×4 Punnett square (using 2×2 instead)',
                    'Thinking 9:3:3:1 ratio applies to all two-trait crosses (only if independent)',
                    'Confusing phenotypic ratio (9:3:3:1) with genotypic breakdown'
                ]
            },
            
            non_mendelian: {
                'Incomplete Dominance': [
                    'Thinking it\'s the same as blending inheritance (alleles stay separate)',
                    'Confusing with codominance (intermediate vs both expressed)',
                    'Expecting 3:1 ratio (should be 1:2:1)',
                    'Thinking pink flowers prove blending (red and white reappear in F2)'
                ],
                'Codominance': [
                    'Confusing with incomplete dominance',
                    'Thinking AB blood type is intermediate (it\'s BOTH A and B antigens)',
                    'Forgetting that both alleles are fully expressed, not partially'
                ]
            },
            
            sex_linked: {
                'X-linkage': [
                    'Thinking males and females equally affected (males more affected for X-linked recessive)',
                    'Forgetting males are hemizygous (only one X)',
                    'Thinking fathers pass X to sons (fathers give Y to sons, X to daughters)',
                    'Confusing carrier females with affected females',
                    'Expecting reciprocal crosses to be identical (they differ for sex-linked)'
                ],
                'Chromosomes': [
                    'Thinking all genes are sex-linked (most are autosomal)',
                    'Confusing X and Y chromosomes functions',
                    'Believing Y chromosome is just "not X" (it has its own genes)'
                ]
            },
            
            punnett_squares: {
                'Setup': [
                    'Putting genotypes inside boxes (should be gametes on outside, genotypes inside)',
                    'Forgetting to write parent genotypes first',
                    'Not determining all possible gametes'
                ],
                'Analysis': [
                    'Counting boxes instead of individuals (each box represents proportion, not single individual)',
                    'Confusing genotypic and phenotypic ratios'
                ]
            },
            
            probability: {
                'Product Rule': [
                    'Using when events are not independent',
                    'Forgetting to multiply probabilities for "and" questions'
                ],
                'Sum Rule': [
                    'Using for non-mutually exclusive events',
                    'Forgetting to add probabilities for "or" questions'
                ]
            },
            
            statistics: {
                'Chi-Square': [
                    'Thinking low chi-square means hypothesis is wrong (low is good!)',
                    'Using observed values instead of expected in denominator',
                    'Forgetting to square the deviations',
                    'Using wrong degrees of freedom',
                    'Thinking chi-square proves hypothesis (only tests consistency)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_punnett: {
                method: 'Use Punnett squares to show allele segregation',
                effectiveness: 'Very high for understanding inheritance patterns'
            },
            pedigree_analysis: {
                method: 'Trace traits through family trees',
                effectiveness: 'High for understanding real-world inheritance'
            },
            probability_trees: {
                method: 'Branch diagrams for calculating probabilities',
                effectiveness: 'High for complex crosses'
            },
            hands_on_simulation: {
                method: 'Use coins, beads, or cards to simulate crosses',
                effectiveness: 'Very high for kinesthetic learners'
            },
            worked_examples: {
                method: 'Step-by-step problem solving',
                effectiveness: 'High for procedural learning'
            },
            historical_experiments: {
                method: 'Connect to Mendel, Morgan, etc.',
                effectiveness: 'High for contextual understanding'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}?",
                "What patterns do you predict in genetic crosses?",
                "How might this relate to traits you see in your own family?",
                "What questions do you have about inheritance?"
            ],
            duringLearning: [
                "Can you predict the offspring before doing the Punnett square?",
                "Why did we get this ratio?",
                "What would happen if we changed one parent's genotype?",
                "Does this pattern make sense given what you know about meiosis?"
            ],
            afterLearning: [
                "How would you explain this cross to someone else?",
                "What was most challenging about this problem?",
                "How does this connect to real-world genetics?",
                "Can you create your own genetics problem?"
            ],
            problemSolving: [
                "What are the genotypes of the parents?",
                "What gametes can each parent produce?",
                "Should I use a 2×2 or 4×4 Punnett square?",
                "Do my ratios make sense?",
                "How can I check my answer?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            mendels_laws: [
                {
                    scenario: "Dog Breeding",
                    context: "You want to breed labrador retrievers with specific coat colors",
                    application: "Black (B) dominant over chocolate (b). Two black labs (both Bb) can have chocolate puppies",
                    question: "What percentage of puppies will be chocolate?"
                },
                {
                    scenario: "Agricultural Crop Improvement",
                    context: "Plant breeder wants disease-resistant tomatoes",
                    application: "Cross resistant plants to maintain trait while improving yield",
                    question: "How can you ensure all offspring are resistant?"
                }
            ],
            
            sex_linked: [
                {
                    scenario: "Hemophilia in Royal Families",
                    context: "Queen Victoria was carrier of hemophilia (X-linked recessive)",
                    application: "Passed to son Leopold (affected), daughters Alexandra and Beatrice (carriers), spread to European royal families",
                    question: "Why were only males in family affected?"
                },
                {
                    scenario: "Color Blindness Counseling",
                    context: "Woman with normal vision has color-blind father; marries man with normal vision",
                    application: "She is carrier (X^C X^c); 50% chance sons will be color-blind",
                    question: "What is probability first son will be color-blind?"
                }
            ],
            
            non_mendelian: [
                {
                    scenario: "Blood Transfusions",
                    context: "Understanding ABO blood compatibility for transfusions",
                    application: "Type AB can receive from anyone (universal recipient); Type O can donate to anyone (universal donor)",
                    question: "Can two parents with type A and type B blood have a type O child?"
                },
                {
                    scenario: "Sickle Cell and Malaria",
                    context: "Sickle cell trait (heterozygous) provides malaria resistance",
                    application: "In malaria regions, HbA/HbS heterozygotes have survival advantage",
                    question: "Why is sickle cell allele common in certain populations?"
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall genetic terms and Mendel's laws",
                    verbs: ["Define", "List", "Identify", "State"],
                    example: "Define heterozygous"
                },
                understand: {
                    description: "Explain inheritance patterns",
                    verbs: ["Explain", "Describe", "Interpret", "Summarize"],
                    example: "Explain why F2 generation shows 3:1 ratio"
                },
                apply: {
                    description: "Solve genetic crosses",
                    verbs: ["Calculate", "Predict", "Solve", "Construct Punnett square"],
                    example: "Calculate offspring ratios from Aa × aa cross"
                },
                analyze: {
                    description: "Interpret pedigrees and experimental data",
                    verbs: ["Analyze", "Compare", "Determine", "Infer"],
                    example: "Analyze pedigree to determine mode of inheritance"
                },
                evaluate: {
                    description: "Use chi-square to evaluate hypotheses",
                    verbs: ["Evaluate", "Test", "Assess", "Judge"],
                    example: "Evaluate if data fits 9:3:3:1 ratio using chi-square"
                },
                create: {
                    description: "Design genetic experiments",
                    verbs: ["Design", "Plan", "Create", "Develop"],
                    example: "Design experiment to determine if trait is sex-linked"
                }
            },
            
            problem_solving_skills: {
                novice: {
                    characteristics: ["Needs step-by-step guidance", "Struggles with Punnett squares", "Confuses genotype and phenotype"],
                    support: ["Provide worked examples", "Use templates", "Practice with simple monohybrid crosses"]
                },
                developing: {
                    characteristics: ["Can solve monohybrid crosses", "Beginning dihybrid", "Understands basic probability"],
                    support: ["Challenge with test crosses", "Introduce chi-square", "Practice pedigree analysis"]
                },
                proficient: {
                    characteristics: ["Solves multi-trait crosses", "Uses chi-square confidently", "Interprets pedigrees"],
                    support: ["Present complex scenarios", "Non-Mendelian patterns", "Research-based problems"]
                },
                expert: {
                    characteristics: ["Designs experiments", "Integrates molecular and Mendelian genetics", "Teaches others"],
                    support: ["Original research", "Advanced population genetics", "Genetic counseling scenarios"]
                }
            }
        };
    }

    // ========================================
    // HANDLER METHODS FOR GENETICS TOPICS
    // ========================================

    // ========================================
// COMPLETE HANDLER METHODS IMPLEMENTATION
// ========================================

handleMendelsLaws(problem) {
    const content = {
        topic: "Mendel's Laws of Inheritance",
        category: 'classical_genetics',
        summary: "Gregor Mendel's experiments with pea plants (1856-1863) established the fundamental principles of heredity: genes exist in alternative forms (alleles), alleles segregate during gamete formation, and genes for different traits assort independently.",
        
        historicalContext: {
            scientist: "Gregor Johann Mendel (1822-1884)",
            monastery: "Augustinian monastery, Brno (now Czech Republic)",
            experimentalPeriod: "1856-1863 (8 years)",
            publication: "1866 - 'Experiments on Plant Hybridization' (Versuche über Pflanzen-Hybriden)",
            recognition: "Work ignored until 1900, rediscovered simultaneously by de Vries, Correns, and von Tschermak",
            significance: "Founded genetics as a science, introduced mathematical/statistical approach to biology",
            
            mendelBackground: {
                education: "University of Vienna - studied physics, mathematics, natural sciences",
                teachers: "Christian Doppler (physics), Franz Unger (botany)",
                failures: "Failed teaching certification exams twice",
                monastery: "Joined monastery partly for intellectual opportunities",
                choice: "Chose pea plants after failed experiments with mice and bees"
            },
            
            whyRevolutionary: [
                "First to use large sample sizes (>28,000 plants over 8 years)",
                "First to apply quantitative/statistical analysis to heredity",
                "Proposed particulate (not blending) inheritance",
                "Distinguished between what we now call genotype and phenotype",
                "Formulated predictive laws of inheritance",
                "Used controlled crosses and careful record-keeping"
            ],
            
            rediscovery: {
                year: 1900,
                scientists: [
                    "Hugo de Vries (Netherlands) - studying evening primrose",
                    "Carl Correns (Germany) - working with peas and maize",
                    "Erich von Tschermak (Austria) - experimenting with peas"
                ],
                outcome: "All three independently confirmed Mendel's findings",
                irony: "Mendel recognized 16 years after death, now 'Father of Genetics'"
            }
        },
        
        keyDefinitions: {
            gene: {
                definition: "Unit of heredity that occupies a specific position (locus) on a chromosome",
                mendelTerm: "Mendel called these 'factors' or 'elements'",
                modern: "We now know genes are DNA sequences encoding proteins or RNA"
            },
            allele: {
                definition: "Alternative form of a gene",
                example: "T (tall) and t (short) are alleles of the height gene",
                notation: "Dominant allele = capital letter, recessive = lowercase",
                origin: "From Greek 'allelon' meaning 'of one another'"
            },
            dominant: {
                definition: "Allele that expresses its phenotype even when paired with different allele (heterozygous)",
                symbol: "Capital letter (e.g., T)",
                mechanism: "Usually one functional copy of gene is sufficient for normal phenotype",
                note: "NOT 'stronger' or 'better', just expressed in heterozygote"
            },
            recessive: {
                definition: "Allele whose phenotype is masked in heterozygote, only expressed in homozygous state",
                symbol: "Lowercase letter (e.g., t)",
                mechanism: "Usually requires two non-functional or reduced-function copies",
                note: "Does NOT disappear, remains 'hidden' in carriers"
            },
            genotype: {
                definition: "Genetic makeup of organism (allele combination)",
                examples: ["TT (homozygous dominant)", "Tt (heterozygous)", "tt (homozygous recessive)"],
                notation: "Written with letters representing alleles"
            },
            phenotype: {
                definition: "Observable characteristics of organism",
                examples: ["Tall plant", "Short plant", "Red flowers"],
                determinedBy: "Genotype + Environment",
                note: "Cannot always determine genotype from phenotype (TT and Tt both look tall)"
            },
            homozygous: {
                definition: "Two identical alleles for a gene",
                types: ["Homozygous dominant (TT)", "Homozygous recessive (tt)"],
                breeding: "Homozygous individuals breed true",
                gametes: "Produces only one type of gamete for that gene"
            },
            heterozygous: {
                definition: "Two different alleles for a gene",
                example: "Tt",
                synonym: "Hybrid",
                gametes: "Produces two types of gametes (T and t)",
                phenotype: "Usually shows dominant trait"
            },
            P_generation: {
                definition: "Parental generation (original cross)",
                symbol: "P",
                mendelChoice: "Mendel used true-breeding (homozygous) parents"
            },
            F1_generation: {
                definition: "First filial generation (offspring of P cross)",
                symbol: "F₁",
                characteristic: "Often all show dominant phenotype if P parents true-breeding"
            },
            F2_generation: {
                definition: "Second filial generation (offspring of F1 × F1)",
                symbol: "F₂",
                characteristic: "Shows typical Mendelian ratios (3:1 for monohybrid)",
                keyGeneration: "Where Mendel discovered his ratios"
            },
            trueBreeding: {
                definition: "Organism that produces offspring identical to itself when self-pollinated",
                genotype: "Homozygous",
                importance: "Essential for establishing baseline in genetic crosses",
                mendelVerification: "Tested for 2+ generations before using"
            },
            locus: {
                definition: "Specific physical location of gene on chromosome",
                plural: "Loci",
                modern: "Can be precisely mapped with molecular techniques"
            }
        },
        
        mendelsThreeLaws: {
            lawOfDominance: {
                statement: "When two organisms with contrasting traits are crossed, the offspring will display only one trait - the dominant trait",
                alternativeStatement: "In a heterozygote, one allele may mask the expression of another",
                
                explanation: "One allele (dominant) is expressed in the phenotype, while the other (recessive) is present but not expressed",
                
                example: {
                    cross: "TT (tall) × tt (short)",
                    F1: "All Tt (tall)",
                    observation: "Short trait disappears in F1 (masked by tall)",
                    reappearance: "Short reappears in F2 (proving allele wasn't lost)"
                },
                
                molecularBasis: {
                    dominant: "Typically one functional copy of gene sufficient for normal phenotype (haploinsufficiency does NOT occur)",
                    recessive: "Usually loss-of-function mutation; two defective copies needed to show phenotype",
                    example: "T allele produces growth hormone → tall; t produces none → short"
                },
                
                exceptions: "NOT universal - incomplete dominance and codominance exist",
                
                importance: "Explained why F1 all showed one parental phenotype, contradicting blending theory"
            },
            
            lawOfSegregation: {
                statement: "The two alleles for each trait separate (segregate) during gamete formation, and each gamete receives only one allele",
                alternativeStatement: "Allele pairs separate during meiosis such that each gamete receives only one member of the pair",
                
                keyPoints: [
                    "Each parent has two alleles for each gene",
                    "Alleles separate during gamete formation (meiosis)",
                    "Each gamete contains only ONE allele for each gene",
                    "Gametes unite randomly at fertilization",
                    "Offspring receive one allele from each parent"
                ],
                
                example: {
                    parent: "Tt (heterozygous tall)",
                    meiosis: "Alleles T and t separate into different gametes",
                    gametes: "50% T, 50% t",
                    fertilization: "Tt × Tt → TT, Tt, Tt, tt offspring"
                },
                
                punnettSquareDemo: {
                    cross: "Tt × Tt",
                    gametes_parent1: ["T (50%)", "t (50%)"],
                    gametes_parent2: ["T (50%)", "t (50%)"],
                    offspring: [
                        "TT (25%) - homozygous dominant, tall",
                        "Tt (50%) - heterozygous, tall",
                        "tt (25%) - homozygous recessive, short"
                    ],
                    genotypicRatio: "1 TT : 2 Tt : 1 tt",
                    phenotypicRatio: "3 tall : 1 short"
                },
                
                cytologicalBasis: {
                    homologousChromosomes: "Carry alleles for same genes at same loci",
                    meiosis_I: "Homologous chromosomes separate → each gamete gets one chromosome of each pair",
                    result: "Each gamete receives one allele for each gene",
                    proof: "Observed ratio matches predicted chromosome segregation"
                },
                
                importance: "Explains 3:1 ratio in F2 and proves alleles remain discrete (don't blend)",
                
                mathematicalExpression: {
                    probability_each_gamete: "For Aa parent: P(A) = 1/2, P(a) = 1/2",
                    offspring_from_Aa_x_Aa: [
                        "P(AA) = 1/2 × 1/2 = 1/4",
                        "P(Aa) = 1/2 × 1/2 + 1/2 × 1/2 = 1/2",
                        "P(aa) = 1/2 × 1/2 = 1/4"
                    ]
                }
            },
            
            lawOfIndependentAssortment: {
                statement: "Alleles of different genes assort independently of one another during gamete formation",
                alternativeStatement: "The segregation of alleles for one gene does not influence the segregation of alleles for another gene",
                
                keyPoints: [
                    "Applies to genes on DIFFERENT chromosomes (or far apart on same)",
                    "Each gene segregates independently",
                    "All combinations of alleles are equally likely",
                    "Produces genetic variation"
                ],
                
                example: {
                    genes: "Seed shape (R/r) and seed color (Y/y)",
                    dihybrid: "RrYy parent",
                    gametes: "RY, Ry, rY, ry (each 25%)",
                    independence: "Getting R or r does NOT affect getting Y or y"
                },
                
                dihybridCross: {
                    parents: "RrYy × RrYy",
                    gametes: "Each parent produces RY, Ry, rY, ry in equal proportions",
                    F2_ratio: "9:3:3:1",
                    breakdown: {
                        "9/16": "R_Y_ (both dominant)",
                        "3/16": "R_yy (first dominant, second recessive)",
                        "3/16": "rrY_ (first recessive, second dominant)",
                        "1/16": "rryy (both recessive)"
                    }
                },
                
                derivation: {
                    method: "Multiply two 3:1 ratios",
                    calculation: "(3:1) × (3:1) = 9:3:3:1",
                    proof: "3/4 × 3/4 = 9/16, 3/4 × 1/4 = 3/16, etc."
                },
                
                cytologicalBasis: {
                    different_chromosomes: "Genes on different chromosomes segregate independently",
                    meiosis: "Chromosomes line up randomly at metaphase I",
                    combinations: "2^n possible gamete combinations (n = # heterozygous genes)",
                    example: "For RrYy: 2² = 4 gamete types"
                },
                
                exception: {
                    linkedGenes: "Genes on SAME chromosome do NOT assort independently",
                    discovery: "Thomas Hunt Morgan discovered linked genes in Drosophila (1910s)",
                    deviation: "Linked genes show deviations from 9:3:3:1 ratio",
                    recombination: "Can still recombine via crossing over, but less than 50%"
                },
                
                importance: "Source of genetic variation; explains inheritance of multiple traits",
                
                application: {
                    breeding: "Can combine desirable traits from different parents",
                    prediction: "Can predict outcomes of complex crosses",
                    evolution: "Provides raw material for natural selection"
                }
            }
        },
        
        mendelsPeaPlants: {
            whyPeas: {
                practical: [
                    "Easy to grow in monastery garden",
                    "Inexpensive to maintain",
                    "Can grow many plants (large sample size)",
                    "Short generation time (~3 months)",
                    "Produce many offspring per plant (statistical power)"
                ],
                biological: [
                    "Normally self-pollinating (easy to get true-breeding)",
                    "Can be manually cross-pollinated (experimental control)",
                    "Perfect flowers (both male and female parts)",
                    "Many varieties available from seed suppliers"
                ],
                genetic: [
                    "Seven traits with clear either/or phenotypes (no intermediates)",
                    "Traits show simple dominant/recessive patterns",
                    "True-breeding varieties available for each trait",
                    "Fortunately, the seven traits Mendel chose are on different chromosomes or far apart (unlinked)"
                ]
            },
            
            sevenTraits: [
                {
                    number: 1,
                    trait: "Plant height (stem length)",
                    dominant: "Tall (6-7 feet) - T",
                    recessive: "Short/Dwarf (9-18 inches) - t",
                    F2_ratio: "787 tall : 277 short = 2.84:1 ≈ 3:1",
                    gene: "Le gene (affects gibberellin synthesis)",
                    note: "Most dramatic visual difference"
                },
                {
                    number: 2,
                    trait: "Seed shape (form)",
                    dominant: "Round/Smooth - R",
                    recessive: "Wrinkled/Angular - r",
                    F2_ratio: "5,474 round : 1,850 wrinkled = 2.96:1 ≈ 3:1",
                    gene: "Gene affects starch branching enzyme",
                    molecular: "Wrinkled has transposon insertion, high sugar content"
                },
                {
                    number: 3,
                    trait: "Seed color (cotyledon color)",
                    dominant: "Yellow - Y",
                    recessive: "Green - y",
                    F2_ratio: "6,022 yellow : 2,001 green = 3.01:1",
                    gene: "SGR gene (stay-green gene)",
                    molecular: "Yellow allele degrades chlorophyll"
                },
                {
                    number: 4,
                    trait: "Pod shape (inflated vs constricted)",
                    dominant: "Inflated/Smooth - I",
                    recessive: "Constricted/Pinched - i",
                    F2_ratio: "882 inflated : 299 constricted = 2.95:1 ≈ 3:1"
                },
                {
                    number: 5,
                    trait: "Pod color",
                    dominant: "Green - G",
                    recessive: "Yellow - g",
                    F2_ratio: "428 green : 152 yellow = 2.82:1 ≈ 3:1"
                },
                {
                    number: 6,
                    trait: "Flower position",
                    dominant: "Axial (along stem) - A",
                    recessive: "Terminal (top only) - a",
                    F2_ratio: "651 axial : 207 terminal = 3.14:1"
                },
                {
                    number: 7,
                    trait: "Flower color",
                    dominant: "Purple/Violet - P",
                    recessive: "White - p",
                    F2_ratio: "705 purple : 224 white = 3.15:1",
                    gene: "Affects anthocyanin pigment production"
                }
            ],
            
            fortunateChoices: {
                unlinked: "All seven traits happened to be on different chromosomes or far apart",
                consequence: "Showed independent assortment perfectly",
                if_linked: "Would have gotten confusing ratios, might not have discovered laws",
                modern: "Pea genome has 7 chromosome pairs; Mendel's traits distributed across them"
            }
        },
        
        mendelianRatios: {
            monohybridF2: {
                cross: "Aa × Aa",
                genotypic: "1 AA : 2 Aa : 1 aa",
                phenotypic: "3 dominant : 1 recessive (3:1)",
                probabilities: {
                    dominant_phenotype: "3/4 = 75%",
                    recessive_phenotype: "1/4 = 25%",
                    heterozygous: "2/4 = 50%"
                }
            },
            
            dihybridF2: {
                cross: "AaBb × AaBb",
                phenotypic: "9:3:3:1",
                genotypic: "Complex (9 different genotypes)",
                phenotypes: {
                    both_dominant: "9/16",
                    first_dom_second_rec: "3/16",
                    first_rec_second_dom: "3/16",
                    both_recessive: "1/16"
                }
            },
            
            testCross: {
                purpose: "Determine unknown genotype",
                method: "Cross with homozygous recessive",
                if_homozygous_dominant: "AA × aa → 100% Aa (all dominant)",
                if_heterozygous: "Aa × aa → 50% Aa, 50% aa (1:1 ratio)"
            },
            
            backcross: {
                definition: "Cross of hybrid with one of its parents",
                purpose: "Can increase proportion of desired traits",
                F1_x_P: "Tt × TT → all dominant phenotype"
            }
        },
        
        punnettSquareMethod: {
            purpose: "Visual tool to predict offspring genotypes and phenotypes",
            inventor: "Reginald Punnett (1905) - English geneticist, colleague of Bateson",
            
            steps: [
                {
                    step: 1,
                    action: "Determine parental genotypes",
                    example: "Parent 1: Tt, Parent 2: Tt"
                },
                {
                    step: 2,
                    action: "Determine possible gametes from each parent",
                    method: "Apply law of segregation - each gamete gets one allele",
                    example: "Tt produces T and t gametes"
                },
                {
                    step: 3,
                    action: "Draw Punnett square grid",
                    size: "2×2 for monohybrid, 4×4 for dihybrid",
                    example: "2×2 square for Tt × Tt"
                },
                {
                    step: 4,
                    action: "Write one parent's gametes across top",
                    example: "T and t across top"
                },
                {
                    step: 5,
                    action: "Write other parent's gametes down left side",
                    example: "T and t down left"
                },
                {
                    step: 6,
                    action: "Fill in boxes by combining gametes",
                    example: "Top-left: T + T = TT"
                },
                {
                    step: 7,
                    action: "Count genotypes and phenotypes",
                    example: "1 TT, 2 Tt, 1 tt → 3 tall : 1 short"
                },
                {
                    step: 8,
                    action: "Calculate ratios and probabilities",
                    example: "Genotypic ratio 1:2:1, Phenotypic ratio 3:1"
                }
            ],
            
            example_worked: {
                problem: "Cross two heterozygous tall pea plants",
                parents: "Tt × Tt",
                gametes: {
                    parent1: ["T", "t"],
                    parent2: ["T", "t"]
                },
                punnettSquare: [
                    ["", "T", "t"],
                    ["T", "TT", "Tt"],
                    ["t", "Tt", "tt"]
                ],
                genotypes: {
                    TT: "1 (25%)",
                    Tt: "2 (50%)",
                    tt: "1 (25%)"
                },
                phenotypes: {
                    tall: "3 (75%)",
                    short: "1 (25%)"
                },
                answer: "3:1 tall:short ratio"
            },
            
            limitations: [
                "Can become unwieldy for many genes (4×4 for dihybrid, 8×8 for trihybrid)",
                "Doesn't show mechanisms, just outcomes",
                "Assumes independent assortment (not valid for linked genes)",
                "Assumes equal viability of all genotypes"
            ],
            
            alternatives: {
                branch_diagram: "Better for 3+ traits",
                probability_method: "Faster for complex crosses",
                forked_line: "Efficient for multiple traits"
            }
        },
        
        probabilityRules: {
            product_rule: {
                statement: "Probability of two or more independent events occurring TOGETHER equals the product of their individual probabilities",
                symbol: "P(A AND B) = P(A) × P(B)",
                when: "Use for 'AND' questions",
                
                examples: [
                    {
                        question: "What is probability of getting TT offspring from Tt × Tt?",
                        solution: "P(T from parent 1) × P(T from parent 2) = 1/2 × 1/2 = 1/4"
                    },
                    {
                        question: "Probability of tall AND yellow from TtYy × TtYy?",
                        solution: "P(tall) × P(yellow) = 3/4 × 3/4 = 9/16"
                    }
                ]
            },
            
            sum_rule: {
                statement: "Probability of either of two mutually exclusive events equals sum of individual probabilities",
                symbol: "P(A OR B) = P(A) + P(B)",
                when: "Use for 'OR' questions with mutually exclusive outcomes",
                
                examples: [
                    {
                        question: "Probability of Tt OR TT from Tt × Tt?",
                        solution: "P(TT) + P(Tt) = 1/4 + 1/2 = 3/4"
                    },
                    {
                        question: "Probability of at least one recessive trait from AaBb × AaBb?",
                        solution: "P(A_bb) + P(aaB_) + P(aabb) = 3/16 + 3/16 + 1/16 = 7/16"
                    }
                ]
            },
            
            multiplication_AND: "Used when calculating probability of multiple independent events all happening",
            addition_OR: "Used when calculating probability of one OR another mutually exclusive event"
        },
        
        modernMolecularBasis: {
            genesAreDNA: {
                discovery: "1940s-1950s (Avery, Hershey-Chase, Watson-Crick)",
                mendel: "Mendel's 'factors' are DNA sequences",
                location: "Genes located at specific loci on chromosomes"
            },
            
            allelesAreDNAVariations: {
                definition: "Alleles are different DNA sequences (often single nucleotide changes)",
                example: {
                    gene: "Pea seed shape gene (SBE1 - starch branching enzyme)",
                    R_allele: "Functional enzyme gene",
                    r_allele: "Gene with transposon insertion → non-functional enzyme"
                }
            },
            
            dominanceAtMolecularLevel: {
                typical_dominant: {
                    mechanism: "One functional gene copy produces enough protein for normal phenotype",
                    example: "T allele produces gibberellin → tall; one copy is sufficient"
                },
                typical_recessive: {
                    mechanism: "Loss-of-function mutation; need two defective copies for phenotype",
                    example: "t allele produces no gibberellin; tt plants are short"
                },
                haploinsufficiency: {
                    exception: "One copy NOT sufficient (shows incomplete dominance)",
                    example: "Familial hypercholesterolemia - heterozygotes have intermediate cholesterol"
                }
            },
            
            segregationDuringMeiosis: {
                mechanism: "Homologous chromosomes separate in meiosis I",
                result: "Each gamete receives one chromosome of each pair",
                consequence: "Each gamete gets one allele of each gene",
                proof: "Cytological observations match Mendelian predictions"
            }
        },
        
        applications: {
            agriculture: [
                "Crop improvement through selective breeding",
                "Predicting outcomes of plant crosses",
                "Maintaining desirable traits in livestock",
                "Hybrid vigor (heterosis) in crops",
                "Breeding for disease resistance"
            ],
            
            medicine: [
                "Understanding genetic diseases (autosomal dominant/recessive)",
                "Genetic counseling and risk assessment",
                "Predicting carrier status",
                "Explaining inheritance patterns in families",
                "Foundation for molecular genetics and gene therapy"
            ],
            
            research: [
                "Model organism genetics (Drosophila, mice, etc.)",
                "Gene mapping and linkage analysis",
                "Forward genetics (phenotype → genotype)",
                "Understanding complex trait inheritance",
                "Evolutionary genetics"
            ],
            
            forensics: [
                "DNA fingerprinting based on Mendelian inheritance",
                "Paternity testing",
                "Genetic markers follow Mendelian patterns"
            ]
        },
        
        commonMisconceptions: {
            dominance: [
                "WRONG: Dominant alleles are 'better', 'stronger', or 'more common'",
                "CORRECT: Dominant just means expressed in heterozygote; can be rare and harmful",
                "WRONG: Recessive alleles will disappear from population",
                "CORRECT: Recessive alleles maintained in heterozygous carriers"
            ],
            
            ratios: [
                "WRONG: Expecting exactly 3:1 ratio every time",
                "CORRECT: 3:1 is expected average; random variation causes deviations",
                "WRONG: Small deviations mean hypothesis is wrong",
                "CORRECT: Use chi-square test to determine if deviations are significant"
            ],
            
            inheritance: [
                "WRONG: Traits blend permanently",
                "CORRECT: Alleles remain discrete; recessive traits can reappear in later generations",
                "WRONG: Children are perfect blends of parents",
                "CORRECT: Children inherit discrete alleles, not blended traits"
            ]
        },
        
        historicalImpact: {
            immediate: "Paper published 1866, largely ignored for 34 years",
            rediscovery: "1900 - three scientists independently confirmed his work",
            chromosomeTheory: "1902 - Sutton and Boveri proposed genes on chromosomes",
            modernSynthesis: "1930s-1940s - Mendel's laws integrated with Darwin's evolution",
            molecularAge: "1950s onward - molecular basis of Mendel's laws revealed",
            today: "Foundation of all genetics, genomics, biotechnology"
        },
        
        practicalExamples: [
            {
                trait: "Human widow's peak",
                dominant: "W (widow's peak)",
                recessive: "w (straight hairline)",
                cross: "Ww × Ww → 3:1 ratio of widow's peak:straight"
            },
            {
                trait: "Pea plant height",
                dominant: "T (tall)",
                recessive: "t (short)",
                cross: "Tt × Tt → 75% tall, 25% short"
            },
            {
                trait: "Lab mouse coat color",
                dominant: "B (black)",
                recessive: "b (brown)",
                breeding: "Used to maintain lab strains"
            }
        ]
    };
    
    return content;
}

handleMonohybridCrosses(problem) {
    const content = {
        topic: "Monohybrid Crosses",
        category: 'genetic_crosses',
        summary: "A monohybrid cross tracks the inheritance of a single trait controlled by one gene with two alleles. These crosses demonstrate Mendel's Law of Segregation and produce predictable ratios in offspring.",
        
        definition: {
            monohybrid: "Cross between two individuals that differ in only ONE trait",
            focus: "Examines inheritance of single gene with two alleles",
            simplest: "Simplest type of genetic cross",
            demonstrates: "Mendel's Law of Segregation and Law of Dominance"
        },
        
        typicalSetup: {
            P_generation: {
                description: "True-breeding parents differing in one trait",
                parent1: "Homozygous dominant (AA)",
                parent2: "Homozygous recessive (aa)",
                trueBreeding: "Each produces offspring identical to itself when self-pollinated"
            },
            
            F1_generation: {
                cross: "AA × aa",
                gametes: {
                    AA_parent: "All A",
                    aa_parent: "All a"
                },
                offspring: "100% Aa (all heterozygous)",
                phenotype: "All show dominant trait",
                observation: "Recessive trait disappears in F1",
                importance: "Demonstrates dominance"
            },
            
            F2_generation: {
                cross: "Aa × Aa (F1 × F1 self-cross)",
                gametes: "Each parent produces A and a (50:50)",
                offspring_genotypes: "1 AA : 2 Aa : 1 aa",
                offspring_phenotypes: "3 dominant : 1 recessive",
                observation: "Recessive trait reappears",
                importance: "Demonstrates segregation and proves alleles don't blend"
            }
        },
        
        detailedExample_peaHeight: {
            trait: "Plant height in pea plants",
            gene: "Le gene (affects gibberellin synthesis)",
            alleles: {
                T: "Tall allele (dominant) - functional gibberellin synthesis",
                t: "Short/dwarf allele (recessive) - reduced gibberellin"
            },
            
            P_cross: {
                parents: "TT (tall, 6-7 feet) × tt (short, 9-18 inches)",
                parent1_gametes: "All T",
                parent2_gametes: "All t",
                fertilization: "T + t = Tt"
            },
            
            F1_results: {
                genotype: "100% Tt",
                phenotype: "100% tall (6-7 feet)",
                height: "Same height as TT parent",
                observation: "Short trait completely masked",
                conclusion: "Tall (T) is dominant over short (t)"
            },
            
            F1_self_pollination: {
                cross: "Tt × Tt",
                gametes_from_each: "50% T, 50% t",
                mechanism: "Law of Segregation - alleles separate during meiosis"
            },
            
            F2_punnettSquare: {
                setup: [
                    ["", "T (50%)", "t (50%)"],
                    ["T (50%)", "TT (25%)", "Tt (25%)"],
                    ["t (50%)", "Tt (25%)", "tt (25%)"]
                ],
                genotypes: {
                    TT: "1/4 = 25% (homozygous dominant, tall)",
                    Tt: "2/4 = 50% (heterozygous, tall)",
                    tt: "1/4 = 25% (homozygous recessive, short)"
                },
                phenotypes: {
                    tall: "3/4 = 75% (TT + Tt)",
                    short: "1/4 = 25% (tt)"
                }
            },
            
            F2_ratios: {
                genotypic: "1:2:1 (TT:Tt:tt)",
                phenotypic: "3:1 (tall:short)",
                classic: "The famous 3:1 Mendelian ratio"
            },
            
            actualMendelData: {
                tall_plants: 787,
                short_plants: 277,
                total: 1064,
                observed_ratio: "787:277 = 2.84:1 ≈ 3:1",
                expected_tall: "1064 × 3/4 = 798",
                expected_short: "1064 × 1/4 = 266",
                fit: "Excellent fit to predicted 3:1 ratio"
            }
        },
        
        allPossibleMonohybridCrosses: {
            cross1: {
                parents: "AA × AA (homozygous dominant × homozygous dominant)",
                offspring: "100% AA",
                phenotype: "100% dominant trait",
                ratio: "No variation",
                use: "Maintaining pure-breeding line"
            },
            
            cross2: {
                parents: "AA × Aa (homozygous dominant × heterozygous)",
                punnettSquare: [
                    ["", "A", "A"],
                    ["A", "AA", "AA"],
                    ["a", "Aa", "Aa"]
                ],
                offspring: "50% AA, 50% Aa",
                phenotype: "100% dominant",
                genotypicRatio: "1:1",
                phenotypicRatio: "All dominant (no ratio)",
                use: "Cannot distinguish AA from Aa by appearance"
            },
            
            cross3: {
                parents: "AA × aa (homozygous dominant × homozygous recessive)",
                offspring: "100% Aa",
                phenotype: "100% dominant trait",
                ratio: "No variation in F1",
                note: "Classic P generation cross",
                F2: "Aa × Aa → 3:1 ratio"
            },
            
            cross4: {
                parents: "Aa × Aa (heterozygous × heterozygous)",
                offspring: "25% AA, 50% Aa, 25% aa",
                phenotype: "75% dominant, 25% recessive",
                genotypicRatio: "1:2:1",
                phenotypicRatio: "3:1",
                note: "CLASSIC F2 cross - most important ratio",
                use: "Standard for testing Mendel's law"
            },
            
            cross5: {
                parents: "Aa × aa (heterozygous × homozygous recessive)",
                punnettSquare: [
                    ["", "A", "a"],
                    ["a", "Aa", "aa"],
                    ["a", "Aa", "aa"]
                ],
                offspring: "50% Aa, 50% aa",
                phenotype: "50% dominant, 50% recessive",
                ratio: "1:1",
                name: "TEST CROSS or BACKCROSS",
                use: "Determine if individual is AA or Aa",
                importance: "Critical for genetic analysis"
            },
            
            cross6: {
                parents: "aa × aa (homozygous recessive × homozygous recessive)",
                offspring: "100% aa",
                phenotype: "100% recessive trait",
                ratio: "No variation",
                use: "Maintaining recessive line, genetic analysis"
            }
        },
        
        testCross: {
            purpose: "Determine genotype of individual showing dominant phenotype",
            question: "Is the tall plant TT or Tt?",
            
            method: {
                procedure: "Cross unknown genotype with homozygous recessive (aa)",
                rationale: "Recessive parent can only contribute 'a', so offspring reveal unknown parent's alleles"
            },
            
            interpretation: {
                if_unknown_is_TT: {
                    cross: "TT × tt",
                    offspring: "100% Tt",
                    phenotype: "100% tall (all dominant)",
                    conclusion: "Unknown parent is homozygous dominant (TT)"
                },
                
                if_unknown_is_Tt: {
                    cross: "Tt × tt",
                    offspring: "50% Tt, 50% tt",
                    phenotype: "50% tall, 50% short (1:1 ratio)",
                    conclusion: "Unknown parent is heterozygous (Tt)"
                }
            },
            
            example: {
                scenario: "You have a black guinea pig. Black (B) is dominant over white (b). Is it BB or Bb?",
                testCross: "Cross with white guinea pig (bb)",
                result1: "If all offspring black → parent was BB",
                result2: "If ~50% black, ~50% white → parent was Bb",
                note: "Need large sample size to distinguish (10+ offspring)"
            },
            
            importance: [
                "Essential tool in breeding programs",
                "Used to identify carriers of recessive alleles",
                "Can't determine genotype from phenotype alone for dominant traits",
                "Widely used in agriculture and research"
            ]
        },
        
        probabilityCalculations: {
            basic_probabilities: {
                P_of_AA_from_Aa_x_Aa: {
                    method: "P(A from parent 1) × P(A from parent 2)",
                    calculation: "1/2 × 1/2 = 1/4 = 25%"
                },
                
                P_of_Aa_from_Aa_x_Aa: {
                    method: "Can get Aa two ways: A from P1 and a from P2, OR a from P1 and A from P2",
                    calculation: "(1/2 × 1/2) + (1/2 × 1/2) = 1/4 + 1/4 = 1/2 = 50%"
                },
                
                P_of_dominant_phenotype: {
                    from_Aa_x_Aa: "P(AA) + P(Aa) = 1/4 + 1/2 = 3/4 = 75%",
                    alternative: "1 - P(aa) = 1 - 1/4 = 3/4"
                }
            },
            
            product_rule_examples: [
                {
                    question: "What is probability of first two offspring from Aa × Aa both being aa?",
                    solution: "P(aa) × P(aa) = 1/4 × 1/4 = 1/16"
                },
                {
                    question: "Probability of three heterozygous offspring in a row from Aa × Aa?",
                    solution: "P(Aa)³ = (1/2)³ = 1/8"
                }
            ],
            
            sum_rule_examples: [
                {
                    question: "Probability of offspring being either AA or Aa from Aa × Aa?",
                    solution: "P(AA) + P(Aa) = 1/4 + 1/2 = 3/4"
                }
            ]
        },
        
        branchDiagramMethod: {
            description: "Alternative to Punnett square for calculating probabilities",
            advantages: ["Faster for simple crosses", "Easily extends to multiple traits", "Shows probability directly"],
            
            example_Aa_x_Aa: {
                step1: "Consider possible gametes from Parent 1",
                branch1: "A (probability 1/2)",
                branch2: "a (probability 1/2)",
                
                step2: "For each branch, consider gametes from Parent 2",
                subBranches: [
                    "A → A (1/2 × 1/2 = 1/4) → AA",
                    "A → a (1/2 × 1/2 = 1/4) → Aa",
                    "a → A (1/2 × 1/2 = 1/4) → Aa",
                    "a → a (1/2 × 1/2 = 1/4) → aa"
                ],
                
                result: "1/4 AA, 1/2 Aa, 1/4 aa"
            }
        },
        
        humanExamples: {
            widowsPeak: {
                trait: "Hairline shape",
                dominant: "W - widow's peak (V-shaped hairline)",
                recessive: "w - straight hairline",
                cross: "Ww × Ww → 3:1 ratio",
                population: "About 30% of population has widow's peak"
            },
            
            earlobe: {
                trait: "Earlobe attachment",
                dominant: "E - free (unattached) earlobes",
                recessive: "e - attached earlobes",
                cross: "Ee × Ee → 75% free, 25% attached",
                note: "Simplified model; actually polygenic"
            },
            
            tongueRolling: {
                trait: "Ability to roll tongue into U-shape",
                dominant: "R - can roll",
                recessive: "r - cannot roll",
                cross: "Rr × Rr → 75% rollers, 25% non-rollers",
                caveat: "More complex than simple Mendelian; environmental factors involved"
            },
            
            pku: {
                trait: "Phenylketonuria (metabolic disorder)",
                dominant: "P - normal",
                recessive: "p - PKU (cannot metabolize phenylalanine)",
                cross: "Two carrier parents (Pp × Pp) → 25% risk of affected child",
                treatment: "PKU detected at birth, managed with diet",
                importance: "Classic example of recessive genetic disease"
            },
            
            note: "Many human traits are more complex than simple Mendelian (polygenic, environmental influences), but these provide useful approximations"
        },
        
        stepByStepProblemSolving: {
            problem: "In pea plants, purple flowers (P) are dominant over white flowers (p). Cross two heterozygous purple-flowered plants.",
            
            step1: {
                task: "Write parental genotypes",
                answer: "Pp × Pp"
            },
            
            step2: {
                task: "Determine possible gametes from each parent",
                parent1: "P and p (50% each)",
                parent2: "P and p (50% each)",
                rule: "Each gamete gets ONE allele (Law of Segregation)"
            },
            
            step3: {
                task: "Set up Punnett square",
                grid: [
                    ["", "P", "p"],
                    ["P", "", ""],
                    ["p", "", ""]
                ]
            },
            
            step4: {
                task: "Fill in offspring genotypes",
                completed: [
                    ["", "P", "p"],
                    ["P", "PP", "Pp"],
                    ["p", "Pp", "pp"]
                ]
            },
            
            step5: {
                task: "Count genotypes",
                PP: "1 (25%)",
                Pp: "2 (50%)",
                pp: "1 (25%)",
                genotypic_ratio: "1:2:1"
            },
            
            step6: {
                task: "Determine phenotypes",
                purple: "PP and Pp = 3 (75%)",
                white: "pp = 1 (25%)",
                phenotypic_ratio: "3:1"
            },
            
            step7: {
                task: "Answer questions",
                questions: [
                    "What percentage will be white? 25%",
                    "What is probability of first offspring being white? 1/4",
                    "If they have 4 offspring, how many will be white? Expected 1, but could be 0-4 due to chance"
                ]
            }
        },
        
        importantConcepts: {
            trueBreeding: {
                definition: "Organisms that always produce offspring with same phenotype when self-crossed",
                genotype: "Must be homozygous (AA or aa)",
                importance: "Essential for establishing pure lines",
                mendel: "Mendel verified true-breeding for 2+ generations before experiments"
            },
            
            F1_uniformity: {
                observation: "All F1 from P cross (AA × aa) are identical",
                genotype: "All Aa",
                phenotype: "All show dominant trait",
                significance: "Demonstrates dominance, sets up F2 segregation"
            },
            
            F2_segregation: {
                observation: "F2 shows variation (3:1 ratio)",
                significance: "Proves alleles don't blend; they segregate intact",
                reappearance: "Recessive trait reappears, proving allele was preserved"
            },
            
            genotype_vs_phenotype: {
                problem: "Can't always determine genotype from phenotype",
                dominant_ambiguity: "AA and Aa look identical (both dominant phenotype)",
                solution: "Use test cross (cross with aa) to reveal genotype",
                recessive_clarity: "aa phenotype reveals aa genotype unambiguously"
            }
        },
        
        commonErrors: {
            mistake1: {
                error: "Putting genotypes outside Punnett square boxes",
                correct: "Gametes go outside (top and left), genotypes go inside boxes"
            },
            
            mistake2: {
                error: "Expecting exactly 3:1 ratio in small samples",
                correct: "3:1 is expected average; random variation causes deviations. Use chi-square test."
            },
            
            mistake3: {
                error: "Forgetting that each parent contributes ONE allele",
                correct: "Gametes are haploid; each carries one allele per gene"
            },
            
            mistake4: {
                error: "Thinking heterozygote Aa will produce more A gametes than a",
                correct: "Aa produces exactly 50% A and 50% a gametes (segregation)"
            },
            
            mistake5: {
                error: "Confusing genotypic ratio (1:2:1) with phenotypic ratio (3:1)",
                correct: "Genotypic counts allele combinations; phenotypic counts appearances"
            }
        },
        
        practiceProblems: [
            {
                level: "Basic",
                problem: "In cats, black color (B) is dominant over brown (b). Cross Bb × Bb.",
                questions: [
                    "What are the possible genotypes?",
                    "What is the genotypic ratio?",
                    "What is the phenotypic ratio?",
                    "What percentage will be brown?"
                ],
                answers: {
                    genotypes: "BB, Bb, bb",
                    genotypic_ratio: "1:2:1",
                    phenotypic_ratio: "3:1 (black:brown)",
                    brown_percentage: "25%"
                }
            },
            
            {
                level: "Intermediate",
                problem: "A tall pea plant is crossed with a short plant. All offspring are tall. The tall offspring are then self-crossed.",
                questions: [
                    "What was the genotype of the original tall plant?",
                    "What ratio is expected in the F2?",
                    "If you get 84 tall and 28 short in F2, does this fit the expected ratio?"
                ],
                answers: {
                    original_tall: "TT (because all F1 were tall)",
                    F2_ratio: "3:1 (tall:short)",
                    chi_square: "Yes, 84:28 = 3:1, fits expected ratio"
                }
            },
            
            {
                level: "Advanced",
                problem: "In a test cross of a black guinea pig, 5 black and 6 white offspring are produced. What was the genotype of the black parent?",
                analysis: "Test cross is black × white (bb). If black parent were BB, all offspring would be black. The 1:1 ratio of black:white indicates black parent was Bb.",
                answer: "Bb (heterozygous)"
            }
        ],
        
        realWorldApplications: {
            agriculture: [
                "Crop breeding: selecting for disease resistance",
                "Livestock improvement: breeding for meat/milk production",
                "Maintaining pure breeds in dogs, cats, livestock",
                "Predicting yield from hybrid crops"
            ],
            
            medicine: [
                "Genetic counseling for recessive diseases (PKU, sickle cell, CF)",
                "Calculating risk for carrier couples",
                "Understanding autosomal recessive inheritance",
                "Newborn screening programs"
            ],
            
            research: [
                "Forward genetics: identify genes from phenotypes",
                "Model organism studies (mice, flies, worms)",
                "Gene function analysis",
                "Breeding laboratory strains"
            ],
            
            forensics: [
                "Paternity testing based on Mendelian inheritance",
                "Understanding inheritance of DNA markers"
            ]
        },
        
        extensions: {
            F3_analysis: {
                description: "Self-cross F2 plants to verify genotypes",
                predictions: {
                    from_AA: "All offspring dominant phenotype",
                    from_Aa: "3:1 ratio reappears",
                    from_aa: "All offspring recessive phenotype"
                },
                use: "Confirms Mendelian predictions and genotypes"
            },
            
            multipleAlleles: "Extend to genes with >2 alleles (e.g., ABO blood)",
            incompleteDominance: "Consider intermediate phenotypes",
            environmentalEffects: "Explore how environment modifies phenotype",
            molecularBasis: "Connect to DNA, proteins, and enzyme function"
        }
    };
    
    return content;
}

handleDihybridCrosses(problem) {
    const content = {
        topic: "Dihybrid Crosses",
        category: 'genetic_crosses',
        summary: "Dihybrid crosses track the inheritance of two traits simultaneously, demonstrating Mendel's Law of Independent Assortment. When genes are on different chromosomes, F2 offspring show a characteristic 9:3:3:1 phenotypic ratio.",
        
        definition: {
            dihybrid: "Cross between two individuals that differ in TWO traits",
            focus: "Examines inheritance of two genes simultaneously",
            demonstrates: "Mendel's Law of Independent Assortment",
            complexity: "More complex than monohybrid; requires 4×4 Punnett square"
        },
        
        mendelClassicExample: {
            traits: {
                trait1: {
                    character: "Seed shape",
                    dominant: "R - Round",
                    recessive: "r - Wrinkled",
                    gene: "Starch branching enzyme gene"
                },
                trait2: {
                    character: "Seed color",
                    dominant: "Y - Yellow",
                    recessive: "y - Green",
                    gene: "Chlorophyll degradation gene"
                }
            },
            
            advantage: "Both traits visible in seeds; don't need to grow plants to score phenotype",
            
            P_generation: {
                parent1: "RRYY (round, yellow) - true-breeding",
                parent2: "rryy (wrinkled, green) - true-breeding",
                gametes: {
                    parent1: "All RY (100%)",
                    parent2: "All ry (100%)"
                },
                fertilization: "RY + ry = RrYy"
            },
            
            F1_generation: {
                genotype: "100% RrYy (dihybrid)",
                phenotype: "100% round, yellow",
                observation: "All F1 show both dominant traits",
                significance: "Demonstrates dominance for both traits"
            },
            
            F1_selfCross: {
                cross: "RrYy × RrYy",
                question: "What happens in F2?",
                possibilities: {
                    if_traits_linked: "Only parental types (round-yellow and wrinkled-green)",
                    if_traits_independent: "All four combinations including NEW combinations (round-green and wrinkled-yellow)"
                },
                mendelObservation: "Got all four types → traits assort independently"
            },
            
            F2_generation: {
                totalPlants: 556,
                phenotypes: {
                    round_yellow: 315,
                    round_green: 108,
                    wrinkled_yellow: 101,
                    wrinkled_green: 32
                },
                ratio: "315:108:101:32 ≈ 9:3:3:1",
                newCombinations: "Round-green and wrinkled-yellow are NEW (recombinant types)",
                significance: "Proves independent assortment"
            }
        },
        
        gameteFormation: {
            keyPrinciple: "Independent assortment means each gene segregates independently",
            
            RrYy_parent: {
                alleles: "Has R, r, Y, y",
                segregation: "R and r separate; Y and y separate",
                independence: "R/r segregation independent of Y/y segregation",
                
                gameteTypes: [
                    "RY - got R AND Y (25%)",
                    "Ry - got R AND y (25%)",
                    "rY - got r AND Y (25%)",
                    "ry - got r AND y (25%)"
                ],
                
                equality: "All four gamete types equally likely",
                formula: "2^n gamete types, where n = number of heterozygous genes (2^2 = 4)"
            },
            
            methods_to_determine: {
                FOIL_method: {
                    description: "Like multiplying binomials in algebra",
                    Rr_Yy: "(R or r)(Y or y)",
                    First: "RY",
                    Outer: "Ry",
                    Inner: "rY",
                    Last: "ry"
                },
                
                branch_diagram: {
                    step1: "First gene: R or r",
                    step2: "For each, second gene: Y or y",
                    result: "R→Y(RY), R→y(Ry), r→Y(rY), r→y(ry)"
                },
                
                grid_method: {
                    setup: "Write one gene's alleles vertically, other horizontally",
                    grid: [
                        ["", "Y", "y"],
                        ["R", "RY", "Ry"],
                        ["r", "rY", "ry"]
                    ]
                }
            },
            
            verification: {
                total: "Four gamete types from RrYy",
                each: "25% probability",
                sum: "25% + 25% + 25% + 25% = 100% ✓"
            }
        },
        
        F2_punnettSquare_4x4: {
            setup: {
                size: "4×4 grid (16 boxes)",
                top: "One parent's four gamete types (RY, Ry, rY, ry)",
                left: "Other parent's four gamete types (RY, Ry, rY, ry)",
                boxes: "16 offspring genotypes"
            },
            
            completed: [
                ["", "RY", "Ry", "rY", "ry"],
                ["RY", "RRYY", "RRYy", "RrYY", "RrYy"],
                ["Ry", "RRYy", "RRyy", "RrYy", "Rryy"],
                ["rY", "RrYY", "RrYy", "rrYY", "rrYy"],
                ["ry", "RrYy", "Rryy", "rrYy", "rryy"]
            ],
            
            genotypes: {
                total: "9 different genotypes (some appear multiple times)",
                breakdown: [
                    "RRYY (1)",
                    "RRYy (2)",
                    "RRyy (1)",
                    "RrYY (2)",
                    "RrYy (4) - most common",
                    "Rryy (2)",
                    "rrYY (1)",
                    "rrYy (2)",
                    "rryy (1)"
                ]
            },
            
            phenotypes: {
                round_yellow: "9/16 (R_Y_) - both dominant traits",
                round_green: "3/16 (R_yy) - first dominant, second recessive",
                wrinkled_yellow: "3/16 (rrY_) - first recessive, second dominant",
                wrinkled_green: "1/16 (rryy) - both recessive traits"
            },
            
            ratio_9_3_3_1: {
                value: "9:3:3:1",
                name: "Classic dihybrid ratio",
                meaning: "9 both dominant : 3 first only : 3 second only : 1 both recessive",
                percentage: "56.25% : 18.75% : 18.75% : 6.25%",
                fraction: "9/16 : 3/16 : 3/16 : 1/16"
            }
        },
        
        derivingThe9331Ratio: {
            method1_punnettSquare: "Count phenotypes in completed 4×4 square",
            
            method2_multiplication: {
                principle: "Combine two 3:1 ratios",
                shape_alone: "Rr × Rr → 3 round : 1 wrinkled",
                color_alone: "Yy × Yy → 3 yellow : 1 green",
                multiply: "(3:1) × (3:1)",
                calculation: {
                    both_dom: "3 × 3 = 9",
                    first_dom: "3 × 1 = 3",
                    second_dom: "1 × 3 = 3",
                    both_rec: "1 × 1 = 1"
                },
                result: "9:3:3:1"
            },
            
            method3_probability: {
                round_yellow: "P(R_) × P(Y_) = 3/4 × 3/4 = 9/16",
                round_green: "P(R_) × P(yy) = 3/4 × 1/4 = 3/16",
                wrinkled_yellow: "P(rr) × P(Y_) = 1/4 × 3/4 = 3/16",
                wrinkled_green: "P(rr) × P(yy) = 1/4 × 1/4 = 1/16",
                total: "9/16 + 3/16 + 3/16 + 1/16 = 16/16 = 1 ✓"
            },
            
            elegance: "All three methods give same answer, confirming independent assortment"
        },
        
        independentAssortmentExplained: {
            definition: "Alleles of different genes segregate independently during gamete formation",
            
            meaning: {
                independence: "Inheriting R or r doesn't affect inheriting Y or y",
                all_combinations: "All combinations of alleles equally likely in gametes",
                example: "Getting R doesn't make Y more or less likely"
            },
            
            mechanism: {
                chromosomes: "Genes on different chromosomes assort independently",
                meiosis: "During meiosis I, chromosome pairs orient randomly",
                metaphase_I: "Independent alignment of homologous pairs",
                result: "All gamete combinations equally likely"
            },
            
            mendelFortune: {
                lucky: "Mendel's seven traits happened to be unlinked",
                if_linked: "Would have seen deviations from 9:3:3:1",
                consequence: "Allowed him to discover independent assortment",
                modern: "We now know pea has 7 chromosome pairs; traits distributed across them"
            },
            
            exception_linkedGenes: {
                definition: "Genes on same chromosome do NOT assort independently",
                consequence: "See more parental types, fewer recombinant types",
                ratio: "Deviates from 9:3:3:1 (e.g., 13:3 or other modified ratios)",
                discovery: "Thomas Hunt Morgan discovered linkage in Drosophila (1910s)",
                use: "Linkage used to map genes on chromosomes"
            }
        },
        
        alternativeToPunnettSquare: {
            branch_diagram: {
                advantages: [
                    "Faster for dihybrid and beyond",
                    "Shows probability directly",
                    "Easier to extend to 3+ traits",
                    "Less error-prone for complex crosses"
                ],
                
                method: {
                    step1: "Branch for first trait",
                    trait1: "3/4 R_ (round), 1/4 rr (wrinkled)",
                    
                    step2: "For each branch, add second trait",
                    from_R: "3/4 R_ → [3/4 Y_ yellow, 1/4 yy green]",
                    from_r: "1/4 rr → [3/4 Y_ yellow, 1/4 yy green]",
                    
                    step3: "Multiply probabilities along branches",
                    results: [
                        "R_Y_: 3/4 × 3/4 = 9/16",
                        "R_yy: 3/4 × 1/4 = 3/16",
                        "rrY_: 1/4 × 3/4 = 3/16",
                        "rryy: 1/4 × 1/4 = 1/16"
                    ]
                }
            },
            
            forked_line_method: {
                description: "Visual branch diagram",
                step1: "Draw branches for first trait (3:1)",
                step2: "From each branch, draw branches for second trait (3:1)",
                step3: "Multiply probabilities and count outcomes"
            }
        },
        
        testCross_dihybrid: {
            purpose: "Verify that F1 plant is dihybrid (RrYy)",
            method: "Cross F1 with double recessive (rryy)",
            
            cross: "RrYy × rryy",
            
            expected: {
                gametes_RrYy: "RY, Ry, rY, ry (each 25%)",
                gametes_rryy: "Only ry (100%)",
                
                offspring: [
                    "RrYy (25%) - round, yellow",
                    "Rryy (25%) - round, green",
                    "rrYy (25%) - wrinkled, yellow",
                    "rryy (25%) - wrinkled, green"
                ],
                
                ratio: "1:1:1:1 (equal proportions of all four phenotypes)",
                observation: "All four phenotypic classes in equal numbers confirms RrYy genotype"
            },
            
            use: "Genetic mapping and linkage analysis"
        },
        
        examples_otherOrganisms: {
            corn_kernels: {
                trait1: "Kernel color: Purple (P) vs Yellow (p)",
                trait2: "Kernel texture: Smooth (S) vs Wrinkled (s)",
                cross: "PpSs × PpSs",
                advantage: "Can score many kernels on single ear",
                expected: "9 purple smooth : 3 purple wrinkled : 3 yellow smooth : 1 yellow wrinkled"
            },
            
            fruit_flies: {
                trait1: "Body color: Gray (G) vs Ebony (g)",
                trait2: "Wing length: Normal (V) vs Vestigial (v)",
                cross: "GgVv × GgVv",
                advantage: "Short generation time, many offspring",
                use: "Morgan used flies to study linkage"
            },
            
            dogs: {
                trait1: "Coat color: Black (B) vs Brown (b)",
                trait2: "Coat texture: Curly (C) vs Straight (c)",
                cross: "BbCc × BbCc",
                application: "Breeding for desired combinations",
                note: "Many dog traits are polygenic, but some show Mendelian patterns"
            }
        },
        
        probability_problems: {
            problem1: {
                question: "From RrYy × RrYy, what is probability of offspring that is round and homozygous for color?",
                analysis: "Need R_YY or R_yy",
                calculation: {
                    R_YY: "P(R_) × P(YY) = 3/4 × 1/4 = 3/16",
                    R_yy: "P(R_) × P(yy) = 3/4 × 1/4 = 3/16",
                    total: "3/16 + 3/16 = 6/16 = 3/8"
                }
            },
            
            problem2: {
                question: "Probability of offspring showing at least one recessive trait from RrYy × RrYy?",
                method: "Easier to calculate complement",
                both_dominant: "P(R_Y_) = 9/16",
                at_least_one_recessive: "1 - 9/16 = 7/16"
            },
            
            problem3: {
                question: "What fraction of round, yellow offspring from RrYy × RrYy are heterozygous for both traits?",
                round_yellow_total: "9/16",
                RrYy_only: "4/16",
                fraction: "4/16 ÷ 9/16 = 4/9"
            }
        },
        
        deviations_from_9331: {
            linkedGenes: {
                ratio: "More parental types, fewer recombinant",
                example: "12:1:1:4 or other modified ratio",
                cause: "Genes on same chromosome",
                use: "Indicates linkage; used for gene mapping"
            },
            
            epistasis: {
                definition: "One gene masks expression of another",
                ratios: "9:3:4, 12:3:1, 9:7, 13:3, etc.",
                example: "Labrador coat color: 9 black : 3 chocolate : 4 yellow"
            },
            
            lethalAlleles: {
                ratio: "Modified due to some genotypes being lethal",
                example: "Yellow mice: 2 yellow : 1 agouti (instead of 3:1)",
                cause: "YY is lethal; only Yy and yy survive"
            },
            
            incomplete_dominance: {
                ratio: "More than 4 phenotypic classes",
                example: "If both traits show incomplete dominance → 9 phenotypes"
            }
        },
        
        extending_to_more_traits: {
            trihybrid: {
                genes: "Three traits (e.g., AaBbCc)",
                gametes: "2^3 = 8 gamete types",
                punnettSquare: "8×8 = 64 boxes (impractical)",
                F2_ratio: "27:9:9:9:3:3:3:1",
                method: "Use branch diagram or probability"
            },
            
            general_formula: {
                gamete_types: "2^n (n = number of heterozygous genes)",
                punnett_boxes: "(2^n)²",
                phenotypic_classes: "2^n (if all traits show dominance)",
                dominant_probability: "(3/4)^n",
                example: "For AaBbCc: 8 gamete types, 64 boxes, 8 phenotypes"
            }
        },
        
        real_world_applications: {
            agriculture: [
                "Breeding for multiple desirable traits (yield + disease resistance)",
                "Creating new varieties with combinations of traits",
                "Maintaining genetic diversity in crops",
                "Hybrid vigor from combining traits"
            ],
            
            genetic_counseling: [
                "Calculating risks when parents are carriers for multiple recessive conditions",
                "Example: Cystic fibrosis + PKU risk",
                "Compound heterozygotes"
            ],
            
            research: [
                "Gene mapping and linkage studies",
                "Understanding complex trait inheritance",
                "Model organism genetics",
                "Identifying new genes"
            ],
            
            evolution: [
                "Independent assortment generates variation",
                "Raw material for natural selection",
                "Explains genetic diversity in populations"
            ]
        },
        
        common_mistakes: {
            mistake1: {
                error: "Using 2×2 Punnett square instead of 4×4",
                consequence: "Missing genotypes and wrong ratios",
                correct: "Must use 4×4 for dihybrid (4 gamete types from each parent)"
            },
            
            mistake2: {
                error: "Forgetting to determine all four gamete types",
                consequence: "Incomplete analysis",
                correct: "RrYy produces RY, Ry, rY, ry (4 types, not 2)"
            },
            
            mistake3: {
                error: "Expecting exactly 9:3:3:1 in small samples",
                consequence: "Misinterpretation of data",
                correct: "Large sample needed for ratio to emerge; use chi-square test"
            },
            
            mistake4: {
                error: "Assuming all dihybrid crosses give 9:3:3:1",
                consequence: "Missing linkage or epistasis",
                correct: "9:3:3:1 only if genes unlinked and no gene interactions"
            },
            
            mistake5: {
                error: "Confusing phenotypic (9:3:3:1) with genotypic ratios",
                consequence: "Wrong predictions",
                correct: "9 phenotypic classes, but 9 different genotypes"
            }
        },
        
        practice_problems: [
            {
                level: "Basic",
                problem: "In guinea pigs, black fur (B) is dominant over white (b), and short hair (S) is dominant over long (s). Cross BbSs × BbSs.",
                questions: [
                    "How many different gamete types from each parent?",
                    "What is the expected phenotypic ratio in offspring?",
                    "What fraction will be black with long hair?"
                ],
                answers: {
                    gametes: "4 types (BS, Bs, bS, bs)",
                    ratio: "9:3:3:1",
                    black_long: "B_ss = 3/16"
                }
            },
            
            {
                level: "Intermediate",
                problem: "A dihybrid corn plant is test-crossed. The offspring are 31 purple smooth, 27 purple wrinkled, 32 yellow smooth, and 30 yellow wrinkled.",
                questions: [
                    "What is the observed ratio?",
                    "Does this fit independent assortment?",
                    "What was the genotype of the dihybrid parent?"
                ],
                answers: {
                    ratio: "Approximately 1:1:1:1",
                    fits: "Yes, this is expected for test cross of dihybrid",
                    genotype: "PpSs (heterozygous for both)"
                }
            },
            
            {
                level: "Advanced",
                problem: "From cross AaBb × AaBb, you observe 180 offspring with ratio 108:36:36 instead of expected 9:3:3:1. What might explain this?",
                analysis: "Missing one phenotypic class suggests lethality or epistasis",
                possibilities: [
                    "A_bb or aaB_ combination is lethal",
                    "Epistatic interaction between genes",
                    "Need more information to determine exact cause"
                ]
            }
        ],
        
        historical_significance: {
            mendelDiscovery: "Mendel performed thousands of dihybrid crosses",
            ratio: "Discovered 9:3:3:1 ratio through meticulous counting",
            independence: "Proposed that different traits inherit independently",
            proof: "Appearance of new combinations (recombinants) proved independence",
            foundation: "Laid groundwork for understanding genetic recombination and mapping"
        },
        
        modern_molecular_understanding: {
            chromosomes: "Genes on different chromosomes segregate independently during meiosis",
            metaphase_I: "Homologous pairs orient randomly at cell equator",
            combinations: "All chromosome combinations equally likely",
            result: "Produces genetic variation",
            exception: "Linked genes (same chromosome) don't assort independently"
        }
    };
    
    return content;
}

handleTestCrosses(problem) {
    const content = {
        topic: "Test Crosses and Backcrosses",
        category: 'genetic_analysis',
        summary: "Test crosses are used to determine the unknown genotype of an organism showing a dominant phenotype by crossing it with a homozygous recessive individual. The offspring ratios reveal whether the unknown parent is homozygous dominant or heterozygous.",
        
        definitions: {
            testCross: {
                definition: "Cross between an individual with unknown genotype (showing dominant phenotype) and a homozygous recessive individual",
                symbol: "A_ × aa (where A_ could be AA or Aa)",
                purpose: "Determine genotype of dominant phenotype individual",
                principle: "Recessive parent can only contribute recessive allele, so offspring reveal unknown parent's alleles"
            },
            
            backcross: {
                definition: "Cross of hybrid/heterozygote with one of its parents or parental type",
                types: [
                    "Cross to recessive parent (often same as test cross)",
                    "Cross to dominant parent"
                ],
                purpose: "Recover parental genotypes or increase frequency of desired traits",
                breeding: "Used extensively in plant and animal breeding"
            }
        },
        
        rationale: {
            problem: "Cannot determine genotype from dominant phenotype alone",
            example: "Tall pea plant could be TT or Tt - both look identical",
            solution: "Test cross reveals hidden alleles",
            
            mechanism: {
                recessive_parent: "tt can only give 't' allele",
                if_unknown_TT: "TT × tt → all Tt (all tall)",
                if_unknown_Tt: "Tt × tt → 1 Tt : 1 tt (50% tall, 50% short)",
                conclusion: "Offspring ratio reveals unknown genotype"
            }
        },
        
        monohybrid_testCross: {
            scenario: "Tall pea plant (could be TT or Tt) × Short plant (tt)",
            
            case1_homozygous: {
                unknown: "TT (homozygous dominant)",
                cross: "TT × tt",
                gametes: {
                    TT_parent: "100% T",
                    tt_parent: "100% t"
                },
                punnettSquare: [
                    ["", "T", "T"],
                    ["t", "Tt", "Tt"],
                    ["t", "Tt", "Tt"]
                ],
                offspring: "100% Tt",
                phenotype: "100% tall (all dominant)",
                ratio: "No variation - all offspring identical",
                interpretation: "If ALL offspring show dominant trait → unknown parent was homozygous dominant (TT)"
            },
            
            case2_heterozygous: {
                unknown: "Tt (heterozygous)",
                cross: "Tt × tt",
                gametes: {
                    Tt_parent: "50% T, 50% t",
                    tt_parent: "100% t"
                },
                punnettSquare: [
                    ["", "T", "t"],
                    ["t", "Tt", "tt"],
                    ["t", "Tt", "tt"]
                ],
                offspring: "50% Tt, 50% tt",
                phenotype: "50% tall, 50% short",
                ratio: "1:1 (dominant:recessive)",
                interpretation: "If offspring show 1:1 ratio → unknown parent was heterozygous (Tt)"
            },
            
            summary_interpretation: {
                all_dominant: "Unknown parent is homozygous dominant (AA)",
                half_each: "Unknown parent is heterozygous (Aa)",
                ratio_diagnostic: "1:1 ratio is hallmark of test cross with heterozygote"
            }
        },
        
        dihybrid_testCross: {
            scenario: "Unknown genotype (round, yellow seeds) × rryy (wrinkled, green)",
            
            if_RRYY: {
                cross: "RRYY × rryy",
                offspring: "100% RrYy (all round, yellow)",
                ratio: "No variation",
                conclusion: "Unknown was homozygous dominant for both traits"
            },
            
            if_RrYy: {
                cross: "RrYy × rryy",
                gametes_RrYy: "RY, Ry, rY, ry (25% each)",
                gametes_rryy: "ry only (100%)",
                offspring: [
                    "RrYy (25%) - round, yellow",
                    "Rryy (25%) - round, green",
                    "rrYy (25%) - wrinkled, yellow",
                    "rryy (25%) - wrinkled, green"
                ],
                ratio: "1:1:1:1 (all four phenotypes equally common)",
                conclusion: "Unknown was dihybrid (heterozygous for both)"
            },
            
            if_RRYy: {
                cross: "RRYy × rryy",
                offspring: "50% RrYy (round, yellow), 50% Rryy (round, green)",
                ratio: "All round, but 1:1 for color",
                conclusion: "Homozygous for shape (RR), heterozygous for color (Yy)"
            },
            
            interpretation: "Test cross offspring ratios reveal exact genotype of unknown parent for each gene"
        },
        
        practical_considerations: {
            sample_size: {
                issue: "Small samples may not show exact ratios due to chance",
                minimum: "At least 20-30 offspring for reliable results",
                better: "50-100 offspring for clear pattern",
                statistics: "Use chi-square test to evaluate fit to expected ratio"
            },
            
            timing: {
                plants: "Must wait until offspring mature to score phenotypes",
                animals: "Depends on generation time (weeks to months)",
                example: "Pea plants: ~3 months; fruit flies: ~2 weeks; mice: ~6-8 weeks"
            },
            
            cost: {
                consideration: "Test crosses require resources (space, time, money)",
                efficiency: "Molecular genotyping now often faster and cheaper than test cross",
                still_useful: "Important in breeding programs and teaching"
            }
        },
        
        examples_different_organisms: {
            example1_cattle: {
                trait: "Coat color: Black (B) dominant over red (b)",
                question: "Is black bull BB or Bb?",
                testCross: "Breed black bull to red cows (bb)",
                if_BB: "All calves black",
                if_Bb: "~50% black, ~50% red",
                application: "Important for breeding program decisions"
            },
            
            example2_drosophila: {
                trait: "Eye color: Red (wild-type) dominant over white",
                question: "Is red-eyed fly homozygous or heterozygous?",
                testCross: "Cross with white-eyed fly",
                advantage: "Short generation time (10 days), many offspring",
                use: "Standard genetics lab exercise"
            },
            
            example3_corn: {
                trait: "Kernel color: Purple (P) vs yellow (p)",
                question: "Genotype of purple kernel plant?",
                testCross: "Cross to yellow kernel plant (pp)",
                advantage: "Can score hundreds of kernels on single ear",
                interpretation: "All purple → PP; half purple, half yellow → Pp"
            },
            
            example4_dog_breeding: {
                trait: "Coat type: Wire-haired (W) vs smooth (w)",
                question: "Is wire-haired dog WW or Ww?",
                testCross: "Breed to smooth-haired dog (ww)",
                importance: "Breeders want to know if dog carries recessive allele",
                application: "Maintaining or eliminating traits in breed"
            }
        },
        
        backcross_detailed: {
            definition_revisited: "Cross of F1 hybrid back to one of the parent types",
            
            types: {
                backcross_to_recessive: {
                    cross: "F1 (Aa) × recessive parent (aa)",
                    same_as: "This is also a test cross",
                    offspring: "50% Aa, 50% aa",
                    use: "Determine genotype, recover recessive phenotype"
                },
                
                backcross_to_dominant: {
                    cross: "F1 (Aa) × dominant parent (AA)",
                    offspring: "50% AA, 50% Aa (but all show dominant phenotype)",
                    use: "Increase frequency of dominant trait"
                }
            },
            
            breeding_applications: {
                introgression: {
                    definition: "Introducing desirable gene into breeding line",
                    method: [
                        "Cross elite line × donor (with desired trait)",
                        "Backcross F1 to elite line",
                        "Repeat backcrossing 5-6 generations",
                        "Result: Elite line with new trait"
                    ],
                    recovery: "After 6 backcrosses, recover ~99% of elite genome",
                    example: "Adding disease resistance gene to high-yielding crop variety"
                },
                
                trait_fixation: {
                    purpose: "Make heterozygous trait homozygous",
                    method: "Repeated backcrossing and selection",
                    use: "Establishing new breed or variety"
                }
            }
        },
        
        modern_molecular_alternatives: {
            PCR_genotyping: {
                method: "Amplify and sequence specific gene",
                advantages: ["Fast (hours, not months)", "Definitive", "Works on single individual", "Can test before maturity"],
                limitations: ["Requires knowing gene sequence", "Equipment and expertise needed", "Cost per sample"]
            },
            
            SNP_arrays: {
                method: "Test many genetic markers simultaneously",
                use: "Genome-wide genotyping",
                advantage: "Can determine genotype at thousands of loci",
                application: "Genomic selection in breeding"
            },
            
            when_testCross_still_used: [
                "Teaching laboratories (demonstrates Mendelian principles)",
                "When molecular methods not available",
                "When gene identity unknown (phenotype-based selection)",
                "Cost considerations in large-scale breeding"
            ]
        },
        
        statistical_analysis: {
            chi_square_application: {
                purpose: "Determine if observed ratios fit expected test cross ratios",
                
                example: {
                    observed: "45 tall, 55 short (from Tt × tt)",
                    expected: "50 tall, 50 short (1:1 ratio)",
                    chi_square: "χ² = (45-50)²/50 + (55-50)²/50 = 0.5 + 0.5 = 1.0",
                    df: 1,
                    critical_value: "3.841 (p=0.05)",
                    conclusion: "1.0 < 3.841, so accept 1:1 hypothesis (parent was Tt)"
                }
            },
            
            power_analysis: {
                question: "How many offspring needed to distinguish TT from Tt?",
                calculation: "Depends on desired confidence level",
                example: "With 10 offspring all tall, 99.9% confident parent is TT (not Tt)"
            }
        },
        
        problem_solving_strategy: {
            step1: "Identify unknown genotype showing dominant phenotype",
            step2: "Identify appropriate recessive parent (homozygous recessive)",
            step3: "Predict offspring for each possible unknown genotype",
            step4: "Perform cross and score offspring phenotypes",
            step5: "Compare observed to expected ratios",
            step6: "Conclude genotype based on match to predictions"
        },
        
        practice_problems: [
            {
                level: "Basic",
                problem: "A black guinea pig is test-crossed to a white guinea pig. They produce 6 black and 5 white offspring. What was the genotype of the black parent? (Black B is dominant over white b)",
                solution: {
                    observed: "6 black : 5 white ≈ 1:1",
                    interpretation: "1:1 ratio indicates heterozygous parent",
                    answer: "Bb",
                    check: "Bb × bb → 50% Bb (black), 50% bb (white) ✓"
                }
            },
            
            {
                level: "Intermediate",
                problem: "A plant with round, yellow seeds is test-crossed. Offspring: 24 round yellow, 26 round green, 25 wrinkled yellow, 23 wrinkled green. What is the genotype of the tested plant?",
                solution: {
                    observed: "≈ 1:1:1:1 ratio",
                    interpretation: "Equal proportions of all four phenotypes",
                    answer: "RrYy (dihybrid)",
                    check: "RrYy × rryy produces 1:1:1:1 ratio ✓"
                }
            },
            
            {
                level: "Advanced",
                problem: "A geneticist test-crosses a tall plant and gets 52 tall and 0 short offspring. Can they be certain the plant is TT?",
                solution: {
                    if_TT: "Expect all tall",
                    if_Tt: "Expect 50% tall, 50% short",
                    probability: "If Tt, probability of 52 tall by chance = (1/2)^52 ≈ 0 (extremely unlikely)",
                    conclusion: "Very confident plant is TT, but cannot be 100% certain with finite sample",
                    better: "Additional offspring or molecular test for certainty"
                }
            }
        ],
        
        historical_context: {
            mendel: "Mendel used test crosses to verify genotypes of F2 plants",
            verification: "Showed that F2 dominant phenotypes were 1/3 TT and 2/3 Tt",
            method: "Self-crossed F2 plants; TT gave all tall, Tt gave 3:1",
            significance: "Demonstrated that alleles don't blend; remain discrete"
        },
        
        applications_summary: {
            research: [
                "Determining carrier status for recessive alleles",
                "Genetic mapping and linkage analysis",
                "Confirming transgenic genotypes",
                "Studying gene interactions"
            ],
            
            breeding: [
                "Identifying superior breeding animals (homozygous for desired traits)",
                "Eliminating hidden recessive deleterious alleles",
                "Introgression of new traits into elite lines",
                "Maintaining genetic purity of strains"
            ],
            
            medicine: [
                "Carrier testing in families (though now done molecularly)",
                "Understanding inheritance patterns",
                "Research on genetic diseases in model organisms"
            ],
            
            education: [
                "Teaching Mendelian genetics",
                "Demonstrating segregation",
                "Lab exercises with Drosophila, corn, etc."
            ]
        },
        
        advantages_limitations: {
            advantages: [
                "Definitive for determining genotype based on phenotype",
                "Demonstrates Mendelian principles clearly",
                "Low-tech, requires no special equipment",
                "Can be done with any organism that can be crossed"
            ],
            
            limitations: [
                "Time-consuming (requires growing offspring)",
                "Requires space and resources",
                "Need recessive parent/line available",
                "Statistical variation in small samples",
                "Not useful if gene identity unknown"
            ]
        }
    };
    
    return content;
}

// Continue with remaining handler methods...

handleIncompleteDominance(problem) {
    const content = {
        topic: "Incomplete Dominance and Codominance",
        category: 'non_mendelian',
        summary: "Incomplete dominance and codominance are non-Mendelian patterns where heterozygotes show phenotypes different from simple dominant/recessive inheritance. In incomplete dominance, the heterozygote shows an intermediate phenotype. In codominance, both alleles are fully expressed simultaneously.",
        
        fullContent: this.lessons.incomplete_dominance
    };
    
    return content;
}

handleMultipleAlleles(problem) {
    const content = {
        topic: "Multiple Alleles",
        category: 'non_mendelian',
        summary: "Multiple allele systems involve genes with more than two allelic forms in a population, though each individual still has only two alleles. The classic example is the ABO blood group system in humans with three alleles (I^A, I^B, i) producing four blood types.",
        
        definition: {
            multiple_alleles: "More than two alleles exist for a gene in the population",
            important: "Each individual still has only TWO alleles (one from each parent)",
            example: "ABO blood type has 3 alleles in population, but you inherit 2",
            contrast_to_Mendel: "Mendel studied genes with two alleles each"
        },
        
        ABO_blood_system: {
            gene: "ABO gene (I gene) on chromosome 9",
            function: "Encodes glycosyltransferase enzymes that add sugars to proteins on RBC surface",
            
            three_alleles: {
                I_A: {
                    symbol: "I^A or A",
                    enzyme: "Adds N-acetylgalactosamine to H antigen",
                    result: "Produces A antigen on RBC surface",
                    dominance: "Dominant over i, codominant with I^B"
                },
                I_B: {
                    symbol: "I^B or B",
                    enzyme: "Adds galactose to H antigen",
                    result: "Produces B antigen on RBC surface",
                    dominance: "Dominant over i, codominant with I^A"
                },
                i: {
                    symbol: "i or O",
                    enzyme: "Non-functional (no enzyme activity)",
                    result: "No A or B antigen; only H antigen remains",
                    dominance: "Recessive to both I^A and I^B"
                }
            },
            
            genotypes_and_phenotypes: {
                type_A: {
                    genotypes: ["I^A I^A (homozygous)", "I^A i (heterozygous)"],
                    antigens: "A antigens on RBCs",
                    antibodies: "Anti-B antibodies in plasma",
                    can_receive: "Type A or O blood",
                    can_donate_to: "Type A or AB"
                },
                type_B: {
                    genotypes: ["I^B I^B (homozygous)", "I^B i (heterozygous)"],
                    antigens: "B antigens on RBCs",
                    antibodies: "Anti-A antibodies in plasma",
                    can_receive: "Type B or O blood",
                    can_donate_to: "Type B or AB"
                },
                type_AB: {
                    genotypes: ["I^A I^B (heterozygous only)"],
                    antigens: "BOTH A and B antigens on RBCs",
                    antibodies: "NONE (no anti-A or anti-B)",
                    can_receive: "Any blood type (A, B, AB, O) - UNIVERSAL RECIPIENT",
                    can_donate_to: "Type AB only",
                    codominance: "Both I^A and I^B expressed equally"
                },
                type_O: {
                    genotypes: ["ii (homozygous recessive only)"],
                    antigens: "Neither A nor B (only H antigen)",
                    antibodies: "Both anti-A and anti-B antibodies",
                    can_receive: "Type O blood only",
                    can_donate_to: "Any blood type - UNIVERSAL DONOR",
                    recessive: "Requires two copies of i allele"
                }
            },
            
            inheritance_patterns: {
                cross1: {
                    parents: "I^A I^A (Type A) × I^B I^B (Type B)",
                    offspring: "100% I^A I^B (Type AB)",
                    note: "Both parents homozygous → all children AB"
                },
                
                cross2: {
                    parents: "I^A i (Type A) × I^B i (Type B)",
                    punnettSquare: [
                        ["", "I^A", "i"],
                        ["I^B", "I^A I^B", "I^B i"],
                        ["i", "I^A i", "ii"]
                    ],
                    offspring: {
                        AB: "25% (I^A I^B)",
                        A: "25% (I^A i)",
                        B: "25% (I^B i)",
                        O: "25% (ii)"
                    },
                    note: "All four blood types possible from two heterozygous parents!"
                },
                
                cross3: {
                    parents: "I^A I^B (Type AB) × ii (Type O)",
                    offspring: {
                        A: "50% (I^A i)",
                        B: "50% (I^B i)",
                        AB: "0%",
                        O: "0%"
                    },
                    note: "AB parent cannot have O child with O parent"
                },
                
                impossible_outcomes: {
                    parents_both_O: "ii × ii → Cannot have A, B, or AB child",
                    parents_AB_and_O: "I^A I^B × ii → Cannot have AB or O child",
                    one_parent_O: "If child is AB, neither parent can be O"
                }
            },
            
            paternity_example: {
                mother: "Type A (I^A i)",
                child: "Type O (ii)",
                question: "Can type AB man be the father?",
                analysis: {
                    child_genotype: "ii (received i from each parent)",
                    mother_contribution: "i allele",
                    father_must_contribute: "i allele",
                    AB_man_genotype: "I^A I^B (has no i allele)",
                    conclusion: "Type AB man CANNOT be father of type O child"
                }
            },
            
            medical_importance: {
                transfusions: {
                    type_O: "Universal donor (no A or B antigens to cause immune reaction)",
                    type_AB: "Universal recipient (no anti-A or anti-B antibodies)",
                    matching: "Must match blood type to avoid fatal transfusion reactions",
                    emergency: "O-negative used in emergencies (universal)"
                },
                
                pregnancy: {
                    concern: "Mother and fetus blood type incompatibility",
                    example: "Mother O, baby A → mother's anti-A antibodies can attack fetal RBCs",
                    monitoring: "Checked during pregnancy"
                },
                
                organ_transplant: "ABO matching critical for organ transplants"
            }
        },
        
        other_examples: {
            MN_blood_group: {
                gene: "GYPA gene",
                alleles: ["L^M (M antigen)", "L^N (N antigen)"],
                phenotypes: {
                    M: "L^M L^M - only M antigens",
                    MN: "L^M L^N - BOTH M and N antigens (codominance)",
                    N: "L^N L^N - only N antigens"
                },
                inheritance: "Simple codominance",
                use: "Forensics, paternity testing"
            },
            
            HLA_system: {
                gene: "Human Leukocyte Antigen complex",
                alleles: "Hundreds of alleles (highly polymorphic)",
                importance: "Tissue transplant matching, immune response",
                diversity: "Almost every person has unique HLA genotype",
                evolution: "Maintained by balancing selection"
            },
            
            rabbit_coat_color: {
                gene: "C gene (tyrosinase enzyme)",
                alleles: [
                    "C (full color) - dominant to all others",
                    "c^ch (chinchilla) - intermediate",
                    "c^h (Himalayan) - heat-sensitive",
                    "c (albino) - recessive to all"
                ],
                hierarchy: "C > c^ch > c^h > c",
                dominance: "Multiple dominance relationships"
            },
            
            drosophila_eye_color: {
                gene: "white (w) gene",
                alleles: "Over 100 alleles known (w+, w, w^apricot, w^eosin, w^cherry, etc.)",
                phenotypes: "Range from dark red to white",
                research: "Model for studying allelic series"
            }
        },
        
        allelic_series: {
            definition: "Set of multiple alleles with hierarchical dominance relationships",
            example_rabbit: "C > c^ch > c^h > c",
            
            prediction: {
                principle: "More dominant allele expressed in heterozygote",
                example: "C/c^ch looks like C/C (full color)",
                but: "c^ch/c^h looks like c^ch/c^ch (chinchilla)"
            }
        },
        
        frequency_in_population: {
            concept: "Multiple alleles can have different frequencies in population",
            
            ABO_frequencies_European: {
                I_A: "~26%",
                I_B: "~6%",
                i: "~68%",
                note: "Frequencies vary among populations"
            },
            
            calculation: {
                genotype_frequency: "Can calculate using Hardy-Weinberg",
                example: "Frequency of I^A I^A = (freq I^A)²"
            }
        },
        
        molecular_basis: {
            ABO_explanation: {
                I_A_allele: "Encodes functional A-transferase (adds N-acetylgalactosamine)",
                I_B_allele: "Encodes functional B-transferase (adds galactose)",
                i_allele: "Deletion mutation → non-functional enzyme",
                codominance: "Both enzymes function independently → both antigens present in I^A I^B"
            },
            
            general: "Different alleles often code for different versions of same protein (different amino acids)"
        },
        
        genetics_problems: [
            {
                level: "Basic",
                problem: "A woman with type A blood (father was type O) marries a man with type B blood (mother was type O). What blood types are possible in their children?",
                solution: {
                    woman: "I^A i (must be heterozygous since father was ii)",
                    man: "I^B i (must be heterozygous since mother was ii)",
                    cross: "I^A i × I^B i",
                    offspring: "25% I^A I^B (AB), 25% I^A i (A), 25% I^B i (B), 25% ii (O)",
                    answer: "All four blood types possible: A, B, AB, O"
                }
            },
            
            {
                level: "Intermediate",
                problem: "A type AB woman has a type O child. She claims the father is a type A man. Is this possible?",
                solution: {
                    woman: "I^A I^B",
                    child: "ii (received i from each parent)",
                    problem: "Woman has I^A and I^B alleles, no i allele",
                    conclusion: "IMPOSSIBLE - AB mother cannot have O child",
                    explanation: "Child must have received i from mother, but AB mother has no i to give"
                }
            },
            
            {
                level: "Advanced",
                problem: "In a population, 16% have type O blood, 36% have type A, 36% have type B, and 12% have type AB. Estimate allele frequencies.",
                solution: {
                    O_frequency: "ii = 0.16, so freq(i) = √0.16 = 0.4",
                    remaining: "freq(I^A) + freq(I^B) = 1 - 0.4 = 0.6",
                    method: "Use Hardy-Weinberg and observed phenotype frequencies",
                    approximate: "freq(I^A) ≈ 0.3, freq(I^B) ≈ 0.3",
                    note: "Exact solution requires more complex algebra"
                }
            }
        ],
        
        comparison_table: {
            simple_dominance: {
                alleles: "Two (A and a)",
                heterozygote: "Looks like AA (dominant)",
                phenotypes: "Two (dominant and recessive)",
                ratio_F2: "3:1"
            },
            incomplete_dominance: {
                alleles: "Two (often)",
                heterozygote: "Intermediate phenotype",
                phenotypes: "Three",
                ratio_F2: "1:2:1"
            },
            codominance: {
                alleles: "Two or more",
                heterozygote: "Both traits expressed",
                phenotypes: "Three or more",
                ratio_F2: "Varies (1:2:1 if two alleles)"
            },
            multiple_alleles: {
                alleles: "Three or more in population",
                heterozygote: "Depends on alleles (dominance, codominance, etc.)",
                phenotypes: "Multiple (depends on dominance relationships)",
                ratio_F2: "Varies depending on alleles involved"
            }
        },
        
        real_world_applications: {
            medicine: [
                "Blood transfusions (ABO matching)",
                "Organ transplantation (HLA matching)",
                "Prenatal care (blood type incompatibility)",
                "Forensic identification"
            ],
            
            paternity: [
                "Exclusion: Can rule out some men as fathers",
                "Example: Type O child rules out AB man as father",
                "Note: Cannot prove paternity, only exclude",
                "Modern: DNA testing more definitive"
            ],
            
            anthropology: [
                "Population genetics and migration studies",
                "ABO frequencies vary among populations",
                "Used to trace human migrations historically"
            ],
            
            evolution: [
                "Balanced selection maintains multiple alleles",
                "Example: HLA diversity maintained by pathogen resistance",
                "Heterozygote advantage in some cases"
            ]
        },
        
        common_misconceptions: {
            mistake1: {
                wrong: "Thinking person can have three or more ABO alleles",
                correct: "Each person has only TWO alleles (one from each parent), but population has three"
            },
            
            mistake2: {
                wrong: "Type AB is intermediate between A and B",
                correct: "Type AB shows codominance - BOTH antigens present, not intermediate"
            },
            
            mistake3: {
                wrong: "Confusing multiple alleles with polygenic traits",
                correct: "Multiple alleles = one gene, many alleles. Polygenic = many genes, each with alleles"
            },
            
            mistake4: {
                wrong: "Assuming AB × O can produce AB child",
                correct: "AB × O produces only A and B children (no AB, no O)"
            }
        },
        
        practice_crosses: [
            {
                cross: "I^A i × I^A i",
                offspring: "75% type A (I^A I^A or I^A i), 25% type O (ii)"
            },
            {
                cross: "I^A I^B × I^B i",
                offspring: "25% AB, 25% A, 25% B, 25% O - wait, INCORRECT!",
                correct: "25% I^A I^B (AB), 25% I^A i (A), 25% I^B I^B (B), 25% I^B i (B)",
                fixed: "25% AB, 25% A, 50% B"
            },
            {
                cross: "ii × ii",
                offspring: "100% type O (ii)"
            }
        ]
    };
    
    return content;
}

handleSexLinked(problem) {
    const content = {
        topic: "Sex-Linked Inheritance",
        category: 'chromosomal_genetics',
        summary: "Sex-linked genes are located on sex chromosomes (usually X chromosome). X-linked inheritance shows characteristic patterns: affected individuals are predominantly male, carrier females pass trait to sons, criss-cross inheritance, and no male-to-male transmission.",
        
        fullContent: this.lessons.sex_linked
    };
    
    return content;
}

handlePedigreeAnalysis(problem) {
    const content = {
        topic: "Pedigree Analysis",
        category: 'genetic_analysis',
        summary: "Pedigrees are family trees showing inheritance patterns across generations. Analysis reveals mode of inheritance (autosomal vs sex-linked, dominant vs recessive) and identifies carriers.",
        
        definition: {
            pedigree: "Diagram showing genetic relationships and phenotypes across multiple generations of a family",
            purpose: "Trace inheritance of traits, determine mode of inheritance, identify carriers, calculate risks",
            uses: ["Genetic counseling", "Medical diagnosis", "Research", "Understanding inheritance patterns"]
        },
        
        pedigree_symbols: {
            individuals: {
                male: "Square (□)",
                female: "Circle (○)",
                sex_unknown: "Diamond (◇)",
                affected_male: "Filled square (■)",
                affected_female: "Filled circle (●)",
                carrier_female: "Half-filled or dot in center (◐ or ⊙)",
                deceased: "Slash through symbol (⊘)",
                proband: "Arrow pointing to individual (→) - person who brought family to attention",
                pregnant: "P inside symbol",
                twins_identical: "Connected by horizontal line from same point",
                twins_fraternal: "Connected by horizontal lines from different points"
            },
            
            relationships: {
                marriage: "Horizontal line connecting male and female",
                consanguineous: "Double horizontal line (blood relatives marrying)",
                divorced: "Slashed horizontal line",
                offspring: "Vertical line down from marriage line",
                siblings: "Connected by horizontal line above",
                multiple_offspring: "Numbers inside symbol or below"
            },
            
            generations: {
                label: "Roman numerals (I, II, III, IV, etc.)",
                individuals: "Arabic numerals within generation (1, 2, 3, etc.)",
                reference: "Individual I-2 = Generation I, person #2"
            }
        },
        
        modes_of_inheritance: {
            autosomal_recessive: {
                characteristics: [
                    "Affects males and females equally",
                    "Often skips generations",
                    "Affected individual usually has unaffected parents (both carriers)",
                    "Two affected parents have 100% affected children",
                    "More common with consanguinity (related parents)",
                    "Horizontal transmission pattern (siblings affected, not parent-child)"
                ],
                
                carrier_patterns: {
                    two_carriers: "Aa × Aa → 25% affected (aa), 50% carriers (Aa), 25% normal (AA)",
                    carrier_x_affected: "Aa × aa → 50% affected, 50% carriers",
                    carrier_x_normal: "Aa × AA → 50% carriers, 50% normal (no affected)"
                },
                
                examples: [
                    "Cystic fibrosis",
                    "Sickle cell disease",
                    "Phenylketonuria (PKU)",
                    "Tay-Sachs disease"
                ],
                
                clues: [
                    "Affected child with two unaffected parents",
                    "Appears in siblings but not parents",
                    "Consanguineous marriage increases risk"
                ]
            },
            
            autosomal_dominant: {
                characteristics: [
                    "Affects males and females equally",
                    "Does NOT skip generations (appears in every generation)",
                    "Affected individual has at least one affected parent",
                    "Two unaffected parents cannot have affected child",
                    "Vertical transmission pattern (parent to child)",
                    "Affected × unaffected → ~50% affected offspring"
                ],
                
                patterns: {
                    heterozygous_affected: "Aa × aa → 50% affected (Aa), 50% normal (aa)",
                    homozygous_affected: "AA × aa → 100% affected (all Aa)",
                    note: "Most dominant conditions are Aa (homozygous AA often lethal or very rare)"
                },
                
                examples: [
                    "Huntington disease",
                    "Achondroplasia (dwarfism)",
                    "Marfan syndrome",
                    "Familial hypercholesterolemia"
                ],
                
                clues: [
                    "Every affected person has affected parent",
                    "Appears in every generation (vertical pattern)",
                    "Male-to-male transmission possible"
                ]
            },
            
            X_linked_recessive: {
                characteristics: [
                    "Affects predominantly MALES",
                    "Affected males usually have unaffected parents",
                    "Never passed father to son (no male-to-male transmission)",
                    "Passed from carrier mother to affected son",
                    "Affected females rare (need affected father + carrier mother)",
                    "Skips generations (carrier females → affected grandsons)",
                    "Criss-cross pattern (affected grandfather → carrier daughter → affected grandson)"
                ],
                
                carrier_females: {
                    genotype: "X^A X^a (heterozygous)",
                    phenotype: "Usually unaffected (normal)",
                    offspring: "50% of sons affected, 50% of daughters carriers"
                },
                
                affected_males: {
                    genotype: "X^a Y (hemizygous)",
                    daughters: "All carriers (X^A X^a) if mother is X^A X^A",
                    sons: "All normal (X^A Y) if mother is X^A X^A - NO male-to-male transmission"
                },
                
                examples: [
                    "Hemophilia A and B",
                    "Duchenne muscular dystrophy",
                    "Red-green color blindness",
                    "Fragile X syndrome"
                ],
                
                clues: [
                    "Many more affected males than females",
                    "Affected male with unaffected parents",
                    "No father-to-son transmission",
                    "Affected male's daughters are carriers",
                    "Pattern goes: affected male → carrier daughter → affected grandson"
                ]
            },
            
            X_linked_dominant: {
                characteristics: [
                    "Affects more FEMALES than males (females have 2 X's)",
                    "No male-to-male transmission",
                    "Affected males pass to ALL daughters, NO sons",
                    "Affected females pass to 50% children (both sexes)",
                    "Often more severe in males (sometimes lethal)"
                ],
                
                examples: [
                    "Hypophosphatemic rickets (vitamin D-resistant)",
                    "Rett syndrome (lethal in males)",
                    "Incontinentia pigmenti"
                ],
                
                clues: [
                    "More affected females",
                    "Affected father → all daughters affected",
                    "No male-to-male transmission"
                ]
            },
            
            Y_linked: {
                characteristics: [
                    "Affects ONLY males",
                    "Passed father to ALL sons",
                    "Appears in EVERY generation",
                    "Vertical pattern through male line only",
                    "No females affected or carriers"
                ],
                
                examples: [
                    "SRY gene (sex determination)",
                    "Male infertility genes",
                    "Hairy ears (disputed)"
                ],
                
                note: "Very rare; Y chromosome has few genes"
            },
            
            mitochondrial: {
                characteristics: [
                    "Maternal inheritance ONLY",
                    "Affects both males and females",
                    "Affected mother → ALL children affected",
                    "Affected father → NO children affected",
                    "Does not follow Mendelian ratios"
                ],
                
                mechanism: "Mitochondria inherited from egg (mother), not sperm",
                
                examples: [
                    "Leber hereditary optic neuropathy",
                    "Mitochondrial myopathies",
                    "Some forms of deafness"
                ]
            }
        },
        
        pedigree_analysis_strategy: {
            step1: {
                task: "Examine the pedigree carefully",
                questions: [
                    "Are males and females equally affected?",
                    "Does it skip generations?",
                    "Is there male-to-male transmission?",
                    "What is the pattern (horizontal vs vertical)?"
                ]
            },
            
            step2: {
                task: "Narrow down possibilities",
                dominant_vs_recessive: {
                    if_skips_generations: "Likely recessive",
                    if_every_generation: "Likely dominant",
                    affected_parents_with_unaffected_child: "Dominant",
                    unaffected_parents_with_affected_child: "Recessive"
                },
                autosomal_vs_sex_linked: {
                    equal_sexes: "Likely autosomal",
                    mostly_males: "Likely X-linked recessive",
                    male_to_male: "Must be autosomal (not X or Y-linked)"
                }
            },
            
            step3: {
                task: "Test hypothesis with specific crosses",
                method: "Check if observed ratios match expected for proposed mode",
                example: "If X-linked recessive, carrier female × normal male should give 50% affected sons"
            },
            
            step4: {
                task: "Assign genotypes to all individuals",
                definite: "Start with individuals whose genotype is certain (affected with recessive trait)",
                probable: "Deduce others from parents and offspring",
                uncertain: "Note where genotype could be either of two possibilities"
            },
            
            step5: {
                task: "Calculate probabilities if needed",
                example: "What is probability next child will be affected?",
                method: "Use Punnett square or probability rules"
            }
        },
        
        practice_pedigrees: {
            example1_autosomal_recessive: {
                description: "Generation I: Parents unaffected. Generation II: 4 children, 1 affected. Generation III: From affected II-1 × unaffected spouse, all children unaffected",
                analysis: {
                    observation1: "Affected child from unaffected parents → recessive",
                    observation2: "Males and females equally affected → autosomal",
                    observation3: "Skips generations → confirms recessive",
                    mode: "Autosomal recessive",
                    genotypes: {
                        I_1_and_I_2: "Both Aa (carriers)",
                        II_affected: "aa",
                        II_unaffected: "Aa or AA (most likely Aa if carriers)",
                        III_all_normal: "Aa (carriers) or AA"
                    }
                }
            },
            
            example2_X_linked_recessive: {
                description: "Affected grandfather (I-1), carrier daughter (II-2), affected grandson (III-1). No affected females.",
                analysis: {
                    observation1: "Only males affected → likely X-linked",
                    observation2: "Criss-cross pattern (grandfather → grandson through daughter) → X-linked recessive",
                    observation3: "No male-to-male transmission → confirms X-linked",
                    mode: "X-linked recessive",
                    genotypes: {
                        I_1: "X^a Y (affected male)",
                        II_2: "X^A X^a (carrier daughter)",
                        III_1: "X^a Y (affected grandson)"
                    }
                }
            }
        },
        
        calculating_risks: {
            carrier_probability: {
                scenario: "Woman has brother with autosomal recessive disease (parents unaffected)",
                analysis: {
                    parents: "Must both be Aa (carriers)",
                    siblings: "25% aa, 25% AA, 50% Aa",
                    woman_unaffected: "Could be AA or Aa",
                    probability: "Out of unaffected siblings: 2/3 are Aa, 1/3 are AA",
                    answer: "2/3 chance woman is carrier"
                }
            },
            
            affected_child_risk: {
                scenario: "Woman (2/3 chance of being carrier) marries normal man. Risk of affected child?",
                calculation: {
                    if_she_is_carrier: "Aa × AA → 0% affected",
                    wait_wrong: "Actually Aa × AA → 0% affected... let me reconsider",
                    corrected: "If marries carrier: Aa × Aa → 25% affected",
                    her_carrier_probability: "2/3",
                    total_risk: "2/3 × 1/4 = 2/12 = 1/6 ≈ 17%"
                }
            }
        },
        
        consanguinity: {
            definition: "Marriage between blood relatives",
            symbol: "Double horizontal line in pedigree",
            significance: "Greatly increases risk of autosomal recessive disorders",
            reason: "Related individuals more likely to carry same rare recessive allele",
            example: "First cousins share 1/8 of genes; higher chance both are carriers"
        },
        
        applications: {
            genetic_counseling: [
                "Determine mode of inheritance",
                "Calculate recurrence risks",
                "Identify carriers",
                "Inform reproductive decisions"
            ],
            
            medical_diagnosis: [
                "Identify genetic diseases in families",
                "Screen for hereditary conditions",
                "Predict onset of late-appearing disorders (e.g., Huntington)"
            ],
            
            research: [
                "Map disease genes",
                "Study inheritance patterns",
                "Identify new genetic disorders"
            ]
        },
        
        limitations: {
            small_families: "Hard to determine pattern with few individuals",
            incomplete_penetrance: "Not everyone with genotype shows phenotype",
            variable_expressivity: "Severity varies among affected individuals",
            new_mutations: "Sporadic cases don't fit family pattern",
            non_paternity: "Assumed relationships may be incorrect"
        },
        
        common_mistakes: {
            mistake1: {
                error: "Assuming autosomal dominant when affected person has affected parent",
                problem: "Could also be autosomal recessive if both parents are affected",
                tip: "Look at multiple generations and unaffected × unaffected crosses"
            },
            
            mistake2: {
                error: "Missing male-to-male transmission as clue against X-linkage",
                tip: "ANY father-to-son transmission rules out X-linked"
            },
            
            mistake3: {
                error: "Forgetting carriers in recessive pedigrees",
                tip: "Unaffected individuals with affected children must be carriers"
            }
        }
    };
    
    return content;
}

handleChiSquare(problem) {
    const content = {
        topic: "Chi-Square Analysis in Genetics",
        category: 'genetic_statistics',
        summary: "Chi-square (χ²) test determines whether observed genetic ratios differ significantly from expected Mendelian ratios. It quantifies the probability that deviations are due to random chance versus a real difference.",
        
        fullContent: this.lessons.chi_square_goodness_of_fit // Would reference the detailed experiment data
    };
    
    return content;
}


// ========================================
// MAIN PROBLEM PROCESSING METHODS
// ========================================

parseMendelianProblem(topic, parameters = {}, subTopic = null, context = {}) {
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
        throw new Error(`Unable to recognize Mendelian genetics topic: ${topic}`);
    }

    return {
        originalTopic: topic,
        type: topicType,
        subTopic: subTopic,
        parameters: { ...parameters },
        context: { ...context },
        difficulty: this.geneticsTopics[topicType].difficulty,
        prerequisites: this.geneticsTopics[topicType].prerequisites,
        parsedAt: new Date().toISOString()
    };
}

handleMendelianProblem(config) {
    const { topic, parameters, subTopic, context, requestType } = config;

    try {
        const isExperimentRequest = requestType === 'experiment' || 
                                   (typeof topic === 'string' && topic.toLowerCase().includes('experiment'));

        if (isExperimentRequest) {
            return this.handleExperimentRequest(config);
        } else {
            this.currentProblem = this.parseMendelianProblem(topic, parameters, subTopic, context);
            this.currentContent = this.getGeneticsContent(this.currentProblem);
            
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
            
            this.contentSteps = this.generateGeneticsContent(this.currentProblem, this.currentContent);
            
            // Generate workbook (handles async internally)
            this.generateGeneticsWorkbook();

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
        throw new Error(`Failed to process genetics request: ${error.message}`);
    }
}

getGeneticsContent(problem) {
    const handler = this.geneticsTopics[problem.type]?.handler;
    if (!handler) {
        throw new Error(`No handler available for genetics topic: ${problem.type}`);
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

    // Filter by cross type
    if (parameters.crossType) {
        if (filtered.possibleCrosses) {
            const requestedCross = parameters.crossType.toLowerCase();
            Object.keys(filtered.possibleCrosses).forEach(key => {
                if (!key.toLowerCase().includes(requestedCross)) {
                    delete filtered.possibleCrosses[key];
                }
            });
        }
    }

    return filtered;
}

handleExperimentRequest(config) {
    const { topic, parameters, experimentId } = config;

    if (experimentId && this.geneticsExperiments[experimentId]) {
        this.currentExperiment = this.geneticsExperiments[experimentId];
    } else {
        this.currentExperiment = this.findExperimentByTopic(topic);
    }

    if (!this.currentExperiment) {
        throw new Error(`No genetics experiment found for: ${topic}`);
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
    
    for (const [id, exp] of Object.entries(this.geneticsExperiments)) {
        if (exp.name.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    for (const [id, exp] of Object.entries(this.geneticsExperiments)) {
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
            if (typeof value === 'object' && !Array.isArray(value)) {
                Object.entries(value).forEach(([subKey, subValue]) => {
                    formatted.push([`    ${subKey}:`, subValue]);
                });
            } else {
                formatted.push(['    ', value]);
            }
        });
    }

    if (labExp.observations) {
        formatted.push(['', '']);
        formatted.push(['Observations', '']);
        if (Array.isArray(labExp.observations)) {
            labExp.observations.forEach(obs => formatted.push(['  -', obs]));
        }
    }

    if (labExp.analysis) {
        formatted.push(['', '']);
        formatted.push(['Analysis', '']);
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

    if (labExp.conclusions) {
        formatted.push(['', '']);
        formatted.push(['Conclusions', '']);
        if (Array.isArray(labExp.conclusions)) {
            labExp.conclusions.forEach(conclusion => {
                formatted.push(['  -', conclusion]);
            });
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
        Object.entries(labExp.extensions).forEach(([key, value]) => {
            formatted.push([`  ${key}:`, '']);
            if (typeof value === 'object' && !Array.isArray(value)) {
                Object.entries(value).forEach(([subKey, subValue]) => {
                    formatted.push([`    ${subKey}:`, subValue]);
                });
            } else {
                formatted.push(['    ', value]);
            }
        });
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
    
    Object.entries(this.geneticsExperiments).forEach(([id, experiment]) => {
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
    return Object.entries(this.geneticsExperiments).map(([id, exp]) => ({
        id: id,
        name: exp.name,
        category: exp.category,
        relatedTopics: exp.relatedTopics,
        scientist: exp.historicalBackground?.scientist,
        year: exp.historicalBackground?.year
    }));
}

getAllGeneticsTopics() {
    return Object.entries(this.geneticsTopics).map(([id, topic]) => ({
        id: id,
        name: topic.name,
        category: topic.category,
        description: topic.description,
        difficulty: topic.difficulty,
        prerequisites: topic.prerequisites
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
            adapted.showPunnettSquares = true;
            adapted.showDetailedSteps = true;
            break;
        
        case 'intermediate':
            adapted.vocabulary = 'standard';
            adapted.examples = this.selectMixedExamples(content.examples);
            adapted.depth = 'moderate';
            adapted.showProbability = true;
            adapted.showBranchDiagrams = true;
            break;
        
        case 'advanced':
            adapted.vocabulary = 'technical';
            adapted.examples = this.selectAdvancedExamples(content.examples);
            adapted.depth = 'comprehensive';
            adapted.research = this.addResearchConnections(content);
            adapted.showChiSquare = true;
            adapted.showMolecularBasis = true;
            break;
    }

    return adapted;
}

selectBasicExamples(examples) {
    if (!examples || !Array.isArray(examples)) return [];
    return examples.filter(ex => {
        if (typeof ex === 'object' && ex.difficulty) {
            return ex.difficulty === 'basic' || ex.difficulty === 'beginner';
        }
        return true;
    }).slice(0, 3);
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
        currentResearch: `Current research in ${content.topic} includes genome-wide association studies, polygenic risk scores, and gene editing applications`,
        openQuestions: "How do epistatic interactions affect complex trait inheritance? What role does epigenetics play?",
        techniques: "Advanced techniques: Next-generation sequencing, CRISPR-Cas9 gene editing, single-cell genomics"
    };
}

getContextualScenarios(topicType) {
    return this.contextualScenarios[topicType] || [];
}

getMetacognitivePrompts(topicType) {
    const prompts = {
        beforeLearning: this.metacognitivePrompts.beforeLearning.map(p => 
            p.replace('{topic}', this.geneticsTopics[topicType]?.name || topicType)
        ),
        duringLearning: this.metacognitivePrompts.duringLearning.map(p => 
            p.replace('{concept}', topicType)
        ),
        afterLearning: this.metacognitivePrompts.afterLearning.map(p => 
            p.replace('{topic}', this.geneticsTopics[topicType]?.name || topicType)
        ),
        problemSolving: this.metacognitivePrompts.problemSolving || []
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

generateGeneticsContent(problem, content) {
    const contentSections = [];

    // Generate overview section
    contentSections.push(this.generateOverviewSection(problem, content));

    // Generate key definitions section
    if (content.keyDefinitions || content.definitions) {
        contentSections.push(this.generateDefinitionsSection(content));
    }

    // Generate Mendel's laws section (if applicable)
    if (content.mendelsLaws || content.mendelianRatios) {
        contentSections.push(this.generateMendelsLawsSection(content));
    }

    // Generate genetic crosses section
    if (content.possibleCrosses || content.allPossibleMonohybridCrosses || content.F2_punnettSquare_4x4) {
        contentSections.push(this.generateGeneticCrossesSection(content));
    }

    // Generate Punnett square section
    if (content.punnettSquareMethod || content.gameteFormation) {
        contentSections.push(this.generatePunnettSquareSection(content));
    }

    // Generate probability section
    if (content.probabilityRules || content.probabilityCalculations) {
        contentSections.push(this.generateProbabilitySection(content));
    }

    // Generate test cross section
    if (content.testCross) {
        contentSections.push(this.generateTestCrossSection(content));
    }

    // Generate pedigree section
    if (content.pedigree_symbols || content.modes_of_inheritance) {
        contentSections.push(this.generatePedigreeSection(content));
    }

    // Generate chi-square section
    if (content.theory || content.chi_square_table) {
        contentSections.push(this.generateChiSquareSection(content));
    }

    // Add examples section
    if (content.examples || content.humanExamples) {
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

    // Add practice problems
    if (content.practiceProblems || content.practice_problems) {
        contentSections.push(this.generatePracticeProblemsSection(content));
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
        title: content.topic || problem.originalTopic,
        data: [
            ['Topic', content.topic],
            ['Category', content.category],
            ['Difficulty', problem.difficulty],
            ['Prerequisites', problem.prerequisites?.join(', ') || 'None'],
            ['Summary', content.summary]
        ]
    };
}

generateDefinitionsSection(content) {
    const definitions = content.keyDefinitions || content.definitions || {};
    const data = [];

    Object.entries(definitions).forEach(([term, definition]) => {
        if (typeof definition === 'object' && definition.definition) {
            data.push([term, definition.definition]);
            if (definition.example) {
                data.push(['  Example', definition.example]);
            }
            if (definition.note) {
                data.push(['  Note', definition.note]);
            }
        } else {
            data.push([term, definition]);
        }
        data.push(['', '']); // Spacing
    });

    return {
        type: 'definitions',
        title: 'Key Definitions',
        data: data
    };
}

generateMendelsLawsSection(content) {
    const data = [];

    if (content.mendelsLaws) {
        Object.entries(content.mendelsLaws).forEach(([lawName, lawData]) => {
            data.push([lawName.toUpperCase(), '']);
            if (lawData.statement) {
                data.push(['  Statement', lawData.statement]);
            }
            if (lawData.basis) {
                data.push(['  Basis', lawData.basis]);
            }
            if (lawData.example) {
                data.push(['  Example', lawData.example]);
            }
            data.push(['', '']);
        });
    }

    if (content.mendelianRatios) {
        data.push(['MENDELIAN RATIOS', '']);
        Object.entries(content.mendelianRatios).forEach(([crossType, ratioData]) => {
            data.push([`  ${crossType}`, '']);
            Object.entries(ratioData).forEach(([key, value]) => {
                data.push([`    ${key}`, value]);
            });
            data.push(['', '']);
        });
    }

    return {
        type: 'mendels_laws',
        title: "Mendel's Laws and Ratios",
        data: data
    };
}

generateGeneticCrossesSection(content) {
    const data = [];

    const crosses = content.possibleCrosses || 
                   content.allPossibleMonohybridCrosses || 
                   {};

    Object.entries(crosses).forEach(([crossName, crossData]) => {
        data.push([crossName.toUpperCase(), '']);
        
        if (crossData.parents) {
            data.push(['  Parents', crossData.parents]);
        }
        if (crossData.offspring) {
            data.push(['  Offspring', crossData.offspring]);
        }
        if (crossData.phenotype) {
            data.push(['  Phenotype', crossData.phenotype]);
        }
        if (crossData.genotypicRatio) {
            data.push(['  Genotypic Ratio', crossData.genotypicRatio]);
        }
        if (crossData.phenotypicRatio) {
            data.push(['  Phenotypic Ratio', crossData.phenotypicRatio]);
        }
        if (crossData.use) {
            data.push(['  Use', crossData.use]);
        }
        if (crossData.note) {
            data.push(['  Note', crossData.note]);
        }
        
        data.push(['', '']);
    });

    return {
        type: 'genetic_crosses',
        title: 'Genetic Crosses',
        data: data
    };
}

generatePunnettSquareSection(content) {
    const data = [];

    if (content.punnettSquareMethod) {
        data.push(['PUNNETT SQUARE METHOD', '']);
        
        if (content.punnettSquareMethod.steps) {
            data.push(['Steps:', '']);
            content.punnettSquareMethod.steps.forEach((step, index) => {
                if (typeof step === 'object' && step.action) {
                    data.push([`  ${step.step}.`, step.action]);
                    if (step.example) {
                        data.push(['    Example', step.example]);
                    }
                } else {
                    data.push([`  ${index + 1}.`, step]);
                }
            });
        }
        
        if (content.punnettSquareMethod.example_worked) {
            data.push(['', '']);
            data.push(['WORKED EXAMPLE', '']);
            const example = content.punnettSquareMethod.example_worked;
            Object.entries(example).forEach(([key, value]) => {
                if (typeof value === 'object' && !Array.isArray(value)) {
                    data.push([`  ${key}:`, '']);
                    Object.entries(value).forEach(([subKey, subValue]) => {
                        data.push([`    ${subKey}`, subValue]);
                    });
                } else {
                    data.push([`  ${key}`, value]);
                }
            });
        }
    }

    if (content.gameteFormation) {
        data.push(['', '']);
        data.push(['GAMETE FORMATION', '']);
        Object.entries(content.gameteFormation).forEach(([key, value]) => {
            if (typeof value === 'object') {
                data.push([`  ${key}:`, '']);
                if (Array.isArray(value)) {
                    value.forEach(item => data.push(['    -', item]));
                } else {
                    Object.entries(value).forEach(([subKey, subValue]) => {
                        data.push([`    ${subKey}`, subValue]);
                    });
                }
            } else {
                data.push([`  ${key}`, value]);
            }
        });
    }

    return {
        type: 'punnett_square',
        title: 'Punnett Square Analysis',
        data: data
    };
}

generateProbabilitySection(content) {
    const data = [];

    if (content.probabilityRules) {
        data.push(['PROBABILITY RULES', '']);
        
        Object.entries(content.probabilityRules).forEach(([ruleName, ruleData]) => {
            data.push([`  ${ruleName.toUpperCase()}`, '']);
            
            if (ruleData.statement) {
                data.push(['    Statement', ruleData.statement]);
            }
            if (ruleData.symbol) {
                data.push(['    Symbol', ruleData.symbol]);
            }
            if (ruleData.when) {
                data.push(['    When to use', ruleData.when]);
            }
            if (ruleData.examples) {
                data.push(['    Examples:', '']);
                ruleData.examples.forEach(ex => {
                    data.push(['      Q:', ex.question]);
                    data.push(['      A:', ex.solution]);
                });
            }
            
            data.push(['', '']);
        });
    }

    if (content.probabilityCalculations) {
        data.push(['PROBABILITY CALCULATIONS', '']);
        Object.entries(content.probabilityCalculations).forEach(([calcName, calcData]) => {
            data.push([`  ${calcName}`, '']);
            Object.entries(calcData).forEach(([key, value]) => {
                data.push([`    ${key}`, value]);
            });
            data.push(['', '']);
        });
    }

    return {
        type: 'probability',
        title: 'Probability in Genetics',
        data: data
    };
}

generateTestCrossSection(content) {
    const data = [];

    if (content.testCross) {
        data.push(['TEST CROSS', '']);
        
        Object.entries(content.testCross).forEach(([key, value]) => {
            if (typeof value === 'object' && !Array.isArray(value)) {
                data.push([`  ${key}:`, '']);
                Object.entries(value).forEach(([subKey, subValue]) => {
                    data.push([`    ${subKey}`, subValue]);
                });
            } else {
                data.push([`  ${key}`, value]);
            }
            data.push(['', '']);
        });
    }

    return {
        type: 'test_cross',
        title: 'Test Cross Analysis',
        data: data
    };
}

generatePedigreeSection(content) {
    const data = [];

    if (content.pedigree_symbols) {
        data.push(['PEDIGREE SYMBOLS', '']);
        Object.entries(content.pedigree_symbols).forEach(([category, symbols]) => {
            data.push([`  ${category.toUpperCase()}:`, '']);
            Object.entries(symbols).forEach(([symbol, meaning]) => {
                data.push([`    ${symbol}`, meaning]);
            });
            data.push(['', '']);
        });
    }

    if (content.modes_of_inheritance) {
        data.push(['MODES OF INHERITANCE', '']);
        Object.entries(content.modes_of_inheritance).forEach(([mode, modeData]) => {
            data.push([`  ${mode.toUpperCase()}`, '']);
            
            if (modeData.characteristics) {
                data.push(['    Characteristics:', '']);
                modeData.characteristics.forEach(char => {
                    data.push(['      -', char]);
                });
            }
            
            if (modeData.examples) {
                data.push(['    Examples:', '']);
                modeData.examples.forEach(ex => {
                    data.push(['      -', ex]);
                });
            }
            
            data.push(['', '']);
        });
    }

    return {
        type: 'pedigree',
        title: 'Pedigree Analysis',
        data: data
    };
}

generateChiSquareSection(content) {
    const data = [];

    if (content.theory) {
        data.push(['CHI-SQUARE TEST THEORY', '']);
        Object.entries(content.theory).forEach(([concept, conceptData]) => {
            data.push([`  ${concept}:`, '']);
            if (typeof conceptData === 'object') {
                Object.entries(conceptData).forEach(([key, value]) => {
                    data.push([`    ${key}`, value]);
                });
            } else {
                data.push(['    ', conceptData]);
            }
            data.push(['', '']);
        });
    }

    if (content.chi_square_table) {
        data.push(['CHI-SQUARE CRITICAL VALUES', '']);
        data.push(['  df', 'p=0.05', 'p=0.01']);
        if (content.chi_square_table.common_values) {
            content.chi_square_table.common_values.forEach(row => {
                data.push([`  ${row.df}`, row.p_005, row.p_001]);
            });
        }
    }

    if (content.step_by_step_procedure) {
        data.push(['', '']);
        data.push(['CHI-SQUARE PROCEDURE', '']);
        Object.entries(content.step_by_step_procedure).forEach(([step, stepData]) => {
            data.push([`  ${stepData.step || step}. ${stepData.title || step}`, '']);
            if (stepData.action) {
                data.push(['    ', stepData.action]);
            }
            if (stepData.example) {
                data.push(['    Example:', stepData.example]);
            }
        });
    }

    return {
        type: 'chi_square',
        title: 'Chi-Square Statistical Analysis',
        data: data
    };
}

generateExamplesSection(content) {
    const data = [];
    const examples = content.examples || content.humanExamples || [];

    if (Array.isArray(examples)) {
        examples.forEach((example, index) => {
            if (typeof example === 'object') {
                data.push([`EXAMPLE ${index + 1}`, '']);
                Object.entries(example).forEach(([key, value]) => {
                    data.push([`  ${key}`, value]);
                });
            } else {
                data.push([`${index + 1}.`, example]);
            }
            data.push(['', '']);
        });
    }

    return {
        type: 'examples',
        title: 'Examples and Applications',
        data: data
    };
}

generatePracticeProblemsSection(content) {
    const data = [];
    const problems = content.practiceProblems || content.practice_problems || [];

    problems.forEach((problem, index) => {
        data.push([`PROBLEM ${index + 1}`, '']);
        data.push(['  Level', problem.level]);
        data.push(['  Problem', problem.problem]);
        
        if (problem.questions) {
            data.push(['  Questions:', '']);
            problem.questions.forEach(q => {
                data.push(['    -', q]);
            });
        }
        
        if (problem.solution || problem.answers) {
            data.push(['  Solution:', '']);
            const solution = problem.solution || problem.answers;
            if (typeof solution === 'object') {
                Object.entries(solution).forEach(([key, value]) => {
                    data.push([`    ${key}`, value]);
                });
            } else {
                data.push(['    ', solution]);
            }
        }
        
        data.push(['', '']);
    });

    return {
        type: 'practice_problems',
        title: 'Practice Problems',
        data: data
    };
}

generateContextualScenariosSection(content) {
    const data = [];
    const scenarios = content.contextualScenarios || [];

    scenarios.forEach((scenario, index) => {
        data.push([`SCENARIO ${index + 1}: ${scenario.scenario}`, '']);
        data.push(['  Context', scenario.context]);
        data.push(['  Application', scenario.application]);
        if (scenario.question) {
            data.push(['  Question', scenario.question]);
        }
        data.push(['', '']);
    });

    return {
        type: 'contextual_scenarios',
        title: 'Real-World Scenarios',
        data: data
    };
}

generateRelatedExperimentsSection(content) {
    const data = [];
    const experiments = content.relatedExperiments || [];

    experiments.forEach((exp, index) => {
        data.push([`${index + 1}. ${exp.name}`, '']);
        data.push(['  Category', exp.category]);
        if (exp.historicalScientist) {
            data.push(['  Scientist', exp.historicalScientist]);
        }
        if (exp.labTitle) {
            data.push(['  Lab', exp.labTitle]);
        }
        data.push(['', '']);
    });

    return {
        type: 'related_experiments',
        title: 'Related Experiments',
        data: data
    };
}

generateMetacognitiveSection(content) {
    const data = [];
    const prompts = content.metacognitivePrompts || {};

    Object.entries(prompts).forEach(([phase, questions]) => {
        data.push([phase.toUpperCase(), '']);
        if (Array.isArray(questions)) {
            questions.forEach(q => {
                data.push(['  •', q]);
            });
        }
        data.push(['', '']);
    });

    return {
        type: 'metacognitive',
        title: 'Metacognitive Prompts',
        data: data
    };
}

extractKeyPoints(content) {
    const keyPoints = [];

    if (content.summary) keyPoints.push(content.summary);
    
    // Extract from concepts
    if (content.concepts && Array.isArray(content.concepts)) {
        keyPoints.push(...content.concepts.slice(0, 3));
    }
    
    // Extract from Mendel's laws
    if (content.mendelsLaws) {
        Object.values(content.mendelsLaws).forEach(law => {
            if (law.statement) keyPoints.push(law.statement);
        });
    }

    return keyPoints.slice(0, 5);
}

// ========================================
// WORKBOOK GENERATION METHODS
// ========================================

generateGeneticsWorkbook() {
    if (!this.currentContent || !this.currentProblem) return;

    const workbook = this.createWorkbookStructure();
    workbook.title = 'Mendelian Genetics Workbook';

    // Start diagram generation in background if needed
    if (this.includeDiagramsInWorkbook) {
        this.diagramsPromise = this.generateGeneticsDiagramDataAsync();
    }

    workbook.sections = [
        this.createProblemSection(),
        this.createContentOverviewSection(),
        this.createDetailedContentSection(),
        this.createDiagramsPlaceholderSection(),
        this.createGeneticCrossesWorkbookSection(),
        this.createPunnettSquareWorkbookSection(),
        this.createProbabilityWorkbookSection(),
        this.createExamplesApplicationsSection(),
        this.createContextualScenariosWorkbookSection(),
        this.createPracticeProblemsWorkbookSection(),
        this.createRelatedExperimentsWorkbookSection(),
        this.createMisconceptionsSection(),
        this.createMetacognitiveWorkbookSection(),
        this.createAssessmentSection()
    ].filter(section => section !== null);

    this.currentWorkbook = workbook;
}

generateExperimentWorkbook(experimentContent) {
    const workbook = this.createWorkbookStructure();
    workbook.title = 'Mendelian Genetics Experiment Workbook';

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
                this.geneticsTopics[topic]?.name || topic,
                this.geneticsTopics[topic]?.description || ''
            ])
        });
    }

    this.currentWorkbook = workbook;
}

async generateGeneticsDiagramDataAsync() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    // Get relevant diagram keys
    const diagramKeys = this.getRelevantGeneticsDiagrams(type);

    this.diagramData = {
        type: type,
        diagrams: diagramKeys,
        renderedImages: [],
        status: 'rendering',
        placeholder: false,
        note: "Mendelian genetics diagrams"
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
        title: 'Genetics Diagrams',
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
        title: 'Genetics Diagrams',
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

getRelevantGeneticsDiagrams(topicType) {
    const diagramMap = {
        mendels_laws: [
            "meiosisDiagram",
            "chromosomes",
            "punnettSquare"
        ],
        monohybrid_crosses: [
            "punnettSquare",
            "meiosisDiagram"
        ],
        dihybrid_crosses: [
            "punnettSquare",
            "chromosomes"
        ],
        test_crosses: [
            "punnettSquare"
        ],
        incomplete_dominance: [
            "punnettSquare"
        ],
        multiple_alleles: [
            "chromosomes"
        ],
        sex_linked: [
            "chromosomes",
            "sexChromosomes"
        ],
        pedigree_analysis: [
            "pedigreeChart"
        ],
        chi_square: [
            "statisticalChart"
        ]
    };

    return diagramMap[topicType] || [];
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
        title: 'Mendelian Genetics Workbook',
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
        type: 'problem',
        title: 'Current Topic',
        data: [
            ['Topic', this.currentProblem.originalTopic],
            ['Type', this.currentProblem.type],
            ['Difficulty', this.currentProblem.difficulty],
            ['Prerequisites', this.currentProblem.prerequisites?.join(', ') || 'None']
        ]
    };
}

createContentOverviewSection() {
    if (!this.currentContent) return null;

    const keyPoints = this.extractKeyPoints(this.currentContent);

    return {
        type: 'overview',
        title: 'Content Overview',
        data: [
            ['Summary', this.currentContent.summary],
            ['', ''],
            ['Key Points', ''],
            ...keyPoints.map((point, i) => [`  ${i + 1}.`, point])
        ]
    };
}

createDetailedContentSection() {
    if (!this.contentSteps || this.contentSteps.length === 0) return null;

    const allData = [];

    this.contentSteps.forEach(section => {
        if (section.title) {
            allData.push(['', '']);
            allData.push([section.title.toUpperCase(), '']);
            allData.push(['', '']);
        }
        
        if (section.data && Array.isArray(section.data)) {
            allData.push(...section.data);
        }
    });

    return {
        type: 'detailed_content',
        title: 'Detailed Content',
        data: allData
    };
}

createGeneticCrossesWorkbookSection() {
    if (!this.currentContent) return null;
    
    const crosses = this.currentContent.possibleCrosses || 
                   this.currentContent.allPossibleMonohybridCrosses || 
                   null;
    
    if (!crosses) return null;

    const data = [];
    
    Object.entries(crosses).forEach(([crossName, crossData]) => {
        data.push([crossName.toUpperCase(), '']);
        Object.entries(crossData).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                data.push([`  ${key}:`, '']);
                value.forEach(item => data.push(['    -', item]));
            } else {
                data.push([`  ${key}`, value]);
            }
        });
        data.push(['', '']);
    });

    return {
        type: 'genetic_crosses',
        title: 'Genetic Crosses',
        data: data
    };
}

createPunnettSquareWorkbookSection() {
    if (!this.currentContent || !this.currentContent.punnettSquareMethod) return null;

    const data = [];
    const method = this.currentContent.punnettSquareMethod;

    if (method.steps) {
        data.push(['STEPS FOR PUNNETT SQUARE', '']);
        method.steps.forEach((step, index) => {
            if (typeof step === 'object') {
                data.push([`${step.step}.`, step.action]);
                if (step.example) {
                    data.push(['  Example', step.example]);
                }
            } else {
                data.push([`${index + 1}.`, step]);
            }
        });
    }

    return {
        type: 'punnett_square',
        title: 'Punnett Square Method',
        data: data
    };
}

createProbabilityWorkbookSection() {
    if (!this.currentContent || !this.currentContent.probabilityRules) return null;

    const data = [];

    Object.entries(this.currentContent.probabilityRules).forEach(([rule, ruleData]) => {
        data.push([rule.toUpperCase(), '']);
        Object.entries(ruleData).forEach(([key, value]) => {
            if (key === 'examples' && Array.isArray(value)) {
                data.push(['  Examples:', '']);
                value.forEach(ex => {
                    data.push(['    Q:', ex.question]);
                    data.push(['    A:', ex.solution]);
                });
            } else {
                data.push([`  ${key}`, value]);
            }
        });
        data.push(['', '']);
    });

    return {
        type: 'probability',
        title: 'Probability Rules',
        data: data
    };
}

createPracticeProblemsWorkbookSection() {
    const problems = this.currentContent?.practiceProblems || 
                    this.currentContent?.practice_problems;
    
    if (!problems || !Array.isArray(problems)) return null;

    const data = [];

    problems.forEach((problem, index) => {
        data.push([`PROBLEM ${index + 1}`, '']);
        data.push(['  Level', problem.level]);
        data.push(['  ', problem.problem]);
        
        if (problem.questions) {
            data.push(['  Questions:', '']);
            problem.questions.forEach(q => data.push(['    -', q]));
        }
        
        data.push(['', '']);
    });

    return {
        type: 'practice_problems',
        title: 'Practice Problems',
        data: data
    };
}

createExamplesApplicationsSection() {
    const examples = this.currentContent?.examples || 
                    this.currentContent?.humanExamples;
    
    if (!examples) return null;

    const data = [];

    if (Array.isArray(examples)) {
        examples.forEach((example, index) => {
            if (typeof example === 'object') {
                data.push([`EXAMPLE ${index + 1}`, '']);
                Object.entries(example).forEach(([key, value]) => {
                    data.push([`  ${key}`, value]);
                });
            } else {
                data.push([`${index + 1}.`, example]);
            }
            data.push(['', '']);
        });
    }

    return {
        type: 'examples',
        title: 'Examples and Applications',
        data: data
    };
}

createContextualScenariosWorkbookSection() {
    if (!this.currentContent?.contextualScenarios) return null;

    const data = [];

    this.currentContent.contextualScenarios.forEach((scenario, index) => {
        data.push([`SCENARIO ${index + 1}: ${scenario.scenario}`, '']);
        data.push(['  Context', scenario.context]);
        data.push(['  Application', scenario.application]);
        if (scenario.question) {
            data.push(['  Question', scenario.question]);
        }
        data.push(['', '']);
    });

    return {
        type: 'contextual_scenarios',
        title: 'Real-World Scenarios',
        data: data
    };
}

createRelatedExperimentsWorkbookSection() {
    if (!this.currentContent?.relatedExperiments) return null;

    const data = [];

    this.currentContent.relatedExperiments.forEach((exp, index) => {
        data.push([`${index + 1}. ${exp.name}`, '']);
        data.push(['  Category', exp.category]);
        if (exp.historicalScientist) {
            data.push(['  Scientist', exp.historicalScientist]);
        }
        data.push(['', '']);
    });

    return {
        type: 'related_experiments',
        title: 'Related Experiments',
        data: data
    };
}

createMisconceptionsSection() {
    if (!this.includeCommonMisconceptions || !this.currentProblem) return null;

    const misconceptions = this.commonMisconceptions[this.currentProblem.type];
    if (!misconceptions) return null;

    const data = [];

    Object.entries(misconceptions).forEach(([category, items]) => {
        data.push([category.toUpperCase(), '']);
        items.forEach(item => {
            data.push(['  ✗', item]);
        });
        data.push(['', '']);
    });

    return {
        type: 'misconceptions',
        title: 'Common Misconceptions',
        data: data
    };
}

createMetacognitiveWorkbookSection() {
    if (!this.metacognitiveSupport || !this.currentContent?.metacognitivePrompts) return null;

    const data = [];

    Object.entries(this.currentContent.metacognitivePrompts).forEach(([phase, prompts]) => {
        data.push([phase.toUpperCase(), '']);
        if (Array.isArray(prompts)) {
            prompts.forEach(prompt => {
                data.push(['  •', prompt]);
            });
        }
        data.push(['', '']);
    });

    return {
        type: 'metacognitive',
        title: 'Metacognitive Prompts',
        data: data
    };
}

createAssessmentSection() {
    if (!this.assessmentFeedback) return null;

    const objectives = this.generateGeneticsLearningObjectives();
    const prerequisites = this.identifyGeneticsPrerequisites();
    const studyTips = this.generateGeneticsStudyTips();

    const data = [];

    if (objectives.length > 0) {
        data.push(['LEARNING OBJECTIVES', '']);
        objectives.forEach(obj => {
            data.push(['  -', obj]);
        });
        data.push(['', '']);
    }

    if (prerequisites.length > 0) {
        data.push(['PREREQUISITES', '']);
        prerequisites.forEach(prereq => {
            data.push(['  -', prereq]);
        });
        data.push(['', '']);
    }

    if (studyTips.length > 0) {
        data.push(['STUDY TIPS', '']);
        studyTips.forEach(tip => {
            data.push(['  •', tip]);
        });
    }

    return {
        type: 'assessment',
        title: 'Learning Guide',
        data: data
    };
}



// ========================================
// GENETICS-SPECIFIC HELPER METHODS
// ========================================

getTopicRelevance(topicType) {
    const relevance = {
        mendels_laws: "Mendel's laws establish the fundamental principles of inheritance in all sexually reproducing organisms",
        monohybrid_crosses: "Monohybrid crosses demonstrate how single traits are inherited and predict offspring ratios",
        dihybrid_crosses: "Dihybrid crosses reveal how multiple traits are inherited independently",
        test_crosses: "Test crosses determine unknown genotypes and are essential for breeding programs",
        incomplete_dominance: "Incomplete dominance shows that not all traits follow simple dominant/recessive patterns",
        multiple_alleles: "Multiple allele systems like ABO blood types demonstrate genetic complexity in populations",
        sex_linked: "Sex-linked inheritance explains why some traits appear predominantly in one sex",
        pedigree_analysis: "Pedigree analysis traces inheritance patterns through families and predicts genetic risks",
        chi_square: "Chi-square analysis provides statistical validation of genetic hypotheses"
    };

    return relevance[topicType] || "Important genetics concept";
}

suggestRelatedTopics() {
    if (!this.currentProblem) return [];

    const relatedTopicsMap = {
        mendels_laws: ['monohybrid_crosses', 'dihybrid_crosses', 'test_crosses'],
        monohybrid_crosses: ['mendels_laws', 'test_crosses', 'incomplete_dominance'],
        dihybrid_crosses: ['mendels_laws', 'monohybrid_crosses', 'chi_square'],
        test_crosses: ['monohybrid_crosses', 'dihybrid_crosses'],
        incomplete_dominance: ['monohybrid_crosses', 'multiple_alleles'],
        multiple_alleles: ['incomplete_dominance', 'pedigree_analysis'],
        sex_linked: ['pedigree_analysis', 'mendels_laws'],
        pedigree_analysis: ['sex_linked', 'multiple_alleles', 'mendels_laws'],
        chi_square: ['dihybrid_crosses', 'monohybrid_crosses']
    };

    const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];

    return relatedTypes.map(type => ({
        type: type,
        name: this.geneticsTopics[type]?.name,
        description: this.geneticsTopics[type]?.description
    }));
}

// DIAGRAM GENERATION

generateGeneticsDiagramData() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    this.diagramData = {
        type: type,
        diagrams: this.getRelevantGeneticsDiagrams(type),
        placeholder: true,
        note: "Diagram generation includes Punnett squares, pedigrees, and chromosomal diagrams"
    };
}

generateGeneticsGlossary() {
    if (!this.currentContent) return {};

    const glossary = {};

    // Extract from key definitions
    if (this.currentContent.keyDefinitions) {
        Object.entries(this.currentContent.keyDefinitions).forEach(([term, definition]) => {
            if (typeof definition === 'object' && definition.definition) {
                glossary[term] = definition.definition;
            } else if (typeof definition === 'string') {
                glossary[term] = definition;
            }
        });
    }

    // Extract from Mendel's laws
    if (this.currentContent.mendelsLaws) {
        Object.entries(this.currentContent.mendelsLaws).forEach(([lawName, lawData]) => {
            if (lawData.statement) {
                glossary[this.formatKey(lawName)] = lawData.statement;
            }
        });
    }

    // Extract from pedigree symbols
    if (this.currentContent.pedigree_symbols) {
        Object.entries(this.currentContent.pedigree_symbols).forEach(([category, symbols]) => {
            if (typeof symbols === 'object') {
                Object.entries(symbols).forEach(([symbol, meaning]) => {
                    glossary[`Pedigree: ${symbol}`] = meaning;
                });
            }
        });
    }

    // Extract from modes of inheritance
    if (this.currentContent.modes_of_inheritance) {
        Object.entries(this.currentContent.modes_of_inheritance).forEach(([mode, modeData]) => {
            if (modeData.definition || modeData.description) {
                glossary[this.formatKey(mode)] = modeData.definition || modeData.description;
            }
        });
    }

    // Extract chi-square terms
    if (this.currentContent.theory) {
        Object.entries(this.currentContent.theory).forEach(([concept, conceptData]) => {
            if (typeof conceptData === 'object' && conceptData.definition) {
                glossary[this.formatKey(concept)] = conceptData.definition;
            }
        });
    }

    return glossary;
}

extractGlossaryFromDefinitions(definitions, glossary) {
    Object.entries(definitions).forEach(([key, value]) => {
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
        .replace(/_/g, ' ')
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// ========================================
// GENETICS VISUALIZATION HELPERS
// ========================================

visualizePunnettSquare(parent1, parent2) {
    const square = this.generatePunnettSquare(parent1, parent2);
    
    const visualization = {
        type: 'punnett_square',
        parents: { parent1, parent2 },
        grid: square,
        size: `${square.length - 1}x${square[0].length - 1}`,
        description: `Punnett square for ${parent1} × ${parent2}`
    };

    return visualization;
}

visualizePedigree(pedigreeData) {
    // Generate pedigree visualization structure
    const visualization = {
        type: 'pedigree',
        generations: pedigreeData.generations || [],
        affectedIndividuals: pedigreeData.affected || [],
        carriers: pedigreeData.carriers || [],
        description: 'Family pedigree showing trait inheritance'
    };

    return visualization;
}

visualizeChiSquareDistribution(observed, expected) {
    const chiSquare = this.calculateChiSquareValue(observed, expected);
    const df = observed.length - 1;
    
    const visualization = {
        type: 'chi_square',
        observed: observed,
        expected: expected,
        chiSquareValue: chiSquare,
        degreesOfFreedom: df,
        criticalValue: this.getCriticalValue(df, 0.05),
        significant: chiSquare > this.getCriticalValue(df, 0.05)
    };

    return visualization;
}

calculateChiSquareValue(observed, expected) {
    let chiSquare = 0;
    
    for (let i = 0; i < observed.length; i++) {
        const deviation = observed[i] - expected[i];
        chiSquare += (deviation * deviation) / expected[i];
    }
    
    return chiSquare;
}

getCriticalValue(df, alpha) {
    // Common critical values for chi-square (p = 0.05)
    const criticalValues = {
        1: 3.841,
        2: 5.991,
        3: 7.815,
        4: 9.488,
        5: 11.070,
        6: 12.592,
        7: 14.067,
        8: 15.507,
        9: 16.919,
        10: 18.307
    };

    return criticalValues[df] || null;
}

// ========================================
// GENETICS PROBLEM GENERATORS
// ========================================

generateRandomGeneticsCross(crossType = 'monohybrid') {
    const alleles = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd'];
    
    if (crossType === 'monohybrid') {
        const genotypes = ['AA', 'Aa', 'aa'];
        const parent1 = genotypes[Math.floor(Math.random() * genotypes.length)];
        const parent2 = genotypes[Math.floor(Math.random() * genotypes.length)];
        
        return {
            type: 'monohybrid',
            parent1: parent1,
            parent2: parent2,
            punnettSquare: this.generatePunnettSquare(parent1, parent2)
        };
    } else if (crossType === 'dihybrid') {
        const genotypes = ['AABB', 'AaBb', 'aabb', 'AABb', 'AaBB'];
        const parent1 = genotypes[Math.floor(Math.random() * genotypes.length)];
        const parent2 = genotypes[Math.floor(Math.random() * genotypes.length)];
        
        return {
            type: 'dihybrid',
            parent1: parent1,
            parent2: parent2,
            punnettSquare: this.generatePunnettSquare(parent1, parent2)
        };
    }
    
    return null;
}

generateGeneticsPracticeProblem(difficulty = 'intermediate') {
    const problemTemplates = {
        beginner: [
            {
                type: 'monohybrid',
                question: "In pea plants, tall (T) is dominant over short (t). Cross two heterozygous tall plants.",
                setup: { parent1: 'Tt', parent2: 'Tt' },
                answer: { genotypic: '1:2:1', phenotypic: '3:1' }
            },
            {
                type: 'test_cross',
                question: "A tall pea plant is crossed with a short plant, producing 50% tall and 50% short offspring. What is the genotype of the tall parent?",
                setup: { unknown: 'T_', known: 'tt' },
                answer: 'Tt'
            }
        ],
        intermediate: [
            {
                type: 'dihybrid',
                question: "In guinea pigs, black fur (B) is dominant over white (b), and short hair (S) is dominant over long (s). Cross two heterozygous black, short-haired guinea pigs.",
                setup: { parent1: 'BbSs', parent2: 'BbSs' },
                answer: { phenotypic: '9:3:3:1' }
            },
            {
                type: 'incomplete_dominance',
                question: "In snapdragons, red flowers (R) and white flowers (r) show incomplete dominance. What offspring result from crossing two pink flowers?",
                setup: { parent1: 'Rr', parent2: 'Rr' },
                answer: { ratio: '1 red : 2 pink : 1 white' }
            }
        ],
        advanced: [
            {
                type: 'multiple_alleles',
                question: "A woman with type A blood (father had type O) marries a man with type B blood (mother had type O). What blood types are possible in their children?",
                setup: { parent1: 'IAi', parent2: 'IBi' },
                answer: 'All four types possible: A, B, AB, O'
            },
            {
                type: 'sex_linked',
                question: "Hemophilia is X-linked recessive. A carrier woman marries a normal man. What is the probability their first son will have hemophilia?",
                setup: { mother: 'XHXh', father: 'XHY' },
                answer: '25% (or 1/4)'
            }
        ]
    };

    const problems = problemTemplates[difficulty] || problemTemplates.intermediate;
    return problems[Math.floor(Math.random() * problems.length)];
}

// ========================================
// GENETICS CONTENT ENRICHMENT
// ========================================

enrichWithGeneticsExamples(content) {
    if (!this.includeExamples || content.examples) return content;

    const exampleDatabase = {
        mendels_laws: [
            "Pea plant height: Classic Mendelian trait showing 3:1 ratio in F2",
            "Human widow's peak: Dominant trait following Mendel's law of dominance",
            "Flower color in many plants: Demonstrates segregation of alleles"
        ],
        monohybrid_crosses: [
            "PKU (phenylketonuria): Autosomal recessive disease, 25% risk for carrier parents",
            "Huntington's disease: Autosomal dominant, 50% risk if one parent affected",
            "Tongue rolling: Simple dominant trait (though actually polygenic)"
        ],
        dihybrid_crosses: [
            "Corn kernel color and texture: Classic demonstration of 9:3:3:1 ratio",
            "Dog coat color and length: Independent assortment of two genes",
            "Fruit fly body color and wing length: Morgan's early dihybrid experiments"
        ],
        incomplete_dominance: [
            "Snapdragon flower color: Red × White → Pink F1",
            "Hypercholesterolemia: Heterozygotes have intermediate cholesterol levels",
            "Andalusian chicken feathers: Black × White → Blue-gray"
        ],
        multiple_alleles: [
            "ABO blood types: Three alleles (IA, IB, i) produce four phenotypes",
            "HLA system: Hundreds of alleles for tissue compatibility",
            "Rabbit coat color: Four alleles with dominance hierarchy"
        ],
        sex_linked: [
            "Color blindness: Affects 8% of males, 0.5% of females",
            "Hemophilia: Royal disease traced through Queen Victoria",
            "Duchenne muscular dystrophy: Severe X-linked recessive disorder"
        ],
        pedigree_analysis: [
            "Tracking cystic fibrosis through families",
            "Royal hemophilia pedigrees of European royalty",
            "Huntington disease: Late-onset dominant disorder"
        ],
        chi_square: [
            "Testing Mendel's 3:1 ratio: Used to validate genetic hypotheses",
            "Detecting linkage: Deviations from 9:3:3:1 indicate linked genes",
            "Population genetics: Testing Hardy-Weinberg equilibrium"
        ]
    };

    if (exampleDatabase[this.currentProblem.type]) {
        content.examples = content.examples || [];
        content.examples.push(...exampleDatabase[this.currentProblem.type]);
    }

    return content;
}

addGeneticsComparativeContext(content) {
    if (!this.includeComparisons || content.comparison) return content;

    const comparativeData = {
        mendels_laws: {
            segregation: "Alleles separate during meiosis (vs blending together permanently)",
            independent_assortment: "Applies to unlinked genes (vs linked genes on same chromosome)",
            dominance: "One allele masks another (vs incomplete dominance or codominance)"
        },
        monohybrid_crosses: {
            F2_ratio: "3:1 for simple dominance (vs 1:2:1 for incomplete dominance)",
            test_cross: "1:1 ratio if heterozygous (vs all dominant if homozygous)",
            inheritance: "Predictable ratios (vs polygenic traits with continuous variation)"
        },
        dihybrid_crosses: {
            ratio: "9:3:3:1 for independent genes (vs modified ratios for linkage)",
            gametes: "Four types from dihybrid (vs two types from monohybrid)",
            complexity: "16 boxes in Punnett square (vs 4 for monohybrid)"
        },
        incomplete_dominance: {
            phenotype: "Intermediate heterozygote (vs dominant phenotype)",
            ratio: "1:2:1 phenotypic (vs 3:1 for complete dominance)",
            expression: "Blended appearance (vs both traits in codominance)"
        },
        sex_linked: {
            inheritance: "Different patterns in males vs females",
            expression: "Hemizygous males (vs two copies in females)",
            transmission: "No male-to-male (vs possible in autosomal)"
        }
    };

    if (comparativeData[this.currentProblem.type]) {
        content.comparativeContext = comparativeData[this.currentProblem.type];
    }

    return content;
}

validateGeneticsContent(content) {
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
        content.keyDefinitions ||
        content.mendelsLaws ||
        content.possibleCrosses ||
        content.punnettSquareMethod ||
        content.pedigree_symbols;

    if (!hasSubstantiveContent) {
        validationResults.warnings.push("Limited substantive content");
        validationResults.suggestions.push("Consider adding more detailed information");
    }

    // Check for educational value
    if (!content.examples && !content.humanExamples) {
        validationResults.suggestions.push("Consider adding examples");
    }

    // Check for practice problems
    if (!content.practiceProblems && !content.practice_problems) {
        validationResults.suggestions.push("Consider adding practice problems");
    }

    return validationResults;
}

// ========================================
// GENETICS TIMELINE GENERATORS
// ========================================

generateGeneticsHistoryTimeline() {
    return [
        { year: 1856, event: 'Mendel begins pea plant experiments', scientist: 'Gregor Mendel' },
        { year: 1866, event: 'Mendel publishes findings (ignored)', scientist: 'Gregor Mendel' },
        { year: 1900, event: "Mendel's work rediscovered", scientists: 'de Vries, Correns, von Tschermak' },
        { year: 1902, event: 'Chromosome theory proposed', scientist: 'Sutton and Boveri' },
        { year: 1910, event: 'Sex-linked inheritance discovered', scientist: 'Thomas Hunt Morgan' },
        { year: 1913, event: 'First genetic map created', scientist: 'Alfred Sturtevant' },
        { year: 1953, event: 'DNA structure discovered', scientists: 'Watson and Crick' },
        { year: 2003, event: 'Human Genome Project completed', organization: 'International consortium' }
    ];
}

generateGeneticCrossTimeline(crossType) {
    const timelines = {
        monohybrid: [
            { step: 'P Generation', action: 'Cross true-breeding parents', duration: '1 season' },
            { step: 'F1 Generation', action: 'Observe all dominant phenotype', duration: '1 season' },
            { step: 'F1 Self-cross', action: 'Allow F1 to self-pollinate', duration: '1 season' },
            { step: 'F2 Generation', action: 'Observe 3:1 ratio', duration: '1 season' },
            { step: 'Total', duration: '3-4 generations (varies by organism)' }
        ],
        dihybrid: [
            { step: 'P Generation', action: 'Cross AABB × aabb', duration: '1 season' },
            { step: 'F1 Generation', action: 'All AaBb (both dominant)', duration: '1 season' },
            { step: 'F1 × F1', action: 'Cross or self-pollinate', duration: '1 season' },
            { step: 'F2 Generation', action: 'Observe 9:3:3:1 ratio', duration: '1 season' },
            { step: 'Total', duration: '3-4 generations' }
        ],
        pedigree_analysis: [
            { step: 'Data Collection', action: 'Gather family history', duration: 'Variable' },
            { step: 'Pedigree Construction', action: 'Draw family tree with symbols', duration: 'Hours' },
            { step: 'Pattern Analysis', action: 'Identify inheritance mode', duration: 'Hours-Days' },
            { step: 'Genotype Assignment', action: 'Determine probable genotypes', duration: 'Hours' },
            { step: 'Risk Calculation', action: 'Calculate probabilities', duration: 'Minutes-Hours' }
        ]
    };

    return timelines[crossType] || [];
}

// ========================================
// GENETICS CONTENT HIERARCHY
// ========================================

generateGeneticsContentHierarchy() {
    if (!this.currentContent) return null;

    const hierarchy = {
        root: this.currentContent.topic,
        children: []
    };

    if (this.currentContent.keyDefinitions) {
        hierarchy.children.push({
            name: 'Key Definitions',
            type: 'definitions',
            count: Object.keys(this.currentContent.keyDefinitions).length
        });
    }

    if (this.currentContent.mendelsLaws) {
        hierarchy.children.push({
            name: "Mendel's Laws",
            type: 'laws',
            count: Object.keys(this.currentContent.mendelsLaws).length
        });
    }

    if (this.currentContent.possibleCrosses) {
        hierarchy.children.push({
            name: 'Genetic Crosses',
            type: 'crosses',
            count: Object.keys(this.currentContent.possibleCrosses).length
        });
    }

    if (this.currentContent.punnettSquareMethod) {
        hierarchy.children.push({
            name: 'Punnett Square Method',
            type: 'method'
        });
    }

    if (this.currentContent.practiceProblems) {
        hierarchy.children.push({
            name: 'Practice Problems',
            type: 'problems',
            count: this.currentContent.practiceProblems.length
        });
    }

    return hierarchy;
}

// ========================================
// GENETICS RATIO VALIDATORS
// ========================================

validateMendelianRatio(observed, expected, ratioType) {
    const validation = {
        observed: observed,
        expected: expected,
        ratioType: ratioType,
        isValid: false,
        chiSquare: null,
        pValue: null,
        interpretation: ''
    };

    // Calculate chi-square
    validation.chiSquare = this.calculateChiSquareValue(observed, expected);
    
    // Get degrees of freedom
    const df = observed.length - 1;
    const criticalValue = this.getCriticalValue(df, 0.05);

    // Determine if valid
    validation.isValid = validation.chiSquare < criticalValue;
    
    // Interpretation
    if (validation.isValid) {
        validation.interpretation = `Observed data fits expected ${ratioType} ratio (χ² = ${validation.chiSquare.toFixed(2)} < ${criticalValue})`;
    } else {
        validation.interpretation = `Observed data does NOT fit expected ${ratioType} ratio (χ² = ${validation.chiSquare.toFixed(2)} > ${criticalValue})`;
    }

    return validation;
}

predictOffspringRatios(parent1, parent2, crossType = 'monohybrid') {
    const square = this.generatePunnettSquare(parent1, parent2);
    
    // Count phenotypes
    const phenotypeCounts = {};
    const genotypeCounts = {};
    
    // Skip header row and column
    for (let i = 1; i < square.length; i++) {
        for (let j = 1; j < square[i].length; j++) {
            const genotype = square[i][j];
            
            // Count genotypes
            genotypeCounts[genotype] = (genotypeCounts[genotype] || 0) + 1;
            
            // Count phenotypes (simplified: uppercase = dominant)
            const phenotype = this.genotypeToPhenotype(genotype);
            phenotypeCounts[phenotype] = (phenotypeCounts[phenotype] || 0) + 1;
        }
    }

    const totalBoxes = (square.length - 1) * (square[0].length - 1);

    return {
        cross: `${parent1} × ${parent2}`,
        type: crossType,
        genotypeCounts: genotypeCounts,
        phenotypeCounts: phenotypeCounts,
        genotypicRatio: this.calculateRatio(genotypeCounts),
        phenotypicRatio: this.calculateRatio(phenotypeCounts),
        totalOffspring: totalBoxes,
        punnettSquare: square
    };
}

genotypeToPhenotype(genotype) {
    // Simplified: any uppercase letter = dominant phenotype
    // This is a basic implementation; real implementation would be more sophisticated
    return genotype.match(/[A-Z]/) ? 'Dominant' : 'Recessive';
}

calculateRatio(counts) {
    const values = Object.values(counts);
    if (values.length === 0) return '';
    
    // Find GCD to simplify ratio
    const gcd = values.reduce((a, b) => {
        while (b) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    });

    return values.map(v => v / gcd).join(':');
}

// ========================================
// GENETICS EXPORT AND REPORTING
// ========================================

generateGeneticsReport() {
    if (!this.currentContent || !this.currentProblem) return null;

    const report = {
        title: `Genetics Report: ${this.currentContent.topic}`,
        timestamp: new Date().toISOString(),
        topic: this.currentProblem.type,
        difficulty: this.currentProblem.difficulty,
        
        summary: {
            topic: this.currentContent.topic,
            category: this.currentContent.category,
            summary: this.currentContent.summary
        },
        
        metrics: this.getGeneticsContentQualityMetrics(),
        
        keyPoints: this.extractKeyPoints(this.currentContent),
        
        relatedTopics: this.suggestRelatedTopics(),
        
        learningObjectives: this.generateGeneticsLearningObjectives(),
        
        prerequisites: this.identifyGeneticsPrerequisites(),
        
        studyTips: this.generateGeneticsStudyTips(),
        
        glossary: this.generateGeneticsGlossary(),
        
        relatedExperiments: this.currentContent.relatedExperiments || []
    };

    return report;
}

exportGeneticsDataToJSON() {
    return {
        workbook: this.currentWorkbook,
        content: this.currentContent,
        problem: this.currentProblem,
        diagrams: this.diagramData,
        learnerProfile: this.learnerProfile,
        timestamp: new Date().toISOString()
    };
}

// ========================================
// GENETICS LEARNING ANALYTICS
// ========================================

trackGeneticsLearningProgress(topicType, problemsSolved, accuracy) {
    const progress = {
        topic: topicType,
        problemsSolved: problemsSolved,
        accuracy: accuracy,
        timestamp: new Date().toISOString(),
        performance: this.assessPerformance(accuracy)
    };

    this.updateLearnerProfile(topicType, progress);

    return progress;
}

assessPerformance(accuracy) {
    if (accuracy >= 0.9) return 'excellent';
    if (accuracy >= 0.8) return 'good';
    if (accuracy >= 0.7) return 'satisfactory';
    if (accuracy >= 0.6) return 'needs_improvement';
    return 'struggling';
}

generatePersonalizedRecommendations() {
    const recommendations = [];

    // Based on struggling topics
    if (this.learnerProfile.strugglingTopics.length > 0) {
        recommendations.push({
            type: 'review',
            message: `Review these topics: ${this.learnerProfile.strugglingTopics.join(', ')}`,
            priority: 'high'
        });
    }

    // Based on mastered topics
    if (this.learnerProfile.masteredTopics.length > 0) {
        const nextTopics = this.suggestNextTopics(this.learnerProfile.masteredTopics);
        if (nextTopics.length > 0) {
            recommendations.push({
                type: 'advance',
                message: `Ready to learn: ${nextTopics.join(', ')}`,
                priority: 'medium'
            });
        }
    }

    // Based on learning style
    if (this.learnerProfile.preferredLearningStyle === 'visual') {
        recommendations.push({
            type: 'method',
            message: 'Use more Punnett squares and pedigree diagrams',
            priority: 'low'
        });
    }

    return recommendations;
}

suggestNextTopics(masteredTopics) {
    const progressionMap = {
        mendels_laws: ['monohybrid_crosses'],
        monohybrid_crosses: ['dihybrid_crosses', 'test_crosses'],
        dihybrid_crosses: ['chi_square'],
        incomplete_dominance: ['multiple_alleles'],
        multiple_alleles: ['sex_linked'],
        sex_linked: ['pedigree_analysis']
    };

    const nextTopics = [];
    
    masteredTopics.forEach(topic => {
        const suggested = progressionMap[topic] || [];
        suggested.forEach(next => {
            if (!masteredTopics.includes(next) && !nextTopics.includes(next)) {
                nextTopics.push(next);
            }
        });
    });

    return nextTopics;
}






// ========================================
// GENETICS-SPECIFIC UTILITY METHODS
// ========================================

generateGeneticsAnalogy(concept) {
    const analogies = {
        // Mendelian concepts
        allele: "Like different versions of the same app (red or green)",
        dominant: "Like a loud voice that drowns out a quiet one",
        recessive: "Like a quiet voice only heard when no loud voice present",
        heterozygous: "Like having one of each version (Aa)",
        homozygous: "Like having two copies of the same version (AA or aa)",
        
        // Crosses
        punnett_square: "Like a multiplication table for genes",
        test_cross: "Like a detective investigation to reveal hidden alleles",
        monohybrid: "Like tracking one trait through a family tree",
        dihybrid: "Like tracking two traits simultaneously",
        
        // Probability
        independent_assortment: "Like flipping two coins - one doesn't affect the other",
        segregation: "Like shuffling a deck and dealing one card to each player",
        
        // Inheritance patterns
        incomplete_dominance: "Like mixing red and white paint to get pink",
        codominance: "Like a polka-dot pattern with both colors showing",
        sex_linked: "Like traits that hitchhike on sex chromosomes",
        
        // Analysis tools
        pedigree: "Like a family tree showing who has what trait",
        chi_square: "Like checking if dice are fair by comparing expected vs actual rolls",
        
        // Molecular
        gene: "Like a recipe in a cookbook",
        genotype: "Like the recipe you have",
        phenotype: "Like the dish you made from the recipe"
    };

    return analogies[concept] || "Represents a genetic principle";
}

adaptGeneticsLanguage(text, level) {
    if (!text) return '';

    const adaptations = {
        basic: {
            replacements: {
                'allele': 'gene version',
                'heterozygous': 'mixed (Aa)',
                'homozygous': 'same (AA or aa)',
                'genotype': 'genetic makeup',
                'phenotype': 'appearance',
                'gamete': 'sex cell',
                'zygote': 'fertilized egg',
                'F1 generation': 'first generation',
                'F2 generation': 'second generation',
                'dominant': 'stronger trait',
                'recessive': 'hidden trait'
            }
        },
        intermediate: {
            replacements: {
                'heterozygous': 'heterozygous (Aa)',
                'homozygous': 'homozygous (AA or aa)',
                'F1': 'F₁',
                'F2': 'F₂'
            }
        },
        advanced: {
            replacements: {
                'allele': 'allele (alternative gene form)',
                'heterozygous': 'heterozygous (possessing two different alleles)',
                'homozygous': 'homozygous (possessing two identical alleles)',
                'gamete': 'gamete (haploid reproductive cell)'
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

generateGeneticsLearningObjectives() {
    if (!this.currentProblem) return [];

    const objectivesDatabase = {
        mendels_laws: [
            "State Mendel's three laws of inheritance",
            "Explain the Law of Segregation at the cellular level",
            "Describe the Law of Independent Assortment",
            "Distinguish between genotype and phenotype",
            "Apply Mendel's laws to predict offspring ratios"
        ],
        monohybrid_crosses: [
            "Construct Punnett squares for monohybrid crosses",
            "Predict genotypic and phenotypic ratios from monohybrid crosses",
            "Distinguish between homozygous and heterozygous genotypes",
            "Explain the 3:1 phenotypic ratio in F2 generation",
            "Determine parental genotypes from offspring ratios"
        ],
        dihybrid_crosses: [
            "Construct 4×4 Punnett squares for dihybrid crosses",
            "Explain the 9:3:3:1 phenotypic ratio",
            "Apply the Law of Independent Assortment",
            "Calculate probabilities using product and sum rules",
            "Identify gamete types from dihybrid genotypes"
        ],
        test_crosses: [
            "Design test crosses to determine unknown genotypes",
            "Interpret test cross results",
            "Distinguish between homozygous and heterozygous individuals",
            "Apply test crosses in genetic analysis"
        ],
        incomplete_dominance: [
            "Explain incomplete dominance and how it differs from complete dominance",
            "Predict offspring from incomplete dominance crosses",
            "Distinguish incomplete dominance from codominance",
            "Recognize 1:2:1 phenotypic ratio"
        ],
        multiple_alleles: [
            "Explain how multiple alleles differ from simple alleles",
            "Determine ABO blood type genotypes and phenotypes",
            "Solve genetics problems involving multiple alleles",
            "Explain codominance in ABO blood system"
        ],
        sex_linked: [
            "Explain X-linked inheritance patterns",
            "Construct Punnett squares for sex-linked traits",
            "Predict offspring ratios for X-linked traits",
            "Identify carriers in X-linked inheritance",
            "Explain why X-linked recessive traits affect males more"
        ],
        pedigree_analysis: [
            "Interpret pedigree symbols and notation",
            "Determine modes of inheritance from pedigrees",
            "Identify carriers in autosomal recessive pedigrees",
            "Distinguish autosomal from sex-linked inheritance",
            "Calculate genetic risks from pedigrees"
        ],
        chi_square: [
            "Explain the purpose of chi-square test in genetics",
            "Calculate chi-square values from genetic data",
            "Interpret chi-square results using critical values",
            "Determine if observed ratios fit expected Mendelian ratios",
            "Understand degrees of freedom in chi-square analysis"
        ]
    };

    return objectivesDatabase[this.currentProblem.type] || [
        "Understand key genetic concepts",
        "Apply genetics principles to solve problems",
        "Analyze inheritance patterns"
    ];
}

identifyGeneticsPrerequisites() {
    if (!this.currentProblem) return [];

    const prerequisitesDatabase = {
        mendels_laws: [
            "Basic understanding of cell division (meiosis)",
            "Knowledge of chromosomes and DNA",
            "Understanding of sexual reproduction"
        ],
        monohybrid_crosses: [
            "Mendel's Laws (especially Law of Segregation)",
            "Genotype vs phenotype concepts",
            "Basic probability"
        ],
        dihybrid_crosses: [
            "Monohybrid crosses",
            "Law of Independent Assortment",
            "Probability rules (product and sum)"
        ],
        test_crosses: [
            "Monohybrid crosses",
            "Genotype determination",
            "Punnett square construction"
        ],
        incomplete_dominance: [
            "Basic Mendelian genetics",
            "Dominant and recessive concepts",
            "Genotype-phenotype relationships"
        ],
        multiple_alleles: [
            "Basic allele concepts",
            "Codominance",
            "Punnett square methods"
        ],
        sex_linked: [
            "Chromosomes and sex determination",
            "Mendelian inheritance patterns",
            "Punnett squares"
        ],
        pedigree_analysis: [
            "Inheritance patterns (dominant, recessive)",
            "Genotype and phenotype",
            "Carrier concepts"
        ],
        chi_square: [
            "Mendelian ratios",
            "Basic statistics",
            "Probability concepts"
        ]
    };

    return prerequisitesDatabase[this.currentProblem.type] || [
        "Basic genetics knowledge",
        "Understanding of inheritance"
    ];
}

generateGeneticsStudyTips() {
    if (!this.currentProblem) return [];

    const studyTipsDatabase = {
        mendels_laws: [
            "Draw out meiosis to visualize segregation",
            "Create flashcards for key terms (allele, genotype, phenotype)",
            "Practice explaining laws in your own words",
            "Use coin flips to model segregation"
        ],
        monohybrid_crosses: [
            "Practice drawing Punnett squares from scratch",
            "Memorize 3:1 ratio for heterozygous × heterozygous",
            "Work through multiple practice problems",
            "Draw out parent genotypes before starting Punnett square",
            "Check your work by counting all boxes"
        ],
        dihybrid_crosses: [
            "Master gamete formation using FOIL method",
            "Practice 4×4 Punnett squares regularly",
            "Memorize 9:3:3:1 ratio",
            "Use branch diagrams as alternative to Punnett squares",
            "Verify probabilities add up to 1"
        ],
        test_crosses: [
            "Remember: test cross always uses homozygous recessive",
            "Practice interpreting ratios (1:1 vs all dominant)",
            "Draw Punnett squares for both possible genotypes",
            "Use test crosses to check your understanding"
        ],
        incomplete_dominance: [
            "Visualize blending as intermediate phenotype",
            "Remember 1:2:1 phenotypic ratio",
            "Practice with snapdragon flower color examples",
            "Distinguish from codominance (both vs intermediate)"
        ],
        multiple_alleles: [
            "Make ABO blood type chart for reference",
            "Practice all possible blood type crosses",
            "Remember codominance between I^A and I^B",
            "Work paternity problems for practice"
        ],
        sex_linked: [
            "Draw X and Y chromosomes to visualize",
            "Practice notation: X^a Y for affected male",
            "Remember no male-to-male transmission",
            "Work carrier female × normal male crosses repeatedly"
        ],
        pedigree_analysis: [
            "Memorize pedigree symbols",
            "Practice determining inheritance patterns",
            "Look for male-to-male transmission first (rules out X-linked)",
            "Check for generation skipping (indicates recessive)",
            "Assign genotypes systematically"
        ],
        chi_square: [
            "Memorize chi-square formula",
            "Practice calculating with different datasets",
            "Remember degrees of freedom = categories - 1",
            "Know critical values for common df",
            "Always state null hypothesis clearly"
        ]
    };

    return studyTipsDatabase[this.currentProblem.type] || [
        "Review material regularly with active recall",
        "Practice problems are essential",
        "Draw diagrams to visualize concepts",
        "Explain concepts to others to test understanding"
    ];
}

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

    if (!content.summary) {
        validationResults.suggestions.push("Consider adding a summary");
    }

    // Check for substantive content
    const hasSubstantiveContent = 
        content.keyDefinitions ||
        content.mendelsLaws ||
        content.possibleCrosses ||
        content.punnettSquareMethod ||
        content.probabilityRules;

    if (!hasSubstantiveContent) {
        validationResults.warnings.push("Limited substantive content");
        validationResults.suggestions.push("Consider adding more detailed information");
    }

    if (!content.examples && !content.humanExamples) {
        validationResults.suggestions.push("Consider adding examples");
    }

    if (!content.practiceProblems && !content.practice_problems) {
        validationResults.suggestions.push("Consider adding practice problems");
    }

    return validationResults;
}

calculateGeneticsContentCompleteness() {
    if (!this.currentContent) return 0;

    let score = 0;
    const maxScore = 10;

    if (this.currentContent.topic) score += 1;
    if (this.currentContent.summary) score += 1;
    if (this.currentContent.keyDefinitions) score += 1;
    if (this.currentContent.examples || this.currentContent.humanExamples) score += 1;
    if (this.currentContent.practiceProblems || this.currentContent.practice_problems) score += 1;
    
    // Main content structures
    const hasMainContent = 
        this.currentContent.mendelsLaws ||
        this.currentContent.possibleCrosses ||
        this.currentContent.punnettSquareMethod ||
        this.currentContent.probabilityRules;
    if (hasMainContent) score += 3;

    // Additional depth
    if (this.currentContent.contextualScenarios) score += 1;
    if (this.currentContent.relatedExperiments) score += 1;

    return Math.round((score / maxScore) * 100);
}

getGeneticsContentQualityMetrics() {
    return {
        completeness: this.calculateGeneticsContentCompleteness(),
        hasExamples: !!(this.currentContent?.examples || this.currentContent?.humanExamples),
        hasPracticeProblems: !!(this.currentContent?.practiceProblems || this.currentContent?.practice_problems),
        hasDefinitions: !!this.currentContent?.keyDefinitions,
        hasContextualScenarios: !!this.currentContent?.contextualScenarios,
        detailLevel: this.explanationLevel,
        includesVisualizations: this.includeVisualizations,
        includesMisconceptions: this.includeCommonMisconceptions,
        includesExperiments: this.includeExperiments,
        adaptiveDifficulty: this.adaptiveDifficulty,
        metacognitiveSupport: this.metacognitiveSupport
    };
}

generateGeneticsContentSummary() {
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
        summary.keyPoints.push("Key definitions provided");
        summary.coverage.definitions = Object.keys(this.currentContent.keyDefinitions).length;
    }

    if (this.currentContent.possibleCrosses || this.currentContent.allPossibleMonohybridCrosses) {
        summary.keyPoints.push("Genetic crosses explained");
        summary.coverage.crosses = true;
    }

    if (this.currentContent.examples || this.currentContent.humanExamples) {
        summary.coverage.examples = Array.isArray(this.currentContent.examples) ? 
            this.currentContent.examples.length : 
            (Array.isArray(this.currentContent.humanExamples) ? this.currentContent.humanExamples.length : 0);
    }

    return summary;
}

assessGeneticsContentDifficulty() {
    if (!this.currentContent) return 'unknown';

    let difficultyScore = 0;

    const basicTopics = ['monohybrid_crosses'];
    const intermediateTopics = ['mendels_laws', 'dihybrid_crosses', 'test_crosses', 'incomplete_dominance'];
    const advancedTopics = ['multiple_alleles', 'sex_linked', 'pedigree_analysis', 'chi_square'];

    if (basicTopics.includes(this.currentProblem.type)) {
        difficultyScore += 1;
    } else if (intermediateTopics.includes(this.currentProblem.type)) {
        difficultyScore += 2;
    } else if (advancedTopics.includes(this.currentProblem.type)) {
        difficultyScore += 3;
    }

    if (this.explanationLevel === 'advanced') difficultyScore += 1;
    if (this.explanationLevel === 'basic') difficultyScore -= 1;

    if (difficultyScore <= 2) return 'beginner';
    if (difficultyScore <= 4) return 'intermediate';
    return 'advanced';
}

generatePunnettSquare(parent1Genotype, parent2Genotype) {
    // Generate gametes for each parent
    const gametes1 = this.generateGametes(parent1Genotype);
    const gametes2 = this.generateGametes(parent2Genotype);

    // Create Punnett square
    const square = [];
    
    // Header row
    square.push(['', ...gametes2]);
    
    // Data rows
    gametes1.forEach(g1 => {
        const row = [g1];
        gametes2.forEach(g2 => {
            row.push(this.combineAlleles(g1, g2));
        });
        square.push(row);
    });

    return square;
}

generateGametes(genotype) {
    // Simple implementation for one or two genes
    // For example: "Aa" → ["A", "a"]
    // For example: "AaBb" → ["AB", "Ab", "aB", "ab"]
    
    if (genotype.length === 2) {
        // Monohybrid
        return [genotype[0], genotype[1]];
    } else if (genotype.length === 4) {
        // Dihybrid
        const gene1 = [genotype[0], genotype[1]];
        const gene2 = [genotype[2], genotype[3]];
        
        const gametes = [];
        gene1.forEach(a1 => {
            gene2.forEach(a2 => {
                gametes.push(a1 + a2);
            });
        });
        return gametes;
    }
    
    return [genotype];
}

combineAlleles(gamete1, gamete2) {
    // Combine gametes to create offspring genotype
    // Sort alleles so dominant comes first
    let combined = gamete1 + gamete2;
    
    // Simple sorting: uppercase before lowercase
    return combined.split('').sort((a, b) => {
        if (a === a.toUpperCase() && b === b.toLowerCase()) return -1;
        if (a === a.toLowerCase() && b === b.toUpperCase()) return 1;
        return a.localeCompare(b);
    }).join('');
}

calculateProbability(targetGenotype, parent1, parent2) {
    const square = this.generatePunnettSquare(parent1, parent2);
    
    let totalBoxes = 0;
    let targetCount = 0;
    
    // Skip header row and column
    for (let i = 1; i < square.length; i++) {
        for (let j = 1; j < square[i].length; j++) {
            totalBoxes++;
            if (square[i][j] === targetGenotype) {
                targetCount++;
            }
        }
    }
    
    return {
        count: targetCount,
        total: totalBoxes,
        probability: targetCount / totalBoxes,
        percentage: (targetCount / totalBoxes * 100).toFixed(1) + '%',
        fraction: `${targetCount}/${totalBoxes}`
    };
}


