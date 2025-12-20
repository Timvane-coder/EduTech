
// Enhanced Reproduction Biology Workbook - Comprehensive Reproductive Biology Content System
import * as math from 'mathjs';

export class EnhancedReproductionBiologyWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "reproductive";
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
        this.explanationLevel = options.explanationLevel || 'intermediate';
        this.includeVisualizations = options.includeVisualizations !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeExamples = options.includeExamples !== false;
        this.includeComparisons = options.includeComparisons !== false;
        this.includeCommonMisconceptions = options.includeCommonMisconceptions !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.detailLevel = options.detailLevel || 'detailed';

        this.biologicalSymbols = this.initializeBiologicalSymbols();
        this.setThemeColors();
        this.initializeReproductionTopics();
        this.initializeMisconceptionDatabase();
        this.initializeExplanationTemplates();
        this.initializeReproductionLessons();
    }

    setThemeColors() {
        const themes = {
            reproductive: {
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
                stepBg: '#fce4ec',
                stepText: '#880e4f',
                borderColor: '#ba68c8',
                contentBg: '#e8eaf6',
                contentText: '#311b92',
                diagramBg: '#ede7f6',
                structureBg: '#f8bbd0'
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

        this.colors = themes[this.theme] || themes.reproductive;
    }

    initializeBiologicalSymbols() {
        return {
            'male': '♂',
            'female': '♀',
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
            'estrogen': 'E₂',
            'testosterone': 'T',
            'progesterone': 'P₄'
        };
    }

    initializeReproductionTopics() {
        this.reproductionTopics = {
            // 1. Asexual Reproduction
            asexual_reproduction: {
                patterns: [
                    /asexual.*reproduction/i,
                    /binary.*fission|budding|fragmentation/i,
                    /vegetative.*propagation/i,
                    /cloning|parthenogenesis/i
                ],
                handler: this.handleAsexualReproduction.bind(this),
                name: 'Asexual Reproduction',
                category: 'reproduction_types',
                description: 'Reproduction without fusion of gametes'
            },

            // 2. Sexual Reproduction
            sexual_reproduction: {
                patterns: [
                    /sexual.*reproduction/i,
                    /gamete.*formation|gametogenesis/i,
                    /fertilization|zygote/i,
                    /meiosis.*reproduction/i
                ],
                handler: this.handleSexualReproduction.bind(this),
                name: 'Sexual Reproduction',
                category: 'reproduction_types',
                description: 'Reproduction involving fusion of male and female gametes'
            },

            // 3. Human Reproductive System
            human_reproductive_system: {
                patterns: [
                    /human.*reproductive.*system/i,
                    /male.*reproductive|female.*reproductive/i,
                    /reproductive.*organs|reproductive.*anatomy/i,
                    /testes|ovaries|uterus/i
                ],
                handler: this.handleHumanReproductiveSystem.bind(this),
                name: 'Human Reproductive System',
                category: 'human_reproduction',
                description: 'Anatomy and physiology of human reproductive organs'
            },

            // 4. Gametogenesis
            gametogenesis: {
                patterns: [
                    /gametogenesis|spermatogenesis|oogenesis/i,
                    /gamete.*formation|sperm.*formation|egg.*formation/i,
                    /meiosis.*gamete/i
                ],
                handler: this.handleGametogenesis.bind(this),
                name: 'Gametogenesis',
                category: 'reproductive_processes',
                description: 'Formation of male and female gametes'
            },

            // 5. Fertilization
            fertilization: {
                patterns: [
                    /fertilization/i,
                    /sperm.*egg|conception/i,
                    /zygote.*formation/i,
                    /acrosome.*reaction/i
                ],
                handler: this.handleFertilization.bind(this),
                name: 'Fertilization',
                category: 'reproductive_processes',
                description: 'Fusion of sperm and egg to form zygote'
            },

            // 6. Embryonic Development
            embryonic_development: {
                patterns: [
                    /embryonic.*development|embryogenesis/i,
                    /cleavage|blastula|gastrula/i,
                    /germ.*layers|organogenesis/i,
                    /fetal.*development/i
                ],
                handler: this.handleEmbryonicDevelopment.bind(this),
                name: 'Embryonic Development',
                category: 'development',
                description: 'Development from zygote to embryo'
            },

            // 7. Pregnancy and Birth
            pregnancy_birth: {
                patterns: [
                    /pregnancy|gestation/i,
                    /prenatal.*development/i,
                    /birth|parturition|labor/i,
                    /placenta|umbilical.*cord/i
                ],
                handler: this.handlePregnancyBirth.bind(this),
                name: 'Pregnancy and Birth',
                category: 'human_reproduction',
                description: 'Gestation and the birth process'
            },

            // 8. Reproductive Hormones
            reproductive_hormones: {
                patterns: [
                    /reproductive.*hormones/i,
                    /estrogen|progesterone|testosterone/i,
                    /FSH|LH|GnRH/i,
                    /hormonal.*regulation.*reproduction/i
                ],
                handler: this.handleReproductiveHormones.bind(this),
                name: 'Reproductive Hormones',
                category: 'reproductive_physiology',
                description: 'Hormones controlling reproductive functions'
            },

            // 9. Menstrual Cycle
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
                description: 'Monthly reproductive cycle in females'
            },

            // 10. Plant Reproduction
            plant_reproduction: {
                patterns: [
                    /plant.*reproduction/i,
                    /flower.*structure|pollination/i,
                    /seed.*formation|fruit.*development/i,
                    /alternation.*generations/i
                ],
                handler: this.handlePlantReproduction.bind(this),
                name: 'Plant Reproduction',
                category: 'plant_reproduction',
                description: 'Sexual and asexual reproduction in plants'
            },

            // 11. Reproductive Technologies
            reproductive_technologies: {
                patterns: [
                    /reproductive.*technology|assisted.*reproduction/i,
                    /IVF|in.*vitro.*fertilization/i,
                    /contraception|birth.*control/i,
                    /cloning|genetic.*engineering/i
                ],
                handler: this.handleReproductiveTechnologies.bind(this),
                name: 'Reproductive Technologies',
                category: 'applied_reproduction',
                description: 'Medical and biotechnological applications'
            },

            // 12. Developmental Biology
            developmental_biology: {
                patterns: [
                    /developmental.*biology/i,
                    /morphogenesis|differentiation/i,
                    /pattern.*formation|cell.*fate/i,
                    /developmental.*genes|hox.*genes/i
                ],
                handler: this.handleDevelopmentalBiology.bind(this),
                name: 'Developmental Biology',
                category: 'development',
                description: 'Mechanisms controlling development'
            }
        };
    }

    initializeReproductionLessons() {
        this.lessons = {
            asexual_reproduction: {
                title: "Asexual Reproduction",
                concepts: [
                    "Asexual reproduction produces genetically identical offspring",
                    "No fusion of gametes required",
                    "Single parent produces offspring",
                    "Faster than sexual reproduction"
                ],
                theory: "Asexual reproduction involves the production of offspring from a single parent without the fusion of gametes. Offspring are genetically identical clones of the parent, inheriting all genetic material through mitotic cell division.",
                keyDefinitions: {
                    "Asexual Reproduction": "Reproduction without gamete fusion, producing genetically identical offspring",
                    "Clone": "Genetically identical copy of an organism",
                    "Binary Fission": "Cell division into two equal daughter cells",
                    "Budding": "New organism develops as outgrowth from parent",
                    "Fragmentation": "Parent breaks into pieces that regenerate",
                    "Parthenogenesis": "Development from unfertilized egg"
                },
                mainCategories: [
                    "Binary fission (bacteria, protists)",
                    "Budding (yeast, hydra)",
                    "Fragmentation (planaria, starfish)",
                    "Vegetative propagation (plants)",
                    "Parthenogenesis (some insects, reptiles)"
                ],
                applications: [
                    "Plant propagation in agriculture",
                    "Cloning for research and medicine",
                    "Understanding evolutionary strategies",
                    "Biotechnology applications"
                ]
            },

            sexual_reproduction: {
                title: "Sexual Reproduction",
                concepts: [
                    "Sexual reproduction involves fusion of gametes",
                    "Produces genetically diverse offspring",
                    "Requires two parents (usually)",
                    "Involves meiosis and fertilization"
                ],
                theory: "Sexual reproduction is the production of offspring through the fusion of haploid gametes (sex cells) from two parents. This process generates genetic diversity through meiosis and random fertilization, providing advantages for adaptation and evolution.",
                keyDefinitions: {
                    "Sexual Reproduction": "Reproduction involving gamete fusion from two parents",
                    "Gamete": "Haploid sex cell (sperm or egg)",
                    "Fertilization": "Fusion of sperm and egg nuclei",
                    "Zygote": "Diploid cell formed by fertilization",
                    "Meiosis": "Cell division producing haploid gametes",
                    "Genetic Variation": "Differences in DNA between individuals"
                },
                mainCategories: [
                    "Gametogenesis (gamete production)",
                    "Fertilization (gamete fusion)",
                    "Embryonic development",
                    "Genetic recombination mechanisms"
                ],
                applications: [
                    "Understanding genetic diseases",
                    "Breeding programs",
                    "Conservation biology",
                    "Evolutionary biology"
                ]
            },

            human_reproductive_system: {
                title: "Human Reproductive System",
                concepts: [
                    "Males produce sperm in testes",
                    "Females produce eggs in ovaries",
                    "Hormones regulate reproductive functions",
                    "Specialized structures support reproduction"
                ],
                theory: "The human reproductive system consists of organs, glands, and supporting structures specialized for producing gametes, supporting fertilization, and (in females) nurturing developing offspring. The system is regulated by complex hormonal interactions.",
                keyDefinitions: {
                    "Testes": "Male gonads producing sperm and testosterone",
                    "Ovaries": "Female gonads producing eggs and hormones",
                    "Uterus": "Organ where fetal development occurs",
                    "Gamete": "Sex cell (sperm or egg)",
                    "Gonad": "Organ producing gametes",
                    "Accessory Organs": "Structures supporting reproductive function"
                },
                mainCategories: [
                    "Male reproductive anatomy and function",
                    "Female reproductive anatomy and function",
                    "Hormonal regulation",
                    "Gametogenesis"
                ],
                applications: [
                    "Understanding reproductive health",
                    "Fertility treatments",
                    "Contraception methods",
                    "Disease diagnosis and treatment"
                ]
            },

            gametogenesis: {
                title: "Gametogenesis - Gamete Formation",
                concepts: [
                    "Spermatogenesis produces four functional sperm",
                    "Oogenesis produces one functional egg",
                    "Both involve meiosis",
                    "Gametes are haploid (n)"
                ],
                theory: "Gametogenesis is the process of producing haploid gametes from diploid germ cells through meiosis. Spermatogenesis (male) and oogenesis (female) differ in timing, continuity, and the number of functional gametes produced.",
                keyDefinitions: {
                    "Gametogenesis": "Formation of gametes (sex cells)",
                    "Spermatogenesis": "Production of sperm in testes",
                    "Oogenesis": "Production of eggs in ovaries",
                    "Meiosis": "Reduction division producing haploid cells",
                    "Polar Body": "Small, nonfunctional cell from oogenesis",
                    "Spermatid": "Immature sperm cell"
                },
                mainCategories: [
                    "Spermatogenesis process and regulation",
                    "Oogenesis process and regulation",
                    "Meiotic divisions",
                    "Gamete maturation"
                ],
                applications: [
                    "Understanding infertility",
                    "Assisted reproductive technologies",
                    "Genetic counseling",
                    "Research on meiotic errors"
                ]
            },

            fertilization: {
                title: "Fertilization Process",
                concepts: [
                    "Sperm must penetrate egg protective layers",
                    "Only one sperm fertilizes the egg",
                    "Forms diploid zygote",
                    "Triggers egg activation"
                ],
                theory: "Fertilization is the fusion of haploid sperm and egg nuclei to form a diploid zygote. This complex process involves sperm capacitation, acrosome reaction, sperm-egg membrane fusion, and blocks to polyspermy.",
                keyDefinitions: {
                    "Fertilization": "Fusion of sperm and egg",
                    "Capacitation": "Sperm maturation in female tract",
                    "Acrosome Reaction": "Release of enzymes from sperm head",
                    "Zygote": "Fertilized egg (2n)",
                    "Polyspermy": "Multiple sperm fertilizing one egg",
                    "Cortical Reaction": "Egg's block to polyspermy"
                },
                mainCategories: [
                    "Sperm preparation and capacitation",
                    "Sperm-egg recognition and binding",
                    "Membrane fusion",
                    "Prevention of polyspermy"
                ],
                applications: [
                    "In vitro fertilization (IVF)",
                    "Understanding fertility problems",
                    "Contraceptive development",
                    "Reproductive medicine"
                ]
            },

            embryonic_development: {
                title: "Embryonic Development",
                concepts: [
                    "Development begins with zygote",
                    "Cleavage produces multicellular embryo",
                    "Gastrulation forms germ layers",
                    "Organogenesis forms organs"
                ],
                theory: "Embryonic development is the process by which a single-celled zygote develops into a complex multicellular organism. This involves coordinated cell division, differentiation, and morphogenesis guided by genetic and environmental factors.",
                keyDefinitions: {
                    "Cleavage": "Rapid cell divisions without growth",
                    "Blastula": "Hollow ball of cells",
                    "Gastrulation": "Formation of three germ layers",
                    "Germ Layers": "Ectoderm, mesoderm, endoderm",
                    "Organogenesis": "Formation of organs",
                    "Morphogenesis": "Development of body form"
                },
                mainCategories: [
                    "Cleavage and blastulation",
                    "Gastrulation and germ layer formation",
                    "Neurulation",
                    "Organogenesis"
                ],
                applications: [
                    "Understanding birth defects",
                    "Stem cell research",
                    "Regenerative medicine",
                    "Developmental toxicology"
                ]
            },

            pregnancy_birth: {
                title: "Pregnancy and Birth",
                concepts: [
                    "Pregnancy lasts approximately 40 weeks",
                    "Placenta provides nutrients and oxygen",
                    "Fetus develops in stages",
                    "Birth involves hormonal triggers"
                ],
                theory: "Pregnancy (gestation) is the period of fetal development in the uterus. The placenta mediates maternal-fetal exchange, while hormones coordinate development and prepare for birth. Labor and delivery involve coordinated uterine contractions.",
                keyDefinitions: {
                    "Pregnancy": "Period of fetal development (gestation)",
                    "Placenta": "Organ mediating maternal-fetal exchange",
                    "Umbilical Cord": "Connection between fetus and placenta",
                    "Amniotic Fluid": "Protective fluid surrounding fetus",
                    "Labor": "Process of childbirth",
                    "Parturition": "Act of giving birth"
                },
                mainCategories: [
                    "Implantation and placenta formation",
                    "Fetal development stages",
                    "Maternal changes during pregnancy",
                    "Labor and delivery"
                ],
                applications: [
                    "Prenatal care",
                    "Obstetrics",
                    "Understanding pregnancy complications",
                    "Neonatal care"
                ]
            },

            reproductive_hormones: {
                title: "Reproductive Hormones",
                concepts: [
                    "Hypothalamus releases GnRH",
                    "Pituitary releases FSH and LH",
                    "Gonads produce sex hormones",
                    "Negative and positive feedback regulate hormones"
                ],
                theory: "Reproductive hormones regulate gamete production, sexual development, and reproductive behaviors through the hypothalamic-pituitary-gonadal (HPG) axis. Complex feedback loops maintain hormonal balance.",
                keyDefinitions: {
                    "GnRH": "Gonadotropin-releasing hormone from hypothalamus",
                    "FSH": "Follicle-stimulating hormone",
                    "LH": "Luteinizing hormone",
                    "Testosterone": "Primary male sex hormone",
                    "Estrogen": "Primary female sex hormone",
                    "Progesterone": "Hormone maintaining pregnancy"
                },
                mainCategories: [
                    "Hypothalamic hormones",
                    "Pituitary gonadotropins",
                    "Gonadal steroids",
                    "Feedback mechanisms"
                ],
                applications: [
                    "Hormone replacement therapy",
                    "Contraception",
                    "Fertility treatments",
                    "Understanding endocrine disorders"
                ]
            },

            menstrual_cycle: {
                title: "Menstrual Cycle",
                concepts: [
                    "Average cycle is 28 days",
                    "Ovulation occurs mid-cycle",
                    "Coordinated ovarian and uterine changes",
                    "Hormones regulate the cycle"
                ],
                theory: "The menstrual cycle is a recurring series of physiological changes in the female reproductive system. It involves coordinated ovarian follicle development, ovulation, and uterine preparation for potential pregnancy.",
                keyDefinitions: {
                    "Menstrual Cycle": "Monthly reproductive cycle",
                    "Follicular Phase": "Development of ovarian follicle",
                    "Ovulation": "Release of egg from ovary",
                    "Luteal Phase": "Post-ovulation phase",
                    "Menstruation": "Shedding of uterine lining",
                    "Corpus Luteum": "Structure producing progesterone"
                },
                mainCategories: [
                    "Ovarian cycle phases",
                    "Uterine cycle phases",
                    "Hormonal regulation",
                    "Menstruation"
                ],
                applications: [
                    "Understanding fertility",
                    "Contraception timing",
                    "Diagnosing reproductive disorders",
                    "Family planning"
                ]
            },

            plant_reproduction: {
                title: "Plant Reproduction",
                concepts: [
                    "Plants have alternation of generations",
                    "Flowers are reproductive structures",
                    "Pollination transfers pollen",
                    "Seeds contain plant embryos"
                ],
                theory: "Plant reproduction involves both sexual (flowers, seeds) and asexual (vegetative) mechanisms. The life cycle alternates between haploid gametophyte and diploid sporophyte generations.",
                keyDefinitions: {
                    "Alternation of Generations": "Alternating haploid and diploid phases",
                    "Sporophyte": "Diploid plant producing spores",
                    "Gametophyte": "Haploid plant producing gametes",
                    "Pollination": "Transfer of pollen to stigma",
                    "Double Fertilization": "Unique flowering plant process",
                    "Seed": "Embryo with stored food and protective coat"
                },
                mainCategories: [
                    "Flower structure and function",
                    "Pollination mechanisms",
                    "Fertilization and seed development",
                    "Vegetative reproduction"
                ],
                applications: [
                    "Agriculture and crop breeding",
                    "Horticulture",
                    "Plant conservation",
                    "Understanding evolution"
                ]
            },

            reproductive_technologies: {
                title: "Reproductive Technologies",
                concepts: [
                    "IVF combines eggs and sperm in lab",
                    "Contraception prevents pregnancy",
                    "Cloning creates genetic copies",
                    "Technologies raise ethical questions"
                ],
                theory: "Reproductive technologies encompass medical and scientific techniques to assist, prevent, or manipulate reproduction. These include fertility treatments, contraception, genetic screening, and cloning.",
                keyDefinitions: {
                    "IVF": "In vitro fertilization - fertilization outside body",
                    "Artificial Insemination": "Sperm placed directly in reproductive tract",
                    "Contraception": "Methods preventing pregnancy",
                    "Cloning": "Creating genetic copy of organism",
                    "Surrogacy": "Woman carries pregnancy for others",
                    "Genetic Screening": "Testing for genetic conditions"
                },
                mainCategories: [
                    "Assisted reproductive technologies (ART)",
                    "Contraceptive methods",
                    "Cloning techniques",
                    "Genetic technologies"
                ],
                applications: [
                    "Treating infertility",
                    "Family planning",
                    "Research and medicine",
                    "Livestock breeding"
                ]
            },

            developmental_biology: {
                title: "Developmental Biology",
                concepts: [
                    "Development is genetically programmed",
                    "Cell differentiation creates specialized cells",
                    "Pattern formation establishes body plan",
                    "Environmental factors influence development"
                ],
                theory: "Developmental biology studies the mechanisms controlling the development of organisms from fertilized egg to adult. This involves understanding genetic regulation, cell-cell signaling, differentiation, and morphogenesis.",
                keyDefinitions: {
                    "Differentiation": "Process by which cells become specialized",
                    "Morphogenesis": "Development of organism's shape and form",
                    "Pattern Formation": "Spatial organization of tissues",
                    "Cell Fate": "Developmental destiny of a cell",
                    "Induction": "One cell group influencing another's development",
                    "Hox Genes": "Genes controlling body pattern"
                },
                mainCategories: [
                    "Genetic control of development",
                    "Cell differentiation mechanisms",
                    "Pattern formation",
                    "Developmental signaling"
                ],
                applications: [
                    "Understanding birth defects",
                    "Regenerative medicine",
                    "Stem cell research",
                    "Cancer research"
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            asexual_reproduction: {
                'General Misconceptions': [
                    'Thinking asexual reproduction is inferior (it has advantages in stable environments)',
                    'Believing all organisms can reproduce both ways (most specialize in one)',
                    'Confusing asexual reproduction with sexual reproduction without mating'
                ],
                'Clone Misunderstanding': [
                    'Thinking clones are identical in every way (environment affects expression)',
                    'Believing cloning is unnatural (many organisms naturally clone)',
                    'Assuming clones have same age as parent (they start as new individuals)'
                ]
            },
            sexual_reproduction: {
                'Genetic Variation': [
                    'Thinking offspring get exactly 50% DNA from each parent (it averages 50% but varies)',
                    'Believing sexual reproduction always requires male and female organisms',
                    'Confusing sexual reproduction with sexual behavior'
                ],
                'Meiosis Misconceptions': [
                    'Thinking meiosis is just two mitotic divisions',
                    'Not understanding when crossing over occurs',
                    'Confusing homologous chromosomes with sister chromatids'
                ]
            },
            human_reproductive_system: {
                'Anatomy Misconceptions': [
                    'Thinking uterus and vagina are the same organ',
                    'Believing the cervix is the top of the vagina (it\'s bottom of uterus)',
                    'Confusing ovaries with eggs (ovaries contain many eggs)'
                ],
                'Function Misconceptions': [
                    'Thinking women run out of eggs early in life (supply lasts until menopause)',
                    'Believing sperm are produced in the prostate (produced in testes)',
                    'Assuming all sperm are healthy and viable'
                ]
            },
            gametogenesis: {
                'Spermatogenesis': [
                    'Thinking spermatogenesis begins at birth (begins at puberty)',
                    'Believing all sperm are genetically identical',
                    'Not understanding continuous vs. cyclic production'
                ],
                'Oogenesis': [
                    'Thinking new eggs are made throughout life (fixed number at birth)',
                    'Believing polar bodies have no function (reduce chromosome number)',
                    'Confusing when meiosis completes (finishes at fertilization)'
                ]
            },
            fertilization: {
                'Process Misconceptions': [
                    'Thinking first sperm to reach egg fertilizes it',
                    'Believing one sperm can fertilize multiple eggs',
                    'Assuming fertilization happens in the uterus (occurs in fallopian tube)'
                ],
                'Polyspermy': [
                    'Not understanding why polyspermy is harmful (wrong chromosome number)',
                    'Thinking multiple sperm make stronger offspring'
                ]
            },
            embryonic_development: {
                'Timeline Confusion': [
                    'Confusing embryo and fetus stages',
                    'Thinking organs form immediately after fertilization',
                    'Not understanding critical periods for development'
                ],
                'Germ Layers': [
                    'Confusing which tissues come from which germ layer',
                    'Thinking all three layers form at once',
                    'Not understanding that all organs need multiple layers'
                ]
            },
            pregnancy_birth: {
                'Pregnancy Duration': [
                    'Thinking pregnancy is exactly 9 months (40 weeks ≈ 9.2 months)',
                    'Believing all pregnancies last same time',
                    'Confusing conception date with last menstrual period'
                ],
                'Placenta Function': [
                    'Thinking mother\'s and baby\'s blood mix (they don\'t)',
                    'Believing placenta filters everything harmful (some substances cross)',
                    'Not understanding placenta is temporary organ'
                ]
            },
            reproductive_hormones: {
                'Hormone Function': [
                    'Thinking testosterone is only in males (females have it too)',
                    'Believing estrogen is only in females (males produce it too)',
                    'Assuming one hormone equals one function (hormones have multiple roles)'
                ],
                'Feedback Loops': [
                    'Not understanding negative feedback',
                    'Confusing positive feedback with "good" feedback',
                    'Thinking feedback is always negative'
                ]
            },
            menstrual_cycle: {
                'Cycle Misconceptions': [
                    'Thinking all women have 28-day cycles (21-35 days is normal)',
                    'Believing ovulation always occurs on day 14',
                    'Assuming menstruation means reproductive health'
                ],
                'Fertility Understanding': [
                    'Thinking women can get pregnant any day of cycle',
                    'Believing menstruation is the only visible sign',
                    'Not understanding fertile window concept'
                ]
            },
            plant_reproduction: {
                'Flower Misconceptions': [
                    'Thinking all flowers have both male and female parts',
                    'Believing pollination is the same as fertilization',
                    'Assuming all plants reproduce via flowers (many don\'t)'
                ],
                'Seed Formation': [
                    'Confusing pollen with seeds',
                    'Thinking fruit is necessary for reproduction (it aids dispersal)',
                    'Not understanding double fertilization in flowering plants'
                ]
            },
            reproductive_technologies: {
                'IVF Misconceptions': [
                    'Thinking IVF babies are "test tube babies" (only fertilization in lab)',
                    'Believing IVF guarantees pregnancy',
                    'Assuming all fertility problems can be solved with technology'
                ],
                'Cloning': [
                    'Thinking clones are exact copies including memories',
                    'Believing human cloning is common or easy',
                    'Confusing therapeutic and reproductive cloning'
                ]
            },
            developmental_biology: {
                'Gene Expression': [
                    'Thinking all genes are active in all cells',
                    'Believing differentiation means losing genes',
                    'Assuming genetic information changes during development'
                ],
                'Environmental Factors': [
                    'Not understanding that environment affects development',
                    'Thinking development is purely genetic',
                    'Assuming all developmental effects are permanent'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use side-by-side diagrams to highlight differences',
                effectiveness: 'High for structural and process comparisons'
            },
            timeline: {
                method: 'Show sequential progression of developmental stages',
                effectiveness: 'High for understanding processes over time'
            },
            analogy: {
                method: 'Relate reproductive concepts to familiar examples',
                effectiveness: 'High for abstract concepts'
            },
            contrast_table: {
                method: 'Create comparison tables showing key differences',
                effectiveness: 'High for distinguishing similar concepts'
            },
            case_study: {
                method: 'Present real-world examples and scenarios',
                effectiveness: 'High for clinical and applied topics'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            structural: {
                focus: 'Physical organization and anatomy',
                language: 'descriptive and spatial'
            },
            functional: {
                focus: 'Purpose and physiological mechanisms',
                language: 'process-oriented and causal'
            },
            comparative: {
                focus: 'Similarities and differences between reproductive strategies',
                language: 'contrastive and analytical'
            },
            developmental: {
                focus: 'Changes over time and stages',
                language: 'temporal and sequential'
            },
            clinical: {
                focus: 'Medical relevance and applications',
                language: 'practical and application-based'
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
    handleReproductionProblem(config) {
        const { topic, parameters, subTopic, context } = config;

        try {
            this.currentProblem = this.parseReproductionProblem(topic, parameters, subTopic, context);
            this.currentContent = this.getReproductionContent(this.currentProblem);
            this.contentSteps = this.generateReproductionContent(this.currentProblem, this.currentContent);
            this.generateReproductionDiagramData();
            this.generateReproductionWorkbook();

            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                diagrams: this.diagramData
            };

        } catch (error) {
            throw new Error(`Failed to process reproduction topic: ${error.message}`);
        }
    }

    parseReproductionProblem(topic, parameters = {}, subTopic = null, context = {}) {
        let topicType = null;

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
            throw new Error(`Unable to recognize reproduction topic: ${topic}`);
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

    getReproductionContent(problem) {
        const handler = this.reproductionTopics[problem.type]?.handler;
        if (!handler) {
            throw new Error(`No handler available for reproduction topic: ${problem.type}`);
        }

        return handler(problem);
    }

    // TOPIC HANDLERS

    handleAsexualReproduction(problem) {
        const asexualTypesList = [
            {
                name: "Binary Fission",
                category: "Prokaryotic reproduction",
                description: "Parent cell divides into two identical daughter cells",
                process: [
                    "DNA replication",
                    "Cell elongation",
                    "DNA copies move to opposite poles",
                    "Cell membrane and wall pinch inward",
                    "Two identical daughter cells form"
                ],
                organisms: ["Bacteria (E. coli, Salmonella)", "Archaea", "Some protists (Amoeba, Paramecium)"],
                advantages: ["Very rapid", "Simple process", "No mate needed"],
                disadvantages: ["No genetic variation", "All offspring vulnerable to same threats"],
                speed: "Can occur every 20 minutes in optimal conditions",
                diagram: "binary_fission"
            },
            {
                name: "Budding",
                category: "Eukaryotic asexual reproduction",
                description: "Small outgrowth (bud) develops on parent and eventually separates",
                process: [
                    "Bud forms as outgrowth on parent",
                    "Nucleus divides mitotically",
                    "Bud receives copy of genetic material",
                    "Bud grows while attached to parent",
                    "Bud detaches when mature (or stays attached)"
                ],
                organisms: ["Yeast (Saccharomyces)", "Hydra", "Some corals", "Sponges"],
                advantages: ["Offspring protected while developing", "Can produce many offspring", "No mate needed"],
                disadvantages: ["Slower than binary fission", "No genetic variation", "Offspring compete with parent for resources"],
                variations: ["Single budding", "Multiple simultaneous buds", "Chain formation (yeast)"],
                diagram: "budding"
            },
            {
                name: "Fragmentation",
                category: "Regenerative reproduction",
                description: "Parent breaks into fragments, each capable of regenerating into complete organism",
                process: [
                    "Parent organism breaks into pieces (intentional or accidental)",
                    "Each fragment contains enough cells and genetic material",
                    "Fragments undergo regeneration",
                    "Each piece develops into complete organism"
                ],
                organisms: ["Planaria (flatworms)", "Starfish", "Some annelids", "Filamentous algae", "Fungi (mycelium)"],
                advantages: ["Can produce many offspring from one parent", "Works even from accidental breakage", "No specialized structures needed"],
                disadvantages: ["Requires significant regenerative ability", "Energy-intensive", "No genetic variation"],
                regeneration: "Requires sufficient body organization and totipotent cells",
                diagram: "fragmentation"
            },
            {
                name: "Vegetative Propagation",
                category: "Plant asexual reproduction",
                description: "New plants grow from vegetative parts (roots, stems, leaves)",
                types: {
                    runners: "Horizontal stems growing along ground (strawberries)",
                    rhizomes: "Underground horizontal stems (ginger, iris)",
                    tubers: "Enlarged underground stems (potatoes)",
                    bulbs: "Modified underground stems with leaves (onions, tulips)",
                    corms: "Solid underground stems (crocus, gladiolus)",
                    suckers: "Shoots growing from roots (raspberries)",
                    leaves: "New plants from leaf tissue (Kalanchoe)"
                },
                process: [
                    "Vegetative structure develops on parent plant",
                    "Structure contains meristematic tissue",
                    "Roots and shoots develop from structure",
                    "May separate from parent or remain connected",
                    "New plant grows independently"
                ],
                organisms: ["Many flowering plants", "Ferns", "Mosses"],
                advantages: ["Preserves desirable traits", "Faster than seed growth", "Can colonize area quickly", "No pollination needed"],
                disadvantages: ["No genetic variation", "Can spread plant diseases", "Competes with parent plant"],
                humanUse: "Extensively used in agriculture and horticulture",
                diagram: "vegetative_propagation"
            },
            {
                name: "Spore Formation",
                category: "Asexual reproduction via spores",
                description: "Parent produces many small, resistant reproductive cells (spores)",
                process: [
                    "Sporangium (spore case) develops",
                    "Spores form through mitosis inside sporangium",
                    "Spores are released into environment",
                    "Each spore can germinate in suitable conditions",
                    "Spore develops into new organism"
                ],
                organisms: ["Fungi (molds, mushrooms)", "Ferns", "Mosses", "Some bacteria (endospores)", "Algae"],
                advantages: ["Produces many offspring", "Spores are resistant to harsh conditions", "Can disperse over long distances", "No mate needed"],
                disadvantages: ["Most spores don't survive", "No genetic variation", "Requires favorable conditions for germination"],
                sporeTypes: ["Asexual spores (mitospores)", "Resistant endospores", "Zoospores (motile)"],
                diagram: "spore_formation"
            },
            {
                name: "Parthenogenesis",
                category: "Development without fertilization",
                description: "Egg develops into new organism without fertilization by sperm",
                types: {
                    obligate: "Only reproduces parthenogenetically (some insects)",
                    facultative: "Can switch between sexual and parthenogenetic (aphids, water fleas)",
                    artificial: "Induced in laboratory (some frogs, mice)"
                },
                process: [
                    "Egg is produced through modified meiosis or mitosis",
                    "Egg begins development without sperm fusion",
                    "Embryo develops with maternal chromosomes only",
                    "Offspring may be diploid or haploid depending on mechanism"
                ],
                organisms: ["Aphids", "Water fleas (Daphnia)", "Some bees and wasps", "Some lizards (whiptail lizards)", "Some sharks (rare)"],
                advantages: ["No mate needed", "Rapid population growth", "All offspring can reproduce (if female)"],
                disadvantages: ["Reduced genetic diversity", "Accumulation of harmful mutations", "Limited adaptation"],
                chromosomeTypes: ["Diploid parthenogenesis", "Haploid parthenogenesis"],
                diagram: "parthenogenesis"
            }
        ];

        const comparison = {
            advantages: [
                "Rapid reproduction - no time finding mate",
                "Single parent can colonize new habitat",
                "Preserves successful genetic combination",
                "Energy efficient - no courtship or mating rituals",
                "Produces many offspring quickly"
            ],
            disadvantages: [
                "No genetic variation - all clones",
                "No adaptation to changing environment",
                "Disease can wipe out entire population",
                "Accumulation of harmful mutations",
                "Competition with parent and siblings"
            ],
            whenUsed: [
                "Stable, favorable environments",
                "Colonizing new habitats",
                "When mates are scarce",
                "When rapid population growth is advantageous"
            ]
        };

        return {
            topic: "Asexual Reproduction",
            types: asexualTypesList,
            comparison: comparison,
            vsSeuxal: {
                asexual: "Genetically identical offspring, fast, single parent",
                sexual: "Genetically diverse offspring, slower, requires two parents"
            },
            evolutionarySignificance: "Asexual reproduction is advantageous in stable environments but limits adaptation to change",
            category: 'asexual_reproduction'
        };
    }

    handleSexualReproduction(problem) {
        const sexualReproductionContent = {
            overview: {
                definition: "Reproduction involving fusion of haploid gametes from two parents to produce genetically unique offspring",
                keyFeatures: [
                    "Requires meiosis to produce gametes",
                    "Involves fertilization (gamete fusion)",
                    "Produces genetic variation",
                    "Usually requires two parents",
                    "Offspring genetically different from parents"
                ],
                significance: "Primary mechanism for generating genetic diversity in eukaryotes"
            },
            
            keyProcesses: [
                {
                    name: "Meiosis",
                    purpose: "Produce haploid gametes from diploid cells",
                    stages: {
                        meiosis_I: "Reduction division - separates homologous pairs (diploid → haploid)",
                        meiosis_II: "Equational division - separates sister chromatids (like mitosis)"
                    },
                    result: "Four haploid (n) cells from one diploid (2n) cell",
                    geneticVariation: [
                        "Crossing over (prophase I) - exchanges DNA between homologs",
                        "Independent assortment (metaphase I) - random chromosome distribution"
                    ],
                    importance: "Reduces chromosome number and generates genetic diversity"
                },
                {
                    name: "Fertilization",
                    purpose: "Fuse haploid gametes to restore diploid state",
                    process: [
                        "Sperm and egg meet (in water, reproductive tract, or flower)",
                        "Sperm penetrates egg protective layers",
                        "Sperm and egg nuclei fuse (syngamy)",
                        "Diploid zygote forms with genetic material from both parents"
                    ],
                    result: "Diploid (2n) zygote with 50% DNA from each parent",
                    types: ["External fertilization (water)", "Internal fertilization (body)"],
                    importance: "Combines genetic material from two parents"
                }
            ],

            geneticVariation: {
                sources: [
                    {
                        mechanism: "Crossing Over (Recombination)",
                        description: "Exchange of DNA segments between homologous chromosomes",
                        occurs: "Prophase I of meiosis",
                        result: "New gene combinations on chromosomes",
                        frequency: "At least one crossover per chromosome pair",
                        importance: "Creates chromosomes with mixed parental genes"
                    },
                    {
                        mechanism: "Independent Assortment",
                        description: "Random distribution of chromosomes to gametes",
                        occurs: "Metaphase I of meiosis",
                        result: "Each gamete gets random mix of maternal and paternal chromosomes",
                        possibilities: "2^n possible combinations (n = haploid number)",
                        importance: "Ensures each gamete is genetically unique"
                    },
                    {
                        mechanism: "Random Fertilization",
                        description: "Any sperm can fertilize any egg",
                        occurs: "During fertilization",
                        result: "Millions of possible genetic combinations",
                        calculation: "(2^n)² possible offspring for each couple",
                        importance: "Multiplies genetic variation dramatically"
                    }
                ],
                totalVariation: "Combination of all three mechanisms creates vast genetic diversity"
            },

            gameteTypes: {
                sperm: {
                    size: "Small, motile",
                    structure: ["Head with nucleus and acrosome", "Midpiece with mitochondria", "Tail (flagellum) for movement"],
                    number: "Millions produced continuously",
                    function: "Deliver male genetic material to egg",
                    specializations: "Streamlined for swimming, enzymes to penetrate egg"
                },
                egg: {
                    size: "Large, non-motile",
                    structure: "Nucleus, cytoplasm with nutrients, protective layers",
                    number: "Limited number (humans: ~400 ovulated in lifetime)",
                    function: "Provide female genetic material and nutrients for early development",
                    specializations: "Nutrient stores, protective layers, mechanisms to prevent polyspermy"
                },
                anisogamy: "Difference in gamete size - small mobile sperm and large immobile egg"
            },

            reproductiveStrategies: [
                {
                    strategy: "External Fertilization",
                    description: "Gametes released into water where fertilization occurs",
                    organisms: ["Fish", "Amphibians", "Most aquatic invertebrates", "Algae"],
                    advantages: ["No specialized reproductive structures needed", "Can produce many offspring"],
                    disadvantages: ["Gamete wastage", "Vulnerable to predators", "Requires water", "Less parental care"],
                    adaptations: ["Synchronous spawning", "Release many gametes", "Chemical attractants"]
                },
                {
                    strategy: "Internal Fertilization",
                    description: "Sperm deposited in female reproductive tract",
                    organisms: ["Reptiles", "Birds", "Mammals", "Insects", "Flowering plants"],
                    advantages: ["Protection for gametes", "Less gamete wastage", "Can occur on land", "More parental care possible"],
                    disadvantages: ["Requires specialized structures", "Behavioral adaptations needed", "Fewer offspring typically"],
                    adaptations: ["Copulatory organs", "Courtship behaviors", "Internal development possible"]
                }
            ],

            advantages: [
                "Genetic variation enables adaptation to changing environments",
                "Combines beneficial mutations from both parents",
                "Can eliminate harmful mutations through recombination",
                "Offspring may have hybrid vigor (heterosis)",
                "Enables evolution and natural selection",
                "Reduces competition with parents (different genotypes)"
            ],

            disadvantages: [
                "Requires finding and attracting mate (time and energy)",
                "Only 50% of genes passed to each offspring",
                "Slower reproduction rate than asexual",
                "May break up successful gene combinations",
                "Courtship and mating can be dangerous",
                "Not all offspring can reproduce (males in some species)"
            ],

            evolutionarySignificance: {
                origin: "Evolved over 1 billion years ago in eukaryotes",
                maintenance: "Persists despite costs due to genetic variation benefits",
                redQueen: "Sexual reproduction allows faster adaptation to changing environments (Red Queen hypothesis)",
                mutationClearance: "Helps eliminate harmful mutations (Muller's ratchet avoidance)"
            }
        };

        return {
            topic: "Sexual Reproduction",
            ...sexualReproductionContent,
            category: 'sexual_reproduction'
        };
    }

    handleHumanReproductiveSystem(problem) {
        const reproductiveSystemContent = {
            maleSystem: {
                overview: "Produces sperm and male sex hormones, delivers sperm to female",
                primaryOrgans: [
                    {
                        name: "Testes (2)",
                        location: "Scrotum (outside body cavity)",
                        functions: [
                            "Produce sperm (spermatogenesis)",
                            "Produce testosterone",
                            "Temperature regulation (2-3°C cooler than body)"
                        ],
                        structure: [
                            "Seminiferous tubules (sperm production)",
                            "Interstitial cells/Leydig cells (testosterone production)",
                            "Sertoli cells (support developing sperm)"
                        ],
                        size: "~5 cm long, 2.5 cm diameter"
                    },
                    {
                        name: "Scrotum",
                        location: "External sac below penis",
                        functions: [
                            "Houses testes",
                            "Regulates testicular temperature",
                            "Protects testes"
                        ],
                        adaptation: "Muscles contract/relax to control temperature"
                    }
                ],
                ductSystem: [
                    {
                        name: "Epididymis",
                        location: "Attached to each testis",
                        function: "Sperm maturation and storage",
                        length: "~6 meters (coiled)",
                        duration: "Sperm spend ~2 weeks maturing"
                    },
                    {
                        name: "Vas Deferens (Ductus Deferens)",
                        location: "From epididymis to urethra",
                        function: "Transport sperm during ejaculation",
                        length: "~45 cm",
                        note: "Cut during vasectomy"
                    },
                    {
                        name: "Ejaculatory Duct",
                        location: "Formed by vas deferens and seminal vesicle duct",
                        function: "Delivers semen to urethra"
                    },
                    {
                        name: "Urethra",
                        location: "Through penis",
                        function: "Dual purpose - urine and semen passage (not simultaneously)",
                        length: "~20 cm"
                    }
                ],
                accessoryGlands: [
                    {
                        name: "Seminal Vesicles (2)",
                        location: "Behind bladder",
                        secretion: "~60% of semen volume",
                        components: ["Fructose (sperm energy)", "Prostaglandins", "Proteins"],
                        function: "Provide energy for sperm, help sperm mobility"
                    },
                    {
                        name: "Prostate Gland",
                        location: "Below bladder, surrounds urethra",
                        secretion: "~30% of semen volume",
                        components: ["Alkaline fluid", "Enzymes", "Citric acid"],
                        function: "Neutralize vaginal acidity, liquefy semen"
                    },
                    {
                        name: "Bulbourethral Glands (Cowper's Glands) (2)",
                        location: "Below prostate",
                        secretion: "Pre-ejaculate fluid",
                        components: "Alkaline mucus",
                        function: "Lubrication, neutralizes urethra acidity"
                    }
                ],
                externalStructures: [
                    {
                        name: "Penis",
                        structure: ["Glans (head)", "Shaft", "Erectile tissue (corpus cavernosum and spongiosum)"],
                        function: "Deliver sperm to female reproductive tract",
                        erection: "Blood fills erectile tissue causing rigidity"
                    }
                ],
                semen: {
                    composition: "Sperm (2-5%) + accessory gland secretions (95-98%)",
                    volume: "2-5 mL per ejaculation",
                    spermCount: "40-300 million sperm per ejaculation",
                    pH: "7.2-8.0 (slightly alkaline)"
                }
            },

            femaleSystem: {
                overview: "Produces eggs and female sex hormones, supports pregnancy",
                primaryOrgans: [
                    {
                        name: "Ovaries (2)",
                        location: "Pelvic cavity, on either side of uterus",
                        functions: [
                            "Produce eggs (oogenesis)",
                            "Produce estrogen and progesterone",
                            "Regulate menstrual cycle"
                        ],
                        structure: [
                            "Cortex (contains ovarian follicles)",
                            "Medulla (connective tissue, blood vessels)"
                        ],
                        size: "~3 cm long, almond-shaped",
                        eggSupply: "~1-2 million at birth, ~400,000 at puberty, ~400 ovulated in lifetime"
                    }
                ],
                ductSystem: [
                    {
                        name: "Fallopian Tubes (Oviducts) (2)",
                        location: "Extend from ovaries toward uterus",
                        function: "Transport egg to uterus, site of fertilization",
                        structure: [
                            "Fimbriae (finger-like projections catch egg)",
                            "Cilia (move egg along tube)",
                            "Ampulla (usual site of fertilization)"
                        ],
                        length: "~10 cm",
                        transit: "Egg takes 3-4 days to reach uterus"
                    },
                    {
                        name: "Uterus",
                        location: "Center of pelvic cavity",
                        function: "Support fetal development during pregnancy",
                        structure: [
                            "Fundus (top)",
                            "Body (main portion)",
                            "Cervix (neck, opens to vagina)"
                        ],
                        layers: [
                            "Perimetrium (outer)",
                            "Myometrium (smooth muscle, contractions during birth)",
                            "Endometrium (inner lining, sheds during menstruation)"
                        ],
                        size: "~7.5 cm long (non-pregnant)",
                        expansion: "Can expand 500x during pregnancy"
                    },
                    {
                        name: "Vagina",
                        location: "From cervix to external opening",
                        function: "Birth canal, receives penis during intercourse, menstrual flow passage",
                        structure: "Elastic muscular tube",
                        length: "~8-10 cm",
                        pH: "3.8-4.5 (acidic, protects against infections)"
                    }
                ],
                externalStructures: {
                    collectiveName: "Vulva",
                    components: [
                        {
                            name: "Mons Pubis",
                            description: "Fatty tissue over pubic bone"
                        },
                        {
                            name: "Labia Majora",
                            description: "Outer folds of skin"
                        },
                        {
                            name: "Labia Minora",
                            description: "Inner folds, protect vaginal and urethral openings"
                        },
                        {
                            name: "Clitoris",
                            description: "Erectile tissue, sensitive to stimulation",
                            homolog: "Analogous to penis"
                        },
                        {
                            name: "Vestibule",
                            description: "Area between labia minora",
                            contains: "Vaginal opening, urethral opening"
                        }
                    ]
                },
                mammaryGlands: {
                    location: "Breasts",
                    function: "Produce milk for nursing infant",
                    structure: ["Lobules (milk-producing glands)", "Ducts", "Nipple", "Areola"],
                    regulation: "Prolactin (milk production), Oxytocin (milk release)",
                    development: "Develop during puberty, fully functional after pregnancy"
                }
            },

            hormonalRegulation: {
                hypothalamus: {
                    hormone: "GnRH (Gonadotropin-Releasing Hormone)",
                    target: "Anterior pituitary",
                    function: "Stimulates release of FSH and LH"
                },
                anteriorPituitary: {
                    hormones: [
                        {
                            name: "FSH (Follicle-Stimulating Hormone)",
                            maleFunction: "Stimulates spermatogenesis",
                            femaleFunction: "Stimulates follicle development and estrogen production"
                        },
                        {
                            name: "LH (Luteinizing Hormone)",
                            maleFunction: "Stimulates testosterone production",
                            femaleFunction: "Triggers ovulation, forms corpus luteum"
                        }
                    ]
                },
                gonadalHormones: {
                    male: [
                        {
                            name: "Testosterone",
                            source: "Leydig cells in testes",
                            functions: [
                                "Stimulates spermatogenesis",
                                "Develops male secondary sex characteristics",
                                "Maintains sex drive",
                                "Anabolic effects (muscle, bone growth)"
                            ]
                        }
                    ],
                    female: [
                        {
                            name: "Estrogen",
                            source: "Ovarian follicles",
                            functions: [
                                "Develops female secondary sex characteristics",
                                "Thickens endometrium",
                                "Regulates menstrual cycle",
                                "Maintains bone density"
                            ]
                        },
                        {
                            name: "Progesterone",
                            source: "Corpus luteum (after ovulation)",
                            functions: [
                                "Maintains endometrium for pregnancy",
                                "Inhibits uterine contractions",
                                "Prepares mammary glands",
                                "Regulates menstrual cycle"
                            ]
                        }
                    ]
                },
                feedbackLoops: {
                    negative: "High sex hormone levels inhibit GnRH, FSH, LH release",
                    positive: "High estrogen levels trigger LH surge (ovulation)"
                }
            },

            comparison: {
                headers: ["Feature", "Male", "Female"],
                data: [
                    ["Primary organs", "Testes", "Ovaries"],
                    ["Gamete", "Sperm (millions)", "Egg (one per month)"],
                    ["Gamete production", "Continuous from puberty", "Cyclic, ends at menopause"],
                    ["Gamete size", "Small, motile", "Large, non-motile"],
                    ["Main hormones", "Testosterone", "Estrogen, Progesterone"],
                    ["External genitalia", "Penis, scrotum", "Vulva"],
                    ["Internal structures", "Epididymis, vas deferens", "Fallopian tubes, uterus"],
                    ["Reproductive role", "Produce and deliver sperm", "Produce eggs, support pregnancy"]
                ]
            }
        };

        return {
            topic: "Human Reproductive System",
            ...reproductiveSystemContent,
            category: 'human_reproductive_system'
        };
    }

    handleGametogenesis(problem) {
        const gametogenesisContent = {
            overview: {
                definition: "Process of forming haploid gametes (sperm and eggs) from diploid germ cells",
                purpose: "Reduce chromosome number and create genetic diversity",
                location: "Gonads (testes in males, ovaries in females)",
                mechanism: "Meiosis plus differentiation"
            },

            spermatogenesis: {
                definition: "Formation of sperm in seminiferous tubules of testes",
                location: "Testes, specifically seminiferous tubules",
                timing: "Begins at puberty (~13 years), continues throughout life",
                duration: "~74 days from start to mature sperm",
                production: "~1,500 sperm per second (~100 million per day)",
                
                stages: [
                    {
                        stage: "Mitosis (Spermatogonial Phase)",
                        description: "Spermatogonia (stem cells) divide mitotically",
                        location: "Outer layer of seminiferous tubule",
                        result: "Produces more spermatogonia and primary spermatocytes",
                        chromosomes: "Diploid (2n = 46 in humans)",
                        purpose: "Maintain stem cell population and produce cells for meiosis"
                    },
                    {
                        stage: "Meiosis I",
                        description: "Primary spermatocytes undergo first meiotic division",
                        duration: "~24 days",
                        result: "Two secondary spermatocytes",
                        chromosomes: "Haploid (n = 23), but sister chromatids still attached",
                        events: "Crossing over and independent assortment occur"
                    },
                    {
                        stage: "Meiosis II",
                        description: "Secondary spermatocytes complete meiosis",
                        duration: "Quick (~1 day)",
                        result: "Four haploid spermatids",
                        chromosomes: "Haploid (n = 23), single chromatids",
                        note: "All four cells are functional"
                    },
                    {
                        stage: "Spermiogenesis",
                        description: "Spermatids differentiate into mature sperm",
                        duration: "~24 days",
                        changes: [
                            "Acrosome forms from Golgi (contains enzymes)",
                            "Nucleus condenses",
                            "Mitochondria concentrate in midpiece",
                            "Flagellum (tail) develops",
                            "Most cytoplasm is shed"
                        ],
                        result: "Mature spermatozoa"
                    },
                    {
                        stage: "Spermiation",
                        description: "Release of mature sperm into lumen",
                        location: "Lumen of seminiferous tubule",
                        storage: "Sperm move to epididymis for final maturation and storage"
                    }
                ],

                regulation: {
                    hormones: [
                        "FSH: stimulates Sertoli cells, supports spermatogenesis",
                        "LH: stimulates Leydig cells to produce testosterone",
                        "Testosterone: essential for spermatogenesis",
                        "Inhibin: negative feedback to reduce FSH"
                    ],
                    temperature: "Requires 2-3°C below body temperature (scrotum location)"
                },

                spermStructure: {
                    head: ["Nucleus (haploid DNA)", "Acrosome (digestive enzymes)"],
                    midpiece: "Mitochondria (provide ATP for movement)",
                    tail: "Flagellum (propulsion)",
                    size: "~60 μm total length"
                }
            },

            oogenesis: {
                definition: "Formation of eggs (ova) in ovaries",
                location: "Ovaries, within ovarian follicles",
                timing: "Begins before birth, arrests twice, completes at fertilization",
                production: "One mature egg per month (typically), ~400 in lifetime",
                
                stages: [
                    {
                        stage: "Prenatal Development",
                        description: "Oogonia divide mitotically to produce primary oocytes",
                        timing: "Before birth (fetal development)",
                        result: "~1-2 million primary oocytes at birth",
                        arrest: "Primary oocytes arrest in prophase I of meiosis I",
                        note: "No more oogonia form after birth"
                    },
                    {
                        stage: "Childhood",
                        description: "Primary oocytes remain arrested in prophase I",
                        timing: "Birth to puberty",
                        loss: "Many primary oocytes degenerate",
                        remaining: "~400,000 primary oocytes at puberty"
                    },
                    {
                        stage: "Meiosis I Completion",
                        description: "Primary oocyte completes first meiotic division",
                        timing: "Monthly from puberty to menopause (one oocyte)",
                        trigger: "LH surge just before ovulation",
                        result: "Secondary oocyte (large) + first polar body (small)",
                        chromosomes: "Both haploid (n), but sister chromatids still attached",
                        unequal: "Unequal division - secondary oocyte gets most cytoplasm",
                        note: "First polar body may divide but eventually degenerates"
                    },
                    {
                        stage: "Ovulation",
                        description: "Secondary oocyte is released from ovary",
                        timing: "Mid-menstrual cycle (day 14 of 28-day cycle)",
                        arrested: "Secondary oocyte arrests in metaphase II",
                        fate: "Awaits fertilization"
                    },
                    {
                        stage: "Meiosis II Completion",
                        description: "Secondary oocyte completes meiosis",
                        timing: "Only if fertilization occurs",
                        trigger: "Sperm penetration",
                        result: "Mature ovum (large) + second polar body (small)",
                        chromosomes: "Both haploid (n), single chromatids",
                        fusion: "Ovum nucleus fuses with sperm nucleus"
                    }
                ],

                regulation: {
                    hormones: [
                        "FSH: stimulates follicle development",
                        "Estrogen: produced by growing follicle",
                        "LH surge: triggers ovulation and meiosis I completion",
                        "Progesterone: from corpus luteum after ovulation"
                    ],
                    follicularDevelopment: "Monthly selection and maturation of dominant follicle"
                },

                eggStructure: {
                    size: "~100 μm diameter (largest human cell)",
                    nucleus: "Haploid DNA",
                    cytoplasm: "Large amount with nutrients, organelles, mRNA",
                    protectiveLayers: [
                        "Corona radiata (outer layer of follicle cells)",
                        "Zona pellucida (glycoprotein layer)",
                        "Plasma membrane"
                    ]
                },

                polarBodies: {
                    description: "Small, nonfunctional cells produced during oogenesis",
                    function: "Discard excess chromosomes while preserving cytoplasm",
                    number: "Three total (one from meiosis I, two from meiosis II)",
                    fate: "Degenerate and are reabsorbed"
                }
            },

            comparison: {
                headers: ["Feature", "Spermatogenesis", "Oogenesis"],
                data: [
                    ["Location", "Testes (seminiferous tubules)", "Ovaries (follicles)"],
                    ["Timing", "Puberty to death", "Begins before birth, completes at fertilization"],
                    ["Duration", "~74 days continuous", "10-50+ years with arrests"],
                    ["Meiosis I", "Primary spermatocyte → 2 secondary spermatocytes", "Primary oocyte → secondary oocyte + polar body"],
                    ["Meiosis II", "2 secondary spermatocytes → 4 spermatids", "Secondary oocyte → ovum + polar body (if fertilized)"],
                    ["Products", "Four functional sperm", "One functional egg + 2-3 polar bodies"],
                    ["Cell divisions", "Equal divisions", "Unequal divisions"],
                    ["Production rate", "~100 million per day", "One per month (typically)"],
                    ["Cell size", "Small (~60 μm)", "Large (~100 μm)"],
                    ["Cytoplasm distribution", "Equal among products", "Most to egg, little to polar bodies"],
                    ["Maturation", "Spermiogenesis after meiosis", "Arrests twice during meiosis"],
                    ["Lifetime production", "Trillions", "~400"],
                    ["Genetic variation", "Crossing over, independent assortment", "Crossing over, independent assortment"]
                ]
            },

            significance: {
                chromosomeReduction: "Meiosis reduces diploid (2n) to haploid (n), ensuring offspring are diploid after fertilization",
                geneticDiversity: "Crossing over and independent assortment create unique gametes",
                sexDetermination: "Half of sperm carry X, half carry Y chromosome",
                qualityControl: "Many checkpoints eliminate defective gametes"
            }
        };

        return {
            topic: "Gametogenesis",
            ...gametogenesisContent,
            category: 'gametogenesis'
        };
    }

    handleFertilization(problem) {
        const fertilizationContent = {
            overview: {
                definition: "Fusion of haploid sperm and egg to form diploid zygote",
                location: "Ampulla of fallopian tube (outer third)",
                timing: "Within 12-24 hours after ovulation",
                window: "Sperm viable 3-5 days, egg viable 12-24 hours",
                result: "Diploid zygote with genetic material from both parents"
            },

            spermJourney: {
                deposition: "300-500 million sperm deposited in vagina during ejaculation",
                cervix: {
                    challenge: "Cervical mucus barrier",
                    timing: "Mucus thins around ovulation to allow passage",
                    survivors: "Only ~1% reach cervix"
                },
                uterus: {
                    environment: "Muscular contractions help propel sperm",
                    survivors: "~1,000-10,000 sperm reach fallopian tubes",
                    duration: "Can reach tubes in 5 minutes to several hours"
                },
                fallopianTube: {
                    location: "Site of fertilization",
                    survivors: "~200 sperm reach egg",
                    chemotaxis: "Egg releases chemical attractants",
                    capacitation: "Final maturation of sperm in female tract (6-8 hours)"
                },
                attrition: "Massive loss due to hostile environment, wrong direction, lack of energy"
            },

            capacitation: {
                definition: "Final maturation of sperm in female reproductive tract",
                duration: "6-8 hours",
                changes: [
                    "Cholesterol removal from sperm membrane",
                    "Membrane becomes more fluid and permeable",
                    "Increased metabolism and motility",
                    "Hyperactivated motility (whiplash pattern)",
                    "Prepares for acrosome reaction"
                ],
                requirement: "Must occur before sperm can fertilize egg",
                location: "Female reproductive tract"
            },

            fertilizationProcess: [
                {
                    step: "1. Sperm-Egg Recognition",
                    description: "Capacitated sperm binds to zona pellucida",
                    mechanism: [
                        "Sperm ZP3 receptors bind to ZP3 glycoproteins on zona pellucida",
                        "Species-specific recognition",
                        "Multiple sperm can initially bind"
                    ],
                    importance: "Ensures species-specific fertilization"
                },
                {
                    step: "2. Acrosome Reaction",
                    description: "Release of enzymes from sperm head",
                    trigger: "Binding to zona pellucida",
                    process: [
                        "Acrosome membrane fuses with sperm plasma membrane",
                        "Hydrolytic enzymes released (hyaluronidase, acrosin)",
                        "Enzymes digest path through zona pellucida",
                        "Inner acrosomal membrane exposed"
                    ],
                    result: "Sperm can penetrate zona pellucida",
                    note: "Only capacitated sperm can undergo acrosome reaction"
                },
                {
                    step: "3. Sperm Penetration",
                    description: "Sperm passes through zona pellucida",
                    mechanism: [
                        "Enzymes digest glycoprotein matrix",
                        "Sperm propels through zona with flagellar movement",
                        "First sperm to reach egg membrane"
                    ],
                    duration: "Several minutes"
                },
                {
                    step: "4. Sperm-Egg Membrane Fusion",
                    description: "Sperm and egg plasma membranes fuse",
                    recognition: "Sperm bindin proteins bind to egg receptors",
                    mechanism: [
                        "Sperm and egg membranes make contact",
                        "Membranes fuse in equatorial region of sperm head",
                        "Sperm contents enter egg"
                    ],
                    entry: "Only sperm nucleus and centriole enter egg, tail left outside"
                },
                {
                    step: "5. Egg Activation",
                    description: "Sperm entry triggers egg changes",
                    immediateResponse: [
                        "Calcium ions released from egg's ER (calcium wave)",
                        "Cortical granules fuse with plasma membrane (cortical reaction)",
                        "Zona pellucida hardens (zona reaction)"
                    ],
                    delayedResponse: [
                        "Egg completes meiosis II",
                        "Second polar body released",
                        "Metabolic activity increases",
                        "Protein synthesis begins"
                    ]
                },
                {
                    step: "6. Prevention of Polyspermy",
                    description: "Blocks to prevent multiple sperm entry",
                    fast_block: {
                        mechanism: "Depolarization of egg membrane (electrical change)",
                        timing: "Seconds",
                        duration: "Temporary (~1 minute)",
                        effectiveness: "Prevents immediate sperm entry"
                    },
                    slow_block: {
                        mechanism: "Cortical reaction and zona reaction",
                        timing: "Minutes",
                        changes: [
                            "Cortical granule enzymes modify zona pellucida",
                            "Zona hardens and lifts away from egg",
                            "Sperm receptors inactivated"
                        ],
                        duration: "Permanent",
                        effectiveness: "Ensures only one sperm fertilizes egg"
                    },
                    importance: "Polyspermy would create abnormal chromosome number (triploidy)"
                },
                {
                    step: "7. Nuclear Fusion (Syngamy)",
                    description: "Sperm and egg nuclei fuse",
                    timing: "Several hours after sperm entry",
                    process: [
                        "Sperm nucleus swells and becomes male pronucleus",
                        "Egg nucleus becomes female pronucleus",
                        "Pronuclei migrate toward each other",
                        "Nuclear envelopes break down",
                        "Chromosomes align on metaphase plate"
                    ],
                    result: "Diploid zygote (2n) formed",
                    note: "Zygote contains 23 maternal + 23 paternal chromosomes"
                },
                {
                    step: "8. First Cleavage",
                    description: "Zygote begins dividing",
                    timing: "~24-36 hours after fertilization",
                    result: "Two-cell embryo",
                    significance: "Begins embryonic development"
                }
            ],

            molecularMechanisms: {
                calciumWave: {
                    description: "Wave of calcium ions spreading through egg",
                    trigger: "Sperm-specific protein (phospholipase C)",
                    pattern: "Starts at sperm entry point, spreads across egg",
                    effects: [
                        "Triggers cortical reaction",
                        "Activates egg metabolism",
                        "Initiates cell cycle",
                        "Releases second polar body"
                    ],
                    oscillations: "Multiple calcium waves occur"
                },
                corticalGranules: {
                    description: "Vesicles beneath egg plasma membrane",
                    contents: "Enzymes that modify zona pellucida",
                    release: "Exocytosis triggered by calcium wave",
                    effect: "Zona pellucida hardens, blocks sperm binding"
                }
            },

            outcomes: {
                normal: "Diploid zygote with 46 chromosomes (23 pairs)",
                polyspermy: "Multiple sperm enter - leads to abnormal chromosome number (usually lethal)",
                parthenogenesis: "Rare - egg develops without sperm (not viable in mammals)",
                abnormal: "Chromosomal abnormalities if meiosis errors occurred"
            },

            clinicalSignificance: [
                "IVF replicates fertilization in laboratory",
                "ICSI (Intracytoplasmic Sperm Injection) injects single sperm directly",
                "Contraception can target fertilization process",
                "Understanding polyspermy blocks important for assisted reproduction",
                "Fertilization disorders can cause infertility"
            ]
        };

        return {
            topic: "Fertilization",
            ...fertilizationContent,
            category: 'fertilization'
        };
    }

    handleEmbryonicDevelopment(problem) {
        const developmentContent = {
            overview: {
                definition: "Process of development from single-celled zygote to multicellular embryo with differentiated tissues and organs",
                duration: "First 8 weeks after fertilization (in humans)",
                stages: "Cleavage → Blastulation → Gastrulation → Organogenesis",
                significance: "Establishes body plan and organ systems"
            },

            cleavage: {
                definition: "Rapid cell divisions without growth",
                timing: "Days 1-5 after fertilization",
                location: "Fallopian tube, then uterus",
                characteristics: [
                    "Rapid mitotic divisions",
                    "No cell growth between divisions",
                    "Total embryo size stays constant",
                    "Cells get progressively smaller",
                    "Zona pellucida remains intact"
                ],
                stages: [
                    {
                        stage: "Zygote (Day 0-1)",
                        cells: "1 cell",
                        description: "Fertilized egg with diploid nucleus",
                        location: "Ampulla of fallopian tube"
                    },
                    {
                        stage: "2-Cell Stage (Day 1-2)",
                        cells: "2 cells",
                        description: "First cleavage division",
                        note: "Cells called blastomeres"
                    },
                    {
                        stage: "4-Cell Stage (Day 2)",
                        cells: "4 cells",
                        description: "Second cleavage"
                    },
                    {
                        stage: "8-Cell Stage (Day 2-3)",
                        cells: "8 cells",
                        description: "Third cleavage"
                    },
                    {
                        stage: "Morula (Day 3-4)",
                        cells: "16-32 cells",
                        description: "Solid ball of cells",
                        name: "Latin for 'mulberry'",
                        location: "Enters uterus"
                    },
                    {
                        stage: "Early Blastocyst (Day 4-5)",
                        cells: "~100 cells",
                        description: "Fluid-filled cavity forms",
                        structure: [
                            "Blastocoel (fluid-filled cavity)",
                            "Inner cell mass (ICM) - becomes embryo",
                            "Trophoblast - outer cells become placenta"
                        ],
                        location: "Free-floating in uterus"
                    }
                ],
                types: {
                    holoblastic: "Complete cleavage (mammals, amphibians)",
                    meroblastic: "Incomplete cleavage (birds, reptiles - large yolk)"
                },
                patterns: {
                    radial: "Mammals - cells stacked directly above each other",
                    spiral: "Molluscs, annelids - cells rotated",
                    rotational: "Humans - distinctive pattern"
                }
            },

            blastulation: {
                definition: "Formation of blastocyst (blastula)",
                timing: "Days 5-6",
                structure: {
                    blastocoel: "Fluid-filled cavity",
                    innerCellMass: {
                        description: "Cluster of cells inside blastocyst",
                        fate: "Develops into entire embryo proper",
                        pluripotent: "Can form all cell types",
                        source: "Embryonic stem cells derived from ICM"
                    },
                    trophoblast: {
                        description: "Outer layer of cells",
                        fate: "Forms placenta and extraembryonic membranes",
                        function: "Mediates implantation, nutrient exchange"
                    }
                },
                hatching: "Blastocyst breaks free from zona pellucida (day 5-6)",
                readyForImplantation: "Can now attach to uterine wall"
            },

            implantation: {
                definition: "Blastocyst attaches to and embeds in uterine wall",
                timing: "Days 6-12",
                process: [
                    {
                        stage: "Apposition (Day 6-7)",
                        description: "Blastocyst makes initial contact with endometrium",
                        requirement: "Zona pellucida must be hatched"
                    },
                    {
                        stage: "Adhesion (Day 7-8)",
                        description: "Trophoblast adheres to endometrium",
                        molecules: "Integrins and selectins mediate binding"
                    },
                    {
                        stage: "Invasion (Day 8-12)",
                        description: "Trophoblast invades endometrium",
                        mechanism: [
                            "Trophoblast differentiates into syncytiotrophoblast",
                            "Syncytiotrophoblast secretes enzymes",
                            "Embryo burrows into endometrium",
                            "Maternal blood vessels breached"
                        ],
                        completion: "Embryo completely embedded by day 12"
                    }
                ],
                hormones: {
                    hCG: {
                        name: "Human chorionic gonadotropin",
                        source: "Trophoblast/syncytiotrophoblast",
                        function: "Maintains corpus luteum and progesterone production",
                        detection: "Basis of pregnancy tests",
                        timing: "Detectable ~8-10 days after fertilization"
                    }
                },
                requirements: [
                    "Receptive endometrium (progesterone-prepared)",
                    "Synchronized timing",
                    "Hatched blastocyst"
                ]
            },

            gastrulation: {
                definition: "Formation of three primary germ layers",
                timing: "Week 3 (days 14-21)",
                significance: "Most important event in development - establishes body plan",
                process: [
                    "Primitive streak forms on epiblast",
                    "Cells migrate through primitive streak",
                    "Three germ layers form by rearrangement"
                ],
                germLayers: [
                    {
                        layer: "Ectoderm",
                        position: "Outermost layer",
                        derivatives: [
                            "Epidermis of skin",
                            "Hair, nails, sweat glands",
                            "Nervous system (brain, spinal cord, nerves)",
                            "Sensory receptors",
                            "Lens of eye",
                            "Tooth enamel",
                            "Anterior pituitary"
                        ],
                        mnemonic: "Outer covering and nervous system"
                    },
                    {
                        layer: "Mesoderm",
                        position: "Middle layer",
                        derivatives: [
                            "Muscles (skeletal, smooth, cardiac)",
                            "Skeleton (bones, cartilage)",
                            "Circulatory system (heart, blood vessels, blood)",
                            "Excretory system (kidneys)",
                            "Reproductive organs (gonads, ducts)",
                            "Dermis of skin",
                            "Connective tissues"
                        ],
                        mnemonic: "Middle layer - muscles, bones, blood"
                    },
                    {
                        layer: "Endoderm",
                        position: "Innermost layer",
                        derivatives: [
                            "Digestive tract lining",
                            "Liver, pancreas",
                            "Respiratory tract lining (lungs)",
                            "Urinary bladder lining",
                            "Thyroid gland",
                            "Parathyroid glands"
                        ],
                        mnemonic: "Inner lining - digestive and respiratory"
                    }
                ],
                bodyAxes: {
                    anteroposterior: "Head to tail (front to back)",
                    dorsoventral: "Back to belly (top to bottom)",
                    leftright: "Bilateral symmetry established"
                }
            },

            neurulation: {
                definition: "Formation of neural tube (precursor to nervous system)",
                timing: "Week 3-4",
                process: [
                    "Neural plate forms from dorsal ectoderm",
                    "Neural plate folds upward forming neural groove",
                    "Edges of neural folds meet and fuse",
                    "Neural tube forms (becomes CNS)",
                    "Neural crest cells migrate away"
                ],
                structures: {
                    neuralTube: {
                        description: "Hollow tube of ectoderm",
                        derivatives: [
                            "Brain (anterior end)",
                            "Spinal cord (posterior)",
                            "Motor neurons"
                        ],
                        closure: "Must close completely (defects cause spina bifida, anencephaly)"
                    },
                    neuralCrest: {
                        description: "Cells that migrate from neural tube edges",
                        derivatives: [
                            "Peripheral nervous system",
                            "Sensory neurons",
                            "Melanocytes (pigment cells)",
                            "Adrenal medulla",
                            "Facial cartilage and bone"
                        ]
                    }
                },
                criticalPeriod: "Weeks 3-4 - neural tube defects if disruption occurs",
                prevention: "Folic acid supplementation reduces neural tube defects"
            },

            organogenesis: {
                definition: "Formation of organs from three germ layers",
                timing: "Weeks 4-8",
                significance: "All major organ systems begin developing",
                vulnerability: "Most sensitive period for teratogens (substances causing birth defects)",
                
                majorEvents: [
                    {
                        week: "Week 4",
                        developments: [
                            "Heart begins beating",
                            "Limb buds appear",
                            "Eye and ear development begins",
                            "Pharyngeal arches form (head and neck structures)"
                        ],
                        size: "~5 mm"
                    },
                    {
                        week: "Week 5",
                        developments: [
                            "Hand and foot plates form",
                            "Brain regions differentiate",
                            "Liver begins blood cell production"
                        ],
                        size: "~10 mm"
                    },
                    {
                        week: "Week 6",
                        developments: [
                            "Fingers and toes forming",
                            "Intestines develop",
                            "Lungs begin branching"
                        ],
                        size: "~15 mm"
                    },
                    {
                        week: "Week 7",
                        developments: [
                            "Eyelids forming",
                            "External genitalia forming (not yet differentiated)",
                            "Skeleton ossification begins"
                        ],
                        size: "~20 mm"
                    },
                    {
                        week: "Week 8",
                        developments: [
                            "All organ systems present (though not functional)",
                            "Facial features recognizable",
                            "End of embryonic period - now called fetus"
                        ],
                        size: "~30 mm (~1.2 inches)"
                    }
                ]
            },

            extraembryonicMembranes: {
                amnion: {
                    description: "Fluid-filled sac surrounding embryo",
                    function: "Protection, temperature regulation, allows movement",
                    fluid: "Amniotic fluid (shock absorber)"
                },
                yolkSac: {
                    description: "First site of blood cell formation",
                    function: "Early nutrient transfer, forms part of gut",
                    note: "Vestigial in humans (no yolk)"
                },
                allantois: {
                    description: "Forms part of umbilical cord",
                    function: "Blood vessels become umbilical vessels",
                    note: "Vestigial in humans"
                },
                chorion: {
                    description: "Outermost membrane",
                    function: "Forms fetal part of placenta",
                    villi: "Chorionic villi penetrate endometrium"
                }
            },

            developmentalControl: {
                maternalEffect: "Egg cytoplasm contains mRNAs and proteins that guide early development",
                inductionSignaling: "One cell group influences another's development",
                morphogens: "Signaling molecules that form concentration gradients",
                hoxGenes: "Master control genes determining body pattern",
                cellFate: "Progressive restriction of developmental potential"
            }
        };

        return {
            topic: "Embryonic Development",
            ...developmentContent,
            category: 'embryonic_development'
        };
    }

    handlePregnancyBirth(problem) {
        const pregnancyContent = {
            overview: {
                definition: "Period of fetal development from conception to birth",
                duration: "~40 weeks (280 days) from last menstrual period, ~38 weeks from conception",
                trimesters: "Divided into three trimesters of ~3 months each",
                terminology: {
                    embryo: "Weeks 1-8",
                    fetus: "Weeks 9-birth",
                    neonate: "Newborn (first 28 days after birth)"
                }
            },

            fetalDevelopment: {
                firstTrimester: {
                    weeks: "Weeks 1-12",
                    majorEvents: [
                        "Implantation (week 2)",
                        "Gastrulation (week 3)",
                        "Organogenesis (weeks 4-8)",
                        "All major organs form",
                        "Heart begins beating (week 4)",
                        "Limbs develop",
                        "Sex differentiation begins"
                    ],
                    size: "By end: ~6-7 cm, ~15 g",
                    criticalPeriod: "Highest risk for birth defects",
                    symptoms: "Morning sickness, fatigue, frequent urination"
                },
                secondTrimester: {
                    weeks: "Weeks 13-27",
                    majorEvents: [
                        "Rapid growth",
                        "Movement felt by mother (quickening, ~week 18-20)",
                        "Fingerprints form",
                        "Hair and nails grow",
                        "Eyes can open",
                        "Can hear sounds",
                        "Vernix (protective coating) and lanugo (fine hair) form"
                    ],
                    size: "By end: ~35 cm, ~1 kg",
                    viability: "Fetus becomes potentially viable (~24 weeks with medical care)",
                    symptoms: "Energy returns, baby bump visible, less nausea"
                },
                thirdTrimester: {
                    weeks: "Weeks 28-40",
                    majorEvents: [
                        "Continued rapid growth and weight gain",
                        "Brain develops rapidly",
                        "Lungs mature (surfactant production)",
                        "Fat deposits increase",
                        "Bones harden (but skull remains flexible)",
                        "Fetus turns head-down (usually)",
                        "Immune system develops"
                    ],
                    size: "At birth: ~50 cm, ~3-4 kg",
                    preparation: "Body prepares for birth",
                    symptoms: "Shortness of breath, back pain, frequent urination, Braxton Hicks contractions"
                }
            },
            placenta: {
                formation: {
                    timing: "Begins week 2, fully functional by week 12",
                    structure: [
                        "Chorionic villi (fetal tissue) penetrate endometrium",
                        "Maternal blood pools around villi (intervillous space)",
                        "Fetal blood in capillaries within villi",
                        "Blood doesn't mix - separated by placental membrane"
                    ],
                    attachment: "Connected to fetus via umbilical cord"
                },
                functions: [
                    "Gas exchange (O₂ and CO₂)",
                    "Nutrient transfer (glucose, amino acids, vitamins)",
                    "Waste removal (urea, uric acid)",
                    "Immune protection (antibodies cross, especially IgG)",
                    "Hormone production (hCG, estrogen, progesterone)",
                    "Thermoregulation"
                ],
                structure: {
                    fetalSide: "Chorionic villi, umbilical blood vessels",
                    maternalSide: "Decidua basalis (modified endometrium)",
                    placentalBarrier: "Separates maternal and fetal blood",
                    umbilicalCord: "Two arteries (deoxygenated), one vein (oxygenated)"
                },
                hormones: {
                    hCG: "Maintains corpus luteum early in pregnancy",
                    estrogen: "Stimulates uterine growth, mammary development",
                    progesterone: "Maintains endometrium, inhibits contractions",
                    hPL: "Human placental lactogen - metabolic effects"
                },
                size: "At term: ~20 cm diameter, ~2.5 cm thick, ~500 g",
                expulsion: "Delivered after baby (third stage of labor)"
            },

            umbilicalCord: {
                structure: [
                    "Two umbilical arteries (carry deoxygenated blood to placenta)",
                    "One umbilical vein (carries oxygenated blood to fetus)",
                    "Wharton's jelly (protective connective tissue)"
                ],
                length: "~50-60 cm at term",
                function: "Connects fetus to placenta for nutrient/waste exchange",
                clamping: "Clamped and cut after birth",
                note: "Arteries carry deoxygenated blood (opposite of normal)"
            },

            amnioticFluid: {
                composition: "Water, electrolytes, proteins, fetal urine, cells",
                volume: "~1 liter at term",
                functions: [
                    "Cushions and protects fetus",
                    "Allows movement and muscle development",
                    "Maintains constant temperature",
                    "Prevents adhesions",
                    "Lung development (fetus swallows and inhales fluid)"
                ],
                production: "Maternal blood filtration, fetal urine",
                turnover: "Completely replaced every 3 hours"
            },

            maternalChanges: {
                cardiovascular: [
                    "Blood volume increases 40-50%",
                    "Heart rate increases 10-20 bpm",
                    "Blood pressure may decrease slightly (second trimester)",
                    "Cardiac output increases"
                ],
                respiratory: [
                    "Breathing rate increases",
                    "Tidal volume increases",
                    "Diaphragm elevated by enlarged uterus"
                ],
                metabolic: [
                    "Increased caloric needs (~300 extra kcal/day)",
                    "Weight gain 11-16 kg (25-35 lbs) recommended",
                    "Insulin resistance increases",
                    "Increased nutrient needs (iron, calcium, folate)"
                ],
                hormonal: [
                    "High estrogen and progesterone",
                    "Relaxin loosens ligaments",
                    "Prolactin increases for milk production"
                ],
                uterine: [
                    "Uterus expands 500-1000x in volume",
                    "Braxton Hicks contractions (practice contractions)",
                    "Cervix softens and may begin to dilate near term"
                ],
                breast: [
                    "Mammary glands enlarge",
                    "Areola darkens",
                    "Colostrum production may begin"
                ]
            },

            laborAndBirth: {
                laborTriggers: {
                    fetal: [
                        "Fetal cortisol increases",
                        "Placental CRH increases",
                        "Fetal lungs secrete surfactant"
                    ],
                    maternal: [
                        "Estrogen:progesterone ratio increases",
                        "Oxytocin receptor expression increases",
                        "Prostaglandins increase"
                    ],
                    note: "Exact trigger mechanism still not fully understood"
                },

                stagesOfLabor: [
                    {
                        stage: "First Stage - Dilation",
                        duration: "8-12 hours (first birth), 4-8 hours (subsequent)",
                        phases: {
                            latent: {
                                description: "Early labor",
                                cervixDilation: "0-3 cm",
                                duration: "Hours to days",
                                contractions: "Irregular, mild",
                                note: "Often sent home if presenting at hospital"
                            },
                            active: {
                                description: "Active labor",
                                cervixDilation: "3-7 cm",
                                duration: "3-6 hours",
                                contractions: "Regular, stronger (every 3-5 min)"
                            },
                            transition: {
                                description: "Final dilation",
                                cervixDilation: "7-10 cm",
                                duration: "30 min - 2 hours",
                                contractions: "Very strong, frequent (every 2-3 min)",
                                note: "Most intense phase"
                            }
                        },
                        events: [
                            "Contractions increase in frequency, duration, intensity",
                            "Cervix effaces (thins) and dilates (opens)",
                            "Amniotic sac may rupture ('water breaks')",
                            "Baby descends into pelvis"
                        ],
                        endpoint: "Cervix fully dilated (10 cm)"
                    },
                    {
                        stage: "Second Stage - Expulsion",
                        duration: "20 min - 2 hours",
                        events: [
                            "Baby moves through birth canal",
                            "Mother pushes with contractions",
                            "Baby's head crowns (appears at vaginal opening)",
                            "Head delivers first (usually)",
                            "Shoulders rotate and deliver",
                            "Rest of body follows"
                        ],
                        endpoint: "Baby is born",
                        note: "Episiotomy (surgical cut) may be performed if needed"
                    },
                    {
                        stage: "Third Stage - Placental Delivery",
                        duration: "5-30 minutes",
                        events: [
                            "Uterus continues contracting",
                            "Placenta separates from uterine wall",
                            "Placenta and membranes expelled (afterbirth)",
                            "Umbilical cord clamped and cut"
                        ],
                        endpoint: "Placenta fully delivered",
                        inspection: "Placenta examined to ensure complete delivery"
                    }
                ],

                mechanismOfLabor: {
                    contractions: {
                        description: "Rhythmic uterine muscle contractions",
                        control: "Oxytocin and prostaglandins",
                        pattern: "Increase in frequency, duration, intensity",
                        function: "Dilate cervix, push baby through birth canal"
                    },
                    positiveFeedback: {
                        description: "Oxytocin positive feedback loop",
                        mechanism: [
                            "Baby presses on cervix",
                            "Stretch receptors stimulate oxytocin release",
                            "Oxytocin causes stronger contractions",
                            "Stronger contractions increase cervical stretch",
                            "Loop continues until birth"
                        ]
                    },
                    fetalMovements: {
                        engagement: "Baby's head enters pelvis",
                        descent: "Downward movement through pelvis",
                        flexion: "Head flexes (chin to chest)",
                        internalRotation: "Head rotates to fit pelvis",
                        extension: "Head extends to pass under pubic bone",
                        externalRotation: "Head rotates to align with shoulders",
                        expulsion: "Shoulders and body deliver"
                    }
                },

                painManagement: [
                    {
                        type: "Non-pharmacological",
                        methods: [
                            "Breathing techniques",
                            "Position changes",
                            "Massage",
                            "Hydrotherapy (water birth)",
                            "Hypnosis",
                            "Acupuncture"
                        ]
                    },
                    {
                        type: "Pharmacological",
                        methods: [
                            "Epidural anesthesia (most common)",
                            "Spinal block",
                            "Systemic opioids",
                            "Local anesthetics",
                            "Nitrous oxide (gas and air)"
                        ]
                    }
                ],

                complications: [
                    "Prolonged labor",
                    "Fetal distress",
                    "Umbilical cord prolapse",
                    "Shoulder dystocia",
                    "Postpartum hemorrhage",
                    "Breech presentation (feet/buttocks first)"
                ],

                cesareanSection: {
                    description: "Surgical delivery through abdominal incision",
                    indications: [
                        "Fetal distress",
                        "Abnormal presentation (breech, transverse)",
                        "Placenta previa (placenta blocks cervix)",
                        "Multiple births",
                        "Previous C-section (sometimes)",
                        "Failure to progress in labor",
                        "Maternal health conditions"
                    ],
                    rate: "~30-35% of births in US (varies by country)",
                    recovery: "Longer than vaginal birth (6 weeks typical)"
                }
            },

            postpartum: {
                immediate: {
                    newbornAssessment: {
                        Apgar: "Score at 1 and 5 minutes (appearance, pulse, grimace, activity, respiration)",
                        vitals: "Heart rate, breathing, temperature",
                        measurements: "Weight, length, head circumference",
                        examination: "Physical exam for abnormalities"
                    },
                    maternal: [
                        "Deliver placenta",
                        "Repair tears/episiotomy if needed",
                        "Monitor bleeding",
                        "Begin breastfeeding if desired"
                    ]
                },
                maternalRecovery: {
                    uterineInvolution: "Uterus returns to pre-pregnancy size (6 weeks)",
                    lochia: "Vaginal discharge (blood, tissue) for 4-6 weeks",
                    hormonal: "Rapid drop in pregnancy hormones",
                    lactation: "Milk production begins (2-4 days postpartum)",
                    emotionalChanges: "Baby blues common (50-80%), postpartum depression (10-15%)"
                }
            }
        };

        return {
            topic: "Pregnancy and Birth",
            ...pregnancyContent,
            category: 'pregnancy_birth'
        };
    }

    handleReproductiveHormones(problem) {
        const hormonesContent = {
            overview: {
                definition: "Chemical messengers regulating reproductive functions",
                axis: "Hypothalamic-Pituitary-Gonadal (HPG) axis",
                regulation: "Negative and positive feedback loops",
                importance: "Control puberty, gametogenesis, secondary sex characteristics, pregnancy"
            },

            HPGAxis: {
                description: "Three-level hormonal control system",
                levels: [
                    {
                        level: "Hypothalamus",
                        hormone: "GnRH (Gonadotropin-Releasing Hormone)",
                        secretionPattern: "Pulsatile (every 60-120 minutes)",
                        target: "Anterior pituitary",
                        function: "Stimulates FSH and LH release",
                        regulation: "Influenced by stress, nutrition, season (in some animals)"
                    },
                    {
                        level: "Anterior Pituitary",
                        hormones: ["FSH (Follicle-Stimulating Hormone)", "LH (Luteinizing Hormone)"],
                        target: "Gonads (testes, ovaries)",
                        function: "Stimulate gamete production and sex hormone secretion"
                    },
                    {
                        level: "Gonads",
                        maleHormones: ["Testosterone", "Inhibin"],
                        femaleHormones: ["Estrogen", "Progesterone", "Inhibin"],
                        function: "Sex hormones affect reproductive organs and secondary characteristics"
                    }
                ],
                feedback: {
                    negative: "Sex hormones inhibit GnRH, FSH, LH (typical)",
                    positive: "High estrogen triggers LH surge in females (mid-cycle)"
                }
            },

            maleHormones: {
                testosterone: {
                    source: "Leydig cells (interstitial cells) in testes",
                    chemicalClass: "Androgen (steroid hormone)",
                    regulation: {
                        stimulation: "LH from anterior pituitary",
                        inhibition: "Negative feedback on hypothalamus and pituitary"
                    },
                    functions: [
                        "Stimulates spermatogenesis (with FSH)",
                        "Develops and maintains male reproductive organs",
                        "Develops male secondary sex characteristics",
                        "Increases muscle mass and bone density",
                        "Deepens voice (thickens vocal cords)",
                        "Stimulates facial and body hair growth",
                        "Maintains sex drive (libido)",
                        "Influences aggressive behavior"
                    ],
                    levels: {
                        puberty: "Surge triggers male puberty (~age 12-14)",
                        adult: "Peak in 20s, gradually declines with age",
                        daily: "Peaks in morning, lowest at night"
                    },
                    conversion: "Can be converted to estrogen by aromatase enzyme"
                },
                FSH_male: {
                    source: "Anterior pituitary",
                    target: "Sertoli cells in seminiferous tubules",
                    functions: [
                        "Stimulates Sertoli cells",
                        "Supports spermatogenesis",
                        "Stimulates inhibin production"
                    ],
                    regulation: "Inhibited by inhibin (negative feedback)"
                },
                LH_male: {
                    source: "Anterior pituitary",
                    target: "Leydig cells",
                    function: "Stimulates testosterone production",
                    regulation: "Inhibited by testosterone (negative feedback)"
                },
                inhibin_male: {
                    source: "Sertoli cells",
                    target: "Anterior pituitary",
                    function: "Selectively inhibits FSH secretion",
                    purpose: "Regulates sperm production rate"
                },
                DHT: {
                    name: "Dihydrotestosterone",
                    source: "Converted from testosterone by 5α-reductase",
                    potency: "More potent than testosterone",
                    functions: [
                        "Male external genitalia development (fetal)",
                        "Prostate growth",
                        "Male pattern baldness",
                        "Body and facial hair"
                    ]
                }
            },

            femaleHormones: {
                estrogen: {
                    types: ["Estradiol (most potent)", "Estrone", "Estriol"],
                    source: "Ovarian follicles (granulosa and theca cells), corpus luteum, placenta (pregnancy)",
                    chemicalClass: "Steroid hormone",
                    regulation: {
                        stimulation: "FSH stimulates follicle cells to produce estrogen",
                        feedback: "Negative feedback at low/moderate levels, positive feedback at high levels (pre-ovulation)"
                    },
                    functions: [
                        "Develops and maintains female reproductive organs",
                        "Develops female secondary sex characteristics",
                        "Thickens endometrium (proliferative phase)",
                        "Thins cervical mucus (mid-cycle)",
                        "Breast development",
                        "Wider pelvis, fat distribution",
                        "Maintains bone density",
                        "Cardiovascular protection (premenopausal)",
                        "Affects mood and cognition"
                    ],
                    menstrualCycle: {
                        follicularPhase: "Gradually increases as follicle grows",
                        preOvulation: "Peaks, triggers LH surge",
                        lutealPhase: "Moderate levels from corpus luteum"
                    }
                },
                progesterone: {
                    source: "Corpus luteum (post-ovulation), placenta (pregnancy)",
                    chemicalClass: "Steroid hormone",
                    regulation: {
                        stimulation: "LH maintains corpus luteum",
                        hCG: "Maintains corpus luteum in early pregnancy"
                    },
                    functions: [
                        "Maintains endometrium (secretory phase)",
                        "Prepares endometrium for implantation",
                        "Inhibits uterine contractions (maintains pregnancy)",
                        "Thickens cervical mucus (blocks sperm)",
                        "Prepares mammary glands for lactation",
                        "Raises body temperature slightly",
                        "Inhibits FSH and LH (negative feedback)"
                    ],
                    menstrualCycle: {
                        follicularPhase: "Very low",
                        lutealPhase: "High from corpus luteum",
                        noPregnancy: "Drops, triggering menstruation"
                    },
                    pregnancy: "Remains high throughout pregnancy"
                },
                FSH_female: {
                    source: "Anterior pituitary",
                    target: "Ovarian follicles",
                    functions: [
                        "Stimulates follicle development",
                        "Stimulates estrogen production by follicle cells",
                        "Promotes oocyte maturation"
                    ],
                    menstrualCycle: {
                        earlyFollicular: "Rises",
                        midFollicular: "Moderate, one follicle becomes dominant",
                        luteal: "Low due to negative feedback"
                    }
                },
                LH_female: {
                    source: "Anterior pituitary",
                    target: "Ovarian follicles, corpus luteum",
                    functions: [
                        "Triggers ovulation (LH surge)",
                        "Stimulates corpus luteum formation",
                        "Stimulates androgen production (converted to estrogen)"
                    ],
                    menstrualCycle: {
                        follicular: "Low to moderate",
                        midCycle: "Dramatic surge (ovulation trigger)",
                        luteal: "Moderate, maintains corpus luteum"
                    },
                    LHSurge: "36-40 hours before ovulation, caused by high estrogen positive feedback"
                },
                inhibin_female: {
                    source: "Dominant follicle, corpus luteum",
                    target: "Anterior pituitary",
                    function: "Selectively inhibits FSH",
                    purpose: "Ensures only one follicle matures per cycle (usually)"
                },
                relaxin: {
                    source: "Corpus luteum, placenta",
                    function: "Relaxes ligaments and cervix for childbirth",
                    timing: "Increases during pregnancy"
                }
            },

            pregnancyHormones: {
                hCG: {
                    name: "Human Chorionic Gonadotropin",
                    source: "Trophoblast/placenta",
                    structure: "Similar to LH",
                    function: "Maintains corpus luteum in early pregnancy",
                    timing: "Peaks at 8-10 weeks, then declines",
                    detection: "Pregnancy test detects hCG in urine or blood",
                    levels: "Double every 2-3 days in early pregnancy"
                },
                hPL: {
                    name: "Human Placental Lactogen",
                    source: "Placenta",
                    functions: [
                        "Promotes breast development",
                        "Alters maternal metabolism (insulin resistance)",
                        "Increases nutrient availability for fetus"
                    ]
                },
                prolactin: {
                    source: "Anterior pituitary",
                    increase: "Rises during pregnancy",
                    suppression: "High estrogen and progesterone block milk production during pregnancy",
                    postpartum: "Estrogen/progesterone drop allows milk production",
                    function: "Stimulates milk production",
                    maintenance: "Suckling stimulates continued prolactin release"
                },
                oxytocin: {
                    source: "Posterior pituitary",
                    functions: [
                        "Stimulates uterine contractions during labor",
                        "Positive feedback loop during labor",
                        "Stimulates milk ejection (let-down reflex)",
                        "Promotes bonding"
                    ],
                    labor: "Oxytocin receptors increase near term",
                    breastfeeding: "Released in response to suckling"
                }
            },

            hormonalDisorders: [
                {
                    disorder: "Hypogonadism",
                    description: "Insufficient sex hormone production",
                    causes: ["Gonad dysfunction", "Pituitary problems", "Genetic disorders"],
                    effects: "Delayed puberty, infertility, reduced sex characteristics"
                },
                {
                    disorder: "Polycystic Ovary Syndrome (PCOS)",
                    description: "Hormonal disorder in women",
                    features: "High androgens, irregular periods, ovarian cysts",
                    effects: "Infertility, metabolic problems"
                },
                {
                    disorder: "Precocious Puberty",
                    description: "Early onset of puberty",
                    causes: "Early activation of HPG axis",
                    effects: "Early sexual development, short adult height"
                },
                {
                    disorder: "Kallmann Syndrome",
                    description: "GnRH deficiency",
                    effects: "Absent puberty, infertility, anosmia (no sense of smell)"
                }
            ]
        };

        return {
            topic: "Reproductive Hormones",
            ...hormonesContent,
            category: 'reproductive_hormones'
        };
    }

    handleMenstrualCycle(problem) {
        const menstrualCycleContent = {
            overview: {
                definition: "Monthly series of changes in female reproductive system preparing for pregnancy",
                averageDuration: "28 days (range 21-35 days is normal)",
                components: "Coordinated ovarian and uterine cycles",
                regulation: "Hormones from hypothalamus, pituitary, and ovaries",
                begins: "Menarche (first period, ~age 12-13)",
                ends: "Menopause (~age 45-55)"
            },

            ovarianCycle: {
                description: "Cyclic changes in ovaries",
                phases: [
                    {
                        phase: "Follicular Phase",
                        duration: "Days 1-14 (variable length)",
                        alternativeName: "Proliferative phase",
                        events: [
                            "Multiple primordial follicles begin developing",
                            "One becomes dominant follicle",
                            "Follicle cells proliferate",
                            "Oocyte grows",
                            "Follicle secretes estrogen",
                            "Antrum (fluid-filled cavity) forms"
                        ],
                        hormones: {
                            FSH: "Stimulates follicle development",
                            estrogen: "Increases as follicle grows",
                            inhibin: "From dominant follicle, suppresses FSH"
                        },
                        endpoint: "Ends with ovulation",
                        variability: "This phase varies in length (affects cycle length)"
                    },
                    {
                        phase: "Ovulation",
                        timing: "Day 14 (in 28-day cycle), 24-36 hours after LH surge",
                        trigger: "LH surge (caused by high estrogen positive feedback)",
                        events: [
                            "LH surge occurs",
                            "Oocyte completes meiosis I → secondary oocyte",
                            "Follicle wall weakens",
                            "Follicle ruptures",
                            "Secondary oocyte (with corona radiata) released",
                            "Fimbriae catch egg",
                            "Egg enters fallopian tube"
                        ],
                        hormones: {
                            LH: "Dramatic surge",
                            FSH: "Small surge",
                            estrogen: "Peaks just before, then drops"
                        },
                        signs: [
                            "Cervical mucus becomes thin, clear, stretchy",
                            "Basal body temperature rises slightly (0.5°F)",
                            "Mittelschmerz (ovulation pain) in some women",
                            "LH surge detected by ovulation predictor kits"
                        ],
                        fertilityWindow: "5 days before to 1 day after ovulation"
                    },
                    {
                        phase: "Luteal Phase",
                        duration: "Days 15-28 (consistently ~14 days)",
                        alternativeName: "Secretory phase",
                        events: [
                            "Ruptured follicle becomes corpus luteum",
                            "Corpus luteum secretes progesterone and estrogen",
                            "If no pregnancy: corpus luteum degenerates after ~14 days",
                            "If pregnancy: hCG maintains corpus luteum"
                        ],
                        hormones: {
                            progesterone: "High (from corpus luteum)",
                            estrogen: "Moderate (from corpus luteum)",
                            FSH_LH: "Low (negative feedback)"
                        },
                        corpusLuteum: {
                            formation: "LH triggers transformation of follicle remains",
                            function: "Produces progesterone and estrogen",
                            noPregnancy: "Degenerates into corpus albicans (scar tissue)",
                            pregnancy: "Maintained by hCG from embryo"
                        },
                        endpoint: "Ends with menstruation if no pregnancy",
                        consistent: "This phase is consistent ~14 days"
                    }
                ]
            },

            uterineCycle: {
                description: "Cyclic changes in uterine endometrium",
                phases: [
                    {
                        phase: "Menstrual Phase (Menstruation)",
                        duration: "Days 1-5 (Day 1 = first day of bleeding)",
                        events: [
                            "Progesterone and estrogen drop (corpus luteum degenerates)",
                            "Spiral arteries constrict",
                            "Endometrium loses blood supply",
                            "Functional layer of endometrium sheds",
                            "Blood, tissue, mucus discharged through vagina"
                        ],
                        discharge: {
                            composition: "Blood, endometrial tissue, mucus",
                            volume: "30-80 mL (2-6 tablespoons)",
                            characteristics: "Dark red, may have clots"
                        },
                        hormones: "All low",
                        symptoms: "Cramps (prostaglandins cause uterine contractions), fatigue, mood changes",
                        note: "Functional layer sheds, basal layer remains"
                    },
                    {
                        phase: "Proliferative Phase",
                        duration: "Days 6-14",
                        corresponds: "Follicular phase of ovarian cycle",
                        events: [
                            "Estrogen stimulates endometrial regrowth",
                            "Endometrium thickens (2-3 mm → 8-10 mm)",
                            "Epithelial cells proliferate",
                            "Glands elongate",
                            "Blood vessels grow",
                            "Cervical mucus becomes thin and watery"
                        ],
                        hormone: "Estrogen (increasing)",
                        purpose: "Rebuild endometrium in preparation for possible implantation",
                        endpoint: "Ovulation"
                    },
                    {
                        phase: "Secretory Phase",
                        duration: "Days 15-28",
                        corresponds: "Luteal phase of ovarian cycle",
                        events: [
                            "Progesterone transforms endometrium",
                            "Glands become coiled and secrete glycogen-rich fluid",
                            "Blood vessels become spiral-shaped",
                            "Endometrium becomes receptive to implantation",
                            "Cervical mucus becomes thick and sticky",
                            "Endometrium reaches maximum thickness (10-16 mm)"
                        ],
                        hormones: "Progesterone (high), estrogen (moderate)",
                        purpose: "Prepare endometrium to receive and nourish embryo",
                        implantationWindow: "Days 20-24 (6-10 days after ovulation)",
                        ifNoImplantation: "Progesterone drops, endometrium begins to break down"
                    }
                ]
            },

            hormonalControl: {
                day1_5: {
                    phase: "Menstruation",
                    FSH: "Begins to rise",
                    LH: "Low",
                    estrogen: "Low",
                    progesterone: "Low",
                    event: "Menstrual bleeding"
                },
                day6_13: {
                    phase: "Follicular/Proliferative",
                    FSH: "Moderate (stimulates follicle)",
                    LH: "Low to moderate",
                    estrogen: "Rising (from growing follicle)",
                    progesterone: "Low",
                    event: "Follicle develops, endometrium thickens"
                },
                day14: {
                    phase: "Ovulation",
                    FSH: "Small surge",
                    LH: "Large surge",
                    estrogen: "Peak then drop",
                    progesterone: "Begins to rise",
                    event: "Egg released"
                },
                day15_28: {
                    phase: "Luteal/Secretory",
                    FSH: "Low (negative feedback)",
                    LH: "Low to moderate (maintains corpus luteum)",
                    estrogen: "Moderate (from corpus luteum)",
                    progesterone: "High (from corpus luteum)",
                    event: "Endometrium prepares for implantation",
                    ifNoPregnancy: "Progesterone drops day 26-28, triggering menstruation"
                }
            },

            feedbackMechanisms: {
                negativeFeedback: {
                    description: "High hormone levels inhibit their own production",
                    example: "High estrogen and progesterone inhibit FSH and LH during luteal phase",
                    purpose: "Prevent multiple ovulations, maintain stability"
                },
                positiveFeedback: {
                    description: "High hormone level stimulates further release",
                    example: "High estrogen at end of follicular phase triggers LH surge",
                    purpose: "Trigger ovulation",
                    unique: "Only positive feedback in reproductive physiology"
                }
            },

            cycleVariations: {
                regularCycles: "21-35 days is considered normal range",
                irregularCycles: [
                    "Common in first few years after menarche",
                    "Common approaching menopause",
                    "Can indicate hormonal imbalances",
                    "Stress, weight changes, exercise can affect cycle"
                ],
                anovulatoryCycles: "Cycles without ovulation (no corpus luteum, no progesterone surge)",
                amenorrhea: {
                    primary: "No menstruation by age 16",
                    secondary: "Absence of menstruation for 3+ months in woman who previously menstruated",
                    causes: ["Pregnancy", "Breastfeeding", "Menopause", "Stress", "Excessive exercise", "Eating disorders", "Hormonal disorders", "Structural abnormalities"]
                },
                dysmenorrhea: {
                    description: "Painful menstruation",
                    primary: "Caused by prostaglandins (uterine contractions)",
                    secondary: "Caused by underlying condition (endometriosis, fibroids)",
                    treatment: "NSAIDs, hormonal contraceptives, heat"
                }
            },

            fertilityAwareness: {
                fertileDays: "5 days before ovulation to 1 day after",
                ovulationSigns: [
                    "LH surge (detected by ovulation kits)",
                    "Cervical mucus changes (clear, stretchy, 'egg white')",
                    "Basal body temperature rise (0.5-1°F after ovulation)",
                    "Mittelschmerz (ovulation pain)",
                    "Cervical position changes (higher, softer, more open)"
                ],
                spermSurvival: "Up to 5 days in female reproductive tract",
                eggSurvival: "12-24 hours after ovulation"
            },

            clinicalApplications: [
                "Fertility awareness methods",
                "Timing intercourse for conception",
                "Contraception (avoiding fertile window)",
                "Diagnosing reproductive disorders",
                "Understanding hormonal contraceptive effects",
                "IVF timing and hormone supplementation"
            ]
        };

        return {
            topic: "Menstrual Cycle",
            ...menstrualCycleContent,
            category: 'menstrual_cycle'
        };
    }

    handlePlantReproduction(problem) {
        const plantReproductionContent = {
            overview: {
                definition: "Reproductive strategies in plants, both sexual and asexual",
                uniqueFeature: "Alternation of generations (haploid and diploid phases)",
                diversity: "Varied strategies from simple to complex",
                importance: "Basis of agriculture, horticulture, and plant breeding"
            },

            alternationOfGenerations: {
                definition: "Life cycle alternates between diploid sporophyte and haploid gametophyte",
                sporophyte: {
                    ploidy: "Diploid (2n)",
                    dominance: "Dominant generation in most plants",
                    produces: "Spores through meiosis",
                    examples: "The plant we see (tree, flower, fern frond)"
                },
                gametophyte: {
                    ploidy: "Haploid (n)",
                    dominance: "Reduced in seed plants (microscopic)",
                    produces: "Gametes through mitosis",
                    examples: "Pollen grain (male), embryo sac (female)"
                },
                cycle: [
                    "Diploid sporophyte produces haploid spores (meiosis)",
                    "Spores develop into haploid gametophyte",
                    "Gametophyte produces haploid gametes (mitosis)",
                    "Gametes fuse (fertilization) to form diploid zygote",
                    "Zygote develops into diploid sporophyte"
                ],
                evolutionaryTrend: "Sporophyte increasingly dominant, gametophyte reduced"
            },

            flowerStructure: {
                function: "Reproductive structure in angiosperms (flowering plants)",
                parts: [
                    {
                        structure: "Sepals",
                        collectiveName: "Calyx",
                        function: "Protect flower bud",
                        appearance: "Usually green, leaf-like"
                    },
                    {
                        structure: "Petals",
                        collectiveName: "Corolla",
                        function: "Attract pollinators",
                        appearance: "Colorful, may have scent and nectar"
                    },
                    {
                        structure: "Stamens (Male parts)",
                        collectiveName: "Androecium",
                        components: {
                            anther: "Produces pollen (male gametophytes)",
                            filament: "Stalk supporting anther"
                        },
                        function: "Produce and release pollen"
                    },
                    {
                        structure: "Carpels (Female parts)",
                        collectiveName: "Gynoecium or Pistil",
                        components: {
                            stigma: "Sticky surface receives pollen",
                            style: "Tube connecting stigma and ovary",
                            ovary: "Contains ovules (become seeds)"
                        },
                        function: "Receive pollen, house and nourish ovules"
                    }
                ],
                flowerTypes: {
                    complete: "Has all four parts (sepals, petals, stamens, carpels)",
                    incomplete: "Missing one or more parts",
                    perfect: "Has both stamens and carpels (bisexual)",
                    imperfect: "Has only stamens or carpels (unisexual)"
                }
            },

            pollenFormation: {
                definition: "Development of male gametophytes (pollen)",
                location: "Anthers of stamens",
                process: [
                    {
                        stage: "Microsporogenesis",
                        event: "Diploid microspore mother cells undergo meiosis",
                        result: "Four haploid microspores"
                    },
                    {
                        stage: "Microgametogenesis",
                        event: "Each microspore develops into pollen grain",
                        divisions: "Microspore nucleus divides by mitosis",
                        result: "Pollen grain with two cells: generative cell and tube cell"
                    },
                    {
                        stage: "Mature Pollen",
                        structure: [
                            "Tube cell (larger, will form pollen tube)",
                            "Generative cell (smaller, will form sperm cells)",
                            "Protective outer wall (sporopollenin)"
                        ],
                        note: "Pollen is released at this stage in most species"
                    }
                ],
                pollenGrain: "Immature male gametophyte"
            },

            ovuleFormation: {
                definition: "Development of female gametophytes (embryo sacs)",
                location: "Ovules within ovary",
                process: [
                    {
                        stage: "Megasporogenesis",
                        event: "Diploid megaspore mother cell undergoes meiosis",
                        result: "Four haploid megaspores",
                        survival: "Usually only one survives"
                    },
                    {
                        stage: "Megagametogenesis",
                        event: "Surviving megaspore undergoes three mitotic divisions",
                        result: "Eight haploid nuclei in seven cells"
                    },
                    {
                        stage: "Mature Embryo Sac",
                        structure: [
                            "Egg cell (at micropyle end)",
                            "Two synergid cells (flank egg cell)",
                            "Central cell with two polar nuclei",
                            "Three antipodal cells (opposite end)"
                        ],
                        important: "Egg cell and central cell (for double fertilization)"
                    }
                ],
                ovule: {
                    components: [
                        "Nucellus (megasporangium tissue)",
                        "Integuments (protective layers)",
                        "Micropyle (small opening)",
                        "Embryo sac (female gametophyte)"
                    ]
                }
            },

            pollination: {
                definition: "Transfer of pollen from anther to stigma",
                types: [
                    {
                        type: "Self-Pollination",
                        description: "Pollen from same flower or same plant",
                        advantage: "Reliable, no pollinator needed",
                        disadvantage: "No genetic variation",
                        examples: ["Peas", "Wheat", "Tomatoes"]
                    },
                    {
                        type: "Cross-Pollination",
                        description: "Pollen from different plant",
                        advantage: "Genetic variation, vigor",
                        disadvantage: "Requires pollinator or wind",
                        examples: ["Most flowering plants"]
                    }
                ],
                mechanisms: [
                    {
                        mechanism: "Wind Pollination (Anemophily)",
                        characteristics: [
                            "Small, light, abundant pollen",
                            "Large, feathery stigmas",
                            "Dull, small flowers",
                            "No nectar or fragrance"
                        ],
                        examples: ["Grasses", "Corn", "Oak trees", "Ragweed"]
                    },
                    {
                        mechanism: "Animal Pollination (Zoophily)",
                        characteristics: [
                            "Colorful, fragrant flowers",
                            "Nectar rewards",
                            "Sticky, sculptured pollen",
                            "Specific flower-pollinator relationships"
                        ],
                        pollinators: {
                            insects: "Bees (most common), butterflies, moths, flies, beetles",
                            birds: "Hummingbirds (red tubular flowers)",
                            bats: "Night-blooming flowers",
                            other: "Small mammals, lizards"
                        },
                        examples: ["Most flowering plants"]
                    },
                    {
                        mechanism: "Water Pollination (Hydrophily)",
                        characteristics: "Pollen floats on water surface",
                        examples: ["Some aquatic plants"]
                    }
                ],
                coevolution: "Many plants and pollinators have coevolved specific relationships"
            },

            doubleFertilization: {
                definition: "Unique process in flowering plants where two fertilizations occur",
                location: "Embryo sac within ovule",
                process: [
                    {
                        step: "Pollen Germination",
                        event: "Pollen lands on stigma and germinates",
                        result: "Pollen tube grows down style toward ovule"
                    },
                    {
                        step: "Sperm Formation",
                        event: "Generative cell divides by mitosis",
                        result: "Two sperm cells",
                        location: "Inside pollen tube"
                    },
                    {
                        step: "Pollen Tube Entry",
                        event: "Pollen tube enters ovule through micropyle",
                        result: "Pollen tube reaches embryo sac"
                    },
                    {
                        step: "First Fertilization",
                        event: "One sperm fuses with egg cell",
                        result: "Diploid zygote (2n)",
                        develops: "Embryo"
                    },
                    {
                        step: "Second Fertilization",
                        event: "Second sperm fuses with two polar nuclei in central cell",
                        result: "Triploid endosperm nucleus (3n)",
                        develops: "Endosperm (nutritive tissue)"
                    }
                ],
                unique: "Only occurs in flowering plants (angiosperms)",
                advantage: "Endosperm only develops if fertilization successful (energy efficient)"
            },

            seedDevelopment: {
                definition: "Ovule develops into seed after fertilization",
                components: [
                    {
                        part: "Embryo",
                        origin: "Develops from diploid zygote",
                        parts: [
                            "Radicle (embryonic root)",
                            "Hypocotyl (embryonic stem)",
                            "Cotyledons (seed leaves: 1 in monocots, 2 in dicots)",
                            "Epicotyl (shoot tip)"
                        ]
                    },
                    {
                        part: "Endosperm",
                        origin: "Develops from triploid endosperm nucleus",
                        function: "Nutritive tissue for embryo",
                        fate: {
                            monocots: "Retained in mature seed (corn, wheat)",
                            dicots: "Often absorbed by cotyledons (beans, peas)"
                        }
                    },
                    {
                        part: "Seed Coat",
                        origin: "Develops from integuments of ovule",
                        function: "Protection",
                        layers: "Testa (outer) and tegmen (inner)"
                    }
                ],
                dormancy: {
                    definition: "Metabolically inactive state",
                    function: "Survive unfavorable conditions, time germination",
                    breakage: "May require cold, fire, scarification, or time"
                }
            },

            fruitDevelopment: {
                definition: "Ovary develops into fruit",
                function: "Protect and disperse seeds",
                types: [
                    {
                        type: "Simple Fruit",
                        origin: "One ovary",
                        examples: ["Apple", "Tomato", "Pea pod"]
                    },
                    {
                        type: "Aggregate Fruit",
                        origin: "Multiple ovaries from one flower",
                        examples: ["Raspberry", "Strawberry"]
                    },
                    {
                        type: "Multiple Fruit",
                        origin: "Multiple flowers",
                        examples: ["Pineapple", "Fig"]
                    }
                ],
                fleshyVsDry: {
                    fleshy: "Attract animals for dispersal (berries, drupes)",
                    dry: "May split open or rely on wind (nuts, legumes, capsules)"
                },
                dispersal: [
                    "Wind (dandelion, maple)",
                    "Animals (berries, burrs)",
                    "Water (coconut)",
                    "Explosive (touch-me-not)"
                ]
            },

            asexualReproduction: {
                definition: "Reproduction without seeds or spores",
                advantages: [
                    "Rapid colonization",
                    "Preserves desirable traits",
                    "No pollinator needed",
                    "Can reproduce when isolated"
                ],
                methods: [
                    {
                        method: "Runners (Stolons)",
                        description: "Horizontal stems along ground surface",
                        examples: ["Strawberry", "Spider plant"]
                    },
                    {
                        method: "Rhizomes",
                        description: "Underground horizontal stems",
                        examples: ["Ginger", "Iris", "Bamboo"]
                    },
                    {
                        method: "Tubers",
                        description: "Enlarged underground stems",
                        examples: ["Potato"]
                    },
                    {
                        method: "Bulbs",
                        description: "Short underground stem with fleshy leaves",
                        examples: ["Onion", "Tulip", "Garlic"]
                    },
                    {
                        method: "Corms",
                        description: "Solid underground stem",
                        examples: ["Crocus", "Gladiolus"]
                    },
                    {
                        method: "Suckers",
                        description: "Shoots from roots",
                        examples: ["Raspberry", "Aspen trees"]
                    },
                    {
                        method: "Plantlets",
                        description: "Miniature plants on leaves",
                        examples: ["Kalanchoe", "Spider plant"]
                    },
                    {
                        method: "Fragmentation",
                        description: "Pieces break off and grow",
                        examples: ["Mosses", "Liverworts"]
                    }
                ],
                artificialPropagation: {
                    cuttings: "Stem, leaf, or root pieces develop roots",
                    grafting: "Join parts of two plants",
                    layering: "Stem roots while attached to parent",
                    tissue_culture: "Grow plants from small tissue samples"
                }
            }
        };

        return {
            topic: "Plant Reproduction",
            ...plantReproductionContent,
            category: 'plant_reproduction'
        };
    }

    handleReproductiveTechnologies(problem) {
        const technologiesContent = {
            overview: {
                definition: "Medical and scientific techniques to assist, prevent, or manipulate reproduction",
                categories: ["Assisted reproductive technologies (ART)", "Contraception", "Genetic technologies", "Cloning"],
                ethicalConsiderations: "Raises questions about definition of parenthood, embryo status, access to technology"
            },

            assistedReproductiveTechnologies: {
                IVF: {
                    name: "In Vitro Fertilization",
                    definition: "Fertilization outside the body in laboratory",
                    indications: [
                        "Blocked or damaged fallopian tubes",
                        "Male factor infertility",
                        "Ovulation disorders",
                        "Endometriosis",
                        "Unexplained infertility",
                        "Genetic disorders (with PGD)"
                    ],
                    process: [
                        {
                            step: "Ovarian Stimulation",
                            description: "Hormone injections stimulate multiple egg development",
                            drugs: "FSH, LH analogs",
                            monitoring: "Ultrasound and blood tests",
                            duration: "10-14 days"
                        },
                        {
                            step: "Egg Retrieval",
                            description: "Eggs collected from ovaries via needle aspiration",
                            procedure: "Transvaginal ultrasound-guided",
                            anesthesia: "Light sedation",
                            duration: "20-30 minutes"
                        },
                        {
                            step: "Sperm Collection",
                            description: "Sperm obtained and prepared",
                            method: "Masturbation or surgical extraction",
                            preparation: "Washing, concentration of best sperm"
                        },
                        {
                            step: "Fertilization",
                            description: "Eggs and sperm combined in laboratory",
                            methods: [
                                "Conventional IVF: sperm added to eggs",
                                "ICSI: single sperm injected into each egg"
                            ],
                            timing: "4-6 hours after egg retrieval"
                        },
                        {
                            step: "Embryo Culture",
                            description: "Fertilized eggs develop in incubator",
                            duration: "3-5 days",
                            monitoring: "Daily embryo assessment",
                            stages: "Zygote → 2-cell → 4-cell → 8-cell → Morula → Blastocyst"
                        },
                        {
                            step: "Embryo Transfer",
                            description: "Embryo(s) placed in uterus",
                            procedure: "Thin catheter through cervix",
                            number: "Typically 1-2 embryos (to reduce multiples)",
                            timing: "Day 3 or day 5 after fertilization",
                            painless: "No anesthesia needed"
                        },
                        {
                            step: "Pregnancy Test",
                            description: "Blood test for hCG",
                            timing: "10-14 days after transfer"
                        }
                    ],
                    successRates: {
                        overall: "~30-40% per cycle (varies by age)",
                        under35: "~40-50%",
                        over40: "~10-20%",
                        factors: "Age, cause of infertility, embryo quality, clinic expertise"
                    },
                    risks: [
                        "Ovarian hyperstimulation syndrome (OHSS)",
                        "Multiple pregnancy",
                        "Ectopic pregnancy",
                        "Egg retrieval complications (rare)",
                        "Emotional and financial stress"
                    ],
                    costs: "$12,000-15,000 per cycle (US, varies widely)"
                },

                ICSI: {
                    name: "Intracytoplasmic Sperm Injection",
                    description: "Single sperm injected directly into egg",
                    indications: [
                        "Severe male factor infertility",
                        "Low sperm count or motility",
                        "Previous IVF fertilization failure",
                        "Use of frozen sperm",
                        "Sperm retrieved surgically"
                    ],
                    procedure: "Embryologist injects one sperm into egg using micropipette",
                    advantage: "Bypasses natural fertilization barriers",
                    successRate: "Similar to conventional IVF when sperm is issue"
                },

                artificialInsemination: {
                    types: {
                        IUI: {
                            name: "Intrauterine Insemination",
                            description: "Washed sperm placed directly in uterus",
                            timing: "Around ovulation",
                            indications: [
                                "Mild male factor",
                                "Cervical mucus problems",
                                "Unexplained infertility",
                                "Same-sex couples",
                                "Single women"
                            ],
                            procedure: "Simple, painless office procedure",
                            successRate: "10-20% per cycle",
                            cost: "$300-1,000 per cycle"
                        },
                        ICI: {
                            name: "Intracervical Insemination",
                            description: "Sperm placed at cervix",
                            simpler: "Less processing needed",
                            lowerSuccess: "Than IUI"
                        }
                    },
                    spermSources: [
                        "Partner sperm",
                        "Donor sperm (anonymous or known)",
                        "Frozen sperm"
                    ]
                },

                surrogacy: {
                    definition: "Woman carries pregnancy for intended parents",
                    types: {
                        traditional: {
                            description: "Surrogate's own egg used",
                            fertilization: "Artificial insemination",
                            genetics: "Surrogate genetically related to child"
                        },
                        gestational: {
                            description: "IVF embryo from intended parents",
                            genetics: "Surrogate not genetically related",
                            more_common: "Currently preferred method"
                        }
                    },
                    indications: [
                        "No uterus (congenital or surgical)",
                        "Medical conditions preventing pregnancy",
                        "Repeated IVF failures",
                        "Male same-sex couples"
                    ],
                    legal: "Complex, varies by country/state",
                    costs: "$100,000+ (US)"
                },

                eggDonation: {
                    description: "Eggs from donor used in IVF",
                    indications: [
                        "Premature ovarian failure",
                        "Poor egg quality",
                        "Advanced maternal age",
                        "Genetic disorders",
                        "Ovaries removed"
                    ],
                    process: "Donor undergoes ovarian stimulation and egg retrieval",
                    donors: "Anonymous or known",
                    legalGenetics: "Recipient is legal mother, donor not genetically related legally"
                },

                embryoCryopreservation: {
                    description: "Freezing embryos for future use",
                    method: "Vitrification (ultra-rapid freezing)",
                    uses: [
                        "Extra embryos from IVF cycle",
                        "Delay pregnancy (medical or personal reasons)",
                        "Preserve fertility before cancer treatment"
                    ],
                    storage: "Indefinite in liquid nitrogen",
                    survivalRate: "~95% of embryos survive thawing",
                    successRate: "Similar to fresh embryos"
                },

                PGT: {
                    name: "Preimplantation Genetic Testing",
                    description: "Genetic testing of IVF embryos before transfer",
                    types: {
                        PGT_A: "Aneuploidy screening (wrong number of chromosomes)",
                        PGT_M: "Monogenic/single gene disorders (cystic fibrosis, sickle cell)",
                        PGT_SR: "Structural rearrangements (translocations)"
                    },
                    procedure: "Biopsy few cells from blastocyst, analyze DNA",
                    advantages: [
                        "Select chromosomally normal embryos",
                        "Avoid genetic diseases",
                        "Improve IVF success rates",
                        "Reduce miscarriage risk"
                    ],
                    ethical: "Concerns about embryo selection, 'designer babies'"
                }
            },

            contraception: {
                definition: "Methods to prevent pregnancy",
                categories: [
                    {
                        category: "Hormonal Methods",
                        mechanism: "Prevent ovulation, thicken cervical mucus, thin endometrium",
                        types: [
                            {
                                method: "Combined Oral Contraceptive (The Pill)",
                                hormones: "Estrogen + Progestin",
                                dosing: "Daily pill",
                                effectiveness: "91-99%",
                                benefits: "Regular periods, reduced cramps, acne improvement",
                                risks: "Blood clots (rare), nausea, mood changes"
                            },
                            {
                                method: "Progestin-Only Pill (Mini-Pill)",
                                hormones: "Progestin only",
                                dosing: "Daily, strict timing",
                                effectiveness: "91-99%",
                                suitable: "Breastfeeding, can't take estrogen"
                            },
                            {
                                method: "Contraceptive Patch",
                                hormones: "Estrogen + Progestin",
                                dosing: "Weekly patch change",
                                effectiveness: "91-99%"
                            },
                            {
                                method: "Vaginal Ring",
                                hormones: "Estrogen + Progestin",
                                dosing: "Monthly ring",
                                effectiveness: "91-99%"
                            },
                            {
                                method: "Contraceptive Implant",
                                hormones: "Progestin only",
                                dosing: "Inserted under skin, lasts 3 years",
                                effectiveness: ">99%",
                                note: "Most effective reversible method"
                            },
                            {
                                method: "Contraceptive Injection (Depo-Provera)",
                                hormones: "Progestin only",
                                dosing: "Injection every 3 months",
                                effectiveness: "94-99%"
                            }
                        ]
                    },
                    {
                        category: "Barrier Methods",
                        mechanism: "Physically block sperm",
                        types: [
                            {
                                method: "Male Condom",
                                effectiveness: "85-98%",
                                benefits: "STI protection",
                                material: "Latex, polyurethane, lambskin"
                            },
                            {
                                method: "Female Condom",
                                effectiveness: "79-95%",
                                benefits: "STI protection, woman-controlled"
                            },
                            {
                                method: "Diaphragm",
                                description: "Silicone cup covers cervix",
                                effectiveness: "88-94% (with spermicide)",
                                requires: "Fitting by healthcare provider"
                            },
                            {
                                method: "Cervical Cap",
                                description: "Smaller than diaphragm",
                                effectiveness: "71-86%"
                            }
                        ]
                    },
                    {
                        category: "Intrauterine Devices (IUDs)",
                        types: [
                            {
                                method: "Hormonal IUD (Mirena, Skyla)",
                                mechanism: "Releases progestin locally",
                                duration: "3-7 years depending on brand",
                                effectiveness: ">99%",
                                benefits: "Lighter periods, may stop"
                            },
                            {
                                method: "Copper IUD (Paragard)",
                                mechanism: "Copper toxic to sperm",
                                duration: "Up to 10-12 years",
                                effectiveness: ">99%",
                                benefits: "Hormone-free",
                                note: "Can be used as emergency contraception"
                            }
                        ],
                        advantages: "Long-acting, reversible, highly effective",
                        risks: "Insertion pain, possible expulsion, perforation (rare)"
                    },
                    {
                        category: "Permanent Methods (Sterilization)",
                        types: [
                            {
                                method: "Tubal Ligation (Female)",
                                description: "Fallopian tubes cut, tied, or blocked",
                                procedure: "Surgical, usually laparoscopic",
                                effectiveness: ">99%",
                                reversibility: "Difficult, expensive, not guaranteed"
                            },
                            {
                                method: "Vasectomy (Male)",
                                description: "Vas deferens cut and sealed",
                                procedure: "Minor surgery, local anesthesia",
                                effectiveness: ">99%",
                                recovery: "Quicker and simpler than tubal ligation",
                                reversibility: "Possible but not guaranteed"
                            }
                        ]
                    },
                    {
                        category: "Natural Methods",
                        types: [
                            {
                                method: "Fertility Awareness Methods",
                                description: "Track fertile days, avoid intercourse",
                                tracking: "Basal body temperature, cervical mucus, calendar",
                                effectiveness: "76-99% (perfect use)",
                                requires: "Diligence, regular cycles"
                            },
                            {
                                method: "Withdrawal",
                                description: "Penis removed before ejaculation",
                                effectiveness: "78-96%",
                                risks: "Pre-ejaculate can contain sperm, requires control"
                            }
                        ]
                    },
                    {
                        category: "Emergency Contraception",
                        types: [
                            {
                                method: "Emergency Contraceptive Pills (Plan B)",
                                timing: "Up to 72-120 hours after unprotected sex (sooner is better)",
                                mechanism: "Delays or prevents ovulation",
                                effectiveness: "75-89%",
                                note: "NOT abortion pill, doesn't work if already pregnant"
                            },
                            {
                                method: "Copper IUD",
                                timing: "Up to 5 days after unprotected sex",
                                effectiveness: ">99%",
                                benefit: "Can be kept for ongoing contraception"
                            }
                        ]
                    }
                ]
            },

            cloning: {
                definition: "Creating genetically identical organisms",
                types: {
                    reproductiveCloning: {
                        description: "Create living organism genetically identical to donor",
                        method: "Somatic cell nuclear transfer (SCNT)",
                        process: [
                            "Remove nucleus from egg cell",
                            "Insert nucleus from adult somatic cell",
                            "Stimulate to begin dividing",
                            "Implant embryo into surrogate"
                        ],
                        example: "Dolly the sheep (1996)",
                        efficiency: "Very low success rate",
                        humanStatus: "Banned in most countries",
                        ethical: "Major concerns about safety, identity, exploitation"
                    },
                    therapeuticCloning: {
                        description: "Create embryos for stem cells, not for reproduction",
                        purpose: "Generate patient-specific stem cells",
                        applications: [
                            "Regenerative medicine",
                            "Disease research",
                            "Drug testing"
                        ],
                        ethical: "Controversial due to embryo destruction",
                        alternative: "Induced pluripotent stem cells (iPSCs)"
                    }
                }
            },

            geneticTechnologies: {
                preimplantationDiagnosis: "See PGT above",
                prenatalTesting: {
                    types: [
                        "Amniocentesis (analyze amniotic fluid)",
                        "Chorionic villus sampling (CVS)",
                        "Non-invasive prenatal testing (NIPT) - cell-free fetal DNA in maternal blood"
                    ],
                    purpose: "Detect genetic abnormalities during pregnancy"
                },
                carrierScreening: {
                    description: "Test prospective parents for recessive disease genes",
                    timing: "Before or during early pregnancy",
                    detects: "Cystic fibrosis, sickle cell, Tay-Sachs, many others",
                    purpose: "Assess risk of genetic disease in offspring"
                },
                geneTherapy: {
                    description: "Correct genetic defects",
                    status: "Experimental for most conditions",
                    ethical: "Distinction between somatic (body cells) and germline (heritable) modifications"
                },
                CRISPR: {
                    name: "CRISPR-Cas9 gene editing",
                    description: "Precise DNA editing technology",
                    potential: "Correct genetic diseases, enhance traits",
                    controversy: "Human embryo editing (He Jiankui scandal, 2018)",
                    ethical: "Designer babies, unintended consequences, equity"
                }
            },

            ethicalConsiderations: [
                "Access and equity (expensive treatments)",
                "Embryo status and rights",
                "Multiple births from ART",
                "Genetic selection and eugenics concerns",
                "Commercialization of reproduction",
                "Long-term health effects unknown",
                "Psychological impacts on children",
                "Surrogacy exploitation concerns",
                "Playing God / naturalness arguments",
                "Religious and cultural perspectives"
            ],

            legalLandscape: {
                variability: "Laws vary dramatically by country and region",
                regulatedAreas: [
                    "ART clinic licensing and oversight",
                    "Embryo research limits",
                    "Surrogacy legality and contracts",
                    "Donor anonymity",
                    "Access to technology (singles, LGBTQ+)",
                    "Cloning prohibitions",
                    "Embryo storage and disposition"
                ],
                unregulated: "Some countries have minimal regulation"
            }
        };

        return {
            topic: "Reproductive Technologies",
            ...technologiesContent,
            category: 'reproductive_technologies'
        };
    }

    handleDevelopmentalBiology(problem) {
        const developmentalContent = {
            overview: {
                definition: "Study of mechanisms controlling organism development from fertilized egg to adult",
                centralQuestions: [
                    "How does a single cell become a complex organism?",
                    "How do cells become different from each other?",
                    "How do organs form in the right place?",
                    "How is development regulated?"
                ],
                importance: "Understanding normal development helps explain birth defects, regeneration, cancer"
            },

            cellDifferentiation: {
                definition: "Process by which cells become specialized",
                mechanism: "Differential gene expression - different genes active in different cells",
                potency: [
                    {
                        type: "Totipotent",
                        definition: "Can form entire organism plus extraembryonic tissues",
                        examples: "Zygote, early blastomeres",
                        potential: "Most versatile"
                    },
                    {
                        type: "Pluripotent",
                        definition: "Can form all cell types of body but not extraembryonic tissues",
                        examples: "Embryonic stem cells (inner cell mass)",
                        potential: "Can form any body cell"
                    },
                    {
                        type: "Multipotent",
                        definition: "Can form multiple related cell types",
                        examples: "Hematopoietic stem cells (blood cell precursors), neural stem cells",
                        potential: "Limited to lineage"
                    },
                    {
                        type: "Unipotent",
                        definition: "Can form only one cell type",
                        examples: "Spermatogonial stem cells",
                        potential: "Most restricted"
                    }
                ],
                determination: {
                    definition: "Cell's developmental fate becomes fixed",
                    reversibility: "Usually irreversible in normal development",
                    timing: "Occurs before visible differentiation",
                    testing: "Transplantation experiments show determination"
                },
                differentiation: {
                    definition: "Cell expresses specialized characteristics",
                    visible: "Structural and functional changes appear",
                    genes: "Specific genes activated, others silenced",
                    maintenance: "Differentiated state usually stable"
                }
            },

            patternFormation: {
                definition: "Establishment of body axes and spatial organization",
                bodyAxes: {
                    anteroposterior: "Head to tail (front to back)",
                    dorsoventral: "Back to belly (top to bottom)",
                    leftRight: "Bilateral symmetry"
                },
                mechanisms: [
                    {
                        mechanism: "Morphogen Gradients",
                        description: "Signaling molecules form concentration gradients",
                        function: "Different concentrations trigger different responses",
                        example: "Bicoid in Drosophila (fruit fly) - determines anterior structures",
                        thresholdModel: "Cells respond based on morphogen concentration"
                    },
                    {
                        mechanism: "Cell-Cell Signaling",
                        description: "Direct communication between adjacent cells",
                        types: [
                            "Contact-dependent (direct contact required)",
                            "Paracrine (local diffusible signals)",
                            "Endocrine (hormones over distance)"
                        ],
                        pathways: "Notch, Wnt, Hedgehog, TGF-β families"
                    },
                    {
                        mechanism: "Induction",
                        description: "One group of cells influences development of another",
                        types: {
                            instructive: "Inducing tissue specifies cell fate",
                            permissive: "Inducing tissue allows predetermined fate"
                        },
                        example: "Optic vesicle induces lens formation from ectoderm"
                    }
                ],
                positionalInformation: {
                    description: "Cells 'know' their position in embryo",
                    mechanism: "Morphogen gradients, cell adhesion molecules, timing",
                    response: "Position determines gene expression and fate"
                }
            },

            geneticControl: {
                maternalEffectGenes: {
                    description: "Mother's genes control early development",
                    mechanism: "mRNAs and proteins deposited in egg",
                    function: "Establish initial body axes",
                    timing: "Before embryonic genome activated",
                    example: "Bicoid, Nanos in Drosophila"
                },
                hoxGenes: {
                    description: "Master control genes determining body pattern",
                    structure: "Clustered on chromosomes",
                    conserved: "Similar in all animals (flies to humans)",
                    expression: "Spatial and temporal specificity",
                    function: "Specify segment identity along anterior-posterior axis",
                    homeobox: "DNA-binding domain (homeodomain)",
                    collinearity: "Gene order on chromosome matches expression along body axis",
                    mutations: "Homeotic mutations - body parts in wrong locations",
                    example: "Antennapedia in Drosophila - legs where antennae should be"
                },
                regulatoryGenes: {
                    description: "Control expression of other genes",
                    types: [
                        "Transcription factors (turn genes on/off)",
                        "MicroRNAs (post-transcriptional regulation)",
                        "Epigenetic modifications (DNA methylation, histone modification)"
                    ],
                    cascades: "Hierarchical gene regulatory networks",
                    importance: "More important than structural genes for development"
                }
            },

            signalingPathways: {
                Wnt: {
                    roles: "Cell fate, proliferation, polarity",
                    examples: "Axis formation, limb development, stem cell maintenance",
                    cancer: "Dysregulation implicated in many cancers"
                },
                Hedgehog: {
                    roles: "Pattern formation, cell differentiation",
                    examples: "Neural tube patterning, limb development",
                    cancer: "Mutations cause basal cell carcinoma"
                },
                Notch: {
                    roles: "Cell fate decisions, lateral inhibition",
                    examples: "Neural vs. epidermal fate, somite segmentation",
                    mechanism: "Contact-dependent signaling"
                },
                TGFβ: {
                    roles: "Growth, differentiation, apoptosis",
                    examples: "Mesoderm induction, bone formation",
                    family: "Includes BMPs, activins, nodal"
                },
                FGF: {
                    name: "Fibroblast Growth Factor",
                    roles: "Cell proliferation, migration, differentiation",
                    examples: "Limb bud outgrowth, angiogenesis"
                }
            },

            morphogenesis: {
                definition: "Development of form and structure",
                cellularMechanisms: [
                    {
                        mechanism: "Cell Division",
                        description: "Increase cell number",
                        regulation: "Growth factors, cyclins, checkpoints",
                        orientation: "Division plane affects shape"
                    },
                    {
                        mechanism: "Cell Growth",
                        description: "Increase cell size",
                        differential: "Some cells grow more than others"
                    },
                    {
                        mechanism: "Cell Death (Apoptosis)",
                        description: "Programmed cell death",
                        examples: "Digit separation, neural development",
                        purpose: "Sculpting, removing unnecessary cells"
                    },
                    {
                        mechanism: "Cell Migration",
                        description: "Cells move to new locations",
                        examples: "Neural crest migration, gastrulation",
                        guidance: "Chemotaxis, contact guidance",
                        importance: "Critical for gastrulation, organogenesis"
                    },
                    {
                        mechanism: "Cell Shape Changes",
                        description: "Cells change shape (elongate, flatten)",
                        mechanism: "Cytoskeletal rearrangement",
                        examples: "Neural plate folding, lens formation"
                    },
                    {
                        mechanism: "Cell Adhesion Changes",
                        description: "Cells stick together or separate",
                        molecules: "Cadherins, integrins, selectins",
                        importance: "Tissue sorting, layer formation"
                    }
                ],
                tissueMovements: [
                    "Invagination (inward folding)",
                    "Evagination (outward folding)",
                    "Convergent extension (tissue narrows and lengthens)",
                    "Epiboly (spreading of cell sheet)",
                    "Delamination (cell layer splits)"
                ]
            },

            organogenesis: {
                definition: "Formation of organs from germ layers",
                principles: [
                    "Organs form from interactions between germ layers",
                    "Epithelial-mesenchymal interactions crucial",
                    "Timing and sequence carefully orchestrated",
                    "Reciprocal induction common"
                ],
                examples: [
                    {
                        organ: "Eye",
                        initiation: "Optic vesicle evaginates from brain",
                        induction: "Optic vesicle induces lens from ectoderm",
                        reciprocal: "Lens induces optic cup formation",
                        layers: "Retina (neural ectoderm), lens (surface ectoderm), cornea (ectoderm + neural crest)"
                    },
                    {
                        organ: "Kidney",
                        initiation: "Ureteric bud from mesonephric duct",
                        induction: "Bud induces metanephric mesenchyme",
                        reciprocal: "Mesenchyme induces bud branching",
                        result: "Complex branched structure (nephrons)"
                    },
                    {
                        organ: "Limb",
                        initiation: "Limb bud outgrowth (lateral plate mesoderm + ectoderm)",
                        organizingCenters: [
                            "Apical ectodermal ridge (AER) - proximodistal axis",
                            "Zone of polarizing activity (ZPA) - anteroposterior axis"
                        ],
                        progression: "Proximal to distal (shoulder → fingers)"
                    },
                    {
                        organ: "Heart",
                        origin: "Lateral plate mesoderm",
                        formation: "Bilateral heart fields fuse at midline",
                        looping: "Heart tube loops (establishes left-right asymmetry)",
                        septation: "Chambers and vessels separate"
                    }
                ]
            },

            environmentalInfluences: {
                teratogens: {
                    definition: "Agents causing birth defects",
                    criticalPeriods: "Most vulnerable during organogenesis (weeks 3-8)",
                    doseDependent: "Higher exposure = greater risk",
                    examples: [
                        {
                            agent: "Thalidomide",
                            effect: "Limb malformations",
                            timing: "Days 20-36 of pregnancy",
                            history: "Morning sickness drug withdrawn 1961"
                        },
                        {
                            agent: "Alcohol",
                            effect: "Fetal Alcohol Syndrome (FAS)",
                            features: "Facial abnormalities, brain damage, growth problems",
                            noSafeLevel: "Best to avoid completely"
                        },
                        {
                            agent: "Isotretinoin (Accutane)",
                            effect: "Severe craniofacial, heart, neural tube defects",
                            use: "Acne medication - strictly contraindicated in pregnancy"
                        },
                        {
                            agent: "Rubella virus",
                            effect: "Heart defects, deafness, cataracts",
                            prevention: "Vaccination before pregnancy"
                        },
                        {
                            agent: "Radiation",
                            effect: "Depends on dose and timing",
                            risk: "Cancer, malformations, intellectual disability"
                        },
                        {
                            agent: "Cocaine",
                            effect: "Placental abruption, premature birth, developmental issues"
                        }
                    ]
                },
                nutrition: {
                    importance: "Critical for normal development",
                    examples: [
                        "Folic acid prevents neural tube defects",
                        "Iodine deficiency causes cretinism",
                        "Vitamin A deficiency affects eye development"
                    ]
                },
                temperature: {
                    importance: "Some organisms (reptiles) - sex determination",
                    mammals: "Fever may increase risk of neural tube defects"
                },
                stress: {
                    maternal: "Can affect fetal development",
                    mechanisms: "Cortisol, reduced blood flow",
                    outcomes: "Low birth weight, behavioral effects"
                }
            },

            regeneration: {
                definition: "Replacement of lost body parts",
                examples: [
                    {
                        organism: "Planaria (flatworm)",
                        ability: "Entire body from small fragment",
                        mechanism: "Pluripotent stem cells (neoblasts)"
                    },
                    {
                        organism: "Salamanders",
                        ability: "Limbs, tail, jaw, parts of eye and heart",
                        mechanism: "Blastema formation (dedifferentiated cells)"
                    },
                    {
                        organism: "Zebrafish",
                        ability: "Fins, heart, parts of brain",
                        research: "Model organism for regeneration studies"
                    },
                    {
                        organism: "Mammals",
                        ability: "Limited - liver, bone, skin",
                        limitations: "Most organs don't regenerate",
                        exception: "Fingertips in young children"
                    }
                ],
                mechanisms: [
                    "Stem cell proliferation and differentiation",
                    "Dedifferentiation (specialized cells become less specialized)",
                    "Transdifferentiation (one cell type directly becomes another)"
                ],
                research: "Understanding regeneration may enable therapeutic applications"
            },

            stemCells: {
                embryonicStemCells: {
                    source: "Inner cell mass of blastocyst",
                    potency: "Pluripotent",
                    advantages: "Can form any body cell type",
                    challenges: "Ethical concerns about embryo use, immune rejection",
                    uses: "Research, potential therapies"
                },
                adultStemCells: {
                    source: "Various adult tissues",
                    potency: "Usually multipotent (some exceptions)",
                    examples: "Hematopoietic (blood), neural, mesenchymal",
                    advantages: "No ethical concerns, no immune rejection if autologous",
                    limitations: "More restricted potential"
                },
                inducedPluripotentStemCells: {
                    name: "iPSCs",
                    description: "Adult cells reprogrammed to pluripotent state",
                    method: "Introduction of specific transcription factors (Yamanaka factors)",
                    advantages: [
                        "Patient-specific (no immune rejection)",
                        "No embryo destruction",
                        "Can be made from any person"
                    ],
                    applications: [
                        "Disease modeling",
                        "Drug testing",
                        "Potential regenerative therapies"
                    ],
                    challenges: "Efficiency, safety (cancer risk)"
                }
            },

            applicationsToDevelopmentalBiology: [
                "Understanding and preventing birth defects",
                "Improving assisted reproductive technologies",
                "Developing stem cell therapies",
                "Tissue engineering and organ regeneration",
                "Understanding cancer (abnormal development)",
                "Evolutionary developmental biology (evo-devo)",
                "Synthetic biology and bioengineering"
            ]
        };

        return {
            topic: "Developmental Biology",
            ...developmentalContent,
            category: 'developmental_biology'
        };
    }

    // CONTENT GENERATION METHODS
    generateReproductionContent(problem, content) {
        const contentSections = [];

        contentSections.push(this.generateOverviewSection(problem, content));

        // Generate content based on topic
        if (content.types) {
            contentSections.push(this.generateTypesContent(content));
        }

        if (content.maleSystem || content.femaleSystem) {
            contentSections.push(this.generateReproductiveSystemContent(content));
        }

        if (content.spermatogenesis || content.oogenesis) {
            contentSections.push(this.generateGametogenesisContent(content));
        }

        if (content.ovarianCycle || content.uterineCycle) {
            contentSections.push(this.generateMenstrualCycleContent(content));
        }

        if (content.HPGAxis) {
            contentSections.push(this.generateHormonesContent(content));
        }

        if (content.comparisons || content.comparison) {
            contentSections.push(this.generateComparisonsSection(content));
        }

        if (content.examples || content.applications) {
            contentSections.push(this.generateExamplesSection(content));
        }

        return contentSections;
    }

    generateOverviewSection(problem, content) {
        return {
            sectionType: 'overview',
            title: content.topic || problem.originalTopic,
            category: content.category,
            description: content.description || content.summary || content.overview?.definition || `Overview of ${content.topic}`,
            keyPoints: this.extractKeyPoints(content),
            relevance: this.getTopicRelevance(problem.type)
        };
    }

    generateTypesContent(content) {
        return {
            sectionType: 'types_list',
            title: `Types of ${content.topic}`,
            types: content.types,
            comparison: content.comparison
        };
    }

    generateReproductiveSystemContent(content) {
        return {
            sectionType: 'reproductive_system',
            title: 'Reproductive System Anatomy and Physiology',
            maleSystem: content.maleSystem,
            femaleSystem: content.femaleSystem,
            comparison: content.comparison
        };
    }

    generateGametogenesisContent(content) {
        return {
            sectionType: 'gametogenesis',
            title: 'Gamete Formation',
            spermatogenesis: content.spermatogenesis,
            oogenesis: content.oogenesis,
            comparison: content.comparison
        };
    }

    generateMenstrualCycleContent(content) {
        return {
            sectionType: 'menstrual_cycle',
            title: 'Menstrual Cycle Phases',
            ovarianCycle: content.ovarianCycle,
            uterineCycle: content.uterineCycle,
            hormonalControl: content.hormonalControl
        };
    }

    generateHormonesContent(content) {
        return {
            sectionType: 'hormones',
            title: 'Reproductive Hormones',
            HPGAxis: content.HPGAxis,
            maleHormones: content.maleHormones,
            femaleHormones: content.femaleHormones
        };
    }

    generateComparisonsSection(content) {
        const comparisons = content.comparisons || content.comparison;
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
            applications: content.applications || content.clinicalApplications
        };
    }

    // HELPER METHODS
    extractKeyPoints(content) {
        const keyPoints = [];

        if (content.concepts) keyPoints.push(...content.concepts);
        if (content.keyDefinitions) keyPoints.push(...Object.keys(content.keyDefinitions));
        if (content.mainCategories) keyPoints.push(...content.mainCategories);
        if (content.overview?.keyFeatures) keyPoints.push(...content.overview.keyFeatures);

        return keyPoints.slice(0, 5);
    }

    getTopicRelevance(topicType) {
        const relevance = {
            asexual_reproduction: "Understanding asexual reproduction explains rapid population growth and cloning",
            sexual_reproduction: "Sexual reproduction generates genetic diversity essential for evolution",
            human_reproductive_system: "Knowledge of reproductive anatomy is fundamental to reproductive health",
            gametogenesis: "Gamete formation ensures genetic continuity across generations",
            fertilization: "Fertilization initiates new life and combines parental genetic material",
            embryonic_development: "Embryonic development transforms single cell into complex organism",
            pregnancy_birth: "Understanding pregnancy and birth supports maternal and fetal health",
            reproductive_hormones: "Hormones coordinate all aspects of reproductive function",
            menstrual_cycle: "The menstrual cycle regulates female fertility",
            plant_reproduction: "Plant reproduction is basis of agriculture and food production",
            reproductive_technologies: "Reproductive technologies address infertility and enable genetic screening",
            developmental_biology: "Developmental biology explains how organisms grow and form"
        };

        return relevance[topicType] || "Important reproductive biology concept";
    }

    // DIAGRAM GENERATION
    generateReproductionDiagramData() {
        if (!this.currentContent) return;

        const { type } = this.currentProblem;

        this.diagramData = {
            type: type,
            diagrams: this.getRelevantDiagrams(type),
            placeholder: true,
            note: "Diagram generation will be implemented with actual reproductive biology diagrams"
        };
    }

    getRelevantDiagrams(topicType) {
        const diagramMap = {
            asexual_reproduction: ["binary_fission", "budding", "fragmentation", "vegetative_propagation"],
            sexual_reproduction: ["meiosis_overview", "fertilization_process", "genetic_variation"],
            human_reproductive_system: ["male_anatomy", "female_anatomy", "reproductive_organs"],
            gametogenesis: ["spermatogenesis_stages", "oogenesis_stages", "gamete_comparison"],
            fertilization: ["sperm_journey", "acrosome_reaction", "zona_reaction"],
            embryonic_development: ["cleavage_stages", "gastrulation", "germ_layers", "organogenesis"],
            pregnancy_birth: ["fetal_development", "placenta_structure", "labor_stages"],
            reproductive_hormones: ["HPG_axis", "hormone_feedback", "hormonal_regulation"],
            menstrual_cycle: ["ovarian_cycle", "uterine_cycle", "hormone_levels"],
            plant_reproduction: ["flower_structure", "pollination", "double_fertilization", "seed_development"],
            reproductive_technologies: ["IVF_process", "contraception_methods"],
            developmental_biology: ["cell_differentiation", "morphogen_gradients", "pattern_formation"]
        };

        return diagramMap[topicType] || [];
    }

    // WORKBOOK GENERATION
    generateReproductionWorkbook() {
        if (!this.currentContent || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createReproductionProblemSection(),
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
            title: `${this.currentContent.topic} Workbook`,
            created: new Date().toISOString(),
            theme: this.theme,
            sections: []
        };
    }

    createReproductionProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Topic Information',
            type: 'problem',
            data: [
                ['Topic Type', this.currentProblem.type],
                ['Main Topic', this.currentProblem.originalTopic],
                ['Sub-Topic', this.currentProblem.subTopic || 'General'],
                ['Category', this.reproductionTopics[this.currentProblem.type]?.category || 'N/A']
            ]
        };
    }

    createContentOverviewSection() {
        if (!this.currentContent) return null;

        const overviewData = [
            ['Topic', this.currentContent.topic],
            ['Category', this.currentContent.category]
        ];

        if (this.currentContent.overview?.definition) {
            overviewData.push(['Definition', this.currentContent.overview.definition]);
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

        // Add detailed content based on structure
        // This is a simplified version - extend based on specific content types
        Object.entries(this.currentContent).forEach(([key, value]) => {
            if (key !== 'topic' && key !== 'category' && typeof value === 'object' && !Array.isArray(value)) {
                contentData.push([key.toUpperCase(), '']);
                this.addObjectContent(contentData, value, 1);
                contentData.push(['', '']); // Spacing
            }
        });

        return contentData.length > 0 ? {
            title: 'Detailed Content',
            type: 'detailed_content',
            data: contentData
        } : null;
    }

    addObjectContent(dataArray, obj, indent = 0) {
        const prefix = '  '.repeat(indent);
        
        Object.entries(obj).forEach(([key, value]) => {
            if (typeof value === 'string' || typeof value === 'number') {
                dataArray.push([`${prefix}${key}`, value]);
            } else if (Array.isArray(value)) {
                dataArray.push([`${prefix}${key}`, value.join('; ')]);
            } else if (typeof value === 'object' && value !== null) {
                dataArray.push([`${prefix}${key}`, '']);
                this.addObjectContent(dataArray, value, indent + 1);
            }
        });
    }

    createComparisonsSection() {
        const comparisons = this.currentContent?.comparisons || this.currentContent?.comparison;
        if (!comparisons) return null;

        const comparisonData = [];

        if (typeof comparisons === 'object') {
            Object.entries(comparisons).forEach(([key, value]) => {
                comparisonData.push([key.toUpperCase(), '']);
                if (typeof value === 'object') {
                    this.addObjectContent(comparisonData, value, 1);
                } else {
                    comparisonData.push(['', value]);
                }
                comparisonData.push(['', '']); // Spacing
            });
        }

        return comparisonData.length > 0 ? {
            title: 'Comparisons and Contrasts',
            type: 'comparisons',
            data: comparisonData
        } : null;
    }

    createExamplesApplicationsSection() {
        if (!this.currentContent.examples && !this.currentContent.applications && !this.currentContent.clinicalApplications) return null;

        const data = [];

        if (this.currentContent.examples) {
            data.push(['EXAMPLES', '']);
            if (Array.isArray(this.currentContent.examples)) {
                this.currentContent.examples.forEach(example => {
                    data.push(['•', typeof example === 'string' ? example : JSON.stringify(example)]);
                });
            }
            data.push(['', '']);
        }

        const applications = this.currentContent.applications || this.currentContent.clinicalApplications;
        if (applications) {
            data.push(['APPLICATIONS', '']);
            if (Array.isArray(applications)) {
                applications.forEach(app => {
                    data.push(['•', app]);
                });
            }
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

    // ASSESSMENT AND LEARNING METHODS

    assessContentDifficulty() {
        if (!this.currentContent) return 'unknown';

        let difficultyScore = 0;

        // Simple topics
        const simpleTopics = ['asexual_reproduction', 'plant_reproduction'];
        if (simpleTopics.includes(this.currentProblem.type)) {
            difficultyScore += 1;
        }

        // Intermediate topics
        const intermediateTopics = ['sexual_reproduction', 'human_reproductive_system', 'fertilization', 'menstrual_cycle'];
        if (intermediateTopics.includes(this.currentProblem.type)) {
            difficultyScore += 2;
        }

        // Complex topics
        const complexTopics = ['gametogenesis', 'embryonic_development', 'reproductive_hormones', 'developmental_biology'];
        if (complexTopics.includes(this.currentProblem.type)) {
            difficultyScore += 3;
        }

        // Very complex topics
        const veryComplexTopics = ['reproductive_technologies', 'pregnancy_birth'];
        if (veryComplexTopics.includes(this.currentProblem.type)) {
            difficultyScore += 4;
        }

        // Adjust based on detail level
        if (this.explanationLevel === 'detailed') difficultyScore += 1;
        if (this.explanationLevel === 'basic') difficultyScore -= 1;

        // Return difficulty rating
        if (difficultyScore <= 2) return 'beginner';
        if (difficultyScore <= 4) return 'intermediate';
        if (difficultyScore <= 5) return 'advanced';
        return 'expert';
    }

    generateLearningObjectives() {
        if (!this.currentProblem) return [];

        const objectivesDatabase = {
            asexual_reproduction: [
                "Define asexual reproduction and identify its key characteristics",
                "Compare and contrast different types of asexual reproduction",
                "Explain advantages and disadvantages of asexual reproduction",
                "Provide examples of organisms using various asexual methods"
            ],
            sexual_reproduction: [
                "Describe the process of sexual reproduction and its stages",
                "Explain how meiosis contributes to genetic variation",
                "Compare sexual and asexual reproduction strategies",
                "Understand the evolutionary advantages of sexual reproduction"
            ],
            human_reproductive_system: [
                "Identify and describe male and female reproductive organs",
                "Explain the functions of each reproductive structure",
                "Trace the pathway of gametes through reproductive systems",
                "Understand hormonal regulation of reproductive functions"
            ],
            gametogenesis: [
                "Compare and contrast spermatogenesis and oogenesis",
                "Describe the stages of gamete formation",
                "Explain the role of meiosis in gametogenesis",
                "Understand timing and regulation of gamete production"
            ],
            fertilization: [
                "Describe the process of fertilization step by step",
                "Explain mechanisms preventing polyspermy",
                "Understand capacitation and the acrosome reaction",
                "Relate fertilization to early development"
            ],
            embryonic_development: [
                "Describe major stages of embryonic development",
                "Explain formation of germ layers and their derivatives",
                "Understand the process of organogenesis",
                "Relate developmental stages to timing of pregnancy"
            ],
            pregnancy_birth: [
                "Describe fetal development through trimesters",
                "Explain placental structure and function",
                "Understand the stages of labor and birth",
                "Identify maternal physiological changes during pregnancy"
            ],
            reproductive_hormones: [
                "Describe the hypothalamic-pituitary-gonadal axis",
                "Explain the functions of major reproductive hormones",
                "Understand feedback regulation of hormone secretion",
                "Compare male and female hormonal regulation"
            ],
            menstrual_cycle: [
                "Describe phases of ovarian and uterine cycles",
                "Explain hormonal control of the menstrual cycle",
                "Relate cycle phases to fertility",
                "Understand cycle variations and disorders"
            ],
            plant_reproduction: [
                "Describe alternation of generations in plants",
                "Explain flower structure and function",
                "Understand pollination and fertilization in plants",
                "Compare sexual and asexual reproduction in plants"
            ],
            reproductive_technologies: [
                "Describe major assisted reproductive technologies",
                "Explain principles of different contraceptive methods",
                "Understand ethical considerations in reproductive technologies",
                "Evaluate applications and limitations of reproductive technologies"
            ],
            developmental_biology: [
                "Explain mechanisms of cell differentiation",
                "Describe pattern formation and morphogenesis",
                "Understand genetic control of development",
                "Relate developmental biology to birth defects and regeneration"
            ]
        };

        return objectivesDatabase[this.currentProblem.type] || [
            "Understand the key concepts of this reproductive biology topic",
            "Apply knowledge to biological and medical contexts",
            "Make connections to other reproductive processes"
        ];
    }

    identifyPrerequisites() {
        if (!this.currentProblem) return [];

        const prerequisitesDatabase = {
            asexual_reproduction: [
                "Basic understanding of cells and cell division",
                "Knowledge of mitosis"
            ],
            sexual_reproduction: [
                "Understanding of meiosis",
                "Basic genetics (chromosomes, alleles)",
                "Knowledge of cell division"
            ],
            human_reproductive_system: [
                "Basic anatomy and physiology",
                "Understanding of organ systems",
                "Knowledge of hormones"
            ],
            gametogenesis: [
                "Detailed understanding of meiosis",
                "Cell structure and function",
                "Basic reproductive anatomy"
            ],
            fertilization: [
                "Knowledge of gamete structure",
                "Understanding of cell membranes",
                "Gametogenesis concepts"
            ],
            embryonic_development: [
                "Understanding of fertilization",
                "Knowledge of cell differentiation",
                "Basic developmental stages"
            ],
            pregnancy_birth: [
                "Female reproductive anatomy",
                "Embryonic development basics",
                "Understanding of hormones"
            ],
            reproductive_hormones: [
                "Endocrine system basics",
                "Feedback mechanisms",
                "Reproductive anatomy"
            ],
            menstrual_cycle: [
                "Female reproductive anatomy",
                "Understanding of hormones",
                "Feedback regulation concepts"
            ],
            plant_reproduction: [
                "Plant structure and anatomy",
                "Basic understanding of meiosis",
                "Life cycles"
            ],
            reproductive_technologies: [
                "Human reproductive system",
                "Fertilization process",
                "Basic embryonic development"
            ],
            developmental_biology: [
                "Cell biology",
                "Genetics and gene expression",
                "Embryonic development basics"
            ]
        };

        return prerequisitesDatabase[this.currentProblem.type] || [
            "General biology background"
        ];
    }

    generateStudyTips() {
        if (!this.currentProblem) return [];

        const studyTipsDatabase = {
            asexual_reproduction: [
                "Create comparison tables for different asexual reproduction types",
                "Draw diagrams of each method with labels",
                "Make flashcards with organism examples",
                "Practice explaining advantages/disadvantages"
            ],
            sexual_reproduction: [
                "Diagram the relationship between meiosis and genetic variation",
                "Create flowcharts showing stages of sexual reproduction",
                "Make concept maps linking key processes",
                "Practice explaining crossing over and independent assortment"
            ],
            human_reproductive_system: [
                "Draw and label male and female anatomy from memory",
                "Trace gamete pathways through reproductive tracts",
                "Create function tables for each organ",
                "Use mnemonics for remembering structures"
            ],
            gametogenesis: [
                "Make side-by-side comparison charts for spermatogenesis vs oogenesis",
                "Create detailed stage diagrams with chromosome numbers",
                "Practice drawing meiotic divisions",
                "Make timeline charts showing duration of each process"
            ],
            fertilization: [
                "Draw sequential diagrams of fertilization steps",
                "Create flashcards for key molecular events",
                "Make flowcharts showing blocks to polyspermy",
                "Practice explaining the process out loud"
            ],
            embryonic_development: [
                "Create visual timelines of developmental stages",
                "Make tables of germ layer derivatives",
                "Draw developmental stages in sequence",
                "Use memory aids for remembering stage order"
            ],
            pregnancy_birth: [
                "Create trimester comparison charts",
                "Draw placental structure and label functions",
                "Make labor stage flowcharts",
                "Relate developmental events to timing"
            ],
            reproductive_hormones: [
                "Diagram the HPG axis with feedback loops",
                "Create hormone function tables",
                "Make flowcharts of hormonal cascades",
                "Practice drawing feedback diagrams"
            ],
            menstrual_cycle: [
                "Create coordinated graphs of hormone levels and cycle events",
                "Make day-by-day cycle calendars",
                "Draw ovarian and uterine changes side-by-side",
                "Use color coding for different phases"
            ],
            plant_reproduction: [
                "Draw detailed, labeled flower diagrams",
                "Create alternation of generations cycle diagrams",
                "Make comparison tables for pollination types",
                "Practice explaining double fertilization"
            ],
            reproductive_technologies: [
                "Create comparison tables for ART methods",
                "Make flowcharts of IVF steps",
                "Organize contraceptive methods by mechanism",
                "Consider ethical implications for each technology"
            ],
            developmental_biology: [
                "Create concept maps of developmental mechanisms",
                "Draw morphogen gradient diagrams",
                "Make tables of signaling pathways and functions",
                "Relate molecular mechanisms to visible changes"
            ]
        };

        return studyTipsDatabase[this.currentProblem.type] || [
            "Review material regularly using spaced repetition",
            "Create visual aids and diagrams",
            "Practice explaining concepts to others",
            "Relate concepts to real-world examples and applications"
        ];
    }

    generateAssessmentQuestions() {
        if (!this.currentProblem) return [];

        const questionsDatabase = {
            asexual_reproduction: [
                {
                    question: "What is the primary advantage of asexual reproduction in stable environments?",
                    type: "conceptual",
                    difficulty: "easy"
                },
                {
                    question: "Compare binary fission and budding. How do they differ?",
                    type: "comparison",
                    difficulty: "medium"
                },
                {
                    question: "Why might a species that reproduces asexually be more vulnerable to environmental change?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            sexual_reproduction: [
                {
                    question: "How does meiosis contribute to genetic variation?",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "What are the two sources of genetic variation during meiosis?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Why does sexual reproduction persist despite its costs compared to asexual reproduction?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            gametogenesis: [
                {
                    question: "How many functional sperm are produced from one spermatogonium?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Why does oogenesis produce only one functional egg while spermatogenesis produces four functional sperm?",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "At what stage does oogenesis arrest, and what triggers its completion?",
                    type: "detailed_knowledge",
                    difficulty: "hard"
                }
            ],
            embryonic_development: [
                {
                    question: "What are the three primary germ layers and what do they form?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Explain the difference between cleavage and normal cell division.",
                    type: "comparison",
                    difficulty: "medium"
                },
                {
                    question: "How do morphogen gradients establish pattern formation in embryos?",
                    type: "mechanism",
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
            asexual_reproduction: ['sexual_reproduction', 'plant_reproduction', 'reproductive_technologies'],
            sexual_reproduction: ['asexual_reproduction', 'gametogenesis', 'fertilization', 'embryonic_development'],
            human_reproductive_system: ['gametogenesis', 'reproductive_hormones', 'menstrual_cycle', 'fertilization'],
            gametogenesis: ['sexual_reproduction', 'human_reproductive_system', 'fertilization', 'reproductive_hormones'],
            fertilization: ['gametogenesis', 'embryonic_development', 'sexual_reproduction'],
            embryonic_development: ['fertilization', 'pregnancy_birth', 'developmental_biology'],
            pregnancy_birth: ['embryonic_development', 'reproductive_hormones', 'human_reproductive_system'],
            reproductive_hormones: ['human_reproductive_system', 'menstrual_cycle', 'gametogenesis'],
            menstrual_cycle: ['reproductive_hormones', 'human_reproductive_system', 'fertilization'],
            plant_reproduction: ['asexual_reproduction', 'sexual_reproduction'],
            reproductive_technologies: ['fertilization', 'gametogenesis', 'embryonic_development'],
            developmental_biology: ['embryonic_development', 'gametogenesis', 'reproductive_technologies']
        };

        const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];
        
        return relatedTypes.map(type => ({
            type: type,
            name: this.reproductionTopics[type]?.name,
            description: this.reproductionTopics[type]?.description
        }));
    }

    generateGlossary() {
        if (!this.currentContent) return {};

        const glossary = {};

        // Extract terms from different content structures
        if (this.currentContent.keyDefinitions) {
            Object.assign(glossary, this.currentContent.keyDefinitions);
        }

        // Add terms from lessons if available
        const lesson = this.lessons[this.currentProblem?.type];
        if (lesson?.keyDefinitions) {
            Object.assign(glossary, lesson.keyDefinitions);
        }

        return glossary;
    }

    generateProcessTimeline(processName) {
        const timelines = {
            'Spermatogenesis': [
                { phase: 'Mitosis', duration: 'Continuous', events: 'Spermatogonia divide' },
                { phase: 'Meiosis I', duration: '~24 days', events: 'Primary spermatocytes → Secondary spermatocytes' },
                { phase: 'Meiosis II', duration: '~1 day', events: 'Secondary spermatocytes → Spermatids' },
                { phase: 'Spermiogenesis', duration: '~24 days', events: 'Spermatids mature to sperm' },
                { phase: 'Total', duration: '~74 days', events: 'Complete spermatogenesis' }
            ],
            'Oogenesis': [
                { phase: 'Prenatal', duration: 'Before birth', events: 'Primary oocytes form and arrest in prophase I' },
                { phase: 'Childhood', duration: 'Years', events: 'Oocytes remain arrested' },
                { phase: 'Meiosis I completion', duration: 'Hours', events: 'Triggered by LH surge, forms secondary oocyte' },
                { phase: 'Ovulation', duration: 'Moment', events: 'Secondary oocyte released' },
                { phase: 'Meiosis II completion', duration: 'If fertilized', events: 'Forms mature ovum' }
            ],
            'Menstrual Cycle': [
                { phase: 'Menstruation', duration: 'Days 1-5', events: 'Endometrium sheds' },
                { phase: 'Proliferative', duration: 'Days 6-14', events: 'Endometrium thickens, follicle grows' },
                { phase: 'Ovulation', duration: 'Day 14', events: 'Egg released' },
                { phase: 'Secretory', duration: 'Days 15-28', events: 'Endometrium prepares for implantation' }
            ],
            'Embryonic Development': [
                { stage: 'Fertilization', timing: 'Day 0', events: 'Sperm and egg fuse' },
                { stage: 'Cleavage', timing: 'Days 1-5', events: 'Rapid cell divisions' },
                { stage: 'Blastocyst', timing: 'Days 5-6', events: 'Hollow ball forms' },
                { stage: 'Implantation', timing: 'Days 6-12', events: 'Embryo embeds in uterus' },
                { stage: 'Gastrulation', timing: 'Week 3', events: 'Three germ layers form' },
                { stage: 'Organogenesis', timing: 'Weeks 4-8', events: 'Organs begin forming' }
            ],
            'IVF Process': [
                { step: 'Ovarian stimulation', duration: '10-14 days', events: 'Hormone injections' },
                { step: 'Egg retrieval', duration: '20-30 min', events: 'Eggs collected' },
                { step: 'Fertilization', duration: 'Hours', events: 'Eggs and sperm combined' },
                { step: 'Embryo culture', duration: '3-5 days', events: 'Embryos develop' },
                { step: 'Embryo transfer', duration: 'Minutes', events: 'Embryo placed in uterus' },
                { step: 'Pregnancy test', duration: '10-14 days later', events: 'Check for pregnancy' }
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
        if (this.currentContent.types) {
            hierarchy.children.push({
                name: 'Types',
                type: 'section',
                count: this.currentContent.types.length
            });
        }

        if (this.currentContent.maleSystem && this.currentContent.femaleSystem) {
            hierarchy.children.push(
                { name: 'Male System', type: 'section' },
                { name: 'Female System', type: 'section' }
            );
        }

        return hierarchy;
    }

    // VALIDATION AND UTILITY METHODS

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
        if (this.currentContent.overview) score += 1;
        if (this.currentContent.examples || this.currentContent.applications) score += 1;
        if (this.currentContent.comparisons || this.currentContent.comparison) score += 1;

        // Check for substantial content
        const hasSubstantiveContent = 
            this.currentContent.types ||
            this.currentContent.maleSystem ||
            this.currentContent.spermatogenesis ||
            this.currentContent.ovarianCycle ||
            this.currentContent.HPGAxis;
        
        if (hasSubstantiveContent) score += 4;

        // Additional depth indicators
        if (this.currentContent.clinicalApplications) score += 1;
        if (this.currentContent.ethicalConsiderations) score += 1;

        return Math.round((score / maxScore) * 100);
    }

    getContentQualityMetrics() {
        return {
            completeness: this.calculateContentCompleteness(),
            hasExamples: !!(this.currentContent?.examples || this.currentContent?.applications),
            hasComparisons: !!(this.currentContent?.comparisons || this.currentContent?.comparison),
            difficulty: this.assessContentDifficulty(),
            detailLevel: this.explanationLevel,
            includesVisualizations: this.includeVisualizations,
            includesMisconceptions: this.includeCommonMisconceptions
        };
    }

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
        return Object.entries(this.reproductionTopics).map(([key, topic]) => ({
            id: key,
            name: topic.name,
            category: topic.category,
            description: topic.description
        }));
    }

    getTopicDetails(topicId) {
        const topic = this.reproductionTopics[topicId];
        if (!topic) return null;

        return {
            id: topicId,
            name: topic.name,
            category: topic.category,
            description: topic.description,
            lesson: this.lessons[topicId],
            prerequisites: this.identifyPrerequisites(),
            learningObjectives: this.generateLearningObjectives(),
            relatedTopics: this.suggestRelatedTopics(),
            studyTips: this.generateStudyTips(),
            assessmentQuestions: this.generateAssessmentQuestions()
        };
    }

    // EXPORT METHODS

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

        if (content.overview?.definition) {
            markdown += `${content.overview.definition}\n\n`;
        }

        // Add more markdown conversion as needed
        return markdown;
    }

    convertToHTML(content) {
        let html = `<div class="reproduction-content">\n`;
        html += `  <h1>${content.topic}</h1>\n`;

        if (content.overview?.definition) {
            html += `  <p class="definition">${content.overview.definition}</p>\n`;
        }

        html += `</div>`;
        return html;
    }
}

// Export the class
export default EnhancedReproductionBiologyWorkbook;
