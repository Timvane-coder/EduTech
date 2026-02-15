// Enhanced Digestive System Workbook - Comprehensive Human Digestive System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { BiologySvgDiagrams } from '../svg-data.js';
import { BiologyDiagramsRegistry } from '../registry.js';
import { BiologyDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedDigestiveSystemWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "digestive";
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

        this.diagramRenderer = new BiologyDiagramsRenderer();
        this.includeDiagramsInWorkbook = options.includeDiagrams !== false;
        this.diagramWidth = options.diagramWidth || 800;
        this.diagramHeight = options.diagramHeight || 600;
        this.renderedDiagrams = new Map();
        this.diagramsPromise = null;
        this.currentExperiment = null;

        this.explanationLevel = options.explanationLevel || 'intermediate';
        this.includeVisualizations = options.includeVisualizations !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeExamples = options.includeExamples !== false;
        this.includeComparisons = options.includeComparisons !== false;
        this.includeCommonMisconceptions = options.includeCommonMisconceptions !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.includeExperiments = options.includeExperiments !== false;
        this.detailLevel = options.detailLevel || 'detailed';

        this.adaptiveDifficulty = options.adaptiveDifficulty !== false;
        this.metacognitiveSupport = options.metacognitiveSupport !== false;
        this.contextualLearning = options.contextualLearning !== false;
        this.assessmentFeedback = options.assessmentFeedback !== false;

        this.learnerProfile = {
            currentLevel: 'intermediate',
            masteredTopics: [],
            strugglingTopics: [],
            preferredLearningStyle: 'visual',
            progressHistory: []
        };

        this.digestiveSymbols = this.initializeDigestiveSymbols();
        this.setThemeColors();
        this.initializeDigestiveTopics();
        this.initializeDigestiveLessons();
        this.initializeDigestiveExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            digestive: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
                headerBg: '#c62828',
                headerText: '#ffffff',
                sectionBg: '#ffcdd2',
                sectionText: '#b71c1c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#fce4ec',
                resultText: '#880e4f',
                definitionBg: '#fff3e0',
                definitionText: '#e65100',
                stepBg: '#fbe9e7',
                stepText: '#bf360c',
                borderColor: '#ef9a9a',
                contentBg: '#fff8e1',
                contentText: '#f57f17',
                diagramBg: '#f3e5f5',
                structureBg: '#e0f7fa',
                experimentBg: '#e8f5e9',
                experimentText: '#1b5e20',
                mouthBg: '#fff9c4',
                stomachBg: '#fce4ec',
                intestineBg: '#e8f5e9',
                liverBg: '#fff3e0',
                enzymesBg: '#e3f2fd'
            },
            anatomy: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#4a148c',
                headerText: '#ffffff',
                sectionBg: '#e1bee7',
                sectionText: '#4a148c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#ede7f6',
                resultText: '#4a148c',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#f3e5f5',
                stepText: '#6a1b9a',
                borderColor: '#ce93d8',
                contentBg: '#fce4ec',
                contentText: '#880e4f',
                diagramBg: '#e8eaf6',
                structureBg: '#e0f2f1',
                experimentBg: '#fffde7',
                experimentText: '#f57f17',
                mouthBg: '#fff9c4',
                stomachBg: '#fce4ec',
                intestineBg: '#e8f5e9',
                liverBg: '#fff3e0',
                enzymesBg: '#e3f2fd'
            }
        };
        this.colors = themes[this.theme] || themes.digestive;
    }

    initializeDigestiveSymbols() {
        return {
            'alpha': 'α',
            'beta': 'β',
            'delta': 'Δ',
            'mu': 'μ',
            'pH': 'pH',
            'arrow': '→',
            'reversible': '⇌',
            'plus': '+',
            'minus': '−',
            'approximately': '≈',
            'degree': '°',
            'H2O': 'H₂O',
            'CO2': 'CO₂',
            'HCl': 'HCl',
            'H+': 'H⁺',
            'OH-': 'OH⁻',
            'NaHCO3': 'NaHCO₃',
            'glucose': 'C₆H₁₂O₆',
            'ATP': 'ATP',
            'amylase': 'amylase',
            'lipase': 'lipase',
            'protease': 'protease',
            'pepsin': 'pepsin',
            'trypsin': 'trypsin',
            'bile': 'bile'
        };
    }

    initializeDigestiveTopics() {
        this.digestiveTopics = {
            oral_cavity: {
                patterns: [
                    /mouth|oral|buccal/i,
                    /teeth|tongue|saliva/i,
                    /chewing|mastication/i,
                    /salivary.*gland|amylase/i
                ],
                handler: this.handleOralCavity.bind(this),
                name: 'Oral Cavity and Mastication',
                category: 'digestive_organs',
                description: 'Mouth, teeth, tongue, salivary glands and the initiation of digestion',
                difficulty: 'beginner',
                prerequisites: ['basic_biology', 'cell_biology']
            },

            esophagus: {
                patterns: [
                    /esophagus|oesophagus/i,
                    /swallowing|deglutition/i,
                    /peristalsis/i,
                    /cardiac.*sphincter|lower.*esophageal/i
                ],
                handler: this.handleEsophagus.bind(this),
                name: 'Esophagus and Swallowing',
                category: 'digestive_organs',
                description: 'Structure and function of the esophagus, swallowing reflex, and peristalsis',
                difficulty: 'beginner',
                prerequisites: ['oral_cavity', 'muscle_physiology']
            },

            stomach: {
                patterns: [
                    /stomach|gastric/i,
                    /pepsin|HCl|acid/i,
                    /gastric.*juice|chyme/i,
                    /pyloric|fundus|cardia/i
                ],
                handler: this.handleStomach.bind(this),
                name: 'Stomach and Gastric Digestion',
                category: 'digestive_organs',
                description: 'Stomach anatomy, gastric juice secretion, protein digestion, and chyme formation',
                difficulty: 'intermediate',
                prerequisites: ['esophagus', 'enzyme_basics']
            },

            small_intestine: {
                patterns: [
                    /small.*intestine|duodenum|jejunum|ileum/i,
                    /villi|microvilli|brush.*border/i,
                    /absorption|nutrient.*uptake/i,
                    /intestinal.*juice|succus.*entericus/i
                ],
                handler: this.handleSmallIntestine.bind(this),
                name: 'Small Intestine and Absorption',
                category: 'digestive_organs',
                description: 'Structure and function of the small intestine, surface area adaptations, and nutrient absorption',
                difficulty: 'intermediate',
                prerequisites: ['stomach', 'transport_mechanisms']
            },

            large_intestine: {
                patterns: [
                    /large.*intestine|colon|cecum|rectum/i,
                    /water.*absorption|defecation/i,
                    /gut.*bacteria|microbiome/i,
                    /feces|stool/i
                ],
                handler: this.handleLargeIntestine.bind(this),
                name: 'Large Intestine and Water Absorption',
                category: 'digestive_organs',
                description: 'Colon anatomy, water reabsorption, gut microbiome, and defecation',
                difficulty: 'intermediate',
                prerequisites: ['small_intestine']
            },

            liver_gallbladder: {
                patterns: [
                    /liver|hepatic/i,
                    /bile|gallbladder/i,
                    /emulsification|lipid.*digestion/i,
                    /hepatocyte|kupffer/i
                ],
                handler: this.handleLiverGallbladder.bind(this),
                name: 'Liver, Bile and Gallbladder',
                category: 'accessory_organs',
                description: 'Liver functions, bile production and secretion, fat emulsification',
                difficulty: 'intermediate',
                prerequisites: ['small_intestine', 'lipid_chemistry']
            },

            pancreas: {
                patterns: [
                    /pancreas|pancreatic/i,
                    /insulin|glucagon/i,
                    /pancreatic.*enzyme|trypsin|chymotrypsin/i,
                    /islets.*langerhans|exocrine.*endocrine/i
                ],
                handler: this.handlePancreas.bind(this),
                name: 'Pancreas: Exocrine and Endocrine Functions',
                category: 'accessory_organs',
                description: 'Pancreatic anatomy, digestive enzyme secretion, and hormonal regulation of blood glucose',
                difficulty: 'advanced',
                prerequisites: ['stomach', 'small_intestine', 'enzyme_kinetics']
            },

            digestive_enzymes: {
                patterns: [
                    /digestive.*enzyme/i,
                    /amylase|protease|lipase/i,
                    /enzyme.*digestion|hydrolysis/i,
                    /substrate.*specificity.*digest/i
                ],
                handler: this.handleDigestiveEnzymes.bind(this),
                name: 'Digestive Enzymes and Hydrolysis',
                category: 'biochemistry',
                description: 'Types, sources, and mechanisms of digestive enzymes',
                difficulty: 'intermediate',
                prerequisites: ['enzyme_basics', 'macromolecule_chemistry']
            },

            nutrient_absorption: {
                patterns: [
                    /absorption|nutrient.*transport/i,
                    /active.*transport.*intestine|passive.*diffusion/i,
                    /portal.*vein|lymphatic.*lacteals/i,
                    /amino.*acid.*absorption|glucose.*absorption/i
                ],
                handler: this.handleNutrientAbsorption.bind(this),
                name: 'Nutrient Absorption and Transport',
                category: 'physiology',
                description: 'Mechanisms of nutrient absorption in the small intestine and transport to tissues',
                difficulty: 'advanced',
                prerequisites: ['small_intestine', 'transport_mechanisms', 'circulatory_system']
            },

            digestive_hormones: {
                patterns: [
                    /gastrin|secretin|CCK|cholecystokinin/i,
                    /digestive.*hormone|gut.*hormone/i,
                    /hormonal.*control.*digestion/i,
                    /GIP|motilin|somatostatin/i
                ],
                handler: this.handleDigestiveHormones.bind(this),
                name: 'Hormonal Regulation of Digestion',
                category: 'endocrinology',
                description: 'Gut hormones and their roles in coordinating digestive processes',
                difficulty: 'advanced',
                prerequisites: ['stomach', 'small_intestine', 'hormone_basics']
            }
        };
    }

    initializeDigestiveLessons() {
        this.lessons = {
            oral_cavity: {
                title: "Oral Cavity: The Gateway to Digestion",
                concepts: [
                    "The mouth initiates both mechanical and chemical digestion",
                    "Teeth perform mechanical breakdown (mastication) of food",
                    "Salivary glands secrete saliva containing salivary amylase",
                    "Salivary amylase begins starch hydrolysis at neutral pH",
                    "The tongue mixes food and forms a bolus for swallowing",
                    "Saliva also contains mucin, lysozyme, and bicarbonate"
                ],
                theory: "The oral cavity is the entry point of the alimentary canal where both physical and chemical digestion begins. Mastication increases surface area for enzyme action, while saliva provides the aqueous medium and enzymes necessary for initial chemical breakdown. The coordination of these processes requires precise neuromuscular control.",
                keyDefinitions: {
                    "Mastication": "The mechanical process of chewing food using teeth and jaw muscles",
                    "Bolus": "A soft, rounded mass of chewed food mixed with saliva ready for swallowing",
                    "Salivary Amylase (Ptyalin)": "Enzyme in saliva that hydrolyses α-1,4 glycosidic bonds in starch",
                    "Mucin": "Glycoprotein in saliva that lubricates food for swallowing",
                    "Lysozyme": "Antibacterial enzyme in saliva that hydrolyses bacterial cell walls",
                    "Deglutition": "The process of swallowing",
                    "Dentition": "The type, number, and arrangement of teeth",
                    "Parotid Gland": "Largest salivary gland, located near the ear"
                },
                anatomy: {
                    teeth: {
                        types: {
                            incisors: "8 teeth (4 upper, 4 lower) - cutting and biting",
                            canines: "4 teeth - tearing and gripping",
                            premolars: "8 teeth - crushing and grinding",
                            molars: "12 teeth (including wisdom teeth) - heavy grinding"
                        },
                        structure: {
                            crown: "Visible portion above gum line",
                            root: "Portion anchored in jawbone",
                            enamel: "Hardest substance in body (97% hydroxyapatite)",
                            dentine: "Bone-like tissue beneath enamel",
                            pulp: "Soft tissue containing nerves and blood vessels",
                            cementum: "Covers root, anchors periodontal ligament"
                        },
                        dentitions: {
                            deciduous: "20 milk teeth, erupt 6 months to 3 years",
                            permanent: "32 adult teeth, replace deciduous from age 6"
                        }
                    },
                    salivaryGlands: {
                        parotid: {
                            location: "In front of and below each ear",
                            secretion: "Serous (watery, enzyme-rich)",
                            duct: "Stensen's duct, opens opposite upper 2nd molar",
                            contribution: "25% of total saliva"
                        },
                        submandibular: {
                            location: "Below mandible (lower jaw)",
                            secretion: "Mixed serous and mucous",
                            duct: "Wharton's duct, opens under tongue",
                            contribution: "70% of total saliva"
                        },
                        sublingual: {
                            location: "Under tongue",
                            secretion: "Mostly mucous",
                            duct: "Multiple ducts of Rivinus",
                            contribution: "5% of total saliva"
                        }
                    },
                    tongue: {
                        functions: ["Taste detection", "Food manipulation", "Bolus formation", "Speech articulation"],
                        papillae: {
                            filiform: "Most numerous, no taste buds, texture detection",
                            fungiform: "Mushroom-shaped, contain taste buds",
                            circumvallate: "Large, at back of tongue, contain most taste buds",
                            foliate: "On sides of tongue, few taste buds in adults"
                        }
                    }
                },
                salivaComposition: {
                    water: "99.5% water",
                    enzymes: {
                        salivaryAmylase: "Begins starch digestion (α-1,4 bonds)",
                        lingualLipase: "Minor lipid digestion (activated in stomach)"
                    },
                    proteins: {
                        mucin: "Lubrication",
                        lysozyme: "Antibacterial",
                        lactoferrin: "Antimicrobial, binds iron",
                        IgA: "Secretory immunoglobulin, immune defense"
                    },
                    ions: {
                        bicarbonate: "Buffers pH, neutralises acids",
                        calcium: "Important for tooth mineralisation",
                        phosphate: "Tooth remineralisation"
                    },
                    pH: "6.5-7.5 (optimal for salivary amylase)",
                    dailyVolume: "1-1.5 litres per day"
                },
                applications: [
                    "Dental health and caries prevention",
                    "Dry mouth (xerostomia) management",
                    "Forensic saliva analysis",
                    "Drug delivery via buccal mucosa",
                    "Understanding taste disorders"
                ]
            },

            esophagus: {
                title: "Esophagus: The Food Conduit",
                concepts: [
                    "The esophagus is a muscular tube connecting pharynx to stomach",
                    "Peristalsis is the coordinated wave of muscular contraction moving food",
                    "Two sphincters control entry and exit from esophagus",
                    "The esophagus has no digestive function - only transport",
                    "Swallowing is a complex reflex coordinated by the medulla oblongata"
                ],
                theory: "The esophagus serves as a conduit between the pharynx and stomach. Although it performs no chemical digestion, its muscular wall produces peristaltic waves that propel food regardless of gravity, demonstrating the active nature of digestive transport. Understanding esophageal physiology is essential for diagnosing swallowing disorders.",
                keyDefinitions: {
                    "Peristalsis": "Sequential wave-like muscular contractions that propel food through the digestive tract",
                    "Bolus": "Rounded mass of chewed, lubricated food being swallowed",
                    "Upper Esophageal Sphincter (UES)": "Cricopharyngeal muscle; prevents air entering esophagus",
                    "Lower Esophageal Sphincter (LES)": "Cardiac sphincter; prevents stomach acid refluxing",
                    "Deglutition": "Act of swallowing",
                    "GERD": "Gastro-Esophageal Reflux Disease - acid reflux due to LES failure",
                    "Dysphagia": "Difficulty swallowing"
                },
                anatomy: {
                    length: "Approximately 25 cm in adults",
                    location: "Posterior to trachea, anterior to vertebral column",
                    wallLayers: {
                        mucosa: "Stratified squamous epithelium (non-keratinised) - resists abrasion",
                        submucosa: "Connective tissue, mucous glands (lubrication)",
                        muscularisExterna: {
                            upperThird: "Skeletal (voluntary) muscle",
                            middleThird: "Mixed skeletal and smooth muscle",
                            lowerThird: "Smooth (involuntary) muscle"
                        },
                        adventitia: "Outer fibrous layer (not serosa - no peritoneum)"
                    },
                    sphincters: {
                        upper: "UES - skeletal muscle, prevents air swallowing",
                        lower: "LES - smooth muscle, prevents acid reflux"
                    }
                },
                swallowingPhases: {
                    oral: {
                        type: "Voluntary",
                        action: "Tongue pushes bolus to pharynx",
                        control: "Conscious decision"
                    },
                    pharyngeal: {
                        type: "Involuntary reflex",
                        actions: [
                            "Soft palate rises to close nasopharynx",
                            "Epiglottis folds over larynx (prevents aspiration)",
                            "Larynx elevates",
                            "UES relaxes to allow bolus entry",
                            "Pharyngeal muscles contract pushing bolus down"
                        ],
                        duration: "About 1 second",
                        control: "Swallowing centre in medulla oblongata"
                    },
                    esophageal: {
                        type: "Involuntary",
                        action: "Peristaltic waves move bolus to stomach",
                        duration: "8-20 seconds (liquids faster than solids)",
                        control: "Enteric nervous system"
                    }
                },
                clinicalRelevance: {
                    GERD: "LES dysfunction → acid reflux → heartburn, oesophagitis",
                    BarrettsEsophagus: "Chronic GERD → squamous epithelium replaced by columnar (metaplasia)",
                    Achalasia: "Failure of LES to relax → dysphagia, food retention",
                    EsophagealCancer: "Risk factors: GERD, smoking, alcohol"
                }
            },

            stomach: {
                title: "Stomach: Chemical Digestion and Chyme Formation",
                concepts: [
                    "The stomach is a J-shaped muscular organ for storage and digestion",
                    "Gastric glands secrete HCl (pH 1.5-2), pepsinogen, and mucus",
                    "Pepsin (activated from pepsinogen) digests proteins",
                    "The stomach churns food into semi-liquid chyme",
                    "Gastrin hormone stimulates gastric acid secretion",
                    "Mucus layer protects stomach from self-digestion"
                ],
                theory: "The stomach acts as both a reservoir and a chemical processing unit. Its highly acidic environment (pH 1.5-2) creates optimal conditions for protein denaturation and pepsin activation. The three-layered muscular wall enables vigorous churning that converts solid food into chyme. Intricate feedback mechanisms regulate secretion to match digestive demands.",
                keyDefinitions: {
                    "Chyme": "Semi-liquid mixture of partially digested food and gastric secretions",
                    "Pepsin": "Proteolytic enzyme active in stomach (from pepsinogen precursor)",
                    "Pepsinogen": "Inactive precursor to pepsin, secreted by chief cells",
                    "HCl": "Hydrochloric acid secreted by parietal cells; pH 1.5-2",
                    "Intrinsic Factor": "Glycoprotein from parietal cells; required for vitamin B12 absorption",
                    "Gastrin": "Hormone from G-cells; stimulates parietal cell HCl secretion",
                    "Mucus Barrier": "Alkaline mucus layer protecting gastric epithelium from acid",
                    "Pyloric Sphincter": "Controls chyme release from stomach into duodenum",
                    "Rugae": "Longitudinal folds that allow stomach expansion"
                },
                anatomy: {
                    regions: {
                        cardia: "Entry region around cardioesophageal junction",
                        fundus: "Dome-shaped upper portion, stores gas",
                        body: "Main central region, primary site of digestion",
                        antrum: "Lower region, churns food; gastrin-secreting G-cells",
                        pylorus: "Junction with duodenum, contains pyloric sphincter"
                    },
                    wallLayers: {
                        mucosa: "Simple columnar epithelium, gastric pits and glands",
                        submucosa: "Connective tissue, blood vessels",
                        muscularisExterna: {
                            inner: "Oblique muscle layer (unique to stomach)",
                            middle: "Circular muscle layer",
                            outer: "Longitudinal muscle layer"
                        },
                        serosa: "Outer peritoneal layer"
                    },
                    gastricGlands: {
                        mucousNeckCells: "Secrete mucus (different from surface mucous cells)",
                        chiefCells: "Secrete pepsinogen (inactive) and gastric lipase",
                        parietalCells: "Secrete HCl and intrinsic factor",
                        gCells: "Secrete gastrin hormone (in antrum)",
                        enterochromaffinLikeCells: "Secrete histamine (stimulates parietal cells)"
                    }
                },
                secretion: {
                    HClMechanism: {
                        steps: [
                            "CO₂ + H₂O → H₂CO₃ (carbonic anhydrase)",
                            "H₂CO₃ → H⁺ + HCO₃⁻",
                            "H⁺ pumped into lumen via H⁺/K⁺ ATPase (proton pump)",
                            "Cl⁻ transported into lumen",
                            "HCO₃⁻ exchanged for Cl⁻ in blood (alkaline tide)"
                        ],
                        inhibitors: "Proton pump inhibitors (PPIs) - omeprazole, lansoprazole"
                    },
                    phases: {
                        cephalic: {
                            trigger: "Sight, smell, thought of food",
                            mechanism: "Vagus nerve → acetylcholine → stimulates gastric secretion",
                            contribution: "30% of total gastric secretion"
                        },
                        gastric: {
                            trigger: "Food in stomach",
                            mechanism: "Stomach distension + amino acids → gastrin → HCl",
                            contribution: "60% of total gastric secretion"
                        },
                        intestinal: {
                            trigger: "Chyme in small intestine",
                            mechanism: "Initially stimulates, then inhibits via secretin and CCK",
                            contribution: "10% of total gastric secretion"
                        }
                    }
                },
                proteinDigestion: {
                    denaturation: "HCl unfolds proteins, exposing peptide bonds",
                    activation: "HCl converts pepsinogen → pepsin (autocatalytic below pH 5)",
                    hydrolysis: "Pepsin cleaves peptide bonds at Phe, Tyr, Trp residues",
                    products: "Large polypeptides and some amino acids (10% complete digestion)"
                },
                gastricEmptying: {
                    rate: "2-4 hours for typical meal",
                    regulators: {
                        accelerate: "Low fat/protein content, liquid consistency, low calorie",
                        delay: "High fat, high protein, acid, CCK secretin (enterogastric reflex)"
                    }
                },
                applications: [
                    "Peptic ulcer disease (H. pylori, NSAID-induced)",
                    "Proton pump inhibitor therapy",
                    "Gastric bypass surgery for obesity",
                    "Pernicious anaemia (intrinsic factor deficiency)",
                    "Zollinger-Ellison syndrome (gastrin-secreting tumour)"
                ]
            },

            small_intestine: {
                title: "Small Intestine: The Principal Site of Digestion and Absorption",
                concepts: [
                    "The small intestine is the primary site of chemical digestion and nutrient absorption",
                    "Surface area is massively amplified by plicae circulares, villi, and microvilli",
                    "Brush border enzymes complete carbohydrate and protein digestion",
                    "Bile salts emulsify fats for lipase action",
                    "Different nutrients are absorbed by different mechanisms",
                    "The liver receives absorbed nutrients via the hepatic portal vein"
                ],
                theory: "The small intestine represents the masterpiece of digestive engineering. Over its 6-7 metre length, it receives secretions from the pancreas and liver, completes digestion of all macronutrients, and absorbs the resulting monomers plus water and micronutrients. The extraordinary surface area amplification (from ~0.6 m² flat tube to ~250 m² with all folds) is a key evolutionary adaptation.",
                keyDefinitions: {
                    "Villus": "Finger-like projection of intestinal mucosa (~1mm) increasing surface area",
                    "Microvillus (plural: microvilli)": "Tiny projections on enterocyte surface forming brush border",
                    "Brush Border": "Dense layer of microvilli on intestinal enterocytes; site of final digestion",
                    "Enterocyte": "Absorptive epithelial cell lining the small intestine",
                    "Lacteal": "Lymph capillary in villus core; absorbs chylomicrons (fat)",
                    "Plicae Circulares": "Permanent circular folds of mucosa and submucosa",
                    "Chyme": "Semi-liquid food mass entering duodenum from stomach",
                    "Emulsification": "Breaking large fat droplets into smaller ones (by bile salts)",
                    "Chylomicron": "Lipoprotein particle transporting dietary fats from enterocytes"
                },
                anatomy: {
                    regions: {
                        duodenum: {
                            length: "~25 cm",
                            shape: "C-shaped, fixed, retroperitoneal",
                            function: "Receives chyme, bile and pancreatic juice; major digestion site",
                            features: "Brunner's glands (alkaline mucus), ampulla of Vater"
                        },
                        jejunum: {
                            length: "~2.5 m",
                            features: "Tall villi, prominent plicae circulares, active absorption",
                            function: "Major absorption of carbohydrates, proteins, iron, folate"
                        },
                        ileum: {
                            length: "~3.5 m",
                            features: "Shorter villi, Peyer's patches (lymphoid tissue)",
                            function: "Absorbs B12, bile salts, fat-soluble vitamins, remaining nutrients"
                        }
                    },
                    surfaceAreaAmplification: {
                        plicaeCirculares: "3x increase (permanent circular folds)",
                        villi: "10x additional increase",
                        microvilli: "20x additional increase",
                        totalAmplification: "~600x compared to smooth tube",
                        finalSurfaceArea: "~250 m² (area of tennis court)"
                    },
                    villousStructure: {
                        enterocytes: "Columnar absorptive cells with microvilli",
                        gobletCells: "Secrete mucus for lubrication and protection",
                        enteroendocrineCells: "Secrete gut hormones (CCK, secretin, GIP)",
                        cryptsOfLieberkuhn: "Pits between villi; contain stem cells for renewal",
                        lacteals: "Lymph capillaries absorbing fat",
                        capillaryNetwork: "Blood capillaries absorbing amino acids, glucose, etc."
                    }
                },
                brushBorderEnzymes: {
                    carbohydrates: {
                        maltase: "Maltose → 2 glucose",
                        sucrase: "Sucrose → glucose + fructose",
                        lactase: "Lactose → glucose + galactose",
                        dextrinase: "Limit dextrins → glucose"
                    },
                    proteins: {
                        aminopeptidase: "Removes amino acids from N-terminus",
                        dipeptidase: "Cleaves dipeptides into amino acids",
                        enterokinase: "Activates trypsinogen → trypsin"
                    }
                },
                digestionSummary: {
                    carbohydrates: {
                        mouth: "Salivary amylase → dextrins, maltose",
                        smallIntestine: "Pancreatic amylase → disaccharides; brush border enzymes → monosaccharides",
                        products: "Glucose, fructose, galactose"
                    },
                    proteins: {
                        stomach: "Pepsin → large polypeptides",
                        smallIntestine: "Trypsin, chymotrypsin, elastase, carboxypeptidase → peptides; brush border peptidases → amino acids",
                        products: "Amino acids, di- and tripeptides"
                    },
                    fats: {
                        stomach: "Gastric lipase (minor)",
                        smallIntestine: "Bile salts emulsify; pancreatic lipase → monoglycerides + fatty acids",
                        products: "Monoglycerides, fatty acids, glycerol"
                    },
                    nucleicAcids: {
                        smallIntestine: "Pancreatic nucleases → nucleotides; brush border nucleosidases → nucleosides → bases + sugars"
                    }
                },
                absorption: {
                    glucose: {
                        mechanism: "Secondary active transport (Na⁺-glucose cotransporter SGLT1)",
                        exit: "Facilitated diffusion (GLUT2) into blood",
                        destination: "Hepatic portal vein → liver"
                    },
                    aminoAcids: {
                        mechanism: "Secondary active transport (Na⁺-amino acid cotransporters)",
                        dipeptidesTripeptides: "Absorbed by PepT1 transporter, then hydrolysed intracellularly",
                        destination: "Hepatic portal vein → liver"
                    },
                    fats: {
                        mechanism: "Micelles (bile salts + fats) diffuse to brush border",
                        reassembly: "Fatty acids + monoglycerides reassembled into triglycerides in ER",
                        packaging: "Triglycerides packaged into chylomicrons",
                        exit: "Exocytosis into lacteal → lymph → thoracic duct → blood",
                        bypassesLiver: true
                    },
                    vitamins: {
                        fatSoluble: "A, D, E, K - absorbed with fats in micelles",
                        waterSoluble: "C, B vitamins - various transport mechanisms",
                        B12: "Requires intrinsic factor (from stomach); absorbed in terminal ileum"
                    },
                    minerals: {
                        iron: "Absorbed in duodenum; regulated by hepcidin; ferrous (Fe²⁺) > ferric (Fe³⁺)",
                        calcium: "Vitamin D-dependent absorption; calcitonin and PTH regulate",
                        water: "~9 litres/day absorbed; passive osmosis follows solute"
                    }
                }
            },

            large_intestine: {
                title: "Large Intestine: Water Absorption and Waste Elimination",
                concepts: [
                    "Large intestine absorbs water, electrolytes, and some vitamins",
                    "Houses trillions of bacteria (gut microbiome)",
                    "Bacteria ferment indigestible fibre producing short-chain fatty acids",
                    "Gut bacteria synthesise vitamin K and some B vitamins",
                    "Defecation is controlled by internal and external anal sphincters",
                    "Mass movements and haustral churning are characteristic motility patterns"
                ],
                theory: "The large intestine processes ~1.5 litres of liquid material daily, recovering ~1.4 litres of water and returning it to the body. Its resident microbiome of 100 trillion bacteria (outnumbering human cells 10:1) profoundly influences nutrition, immunity, and even brain function. Understanding the large intestine is crucial for digestive health and disease management.",
                keyDefinitions: {
                    "Cecum": "Blind pouch at junction of small and large intestine; appendix attached here",
                    "Colon": "Main portion of large intestine (ascending, transverse, descending, sigmoid)",
                    "Haustra": "Pouched segments of colon (created by taeniae coli contractions)",
                    "Taeniae Coli": "Three longitudinal bands of smooth muscle running length of colon",
                    "Mass Movements": "Powerful peristaltic contractions moving faeces to rectum",
                    "Gut Microbiome": "Community of trillions of microorganisms in the digestive tract",
                    "Short-chain Fatty Acids (SCFAs)": "Acetate, propionate, butyrate - produced by bacterial fermentation",
                    "Defecation Reflex": "Coordinated reflex emptying rectum when rectal pressure rises"
                },
                anatomy: {
                    regions: {
                        cecum: "~6cm blind pouch; ileocecal valve controls flow from ileum",
                        appendix: "Lymphoid tissue; vestigial in humans (may have immune role)",
                        ascendingColon: "Rises on right side of abdomen",
                        transverseColon: "Crosses abdomen; most mobile part",
                        descendingColon: "Descends on left side",
                        sigmoidColon: "S-shaped; connects to rectum",
                        rectum: "~12 cm; stores faeces before defecation",
                        analCanal: "~4 cm; contains internal (smooth) and external (skeletal) sphincters"
                    },
                    wallFeatures: {
                        mucosa: "Simple columnar epithelium with many goblet cells (no villi)",
                        taeniaeColi: "Three muscle bands create haustra",
                        epiploicAppendages: "Fat-filled pouches on outer surface"
                    }
                },
                waterAbsorption: {
                    input: "~1.5 litres chyme enters daily from ileum",
                    absorbed: "~1.35 litres (90%) absorbed",
                    output: "~150 ml water in faeces",
                    mechanism: "Sodium actively transported; water follows osmotically",
                    importance: "Prevents severe dehydration; sodium absorption drives water recovery"
                },
                gutMicrobiome: {
                    composition: {
                        predominant: "Firmicutes and Bacteroidetes (90% of gut bacteria)",
                        others: "Proteobacteria, Actinobacteria, Verrucomicrobia",
                        numbers: "~100 trillion bacteria, ~1000 species"
                    },
                    functions: {
                        fermentation: "Breaks down indigestible fibre → SCFAs",
                        vitaminSynthesis: "Vitamin K, B12, biotin, folate",
                        immune: "Trains immune system, competes with pathogens",
                        metabolism: "Affects bile acid metabolism, drug metabolism",
                        gutBrainAxis: "Produces neurotransmitter precursors; bidirectional communication"
                    },
                    SCFAs: {
                        butyrate: "Primary energy source for colonocytes; anti-inflammatory",
                        propionate: "Gluconeogenesis precursor in liver",
                        acetate: "Most abundant; muscle and other tissue fuel"
                    },
                    dysbiosis: "Altered microbiome composition linked to IBD, obesity, type 2 diabetes, depression"
                },
                defecation: {
                    massMovements: "3-4 times daily; often triggered by eating (gastrocolic reflex)",
                    rectalFilling: "Mass movement → faeces enters rectum → rectal distension",
                    defecationReflex: {
                        intrinsic: "Internal anal sphincter (smooth) relaxes involuntarily",
                        voluntary: "External anal sphincter (skeletal) relaxes consciously",
                        valsalva: "Straining increases intraabdominal pressure"
                    },
                    fecalComposition: {
                        water: "75% water",
                        solids: "25% (bacteria 30%, fibre 30%, mucus, epithelial cells, fats)"
                    }
                },
                faecesComposition: {
                    water: "75%",
                    bacteria: "~30% of dry weight (mostly dead)",
                    fibre: "Undigested plant material",
                    mucus: "From goblet cells",
                    colour: "Stercobilin (from bilirubin breakdown by bacteria)"
                },
                applications: [
                    "Inflammatory bowel disease (Crohn's, ulcerative colitis)",
                    "Colorectal cancer screening",
                    "Probiotics and prebiotics for gut health",
                    "Faecal microbiota transplantation (FMT)",
                    "Constipation and diarrhoea management"
                ]
            },

            liver_gallbladder: {
                title: "Liver and Gallbladder: Bile Production and Fat Emulsification",
                concepts: [
                    "The liver is the largest internal organ with over 500 functions",
                    "Liver produces bile (500-1000 ml/day) for fat emulsification",
                    "Bile salts are amphipathic - emulsify large fat globules into smaller droplets",
                    "Gallbladder stores and concentrates bile between meals",
                    "Cholecystokinin (CCK) triggers gallbladder contraction and bile release",
                    "Bile is recycled via enterohepatic circulation"
                ],
                theory: "The liver is the metabolic hub of the body. Its digestive role centres on bile production - a complex mixture that enables fat digestion by dramatically increasing the surface area available for lipase action. The enterohepatic circulation efficiently recycles bile salts, minimising their biosynthetic cost. Hepatic dysfunction has profound consequences for virtually every aspect of physiology.",
                keyDefinitions: {
                    "Bile": "Yellow-green fluid produced by liver; contains bile salts, cholesterol, bilirubin, phospholipids",
                    "Bile Salts": "Amphipathic molecules derived from cholesterol; emulsify fats",
                    "Emulsification": "Mechanical dispersion of large fat droplets into smaller ones (~1 micron)",
                    "Micelle": "Spherical aggregate of bile salts surrounding fat products (for absorption)",
                    "Bilirubin": "Yellow pigment from haemoglobin breakdown; excreted in bile",
                    "Hepatocyte": "Main functional cell of the liver (~80% of liver cells)",
                    "Kupffer Cell": "Resident macrophage of liver; removes pathogens and debris from portal blood",
                    "Enterohepatic Circulation": "Recycling of bile salts from ileum back to liver via portal vein",
                    "Cholecystokinin (CCK)": "Hormone from duodenum; triggers gallbladder contraction and bile release"
                },
                anatomy: {
                    liver: {
                        lobes: "Right lobe (larger) and left lobe; caudate and quadrate lobes",
                        weight: "~1.5 kg in adults",
                        bloodSupply: {
                            hepaticPortalVein: "75% of blood; carries absorbed nutrients from gut",
                            hepaticArtery: "25% of blood; oxygenated from aorta"
                        },
                        microstructure: {
                            lobule: "Functional unit; hexagonal with central vein",
                            sinusoids: "Blood channels between hepatocytes; lined with Kupffer cells",
                            bileCaniculi: "Tiny channels between hepatocytes collecting bile",
                            portalTriad: "Branch of portal vein, hepatic artery, bile duct at each lobule corner"
                        }
                    },
                    gallbladder: {
                        location: "Inferior surface of right lobe of liver",
                        volume: "40-70 ml",
                        concentration: "Concentrates bile 5-10x by absorbing water and electrolytes",
                        duct: "Cystic duct → common bile duct → duodenum (at ampulla of Vater)"
                    }
                },
                bileComposition: {
                    water: "82%",
                    bileSalts: "12% (primary: cholic and chenodeoxycholic acids; secondary: deoxycholic, lithocholic)",
                    bilirubin: "~0.5% (yellow, from haem degradation)",
                    cholesterol: "~4%",
                    phospholipids: "~1%",
                    ions: "Na⁺, K⁺, Ca²⁺, HCO₃⁻"
                },
                bileSaltsFunction: {
                    structure: "Amphipathic (hydrophilic face and hydrophobic face)",
                    emulsification: "Reduce surface tension; break fat globules into 1-micron droplets",
                    micelleFormation: "Surround fat digestion products; transport to brush border",
                    reabsorption: "95% reabsorbed in terminal ileum via active transport (ASBT)",
                    recycling: "Enterohepatic circulation: ileum → portal vein → liver → bile → duodenum"
                },
                liverFunctions: {
                    digestive: "Bile synthesis and secretion",
                    metabolism: {
                        carbohydrate: "Glycogen storage, gluconeogenesis, glucose homeostasis",
                        lipid: "Fatty acid oxidation, ketone body synthesis, lipoprotein assembly",
                        protein: "Plasma protein synthesis (albumin, clotting factors), deamination, urea cycle"
                    },
                    detoxification: "Removes drugs, toxins, alcohol, bilirubin from portal blood",
                    immune: "Kupffer cells phagocytose bacteria from portal blood",
                    storage: "Glycogen, vitamins A, D, B12, iron (ferritin)"
                },
                jaundice: {
                    definition: "Yellow discolouration of skin/sclera from excess bilirubin",
                    types: {
                        preHepatic: "Haemolysis → excess bilirubin production",
                        hepatic: "Liver disease → impaired bilirubin processing",
                        postHepatic: "Bile duct obstruction (gallstones, tumour)"
                    }
                }
            },

            pancreas: {
                title: "Pancreas: Digestive Enzymes and Blood Glucose Regulation",
                concepts: [
                    "The pancreas is both exocrine (digestive enzymes) and endocrine (hormones)",
                    "Exocrine pancreas produces 1.5 litres of alkaline juice daily",
                    "Pancreatic juice contains enzymes for all major nutrient classes",
                    "Most pancreatic enzymes are secreted as inactive zymogens",
                    "Enterokinase activates the enzyme cascade in the duodenum",
                    "Insulin and glucagon regulate blood glucose homeostasis"
                ],
                theory: "The pancreas exemplifies a dual-function organ. Its exocrine tissue (99% of mass) produces the most powerful battery of digestive enzymes in the body, while its endocrine islets regulate blood glucose with precision. Understanding the activation cascade of pancreatic zymogens is critical - failure of this mechanism leads to pancreatitis, where the pancreas digests itself.",
                keyDefinitions: {
                    "Acinar Cell": "Exocrine pancreatic cell producing digestive enzymes",
                    "Zymogen": "Inactive enzyme precursor (e.g., trypsinogen, chymotrypsinogen)",
                    "Trypsin": "Serine protease cleaving peptide bonds at Lys/Arg residues",
                    "Enterokinase": "Brush border enzyme converting trypsinogen → trypsin",
                    "Islets of Langerhans": "Clusters of endocrine cells within pancreas (~1-2% of mass)",
                    "Insulin": "Hormone from β-cells; lowers blood glucose",
                    "Glucagon": "Hormone from α-cells; raises blood glucose",
                    "Secretin": "Duodenal hormone stimulating pancreatic bicarbonate secretion",
                    "CCK": "Duodenal hormone stimulating pancreatic enzyme secretion"
                },
                anatomy: {
                    location: "Retroperitoneal, behind stomach",
                    structure: {
                        head: "Nestled in C-curve of duodenum",
                        body: "Crosses vertebral column",
                        tail: "Touches spleen"
                    },
                    exocrineTissue: {
                        acini: "Grape-like clusters of acinar cells",
                        ducts: "Intercalated → intralobular → interlobular → main pancreatic duct",
                        mainDuct: "Duct of Wirsung; joins common bile duct → ampulla of Vater",
                        accessoryDuct: "Duct of Santorini; opens separately in some individuals"
                    },
                    endocrineTissue: {
                        islets: "1-2% of pancreatic mass; ~1 million islets",
                        alphaCell: "~20% of islet cells; secrete glucagon",
                        betaCell: "~70% of islet cells; secrete insulin",
                        deltaCell: "~10% of islet cells; secrete somatostatin (inhibits α and β cells)",
                        ppCell: "Secrete pancreatic polypeptide"
                    }
                },
                pancreaticJuice: {
                    volume: "1.5-2 litres per day",
                    pH: "7.5-8.8 (alkaline - neutralises gastric acid in duodenum)",
                    bicarbonate: "Main alkalinising component; secreted by ductal cells in response to secretin",
                    enzymes: {
                        carbohydrates: {
                            pancreaticAmylase: "Hydrolyses starch → maltose, dextrins (active immediately)"
                        },
                        proteins: {
                            trypsinogen: "→ trypsin (by enterokinase); cleaves at Arg/Lys",
                            chymotrypsinogen: "→ chymotrypsin (by trypsin); cleaves at Phe/Tyr/Trp",
                            proelastase: "→ elastase (by trypsin); cleaves at Ala/Gly/Val/Ser",
                            procarboxypeptidase: "→ carboxypeptidase (by trypsin); removes C-terminal amino acids"
                        },
                        lipids: {
                            pancreaticLipase: "Primary fat-digesting enzyme; requires colipase and bile salts",
                            colipase: "Anchors lipase to fat droplet surface",
                            phospholipase: "Digests phospholipids"
                        },
                        nucleicAcids: {
                            DNase: "Digests DNA",
                            RNase: "Digests RNA"
                        }
                    }
                },
                zymogenActivation: {
                    sequence: [
                        "1. Chyme (with fat/protein) enters duodenum",
                        "2. I-cells secrete CCK → stimulates acinar cell secretion",
                        "3. Trypsinogen enters duodenum",
                        "4. Brush border enterokinase cleaves trypsinogen → trypsin",
                        "5. Trypsin activates all other zymogens (autocatalytic cascade)",
                        "6. Active enzymes digest food molecules"
                    ],
                    protection: {
                        pancreatitisRisk: "Premature activation causes autodigestion",
                        trySINInhibitor: "SPINK1 inhibits any trypsin activated prematurely in pancreas",
                        packaging: "Zymogens stored separately from lysosomal enzymes"
                    }
                },
                bloodGlucoseRegulation: {
                    postMeal: {
                        stimulus: "Blood glucose rises above ~5 mmol/L",
                        insulin: "β-cells secrete insulin",
                        effects: ["Glucose uptake by muscle, fat, liver", "Glycogenesis in liver/muscle", "Inhibits glycogenolysis and gluconeogenesis"]
                    },
                    fasting: {
                        stimulus: "Blood glucose falls below ~4.5 mmol/L",
                        glucagon: "α-cells secrete glucagon",
                        effects: ["Glycogenolysis in liver", "Gluconeogenesis", "Fatty acid mobilisation"]
                    },
                    diabetes: {
                        type1: "Autoimmune destruction of β-cells → no insulin",
                        type2: "Insulin resistance + progressive β-cell failure"
                    }
                }
            },

            digestive_enzymes: {
                title: "Digestive Enzymes: Mechanisms and Specificity",
                concepts: [
                    "Digestive enzymes are hydrolases that cleave covalent bonds by adding water",
                    "Each enzyme is specific for a particular substrate and bond type",
                    "Enzymes act optimally at specific pH and temperature ranges",
                    "Most digestive enzymes are secreted as inactive zymogens",
                    "Enzyme activity is regulated hormonally and neurally"
                ],
                theory: "Digestive enzymes are the biochemical workforce of the alimentary canal. They belong to the hydrolase class and use water to cleave the covalent bonds linking monomers in macromolecules. Their extreme specificity - determined by active site architecture - ensures that only the correct substrate is processed. Understanding enzyme mechanisms enables rational design of drugs that interfere with digestion.",
                keyDefinitions: {
                    "Hydrolase": "Enzyme that cleaves bonds by adding water (hydrolysis)",
                    "Amylase": "Enzyme hydrolyzing α-1,4 glycosidic bonds in starch",
                    "Protease (Peptidase)": "Enzyme cleaving peptide bonds in proteins",
                    "Lipase": "Enzyme hydrolyzing ester bonds in triglycerides",
                    "Nuclease": "Enzyme cleaving phosphodiester bonds in nucleic acids",
                    "Optimal pH": "pH at which enzyme has maximum activity",
                    "Zymogen (Proenzyme)": "Inactive precursor activated by cleavage",
                    "Endopeptidase": "Cleaves peptide bonds within protein chain",
                    "Exopeptidase": "Removes amino acids from ends of protein chain"
                },
                enzymeTable: {
                    carbohydrases: {
                        salivaryAmylase: { source: "Salivary glands", substrate: "Starch", product: "Maltose, dextrins", optimalPH: "6.7-7.0", location: "Mouth (inactive in stomach)" },
                        pancreaticAmylase: { source: "Pancreas", substrate: "Starch, dextrins", product: "Maltose, glucose", optimalPH: "6.7-7.0", location: "Small intestine" },
                        maltase: { source: "Brush border", substrate: "Maltose", product: "2 Glucose", optimalPH: "~6.0", location: "Small intestine" },
                        sucrase: { source: "Brush border", substrate: "Sucrose", product: "Glucose + Fructose", optimalPH: "~6.0", location: "Small intestine" },
                        lactase: { source: "Brush border", substrate: "Lactose", product: "Glucose + Galactose", optimalPH: "~6.0", location: "Small intestine" }
                    },
                    proteases: {
                        pepsin: { source: "Stomach chief cells (as pepsinogen)", substrate: "Proteins (Phe, Tyr, Trp bonds)", product: "Polypeptides", optimalPH: "1.5-2.5", location: "Stomach" },
                        trypsin: { source: "Pancreas (as trypsinogen)", substrate: "Proteins at Arg/Lys", product: "Peptides", optimalPH: "7.5-8.0", location: "Small intestine" },
                        chymotrypsin: { source: "Pancreas (as chymotrypsinogen)", substrate: "Proteins at Phe/Tyr/Trp", product: "Peptides", optimalPH: "7.5-8.0", location: "Small intestine" },
                        elastase: { source: "Pancreas (as proelastase)", substrate: "Elastin, collagen (at Ala/Gly)", product: "Peptides", optimalPH: "8.0", location: "Small intestine" },
                        carboxypeptidase: { source: "Pancreas", substrate: "C-terminal amino acids", product: "Amino acids + peptides", optimalPH: "7.5", location: "Small intestine" },
                        aminopeptidase: { source: "Brush border", substrate: "N-terminal amino acids", product: "Amino acids + peptides", optimalPH: "~7.0", location: "Small intestine" }
                    },
                    lipases: {
                        lingualLipase: { source: "Tongue glands", substrate: "Triglycerides", product: "Diglycerides + FA", optimalPH: "3.5-6.0", location: "Mouth/Stomach", contribution: "Minor" },
                        gastricLipase: { source: "Chief cells", substrate: "Short/medium chain TG", product: "Diglycerides + FA", optimalPH: "3.0-6.0", location: "Stomach", contribution: "~15%" },
                        pancreaticLipase: { source: "Pancreas", substrate: "Triglycerides (sn-1,3)", product: "2-Monoglycerides + FA", optimalPH: "7.0-8.0", location: "Small intestine", contribution: "~80%" }
                    }
                },
                pHEffects: {
                    salivaryAmylase: "Optimal 6.7-7.0; inactivated in stomach (pH 1.5-2)",
                    pepsin: "Optimal 1.5-2.5; denatured above pH 5",
                    pancreaticEnzymes: "Optimal 7.5-8.0; pancreatic bicarbonate raises duodenal pH",
                    brushBorderEnzymes: "Optimal ~6-7; intestinal pH ~6.5-7.5"
                },
                inhibitors: {
                    PPIs: "Block H⁺/K⁺ ATPase → less HCl → raises gastric pH → reduces pepsin activation",
                    orlistat: "Inhibits pancreatic and gastric lipase → reduces fat absorption (weight loss drug)",
                    acarbose: "Inhibits α-glucosidase (brush border) → slows starch digestion → controls blood glucose",
                    SPINK1: "Endogenous trypsin inhibitor in pancreas → prevents premature autodigestion"
                }
            },

            nutrient_absorption: {
                title: "Nutrient Absorption: Mechanisms and Transport",
                concepts: [
                    "Different nutrients cross the enterocyte by different transport mechanisms",
                    "Glucose and amino acids use secondary active transport (coupled to Na⁺)",
                    "Fats are reassembled in enterocytes and exported as chylomicrons via lymph",
                    "Water-soluble nutrients enter hepatic portal vein; fat-soluble enter lymph",
                    "The liver processes and distributes all portal vein nutrients"
                ],
                theory: "Nutrient absorption is a precisely regulated process matching intake to metabolic needs. The enterocyte is the key cellular interface, expressing specific transporters on its apical (brush border) and basolateral (blood-facing) membranes. The routing of absorbed nutrients - portal circulation for most, lymphatics for fats - reflects their different physicochemical properties and metabolic destinations.",
                keyDefinitions: {
                    "Active Transport": "Movement against concentration gradient, requiring ATP",
                    "Secondary Active Transport": "Uses Na⁺ gradient (created by Na⁺/K⁺ ATPase) to drive co-transport",
                    "Facilitated Diffusion": "Transporter-mediated movement down concentration gradient, no ATP",
                    "Paracellular": "Transport between cells (through tight junctions)",
                    "Transcellular": "Transport through cell (apical in → basolateral out)",
                    "Chylomicron": "Lipoprotein particle (80-1200 nm) assembling fat for lymphatic transport",
                    "SGLT1": "Na⁺/Glucose cotransporter on brush border",
                    "GLUT2": "Glucose transporter on basolateral membrane of enterocyte",
                    "Hepatic Portal System": "Venous blood carrying absorbed nutrients from intestine to liver"
                },
                absorptionMechanisms: {
                    glucose: {
                        apical: "SGLT1 - Na⁺-coupled secondary active transport",
                        basolateral: "GLUT2 - facilitated diffusion into blood",
                        naGradient: "Maintained by basolateral Na⁺/K⁺ ATPase",
                        regulation: "SGLT1 expression increases when dietary carbohydrate rises"
                    },
                    fructose: {
                        apical: "GLUT5 - facilitated diffusion",
                        basolateral: "GLUT2 - facilitated diffusion",
                        note: "Independent of Na⁺; absorbed slower than glucose"
                    },
                    aminoAcids: {
                        apical: "Multiple Na⁺-dependent amino acid transporters (different for different groups)",
                        basolateral: "Facilitated diffusion via various transporters",
                        diPepTri: "PepT1 cotransporter absorbs intact di- and tripeptides (H⁺ coupled)",
                        intracellular: "Peptidases hydrolyse di/tripeptides inside enterocyte"
                    },
                    fats: {
                        micelleToEnterocyte: {
                            step1: "Pancreatic lipase digests TG to 2-monoglycerides + free fatty acids",
                            step2: "Products dissolve into mixed micelles (bile salts + phospholipids)",
                            step3: "Micelles diffuse to brush border; lipids diffuse across membrane",
                            step4: "Short/medium chain FA (< C12) enter portal blood directly",
                            step5: "Long chain FA (>C12) enter smooth ER of enterocyte"
                        },
                        chylomicronAssembly: {
                            resynthesis: "FA + 2-monoglyceride → TG (in smooth ER)",
                            apolipoprotein: "ApoB-48 added as structural protein",
                            packaging: "TG + cholesterol + phospholipids → chylomicron in Golgi",
                            export: "Exocytosis → intercellular space → lacteal → lymph",
                            bloodEntry: "Thoracic duct → left subclavian vein → systemic circulation",
                            bypassesLiver: "First-pass hepatic metabolism avoided"
                        }
                    },
                    vitamins: {
                        fatSoluble: {
                            vitamins: "A, D, E, K",
                            mechanism: "Dissolved in micelles; absorbed with fats",
                            transport: "Chylomicrons → lymph → blood",
                            storage: "Liver and adipose tissue"
                        },
                        waterSoluble: {
                            C: "Sodium-dependent cotransporter (SVCT1) in ileum",
                            B1_B2_B6: "Specific transporters",
                            folate: "Proton-coupled folate transporter",
                            B12: "Complex with intrinsic factor → receptor-mediated endocytosis in terminal ileum"
                        }
                    },
                    water: {
                        mechanism: "Osmosis following solute absorption",
                        amount: "~9 L/day total (2L ingested + 7L secreted)",
                        smallIntestine: "~6-7 L absorbed",
                        largeIntestine: "~1.4 L absorbed",
                        portals: "Both paracellular and transcellular (aquaporins)"
                    }
                },
                hepaticProcessing: {
                    glucose: "Stored as glycogen or oxidised; regulates blood glucose",
                    aminoAcids: "Used for protein synthesis, transamination, or deamination + urea",
                    fattyAcids: "β-oxidation for energy or lipogenesis",
                    firstPassEffect: "Drugs absorbed from gut largely metabolised before reaching systemic circulation"
                }
            },

            digestive_hormones: {
                title: "Hormonal Regulation of Digestion",
                concepts: [
                    "Gut hormones coordinate digestive secretions with food intake",
                    "Gastrin from G-cells stimulates gastric acid secretion",
                    "Secretin from S-cells stimulates pancreatic bicarbonate",
                    "CCK from I-cells stimulates enzyme secretion and gallbladder contraction",
                    "GIP and GLP-1 are incretins that stimulate insulin release",
                    "Feedback mechanisms prevent over- or under-secretion"
                ],
                theory: "The gut is the largest endocrine organ in the body, secreting over 20 identified hormones. These coordinate the timing and volume of digestive secretions with the arrival of food, optimising digestion and absorption. Gut hormones also regulate satiety, gastric emptying, and blood glucose, making them important targets for treating obesity and diabetes.",
                keyDefinitions: {
                    "Gastrin": "Peptide hormone from G-cells (antrum); stimulates HCl, pepsinogen, and gastric motility",
                    "Secretin": "Peptide hormone from S-cells (duodenum); stimulates pancreatic HCO₃⁻",
                    "CCK (Cholecystokinin)": "Peptide from I-cells (duodenum); stimulates enzymes and gallbladder",
                    "GIP (Gastric Inhibitory Peptide)": "From K-cells; inhibits gastric secretion; incretin",
                    "GLP-1": "Glucagon-like peptide-1 from L-cells; potent incretin; delays gastric emptying",
                    "Motilin": "Stimulates migrating motor complex (house-keeping contractions between meals)",
                    "Somatostatin": "Inhibits most GI secretions; from δ-cells of pancreas and GI mucosa",
                    "Incretin": "Gut hormone amplifying insulin secretion in response to food"
                },
                hormoneTable: {
                    gastrin: {
                        secretedBy: "G-cells in gastric antrum",
                        stimulus: "Protein/amino acids in stomach, gastric distension, vagal stimulation",
                        actions: ["Stimulates HCl secretion by parietal cells", "Stimulates pepsinogen by chief cells", "Increases gastric motility", "Stimulates growth of gastric mucosa"],
                        inhibitedBy: "Low pH (<2), secretin, GIP"
                    },
                    secretin: {
                        secretedBy: "S-cells in duodenal mucosa",
                        stimulus: "Acid (pH <4.5) in duodenum",
                        actions: ["Stimulates pancreatic bicarbonate secretion", "Inhibits gastric acid", "Stimulates bile secretion by liver"],
                        result: "Neutralises acidic chyme in duodenum"
                    },
                    CCK: {
                        secretedBy: "I-cells in duodenum and jejunum",
                        stimulus: "Fat and protein (amino acids) in duodenum",
                        actions: ["Stimulates pancreatic enzyme secretion", "Stimulates gallbladder contraction (bile release)", "Inhibits gastric emptying", "Stimulates satiety (feeling of fullness)"],
                        drugsTarget: "CCK receptor antagonists (devazepide) studied for pancreatitis, obesity"
                    },
                    GIP: {
                        secretedBy: "K-cells in duodenum and jejunum",
                        stimulus: "Glucose, fat, amino acids in duodenum",
                        actions: ["Inhibits gastric acid (enterogastric reflex)", "Incretin: stimulates insulin release"],
                        drugs: "GIP receptor agonists in development for diabetes"
                    },
                    GLP1: {
                        secretedBy: "L-cells in ileum and colon",
                        stimulus: "Nutrients reaching distal gut",
                        actions: ["Potent incretin (stimulates insulin, inhibits glucagon)", "Delays gastric emptying", "Reduces appetite (satiety centre in hypothalamus)", "β-cell proliferation and protection"],
                        drugs: "GLP-1 receptor agonists (semaglutide, liraglutide) - type 2 diabetes and obesity"
                    },
                    motilin: {
                        secretedBy: "Mo-cells in duodenum/jejunum",
                        stimulus: "Between meals (fasting state, every ~90 min)",
                        actions: "Initiates migrating motor complex (MMC) - 'housekeeping' contractions clearing residue"
                    },
                    somatostatin: {
                        secretedBy: "D-cells (pancreas, throughout GI tract)",
                        stimulus: "Acids, fats, glucose, other hormones",
                        actions: "Inhibits most GI secretions (gastrin, secretin, CCK, insulin, glucagon, GH)"
                    }
                },
                clinicalApplications: {
                    GLP1agonists: "Semaglutide (Ozempic/Wegovy) - major advance for T2DM and obesity",
                    DPP4inhibitors: "Prevent GLP-1/GIP degradation - sitagliptin for T2DM",
                    octreotide: "Somatostatin analogue - treats VIPoma, carcinoid, acromegaly",
                    ZollingerEllison: "Gastrinoma → excess gastrin → extreme acid → peptic ulcers"
                }
            }
        };
    }

    initializeDigestiveExperiments() {
        this.digestiveExperiments = {

            // ============================================================
            // EXPERIMENT 1 - ENZYME ACTIVITY (Historical: Beaumont/Spallanzani)
            // ============================================================

            beaumont_gastric_digestion: {
                name: "Gastric Digestion and Pepsin Activity",
                relatedTopics: ['stomach', 'digestive_enzymes'],
                category: 'enzyme_activity',
                historicalBackground: {
                    scientist: "William Beaumont & Lazzaro Spallanzani",
                    years: "Spallanzani: 1780s; Beaumont: 1822-1833",
                    discovery: "Chemical nature of gastric digestion; role of gastric juice",
                    spallanzaniWork: "Self-experimented by swallowing food in perforated containers; showed gastric juice (not just mechanical churning) digested food",
                    beaumontWork: "Studied gastric fistula of Alexis St. Martin (accidentally shot, fistula healed leaving permanent opening); directly observed and sampled gastric juice",
                    contributions: [
                        "Demonstrated gastric juice is acidic and chemically active",
                        "Showed digestion occurs via chemical (not just mechanical) action",
                        "Identified that temperature (body heat) optimises digestion",
                        "Beaumont documented 51 experiments on gastric physiology",
                        "Established foundation for modern gastroenterology"
                    ],
                    quote: "The gastric juice is the most general solvent in nature... it will dissolve almost every kind of aliment.",
                    significance: "First direct evidence of chemical digestion; understanding that stomach secretes specific chemicals for digestion"
                },
                labExperiment: {
                    title: "Effect of pH on Pepsin Activity",
                    hypothesis: "If pepsin is adapted to function in the acidic gastric environment, then it will have maximum proteolytic activity at pH 1.5-2.5, with reduced activity at higher pH values",
                    purpose: "Investigate the effect of pH on pepsin activity using egg white (albumin) as substrate",
                    background: {
                        pepsin: "Protease secreted by chief cells as pepsinogen; activated by HCl (auto-activation below pH 5)",
                        substrate: "Denatured egg white (albumin) - easy to see clearing as protein digests",
                        pH: "Gastric pH is 1.5-2.5; pepsin inactive above pH 5"
                    },
                    variables: {
                        independent: "pH of reaction mixture (1, 2, 3, 5, 7, 9)",
                        dependent: "Amount of protein digested (turbidity decrease or zone of clearing)",
                        controlled: ["Pepsin concentration", "Substrate concentration", "Temperature (37°C)", "Time", "Volume"]
                    },
                    materials: [
                        "Pepsin powder (commercial, food-grade or lab-grade)",
                        "Egg white (hard-boiled and finely diced, or prepared coagulated albumin tubes)",
                        "Hydrochloric acid (0.1M and 1M HCl)",
                        "Sodium hydroxide (0.1M NaOH)",
                        "Buffer solutions: pH 1, 2, 3, 5, 7, 9",
                        "pH paper or pH meter",
                        "Test tubes (12 minimum)",
                        "Water bath at 37°C",
                        "Ruler (for measuring clearing zones)",
                        "Stopwatch",
                        "Pipettes and measuring cylinders",
                        "White tile for colour observation"
                    ],
                    safetyPrecautions: [
                        "Wear goggles and gloves when handling HCl and NaOH",
                        "HCl and NaOH are corrosive - avoid skin contact",
                        "Hot water bath - handle with care, use tongs",
                        "Dispose of biological materials (egg white) appropriately"
                    ],
                    procedure: {
                        substratePreparation: [
                            "Hard-boil eggs for 10 minutes",
                            "Remove egg white and cut into uniform 5mm cubes OR",
                            "Alternative: coagulate egg white tubes by filling capillary tubes with egg white and boiling",
                            "Rinse cubes in distilled water to remove soluble proteins",
                            "Prepare equal-sized pieces for each test tube"
                        ],
                        enzymePreparation: [
                            "Dissolve 1g pepsin powder in 100 ml distilled water (1% solution)",
                            "Store on ice until use"
                        ],
                        pHSetup: [
                            "Prepare 6 buffer solutions: pH 1 (HCl), pH 2, pH 3 (HCl + NaCl), pH 5 (acetate), pH 7 (phosphate), pH 9 (borate)",
                            "Verify pH with pH meter or test strips",
                            "Label test tubes 1-6 (for each pH) plus controls"
                        ],
                        mainProcedure: [
                            "Add one uniform piece of coagulated egg white to each test tube",
                            "Add 5 ml of appropriate pH buffer to each tube",
                            "Add 2 ml of pepsin solution to tubes 1-6",
                            "Add 2 ml of distilled water (no enzyme) to control tubes C1-C6",
                            "Record initial size of egg white pieces",
                            "Place all tubes in 37°C water bath",
                            "Observe every 10 minutes for 60 minutes",
                            "Record size reduction, turbidity, or clearing",
                            "After 60 minutes, measure remaining egg white piece size with ruler",
                            "Calculate percentage decrease in size"
                        ],
                        measurement: [
                            "Visual: Observe cloudiness/clearing of solution",
                            "Size: Measure egg white cube dimensions at intervals",
                            "Mass: Weigh remaining solid at end (if using larger pieces)",
                            "Colorimetric (advanced): Bradford assay on supernatant to quantify released protein"
                        ]
                    },
                    expectedResults: {
                        pH1: "Most rapid digestion - clear zone appears quickly, egg white shrinks fastest",
                        pH2: "Rapid digestion - close to optimal pH",
                        pH3: "Moderate digestion - still within active range",
                        pH5: "Little digestion - pepsin activity greatly reduced",
                        pH7: "No digestion - pepsin inactive at neutral pH",
                        pH9: "No digestion - pepsin denatured by alkalinity",
                        controls: "No change in egg white size (no enzyme added)"
                    },
                    dataTable: [
                        ["pH", "Initial Size (mm)", "Size at 30min (mm)", "Size at 60min (mm)", "% Reduction", "Observations"],
                        ["1", "5", "3.5", "2.1", "58%", "Rapid dissolution, clear solution"],
                        ["2", "5", "3.8", "2.4", "52%", "Rapid dissolution"],
                        ["3", "5", "4.5", "3.8", "24%", "Moderate dissolution"],
                        ["5", "5", "4.9", "4.7", "6%", "Very little change"],
                        ["7", "5", "5.0", "5.0", "0%", "No change"],
                        ["9", "5", "5.0", "5.0", "0%", "No change"],
                        ["Control (pH2, no enzyme)", "5", "5.0", "5.0", "0%", "No change"]
                    ],
                    analysis: {
                        optimalPH: "Pepsin is most active at pH 1.5-2.5, matching the stomach's acidic environment",
                        inactivation: "Activity falls sharply above pH 4-5 because pepsin's active site changes shape (denaturation)",
                        significance: "Explains why salivary amylase (optimum pH 6.7-7.0) is inactivated in the stomach",
                        HClRole: [
                            "Denatures dietary proteins, exposing more peptide bonds",
                            "Activates pepsinogen → pepsin autocatalytically",
                            "Maintains pH in optimal range for pepsin",
                            "Kills most ingested bacteria"
                        ],
                        beaumont_connection: "Beaumont noted gastric juice was 'sour' (acid) and actively dissolved food - this experiment quantifies that observation"
                    },
                    conclusions: [
                        "Pepsin shows optimal activity at pH 1.5-2.5 (highly acidic)",
                        "Activity decreases sharply as pH increases above 3",
                        "Pepsin is inactive at neutral or alkaline pH",
                        "The stomach's acidic environment is essential for protein digestion",
                        "This confirms Beaumont's observation that gastric juice has chemical digestive activity"
                    ],
                    realWorldApplications: [
                        "Proton pump inhibitors reduce gastric acid → impair protein digestion initially",
                        "Antacids raise gastric pH → reduce pepsin effectiveness",
                        "Premature infants have lower gastric acid → different digestive capabilities",
                        "H. pylori raises gastric pH → impairs digestion, allows bacterial survival"
                    ],
                    modernExtensions: [
                        "Use Bradford assay for quantitative protein measurement",
                        "Compare pepsin with other proteases (trypsin at pH 7.5)",
                        "Model Michaelis-Menten kinetics across pH values",
                        "Investigate effect of temperature on pepsin activity at optimal pH"
                    ]
                }
            },

            // ============================================================
            // EXPERIMENT 2 - SALIVARY AMYLASE (Historical: Kirchhoff/Leuchs)
            // ============================================================

            kirchhoff_starch_digestion: {
                name: "Salivary Amylase: Starch Digestion and Temperature Effects",
                relatedTopics: ['oral_cavity', 'digestive_enzymes', 'small_intestine'],
                category: 'carbohydrate_digestion',
                historicalBackground: {
                    scientist: "Gottlieb Kirchhoff & Johann Leuchs",
                    years: "Kirchhoff: 1811; Leuchs: 1831",
                    discovery: "Starch hydrolysis by diastase (amylase)",
                    kirchhoff: "Showed starch could be converted to glucose using wheat gluten extract - first description of starch-digesting enzyme",
                    leuchs: "Demonstrated human saliva could convert starch to sugar; first characterisation of salivary amylase (called 'ptyalin')",
                    context: "Led to understanding that digestion is not just mechanical but enzymatic",
                    significance: "Foundation for enzymology and understanding of carbohydrate digestion",
                    payen: "Anselme Payen and Jean-François Persoz isolated 'diastase' (amylase) from malt in 1833 - first enzyme ever isolated"
                },
                labExperiment: {
                    title: "Effect of Temperature on Salivary Amylase Activity",
                    hypothesis: "Salivary amylase will have maximum activity at 37°C (body temperature) and reduced activity at very low or very high temperatures",
                    purpose: "Investigate the effect of temperature on the rate of starch digestion by salivary amylase, using iodine solution as indicator",
                    background: {
                        salivaryAmylase: "Enzyme in saliva (pH optimum 6.7-7.0) that hydrolyses α-1,4 glycosidic bonds in starch → maltose + dextrins",
                        iodineTest: "Starch gives blue-black colour with iodine; no starch = brown (negative test)",
                        procedure: "Time how long starch digestion takes at each temperature (time for iodine to stop turning blue-black)"
                    },
                    variables: {
                        independent: "Temperature (0°C, 20°C, 37°C, 50°C, 70°C, 100°C)",
                        dependent: "Time for starch to be completely digested (time for iodine test to remain brown/amber)",
                        controlled: ["Saliva dilution", "Starch concentration", "pH (6.7)", "Volume", "Iodine amount"]
                    },
                    materials: [
                        "Fresh saliva (collected from student, diluted 1:10 with distilled water)",
                        "Alternative: commercial α-amylase solution (0.5% in pH 6.8 buffer)",
                        "1% starch solution (dissolve in warm water, cool before use)",
                        "Iodine solution (Lugol's iodine)",
                        "Spotting tile (white, with multiple wells)",
                        "Water baths at: 0°C (ice water), 20°C (room temp), 37°C, 50°C, 70°C, 100°C (boiling)",
                        "Test tubes and rack",
                        "Syringe or dropper (to sample starch solution at intervals)",
                        "Stopwatch",
                        "Thermometer",
                        "Pipettes and measuring cylinders"
                    ],
                    safetyPrecautions: [
                        "Use only own saliva; do not share with others",
                        "Iodine stains - wear gloves and protective clothing",
                        "Handle boiling water bath with care",
                        "Warn: iodine is irritant - avoid eyes"
                    ],
                    procedure: {
                        salivaCollection: [
                            "Rinse mouth with water 5 minutes before collecting",
                            "Collect ~5 ml saliva in clean container",
                            "Dilute 1 ml saliva in 9 ml distilled water (1:10 dilution)",
                            "Keep on ice until use to prevent activity loss"
                        ],
                        mainProcedure: [
                            "Place drops of iodine solution in ALL wells of spotting tile (1 drop each)",
                            "Label 6 test tubes for each temperature",
                            "Add 5 ml starch solution + 1 ml diluted saliva to each tube",
                            "IMMEDIATELY place each tube in its temperature bath",
                            "START stopwatch when tubes are placed in baths",
                            "Every 30 seconds, take ONE drop from EACH tube and add to a fresh iodine well",
                            "Observe colour: blue-black = starch present; yellow-brown = starch gone",
                            "Record time when each tube first gives a CONSISTENTLY yellow-brown result",
                            "Continue testing until all starch is digested or 15 minutes passes"
                        ],
                        controlExperiment: [
                            "Set up one tube at 37°C with starch + distilled water (no enzyme)",
                            "Test every 30 seconds for 15 minutes",
                            "Should remain blue-black throughout (no self-digestion of starch)"
                        ]
                    },
                    expectedResults: {
                        '0C': "Very slow or no digestion (enzyme molecules have very low kinetic energy)",
                        '20C': "Slow digestion (reduced molecular collision rate compared to 37°C)",
                        '37C': "Fastest digestion (optimal temperature - highest rate of enzyme-substrate collisions without denaturation)",
                        '50C': "Slower than 37°C (enzyme beginning to denature)",
                        '70C': "Very little activity (enzyme significantly denatured)",
                        '100C': "No activity (enzyme completely denatured; irreversible)",
                        control: "No colour change from blue-black (starch not digested without enzyme)"
                    },
                    dataTable: [
                        ["Temperature (°C)", "Time for complete digestion (s)", "Relative Rate", "Explanation"],
                        ["0", ">900 (incomplete)", "Very slow", "Low kinetic energy, near zero activity"],
                        ["20", "420", "Slow", "Sub-optimal; reduced collision frequency"],
                        ["37", "120", "Fastest", "Optimal temperature for salivary amylase"],
                        ["50", "300", "Slow", "Denaturation beginning, some activity remains"],
                        ["70", ">900 (incomplete)", "Very slow", "Enzyme largely denatured"],
                        ["100", "No digestion", "None", "Enzyme completely denatured"],
                        ["37 (control)", "No digestion", "None", "No enzyme - confirms enzyme required"]
                    ],
                    analysis: {
                        bellCurve: "Activity vs temperature forms a bell-shaped curve peaking at ~37°C",
                        lowTemp: "Low temperature: enzyme intact but slow (low kinetic energy; reduced collision rate)",
                        highTemp: [
                            "Above 50°C: hydrogen bonds and other weak interactions break",
                            "Active site loses 3D shape → substrate cannot bind",
                            "Denaturation is irreversible above 60-70°C",
                            "Enzyme protein coagulates (like cooking egg white)"
                        ],
                        Q10: "Q₁₀ (temperature coefficient) ≈ 2 per 10°C increase in optimal range",
                        bodyTemp: "37°C is optimal - explains why fever (40°C+) can impair digestion",
                        leuchs_connection: "Confirms Leuchs's 1831 observation: saliva digests starch - and shows temperature dependence"
                    },
                    conclusions: [
                        "Salivary amylase has an optimal temperature of approximately 37°C",
                        "Activity decreases at temperatures above and below optimum",
                        "High temperatures (>60°C) cause irreversible denaturation",
                        "Low temperatures reduce but do not destroy enzyme activity (reversible inhibition)",
                        "Body temperature is maintained at 37°C partly to optimise enzyme function"
                    ],
                    realWorldApplications: [
                        "Fever reduces digestive enzyme efficiency",
                        "Storing food cold (fridge/freezer) slows microbial enzyme activity",
                        "Cooking denatures pathogens' enzymes and our food's own enzymes",
                        "Industrial enzymes engineered for stability at high temperatures (thermozymes)"
                    ],
                    modernExtensions: [
                        "Use colorimeter (at 580 nm) for quantitative starch measurement",
                        "Plot reaction rate vs temperature graph; calculate Q₁₀",
                        "Compare salivary amylase to pancreatic amylase",
                        "Investigate pH effect simultaneously using buffer solutions"
                    ]
                }
            },

            // ============================================================
            // EXPERIMENT 3 - BILE EMULSIFICATION (Historical: Virchow/De Duve)
            // ============================================================

            virchow_bile_emulsification: {
                name: "Bile Salts and Fat Emulsification: The Role of Bile in Lipid Digestion",
                relatedTopics: ['liver_gallbladder', 'small_intestine', 'nutrient_absorption'],
                category: 'lipid_digestion',
                historicalBackground: {
                    scientist: "Rudolf Virchow & Claude Bernard",
                    years: "Bernard: 1849-1856",
                    discovery: "Pancreatic juice and bile in fat digestion",
                    bernardWork: "Bernard isolated pancreatic juice and proved it digested fats, starch, and proteins; showed bile was essential for fat digestion",
                    virchowWork: "Demonstrated bile's role in lipid metabolism; coined term 'chylomicron' concept",
                    context: "Before Bernard, fat digestion was poorly understood; bile was known but its specific function unknown",
                    contributions: [
                        "Demonstrated that fat digestion requires both pancreatic lipase AND bile",
                        "Showed emulsification by bile is mechanically necessary before lipase can act",
                        "Established concept that digestion requires coordinated secretions from multiple organs"
                    ],
                    significance: "Foundation for understanding lipid digestion and absorption; led to understanding of bile acid chemistry"
                },
                labExperiment: {
                    title: "Comparing Fat Digestion With and Without Bile Salts",
                    hypothesis: "If bile salts emulsify fats (increasing surface area for lipase action), then fat digestion will be faster in the presence of bile salts than in their absence",
                    purpose: "Demonstrate the role of bile salts in fat emulsification and the effect on lipase-mediated digestion rate",
                    background: {
                        bileRole: "Bile salts are amphipathic - emulsify fat globules into tiny droplets (1 micron), dramatically increasing surface area",
                        lipase: "Pancreatic lipase acts at oil-water interface; emulsification increases available surface area",
                        pHindicator: "Phenolphthalein turns colourless in acid; as fat is digested, fatty acids are released, pH drops, indicator turns colourless",
                        reaction: "Triglyceride + H₂O → monoglycerides + fatty acids (fatty acids lower pH)"
                    },
                    variables: {
                        independent: "Presence/absence of bile salts (and comparison of emulsifiers)",
                        dependent: "Rate of fat digestion (time for pH indicator colour change from pink to colourless)",
                        controlled: ["Lipase concentration", "Fat type and amount", "Temperature (37°C)", "Initial pH", "Volume"]
                    },
                    materials: [
                        "Cream (full-fat milk/double cream) OR vegetable oil",
                        "Pancreatic lipase solution (0.5% or commercial preparation)",
                        "Bile salts (sodium taurocholate or sodium deoxycholate, 1% solution)",
                        "Sodium bicarbonate (NaHCO₃, 1%) - to keep pH alkaline for lipase",
                        "Phenolphthalein indicator solution (1% in ethanol)",
                        "Sodium hydroxide (0.1M) - to make solution pink initially",
                        "Distilled water",
                        "Emulsifier comparison: dish soap (1%), lecithin solution (optional)",
                        "Test tubes (6-8)",
                        "Water bath at 37°C",
                        "Stopwatch",
                        "Pipettes",
                        "pH meter or universal indicator (for quantitative version)"
                    ],
                    safetyPrecautions: [
                        "Wear gloves when handling phenolphthalein (potential irritant in ethanol)",
                        "NaOH is caustic - handle carefully",
                        "Bile salts may irritate skin and mucous membranes",
                        "Hot water bath - use tongs"
                    ],
                    procedure: {
                        preparation: [
                            "Prepare reagents:",
                            "  - Lipase solution: dissolve 0.5g lipase in 100ml distilled water",
                            "  - Bile salt solution: dissolve 1g sodium taurocholate in 100ml distilled water",
                            "  - Sodium bicarbonate solution: dissolve 1g NaHCO₃ in 100ml distilled water",
                            "  - Indicator mixture: add few drops of phenolphthalein to sodium bicarbonate solution, then add 0.1M NaOH dropwise until solution turns PINK (pH ~8.5)",
                            "This pink solution will turn colourless as fatty acids are produced"
                        ],
                        mainProcedure: [
                            "Label test tubes: A (full setup), B (no bile), C (no lipase), D (no bile, no lipase - full control)",
                            "",
                            "Tube A - FULL EXPERIMENT (lipase + bile):",
                            "  5 ml cream/milk",
                            "  5 ml sodium bicarbonate/phenolphthalein solution (PINK)",
                            "  1 ml bile salt solution",
                            "  1 ml lipase solution",
                            "",
                            "Tube B - NO BILE (lipase only):",
                            "  5 ml cream/milk",
                            "  5 ml sodium bicarbonate/phenolphthalein solution (PINK)",
                            "  1 ml distilled water (replacing bile)",
                            "  1 ml lipase solution",
                            "",
                            "Tube C - NO LIPASE (bile only):",
                            "  5 ml cream/milk",
                            "  5 ml sodium bicarbonate/phenolphthalein solution (PINK)",
                            "  1 ml bile salt solution",
                            "  1 ml distilled water (replacing lipase)",
                            "",
                            "Tube D - CONTROL (no bile, no lipase):",
                            "  5 ml cream/milk",
                            "  5 ml sodium bicarbonate/phenolphthalein solution (PINK)",
                            "  1 ml distilled water",
                            "  1 ml distilled water",
                            "",
                            "ADDITIONAL OPTIONAL TUBES:",
                            "Tube E: Soap emulsifier instead of bile (same volume)",
                            "Tube F: Lecithin instead of bile (plant phospholipid emulsifier)",
                            "",
                            "Mix all tubes gently. Place in 37°C water bath.",
                            "START STOPWATCH. Observe and record every 2 minutes.",
                            "Record time when solution FIRST turns COLOURLESS (no longer pink)",
                            "Continue for 20 minutes maximum."
                        ]
                    },
                    expectedResults: {
                        tubeA: "FASTEST colour change (pink → colourless) - bile + lipase provides optimal conditions",
                        tubeB: "SLOWER colour change - lipase present but fat not emulsified (low surface area)",
                        tubeC: "NO colour change - bile emulsifies but cannot digest without lipase",
                        tubeD: "NO colour change - nothing to digest fat",
                        tubeE: "Moderate change (soap can emulsify but not as physiologically optimal)",
                        interpretation: "Confirms both emulsification AND enzymatic activity are required; emulsification accelerates digestion rate"
                    },
                    dataTable: [
                        ["Tube", "Contents", "Time to colour change (min)", "Final pH", "Conclusion"],
                        ["A", "Cream + Lipase + Bile salts", "~5-8", "~6.5", "Complete digestion - optimal"],
                        ["B", "Cream + Lipase (no bile)", "~12-15", "~7.0", "Slow digestion - reduced surface area"],
                        ["C", "Cream + Bile (no lipase)", "No change", "~8.5", "Emulsification only - no digestion"],
                        ["D", "Cream only", "No change", "~8.5", "No digestion possible"],
                        ["E", "Cream + Lipase + Soap", "~8-12", "~6.8", "Artificial emulsification - works but less optimal"]
                    ],
                    analysis: {
                        bileRole: "Bile salts emulsify fat into ~1 micron droplets, increasing surface area by ~1000x",
                        surfaceAreaCalculation: {
                            oneLargeDroplet: "1 mm droplet: surface area = 4πr² = 3.14 mm²",
                            millionSmallDroplets: "1000 droplets of 1 micron: total SA = 3.14 × 10⁻⁶ × 10⁶ = 3.14 mm² per micron",
                            conclusion: "Breaking 1mm droplet into 1000 × 1μm droplets = 1000x more surface area"
                        },
                        amphipathicNature: "Bile salts have hydrophobic face (faces fat) and hydrophilic face (faces water) - perfect for emulsification",
                        lipaseRequirement: "Bile without lipase = no digestion; lipase without bile = very slow digestion",
                        synergy: "Bile salts AND lipase are both required - demonstrates multi-organ coordination of digestion"
                    },
                    conclusions: [
                        "Fat digestion requires both bile salts (emulsification) and lipase (hydrolysis)",
                        "Bile salts alone do not digest fat - they only increase surface area",
                        "Lipase alone digests fat slowly - bile salts dramatically accelerate it",
                        "The combination of emulsification + enzyme action is highly efficient",
                        "Absence of bile (cholestasis) leads to fat malabsorption (steatorrhoea)"
                    ],
                    realWorldApplications: [
                        "Gallstones blocking bile duct → fat malabsorption, steatorrhoea",
                        "Cholecystectomy (gallbladder removal) → reduced bile storage → high-fat meals poorly tolerated",
                        "Orlistat (weight loss drug) inhibits lipase → fat not digested",
                        "Bile acid supplements for patients with bile acid malabsorption",
                        "Emulsification principle used in food technology and pharmaceutical delivery"
                    ],
                    modernExtensions: [
                        "Use pH meter for quantitative acid production over time",
                        "Plot rate curves: pH vs time for each condition",
                        "Microscopy to visualise fat droplet size before and after bile treatment",
                        "Test effect of temperature on emulsification",
                        "Quantify fatty acid production by titration (NaOH titration)"
                    ]
                }
            },

            // ============================================================
            // EXPERIMENT 4 - INTESTINAL ABSORPTION (Historical: Villi/Malpighi)
            // ============================================================

            malpighi_intestinal_absorption: {
                name: "Intestinal Surface Area and Absorption: Villus Structure",
                relatedTopics: ['small_intestine', 'nutrient_absorption'],
                category: 'absorption',
                historicalBackground: {
                    scientist: "Marcello Malpighi & William Beaumont",
                    years: "Malpighi: 1688; modern: 19th-20th century",
                    discovery: "Microscopic structure of intestinal villi",
                    malpighiWork: "First microscopist to describe intestinal villi and lacteal vessels in 1688 using early compound microscope",
                    laterWork: "William Prout (1824) proposed role of intestinal surface in absorption; Johannes Müller described villous structure in detail",
                    context: "Before microscopy, intestinal absorption was not understood at cellular level",
                    contributions: [
                        "Malpighi described villous structure and lacteals (first description of lymphatic absorption)",
                        "Demonstrated intestinal surface is not smooth but highly folded",
                        "Lacteals visible as white vessels after fatty meal - first evidence of fat absorption route"
                    ],
                    significance: "Understanding villi structure led to concept of surface area maximization for absorption"
                },
                labExperiment: {
                    title: "Surface Area Maximisation: Modelling and Measuring Intestinal Adaptations",
                    hypothesis: "The intestinal villi and microvilli dramatically increase the surface area available for absorption compared to a smooth-walled tube",
                    purpose: "Model and calculate the surface area increase provided by plicae circulares, villi, and microvilli; demonstrate why these adaptations are essential for adequate nutrient absorption",
                    background: {
                        smallIntestine: "~6-7 metres long; without adaptations, surface area ~0.33 m²",
                        plicaeCirculares: "Permanent folds of mucosa and submucosa - 3x increase",
                        villi: "~1mm finger-like projections - 10x additional increase",
                        microvilli: "0.1mm brush border - 20x additional increase",
                        total: "~600x amplification → ~200 m² (size of tennis court!)"
                    },
                    variables: {
                        independent: "Presence/absence of surface area adaptations (modelled)",
                        dependent: "Surface area (calculated or measured in model)",
                        controlled: "Length and diameter of intestinal tube model"
                    },
                    materials: [
                        "Paper or fabric (for making flat vs folded surface models)",
                        "Ruler and graph paper",
                        "Cylindrical containers (to model intestinal tube, different diameters)",
                        "Scissors",
                        "Tape measure",
                        "Calculator",
                        "Optional: intestinal tissue cross-sections (prepared microscope slides)",
                        "Optional: prepared slides of duodenum/ileum (if available)",
                        "Microscope (if slides available)",
                        "Modelling clay (to model villi)",
                        "String (to model folded vs unfolded surface)"
                    ],
                    procedure: {
                        part1_Mathematical: [
                            "PART 1: MATHEMATICAL MODELLING OF SURFACE AREA",
                            "",
                            "Step 1: Calculate surface area of smooth intestinal tube:",
                            "  Assume small intestine = 6.5m long, 2.5cm diameter",
                            "  Surface area (cylinder) = 2πrL = 2 × π × 0.0125 × 6.5",
                            "  SA = 0.51 m² (smooth tube)",
                            "",
                            "Step 2: Add plicae circulares (3x):",
                            "  SA with plicae = 0.51 × 3 = 1.53 m²",
                            "",
                            "Step 3: Add villi (10x):",
                            "  SA with villi = 1.53 × 10 = 15.3 m²",
                            "",
                            "Step 4: Add microvilli (20x):",
                            "  SA with microvilli = 15.3 × 20 = 306 m²",
                            "",
                            "Total amplification = 3 × 10 × 20 = 600x",
                            "Compare to tennis court (~260 m²) - intestine has MORE!"
                        ],
                        part2_PhysicalModel: [
                            "PART 2: PHYSICAL SURFACE AREA MODEL",
                            "",
                            "Making the model:",
                            "  Take a piece of paper 10cm × 10cm (representing flat surface)",
                            "  Calculate its surface area = 100 cm²",
                            "  Now FOLD the same paper into zig-zag/accordion folds",
                            "  Re-measure total surface area of folded surface",
                            "  Demonstrates how folding increases functional surface area",
                            "",
                            "Villus model:",
                            "  Take large flat sheet (A3) - represents unfolded intestinal wall",
                            "  Cut into 1cm strips, stand upright to represent villi",
                            "  Measure total surface area now",
                            "  Compare to original flat sheet"
                        ],
                        part3_Absorption_Simulation: [
                            "PART 3: ABSORPTION RATE SIMULATION",
                            "",
                            "Materials: Two identical cylinders (e.g., cardboard tubes)",
                            "Tube A: line inside with smooth paper (represents smooth intestine)",
                            "Tube B: line inside with crumpled paper or sponge (represents villi)",
                            "",
                            "Pour equal amounts of coloured water through each tube",
                            "Measure how much water is retained by each lining in 30 seconds",
                            "Tube B should retain significantly more",
                            "",
                            "Analogy: More surface area = more opportunity for absorption"
                        ],
                        part4_Microscopy: [
                            "PART 4: MICROSCOPY (if slides available)",
                            "",
                            "Examine prepared slides of:",
                            "  1. Duodenum cross-section (label: mucosa, submucosa, muscle layers)",
                            "  2. Villous structure (label: epithelium, lamina propria, lacteal, capillaries)",
                            "  3. Brush border (electron micrograph if available)",
                            "",
                            "Draw and annotate what you see",
                            "Estimate villous height and width under microscope",
                            "Count villi per mm² of mucosa (if possible)"
                        ]
                    },
                    expectedResults: {
                        mathematicalModel: "600x amplification calculated; dramatic surface area increase demonstrated",
                        physicalModel: "Folded surfaces clearly have more area than flat; visualises plicae and villi concept",
                        absorptionSimulation: "Sponge/crumpled paper tube absorbs much more than smooth-lined tube",
                        microscopy: "Clear villous structure visible; single cell layer of epithelium on each villus"
                    },
                    dataTable: [
                        ["Adaptation", "Multiplier", "Cumulative SA (m²)", "Real-world equivalent"],
                        ["No adaptations (smooth tube)", "1x", "0.51", "Bathtub (2m²... close!)"],
                        ["+ Plicae circulares", "3x", "1.53", "Two king-size beds"],
                        ["+ Villi", "10x", "15.3", "Two badminton courts"],
                        ["+ Microvilli", "20x", "306", "Larger than tennis court!"]
                    ],
                    analysis: {
                        whySurfaceArea: "Absorption rate depends on surface area (Fick's Law: Rate ∝ Area × concentration gradient / distance)",
                        fickLaw: "J = D × A × ΔC / Δx where J=flux, D=diffusion constant, A=area, ΔC=concentration difference, Δx=membrane thickness",
                        singleCellLayer: "Epithelium is only ONE cell thick (~10 μm) - minimises diffusion distance (Δx)",
                        combined: "Large area AND thin barrier = maximised absorption rate",
                        malpighi_connection: "Malpighi's microscopic villi now explained at function level - absorption surface"
                    },
                    conclusions: [
                        "Intestinal adaptations provide ~600x increase in surface area",
                        "Total functional surface area ~200-300 m² in healthy adult",
                        "Each adaptation contributes independently to surface area amplification",
                        "Large surface area with thin epithelium maximises absorption by Fick's Law",
                        "Loss of villi (coeliac disease) dramatically reduces absorptive capacity"
                    ],
                    realWorldApplications: [
                        "Coeliac disease: gluten damages villi → malabsorption → anaemia, diarrhoea",
                        "Short bowel syndrome: surgical removal reduces absorption area",
                        "Tropical sprue: infection flattens villi → malabsorption in tropics",
                        "Crohn's disease: inflammation damages intestinal architecture",
                        "Surface area concept applied to other organs: lung alveoli, renal tubules"
                    ],
                    modernExtensions: [
                        "Use ImageJ software to measure villous height from microscope images",
                        "Compare villous morphology in duodenum vs ileum",
                        "Model nutrient uptake using dialysis tubing as a membrane model",
                        "Investigate coeliac disease: compare normal vs coeliac villous histology images"
                    ]
                }
            },

            // ============================================================
            // EXPERIMENT 5 - GUT MOTILITY / PERISTALSIS (Historical: Bayliss & Starling)
            // ============================================================

            bayliss_starling_peristalsis: {
                name: "Peristalsis and the Enteric Nervous System: Bayliss and Starling's Law of the Intestine",
                relatedTopics: ['esophagus', 'small_intestine', 'digestive_hormones'],
                category: 'gut_motility',
                historicalBackground: {
                    scientist: "William Bayliss & Ernest Starling",
                    year: "1899-1902",
                    discovery: "The Law of the Intestine and discovery of secretin (first hormone)",
                    lawOfIntestine: "1899: Bayliss and Starling described the 'Law of the Intestine': pressure from food causes local contraction above and relaxation below - the basis of peristalsis",
                    secretinDiscovery: "1902: First hormone ever discovered; showed intestinal mucosa produces chemical messenger (secretin) stimulating pancreas - proof of hormonal signalling",
                    context: "Previously believed all gut movements were controlled purely by vagus nerve; showed intestine has intrinsic control",
                    contributions: [
                        "Demonstrated peristaltic reflex is intrinsic (works even when extrinsic nerves cut)",
                        "Named the 'enteric nervous system' as second nervous system of the gut",
                        "Discovery of secretin: founded endocrinology as a discipline",
                        "Starling coined the word 'hormone' in 1905"
                    ],
                    quote: "We may define hormones as chemical messengers which are carried from the organ where they are produced to the organ which they affect by means of the blood stream.",
                    significance: "Foundation of gut physiology, neurogastroenterology, and the entire field of endocrinology"
                },
                labExperiment: {
                    title: "Modelling Peristalsis and Observing Gut Motility",
                    hypothesis: "Peristalsis is a coordinated muscular reflex that propels food along the digestive tract by sequential contraction above and relaxation below the food bolus",
                    purpose: "Model peristaltic movement, investigate factors affecting gut motility, and demonstrate the enteric nervous system concept through simulation",
                    background: {
                        peristalsis: "Wave of contraction of circular muscle above bolus + relaxation below bolus",
                        entericNervousSystem: "500 million neurons in gut wall (more than spinal cord); intrinsic control",
                        regulation: "Modified by sympathetic (slows) and parasympathetic (accelerates) nervous systems",
                        clinical: "Abnormal peristalsis = constipation (too slow) or diarrhoea (too fast)"
                    },
                    variables: {
                        part1: "Physical model - observe peristaltic mechanics",
                        part2: "Observe effect of substances on gut motility (using model or video data)"
                    },
                    materials: [
                        "Rubber tubing (2-3 cm diameter, ~1 metre long) to model intestine",
                        "Marble or small sponge ball (to model food bolus)",
                        "Elastic bands or clamps",
                        "Bowl of water (food colouring added)",
                        "For motility experiment: Daphnia or simple invertebrate (to observe heartbeat/motility) - optional",
                        "Caffeine solution (coffee) - to simulate sympathetic/stimulatory effect",
                        "Ethanol solution (dilute, ~5%) - to simulate inhibitory effect",
                        "Video clips of intestinal peristalsis (from scientific databases)",
                        "Ruler, stopwatch",
                        "Optional: fresh animal intestine section (from butcher), saline solution, petri dish"
                    ],
                    procedure: {
                        part1_PhysicalModel: [
                            "PART 1: PHYSICAL PERISTALSIS MODEL",
                            "",
                            "Setup:",
                            "Insert marble into one end of rubber tubing",
                            "Hold tube horizontally",
                            "",
                            "Modelling peristalsis:",
                            "Pinch tube behind marble (models circular muscle contraction above bolus)",
                            "Release tube ahead of marble (models relaxation below bolus)",
                            "Move pinch sequentially along tube - this IS peristalsis",
                            "Measure time for marble to travel full length of tube",
                            "Calculate speed of movement (cm/second)",
                            "",
                            "Modelling segmentation:",
                            "Instead of one directional wave, pinch and release alternately",
                            "Observe that this mixes contents but does not propel them far",
                            "This models the mixing movements of the small intestine",
                            "",
                            "Modelling obstruction:",
                            "Insert a tight elastic band (models stricture/obstruction)",
                            "Try to perform peristalsis - marble cannot pass",
                            "Models clinical bowel obstruction"
                        ],
                        part2_MotilityFactors: [
                            "PART 2: FACTORS AFFECTING GUT MOTILITY (using Daphnia model)",
                            "",
                            "Daphnia (water flea) is a transparent crustacean whose heart and gut movements",
                            "can be observed live under low magnification.",
                            "",
                            "Setup:",
                            "Place Daphnia in drop of pond/tap water on microscope slide",
                            "Observe under low power microscope (40x)",
                            "Count heart beat rate and observe gut movement",
                            "Record baseline: beats/min and gut movement frequency",
                            "",
                            "Effect of caffeine (stimulant - models parasympathetic activation):",
                            "Replace water with caffeine solution (0.1%, 0.5%, 1%)",
                            "Count beats/min every minute for 5 minutes",
                            "Higher caffeine = increased heart rate + gut motility",
                            "",
                            "Effect of ethanol (depressant - models sympathetic activation effects):",
                            "Replace water with 5% ethanol solution",
                            "Observe and count changes",
                            "Ethanol reduces gut motility",
                            "",
                            "Recovery:",
                            "Return Daphnia to clean water",
                            "Observe recovery of normal motility"
                        ],
                        part3_VideoAnalysis: [
                            "PART 3: VIDEO ANALYSIS OF PERISTALSIS",
                            "",
                            "Watch provided video clips of:",
                            "  1. Normal peristalsis in small intestine (endoscopy footage)",
                            "  2. Segmentation movements",
                            "  3. Haustral contractions in large intestine",
                            "  4. Mass movements in colon",
                            "",
                            "For each: identify the type of movement, measure speed if possible",
                            "Compare normal vs abnormal motility patterns",
                            "",
                            "Draw and annotate diagrams of each movement type"
                        ],
                        part4_FreshTissue: [
                            "PART 4 (OPTIONAL): FRESH INTESTINAL TISSUE OBSERVATION",
                            "",
                            "Obtain fresh pig/cow small intestine section from butcher (~20cm)",
                            "Wash gently with warm saline (37°C)",
                            "Place in saline-filled petri dish at 37°C",
                            "Observe spontaneous contractions (may take 5-10 minutes to begin)",
                            "Add a drop of concentrated acetylcholine solution (if available) - watch for increased contractions",
                            "Add atropine solution - watch for relaxation (blocks acetylcholine)"
                        ]
                    },
                    expectedResults: {
                        physicalModel: "Marble propelled smoothly when sequential contraction-relaxation performed correctly",
                        daphnia: "Caffeine increases heart rate and gut movement; ethanol slows both",
                        videoAnalysis: "Clear distinction between peristalsis (propulsive), segmentation (mixing), and mass movements",
                        freshTissue: "Spontaneous rhythmic contractions visible in fresh tissue at 37°C"
                    },
                    dataTable: [
                        ["Condition", "Heart Rate (beats/min)", "Gut Movement (moves/min)", "Notes"],
                        ["Baseline (water)", "~180-200", "~15-20", "Normal for Daphnia"],
                        ["0.1% Caffeine", "~220-240", "~25-30", "Mild stimulation"],
                        ["0.5% Caffeine", "~260-280", "~35-40", "Moderate stimulation"],
                        ["1% Caffeine", "~300+", "~50+", "Strong stimulation"],
                        ["5% Ethanol", "~150-170", "~8-12", "Depression of activity"],
                        ["Recovery (water)", "~180-200", "~15-20", "Returns to baseline"]
                    ],
                    peristalsisSpeed: {
                        esophagus: "2-4 cm/second (8-20 seconds total)",
                        smallIntestine: "0.5-2 cm/second (3-5 hours total transit)",
                        largeIntestine: "Very slow (3 cm/hour for haustral); mass movements ~4x/day"
                    },
                    analysis: {
                        lawOfIntestine: {
                            above: "Distension triggers contraction of circular muscle (ascending excitatory reflex)",
                            below: "Simultaneous relaxation of circular muscle below (descending inhibitory reflex)",
                            neurotransmitters: "Above: ACh and substance P excite; Below: NO and VIP inhibit",
                            intrinsic: "Reflex occurs even if extrinsic nerves cut (Bayliss & Starling's key finding)"
                        },
                        entericNervousSystem: {
                            neurons: "~500 million enteric neurons",
                            plexuses: "Myenteric (Auerbach's) plexus: motor to muscle; Submucosal (Meissner's) plexus: secretion and absorption",
                            independence: "Can function without brain or spinal cord"
                        },
                        regulators: {
                            accelerate: "Parasympathetic (vagus/pelvic nerves), acetylcholine, caffeine",
                            slow: "Sympathetic, adrenaline, opioids (codeine causes constipation)",
                            hormones: "Motilin triggers MMC (house-keeping contractions between meals)"
                        }
                    },
                    conclusions: [
                        "Peristalsis is a coordinated reflex mediated by the enteric nervous system",
                        "The law of the intestine: contraction above + relaxation below propels content",
                        "Gut motility can be modulated by nervous system and chemicals",
                        "The enteric nervous system is intrinsic and can work independently of CNS",
                        "Stimulants increase motility; depressants reduce it"
                    ],
                    realWorldApplications: [
                        "Irritable bowel syndrome: abnormal gut motility patterns",
                        "Opioid-induced constipation: opioids reduce gut motility",
                        "Metoclopramide: prokinetic drug increasing gut motility",
                        "Achalasia: failure of lower oesophageal peristalsis",
                        "Hirschsprung's disease: absence of enteric neurons → no peristalsis in affected segment"
                    ],
                    modernExtensions: [
                        "Use intestinal organoids (mini-guts) to study motility in vitro",
                        "High-resolution manometry to measure pressure waves clinically",
                        "Study gut microbiome effects on motility",
                        "Model using CRISPR-modified organoids lacking specific neurons",
                        "Wireless capsule endoscopy data analysis"
                    ]
                }
            }
        };

        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.digestiveExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.digestiveTopics[topicId]) {
                    if (!this.digestiveTopics[topicId].relatedExperiments) {
                        this.digestiveTopics[topicId].relatedExperiments = [];
                    }
                    this.digestiveTopics[topicId].relatedExperiments.push({
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
            oral_cavity: {
                'Saliva and Digestion': [
                    'Believing saliva only makes food wet - it also contains enzymes (amylase)',
                    'Thinking digestion starts in the stomach - it begins in the mouth',
                    'Confusing physical chewing with complete digestion - mastication only breaks food into smaller pieces',
                    'Believing saliva is unimportant - it provides pH environment, lubrication, and antibacterial action',
                    'Thinking all salivary glands are the same - parotid (serous) vs sublingual (mucous) differ in secretion'
                ]
            },
            stomach: {
                'Gastric Function': [
                    'Thinking all digestion occurs in stomach - it is mainly for proteins; most absorption in small intestine',
                    'Believing stomach acid alone digests food - pepsin enzyme is the primary protein digestive agent',
                    'Confusing gastric acid with the stomach itself - stomach lining is protected by mucus barrier',
                    'Thinking all ulcers are caused by spicy food - H. pylori bacteria is the main cause of peptic ulcers',
                    'Believing stomach is small - can expand to hold 2-4 litres'
                ]
            },
            small_intestine: {
                'Absorption': [
                    'Thinking all fats go through portal vein - fats go via lymph (lacteals) then thoracic duct',
                    'Believing nutrients are absorbed into blood directly through the intestinal wall without processing',
                    'Confusing villi with microvilli - villi are large finger-like projections (~1mm); microvilli are tiny (0.1mm) on each cell',
                    'Thinking sucrose is absorbed directly - must be hydrolysed to glucose + fructose first',
                    'Believing the small intestine is small - it is 6-7 metres long (larger intestine refers to diameter not length)',
                    'Thinking all nutrients absorbed in the same region - iron/folate in duodenum, B12 in terminal ileum'
                ]
            },
            large_intestine: {
                'Colon Function': [
                    'Believing large intestine absorbs nutrients - mainly absorbs water and electrolytes',
                    'Thinking gut bacteria are harmful - most are beneficial and essential for health',
                    'Confusing fermentation with digestion - fermentation by bacteria produces SCFAs, not classic digestion',
                    'Believing fibre has no nutritional value - fermented by bacteria to SCFAs which feed colonocytes',
                    'Thinking the appendix is completely useless - may function as lymphoid tissue and microbiome reservoir'
                ]
            },
            liver_gallbladder: {
                'Bile Function': [
                    'Believing bile digests fat - bile emulsifies (physically breaks up) fat; lipase actually digests it',
                    'Thinking bile is produced by the gallbladder - bile is PRODUCED by the liver; gallbladder only STORES it',
                    'Confusing jaundice cause - can be pre-hepatic, hepatic, or post-hepatic; not just liver disease',
                    'Believing cholesterol is always harmful - essential for cell membranes, bile acids, and steroid hormones',
                    'Thinking bile is continuously secreted into duodenum - between meals it is stored and concentrated in gallbladder'
                ]
            },
            pancreas: {
                'Enzyme Activation': [
                    'Thinking pancreatic enzymes are active inside the pancreas - they are stored as inactive zymogens',
                    'Believing insulin is a digestive enzyme - insulin is an endocrine hormone regulating blood glucose',
                    'Confusing exocrine and endocrine pancreas - exocrine (99%) secretes enzymes; endocrine (1%) secretes hormones',
                    'Thinking pancreatitis is caused by excess enzyme production - actually caused by PREMATURE activation of zymogens',
                    'Believing pancreatic juice is acidic - it is alkaline (pH 7.5-8.8) to neutralise gastric acid'
                ]
            },
            digestive_enzymes: {
                'Enzyme Properties': [
                    'Thinking enzymes are used up during digestion - enzymes are catalysts that are recycled',
                    'Believing all digestive enzymes work at the same pH - each has a specific optimal pH range',
                    'Confusing denaturation with digestion - denaturation changes protein shape; digestion cleaves bonds',
                    'Thinking one enzyme can digest all food types - each enzyme is specific to a substrate',
                    'Believing higher enzyme concentration always means faster digestion - substrate becomes limiting factor'
                ]
            },
            digestive_hormones: {
                'Gut Hormones': [
                    'Thinking hormones only come from glands - gut is the largest endocrine organ',
                    'Confusing CCK with secretin - CCK stimulates enzymes and gallbladder; secretin stimulates bicarbonate',
                    'Believing gastrin is the only stomach hormone - many hormones regulate gastric function',
                    'Thinking GLP-1 only affects the gut - it also acts on brain, heart, and kidneys',
                    'Confusing incretin effect with direct insulin secretion - incretins amplify glucose-stimulated insulin release'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use anatomical diagrams to show structural relationships',
                effectiveness: 'High for distinguishing organ functions'
            },
            analogy: {
                method: 'Relate to everyday processes (assembly line, lock and key, etc.)',
                effectiveness: 'High for abstract physiological concepts'
            },
            clinical_case: {
                method: 'Use disease examples to illustrate normal function',
                effectiveness: 'Very high - abnormal highlights normal'
            },
            contrast_table: {
                method: 'Side-by-side comparison charts',
                effectiveness: 'High for related organs and processes'
            },
            chemical_equations: {
                method: 'Show enzymatic reactions and products',
                effectiveness: 'High for understanding biochemical digestion'
            },
            experimental_demonstration: {
                method: 'Link to historical and modern lab experiments',
                effectiveness: 'Very high for concrete understanding'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about how {topic} works?",
                "Have you noticed any symptoms that relate to {topic} in your own body?",
                "How does {topic} connect to what you learned about cell biology?",
                "What do you predict will be the most complex aspect of {topic}?"
            ],
            duringLearning: [
                "Can you trace the path of a piece of bread through the digestive system?",
                "How does the structure of {organ} relate to its specific function?",
                "Why would failure of {topic} cause specific health problems?",
                "Can you explain {concept} in your own words to someone without a biology background?"
            ],
            afterLearning: [
                "What were the main functions you learned about {topic}?",
                "What surprised you about {topic}?",
                "What connections can you make between {topic} and nutrition/health?",
                "How would you explain {topic} to a patient who asked you about it?",
                "What questions do you still have about {topic}?"
            ],
            problemSolving: [
                "Which organ(s) are most likely involved in this symptom?",
                "What enzyme or hormone deficiency could explain these findings?",
                "How would you test your hypothesis about this digestive problem?",
                "Does this clinical picture make sense given what you know about digestion?"
            ],
            clinicalReasoning: [
                "This patient cannot absorb fat-soluble vitamins - which part of the system is likely affected?",
                "If gastric acid is reduced, what downstream effects would you expect?",
                "What happens to protein digestion if the pancreas is inflamed and cannot secrete enzymes?",
                "Why does removing the terminal ileum cause vitamin B12 deficiency?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            oral_cavity: [
                {
                    scenario: "Dry Mouth (Xerostomia)",
                    context: "A patient on antihistamines reports difficulty swallowing and increased dental caries",
                    application: "Saliva lubricates food for swallowing; antibacterial agents (lysozyme, IgA) protect teeth; reduced saliva increases caries risk",
                    question: "Why does reduced saliva production lead to both swallowing difficulties and tooth decay?"
                },
                {
                    scenario: "Eating Starchy Foods",
                    context: "Chewing a cracker for 2 minutes - it starts to taste sweet",
                    application: "Salivary amylase breaks starch → maltose → glucose; glucose is sweet",
                    question: "Why does prolonged chewing of bread make it taste sweet?"
                }
            ],
            stomach: [
                {
                    scenario: "Proton Pump Inhibitor Therapy",
                    context: "A patient with gastric reflux is prescribed omeprazole",
                    application: "PPI blocks H⁺/K⁺ ATPase in parietal cells → less HCl → reduces heartburn but may impair protein digestion and B12 absorption",
                    question: "Why might long-term PPI use lead to vitamin B12 deficiency?"
                },
                {
                    scenario: "H. pylori Infection",
                    context: "Patient with peptic ulcer tests positive for H. pylori",
                    application: "H. pylori disrupts mucus barrier and raises gastric pH; acid damages unprotected mucosa",
                    question: "How does H. pylori cause ulcers despite living in an acidic environment?"
                }
            ],
            small_intestine: [
                {
                    scenario: "Coeliac Disease",
                    context: "Child with chronic diarrhoea, weight loss, and anaemia found to have flattened villi on biopsy",
                    application: "Gluten triggers immune attack on villi → loss of surface area → malabsorption of all nutrients including iron (anaemia)",
                    question: "Why does coeliac disease cause anaemia as well as diarrhoea?"
                },
                {
                    scenario: "Lactose Intolerance",
                    context: "Adult develops bloating and diarrhoea after drinking milk",
                    application: "Reduced lactase activity → lactose not digested → osmotic diarrhoea; colonic bacteria ferment lactose → gas",
                    question: "Why does lactose intolerance cause bloating specifically, not just diarrhoea?"
                }
            ],
            liver_gallbladder: [
                {
                    scenario: "Gallstone Obstruction",
                    context: "Patient with right upper quadrant pain after fatty meal; ultrasound shows gallstones",
                    application: "Fatty meal → CCK release → gallbladder contracts → stone blocks cystic duct → pain; bile cannot enter duodenum → fat malabsorption",
                    question: "Why does fat malabsorption from bile duct obstruction specifically cause deficiency of vitamins A, D, E, and K?"
                },
                {
                    scenario: "Liver Cirrhosis",
                    context: "Patient with chronic liver disease has jaundice, easy bruising, and fluid in abdomen",
                    application: "Liver makes clotting factors (bruising), albumin (fluid in abdomen from osmotic imbalance), and processes bilirubin (jaundice)",
                    question: "How does liver failure explain all three signs: jaundice, bruising, and fluid accumulation?"
                }
            ],
            pancreas: [
                {
                    scenario: "Acute Pancreatitis",
                    context: "Patient with severe abdominal pain radiating to back; raised serum lipase",
                    application: "Premature activation of trypsinogen inside pancreas → autodigestion → inflammation; lipase leaks into blood",
                    question: "Why is elevated serum lipase a diagnostic marker for pancreatitis?"
                },
                {
                    scenario: "Type 1 Diabetes",
                    context: "Young patient with weight loss, excessive thirst, and high blood glucose",
                    application: "Autoimmune destruction of β-cells → no insulin → glucose cannot enter cells → hyperglycaemia; cells starve despite high blood glucose",
                    question: "Why do cells 'starve' in type 1 diabetes despite very high blood glucose levels?"
                }
            ],
            digestive_hormones: [
                {
                    scenario: "GLP-1 Agonist Therapy",
                    context: "Obese patient with type 2 diabetes prescribed semaglutide (Ozempic); loses weight and blood glucose improves",
                    application: "GLP-1 stimulates insulin release, reduces glucagon, delays gastric emptying (feel full longer), acts on brain to reduce appetite",
                    question: "Why does semaglutide cause both blood glucose reduction AND significant weight loss?"
                },
                {
                    scenario: "Zollinger-Ellison Syndrome",
                    context: "Patient with multiple recurrent peptic ulcers unresponsive to normal treatment; very high gastric acid",
                    application: "Gastrinoma (tumour secreting gastrin) → constant stimulation of parietal cells → massive HCl production → ulcers throughout stomach and duodenum",
                    question: "Why does excess gastrin cause ulcers in the duodenum as well as the stomach?"
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall anatomical names, enzyme names, basic functions",
                    verbs: ["Name", "List", "Identify", "Label", "State"],
                    example: "Name the three regions of the small intestine"
                },
                understand: {
                    description: "Explain physiological processes and relationships",
                    verbs: ["Explain", "Describe", "Summarise", "Compare", "Outline"],
                    example: "Explain how bile salts facilitate fat digestion"
                },
                apply: {
                    description: "Apply digestive physiology to clinical or dietary scenarios",
                    verbs: ["Predict", "Apply", "Calculate", "Solve", "Demonstrate"],
                    example: "Predict which nutrients would be malabsorbed if the terminal ileum were removed"
                },
                analyze: {
                    description: "Analyse relationships between structure, function and disease",
                    verbs: ["Analyse", "Differentiate", "Relate", "Compare", "Contrast"],
                    example: "Analyse how the structural adaptations of the small intestine relate to its absorptive function"
                },
                evaluate: {
                    description: "Evaluate clinical and experimental evidence",
                    verbs: ["Evaluate", "Critique", "Justify", "Assess", "Judge"],
                    example: "Evaluate the evidence for the role of gut microbiome in metabolic disease"
                },
                create: {
                    description: "Design experiments or construct explanations for novel scenarios",
                    verbs: ["Design", "Construct", "Formulate", "Create", "Develop"],
                    example: "Design an experiment to test whether a new drug affects gastric acid secretion"
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: ["Memorises organ names and locations", "Knows enzymes by name only", "Cannot link structure to function"],
                    support: ["Use anatomical diagrams with labels", "Trace food through system step by step", "Use simple analogies"]
                },
                developing: {
                    characteristics: ["Links enzymes to their organs", "Understands basic pH requirements", "Begins to connect structure to function"],
                    support: ["Introduce clinical examples", "Challenge with 'what if' questions", "Introduce hormonal regulation"]
                },
                proficient: {
                    characteristics: ["Integrates multiple organs into complete digestive pathway", "Applies to novel clinical scenarios", "Understands hormonal coordination"],
                    support: ["Complex multi-organ scenarios", "Experimental design", "Research skills"]
                },
                expert: {
                    characteristics: ["Synthesises molecular, cellular, and organ-level understanding", "Evaluates clinical research", "Teaches others effectively"],
                    support: ["Primary literature", "Patient case studies", "Original research projects"]
                }
            }
        };

        this.assessmentQuestions = {
            oral_cavity: {
                remember: "Name the three pairs of salivary glands",
                understand: "Explain why salivary amylase cannot function in the stomach",
                apply: "Predict the consequences of complete loss of salivary gland function",
                analyze: "Compare the roles of teeth and salivary enzymes in oral digestion",
                evaluate: "Evaluate the importance of the oral cavity in overall digestive efficiency",
                create: "Design an experiment to measure the rate of starch digestion in saliva at different pH values"
            },
            stomach: {
                remember: "List the cell types found in gastric glands and their secretions",
                understand: "Explain how the stomach protects itself from its own acid",
                apply: "Predict what happens to protein digestion if a patient takes omeprazole",
                analyze: "Analyse the three phases of gastric secretion and their regulatory mechanisms",
                evaluate: "Evaluate the role of H. pylori in peptic ulcer disease using evidence",
                create: "Design an experiment to investigate the effect of pH on pepsin activity"
            },
            small_intestine: {
                remember: "Identify the brush border enzymes involved in carbohydrate digestion",
                understand: "Explain how the small intestine achieves its enormous surface area",
                apply: "Calculate the theoretical surface area of the small intestine with and without villi",
                analyze: "Analyse why fat-soluble vitamins take a different absorption route than water-soluble vitamins",
                evaluate: "Evaluate how coeliac disease illustrates the relationship between villous structure and absorption",
                create: "Design a model to demonstrate the effect of surface area on absorption rate"
            },
            liver_gallbladder: {
                remember: "State the composition of bile",
                understand: "Explain the mechanism and importance of enterohepatic circulation",
                apply: "Predict the consequences of gallbladder removal on fat digestion",
                analyze: "Analyse the three types of jaundice and their different mechanisms",
                evaluate: "Evaluate the multiple roles of the liver in supporting digestion and metabolism",
                create: "Design an experiment to demonstrate the role of bile salts in fat emulsification"
            },
            pancreas: {
                remember: "Name four pancreatic digestive enzymes and their substrates",
                understand: "Explain why pancreatic enzymes are stored as inactive zymogens",
                apply: "Trace the activation cascade from trypsinogen to active proteases",
                analyze: "Analyse the exocrine and endocrine functions of the pancreas and their coordination",
                evaluate: "Evaluate the consequences of acute pancreatitis in terms of zymogen activation",
                create: "Design an experiment to show that enterokinase is required for trypsin activation"
            }
        };
    }

    // ============================================================
    // HANDLER METHODS FOR EACH TOPIC
    // ============================================================

    handlePancreas(problem) {
        const content = {
            topic: "Pancreas: Exocrine and Endocrine Functions",
            category: 'accessory_organs',
            summary: "The pancreas is a dual-function organ. Its exocrine tissue (99%) produces 1.5L of alkaline juice daily containing the most powerful battery of digestive enzymes in the body. Its endocrine islets of Langerhans (1%) regulate blood glucose through insulin and glucagon. Understanding both functions is essential for grasping digestive physiology and metabolic disease.",
            
            anatomy: {
                location: "Retroperitoneal, posterior to stomach, between duodenum and spleen",
                dimensions: "~15-20cm long, 2-3cm thick, ~80g",
                regions: {
                    head: {
                        location: "Nestled within C-curve of duodenum",
                        features: "Uncinate process extends behind superior mesenteric vessels",
                        clinicalNote: "Cancer here obstructs common bile duct → painless jaundice"
                    },
                    neck: {
                        location: "Overlies portal vein and superior mesenteric vessels",
                        clinicalNote: "Thin; important surgical landmark"
                    },
                    body: {
                        location: "Crosses vertebral column (L1-L2)",
                        features: "Bulk of gland"
                    },
                    tail: {
                        location: "Extends to splenic hilum",
                        features: "Highest concentration of islets of Langerhans",
                        clinicalNote: "Splenectomy may injure tail"
                    }
                },
                bloodSupply: {
                    arterial: "Splenic artery, superior and inferior pancreaticoduodenal arteries",
                    venous: "Splenic vein, portal vein"
                },
                ducts: {
                    mainDuct: {
                        name: "Duct of Wirsung",
                        path: "Runs full length of pancreas → joins common bile duct → ampulla of Vater",
                        sphincter: "Sphincter of Oddi controls release into duodenum"
                    },
                    accessoryDuct: {
                        name: "Duct of Santorini",
                        path: "Drains upper head → minor duodenal papilla (present in ~70% of people)"
                    }
                }
            },

            exocrineFunction: {
                overview: "99% of pancreatic mass; acinar cells produce enzyme-rich juice; ductal cells produce bicarbonate-rich fluid",
                volume: "1.5-2 litres per day",
                pH: "7.5-8.8",
                purpose: "Neutralise gastric acid entering duodenum; provide complete enzyme complement for digestion",
                
                cellTypes: {
                    acinarCells: {
                        structure: "Pyramidal cells arranged in grape-like clusters (acini); extensive rough ER and Golgi for enzyme synthesis; zymogen granules at apical surface",
                        secretion: "Digestive enzymes (as zymogens or active forms)",
                        stimulation: "CCK and acetylcholine (vagus) trigger exocytosis of zymogen granules"
                    },
                    ductalCells: {
                        structure: "Line pancreatic ducts; contain carbonic anhydrase",
                        secretion: "Watery, bicarbonate-rich fluid",
                        stimulation: "Secretin binds CFTR-related channels → HCO₃⁻ secretion",
                        mechanism: [
                            "CO₂ + H₂O → H₂CO₃ (carbonic anhydrase)",
                            "H₂CO₃ → H⁺ + HCO₃⁻",
                            "HCO₃⁻ secreted into duct lumen via CFTR and Cl⁻/HCO₃⁻ exchanger",
                            "H⁺ exits basolaterally via Na⁺/H⁺ exchanger",
                            "Water follows osmotically"
                        ],
                        clinicalNote: "CFTR mutations (cystic fibrosis) → thick, viscous pancreatic secretions → ductal obstruction → pancreatic insufficiency"
                    }
                },

                enzymes: {
                    carbohydrases: {
                        pancreaticAmylase: {
                            form: "Secreted in active form (no activation required)",
                            substrate: "Starch and glycogen (α-1,4 glycosidic bonds)",
                            products: "Maltose, maltotriose, limit dextrins",
                            optimalPH: "6.7-7.2",
                            mechanism: "Endo-acting: cleaves internal α-1,4 bonds; cannot cleave α-1,6 branch points",
                            cofactor: "Requires Cl⁻ and Ca²⁺ for activity",
                            clinicalNote: "Serum amylase elevated in pancreatitis (but non-specific; also from salivary glands)"
                        }
                    },
                    proteases: {
                        trypsinogen: {
                            form: "Secreted as INACTIVE zymogen",
                            activation: "Enterokinase (brush border enzyme) cleaves 6-amino acid activation peptide → trypsin",
                            autoActivation: "Trypsin itself activates more trypsinogen (autocatalytic cascade)",
                            action: "Endopeptidase; cleaves peptide bonds on C-terminal side of Lys and Arg residues",
                            optimalPH: "7.5-8.0",
                            importance: "KEY activator - activates ALL other pancreatic zymogens",
                            clinicalNote: "Premature trypsin activation inside pancreas → acute pancreatitis"
                        },
                        chymotrypsinogen: {
                            form: "Inactive zymogen",
                            activation: "Trypsin cleaves → π-chymotrypsin → further cleavage → α-chymotrypsin (fully active)",
                            action: "Endopeptidase; cleaves at bulky hydrophobic residues: Phe, Tyr, Trp, Leu",
                            optimalPH: "7.5-8.0",
                            mechanism: "Serine protease; catalytic triad: Ser195, His57, Asp102"
                        },
                        proelastase: {
                            form: "Inactive zymogen",
                            activation: "Trypsin → elastase",
                            action: "Endopeptidase; cleaves at small neutral residues: Ala, Gly, Val, Ser",
                            substrate: "Elastin (connective tissue), collagen",
                            significance: "Digests structural proteins in meat"
                        },
                        procarboxypeptidaseA: {
                            form: "Inactive zymogen",
                            activation: "Trypsin → carboxypeptidase A",
                            action: "Exopeptidase; removes C-terminal amino acids with aromatic/aliphatic side chains",
                            type: "Metalloprotease (requires Zn²⁺)"
                        },
                        procarboxypeptidaseB: {
                            form: "Inactive zymogen",
                            activation: "Trypsin → carboxypeptidase B",
                            action: "Exopeptidase; removes C-terminal basic amino acids (Lys, Arg)",
                            type: "Metalloprotease"
                        }
                    },
                    lipases: {
                        pancreaticLipase: {
                            form: "Secreted in active form",
                            substrate: "Triglycerides at sn-1 and sn-3 positions",
                            products: "2-monoglycerides + 2 free fatty acids",
                            optimalPH: "7.0-8.0",
                            requirements: {
                                colipase: "Essential cofactor; pancreatic colipase displaces bile salts from fat droplet surface, allowing lipase to bind",
                                bileSalts: "Emulsify fat into small droplets; increase surface area",
                                calcium: "Binds free fatty acids preventing product inhibition"
                            },
                            mechanism: [
                                "Colipase secreted as pro-colipase → trypsin activates to colipase",
                                "Colipase anchors lipase to oil-water interface",
                                "Lipase hydrolyses ester bonds at sn-1 and sn-3 positions",
                                "2-Monoglyceride product released; partitions into micelles"
                            ],
                            clinicalNote: "Orlistat irreversibly inhibits pancreatic lipase → 30% reduction in fat absorption → weight loss drug"
                        },
                        phospholipaseA2: {
                            form: "Secreted as pro-phospholipase A2",
                            activation: "Trypsin cleaves → active phospholipase A2",
                            substrate: "Phospholipids (cleaves sn-2 ester bond)",
                            products: "Lysophospholipid + fatty acid",
                            requirement: "Bile salts and Ca²⁺ required for activity"
                        },
                        cholesterolEsterase: {
                            form: "Active form",
                            substrate: "Cholesterol esters, fat-soluble vitamins esters",
                            products: "Free cholesterol + fatty acid",
                            requirement: "Bile salts required for activity"
                        }
                    },
                    nucleases: {
                        deoxyribonuclease: {
                            substrate: "DNA",
                            products: "Oligodeoxyribonucleotides",
                            form: "Active"
                        },
                        ribonuclease: {
                            substrate: "RNA",
                            products: "Oligoribonucleotides",
                            form: "Active"
                        }
                    }
                },

                zymogenActivationCascade: {
                    overview: "Critical safety mechanism preventing premature autodigestion of pancreas",
                    normalSequence: [
                        "Step 1: Fat/protein in duodenum → I-cells release CCK",
                        "Step 2: CCK binds acinar cell receptors → exocytosis of zymogen granules into duct",
                        "Step 3: Zymogens travel down pancreatic duct → enter duodenum via ampulla of Vater",
                        "Step 4: Enterokinase (brush border of duodenum) cleaves trypsinogen → trypsin",
                        "Step 5: Trypsin activates all other zymogens: chymotrypsinogen, proelastase, procarboxypeptidase, pro-colipase, pro-phospholipase A2",
                        "Step 6: Active enzymes digest food macromolecules"
                    ],
                    protectionMechanisms: [
                        "SPINK1 (pancreatic secretory trypsin inhibitor): inhibits any trypsin activated prematurely within pancreas",
                        "Zymogens and lysosomal enzymes stored in separate compartments within acinar cells",
                        "Pancreatic juice alkalinity prevents acid-mediated activation",
                        "Trypsin undergoes autolysis at high concentrations (self-regulation)",
                        "Mucus lining of ducts provides barrier"
                    ],
                    pancreatitis: {
                        mechanism: "SPINK1 overwhelmed or ductal obstruction → premature trypsin activation → autodigestion",
                        causes: ["Gallstones (obstruct ampulla of Vater)", "Chronic alcohol (increases zymogen activation)", "Hypertriglyceridaemia", "ERCP procedure", "Genetic mutations (PRSS1, SPINK1, CFTR)"],
                        features: "Severe epigastric pain radiating to back; elevated serum lipase and amylase",
                        severity: "Ranges from mild self-limiting to life-threatening necrotising pancreatitis"
                    }
                },

                regulation: {
                    hormonalStimulation: {
                        CCK: {
                            source: "I-cells in duodenum and jejunum",
                            stimulus: "Fat and protein (amino acids) in duodenum",
                            action: "Stimulates acinar cells → enzyme-rich pancreatic juice; also stimulates gallbladder contraction",
                            receptor: "CCKA receptor on acinar cells",
                            secondMessenger: "IP3/Ca²⁺ pathway → exocytosis of zymogen granules"
                        },
                        secretin: {
                            source: "S-cells in duodenal mucosa",
                            stimulus: "Acid (pH <4.5) in duodenum",
                            action: "Stimulates ductal cells → bicarbonate-rich fluid; potentiates CCK effect on enzymes",
                            receptor: "Secretin receptor on ductal cells",
                            secondMessenger: "cAMP → PKA → CFTR activation → HCO₃⁻ secretion"
                        }
                    },
                    neuralStimulation: {
                        vagusNerve: "Acetylcholine → muscarinic M3 receptors → IP3/Ca²⁺ → enzyme secretion (cephalic and gastric phases)",
                        peptidergic: "VIP, GRP (gastrin-releasing peptide) modulate secretion"
                    },
                    inhibition: {
                        somatostatin: "From D-cells; inhibits both acinar and ductal secretion; inhibits CCK and secretin release",
                        pancreastaticin: "Peptide from pancreas; autocrine inhibition",
                        feedbackInhibition: "Active proteases in duodenum digest CCK-releasing peptide → reduce CCK release → reduce enzyme secretion"
                    }
                }
            },

            endocrineFunction: {
                overview: "Islets of Langerhans: 1-2% of pancreatic mass; ~1 million islets scattered throughout gland; each islet is 50-300 microns diameter",
                cellTypes: {
                    betaCells: {
                        proportion: "65-80% of islet cells",
                        location: "Central core of islet",
                        secretion: "Insulin (and C-peptide, amylin)",
                        stimulus: "Elevated blood glucose (>5 mmol/L), amino acids, incretins (GLP-1, GIP), vagal stimulation",
                        mechanism: [
                            "Glucose enters β-cell via GLUT2 transporter",
                            "Glucokinase phosphorylates glucose → glucose-6-phosphate",
                            "Glycolysis + oxidative phosphorylation → ↑ ATP:ADP ratio",
                            "ATP closes KATP channels → membrane depolarisation",
                            "Voltage-gated Ca²⁺ channels open → Ca²⁺ influx",
                            "Ca²⁺ triggers exocytosis of insulin granules"
                        ],
                        insulinStructure: "51 amino acid peptide; A-chain (21 aa) + B-chain (30 aa) connected by disulfide bonds; cleaved from proinsulin",
                        insulinActions: {
                            liver: ["↑ Glycogen synthesis (glycogenesis)", "↓ Glycogenolysis", "↓ Gluconeogenesis", "↑ Fatty acid synthesis", "↑ Protein synthesis"],
                            muscle: ["↑ Glucose uptake (GLUT4 insertion)", "↑ Glycogen synthesis", "↑ Protein synthesis", "↓ Proteolysis"],
                            adipose: ["↑ Glucose uptake (GLUT4)", "↑ Fatty acid storage (lipogenesis)", "↓ Lipolysis (inhibits hormone-sensitive lipase)"],
                            other: ["↑ Cell growth and division", "↑ K⁺ uptake (drives K⁺ into cells)"]
                        },
                        signalling: "Insulin binds tyrosine kinase receptor → autophosphorylation → IRS-1/2 → PI3K → Akt → GLUT4 translocation"
                    },
                    alphaCells: {
                        proportion: "15-20% of islet cells",
                        location: "Peripheral mantle of islet",
                        secretion: "Glucagon",
                        stimulus: "Low blood glucose (<4.5 mmol/L), amino acids (especially alanine and arginine), sympathetic stimulation, cortisol",
                        inhibition: "Insulin (paracrine), somatostatin, high glucose",
                        glucagonActions: {
                            liver: ["↑ Glycogenolysis → glucose release", "↑ Gluconeogenesis (from amino acids, lactate, glycerol)", "↑ Fatty acid oxidation → ketone bodies"],
                            adipose: ["↑ Lipolysis → free fatty acids to liver for ketogenesis"],
                            mechanism: "Glucagon → Gs-coupled receptor → cAMP → PKA → phosphorylates glycogen phosphorylase (activates) and glycogen synthase (inactivates)"
                        }
                    },
                    deltaCells: {
                        proportion: "3-10% of islet cells",
                        secretion: "Somatostatin (SST)",
                        actions: ["Inhibits insulin secretion (paracrine)", "Inhibits glucagon secretion (paracrine)", "Inhibits GH, TSH, gastrin, secretin, CCK", "Slows gastric emptying"],
                        clinicalUse: "Octreotide (somatostatin analogue) treats acromegaly, VIPoma, glucagonoma, carcinoid"
                    },
                    ppCells: {
                        proportion: "~1%",
                        secretion: "Pancreatic polypeptide (PP)",
                        actions: "Inhibits exocrine pancreatic secretion; reduces appetite; delays gastric emptying"
                    }
                },

                bloodGlucoseRegulation: {
                    postMealResponse: {
                        timeline: [
                            "0-5 min: Blood glucose rises; early insulin release (first phase: pre-formed insulin granules)",
                            "5-30 min: Peak blood glucose; peak insulin; GLUT4 translocated in muscle and fat",
                            "30-120 min: Blood glucose falls as glucose taken up by tissues; sustained insulin (second phase: newly synthesised)",
                            "2-4 hours: Blood glucose returns to normal; insulin falls; glucagon rises slightly"
                        ],
                        hormones: "Insulin dominant; GLP-1 amplifies insulin secretion (incretin effect)"
                    },
                    fastingResponse: {
                        timeline: [
                            "3-4 hours after meal: Blood glucose begins to fall",
                            "4-6 hours: Glucagon rises; liver glycogenolysis begins",
                            "6-24 hours: Glycogen depleted; gluconeogenesis from amino acids and glycerol",
                            ">24 hours: Fatty acid oxidation; ketone body production (acetoacetate, β-hydroxybutyrate)"
                        ],
                        hormones: "Glucagon, cortisol, adrenaline, GH (all counter-regulatory)"
                    },
                    diabetesMellitus: {
                        type1: {
                            mechanism: "Autoimmune destruction of β-cells (T-cell mediated); HLA-DR3/DR4 association",
                            onset: "Usually <30 years; acute presentation",
                            features: "Absolute insulin deficiency; hyperglycaemia; DKA (diabetic ketoacidosis)",
                            DKA: "No insulin → unrestrained lipolysis → fatty acids → ketone bodies → metabolic acidosis → coma",
                            treatment: "Insulin replacement (multiple daily injections or pump)"
                        },
                        type2: {
                            mechanism: "Insulin resistance (reduced GLUT4 response) + progressive β-cell failure",
                            onset: "Usually >40 years; insidious",
                            riskFactors: "Obesity (especially central), inactivity, family history, ethnicity",
                            progression: "Compensatory hyperinsulinaemia → β-cell exhaustion → insulin deficiency",
                            treatment: "Lifestyle modification, metformin, GLP-1 agonists, SGLT2 inhibitors, insulin"
                        },
                        gestationalDiabetes: {
                            mechanism: "Pregnancy hormones cause insulin resistance; insufficient β-cell compensation",
                            risks: "Macrosomia, neonatal hypoglycaemia, increased T2DM risk"
                        }
                    }
                },

                clinicalConditions: {
                    acutePancreatitis: {
                        mechanism: "Premature zymogen activation → autodigestion",
                        biomarkers: "Serum lipase >3x upper limit (more specific than amylase)",
                        severity: "Ranson criteria, APACHE II, CT severity index",
                        treatment: "IV fluids, analgesia, nutritional support (enteral preferred)"
                    },
                    chronicPancreatitis: {
                        cause: "Chronic alcohol most common; recurrent acute attacks; genetic",
                        features: "Exocrine insufficiency → steatorrhoea; endocrine insufficiency → diabetes",
                        treatment: "Pancreatic enzyme replacement (Creon), fat-soluble vitamin supplementation"
                    },
                    pancreaticCancer: {
                        type: "Pancreatic ductal adenocarcinoma (95%)",
                        prognosis: "5-year survival <10%; late presentation",
                        symptoms: "Painless jaundice (head cancer obstructs CBD), weight loss, new-onset diabetes",
                        marker: "CA19-9 tumour marker; CT/MRCP imaging"
                    },
                    insulinoma: {
                        definition: "Insulin-secreting β-cell tumour",
                        features: "Hypoglycaemia especially fasting; Whipple's triad",
                        treatment: "Surgical resection"
                    },
                    glucagonoma: {
                        definition: "Glucagon-secreting α-cell tumour",
                        features: "Necrolytic migratory erythema, diabetes, weight loss, anaemia",
                        treatment: "Octreotide, surgery"
                    }
                },

                examples: [
                    {
                        name: "Carbohydrate-rich meal",
                        explanation: "Pasta meal → blood glucose rises → β-cells secrete insulin → glucose stored as glycogen in liver and muscle; fat stored in adipose"
                    },
                    {
                        name: "Marathon running",
                        explanation: "Prolonged exercise → blood glucose falls → glucagon secretion → glycogenolysis + gluconeogenesis → maintain blood glucose for brain"
                    },
                    {
                        name: "Cystic fibrosis pancreatic insufficiency",
                        explanation: "CFTR mutation → viscous duct secretions → duct obstruction → enzyme back-pressure → acinar cell destruction → enzyme deficiency → malabsorption"
                    }
                ],

                applications: [
                    "Type 1 and Type 2 diabetes mellitus management",
                    "Pancreatic enzyme replacement therapy (PERT)",
                    "GLP-1 receptor agonists and SGLT2 inhibitors in T2DM",
                    "Bariatric surgery and remission of T2DM",
                    "Artificial pancreas (closed-loop insulin delivery system)",
                    "Islet cell transplantation for T1DM",
                    "Pancreatic cancer screening and treatment"
                ]
            }
        };
        return content;
    }

    handleDigestiveEnzymes(problem) {
        const content = {
            topic: "Digestive Enzymes: Mechanisms, Specificity and Regulation",
            category: 'biochemistry',
            summary: "Digestive enzymes are hydrolases that break covalent bonds in macromolecules by adding water. They are produced at multiple sites along the alimentary canal, each with specific pH optima matching their environment. Most proteases and some lipases are secreted as inactive zymogens to prevent autodigestion.",
            
            enzymeKinetics: {
                michaelisMenten: {
                    equation: "v = (Vmax × [S]) / (Km + [S])",
                    Km: "Substrate concentration at half-maximum velocity; measure of enzyme-substrate affinity (lower Km = higher affinity)",
                    Vmax: "Maximum reaction velocity when enzyme fully saturated with substrate",
                    kcat: "Turnover number; number of substrate molecules converted per enzyme per second",
                    catalyticEfficiency: "kcat/Km; measure of how efficiently enzyme converts substrate",
                    lineweaerBurk: "1/v vs 1/[S] plot; used to determine Km and Vmax graphically"
                },
                pHEffects: {
                    mechanism: "pH affects ionisation state of active site amino acids (especially His, Asp, Glu, Cys, Lys)",
                    denaturation: "Extreme pH (very acid or alkaline) disrupts hydrogen bonds and ionic interactions → protein unfolds → loss of active site shape",
                    bellCurve: "pH-activity curve is bell-shaped; optimal pH = highest activity without denaturation",
                    examples: {
                        pepsin: "Optimum pH 1.5-2.5; Asp residues in active site protonated at low pH",
                        salivaryAmylase: "Optimum pH 6.7-7.0",
                        pancreaticTrypsin: "Optimum pH 7.5-8.0; His57 in catalytic triad must be unprotonated",
                        brushBorder: "Optimum pH 6.0-7.0; intestinal pH 6.5-7.5"
                    }
                },
                temperatureEffects: {
                    belowOptimum: "Reduced molecular kinetic energy → fewer productive collisions → lower rate",
                    atOptimum: "Maximum activity (37°C for most human enzymes)",
                    aboveOptimum: "Thermal energy breaks hydrogen bonds, hydrophobic interactions → denaturation → activity lost",
                    Q10: "For every 10°C rise in optimal range, rate approximately doubles (Q10 ≈ 2)",
                    irreversibility: "Denaturation above ~60°C generally irreversible (protein aggregation)"
                },
                inhibition: {
                    competitive: {
                        mechanism: "Inhibitor resembles substrate; competes for active site; reversible",
                        effect: "↑ Km (apparent); Vmax unchanged",
                        overcome: "Can overcome by increasing substrate concentration",
                        examples: "Methotrexate inhibits DHFR; statins inhibit HMG-CoA reductase"
                    },
                    nonCompetitive: {
                        mechanism: "Inhibitor binds allosteric site; changes active site shape; enzyme-substrate still forms but no catalysis",
                        effect: "↓ Vmax; Km unchanged",
                        examples: "Heavy metal ions (Pb, Hg) inhibit many enzymes"
                    },
                    uncompetitive: {
                        mechanism: "Inhibitor only binds enzyme-substrate complex",
                        effect: "↓ Vmax; ↓ Km (apparent)",
                        examples: "Some herbicides; lithium inhibits inositol phosphatase"
                    },
                    irreversible: {
                        mechanism: "Forms covalent bond with active site; permanent inactivation",
                        examples: "Organophosphates inhibit acetylcholinesterase; aspirin acetylates COX; orlistat inhibits lipase",
                        recovery: "Requires new enzyme synthesis"
                    },
                    allosteric: {
                        mechanism: "Regulatory molecule binds non-active site; changes enzyme conformation → changes activity",
                        positive: "Allosteric activators increase activity (e.g., AMP activates phosphofructokinase)",
                        negative: "Allosteric inhibitors decrease activity (feedback inhibition)"
                    }
                }
            },

            completeEnzymeReference: {
                mouthPhase: {
                    salivaryAlphaAmylase: {
                        secretedBy: "Parotid, submandibular glands",
                        geneProduct: "AMY1A gene; identical structure to pancreatic amylase",
                        substrate: "Starch (amylose: linear chains; amylopectin: branched)",
                        bonds: "Hydrolyses α-1,4 glycosidic bonds ONLY; cannot cleave α-1,6 branch points",
                        products: "Maltose (disaccharide), maltotriose (trisaccharide), limit dextrins",
                        optimalPH: "6.7-7.0",
                        optimalTemp: "37°C",
                        cofactors: "Cl⁻ (activator), Ca²⁺ (stabiliser)",
                        inactivation: "Gastric acid (pH <4) denatures enzyme; some activity may continue inside food bolus",
                        percentDigested: "~5% of dietary starch digested in mouth",
                        mechanism: "Retaining mechanism; forms covalent glucosyl-enzyme intermediate",
                        medicalNote: "Copy number variation at AMY1 locus correlates with adaptation to high-starch diets"
                    },
                    lingualLipase: {
                        secretedBy: "Glands of von Ebner on tongue (serous glands around circumvallate papillae)",
                        substrate: "Short and medium-chain triglycerides (C4-C12)",
                        bonds: "Hydrolyses sn-3 ester bond of triglycerides",
                        products: "Diglycerides + free fatty acids",
                        optimalPH: "3.5-6.0 (survives gastric acid; active in stomach)",
                        significance: "Important in infants for digesting breast milk (medium-chain fatty acids)",
                        percentDigested: "~10-30% of lipid digestion in infants; less in adults"
                    }
                },

                stomachPhase: {
                    pepsin: {
                        precursor: "Pepsinogen (inactive; secreted by chief cells in gastric glands)",
                        activation: {
                            byHCl: "HCl (pH <5) cleaves activation peptide from pepsinogen N-terminus → pepsin (autocatalytic below pH 5)",
                            autocatalytic: "Active pepsin cleaves more pepsinogen molecules (positive feedback)",
                            pHDependence: "Activation requires pH <5; fully activated at pH 1.5-2.5"
                        },
                        classification: "Aspartic protease (contains two Asp residues in active site: Asp32 and Asp215)",
                        substrate: "Denatured proteins; prefers aromatic residues (Phe, Tyr, Trp) and Leu on N-terminal side of cleavage",
                        mechanism: "Acid-catalysed hydrolysis via activation of water molecule by Asp residues; general acid-base catalysis",
                        products: "Large polypeptides; some peptides and amino acids (10-15% of protein digestion here)",
                        optimalPH: "1.5-2.5 (narrow range)",
                        inactivation: "Irreversibly inactivated at pH >5 (alkaline duodenum; pancreatic juice)",
                        isoforms: "Pepsin A (most abundant), Pepsin B, Pepsin C (gastricsin); different substrate specificities",
                        clinicalNote: "Peptic ulcer: H. pylori impairs mucus barrier; NSAID inhibits prostaglandin synthesis (reduces mucus); pepsin attacks exposed mucosa"
                    },
                    gastricLipase: {
                        secretedBy: "Chief cells of gastric glands",
                        substrate: "Short and medium-chain triglycerides; sn-3 position",
                        optimalPH: "3.0-6.0 (acid stable)",
                        percentDigested: "~10-15% of dietary fat",
                        significance: "Important backup when pancreatic lipase deficient; active in premature infants (pancreas immature)",
                        mechanism: "Serine hydrolase (different from pancreatic lipase); can act on emulsified and non-emulsified fat"
                    }
                },

                smallIntestinePhase: {
                    pancreaticPhase: {
                        trypsin: {
                            precursor: "Trypsinogen",
                            activationEnzyme: "Enterokinase (enteropeptidase) - brush border of duodenum",
                            activationMechanism: "Enterokinase cleaves Lys6-Ile7 bond → removes 6-aa activation peptide → conformational change → active site formed",
                            classification: "Serine protease (catalytic triad: Ser195, His57, Asp102)",
                            substrate: "Proteins and polypeptides; cleaves C-terminal side of Lys and Arg (basic residues)",
                            products: "Smaller peptides",
                            optimalPH: "7.5-8.5",
                            centralRole: "Master activator: activates chymotrypsinogen, proelastase, procarboxypeptidases, pro-colipase, pro-phospholipase A2",
                            inhibitor: "SPINK1 (endogenous); SBTI (soybean trypsin inhibitor - antinutrient in raw legumes)",
                            clinicalNote: "Measurement of faecal elastase tests exocrine pancreatic function"
                        },
                        chymotrypsin: {
                            precursor: "Chymotrypsinogen",
                            activation: "Trypsin cleaves Arg15-Ile16 bond → π-chymotrypsin; autolysis → α-chymotrypsin",
                            classification: "Serine protease; same catalytic triad as trypsin but different substrate binding pocket",
                            substrate: "Proteins; cleaves C-terminal side of bulky hydrophobic residues: Phe, Tyr, Trp, Leu",
                            mechanism: "Acylation (substrate forms covalent acyl-enzyme via Ser195) → deacylation (water attacks acyl-enzyme)",
                            optimalPH: "7.5-8.5",
                            specificity: "Hydrophobic substrate binding pocket complements bulky aromatic side chains"
                        },
                        elastase: {
                            precursor: "Proelastase",
                            activation: "Trypsin",
                            substrate: "Elastin (connective tissue protein); small neutral amino acids: Ala, Gly, Val, Ser, Thr",
                            significance: "Digests connective tissue in meat; specifically breaks down elastin",
                            clinicalNote: "Faecal elastase 1 is reliable marker of exocrine pancreatic insufficiency"
                        },
                        carboxypeptidaseA: {
                            precursor: "Procarboxypeptidase A",
                            activation: "Trypsin",
                            classification: "Metalloexopeptidase (Zn²⁺ in active site)",
                            substrate: "C-terminal aromatic and aliphatic amino acids (Phe, Tyr, Leu, Ile, Val)",
                            action: "Removes one amino acid at a time from C-terminus",
                            products: "Free amino acids + shorter peptide"
                        },
                        carboxypeptidaseB: {
                            precursor: "Procarboxypeptidase B",
                            activation: "Trypsin",
                            classification: "Metalloexopeptidase (Zn²⁺)",
                            substrate: "C-terminal basic residues (Lys, Arg)",
                            action: "Exopeptidase; removes C-terminal basic amino acids",
                            complementarity: "A and B together cover most C-terminal residues"
                        },
                        pancreaticLipaseColipase: {
                            substrate: "Triglycerides (triacylglycerols)",
                            positions: "Hydrolyses sn-1 and sn-3 ester bonds (stereospecific)",
                            products: "sn-2 monoglyceride + 2 fatty acids",
                            requirements: "Colipase (displaces bile salts from lipid surface to allow lipase binding); bile salts; Ca²⁺",
                            mechanism: [
                                "Bile salts emulsify TG into ~1 micron droplets",
                                "Colipase (activated by trypsin) adsorbs to fat droplet surface",
                                "Pancreatic lipase binds colipase at oil-water interface",
                                "Lipase hydrolyses sn-1 and sn-3 ester bonds",
                                "Products (2-MAG + FA) partition into mixed micelles"
                            ],
                            percentDigested: "~80-85% of dietary fat",
                            drugTarget: "Orlistat (Xenical) forms irreversible covalent bond with Ser152 in active site; reduces fat absorption ~30%"
                        }
                    },
                    brushBorderPhase: {
                        overview: "Final digestion at brush border membrane of enterocytes; converts oligomers to monomers",
                        sucrase_isomaltase: {
                            substrate: "Sucrose (sucrase activity); limit dextrins (isomaltase activity - α-1,6 bonds)",
                            products: "Glucose + Fructose (from sucrose); glucose (from dextrins)",
                            deficiency: "Sucrase-isomaltase deficiency → osmotic diarrhoea with sucrose/starch ingestion",
                            location: "Highly expressed in jejunum"
                        },
                        maltase_glucoamylase: {
                            substrate: "Maltose, maltotriose, and short oligosaccharides (α-1,4 bonds)",
                            products: "Glucose",
                            note: "Most abundant brush border enzyme; responsible for bulk of starch final digestion"
                        },
                        lactase: {
                            substrate: "Lactose (β-1,4 galactosidic bond)",
                            products: "Glucose + Galactose",
                            expression: "Highest in jejunum; declines after weaning in most mammals",
                            lactasePersistence: "Genetic variant (MCM6 gene enhancer); maintains lactase expression into adulthood",
                            lactoseIntolerance: "Reduced lactase → undigested lactose → osmotic diarrhoea + fermentation → bloating, gas",
                            prevalence: "~65% global adult prevalence; lower in Northern European descent (~25%)"
                        },
                        enterokinase: {
                            substrate: "Trypsinogen (cleaves Lys6-Ile7 activation peptide)",
                            location: "Duodenal brush border",
                            importance: "Rate-limiting step in activation of all pancreatic protease cascade",
                            deficiency: "Enterokinase deficiency → failure to activate trypsin → severe protein malabsorption in infancy"
                        },
                        aminopeptidase: {
                            substrate: "N-terminal amino acids from oligopeptides",
                            action: "Exopeptidase; cleaves one amino acid at a time from N-terminus",
                            products: "Amino acids + shorter peptides",
                            location: "Brush border; also in cytoplasm of enterocytes"
                        },
                        dipeptidase: {
                            substrate: "Dipeptides",
                            action: "Cleaves dipeptides into two amino acids",
                            location: "Brush border and cytoplasm of enterocytes"
                        },
                        nucleosidases: {
                            substrate: "Nucleosides (from pancreatic nuclease digestion of DNA/RNA)",
                            products: "Nitrogenous bases + pentose sugars",
                            location: "Brush border"
                        }
                    }
                }
            },

            digestionSummaryByNutrient: {
                starch: {
                    mouth: { enzyme: "Salivary amylase", products: "Dextrins, maltose", percentComplete: "5%" },
                    stomach: { enzyme: "None (amylase inactivated)", percentComplete: "5%" },
                    duodenum: { enzyme: "Pancreatic amylase", products: "Maltose, maltotriose, limit dextrins", percentComplete: "80%" },
                    brushBorder: { enzyme: "Maltase-glucoamylase, sucrase-isomaltase, lactase", products: "Glucose, galactose, fructose", percentComplete: "100%" }
                },
                protein: {
                    mouth: { enzyme: "None", percentComplete: "0%" },
                    stomach: { enzyme: "Pepsin + HCl", products: "Large polypeptides", percentComplete: "10-15%" },
                    duodenum: { enzyme: "Trypsin, chymotrypsin, elastase, carboxypeptidases", products: "Small peptides, some amino acids", percentComplete: "60-70%" },
                    brushBorder: { enzyme: "Aminopeptidase, dipeptidase", products: "Amino acids, di/tripeptides", percentComplete: "100%" }
                },
                triglycerides: {
                    mouth: { enzyme: "Lingual lipase", products: "Diglycerides + short-chain FA", percentComplete: "5%" },
                    stomach: { enzyme: "Gastric lipase", products: "Diglycerides + FA", percentComplete: "15%" },
                    duodenum: { enzyme: "Pancreatic lipase (with bile, colipase)", products: "2-Monoglycerides + FA", percentComplete: "95-100%" }
                }
            },

            clinicalApplications: {
                pancreaticEnzymeReplacement: {
                    indication: "Exocrine pancreatic insufficiency (chronic pancreatitis, cystic fibrosis, post-pancreatectomy)",
                    product: "Creon (pancrelipase) - lipase + amylase + protease",
                    dosing: "Taken with meals and snacks; dose titrated to faecal fat",
                    monitoring: "Weight, steatorrhoea, faecal fat excretion"
                },
                orlistat: {
                    mechanism: "Irreversible covalent inhibition of pancreatic and gastric lipase (Ser active site)",
                    effect: "Reduces fat absorption by ~30%",
                    sideEffects: "Steatorrhoea, oily spotting (due to undigested fat reaching colon); fat-soluble vitamin deficiency",
                    use: "Weight management in obesity"
                },
                acarbose: {
                    mechanism: "Competitive inhibitor of α-glucosidase (sucrase-isomaltase, maltase) at brush border",
                    effect: "Slows carbohydrate digestion → attenuates postprandial glucose rise",
                    sideEffects: "Bloating, flatulence (undigested oligosaccharides fermented by gut bacteria)",
                    use: "Type 2 diabetes management (especially in Asia)"
                },
                lactaseSupplements: {
                    mechanism: "Exogenous lactase (from Aspergillus or Kluyveromyces) taken with dairy",
                    effect: "Supplements deficient brush border lactase → lactose digested → no symptoms",
                    products: "Lactaid, various brands"
                }
            },

            misconceptions: [
                "Enzymes are not consumed - they are catalysts and recycled after each reaction",
                "Salivary amylase does NOT continue working in the stomach - it is inactivated by acid",
                "Bile is NOT an enzyme - it is a detergent-like emulsifier (facilitates lipase action)",
                "Most proteases need BOTH HCl AND enzymes - acid denatures protein substrate; enzymes cleave bonds",
                "Different enzymes work at DIFFERENT pH optima - pepsin at pH 1.5, trypsin at pH 7.5"
            ]
        };
        return content;
    }

    handleNutrientAbsorption(problem) {
        const content = {
            topic: "Nutrient Absorption and Transport",
            category: 'physiology',
            summary: "The small intestine absorbs virtually all nutrients through highly specific transport mechanisms on enterocyte membranes. Water-soluble nutrients (sugars, amino acids) enter the hepatic portal vein and go directly to the liver for processing. Lipids are packaged as chylomicrons and enter the lymphatic system, eventually reaching systemic circulation via the thoracic duct, bypassing first-pass hepatic metabolism.",

            enterocyteStructure: {
                overview: "Polarised absorptive cell; apical (luminal) membrane faces gut; basolateral membrane faces blood/lymph",
                apicalMembrane: {
                    features: "Dense microvilli (brush border); site of final digestion and initial absorption",
                    transporters: "SGLT1, GLUT5, PepT1, various amino acid transporters, ASBT (bile acids)",
                    glycocalyx: "Thick carbohydrate coat on microvilli; binds brush border enzymes"
                },
                basolateralMembrane: {
                    features: "Smooth; faces capillary and lymphatic network",
                    transporters: "GLUT2, GLUT1, various amino acid transporters, MRP2",
                    naKATPase: "Maintains intracellular low Na⁺; drives secondary active transport at apical membrane"
                },
                tightJunctions: {
                    function: "Prevent leakage between cells (paracellular pathway controlled)",
                    permeability: "Leakier in duodenum (allows paracellular water/electrolyte flow); tighter in ileum"
                },
                cellTurnover: "Enterocytes replaced every 3-5 days; originate from crypts of Lieberkühn"
            },

            glucoseAbsorption: {
                overview: "Most efficient absorptive process; rapid concentration gradient maintained by liver uptake",
                step1_luminalDigestion: "Pancreatic amylase + brush border enzymes → glucose monomers in lumen",
                step2_apicalEntry: {
                    transporter: "SGLT1 (Sodium-Glucose Linked Transporter 1)",
                    mechanism: "Secondary active transport; 2 Na⁺ co-transported with each glucose molecule",
                    driving force: "Low intracellular Na⁺ maintained by basolateral Na⁺/K⁺ ATPase",
                    energyCost: "Indirect ATP use (Na⁺/K⁺ ATPase uses ATP; SGLT1 itself does not)",
                    capacity: "High affinity (Km ~0.3 mM); high capacity transporter",
                    regulation: "Dietary carbohydrate upregulates SGLT1 expression within hours"
                },
                step3_intracellular: "Glucose freely diffuses in cytoplasm; concentration gradient to basolateral side",
                step4_basolateralExit: {
                    transporter: "GLUT2 (Glucose Transporter 2)",
                    mechanism: "Facilitated diffusion (no energy required)",
                    capacity: "High-capacity, low-affinity; suitable for bulk glucose export",
                    destination: "Enters capillary → mesenteric vein → hepatic portal vein → liver"
                },
                galactoseAbsorption: {
                    apical: "Also uses SGLT1 (competes with glucose)",
                    basolateral: "GLUT2",
                    hepaticConversion: "Galactose converted to glucose-1-phosphate in liver"
                },
                fructoseAbsorption: {
                    apical: "GLUT5 (facilitated diffusion; Na⁺-independent; slower than glucose)",
                    basolateral: "GLUT2",
                    hepaticConversion: "Fructose → fructose-1-phosphate → enters glycolysis at triose phosphate level",
                    overconsumption: "Excess fructose (HFCS) → hepatic de novo lipogenesis → fatty liver, hypertriglyceridaemia"
                }
            },

            proteinAbsorption: {
                overview: "Absorbed as free amino acids and di/tripeptides; dipeptides absorbed faster than free amino acids",
                step1_luminalDigestion: "Pepsin → trypsin/chymotrypsin/elastase → oligopeptides",
                step2_brushBorderDigestion: "Aminopeptidase, dipeptidase → amino acids, dipeptides, tripeptides",
                step3_apicalEntry: {
                    aminoAcids: {
                        transporters: "Multiple Na⁺-dependent cotransporters: B0AT1 (neutral AA), PAT1 (imino acids), CAT-1 (basic AA), EAAT3 (acidic AA)",
                        driven: "Na⁺ gradient (secondary active transport)",
                        specificity: "Different transporters for different amino acid groups (acidic, basic, neutral, imino)"
                    },
                    dipeptidesAndTripeptides: {
                        transporter: "PepT1 (SLC15A1)",
                        mechanism: "H⁺-coupled cotransport (proton-peptide cotransporter); powered by inward H⁺ gradient",
                        capacity: "Can accept ~400 different dipeptide/tripeptide combinations",
                        advantage: "Faster and more efficient than free amino acid absorption",
                        intracellular: "Cytoplasmic peptidases hydrolyse di/tripeptides → amino acids"
                    }
                },
                step4_basolateralExit: {
                    transporters: "LAT2 (neutral AA exchanger), y+LAT2 (basic AA), EAAT3 (acidic AA)",
                    mechanism: "Facilitated diffusion or antiport",
                    destination: "Hepatic portal vein → liver → systemic circulation"
                },
                hepaticProcessing: {
                    firstPass: "~50-70% of absorbed amino acids taken up by liver in first pass",
                    uses: "Plasma protein synthesis (albumin, clotting factors), urea cycle, gluconeogenesis, transamination",
                    remainder: "Enters systemic circulation → peripheral tissues"
                }
            },

            lipidAbsorption: {
                overview: "Most complex absorption pathway; requires emulsification, micellar transport, intracellular reassembly, and chylomicron formation before entering lymph",
                phase1_emulsification: {
                    agent: "Bile salts (amphipathic molecules from liver)",
                    mechanism: "Bile salts insert hydrophobic face into fat globule surface; hydrophilic face faces water → reduces surface tension → breaks large droplets into ~1 micron droplets",
                    result: "~1000x increase in lipase-accessible surface area"
                },
                phase2_enzymaticDigestion: {
                    agent: "Pancreatic lipase + colipase",
                    substrate: "Triglyceride at oil-water interface",
                    products: "2-Monoglyceride + 2 free fatty acids (from sn-1 and sn-3 positions)",
                    phospholipids: "Phospholipase A2 → lysophospholipid + fatty acid",
                    cholesterolEsters: "Cholesterol esterase → free cholesterol + fatty acid"
                },
                phase3_micelleFormation: {
                    components: "2-Monoglycerides, free fatty acids, lysophospholipids, cholesterol + bile salts",
                    structure: "Bile salts form outer hydrophilic shell; fat digestion products fill core",
                    size: "~3-10 nm diameter (much smaller than fat droplets)",
                    function: "Transport fat digestion products from lumen to brush border for absorption"
                },
                phase4_enterocyteEntry: {
                    mechanism: {
                        primaryRoute: "Passive diffusion; micelle approaches brush border; fat products partition out of micelle and across lipid bilayer down concentration gradient",
                        transporters: "CD36 (fatty acid translocase) facilitates long-chain fatty acid uptake; NPC1L1 (cholesterol transporter - target of ezetimibe)"
                    },
                    bileSaltFate: "Bile salts NOT absorbed here; remain in lumen; reabsorbed in terminal ileum",
                    chainLengthSorting: {
                        shortMediumChain: "< C12; directly enter portal blood (water-soluble enough); bypass chylomicron formation",
                        longChain: "> C12; enter smooth ER for reassembly"
                    }
                },
                phase5_intracellularReassembly: {
                    location: "Smooth endoplasmic reticulum (SER) of enterocyte",
                    triglycerideSynthesis: {
                        pathway: "2-Monoacylglycerol pathway (predominant): 2-MAG + 2 FA → TG (by DGAT enzymes)",
                        alternative: "Glycerol-3-phosphate pathway (minor)"
                    },
                    phospholipidSynthesis: "Lysophospholipid + FA → phospholipid",
                    cholesterolEsterification: "Free cholesterol + FA → cholesterol ester (by ACAT)"
                },
                phase6_chylomicronAssembly: {
                    location: "Smooth ER and Golgi apparatus",
                    structure: {
                        core: "TG (86%) + cholesterol esters (3%) - hydrophobic core",
                        surface: "Phospholipids + cholesterol + apolipoproteins - amphipathic shell",
                        apolipoprotein: "ApoB-48 (structural; made only in enterocyte; unique to chylomicrons) + ApoA-I, A-II, A-IV",
                        size: "80-1200 nm; largest lipoprotein"
                    },
                    processing: {
                        SER: "TG and CE synthesised",
                        Golgi: "ApoB-48 added; lipids packaged; vesicle formed",
                        exocytosis: "Chylomicron vesicle fuses with basolateral membrane → exocytosed into intercellular space"
                    }
                },
                phase7_lymphaticTransport: {
                    entry: "Chylomicrons enter lacteals (lymph capillaries in villus core) by bulk flow through intercellular gaps",
                    lymphaticPath: "Lacteals → mesenteric lymphatics → cisterna chyli → thoracic duct → left subclavian vein",
                    systemic: "Enter systemic circulation; distributed to peripheral tissues",
                    bypassLiver: "Chylomicrons do NOT pass through liver on first pass → lipid-soluble drugs absorbed this way avoid first-pass metabolism",
                    processing: {
                        LPL: "Lipoprotein lipase on capillary endothelium of muscle and adipose hydrolyses TG in chylomicrons → FFA taken up by tissues",
                        remnant: "Chylomicron remnant (depleted of TG) taken up by liver via ApoE receptor"
                    }
                },
                fatSolubleVitamins: {
                    overview: "Vitamins A, D, E, K absorbed with fats in mixed micelles",
                    absorption: "Passive diffusion from micelles into enterocyte; incorporated into chylomicrons",
                    deficiency: "Fat malabsorption (cholestasis, pancreatic insufficiency, coeliac disease) → fat-soluble vitamin deficiency",
                    vitaminA: "Night blindness, xerophthalmia if deficient",
                    vitaminD: "Rickets (children), osteomalacia (adults) if deficient",
                    vitaminE: "Peripheral neuropathy, haemolytic anaemia if deficient",
                    vitaminK: "Coagulopathy if deficient (clotting factors II, VII, IX, X require Vit K)"
                }
            },

            waterAndElectrolytes: {
                waterAbsorption: {
                    total: "~9 litres per day (2L ingested + 7L digestive secretions)",
                    smallIntestine: "~6.5 L absorbed",
                    largeIntestine: "~1.4 L absorbed",
                    faeces: "~100-200 ml lost",
                    mechanism: {
                        osmotic: "Water follows absorbed solutes by osmosis (passive)",
                        aquaporins: "AQP3, AQP7, AQP10 facilitate transcellular water transport in enterocytes",
                        paracellular: "Water also crosses through leaky tight junctions in small intestine"
                    },
                    osmolality: "Intestinal content reaches isotonicity quickly as water absorbed/secreted"
                },
                sodiumAbsorption: {
                    mechanism: "Multiple pathways: Na⁺/H⁺ exchanger (NHE3), Na⁺-nutrient cotransporters (SGLT1, amino acid transporters), sodium channels (ENaC in colon)",
                    driving: "Basolateral Na⁺/K⁺ ATPase pumps 3 Na⁺ out, 2 K⁺ in → maintains low intracellular Na⁺",
                    importance: "Na⁺ absorption drives water absorption (osmosis)",
                    clinicalNote: "Oral Rehydration Therapy (ORT): glucose+NaCl solution exploits SGLT1 cotransport to drive Na⁺ and water absorption even in cholera diarrhoea"
                },
                ironAbsorption: {
                    requirement: "1-2 mg/day absorbed (of 10-20 mg ingested)",
                    location: "Duodenum and proximal jejunum",
                    forms: {
                        haem: "From haemoglobin/myoglobin in meat; absorbed via HCP1 receptor; most bioavailable",
                        nonHaem: "Fe³⁺ reduced to Fe²⁺ by duodenal cytochrome b (DcytB) at brush border; Fe²⁺ absorbed via DMT1"
                    },
                    intracellular: "Bound by ferritin (storage) or transferred to basolateral ferroportin",
                    basolateral: "Ferroportin exports Fe²⁺; hephaestin oxidises Fe²⁺→Fe³⁺; binds transferrin in blood",
                    regulation: {
                        hepcidin: "Liver peptide; downregulates ferroportin → reduces iron export (master regulator of iron homeostasis)",
                        ironDeficiency: "Low hepcidin → more ferroportin → increased absorption",
                        haemochromatosis: "HFE gene mutation → low hepcidin → unregulated iron absorption → iron overload"
                    },
                    enhancers: "Vitamin C (reduces Fe³⁺→Fe²⁺); meat/fish (haem iron; also 'meat factor' enhances nonhaem)",
                    inhibitors: "Phytates (cereals), tannins (tea, coffee), calcium"
                },
                calciumAbsorption: {
                    location: "Duodenum (active, regulated) and throughout small intestine (passive, concentration-dependent)",
                    activeTranscellular: {
                        apical: "TRPV6 Ca²⁺ channel",
                        intracellular: "Bound by calbindin-D (prevents toxicity; facilitates transport)",
                        basolateral: "PMCA1b Ca²⁺ ATPase pumps Ca²⁺ out; NCX exchanger"
                    },
                    regulation: {
                        calcitrol: "1,25-(OH)₂-vitamin D₃ upregulates TRPV6, calbindin → ↑ absorption",
                        PTH: "Parathyroid hormone stimulates calcitrol synthesis → indirect ↑ absorption",
                        deficiency: "Vitamin D deficiency → rickets, osteomalacia, tetany"
                    }
                },
                vitaminB12Absorption: {
                    uniqueness: "Most complex absorptive mechanism of any nutrient",
                    steps: [
                        "1. B12 in food (bound to protein) freed by gastric acid and pepsin",
                        "2. Freed B12 binds R protein (haptocorrin) in saliva/gastric juice",
                        "3. R-B12 complex enters duodenum → pancreatic proteases digest R protein",
                        "4. Free B12 binds intrinsic factor (IF; from parietal cells of stomach)",
                        "5. IF-B12 complex travels to terminal ileum",
                        "6. IF-B12 binds cubilin/amnionless receptor on ileal enterocytes",
                        "7. Receptor-mediated endocytosis → B12 enters enterocyte",
                        "8. IF degraded; B12 transferred to transcobalamin II",
                        "9. Transcobalamin II-B12 exits basolaterally → portal blood"
                    ],
                    deficiencyConsequences: {
                        causes: ["Pernicious anaemia (autoimmune loss of IF or parietal cells)", "Gastrectomy", "Terminal ileum resection or Crohn's disease", "Vegan diet", "Long-term PPI use", "Metformin"],
                        features: "Megaloblastic anaemia, subacute combined degeneration of spinal cord (dorsal and lateral columns), peripheral neuropathy",
                        treatment: "IM hydroxycobalamin (bypasses gut absorption)"
                    }
                }
            },

            hepaticPortalSystem: {
                function: "Carries all absorbed water-soluble nutrients from intestine to liver before systemic distribution",
                components: "Superior mesenteric vein + inferior mesenteric vein + splenic vein → portal vein → hepatic sinusoids → hepatic veins → IVC",
                firstPassEffect: {
                    definition: "Drugs/nutrients absorbed from gut pass through liver before reaching systemic circulation",
                    significance: "Liver can metabolise, store, or process nutrients before they reach peripheral tissues",
                    drugs: "Many drugs extensively metabolised on first pass → reduced bioavailability (e.g., GTN, propranolol)",
                    nutrients: "Glucose → glycogenesis or oxidation; amino acids → protein synthesis or deamination"
                },
                portalHypertension: {
                    cause: "Liver cirrhosis → fibrosis → increased resistance to portal blood flow",
                    consequences: ["Varices (oesophageal, gastric, rectal) → haemorrhage", "Ascites (fluid in abdomen)", "Splenomegaly", "Hepatic encephalopathy (ammonia not cleared)"]
                }
            },

            clinicalApplications: [
                "Oral Rehydration Therapy: glucose-Na⁺ cotransport (SGLT1) saves millions of lives in diarrhoeal disease",
                "Ezetimibe: inhibits NPC1L1 → blocks cholesterol absorption → reduces LDL",
                "Orlistat: inhibits lipase → reduced fat absorption → weight loss",
                "Coeliac disease: autoimmune villous atrophy → malabsorption of all nutrients",
                "Short bowel syndrome: surgical loss of absorption surface → TPN dependence",
                "Bariatric surgery: Roux-en-Y bypass diverts food past most absorptive surface"
            ]
        };
        return content;
    }

    handleDigestiveHormones(problem) {
        const content = {
            topic: "Hormonal Regulation of Digestion",
            category: 'endocrinology',
            summary: "The gastrointestinal tract is the largest endocrine organ in the body, secreting over 20 identified peptide hormones. These 'gut hormones' coordinate the timing and quantity of digestive secretions with food intake, regulate gastric emptying, control satiety, and even communicate with the brain via the gut-brain axis. Many are now key drug targets for treating obesity and type 2 diabetes.",

            gutAsEndocrineOrgan: {
                totalCells: "~100 million enteroendocrine cells throughout GI mucosa",
                proportionOfGut: "Only ~1% of intestinal epithelial cells are enteroendocrine, but gut is largest endocrine organ by mass",
                actionModes: {
                    endocrine: "Released into blood → travel to distant target organs",
                    paracrine: "Act on adjacent cells (e.g., somatostatin from D-cells on nearby β-cells)",
                    neurocrine: "Act on enteric or vagal nerve endings",
                    autocrine: "Act on the secreting cell itself"
                },
                detection: "Enteroendocrine cells sense luminal contents via G-protein coupled receptors and ion channels on their apical (luminal) surface"
            },

            gastrin: {
                fullName: "Gastrin (G-17, G-34, G-14 isoforms based on amino acid length)",
                secretedBy: "G-cells in gastric antrum (90%) and proximal duodenum",
                stimulus: {
                    primary: "Amino acids and small peptides in gastric lumen (especially Phe, Trp)",
                    secondary: "Gastric distension (via vagovagal reflex and local myenteric plexus)",
                    neural: "Vagal stimulation via GRP (gastrin-releasing peptide) from vagal nerve endings",
                    inhibition: "Luminal pH <2.5 (feedback); somatostatin; secretin; GIP"
                },
                receptor: "CCK-B receptor on parietal cells, ECL cells, smooth muscle",
                signalling: "Gq → PLC → IP3/DAG → Ca²⁺ → exocytosis",
                actions: {
                    primary: {
                        HClSecretion: "Stimulates parietal cells directly and indirectly (via ECL cell histamine and enterochromaffin-like cells)",
                        pepsinSecretion: "Stimulates chief cells → pepsinogen release",
                        histamineRelease: "Stimulates ECL cells → histamine → potent parietal cell activator"
                    },
                    secondary: {
                        motility: "Increases gastric motility and LES tone",
                        growth: "Trophic effect on gastric and intestinal mucosa",
                        pancreasEnzymes: "Weak stimulation of pancreatic enzyme secretion"
                    }
                },
                clinicalDisorders: {
                    ZollingerEllison: {
                        cause: "Gastrin-secreting tumour (gastrinoma) usually in pancreas or duodenum; MEN1 association",
                        features: "Severe refractory peptic ulcers (often multiple, unusual sites), diarrhoea, steatorrhoea (acid inactivates lipase)",
                        diagnosis: "Fasting gastrin >1000 pg/ml; secretin stimulation test (paradoxically raises gastrin)",
                        treatment: "High-dose PPI; tumour resection; octreotide"
                    },
                    perniciousAnaemia: {
                        cause: "Autoimmune gastritis → loss of parietal cells → no acid → no negative feedback → high gastrin",
                        consequence: "Hypergastrinaemia; ECL cell hyperplasia (long-term carcinoid risk)"
                    }
                }
            },

            secretin: {
                discovery: "First hormone ever identified (Bayliss and Starling, 1902); coined the word 'hormone'",
                secretedBy: "S-cells in duodenal and jejunal mucosa",
                stimulus: {
                    primary: "Acid (pH <4.5) in duodenum - most potent stimulus",
                    secondary: "Fatty acids, bile salts in duodenum",
                    note: "Acid-stimulated bicarbonate response is beautifully logical: more acid in → more HCO₃⁻ out"
                },
                receptor: "Secretin receptor on pancreatic ductal cells, hepatocytes, stomach",
                signalling: "Gs → adenylyl cyclase → ↑ cAMP → PKA → CFTR activation → HCO₃⁻ secretion",
                actions: {
                    primary: {
                        pancreaticBicarb: "Potent stimulation of ductal cells → HCO₃⁻-rich juice → neutralises gastric acid in duodenum (pH rises from ~2 to ~6-7)",
                        liverBile: "Stimulates liver → increased bile flow (hydrocholeresis)"
                    },
                    secondary: {
                        gastricAcid: "Inhibits gastric acid secretion (enterogastric reflex)",
                        gastricEmptying: "Slows gastric emptying (protects duodenum from excess acid)",
                        potentiation: "Markedly potentiates CCK-stimulated enzyme secretion"
                    }
                },
                clinicalUse: "Secretin stimulation test: IV secretin → measures pancreatic juice output and HCO₃⁻ (tests exocrine pancreatic function); paradoxically increases gastrin in gastrinoma (diagnostic)"
            },

            CCK: {
                fullName: "Cholecystokinin (formerly called pancreozymin)",
                isoforms: "CCK-8, CCK-33, CCK-58 (all bioactive; CCK-8 most studied)",
                secretedBy: "I-cells in duodenum and jejunum",
                stimulus: {
                    primary: "Fat (long-chain fatty acids) in duodenum - most potent stimulus",
                    secondary: "Protein/amino acids (especially Phe, Leu, Val) in duodenum",
                    mechanism: "Fat/protein → I-cells release CCK-releasing factor (monitor peptide) → paracrine → I-cell → CCK secretion",
                    inhibition: "Active proteases digest CCK-releasing factor → feedback inhibition; somatostatin; PYY"
                },
                receptors: {
                    CCKA: "On pancreatic acinar cells, gallbladder smooth muscle, Oddi sphincter, vagal afferents",
                    CCKB: "On stomach parietal/chief cells, brain neurons (satiety); same as gastrin receptor"
                },
                signalling: "Gq → PLC → IP3/DAG → Ca²⁺ → exocytosis",
                actions: {
                    primary: {
                        pancreaticEnzymes: "Potent stimulation of acinar cells → enzyme-rich juice (trypsin, lipase, amylase)",
                        gallbladder: "Contraction of gallbladder smooth muscle → bile ejection into duodenum",
                        sphincterOfOddi: "Relaxation → allows bile and pancreatic juice to enter duodenum"
                    },
                    secondary: {
                        gastricEmptying: "Slows gastric emptying (ensures duodenum not overloaded; allows time for digestion)",
                        satiety: "Acts on vagal afferents and directly on hypothalamus → feeling of fullness after fat-rich meal",
                        pancreasGrowth: "Trophic effect on pancreatic acinar cells",
                        LESPressure: "Slightly increases lower oesophageal sphincter pressure"
                    }
                },
                clinicalApplications: {
                    hepatobiliary: "Sincalide (CCK-8 analogue) IV → stimulates gallbladder contraction for HIDA scan",
                    pancreatitis: "CCK receptor antagonists (devazepide) studied for acute pancreatitis prevention",
                    obesity: "CCK enhances satiety; research into CCK-based satiety drugs"
                }
            },

            GLP1: {
                fullName: "Glucagon-Like Peptide 1",
                derivedFrom: "Proglucagon gene (same gene as glucagon; different post-translational processing in L-cells vs α-cells)",
                secretedBy: "L-cells in distal ileum, colon (and some in proximal intestine)",
                stimulus: {
                    primary: "Nutrients reaching distal gut: glucose, fat, protein",
                    neural: "Vagal and enteric neural stimulation from proximal gut (even before nutrients arrive)",
                    note: "GLP-1 secreted before nutrients actually reach ileum (proximal neural signal; 'cephalic' GLP-1)"
                },
                metabolism: "DPP-4 (dipeptidyl peptidase-4) rapidly cleaves GLP-1 → inactive in 2 minutes; very short half-life in blood",
                receptor: "GLP-1 receptor (Gs-coupled) on β-cells, brain, heart, kidney, lung, gut",
                actions: {
                    incretin: {
                        definition: "Incretin effect: oral glucose causes much more insulin than IV glucose; GLP-1 responsible for ~50-70% of this effect",
                        mechanism: "GLP-1 → pancreatic β-cell GLP-1R → cAMP → PKA → enhanced Ca²⁺ signalling → glucose-dependent insulin secretion (ONLY when glucose elevated)",
                        glucoseDependent: "Critical feature: does NOT stimulate insulin if glucose is normal → no hypoglycaemia risk"
                    },
                    glucagonInhibition: "Inhibits pancreatic α-cell glucagon secretion → reduces hepatic glucose output",
                    gastricEmptying: "Delays gastric emptying → slows nutrient absorption → reduces postprandial glucose spike",
                    appetite: {
                        central: "Acts on hypothalamic GLP-1R (arcuate nucleus) → reduces food intake",
                        vagal: "Activates vagal afferents → signals satiety to brainstem",
                        clinical: "GLP-1 agonists cause 10-15% body weight loss"
                    },
                    cardioprotection: "Reduces cardiovascular events (MACE) in T2DM patients; mechanism includes direct cardiac GLP-1R effects",
                    renalProtection: "Reduces albuminuria and slows CKD progression",
                    betaCellProtection: "In vitro and animal: promotes β-cell survival and proliferation; uncertain in humans"
                },
                drugs: {
                    GLP1Agonists: {
                        mechanism: "Stable GLP-1 analogues resistant to DPP-4 degradation",
                        examples: {
                            semaglutide: "Once weekly SQ (Ozempic) or daily oral (Rybelsus); 94% homology to native GLP-1; albumin-bound → long half-life; also Wegovy (higher dose for obesity)",
                            liraglutide: "Once daily SQ (Victoza, T2DM; Saxenda, obesity); fatty acid attached → albumin binding → extended half-life",
                            exenatide: "Twice daily SQ (Byetta); exendin-4 from Gila monster saliva; 53% homology",
                            dulaglutide: "Once weekly SQ (Trulicity)"
                        },
                        sideEffects: "Nausea, vomiting (most common; delayed gastric emptying); rare pancreatitis; C-cell thyroid tumour (animal data; avoid in MEN2)",
                        CVOT: "LEADER (liraglutide), SUSTAIN-6 (semaglutide) showed significant reduction in MACE"
                    },
                    DPP4Inhibitors: {
                        mechanism: "Inhibit DPP-4 enzyme → prevent GLP-1 degradation → 2-3x increase in endogenous GLP-1",
                        examples: "Sitagliptin (Januvia), saxagliptin, alogliptin, linagliptin",
                        advantage: "Oral; well tolerated; weight neutral",
                        limitation: "Modest HbA1c reduction compared to GLP-1 agonists",
                        caution: "Rare: pancreatitis, joint pain"
                    }
                }
            },

            GIP: {
                fullName: "Glucose-dependent Insulinotropic Polypeptide (formerly Gastric Inhibitory Polypeptide)",
                secretedBy: "K-cells in duodenum and jejunum",
                stimulus: "Glucose, fat, and amino acids in proximal small intestine",
                receptor: "GIP receptor (Gs-coupled) on β-cells, adipocytes, bone, brain",
                actions: {
                    incretin: "Stimulates insulin secretion in glucose-dependent manner (accounts for ~30-50% of incretin effect)",
                    fat: "Promotes fatty acid uptake and storage in adipocytes (pro-adipogenic at high levels)",
                    bone: "Anabolic effects on bone; GIP receptor knockout mice have osteoporosis",
                    glucagon: "Stimulates glucagon in hypoglycaemia (opposite to GLP-1)"
                },
                T2DM: "GIP incretin effect is blunted in T2DM (GIP resistance); GLP-1 effect better preserved",
                drugs: {
                    tirzepatide: "Dual GIP/GLP-1 receptor agonist (Mounjaro/Zepbound); weekly SQ; superior weight loss to GLP-1 agonists alone; ~20-25% weight loss in clinical trials"
                }
            },

            PYY: {
                fullName: "Peptide YY (PYY 3-36 the active form)",
                secretedBy: "L-cells in distal ileum and colon (co-secreted with GLP-1)",
                stimulus: "Fat and protein in distal gut (postprandial)",
                actions: {
                    ilealBrake: "Slows gastric emptying and small intestinal transit when food reaches distal gut",
                    appetite: "Acts on NPY/Y2 receptors in hypothalamus → potent appetite suppression",
                    pancreas: "Inhibits exocrine pancreatic secretion"
                },
                clinicalNote: "Low PYY after bariatric surgery associated with weight regain; PYY agonists studied for obesity"
            },

            motilin: {
                secretedBy: "Mo-cells (M-cells) in duodenum and jejunum",
                stimulus: "Fasting state; released cyclically every ~90-120 minutes",
                receptor: "Motilin receptor (= erythromycin receptor) on smooth muscle, enteric neurons",
                actions: {
                    MMC: "Initiates Phase III of Migrating Motor Complex (MMC) - powerful propulsive contractions that sweep residual food, bacteria and debris from stomach and small intestine ('intestinal housekeeper')",
                    gastricEmptying: "Promotes gastric emptying between meals"
                },
                drugsConnection: "Erythromycin (antibiotic) is motilin receptor agonist → gastroparesis treatment; also used to stimulate gut motility pre-endoscopy"
            },

            somatostatin: {
                secretedBy: "D-cells of pancreatic islets, gastric antrum, intestinal mucosa; also hypothalamus",
                isoforms: "SST-14 (gut) and SST-28 (intestine)",
                stimulus: "Acid, fat, protein, glucose, other hormones (gastrin, secretin, CCK, GIP)",
                receptor: "SSTR1-5 (Gi-coupled); all inhibit adenylyl cyclase → ↓ cAMP",
                actions: "Universal GI inhibitor: inhibits gastrin, secretin, CCK, insulin, glucagon, GH; reduces gut motility and blood flow",
                clinicalUse: {
                    octreotide: "Long-acting somatostatin analogue (SSTR2/5 selective)",
                    indications: ["Acromegaly (↓ GH)", "VIPoma (↓ VIP → stop watery diarrhoea)", "Glucagonoma (↓ glucagon)", "Carcinoid tumours (↓ serotonin → stop flushing/diarrhoea)", "Oesophageal varices (↓ portal pressure)", "Acute pancreatitis (reduce pancreatic secretion)"]
                }
            },

            gutBrainAxis: {
                overview: "Bidirectional communication between gut and brain via neural, hormonal, and immune pathways",
                components: {
                    vagusNerve: "~80% afferent (gut to brain); transmits satiety signals, pain, gut microbial metabolites",
                    entericNervousSystem: "500 million neurons; 'second brain'; autonomous gut control",
                    hormones: "GLP-1, PYY, CCK act on hypothalamus and brainstem via blood and vagus",
                    microbiome: "Produces SCFAs, neurotransmitter precursors (5-HTP, GABA), cytokines"
                },
                appetite: {
                    satiety: "GLP-1, PYY, CCK, oxytocin → hypothalamic satiety centres (arcuate nucleus, NTS)",
                    hunger: "Ghrelin (stomach) → rises before meals → stimulates hypothalamic NPY/AgRP neurons",
                    disorders: "Obesity associated with impaired satiety signalling; anorexia with overactive satiety circuits"
                },
                ghrelin: {
                    secretedBy: "P/D1 cells in stomach fundus",
                    stimulus: "Fasting (rises before meals; falls after eating)",
                    actions: "Potent appetite stimulant; stimulates GH release; promotes fat storage",
                    uniqueness: "Only known orexigenic (appetite-stimulating) gut hormone",
                    surgeryEffect: "Gastric sleeve resects fundus → reduces ghrelin → reduced hunger (mechanism of weight loss)"
                }
            },

            clinicalApplications: {
                GLP1andObesity: {
                    mechanism: "GLP-1 agonists delay gastric emptying + reduce appetite + improve glucose → ~10-20% weight loss",
                    trials: "STEP trials (semaglutide 2.4mg): ~15% weight loss vs 2.4% placebo",
                    indication: "BMI ≥30 or ≥27 with weight-related comorbidity",
                    comparison: "Tirzepatide (GIP/GLP-1 dual): 20-25% weight loss in SURMOUNT trials"
                },
                bariatricSurgeryHormones: {
                    RYGBbypass: "Increased GLP-1 and PYY post-meals → major mechanism of T2DM remission and weight loss",
                    gastricSleeve: "Reduced ghrelin + increased GLP-1 → weight loss",
                    T2DMremission: "T2DM remission even before significant weight loss → hormone-mediated mechanism"
                }
            }
        };
        return content;
    }

    handleOralCavity(problem) {
        const content = {
            topic: "Oral Cavity and Mastication",
            category: 'digestive_organs',
            summary: "The oral cavity is the entry point of the digestive system where both mechanical digestion (mastication) and chemical digestion (salivary amylase, lingual lipase) begin. It prepares food into a lubricated bolus suitable for swallowing through coordinated actions of teeth, tongue, and salivary glands. Understanding oral physiology is foundational to understanding the entire digestive process.",

            anatomy: {
                boundaries: {
                    anterior: "Lips (labia)",
                    posterior: "Oropharynx (at palatoglossal arch)",
                    superior: "Hard palate (anterior, bony) and soft palate (posterior, muscular)",
                    inferior: "Floor of mouth (mylohyoid muscle)",
                    lateral: "Cheeks (buccinator muscle lined with non-keratinised stratified squamous epithelium)"
                },
                regions: {
                    vestibule: {
                        definition: "Space between lips/cheeks and teeth/gums",
                        lining: "Non-keratinised stratified squamous epithelium (resistant to abrasion)",
                        clinicalNote: "Site for buccal drug absorption (e.g., GTN tablets, buccal midazolam)"
                    },
                    oralCavityProper: {
                        definition: "Space medial to the teeth and gums",
                        contains: "Tongue, teeth, openings of salivary gland ducts",
                        floor: "Formed by mylohyoid and geniohyoid muscles"
                    }
                },
                palate: {
                    hard: {
                        structure: "Palatine processes of maxillae + horizontal plates of palatine bones; covered by keratinised mucosa",
                        function: "Rigid surface against which tongue compresses food during mastication"
                    },
                    soft: {
                        structure: "Muscular fold suspended from posterior hard palate; no bony skeleton",
                        muscles: ["Levator veli palatini", "Tensor veli palatini", "Musculus uvulae", "Palatoglossus", "Palatopharyngeus"],
                        function: "Elevates during swallowing to close nasopharynx and prevent nasal regurgitation",
                        uvula: "Muscular projection hanging from centre; assists in nasopharyngeal closure and phonation"
                    }
                }
            },

            teeth: {
                structure: {
                    crown: {
                        definition: "Visible portion above gum line",
                        coveredBy: "Enamel - hardest substance in human body"
                    },
                    neck: {
                        definition: "Junction between crown and root at gum line (cemento-enamel junction)",
                        clinicalNote: "Site of plaque accumulation; gingival recession exposes neck"
                    },
                    root: {
                        definition: "Portion anchored in alveolar bone of maxilla or mandible",
                        coveredBy: "Cementum",
                        number: "1-3 roots depending on tooth type"
                    },
                    internalStructure: {
                        enamel: {
                            composition: "96-97% hydroxyapatite [Ca₁₀(PO₄)₆(OH)₂] crystals; 3-4% protein and water",
                            hardness: "Mohs hardness 5; hardest biological material",
                            origin: "Ameloblasts during development; cannot regenerate after eruption (no cells remain)",
                            thickness: "1-2.5 mm; thickest at cusps",
                            role: "Resists masticatory forces and acid attack",
                            clinicalNote: "Dissolved by bacterial lactic acid (pH <5.5) in dental caries"
                        },
                        dentine: {
                            composition: "70% hydroxyapatite; 20% collagen type I; 10% water",
                            hardness: "Less than enamel (Mohs 3-4); bone-like",
                            structure: "Dentinal tubules run from pulp to enamel; contain odontoblast processes",
                            sensitivity: "Tubule fluid movement stimulates pain fibres → dentine hypersensitivity",
                            regeneration: "Odontoblasts can form secondary (physiological) and tertiary (reparative) dentine",
                            types: {
                                primary: "Formed before tooth eruption",
                                secondary: "Forms continuously throughout life (narrows pulp chamber)",
                                tertiary: "Rapid formation in response to injury/decay"
                            }
                        },
                        pulp: {
                            composition: "Loose connective tissue with fibroblasts, odontoblasts, blood vessels, nerves, lymphatics",
                            function: "Nourishes dentine; immune surveillance; pain sensation; forms new dentine",
                            chamber: "Pulp cavity in crown; root canals in roots",
                            clinicalNote: "Pulpitis = inflamed pulp → severe toothache; treated by root canal therapy"
                        },
                        cementum: {
                            composition: "65% hydroxyapatite; 35% organic (collagen, proteoglycans)",
                            function: "Anchors periodontal ligament fibres (Sharpey's fibres) to root",
                            types: {
                                acellular: "Covers coronal root; primary attachment",
                                cellular: "Covers apical root; adaptive remodelling"
                            }
                        },
                        periodontalLigament: {
                            definition: "Fibrous connective tissue connecting cementum to alveolar bone",
                            width: "0.15-0.38 mm",
                            fibres: "Sharpey's fibres (principal fibres) arranged obliquely to resist extraction forces",
                            functions: ["Suspends tooth in socket", "Absorbs masticatory shock", "Proprioception (senses bite force)", "Turnover and remodelling"],
                            cells: "Fibroblasts, osteoblasts, cementoblasts, epithelial cell rests of Malassez"
                        },
                        alveolarBone: {
                            definition: "Process of maxilla or mandible housing tooth sockets",
                            types: {
                                bundleBone: "Innermost layer lining socket; dense; Sharpey's fibre insertions",
                                supportingBone: "Trabecular and cortical bone providing structural support"
                            },
                            remodelling: "Bone resorbs if tooth extracted; principle behind orthodontic movement"
                        }
                    }
                },
                types: {
                    incisors: {
                        number: "8 (4 maxillary: central + lateral; 4 mandibular)",
                        shape: "Chisel-shaped single-cusp crown; single root",
                        function: "Cutting and biting food; phonation (F, V, TH sounds); aesthetics",
                        maximalBiteForce: "~25 kg"
                    },
                    canines: {
                        number: "4 (1 per quadrant)",
                        shape: "Pointed/conical crown; longest single root in dentition",
                        function: "Tearing, gripping, and puncturing food; canine guidance in jaw movements",
                        maximalBiteForce: "~35 kg"
                    },
                    premolars: {
                        number: "8 (2 per quadrant); absent in deciduous dentition",
                        shape: "Bicuspid crown (2 cusps: buccal and lingual); 1-2 roots",
                        function: "Crushing and beginning to grind food; transitional between canines and molars",
                        maximalBiteForce: "~60 kg"
                    },
                    molars: {
                        number: "12 (3 per quadrant including wisdom teeth); or 8 if wisdom teeth absent",
                        shape: "Broad multicusped crown (4-5 cusps); 2-3 roots",
                        function: "Primary grinding and pulverising food; most masticatory work done here",
                        maximalBiteForce: "~70-91 kg",
                        wisdomTeeth: {
                            name: "Third molars",
                            eruption: "17-25 years",
                            issues: "Impaction (insufficient space), pericoronitis, caries risk"
                        }
                    }
                },
                dentitions: {
                    deciduous: {
                        name: "Primary / milk / baby teeth",
                        number: "20 teeth (4 incisors + 2 canines + 4 molars per arch)",
                        eruption: "6 months (lower central incisors) to 30 months (second molars)",
                        shedding: "6-12 years",
                        formula: "i 2/2, c 1/1, m 2/2 × 2 = 20",
                        differences: "Smaller, whiter, proportionally larger pulps, thinner enamel and dentine"
                    },
                    permanent: {
                        name: "Adult / secondary teeth",
                        number: "32 (including wisdom teeth) or 28 if wisdom teeth absent",
                        eruption: "6 years (first molars) to 25 years (wisdom teeth)",
                        formula: "I 2/2, C 1/1, PM 2/2, M 3/3 × 2 = 32"
                    },
                    mixedDentition: "Ages 6-12: both deciduous and permanent teeth present simultaneously"
                },
                mastication: {
                    definition: "Mechanical breakdown of food into smaller particles to increase surface area for enzyme action and form a swallowable bolus",
                    muscles: {
                        masseter: {
                            origin: "Zygomatic arch",
                            insertion: "Mandible (ramus and angle)",
                            action: "Elevation of mandible (closes jaw); most powerful jaw muscle",
                            nerveSupply: "Mandibular branch of trigeminal nerve (CN V3)"
                        },
                        temporalis: {
                            origin: "Temporal fossa",
                            insertion: "Coronoid process of mandible",
                            action: "Elevation and retraction of mandible",
                            clinicalNote: "Palpable at temporal region during clenching"
                        },
                        medialPterygoid: {
                            action: "Elevation and medial movement of mandible (grinding)",
                            synergist: "Works with masseter to form a mandibular sling"
                        },
                        lateralPterygoid: {
                            action: "Protrusion and side-to-side grinding movements; opens jaw",
                            uniqueness: "Only jaw muscle that depresses mandible from resting position"
                        },
                        suprahyoids: {
                            muscles: "Mylohyoid, geniohyoid, digastric, stylohyoid",
                            action: "Depress mandible when hyoid fixed; elevate hyoid during swallowing"
                        }
                    },
                    chewingCycle: {
                        opening: "Lateral pterygoid contracts; mandible depresses and protrudes",
                        crushing: "Masseter, temporalis, medial pterygoid contract; teeth contact food",
                        grinding: "Lateral excursion; molars grind food against hard palate",
                        frequency: "~1-2 cycles per second",
                        chewingTime: "~20-30 chewing strokes per bite depending on food hardness"
                    },
                    physiologicalEffects: {
                        particleSize: "Reduces food from ~20mm pieces to ~2mm particles (10x reduction)",
                        surfaceArea: "~100x increase in surface area for enzyme contact",
                        mixing: "Thoroughly mixes food with saliva",
                        temperature: "Warms cold food to body temperature",
                        taste: "Releases volatile compounds for taste perception"
                    }
                }
            },

            tongue: {
                structure: {
                    muscles: {
                        intrinsic: {
                            types: "Superior and inferior longitudinal, transverse, vertical",
                            function: "Change shape of tongue (elongate, shorten, widen, narrow)",
                            origin: "All arise from and insert within tongue"
                        },
                        extrinsic: {
                            genioglossus: "Largest; protrudes tongue; most important airway muscle (paralysis → airway collapse)",
                            hyoglossus: "Depresses tongue",
                            styloglossus: "Retracts and elevates tongue",
                            palatoglossus: "Elevates tongue, closes oropharyngeal isthmus"
                        },
                        nerveSupply: "Hypoglossal nerve (CN XII) to all muscles EXCEPT palatoglossus (CN X)"
                    },
                    mucosa: {
                        dorsal: "Rough; many papillae",
                        ventral: "Smooth; thin; highly vascular (rapid drug absorption possible - sublingual GTN)"
                    },
                    papillae: {
                        filiform: {
                            number: "Most numerous (100s-1000s)",
                            shape: "Thread-like, pointed",
                            tasteButds: "None",
                            function: "Mechanical (increase friction for food manipulation); texture sensation",
                            location: "Cover anterior 2/3 of tongue dorsum"
                        },
                        fungiform: {
                            number: "~200-400",
                            shape: "Mushroom-shaped; red (rich blood supply visible through thin epithelium)",
                            tasteBuds: "3-5 per papilla; ~1500 taste buds total",
                            location: "Scattered among filiform papillae; concentrated at tip and edges"
                        },
                        circumvallate: {
                            number: "8-12",
                            shape: "Large, flat-topped; surrounded by circular groove (trench)",
                            tasteBuds: "~100-300 per papilla; most taste buds (~6000 total on circumvallate)",
                            location: "Single row at junction of anterior 2/3 and posterior 1/3 (sulcus terminalis)",
                            serous: "Von Ebner's glands secrete serous fluid into trench → washes tastants over taste buds"
                        },
                        foliate: {
                            number: "~5-8 folds per side",
                            shape: "Parallel folds on lateral tongue margins",
                            tasteBuds: "Several hundred; more prominent in children; atrophy in adults",
                            location: "Posterior lateral border of tongue"
                        }
                    },
                    tasteBuds: {
                        structure: "Barrel-shaped receptor organs (~50 micron); 50-100 taste receptor cells + supporting cells + basal cells; taste pore at apex",
                        distribution: "~10,000 total in adults (tongue, soft palate, epiglottis, pharynx)",
                        renewal: "Taste cells replaced every 10-14 days",
                        tastes: {
                            sweet: "T1R2/T1R3 heterodimer receptor; sugars, artificial sweeteners",
                            bitter: "T2R family (~25 receptors); alkaloids, toxins (protective reflex → spitting)",
                            salty: "ENaC sodium channels; NaCl",
                            sour: "PKD2L1 channels; protons (H⁺); acid foods",
                            umami: "T1R1/T1R3; glutamate, aspartate; savoury/meaty taste"
                        },
                        nerveSupply: {
                            anteriorTwoThirds: "Chorda tympani (branch of CN VII - facial); via lingual nerve",
                            posteriorOneThird: "Glossopharyngeal nerve (CN IX)",
                            epiglottis: "Vagus nerve (CN X)",
                            pathway: "Taste signals → nucleus tractus solitarius (brainstem) → thalamus → gustatory cortex (insula)"
                        }
                    }
                },
                functions: [
                    "Food manipulation during mastication (positions food between molars)",
                    "Bolus formation (compresses chewed food into cohesive mass)",
                    "Swallowing initiation (propels bolus posteriorly)",
                    "Taste sensation (quality and palatability assessment)",
                    "Speech articulation (dental, alveolar, palatal consonants)",
                    "Oral hygiene (sweeps food debris from teeth)",
                    "Suckling in infants"
                ]
            },

            salivaryGlands: {
                overview: "Three pairs of major salivary glands plus ~600-1000 minor salivary glands (throughout oral mucosa) produce 1-1.5 litres of saliva per day",
                majorGlands: {
                    parotid: {
                        location: "Anterior and inferior to ear; largest salivary gland",
                        weight: "~25g each",
                        aciniType: "Purely serous (watery, enzyme-rich secretion)",
                        duct: "Stensen's duct; ~5cm long; pierces buccinator; opens into vestibule opposite upper 2nd molar",
                        secretionContribution: "~25% of resting saliva; ~50% stimulated",
                        nerveSupply: {
                            parasympathetic: "Glossopharyngeal nerve (CN IX) → auriculotemporal nerve → parotid",
                            sympathetic: "Superior cervical ganglion → external carotid plexus"
                        },
                        relations: {
                            facial: "Facial nerve (CN VII) passes through parotid → parotid surgery risks facial palsy",
                            retromandibular: "Retromandibular vein and external carotid artery within gland"
                        },
                        pathology: {
                            mumps: "Paramyxovirus; bilateral parotid swelling; trismus; orchitis in post-pubertal males",
                            parotitis: "Bacterial (dehydrated patients); blocked duct; Sjögren's syndrome",
                            parotidTumour: "80% of salivary tumours; 80% benign (pleomorphic adenoma); Warthin's tumour"
                        }
                    },
                    submandibular: {
                        location: "Below mandible in submandibular triangle; C-shaped around posterior border of mylohyoid",
                        weight: "~8-10g each",
                        aciniType: "Mixed (predominantly serous ~60%; some mucous acini with serous demilunes)",
                        duct: "Wharton's duct; 5cm; opens at sublingual caruncle on floor of mouth beside frenulum",
                        secretionContribution: "~60-70% of resting saliva",
                        nerveSupply: {
                            parasympathetic: "Facial nerve (CN VII) → chorda tympani → lingual nerve → submandibular ganglion",
                            sympathetic: "Plexus on facial artery"
                        },
                        calculi: "Most common site for salivary stones (calculi) due to tortuous uphill duct path and viscous secretion; presents with mealtime pain and swelling"
                    },
                    sublingual: {
                        location: "Under tongue; smallest major gland; lies on mylohyoid with submandibular duct above",
                        weight: "~2-3g each",
                        aciniType: "Predominantly mucous; no serous demilunes",
                        duct: "Multiple ducts of Rivinus (~10-20); most open directly onto sublingual fold; largest may join Wharton's duct (duct of Bartholin)",
                        secretionContribution: "~5% of saliva; viscous mucous secretion",
                        clinicalNote: "Ranula: mucocele (mucus retention cyst) from sublingual or submandibular gland"
                    }
                },
                minorGlands: {
                    number: "600-1000 throughout oral mucosa",
                    locations: "Lips (labial), cheeks (buccal), palate (palatine), tongue dorsum and ventrum",
                    secretion: "Predominantly mucous (constant baseline lubrication)",
                    contribution: "~10% total saliva; important for continuous mucosal protection"
                },
                salivarySecretionMechanism: {
                    primarySecretion: {
                        location: "Acinar cells",
                        stimulus: "Neurotransmitters (ACh, VIP, substance P, noradrenaline) bind receptors",
                        mechanism: {
                            parasympathetic: "ACh → M3 receptor → Gq → PLC → IP3 → Ca²⁺ release from ER → aquaporin 5 opening → water secretion; also activates CaM-kinase → exocytosis of secretory granules",
                            sympathetic: "Noradrenaline → β-adrenergic → cAMP → PKA → exocytosis of protein-rich secretion (smaller volume)"
                        },
                        ionComposition: "Plasma-like: Na⁺ 140, K⁺ 5, Cl⁻ 110, HCO₃⁻ 20 mmol/L; slightly hyperosmotic"
                    },
                    ductalModification: {
                        location: "Striated duct cells (highly metabolically active; abundant mitochondria for Na⁺/K⁺ ATPase)",
                        process: {
                            sodiumAbsorption: "Na⁺ absorbed via apical ENaC channels; exits basolaterally via Na⁺/K⁺ ATPase",
                            chlorideAbsorption: "Cl⁻ follows Na⁺ passively",
                            bicarbonateSecretion: "HCO₃⁻ secreted into lumen (AE2 exchanger); raises pH",
                            potassium: "K⁺ secreted into lumen (ROMK channels)",
                            waterImpermeable: "Striated ducts are water-impermeable → final saliva is HYPOTONIC to plasma"
                        },
                        result: "Final saliva: Na⁺ 15-30, K⁺ 15-25, Cl⁻ 15-25, HCO₃⁻ 15-55 mmol/L; hypotonic (150-290 mOsm/kg vs plasma 290)"
                    },
                    flowRateEffect: {
                        low: "At low flow (resting): more ductal modification time → very hypotonic, high K⁺, lower HCO₃⁻",
                        high: "At high flow (stimulated): less time for modification → more plasma-like, higher HCO₃⁻, more isotonic"
                    }
                }
            },

            salivaComposition: {
                overview: "Saliva is a complex biological fluid with digestive, protective, lubricating, and antimicrobial functions",
                water: "99.5% water",
                proteins: {
                    salivaryAlphaAmylase: {
                        alternativeNames: "Ptyalin; salivary amylase; AMY1",
                        concentration: "~100-250 μg/ml (most abundant salivary protein)",
                        synthesis: "AMY1 gene; multiple copies (copy number variation correlates with starch adaptation)",
                        mechanism: "Retaining double displacement; cleaves α-1,4 glycosidic bonds via Asp197 (nucleophile) + Glu233 (acid/base); cannot cleave α-1,6 branches",
                        products: "Maltose, maltotriose, limit dextrins",
                        optimalPH: "6.7-7.0",
                        optimalTemp: "37°C",
                        cofactors: "Cl⁻ (allosteric activator), Ca²⁺ (structural stability)",
                        inactivation: "pH <4 in stomach; food bolus interior may be protected until acid penetrates",
                        percentDigestion: "~5% of starch converted in mouth; important initial step"
                    },
                    lingualLipase: {
                        source: "Von Ebner's glands on tongue (serous glands around circumvallate papillae)",
                        substrate: "Short and medium-chain triglycerides (C4-C12); sn-3 position",
                        optimalPH: "3.5-6.0 (acid-stable; continues active in stomach)",
                        significance: "Clinically important in neonates (pancreatic lipase immature); contributes ~10-30% lipid digestion in infants; ~10% in adults"
                    },
                    mucins: {
                        types: {
                            MUC5B: "High molecular weight gel-forming mucin; responsible for viscoelastic properties",
                            MUC7: "Smaller, soluble mucin; antimicrobial",
                            MUC1: "Membrane-bound; cell surface protection"
                        },
                        structure: "Heavily O-glycosylated; bottle-brush structure; sugar chains: ~80% by weight",
                        functions: [
                            "Lubrication of oral mucosa and food bolus (facilitates swallowing)",
                            "Viscoelastic gel coat on teeth (pellicle) - selective barrier",
                            "Protection against desiccation",
                            "Antimicrobial via MUC7 (agglutinates bacteria)"
                        ]
                    },
                    antimicrobialProteins: {
                        lysozyme: {
                            mechanism: "Hydrolyses β-1,4 bonds in peptidoglycan of bacterial cell walls (particularly Gram-positive)",
                            concentration: "~100-400 μg/ml",
                            additional: "Electrostatic disruption of bacterial membranes"
                        },
                        lactoferrin: {
                            mechanism: "Sequesters iron (bacteria require iron for growth); direct bactericidal activity at low pH",
                            roles: ["Antimicrobial", "Anti-inflammatory", "Antiviral", "Immunomodulatory"]
                        },
                        salivaryPeroxidase: {
                            system: "Peroxidase + SCN⁻ (thiocyanate) + H₂O₂ → OSCN⁻ (hypothiocyanate)",
                            action: "OSCN⁻ inhibits bacterial glycolysis enzymes → reduces acid production"
                        },
                        histatins: {
                            function: "Antifungal (against Candida); wound healing; antimicrobial",
                            unique: "Specific to humans and primates"
                        },
                        cystatins: {
                            function: "Cysteine protease inhibitors; protect against bacterial proteases",
                            calcium: "Stabilise calcium phosphate → prevent calculus formation"
                        },
                        immunoglobulins: {
                            sIgA: {
                                concentration: "~200 mg/L; predominant antibody in secretions",
                                structure: "Dimeric IgA + secretory component (protects from proteolysis)",
                                function: "Agglutinates bacteria and viruses; prevents adhesion to mucosa; first line immune defence"
                            }
                        }
                    },
                    other: {
                        proline_rich: "Bind tannins; inhibit tannin-mediated enzyme precipitation; tooth remineralisation",
                        statherin: "Inhibits spontaneous precipitation of calcium phosphate; promotes remineralisation",
                        growth_factors: "EGF (epidermal growth factor) - promotes mucosal healing; NGF"
                    }
                },
                electrolytes: {
                    bicarbonate: {
                        concentration: "15-55 mmol/L (increases with flow rate)",
                        function: "Major buffer; neutralises bacterial acids at tooth surface; raises salivary pH",
                        dental: "Protects enamel from demineralisation"
                    },
                    calcium: {
                        concentration: "~1.5 mmol/L (both ionised and protein-bound)",
                        function: "Maintains enamel integrity; tooth remineralisation; calcium phosphate supersaturation",
                        clinicalNote: "Calculus (tartar) forms when Ca²⁺ and PO₄³⁻ precipitate on tooth pellicle"
                    },
                    phosphate: {
                        function: "Tooth remineralisation; buffer system (H₂PO₄⁻/HPO₄²⁻)",
                        remineralisation: "Supersaturated calcium phosphate promotes enamel remineralisation after acid attack"
                    },
                    potassium: {
                        concentration: "~20 mmol/L (higher than plasma due to ductal secretion)",
                        function: "Normal cellular function; limited digestive role"
                    },
                    fluoride: {
                        function: "Incorporates into enamel crystal structure → fluorapatite (harder, more acid-resistant)"
                    }
                },
                pH: {
                    resting: "6.0-7.0",
                    stimulated: "7.0-7.8 (higher HCO₃⁻ at higher flow)",
                    diseased: "Reduced pH in caries-active individuals; xerostomia",
                    significance: "pH affects amylase activity; critical for enamel protection"
                },
                volume: {
                    resting: "0.3-0.5 ml/min (primarily submandibular)",
                    stimulated: "3-7 ml/min (parotid contributes ~50%)",
                    daily: "1-1.5 litres",
                    sleep: "Nearly zero (dry mouth in morning; ↑ caries risk)"
                }
            },

            salivationRegulation: {
                reflexes: {
                    unconditioned: {
                        stimulus: "Presence of food in mouth; mechanical stimulation of oral mucosa",
                        pathway: "Mechanoreceptors/chemoreceptors in oral mucosa → afferent CN V, VII, IX → salivatory nuclei in brainstem → efferent parasympathetic → salivary glands",
                        response: "Watery, enzyme-rich saliva (parasympathetic dominant)"
                    },
                    conditioned: {
                        stimulus: "Sight, smell, thought, sound of food (Pavlov's experiments)",
                        pathway: "Cortical association areas → hypothalamus → salivatory nuclei → parasympathetic efferents",
                        clinicalNote: "Destroyed in total anosmia; anticipatory salivation important for initial digestion readiness"
                    },
                    nausea: "Profuse watery saliva (to protect oesophageal mucosa from acidic vomit)"
                },
                autonomicControl: {
                    parasympathetic: {
                        nerves: "CN VII (to submandibular + sublingual via chorda tympani + submandibular ganglion); CN IX (to parotid via tympanic plexus + lesser petrosal + otic ganglion + auriculotemporal nerve)",
                        effect: "Profuse watery saliva; vasodilation; myoepithelial cell contraction (ejects stored secretion)",
                        neurotransmitters: "ACh (M3 receptors), VIP (vasoactive intestinal peptide)"
                    },
                    sympathetic: {
                        origin: "T1-T2 → superior cervical ganglion → postganglionic fibres follow blood vessels",
                        effect: "Small volume protein-rich viscous saliva; vasoconstriction → reduced blood supply → reduced volume",
                        neurotransmitters: "Noradrenaline (β-adrenergic receptors → cAMP → enzyme exocytosis)"
                    },
                    dualAutonomic: "Both systems stimulate salivation (unlike most organs); parasympathetic dominant for volume; sympathetic for protein content"
                },
                inhibition: {
                    sleep: "Near-total cessation",
                    dehydration: "Dry mouth (thirst sensation partly mediated by salivary reduction)",
                    anxiety: "Sympathetic dominance → vasoconstriction → reduced flow → dry mouth",
                    drugs: "Anticholinergics (atropine, antihistamines, antidepressants, antipsychotics) → xerostomia"
                }
            },

            bolusFormation: {
                definition: "A cohesive, well-lubricated, appropriately sized ball of chewed food ready for swallowing",
                process: {
                    phase1: "Initial chewing: incisors bite → canines tear → premolars crush → molars grind",
                    phase2: "Mixing: tongue positions food over molars repeatedly; buccinator holds food between teeth",
                    phase3: "Saliva incorporation: 3-4 grams of saliva per gram of food; mucin provides cohesion",
                    phase4: "Compression: tongue compresses bolus against hard palate into rounded mass",
                    phase5: "Positioning: tongue positions bolus on dorsum, tip elevated, posterior tongue drops for initiation of swallowing"
                },
                properties: {
                    cohesion: "Mucin crosslinks particles; prevents crumbling in pharynx",
                    lubrication: "Mucin reduces friction for passage through pharynx and oesophagus",
                    moisture: "Prevents choking and facilitates swallowing",
                    size: "~15-20ml optimal for swallowing; too large → choking; too small → inefficient"
                },
                individualVariation: "Chewing strokes per swallow varies enormously (5 to >50); increases with harder foods"
            },

            chemicalDigestionInMouth: {
                starchDigestion: {
                    enzyme: "Salivary alpha-amylase",
                    reaction: "Starch (amylose/amylopectin) + H₂O → maltose + maltotriose + limit dextrins (by α-amylase); α-1,4 bonds cleaved; α-1,6 branches not cleaved",
                    efficiency: "Only ~5-10% of starch digested; limited by short contact time (20-60s average oral transit)",
                    continuedActivity: "Amylase continues working inside food bolus in stomach until gastric acid penetrates; may digest 30-40% of starch if meal is mixed with acid-buffering foods",
                    detection: "Can detect starch → glucose conversion by prolonged chewing (crackers taste sweet after ~2 minutes)"
                },
                fatDigestion: {
                    enzyme: "Lingual lipase",
                    reaction: "Triglycerides (especially short and medium-chain) → diglycerides + fatty acids",
                    efficiency: "Minimal in adults; more important in neonates",
                    pH: "Lingual lipase is acid-stable; continues in stomach"
                },
                proteinDigestion: {
                    enzymes: "None (no proteases in saliva)",
                    note: "Mechanical disruption of food matrix releases proteins for subsequent gastric digestion"
                },
                pHConsiderations: "Saliva pH 6.7-7.4 is optimal for amylase; also above critical pH 5.5 for enamel protection"
            },

            clinicalApplications: {
                dentalCaries: {
                    mechanism: "S. mutans ferments sucrose → lactic acid → pH drops below 5.5 → enamel demineralisation",
                    riskFactors: "Frequent sugar consumption, poor oral hygiene, xerostomia, low salivary buffering",
                    prevention: "Fluoride (fluorapatite formation), saliva flow (rinses acid, remineralises), sugar restriction",
                    restoration: "Composite, amalgam, ceramic; severe: crown; nerve involved: root canal"
                },
                periodontalDisease: {
                    gingivitis: "Reversible gingival inflammation from plaque bacteria",
                    periodontitis: "Irreversible bone and attachment loss; leading cause of adult tooth loss",
                    mechanism: "Bacterial toxins + immune response → collagenase → periodontal ligament destruction → alveolar bone resorption",
                    systemicLinks: "Association with cardiovascular disease, diabetes, preterm birth, Alzheimer's"
                },
                xerostomia: {
                    definition: "Subjective feeling of dry mouth",
                    causes: ["Sjögren's syndrome (autoimmune destruction of salivary glands)", "Radiation therapy (salivary glands in field)", "Medications (hundreds of drugs with anticholinergic effects)", "Dehydration", "Ageing"],
                    consequences: ["Dysphagia (difficulty swallowing)", "Dysphonia (altered speech)", "Rampant caries", "Oral candidiasis", "Difficulty wearing dentures", "Loss of taste"],
                    treatment: "Pilocarpine (muscarinic agonist); artificial saliva; saliva substitutes; hydration"
                },
                oralMucositis: {
                    cause: "Chemotherapy and radiotherapy damage rapidly dividing oral epithelium",
                    features: "Painful ulceration → difficulty eating → malnutrition",
                    prevention: "Oral cryotherapy (ice chips during chemo); good hygiene; growth factors"
                },
                temporomandibularDisorder: {
                    definition: "Pain and dysfunction of temporomandibular joint and masticatory muscles",
                    features: "Jaw pain, clicking, limited opening, headache",
                    causes: "Bruxism, malocclusion, stress, trauma",
                    treatment: "Splint, physiotherapy, NSAIDs"
                },
                oralDrugDelivery: {
                    buccal: "Drug placed between cheek and gum; absorbed through buccal mucosa into systemic circulation (bypasses first-pass metabolism); examples: testosterone, buprenorphine",
                    sublingual: "Drug placed under tongue; highly vascular thin mucosa → rapid absorption; examples: GTN (angina), opioids, benzodiazepines",
                    advantage: "Rapid onset; bypass hepatic first-pass; suitable for unconscious patients"
                }
            },

            misconceptions: [
                "Saliva does not only lubricate food - it begins chemical digestion (amylase, lingual lipase) and has major antimicrobial and buffering functions",
                "Digestion does NOT start in the stomach - it begins in the mouth with salivary amylase digesting starch",
                "Not all teeth are the same - each type (incisors, canines, premolars, molars) has a distinct shape and function",
                "Salivary amylase is NOT inactivated immediately in stomach - inside a food bolus it may continue working until acid penetrates",
                "Chewing is not merely cultural/habitual - mastication has measurable effects on digestion efficiency, satiety signalling, and salivary enzyme exposure"
            ],

            examples: [
                {
                    name: "Tasting sweetness in bread after prolonged chewing",
                    explanation: "Salivary amylase converts starch → maltose → glucose over ~2 minutes of chewing; glucose stimulates sweet taste receptors"
                },
                {
                    name: "Pavlov's dogs salivating at a bell",
                    explanation: "Conditioned salivary reflex; cortical processing of sensory cues activates parasympathetic salivatory nuclei → watery enzyme-rich saliva before food arrives"
                },
                {
                    name: "Dry mouth before public speaking",
                    explanation: "Anxiety → sympathetic activation → vasoconstriction of salivary gland blood supply → reduced saliva volume → xerostomia"
                },
                {
                    name: "Premature infants and fat absorption",
                    explanation: "Pancreatic lipase immature → lingual lipase (acid stable) provides critical fat digestion for breast milk absorption"
                }
            ]
        };
        return content;
    }

    handleEsophagus(problem) {
        const content = {
            topic: "Esophagus and Swallowing",
            category: 'digestive_organs',
            summary: "The esophagus is a 25cm collapsible muscular tube connecting the pharynx to the stomach, passing through the neck, posterior mediastinum, and diaphragm. It performs no chemical digestion but propels food boluses by peristalsis in 8-20 seconds. Two sphincters (upper and lower) prevent air entry and acid reflux respectively. Swallowing (deglutition) is a complex reflex involving over 25 muscles coordinated by the swallowing centre in the medulla oblongata.",

            anatomy: {
                dimensions: {
                    length: "~25 cm in adults (10 cm in newborns)",
                    diameter: "~2 cm collapsed; ~4 cm maximum distension",
                    locations: "Cervical (C6-T1), thoracic (T1-T10), abdominal (below diaphragm, ~1-4cm)"
                },
                course: {
                    starts: "Continuous with pharynx at C6 (cricopharyngeal muscle / upper esophageal sphincter)",
                    cervical: "Posterior to trachea; left of midline; relations: trachea (anterior), vertebral column (posterior), thyroid gland and carotid sheaths (lateral)",
                    thoracic: {
                        superior: "Posterior to tracheal bifurcation",
                        middle: "Crosses aortic arch (right to left deviation); posterior to left main bronchus",
                        inferior: "Anterior to descending thoracic aorta; enters esophageal hiatus at T10"
                    },
                    abdominal: "Short segment (1-4cm) below diaphragm; joins stomach at cardia/gastroesophageal junction (GEJ) at T11",
                    deviations: "Slight left deviation in neck; right of midline in mid-thorax; back to left in lower thorax"
                },
                narrowings: {
                    first: "Junction with pharynx at cricopharyngeal muscle (UES); ~15cm from incisors; C6 level",
                    second: "Aortic arch impression; ~22-25cm from incisors; T4 level",
                    third: "Left main bronchus crossing; ~27cm from incisors",
                    fourth: "Esophageal hiatus of diaphragm (LES region); ~40cm from incisors; T10 level",
                    clinicalNote: "These narrowings are sites where swallowed foreign bodies lodge and where esophageal carcinoma most commonly occurs"
                },
                wallLayers: {
                    mucosa: {
                        epithelium: "Non-keratinised stratified squamous epithelium (resists abrasion from food; unlike stomach's columnar)",
                        laminaPropria: "Loose connective tissue with scattered lymphocytes",
                        muscularissMucosae: "Thin layer of smooth muscle",
                        clinicalNote: "At GEJ: abrupt change from squamous → columnar (z-line/squamocolumnar junction); visible endoscopically as irregular 'Z-line'"
                    },
                    submucosa: {
                        content: "Dense connective tissue; esophageal mucous glands (secrete mucus for lubrication); Meissner's plexus (submucosal nerve plexus)",
                        glands: "Esophageal glands proper (throughout); esophageal cardiac glands (near GEJ and cricopharyngeus) - secrete alkaline mucus"
                    },
                    muscularisExterna: {
                        arrangement: "Inner circular + outer longitudinal layers (as throughout GI tract)",
                        upperThird: "Skeletal (voluntary) muscle - allows conscious initiation of swallowing",
                        middleThird: "Mixed skeletal and smooth muscle (transition zone)",
                        lowerThird: "Smooth (involuntary) muscle - controlled by enteric and autonomic nervous systems",
                        auerbach: "Myenteric plexus (Auerbach's plexus) between muscle layers; coordinates peristalsis",
                        clinicalNote: "In achalasia: loss of inhibitory neurons in myenteric plexus → failure of LES relaxation + impaired peristalsis"
                    },
                    outerLayer: {
                        type: "Adventitia (fibrous connective tissue) NOT serosa (no peritoneal covering except short abdominal segment)",
                        significance: "Lack of serosa means esophageal cancer spreads more readily to surrounding structures; surgical anastomoses more prone to leak"
                    }
                },
                sphincters: {
                    upperEsophagealSphincter: {
                        location: "Pharyngoesophageal junction; ~15cm from incisors",
                        anatomy: "Cricopharyngeal muscle (inferior constrictor of pharynx) + part of inferior pharyngeal constrictor + upper circular esophageal muscle",
                        muscle: "Skeletal (voluntary control possible, but reflexive at rest)",
                        restingPressure: "40-100 mmHg (high pressure zone maintains closure)",
                        function: "Prevents air swallowing (aerophagia); prevents regurgitation of esophageal content into pharynx",
                        opening: "Relaxes during swallowing (~0.2s before bolus arrives) and vomiting",
                        nerveSupply: "Vagus (recurrent laryngeal branch) + glossopharyngeal",
                        clinical: {
                            zenkerDiverticulum: "Posterior pharyngeal wall herniation above cricopharyngeus → food trapping → regurgitation → aspiration risk",
                            cricopharyngealBars: "Failure of cricopharyngeal relaxation → dysphagia"
                        }
                    },
                    lowerEsophagealSphincter: {
                        location: "Gastroesophageal junction; ~40cm from incisors; T10-T11 level",
                        anatomy: "Not an anatomically distinct sphincter; functional high-pressure zone created by: (1) intrinsic smooth muscle thickening, (2) diaphragmatic crura (extrinsic), (3) acute angle of His (flap valve mechanism), (4) intraabdominal esophageal segment (positive abdominal pressure aids closure)",
                        muscle: "Smooth muscle; autonomically controlled",
                        restingPressure: "10-35 mmHg above gastric pressure (normally 0-15 mmHg)",
                        function: "Prevents gastroesophageal reflux of stomach acid; must relax to allow food into stomach",
                        opening: {
                            normal: "Relaxes ~2-3s after swallowing begins; remains open until peristaltic wave arrives (8-10s); then closes",
                            TLESR: "Transient LES Relaxations (TLESR): random, meal-independent relaxations allowing gas venting (belching); pathologically frequent in GERD"
                        },
                        regulation: {
                            increase: "Gastrin, motilin, substance P, alpha-adrenergic, metoclopramide, high pH",
                            decrease: "Secretin, CCK, VIP, nitric oxide, beta-adrenergic, serotonin, progesterone (explains GERD in pregnancy), anticholinergics, calcium channel blockers, alcohol, chocolate, coffee, fat, peppermint"
                        },
                        clinical: {
                            GERD: "LES pressure insufficient + increased TLESRs → acid reflux → heartburn → esophagitis",
                            achalasia: "Loss of inhibitory neurons → LES fails to relax → food retention → esophageal dilation",
                            hiatalHernia: "Part of stomach herniates through esophageal hiatus → disrupts normal LES mechanism → GERD"
                        }
                    }
                },
                bloodSupply: {
                    cervical: "Inferior thyroid artery (from thyrocervical trunk)",
                    thoracic: "Direct branches of thoracic aorta; right bronchial artery; inferior thyroid artery",
                    abdominal: "Left gastric artery (branch of coeliac axis) + short gastric branches",
                    venous: {
                        cervical: "Inferior thyroid vein → brachiocephalic → SVC",
                        thoracic: "Azygos and hemiazygos veins → SVC",
                        abdominal: "Left gastric vein (coronary vein) → portal vein",
                        portosystemic: "Important porto-systemic anastomosis at GEJ; portal hypertension → varices here"
                    },
                    clinicalVarices: "Portal hypertension (cirrhosis) → portal blood diverted via left gastric → esophageal veins → azygos → SVC; submucosal varices → risk of catastrophic haemorrhage"
                },
                nerveSupply: {
                    parasympathetic: "Vagus nerves (CN X): left vagus → anterior esophageal plexus → anterior gastric nerve; right vagus → posterior esophageal plexus → posterior gastric nerve; controls peristalsis, LES, secretion",
                    sympathetic: "T1-T10 via sympathetic chain → esophageal plexus; reduces peristalsis (but not critical)",
                    enteric: "Myenteric plexus (Auerbach's) between muscle layers; intrinsic control of peristalsis can occur independently"
                }
            },

            swallowing: {
                overview: "Deglutition is one of the most complex reflexes in the human body, involving 25+ pairs of muscles, 5 cranial nerves, and precise coordination by the swallowing centre in the medulla. It occurs ~600 times per day (1x/min waking; 1x/5min sleeping).",
                phases: {
                    oralPreparatoryPhase: {
                        type: "Voluntary",
                        duration: "Variable (seconds to minutes)",
                        actions: [
                            "Mastication breaks food into particle sizes suitable for bolus formation",
                            "Saliva mixes with food particles (mucin provides cohesion)",
                            "Tongue manipulates food, tests texture and temperature",
                            "Lips and cheeks contain food in oral cavity",
                            "Bolus formed and positioned on tongue dorsum"
                        ],
                        control: "Voluntary cortical control; CN V (trigeminal), CN VII (facial), CN XII (hypoglossal)"
                    },
                    oralTransitPhase: {
                        type: "Voluntary (initiation) → Involuntary",
                        duration: "~1 second",
                        actions: [
                            "Tongue tip elevates and contacts hard palate anteriorly",
                            "Sequential tongue-palate contact moves posteriorly (peristaltic-like tongue wave)",
                            "Bolus propelled from oral cavity into oropharynx",
                            "Once bolus reaches anterior tonsillar pillars → involuntary swallowing reflex triggered"
                        ],
                        muscles: "Intrinsic and extrinsic tongue muscles; CN XII",
                        clinicalNote: "Neurological dysphagia often affects this phase (stroke, MND); aspiration risk if tongue control impaired"
                    },
                    pharyngealPhase: {
                        type: "Involuntary reflex",
                        duration: "~1 second",
                        trigger: "Bolus contact with pharyngeal mucosa → afferents CN IX, X → swallowing centre in medulla",
                        centralControl: "Nucleus tractus solitarius + nucleus ambiguus in medulla oblongata; sends coordinated signals to 25+ muscles via CN V, VII, IX, X, XII",
                        sequentialEvents: {
                            velopharyngealClosure: {
                                action: "Soft palate elevates (levator veli palatini) and posterior pharyngeal wall contracts (Passavant's ridge) → seals nasopharynx",
                                purpose: "Prevents nasal regurgitation",
                                timing: "First event (~0-50ms)"
                            },
                            laryngealProtection: {
                                action: "Larynx elevates and moves anteriorly (thyrohyoid shortens); epiglottis retroflexes over laryngeal inlet; arytenoids tilt anteriorly; true and false vocal cords adduct",
                                purpose: "Prevents aspiration into trachea",
                                timing: "~50-200ms; simultaneous with pharyngeal contraction",
                                apnea: "Brief respiratory pause (deglutition apnoea) prevents aspiration"
                            },
                            pharyngealConstriction: {
                                action: "Superior, middle, inferior pharyngeal constrictors contract sequentially from top to bottom",
                                purpose: "Generate pressure wave propelling bolus downward",
                                pressure: "Generates ~100-200 mmHg pressure wave"
                            },
                            UESOpening: {
                                action: "Cricopharyngeal muscle relaxes (inhibitory signal) AND hyoid/larynx elevation pulls pharyngeal wall up and forward (mechanical traction opens UES)",
                                timing: "Opens ~0.1s before bolus arrives; remains open ~0.5-1.0s",
                                purpose: "Allows bolus to enter esophagus"
                            }
                        },
                        clinicalNote: "Pharyngeal dysphagia common in stroke (lateral medullary syndrome particularly damages swallowing centre); MND, myasthenia gravis, Parkinson's"
                    },
                    esophagealPhase: {
                        type: "Involuntary",
                        duration: "8-20 seconds (liquids 8-10s; solids 15-20s)",
                        primaryPeristalsis: {
                            definition: "Peristaltic wave initiated by swallowing reflex; travels entire esophageal length",
                            mechanism: "Coordinated contraction of circular muscle above bolus + relaxation below → propulsive wave at 2-4 cm/s",
                            wave: "Progressive from UES to LES; takes ~8-15 seconds to traverse 25cm esophagus"
                        },
                        secondaryPeristalsis: {
                            definition: "Local peristaltic wave triggered by esophageal distension (bolus not cleared by primary peristalsis)",
                            stimulus: "Stretch receptors in esophageal wall → local myenteric reflex",
                            function: "Clearance mechanism; important for acid clearance in reflux",
                            independence: "Occurs even if extrinsic nerves severed (intrinsic enteric nervous system)"
                        },
                        tertiaryContractions: {
                            definition: "Non-propulsive, segmental contractions of smooth muscle portion",
                            significance: "Normal in elderly; excessive in esophageal motility disorders (corkscrew esophagus)",
                            clinical: "Associated with chest pain; may cause dysphagia"
                        },
                        LESRelaxation: {
                            timing: "LES begins to relax 2-3s after swallowing initiation (before peristaltic wave arrives)",
                            mechanism: "Vagal inhibitory fibres release NO and VIP → LES smooth muscle relaxes",
                            duration: "Remains relaxed ~8-10s as peristaltic wave approaches",
                            closure: "Peristaltic wave reaches LES → LES closes behind bolus → prevents reflux",
                            clinicalNote: "In achalasia: inhibitory neurons lost → LES does NOT relax → bolus cannot enter stomach"
                        }
                    }
                },
                motorControl: {
                    swallowingCentre: {
                        location: "Medulla oblongata (nucleus tractus solitarius + nucleus ambiguus)",
                        pattern: "Central pattern generator (CPG) - generates coordinated swallowing sequence automatically once triggered",
                        modulation: "Higher cortical input from sensorimotor cortex (can initiate voluntary swallow; modulates reflex)"
                    },
                    cranialNerves: {
                        CN5: "Trigeminal - jaw muscles (mastication), sensation from oral cavity",
                        CN7: "Facial - lip and cheek muscles, posterior tongue taste",
                        CN9: "Glossopharyngeal - pharyngeal sensation (triggers reflex), stylopharyngeus",
                        CN10: "Vagus - pharyngeal and esophageal muscles, laryngeal muscles, autonomics",
                        CN11: "Accessory - sternocleidomastoid (head position), trapezius",
                        CN12: "Hypoglossal - tongue muscles"
                    }
                }
            },

            peristalsis: {
                mechanism: {
                    lawOfIntestine: "Oral (above bolus) segment contracts; aboral (below bolus) segment relaxes; propels bolus aborally",
                    ascendingExcitation: "Distension → myenteric interneurons activate excitatory neurons orally → release ACh and substance P → circular muscle contracts above bolus",
                    descendingInhibition: "Distension → myenteric interneurons activate inhibitory neurons aborally → release NO and VIP → circular muscle relaxes below bolus",
                    wavePropagation: "Contraction/relaxation pattern propagates as wave at 2-4 cm/s"
                },
                neurochemistry: {
                    excitatory: {
                        transmitters: "Acetylcholine (ACh), substance P, NK-A",
                        receptors: "Muscarinic M2/M3 on smooth muscle → Gq → IP3/Ca²⁺ → contraction"
                    },
                    inhibitory: {
                        transmitters: "Nitric oxide (NO), VIP (vasoactive intestinal peptide), ATP",
                        mechanism: "NO → guanylyl cyclase → cGMP → PKG → myosin light chain phosphatase activation → smooth muscle relaxation"
                    }
                },
                characteristics: {
                    velocity: "2-4 cm/s in esophagus",
                    pressure: "Primary peristaltic wave: 30-180 mmHg",
                    gravity: "Works independently of gravity; can swallow upside down (tested in weightlessness)",
                    frequency: "1 peristaltic wave per swallow; secondary waves triggered by residual bolus"
                }
            },

            pathology: {
                GERD: {
                    fullName: "Gastroesophageal Reflux Disease",
                    prevalence: "10-20% of Western population; most common upper GI disorder",
                    mechanism: {
                        primary: "Increased frequency of transient LES relaxations (TLESRs); LES hypotension; impaired esophageal clearance (reduced secondary peristalsis)",
                        contributing: "Hiatal hernia (disrupts LES mechanisms); increased intraabdominal pressure (obesity, pregnancy); dietary triggers (fat, alcohol, caffeine, chocolate, peppermint)"
                    },
                    symptoms: {
                        typical: "Heartburn (retrosternal burning worse after meals, lying down, bending); regurgitation (acid taste in mouth); water brash (salivary hypersecretion)",
                        atypical: "Chronic cough, laryngitis, hoarseness, asthma, non-cardiac chest pain"
                    },
                    complications: {
                        esophagitis: "Mucosal erosions → bleeding → iron deficiency anaemia",
                        stricture: "Fibrosis from chronic inflammation → dysphagia",
                        barretts: "Squamous → columnar metaplasia (specialized intestinal metaplasia); 0.5-1% per year risk of adenocarcinoma",
                        adenocarcinoma: "Incidence rising steeply in Western countries; associated with obesity and GERD"
                    },
                    diagnosis: "24-hour pH monitoring (gold standard); manometry; endoscopy (complications)",
                    treatment: {
                        lifestyle: "Weight loss; elevate bed head; avoid triggers; no eating 3h before bed",
                        medical: "PPIs (first-line); H2 antagonists; alginate-antacids (Gaviscon) for on-demand",
                        surgical: "Laparoscopic Nissen fundoplication (wraps fundus around LES to strengthen it)"
                    }
                },
                achalasia: {
                    definition: "Primary esophageal motility disorder characterised by failure of LES relaxation and loss of peristalsis",
                    mechanism: "Autoimmune destruction of inhibitory neurons (NO, VIP-ergic) in myenteric plexus → LES maintains tonic contraction + no peristalsis; may follow viral infection (HSV, varicella)",
                    types: {
                        type1: "Classic achalasia: minimal pressurisation; no peristalsis",
                        type2: "Panesophageal pressurisation; best response to treatment",
                        type3: "Spastic achalasia: premature/spastic contractions; chest pain prominent"
                    },
                    symptoms: "Progressive dysphagia to solids and liquids (contrast with esophageal stricture/carcinoma which is solids then liquids); regurgitation; chest pain; weight loss",
                    diagnosis: "High-resolution manometry (HRM) - gold standard; shows integrated relaxation pressure > 15 mmHg; barium swallow (bird's beak appearance); endoscopy to exclude cancer",
                    treatment: {
                        endoscopic: "Pneumatic balloon dilation (stretches LES); POEM (per-oral endoscopic myotomy - cuts circular muscle)",
                        surgical: "Heller cardiomyotomy + partial fundoplication",
                        medical: "Calcium channel blockers, PDE5 inhibitors (temporary); botulinum toxin injection (temporary; elderly/unfit patients)"
                    }
                },
                esophagealCancer: {
                    types: {
                        squamousCell: {
                            location: "Middle and upper esophagus",
                            riskFactors: "Smoking, alcohol, achalasia, hot beverages, nutritional deficiencies",
                            trend: "Declining in developed world"
                        },
                        adenocarcinoma: {
                            location: "Lower esophagus and GEJ",
                            riskFactors: "GERD, Barrett's esophagus, obesity, smoking",
                            trend: "Rapidly increasing in developed world; one of fastest-rising cancers"
                        }
                    },
                    symptoms: "Progressive dysphagia (solids → liquids); weight loss; odynophagia; later: hoarseness, cough (recurrent laryngeal nerve or tracheal invasion)",
                    staging: "TNM; endoscopic ultrasound for T and N staging; CT/PET for M staging",
                    treatment: "Neoadjuvant chemoradiotherapy + esophagectomy (Ivor-Lewis, McKeown) for resectable; palliative for advanced"
                },
                esophagealWebsRings: {
                    plummerVinson: "Postcricoid esophageal web + iron deficiency anaemia + dysphagia; F > M; premalignant",
                    schatzki: "Lower esophageal mucosal ring at SCJ → episodic solid food dysphagia (steak house syndrome)"
                },
                esophagealDiverticula: {
                    zenker: "Posterior pharyngeal wall; above UES (cricopharyngeal prominence); food trapping; regurgitation; aspiration risk",
                    midesophageal: "Traction (from external inflammation/fibrosis); rarely symptomatic",
                    epiphrenic: "Near LES; associated with motility disorders (achalasia)"
                },
                dysphagia: {
                    definition: "Difficulty swallowing",
                    types: {
                        oropharyngeal: "Problem initiating swallow; food sticks in throat; nasal regurgitation; aspiration; causes: stroke, MND, myasthenia gravis, Parkinson's, pharyngeal tumour",
                        esophageal: "Food sticks in chest; causes: GERD stricture, carcinoma, achalasia, motility disorders"
                    },
                    investigation: "Videofluoroscopy (modified barium swallow for oropharyngeal); barium swallow; endoscopy; manometry"
                }
            },

            clinicalAssessment: {
                endoscopy: {
                    landmarks: {
                        UES: "15cm from incisors",
                        aorticArch: "22-25cm",
                        leftBronchus: "27cm",
                        GEJ: "~40cm"
                    },
                    zLine: "Squamocolumnar junction visible as irregular line; should be at diaphragmatic hiatus; if above = Barrett's suspect",
                    Seattle: "Barrett's surveillance: 4-quadrant biopsies every 2cm (Seattle protocol)"
                },
                manometry: {
                    conventional: "Measures pressure at fixed points",
                    highResolution: "36 solid-state sensors at 1cm intervals; generates pressure topography plots (Clouse plots); Chicago Classification for motility disorders"
                },
                phMonitoring: {
                    twentyFourHour: "DeMeester score: total acid exposure time, number of reflux episodes; normal <4% acid exposure",
                    impedance: "Combined pH-impedance detects acid AND non-acid reflux"
                }
            },

            examples: [
                {
                    name: "Swallowing upside down",
                    explanation: "Demonstrates that peristalsis is active muscular propulsion not passive gravity-dependent flow; used to prove this concept in early physiology experiments"
                },
                {
                    name: "Choking on food",
                    explanation: "Failure of epiglottic retroflexion or arytenoid adduction → food enters larynx → cough reflex; chronic silent aspiration in neurological dysphagia can cause aspiration pneumonia"
                },
                {
                    name: "Heartburn after a large fatty meal",
                    explanation: "Fat → CCK release → decreased LES pressure + increased TLESRs → acid reflux into esophagus → stimulates chemoreceptors → perceived as retrosternal burning"
                }
            ]
        };
        return content;
    }

    handleStomach(problem) {
        const content = {
            topic: "Stomach and Gastric Digestion",
            category: 'digestive_organs',
            summary: "The stomach is a J-shaped muscular organ serving as a reservoir, mechanical churner, and chemical processor. Its highly acidic environment (pH 1.5-2) and the enzyme pepsin together denature and begin hydrolyzing dietary proteins. Coordinated churning converts solid food into semi-liquid chyme over 2-4 hours. Intricate hormonal and neural feedback systems regulate gastric secretion to precisely match output to digestive need.",

            anatomy: {
                location: "Left hypochondrium and epigastric region; lies between esophagus (at cardia, T11) and duodenum (at pylorus, L1)",
                dimensions: {
                    empty: "~25ml capacity; J-shaped muscular tube",
                    full: "~1-1.5 litres typical; up to 4 litres maximum distension",
                    length: "~25-30cm when distended"
                },
                regions: {
                    cardia: {
                        location: "~2-3cm zone immediately below gastroesophageal junction",
                        features: "Cardiac glands (mucous; secrete alkaline mucus)",
                        function: "Transition zone; anchored to esophagus"
                    },
                    fundus: {
                        location: "Dome-shaped superior portion; above cardioesophageal junction level; left side",
                        features: "Oxyntic glands (contain parietal cells, chief cells)",
                        function: "Stores swallowed gas (air pocket); relaxes to accommodate incoming food (receptive relaxation)",
                        gastricBubble: "Gas-filled fundus visible on upright chest X-ray"
                    },
                    body: {
                        location: "Central, largest region; between fundus and antrum",
                        features: "Most numerous oxyntic glands; maximum concentration of parietal and chief cells",
                        function: "Primary site of HCl, pepsinogen, intrinsic factor secretion; mechanical churning"
                    },
                    antrum: {
                        location: "Distal third; connects to pyloric canal",
                        features: "Pyloric glands (contain G-cells secreting gastrin, D-cells secreting somatostatin, mucous cells)",
                        function: "Powerful peristaltic contractions for mixing and grinding; gastrin secretion; pH sensing",
                        pyloric: "Thick muscular wall; antral pump grinds food against closed pylorus"
                    },
                    pylorus: {
                        location: "Most distal portion; connects to duodenum at L1",
                        features: "Pyloric sphincter: 3cm band of thickened circular smooth muscle",
                        function: "Regulates rate of gastric emptying; prevents duodenogastric reflux",
                        pyloric: {
                            restingPressure: "~10-15 mmHg above duodenal",
                            opening: "Relaxes briefly to squirt ~1-3ml chyme into duodenum per peristaltic wave",
                            regulation: "CCK, secretin, duodenal distension all inhibit pyloric opening"
                        }
                    }
                },
                wallLayers: {
                    mucosa: {
                        epithelium: "Simple columnar epithelium (mucous surface cells); replaced every 3-5 days",
                        gastricPits: "Deep invaginations (pits) throughout mucosa; gastric glands open into pits",
                        rugae: "Longitudinal mucosal folds visible when stomach empty; flatten on distension; increase surface area",
                        surface_mucous_cells: "Line surface and pits; produce thick, alkaline (pH 7) mucus layer (100-200 μm thick)"
                    },
                    submucosa: "Dense connective tissue; blood vessels; lymphatics; Meissner's plexus",
                    muscularisExterna: {
                        inner: "Oblique muscle layer (unique to stomach; not present in rest of GI tract) - allows complex churning movements",
                        middle: "Circular muscle layer",
                        outer: "Longitudinal muscle layer",
                        function: "Three layers allow vigorous mixing, grinding, and sieving of food"
                    },
                    serosa: "Visceral peritoneum; covers most of stomach; attached to omentum"
                },
                gastricGlands: {
                    location: "Open into base of gastric pits; vary by region",
                    oxynticGlands: {
                        region: "Fundus and body (80% of stomach)",
                        cellTypes: {
                            surfaceMucousCells: {
                                location: "Surface and pit epithelium",
                                secretion: "Mucus and bicarbonate",
                                function: "Protect mucosa; renew every 3-7 days from stem cells in isthmus"
                            },
                            mucousNeckCells: {
                                location: "Neck of gland (isthmus region)",
                                secretion: "Soluble mucus (less viscous than surface mucus)",
                                function: "Lubrication; stem cell niche (give rise to other cell types)",
                                note: "Distinct from surface mucous cells in morphology and secretion"
                            },
                            chiefCells: {
                                location: "Base of fundic glands",
                                secretion: "Pepsinogen (most importantly), gastric lipase, leptin",
                                morphology: "Basophilic cytoplasm (abundant rough ER for protein synthesis); large secretory granules",
                                stimulation: "Gastrin, ACh (vagus), secretin; also acid (paracrine)",
                                clinicalNote: "Chief cell loss in autoimmune metaplastic atrophic gastritis → pepsinogen deficiency"
                            },
                            parietalCells: {
                                alternativeNames: "Oxyntic cells",
                                location: "Mid-region of fundic glands; largest gastric cells",
                                secretion: "HCl (primary); intrinsic factor; bicarbonate (into blood)",
                                morphology: "Deeply eosinophilic (abundant mitochondria - ~40% cell volume for energy-intensive HCl secretion); intracellular canalicular system (massively expanded apical membrane when stimulated)",
                                HClSecretion: {
                                    unstimulated: "H⁺/K⁺ ATPase (proton pump) in tubulovesicle membranes within cell cytoplasm",
                                    stimulated: "Tubulovesicles fuse with apical canalicular membrane → surface area increases 50-100x → proton pumps active at luminal surface",
                                    mechanism: [
                                        "CO₂ + H₂O → H₂CO₃ (catalysed by carbonic anhydrase II)",
                                        "H₂CO₃ → H⁺ + HCO₃⁻",
                                        "H⁺ pumped into canaliculus via H⁺/K⁺ ATPase (exchanges 1 H⁺ out for 1 K⁺ in)",
                                        "K⁺ recycled back to lumen via KCNQ1/KCNE2 K⁺ channel",
                                        "Cl⁻ secreted into canaliculus via CFTR and ClC-2 channels",
                                        "H⁺ + Cl⁻ = HCl in gastric lumen",
                                        "HCO₃⁻ exits basolaterally via Cl⁻/HCO₃⁻ exchanger AE2 into blood",
                                        "Blood HCO₃⁻ rise = 'alkaline tide' (measurable post-meal)"
                                    ],
                                    concentration: "Secreted HCl: 160 mmol/L; pH 0.8 (most acidic body secretion)"
                                },
                                intrinsicFactorSecretion: {
                                    what: "Glycoprotein (80 kDa); binds vitamin B12 with high affinity",
                                    when: "Co-secreted with HCl; also stimulated by gastrin, ACh, histamine",
                                    purpose: "Protects B12 from digestion; delivers B12 to cubilin receptor in terminal ileum",
                                    deficiency: "Pernicious anaemia (autoimmune): anti-parietal cell antibodies + anti-intrinsic factor antibodies → no IF → B12 malabsorption → megaloblastic anaemia + subacute combined degeneration of cord"
                                },
                                stimulation: {
                                    receptors: {
                                        histamineH2: "H2 receptor → Gs → cAMP → PKA → H⁺/K⁺ ATPase insertion into canalicular membrane",
                                        gastrin: "CCK-B receptor → Gq → IP3/Ca²⁺ (direct) + histamine release from ECL cells (indirect - major pathway)",
                                        ACh: "M3 receptor → Gq → IP3/Ca²⁺"
                                    },
                                    potentiation: "All three signals (histamine, gastrin, ACh) are synergistic (much greater than additive)",
                                    ECLcells: "Enterochromaffin-like (ECL) cells are critical intermediaries: gastrin + vagal stimulation → ECL cells release histamine → paracrine → H2 receptors on adjacent parietal cells"
                                },
                                drugs: {
                                    PPIs: "Omeprazole, lansoprazole, esomeprazole; irreversibly bind active H⁺/K⁺ ATPase; most effective acid suppression; need new pump synthesis for recovery",
                                    H2Blockers: "Ranitidine, famotidine; block H2 receptor; less potent than PPIs; faster onset",
                                    antacids: "Neutralise secreted acid; symptom relief only"
                                }
                            },
                            ECLcells: {
                                fullName: "Enterochromaffin-like cells",
                                location: "Distributed among parietal cells in fundus/body",
                                secretion: "Histamine",
                                stimulation: "Gastrin (CCK-B receptor), vagal ACh",
                                mechanism: "Histamine released → paracrine to adjacent parietal cells → H2 receptors → major stimulator of HCl",
                                long_term: "Chronic hypergastrinaemia (e.g., omeprazole use, pernicious anaemia) → ECL cell hyperplasia → type 1 gastric carcinoid tumours"
                            }
                        }
                    },
                    pyloricGlands: {
                        region: "Antrum and pylorus",
                        cellTypes: {
                            Gcells: {
                                location: "Antral mucosa; open to lumen (luminal sensing)",
                                secretion: "Gastrin (G-17 predominantly in antrum)",
                                stimulation: "Amino acids/peptides in lumen; gastric distension; vagal GRP; alkaline pH",
                                inhibition: "Luminal pH <2 (feedback loop); somatostatin from adjacent D-cells; secretin",
                                clinicalNote: "H. pylori raises antral pH → removes acid feedback inhibition → hypergastrinaemia → acid hypersecretion → peptic ulcers"
                            },
                            Dcells: {
                                location: "Scattered in antrum and fundus",
                                secretion: "Somatostatin",
                                function: "Paracrine inhibition of G-cells (inhibits gastrin) and parietal cells; local feedback brake",
                                stimulation: "Acid (pH <2), gastrin, CCK"
                            },
                            mucousCells: {
                                secretion: "Alkaline mucus; protects antral mucosa; differs from fundic gland mucus"
                            }
                        }
                    }
                },
                bloodSupply: {
                    lesserCurvature: "Left gastric artery (directly from coeliac axis) + right gastric artery (from hepatic artery proper)",
                    greaterCurvature: "Left gastroepiploic artery (from splenic) + right gastroepiploic artery (from gastroduodenal)",
                    fundus: "Short gastric arteries (from splenic artery; 5-7 vessels)",
                    venous: "Corresponding veins → portal system; left gastric vein (coronary) → portal vein (site of portal-systemic varices)",
                    clinicalNote: "Rich blood supply allows extensive gastric surgery; 4 separate arterial sources"
                }
            },

            gastricJuice: {
                composition: {
                    HCl: {
                        concentration: "~160 mM; pH 1.5-2.0 (stimulated); pH 3-5 (resting)",
                        volume: "2-3 litres secreted daily",
                        functions: [
                            "Denatures dietary proteins (breaks non-covalent bonds → unfolds tertiary structure → exposes peptide bonds for pepsin)",
                            "Activates pepsinogen → pepsin (autocatalytic below pH 5)",
                            "Kills most swallowed bacteria (antimicrobial barrier)",
                            "Maintains optimal pH for pepsin activity (1.5-2.5)",
                            "Converts Fe³⁺ → Fe²⁺ (absorbable form)",
                            "Stops salivary amylase activity (denaturation)"
                        ]
                    },
                    pepsinogen: {
                        isoforms: "Pepsinogen A (PGA: 5 isoforms) from chief cells in fundus/body; Pepsinogen C (PGC/gastricsin) from pyloric and Brunner's glands",
                        activation: {
                            byHCl: "pH <5.0: HCl protonates and destabilises activation peptide; reveals active site",
                            autocatalytic: "Active pepsin cleaves more pepsinogen (positive feedback; rapid activation below pH 2)",
                            pepsinTypes: "Active pepsin A (optimum pH 1.5-2.5); pepsin C/gastricsin (optimum pH ~3.5)"
                        },
                        serum: "Serum pepsinogen I and II measurable; PGI:PGII ratio decreases in atrophic gastritis (surrogate marker)"
                    },
                    mucus: {
                        types: {
                            visibleMucusLayer: "Adherent unstirred gel layer ~100-200 μm thick; covers gastric mucosa",
                            luminalMucus: "Soluble, non-gel-forming; mixes with gastric content"
                        },
                        composition: "MUC5AC (dominant gastric mucin); forms disulfide-bonded gel by polymerisation",
                        bicarbonate: "HCO₃⁻ secreted by surface mucous cells into mucus layer; maintains pH 6-7 immediately adjacent to mucosa (gradient: pH 2 in lumen → pH 7 at mucosa surface)",
                        barrier: "Mucus-bicarbonate barrier: physical + chemical protection against self-digestion",
                        prostaglandins: "PGE2 and PGI2 stimulate mucus and HCO₃⁻ secretion + mucosal blood flow (cytoprotective); NSAIDs inhibit COX → reduce prostaglandins → impair mucosal defence"
                    },
                    intrinsicFactor: "Glycoprotein from parietal cells; see above",
                    water: "Vast majority (~98%) of gastric juice is water"
                }
            },

            gastricSecretionPhases: {
                overview: "Gastric secretion is divided into three phases based on the location of the stimulus, but all three occur simultaneously during a meal",
                cephalicPhase: {
                    stimulus: "Sight, smell, taste, thought, chewing of food (before food reaches stomach)",
                    pathway: {
                        CNS: "Cerebral cortex and hypothalamus process sensory inputs",
                        vagus: "Dorsal motor nucleus of vagus → vagal efferents → enteric nervous system → gastric glands",
                        direct: "Vagal ACh directly stimulates parietal cells (M3 receptors) and chief cells",
                        indirect: "Vagal GRP (gastrin-releasing peptide) from vagal terminals → G-cells → gastrin release"
                    },
                    magnitude: "~30-40% of total meal-stimulated secretion",
                    clinical: "Sham feeding (chew and spit without swallowing) stimulates cephalic phase secretion (used in research); Pavlov's demonstration in dogs"
                },
                gastricPhase: {
                    stimulus: "Food in stomach (distension, peptides, amino acids)",
                    mechanisms: {
                        distension: "Stretch receptors → vagovagal long reflex (vagal afferents → brainstem → vagal efferents) AND short local reflex (myenteric plexus) → ACh → parietal and chief cells",
                        chemostimulation: "Amino acids and small peptides → G-cells → gastrin → ECL histamine → parietal cells",
                        caffeine: "Directly stimulates gastric secretion (reason coffee causes heartburn)"
                    },
                    magnitude: "~50-60% of total meal-stimulated secretion",
                    duration: "Continues as long as food remains in stomach"
                },
                intestinalPhase: {
                    stimulus: "Chyme in small intestine",
                    early_stimulatory: {
                        mechanism: "Partially digested protein in duodenum → small amount of gastrin from duodenal G-cells → minor stimulation",
                        magnitude: "~5-10% of total secretion"
                    },
                    inhibitory: {
                        enterogastricReflex: "Acid, fat, hypertonic solutions, distension in duodenum → neural reflex (via enteric and vagal pathways) → inhibit gastric secretion and motility",
                        hormones: {
                            secretin: "Released by duodenal S-cells in response to acid → directly inhibits parietal cells + inhibits gastrin release",
                            CCK: "Released by I-cells in response to fat/protein → inhibits gastric motility (delays emptying); minor direct inhibition of acid",
                            GIP: "Released by K-cells in response to glucose and fat → inhibits gastric acid",
                            somatostatin: "Released by D-cells throughout GI tract in response to acid → major paracrine inhibitor"
                        },
                        function: "Prevents duodenum from being overwhelmed by excessive acid; allows time for pancreatic neutralisation"
                    }
                }
            },

            proteinDigestion: {
                overview: "The stomach accomplishes approximately 10-15% of total protein digestion, producing large polypeptides that are further processed in the small intestine",
                step1_denaturation: {
                    agent: "HCl (pH 1.5-2)",
                    mechanism: "Acid protonates charged residues (His, Glu, Asp, Lys, Arg); disrupts hydrogen bonds and ionic interactions; breaks quaternary and tertiary structure",
                    result: "Unfolded, linearised polypeptide chain with exposed peptide bonds",
                    importance: "Essential for pepsin access to peptide bonds buried in folded protein; also releases bound micronutrients"
                },
                step2_pepsinActivation: {
                    precursor: "Pepsinogen (44 kDa) → pepsin (35 kDa)",
                    activation: "HCl and active pepsin cleave activation propeptide (64 aa)",
                    optimum: "pH 1.5-2.5 (aspartic protease active only in acidic environment)",
                    inactivation: "Irreversibly inactivated at pH >5 (in duodenum); pancreatic juice pH 7.5-8.8 ensures complete inactivation"
                },
                step3_proteinHydrolysis: {
                    enzyme: "Pepsin (aspartic protease; catalytic Asp32 + Asp215)",
                    substrate: "Denatured proteins; peptide bonds N-terminal to aromatic residues (Phe, Tyr, Trp) and Leu",
                    mechanism: {
                        general: "Acid-base catalysis: Asp32 acts as base (removes proton from water); Asp215 acts as acid (protonates nitrogen of scissile peptide bond); transition state stabilised by oxyanion hole",
                        type: "Endopeptidase (cleaves internal peptide bonds, not terminal)"
                    },
                    products: "Large polypeptides (3-100 amino acids); very few free amino acids at this stage",
                    percentComplete: "~10-15% of dietary protein digested in stomach"
                },
                step4_gastricLipase: {
                    note: "Gastric lipase (chief cells) also contributes ~10-15% of fat digestion; acid-stable; important when pancreatic lipase deficient"
                }
            },

            gastricMotility: {
                receptiveRelaxation: {
                    trigger: "Swallowing; food entering stomach",
                    mechanism: "Vago-vagal reflex + local enteric reflex → non-adrenergic non-cholinergic (NANC) neurons → VIP and NO → smooth muscle relaxation",
                    result: "Fundus accommodates 1.5L without significant pressure rise",
                    clinicalNote: "Impaired in post-oesophagectomy (vagotomy) → early satiety"
                },
                mixingWaves: {
                    origin: "Gastric pacemaker cells (ICC - interstitial cells of Cajal) in greater curvature, 3 contractions/min",
                    propagation: "Peristaltic waves travel from corpus to pylorus (antrum to pylorus)",
                    slurring: "Circular muscle contractions squeeze antrum → drives contents against closed pylorus → retropulsion (retrograde flow) → vigorous mixing",
                    sieving: "Only particles <1-2mm can pass through pylorus; larger particles retropulsed for further grinding"
                },
                gastricEmptying: {
                    rate: "~1-4 hours for mixed meal; liquids faster than solids",
                    pyloric: "Pylorus opens briefly ~1ml at a time; ~3 times per minute in antrum",
                    regulation: {
                        accelerate: ["Low fat, low protein diet", "Liquid consistency", "Isotonic solution", "Prokinetics (metoclopramide, domperidone, erythromycin)"],
                        delay: ["High fat content (CCK release → pyloric contraction)", "High protein", "Hypertonic or hypotonic solutions (osmoreceptors in duodenum)", "Acid in duodenum (secretin → inhibition)", "Distension of duodenum (enterogastric reflex)", "Exercise", "Opioids", "Diabetes (gastroparesis)"]
                    },
                    measurement: "Gastric emptying scintigraphy (99mTc-labelled meal); 13C-octanoic acid breath test; wireless motility capsule"
                },
                migratingMotorComplex: {
                    what: "Cyclic pattern of activity between meals (MMC); 90-120 minute cycle",
                    phase1: "Quiescence (~45 min)",
                    phase2: "Irregular contractions (~30 min)",
                    phase3: "Regular intense contractions (activity front; sweeps stomach and small intestine clean; 'housekeeper'; triggered by motilin from duodenum)",
                    purpose: "Clears indigestible residue from stomach (e.g., swallowed tablet remnants, desquamated cells)",
                    abolishedBy: "Eating (immediately stops MMC and initiates fed motor pattern)"
                }
            },

            mucosalProtection: {
                overview: "The stomach secretes 160 mM HCl capable of dissolving metal; multiple layers of defence prevent self-digestion",
                barriers: {
                    preEpithelial: {
                        mucusLayer: "Adherent gel; physical barrier; traps HCO₃⁻",
                        bicarbonateLayer: "pH gradient maintained: pH ~2 in lumen → pH ~7 at epithelial surface",
                        surfacePhospholipids: "Hydrophobic surface on mucus"
                    },
                    epithelial: {
                        tightJunctions: "Impermeable to H⁺ back-diffusion",
                        rapidRenewal: "Epithelium replaces every 3-7 days; even faster after injury",
                        restitution: "Rapid migration of adjacent cells to cover small defects (within minutes)",
                        prostaglandins: "PGE2 stimulates mucus, HCO₃⁻, mucosal blood flow; PGI2 vasodilation"
                    },
                    subEpithelial: {
                        mucosalBloodFlow: "Rich blood flow delivers O₂, nutrients; washes away back-diffused H⁺",
                        nervePeptides: "CGRP from sensory nerves → vasodilation (axon reflex) after mucosal injury"
                    }
                },
                breachOfDefence: {
                    NSAIDs: "COX inhibition → reduced PGE2/PGI2 → reduced mucus/HCO₃⁻/blood flow → mucosal vulnerability",
                    Hpylori: {
                        mechanism: "Urease produces NH₃ → neutralises acid locally (allows survival); cagA pathogenicity island virulence factor; VacA vacuolating cytotoxin; disrupts mucus; stimulates gastrin (via effect on D-cells and G-cells)",
                        gastritis: "Corpus gastritis → progressive parietal cell loss → achlorhydria; antral gastritis → hypergastrinaemia → hypersecretion",
                        prevalence: "50% of world population infected; most asymptomatic",
                        treatment: "Triple therapy: PPI + amoxicillin + clarithromycin (7-14 days); test of cure required"
                    },
                    pepticUlcers: {
                        types: {
                            gastric: "Usually in antrum or lesser curvature; H. pylori or NSAIDs; pain during meals (acid stimulates pain from exposed submucosa)",
                            duodenal: "D1 (duodenal cap); H. pylori causes 95%; acid hypersecretion; pain 2-3 hours post-meal; relieved by eating (buffers acid)"
                        },
                        complications: "Haemorrhage (Forrest classification for endoscopic risk stratification); perforation; penetration; gastric outlet obstruction",
                        investigation: "Endoscopy (OGD); H. pylori testing (CLO test, urea breath test, stool antigen, serology)",
                        treatment: "PPI + H. pylori eradication; stop NSAIDs; rarely surgery (haemostasis, perforation repair)"
                    }
                }
            },

            clinicalConditions: {
                gastroparesis: {
                    definition: "Delayed gastric emptying without mechanical obstruction",
                    causes: "Diabetes mellitus (autonomic neuropathy - most common), idiopathic, post-surgical (vagotomy), Parkinson's, scleroderma",
                    symptoms: "Nausea, vomiting (hours after eating), bloating, early satiety, weight loss",
                    diagnosis: "Gastric emptying scintigraphy (delayed at 4h)",
                    treatment: "Dietary (small meals, low fat/fibre); prokinetics (metoclopramide, domperidone, erythromycin); gastric electrical stimulation"
                },
                gastricCancer: {
                    types: "Adenocarcinoma (95%); GIST; lymphoma; NET",
                    riskFactors: "H. pylori (major risk); atrophic gastritis; intestinal metaplasia; smoking; salt-preserved foods; family history (CDH1 mutation in hereditary diffuse); blood group A",
                    Laurens: "Intestinal type (better prognosis; from metaplastic mucosa; H. pylori associated) vs diffuse type (worse; signet ring cells; linitis plastica; genetic; younger patients)",
                    staging: "CT/PET; EUS for T/N staging; diagnostic laparoscopy for peritoneal mets",
                    treatment: "Endoscopic resection (ESD/EMR) for early; gastrectomy (total/subtotal) + D2 lymphadenectomy for resectable; perioperative chemotherapy (FLOT regimen)"
                },
                bariatricSurgery: {
                    RYGB: "Roux-en-Y gastric bypass: small gastric pouch + bypass of most stomach and duodenum; T2DM remission before weight loss (hormonal: ↑GLP-1, ↑PYY); malabsorptive",
                    sleeve: "Sleeve gastrectomy: 80% stomach removed along greater curvature; ↓ghrelin; restrictive; simpler operation",
                    nutritional: "Monitor B12, iron, calcium, vitamin D, folate lifelong after RYGB"
                }
            },

            examples: [
                {
                    name: "Vomiting reveals gastric contents",
                    explanation: "Forceful retrograde expulsion of gastric contents; preceded by nausea, profuse salivation (alkaline saliva protects teeth from gastric acid), retching; mediated by vomiting centre in medulla via CN IX, X"
                },
                {
                    name: "Borborygmi (stomach rumbling)",
                    explanation: "Turbulent movement of gas and fluid during MMC phase III contractions; most prominent when stomach empty; motilin-driven"
                },
                {
                    name: "Blood group A and gastric cancer",
                    explanation: "Blood group A individuals have modestly higher gastric cancer risk (mechanism unclear; may relate to H. pylori mucosal interactions); classic epidemiological association first noted in 1950s"
                }
            ]
        };
        return content;
    }

    handleSmallIntestine(problem) {
        const content = {
            topic: "Small Intestine and Nutrient Absorption",
            category: 'digestive_organs',
            summary: "The small intestine (6-7 metres) is the masterpiece of digestive engineering. It receives chyme from the stomach and secretions from the liver and pancreas, completes chemical digestion of all macronutrients, and absorbs the resulting monomers together with water, electrolytes, and micronutrients. Its extraordinary surface area (~250 m² - the size of a tennis court) is achieved through three levels of mucosal amplification: plicae circulares, villi, and microvilli.",

            anatomy: {
                dimensions: {
                    length: "6-7 metres in vivo (9-10 metres post-mortem; muscle tone accounts for difference)",
                    diameter: "2.5-3 cm (smaller lumen than large intestine)",
                    surfaceArea: {
                        smooth: "~0.33 m²",
                        withPlicae: "~1 m²",
                        withVilli: "~10 m²",
                        withMicrovilli: "~250 m²",
                        amplification: "~600-700 fold amplification total"
                    }
                },
                regions: {
                    duodenum: {
                        length: "~25 cm (C-shaped)",
                        location: "Retroperitoneal (mostly fixed); wraps around head of pancreas",
                        naming: "Named from Latin 'duodecim digitorum' (12 finger-breadths)",
                        subdivisions: {
                            D1: "Superior part; first 2cm intraperitoneal (duodenal cap/bulb); pylorus → superior duodenal flexure",
                            D2: "Descending; ampulla of Vater on posteromedial wall (8-10cm from pylorus) → common bile duct + pancreatic duct",
                            D3: "Horizontal; crosses midline over L3 vertebra",
                            D4: "Ascending; duodenojejunal flexure (ligament of Treitz at L2)"
                        },
                        features: {
                            brunners: "Brunner's glands (submucosa only in duodenum): secrete alkaline mucus rich in HCO₃⁻; protect against acid; stimulated by secretin, vagus; hypertrophy in ZE syndrome",
                            ampullaOfVater: "Major duodenal papilla: confluence of common bile duct + main pancreatic duct; sphincter of Oddi controls flow; ~D2 posteromedial wall",
                            minorPapilla: "Minor duodenal papilla: accessory pancreatic duct opens here (~2cm above major papilla)",
                            villi: "Broad, leaf-shaped (compared to finger-shaped in jejunum); densely covered"
                        },
                        function: "Receives and neutralises gastric acid; site of major hormonal signalling (CCK, secretin release); begins complete digestion"
                    },
                    jejunum: {
                        length: "~2.5 metres (proximal 2/5 of small intestine after duodenum)",
                        location: "Upper left abdomen; freely mobile (mesentery)",
                        features: {
                            plicae: "Prominent plicae circulares (most prominent here; disappear distally)",
                            villi: "Tall, finger-shaped (~1mm); most numerous here",
                            calibre: "Wider lumen than ileum",
                            vascularity: "Pinker, more vascular appearance",
                            wallThickness: "Thicker wall than ileum"
                        },
                        function: "Major absorption: ~90% of carbohydrates, proteins, folate, iron, calcium, fat-soluble vitamins absorbed here"
                    },
                    ileum: {
                        length: "~3.5 metres (distal 3/5 of small intestine)",
                        location: "Lower right abdomen; terminates at ileocecal valve",
                        features: {
                            peyersPatches: "Lymphoid aggregates (MALT) in submucosa and mucosa; more numerous distally; covered by M-cells (specialised antigen-sampling cells)",
                            villi: "Shorter, more finger-shaped; less numerous than jejunum",
                            gobletCells: "More numerous than jejunum (more mucus production)",
                            plicae: "Less prominent than jejunum"
                        },
                        function: {
                            specific: "Only site of B12 absorption (via cubilin receptor) and bile salt reabsorption (ASBT transporter); crucial for enterohepatic circulation",
                            general: "Absorbs whatever jejunum missed; bile salts; fat-soluble vitamins"
                        },
                        ileocecalValve: "Ileocecal valve (Bauhin's valve): prevents large intestinal content from refluxing into ileum; regulates flow from ileum to cecum"
                    }
                },
                wallLayers: {
                    mucosa: {
                        epithelium: "Simple columnar epithelium with brush border",
                        cellTypes: {
                            enterocytes: {
                                proportion: "~80% of epithelial cells",
                                function: "Absorption; brush border enzyme expression; membrane digestion",
                                morphology: "Tall columnar; microvilli on apical surface; tight junctions laterally; basolateral transport proteins",
                                turnover: "Renewed every 3-5 days from stem cells in crypts"
                            },
                            gobletCells: {
                                proportion: "~15%; increase distally (more in ileum and colon)",
                                function: "Secrete mucins (MUC2 predominantly) for lubrication, protection, barrier",
                                regulation: "Cholinergic stimulation, cytokines, bacterial products"
                            },
                            enteroendocrineCells: {
                                proportion: "~1-2% but critically important",
                                types: "I-cells (CCK), S-cells (secretin), K-cells (GIP), L-cells (GLP-1, PYY), Mo-cells (motilin), EC-cells (serotonin)",
                                function: "Sense luminal content; secrete hormones regulating digestion"
                            },
                            panethCells: {
                                location: "Base of crypts of Lieberkühn",
                                function: "Innate immunity: secrete defensins (α-cryptdins), lysozyme, phospholipase A2 against luminal bacteria; regulate microbiome composition",
                                appearance: "Prominent eosinophilic (pink) secretory granules",
                                clinical: "Absent or abnormal in Crohn's disease; impaired innate immunity"
                            },
                            Mcells: {
                                location: "Overlying Peyer's patches (follicle-associated epithelium)",
                                function: "Sample luminal antigens; transcytose to underlying dendritic cells and B/T lymphocytes → mucosal immune induction",
                                noMicrovilli: "Reduced microvilli and glycocalyx → easier antigen sampling",
                                clinical: "Pathogens (Salmonella, Yersinia, poliovirus) exploit M-cells as entry route"
                            },
                            stemCells: {
                                location: "Base of crypts of Lieberkühn (Lgr5+ CBC stem cells)",
                                function: "Give rise to all intestinal epithelial cell types; responsible for rapid renewal",
                                clinical: "Chemotherapy targets rapidly dividing crypts → mucositis"
                            }
                        },
                        cryptsOfLieberkuhn: {
                            definition: "Tubular glands between villi; opening between villus bases",
                            contents: "Stem cells (base), Paneth cells (base), transit amplifying cells (middle), goblet cells, enteroendocrine cells",
                            function: "Crypts produce cells (proliferative zone); villi are absorptive surface (differentiated cells)"
                        },
                        lamina_propria: {
                            content: "Loose connective tissue; capillary network; lacteal (lymph capillary); smooth muscle fibres (from muscularis mucosae - contracts villus to pump lymph)",
                            immune: "Dense lymphocytes, plasma cells (IgA secretion), eosinophils, mast cells",
                            villous: {
                                blood: "Capillary network draining to mesenteric veins → portal system",
                                lymph: "Single central lacteal; blind-ended; receives chylomicrons",
                                smooth: "Muscularis mucosae extensions into villus core → villus contraction pumps lacteals"
                            }
                        }
                    },
                    submucosa: "Dense connective tissue; larger vessels; Meissner's (submucosal) plexus",
                    muscularisExterna: "Inner circular + outer longitudinal smooth muscle; Auerbach's (myenteric) plexus between layers; produces peristalsis and segmentation",
                    serosa: "Visceral peritoneum"
                },
                surfaceAreaAdaptations: {
                    plicaeCirculares: {
                        description: "Permanent circular folds of mucosa AND submucosa (unlike gastric rugae which are mucosa only); cannot be flattened",
                        height: "~8mm tall; spaced ~3-5mm apart",
                        location: "Most prominent in distal duodenum and jejunum; absent in distal ileum",
                        amplification: "3-fold surface area increase",
                        function: "Also slow passage of chyme (turbulence) and increase mixing with digestive juices"
                    },
                    villi: {
                        description: "Finger-like projections of MUCOSA only (~1mm tall × 0.1mm wide); covered by simple columnar epithelium",
                        number: "10-40 per mm² in jejunum",
                        shape: "Finger-shaped in jejunum; leaf/tongue-shaped in duodenum; shorter in ileum",
                        amplification: "10-fold additional increase",
                        movement: "Villi contract rhythmically (villus pump) driven by smooth muscle extensions from muscularis mucosae; pumps lymph through lacteals"
                    },
                    microvilli: {
                        description: "Tiny cytoplasmic projections (~1 μm long × 0.1 μm wide) on apical surface of each enterocyte; form the 'brush border'",
                        number: "~1000-3000 per enterocyte; ~200 million per mm² of mucosa",
                        structure: "Actin filament core (rootlets in terminal web); plasma membrane; glycocalyx coat",
                        amplification: "20-fold additional increase",
                        glycocalyx: "Thick carbohydrate coat (0.1-0.5 μm); immobilises brush border enzymes; also filter (prevents large molecules reaching membrane)",
                        brushBorderEnzymes: "Membrane-anchored enzymes embedded in brush border membrane for final digestion"
                    }
                }
            },

            digestion: {
                neutralisation: {
                    acid: "Gastric chyme pH ~2 enters duodenum; pancreatic bicarbonate (pH 7.5-8.5) neutralises → duodenal pH rises to 6-7",
                    importance: "Optimal pH for pancreatic enzymes (7.0-8.0) and brush border enzymes (~6.5)"
                },
                carbohydrateDigestion: {
                    pancreaticAmylase: {
                        substrate: "Starch (amylose: linear; amylopectin: branched) and glycogen",
                        action: "Cleaves α-1,4 glycosidic bonds ENDO-acting; cannot cleave α-1,6 branches",
                        products: "Maltose (30%), maltotriose (20%), limit dextrins (50%; contain α-1,6 branch points)",
                        amount: "~1.5-2g amylase/day; completes 80-85% of starch digestion",
                        secretion: "Stimulated by CCK and vagal ACh → acinar cells → pancreatic duct → duodenum"
                    },
                    brushBorderCarbohydrases: {
                        sucraseIsomaltase: {
                            complex: "Single gene product; post-translational cleavage into sucrase and isomaltase domains",
                            sucrase: "Cleaves sucrose (α-1,2 bond) → glucose + fructose",
                            isomaltase: "Cleaves limit dextrins (α-1,6 branch points) → glucose",
                            deficiency: "Sucrase-isomaltase deficiency (SID): autosomal recessive; sucrose and starch intolerance in infancy; osmotic diarrhoea"
                        },
                        maltaseGlucoamylase: {
                            action: "Cleaves maltose, maltotriose, and oligoglucose chains → glucose",
                            abundance: "Highest activity brush border enzyme; major workhorse for starch final digestion",
                            deficiency: "Rare; usually compensated by sucrase-isomaltase"
                        },
                        lactase: {
                            action: "Cleaves β-1,4 bond of lactose → glucose + galactose",
                            regulation: "Highest expression in neonates (breast milk); genetically programmed decline after weaning in most mammals",
                            persistence: "LCT gene enhancer (MCM6) variant → lactase persistence into adulthood; common in Northern Europeans, pastoral populations",
                            intolerance: {
                                mechanism: "Insufficient lactase → undigested lactose → colon → osmotic diarrhoea (lactose draws water) + bacterial fermentation → hydrogen, CO2, short-chain fatty acids → bloating, flatulence, cramps",
                                diagnosis: "H2 breath test (hydrogen from fermentation exhaled); lactose tolerance test",
                                treatment: "Lactase supplements; lactose-free milk; yoghurt (bacterial lactase pre-digests)"
                            }
                        },
                        trehalase: "Cleaves trehalose (mushroom sugar) → 2 glucose"
                    },
                    finalProducts: "Glucose, fructose, galactose (all monosaccharides)"
                },
                proteinDigestion: {
                    pancreaticsProteases: {
                        endopeptidases: {
                            trypsin: "Cleaves Arg↓ and Lys↓ (basic residues); pH opt 7.5-8.0; serine protease",
                            chymotrypsin: "Cleaves Phe↓, Tyr↓, Trp↓, Leu↓ (aromatic/bulky hydrophobic); pH opt 7.5-8.0",
                            elastase: "Cleaves Ala↓, Gly↓, Val↓, Ser↓ (small neutral); digests elastin and collagen"
                        },
                        exopeptidases: {
                            carboxypeptidaseA: "Removes C-terminal aromatic and aliphatic AA; metalloprotease (Zn²⁺)",
                            carboxypeptidaseB: "Removes C-terminal basic AA (Lys, Arg)"
                        },
                        combined: "Trypsin, chymotrypsin, elastase, carboxypeptidases together cleave most peptide bonds → oligopeptides (2-8 AA)"
                    },
                    brushBorderPeptidases: {
                        aminopeptidase: "Removes N-terminal AA from oligopeptides (exopeptidase)",
                        dipeptidase: "Cleaves dipeptides → 2 AA",
                        enterokinase: "Activates trypsinogen → trypsin (see Pancreas section)",
                        result: "Oligopeptides → free amino acids, dipeptides, tripeptides"
                    },
                    finalProducts: "Free amino acids (~70%), dipeptides and tripeptides (~30%)"
                },
                fatDigestion: {
                    emulsification: "Bile salts emulsify fat globules → ~1 micron droplets → 1000x surface area increase for lipase",
                    pancreaticLipase: {
                        substrate: "Triglycerides at sn-1 and sn-3 positions",
                        cofactors: "Colipase (anchors to fat surface); bile salts; Ca²⁺",
                        products: "2-Monoglyceride + 2 free fatty acids",
                        amount: "~1.5-2g/day; digests ~80-85% of dietary fat"
                    },
                    micelleFormation: "Products dissolve into mixed micelles (bile salts + lysophospholipids + 2-MAG + FA); ~3-10nm; transport to brush border",
                    finalProducts: "2-Monoglycerides, free fatty acids, glycerol, lysophospholipids"
                },
                nucleicAcidDigestion: {
                    pancreaticNucleases: "DNase → oligodeoxyribonucleotides; RNase → oligoribonucleotides",
                    brushBorder: "5'-nucleotidase → nucleosides (base + sugar); phosphodiesterase → mononucleotides",
                    finalProducts: "Nitrogenous bases, pentose sugars, phosphate"
                }
            },

            absorption: {
                overview: "Different nutrients cross the enterocyte by specific transport mechanisms; key principle: apical (lumen-facing) transporters concentrate nutrients inside enterocyte; basolateral (blood-facing) transporters export to portal circulation",
                glucose: {
                    apical: "SGLT1 (SLC5A1): secondary active transport; 2 Na⁺:1 glucose cotransport; powered by Na⁺ gradient from basolateral Na⁺/K⁺ ATPase",
                    basolateral: "GLUT2 (SLC2A2): facilitated diffusion; high capacity low affinity",
                    ORT: "Oral Rehydration Therapy exploits SGLT1: glucose+Na⁺ cotransport drives Na⁺ absorption → osmotic water absorption even in secretory diarrhoea"
                },
                fructose: {
                    apical: "GLUT5 (SLC2A5): facilitated diffusion; Na⁺-independent; slower than glucose",
                    basolateral: "GLUT2"
                },
                aminoAcids: {
                    neutral: "B0AT1 (SLC6A19): Na⁺-coupled; broad neutral AA; requires angiotensin-converting enzyme 2 (ACE2) for membrane expression",
                    basic: "CAT-1 (SLC7A1): uniporter for Arg, Lys, His",
                    acidic: "EAAT3 (SLC1A1): Na⁺-coupled for Asp, Glu",
                    imino: "PAT1 (SLC36A1): H⁺-coupled for Pro, Gly, Ala",
                    basolateral: "LAT2, y+LAT2, TAT1 - various facilitated diffusion transporters"
                },
                peptides: {
                    PepT1: "SLC15A1; H⁺-coupled; absorbs di- and tripeptides; very high capacity; faster than free AA absorption",
                    intracellular: "Cytoplasmic peptidases hydrolyse di/tripeptides → free AA",
                    clinical: "PepT1 exploited for oral drug delivery (prodrugs as dipeptide mimetics)"
                },
                fats: {
                    shortMediumChain: "FA < C12: water-soluble enough → portal blood directly",
                    longChain: {
                        micelleApproach: "Mixed micelles diffuse to brush border",
                        uptake: "Passive diffusion + CD36 fatty acid translocase + FATP4 (fatty acid transport protein)",
                        cholesterol: "NPC1L1 (Niemann-Pick C1-like 1) for cholesterol; target of ezetimibe",
                        reassembly: "Smooth ER: FA + 2-MAG → TG (by DGAT1/2); cholesterol esterified by ACAT",
                        chylomicrons: "ApoB-48 added; packaged in Golgi; exocytosed into intercellular space → lacteals"
                    }
                },
                vitamins: {
                    A: "As retinyl ester in micelles; cleaved to retinol; enters enterocyte; esterified → retinyl ester in chylomicrons",
                    D: "With fat in micelles; enters chylomicrons",
                    E: "Tocopherols with fat in micelles; chylomicrons",
                    K: "With fat in micelles; chylomicrons",
                    C: "SVCT1 transporter (sodium-vitamin C cotransporter) in jejunum; oxidised form via GLUT",
                    B1_B2_B6: "Specific transporter proteins; passive at high concentrations",
                    folate: "PCFT (proton-coupled folate transporter) in duodenum/jejunum; RFC (reduced folate carrier)",
                    B12: "Intrinsic factor-B12 complex → cubilin/amnionless receptor-mediated endocytosis in terminal ileum only"
                },
                minerals: {
                    iron: {
                        duodenum: "Primary site",
                        haem: "HCP1 receptor → enterocyte → heme oxygenase releases Fe²⁺",
                        nonHaem: "DcytB (duodenal cytochrome b) reduces Fe³⁺ → Fe²⁺; DMT1 imports Fe²⁺",
                        export: "Ferroportin (basolateral) → hephaestin oxidises → Fe³⁺ → transferrin in blood",
                        regulation: "Hepcidin (liver) downregulates ferroportin"
                    },
                    calcium: {
                        active: "TRPV6 (duodenum); calbindin-D9k intracellular carrier; PMCA1b ATPase (basolateral)",
                        passive: "Paracellular throughout small intestine at high Ca²⁺ intake",
                        regulation: "Calcitriol (1,25-VitD3) upregulates TRPV6 and calbindin"
                    },
                    zinc: "Zip4 apical transporter (defective in acrodermatitis enteropathica)"
                },
                water: {
                    amount: "~6.5-7L absorbed in small intestine",
                    mechanism: "Osmotic: follows solute absorption (Na⁺, glucose, AA); aquaporin 7 in enterocytes facilitates",
                    paracellular: "Leaky tight junctions in small intestine allow paracellular water flow"
                }
            },

            motility: {
                segmentation: {
                    definition: "Rhythmic contractions of circular muscle at multiple sites simultaneously; non-propulsive",
                    frequency: "11-12 contractions/min in duodenum; 8-9/min in ileum",
                    purpose: "Mixing chyme with digestive juices; maximises contact with absorptive surface",
                    appearance: "Chyme divided into segments which then merge and divide again"
                },
                peristalsis: {
                    type: "Propulsive peristalsis (slower, less forceful than esophageal); propels chyme aborally",
                    velocity: "0.5-2 cm/s",
                    control: "Myenteric plexus; enhanced by parasympathetic, CCK, serotonin (5-HT3/4); reduced by opioids, sympathetic"
                },
                MMC: "Between meals: migrating motor complex (see stomach section) also sweeps small intestine clean",
                gastroilealReflex: "Gastric distension and feeding → increased ileal motility (speeds transit through small intestine)",
                ileocecalValve: "Regulates flow from ileum; distension of cecum → reflex closure (prevents backflow)"
            },

            clinicalConditions: {
                coeliacDisease: {
                    mechanism: "Immune reaction to gliadin (wheat), secalin (rye), hordein (barley) → CD4+ T-cells → villous atrophy, crypt hyperplasia → malabsorption",
                    diagnosis: "Serology (anti-tTG IgA, anti-EMA, anti-DGP); duodenal biopsy (Marsh classification)",
                    treatment: "Strict gluten-free diet lifelong",
                    complications: "Iron deficiency, folate deficiency, vitamin D/calcium deficiency → osteoporosis; lymphoma risk"
                },
                crohnsDisease: {
                    features: "Transmural granulomatous inflammation; any GI segment (mouth to anus); skip lesions; terminal ileum most common",
                    consequences: "Strictures, fistulae, abscesses; malabsorption (B12 if terminal ileum; bile salt malabsorption → diarrhoea + oxalate stones)",
                    treatment: "5-ASA, steroids, immunomodulators, biologics (anti-TNF, anti-integrin)"
                },
                shortBowelSyndrome: {
                    definition: "Malabsorption from insufficient intestinal length (usually <200cm remaining) or function",
                    causes: "Crohn's resection, intestinal infarction, volvulus, radiation",
                    consequences: "Dependence on TPN; water/electrolyte imbalance; specific deficiencies (B12 if terminal ileum lost)",
                    adaptation: "Intestinal adaptation over 1-2 years: villous hypertrophy, increased crypt depth, absorptive capacity increases"
                },
                smallIntestinalBacterialOvergrowth: {
                    SIBO: "Abnormal increase in bacteria in small intestine (normally <10³/ml)",
                    causes: "Gastroparesis, blind loops, strictures, immunodeficiency, PPI use",
                    features: "Bloating, diarrhoea, vitamin deficiencies (B12 consumed by bacteria; fat-soluble vitamins from bile salt deconjugation)",
                    diagnosis: "Hydrogen breath test; jejunal aspirate culture",
                    treatment: "Rifaximin; treat underlying cause"
                }
            },

            examples: [
                {
                    name: "Coeliac disease and anaemia",
                    explanation: "Gluten → immune attack → villous atrophy → malabsorption of iron (duodenum) + folate (jejunum) → combined iron-deficiency and megaloblastic anaemia; also calcium malabsorption → osteoporosis"
                },
                {
                    name: "Lactose intolerance symptoms",
                    explanation: "Undigested lactose enters colon → osmotically active → water drawn into lumen → diarrhoea; colonic bacteria ferment lactose → H₂ + CO₂ + SCFAs → bloating, flatulence, cramps"
                }
            ]
        };
        return content;
    }

    handleLargeIntestine(problem) {
        const content = {
            topic: "Large Intestine: Water Absorption, Microbiome and Defecation",
            category: 'digestive_organs',
            summary: "The large intestine (1.5 metres, 6cm diameter) receives ~1.5 litres of liquid chyme from the ileum daily and converts it to ~150ml of formed faeces. Its primary functions are water and electrolyte absorption, housing and maintaining the gut microbiome (100 trillion bacteria of ~1000 species), and controlled elimination of waste. The microbiome ferments dietary fibre to short-chain fatty acids that nourish colonocytes and have profound systemic effects.",

            anatomy: {
                dimensions: {
                    length: "~1.5 metres",
                    diameter: "~6cm (wider than small intestine, hence 'large')",
                    distinguishingFeatures: {
                        taeniaeColi: "Three longitudinal bands of smooth muscle (condensed outer longitudinal layer); run entire length of colon; create haustra by keeping colon shorter than mucosal length",
                        haustra: "Sacculations (pouches) between taeniae; formed by taeniae contracting and shortening colon → mucosal folding into pouches; visible on imaging",
                        epiploicAppendages: "Fat-filled peritoneal projections along taeniae; function uncertain; can become ischaemic (epiploic appendagitis)",
                        calibre: "Wider lumen than small intestine; variable",
                        noVilli: "Absent in large intestine (distinguishes from small intestine); flat mucosal surface with crypts only"
                    }
                },
                regions: {
                    cecum: {
                        location: "Right iliac fossa; first part of large intestine",
                        size: "~6cm; blind pouch inferior to ileocecal junction",
                    ileocecalValve: {
                            structure: "Two mucosal folds (lips) projecting into cecum; surrounded by thickened circular muscle",
                            function: "Prevents large intestinal content refluxing into ileum; regulates flow of ileal content into cecum",
                            pressure: "Normally closed; relaxes with peristaltic waves from ileum"
                        },
                        appendix: {
                            location: "Posteromedial wall of cecum; 2-3cm below ileocecal junction; position variable (retrocecal most common ~65%)",
                            length: "2-20cm (average ~9cm)",
                            structure: "Narrow lumen (~3-5mm); wall rich in lymphoid tissue (mucosa-associated lymphoid tissue MALT); no taeniae (longitudinal muscle complete around appendix)",
                            function: {
                                traditional: "Widely considered vestigial in humans",
                                modern: "Growing evidence for roles: (1) Safe house for beneficial gut bacteria after illness (microbial reservoir); (2) Lymphoid function (IgA secretion); (3) Priming of mucosal immune system in early life",
                                clinical: "Appendicitis most common surgical emergency; lifetime risk ~7%"
                            },
                            appendicitis: {
                                mechanism: "Luminal obstruction (faecolith, lymphoid hyperplasia, parasites) → bacterial overgrowth → inflammation → ischaemia → perforation",
                                symptoms: "Central colicky pain migrating to right iliac fossa (McBurney's point); nausea; fever; rebound tenderness; Rovsing's sign",
                                diagnosis: "Clinical; raised CRP/WBC; CT scan (definitive); ultrasound in children/pregnant",
                                treatment: "Laparoscopic appendicectomy; antibiotics (some uncomplicated cases)",
                                AlvaradoScore: "Scoring system: migration of pain, nausea, RIF tenderness, rebound, elevated temp, leucocytosis, left shift → max 10 points"
                            }
                        }
                    },
                    ascendingColon: {
                        location: "Right side of abdomen; retroperitoneal; from ileocecal junction to hepatic flexure",
                        length: "~15-20cm",
                        features: "Retroperitoneal (fixed); hepatic (right colic) flexure is acute angle; related posteriorly to right kidney and quadratus lumborum",
                        clinicalNote: "Cancers here often present late (large lumen; liquid content → no obstruction); present with iron deficiency anaemia (occult blood)"
                    },
                    transverseColon: {
                        location: "Horizontally crosses abdomen from hepatic to splenic flexure",
                        length: "~45cm (longest segment)",
                        features: "Intraperitoneal (mobile; suspended by transverse mesocolon); hangs inferiorly; splenic (left colic) flexure more superior and acute than hepatic",
                        relations: "Greater omentum attached to superior surface; stomach above; small intestine below",
                        gastrocolicReflex: "Eating → colonic mass movements (gastrocolic reflex often triggers defecation urge); mediated by gastrin and parasympathetic nervous system"
                    },
                    descendingColon: {
                        location: "Left side of abdomen; retroperitoneal; from splenic flexure to sigmoid colon",
                        length: "~25-30cm",
                        features: "Retroperitoneal (fixed); narrower lumen than ascending",
                        clinicalNote: "Cancers here present with altered bowel habit, rectal bleeding, obstruction (solid faeces in narrower lumen)"
                    },
                    sigmoidColon: {
                        location: "S-shaped loop in left iliac fossa and pelvis; from descending colon to rectum",
                        length: "~35-40cm (variable)",
                        features: "Intraperitoneal (mobile); sigmoid mesocolon; most common site for diverticular disease",
                        diverticulosis: {
                            definition: "Outpouchings of mucosa and submucosa through weaknesses in muscular wall at points where blood vessels penetrate",
                            prevalence: "50% of Western adults >60 years",
                            riskFactors: "Low-fibre diet (increased intraluminal pressure); obesity; lack of exercise",
                            complications: {
                                diverticulitis: "Inflammation/infection of diverticulum → LIF pain, fever, raised CRP → treat with antibiotics ± drainage; complications: abscess, fistula, perforation",
                                bleeding: "Diverticular haemorrhage (erosion of blood vessel at neck) → massive painless rectal bleeding; usually stops spontaneously"
                            }
                        }
                    },
                    rectum: {
                        location: "Pelvis; follows sacral curvature; retroperitoneal posteriorly; partially covered by peritoneum anteriorly (upper 2/3)",
                        length: "~12-15cm",
                        features: {
                            ampulla: "Dilated reservoir; stores faeces before defecation; normally empty",
                            houstonValves: "Three transverse mucosal folds (valves of Houston); support faecal contents during passage of flatus",
                            peritonealReflection: "Peritoneum covers upper anterior and lateral walls; forms pouch of Douglas (rectouterine) in females; rectovesical pouch in males"
                        },
                        blood: "Superior rectal artery (from inferior mesenteric artery); middle and inferior rectal arteries (from internal iliac and internal pudendal); venous drainage: superior rectal vein → portal; middle and inferior rectal → systemic (important portosystemic anastomosis)",
                        clinicalNote: "Rectal cancers within 15cm of anal verge; sphincter-preserving surgery if ≥2cm from anorectal junction"
                    },
                    analCanal: {
                        length: "~4cm",
                        structure: {
                            dentateLinePectinate: "Midpoint of anal canal; marks junction between endoderm (above; columnar) and ectoderm (below; squamous) epithelium; critical anatomical landmark",
                            aboveDentateLine: {
                                epithelium: "Columnar → transitional (at transitional zone)",
                                blood: "Superior rectal artery/vein (portal drainage)",
                                lymph: "Internal iliac nodes",
                                nerve: "Autonomic (visceral; painless)",
                                haemorrhoids: "Internal haemorrhoids above dentateline; painless"
                            },
                            belowDentateLine: {
                                epithelium: "Non-keratinised stratified squamous",
                                blood: "Inferior rectal artery/vein (systemic drainage)",
                                lymph: "Inguinal nodes",
                                nerve: "Somatic (pudendal nerve; painful)",
                                haemorrhoids: "External haemorrhoids below dentateline; painful"
                            }
                        },
                        sphincters: {
                            internal: {
                                type: "Smooth muscle (involuntary); thickened continuation of circular muscle of rectum",
                                restingTone: "Provides ~70-85% of resting anal tone (prevents passive incontinence)",
                                control: "Autonomic: sympathetic maintains tone; parasympathetic and distension → relaxation (rectoanal inhibitory reflex, RAIR)",
                                RAIR: "Rectal distension → transient internal sphincter relaxation → allows 'sampling' (mucosa of upper anal canal contacts rectal content to determine gas vs solid vs liquid)"
                            },
                            external: {
                                type: "Skeletal muscle (voluntary); wraps around internal sphincter and anal canal",
                                control: "Pudendal nerve (S2-S4); voluntary squeeze to prevent defecation",
                                restingTone: "Also has resting tone (reflexive EMG activity even at rest)",
                                squeeze: "Voluntary contraction during 'urge to defecate'; can sustain ~40-60 seconds",
                                clinical: "Damaged in obstetric injuries → passive incontinence (internal sphincter) or urge incontinence (external sphincter)"
                            },
                            puborectalis: {
                                type: "Skeletal muscle; part of levator ani (pelvic floor)",
                                function: "Creates anorectal angle (~90° at rest; ~110-130° during defecation); critical for continence",
                                mechanism: "Relaxes during defecation → straightens anorectal angle → facilitates defecation; puborectalis contraction during Kegel exercises → maintains continence"
                            }
                        }
                    }
                },
                mucosa: {
                    overview: "Flat surface (NO VILLI); lined by simple columnar epithelium; crypts of Lieberkühn present (absorptive and secretory)",
                    crypts: {
                        depth: "~0.5mm; deeper than small intestinal crypts",
                        cellTypes: {
                            colonocytes: "Primary absorptive cells; absorb Na⁺ (ENaC), Cl⁻; water follows osmotically; also absorb short-chain fatty acids",
                            gobletCells: "Most numerous colonic cells; produce MUC2 mucin (forms thick protective mucus layer); increase in density from cecum to rectum",
                            enteroendocrineCells: "L-cells (GLP-1, PYY); EC-cells (serotonin/5-HT)",
                            stemCells: "Base of crypts; Lgr5+ CBC cells; regenerate entire epithelium every ~5 days"
                        }
                    },
                    mucusLayer: {
                        structure: "Two-layer system in colon: outer loose layer (habitat for commensal bacteria); inner dense layer (impenetrable to bacteria; sterile)",
                        composition: "MUC2 (primary); O-glycosylated; calcium-crosslinked gel",
                        thickness: "~150μm inner + ~100μm outer",
                        function: "Physical barrier; lubricates faeces; provides selective carbon source for bacteria (mucin glycans)",
                        clinical: "Inflammatory bowel disease: impaired mucus barrier → bacterial translocation → chronic inflammation"
                    }
                }
            },

            waterAndElectrolyteAbsorption: {
                overview: "The large intestine absorbs ~1.35 litres of water per day (from 1.5L input to 150ml in faeces); this is critical for fluid homeostasis",
                sodiumAbsorption: {
                    mechanisms: {
                        ENaC: {
                            fullName: "Epithelial Sodium Channel",
                            location: "Apical membrane of colonocytes; most prominent in distal colon",
                            regulation: "Aldosterone (from adrenal cortex) upregulates ENaC transcription → ↑ Na⁺ absorption in volume depletion",
                            mechanism: "Na⁺ flows down electrochemical gradient through channel → intracellularly → Na⁺/K⁺ ATPase (basolateral) pumps out → creates electrochemical gradient for further Na⁺ entry"
                        },
                        electroneutral: "NHE3 (Na⁺/H⁺ exchanger) + Cl⁻/HCO₃⁻ exchanger (DRA) → NaCl absorption in proximal colon; coupled electroneutral transport",
                        electrogenic: "ENaC in distal colon; generates lumen-negative transepithelial potential; drives Cl⁻ paracellularly"
                    },
                    aldosterone: {
                        stimulus: "Volume depletion → renin → angiotensin II → aldosterone from adrenal cortex",
                        action: "Binds mineralocorticoid receptor in colonocyte nucleus → ↑ ENaC, Na⁺/K⁺ ATPase expression → ↑ Na⁺ absorption → water follows → plasma volume restoration",
                        potassiumSecretion: "Aldosterone also promotes K⁺ secretion via ROMK channels in distal colon (one reason why diarrhoea causes hypokalaemia)"
                    }
                },
                waterAbsorption: {
                    mechanism: "Follows Na⁺ and Cl⁻ absorption by osmosis; paracellular through tight junctions and transcellular via aquaporins (AQP3, AQP4 on basolateral membrane of colonocytes)",
                    capacity: "Maximum absorptive capacity ~4-5 litres/day; exceeded in severe diarrhoea",
                    diarrhoea: {
                        secretory: "Active Cl⁻/Na⁺ secretion into lumen (cholera toxin activates CFTR) → osmotic water loss; does NOT improve with fasting",
                        osmotic: "Non-absorbable solutes draw water into lumen (lactose intolerance, lactulose); STOPS with fasting",
                        inflammatory: "Mucosal damage → protein/blood loss → reduced absorption + increased secretion (IBD, infectious colitis)",
                        motility: "Rapid transit → insufficient time for absorption (IBS-D, thyrotoxicosis)"
                    }
                },
                bicarbonateSecretion: {
                    mechanism: "DRA (down-regulated in adenoma) Cl⁻/HCO₃⁻ exchanger secretes HCO₃⁻ into lumen in exchange for Cl⁻",
                    purpose: "Neutralises acids produced by bacterial fermentation (keeps colonic pH ~6.5-7.0)",
                    clinical: "Loss-of-function DRA mutations → congenital chloride diarrhoea (rare; high Cl⁻ in stool)"
                },
                potassiumHandling: {
                    secretion: "ROMK and BK channels on apical membrane → K⁺ secretion into lumen",
                    absorption: "H⁺/K⁺ ATPase (colonic isoform) in distal colon; absorbs K⁺ when dietary K⁺ low",
                    clinical: "Diarrhoea → K⁺ loss → hypokalaemia; VIPoma → massive watery diarrhoea → profound hypokalaemia"
                }
            },

            gutMicrobiome: {
                overview: "The gut microbiome comprises ~100 trillion microorganisms (10:1 ratio to human cells; 150x more genes than human genome) colonising the GI tract, predominantly the large intestine. It is now recognised as a virtual organ with profound effects on nutrition, immunity, metabolism, and even brain function.",
                composition: {
                    numbers: "~10¹⁴ bacteria; ~1000 species; 99% anaerobes",
                    majorPhyla: {
                        Firmicutes: {
                            proportion: "~60-65%",
                            genera: "Lactobacillus, Clostridium, Ruminococcus, Faecalibacterium, Roseburia",
                            roles: "Butyrate production (Faecalibacterium prausnitzii, Roseburia intestinalis - key producers)"
                        },
                        Bacteroidetes: {
                            proportion: "~20-25%",
                            genera: "Bacteroides, Prevotella, Parabacteroides",
                            roles: "Polysaccharide fermentation; propionate production; immune modulation"
                        },
                        Actinobacteria: {
                            proportion: "~3%",
                            genera: "Bifidobacterium (infant gut predominantly)",
                            roles: "Fermentation; cross-feeding; vitamin synthesis"
                        },
                        Proteobacteria: {
                            proportion: "~2% (low in healthy gut; elevated in dysbiosis)",
                            genera: "E. coli, Helicobacter",
                            roles: "Mostly facultative anaerobes; normally minor component"
                        },
                        Verrucomicrobia: {
                            proportion: "<1%",
                            genus: "Akkermansia muciniphila",
                            roles: "Mucus degradation; linked to metabolic health; reduced in obesity/T2DM"
                        }
                    },
                    development: {
                        birth: "Sterile at birth; colonised during passage through birth canal (vaginal delivery: Lactobacillus dominant) or from skin/environment (caesarean: Staphylococcus, Propionibacterium)",
                        breastfeeding: "Human milk oligosaccharides (HMOs) selectively feed Bifidobacterium → infant gut dominated by Bifidobacterium",
                        weaning: "Introduction of solid food → adult-like microbiome established by ~3 years",
                        adult: "Relatively stable individual 'core' microbiome; influenced by diet, antibiotics, illness, age",
                        elderly: "Reduced diversity; decreased Bifidobacterium; increased Proteobacteria"
                    },
                    diversity: {
                        importance: "Higher diversity generally associated with better health outcomes",
                        reducedBy: "Antibiotics (major disruptor), processed diet, sedentary lifestyle, stress, PPIs",
                        increasedBy: "High-fibre diet (varied plant sources), fermented foods, moderate exercise"
                    }
                },
                functions: {
                    fermentation: {
                        substrate: "Dietary fibre (non-digestible plant polysaccharides: cellulose, pectin, inulin, resistant starch) + mucins + undigested proteins",
                        products: {
                            shortChainFattyAcids: {
                                overview: "Primary energy metabolites of colonic fermentation; ~300-500 mmol/day",
                                butyrate: {
                                    proportion: "~15-20% of SCFAs",
                                    producers: "Faecalibacterium prausnitzii, Roseburia intestinalis, Eubacterium rectale",
                                    localFunctions: [
                                        "Primary energy source for colonocytes (60-70% of colonocyte energy)",
                                        "Inhibits HDAC (histone deacetylase) → epigenetic regulation → anti-inflammatory gene expression",
                                        "Induces colonocyte apoptosis → anti-tumorigenic",
                                        "Maintains gut barrier integrity (tight junction upregulation)",
                                        "Activates regulatory T-cells → mucosal immune tolerance"
                                    ],
                                    systemic: "Absorbed → portal vein; liver uses some; remainder enters systemic circulation",
                                    cancer: "Low Faecalibacterium prausnitzii associated with Crohn's disease and colorectal cancer"
                                },
                                propionate: {
                                    proportion: "~25-30% of SCFAs",
                                    producers: "Bacteroides species, Akkermansia",
                                    functions: [
                                        "Hepatic gluconeogenesis substrate",
                                        "Inhibits cholesterol synthesis in liver",
                                        "Activates free fatty acid receptors FFAR2/3 → gut hormone release (GLP-1, PYY)",
                                        "Satiety signalling"
                                    ]
                                },
                                acetate: {
                                    proportion: "~60-65% of SCFAs (most abundant)",
                                    producers: "Bacteroides, Bifidobacterium, many others",
                                    functions: [
                                        "Primary SCFA in portal blood",
                                        "Fuel for peripheral tissues (muscle, heart, kidney, brain)",
                                        "Substrate for hepatic lipogenesis",
                                        "Activates FFAR2 receptors → immune modulation"
                                    ]
                                },
                                gas: "Fermentation also produces H₂, CO₂, CH₄ (methane in ~30% of people; archaeal methanogenesis)"
                            }
                        }
                    },
                    vitaminSynthesis: {
                        vitaminK: "Menaquinones (MK-4 to MK-13) produced by Bacteroides, Prevotella, E. coli; contribute to vitamin K pool (especially in vitamin K deficiency; neonates)",
                        vitaminB12: "Synthesised by Lactobacillus, Propionibacterium; unclear bioavailability from colonic bacteria",
                        folate: "Bifidobacterium longum produces folate; some absorbed from colon",
                        biotin: "Certain bacteria produce biotin",
                        riboflavin: "Some Lactobacillus species"
                    },
                    immuneSystem: {
                        education: "Gut microbiome essential for normal immune development; germ-free mice have underdeveloped immune systems",
                        Treg: "Specific bacteria (Clostridium clusters IV and XIVa, Faecalibacterium) induce colonic regulatory T-cells → mucosal tolerance → prevent autoimmunity",
                        IgA: "Bacteria stimulate IgA production → secretory IgA coats bacteria → prevents mucosal penetration",
                        barrier: "SCFAs (especially butyrate) → maintain tight junctions and mucus layer → prevent bacterial translocation",
                        colonisation: "Competitive exclusion: commensal bacteria occupy ecological niches → prevent pathogen colonisation",
                        innate: "Bacterial MAMPs (microbe-associated molecular patterns) prime innate immune sensors (TLRs, NOD receptors) → appropriate inflammatory thresholds"
                    },
                    metabolism: {
                        bileAcids: {
                            process: "Primary bile acids (cholic, chenodeoxycholic) reach colon → bacteria deconjugate and dehydroxylate → secondary bile acids (deoxycholic, lithocholic)",
                            significance: "Secondary bile acids regulate metabolism, immune function, and FXR/TGR5 signalling → affect glucose and lipid metabolism; excess lithocholic acid is hepatotoxic"
                        },
                        trimethylamine: {
                            process: "Dietary choline, phosphatidylcholine, L-carnitine → bacteria produce TMA → liver oxidises → TMAO (trimethylamine-N-oxide)",
                            TMAO: "Associated with atherosclerosis risk; promotes platelet aggregation; Prevotella associated with higher TMAO"
                        },
                        tryptophan: "Bacteria convert tryptophan → indoles → serotonin precursors, aryl hydrocarbon receptor ligands (AhR) → immune and gut-brain axis signalling",
                        urease: "Some bacteria produce urease → urea → ammonia; elevated in liver failure → hepatic encephalopathy"
                    },
                    gutBrainAxis: {
                        overview: "Bidirectional communication between gut microbiome and brain; increasingly recognised as important in mental health",
                        pathways: {
                            neural: "Vagus nerve carries signals from enteric nervous system (activated by microbial metabolites) to brainstem; gut→brain mostly (80% afferent)",
                            hormonal: "SCFAs, tryptophan metabolites, GLP-1, PYY from L-cells (stimulated by SCFAs) → systemic circulation → brain",
                            immune: "Cytokines from gut immune cells → blood → brain (neuroinflammation)",
                            direct: "Some bacteria produce neurotransmitters: GABA (Lactobacillus), serotonin precursors, catecholamine precursors"
                        },
                        associations: {
                            depression: "Reduced diversity; reduced Lactobacillus and Bifidobacterium in depressed patients; FMT studies in rodents transfer mood behaviour",
                            autism: "GI symptoms in ~70% of autistic children; altered microbiome composition; propionic acid (from bacteria) modulates brain development",
                            Parkinson: "Constipation precedes motor symptoms by >10 years; α-synuclein pathology may start in gut (Braak hypothesis); specific dysbiosis pattern",
                            anxiety: "Probiotic trials show modest reduction in anxiety scores"
                        }
                    }
                },
                dysbiosis: {
                    definition: "Altered microbiome composition associated with disease states",
                    characteristics: "Reduced diversity; increased Proteobacteria; decreased butyrate producers",
                    associations: [
                        "Inflammatory bowel disease (Crohn's, UC)",
                        "Obesity and metabolic syndrome",
                        "Type 2 diabetes mellitus",
                        "Colorectal cancer",
                        "C. difficile infection (after antibiotic-mediated disruption)",
                        "Anxiety and depression",
                        "Autism spectrum disorder",
                        "Rheumatoid arthritis (HLA-B27 ankylosing spondylitis linked to gut Prevotella)",
                        "Non-alcoholic fatty liver disease (NAFLD)"
                    ]
                },
                therapeuticInterventions: {
                    probiotics: {
                        definition: "Live microorganisms conferring health benefit when administered in adequate amounts",
                        evidence: "Strong for: antibiotic-associated diarrhoea prevention, C. difficile prevention, IBS, pouchitis; limited for other conditions",
                        strains: "Lactobacillus rhamnosus GG (best studied), Saccharomyces boulardii (yeast; C. diff prevention), VSL#3 (pouchitis)"
                    },
                    prebiotics: {
                        definition: "Non-digestible substrates selectively utilised by host microorganisms conferring health benefit",
                        examples: "Inulin, fructooligosaccharides (FOS), galactooligosaccharides (GOS), lactulose, resistant starch",
                        mechanism: "Feed beneficial bacteria (Bifidobacterium, Lactobacillus) → increase SCFAs → health benefits"
                    },
                    FMT: {
                        fullName: "Faecal Microbiota Transplantation",
                        indications: "Recurrent C. difficile infection (>90% success rate); investigational for IBD, obesity, metabolic disease",
                        method: "Screened donor stool → colonoscopy, enema, or capsule administration",
                        mechanism: "Restores healthy microbiome diversity; competitive exclusion of C. difficile",
                        safety: "Generally safe; rare transmission of drug-resistant organisms; careful donor screening essential"
                    },
                    dietaryModulation: {
                        fibre: "Every 5g additional daily fibre → 15% reduced colorectal cancer risk; feeds butyrate producers",
                        mediterranean: "High fibre, plants, fermented foods, omega-3 → high diversity, more butyrate producers",
                        ultraprocessed: "Ultra-processed diet → reduced diversity, increased inflammation, dysbiosis",
                        fermentedFoods: "Yoghurt, kefir, kimchi, sauerkraut → temporarily increase microbial diversity"
                    }
                }
            },

            defecation: {
                overview: "Defecation is a coordinated reflex involving smooth and skeletal muscle, autonomic and somatic nervous systems, and voluntary control. Normal frequency ranges from 3 times/day to 3 times/week.",
                colonicMotility: {
                    haustralChurning: {
                        description: "Haustra contract and relax slowly; content moves back and forth within segment",
                        purpose: "Mixing and exposure to mucosa for absorption; NOT propulsive",
                        frequency: "Slow; hours to move content short distances"
                    },
                    massMovements: {
                        description: "Powerful propulsive contractions moving faeces from transverse/descending colon → sigmoid → rectum",
                        frequency: "3-4 times per day; often triggered by eating (gastrocolic reflex)",
                        gastrocolicReflex: "Meal → gastric distension → parasympathetic reflex + gastrin + CCK → mass movements → defecation urge post-meal",
                        mechanism: "Abolition of haustra → peristaltic wave sweeps 20-30cm segment",
                        clinical: "Absent in Hirschsprung's disease (aganglionic segment); delayed in opioid-induced constipation"
                    },
                    colonicTransitTime: {
                        normal: "12-72 hours total colonic transit",
                        measurement: "Radiopaque markers (Sitz markers); wireless motility capsule; scintigraphy"
                    }
                },
                defecationReflex: {
                    filling: "Mass movement → faeces enter rectum → rectal distension → stretch receptors in rectal wall",
                    RAIR: "Rectoanal inhibitory reflex: rectal distension → internal anal sphincter relaxes (involuntary) → upper anal canal mucosa samples rectal content (gas/liquid/solid discrimination)",
                    urge: "Rectal distension → afferent signals via pelvic nerve → S2-S4 spinal cord → awareness of fullness and urge to defecate",
                    continence: {
                        mechanism: "External anal sphincter (EAS) voluntary squeeze → overrides internal sphincter relaxation → defers defecation",
                        duration: "EAS fatigue ~40-60 seconds; must find toilet",
                        puborectalis: "Puborectalis contraction maintains acute anorectal angle → prevents defecation"
                    },
                    defecation: {
                        preparation: "Sitting (or squatting); straightens anorectal angle",
                        events: [
                            "1. Voluntary relaxation of EAS and puborectalis",
                            "2. Puborectalis relaxation → anorectal angle increases (90°→ 130°) → straightens passage",
                            "3. Valsalva manoeuvre: diaphragm descends, glottis closes → ↑ intraabdominal pressure",
                            "4. Rectal contraction + intraabdominal pressure → faecal propulsion",
                            "5. Internal sphincter remains relaxed (parasympathetic)",
                            "6. Faeces expelled; closure of both sphincters"
                        ],
                        squatting: "More physiological position; straightens anorectal angle further; reduces straining; lower rates of constipation and haemorrhoids in squatting populations"
                    },
                    spinalControl: {
                        sacral: "S2-S4 spinal cord contains defecation reflex centre; coordinates EAS, IAS, puborectalis, rectal motility",
                        supraspinal: "Brainstem (Pontine defecation centre) and cortex modulate reflex; voluntary override",
                        cordInjury: "High cord injury → reflex defecation (preserved sacral reflex) without voluntary control; bowel management essential"
                    }
                },
                faecesComposition: {
                    water: "75%",
                    dryWeight: {
                        bacteria: "25-54% of dry weight (mix of dead and living; estimated 10¹¹/g)",
                        fibre: "Undigested plant material (cellulose, lignin)",
                        mucus: "Shed mucins from goblet cells",
                        epithelial: "Desquamated epithelial cells",
                        fats: "Small amount; increased in malabsorption (steatorrhoea)",
                        proteins: "Small amount of endogenous protein",
                        minerals: "Ca²⁺, Mg²⁺, PO₄³⁻ excreted here"
                    },
                    colour: {
                        normal: "Brown (stercobilin: urobilinogen → stercobilin via colonic bacteria)",
                        pale: "Obstructive jaundice (no bile reaching gut → steatorrhoea; pale/clay-coloured stools) or severe diarrhoea",
                        black: "Melaena (altered blood from upper GI bleed ≥ 50ml); iron supplements; bismuth",
                        red: "Fresh blood from lower GI bleed (haematochezia); beets can mimic",
                        green: "Rapid transit; bile not fully converted; leafy vegetables; certain bacteria"
                    },
                    odour: "Indole, skatole, hydrogen sulphide from bacterial protein fermentation; butyric acid"
                }
            },

            colonic: {
                pathology: {
                    colorectalCancer: {
                        epidemiology: "Third most common cancer worldwide; >95% adenocarcinoma; lifetime risk ~5%",
                        carcinogenesis: {
                            adenimaCarcinomaSequence: "Normal mucosa → adenoma (5-10 years) → carcinoma (10-15 years); ~10 years total",
                            molecularPathways: {
                                chromosomalInstability: "APC → KRAS → SMAD4/TGFBR2 → TP53; ~85% of CRC",
                                microsatelliteInstability: "MLH1/MSH2/MSH6/PMS2 mismatch repair gene defects; Lynch syndrome hereditary; also sporadic via MLH1 promoter methylation; ~15%",
                                serratedPathway: "BRAF mutation → serrated polyps → CRC"
                            },
                            APCGene: "Familial adenomatous polyposis (FAP): germline APC mutation → 100s of polyps → obligate cancer by 40 years without surgery"
                        },
                        riskFactors: "Age, red/processed meat, obesity, smoking, alcohol, low fibre, IBD, family history, Lynch syndrome, FAP",
                        symptoms: {
                            rightSided: "Iron deficiency anaemia (occult bleeding), mass, weight loss (large lumen; liquid content; late obstruction)",
                            leftSided: "Altered bowel habit, rectal bleeding, tenesmus, obstruction (solid faeces; narrower lumen)",
                            rectal: "Rectal bleeding, tenesmus, mucus, sensation of incomplete evacuation"
                        },
                        diagnosis: "Colonoscopy (gold standard); CT colonography; FIT (faecal immunochemical test) for screening; CT staging",
                        treatment: "Curative: colectomy (right, left, sigmoid, anterior resection, abdominoperineal resection); adjuvant chemotherapy (FOLFOX for stage III); palliative: FOLFOX, FOLFIRI, bevacizumab, cetuximab"
                    },
                    IBD: {
                        UC: {
                            fullName: "Ulcerative Colitis",
                            pattern: "Continuous mucosal inflammation from rectum extending proximally; always involves rectum",
                            layers: "Mucosal only (not transmural)",
                            features: "Bloody diarrhoea (cardinal symptom); urgency; tenesmus; abdominal cramping",
                            histology: "Crypt architectural distortion; cryptitis; crypt abscesses; goblet cell depletion; continuous inflammation",
                            extraintestinal: "Pyoderma gangrenosum, erythema nodosum, primary sclerosing cholangitis (PSC - strongly associated), anterior uveitis, peripheral arthropathy",
                            treatment: "5-ASA (mild-moderate); steroids (acute); azathioprine, biologics (anti-TNF: infliximab/adalimumab, vedolizumab, ustekinumab); colectomy curative"
                        },
                        Crohns: {
                            pattern: "Patchy transmural inflammation; any GI segment (mouth to anus); skip lesions; terminal ileum most common",
                            layers: "Transmural (full thickness); granulomas (non-caseating); fistulae, strictures",
                            features: "Diarrhoea (often non-bloody), abdominal pain (RIF - terminal ileum), weight loss, perianal disease",
                            histology: "Non-caseating granulomas; transmural inflammation; fissuring ulcers; aphthous ulcers",
                            treatment: "5-ASA (colonic only), steroids, azathioprine, methotrexate, biologics; surgery for complications not curative"
                        }
                    },
                    constipation: {
                        definition: "Less than 3 bowel movements/week OR straining, hard stools, incomplete evacuation",
                        causes: {
                            primary: "Slow transit constipation; outlet dysfunction (pelvic floor dyssynergia; rectocele)",
                            secondary: "Hypothyroidism, hypercalcaemia, Parkinson's, MS, spinal cord injury, opioids, iron, antacids (calcium), calcium channel blockers, dehydration, low fibre"
                        },
                        investigation: "Thyroid function, calcium, blood count, colonoscopy (exclude cancer in >50 years); transit study; defaecating proctogram",
                        treatment: "Dietary fibre (25-30g/day), hydration, exercise; osmotic laxatives (lactulose, macrogol/PEG); stimulant laxatives (senna, bisacodyl); suppositories; biofeedback (pelvic floor dyssynergia)"
                    },
                    irritableBowelSyndrome: {
                        definition: "Functional disorder: altered bowel habit + abdominal pain without structural pathology",
                        prevalence: "15-20% of Western population; most common GI condition",
                        diagnosis: "Rome IV criteria: recurrent abdominal pain ≥1 day/week for ≥3 months associated with ≥2 of: (1) defecation, (2) change in frequency, (3) change in form/appearance",
                        subtypes: "IBS-C (constipation), IBS-D (diarrhoea), IBS-M (mixed), IBS-U (unclassified)",
                        mechanism: "Visceral hypersensitivity; gut-brain axis dysregulation; post-infectious (10-20% after gastroenteritis); altered microbiome; SIBO in subset; psychological comorbidity",
                        treatment: "Reassurance; low FODMAP diet (reduces fermentable carbohydrates → less gas); antispasmodics (buscopan); loperamide (IBS-D); laxatives (IBS-C); antidepressants (amitriptyline IBS-D; SSRIs IBS-C); rifaximin; linaclotide"
                    }
                }
            },

            examples: [
                {
                    name: "Clostridium difficile infection after antibiotics",
                    explanation: "Broad-spectrum antibiotics (especially clindamycin, fluoroquinolones, cephalosporins) decimate normal microbiome → C. difficile (spore-former; resistant to antibiotics) overgrows → toxins A and B → colonocyte death → pseudomembranous colitis → severe diarrhoea; treated with metronidazole, vancomycin, or fidaxomicin; FMT for recurrent cases"
                },
                {
                    name: "Effects of dietary fibre on gut health",
                    explanation: "Inulin and FOS from onions, garlic, chicory → reach colon undigested → Bifidobacterium ferments → butyrate and other SCFAs → colonocyte nourishment + mucus enhancement + anti-inflammatory effects + improved insulin sensitivity; explains Mediterranean diet health benefits"
                },
                {
                    name: "Hirschsprung's disease in neonates",
                    explanation: "Failure of neural crest cell migration to distal bowel → aganglionosis → no Auerbach's plexus → no peristalsis → functional obstruction → failure to pass meconium within 48h; treatment: surgical removal of aganglionic segment"
                },
                {
                    name: "Traveller's diarrhoea",
                    explanation: "Enterotoxigenic E. coli (ETEC) most common; heat-labile toxin activates adenylyl cyclase → ↑ cAMP → CFTR opens → Cl⁻ secretion → Na⁺ and water follow → secretory diarrhoea; same mechanism as cholera; ORT restores fluid via SGLT1 cotransport"
                }
            ]
        };
        return content;
    }

    handleLiverGallbladder(problem) {
        const content = {
            topic: "Liver, Bile and Gallbladder: Bile Production and Fat Emulsification",
            category: 'accessory_organs',
            summary: "The liver (1.5kg; largest internal organ) performs over 500 functions and is the metabolic hub of the body. Its digestive role centres on bile production (500-1000ml/day) - a complex mixture of bile salts, cholesterol, bilirubin, and phospholipids stored and concentrated in the gallbladder. Bile salts are amphipathic molecules that emulsify dietary fats into micron-sized droplets, dramatically increasing lipase-accessible surface area. After serving their digestive function, 95% of bile salts are efficiently recycled by the enterohepatic circulation.",

            liverAnatomy: {
                location: "Right hypochondrium and epigastric region; beneath right hemidiaphragm; protected by lower rib cage",
                dimensions: {
                    weight: "1.2-1.5kg (largest internal organ)",
                    span: "~15cm right lobe; ~5cm left lobe on percussion",
                    dimensions: "~28cm wide × 16cm tall × 8cm anteroposterior"
                },
                grossAnatomy: {
                    lobes: {
                        rightLobe: "Largest; right of falciform ligament; subdivided by H-shaped pattern of gallbladder fossa and IVC groove into: caudate lobe (posterior), quadrate lobe (anterior between gallbladder fossa and falciform), segments VI-VIII",
                        leftLobe: "Left of falciform ligament; segments II-III (left), I (caudate)",
                        caudateLobe: "Segment I; posterior; unique dual blood supply (both portal veins and hepatic arteries); independent drainage to IVC; relatively spared in Budd-Chiari syndrome",
                        quadrateLobe: "Segment IV (IVa and IVb); between gallbladder fossa and falciform ligament; functionally left lobe"
                    },
                    couinaudSegments: {
                        overview: "8 functionally independent segments (Couinaud); each with its own portal pedicle (portal vein branch + hepatic artery branch + bile duct) and hepatic venous drainage",
                        significance: "Surgical anatomy: allows precise anatomical liver resection with preservation of viable segments",
                        segments: "I (caudate), II-IV (left lobe), V-VIII (right lobe)"
                    },
                    surfaces: {
                        diaphragmatic: "Superior; convex; covered by peritoneum except bare area",
                        visceral: "Inferior; concave; porta hepatis; contact with right kidney, right adrenal, right colon, duodenum, stomach",
                        portaHepatitis: {
                            location: "H-shaped fissure on visceral surface; 'gateway of the liver'",
                            contents: [
                                "Portal vein (posterior)",
                                "Hepatic artery proper (left/anterior)",
                                "Common hepatic duct (right/anterior)",
                                "Lymphatics",
                                "Hepatic nerve plexus"
                            ]
                        }
                    },
                    peritoneal: {
                        coverage: "Covered by visceral peritoneum except bare area (posterior surface) and porta hepatis",
                        ligaments: {
                            falciform: "Anterior ligament; divides right from left lobe; remnant of ventral mesentery; contains ligamentum teres (obliterated umbilical vein)",
                            coronary: "Peritoneal reflections onto diaphragm; borders bare area",
                            triangular: "Left and right triangular ligaments; lateral extensions of coronary ligament",
                            lesserOmentum: "Hepatogastric + hepatoduodenal ligaments; contains portal triad structures in hepatoduodenal ligament (free right margin = Pringle's manoeuvre compresses to control haemorrhage)"
                        }
                    }
                },
                vasculature: {
                    portalVein: {
                        formation: "Superior mesenteric vein + splenic vein (at L2, behind pancreatic neck)",
                        flow: "75% of hepatic blood flow; 60% of hepatic oxygen delivery",
                        pressure: "Normal ~5-8 mmHg; portal hypertension if >12 mmHg",
                        content: "Nutrient-rich blood from GI tract; partially deoxygenated",
                        tributaries: "Superior mesenteric (intestine + pancreas head); splenic (spleen + pancreas body/tail + inferior mesenteric via splenic/SMV junction)"
                    },
                    hepaticArtery: {
                        source: "Hepatic artery proper (from common hepatic artery from coeliac axis)",
                        flow: "25% of hepatic blood flow; 40% of oxygen delivery",
                        variability: "High variability (Michels classification): replaced right hepatic from SMA (~20%); replaced left hepatic from left gastric (~15%); critical knowledge for surgery/intervention",
                        branches: "Divides into right and left hepatic artery at porta hepatis"
                    },
                    hepaticVeins: {
                        formation: "Right, middle, and left hepatic veins drain from anterior → posterior → IVC at T8",
                        BuddChiari: "Hepatic vein thrombosis → sinusoidal congestion → liver failure; caudate lobe spared (drains direct to IVC)"
                    },
                    hepaticSinusoids: {
                        description: "Specialised capillaries between hepatocyte plates; low pressure, slow flow; discontinuous endothelium (fenestrations)",
                        fenestrae: "100-175nm pores allow exchange of large molecules (lipoproteins, albumin) between sinusoidal lumen and Space of Disse",
                        spaceOfDisse: "Perisinusoidal space between endothelium and hepatocyte; contains hepatic stellate cells (Ito cells); site of lipid exchange"
                    }
                },
                microanatomy: {
                    classicLobule: {
                        description: "Hexagonal functional unit (~1-2mm diameter); central vein at centre; portal triads at 6 corners",
                        portalTriad: "Each corner: portal vein branch + hepatic artery branch + bile duct; also lymphatics",
                        hepatocytePlates: "One-cell-thick plates of hepatocytes radiating from central vein to portal triads; maximises exchange surface",
                        bloodFlow: "Portal vein + hepatic artery → sinusoids → hepatocytes → central vein → hepatic veins → IVC",
                        bileFlow: "Opposite to blood: hepatocytes → bile canaliculi → bile ductules → interlobular bile ducts → larger ducts → common hepatic duct"
                    },
                    acinarConcept: {
                        description: "Functional unit based on blood supply (Rappaport acinus); zone 1 periportal (first to receive blood → most oxygenated → viral hepatitis targets here); zone 3 pericentral (receives depleted blood → toxic injury targets; paracetamol, alcohol)",
                        zones: {
                            zone1: "Periportal; highest O₂, nutrients; oxidative metabolism; most oxygenated; targets: HAV, yellow fever; first to regenerate",
                            zone2: "Middle zone; intermediate",
                            zone3: "Pericentral (centrilobular); lowest O₂; lipid metabolism, drug metabolism (CYP450 highest here); targets: paracetamol toxicity, alcoholic hepatitis, Budd-Chiari; last to regenerate"
                        }
                    },
                    cellTypes: {
                        hepatocytes: {
                            proportion: "~80% of liver cells (parenchymal cells)",
                            structure: "Large (20-30μm); polyhedral; binucleate (25%); abundant organelles (mitochondria, ER, Golgi, lysosomes, peroxisomes); lipid and glycogen granules",
                            membranes: {
                                sinusoidal: "Faces Space of Disse; microvilli; site of nutrient uptake and secretion",
                                lateral: "Tight junctions with adjacent hepatocytes",
                                canalicular: "Faces bile canaliculus; ABC transporters secrete bile components"
                            },
                            halfLife: "~150-300 days normally; marked regenerative capacity"
                        },
                        kupfferCells: {
                            type: "Resident hepatic macrophages (15-20% of hepatic cells)",
                            location: "Lining of sinusoids; largest pool of tissue macrophages in body",
                            function: "Phagocytose bacteria and debris from portal blood (gut bacteria translocate); process antigens; secrete cytokines (TNF-α, IL-1, IL-6); iron recycling from senescent RBCs",
                            clinical: "Activated in alcoholic hepatitis → release pro-inflammatory cytokines → hepatocyte injury; target of LPS from gut dysbiosis (second-hit hypothesis in NAFLD)"
                        },
                        stellateCells: {
                            alternativeNames: "Hepatic stellate cells; Ito cells; perisinusoidal cells; fat-storing cells",
                            location: "Space of Disse",
                            normalFunction: "Store vitamin A (80% of body's retinol as retinyl esters in cytoplasmic lipid droplets); synthesise extracellular matrix; regulate sinusoidal tone",
                            activation: {
                                trigger: "Liver injury → TGF-β from Kupffer cells → stellate cell activation → loss of lipid droplets → myofibroblast transdifferentiation",
                                effect: "Activated stellate cells produce collagen (type I, III) → fibrosis → cirrhosis",
                                reversal: "Possible in early fibrosis; stellate cell apoptosis can reverse fibrosis"
                            },
                            clinical: "Central to pathogenesis of ALL forms of hepatic fibrosis and cirrhosis"
                        },
                        cholangiocytes: {
                            type: "Biliary epithelial cells lining bile ducts",
                            function: "Modify primary bile (add water and HCO₃⁻ via CFTR and AE2); bile duct repair",
                            clinical: "Primary biliary cholangitis (PBC): autoimmune destruction of small bile ducts; anti-mitochondrial antibodies (AMA)"
                        },
                        pitCells: "Hepatic natural killer cells (liver-associated lymphocytes); immune surveillance",
                        endothelialCells: "Discontinuous sinusoidal endothelium; fenestrated; no basement membrane; unique structure"
                    }
                }
            },

            liverFunctions: {
                overview: "The liver performs >500 discrete functions; can be broadly categorised into metabolic, synthetic, detoxification, storage, immune, and digestive functions",
                digestive: {
                    bile: "Primary digestive function: see bile section below",
                    proteinDigestion: "Deaminates amino acids; converts NH₃ → urea (urea cycle); synthesises non-essential amino acids"
                },
                metabolic: {
                    carbohydrate: {
                        glycogenSynthesis: "Post-meal: glucose → glycogen (glycogenesis); stores ~70-100g glycogen",
                        glycogenolysis: "Fasting: glycogen → glucose-1-P → glucose-6-P → glucose (via G6Pase) → blood",
                        gluconeogenesis: "Prolonged fasting: amino acids (alanine, glutamine), lactate, glycerol → glucose; liver is primary gluconeogenic organ",
                        glucoseHomeostasis: "Liver maintains blood glucose 4-6 mmol/L by sensing insulin/glucagon ratio",
                        fructose: "Fructose enters liver via GLUT2; phosphorylated by fructokinase; bypasses PFK regulation → unrestricted entry into glycolytic/lipogenic pathways"
                    },
                    lipid: {
                        fattyAcidOxidation: "Beta-oxidation in fasted state; acetyl-CoA → TCA cycle or ketone bodies (acetoacetate, β-hydroxybutyrate)",
                        ketogenesis: "Fasting/diabetes: acetyl-CoA → ketone bodies → fuel for brain, muscle, heart",
                        VLDL: "Post-meal: excess glucose/fructose → de novo lipogenesis → triglycerides → packaged as VLDL → export to adipose/muscle",
                        cholesterolSynthesis: "HMG-CoA → mevalonate → cholesterol (statin target: HMG-CoA reductase); cholesterol → bile acids",
                        bileSynthesis: "Primary bile acids synthesised from cholesterol (see below)"
                    },
                    protein: {
                        synthesis: {
                            albumin: "~10-15g/day; most abundant plasma protein; maintains oncotic pressure; transport protein (drugs, hormones, fatty acids, bilirubin)",
                            clottingFactors: "I (fibrinogen), II, V, VII, IX, X, XI, XII, XIII; vitamin K-dependent: II, VII, IX, X (carboxylation); PT/INR reflects hepatic synthetic function",
                            acutePhase: "CRP, fibrinogen, complement, haptoglobin, alpha-1-antitrypsin, alpha-2-macroglobulin; upregulated in inflammation",
                            transport: "Transferrin (iron), ceruloplasmin (copper), haptoglobin (free Hb), TTR (thyroxine)"
                        },
                        deamination: "Amino acids → α-keto acids + NH₃; NH₃ → urea (ornithine cycle); urea excreted by kidneys",
                        transamination: "ALT (alanine transaminase) and AST (aspartate transaminase) - liver enzymes released in hepatocyte damage"
                    }
                },
                detoxification: {
                    drugs: {
                        phase1: "CYP450 enzymes (CYP3A4, CYP2D6 etc.) → oxidation, reduction, hydrolysis → more water-soluble metabolites (sometimes more toxic)",
                        phase2: "Conjugation: glucuronidation, sulphation, acetylation, glutathione conjugation → polar metabolites → biliary or renal excretion",
                        induction: "Rifampicin, carbamazepine, phenytoin, St John's Wort → ↑ CYP450 → ↓ drug levels → treatment failure",
                        inhibition: "Erythromycin, fluconazole, grapefruit → ↓ CYP450 → ↑ drug levels → toxicity"
                    },
                    alcohol: {
                        metabolism: "Ethanol → acetaldehyde (alcohol dehydrogenase; ADH) → acetate (ALDH); MEOS (microsomal ethanol oxidising system: CYP2E1) at high intake",
                        NADH: "ADH and ALDH consume NAD+ → ↑ NADH:NAD+ ratio → ↓ gluconeogenesis (hypoglycaemia) + ↑ fatty acid synthesis (fatty liver) + ↓ TCA cycle (lactic acidosis)",
                        hepatotoxicity: "Acetaldehyde → protein adducts → mitochondrial damage → stellate cell activation → fibrosis → cirrhosis",
                        CYP2E1: "Induced by chronic alcohol → produces ROS → oxidative stress → hepatocyte damage"
                    },
                    ammonia: "Ammonia from gut bacteria and amino acid deamination → ornithine cycle → urea; liver failure → hyperammonaemia → hepatic encephalopathy",
                    bilirubin: {
                        production: "Haem (from senescent RBCs in spleen + Kupffer cells + ineffective erythropoiesis) → haem oxygenase → biliverdin → biliverdin reductase → unconjugated bilirubin",
                        transport: "Unconjugated bilirubin (lipid-soluble; toxic) bound to albumin in blood → hepatocyte uptake via OATP1B1/1B3",
                        conjugation: "Hepatocyte: UDP-glucuronosyltransferase (UGT1A1) conjugates bilirubin + glucuronic acid → bilirubin diglucuronide (water-soluble; non-toxic; excreted)",
                        excretion: "Conjugated bilirubin → bile canaliculus via MRP2 (ABCC2) → bile → duodenum → intestine",
                        conversion: "Intestinal bacteria convert conjugated bilirubin → urobilinogen; some reabsorbed → urobilin (urine); most → stercobilin (faeces → brown colour)",
                        jaundice: {
                            definition: "Visible yellowing of skin/sclerae when serum bilirubin >35-50 μmol/L (normal <21 μmol/L)",
                            preHepatic: {
                                cause: "Excess bilirubin production (haemolysis: sickle cell, haemolytic anaemia, G6PD deficiency, spherocytosis)",
                                pattern: "↑ unconjugated bilirubin; normal liver enzymes; ↑ urobilinogen in urine; dark urine (urobilinogen); normal stool colour; splenomegaly"
                            },
                            hepatic: {
                                causes: "Hepatocellular: viral hepatitis A/B/C, alcoholic hepatitis, NAFLD, autoimmune hepatitis, Wilson's, haemochromatosis, paracetamol toxicity; conjugation defect: Gilbert's syndrome (UGT1A1 variant, benign), Crigler-Najjar",
                                pattern: "↑ both conjugated and unconjugated; ↑ ALT/AST (hepatocellular); ↑ ALP/GGT (cholestatic component); urobilinogen variable"
                            },
                            postHepatic: {
                                causes: "Gallstones in CBD; cholangiocarcinoma; pancreatic head cancer; primary sclerosing cholangitis; strictures",
                                pattern: "↑ conjugated bilirubin (conjugated so water-soluble → bilirubin in urine → dark urine 'Coca-Cola urine'); pale/white stools (no bilirubin reaching gut); ↑ ALP and GGT; pruritus (bile salt retention)",
                                clinicalNote: "Surgical jaundice: obstructive pattern; Courvoisier's sign (palpable gallbladder + jaundice → usually cancer not gallstones, as stones cause gallbladder fibrosis)"
                            }
                        }
                    }
                },
                storage: {
                    glycogen: "70-100g; released as glucose in fasting",
                    vitaminA: "~90% of body stores (as retinyl palmitate in stellate cells); 6-12 months supply",
                    vitaminD: "Liver converts D3→25-hydroxyvitamin D (25-OH-D; measured clinically); further conversion to active 1,25-(OH)2-D in kidney",
                    vitaminB12: "3-5 year supply stored in hepatocytes; explains delayed deficiency",
                    vitaminK: "Stores modest (weeks)",
                    iron: "Ferritin storage in hepatocytes and Kupffer cells; major body iron store (1000-2000mg)",
                    copper: "Excreted in bile; Wilson's disease: ATP7B mutation → impaired biliary copper excretion → copper accumulates in liver, brain, cornea (Kayser-Fleischer rings), kidneys"
                },
                immune: {
                    kupffer: "Filter and phagocytose gut-derived bacteria, endotoxin, debris (first-pass filtration of portal blood)",
                    complement: "Liver synthesises complement proteins (C3, C4, factor B)",
                    acutePhase: "Hepatocytes produce acute phase proteins in response to IL-6 from Kupffer cells",
                    immuneTolerance: "Liver is immunologically tolerant environment (prevents immune reaction to dietary antigens and gut bacteria)"
                },
                regeneration: {
                    overview: "Liver has extraordinary regenerative capacity; can regenerate from 25% remnant",
                    mechanism: "Partial hepatectomy → hepatocytes re-enter cell cycle (normally quiescent G0); TNF-α + IL-6 → STAT3 → cyclin D1 → G1/S entry; HGF (hepatocyte growth factor) from stellate cells",
                    timeline: "70% hepatectomy → near-complete regeneration in 6-8 weeks in humans",
                    clinical: "Liver transplant living donor donation exploits regeneration; laparoscopic right hepatectomy (60% of liver); residual liver regenerates"
                }
            },

            bile: {
                overview: "Bile is a complex aqueous secretion produced by hepatocytes (~600ml/day), modified by cholangiocytes (+400ml HCO₃⁻-rich fluid = ~1000ml total), and stored/concentrated in gallbladder. It is essential for fat digestion and absorption of fat-soluble vitamins, and is the route for excretion of cholesterol, bilirubin, and drugs.",
                composition: {
                    hepaticBile: {
                        water: "82%",
                        bileSalts: "12% by weight; most important component",
                        phospholipids: "4% (mainly phosphatidylcholine/lecithin)",
                        cholesterol: "0.7%",
                        bilirubin: "0.3%",
                        ions: "Na⁺, K⁺, Ca²⁺, Cl⁻, HCO₃⁻ (isotonic; pH 7.5-8.5)",
                        proteins: "Albumin, IgA, enzymes (ALP)"
                    },
                    gallbladderBile: {
                        concentration: "5-10x concentrated (water and electrolytes absorbed)",
                        bileSalts: "~50-70% dry weight",
                        pH: "6.5-7.5 (acidification by gallbladder epithelium via Cl⁻/HCO₃⁻ exchange → promotes solubility but also stone formation risk)"
                    }
                },
                bileSalts: {
                    synthesis: {
                        primarySynthesis: "Hepatocytes convert cholesterol → primary bile acids: cholic acid (CA) and chenodeoxycholic acid (CDCA); rate-limiting enzyme CYP7A1 (cholesterol 7α-hydroxylase)",
                        regulation: "FXR (farnesoid X receptor): bile acid sensor; activated bile acids → FXR → SHP → inhibits CYP7A1 (feedback inhibition); also FGF19 (intestinal hormone) → FGFR4 on hepatocytes → inhibits CYP7A1",
                        conjugation: "Primary bile acids conjugated with glycine or taurine → glycocholic, taurocholic, glycochenodeoxycholic, taurochenodeoxycholic acids; more water-soluble; ionised at intestinal pH",
                        secretion: "BSEP (bile salt export pump; ABCB11) pumps conjugated bile salts from hepatocyte → bile canaliculus"
                    },
                    structure: {
                        steroidCore: "4-ring steroidal backbone from cholesterol",
                        amphipathic: "Rigid steroidal backbone has hydrophobic face (methyl groups) and hydrophilic face (hydroxyl groups + conjugate); allows orientation at oil-water interface",
                        criticalMicelleConcn: "CMC ~1-2 mmol/L; above CMC form micelles spontaneously; duodenal bile salt concentration >>CMC (10-20 mmol/L) → spontaneous micelle formation"
                    },
                    emulsification: {
                        mechanism: [
                            "1. Large fat globule (mm) in gastric chyme",
                            "2. Peristaltic mixing + bile salt adsorption onto fat surface",
                            "3. Bile salts reduce surface tension from ~35 to ~5 mN/m",
                            "4. Mechanical shearing during peristalsis → globule breaks into smaller droplets",
                            "5. Bile salts coat new surface of small droplets → prevent reaggregation",
                            "6. Final droplets ~1 micron diameter"
                        ],
                        surfaceAreaCalculation: {
                            oneDrop1mm: "One 1mm diameter fat droplet: SA = 4π(0.5mm)² = 3.14 mm²",
                            million1micron: "One 1mm droplet → 10⁹ droplets of 1μm diameter",
                            totalSA: "10⁹ × 4π(0.5μm)² = 3.14 × 10⁶ μm² = 3.14 × 10³ mm²",
                            amplification: "~1000x increase in surface area available to lipase"
                        },
                        lipaseInteraction: "Lipase cannot access oil-water interface directly (bile salts block it); colipase displaces bile salts → lipase anchors → hydrolysis at surface"
                    },
                    micelleFormation: {
                        structure: "Bile salts form disc-like mixed micelles (~3-10nm) with products of fat digestion",
                        contents: "Bile salts (outer shell) + 2-monoglycerides + long-chain fatty acids + cholesterol + fat-soluble vitamins + lysophospholipids (inner core)",
                        function: "Transport hydrophobic fat digestion products through aqueous intestinal fluid to brush border for absorption",
                        absorption: "Micelles approach brush border; products partition out of micelle and diffuse across lipid bilayer of enterocyte down concentration gradient; bile salts remain in lumen"
                    },
                    secondaryBileSalts: {
                        formation: "Primary conjugated bile acids reach colon → bacteria deconjugate (BSH: bile salt hydrolase) → primary free acids → bacteria 7α-dehydroxylation → secondary bile acids",
                        types: {
                            deoxycholicAcid: "From cholic acid; partially reabsorbed → returned to liver → re-conjugated → re-secreted; most abundant in human bile",
                            lithocholicAcid: "From CDCA; poorly reabsorbed (most excreted in faeces); hepatotoxic at high levels; sulphated in liver to increase excretion"
                        },
                        signalling: "Secondary bile acids signal through TGR5 (G protein-coupled receptor on enteroendocrine cells → GLP-1 secretion; on brown adipose → thermogenesis) and FXR"
                    }
                },
                enterohepaticCirculation: {
                    overview: "95% of bile salts reclaimed from terminal ileum → portal vein → liver → re-secreted; pool of ~3-5g bile salts circulates 6-10 times per day → delivers ~20-30g bile salts to duodenum despite only ~3-5g pool",
                    mechanism: {
                        ilealReabsorption: {
                            transporter: "ASBT (apical sodium-dependent bile transporter; SLC10A2) on ileal brush border; Na⁺-coupled secondary active transport",
                            intracellular: "Bound by IBABP (intestinal bile acid-binding protein) and I-BABP → basolateral",
                            basolateral: "OSTα/β heterodimer → portal blood"
                        },
                        hepaticExtraction: "NTCP (Na⁺-taurocholate cotransporting polypeptide; SLC10A1) and OATPs (organic anion transporting polypeptides) on hepatocyte sinusoidal membrane extract bile acids from portal blood (>90% first pass extraction)",
                        resecretion: "Re-conjugated (if deconjugated) → BSEP → bile canaliculus → bile"
                    },
                    efficiency: "Total daily bile acid synthesis only ~0.5g (replaces lost 5%); minimal energy cost despite large flux",
                    FXRRegulation: "Ileal bile acid absorption → FXR in enterocytes → FGF19 → portal blood → hepatocyte FGFR4 → ↓ CYP7A1 → ↓ bile acid synthesis (feedback control)",
                    clinical: {
                        terminalIleumResection: "ASBT lost → bile salts reach colon → cathartic diarrhoea (bile salt malabsorption syndrome) + fat malabsorption → treat with cholestyramine (binds bile salts in lumen)",
                        cholestyramine: "Bile acid sequestrant → traps bile salts in gut → ↑ faecal excretion → liver ↑ CYP7A1 → ↑ cholesterol → bile acid conversion → lowers LDL cholesterol",
                        pruritus: "Cholestasis → bile acids accumulate in skin → activates MRGPRX4 itch receptors on sensory nerves → pruritus; treat with rifampicin (activates PXR → ↑ CYP3A4 → ↑ bile acid breakdown), cholestyramine, SSRI"
                    }
                },
                secretion: {
                    canalicularSecretion: {
                        transporters: {
                            BSEP: "ABCB11; primary bile salt export pump; mutations → progressive familial intrahepatic cholestasis (PFIC2)",
                            MDR3: "ABCB4; exports phosphatidylcholine into bile (essential for micelle formation; protects bile duct from bile salts); mutations → PFIC3",
                            MRP2: "ABCC2; exports conjugated bilirubin, drugs, glutathione; mutations → Dubin-Johnson syndrome",
                            ABCG5_G8: "Exports cholesterol and plant sterols into bile; mutations → sitosterolaemia"
                        },
                        driving: "Primary active transport (ATP-dependent) against high concentration gradient (bile canaliculus ~1000x more concentrated than hepatocyte)"
                    },
                    ductalModification: {
                        cholangiocytes: "Add HCO₃⁻-rich fluid via secretin-stimulated CFTR and AE2; increases bile volume and alkalinity",
                        AE2: "Cl⁻/HCO₃⁻ exchanger on apical membrane; secretes HCO₃⁻ → creates 'biliary HCO₃⁻ umbrella' (alkaline layer protecting cholangiocytes from bile acid toxicity)",
                        clinical: "CFTR mutations (CF) → viscous bile → inspissated bile ducts → biliary cirrhosis; AE2 deficiency → PBC-like syndrome"
                    }
                }
            },

            gallbladder: {
                anatomy: {
                    location: "Inferior surface of liver; gallbladder fossa between right and quadrate lobes; fundus projects below liver edge",
                    dimensions: "7-10cm long; 2.5-3.5cm wide; 40-70ml capacity",
                    parts: {
                        fundus: "Rounded blind end; projects below liver; palpable when distended (Murphy's sign)",
                        body: "Main reservoir",
                        infundibulum: "Funnel-shaped; leads to cystic duct; Hartmann's pouch (potential stone trap)",
                        neck: "Narrow; joins cystic duct; spiral valves of Heister"
                    },
                    bloodSupply: {
                        arterial: "Cystic artery (usually branch of right hepatic artery) within Calot's triangle (boundaries: cystic duct, common hepatic duct, inferior liver surface) - critical surgical anatomy",
                        venous: "Cystic vein → portal vein; small veins direct to liver bed"
                    },
                    mucosa: {
                        epithelium: "Simple columnar with microvilli; highly absorptive",
                        rokitanskyAschoff: "Deep mucosal herniations into muscular wall; may harbour bacteria; increased in chronic cholecystitis",
                        noSubmucosa: "No submucosa (unlike rest of GI tract)"
                    }
                },
                function: {
                    storage: "Stores bile produced continuously by liver; between meals bile diverted to gallbladder via hepatic and cystic ducts (sphincter of Oddi closed)",
                    concentration: {
                        mechanism: "Gallbladder epithelium absorbs Na⁺, Cl⁻, HCO₃⁻, and water (isotonic absorption) → concentrates bile 5-10x",
                        result: "Bile salt concentration rises from ~10 mmol/L in hepatic bile to ~100-200 mmol/L in gallbladder bile",
                        ATPase: "Na⁺/K⁺ ATPase drives Na⁺ absorption → Cl⁻ follows → water follows osmotically via aquaporins"
                    },
                    release: {
                        stimulus: "Fat and protein in duodenum → I-cells → CCK → bloodstream → CCK-A receptors on gallbladder smooth muscle",
                        mechanism: "CCK → Gq → IP3/Ca²⁺ → smooth muscle contraction; simultaneously relaxes sphincter of Oddi (via NO from enteric neurons)",
                        result: "Gallbladder contracts → bile squirted through cystic duct → common bile duct → through relaxed sphincter of Oddi → major duodenal papilla → duodenum",
                        vagal: "Cephalic phase: vagal stimulation also causes mild gallbladder contraction"
                    }
                },
                gallstones: {
                    overview: "Gallstones affect 10-15% of Western adults; 80% asymptomatic; most common cause of biliary tract disease",
                    types: {
                        cholesterol: {
                            proportion: "80% in developed world",
                            mechanism: {
                                supersaturation: "Bile is supersaturated with cholesterol (↑ cholesterol or ↓ bile salts or ↓ phospholipids → lithogenic index >1)",
                                nucleation: "Cholesterol crystals nucleate (promoted by mucin glycoproteins, Ca²⁺; inhibited by apolipoprotein AI/II)",
                                growth: "Crystals aggregate and grow → macroscopic stone"
                            },
                            riskFactors_5Fs: "Fat, Female, Forty, Fertile, Family history; also rapid weight loss, TPN, Crohn's (bile salt malabsorption), haemolysis, drugs (oestrogens, clofibrate)",
                            composition: "Cholesterol monohydrate ± calcium salts; yellow-green; often solitary large stone"
                        },
                        pigment: {
                            black: {
                                composition: "Calcium bilirubinate + calcium phosphate/carbonate; no cholesterol; hard",
                                causes: "Chronic haemolysis (sickle cell, spherocytosis, thalassaemia, artificial valves) → excess unconjugated bilirubin → precipitates; also cirrhosis, TPN",
                                location: "Usually intrahepatic or gallbladder; not usually CBD"
                            },
                            brown: {
                                composition: "Calcium bilirubinate + calcium soaps of fatty acids; soft; earthy",
                                causes: "Biliary infection/stasis → bacterial enzyme β-glucuronidase deconjugates bilirubin → precipitation; E. coli, Clonorchis sinensis",
                                location: "Often intrahepatic ducts (Asia) or CBD (after previous biliary instrumentation)"
                            }
                        }
                    },
                    complications: {
                        biliaryColic: {
                            mechanism: "Stone temporarily impacted in cystic duct (during gallbladder contraction after meal) → spasm → pain",
                            pain: "Severe right hypochondrial or epigastric pain; radiates to right shoulder (diaphragmatic irritation → phrenic nerve C3-5 → shoulder tip); lasts 30min-6h; settles as stone displaces",
                            treatment: "Analgesia (NSAID/opioid); elective cholecystectomy"
                        },
                        acuteCholecystitis: {
                            mechanism: "Stone impacted in cystic duct → bile unable to drain → distension → inflammation → secondary bacterial infection (E. coli, Klebsiella)",
                            features: "RUQ pain; fever; Murphy's sign positive (arrest of inspiration on deep RUQ palpation); leucocytosis; raised CRP; ultrasound: thickened gallbladder wall, pericholecystic fluid",
                            treatment: "IV antibiotics; analgesia; laparoscopic cholecystectomy (ideally within 72h)"
                        },
                        choledocholithiasis: {
                            definition: "Stone in common bile duct",
                            features: "Obstructive jaundice; right upper quadrant pain; pale stools; dark urine; raised ALP, GGT, bilirubin",
                            complications: "Ascending cholangitis (Charcot's triad: jaundice + RUQ pain + fever; Reynold's pentad + hypotension + confusion = emergency); acute pancreatitis (stone at ampulla)",
                            treatment: "ERCP with sphincterotomy and stone extraction; then cholecystectomy"
                        },
                        gallstoneIleus: "Large stone erodes through gallbladder wall into duodenum → small bowel obstruction (usually terminal ileum); Rigler's triad on X-ray: air in biliary tree + small bowel obstruction + stone",
                        Mirizzis: "Large stone impacted in cystic duct → compresses common hepatic duct externally → obstructive jaundice"
                    }
                },
                sphincterOfOddi: {
                    location: "Sphincter of smooth muscle surrounding distal common bile duct and main pancreatic duct; within duodenal wall at ampulla of Vater",
                    function: "Controls flow of bile and pancreatic juice into duodenum; prevents duodenal reflux into biliary/pancreatic ducts",
                    resting: "Contracted (closed between meals); pressure ~15-30 mmHg above duodenal pressure",
                    opening: "Relaxes in response to CCK + VIP + motilin → allows bile and pancreatic juice to flow into duodenum",
                    SODysfunction: "Sphincter of Oddi dysfunction: abnormal sphincter pressure → biliary/pancreatic pain; diagnosis by manometry; treatment: endoscopic sphincterotomy"
                }
            },

            clinicalConditions: {
                liverDisease: {
                    acuteHepatitis: {
                        viral: {
                            HAV: "Faecal-oral; self-limiting; no chronicity; IgM anti-HAV; vaccination available",
                            HBV: "Parenteral/sexual; 90% neonatal chronicity; 5% adult; HBsAg → anti-HBs; e-antigen (replication); antivirals: tenofovir, entecavir; vaccination",
                            HCV: "Parenteral; 85% chronic; now curative with DAAs (direct-acting antivirals); pan-genotypic regimens",
                            HEV: "Faecal-oral; self-limiting except immunosuppressed/pregnant (fulminant)"
                        },
                        drugsAndToxins: {
                            paracetamol: "Dose-dependent; zone 3 necrosis; CYP2E1 + CYP3A4 → NAPQI (N-acetyl-p-benzoquinone imine) → GSH depleted → protein adducts → necrosis; treatment: N-acetylcysteine (replenishes GSH)",
                            DILI: "Drug-induced liver injury; idiosyncratic (immune-mediated); or direct (dose-dependent)"
                        }
                    },
                    chronicLiverDisease: {
                        NAFLD: {
                            spectrum: "Simple steatosis → NASH (steatohepatitis) → fibrosis → cirrhosis → HCC",
                            mechanism: "Insulin resistance → ↑ FFA delivery to liver → ↑ DNL → fat accumulation; second hit: oxidative stress, cytokines, gut dysbiosis → inflammation → fibrosis",
                            prevalence: "25-30% global; increasing with obesity pandemic",
                            treatment: "Weight loss (most effective); exercise; no approved drug (resmetirom recently approved FXR/THRβ agonist)"
                        },
                        alcohol: {
                            spectrum: "Fatty liver → alcoholic hepatitis → cirrhosis",
                            mechanism: "Acetaldehyde → protein adducts; NADH↑ → ↑ lipogenesis + ↓ FAO; ROS → oxidative stress; gut permeability → endotoxin → Kupffer cell activation",
                            grossmann: "Mallory-Denk bodies (ubiquitin + intermediate filament aggregates); neutrophil infiltrate; ballooning hepatocytes"
                        },
                        cirrhosis: {
                            definition: "Irreversible diffuse fibrosis with nodular regeneration; end-stage liver disease",
                            pathology: "Stellate cells activated → collagen deposition → disruption of architecture → portal hypertension + synthetic failure",
                            complications: {
                                portalHypertension: {
                                    mechanism: "↑ resistance to portal flow (structural) + ↑ splanchnic blood flow (nitric oxide from vasodilated mesenteric vessels)",
                                    clinicalFeatures: [
                                        "Oesophageal/gastric varices (bleeding risk; propranolol prophylaxis; EVL or terlipressin for acute bleeds)",
                                        "Splenomegaly (hypersplenism → thrombocytopaenia)",
                                        "Ascites (↓ oncotic pressure from ↓ albumin + ↑ hydrostatic pressure + sodium retention → treatment: diuretics, paracentesis, TIPS)",
                                        "Caput medusae (dilated umbilical vein collaterals)",
                                        "Hepatorenal syndrome (renal vasoconstriction in setting of vasodilated splanchnic)"
                                    ]
                                },
                                encephalopathy: "↑ ammonia (liver fails to clear) + GABA-like compounds → brain dysfunction; asterixis; grade I-IV; treat with lactulose (acidifies colon → NH4+ trapped) + rifaximin",
                                HCC: "5-7% per year in cirrhosis; 6-monthly USS + AFP screening; treatment: resection, ablation, TACE, sorafenib, immunotherapy"
                            },
                            assessment: {
                                childPugh: "A (5-6)/B (7-9)/C (10-15): bilirubin, albumin, PT, ascites, encephalopathy",
                                MELD: "Model for End-stage Liver Disease; bilirubin, INR, creatinine; predicts 90-day mortality; transplant allocation"
                            }
                        }
                    }
                },
                primarySclerosingCholangitis: {
                    definition: "Idiopathic progressive inflammatory stricturing of intra and extrahepatic bile ducts",
                    associations: "70-80% have IBD (UC >> Crohn's)",
                    features: "Cholestatic jaundice; pruritus; fatigue; recurrent cholangitis; 'beads on a string' on MRCP",
                    treatment: "No proven medical therapy; ERCP for dominant strictures; liver transplant for end-stage disease",
                    risk: "Cholangiocarcinoma (1.5% per year); colorectal cancer (very high risk in PSC-IBD)"
                }
            },

            examples: [
                {
                    name: "Obstructive jaundice from pancreatic head cancer",
                    explanation: "Pancreatic head tumour compresses/invades common bile duct → bile cannot reach duodenum → conjugated bilirubin backs up → enters blood → water-soluble → excreted in urine (dark urine) → no bile in gut → pale stools + fat malabsorption + pruritus; Courvoisier's sign (palpable GB + jaundice)"
                },
                {
                    name: "Paracetamol overdose mechanism and treatment",
                    explanation: "Normal dose: CYP2E1/3A4 produce small NAPQI → immediately conjugated by GSH → harmless; overdose: GSH depleted → NAPQI accumulates → binds protein → zone 3 centrilobular necrosis; Treatment: N-acetylcysteine (NAC) replenishes GSH if given within 8-12 hours; liver transplant for fulminant failure"
                },
                {
                    name: "Why high-fat diet causes RUQ pain in gallstone patients",
                    explanation: "Fat in duodenum → I-cells secrete CCK → gallbladder contracts powerfully → stone impacted in cystic duct → cannot empty → distension → visceral pain referred to RUQ/epigastrium ± right shoulder tip (diaphragmatic irritation via phrenic nerve)"
                }
            ]
        };
        return content;
    }

    // ========================================
    // MAIN PROBLEM PROCESSING METHODS
    // ========================================

    parseDigestiveProblem(topic, parameters = {}, subTopic = null, context = {}) {
        let topicType = null;

        for (const [type, config] of Object.entries(this.digestiveTopics)) {
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
            throw new Error(`Unable to recognize digestive system topic: ${topic}`);
        }

        return {
            originalTopic: topic,
            type: topicType,
            subTopic: subTopic,
            parameters: { ...parameters },
            context: { ...context },
            difficulty: this.digestiveTopics[topicType].difficulty,
            prerequisites: this.digestiveTopics[topicType].prerequisites,
            parsedAt: new Date().toISOString()
        };
    }

    handleDigestiveProblem(config) {
        const { topic, parameters, subTopic, context, requestType } = config;

        try {
            const isExperimentRequest = requestType === 'experiment' ||
                (typeof topic === 'string' && topic.toLowerCase().includes('experiment'));

            if (isExperimentRequest) {
                return this.handleDigestiveExperimentRequest(config);
            } else {
                this.currentProblem = this.parseDigestiveProblem(topic, parameters, subTopic, context);
                this.currentContent = this.getDigestiveContent(this.currentProblem);

                if (this.adaptiveDifficulty) {
                    this.currentContent = this.adaptContentDifficulty(
                        this.currentContent,
                        this.learnerProfile.currentLevel
                    );
                }

                if (this.contextualLearning) {
                    this.currentContent.contextualScenarios = this.getContextualScenarios(
                        this.currentProblem.type
                    );
                }

                if (this.includeExperiments) {
                    this.currentContent.relatedExperiments = this.getRelatedExperiments(
                        this.currentProblem.type
                    );
                }

                if (this.metacognitiveSupport) {
                    this.currentContent.metacognitivePrompts = this.getMetacognitivePrompts(
                        this.currentProblem.type
                    );
                }

                this.contentSteps = this.generateDigestiveContent(
                    this.currentProblem,
                    this.currentContent
                );

                this.generateDigestiveWorkbook();

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
            throw new Error(`Failed to process digestive system request: ${error.message}`);
        }
    }

    // ========================================
    // EXPERIMENT REQUEST AND ROUTING
    // ========================================

    handleExperimentRequest(config) {
        const { topic, parameters, experimentId } = config;

        if (experimentId && this.digestiveExperiments[experimentId]) {
            this.currentExperiment = this.digestiveExperiments[experimentId];
        } else {
            this.currentExperiment = this.findExperimentByTopic(topic);
        }

        if (!this.currentExperiment) {
            throw new Error(`No digestive system experiment found for: ${topic}. Available experiments: ${Object.keys(this.digestiveExperiments).join(', ')}`);
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
        if (!topic) return null;
        const topicLower = topic.toLowerCase();

        // First pass: match by experiment name
        for (const [id, exp] of Object.entries(this.digestiveExperiments)) {
            if (exp.name.toLowerCase().includes(topicLower)) {
                return exp;
            }
        }

        // Second pass: match by related topics array
        for (const [id, exp] of Object.entries(this.digestiveExperiments)) {
            if (exp.relatedTopics.some(t => topicLower.includes(t.toLowerCase()))) {
                return exp;
            }
        }

        // Third pass: match by category
        for (const [id, exp] of Object.entries(this.digestiveExperiments)) {
            if (exp.category && exp.category.toLowerCase().includes(topicLower)) {
                return exp;
            }
        }

        // Fourth pass: match by historical scientist name
        for (const [id, exp] of Object.entries(this.digestiveExperiments)) {
            if (exp.historicalBackground?.scientist?.toLowerCase().includes(topicLower)) {
                return exp;
            }
        }

        // Fifth pass: keyword match against lab experiment title
        for (const [id, exp] of Object.entries(this.digestiveExperiments)) {
            if (exp.labExperiment?.title?.toLowerCase().includes(topicLower)) {
                return exp;
            }
        }

        return null;
    }

    // ========================================
    // EXPERIMENT CONTENT GENERATION
    // ========================================

    generateExperimentContent(experiment, parameters = {}) {
        const content = {
            experimentName: experiment.name,
            category: experiment.category,
            relatedTopics: experiment.relatedTopics,
            sections: []
        };

        // Historical background section
        if (experiment.historicalBackground) {
            content.sections.push({
                type: 'historical_background',
                title: 'Historical Background',
                data: this.formatHistoricalBackground(experiment.historicalBackground)
            });
        }

        // Lab experiment section
        if (experiment.labExperiment) {
            content.sections.push({
                type: 'lab_experiment',
                title: 'Laboratory Experiment',
                data: this.formatLabExperiment(experiment.labExperiment)
            });
        }

        // Data table section (if present in lab experiment)
        if (experiment.labExperiment?.dataTable) {
            content.sections.push({
                type: 'data_table',
                title: 'Results Data Table',
                data: experiment.labExperiment.dataTable
            });
        }

        // Analysis section
        if (experiment.labExperiment?.analysis) {
            content.sections.push({
                type: 'analysis',
                title: 'Analysis and Discussion',
                data: this.formatAnalysis(experiment.labExperiment.analysis)
            });
        }

        // Conclusions section
        if (experiment.labExperiment?.conclusions) {
            content.sections.push({
                type: 'conclusions',
                title: 'Conclusions',
                data: this.formatConclusions(experiment.labExperiment.conclusions)
            });
        }

        // Real world applications section
        if (experiment.labExperiment?.realWorldApplications) {
            content.sections.push({
                type: 'applications',
                title: 'Real-World Applications',
                data: this.formatApplications(experiment.labExperiment.realWorldApplications)
            });
        }

        // Modern extensions section
        if (experiment.labExperiment?.modernExtensions) {
            content.sections.push({
                type: 'extensions',
                title: 'Modern Extensions and Further Investigation',
                data: this.formatExtensions(experiment.labExperiment.modernExtensions)
            });
        }

        // Safety section
        if (experiment.labExperiment?.safetyPrecautions) {
            content.sections.push({
                type: 'safety',
                title: 'Safety Precautions',
                data: this.formatSafety(experiment.labExperiment.safetyPrecautions)
            });
        }

        return content;
    }

    // ========================================
    // FORMATTING HELPERS
    // ========================================

    formatHistoricalBackground(background) {
        const formatted = [];

        const fieldLabels = {
            scientist: 'Scientist(s)',
            year: 'Year(s)',
            years: 'Years',
            discovery: 'Discovery',
            hypothesis: 'Hypothesis',
            observation: 'Key Observation',
            proposal: 'Proposal',
            context: 'Historical Context',
            significance: 'Scientific Significance',
            contributions: 'Key Contributions',
            quote: 'Notable Quote',
            nobelPrize: 'Nobel Prize',
            rule: 'Rule / Principle',
            modernView: 'Modern View / Update',
            bernardWork: 'Bernard\'s Work',
            kirchhoff: 'Kirchhoff\'s Work',
            leuchs: 'Leuchs\'s Work',
            beaumontWork: 'Beaumont\'s Work',
            spallanzaniWork: 'Spallanzani\'s Work',
            malpighiWork: 'Malpighi\'s Work',
            lawOfIntestine: 'Law of the Intestine',
            secretinDiscovery: 'Secretin Discovery',
            laterWork: 'Later Work'
        };

        Object.entries(background).forEach(([key, value]) => {
            const label = fieldLabels[key] || key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');

            if (Array.isArray(value)) {
                formatted.push([label, '']);
                value.forEach((item, index) => {
                    if (typeof item === 'object' && item !== null) {
                        Object.entries(item).forEach(([k, v]) => {
                            formatted.push([`    ${k}`, String(v)]);
                        });
                    } else {
                        formatted.push([`    ${index + 1}.`, String(item)]);
                    }
                });
            } else if (typeof value === 'object' && value !== null) {
                formatted.push([label, '']);
                Object.entries(value).forEach(([k, v]) => {
                    const subLabel = k.charAt(0).toUpperCase() + k.slice(1).replace(/([A-Z])/g, ' $1');
                    if (Array.isArray(v)) {
                        formatted.push([`    ${subLabel}`, '']);
                        v.forEach((item, idx) => {
                            formatted.push([`        ${idx + 1}.`, String(item)]);
                        });
                    } else {
                        formatted.push([`    ${subLabel}`, typeof v === 'object' ? JSON.stringify(v) : String(v)]);
                    }
                });
            } else {
                formatted.push([label, String(value)]);
            }
        });

        return formatted;
    }

    formatLabExperiment(labExp) {
        const formatted = [];

        // Title and core info
        if (labExp.title) formatted.push(['Experiment Title', labExp.title]);
        if (labExp.hypothesis) formatted.push(['Hypothesis', labExp.hypothesis]);
        if (labExp.purpose) formatted.push(['Purpose / Aim', labExp.purpose]);

        // Background
        if (labExp.background) {
            formatted.push(['', '']);
            formatted.push(['Background Information', '']);
            if (typeof labExp.background === 'object' && !Array.isArray(labExp.background)) {
                Object.entries(labExp.background).forEach(([key, value]) => {
                    const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                    formatted.push([`    ${label}`, String(value)]);
                });
            } else {
                formatted.push(['    ', String(labExp.background)]);
            }
        }

        // Variables
        if (labExp.variables) {
            formatted.push(['', '']);
            formatted.push(['Variables', '']);
            formatted.push(['    Independent Variable', labExp.variables.independent || '']);
            formatted.push(['    Dependent Variable', labExp.variables.dependent || '']);
            if (labExp.variables.controlled) {
                const controlled = Array.isArray(labExp.variables.controlled)
                    ? labExp.variables.controlled.join('; ')
                    : labExp.variables.controlled;
                formatted.push(['    Controlled Variables', controlled]);
            }
        }

        // Materials
        if (labExp.materials) {
            formatted.push(['', '']);
            formatted.push(['Materials Required', '']);
            if (Array.isArray(labExp.materials)) {
                labExp.materials.forEach(material => {
                    if (material && material.trim() !== '') {
                        formatted.push(['    •', material]);
                    }
                });
            } else if (typeof labExp.materials === 'object') {
                Object.entries(labExp.materials).forEach(([category, items]) => {
                    const catLabel = category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1');
                    formatted.push([`    [${catLabel}]`, '']);
                    if (Array.isArray(items)) {
                        items.forEach(item => formatted.push(['        •', item]));
                    } else {
                        formatted.push(['        •', String(items)]);
                    }
                });
            }
        }

        // Safety precautions (inline if present here)
        if (labExp.safetyPrecautions) {
            formatted.push(['', '']);
            formatted.push(['⚠ Safety Precautions', '']);
            if (Array.isArray(labExp.safetyPrecautions)) {
                labExp.safetyPrecautions.forEach(note => {
                    formatted.push(['    ⚠', note]);
                });
            }
        }

        // Procedure
        if (labExp.procedure) {
            formatted.push(['', '']);
            formatted.push(['Procedure', '']);

            if (Array.isArray(labExp.procedure)) {
                // Flat array format
                let stepCounter = 1;
                labExp.procedure.forEach(step => {
                    if (!step || step.trim() === '') {
                        formatted.push(['', '']);
                    } else if (
                        step.trim().endsWith(':') ||
                        step.trim() === step.trim().toUpperCase() ||
                        (step.trim().startsWith('PART') || step.trim().startsWith('EXPERIMENT') || step.trim().startsWith('STEP') || step.trim().startsWith('NOTE'))
                    ) {
                        // Section header
                        formatted.push([`    ${step}`, '']);
                        stepCounter = 1; // Reset counter for new section
                    } else {
                        formatted.push([`    ${stepCounter++}.`, step]);
                    }
                });
            } else if (typeof labExp.procedure === 'object') {
                // Object format with named sub-sections
                Object.entries(labExp.procedure).forEach(([sectionKey, sectionValue]) => {
                    const sectionLabel = sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1).replace(/([A-Z])/g, ' $1');
                    formatted.push([`    [${sectionLabel.toUpperCase()}]`, '']);

                    if (Array.isArray(sectionValue)) {
                        sectionValue.forEach((step, idx) => {
                            if (!step || step.trim() === '') {
                                formatted.push(['', '']);
                            } else {
                                formatted.push([`        ${idx + 1}.`, step]);
                            }
                        });
                    } else if (typeof sectionValue === 'object') {
                        // Deeply nested procedure object
                        Object.entries(sectionValue).forEach(([subKey, subValue]) => {
                            const subLabel = subKey.charAt(0).toUpperCase() + subKey.slice(1).replace(/([A-Z])/g, ' $1');
                            formatted.push([`        ${subLabel}:`, '']);
                            if (Array.isArray(subValue)) {
                                subValue.forEach((item, i) => {
                                    formatted.push([`            ${i + 1}.`, item]);
                                });
                            } else {
                                formatted.push([`            `, String(subValue)]);
                            }
                        });
                    } else {
                        formatted.push([`        `, String(sectionValue)]);
                    }
                    formatted.push(['', '']);
                });
            }
        }

        // Expected results
        if (labExp.expectedResults) {
            formatted.push(['', '']);
            formatted.push(['Expected Results', '']);
            if (typeof labExp.expectedResults === 'object' && !Array.isArray(labExp.expectedResults)) {
                Object.entries(labExp.expectedResults).forEach(([key, value]) => {
                    const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                    if (typeof value === 'object' && !Array.isArray(value)) {
                        formatted.push([`    ${label}`, '']);
                        Object.entries(value).forEach(([subK, subV]) => {
                            const subLabel = subK.charAt(0).toUpperCase() + subK.slice(1).replace(/([A-Z])/g, ' $1');
                            formatted.push([`        ${subLabel}`, String(subV)]);
                        });
                    } else if (Array.isArray(value)) {
                        formatted.push([`    ${label}`, '']);
                        value.forEach(v => formatted.push([`        •`, String(v)]));
                    } else {
                        formatted.push([`    ${label}`, String(value)]);
                    }
                });
            } else if (Array.isArray(labExp.expectedResults)) {
                labExp.expectedResults.forEach((result, idx) => {
                    formatted.push([`    ${idx + 1}.`, String(result)]);
                });
            } else {
                formatted.push(['    ', String(labExp.expectedResults)]);
            }
        }

        // Observations
        if (labExp.observations) {
            formatted.push(['', '']);
            formatted.push(['Observations', '']);
            if (Array.isArray(labExp.observations)) {
                labExp.observations.forEach((obs, idx) => {
                    formatted.push([`    ${idx + 1}.`, String(obs)]);
                });
            } else if (typeof labExp.observations === 'object') {
                Object.entries(labExp.observations).forEach(([key, value]) => {
                    const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                    formatted.push([`    ${label}:`, '']);
                    if (Array.isArray(value)) {
                        value.forEach(obs => formatted.push([`        -`, String(obs)]));
                    } else if (typeof value === 'object') {
                        Object.entries(value).forEach(([subKey, subValue]) => {
                            const subLabel = subKey.charAt(0).toUpperCase() + subKey.slice(1).replace(/([A-Z])/g, ' $1');
                            formatted.push([`        ${subLabel}:`, '']);
                            if (Array.isArray(subValue)) {
                                subValue.forEach(item => formatted.push([`            -`, String(item)]));
                            } else {
                                formatted.push([`            `, String(subValue)]);
                            }
                        });
                    } else {
                        formatted.push([`        `, String(value)]);
                    }
                });
            }
        }

        // Results summary
        if (labExp.results) {
            formatted.push(['', '']);
            formatted.push(['Results Summary', String(labExp.results)]);
        }

        // Conclusions
        if (labExp.conclusions) {
            formatted.push(['', '']);
            formatted.push(['Conclusions', '']);
            if (Array.isArray(labExp.conclusions)) {
                labExp.conclusions.forEach((c, idx) => {
                    formatted.push([`    ${idx + 1}.`, String(c)]);
                });
            } else {
                formatted.push(['    ', String(labExp.conclusions)]);
            }
        }

        // Connection to historical work
        if (labExp.connectionToHistorical) {
            formatted.push(['', '']);
            formatted.push(['Connection to Historical Experiment', String(labExp.connectionToHistorical)]);
        }

        // Real world applications
        if (labExp.realWorldApplications) {
            formatted.push(['', '']);
            formatted.push(['Real-World Applications', '']);
            if (Array.isArray(labExp.realWorldApplications)) {
                labExp.realWorldApplications.forEach(app => {
                    formatted.push(['    •', String(app)]);
                });
            } else if (typeof labExp.realWorldApplications === 'object') {
                Object.entries(labExp.realWorldApplications).forEach(([key, value]) => {
                    const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                    formatted.push([`    ${label}:`, String(value)]);
                });
            }
        }

        // Modern extensions
        if (labExp.modernExtensions) {
            formatted.push(['', '']);
            formatted.push(['Modern Extensions', '']);
            if (Array.isArray(labExp.modernExtensions)) {
                labExp.modernExtensions.forEach(ext => {
                    formatted.push(['    •', String(ext)]);
                });
            }
        }

        // Extensions (alternative key)
        if (labExp.extensions) {
            formatted.push(['', '']);
            formatted.push(['Further Investigation / Extensions', '']);
            if (Array.isArray(labExp.extensions)) {
                labExp.extensions.forEach(ext => {
                    formatted.push(['    •', String(ext)]);
                });
            }
        }

        // Troubleshooting
        if (labExp.troubleshooting) {
            formatted.push(['', '']);
            formatted.push(['Troubleshooting Guide', '']);
            if (Array.isArray(labExp.troubleshooting)) {
                labExp.troubleshooting.forEach(tip => {
                    formatted.push(['    ▸', String(tip)]);
                });
            } else if (typeof labExp.troubleshooting === 'object') {
                Object.entries(labExp.troubleshooting).forEach(([problem, solution]) => {
                    formatted.push([`    Problem: ${problem}`, `Solution: ${solution}`]);
                });
            }
        }

        // Limitations
        if (labExp.limitations) {
            formatted.push(['', '']);
            formatted.push(['Limitations', '']);
            if (Array.isArray(labExp.limitations)) {
                labExp.limitations.forEach(lim => {
                    formatted.push(['    •', String(lim)]);
                });
            }
        }

        return formatted;
    }

    formatAnalysis(analysis) {
        const formatted = [];

        if (typeof analysis === 'object' && !Array.isArray(analysis)) {
            Object.entries(analysis).forEach(([key, value]) => {
                const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                if (Array.isArray(value)) {
                    formatted.push([label, '']);
                    value.forEach((item, idx) => {
                        formatted.push([`    ${idx + 1}.`, String(item)]);
                    });
                } else if (typeof value === 'object' && value !== null) {
                    formatted.push([label, '']);
                    Object.entries(value).forEach(([subKey, subValue]) => {
                        const subLabel = subKey.charAt(0).toUpperCase() + subKey.slice(1).replace(/([A-Z])/g, ' $1');
                        if (Array.isArray(subValue)) {
                            formatted.push([`    ${subLabel}`, '']);
                            subValue.forEach((item, i) => {
                                formatted.push([`        ${i + 1}.`, String(item)]);
                            });
                        } else {
                            formatted.push([`    ${subLabel}`, String(subValue)]);
                        }
                    });
                } else {
                    formatted.push([label, String(value)]);
                }
            });
        } else if (Array.isArray(analysis)) {
            analysis.forEach((item, idx) => {
                formatted.push([`    ${idx + 1}.`, String(item)]);
            });
        } else {
            formatted.push(['Analysis', String(analysis)]);
        }

        return formatted;
    }

    formatConclusions(conclusions) {
        const formatted = [];

        if (Array.isArray(conclusions)) {
            conclusions.forEach((conclusion, idx) => {
                formatted.push([`${idx + 1}.`, String(conclusion)]);
            });
        } else if (typeof conclusions === 'object') {
            Object.entries(conclusions).forEach(([key, value]) => {
                const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                formatted.push([label, String(value)]);
            });
        } else {
            formatted.push(['Conclusion', String(conclusions)]);
        }

        return formatted;
    }

    formatApplications(applications) {
        const formatted = [];

        if (Array.isArray(applications)) {
            applications.forEach(app => {
                formatted.push(['    •', String(app)]);
            });
        } else if (typeof applications === 'object') {
            Object.entries(applications).forEach(([key, value]) => {
                const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                formatted.push([`    ${label}`, String(value)]);
            });
        } else {
            formatted.push(['    ', String(applications)]);
        }

        return formatted;
    }

    formatExtensions(extensions) {
        const formatted = [];

        if (Array.isArray(extensions)) {
            extensions.forEach((ext, idx) => {
                formatted.push([`    ${idx + 1}.`, String(ext)]);
            });
        } else if (typeof extensions === 'object') {
            Object.entries(extensions).forEach(([key, value]) => {
                const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                formatted.push([`    ${label}`, String(value)]);
            });
        } else {
            formatted.push(['    ', String(extensions)]);
        }

        return formatted;
    }

    formatSafety(safety) {
        const formatted = [];

        if (Array.isArray(safety)) {
            safety.forEach(note => {
                formatted.push(['    ⚠', String(note)]);
            });
        } else if (typeof safety === 'object') {
            Object.entries(safety).forEach(([key, value]) => {
                const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                formatted.push([`    ⚠ ${label}`, String(value)]);
            });
        } else {
            formatted.push(['    ⚠', String(safety)]);
        }

        return formatted;
    }

    // ========================================
    // WORKBOOK GENERATION
    // ========================================

    generateExperimentWorkbook(experimentContent) {
        this.currentWorkbook = {
            title: experimentContent.experimentName,
            category: experimentContent.category,
            relatedTopics: experimentContent.relatedTopics,
            sections: experimentContent.sections,
            generatedAt: new Date().toISOString(),
            type: 'digestive_experiment_workbook'
        };
        return this.currentWorkbook;
    }

    // ========================================
    // QUERY AND RETRIEVAL HELPERS
    // ========================================

    getRelatedExperiments(topicId) {
        const related = [];

        Object.entries(this.digestiveExperiments).forEach(([id, experiment]) => {
            if (experiment.relatedTopics.includes(topicId)) {
                related.push({
                    id,
                    name: experiment.name,
                    category: experiment.category,
                    historicalScientist: experiment.historicalBackground?.scientist,
                    historicalYear: experiment.historicalBackground?.year,
                    labTitle: experiment.labExperiment?.title
                });
            }
        });

        return related;
    }

    getAllExperiments() {
        return Object.entries(this.digestiveExperiments).map(([id, exp]) => ({
            id,
            name: exp.name,
            category: exp.category,
            relatedTopics: exp.relatedTopics,
            scientist: exp.historicalBackground?.scientist,
            year: exp.historicalBackground?.year || exp.historicalBackground?.years,
            labTitle: exp.labExperiment?.title,
            hypothesis: exp.labExperiment?.hypothesis
        }));
    }

    getAllTopics() {
        return Object.entries(this.digestiveTopics).map(([id, topic]) => ({
            id,
            name: topic.name,
            category: topic.category,
            description: topic.description,
            difficulty: topic.difficulty,
            prerequisites: topic.prerequisites,
            relatedExperiments: topic.relatedExperiments || []
        }));
    }

    getExperimentById(experimentId) {
        const exp = this.digestiveExperiments[experimentId];
        if (!exp) {
            throw new Error(`Experiment '${experimentId}' not found. Available: ${Object.keys(this.digestiveExperiments).join(', ')}`);
        }
        return exp;
    }

    getTopicById(topicId) {
        const topic = this.digestiveTopics[topicId];
        if (!topic) {
            throw new Error(`Topic '${topicId}' not found. Available: ${Object.keys(this.digestiveTopics).join(', ')}`);
        }
        return topic;
    }

    getExperimentsByCategory(category) {
        const results = [];
        Object.entries(this.digestiveExperiments).forEach(([id, exp]) => {
            if (exp.category === category) {
                results.push({ id, ...exp });
            }
        });
        return results;
    }

    getTopicsByCategory(category) {
        const results = [];
        Object.entries(this.digestiveTopics).forEach(([id, topic]) => {
            if (topic.category === category) {
                results.push({ id, ...topic });
            }
        });
        return results;
    }

    getMisconceptionsForTopic(topicId) {
        return this.commonMisconceptions[topicId] || {};
    }

    getAssessmentQuestionsForTopic(topicId) {
        return this.assessmentQuestions[topicId] || null;
    }

    getContextualScenariosForTopic(topicId) {
        return this.contextualScenarios[topicId] || [];
    }

    getMetacognitivePrompts(phase = 'duringLearning', topic = '') {
        const prompts = this.metacognitivePrompts[phase] || [];
        return prompts.map(p => p.replace('{topic}', topic).replace('{organ}', topic).replace('{concept}', topic));
    }

    searchExperiments(query) {
        if (!query) return this.getAllExperiments();
        const q = query.toLowerCase();
        const results = [];

        Object.entries(this.digestiveExperiments).forEach(([id, exp]) => {
            const searchTargets = [
                exp.name,
                exp.category,
                exp.historicalBackground?.scientist,
                exp.historicalBackground?.discovery,
                exp.labExperiment?.title,
                exp.labExperiment?.hypothesis,
                ...(exp.relatedTopics || [])
            ].filter(Boolean).map(s => String(s).toLowerCase());

            if (searchTargets.some(target => target.includes(q))) {
                results.push({
                    id,
                    name: exp.name,
                    category: exp.category,
                    scientist: exp.historicalBackground?.scientist,
                    labTitle: exp.labExperiment?.title,
                    relatedTopics: exp.relatedTopics
                });
            }
        });

        return results;
    }

    searchTopics(query) {
        if (!query) return this.getAllTopics();
        const q = query.toLowerCase();
        const results = [];

        Object.entries(this.digestiveTopics).forEach(([id, topic]) => {
            const searchTargets = [
                topic.name,
                topic.category,
                topic.description,
                ...(topic.prerequisites || [])
            ].filter(Boolean).map(s => String(s).toLowerCase());

            const patternMatch = topic.patterns?.some(p => p.test(query));

            if (patternMatch || searchTargets.some(target => target.includes(q))) {
                results.push({ id, ...topic });
            }
        });

        return results;
    }

    // ========================================
    // LEARNER PROFILE AND ADAPTIVE FEATURES
    // ========================================

    updateLearnerProfile(update) {
        const { topicId, mastered, struggling, level, style } = update;

        if (mastered && !this.learnerProfile.masteredTopics.includes(topicId)) {
            this.learnerProfile.masteredTopics.push(topicId);
            this.learnerProfile.strugglingTopics = this.learnerProfile.strugglingTopics.filter(t => t !== topicId);
        }

        if (struggling && !this.learnerProfile.strugglingTopics.includes(topicId)) {
            this.learnerProfile.strugglingTopics.push(topicId);
        }

        if (level) this.learnerProfile.currentLevel = level;
        if (style) this.learnerProfile.preferredLearningStyle = style;

        this.learnerProfile.progressHistory.push({
            timestamp: new Date().toISOString(),
            update
        });

        return this.learnerProfile;
    }

    getRecommendedContent(topicId) {
        const topic = this.digestiveTopics[topicId];
        if (!topic) return null;

        const level = this.learnerProfile.currentLevel;
        const recommendations = {
            topic: topicId,
            level,
            suggestedExperiments: this.getRelatedExperiments(topicId),
            misconceptions: this.getMisconceptionsForTopic(topicId),
            assessmentQuestions: this.getAssessmentQuestionsForTopic(topicId),
            contextualScenarios: this.getContextualScenariosForTopic(topicId),
            metacognitivePrompts: {
                before: this.getMetacognitivePrompts('beforeLearning', topic.name),
                during: this.getMetacognitivePrompts('duringLearning', topic.name),
                after: this.getMetacognitivePrompts('afterLearning', topic.name)
            },
            prerequisites: topic.prerequisites || [],
            prerequisitesMastered: (topic.prerequisites || []).filter(p =>
                this.learnerProfile.masteredTopics.includes(p)
            ),
            readyToLearn: (topic.prerequisites || []).every(p =>
                this.learnerProfile.masteredTopics.includes(p)
            )
        };

        return recommendations;
    }

    // ========================================
    // WORKBOOK SUMMARY AND EXPORT HELPERS
    // ========================================

    getWorkbookSummary() {
        return {
            totalTopics: Object.keys(this.digestiveTopics).length,
            totalExperiments: Object.keys(this.digestiveExperiments).length,
            topicsByCategory: this.getTopicsByCategory,
            experimentsByCategory: this.groupByCategory(this.digestiveExperiments),
            theme: this.theme,
            learnerProfile: this.learnerProfile
        };
    }

    groupByCategory(items) {
        const grouped = {};
        Object.entries(items).forEach(([id, item]) => {
            const cat = item.category || 'uncategorised';
            if (!grouped[cat]) grouped[cat] = [];
            grouped[cat].push({ id, name: item.name });
        });
        return grouped;
    }

    generateFullCurriculumMap() {
        const map = [];

        Object.entries(this.digestiveTopics).forEach(([topicId, topic]) => {
            const experiments = this.getRelatedExperiments(topicId);
            const lesson = this.lessons[topicId];

            map.push({
                topicId,
                topicName: topic.name,
                category: topic.category,
                difficulty: topic.difficulty,
                prerequisites: topic.prerequisites || [],
                hasLesson: !!lesson,
                lessonConceptCount: lesson?.concepts?.length || 0,
                relatedExperiments: experiments.map(e => ({
                    id: e.id,
                    name: e.name,
                    scientist: e.historicalScientist,
                    year: e.historicalYear
                })),
                misconceptionCount: Object.values(this.getMisconceptionsForTopic(topicId))
                    .reduce((sum, arr) => sum + arr.length, 0),
                hasAssessment: !!this.getAssessmentQuestionsForTopic(topicId),
                scenarios: this.getContextualScenariosForTopic(topicId).length
            });
        });

        return map;
    }

    waitForDiagrams() {
        if (this.diagramsPromise) return this.diagramsPromise;
        return Promise.resolve(this.renderedDiagrams);
    }
    getDigestiveContent(problem) {
        const handler = this.digestiveTopics[problem.type]?.handler;
        if (!handler) {
            throw new Error(`No handler available for digestive topic: ${problem.type}`);
        }

        let content = handler(problem);

        if (problem.parameters && Object.keys(problem.parameters).length > 0) {
            content = this.filterContentByParameters(content, problem.parameters);
        }

        return content;
    }

    filterContentByParameters(content, parameters) {
        if (!parameters || Object.keys(parameters).length === 0) return content;

        const filtered = { ...content };

        if (parameters.specificItems && Array.isArray(parameters.specificItems)) {
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

        if (parameters.organFilter) {
            const organ = parameters.organFilter.toLowerCase();
            const organKeys = Object.keys(filtered).filter(k =>
                k.toLowerCase().includes(organ)
            );
            if (organKeys.length > 0) {
                const organFiltered = {};
                organKeys.forEach(k => { organFiltered[k] = filtered[k]; });
                organFiltered.topic = filtered.topic;
                organFiltered.summary = filtered.summary;
                organFiltered.category = filtered.category;
                return organFiltered;
            }
        }

        if (parameters.difficulty) {
            filtered.detailLevel = parameters.difficulty;
        }

        return filtered;
    }

    getRelatedExperiments(topicType) {
        const related = [];
        for (const [expId, experiment] of Object.entries(this.digestiveExperiments)) {
            if (experiment.relatedTopics.includes(topicType)) {
                related.push({
                    id: expId,
                    name: experiment.name,
                    category: experiment.category,
                    scientist: experiment.historicalBackground?.scientist,
                    year: experiment.historicalBackground?.year
                });
            }
        }
        return related;
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
                adapted.clinicalDetail = 'minimal';
                break;

            case 'intermediate':
                adapted.vocabulary = 'standard';
                adapted.examples = this.selectMixedExamples(content.examples);
                adapted.depth = 'moderate';
                adapted.clinicalDetail = 'moderate';
                break;

            case 'advanced':
                adapted.vocabulary = 'technical';
                adapted.examples = this.selectAdvancedExamples(content.examples);
                adapted.depth = 'comprehensive';
                adapted.clinicalDetail = 'full';
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
            currentResearch: `Current research in ${content.topic} includes gut microbiome interactions, novel therapeutic targets, and gut-brain axis communication.`,
            openQuestions: "Unresolved questions include mechanisms of gut microbiome-host interactions, precise regulation of gut hormones, and causes of functional GI disorders.",
            techniques: "Advanced techniques include single-cell RNA sequencing of intestinal epithelium, gut-on-a-chip models, organoids, and high-resolution manometry."
        };
    }

    getContextualScenarios(topicType) {
        return this.contextualScenarios[topicType] || [];
    }

    getMetacognitivePrompts(topicType) {
        return {
            beforeLearning: this.metacognitivePrompts.beforeLearning.map(p =>
                p.replace('{topic}', this.digestiveTopics[topicType]?.name || topicType)
            ),
            duringLearning: this.metacognitivePrompts.duringLearning.map(p =>
                p.replace('{organ}', this.digestiveTopics[topicType]?.name || topicType)
                 .replace('{concept}', topicType)
            ),
            afterLearning: this.metacognitivePrompts.afterLearning.map(p =>
                p.replace('{topic}', this.digestiveTopics[topicType]?.name || topicType)
            ),
            clinicalReasoning: this.metacognitivePrompts.clinicalReasoning || []
        };
    }

    updateLearnerProfile(topicType, performance) {
        if (performance.score >= 0.8) {
            if (!this.learnerProfile.masteredTopics.includes(topicType)) {
                this.learnerProfile.masteredTopics.push(topicType);
            }
            this.learnerProfile.strugglingTopics = this.learnerProfile.strugglingTopics.filter(
                t => t !== topicType
            );
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

    generateDigestiveContent(problem, content) {
        const contentSections = [];

        contentSections.push(this.generateOverviewSection(problem, content));

        if (content.anatomy) {
            contentSections.push(this.generateAnatomySection(content));
        }

        if (content.digestion || content.gastricJuice || content.salivaComposition) {
            contentSections.push(this.generateDigestionSection(content));
        }

        if (content.absorption || content.nutrientAbsorption) {
            contentSections.push(this.generateAbsorptionSection(content));
        }

        if (content.motility || content.peristalsis || content.swallowing) {
            contentSections.push(this.generateMotilitySection(content));
        }

        if (content.enzymes || content.enzymeTable || content.completeEnzymeReference) {
            contentSections.push(this.generateEnzymeSection(content));
        }

        if (content.hormoneTable || content.gastrin || content.CCK || content.GLP1) {
            contentSections.push(this.generateHormoneSection(content));
        }

        if (content.gutMicrobiome || content.microbiome) {
            contentSections.push(this.generateMicrobiomeSection(content));
        }

        if (content.clinicalConditions || content.pathology || content.clinicalApplications) {
            contentSections.push(this.generateClinicalSection(content));
        }

        if (content.examples) {
            contentSections.push(this.generateExamplesSection(content));
        }

        if (content.contextualScenarios) {
            contentSections.push(this.generateContextualScenariosSection(content));
        }

        if (this.includeExperiments && content.relatedExperiments) {
            contentSections.push(this.generateRelatedExperimentsSection(content));
        }

        if (content.metacognitivePrompts) {
            contentSections.push(this.generateMetacognitiveSection(content));
        }

        return contentSections;
    }

    generateOverviewSection(problem, content) {
        return {
            type: 'overview',
            title: `${content.topic || problem.type} - Overview`,
            data: {
                topic: content.topic,
                category: content.category,
                summary: content.summary,
                keyPoints: this.extractDigestiveKeyPoints(content),
                difficulty: problem.difficulty,
                prerequisites: problem.prerequisites
            }
        };
    }

    generateAnatomySection(content) {
        if (!content.anatomy) return null;
        return {
            type: 'anatomy',
            title: 'Anatomy and Structure',
            data: {
                regions: content.anatomy.regions || {},
                dimensions: content.anatomy.dimensions || {},
                wallLayers: content.anatomy.wallLayers || {},
                bloodSupply: content.anatomy.bloodSupply || {},
                nerveSupply: content.anatomy.nerveSupply || {},
                specialFeatures: content.anatomy.specialFeatures || {}
            }
        };
    }

    generateDigestionSection(content) {
        const digestionData = content.digestion || content.gastricJuice || content.salivaComposition || {};
        return {
            type: 'digestion',
            title: 'Digestive Processes',
            data: {
                mechanical: digestionData.mechanical || {},
                chemical: digestionData.chemical || content.chemicalDigestionInMouth || {},
                enzymes: digestionData.enzymes || {},
                products: digestionData.products || {},
                carbohydrates: digestionData.carbohydrateDigestion || {},
                proteins: digestionData.proteinDigestion || {},
                fats: digestionData.fatDigestion || {},
                juice: content.gastricJuice || content.salivaComposition || {}
            }
        };
    }

    generateAbsorptionSection(content) {
        const absorptionData = content.absorption || content.nutrientAbsorption || {};
        return {
            type: 'absorption',
            title: 'Nutrient Absorption',
            data: {
                mechanisms: absorptionData.mechanisms || absorptionData,
                glucose: absorptionData.glucose || absorptionData.glucoseAbsorption || {},
                aminoAcids: absorptionData.aminoAcids || absorptionData.proteinAbsorption || {},
                fats: absorptionData.fats || absorptionData.lipidAbsorption || {},
                vitamins: absorptionData.vitamins || {},
                minerals: absorptionData.minerals || {},
                water: absorptionData.water || absorptionData.waterAbsorption || {}
            }
        };
    }

    generateMotilitySection(content) {
        const motilityData = content.motility || content.peristalsis || {};
        return {
            type: 'motility',
            title: 'Motility and Movement',
            data: {
                peristalsis: content.peristalsis || motilityData.peristalsis || {},
                segmentation: motilityData.segmentation || {},
                MMC: motilityData.MMC || motilityData.migratingMotorComplex || {},
                swallowing: content.swallowing || {},
                sphincters: motilityData.sphincters || {},
                defecation: motilityData.defecation || content.defecation || {}
            }
        };
    }

    generateEnzymeSection(content) {
        const enzymeData = content.enzymes || content.enzymeTable || content.completeEnzymeReference || {};
        return {
            type: 'enzymes',
            title: 'Digestive Enzymes',
            data: {
                carbohydrases: enzymeData.carbohydrases || enzymeData.carbohydrates || {},
                proteases: enzymeData.proteases || enzymeData.proteins || {},
                lipases: enzymeData.lipases || enzymeData.lipids || {},
                brushBorder: enzymeData.brushBorderPhase || enzymeData.brushBorderEnzymes || {},
                kinetics: content.enzymeKinetics || {},
                inhibitors: enzymeData.inhibitors || content.inhibitors || {},
                pHEffects: enzymeData.pHEffects || content.pHEffects || {}
            }
        };
    }

    generateHormoneSection(content) {
        const hormoneData = content.hormoneTable || {};
        return {
            type: 'hormones',
            title: 'Digestive Hormones',
            data: {
                gastrin: content.gastrin || hormoneData.gastrin || {},
                secretin: content.secretin || hormoneData.secretin || {},
                CCK: content.CCK || hormoneData.CCK || {},
                GLP1: content.GLP1 || hormoneData.GLP1 || {},
                GIP: content.GIP || hormoneData.GIP || {},
                motilin: content.motilin || hormoneData.motilin || {},
                somatostatin: content.somatostatin || hormoneData.somatostatin || {},
                gutBrainAxis: content.gutBrainAxis || {},
                ghrelin: content.ghrelin || {}
            }
        };
    }

    generateMicrobiomeSection(content) {
        const microbiomeData = content.gutMicrobiome || content.microbiome || {};
        return {
            type: 'microbiome',
            title: 'Gut Microbiome',
            data: {
                composition: microbiomeData.composition || {},
                functions: microbiomeData.functions || {},
                SCFAs: microbiomeData.SCFAs || {},
                dysbiosis: microbiomeData.dysbiosis || '',
                clinicalRelevance: microbiomeData.clinical || {}
            }
        };
    }

    generateClinicalSection(content) {
        const clinicalData = content.clinicalConditions ||
            content.pathology ||
            content.clinicalApplications || {};
        return {
            type: 'clinical',
            title: 'Clinical Relevance',
            data: {
                conditions: clinicalData,
                applications: content.clinicalApplications || [],
                drugs: content.drugs || {},
                diagnosis: content.diagnosis || {},
                treatment: content.treatment || {}
            }
        };
    }

    generateExamplesSection(content) {
        if (!content.examples) return null;
        return {
            type: 'examples',
            title: 'Clinical and Real-World Examples',
            data: { examples: content.examples }
        };
    }

    generateContextualScenariosSection(content) {
        if (!content.contextualScenarios || content.contextualScenarios.length === 0) return null;
        return {
            type: 'contextual_scenarios',
            title: 'Clinical Scenarios and Applications',
            data: { scenarios: content.contextualScenarios }
        };
    }

    generateRelatedExperimentsSection(content) {
        if (!content.relatedExperiments || content.relatedExperiments.length === 0) return null;
        return {
            type: 'related_experiments',
            title: 'Related Experiments',
            data: {
                experiments: content.relatedExperiments.map(exp => ({
                    id: exp.id,
                    name: exp.name,
                    category: exp.category,
                    scientist: exp.scientist,
                    year: exp.year
                }))
            }
        };
    }

    generateMetacognitiveSection(content) {
        if (!content.metacognitivePrompts) return null;
        return {
            type: 'metacognitive',
            title: 'Learning Reflection Prompts',
            data: { prompts: content.metacognitivePrompts }
        };
    }

    generateDigestiveExperimentContent(experiment, parameters = {}) {
        const lab = experiment.labExperiment;
        const history = experiment.historicalBackground;

        const sections = [
            {
                title: 'Historical Background',
                type: 'history',
                data: {
                    scientist: history.scientist,
                    year: history.year || history.years,
                    discovery: history.discovery,
                    significance: history.significance,
                    quote: history.quote || null,
                    contributions: history.contributions || []
                }
            },
            {
                title: 'Experiment Overview',
                type: 'experiment_overview',
                data: {
                    title: lab.title,
                    hypothesis: lab.hypothesis,
                    purpose: lab.purpose,
                    background: lab.background || {}
                }
            },
            {
                title: 'Variables',
                type: 'variables',
                data: lab.variables
            },
            {
                title: 'Materials',
                type: 'materials',
                data: { materials: lab.materials }
            },
            {
                title: 'Safety',
                type: 'safety',
                data: { precautions: lab.safetyPrecautions }
            },
            {
                title: 'Procedure',
                type: 'procedure',
                data: {
                    steps: Array.isArray(lab.procedure)
                        ? lab.procedure
                        : Object.entries(lab.procedure).flatMap(([k, v]) =>
                            Array.isArray(v) ? [`--- ${k} ---`, ...v] : [v]
                          )
                }
            },
            {
                title: 'Expected Results',
                type: 'expected_results',
                data: { results: lab.expectedResults }
            },
            {
                title: 'Data Table',
                type: 'data_table',
                data: { table: lab.dataTable || [] }
            },
            {
                title: 'Analysis',
                type: 'analysis',
                data: { analysis: lab.analysis || {} }
            },
            {
                title: 'Conclusions',
                type: 'conclusions',
                data: { conclusions: lab.conclusions || [] }
            },
            {
                title: 'Real-World Applications',
                type: 'applications',
                data: {
                    applications: lab.realWorldApplications ||
                        lab.realWorldRelevance ||
                        []
                }
            },
            {
                title: 'Extensions and Modern Connections',
                type: 'extensions',
                data: {
                    extensions: lab.modernExtensions || lab.extensions || []
                }
            }
        ];

        return {
            experimentId: Object.keys(this.digestiveExperiments).find(
                k => this.digestiveExperiments[k] === experiment
            ),
            name: experiment.name,
            category: experiment.category,
            relatedTopics: experiment.relatedTopics,
            sections: sections.filter(s => s.data && Object.keys(s.data).length > 0),
            parameters: parameters
        };
    }

    extractDigestiveKeyPoints(content) {
        const keyPoints = [];

        if (content.summary) keyPoints.push(content.summary.split('.')[0] + '.');

        if (content.anatomy?.regions) {
            const regionCount = Object.keys(content.anatomy.regions).length;
            keyPoints.push(`Consists of ${regionCount} anatomical regions.`);
        }

        if (content.digestion?.carbohydrateDigestion) {
            keyPoints.push("Completes carbohydrate, protein, and fat digestion.");
        }

        if (content.absorption) {
            keyPoints.push("Absorbs nutrients via specific membrane transporters.");
        }

        if (content.hormoneTable || content.gastrin) {
            keyPoints.push("Regulated by multiple gut hormones.");
        }

        if (content.clinicalConditions) {
            const conditions = Object.keys(content.clinicalConditions);
            if (conditions.length > 0) {
                keyPoints.push(`Clinical conditions include: ${conditions.slice(0, 3).join(', ')}.`);
            }
        }

        return keyPoints.slice(0, 5);
    }

    // ========================================
    // WORKBOOK GENERATION METHODS
    // ========================================

    generateDigestiveWorkbook() {
        if (!this.currentContent || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();
        workbook.title = 'Digestive System Workbook';
        workbook.subject = 'Human Digestive Anatomy and Physiology';

        if (this.includeDiagramsInWorkbook) {
            this.diagramsPromise = this.generateDigestiveDiagramDataAsync();
        }

        workbook.sections = [
            this.createDigestiveProblemSection(),
            this.createDigestiveOverviewSection(),
            this.createAnatomyWorkbookSection(),
            this.createDigestionWorkbookSection(),
            this.createAbsorptionWorkbookSection(),
            this.createMotilityWorkbookSection(),
            this.createEnzymeWorkbookSection(),
            this.createHormoneWorkbookSection(),
            this.createDiagramsPlaceholderSection(),
            this.createClinicalWorkbookSection(),
            this.createDigestiveContextualScenariosSection(),
            this.createDigestiveRelatedExperimentsSection(),
            this.createDigestiveMisconceptionsSection(),
            this.createDigestiveMetacognitiveSection(),
            this.createDigestiveAssessmentSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    generateDigestiveExperimentWorkbook(experimentContent) {
        const workbook = this.createWorkbookStructure();
        workbook.title = 'Digestive System Experiment Workbook';
        workbook.subject = 'Digestive Physiology Laboratory';

        workbook.sections = experimentContent.sections.map(section => ({
            title: section.title,
            type: section.type,
            data: section.data
        }));

        if (experimentContent.relatedTopics) {
            workbook.sections.push({
                title: 'Related Digestive Topics',
                type: 'related_topics',
                data: experimentContent.relatedTopics.map(topic => [
                    this.digestiveTopics[topic]?.name || topic,
                    this.digestiveTopics[topic]?.description || ''
                ])
            });
        }

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Digestive System Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            learnerLevel: this.learnerProfile.currentLevel,
            sections: []
        };
    }

    createDigestiveProblemSection() {
        if (!this.currentProblem) return null;
        return {
            title: 'Topic Overview',
            type: 'problem',
            data: {
                topic: this.currentProblem.originalTopic,
                type: this.digestiveTopics[this.currentProblem.type]?.name,
                category: this.digestiveTopics[this.currentProblem.type]?.category,
                difficulty: this.currentProblem.difficulty,
                prerequisites: this.currentProblem.prerequisites
            }
        };
    }

    createDigestiveOverviewSection() {
        if (!this.currentContent) return null;
        return {
            title: 'Content Summary',
            type: 'overview',
            data: {
                summary: this.currentContent.summary,
                keyPoints: this.extractDigestiveKeyPoints(this.currentContent),
                topicRelevance: this.getTopicRelevance(this.currentProblem.type)
            }
        };
    }

    createAnatomyWorkbookSection() {
        if (!this.currentContent?.anatomy) return null;
        return {
            title: 'Anatomy and Structure',
            type: 'anatomy',
            data: this.currentContent.anatomy
        };
    }

    createDigestionWorkbookSection() {
        const hasDigestion = this.currentContent?.digestion ||
            this.currentContent?.gastricJuice ||
            this.currentContent?.salivaComposition ||
            this.currentContent?.chemicalDigestionInMouth;
        if (!hasDigestion) return null;
        return {
            title: 'Digestive Processes',
            type: 'digestion',
            data: {
                gastricJuice: this.currentContent.gastricJuice || null,
                saliva: this.currentContent.salivaComposition || null,
                digestion: this.currentContent.digestion || null,
                proteinDigestion: this.currentContent.proteinDigestion || null,
                chemicalDigestion: this.currentContent.chemicalDigestionInMouth || null
            }
        };
    }

    createAbsorptionWorkbookSection() {
        if (!this.currentContent?.absorption && !this.currentContent?.nutrientAbsorption) return null;
        return {
            title: 'Nutrient Absorption',
            type: 'absorption',
            data: this.currentContent.absorption || this.currentContent.nutrientAbsorption
        };
    }

    createMotilityWorkbookSection() {
        const hasMotility = this.currentContent?.motility ||
            this.currentContent?.peristalsis ||
            this.currentContent?.swallowing ||
            this.currentContent?.gastricMotility;
        if (!hasMotility) return null;
        return {
            title: 'Motility and Movement',
            type: 'motility',
            data: {
                motility: this.currentContent.motility || null,
                peristalsis: this.currentContent.peristalsis || null,
                swallowing: this.currentContent.swallowing || null,
                gastricMotility: this.currentContent.gastricMotility || null
            }
        };
    }

    createEnzymeWorkbookSection() {
        const hasEnzymes = this.currentContent?.enzymes ||
            this.currentContent?.enzymeTable ||
            this.currentContent?.completeEnzymeReference ||
            this.currentContent?.brushBorderEnzymes;
        if (!hasEnzymes) return null;
        return {
            title: 'Digestive Enzymes',
            type: 'enzymes',
            data: {
                enzymeTable: this.currentContent.enzymeTable || null,
                completeReference: this.currentContent.completeEnzymeReference || null,
                brushBorder: this.currentContent.brushBorderEnzymes || null,
                kinetics: this.currentContent.enzymeKinetics || null
            }
        };
    }

    createHormoneWorkbookSection() {
        const hasHormones = this.currentContent?.hormoneTable ||
            this.currentContent?.gastrin ||
            this.currentContent?.gutBrainAxis;
        if (!hasHormones) return null;
        return {
            title: 'Digestive Hormones',
            type: 'hormones',
            data: {
                hormoneTable: this.currentContent.hormoneTable || null,
                gastrin: this.currentContent.gastrin || null,
                secretin: this.currentContent.secretin || null,
                CCK: this.currentContent.CCK || null,
                GLP1: this.currentContent.GLP1 || null,
                gutBrainAxis: this.currentContent.gutBrainAxis || null,
                ghrelin: this.currentContent.ghrelin || null
            }
        };
    }

    createClinicalWorkbookSection() {
        const hasClinical = this.currentContent?.clinicalConditions ||
            this.currentContent?.pathology ||
            this.currentContent?.clinicalApplications;
        if (!hasClinical) return null;
        return {
            title: 'Clinical Relevance and Applications',
            type: 'clinical',
            data: {
                conditions: this.currentContent.clinicalConditions ||
                    this.currentContent.pathology || null,
                applications: this.currentContent.clinicalApplications ||
                    this.currentContent.applications || []
            }
        };
    }

    createDigestiveContextualScenariosSection() {
        const scenarios = this.currentContent?.contextualScenarios;
        if (!scenarios || scenarios.length === 0) return null;
        return {
            title: 'Clinical Scenarios',
            type: 'contextual_scenarios',
            data: { scenarios }
        };
    }

    createDigestiveRelatedExperimentsSection() {
        const experiments = this.currentContent?.relatedExperiments;
        if (!experiments || experiments.length === 0) return null;
        return {
            title: 'Related Experiments',
            type: 'related_experiments',
            data: { experiments }
        };
    }

    createDigestiveMisconceptionsSection() {
        if (!this.includeCommonMisconceptions) return null;
        const topicMisconceptions = this.commonMisconceptions[this.currentProblem?.type];
        if (!topicMisconceptions) return null;
        return {
            title: 'Common Misconceptions',
            type: 'misconceptions',
            data: { misconceptions: topicMisconceptions }
        };
    }

    createDigestiveMetacognitiveSection() {
        if (!this.metacognitiveSupport || !this.currentContent?.metacognitivePrompts) return null;
        return {
            title: 'Learning Reflection',
            type: 'metacognitive',
            data: { prompts: this.currentContent.metacognitivePrompts }
        };
    }

    createDigestiveAssessmentSection() {
        if (!this.assessmentFeedback) return null;
        const questions = this.assessmentQuestions[this.currentProblem?.type];
        if (!questions) return null;
        return {
            title: 'Assessment Questions',
            type: 'assessment',
            data: {
                questions,
                rubric: this.assessmentRubrics.knowledgeLevel,
                learnerLevel: this.learnerProfile.currentLevel
            }
        };
    }

    createDiagramsPlaceholderSection() {
        if (!this.includeDiagramsInWorkbook) return null;
        return {
            title: 'Anatomical Diagrams',
            type: 'diagrams',
            status: 'loading',
            diagrams: [],
            note: 'Digestive system diagrams are being rendered...'
        };
    }

    // ========================================
    // DIAGRAM GENERATION METHODS
    // ========================================

    async generateDigestiveDiagramDataAsync() {
        if (!this.currentContent) return;
        const { type } = this.currentProblem;
        const diagramKeys = this.getRelevantDigestiveDiagrams(type);

        this.diagramData = {
            type: type,
            diagrams: diagramKeys,
            renderedImages: [],
            status: 'rendering',
            placeholder: false,
            note: 'Digestive system anatomical diagrams'
        };

        if (diagramKeys.length > 0) {
            await this.renderDiagramsForTopic(diagramKeys);
            this.diagramData.status = 'complete';
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
                if (this.renderedDiagrams.has(diagramKey)) {
                    this.diagramData.renderedImages.push(this.renderedDiagrams.get(diagramKey));
                    continue;
                }

                const canvas = await this.diagramRenderer.renderDiagram(
                    diagramKey, 0, 0,
                    this.diagramWidth, this.diagramHeight,
                    { showLabels: true, backgroundColor: '#FFFFFF' }
                );

                const pngBuffer = await canvas.encode('png');

                const diagramData = {
                    key: diagramKey,
                    buffer: pngBuffer,
                    width: this.diagramWidth,
                    height: this.diagramHeight,
                    type: 'png'
                };

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

    updateDiagramsSection() {
        if (!this.currentWorkbook || !this.diagramData) return;

        const idx = this.currentWorkbook.sections.findIndex(s => s.type === 'diagrams');
        if (idx === -1) return;

        const diagramSection = {
            title: 'Anatomical Diagrams',
            type: 'diagrams',
            status: 'complete',
            diagrams: this.diagramData.renderedImages.map(diagram =>
                diagram.type === 'error'
                    ? { key: diagram.key, error: diagram.error, type: 'error' }
                    : { key: diagram.key, buffer: diagram.buffer, width: diagram.width, height: diagram.height, type: 'image' }
            )
        };

        this.currentWorkbook.sections[idx] = diagramSection;
    }

    async waitForDiagrams() {
        if (this.diagramsPromise) await this.diagramsPromise;
        return this.diagramData;
    }

    areDiagramsReady() {
        return this.diagramData && this.diagramData.status === 'complete';
    }

    getRelevantDigestiveDiagrams(topicType) {
        const diagramMap = {
            oral_cavity: [
                'oralCavity', 'salivaryGlands', 'teethStructure', 'tastePathway'
            ],
            esophagus: [
                'esophagusStructure', 'swallowingReflex', 'peristalsisWave'
            ],
            stomach: [
                'stomachAnatomy', 'gastricGlands', 'parietalCellMechanism',
                'gastricSecretionPhases'
            ],
            small_intestine: [
                'smallIntestineStructure', 'villusStructure', 'brushBorderEnzymes',
                'nutrientAbsorption', 'enterocyteTransporters'
            ],
            large_intestine: [
                'largeIntestineAnatomy', 'colonStructure', 'gutMicrobiome',
                'defecationReflex'
            ],
            liver_gallbladder: [
                'liverAnatomy', 'hepaticLobule', 'bileProduction',
                'enterohepatic', 'gallbladderFunction'
            ],
            pancreas: [
                'pancreasAnatomy', 'pancreaticAcinus', 'zymogenActivation',
                'isletsLangerhans', 'insulinSignalling', 'glucagonAction'
            ],
            digestive_enzymes: [
                'enzymeAction', 'zymogenCascade', 'brushBorderEnzymes',
                'enzymeKinetics', 'inhibitionTypes'
            ],
            nutrient_absorption: [
                'enterocyteTransporters', 'chylomicronFormation', 'portalCirculation',
                'ironAbsorption', 'B12Absorption'
            ],
            digestive_hormones: [
                'gutHormones', 'gastrinSecretion', 'CCKAction',
                'GLP1Signalling', 'gutBrainAxis'
            ]
        };

        return diagramMap[topicType] || [];
    }

    async exportDiagram(diagramKey, filename, options = {}) {
        const width = options.width || this.diagramWidth;
        const height = options.height || this.diagramHeight;

        try {
            await this.diagramRenderer.exportToFile(diagramKey, filename, width, height, {
                showLabels: options.showLabels !== false,
                backgroundColor: options.backgroundColor || '#FFFFFF'
            });
            return { success: true, filename };
        } catch (error) {
            console.error(`Failed to export diagram ${diagramKey}:`, error);
            return { success: false, error: error.message };
        }
    }

    async exportAllDiagramsForTopic(outputDir = './digestive-diagrams') {
        await this.waitForDiagrams();
        if (!this.diagramData?.diagrams) {
            throw new Error('No diagrams available for current digestive topic');
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
            return await this.diagramRenderer.exportToPng(diagramKey, width, height, {
                showLabels: options.showLabels !== false,
                backgroundColor: options.backgroundColor || '#FFFFFF'
            });
        } catch (error) {
            console.error(`Failed to get diagram buffer for ${diagramKey}:`, error);
            return null;
        }
    }

    clearDiagramCache() {
        this.renderedDiagrams.clear();
        this.diagramsPromise = null;
    }

    getDiagramCacheStats() {
        return {
            cachedDiagrams: this.renderedDiagrams.size,
            cacheKeys: Array.from(this.renderedDiagrams.keys()),
            diagramsReady: this.areDiagramsReady(),
            status: this.diagramData?.status || 'not_started'
        };
    }

    generateDigestiveDiagramData() {
        if (!this.currentContent) return;
        const { type } = this.currentProblem;
        this.diagramData = {
            type: type,
            diagrams: this.getRelevantDigestiveDiagrams(type),
            placeholder: true,
            note: 'Digestive system anatomical diagram generation'
        };
    }

    // ========================================
    // DIGESTIVE SYSTEM SPECIFIC HELPER METHODS
    // ========================================

    getTopicRelevance(topicType) {
        const relevance = {
            oral_cavity: "The oral cavity initiates both mechanical and chemical digestion, setting the stage for all downstream processing.",
            esophagus: "The esophagus transports food via peristalsis; dysfunction causes debilitating dysphagia and reflux disease.",
            stomach: "The stomach provides the acidic environment for protein digestion and acts as a regulated reservoir for chyme delivery.",
            small_intestine: "The small intestine is the principal site of nutrient absorption; its surface area adaptations are essential for adequate nutrition.",
            large_intestine: "The large intestine recovers water and electrolytes and houses the microbiome critical for immunity and metabolism.",
            liver_gallbladder: "The liver is the metabolic hub of the body; bile production is essential for fat digestion and absorption.",
            pancreas: "The pancreas provides the most powerful digestive enzyme cocktail and regulates blood glucose through insulin and glucagon.",
            digestive_enzymes: "Digestive enzymes are the biochemical tools that break macromolecules into absorbable monomers.",
            nutrient_absorption: "Nutrient absorption delivers the products of digestion to tissues; defects cause malnutrition and disease.",
            digestive_hormones: "Gut hormones coordinate all aspects of digestion and are important drug targets for diabetes and obesity."
        };
        return relevance[topicType] || "Important digestive system concept";
    }

    suggestRelatedTopics() {
        if (!this.currentProblem) return [];

        const relatedTopicsMap = {
            oral_cavity: ['esophagus', 'digestive_enzymes'],
            esophagus: ['oral_cavity', 'stomach'],
            stomach: ['esophagus', 'small_intestine', 'digestive_enzymes', 'digestive_hormones'],
            small_intestine: ['stomach', 'large_intestine', 'nutrient_absorption', 'liver_gallbladder', 'pancreas'],
            large_intestine: ['small_intestine', 'nutrient_absorption'],
            liver_gallbladder: ['small_intestine', 'pancreas', 'nutrient_absorption'],
            pancreas: ['stomach', 'small_intestine', 'digestive_enzymes', 'digestive_hormones'],
            digestive_enzymes: ['stomach', 'small_intestine', 'pancreas'],
            nutrient_absorption: ['small_intestine', 'large_intestine', 'liver_gallbladder'],
            digestive_hormones: ['stomach', 'small_intestine', 'pancreas']
        };

        const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];
        return relatedTypes.map(type => ({
            type: type,
            name: this.digestiveTopics[type]?.name,
            description: this.digestiveTopics[type]?.description
        }));
    }

    generateGlossary() {
        if (!this.currentContent) return {};
        const glossary = {};

        const addToGlossary = (obj, depth = 0) => {
            if (depth > 3 || !obj || typeof obj !== 'object') return;
            if (obj.definition && typeof obj.definition === 'string') return;
            Object.entries(obj).forEach(([key, value]) => {
                if (typeof value === 'string' && value.length > 10 && value.length < 300) {
                    const formattedKey = this.formatKey(key);
                    if (!glossary[formattedKey] && !['summary', 'topic', 'category', 'note'].includes(key)) {
                        glossary[formattedKey] = value;
                    }
                } else if (typeof value === 'object' && value !== null) {
                    if (value.definition && typeof value.definition === 'string') {
                        glossary[this.formatKey(key)] = value.definition;
                    } else {
                        addToGlossary(value, depth + 1);
                    }
                }
            });
        };

        if (this.currentContent.anatomy) addToGlossary(this.currentContent.anatomy);
        if (this.currentContent.digestion) addToGlossary(this.currentContent.digestion);
        if (this.currentContent.absorption) addToGlossary(this.currentContent.absorption);

        const lessons = this.lessons[this.currentProblem?.type];
        if (lessons?.keyDefinitions) {
            Object.entries(lessons.keyDefinitions).forEach(([term, def]) => {
                glossary[term] = def;
            });
        }

        return glossary;
    }

    formatKey(key) {
        return key
            .replace(/([A-Z])/g, ' $1')
            .replace(/[_-]/g, ' ')
            .replace(/^\s/, '')
            .split(' ')
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ');
    }

    generateDigestiveAnalogy(concept) {
        const analogies = {
            peristalsis: "Like squeezing toothpaste from a tube - squeeze behind and release ahead to move contents forward",
            villi: "Like a shag carpet compared to smooth linoleum - enormously more surface area in same space",
            gastricAcid: "Like a highly controlled acid bath that denatures food proteins before enzyme action",
            bile: "Like dish soap in a greasy pan - breaks large fat globules into tiny droplets",
            emulsification: "Like a food processor breaking a large butter block into millions of tiny droplets",
            pylorus: "Like a security gate - only allows small, well-processed particles through",
            enterohepatic: "Like a recycling system - bile salts used, returned to liver, reused",
            zymogenActivation: "Like a safety pin on a grenade - removed only when needed to prevent premature damage",
            mucusBicarbonateBarrier: "Like a pH-neutralising force field protecting the stomach wall from its own acid",
            LES: "Like a one-way valve that should only open downward (to let food in) not upward (to let acid out)",
            intestinalSurfaceArea: "Like folding a piece of paper repeatedly - each fold multiplies the available surface",
            chylomicron: "Like a lipoprotein delivery truck packaging fats for transport through the lymphatic motorway",
            SGLT1: "Like a revolving door that requires both a person (glucose) and a partner (Na⁺) to move through",
            intrinsicFactor: "Like a chaperone escort for vitamin B12 - without the escort, B12 cannot reach its destination",
            pancreaticZymogens: "Like a loaded but safety-locked weapon - powerful but safe until deliberately unlocked in duodenum",
            gut_microbiome: "Like a rainforest ecosystem - vast diversity performing countless functions; disturbance causes cascading problems",
            gastrin: "Like a starter button for gastric acid production - pressed by arrival of food",
            GLP1: "Like a multi-function remote control - simultaneously stimulates insulin, suppresses glucagon, delays emptying, and reduces appetite"
        };
        return analogies[concept] || "Performs a specialised digestive function";
    }

    adaptDigestiveLanguage(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'gastric': 'stomach',
                    'hepatic': 'liver',
                    'duodenum': 'first part of small intestine',
                    'jejunum': 'middle small intestine',
                    'ileum': 'last part of small intestine',
                    'peristalsis': 'wave-like muscle contractions that push food along',
                    'hydrolysis': 'breaking apart with water',
                    'denaturation': 'unfolding of proteins by acid',
                    'chyme': 'liquid food mixture from stomach',
                    'bolus': 'chewed food ball',
                    'lumen': 'inside space of the gut tube',
                    'mucosa': 'inner lining of the gut',
                    'villi': 'tiny finger-like projections in small intestine',
                    'microvilli': 'microscopic projections on gut cells',
                    'enterocyte': 'absorptive gut cell',
                    'sphincter': 'ring of muscle controlling flow'
                }
            },
            intermediate: {
                replacements: {
                    'gastric': 'gastric (stomach)',
                    'hepatic': 'hepatic (liver)',
                    'duodenum': 'duodenum (first segment of small intestine)',
                    'peristalsis': 'peristalsis (coordinated muscular wave)',
                    'chyme': 'chyme (semi-liquid food mass)',
                    'villi': 'villi (intestinal projections)'
                }
            },
            advanced: {
                replacements: {
                    'stomach lining': 'gastric mucosa',
                    'stomach cells': 'gastric epithelial cells',
                    'fat breakdown': 'lipolysis',
                    'bile salts': 'conjugated bile acids',
                    'gut bacteria': 'intestinal microbiota'
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

    validateDigestiveContent(content) {
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

        const hasSubstantiveContent =
            content.anatomy ||
            content.digestion ||
            content.absorption ||
            content.motility ||
            content.enzymes ||
            content.hormoneTable;

        if (!hasSubstantiveContent) {
            validationResults.warnings.push("Limited substantive content");
            validationResults.suggestions.push("Consider adding anatomy, digestion, or absorption details");
        }

        if (!content.examples && !content.clinicalApplications) {
            validationResults.suggestions.push("Consider adding clinical examples and applications");
        }
        if (!content.clinicalConditions && !content.pathology) {
            validationResults.suggestions.push("Consider adding clinical conditions for context");
        }

        return validationResults;
    }

    calculateDigestiveContentCompleteness() {
        if (!this.currentContent) return 0;
        let score = 0;
        const maxScore = 12;

        if (this.currentContent.topic) score++;
        if (this.currentContent.summary) score++;
        if (this.currentContent.anatomy) score++;
        if (this.currentContent.digestion || this.currentContent.gastricJuice || this.currentContent.salivaComposition) score++;
        if (this.currentContent.absorption) score++;
        if (this.currentContent.motility || this.currentContent.peristalsis) score++;
        if (this.currentContent.enzymes || this.currentContent.enzymeTable) score++;
        if (this.currentContent.hormoneTable || this.currentContent.gastrin) score++;
        if (this.currentContent.clinicalConditions || this.currentContent.pathology) score++;
        if (this.currentContent.examples) score++;
        if (this.currentContent.clinicalApplications) score++;
        if (this.currentContent.contextualScenarios) score++;

        return Math.round((score / maxScore) * 100);
    }

    getDigestiveContentQualityMetrics() {
        return {
            completeness: this.calculateDigestiveContentCompleteness(),
            hasAnatomy: !!this.currentContent?.anatomy,
            hasDigestion: !!(this.currentContent?.digestion || this.currentContent?.gastricJuice),
            hasAbsorption: !!this.currentContent?.absorption,
            hasMotility: !!(this.currentContent?.motility || this.currentContent?.peristalsis),
            hasEnzymes: !!(this.currentContent?.enzymes || this.currentContent?.enzymeTable),
            hasHormones: !!(this.currentContent?.hormoneTable || this.currentContent?.gastrin),
            hasClinical: !!(this.currentContent?.clinicalConditions || this.currentContent?.pathology),
            hasExamples: !!this.currentContent?.examples,
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
            strugglingTopics: this.learnerProfile.strugglingTopics.length,
            contentCompleteness: this.calculateDigestiveContentCompleteness(),
            qualityMetrics: this.getDigestiveContentQualityMetrics()
        };
    }

    generateDigestiveContentSummary() {
        if (!this.currentContent) return null;
        return {
            topic: this.currentContent.topic,
            category: this.currentContent.category,
            summary: this.currentContent.summary,
            keyPoints: this.extractDigestiveKeyPoints(this.currentContent),
            coverage: {
                anatomy: !!this.currentContent.anatomy,
                digestion: !!(this.currentContent.digestion || this.currentContent.gastricJuice),
                absorption: !!this.currentContent.absorption,
                motility: !!(this.currentContent.motility || this.currentContent.peristalsis),
                enzymes: !!(this.currentContent.enzymes || this.currentContent.enzymeTable),
                hormones: !!(this.currentContent.hormoneTable || this.currentContent.gastrin),
                clinical: !!(this.currentContent.clinicalConditions || this.currentContent.pathology),
                examples: this.currentContent.examples?.length || 0
            },
            difficulty: this.currentProblem?.difficulty,
            relatedTopics: this.suggestRelatedTopics()
        };
    }

    assessDigestiveContentDifficulty() {
        if (!this.currentContent) return 'unknown';
        let difficultyScore = 0;

        const beginnerTopics = ['oral_cavity', 'esophagus'];
        const intermediateTopics = ['stomach', 'small_intestine', 'large_intestine', 'liver_gallbladder', 'digestive_enzymes'];
        const advancedTopics = ['pancreas', 'nutrient_absorption', 'digestive_hormones'];

        if (beginnerTopics.includes(this.currentProblem.type)) difficultyScore += 1;
        else if (intermediateTopics.includes(this.currentProblem.type)) difficultyScore += 2;
        else if (advancedTopics.includes(this.currentProblem.type)) difficultyScore += 3;

        if (this.explanationLevel === 'advanced') difficultyScore++;
        if (this.explanationLevel === 'basic') difficultyScore--;

        if (difficultyScore <= 1) return 'beginner';
        if (difficultyScore <= 3) return 'intermediate';
        return 'advanced';
    }

    generateDigestiveLearningObjectives() {
        if (!this.currentProblem) return [];

        const objectivesDatabase = {
            oral_cavity: [
                "Identify the types and functions of teeth in mastication",
                "Describe the composition and functions of saliva",
                "Explain the role of salivary amylase in starch digestion",
                "Trace the neural control of salivation"
            ],
            esophagus: [
                "Describe the three phases of swallowing (deglutition)",
                "Explain the mechanism of peristalsis in the esophagus",
                "Identify the two esophageal sphincters and their functions",
                "Relate esophageal structure to common clinical disorders"
            ],
            stomach: [
                "Identify the regions of the stomach and their specialised functions",
                "Explain the mechanism of HCl secretion by parietal cells",
                "Describe the three phases of gastric secretion",
                "Explain how the stomach protects itself from acid"
            ],
            small_intestine: [
                "Explain the three levels of surface area amplification",
                "Identify the brush border enzymes and their substrates",
                "Describe the mechanisms of glucose, amino acid, and fat absorption",
                "Compare the specific functions of duodenum, jejunum, and ileum"
            ],
            large_intestine: [
                "Describe water and electrolyte absorption in the colon",
                "Explain the role and composition of the gut microbiome",
                "Describe the defecation reflex and its neural control",
                "Relate short-chain fatty acids to colonocyte health"
            ],
            liver_gallbladder: [
                "Describe the composition and functions of bile",
                "Explain the mechanism of fat emulsification by bile salts",
                "Trace the enterohepatic circulation of bile salts",
                "List the major metabolic functions of the liver"
            ],
            pancreas: [
                "Distinguish between exocrine and endocrine pancreatic functions",
                "Describe the zymogen activation cascade in the duodenum",
                "Explain the mechanism of insulin secretion by β-cells",
                "Compare type 1 and type 2 diabetes mellitus"
            ],
            digestive_enzymes: [
                "List digestive enzymes by source, substrate, and products",
                "Explain why proteases are secreted as inactive zymogens",
                "Describe the effect of pH on pepsin and trypsin activity",
                "Explain the mechanisms of competitive and non-competitive inhibition"
            ],
            nutrient_absorption: [
                "Explain secondary active transport using SGLT1 as an example",
                "Trace the absorption and transport of long-chain fatty acids",
                "Describe the complex absorption mechanism for vitamin B12",
                "Compare the routes taken by water-soluble and fat-soluble nutrients"
            ],
            digestive_hormones: [
                "Identify the source, stimulus, and actions of gastrin, secretin, and CCK",
                "Explain the incretin effect and the role of GLP-1",
                "Describe how gut hormones coordinate digestion across multiple organs",
                "Relate GLP-1 receptor agonist drugs to their mechanism of action"
            ]
        };

        return objectivesDatabase[this.currentProblem.type] || [
            "Understand the anatomy and physiology of this digestive structure",
            "Apply knowledge to clinical digestive scenarios",
            "Connect structure to function in the digestive system"
        ];
    }

    identifyDigestivePrerequisites() {
        if (!this.currentProblem) return [];

        const prerequisitesDatabase = {
            oral_cavity: [
                "Basic cell biology",
                "Enzyme concept (catalysts, substrates)",
                "Basic chemistry (pH, acids)"
            ],
            esophagus: [
                "Muscle types (skeletal vs smooth)",
                "Nervous system basics (autonomic)",
                "Oral cavity and bolus formation"
            ],
            stomach: [
                "Enzyme basics (pepsin, activation)",
                "Acid-base chemistry (pH, HCl)",
                "Esophagus and LES"
            ],
            small_intestine: [
                "Cell membrane transport mechanisms",
                "Carbohydrate, protein, and fat chemistry",
                "Stomach and chyme production"
            ],
            large_intestine: [
                "Small intestine absorption",
                "Osmosis and water movement",
                "Basic microbiology (bacteria)"
            ],
            liver_gallbladder: [
                "Lipid chemistry (amphipathic molecules)",
                "Small intestine anatomy",
                "Basic biochemistry (bile acid synthesis)"
            ],
            pancreas: [
                "Enzyme kinetics basics",
                "Protein chemistry (zymogens)",
                "Hormone signalling basics",
                "Blood glucose regulation overview"
            ],
            digestive_enzymes: [
                "Protein structure (active site)",
                "Chemical bonds (peptide, glycosidic, ester)",
                "pH and enzyme activity"
            ],
            nutrient_absorption: [
                "Cell membrane transport (active, passive, facilitated)",
                "Small intestine structure (villi, microvilli)",
                "Circulatory and lymphatic systems"
            ],
            digestive_hormones: [
                "Endocrine system basics",
                "Receptor types (GPCR)",
                "Pancreatic anatomy and function"
            ]
        };

        return prerequisitesDatabase[this.currentProblem.type] || [
            "General biology background",
            "Basic anatomy and physiology"
        ];
    }

    generateDigestiveStudyTips() {
        if (!this.currentProblem) return [];

        const studyTipsDatabase = {
            oral_cavity: [
                "Identify all tooth types in a mirror - feel how each cuts, tears, or grinds",
                "Draw and label the three salivary glands with their ducts",
                "Create a table comparing salivary gland types (serous vs mucous)",
                "Trace the neural pathway for salivation from stimulus to response"
            ],
            esophagus: [
                "Act out the three phases of swallowing to remember the sequence",
                "Draw a diagram of the esophageal wall layers with muscle type for each third",
                "Create a comparison table of UES vs LES (location, muscle type, pressure, function)",
                "Relate each phase of swallowing to a specific cranial nerve"
            ],
            stomach: [
                "Draw and label all regions of the stomach with their cell types",
                "Create a flowchart for the three-step HCl secretion mechanism",
                "Make a table for all three phases of gastric secretion (stimulus, mechanism, % output)",
                "Trace how H. pylori breaks through the mucus-bicarbonate barrier"
            ],
            small_intestine: [
                "Calculate surface area mathematically: smooth tube → plicae → villi → microvilli",
                "Draw an enterocyte with all transporters on apical and basolateral membranes",
                "Create colour-coded diagrams of carbohydrate, protein, and fat digestion pathways",
                "Distinguish duodenum, jejunum, ileum by their histological features"
            ],
            large_intestine: [
                "Draw the entire large intestine labelling all regions from cecum to anus",
                "Create a table of gut microbiome functions (fermentation, vitamins, immunity)",
                "Trace water absorption: volume entering ileum → absorbed in colon → in faeces",
                "Map the defecation reflex: rectal filling → internal sphincter → external sphincter"
            ],
            liver_gallbladder: [
                "Draw the enterohepatic circulation as a cyclical diagram",
                "Create a table of all liver functions across categories (metabolic, digestive, immune)",
                "Explain emulsification mathematically: calculate surface area increase from 1mm → 1μm droplets",
                "Practice explaining the three types of jaundice (pre-, intra-, post-hepatic)"
            ],
            pancreas: [
                "Draw the zymogen activation cascade as a flow diagram with each enzyme",
                "Create a side-by-side comparison of exocrine vs endocrine pancreas",
                "Trace the steps of insulin secretion from glucose entry to granule exocytosis",
                "Compare type 1 vs type 2 diabetes using a table of mechanism, features, treatment"
            ],
            digestive_enzymes: [
                "Create a master table: enzyme, source, substrate, bond type, products, optimal pH",
                "Draw pH-activity curves for pepsin and trypsin on the same graph",
                "Make a diagram of the zymogen cascade from trypsinogen to all active enzymes",
                "Practise drawing Michaelis-Menten curves with and without inhibitor types"
            ],
            nutrient_absorption: [
                "Draw SGLT1 mechanism step-by-step showing Na⁺ gradient driving glucose uptake",
                "Create a flowchart of fat absorption from micelle to thoracic duct",
                "Trace vitamin B12 from food to terminal ileum receptor - all 9 steps",
                "Distinguish portal vein route vs lymphatic route for different nutrients"
            ],
            digestive_hormones: [
                "Create a hormone table: cell type, location, stimulus, actions, clinical use",
                "Draw GLP-1 signalling in the β-cell showing cAMP cascade",
                "Map how a fatty meal triggers CCK → gallbladder contraction → lipase action",
                "Study GLP-1 agonist trials to understand translational physiology"
            ]
        };

        return studyTipsDatabase[this.currentProblem.type] || [
            "Trace food through the entire digestive tract as a study exercise",
            "Create diagrams linking structure to function for each organ",
            "Use clinical cases to anchor abstract physiology to real presentations",
            "Connect each organ's function to what happens when it fails"
        ];
    }

    generateDigestiveProcessTimeline(processName) {
        const timelines = {
            'Complete Digestion of a Meal': [
                { stage: 'Oral Phase', duration: '1-2 minutes', location: 'Mouth', events: 'Mastication, salivary amylase, bolus formation' },
                { stage: 'Esophageal Transit', duration: '8-20 seconds', location: 'Esophagus', events: 'Peristalsis, LES relaxation' },
                { stage: 'Gastric Processing', duration: '2-4 hours', location: 'Stomach', events: 'Churning, HCl, pepsin, chyme formation, pyloric release' },
                { stage: 'Duodenal Processing', duration: '1-3 hours', location: 'Duodenum', events: 'Neutralisation, bile, pancreatic enzymes, hormones released' },
                { stage: 'Jejunal Absorption', duration: '1-3 hours', location: 'Jejunum', events: 'Major absorption of carbohydrates, proteins, iron, fat-soluble vitamins' },
                { stage: 'Ileal Absorption', duration: '2-4 hours', location: 'Ileum', events: 'B12, bile salts, remaining nutrients absorbed' },
                { stage: 'Colonic Processing', duration: '12-48 hours', location: 'Colon', events: 'Water absorption, fermentation, faeces formation' },
                { stage: 'Defecation', duration: 'Minutes', location: 'Rectum/Anus', events: 'Mass movements, rectal filling, controlled elimination' }
            ],
            'HCl Secretion': [
                { step: 'Stimulus', events: 'Gastrin, ACh, or histamine bind parietal cell receptor' },
                { step: 'Signal Cascade', events: 'Gq/Gs → IP3/cAMP → Ca²⁺/PKA' },
                { step: 'Membrane Fusion', events: 'Tubulovesicles fuse with canalicular membrane → 50-100x surface area increase' },
                { step: 'CO₂ Hydration', events: 'CO₂ + H₂O → H₂CO₃ (carbonic anhydrase II)' },
                { step: 'Proton Pumping', events: 'H⁺/K⁺ ATPase exports H⁺ into canaliculus; K⁺ recycled' },
                { step: 'Cl⁻ Secretion', events: 'CFTR and ClC-2 export Cl⁻ into canaliculus' },
                { step: 'HCl Formation', events: 'H⁺ + Cl⁻ → HCl (pH 0.8 in canaliculus)' },
                { step: 'Alkaline Tide', events: 'HCO₃⁻ exits basolaterally via AE2 → blood pH rises transiently' }
            ],
            'Fat Absorption': [
                { step: 'Emulsification', events: 'Bile salts disperse fat globules into ~1μm droplets' },
                { step: 'Lipolysis', events: 'Pancreatic lipase + colipase hydrolyse TG → 2-MAG + 2 FA' },
                { step: 'Micelle Formation', events: 'Products + bile salts → mixed micelles (~5nm)' },
                { step: 'Brush Border Approach', events: 'Micelles diffuse to brush border; lipids partition out' },
                { step: 'Enterocyte Entry', events: 'FA and 2-MAG cross apical membrane (CD36/passive)' },
                { step: 'Re-esterification', events: 'SER: FA + 2-MAG → TG (DGAT1/2); cholesterol esterified' },
                { step: 'Chylomicron Assembly', events: 'Golgi: ApoB-48 + TG + CE + PL → chylomicron (~500nm)' },
                { step: 'Exocytosis', events: 'Chylomicron exits basolaterally → intercellular space → lacteal' },
                { step: 'Lymphatic Transport', events: 'Lacteal → mesenteric lymphatics → thoracic duct → blood' }
            ],
            'Zymogen Activation Cascade': [
                { step: 'Stimulus', events: 'Fat/protein in duodenum → I-cells → CCK + vagal ACh' },
                { step: 'Secretion', events: 'Acinar cells exocytose zymogen granules into pancreatic duct' },
                { step: 'Duodenal Arrival', events: 'Zymogens enter duodenum via ampulla of Vater' },
                { step: 'Enterokinase', events: 'Brush border enterokinase cleaves trypsinogen → trypsin (6-aa peptide removed)' },
                { step: 'Cascade Activation', events: 'Trypsin activates: chymotrypsinogen, proelastase, procarboxypeptidase A&B, pro-colipase, pro-phospholipase A2' },
                { step: 'Digestion', events: 'Active enzymes digest proteins, fats, and nucleic acids' }
            ]
        };
        return timelines[processName] || [];
    }

    generateDigestiveContentHierarchy() {
        if (!this.currentContent) return null;

        const hierarchy = {
            root: this.currentContent.topic,
            children: []
        };

        if (this.currentContent.anatomy) {
            hierarchy.children.push({
                name: 'Anatomy',
                type: 'anatomy',
                subNodes: Object.keys(this.currentContent.anatomy)
            });
        }
        if (this.currentContent.digestion || this.currentContent.gastricJuice) {
            hierarchy.children.push({ name: 'Digestive Processes', type: 'digestion' });
        }
        if (this.currentContent.absorption) {
            hierarchy.children.push({ name: 'Absorption', type: 'absorption' });
        }
        if (this.currentContent.motility || this.currentContent.peristalsis) {
            hierarchy.children.push({ name: 'Motility', type: 'motility' });
        }
        if (this.currentContent.hormoneTable || this.currentContent.gastrin) {
            hierarchy.children.push({ name: 'Hormonal Regulation', type: 'hormones' });
        }
        if (this.currentContent.clinicalConditions || this.currentContent.pathology) {
            hierarchy.children.push({ name: 'Clinical Relevance', type: 'clinical' });
        }

        return hierarchy;
    }

    filterDigestiveContentByOrgan(organ) {
        if (!this.currentContent) return null;

        const organKeywords = {
            mouth: ['oral', 'mouth', 'teeth', 'tongue', 'saliva', 'mastication'],
            stomach: ['gastric', 'stomach', 'pepsin', 'HCl', 'parietal', 'chief'],
            smallIntestine: ['villus', 'villi', 'duodenum', 'jejunum', 'ileum', 'brush border'],
            largeIntestine: ['colon', 'cecum', 'rectum', 'haustra', 'microbiome'],
            liver: ['hepatic', 'liver', 'bile', 'hepatocyte', 'kupffer'],
            pancreas: ['pancreas', 'acinar', 'islet', 'insulin', 'glucagon', 'zymogen']
        };

        const keywords = organKeywords[organ] || [organ.toLowerCase()];
        const filtered = { topic: this.currentContent.topic, organ, items: {} };

        const searchObj = (obj, depth = 0) => {
            if (depth > 3 || !obj || typeof obj !== 'object') return;
            Object.entries(obj).forEach(([key, value]) => {
                const keyLower = key.toLowerCase();
                if (keywords.some(kw => keyLower.includes(kw))) {
                    filtered.items[key] = value;
                } else if (typeof value === 'object') {
                    searchObj(value, depth + 1);
                }
            });
        };

        searchObj(this.currentContent);
        return filtered;
    }

    generateOrganPathologyConnection(organType) {
        const connections = {
            oral_cavity: {
                structure: "Non-keratinised squamous epithelium → vulnerable to abrasion, infection",
                pathology: "Caries (enamel demineralisation), xerostomia (reduced salivation), oral cancer",
                mechanism: "Acid + enamel → caries; reduced salivary flow → bacteria overgrowth"
            },
            stomach: {
                structure: "Mucus-bicarbonate barrier protects mucosa",
                pathology: "Peptic ulcer disease, GERD, gastric cancer",
                mechanism: "H. pylori/NSAIDs impair mucosal defence → acid damages mucosa → ulcer"
            },
            small_intestine: {
                structure: "Villi + microvilli maximise absorption surface",
                pathology: "Coeliac disease (villous atrophy), Crohn's disease, SBS",
                mechanism: "Immune/inflammatory damage → villous atrophy → reduced absorption → malnutrition"
            },
            large_intestine: {
                structure: "Flat mucosa with crypts; taeniae create haustra",
                pathology: "Colorectal cancer, IBD, IBS, C. difficile",
                mechanism: "Dysbiosis/inflammation → mucosal damage; adenoma-carcinoma sequence"
            },
            liver_gallbladder: {
                structure: "Hepatic lobules with sinusoids; bile canaliculi",
                pathology: "Cirrhosis, cholestasis, gallstones, hepatocellular carcinoma",
                mechanism: "Fibrosis replaces hepatocytes → portal hypertension + liver failure"
            },
            pancreas: {
                structure: "Zymogen granules in acinar cells; islets surrounded by exocrine tissue",
                pathology: "Pancreatitis, diabetes mellitus, pancreatic cancer",
                mechanism: "Premature zymogen activation → autodigestion; β-cell loss/resistance → diabetes"
            }
        };

        return connections[organType] || { structure: '', pathology: '', mechanism: '' };
    }
}

export default EnhancedDigestiveSystemWorkbook;
