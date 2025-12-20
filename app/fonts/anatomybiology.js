
// Enhanced Human Anatomy Biology Workbook - Comprehensive Biological Content System
import * as math from 'mathjs';

export class EnhancedHumanAnatomyWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "anatomical";
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

        this.anatomicalSymbols = this.initializeAnatomicalSymbols();
        this.setThemeColors();
        this.initializeAnatomyTopics();
        this.initializeMisconceptionDatabase();
        this.initializeExplanationTemplates();
        this.initializeAnatomyLessons();
    }

    setThemeColors() {
        const themes = {
            anatomical: {
                background: '#ffffff',
                gridColor: '#c0c0c0',
                headerBg: '#d32f2f',
                headerText: '#ffffff',
                sectionBg: '#ffcdd2',
                sectionText: '#b71c1c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#ffebee',
                resultText: '#c62828',
                definitionBg: '#fff3e0',
                definitionText: '#e65100',
                stepBg: '#fce4ec',
                stepText: '#880e4f',
                borderColor: '#ef5350',
                contentBg: '#e1f5fe',
                contentText: '#01579b',
                diagramBg: '#f3e5f5',
                structureBg: '#e8f5e9'
            },
            medical: {
                background: '#f8f9fa',
                gridColor: '#0277bd',
                headerBg: '#01579b',
                headerText: '#ffffff',
                sectionBg: '#b3e5fc',
                sectionText: '#01579b',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e1f5fe',
                resultText: '#0277bd',
                definitionBg: '#fff9c4',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#4fc3f7',
                contentBg: '#fce4ec',
                contentText: '#880e4f',
                diagramBg: '#fff3e0',
                structureBg: '#e8eaf6'
            }
        };

        this.colors = themes[this.theme] || themes.anatomical;
    }

    initializeAnatomicalSymbols() {
        return {
            // Common anatomical symbols
            'alpha': 'α',
            'beta': 'β',
            'delta': 'Δ',
            'arrow': '→',
            'doubleArrow': '↔',
            'increased': '↑',
            'decreased': '↓',
            'degree': '°',
            'celsius': '°C',
            'approximately': '≈',
            'greaterThan': '>',
            'lessThan': '<',
            // Medical notation
            'O2': 'O₂',
            'CO2': 'CO₂',
            'H2O': 'H₂O',
            'ATP': 'ATP',
            'pH': 'pH',
            'mmHg': 'mmHg',
            'bpm': 'bpm',
            'mL': 'mL',
            'L': 'L',
            'mg': 'mg',
            'g': 'g',
            'kg': 'kg'
        };
    }

    initializeAnatomyTopics() {
        this.anatomyTopics = {
            // 1. Circulatory System
            circulatory_system: {
                patterns: [
                    /circulatory.*system|cardiovascular/i,
                    /heart|blood.*vessel|artery|vein/i,
                    /circulation|blood.*flow/i,
                    /cardiac/i
                ],
                handler: this.handleCirculatorySystem.bind(this),
                name: 'Circulatory System',
                category: 'organ_systems',
                description: 'Transport system for blood, nutrients, and gases'
            },

            // 2. Respiratory System
            respiratory_system: {
                patterns: [
                    /respiratory.*system|breathing/i,
                    /lung|airway|alveoli/i,
                    /respiration|gas.*exchange/i,
                    /trachea|bronchi/i
                ],
                handler: this.handleRespiratorySystem.bind(this),
                name: 'Respiratory System',
                category: 'organ_systems',
                description: 'System for gas exchange and breathing'
            },

            // 3. Digestive System
            digestive_system: {
                patterns: [
                    /digestive.*system|digestion/i,
                    /stomach|intestine|liver|pancreas/i,
                    /gastrointestinal|alimentary/i,
                    /absorption|nutrient/i
                ],
                handler: this.handleDigestiveSystem.bind(this),
                name: 'Digestive System',
                category: 'organ_systems',
                description: 'System for breaking down food and absorbing nutrients'
            },

            // 4. Nervous System
            nervous_system: {
                patterns: [
                    /nervous.*system|neural/i,
                    /brain|spinal.*cord|nerve/i,
                    /neuron|synapse/i,
                    /central.*nervous|peripheral.*nervous/i
                ],
                handler: this.handleNervousSystem.bind(this),
                name: 'Nervous System',
                category: 'organ_systems',
                description: 'Control and communication system of the body'
            },

            // 5. Endocrine System
            endocrine_system: {
                patterns: [
                    /endocrine.*system|hormone/i,
                    /gland|pituitary|thyroid|adrenal/i,
                    /hormonal.*regulation/i,
                    /insulin|testosterone|estrogen/i
                ],
                handler: this.handleEndocrineSystem.bind(this),
                name: 'Endocrine System',
                category: 'organ_systems',
                description: 'Hormonal regulation and signaling system'
            },

            // 6. Skeletal System
            skeletal_system: {
                patterns: [
                    /skeletal.*system|skeleton/i,
                    /bone|cartilage|joint/i,
                    /skull|vertebra|femur/i,
                    /ossification|bone.*formation/i
                ],
                handler: this.handleSkeletalSystem.bind(this),
                name: 'Skeletal System',
                category: 'organ_systems',
                description: 'Structural support and protection system'
            },

            // 7. Muscular System
            muscular_system: {
                patterns: [
                    /muscular.*system|muscle/i,
                    /skeletal.*muscle|cardiac.*muscle|smooth.*muscle/i,
                    /contraction|movement/i,
                    /myofibril|sarcomere/i
                ],
                handler: this.handleMuscularSystem.bind(this),
                name: 'Muscular System',
                category: 'organ_systems',
                description: 'Movement and force generation system'
            },

            // 8. Excretory System
            excretory_system: {
                patterns: [
                    /excretory.*system|urinary.*system/i,
                    /kidney|bladder|ureter|urethra/i,
                    /nephron|filtration/i,
                    /urine.*formation|waste.*removal/i
                ],
                handler: this.handleExcretorySystem.bind(this),
                name: 'Excretory System',
                category: 'organ_systems',
                description: 'Waste removal and fluid balance system'
            },

            // 9. Immune System
            immune_system: {
                patterns: [
                    /immune.*system|immunity/i,
                    /lymphocyte|antibody|antigen/i,
                    /white.*blood.*cell|leukocyte/i,
                    /lymph.*node|spleen|thymus/i
                ],
                handler: this.handleImmuneSystem.bind(this),
                name: 'Immune System',
                category: 'organ_systems',
                description: 'Defense system against pathogens and disease'
            },

            // 10. Integumentary System
            integumentary_system: {
                patterns: [
                    /integumentary.*system|skin/i,
                    /epidermis|dermis|hypodermis/i,
                    /hair|nail|sweat.*gland/i,
                    /cutaneous/i
                ],
                handler: this.handleIntegumentarySystem.bind(this),
                name: 'Integumentary System',
                category: 'organ_systems',
                description: 'Protective covering of the body'
            },

            // 11. Reproductive System
            reproductive_system: {
                patterns: [
                    /reproductive.*system/i,
                    /ovary|testis|uterus|prostate/i,
                    /gamete|sperm|egg|ovum/i,
                    /pregnancy|fertilization/i
                ],
                handler: this.handleReproductiveSystem.bind(this),
                name: 'Reproductive System',
                category: 'organ_systems',
                description: 'System for reproduction and hormone production'
            },

            // 12. Lymphatic System
            lymphatic_system: {
                patterns: [
                    /lymphatic.*system|lymph/i,
                    /lymph.*vessel|lymph.*node/i,
                    /spleen|thymus|tonsil/i,
                    /lymphoid/i
                ],
                handler: this.handleLymphaticSystem.bind(this),
                name: 'Lymphatic System',
                category: 'organ_systems',
                description: 'Fluid balance and immune defense system'
            }
        };
    }

    initializeAnatomyLessons() {
        this.lessons = {
            circulatory_system: {
                title: "Circulatory System: Heart and Blood Vessels",
                concepts: [
                    "Heart pumps blood throughout the body",
                    "Blood vessels transport blood, nutrients, and gases",
                    "Double circulation: pulmonary and systemic",
                    "Blood pressure maintains blood flow"
                ],
                theory: "The circulatory system is a closed loop transport system that delivers oxygen and nutrients to tissues while removing carbon dioxide and metabolic wastes. The heart acts as a pump, creating pressure that drives blood through vessels.",
                keyDefinitions: {
                    "Heart": "Muscular pump with four chambers that circulates blood",
                    "Artery": "Blood vessel carrying blood away from heart (usually oxygenated)",
                    "Vein": "Blood vessel carrying blood toward heart (usually deoxygenated)",
                    "Capillary": "Tiny blood vessel where exchange occurs between blood and tissues",
                    "Blood Pressure": "Force exerted by blood against vessel walls",
                    "Cardiac Output": "Volume of blood pumped by heart per minute"
                },
                mainCategories: [
                    "Heart structure and function",
                    "Blood vessels (arteries, veins, capillaries)",
                    "Pulmonary vs systemic circulation",
                    "Blood composition and functions"
                ],
                applications: [
                    "Understanding cardiovascular disease",
                    "Blood pressure management",
                    "Exercise physiology",
                    "Cardiac emergency response"
                ]
            },

            respiratory_system: {
                title: "Respiratory System: Breathing and Gas Exchange",
                concepts: [
                    "Lungs facilitate gas exchange",
                    "Breathing involves inhalation and exhalation",
                    "Oxygen diffuses into blood, CO₂ diffuses out",
                    "Respiratory control is both voluntary and involuntary"
                ],
                theory: "The respiratory system brings oxygen into the body and removes carbon dioxide through the process of breathing and gas exchange. The diaphragm and intercostal muscles drive ventilation, while diffusion at the alveoli enables gas exchange.",
                keyDefinitions: {
                    "Alveoli": "Tiny air sacs in lungs where gas exchange occurs",
                    "Trachea": "Windpipe that connects throat to bronchi",
                    "Bronchi": "Airways branching from trachea into lungs",
                    "Diaphragm": "Primary muscle of breathing; contracts to draw air in",
                    "Ventilation": "Process of moving air in and out of lungs",
                    "Gas Exchange": "Diffusion of O₂ and CO₂ across alveolar-capillary membrane"
                },
                mainCategories: [
                    "Respiratory anatomy (airways, lungs)",
                    "Mechanics of breathing",
                    "Gas exchange and transport",
                    "Respiratory regulation"
                ],
                applications: [
                    "Understanding asthma and COPD",
                    "Respiratory therapy",
                    "High-altitude physiology",
                    "CPR and artificial ventilation"
                ]
            },

            digestive_system: {
                title: "Digestive System: Processing Food and Nutrients",
                concepts: [
                    "Digestion breaks down food mechanically and chemically",
                    "Absorption occurs primarily in small intestine",
                    "Accessory organs produce digestive enzymes",
                    "Different nutrients are processed differently"
                ],
                theory: "The digestive system is a continuous tube from mouth to anus that breaks down food into absorbable nutrients. Mechanical digestion (chewing, churning) and chemical digestion (enzymes, acids) work together to extract energy and building blocks.",
                keyDefinitions: {
                    "Peristalsis": "Wave-like muscle contractions moving food through digestive tract",
                    "Enzyme": "Biological catalyst that breaks down specific nutrients",
                    "Absorption": "Process of taking nutrients from digestive tract into blood",
                    "Villi": "Finger-like projections in small intestine increasing surface area",
                    "Bile": "Substance produced by liver that emulsifies fats",
                    "Gastric Juice": "Acidic fluid in stomach containing pepsin and HCl"
                },
                mainCategories: [
                    "Digestive organs (mouth, stomach, intestines)",
                    "Accessory organs (liver, pancreas, gallbladder)",
                    "Mechanical vs chemical digestion",
                    "Nutrient absorption and processing"
                ],
                applications: [
                    "Nutritional science",
                    "Managing digestive disorders",
                    "Food allergies and intolerances",
                    "Bariatric medicine"
                ]
            },

            nervous_system: {
                title: "Nervous System: Control and Communication",
                concepts: [
                    "Neurons transmit electrical and chemical signals",
                    "Brain processes information and coordinates responses",
                    "Spinal cord connects brain to body",
                    "Reflexes provide rapid automatic responses"
                ],
                theory: "The nervous system is the body's command center, receiving sensory input, processing information, and coordinating responses. It consists of the central nervous system (brain and spinal cord) and peripheral nervous system (nerves throughout body).",
                keyDefinitions: {
                    "Neuron": "Nerve cell that transmits electrical signals",
                    "Synapse": "Junction between neurons where neurotransmitters are released",
                    "Action Potential": "Electrical signal traveling along neuron",
                    "Neurotransmitter": "Chemical messenger released at synapse",
                    "Reflex Arc": "Neural pathway for automatic response to stimulus",
                    "Myelin": "Insulating layer around axons that speeds signal transmission"
                },
                mainCategories: [
                    "Central nervous system (CNS)",
                    "Peripheral nervous system (PNS)",
                    "Somatic vs autonomic nervous system",
                    "Sensory and motor pathways"
                ],
                applications: [
                    "Understanding neurological disorders",
                    "Brain injury treatment",
                    "Mental health and psychiatry",
                    "Neuropharmacology"
                ]
            },
            endocrine_system: {
                title: "Endocrine System: Hormonal Regulation",
                concepts: [
                    "Hormones are chemical messengers in blood",
                    "Glands secrete hormones into bloodstream",
                    "Negative feedback maintains homeostasis",
                    "Hormones regulate growth, metabolism, and reproduction"
                ],
                theory: "The endocrine system uses hormones to regulate long-term processes like growth, metabolism, and reproduction. Unlike the rapid nervous system, endocrine signaling is slower but longer-lasting, controlling homeostasis through feedback loops.",
                keyDefinitions: {
                    "Hormone": "Chemical messenger secreted into bloodstream",
                    "Gland": "Organ that produces and secretes hormones",
                    "Target Cell": "Cell with receptors for specific hormone",
                    "Negative Feedback": "Mechanism where output inhibits further production",
                    "Pituitary": "Master gland controlling other endocrine glands",
                    "Homeostasis": "Maintenance of stable internal conditions"
                },
                mainCategories: [
                    "Major endocrine glands",
                    "Hormone types and mechanisms",
                    "Feedback regulation",
                    "Hormone disorders"
                ],
                applications: [
                    "Diabetes management",
                    "Hormone replacement therapy",
                    "Growth disorders",
                    "Reproductive health"
                ]
            },

            skeletal_system: {
                title: "Skeletal System: Support and Protection",
                concepts: [
                    "Bones provide structure and support",
                    "Skeleton protects vital organs",
                    "Bones store minerals and produce blood cells",
                    "Joints allow movement between bones"
                ],
                theory: "The skeletal system is the body's framework, providing support, protection, movement (with muscles), mineral storage, and blood cell production. Bones are living tissues that constantly remodel throughout life.",
                keyDefinitions: {
                    "Bone": "Living connective tissue with mineral matrix",
                    "Cartilage": "Flexible connective tissue at joints and growth plates",
                    "Joint": "Point where two or more bones meet",
                    "Ligament": "Connective tissue connecting bone to bone",
                    "Ossification": "Process of bone formation",
                    "Bone Marrow": "Tissue inside bones producing blood cells"
                },
                mainCategories: [
                    "Axial skeleton (skull, spine, ribs)",
                    "Appendicular skeleton (limbs, girdles)",
                    "Bone structure and composition",
                    "Joint types and movements"
                ],
                applications: [
                    "Orthopedics and fracture treatment",
                    "Osteoporosis prevention",
                    "Sports medicine",
                    "Prosthetics and joint replacement"
                ]
            },

            muscular_system: {
                title: "Muscular System: Movement and Force",
                concepts: [
                    "Muscles contract to produce movement",
                    "Three muscle types: skeletal, cardiac, smooth",
                    "Muscle contraction requires ATP",
                    "Muscles work in antagonistic pairs"
                ],
                theory: "The muscular system enables movement, maintains posture, and generates heat. Muscles convert chemical energy (ATP) into mechanical work through the sliding filament mechanism of muscle contraction.",
                keyDefinitions: {
                    "Skeletal Muscle": "Voluntary striated muscle attached to bones",
                    "Cardiac Muscle": "Involuntary striated muscle of the heart",
                    "Smooth Muscle": "Involuntary non-striated muscle in organs",
                    "Sarcomere": "Functional unit of muscle contraction",
                    "Myofibril": "Contractile fiber within muscle cell",
                    "Motor Unit": "Motor neuron and all muscle fibers it controls"
                },
                mainCategories: [
                    "Muscle types and locations",
                    "Muscle contraction mechanism",
                    "Energy for muscle work",
                    "Muscle attachment and movement"
                ],
                applications: [
                    "Exercise physiology",
                    "Physical therapy",
                    "Sports performance",
                    "Neuromuscular disorders"
                ]
            },

            excretory_system: {
                title: "Excretory System: Waste Removal and Fluid Balance",
                concepts: [
                    "Kidneys filter blood and produce urine",
                    "Nephrons are functional units of kidneys",
                    "System maintains water and electrolyte balance",
                    "Removes metabolic wastes like urea"
                ],
                theory: "The excretory system removes metabolic wastes, regulates blood volume and pressure, controls electrolyte levels, and maintains blood pH. The kidneys filter blood, reabsorb needed substances, and excrete wastes as urine.",
                keyDefinitions: {
                    "Kidney": "Organ that filters blood and produces urine",
                    "Nephron": "Microscopic filtering unit in kidney",
                    "Filtration": "Process of removing substances from blood",
                    "Reabsorption": "Process of taking back needed substances",
                    "Urine": "Liquid waste product containing water and dissolved wastes",
                    "Bladder": "Organ that stores urine before excretion"
                },
                mainCategories: [
                    "Kidney structure and function",
                    "Nephron filtration process",
                    "Urine formation and composition",
                    "Regulation of fluid and electrolytes"
                ],
                applications: [
                    "Kidney disease management",
                    "Dialysis therapy",
                    "Urinary tract health",
                    "Electrolyte disorders"
                ]
            },

            immune_system: {
                title: "Immune System: Defense Against Disease",
                concepts: [
                    "Immune system defends against pathogens",
                    "Innate immunity provides immediate defense",
                    "Adaptive immunity provides specific, lasting protection",
                    "Antibodies recognize and neutralize antigens"
                ],
                theory: "The immune system protects the body from infections and disease through multiple layers of defense. Innate immunity provides rapid non-specific responses, while adaptive immunity develops targeted, memory-based protection against specific pathogens.",
                keyDefinitions: {
                    "Antigen": "Foreign substance that triggers immune response",
                    "Antibody": "Protein that binds to specific antigen",
                    "Lymphocyte": "White blood cell of adaptive immunity (B and T cells)",
                    "Phagocyte": "Cell that engulfs and destroys pathogens",
                    "Innate Immunity": "Non-specific, immediate immune response",
                    "Adaptive Immunity": "Specific, learned immune response with memory"
                },
                mainCategories: [
                    "Physical and chemical barriers",
                    "Innate immune responses",
                    "Adaptive immune responses",
                    "Immune organs and cells"
                ],
                applications: [
                    "Vaccine development",
                    "Autoimmune disease treatment",
                    "Immunotherapy for cancer",
                    "Transplant medicine"
                ]
            },

            integumentary_system: {
                title: "Integumentary System: Skin and Protection",
                concepts: [
                    "Skin is the body's largest organ",
                    "Provides protection, sensation, and temperature regulation",
                    "Multiple layers with different functions",
                    "Includes hair, nails, and glands"
                ],
                theory: "The integumentary system forms a protective barrier between the body and environment. Skin prevents water loss, blocks pathogens, synthesizes vitamin D, regulates temperature, and provides sensory information.",
                keyDefinitions: {
                    "Epidermis": "Outer layer of skin; protective barrier",
                    "Dermis": "Middle layer containing blood vessels and nerves",
                    "Hypodermis": "Deepest layer; fat storage and insulation",
                    "Melanin": "Pigment protecting against UV radiation",
                    "Keratin": "Protein providing strength to skin, hair, nails",
                    "Sebaceous Gland": "Gland producing oil (sebum) to moisturize skin"
                },
                mainCategories: [
                    "Skin layers and structure",
                    "Skin functions",
                    "Hair and nails",
                    "Glands (sweat, oil)"
                ],
                applications: [
                    "Dermatology and skin care",
                    "Burn treatment",
                    "Wound healing",
                    "Skin cancer prevention"
                ]
            },

            reproductive_system: {
                title: "Reproductive System: Reproduction and Development",
                concepts: [
                    "Male and female systems produce gametes",
                    "Hormones regulate reproductive functions",
                    "Fertilization creates a zygote",
                    "Pregnancy involves fetal development in uterus"
                ],
                theory: "The reproductive system produces gametes (sex cells), facilitates fertilization, and in females, supports pregnancy and childbirth. Hormones coordinate reproductive cycles, gamete production, and sexual characteristics.",
                keyDefinitions: {
                    "Gamete": "Sex cell (sperm or egg)",
                    "Fertilization": "Union of sperm and egg forming zygote",
                    "Ovulation": "Release of egg from ovary",
                    "Menstruation": "Shedding of uterine lining",
                    "Testosterone": "Primary male sex hormone",
                    "Estrogen": "Primary female sex hormone"
                },
                mainCategories: [
                    "Male reproductive anatomy",
                    "Female reproductive anatomy",
                    "Gametogenesis (sperm and egg production)",
                    "Hormonal regulation and cycles"
                ],
                applications: [
                    "Reproductive health",
                    "Fertility treatment",
                    "Contraception",
                    "Prenatal care"
                ]
            },

            lymphatic_system: {
                title: "Lymphatic System: Fluid Balance and Immunity",
                concepts: [
                    "Lymph system returns fluid to bloodstream",
                    "Lymph nodes filter lymph and trap pathogens",
                    "Works with immune system for defense",
                    "Transports fats from digestive system"
                ],
                theory: "The lymphatic system is a network of vessels and organs that maintains fluid balance, absorbs fats, and supports immune function. It collects excess tissue fluid (lymph) and returns it to the bloodstream while filtering it through lymph nodes.",
                keyDefinitions: {
                    "Lymph": "Clear fluid collected from tissues",
                    "Lymph Node": "Small organ that filters lymph and contains immune cells",
                    "Lymphatic Vessel": "Thin-walled vessel carrying lymph",
                    "Spleen": "Lymphoid organ that filters blood and recycles old red blood cells",
                    "Thymus": "Organ where T lymphocytes mature",
                    "Lymphocyte": "Type of white blood cell in lymph and blood"
                },
                mainCategories: [
                    "Lymphatic vessels and circulation",
                    "Lymphoid organs",
                    "Fluid balance function",
                    "Immune defense role"
                ],
                applications: [
                    "Understanding lymphedema",
                    "Cancer metastasis",
                    "Immune system support",
                    "Massage therapy"
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            circulatory_system: {
                'Blood Circulation': [
                    'Thinking arteries always carry oxygenated blood (pulmonary artery carries deoxygenated)',
                    'Believing veins always carry deoxygenated blood (pulmonary vein carries oxygenated)',
                    'Confusing blood pressure numbers (systolic is during contraction, diastolic during relaxation)'
                ],
                'Heart Function': [
                    'Thinking the heart is on the left side (it\'s centered, slightly left)',
                    'Believing all chambers contract simultaneously (atria contract first, then ventricles)',
                    'Assuming blood flows directly from right to left side of heart (it doesn\'t mix)'
                ]
            },
            respiratory_system: {
                'Breathing': [
                    'Thinking lungs are like balloons that inflate (they\'re pulled open by diaphragm)',
                    'Believing we breathe out all the air (residual volume always remains)',
                    'Assuming breathing is only voluntary (it\'s primarily involuntary)'
                ],
                'Gas Exchange': [
                    'Thinking oxygen and CO₂ are actively transported (they diffuse passively)',
                    'Believing plants and animals have opposite gas exchange (both do cellular respiration)',
                    'Confusing breathing with cellular respiration'
                ]
            },
            digestive_system: {
                'Digestion Process': [
                    'Thinking digestion only happens in stomach (starts in mouth, continues in intestines)',
                    'Believing the stomach is the main site of absorption (small intestine absorbs most nutrients)',
                    'Assuming stomach acid burns through anything (mucus protects stomach lining)'
                ],
                'Digestive Organs': [
                    'Thinking liver and pancreas aren\'t part of digestive system (they\'re accessory organs)',
                    'Believing bacteria in gut are all harmful (most are beneficial)',
                    'Confusing food allergies with intolerances'
                ]
            },
            nervous_system: {
                'Brain Function': [
                    'Thinking we only use 10% of our brain (we use all of it)',
                    'Believing brain cells can\'t regenerate (neurogenesis occurs in some areas)',
                    'Assuming left brain/right brain people exist (both hemispheres work together)'
                ],
                'Neurons': [
                    'Thinking nerve signals are slow (they travel very fast)',
                    'Believing neurons only transmit electrical signals (they also use chemicals at synapses)',
                    'Confusing neurons with nerves (nerves are bundles of neuron axons)'
                ]
            },
            endocrine_system: {
                'Hormones': [
                    'Thinking hormones only affect one organ (most have multiple target tissues)',
                    'Believing hormones act immediately (they\'re slower than nerves)',
                    'Assuming more hormone always means more effect (receptors can saturate)'
                ],
                'Glands': [
                    'Confusing endocrine with exocrine glands (endocrine secrete into blood)',
                    'Thinking pituitary controls everything (it\'s regulated by hypothalamus)',
                    'Believing diabetes is only one condition (Type 1 and Type 2 are different)'
                ]
            },
            skeletal_system: {
                'Bones': [
                    'Thinking bones are dead tissue (they\'re living and constantly remodeling)',
                    'Believing bones are solid (they have marrow-filled cavities)',
                    'Assuming adults have the same number of bones as babies (babies have ~270, adults ~206 due to fusion)'
                ],
                'Joints': [
                    'Thinking all joints move (some like skull sutures don\'t)',
                    'Believing cracking knuckles causes arthritis (no scientific evidence)',
                    'Confusing tendons with ligaments (tendons connect muscle to bone, ligaments bone to bone)'
                ]
            },
            muscular_system: {
                'Muscle Types': [
                    'Thinking all muscles are voluntary (cardiac and smooth are involuntary)',
                    'Believing only skeletal muscle is striated (cardiac is also striated)',
                    'Assuming muscle soreness is from lactic acid (it\'s from micro-tears)'
                ],
                'Muscle Function': [
                    'Thinking muscles push (they only pull/contract)',
                    'Believing you can turn fat into muscle (they\'re different tissues)',
                    'Assuming strength training makes you bulky (depends on training type and diet)'
                ]
            },
            excretory_system: {
                'Kidney Function': [
                    'Thinking kidneys only remove waste (they also regulate water, electrolytes, pH)',
                    'Believing you can live without kidneys (dialysis or transplant needed)',
                    'Assuming drinking more water always helps kidneys (excess can be harmful)'
                ],
                'Urine': [
                    'Thinking urine is dirty/toxic when produced (it\'s sterile when leaving kidneys)',
                    'Believing yellow color is from waste (it\'s from urobilin, a bile pigment)',
                    'Assuming frequent urination always means problem (can be normal with hydration)'
                ]
            },
            immune_system: {
                'Immunity': [
                    'Thinking antibiotics work on viruses (they only work on bacteria)',
                    'Believing fever is bad (it\'s part of immune response)',
                    'Assuming immune system always recognizes cancer (cancer cells can evade detection)'
                ],
                'Immune Cells': [
                    'Thinking all white blood cells are the same (many different types)',
                    'Believing vaccines weaken immune system (they train it)',
                    'Confusing HIV with AIDS (HIV is virus, AIDS is syndrome)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use side-by-side anatomical diagrams to highlight differences',
                effectiveness: 'High for structural and pathway comparisons'
            },
            analogy: {
                method: 'Relate anatomical concepts to familiar everyday systems',
                effectiveness: 'High for abstract physiological concepts'
            },
            step_by_step: {
                method: 'Break down complex processes into sequential physiological steps',
                effectiveness: 'High for understanding body processes'
            },
            contrast_table: {
                method: 'Create comparison tables showing key anatomical/physiological differences',
                effectiveness: 'High for distinguishing similar structures or systems'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            structural: {
                focus: 'Physical anatomy and organization',
                language: 'descriptive and spatial'
            },
            functional: {
                focus: 'Physiological processes and mechanisms',
                language: 'process-oriented and causal'
            },
            comparative: {
                focus: 'Similarities and differences between systems/organs',
                language: 'contrastive and analytical'
            },
            clinical: {
                focus: 'Medical relevance and pathology',
                language: 'applied and practical'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential information only',
                examples: 'concrete and familiar'
            },
            intermediate: {
                vocabulary: 'standard anatomical terms',
                detail: 'main concepts with explanations',
                examples: 'mix of familiar and technical'
            },
            detailed: {
                vocabulary: 'full medical terminology',
                detail: 'comprehensive with mechanisms',
                examples: 'clinical and research-based'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery approach',
                examples: 'carefully sequenced difficulty'
            }
        };
    }

    // MAIN HANDLER METHOD
    handleAnatomyProblem(config) {
        const { topic, parameters, subTopic, context } = config;

        try {
            // Parse the anatomy query
            this.currentProblem = this.parseAnatomyProblem(topic, parameters, subTopic, context);

            // Get content based on topic
            this.currentContent = this.getAnatomyContent(this.currentProblem);

            // Generate content steps/sections
            this.contentSteps = this.generateAnatomyContent(this.currentProblem, this.currentContent);

            // Generate diagram data if applicable
            this.generateAnatomyDiagramData();

            // Generate workbook
            this.generateAnatomyWorkbook();

            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                diagrams: this.diagramData
            };

        } catch (error) {
            throw new Error(`Failed to process anatomy topic: ${error.message}`);
        }
    }

    parseAnatomyProblem(topic, parameters = {}, subTopic = null, context = {}) {
        let topicType = null;

        // Match topic to handler
        for (const [type, config] of Object.entries(this.anatomyTopics)) {
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
            throw new Error(`Unable to recognize anatomy topic: ${topic}`);
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

    getAnatomyContent(problem) {
        const handler = this.anatomyTopics[problem.type]?.handler;
        if (!handler) {
            throw new Error(`No handler available for anatomy topic: ${problem.type}`);
        }

        return handler(problem);
    }

    // TOPIC HANDLERS - Each returns structured anatomical content

    handleCirculatorySystem(problem) {
        const { subTopic, parameters } = problem;

        return {
            topic: "Circulatory System",
            category: 'circulatory_system',
            
            overview: {
                description: "The circulatory (cardiovascular) system transports blood throughout the body, delivering oxygen and nutrients while removing carbon dioxide and wastes.",
                functions: [
                    "Transport oxygen from lungs to tissues",
                    "Transport nutrients from digestive system to cells",
                    "Remove carbon dioxide and metabolic wastes",
                    "Distribute hormones throughout body",
                    "Regulate body temperature",
                    "Maintain pH and fluid balance",
                    "Protect against infection (white blood cells)"
                ],
                components: ["Heart", "Blood vessels", "Blood"]
            },

            heart: {
                description: "Muscular pump with four chambers that drives blood circulation",
                structure: {
                    chambers: [
                        {
                            name: "Right Atrium",
                            function: "Receives deoxygenated blood from body via vena cava",
                            connects: "Right ventricle via tricuspid valve"
                        },
                        {
                            name: "Right Ventricle",
                            function: "Pumps deoxygenated blood to lungs via pulmonary artery",
                            wallThickness: "Thinner than left ventricle"
                        },
                        {
                            name: "Left Atrium",
                            function: "Receives oxygenated blood from lungs via pulmonary veins",
                            connects: "Left ventricle via bicuspid (mitral) valve"
                        },
                        {
                            name: "Left Ventricle",
                            function: "Pumps oxygenated blood to body via aorta",
                            wallThickness: "Thickest chamber (most powerful)"
                        }
                    ],
                    valves: [
                        { name: "Tricuspid", location: "Between right atrium and ventricle", prevents: "Backflow to atrium" },
                        { name: "Pulmonary", location: "Between right ventricle and pulmonary artery", prevents: "Backflow to ventricle" },
                        { name: "Bicuspid (Mitral)", location: "Between left atrium and ventricle", prevents: "Backflow to atrium" },
                        { name: "Aortic", location: "Between left ventricle and aorta", prevents: "Backflow to ventricle" }
                    ],
                    layers: [
                        { name: "Endocardium", description: "Inner lining of heart chambers" },
                        { name: "Myocardium", description: "Thick muscular middle layer that contracts" },
                        { name: "Pericardium", description: "Outer protective sac surrounding heart" }
                    ]
                },
                cardiacCycle: {
                    systole: "Contraction phase - ventricles pump blood out",
                    diastole: "Relaxation phase - chambers fill with blood",
                    sequence: [
                        "Atrial systole: atria contract, filling ventricles",
                        "Ventricular systole: ventricles contract, pumping blood out",
                        "Complete diastole: all chambers relax and fill"
                    ],
                    duration: "~0.8 seconds at 75 bpm"
                },
                electricalSystem: {
                    description: "Heart has intrinsic conduction system for rhythmic contractions",
                    pathway: [
                        "SA node (sinoatrial - natural pacemaker) initiates signal",
                        "Signal spreads through atria causing contraction",
                        "AV node (atrioventricular) delays signal briefly",
                        "Bundle of His conducts signal to ventricles",
                        "Purkinje fibers spread signal through ventricles"
                    ],
                    heartRate: "60-100 bpm at rest (controlled by SA node)"
                },
                bloodSupply: {
                    description: "Heart muscle needs its own blood supply",
                    coronaryArteries: "Supply oxygenated blood to heart muscle",
                    coronaryVeins: "Return deoxygenated blood from heart muscle"
                }
            },

            bloodVessels: {
                description: "Network of tubes transporting blood throughout body",
                types: [
                    {
                        name: "Arteries",
                        function: "Carry blood AWAY from heart (usually oxygenated)",
                        structure: [
                            "Thick muscular walls to withstand high pressure",
                            "Elastic tissue allows expansion with each heartbeat",
                            "No valves (except at heart exits)"
                        ],
                        examples: ["Aorta (largest artery)", "Pulmonary artery (carries deoxygenated blood to lungs)", "Coronary arteries"],
                        pressure: "High pressure system"
                    },
                    {
                        name: "Veins",
                        function: "Carry blood TOWARD heart (usually deoxygenated)",
                        structure: [
                            "Thinner walls than arteries (lower pressure)",
                            "Contain valves to prevent backflow",
                            "Less elastic tissue"
                        ],
                        examples: ["Vena cava (largest vein)", "Pulmonary veins (carry oxygenated blood from lungs)", "Jugular veins"],
                        pressure: "Low pressure system",
                        bloodReturn: "Aided by skeletal muscle contractions and breathing"
                    },
                    {
                        name: "Capillaries",
                        function: "Site of exchange between blood and tissues",
                        structure: [
                            "Extremely thin walls (one cell thick)",
                            "Smallest blood vessels",
                            "Form networks (capillary beds)"
                        ],
                        exchange: "O₂, CO₂, nutrients, wastes diffuse across walls",
                        location: "Connect arterioles to venules in tissues"
                    }
                ],
                vesselSequence: "Heart → Arteries → Arterioles → Capillaries → Venules → Veins → Heart"
            },

            circulationPathways: {
                pulmonaryCirculation: {
                    description: "Blood flow between heart and lungs",
                    pathway: [
                        "Right ventricle → Pulmonary artery",
                        "Pulmonary artery → Lungs",
                        "Lungs (gas exchange in alveolar capillaries)",
                        "Pulmonary veins → Left atrium"
                    ],
                    purpose: "Oxygenate blood and remove CO₂",
                    uniqueFeature: "Only place where artery carries deoxygenated blood and vein carries oxygenated"
                },
                systemicCirculation: {
                    description: "Blood flow between heart and rest of body",
                    pathway: [
                        "Left ventricle → Aorta",
                        "Aorta → Arteries → Arterioles → Capillaries (throughout body)",
                        "Capillaries → Venules → Veins",
                        "Vena cava → Right atrium"
                    ],
                    purpose: "Deliver O₂ and nutrients to tissues, remove CO₂ and wastes",
                    pressure: "Higher pressure than pulmonary circulation"
                },
                coronaryCirculation: {
                    description: "Blood supply to heart muscle itself",
                    pathway: "Aorta → Coronary arteries → Heart muscle capillaries → Coronary veins → Right atrium",
                    importance: "Heart muscle needs constant oxygen supply"
                }
            },

            blood: {
                description: "Liquid connective tissue transporting substances",
                volume: "~5 liters in average adult",
                composition: {
                    plasma: {
                        percentage: "55% of blood volume",
                        description: "Liquid portion",
                        components: [
                            "Water (90%)",
                            "Proteins (albumin, antibodies, clotting factors)",
                            "Nutrients (glucose, amino acids, lipids)",
                            "Wastes (urea, CO₂)",
                            "Hormones, electrolytes (Na⁺, K⁺, Ca²⁺, Cl⁻)"
                        ]
                    },
                    formedElements: {
                        percentage: "45% of blood volume",
                        types: [
                            {
                                name: "Red Blood Cells (Erythrocytes)",
                                count: "~5 million per μL",
                                function: "Transport O₂ (via hemoglobin) and some CO₂",
                                structure: "Biconcave disc, no nucleus",
                                lifespan: "~120 days",
                                production: "Bone marrow (erythropoiesis)"
                            },
                            {
                                name: "White Blood Cells (Leukocytes)",
                                count: "~7,000 per μL",
                                function: "Immune defense against pathogens",
                                types: "Neutrophils, lymphocytes, monocytes, eosinophils, basophils",
                                structure: "Have nucleus",
                                lifespan: "Hours to years depending on type"
                            },
                            {
                                name: "Platelets (Thrombocytes)",
                                count: "~250,000 per μL",
                                function: "Blood clotting",
                                structure: "Cell fragments, no nucleus",
                                lifespan: "~10 days"
                            }
                        ]
                    }
                },
                functions: [
                    "Transport O₂ from lungs to tissues",
                    "Transport CO₂ from tissues to lungs",
                    "Transport nutrients from digestive system",
                    "Transport wastes to kidneys",
                    "Transport hormones",
                    "Regulate body temperature",
                    "Maintain pH balance",
                    "Protect against infection",
                    "Prevent blood loss through clotting"
                ]
            },
            bloodPressure: {
                definition: "Force exerted by blood against vessel walls",
                measurement: "mmHg (millimeters of mercury)",
                systolic: {
                    value: "Top number (e.g., 120)",
                    represents: "Pressure during ventricular contraction",
                    normal: "Less than 120 mmHg"
                },
                diastolic: {
                    value: "Bottom number (e.g., 80)",
                    represents: "Pressure during ventricular relaxation",
                    normal: "Less than 80 mmHg"
                },
                normalReading: "120/80 mmHg or lower",
                regulation: [
                    "Cardiac output (heart rate × stroke volume)",
                    "Blood vessel diameter (vasoconstriction/vasodilation)",
                    "Blood volume",
                    "Blood viscosity"
                ],
                factors: [
                    "Nervous system (sympathetic/parasympathetic)",
                    "Hormones (epinephrine, angiotensin, ANP)",
                    "Kidneys (regulate blood volume)",
                    "Exercise, stress, diet, age"
                ]
            },

            disorders: [
                {
                    name: "Hypertension (High Blood Pressure)",
                    description: "Persistently elevated blood pressure (>140/90 mmHg)",
                    risks: "Heart disease, stroke, kidney damage",
                    causes: "Genetics, diet, obesity, stress, aging"
                },
                {
                    name: "Atherosclerosis",
                    description: "Plaque buildup in arteries narrowing blood flow",
                    consequences: "Heart attack, stroke, peripheral artery disease"
                    /**risk factors: "High cholesterol, smoking, diabetes, hypertension"*/
                },
                {
                    name: "Heart Attack (Myocardial Infarction)",
                    description: "Blockage of coronary artery cutting off blood to heart muscle",
                    symptoms: "Chest pain, shortness of breath, sweating",
                    emergency: "Requires immediate medical attention"
                },
                {
                    name: "Stroke",
                    description: "Interrupted blood flow to brain",
                    types: "Ischemic (blockage) or hemorrhagic (bleeding)",
                    effects: "Brain damage, paralysis, speech problems"
                },
                {
                    name: "Anemia",
                    description: "Low red blood cell count or hemoglobin",
                    symptoms: "Fatigue, weakness, pale skin",
                    causes: "Iron deficiency, blood loss, bone marrow problems"
                }
            ],

            clinicalMeasures: {
                heartRate: "Number of heartbeats per minute (normal: 60-100 bpm)",
                cardiacOutput: "Volume of blood pumped per minute (CO = HR × SV)",
                strokeVolume: "Volume of blood pumped per beat (~70 mL)",
                bloodPressure: "Force of blood against vessel walls",
                pulse: "Rhythmic expansion of arteries with each heartbeat",
                ECG: "Electrocardiogram measuring electrical activity of heart"
            }
        };
    }

    handleRespiratorySystem(problem) {
        return {
            topic: "Respiratory System",
            category: 'respiratory_system',

            overview: {
                description: "The respiratory system facilitates gas exchange, bringing oxygen into the body and removing carbon dioxide.",
                primaryFunction: "Exchange O₂ and CO₂ between air and blood",
                secondaryFunctions: [
                    "Regulates blood pH",
                    "Produces sounds (speech, singing)",
                    "Olfaction (sense of smell)",
                    "Protects against airborne pathogens"
                ]
            },

            anatomy: {
                upperRespiratoryTract: [
                    {
                        name: "Nose and Nasal Cavity",
                        functions: [
                            "Filters air (hair and mucus trap particles)",
                            "Warms incoming air",
                            "Humidifies air",
                            "Olfaction (smell receptors)"
                        ],
                        structure: "Cartilage and bone lined with mucous membrane"
                    },
                    {
                        name: "Pharynx (Throat)",
                        regions: [
                            "Nasopharynx (behind nose)",
                            "Oropharynx (behind mouth)",
                            "Laryngopharynx (behind larynx)"
                        ],
                        function: "Passageway for both air and food"
                    },
                    {
                        name: "Larynx (Voice Box)",
                        location: "Between pharynx and trachea",
                        structures: [
                            "Epiglottis: flap that covers trachea during swallowing",
                            "Vocal cords: produce sound",
                            "Cartilage: maintains open airway (thyroid, cricoid)"
                        ],
                        functions: "Speech production, protects lower airways"
                    }
                ],
                lowerRespiratoryTract: [
                    {
                        name: "Trachea (Windpipe)",
                        structure: [
                            "~12 cm long tube",
                            "C-shaped cartilage rings keep airway open",
                            "Lined with ciliated epithelium and mucus"
                        ],
                        function: "Conducts air to bronchi",
                        protection: "Cilia sweep mucus and trapped particles upward"
                    },
                    {
                        name: "Bronchi",
                        structure: [
                            "Primary bronchi: divide from trachea (right and left)",
                            "Secondary bronchi: branch to lobes",
                            "Tertiary bronchi: branch to segments",
                            "Supported by cartilage"
                        ],
                        function: "Distribute air to lungs"
                    },
                    {
                        name: "Bronchioles",
                        structure: [
                            "Smaller airways branching from bronchi",
                            "No cartilage (smooth muscle only)",
                            "Terminal bronchioles end in alveolar sacs"
                        ],
                        function: "Deliver air to alveoli",
                        regulation: "Smooth muscle controls diameter (bronchodilation/bronchoconstriction)"
                    },
                    {
                        name: "Alveoli",
                        description: "Tiny air sacs where gas exchange occurs",
                        structure: [
                            "~300 million alveoli per lung",
                            "One cell layer thick",
                            "Surrounded by capillary network",
                            "Coated with surfactant (prevents collapse)"
                        ],
                        function: "Site of O₂ and CO₂ exchange with blood",
                        surfaceArea: "~70 m² (size of tennis court)"
                    }
                ],
                lungs: {
                    description: "Paired organs occupying thoracic cavity",
                    rightLung: "Three lobes (superior, middle, inferior)",
                    leftLung: "Two lobes (superior, inferior) - smaller due to heart",
                    covering: "Pleural membranes (visceral and parietal pleura)",
                    pleuralFluid: "Lubricates and creates surface tension for lung expansion"
                }
            },

            ventilation: {
                description: "Process of moving air in and out of lungs",
                mechanism: "Pressure changes due to volume changes (Boyle's Law)",

                inhalation: {
                    process: [
                        "Diaphragm contracts and flattens (moves down)",
                        "External intercostal muscles contract (ribs move up and out)",
                        "Thoracic cavity volume increases",
                        "Lung volume increases",
                        "Intrapulmonary pressure decreases (below atmospheric)",
                        "Air flows into lungs"
                    ],
                    type: "Active process (requires muscle contraction)",
                    primaryMuscle: "Diaphragm (70% of effort)"
                },

                exhalation: {
                    process: [
                        "Diaphragm relaxes and moves up",
                        "Intercostal muscles relax (ribs move down and in)",
                        "Thoracic cavity volume decreases",
                        "Lung volume decreases",
                        "Intrapulmonary pressure increases (above atmospheric)",
                        "Air flows out of lungs"
                    ],
                    restingState: "Passive process (elastic recoil)",
                    forcedExpiration: "Active process using abdominal and internal intercostal muscles"
                },

                breathingRate: {
                    normal: "12-20 breaths per minute at rest",
                    tidalVolume: "~500 mL per breath",
                    minuteVentilation: "Breathing rate × tidal volume (~6 L/min)"
                }
            },

            lungVolumes: {
                description: "Different amounts of air in lungs during breathing",
                measurements: [
                    {
                        name: "Tidal Volume (TV)",
                        value: "~500 mL",
                        description: "Air inhaled/exhaled in normal breath"
                    },
                    {
                        name: "Inspiratory Reserve Volume (IRV)",
                        value: "~3,000 mL",
                        description: "Additional air that can be forcefully inhaled"
                    },
                    {
                        name: "Expiratory Reserve Volume (ERV)",
                        value: "~1,200 mL",
                        description: "Additional air that can be forcefully exhaled"
                    },
                    {
                        name: "Residual Volume (RV)",
                        value: "~1,200 mL",
                        description: "Air remaining in lungs after maximal exhalation"
                    },
                    {
                        name: "Vital Capacity (VC)",
                        value: "~4,700 mL",
                        calculation: "TV + IRV + ERV",
                        description: "Maximum air that can be forcefully exhaled after maximum inhalation"
                    },
                    {
                        name: "Total Lung Capacity (TLC)",
                        value: "~5,900 mL",
                        calculation: "VC + RV",
                        description: "Maximum air lungs can hold"
                    }
                ]
            },

            gasExchange: {
                description: "Diffusion of O₂ and CO₂ between air and blood",

                externalRespiration: {
                    location: "Alveoli and pulmonary capillaries",
                    process: [
                        "O₂ diffuses from alveoli (high concentration) into blood (low concentration)",
                        "CO₂ diffuses from blood (high concentration) into alveoli (low concentration)",
                        "Driven by partial pressure gradients"
                    ],
                    factors: [
                        "Surface area (alveoli provide huge area)",
                        "Thin membrane (one-cell thick)",
                        "Concentration gradient",
                        "Ventilation-perfusion matching"
                    ]
                },

                internalRespiration: {
                    location: "Systemic capillaries and body tissues",
                    process: [
                        "O₂ diffuses from blood into tissues (where it's being used)",
                        "CO₂ diffuses from tissues into blood (where it's produced)",
                        "Driven by metabolic activity in tissues"
                    ]
                },

                gasTransport: {
                    oxygen: [
                        "98.5% bound to hemoglobin in red blood cells",
                        "1.5% dissolved in plasma",
                        "Each hemoglobin carries up to 4 O₂ molecules"
                    ],
                    carbonDioxide: [
                        "7% dissolved in plasma",
                        "23% bound to hemoglobin",
                        "70% as bicarbonate (HCO₃⁻) in plasma"
                    ]
                }
            },

            respiratoryControl: {
                description: "Regulation of breathing rate and depth",

                nervousControl: {
                    location: "Medulla oblongata and pons in brainstem",
                    respiratoryCenter: [
                        "Inspiratory center: stimulates inhalation",
                        "Expiratory center: stimulates forceful exhalation",
                        "Pontine centers: fine-tune breathing rhythm"
                    ],
                    involuntary: "Automatic control maintains breathing without conscious thought"
                },

                chemicalControl: {
                    primaryFactor: "CO₂ levels in blood (most important)",
                    mechanism: [
                        "Increased CO₂ → decreased pH → detected by chemoreceptors",
                        "Central chemoreceptors (in medulla) sense pH changes in cerebrospinal fluid",
                        "Peripheral chemoreceptors (in carotid and aortic bodies) sense O₂, CO₂, pH in blood",
                        "Signals sent to respiratory center",
                        "Breathing rate and depth increase to expel CO₂"
                    ],
                    oxygen: "Only significant when levels are very low"
                },

                voluntaryControl: {
                    description: "Can consciously control breathing (temporarily)",
                    location: "Cerebral cortex",
                    limitations: "Cannot hold breath indefinitely - involuntary control takes over"
                },

                otherFactors: [
                    "Emotions (fear, anxiety increase breathing)",
                    "Pain",
                    "Temperature (fever increases breathing)",
                    "Exercise (anticipation and activity increase breathing)",
                    "Irritants (coughing, sneezing reflexes)"
                ]
            },

            disorders: [
                {
                    name: "Asthma",
                    description: "Chronic inflammatory disease causing airway narrowing",
                    symptoms: "Wheezing, shortness of breath, chest tightness, coughing",
                    causes: "Allergens, exercise, cold air, infections",
                    mechanism: "Bronchiole constriction, inflammation, excess mucus",
                    treatment: "Bronchodilators (inhalers), anti-inflammatory medications"
                },
                {
                    name: "Chronic Obstructive Pulmonary Disease (COPD)",
                    description: "Progressive lung disease (emphysema and chronic bronchitis)",
                    symptoms: "Chronic cough, shortness of breath, wheezing",
                    cause: "Primarily cigarette smoking",
                    mechanism: "Alveolar destruction, airway inflammation",
                    irreversible: "Lung damage cannot be reversed"
                },
                {
                    name: "Pneumonia",
                    description: "Infection causing inflammation of alveoli",
                    symptoms: "Cough, fever, chest pain, difficulty breathing",
                    causes: "Bacteria, viruses, fungi",
                    mechanism: "Alveoli fill with fluid and pus",
                    treatment: "Antibiotics (if bacterial), supportive care"
                },
                {
                    name: "Tuberculosis (TB)",
                    description: "Bacterial infection primarily affecting lungs",
                    cause: "Mycobacterium tuberculosis",
                    transmission: "Airborne (coughing, sneezing)",
                    symptoms: "Chronic cough, weight loss, night sweats, fever",
                    treatment: "Long-term antibiotic therapy"
                },
                {
                    name: "Lung Cancer",
                    description: "Uncontrolled cell growth in lungs",
                    mainCause: "Smoking (responsible for ~85% of cases)",
                    symptoms: "Persistent cough, blood in sputum, chest pain",
                    types: "Small cell and non-small cell",
                    treatment: "Surgery, chemotherapy, radiation"
                },
                {
                    name: "Sleep Apnea",
                    description: "Breathing repeatedly stops and starts during sleep",
                    types: "Obstructive (airway blocked) or central (brain signal problem)",
                    symptoms: "Loud snoring, gasping, daytime fatigue",
                    risks: "Heart problems, high blood pressure, diabetes"
                }
            ],

            clinicalMeasures: {
                spirometry: "Test measuring lung volumes and air flow rates",
                pulseOximetry: "Non-invasive measurement of blood oxygen saturation",
                arterialBloodGas: "Test measuring O₂, CO₂, and pH in arterial blood",
                peakFlow: "Maximum speed of exhalation (asthma monitoring)",
                chestXRay: "Imaging to detect lung abnormalities"
            }
        };
    }

    handleDigestiveSystem(problem) {
        return {
            topic: "Digestive System",
            category: 'digestive_system',
            
            overview: {
                description: "The digestive system breaks down food into absorbable nutrients and eliminates solid waste.",
                mainFunctions: [
                    "Ingestion: taking in food",
                    "Mechanical digestion: physical breakdown",
                    "Chemical digestion: enzymatic breakdown",
                    "Absorption: nutrients enter bloodstream",
                    "Elimination: removal of undigested waste"
                ],
                length: "~9 meters (30 feet) from mouth to anus",
                transitTime: "24-72 hours for complete digestion"
            },

            alimentaryCanal: {
                description: "Continuous tube from mouth to anus (also called GI tract)",
                
                mouth: {
                    structures: [
                        "Teeth: mechanical breakdown (mastication)",
                        "Tongue: manipulates food, aids swallowing, taste",
                        "Salivary glands: produce saliva"
                    ],
                    saliva: {
                        production: "1-1.5 liters per day",
                        composition: "Water (99%), enzymes, mucus, antibodies",
                        enzyme: "Salivary amylase (begins starch digestion)",
                        pH: "Slightly acidic to neutral (6.5-7.5)"
                    },
                    digestion: "Chemical (amylase on starch) and mechanical (chewing)",
                    bolus: "Food mixed with saliva forms soft mass"
                },
                
                pharynx: {
                    description: "Throat - passageway for food and air",
                    swallowing: [
                        "Voluntary phase: tongue pushes bolus back",
                        "Pharyngeal phase: soft palate closes off nasal cavity",
                        "Esophageal phase: epiglottis covers trachea, food enters esophagus"
                    ],
                    importance: "Prevents food from entering airways"
                },
                
                esophagus: {
                    description: "~25 cm muscular tube connecting pharynx to stomach",
                    function: "Transports food via peristalsis",
                    peristalsis: "Wave-like muscle contractions pushing food downward",
                    sphincters: [
                        "Upper esophageal sphincter: prevents air entry",
                        "Lower esophageal sphincter (cardiac sphincter): prevents stomach acid reflux"
                    ],
                    noDigestion: "No chemical digestion occurs here"
                },
                
                stomach: {
                    description: "J-shaped muscular sac storing and digesting food",
                    capacity: "~1.5 liters (expandable)",
                    regions: [
                        "Cardiac region: near esophagus",
                        "Fundus: upper dome",
                        "Body: main central region",
                        "Pylorus: lower region connecting to small intestine"
                    ],
                    functions: [
                        "Stores food (2-6 hours)",
                        "Mechanical digestion (churning)",
                        "Chemical digestion (begins protein breakdown)",
                        "Kills bacteria with acid",
                        "Produces intrinsic factor (for B12 absorption)"
                    ],
                    gastricJuice: {
                        production: "~2 liters per day",
                        pH: "1.5-3.5 (highly acidic)",
                        components: [
                            "Hydrochloric acid (HCl): denatures proteins, kills bacteria, activates pepsinogen",
                            "Pepsinogen → Pepsin: enzyme digesting proteins",
                            "Mucus: protects stomach lining from acid",
                            "Intrinsic factor: needed for vitamin B12 absorption"
                        ]
                    },
                    chyme: "Acidic, semi-liquid mixture of food and gastric juice",
                    pyloricSphincters: "Regulates food release into small intestine"
                },
                
                smallIntestine: {
                    description: "Long, coiled tube - primary site of digestion and absorption",
                    length: "~6 meters (20 feet)",
                    diameter: "~2.5 cm",
                    sections: [
                        {
                            name: "Duodenum",
                            length: "~25 cm",
                            function: "Receives chyme from stomach, bile from liver, enzymes from pancreas",
                            digestion: "Most chemical digestion occurs here",
                            pH: "Neutralized by bicarbonate from pancreas"
                        },
                        {
                            name: "Jejunum",
                            length: "~2.5 meters",
                            function: "Primary site of nutrient absorption"
                        },
                        {
                            name: "Ileum",
                            length: "~3.5 meters",
                            function: "Continues absorption, absorbs vitamin B12 and bile salts",
                            terminal: "Connects to large intestine at ileocecal valve"
                        }
                    ],
                    adaptations: {
                        villiAndMicrovilli: {
                            description: "Finger-like projections greatly increasing surface area",
                            villi: "Macroscopic folds (visible to naked eye)",
                            microvilli: "Microscopic projections on epithelial cells (brush border)",
                            surfaceArea: "~250 m² (size of tennis court)",
                            bloodSupply: "Each villus contains capillaries and lacteal (lymph vessel)"
                        }
                    },
                    absorption: {
                        carbohydrates: "Absorbed as monosaccharides (glucose, fructose, galactose) into blood",
                        proteins: "Absorbed as amino acids and dipeptides into blood",
                        fats: "Absorbed as fatty acids and glycerol into lacteals (lymph)",
                        vitaminsAndMinerals: "Absorbed throughout small intestine",
                        water: "Absorbed along with nutrients"
                    },
                    enzymes: [
                        "Pancreatic amylase: breaks down starch",
                        "Pancreatic lipase: breaks down fats",
                        "Trypsin, chymotrypsin: break down proteins",
                        "Brush border enzymes: final breakdown of nutrients"
                    ]
                },
                
                largeIntestine: {
                    description: "Absorbs water and forms feces",
                    length: "~1.5 meters (5 feet)",
                    diameter: "~6 cm (wider than small intestine)",
                    sections: [
                        "Cecum: pouch receiving material from ileum",
                        "Appendix: small projection from cecum (lymphoid tissue)",
                        "Colon: ascending, transverse, descending, sigmoid",
                        "Rectum: stores feces before elimination",
                        "Anus: opening controlled by sphincters"
                    ],
                    functions: [
                        "Absorbs water and electrolytes (1-2 liters per day)",
                        "Absorbs vitamins produced by bacteria (K, B vitamins)",
                        "Houses gut microbiome (trillions of beneficial bacteria)",
                        "Compacts waste into feces",
                        "Eliminates feces (defecation)"
                    ],
                    bacteria: {
                        description: "Normal gut flora (microbiome)",
                        benefits: [
                            "Synthesize vitamins K and B",
                            "Break down indigestible materials",
                            "Compete with harmful bacteria",
                            "Train immune system"
                        ],
                        composition: "Trillions of bacteria, hundreds of species"
                    },
                    feces: {
                        composition: "Water, bacteria, undigested fiber, dead cells, bile pigments",
                        color: "Brown (from bilirubin breakdown)",
                        elimination: "1-3 times per day normal"
                    }
                }
            },

            accessoryOrgans: {
                description: "Organs that aid digestion but food doesn't pass through them",
                
                liver: {
                    description: "Largest internal organ with many metabolic functions",
                    location: "Right upper abdomen, below diaphragm",
                    weight: "~1.5 kg (3 pounds)",
                    digestiveFunction: "Produces bile for fat digestion",
                    bile: {
                        production: "500-1000 mL per day",
                        composition: "Water, bile salts, cholesterol, bilirubin",
                        function: "Emulsifies fats (breaks into smaller droplets)",
                        storage: "Stored and concentrated in gallbladder"
                    },
                    otherFunctions: [
                        "Metabolizes nutrients absorbed from intestine",
                        "Stores glycogen, vitamins, minerals",
                        "Detoxifies drugs and toxins",
                        "Produces blood proteins (albumin, clotting factors)",
                        "Breaks down old red blood cells"
                    ]
                },
                
                gallbladder: {
                    description: "Small sac storing and concentrating bile",
                    location: "Attached to underside of liver",
                    capacity: "~50 mL",
                    function: "Stores bile between meals, releases during meals",
                    release: "Triggered by hormone CCK when fat enters duodenum",
                    gallstones: "Hardened deposits (cholesterol or bilirubin) that can block bile duct"
                },
                
                pancreas: {
                    description: "Gland with digestive and endocrine functions",
                    location: "Behind stomach",
                    exocrineFunction: {
                        description: "Produces digestive enzymes",
                        secretion: "1-1.5 liters pancreatic juice per day",
                        enzymes: [
                            "Pancreatic amylase: digests starch",
                            "Pancreatic lipase: digests fats",
                            "Trypsin, chymotrypsin: digest proteins",
                            "Nucleases: digest nucleic acids"
                        ],
                        bicarbonate: "Neutralizes stomach acid in duodenum (pH 8)",
                        release: "Triggered by hormones secretin and CCK"
                    },
                    endocrineFunction: {
                        description: "Islets of Langerhans produce hormones",
                        insulin: "Lowers blood glucose",
                        glucagon: "Raises blood glucose",
                        regulation: "Maintains blood sugar homeostasis"
                    }
                },
                
                salivaryGlands: {
                    description: "Three pairs of glands producing saliva",
                    types: [
                        "Parotid: largest, near ear",
                        "Submandibular: below jaw",
                        "Sublingual: under tongue"
                    ],
                    production: "1-1.5 liters saliva per day"
                }
            },

            digestionSummary: {
                carbohydrates: {
                    mouth: "Salivary amylase begins starch breakdown",
                    stomach: "No carbohydrate digestion",
                    smallIntestine: "Pancreatic amylase completes starch breakdown; brush border enzymes break disaccharides",
                    absorption: "Monosaccharides absorbed into blood",
                    endProducts: "Glucose, fructose, galactose"
                },
                proteins: {
                    mouth: "No protein digestion",
                    stomach: "Pepsin begins protein breakdown",
                    smallIntestine: "Pancreatic enzymes (trypsin, chymotrypsin) continue; brush border enzymes complete",
                    absorption: "Amino acids and dipeptides absorbed into blood",
                    endProducts: "Amino acids"
                },
                fats: {
                    mouth: "Minimal (lingual lipase in saliva)",
                    stomach: "Gastric lipase begins fat digestion",
                    smallIntestine: "Bile emulsifies; pancreatic lipase digests",
                    absorption: "Fatty acids and glycerol absorbed into lacteals (lymph)",
                    endProducts: "Fatty acids, glycerol, monoglycerides"
                },
                nucleicAcids: {
                    smallIntestine: "Nucleases break down DNA and RNA",
                    absorption: "Nucleotides absorbed into blood"
                }
            },

            hormonalRegulation: {
                gastrin: {
                    source: "Stomach",
                    stimulus: "Food in stomach",
                    effect: "Stimulates gastric juice secretion"
                },
                secretin: {
                    source: "Duodenum",
                    stimulus: "Acidic chyme",
                    effect: "Stimulates pancreas to release bicarbonate"
                },
                CCK: {
                    name: "Cholecystokinin",
                    source: "Duodenum",
                    stimulus: "Fat and protein in chyme",
                    effects: [
                        "Stimulates pancreas to release enzymes",
                        "Stimulates gallbladder to release bile",
                        "Slows stomach emptying"
                    ]
                },
                GIP: {
                    name: "Glucose-dependent insulinotropic peptide",
                    source: "Duodenum",
                    stimulus: "Glucose and fat",
                    effect: "Stimulates insulin release"
                }
            },

            disorders: [
                {
                    name: "Gastroesophageal Reflux Disease (GERD)",
                    description: "Stomach acid flows back into esophagus",
                    cause: "Weak lower esophageal sphincter",
                    symptoms: "Heartburn, chest pain, difficulty swallowing",
                    complications: "Esophagitis, Barrett's esophagus"
                },
                {
                    name: "Peptic Ulcer",
                    description: "Sore in stomach or duodenal lining",
                    causes: "H. pylori bacteria, NSAIDs, excess acid",
                    symptoms: "Burning stomach pain, bloating, nausea",
                    treatment: "Antibiotics (if bacterial), acid reducers"
                },
                {
                    name: "Inflammatory Bowel Disease (IBD)",
                    types: "Crohn's disease (any part of GI tract), Ulcerative colitis (colon)",
                    description: "Chronic inflammation of digestive tract",
                    symptoms: "Diarrhea, abdominal pain, weight loss, bleeding",
                    cause: "Autoimmune (body attacks own intestinal cells)"
                },
                {
                    name: "Irritable Bowel Syndrome (IBS)",
                    description: "Functional disorder (no visible damage)",
                    symptoms: "Abdominal pain, bloating, diarrhea or constipation",
                    triggers: "Stress, certain foods",
                    notIBD: "Less serious than IBD"
                },
                {
                    name: "Celiac Disease",
                    description: "Autoimmune reaction to gluten",
                    mechanism: "Gluten damages small intestine villi",
                    symptoms: "Diarrhea, bloating, malabsorption",
                    treatment: "Strict gluten-free diet"
                },
                {
                    name: "Lactose Intolerance",
                    description: "Inability to digest lactose (milk sugar)",
                    cause: "Deficiency of lactase enzyme",
                    symptoms: "Bloating, gas, diarrhea after dairy consumption",
                    management: "Avoid dairy or use lactase supplements"
                },
                {
                    name: "Gallstones",
                    description: "Hardened deposits in gallbladder",
                    composition: "Cholesterol or bilirubin",
                    symptoms: "Pain in upper right abdomen, nausea",
                    treatment: "Gallbladder removal if severe"
                },
                {
                    name: "Pancreatitis",
                    description: "Inflammation of pancreas",
                    causes: "Gallstones, alcohol, certain medications",
                    symptoms: "Severe abdominal pain, nausea, fever",
                    serious: "Can be life-threatening"
                },
                {
                    name: "Appendicitis",
                    description: "Inflammation of appendix",
                    cause: "Blockage of appendix opening",
                    symptoms: "Pain starting at navel, moving to lower right",
                    emergency: "Requires surgical removal"
                }
            ],

            nutrition: {
                macronutrients: [
                    {
                        name: "Carbohydrates",
                        function: "Primary energy source",
                        types: "Simple sugars, complex starches, fiber",
                        calories: "4 kcal per gram"
                    },
                    {
                        name: "Proteins",
                        function: "Building and repairing tissues, enzymes, hormones",
                        sources: "Meat, fish, eggs, legumes, dairy",
                        calories: "4 kcal per gram"
                    },
                    {
                        name: "Fats (Lipids)",
                        function: "Energy storage, cell membranes, hormone production",
                        types: "Saturated, unsaturated, trans fats",
                        calories: "9 kcal per gram"
                    }
                ],
                micronutrients: [
                    "Vitamins: organic compounds needed in small amounts",
                    "Minerals: inorganic elements (Ca, Fe, Na, K, etc.)",
                    "Water: essential for all body functions"
                ],
                fiber: {
                    description: "Indigestible carbohydrate",
                    benefits: "Promotes regular bowel movements, prevents constipation, lowers cholesterol",
                    sources: "Fruits, vegetables, whole grains, legumes"
                }
            }
        };
    }

    handleNervousSystem(problem) {
        return {
            topic: "Nervous System",
            category: 'nervous_system',

            overview: {
                description: "The nervous system is the body's control center, coordinating actions and sensory information by transmitting signals between different parts of the body.",
                mainFunctions: [
                    "Sensory input: detecting internal and external stimuli",
                    "Integration: processing and interpreting information",
                    "Motor output: responding with appropriate actions",
                    "Maintaining homeostasis",
                    "Higher functions: thinking, memory, emotions"
                ],
                speed: "Signals travel up to 120 m/s (268 mph)"
            },

            divisions: {
                centralNervousSystem: {
                    description: "Brain and spinal cord - integration and command center",
                    components: ["Brain", "Spinal cord"],
                    function: "Processes information and coordinates responses",
                    protection: [
                        "Skull (cranium) protects brain",
                        "Vertebrae protect spinal cord",
                        "Meninges (three protective membranes)",
                        "Cerebrospinal fluid (CSF) cushions and nourishes"
                    ]
                },
                peripheralNervousSystem: {
                    description: "All nerves outside CNS - communication pathways",
                    components: "Cranial nerves (12 pairs) and spinal nerves (31 pairs)",
                    function: "Connects CNS to rest of body",
                    subdivisions: {
                        somatic: {
                            description: "Voluntary control of skeletal muscles",
                            sensory: "Carries sensory info from receptors to CNS",
                            motor: "Carries motor commands from CNS to skeletal muscles",
                            conscious: "Under conscious control"
                        },
                        autonomic: {
                            description: "Involuntary control of internal organs",
                            targets: "Smooth muscle, cardiac muscle, glands",
                            unconscious: "Not under conscious control",
                            divisions: {
                                sympathetic: {
                                    description: "'Fight or flight' response",
                                    effects: [
                                        "Increases heart rate",
                                        "Dilates pupils",
                                        "Inhibits digestion",
                                        "Releases glucose from liver",
                                        "Dilates bronchioles",
                                        "Stimulates adrenaline release"
                                    ],
                                    situation: "Activated during stress or emergency"
                                },
                                parasympathetic: {
                                    description: "'Rest and digest' response",
                                    effects: [
                                        "Decreases heart rate",
                                        "Constricts pupils",
                                        "Stimulates digestion",
                                        "Promotes energy storage",
                                        "Constricts bronchioles",
                                        "Stimulates salivation"
                                    ],
                                    situation: "Activated during rest and recovery"
                                }
                            }
                        }
                    }
                }
            },

            neuron: {
                description: "Functional unit of nervous system - specialized cell transmitting signals",
                structure: {
                    cellBody: {
                        name: "Soma",
                        contains: "Nucleus, organelles",
                        function: "Metabolic center of neuron"
                    },
                    dendrites: {
                        description: "Branched extensions from cell body",
                        function: "Receive signals from other neurons",
                        direction: "Input - toward cell body"
                    },
                    axon: {
                        description: "Long fiber extending from cell body",
                        length: "Can be over 1 meter long",
                        function: "Transmits signals away from cell body",
                        direction: "Output - away from cell body",
                        myelinSheath: {
                            description: "Insulating layer of fat around axon",
                            formed: "By Schwann cells (PNS) or oligodendrocytes (CNS)",
                            function: "Speeds up signal transmission",
                            nodesOfRanvier: "Gaps in myelin where signal 'jumps' (saltatory conduction)"
                        },
                        axonTerminals: {
                            description: "Branched endings of axon",
                            contains: "Synaptic vesicles with neurotransmitters",
                            function: "Release neurotransmitters to next cell"
                        }
                    }
                },
                types: [
                    {
                        name: "Sensory (Afferent) Neurons",
                        function: "Carry signals FROM receptors TO CNS",
                        direction: "Afferent = Arriving at CNS"
                    },
                    {
                        name: "Motor (Efferent) Neurons",
                        function: "Carry signals FROM CNS TO effectors (muscles, glands)",
                        direction: "Efferent = Exiting CNS"
                    },
                    {
                        name: "Interneurons",
                        function: "Connect neurons within CNS",
                        location: "Only in CNS",
                        percentage: "99% of all neurons"
                    }
                ]
            },

            signalTransmission: {
                restingPotential: {
                    description: "Electrical charge across neuron membrane at rest",
                    value: "-70 mV (inside negative relative to outside)",
                    mechanism: [
                        "Sodium-potassium pump maintains gradient",
                        "3 Na⁺ pumped out, 2 K⁺ pumped in",
                        "Requires ATP"
                    ],
                    polarized: "Neuron is polarized (charged) but not signaling"
                },
                actionPotential: {
                    description: "Rapid electrical signal traveling along axon",
                    allOrNone: "Either fires completely or doesn't fire at all",
                    phases: [
                        {
                            phase: "Depolarization",
                            event: "Stimulus reaches threshold (-55 mV)",
                            mechanism: "Voltage-gated Na⁺ channels open, Na⁺ rushes in",
                            result: "Inside becomes positive (+30 mV)"
                        },
                        {
                            phase: "Repolarization",
                            mechanism: "Na⁺ channels close, K⁺ channels open, K⁺ rushes out",
                            result: "Returns toward negative"
                        },
                        {
                            phase: "Hyperpolarization",
                            mechanism: "K⁺ channels slow to close, too much K⁺ exits",
                            result: "Briefly more negative than resting (-80 mV)"
                        },
                        {
                            phase: "Return to Resting",
                            mechanism: "Sodium-potassium pump restores resting potential",
                            result: "Back to -70 mV"
                        }
                    ],
                    propagation: "Action potential moves along axon as wave",
                    speed: "Faster in myelinated axons (up to 120 m/s)",
                    refractoryPeriod: "Brief time when neuron cannot fire again"
                },
                synapse: {
                    description: "Junction between two neurons or neuron and target",
                    types: "Electrical (rare) or chemical (most common)",
                    chemicalSynapse: {
                        components: [
                            "Presynaptic neuron (sending)",
                            "Synaptic cleft (gap, ~20-40 nm)",
                            "Postsynaptic neuron (receiving)"
                        ],
                        process: [
                            "Action potential reaches axon terminal",
                            "Voltage-gated Ca²⁺ channels open",
                            "Ca²⁺ triggers vesicle fusion with membrane",
                            "Neurotransmitter released into cleft",
                            "Neurotransmitter binds to receptors on postsynaptic membrane",
                            "Ion channels open, causing excitation or inhibition",
                            "Neurotransmitter removed (reuptake or enzymatic breakdown)"
                        ],
                        oneWay: "Signal travels only from pre- to postsynaptic"
                    }
                },
                neurotransmitters: [
                    {
                        name: "Acetylcholine (ACh)",
                        locations: "Neuromuscular junction, autonomic nervous system, brain",
                        functions: "Muscle contraction, attention, memory",
                        removal: "Enzyme acetylcholinesterase breaks it down"
                    },
                    {
                        name: "Dopamine",
                        locations: "Brain (substantia nigra, ventral tegmental area)",
                        functions: "Reward, motivation, motor control",
                        disorders: "Parkinson's (low), schizophrenia (high)"
                    },
                    {
                        name: "Serotonin",
                        locations: "Brain, gut",
                        functions: "Mood, sleep, appetite",
                        disorders: "Depression (low levels)"
                    },
                    {
                        name: "Norepinephrine",
                        locations: "Brain, sympathetic nervous system",
                        functions: "Alertness, arousal, fight-or-flight",
                        also: "Hormone from adrenal glands"
                    },
                    {
                        name: "GABA (Gamma-Aminobutyric Acid)",
                        type: "Inhibitory neurotransmitter",
                        function: "Reduces neuronal excitability, calming effect",
                        importance: "Most common inhibitory neurotransmitter"
                    },
                    {
                        name: "Glutamate",
                        type: "Excitatory neurotransmitter",
                        function: "Learning, memory",
                        importance: "Most common excitatory neurotransmitter"
                    },
                    {
                        name: "Endorphins",
                        type: "Neuropeptides",
                        function: "Pain relief, pleasure (natural opioids)",
                        release: "Exercise, laughter, stress"
                    }
                ]
            },

            brain: {
                description: "Control center of nervous system",
                weight: "~1.4 kg (3 pounds)",
                neurons: "~86 billion neurons",
                energy: "Uses 20% of body's energy despite being 2% of body weight",

                regions: {
                    cerebrum: {
                        description: "Largest part of brain",
                        percentage: "~85% of brain mass",
                        hemispheres: "Left and right, connected by corpus callosum",
                        cortex: "Outer gray matter (cell bodies)",
                        whiteMatter: "Inner myelinated axons",
                        lobes: [
                            {
                                name: "Frontal Lobe",
                                location: "Front of brain",
                                functions: [
                                    "Motor cortex: voluntary movement",
                                    "Prefrontal cortex: executive functions, planning, decision-making",
                                    "Broca's area: speech production",
                                    "Personality, judgment, problem-solving"
                                ]
                            },
                            {
                                name: "Parietal Lobe",
                                location: "Top-back of brain",
                                functions: [
                                    "Somatosensory cortex: processes touch, temperature, pain",
                                    "Spatial awareness",
                                    "Integration of sensory information"
                                ]
                            },
                            {
                                name: "Temporal Lobe",
                                location: "Sides of brain",
                                functions: [
                                    "Auditory cortex: processes sound",
                                    "Wernicke's area: language comprehension",
                                    "Memory formation (hippocampus)",
                                    "Emotion (amygdala)"
                                ]
                            },
                            {
                                name: "Occipital Lobe",
                                location: "Back of brain",
                                functions: [
                                    "Visual cortex: processes visual information",
                                    "Visual perception and interpretation"
                                ]
                            }
                        ],
                        functionalAreas: {
                            motorCortex: "Controls voluntary movements (precentral gyrus)",
                            somatosensoryCortex: "Processes touch sensations (postcentral gyrus)",
                            visualCortex: "Processes vision (occipital lobe)",
                            auditoryCortex: "Processes hearing (temporal lobe)",
                            associationAreas: "Integrate information from multiple sources"
                        }
                    },
                    cerebellum: {
                        description: "'Little brain' at back of skull",
                        location: "Below cerebrum, behind brainstem",
                        structure: "Highly folded",
                        functions: [
                            "Coordinates voluntary movements",
                            "Balance and posture",
                            "Motor learning (riding bike, playing instrument)",
                            "Fine motor control"
                        ],
                        damage: "Results in loss of coordination (ataxia)"
                    },
                    brainstem: {
                        description: "Connects brain to spinal cord",
                        components: [
                            {
                                name: "Midbrain",
                                functions: [
                                    "Visual and auditory reflexes",
                                    "Eye movement control",
                                    "Relay station"
                                ]
                            },
                            {
                                name: "Pons",
                                functions: [
                                    "Relay signals between cerebrum and cerebellum",
                                    "Breathing regulation",
                                    "Sleep, arousal"
                                ]
                            },
                            {
                                name: "Medulla Oblongata",
                                functions: [
                                    "Controls vital functions: heart rate, breathing, blood pressure",
                                    "Reflexes: coughing, sneezing, swallowing, vomiting",
                                    "Connects to spinal cord"
                                ],
                                critical: "Damage can be fatal"
                            }
                        ]
                    },
                    diencephalon: {
                        description: "Region between cerebrum and brainstem",
                        structures: [
                            {
                                name: "Thalamus",
                                description: "Relay station for sensory information",
                                function: "Routes sensory signals to appropriate cortical areas",
                                exception: "Smell bypasses thalamus"
                            },
                            {
                                name: "Hypothalamus",
                                description: "Master regulator of homeostasis",
                                functions: [
                                    "Regulates body temperature",
                                    "Controls hunger and thirst",
                                    "Sleep-wake cycles (circadian rhythms)",
                                    "Controls pituitary gland (hormone release)",
                                    "Emotional responses",
                                    "Autonomic nervous system control"
                                ],
                                size: "Small but critical for survival"
                            }
                        ]
                    },
                    limbicSystem: {
                        description: "Emotional and memory processing system",
                        components: [
                            {
                                name: "Hippocampus",
                                function: "Formation of new long-term memories",
                                damage: "Cannot form new memories (anterograde amnesia)"
                            },
                            {
                                name: "Amygdala",
                                function: "Processes emotions, especially fear and aggression",
                                role: "Emotional memory, threat detection"
                            }
                        ],
                        location: "Deep within temporal lobes"
                    }
                },
                
                protection: [
                    {
                        name: "Skull (Cranium)",
                        description: "Bony protection"
                    },
                    {
                        name: "Meninges",
                        layers: [
                            "Dura mater: tough outer layer",
                            "Arachnoid mater: middle web-like layer",
                            "Pia mater: delicate inner layer adhering to brain"
                        ]
                    },
                    {
                        name: "Cerebrospinal Fluid (CSF)",
                        production: "Produced by choroid plexus in ventricles",
                        volume: "~150 mL",
                        functions: [
                            "Cushions brain and spinal cord",
                            "Provides nutrients",
                            "Removes wastes",
                            "Maintains chemical environment"
                        ],
                        circulation: "Flows through ventricles and around brain/spinal cord"
                    },
                    {
                        name: "Blood-Brain Barrier",
                        description: "Selective barrier protecting brain from harmful substances",
                        mechanism: "Tight junctions between capillary cells",
                        allows: "O₂, CO₂, glucose",
                        blocks: "Most drugs, toxins, pathogens"
                    }
                ]
            },

            spinalCord: {
                description: "Long cylindrical bundle of nerves extending from brainstem",
                length: "~45 cm (18 inches) in adults",
                location: "Within vertebral column (backbone)",
                protection: "Vertebrae, meninges, CSF",
                structure: {
                    grayMatter: "Butterfly-shaped center containing cell bodies",
                    whiteMatter: "Outer region containing myelinated axons (tracts)",
                    centralCanal: "Hollow center containing CSF"
                },
                functions: [
                    "Pathway for signals between brain and body",
                    "Reflex center (rapid automatic responses)",
                    "Integration of simple motor patterns"
                ],
                spinalNerves: {
                    number: "31 pairs",
                    regions: [
                        "Cervical (8 pairs): neck and arms",
                        "Thoracic (12 pairs): chest and abdomen",
                        "Lumbar (5 pairs): lower back and legs",
                        "Sacral (5 pairs): pelvis and legs",
                        "Coccygeal (1 pair): tailbone region"
                    ],
                    roots: "Dorsal (sensory) and ventral (motor) roots"
                }
            },

            reflexArc: {
                description: "Rapid automatic response to stimulus",
                characteristics: [
                    "Involuntary",
                    "Rapid (no conscious thought needed)",
                    "Protective"
                ],
                components: [
                    "Receptor: detects stimulus",
                    "Sensory neuron: carries signal to spinal cord",
                    "Integration center: interneuron in spinal cord",
                    "Motor neuron: carries signal to effector",
                    "Effector: muscle or gland that responds"
                ],
                example: {
                    stimulus: "Touching hot stove",
                    pathway: [
                        "Pain receptors in skin detect heat",
                        "Sensory neuron carries signal to spinal cord",
                        "Interneuron processes in spinal cord",
                        "Motor neuron carries signal to arm muscles",
                        "Muscles contract, pulling hand away"
                    ],
                    speed: "Occurs before brain perceives pain",
                    note: "Signal also sent to brain for awareness"
                },
                types: [
                    "Withdrawal reflex: pulling away from pain",
                    "Knee-jerk reflex: tapping patellar tendon",
                    "Pupillary reflex: pupils constrict in bright light",
                    "Gag reflex: prevents choking"
                ]
            },

            sensorySystem: {
                description: "Detects and processes sensory information",
                generalSenses: [
                    {
                        name: "Touch (Mechanoreception)",
                        receptors: "Mechanoreceptors in skin",
                        detects: "Pressure, vibration, texture"
                    },
                    {
                        name: "Temperature (Thermoreception)",
                        receptors: "Thermoreceptors",
                        detects: "Heat and cold"
                    },
                    {
                        name: "Pain (Nociception)",
                        receptors: "Nociceptors",
                        detects: "Tissue damage, extreme temperatures, chemicals",
                        purpose: "Warning system"
                    },
                    {
                        name: "Proprioception",
                        receptors: "Proprioceptors in muscles, tendons, joints",
                        detects: "Body position and movement",
                        importance: "Balance and coordination without looking"
                    }
                ],
                specialSenses: [
                    "Vision (eyes)",
                    "Hearing (ears)",
                    "Balance (inner ear)",
                    "Taste (tongue)",
                    "Smell (nose)"
                ]
            },

            disorders: [
                {
                    name: "Stroke (Cerebrovascular Accident)",
                    description: "Interrupted blood flow to brain",
                    types: [
                        "Ischemic (87%): blocked artery",
                        "Hemorrhagic (13%): ruptured blood vessel"
                    ],
                    symptoms: "Sudden numbness, confusion, vision problems, difficulty walking, severe headache",
                    acronym: "FAST - Face drooping, Arm weakness, Speech difficulty, Time to call 911",
                    damage: "Permanent brain damage if not treated quickly"
                },
                {
                    name: "Alzheimer's Disease",
                    description: "Progressive neurodegenerative disease",
                    symptoms: "Memory loss, confusion, personality changes",
                    pathology: "Amyloid plaques and tau tangles in brain",
                    affected: "Primarily elderly, most common dementia",
                    progressive: "Worsens over time, no cure"
                },
                {
                    name: "Parkinson's Disease",
                    description: "Neurodegenerative disorder affecting movement",
                    cause: "Death of dopamine-producing neurons in substantia nigra",
                    symptoms: "Tremor at rest, rigidity, slow movement, balance problems",
                    treatment: "L-DOPA (dopamine precursor), medications, deep brain stimulation"
                },
                {
                    name: "Multiple Sclerosis (MS)",
                    description: "Autoimmune disease attacking myelin in CNS",
                    mechanism: "Immune system destroys myelin sheath",
                    symptoms: "Vision problems, muscle weakness, coordination issues, fatigue",
                    progressive: "Symptoms worsen over time",
                    variability: "Highly variable course and severity"
                },
                {
                    name: "Epilepsy",
                    description: "Disorder causing recurrent seizures",
                    cause: "Abnormal electrical activity in brain",
                    types: "Generalized (whole brain) or focal (one area)",
                    treatment: "Anti-seizure medications, sometimes surgery"
                },
                {
                    name: "Spinal Cord Injury",
                    description: "Damage to spinal cord causing loss of function",
                    effects: "Paralysis, loss of sensation below injury level",
                    complete: "No function below injury",
                    incomplete: "Some function retained",
                    level: "Higher injury = more function lost"
                },
                {
                    name: "Meningitis",
                    description: "Inflammation of meninges (brain/spinal cord covering)",
                    causes: "Viral or bacterial infection",
                    symptoms: "Severe headache, stiff neck, fever, sensitivity to light",
                    serious: "Bacterial meningitis can be fatal, requires immediate treatment"
                },
                {
                    name: "Depression",
                    description: "Mood disorder with persistent sadness and loss of interest",
                    neurobiology: "Imbalance in neurotransmitters (serotonin, norepinephrine, dopamine)",
                    symptoms: "Sadness, fatigue, changes in sleep/appetite, difficulty concentrating",
                    treatment: "Therapy, medications (SSRIs, SNRIs), lifestyle changes"
                },
                {
                    name: "Schizophrenia",
                    description: "Severe mental disorder affecting thinking and perception",
                    neurobiology: "Excess dopamine activity in certain brain regions",
                    symptoms: "Hallucinations, delusions, disorganized thinking",
                    treatment: "Antipsychotic medications, therapy, support"
                }
            ],

            plasticity: {
                description: "Brain's ability to change and reorganize throughout life",
                neurogenesis: "Formation of new neurons (occurs in hippocampus and olfactory bulb)",
                synapticPlasticity: "Strengthening or weakening of synapses based on activity",
                learningAndMemory: "Physical changes in brain with new experiences",
                recovery: "Brain can sometimes compensate for damage by reorganizing",
                criticalPeriods: "Times of heightened plasticity (especially childhood)",
                importance: "Basis of learning, memory, recovery from injury"
            },

            memory: {
                types: [
                    {
                        name: "Sensory Memory",
                        duration: "Milliseconds to seconds",
                        description: "Brief retention of sensory information"
                    },
                    {
                        name: "Short-Term (Working) Memory",
                        duration: "Seconds to minutes",
                        capacity: "~7 items",
                        location: "Prefrontal cortex",
                        description: "Temporary storage and manipulation"
                    },
                    {
                        name: "Long-Term Memory",
                        duration: "Days to lifetime",
                        capacity: "Unlimited",
                        types: [
                            {
                                name: "Explicit (Declarative)",
                                description: "Conscious memories",
                                subtypes: [
                                    "Episodic: personal experiences (what you did yesterday)",
                                    "Semantic: facts and knowledge (Paris is in France)"
                                ],
                                brain: "Hippocampus crucial for formation"
                            },
                            {
                                name: "Implicit (Non-declarative)",
                                description: "Unconscious memories",
                                subtypes: [
                                    "Procedural: skills and habits (riding bike)",
                                    "Emotional: conditioned responses"
                                ],
                                brain: "Cerebellum, basal ganglia"
                            }
                        ]
                    }
                ],
                consolidation: "Process of transferring short-term to long-term memory",
                sleep: "Important for memory consolidation"
            }
        };
    }

    handleEndocrineSystem(problem) {
        return {
            topic: "Endocrine System",
            category: 'endocrine_system',
            
            overview: {
                description: "The endocrine system uses hormones (chemical messengers) to regulate long-term processes like growth, metabolism, and reproduction.",
                characteristics: [
                    "Slower than nervous system (minutes to hours)",
                    "Longer-lasting effects",
                    "Uses bloodstream for transport",
                    "Works with nervous system to maintain homeostasis"
                ],
                comparisonWithNervous: {
                    endocrine: "Hormones in blood, slow, long-lasting, widespread effects",
                    nervous: "Electrical/chemical signals, fast, brief, targeted effects"
                }
            },

            hormones: {
                definition: "Chemical messengers secreted into bloodstream",
                characteristics: [
                    "Produced by endocrine glands",
                    "Travel throughout body in blood",
                    "Only affect target cells (cells with specific receptors)",
                    "Effective in very small amounts",
                    "Regulate growth, metabolism, reproduction, behavior"
                ],
                types: {
                    peptideHormones: {
                        composition: "Chains of amino acids",
                        examples: ["Insulin", "Growth hormone", "ADH", "Oxytocin"],
                        solubility: "Water-soluble",
                        mechanism: "Bind to cell surface receptors, trigger intracellular cascade",
                        speed: "Relatively fast (minutes)"
                    },
                    steroidHormones: {
                        composition: "Derived from cholesterol",
                        examples: ["Testosterone", "Estrogen", "Progesterone", "Cortisol"],
                        solubility: "Lipid-soluble",
                        mechanism: "Pass through cell membrane, bind to intracellular receptors, affect gene transcription",
                        speed: "Slower (hours) but long-lasting"
                    },
                    amineHormones: {
                        composition: "Modified amino acids",
                        examples: ["Thyroid hormones", "Epinephrine", "Norepinephrine"],
                        properties: "Can be water- or lipid-soluble depending on type"
                    }
                },
                regulation: {
                    negativeFeedback: {
                        description: "Most common - output inhibits further production",
                        example: "High blood glucose → insulin released → lowers glucose → less insulin released",
                        analogy: "Thermostat turning off heater when temperature reached",
                        purpose: "Maintains homeostasis"
                    },
                    positiveFeedback: {
                        description: "Rare - output stimulates more production",
                        example: "Oxytocin during childbirth → uterine contractions → more oxytocin",
                        characteristic: "Amplifies response until event completes"
                    },
                    neuralControl: {
                        description: "Nervous system directly stimulates hormone release",
                        example: "Sympathetic stimulation of adrenal medulla releasing epinephrine"
                    },
                    hormonalControl: {
                        description: "One hormone triggers release of another",
                        example: "Hypothalamus releasing hormones control pituitary"
                    }
                }
            },

            majorGlands: [
                 {
                    name: "Hypothalamus",
                    location: "Brain (below thalamus)",
                    connection: "Links nervous and endocrine systems",
                    functions: [
                        "Produces releasing and inhibiting hormones controlling pituitary",
                        "Produces ADH and oxytocin (stored in posterior pituitary)",
                        "Regulates body temperature, hunger, thirst, sleep"
                    ],
                    hormones: [
                        {
                            name: "TRH (Thyrotropin-Releasing Hormone)",
                            target: "Anterior pituitary",
                            effect: "Stimulates TSH release"
                        },
                        {
                            name: "CRH (Corticotropin-Releasing Hormone)",
                            target: "Anterior pituitary",
                            effect: "Stimulates ACTH release"
                        },
                        {
                            name: "GnRH (Gonadotropin-Releasing Hormone)",
                            target: "Anterior pituitary",
                            effect: "Stimulates FSH and LH release"
                        },
                        {
                            name: "GHRH (Growth Hormone-Releasing Hormone)",
                            target: "Anterior pituitary",
                            effect: "Stimulates growth hormone release"
                        }
                    ],
                    importance: "Master regulator of endocrine system"
                },
                {
                    name: "Pituitary Gland",
                    location: "Base of brain, attached to hypothalamus",
                    size: "Pea-sized",
                    nickname: "'Master gland' - but controlled by hypothalamus",
                    divisions: {
                        anteriorPituitary: {
                            description: "Front lobe - produces own hormones",
                            hormones: [
                                {
                                    name: "Growth Hormone (GH)",
                                    targets: "Most body tissues",
                                    effects: [
                                        "Stimulates growth (especially bone and muscle)",
                                        "Increases protein synthesis",
                                        "Promotes fat breakdown",
                                        "Raises blood glucose"
                                    ],
                                    disorders: {
                                        excess: "Gigantism (children), acromegaly (adults)",
                                        deficiency: "Dwarfism (children)"
                                    }
                                },
                                {
                                    name: "Thyroid-Stimulating Hormone (TSH)",
                                    target: "Thyroid gland",
                                    effect: "Stimulates thyroid hormone production",
                                    regulation: "Regulated by TRH from hypothalamus, negative feedback from thyroid hormones"
                                },
                                {
                                    name: "Adrenocorticotropic Hormone (ACTH)",
                                    target: "Adrenal cortex",
                                    effect: "Stimulates cortisol release",
                                    regulation: "Regulated by CRH, stress"
                                },
                                {
                                    name: "Follicle-Stimulating Hormone (FSH)",
                                    targets: "Gonads (ovaries and testes)",
                                    effects: {
                                        females: "Stimulates egg maturation and estrogen production",
                                        males: "Stimulates sperm production"
                                    }
                                },
                                {
                                    name: "Luteinizing Hormone (LH)",
                                    targets: "Gonads",
                                    effects: {
                                        females: "Triggers ovulation, stimulates progesterone production",
                                        males: "Stimulates testosterone production"
                                    }
                                },
                                {
                                    name: "Prolactin",
                                    target: "Mammary glands",
                                    effect: "Stimulates milk production after childbirth",
                                    regulation: "Inhibited by dopamine from hypothalamus"
                                }
                            ]
                        },
                        posteriorPituitary: {
                            description: "Back lobe - stores hormones made by hypothalamus",
                            hormones: [
                                {
                                    name: "Antidiuretic Hormone (ADH/Vasopressin)",
                                    target: "Kidneys",
                                    effects: [
                                        "Increases water reabsorption",
                                        "Reduces urine output",
                                        "Raises blood pressure (at high doses)"
                                    ],
                                    stimulus: "Dehydration, low blood volume",
                                    disorder: {
                                        deficiency: "Diabetes insipidus (excessive urination)"
                                    }
                                },
                                {
                                    name: "Oxytocin",
                                    targets: "Uterus, mammary glands",
                                    effects: [
                                        "Stimulates uterine contractions during labor",
                                        "Milk ejection (letdown) during nursing",
                                        "Social bonding, trust"
                                    ],
                                    nickname: "'Love hormone' or 'cuddle hormone'"
                                }
                            ]
                        }
                    }
                },
                {
                    name: "Thyroid Gland",
                    location: "Front of neck, below larynx",
                    shape: "Butterfly-shaped",
                    hormones: [
                        {
                            name: "Thyroid Hormones (T3 and T4)",
                            composition: "T3 (triiodothyronine) and T4 (thyroxine) - contain iodine",
                            effects: [
                                "Increase metabolic rate",
                                "Increase body temperature",
                                "Stimulate protein synthesis",
                                "Essential for normal growth and development",
                                "Affect virtually every cell in body"
                            ],
                            regulation: "Regulated by TSH from pituitary, negative feedback",
                            requirement: "Require iodine from diet",
                            disorders: {
                                hyperthyroidism: {
                                    description: "Excess thyroid hormone",
                                    cause: "Graves' disease (autoimmune)",
                                    symptoms: "Weight loss, rapid heart rate, heat intolerance, anxiety, goiter"
                                },
                                hypothyroidism: {
                                    description: "Deficient thyroid hormone",
                                    causes: "Hashimoto's disease, iodine deficiency",
                                    symptoms: "Weight gain, fatigue, cold intolerance, depression, goiter"
                                }
                            }
                        },
                        {
                            name: "Calcitonin",
                            target: "Bones",
                            effect: "Lowers blood calcium by inhibiting bone breakdown",
                            note: "Less important in humans than parathyroid hormone"
                        }
                    ]
                },
                {
                    name: "Parathyroid Glands",
                    location: "Four small glands on back of thyroid",
                    size: "Rice grain-sized",
                    hormone: {
                        name: "Parathyroid Hormone (PTH)",
                        target: "Bones, kidneys, intestines",
                        effects: [
                            "Raises blood calcium levels",
                            "Stimulates bone breakdown (releases calcium)",
                            "Increases calcium reabsorption in kidneys",
                            "Activates vitamin D (increases intestinal calcium absorption)"
                        ],
                        regulation: "Directly senses blood calcium levels",
                        importance: "Critical for calcium homeostasis",
                        balance: "Works opposite to calcitonin"
                    },
                    disorders: {
                        hyperparathyroidism: "Excess PTH, high blood calcium, bone loss",
                        hypoparathyroidism: "Deficient PTH, low blood calcium, muscle spasms"
                    }
                },
                {
                    name: "Adrenal Glands",
                    location: "On top of each kidney",
                    number: "Two glands",
                    regions: {
                        adrenalCortex: {
                            description: "Outer region",
                            hormones: [
                                {
                                    name: "Cortisol",
                                    class: "Glucocorticoid",
                                    effects: [
                                        "Raises blood glucose",
                                        "Suppresses immune system",
                                        "Anti-inflammatory",
                                        "Stress response",
                                        "Metabolism regulation"
                                    ],
                                    regulation: "Regulated by ACTH",
                                    disorder: {
                                        excess: "Cushing's syndrome (weight gain, high blood sugar, immune suppression)",
                                        deficiency: "Addison's disease (fatigue, low blood pressure, weight loss)"
                                    }
                                },
                                {
                                    name: "Aldosterone",
                                    class: "Mineralocorticoid",
                                    target: "Kidneys",
                                    effects: [
                                        "Increases sodium reabsorption",
                                        "Increases potassium excretion",
                                        "Raises blood pressure and volume"
                                    ],
                                    regulation: "Renin-angiotensin-aldosterone system (RAAS)"
                                },
                                {
                                    name: "Androgens",
                                    description: "Small amounts of sex hormones",
                                    effect: "Contribute to sex drive, especially in females"
                                }
                            ]
                        },
                        adrenalMedulla: {
                            description: "Inner region",
                            hormones: [
                                {
                                    name: "Epinephrine (Adrenaline)",
                                    effects: [
                                        "Increases heart rate and force",
                                        "Dilates airways",
                                        "Raises blood glucose",
                                        "Dilates pupils",
                                        "Redirects blood to muscles",
                                        "Increases alertness"
                                    ],
                                    stimulus: "Stress, danger (fight-or-flight)",
                                    speed: "Rapid action"
                                },
                                {
                                    name: "Norepinephrine",
                                    effects: "Similar to epinephrine, stronger vasoconstriction",
                                    also: "Neurotransmitter in nervous system"
                                }
                            ],
                            control: "Directly controlled by sympathetic nervous system"
                        }
                    }
                },
                {
                    name: "Pancreas",
                    location: "Behind stomach",
                    dualFunction: "Exocrine (digestive enzymes) and endocrine (hormones)",
                    endocrinePortion: "Islets of Langerhans",
                    hormones: [
                        {
                            name: "Insulin",
                            producedBy: "Beta cells",
                            effects: [
                                "Lowers blood glucose",
                                "Promotes glucose uptake by cells",
                                "Stimulates glycogen synthesis in liver",
                                "Promotes fat and protein synthesis"
                            ],
                            stimulus: "High blood glucose (after eating)",
                            analogy: "'Key' unlocking cells to let glucose in"
                        },
                        {
                            name: "Glucagon",
                            producedBy: "Alpha cells",
                            effects: [
                                "Raises blood glucose",
                                "Stimulates glycogen breakdown in liver",
                                "Stimulates glucose production"
                            ],
                            stimulus: "Low blood glucose (between meals, exercise)",
                            balance: "Works opposite to insulin"
                        }
                    ],
                    bloodGlucoseRegulation: {
                        normal: "70-100 mg/dL fasting",
                        afterMeal: "Rise in glucose → insulin released → glucose absorbed → levels drop",
                        fasting: "Low glucose → glucagon released → liver releases glucose → levels rise",
                        importance: "Brain depends on constant glucose supply"
                    },
                    diabetes: {
                        type1: {
                            description: "Autoimmune destruction of beta cells",
                            result: "No insulin production",
                            symptoms: "High blood sugar, excessive urination and thirst, weight loss",
                            treatment: "Insulin injections required",
                            onset: "Usually childhood or adolescence"
                        },
                        type2: {
                            description: "Insulin resistance (cells don't respond well to insulin)",
                            result: "High blood sugar despite insulin presence",
                            riskFactors: "Obesity, sedentary lifestyle, genetics, age",
                            symptoms: "Often asymptomatic initially, similar to Type 1 when severe",
                            treatment: "Diet, exercise, oral medications, sometimes insulin",
                            onset: "Usually adulthood, increasing in children",
                            prevalence: "~90-95% of diabetes cases"
                        },
                        complications: "Cardiovascular disease, kidney damage, nerve damage, vision loss, poor wound healing"
                    }
                },
                {
                    name: "Pineal Gland",
                    location: "Deep in brain",
                    size: "Tiny, pine cone-shaped",
                    hormone: {
                        name: "Melatonin",
                        effects: [
                            "Regulates sleep-wake cycles (circadian rhythms)",
                            "Promotes sleep",
                            "Antioxidant properties"
                        ],
                        production: "Increases in darkness, decreases in light",
                        regulation: "Controlled by light detected by eyes",
                        jetLag: "Melatonin supplements can help adjust to new time zones"
                    }
                },
                {
                    name: "Thymus",
                    location: "Upper chest, behind sternum",
                    size: "Large in children, shrinks with age",
                    hormone: {
                        name: "Thymosin",
                        function: "Maturation of T lymphocytes (immune cells)",
                        importance: "Critical for immune system development",
                        peak: "Most active during childhood"
                    }
                },
                {
                    name: "Gonads",
                    types: "Ovaries (females) and Testes (males)",
                    dualFunction: "Produce gametes and hormones",
                    ovaries: {
                        location: "Pelvic cavity",
                        hormones: [
                            {
                                name: "Estrogen",
                                effects: [
                                    "Development of female secondary sex characteristics",
                                    "Regulation of menstrual cycle",
                                    "Maintains pregnancy",
                                    "Bone health"
                                ],
                                production: "Follicles and corpus luteum"
                            },
                            {
                                name: "Progesterone",
                                effects: [
                                    "Prepares uterus for pregnancy",
                                    "Maintains pregnancy",
                                    "Regulates menstrual cycle"
                                ],
                                production: "Corpus luteum after ovulation"
                            }
                        ]
                    },
                    testes: {
                        location: "Scrotum",
                        hormones: [
                            {
                                name: "Testosterone",
                                effects: [
                                    "Development of male secondary sex characteristics",
                                    "Sperm production",
                                    "Muscle and bone growth",
                                    "Sex drive"
                                ],
                                production: "Leydig cells"
                            }
                        ]
                    },
                    regulation: "Controlled by FSH and LH from pituitary"
                }
            ],

            otherHormoneProducingOrgans: [
                {
                    organ: "Heart",
                    hormone: "Atrial Natriuretic Peptide (ANP)",
                    effect: "Lowers blood pressure and volume (increases urine output)"
                },
                {
                    organ: "Kidneys",
                    hormone: "Erythropoietin (EPO)",
                    effect: "Stimulates red blood cell production"
                },
                {
                    organ: "Stomach and Intestines",
                    hormones: "Gastrin, Secretin, CCK",
                    effect: "Regulate digestion"
                },
                {
                    organ: "Adipose Tissue (Fat)",
                    hormone: "Leptin",
                    effect: "Regulates appetite and energy balance"
                },
                {
                    organ: "Placenta (during pregnancy)",
                    hormones: "hCG, estrogen, progesterone",
                    effect: "Maintain pregnancy"
                }
            ],

            hormonalDisorders: [
                {
                    name: "Diabetes Mellitus",
                    types: "Type 1 (autoimmune) and Type 2 (insulin resistance)",
                    prevalence: "One of most common endocrine disorders",
                    seeAbove: "Detailed in pancreas section"
                },
                {
                    name: "Hyperthyroidism/Hypothyroidism",
                    seeAbove: "Detailed in thyroid section"
                },
                {
                    name: "Growth Disorders",
                    gigantism: "Excess GH in children (before growth plates close)",
                    acromegaly: "Excess GH in adults (enlarged hands, feet, face)",
                    dwarfism: "GH deficiency in children"
                },
                {
                    name: "Cushing's Syndrome",
                    cause: "Excess cortisol",
                    symptoms: "Weight gain (especially trunk), moon face, high blood sugar, weak bones, easy bruising"
                },
                {
                    name: "Addison's Disease",
                    cause: "Adrenal cortex insufficiency",
                    symptoms: "Fatigue, weight loss, low blood pressure, skin darkening"
                }
            ]
        };
    }

    handleSkeletalSystem(problem) {
        return {
            topic: "Skeletal System",
            category: 'skeletal_system',
            
            overview: {
                description: "The skeletal system provides structural support, protection, movement (with muscles), mineral storage, and blood cell production.",
                boneCount: {
                    infant: "~270 bones (some cartilage, some fused)",
                    adult: "206 bones (after fusion of some bones)"
                },
                functions: [
                    "Support: framework for body",
                    "Protection: shields vital organs",
                    "Movement: provides attachment for muscles",
                    "Mineral storage: calcium and phosphorus reservoir",
                    "Blood cell production: hematopoiesis in bone marrow",
                    "Fat storage: yellow marrow"
                ]
            },

            boneStructure: {
                macroscopic: {
                    compactBone: {
                        description: "Dense, hard outer layer",
                        location: "Shafts of long bones, outer layer of all bones",
                        structure: "Tightly packed osteons (Haversian systems)",
                        function: "Provides strength and protection"
                    },
                    spongyBone: {
                        description: "Porous, honeycomb-like inner layer",
                        location: "Ends of long bones, inside flat/irregular bones",
                        structure: "Trabeculae (thin plates) with spaces",
                        function: "Lightweight strength, houses red marrow",
                        appearance: "Also called cancellous or trabecular bone"
                    }
                },
                microscopic: {
                    osteon: {
                        description: "Structural unit of compact bone",
                        components: [
                            "Central (Haversian) canal: contains blood vessels and nerves",
                            "Lamellae: concentric rings of bone matrix",
                            "Lacunae: small spaces containing osteocytes",
                            "Canaliculi: tiny channels connecting lacunae"
                        ]
                    },
                    cells: [
                        {
                            name: "Osteoblasts",
                            function: "Build bone (synthesize new bone matrix)",
                            activity: "Active during growth and bone repair"
                        },
                        {
                            name: "Osteocytes",
                            function: "Maintain bone tissue",
                            description: "Mature bone cells trapped in lacunae"
                        },
                        {
                            name: "Osteoclasts",
                            function: "Break down bone (resorb bone tissue)",
                            activity: "Remove old or damaged bone, release calcium"
                        }
                    ],
                    matrix: {
                        inorganic: "Calcium phosphate crystals (hydroxyapatite) - provides hardness",
                        organic: "Collagen fibers - provide flexibility and strength",
                        combination: "Hard yet somewhat flexible"
                    }
                },
                longBoneAnatomy: {
                    diaphysis: "Shaft - compact bone surrounding medullary cavity",
                    epiphysis: "Ends - spongy bone covered by thin compact bone",
                    epiphysealPlate: "Growth plate in children (cartilage), becomes epiphyseal line in adults",
                    medullaryCanal: "Hollow center of diaphysis containing yellow marrow (fat)",
                    periosteum: "Outer fibrous membrane covering bone (except at joints)",
                    endosteum: "Thin membrane lining medullary canal",
                    articularCartilage: "Hyaline cartilage covering joint surfaces"
                }
            },

            boneTypes: [
                {
                    type: "Long Bones",
                    description: "Longer than wide",
                    examples: "Femur (thigh), humerus (upper arm), radius, ulna, tibia, fibula",
                    function: "Levers for movement",
                    structure: "Diaphysis (shaft) and two epiphyses (ends)"
                },
                {
                    type: "Short Bones",
                    description: "Cube-shaped, approximately equal in length and width",
                    examples: "Carpals (wrist), tarsals (ankle)",
                    function: "Provide stability, some movement",
                    structure: "Spongy bone covered by thin compact bone"
                },
                {
                    type: "Flat Bones",
                    description: "Thin, flattened, often curved",
                    examples: "Skull bones, ribs, sternum (breastbone), scapula (shoulder blade)",
                    function: "Protection of organs, muscle attachment",
                    structure: "Two layers of compact bone with spongy bone between"
                },
                {
                    type: "Irregular Bones",
                    description: "Complex shapes that don't fit other categories",
                    examples: "Vertebrae, hip bones, some skull bones",
                    function: "Various specialized functions",
                    structure: "Variable"
                },
                {
                    type: "Sesamoid Bones",
                    description: "Small bones embedded in tendons",
                    examples: "Patella (kneecap)",
                    function: "Protect tendons from wear, improve leverage"
                }
            ],

            skeletalDivisions: {
                axialSkeleton: {
                    description: "Forms axis (midline) of body",
                    boneCount: "80 bones",
                    components: [
                        {
                            name: "Skull",
                            count: "22 bones",
                            cranium: "8 bones protecting brain",
                            facial: "14 bones forming face",
                            notable: [
                                "Frontal: forehead",
                                "Parietal: top and sides",
                                "Temporal: temples and sides",
                                "Occipital: back, contains foramen magnum",
                                "Sphenoid: butterfly-shaped, base of skull",
                                "Ethmoid: between eyes",
                                "Mandible: lower jaw (only movable skull bone)",
                                "Maxilla: upper jaw"
                            ],
                            features: "Sutures (immovable joints), sinuses (air spaces)"
                        },
                        {
                            name: "Hyoid Bone",
                            count: "1 bone",
                            location: "Neck, below mandible",
                            unique: "Only bone not articulating with another bone",
                            function: "Supports tongue and larynx"
                        },
                        {
                            name: "Vertebral Column (Spine)",
                            count: "26 bones (including sacrum and coccyx)",
                            regions: [
                                "Cervical (7): neck vertebrae, C1 (atlas), C2 (axis)",
                                "Thoracic (12): chest vertebrae, attach to ribs",
                                "Lumbar (5): lower back, largest vertebrae",
                                "Sacrum (1): 5 fused vertebrae",
                                "Coccyx (1): tailbone, 3-5 fused vertebrae"
                            ],
                            curves: "S-shaped curve provides shock absorption",
                            functions: [
                                "Protects spinal cord",
                                "Supports head and trunk",
                                "Allows flexibility",
                                "Attachment for ribs and muscles"
                            ],
                            intervertebralDiscs: "Fibrocartilage pads between vertebrae, shock absorption"
                        },
                        {
                            name: "Thoracic Cage (Rib Cage)",
                            components: [
                                "Ribs (12 pairs = 24 bones)",
                                "Sternum (1 bone)"
                            ],
                            ribs: {
                                true: "First 7 pairs - attach directly to sternum via costal cartilage",
                                false: "Pairs 8-10 - attach indirectly to sternum",
                                floating: "Pairs 11-12 - no anterior attachment"
                            },
                            sternum: {
                                parts: "Manubrium (top), body (middle), xiphoid process (bottom)",
                                importance: "CPR landmark"
                            },
                            function: "Protects heart, lungs, major vessels"
                        }
                    ]
                },
                appendicularSkeleton: {
                    description: "Bones of limbs and girdles",
                    boneCount: "126 bones",
                    components: [
                        {
                            name: "Pectoral (Shoulder) Girdle",
                            count: "4 bones (2 on each side)",
                            bones: [
                                "Clavicle (collarbone): S-shaped, connects sternum to scapula",
                                "Scapula (shoulder blade): flat, triangular, provides attachment for arm"
                            ],
                            function: "Attaches upper limbs to axial skeleton"
                        },
                        {
                            name: "Upper Limbs",
                            count: "60 bones (30 per arm)",
                            arm: [
                                "Humerus: upper arm bone, longest bone of upper limb"
                            ],
                            forearm: [
                                "Radius: lateral (thumb side), rotates for supination/pronation",
                                "Ulna: medial (pinky side), forms elbow joint"
                            ],
                            hand: [
                                "Carpals: 8 wrist bones arranged in two rows",
                                "Metacarpals: 5 palm bones",
                                "Phalanges: 14 finger bones (3 per finger, 2 in thumb)"
                            ]
                        },
                        {
                            name: "Pelvic (Hip) Girdle",
                            count: "2 hip bones",
                            hipBone: {
                                description: "Each hip bone formed by fusion of 3 bones",
                                components: [
                                    "Ilium: large, flared upper portion",
                                    "Ischium: lower, posterior portion (sit bones)",
                                    "Pubis: anterior portion, pubic symphysis joins left and right"
                                ],
                                acetabulum: "Socket for femur head"
                            },
                            pelvis: {
                                description: "Basin-like structure",
                                includes: "Two hip bones + sacrum + coccyx",
                                differences: {
                                    male: "Narrower, heavier, less flared",
                                    female: "Wider, lighter, more flared (adapted for childbirth)"
                                }
                            },
                            function: "Supports body weight, protects pelvic organs, attaches lower limbs"
                        },
                        {
                            name: "Lower Limbs",
                            count: "60 bones (30 per leg)",
                            thigh: [
                                "Femur: thigh bone, longest and strongest bone in body",
                                "Patella: kneecap, sesamoid bone"
                            ],
                            leg: [
                                "Tibia: shin bone, medial, weight-bearing",
                                "Fibula: lateral, thinner, provides muscle attachment"
                            ],
                            foot: [
                                "Tarsals: 7 ankle bones, including calcaneus (heel) and talus",
                                "Metatarsals: 5 bones forming arch of foot",
                                "Phalanges: 14 toe bones (3 per toe, 2 in big toe)"
                            ],
                            arches: "Longitudinal and transverse arches provide shock absorption"
                        }
                    ]
                }
            },

            joints: {
                definition: "Point where two or more bones meet",
                classification: {
                    byStructure: [
                        {
                            name: "Fibrous Joints",
                            description: "Bones joined by fibrous connective tissue",
                            movement: "Little to no movement",
                            examples: "Skull sutures, teeth in sockets"
                        },
                        {
                            name: "Cartilaginous Joints",
                            description: "Bones joined by cartilage",
                            movement: "Slight movement",
                            examples: "Intervertebral discs, pubic symphysis"
                        },
                        {
                            name: "Synovial Joints",
                            description: "Freely movable joints with joint cavity",
                            movement: "Wide range of movement",
                            examples: "Knee, elbow, shoulder, hip",
                            mostCommon: "Most joints in body"
                        }
                    ],
                    byFunction: [
                        {
                            name: "Synarthrosis",
                            movement: "Immovable",
                            example: "Skull sutures"
                        },
                        {
                            name: "Amphiarthrosis",
                            movement: "Slightly movable",
                            example: "Vertebrae"
                        },
                        {
                            name: "Diarthrosis",
                            movement: "Freely movable",
                            example: "Synovial joints"
                        }
                    ]
                },
                synovialJointStructure: {
                    components: [
                        "Articular cartilage: hyaline cartilage covering bone ends, reduces friction",
                        "Joint cavity: space between bones",
                        "Synovial fluid: lubricates joint, nourishes cartilage",
                        "Joint capsule: fibrous outer layer and synovial membrane inner layer",
                        "Ligaments: connect bone to bone, provide stability",
                        "Sometimes: bursae (fluid sacs), menisci (cartilage pads)"
                    ]
                },
                synovialJointTypes: [
                    {
                        type: "Hinge",
                        movement: "Flexion and extension (one plane)",
                        examples: "Elbow, knee, ankle"
                    },
                    {
                        type: "Ball-and-Socket",
                        movement: "Multiaxial (all directions)",
                        examples: "Shoulder, hip",
                        mostMobile: "Greatest range of motion"
                    },
                    {
                        type: "Pivot",
                        movement: "Rotation",
                        examples: "Atlas-axis (neck rotation), radioulnar (forearm rotation)"
                    },
                    {
                        type: "Gliding (Plane)",
                        movement: "Sliding or gliding",
                        examples: "Carpals, tarsals, vertebrae"
                    },
                    {
                        type: "Condyloid",
                        movement: "Biaxial (flexion/extension, abduction/adduction)",
                        examples: "Wrist, knuckles"
                    },
                    {
                        type: "Saddle",
                        movement: "Biaxial, more range than condyloid",
                        example: "Thumb (carpometacarpal joint)"
                    }
                ],
                movements: [
                    "Flexion: decreasing angle",
                    "Extension: increasing angle",
                    "Abduction: moving away from midline",
                    "Adduction: moving toward midline",
                    "Rotation: turning around axis",
                    "Circumduction: circular movement",
                    "Supination: palm up",
                    "Pronation: palm down",
                    "Dorsiflexion: foot up",
                    "Plantar flexion: foot down",
                    "Inversion: sole inward",
                    "Eversion: sole outward"
                ]
            },
            boneFormationAndGrowth: {
                ossification: {
                    description: "Process of bone formation",
                    types: [
                        {
                            name: "Intramembranous Ossification",
                            description: "Bone develops from fibrous membrane",
                            examples: "Flat bones of skull, clavicle",
                            process: "Osteoblasts secrete bone matrix directly"
                        },
                        {
                            name: "Endochondral Ossification",
                            description: "Bone develops from hyaline cartilage model",
                            examples: "Most bones in body",
                            process: [
                                "Cartilage model forms in embryo",
                                "Cartilage calcifies",
                                "Blood vessels invade, bringing osteoblasts",
                                "Osteoblasts replace cartilage with bone",
                                "Growth plates remain at ends"
                            ]
                        }
                    ]
                },
                growth: {
                    lengthwiseGrowth: {
                        location: "Epiphyseal (growth) plates",
                        process: "Cartilage cells divide, then replaced by bone",
                        duration: "Until late teens to early 20s",
                        closure: "Growth plates ossify, become epiphyseal lines",
                        influences: "Hormones (GH, thyroid, sex hormones), nutrition"
                    },
                    widthGrowth: {
                        location: "Periosteum",
                        process: "Osteoblasts add bone to surface",
                        duration: "Throughout life (slower in adulthood)"
                    }
                },
                remodeling: {
                    description: "Continuous process of bone breakdown and rebuilding",
                    cells: "Osteoclasts break down, osteoblasts build",
                    purposes: [
                        "Repair micro-damage",
                        "Adapt to stress (bone becomes stronger where stressed)",
                        "Maintain calcium homeostasis"
                    ],
                    balance: "Imbalance leads to disorders (osteoporosis, osteopetrosis)",
                    lifespan: "Entire skeleton replaced every ~10 years"
                }
            },

            calciumHomeostasis: {
                description: "Bones serve as calcium reservoir",
                regulation: "Parathyroid hormone (PTH) and calcitonin",
                importance: [
                    "Muscle contraction",
                    "Nerve function",
                    "Blood clotting",
                    "Enzyme function"
                ],
                PTH: "Releases calcium from bone when blood levels low",
                calcitonin: "Deposits calcium into bone when blood levels high"
            },

            boneMarrow: {
                redMarrow: {
                    description: "Hematopoietic tissue producing blood cells",
                    location: "Spongy bone of flat bones, epiphyses of long bones",
                    produces: "Red blood cells, white blood cells, platelets",
                    lifespan: "Throughout life"
                },
                yellowMarrow: {
                    description: "Adipose (fat) tissue",
                    location: "Medullary cavity of long bones in adults",
                    function: "Energy storage",
                    conversion: "Can convert back to red marrow if needed (severe blood loss)"
                }
            },

            disorders: [
                {
                    name: "Osteoporosis",
                    description: "Loss of bone density and strength",
                    cause: "Bone resorption exceeds bone formation",
                    riskFactors: "Age, menopause (low estrogen), sedentary lifestyle, poor calcium/vitamin D intake",
                    symptoms: "Often asymptomatic until fracture",
                    complications: "Fractures (especially hip, spine, wrist)",
                    prevention: "Exercise, adequate calcium/vitamin D, avoid smoking/excess alcohol"
                },
                {
                    name: "Osteoarthritis",
                    description: "Degeneration of articular cartilage in joints",
                    cause: "Wear and tear over time",
                    symptoms: "Joint pain, stiffness, swelling, decreased range of motion",
                    affected: "Weight-bearing joints (knees, hips, spine), hands",
                    treatment: "Pain relief, physical therapy, joint replacement in severe cases"
                },
                {
                    name: "Rheumatoid Arthritis",
                    description: "Autoimmune disease attacking joint synovial membranes",
                    mechanism: "Immune system attacks own joints",
                    symptoms: "Joint pain, swelling, warmth, stiffness (especially morning)",
                    systemic: "Can affect other organs",
                    treatment: "Anti-inflammatory drugs, immunosuppressants, biologics"
                },
                {
                    name: "Fractures",
                    types: [
                        "Simple (closed): bone broken but doesn't pierce skin",
                        "Compound (open): bone pierces skin",
                        "Greenstick: incomplete fracture (children)",
                        "Comminuted: bone shattered into pieces",
                        "Compression: bone crushed",
                        "Spiral: twisting force"
                    ],
                    healing: "Hematoma → soft callus → hard callus → remodeling (weeks to months)"
                },
                {
                    name: "Scoliosis",
                    description: "Abnormal lateral curvature of spine",
                    types: "Idiopathic (unknown cause, most common), congenital, neuromuscular",
                    treatment: "Bracing (if growing), surgery (severe cases)"
                },
                {
                    name: "Rickets (children) / Osteomalacia (adults)",
                    description: "Soft, weak bones due to vitamin D deficiency",
                    cause: "Inadequate vitamin D, calcium, or phosphate",
                    symptoms: "Bowed legs, bone pain, fractures",
                    treatment: "Vitamin D and calcium supplementation"
                }
            ]
        };
    }

    handleMuscularSystem(problem) {
        return {
            topic: "Muscular System",
            category: 'muscular_system',

            overview: {
                description: "The muscular system enables movement, maintains posture, generates heat, and circulates blood.",
                muscleCount: "Over 600 skeletal muscles in human body",
                functions: [
                    "Movement: locomotion and manipulation of objects",
                    "Posture: maintaining body position",
                    "Joint stability: supporting and stabilizing joints",
                    "Heat production: muscle contraction generates heat (thermogenesis)",
                    "Circulation: cardiac muscle pumps blood, smooth muscle moves substances"
                ],
                musclePercentage: "~40-50% of body weight"
            },

            muscleTypes: [
                {
                    name: "Skeletal Muscle",
                    appearance: "Striated (striped)",
                    control: "Voluntary (conscious control)",
                    location: "Attached to bones via tendons",
                    function: "Body movement, posture, heat production",
                    cells: {
                        description: "Long, cylindrical, multinucleated fibers",
                        nuclei: "Multiple nuclei per cell (peripherally located)",
                        length: "Can be several centimeters long"
                    },
                    properties: "Contracts rapidly, fatigues relatively quickly"
                },
                {
                    name: "Cardiac Muscle",
                    appearance: "Striated",
                    control: "Involuntary (no conscious control)",
                    location: "Heart wall only",
                    function: "Pumps blood throughout body",
                    cells: {
                        description: "Branched, interconnected cells",
                        nuclei: "One or two centrally located nuclei per cell",
                        intercalatedDiscs: "Specialized junctions connecting cells, allow rapid signal transmission"
                    },
                    properties: "Contracts rhythmically without fatigue, intrinsic pacemaker"
                },
                {
                    name: "Smooth Muscle",
                    appearance: "Non-striated (smooth)",
                    control: "Involuntary",
                    location: "Walls of hollow organs (blood vessels, digestive tract, bladder, uterus)",
                    function: "Moves substances through organs, regulates blood vessel diameter",
                    cells: {
                        description: "Spindle-shaped cells",
                        nuclei: "One centrally located nucleus per cell",
                        size: "Smallest muscle cells"
                    },
                    properties: "Contracts slowly and rhythmically, does not fatigue easily"
                }
            ],

            skeletalMuscleStructure: {
                organization: {
                    description: "Hierarchical organization from organ to protein level",
                    levels: [
                        "Muscle organ: entire muscle (e.g., biceps)",
                        "Fascicles: bundles of muscle fibers",
                        "Muscle fibers (cells): individual cells",
                        "Myofibrils: contractile elements within fibers",
                        "Myofilaments: protein filaments (actin and myosin)"
                    ]
                },
                connectiveTissue: {
                    epimysium: "Outer layer surrounding entire muscle",
                    perimysium: "Surrounds fascicles",
                    endomysium: "Surrounds individual muscle fibers",
                    function: "Provides support, transmits force, contains blood vessels and nerves"
                },
                myofibril: {
                    description: "Cylindrical structures running length of fiber",
                    composition: "Arranged myofilaments",
                    striation: "Alternating light and dark bands create striped appearance"
                },
                sarcomere: {
                    description: "Functional contractile unit of muscle",
                    boundaries: "Between two Z-discs",
                    length: "~2.5 μm when relaxed",
                    components: [
                        "Z-disc (Z-line): anchors thin filaments",
                        "I band: light band, only thin filaments",
                        "A band: dark band, entire length of thick filaments",
                        "H zone: within A band, only thick filaments",
                        "M line: center of sarcomere, connects thick filaments"
                    ],
                    filaments: {
                        thinFilaments: {
                            protein: "Primarily actin",
                            regulatory: "Tropomyosin and troponin regulate binding sites",
                            attachment: "Anchored to Z-discs"
                        },
                        thickFilaments: {
                            protein: "Myosin",
                            structure: "Tail and two heads",
                            heads: "Crossbridges that bind to actin",
                            location: "Center of sarcomere"
                        }
                    }
                }
            },

            muscleContraction: {
                slidingFilamentTheory: {
                    description: "Muscle contraction occurs by thin filaments sliding past thick filaments",
                    mechanism: "Sarcomeres shorten as myosin pulls actin toward center",
                    filamentLength: "Filaments themselves don't shorten - they slide",
                    result: "Muscle shortens and generates force"
                },
                steps: [
                    {
                        step: "1. Nerve Signal",
                        description: "Motor neuron releases acetylcholine at neuromuscular junction",
                        effect: "Triggers action potential in muscle fiber"
                    },
                    {
                        step: "2. Calcium Release",
                        description: "Action potential travels down T-tubules",
                        effect: "Sarcoplasmic reticulum releases Ca²⁺ into sarcoplasm"
                    },
                    {
                        step: "3. Crossbridge Formation",
                        description: "Ca²⁺ binds to troponin, moving tropomyosin off binding sites",
                        effect: "Myosin heads bind to actin (form crossbridges)"
                    },
                    {
                        step: "4. Power Stroke",
                        description: "Myosin heads pivot, pulling actin toward center",
                        energy: "Uses energy from ATP hydrolysis",
                        result: "Sarcomere shortens"
                    },
                    {
                        step: "5. Crossbridge Detachment",
                        description: "New ATP binds to myosin head",
                        effect: "Myosin releases from actin"
                    },
                    {
                        step: "6. Reactivation",
                        description: "Myosin hydrolyzes ATP, cocking head",
                        ready: "Myosin ready to bind again"
                    },
                    {
                        step: "7. Repeat",
                        description: "Cycle repeats as long as Ca²⁺ and ATP present",
                        frequency: "Can occur 50-100 times per second"
                    }
                ],
                relaxation: [
                    "Nerve signal stops",
                    "Ca²⁺ pumped back into sarcoplasmic reticulum",
                    "Tropomyosin covers binding sites",
                    "Crossbridges cannot form",
                    "Muscle relaxes (elastic recoil)"
                ],
                neuromuscularJunction: {
                    description: "Synapse between motor neuron and muscle fiber",
                    components: [
                        "Axon terminal: end of motor neuron",
                        "Synaptic cleft: gap between neuron and muscle",
                        "Motor end plate: specialized region of muscle membrane"
                    ],
                    transmission: [
                        "Action potential reaches axon terminal",
                        "Ca²⁺ enters terminal",
                        "Acetylcholine (ACh) released",
                        "ACh binds to receptors on muscle",
                        "Na⁺ channels open, depolarization",
                        "Action potential in muscle fiber",
                        "Acetylcholinesterase breaks down ACh"
                    ]
                },
                motorUnit: {
                    definition: "One motor neuron and all muscle fibers it innervates",
                    size: "Few fibers (eye muscles) to thousands (leg muscles)",
                    allOrNone: "All fibers in unit contract together",
                    control: "Fine control = small motor units, strength = large motor units"
                }
            },

            energyForContraction: {
                ATPsources: [
                    {
                        name: "Direct Phosphorylation (Creatine Phosphate)",
                        duration: "~15 seconds",
                        description: "Fastest but most limited",
                        reaction: "Creatine phosphate + ADP → ATP + Creatine",
                        use: "Immediate energy for short bursts"
                    },
                    {
                        name: "Anaerobic Glycolysis",
                        duration: "~60 seconds",
                        description: "Fast but inefficient",
                        reaction: "Glucose → 2 ATP + Lactic acid",
                        limitation: "Lactic acid buildup causes fatigue",
                        use: "High-intensity exercise"
                    },
                    {
                        name: "Aerobic Cellular Respiration",
                        duration: "Hours",
                        description: "Slow but highly efficient",
                        reaction: "Glucose/Fatty acids + O₂ → ~36-38 ATP + CO₂ + H₂O",
                        requirement: "Adequate oxygen supply",
                        use: "Sustained, low-to-moderate intensity exercise"
                    }
                ],
                oxygenDebt: {
                    description: "Extra oxygen needed after exercise to restore normal conditions",
                    purposes: [
                        "Replenish creatine phosphate",
                        "Convert lactic acid to glucose",
                        "Restore oxygen in blood and muscles",
                        "Repair cellular damage"
                    ],
                    manifestation: "Heavy breathing continues after exercise stops"
                }
            },

            muscleResponse: {
                twitch: {
                    description: "Response to single brief stimulus",
                    phases: [
                        "Latent period: time between stimulus and contraction (~2 ms)",
                        "Contraction period: muscle shortens",
                        "Relaxation period: muscle returns to resting length"
                    ],
                    duration: "~100 ms"
                },
                gradedResponses: {
                    description: "Muscles can produce varying levels of force",
                    mechanisms: [
                        {
                            name: "Wave Summation (Temporal Summation)",
                            description: "Repeated stimulation before complete relaxation",
                            result: "Contractions add together, increase force"
                        },
                        {
                            name: "Tetanus",
                            description: "Rapid, repeated stimulation with no relaxation",
                            types: [
                                "Unfused tetanus: slight relaxation between stimuli",
                                "Fused tetanus: smooth, sustained contraction"
                            ],
                            result: "Maximum tension"
                        },
                        {
                            name: "Recruitment (Multiple Motor Unit Summation)",
                            description: "Activating more motor units",
                            result: "More fibers contracting = more force",
                            precision: "Fine control uses few units, maximum force uses all"
                        }
                    ]
                },
                contractionTypes: {
                    isotonic: {
                        description: "Muscle changes length, tension constant",
                        types: [
                            "Concentric: muscle shortens (lifting weight)",
                            "Eccentric: muscle lengthens while contracting (lowering weight)"
                        ]
                    },
                    isometric: {
                        description: "Muscle generates force but doesn't change length",
                        example: "Holding weight steady, pushing against wall",
                        note: "Muscle active but no movement occurs"
                    }
                }
            },

            muscleMetabolism: {
                fiberTypes: [
                    {
                        name: "Slow-Twitch (Type I)",
                        speed: "Slow contraction",
                        fatigue: "Fatigue-resistant",
                        metabolism: "Aerobic (oxidative)",
                        mitochondria: "Many",
                        myoglobin: "High (gives red color)",
                        capillaries: "Extensive",
                        function: "Endurance activities (marathon, posture)",
                        example: "Postural muscles, leg muscles of endurance athletes"
                    },
                    {
                        name: "Fast-Twitch Type IIa",
                        speed: "Fast contraction",
                        fatigue: "Moderately resistant",
                        metabolism: "Both aerobic and anaerobic",
                        mitochondria: "Many",
                        myoglobin: "Moderate (pink color)",
                        function: "Prolonged, intense activity (middle-distance running)",
                        characteristics: "Intermediate between Type I and IIx"
                    },
                    {
                        name: "Fast-Twitch Type IIx (IIb)",
                        speed: "Very fast contraction",
                        fatigue: "Fatigue quickly",
                        metabolism: "Anaerobic (glycolytic)",
                        mitochondria: "Few",
                        myoglobin: "Low (white color)",
                        function: "Short bursts of power (sprinting, jumping)",
                        example: "Eye muscles, arm muscles of sprinters"
                    }
                ],
                genetics: "Fiber type ratio largely determined by genetics",
                training: "Some conversion possible with training (IIx ↔ IIa)"
            },

            muscleAttachment: {
                origin: {
                    description: "Attachment site that remains relatively stationary",
                    typically: "Proximal (closer to body center)"
                },
                insertion: {
                    description: "Attachment site that moves during contraction",
                    typically: "Distal (farther from body center)"
                },
                tendons: {
                    description: "Dense connective tissue connecting muscle to bone",
                    composition: "Primarily collagen fibers",
                    function: "Transmit force from muscle to bone",
                    strength: "Very strong, can withstand great tension",
                    examples: "Achilles tendon, patellar tendon"
                },
                aponeuroses: {
                    description: "Broad, flat sheet-like tendons",
                    example: "Abdominal muscles"
                }
            },

            muscleActions: {
                agonist: "Prime mover - muscle primarily responsible for movement",
                antagonist: "Opposes action of agonist (relaxes when agonist contracts)",
                synergist: "Assists agonist, adds force or stabilizes",
                fixator: "Stabilizes origin of agonist so it can act more efficiently",
                example: {
                    movement: "Flexing elbow",
                    agonist: "Biceps brachii",
                    antagonist: "Triceps brachii",
                    synergist: "Brachialis",
                    fixator: "Muscles stabilizing shoulder"
                }
            },

            majorSkeletalMuscles: [
                {
                    region: "Head and Neck",
                    muscles: [
                        {
                            name: "Masseter",
                            action: "Closes jaw (chewing)",
                            note: "Strongest muscle for its size"
                        },
                        {
                            name: "Temporalis",
                            action: "Closes and retracts jaw"
                        },
                        {
                            name: "Sternocleidomastoid",
                            action: "Flexes neck, rotates head",
                            location: "Side of neck"
                        },
                        {
                            name: "Facial Muscles",
                            examples: "Orbicularis oculi (closes eyelid), orbicularis oris (closes lips), zygomaticus (smiling)"
                        }
                    ]
                },
                {
                    region: "Trunk",
                    muscles: [
                        {
                            name: "Pectoralis Major",
                            location: "Chest",
                            action: "Flexes, adducts, medially rotates arm"
                        },
                        {
                            name: "Latissimus Dorsi",
                            location: "Back",
                            action: "Extends, adducts, medially rotates arm"
                        },
                        {
                            name: "Trapezius",
                            location: "Upper back and neck",
                            action: "Elevates, retracts, depresses scapula"
                        },
                        {
                            name: "Deltoid",
                            location: "Shoulder",
                            action: "Abducts arm"
                        },
                        {
                            name: "Rectus Abdominis",
                            location: "Abdomen ('six-pack')",
                            action: "Flexes vertebral column"
                        },
                        {
                            name: "External Obliques",
                            location: "Sides of abdomen",
                            action: "Rotates and flexes trunk"
                        },
                        {
                            name: "Diaphragm",
                            location: "Separates thoracic and abdominal cavities",
                            action: "Primary muscle of breathing"
                        },
                        {
                            name: "Intercostals",
                            location: "Between ribs",
                            action: "Breathing (external for inhalation, internal for forced exhalation)"
                        },
                        {
                            name: "Erector Spinae",
                            location: "Along vertebral column",
                            action: "Extends and maintains posture of spine"
                        }
                    ]
                },
                {
                    region: "Upper Limb",
                    muscles: [
                        {
                            name: "Biceps Brachii",
                            location: "Front of upper arm",
                            action: "Flexes elbow, supinates forearm"
                        },
                        {
                            name: "Triceps Brachii",
                            location: "Back of upper arm",
                            action: "Extends elbow"
                        },
                        {
                            name: "Brachialis",
                            location: "Deep to biceps",
                            action: "Flexes elbow (strongest elbow flexor)"
                        },
                        {
                            name: "Brachioradialis",
                            location: "Forearm",
                            action: "Flexes elbow"
                        },
                        {
                            name: "Pronator Teres",
                            action: "Pronates forearm"
                        },
                        {
                            name: "Flexor Carpi Muscles",
                            action: "Flex wrist"
                        },
                        {
                            name: "Extensor Carpi Muscles",
                            action: "Extend wrist"
                        }
                    ]
                },
                {
                    region: "Lower Limb",
                    muscles: [
                        {
                            name: "Gluteus Maximus",
                            location: "Buttocks",
                            action: "Extends and laterally rotates hip",
                            note: "Largest muscle in body"
                        },
                        {
                            name: "Gluteus Medius and Minimus",
                            action: "Abduct and medially rotate hip"
                        },
                        {
                            name: "Iliopsoas",
                            location: "Deep hip flexor",
                            action: "Flexes hip"
                        },
                        {
                            name: "Quadriceps Femoris",
                            location: "Front of thigh",
                            components: "Rectus femoris, vastus lateralis, vastus medialis, vastus intermedius",
                            action: "Extends knee"
                        },
                        {
                            name: "Hamstrings",
                            location: "Back of thigh",
                            components: "Biceps femoris, semitendinosus, semimembranosus",
                            action: "Flex knee, extend hip"
                        },
                        {
                            name: "Adductors",
                            location: "Inner thigh",
                            action: "Adduct hip"
                        },
                        {
                            name: "Gastrocnemius",
                            location: "Calf",
                            action: "Plantar flexes foot, flexes knee",
                            attachment: "Achilles tendon to calcaneus"
                        },
                        {
                            name: "Soleus",
                            location: "Deep to gastrocnemius",
                            action: "Plantar flexes foot"
                        },
                        {
                            name: "Tibialis Anterior",
                            location: "Front of shin",
                            action: "Dorsiflexes foot"
                        }
                    ]
                }
            ],

            exerciseEffects: {
                aerobicTraining: {
                    description: "Endurance training (running, swimming, cycling)",
                    effects: [
                        "Increased mitochondria and myoglobin",
                        "Increased capillary density",
                        "Improved cardiovascular efficiency",
                        "Enhanced fat metabolism",
                        "Slight increase in slow-twitch fiber size"
                    ],
                    result: "Improved endurance, not significant size increase"
                },
                resistanceTraining: {
                    description: "Strength training (weightlifting)",
                    effects: [
                        "Muscle hypertrophy (increase in fiber size)",
                        "Increased number of myofibrils",
                        "Increased glycogen storage",
                        "Increased strength",
                        "Improved neuromuscular coordination"
                    ],
                    result: "Larger, stronger muscles",
                    note: "Does NOT increase number of muscle fibers (hyperplasia does not occur in humans)"
                },
                atrophy: {
                    description: "Decrease in muscle size and strength",
                    causes: [
                        "Disuse (immobilization, sedentary lifestyle)",
                        "Denervation (loss of nerve supply)",
                        "Aging (sarcopenia)",
                        "Malnutrition"
                    ],
                    reversibility: "Can be reversed with exercise (except severe denervation)"
                }
            },

            disorders: [
                {
                    name: "Muscular Dystrophy",
                    description: "Group of genetic diseases causing progressive muscle degeneration",
                    mostCommon: "Duchenne muscular dystrophy (affects boys)",
                    cause: "Mutation in dystrophin gene",
                    symptoms: "Progressive weakness, loss of ambulation, respiratory problems",
                    progression: "Worsens over time, no cure"
                },
                {
                    name: "Myasthenia Gravis",
                    description: "Autoimmune disorder affecting neuromuscular junction",
                    mechanism: "Antibodies block acetylcholine receptors",
                    symptoms: "Muscle weakness, especially eyes, face, throat",
                    characteristic: "Weakness worsens with activity, improves with rest",
                    treatment: "Acetylcholinesterase inhibitors, immunosuppressants"
                },
                {
                    name: "Muscle Strain",
                    description: "Overstretching or tearing of muscle or tendon",
                    grades: "Grade I (mild), Grade II (moderate), Grade III (complete tear)",
                    symptoms: "Pain, swelling, bruising, limited movement",
                    treatment: "RICE (rest, ice, compression, elevation)"
                },
                {
                    name: "Tendinitis",
                    description: "Inflammation of tendon",
                    common: "Achilles tendinitis, rotator cuff tendinitis, tennis elbow",
                    cause: "Overuse, repetitive motion",
                    symptoms: "Pain, tenderness, swelling",
                    treatment: "Rest, ice, anti-inflammatories, physical therapy"
                },
                {
                    name: "Muscle Cramps",
                    description: "Sudden, involuntary muscle contraction",
                    causes: "Dehydration, electrolyte imbalance, overuse, poor circulation",
                    relief: "Stretching, massage, hydration",
                    prevention: "Proper hydration, stretching, adequate minerals"
                },
                {
                    name: "Rhabdomyolysis",
                    description: "Breakdown of muscle tissue releasing contents into blood",
                    causes: "Extreme exercise, trauma, drugs, infections",
                    danger: "Myoglobin can damage kidneys",
                    symptoms: "Muscle pain, weakness, dark urine",
                    serious: "Medical emergency"
                },
                {
                    name: "Fibromyalgia",
                    description: "Chronic widespread muscle pain",
                    mechanism: "Not fully understood, possibly altered pain processing",
                    symptoms: "Pain, fatigue, sleep problems, cognitive difficulties",
                    diagnosis: "No definitive test, based on symptoms",
                    treatment: "Medications, exercise, stress management"
                }
            ],

            aging: {
                sarcopenia: {
                    description: "Age-related loss of muscle mass and strength",
                    onset: "Begins around age 30, accelerates after 60",
                    causes: [
                        "Decreased protein synthesis",
                        "Loss of motor neurons",
                        "Hormonal changes (decreased testosterone, growth hormone)",
                        "Reduced physical activity",
                        "Poor nutrition"
                    ],
                    effects: "Weakness, falls, loss of independence",
                    prevention: "Resistance training, adequate protein intake"
                },
                changes: [
                    "Decreased muscle mass (3-8% per decade after 30)",
                    "Decreased strength",
                    "Slower contraction speed",
                    "Reduced flexibility",
                    "Increased fat infiltration"
                ]
            }
        };
    }

handleExcretorySystem(problem) {
        return {
            topic: "Excretory (Urinary) System",
            category: 'excretory_system',

            overview: {
                description: "The excretory system removes metabolic wastes, regulates blood volume and pressure, controls electrolyte and pH levels, and produces hormones.",
                mainOrgans: "Kidneys, ureters, bladder, urethra",
                primaryWaste: "Urea (from protein metabolism)",
                functions: [
                    "Excretion: removes metabolic wastes (urea, creatinine, uric acid)",
                    "Regulation of blood volume and pressure",
                    "Regulation of electrolytes (Na⁺, K⁺, Ca²⁺, Cl⁻)",
                    "Regulation of blood pH",
                    "Production of hormones (erythropoietin, renin)",
                    "Activation of vitamin D"
                ]
            },

            anatomy: {
                kidneys: {
                    description: "Paired bean-shaped organs filtering blood",
                    location: "Retroperitoneal (behind peritoneum), on either side of vertebral column (T12-L3)",
                    size: "~10-12 cm long, fist-sized",
                    bloodFlow: "Receive ~20-25% of cardiac output (~1200 mL/min)",
                    filtering: "Filter entire blood volume ~60 times per day",
                    structure: {
                        cortex: {
                            description: "Outer region",
                            contains: "Renal corpuscles, proximal and distal convoluted tubules",
                            appearance: "Granular"
                        },
                        medulla: {
                            description: "Inner region",
                            structure: "Renal pyramids (cone-shaped structures)",
                            contains: "Loops of Henle, collecting ducts",
                            appearance: "Striated"
                        },
                        renalPelvis: {
                            description: "Funnel-shaped cavity",
                            function: "Collects urine from collecting ducts",
                            drains: "Into ureter"
                        },
                        renalHilum: {
                            description: "Indentation where vessels and ureter enter/exit",
                            structures: "Renal artery, renal vein, ureter"
                        }
                    },
                    nephron: {
                        description: "Functional unit of kidney",
                        number: "~1 million per kidney",
                        types: [
                            "Cortical nephrons: 85%, mostly in cortex, short loops",
                            "Juxtamedullary nephrons: 15%, extend deep into medulla, long loops, concentrate urine"
                        ],
                        components: {
                            renalCorpuscle: {
                                description: "Filtering component",
                                location: "Cortex",
                                parts: [
                                    {
                                        name: "Glomerulus",
                                        description: "Capillary network",
                                        function: "Filtration occurs here"
                                    },
                                    {
                                        name: "Bowman's Capsule",
                                        description: "Cup-shaped structure surrounding glomerulus",
                                        function: "Collects filtrate"
                                    }
                                ],
                                bloodSupply: "Afferent arteriole (in) → glomerulus → efferent arteriole (out)"
                            },
                            renalTubule: {
                                description: "Processing component",
                                segments: [
                                    {
                                        name: "Proximal Convoluted Tubule (PCT)",
                                        location: "Cortex",
                                        length: "~15 mm",
                                        function: "Reabsorbs ~65% of filtrate (water, glucose, amino acids, Na⁺, Cl⁻)",
                                        cells: "Cuboidal with microvilli (brush border)",
                                        importance: "Site of most reabsorption"
                                    },
                                    {
                                        name: "Loop of Henle",
                                        location: "Descends into medulla, ascends back to cortex",
                                        limbs: [
                                            "Descending limb: permeable to water, reabsorbs water",
                                            "Ascending limb: impermeable to water, reabsorbs Na⁺ and Cl⁻"
                                        ],
                                        function: "Creates concentration gradient in medulla",
                                        importance: "Allows production of concentrated urine"
                                    },
                                    {
                                        name: "Distal Convoluted Tubule (DCT)",
                                        location: "Cortex",
                                        function: "Reabsorbs Na⁺, water (regulated by hormones)",
                                        secretion: "Secretes K⁺, H⁺",
                                        regulation: "Aldosterone and ANP act here"
                                    },
                                    {
                                        name: "Collecting Duct",
                                        location: "Cortex through medulla to renal pelvis",
                                        function: "Reabsorbs water (regulated by ADH)",
                                        convergence: "Multiple nephrons drain into one duct",
                                        finalAdjustment: "Final concentration of urine"
                                    }
                                ]
                            }
                        },
                        bloodSupply: {
                            afferentArticle: "Brings blood to glomerulus",
                            glomerulus: "Capillary network for filtration",
                            efferentArticle: "Carries blood away from glomerulus",
                            peritubularCapillaries: "Surround tubules, reabsorption and secretion",
                            vasaRecta: "Straight capillaries following loop of Henle in juxtamedullary nephrons"
                        }
                    }
                },
                ureters: {
                    description: "Tubes transporting urine from kidneys to bladder",
                    number: "Two (one per kidney)",
                    length: "~25-30 cm",
                    structure: "Muscular tubes with three layers",
                    transport: "Peristaltic contractions move urine",
                    entry: "Enter bladder at oblique angle (prevents backflow)"
                },
                bladder: {
                    description: "Hollow muscular organ storing urine",
                    location: "Pelvic cavity, posterior to pubic symphysis",
                    capacity: "~400-600 mL (comfortable), up to 1000 mL maximum",
                    wall: "Detrusor muscle (smooth muscle)",
                    lining: "Transitional epithelium (stretches)",
                    trigone: "Triangular region between ureter openings and urethra opening",
                    sphincters: [
                        "Internal urethral sphincter: smooth muscle, involuntary",
                        "External urethral sphincter: skeletal muscle, voluntary"
                    ]
                },
                urethra: {
                    description: "Tube carrying urine from bladder to outside",
                    female: {
                        length: "~4 cm",
                        function: "Only urinary passage",
                        note: "Shorter length increases UTI risk"
                    },
                    male: {
                        length: "~20 cm",
                        function: "Both urinary and reproductive passage",
                        regions: "Prostatic, membranous, spongy (penile)"
                    }
                }
            },

            urineFormation: {
                overview: "Three main processes: filtration, reabsorption, secretion",

                glomerularFiltration: {
                    description: "Pressure forces fluid and small solutes from blood into Bowman's capsule",
                    location: "Glomerulus and Bowman's capsule",
                    mechanism: "Blood pressure forces plasma through filtration membrane",
                    filtrationMembrane: {
                        layers: [
                            "Glomerular capillary endothelium: fenestrated (has pores)",
                            "Basement membrane: blocks large proteins",
                            "Podocytes of Bowman's capsule: filtration slits"
                        ],
                        blocks: "Blood cells and large proteins",
                        allows: "Water, glucose, amino acids, ions, urea, creatinine"
                    },
                    filtrate: {
                        description: "Fluid entering Bowman's capsule",
                        composition: "Similar to plasma except no proteins",
                        volume: "~180 liters per day produced",
                        percentExcreted: "Only ~1% (1-2 liters) becomes urine; 99% reabsorbed"
                    },
                    GFR: {
                        name: "Glomerular Filtration Rate",
                        value: "~125 mL/min (180 L/day)",
                        regulation: [
                            "Autoregulation: maintains constant GFR despite blood pressure changes",
                            "Neural regulation: sympathetic nerves constrict afferent arterioles (decreased GFR)",
                            "Hormonal regulation: renin-angiotensin system"
                        ],
                        importance: "Indicator of kidney function"
                    }
                },

                tubularReabsorption: {
                    description: "Movement of substances from filtrate back into blood",
                    location: "All along renal tubule",
                    amount: "Reabsorbs ~99% of filtrate",
                    mechanisms: [
                        "Active transport: requires ATP (Na⁺, glucose, amino acids)",
                        "Passive transport: diffusion, osmosis (water follows Na⁺)"
                    ],
                    substancesReabsorbed: {
                        PCT: {
                            reabsorbed: [
                                "~65% of water",
                                "~65% of Na⁺ and Cl⁻",
                                "100% of glucose (normally)",
                                "100% of amino acids",
                                "Most HCO₃⁻ (bicarbonate)",
                                "Some urea"
                            ],
                            mechanism: "Active transport of Na⁺, water follows by osmosis"
                        },
                        loopOfHenle: {
                            descending: "Reabsorbs water (passive)",
                            ascending: "Reabsorbs Na⁺ and Cl⁻ (active), impermeable to water",
                            result: "Creates concentration gradient in medulla (hyperosmotic)"
                        },
                        DCT: {
                            reabsorbed: "Na⁺, Cl⁻, water (regulated by aldosterone, ANP)",
                            variable: "Amount depends on body needs"
                        },
                        collectingDuct: {
                            reabsorbed: "Water (regulated by ADH)",
                            importance: "Final adjustment of urine concentration"
                        }
                    },
                    glucoseThreshold: {
                        description: "Maximum glucose that can be reabsorbed",
                        normal: "All glucose reabsorbed (none in urine)",
                        diabetes: "Blood glucose exceeds threshold, appears in urine (glycosuria)"
                    }
                },

                tubularSecretion: {
                    description: "Movement of substances from blood into filtrate",
                    location: "Mainly PCT and DCT",
                    purpose: [
                        "Eliminate substances not filtered (too large or bound to proteins)",
                        "Remove excess K⁺",
                        "Control blood pH (secrete H⁺ or HCO₃⁻)"
                    ],
                    substancesSecreted: [
                        "H⁺ (hydrogen ions) - pH regulation",
                        "K⁺ (potassium) - regulate blood K⁺",
                        "NH₃ (ammonia) - pH regulation",
                        "Creatinine - waste product",
                        "Drugs and toxins - elimination"
                    ],
                    importance: "Fine-tunes composition of urine"
                }
            },

            urineComposition: {
                description: "Final product after filtration, reabsorption, and secretion",
                volume: "1-2 liters per day (varies with hydration)",
                color: "Yellow (urochrome pigment from hemoglobin breakdown)",
                pH: "4.5-8.0 (typically ~6.0, slightly acidic)",
                specificGravity: "1.001-1.035 (density relative to water)",
                composition: {
                    water: "95%",
                    solutes: "5%",
                    normalComponents: [
                        "Urea: main nitrogenous waste (~50% of solutes)",
                        "Creatinine: from muscle metabolism",
                        "Uric acid: from nucleic acid metabolism",
                        "Electrolytes: Na⁺, K⁺, Cl⁻, PO₄³⁻, SO₄²⁻",
                        "Hormones and metabolites"
                    ],
                    abnormalComponents: [
                        "Glucose: indicates diabetes",
                        "Proteins: indicates kidney damage",
                        "Blood: indicates infection, stones, or trauma",
                        "Ketones: indicates diabetes or starvation",
                        "Bacteria: indicates urinary tract infection"
                    ]
                }
            },

            hormonalRegulation: {
                ADH: {
                    name: "Antidiuretic Hormone (Vasopressin)",
                    source: "Produced by hypothalamus, released by posterior pituitary",
                    target: "Collecting ducts",
                    stimulus: "Dehydration, increased blood osmolarity, decreased blood volume",
                    effect: [
                        "Increases water reabsorption in collecting ducts",
                        "Inserts aquaporins (water channels) into collecting duct cells",
                        "Decreases urine volume (more concentrated urine)"
                    ],
                    result: "Conserves water, increases blood volume",
                    negativeFeedback: "Adequate hydration inhibits ADH release",
                    disorder: {
                        deficiency: "Diabetes insipidus - produces large volumes of dilute urine",
                        excess: "SIADH - produces small volumes of concentrated urine"
                    }
                },
                aldosterone: {
                    source: "Adrenal cortex",
                    target: "Distal convoluted tubule and collecting duct",
                    stimulus: "Low blood pressure, low blood Na⁺, high blood K⁺",
                    effect: [
                        "Increases Na⁺ reabsorption",
                        "Increases K⁺ secretion",
                        "Water follows Na⁺ (increases water reabsorption)"
                    ],
                    result: "Increases blood volume and pressure",
                    system: "Part of renin-angiotensin-aldosterone system (RAAS)"
                },
                ANP: {
                    name: "Atrial Natriuretic Peptide",
                    source: "Heart atria",
                    stimulus: "Increased blood volume (stretches atria)",
                    effect: [
                        "Inhibits Na⁺ reabsorption in collecting ducts",
                        "Inhibits renin and aldosterone release",
                        "Dilates afferent arterioles (increases GFR)"
                    ],
                    result: "Increases urine output, decreases blood volume and pressure",
                    note: "Opposes aldosterone and ADH"
                },
                reninAngiotensinAldosteroneSystem: {
                    description: "Hormonal cascade regulating blood pressure and volume",
                    steps: [
                        "1. Low blood pressure detected by kidneys",
                        "2. Kidneys release renin",
                        "3. Renin converts angiotensinogen (from liver) to angiotensin I",
                        "4. ACE (in lungs) converts angiotensin I to angiotensin II",
                        "5. Angiotensin II: constricts blood vessels, stimulates aldosterone release",
                        "6. Aldosterone: increases Na⁺ and water reabsorption",
                        "7. Result: increased blood volume and pressure"
                    ],
                    importance: "Critical for blood pressure regulation",
                    medications: "ACE inhibitors, ARBs used to treat hypertension"
                },
                parathyroidHormone: {
                    effect: "Increases Ca²⁺ reabsorption in kidneys",
                    also: "Activates vitamin D in kidneys"
                },
                erythropoietin: {
                    production: "Kidneys",
                    stimulus: "Low blood oxygen (hypoxia)",
                    effect: "Stimulates red blood cell production in bone marrow",
                    clinical: "Used to treat anemia in kidney disease patients"
                }
            },

            micturition: {
                description: "Process of urination",
                storage: "Bladder stores urine, internal sphincter closed",
                reflex: {
                    trigger: "Stretch receptors activated (~200-400 mL)",
                    pathway: [
                        "Stretch receptors send signals to spinal cord",
                        "Parasympathetic signals to detrusor muscle (contract)",
                        "Internal sphincter relaxes (involuntary)",
                        "External sphincter can be voluntarily relaxed or kept closed"
                    ],
                    voluntary: "Can override reflex by keeping external sphincter closed",
                    infant: "Involuntary (no conscious control)"
                },
                urge: "Conscious sensation to urinate",
                frequency: "Typically 4-8 times per day",
                nocturia: "Waking at night to urinate (normal once, excessive if more)"
            },

            disorders: [
                {
                    name: "Urinary Tract Infection (UTI)",
                    description: "Bacterial infection of urinary system",
                    types: [
                        "Cystitis: bladder infection (most common)",
                        "Urethritis: urethra infection",
                        "Pyelonephritis: kidney infection (most serious)"
                    ],
                    cause: "Usually E. coli bacteria",
                    moreCommon: "Females (shorter urethra)",
                    symptoms: "Burning during urination, frequent urge, cloudy urine, pelvic pain",
                    treatment: "Antibiotics",
                    complications: "Can spread to kidneys if untreated"
                },
                {
                    name: "Kidney Stones (Renal Calculi)",
                    description: "Hard deposits of minerals and salts",
                    types: "Calcium oxalate (most common), uric acid, struvite, cystine",
                    formation: "When urine becomes supersaturated with minerals",
                    riskFactors: "Dehydration, diet high in salt/protein, family history, obesity",
                    symptoms: "Severe pain (renal colic), blood in urine, nausea",
                    location: "Can form in kidney, pass through ureter (most painful)",
                    treatment: "Small stones pass naturally with fluids; larger stones may need lithotripsy or surgery",
                    prevention: "Adequate hydration (most important)"
                },
                {
                    name: "Chronic Kidney Disease (CKD)",
                    description: "Progressive loss of kidney function over time",
                    stages: "5 stages based on GFR (Stage 1: >90 mL/min to Stage 5: <15 mL/min)",
                    causes: [
                        "Diabetes (leading cause)",
                        "Hypertension",
                        "Glomerulonephritis",
                        "Polycystic kidney disease",
                        "Prolonged urinary obstruction"
                    ],
                    symptoms: "Often asymptomatic early; later: fatigue, swelling, shortness of breath, nausea",
                    complications: "Anemia, bone disease, cardiovascular disease, fluid overload",
                    treatment: "Manage underlying cause, medications, dialysis (if severe), transplant (end-stage)"
                },
                {
                    name: "Acute Kidney Injury (AKI)",
                    description: "Sudden loss of kidney function",
                    causes: [
                        "Prerenal: reduced blood flow (dehydration, shock, heart failure)",
                        "Intrarenal: kidney damage (toxins, infections)",
                        "Postrenal: urinary obstruction (stones, enlarged prostate)"
                    ],
                    symptoms: "Decreased urine output, fluid retention, confusion, fatigue",
                    reversibility: "Often reversible if treated promptly",
                    danger: "Can lead to electrolyte imbalances, fluid overload",
                    emergency: "Medical emergency"
                },
                {
                    name: "Glomerulonephritis",
                    description: "Inflammation of glomeruli",
                    causes: "Infections (strep throat), autoimmune diseases, vasculitis",
                    types: "Acute or chronic",
                    symptoms: "Blood in urine (hematuria), protein in urine (proteinuria), high blood pressure, edema",
                    mechanism: "Damaged filtration membrane allows blood cells and proteins to leak",
                    treatment: "Depends on cause; may include antibiotics, immunosuppressants"
                },
                {
                    name: "Polycystic Kidney Disease (PKD)",
                    description: "Genetic disorder causing numerous cysts in kidneys",
                    types: "Autosomal dominant (adult-onset) or autosomal recessive (infant-onset)",
                    symptoms: "High blood pressure, back/side pain, blood in urine, kidney stones",
                    progression: "Cysts enlarge over time, can lead to kidney failure",
                    treatment: "Manage symptoms and complications, may eventually need dialysis/transplant",
                    inheritance: "Genetic - runs in families"
                },
                {
                    name: "Urinary Incontinence",
                    description: "Involuntary loss of urine",
                    types: [
                        "Stress incontinence: leakage with coughing, sneezing, exercise",
                        "Urge incontinence: sudden strong urge with leakage",
                        "Overflow incontinence: bladder doesn't empty completely",
                        "Functional incontinence: physical/mental impairment prevents reaching toilet"
                    ],
                    causes: "Weak pelvic floor muscles, nerve damage, enlarged prostate, medications",
                    moreCommon: "Elderly, women (especially post-childbirth)",
                    treatment: "Pelvic floor exercises, medications, surgery, lifestyle changes"
                },
                {
                    name: "Bladder Cancer",
                    description: "Abnormal cell growth in bladder lining",
                    mainRiskFactor: "Smoking (50% of cases)",
                    otherRisks: "Chemical exposure, chronic bladder infections, radiation",
                    symptom: "Blood in urine (usually painless)",
                    detection: "Cystoscopy, urine tests",
                    treatment: "Surgery, chemotherapy, immunotherapy, radiation"
                },
                {
                    name: "Benign Prostatic Hyperplasia (BPH)",
                    description: "Enlarged prostate gland (males only)",
                    mechanism: "Enlarged prostate compresses urethra",
                    prevalence: "Common in older men (50% by age 60, 90% by age 85)",
                    symptoms: "Difficulty starting urination, weak stream, frequent urination, incomplete emptying",
                    notCancer: "Benign (not cancerous)",
                    treatment: "Medications (alpha blockers, 5-alpha reductase inhibitors), surgery if severe"
                },
                {
                    name: "Diabetes Insipidus",
                    description: "Deficiency of ADH or kidney resistance to ADH",
                    types: [
                        "Central: insufficient ADH production",
                        "Nephrogenic: kidneys don't respond to ADH"
                    ],
                    symptoms: "Excessive thirst (polydipsia), large volumes of dilute urine (polyuria)",
                    notSugar: "Different from diabetes mellitus (no glucose problem)",
                    treatment: "Synthetic ADH (central type), treat underlying cause"
                }
            ],

            dialysis: {
                description: "Artificial kidney function when kidneys fail",
                indications: "End-stage renal disease (ESRD), severe acute kidney injury",
                types: [
                    {
                        name: "Hemodialysis",
                        description: "Blood filtered through external machine",
                        process: [
                            "Blood removed from body via catheter/fistula",
                            "Passes through dialyzer (artificial kidney)",
                            "Dialysate fluid removes wastes and excess water",
                            "Clean blood returned to body"
                        ],
                        frequency: "Typically 3 times per week, 3-4 hours per session",
                        location: "Dialysis center or home",
                        access: "Arteriovenous fistula, graft, or catheter"
                    },
                    {
                        name: "Peritoneal Dialysis",
                        description: "Uses peritoneum (abdominal lining) as filter",
                        process: [
                            "Dialysate fluid infused into abdominal cavity via catheter",
                            "Fluid dwells 4-6 hours, absorbs wastes",
                            "Fluid drained and replaced with fresh dialysate"
                        ],
                        frequency: "Daily, multiple exchanges",
                        advantage: "Can be done at home, more flexible",
                        types: "CAPD (continuous ambulatory) or APD (automated peritoneal dialysis at night)"
                    }
                ],
                transplant: {
                    description: "Replacing diseased kidney with healthy donor kidney",
                    preference: "Preferred over long-term dialysis",
                    sources: "Living donor (family member, friend) or deceased donor",
                    lifespan: "10-20 years average",
                    requirements: "Lifelong immunosuppressants to prevent rejection",
                    success: "High success rate, restores kidney function"
                }
            },

            clinicalTests: {
                urinalysis: {
                    description: "Examination of urine",
                    physical: "Color, clarity, odor",
                    chemical: "pH, specific gravity, protein, glucose, ketones, blood",
                    microscopic: "Cells, crystals, casts, bacteria",
                    uses: "Diagnose UTI, kidney disease, diabetes, liver disease"
                },
                bloodTests: {
                    BUN: {
                        name: "Blood Urea Nitrogen",
                        measures: "Nitrogen from urea in blood",
                        normal: "7-20 mg/dL",
                        elevated: "Indicates decreased kidney function"
                    },
                    creatinine: {
                        measures: "Creatinine (muscle waste product) in blood",
                        normal: "0.6-1.2 mg/dL",
                        elevated: "Indicates decreased kidney function",
                        advantage: "More specific for kidney function than BUN"
                    },
                    GFR: {
                        name: "Glomerular Filtration Rate",
                        calculation: "Estimated from creatinine, age, sex, race",
                        normal: ">90 mL/min/1.73m²",
                        stages: "Used to stage chronic kidney disease"
                    }
                },
                imaging: [
                    "Ultrasound: visualize kidney structure",
                    "CT scan: detect stones, tumors, structural problems",
                    "MRI: detailed images",
                    "Intravenous pyelogram (IVP): X-ray with contrast dye"
                ],
                cystoscopy: {
                    description: "Visual examination of bladder and urethra",
                    uses: "Diagnose bladder conditions, tumors, stones"
                },
                kidneyBiopsy: {
                    description: "Remove small tissue sample for microscopic examination",
                    uses: "Diagnose specific kidney diseases, guide treatment"
                }
            },

            fluidBalance: {
                waterIntake: "~2.5 liters per day",
                sources: [
                    "Drinking fluids: ~1.5 liters",
                    "Food: ~0.7 liters",
                    "Metabolic water: ~0.3 liters"
                ],
                waterOutput: "~2.5 liters per day",
                routes: [
                    "Urine: ~1.5 liters (60%)",
                    "Insensible losses (skin, lungs): ~0.9 liters (36%)",
                    "Feces: ~0.1 liters (4%)",
                    "Sweat: variable (increases with exercise, heat)"
                ],
                balance: "Intake must equal output for homeostasis",
                regulation: "ADH, aldosterone, thirst mechanism"
            }
        };
    }

    handleImmuneSystem(problem) {
        return {
            topic: "Immune System",
            category: 'immune_system',
            
            overview: {
                description: "The immune system defends the body against pathogens (disease-causing organisms) and abnormal cells.",
                functions: [
                    "Protect against infections (bacteria, viruses, fungi, parasites)",
                    "Remove abnormal or damaged cells",
                    "Detect and destroy cancer cells",
                    "Coordinate inflammatory responses",
                    "Remember past infections (immunological memory)"
                ],
                recognition: "Distinguishes self from non-self",
                layers: "Multiple overlapping defenses"
            },

            defenseLayers: {
                firstLine: {
                    name: "Physical and Chemical Barriers",
                    description: "Prevent pathogen entry",
                    type: "Non-specific (innate)",
                    barriers: [
                        {
                            name: "Skin",
                            mechanism: [
                                "Physical barrier (intact epidermis)",
                                "Dry, slightly acidic (pH 5.5) inhibits growth",
                                "Normal flora compete with pathogens",
                                "Sebum contains antimicrobial substances"
                            ],
                            effectiveness: "Very effective when intact"
                        },
                        {
                            name: "Mucous Membranes",
                            location: "Line respiratory, digestive, urinary, reproductive tracts",
                            mechanism: [
                                "Mucus traps pathogens",
                                "Cilia sweep mucus and pathogens away (respiratory tract)",
                                "Lysozyme in secretions destroys bacteria",
                                "Stomach acid kills swallowed pathogens"
                            ]
                        },
                        {
                            name: "Chemical Defenses",
                            examples: [
                                "Stomach acid (pH 1.5-3.5)",
                                "Lysozyme in tears, saliva, mucus",
                                "Sebum on skin",
                                "Vaginal acidity"
                            ]
                        },
                        {
                            name: "Normal Flora (Microbiome)",
                            description: "Beneficial bacteria on skin and in body",
                            mechanism: "Compete with pathogens for space and nutrients",
                            importance: "Disruption (antibiotics) can allow opportunistic infections"
                        }
                    ]
                },
                secondLine: {
                    name: "Innate Immunity",
                    description: "Rapid, non-specific internal defense",
                    type: "Non-specific (innate)",
                    speed: "Immediate to hours",
                    memory: "No memory",
                    components: [
                        {
                            name: "Phagocytes",
                            description: "Cells that engulf and destroy pathogens",
                            types: [
                                {
                                    name: "Neutrophils",
                                    percentage: "60-70% of white blood cells",
                                    lifespan: "Hours to days",
                                    function: "First responders, destroy bacteria",
                                    appearance: "Multi-lobed nucleus"
                                },
                                {
                                    name: "Macrophages",
                                    origin: "Monocytes that enter tissues",
                                    lifespan: "Months to years",
                                    function: "Phagocytosis, antigen presentation, release cytokines",
                                    location: "Throughout body tissues"
                                },
                                {
                                    name: "Dendritic Cells",
                                    function: "Antigen presentation (link innate and adaptive immunity)",
                                    location: "Skin, mucous membranes, lymphoid organs",
                                    importance: "Activate adaptive immune response"
                                }
                            ],
                            process: "Chemotaxis → adhesion → ingestion → digestion → exocytosis"
                        },
                        {
                            name: "Natural Killer (NK) Cells",
                            description: "Lymphocytes that kill virus-infected and cancer cells",
                            mechanism: "Detect cells lacking MHC I (self-markers)",
                            action: "Release perforins and granzymes causing cell death",
                            noMemory: "Part of innate immunity"
                        },
                        {
                            name: "Inflammatory Response",
                            description: "Localized response to tissue injury or infection",
                            signs: [
                                "Redness (rubor): increased blood flow",
                                "Heat (calor): increased blood flow and metabolic activity",
                                "Swelling (tumor): fluid accumulation",
                                "Pain (dolor): nerve stimulation",
                                "Loss of function (functio laesa): due to swelling and pain"
                            ],
                            process: [
                                "Tissue damage or infection",
                                "Mast cells release histamine",
                                "Vasodilation and increased permeability",
                                "Phagocytes migrate to area (chemotaxis)",
                                "Phagocytes destroy pathogens",
                                "Tissue repair begins"
                            ],
                            purpose: "Isolate infection, recruit immune cells, promote healing",
                            acute: "Short-term, beneficial",
                            chronic: "Long-term, can cause tissue damage"
                        },
                        {
                            name: "Fever",
                            description: "Elevated body temperature",
                            trigger: "Pyrogens (from pathogens or immune cells)",
                            mechanism: "Hypothalamus raises body temperature set point",
                            benefits: [
                                "Inhibits pathogen growth",
                                "Speeds up immune cell activity",
                                "Increases metabolism"
                            ],
                            normal: "<100.4°F (38°C) is low-grade",
                            dangerous: ">104°F (40°C) can damage tissues"
                        },
                        {
                            name: "Complement System",
                            description: "Group of ~30 proteins in blood plasma",
                            activation: "Triggered by pathogens or antibodies",
                            functions: [
                                "Opsonization: coat pathogens for easier phagocytosis",
                                "Chemotaxis: attract phagocytes",
                                "Cell lysis: form membrane attack complex (MAC) punching holes in pathogen",
                                "Inflammation: enhance inflammatory response"
                            ],
                            cascade: "Sequential activation amplifies response"
                        },
                        {
                            name: "Interferons",
                            description: "Proteins released by virus-infected cells",
                            types: "Type I (alpha, beta) - antiviral; Type II (gamma) - immune activation",
                            mechanism: "Warn neighboring cells to resist viral infection",
                            effects: [
                                "Inhibit viral replication",
                                "Enhance MHC expression",
                                "Activate NK cells and macrophages"
                            ]
                        }
                    ]
                },
                thirdLine: {
                    name: "Adaptive Immunity",
                    description: "Specific, targeted defense with memory",
                    type: "Specific (adaptive/acquired)",
                    speed: "Days to weeks for initial response",
                    memory: "Remembers specific pathogens",
                    specificity: "Highly specific to particular antigens",
                    components: ["B lymphocytes (antibody-mediated)", "T lymphocytes (cell-mediated)"]
                }
            },

            adaptiveImmunity: {
                overview: {
                    antigen: {
                        definition: "Any substance that triggers immune response",
                        types: "Proteins, polysaccharides, glycoproteins",
                        examples: "Bacterial surface molecules, viral proteins, toxins, pollen",
                        epitope: "Specific part of antigen recognized by antibody or T cell receptor"
                    },
                    lymphocytes: {
                        origin: "Bone marrow stem cells",
                        types: "B cells and T cells",
                        receptors: "Each lymphocyte has unique receptor recognizing one antigen",
                        diversity: "Millions of different specificities",
                        clonalSelection: "Antigen binds to matching lymphocyte → activation → clonal expansion"
                    },
                    memory: {
                        description: "After initial exposure, some lymphocytes become memory cells",
                        longevity: "Long-lived (years to lifetime)",
                        secondaryResponse: "Faster, stronger response upon re-exposure",
                        basis: "Basis of vaccination and long-term immunity"
                    }
                },
                
                humoralImmunity: {
                    name: "Antibody-Mediated (Humoral) Immunity",
                    cells: "B lymphocytes (B cells)",
                    product: "Antibodies (immunoglobulins)",
                    targets: "Extracellular pathogens (bacteria, toxins, viruses in blood)",
                    
                    Bcells: {
                        maturation: "Bone marrow",
                        receptors: "B cell receptors (BCRs) - membrane-bound antibodies",
                        activation: [
                            "Antigen binds to BCR",
                            "Often requires T helper cell assistance",
                            "B cell activated, undergoes clonal expansion"
                        ],
                        differentiation: {
                            plasmaCells: {
                                description: "Antibody factories",
                                production: "Secrete thousands of antibodies per second",
                                lifespan: "Days to weeks",
                                function: "Produce antibodies specific to antigen"
                            },
                            memoryCells: {
                                description: "Long-lived cells retaining antigen specificity",
                                lifespan: "Years to lifetime",
                                function: "Rapid response upon re-exposure"
                            }
                        }
                    },
                    
                    antibodies: {
                        structure: {
                            shape: "Y-shaped protein",
                            chains: "2 heavy chains + 2 light chains",
                            regions: [
                                "Variable region: binds to specific antigen (antigen-binding site)",
                                "Constant region: determines antibody class, effector functions"
                            ]
                        },
                        classes: [
                            {
                                class: "IgG",
                                percentage: "75-80% of antibodies",
                                functions: [
                                    "Neutralizes toxins and viruses",
                                    "Opsonization (marks for phagocytosis)",
                                    "Activates complement",
                                    "Crosses placenta (provides immunity to fetus)"
                                ],
                                duration: "Long-lasting",
                                location: "Blood, tissues"
                            },
                            {
                                class: "IgM",
                                percentage: "5-10%",
                                functions: [
                                    "First antibody produced in primary response",
                                    "Agglutination (clumps pathogens)",
                                    "Activates complement (very effective)"
                                ],
                                structure: "Pentamer (5 units)",
                                location: "Blood",
                                timing: "Indicates acute/recent infection"
                            },
                            {
                                class: "IgA",
                                percentage: "10-15%",
                                functions: "Prevents pathogen attachment to mucous membranes",
                                location: "Secretions (saliva, tears, mucus, breast milk)",
                                importance: "First line of defense in mucous membranes"
                            },
                            {
                                class: "IgE",
                                percentage: "<1%",
                                functions: [
                                    "Binds to mast cells and basophils",
                                    "Triggers allergic reactions",
                                    "Defends against parasitic worms"
                                ],
                                location: "Bound to mast cells in tissues",
                                problem: "Responsible for allergies and anaphylaxis"
                            },
                            {
                                class: "IgD",
                                percentage: "<1%",
                                function: "B cell receptor, role not fully understood",
                                location: "Surface of B cells"
                            }
                        ],
                        functions: [
                            "Neutralization: blocks pathogen attachment/entry",
                            "Agglutination: clumps pathogens together",
                            "Precipitation: forms insoluble complexes",
                            "Opsonization: marks for phagocytosis",
                            "Complement activation: triggers complement cascade"
                        ]
                    },
                    
                    primaryVsSecondary: {
                        primaryResponse: {
                            timing: "First exposure to antigen",
                            lagTime: "10-14 days to peak",
                            antibody: "Mainly IgM, then IgG",
                            strength: "Weaker response"
                        },
                        secondaryResponse: {
                            timing: "Subsequent exposure",
                            lagTime: "2-7 days to peak",
                            antibody: "Mainly IgG",
                            strength: "Faster, stronger, longer-lasting",
                            reason: "Memory cells already present"
                        }
                    }
                },
                
                cellMediatedImmunity: {
                    name: "Cell-Mediated Immunity",
                    cells: "T lymphocytes (T cells)",
                    targets: "Intracellular pathogens (viruses, some bacteria), cancer cells, transplanted tissue",
                    noAntibodies: "T cells act directly or through other cells",
                    
                    Tcells: {
                        maturation: "Thymus (hence 'T' cell)",
                        receptors: "T cell receptors (TCRs)",
                        MHCrequirement: "Must recognize antigen presented on MHC molecules",
                        types: [
                            {
                                name: "Helper T Cells (CD4⁺)",
                                marker: "CD4 surface protein",
                                function: [
                                    "Central coordinators of immune response",
                                    "Activate B cells",
                                    "Activate cytotoxic T cells",
                                    "Activate macrophages",
                                    "Release cytokines"
                                ],
                                activation: "Antigen presented on MHC II",
                                HIV: "Virus targets and destroys these cells",
                                subtypes: "Th1 (cell-mediated), Th2 (humoral), Th17 (inflammation)"
                            },
                            {
                                name: "Cytotoxic T Cells (CD8⁺)",
                                marker: "CD8 surface protein",
                                function: [
                                    "Directly kill infected cells",
                                    "Kill cancer cells",
                                    "Kill transplanted cells"
                                ],
                                activation: "Antigen presented on MHC I",
                                mechanism: "Release perforins and granzymes → target cell death",
                                targets: "Any cell displaying foreign antigen on MHC I"
                            },
                            {
                                name: "Regulatory T Cells (Tregs)",
                                marker: "CD4⁺ CD25⁺",
                                function: [
                                    "Suppress immune responses",
                                    "Prevent autoimmunity",
                                    "Maintain self-tolerance"
                                ],
                                importance: "Prevent immune system from attacking self"
                            },
                            {
                                name: "Memory T Cells",
                                description: "Long-lived cells retaining antigen specificity",
                                function: "Rapid response upon re-exposure",
                                types: "Helper memory and cytotoxic memory"
                            }
                        ],
                        MHCmolecules: {
                            MHCI: {
                                location: "All nucleated cells",
                                presents: "Intracellular antigens (viral proteins, tumor antigens)",
                                recognizedBy: "CD8⁺ cytotoxic T cells",
                                message: "'I am infected' or 'I am abnormal'"
                            },
                            MHCII: {
                                location: "Antigen-presenting cells (macrophages, dendritic cells, B cells)",
                                presents: "Extracellular antigens that were engulfed",
                                recognizedBy: "CD4⁺ helper T cells",
                                message: "'This is what I found'"
                            }
                        }
                    },
                    
                    cytokines: {
                        description: "Chemical messengers coordinating immune responses",
                        producers: "T cells, macrophages, other immune cells",
                        functions: [
                            "Stimulate cell proliferation and differentiation",
                            "Activate or inhibit immune cells",
                            "Mediate inflammation",
                            "Coordinate innate and adaptive immunity"
                        ],
                        examples: [
                            "Interleukins (IL-1, IL-2, IL-4, etc.): communication between leukocytes",
                            "Interferons: antiviral, activate immune cells",
                            "Tumor necrosis factor (TNF): inflammation, kills tumor cells",
                            "Colony-stimulating factors: stimulate blood cell production"
                        ],
                        cytokinStorm: "Excessive cytokine release can cause tissue damage (sepsis, severe COVID-19)"
                    }
                }
            },

            lymphoidOrgans: {
                primaryLymphoidOrgans: {
                    description: "Where lymphocytes mature",
                    organs: [
                        {
                            name: "Bone Marrow",
                            function: [
                                "Site of hematopoiesis (blood cell production)",
                                "B cells mature here",
                                "T cell precursors produced here"
                            ],
                            location: "Inside bones"
                        },
                        {
                            name: "Thymus",
                            function: [
                                "T cells mature here",
                                "Selection: eliminate self-reactive T cells",
                                "Produces thymosin hormone"
                            ],
                            location: "Upper chest, behind sternum",
                            size: "Large in children, shrinks with age"
                        }
                    ]
                },
                secondaryLymphoidOrgans: {
                    description: "Where immune responses are initiated",
                    organs: [
                        {
                            name: "Lymph Nodes",
                            number: "~600 in body",
                            location: "Along lymphatic vessels (neck, armpits, groin)",
                            structure: "Bean-shaped, ~1-2 cm",
                            function: [
                                "Filter lymph",
                                "Trap antigens and pathogens",
                                "Site of lymphocyte activation",
                                "Produce antibodies"
                            ],
                            swelling: "Enlarged when fighting infection ('swollen glands')"
                        },
                        {
                            name: "Spleen",
                            location: "Left upper abdomen",
                            size: "Fist-sized",
                            functions: [
                                "Filters blood (removes old red blood cells, pathogens)",
                                "Immune surveillance of blood",
                                "Stores platelets",
                                "Produces antibodies"
                            ],
                            regions: "Red pulp (filters blood), white pulp (immune function)",
                            removal: "Can survive without it, but increased infection risk"
                        },
                        {
                            name: "Tonsils",
                            location: "Throat (pharynx)",
                            types: "Palatine (sides), pharyngeal (adenoids, back), lingual (base of tongue)",
                            function: [
                                "Trap pathogens entering through mouth/nose",
                                "Initiate immune response",
                                "First line of defense for respiratory/digestive tracts"
                            ],
                            removal: "Tonsillectomy if chronically infected"
                        },
                        {
                            name: "Peyer's Patches",
                            location: "Small intestine wall",
                            function: [
                                "Monitor intestinal bacteria",
                                "Prevent harmful bacteria from entering blood",
                                "Generate immune response to pathogens"
                            ]
                        },
                        {
                            name: "Appendix",
                            location: "Attached to cecum",
                            function: [
                                "Lymphoid tissue",
                                "May serve as reservoir for beneficial bacteria",
                                "Role not fully understood"
                            ]
                        },
                        {
                            name: "MALT (Mucosa-Associated Lymphoid Tissue)",
                            description: "Diffuse lymphoid tissue in mucous membranes",
                            location: "Respiratory, digestive, urogenital tracts",
                            function: "Protects portals of entry"
                        }
                    ]
                }
            },

            immuneDisorders: [
                {
                    name: "Allergies (Hypersensitivity Type I)",
                    description: "Exaggerated immune response to harmless antigens (allergens)",
                    mechanism: [
                        "First exposure: allergen triggers IgE production",
                        "IgE binds to mast cells and basophils",
                        "Subsequent exposure: allergen binds to IgE on mast cells",
                        "Mast cells degranulate, releasing histamine and other mediators",
                        "Histamine causes vasodilation, increased permeability, smooth muscle contraction"
                    ],
                    symptoms: "Runny nose, watery eyes, sneezing, itching, hives, wheezing",
                    commonAllergens: "Pollen, dust mites, pet dander, foods (peanuts, shellfish), insect stings",
                    treatment: "Antihistamines, corticosteroids, epinephrine (severe), immunotherapy (desensitization)",
                    anaphylaxis: {
                        description: "Severe, life-threatening allergic reaction",
                        symptoms: "Difficulty breathing, swelling of throat, rapid drop in blood pressure, shock",
                        emergency: "Requires immediate epinephrine injection",
                        triggers: "Foods, insect stings, medications"
                    }
                },
                {
                    name: "Autoimmune Diseases",
                    description: "Immune system attacks body's own cells",
                    cause: "Loss of self-tolerance",
                    mechanism: "Antibodies or T cells target self-antigens",
                    examples: [
                        {
                            disease: "Type 1 Diabetes",
                            target: "Pancreatic beta cells",
                            result: "No insulin production"
                        },
                        {
                            disease: "Rheumatoid Arthritis",
                            target: "Joint synovial membranes",
                            result: "Joint inflammation and damage"
                        },
                        {
                            disease: "Multiple Sclerosis",
                            target: "Myelin in CNS",
                            result: "Nerve damage, neurological problems"
                        },
                        {
                            disease: "Systemic Lupus Erythematosus (SLE)",
                            target: "Multiple tissues (DNA, blood cells, kidneys, skin)",
                            result: "Widespread inflammation and organ damage"
                        },
                        {
                            disease: "Graves' Disease",
                            target: "Thyroid stimulating hormone receptors",
                            result: "Hyperthyroidism"
                        },
                        {
                            disease: "Hashimoto's Thyroiditis",
                            target: "Thyroid gland",
                            result: "Hypothyroidism"
                        },
                        {
                            disease: "Celiac Disease",
                            target: "Small intestine (triggered by gluten)",
                            result: "Intestinal damage, malabsorption"
                        },
                        {
                            disease: "Myasthenia Gravis",
                            target: "Acetylcholine receptors at neuromuscular junction",
                            result: "Muscle weakness"
                        }
                    ],
                    riskFactors: "Genetics, gender (more common in females), environmental triggers",
                    treatment: "Immunosuppressants, corticosteroids, symptom management"
                },
                {
                    name: "Immunodeficiency Diseases",
                    description: "Weakened immune system",
                    types: [
                        {
                            type: "Primary (Congenital)",
                            description: "Genetic defects present at birth",
                            examples: [
                                "SCID (Severe Combined Immunodeficiency): 'bubble boy disease', no T or B cells",
                                "DiGeorge Syndrome: thymus doesn't develop, no T cells",
                                "Selective IgA deficiency: most common, lack IgA"
                            ],
                            treatment: "Bone marrow transplant, immunoglobulin replacement, gene therapy"
                        },
                        {
                            type: "Secondary (Acquired)",
                            description: "Develops due to external factors",
                            causes: [
                                "HIV/AIDS: virus destroys helper T cells",
                                "Medications: chemotherapy, immunosuppressants",
                                "Malnutrition: protein-energy malnutrition",
                                "Diseases: diabetes, cancer, kidney disease",
                                "Aging: immune senescence"
                            ]
                        }
                    ],
                    HIVAIDS: {
                        virus: "Human Immunodeficiency Virus",
                        target: "CD4⁺ helper T cells",
                        transmission: "Blood, sexual contact, mother to child",
                        progression: [
                            "Acute infection: flu-like symptoms, high viral load",
                            "Chronic infection: asymptomatic period (years), gradual CD4⁺ decline",
                            "AIDS: CD4⁺ <200 cells/µL, opportunistic infections"
                        ],
                        opportunisticInfections: "Pneumocystis pneumonia, tuberculosis, candidiasis, Kaposi's sarcoma",
                        treatment: "Antiretroviral therapy (ART) - suppresses virus, not a cure",
                        prevention: "Safe sex, PrEP, needle exchange programs"
                    },
                    consequences: "Increased susceptibility to infections and cancer"
                },
                {
                    name: "Hypersensitivity Reactions",
                    description: "Excessive or inappropriate immune responses",
                    types: [
                        {
                            type: "Type I (Immediate)",
                            mechanism: "IgE-mediated",
                            timing: "Minutes",
                            examples: "Allergies, anaphylaxis, asthma"
                        },
                        {
                            type: "Type II (Cytotoxic)",
                            mechanism: "IgG or IgM antibodies against cell surface antigens",
                            timing: "Hours",
                            examples: "Transfusion reactions, hemolytic disease of newborn, Graves' disease"
                        },
                        {
                            type: "Type III (Immune Complex)",
                            mechanism: "Antigen-antibody complexes deposit in tissues",
                            timing: "Hours",
                            examples: "Serum sickness, lupus, rheumatoid arthritis"
                        },
                        {
                            type: "Type IV (Delayed)",
                            mechanism: "T cell-mediated",
                            timing: "Days (24-72 hours)",
                            examples: "Contact dermatitis (poison ivy), TB skin test, transplant rejection"
                        }
                    ]
                }
            ],

            vaccination: {
                principle: "Expose immune system to antigen without causing disease",
                result: "Generates memory cells for rapid response upon actual exposure",
                types: [
                    {
                        name: "Live Attenuated",
                        description: "Weakened live pathogen",
                        advantages: "Strong, long-lasting immunity; often single dose",
                        disadvantages: "Risk of reverting to virulent form; contraindicated in immunocompromised",
                        examples: "MMR (measles, mumps, rubella), chickenpox, yellow fever"
                    },
                    {
                        name: "Inactivated (Killed)",
                        description: "Dead pathogen",
                        advantages: "Safe, cannot cause disease",
                        disadvantages: "Weaker immunity, requires multiple doses and boosters",
                        examples: "Polio (IPV), hepatitis A, rabies"
                    },
                    {
                        name: "Subunit",
                        description: "Specific antigens (proteins) from pathogen",
                        advantages: "Very safe, targeted",
                        disadvantages: "May need boosters, adjuvants often required",
                        examples: "Hepatitis B, HPV, pertussis (acellular)"
                    },
                    {
                        name: "Toxoid",
                        description: "Inactivated bacterial toxin",
                        mechanism: "Generates antibodies against toxin",
                        examples: "Tetanus, diphtheria"
                    },
                    {
                        name: "mRNA",
                        description: "Genetic instructions for making antigen",
                        mechanism: "Body's cells produce antigen, triggering immune response",
                        advantages: "Rapid development, doesn't enter nucleus",
                        examples: "COVID-19 vaccines (Pfizer, Moderna)"
                    },
                    {
                        name: "Viral Vector",
                        description: "Uses harmless virus to deliver genetic instructions",
                        mechanism: "Vector virus delivers gene for antigen into cells",
                        examples: "COVID-19 vaccines (J&J, AstraZeneca)"
                    }
                ],
                herdImmunity: {
                    description: "When enough people are immune, disease can't spread",
                    threshold: "Varies by disease (measles ~95%, polio ~80%)",
                    importance: "Protects those who can't be vaccinated (infants, immunocompromised)"
                },
                scheduleandBoosters: "Multiple doses often needed for full immunity; boosters maintain memory",
                success: "Smallpox eradicated (1980), polio nearly eradicated, dramatic reduction in many diseases"
            },

            transplantation: {
                rejection: {
                    description: "Immune system recognizes transplanted organ as foreign",
                    recognition: "T cells recognize foreign MHC molecules",
                    types: [
                        {
                            type: "Hyperacute Rejection",
                            timing: "Minutes to hours",
                            mechanism: "Pre-existing antibodies against donor",
                            prevention: "Cross-matching before transplant"
                        },
                        {
                            type: "Acute Rejection",
                            timing: "Days to months",
                            mechanism: "T cells attack donor tissue",
                            treatment: "Increase immunosuppression"
                        },
                        {
                            type: "Chronic Rejection",
                            timing: "Months to years",
                            mechanism: "Gradual immune damage",
                            result: "Slow organ failure"
                        }
                    ]
                },
                matching: {
                    HLA: "Human Leukocyte Antigens (MHC molecules)",
                    typing: "Determine donor and recipient HLA types",
                    bestMatch: "Siblings have 25% chance of perfect match",
                    importance: "Better match = less rejection risk"
                },
                immunosuppression: {
                    purpose: "Prevent rejection",
                    medications: [
                        "Corticosteroids: reduce inflammation",
                        "Cyclosporine, tacrolimus: inhibit T cell activation",
                        "Azathioprine, mycophenolate: inhibit lymphocyte proliferation",
                        "Antibodies: deplete or block T cells"
                    ],
                    lifelong: "Required for life of transplant",
                    risks: "Increased infection susceptibility, increased cancer risk"
                },
                GVHD: {
                    name: "Graft-versus-Host Disease",
                    description: "Transplanted immune cells attack recipient",
                    context: "Bone marrow/stem cell transplants",
                    prevention: "Careful matching, immunosuppression"
                }
            },

            cancer: {
                immuneSurveillance: {
                    description: "Immune system constantly monitors for abnormal cells",
                    mechanism: "T cells and NK cells recognize and destroy cancer cells",
                    effectiveness: "Many cancers eliminated before becoming clinically apparent"
                },
                evasion: {
                    description: "Cancer cells develop mechanisms to evade immune detection",
                    methods: [
                        "Downregulate MHC I (hide from T cells)",
                        "Produce immunosuppressive signals",
                        "Lack co-stimulatory molecules",
                        "Recruit regulatory T cells",
                        "Create immunosuppressive microenvironment"
                    ]
                },
                immunotherapy: {
                    description: "Harness immune system to fight cancer",
                    approaches: [
                        {
                            name: "Checkpoint Inhibitors",
                            mechanism: "Block inhibitory signals on T cells",
                            result: "Unleash T cells to attack cancer",
                            examples: "Anti-PD-1, anti-CTLA-4 antibodies"
                        },
                        {
                            name: "CAR-T Cell Therapy",
                            mechanism: "Engineer patient's T cells to recognize cancer",
                            process: "Remove T cells → modify to target cancer → expand → reinfuse",
                            success: "Effective for certain blood cancers"
                        },
                        {
                            name: "Monoclonal Antibodies",
                            mechanism: "Antibodies that bind to cancer cells",
                            effects: "Mark for destruction, block growth signals, deliver toxins",
                            examples: "Rituximab, trastuzumab"
                        },
                        {
                            name: "Cancer Vaccines",
                            types: "Preventive (HPV, Hepatitis B) or therapeutic",
                            mechanism: "Stimulate immune response against cancer antigens"
                        },
                        {
                            name: "Cytokines",
                            examples: "IL-2, interferons",
                            mechanism: "Boost immune cell activity"
                        }
                    ],
                    revolution: "Transformed treatment of many cancers"
                }
            },

            bloodTypes: {
                ABOsystem: {
                    description: "Based on antigens on red blood cell surface",
                    types: [
                        {
                            type: "Type A",
                            antigens: "A antigens",
                            antibodies: "Anti-B antibodies",
                            canReceive: "A, O",
                            canDonate: "A, AB"
                        },
                        {
                            type: "Type B",
                            antigens: "B antigens",
                            antibodies: "Anti-A antibodies",
                            canReceive: "B, O",
                            canDonate: "B, AB"
                        },
                        {
                            type: "Type AB",
                            antigens: "A and B antigens",
                            antibodies: "None",
                            canReceive: "A, B, AB, O (universal recipient)",
                            canDonate: "AB only"
                        },
                        {
                            type: "Type O",
                            antigens: "None",
                            antibodies: "Anti-A and Anti-B antibodies",
                            canReceive: "O only",
                            canDonate: "A, B, AB, O (universal donor)"
                        }
                    ],
                    transfusionReactions: "If incompatible blood given, antibodies attack donor cells causing hemolysis"
                },
                Rhfactor: {
                    description: "Another antigen system (D antigen)",
                    positive: "Has Rh antigen (Rh+)",
                    negative: "Lacks Rh antigen (Rh-)",
                    antibodies: "Rh- people can develop anti-Rh antibodies if exposed to Rh+ blood",
                    HDN: {
                        name: "Hemolytic Disease of Newborn",
                        scenario: "Rh- mother with Rh+ fetus",
                        mechanism: [
                            "First pregnancy: mother exposed to fetal blood, makes anti-Rh antibodies",
                            "Second pregnancy: maternal antibodies cross placenta, attack fetal RBCs"
                        ],
                        prevention: "RhoGAM injection prevents antibody formation"
                    }
                }
            }
        };
    }

    handleIntegumentarySystem(problem) {
        return {
            topic: "Integumentary System",
            category: 'integumentary_system',

            overview: {
                description: "The integumentary system consists of skin and its accessory structures, forming the body's outer protective covering.",
                components: "Skin, hair, nails, sweat glands, sebaceous glands",
                percentage: "Skin is 15-20% of body weight",
                area: "~2 square meters (21 square feet) in adults",
                functions: [
                    "Protection: physical barrier against pathogens, chemicals, UV radiation",
                    "Temperature regulation: sweating, blood vessel regulation",
                    "Sensation: touch, pressure, temperature, pain receptors",
                    "Excretion: small amounts of waste in sweat",
                    "Vitamin D synthesis: UV light converts precursor to vitamin D",
                    "Water retention: prevents dehydration",
                    "Immune defense: Langerhans cells, antimicrobial peptides"
                ]
            },

            skinLayers: {
                epidermis: {
                    description: "Outer layer of skin",
                    type: "Stratified squamous epithelium",
                    avascular: "No blood vessels (nourished by diffusion from dermis)",
                    thickness: "0.05-1.5 mm (thin on eyelids, thick on palms/soles)",
                    cellTypes: [
                        {
                            name: "Keratinocytes",
                            percentage: "~90% of cells",
                            function: "Produce keratin (protective protein)",
                            process: "Born in basal layer, migrate up, die and form protective layer"
                        },
                        {
                            name: "Melanocytes",
                            percentage: "~8% of cells",
                            location: "Basal layer",
                            function: "Produce melanin pigment",
                            protection: "Melanin absorbs UV radiation, protects DNA"
                        },
                        {
                            name: "Langerhans Cells",
                            function: "Immune surveillance, antigen presentation",
                            origin: "Derived from bone marrow"
                        },
                        {
                            name: "Merkel Cells",
                            function: "Touch receptors",
                            location: "Basal layer"
                        }
                    ],
                    layers: {
                        fromDeepToSuperficial: [
                            {
                                name: "Stratum Basale (Basal Layer)",
                                description: "Deepest layer, single row of cells",
                                function: "Stem cells that continuously divide",
                                mitosis: "Source of new keratinocytes",
                                connection: "Attached to dermis via basement membrane",
                                also: "Contains melanocytes and Merkel cells"
                            },
                            {
                                name: "Stratum Spinosum (Spiny Layer)",
                                description: "Several layers of cells",
                                appearance: "Spiny projections (desmosomes)",
                                function: "Provides strength and flexibility",
                                also: "Contains Langerhans cells"
                            },
                            {
                                name: "Stratum Granulosum (Granular Layer)",
                                description: "3-5 layers of flattening cells",
                                granules: "Keratohyalin granules (form keratin)",
                                function: "Cells begin to die, waterproofing begins",
                                lipids: "Release lipids that waterproof skin"
                            },
                            {
                                name: "Stratum Lucidum (Clear Layer)",
                                description: "Thin, clear layer",
                                location: "Only in thick skin (palms, soles)",
                                cells: "Dead, flat cells"
                            },
                            {
                                name: "Stratum Corneum (Horny Layer)",
                                description: "Outermost layer, 20-30 layers of dead cells",
                                composition: "Dead, flattened, keratin-filled cells (corneocytes)",
                                function: "Protective barrier",
                                shedding: "Constantly shed and replaced (~every 28 days)",
                                waterproof: "Lipids between cells prevent water loss"
                            }
                        ]
                    }
                },
                dermis: {
                    description: "Middle layer of skin",
                    type: "Dense connective tissue",
                    vascular: "Rich blood supply",
                    innervated: "Contains nerve endings",
                    thickness: "1-4 mm",
                    composition: "Collagen and elastic fibers in ground substance",
                    functions: "Strength, elasticity, thermoregulation, sensation",
                    layers: {
                        papillaryLayer: {
                            description: "Upper layer, thin",
                            structure: "Loose connective tissue with dermal papillae",
                            dermalPapillae: "Finger-like projections into epidermis",
                            contains: [
                                "Capillaries (nourish epidermis)",
                                "Touch receptors (Meissner's corpuscles)",
                                "Free nerve endings (pain, temperature)"
                            ],
                            fingerprints: "Dermal papillae form ridges (fingerprints, footprints)"
                        },
                        reticularLayer: {
                            description: "Deeper layer, thick",
                            structure: "Dense irregular connective tissue",
                            fibers: [
                                "Collagen fibers: strength, prevent tearing",
                                "Elastic fibers: elasticity, allow skin to return to shape"
                            ],
                            contains: [
                                "Hair follicles",
                                "Sebaceous glands",
                                "Sweat glands",
                                "Deep pressure receptors (Pacinian corpuscles)",
                                "Blood vessels",
                                "Nerves"
                            ],
                            stretchMarks: "Overstretching can tear dermal layer"
                        }
                    },
                    aging: "Loss of collagen and elastic fibers causes wrinkles and sagging"
                },
                hypodermis: {
                    description: "Deepest layer (not technically part of skin)",
                    alternativeName: "Subcutaneous layer or superficial fascia",
                    type: "Adipose (fat) and loose connective tissue",
                    functions: [
                        "Energy storage",
                        "Insulation (prevents heat loss)",
                        "Cushioning and shock absorption",
                        "Anchors skin to underlying structures"
                    ],
                    variation: "Thickness varies by location and individual",
                    injections: "Site for subcutaneous injections"
                }
            },

            skinColor: {
                factors: [
                    {
                        factor: "Melanin",
                        description: "Brown to black pigment",
                        production: "Melanocytes produce melanin in melanosomes",
                        types: "Eumelanin (brown-black) and pheomelanin (red-yellow)",
                        function: "Protects against UV damage",
                        variation: [
                            "Amount of melanin (not number of melanocytes) determines skin color",
                            "Everyone has similar number of melanocytes",
                            "Darker skin has more melanin production"
                        ],
                        tanning: "UV exposure stimulates melanin production",
                        genetics: "Inherited, polygenic trait"
                    },
                    {
                        factor: "Carotene",
                        description: "Yellow-orange pigment",
                        source: "Diet (carrots, squash)",
                        accumulation: "Stratum corneum and hypodermis",
                        visible: "More noticeable in light-skinned individuals"
                    },
                    {
                        factor: "Hemoglobin",
                        description: "Red pigment in blood",
                        visible: "Through thin skin (cheeks, lips)",
                        oxygenation: "Oxygenated blood (red) vs deoxygenated (blue)",
                        paleness: "Anemia or vasoconstriction",
                        cyanosis: "Bluish color from low oxygen"
                    }
                ],
                abnormalColors: [
                    "Jaundice: yellow from excess bilirubin (liver disease)",
                    "Erythema: redness from inflammation or fever",
                    "Pallor: paleness from anemia or shock",
                    "Cyanosis: bluish from hypoxia",
                    "Bruise (hematoma): purple to yellow as blood breaks down"
                ]
            },

            accessoryStructures: {
                hair: {
                    description: "Flexible strands of dead, keratinized cells",
                    functions: [
                        "Protection (scalp from sun/impact)",
                        "Warmth (insulation)",
                        "Sensation (detect touch before skin contact)",
                        "Social/sexual signaling"
                    ],
                    structure: {
                        hairShaft: "Visible part above skin surface",
                        hairRoot: "Part embedded in skin",
                        hairFollicle: "Tube-like depression in epidermis extending into dermis",
                        hairBulb: "Expanded base of follicle containing hair matrix (dividing cells)",
                        hairPapilla: "Dermal tissue at base supplying nutrients",
                        arrestorPili: "Smooth muscle attached to follicle (causes goosebumps)"
                    },
                    layers: {
                        medulla: "Central core (may be absent)",
                        cortex: "Middle layer, contains pigment",
                        cuticle: "Outer protective layer of overlapping scales"
                    },
                    growth: {
                        growthPhase: "Anagen (2-6 years) - active growth",
                        transitionPhase: "Catagen (2-3 weeks) - follicle shrinks",
                        restingPhase: "Telogen (3-4 months) - hair falls out, new starts",
                        rate: "~0.3-0.4 mm per day (scalp)",
                        shedding: "Normal to lose 50-100 scalp hairs per day"
                    },
                    types: "Vellus (fine, short, unpigmented) and terminal (thick, long, pigmented)",
                    color: "Determined by melanin (black/brown eumelanin or red/yellow pheomelanin)",
                    graying: "Melanocyte activity decreases with age",
                    distribution: "Varies by sex (androgens increase body hair in males)"
                },
                nails: {
                    description: "Hard, keratinized plates protecting fingertips and toes",
                    functions: [
                        "Protection of digit tips",
                        "Aid in grasping small objects",
                        "Scratching",
                        "Enhance sensation"
                    ],
                    structure: {
                        nailBody: "Visible attached part",
                        freeEdge: "Extends beyond fingertip",
                        nailRoot: "Embedded in skin",
                        nailBed: "Epidermis beneath nail",
                        nailMatrix: "Actively dividing cells producing nail",
                        lunula: "White half-moon at base (visible part of matrix)",
                        cuticle: "Fold of epidermis extending onto nail body",
                        nailFolds: "Skin folds overlapping edges"
                    },
                    growth: {
                        rate: "Fingernails: ~3 mm/month; toenails: ~1 mm/month",
                        replacement: "Fingernails: 6 months; toenails: 12-18 months",
                        faster: "Summer, youth, after injury"
                    },
                    health: "Nail appearance can indicate health problems"
                },
                sweatGlands: {
                    description: "Coiled tubular glands producing sweat",
                    function: "Thermoregulation, excretion",
                    types: [
                        {
                            name: "Eccrine Sweat Glands",
                            number: "2-4 million",
                            distribution: "Entire body surface, most abundant on palms, soles, forehead",
                            opening: "Directly onto skin surface via sweat pore",
                            sweat: {
                                composition: "99% water, salts (NaCl), urea, uric acid, ammonia",
                                pH: "4-6 (acidic)",
                                volume: "~500 mL/day normally, up to 12 L/day with extreme exercise/heat"
                            },
                            function: [
                                "Thermoregulation (evaporative cooling)",
                                "Excretion (small amounts of waste)",
                                "Acidic pH inhibits bacterial growth"
                            ],
                            control: "Sympathetic nervous system (cholinergic)"
                        },
                        {
                            name: "Apocrine Sweat Glands",
                            distribution: "Axillary (armpit) and anogenital regions",
                            opening: "Into hair follicles",
                            activation: "Puberty (androgen-dependent)",
                            sweat: {
                                composition: "Water, proteins, lipids, steroids",
                                initially: "Odorless",
                                odor: "Bacterial decomposition creates body odor"
                            },
                            function: "Possibly scent/pheromone production (evolutionary)",
                            control: "Sympathetic nervous system, also emotional stress"
                        }
                    ]
                },
                sebaceousGlands: {
                    description: "Oil glands",
                    distribution: "Entire body except palms and soles",
                    abundant: "Face, scalp, upper back",
                    opening: "Into hair follicles (except lips, nipples, genitals)",
                    sebum: {
                        composition: "Lipids, cell debris",
                        functions: [
                            "Lubricates and waterproofs skin and hair",
                            "Antibacterial and antifungal properties",
                            "Prevents hair from becoming brittle"
                        ]
                    },
                    activity: "Increases at puberty (androgens)",
                    acne: "Blocked sebaceous glands and follicles"
                },
                ceruminousGlands: {
                    description: "Modified sweat glands",
                    location: "External ear canal only",
                    product: "Cerumen (earwax)",
                    function: "Traps dust and insects, waterproofs ear canal, antibacterial"
                },
                mammaryGlands: {
                    description: "Modified sweat glands",
                    location: "Breasts",
                    function: "Produce milk (lactation)",
                    activation: "Pregnancy and childbirth hormones"
                }
            },

            thermoregulation: {
                description: "Skin plays crucial role in maintaining body temperature",
                normalBodyTemp: "~37°C (98.6°F)",
                mechanisms: {
                    heat: {
                        response: "When body temperature rises",
                        mechanisms: [
                            {
                                mechanism: "Vasodilation",
                                description: "Blood vessels in dermis dilate",
                                effect: "More blood flows near surface, heat radiates away",
                                visible: "Skin appears flushed/red"
            },
                            {
                                mechanism: "Sweating",
                                description: "Eccrine glands produce sweat",
                                effect: "Evaporation of sweat cools skin surface",
                                efficiency: "Most effective in dry environments"
                            },
                            {
                                mechanism: "Decreased Metabolic Heat",
                                description: "Reduce activity",
                                behavioral: "Seek shade, remove clothing"
                            }
                        ]
                    },
                    cold: {
                        response: "When body temperature drops",
                        mechanisms: [
                            {
                                mechanism: "Vasoconstriction",
                                description: "Blood vessels in dermis constrict",
                                effect: "Less blood flows near surface, heat conserved",
                                visible: "Skin appears pale"
                            },
                            {
                                mechanism: "Arrector Pili Contraction",
                                description: "Hair stands up ('goosebumps')",
                                effect: "Traps air layer for insulation (minimal in humans)",
                                evolutionary: "More effective in furry animals"
                            },
                            {
                                mechanism: "Shivering",
                                description: "Involuntary muscle contractions",
                                effect: "Generates heat through increased metabolism"
                            },
                            {
                                mechanism: "Increased Metabolic Heat",
                                description: "Thyroid hormones increase metabolism",
                                behavioral: "Add clothing, seek warmth, increase activity"
                            }
                        ]
                    }
                }
            },

            woundHealing: {
                description: "Process of tissue repair after injury",
                types: {
                    regeneration: {
                        description: "Replacement with same tissue type",
                        occurs: "Epidermis, mucous membranes",
                        result: "No scar"
                    },
                    fibrosis: {
                        description: "Replacement with scar tissue (collagen)",
                        occurs: "Deep wounds involving dermis",
                        result: "Scar formation"
                    }
                },
                phases: {
                    inflammation: {
                        timing: "0-4 days",
                        events: [
                            "Blood clot forms (platelets, fibrin)",
                            "Scab forms on surface",
                            "Blood vessels dilate, area becomes red and swollen",
                            "Phagocytes clean wound of debris and bacteria"
                        ],
                        purpose: "Prevent infection, stop bleeding"
                    },
                    proliferation: {
                        timing: "4-21 days",
                        events: [
                            "Granulation tissue forms (new capillaries, collagen fibers)",
                            "Epithelial cells migrate across wound (re-epithelialization)",
                            "Wound contracts (myofibroblasts pull edges together)",
                            "Scab sloughs off"
                        ],
                        purpose: "Rebuild tissue"
                    },
                    maturation: {
                        timing: "21 days to years",
                        events: [
                            "Collagen remodeled and strengthened",
                            "Blood vessels regress",
                            "Scar tissue matures and fades"
                        ],
                        purpose: "Strengthen repaired tissue",
                        scarStrength: "Healed tissue reaches 70-80% of original strength"
                    }
                },
                factors: {
                    promote: "Youth, good nutrition (protein, vitamin C, zinc), adequate blood flow, clean wound",
                    impair: "Age, poor nutrition, diabetes, infection, smoking, certain medications (steroids)"
                }
            },

            sunAndSkin: {
                UVradiation: {
                    types: {
                        UVA: {
                            wavelength: "320-400 nm (longest)",
                            penetration: "Deeper (dermis)",
                            effects: "Tanning, aging (wrinkles), some skin cancer risk",
                            mnemonic: "A = Aging"
                        },
                        UVB: {
                            wavelength: "290-320 nm",
                            penetration: "Epidermis",
                            effects: "Sunburn, vitamin D synthesis, main cause of skin cancer",
                            mnemonic: "B = Burning"
                        },
                        UVC: {
                            wavelength: "200-290 nm (shortest)",
                            penetration: "Blocked by ozone layer (doesn't reach Earth)",
                            note: "Most dangerous but not a natural concern"
                        }
                    }
                },
                tanningAndBurning: {
                    tanning: {
                        process: "UV stimulates melanocytes to produce more melanin",
                        timing: "Develops over days",
                        protection: "Provides some protection (SPF 2-4)",
                        damage: "Indicates DNA damage has occurred",
                        myth: "'Base tan' provides minimal protection"
                    },
                    sunburn: {
                        description: "Inflammatory response to UV damage",
                        timing: "Appears hours after exposure, peaks 12-24 hours",
                        symptoms: "Red, painful, hot skin; blistering in severe cases",
                        damage: "DNA damage in skin cells",
                        risk: "Even one severe sunburn increases skin cancer risk"
                    }
                },
                skinCancer: {
                    types: [
                        {
                            name: "Basal Cell Carcinoma",
                            description: "Most common skin cancer",
                            origin: "Basal cells of epidermis",
                            appearance: "Pearly bump, may have visible blood vessels",
                            behavior: "Slow-growing, rarely metastasizes",
                            treatment: "Surgical removal, very high cure rate",
                            prognosis: "Excellent if caught early"
                        },
                        {
                            name: "Squamous Cell Carcinoma",
                            description: "Second most common",
                            origin: "Squamous cells of epidermis",
                            appearance: "Scaly red patch, elevated growth, open sore",
                            behavior: "Can metastasize if untreated",
                            treatment: "Surgical removal",
                            prognosis: "Good if caught early"
                        },
                        {
                            name: "Melanoma",
                            description: "Most dangerous skin cancer",
                            origin: "Melanocytes",
                            appearance: "Asymmetric mole with irregular borders, varied colors, diameter >6mm",
                            ABCDErule: "Asymmetry, Border irregularity, Color variation, Diameter >6mm, Evolving",
                            behavior: "Can metastasize rapidly",
                            treatment: "Surgical removal, may need chemotherapy/immunotherapy",
                            prognosis: "Excellent if caught early, poor if metastasized",
                            deadliest: "Responsible for most skin cancer deaths"
                        }
                    ],
                    riskFactors: [
                        "UV exposure (sun, tanning beds)",
                        "Fair skin, light hair, blue/green eyes",
                        "History of sunburns",
                        "Many moles or atypical moles",
                        "Family history",
                        "Weakened immune system"
                    ],
                    prevention: [
                        "Use sunscreen (SPF 30+, broad spectrum)",
                        "Avoid peak sun (10am-4pm)",
                        "Wear protective clothing",
                        "Avoid tanning beds",
                        "Regular self-exams",
                        "Professional skin checks"
                    ]
                },
                vitaminD: {
                    synthesis: "UVB converts 7-dehydrocholesterol to vitamin D3 in skin",
                    importance: "Calcium absorption, bone health, immune function",
                    balance: "Need some sun exposure but protect against too much",
                    sources: "Sun exposure (~10-30 min several times/week), diet, supplements"
                }
            },

            disorders: [
                {
                    name: "Acne",
                    description: "Inflammation of sebaceous glands and hair follicles",
                    cause: [
                        "Excess sebum production",
                        "Clogged pores (dead cells, sebum)",
                        "Bacterial overgrowth (Propionibacterium acnes)",
                        "Inflammation"
                    ],
                    triggers: "Hormones (androgens), stress, certain medications, diet",
                    types: "Comedones (blackheads, whiteheads), papules, pustules, cysts",
                    treatment: "Topical treatments (benzoyl peroxide, retinoids), antibiotics, hormonal therapy, isotretinoin (severe)"
                },
                {
                    name: "Eczema (Atopic Dermatitis)",
                    description: "Chronic inflammatory skin condition",
                    symptoms: "Dry, itchy, red, cracked skin",
                    cause: "Genetic + environmental (impaired skin barrier, immune dysregulation)",
                    triggers: "Allergens, irritants, stress, weather",
                    treatment: "Moisturizers, topical corticosteroids, avoiding triggers, antihistamines"
                },
                {
                    name: "Psoriasis",
                    description: "Autoimmune condition causing rapid skin cell turnover",
                    symptoms: "Thick, red patches with silvery scales",
                    mechanism: "T cells attack skin cells, causing hyperproliferation",
                    common: "Elbows, knees, scalp, lower back",
                    treatment: "Topical treatments, phototherapy, systemic medications, biologics"
                },
                {
                    name: "Burns",
                    description: "Tissue damage from heat, chemicals, electricity, radiation",
                    classification: {
                        firstDegree: {
                            depth: "Epidermis only",
                            symptoms: "Redness, pain, mild swelling",
                            healing: "3-6 days, no scarring",
                            example: "Mild sunburn"
                        },
                        secondDegree: {
                            depth: "Epidermis and part of dermis",
                            symptoms: "Blisters, severe pain, redness, swelling",
                            healing: "2-3 weeks, may scar",
                            example: "Severe sunburn, scalding"
                        },
                        thirdDegree: {
                            depth: "Full thickness (epidermis and dermis destroyed)",
                            symptoms: "White/charred appearance, no pain (nerve endings destroyed)",
                            healing: "Requires grafting, significant scarring",
                            serious: "Medical emergency"
                        }
                    },
                    ruleOfNines: "Body divided into regions of ~9% to estimate burn area",
                    danger: "Fluid loss, infection, shock"
                },
                {
                    name: "Warts",
                    description: "Benign growths caused by human papillomavirus (HPV)",
                    types: "Common warts, plantar warts (feet), flat warts",
                    transmission: "Direct contact, sharing items",
                    treatment: "Often resolve spontaneously, cryotherapy, salicylic acid, surgical removal"
                },
                {
                    name: "Skin Infections",
                    types: [
                        {
                            type: "Bacterial",
                            examples: "Impetigo, cellulitis, folliculitis",
                            treatment: "Antibiotics"
                        },
                        {
                            type: "Viral",
                            examples: "Herpes simplex, shingles, warts",
                            treatment: "Antivirals, symptom management"
                        },
                        {
                            type: "Fungal",
                            examples: "Athlete's foot, ringworm, candidiasis",
                            treatment: "Antifungals"
                        }
                    ]
                },
                {
                    name: "Vitiligo",
                    description: "Loss of skin pigmentation in patches",
                    cause: "Destruction of melanocytes (autoimmune)",
                    appearance: "White patches, often symmetric",
                    treatment: "Topical corticosteroids, phototherapy, camouflage"
                },
                {
                    name: "Rosacea",
                    description: "Chronic facial redness and inflammation",
                    symptoms: "Flushing, persistent redness, visible blood vessels, bumps",
                    triggers: "Sun, stress, alcohol, spicy foods, hot drinks",
                    treatment: "Avoid triggers, topical medications, antibiotics"
                },
                {
                    name: "Decubitus Ulcers (Bedsores)",
                    description: "Pressure sores from prolonged pressure",
                    cause: "Reduced blood flow from sustained pressure",
                    risk: "Immobilized patients, elderly, poor nutrition",
                    prevention: "Frequent repositioning, special mattresses, good nutrition"
                }
            ],

            aging: {
                intrinsicAging: {
                    description: "Natural aging process (chronological)",
                    changes: [
                        "Decreased cell division in epidermis",
                        "Thinning epidermis",
                        "Decreased melanocyte activity (gray hair)",
                        "Decreased sebaceous gland activity (drier skin)",
                        "Loss of collagen and elastic fibers (wrinkles, sagging)",
                        "Decreased blood vessel density",
                        "Slower wound healing",
                        "Decreased vitamin D synthesis"
                    ],
                    genetic: "Largely genetically programmed"
                },
                extrinsicAging: {
                    description: "Aging from environmental factors",
                    mainCause: "UV radiation (photoaging) - responsible for 80% of facial aging",
                    changes: [
                        "Deep wrinkles",
                        "Rough texture",
                        "Hyperpigmentation (age spots)",
                        "Loss of elasticity",
                        "Broken blood vessels (telangiectasia)",
                        "Precancerous lesions"
                    ],
                    otherFactors: "Smoking, pollution, poor nutrition, stress",
                    prevention: "Sun protection, healthy lifestyle"
                }
            }
        };
    }

    /**handleReproductiveSystem(problem) {
        return {
            topic: "Reproductive System",
            category: 'reproductive_system',
            
            overview: {
                description: "The reproductive system produces gametes (sex cells), facilitates fertilization, and in females, supports pregnancy and childbirth.",
                uniqueness: "Only system not essential for individual survival",
                functions: [
                    "Production of gametes (sperm in males, eggs in females)",
                    "Production of sex hormones",
                    "Fertilization (union of sperm and egg)",
                    "Pregnancy and fetal development (females)",
                    "Childbirth (females)",
                    "Lactation (females)"
                ],
                sexDetermination: "Genetic (XY = male, XX = female)",
                development: "Reproductive organs develop from same embryonic tissues, differentiate based on hormones"
            },

            maleReproductiveSystem: {
                overview: "Produces sperm and male hormones",
                
                anatomy: {
                    testes: {
                        description: "Paired male gonads producing sperm and testosterone",
                        number: "Two",
                        location: "Scrotum (outside body cavity)",
                        size: "~5 cm long",
                        temperature: "~3°C cooler than body temperature (required for sperm production)",
                        descent: "Descend from abdomen into scrotum before birth",
                        structure: {
                            seminferousTubules: {
                                description: "Coiled tubes where sperm are produced",
                                lining: "Sertoli cells (support sperm development)",
                                between: "Leydig cells (produce testosterone)"
                            },
                            rete testis: "Network collecting sperm from seminiferous tubules",
                            tunics: "Protective layers surrounding testis"
                        },
                        functions: [
                            "Spermatogenesis (sperm production)",
                            "Testosterone production"
                        ]
                    },
                    scrotum: {
                        description: "Sac of skin and muscle housing testes",
                        function: "Temperature regulation (cooler than body for sperm production)",
                        mechanism: [
                            "Dartos muscle: wrinkles skin to reduce surface area (cold)",
                            "Cremaster muscle: pulls testes closer to body (cold) or relaxes (heat)"
                        ]
                    },
                    epididymis: {
                        description: "Comma-shaped structure on posterior testis",
                        length: "~6 meters if uncoiled",
                        function: [
                            "Sperm maturation (gain motility and fertilizing ability)",
                            "Sperm storage"
                        ],
                        duration: "Sperm spend ~20 days maturing"
                    },
                    vasDeferns: {
                        description: "Muscular tube transporting sperm",
                        length: "~45 cm",
                        pathway: "From epididymis → through inguinal canal → pelvic cavity → behind bladder",
                        ampulla: "Expanded region before joining seminal vesicle",
                        vasectomy: "Surgical cutting/blocking for contraception"
                    },
                    seminalVesicles: {
                        description: "Paired glands posterior to bladder",
                        secretion: "~60% of semen volume",
                        composition: "Fructose (energy for sperm), prostaglandins, clotting proteins",
                        duct: "Joins vas deferens to form ejaculatory duct"
                    },
                    prostate: {
                        description: "Walnut-sized gland surrounding urethra below bladder",
                        secretion: "~30% of semen volume",
                        composition: "Milky, slightly acidic fluid with enzymes, citric acid, zinc",
                        function: "Activates sperm, neutralizes vaginal acidity",
                        enlargement: "Benign prostatic hyperplasia (BPH) common with age"
                    },
                    bulbourethralGlands: {
                        alternativeName: "Cowper's glands",
                        number: "Two (pea-sized)",
                        location: "Below prostate",
                        secretion: "Clear, slippery fluid (pre-ejaculate)",
                        timing: "Before ejaculation",
                        function: "Lubricates urethra, neutralizes acidity"
                    },
                    penis: {
                        description: "Male copulatory organ",
                        function: "Delivers sperm to female reproductive tract",
                        structure: {
                            root: "Attached to pelvic bones",
                            shaft: "Body of penis",
                            glans: "Enlarged tip",
                            prepuce: "Foreskin covering glans (removed in circumcision)"
                        },
                        erectileTissue: {
                            corporaCavernosa: "Two dorsal columns",
                            corpusSpongiosum: "Ventral column surrounding urethra",
                            mechanism: "Fill with blood during arousal causing erection"
                        },
                        urethra: "Passes through corpus spongiosum, dual function (urine and semen)"
                    },
                    urethra: {
                        maleLength: "~20 cm",
                        regions: [
                            "Prostatic urethra: through prostate",
                            "Membranous urethra: through pelvic floor",
                            "Spongy (penile) urethra: through penis"
                        ],
                        function: "Passage for urine and semen (not simultaneously)"
                    }
                },

                sperm: {
                    structure: {
                        head: {
                            contains: "Nucleus with 23 chromosomes (haploid)",
                            acrosome: "Cap containing enzymes to penetrate egg"
                        },
                        midpiece: "Contains mitochondria for ATP production",
                        tail: "Flagellum for motility"
                    },
                    spermatogenesis: {
                        description: "Process of sperm production",
                        location: "Seminiferous tubules",
                        duration: "~74 days from start to mature sperm",
                        continuous: "Begins at puberty, continues throughout life",
                        process: [
                            "Spermatogonia (stem cells) divide by mitosis",
                            "Primary spermatocytes undergo meiosis I",
                            "Secondary spermatocytes undergo meiosis II",
                            "Spermatids differentiate into sperm (spermiogenesis)",
                            "Sperm released into tubule lumen"
                        ],
                        hormones: "FSH and testosterone required",
                        production: "~200-300 million sperm per day"
                    },
                    characteristics: {
                        size: "~60 μm long (one of smallest cells)",
                        motility: "Swim at ~1-4 mm/min",
                        lifespan: "Up to 5 days in female reproductive tract",
                        fertile: "Need ~20 million/mL for fertility",
                        temperature: "Production requires 3°C below body temperature"
                    }
                },

                semen: {
                    description: "Mixture of sperm and glandular secretions",
                    volume: "2-5 mL per ejaculation",
                    composition: {
                        sperm: "~5% of volume (~200-500 million sperm)",
                        seminalVesicleFluid: "~60%",
                        prostaticFluid: "~30%",
                        bulbourethralFluid: "~5%"
                    },
                    characteristics: "Milky white, slightly alkaline (pH 7.2-7.8), coagulates then liquefies",
                    functions: [
                        "Transport and nourish sperm",
                        "Neutralize acidic environment",
                        "Provide energy (fructose)",
                        "Enhance motility"
                    ]
                },

                hormones: {
                    testosterone: {
                        production: "Leydig cells in testes",
                        regulation: "LH from pituitary",
                        functions: [
                            "Spermatogenesis",
                            "Development of male secondary sex characteristics",
                            "Muscle and bone growth",
                            "Deepening of voice",
                            "Facial and body hair",
                            "Sex drive (libido)",
                            "Aggressive behavior"
                        ],
                        levels: "Peak in early adulthood, gradually decline with age"
                    },
                    FSH: {
                        name: "Follicle-Stimulating Hormone",
                        source: "Anterior pituitary",
                        target: "Sertoli cells",
                        function: "Stimulates spermatogenesis"
                    },
                    LH: {
                        name: "Luteinizing Hormone",
                        source: "Anterior pituitary",
                        target: "Leydig cells",
                        function: "Stimulates testosterone production"
                    },
                    GnRH: {
                        name: "Gonadotropin-Releasing Hormone",
                        source: "Hypothalamus",
                        function: "Stimulates release of FSH and LH"
                    },
                    inhibin: {
                        source: "Sertoli cells",
                        function: "Negative feedback to inhibit FSH release"
                    }
                },

                erectileFunction: {
                    erection: {
                        trigger: "Sexual arousal (physical or psychological)",
                        mechanism: [
                            "Parasympathetic stimulation",
                            "Arteries dilate, blood flows into erectile tissue",
                            "Veins compress, blood trapped",
                            "Penis enlarges and stiffens"
                        ]
                    },
                    ejaculation: {
                        emission: "Sperm and secretions move into urethra (sympathetic)",
                        expulsion: "Rhythmic contractions expel semen",
                        orgasm: "Peak of sexual pleasure",
                        resolution: "Penis returns to flaccid state"
                    }
                }
            },

            femaleReproductiveSystem: {
                overview: "Produces eggs, supports pregnancy, produces female hormones",

                anatomy: {
                    ovaries: {
                        description: "Paired female gonads producing eggs and hormones",
                        number: "Two",
                        location: "Pelvic cavity, on either side of uterus",
                        size: "Almond-sized (~3 cm)",
                        structure: {
                            cortex: "Outer region containing follicles",
                            medulla: "Inner region with blood vessels and nerves"
                        },
                        functions: [
                            "Oogenesis (egg production)",
                            "Estrogen and progesterone production"
                        ],
                        follicles: {
                            description: "Structures containing developing egg (oocyte)",
                            stages: "Primordial → primary → secondary → tertiary (Graafian) → ovulation",
                            number: "~400,000 at puberty, decline with age",
                            atresia: "Most follicles degenerate without ovulating"
                        }
                    },
                    fallopianTubes: {
                        alternativeName: "Uterine tubes or oviducts",
                        number: "Two",
                        length: "~10 cm",
                        location: "Extend from ovaries to uterus",
                        structure: {
                            infundibulum: "Funnel-shaped opening with fimbriae",
                            fimbriae: "Finger-like projections that sweep egg into tube",
                            ampulla: "Wide middle section (site of fertilization)",
                            isthmus: "Narrow section near uterus"
                        },
                        lining: "Ciliated epithelium",
                        functions: [
                            "Receive ovulated egg",
                            "Site of fertilization",
                            "Transport egg (or embryo) to uterus"
                        ],
                        transport: "Cilia and peristaltic contractions move egg",
                        ectopicPregnancy: "Embryo implants in tube (medical emergency)"
                    },
                    uterus: {
                        description: "Hollow, muscular organ",
                        alternativeName: "Womb",
                        location: "Pelvic cavity, between bladder and rectum",
                        size: "~7.5 cm long (larger during pregnancy)",
                        shape: "Pear-shaped, inverted",
                        regions: {
                            fundus: "Rounded top above fallopian tube openings",
                            body: "Main central region",
                            cervix: "Narrow lower portion opening into vagina"
                        },
                        layers: {
                            perimetrium: "Outer serous layer",
                            myometrium: "Thick smooth muscle layer (contracts during labor)",
                            endometrium: "Inner mucosal layer (shed during menstruation)"
                        },
                        functions: [
                            "Receives and nourishes fertilized egg",
                            "Site of fetal development",
                            "Contracts during labor to expel fetus"
                        ],
                        positions: "Anteverted (tilted forward) most common"
                    },
                    cervix: {
                        description: "Lower part of uterus extending into vagina",
                        cervicalCanal: "Passageway between uterus and vagina",
                        externalOs: "Opening to vagina",
                        internalOs: "Opening to uterus",
                        mucus: {
                            description: "Cervical mucus changes consistency during cycle",
                            infertile: "Thick, blocks sperm",
                            fertile: "Thin, stretchy, facilitates sperm passage"
                        },
                        functions: [
                            "Passage for sperm",
                            "Passage for menstrual flow",
                            "Passage for baby during birth",
                            "Barrier against infection"
                        ],
                        dilation: "Opens (~10 cm) during labor"
                    },
                    vagina: {
                        description: "Fibromuscular tube",
                        length: "~8-10 cm",
                        location: "Between cervix and external opening",
                        lining: "Stratified squamous epithelium (no glands)",
                        rugae: "Folds allowing expansion",
                        functions: [
                            "Receives penis during intercourse",
                            "Birth canal",
                            "Passageway for menstrual flow"
                        ],
                        pH: "Acidic (3.8-4.5) - inhibits bacterial growth",
                        normalFlora: "Lactobacilli maintain acidic pH",
                        hymen: "Thin membrane partially covering opening (highly variable)"
                    },
                    externalGenitalia: {
                        vulva: "Collective term for external structures",
                        components: {
                            monsPubis: "Fatty pad over pubic bone",
                            labiaMajora: "Large outer folds",
                            labiaMinora: "Small inner folds",
                            clitoris: "Erectile tissue, highly sensitive (homologous to penis)",
                            vestibule: "Space between labia minora containing urethral and vaginal openings",
                            vestibularGlands: "Secrete lubricating fluid (Bartholin's glands)"
                        }
                    },
                    mammaryGlands: {
                        description: "Modified sweat glands in breasts",
                        function: "Produce milk (lactation)",
                        structure: {
                            lobes: "15-20 lobes containing alveoli (milk-producing cells)",
                            lactiferous ducts: "Drain milk from lobes",
                            lactiferous sinuses: "Store milk before release",
                            nipple: "Elevated structure where ducts open",
                            areola: "Pigmented area around nipple"
                        },
                        development: "Enlarge at puberty (estrogen), mature during pregnancy",
                        lactation: {
                            initiation: "After birth (prolactin stimulates production)",
                            letdown: "Oxytocin causes milk ejection",
                            duration: "Can continue as long as nursing continues"
                        }
                    }
                },
                
                egg: {
                    alternativeName: "Oocyte or ovum",
                    size: "~0.1 mm diameter (largest human cell)",
                    structure: {
                        nucleus: "Contains 23 chromosomes (haploid)",
                        cytoplasm: "Contains nutrients for early embryo",
                        zonaGEllucida: "Protective glycoprotein layer",
                        coronaRadiata: "Layer of follicle cells"
                    },
                    oogenesis: {
                        description: "Process of egg production",
                        timing: "Begins before birth, completes at fertilization",
                        fetalDevelopment: "Oogonia divide and begin meiosis, arrest in prophase I",
                        birth: "~1-2 million primary oocytes present",
                        puberty: "Monthly, one oocyte resumes meiosis",
                        ovulation: "Secondary oocyte (arrested in metaphase II) released",
                        fertilization: "Completes meiosis II only if fertilized",
                        depletion: "Supply gradually depleted, menopause when exhausted"
                    },
                    lifespan: "12-24 hours after ovulation"
                },
                
                ovarianCycle: {
                    description: "Monthly cycle of follicle development and ovulation",
                    duration: "~28 days (varies 21-35 days)",
                    phases: {
                        follicularPhase: {
                            timing: "Days 1-14 (variable)",
                            events: [
                                "Several follicles begin developing",
                                "FSH stimulates follicle growth",
                                "Follicles produce estrogen",
                                "One dominant follicle selected, others degenerate",
                                "Rising estrogen causes LH surge"
                            ],
                            hormones: "FSH, rising estrogen"
                        },
                        ovulation: {
                            timing: "Day 14 (in 28-day cycle)",
                            trigger: "LH surge",
                            event: "Mature follicle ruptures, releases secondary oocyte",
                            signs: "Temperature rise, change in cervical mucus, mild pain (mittelschmerz)"
                        },
                        lutealPhase: {
                            timing: "Days 15-28 (always 14 days)",
                            events: [
                                "Ruptured follicle becomes corpus luteum",
                                "Corpus luteum secretes progesterone and estrogen",
                                "If no pregnancy: corpus luteum degenerates",
                                "If pregnancy: corpus luteum maintained by hCG"
                            ],
                            hormones: "Progesterone, estrogen"
                        }
                    }
                },
                
                uterineCycle: {
                    alternativeName: "Menstrual cycle",
                    description: "Monthly cycle of endometrial changes",
                    synchronizedWith: "Ovarian cycle",
                    phases: {
                        menstrualPhase: {
                            timing: "Days 1-5",
                            events: "Endometrium sheds (menstruation)",
                            bleeding: "~50-80 mL blood loss",
                            cause: "Progesterone and estrogen withdrawal",
                            firstDay: "Day 1 of cycle"
                        },
                        proliferativePhase: {
                            timing: "Days 6-14",
                            events: "Endometrium thickens and repairs",
                            stimulation: "Estrogen from developing follicles",
                            preparation: "Preparing for possible pregnancy"
                        },
                        secretoryPhase: {
                            timing: "Days 15-28",
                            events: "Endometrium becomes secretory, develops glands",
                            stimulation: "Progesterone from corpus luteum",
                            preparation: "Optimal for embryo implantation",
                            noImplantation: "If no pregnancy, endometrium sheds"
                        }
                    }
                },
                
                hormones: {
                    estrogen: {
                        production: "Ovarian follicles, corpus luteum, placenta",
                        types: "Estradiol (most potent), estrone, estriol",
                        functions: [
                            "Development of female secondary sex characteristics",
                            "Breast development",
                            "Regulation of menstrual cycle",
                            "Thickening of endometrium",
                            "Bone health",
                            "Cardiovascular protection"
                        ],
                        levels: "Rise during follicular phase, peak just before ovulation"
                    },
                    progesterone: {
                        production: "Corpus luteum, placenta (during pregnancy)",
                        functions: [
                            "Prepares endometrium for implantation",
                            "Maintains pregnancy",
                            "Inhibits uterine contractions",
                            "Stimulates breast development",
                            "Raises basal body temperature"
                        ],
                        levels: "Rise during luteal phase"
                    },
                    FSH: {
                        name: "Follicle-Stimulating Hormone",
                        source: "Anterior pituitary",
                        function: "Stimulates follicle development and estrogen production",
                        levels: "Rise at beginning of cycle"
                    },
                    LH: {
                        name: "Luteinizing Hormone",
                        source: "Anterior pituitary",
                        functions: [
                            "LH surge triggers ovulation",
                            "Stimulates corpus luteum formation",
                            "Stimulates progesterone production"
                        ],
                        surge: "Mid-cycle spike causes ovulation"
                    },
                    GnRH: {
                        name: "Gonadotropin-Releasing Hormone",
                        source: "Hypothalamus",
                        function: "Stimulates release of FSH and LH",
                        pulsatile: "Released in pulses"
                    },
                    hCG: {
                        name: "Human Chorionic Gonadotropin",
                        source: "Embryo/placenta",
                        function: "Maintains corpus luteum in early pregnancy",
                        detection: "Pregnancy test detects hCG in urine/blood"
                    }
                },
                
                menopause: {
                    definition: "Permanent cessation of menstruation",
                    age: "Average 51 years (range 45-55)",
                    cause: "Depletion of ovarian follicles",
                    diagnosis: "12 consecutive months without period",
                    perimenopause: {
                        description: "Transition period before menopause",
                        duration: "Several years",
                        symptoms: "Irregular periods, hot flashes, mood changes"
                    },
                    symptoms: [
                        "Hot flashes and night sweats",
                        "Vaginal dryness",
                        "Sleep disturbances",
                        "Mood changes",
                        "Decreased libido",
                        "Osteoporosis risk (decreased estrogen)"
                    ],
                    postmenopause: "After menopause, increased risk of osteoporosis and heart disease"
                }
            },

            fertilization: {
                description: "Union of sperm and egg",
                location: "Ampulla of fallopian tube",
                timing: "Within 12-24 hours after ovulation",
                process: [
                    "Sperm undergoes capacitation (final maturation in female tract)",
                    "Sperm penetrates corona radiata",
                    "Sperm binds to zona pellucida",
                    "Acrosomal reaction: enzymes digest zona pellucida",
                    "Sperm membrane fuses with egg membrane",
                    "Sperm nucleus enters egg",
                    "Cortical reaction: prevents polyspermy (blocks other sperm)",
                    "Egg completes meiosis II",
                    "Sperm and egg nuclei fuse → zygote (diploid, 46 chromosomes)"
                ],
                result: "Zygote begins cell division (cleavage)",
                transport: "Embryo travels to uterus over ~3-4 days"
            },

            pregnancy: {
                implantation: {
                    description: "Embryo embeds in endometrium",
                    timing: "~6-7 days after fertilization",
                    stage: "Blastocyst (hollow ball of cells)",
                    process: [
                        "Blastocyst hatches from zona pellucida",
                        "Trophoblast cells invade endometrium",
                        "Establishes connection with maternal blood supply"
                    ],
                    hCGproduction: "Embryo begins producing hCG to maintain corpus luteum"
                },
                
                embryonicDevelopment: {
                    weeks1to8: {
                        description: "Embryonic period",
                        events: [
                            "Week 1: Fertilization, cleavage, implantation",
                            "Week 2: Bilaminar disc forms",
                            "Week 3: Gastrulation, three germ layers form",
                            "Weeks 4-8: Organogenesis (all major organs form)",
                            "Week 8: Resembles tiny human, ~3 cm long"
                        ],
                        critical: "Most susceptible to teratogens (birth defect causes)",
                        heartbeat: "Begins ~week 3-4"
                    }
                },
                
                fetalDevelopment: {
                    weeks9toBirth: {
                        description: "Fetal period",
                        events: [
                            "Weeks 9-12: Genitals differentiate, sucking reflex",
                            "Weeks 13-16: Bones ossify, movement",
                            "Weeks 17-20: Vernix and lanugo appear, mother feels movement",
                            "Weeks 21-30: Eyes open, fat deposits, brain development",
                            "Weeks 31-38: Rapid growth, lung maturation, full term"
                        ],
                        viability: "~24 weeks with medical care",
                        fullTerm: "37-40 weeks"
                    }
                },
                
                placenta: {
                    description: "Temporary organ connecting mother and fetus",
                    formation: "Develops from embryonic and maternal tissues",
                    structure: {
                        fetalSide: "Chorionic villi containing fetal blood vessels",
                        maternalSide: "Decidua basalis with maternal blood spaces",
                        barrier: "Blood doesn't mix, exchange occurs by diffusion"
                    },
                    functions: [
                        "Gas exchange (O₂ in, CO₂ out)",
                        "Nutrient transfer (glucose, amino acids, vitamins)",
                        "Waste removal (urea, creatinine)",
                        "Hormone production (estrogen, progesterone, hCG)",
                        "Antibody transfer (IgG gives passive immunity)",
                        "Barrier (some substances blocked)"
                    ],
                    umbilicalCord: {
                        contains: "Two arteries (carry deoxygenated blood to placenta), one vein (oxygenated blood to fetus)",
                        length: "~50-60 cm"
                    },
                    expulsion: "Delivered as 'afterbirth' following baby"
                },
                
                maternalChanges: {
                    hormonal: "High estrogen, progesterone, hCG levels",
                    cardiovascular: "Increased blood volume (40-50%), cardiac output increases",
                    respiratory: "Increased breathing rate, tidal volume",
                    digestive: "Nausea, heartburn, constipation common",
                    urinary: "Increased urination (pressure on bladder)",
                    musculoskeletal: "Relaxin loosens joints, posture changes, back pain",
                    skin: "Linea nigra, stretch marks, darkening of areola",
                    breasts: "Enlarge, prepare for lactation",
                    weight: "25-35 pounds average gain"
                },
                
                trimesters: {
                    first: "Weeks 1-12, most organ formation, high miscarriage risk",
                    second: "Weeks 13-27, rapid growth, mother feels movement",
                    third: "Weeks 28-40, final maturation, baby gains weight"
                }
            },

            childbirth: {
                alternativeName: "Parturition or labor",
                stages: {
                    stage1: {
                        name: "Dilation Stage",
                        description: "Cervix dilates to 10 cm",
                        duration: "Longest stage (hours to >12 hours)",
                        phases: {
                            latent: "Early labor, contractions irregular",
                            active: "Contractions regular, stronger, cervix dilates faster",
                            transition: "Cervix dilates from 8-10 cm, most intense"
                        },
                        contractions: "Increase in frequency and intensity"
                    },
                    stage2: {
                        name: "Expulsion Stage",
                        description: "Baby is born",
                        duration: "20 minutes to 2 hours",
                        pushing: "Mother pushes with contractions",
                        crowning: "Baby's head visible at vaginal opening",
                        delivery: "Head delivered first (usually), then body"
                    },
                    stage3: {
                        name: "Placental Stage",
                        description: "Delivery of placenta",
                        duration: "5-30 minutes",
                        afterbirth: "Placenta and membranes expelled",
                        examination: "Placenta checked for completeness"
                    }
                },
                initiation: {
                    triggers: [
                        "Fetal hormones (cortisol)",
                        "Stretching of uterus and cervix",
                        "Oxytocin release",
                        "Prostaglandins"
                    ],
                    positiveFeedback: "Contractions → oxytocin release → stronger contractions"
                },
                cesareanSection: {
                    description: "Surgical delivery through abdominal incision",
                    indications: "Breech presentation, fetal distress, prolonged labor, multiple births"
                }
            },

            lactation: {
                description: "Production and secretion of milk",
                preparation: {
                    pregnancy: "Estrogen and progesterone stimulate breast development",
                    birth: "Drop in estrogen and progesterone allows prolactin to act"
                },
                hormones: {
                    prolactin: {
                        function: "Stimulates milk production",
                        stimulus: "Suckling",
                        levels: "Rise during nursing"
                    },
                    oxytocin: {
                        function: "Milk ejection (letdown reflex)",
                        stimulus: "Suckling, baby's cry, thinking about baby",
                        mechanism: "Contracts myoepithelial cells around alveoli"
                    }
                },
                colostrum: {
                    description: "First milk produced",
                    timing: "First few days after birth",
                    composition: "High in antibodies (especially IgA), proteins, vitamins",
                    function: "Provides passive immunity, laxative effect"
                },
                matureMilk: {
                    composition: "Water, lactose, proteins, fats, vitamins, minerals, antibodies",
                    benefits: [
                        "Perfect nutrition for baby",
                        "Antibodies provide immune protection",
                        "Easily digested",
                        "Bonding",
                        "Reduced risk of infections, allergies, SIDS"
                    ],
                    foremilk: "Watery, thirst-quenching",
                    hindmilk: "Fattier, more calories"
                },
                duration: "Can continue as long as nursing continues",
                suppression: "Will cease if not nursing (prolactin and oxytocin not stimulated)"
            },
            contraception: {
                description: "Methods to prevent pregnancy",
                methods: [
                    {
                        method: "Hormonal",
                        types: "Birth control pills, patch, ring, implant, injection",
                        mechanism: "Prevent ovulation, thicken cervical mucus, thin endometrium",
                        effectiveness: "92-99% with typical use",
                        reversible: "Yes"
                    },
                    {
                        method: "Barrier",
                        types: "Condoms (male/female), diaphragm, cervical cap",
                        mechanism: "Physical barrier preventing sperm from reaching egg",
                        effectiveness: "82-98% with typical use",
                        additional: "Condoms also prevent STIs"
                    },
                    {
                        method: "IUD (Intrauterine Device)",
                        types: "Copper (non-hormonal) or hormonal",
                        mechanism: "Prevents fertilization and implantation",
                        effectiveness: ">99%",
                        duration: "3-12 years depending on type",
                        reversible: "Yes (removable)"
                    },
                    {
                        method: "Sterilization",
                        types: "Tubal ligation (females), vasectomy (males)",
                        mechanism: "Blocks tubes preventing egg/sperm transport",
                        effectiveness: ">99%",
                        reversible: "Difficult to reverse, consider permanent"
                    },
                    {
                        method: "Natural Family Planning",
                        types: "Rhythm method, basal temperature, cervical mucus monitoring",
                        mechanism: "Avoid intercourse during fertile days",
                        effectiveness: "76-88% with typical use",
                        requires: "Careful tracking, regular cycles"
                    },
                    {
                        method: "Emergency Contraception",
                        types: "Morning-after pill, copper IUD",
                        timing: "Within 72-120 hours after unprotected sex",
                        mechanism: "Prevents or delays ovulation",
                        notAbortion: "Does not terminate existing pregnancy"
                    }
                ]
            },

            sexuallyTransmittedInfections: {
                description: "Infections transmitted through sexual contact",
                prevention: "Condoms, vaccination (HPV, Hepatitis B), abstinence, monogamy with tested partner",
                common: [
                    {
                        name: "Chlamydia",
                        cause: "Bacteria (Chlamydia trachomatis)",
                        symptoms: "Often asymptomatic, discharge, burning",
                        complications: "Pelvic inflammatory disease (PID), infertility",
                        treatment: "Antibiotics",
                        mostCommon: "Most common bacterial STI"
                    },
                    {
                        name: "Gonorrhea",
                        cause: "Bacteria (Neisseria gonorrhoeae)",
                        symptoms: "Discharge, burning, pain",
                        complications: "PID, infertility, disseminated infection",
                        treatment: "Antibiotics (increasing resistance)"
                    },
                    {
                        name: "Syphilis",
                        cause: "Bacteria (Treponema pallidum)",
                        stages: "Primary (chancre), secondary (rash), latent, tertiary (organ damage)",
                        treatment: "Penicillin",
                        serious: "Can cause severe complications if untreated"
                    },
                    {
                        name: "Genital Herpes",
                        cause: "Virus (HSV-1 or HSV-2)",
                        symptoms: "Painful blisters, often recurrent",
                        treatment: "No cure, antivirals reduce outbreaks",
                        lifelong: "Virus remains dormant in nerves"
                    },
                    {
                        name: "HPV (Human Papillomavirus)",
                        cause: "Virus",
                        types: "Low-risk (genital warts), high-risk (cervical cancer)",
                        prevalence: "Most common STI",
                        vaccine: "Available, prevents most cancer-causing types",
                        clearing: "Most infections clear on their own"
                    },
                    {
                        name: "HIV/AIDS",
                        cause: "Virus (Human Immunodeficiency Virus)",
                        transmission: "Sexual contact, blood, mother to child",
                        progression: "HIV → AIDS (if untreated)",
                        treatment: "Antiretroviral therapy (ART) - not a cure but prevents progression",
                        prevention: "Condoms, PrEP, treating infected individuals"
                    },
                    {
                        name: "Trichomoniasis",
                        cause: "Parasite (Trichomonas vaginalis)",
                        symptoms: "Discharge, itching, burning",
                        treatment: "Antibiotics"
                    }
                ]
            },

            disorders: [
                {
                    name: "Erectile Dysfunction (ED)",
                    description: "Inability to achieve or maintain erection",
                    causes: "Vascular problems, diabetes, neurological issues, psychological factors, medications",
                    treatment: "Medications (Viagra, Cialis), lifestyle changes, counseling"
                },
                {
                    name: "Prostate Cancer",
                    description: "Cancer of prostate gland",
                    risk: "Age, family history, race",
                    screening: "PSA blood test, digital rectal exam",
                    treatment: "Varies by stage - surgery, radiation, hormone therapy, watchful waiting"
                },
                {
                    name: "Testicular Cancer",
                    description: "Cancer of testes",
                    age: "Most common in young men (15-35)",
                    detection: "Self-exam, painless lump",
                    treatment: "Surgery, chemotherapy, radiation",
                    prognosis: "High cure rate if caught early"
                },
                {
                    name: "Endometriosis",
                    description: "Endometrial tissue grows outside uterus",
                    symptoms: "Pelvic pain, painful periods, infertility",
                    mechanism: "Tissue responds to hormones, bleeds during menstruation",
                    treatment: "Pain medication, hormones, surgery"
                },
                {
                    name: "Polycystic Ovary Syndrome (PCOS)",
                    description: "Hormonal disorder with multiple ovarian cysts",
                    symptoms: "Irregular periods, excess androgens (facial hair), weight gain, infertility",
                    complications: "Diabetes, heart disease risk",
                    treatment: "Lifestyle changes, medications (metformin, birth control)"
                },
                {
                    name: "Uterine Fibroids",
                    description: "Benign tumors in uterus",
                    prevalence: "Common, especially in women 30-40s",
                    symptoms: "Heavy bleeding, pelvic pressure, frequent urination",
                    treatment: "Observation, medications, surgery if severe"
                },
                {
                    name: "Cervical Cancer",
                    description: "Cancer of cervix",
                    cause: "High-risk HPV (most cases)",
                    screening: "Pap smear, HPV test",
                    prevention: "HPV vaccine",
                    treatment: "Surgery, radiation, chemotherapy depending on stage"
                },
                {
                    name: "Breast Cancer",
                    description: "Cancer of breast tissue",
                    risk: "Age, family history, genetic mutations (BRCA1, BRCA2), hormones",
                    detection: "Mammogram, self-exam, lump",
                    treatment: "Surgery (lumpectomy, mastectomy), radiation, chemotherapy, hormone therapy",
                    males: "Can occur in males (rare)"
                },
                {
                    name: "Infertility",
                    description: "Inability to conceive after 12 months of trying",
                    causes: {
                        male: "Low sperm count, poor motility, blockages",
                        female: "Ovulation disorders, blocked tubes, endometriosis, age"
                    },
                    treatment: "Medications, surgery, assisted reproductive technologies (IVF, IUI)"
                },
                {
                    name: "Ectopic Pregnancy",
                    description: "Embryo implants outside uterus (usually in fallopian tube)",
                    symptoms: "Abdominal pain, vaginal bleeding",
                    danger: "Can rupture tube, life-threatening",
                    treatment: "Medication or surgery",
                    emergency: "Medical emergency"
                }
            ]
        };
    }

    */

    handleLymphaticSystem(problem) {
        return {
            topic: "Lymphatic System",
            category: 'lymphatic_system',
            
            overview: {
                description: "The lymphatic system is a network of vessels, organs, and tissues that maintains fluid balance, absorbs fats, and supports immune function.",
                components: "Lymphatic vessels, lymph nodes, lymph, spleen, thymus, tonsils, bone marrow",
                parallel: "Parallels cardiovascular system but is one-way (toward heart)",
                functions: [
                    "Fluid balance: returns excess interstitial fluid to bloodstream",
                    "Fat absorption: absorbs dietary fats from small intestine",
                    "Immune defense: filters lymph, houses immune cells",
                    "Waste removal: removes cellular debris and pathogens"
                ]
            },

            lymph: {
                description: "Clear, colorless fluid similar to blood plasma",
                origin: "Interstitial fluid that enters lymphatic capillaries",
                composition: [
                    "Water",
                    "Proteins (smaller than in plasma)",
                    "Electrolytes",
                    "Lipids (especially after fat absorption from intestines)",
                    "Cellular debris",
                    "Lymphocytes and other immune cells"
                ],
                volume: "~2-3 liters returned to blood daily",
                flow: "One direction: tissues → lymphatic vessels → bloodstream",
                milky: "Appears milky after meals (chyle) due to absorbed fats"
            },

            lymphaticVessels: {
                lymphaticCapillaries: {
                    description: "Smallest lymphatic vessels",
                    location: "Present in most tissues (except CNS, bone marrow, cartilage, cornea)",
                    structure: "Thin-walled, very permeable, blind-ended tubes",
                    specialFeatures: "Overlapping endothelial cells act as one-way valves",
                    function: "Pick up excess interstitial fluid and proteins",
                    lacteals: {
                        description: "Specialized lymphatic capillaries in small intestine",
                        function: "Absorb dietary fats and fat-soluble vitamins",
                        chyle: "Milky lymph containing absorbed fats"
                    }
                },
                collectingVessels: {
                    description: "Larger vessels formed from capillaries",
                    structure: "Three layers (similar to veins), contain valves",
                    valves: "Prevent backflow of lymph",
                    flow: "Toward lymph nodes"
                },
                lymphaticTrunks: {
                    description: "Formed by merging collecting vessels",
                    regions: [
                        "Lumbar trunks: from lower limbs and abdomen",
                        "Intestinal trunk: from digestive organs",
                        "Bronchomediastinal trunks: from thorax",
                        "Subclavian trunks: from upper limbs",
                        "Jugular trunks: from head and neck"
                    ]
                },
                lymphaticDucts: {
                    description: "Largest lymphatic vessels, empty into venous circulation",
                    types: [
                        {
                            name: "Thoracic Duct",
                            description: "Main lymphatic duct (left lymphatic duct)",
                            drains: "Left side of head/thorax/upper limb, entire lower body",
                            percentage: "~75% of lymph",
                            cisternachyli: "Dilated sac at base receiving lumbar and intestinal trunks",
                            empties: "Junction of left internal jugular and subclavian veins"
                        },
                        {
                            name: "Right Lymphatic Duct",
                            description: "Smaller duct",
                            drains: "Right side of head/thorax/upper limb",
                            percentage: "~25% of lymph",
                            empties: "Junction of right internal jugular and subclavian veins"
                        }
                    ]
                },
                lymphMovement: {
                    description: "Lymph moves slowly without a pump like the heart",
                    mechanisms: [
                        "Skeletal muscle contraction: 'muscle pump' squeezes vessels",
                        "Breathing: pressure changes during respiration",
                        "Arterial pulsation: nearby arteries compress vessels",
                        "Smooth muscle: in vessel walls contracts rhythmically",
                        "Valves: prevent backflow"
                    ],
                    importance: "Movement critical - stagnant lymph causes edema"
                }
            },

            lymphNodes: {
                description: "Small, bean-shaped organs filtering lymph",
                number: "~600 in body",
                size: "1-25 mm",
                location: "Clusters along lymphatic vessels (cervical, axillary, inguinal, abdominal, thoracic)",
                structure: {
                    capsule: "Outer fibrous covering",
                    cortex: "Outer region with lymphoid follicles (B cells)",
                    paracortex: "Region between cortex and medulla (T cells)",
                    medulla: "Inner region with medullary cords",
                    sinuses: "Channels through which lymph flows",
                    hilum: "Indentation where vessels enter/exit"
                },
                flow: {
                    afferent: "Multiple afferent lymphatic vessels bring lymph IN",
                    filtration: "Lymph percolates through sinuses",
                    efferent: "Single efferent lymphatic vessel carries lymph OUT"
                },
                functions: [
                    "Filter lymph: trap pathogens, cancer cells, debris",
                    "Immune surveillance: macrophages and dendritic cells sample antigens",
                    "Lymphocyte activation: B and T cells activated here when encountering antigens",
                    "Antibody production: plasma cells produce antibodies"
                ],
                swelling: {
                    description: "Lymphadenopathy - enlarged lymph nodes",
                    causes: "Infection (fighting pathogens), inflammation, cancer",
                    palpable: "Can often feel swollen nodes (neck, armpits, groin)",
                    significance: "Sign of immune system activity"
                }
            },

            lymphoidOrgans: {
                spleen: {
                    description: "Largest lymphoid organ",
                    location: "Left upper abdomen, below diaphragm",
                    size: "Fist-sized (~12 cm)",
                    color: "Dark red-purple",
                    structure: {
                        whiteGivelp: {
                            description: "Lymphoid tissue",
                            function: "Immune function (lymphocytes, macrophages)",
                            location: "Scattered throughout spleen"
                        },
                        redPulp: {
                            description: "Vascular tissue",
                            function: "Filters blood, removes old RBCs",
                            location: "Bulk of spleen",
                            sinuses: "Blood-filled spaces"
                        }
                    },
                    functions: [
                        "Filters blood (not lymph): removes old/damaged RBCs, pathogens, debris",
                        "Immune surveillance of blood",
                        "Stores platelets (~1/3 of body's platelets)",
                        "Produces antibodies",
                        "Recycles iron from hemoglobin",
                        "Hematopoiesis in fetus (blood cell production)"
                    ],
                    removal: {
                        description: "Can live without spleen (splenectomy)",
                        reason: "Trauma, disease",
                        consequences: "Increased infection risk, especially encapsulated bacteria",
                        compensation: "Liver and bone marrow take over some functions"
                    }
                },
                thymus: {
                    description: "Bilobed organ where T cells mature",
                    location: "Upper chest, behind sternum, above heart",
                    size: "Large in children (~40g), atrophies with age (adult ~10g)",
                    peakActivity: "Childhood and adolescence",
                    involution: "Gradually replaced by fatty tissue after puberty",
                    structure: {
                        cortex: "Outer region, densely packed with immature T cells",
                        medulla: "Inner region, mature T cells"
                    },
                    functions: [
                        "T cell maturation: T lymphocytes develop and mature here",
                        "Selection: eliminates self-reactive T cells (negative selection)",
                        "Thymosin production: hormone promoting T cell maturation"
                    ],
                    importance: {
                        development: "Critical for establishing T cell repertoire",
                        removal: "Neonatal thymectomy causes severe immunodeficiency",
                        adultRemoval: "Less severe (T cells already established)"
                    }
                },
                tonsils: {
                    description: "Lymphoid tissue in throat",
                    location: "Ring of tissue around pharynx",
                    types: {
                        palatine: "Most visible, on sides of throat",
                        pharyngeal: "Adenoids, on posterior wall",
                        lingual: "Base of tongue"
                    },
                    function: [
                        "First line of defense for respiratory and digestive tracts",
                        "Trap and destroy pathogens entering through mouth/nose",
                        "Produce antibodies"
                    ],
                    problems: {
                        tonsillitis: "Inflammation/infection of tonsils",
                        enlargement: "Can obstruct airway (especially adenoids)",
                        removal: "Tonsillectomy/adenoidectomy if chronically infected"
                    }
                },
                MALT: {
                    name: "Mucosa-Associated Lymphoid Tissue",
                    description: "Diffuse lymphoid tissue in mucous membranes",
                    location: "Respiratory, digestive, urogenital tracts",
                    components: [
                        "Peyer's patches: in small intestine",
                        "Appendix: attached to cecum",
                        "Bronchus-associated lymphoid tissue (BALT)",
                        "Scattered lymphoid follicles"
                    ],
                    function: "Protects mucous membranes from pathogens",
                    percentage: "Contains >50% of body's lymphocytes"
                },
                boneMarrow: {
                    description: "Primary lymphoid organ",
                    function: [
                        "Site of hematopoiesis (blood cell production)",
                        "B cells mature here",
                        "Source of stem cells for all blood cells"
                    ],
                    types: {
                        red: "Active, produces blood cells",
                        yellow: "Inactive, fatty"
                    }
                }
            },

            immuneFunction: {
                overview: "Lymphatic system is integral to immune defense",
                surveillance: {
                    description: "Constantly monitors for pathogens and abnormal cells",
                    sites: "Lymph nodes, spleen, MALT",
                    cells: "Macrophages, dendritic cells, lymphocytes"
                },
                filtration: {
                    lymphNodes: "Filter lymph, trap pathogens from tissues",
                    spleen: "Filters blood, trap blood-borne pathogens"
                },
                activation: {
                    description: "Lymphoid organs are sites of lymphocyte activation",
                    process: [
                        "Antigen-presenting cells capture and present antigens",
                        "Naive lymphocytes encounter their specific antigen",
                        "Activation and clonal expansion occur",
                        "Effector and memory cells produced"
                    ]
                },
                antibodyProduction: {
                    sites: "Lymph nodes, spleen, bone marrow",
                    cells: "Plasma cells (differentiated B cells)",
                    distribution: "Antibodies circulate in blood and lymph"
                }
            },

            fluidBalance: {
                capillaryExchange: {
                    description: "Fluid constantly filters out of blood capillaries into tissues",
                    forces: {
                        outward: "Blood pressure pushes fluid out",
                        inward: "Osmotic pressure pulls fluid back"
                    },
                    netResult: "~3 liters per day not reabsorbed by capillaries"
                },
                lymphaticReturn: {
                    description: "Lymphatic system returns excess fluid to bloodstream",
                    volume: "~3 liters per day",
                    importance: "Prevents edema (tissue swelling)",
                    proteins: "Also returns leaked proteins to blood"
                },
                edema: {
                    description: "Abnormal accumulation of interstitial fluid",
                    causes: [
                        "Lymphatic obstruction: blocked vessels, removed nodes",
                        "Increased capillary pressure: heart failure, venous obstruction",
                        "Decreased plasma proteins: malnutrition, liver disease",
                        "Increased capillary permeability: inflammation, allergies"
                    ],
                    lymphedema: {
                        description: "Edema caused by lymphatic dysfunction",
                        causes: [
                            "Primary: congenital malformation of lymphatics",
                            "Secondary: damage from surgery, radiation, infection, cancer"
                        ],
                        manifestation: "Chronic swelling, usually in limbs",
                        treatment: "Compression, massage, exercise, surgery (severe)",
                        risk: "Infection (cellulitis, lymphangitis)"
                    }
                }
            },

            fatAbsorption: {
                lacteals: {
                    description: "Lymphatic capillaries in intestinal villi",
                    function: "Absorb dietary fats and fat-soluble vitamins"
                },
                process: [
                    "Fats digested to fatty acids and glycerol",
                    "Absorbed by intestinal cells",
                    "Reassembled into triglycerides",
                    "Packaged into chylomicrons (lipoprotein particles)",
                    "Chylomicrons too large for blood capillaries",
                    "Enter lacteals",
                    "Travel through lymphatic system",
                    "Enter bloodstream at thoracic duct"
                ],
                chyle: {
                    description: "Milky lymph containing absorbed fats",
                    appearance: "White/milky (due to fat content)",
                    timing: "After fat-containing meals",
                    destination: "Eventually reaches bloodstream, distributed to tissues"
                },
                fatSolubleVitamins: {
                    vitamins: "A, D, E, K",
                    absorption: "Follow same pathway as fats through lymphatic system"
                }
            },

            disorders: [
                {
                    name: "Lymphedema",
                    description: "Chronic swelling due to lymph accumulation",
                    types: {
                        primary: "Congenital malformation of lymphatic vessels",
                        secondary: "Acquired damage to lymphatic system"
                    },
                    causes: [
                        "Surgery (lymph node removal, especially cancer surgery)",
                        "Radiation therapy",
                        "Infection (filariasis - parasitic infection blocking vessels)",
                        "Trauma",
                        "Cancer"
                    ],
                    symptoms: "Persistent swelling, heaviness, tightness, restricted movement",
                    complications: "Infection (cellulitis), skin changes, disability",
                    treatment: "Compression garments, manual lymphatic drainage, exercise, skin care, surgery (severe)"
                },
                {
                    name: "Lymphadenitis",
                    description: "Inflammation of lymph nodes",
                    cause: "Usually infection (bacterial or viral)",
                    symptoms: "Swollen, tender, warm lymph nodes; fever; malaise",
                    common: "Cervical (neck) nodes with throat infections",
                    treatment: "Treat underlying infection, warm compresses, pain relief"
                },
                {
                    name: "Lymphangitis",
                    description: "Inflammation of lymphatic vessels",
                    cause: "Bacterial infection spreading through lymphatics",
                    symptoms: "Red streaks on skin following lymphatic pathways, fever, chills",
                    appearance: "Red lines extending from infection site toward lymph nodes",
                    serious: "Can lead to sepsis if untreated",
                    treatment: "Antibiotics, urgent medical attention"
                },
                {
                    name: "Lymphoma",
                    description: "Cancer of lymphatic system",
                    types: {
                        hodgkinLymphoma: {
                            description: "Presence of Reed-Sternberg cells",
                            characteristics: "More predictable spread, better prognosis",
                            symptoms: "Painless lymph node swelling, fever, night sweats, weight loss"
                        },
                        nonHodgkinLymphoma: {
                            description: "Group of diverse lymphomas",
                            types: "Many subtypes with varying aggressiveness",
                            moreCommon: "More common than Hodgkin"
                        }
                    },
                    symptoms: [
                        "Painless swelling of lymph nodes",
                        "Fever",
                        "Night sweats",
                        "Unexplained weight loss",
                        "Fatigue"
                    ],
                    diagnosis: "Lymph node biopsy",
                    treatment: "Chemotherapy, radiation, immunotherapy, stem cell transplant",
                    prognosis: "Varies by type and stage"
                },
                {
                    name: "Splenomegaly",
                    description: "Enlarged spleen",
                    causes: [
                        "Infections (mononucleosis, malaria)",
                        "Liver disease (cirrhosis)",
                        "Blood disorders (sickle cell, leukemia)",
                        "Cancers (lymphoma)"
                    ],
                    symptoms: "Fullness/pain in left upper abdomen, early satiety, anemia",
                    risk: "Rupture (traumatic injury)",
                    treatment: "Treat underlying cause, splenectomy if severe"
                },
                {
                    name: "Mononucleosis",
                    description: "'Mono' or 'kissing disease'",
                    cause: "Epstein-Barr virus (EBV)",
                    transmission: "Saliva",
                    symptoms: "Extreme fatigue, sore throat, fever, swollen lymph nodes, splenomegaly",
                    duration: "2-4 weeks, fatigue can last months",
                    treatment: "Supportive care, rest, fluids",
                    complications: "Splenic rupture (avoid contact sports)"
                },
                {
                    name: "Lymphatic Filariasis",
                    description: "Parasitic infection blocking lymphatic vessels",
                    cause: "Worms transmitted by mosquitoes",
                    endemic: "Tropical regions",
                    symptoms: "Lymphedema, elephantiasis (severe limb swelling)",
                    prevention: "Mosquito control, medication",
                    treatment: "Antiparasitic drugs, manage lymphedema"
                }
            ],

            clinicalConsiderations: {
                lymphNodeExamination: {
                    palpation: "Feel for size, consistency, tenderness, mobility",
                    normal: "Small, soft, mobile, non-tender",
                    abnormal: "Large, hard, fixed, tender",
                    distribution: "Localized (local infection) vs generalized (systemic disease)"
                },
                sentinelNode: {
                    description: "First lymph node to receive drainage from tumor",
                    importance: "If cancer spreads, likely goes here first",
                    biopsy: "Sentinel lymph node biopsy determines if cancer has spread",
                    staging: "Helps stage cancer, plan treatment"
                },
                lymphNodeDissection: {
                    description: "Surgical removal of lymph nodes",
                    indication: "Cancer treatment/staging",
                    regions: "Axillary (breast cancer), inguinal (melanoma, genital cancers), cervical (head/neck cancers)",
                    consequence: "Risk of lymphedema in affected limb"
                },
                radiationEffects: {
                    description: "Radiation can damage lymphatic vessels",
                    result: "Scarring, fibrosis, lymphedema",
                    timing: "Can occur months to years after treatment",
                    combined: "Surgery + radiation increases risk"
                },
                massage: {
                    manualLymphaticDrainage: {
                        description: "Specialized massage technique",
                        purpose: "Stimulate lymph flow, reduce lymphedema",
                        technique: "Gentle, rhythmic movements following lymphatic pathways",
                        effectiveness: "Helpful for lymphedema management"
                    }
                }
            }
        };
    }

    // CONTINUE WITH REMAINING HELPER METHODS FROM CELL BIOLOGY CLASS...
    // (All the methods like generateAnatomyContent, generateAnatomyWorkbook, 
    // assessContentDifficulty, generateLearningObjectives, etc. follow the same pattern)

    generateAnatomyContent(problem, content) {
        const contentSections = [];

        // Generate overview section
        contentSections.push(this.generateOverviewSection(problem, content));

        // Generate specific anatomy content based on what's present
        if (content.anatomy) {
            contentSections.push(this.generateAnatomyStructures(content.anatomy));
        }

        if (content.functions || content.overview?.functions) {
            contentSections.push(this.generateFunctionsSection(content));
        }

        if (content.disorders) {
            contentSections.push(this.generateDisordersSection(content));
        }

        if (content.hormones) {
            contentSections.push(this.generateHormonesSection(content));
        }

        // Add comparisons if available
        if (content.comparisons || content.comparison) {
            contentSections.push(this.generateComparisonsSection(content));
        }

        return contentSections;
    }

    generateAnatomyStructures(anatomy) {
        return {
            sectionType: 'anatomy_structures',
            title: 'Anatomical Structures',
            structures: Object.entries(anatomy).map(([key, structure]) => ({
                name: key,
                description: structure.description,
                location: structure.location,
                function: structure.function || structure.functions,
                structure: structure.structure
            }))
        };
    }

    generateFunctionsSection(content) {
        const functions = content.functions || content.overview?.functions || [];
        return {
            sectionType: 'functions',
            title: 'System Functions',
            functions: functions
        };
    }

    generateDisordersSection(content) {
        return {
            sectionType: 'disorders',
            title: 'Common Disorders and Diseases',
            disorders: content.disorders.map(disorder => ({
                name: disorder.name,
                description: disorder.description,
                symptoms: disorder.symptoms,
                causes: disorder.causes || disorder.cause,
                treatment: disorder.treatment
            }))
        };
    }

    generateHormonesSection(content) {
        return {
            sectionType: 'hormones',
            title: 'Hormonal Regulation',
            hormones: Object.entries(content.hormones).map(([key, hormone]) => ({
                name: hormone.name || key,
                source: hormone.source || hormone.production,
                target: hormone.target || hormone.targets,
                function: hormone.function || hormone.functions,
                regulation: hormone.regulation
            }))
        };
    }

    generateAnatomyDiagramData() {
        if (!this.currentContent) return;

        const { type } = this.currentProblem;

        this.diagramData = {
            type: type,
            diagrams: this.getRelevantAnatomyDiagrams(type),
            placeholder: true,
            note: "Diagram generation will be implemented with anatomical diagrams"
        };
    }


getRelevantAnatomyDiagrams(topicType) {
        const diagramMap = {
            circulatory_system: ["heart_anatomy", "blood_vessels", "cardiac_cycle", "blood_flow"],
            respiratory_system: ["respiratory_tract", "lungs", "alveoli", "gas_exchange"],
            digestive_system: ["digestive_tract", "stomach", "small_intestine", "liver"],
            nervous_system: ["brain_regions", "neuron", "spinal_cord", "synapse"],
            endocrine_system: ["endocrine_glands", "hormone_pathways", "feedback_loops"],
            skeletal_system: ["skeleton", "bone_structure", "joints", "skull"],
            muscular_system: ["muscle_types", "sarcomere", "muscle_attachment"],
            excretory_system: ["urinary_system", "kidney", "nephron"],
            immune_system: ["lymphatic_system", "lymph_node", "immune_cells"],
            integumentary_system: ["skin_layers", "hair_follicle", "sweat_gland"]
        };

        return diagramMap[topicType] || [];
    }

    generateAnatomyWorkbook() {
        if (!this.currentContent || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createAnatomyProblemSection(),
            this.createContentOverviewSection(),
            this.createAnatomyDetailedSection(),
            this.createFunctionsApplicationsSection(),
            this.createDisordersSection(),
            this.createMisconceptionsSection(),
            this.createPedagogicalNotesSection(),
            this.createDiagramReferencesSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createAnatomyProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Topic Information',
            type: 'problem',
            data: [
                ['Topic Type', this.currentProblem.type],
                ['Main Topic', this.currentProblem.originalTopic],
                ['Sub-Topic', this.currentProblem.subTopic || 'General'],
                ['Category', this.anatomyTopics[this.currentProblem.type]?.category || 'N/A']
            ]
        };
    }

    createAnatomyDetailedSection() {
        if (!this.currentContent) return null;

        const contentData = [];

        // Add anatomy structures
        if (this.currentContent.anatomy) {
            Object.entries(this.currentContent.anatomy).forEach(([key, structure]) => {
                contentData.push([key.toUpperCase(), '']);
                if (structure.description) contentData.push(['Description', structure.description]);
                if (structure.location) contentData.push(['Location', structure.location]);
                if (structure.function) {
                    const func = Array.isArray(structure.function) ? structure.function.join('; ') : structure.function;
                    contentData.push(['Function', func]);
                }
                contentData.push(['', '']); // Spacing
            });
        }

        return contentData.length > 0 ? {
            title: 'Anatomical Details',
            type: 'detailed_anatomy',
            data: contentData
        } : null;
    }

    createFunctionsApplicationsSection() {
        const data = [];

        if (this.currentContent.functions || this.currentContent.overview?.functions) {
            data.push(['FUNCTIONS', '']);
            const functions = this.currentContent.functions || this.currentContent.overview.functions;
            functions.forEach(func => {
                data.push(['•', func]);
            });
            data.push(['', '']); // Spacing
        }

        if (this.currentContent.clinicalMeasures) {
            data.push(['CLINICAL MEASURES', '']);
            Object.entries(this.currentContent.clinicalMeasures).forEach(([key, value]) => {
                data.push([key, typeof value === 'string' ? value : JSON.stringify(value)]);
            });
        }

        return data.length > 0 ? {
            title: 'Functions and Clinical Applications',
            type: 'functions_clinical',
            data: data
        } : null;
    }

    createDisordersSection() {
        if (!this.currentContent.disorders) return null;

        const data = [['Disorder', 'Description', 'Key Information']];

        this.currentContent.disorders.forEach(disorder => {
            const keyInfo = [];
            if (disorder.symptoms) keyInfo.push(`Symptoms: ${Array.isArray(disorder.symptoms) ? disorder.symptoms.join(', ') : disorder.symptoms}`);
            if (disorder.treatment) keyInfo.push(`Treatment: ${disorder.treatment}`);
            
            data.push([
                disorder.name,
                disorder.description,
                keyInfo.join('; ')
            ]);
        });

        return {
            title: 'Common Disorders',
            type: 'disorders',
            data: data
        };
    }

    createWorkbookStructure() {
        return {
            title: `Human Anatomy Workbook: ${this.currentContent?.topic || 'Anatomy Topic'}`,
            generatedAt: new Date().toISOString(),
            theme: this.theme,
            colors: this.colors,
            sections: []
        };
    }

    // ASSESSMENT AND LEARNING METHODS (same pattern as cell biology)

    assessContentDifficulty() {
        if (!this.currentContent) return 'unknown';

        let difficultyScore = 0;

        const simpleTopics = ['integumentary_system', 'skeletal_system'];
        if (simpleTopics.includes(this.currentProblem.type)) {
            difficultyScore += 1;
        }

        const intermediateTopics = ['muscular_system', 'digestive_system', 'respiratory_system', 'excretory_system'];
        if (intermediateTopics.includes(this.currentProblem.type)) {
            difficultyScore += 2;
        }

        const complexTopics = ['nervous_system', 'endocrine_system', 'circulatory_system', 'immune_system', 'reproductive_system'];
        if (complexTopics.includes(this.currentProblem.type)) {
            difficultyScore += 3;
        }

        if (this.explanationLevel === 'detailed') difficultyScore += 1;
        if (this.explanationLevel === 'basic') difficultyScore -= 1;

        if (difficultyScore <= 2) return 'beginner';
        if (difficultyScore <= 4) return 'intermediate';
        return 'advanced';
    }

    generateLearningObjectives() {
        const objectivesDatabase = {
            circulatory_system: [
                "Describe the structure and function of the heart",
                "Trace the pathway of blood through pulmonary and systemic circulation",
                "Explain how blood pressure is regulated",
                "Identify major arteries and veins"
            ],
            respiratory_system: [
                "Describe the structures of the respiratory tract",
                "Explain the mechanics of breathing",
                "Understand gas exchange at the alveoli",
                "Describe respiratory regulation"
            ],
            digestive_system: [
                "Trace the pathway of food through the digestive tract",
                "Explain chemical and mechanical digestion",
                "Describe nutrient absorption",
                "Identify accessory organs and their functions"
            ],
            nervous_system: [
                "Describe the structure of neurons and signal transmission",
                "Identify major brain regions and their functions",
                "Distinguish between somatic and autonomic nervous systems",
                "Explain reflex arcs"
            ],
            endocrine_system: [
                "Identify major endocrine glands and their hormones",
                "Explain hormone mechanisms of action",
                "Describe feedback regulation",
                "Understand hormone disorders"
            ],
            skeletal_system: [
                "Identify major bones and their classifications",
                "Describe bone structure and composition",
                "Explain bone formation and remodeling",
                "Classify joints and describe movements"
            ],
            muscular_system: [
                "Compare three types of muscle tissue",
                "Explain the sliding filament mechanism",
                "Describe energy sources for muscle contraction",
                "Identify major skeletal muscles"
            ],
            excretory_system: [
                "Describe kidney structure and nephron function",
                "Explain urine formation processes",
                "Understand hormonal regulation of kidney function",
                "Relate kidney function to homeostasis"
            ],
            immune_system: [
                "Distinguish between innate and adaptive immunity",
                "Describe the roles of B and T lymphocytes",
                "Explain antibody structure and function",
                "Identify lymphoid organs and their functions"
            ]
        };

        return objectivesDatabase[this.currentProblem?.type] || [
            "Understand the structure and function of this system",
            "Relate anatomy to physiological processes",
            "Apply knowledge to health and disease contexts"
        ];
    }

    identifyPrerequisites() {
        const prerequisitesDatabase = {
            circulatory_system: [
                "Basic understanding of cell structure",
                "Knowledge of blood composition",
                "Understanding of basic chemistry (gases, pressure)"
            ],
            nervous_system: [
                "Cell biology (especially cell membrane)",
                "Basic chemistry (ions, electrical charges)",
                "Understanding of homeostasis"
            ],
            endocrine_system: [
                "Cell biology (receptors, signaling)",
                "Basic chemistry (proteins, steroids)",
                "Understanding of homeostasis and feedback"
            ],
            excretory_system: [
                "Cell biology (transport mechanisms)",
                "Understanding of blood composition",
                "Basic chemistry (pH, osmosis)"
            ],
            reproductive_system: [
                "Cell biology (cell division, meiosis)",
                "Endocrine system basics",
                "Understanding of genetics"
            ]
        };

        return prerequisitesDatabase[this.currentProblem?.type] || [
            "General biology background",
            "Basic anatomy terminology"
        ];
    }

    generateStudyTips() {
        const studyTipsDatabase = {
            circulatory_system: [
                "Trace blood flow pathways with your finger on diagrams",
                "Use mnemonics for heart anatomy and vessels",
                "Practice taking and understanding your own pulse and blood pressure",
                "Watch animations of the cardiac cycle"
            ],
            nervous_system: [
                "Build a 3D model or draw the neuron structure",
                "Create flowcharts for signal transmission",
                "Use brain region mnemonics",
                "Practice identifying brain structures on multiple views"
            ],
            digestive_system: [
                "Follow a meal through the entire digestive tract",
                "Create a table of enzymes, their locations, and substrates",
                "Draw and label the digestive organs",
                "Make flashcards for hormone functions"
            ],
            endocrine_system: [
                "Create a concept map linking glands, hormones, and effects",
                "Use mnemonics for pituitary hormones",
                "Draw feedback loops for major hormones",
                "Make a chart comparing hormone disorders"
            ],
            skeletal_system: [
                "Use a skeleton model for hands-on learning",
                "Practice bone identification from multiple angles",
                "Draw joint types and practice naming movements",
                "Feel your own bones and identify landmarks"
            ],
            muscular_system: [
                "Draw the sarcomere and sliding filament mechanism",
                "Move your own muscles and identify which ones are working",
                "Create muscle action flashcards",
                "Compare muscle types in a table"
            ]
        };

        return studyTipsDatabase[this.currentProblem?.type] || [
            "Use anatomical models and diagrams extensively",
            "Relate structures to their functions",
            "Practice identifying structures from different views",
            "Apply concepts to real-life health scenarios"
        ];
    }

    generateAssessmentQuestions() {
        const questionsDatabase = {
            circulatory_system: [
                {
                    question: "Trace the pathway of blood from the right atrium through the heart and body back to the right atrium.",
                    type: "application",
                    difficulty: "medium"
                },
                {
                    question: "Why does the left ventricle have a thicker wall than the right ventricle?",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "How do baroreceptors help regulate blood pressure?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            nervous_system: [
                {
                    question: "What are the main differences between the somatic and autonomic nervous systems?",
                    type: "comparison",
                    difficulty: "easy"
                },
                {
                    question: "Describe the steps of synaptic transmission.",
                    type: "recall",
                    difficulty: "medium"
                },
                {
                    question: "Why does myelin speed up nerve signal transmission?",
                    type: "explanation",
                    difficulty: "hard"
                }
            ]
        };

        return questionsDatabase[this.currentProblem?.type] || [
            {
                question: "What are the main structures of this system?",
                type: "recall",
                difficulty: "easy"
            }
        ];
    }

    suggestRelatedTopics() {
        const relatedTopicsMap = {
            circulatory_system: ['respiratory_system', 'excretory_system', 'immune_system'],
            respiratory_system: ['circulatory_system', 'nervous_system'],
            digestive_system: ['excretory_system', 'endocrine_system'],
            nervous_system: ['endocrine_system', 'muscular_system', 'integumentary_system'],
            endocrine_system: ['nervous_system', 'reproductive_system'],
            skeletal_system: ['muscular_system', 'integumentary_system'],
            muscular_system: ['skeletal_system', 'nervous_system'],
            excretory_system: ['circulatory_system', 'endocrine_system'],
            immune_system: ['circulatory_system', 'lymphatic_system'],
            reproductive_system: ['endocrine_system']
        };

        const relatedTypes = relatedTopicsMap[this.currentProblem?.type] || [];
        
        return relatedTypes.map(type => ({
            type: type,
            name: this.anatomyTopics[type]?.name,
            description: this.anatomyTopics[type]?.description
        }));
    }

    generateGlossary() {
        if (!this.currentContent) return {};

        const glossary = {};

        // Extract anatomical terms
        if (this.currentContent.anatomy) {
            Object.entries(this.currentContent.anatomy).forEach(([key, structure]) => {
                glossary[key] = structure.description || structure.function;
            });
        }

        return glossary;
    }

    generateProcessTimeline(processName) {
        const timelines = {
            'Cardiac Cycle': [
                { phase: 'Atrial Systole', duration: '0.1 sec', events: 'Atria contract, ventricles fill' },
                { phase: 'Ventricular Systole', duration: '0.3 sec', events: 'Ventricles contract, blood ejected' },
                { phase: 'Complete Diastole', duration: '0.4 sec', events: 'All chambers relax and fill' }
            ],
            'Digestion': [
                { stage: 'Mouth', duration: 'Seconds', process: 'Mechanical breakdown, amylase on starch' },
                { stage: 'Esophagus', duration: '5-10 seconds', process: 'Peristalsis transports bolus' },
                { stage: 'Stomach', duration: '2-6 hours', process: 'Mechanical churning, pepsin on proteins' },
                { stage: 'Small Intestine', duration: '3-5 hours', process: 'Most digestion and absorption' },
                { stage: 'Large Intestine', duration: '12-48 hours', process: 'Water absorption, feces formation' }
            ],
            'Breathing Cycle': [
                { phase: 'Inspiration', duration: '~2 seconds', events: 'Diaphragm contracts, air flows in' },
                { phase: 'Expiration', duration: '~3 seconds', events: 'Diaphragm relaxes, air flows out' }
            ],
            'Action Potential': [
                { phase: 'Resting', duration: 'Continuous', voltage: '-70 mV' },
                { phase: 'Depolarization', duration: '1 ms', voltage: '+30 mV', events: 'Na⁺ channels open' },
                { phase: 'Repolarization', duration: '1-2 ms', voltage: 'Return to -70 mV', events: 'K⁺ channels open' }
            ],
            'Menstrual Cycle': [
                { phase: 'Menstruation', days: '1-5', events: 'Endometrium sheds' },
                { phase: 'Follicular/Proliferative', days: '6-14', events: 'Follicle matures, endometrium rebuilds' },
                { phase: 'Ovulation', days: '14', events: 'Egg released' },
                { phase: 'Luteal/Secretory', days: '15-28', events: 'Corpus luteum forms, endometrium secretory' }
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

        if (this.currentContent.overview) {
            hierarchy.children.push({
                name: 'Overview',
                type: 'section',
                children: this.currentContent.overview.functions ? 
                    this.currentContent.overview.functions.map(f => ({ name: f, type: 'function' })) : []
            });
        }

        if (this.currentContent.anatomy) {
            hierarchy.children.push({
                name: 'Anatomy',
                type: 'section',
                count: Object.keys(this.currentContent.anatomy).length
            });
        }

        if (this.currentContent.disorders) {
            hierarchy.children.push({
                name: 'Disorders',
                type: 'section',
                count: this.currentContent.disorders.length
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
            qualityMetrics: this.getContentQualityMetrics()
        };
    }

    getAvailableTopics() {
        return Object.entries(this.anatomyTopics).map(([key, topic]) => ({
            id: key,
            name: topic.name,
            category: topic.category,
            description: topic.description
        }));
    }

    getTopicDetails(topicId) {
        const topic = this.anatomyTopics[topicId];
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

    calculateContentCompleteness() {
        if (!this.currentContent) return 0;

        let score = 0;
        const maxScore = 10;

        if (this.currentContent.topic) score += 1;
        if (this.currentContent.overview) score += 1;
        if (this.currentContent.anatomy) score += 2;
        if (this.currentContent.functions || this.currentContent.overview?.functions) score += 1;
        if (this.currentContent.disorders) score += 2;
        if (this.currentContent.hormones) score += 1;
        if (this.currentContent.clinicalMeasures) score += 1;
        if (this.currentContent.comparisons) score += 1;

        return Math.round((score / maxScore) * 100);
    }

    getContentQualityMetrics() {
        return {
            completeness: this.calculateContentCompleteness(),
            hasAnatomy: !!this.currentContent?.anatomy,
            hasDisorders: !!this.currentContent?.disorders,
            hasClinicalInfo: !!this.currentContent?.clinicalMeasures,
            detailLevel: this.explanationLevel,
            includesVisualizations: this.includeVisualizations,
            includesMisconceptions: this.includeCommonMisconceptions
        };
    }

    // FORMAT AND EXPORT METHODS

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

        if (content.overview?.description) {
            markdown += `${content.overview.description}\n\n`;
        }

        if (content.overview?.functions) {
            markdown += `## Functions\n\n`;
            content.overview.functions.forEach(func => {
                markdown += `- ${func}\n`;
            });
            markdown += `\n`;
        }

        if (content.anatomy) {
            markdown += `## Anatomy\n\n`;
            Object.entries(content.anatomy).forEach(([key, structure]) => {
                markdown += `### ${key}\n`;
                if (structure.description) markdown += `${structure.description}\n\n`;
                if (structure.location) markdown += `**Location:** ${structure.location}\n\n`;
            });
        }

        if (content.disorders) {
            markdown += `## Common Disorders\n\n`;
            content.disorders.forEach(disorder => {
                markdown += `### ${disorder.name}\n`;
                markdown += `${disorder.description}\n\n`;
            });
        }

        return markdown;
    }

    convertToHTML(content) {
        let html = `<div class="anatomy-content">\n`;
        html += `  <h1>${content.topic}</h1>\n`;

        if (content.overview?.description) {
            html += `  <p class="overview">${content.overview.description}</p>\n`;
        }

        if (content.overview?.functions) {
            html += `  <section class="functions">\n`;
            html += `    <h2>Functions</h2>\n`;
            html += `    <ul>\n`;
            content.overview.functions.forEach(func => {
                html += `      <li>${func}</li>\n`;
            });
            html += `    </ul>\n`;
            html += `  </section>\n`;
        }

        if (content.anatomy) {
            html += `  <section class="anatomy">\n`;
            html += `    <h2>Anatomy</h2>\n`;
            Object.entries(content.anatomy).forEach(([key, structure]) => {
                html += `    <article>\n`;
                html += `      <h3>${key}</h3>\n`;
                if (structure.description) html += `      <p>${structure.description}</p>\n`;
                if (structure.location) html += `      <p><strong>Location:</strong> ${structure.location}</p>\n`;
                html += `    </article>\n`;
            });
            html += `  </section>\n`;
        }

        if (content.disorders) {
            html += `  <section class="disorders">\n`;
            html += `    <h2>Common Disorders</h2>\n`;
            content.disorders.forEach(disorder => {
                html += `    <article>\n`;
                html += `      <h3>${disorder.name}</h3>\n`;
                html += `      <p>${disorder.description}</p>\n`;
                html += `    </article>\n`;
            });
            html += `  </section>\n`;
        }

        html += `</div>`;
        return html;
    }

    // SEARCH AND FILTER

    searchContent(query) {
        if (!this.currentContent) return null;

        const results = {
            query: query,
            matches: []
        };

        const searchableContent = JSON.stringify(this.currentContent).toLowerCase();
        const queryLower = query.toLowerCase();

        if (searchableContent.includes(queryLower)) {
            if (this.currentContent.anatomy) {
                Object.entries(this.currentContent.anatomy).forEach(([key, structure]) => {
                    if (JSON.stringify(structure).toLowerCase().includes(queryLower)) {
                        results.matches.push({
                            type: 'anatomy',
                            name: key,
                            content: structure
                        });
                    }
                });
            }

            if (this.currentContent.disorders) {
                this.currentContent.disorders.forEach(disorder => {
                    if (JSON.stringify(disorder).toLowerCase().includes(queryLower)) {
                        results.matches.push({
                            type: 'disorder',
                            name: disorder.name,
                            content: disorder
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

        if (this.currentContent.anatomy) {
            Object.entries(this.currentContent.anatomy).forEach(([key, structure]) => {
                if (structure.location?.toLowerCase().includes(category.toLowerCase()) ||
                    key.toLowerCase().includes(category.toLowerCase())) {
                    filtered.items.push({ name: key, ...structure });
                }
            });
        }

        return filtered;
    }

    generateContentSummary() {
        if (!this.currentContent) return null;

        const summary = {
            topic: this.currentContent.topic,
            category: this.currentContent.category,
            itemCount: 0,
            keyPoints: [],
            coverage: {}
        };

        if (this.currentContent.anatomy) {
            summary.itemCount += Object.keys(this.currentContent.anatomy).length;
            summary.coverage.anatomy = Object.keys(this.currentContent.anatomy).length;
        }

        if (this.currentContent.disorders) {
            summary.itemCount += this.currentContent.disorders.length;
            summary.coverage.disorders = this.currentContent.disorders.length;
        }

        if (this.currentContent.overview?.functions) {
            summary.keyPoints.push(...this.currentContent.overview.functions.slice(0, 3));
        }

        return summary;
    }

    // VALIDATION

    validateAnatomyContent(content) {
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

        const hasSubstantiveContent = 
            content.anatomy || 
            content.overview || 
            content.disorders;

        if (!hasSubstantiveContent) {
            validationResults.warnings.push("Limited substantive content");
            validationResults.suggestions.push("Consider adding more detailed information");
        }

        if (!content.disorders) {
            validationResults.suggestions.push("Consider adding common disorders");
        }

        return validationResults;
    }

    // ADDITIONAL UTILITY METHODS

    adaptAnatomyLanguage(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'cardiovascular': 'heart and blood vessels',
                    'pulmonary': 'lung-related',
                    'systemic': 'body-wide',
                    'anterior': 'front',
                    'posterior': 'back',
                    'superior': 'upper',
                    'inferior': 'lower',
                    'medial': 'toward middle',
                    'lateral': 'toward side'
                }
            },
            intermediate: {
                replacements: {
                    'cardiovascular': 'cardiovascular',
                    'pulmonary': 'pulmonary'
                }
            },
            detailed: {
                replacements: {
                    'cardiovascular': 'cardiovascular system',
                    'pulmonary': 'pulmonary circulation'
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

    generateAnatomyAnalogy(concept) {
        const analogies = {
            heart: "Like a pump in a water system",
            lungs: "Like bellows or air filters",
            kidneys: "Like a water filtration system",
            liver: "Like a chemical processing plant",
            brain: "Like a computer or command center",
            stomach: "Like a mixing bowl with acid",
            small_intestine: "Like a nutrient absorption factory",
            bones: "Like the framework of a building",
            muscles: "Like pulleys and levers creating movement",
            skin: "Like protective armor or wrapping"
        };

        return analogies[concept] || "Performs a specialized function in the body";
    }

    formatAnatomicalTerm(term) {
        const formatted = term
            .replace(/O2/g, this.anatomicalSymbols.O2)
            .replace(/CO2/g, this.anatomicalSymbols.CO2)
            .replace(/H2O/g, this.anatomicalSymbols.H2O)
            .replace(/ATP/g, this.anatomicalSymbols.ATP);

        return formatted;
    }
}

// Export the class
export default EnhancedHumanAnatomyWorkbook;
