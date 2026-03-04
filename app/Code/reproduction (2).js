// Enhanced Reproduction Anatomy Workbook - Comprehensive Human Reproduction System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { BiologySvgDiagrams } from '../svg-data.js';
import { BiologyDiagramsRegistry} from '../registry.js';
import { BiologyDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class ReproductionAnatomyWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "reproduction";
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

        this.reproductionSymbols = this.initializeReproductionSymbols();
        this.setThemeColors();
        this.initializeReproductionTopics();
        this.initializeReproductionLessons();
        this.initializeReproductionExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            reproduction: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
                headerBg: '#d32f2f',
                headerText: '#ffffff',
                sectionBg: '#ffcdd2',
                sectionText: '#b71c1c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#fce4ec',
                resultText: '#880e4f',
                definitionBg: '#fff3e0',
                definitionText: '#e65100',
                stepBg: '#f3e5f6',
                stepText: '#4a148c',
                borderColor: '#ec407a',
                contentBg: '#e8eaf6',
                contentText: '#311b92',
                diagramBg: '#e1f5fe',
                structureBg: '#e0f2f1',
                experimentBg: '#fff9c4',
                experimentText: '#f57f17',
                maleBg: '#e3f2fd',
                femaleBg: '#fce4ec',
                hormoneBg: '#f1f8e9',
                developmentBg: '#fff3e0'
            },
            anatomy: {
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
                contentBg: '#e8f5e9',
                contentText: '#1b5e20',
                diagramBg: '#fce4ec',
                structureBg: '#e8eaf6',
                experimentBg: '#fffde7',
                experimentText: '#f57f17',
                maleBg: '#e1f5fe',
                femaleBg: '#f8bbd0',
                hormoneBg: '#dcedc8',
                developmentBg: '#ffe0b2'
            }
        };

        this.colors = themes[this.theme] || themes.reproduction;
    }

    initializeReproductionSymbols() {
        return {
            // Gender symbols
            'male': '♂',
            'female': '♀',
            
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            
            // Arrows
            'arrow': '→',
            'reversible': '⇌',
            'increase': '↑',
            'decrease': '↓',
            
            // Math symbols
            'plus': '+',
            'minus': '−',
            'plusminus': '±',
            'approximately': '≈',
            'degree': '°',
            
            // Hormones (common abbreviations)
            'FSH': 'FSH',
            'LH': 'LH',
            'GnRH': 'GnRH',
            'hCG': 'hCG',
            'Estrogen': 'E₂',
            'Progesterone': 'P₄',
            'Testosterone': 'T',
            
            // Cell types
            'sperm': '🔬',
            'ovum': '⚪',
            'zygote': '◉',
            
            // Special symbols
            'pregnancy': '🤰',
            'baby': '👶',
            'chromosome': 'Chr'
        };
    }

    initializeReproductionTopics() {
        this.reproductionTopics = {
            male_reproductive_system: {
                patterns: [
                    /male.*reproductive|testes|testis/i,
                    /sperm|spermatogenesis/i,
                    /penis|scrotum|prostate/i,
                    /testosterone|androgen/i
                ],
                handler: this.handleMaleReproductiveSystem.bind(this),
                name: 'Male Reproductive System',
                category: 'reproductive_anatomy',
                description: 'Structures and functions of male reproductive organs and gamete production',
                difficulty: 'intermediate',
                prerequisites: ['cell_biology', 'anatomy_basics']
            },
            
            female_reproductive_system: {
                patterns: [
                    /female.*reproductive|ovary|ovaries/i,
                    /uterus|fallopian|vagina/i,
                    /ovum|oocyte|ovulation/i,
                    /estrogen|progesterone/i
                ],
                handler: this.handleFemaleReproductiveSystem.bind(this),
                name: 'Female Reproductive System',
                category: 'reproductive_anatomy',
                description: 'Structures and functions of female reproductive organs and gamete production',
                difficulty: 'intermediate',
                prerequisites: ['cell_biology', 'anatomy_basics']
            },
            
            gametogenesis: {
                patterns: [
                    /gametogenesis|spermatogenesis|oogenesis/i,
                    /meiosis.*reproductive|gamete.*formation/i,
                    /sperm.*development|egg.*development/i
                ],
                handler: this.handleGametogenesis.bind(this),
                name: 'Gametogenesis',
                category: 'cellular_reproduction',
                description: 'Formation of male and female gametes through meiosis',
                difficulty: 'advanced',
                prerequisites: ['meiosis', 'cell_division']
            },
            
            menstrual_cycle: {
                patterns: [
                    /menstrual.*cycle|menstruation/i,
                    /ovarian.*cycle|uterine.*cycle/i,
                    /follicular.*phase|luteal.*phase/i,
                    /ovulation/i
                ],
                handler: this.handleMenstrualCycle.bind(this),
                name: 'Menstrual Cycle',
                category: 'reproductive_physiology',
                description: 'Cyclical changes in female reproductive system',
                difficulty: 'advanced',
                prerequisites: ['hormones', 'female_reproductive_system']
            },
            
            fertilization_development: {
                patterns: [
                    /fertilization|conception/i,
                    /embryo.*development|fetal.*development/i,
                    /pregnancy|gestation/i,
                    /implantation|placenta/i
                ],
                handler: this.handleFertilizationDevelopment.bind(this),
                name: 'Fertilization and Development',
                category: 'embryology',
                description: 'From fertilization through embryonic and fetal development',
                difficulty: 'advanced',
                prerequisites: ['gametogenesis', 'cell_biology']
            },
            
            reproductive_hormones: {
                patterns: [
                    /reproductive.*hormone|sex.*hormone/i,
                    /FSH|LH|GnRH|hCG/i,
                    /hormonal.*regulation.*reproduction/i
                ],
                handler: this.handleReproductiveHormones.bind(this),
                name: 'Reproductive Hormones',
                category: 'endocrinology',
                description: 'Hormonal regulation of reproductive processes',
                difficulty: 'advanced',
                prerequisites: ['endocrine_system', 'feedback_loops']
            },
            
            birth_labor: {
                patterns: [
                    /birth|labor|parturition/i,
                    /delivery|childbirth/i,
                    /contraction.*labor/i
                ],
                handler: this.handleBirthLabor.bind(this),
                name: 'Birth and Labor',
                category: 'reproductive_physiology',
                description: 'Physiological processes of childbirth',
                difficulty: 'intermediate',
                prerequisites: ['pregnancy', 'hormones']
            },
            
            contraception: {
                patterns: [
                    /contraception|birth.*control/i,
                    /contraceptive/i,
                    /family.*planning/i
                ],
                handler: this.handleContraception.bind(this),
                name: 'Contraception Methods',
                category: 'reproductive_health',
                description: 'Methods and mechanisms of preventing pregnancy',
                difficulty: 'intermediate',
                prerequisites: ['menstrual_cycle', 'fertilization']
            }
        };
    }

    initializeReproductionLessons() {
        this.lessons = {
            male_reproductive_system: {
                title: "Male Reproductive System: Structure and Function",
                concepts: [
                    "Primary sex organs (gonads): Testes produce sperm and testosterone",
                    "Accessory ducts: Epididymis, vas deferens, ejaculatory duct, urethra",
                    "Accessory glands: Seminal vesicles, prostate, bulbourethral glands",
                    "External genitalia: Penis and scrotum",
                    "Spermatogenesis occurs in seminiferous tubules",
                    "Temperature regulation crucial for sperm production"
                ],
                theory: "The male reproductive system is designed to produce, maintain, and deliver sperm cells and male sex hormones. The testes are located outside the body cavity in the scrotum to maintain optimal temperature (2-3°C below core body temperature) for spermatogenesis.",
                
                keyDefinitions: {
                    "Testes": "Paired male gonads that produce sperm and testosterone",
                    "Seminiferous Tubules": "Coiled tubules within testes where spermatogenesis occurs",
                    "Sertoli Cells": "Supporting cells in seminiferous tubules that nourish developing sperm",
                    "Leydig Cells": "Interstitial cells that produce testosterone",
                    "Epididymis": "Comma-shaped structure where sperm mature and are stored",
                    "Vas Deferens": "Muscular tube that transports sperm from epididymis to ejaculatory duct",
                    "Prostate Gland": "Secretes alkaline fluid that neutralizes vaginal acidity",
                    "Seminal Vesicles": "Glands that secrete fructose-rich fluid for sperm energy",
                    "Semen": "Fluid containing sperm and secretions from accessory glands",
                    "Testosterone": "Primary male sex hormone (androgen)"
                },
                
                anatomy: {
                    testes: {
                        location: "Scrotum (external to body cavity)",
                        structure: {
                            tunicaAlbuginea: "Fibrous capsule surrounding testis",
                            lobules: "250-300 lobules, each containing 1-4 seminiferous tubules",
                            seminferousTubules: "Site of sperm production",
                            interstitialSpace: "Contains Leydig cells (testosterone production)"
                        },
                        function: [
                            "Spermatogenesis (sperm production)",
                            "Testosterone synthesis and secretion"
                        ],
                        temperature: "33-35°C (2-3°C below body temp) - essential for spermatogenesis"
                    },
                    
                    ductSystem: {
                        epididymis: {
                            location: "Posterior surface of testis",
                            parts: "Head, body, tail",
                            length: "~6 meters (coiled)",
                            function: [
                                "Sperm maturation (gain motility)",
                                "Sperm storage",
                                "Absorption of defective sperm"
                            ],
                            duration: "Sperm spend 2-4 weeks maturing"
                        },
                        vasDeferens: {
                            alsoKnown: "Ductus deferens",
                            length: "~45 cm",
                            pathway: "Epididymis → inguinal canal → pelvic cavity → ejaculatory duct",
                            function: "Rapid transport of sperm during ejaculation (peristalsis)",
                            vasectomy: "Surgical cutting/sealing prevents sperm from entering semen"
                        },
                        ejaculatoryDuct: {
                            formation: "Union of vas deferens and seminal vesicle duct",
                            pathway: "Passes through prostate, empties into urethra"
                        },
                        urethra: {
                            regions: "Prostatic, membranous, penile (spongy)",
                            function: "Passage for both urine and semen (not simultaneously)",
                            length: "~20 cm"
                        }
                    },
                    
                    accessoryGlands: {
                        seminalVesicles: {
                            location: "Posterior to bladder",
                            secretion: {
                                volume: "~60% of semen volume",
                                composition: [
                                    "Fructose (energy for sperm)",
                                    "Prostaglandins (stimulate uterine contractions)",
                                    "Clotting factors",
                                    "Alkaline pH"
                                ]
                            }
                        },
                        prostate: {
                            location: "Below bladder, surrounds urethra",
                            size: "Walnut-sized",
                            secretion: {
                                volume: "~30% of semen volume",
                                composition: [
                                    "Milky, slightly acidic fluid",
                                    "Citric acid (sperm metabolism)",
                                    "PSA (prostate specific antigen) - liquefies semen",
                                    "Zinc",
                                    "Proteolytic enzymes"
                                ]
                            },
                            clinicalNote: "Enlargement (BPH) common in older men, can obstruct urethra"
                        },
                        bulbourethra: {
                            alsoKnown: "Cowper's glands",
                            location: "Below prostate",
                            secretion: {
                                volume: "<5% of semen",
                                composition: [
                                    "Clear, slippery mucus",
                                    "Secreted during arousal (pre-ejaculate)",
                                    "Neutralizes urethra acidity",
                                    "Lubrication"
                                ]
                            }
                        }
                    },
                    
                    penis: {
                        structure: {
                            root: "Attached portion",
                            shaft: "Body",
                            glans: "Enlarged tip",
                            prepuce: "Foreskin (often removed by circumcision)"
                        },
                        erectileTissue: {
                            corporaCavernosa: "2 dorsal columns (main erectile tissue)",
                            corpusSpongiosum: "Ventral column (surrounds urethra, forms glans)",
                            mechanism: "Blood fills spaces during arousal → erection"
                        },
                        function: [
                            "Delivery of sperm",
                            "Urination"
                        ]
                    },
                    
                    scrotum: {
                        structure: "Skin sac divided into two compartments",
                        function: "Temperature regulation for testes",
                        mechanism: {
                            hot: "Dartos muscle relaxes → scrotum descends, increases surface area",
                            cold: "Dartos and cremaster muscles contract → scrotum pulled close to body"
                        }
                    }
                },
                
                spermatogenesis: {
                    location: "Seminiferous tubules",
                    duration: "~74 days",
                    stages: [
                        {
                            stage: "Mitosis",
                            cells: "Spermatogonia (2n) → Primary spermatocytes (2n)",
                            note: "Some spermatogonia remain as stem cells"
                        },
                        {
                            stage: "Meiosis I",
                            cells: "Primary spermatocytes (2n) → Secondary spermatocytes (n)",
                            note: "Reduction division"
                        },
                        {
                            stage: "Meiosis II",
                            cells: "Secondary spermatocytes (n) → Spermatids (n)",
                            note: "4 haploid cells produced from each primary spermatocyte"
                        },
                        {
                            stage: "Spermiogenesis",
                            cells: "Spermatids → Mature spermatozoa",
                            note: "Morphological changes: acrosome, flagellum form"
                        }
                    ],
                    spermStructure: {
                        head: {
                            nucleus: "Contains haploid (23) chromosomes",
                            acrosome: "Cap containing enzymes to penetrate ovum"
                        },
                        midpiece: {
                            mitochondria: "Spiral arrangement provides ATP for motility"
                        },
                        tail: {
                            flagellum: "Propels sperm (~3 mm/min)"
                        }
                    },
                    yield: "~300 million sperm per ejaculation",
                    viability: "Up to 5 days in female reproductive tract"
                },
                
                hormoneRegulation: {
                    hypothalamus: {
                        hormone: "GnRH (Gonadotropin-Releasing Hormone)",
                        target: "Anterior pituitary",
                        action: "Stimulates FSH and LH release"
                    },
                    anteriorPituitary: {
                        FSH: {
                            target: "Sertoli cells",
                            action: "Supports spermatogenesis"
                        },
                        LH: {
                            target: "Leydig cells",
                            action: "Stimulates testosterone production"
                        }
                    },
                    testosterone: {
                        production: "Leydig cells in testes",
                        effects: {
                            reproductive: [
                                "Spermatogenesis",
                                "Maturation of sex organs",
                                "Libido"
                            ],
                            secondary: [
                                "Deepening of voice",
                                "Facial and body hair",
                                "Increased muscle mass",
                                "Bone density"
                            ]
                        },
                        feedback: "Negative feedback on hypothalamus and pituitary"
                    }
                },
                
                applications: [
                    "Male infertility diagnosis and treatment",
                    "Contraception (vasectomy)",
                    "Hormone replacement therapy",
                    "Treatment of erectile dysfunction",
                    "Prostate health and cancer screening"
                ]
            },

            female_reproductive_system: {
                title: "Female Reproductive System: Structure and Function",
                concepts: [
                    "Primary sex organs (gonads): Ovaries produce ova and hormones",
                    "Reproductive tract: Fallopian tubes, uterus, cervix, vagina",
                    "External genitalia: Vulva (labia, clitoris, vestibule)",
                    "Mammary glands produce milk for offspring",
                    "Oogenesis produces one viable ovum per cycle",
                    "Cyclical changes prepare body for potential pregnancy"
                ],
                theory: "The female reproductive system produces ova, provides environment for fertilization, supports embryonic/fetal development, and delivers offspring. Unlike continuous sperm production in males, oogenesis is cyclical and limited (fixed number of oocytes at birth).",
                
                keyDefinitions: {
                    "Ovaries": "Paired female gonads that produce ova and sex hormones",
                    "Follicle": "Structure in ovary containing developing oocyte",
                    "Ovulation": "Release of secondary oocyte from ovary",
                    "Fallopian Tubes": "Tubes that transport ovum to uterus; site of fertilization",
                    "Uterus": "Muscular organ where embryo implants and develops",
                    "Endometrium": "Inner lining of uterus that thickens during cycle",
                    "Cervix": "Neck of uterus that opens into vagina",
                    "Vagina": "Muscular tube serving as birth canal and copulatory organ",
                    "Estrogen": "Primary female sex hormone (multiple forms)",
                    "Progesterone": "Hormone that maintains pregnancy"
                },
                
                anatomy: {
                    ovaries: {
                        location: "Lateral walls of pelvic cavity",
                        size: "Almond-shaped, ~3 cm long",
                        structure: {
                            cortex: "Outer region containing follicles",
                            medulla: "Inner region with blood vessels and nerves"
                        },
                        function: [
                            "Oogenesis (production of ova)",
                            "Secretion of estrogen and progesterone"
                        ],
                        oocyteSupply: {
                            birth: "~1-2 million primordial follicles",
                            puberty: "~300,000-400,000 remain",
                            ovulated: "~400 during reproductive years",
                            menopause: "Few thousand remain, not functional"
                        },
                        follicleTypes: [
                            "Primordial follicle: Oocyte + single layer of cells",
                            "Primary follicle: Oocyte + multiple layers (granulosa cells)",
                            "Secondary follicle: Contains fluid-filled cavity (antrum)",
                            "Graafian (mature) follicle: Large, ready to ovulate",
                            "Corpus luteum: Ruptured follicle after ovulation (secretes progesterone)"
                        ]
                    },
                    
                    fallopianTubes: {
                        alsoKnown: "Oviducts, uterine tubes",
                        length: "~10 cm",
                        parts: {
                            infundibulum: "Funnel-shaped opening with fimbriae (finger-like projections)",
                            ampulla: "Widest section; usual site of fertilization",
                            isthmus: "Narrow section near uterus"
                        },
                        function: [
                            "Capture ovulated oocyte (fimbriae sweep it in)",
                            "Site of fertilization",
                            "Transport embryo to uterus (cilia + peristalsis)"
                        ],
                        transport: "Takes 3-4 days for ovum/embryo to reach uterus",
                        clinicalNote: "Blockage causes infertility; ectopic pregnancy if embryo implants here"
                    },
                    
                    uterus: {
                        location: "Pelvic cavity, anterior to rectum, posterior to bladder",
                        size: "Pear-shaped, ~7-8 cm long (non-pregnant)",
                        regions: {
                            fundus: "Dome-shaped top",
                            body: "Main central portion",
                            cervix: "Narrow neck opening to vagina"
                        },
                        layers: {
                            perimetrium: "Outer serous layer (visceral peritoneum)",
                            myometrium: {
                                description: "Thick middle muscular layer",
                                function: "Contracts during labor to expel fetus",
                                composition: "Smooth muscle"
                            },
                            endometrium: {
                                description: "Inner mucosal layer",
                                function: "Site of implantation",
                                layers: {
                                    functionalLayer: "Shed during menstruation",
                                    basalLayer: "Permanent; regenerates functional layer"
                                },
                                changes: "Thickens during cycle in response to estrogen/progesterone"
                            }
                        },
                        function: [
                            "Receives embryo",
                            "Provides nutrients to embryo before placenta forms",
                            "Supports fetal development",
                            "Contracts to expel fetus during birth"
                        ],
                        pregnancy: "Expands dramatically (~500x volume increase)"
                    },
                    
                    cervix: {
                        description: "Narrow inferior portion of uterus",
                        opening: "Cervical canal connects uterus to vagina",
                        regions: {
                            internal_os: "Opening into uterus",
                            external_os: "Opening into vagina"
                        },
                        function: [
                            "Produces cervical mucus (consistency changes during cycle)",
                            "Barrier protecting uterus from pathogens",
                            "Dilates during labor (up to 10 cm)"
                        ],
                        mucus: {
                            fertile: "Thin, stretchy (spinnbarkeit) around ovulation - facilitates sperm passage",
                            infertile: "Thick, sticky - impedes sperm"
                        },
                        clinicalNote: "Pap smear screens for cervical cancer"
                    },
                    
                    vagina: {
                        description: "Fibromuscular tube, ~8-10 cm long",
                        location: "Between cervix and external genitalia",
                        structure: {
                            walls: "Muscular with transverse folds (rugae) - allow expansion",
                            lining: "Stratified squamous epithelium (no glands)",
                            pH: "Acidic (3.8-4.5) due to lactobacilli - protects from pathogens"
                        },
                        function: [
                            "Receives penis during intercourse",
                            "Birth canal",
                            "Passageway for menstrual flow"
                        ],
                        hymen: "Thin membrane partially covering opening (variable presence/structure)"
                    },
                    
                    externalGenitalia: {
                        vulva: "Collective term for external structures",
                        structures: {
                            monsVeneris: "Fatty tissue over pubic symphysis (hair-covered)",
                            labiamajora: "Large outer folds (hair-covered)",
                            labiaMinora: "Small inner folds (hairless, rich in blood vessels)",
                            clitoris: {
                                description: "Highly sensitive erectile tissue",
                                homologous: "Equivalent to glans penis in males",
                                structure: "Glans, body, crura",
                                function: "Sexual arousal and pleasure"
                            },
                            vestibule: {
                                description: "Area between labia minora",
                                openings: "Urethra, vagina, ducts of greater vestibular glands"
                            },
                            greaterVestibularGlands: {
                                alsoKnown: "Bartholin's glands",
                                function: "Secrete mucus for lubrication during arousal"
                            }
                        }
                    },
                    
                    mammaryGlands: {
                        location: "Anterior thorax",
                        structure: {
                            lobes: "15-20 lobes, each with lobules and alveoli",
                            ducts: "Lactiferous ducts drain to nipple",
                            areola: "Pigmented area around nipple"
                        },
                        function: "Produce and secrete milk (lactation)",
                        development: {
                            puberty: "Estrogen stimulates duct growth",
                            pregnancy: "Progesterone stimulates lobule/alveoli growth",
                            lactation: "Prolactin stimulates milk production; oxytocin triggers milk ejection"
                        }
                    }
                },
                
                oogenesis: {
                    timing: "Begins before birth, pauses, resumes at puberty",
                    stages: [
                        {
                            stage: "Fetal Development",
                            process: "Oogonia undergo mitosis",
                            result: "Primary oocytes (2n) form",
                            arrest: "Arrested in prophase I of meiosis I"
                        },
                        {
                            stage: "Puberty to Menopause",
                            process: "Each cycle, FSH stimulates follicle development",
                            meiosisI: "Primary oocyte (2n) completes meiosis I → secondary oocyte (n) + 1st polar body",
                            timing: "Completed just before ovulation"
                        },
                        {
                            stage: "Ovulation",
                            event: "Secondary oocyte (n) released from ovary",
                            arrest: "Arrested in metaphase II"
                        },
                        {
                            stage: "Fertilization (if occurs)",
                            process: "Secondary oocyte completes meiosis II",
                            result: "Mature ovum (n) + 2nd polar body",
                            zygote: "Ovum nucleus fuses with sperm nucleus"
                        }
                    ],
                    yield: "ONE viable ovum per cycle (vs 4 sperm per spermatogenesis)",
                    polarBodies: "Small, nonfunctional cells with almost no cytoplasm; degenerate",
                    asymmetry: "Unequal cytoplasmic division ensures ovum has nutrients and organelles"
                },
                
                hormoneRegulation: {
                    hypothalamus: {
                        hormone: "GnRH",
                        pattern: "Pulsatile release",
                        target: "Anterior pituitary"
                    },
                    anteriorPituitary: {
                        FSH: {
                            target: "Ovarian follicles",
                            action: "Stimulates follicle growth and estrogen secretion"
                        },
                        LH: {
                            action: [
                                "Mid-cycle surge triggers ovulation",
                                "Maintains corpus luteum",
                                "Stimulates progesterone and estrogen secretion"
                            ]
                        }
                    },
                    ovaries: {
                        estrogen: {
                            source: "Follicle (granulosa and theca cells)",
                            effects: {
                                reproductive: [
                                    "Endometrial proliferation",
                                    "Cervical mucus changes",
                                    "Fallopian tube motility"
                                ],
                                secondary: [
                                    "Breast development",
                                    "Fat distribution",
                                    "Bone density",
                                    "Skin texture"
                                ]
                            },
                            feedback: "Low levels: positive feedback (LH surge); high levels: negative feedback"
                        },
                        progesterone: {
                            source: "Corpus luteum (after ovulation)",
                            effects: [
                                "Endometrial secretory changes (receptive to implantation)",
                                "Cervical mucus thickening",
                                "Inhibits uterine contractions",
                                "Raises basal body temperature",
                                "Prepares mammary glands for lactation"
                            ],
                            pregnancy: "Placenta takes over production after ~10 weeks"
                        }
                    }
                },
                
                applications: [
                    "Fertility treatments (IVF, ovulation induction)",
                    "Contraception (hormonal methods)",
                    "Hormone replacement therapy (menopause)",
                    "Gynecological health and cancer screening",
                    "Prenatal care and obstetrics"
                ]
            },

            gametogenesis: {
                title: "Gametogenesis: Formation of Gametes",
                concepts: [
                    "Spermatogenesis produces four functional sperm from each precursor cell",
                    "Oogenesis produces one functional ovum and three polar bodies",
                    "Both processes involve meiosis to produce haploid (n) cells",
                    "Spermatogenesis is continuous; oogenesis is cyclical",
                    "Crossing over and independent assortment create genetic diversity"
                ],
                theory: "Gametogenesis is the process of forming haploid sex cells (gametes) from diploid germ cells through meiosis. This ensures that when gametes fuse during fertilization, the diploid chromosome number is restored in the offspring.",
                
                keyDefinitions: {
                    "Gametogenesis": "Process of gamete formation",
                    "Spermatogenesis": "Formation of sperm in males",
                    "Oogenesis": "Formation of ova in females",
                    "Meiosis": "Reduction division producing haploid cells",
                    "Crossing Over": "Exchange of genetic material between homologous chromosomes",
                    "Independent Assortment": "Random distribution of chromosomes to gametes",
                    "Polar Body": "Small cell produced during oogenesis with minimal cytoplasm",
                    "Spermiogenesis": "Morphological transformation of spermatids to spermatozoa"
                },
                
                comparison: {
                    aspect: ["Location", "Timing", "Duration", "Product", "Number", "Size", "Motility"],
                    spermatogenesis: [
                        "Seminiferous tubules of testes",
                        "Begins at puberty, continuous throughout life",
                        "~74 days per cycle",
                        "Four functional spermatozoa",
                        "~300 million per ejaculation",
                        "Small (~60 μm), minimal cytoplasm",
                        "Motile (flagellum)"
                    ],
                    oogenesis: [
                        "Ovarian follicles",
                        "Begins before birth, pauses until puberty, one per month",
                        "Starts before birth, completed only if fertilization occurs",
                        "One functional ovum + three polar bodies",
                        "One per month (~400 in lifetime)",
                        "Large (~120 μm), abundant cytoplasm and nutrients",
                        "Non-motile"
                    ]
                },
                
                spermatogenesisDetails: {
                    phases: [
                        {
                            phase: "Proliferation (Mitosis)",
                            cells: "Spermatogonial stem cells",
                            process: "Mitosis produces more spermatogonia",
                            product: "Type A (stem cells) and Type B (differentiate)",
                            location: "Basal compartment of seminiferous tubule"
                        },
                        {
                            phase: "Growth",
                            cells: "Primary spermatocytes",
                            process: "Cells enlarge, replicate DNA (S phase)",
                            chromosome: "4n (replicated diploid)"
                        },
                        {
                            phase: "Meiosis I",
                            cells: "Primary spermatocytes → Secondary spermatocytes",
                            process: "Reduction division (homologs separate)",
                            product: "Two secondary spermatocytes (n, still duplicated)",
                            key: "Crossing over occurs in prophase I"
                        },
                        {
                            phase: "Meiosis II",
                            cells: "Secondary spermatocytes → Spermatids",
                            process: "Sister chromatids separate",
                            product: "Four haploid spermatids (n)"
                        },
                        {
                            phase: "Spermiogenesis",
                            cells: "Spermatids → Spermatozoa",
                            process: "Morphological transformation",
                            changes: [
                                "Acrosome forms from Golgi",
                                "Nucleus condenses",
                                "Flagellum develops",
                                "Mitochondria organize in midpiece",
                                "Excess cytoplasm removed (residual body)"
                            ]
                        },
                        {
                            phase: "Spermiation",
                            process: "Mature sperm released into lumen",
                            transport: "Move to epididymis for final maturation"
                        }
                    ],
                    support: {
                        sertoliCells: [
                            "Form blood-testis barrier",
                            "Nourish developing sperm",
                            "Phagocytose residual bodies",
                            "Secrete fluid for sperm transport",
                            "Secrete inhibin (negative feedback on FSH)",
                            "Secrete androgen-binding protein (concentrates testosterone)"
                        ]
                    }
                },
                
                oogenesisDetails: {
                    phases: [
                        {
                            phase: "Fetal Development (Before Birth)",
                            cells: "Oogonia",
                            process: "Mitosis produces millions of oogonia",
                            transformation: "Oogonia → Primary oocytes",
                            meiosisStart: "Begin meiosis I but arrest in prophase I",
                            follicle: "Surrounded by follicle cells → primordial follicles"
                        },
                        {
                            phase: "Childhood",
                            status: "Primary oocytes arrested in prophase I",
                            degradation: "Most follicles degenerate (atresia)",
                            number: "From 1-2 million to ~300,000-400,000 by puberty"
                        },
                        {
                            phase: "Puberty to Menopause (Monthly)",
                            stimulation: "FSH stimulates follicle development",
                            growth: "Primary oocyte enlarges, follicle grows",
                            meiosisI: "Primary oocyte completes meiosis I just before ovulation",
                            division: "Unequal division → secondary oocyte (n) + 1st polar body",
                            cytoplasm: "Secondary oocyte gets almost all cytoplasm/organelles"
                        },
                        {
                            phase: "Ovulation",
                            event: "Secondary oocyte released from ovary",
                            meiosisII: "Begins meiosis II but arrests in metaphase II",
                            fateIfNoFertilization: "Degenerates after ~24 hours"
                        },
                        {
                            phase: "Fertilization (if occurs)",
                            trigger: "Sperm penetration triggers completion of meiosis II",
                            division: "Secondary oocyte → mature ovum (n) + 2nd polar body",
                            polarBody1: "First polar body may also divide (→ 2 polar bodies)",
                            total: "One ovum + three polar bodies (all degenerate except ovum)",
                            fusion: "Ovum and sperm nuclei fuse → zygote (2n)"
                        }
                    ],
                    asymmetricDivision: {
                        reason: "Ensure ovum has sufficient cytoplasm, organelles, nutrients, mRNA for early development",
                        polarBodies: "Contain genetic material but almost no cytoplasm; cannot be fertilized"
                    }
                },
                
                meiosisOverview: {
                    purpose: "Reduce chromosome number from diploid (2n) to haploid (n)",
                    divisions: "Two successive divisions (I and II)",
                    meiosisI: {
                        description: "Reduction division - homologous chromosomes separate",
                        prophaseI: {
                            synapsis: "Homologs pair up (bivalent/tetrad formation)",
                            crossingOver: "Exchange of genetic material between non-sister chromatids",
                            result: "Genetic recombination"
                        },
                        metaphaseI: "Bivalents align at metaphase plate",
                        anaphaseI: "Homologs separate (sister chromatids still together)",
                        telophaseI: "Two haploid cells form (chromosomes still duplicated)"
                    },
                    meiosisII: {
                        description: "Similar to mitosis - sister chromatids separate",
                        result: "Four haploid cells with unduplicated chromosomes"
                    }
                },
                
                geneticDiversity: {
                    mechanisms: [
                        {
                            mechanism: "Crossing Over (Recombination)",
                            when: "Prophase I",
                            process: "Homologous chromosomes exchange segments",
                            result: "New combinations of alleles on chromosomes",
                            frequency: "At least one per chromosome pair"
                        },
                        {
                            mechanism: "Independent Assortment",
                            when: "Metaphase I",
                            process: "Random orientation of homolog pairs",
                            result: "Different combinations of maternal/paternal chromosomes",
                            possibilities: "2²³ = 8,388,608 different gametes (in humans)"
                        },
                        {
                            mechanism: "Random Fertilization",
                            process: "Any sperm can fertilize any ovum",
                            possibilities: "~70 trillion possible genetic combinations"
                        }
                    ],
                    significance: "Ensures each offspring is genetically unique (except identical twins)"
                },
                
                clinicalRelevance: {
                    nondisjunction: {
                        definition: "Chromosomes fail to separate properly during meiosis",
                        result: "Gamete with extra or missing chromosome",
                        examples: [
                            "Trisomy 21 (Down syndrome) - 3 copies of chromosome 21",
                            "Klinefelter syndrome (XXY) - extra X in males",
                            "Turner syndrome (XO) - missing X in females"
                        ],
                        risk: "Increases with maternal age (especially for oogenesis)"
                    },
                    infertility: {
                        male: "Low sperm count, abnormal morphology, poor motility",
                        female: "Anovulation, follicle development issues, early menopause"
                    }
                },
                
                applications: [
                    "Assisted reproductive technologies (IVF, ICSI)",
                    "Genetic counseling and prenatal testing",
                    "Understanding infertility causes",
                    "Contraceptive development",
                    "Cancer treatment (chemotherapy affects rapidly dividing cells)"
                ]
            },

            menstrual_cycle: {
                title: "The Menstrual Cycle: Hormonal and Physiological Changes",
                concepts: [
                    "Average cycle is 28 days (range: 21-35 days)",
                    "Two parallel cycles: ovarian cycle and uterine (menstrual) cycle",
                    "Regulated by hypothalamic-pituitary-ovarian axis",
                    "Involves complex hormonal feedback loops",
                    "Prepares body for potential pregnancy each month"
                ],
                theory: "The menstrual cycle is a recurring series of changes in the ovaries and uterus that makes pregnancy possible. It is characterized by cyclical hormone production and coordinated changes in reproductive structures.",
                
                keyDefinitions: {
                    "Menstrual Cycle": "Cyclical changes in female reproductive system, counted from first day of menstruation",
                    "Ovarian Cycle": "Cyclical changes in ovaries (follicular and luteal phases)",
                    "Uterine Cycle": "Cyclical changes in endometrium (menstrual, proliferative, secretory phases)",
                    "Follicular Phase": "Ovarian phase when follicles develop",
                    "Luteal Phase": "Ovarian phase after ovulation when corpus luteum is present",
                    "Ovulation": "Release of secondary oocyte from mature follicle",
                    "Corpus Luteum": "Endocrine structure formed from ruptured follicle",
                    "Menstruation": "Shedding of functional endometrial layer"
                },
                
                ovarianCycle: {
                    phases: [
                        {
                            phase: "Follicular Phase",
                            days: "Days 1-14 (variable length)",
                            events: [
                                "Several primordial follicles activated by FSH",
                                "Follicles grow: primordial → primary → secondary → Graafian",
                                "Usually one dominant follicle selected (others undergo atresia)",
                                "Follicle cells secrete increasing estrogen"
                            ],
                            hormones: {
                                FSH: "High at start, then decreases as estrogen rises",
                                LH: "Low, gradual increase",
                                estrogen: "Low initially, then rises sharply",
                                progesterone: "Low"
                            },
                            endOfPhase: "Ends with ovulation"
                        },
                        {
                            phase: "Ovulation",
                            day: "Day 14 (in 28-day cycle)",
                            trigger: "LH surge (caused by high estrogen positive feedback)",
                            events: [
                                "Mature (Graafian) follicle ruptures",
                                "Secondary oocyte released into peritoneal cavity",
                                "Fimbriae of fallopian tube sweep oocyte in",
                                "Oocyte arrested in metaphase II (awaits fertilization)"
                            ],
                            timing: "Occurs ~10-12 hours after LH peak",
                            signs: [
                                "Rise in basal body temperature (~0.5°F)",
                                "Change in cervical mucus (clear, stretchy)",
                                "Mittelschmerz (one-sided pelvic pain in some women)",
                                "LH surge detectable in urine (ovulation tests)"
                            ]
                        },
                        {
                            phase: "Luteal Phase",
                            days: "Days 15-28 (fixed ~14 days)",
                            events: [
                                "Ruptured follicle → corpus luteum (yellow body)",
                                "Corpus luteum secretes progesterone and estrogen",
                                "If no fertilization: corpus luteum degenerates (day 24-26)",
                                "Becomes corpus albicans (white scar tissue)"
                            ],
                            hormones: {
                                progesterone: "High (peak ~day 21)",
                                estrogen: "Moderate",
                                LH: "Low",
                                FSH: "Low"
                            },
                            ifPregnancy: "hCG from embryo maintains corpus luteum → continues progesterone production",
                            endOfPhase: "Corpus luteum degeneration → hormone drop → menstruation"
                        }
                    ]
                },
                
                uterineCycle: {
                    phases: [
                        {
                            phase: "Menstrual Phase",
                            days: "Days 1-5",
                            event: "Shedding of functional endometrial layer",
                            trigger: "Drop in progesterone and estrogen (corpus luteum degenerates)",
                            process: [
                                "Spiral arteries constrict → ischemia",
                                "Endometrial tissue dies and detaches",
                                "Blood and tissue expelled through vagina"
                            ],
                            volume: "~30-40 ml blood loss (range: 10-80 ml)",
                            note: "Day 1 of menstruation = Day 1 of new cycle"
                        },
                        {
                            phase: "Proliferative Phase",
                            days: "Days 6-14",
                            alsoKnown: "Preovulatory phase",
                            trigger: "Rising estrogen from developing follicles",
                            events: [
                                "Endometrium regenerates from basal layer",
                                "Endometrial glands elongate",
                                "Spiral arteries grow",
                                "Endometrium thickens (2-3 mm → 10-12 mm)",
                                "Cervical mucus becomes thin and stretchy (facilitates sperm passage)"
                            ],
                            purpose: "Prepare endometrium for potential implantation"
                        },
                        {
                            phase: "Secretory Phase",
                            days: "Days 15-28",
                            alsoKnown: "Postovulatory phase",
                            trigger: "Progesterone from corpus luteum",
                            events: [
                                "Endometrial glands enlarge and secrete glycogen-rich fluid",
                                "Spiral arteries become highly coiled",
                                "Endometrium becomes receptive to implantation (days 19-21)",
                                "Cervical mucus becomes thick (forms barrier)"
                            ],
                            purpose: "Create nutrient-rich environment for embryo",
                            ifNoPregnancy: "Progesterone drops → menstruation",
                            ifPregnancy: "Progesterone maintained → no menstruation, embryo implants"
                        }
                    ]
                },
                
                hormonalRegulation: {
                    levels: [
                        {
                            level: "Hypothalamus",
                            hormone: "GnRH (Gonadotropin-Releasing Hormone)",
                            release: "Pulsatile (every 1-2 hours)",
                            target: "Anterior pituitary",
                            action: "Stimulates FSH and LH secretion"
                        },
                        {
                            level: "Anterior Pituitary",
                            hormones: {
                                FSH: {
                                    target: "Ovarian follicles",
                                    action: [
                                        "Stimulates follicle development",
                                        "Promotes estrogen secretion by granulosa cells"
                                    ],
                                    pattern: "Rises early follicular phase, drops after ovulation"
                                },
                                LH: {
                                    target: "Ovarian follicles and corpus luteum",
                                    action: [
                                        "Stimulates estrogen and progesterone production",
                                        "LH surge triggers ovulation",
                                        "Maintains corpus luteum"
                                    ],
                                    pattern: "Low, then surge mid-cycle, moderate in luteal phase"
                                }
                            }
                        },
                        {
                            level: "Ovaries",
                            hormones: {
                                estrogen: {
                                    source: "Follicle (granulosa cells)",
                                    effects: {
                                        uterus: "Endometrial proliferation, cervical mucus thinning",
                                        pituitary: "Negative feedback (low levels), positive feedback (high levels → LH surge)"
                                    },
                                    pattern: "Rises during follicular phase, peaks before ovulation, moderate in luteal phase"
                                },
                                progesterone: {
                                    source: "Corpus luteum",
                                    effects: {
                                        uterus: "Endometrial secretory changes, cervical mucus thickening",
                                        pituitary: "Negative feedback on LH and FSH"
                                    },
                                    pattern: "Low before ovulation, high in luteal phase, drops if no pregnancy"
                                },
                                inhibin: {
                                    source: "Granulosa cells and corpus luteum",
                                    action: "Inhibits FSH secretion",
                                    purpose: "Prevents multiple follicles from maturing"
                                }
                            }
                        }
                    ],
                    feedbackLoops: {
                        negativeFeedback: [
                            "Estrogen (low-moderate levels) inhibits FSH and LH",
                            "Progesterone inhibits GnRH, FSH, LH",
                            "Inhibin inhibits FSH"
                        ],
                        positiveFeedback: [
                            "High estrogen (late follicular phase) stimulates LH surge",
                            "LH surge triggers ovulation (unique positive feedback)"
                        ]
                    }
                },
                
                cycleDiagram: {
                    timeline: "Day 1 -------- Day 14 -------- Day 28",
                    ovarianCycle: "Follicular Phase | Ovulation | Luteal Phase",
                    uterineCycle: "Menstrual | Proliferative | Secretory",
                    hormones: {
                        FSH: "High → Low ----------------",
                        LH: "Low → SURGE → Moderate",
                        Estrogen: "Rising → Peak → Moderate",
                        Progesterone: "Low → Low → HIGH → Drop"
                    }
                },
                
                variations: {
                    cycleLength: {
                        average: "28 days",
                        normal: "21-35 days",
                        variablePhase: "Follicular phase (can vary widely)",
                        constantPhase: "Luteal phase (~14 days)",
                        puberty: "Irregular cycles common",
                        perimenopause: "Cycles become irregular"
                    },
                    menstruation: {
                        duration: "3-7 days (average 5)",
                        flow: "Heaviest on days 1-2",
                        dysmenorrhea: "Painful menstruation (caused by prostaglandins)"
                    }
                },
                
                clinicalApplications: {
                    fertilityAwareness: {
                        ovulationPrediction: [
                            "Basal body temperature charting",
                            "Cervical mucus monitoring",
                            "Ovulation predictor kits (detect LH surge)",
                            "Fertility apps"
                        ],
                        fertileWindow: "~6 days (5 days before ovulation + day of ovulation)",
                        spermViability: "Up to 5 days in female tract",
                        ovumViability: "~24 hours after ovulation"
                    },
                    contraception: {
                        hormonal: "Suppress ovulation (prevent LH surge) or prevent implantation",
                        IUD: "Prevent fertilization or implantation"
                    },
                    irregularities: {
                        amenorrhea: "Absence of menstruation (pregnancy, stress, low body fat, PCOS)",
                        oligomenorrhea: "Infrequent menstruation",
                        menorrhagia: "Heavy menstrual bleeding",
                        PCOS: "Polycystic ovary syndrome - hormonal imbalance, irregular cycles"
                    }
                },
                
                applications: [
                    "Family planning (natural and contraceptive)",
                    "Infertility diagnosis and treatment",
                    "Menstrual disorder management",
                    "Hormone replacement therapy",
                    "Understanding reproductive health across lifespan"
                ]
            },

            fertilization_development: {
                title: "Fertilization and Early Development",
                concepts: [
                    "Fertilization occurs in ampulla of fallopian tube",
                    "Sperm must undergo capacitation to fertilize ovum",
                    "Acrosome reaction allows sperm to penetrate ovum",
                    "Cortical reaction prevents polyspermy",
                    "Early development occurs during transport to uterus",
                    "Implantation occurs ~6-7 days after fertilization"
                ],
                theory: "Fertilization is the fusion of sperm and ovum to form a diploid zygote. This initiates a cascade of developmental events including cleavage, blastocyst formation, implantation, and embryonic development.",
                
                keyDefinitions: {
                    "Fertilization": "Fusion of sperm and ovum nuclei",
                    "Capacitation": "Biochemical changes enabling sperm to fertilize ovum",
                    "Acrosome Reaction": "Release of enzymes from sperm head to penetrate ovum",
                    "Cortical Reaction": "Ovum's response preventing additional sperm entry",
                    "Zygote": "Fertilized ovum (diploid cell)",
                    "Cleavage": "Rapid mitotic divisions without cell growth",
                    "Morula": "Solid ball of 16-32 cells",
                    "Blastocyst": "Hollow ball with inner cell mass and trophoblast",
                    "Implantation": "Embedding of blastocyst into endometrium"
                },
                
                fertilizationProcess: {
                    location: "Ampulla of fallopian tube (widest part)",
                    timing: "Within 24 hours of ovulation",
                    
                    spermJourney: {
                        vagina: "~300 million sperm deposited",
                        cervix: "Mucus filters out abnormal sperm; ~1 million enter uterus",
                        uterus: "Contractions help propel sperm; ~100,000 reach tubes",
                        fallopianTube: "Chemotaxis guides sperm to ovum; ~200 reach ovum",
                        duration: "Can take 30 minutes to several hours"
                    },
                    
                    capacitation: {
                        location: "Female reproductive tract",
                        duration: "~7 hours",
                        changes: [
                            "Removal of cholesterol from sperm membrane",
                            "Changes in membrane fluidity and permeability",
                            "Hyperactivation of sperm motility (vigorous, whiplash movements)",
                            "Preparation for acrosome reaction"
                        ],
                        necessity: "Uncapacitated sperm cannot fertilize"
                    },
                    
                    steps: [
                        {
                            step: "1. Sperm Penetrates Corona Radiata",
                            description: "Sperm moves through outer layer of granulosa cells",
                            mechanism: "Hyaluronidase (enzyme) digests matrix between cells"
                        },
                        {
                            step: "2. Sperm Binds to Zona Pellucida",
                            description: "Sperm contacts zona pellucida (glycoprotein layer)",
                            recognition: "Species-specific binding (ZP3 protein)",
                            trigger: "Initiates acrosome reaction"
                        },
                        {
                            step: "3. Acrosome Reaction",
                            description: "Sperm releases enzymes from acrosome",
                            enzymes: [
                                "Acrosin (protease)",
                                "Hyaluronidase",
                                "Neuraminidase"
                            ],
                            effect: "Digests path through zona pellucida"
                        },
                        {
                            step: "4. Sperm-Ovum Membrane Fusion",
                            description: "Sperm plasma membrane fuses with ovum membrane",
                            location: "At ovum surface",
                            entry: "Sperm nucleus and centrosome enter ovum cytoplasm"
                        },
                        {
                            step: "5. Cortical Reaction (Block to Polyspermy)",
                            description: "Ovum prevents entry of additional sperm",
                            fast_block: {
                                mechanism: "Membrane depolarization (Na+ influx)",
                                duration: "Temporary (~1 minute)",
                                effect: "Prevents sperm fusion"
                            },
                            slow_block: {
                                mechanism: "Cortical granules fuse with membrane",
                                release: "Enzymes modify zona pellucida (hardening)",
                                duration: "Permanent",
                                effect: "Zona reaction - prevents sperm binding/penetration"
                            },
                            importance: "Polyspermy (multiple sperm) is lethal"
                        },
                        {
                            step: "6. Completion of Meiosis II",
                            trigger: "Sperm entry stimulates ovum",
                            process: "Secondary oocyte completes meiosis II",
                            product: "Mature ovum (n) + 2nd polar body",
                            nuclei: "Female pronucleus forms"
                        },
                        {
                            step: "7. Formation of Diploid Zygote",
                            description: "Male and female pronuclei approach",
                            decondensation: "Sperm nucleus decondenses, forms male pronucleus",
                            fusion: "Pronuclei fuse (syngamy)",
                            result: "Diploid zygote (2n = 46 chromosomes)",
                            firstMitosis: "Begins ~24 hours post-fertilization"
                        }
                    ]
                },
                
                earlyDevelopment: {
                    cleavage: {
                        definition: "Rapid mitotic divisions without growth",
                        location: "Fallopian tube (during transport to uterus)",
                        characteristics: [
                            "Cell divisions with no increase in total size",
                            "Cells (blastomeres) become progressively smaller",
                            "No G1 and G2 phases - rapid S and M phases",
                            "Zona pellucida still intact (prevents premature implantation)"
                        ],
                        timeline: {
                            day1: "Zygote (1 cell)",
                            day2: "2-4 cells",
                            day3: "8-16 cells (morula stage)",
                            day4: "32-64 cells (early blastocyst)",
                            day5_6: "100+ cells (blastocyst)"
                        }
                    },
                    
                    morula: {
                        day: "Day 3-4",
                        structure: "Solid ball of 16-32 cells",
                        name: "Latin for 'mulberry' (appearance)",
                        location: "Entering uterus"
                    },
                    
                    blastocyst: {
                        day: "Day 5-6",
                        formation: "Fluid accumulates within morula → blastocoel (cavity) forms",
                        structure: {
                            trophoblast: {
                                description: "Outer cell layer",
                                fate: "Forms placenta and extraembryonic membranes",
                                function: "Implantation, nutrient exchange"
                            },
                            innerCellMass: {
                                description: "Cluster of cells at one pole",
                                fate: "Forms embryo proper and some extraembryonic structures",
                                also: "Embryoblast"
                            },
                            blastocoel: {
                                description: "Fluid-filled cavity"
                            }
                        },
                        hatching: "Zona pellucida degenerates (blastocyst 'hatches')",
                        readiness: "Ready for implantation"
                    }
                },
                
                implantation: {
                    timing: "Days 6-7 post-fertilization (~day 20-21 of menstrual cycle)",
                    location: "Posterior wall of uterus (usually upper body)",
                    window: "Days 19-21 of cycle (endometrium receptive)",
                    
                    process: [
                        {
                            step: "Apposition",
                            description: "Blastocyst orients and loosely attaches to endometrium",
                            positioning: "Inner cell mass toward endometrium"
                        },
                        {
                            step: "Adhesion",
                            description: "Trophoblast adheres firmly to endometrial epithelium",
                            molecules: "Integrins and selectins mediate binding"
                        },
                        {
                            step: "Invasion",
                            description: "Trophoblast penetrates endometrium",
                            differentiation: {
                                cytotrophoblast: "Inner layer of individual cells",
                                syncytiotrophoblast: "Outer multinucleated mass (invasive)"
                            },
                            enzymes: "Syncytiotrophoblast secretes proteases",
                            depth: "Embeds into endometrium; reaches maternal blood vessels",
                            completion: "Day 12-14, completely embedded"
                        }
                    ],
                    
                    hCG: {
                        source: "Syncytiotrophoblast",
                        function: [
                            "Maintains corpus luteum (prevents menstruation)",
                            "Ensures continued progesterone/estrogen production",
                            "Basis for pregnancy tests (detectable in urine/blood)"
                        ],
                        timing: "Secreted from day 8-10; doubles every 2-3 days",
                        peak: "Weeks 8-10, then declines"
                    },
                    
                    endometrialResponse: {
                        decidualization: "Endometrial cells enlarge, accumulate glycogen and lipids",
                        purpose: "Nourish embryo before placenta fully functional",
                        layers: {
                            deciduaBasalis: "Under implantation site; forms maternal part of placenta",
                            deciduaCapsularis: "Overlies embryo",
                            deciduaParietalis: "Rest of uterine lining"
                        }
                    }
                },
                
                gastrulation: {
                    timing: "Week 3",
                    significance: "Formation of three germ layers",
                    layers: {
                        ectoderm: "Forms nervous system, skin, hair, nails",
                        mesoderm: "Forms muscles, bones, circulatory system, kidneys",
                        endoderm: "Forms digestive tract, lungs, liver, pancreas"
                    },
                    quote: "Nothing in development makes sense except in the light of gastrulation"
                },
                
                extraembryonicMembranes: {
                    amnion: {
                        description: "Fluid-filled sac surrounding embryo/fetus",
                        fluid: "Amniotic fluid - cushions, temperature regulation",
                        volume: "Increases from ml to ~1 liter at term"
                    },
                    yolkSac: {
                        description: "Early source of blood cells",
                        function: "Transfers nutrients to embryo (before placenta)",
                        fate: "Becomes part of digestive tract"
                    },
                    allantois: {
                        description: "Outpocketing of yolk sac",
                        function: "Forms blood vessels of umbilical cord",
                        fate: "Becomes part of urinary bladder"
                    },
                    chorion: {
                        description: "Outermost membrane",
                        function: "Forms fetal part of placenta",
                        villiFormation: "Chorionic villi project into maternal blood"
                    }
                },
                
                placenta: {
                    formation: "Develops from chorion (fetal) and decidua basalis (maternal)",
                    structure: {
                        fetalSide: "Chorionic villi containing fetal capillaries",
                        maternalSide: "Decidua basalis with maternal blood spaces (lacunae)",
                        barrier: "Thin membrane separates fetal and maternal blood (no direct mixing)"
                    },
                    functions: [
                        "Gas exchange (O₂ in, CO₂ out)",
                        "Nutrient transfer (glucose, amino acids, lipids)",
                        "Waste removal (urea, uric acid)",
                        "Antibody transfer (IgG - passive immunity)",
                        "Hormone production (hCG, estrogen, progesterone, hPL)"
                    ],
                    fullFunction: "By week 12",
                    atBirth: "Expelled as afterbirth (~500 g, 20 cm diameter)"
                },
                
                umbilicalCord: {
                    structure: "Connects fetus to placenta",
                    contents: {
                        umbilicalVein: "1 vein (oxygenated blood to fetus)",
                        umbilicalArteries: "2 arteries (deoxygenated blood from fetus)",
                        whartonsJelly: "Gelatinous connective tissue (protects vessels)"
                    },
                    length: "~50-60 cm at term"
                },
                
                clinicalRelevance: {
                    ectopicPregnancy: {
                        definition: "Implantation outside uterus",
                        mostCommon: "Fallopian tube (95%)",
                        cause: "Blocked tube, slow transport",
                        risk: "Tube rupture, hemorrhage (medical emergency)"
                    },
                    IVF: {
                        process: "Fertilization in lab, embryo transferred to uterus",
                        bypasses: "Fallopian tube transport",
                        timing: "Transfer at day 3 (8-cell) or day 5 (blastocyst)"
                    },
                    contraception: {
                        IUD: "Prevents implantation",
                        emergencyContraception: "Prevents ovulation or implantation if taken early"
                    }
                },
                
                applications: [
                    "Assisted reproduction (IVF, ICSI)",
                    "Prenatal testing and diagnosis",
                    "Understanding developmental disorders",
                    "Contraceptive development",
                    "Stem cell research (from blastocyst inner cell mass)"
                ]
            },

            reproductive_hormones: {
                title: "Reproductive Hormones and Their Regulation",
                concepts: [
                    "Hypothalamic-pituitary-gonadal (HPG) axis regulates reproduction",
                    "Negative and positive feedback loops control hormone levels",
                    "Sex hormones have effects beyond reproduction",
                    "Hormone balance essential for fertility and health",
                    "Hormone levels change across lifespan"
                ],
                theory: "Reproductive hormones are chemical messengers that regulate sexual development, gamete production, sexual behavior, pregnancy, and lactation. They operate through complex feedback loops in the hypothalamic-pituitary-gonadal axis.",
                
                keyDefinitions: {
                    "GnRH": "Gonadotropin-Releasing Hormone from hypothalamus",
                    "Gonadotropins": "FSH and LH from anterior pituitary",
                    "FSH": "Follicle-Stimulating Hormone",
                    "LH": "Luteinizing Hormone",
                    "Testosterone": "Primary male sex hormone (androgen)",
                    "Estrogen": "Primary female sex hormone (multiple forms)",
                    "Progesterone": "Pregnancy-maintaining hormone",
                    "hCG": "Human Chorionic Gonadotropin (pregnancy hormone)",
                    "Prolactin": "Milk production hormone",
                    "Oxytocin": "Uterine contraction and milk ejection hormone"
                },
                
                hypothalamusHormones: {
                    GnRH: {
                        fullName: "Gonadotropin-Releasing Hormone",
                        structure: "Decapeptide (10 amino acids)",
                        release: {
                            pattern: "Pulsatile (every 1-2 hours)",
                            importance: "Pulse frequency determines which gonadotropin is released",
                            fast: "Favors LH release",
                            slow: "Favors FSH release"
                        },
                        target: "Gonadotrophs in anterior pituitary",
                        action: "Stimulates FSH and LH secretion",
                        regulation: {
                            stimulation: "Kisspeptin neurons",
                            inhibition: "Sex steroids (negative feedback), stress, low body weight"
                        },
                        clinicalUse: "GnRH analogs used in IVF, prostate cancer treatment"
                    }
                },
                
                anteriorPituitaryHormones: {
                    FSH: {
                        fullName: "Follicle-Stimulating Hormone",
                        structure: "Glycoprotein (α and β subunits)",
                        inMales: {
                            target: "Sertoli cells in testes",
                            action: [
                                "Supports spermatogenesis",
                                "Stimulates androgen-binding protein production",
                                "Stimulates inhibin secretion"
                            ]
                        },
                        inFemales: {
                            target: "Ovarian follicles (granulosa cells)",
                            action: [
                                "Stimulates follicle growth",
                                "Promotes estrogen synthesis (with LH)",
                                "Upregulates LH receptors on granulosa cells"
                            ]
                        },
                        regulation: {
                            inhibition: "Inhibin (from gonads), sex steroids"
                        }
                    },
                    
                    LH: {
                        fullName: "Luteinizing Hormone",
                        structure: "Glycoprotein (shares α subunit with FSH)",
                        inMales: {
                            target: "Leydig cells in testes",
                            action: "Stimulates testosterone production"
                        },
                        inFemales: {
                            target: "Ovarian theca cells and corpus luteum",
                            action: [
                                "Stimulates androgen production (theca cells → aromatized to estrogen)",
                                "Mid-cycle surge triggers ovulation",
                                "Maintains corpus luteum",
                                "Stimulates progesterone secretion"
                            ]
                        },
                        regulation: {
                            inhibition: "Sex steroids (negative feedback)",
                            stimulation: "High estrogen (positive feedback → LH surge)"
                        }
                    },
                    
                    prolactin: {
                        primaryRole: "Milk production",
                        target: "Mammary glands",
                        action: [
                            "Stimulates milk synthesis and secretion",
                            "Maintains milk production during lactation"
                        ],
                        regulation: {
                            inhibition: "Dopamine (PIH - Prolactin Inhibiting Hormone) from hypothalamus",
                            stimulation: "Suckling (neural reflex), pregnancy hormones, TRH"
                        },
                        pregnancy: "High levels, but progesterone/estrogen prevent lactation",
                        postpartum: "Progesterone/estrogen drop → lactation begins",
                        otherEffects: "Inhibits GnRH (lactational amenorrhea - natural contraception)"
                    }
                },
                
                posteriorPituitaryHormones: {
                    oxytocin: {
                        origin: "Synthesized in hypothalamus, stored/released from posterior pituitary",
                        structure: "Peptide (9 amino acids)",
                        labor: {
                            action: "Stimulates uterine contractions",
                            positiveFeenback: "Contractions → stretch receptors → more oxytocin → stronger contractions",
                            augmentation: "Synthetic oxytocin (Pitocin) used to induce/strengthen labor"
                        },
                        lactation: {
                            action: "Milk ejection (let-down reflex)",
                            trigger: "Suckling → neural signal → oxytocin release",
                            effect: "Contraction of myoepithelial cells → milk ejected"
                        },
                        bonding: "Facilitates maternal-infant bonding, social bonding",
                        males: "Small amounts during orgasm (may aid sperm transport)"
                    }
                },
                
                gonadSteroidHormones: {
                    testosterone: {
                        classification: "Androgen (male sex hormone)",
                        production: {
                            primary: "Leydig cells in testes (~95%)",
                            secondary: "Adrenal cortex (~5%)"
                        },
                        synthesis: "Cholesterol → Pregnenolone → Testosterone",
                        transport: "Bound to sex hormone-binding globulin (SHBG) in blood",
                        metabolism: {
                            DHT: "Dihydrotestosterone (more potent, via 5α-reductase)",
                            estradiol: "Aromatized to estrogen in some tissues"
                        },
                        effectsReproductive: [
                            "Spermatogenesis (with FSH)",
                            "Development/maintenance of male reproductive tract",
                            "Libido and sexual function"
                        ],
                        effectsSecondary: [
                            "Deepening of voice (larynx growth)",
                            "Facial, chest, and body hair growth",
                            "Male pattern baldness (via DHT)",
                            "Increased muscle mass and bone density",
                            "Aggressive behavior (in some contexts)"
                        ],
                        levels: {
                            puberty: "Sharp increase initiates male development",
                            adult: "Relatively stable with circadian rhythm (peak morning)",
                            aging: "Gradual decline (~1% per year after 30)"
                        },
                        feedback: "Negative feedback on hypothalamus (GnRH) and pituitary (LH)"
                    },
                    
                    estrogen: {
                        forms: {
                            estradiol: "E2 - most potent, primary in reproductive years",
                            estrone: "E1 - postmenopause",
                            estriol: "E3 - pregnancy (from placenta)"
                        },
                        production: {
                            primary: "Ovarian follicles (granulosa cells)",
                            pregnancy: "Placenta",
                            other: "Adipose tissue (aromatase converts androgens)"
                        },
                        synthesis: "Cholesterol → Androgens → Estrogens (via aromatase)",
                        transport: "Bound to SHBG",
                        effectsReproductive: [
                            "Endometrial proliferation",
                            "Cervical mucus thinning (facilitates sperm)",
                            "Fallopian tube motility",
                            "Development of ovarian follicles"
                        ],
                        effectsSecondary: [
                            "Breast development",
                            "Female fat distribution (hips, thighs, breasts)",
                            "Bone density (prevents osteoporosis)",
                            "Skin texture (softer, thinner)",
                            "Cardiovascular protection (before menopause)"
                        ],
                        levels: {
                            childhood: "Very low",
                            puberty: "Rise initiates female development",
                            cyclic: "Peaks late follicular phase (before ovulation)",
                            pregnancy: "Very high",
                            menopause: "Dramatic decline"
                        },
                        feedback: {
                            negative: "Low-moderate levels inhibit FSH, LH",
                            positive: "High levels (late follicular) trigger LH surge → ovulation"
                        }
                    },
                    
                    progesterone: {
                        production: {
                            primary: "Corpus luteum (luteal phase)",
                            pregnancy: "Placenta (after week 10)",
                            minimal: "Small amounts from adrenal cortex"
                        },
                        synthesis: "Cholesterol → Pregnenolone → Progesterone",
                        effectsReproductive: [
                            "Endometrial secretory transformation (receptive to implantation)",
                            "Cervical mucus thickening (barrier)",
                            "Inhibits uterine contractions (maintains pregnancy)",
                            "Suppresses maternal immune response (prevents rejection of fetus)"
                        ],
                        effectsOther: [
                            "Basal body temperature increase (~0.5°F)",
                            "Breast development (alveoli)",
                            "Mood effects (can be calming or cause irritability)"
                        ],
                        levels: {
                            follicularPhase: "Very low",
                            lutealPhase: "High (peaks ~day 21)",
                            pregnancy: "Very high throughout",
                            menopause: "Very low"
                        },
                        feedback: "Negative feedback on hypothalamus and pituitary",
                        withdrawal: "Drop triggers menstruation (if no pregnancy)"
                    },
                    
                    inhibin: {
                        structure: "Glycoprotein (α and β subunits)",
                        forms: {
                            inhibinA: "Corpus luteum",
                            inhibinB: "Ovarian follicles (females), Sertoli cells (males)"
                        },
                        action: "Selectively inhibits FSH secretion (not LH)",
                        purpose: "Fine-tuning of FSH levels, prevents multiple follicle maturation"
                    }
                },
                
                pregnancyHormones: {
                    hCG: {
                        fullName: "Human Chorionic Gonadotropin",
                        source: "Syncytiotrophoblast (placenta)",
                        structure: "Glycoprotein (similar to LH)",
                        timing: {
                            production: "Begins 6-8 days post-fertilization",
                            detectable: "Blood (9-11 days), urine (12-14 days)",
                            peaks: "Weeks 8-10",
                            decline: "After first trimester"
                        },
                        function: [
                            "Maintains corpus luteum in early pregnancy",
                            "Ensures continued progesterone/estrogen production",
                            "Prevents menstruation"
                        ],
                        clinicalUse: [
                            "Pregnancy tests",
                            "Monitor pregnancy viability (doubling time)",
                            "Detect ectopic pregnancy or miscarriage",
                            "Screen for Down syndrome (abnormal levels)"
                        ],
                        sideEffect: "Associated with morning sickness"
                    },
                    
                    hPL: {
                        fullName: "Human Placental Lactogen",
                        alsoKnown: "Human Chorionic Somatomammotropin",
                        source: "Syncytiotrophoblast",
                        function: [
                            "Prepares mammary glands for lactation",
                            "Mobilizes maternal glucose, fatty acids (for fetal use)",
                            "Decreases maternal insulin sensitivity (diabetogenic)"
                        ]
                    },
                    
                    relaxin: {
                        source: "Corpus luteum, placenta",
                        function: [
                            "Relaxes pelvic ligaments",
                            "Softens cervix",
                            "Inhibits uterine contractions (early pregnancy)"
                        ],
                        labor: "Helps with cervical dilation and pelvic expansion"
                    }
                },
                
                feedbackMechanisms: {
                    negativeFeedback: {
                        male: "Testosterone inhibits GnRH, LH; Inhibin inhibits FSH",
                        female: {
                            general: "Estrogen and progesterone inhibit GnRH, FSH, LH",
                            follicular: "Rising estrogen inhibits FSH (prevents multiple ovulation)",
                            luteal: "Progesterone dominates inhibition"
                        }
                    },
                    positiveFeedback: {
                        female: {
                            timing: "Late follicular phase",
                            mechanism: "High estrogen (>200 pg/ml for 48+ hours) stimulates LH surge",
                            result: "LH surge triggers ovulation",
                            unique: "Only known positive feedback in endocrine system"
                        }
                    }
                },
                
                lifespan Changes: {
                    puberty: {
                        trigger: "GnRH secretion increases (kisspeptin neurons activate)",
                        males: {
                            onset: "~11-13 years",
                            first: "Testicular enlargement",
                            testosterone: "Rises dramatically",
                            changes: "Growth spurt, voice deepens, hair growth, spermarche"
                        },
                        females: {
                            onset: "~9-11 years",
                            first: "Breast budding (thelarche)",
                            estrogen: "Rises gradually",
                            changes: "Growth spurt, hip widening, menarche (first period)"
                        }
                    },
                    reproductiveYears: {
                        males: "Continuous testosterone, sperm production",
                        females: "Cyclical hormone changes, monthly ovulation"
                    },
                    menopause: {
                        timing: "Average age 51 (range 45-55)",
                        cause: "Ovarian follicle depletion",
                        hormones: {
                            estrogen: "Dramatic decline",
                            progesterone: "Virtually absent",
                            FSH_LH: "Very high (loss of negative feedback)"
                        },
                        symptoms: [
                            "Hot flashes, night sweats",
                            "Vaginal dryness",
                            "Mood changes",
                            "Bone loss (osteoporosis risk)",
                            "Cardiovascular disease risk increases"
                        ],
                        HRT: "Hormone replacement therapy can alleviate symptoms"
                    },
                    andropause: {
                        timing: "Gradual decline starting ~30 years",
                        hormones: "Testosterone decreases ~1% per year",
                        symptoms: "Decreased libido, muscle mass, bone density, energy (less dramatic than menopause)",
                        note: "Men retain fertility longer than women"
                    }
                },
                
                clinicalApplications: {
                    contraception: {
                        hormonal: "Estrogen + progestin (suppress ovulation, thicken cervical mucus)",
                        types: "Pills, patch, ring, injection, implant, IUD"
                    },
                    infertility: {
                        ovulationInduction: "Clomiphene (blocks estrogen receptors → increases FSH), hCG injection",
                        IVF: "GnRH agonists/antagonists control cycle, FSH/LH injections stimulate follicles"
                    },
                    HRT: {
                        menopause: "Estrogen ± progestin to alleviate symptoms",
                        hypogonadism: "Testosterone replacement in males"
                    },
                    cancer: {
                        breast: "Estrogen receptor blockers (tamoxifen)",
                        prostate: "Androgen deprivation therapy (GnRH agonists)"
                    }
                },
                
                applications: [
                    "Contraceptive development and use",
                    "Fertility treatment and assisted reproduction",
                    "Hormone replacement therapy",
                    "Cancer treatment (hormone-sensitive cancers)",
                    "Understanding puberty disorders",
                    "Managing menopausal symptoms"
                ]
            }
        };
    }

    initializeReproductionExperiments() {
        this.reproductionExperiments = {
            // ========================================
            // EXPERIMENT 1: MICROSCOPY OF SPERM
            // ========================================
            
            leeuwenhoek_sperm_discovery: {
                name: "Leeuwenhoek's Discovery of Spermatozoa - Microscopic Observation",
                relatedTopics: ['male_reproductive_system', 'gametogenesis'],
                category: 'cell_biology',
                
                historicalBackground: {
                    scientist: "Antonie van Leeuwenhoek",
                    year: "1677",
                    discovery: "First observation of human spermatozoa ('animalcules')",
                    context: "Using his handcrafted microscopes (270x magnification), Leeuwenhoek observed motile sperm in human semen",
                    sample: "His student Johann Ham first noticed sperm in semen; Leeuwenhoek confirmed and described",
                    significance: "Demonstrated that semen contains living cells, not just fluid",
                    controversy: "Sparked debate between 'ovists' (egg primacy) and 'spermists' (sperm primacy)",
                    description: "He wrote: 'I have seen an incredible number of living animalcules, moving very prettily'",
                    publication: "Letter to Royal Society of London, November 1677",
                    impact: "Fundamental discovery in reproductive biology and cell theory",
                    laterUnderstanding: "Took 200 years to understand fertilization requires both sperm and ovum",
                    note: "Leeuwenhoek initially hesitated to publish, fearing it was too scandalous"
                },
                
                labExperiment: {
                    title: "Microscopic Observation of Mammalian Sperm",
                    hypothesis: "Sperm cells have distinct morphology (head, midpiece, tail) and exhibit motility that can be observed under microscope",
                    purpose: "Observe sperm morphology, estimate motility, and understand male gamete structure",
                    
                    background: {
                        structure: "Sperm = head (nucleus + acrosome) + midpiece (mitochondria) + tail (flagellum)",
                        size: "~60 μm total length (human); head ~5 μm",
                        motility: "Progressive motility essential for fertility",
                        count: "Normal: >15 million per ml; >39 million per ejaculate"
                    },
                    
                    variables: {
                        independent: "Sample type (fresh vs diluted, room temp vs 37°C)",
                        dependent: "Sperm motility (%, types), morphology observations",
                        controlled: ["Microscope magnification", "Time after collection", "Sample preparation method"]
                    },
                    
                    materials: [
                        "Fresh semen sample (bull, ram, or commercially available) OR prepared sperm slide",
                        "SAFETY: DO NOT use human samples in educational settings (ethical/biohazard concerns)",
                        "Microscope slides and coverslips",
                        "Compound light microscope (400x magnification minimum)",
                        "Phase contrast microscope (optional, better visualization)",
                        "Warm plate or heating stage (to maintain 37°C)",
                        "Physiological saline (0.9% NaCl) or semen extender",
                        "Pipettes or droppers",
                        "Timer or stopwatch",
                        "Eosin-nigrosin stain (for viability staining, optional)",
                        "Immersion oil (for 100x oil immersion objective, optional)",
                        "Hemocytometer (for sperm counting, optional)"
                    ],
                    
                    safetyPrecautions: [
                        "CRITICAL: Use only animal semen from approved sources (no human samples in educational labs)",
                        "Wear gloves when handling samples (potential zoonotic pathogens)",
                        "Dispose of all slides in biohazard waste",
                        "Disinfect work area with 10% bleach solution after use",
                        "Wash hands thoroughly after experiment",
                        "Do not mouth-pipette",
                        "Follow institutional biosafety guidelines"
                    ],
                    
                    procedure: [
                        "SAMPLE PREPARATION:",
                        "Obtain fresh semen sample (bull/ram from AI center or prepared slide)",
                        "Keep sample at room temperature or warm to 37°C",
                        "DO NOT refrigerate (reduces motility)",
                        "Use within 1-2 hours of collection for best motility",
                        "",
                        "WET MOUNT PREPARATION (for motility observation):",
                        "1. Place clean microscope slide on warm plate (37°C)",
                        "2. Using pipette, place small drop (~5 μl) of semen on slide",
                        "3. If semen very concentrated, dilute 1:10 with warm saline",
                        "4. Carefully lower coverslip at angle to avoid air bubbles",
                        "5. Gently press to create thin, even layer",
                        "6. Avoid excess pressure (can damage sperm)",
                        "",
                        "MICROSCOPIC OBSERVATION:",
                        "7. Start with 10x objective (100x total) to locate sample",
                        "8. Switch to 40x objective (400x total) for detailed observation",
                        "9. Adjust light and focus for optimal contrast",
                        "10. Observe in systematic grid pattern across slide",
                        "",
                        "MOTILITY ASSESSMENT:",
                        "11. Identify motile vs non-motile sperm",
                        "12. Categorize motile sperm:",
                        "    - Progressive: Move forward in straight line or large circles",
                        "    - Non-progressive: Move but don't progress (vibrate, circle tightly)",
                        "    - Immotile: No movement",
                        "13. Count ~100 sperm and calculate % in each category",
                        "14. Observe for 5-10 minutes (motility may decrease over time)",
                        "",
                        "MORPHOLOGY OBSERVATION:",
                        "15. Focus on individual sperm at high magnification",
                        "16. Identify structures:",
                        "    - HEAD: Oval, flattened (contains nucleus)",
                        "    - ACROSOME: Cap over anterior 2/3 of head (may be faint)",
                        "    - MIDPIECE: Thicker region with mitochondria (provides ATP)",
                        "    - TAIL (FLAGELLUM): Long, whip-like structure (propulsion)",
                        "17. Sketch or photograph representative sperm",
                        "18. Note abnormalities: double heads, coiled tails, bent necks, etc.",
                        "",
                        "OPTIONAL - VIABILITY STAINING:",
                        "19. Mix equal parts semen and eosin-nigrosin stain on slide",
                        "20. Make thin smear",
                        "21. Air dry completely",
                        "22. Observe under 100x oil immersion:",
                        "    - Dead sperm: Stain pink/red (membrane damaged)",
                        "    - Live sperm: Remain white/unstained (intact membrane)",
                        "23. Count 200 sperm, calculate % viable",
                        "",
                        "OPTIONAL - SPERM COUNTING:",
                        "24. Use hemocytometer to estimate concentration",
                        "25. Dilute semen 1:20 with saline",
                        "26. Load into hemocytometer chamber",
                        "27. Count sperm in designated grid squares",
                        "28. Calculate sperm per ml using formula"
                    ],
                    
                    expectedObservations: {
                        freshSample: {
                            motility: "60-80% motile (progressive + non-progressive)",
                            progressive: "40-70% showing forward movement",
                            viability: "70-90% alive"
                        },
                        morphology: {
                            normal: "Majority (~70-80%) should have normal morphology",
                            head: "Oval, smooth, symmetrical",
                            midpiece: "Straight, aligned with head-tail axis",
                            tail: "Long, uniform, no kinks or coils"
                        },
                        movement: {
                            progressive: "Rapid swimming in relatively straight lines",
                            speed: "~20-30 μm/second (varies by species)",
                            pattern: "Forward progression with tail beating",
                            nonProgressive: "Circular or vibrating motion"
                        },
                        abnormalities: {
                            common: [
                                "Bent tail or neck",
                                "Coiled tail",
                                "Detached heads",
                                "Double heads/tails",
                                "Cytoplasmic droplets (immature)",
                                "Small or large heads"
                            ],
                            threshold: "<30% abnormal is generally acceptable"
                        }
                    },
                    
                    dataTable: [
                        ["Observation", "Count/Description", "Percentage (%)"],
                        ["Progressive motile", "", ""],
                        ["Non-progressive motile", "", ""],
                        ["Immotile", "", ""],
                        ["Total motile", "", ""],
                        ["Normal morphology", "", ""],
                        ["Abnormal morphology", "", ""],
                        ["Viable (if stained)", "", ""],
                        ["Dead (if stained)", "", ""]
                    ],
                    
                    calculations: {
                        percentMotile: "(Number motile / Total counted) × 100",
                        percentProgressive: "(Number progressive / Total counted) × 100",
                        spermConcentration: "(Sperm counted × Dilution factor) / (Volume counted in mm³) = sperm/ml"
                    },
                    
                    observations: [
                        "Sperm have distinct head, midpiece, and tail regions",
                        "Tail beats in whip-like motion to propel sperm forward",
                        "Motility decreases over time and with temperature drop",
                        "Some sperm show abnormal morphology",
                        "Sperm are very small - need high magnification to see detail",
                        "Movement patterns vary: some straight, some circular"
                    ],
                    
                    analysis: {
                        morphology: [
                            "Head contains haploid nucleus (23 chromosomes)",
                            "Acrosome contains enzymes to penetrate ovum",
                            "Midpiece packed with mitochondria for ATP production",
                            "Tail (flagellum) provides motility through beating motion"
                        ],
                        motility: [
                            "Progressive motility essential for reaching ovum",
                            "Energy (ATP) from mitochondria powers tail movement",
                            "Chemotaxis guides sperm toward ovum",
                            "Capacitation (biochemical changes) required in female tract before fertilization"
                        ],
                        fertilityImplications: [
                            "Low motility → infertility (asthenozoospermia)",
                            "Abnormal morphology → reduced fertilization (teratozoospermia)",
                            "Low count → infertility (oligozoospermia)",
                            "Normal values: >15 million/ml, >40% motile, >4% normal morphology (WHO criteria)"
                        ]
                    },
                    
                    comparison: {
                        leeuwenhoekVsModern: {
                            leeuwenhoek: {
                                microscope: "Simple single-lens, ~270x magnification",
                                observation: "Saw movement and basic shape ('animalcules')",
                                understanding: "Knew they were living, didn't understand fertilization role"
                            },
                            modern: {
                                microscope: "Compound, phase contrast, 400-1000x magnification",
                                observation: "Can see head, midpiece, tail, acrosome; measure motility parameters",
                                understanding: "Detailed knowledge of structure, function, genetics, and fertilization process",
                                technology: "Computer-assisted semen analysis (CASA) for automated motility assessment"
                            }
                        }
                    },
                    
                    results: "Sperm cells are highly specialized with distinct structural regions adapted for fertilization. The head contains genetic material, the midpiece provides energy, and the tail enables motility. Motility and morphology are critical indicators of male fertility.",
                    
                    conclusions: [
                        "Sperm are specialized haploid cells designed for fertilization",
                        "Structure reflects function: streamlined for swimming, packed with mitochondria for energy",
                        "Motility is essential for reaching and fertilizing ovum",
                        "Quality (motility, morphology, count) affects fertility",
                        "Leeuwenhoek's discovery was foundational to understanding reproduction"
                    ],
                    
                    realWorldApplications: {
                        clinicalSemenAnalysis: "Infertility diagnosis in couples",
                        assistedReproduction: "Sperm quality determines IVF vs ICSI treatment",
                        animalBreeding: "Semen quality assessment for artificial insemination",
                        contraceptiveResearch: "Understanding sperm function to develop male contraceptives",
                        toxicology: "Sperm count/morphology affected by environmental toxins, heat, radiation"
                    },
                    
                    extensions: [
                        "Compare sperm from different species (morphology varies)",
                        "Investigate effect of temperature on motility",
                        "Test effect of various substances (caffeine, alcohol) on motility",
                        "Use CASA software for quantitative motility analysis",
                        "Investigate sperm capacitation in vitro",
                        "Compare fresh vs frozen-thawed sperm"
                    ],
                    
                    limitations: [
                        "Cannot use human samples in educational settings",
                        "Motility decreases rapidly after collection",
                        "Requires proper sample handling and temperature control",
                        "Visual assessment of motility is subjective (CASA more accurate)",
                        "Single observation doesn't assess overall fertility"
                    ],
                    
                    troubleshooting: [
                        "No motility: Sample too old, too cold, or damaged",
                        "All sperm clumped: Sample too concentrated, dilute more",
                        "Can't see detail: Increase magnification, adjust light/contrast",
                        "Sperm not in focus: Too thick prep, reduce sample volume",
                        "Rapid movement hard to track: Reduce light (slows swimming), or use video recording"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 2: OVULATION AND HORMONE TRACKING
            // ========================================
            
            knaus_ovulation_timing: {
                name: "Knaus-Ogino Method - Predicting Ovulation Through Cycle Tracking",
                relatedTopics: ['menstrual_cycle', 'female_reproductive_system', 'reproductive_hormones'],
                category: 'reproductive_physiology',
                
                historicalBackground: {
                    scientists: "Hermann Knaus (Austria) and Kyusaku Ogino (Japan)",
                    year: "1920s-1930s",
                    discovery: "Independently determined that ovulation occurs ~14 days before next menstruation",
                    knaus: {
                        year: "1929",
                        contribution: "Identified luteal phase is constant ~14 days; ovulation ~12-16 days before period",
                        approach: "Studied uterine contractions, body temperature"
                    },
                    ogino: {
                        year: "1924",
                        contribution: "Calculated fertile window based on cycle length statistics",
                        data: "Analyzed thousands of women's cycles"
                    },
                    method: "Rhythm method / Calendar method",
                    purpose: {
                        original: "Contraception (avoid intercourse during fertile window)",
                        modern: "Also used for fertility awareness (conceive during fertile window)"
                    },
                    accuracy: "Low for contraception (failure rate 15-25%) due to cycle variability",
                    significance: "First scientific method to predict ovulation; foundation for modern fertility awareness",
                    modernMethods: "Symptothermal method (combines calendar, temperature, cervical mucus) is more accurate",
                    note: "Sometimes misnamed 'rhythm method' though Knaus-Ogino is more specific"
                },
                
                labExperiment: {
                    title: "Tracking the Menstrual Cycle: Ovulation Prediction and Hormone Changes",
                    hypothesis: "Ovulation can be predicted and detected through changes in basal body temperature, hormone levels, and physical signs that occur in regular patterns during the menstrual cycle",
                    purpose: "Understand menstrual cycle phases, predict ovulation timing, and correlate with hormonal changes",
                    
                    background: {
                        cycleLength: "Average 28 days (normal range 21-35 days)",
                        ovulation: "Typically day 14 in 28-day cycle (but variable)",
                        lutealPhase: "Relatively constant ~14 days (more predictable)",
                        follicularPhase: "Variable length (determines cycle length)",
                        fertileWindow: "~6 days (5 days before ovulation + day of ovulation)",
                        signs: "BBT rise, cervical mucus changes, LH surge, mittelschmerz"
                    },
                    
                    variables: {
                        independent: "Day of menstrual cycle",
                        dependent: "BBT, cervical mucus characteristics, LH levels, subjective symptoms",
                        controlled: "Measurement time (morning for BBT), measurement method"
                    },
                    
                    materials: [
                        "FOR INDIVIDUAL TRACKING (if applicable):",
                        "Basal body thermometer (digital, 2 decimal places)",
                        "Menstrual cycle tracking chart or app",
                        "Calendar",
                        "",
                        "FOR EDUCATIONAL DEMONSTRATION:",
                        "Pre-recorded menstrual cycle data (temperature, mucus, symptoms)",
                        "LH ovulation predictor test strips (urine-based)",
                        "Sample urine at different cycle days (simulated or volunteer)",
                        "Graph paper or computer for plotting data",
                        "Hormone level diagrams (FSH, LH, estrogen, progesterone)",
                        "Anatomical models or diagrams of ovaries and uterus",
                        "",
                        "OPTIONAL:",
                        "Cervical mucus images/samples (for educational purposes only)",
                        "Fertility monitor (measures estrogen and LH in urine)"
                    ],
                    
                    safetyPrecautions: [
                        "PRIVACY: This is a sensitive topic; maintain respectful, scientific approach",
                        "NO REQUIRED DISCLOSURE: No student should be required to share personal cycle data",
                        "Use anonymized sample data sets for analysis",
                        "If using real LH tests, follow package instructions",
                        "Dispose of any bodily fluid test materials in biohazard waste",
                        "Wash hands after handling test strips",
                        "Emphasize: This is for EDUCATION, not contraceptive advice"
                    },
                    
                    procedure: [
                        "PART A: UNDERSTANDING THE KNAUS-OGINO CALCULATION",
                        "Historical Method:",
                        "1. Track cycle length for 6-12 months (day 1 of period to day before next period)",
                        "2. Identify shortest and longest cycles",
                        "3. Calculate fertile window:",
                        "   - First fertile day = Shortest cycle - 18 days",
                        "   - Last fertile day = Longest cycle - 11 days",
                        "   - Example: Shortest 26 days, Longest 32 days",
                        "     First fertile: 26-18 = day 8",
                        "     Last fertile: 32-11 = day 21",
                        "     Fertile window: Days 8-21 (14 days!)",
                        "4. Assumptions: Ovulation 14 days before next period, sperm viable 5 days, ovum 1 day",
                        "",
                        "PART B: BASAL BODY TEMPERATURE (BBT) METHOD",
                        "Modern Approach (data-based demonstration):",
                        "5. BBT = temperature at complete rest after sleep",
                        "6. Measure every morning before getting out of bed (same time)",
                        "7. Plot temperature on graph (day of cycle vs temperature)",
                        "8. Observe pattern:",
                        "   - Follicular phase: Lower temp (~97.0-97.5°F / 36.1-36.4°C)",
                        "   - Ovulation: Slight dip (not always)",
                        "   - Luteal phase: Rise of 0.4-0.8°F / 0.2-0.4°C (due to progesterone)",
                        "   - Temperature stays elevated until menstruation",
                        "9. Ovulation detected RETROSPECTIVELY (temp rise occurs after ovulation)",
                        "10. After 3 days of elevated temp, ovulation has occurred",
                        "",
                        "PART C: CERVICAL MUCUS MONITORING",
                        "Billings Ovulation Method:",
                        "11. Observe cervical mucus changes throughout cycle:",
                        "   - Menstruation: Bleeding",
                        "   - Post-menstrual: Dry or minimal mucus",
                        "   - Pre-ovulation: Increasing mucus, sticky/tacky",
                        "   - Ovulation: Abundant, clear, stretchy ('egg white'), slippery",
                        "     - Spinnbarkeit: Can stretch 6+ cm between fingers",
                        "   - Post-ovulation: Thick, sticky, or dry (progesterone effect)",
                        "12. Peak fertile mucus = ovulation imminent",
                        "13. Chart mucus quality daily",
                        "",
                        "PART D: LH SURGE DETECTION",
                        "Ovulation Predictor Kits (OPKs):",
                        "14. LH surges 24-36 hours before ovulation",
                        "15. Use OPK test strips (urine) starting ~5 days before expected ovulation",
                        "16. Test daily at same time (afternoon often best)",
                        "17. Positive test = LH surge → ovulation in 24-36 hours",
                        "18. This is PREDICTIVE (vs BBT which is retrospective)",
                        "",
                        "PART E: INTEGRATED DATA ANALYSIS",
                        "19. Create comprehensive cycle chart with columns:",
                        "   - Day of cycle",
                        "   - Date",
                        "   - BBT",
                        "   - Cervical mucus (dry/sticky/creamy/egg-white)",
                        "   - LH test result (neg/pos)",
                        "   - Symptoms (cramps, breast tenderness, mood)",
                        "20. Plot data on graph (overlay temperature, hormone levels)",
                        "21. Identify:",
                        "   - Menstrual phase (days 1-5)",
                        "   - Follicular phase (days 6-13)",
                        "   - Ovulation (day 14 ± 2)",
                        "   - Luteal phase (days 15-28)",
                        "22. Correlate with hormone diagram:",
                        "   - FSH peaks early follicular",
                        "   - Estrogen rises late follicular",
                        "   - LH surge mid-cycle",
                        "   - Progesterone high luteal phase",
                        "",
                        "PART F: FERTILE WINDOW DETERMINATION",
                        "23. Mark fertile window on chart:",
                        "   - 5 days before ovulation (sperm survival)",
                        "   - Day of ovulation",
                        "   - 1 day after (ovum survival)",
                        "   = ~6-7 day window",
                        "24. Compare Knaus-Ogino calculation to actual fertile window",
                        "25. Discuss accuracy and limitations"
                    ],
                    
                    expectedResults: {
                        knausOgino: {
                            regular28day: "Fertile window days 10-17 (8 days)",
                            irregular26_32: "Fertile window days 8-21 (14 days!)",
                            limitation: "Long fertile window for irregular cycles, low accuracy"
                        },
                        BBT: {
                            follicular: "97.0-97.5°F (36.1-36.4°C)",
                            ovulatory: "Possible slight dip (not always visible)",
                            luteal: "97.6-98.6°F (36.4-37.0°C) - sustained elevation",
                            accuracy: "Confirms ovulation occurred, but too late to predict"
                        },
                        cervicalMucus: {
                            preOvulatory: "Clear, stretchy, abundant ('egg white')",
                            postOvulatory: "Thick, sticky, scant",
                            accuracy: "Good real-time indicator when combined with other signs"
                        },
                        LH: {
                            baseline: "Negative test (control line only)",
                            surge: "Positive (test line darker than or equal to control)",
                            timing: "24-36 hours before ovulation",
                            accuracy: "Good for prediction (1-2 day advance notice)"
                        },
                        hormones: {
                            FSH: "Peaks early follicular, drops mid-late follicular",
                            estrogen: "Low early, rises late follicular, peak before LH surge, moderate luteal",
                            LH: "Low, then sharp mid-cycle surge",
                            progesterone: "Low follicular, high luteal, drops before menstruation"
                        }
                    },
                    
                    dataTable: [
                        ["Day", "Date", "BBT (°F)", "Mucus", "LH Test", "Symptoms", "Phase"],
                        ["1", "", "97.2", "Bleeding", "N/A", "Cramps", "Menstrual"],
                        ["5", "", "97.3", "Dry", "Neg", "", "Follicular"],
                        ["10", "", "97.4", "Sticky", "Neg", "", "Follicular"],
                        ["13", "", "97.5", "Egg white", "Pos", "Mittelschmerz", "Ovulatory"],
                        ["14", "", "97.3", "Egg white", "Pos", "", "Ovulatory (ovulation)"],
                        ["15", "", "97.9", "Thick", "Neg", "", "Luteal"],
                        ["21", "", "98.1", "Sticky", "Neg", "Breast tender", "Luteal"],
                        ["28", "", "97.2", "Dry", "Neg", "Mood change", "Pre-menstrual"]
                    ],
                    
                    sampleGraph: {
                        xAxis: "Day of Cycle (1-28)",
                        yAxis: "Temperature (°F) / Hormone Level (relative)",
                        curves: {
                            BBT: "Low flat, then rises day 14-15, stays elevated",
                            FSH: "Peak day 5, then drops",
                            Estrogen: "Rises days 8-13, peak day 13",
                            LH: "Sharp spike day 13-14",
                            Progesterone: "Low until day 14, then high plateau days 15-28, drop day 28"
                        },
                        fertileWindow: "Days 9-14 (shaded region)"
                    },
                    
                    observations: [
                        "BBT rises 0.4-0.8°F after ovulation (progesterone effect)",
                        "Cervical mucus becomes stretchy and clear around ovulation (estrogen effect)",
                        "LH surge precedes ovulation by 24-36 hours",
                        "Luteal phase length is relatively constant (~14 days)",
                        "Cycle length variability is due to variable follicular phase",
                        "Hormone changes drive physical and temperature changes"
                    ],
                    
                    analysis: {
                        knausOginoLimitations: [
                            "Assumes regular cycles (many women have irregular)",
                            "Requires months of data to establish pattern",
                            "Doesn't account for stress, illness affecting ovulation timing",
                            "Luteal phase can occasionally vary (10-16 days)",
                            "High failure rate for contraception (~25%)"
                        ],
                        BBTLimitations: [
                            "Retrospective - confirms ovulation after it occurs",
                            "Cannot predict ovulation in advance",
                            "Requires consistent measurement (same time daily)",
                            "Affected by illness, poor sleep, alcohol, stress",
                            "Subtle change - easy to misinterpret"
                        ],
                        cervicalMucusStrength: [
                            "Real-time indicator of fertility",
                            "Correlates with estrogen levels",
                            "No equipment needed"
                        ],
                        LHStrength: [
                            "Predicts ovulation 1-2 days in advance",
                            "Objective measurement",
                            "Easy to use"
                        ],
                        combined: "Symptothermal method (BBT + mucus + calendar) is most accurate fertility awareness method (~95-99% with perfect use)"
                    },
                    
                    physiologicalCorrelations: {
                        progesterone_BBT: "Progesterone raises basal body temperature by acting on hypothalamic thermoregulatory center",
                        estrogen_mucus: "High estrogen → thin, stretchy mucus (facilitates sperm passage)",
                        progesterone_mucus: "High progesterone → thick mucus (blocks sperm)",
                        LH_ovulation: "LH surge triggers final oocyte maturation and follicle rupture",
                        variability: "Stress, illness, exercise, diet can affect hormone levels and cycle timing"
                    },
                    
                    results: "The menstrual cycle shows predictable hormonal patterns with FSH and estrogen driving follicular development, LH surge triggering ovulation, and progesterone maintaining luteal phase. Ovulation can be detected through BBT rise, cervical mucus changes, and LH surge detection, with each method having distinct advantages.",
                    
                    conclusions: [
                        "Ovulation typically occurs ~14 days before next menstruation (luteal phase constant)",
                        "Follicular phase length varies, causing cycle length differences",
                        "Multiple physiological signs correlate with ovulation",
                        "Knaus-Ogino method has historical significance but limited accuracy",
                        "Modern fertility awareness combines multiple indicators for better accuracy",
                        "Understanding cycle physiology is crucial for reproductive health"
                    ],
                    
                    realWorldApplications: {
                        fertilityAwareness: {
                            forContraception: "Natural family planning (requires training and discipline)",
                            forConception: "Timing intercourse to fertile window (increases pregnancy rates)",
                            effectiveness: "Perfect use: 95-99%, Typical use: 75-88% (for symptothermal method)"
                        },
                        infertilityDiagnosis: {
                            anovulation: "No BBT rise = no ovulation",
                            shortLuteal: "Temperature elevation <10 days = luteal phase defect",
                            irregularCycles: "Suggests hormonal imbalance (PCOS, thyroid issues)"
                        },
                        pregnancyDetection: {
                            triphasic: "BBT stays elevated beyond expected period = possible pregnancy",
                            duration: "18+ days elevated temp strongly suggests pregnancy"
                        },
                        reproductiveHealth: {
                            cyclemonitoring: "Early detection of irregularities",
                            menopause: "Transition shows increasing cycle irregularity"
                        }
                    },
                    
                    extensions: [
                        "Investigate effect of stress on cycle length",
                        "Compare cycles across different age groups",
                        "Analyze effect of hormonal contraception on natural cycles",
                        "Use fertility apps/monitors for automated tracking",
                        "Study correlation between lifestyle factors (sleep, diet, exercise) and cycle regularity",
                        "Research historical and cultural attitudes toward fertility awareness"
                    ],
                    
                    modernAdvances: {
                        technologyAided: [
                            "Wearable devices (continuous temperature monitoring)",
                            "Smartphone apps (algorithm-based prediction)",
                            "Hormone monitors (measure estrogen + LH)",
                            "AI-powered fertility trackers"
                        ],
                        improvedAccuracy: "Modern methods achieve 95-99% accuracy when used correctly"
                    },
                    
                    limitations: [
                        "Requires regular cycles for accurate prediction (not ideal for adolescents or perimenopausal women)",
                        "User error common (inconsistent measurement, misinterpretation)",
                        "Does not protect against STIs",
                        "Requires abstinence or barrier methods during fertile window (if avoiding pregnancy)",
                        "Training and experience improve accuracy"
                    ],
                    
                    troubleshooting: [
                        "Erratic temperatures: Check thermometer, measure at consistent time, ensure adequate sleep",
                        "No clear temperature shift: May indicate anovulation (see healthcare provider)",
                        "Confusion about mucus: Practice observation over several cycles, combine with other methods",
                        "False positive LH test: Check test instructions, PCOS can cause elevated LH"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 3: PREGNANCY HORMONE DETECTION
            // ========================================
            
            ascheim_zondek_pregnancy_test: {
                name: "Ascheim-Zondek Test - Historical Pregnancy Detection",
                relatedTopics: ['fertilization_development', 'reproductive_hormones'],
                category: 'endocrinology',
                
                historicalBackground: {
                    scientists: "Selmar Ascheim and Bernhard Zondek",
                    year: "1928",
                    location: "Berlin, Germany",
                    discovery: "First reliable biological pregnancy test using animal bioassay",
                    principle: "Pregnant women's urine contains hCG (human Chorionic Gonadotropin) which stimulates ovaries",
                    method: {
                        sample: "Inject woman's urine into immature female mice",
                        dose: "Subcutaneously, twice daily for 3 days",
                        wait: "5 days total",
                        examine: "Dissect mice and examine ovaries",
                        positive: "Enlarged ovaries with corpora lutea = pregnancy",
                        negative: "No ovarian changes = not pregnant"
                    },
                    accuracy: "~98% accurate",
                    problem: "Required sacrificing mice (5 per test)",
                    significance: "First objective, reliable pregnancy test; replaced subjective clinical signs",
                    context: "Before this, pregnancy diagnosed by missed period, morning sickness, abdominal examination (very late)",
                    improvements: {
                        1930s: "Rabbit test (Friedman test) - similar principle",
                        1940s: "Frog test (Xenopus) - frogs lay eggs in response to hCG, can be reused",
                        1960s: "Immunological tests (antibody-based) - no animals needed",
                        1970s: "Home pregnancy tests - monoclonal antibodies"
                    },
                    quote: "Before Ascheim-Zondek, pregnancy was a mystery until visibly obvious",
                    legacy: "Foundation for modern immunoassay-based pregnancy tests"
                },
                
                labExperiment: {
                    title: "Modern Pregnancy Test: Detecting hCG with Immunochromatography",
                    hypothesis: "Human chorionic gonadotropin (hCG) in urine can be detected using antibody-based lateral flow assay, providing rapid, accurate pregnancy diagnosis",
                    purpose: "Understand pregnancy hormone (hCG) detection, immunoassay principles, and modern pregnancy testing",
                    
                    background: {
                        hCG: {
                            fullName: "Human Chorionic Gonadotropin",
                            structure: "Glycoprotein hormone (α and β subunits)",
                            production: "Syncytiotrophoblast (developing placenta)",
                            timing: "Begins 6-8 days post-fertilization (implantation)",
                            function: [
                                "Maintains corpus luteum in early pregnancy",
                                "Prevents menstruation",
                                "Ensures continued progesterone production"
                            ],
                            levels: {
                                implantation: "~5-50 mIU/ml",
                                detection: "Urine tests: 20-50 mIU/ml threshold",
                                doubling: "Doubles every 48-72 hours in early pregnancy",
                                peak: "Weeks 8-10 (~100,000 mIU/ml)",
                                decline: "After first trimester (placenta takes over hormone production)"
                            }
                        },
                        testPrinciple: {
                            type: "Lateral flow immunoassay (LFIA)",
                            basis: "Antigen-antibody binding specificity",
                            format: "Sandwich assay",
                            visualization: "Colored lines (gold-labeled antibodies)",
speed: "Results in 3-5 minutes",
sensitivity: "Can detect pregnancy 7-10 days post-conception"
}
},
variables: {
                    independent: "Presence/concentration of hCG in sample",
                    dependent: "Appearance of test line (positive/negative result)",
                    controlled: ["Test kit brand/type", "Sample volume", "Wait time", "Temperature"]
                },
                
                materials: [
                    "FOR DEMONSTRATION:",
                    "Commercial pregnancy test kits (urine-based)",
                    "Positive control: hCG standard solution (known concentration)",
                    "Negative control: Plain water or non-pregnant urine (if ethically sourced)",
                    "Small cups or containers for samples",
                    "Timer or stopwatch",
                    "Disposable gloves",
                    "Absorbent paper towels",
                    "",
                    "FOR EDUCATIONAL ANALYSIS:",
                    "Package inserts from pregnancy tests (instructions)",
                    "Diagrams of lateral flow assay mechanism",
                    "Graph of hCG levels during pregnancy",
                    "Historical images of Ascheim-Zondek test",
                    "",
                    "OPTIONAL FOR ADVANCED:",
                    "Different brands/sensitivities of tests (compare)",
                    "Serial dilutions of hCG standard (test sensitivity)",
                    "Quantitative hCG test kit (ELISA-based, optional)"
                ],
                
                safetyPrecautions: [
                    "CRITICAL: Do NOT use actual human urine from students in educational settings",
                    "Use only commercially prepared controls or synthetic samples",
                    "If using any biological samples, wear gloves",
                    "Dispose of all materials in biohazard waste",
                    "Wash hands thoroughly after experiment",
                    "Maintain privacy and sensitivity around pregnancy topics",
                    "Emphasize educational purpose, not diagnostic use",
                    "Follow package instructions for test kits exactly"
                ],
                
                procedure: [
                    "PART A: UNDERSTANDING THE HISTORICAL METHOD",
                    "1. Review Ascheim-Zondek protocol:",
                    "   - Inject woman's urine into immature mice",
                    "   - Wait 5 days",
                    "   - Sacrifice mice, dissect, examine ovaries",
                    "   - Positive: Enlarged ovaries with hemorrhagic follicles/corpora lutea",
                    "2. Discuss:",
                    "   - Why did it work? (hCG similar to LH, stimulates ovulation)",
                    "   - Limitations: Animal sacrifice, time (5 days), expense, expertise needed",
                    "   - Ethical concerns: Using animals for routine testing",
                    "",
                    "PART B: MODERN IMMUNOCHROMATOGRAPHIC TEST",
                    "Setup:",
                    "3. Read pregnancy test package insert carefully",
                    "4. Note sensitivity (e.g., '25 mIU/ml hCG')",
                    "5. Identify test components:",
                    "   - Sample well (where urine/sample applied)",
                    "   - Test window with control line region and test line region",
                    "   - Absorbent wick",
                    "6. Prepare positive control (hCG standard, ~50-100 mIU/ml)",
                    "7. Prepare negative control (water or buffer)",
                    "",
                    "Testing Procedure:",
                    "8. Wear gloves",
                    "9. Label test strips: 'Positive Control', 'Negative Control'",
                    "10. For each test:",
                    "    a. Add specified amount of sample to sample well (usually 3-5 drops or dip strip)",
                    "    b. Start timer",
                    "    c. Place test on flat surface",
                    "    d. Wait specified time (usually 3-5 minutes)",
                    "    e. Do NOT read after 10 minutes (may show false positive)",
                    "11. Observe and record results",
                    "",
                    "PART C: INTERPRETING RESULTS",
                    "12. Control line (C):",
                    "    - MUST appear for test to be valid",
                    "    - Contains antibodies that bind labeled antibodies (proves test worked)",
                    "13. Test line (T):",
                    "    - Appears if hCG present",
                    "    - Contains antibodies specific for hCG-β subunit",
                    "14. Result interpretation:",
                    "    - Negative: Only control line visible",
                    "    - Positive: Both control line AND test line visible (any intensity)",
                    "    - Invalid: No control line (test failed, repeat)",
                    "15. Photograph or sketch results",
                    "",
                    "PART D: MECHANISM ANALYSIS",
                    "16. Study diagram of lateral flow assay:",
                    "    SAMPLE PAD → CONJUGATE PAD → NITROCELLULOSE MEMBRANE → ABSORBENT PAD",
                    "17. Understand the 'sandwich' assay:",
                    "    Step 1: Sample (with or without hCG) applied",
                    "    Step 2: Sample flows to conjugate pad",
                    "    - Contains gold-labeled anti-hCG antibodies (mobile)",
                    "    - If hCG present: binds to gold-antibody conjugate",
                    "    Step 3: Complex flows along membrane",
                    "    - Reaches TEST LINE",
                    "    - Test line has immobilized anti-hCG antibodies",
                    "    - If hCG-gold-antibody complex present: CAPTURED at test line",
                    "    - Gold particles accumulate → PINK/PURPLE TEST LINE",
                    "    Step 4: Continue to CONTROL LINE",
                    "    - Has antibodies that bind any gold-labeled antibodies (with or without hCG)",
                    "    - Always shows line if test worked properly",
                    "18. Draw or label diagram showing antibody-antigen interactions",
                    "",
                    "PART E: SENSITIVITY TESTING (OPTIONAL)",
                    "19. Prepare serial dilutions of hCG standard:",
                    "    - 100 mIU/ml, 50 mIU/ml, 25 mIU/ml, 10 mIU/ml, 5 mIU/ml",
                    "20. Test each dilution with pregnancy test",
                    "21. Determine detection threshold (lowest concentration giving positive)",
                    "22. Compare to manufacturer's claimed sensitivity",
                    "",
                    "PART F: hCG LEVELS DURING PREGNANCY",
                    "23. Plot graph of hCG levels over pregnancy:",
                    "    X-axis: Days/weeks since conception",
                    "    Y-axis: hCG concentration (mIU/ml)",
                    "24. Mark key points:",
                    "    - Implantation (~day 6-7): hCG begins",
                    "    - Detectable by blood (~day 9-11): ~5-50 mIU/ml",
                    "    - Detectable by urine (~day 12-14): ~25-50 mIU/ml",
                    "    - Missed period (~day 28): ~100-200 mIU/ml",
                    "    - Peak (~weeks 8-10): ~100,000 mIU/ml",
                    "    - Decline (~after week 10): Drops to ~10,000-20,000 mIU/ml",
                    "25. Discuss:",
                    "    - Why does hCG peak then decline? (Placenta matures, takes over hormone production)",
                    "    - Why doubling time important? (Monitors pregnancy viability)",
                    "    - What if hCG doesn't rise properly? (Possible miscarriage or ectopic pregnancy)"
                ],
                
                expectedResults: {
                    positiveControl: {
                        appearance: "Two lines: control (C) and test (T)",
                        testLine: "May be faint or dark depending on hCG concentration",
                        timing: "Usually visible within 1-3 minutes",
                        note: "ANY visible test line = positive, regardless of intensity"
                    },
                    negativeControl: {
                        appearance: "One line: control (C) only",
                        testLine: "Absent",
                        timing: "Control line appears within 3-5 minutes"
                    },
                    sensitivityTest: {
                        highConc: "Strong, dark test line",
                        threshold: "Faint test line at ~25 mIU/ml (typical sensitivity)",
                        belowThreshold: "No test line at <25 mIU/ml"
                    }
                },
                
                mechanismDiagram: {
                    components: [
                        "Sample pad: Holds and releases sample",
                        "Conjugate pad: Contains gold-labeled anti-hCG antibodies (Ab1-gold)",
                        "Nitrocellulose membrane: Contains test and control lines",
                        "Test line (T): Immobilized anti-hCG antibodies (Ab2)",
                        "Control line (C): Immobilized anti-species antibodies (bind Ab1)",
                        "Absorbent pad: Pulls sample through by capillary action"
                    ],
                    flowWithHCG: [
                        "1. Sample with hCG enters",
                        "2. hCG binds to Ab1-gold (forms hCG-Ab1-gold complex)",
                        "3. Complex flows to test line",
                        "4. Ab2 captures hCG-Ab1-gold (sandwich: Ab2—hCG—Ab1-gold)",
                        "5. Gold accumulates → TEST LINE VISIBLE",
                        "6. Excess Ab1-gold continues to control line",
                        "7. Control antibodies bind Ab1-gold → CONTROL LINE VISIBLE",
                        "RESULT: Two lines (POSITIVE)"
                    ],
                    flowWithoutHCG: [
                        "1. Sample without hCG enters",
                        "2. Ab1-gold released but no hCG to bind",
                        "3. Ab1-gold flows past test line (nothing to capture it)",
                        "4. Ab1-gold reaches control line",
                        "5. Control antibodies bind Ab1-gold → CONTROL LINE VISIBLE",
                        "RESULT: One line only (NEGATIVE)"
                    ]
                },
                
                dataTable: [
                    ["Sample", "hCG Concentration", "Control Line", "Test Line", "Interpretation"],
                    ["Positive control", "50 mIU/ml", "Present", "Present", "Positive"],
                    ["Negative control", "0 mIU/ml", "Present", "Absent", "Negative"],
                    ["100 mIU/ml", "100", "Present", "Present (dark)", "Positive"],
                    ["50 mIU/ml", "50", "Present", "Present (medium)", "Positive"],
                    ["25 mIU/ml", "25", "Present", "Present (faint)", "Positive"],
                    ["10 mIU/ml", "10", "Present", "Absent", "Negative*"],
                    ["*Below detection threshold", "", "", "", ""]
                ],
                
                hCGLevelsGraph: {
                    description: "Typical hCG levels during first trimester",
                    xAxis: "Weeks since conception (0-12 weeks)",
                    yAxis: "hCG concentration (mIU/ml, log scale)",
                    curve: [
                        "Week 1: ~5-50",
                        "Week 2: ~50-500",
                        "Week 3: ~100-1,000",
                        "Week 4: ~500-10,000",
                        "Week 5-6: ~1,000-50,000",
                        "Week 7-8: ~10,000-100,000",
                        "Week 9-10: ~50,000-200,000 (PEAK)",
                        "Week 11-12: ~20,000-100,000 (declining)"
                    ],
                    doublingTime: "Every 48-72 hours in early pregnancy",
                    detectionThresholds: {
                        bloodTest: "~5-10 mIU/ml (earlier detection)",
                        urineTest: "~25-50 mIU/ml (home tests)"
                    }
                },
                
                observations: [
                    "Modern pregnancy tests are rapid (3-5 minutes) vs historical (5 days)",
                    "Visual, qualitative result (line appears or doesn't)",
                    "Control line must appear for valid test",
                    "Test line intensity correlates with hCG concentration",
                    "Very early pregnancy may show faint line (low hCG)",
                    "No animals harmed in modern tests (ethical improvement)"
                ],
                
                analysis: {
                    immunoassayPrinciples: [
                        "Specificity: Antibodies bind only to hCG (not other hormones)",
                        "Sensitivity: Can detect very low concentrations (~25 mIU/ml)",
                        "Sandwich format: Two antibodies bind same antigen (increases specificity)",
                        "Visual detection: Gold nanoparticles provide colored signal"
                    ],
                    hCGAsPregnancyMarker: [
                        "Unique to pregnancy (only trophoblast produces hCG)",
                        "Appears early (6-8 days post-fertilization)",
                        "Rises predictably in normal pregnancy",
                        "β-subunit is pregnancy-specific (α-subunit shared with LH, FSH, TSH)"
                    ],
                    historicalVsModern: {
                        ascheimZondek: {
                            time: "5 days",
                            cost: "High (animals, lab, expertise)",
                            accuracy: "~98%",
                            ethics: "Animal sacrifice",
                            availability: "Lab only"
                        },
                        modernImmunoassay: {
                            time: "3-5 minutes",
                            cost: "Low ($1-20)",
                            accuracy: "~99% (when used correctly)",
                            ethics: "No animals",
                            availability: "Over-the-counter home use"
                        }
                    }
                },
                
                clinicalSignificance: {
                    earlyDetection: {
                        benefit: "Earlier prenatal care, lifestyle modifications",
                        timing: "Can detect pregnancy before missed period (some sensitive tests)",
                        bloodVsUrine: "Blood tests more sensitive (detect 1-2 days earlier)"
                    },
                    monitoringPregnancy: {
                        viability: "Quantitative hCG should double every 48-72 hours",
                        slowRise: "May indicate miscarriage or ectopic pregnancy",
                        rapidRise: "May indicate multiple pregnancy (twins) or molar pregnancy",
                        decline: "Normal after week 10-12 (placenta takes over)"
                    },
                    abnormalResults: {
                        falsePositive: {
                            causes: [
                                "Recent pregnancy loss or abortion",
                                "Certain medications (hCG injections for fertility)",
                                "Rare tumors (choriocarcinoma, hydatidiform mole)",
                                "Reading test too late (evaporation line)"
                            ]
                        },
                        falseNegative: {
                            causes: [
                                "Testing too early (hCG below detection threshold)",
                                "Dilute urine (drink lots of water before test)",
                                "Ectopic pregnancy (lower hCG levels)",
                                "Expired or improperly stored test"
                            ]
                        }
                    },
                    bestPractices: {
                        timing: "Test with first morning urine (most concentrated hCG)",
                        waitTime: "Ideally wait until day of missed period (or later)",
                        repeatIfNegative: "If symptoms but negative, retest in 2-3 days",
                        followUp: "Positive result should be confirmed with healthcare provider"
                    }
                },
                
                results: "Modern pregnancy tests use immunochromatographic assays to detect hCG in urine within minutes. The presence of hCG, produced by the developing placenta starting 6-8 days after fertilization, indicates pregnancy. The lateral flow format provides rapid, sensitive, and specific detection without requiring animals or laboratory equipment.",
                
                conclusions: [
                    "hCG is a reliable biomarker for pregnancy (placenta-specific)",
                    "Immunoassays revolutionized pregnancy testing (rapid, accurate, accessible)",
                    "Modern tests detect pregnancy earlier than historical methods",
                    "Antibody specificity enables detection of single hormone in complex sample (urine)",
                    "Technology evolution: animal bioassay → immunoassay → lateral flow → home testing"
                ],
                
                realWorldApplications: {
                    clinicalUse: {
                        obstetricsGynecology: "Confirm pregnancy, monitor early pregnancy viability",
                        emergencyMedicine: "Rule out ectopic pregnancy in women with abdominal pain",
                        oncology: "Detect certain tumors (choriocarcinoma, testicular cancer)",
                        fertility: "Confirm conception after IVF/IUI"
                    },
                    homeUse: {
                        familyPlanning: "Early awareness enables decision-making",
                        prenatalCare: "Prompts initiation of prenatal vitamins, healthy behaviors",
                        accessibility: "Affordable, private, no prescription needed"
                    },
                    research: {
                        reproductiveBiology: "Study implantation timing, early pregnancy",
                        pharmacology: "Test contraceptive efficacy",
                        epidemiology: "Track pregnancy rates, outcomes"
                    }
                },
                
                extensions: [
                    "Compare sensitivity of different pregnancy test brands",
                    "Test effect of sample dilution on result intensity",
                    "Investigate other lateral flow assays (COVID-19 tests, ovulation tests)",
                    "Research quantitative hCG tests (ELISA, chemiluminescence)",
                    "Explore development of point-of-care diagnostic tests",
                    "Study history of other pregnancy tests (Friedman test, frog test)",
                    "Analyze cost-effectiveness of home vs. laboratory pregnancy testing"
                ],
                
                advancedTopics: {
                    quantitativeHCG: {
                        method: "ELISA (Enzyme-Linked Immunosorbent Assay) or chemiluminescence",
                        use: "Measure exact hCG concentration",
                        clinical: "Monitor pregnancy viability, diagnose ectopic, assess risk"
                    },
                    hCGIsoforms: {
                        regular: "Intact hCG (α + β subunits)",
                        hyperglycosylated: "hCG-H (invasive trophoblast)",
                        freeβ: "Free β-subunit (Down syndrome screening)",
                        nicked: "Degraded forms"
                    },
                    otherApplications: {
                        cancerDiagnosis: "Testicular cancer, gestational trophoblastic disease",
                        dopingDetection: "Athletes abuse hCG for testosterone production"
                    }
                },
                
                limitations: [
                    "Qualitative test (yes/no) - doesn't measure exact hCG level",
                    "Cannot distinguish normal from ectopic pregnancy",
                    "Cannot determine gestational age accurately",
                    "User error possible (incorrect timing, reading, interpretation)",
                    "False results possible (see causes above)",
                    "Should be confirmed by healthcare provider"
                ],
                
                troubleshooting: [
                    "No control line: Test failed, repeat with new test",
                    "Very faint test line: Early pregnancy (low hCG) or evaporation line, retest in 2-3 days",
                    "Positive test but no pregnancy symptoms: Very early pregnancy, or chemical pregnancy (loss before period)",
                    "Negative test but missed period: Test too early, dilute urine, or pregnancy-unrelated cause, retest or see provider"
                ],
                
                ethicalConsiderations: {
                    historical: "Animal testing raised ethical concerns (sacrifice for routine diagnosis)",
                    modern: "Accessible testing raises questions about unintended consequences (sex-selective abortion in some cultures)",
                    privacy: "Home testing offers privacy but may delay medical care",
                    accuracy: "Responsibility to provide accurate information so users make informed decisions"
                }
            }
        },

        // ========================================
        // EXPERIMENT 4: PLACENTAL DIFFUSION
        // ========================================
        
        placental_exchange_model: {
            name: "Placental Exchange - Modeling Maternal-Fetal Transfer",
            relatedTopics: ['fertilization_development', 'pregnancy'],
            category: 'physiology',
            
            historicalBackground: {
                earlyBelief: "Aristotle (384-322 BCE) believed fetus fed directly from mother's blood",
                reality: "Maternal and fetal blood DO NOT MIX (separated by placental barrier)",
                discoveryOfSeparation: {
                    scientist: "William Harvey",
                    year: "1651",
                    observation: "Noted fetal and maternal blood are separate in his studies of animal reproduction"
                },
                placentalStructure: {
                    scientist: "Multiple anatomists in 17th-19th centuries",
                    understanding: "Gradual recognition of villous structure",
                    function: "Placenta as exchange organ (like lung) not mixing point"
                },
                keyInsight: {
                    who: "Joseph Barcroft and others",
                    when: "Early 20th century",
                    what: "Detailed physiology of placental gas and nutrient exchange",
                    methods: "Studied oxygen saturation, transfer rates in pregnant animals"
                },
                modernUnderstanding: {
                    barrier: "Placental barrier = syncytiotrophoblast + connective tissue + fetal capillary endothelium",
                    exchange: "Diffusion, active transport, facilitated transport, endocytosis",
                    selectivity: "Protects fetus but allows necessary substances through"
                },
                significance: "Understanding placental exchange crucial for prenatal health, drug safety, maternal disease effects on fetus"
            },
            
            labExperiment: {
                title: "Modeling Placental Exchange Using Dialysis Membrane",
                hypothesis: "A selectively permeable membrane can model the placental barrier, allowing small molecules (glucose, oxygen) to diffuse while blocking large molecules (proteins), similar to maternal-fetal exchange",
                purpose: "Understand principles of placental exchange, diffusion across membranes, and factors affecting transfer rate",
                
                background: {
                    placentalStructure: {
                        maternalSide: "Decidua basalis with blood-filled spaces (lacunae)",
                        fetalSide: "Chorionic villi containing fetal capillaries",
                        barrier: {
                            layers: [
                                "Syncytiotrophoblast (multinucleated, no cell boundaries)",
                                "Cytotrophoblast (individual cells, decreases as pregnancy advances)",
                                "Connective tissue of villus",
                                "Fetal capillary endothelium"
                            ],
                            thickness: "~3.5 μm (very thin for efficient exchange)",
                            surfaceArea: "~10-14 m² at term (huge for exchange)"
                        }
                    },
                    exchangeMechanisms: {
                        simpleDiffusion: {
                            principle: "Down concentration gradient",
                            examples: "O₂, CO₂, lipid-soluble molecules",
                            factors: "Concentration gradient, molecular size, lipid solubility"
                        },
                        facilitatedDiffusion: {
                            principle: "Carrier proteins, no energy",
                            examples: "Glucose (GLUT1 transporters)"
                        },
                        activeTransport: {
                            principle: "Against gradient, requires ATP",
                            examples: "Amino acids, calcium, iron"
                        },
                        receptor-mediated: {
                            principle: "Specific binding and uptake",
                            examples: "IgG antibodies (passive immunity), LDL, transferrin"
                        },
                        bulk: {
                            principle: "Endocytosis/exocytosis",
                            examples: "Some proteins, large molecules"
                        }
                    },
                    whatCrosses: {
                        readily: [
                            "Oxygen (simple diffusion)",
                            "Carbon dioxide (simple diffusion)",
                            "Water (osmosis, aquaporins)",
                            "Glucose (facilitated diffusion)",
                            "Amino acids (active transport)",
                            "Electrolytes (various mechanisms)",
                            "Fat-soluble vitamins (A, D, E, K)",
                            "Lipid-soluble drugs, alcohol",
                            "Steroid hormones",
                            "IgG antibodies (receptor-mediated, passive immunity)"
                        ],
                        limited: [
                            "Water-soluble vitamins (some active transport)",
                            "Maternal proteins (most blocked)",
                            "Large molecules",
                            "Bacteria (usually blocked)",
                            "IgM, IgA antibodies (too large)"
                        ],
                        harmful: [
                            "Teratogens (thalidomide, alcohol, certain drugs)",
                            "Viruses (rubella, CMV, Zika, HIV can cross)",
                            "Drugs (both therapeutic and illicit)",
                            "Nicotine, caffeine",
                            "Heavy metals (lead, mercury)"
                        ]
                    }
                },
                
                variables: {
                    independent: "Molecule size and type (glucose, starch, protein)",
                    dependent: "Transfer rate across membrane (concentration in 'fetal' compartment)",
                    controlled: ["Membrane type", "Temperature", "Surface area", "Time", "Initial concentrations"]
                },
                
                materials: [
                    "Dialysis tubing (MWCO 12,000-14,000 Da) - represents placental barrier",
                    "String or clips to seal dialysis tubing",
                    "Beakers (250-500 ml) - 'maternal blood space'",
                    "Glucose solution (5% or 0.5 M)",
                    "Starch solution (1%)",
                    "Protein solution (albumin or powdered milk, 1-2%)",
                    "Food coloring or dye (small molecule marker)",
                    "Distilled water",
                    "",
                    "TESTING REAGENTS:",
                    "Glucose test strips or Benedict's reagent",
                    "Iodine solution (for starch)",
                    "Biuret reagent or Bradford reagent (for protein)",
                    "",
                    "EQUIPMENT:",
                    "Test tubes",
                    "Pipettes or droppers",
                    "Graduated cylinders",
                    "Stirring rods",
                    "Timer",
                    "Hot plate or water bath (if using Benedict's)",
                    "Spectrophotometer (optional, for quantitative)"
                ],
                
                safetyPrecautions: [
                    "Wear safety goggles and gloves",
                    "Iodine stains - avoid contact with skin/clothing",
                    "Biuret reagent contains copper sulfate and sodium hydroxide - caustic",
                    "Benedict's reagent requires heating - use caution",
                    "Dispose of chemicals properly",
                    "Wash hands after experiment"
                ],
                
                procedure: [
                    "SETUP - CREATING 'PLACENTA' MODEL:",
                    "1. Cut dialysis tubing into ~15-20 cm lengths (one per group)",
                    "2. Soak tubing in distilled water for 5-10 minutes (softens)",
                    "3. Rub tubing between fingers to open (becomes tube)",
                    "4. Tie or clamp one end securely (waterproof knot or clip)",
                    "5. This represents the 'fetal compartment' (inside = fetal blood)",
                    "",
                    "PREPARATION OF 'FETAL BLOOD' (INSIDE TUBING):",
                    "6. Prepare solution to place INSIDE tubing:",
                    "   - Mix: 10 ml distilled water",
                    "   - This starts with NO glucose, starch, or protein",
                    "   - We'll monitor what crosses INTO this compartment",
                    "7. Pour into dialysis tubing",
                    "8. Remove air bubbles (gently squeeze)",
                    "9. Tie or clamp top end securely",
                    "10. Rinse outside of tubing with distilled water",
                    "",
                    "PREPARATION OF 'MATERNAL BLOOD' (OUTSIDE TUBING):",
                    "11. Fill beaker (~200 ml) with 'maternal blood' solution:",
                    "    - 5% glucose solution (or 0.5 M)",
                    "    - 1% starch solution",
                    "    - 1% protein solution (albumin or milk)",
                    "    - Add few drops food coloring (visual tracer)",
                    "12. Mix well",
                    "13. This represents 'maternal blood' in lacunae around villi",
                    "",
                    "EXPERIMENTAL PROCEDURE:",
                    "14. Take INITIAL SAMPLES:",
                    "    a. 'Maternal blood': Remove 5 ml, test for glucose, starch, protein",
                    "    b. 'Fetal blood': Difficult to sample initially (small volume), but know it's pure water",
                    "15. Submerge dialysis tubing completely in 'maternal blood' beaker",
                    "16. Ensure tubing floats freely (not touching bottom)",
                    "17. Start timer",
                    "",
                    "MONITORING DIFFUSION:",
                    "18. At time intervals (15 min, 30 min, 60 min):",
                    "    a. Remove dialysis tubing carefully",
                    "    b. Blot outside dry with paper towel",
                    "    c. Carefully open one end and remove ~2 ml 'fetal blood' sample",
                    "    d. Test for glucose, starch, protein (see testing procedures below)",
                    "    e. Return tubing to beaker",
                    "    f. Also test 'maternal blood' (should decrease slightly)",
                    "19. Continue for 60-90 minutes total",
                    "",
                    "TESTING PROCEDURES:",
                    "",
                    "GLUCOSE TEST:",
                    "Option A - Test Strips:",
                    "  - Dip glucose test strip in sample",
                    "  - Read color change (compare to chart)",
                    "  - Record glucose level",
                    "Option B - Benedict's Test:",
                    "  - Mix 2 ml sample + 2 ml Benedict's reagent",
                    "  - Heat in boiling water for 3-5 min",
                    "  - Observe color: Blue=negative, Green/Yellow/Orange/Red=positive",
                    "",
                    "STARCH TEST:",
                    "  - Add 2-3 drops iodine to 2 ml sample",
                    "  - Blue-black color = starch present",
                    "  - Brown/orange = no starch",
                    "",
                    "PROTEIN TEST:",
                    "  - Add 1 ml Biuret reagent to 2 ml sample",
                    "  - Wait 5 minutes",
                    "  - Purple/violet color = protein present",
                    "  - Blue = no protein",
                    "",
                    "VISUAL OBSERVATION:",
                    "  - Check if food coloring crossed into 'fetal' compartment",
                    "",
                    "DATA COLLECTION:",
                    "20. Record all results in data table",
                    "21. Note intensity of color changes (semi-quantitative)",
                    "22. Graph concentration vs time if quantitative data available"
                ],
                
                expectedResults: {
                    glucose: {
                        initial_maternal: "High concentration (5%)",
                        initial_fetal: "Zero",
                        after15min: "Detectable in fetal compartment",
                        after60min: "Significant increase in fetal compartment",
                        mechanism: "Small molecule, crosses readily by diffusion",
                        realPlacenta: "Crosses by facilitated diffusion (GLUT1)"
                    },
                    foodColoring: {
                        initial: "Only in maternal compartment",
                        after60min: "Some crosses to fetal compartment",
                        reason: "Small molecule, crosses membrane",
                        note: "Dialysis membrane pores allow small molecules"
                    },
                    starch: {
                        maternalCompartment: "Positive iodine test throughout",
                        fetalCompartment: "Negative iodine test (no starch crosses)",
                        reason: "Large polysaccharide molecule (>12,000 Da), cannot cross",
                        realPlacenta: "Starch must be digested to glucose first"
                    },
                    protein: {
                        maternalCompartment: "Positive Biuret test throughout",
                        fetalCompartment: "Negative Biuret test (no protein crosses)",
                        reason: "Large molecule (albumin ~66,000 Da), exceeds membrane MWCO",
                        realPlacenta: "Most maternal proteins blocked; amino acids cross (small); IgG crosses by receptor-mediated endocytosis (exception)"
                    }
                },
                
                dataTable: [
                    ["Time (min)", "Location", "Glucose", "Starch", "Protein", "Color"],
                    ["0", "Maternal", "+++", "+++", "+++", "Yes"],
                    ["0", "Fetal", "-", "-", "-", "No"],
                    ["15", "Maternal", "+++", "+++", "+++", "Yes"],
                    ["15", "Fetal", "+", "-", "-", "Slight"],
                    ["30", "Maternal", "++", "+++", "+++", "Yes"],
                    ["30", "Fetal", "++", "-", "-", "Yes"],
                    ["60", "Maternal", "++", "+++", "+++", "Yes"],
                    ["60", "Fetal", "++", "-", "-", "Yes"],
                    ["", "", "", "", "", ""],
                    ["Legend:", "- = absent", "+ = low", "++ = medium", "+++ = high"]
                ],
                
                graphing: {
                    xAxis: "Time (minutes)",
                    yAxis: "Concentration (relative or actual if quantified)",
                    curves: {
                        maternal_glucose: "Starts high, decreases slightly (dilution into fetal)",
                        fetal_glucose: "Starts zero, increases asymptotically (approaching equilibrium)",
                        fetal_starch: "Flat at zero (no transfer)",
                        fetal_protein: "Flat at zero (no transfer)"
                    }
                },
                
                observations: [
                    "Small molecules (glucose, dye) cross membrane readily",
                    "Large molecules (starch, protein) do NOT cross",
                    "Concentration gradient drives diffusion",
                    "Transfer continues until equilibrium reached (concentrations equal)",
                    "Membrane acts as selective barrier based on molecular size",
                    "Rate of transfer depends on concentration gradient and molecule size"
                ],
                
                analysis: {
                    molecularSizeEffect: [
                        "Glucose (~180 Da): Crosses easily through membrane pores",
                        "Starch (~thousands to millions Da): Too large, blocked",
                        "Proteins (thousands to millions Da): Blocked by MWCO 12,000 membrane",
                        "Real placenta: Similar selectivity but more complex (active transport, receptors)"
                    ],
                    diffusionPrinciples: [
                        "Fick's Law: Rate ∝ (Surface Area × Concentration Gradient × Permeability) / Thickness",
                        "High maternal glucose → diffuses to lower fetal side",
                        "Large surface area of placenta (10-14 m²) enhances exchange",
                        "Thin barrier (3.5 μm) facilitates rapid diffusion"
                    ],
                    modelLimitations: [
                        "Dialysis membrane = passive diffusion only",
                        "Real placenta has active transport, carriers, receptors",
                        "Real placenta has blood flow (increases gradient)",
                        "Model static; real placenta dynamic",
                        "Simplified - real placenta exchanges O₂, CO₂, wastes, hormones, etc."
                    ],
                    clinicalRelevance: [
                        "Maternal hyperglycemia (diabetes) → fetal hyperglycemia → large baby (macrosomia)",
                        "Maternal malnutrition → poor nutrient transfer → growth restriction",
                        "Drugs, alcohol, toxins cross placenta → fetal exposure",
                        "Placental dysfunction → impaired exchange → fetal distress"
                    ]
                },
                
                placentalFunctions: {
                    gasExchange: {
                        O2: "Maternal → Fetal (simple diffusion, down gradient)",
                        CO2: "Fetal → Maternal (simple diffusion)",
                        mechanism: "Similar to lung alveoli"
                    },
                    nutrientTransfer: {
                        glucose: "Facilitated diffusion (GLUT1)",
                        aminoAcids: "Active transport",
                        lipids: "Diffusion + transport proteins",
                        vitamins: "Various mechanisms",
                        water: "Osmosis, aquaporins",
                        electrolytes: "Active/passive transport"
                    },
                    wasteRemoval: {
                        urea: "Fetal → Maternal (diffusion)",
                        uricAcid: "Fetal → Maternal",
                        creatinine: "Fetal → Maternal",
                        bilirubiin: "Fetal → Maternal (conjugated in maternal liver)"
                    },
                    immuneFunction: {
                        IgG: "Maternal → Fetal (receptor-mediated endocytosis)",
                        effect: "Passive immunity (antibodies against diseases mother has had)",
                        timing: "Mainly third trimester",
                        protection: "Protects newborn for first ~6 months"
                    },
                    endocrineFunction: {
                        hormones: [
                            "hCG (maintains corpus luteum)",
                            "hPL (metabolic changes)",
                            "Estrogen, Progesterone (maintain pregnancy)",
                            "Relaxin (softens cervix, ligaments)"
                        ]
                    },
                    barrier: {
                        blocks: [
                            "Most bacteria (too large)",
                            "Maternal cells",
                            "Large proteins (except IgG)",
                            "Some pathogens"
                        ],
                        allows: [
                            "Viruses (rubella, CMV, HIV, Zika - small, can cross)",
                            "Parasites (Toxoplasma, malaria)",
                            "Teratogens",
                            "Drugs"
                        ]
                    }
                },
                
                results: "The dialysis membrane model demonstrates selective permeability similar to the placental barrier. Small molecules like glucose and dye cross readily by diffusion, while large molecules like starch and protein are blocked. This selective exchange ensures fetal nutrition while providing some protection from harmful large molecules.",
                
                conclusions: [
                    "Placenta functions as selective barrier between maternal and fetal blood",
                    "Small, lipid-soluble molecules cross readily; large molecules blocked",
                    "Diffusion down concentration gradients drives most exchange",
                    "Real placenta more complex: active transport, receptors, blood flow",
                    "Understanding placental transfer critical for maternal and fetal health"
                ],
                
                realWorldApplications: {
                    prenatalCare: {
                        maternalNutrition: "Adequate glucose, protein, vitamins for fetal growth",
                        avoidTeratogens: "Avoid alcohol, certain drugs, infections during pregnancy",
                        maternalDisease: "Control diabetes, hypertension (affect placental function)",
                        supplements: "Folic acid, iron cross placenta (prevent defects, anemia)"
                    },
                    drugSafety: {
                        FDAcategories: "Classify drugs by pregnancy risk based on placental transfer",
                        testing: "Research which drugs cross placenta and at what levels",
                        caution: "Avoid unnecessary medications during pregnancy"
                    },
                    fetalTherapy: {
                        treatment: "Give drugs to mother that cross placenta to treat fetus",
                        examples: "Corticosteroids (mature fetal lungs), antibiotics (fetal infection)"
                    },
                    placentalDisorders: {
                        insufficiency: "Poor exchange → fetal growth restriction, hypoxia",
                        abruptio: "Placental separation → loss of exchange, hemorrhage",
                        previa: "Abnormal placement (can affect exchange)"
                    }
                },
                
                extensions: [
                    "Test effect of membrane thickness (layer multiple membranes)",
                    "Investigate temperature effect on diffusion rate",
                    "Compare different MWCO membranes (6K, 12K, 50K)",
                    "Model active transport by manually transferring molecules",
                    "Add 'blood flow' by stirring or circulating solutions",
                    "Test transfer of lipid-soluble vs water-soluble dyes",
                    "Measure quantitative transfer rates with spectrophotometer",
                    "Research placental adaptations in high altitude (more villi for O₂ transfer)"
                ],
                
                limitations: [
                    "Model shows passive diffusion only (real placenta has active transport)",
                    "No blood flow in model (reduces gradients in real placenta)",
                    "Simplified compared to complex villous structure",
                    "Cannot model receptor-mediated transfer (IgG antibodies)",
                    "Time scale compressed (real exchange continuous over weeks)"
                ],
                
                troubleshooting: [
                    "Tubing leaks: Ensure tight, waterproof knots/clamps; test before adding to beaker",
                    "No glucose transfer: Check membrane is open (not sealed); ensure sufficient time",
                    "Protein appears in fetal: Membrane may be damaged or MWCO too high",
                    "Uneven results: Ensure complete mixing, adequate surface area contact"
                ]
            }
        },

        // ========================================
        // EXPERIMENT 5: HORMONE FEEDBACK LOOPS
        // ========================================
        
        houssay_hormonal_feedback: {
            name: "Houssay and Hormonal Feedback - The HPG Axis Model",
            relatedTopics: ['reproductive_hormones', 'menstrual_cycle'],
            category: 'endocrinology',
            
            historicalBackground: {
                scientist: "Bernardo Houssay",
                year: "1920s-1940s",
                location: "Argentina",
                contribution: "Demonstrated role of pituitary in regulating other endocrine glands through feedback mechanisms",
                research: {
                    experiments: "Removed pituitary from animals, observed effects on other glands (thyroid, adrenals, gonads)",
                    findings: "Pituitary hormones control peripheral glands; peripheral hormones feed back to pituitary",
                    example: "Hypophysectomy (pituitary removal) → gonadal atrophy; replacement with pituitary extract → recovery"
                },
                nobelPrize: "1947 Nobel Prize in Physiology or Medicine (role of pituitary in carbohydrate metabolism)",
                significance: "Established concept of endocrine feedback loops - foundational to understanding hormonal regulation",
                hpgAxis: {
                    concept: "Hypothalamic-Pituitary-Gonadal Axis",
                    application: "Houssay's principles apply to reproductive hormone regulation",
                    hierarchy: "Hypothalamus → Pituitary → Gonads → Feedback"
                },
                modernRelevance: "Understanding feedback essential for treating hormone disorders, contraception, fertility treatments"
            },
            
            labExperiment: {
                title: "Modeling the HPG Axis: Negative and Positive Feedback in Reproductive Hormones",
                hypothesis: "Reproductive hormones operate in feedback loops where gonadal hormones (estrogen, progesterone, testosterone) regulate hypothalamic and pituitary secretion, maintaining homeostasis through negative feedback and enabling ovulation through positive feedback",
                purpose: "Understand feedback mechanisms regulating reproductive hormones using hands-on model and data analysis",
                
                background: {
                    hpgAxis: {
                        components: [
                            "Hypothalamus: Secretes GnRH (Gonadotropin-Releasing Hormone)",
                            "Anterior Pituitary: Secretes FSH and LH (gonadotropins)",
                            "Gonads (Ovaries/Testes): Secrete sex steroids (estrogen, progesterone, testosterone)"
                        ],
                        feedback: "Sex steroids feed back to hypothalamus and pituitary to regulate GnRH, FSH, LH"
                    },
                    negativeFeedback: {
                        definition: "Hormone inhibits its own secretion",
                        mechanism: "High levels → inhibit upstream glands → decrease further secretion",
                        purpose: "Maintain homeostasis, prevent excessive hormone levels",
                        examples: [
                            "Testosterone inhibits GnRH and LH (males)",
                            "Estrogen and progesterone inhibit GnRH, FSH, LH (most of female cycle)",
                            "Inhibin inhibits FSH"
                        ],
                        analogy: "Thermostat: high temperature → turn off heater → temperature drops"
                    },
                    positiveFeedback: {
                        definition: "Hormone stimulates its own secretion (rare in endocrine system)",
                        mechanism: "High levels → stimulate upstream glands → increase further secretion",
                        example: "HIGH estrogen (late follicular phase) → stimulates LH surge → ovulation",
                        uniqueness: "Only known positive feedback in human endocrine system",
                        requirement: "Estrogen >200 pg/ml for 48+ hours",
                        trigger: "LH surge → ovulation ~10-12 hours later",
                        analogy: "Microphone feedback: sound → amplifier → louder sound → more feedback"
                    }
                },
                
                variables: {
                    independent: "Hormone levels (simulated changes in estrogen, progesterone)",
                    dependent: "Resulting changes in GnRH, FSH, LH secretion",
                    controlled: "Model parameters, feedback thresholds"
                },
                
                materials: [
                    "FOR PHYSICAL MODEL:",
                    "Cardboard boxes or containers (3) labeled: Hypothalamus, Pituitary, Ovary/Testis",
                    "Colored balls or beads representing hormones:",
                    "  - Green: GnRH",
                    "  - Blue: FSH",
                    "  - Red: LH",
                    "  - Yellow: Estrogen",
                    "  - Orange: Progesterone",
                    "  - Purple: Testosterone",
                    "Arrows or strings showing connections (feedforward and feedback)",
                    "Signs indicating '+' (stimulation) and '−' (inhibition)",
                    "",
                    "FOR DATA ANALYSIS:",
                    "Graph paper or computer with graphing software",
                    "Menstrual cycle hormone data (FSH, LH, estrogen, progesterone levels day-by-day)",
                    "Optional: Computer simulation of HPG axis",
                    "",
                    "FOR DEMONSTRATION:",
                    "Diagrams of HPG axis",
                    "Hormone level charts",
                    "Case studies (PCOS, menopause, hypogonadism)"
                ],
                
                safetyPrecautions: [
                    "No safety concerns for this modeling activity",
                    "Handle materials carefully to avoid tripping hazards"
                ],
                
                procedure: [
                    "PART A: BUILDING THE HPG AXIS MODEL",
                    "",
                    "SETUP:",
                    "1. Arrange three boxes in hierarchy:",
                    "   TOP: Hypothalamus",
                    "   MIDDLE: Anterior Pituitary",
                    "   BOTTOM: Gonads (Ovary or Testis)",
                    "2. Draw arrows showing hormone flow:",
                    "   Hypothalamus → Pituitary: GnRH (green arrow, '+' sign)",
                    "   Pituitary → Gonads: FSH (blue arrow, '+'), LH (red arrow, '+')",
                    "   Gonads → body: Estrogen/Testosterone (yellow/purple arrows)",
                    "3. Draw FEEDBACK arrows:",
                    "   Gonads → Pituitary: Dotted arrow labeled '−' (inhibition)",
                    "   Gonads → Hypothalamus: Dotted arrow labeled '−' (inhibition)",
                    "   *Special: High Estrogen → Pituitary: Dotted arrow '+' (positive feedback)",
                    "",
                    "SIMULATING NORMAL MALE HPG AXIS:",
                    "4. Start with baseline:",
                    "   - Hypothalamus: 5 green beads (GnRH)",
                    "   - Pituitary: 10 blue (FSH), 10 red (LH)",
                    "   - Testis: 20 purple (testosterone)",
                    "5. SCENARIO: Normal steady state",
                    "   - Hypothalamus releases GnRH (move 2 green to Pituitary)",
                    "   - Pituitary releases FSH + LH (move 3 blue, 3 red to Testis)",
                    "   - Testis releases testosterone (move 5 purple to 'blood')",
                    "   - NEGATIVE FEEDBACK: Testosterone inhibits Hypothalamus and Pituitary",
                    "     → REMOVE 1 green from Hypothalamus, 2 blue + 2 red from Pituitary",
                    "   - System stabilizes (equilibrium)",
                    "6. SCENARIO: Castration (remove testis)",
                    "   - Remove Testis box (no testosterone)",
                    "   - NO negative feedback",
                    "   - Hypothalamus and Pituitary INCREASE output",
                    "   - Add beads: +3 green, +5 blue, +5 red",
                    "   - Result: High FSH and LH (like Houssay's hypophysectomy in reverse)",
                    "7. SCENARIO: Anabolic steroid use (exogenous testosterone)",
                    "   - Add 20 extra purple beads (external testosterone)",
                    "   - STRONG negative feedback",
                    "   - Remove most green, blue, red beads",
                    "   - Testis shrinks (remove beads from Testis)",
                    "   - Result: Testicular atrophy, infertility",
                    "",
                    "SIMULATING FEMALE HPG AXIS - MENSTRUAL CYCLE:",
                    "8. Start follicular phase:",
                    "   - Low estrogen (5 yellow beads)",
                    "   - Moderate negative feedback",
                    "   - FSH rises (add blue beads)",
                    "   - Follicles grow, produce MORE estrogen (add yellow)",
                    "9. Late follicular phase:",
                    "   - Estrogen very high (20+ yellow beads)",
                    "   - SWITCH to POSITIVE FEEDBACK (flip sign from '−' to '+')",
                    "   - Estrogen STIMULATES LH surge",
                    "   - Massive LH release (move all red beads to Ovary)",
                    "   - OVULATION occurs",
                    "10. Luteal phase:",
                    "    - Corpus luteum forms, secretes progesterone (add orange beads)",
                    "    - Progesterone + estrogen give strong negative feedback",
                    "    - FSH and LH drop (remove blue and red beads)",
                    "    - If no pregnancy: corpus luteum degenerates (remove orange and yellow)",
                    "    - Feedback released, FSH rises again (add blue) → NEW CYCLE",
                    "",
                    "PART B: GRAPHING HORMONE LEVELS DURING MENSTRUAL CYCLE",
                    "",
                    "11. Obtain menstrual cycle hormone data (sample provided or research)",
                    "12. Create graph with:",
                    "    X-axis: Day of cycle (1-28)",
                    "    Y-axis: Hormone concentration (relative units or actual pg/ml, mIU/ml)",
                    "13. Plot four curves on same graph:",
                    "    - FSH (blue line)",
                    "    - LH (red line)",
                    "    - Estrogen (yellow line)",
                    "    - Progesterone (orange line)",
                    "14. Identify key events:",
                    "    - Day 1-5: Menstruation (all hormones low)",
                    "    - Day 5-13: Follicular phase (FSH rises, estrogen rises)",
                    "    - Day 14: Ovulation (LH surge, estrogen peak)",
                    "    - Day 15-28: Luteal phase (progesterone high, moderate estrogen)",
                    "    - Day 28-1: Hormone drop → menstruation",
                    "",
                    "PART C: ANALYZING FEEDBACK MECHANISMS",
                    "",
                    "15. Examine follicular phase (days 1-13):",
                    "    Question: Why does FSH rise early, then fall?",
                    "    Answer: Low estrogen → low negative feedback → FSH rises",
                    "            Growing follicles produce estrogen → negative feedback → FSH falls",
                    "            Also: Inhibin from follicles selectively inhibits FSH",
                    "16. Examine LH surge (day 13-14):",
                    "    Question: What triggers LH surge?",
                    "    Answer: High estrogen (>200 pg/ml for 48h) → POSITIVE FEEDBACK",
                    "            Estrogen stimulates pituitary → massive LH release",
                    "    Question: Why is this unique?",
                    "    Answer: Only positive feedback in endocrine system; allows precisely timed ovulation",
                    "17. Examine luteal phase (days 15-28):",
                    "    Question: Why are FSH and LH low?",
                    "    Answer: Progesterone + estrogen from corpus luteum → strong negative feedback",
                    "            Prevents additional follicles from developing",
                    "18. Examine menstruation transition (day 28 → day 1):",
                    "    Question: What triggers new cycle?",
                    "    Answer: If no pregnancy, corpus luteum degenerates",
                    "            Progesterone/estrogen drop → negative feedback released",
                    "            FSH rises → stimulates new follicle growth → new cycle begins",
                    "",
                    "PART D: CLINICAL CASE STUDIES",
                    "",
                    "19. CASE 1: Polycystic Ovary Syndrome (PCOS)",
                    "    Abnormality: High LH, normal/low FSH, high androgens",
                    "    Mechanism: Disrupted feedback (high LH stimulates excess androgen)",
                    "    Effect: Anovulation, infertility, irregular periods",
                    "    Model: Show persistently high LH with no surge",
                    "",
                    "20. CASE 2: Menopause",
                    "    Change: Ovaries stop functioning (no follicles left)",
                    "    Hormones: Very low estrogen, very high FSH and LH (loss of negative feedback)",
                    "    Model: Remove Ovary box, accumulate FSH/LH beads",
                    "",
                    "21. CASE 3: Hormonal Contraception",
                    "    Mechanism: Exogenous estrogen + progestin",
                    "    Effect: Negative feedback suppresses GnRH, FSH, LH → no follicle growth → no ovulation",
                    "    Also: Thickens cervical mucus, thins endometrium",
                    "    Model: Add extra yellow + orange beads → remove green, blue, red beads",
                    "",
                    "22. CASE 4: Kallmann Syndrome",
                    "    Defect: Hypothalamus doesn't secrete GnRH",
                    "    Result: No puberty, no gonad development, infertility",
                    "    Hormones: Low GnRH, low FSH/LH, low sex steroids",
                    "    Treatment: GnRH or gonadotropin replacement",
                    "    Model: Remove Hypothalamus → no beads flow downstream"
                ],
                
                expectedObservations: {
                    maleHPG: {
                        normal: "Steady state - testosterone provides consistent negative feedback",
                        castration: "FSH and LH skyrocket (no negative feedback)",
                        exogenousTestosterone: "FSH and LH suppressed, testicular atrophy"
                    },
                    femaleHPG: {
                        follicular: "Rising estrogen, rising then falling FSH",
                        ovulatory: "Estrogen peak triggers LH surge (positive feedback)",
                        luteal: "High progesterone suppresses FSH and LH (negative feedback)",
                        menstrual: "Hormone drop releases feedback, FSH rises"
                    },
                    feedback: {
                        negative: "Most of cycle - maintains homeostasis",
                        positive: "Brief window for LH surge - triggers ovulation",
                        switch: "Estrogen concentration determines which feedback operates"
                    }
                },
                
                sampleHormoneData: {
                    day1: {FSH: 5, LH: 3, Estrogen: 30, Progesterone: 0.5},
                    day7: {FSH: 7, LH: 4, Estrogen: 60, Progesterone: 0.5},
                    day12: {FSH: 6, LH: 8, Estrogen: 200, Progesterone: 1},
                    day14: {FSH: 10, LH: 40, Estrogen: 250, Progesterone: 2},
                    day15: {FSH: 4, LH: 10, Estrogen: 150, Progesterone: 5},
                    day21: {FSH: 3, LH: 5, Estrogen: 120, Progesterone: 15},
                    day28: {FSH: 4, LH: 3, Estrogen: 40, Progesterone: 1}
                },
                
                observations: [
                    "Negative feedback maintains hormone levels within normal range",
                    "Positive feedback allows dramatic, temporary increase (LH surge)",
                    "Feedback loops create cyclical pattern in females",
                    "Disruption of any level (hypothalamus, pituitary, gonads) affects entire axis",
                    "Males have simpler, steady-state feedback; females have complex, cyclical feedback"
                ],
                
                analysis: {
                    houssayPrinciples: [
                        "Pituitary controls gonads (FSH/LH stimulate sex steroid production)",
                        "Gonads feed back to pituitary (sex steroids regulate FSH/LH)",
                        "Disrupting one level affects entire axis (removal or supplementation)",
                        "Feedback maintains homeostasis in males, creates cycles in females"
                    ],
                    negativeFeedbackPurpose: [
                        "Prevents excessive hormone levels",
                        "Maintains steady state (males) or controls cycle phases (females)",
                        "Allows fine-tuning of hormone levels",
                        "Responds to changing needs (e.g., stress, illness)"
                    ],
                    positiveFeedbackPurpose: [
                        "Creates sharp, high-amplitude LH surge needed for ovulation",
                        "Precisely times ovulation (predictable event)",
                        "Brief, self-limiting (estrogen drops after ovulation)",
                        "Essential for fertility (no surge = no ovulation = infertility)"
                    ],
                    therapeuticApplications: [
                        "Contraception: Suppress HPG axis with exogenous hormones",
                        "Infertility: Stimulate axis with GnRH analogs, gonadotropins",
                        "Menopause: Replace estrogen/progesterone",
                        "Hypogonadism: Replace testosterone or stimulate with gonadotropins",
                        "Precocious puberty: Suppress with GnRH agonists (paradoxical suppression)"
                    ]
                },
                
                results: "The HPG axis operates through negative and positive feedback loops. Negative feedback (sex steroids inhibit GnRH, FSH, LH) maintains homeostasis. In females, a unique positive feedback mechanism (high estrogen stimulates LH surge) enables ovulation. These feedback loops, first demonstrated by Houssay, are essential for reproductive function and targets for contraception and fertility treatment.",
                
                conclusions: [
                    "Reproductive hormones regulated by hierarchical feedback loops (HPG axis)",
                    "Negative feedback is predominant mechanism (maintains homeostasis)",
                    "Positive feedback is unique, brief, and essential for ovulation",
                    "Disruption at any level affects entire system",
                    "Understanding feedback enables therapeutic manipulation (contraception, fertility treatment)",
                    "Houssay's pioneering work established foundation for endocrinology"
                ],
                
                realWorldApplications: {
                    contraception: {
                        hormonal: "Exogenous estrogen/progestin → negative feedback → suppress ovulation",
                        types: "Pills, patch, ring, injection, implant, hormonal IUD",
                        effectiveness: ">99% with perfect use, ~91% typical use (pills)"
                    },
                    fertilityTreatment: {
                        ovulationInduction: "Clomiphene blocks estrogen receptors → reduces negative feedback → more FSH → follicle growth",
                        IVF: "GnRH antagonists control cycle, FSH/LH injections stimulate multiple follicles",
                        maleInfertility: "hCG + FSH to stimulate spermatogenesis in hypogonadotropic hypogonadism"
                    },
                    HRT: {
                        menopause: "Replace estrogen/progesterone to alleviate symptoms",
                        hypogonadism: "Testosterone replacement in males",
                        caution: "Exogenous hormones suppress natural production (negative feedback)"
                    },
                    disorders: {
                        PCOS: "Abnormal feedback → chronic anovulation",
                        hypothalamic amenorrhea: "Stress, low weight → low GnRH → no periods",
                        hyperprolactinemia: "High prolactin inhibits GnRH → infertility",
                        prematureOvarianFailure: "Early menopause → high FSH/LH, low estrogen"
                    }
                },
                
                extensions: [
                    "Model other endocrine axes (HPA - stress, HPT - thyroid)",
                    "Investigate effect of different contraceptive formulations on feedback",
                    "Research environmental endocrine disruptors (affect feedback)",
                    "Study puberty: activation of HPG axis",
                    "Explore seasonal reproduction in animals (environmental cues modulate HPG)",
                    "Analyze hormone data from individuals with PCOS, menopause",
                    "Computer simulation of HPG axis with adjustable parameters"
                ],
                
                advancedConcepts: {
                    pulsatileGnRH: {
                        importance: "GnRH must be pulsatile (every 1-2 hours) to maintain FSH/LH secretion",
                        continuous: "Continuous GnRH → receptor desensitization → FSH/LH suppression",
                        therapeutic: "GnRH agonists (continuous delivery) used to suppress puberty, treat hormone-sensitive cancers"
                    },
                    kisspeptin: {
                        discovery: "Hypothalamic neurons that secrete kisspeptin control GnRH neurons",
                        role: "Integrate metabolic, stress, circadian signals to regulate GnRH",
                        puberty: "Kisspeptin neurons activate at puberty, initiating HPG axis"
                    },
                    inhibin: {
                        function: "Selectively inhibits FSH (not LH)",
                        source: "Granulosa cells (females), Sertoli cells (males)",
                        purpose: "Fine-tune FSH levels independently of steroids"
                    }
                },
                
                limitations: [
                    "Model is simplified (real HPG axis has many additional inputs)",
                    "Doesn't include all hormones (inhibin, activin, kisspeptin)",
                    "Doesn't account for neural inputs, stress, metabolism",
                    "Physical model is qualitative (not quantitative)",
                    "Individual variation in hormone levels not captured"
                ],
                
                troubleshooting: [
                    "Model unclear: Use different colored beads for each hormone, clear labels",
                    "Feedback confusing: Draw separate '+' and '−' arrows, explain each",
                    "Graph difficult: Use log scale for Y-axis if needed, plot one hormone at a time first",
                    "Positive feedback counterintuitive: Emphasize it's unique, brief, and essential"
                ]
            }
        }
    };

    // Link experiments to topics
    this.linkExperimentsToTopics();
}

linkExperimentsToTopics() {
    Object.entries(this.reproductionExperiments).forEach(([expId, experiment]) => {
        experiment.relatedTopics.forEach(topicId => {
            if (this.reproductionTopics[topicId]) {
                if (!this.reproductionTopics[topicId].relatedExperiments) {
                    this.reproductionTopics[topicId].relatedExperiments = [];
                }
                this.reproductionTopics[topicId].relatedExperiments.push({
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
        male_reproductive: [
            'Thinking sperm are produced in penis (produced in testes)',
            'Believing testosterone only affects reproduction (also muscle, bone, mood)',
            'Confusing seminal fluid with sperm (semen = sperm + accessory gland secretions)',
            'Thinking vasectomy affects testosterone (only blocks sperm passage, not hormone production)'
        ],
        
        female_reproductive: [
            'Thinking eggs are produced monthly (present at birth, just released monthly)',
            'Believing uterus and vagina are same (uterus is internal, vagina is canal)',
            'Confusing ovulation with menstruation (ovulation ~day 14, menstruation day 1-5)',
            'Thinking hymen proves virginity (varies greatly, can tear from non-sexual causes)'
        ],
        
        menstrual_cycle: [
            'Believing all women have 28-day cycles (21-35 days is normal range)',
            'Thinking ovulation always occurs day 14 (variable, depends on follicular phase length)',
            'Confusing safe periods (rhythm method unreliable)',
            'Believing menstruation = ovulation (menstruation follows ovulation by ~14 days)'
        ],
        
        fertilization: [
            'Thinking fertilization occurs in uterus (occurs in fallopian tube)',
            'Believing sperm immediately fertilize egg (takes hours to reach, must capacitate)',
            'Confusing zygote with embryo (zygote = 1 cell, embryo = multi-cell)',
            'Thinking implantation occurs immediately (takes 6-7 days)'
        ],
        
        pregnancy: [
            'Believing maternal and fetal blood mix (separate, exchange via placenta)',
            'Thinking baby feeds through umbilical cord like straw (diffusion/active transport)',
            'Confusing placenta with umbilical cord (placenta = organ, cord = connection)',
            'Believing pregnancy lasts exactly 9 months (40 weeks = ~9.3 months)'
        ],
        
        contraception: [
            'Thinking birth control pills are abortion pills (prevent ovulation, not implantation)',
            'Believing emergency contraception is always abortion (prevents/delays ovulation)',
            'Confusing effectiveness with perfect use vs typical use',
            'Thinking withdrawal method is reliable (high failure rate, pre-ejaculate contains sperm)'
        ]
    };
}

initializeMetacognitivePrompts() {
    this.metacognitivePrompts = {
        beforeLearning: [
            "What do you know about human reproduction?",
            "What questions do you have about {topic}?",
            "Why is understanding {topic} important?"
        ],
        duringLearning: [
            "How does {concept} relate to what you already know?",
            "What is still confusing?",
            "Can you explain {concept} in your own words?"
        ],
        afterLearning: [
            "What were the key points about {topic}?",
            "What surprised you?",
            "How would you explain {topic} to a friend?"
        ]
    };
}

initializeContextualScenarios() {
    this.contextualScenarios = {
        fertilityAwareness: "Understanding menstrual cycle helps with family planning",
        IVF: "Assisted reproduction uses knowledge of gametes and fertilization",
        prenatalHealth: "Placental function affects fetal development",
        contraception: "Different methods target different parts of reproductive process"
    };
}

initializeAssessmentRubrics() {
    this.assessmentRubrics = {
        knowledgeLevel: {
            remember: {verbs: ["Name", "List", "Identify"]},
            understand: {verbs: ["Explain", "Describe", "Compare"]},
            apply: {verbs: ["Calculate", "Predict", "Demonstrate"]},
            analyze: {verbs: ["Differentiate", "Compare", "Contrast"]},
            evaluate: {verbs: ["Assess", "Critique", "Evaluate"]},
            create: {verbs: ["Design", "Develop", "Formulate"]}
        }
    };
}


// Add these handler methods to the ReproductionAnatomyWorkbook class

handleMaleReproductiveSystem(problem) {
    const content = {
        topic: "Male Reproductive System",
        category: 'reproductive_anatomy',
        summary: "The male reproductive system produces sperm and male sex hormones, and delivers sperm to the female reproductive tract. It consists of testes (gonads), duct system, accessory glands, and external genitalia.",
        
        primaryOrgans: {
            testes: {
                function: ["Spermatogenesis (sperm production)", "Testosterone synthesis"],
                location: "Scrotum (outside body cavity)",
                structure: {
                    dimensions: "~4-5 cm long, 2.5 cm wide",
                    weight: "~10-14 grams each",
                    covering: {
                        tunicaVaginalis: "Outer serous membrane (from peritoneum)",
                        tunicaAlbuginea: "Dense fibrous capsule",
                        septae: "Divide testis into ~250-300 lobules"
                    },
                    lobules: {
                        contents: "1-4 seminiferous tubules per lobule",
                        seminferousTubules: {
                            number: "~600-1200 per testis",
                            length: "30-70 cm each (total ~250 meters!)",
                            diameter: "150-250 μm",
                            epithelium: "Stratified, contains developing sperm",
                            cells: {
                                sertoliCells: {
                                    function: [
                                        "Nourish developing sperm",
                                        "Form blood-testis barrier",
                                        "Secrete inhibin (inhibits FSH)",
                                        "Secrete androgen-binding protein (ABP)",
                                        "Phagocytose residual cytoplasm",
                                        "Secrete fluid for sperm transport"
                                    ],
                                    location: "Extend from basement membrane to lumen",
                                    barrier: "Tight junctions between Sertoli cells protect developing sperm from immune system"
                                },
                                spermatogenicCells: {
                                    types: "Spermatogonia, primary spermatocytes, secondary spermatocytes, spermatids, spermatozoa",
                                    arrangement: "Least mature near basement membrane, most mature near lumen"
                                }
                            }
                        },
                        interstitialSpace: {
                            contents: "Leydig cells, blood vessels, lymphatics, nerves",
                            leydigCells: {
                                function: "Produce testosterone",
                                stimulation: "LH from anterior pituitary",
                                output: "~6-8 mg testosterone per day"
                            }
                        }
                    }
                },
                temperatureRegulation: {
                    optimal: "33-35°C (2-3°C below core body temperature)",
                    importance: "Critical for spermatogenesis",
                    mechanisms: {
                        scrotum: "External location provides cooling",
                        pampiniformPlexus: "Venous network cools arterial blood (countercurrent heat exchange)",
                        cremasterMuscle: "Contracts when cold (pulls testes up), relaxes when hot (lowers testes)",
                        dartosMuscle: "Contracts when cold (wrinkles scrotum, reduces surface area)",
                        sweating: "Scrotal skin has sweat glands"
                    },
                    clinicalNote: "Tight underwear, hot tubs, laptops on lap can increase testicular temperature → reduce sperm count"
                },
                descent: {
                    timing: "7th-9th month of fetal development",
                    pathway: "From abdomen through inguinal canal to scrotum",
                    mechanism: "Gubernaculum guides descent",
                    undescended: "Cryptorchidism - testes remain in abdomen (infertility risk, cancer risk)"
                }
            }
        },
        
        ductSystem: {
            epididymis: {
                location: "Posterior surface of each testis",
                structure: {
                    parts: ["Head (caput)", "Body (corpus)", "Tail (cauda)"],
                    length: "~6 meters (highly coiled)",
                    duct: "Single, highly convoluted duct"
                },
                function: {
                    maturation: {
                        description: "Sperm gain motility and fertilization capacity",
                        duration: "2-4 weeks transit time",
                        changes: [
                            "Membrane remodeling",
                            "Acquisition of motility proteins",
                            "Nuclear condensation",
                            "Changes in surface glycoproteins"
                        ]
                    },
                    storage: "Tail stores mature sperm (can survive months)",
                    absorption: "Reabsorbs fluid, concentrates sperm",
                    phagocytosis: "Removes defective sperm"
                },
                environment: {
                    pH: "Slightly acidic (keeps sperm inactive)",
                    secretions: "Glycoproteins, enzymes, glycerol, carnitine"
                }
            },
            
            vasDeferens: {
                alsoKnown: "Ductus deferens",
                structure: {
                    length: "~45 cm",
                    diameter: "2.5 mm",
                    wall: "Very thick muscular wall (smooth muscle)",
                    layers: "Mucosa, thick muscularis (3 layers), adventitia"
                },
                pathway: {
                    start: "Tail of epididymis",
                    route: [
                        "Ascends within spermatic cord",
                        "Passes through inguinal canal",
                        "Enters pelvic cavity",
                        "Loops over ureter",
                        "Descends posterior to bladder"
                    ],
                    termination: "Joins with seminal vesicle duct → ejaculatory duct"
                },
                function: {
                    transport: "Rapid propulsion of sperm during ejaculation",
                    mechanism: "Peristaltic contractions of thick muscular wall",
                    speed: "Sperm travel from epididymis to urethra in seconds during ejaculation"
                },
                vasectomy: {
                    procedure: "Cut and seal vas deferens (both sides)",
                    effect: "Blocks sperm from entering semen (semen still produced, just no sperm)",
                    effectiveness: ">99% after sperm cleared",
                    reversibility: "Possible but not guaranteed (50-70% pregnancy rates after reversal)",
                    noEffect: "Does NOT affect testosterone, libido, erection, ejaculation volume, orgasm"
                }
            },
            
            ejaculatoryDucts: {
                formation: "Vas deferens + seminal vesicle duct",
                length: "~2 cm",
                location: "Within prostate gland",
                termination: "Prostatic urethra",
                function: "Propel semen into urethra during ejaculation"
            },
            
            urethra: {
                dualFunction: "Passage for urine AND semen (not simultaneously)",
                length: "~20 cm (male)",
                regions: {
                    prostatic: {
                        length: "~3 cm",
                        location: "Through prostate gland",
                        openings: "Ejaculatory ducts, prostatic ducts",
                        verumontanum: "Elevation on posterior wall where ejaculatory ducts open"
                    },
                    membranous: {
                        length: "~1-2 cm",
                        location: "Through urogenital diaphragm (pelvic floor)",
                        sphincter: "External urethral sphincter (voluntary control)",
                        note: "Narrowest, least distensible part"
                    },
                    spongy: {
                        alsoKnown: "Penile urethra",
                        length: "~15 cm",
                        location: "Through corpus spongiosum of penis",
                        openings: "Bulbourethral gland ducts",
                        termination: "External urethral orifice (meatus)",
                        expandedRegion: "Navicular fossa (just before opening)"
                    }
                },
                sphincters: {
                    internal: "Involuntary (smooth muscle at bladder neck)",
                    external: "Voluntary (skeletal muscle in urogenital diaphragm)"
                }
            }
        },
        
        accessoryGlands: {
            seminalVesicles: {
                number: "Paired (2)",
                location: "Posterior to bladder, lateral to vas deferens",
                structure: {
                    shape: "Elongated, convoluted sac (~5 cm)",
                    duct: "Joins vas deferens to form ejaculatory duct"
                },
                secretion: {
                    volume: "~60-70% of semen volume",
                    appearance: "Thick, yellowish, viscous",
                    pH: "Alkaline (~7.2-7.8)",
                    components: {
                        fructose: {
                            amount: "~2-5 mg/ml semen",
                            function: "Energy source for sperm (metabolized for ATP)",
                            clinical: "Absence suggests ejaculatory duct obstruction or congenital absence of seminal vesicles"
                        },
                        prostaglandins: {
                            function: [
                                "Stimulate uterine contractions (help propel sperm)",
                                "May suppress female immune response to sperm"
                            ]
                        },
                        clottingFactors: {
                            fibrinogen: "Causes initial semen coagulation",
                            purpose: "May keep semen in vagina initially"
                        },
                        other: "Ascorbic acid (vitamin C), amino acids, citric acid, enzymes, flavins"
                    }
                }
            },
            
            prostate: {
                structure: {
                    size: "Walnut-sized (~3 x 4 cm)",
                    weight: "~20 grams",
                    location: "Inferior to bladder, surrounds prostatic urethra",
                    zones: {
                        peripheral: "~70% of glandular tissue; site of most prostate cancers",
                        central: "~25%; surrounds ejaculatory ducts",
                        transitional: "~5%; surrounds urethra; site of BPH (benign prostatic hyperplasia)",
                        anterior: "Fibromuscular (non-glandular)"
                    }
                },
                secretion: {
                    volume: "~20-30% of semen volume",
                    appearance: "Thin, milky",
                    pH: "Slightly acidic (~6.5)",
                    components: {
                        citricAcid: "Nutrient for sperm",
                        acid_phosphatase: "Enzyme (marker for prostate secretion)",
                        PSA: {
                            fullName: "Prostate-Specific Antigen",
                            function: "Liquefies semen (breaks down clotting proteins)",
                            timing: "Liquefaction occurs 15-30 min after ejaculation",
                            clinical: "Elevated blood PSA suggests prostate disease (BPH, prostatitis, cancer)"
                        },
                        zinc: {
                            concentration: "Very high in prostatic fluid",
                            function: "Antibacterial, stabilizes sperm chromatin"
                        },
                        spermine: "Polyamine (gives semen characteristic odor)",
                        enzymes: "Proteases, amylase, lysozyme"
                    }
                },
                clinicalConditions: {
                    BPH: {
                        condition: "Benign Prostatic Hyperplasia",
                        prevalence: "~50% of men >60 years, 90% >85 years",
                        location: "Transitional zone enlargement",
                        symptoms: "Urinary frequency, urgency, weak stream, nocturia (compression of urethra)",
                        treatment: "Medications (alpha-blockers, 5α-reductase inhibitors) or surgery"
                    },
                    prostatitis: {
                        types: "Acute bacterial, chronic bacterial, chronic pelvic pain syndrome",
                        symptoms: "Pelvic pain, urinary symptoms, painful ejaculation"
                    },
                    prostateCancer: {
                        prevalence: "Most common cancer in men (excluding skin)",
                        location: "Usually peripheral zone",
                        screening: "PSA blood test, digital rectal exam (DRE)",
                        note: "Often slow-growing; treatment depends on grade and stage"
                    }
                }
            },
            
            bulbourethralGlands: {
                alsoKnown: "Cowper's glands",
                number: "Paired (2)",
                size: "Pea-sized (~1 cm)",
                location: "Within urogenital diaphragm, inferior to prostate",
                ducts: "Empty into spongy urethra",
                secretion: {
                    volume: "<1% of semen volume (~0.1-0.5 ml)",
                    appearance: "Clear, slippery mucus",
                    timing: "Secreted during sexual arousal (before ejaculation)",
                    commonName: "Pre-ejaculate",
                    pH: "Alkaline",
                    functions: {
                        neutralization: "Neutralizes acidic urine residue in urethra",
                        lubrication: "Lubricates urethra and glans penis",
                        protection: "Protects sperm from acidic environment"
                    },
                    spermContent: "May contain sperm (from previous ejaculation) - reason withdrawal method has high failure rate"
                }
            }
        },
        
        externalGenitalia: {
            scrotum: {
                function: "Temperature regulation for testes",
                structure: {
                    skin: "Thin, pigmented, contains hair follicles and sweat glands",
                    dartosMuscle: "Smooth muscle layer (wrinkles skin when contracts)",
                    raphe: "Median ridge (external indication of division)",
                    septum: "Internal division into two compartments (one testis each)"
                },
                temperature: {
                    cold: "Dartos and cremaster contract → scrotum tightens, pulls close to body",
                    hot: "Muscles relax → scrotum hangs away from body, increases surface area for heat loss"
                }
            },
            
            penis: {
                function: {
                    copulation: "Delivery of sperm to female reproductive tract",
                    urination: "Passage of urine",
                    note: "Cannot urinate during erection (internal sphincter closes)"
                },
                structure: {
                    root: {
                        location: "Attached portion (fixed to pelvic bones)",
                        components: "Crura (legs) of corpora cavernosa, bulb of corpus spongiosum"
                    },
                    shaft: {
                        alsoKnown: "Body",
                        length: "Variable (flaccid ~9 cm, erect ~13 cm average)",
                        erectileTissue: {
                            corporaCavernosa: {
                                number: "Two (paired)",
                                location: "Dorsal (top)",
                                structure: "Cylinder of spongy tissue with vascular spaces (sinusoids)",
                                septum: "Incomplete partition between the two",
                                function: "Primary erectile tissue (fills with blood)"
                            },
                            corpusSpongiosum: {
                                number: "One",
                                location: "Ventral (bottom), surrounds urethra",
                                structure: "Spongy tissue with sinusoids",
                                expansion: "Forms bulb at root, glans at tip",
                                function: "Protects urethra during erection, prevents urethral compression"
                            }
                        },
                        fascia: {
                            bucksFascia: "Deep fascia surrounding erectile tissue",
                            tunicaAlbuginea: "Fibrous covering of each erectile body"
                        },
                        skin: "Thin, loose, sliding, pigmented, hairless on shaft"
                    },
                    glans: {
                        description: "Expanded distal end (head)",
                        formation: "Distal expansion of corpus spongiosum",
                        corona: "Proximal ridge of glans",
                        urethralOpening: "Meatus at tip",
                        sensitivity: "Rich in sensory nerve endings",
                        prepuce: "Foreskin - fold of skin covering glans (retractable)",
                        circumcision: "Surgical removal of foreskin (cultural/religious practice, hygiene, medical reasons)"
                    }
                },
                erection: {
                    mechanism: {
                        arousal: "Sexual stimulation (psychological or physical)",
                        nervous: "Parasympathetic nervous system activation",
                        vascular: {
                            arteriolar: "Arterioles dilate → increased blood flow to erectile tissue",
                            sinusoids: "Blood fills sinusoids in corpora cavernosa",
                            compression: "Expanded sinusoids compress veins against tunica albuginea",
                            venousOcclusion: "Venous outflow blocked → blood trapped → erection maintained",
                            rigidity: "Pressure increases, penis becomes rigid"
                        },
                        neurotransmitters: "NO (nitric oxide) is key vasodilator"
                    },
                    phases: {
                        latent: "Initial vasodilation",
                        tumescent: "Rapid filling, lengthening, thickening",
                        full: "Maximum rigidity",
                        rigid: "Maintained during sexual activity",
                        detumescent: "Return to flaccid state after ejaculation or loss of arousal"
                    },
                    erectile_dysfunction: {
                        definition: "Inability to achieve or maintain erection sufficient for intercourse",
                        causes: {
                            vascular: "Atherosclerosis, diabetes (most common)",
                            neurogenic: "Spinal cord injury, neuropathy",
                            hormonal: "Low testosterone",
                            psychological: "Anxiety, depression, stress",
                            medications: "Antidepressants, antihypertensives"
                        },
                        treatment: {
                            PDE5inhibitors: "Viagra (sildenafil), Cialis (tadalafil) - enhance NO/cGMP pathway",
                            mechanism: "Block phosphodiesterase-5 → maintain cGMP → sustained vasodilation",
                            other: "Vacuum devices, injections, implants, counseling"
                        }
                    }
                },
                ejaculation: {
                    definition: "Expulsion of semen from penis",
                    phases: {
                        emission: {
                            description: "Semen moves into urethra",
                            control: "Sympathetic nervous system",
                            sequence: [
                                "Smooth muscle of epididymis, vas deferens, accessory glands contract",
                                "Sperm and secretions propelled into prostatic urethra",
                                "Internal urethral sphincter closes (prevents retrograde into bladder)"
                            ],
                            sensation: "Feeling of ejaculatory inevitability"
                        },
                        expulsion: {
                            description: "Semen forcefully expelled from urethra",
                            control: "Somatic nervous system (pudendal nerve)",
                            mechanism: [
                                "Rhythmic contractions of bulbospongiosus muscle",
                                "Contractions of pelvic floor muscles",
                                "Semen ejected in 3-7 spurts"
                            ],
                            accompaniment: "Orgasm (intense pleasure, autonomic responses)",
                            volume: "2-5 ml (average ~3.5 ml)",
                            spermCount: "~200-500 million sperm total"
                        }
                    },
                    refractoryPeriod: {
                        definition: "Time after ejaculation when another erection/ejaculation impossible",
                        duration: "Minutes to hours (increases with age)",
                        physiology: "Prolactin levels rise, inhibit arousal"
                    }
                }
            }
        },
        
        spermatogenesis: {
            definition: "Production of sperm in seminiferous tubules",
            location: "Seminiferous tubules of testes",
            duration: "~74 days (64 days in tubules, 10 days in epididymis)",
            onset: "Begins at puberty (~age 12-14), continues throughout life",
            rate: "~1500 sperm per second, ~130 million per day",
            
            stages: {
                proliferation: {
                    cells: "Spermatogonial stem cells (Type A spermatogonia)",
                    process: "Mitosis",
                    location: "Basement membrane of seminiferous tubule",
                    products: {
                        typeA: "Remain as stem cells (self-renewal)",
                        typeB: "Differentiate into primary spermatocytes"
                    }
                },
                growth: {
                    cells: "Primary spermatocytes",
                    process: "Cell growth, DNA replication (S phase)",
                    duration: "~3 weeks",
                    chromosome: "4n (diploid with replicated chromosomes)"
                },
                meiosisI: {
                    cells: "Primary spermatocytes → Secondary spermatocytes",
                    process: "First meiotic division (reduction division)",
                    events: {
                        prophaseI: "Synapsis, crossing over (genetic recombination)",
                        metaphaseI: "Bivalents align",
                        anaphaseI: "Homologous chromosomes separate",
                        telophaseI: "Two haploid cells form"
                    },
                    product: "Two secondary spermatocytes (n, but chromosomes still duplicated)",
                    duration: "~24 days"
                },
                meiosisII: {
                    cells: "Secondary spermatocytes → Spermatids",
                    process: "Second meiotic division (like mitosis)",
                    events: "Sister chromatids separate",
                    product: "Four haploid spermatids (n)",
                    duration: "~1 day",
                    yield: "Four spermatids from each primary spermatocyte"
                },
                spermiogenesis: {
                    definition: "Morphological transformation of spermatids into spermatozoa",
                    duration: "~24 days",
                    changes: {
                        acrosomeFormation: {
                            origin: "Golgi apparatus",
                            position: "Cap over anterior 2/3 of nucleus",
                            contents: "Hydrolytic enzymes (hyaluronidase, acrosin, neuraminidase)",
                            function: "Penetrate corona radiata and zona pellucida of ovum"
                        },
                        nuclearCondensation: {
                            process: "Histones replaced by protamines",
                            result: "Compact, inactive nucleus (DNA tightly packed)",
                            shape: "Nucleus flattens, elongates"
                        },
                        flagellumDevelopment: {
                            structure: "9+2 microtubule arrangement (axoneme)",
                            origin: "Centriole migrates to posterior",
                            components: "Axoneme, outer dense fibers, fibrous sheath"
                        },
                        mitochondriaArrangement: {
                            location: "Midpiece",
                            arrangement: "Spiral around axoneme",
                            function: "Produce ATP for flagellar movement"
                        },
                        cytoplasmRemoval: {
                            process: "Excess cytoplasm shed as residual body",
                            phagocytosis: "Sertoli cells engulf residual bodies"
                        }
                    },
                    result: "Mature spermatozoa with head, midpiece, tail"
                },
                spermiation: {
                    definition: "Release of mature sperm into lumen of seminiferous tubule",
                    transport: "Sperm move to epididymis via testicular fluid and contractions"
                }
            },
            
            spermStructure: {
                size: "Total length ~60 μm",
                head: {
                    length: "~5 μm",
                    width: "~3 μm",
                    shape: "Flattened oval (streamlined)",
                    components: {
                        nucleus: {
                            contents: "Haploid DNA (23 chromosomes)",
                            packaging: "DNA bound to protamines (very compact)",
                            volume: "~30% of head"
                        },
                        acrosome: {
                            coverage: "Anterior 2/3 of nucleus",
                            origin: "Modified lysosome from Golgi",
                            enzymes: {
                                hyaluronidase: "Digests hyaluronic acid in corona radiata",
                                acrosin: "Protease, digests zona pellucida",
                                neuraminidase: "Cleaves sialic acid residues",
                                esterases: "Various esterases"
                            },
                            acrosomeReaction: "Release of enzymes upon contact with zona pellucida"
                        },
                        postacrosomalRegion: "Area for fusion with ovum membrane"
                    }
                },
                neck: {
                    length: "~1 μm",
                    contents: "Centriole, connecting piece",
                    function: "Connects head to midpiece"
                },
                midpiece: {
                    length: "~5-7 μm",
                    diameter: "~1 μm",
                    components: {
                        mitochondria: {
                            number: "50-75",
                            arrangement: "Tightly wound helix around axoneme",
                            function: "Oxidative phosphorylation → ATP production",
                            substrate: "Fructose from seminal vesicle secretion"
                        },
                        axoneme: "Central 9+2 microtubule core"
                    },
                    annulus: "Ring at junction with principal piece"
                },
                principalPiece: {
                    alsoKnown: "Tail",
                    length: "~45-50 μm (~80% of total length)",
                    components: {
                        axoneme: "9+2 microtubule arrangement",
                        outerDenseFibers: "9 fibers surrounding axoneme (provide rigidity)",
                        fibrousSheath: "Surrounds outer dense fibers and axoneme"
                    },
                    movement: "Whip-like beating propels sperm forward",
                    speed: "~2-3 mm/min (~30 μm/sec)"
                },
                endPiece: {
                    length: "~5 μm",
                    contents: "Axoneme only (no fibers or sheath)",
                    termination: "Tapered end"
                }
            },
            
            hormoneRegulation: {
                hypothalamus: {
                    hormone: "GnRH (pulsatile release every 1-2 hours)",
                    target: "Anterior pituitary gonadotrophs"
                },
                anteriorPituitary: {
                    FSH: {
                        target: "Sertoli cells",
                        actions: [
                            "Stimulates spermatogenesis",
                            "Stimulates ABP (androgen-binding protein) production",
                            "Stimulates inhibin secretion"
                        ]
                    },
                    LH: {
                        alsoKnown: "ICSH (Interstitial Cell Stimulating Hormone)",
                        target: "Leydig cells",
                        action: "Stimulates testosterone synthesis"
                    }
                },
                testes: {
                    testosterone: {
                        source: "Leydig cells",
                        localAction: "Required for spermatogenesis (acts on Sertoli cells)",
                        feedback: "Negative feedback on hypothalamus (GnRH) and pituitary (LH)",
                        concentration: "ABP maintains high local concentration in seminiferous tubules"
                    },
                    inhibin: {
                        source: "Sertoli cells",
                        action: "Selectively inhibits FSH (not LH)",
                        feedback: "Negative feedback to anterior pituitary"
                    }
                },
                balance: "Testosterone and inhibin provide negative feedback to maintain homeostasis"
            },
            
            abnormalities: {
                azoospermia: "No sperm in semen (infertility)",
                oligozoospermia: "Low sperm count (<15 million/ml)",
                asthenozoospermia: "Poor sperm motility (<40% motile)",
                teratozoospermia: "Abnormal sperm morphology (>96% abnormal)",
                causes: {
                    hormonal: "Low FSH, LH, testosterone",
                    varicocele: "Enlarged veins in scrotum (increased temperature)",
                    cryptorchidism: "Undescended testes",
                    infections: "Mumps orchitis, STIs",
                    medications: "Chemotherapy, steroids, some antibiotics",
                    lifestyle: "Smoking, alcohol, drugs, obesity, stress, heat exposure",
                    genetic: "Klinefelter syndrome (XXY), Y chromosome microdeletions"
                }
            }
        },
        
        semen: {
            definition: "Fluid containing sperm and secretions from accessory glands",
            volume: "2-5 ml (average 3.5 ml)",
            normalParameters: {
                spermConcentration: "≥15 million/ml (WHO 2010)",
                totalSpermCount: "≥39 million per ejaculate",
                motility: "≥40% motile (≥32% progressive)",
                morphology: "≥4% normal forms",
                vitality: "≥58% live",
                pH: "7.2-8.0 (slightly alkaline)",
                liquefaction: "Within 15-60 minutes",
                viscosity: "Should liquefy and become watery",
                leukocytes: "<1 million/ml"
            },
            composition: {
                sperm: "Only ~2-5% of volume",
                seminalVesicleFluid: "~60-70%",
                prostaticFluid: "~20-30%",
                bulbourethralFluid: "<1%",
                epididymalFluid: "~5%"
            },
            appearance: {
                initial: "Opaque, whitish-grey, viscous, coagulated",
                afterLiquefaction: "Translucent, less viscous",
                color: "Grey-white (normal), yellow (jaundice, drugs, infection), red (blood)"
            },
            semenAnalysis: {
                indication: "Infertility evaluation, post-vasectomy verification",
                collection: {
                    method: "Masturbation into sterile container",
                    abstinence: "2-7 days (affects concentration)",
                    timing: "Analyze within 1 hour of collection",
                    temperature: "Keep at 20-37°C"
                },
                parameters: "Volume, pH, concentration, motility, morphology, vitality, agglutination, liquefaction"
            }
        },
        
        testosterone: {
            synthesis: {
                location: "Leydig cells",
                pathway: "Cholesterol → Pregnenolone → Testosterone (via multiple enzymes)",
                stimulation: "LH",
                production: "~6-8 mg/day"
            },
            transport: {
                binding: "~98% bound in blood",
                SHBG: "Sex Hormone-Binding Globulin (~60%)",
                albumin: "~38% (loosely bound)",
                free: "~2% (biologically active)"
            },
            metabolism: {
                DHT: {
                    fullName: "Dihydrotestosterone",
                    enzyme: "5α-reductase",
                    potency: "More potent than testosterone",
                    tissues: "Prostate, skin, hair follicles",
                    effects: "Prostate growth, male pattern baldness, body hair"
                },
                estradiol: {
                    enzyme: "Aromatase",
                    location: "Adipose tissue, brain",
                    importance: "Required for bone health, libido, feedback regulation"
                }
            },
            effects: {
                fetal: {
                    development: "Sexual differentiation of male genitalia",
                    timing: "Weeks 8-12 of gestation",
                    descent: "Promotes testicular descent"
                },
                puberty: {
                    timing: "~age 12-14 years",
                    changes: [
                        "Growth spurt",
                        "Muscle mass increase",
                        "Bone growth and closure of epiphyseal plates",
                        "Larynx enlargement (voice deepening)",
                        "Facial, axillary, pubic, body hair growth",
                        "Sebaceous gland activity (acne)",
                        "Libido development",
                        "Spermatogenesis initiation"
                    ]
                },
                adult: {
                    reproductive: [
                        "Maintains spermatogenesis",
                        "Accessory gland secretions",
                        "Libido and sexual function"
                    ],
                    anabolic: [
                        "Protein synthesis (muscle growth)",
                        "Bone density maintenance",
                        "RBC production (stimulates erythropoietin)"
                    ],
                    metabolic: [
                        "Increases basal metabolic rate",
                        "Fat distribution (android pattern)",
                        "Insulin sensitivity"
                    ],
                    behavioral: [
                        "Libido",
                        "Mood, energy, sense of well-being",
                        "Spatial abilities",
                        "Aggressive behavior (context-dependent)"
                    ]
                }
            },
            levels: {
                normal: "300-1000 ng/dL (varies by lab, time of day)",
                circadianRhythm: "Peak in early morning (~7-8 AM), lowest evening",
                ageRelated: {
                    peak: "Late teens to early 20s",
                    decline: "~1% per year after age 30",
                    andropause: "Gradual decline, not abrupt like menopause"
                }
            },
            deficiency: {
                hypogonadism: {
                    primary: "Testicular failure (high LH, FSH)",
                    secondary: "Pituitary/hypothalamic failure (low LH, FSH)",
                    symptoms: [
                        "Decreased libido, erectile dysfunction",
                        "Fatigue, decreased energy",
                        "Loss of muscle mass, strength",
                        "Increased body fat",
                        "Decreased bone density (osteoporosis)",
                        "Mood changes, depression",
                        "Infertility"
                    ],
                    treatment: {
                        replacement: "Testosterone injections, patches, gels",
                        caution: "Suppresses spermatogenesis (negative feedback)",
                        monitoring: "PSA (prostate), hematocrit, lipids"
                    }
                }
            },
            abuse: {
                anabolicSteroids: "Synthetic testosterone derivatives",
                users: "Athletes, bodybuilders",
                effects: {
                    desired: "Increased muscle mass, strength, performance",
                    adverse: [
                        "Testicular atrophy (negative feedback suppresses LH)",
                        "Infertility (suppressed spermatogenesis)",
                        "Gynecomastia (aromatization to estrogen)",
                        "Liver damage (oral steroids)",
                        "Cardiovascular disease (altered lipids, hypertension)",
                        "Psychological (aggression, mood swings, dependence)",
                        "Acne, male pattern baldness"
                    ]
                }
            }
        },
        
        clinicalApplications: {
            infertility: {
                evaluation: "Semen analysis, hormone levels, testicular exam, genetic testing",
                causes: "Hormonal, anatomical, genetic, lifestyle, idiopathic",
                treatments: {
                    lifestyle: "Weight loss, avoid heat/toxins, reduce stress",
                    medical: "Treat infections, hormonal therapy, surgery (varicocele repair)",
                    ART: {
                        IUI: "Intrauterine insemination (processed sperm placed in uterus)",
                        IVF: "In vitro fertilization",
                        ICSI: "Intracytoplasmic sperm injection (single sperm injected into ovum)"
                    }
                }
            },
            contraception: {
                vasectomy: "Most effective male method (>99%)",
                condoms: "Barrier method (~85% typical use, 98% perfect use)",
                withdrawal: "Poor effectiveness (~78% typical use)",
                research: "Male hormonal contraception (suppress spermatogenesis with testosterone + progestin)"
            },
            prostateDisease: {
                screening: "PSA, DRE (controversy over benefits vs harms)",
                prevention: "Healthy diet, exercise, maintain healthy weight"
            }
        },
        
        applications: [
            "Male infertility diagnosis and treatment",
            "Contraception (vasectomy, condom use)",
            "Testosterone replacement therapy",
            "Understanding effects of performance-enhancing drugs",
            "Prostate health and cancer screening",
            "Sexual dysfunction treatment",
            "Understanding male development and aging"
        ]
    };
    
    return content;
}

handleFemaleReproductiveSystem(problem) {
    return this.lessons.female_reproductive_system;
}

handleGametogenesis(problem) {
    return this.lessons.gametogenesis;
}

handleMenstrualCycle(problem) {
    return this.lessons.menstrual_cycle;
}

handleFertilizationDevelopment(problem) {
    return this.lessons.fertilization_development;
}

handleReproductiveHormones(problem) {
    return this.lessons.reproductive_hormones;
}

handleBirthLabor(problem) {
    const content = {
        topic: "Birth and Labor (Parturition)",
        category: 'reproductive_physiology',
        summary: "Parturition (childbirth) is the process of delivering the fetus and placenta from the uterus. Labor involves coordinated uterine contractions that dilate the cervix and expel the fetus, followed by placenta delivery.",
        
        keyDefinitions: {
            "Parturition": "The act of giving birth",
            "Labor": "Series of events leading to birth",
            "Gestation": "Duration of pregnancy (~40 weeks from last menstrual period)",
            "Term": "Full-term pregnancy (37-42 weeks)",
            "Effacement": "Thinning and shortening of cervix",
            "Dilation": "Opening of cervix (measured in cm, 0-10)",
            "Presentation": "Part of fetus that enters pelvis first (usually head)",
            "Station": "Position of fetal head relative to ischial spines",
            "Crowning": "When fetal head visible at vaginal opening",
            "Afterbirth": "Placenta and membranes expelled after baby"
        },
        
        preparationForLabor: {
            fetalPreparation: {
                positioning: {
                    engagement: "Fetal head descends into pelvis ('lightening' or 'dropping')",
                    timing: "2-4 weeks before labor (primigravida) or during labor (multigravida)",
                    normalPresentation: "Vertex (head down, chin tucked) - 95%",
                    abnormalPresentations: {
                        breech: "Buttocks or feet first (3-4%)",
                        transverse: "Sideways (shoulder first) - <1%",
                        face: "Head extended, face first",
                        brow: "Partial head extension"
                    }
                },
                maturation: {
                    lungMaturation: "Surfactant production (weeks 34-36)",
                    liverEnzymes: "Mature for independent metabolism",
                    thermoregulation: "Brown fat deposition",
                    immune: "IgG antibodies from mother"
                }
            },
            
            maternalPreparation: {
                cervicalChanges: {
                    ripening: {
                        timing: "Weeks before labor",
                        changes: [
                            "Collagen fibers disorganize",
                            "Increased water content",
                            "Softening (from firm to soft)",
                            "Effacement begins (thinning)"
                        ],
                        hormones: "Prostaglandins, relaxin, estrogen"
                    },
                    effacement: {
                        description: "Cervix thins from ~3 cm to paper-thin",
                        measurement: "Percentage (0-100%)",
                        mechanism: "Lower uterine segment incorporates cervix"
                    }
                },
                uterineChanges: {
                    BraxtonHicks: {
                        description: "Irregular, painless contractions",
                        timing: "Throughout pregnancy, more noticeable late pregnancy",
                        function: "May help with cervical ripening",
                        falseLabor: "Irregular, don't increase in intensity/frequency, stop with rest"
                    },
                    lowerSegmentFormation: "Thin-walled lower segment forms",
                    increasedOxytocinReceptors: "Uterus becomes more sensitive to oxytocin"
                },
                pelvicChanges: {
                    ligamentRelaxation: "Relaxin softens pelvic ligaments",
                    symphysisSeparation: "Pubic symphysis widens slightly",
                    sacroiliacRelaxation: "Increased mobility"
                }
            }
        },
        
        initiationOfLabor: {
            triggers: "Multifactorial - no single definitive trigger identified",
            fetalFactors: {
                fetalCortisol: {
                    mechanism: "Fetal hypothalamic-pituitary-adrenal (HPA) axis matures",
                    effect: "↑ Fetal cortisol → ↑ Placental CRH → ↑ Fetal ACTH → more cortisol (positive feedback)",
                    result: "Changes placental steroid production (↑ estrogen, ↓ progesterone)"
                },
                fetalLungs: "Mature lungs release surfactant protein A → stimulates maternal inflammation"
            },
            maternalFactors: {
                hormonalShift: {
                    progesteroneWithdrawal: {
                        effect: "Functional withdrawal (sensitivity decreases even if levels don't drop)",
                        result: "Loss of uterine quiescence"
                    },
                    estrogenRise: {
                        effect: "↑ Estrogen : progesterone ratio",
                        results: [
                            "↑ Oxytocin receptors on uterine muscle",
                            "↑ Prostaglandin production",
                            "↑ Gap junctions between myometrial cells",
                            "↑ Uterine contractility"
                        ]
                    }
                },
                prostaglandins: {
                    source: "Fetal membranes, decidua, myometrium",
                    types: "PGE2, PGF2α",
                    effects: [
                        "Cervical ripening",
                        "Stimulate uterine contractions",
                        "Increase oxytocin receptor expression"
                    ],
                    clinical: "Prostaglandin gels used to induce labor"
                },
                oxytocin: {
                    source: "Posterior pituitary (maternal)",
                    timing: "Levels rise during labor",
                    effects: "Stimulates uterine contractions",
                    positiveFeedback: {
                        mechanism: "Ferguson reflex",
                        sequence: [
                            "Uterine contractions → cervical/vaginal stretch",
                            "Stretch receptors → nerve signals to hypothalamus",
                            "↑ Oxytocin release",
                            "↑ Uterine contractions (stronger, more frequent)",
                            "More stretching → more oxytocin → POSITIVE FEEDBACK LOOP"
                        ],
                        termination: "Birth of baby removes stretch stimulus → feedback stops"
                    },
                    syntheticUse: "Pitocin used to induce or augment labor"
                },
                CRH: {
                    source: "Placenta",
                    level: "Rises exponentially in late pregnancy",
                    effect: "Stimulates prostaglandin production, may trigger labor cascade"
                }
            },
            mechanicalFactors: {
                uterineStretch: "Overdistension may trigger contractions (twins, polyhydramnios)",
                fetalMembraneStripping: "Manual separation of membranes from lower uterus (can induce labor)"
            }
        },
        
        stagesOfLabor: {
            firstStage: {
                name: "Stage 1: Cervical Dilation",
                duration: {
                    primigravida: "12-18 hours (first baby)",
                    multigravida: "6-10 hours (subsequent babies)"
                },
                phases: {
                    latentPhase: {
                        cervicalDilation: "0-3 cm",
                        duration: "Hours to days (variable)",
                        contractions: {
                            frequency: "Irregular, 5-30 min apart",
                            duration: "30-45 seconds",
                            intensity: "Mild to moderate"
                        },
                        cervix: "Effaces (thins) and begins dilation",
                        activity: "Woman can usually walk, talk, rest",
                        note: "Longest, most variable phase"
                    },
                    activePhase: {
                        cervicalDilation: "4-7 cm",
                        rate: "~1 cm/hour (primigravida), ~1.5 cm/hour (multigravida)",
                        duration: "3-6 hours",
                        contractions: {
                            frequency: "Every 3-5 minutes",
                            duration: "45-60 seconds",
                            intensity: "Moderate to strong",
                            pattern: "Regular, increasing"
                        },
                        descent: "Fetal head descends into pelvis",
                        activity: "Woman focuses on contractions, uses breathing techniques",
                        intervention: "Epidural anesthesia often given during this phase"
                    },
                    transition: {
                        cervicalDilation: "8-10 cm",
                        duration: "30 min - 2 hours",
                        contractions: {
                            frequency: "Every 2-3 minutes",
                            duration: "60-90 seconds",
                            intensity: "Very strong, may have double peaks",
                            pattern: "Very regular, intense"
                        },
                        characteristics: [
                            "Most intense, challenging phase",
                            "Pressure on rectum (urge to push)",
                            "Nausea, vomiting, shaking, hot/cold flashes",
                            "Irritability, difficulty coping"
                        ],
                        cervix: "Completes dilation to 10 cm (fully dilated)",
                        note: "Shortest but most intense phase"
                    }
                },
                ruptureOfMembranes: {
                    timing: "Can occur anytime (before or during labor)",
                    spontaneous: "Amniotic sac ruptures ('water breaks')",
                    artificial: "AROM - artificial rupture of membranes (amniotomy) to speed labor",
                    effect: "Releases prostaglandins → strengthens contractions"
                }
            },
            
            secondStage: {
                name: "Stage 2: Expulsion of Fetus",
                definition: "From full cervical dilation (10 cm) to birth of baby",
                duration: {
                    primigravida: "30 min - 3 hours",
                    multigravida: "5-30 minutes",
                    factors: "Parity, epidural (prolongs), fetal size, maternal effort"
                },
                contractions: {
                    frequency: "Every 2-5 minutes",
                    duration: "60-90 seconds",
                    intensity: "Strong",
                    urge: "Overwhelming urge to push (bearing down)"
                },
                mechanism: {
                    descent: "Fetus descends through birth canal",
                    rotation: {
                        internal: "Head rotates to fit pelvis (occiput anterior)",
                        mechanisms: "Engagement → Descent → Flexion → Internal rotation"
                    },
                    extension: "Head extends as it passes under pubic symphysis",
                    restitution: "Head rotates back to align with shoulders",
                    externalRotation: "Shoulders rotate to fit through pelvis",
                    expulsion: "Shoulders, then body delivered"
                },
                pushing: {
                    timing: "With each contraction during second stage",
                    technique: {
                        directed: "Coach directs when/how long to push",
                        spontaneous: "Woman follows body's urge (may preserve pelvic floor better)"
                    },
                    valsalva: "Holding breath while pushing (increases intraabdominal pressure)",
                    openGlottis: "Exhaling while pushing (may be gentler)"
                },
                crowning: {
                    definition: "Fetal head visible at vaginal opening, doesn't recede",
                    perineum: "Stretches maximally",
                    risk: "Perineal tears",
                    management: {
                        support: "Provider supports perineum",
                        controlledDelivery: "Slow, controlled delivery of head",
                        episiotomy: {
                            description: "Surgical incision of perineum",
                            types: "Median (midline) or mediolateral",
                            use: "No longer routine; used only if necessary (fetal distress, shoulder dystocia)",
                            controversy: "May increase risk of severe tears"
                        }
                    }
                },
                birth: {
                    headDelivery: "Head emerges, rotates to side (restitution)",
                    shoulderDelivery: "Gentle downward traction → anterior shoulder, then upward → posterior shoulder",
                    bodyDelivery: "Rest of body slides out easily",
                    timing: "Record time of birth"
                },
                immediateNewbornCare: {
                    clearing: "Suction mouth/nose if needed (usually not necessary)",
                    drying: "Dry and stimulate baby",
                    warming: "Place on mother's abdomen/chest (skin-to-skin)",
                    cordClamping: {
                        timing: "Delayed (30-60 sec) vs immediate",
                        benefit: "Delayed allows placental transfusion → ↑ iron stores"
                    },
                    apgarScore: {
                        timing: "At 1 and 5 minutes",
                        components: "Appearance (color), Pulse (heart rate), Grimace (reflex), Activity (muscle tone), Respiration",
                        scoring: "Each 0-2, total 0-10",
                        interpretation: "7-10 normal, 4-6 moderately depressed, 0-3 severely depressed"
                    }
                }
            },
            
            thirdStage: {
                name: "Stage 3: Placental Delivery",
                definition: "From birth of baby to delivery of placenta",
                duration: "5-30 minutes (average ~15 min)",
                mechanism: {
                    separation: {
                        process: "Uterus contracts, reduces surface area → placenta shears off",
                        signs: {
                            gushOfBlood: "Sudden increase in vaginal bleeding",
                            cordLengthening: "Umbilical cord protrudes further",
                            uterusChanges: "Uterus becomes firm, globular, rises in abdomen",
                            urgeToPoush: "Mother may feel urge to push again"
                        }
                    },
                    expulsion: {
                        maternal: "Gentle pushing by mother",
                        controlled: "Provider applies gentle traction on cord while supporting uterus",
                        caution: "Excessive traction can cause uterine inversion (rare emergency)"
                    }
                },
                management: {
                    active: {
                        components: [
                            "Oxytocin injection (after baby's shoulder delivers)",
                            "Controlled cord traction",
                            "Uterine massage after placental delivery"
                        ],
                        benefit: "Reduces postpartum hemorrhage by ~50%",
                        standard: "Recommended by WHO, ACOG"
                    },
                    expectant: {
                        description: "Await spontaneous delivery without intervention",
                        duration: "May take longer",
                        risk: "Higher risk of postpartum hemorrhage"
                    }
                },
                examination: {
                    placenta: {
                        completeness: "Ensure entire placenta delivered (retained fragments cause bleeding)",
                        inspection: "Check for tears, missing pieces, abnormalities",
                        membranes: "Ensure membranes intact"
                    },
                    uterus: "Should be firm, contracted (like grapefruit), at or below umbilicus"
                },
                complications: {
                    retainedPlacenta: {
                        definition: "Placenta not delivered within 30 minutes",
                        causes: "Uterine atony, abnormal placentation, trapped placenta",
                        management: "Manual removal (under anesthesia)"
                    },
                    postpartumHemorrhage: {
                        definition: "Blood loss >500 ml (vaginal) or >1000 ml (cesarean)",
                        timing: "Primary (within 24 hours) or secondary (24 hours - 12 weeks)",
                        causes: {
                            fourTs: [
                                "Tone (uterine atony - most common 70%)",
                                "Trauma (lacerations, hematomas, uterine rupture)",
                                "Tissue (retained placenta/membranes)",
                                "Thrombin (coagulation disorders)"
                            ]
                        },
                        management: {
                            massage: "Bimanual uterine massage",
                            medications: "Oxytocin, methylergonovine, misoprostol, carboprost",
                            surgical: "Uterine tamponade, artery ligation, hysterectomy (last resort)"
                        }
                    }
                }
            },
            
            fourthStage: {
                name: "Stage 4: Recovery",
                definition: "First 2 hours after placental delivery",
                purpose: "Close monitoring for complications",
                monitoring: {
                    vitalSigns: "Every 15 minutes (BP, pulse, temp)",
                    uterus: {
                        firmness: "Should remain firm (contracted)",
                        position: "At or below umbilicus",
                        boggy: "Soft, enlarged uterus indicates atony → hemorrhage risk"
                    },
                    bleeding: "Amount, color of lochia (vaginal discharge)",
                    perineum: "Check for hematomas, excessive swelling"
                },
                normalChanges: {
                    lochia: {
                        description: "Vaginal discharge after birth",
                        stages: {
                            rubra: "Red, blood (days 1-3)",
                            serosa: "Pink-brown, serosanguineous (days 4-10)",
                            alba: "Yellowish-white (days 10-14 to 4-6 weeks)"
                        },
                        amount: "Moderate initially, decreases over time"
                    },
                    afterpains: {
                        description: "Uterine contractions (cramping)",
                        severity: "Mild (first baby), more intense (subsequent)",
                        trigger: "Breastfeeding (oxytocin release)",
                        duration: "Few days",
                        purpose: "Uterine involution (return to pre-pregnancy size)"
                    }
                },
                bonding: {
                    skinToSkin: "Baby on mother's chest",
                    breastfeeding: "Initiate within first hour",
                    roominIn: "Baby stays with mother"
                }
            }
        },
        
        painManagement: {
            nonPharmacologic: {
                breathing: "Patterned breathing, slow deep breaths",
                positioning: "Walking, squatting, hands-and-knees, birthing ball",
                hydrotherapy: "Shower, bath, birthing pool",
                massage: "Back rubs, counter-pressure on sacrum",
                visualization: "Mental imagery, focal points",
                hypnosis: "Hypnobirthing techniques",
                support: "Continuous labor support (doula, partner)",
                movement: "Changing positions, rocking, swaying"
            },
            pharmacologic: {
                systemicAnalgesics: {
                    opioids: "Morphine, fentanyl, meperidine (IV or IM)",
                    effect: "Moderate pain relief, sedation",
                    timing: "Early labor (avoid close to delivery - respiratory depression in baby)",
                    sideEffects: "Maternal: nausea, sedation; Fetal: decreased variability, respiratory depression"
                },
                regionalAnesthesia: {
                    epidural: {
                        description: "Local anesthetic + opioid into epidural space (L3-L4 or L4-L5)",
                        effect: "Blocks pain from uterus, cervix, upper vagina, perineum",
                        onset: "15-20 minutes",
                        duration: "Continuous infusion throughout labor",
                        mobility: "Limited (numb legs), though 'walking epidurals' allow some movement",
                        advantages: "Excellent pain relief, can be used for cesarean if needed",
                        disadvantages: [
                            "Prolonged second stage (30-60 min)",
                            "Increased instrumental delivery (forceps, vacuum)",
                            "Hypotension (IV fluids given first)",
                            "Urinary retention (catheter needed)",
                            "Fever (mechanism unclear)",
                            "Rare: spinal headache, nerve damage"
                        ],
                        timing: "Usually active labor (4+ cm), but can be given earlier"
                    },
                    spinal: {
                        description: "Single injection into subarachnoid space",
                        effect: "Complete motor and sensory block below injection",
                        onset: "Immediate",
                        duration: "1-2 hours (one dose)",
                        use: "Cesarean section, not typically for vaginal labor",
                        advantage: "Rapid, profound anesthesia",
                        disadvantage: "Short duration, hypotension, post-dural puncture headache risk"
                    },
                    combinedSpinalEpidural: {
                        description: "Spinal for immediate relief, epidural catheter for continuous",
                        advantage: "Best of both - rapid onset, prolonged duration"
                    },
                    pudendalBlock: {
                        description: "Inject local anesthetic near pudendal nerve",
                        effect: "Numbs perineum, lower vagina",
                        timing: "Just before delivery",
                        use: "For delivery, episiotomy, repair",
                        limitation: "Doesn't relieve uterine contraction pain"
                    }
                },
                localAnesthesia: {
                    perinealInfiltration: "Inject local anesthetic into perineum",
                    use: "For episiotomy or laceration repair"
                },
                generalAnesthesia: {
                    use: "Emergency cesarean when no time for regional",
                    risk: "Aspiration (pregnancy delays gastric emptying), fetal depression",
                    rarely: "Used for vaginal delivery"
                }
            }
        },
        
        complications: {
            prolongedLabor: {
                definition: "Labor longer than expected for parity",
                causes: {
                    powerProblems: "Inadequate contractions (uterine dysfunction)",
                    passengerProblems: "Large baby, malposition, malpresentation",
                    passageProblems: "Small pelvis, pelvic abnormalities"
                },
                risks: "Maternal exhaustion, infection, fetal distress",
                management: "Oxytocin augmentation, amniotomy, cesarean if not progressing"
            },
            precipitousLabor: {
                definition: "Rapid labor (<3 hours)",
                risks: "Perineal tears, postpartum hemorrhage, fetal trauma",
                management: "Controlled delivery if possible"
            },
            fetopelvicDisproportion: {
                alsoKnown: "Cephalopelvic disproportion (CPD)",
                description: "Baby's head too large for mother's pelvis",
                diagnosis: "Labor arrest, failure to descend",
                management: "Cesarean section"
            },
            shoulderDystocia: {
                definition: "Anterior shoulder impacted behind pubic symphysis",
                risk: "Large baby (macrosomia), maternal diabetes",
                emergency: "Head delivers but shoulders stuck",
                management: {
                    maneuvers: [
                        "McRoberts (flex thighs onto abdomen)",
                        "Suprapubic pressure",
                        "Deliver posterior arm",
                        "Rotational maneuvers (Woods, Rubin)"
                    ],
                    doNOT: "Pull hard on head (brachial plexus injury)",
                    urgency: "Must deliver quickly (cord compression)"
                },
                complications: "Brachial plexus injury (Erb's palsy), clavicle fracture"
            },
            uterineRupture: {
                description: "Tear in uterine wall",
                risk: "Prior cesarean (scar rupture), high-dose oxytocin, obstructed labor",
                signs: "Sudden severe pain, abnormal fetal heart rate, vaginal bleeding, loss of contractions",
                emergency: "Immediate cesarean, maternal hemorrhage/shock, fetal death",
                prevention: "Careful monitoring of VBAC (vaginal birth after cesarean)"
            },
            umbilicalCordProblems: {
                prolapse: {
                    description: "Cord descends below presenting part",
                    risk: "Rupture of membranes with high station, malpresentation",
                    emergency: "Cord compression → fetal hypoxia",
                    management: "Immediate cesarean; elevate presenting part off cord"
                },
                nuchalCord: {
                    description: "Cord wrapped around neck",
                    frequency: "~25-30% of births",
                    management: "Usually slip over head; if tight, clamp and cut before body delivery"
                }
            },
            amniotic_fluidEmbolism: {
                description: "Amniotic fluid enters maternal circulation",
                rare: "1 in 40,000 deliveries",
                catastrophic: "Sudden cardiovascular collapse, DIC, high mortality",
                presentation: "Sudden dyspnea, hypotension, seizure, cardiac arrest",
                management: "Supportive care, resuscitation"
            }
        },
        
        cesareanSection: {
            definition: "Surgical delivery through incision in abdomen and uterus",
            indications: {
                absolute: [
                    "Complete placenta previa (placenta covers cervix)",
                    "Vasa previa (fetal vessels cross cervix)",
                    "Transverse lie",
                    "Cord prolapse",
                    "Active genital herpes",
                    "Some HIV-positive mothers"
                ],
                relative: [
                    "Fetal distress (abnormal heart rate)",
                    "Failure to progress in labor",
                    "Cephalopelvic disproportion",
                    "Breech presentation (may attempt vaginal)",
                    "Multiple gestation (position-dependent)",
                    "Placental abruption",
                    "Previous cesarean (though VBAC possible)"
                ]
            },
            procedure: {
                anesthesia: "Spinal or epidural (regional); general if emergency",
                incision: {
                    skin: "Pfannenstiel (low transverse, 'bikini cut') or vertical",
                    uterus: "Low transverse (preferred) or classical (vertical)"
                },
                delivery: "Baby delivered through incision, cord clamped",
                repair: "Uterus sutured in layers, abdomen closed",
                duration: "~45-60 minutes"
            },
            recovery: {
                hospital: "2-4 days",
                pain: "More than vaginal delivery (surgical pain)",
                activity: "Limited initially, gradual increase",
                fullRecovery: "~6 weeks"
            },
            risks: {
                maternal: [
                    "Infection",
                    "Hemorrhage",
                    "Blood clots",
                    "Injury to bladder/bowel",
                    "Longer recovery",
                    "Scar complications in future pregnancies (placenta accreta, uterine rupture)"
                ],
                fetal: "Respiratory issues (transient tachypnea of newborn), surgical injury (rare)"
            },
            futurePregnancies: {
                VBAC: {
                    fullName: "Vaginal Birth After Cesarean",
                    candidates: "Low transverse uterine incision, no other contraindications",
                    success: "60-80%",
                    risk: "Uterine rupture (0.5-1%)",
                    monitoring: "Continuous fetal monitoring during labor"
                },
                repeatCesarean: "Option for future deliveries"
            }
        },
        
        postpartumPeriod: {
            definition: "6-8 weeks after delivery",
            physicalChanges: {
                uterineInvolution: {
                    process: "Uterus returns to pre-pregnancy size",
                    rate: "~1 cm/day descent (umbilicus → pelvis in ~10 days)",
                    mechanism: "Autolysis (self-digestion) of myometrial cells",
                    complete: "~6 weeks",
                    breastfeeding: "Accelerates involution (oxytocin)"
                },
                cervix: "Closes gradually, never returns to nulliparous state",
                vagina: "Regains tone over weeks, may not return to pre-pregnancy exactly",
                abdomen: "Muscles stretched, may have diastasis recti (separation)",
                weight: "Gradual loss (immediate: baby, fluid, blood; weeks: stored fat)"
                },
            hormonal: {
                estrogen_progesterone: "Drop precipitously after placenta delivered",
                prolactin: {
                    breastfeeding: "Rises, stimulates milk production",
                    nonbreastfeeding: "Returns to baseline in ~2-3 weeks"
                },
                oxytocin: "Released during breastfeeding (milk ejection, uterine involution)"
            },
            psychological: {
                babyBlues: {
                    prevalence: "50-80% of mothers",
                    onset: "Days 2-3 postpartum",
                    symptoms: "Mood swings, tearfulness, anxiety, irritability",
                    duration: "Self-limited, resolves in 1-2 weeks",
                    cause: "Hormonal shifts, fatigue, adjustment"
                },
                postpartumDepression: {
                    prevalence: "10-15%",
                    onset: "Within first year (often first 3 months)",
                    symptoms: "Persistent sadness, anxiety, difficulty bonding, changes in sleep/appetite, thoughts of harm",
                    duration: "Does NOT resolve on its own",
                    treatment: "Therapy, antidepressants, support groups",
                    screening: "Edinburgh Postnatal Depression Scale"
                },
                postpartumPsychosis: {
                    prevalence: "Rare (~1-2 per 1000)",
                    onset: "First 2 weeks (often days 3-5)",
                    symptoms: "Delusions, hallucinations, mania, confusion, thoughts of harming baby",
                    emergency: "Psychiatric emergency - hospitalization required",
                    risk: "Bipolar disorder, previous postpartum psychosis"
                }
            },
            lactation: {
                initiation: "Suckling stimulates prolactin and oxytocin",
                colostrum: "First milk (thick, yellowish, high in antibodies)",
                transitionMilk: "Days 3-5 ('milk comes in')",
                matureMilk: "By 2 weeks",
                supply: "Based on demand (frequent feeding → more milk)",
                benefits: {
                    infant: "Optimal nutrition, antibodies, bonding, reduces infections/allergies",
                    maternal: "Uterine involution, weight loss, reduces ovarian/breast cancer risk, natural spacing (though not reliable contraception)"
                }
            },
            contraception: {
                timing: "Can get pregnant before first period (ovulation precedes menstruation)",
                LAM: {
                    fullName: "Lactational Amenorrhea Method",
                    effectiveness: "98% if: <6 months postpartum, exclusively breastfeeding, no periods",
                    limitation: "Strict criteria; not reliable after 6 months or if supplementing"
                },
                options: {
                    barrier: "Condoms, diaphragm (refit after 6 weeks)",
                    progestinOnly: "Minipill, injection, implant, IUD (safe during breastfeeding)",
                    combined: "Pills, patch, ring (wait 3-6 weeks; may reduce milk supply)",
                    permanent: "Tubal ligation, vasectomy"
                }
            }
        },
        
        applications: [
            "Prenatal education (childbirth classes)",
            "Labor and delivery nursing/medicine",
            "Obstetric anesthesiology",
            "Midwifery practice",
            "Understanding complications and interventions",
            "Postpartum care and mental health",
            "Breastfeeding support",
            "Family planning counseling"
        ]
    };
    
    return content;
}

handleContraception(problem) {
    const content = {
        topic: "Contraception and Family Planning",
        category: 'reproductive_health',
        summary: "Contraception includes methods and devices used to prevent pregnancy. Methods vary in mechanism, effectiveness, reversibility, and protection against STIs. Understanding contraceptive options enables informed reproductive choices.",
        
        keyDefinitions: {
            "Contraception": "Prevention of pregnancy",
            "Birth Control": "Synonym for contraception",
            "Family Planning": "Broader term including contraception, conception planning, reproductive health",
            "Effectiveness": "Measured as failure rate per 100 women per year",
            "Perfect Use": "Effectiveness when method used consistently and correctly",
            "Typical Use": "Effectiveness in real-world conditions (includes user error)",
            "Reversible": "Fertility returns after discontinuation",
            "Permanent": "Sterilization (intended to be irreversible)",
            "Long-Acting": "Methods effective for months to years without user action"
        },
        
        effectivenessMeasurement: {
            failureRate: "Number of pregnancies per 100 women using method for 1 year",
            perfectVsTypical: {
                perfect: "Method used exactly as directed, every time",
                typical: "Real-world use (includes inconsistent use, errors)",
                gap: "Difference indicates user-dependency"
            },
            pearlIndex: "Failure rate calculation method",
            comparison: "Lower failure rate = more effective"
        },
        
        methodsByEffectiveness: {
            mostEffective: {
                methods: "Implant, IUD, sterilization",
                failureRate: "<1% (typical use)",
                advantage: "User-independent (set and forget)"
            },
            highlyEffective: {
                methods: "Injectable, pill, patch, ring",
                failureRate: "6-9% (typical use), <1% (perfect use)",
                note: "User-dependent (requires regular action)"
            },
            moderatelyEffective: {
                methods: "Condoms, diaphragm, fertility awareness",
                failureRate: "12-24% (typical use)",
                note: "Highly user-dependent"
            },
            leastEffective: {
                methods: "Withdrawal, spermicides alone",
                failureRate: "18-28% (typical use)",
                note: "Not recommended as sole method"
            },
            noMethod: {
                pregnancy: "85% of sexually active couples conceive within 1 year"
            }
        },
        
        hormonalMethods: {
            mechanism: "Suppress ovulation, thicken cervical mucus, thin endometrium",
            types: {
                combinedMethods: {
                    hormones: "Estrogen (ethinyl estradiol) + Progestin",
                    mechanism: {
                        primary: "Suppress ovulation (prevent LH surge)",
                        secondary: [
                            "Thicken cervical mucus (block sperm)",
                            "Thin endometrium (reduce implantation)"
                        ]
                    },
                    types: {
                        pill: {
                            alsoKnown: "COC (Combined Oral Contraceptive), 'The Pill'",
                            regimen: "21 active pills + 7 placebo (or 24/4 or continuous)",
                            timing: "Take daily at same time",
                            effectiveness: {
                                perfect: "0.3% failure",
                                typical: "9% failure"
                            },
                            advantages: [
                                "Highly effective if taken correctly",
                                "Regulates periods, reduces menstrual cramps",
                                "Reduces ovarian and endometrial cancer risk",
                                "Treats acne, PCOS, endometriosis"
                            ],
                            disadvantages: [
                                "Daily pill (easy to forget)",
                                "Nausea, breast tenderness, mood changes",
                                "Increased blood clot risk (small but real)",
                                "Not for smokers >35 years, history of clots/stroke",
                                "No STI protection"
                            ],
                            contraindications: [
                                "Smoking + age >35",
                                "History of blood clots, stroke, heart disease",
                                "Migraine with aura",
                                "Certain cancers",
                                "Uncontrolled hypertension",
                                "Breastfeeding <6 weeks postpartum"
                            ]
                        },
                        patch: {
                            description: "Transdermal patch releasing estrogen + progestin",
                            regimen: "Weekly patch x 3 weeks, 1 week off",
                            location: "Abdomen, buttocks, upper arm, back",
                            effectiveness: "Similar to pill (9% typical use)",
                            advantages: "Weekly vs daily; visible reminder",
                            disadvantages: "Skin irritation; may be less effective if >90 kg; visible",
                            sameContraindications: "As combined pill"
                        },
                        ring: {
                            alsoKnown: "NuvaRing",
                            description: "Flexible vaginal ring releasing estrogen + progestin",
                            regimen: "Insert for 3 weeks, remove for 1 week",
                            effectiveness: "Similar to pill (9% typical use)",
                            advantages: "Monthly; lower dose (vaginal absorption); self-inserted",
                            disadvantages: "Vaginal irritation/discharge; may be felt by partner; requires comfort with insertion",
                            sameContraindications: "As combined pill"
                        }
                    }
                },
                progestinOnlyMethods: {
                    hormones: "Progestin only (no estrogen)",
                    mechanism: {
                        primary: "Thicken cervical mucus (main mechanism)",
                        secondary: "Suppress ovulation (not always), thin endometrium"
                    },
                    indication: "Women who cannot use estrogen (breastfeeding, smokers >35, clot history, migraine with aura)",
                    types: {
                        minipill: {
                            alsoKnown: "POP (Progestin-Only Pill)",
                            regimen: "Daily, same time every day (no placebo week)",
                            timing: "MUST take within same 3-hour window daily",
                            effectiveness: {
                                perfect: "0.3%",
                                typical: "9%"
                            },
                            advantages: "Safe during breastfeeding; no estrogen side effects",
                            disadvantages: "Strict timing required; irregular bleeding common; less forgiving of missed pills"
                        },
                        injectable: {
                            alsoKnown: "Depo-Provera, DMPA",
                            regimen: "Intramuscular injection every 12-13 weeks",
                            effectiveness: {
                                perfect: "0.2%",
                                typical: "6%"
                            },
                            advantages: "Quarterly; very effective; reduces periods (amenorrhea in 50% by 1 year)",
                            disadvantages: [
                                "Weight gain common (~5 lbs/year)",
                                "Irregular bleeding initially",
                                "Delayed return to fertility (average 10 months after last injection)",
                                "Bone density decrease (reversible); limit use to 2 years if possible",
                                "Requires clinic visit every 3 months"
                            ],
                            caution: "Adolescents - consider bone health"
                        },
                        implant: {
                            alsoKnown: "Nexplanon",
                            description: "Single rod inserted subdermally in upper arm",
                            duration: "3 years",
                            effectiveness: {
                                perfect: "0.05%",
                                typical: "0.05%"
                            },
                            mechanism: "Most effective reversible contraceptive available",
                            advantages: [
                                "Set and forget (3 years)",
                                "Most effective method",
                                "Rapidly reversible (remove anytime)",
                                "No estrogen"
                            ],
                            disadvantages: [
                                "Insertion/removal procedure (quick, local anesthetic)",
                                "Irregular bleeding (most common reason for removal)",
                                "Visible/palpable rod",
                                "Arm bruising initially"
                            ]
                        }
                    }
                }
            },
            sideEffects: {
                common: [
                    "Irregular bleeding/spotting (especially first 3 months)",
                    "Nausea (usually resolves)",
                    "Breast tenderness",
                    "Mood changes",
                    "Weight gain (variable, more with DMPA)",
                    "Headaches"
                ],
                serious: [
                    "Blood clots (DVT, PE) - risk higher with estrogen",
                    "Stroke, heart attack - rare, higher in smokers >35",
                    "Liver tumors - very rare"
                ],
                beneficial: [
                    "Lighter, more regular periods",
                    "Reduced menstrual cramps",
                    "Reduced ovarian cysts",
                    "Reduced ovarian and endometrial cancer risk (long-term)",
                    "Improved acne (combined methods)",
                    "Reduced ectopic pregnancy risk"
                ]
            },
            drugInteractions: {
                reducedEffectiveness: [
                    "Certain antibiotics (rifampin)",
                    "Anticonvulsants (phenytoin, carbamazepine)",
                    "St. John's Wort",
                    "Some HIV medications"
                ],
                recommendation: "Use backup method (condoms) when taking interacting drugs"
            }
        },
        
        intrauterineDevices: {
            description: "T-shaped device inserted into uterus",
            duration: "3-12 years (depending on type)",
            effectiveness: {
                perfect: "0.2-0.8%",
                typical: "0.2-0.8%"
            },
            mechanism: "Creates hostile environment for sperm; prevents fertilization",
            
            types: {
                copperIUD: {
                    alsoKnown: "ParaGard",
                    mechanism: {
                        copper: "Toxic to sperm and ovum",
                        inflammation: "Creates sterile inflammatory response",
                        prevention: "Prevents fertilization (NOT abortion - works before fertilization)"
                    },
                    duration: "Up to 12 years",
                    effectiveness: "0.8% failure rate",
                    advantages: [
                        "Longest-acting reversible method",
                        "Non-hormonal (for women who can't/won't use hormones)",
                        "Emergency contraception (insert within 5 days of unprotected sex)",
                        "Immediately reversible"
                    ],
                    disadvantages: [
                        "Heavier, longer, more painful periods",
                        "Increased menstrual cramping",
                        "Insertion discomfort",
                        "No STI protection"
                    ]
                },
                hormonalIUD: {
                    brands: "Mirena (8 years), Kyleena (5 years), Liletta (8 years), Skyla (3 years)",
                    hormone: "Levonorgestrel (progestin)",
                    mechanism: {
                        local: "Thickens cervical mucus, thins endometrium",
                        systemic: "Minimal (low dose, local effect)",
                        ovulation: "Usually continues (unlike pills)"
                    },
                    duration: "3-8 years (depending on brand)",
                    effectiveness: "0.1-0.4% failure rate",
                    advantages: [
                        "Very effective, long-acting",
                        "Lighter periods (amenorrhea in 20-50% by 1 year)",
                        "Reduced menstrual cramps",
                        "Treats heavy menstrual bleeding",
                        "Low hormone dose (mainly local)",
                        "Immediately reversible"
                    ],
                    disadvantages: [
                        "Irregular bleeding first 3-6 months",
                        "Insertion discomfort",
                        "Ovarian cysts (usually benign, resolve)",
                        "Acne, mood changes (less common than systemic hormones)",
                        "No STI protection"
                    ]
                }
            },
            insertion: {
                timing: "Anytime if not pregnant (ideally during period - cervix more open)",
                procedure: "Pelvic exam → cervix cleaned → IUD inserted through cervix into uterus",
                discomfort: "Cramping during and after insertion (ibuprofen helps)",
                duration: "~5 minutes",
                strings: "Hang through cervix into vagina (for removal, self-check)"
            },
            complications: {
                expulsion: "2-10% (more common in first year, nulliparous women)",
                perforation: "Rare (~1 per 1000) - IUD punctures uterine wall during insertion",
                PID: {
                    risk: "Slightly increased first 20 days after insertion (from insertion, not IUD itself)",
                    prevention: "Screen for STIs before insertion",
                    note: "IUD does NOT increase PID risk after initial period"
                },
                ectopic: "If pregnancy occurs with IUD (rare), higher risk it's ectopic"
            },
            contraindications: [
                "Current pregnancy",
                "Active pelvic infection",
                "Uterine abnormalities (distorted cavity)",
                "Unexplained vaginal bleeding",
                "Cervical or uterine cancer",
                "Wilson's disease (copper IUD)"
            ]
        },
        
        barrierMethods: {
            mechanism: "Physical barrier prevents sperm from reaching ovum",
            
            maleCondom: {
                description: "Latex, polyurethane, or lambskin sheath worn on penis",
                effectiveness: {
                    perfect: "2% failure",
                    typical: "18% failure"
                },
                advantages: [
                    "Protects against STIs (latex, polyurethane - NOT lambskin)",
                    "Readily available, inexpensive",
                    "No prescription needed",
                    "Male involvement in contraception"
                ],
                disadvantages: [
                    "High typical-use failure rate (user error)",
                    "Must use every time",
                    "May reduce sensation",
                    "Latex allergy (use polyurethane)",
                    "Can break or slip off"
                ],
                properUse: [
                    "Check expiration date",
                    "Open carefully (don't use teeth/scissors)",
                    "Pinch tip to remove air",
                    "Unroll onto erect penis before any contact",
                    "Withdraw while still erect, hold base",
                    "Use only water-based or silicone lubricants (oil damages latex)",
                    "Use new condom for each act"
                ],
                STIprotection: "Most effective method for STI prevention (except abstinence)"
            },
            femaleCondom: {
                description: "Nitrile or polyurethane pouch inserted into vagina",
                effectiveness: {
                    perfect: "5% failure",
                    typical: "21% failure"
                },
                advantages: [
                    "Woman controls use",
                    "Protects against STIs",
                    "Can be inserted hours before sex",
                    "No prescription needed"
                ],
                disadvantages: [
                    "More expensive than male condoms",
                    "Can be noisy",
                    "May slip or bunch",
                    "Less available"
                ]
            },
            diaphragm: {
                description: "Shallow silicone cup inserted into vagina, covers cervix",
                use: "With spermicidal gel",
                fitting: "Requires healthcare provider fitting",
                effectiveness: {
                    perfect: "6% failure",
                    typical: "12% failure"
                },
                timing: "Insert before sex, leave in ≥6 hours after (max 24 hours)",
                advantages: "Reusable (1-2 years), no hormones",
                disadvantages: [
                    "Requires fitting and comfort with insertion",
                    "Must use every time",
                    "Increased UTI risk",
                    "No STI protection",
                    "Less popular now (IUDs, implants more effective)"
                ]
            },
            cervicalCap: {
                description: "Small silicone cap fits over cervix",
                similar: "Like diaphragm but smaller",
                effectiveness: "Less effective than diaphragm, especially in women who've given birth",
                use: "Less common now"
            },
            spermicide: {
                description: "Chemical that kills sperm",
                forms: "Gel, foam, film, suppository",
                active: "Nonoxynol-9 (most common)",
                effectiveness: {
                    alone: "28% failure (typical use)",
                    withBarrier: "Increases effectiveness when used with diaphragm/condom"
                },
                disadvantages: [
                    "Not effective alone",
                    "Messy",
                    "May cause irritation (increases STI risk if used frequently)",
                    "No STI protection"
                ],
                note: "Not recommended as sole method"
            }
        },
        
        fertilityAwarenessBasedMethods: {
            alsoKnown: "Natural family planning, periodic abstinence",
            principle: "Identify fertile days, avoid intercourse or use barrier method",
            fertileWindow: "~6 days (5 days before ovulation + day of ovulation)",
            effectiveness: {
                perfect: "0.4-5% failure (varies by method)",
                typical: "24% failure"
            },
            
            methods: {
                calendarMethod: {
                    alsoKnown: "Rhythm method",
                    process: "Track cycle length for 6-12 months, calculate fertile window",
                    formula: "First fertile day = shortest cycle - 18; Last fertile day = longest cycle - 11",
                    limitation: "Requires regular cycles; high failure rate"
                },
                BBT: {
                    fullName: "Basal Body Temperature",
                    process: "Take temperature daily before getting up; temp rises 0.4-0.8°F after ovulation (progesterone)",
                    fertile: "Assume fertile until 3 days of elevated temp",
                    limitation: "Confirms ovulation AFTER it occurs (not predictive)"
                },
                cervicalMucusMethod: {
                    alsoKnown: "Billings method",
                    process: "Check cervical mucus daily",
                    fertile: "Clear, stretchy, slippery ('egg white') indicates ovulation approaching",
                    infertile: "Thick, sticky, or absent mucus",
                    limitation: "Requires training and daily monitoring"
                },
                symptothermalMethod: {
                    description: "Combines BBT, cervical mucus, and calendar calculations",
                    effectiveness: "More effective than single methods (3-5% with perfect use)",
                    requirement: "Training, commitment, consistent monitoring"
                },
                standardDaysMethod: {
                    tool: "CycleBeads",
                    assumption: "Fertile days 8-19 of cycle (for 26-32 day cycles)",
                    effectiveness: "~5% with perfect use, 12% typical",
                    limitation: "Only for regular cycles"
                }
            },
            advantages: [
                "No hormones, no devices",
                "No side effects",
                "Acceptable to all religions",
                "Free (except tools like thermometer)",
                "Increases body awareness",
                "Can be used to achieve pregnancy too"
            ],
            disadvantages: [
                "High user error (requires discipline, training)",
                "Requires partner cooperation",
                "Long periods of abstinence or barrier use",
                "Ineffective with irregular cycles",
                "No STI protection",
                "Disrupted by illness, stress, travel, shift work"
            ]
        },
        
        emergencyContraception: {
            alsoKnown: "Morning-after pill, Plan B",
            indication: "After unprotected intercourse, contraceptive failure (condom break), sexual assault",
            mechanism: "Delays or prevents ovulation (does NOT cause abortion)",
            timing: "Most effective if taken ASAP; effective up to 120 hours (5 days) depending on type",
            
            types: {
                levonorgestrelPills: {
                    brands: "Plan B One-Step, Next Choice, generic",
                    hormone: "Levonorgestrel (progestin)",
                    dose: "1.5 mg single dose or 0.75 mg x 2 doses (12 hours apart)",
                    timing: "Up to 72 hours (3 days); effective up to 120 hours but less effective",
                    effectiveness: "Reduces pregnancy risk by ~75-89% if taken within 72 hours",
                    availability: "Over-the-counter (no age restriction in US)",
                    sideEffects: "Nausea, vomiting, fatigue, headache, breast tenderness, irregular bleeding",
                    nextPeriod: "May come early, on time, or late"
                },
                ulipristalAcetate: {
                    brand: "Ella",
                    mechanism: "Progesterone receptor modulator",
                    timing: "Up to 120 hours (5 days)",
                    effectiveness: "More effective than levonorgestrel, especially days 3-5; maintains effectiveness longer",
                    availability: "Prescription required",
                    advantage: "More effective in women with BMI >25"
                },
                copperIUD: {
                    description: "Copper IUD inserted within 5 days",
                    effectiveness: ">99% (most effective emergency contraception)",
                    advantages: [
                        "Most effective method",
                        "Provides ongoing contraception (up to 12 years)",
                        "Can be inserted even if ovulation already occurred"
                    ],
                    disadvantage: "Requires clinic visit, insertion procedure"
                }
            },
            importantNotes: [
                "NOT abortion pill (prevents pregnancy, doesn't end it)",
                "Does NOT protect against STIs",
                "Not for routine use (less effective than regular contraception)",
                "No long-term effects on fertility",
                "Can be used more than once in a cycle if needed (though not ideal)"
            ]
        },
        
        permanentMethods: {
            sterilization: {
                description: "Surgical procedures to permanently prevent pregnancy",
                intended: "Permanent (though reversal sometimes possible)",
                counseling: "Thorough counseling required; consider future desires, age, life circumstances",
                
                femaleSterilization: {
                    tubalLigation: {
                        alsoKnown: "'Getting tubes tied'",
                        procedure: "Fallopian tubes cut, tied, clipped, or sealed (blocks sperm from reaching ovum)",
                        approach: {
                            laparoscopic: "Small incisions, outpatient, general anesthesia",
                            minilaparotomy: "Small incision, often postpartum",
                            laparotomy: "Larger incision (if combined with other surgery, e.g., C-section)"
                        },
                        effectiveness: "0.5% failure (lifetime)",
                        advantages: [
                            "Permanent",
                            "One-time procedure",
                            "No ongoing contraception needed",
                            "No hormones",
                            "May reduce ovarian cancer risk"
                        ],
                        disadvantages: [
                            "Surgery, anesthesia risks",
                            "Intended to be permanent",
                            "Reversal difficult, expensive, not always successful",
                            "Regret (especially if young, life changes)",
                            "No STI protection"
                        ],
                        ectopicRisk: "If pregnancy occurs (rare), higher chance it's ectopic"
                    },
                    hysteroscopicSterilization: {
                        alsoKnown: "Essure (discontinued 2018)",
                        note: "Removed from market due to complications"
                    },
                    hysterectomy: {
                        note: "Removal of uterus is permanent contraception but NOT done solely for that purpose (major surgery)"
                    }
                },
                maleSterilization: {
                    vasectomy: {
                        procedure: "Vas deferens cut and sealed (blocks sperm from entering semen)",
                        approach: {
                            conventional: "Small incision in scrotum",
                            noScalpel: "Puncture technique (less invasive)"
                        },
                        anesthesia: "Local",
                        setting: "Office procedure (15-30 minutes)",
                        recovery: "Few days; ice, support",
                        effectiveness: {
                            eventual: "0.15% failure (most effective)",
                            delay: "Not immediate - takes ~3 months (20 ejaculations) to clear sperm",
                            confirmation: "Semen analysis at 3 months to confirm no sperm"
                        },
                        advantages: [
                            "Simpler, safer, cheaper than tubal ligation",
                            "Outpatient, local anesthesia",
                            "One-time procedure",
                            "Highly effective",
                            "No effect on testosterone, libido, erection, ejaculation (semen just lacks sperm)"
                        ],
                        disadvantages: [
                            "Intended to be permanent",
                            "Not immediately effective (must use backup method for 3 months)",
                            "Reversal possible but expensive, not always successful",
                            "Procedure discomfort/anxiety",
                            "No STI protection"
                        ],
                        reversal: {
                            procedure: "Vasovasostomy (reconnect vas deferens)",
                            success: "50-90% pregnancy rates (depends on time since vasectomy, surgeon skill)",
                            cost: "Often not covered by insurance",
                            alternative: "Sperm retrieval + IVF/ICSI"
                        }
                    }
                },
                comparison: {
                    vasectomyVsTubal: {
                        vasectomy: "Simpler, safer, cheaper, more effective, local anesthesia, quicker recovery",
                        tubal: "More complex, general anesthesia, surgical risks, more expensive",
                        recommendation: "If couple wants permanent contraception, vasectomy preferred"
                    }
                },
                regret: {
                    rates: "~5-20% (varies by age, circumstances)",
                    highRisk: "Young age at sterilization, life changes (divorce, remarriage, child death)",
                    prevention: "Thorough counseling, consider long-acting reversible methods (IUD, implant) first"
                }
            }
        },
        
        STIProtection: {
            onlyEffectiveMethods: [
                "Abstinence (100%)",
                "Mutual monogamy with uninfected partner",
                "Male condom (latex or polyurethane) - highly effective",
                "Female condom - effective"
            ],
            notProtective: "Hormonal methods, IUDs, sterilization, fertility awareness, withdrawal",
            dualMethod: {
                recommendation: "Use condoms PLUS another method (e.g., pill + condom)",
                benefit: "Pregnancy prevention + STI protection"
            }
        },
        
        choosingAMethod: {
            factors: [
                "Effectiveness (how important is pregnancy prevention?)",
                "Health considerations (contraindications, medical conditions)",
                "Lifestyle (can you remember daily pill? prefer set-and-forget?)",
                "Side effect tolerance",
                "STI risk (need barrier method?)",
                "Future pregnancy plans (want reversible?)",
                "Cost and access",
                "Personal/religious beliefs",
                "Partner involvement"
            ],
            counseling: {
                LARC: {
                    fullName: "Long-Acting Reversible Contraception",
                    methods: "IUD, implant",
                    recommendation: "First-line for most women (most effective, convenient, reversible)",
                    tier1: "LARC recommended by ACOG, AAP for all women, including adolescents"
                },
                adolescents: {
                    recommendation: "LARC preferred; condoms in addition (STI protection)",
                    barriers: "Cost, parental consent (varies by state), misinformation"
                },
                postpartum: {
                    timing: "Can start most methods immediately or at 6-week visit",
                    immediate: "IUD, implant can be inserted before hospital discharge",
                    hormonal: "Progestin-only safe during breastfeeding; wait 3-6 weeks for combined methods",
                    LAM: "Unreliable; use backup method"
                }
            }
        },
        
        applications: [
            "Family planning counseling",
            "Reproductive health education",
            "Preventing unintended pregnancy",
            "STI prevention (condoms)",
            "Treating menstrual disorders (hormonal methods)",
            "Empowering reproductive autonomy",
            "Population health and public health initiatives"
        ]
    };
    
    return content;
}


// Add these methods to the ReproductionAnatomyWorkbook class

// ========================================
// MAIN PROBLEM PROCESSING METHODS
// ========================================

parseReproductionProblem(topic, parameters = {}, subTopic = null, context = {}) {
    let topicType = null;

    // Match topic to handler
    for (const [type, config] of Object.entries(this.reproductionTopics)) {
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
        throw new Error(`Unable to recognize reproduction anatomy topic: ${topic}`);
    }

    return {
        originalTopic: topic,
        type: topicType,
        subTopic: subTopic,
        parameters: { ...parameters },
        context: { ...context },
        difficulty: this.reproductionTopics[topicType].difficulty,
        prerequisites: this.reproductionTopics[topicType].prerequisites,
        parsedAt: new Date().toISOString()
    };
}

handleReproductionProblem(config) {
    const { topic, parameters, subTopic, context, requestType } = config;

    try {
        const isExperimentRequest = requestType === 'experiment' || 
                                   (typeof topic === 'string' && topic.toLowerCase().includes('experiment'));

        if (isExperimentRequest) {
            return this.handleExperimentRequest(config);
        } else {
            this.currentProblem = this.parseReproductionProblem(topic, parameters, subTopic, context);
            this.currentContent = this.getReproductionContent(this.currentProblem);
            
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
            
            this.contentSteps = this.generateReproductionContent(this.currentProblem, this.currentContent);
            
            // Generate workbook (handles async internally)
            this.generateReproductionWorkbook();

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
        throw new Error(`Failed to process reproduction anatomy request: ${error.message}`);
    }
}

getReproductionContent(problem) {
    const handler = this.reproductionTopics[problem.type]?.handler;
    if (!handler) {
        throw new Error(`No handler available for reproduction topic: ${problem.type}`);
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

    // Filter by system (male vs female)
    if (parameters.system) {
        if (parameters.system === 'male' && !filtered.topic.toLowerCase().includes('male')) {
            return null;
        }
        if (parameters.system === 'female' && !filtered.topic.toLowerCase().includes('female')) {
            return null;
        }
    }

    return filtered;
}

handleExperimentRequest(config) {
    const { topic, parameters, experimentId } = config;

    if (experimentId && this.reproductionExperiments[experimentId]) {
        this.currentExperiment = this.reproductionExperiments[experimentId];
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
    for (const [id, exp] of Object.entries(this.reproductionExperiments)) {
        if (exp.name.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    // Related topics match
    for (const [id, exp] of Object.entries(this.reproductionExperiments)) {
        if (exp.relatedTopics.some(t => topicLower.includes(t.toLowerCase()))) {
            return exp;
        }
    }

    // Historical scientist match
    for (const [id, exp] of Object.entries(this.reproductionExperiments)) {
        if (exp.historicalBackground?.scientist?.toLowerCase().includes(topicLower)) {
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
                formatted.push([`  ${key}:`, '']);
                if (Array.isArray(value)) {
                    value.forEach(item => formatted.push(['    -', item]));
                } else {
                    formatted.push(['    ', value]);
                }
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
            labExp.safetyPrecautions.forEach(precaution => {
                formatted.push(['  ⚠', precaution]);
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
                            subValue.forEach(item => formatted.push(['    -', item]));
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

    if (labExp.expectedResults || labExp.expectedObservations) {
        formatted.push(['', '']);
        formatted.push(['Expected Results/Observations', '']);
        const results = labExp.expectedResults || labExp.expectedObservations;
        Object.entries(results).forEach(([key, value]) => {
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

    if (labExp.observations) {
        formatted.push(['', '']);
        formatted.push(['Key Observations', '']);
        if (Array.isArray(labExp.observations)) {
            labExp.observations.forEach(obs => {
                formatted.push(['  •', obs]);
            });
        }
    }

    if (labExp.analysis) {
        formatted.push(['', '']);
        formatted.push(['Analysis', '']);
        if (typeof labExp.analysis === 'object') {
            Object.entries(labExp.analysis).forEach(([key, value]) => {
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
        }
    }

    if (labExp.realWorldApplications) {
        formatted.push(['', '']);
        formatted.push(['Real-World Applications', '']);
        if (typeof labExp.realWorldApplications === 'object') {
            Object.entries(labExp.realWorldApplications).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, '']);
                if (Array.isArray(value)) {
                    value.forEach(app => formatted.push(['    -', app]));
                } else {
                    formatted.push(['    ', value]);
                }
            });
        } else if (Array.isArray(labExp.realWorldApplications)) {
            labExp.realWorldApplications.forEach(app => {
                formatted.push(['  •', app]);
            });
        }
    }

    if (labExp.extensions) {
        formatted.push(['', '']);
        formatted.push(['Extensions', '']);
        if (Array.isArray(labExp.extensions)) {
            labExp.extensions.forEach(ext => {
                formatted.push(['  •', ext]);
            });
        }
    }

    if (labExp.limitations) {
        formatted.push(['', '']);
        formatted.push(['Limitations', '']);
        if (Array.isArray(labExp.limitations)) {
            labExp.limitations.forEach(limit => {
                formatted.push(['  •', limit]);
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
    
    Object.entries(this.reproductionExperiments).forEach(([id, experiment]) => {
        if (experiment.relatedTopics.includes(topicType)) {
            related.push({
                id: id,
                name: experiment.name,
                category: experiment.category,
                historicalScientist: experiment.historicalBackground?.scientist || 
                                    experiment.historicalBackground?.scientists,
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
    return Object.entries(this.reproductionExperiments).map(([id, exp]) => ({
        id: id,
        name: exp.name,
        category: exp.category,
        relatedTopics: exp.relatedTopics,
        scientist: exp.historicalBackground?.scientist || exp.historicalBackground?.scientists,
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
            adapted.focusAreas = ['basic_anatomy', 'simple_functions'];
            break;
        
        case 'intermediate':
            adapted.vocabulary = 'standard';
            adapted.examples = this.selectMixedExamples(content.examples);
            adapted.depth = 'moderate';
            adapted.focusAreas = ['detailed_anatomy', 'hormonal_regulation', 'cycles'];
            break;
        
        case 'advanced':
            adapted.vocabulary = 'technical';
            adapted.examples = this.selectAdvancedExamples(content.examples);
            adapted.depth = 'comprehensive';
            adapted.research = this.addResearchConnections(content);
            adapted.focusAreas = ['molecular_mechanisms', 'clinical_applications', 'pathophysiology'];
            break;
    }

    return adapted;
}

selectBasicExamples(examples) {
    if (!examples || !Array.isArray(examples)) return [];
    return examples.filter(ex => !ex.difficulty || ex.difficulty === 'basic').slice(0, 3);
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
        currentResearch: `Current research in ${content.topic} includes advances in reproductive health, fertility treatments, and developmental biology...`,
        openQuestions: "Unresolved questions include mechanisms of implantation, causes of infertility, and developmental abnormalities...",
        techniques: "Advanced techniques include IVF, ICSI, preimplantation genetic testing, and reproductive endocrinology..."
    };
}

getContextualScenarios(topicType) {
    return this.contextualScenarios[topicType] || [];
}

getMetacognitivePrompts(topicType) {
    const prompts = {
        beforeLearning: this.metacognitivePrompts.beforeLearning.map(p => 
            p.replace('{topic}', this.reproductionTopics[topicType]?.name || topicType)
        ),
        duringLearning: this.metacognitivePrompts.duringLearning.map(p => 
            p.replace('{concept}', topicType)
        ),
        afterLearning: this.metacognitivePrompts.afterLearning.map(p => 
            p.replace('{topic}', this.reproductionTopics[topicType]?.name || topicType)
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

generateReproductionContent(problem, content) {
    const contentSections = [];

    // Generate overview section
    contentSections.push(this.generateOverviewSection(problem, content));

    // Generate anatomy sections
    if (content.primaryOrgans || content.anatomy) {
        contentSections.push(this.generateAnatomySection(content));
    }

    // Generate physiological processes
    if (content.spermatogenesis || content.oogenesis || content.gametogenesis) {
        contentSections.push(this.generateGametogenesisSection(content));
    }

    if (content.ovarianCycle || content.uterineCycle) {
        contentSections.push(this.generateCycleSection(content));
    }

    if (content.fertilizationProcess || content.earlyDevelopment) {
        contentSections.push(this.generateDevelopmentSection(content));
    }

    // Generate hormone regulation sections
    if (content.hormoneRegulation || content.hormonalRegulation) {
        contentSections.push(this.generateHormoneSection(content));
    }

    // Generate clinical applications
    if (content.clinicalApplications || content.applications) {
        contentSections.push(this.generateClinicalSection(content));
    }

    // Add comparisons
    if (content.comparison) {
        contentSections.push(this.generateComparisonsSection(content));
    }

    // Add contextual scenarios
    if (content.contextualScenarios) {
        contentSections.push(this.generateContextualScenariosSection(content));
    }

    // Add related experiments
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
        title: content.topic || problem.originalTopic,
        summary: content.summary,
        category: content.category,
        difficulty: problem.difficulty,
        prerequisites: problem.prerequisites,
        keyDefinitions: content.keyDefinitions
    };
}

generateAnatomySection(content) {
    return {
        type: 'anatomy',
        title: 'Anatomical Structures',
        data: content.primaryOrgans || content.anatomy || content.externalGenitalia
    };
}

generateGametogenesisSection(content) {
    return {
        type: 'gametogenesis',
        title: 'Gamete Formation',
        data: {
            spermatogenesis: content.spermatogenesis,
            oogenesis: content.oogenesis,
            comparison: content.comparison
        }
    };
}

generateCycleSection(content) {
    return {
        type: 'reproductive_cycle',
        title: 'Reproductive Cycles',
        data: {
            ovarianCycle: content.ovarianCycle,
            uterineCycle: content.uterineCycle,
            hormonalRegulation: content.hormonalRegulation
        }
    };
}

generateDevelopmentSection(content) {
    return {
        type: 'development',
        title: 'Fertilization and Development',
        data: {
            fertilization: content.fertilizationProcess,
            earlyDevelopment: content.earlyDevelopment,
            implantation: content.implantation
        }
    };
}

generateHormoneSection(content) {
    return {
        type: 'hormones',
        title: 'Hormonal Regulation',
        data: content.hormoneRegulation || content.hormonalRegulation
    };
}

generateClinicalSection(content) {
    return {
        type: 'clinical',
        title: 'Clinical Applications',
        data: content.clinicalApplications || content.applications
    };
}

generateComparisonsSection(content) {
    return {
        type: 'comparisons',
        title: 'Comparative Analysis',
        data: content.comparison
    };
}

generateContextualScenariosSection(content) {
    return {
        type: 'scenarios',
        title: 'Real-World Contexts',
        data: content.contextualScenarios
    };
}

generateRelatedExperimentsSection(content) {
    return {
        type: 'experiments',
        title: 'Related Experiments',
        data: content.relatedExperiments
    };
}

generateMetacognitiveSection(content) {
    return {
        type: 'metacognitive',
        title: 'Learning Reflection',
        data: content.metacognitivePrompts
    };
}

// ========================================
// REPRODUCTION SPECIFIC HELPER METHODS
// ========================================

getTopicRelevance(topicType) {
    const relevance = {
        male_reproductive_system: "Essential for understanding male fertility, contraception, and reproductive health",
        female_reproductive_system: "Foundation for understanding menstruation, pregnancy, and women's health",
        gametogenesis: "Critical for understanding fertility, genetic inheritance, and assisted reproduction",
        menstrual_cycle: "Key to family planning, fertility awareness, and reproductive disorders",
        fertilization_development: "Basis for understanding pregnancy, prenatal care, and developmental biology",
        reproductive_hormones: "Essential for understanding puberty, fertility, contraception, and endocrine health",
        birth_labor: "Important for expectant parents, healthcare providers, and understanding childbirth",
        contraception: "Critical for family planning, reproductive autonomy, and public health"
    };

    return relevance[topicType] || "Important reproduction anatomy concept";
}

suggestRelatedTopics() {
    if (!this.currentProblem) return [];

    const relatedTopicsMap = {
        male_reproductive_system: ['gametogenesis', 'reproductive_hormones', 'contraception'],
        female_reproductive_system: ['gametogenesis', 'menstrual_cycle', 'reproductive_hormones'],
        gametogenesis: ['male_reproductive_system', 'female_reproductive_system', 'fertilization_development'],
        menstrual_cycle: ['female_reproductive_system', 'reproductive_hormones', 'fertilization_development'],
        fertilization_development: ['gametogenesis', 'menstrual_cycle', 'birth_labor'],
        reproductive_hormones: ['male_reproductive_system', 'female_reproductive_system', 'menstrual_cycle'],
        birth_labor: ['fertilization_development', 'female_reproductive_system'],
        contraception: ['male_reproductive_system', 'female_reproductive_system', 'menstrual_cycle']
    };

    const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];

    return relatedTypes.map(type => ({
        type: type,
        name: this.reproductionTopics[type]?.name,
        description: this.reproductionTopics[type]?.description
    }));
}

generateReproductionDiagramData() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    this.diagramData = {
        type: type,
        diagrams: this.getRelevantReproductionDiagrams(type),
        placeholder: true,
        note: "Diagram generation will include anatomical structures, cycles, and processes"
    };
}

getRelevantReproductionDiagrams(topicType) {
    const diagramMap = {
        male_reproductive_system: ['male_anatomy', 'sperm_structure', 'spermatogenesis'],
        female_reproductive_system: ['female_anatomy', 'ovum_structure', 'oogenesis'],
        gametogenesis: ['meiosis', 'spermatogenesis_stages', 'oogenesis_stages'],
        menstrual_cycle: ['hormone_levels', 'ovarian_cycle', 'uterine_cycle'],
        fertilization_development: ['fertilization_process', 'early_cleavage', 'blastocyst', 'implantation'],
        reproductive_hormones: ['hpg_axis', 'feedback_loops', 'hormone_timeline'],
        birth_labor: ['stages_of_labor', 'fetal_positions', 'cervical_dilation'],
        contraception: ['contraceptive_methods', 'mechanism_diagrams']
    };

    return diagramMap[topicType] || [];
}

generateGlossary() {
    if (!this.currentContent) return {};

    const glossary = {};

    // Extract key definitions
    if (this.currentContent.keyDefinitions) {
        Object.assign(glossary, this.currentContent.keyDefinitions);
    }

    // Extract from anatomy structures
    if (this.currentContent.primaryOrgans) {
        this.extractGlossaryFromAnatomy(this.currentContent.primaryOrgans, glossary);
    }

    // Extract hormone terms
    if (this.currentContent.hormoneRegulation) {
        this.extractGlossaryFromHormones(this.currentContent.hormoneRegulation, glossary);
    }

    return glossary;
}

extractGlossaryFromAnatomy(anatomy, glossary) {
    Object.entries(anatomy).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
            if (value.function) {
                glossary[this.formatKey(key)] = Array.isArray(value.function) ? 
                    value.function[0] : value.function;
            }
            if (value.description) {
                glossary[this.formatKey(key)] = value.description;
            }
        }
    });
}

extractGlossaryFromHormones(hormones, glossary) {
    Object.entries(hormones).forEach(([key, value]) => {
        if (typeof value === 'object' && value.hormone) {
            glossary[value.hormone] = value.action || value.function || 'Reproductive hormone';
        }
    });
}

formatKey(key) {
    return key.split(/(?=[A-Z])/).map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

generateReproductionAnalogy(concept) {
    const analogies = {
        // Male reproductive
        testes: "Like factories that continuously produce products (sperm)",
        epididymis: "Like a storage warehouse where products mature",
        vas_deferens: "Like a highway for rapid transport",
        prostate: "Like adding special fluid to a package for shipping",
        
        // Female reproductive
        ovaries: "Like warehouses with limited inventory (follicles) released monthly",
        fallopian_tubes: "Like conveyor belts moving the egg toward the uterus",
        uterus: "Like a specialized room prepared monthly for a potential guest",
        cervix: "Like a door with adjustable opening and security features",
        
        // Cycles and processes
        menstrual_cycle: "Like a monthly preparation and cleanup cycle",
        ovulation: "Like releasing one item from inventory on schedule",
        fertilization: "Like two puzzle pieces coming together to form a complete picture",
        implantation: "Like a seed planting itself in prepared soil",
        
        // Hormones
        fsh: "Like a boss telling workers to start production",
        lh: "Like a trigger signal to release the product",
        estrogen: "Like a construction manager building up structures",
        progesterone: "Like a maintenance crew keeping everything stable",
        hcg: "Like a 'keep working' signal during early pregnancy",
        
        // Gametes
        sperm: "Like microscopic swimmers racing to a destination",
        ovum: "Like a valuable package waiting to be claimed",
        
        // Development
        zygote: "Like the first cell of a new life blueprint",
        morula: "Like a tiny ball of cells",
        blastocyst: "Like a ball with a special inner group",
        placenta: "Like a supply delivery system and waste removal service"
    };

    return analogies[concept] || "Performs a specialized reproductive function";
}

adaptReproductionLanguage(text, level) {
    if (!text) return '';

    const adaptations = {
        basic: {
            replacements: {
                'spermatogenesis': 'sperm production',
                'oogenesis': 'egg production',
                'gametogenesis': 'sex cell formation',
                'follicular phase': 'first half of cycle',
                'luteal phase': 'second half of cycle',
                'corpus luteum': 'hormone-producing structure after ovulation',
                'endometrium': 'uterine lining',
                'myometrium': 'uterine muscle',
                'zygote': 'fertilized egg',
                'blastocyst': 'early embryo',
                'parturition': 'childbirth'
            }
        },
        intermediate: {
            replacements: {
                'spermatogenesis': 'sperm production (spermatogenesis)',
                'oogenesis': 'egg production (oogenesis)',
                'corpus luteum': 'corpus luteum (post-ovulation structure)'
            }
        },
        advanced: {
            replacements: {
                'spermatogenesis': 'spermatogenesis (via meiosis)',
                'oogenesis': 'oogenesis (arrested meiosis)',
                'corpus luteum': 'corpus luteum (progesterone-secreting structure)'
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

addReproductionConceptualConnections(content) {
    if (!this.includeConceptualConnections) return content;

    const connections = {
        male_reproductive_system: "Testosterone regulates spermatogenesis. Temperature regulation is critical for fertility. Structure supports function.",
        female_reproductive_system: "Hormones coordinate cyclical changes. Structure prepares for potential pregnancy monthly.",
        gametogenesis: "Meiosis creates genetic diversity. Timing differs: continuous (male) vs cyclical (female).",
        menstrual_cycle: "Hormonal feedback loops create predictable patterns. Ovarian and uterine cycles are synchronized.",
        fertilization_development: "Fertilization restores diploid number. Early development occurs during transport to uterus.",
        reproductive_hormones: "HPG axis coordinates reproductive function. Negative and positive feedback regulate cycles.",
        birth_labor: "Positive feedback (oxytocin) drives labor progression. Multiple factors initiate labor.",
        contraception: "Different methods target different parts of reproductive process."
    };

    content.conceptualConnections = connections[this.currentProblem.type] || 
        "This topic connects to broader reproductive biology principles";

    return content;
}

enrichWithReproductionExamples(content) {
    if (!this.includeExamples || content.examples) return content;

    const exampleDatabase = {
        male_reproductive_system: [
            "Cryptorchidism: Undescended testes cause infertility (heat damage)",
            "Varicocele: Enlarged veins increase temperature, reduce sperm count",
            "Anabolic steroid abuse: Suppresses natural testosterone, causes testicular atrophy"
        ],
        female_reproductive_system: [
            "PCOS: Hormonal imbalance affects ovulation, causes irregular periods",
            "Endometriosis: Uterine tissue grows outside uterus, causes pain and infertility",
            "Ovarian cysts: Fluid-filled sacs can affect hormone production"
        ],
        menstrual_cycle: [
            "Athletic amenorrhea: Intense exercise/low body fat disrupts cycles",
            "Stress: Can delay ovulation and lengthen cycles",
            "Birth control pills: Create artificial regular cycles"
        ],
        contraception: [
            "IUD: >99% effective, lasts years, reversible immediately",
            "Condoms: Only method protecting against STIs",
            "Vasectomy: Most effective male contraception"
        ]
    };

    if (exampleDatabase[this.currentProblem.type]) {
        content.examples = content.examples || [];
        content.examples.push(...exampleDatabase[this.currentProblem.type]);
    }

    return content;
}

validateReproductionContent(content) {
    const validationResults = {
        isValid: true,
        warnings: [],
        suggestions: []
    };

    if (!content.topic) {
        validationResults.warnings.push("Missing topic title");
        validationResults.isValid = false;
    }

    if (!content.keyDefinitions) {
        validationResults.suggestions.push("Consider adding key definitions");
    }

    const hasSubstantiveContent = 
        content.anatomy || content.primaryOrgans ||
        content.spermatogenesis || content.oogenesis ||
        content.ovarianCycle || content.uterineCycle ||
        content.fertilizationProcess || content.hormoneRegulation;

    if (!hasSubstantiveContent) {
        validationResults.warnings.push("Limited substantive content");
    }

    return validationResults;
}

calculateReproductionContentCompleteness() {
    if (!this.currentContent) return 0;

    let score = 0;
    const maxScore = 10;

    if (this.currentContent.topic) score += 1;
    if (this.currentContent.summary) score += 1;
    if (this.currentContent.keyDefinitions) score += 1;
    if (this.currentContent.applications) score += 1;
    
    const hasMainContent = 
        this.currentContent.anatomy ||
        this.currentContent.spermatogenesis ||
        this.currentContent.oogenesis ||
        this.currentContent.menstrualCycle;
    if (hasMainContent) score += 3;

    if (this.currentContent.hormoneRegulation) score += 1;
    if (this.currentContent.clinicalApplications) score += 1;
    if (this.currentContent.contextualScenarios) score += 1;

    return Math.round((score / maxScore) * 100);
}

generateReproductionLearningObjectives() {
    if (!this.currentProblem) return [];

    const objectivesDatabase = {
        male_reproductive_system: [
            "Identify the structures of the male reproductive system and their functions",
            "Describe the process of spermatogenesis",
            "Explain hormonal regulation of male reproduction",
            "Relate structure to function in sperm cells"
        ],
        female_reproductive_system: [
            "Identify the structures of the female reproductive system and their functions",
            "Describe the process of oogenesis",
            "Explain the difference between the ovarian and uterine cycles",
            "Understand hormonal regulation of female reproduction"
        ],
        gametogenesis: [
            "Compare and contrast spermatogenesis and oogenesis",
            "Explain the role of meiosis in gamete formation",
            "Describe how genetic diversity is created",
            "Understand timing differences between male and female gametogenesis"
        ],
        menstrual_cycle: [
            "Describe the phases of the ovarian and uterine cycles",
            "Explain hormonal changes throughout the cycle",
            "Understand positive and negative feedback mechanisms",
            "Predict ovulation timing and fertile window"
        ],
        fertilization_development: [
            "Describe the process of fertilization",
            "Explain early embryonic development stages",
            "Understand the process and timing of implantation",
            "Describe placental structure and function"
        ],
        reproductive_hormones: [
            "Identify the major reproductive hormones and their sources",
            "Explain the HPG axis and feedback regulation",
            "Describe hormone functions in reproduction",
            "Understand how hormones coordinate reproductive processes"
        ],
        birth_labor: [
            "Describe the stages of labor",
            "Explain the physiological processes of childbirth",
            "Understand hormonal regulation of labor",
            "Identify potential complications and interventions"
        ],
        contraception: [
            "Compare effectiveness of different contraceptive methods",
            "Explain mechanisms of action for various methods",
            "Understand advantages and disadvantages of each method",
            "Make informed choices about contraception"
        ]
    };

    return objectivesDatabase[this.currentProblem.type] || [
        "Understand key reproductive concepts",
        "Apply knowledge to health contexts",
        "Make connections between structure and function"
    ];
}

identifyReproductionPrerequisites() {
    if (!this.currentProblem) return [];

    const prerequisitesDatabase = {
        male_reproductive_system: [
            "Basic anatomy and physiology",
            "Cell structure and function",
            "Understanding of hormones"
        ],
        female_reproductive_system: [
            "Basic anatomy and physiology",
            "Cell structure and function",
            "Understanding of hormones and cycles"
        ],
        gametogenesis: [
            "Cell division (mitosis and meiosis)",
            "Chromosomes and genetics",
            "Basic reproductive anatomy"
        ],
        menstrual_cycle: [
            "Female reproductive anatomy",
            "Hormone function",
            "Negative and positive feedback"
        ],
        fertilization_development: [
            "Gametogenesis",
            "Cell division",
            "Basic embryology"
        ],
        reproductive_hormones: [
            "Endocrine system basics",
            "Feedback mechanisms",
            "Reproductive anatomy"
        ],
        birth_labor: [
            "Pregnancy and fetal development",
            "Uterine anatomy",
            "Hormone function"
        ],
        contraception: [
            "Reproductive anatomy",
            "Menstrual cycle",
            "Fertilization process"
        ]
    };

    return prerequisitesDatabase[this.currentProblem.type] || [
        "General biology background",
        "Basic human anatomy"
    ];
}

generateReproductionStudyTips() {
    const studyTipsDatabase = {
        male_reproductive_system: [
            "Use 3D models or diagrams to understand spatial relationships",
            "Create flow charts for sperm pathway",
            "Compare and contrast with female system",
            "Relate structures to their functions"
        ],
        female_reproductive_system: [
            "Draw and label diagrams repeatedly",
            "Create comparison tables with male system",
            "Track hormone changes on timeline",
            "Use mnemonic devices for structures"
        ],
        menstrual_cycle: [
            "Draw hormone level graphs for entire cycle",
            "Create timeline showing all simultaneous changes",
            "Use different colors for different hormones",
            "Practice predicting cycle changes"
        ],
        contraception: [
            "Create comparison chart of all methods",
            "Relate each method to mechanism",
            "Practice calculating effectiveness rates",
            "Discuss with healthcare provider"
        ]
    };

    return studyTipsDatabase[this.currentProblem.type] || [
        "Review material regularly with active recall",
        "Create visual aids and diagrams",
        "Practice explaining concepts to others",
        "Relate concepts to real-world health applications"
    ];
}

// Add these methods to the ReproductionAnatomyWorkbook class

// ========================================
// WORKBOOK GENERATION METHODS
// ========================================

generateReproductionWorkbook() {
    if (!this.currentContent || !this.currentProblem) return;

    const workbook = this.createWorkbookStructure();
    workbook.title = 'Reproduction Anatomy Workbook';

    // Start diagram generation in background if needed
    if (this.includeDiagramsInWorkbook) {
        this.diagramsPromise = this.generateReproductionDiagramDataAsync();
    }

    workbook.sections = [
        this.createProblemSection(),
        this.createContentOverviewSection(),
        this.createAnatomySection(),
        this.createPhysiologySection(),
        this.createHormoneSection(),
        this.createDiagramsPlaceholderSection(),
        this.createComparisonsWorkbookSection(),
        this.createClinicalApplicationsSection(),
        this.createContextualScenariosWorkbookSection(),
        this.createRelatedExperimentsWorkbookSection(),
        this.createMisconceptionsSection(),
        this.createMetacognitiveWorkbookSection(),
        this.createAssessmentSection()
    ].filter(section => section !== null);

    this.currentWorkbook = workbook;
}

generateExperimentWorkbook(experimentContent) {
    const workbook = this.createWorkbookStructure();
    workbook.title = 'Reproduction Anatomy Experiment Workbook';

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
                this.reproductionTopics[topic]?.name || topic,
                this.reproductionTopics[topic]?.description || ''
            ])
        });
    }

    this.currentWorkbook = workbook;
}

// Async helper that runs in background
async generateReproductionDiagramDataAsync() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    // Get relevant diagram keys
    const diagramKeys = this.getRelevantReproductionDiagrams(type);

    this.diagramData = {
        type: type,
        diagrams: diagramKeys,
        renderedImages: [],
        status: 'rendering',
        placeholder: false,
        note: "Reproduction anatomy diagrams"
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
        title: 'Anatomical Diagrams',
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
        title: 'Anatomical Diagrams',
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

getRelevantReproductionDiagrams(topicType) {
    const diagramMap = {
        male_reproductive_system: [
            "maleReproductiveSystem",
            "spermStructure",
            "spermatogenesis",
            "testisStructure"
        ],
        female_reproductive_system: [
            "femaleReproductiveSystem",
            "ovaryStructure",
            "oogenesis",
            "uterusLayers"
        ],
        gametogenesis: [
            "meiosis",
            "spermatogenesis",
            "oogenesis",
            "gametogenesisComparison"
        ],
        menstrual_cycle: [
            "menstrualCycleHormones",
            "ovarianCycle",
            "uterineCycle",
            "follicularDevelopment"
        ],
        fertilization_development: [
            "fertilizationProcess",
            "earlyCleavage",
            "blastocystStructure",
            "implantation",
            "placentaStructure"
        ],
        reproductive_hormones: [
            "hpgAxis",
            "hormoneFeedbackLoops",
            "hormoneTimeline",
            "endocrineGlands"
        ],
        birth_labor: [
            "stagesOfLabor",
            "cervicalDilation",
            "fetalPositions",
            "placentalDelivery"
        ],
        contraception: [
            "contraceptiveMethods",
            "iudPlacement",
            "hormonalContraception",
            "barrierMethods"
        ]
    };

    return diagramMap[topicType] || [];
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

// Get workbook status
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
        title: 'Reproduction Anatomy Workbook',
        timestamp: new Date().toISOString(),
        theme: this.theme,
        dimensions: { width: this.width, height: this.height },
        learnerLevel: this.learnerProfile.currentLevel,
        sections: []
    };
}

// ========================================
// SECTION CREATION METHODS
// ========================================

createProblemSection() {
    if (!this.currentProblem) return null;

    return {
        title: 'Topic Overview',
        type: 'problem',
        data: [
            ['Topic', this.currentProblem.originalTopic],
            ['Category', this.reproductionTopics[this.currentProblem.type]?.category || 'General'],
            ['Difficulty Level', this.currentProblem.difficulty],
            ['Prerequisites', this.currentProblem.prerequisites?.join(', ') || 'None'],
            ['Parsed At', new Date(this.currentProblem.parsedAt).toLocaleString()]
        ]
    };
}

createContentOverviewSection() {
    if (!this.currentContent) return null;

    const overview = {
        title: 'Content Overview',
        type: 'overview',
        data: []
    };

    if (this.currentContent.topic) {
        overview.data.push(['Topic', this.currentContent.topic]);
    }

    if (this.currentContent.summary) {
        overview.data.push(['Summary', this.currentContent.summary]);
    }

    if (this.currentContent.category) {
        overview.data.push(['Category', this.currentContent.category]);
    }

    // Add key definitions if available
    if (this.currentContent.keyDefinitions) {
        overview.data.push(['', '']);
        overview.data.push(['Key Definitions', '']);
        Object.entries(this.currentContent.keyDefinitions).forEach(([term, definition]) => {
            overview.data.push([`  ${term}`, definition]);
        });
    }

    return overview;
}

createAnatomySection() {
    if (!this.currentContent) return null;

    const anatomyData = this.currentContent.primaryOrgans || 
                       this.currentContent.anatomy || 
                       this.currentContent.externalGenitalia;

    if (!anatomyData) return null;

    return {
        title: 'Anatomical Structures',
        type: 'anatomy',
        data: this.formatAnatomyData(anatomyData)
    };
}

formatAnatomyData(anatomyData) {
    const formatted = [];

    Object.entries(anatomyData).forEach(([key, value]) => {
        formatted.push([this.formatKey(key).toUpperCase(), '']);
        
        if (typeof value === 'object' && value !== null) {
            if (value.location) {
                formatted.push(['  Location', value.location]);
            }
            if (value.structure) {
                formatted.push(['  Structure', '']);
                if (typeof value.structure === 'object') {
                    Object.entries(value.structure).forEach(([structKey, structValue]) => {
                        formatted.push([`    ${this.formatKey(structKey)}`, 
                            typeof structValue === 'object' ? JSON.stringify(structValue) : structValue]);
                    });
                } else {
                    formatted.push(['    ', value.structure]);
                }
            }
            if (value.function) {
                formatted.push(['  Function', '']);
                if (Array.isArray(value.function)) {
                    value.function.forEach(func => formatted.push(['    -', func]));
                } else {
                    formatted.push(['    ', value.function]);
                }
            }
        }
        formatted.push(['', '']);
    });

    return formatted;
}

createPhysiologySection() {
    if (!this.currentContent) return null;

    const physiologyData = this.currentContent.spermatogenesis || 
                          this.currentContent.oogenesis ||
                          this.currentContent.menstrualCycle ||
                          this.currentContent.fertilizationProcess;

    if (!physiologyData) return null;

    return {
        title: 'Physiological Processes',
        type: 'physiology',
        data: this.formatPhysiologyData(physiologyData)
    };
}

formatPhysiologyData(physiologyData) {
    const formatted = [];

    if (physiologyData.definition) {
        formatted.push(['Definition', physiologyData.definition]);
        formatted.push(['', '']);
    }

    if (physiologyData.stages) {
        formatted.push(['Stages', '']);
        physiologyData.stages.forEach((stage, index) => {
            formatted.push([`  Stage ${index + 1}:`, stage.stage || stage.step || stage.phase]);
            if (stage.description) {
                formatted.push(['    Description', stage.description]);
            }
            if (stage.cells) {
                formatted.push(['    Cells', stage.cells]);
            }
            if (stage.process) {
                formatted.push(['    Process', stage.process]);
            }
            if (stage.product) {
                formatted.push(['    Product', stage.product]);
            }
            formatted.push(['', '']);
        });
    }

    if (physiologyData.phases) {
        formatted.push(['Phases', '']);
        physiologyData.phases.forEach(phase => {
            formatted.push([`  ${phase.phase || phase.name}:`, '']);
            if (phase.days) {
                formatted.push(['    Days', phase.days]);
            }
            if (phase.events) {
                formatted.push(['    Events', '']);
                if (Array.isArray(phase.events)) {
                    phase.events.forEach(event => formatted.push(['      -', event]));
                }
            }
            formatted.push(['', '']);
        });
    }

    return formatted;
}

createHormoneSection() {
    if (!this.currentContent) return null;

    const hormoneData = this.currentContent.hormoneRegulation || 
                       this.currentContent.hormonalRegulation;

    if (!hormoneData) return null;

    return {
        title: 'Hormonal Regulation',
        type: 'hormones',
        data: this.formatHormoneData(hormoneData)
    };
}

formatHormoneData(hormoneData) {
    const formatted = [];

    Object.entries(hormoneData).forEach(([level, data]) => {
        formatted.push([this.formatKey(level).toUpperCase(), '']);
        
        if (typeof data === 'object' && data !== null) {
            if (data.hormone) {
                formatted.push(['  Hormone', data.hormone]);
            }
            if (data.target) {
                formatted.push(['  Target', data.target]);
            }
            if (data.action) {
                formatted.push(['  Action', '']);
                if (Array.isArray(data.action)) {
                    data.action.forEach(action => formatted.push(['    -', action]));
                } else {
                    formatted.push(['    ', data.action]);
                }
            }
            if (data.feedback) {
                formatted.push(['  Feedback', data.feedback]);
            }
        }
        formatted.push(['', '']);
    });

    return formatted;
}

createComparisonsWorkbookSection() {
    if (!this.currentContent || !this.currentContent.comparison) return null;

    return {
        title: 'Comparative Analysis',
        type: 'comparisons',
        data: this.formatComparisonsData(this.currentContent.comparison)
    };
}

formatComparisonsData(comparison) {
    const formatted = [];

    Object.entries(comparison).forEach(([key, value]) => {
        formatted.push([this.formatKey(key).toUpperCase(), '']);
        
        if (typeof value === 'object' && value !== null) {
            Object.entries(value).forEach(([aspect, detail]) => {
                formatted.push([`  ${this.formatKey(aspect)}`, '']);
                if (Array.isArray(detail)) {
                    detail.forEach(item => formatted.push(['    -', item]));
                } else {
                    formatted.push(['    ', detail]);
                }
            });
        }
        formatted.push(['', '']);
    });

    return formatted;
}

createClinicalApplicationsSection() {
    if (!this.currentContent) return null;

    const clinicalData = this.currentContent.clinicalApplications || 
                        this.currentContent.applications;

    if (!clinicalData) return null;

    return {
        title: 'Clinical Applications',
        type: 'clinical',
        data: this.formatClinicalData(clinicalData)
    };
}

formatClinicalData(clinicalData) {
    const formatted = [];

    if (Array.isArray(clinicalData)) {
        clinicalData.forEach(application => {
            formatted.push(['•', application]);
        });
    } else if (typeof clinicalData === 'object') {
        Object.entries(clinicalData).forEach(([category, applications]) => {
            formatted.push([this.formatKey(category).toUpperCase(), '']);
            if (Array.isArray(applications)) {
                applications.forEach(app => formatted.push(['  -', app]));
            } else if (typeof applications === 'object') {
                Object.entries(applications).forEach(([key, value]) => {
                    formatted.push([`  ${this.formatKey(key)}`, value]);
                });
            }
            formatted.push(['', '']);
        });
    }

    return formatted;
}

createContextualScenariosWorkbookSection() {
    if (!this.includeExamples || !this.currentContent?.contextualScenarios) return null;

    return {
        title: 'Real-World Scenarios',
        type: 'scenarios',
        data: this.formatContextualScenarios(this.currentContent.contextualScenarios)
    };
}

formatContextualScenarios(scenarios) {
    const formatted = [];

    if (Array.isArray(scenarios)) {
        scenarios.forEach((scenario, index) => {
            formatted.push([`Scenario ${index + 1}`, scenario.scenario || scenario]);
            if (scenario.context) {
                formatted.push(['  Context', scenario.context]);
            }
            if (scenario.application) {
                formatted.push(['  Application', scenario.application]);
            }
            if (scenario.question) {
                formatted.push(['  Question', scenario.question]);
            }
            formatted.push(['', '']);
        });
    } else if (typeof scenarios === 'object') {
        Object.entries(scenarios).forEach(([key, value]) => {
            formatted.push([this.formatKey(key), value]);
        });
    }

    return formatted;
}

createRelatedExperimentsWorkbookSection() {
    if (!this.includeExperiments || !this.currentContent?.relatedExperiments) return null;

    return {
        title: 'Related Experiments',
        type: 'experiments',
        data: this.formatRelatedExperiments(this.currentContent.relatedExperiments)
    };
}

formatRelatedExperiments(experiments) {
    const formatted = [];

    experiments.forEach((exp, index) => {
        formatted.push([`Experiment ${index + 1}`, exp.name]);
        if (exp.category) {
            formatted.push(['  Category', exp.category]);
        }
        if (exp.historicalScientist) {
            formatted.push(['  Scientist', exp.historicalScientist]);
        }
        if (exp.labTitle) {
            formatted.push(['  Lab Title', exp.labTitle]);
        }
        formatted.push(['', '']);
    });

    return formatted;
}

createMisconceptionsSection() {
    if (!this.includeCommonMisconceptions) return null;

    const misconceptions = this.commonMisconceptions[this.currentProblem?.type];
    if (!misconceptions || misconceptions.length === 0) return null;

    return {
        title: 'Common Misconceptions',
        type: 'misconceptions',
        data: misconceptions.map(misc => ['⚠', misc])
    };
}

createMetacognitiveWorkbookSection() {
    if (!this.metacognitiveSupport || !this.currentContent?.metacognitivePrompts) return null;

    const formatted = [];

    formatted.push(['Before Learning', '']);
    if (this.currentContent.metacognitivePrompts.beforeLearning) {
        this.currentContent.metacognitivePrompts.beforeLearning.forEach(prompt => {
            formatted.push(['  •', prompt]);
        });
    }

    formatted.push(['', '']);
    formatted.push(['During Learning', '']);
    if (this.currentContent.metacognitivePrompts.duringLearning) {
        this.currentContent.metacognitivePrompts.duringLearning.forEach(prompt => {
            formatted.push(['  •', prompt]);
        });
    }

    formatted.push(['', '']);
    formatted.push(['After Learning', '']);
    if (this.currentContent.metacognitivePrompts.afterLearning) {
        this.currentContent.metacognitivePrompts.afterLearning.forEach(prompt => {
            formatted.push(['  •', prompt]);
        });
    }

    return {
        title: 'Learning Reflection',
        type: 'metacognitive',
        data: formatted
    };
}

createAssessmentSection() {
    if (!this.assessmentFeedback) return null;

    const objectives = this.generateReproductionLearningObjectives();
    const prerequisites = this.identifyReproductionPrerequisites();
    const studyTips = this.generateReproductionStudyTips();

    const formatted = [];

    formatted.push(['Learning Objectives', '']);
    objectives.forEach(obj => formatted.push(['  •', obj]));

    formatted.push(['', '']);
    formatted.push(['Prerequisites', '']);
    prerequisites.forEach(prereq => formatted.push(['  •', prereq]));

    formatted.push(['', '']);
    formatted.push(['Study Tips', '']);
    studyTips.forEach(tip => formatted.push(['  •', tip]));

    return {
        title: 'Assessment and Learning Guide',
        type: 'assessment',
        data: formatted
    };
}

// ========================================
// UTILITY EXPORT METHODS
// ========================================

getWorkbookSummary() {
    if (!this.currentWorkbook) return null;

    return {
        title: this.currentWorkbook.title,
        timestamp: this.currentWorkbook.timestamp,
        sectionCount: this.currentWorkbook.sections.length,
        sections: this.currentWorkbook.sections.map(s => ({
            title: s.title,
            type: s.type
        })),
        hasDiagrams: this.areDiagramsReady(),
        learnerLevel: this.learnerProfile.currentLevel
    };
}

exportWorkbookData() {
    return {
        workbook: this.currentWorkbook,
        problem: this.currentProblem,
        content: this.currentContent,
        diagrams: this.diagramData,
        learnerProfile: this.learnerProfile
    };
}

// Export the class
export default ReproductionAnatomyWorkbook;
