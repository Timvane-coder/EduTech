// Enhanced Skeletal System Workbook - Comprehensive Bone and Skeletal Anatomy System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { AnatomySvgDiagrams } from '../svg-data.js';
import { AnatomyDiagramsRegistry } from '../registry.js';
import { AnatomyDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedSkeletalSystemWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "skeletal";
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
        this.diagramRenderer = new AnatomyDiagramsRenderer();
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

        this.anatomicalSymbols = this.initializeAnatomicalSymbols();
        this.setThemeColors();
        this.initializeSkeletalTopics();
        this.initializeSkeletalLessons();
        this.initializeSkeletalExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            skeletal: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
                headerBg: '#8b4513',
                headerText: '#ffffff',
                sectionBg: '#deb887',
                sectionText: '#654321',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#fff8dc',
                resultText: '#8b4513',
                definitionBg: '#ffe4b5',
                definitionText: '#d2691e',
                stepBg: '#faebd7',
                stepText: '#8b4513',
                borderColor: '#cd853f',
                contentBg: '#fdf5e6',
                contentText: '#654321',
                diagramBg: '#fff5ee',
                structureBg: '#f5f5dc',
                experimentBg: '#fffaf0',
                experimentText: '#a0522d',
                boneBg: '#fff8dc',
                cartilageBg: '#e0f2f7',
                jointBg: '#f0e68c',
                muscleBg: '#ffe4e1'
            },
            anatomy: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#5d4037',
                headerText: '#ffffff',
                sectionBg: '#bcaaa4',
                sectionText: '#3e2723',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#efebe9',
                resultText: '#5d4037',
                definitionBg: '#d7ccc8',
                definitionText: '#4e342e',
                stepBg: '#f5f5f5',
                stepText: '#5d4037',
                borderColor: '#8d6e63',
                contentBg: '#fafafa',
                contentText: '#3e2723',
                diagramBg: '#fff8f0',
                structureBg: '#f5f5dc',
                experimentBg: '#fffef7',
                experimentText: '#6d4c41',
                boneBg: '#fff8dc',
                cartilageBg: '#e0f2f7',
                jointBg: '#f0e68c',
                muscleBg: '#ffe4e1'
            }
        };

        this.colors = themes[this.theme] || themes.skeletal;
    }

    initializeAnatomicalSymbols() {
        return {
            // Greek letters for anatomy
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'mu': 'μ',
            
            // Arrows and directions
            'arrow': '→',
            'up': '↑',
            'down': '↓',
            'left': '←',
            'right': '→',
            
            // Math symbols
            'degree': '°',
            'approximately': '≈',
            'plus': '+',
            'minus': '−',
            
            // Chemical formulas for bone
            'Ca': 'Ca²⁺',
            'PO4': 'PO₄³⁻',
            'hydroxyapatite': 'Ca₁₀(PO₄)₆(OH)₂',
            'CaCO3': 'CaCO₃',
            'Ca3(PO4)2': 'Ca₃(PO₄)₂',
            
            // Anatomical abbreviations
            'C1-C7': 'Cervical vertebrae 1-7',
            'T1-T12': 'Thoracic vertebrae 1-12',
            'L1-L5': 'Lumbar vertebrae 1-5',
            'S1-S5': 'Sacral vertebrae 1-5 (fused)',
            
            // Bone markers
            'Ca2+': 'Ca²⁺',
            'OH-': 'OH⁻',
            'H+': 'H⁺',
            'HCO3-': 'HCO₃⁻'
        };
    }

    initializeSkeletalTopics() {
        this.skeletalTopics = {
            bone_structure: {
                patterns: [
                    /bone.*structure|compact.*bone|spongy.*bone/i,
                    /osteon|haversian|lamellae/i,
                    /periosteum|endosteum|marrow/i,
                    /osteocyte|osteoblast|osteoclast/i
                ],
                handler: this.handleBoneStructure.bind(this),
                name: 'Bone Structure and Histology',
                category: 'bone_tissue',
                description: 'Microscopic and macroscopic organization of bone tissue',
                difficulty: 'intermediate',
                prerequisites: ['basic_anatomy', 'cell_biology']
            },
            
            bone_development: {
                patterns: [
                    /bone.*development|ossification/i,
                    /intramembranous|endochondral/i,
                    /growth.*plate|epiphyseal/i,
                    /bone.*formation|osteogenesis/i
                ],
                handler: this.handleBoneDevelopment.bind(this),
                name: 'Bone Development and Growth',
                category: 'bone_physiology',
                description: 'How bones form and grow from embryo through adulthood',
                difficulty: 'advanced',
                prerequisites: ['bone_structure', 'developmental_biology']
            },
            
            bone_remodeling: {
                patterns: [
                    /bone.*remodel|bone.*turnover/i,
                    /osteoblast.*osteoclast|bone.*formation.*resorption/i,
                    /wolff.*law|mechanical.*stress/i,
                    /calcium.*homeostasis/i
                ],
                handler: this.handleBoneRemodeling.bind(this),
                name: 'Bone Remodeling and Calcium Homeostasis',
                category: 'bone_physiology',
                description: 'Continuous process of bone breakdown and formation',
                difficulty: 'advanced',
                prerequisites: ['bone_structure', 'endocrinology']
            },
            
            axial_skeleton: {
                patterns: [
                    /skull|cranium|vertebr|rib|sternum/i,
                    /axial.*skeleton/i,
                    /spine|spinal.*column|vertebral/i,
                    /thoracic.*cage/i
                ],
                handler: this.handleAxialSkeleton.bind(this),
                name: 'Axial Skeleton',
                category: 'skeletal_anatomy',
                description: 'Skull, vertebral column, and thoracic cage',
                difficulty: 'intermediate',
                prerequisites: ['basic_anatomy']
            },
            
            appendicular_skeleton: {
                patterns: [
                    /appendicular.*skeleton/i,
                    /limb|arm|leg|shoulder|pelvic.*girdle/i,
                    /humerus|femur|tibia|radius|ulna/i,
                    /pectoral|pelvic/i
                ],
                handler: this.handleAppendicularSkeleton.bind(this),
                name: 'Appendicular Skeleton',
                category: 'skeletal_anatomy',
                description: 'Bones of the limbs and girdles',
                difficulty: 'intermediate',
                prerequisites: ['basic_anatomy']
            },
            
            joints_articulations: {
                patterns: [
                    /joint|articulation/i,
                    /synovial|cartilaginous|fibrous/i,
                    /hinge|ball.*socket|pivot/i,
                    /ligament|synovial.*fluid/i
                ],
                handler: this.handleJoints.bind(this),
                name: 'Joints and Articulations',
                category: 'joint_anatomy',
                description: 'Classification and function of skeletal joints',
                difficulty: 'intermediate',
                prerequisites: ['bone_structure', 'connective_tissue']
            }
        };
    }

    initializeSkeletalLessons() {
        this.lessons = {
            bone_structure: {
                title: "Bone Structure and Histology: From Macro to Micro",
                concepts: [
                    "Bone is a dynamic, living connective tissue",
                    "Compact bone provides strength; spongy bone reduces weight",
                    "Osteons are the structural units of compact bone",
                    "Three types of bone cells: osteoblasts, osteocytes, osteoclasts",
                    "Bone matrix is mineralized with hydroxyapatite crystals"
                ],
                theory: "Bone tissue is a specialized connective tissue that provides structural support, protection of vital organs, mineral storage (especially calcium and phosphorus), and houses bone marrow for blood cell production. Understanding bone structure from macroscopic to microscopic levels is essential for comprehending bone function, disease, and repair.",
                keyDefinitions: {
                    "Compact Bone (Cortical Bone)": "Dense outer layer of bone providing strength and rigidity; ~80% of skeleton mass",
                    "Spongy Bone (Trabecular/Cancellous Bone)": "Inner porous bone with trabeculae; reduces weight while maintaining strength; ~20% of skeleton mass",
                    "Osteon (Haversian System)": "Structural unit of compact bone; central canal surrounded by concentric lamellae",
                    "Osteoblast": "Bone-building cell; secretes osteoid (unmineralized bone matrix)",
                    "Osteocyte": "Mature bone cell embedded in lacunae; maintains bone matrix",
                    "Osteoclast": "Large multinucleated cell; breaks down bone tissue (resorption)",
                    "Periosteum": "Fibrous membrane covering outer bone surface (except joints); contains osteogenic cells",
                    "Endosteum": "Membrane lining inner bone surfaces (medullary cavity, trabeculae)",
                    "Bone Matrix": "Organic (collagen, proteoglycans) + inorganic (hydroxyapatite crystals) components",
                    "Hydroxyapatite": "Ca₁₀(PO₄)₆(OH)₂ - mineral that hardens bone"
                },
                macroscopicStructure: {
                    longBoneAnatomy: {
                        diaphysis: "Shaft - hollow cylinder of compact bone surrounding medullary cavity",
                        epiphysis: "Ends - spongy bone core covered by thin layer of compact bone",
                        metaphysis: "Region between diaphysis and epiphysis; contains growth plate in children",
                        articular_cartilage: "Hyaline cartilage covering joint surfaces; reduces friction",
                        periosteum: "Outer fibrous covering; attachment for tendons/ligaments; contains osteogenic cells",
                        endosteum: "Inner lining of medullary cavity and trabeculae",
                        medullary_cavity: "Central cavity in diaphysis; contains yellow bone marrow (fat) in adults",
                        red_marrow: "In spongy bone of epiphyses; produces blood cells (hematopoiesis)"
                    },
                    boneShapes: {
                        long: "Longer than wide; lever systems (femur, humerus, phalanges)",
                        short: "Cube-shaped; stability, limited motion (carpals, tarsals)",
                        flat: "Thin, flat, curved; protection and muscle attachment (skull, ribs, scapula, sternum)",
                        irregular: "Complex shapes (vertebrae, pelvis, facial bones)",
                        sesamoid: "Develop in tendons; protect from stress (patella)"
                    }
                },
                microscopicStructure: {
                    compactBone: {
                        osteon: {
                            central_canal: "Haversian canal; contains blood vessels and nerves",
                            concentric_lamellae: "Rings of mineralized matrix around central canal",
                            lacunae: "Small spaces containing osteocytes",
                            canaliculi: "Tiny channels connecting lacunae; allow nutrient/waste exchange",
                            interstitial_lamellae: "Fragments of old osteons between intact osteons",
                            circumferential_lamellae: "Outer and inner layers around entire bone"
                        },
                        perforating_canals: "Volkmann's canals; perpendicular to central canals; connect blood vessels"
                    },
                    spongyBone: {
                        trabeculae: "Branching bony plates; oriented along stress lines",
                        no_osteons: "No osteons; osteocytes get nutrients from blood in marrow spaces",
                        red_marrow_spaces: "Between trabeculae; site of hematopoiesis",
                        lightweight: "Honeycomb structure; maximum strength with minimum weight"
                    }
                },
                boneCells: {
                    osteogenic_cells: {
                        location: "Periosteum, endosteum",
                        function: "Stem cells that differentiate into osteoblasts",
                        activity: "Bone growth and repair"
                    },
                    osteoblasts: {
                        origin: "From osteogenic cells",
                        function: "Bone formation - secrete osteoid (collagen + ground substance)",
                        location: "Bone surfaces (periosteum, endosteum, growth plates)",
                        fate: "Become trapped in matrix → osteocytes; or flatten → bone lining cells",
                        regulation: "Stimulated by mechanical stress, PTH, growth hormone, calcitonin"
                    },
                    osteocytes: {
                        origin: "Mature from osteoblasts",
                        location: "Lacunae within bone matrix",
                        processes: "Extend through canaliculi to contact other osteocytes",
                        function: "Maintain bone matrix; mechanosensors (detect stress); regulate mineral exchange",
                        lifespan: "Decades",
                        communication: "Gap junctions via canaliculi; form syncytium"
                    },
                    osteoclasts: {
                        origin: "Fusion of monocytes/macrophages (hematopoietic stem cells)",
                        appearance: "Large, multinucleated (5-50 nuclei)",
                        location: "Bone surfaces undergoing resorption (Howship's lacunae)",
                        function: "Bone resorption - secrete H⁺ (dissolves minerals) and enzymes (digest collagen)",
                        ruffled_border: "Highly folded membrane increases surface area for secretion",
                        regulation: "Activated by PTH, inhibited by calcitonin and estrogen",
                        sealing_zone: "Tight seal around resorption area"
                    }
                },
                boneMatrix: {
                    organic: {
                        percentage: "~35% of bone mass",
                        collagen_type_I: "90% of organic matrix; provides tensile strength and flexibility",
                        proteoglycans: "Ground substance; attract water",
                        glycoproteins: "Osteocalcin, osteonectin - bind to calcium and collagen",
                        bone_sialoprotein: "Cell attachment",
                        function: "Flexibility, resistance to tension"
                    },
                    inorganic: {
                        percentage: "~65% of bone mass",
                        hydroxyapatite: "Ca₁₀(PO₄)₆(OH)₂ crystals",
                        other_minerals: "Calcium carbonate, magnesium, fluoride, sodium",
                        function: "Hardness, resistance to compression",
                        storage: "Reservoir for calcium and phosphate"
                    },
                    water: "~10% of bone mass"
                },
                comparison: {
                    compactVsSpongy: {
                        compact: {
                            structure: "Dense, solid; organized osteons",
                            location: "Outer layer of all bones; diaphysis of long bones",
                            function: "Protection, support, resistance to stress",
                            porosity: "~10%"
                        },
                        spongy: {
                            structure: "Porous, lattice-like; trabeculae",
                            location: "Epiphyses of long bones, interior of flat/short/irregular bones",
                            function: "Reduces weight, houses marrow, distributes stress",
                            porosity: "~50-90%"
                        }
                    }
                },
                applications: [
                    "Diagnosis of bone diseases (osteoporosis, Paget's disease, bone cancer)",
                    "Forensic anthropology (age, sex, ancestry determination)",
                    "Orthopedic surgery (fracture repair, joint replacement)",
                    "Bone graft and implant design",
                    "Understanding effects of space travel and bed rest on bones"
                ]
            },

            bone_development: {
                title: "Bone Development and Growth: Ossification and Longitudinal Growth",
                concepts: [
                    "Bones develop through two processes: intramembranous and endochondral ossification",
                    "Intramembranous ossification forms flat bones directly from mesenchyme",
                    "Endochondral ossification forms long bones using cartilage model",
                    "Longitudinal growth occurs at epiphyseal (growth) plates",
                    "Bone growth is regulated by hormones (growth hormone, thyroid, sex hormones)"
                ],
                theory: "Bone formation (ossification or osteogenesis) begins in the embryo and continues through adolescence. Understanding these processes is crucial for treating growth disorders, developmental abnormalities, and fractures.",
                keyDefinitions: {
                    "Ossification (Osteogenesis)": "Formation of bone tissue",
                    "Intramembranous Ossification": "Bone develops directly from mesenchymal tissue (flat bones)",
                    "Endochondral Ossification": "Bone develops by replacing hyaline cartilage model (long bones)",
                    "Primary Ossification Center": "First area where bone replaces cartilage (diaphysis)",
                    "Secondary Ossification Center": "Later areas of ossification in epiphyses",
                    "Epiphyseal Plate (Growth Plate)": "Layer of hyaline cartilage between diaphysis and epiphysis; allows longitudinal growth",
                    "Epiphyseal Line": "Remnant of epiphyseal plate after growth stops (ossified)",
                    "Appositional Growth": "Increase in bone diameter (width)",
                    "Longitudinal Growth": "Increase in bone length (at epiphyseal plate)"
                },
                intramembranousOssification: {
                    bones_formed: ["Flat bones of skull (frontal, parietal, occipital, temporal)", "Mandible", "Clavicle"],
                    steps: [
                        {
                            step: 1,
                            name: "Ossification center appears",
                            description: "Mesenchymal cells cluster and differentiate into osteoblasts",
                            location: "Within fibrous membrane"
                        },
                        {
                            step: 2,
                            name: "Osteoid secretion and calcification",
                            description: "Osteoblasts secrete osteoid (unmineralized matrix); calcium salts deposit; osteoblasts trapped become osteocytes",
                            result: "Formation of trabeculae (spongy bone)"
                        },
                        {
                            step: 3,
                            name: "Woven bone and periosteum formation",
                            description: "Trabeculae thicken; vascularized mesenchyme condenses on surface → periosteum",
                            bone_type: "Woven bone (immature; irregular collagen)"
                        },
                        {
                            step: 4,
                            name: "Compact bone replaces woven bone",
                            description: "Outer trabeculae replaced by compact bone; inner remains spongy with red marrow",
                            remodeling: "Woven bone replaced by lamellar bone (mature; organized collagen)"
                        }
                    ],
                    timing: "Begins week 8 of embryonic development",
                    fontanels: {
                        description: "Fibrous membranes between skull bones in infants",
                        function: "Allow brain growth and skull compression during birth",
                        closure: "By age 2 (anterior fontanel last to close)"
                    }
                },
                endochondralOssification: {
                    bones_formed: "All bones below skull except clavicle (long, short, irregular bones)",
                    steps: [
                        {
                            step: 1,
                            name: "Cartilage model forms",
                            description: "Hyaline cartilage model shaped like future bone",
                            timing: "Week 6-8 embryonic development",
                            covering: "Perichondrium surrounds cartilage"
                        },
                        {
                            step: 2,
                            name: "Cartilage calcifies and periosteum forms",
                            description: "Cartilage in center of diaphysis calcifies; chondrocytes die; perichondrium becomes periosteum; bone collar forms",
                            location: "Midshaft (diaphysis)"
                        },
                        {
                            step: 3,
                            name: "Primary ossification center forms",
                            description: "Blood vessels penetrate; osteoblasts replace calcified cartilage with spongy bone",
                            timing: "Week 12 embryonic; continues until birth",
                            direction: "Outward from center toward epiphyses"
                        },
                        {
                            step: 4,
                            name: "Medullary cavity forms",
                            description: "Osteoclasts break down spongy bone in center → medullary cavity",
                            contents: "Initially red marrow; later yellow (fat)"
                        },
                        {
                            step: 5,
                            name: "Secondary ossification centers appear",
                            description: "Ossification in epiphyses after birth; cartilage remains as articular cartilage and epiphyseal plate",
                            timing: "Infancy to late adolescence",
                            pattern: "Progress outward from center; leave articular cartilage and growth plate"
                        }
                    ],
                    epiphyseal_plate: {
                        location: "Between diaphysis and epiphysis",
                        function: "Longitudinal bone growth",
                        active_period: "Childhood through adolescence",
                        closure: "Fuses in late teens to early 20s (sex and bone dependent)"
                    }
                },
                epiphysealPlateStructure: {
                    description: "Four zones from epiphysis toward diaphysis",
                    zones: [
                        {
                            name: "Zone 1: Resting (Reserve) Cartilage",
                            location: "Nearest epiphysis",
                            cells: "Small, scattered chondrocytes",
                            activity: "Anchor plate to epiphysis; no active division"
                        },
                        {
                            name: "Zone 2: Proliferating Cartilage",
                            location: "Below resting zone",
                            cells: "Chondrocytes divide rapidly; stack in columns",
                            activity: "Cell division lengthens bone; push older cells toward diaphysis"
                        },
                        {
                            name: "Zone 3: Hypertrophic Cartilage",
                            location: "Below proliferating zone",
                            cells: "Chondrocytes enlarge (hypertrophy); matrix calcifies",
                            activity: "Cells signal blood vessel invasion; prepare for ossification"
                        },
                        {
                            name: "Zone 4: Calcified Cartilage",
                            location: "Nearest diaphysis",
                            cells: "Dead chondrocytes; calcified matrix",
                            activity: "Osteoblasts deposit bone on calcified cartilage; osteoclasts remove cartilage",
                            result: "New bone added to diaphysis"
                        }
                    ],
                    mechanism: "Cartilage added on epiphyseal side; bone replaces cartilage on diaphyseal side → net lengthening"
                },
                appositionalGrowth: {
                    location: "Bone surface (periosteum)",
                    mechanism: [
                        "Osteoblasts in periosteum add new bone to outer surface",
                        "Osteoclasts in endosteum remove bone from inner surface (medullary cavity)",
                        "Net effect: bone diameter increases while medullary cavity enlarges"
                    ],
                    timing: "Throughout life (slower in adults)",
                    regulation: "Mechanical stress, hormones"
                },
                hormonalRegulation: {
                    growth_hormone: {
                        source: "Anterior pituitary",
                        effect: "Stimulates epiphyseal plate activity; triggers IGF (insulin-like growth factors) in liver",
                        result: "Increases bone length and width",
                        deficiency: "Pituitary dwarfism",
                        excess: "Gigantism (children), acromegaly (adults - increased width)"
                    },
                    thyroid_hormone: {
                        effect: "Essential for normal growth hormone activity and bone maturation",
                        deficiency: "Stunted growth, delayed ossification"
                    },
                    sex_hormones: {
                        puberty: "Testosterone and estrogen cause growth spurt",
                        closure: "Stimulate epiphyseal plate closure (late teens to early 20s)",
                        estrogen: "Earlier closure in females (~18) than males (~21)",
                        deficiency: "Delayed closure → taller stature"
                    },
                    parathyroid_hormone: {
                        effect: "Increases blood calcium by stimulating osteoclasts",
                        result: "Can weaken bones if chronically elevated"
                    },
                    calcitonin: {
                        effect: "Decreases blood calcium by inhibiting osteoclasts",
                        source: "Thyroid gland"
                    }
                },
                factors_affecting_growth: {
                    nutrition: ["Adequate calcium, phosphorus, vitamin D, vitamin C, protein"],
                    hormones: ["GH, thyroid, sex hormones, PTH, calcitonin"],
                    genetics: ["Determine maximum potential height and bone density"],
                    mechanical_stress: ["Weight-bearing exercise stimulates bone growth"],
                    disease: ["Rickets, scurvy, hormonal disorders impair growth"]
                },
                applications: [
                    "Diagnosis and treatment of growth disorders (dwarfism, gigantism)",
                    "Fracture healing in children (involves similar processes)",
                    "Timing of orthopedic surgeries (before vs after growth plate closure)",
                    "Understanding effects of nutrition and exercise on development",
                    "Forensic age estimation (degree of ossification)"
                ]
            },

            bone_remodeling: {
                title: "Bone Remodeling and Calcium Homeostasis: Dynamic Bone Turnover",
                concepts: [
                    "Bone is continuously remodeled throughout life",
                    "Remodeling balances osteoblast (formation) and osteoclast (resorption) activity",
                    "Bone serves as calcium reservoir for blood calcium regulation",
                    "Wolff's Law: Bone adapts to mechanical stress",
                    "Hormones (PTH, calcitonin, vitamin D) regulate calcium homeostasis"
                ],
                theory: "Bone remodeling is the lifelong process of bone breakdown and formation, occurring at ~10%/year in adults. It repairs microdamage, adapts bone to stress, and maintains calcium homeostasis. Imbalance causes diseases like osteoporosis.",
                keyDefinitions: {
                    "Bone Remodeling": "Continuous replacement of old bone with new bone",
                    "Resorption": "Breakdown of bone matrix by osteoclasts",
                    "Formation": "Deposition of new bone matrix by osteoblasts",
                    "Wolff's Law": "Bone remodels in response to mechanical stress; strengthens where loaded",
                    "Calcium Homeostasis": "Regulation of blood calcium levels (8.5-10.5 mg/dL)",
                    "Parathyroid Hormone (PTH)": "Increases blood calcium (stimulates osteoclasts, kidney reabsorption, vitamin D activation)",
                    "Calcitonin": "Decreases blood calcium (inhibits osteoclasts)",
                    "Vitamin D (Calcitriol)": "Increases calcium absorption in intestines"
                },
                remodelingProcess: {
                    duration: "~3-6 months per remodeling cycle",
                    sites: "Trabecular bone (20% turnover/year); cortical bone (2-3% turnover/year)",
                    phases: [
                        {
                            phase: 1,
                            name: "Activation",
                            trigger: "Microdamage, mechanical stress, hormonal signals",
                            event: "Bone lining cells retract; osteoclast precursors recruited",
                            duration: "Days"
                        },
                        {
                            phase: 2,
                            name: "Resorption",
                            cells: "Osteoclasts",
                            action: "Secrete H⁺ (dissolves hydroxyapatite) and cathepsin K (digests collagen)",
                            result: "Resorption pit (Howship's lacuna) ~40-60 μm deep",
                            duration: "2-4 weeks"
                        },
                        {
                            phase: 3,
                            name: "Reversal",
                            event: "Osteoclasts undergo apoptosis; mononuclear cells prepare surface",
                            coupling: "Signals recruit osteoblasts to resorption site",
                            duration: "Days to weeks"
                        },
                        {
                            phase: 4,
                            name: "Formation",
                            cells: "Osteoblasts",
                            action: "Secrete osteoid; mineralization occurs over weeks",
                            result: "New bone fills resorption pit",
                            duration: "3-4 months"
                        },
                        {
                            phase: 5,
                            name: "Quiescence",
                            event: "Osteoblasts become bone lining cells or osteocytes",
                            state: "Bone surface inactive until next cycle",
                            duration: "Variable"
                        }
                    ]
                },
                wolffLaw: {
                    principle: "Bone architecture optimizes to resist applied loads",
                    mechanism: "Osteocytes sense mechanical strain → signal osteoblasts/osteoclasts",
                    examples: [
                        "Tennis players: increased bone density in dominant arm",
                        "Astronauts: bone loss in microgravity (1-2% per month)",
                        "Bed rest: bone loss without weight-bearing",
                        "Weight-bearing exercise: increased bone density"
                    ],
                    trabecular_alignment: "Trabeculae orient along stress lines (visible in femoral head)",
                    clinical: "Exercise prescribed to prevent osteoporosis"
                },
                calciumHomeostasis: {
                    importance: "Ca²⁺ essential for muscle contraction, nerve signaling, blood clotting, enzyme activity",
                    normal_range: "8.5-10.5 mg/dL blood calcium",
                    distribution: {
                        bone: "99% of body calcium (mainly hydroxyapatite)",
                        extracellular_fluid: "0.9%",
                        intracellular: "0.1%"
                    },
                    regulation: {
                        hypocalcemia: {
                            trigger: "Blood Ca²⁺ < 8.5 mg/dL",
                            response: "Parathyroid glands release PTH",
                            PTH_effects: [
                                "Stimulates osteoclasts → bone resorption → Ca²⁺ release",
                                "Increases kidney Ca²⁺ reabsorption (saves Ca²⁺)",
                                "Activates vitamin D → increases intestinal Ca²⁺ absorption"
                            ],
                            result: "Blood Ca²⁺ increases"
                        },
                        hypercalcemia: {
                            trigger: "Blood Ca²⁺ > 10.5 mg/dL",
                            response: "Thyroid gland releases calcitonin",
                            calcitonin_effects: [
                                "Inhibits osteoclasts → decreases bone resorption",
                                "Increases kidney Ca²⁺ excretion",
                                "Minor effect in adults (major in children)"
                            ],
                            result: "Blood Ca²⁺ decreases"
                        }
                    }
                },
                hormonalControl: {
                    PTH: {
                        source: "Parathyroid glands (4 small glands behind thyroid)",
                        trigger: "Low blood Ca²⁺",
                        targets: ["Bone (osteoclasts)", "Kidney (reabsorb Ca²⁺)", "Intestine (via vitamin D)"],
                        effect: "Increases blood Ca²⁺",
                        disease: {
                            hyperparathyroidism: "Excess PTH → high blood Ca²⁺, bone loss",
                            hypoparathyroidism: "Low PTH → low blood Ca²⁺, muscle spasms"
                        }
                    },
                    calcitonin: {
                        source: "Parafollicular cells (C cells) in thyroid",
                        trigger: "High blood Ca²⁺",
                        effect: "Decreases blood Ca²⁺ (inhibits osteoclasts)",
                        note: "Minor role in adults; important in children"
                    },
                    vitamin_D: {
                        source: "Skin (UV converts 7-dehydrocholesterol) → liver → kidney (active form: calcitriol)",
                        function: "Increases intestinal Ca²⁺ absorption",
                        activation: "Stimulated by PTH",
                        deficiency: "Rickets (children), osteomalacia (adults)"
                    },
                    sex_hormones: {
                        estrogen: "Inhibits osteoclasts; protects bone in women",
                        menopause: "Decreased estrogen → bone loss (osteoporosis risk)",
                        testosterone: "Promotes bone formation; maintains density in men"
                    }
                },
                ageRelatedChanges: {
                    childhood: "Formation > resorption → net bone growth",
                    young_adult: "Peak bone mass ~30 years; formation = resorption",
                    middle_age: "Resorption slightly > formation (~0.5% loss/year)",
                    elderly: {
                        men: "Gradual bone loss",
                        women: "Accelerated loss after menopause (1-3%/year for 5-10 years)"
                    }
                },
                disorders: {
                    osteoporosis: {
                        definition: "Decreased bone mass and density; increased fracture risk",
                        causes: "Menopause, aging, low calcium/vitamin D, inactivity, smoking",
                        diagnosis: "DEXA scan (bone mineral density)",
                        prevention: "Weight-bearing exercise, adequate Ca²⁺/vitamin D, avoid smoking",
                        treatment: "Bisphosphonates (inhibit osteoclasts), hormone therapy, vitamin D"
                    },
                    osteomalacia_rickets: {
                        cause: "Vitamin D deficiency → inadequate mineralization",
                        rickets: "In children; soft, deformed bones",
                        osteomalacia: "In adults; bone pain, fractures"
                    },
                    pagets_disease: {
                        description: "Excessive, disorganized bone remodeling",
                        result: "Enlarged, weak, deformed bones",
                        treatment: "Bisphosphonates"
                    }
                },
                applications: [
                    "Osteoporosis prevention and treatment",
                    "Fracture healing (remodeling replaces callus with lamellar bone)",
                    "Orthodontics (teeth move by bone remodeling)",
                    "Understanding space travel effects on skeleton",
                    "Optimizing bone health through exercise and nutrition"
                ]
            },

            axial_skeleton: {
                title: "Axial Skeleton: Skull, Vertebral Column, and Thoracic Cage",
                concepts: [
                    "Axial skeleton forms body's central axis: 80 bones",
                    "Skull protects brain and forms face; 22 bones (8 cranial, 14 facial)",
                    "Vertebral column: 26 bones (33 vertebrae, some fused); supports body, protects spinal cord",
                    "Thoracic cage: 25 bones (sternum, 24 ribs); protects thoracic organs, aids breathing"
                ],
                theory: "The axial skeleton provides central support, protection of vital organs (brain, spinal cord, heart, lungs), and attachment sites for muscles. Understanding its anatomy is essential for clinical practice, radiology, and surgery.",
                keyDefinitions: {
                    "Axial Skeleton": "Central bones: skull, vertebral column, thoracic cage (80 bones)",
                    "Cranium": "8 bones forming braincase",
                    "Facial Bones": "14 bones forming face",
                    "Suture": "Immovable fibrous joint between skull bones",
                    "Fontanel": "Fibrous membrane between infant skull bones ('soft spot')",
                    "Vertebra": "Individual bone of spinal column",
                    "Intervertebral Disc": "Fibrocartilage cushion between vertebrae",
                    "True Ribs": "Ribs 1-7; attach directly to sternum",
                    "False Ribs": "Ribs 8-12; attach indirectly or not at all"
                },
                skull: {
                    total_bones: 22,
                    cranial_bones: {
                        count: 8,
                        bones: [
                            {name: "Frontal", number: 1, location: "Forehead", features: "Supraorbital margin, frontal sinuses"},
                            {name: "Parietal", number: 2, location: "Top and sides of skull", features: "Form calvaria (skullcap)"},
                            {name: "Temporal", number: 2, location: "Sides and base", features: "Zygomatic process, mastoid process, petrous part (houses ear)"},
                            {name: "Occipital", number: 1, location: "Back and base", features: "Foramen magnum (spinal cord passage), occipital condyles"},
                            {name: "Sphenoid", number: 1, location: "Base of skull", features: "Butterfly-shaped; sella turcica (pituitary fossa), sphenoid sinuses"},
                            {name: "Ethmoid", number: 1, location: "Between nasal cavity and orbits", features: "Cribriform plate (olfactory nerves), perpendicular plate (nasal septum)"}
                        ]
                    },
                    facial_bones: {
                        count: 14,
                        bones: [
                            {name: "Mandible", number: 1, location: "Lower jaw", features: "Only movable skull bone; mandibular condyle (TMJ)"},
                            {name: "Maxilla", number: 2, location: "Upper jaw", features: "Forms palate, holds upper teeth, maxillary sinuses"},
                            {name: "Zygomatic", number: 2, location: "Cheekbones", features: "Form lateral orbit"},
                            {name: "Nasal", number: 2, location: "Bridge of nose", features: "Small, rectangular"},
                            {name: "Lacrimal", number: 2, location: "Medial orbit", features: "Smallest facial bones; lacrimal fossa (tear duct)"},
                            {name: "Palatine", number: 2, location: "Posterior palate", features: "L-shaped; form hard palate"},
                            {name: "Inferior Nasal Conchae", number: 2, location: "Lateral nasal cavity", features: "Scroll-shaped; increase surface area"},
                            {name: "Vomer", number: 1, location: "Nasal septum", features: "Inferior part of nasal septum"}
                        ]
                    },
                    sutures: {
                        coronal: "Between frontal and parietal bones",
                        sagittal: "Between two parietal bones (midline)",
                        lambdoid: "Between occipital and parietal bones",
                        squamous: "Between temporal and parietal bones"
                    },
                    fontanels: {
                        anterior: "Between frontal and parietal; closes ~18-24 months",
                        posterior: "Between occipital and parietal; closes ~2-3 months",
                        function: "Allow skull compression during birth; accommodate brain growth"
                    },
                    foramina: {
                        foramen_magnum: "Occipital; spinal cord passage",
                        optic_canal: "Sphenoid; optic nerve (CN II)",
                        foramen_ovale: "Sphenoid; mandibular nerve (CN V₃)",
                        jugular_foramen: "Between temporal and occipital; internal jugular vein, cranial nerves IX, X, XI",
                        carotid_canal: "Temporal; internal carotid artery"
                    },
                    paranasal_sinuses: {
                        function: "Lighten skull, warm/humidify air, voice resonance",
                        sinuses: ["Frontal", "Maxillary (largest)", "Ethmoid", "Sphenoid"],
                        clinical: "Sinusitis - inflammation/infection of sinuses"
                    }
                },
                vertebral_column: {
                    total_bones: 26,
                    regions: [
                        {name: "Cervical", vertebrae: "C1-C7", number: 7, curvature: "Concave (lordosis)", features: "Small body, transverse foramina (vertebral arteries), bifid spinous process"},
                        {name: "Thoracic", vertebrae: "T1-T12", number: 12, curvature: "Convex (kyphosis)", features: "Medium body, long spinous process, costal facets (rib articulation)"},
                        {name: "Lumbar", vertebrae: "L1-L5", number: 5, curvature: "Concave (lordosis)", features: "Large body, short thick spinous process, bear most weight"},
                        {name: "Sacrum", vertebrae: "S1-S5 (fused)", number: 1, curvature: "Convex (kyphosis)", features: "Triangular, fused vertebrae, auricular surface (sacroiliac joint)"},
                        {name: "Coccyx", vertebrae: "3-5 (fused)", number: 1, curvature: "Convex", features: "Tailbone, vestigial"}
                    ],
                    functions: [
                        "Support body weight (transfer to pelvis and legs)",
                        "Protect spinal cord",
                        "Allow movement (flexion, extension, lateral flexion, rotation)",
                        "Attachment for ribs, muscles, ligaments",
                        "Shock absorption (intervertebral discs)"
                    ],
                    typical_vertebra: {
                        body: "Anterior weight-bearing part; size increases inferiorly",
                        vertebral_arch: "Posterior; encloses vertebral foramen",
                        vertebral_foramen: "Spinal cord passage; all foramina = vertebral canal",
                        pedicles: "Short projections from body; form sides of arch",
                        laminae: "Flat plates extending from pedicles; form roof of arch",
                        spinous_process: "Posterior projection; muscle/ligament attachment",
                        transverse_processes: "Lateral projections; muscle/ligament attachment",
                        superior_articular_processes: "Project upward; articulate with vertebra above",
                        inferior_articular_processes: "Project downward; articulate with vertebra below",
                        intervertebral_foramina: "Openings between adjacent vertebrae; spinal nerves exit"
                    },
                    special_vertebrae: {
                        C1_atlas: {
                            features: "No body or spinous process; ring-shaped",
                            superior_facets: "Articulate with occipital condyles (yes movement)",
                            inferior_facets: "Articulate with C2 axis"
                        },
                        C2_axis: {
                            features: "Dens (odontoid process) projects superiorly",
                            dens: "Pivot for atlas rotation (no movement)"
                        },
                        C7_vertebra_prominens: {
                            features: "Long, non-bifid spinous process; palpable landmark"
                        }
                    },
                    curvatures: {
                        primary: "Thoracic and sacral (convex posteriorly); present at birth",
                        secondary: "Cervical and lumbar (concave posteriorly); develop with posture",
                        cervical: "Develops when infant holds head up (~3-4 months)",
                        lumbar: "Develops when child walks (~12-18 months)",
                        abnormal: {
                            scoliosis: "Lateral curvature (abnormal)",
                            kyphosis: "Excessive thoracic curvature ('hunchback')",
                            lordosis: "Excessive lumbar curvature ('swayback')"
                        }
                    },
                    intervertebral_discs: {
                        location: "Between adjacent vertebral bodies (C2-sacrum)",
                        composition: {
                            nucleus_pulposus: "Gel-like center; ~88% water; shock absorption",
                            anulus_fibrosus: "Outer ring of fibrocartilage; contains nucleus"
                        },
                        function: "Cushion vertebrae, allow movement, absorb shock",
                        aging: "Nucleus loses water → decreased height, flexibility",
                        herniation: "Nucleus protrudes through torn anulus ('slipped disc'); compresses spinal nerves"
                    }
                },
                thoracic_cage: {
                    total_bones: 25,
                    components: ["Sternum (1)", "Ribs (24; 12 pairs)"],
                    functions: [
                        "Protect heart, lungs, great vessels",
                        "Support shoulder girdle",
                        "Breathing mechanics (ribs elevate/depress)"
                    ],
                    sternum: {
                        parts: {
                            manubrium: "Superior; articulates with clavicles and 1st rib",
                            body: "Middle; articulates with ribs 2-7",
                            xiphoid_process: "Inferior; cartilaginous; ossifies in adulthood"
                        },
                        landmarks: {
                            jugular_notch: "Superior border of manubrium; palpable",
                            sternal_angle: "Junction of manubrium and body; rib 2 attaches; T4-T5 vertebral level"
                        }
                    },
                    ribs: {
                        true_ribs: {
                            number: "1-7",
                            attachment: "Attach directly to sternum via costal cartilages"
                        },
                        false_ribs: {
                            number: "8-12",
                            ribs_8_10: "Attach indirectly to sternum (via rib 7 cartilage)",
                            ribs_11_12: "Floating ribs; no anterior attachment"
                        },
                        typical_rib: {
                            head: "Posterior; articulates with vertebral bodies",
                            tubercle: "Articulates with transverse process",
                            shaft: "Curved body",
                            costal_groove: "Inferior surface; houses intercostal vessels and nerve"
                        },
                        atypical_ribs: {
                            rib_1: "Shortest, broadest, most curved; tubercles for subclavian vessels",
                            ribs_11_12: "Only one articular facet on head; no tubercle or neck"
                        }
                    },
                    costal_cartilages: {
                        composition: "Hyaline cartilage",
                        function: "Connect ribs to sternum; allow flexibility for breathing",
                        calcification: "With age; decreases flexibility"
                    }
                },
                applications: [
                    "Radiology and imaging interpretation (X-rays, CT, MRI)",
                    "Neurosurgery (spinal cord access, decompression)",
                    "Orthopedic surgery (spinal fusion, fracture repair)",
                    "Forensic identification (skull features vary by ancestry, sex, age)",
                    "Understanding birth defects (spina bifida, cleft palate)"
                ]
            },

            appendicular_skeleton: {
                title: "Appendicular Skeleton: Limbs and Girdles",
                concepts: [
                    "Appendicular skeleton: 126 bones in limbs and girdles",
                    "Pectoral (shoulder) girdle: clavicle and scapula; attaches arms to axial skeleton",
                    "Upper limb: humerus, radius, ulna, carpals, metacarpals, phalanges (30 bones each)",
                    "Pelvic girdle: two hip bones (os coxae); attaches legs to axial skeleton",
                    "Lower limb: femur, patella, tibia, fibula, tarsals, metatarsals, phalanges (30 bones each)"
                ],
                theory: "The appendicular skeleton provides mobility and manipulation of the environment. The girdles anchor the limbs to the axial skeleton and transfer forces during movement.",
                keyDefinitions: {
                    "Appendicular Skeleton": "Bones of limbs and girdles (126 bones)",
                    "Pectoral Girdle": "Clavicle + scapula; attaches upper limb to thorax",
                    "Pelvic Girdle": "Two hip bones; attaches lower limb to sacrum",
                    "Girdle": "Ring of bones connecting limb to axial skeleton",
                    "Long Bone": "Bone longer than wide; contains diaphysis and epiphyses",
                    "Sesamoid Bone": "Bone within tendon (e.g., patella)"
                },
                pectoral_girdle: {
                    bones: ["Clavicle (2)", "Scapula (2)"],
                    total: 4,
                    function: "Attach upper limbs to axial skeleton; provide mobility for arm movement",
                    articulations: "Clavicle with sternum (sternoclavicular joint); clavicle with scapula (acromioclavicular joint); scapula with humerus (glenohumeral/shoulder joint)",
                    clavicle: {
                        shape: "S-shaped; 'collarbone'",
                        location: "Anterosuperior thorax; overlies 1st rib",
                        medial_end: "Sternal end; articulates with manubrium",
                        lateral_end: "Acromial end; articulates with scapula",
                        function: "Brace shoulder laterally; transmits forces from arm to axial skeleton",
                        fracture: "Most commonly fractured bone (direct blow or fall on outstretched arm)"
                    },
                    scapula: {
                        shape: "Flat, triangular; 'shoulder blade'",
                        location: "Posterior thorax (ribs 2-7)",
                        surfaces: {
                            anterior: "Subscapular fossa",
                            posterior: "Spine divides into supraspinous and infraspinous fossae"
                        },
                        borders: ["Superior", "Medial (vertebral)", "Lateral (axillary)"],
                        angles: ["Superior", "Inferior", "Lateral (glenoid cavity)"],
                        features: {
                            spine: "Posterior ridge; ends laterally in acromion",
                            acromion: "Articulates with clavicle; attachment for deltoid",
                            coracoid_process: "Anterior projection; muscle attachments",
                            glenoid_cavity: "Lateral; shallow socket for humerus head",
                            suprascapular_notch: "Superior border; nerve passage"
                        }
                    }
                },
                upper_limb: {
                    bones_per_limb: 30,
                    total_both: 60,
                    regions: ["Arm (brachium)", "Forearm (antebrachium)", "Wrist (carpus)", "Hand (metacarpus and phalanges)"],
                    arm: {
                        bone: "Humerus (1)",
                        description: "Longest and largest upper limb bone",
                        proximal_features: {
                            head: "Smooth, rounded; articulates with glenoid cavity",
                            anatomical_neck: "Groove below head",
                            greater_tubercle: "Lateral; attachment for rotator cuff",
                            lesser_tubercle: "Anterior; attachment for subscapularis",
                            intertubercular_groove: "Between tubercles; biceps tendon",
                            surgical_neck: "Below tubercles; common fracture site"
                        },
                        shaft: "Deltoid tuberosity (lateral; deltoid attachment); radial groove (posterior; radial nerve)",
                        distal_features: {
                            capitulum: "Lateral condyle; articulates with radius head",
                            trochlea: "Medial condyle; articulates with ulna",
                            medial_epicondyle: "Palpable; ulnar nerve ('funny bone')",
                            lateral_epicondyle: "Attachment for forearm extensors",
                            coronoid_fossa: "Anterior; receives ulna coronoid process (flexion)",
                            olecranon_fossa: "Posterior; receives ulna olecranon (extension)"
                        }
                    },
                    forearm: {
                        bones: "Radius (lateral) and Ulna (medial)",
                        radius: {
                            location: "Thumb side; rotates around ulna (pronation/supination)",
                            proximal: {
                                head: "Disc-shaped; articulates with capitulum",
                                radial_tuberosity: "Medial; biceps attachment"
                            },
                            distal: {
                                styloid_process: "Lateral; palpable at wrist",
                                articulation: "With scaphoid and lunate (wrist)"
                            }
                        },
                        ulna: {
                            location: "Pinky side; stationary during pronation/supination",
                            proximal: {
                                olecranon: "Posterior; 'elbow point'; triceps attachment",
                                coronoid_process: "Anterior; brachialis attachment",
                                trochlear_notch: "C-shaped; articulates with humerus trochlea",
                                radial_notch: "Lateral; articulates with radius head"
                            },
                            distal: {
                                head: "Small, rounded",
                                styloid_process: "Medial; palpable at wrist"
                            }
                        }
                    },
                    wrist: {
                        bones: "8 carpals in 2 rows",
                        proximal_row: ["Scaphoid", "Lunate", "Triquetrum", "Pisiform"],
                        distal_row: ["Trapezium", "Trapezoid", "Capitate", "Hamate"],
                        mnemonic: "Some Lovers Try Positions That They Can't Handle",
                        scaphoid: "Most commonly fractured carpal; poor blood supply"
                    },
                    hand: {
                        metacarpals: "5 bones (I-V; thumb to pinky); form palm",
                        phalanges: {
                            total: 14,
                            thumb: "2 phalanges (proximal, distal)",
                            fingers: "3 phalanges each (proximal, middle, distal)",
                            numbering: "I-V (thumb to pinky)"
                        }
                    }
                },
                pelvic_girdle: {
                    bones: "2 hip bones (os coxae); fused to sacrum and coccyx",
                    total: 2,
                    function: "Support body weight; protect pelvic organs; attach lower limbs to axial skeleton; childbirth (in females)",
                    hip_bone: {
                        formation: "Fusion of ilium, ischium, pubis (complete by age 23)",
                        acetabulum: "Deep socket where three bones fuse; articulates with femur head",
                        obturator_foramen: "Large opening; closed by membrane; nerves/vessels pass through"
                    },
                    ilium: {
                        description: "Superior, largest part; 'hip bone' you feel",
                        iliac_crest: "Superior curved border; palpable; muscle attachments",
                        iliac_fossa: "Medial concave surface; iliacus muscle",
                        auricular_surface: "Medial; articulates with sacrum (sacroiliac joint)",
                        ASIS: "Anterior superior iliac spine; palpable landmark",
                        AIIS: "Anterior inferior iliac spine",
                        PSIS: "Posterior superior iliac spine; dimples of Venus",
                        greater_sciatic_notch: "Posterior; sciatic nerve passage"
                    },
                    ischium: {
                        description: "Inferior, posterior part",
                        ischial_tuberosity: "Rough; 'sit bones'; bear weight when sitting",
                        ischial_spine: "Posterior projection; lesser sciatic notch",
                        ischial_ramus: "Joins pubic ramus to form obturator foramen"
                    },
                    pubis: {
                        description: "Anterior, inferior part",
                        pubic_symphysis: "Cartilaginous joint between two pubic bones (midline)",
                        superior_ramus: "Forms part of acetabulum",
                        inferior_ramus: "Joins ischial ramus",
                        pubic_tubercle: "Lateral to symphysis; inguinal ligament attachment"
                    },
                    sex_differences: {
                        female: {
                            general: "Lighter, shallower, wider; adapted for childbirth",
                            pelvic_inlet: "Wider, oval",
                            pelvic_outlet: "Wider",
                            subpubic_angle: ">80° (obtuse)",
                            acetabulum: "Smaller, faces more anteriorly",
                            obturator_foramen: "Oval",
                            ilium: "Less vertical, flared"
                        },
                        male: {
                            general: "Heavier, deeper, narrower",
                            pelvic_inlet: "Narrower, heart-shaped",
                            pelvic_outlet: "Narrower",
                            subpubic_angle: "<70° (acute)",
                            acetabulum: "Larger, faces laterally",
                            obturator_foramen: "Round",
                            ilium: "More vertical, less flared"
                        }
                    }
                },
                lower_limb: {
                    bones_per_limb: 30,
                    total_both: 60,
                    regions: ["Thigh (femur)", "Leg (tibia and fibula)", "Ankle (tarsals)", "Foot (metatarsals and phalanges)"],
                    thigh: {
                        bone: "Femur (1)",
                        description: "Longest, heaviest, strongest bone in body",
                        proximal: {
                            head: "Ball; articulates with acetabulum",
                            fovea_capitis: "Pit on head; ligament attachment",
                            neck: "Connects head to shaft; fracture-prone in elderly",
                            greater_trochanter: "Lateral; palpable; muscle attachments",
                            lesser_trochanter: "Medial, posterior; iliopsoas attachment",
                            intertrochanteric_line: "Anterior; between trochanters",
                            intertrochanteric_crest: "Posterior; between trochanters"
                        },
                        shaft: "Linea aspera (posterior ridge; muscle attachments)",
                        distal: {
                            medial_condyle: "Articulates with tibia",
                            lateral_condyle: "Articulates with tibia",
                            intercondylar_fossa: "Posterior depression; cruciate ligaments",
                            patellar_surface: "Anterior; articulates with patella",
                            medial_epicondyle: "Above medial condyle",
                            lateral_epicondyle: "Above lateral condyle"
                        }
                    },
                    patella: {
                        description: "Sesamoid bone in quadriceps tendon; 'kneecap'",
                        function: "Increases leverage of quadriceps; protects knee joint"
                    },
                    leg: {
                        bones: "Tibia (medial) and Fibula (lateral)",
                        tibia: {
                            description: "'Shinbone'; bears body weight",
                            proximal: {
                                medial_condyle: "Articulates with femur",
                                lateral_condyle: "Articulates with femur",
                                tibial_tuberosity: "Anterior; patellar ligament attachment; palpable",
                                intercondylar_eminence: "Between condyles; cruciate attachments"
                            },
                            shaft: "Anterior border ('shin'); sharp, palpable",
                            distal: {
                                medial_malleolus: "Medial ankle bump; palpable",
                                inferior_articular_surface: "Articulates with talus"
                            }
                        },
                        fibula: {
                            description: "Slender; lateral; does NOT bear weight",
                            function: "Muscle attachment; lateral ankle stability",
                            proximal: {
                                head: "Articulates with tibia (not part of knee joint)"
                            },
                            distal: {
                                lateral_malleolus: "Lateral ankle bump; palpable; articulates with talus"
                            }
                        }
                    },
                    ankle: {
                        bones: "7 tarsals",
                        talus: "Articulates with tibia and fibula; only tarsal in ankle joint; no muscle attachments",
                        calcaneus: "Heel bone; largest tarsal; Achilles tendon attachment; bears weight",
                        navicular: "Medial; 'boat-shaped'",
                        cuboid: "Lateral",
                        cuneiforms: "3 bones (medial, intermediate, lateral); articulate with metatarsals 1-3"
                    },
                    foot: {
                        metatarsals: "5 bones (I-V; big toe to little toe)",
                        phalanges: {
                            total: 14,
                            big_toe: "2 phalanges (proximal, distal)",
                            other_toes: "3 phalanges each (proximal, middle, distal)"
                        },
                        arches: {
                            medial_longitudinal: "Highest; calcaneus to metatarsals I-III; shock absorption",
                            lateral_longitudinal: "Lower; calcaneus to metatarsals IV-V; weight bearing",
                            transverse: "Across metatarsals; forms 'ball' of foot",
                            flatfoot: "Collapsed arches"
                        }
                    }
                },
                applications: [
                    "Orthopedic surgery (joint replacement, fracture repair)",
                    "Sports medicine (understanding injuries)",
                    "Prosthetic limb design",
                    "Forensic anthropology (sex determination from pelvis)",
                    "Physical therapy (range of motion, strengthening)"
                ]
            },

            joints_articulations: {
                title: "Joints and Articulations: Classification, Structure, and Movement",
                concepts: [
                    "Joints (articulations) are sites where two or more bones meet",
                    "Classified structurally (fibrous, cartilaginous, synovial) and functionally (synarthrosis, amphiarthrosis, diarthrosis)",
                    "Synovial joints are freely movable and most common in limbs",
                    "Six types of synovial joints based on shape and movement",
                    "Ligaments stabilize joints; damage causes instability"
                ],
                theory: "Joints allow varying degrees of movement while maintaining skeletal integrity. Understanding joint structure and function is essential for analyzing movement, treating injuries, and managing arthritis.",
                keyDefinitions: {
                    "Joint (Articulation)": "Site where two or more bones meet",
                    "Synarthrosis": "Immovable joint (e.g., skull sutures)",
                    "Amphiarthrosis": "Slightly movable joint (e.g., pubic symphysis)",
                    "Diarthrosis": "Freely movable joint (e.g., knee, shoulder)",
                    "Fibrous Joint": "Bones joined by dense connective tissue; no cavity",
                    "Cartilaginous Joint": "Bones joined by cartilage; no cavity",
                    "Synovial Joint": "Bones separated by fluid-filled cavity; freely movable",
                    "Ligament": "Dense connective tissue connecting bone to bone",
                    "Tendon": "Dense connective tissue connecting muscle to bone"
                },
                structuralClassification: {
                    fibrous: {
                        characteristics: "No joint cavity; bones joined by dense connective tissue",
                        types: {
                            suture: {
                                location: "Skull only",
                                structure: "Interlocking edges united by very short connective tissue fibers",
                                movement: "Synarthrosis (immovable)",
                                example: "Coronal, sagittal, lambdoid sutures",
                                fate: "Ossify in middle age (synostosis)"
                            },
                            syndesmosis: {
                                structure: "Bones connected by ligament or interosseous membrane",
                                movement: "Amphiarthrosis (slight movement)",
                                examples: ["Tibiofibular joint (distal)", "Radioulnar joint (interosseous membrane)"]
                            },
                            gomphosis: {
                                location: "Teeth in alveolar sockets",
                                structure: "Peg-in-socket; periodontal ligament",
                                movement: "Synarthrosis (immovable)",
                                example: "Tooth in jaw"
                            }
                        }
                    },
                    cartilaginous: {
                        characteristics: "No joint cavity; bones joined by cartilage",
                        types: {
                            synchondrosis: {
                                structure: "Bones joined by hyaline cartilage",
                                movement: "Synarthrosis (immovable)",
                                examples: ["Epiphyseal plates (temporary)", "Sternocostal joint (rib 1 to sternum)", "Spheno-occipital synchondrosis"],
                                fate: "Most ossify (become synostoses)"
                            },
                            symphysis: {
                                structure: "Bones joined by fibrocartilage pad",
                                movement: "Amphiarthrosis (slight movement)",
                                examples: ["Pubic symphysis", "Intervertebral discs", "Manubriosternal joint"],
                                characteristics: "Strong, compressible, shock-absorbing"
                            }
                        }
                    },
                    synovial: {
                        characteristics: "Fluid-filled joint cavity; freely movable; most common in appendicular skeleton",
                        movement: "Diarthrosis (freely movable)",
                        distinguishing_features: [
                            "Articular cartilage (hyaline) on bone ends",
                            "Joint (synovial) cavity filled with synovial fluid",
                            "Articular capsule (2 layers)",
                            "Reinforcing ligaments",
                            "Rich nerve and blood supply"
                        ],
                        components: {
                            articular_cartilage: {
                                type: "Hyaline cartilage",
                                location: "Covers articulating bone surfaces",
                                function: "Reduce friction, absorb shock",
                                avascular: "No blood vessels; nutrients from synovial fluid"
                            },
                            joint_cavity: {
                                description: "Small space between bones",
                                contents: "Synovial fluid"
                            },
                            articular_capsule: {
                                layers: {
                                    fibrous_layer: "Outer; dense irregular CT; continuous with periosteum",
                                    synovial_membrane: "Inner; loose CT; secretes synovial fluid; lines all internal surfaces except cartilage"
                                },
                                reinforcements: "Ligaments (intrinsic or extrinsic)"
                            },
                            synovial_fluid: {
                                source: "Filtered blood plasma + hyaluronic acid (from synovial membrane)",
                                characteristics: "Viscous, slippery ('egg white')",
                                functions: [
                                    "Lubrication (reduce friction)",
                                    "Nutrient/waste exchange for cartilage",
                                    "Shock absorption",
                                    "Contains phagocytes (remove debris)"
                                ],
                                weeping_lubrication: "Compression squeezes fluid from cartilage → lubricates surface"
                            },
                            reinforcing_ligaments: {
                                capsular: "Thickenings of fibrous capsule",
                                extracapsular: "Outside capsule",
                                intracapsular: "Inside capsule (e.g., cruciate ligaments in knee)",
                                function: "Strengthen joint, prevent excessive movement"
                            }
                        },
                        accessory_structures: {
                            menisci: {
                                description: "C-shaped pads of fibrocartilage",
                                location: "Knee (medial and lateral menisci)",
                                function: "Improve fit, stabilize, shock absorption"
                            },
                            bursae: {
                                description: "Flattened fibrous sacs lined with synovial membrane; filled with fluid",
                                location: "Between skin and bone, tendon and bone, muscle and bone",
                                function: "Reduce friction during movement",
                                example: "Prepatellar bursa (front of knee); olecranon bursa (elbow)",
                                inflammation: "Bursitis (painful swelling)"
                            },
                            tendon_sheaths: {
                                description: "Elongated bursae wrapped around tendons",
                                location: "Wrist, ankle, fingers",
                                function: "Reduce friction where tendons cross joints"
                            }
                        },
                        types: {
                            plane: {
                                structure: "Flat or slightly curved surfaces slide past each other",
                                movement: "Gliding (nonaxial)",
                                examples: ["Intercarpal joints", "Intertarsal joints", "Between vertebral articular processes"],
                                range: "Limited movement"
                            },
                            hinge: {
                                structure: "Convex surface fits into concave surface",
                                movement: "Flexion and extension (uniaxial)",
                                examples: ["Elbow (humeroulnar)", "Knee (modified hinge)", "Ankle", "Interphalangeal joints"],
                                analogy: "Door hinge"
                            },
                            pivot: {
                                structure: "Rounded surface rotates within ring",
                                movement: "Rotation (uniaxial)",
                                examples: ["Atlantoaxial joint (C1-C2; 'no' movement)", "Proximal radioulnar joint (supination/pronation)"],
                                axis: "Longitudinal axis"
                            },
                            condylar: {
                                structure: "Oval convex surface fits into oval concave surface",
                                movement: "Flexion/extension, abduction/adduction, circumduction (biaxial)",
                                examples: ["Metacarpophalangeal joints (knuckles)", "Wrist (radiocarpal)", "Temporomandibular joint (TMJ)"],
                                note: "No rotation"
                            },
                            saddle: {
                                structure: "Both surfaces saddle-shaped (concave and convex)",
                                movement: "Flexion/extension, abduction/adduction, circumduction, limited rotation (biaxial)",
                                example: "Carpometacarpal joint of thumb (trapezium-metacarpal I)",
                                function: "Allows opposable thumb"
                            },
                            ball_and_socket: {
                                structure: "Spherical head fits into cup-like socket",
                                movement: "Flexion/extension, abduction/adduction, circumduction, rotation (multiaxial)",
                                examples: ["Shoulder (glenohumeral)", "Hip (acetabulofemoral)"],
                                range: "Greatest range of motion"
                            }
                        }
                    }
                },
                movements: {
                    gliding: "Flat surfaces slide past each other (plane joints)",
                    angular: {
                        flexion: "Decrease angle between bones (e.g., bend elbow)",
                        extension: "Increase angle between bones (e.g., straighten elbow)",
                        hyperextension: "Extension beyond anatomical position",
                        abduction: "Move away from midline (e.g., raise arm laterally)",
                        adduction: "Move toward midline (e.g., lower arm to side)",
                        circumduction: "Combination; circular movement (flexion+extension+abduction+adduction)"
                    },
                    rotation: {
                        medial: "Rotate toward midline (internal rotation)",
                        lateral: "Rotate away from midline (external rotation)"
                    },
                    special: {
                        supination: "Forearm rotation; palm up",
                        pronation: "Forearm rotation; palm down",
                        dorsiflexion: "Ankle; toes up",
                        plantarflexion: "Ankle; toes down (point toes)",
                        inversion: "Sole of foot medially",
                        eversion: "Sole of foot laterally",
                        protraction: "Move anteriorly (e.g., jut jaw)",
                        retraction: "Move posteriorly (e.g., pull jaw back)",
                        elevation: "Move superiorly (e.g., shrug shoulders)",
                        depression: "Move inferiorly (e.g., drop shoulders)",
                        opposition: "Thumb touches fingertips"
                    }
                },
                stability_vs_mobility: {
                    factors_influencing_stability: [
                        "Shape of articulating surfaces (deeper socket = more stable)",
                        "Number and positioning of ligaments",
                        "Muscle tone (muscles crossing joint)"
                    ],
                    shoulder: {
                        stability: "Low (shallow glenoid cavity)",
                        mobility: "High (wide range of motion)",
                        trade_off: "Most commonly dislocated joint"
                    },
                    hip: {
                        stability: "High (deep acetabulum)",
                        mobility: "Moderate",
                        trade_off: "More stable than shoulder but less mobile"
                    }
                },
                disorders: {
                    arthritis: {
                        osteoarthritis: {
                            description: "Degenerative joint disease; 'wear and tear'",
                            cause: "Breakdown of articular cartilage",
                            symptoms: "Pain, stiffness, decreased range of motion",
                            treatment: "Pain management, exercise, joint replacement"
                        },
                        rheumatoid_arthritis: {
                            description: "Autoimmune disease; inflammation of synovial membrane",
                            cause: "Immune system attacks joint tissues",
                            symptoms: "Swelling, pain, deformity, systemic effects",
                            treatment: "Anti-inflammatory drugs, immunosuppressants"
                        }
                    },
                    sprain: {
                        description: "Stretching or tearing of ligaments",
                        cause: "Excessive stress on joint (e.g., ankle inversion)",
                        severity: "Grade I (mild stretch) to III (complete tear)",
                        treatment: "RICE (rest, ice, compression, elevation), immobilization"
                    },
                    dislocation: {
                        description: "Bones forced out of alignment",
                        common_sites: "Shoulder, finger, jaw",
                        symptoms: "Deformity, pain, loss of function",
                        treatment: "Reduction (realignment), immobilization"
                    },
                    bursitis: {
                        description: "Inflammation of bursa",
                        cause: "Overuse, trauma, infection",
                        symptoms: "Swelling, pain, limited movement",
                        treatment: "Rest, anti-inflammatories, aspiration"
                    }
                },
                applications: [
                    "Joint replacement surgery (hip, knee)",
                    "Sports medicine (ligament injuries, dislocations)",
                    "Physical therapy (range of motion exercises)",
                    "Understanding aging effects on joints",
                    "Designing prosthetic joints and exoskeletons"
                ]
            }
        };
    }

 


initializeMisconceptionDatabase() {
    this.commonMisconceptions = {
        bone_structure: {
            'Living vs Dead Tissue': [
                'Thinking bones are dead (bones are living, dynamic tissue with cells and blood vessels)',
                'Believing bones don\'t change after adulthood (continuous remodeling throughout life)',
                'Confusing dry museum bones with living bones (living bones have blood, marrow, periosteum)'
            ],
            'Bone Composition': [
                'Thinking bones are entirely mineral (organic collagen matrix provides flexibility)',
                'Believing all bones are solid (many have marrow cavities; trabecular bone is porous)',
                'Confusing bone strength with brittleness (balance of minerals for hardness and collagen for flexibility)'
            ]
        },
        
        bone_development: {
            'Growth': [
                'Thinking bones grow from the ends outward (growth plates are between diaphysis and epiphysis)',
                'Believing all bones ossify at same rate (different bones have different timelines)',
                'Confusing bone lengthening with bone widening (longitudinal growth at epiphyseal plate; appositional growth at periosteum)',
                'Thinking growth plates are at very ends of bones (they\'re in metaphysis, not extreme ends)'
            ],
            'Ossification': [
                'Believing all bones form from cartilage (flat bones form via intramembranous ossification)',
                'Thinking babies have more bones than adults because they\'re smaller (babies have ~270 bones, adults ~206 due to fusion)'
            ]
        },
        
        bone_remodeling: {
            'Wolff\'s Law': [
                'Thinking exercise only helps while exercising (bone density gains persist if activity continues)',
                'Believing bones can\'t change shape after childhood (remodeling continues throughout life)',
                'Confusing muscle hypertrophy (fast) with bone remodeling (slow - months to years)'
            ],
            'Calcium Homeostasis': [
                'Thinking calcium supplements alone prevent osteoporosis (need vitamin D, exercise, and adequate protein too)',
                'Believing osteoporosis only affects women (men get it too, especially with aging)',
                'Confusing dietary calcium with blood calcium (bone serves as reservoir to maintain constant blood Ca²⁺)'
            ]
        },
        
        skeletal_anatomy: {
            'Bone Count': [
                'Thinking adults have exactly 206 bones (some people have extra ribs, fused vertebrae - slight variation)',
                'Confusing sesamoid bones (like patella) with regular bones (sesamoids develop in tendons)'
            ],
            'Spine': [
                'Believing spine is straight from side view (has natural curves: cervical and lumbar concave, thoracic and sacral convex)',
                'Thinking all vertebrae are same shape (cervical, thoracic, lumbar, sacral differ)',
                'Confusing number of vertebrae with number of bones (33 vertebrae; 26 bones in adult due to fusion)'
            ],
            'Skull': [
                'Thinking skull is one bone (22 bones in adult skull, 8 cranial + 14 facial)',
                'Believing fontanels are permanent (they close by age 2)',
                'Confusing cranium with skull (cranium = 8 bones forming braincase; skull = cranium + facial bones)'
            ]
        },
        
        joints: {
            'Joint Movement': [
                'Thinking all joints move freely (fibrous and cartilaginous joints have little/no movement)',
                'Believing "cracking knuckles" causes arthritis (no evidence for this)',
                'Confusing ligaments with tendons (ligaments connect bone-to-bone; tendons connect muscle-to-bone)'
            ],
            'Cartilage': [
                'Thinking cartilage regenerates easily (very limited blood supply → slow/poor healing)',
                'Believing meniscus is a bone (it\'s fibrocartilage)',
                'Confusing articular cartilage with growth plate cartilage (different types, different functions)'
            ]
        }
    };

    this.clarificationStrategies = {
        compare_living_vs_museum_bone: {
            method: 'Show images of fresh bone (with periosteum, blood) vs dry bone',
            effectiveness: 'High for dispelling "bones are dead" misconception'
        },
        demonstrate_flexibility: {
            method: 'Soak bone in vinegar (removes minerals) → flexible; burn bone (removes collagen) → brittle',
            effectiveness: 'Very high for understanding organic/inorganic matrix'
        },
        growth_plate_model: {
            method: 'Use diagram showing zones of epiphyseal plate',
            effectiveness: 'High for understanding longitudinal growth mechanism'
        },
        skeleton_assembly: {
            method: 'Assemble disarticulated skeleton or use 3D model',
            effectiveness: 'High for learning bone names, positions, articulations'
        }
    };
}

initializeMetacognitivePrompts() {
    this.metacognitivePrompts = {
        beforeLearning: [
            "What do you already know about the skeletal system?",
            "How many bones do you think an adult human has?",
            "What functions does the skeleton serve besides support?",
            "What questions do you have about bones and joints?"
        ],
        duringLearning: [
            "How does this bone's shape relate to its function?",
            "Can you feel this bone on your own body (palpate)?",
            "How might this structure change with age or disease?",
            "What clinical conditions might affect this bone or joint?"
        ],
        afterLearning: [
            "What were the most important concepts about {topic}?",
            "How does {topic} connect to other body systems?",
            "What surprised you about skeletal anatomy/physiology?",
            "How would you explain {concept} to someone without using technical terms?"
        ],
        problemSolving: [
            "What bones would be affected by this injury?",
            "How would you distinguish this bone from a similar one?",
            "What movements occur at this joint?",
            "How does this relate to what you've learned about bone structure/development/remodeling?"
        ]
    };
}

initializeContextualScenarios() {
    this.contextualScenarios = {
        bone_structure: [
            {
                scenario: "Osteoporosis in Elderly",
                context: "70-year-old woman falls and fractures hip",
                application: "Loss of trabecular bone reduces strength; hip fracture common site",
                question: "Why are hip fractures so common and dangerous in elderly?"
            },
            {
                scenario: "Scurvy (Vitamin C Deficiency)",
                context: "Sailor on long voyage develops bleeding gums, bone pain",
                application: "Vitamin C needed for collagen synthesis → weak bones and connective tissue",
                question: "Why does vitamin C deficiency affect bones and gums?"
            }
        ],
        
        bone_development: [
            {
                scenario: "Growth Hormone Deficiency",
                context: "Child with very short stature",
                application: "Growth hormone stimulates epiphyseal plate → lack of GH stops longitudinal growth",
                question: "Why doesn't this child grow normally despite adequate nutrition?"
            },
            {
                scenario: "Premature Epiphyseal Closure",
                context: "Adolescent exposed to high estrogen levels",
                application: "Sex hormones cause growth plate fusion → growth stops early",
                question: "Why would early puberty result in shorter adult height?"
            }
        ],
        
        bone_remodeling: [
            {
                scenario: "Astronaut Bone Loss",
                context: "Astronaut loses 1-2% bone mass per month in space",
                application: "Microgravity → no weight-bearing load → Wolff's Law → bone resorption exceeds formation",
                question: "Why do astronauts lose bone density in space despite exercising?"
            },
            {
                scenario: "Hyperparathyroidism",
                context: "Patient with high blood calcium, bone pain, kidney stones",
                application: "Parathyroid tumor → excess PTH → excessive bone resorption → high Ca²⁺, weak bones",
                question: "How does one gland cause both bone and kidney problems?"
            }
        ],
        
        joints: [
            {
                scenario: "Anterior Cruciate Ligament (ACL) Tear",
                context: "Soccer player feels knee 'pop' during pivot, knee unstable",
                application: "ACL prevents anterior displacement of tibia; tear → instability",
                question: "Why can't athlete bear weight on knee after ACL tear?"
            },
            {
                scenario: "Rheumatoid Arthritis",
                context: "Patient with symmetric joint pain, morning stiffness, swelling",
                application: "Autoimmune attack on synovial membrane → inflammation → joint damage",
                question: "Why does RA affect multiple joints symmetrically?"
            }
        ]
    };
}

initializeAssessmentRubrics() {
    this.assessmentRubrics = {
        knowledgeLevel: {
            remember: {
                description: "Recall anatomical terms, bone names, structures",
                verbs: ["Name", "List", "Identify", "Label", "Define"],
                example: "Name the bones of the skull"
            },
            understand: {
                description: "Explain relationships, functions, processes",
                verbs: ["Explain", "Describe", "Compare", "Classify", "Summarize"],
                example: "Explain how compact and spongy bone differ in structure and function"
            },
            apply: {
                description: "Use anatomical knowledge in clinical scenarios",
                verbs: ["Apply", "Demonstrate", "Predict", "Calculate", "Solve"],
                example: "Predict which bones would be affected by a vitamin D deficiency"
            },
            analyze: {
                description: "Break down complex structures, compare/contrast",
                verbs: ["Analyze", "Differentiate", "Organize", "Relate", "Distinguish"],
                example: "Analyze how pelvic structure differs between males and females and explain why"
            },
            evaluate: {
                description: "Make judgments about diagnoses, treatments",
                verbs: ["Evaluate", "Critique", "Judge", "Justify", "Assess"],
                example: "Evaluate the evidence for exercise preventing osteoporosis"
            },
            create: {
                description: "Design experiments, develop treatment plans",
                verbs: ["Design", "Construct", "Develop", "Formulate", "Create"],
                example: "Design an exercise program to maximize bone health in postmenopausal woman"
            }
        },
        
        assessmentQuestions: {
            bone_structure: {
                remember: "List the three types of bone cells and their locations",
                understand: "Explain why long bones are hollow rather than solid",
                apply: "Predict how lack of vitamin D would affect bone matrix composition",
                analyze: "Compare compact and spongy bone in terms of structure, location, and function",
                evaluate: "Evaluate whether bisphosphonates or calcium supplements are better for osteoporosis",
                create: "Design an experiment to test whether exercise increases osteoblast activity"
            },
            bone_development: {
                remember: "Define endochondral ossification",
                understand: "Explain how growth plates allow bones to lengthen",
                apply: "Use epiphyseal fusion data to estimate age of skeletal remains",
                analyze: "Analyze how intramembranous and endochondral ossification differ",
                evaluate: "Evaluate whether growth hormone therapy is appropriate for short stature",
                create: "Develop a timeline of skeletal development from embryo to adult"
            },
            // Similar for other topics...
        }
    };
}


// ========================================
// HANDLER METHODS FOR EACH TOPIC - FULL IMPLEMENTATION
// ========================================

handleBoneStructure(problem) {
    const content = {
        topic: "Bone Structure and Histology",
        category: 'bone_tissue',
        summary: "Bone is a specialized connective tissue composed of cells (osteoblasts, osteocytes, osteoclasts), organic matrix (primarily type I collagen), and inorganic mineral crystals (hydroxyapatite). It exists in two structural forms: compact (dense, cortical) bone and spongy (trabecular, cancellous) bone.",
        
        classification: {
            byStructure: {
                compactBone: {
                    description: "Dense, solid bone forming outer layer of all bones",
                    percentage: "~80% of skeletal mass",
                    location: "Outer surface of all bones; shaft (diaphysis) of long bones",
                    structure: "Organized into osteons (Haversian systems)",
                    porosity: "~10%",
                    function: "Provides strength, protection, resistance to bending and torsion"
                },
                spongyBone: {
                    description: "Porous, lattice-like bone with trabeculae",
                    percentage: "~20% of skeletal mass",
                    location: "Interior of flat bones, short bones, irregular bones; ends (epiphyses) of long bones",
                    structure: "Branching trabeculae oriented along stress lines; no osteons",
                    porosity: "~50-90%",
                    function: "Reduces weight, houses bone marrow, distributes forces"
                }
            },
            
            byShape: {
                longBones: {
                    description: "Longer than wide; cylindrical shaft with enlarged ends",
                    examples: ["Femur (thigh)", "Humerus (upper arm)", "Tibia (shin)", "Radius/Ulna (forearm)", "Metacarpals (hand)", "Metatarsals (foot)", "Phalanges (fingers/toes)"],
                    structure: "Diaphysis (shaft) of compact bone surrounding medullary cavity; epiphyses (ends) of spongy bone covered by compact bone",
                    function: "Lever systems for movement"
                },
                shortBones: {
                    description: "Cube-shaped; approximately equal in length, width, height",
                    examples: ["Carpals (wrist)", "Tarsals (ankle)", "Patella (sesamoid in knee)"],
                    structure: "Spongy bone core covered by thin layer of compact bone",
                    function: "Stability with limited mobility; absorb shock"
                },
                flatBones: {
                    description: "Thin, flat, often curved",
                    examples: ["Skull bones", "Ribs", "Sternum", "Scapula (shoulder blade)", "Ilium (hip)"],
                    structure: "Two layers of compact bone (tables) sandwich spongy bone (diploe in skull)",
                    function: "Protection of organs; broad surface for muscle attachment"
                },
                irregularBones: {
                    description: "Complex shapes that don't fit other categories",
                    examples: ["Vertebrae", "Facial bones", "Hip bones (pelvis)", "Calcaneus (heel)"],
                    structure: "Variable; spongy bone with thin compact bone covering",
                    function: "Varied functions - protection, support, attachment"
                },
                sesamoidBones: {
                    description: "Small bones embedded in tendons",
                    examples: ["Patella (largest)", "Pisiform (wrist)", "Small bones in hands/feet"],
                    structure: "Compact bone surrounding spongy core",
                    function: "Protect tendons from wear; improve mechanical advantage"
                }
            }
        },
        
        macroscopicAnatomy: {
            longBoneStructure: {
                diaphysis: {
                    description: "Shaft - long, cylindrical main portion",
                    structure: "Thick collar of compact bone surrounding medullary cavity",
                    function: "Provides leverage; resists bending"
                },
                epiphyses: {
                    description: "Enlarged ends - proximal and distal",
                    structure: "Thin layer of compact bone covering spongy bone interior",
                    articular_cartilage: "Hyaline cartilage covering joint surfaces",
                    function: "Articulation with adjacent bones; weight distribution; muscle attachment"
                },
                metaphysis: {
                    description: "Region between diaphysis and epiphysis",
                    structure: "Funnel-shaped area; transition from shaft to end",
                    growth_plate: "Contains epiphyseal plate in growing bone (children/adolescents)",
                    epiphyseal_line: "Remnant of growth plate in adults (ossified)"
                },
                articular_cartilage: {
                    type: "Hyaline cartilage",
                    thickness: "1-7 mm depending on joint and loading",
                    characteristics: "Smooth, glassy; no perichondrium",
                    function: "Reduces friction; absorbs shock during movement",
                    avascular: "No blood vessels - nutrients from synovial fluid",
                    healing: "Poor healing capacity due to lack of blood supply"
                },
                periosteum: {
                    description: "Fibrous membrane covering outer bone surface (except articular cartilage)",
                    layers: {
                        outer_fibrous: "Dense irregular connective tissue; attachment for tendons/ligaments",
                        inner_osteogenic: "Contains osteogenic cells → osteoblasts; bone growth and repair"
                    },
                    perforating_fibers: "Sharpey's fibers - anchor periosteum to bone",
                    innervation: "Rich nerve supply - bone pain originates here",
                    blood_vessels: "Nutrient arteries penetrate to supply bone"
                },
                endosteum: {
                    description: "Delicate membrane lining internal bone surfaces",
                    location: "Lines medullary cavity, trabeculae, canals",
                    cells: "Osteogenic cells, osteoblasts, osteoclasts",
                    function: "Bone growth (thickness), remodeling, repair"
                },
                medullary_cavity: {
                    description: "Central cavity in diaphysis",
                    contents_child: "Red bone marrow (hematopoietic - produces blood cells)",
                    contents_adult: "Yellow bone marrow (adipose tissue - fat storage)",
                    conversion: "Yellow marrow can convert back to red if severe blood loss"
                }
            },
            
            boneMarrow: {
                red_marrow: {
                    description: "Hematopoietic tissue - produces blood cells",
                    location_infant: "All bones",
                    location_adult: "Flat bones (skull, vertebrae, ribs, sternum, pelvis), proximal epiphyses of femur/humerus",
                    production: "~500 billion blood cells per day",
                    cell_types: "RBCs (erythrocytes), WBCs (leukocytes), platelets (thrombocytes)"
                },
                yellow_marrow: {
                    description: "Adipose (fat) tissue",
                    location: "Medullary cavities of long bones in adults",
                    function: "Energy storage; can revert to red marrow if needed",
                    conversion: "Severe blood loss, chronic hypoxia → yellow to red"
                }
            }
        },
        
        microscopicAnatomy: {
            compactBone_osteon: {
                description: "Structural unit of compact bone; also called Haversian system",
                components: {
                    central_canal: {
                        description: "Haversian canal - central channel running longitudinally",
                        diameter: "~50 μm",
                        contents: "Blood vessels (arterioles, capillaries, venules), nerves, lymphatics",
                        function: "Supplies nutrients; removes wastes; innervation"
                    },
                    concentric_lamellae: {
                        description: "Concentric rings of bone matrix around central canal",
                        number: "3-20 lamellae per osteon",
                        composition: "Collagen fibers in mineralized matrix",
                        orientation: "Collagen fibers in each lamella run parallel; adjacent lamellae have different orientations",
                        function: "Alternating fiber directions resist torsion and bending"
                    },
                    lacunae: {
                        description: "Small cavities between lamellae",
                        size: "~15-20 μm",
                        contents: "One osteocyte per lacuna",
                        distribution: "~20,000-30,000 osteocytes per mm³ of bone"
                    },
                    canaliculi: {
                        description: "Tiny channels radiating from lacunae",
                        diameter: "~0.2-0.3 μm",
                        contents: "Osteocyte cell processes; interstitial fluid",
                        function: "Connect osteocytes to each other and to central canal; nutrient/waste exchange",
                        communication: "Gap junctions between osteocyte processes allow cell-cell signaling"
                    },
                    interstitial_lamellae: {
                        description: "Incomplete, fragmented rings between intact osteons",
                        origin: "Remnants of old osteons partially destroyed during remodeling",
                        function: "Fill spaces between osteons; structural integrity"
                    },
                    circumferential_lamellae: {
                        description: "Layers extending around entire bone circumference",
                        outer: "Just deep to periosteum",
                        inner: "Lining medullary cavity",
                        function: "Resist twisting of whole bone; anchor osteons"
                    }
                },
                perforating_canals: {
                    description: "Volkmann's canals - perpendicular to central canals",
                    orientation: "Run transversely or obliquely",
                    function: "Connect central canals to each other and to periosteum/endosteum; blood vessels enter/exit",
                    no_lamellae: "Not surrounded by concentric lamellae (unlike central canals)"
                }
            },
            
            spongyBone_trabeculae: {
                description: "Branching, interconnecting plates (trabeculae) forming 3D lattice",
                structure: {
                    no_osteons: "No osteons - trabeculae too thin",
                    irregular_lamellae: "Few irregular lamellae",
                    osteocytes: "Osteocytes in lacunae connected by canaliculi",
                    nutrient_source: "Nutrients diffuse from blood in marrow spaces (no central canals needed)"
                },
                orientation: {
                    principle: "Trabeculae align along lines of stress (compression and tension)",
                    evidence: "Wolff's Law - bone adapts to mechanical loading",
                    examples: {
                        femoral_head: "Medial and lateral trabecular systems correspond to compression trajectories",
                        vertebral_body: "Vertical trabeculae resist compression; horizontal resist buckling",
                        calcaneus: "Trabeculae oriented along heel-strike forces"
                    }
                },
                spaces: {
                    description: "Open spaces between trabeculae",
                    contents: "Red bone marrow (hematopoietic tissue)",
                    function: "Blood cell production; reduces bone weight"
                },
                advantages: {
                    lightweight: "Honeycomb structure - high strength-to-weight ratio",
                    metabolic: "Large surface area for rapid mineral exchange",
                    hematopoietic: "Houses red marrow for blood cell production"
                }
            }
        },
        
        cellularComponents: {
            osteogenic_cells: {
                description: "Bone stem cells",
                location: "Periosteum (inner layer), endosteum, lining bone surfaces",
                morphology: "Spindle-shaped, flattened",
                mitotic: "Yes - can divide",
                differentiation: "Give rise to osteoblasts",
                function: "Source of new osteoblasts during growth and repair",
                activation: "Fracture, bone remodeling, growth stimulate differentiation"
            },
            
            osteoblasts: {
                description: "Bone-building cells",
                origin: "Differentiate from osteogenic cells",
                location: "Bone surfaces (periosteum, endosteum); growth plates; fracture sites",
                morphology: "Cuboidal or columnar; single nucleus; prominent Golgi and ER",
                function: "Synthesize and secrete osteoid (unmineralized bone matrix)",
                secretion: {
                    osteoid: "Organic matrix (90% type I collagen, 10% ground substance)",
                    proteins: "Osteocalcin, osteopontin, bone sialoprotein",
                    alkaline_phosphatase: "Enzyme on cell surface; promotes mineralization"
                },
                regulation: {
                    stimulated_by: ["Mechanical stress", "Growth hormone", "IGF-1", "PTH (intermittent)", "Vitamin D", "Estrogen/testosterone"],
                    inhibited_by: ["Glucocorticoids (cortisol)", "PTH (continuous)", "Inflammatory cytokines"]
                },
                fate: {
                    option1: "Become trapped in matrix → osteocyte (most common)",
                    option2: "Remain on surface → bone lining cell (quiescent state)",
                    option3: "Apoptosis (programmed cell death)"
                }
            },
            
            osteocytes: {
                description: "Mature bone cells; most abundant bone cells",
                origin: "Osteoblasts that become embedded in matrix they secreted",
                location: "Lacunae within bone matrix",
                distribution: "~20,000-30,000 per mm³; ~42 billion in entire skeleton",
                morphology: "Small, flat; spider-like with many processes",
                processes: {
                    description: "Long, slender cell extensions through canaliculi",
                    number: "Up to 50 processes per cell",
                    connections: "Form gap junctions with adjacent osteocytes",
                    syncytium: "Interconnected network spans entire bone"
                },
                lifespan: "Years to decades (some persist entire life)",
                function: {
                    maintain_matrix: "Maintain bone matrix; secrete enzymes for remodeling",
                    mechanosensing: "PRIMARY mechanosensors - detect mechanical strain",
                    orchestrate_remodeling: "Signal osteoblasts and osteoclasts in response to loading",
                    mineral_homeostasis: "Regulate calcium/phosphate flux between bone and blood"
                },
                mechanotransduction: {
                    stimulus: "Mechanical loading → bone deformation → fluid flow in canaliculi",
                    detection: "Osteocyte processes detect fluid shear stress via mechanoreceptors",
                    receptors: "Integrins, ion channels (PIEZO1, TRPV4), primary cilium",
                    signaling: {
                        anabolic: "Increase Wnt signaling, decrease sclerostin → stimulate osteoblasts",
                        catabolic: "Increase RANKL, decrease OPG → stimulate osteoclasts (if unloaded)"
                    }
                },
                apoptosis: {
                    triggers: "Microdamage, estrogen deficiency, glucocorticoids, aging",
                    consequence: "Dead osteocyte signals osteoclasts → targeted remodeling of damaged region"
                }
            },
            
            osteoclasts: {
                description: "Bone-resorbing cells",
                origin: "Hematopoietic stem cells → monocytes/macrophages → fusion into multinucleated osteoclasts",
                location: "Bone surfaces undergoing resorption",
                morphology: "Large (100-200 μm), multinucleated (5-50 nuclei), abundant mitochondria and lysosomes",
                resorption_site: {
                    howship_lacuna: "Resorption pit - scalloped depression created by osteoclast",
                    ruffled_border: "Highly folded membrane facing bone; secretes acid and enzymes",
                    sealing_zone: "Ring of attachment around ruffled border; creates isolated microenvironment",
                    clear_zone: "Actin ring forming sealing zone"
                },
                mechanism: {
                    step1: "Attach to bone via integrins in sealing zone",
                    step2: "Secrete H⁺ ions (via H⁺-ATPase pump) → acidify resorption lacuna (pH ~4-5)",
                    step3: "Acid dissolves hydroxyapatite crystals → releases Ca²⁺ and PO₄³⁻",
                    step4: "Secrete enzymes (cathepsin K, matrix metalloproteinases) → digest collagen",
                    step5: "Endocytose degraded matrix → transcytosis → release on opposite side",
                    step6: "Detach and move to new site or undergo apoptosis"
                },
                regulation: {
                    activated_by: ["PTH (indirectly via osteoblasts)", "1,25-dihydroxyvitamin D", "Inflammatory cytokines (IL-1, TNF-α)", "M-CSF", "RANKL"],
                    inhibited_by: ["Calcitonin", "Estrogen", "OPG (osteoprotegerin)", "Bisphosphonates", "Denosumab"]
                },
                RANKL_pathway: {
                    description: "Primary pathway controlling osteoclast formation and activity",
                    RANKL: "Receptor activator of NFκB ligand - produced by osteoblasts/osteocytes",
                    RANK: "Receptor on osteoclast precursors",
                    OPG: "Osteoprotegerin - decoy receptor; binds RANKL, prevents RANK activation",
                    balance: "RANKL/OPG ratio determines osteoclast activity",
                    clinical: "Denosumab (drug) = antibody against RANKL → inhibits osteoclasts"
                },
                lifespan: "~2 weeks (then undergo apoptosis)"
            },
            
            bone_lining_cells: {
                description: "Quiescent osteoblasts on bone surface",
                location: "Cover ~80-90% of adult bone surfaces not undergoing remodeling",
                morphology: "Flat, elongated",
                function: {
                    maintain_surface: "Maintain bone surface",
                    barrier: "Regulate ion exchange between bone and ECF",
                    activation: "Can reactivate to osteoblasts if stimulated (fracture, remodeling)"
                }
            }
        },
        
        boneMatrix: {
            organic_component: {
                percentage: "~35% of bone dry weight; ~40% of bone volume",
                type_I_collagen: {
                    percentage: "~90% of organic matrix",
                    structure: "Triple helix; organized into fibrils and fibers",
                    mineralization: "Hydroxyapatite crystals deposited in gaps between collagen molecules",
                    function: "Provides tensile strength and flexibility; resists pulling forces",
                    cross_linking: "Enzymatic cross-links stabilize collagen; increase with age"
                },
                ground_substance: {
                    percentage: "~10% of organic matrix",
                    components: {
                        proteoglycans: "Protein core with glycosaminoglycan (GAG) chains; highly negative",
                        glycoproteins: "Osteocalcin, osteopontin, osteonectin, bone sialoprotein",
                        growth_factors: "Stored in matrix; released during remodeling (IGF, TGF-β, BMPs)"
                    },
                    functions: {
                        water_binding: "Proteoglycans attract water → hydration",
                        mineralization: "Regulate crystal nucleation and growth",
                        cell_adhesion: "Glycoproteins bind cells to matrix",
                        signaling: "Growth factors regulate cell differentiation and activity"
                    }
                },
                specific_proteins: {
                    osteocalcin: {
                        synthesis: "Osteoblasts; vitamin K-dependent",
                        function: "Binds calcium; regulates mineralization; endocrine functions (glucose metabolism)",
                        clinical: "Serum marker of bone formation"
                    },
                    osteonectin: {
                        function: "Binds collagen and hydroxyapatite; promotes mineralization"
                    },
                    osteopontin: {
                        function: "Cell attachment; regulates mineralization; osteoclast attachment"
                    },
                    bone_sialoprotein: {
                        function: "Initiation of mineralization; cell attachment"
                    }
                }
            },
            
            inorganic_component: {
                percentage: "~65% of bone dry weight; ~60% of bone volume",
                hydroxyapatite: {
                    formula: "Ca₁₀(PO₄)₆(OH)₂",
                    structure: "Crystalline calcium phosphate; needle-like crystals 20-80 nm long",
                    location: "Deposited in gaps between collagen fibrils and on fibril surface",
                    function: "Provides compressive strength and hardness; resists crushing forces"
                },
                other_minerals: {
                    calcium_carbonate: "~10% of mineral",
                    magnesium: "Small amount; substitutes for calcium in crystals",
                    fluoride: "Incorporates into crystals → fluorapatite (harder, more resistant to decay)",
                    sodium: "Adsorbed on crystal surface",
                    potassium: "Small amount",
                    citrate: "Chelates calcium"
                },
                mineral_reservoir: {
                    total_calcium: "~1 kg in adult skeleton (99% of body calcium)",
                    total_phosphate: "~600 g (85% of body phosphate)",
                    exchangeable_pool: "Small fraction on crystal surface; rapid exchange with blood"
                }
            },
            
            water: {
                percentage: "~10% of bone weight (in living bone)",
                locations: "Hydration shells around collagen and proteoglycans; in lacunae and canaliculi",
                function: "Nutrient transport; ion exchange; mechanical properties (viscoelasticity)"
            },
            
            mineralization_process: {
                initiation: "Matrix vesicles from osteoblasts; contain enzymes and calcium/phosphate",
                nucleation: "Hydroxyapatite crystals first form in matrix vesicles and collagen gaps",
                growth: "Crystals grow and coalesce",
                maturation: "Crystal size increases over weeks to months; degree of mineralization increases",
                timeline: "Primary mineralization ~50-70% complete in days; secondary mineralization continues for months to years",
                alkaline_phosphatase: "Enzyme on osteoblast surface; generates phosphate ions; promotes mineralization"
            }
        },
        
        mechanicalProperties: {
            strength: {
                compressive: "~170 MPa (megapascals) - resists crushing",
                tensile: "~130 MPa - resists pulling",
                shear: "~50 MPa - resists sliding",
                comparison: "Comparable to reinforced concrete in compression; stronger than oak in tension"
            },
            stiffness: {
                youngs_modulus: "~15-20 GPa (gigapascals)",
                meaning: "Relatively stiff - doesn't deform much under load",
                anisotropic: "Stronger along long axis than perpendicular"
            },
            toughness: {
                fracture_toughness: "~2-12 MPa√m",
                mechanisms: "Crack deflection at cement lines; collagen bridging; microcracking",
                aging: "Decreases with age - bones become more brittle"
            },
            contributions: {
                collagen: "Provides toughness (resistance to crack propagation) and flexibility",
                mineral: "Provides stiffness and compressive strength",
                balance: "Optimal ratio of organic/inorganic gives best properties",
                too_much_mineral: "Brittle (e.g., Paget's disease, aging)",
                too_little_mineral: "Soft, flexible (e.g., rickets, osteomalacia)"
            },
            demonstrations: {
                vinegar_soak: "Removes minerals → flexible, rubbery bone (shows collagen)",
                baking: "Removes organic → brittle, crumbly bone (shows mineral)",
                fresh_bone: "Bends slightly before breaking (both components)"
            }
        },
        
        comparison: {
            compactVsSpongyBone: [
                {
                    aspect: "Structure",
                    compact: "Dense, solid; organized osteons",
                    spongy: "Porous, lattice; trabeculae"
                },
                {
                    aspect: "Location",
                    compact: "Outer layer all bones; diaphysis of long bones",
                    spongy: "Interior of flat/short/irregular bones; epiphyses of long bones"
                },
                {
                    aspect: "Porosity",
                    compact: "~10%",
                    spongy: "~50-90%"
                },
                {
                    aspect: "Central canals",
                    compact: "Present in osteons",
                    spongy: "Absent (trabeculae too thin)"
                },
                {
                    aspect: "Nutrient source",
                    compact: "Central canals → canaliculi",
                    spongy: "Diffusion from marrow spaces"
                },
                {
                    aspect: "Marrow spaces",
                    compact: "Central medullary cavity only",
                    spongy: "Throughout trabecular network"
                },
                {
                    aspect: "Function",
                    compact: "Strength, protection, lever arms",
                    spongy: "Reduce weight, hematopoiesis, metabolic reserve"
                },
                {
                    aspect: "Remodeling rate",
                    compact: "~2-3% per year",
                    spongy: "~20% per year (higher surface area)"
                }
            ]
        },
        
        bloodSupply: {
            arteries: {
                nutrient_artery: {
                    location: "Penetrates diaphysis via nutrient foramen",
                    branches: "Divides into ascending and descending branches in medullary cavity",
                    supply: "Marrow, inner 2/3 of compact bone (via central canals)"
                },
                periosteal_arteries: {
                    location: "From periosteum; penetrate via Volkmann's canals",
                    supply: "Outer 1/3 of compact bone"
                },
                epiphyseal_arteries: {
                    location: "Enter epiphyses",
                    supply: "Spongy bone and articular cartilage margins"
                },
                metaphyseal_arteries: {
                    location: "Enter metaphysis",
                    supply: "Spongy bone of metaphysis; anastomose with nutrient artery"
                }
            },
            veins: {
                pattern: "Accompany arteries; drain via nutrient foramen and periosteal vessels",
                sinusoids: "Large, thin-walled vessels in marrow; slow blood flow for hematopoiesis"
            },
            clinical: {
                fracture: "Disrupts blood supply; healing requires revascularization",
                avascular_necrosis: "Loss of blood supply → bone death (e.g., femoral head after hip fracture)",
                infection: "Osteomyelitis - bone infection spreads via blood vessels"
            }
        },
        
        innervation: {
            periosteum: "Rich sensory innervation - source of bone pain",
            endosteum: "Some innervation",
            bone_interior: "Minimal innervation",
            functions: {
                pain: "Nociceptors in periosteum detect injury, infection, tumors",
                proprioception: "Mechanoreceptors contribute to joint position sense",
                autonomic: "Sympathetic nerves regulate blood flow and potentially remodeling"
            }
        },
        
        functions: {
            support: "Framework for body; maintains shape; supports soft tissues",
            protection: "Shields vital organs (brain, heart, lungs, pelvic organs)",
            movement: "Attachment for skeletal muscles; lever systems; muscles pull on bones → movement",
            mineral_storage: {
                calcium: "99% of body calcium; reservoir maintains blood Ca²⁺ (8.5-10.5 mg/dL)",
                phosphate: "85% of body phosphate; released for ATP synthesis, buffer",
                dynamics: "Rapid exchange at bone surface (minutes); slower remodeling (weeks-months)"
            },
            hematopoiesis: {
                site: "Red marrow in spongy bone",
                production: "RBCs, WBCs, platelets; ~500 billion cells/day",
                regulation: "Erythropoietin (RBC), growth factors (WBC), thrombopoietin (platelets)"
            },
            energy_storage: "Yellow marrow (adipose) in medullary cavities; can mobilize as needed",
            acid_base_balance: {
                mechanism: "Bone carbonate and phosphate buffers; can neutralize or release H⁺",
                chronic_acidosis: "Bone releases calcium carbonate → buffers acid but weakens bone"
            },
            detoxification: "Bone can sequester heavy metals (lead, strontium); protective but accumulates over time",
            endocrine: {
                osteocalcin: "Regulates glucose metabolism, male fertility, brain development",
                FGF23: "Regulates phosphate homeostasis and vitamin D metabolism"
            }
        },
        
        clinicalCorrelations: {
            osteoporosis: {
                description: "Decreased bone mass and density; increased fracture risk",
                mechanism: "Resorption exceeds formation; trabecular thinning and loss; cortical thinning",
                risk_factors: ["Aging", "Menopause (estrogen deficiency)", "Low calcium/vitamin D", "Inactivity", "Smoking", "Glucocorticoids"],
                diagnosis: "DEXA scan; T-score ≤ -2.5",
                treatment: "Bisphosphonates, denosumab, teriparatide; calcium, vitamin D, exercise"
            },
            osteomalacia_rickets: {
                description: "Inadequate bone mineralization",
                rickets: "In children - soft, deformed bones (bowed legs, rachitic rosary)",
                osteomalacia: "In adults - bone pain, muscle weakness, fractures",
                cause: "Vitamin D deficiency; inadequate calcium/phosphate",
                mechanism: "Normal osteoid production but poor mineralization",
                treatment: "Vitamin D and calcium supplementation"
            },
            pagets_disease: {
                description: "Excessive, disorganized bone remodeling",
                mechanism: "Osteoclasts overactive → excessive resorption → osteoblasts overcompensate → thick but weak bone",
                characteristics: "Mosaic pattern of woven and lamellar bone; increased bone size",
                complications: "Bone pain, fractures, deformity, arthritis, nerve compression",
                treatment: "Bisphosphonates; calcitonin"
            },
            osteogenesis_imperfecta: {
                description: "Genetic disorder - defective type I collagen",
                result: "Brittle bones; multiple fractures; blue sclera; hearing loss",
                severity: "Type I (mild) to Type II (lethal perinatal)",
                mechanism: "Abnormal collagen → poor bone matrix → weak bones"
            },
            osteomyelitis: {
                description: "Bone infection",
                route: "Hematogenous (blood-borne); direct contamination (trauma, surgery); contiguous spread",
                organisms: "Staphylococcus aureus most common",
                complications: "Sequestrum (dead bone), involucrum (new bone), chronic infection",
                treatment: "Antibiotics; surgical debridement if needed"
            },
            bone_tumors: {
                primary_benign: "Osteoma, osteochondroma, osteoblastoma",
                primary_malignant: "Osteosarcoma, chondrosarcoma, Ewing sarcoma",
                metastatic: "Breast, prostate, lung, kidney, thyroid commonly metastasize to bone",
                osteosarcoma: "Most common primary malignant; adolescents; metaphysis of long bones; aggressive"
            }
        },
        
        diagnosticTechniques: {
            radiography: {
                description: "X-rays - traditional imaging",
                principle: "Bone absorbs X-rays → appears white; soft tissue gray; air black",
                uses: "Fractures, arthritis, tumors, infections, bone density (limited)",
                limitations: "2D projection; ~30% bone loss needed to detect osteoporosis"
            },
            DEXA_scan: {
                description: "Dual-energy X-ray absorptiometry",
                principle: "Two X-ray energies separate bone from soft tissue",
                measurement: "Bone mineral density (g/cm²); T-score and Z-score",
                uses: "Osteoporosis screening and monitoring; fracture risk assessment",
                gold_standard: "For bone density measurement"
            },
            CT_scan: {
                description: "Computed tomography",
                advantages: "3D imaging; excellent bone detail; detects fractures missed on X-ray",
                uses: "Complex fractures, bone tumors, surgical planning",
                QCT: "Quantitative CT - measures volumetric bone density"
            },
            MRI: {
                description: "Magnetic resonance imaging",
                advantages: "Excellent soft tissue detail; no radiation",
                uses: "Bone marrow pathology, tumors, AVN, stress fractures, infection",
                limitations: "Poor cortical bone detail (low water content)"
            },
            bone_scan: {
                description: "Nuclear medicine - radiotracer (Tc-99m) accumulates in bone",
                principle: "Increased uptake where remodeling activity high",
                uses: "Metastases, infection, fractures, Paget's disease",
                sensitivity: "High but not specific"
            },
            bone_biopsy: {
                description: "Histological examination",
                indications: "Bone tumors, infection, metabolic bone disease (research)",
                techniques: "Core needle biopsy; open biopsy; bone marrow aspiration"
            },
            biochemical_markers: {
                formation_markers: ["Bone-specific alkaline phosphatase (BSAP)", "Osteocalcin", "Procollagen type I propeptides (P1NP, P1CP)"],
                resorption_markers: ["C-terminal telopeptide (CTX)", "N-terminal telopeptide (NTX)", "Deoxypyridinoline (DPD)"],
                uses: "Monitor treatment response; assess fracture risk; research"
            }
        },
        
        examples: [
            {
                structure: "Femur (thigh bone)",
                type: "Long bone",
                features: "Largest, strongest bone; prominent greater and lesser trochanters; bears body weight",
                clinical: "Femoral neck fractures common in elderly; hip replacement surgery"
            },
            {
                structure: "Vertebra",
                type: "Irregular bone",
                features: "Body (weight-bearing), vertebral arch (protects spinal cord), processes (muscle/ligament attachment)",
                clinical: "Compression fractures in osteoporosis; herniated discs between vertebrae"
            },
            {
                structure: "Skull (parietal bone)",
                type: "Flat bone",
                features: "Two compact bone tables sandwiching diploe (spongy bone)",
                clinical: "Skull fractures; craniotomy for brain surgery"
            },
            {
                structure: "Patella (kneecap)",
                type: "Sesamoid bone",
                features: "Embedded in quadriceps tendon; increases mechanical advantage",
                clinical: "Patellar fractures; patellar tendonitis"
            }
        ],
        
        applications: [
            "Orthopedic surgery - fracture repair, joint replacement, tumor resection",
            "Diagnosis and monitoring of bone diseases (osteoporosis, Paget's, tumors)",
            "Forensic anthropology - age, sex, ancestry from skeletal remains",
            "Sports medicine - stress fractures, bone contusions",
            "Endocrinology - calcium homeostasis disorders",
            "Pharmaceutical development - drugs for osteoporosis, cancer bone metastases",
            "Tissue engineering - bone grafts, scaffolds for regeneration",
            "Anthropology and archaeology - study ancient populations, diet, disease"
        ]
    };
    
    return content;
}

handleBoneDevelopment(problem) {
    const content = {
        topic: "Bone Development and Growth",
        category: 'bone_physiology',
        summary: "Bone formation (ossification or osteogenesis) occurs through two distinct processes: intramembranous ossification (direct bone formation from mesenchyme) and endochondral ossification (bone formation by replacing a hyaline cartilage model). Growth continues through childhood and adolescence via epiphyseal plates, with bone lengthening and widening regulated by hormones and mechanical factors.",
        
        ossificationTypes: {
            intramembranousOssification: {
                definition: "Direct transformation of mesenchymal tissue into bone",
                bones_formed: [
                    "Flat bones of skull (frontal, parietal, part of occipital, part of temporal)",
                    "Mandible (lower jaw)",
                    "Clavicle (collarbone)",
                    "Some facial bones"
                ],
                timing: "Begins week 8 of embryonic development",
                characteristics: "No cartilage intermediate; forms directly in mesenchyme",
                
                steps: {
                    step1_ossification_center: {
                        name: "Ossification center appears in fibrous connective tissue membrane",
                        details: "Mesenchymal cells cluster and differentiate into osteoblasts at specific sites",
                        location: "Within fibrous connective tissue membrane",
                        signals: "Bone morphogenetic proteins (BMPs), transcription factors (Runx2, Osterix)",
                        result: "Ossification centers form (primary sites of bone development)"
                    },
                    step2_calcification: {
                        name: "Osteoid secretion and calcification",
                        details: [
                            "Osteoblasts secrete osteoid (unmineralized matrix) in all directions",
                            "Osteoid mineralizes within days - calcium salts crystallize",
                            "Osteoblasts become trapped in lacunae → mature into osteocytes",
                            "Calcified areas develop into trabeculae (thin plates)"
                        ],
                        matrix: "Type I collagen + ground substance",
                        mineralization: "Hydroxyapatite crystals deposited",
                        result: "Formation of woven bone (immature; random collagen fiber orientation)"
                    },
                    step3_woven_bone: {
                        name: "Woven bone and periosteum form",
                        details: [
                            "Trabeculae radiate from ossification center(s)",
                            "Mesenchyme condenses on external surface → periosteum",
                            "Mesenchyme condenses internally → endosteum"
                        ],
                        periosteum: "Outer fibrous layer + inner osteogenic layer",
                        blood_vessels: "Vascularized connective tissue between trabeculae",
                        result: "Network of woven bone trabeculae with periosteum"
                    },
                    step4_compact_bone: {
                        name: "Compact bone replaces woven bone on surfaces",
                        details: [
                            "Osteoblasts in periosteum lay down compact bone on outer surface",
                            "Interior trabeculae remain as spongy bone",
                            "Woven bone gradually replaced by lamellar bone (mature; organized collagen)"
                        ],
                        remodeling: "Continues for months to years",
                        final_structure: "Outer tables of compact bone + inner diploe (spongy) in flat bones",
                        marrow: "Red bone marrow fills spaces between trabeculae"
                    }
                },
                
                fontanels: {
                    description: "Fibrous membranes between skull bones in infants; 'soft spots'",
                    function: [
                        "Allow skull compression during birth (passage through birth canal)",
                        "Accommodate rapid brain growth in infancy",
                        "Clinical access for venipuncture, examining intracranial pressure"
                    ],
                    major_fontanels: {
                        anterior: {
                            location: "Junction of frontal and two parietal bones",
                            shape: "Diamond-shaped",
                            size: "~2.5 cm",
                            closure: "18-24 months (latest to close)"
                        },
                        posterior: {
                            location: "Junction of occipital and two parietal bones",
                            shape: "Triangular",
                            size: "~1 cm",
                            closure: "2-3 months (earliest to close)"
                        },
                        sphenoidal: {
                            location: "Lateral (paired); junction of frontal, parietal, temporal, sphenoid",
                            closure: "~3 months"
                        },
                        mastoid: {
                            location: "Posterolateral (paired); junction of parietal, occipital, temporal",
                            closure: "~12 months"
                        }
                    },
                    clinical: {
                        bulging: "Increased intracranial pressure (meningitis, hydrocephalus, tumor)",
                        sunken: "Dehydration",
                        delayed_closure: "Hypothyroidism, rickets, Down syndrome",
                        premature_closure: "Craniosynostosis - causes skull deformity, increased ICP"
                    }
                }
            },
            
            endochondralOssification: {
                definition: "Bone forms by replacing a hyaline cartilage model",
                bones_formed: [
                    "All bones inferior to skull except clavicle",
                    "Long bones (femur, humerus, tibia, etc.)",
                    "Short bones (carpals, tarsals)",
                    "Irregular bones (vertebrae, pelvis)"
                ],
                timing: "Begins week 8-12 of embryonic development; continues through adolescence",
                characteristics: "Uses cartilage template; more complex than intramembranous",
                
                steps: {
                    step1_cartilage_model: {
                        name: "Hyaline cartilage model develops",
                        timing: "Weeks 6-8 of embryonic development",
                        details: [
                            "Mesenchymal cells differentiate into chondroblasts",
                            "Chondroblasts secrete cartilage matrix",
                            "Model shaped like future bone (miniature version)"
                        ],
                        covering: "Perichondrium (fibrous membrane) surrounds cartilage",
                        growth: "Cartilage model grows by interstitial and appositional growth",
                        fetal_skeleton: "Entire fetal skeleton is cartilaginous at this stage"
                    },
                    step2_calcification: {
                        name: "Cartilage calcifies and periosteum forms",
                        location: "Center of diaphysis (shaft)",
                        timing: "Week 8-12 embryonic",
                        process: [
                            "Chondrocytes hypertrophy (enlarge)",
                            "Matrix calcifies (minerals deposited)",
                            "Chondrocytes die (calcified matrix impermeable - no nutrients)",
                            "Perichondrium → periosteum (cells become osteogenic)",
                            "Osteoblasts in periosteum form bone collar around diaphysis"
                        ],
                        bone_collar: "Thin ring of compact bone around mid-shaft",
                        result: "Cartilage in center calcified; surrounded by bone collar"
                    },
                    step3_primary_center: {
                        name: "Primary ossification center forms in diaphysis",
                        timing: "Week 12 embryonic to birth (varies by bone)",
                        process: [
                            "Blood vessels penetrate bone collar → periosteal bud enters",
                            "Periosteal bud contains: osteoblasts, osteoclasts, blood vessels, nerves, red marrow elements",
                            "Osteoclasts erode calcified cartilage → creates space",
                            "Osteoblasts deposit bone matrix on remaining calcified cartilage spicules",
                            "Forms spongy bone"
                        ],
                        direction: "Ossification spreads from center toward epiphyses",
                        by_birth: "Most long bones have ossified diaphyses",
                        result: "Spongy bone in diaphysis; cartilage remains at epiphyses"
                    },
                    step4_medullary_cavity: {
                        name: "Medullary cavity forms",
                        timing: "Late fetal period to infancy",
                        process: [
                            "Osteoclasts break down centrally-located spongy bone",
                            "Creates hollow medullary cavity in diaphysis",
                            "Cavity fills with red bone marrow (hematopoietic tissue)"
                        ],
                        concurrent: "Compact bone thickens beneath periosteum (appositional growth)",
                        result: "Hollow shaft with marrow cavity; epiphyses still cartilage"
                    },
                    step5_secondary_centers: {
                        name: "Secondary ossification centers appear in epiphyses",
                        timing: "Shortly after birth to late adolescence (varies by bone and epiphysis)",
                        process: [
                            "Blood vessels invade epiphyses",
                            "Ossification centers appear (usually one per epiphysis)",
                            "Bone forms from center outward",
                            "Cartilage remains in two regions:",
                            "  - Articular cartilage (covers joint surfaces)",
                            "  - Epiphyseal plate (between diaphysis and epiphysis)"
                        ],
                        direction: "Proceeds radially from center of epiphysis",
                        completion: "Variable - some epiphyses ossify in childhood, others in adolescence",
                        result: "Bone in epiphyses; cartilage at joints and growth plates only"
                    }
                },
                
                completion: {
                    childhood_adolescence: "Bone elongates at epiphyseal plates",
                    late_teens_early_20s: "Epiphyseal plates ossify → epiphyseal lines",
                    final_structure: "Fully ossified bone with articular cartilage at joints"
                }
            }
        },
        
        longitudinalGrowth: {
            description: "Increase in bone length occurs at epiphyseal (growth) plates",
            epiphyseal_plate: {
                location: "Between diaphysis and epiphysis in growing bones",
                composition: "Hyaline cartilage",
                orientation: "Perpendicular to long axis of bone",
                activity: "Active from birth to late adolescence",
                closure: "Ossifies when growth complete → becomes epiphyseal line"
            },
            
            zones_of_growth_plate: {
                description: "Four distinct zones from epiphysis toward diaphysis",
                zone1_resting: {
                    name: "Resting (Reserve) Zone",
                    location: "Nearest epiphysis",
                    cells: "Small, scattered chondrocytes",
                    matrix: "Normal cartilage matrix",
                    activity: "Minimal cell division; anchors plate to epiphysis",
                    function: "Reserve cells for future growth"
                },
                zone2_proliferating: {
                    name: "Proliferating (Proliferation) Zone",
                    location: "Below resting zone",
                    cells: "Chondrocytes undergo rapid mitosis; stack into longitudinal columns",
                    matrix: "Cartilage matrix between columns",
                    activity: "ACTIVE CELL DIVISION - primary zone of growth",
                    function: "Lengthens bone by producing new cartilage; older cells pushed toward diaphysis",
                    analogy: "Like assembly line - new cells added, old cells move down"
                },
                zone3_hypertrophic: {
                    name: "Hypertrophic (Maturation) Zone",
                    location: "Below proliferating zone",
                    cells: "Chondrocytes enlarge dramatically (10× larger); stop dividing",
                    matrix: "Compressed; begins to calcify",
                    activity: "Cells signal for blood vessel invasion; prepare for ossification",
                    function: "Maturation and calcification; cells about to die"
                },
                zone4_calcified: {
                    name: "Calcified (Ossification) Zone",
                    location: "Nearest diaphysis; junction with diaphysis",
                    cells: "Dead chondrocytes (matrix calcified - impermeable to nutrients)",
                    matrix: "Calcified cartilage matrix",
                    activity: [
                        "Blood vessels and osteoblasts invade from diaphysis",
                        "Osteoblasts deposit bone on calcified cartilage spicules",
                        "Osteoclasts remove cartilage remnants",
                        "New bone added to diaphysis"
                    ],
                    function: "Conversion of cartilage to bone; bone lengthens",
                    result: "Cartilage continuously replaced by bone on diaphyseal side"
                }
            },
            
            mechanism_of_lengthening: {
                key_concept: "Cartilage added on epiphyseal side; bone replaces cartilage on diaphyseal side",
                analogy: "Like escalator - plate stays same thickness but bone gets longer",
                process: [
                    "Zone 2: New cartilage cells produced",
                    "Cells pushed toward diaphysis as more cells form above",
                    "Zone 3: Cells enlarge and matrix calcifies",
                    "Zone 4: Calcified cartilage replaced by bone",
                    "Net effect: Diaphysis lengthens; plate remains at constant distance from epiphysis"
                ],
                rate: "Varies by bone and age; ~1-2 cm/year during childhood; rapid during puberty",
                direction: "Both epiphyses contribute to lengthening (proximal and distal)"
            },
            
            closure_of_growth_plate: {
                timing: "Late teens to early 20s (varies by sex, bone, and epiphysis)",
                trigger: "Sex hormones (estrogen, testosterone) at puberty",
                mechanism: [
                    "Sex hormones initially stimulate growth spurt",
                    "Then trigger chondrocyte apoptosis in growth plate",
                    "Ossification overtakes cartilage production",
                    "Plate ossifies completely → epiphyseal line"
                ],
                sex_differences: {
                    females: "Closure ~18 years (earlier estrogen surge)",
                    males: "Closure ~21 years (later testosterone surge)"
                },
                bone_specific_timing: {
                    distal_femur: "~18-19 years",
                    proximal_humerus: "~20 years",
                    distal_radius: "~18-19 years",
                    iliac_crest: "~23 years",
                    medial_clavicle: "~25-30 years (LAST to fuse)"
                },
                epiphyseal_line: {
                    description: "Visible line of compact bone replacing growth plate",
                    appearance: "Thin, dense line on X-ray",
                    permanence: "Remains visible throughout life (though may fade in elderly)",
                    significance: "Indicates skeletal maturity; used in forensic age estimation"
                },
                clinical: {
                    growth_hormone_excess_before_closure: "Gigantism (excessive height)",
                    growth_hormone_excess_after_closure: "Acromegaly (bones widen, facial features enlarge)",
                    premature_closure: "Short stature (injury, infection, genetic)",
                    delayed_closure: "Tall stature (estrogen deficiency, genetics)"
                }
            }
        },
        
        appositionalGrowth: {
            description: "Increase in bone diameter (thickness)",
            location: "Occurs at periosteal and endosteal surfaces",
            timing: "Throughout life (slower in adults)",
            
            mechanism: {
                periosteal_surface: {
                    cells: "Osteoblasts in periosteum",
                    activity: "Deposit new bone on outer surface",
                    result: "Bone diameter increases"
                },
                endosteal_surface: {
                    cells: "Osteoclasts in endosteum",
                    activity: "Remove bone from inner surface (medullary cavity)",
                    result: "Medullary cavity enlarges"
                },
                net_effect: [
                    "Bone gets wider",
                    "Medullary cavity gets larger",
                    "Compact bone thickness relatively constant (formation = resorption at optimal thickness)"
                ]
            },
            
            regulation: {
                mechanical_stress: "Loading stimulates periosteal bone formation (Wolff's Law)",
                hormones: "Growth hormone, testosterone promote",
                age: "Active during growth; slower in adulthood; minimal in elderly"
            },
            
            remodeling: {
                description: "Continuous process of bone deposition and resorption on surfaces",
                osteon_formation: "New osteons formed at periosteal surface; old osteons resorbed or partially destroyed → interstitial lamellae",
                adaptation: "Bone shape adapts to mechanical loading patterns",
                lifetime: "Continues throughout life at varying rates"
            }
        },
        
        hormonalRegulation: {
            growth_hormone: {
                source: "Anterior pituitary (somatotrophs)",
                mechanism: [
                    "Acts directly on target tissues",
                    "Stimulates liver to produce IGF-1 (insulin-like growth factor 1)",
                    "IGF-1 mediates most growth effects"
                ],
                effects_on_bone: [
                    "Stimulates chondrocyte proliferation in epiphyseal plates",
                    "Stimulates osteoblast activity",
                    "Increases protein synthesis and cell division",
                    "Promotes longitudinal and appositional growth"
                ],
                regulation: "GHRH (stimulates), somatostatin (inhibits)",
                disorders: {
                    deficiency_childhood: "Pituitary dwarfism - proportionate short stature",
                    deficiency_adult: "Decreased muscle mass, increased fat, reduced bone density",
                    excess_childhood: "Gigantism - excessive height (plates still open)",
                    excess_adult: "Acromegaly - widened bones, enlarged hands/feet/face (plates closed)"
                }
            },
            
            thyroid_hormone: {
                source: "Thyroid gland (follicular cells)",
                hormones: "T3 (triiodothyronine), T4 (thyroxine)",
                effects_on_bone: [
                    "Essential for normal GH secretion and action",
                    "Required for bone maturation and growth",
                    "Stimulates metabolic rate (energy for growth)"
                ],
                deficiency: {
                    congenital: "Cretinism - stunted growth, mental retardation",
                    childhood: "Delayed growth and skeletal maturation",
                    mechanism: "Impaired GH secretion; decreased responsiveness to GH"
                },
                excess: "Accelerated bone growth but premature fusion; osteoporosis in adults"
            },
            
            sex_hormones: {
                puberty_effects: {
                    estrogen: "Produced by ovaries in females; small amounts in males",
                    testosterone: "Produced by testes in males; small amounts in females",
                    actions: [
                        "Initial phase: Stimulate growth spurt (rapid increase in height)",
                        "Promote bone formation and epiphyseal plate activity",
                        "Later phase: Trigger epiphyseal plate closure",
                        "Maintain bone density in adulthood"
                    ]
                },
                sex_differences: {
                    females: "Estrogen surge earlier (age 10-12) → growth spurt → earlier closure (~18) → shorter average height",
                    males: "Testosterone surge later (age 12-14) → prolonged growth → later closure (~21) → taller average height"
                },
                estrogen_specific: {
                    skeletal_effects: "More potent than testosterone at closing plates; protects bone density",
                    menopause: "Estrogen decline → bone loss (1-3%/year for 5-10 years) → osteoporosis risk",
                    deficiency: "Delayed closure, tall stature; increased fracture risk"
                },
                testosterone_specific: {
                    skeletal_effects: "Promotes bone and muscle mass; converted to estrogen (aromatization) in males",
                    deficiency: "Delayed closure, reduced bone density, muscle weakness"
                }
            },
            
            parathyroid_hormone: {
                source: "Parathyroid glands (chief cells)",
                primary_function: "Increase blood calcium",
                effects_on_bone: [
                    "Stimulates osteoclast activity (indirectly via osteoblasts) → bone resorption",
                    "Releases calcium and phosphate from bone into blood",
                    "Chronic elevation → bone loss"
                ],
                note: "Not a growth hormone per se, but affects bone remodeling",
                disorders: {
                    hyperparathyroidism: "Excess PTH → excessive bone resorption → osteoporosis, fractures",
                    hypoparathyroidism: "Low PTH → low blood calcium → tetany"
                }
            },
            
            calcitonin: {
                source: "Thyroid gland (parafollicular C cells)",
                primary_function: "Decrease blood calcium (minor role in adults)",
                effects_on_bone: [
                    "Inhibits osteoclast activity → decreases bone resorption",
                    "Promotes calcium deposition in bone"
                ],
                significance: "Important in children for bone growth; minimal effect in adults",
                clinical_use: "Treatment for Paget's disease, hypercalcemia"
            },
            
            vitamin_D: {
                source: "Skin (UV converts 7-dehydrocholesterol) → liver → kidney (activated)",
                active_form: "Calcitriol (1,25-dihydroxyvitamin D3)",
                effects_on_bone: [
                    "Increases intestinal calcium and phosphate absorption",
                    "Promotes bone mineralization (adequate Ca/P available)",
                    "Paradoxically can increase bone resorption if deficient (stimulates PTH)"
                ],
                deficiency: {
                    children: "Rickets - inadequate mineralization, soft/deformed bones",
                    adults: "Osteomalacia - bone pain, muscle weakness, fractures"
                },
                sources: "Sunlight (primary), fatty fish, fortified milk, supplements"
            },
            
            glucocorticoids: {
                source: "Adrenal cortex (zona fasciculata); synthetic (prednisone, dexamethasone)",
                effects_on_bone: [
                    "Inhibit osteoblast activity → decreased bone formation",
                    "Promote osteocyte and osteoblast apoptosis",
                    "Decrease calcium absorption",
                    "Increase bone resorption (indirectly)"
                ],
                result: "Net bone loss; osteoporosis",
                clinical: "Chronic glucocorticoid therapy (asthma, autoimmune disease) → bone loss",
                prevention: "Minimize dose; calcium, vitamin D supplementation; bisphosphonates if needed"
            }
        },
        
        nutritionalFactors: {
            calcium: {
                function: "Primary mineral in hydroxyapatite; essential for bone mineralization",
                requirements: {
                    children: "1000-1300 mg/day",
                    adults: "1000 mg/day",
                    pregnant_lactating: "1000-1300 mg/day",
                    elderly: "1200 mg/day"
                },
                sources: "Dairy products, leafy greens, fortified foods, supplements",
                deficiency: "Rickets (children), osteomalacia (adults), osteoporosis risk",
                excess: "Kidney stones, constipation, impaired mineral absorption (rare from diet)"
            },
            
            phosphorus: {
                function: "Component of hydroxyapatite; energy metabolism (ATP)",
                requirements: "700 mg/day adults; 1250 mg/day adolescents",
                sources: "Meat, dairy, nuts, legumes (widespread in diet)",
                deficiency: "Rare; causes rickets, osteomalacia",
                balance: "Ca:P ratio important; excess phosphorus can impair calcium absorption"
            },
            
            vitamin_D: {
                function: "Increases calcium and phosphate absorption; bone mineralization",
                requirements: "600-800 IU/day; up to 1000-2000 IU/day for deficiency risk",
                sources: "Sunlight (UVB), fatty fish, fortified milk, supplements",
                deficiency: "Very common; rickets, osteomalacia, increased fracture risk",
                toxicity: "Hypercalcemia (rare; requires massive doses)"
            },
            
            vitamin_C: {
                function: "Required for collagen synthesis (hydroxylation of proline and lysine)",
                requirements: "75-90 mg/day",
                sources: "Citrus fruits, berries, peppers, broccoli",
                deficiency: {
                    disease: "Scurvy",
                    bone_effects: "Defective collagen → poor bone matrix → bleeding, bone pain, fractures",
                    other_effects: "Bleeding gums, poor wound healing, bruising"
                }
            },
            
            vitamin_K: {
                function: "Required for osteocalcin synthesis (bone matrix protein)",
                requirements: "90-120 μg/day",
                sources: "Leafy greens, vegetable oils, intestinal bacteria",
                deficiency: "Impaired bone mineralization; increased fracture risk",
                clinical: "Warfarin (anticoagulant) inhibits vitamin K → may affect bone"
            },
            
            protein: {
                function: "Provides amino acids for collagen and other bone proteins; growth",
                requirements: "0.8-1.0 g/kg/day adults; higher in children/adolescents",
                sources: "Meat, fish, dairy, legumes, nuts",
                deficiency: "Impaired growth, reduced bone mass",
                excess: "High protein may increase calcium excretion (controversial; may be compensated)"
            },
            
            vitamin_A: {
                function: "Bone remodeling; osteoblast and osteoclast activity",
                requirements: "700-900 μg RAE/day",
                deficiency: "Impaired bone growth",
                excess: "Stimulates osteoclasts → bone loss, fractures; teratogenic"
            },
            
            magnesium: {
                function: "Cofactor for enzymes; component of bone mineral",
                requirements: "310-420 mg/day",
                sources: "Nuts, legumes, whole grains, leafy greens",
                deficiency: "Impaired bone mineralization; affects PTH secretion"
            }
        },
        
        mechanicalFactors: {
            wolff_law: "Bone remodels in response to mechanical stress (detailed in bone remodeling topic)",
            effects_on_growth: {
                weight_bearing: "Stimulates longitudinal and appositional growth",
                immobilization: "Reduces growth; bone loss",
                exercise: "Promotes bone density; strengthens growth plates",
                microgravity: "Bone loss (~1-2% per month in astronauts)"
            }
        },
        
        geneticFactors: {
            heritability: "60-80% of peak bone mass determined by genetics",
            genes_involved: [
                "Vitamin D receptor (VDR)",
                "Collagen type I (COL1A1, COL1A2)",
                "Estrogen receptor",
                "LRP5 (Wnt signaling pathway)",
                "RANK/RANKL/OPG system"
            ],
            disorders: {
                achondroplasia: "Defective FGFR3 gene → impaired endochondral ossification → short stature, short limbs",
                osteogenesis_imperfecta: "Defective collagen type I → brittle bones, fractures",
                cleidocranial_dysplasia: "RUNX2 mutation → impaired intramembranous ossification → absent clavicles, delayed skull closure"
            }
        },
        
        ageRelatedChanges: {
            prenatal: "Cartilage models form; primary ossification begins",
            birth: "Most diaphyses ossified; epiphyses mostly cartilage",
            infancy: "Secondary centers appear; rapid growth",
            childhood: "Steady growth; plates active",
            puberty: "Growth spurt; rapid lengthening and maturation",
            late_adolescence: "Plate closure; growth stops",
            young_adult: "Peak bone mass achieved (~30 years)",
            middle_age: "Gradual bone loss (~0.5%/year)",
            elderly: "Accelerated loss (especially postmenopausal women); osteoporosis risk"
        },
        
        clinicalCorrelations: {
            growth_disorders: {
                gigantism: "GH excess before plate closure → excessive height",
                pituitary_dwarfism: "GH deficiency → proportionate short stature",
                achondroplasia: "Genetic; impaired endochondral ossification → short stature, short limbs, normal trunk",
                constitutional_delay: "Normal variant; late puberty → late growth spurt and closure"
            },
            
            vitamin_deficiencies: {
                rickets: "Vitamin D deficiency in children → soft bones, bowed legs, rachitic rosary, delayed fontanel closure",
                osteomalacia: "Vitamin D deficiency in adults → bone pain, muscle weakness, fractures",
                scurvy: "Vitamin C deficiency → defective collagen → bleeding, poor wound healing, bone pain"
            },
            
            fractures_in_children: {
                greenstick: "Incomplete fracture; bone bends and cracks (like green wood)",
                buckle_torus: "Compression of bone; one side buckles",
                growth_plate_injury: "Salter-Harris fractures (Types I-V); may affect growth if severe",
                healing: "Faster than adults; extensive remodeling can correct angulation"
            },
            
            craniosynostosis: {
                description: "Premature closure of skull sutures",
                consequences: "Abnormal skull shape; increased intracranial pressure if multiple sutures",
                types: {
                    scaphocephaly: "Sagittal suture fuses early → long, narrow skull",
                    plagiocephaly: "Unilateral coronal → asymmetric skull",
                    trigonocephaly: "Metopic suture → triangular forehead"
                },
                treatment: "Surgical correction (craniotomy) if severe"
            },
            
            skeletal_age: {
                description: "Degree of ossification; may differ from chronological age",
                assessment: "Hand/wrist X-ray; compare to standards",
                use: "Evaluate growth disorders; predict adult height; forensic age estimation",
                delayed: "Growth hormone deficiency, hypothyroidism, malnutrition",
                advanced: "Precocious puberty, hyperthyroidism"
            }
        },
        
        comparison: {
            intramembranousVsEndochondral: [
                {
                    aspect: "Precursor tissue",
                    intramembranous: "Mesenchyme (fibrous connective tissue)",
                    endochondral: "Hyaline cartilage model"
                },
                {
                    aspect: "Bones formed",
                    intramembranous: "Flat skull bones, mandible, clavicle",
                    endochondral: "All other bones (long, short, irregular)"
                },
                {
                    aspect: "Timing",
                    intramembranous: "Begins week 8 embryonic",
                    endochondral: "Begins week 8-12 embryonic"
                },
                {
                    aspect: "Complexity",
                    intramembranous: "Simpler - direct bone formation",
                    endochondral: "More complex - cartilage intermediate"
                },
                {
                    aspect: "Ossification centers",
                    intramembranous: "Primary only",
                    endochondral: "Primary (diaphysis) + secondary (epiphyses)"
                },
                {
                    aspect: "Growth plates",
                    intramembranous: "Absent",
                    endochondral: "Present until adolescence"
                },
                {
                    aspect: "Final structure",
                    intramembranous: "Compact tables + diploe (flat bones)",
                    endochondral: "Compact shaft + spongy ends (long bones)"
                }
            ]
        },
        
        examples: [
            {
                bone: "Femur (thigh bone)",
                type: "Endochondral ossification",
                timing: "Primary center: week 7 embryonic; secondary centers: birth (distal), 1 year (proximal)",
                closure: "Proximal ~18 years; distal ~20 years",
                clinical: "Most common site of growth plate injuries in adolescents"
            },
            {
                bone: "Frontal bone (forehead)",
                type: "Intramembranous ossification",
                centers: "Two ossification centers (fuse in infancy → single bone)",
                fontanel: "Anterior fontanel - closes 18-24 months",
                clinical: "Metopic suture may persist (10% of adults)"
            },
            {
                bone: "Vertebrae",
                type: "Endochondral ossification",
                centers: "Three primary (one body, two arches); multiple secondary (tips of processes)",
                timing: "Body and arches fuse ~3-6 years; all parts fused by ~25 years",
                clinical: "Spina bifida - failure of arch fusion"
            }
        ],
        
        applications: [
            "Pediatric orthopedics - growth disorders, fractures, limb length discrepancies",
            "Endocrinology - diagnosis and treatment of growth hormone disorders, precocious/delayed puberty",
            "Forensic anthropology - age estimation from skeletal development",
            "Nutritional counseling - ensuring adequate calcium, vitamin D for optimal growth",
            "Sports medicine - understanding growth plate injuries in young athletes",
            "Genetic counseling - skeletal dysplasias, familial short/tall stature",
            "Reconstructive surgery - bone grafts, distraction osteogenesis (limb lengthening)"
        ]
    };
    
    return content;
}

handleBoneRemodeling(problem) {
    const content = {
        topic: "Bone Remodeling and Calcium Homeostasis",
        category: 'bone_physiology',
        summary: "Bone remodeling is the lifelong process of bone tissue renewal, involving coordinated resorption by osteoclasts and formation by osteoblasts. This process repairs microdamage, adapts bone architecture to mechanical stress (Wolff's Law), and regulates calcium homeostasis. Hormones (PTH, calcitonin, vitamin D) and mechanical loading tightly regulate remodeling.",
        
        remodelingProcess: {
            definition: "Continuous replacement of old bone tissue with new bone tissue",
            rate: {
                adult: "~10% of skeleton per year",
                trabecular_bone: "~20% per year (higher surface area)",
                cortical_bone: "~2-3% per year",
                lifetime: "Entire skeleton replaced approximately every 10 years"
            },
            
            purposes: [
                "Repair microdamage (fatigue cracks from normal use)",
                "Adapt bone architecture to mechanical loading (Wolff's Law)",
                "Regulate calcium and phosphate homeostasis",
                "Maintain bone strength and structural integrity"
            ],
            
            remodelingCycle: {
                duration: "~3-6 months per cycle",
                location: "Occurs on bone surfaces (periosteal, endosteal, trabecular, Haversian canal)",
                unit: "Basic Multicellular Unit (BMU) - team of osteoclasts and osteoblasts",
                
                phases: {
                    phase1_activation: {
                        name: "Activation (Quiescence → Activation)",
                        duration: "Days",
                        trigger: [
                            "Microdamage (fatigue fractures)",
                            "Osteocyte apoptosis (signals damage)",
                            "Mechanical stress changes",
                            "Hormonal signals (PTH, vitamin D)",
                            "Inflammatory cytokines"
                        ],
                        events: [
                            "Bone lining cells retract from surface",
                            "Mononuclear cells digest collagen 'canopy'",
                            "Chemotactic signals recruit osteoclast precursors",
                            "Pre-osteoclasts arrive at remodeling site"
                        ],
                        signals: {
                            osteocytes: "Sclerostin (↓), RANKL (↑), OPG (↓)",
                            bone_lining_cells: "M-CSF, RANKL expressed on surface",
                            recruitment: "Osteoclast precursors migrate from blood"
                        }
                    },
                    
                    phase2_resorption: {
                        name: "Resorption",
                        duration: "2-4 weeks",
                        cells: "Osteoclasts (5-10 per BMU)",
                        depth: "~40-60 μm (trabecular); ~150-200 μm (cortical)",
                        
                        mechanism: [
                            "Pre-osteoclasts fuse → multinucleated osteoclasts (5-50 nuclei)",
                            "Osteoclast attaches to bone via αvβ3 integrins",
                            "Forms sealing zone (actin ring) → isolates resorption lacuna",
                            "Ruffled border (highly folded membrane) faces bone",
                            "Secretes H⁺ ions (via H⁺-ATPase pump) → pH 4-5",
                            "Acid dissolves hydroxyapatite → releases Ca²⁺, PO₄³⁻",
                            "Secretes cathepsin K, matrix metalloproteinases → digest collagen",
                            "Endocytoses degraded matrix → transcytosis → releases on basolateral side",
                            "Creates resorption pit (Howship's lacuna)"
                        ],
                        
                        regulation: {
                            stimulated: "PTH (via RANKL), vitamin D, inflammatory cytokines",
                            inhibited: "Calcitonin, estrogen, OPG, bisphosphonates"
                        },
                        
                        fate: "Osteoclasts undergo apoptosis when resorption complete"
                    },
                    
                    phase3_reversal: {
                        name: "Reversal (Transition)",
                        duration: "Days to weeks",
                        cells: "Mononuclear cells (macrophages, osteoclast remnants)",
                        events: [
                            "Osteoclasts undergo apoptosis or detach",
                            "Mononuclear cells smooth resorption surface",
                            "Deposition of cement line (thin layer of matrix)",
                            "Chemotactic signals recruit osteoblasts",
                            "Coupling factors released (IGF-I, TGF-β, BMPs from matrix)"
                        ],
                        coupling: {
                            concept: "Resorption linked to formation - signals from resorption site recruit osteoblasts",
                            factors: "Growth factors stored in bone matrix released during resorption",
                            importance: "Ensures bone mass maintained (balance resorption with formation)"
                        }
                    },
                    
                    phase4_formation: {
                        name: "Formation (Bone Synthesis)",
                        duration: "3-4 months (slower than resorption)",
                        cells: "Osteoblasts (~100-200 per BMU)",
                        
                        mechanism: [
                            "Osteoblast precursors differentiate at resorption site",
                            "Osteoblasts align on resorption surface",
                            "Secrete osteoid (unmineralized matrix) - ~5 μm/day",
                            "Osteoid accumulates to fill resorption pit",
                            "Mineralization begins after ~10-20 day lag (mineralization lag time)",
                            "Primary mineralization reaches ~50-70% in days",
                            "Secondary mineralization continues for months to years",
                            "Some osteoblasts trapped in matrix → osteocytes",
                            "Others become bone lining cells or undergo apoptosis"
                        ],
                        
                        regulation: {
                            stimulated: "Mechanical loading, PTH (intermittent), GH, IGF-1, estrogen, testosterone",
                            inhibited: "Glucocorticoids, sclerostin, inflammatory cytokines"
                        },
                        
                        result: "New bone (secondary osteon in cortical; trabecular packet in spongy bone)"
                    },
                    
                    phase5_mineralization: {
                        name: "Mineralization (Maturation)",
                        duration: "Weeks to months",
                        primary: "~50-70% mineralized in first few days",
                        secondary: "Gradual increase to ~95% over months to years",
                        process: "Hydroxyapatite crystals grow and mature; degree of mineralization increases",
                        importance: "Bone stiffness and strength increase with mineralization"
                    },
                    
                    phase6_quiescence: {
                        name: "Quiescence (Resting)",
                        duration: "Variable (until next remodeling cycle initiated)",
                        cells: "Bone lining cells cover surface",
                        state: "No active remodeling; awaiting activation signal"
                    }
                }
            }
        },
        
        balance: {
            concept: "Bone mass depends on balance between resorption and formation",
            scenarios: {
                balanced: "Resorption = Formation → bone mass stable",
                positive: "Formation > Resorption → bone mass increases (growth, exercise response)",
                negative: "Resorption > Formation → bone mass decreases (aging, menopause, disuse)"
            },
            
            age_related: {
                growth: "Formation >> Resorption → net bone gain",
                young_adult: "Formation = Resorption → peak bone mass maintained (~age 30)",
                middle_age: "Resorption slightly > Formation → gradual loss (~0.5%/year)",
                elderly: {
                    men: "Gradual loss continues",
                    women_postmenopausal: "Accelerated loss (1-3%/year for 5-10 years after menopause)"
                }
            }
        },
        
        wolffLaw: {
            statement: "Bone adapts its mass and architecture to the mechanical demands placed upon it",
            principle: "Bone is deposited where needed and resorbed where not needed",
            
            mechanotransduction: {
                stimulus: "Mechanical loading (compression, tension, shear)",
                sensor: "Osteocytes - most abundant bone cells; interconnected network",
                mechanism: [
                    "Loading deforms bone matrix (strain)",
                    "Deformation creates fluid flow in lacuno-canalicular system",
                    "Osteocyte processes detect fluid shear stress",
                    "Mechanoreceptors activated: integrins, ion channels (PIEZO1, TRPV4), primary cilium",
                    "Osteocytes produce biochemical signals",
                    "Signals regulate osteoblast and osteoclast activity"
                ],
                
                signaling: {
                    loading: {
                        osteocyte_response: "↑ Wnt signaling, ↓ sclerostin, ↑ NO, ↑ PGE2",
                        osteoblast_effect: "Recruited and activated → bone formation",
                        osteoclast_effect: "Inhibited → reduced resorption",
                        result: "Net bone gain in loaded regions"
                    },
                    unloading: {
                        osteocyte_response: "↑ sclerostin (Wnt inhibitor), ↑ RANKL, ↓ OPG",
                        osteoblast_effect: "Inhibited → reduced formation",
                        osteoclast_effect: "Activated → increased resorption",
                        result: "Net bone loss in unloaded regions"
                    }
                }
            },
            
            strain_threshold: {
                definition: "Strain = deformation / original length (dimensionless)",
                physiologic_range: "~400-3000 microstrain (με) during normal activity",
                thresholds: {
                    below_400: "Bone resorption (disuse)",
                    400_1500: "Maintenance (remodeling equilibrium)",
                    1500_3000: "Bone formation (adaptation)",
                    above_3000: "Microdamage; modeling and repair"
                },
                optimal: "~2000-2500 με for maximal adaptation"
            },
            
            examples: {
                tennis_players: "Dominant arm has 10-15% higher bone density than non-dominant",
                astronauts: "Lose 1-2% bone mass per month in microgravity (spine, hip, heel)",
                bed_rest: "Healthy adults lose ~1% bone density after 30 days strict bed rest",
                weight_bearing_exercise: "Increases bone density 1-3% over months (site-specific)",
                trabecular_alignment: "Trabeculae orient along principal stress directions (visible in femoral head)"
            },
            
            clinical_applications: {
                osteoporosis_prevention: "Weight-bearing and resistance exercise recommended",
                fracture_healing: "Controlled loading accelerates healing; too little or too much impairs",
                prosthetics: "Stress shielding problem - bone around implant weakens if implant too stiff",
                orthodontics: "Teeth move by bone remodeling in response to applied force"
            }
        },
        
        calciumHomeostasis: {
            importance: "Extracellular Ca²⁺ essential for nerve function, muscle contraction, blood clotting, enzyme activity, cell signaling",
            normal_range: "8.5-10.5 mg/dL (2.1-2.6 mM) total serum calcium; ~1.0-1.3 mM ionized (physiologically active)",
            distribution: {
                bone: "99% of body calcium (~1 kg in adult skeleton)",
                extracellular_fluid: "0.9% (blood, interstitial fluid)",
                intracellular: "0.1% (kept very low by active pumping - important signaling molecule)"
            },
            
            inputs_outputs: {
                inputs: {
                    intestinal_absorption: "~200-400 mg/day (25-50% of dietary intake)",
                    bone_resorption: "~500 mg/day released; matched by deposition in steady state"
                },
                outputs: {
                    bone_deposition: "~500 mg/day in steady state",
                    renal_excretion: "~100-200 mg/day (98-99% reabsorbed)",
                    fecal_loss: "~200-400 mg/day (unabsorbed dietary + secreted)",
                    sweat: "~15 mg/day (more with heavy exercise)"
                },
                balance: "Neutral balance in healthy adults; positive in growth; negative in osteoporosis"
            },
            
            regulation: {
                sensors: {
                    parathyroid: "Calcium-sensing receptors (CaSR) on chief cells detect blood Ca²⁺",
                    thyroid_C_cells: "CaSR detect high Ca²⁺",
                    kidney: "CaSR in thick ascending limb and distal tubule"
                },
                
                hypocalcemia_response: {
                    trigger: "Blood Ca²⁺ < 8.5 mg/dL",
                    sensor: "Parathyroid CaSR → low Ca²⁺ signal",
                    effector: "Parathyroid glands release PTH",
                    
                    PTH_actions: {
                        bone: {
                            mechanism: "PTH binds PTHR1 on osteoblasts → osteoblasts express RANKL → RANKL binds RANK on osteoclast precursors → osteoclast differentiation and activation",
                            result: "Bone resorption ↑ → Ca²⁺ and PO₄³⁻ released into blood",
                            time_course: "Hours to days for significant effect",
                            note: "Intermittent PTH is anabolic (stimulates osteoblasts); continuous PTH is catabolic"
                        },
                        kidney: {
                            Ca_reabsorption: "↑ reabsorption in distal tubule → saves Ca²⁺ (effect within minutes)",
                            PO4_excretion: "↓ reabsorption in proximal tubule → phosphate wasted (prevents CaHPO₄ precipitation)",
                            vitamin_D_activation: "Stimulates 1α-hydroxylase → converts 25(OH)D to active 1,25(OH)₂D (calcitriol)"
                        },
                        intestine: {
                            indirect: "Via vitamin D activation",
                            vitamin_D_effect: "↑ Ca²⁺ and PO₄³⁻ absorption in small intestine (duodenum, jejunum)",
                            mechanism: "Calcitriol → upregulates calbindin (Ca²⁺-binding protein), calcium channels (TRPV6)",
                            time_course: "Hours to days"
                        }
                    },
                    
                    result: "Blood Ca²⁺ increases toward normal",
                    feedback: "Rising Ca²⁺ → binds CaSR on parathyroid → inhibits PTH release (negative feedback)"
                },
                
                hypercalcemia_response: {
                    trigger: "Blood Ca²⁺ > 10.5 mg/dL",
                    sensor: "Parathyroid CaSR → high Ca²⁺ signal; Thyroid C cell CaSR",
                    
                    PTH_suppression: {
                        action: "High Ca²⁺ → inhibits PTH release",
                        bone: "↓ osteoclast activity → ↓ bone resorption",
                        kidney: "↓ Ca²⁺ reabsorption; ↓ vitamin D activation",
                        intestine: "↓ Ca²⁺ absorption (via decreased vitamin D)",
                        result: "Reduced Ca²⁺ influx into blood"
                    },
                    
                    calcitonin_release: {
                        source: "Parafollicular C cells in thyroid",
                        actions: {
                            bone: "Inhibits osteoclast activity → ↓ bone resorption",
                            kidney: "↑ Ca²⁺ and PO₄³⁻ excretion"
                        },
                        result: "Blood Ca²⁺ decreases",
                        note: "Minor role in adults; more important in children",
                        clinical: "Calcitonin deficiency (post-thyroidectomy) does NOT cause hypercalcemia"
                    },
                    
                    result: "Blood Ca²⁺ decreases toward normal"
                }
            }
        },
        
        hormonalRegulation: {
            PTH: {
                full_name: "Parathyroid hormone",
                source: "Chief cells of parathyroid glands (4 small glands on posterior thyroid)",
                structure: "84 amino acid polypeptide; N-terminal 1-34 region biologically active",
                half_life: "~4 minutes (rapid response possible)",
                
                regulation: {
                    stimulus: "Low blood Ca²⁺ (detected by CaSR)",
                    inhibition: "High blood Ca²⁺, high vitamin D",
                    secondary_regulation: "Low Mg²⁺ impairs PTH secretion (hypomagnesemia → hypocalcemia)"
                },
                
                receptors: "PTHR1 (PTH/PTHrP receptor) on osteoblasts, kidney tubule cells",
                
                actions: "Increases blood Ca²⁺; decreases blood phosphate",
                targets: "Bone, kidney, intestine (indirect)",
                
                disorders: {
                    hyperparathyroidism_primary: {
                        cause: "Parathyroid adenoma or hyperplasia → autonomous PTH secretion",
                        lab: "High Ca²⁺, high/inappropriate PTH, low PO₄³⁻",
                        symptoms: "'Stones, bones, groans, psychiatric overtones' - kidney stones, bone pain, GI issues, fatigue/depression",
                        complications: "Osteoporosis, fractures, kidney stones, hypercalcemic crisis",
                        treatment: "Surgical removal of adenoma (parathyroidectomy)"
                    },
                    hyperparathyroidism_secondary: {
                        cause: "Chronic hypocalcemia (e.g., chronic kidney disease, vitamin D deficiency) → compensatory PTH elevation",
                        lab: "Low/normal Ca²⁺, high PTH, high PO₄³⁻ (if CKD)",
                        mechanism: "Kidneys can't make vitamin D or excrete phosphate → low Ca²⁺ absorption → PTH rises",
                        complications: "Renal osteodystrophy (abnormal bone remodeling)",
                        treatment: "Treat underlying cause; vitamin D, phosphate binders, calcimimetics"
                    },
                    hypoparathyroidism: {
                        cause: "Parathyroid damage/removal (thyroid surgery), autoimmune, genetic (DiGeorge syndrome)",
                        lab: "Low Ca²⁺, low/undetectable PTH, high PO₄³⁻",
                        symptoms: "Muscle spasms, tetany, paresthesias, Chvostek's sign, Trousseau's sign, seizures",
                        treatment: "Calcium and vitamin D supplementation (cannot give PTH chronically - tachyphylaxis)"
                    }
                },
                
                therapeutic_use: {
                    teriparatide: "Recombinant PTH(1-34) - osteoporosis treatment",
                    mechanism: "Intermittent administration → anabolic (stimulates osteoblasts more than osteoclasts)",
                    result: "Increases bone density, reduces fracture risk",
                    limitation: "Max 2 years treatment (concern for osteosarcoma in rats)"
                }
            },
            
            calcitonin: {
                source: "Parafollicular cells (C cells) in thyroid gland",
                structure: "32 amino acid polypeptide",
                half_life: "~10 minutes",
                
                regulation: {
                    stimulus: "High blood Ca²⁺ (detected by CaSR on C cells)",
                    inhibition: "Low blood Ca²⁺"
                },
                
                receptors: "Calcitonin receptors on osteoclasts",
                
                actions: {
                    bone: "Inhibits osteoclast activity → ↓ bone resorption → ↓ Ca²⁺ release",
                    kidney: "↑ Ca²⁺ and PO₄³⁻ excretion (minor effect)"
                },
                
                result: "Decreases blood Ca²⁺ (but minor effect in adults)",
                
                importance: {
                    children: "Significant role in bone growth and Ca²⁺ regulation",
                    adults: "Minor role - calcitonin deficiency (post-thyroidectomy) does NOT cause hypercalcemia",
                    pregnancy_lactation: "May protect maternal skeleton"
                },
                
                clinical_use: {
                    pagets_disease: "Calcitonin inhibits excessive osteoclast activity",
                    hypercalcemia: "Emergency treatment (short-term effect)",
                    osteoporosis: "Salmon calcitonin (more potent) - limited use now (bisphosphonates better)",
                    analgesic: "May reduce bone pain in fractures, Paget's"
                }
            },
            
            vitamin_D: {
                full_name: "Calcitriol (1,25-dihydroxyvitamin D₃) - active form",
                
                synthesis: {
                    step1: "Skin: 7-dehydrocholesterol + UVB (290-315 nm) → previtamin D₃ → vitamin D₃ (cholecalciferol)",
                    step2: "Liver: vitamin D₃ + 25-hydroxylase → 25(OH)D₃ (calcidiol) [storage form]",
                    step3: "Kidney: 25(OH)D₃ + 1α-hydroxylase → 1,25(OH)₂D₃ (calcitriol) [active form]",
                    regulation_of_step3: "Stimulated by PTH, low Ca²⁺, low PO₄³⁻; inhibited by FGF23, high Ca²⁺"
                },
                
                sources: {
                    sunlight: "Primary source - 10-15 min midday sun (face, arms, legs) produces ~10,000-20,000 IU",
                    dietary: "Fatty fish (salmon, mackerel), egg yolks, fortified milk/cereals, supplements",
                    note: "Few natural food sources; supplementation often needed in northern latitudes"
                },
                
                half_life: "~15 days (25(OH)D); ~15 hours (1,25(OH)₂D)",
                
                receptors: "VDR (vitamin D receptor) - nuclear receptor in intestine, bone, kidney, many other tissues",
                
                actions: {
                    intestine: {
                        primary_target: "Small intestine (duodenum, jejunum)",
                        mechanism: "Calcitriol → VDR → transcription of calcium absorption genes",
                        proteins_induced: "Calbindin-D (Ca²⁺-binding protein), TRPV6 (Ca²⁺ channel), plasma membrane Ca²⁺-ATPase",
                        result: "↑ Ca²⁺ and PO₄³⁻ absorption",
                        time_course: "Hours to days",
                        importance: "Primary mechanism for increasing Ca²⁺ absorption"
                    },
                    bone: {
                        paradox: "Promotes mineralization (adequate Ca/P) but also increases resorption (releases Ca/P)",
                        mineralization: "Adequate Ca²⁺ and PO₄³⁻ available → hydroxyapatite deposition",
                        resorption: "With PTH, stimulates osteoclast differentiation (via RANKL)",
                        net_effect: "Depends on Ca/P status; overall supports bone health if adequate intake"
                    },
                    kidney: {
                        action: "↑ Ca²⁺ and PO₄³⁻ reabsorption (minor compared to PTH)",
                        feedback: "High calcitriol → suppresses PTH synthesis (negative feedback)"
                    },
                    parathyroid: {
                        action: "Suppresses PTH gene transcription",
                        mechanism: "VDR in parathyroid cells",
                        clinical: "Vitamin D supplements reduce PTH in secondary hyperparathyroidism"
                    }
                },
                
                result: "Increases blood Ca²⁺ and PO₄³⁻ → promotes bone mineralization",
                
                deficiency: {
                    causes: "Inadequate sun exposure, dietary insufficiency, malabsorption, chronic kidney disease, liver disease, genetic (vitamin D-resistant rickets)",
                    consequences: {
                        children: "Rickets - inadequate mineralization of growing bone → soft bones, bowed legs, rachitic rosary, delayed fontanel closure, growth retardation",
                        adults: "Osteomalacia - inadequate mineralization → bone pain, muscle weakness, fractures; osteoporosis risk",
                        biochemistry: "Low Ca²⁺ (often normal due to secondary hyperparathyroidism), high PTH, low/normal PO₄³⁻, high alkaline phosphatase"
                    },
                    prevalence: "Very common - ~1 billion people worldwide have insufficiency",
                    diagnosis: "Serum 25(OH)D < 20 ng/mL (deficiency); 20-30 ng/mL (insufficiency); >30 ng/mL (sufficient)",
                    treatment: "Vitamin D supplementation (800-2000 IU/day maintenance; higher for treatment); calcium; sunlight"
                },
                
                toxicity: {
                    rare: "Requires massive doses (>10,000 IU/day for months)",
                    mechanism: "Excess vitamin D → hypercalcemia → nausea, vomiting, weakness, kidney damage",
                    treatment: "Stop vitamin D; hydration; sometimes steroids"
                },
                
                extra_skeletal_effects: {
                    immune: "VDR in immune cells; modulates immune function",
                    muscle: "VDR in muscle; deficiency → weakness, falls",
                    cardiovascular: "Associations with hypertension, heart disease (causal unclear)",
                    cancer: "Inverse associations with certain cancers (research ongoing)"
                }
            },
            
            sex_hormones: {
                estrogen: {
                    source: "Ovaries (women); adipose tissue aromatization of testosterone (men and women)",
                    actions_on_bone: [
                        "Inhibits osteoclast formation and activity → ↓ bone resorption",
                        "Promotes osteoblast survival → ↑ bone formation",
                        "Stimulates OPG production (decoy receptor for RANKL)",
                        "Inhibits osteocyte apoptosis",
                        "Enhances calcium absorption (synergy with vitamin D)"
                    ],
                    result: "Protects bone mass; maintains bone density",
                    
                    menopause: {
                        timing: "Average age ~51 years",
                        consequence: "Estrogen deficiency → rapid bone loss (1-3%/year for 5-10 years)",
                        mechanism: "↑ osteoclast activity and lifespan; ↑ RANKL/OPG ratio; ↑ inflammatory cytokines",
                        result: "Postmenopausal osteoporosis - #1 risk factor for osteoporosis in women",
                        prevention: "Exercise, calcium, vitamin D; consider hormone therapy or other medications"
                    },
                    
                    deficiency: {
                        causes: "Menopause, ovarian failure, anorexia nervosa, female athlete triad",
                        consequences: "Bone loss, increased fracture risk"
                    },
                    
                    hormone_therapy: {
                        use: "Prevent bone loss in postmenopausal women",
                        effectiveness: "Very effective at maintaining bone density",
                        risks: "Breast cancer, cardiovascular disease (controversial), blood clots",
                        current_view: "Not first-line for osteoporosis; consider if menopausal symptoms prominent"
                    },
                    
                    SERMs: {
                        examples: "Raloxifene, tamoxifen",
                        mechanism: "Selective estrogen receptor modulators - agonist in bone, antagonist in breast",
                        use: "Osteoporosis prevention/treatment; breast cancer prevention",
                        advantages: "No increased breast cancer risk (raloxifene protective)"
                    }
                },
                
                testosterone: {
                    source: "Testes (men); ovaries and adrenals (women)",
                    actions_on_bone: [
                        "Stimulates osteoblast proliferation and activity",
                        "Promotes periosteal bone formation (larger bones in men)",
                        "Converted to estrogen via aromatase (estrogen effect in men too)"
                    ],
                    result: "Increases bone mass; maintains bone density",
                    
                    deficiency: {
                        causes: "Hypogonadism, aging, medications (GnRH agonists for prostate cancer)",
                        consequences: "Bone loss, osteoporosis, fractures",
                        treatment: "Testosterone replacement (if indicated)"
                    },
                    
                    note: "Estrogen (from aromatization) may be more important than testosterone for bone health in men"
                }
            },
            
            glucocorticoids: {
                source: "Adrenal cortex (cortisol); synthetic (prednisone, dexamethasone)",
                
                actions_on_bone: {
                    osteoblasts: "Inhibit differentiation and function; promote apoptosis → ↓ bone formation",
                    osteocytes: "Promote apoptosis → accumulation of microdamage",
                    osteoclasts: "Initially suppress, then increase activity → ↑ bone resorption (indirect via ↓ OPG)",
                    calcium: "↓ intestinal absorption; ↑ renal excretion → hypocalcemia → secondary hyperparathyroidism",
                    muscle: "Cause myopathy → falls → fractures"
                },
                
                result: "Rapid bone loss (especially trabecular bone); increased fracture risk",
                
                clinical: {
                    indications: "Asthma, COPD, rheumatoid arthritis, inflammatory bowel disease, organ transplant, many others",
                    bone_loss: "5-10% in first year; then ~2-3%/year",
                    fracture_risk: "Increased even at low doses; fractures can occur at higher BMD than non-glucocorticoid osteoporosis",
                    sites: "Vertebrae, ribs, hips"
                },
                
                prevention: {
                    minimize_dose: "Lowest effective dose for shortest duration",
                    calcium_vitamin_D: "Ensure adequate intake",
                    bisphosphonates: "Consider prophylaxis if high dose or prolonged therapy",
                    exercise: "Weight-bearing and resistance exercise",
                    monitoring: "DEXA scan at baseline and periodically"
                }
            },
            
            thyroid_hormone: {
                source: "Thyroid gland (T3, T4)",
                
                actions_on_bone: {
                    normal_levels: "Essential for normal bone growth and remodeling",
                    excess: "Increases bone turnover (both formation and resorption, but resorption dominates) → bone loss"
                },
                
                hyperthyroidism: {
                    cause: "Graves' disease, toxic nodule, excessive thyroid hormone replacement",
                    consequence: "Increased bone resorption → bone loss, osteoporosis, fractures",
                    treatment: "Treat hyperthyroidism; monitor bone density"
                },
                
                hypothyroidism: {
                    consequence: "Delayed skeletal development (children); decreased bone turnover (adults)",
                    treatment: "Thyroid hormone replacement (careful not to over-replace)"
                }
            },
            
            growth_hormone: {
                source: "Anterior pituitary",
                mechanism: "Via IGF-1 (insulin-like growth factor 1) produced in liver and locally in bone",
                
                actions_on_bone: [
                    "Stimulates chondrocyte proliferation in growth plates (children)",
                    "Stimulates osteoblast differentiation and activity",
                    "Promotes bone formation"
                ],
                
                deficiency: {
                    children: "Short stature, delayed skeletal maturation",
                    adults: "Decreased bone density, increased fracture risk",
                    treatment: "GH replacement"
                },
                
                excess: {
                    children: "Gigantism (before plate closure)",
                    adults: "Acromegaly (after plate closure) - thickened bones, enlarged hands/feet/jaw"
                }
            }
        },
        
        modelingVsRemodeling: {
            modeling: {
                definition: "Change in bone shape and architecture",
                timing: "Primarily during growth; some in adulthood",
                mechanism: "Formation and resorption occur on different surfaces (uncoupled)",
                purpose: "Sculpt bone shape; widen bones during growth; adapt to loading",
                example: "Periosteal apposition during growth; response to fracture or extreme loading"
            },
            
            remodeling: {
                definition: "Replacement of bone without changing overall shape",
                timing: "Throughout life (10%/year in adults)",
                mechanism: "Formation and resorption at same location (coupled)",
                purpose: "Repair microdamage; maintain Ca/P homeostasis; adapt to moderate loading changes",
                example: "Osteon replacement in cortical bone; trabecular packet formation"
            }
        },
        
        clinicalCorrelations: {
            osteoporosis: {
                definition: "Low bone mass and microarchitectural deterioration → increased fracture risk",
                diagnosis: "DEXA scan T-score ≤ -2.5",
                
                types: {
                    primary: {
                        type1_postmenopausal: "Estrogen deficiency → rapid trabecular bone loss",
                        type2_senile: "Aging → cortical and trabecular loss; decreased osteoblast function"
                    },
                    secondary: "Due to medications (glucocorticoids), diseases (hyperparathyroidism, hyperthyroidism, celiac), lifestyle (smoking, alcohol)"
                },
                
                risk_factors: [
                    "Age (>65 women, >70 men)",
                    "Female sex",
                    "Menopause / estrogen deficiency",
                    "Low body weight (<127 lbs)",
                    "Family history",
                    "Previous fracture",
                    "Smoking",
                    "Excessive alcohol",
                    "Inactivity",
                    "Low calcium/vitamin D",
                    "Certain medications (glucocorticoids, anticonvulsants, PPIs)",
                    "Medical conditions (rheumatoid arthritis, celiac, hyperthyroidism)"
                ],
                
                consequences: "Fractures (hip, vertebrae, wrist, humerus); pain; disability; mortality (20% 1-year mortality after hip fracture)",
                
                prevention: {
                    modifiable: "Adequate calcium (1000-1200 mg/day), vitamin D (800-1000 IU/day), weight-bearing exercise, avoid smoking/excess alcohol",
                    screening: "DEXA scan for women ≥65, men ≥70; younger if risk factors"
                },
                
                treatment: {
                    nonpharmacologic: "Exercise (weight-bearing, resistance), fall prevention, calcium, vitamin D",
                    pharmacologic: {
                        bisphosphonates: "Alendronate, risedronate, zoledronic acid - inhibit osteoclasts; first-line",
                        denosumab: "RANKL antibody - inhibits osteoclast formation; very effective",
                        teriparatide: "PTH analog - anabolic; stimulates osteoblasts; for severe osteoporosis",
                        romosozumab: "Sclerostin antibody - anabolic and anti-resorptive; newest",
                        SERMs: "Raloxifene - modest effect; mainly for postmenopausal women",
                        hormone_therapy: "Effective but not first-line due to risks"
                    }
                }
            },
            
            osteomalacia_rickets: {
                definition: "Inadequate bone mineralization",
                cause: "Vitamin D deficiency, hypophosphatemia, renal tubular acidosis, certain medications",
                
                rickets: {
                    age: "Children (before growth plate closure)",
                    features: "Bowed legs, knock knees, rachitic rosary (enlarged costochondral junctions), frontal bossing, delayed fontanel closure, growth retardation",
                    mechanism: "Defective mineralization of growth plate cartilage and newly formed bone"
                },
                
                osteomalacia: {
                    age: "Adults",
                    features: "Bone pain (often diffuse), muscle weakness (proximal myopathy), waddling gait, fractures (especially pseudofractures/Looser zones)",
                    mechanism: "Defective mineralization of newly formed osteoid"
                },
                
                diagnosis: "Low 25(OH)D, low/normal Ca²⁺, low/normal PO₄³⁻, high PTH, high alkaline phosphatase; bone biopsy (if needed) shows increased osteoid",
                
                treatment: "Vitamin D supplementation (high dose initially, then maintenance), calcium, treat underlying cause"
            },
            
            pagets_disease: {
                description: "Localized disorder of excessive, disorganized bone remodeling",
                prevalence: "~1% of adults >40 years; more common in Northern Europe",
                
                pathophysiology: {
                    phase1: "Osteoclasts overactive → excessive bone resorption",
                    phase2: "Osteoblasts try to compensate → excessive, rapid, disorganized bone formation",
                    result: "Thick but structurally weak bone; mosaic pattern of woven and lamellar bone"
                },
                
                sites: "Pelvis, spine, skull, femur, tibia",
                
                clinical: {
                    asymptomatic: "Often discovered incidentally (elevated alkaline phosphatase)",
                    bone_pain: "Deep, aching",
                    bone_deformity: "Bowed legs, enlarged skull, asymmetry",
                    fractures: "Pathologic fractures; fissure fractures on convex side of bowed bone",
                    arthritis: "Adjacent joints affected",
                    neurologic: "Nerve compression (spinal stenosis, hearing loss if skull involved)",
                    cardiac: "High-output heart failure (rare; if extensive disease - increased vascularity)"
                },
                
                diagnosis: "Elevated alkaline phosphatase (bone-specific), X-rays (thickened, sclerotic bone; mixed lytic/sclerotic), bone scan (hot spots)",
                
                treatment: {
                    indications: "Symptomatic disease, involvement of weight-bearing bones or skull, high risk of complications",
                    bisphosphonates: "Zoledronic acid, pamidronate - suppress osteoclast activity; very effective",
                    calcitonin: "Less effective than bisphosphonates; rarely used now"
                },
                
                complications: "Fractures, arthritis, deafness, nerve compression, rarely osteosarcoma (<1%)"
            },
            
            renal_osteodystrophy: {
                description: "Bone disease in chronic kidney disease",
                
                pathophysiology: {
                    step1: "Kidney damage → ↓ vitamin D activation (1α-hydroxylase) → ↓ intestinal Ca²⁺ absorption",
                    step2: "Kidney damage → ↓ phosphate excretion → hyperphosphatemia",
                    step3: "Low Ca²⁺, high PO₄³⁻ → stimulate PTH release (secondary hyperparathyroidism)",
                    step4: "Chronic high PTH → excessive bone resorption → renal osteodystrophy",
                    FGF23: "Phosphatonin; elevated in CKD; inhibits vitamin D activation, increases PO₄ excretion (but kidneys damaged so less effective)"
                },
                
                bone_histology: {
                    osteitis_fibrosa_cystica: "High turnover; excessive PTH → osteoclast activity → fibrous replacement",
                    adynamic_bone_disease: "Low turnover; oversuppression of PTH → minimal remodeling",
                    osteomalacia: "Defective mineralization; aluminum toxicity (rare now)"
                },
                
                clinical: "Bone pain, fractures, muscle weakness, growth retardation (children)",
                
                treatment: "Phosphate binders, vitamin D analogs (calcitriol, paricalcitol), calcimimetics (cinacalcet - activates CaSR, suppresses PTH), dietary phosphate restriction, dialysis, kidney transplant"
            },
            
            hypercalcemia_of_malignancy: {
                description: "High blood calcium due to cancer",
                prevalence: "Most common cause of hypercalcemia in hospitalized patients",
                
                mechanisms: {
                    PTHrP: "Parathyroid hormone-related protein secreted by tumors (lung, breast, renal, bladder) → mimics PTH actions",
                    osteolytic_metastases: "Bone metastases (breast, myeloma) → local osteoclast activation → Ca²⁺ release",
                    vitamin_D: "Lymphomas produce 1α-hydroxylase → excess calcitriol",
                    ectopic_PTH: "Rare; tumor secretes actual PTH"
                },
                
                clinical: "Symptoms of hypercalcemia (nausea, constipation, confusion, polyuria, dehydration, cardiac arrhythmias) + cancer symptoms",
                
                diagnosis: "High Ca²⁺, low/normal PTH (suppressed), elevated PTHrP (if that mechanism)",
                
                treatment: "IV fluids, bisphosphonates (zoledronic acid), calcitonin (short-term), denosumab, treat underlying cancer"
            }
        },
        
        pharmaceuticalInterventions: {
            antiresorptive: {
                bisphosphonates: {
                    examples: "Alendronate, risedronate, ibandronate, zoledronic acid",
                    mechanism: "Pyrophosphate analogs; bind hydroxyapatite → ingested by osteoclasts → inhibit farnesyl pyrophosphate synthase → osteoclast apoptosis",
                    effect: "↓ bone resorption; stabilize or increase bone density",
                    use: "Osteoporosis, Paget's disease, hypercalcemia of malignancy, bone metastases",
                    administration: "Oral (weekly or monthly; fasting required) or IV (yearly)",
                    side_effects: "Esophageal irritation, musculoskeletal pain, rarely osteonecrosis of jaw (ONJ) or atypical femoral fractures",
                    duration: "5-10 years; then reassess (drug holiday may be considered)"
                },
                
                denosumab: {
                    mechanism: "Monoclonal antibody against RANKL → prevents RANK activation → inhibits osteoclast formation and activity",
                    effect: "Powerful antiresorptive; rapid, reversible",
                    use: "Osteoporosis (postmenopausal women, men, glucocorticoid-induced), bone metastases",
                    administration: "Subcutaneous injection every 6 months",
                    advantages: "More effective than bisphosphonates; can use in renal insufficiency",
                    side_effects: "Hypocalcemia (ensure adequate Ca/VitD), infections, rarely ONJ or atypical fractures",
                    rebound: "Rapid bone loss if discontinued → must transition to bisphosphonate"
                },
                
                SERMs: {
                    example: "Raloxifene",
                    mechanism: "Selective estrogen receptor modulator - agonist in bone, antagonist in breast/uterus",
                    effect: "↓ bone resorption (modest)",
                    use: "Osteoporosis prevention/treatment in postmenopausal women; breast cancer risk reduction",
                    advantages: "Reduces breast cancer risk; no endometrial cancer risk",
                    side_effects: "Hot flashes, leg cramps, increased VTE risk"
                },
                
                calcitonin: {
                    source: "Salmon calcitonin (more potent than human)",
                    mechanism: "Inhibits osteoclasts",
                    effect: "↓ bone resorption (modest); analgesic for bone pain",
                    use: "Paget's disease, hypercalcemia, acute vertebral fracture pain (off-label)",
                    administration: "Nasal spray or subcutaneous injection",
                    note: "Less effective than bisphosphonates; rarely used for osteoporosis now"
                },
                
                estrogen: {
                    mechanism: "Inhibits osteoclasts; promotes osteoblast survival",
                    effect: "↓ bone resorption; maintains bone density",
                    use: "Postmenopausal hormone therapy (not first-line for osteoporosis)",
                    risks: "Breast cancer, cardiovascular disease (timing hypothesis), VTE",
                    current_recommendation: "Lowest dose for shortest duration for menopausal symptoms; not for osteoporosis alone unless other benefits"
                }
            },
            
            anabolic: {
                teriparatide: {
                    description: "Recombinant human PTH(1-34)",
                    mechanism: "Intermittent administration → stimulates osteoblasts more than osteoclasts (anabolic window)",
                    effect: "↑ bone formation >> ↑ bone resorption → net bone gain; improves microarchitecture",
                    use: "Severe osteoporosis; glucocorticoid-induced osteoporosis; failed antiresorptives",
                    administration: "Daily subcutaneous injection",
                    duration: "Maximum 2 years (osteosarcoma in rats at very high doses; not seen in humans)",
                    advantages: "Most effective at increasing bone density and reducing fractures",
                    side_effects: "Nausea, leg cramps, dizziness, hypercalcemia (mild)",
                    after_stopping: "Transition to antiresorptive (bisphosphonate or denosumab) to maintain gains"
                },
                
                abaloparatide: {
                    description: "PTHrP analog",
                    mechanism: "Similar to teriparatide; selective for RG conformation of PTHR1",
                    effect: "↑ bone formation; slightly less bone resorption than teriparatide",
                    use: "Severe osteoporosis",
                    duration: "Maximum 2 years",
                    similar_profile: "To teriparatide but may have slightly fewer hypercalcemia episodes"
                },
                
                romosozumab: {
                    description: "Monoclonal antibody against sclerostin",
                    mechanism: "Sclerostin (produced by osteocytes) inhibits Wnt signaling → inhibits osteoblasts; antibody blocks sclerostin → ↑ osteoblast activity + ↓ osteoclast activity (dual effect)",
                    effect: "Rapid increase in bone formation; decrease in bone resorption (wanes over time)",
                    use: "Severe osteoporosis, especially in women at very high fracture risk",
                    administration: "Monthly subcutaneous injection",
                    duration: "12 months; then transition to antiresorptive",
                    advantages: "Very effective; rapid BMD increase",
                    concerns: "Possible increased cardiovascular risk (black box warning); not for recent MI/stroke",
                    newest: "Approved 2019; most recent addition to armamentarium"
                }
            },
            
            other: {
                calcium_supplements: "1000-1200 mg/day; essential adjunct to all therapies",
                vitamin_D_supplements: "800-1000 IU/day (higher if deficient); essential for calcium absorption and bone health",
                
                combination: {
                    sequential: "Teriparatide/romosozumab (anabolic) for 1-2 years → bisphosphonate/denosumab (antiresorptive) to maintain",
                    not_simultaneous: "Do NOT combine anabolic and antiresorptive (antiresorptive blunts anabolic effect)"
                }
            }
        },
        
        examples: [
            {
                scenario: "70-year-old woman with vertebral compression fracture",
                pathophysiology: "Postmenopausal osteoporosis - estrogen deficiency → ↑ bone resorption → trabecular bone loss → vertebral fracture",
                DEXA: "L1-L4 T-score -3.2",
                treatment: "Bisphosphonate (alendronate), calcium, vitamin D, exercise, fall prevention; consider teriparatide if severe"
            },
            {
                scenario: "Tennis player with dominant arm",
                observation: "Dominant arm bone density 12% higher than non-dominant",
                mechanism: "Wolff's Law - mechanical loading from racket impact → osteocyte mechanotransduction → ↑ bone formation",
                implication: "Exercise is site-specific; weight-bearing exercise prevents osteoporosis"
            },
            {
                scenario: "Astronaut returning from 6-month ISS mission",
                bone_loss: "1-2% per month; total ~8% bone density loss (spine, hip)",
                mechanism: "Microgravity → no weight-bearing load → ↓ mechanical stimulus → osteocytes signal ↑ RANKL/↓ OPG → bone resorption exceeds formation",
                mitigation: "Resistance exercise 2 hours/day; bisphosphonates; limited effectiveness",
                recovery: "Partial recovery after return to Earth; may not fully regain pre-flight density"
            }
        ],
        
        applications: [
            "Osteoporosis diagnosis, prevention, and treatment",
            "Understanding effects of exercise, nutrition, hormones on bone health",
            "Drug development for bone diseases (bisphosphonates, denosumab, romosozumab)",
            "Space medicine - preventing bone loss in astronauts",
            "Endocrinology - calcium homeostasis disorders (hyperparathyroidism, vitamin D deficiency)",
            "Oncology - bone metastases, hypercalcemia of malignancy",
            "Sports medicine - stress fractures, bone adaptation to training",
            "Orthopedics - fracture healing, prosthetic design (stress shielding)"
        ]
    };
    
    return content;
}

handleAxialSkeleton(problem) {
    const content = {
        topic: "Axial Skeleton: Skull, Vertebral Column, and Thoracic Cage",
        category: 'skeletal_anatomy',
        summary: "The axial skeleton forms the body's central axis and consists of 80 bones: the skull (22 bones), vertebral column (26 bones including fused sacrum and coccyx), and thoracic cage (25 bones: sternum and 24 ribs). It provides the framework for the head, neck, and trunk, protects vital organs (brain, spinal cord, heart, lungs), and provides attachment sites for muscles.",
        
        overview: {
            total_bones: 80,
            divisions: {
                skull: "22 bones (8 cranial + 14 facial) + 6 auditory ossicles + 1 hyoid",
                vertebral_column: "26 bones (7 cervical + 12 thoracic + 5 lumbar + 1 sacrum + 1 coccyx)",
                thoracic_cage: "25 bones (1 sternum + 24 ribs)"
            },
            functions: [
                "Forms central body axis and framework",
                "Protects brain, spinal cord, heart, lungs",
                "Supports head, neck, trunk",
                "Attachment for appendicular skeleton",
                "Attachment for muscles (respiration, posture, movement)",
                "Houses bone marrow for hematopoiesis"
            ]
        },
        
        skull: {
            overview: {
                total_bones: 22,
                cranial_bones: 8,
                facial_bones: 14,
                additional: "6 auditory ossicles (not part of 22), 1 hyoid bone (associated but not articulated)",
                functions: [
                    "Protect brain, eyes, inner ears",
                    "Form face",
                    "Provide openings for air and food passage",
                    "Secure teeth",
                    "Anchor facial muscles for expression and mastication",
                    "House special sense organs (vision, hearing, balance, smell, taste)"
                ]
            },
            
            cranial_bones: {
                description: "Eight bones forming braincase (neurocranium)",
                
                frontal: {
                    number: 1,
                    location: "Forehead; anterior cranium; superior orbit",
                    shape: "Shell-shaped",
                    articulations: ["Parietal bones (coronal suture)", "Sphenoid", "Ethmoid", "Nasal bones", "Maxillae", "Zygomatic bones"],
                    features: {
                        frontal_squama: "Forehead region",
                        supraorbital_margin: "Superior border of orbit",
                        supraorbital_foramen: "Nerve and vessels to forehead",
                        glabella: "Smooth area between eyebrows",
                        frontal_sinuses: "Air-filled cavities in bone; paired; superior to orbits",
                        frontal_crest: "Internal; attachment for meninges"
                    },
                    development: "Two halves (left and right) fuse by age 6-8; metopic suture may persist in ~10%",
                    clinical: "Frontal sinus infections, frontal bone fractures (trauma)"
                },
                
                parietal: {
                    number: 2,
                    location: "Superior and lateral walls of cranium",
                    shape: "Quadrilateral, curved",
                    articulations: ["Each other (sagittal suture)", "Frontal (coronal suture)", "Occipital (lambdoid suture)", "Temporal (squamous suture)", "Sphenoid"],
                    features: {
                        parietal_eminence: "Rounded prominence; ossification center",
                        superior_temporal_line: "Marks attachment of temporalis fascia",
                        inferior_temporal_line: "Attachment of temporalis muscle"
                    },
                    internal_features: "Grooves for meningeal vessels; pits for arachnoid granulations",
                    clinical: "Commonly fractured in head trauma; calvaria bone grafts"
                },
                
                occipital: {
                    number: 1,
                    location: "Posterior and inferior cranium; forms back and base of skull",
                    articulations: ["Parietal bones (lambdoid suture)", "Temporal bones", "Sphenoid", "Atlas (C1 vertebra) via occipital condyles"],
                    features: {
                        foramen_magnum: {
                            description: "Large opening in base",
                            passage: "Spinal cord, vertebral arteries, spinal accessory nerves (CN XI)",
                            clinical: "Site of brainstem compression in Chiari malformation"
                        },
                        occipital_condyles: {
                            description: "Paired, oval processes flanking foramen magnum",
                            articulation: "Superior articular facets of atlas (C1)",
                            movement: "Atlantooccipital joint - flexion/extension (nodding 'yes')"
                        },
                        external_occipital_protuberance: "Midline bump on posterior skull; palpable; muscle attachment",
                        superior_nuchal_line: "Curved ridge; attachment for trapezius, sternocleidomastoid",
                        inferior_nuchal_line: "Below superior line; deeper muscle attachments",
                        internal_occipital_protuberance: "Inside skull; attachment for falx cerebri and tentorium cerebelli",
                        hypoglossal_canal: "Passage for hypoglossal nerve (CN XII)"
                    },
                    development: "Develops from four parts; fuse by age 6",
                    clinical: "Occipital bone fractures; basilar skull fractures extend into foramen magnum"
                },
                
                temporal: {
                    number: 2,
                    location: "Lateral walls of cranium; inferior to parietal bones",
                    complexity: "Complex bones with multiple parts and many features",
                    parts: {
                        squamous_part: {
                            description: "Thin, flat, fan-shaped; forms lateral wall",
                            zygomatic_process: "Projects anteriorly; articulates with zygomatic bone → zygomatic arch",
                            mandibular_fossa: "Depression; articulates with mandibular condyle (TMJ)",
                            articular_tubercle: "Ridge anterior to fossa; limits anterior mandible displacement"
                        },
                        petrous_part: {
                            description: "Dense, pyramid-shaped; projects medially and anteriorly into skull base",
                            location: "Between sphenoid and occipital",
                            contents: "Houses inner ear (cochlea, semicircular canals)",
                            hardness: "Densest bone in body",
                            internal_acoustic_meatus: "Canal for CN VII (facial) and CN VIII (vestibulocochlear)",
                            carotid_canal: "Passage for internal carotid artery",
                            jugular_foramen: "Between temporal and occipital; internal jugular vein, CN IX, X, XI"
                        },
                        tympanic_part: {
                            description: "Curved plate inferior to squamous part",
                            external_acoustic_meatus: "External ear canal",
                            function: "Forms anterior, inferior, posterior walls of ear canal"
                        },
                        mastoid_part: {
                            description: "Posterior-inferior projection",
                            mastoid_process: "Prominent, cone-shaped projection; palpable behind ear; attachment for sternocleidomastoid",
                            mastoid_air_cells: "Honeycomb of air-filled spaces; communicate with middle ear",
                            mastoid_notch: "Medial to process; attachment for digastric muscle"
                        },
                        styloid_process: {
                            description: "Slender, pointed projection; inferior to external acoustic meatus",
                            length: "~2.5 cm",
                            attachments: "Stylohyoid ligament, stylohyoid muscle, stylopharyngeus muscle, styloglossus muscle"
                        }
                    },
                    clinical: {
                        mastoiditis: "Infection of mastoid air cells; complication of middle ear infection",
                        temporal_bone_fracture: "Longitudinal (more common) vs transverse; can damage CN VII, VIII",
                        TMJ_disorders: "Pain, clicking, limited opening of temporomandibular joint"
                    }
                },
                
                sphenoid: {
                    number: 1,
                    location: "Central skull base; articulates with all other cranial bones",
                    description: "Butterfly or bat-shaped; most complex cranial bone",
                    nickname: "Keystone bone of cranium",
                    parts: {
                        body: {
                            description: "Central, cube-shaped",
                            sella_turcica: "Saddle-shaped depression on superior surface; houses pituitary gland",
                            hypophyseal_fossa: "Depression within sella turcica for pituitary",
                            sphenoid_sinuses: "Paired air-filled cavities in body; largest at adolescence"
                        },
                        greater_wings: {
                            description: "Large, lateral projections from body",
                            location: "Form part of lateral skull wall, floor of middle cranial fossa, posterior orbit",
                            foramina: {
                                foramen_rotundum: "Maxillary nerve (CN V₂)",
                                foramen_ovale: "Mandibular nerve (CN V₃), accessory meningeal artery",
                                foramen_spinosum: "Middle meningeal artery and vein"
                            }
                        },
                        lesser_wings: {
                            description: "Smaller, anterior projections",
                            location: "Form posterior part of orbit roof",
                            optic_canal: "Passage for optic nerve (CN II) and ophthalmic artery",
                            anterior_clinoid_processes: "Posterior attachment for tentorium cerebelli"
                        },
                        pterygoid_processes: {
                            description: "Paired, inferiorly-directed processes",
                            plates: "Medial and lateral pterygoid plates",
                            function: "Attachment for pterygoid muscles (mastication)",
                            pterygoid_fossa: "Between medial and lateral plates"
                        }
                    },
                    articulations: "All cranial bones plus palatine, zygomatic, maxillae, vomer",
                    clinical: "Sphenoid sinus infections; pituitary tumors (transsphenoidal surgery approach); CN II compression"
                },
                
                ethmoid: {
                    number: 1,
                    location: "Between orbits; forms part of medial orbit wall, nasal cavity roof, nasal septum",
                    description: "Light, spongy bone; very delicate",
                    parts: {
                        cribriform_plate: {
                            description: "Horizontal, perforated plate forming nasal cavity roof",
                            location: "Lies in ethmoid notch of frontal bone",
                            foramina: "Numerous tiny holes (cribriform = 'sieve-like')",
                            passage: "Olfactory nerve fibers (CN I) from nasal mucosa to olfactory bulbs",
                            crista_galli: "Vertical, midline projection superior to cribriform plate; attachment for falx cerebri"
                        },
                        perpendicular_plate: {
                            description: "Vertical, midline projection inferiorly from cribriform plate",
                            function: "Forms superior part of nasal septum",
                            articulations: "Nasal bones, septal cartilage, vomer"
                        },
                        ethmoidal_labyrinth: {
                            description: "Paired lateral masses; 'honeycomb' structure",
                            ethmoid_air_cells: "3-18 thin-walled cavities; anterior, middle, posterior groups",
                            orbital_plate: "Thin, lateral wall of labyrinth; forms medial orbit wall (lamina papyracea - 'paper-thin plate')",
                            superior_nasal_concha: "Curved projection into nasal cavity",
                            middle_nasal_concha: "Larger curved projection below superior"
                        }
                    },
                    clinical: {
                        fractures: "Cribriform plate fractures → CSF rhinorrhea (CSF leak through nose), anosmia (loss of smell)",
                        sinusitis: "Ethmoid sinusitis; infection can spread to orbit",
                        orbital_blowout: "Orbital floor (thin) fractures into maxillary sinus or medial wall into ethmoid"
                    }
                }
            },
            
            facial_bones: {
                description: "Fourteen bones forming face",
                
                mandible: {
                    number: 1,
                    description: "Lower jaw; largest, strongest facial bone",
                    unique: "ONLY movable skull bone (via temporomandibular joint)",
                    parts: {
                        body: {
                            description: "Horizontal, U-shaped",
                            alveolar_process: "Superior border; sockets for lower teeth (16 teeth)",
                            mental_protuberance: "Chin; anterior midline projection",
                            mental_foramen: "Opening below 2nd premolar; mental nerve and vessels (from inferior alveolar)",
                            oblique_line: "Ridge on lateral surface",
                            mylohyoid_line: "Internal ridge; attachment for mylohyoid muscle (floor of mouth)",
                            digastric_fossa: "Internal, inferior midline; attachment for digastric muscle"
                        },
                        ramus: {
                            description: "Vertical portion; paired; project superiorly from body",
                            angle: "Junction of body and ramus; ~110-120° (gonial angle)",
                            mandibular_notch: "U-shaped notch between condylar and coronoid processes",
                            condylar_process: {
                                description: "Posterior superior projection",
                                head: "Articulates with mandibular fossa of temporal bone (TMJ)",
                                neck: "Constriction below head"
                            },
                            coronoid_process: {
                                description: "Anterior superior projection",
                                function: "Attachment for temporalis muscle"
                            },
                            mandibular_foramen: "On medial surface; entrance for inferior alveolar nerve and vessels",
                            lingula: "Small projection overlying mandibular foramen"
                        }
                    },
                    development: "Two halves fuse at midline (mental symphysis) by end of 1st year",
                    sex_differences: {
                        male: "Larger, more robust, square chin, gonial angle ~90°",
                        female: "Smaller, more gracile, pointed chin, gonial angle >90°"
                    },
                    clinical: {
                        fractures: "Common facial fracture; often bilateral (parasymphyseal, angle, condyle)",
                        TMJ_disorders: "Pain, clicking, dislocation",
                        dental_anesthesia: "Inferior alveolar nerve block at mandibular foramen",
                        osteomyelitis: "Infection; risk with poor dentition"
                    }
                },
                
                maxillae: {
                    number: 2,
                    description: "Upper jaw bones; fuse at midline (intermaxillary suture)",
                    importance: "Key bones - articulate with all facial bones except mandible; form most of hard palate, floor of orbits, lateral walls/floor of nasal cavity",
                    parts: {
                        body: {
                            description: "Pyramidal; hollow (contains maxillary sinus)",
                            maxillary_sinus: {
                                description: "Largest paranasal sinus",
                                location: "Within body of maxilla",
                                opening: "Into middle nasal meatus",
                                clinical: "Most commonly infected sinus; roots of upper molars project into sinus"
                            }
                        },
                        processes: {
                            alveolar_process: {
                                description: "Inferior; arches inferiorly from body",
                                function: "Contains sockets (alveoli) for upper teeth (8 per side)",
                                clinical: "Resorbs after tooth loss"
                            },
                            palatine_process: {
                                description: "Horizontal, medial projection",
                                function: "Forms anterior 2/3 of hard palate",
                                articulation: "Meets counterpart at midline (median palatine suture)",
                                incisive_foramen: "Posterior to central incisors; nasopalatine nerve",
                                clinical: "Cleft palate - failure of fusion"
                            },
                            frontal_process: {
                                description: "Vertical, superior projection",
                                location: "Lateral to nose",
                                articulations: "Frontal bone, nasal bone",
                                lacrimal_groove: "Houses lacrimal sac"
                            },
                            zygomatic_process: {
                                description: "Lateral projection",
                                articulation: "Zygomatic bone"
                            }
                        },
                        infraorbital_foramen: {
                            location: "Inferior to orbit",
                            passage: "Infraorbital nerve and vessels (continuation of maxillary nerve CN V₂)"
                        }
                    },
                    clinical: {
                        fractures: "Midface fractures (Le Fort I, II, III)",
                        cleft_lip_palate: "Failure of maxillary processes to fuse",
                        sinusitis: "Maxillary sinusitis; toothache may be symptom",
                        dental_anesthesia: "Infraorbital nerve block"
                    }
                },
                
                zygomatic: {
                    number: 2,
                    description: "Cheekbones",
                    location: "Lateral to maxillae; inferior and lateral to orbits",
                    shape: "Quadrilateral",
                    articulations: ["Maxilla", "Frontal bone", "Temporal bone (via zygomatic arch)", "Sphenoid (greater wing)"],
                    features: {
                        temporal_process: "Posterior projection; articulates with zygomatic process of temporal → forms zygomatic arch",
                        frontal_process: "Superior projection; forms lateral orbital rim",
                        zygomaticofacial_foramen: "Anterior surface; nerve and vessels"
                    },
                    zygomatic_arch: {
                        formation: "Zygomatic process of temporal + temporal process of zygomatic",
                        function: "Attachment for masseter muscle; protects temporal fossa",
                        palpation: "Easily felt"
                    },
                    clinical: {
                        fractures: "Zygomatic complex (tripod) fractures; common in facial trauma",
                        depressed_cheek: "Sign of zygomatic fracture"
                    }
                },
                
                nasal: {
                    number: 2,
                    description: "Small, rectangular bones forming bridge of nose",
                    location: "Between frontal processes of maxillae",
                    articulations: ["Each other (internasal suture)", "Frontal bone", "Maxillae", "Ethmoid (perpendicular plate)", "Septal cartilage"],
                    clinical: "Commonly fractured (nasal bone fractures)"
                },
                
                lacrimal: {
                    number: 2,
                    description: "Smallest facial bones; thin, fragile",
                    location: "Medial wall of orbit; posterior to frontal process of maxilla",
                    size: "~thumbnail size",
                    articulations: ["Frontal bone", "Ethmoid", "Maxilla", "Inferior nasal concha"],
                    features: {
                        lacrimal_fossa: "Houses lacrimal sac",
                        nasolacrimal_canal: "With maxilla; passage for nasolacrimal duct (tears drain to nasal cavity)"
                    },
                    clinical: "Fractures can obstruct nasolacrimal duct → epiphora (excessive tearing)"
                },
                
                palatine: {
                    number: 2,
                    description: "L-shaped bones in posterior nasal cavity",
                    location: "Posterior to maxillae",
                    parts: {
                        horizontal_plate: {
                            description: "Forms posterior 1/3 of hard palate",
                            articulation: "Palatine process of maxilla (transverse palatine suture)"
                        },
                        perpendicular_plate: {
                            description: "Vertical; forms part of lateral nasal wall and posterior orbit floor"
                        }
                    },
                    features: {
                        greater_palatine_foramen: "Posterior hard palate; greater palatine nerve and vessels",
                        lesser_palatine_foramina: "Posterior to greater; lesser palatine nerves"
                    }
                },
                
                inferior_nasal_conchae: {
                    number: 2,
                    description: "Scroll-shaped, independent bones (NOT part of ethmoid)",
                    location: "Project from lateral nasal wall into nasal cavity",
                    function: "Increase nasal cavity surface area; warm, humidify, filter air",
                    articulations: ["Maxilla", "Ethmoid", "Lacrimal", "Palatine"],
                    vs_ethmoid_conchae: "Superior and middle conchae are part of ethmoid; inferior is separate bone",
                    clinical: "Can be hypertrophied → nasal obstruction"
                },
                
                vomer: {
                    number: 1,
                    description: "Thin, plow-shaped bone",
                    location: "Forms inferior and posterior part of nasal septum",
                    articulations: ["Ethmoid (perpendicular plate)", "Maxillae", "Palatine bones", "Sphenoid"],
                    nasal_septum: {
                        composition: "Ethmoid perpendicular plate (superior) + vomer (inferior-posterior) + septal cartilage (anterior)",
                        deviation: "Common; usually asymptomatic; can obstruct airflow"
                    },
                    clinical: "Septal deviation, septal hematoma (trauma), perforation"
                }
            },
            
            associated_bones: {
                auditory_ossicles: {
                    number: 6,
                    description: "Three tiny bones in each middle ear (NOT counted in 22 skull bones)",
                    bones: ["Malleus (hammer)", "Incus (anvil)", "Stapes (stirrup)"],
                    location: "Middle ear cavity (tympanic cavity) in temporal bone",
                    function: "Amplify and transmit sound vibrations from tympanic membrane to oval window",
                    size: "Smallest bones in body; stapes is smallest (~3 mm)"
                },
                
                hyoid: {
                    number: 1,
                    description: "U-shaped bone in neck; does NOT articulate with any other bone",
                    location: "Superior to larynx; at level of C3 vertebra",
                    suspension: "Suspended by ligaments from styloid process of temporal bones",
                    parts: {
                        body: "Central, horizontal",
                        greater_horns: "Paired, posterior projections (cornua)",
                        lesser_horns: "Paired, superior projections"
                    },
                    attachments: [
                        "Muscles: stylohyoid, mylohyoid, geniohyoid, hyoglossus, thyrohyoid, omohyoid, sternohyoid",
                        "Ligaments: stylohyoid, thyrohyoid membrane"
                    ],
                    functions: "Tongue movement, swallowing, speech; anchors tongue and larynx",
                    clinical: {
                        fracture: "Strangulation suspect; very rare otherwise",
                        forensics: "Hyoid fracture suggests manual strangulation (especially in adults)"
                    }
                }
            },
            
            sutures: {
                description: "Immovable fibrous joints between skull bones",
                types: {
                    coronal: {
                        location: "Between frontal and two parietal bones",
                        orientation: "Coronal plane (frontal plane)",
                        closure: "Begins ~24 years; may persist"
                    },
                    sagittal: {
                        location: "Between two parietal bones (midline)",
                        orientation: "Sagittal plane (median plane)",
                        closure: "Begins ~22 years"
                    },
                    lambdoid: {
                        location: "Between occipital and two parietal bones",
                        shape: "Inverted V; resembles Greek letter lambda (Λ)",
                        closure: "Begins ~26 years"
                    },
                    squamous: {
                        location: "Between temporal and parietal bones (bilateral)",
                        orientation: "Overlapping (scalelike)",
                        closure: "Variable"
                    }
                },
                fontanels: {
                    description: "Fibrous membranes in infant skulls where sutures will form",
                    function: "Allow skull compression during birth; accommodate brain growth",
                    major: {
                        anterior: "Between frontal and parietals; diamond-shaped; closes 18-24 months",
                        posterior: "Between occipital and parietals; triangular; closes 2-3 months"
                    },
                    clinical: {
                        palpation: "Assess intracranial pressure, hydration",
                        bulging: "Increased ICP (meningitis, hydrocephalus)",
                        sunken: "Dehydration",
                        delayed_closure: "Hypothyroidism, rickets, Down syndrome",
                        premature_closure: "Craniosynostosis"
                    }
                },
                craniosynostosis: {
                    description: "Premature suture fusion",
                    consequences: "Abnormal skull shape; possible increased ICP",
                    types: {
                        scaphocephaly: "Sagittal suture fuses → long, narrow skull (most common)",
                        plagiocephaly: "Unilateral coronal or lambdoid → asymmetric skull",
                        brachycephaly: "Bilateral coronal → short, wide skull",
                        trigonocephaly: "Metopic suture → triangular forehead"
                    },
                    treatment: "Surgical correction if severe (craniotomy); best outcomes if <1 year old"
                }
            },
            
            foramina: {
                description: "Openings through skull bones for nerves, vessels",
                major_foramina: {
                    foramen_magnum: {
                        location: "Occipital bone; base of skull",
                        passage: "Spinal cord, vertebral arteries, spinal accessory nerves (CN XI)"
                    },
                    optic_canal: {
                        location: "Sphenoid (lesser wing)",
                        passage: "Optic nerve (CN II), ophthalmic artery"
                    },
                    superior_orbital_fissure: {
                        location: "Between sphenoid greater and lesser wings",
                        passage: "CN III, IV, V₁ (ophthalmic), VI; ophthalmic veins"
                    },
                    foramen_rotundum: {
                        location: "Sphenoid (greater wing)",
                        passage: "Maxillary nerve (CN V₂)"
                    },
                    foramen_ovale: {
                        location: "Sphenoid (greater wing)",
                        passage: "Mandibular nerve (CN V₃)"
                    },
                    foramen_spinosum: {
                        location: "Sphenoid (greater wing)",
                        passage: "Middle meningeal artery"
                    },
                    internal_acoustic_meatus: {
                        location: "Temporal (petrous part)",
                        passage: "Facial nerve (CN VII), vestibulocochlear nerve (CN VIII)"
                    },
                    jugular_foramen: {
                        location: "Between temporal and occipital",
                        passage: "Internal jugular vein, CN IX (glossopharyngeal), X (vagus), XI (accessory)"
                    },
                    hypoglossal_canal: {
                        location: "Occipital bone",
                        passage: "Hypoglossal nerve (CN XII)"
                    },
                    carotid_canal: {
                        location: "Temporal (petrous part)",
                        passage: "Internal carotid artery"
                    },
                    stylomastoid_foramen: {
                        location: "Temporal (between styloid and mastoid processes)",
                        passage: "Facial nerve (CN VII) exits skull"
                    }
                }
            },
            
            paranasal_sinuses: {
                description: "Air-filled cavities within skull bones; lined with respiratory mucosa",
                sinuses: {
                    maxillary: {
                        location: "Within maxillae; largest sinuses",
                        opening: "Middle nasal meatus (via hiatus semilunaris)",
                        development: "Present at birth; enlarge through adolescence",
                        relations: "Floor: alveolar process (upper molar roots may project); roof: orbit floor",
                        clinical: "Most commonly infected sinus; dental infections can spread; poor drainage (opening high in sinus)"
                    },
                    frontal: {
                        location: "Within frontal bone; superior to orbits",
                        opening: "Middle nasal meatus (via frontonasal duct)",
                        development: "Begin ~7 years; enlarge through adolescence",
                        variability: "Absent in ~5%; highly variable size/shape",
                        clinical: "Frontal sinusitis; frontal headache"
                    },
                    ethmoid: {
                        location: "Within ethmoid bone (ethmoidal labyrinth)",
                        number: "3-18 small air cells per side",
                        groups: "Anterior, middle (open to middle meatus), posterior (open to superior meatus)",
                        development: "Present at birth; enlarge through adolescence",
                        relations: "Medial wall of orbit (lamina papyracea)",
                        clinical: "Ethmoid sinusitis; infection can spread to orbit → orbital cellulitis"
                    },
                    sphenoid: {
                        location: "Within body of sphenoid",
                        opening: "Sphenoethmoidal recess (superior and posterior to superior concha)",
                        development: "Begin ~2 years; enlarge through adolescence",
                        relations: "Inferior: roof of nasopharynx; superior: sella turcica (pituitary); lateral: cavernous sinus, internal carotid, optic nerve",
                        clinical: "Sphenoid sinusitis rare but serious (proximity to vital structures); transsphenoidal surgery route to pituitary"
                    }
                },
                functions: [
                    "Lighten skull weight",
                    "Warm and humidify inspired air",
                    "Voice resonance",
                    "Crumple zones (absorb impact in trauma)",
                    "Increase surface area for olfaction"
                ],
                clinical: {
                    sinusitis: "Inflammation/infection; bacterial (secondary to viral URI), allergic, fungal",
                    symptoms: "Facial pain/pressure, nasal congestion, purulent discharge, headache",
                    complications: "Orbital cellulitis, meningitis, brain abscess (rare)"
                }
            },
            
            orbits: {
                description: "Bony cavities housing eyeballs and associated structures",
                shape: "Pyramidal; apex posterior, base anterior",
                volume: "~30 mL",
                bones: "Seven bones contribute to each orbit",
                
                walls: {
                    roof: "Frontal bone (orbital part), sphenoid (lesser wing)",
                    floor: "Maxilla, zygomatic, palatine",
                    medial: "Ethmoid (lamina papyracea), lacrimal, maxilla, sphenoid",
                    lateral: "Zygomatic, sphenoid (greater wing)"
                },
                
                openings: {
                    optic_canal: "Apex; CN II, ophthalmic artery",
                    superior_orbital_fissure: "CN III, IV, V₁, VI; ophthalmic veins",
                    inferior_orbital_fissure: "Floor; infraorbital nerve and vessels",
                    nasolacrimal_canal: "Medial floor; drains tears to nasal cavity"
                },
                
                clinical: {
                    blowout_fracture: "Orbital floor fracture into maxillary sinus (most common); entrapment of inferior rectus/oblique → diplopia",
                    orbital_cellulitis: "Infection posterior to orbital septum; medical emergency",
                    exophthalmos: "Bulging eye; Graves' disease, tumor, trauma"
                }
            },
            
            clinical_applications: {
                fractures: {
                    skull_fractures: "Linear, depressed, basilar, open",
                    facial_fractures: {
                        nasal: "Most common facial fracture",
                        zygomatic: "Tripod fracture (zygomaticofrontal, zygomaticomaxillary, zygomatic arch)",
                        orbital: "Blowout fractures",
                        mandibular: "Second most common facial fracture; often bilateral",
                        Le_Fort: "Midface fractures (I: maxilla; II: pyramidal; III: craniofacial dissociation)"
                    },
                    complications: "CSF leak, meningitis, cranial nerve injury, facial deformity"
                },
                
                imaging: {
                    X_ray: "Skull series; sinus series; facial bones",
                    CT: "Gold standard for fractures, sinuses, skull base",
                    MRI: "Soft tissue detail; brain, orbits, sinuses"
                },
                
                surgery: {
                    craniotomy: "Skull opening for brain access",
                    cranioplasty: "Skull reconstruction",
                    facial_reconstruction: "Fracture repair, cosmetic",
                    transsphenoidal: "Pituitary surgery via sphenoid sinus",
                    sinus_surgery: "FESS (functional endoscopic sinus surgery)"
                }
            }
        },
        
        vertebral_column: {
            overview: {
                total_bones: 26,
                vertebrae: "33 individual vertebrae (7 cervical + 12 thoracic + 5 lumbar + 5 sacral + 4 coccygeal)",
                adult_bones: "26 bones (fused sacrum = 1, fused coccyx = 1)",
                length: "~70 cm (28 inches) in adults",
                functions: [
                    "Protect spinal cord",
                    "Support head and trunk",
                    "Transfer body weight to pelvis and lower limbs",
                    "Provide attachment for ribs (thoracic region)",
                    "Provide attachment for muscles and ligaments",
                    "Allow movement (flexion, extension, lateral flexion, rotation)",
                    "Absorb shock during movement (intervertebral discs)"
                ]
            },
            
            regions: {
                cervical: {
                    number: 7,
                    designation: "C1-C7",
                    location: "Neck region",
                    curvature: "Concave posteriorly (lordosis); secondary curvature",
                    characteristics: [
                        "Smallest vertebrae",
                        "Transverse foramina (UNIQUE to cervical) - vertebral arteries",
                        "Bifid (split) spinous processes (C3-C6)",
                        "Triangular vertebral foramen",
                        "Support head; allow neck movement"
                    ],
                    special_vertebrae: {
                        C1_atlas: {
                            description: "First cervical vertebra; ring-shaped",
                            unique: "NO body, NO spinous process",
                            parts: "Anterior arch, posterior arch, two lateral masses",
                            superior_facets: "Articulate with occipital condyles (atlantooccipital joint)",
                            inferior_facets: "Articulate with C2 axis",
                            movement: "Flexion/extension (nodding 'yes')",
                            clinical: "Jefferson fracture (burst fracture from axial load)"
                        },
                        C2_axis: {
                            description: "Second cervical vertebra",
                            unique_feature: "Dens (odontoid process) - superior projection from body",
                            dens: "Represents fused body of atlas; projects through atlas ring",
                            articulation: "Dens with anterior arch of atlas (atlantoaxial joint)",
                            movement: "Rotation (shaking head 'no')",
                            transverse_ligament: "Holds dens against atlas anterior arch",
                            clinical: "Hangman's fracture (pedicle fracture), dens fracture, atlantoaxial subluxation"
                        },
                        C7_vertebra_prominens: {
                            description: "Seventh cervical vertebra",
                            unique_feature: "Long, non-bifid spinous process",
                            palpation: "Easily palpable at base of neck; anatomical landmark",
                            clinical: "Reference point for counting vertebrae"
                        }
                    }
                },
                
                thoracic: {
                    number: 12,
                    designation: "T1-T12",
                    location: "Chest region",
                    curvature: "Convex posteriorly (kyphosis); primary curvature",
                    characteristics: [
                        "Medium-sized vertebrae (increase in size T1→T12)",
                        "Long, inferiorly-pointing spinous processes",
                        "Circular vertebral foramen",
                        "Costal facets for rib articulation (UNIQUE to thoracic)",
                        "Limited movement (ribs restrict)"
                    ],
                    costal_facets: {
                        superior_costal_facet: "On body; articulates with head of own rib",
                        inferior_costal_facet: "On body; articulates with head of rib below",
                        transverse_costal_facet: "On transverse process; articulates with tubercle of own rib"
                    },
                    exceptions: {
                        T1: "Has complete facet for rib 1; demifacet for rib 2",
                        T10: "Only one facet (for rib 10)",
                        T11_T12: "Only one facet each; no transverse costal facet"
                    },
                    clinical: "Vertebral compression fractures (osteoporosis); kyphosis (excessive curvature)"
                },
                
                lumbar: {
                    number: 5,
                    designation: "L1-L5",
                    location: "Lower back",
                    curvature: "Concave posteriorly (lordosis); secondary curvature",
                    characteristics: [
                        "Largest vertebrae (bear most weight)",
                        "Massive, kidney-shaped bodies",
                        "Short, thick, blunt spinous processes (horizontal)",
                        "Triangular vertebral foramen",
                        "NO transverse foramina, NO costal facets"
                    ],
                    articular_facets: "Oriented sagittally (allow flexion/extension; limit rotation)",
                    clinical: {
                        herniated_disc: "Most common at L4-L5 and L5-S1",
                        spinal_stenosis: "Narrowing of vertebral canal",
                        spondylolisthesis: "Anterior slippage of vertebra (often L5 on S1)",
                        low_back_pain: "Very common; mechanical, disc, facet, muscle"
                    }
                },
                
                sacrum: {
                    number: 1,
                    composition: "5 fused vertebrae (S1-S5)",
                    shape: "Triangular, curved bone",
                    location: "Posterior pelvis; between two hip bones",
                    curvature: "Concave anteriorly (kyphosis); primary curvature",
                    fusion: "Begins ~16 years; complete by ~30 years",
                    features: {
                        base: "Superior; articulates with L5",
                        apex: "Inferior, pointed; articulates with coccyx",
                        sacral_promontory: "Anterior projection of S1 body; obstetric landmark",
                        anterior_sacral_foramina: "4 pairs; anterior rami of sacral spinal nerves",
                        posterior_sacral_foramina: "4 pairs; posterior rami",
                        median_sacral_crest: "Midline ridge; fused spinous processes",
                        sacral_canal: "Continuation of vertebral canal; contains cauda equina",
                        sacral_hiatus: "Inferior opening of sacral canal; caudal epidural anesthesia",
                        auricular_surface: "Lateral; articulates with ilium (sacroiliac joint)",
                        sacral_cornua: "Flanking sacral hiatus"
                    },
                    sex_differences: {
                        female: "Shorter, wider, more curved (accommodate birth canal)",
                        male: "Longer, narrower, less curved"
                    },
                    clinical: "Sacroiliac joint dysfunction; coccydynia; caudal anesthesia; sacral fractures"
                },
                
                coccyx: {
                    number: 1,
                    composition: "3-5 fused vertebrae (usually 4)",
                    description: "Tailbone; vestigial remnant",
                    shape: "Small, triangular",
                    articulation: "Superior articulates with sacral apex",
                    fusion: "Begins ~20-30 years",
                    features: "Coccygeal cornua; attachment for ligaments and muscles (pelvic floor)",
                    clinical: "Coccydynia (tailbone pain); fracture (usually from direct fall)"
                }
            },
            
            typical_vertebra: {
                description: "General structure shared by most vertebrae (C3-C7, T2-T9, L1-L5)",
                parts: {
                    body: {
                        description: "Anterior, weight-bearing portion",
                        shape: "Cylindrical or kidney-shaped",
                        size: "Increases from cervical to lumbar (weight-bearing increases)",
                        superior_inferior_surfaces: "Flat or slightly concave; covered by hyaline cartilage; attach to intervertebral discs"
                    },
                    vertebral_arch: {
                        description: "Posterior projection from body; encloses vertebral foramen",
                        components: {
                            pedicles: "Short, thick processes projecting posteriorly from body; form sides of arch",
                            laminae: "Flat plates extending posteriorly from pedicles; meet in midline to form roof of arch",
                            vertebral_foramen: "Space enclosed by body and arch; passage for spinal cord",
                            vertebral_canal: "All vertebral foramina stacked = vertebral canal; houses spinal cord, meninges, vessels"
                        }
                    },
                    processes: {
                        spinous_process: {
                            description: "Single, posterior projection from junction of laminae",
                            direction: "Usually points inferiorly",
                            function: "Attachment for muscles and ligaments; palpable landmark"
                        },
                        transverse_processes: {
                            description: "Paired, lateral projections from pedicle-lamina junction",
                            function: "Attachment for muscles and ligaments; lever arms for movement"
                        },
                        articular_processes: {
                            superior: "Paired, project superiorly; superior articular facets face posteriorly/medially",
                            inferior: "Paired, project inferiorly; inferior articular facets face anteriorly/laterally",
                            function: "Articulate with adjacent vertebrae (zygapophyseal/facet joints); guide and limit movement"
                        }
                    },
                    notches: {
                        superior_vertebral_notch: "Shallow notch on superior edge of pedicle",
                        inferior_vertebral_notch: "Deep notch on inferior edge of pedicle",
                        intervertebral_foramen: "Formed by inferior notch of vertebra above + superior notch of vertebra below; passage for spinal nerves"
                    }
                }
            },
            
            curvatures: {
                description: "Viewed from side, spine has four anteroposterior curves",
                development: {
                    primary: "Present at birth; concave anteriorly (thoracic, sacral); fetal position",
                    secondary: "Develop after birth; concave posteriorly (cervical, lumbar); result of upright posture"
                },
                curves: {
                    cervical: "Lordosis (concave posteriorly); develops ~3-4 months when infant holds head up",
                    thoracic: "Kyphosis (convex posteriorly); primary curve",
                    lumbar: "Lordosis (concave posteriorly); develops ~12-18 months when child walks",
                    sacral: "Kyphosis (convex posteriorly); primary curve"
                },
                functions: [
                    "Increase strength and flexibility",
                    "Absorb shock during walking/running",
                    "Maintain center of gravity over feet",
                    "Protect vertebrae from fracture"
                ],
                abnormalities: {
                    scoliosis: {
                        description: "Lateral (sideways) curvature with rotation",
                        measurement: "Cobb angle >10°",
                        types: "Idiopathic (most common; adolescent girls), congenital, neuromuscular",
                        clinical: "Rib hump on forward bend; uneven shoulders/hips",
                        treatment: "Observation, bracing, surgery (if severe)"
                    },
                    kyphosis_excessive: {
                        description: "Exaggerated thoracic curve ('hunchback')",
                        causes: "Osteoporosis (compression fractures), Scheuermann's disease, poor posture",
                        clinical: "Rounded upper back; can cause pain, restrictive lung disease if severe"
                    },
                    lordosis_excessive: {
                        description: "Exaggerated lumbar curve ('swayback')",
                        causes: "Weak core muscles, obesity, pregnancy, hip flexor tightness",
                        clinical: "Protruding abdomen; can cause low back pain"
                    }
                }
            },
            
            intervertebral_discs: {
                description: "Fibrocartilaginous pads between adjacent vertebral bodies (C2-sacrum)",
                number: 23,
                thickness: "Varies; thickest in lumbar region (~9 mm)",
                percentage_of_height: "~25% of vertebral column length",
                
                structure: {
                    nucleus_pulposus: {
                        description: "Gel-like, inner core",
                        composition: "~88% water, proteoglycans, type II collagen",
                        properties: "Incompressible; deforms under load",
                        function: "Absorbs shock; distributes forces evenly",
                        development: "Derived from notochord",
                        aging: "Loses water (~70% by age 70); becomes fibrous; decreases shock absorption"
                    },
                    anulus_fibrosus: {
                        description: "Outer ring of fibrocartilage",
                        structure: "10-20 concentric layers (lamellae) of collagen fibers",
                        orientation: "Alternating fiber directions in each layer (like plywood)",
                        composition: "Type I collagen, some type II",
                        function: "Contain nucleus; resist tensile stress; allow limited movement",
                        attachment: "Anchored to vertebral bodies by Sharpey's fibers"
                    },
                    endplates: {
                        description: "Thin layers of hyaline cartilage on superior/inferior disc surfaces",
                        function: "Cover vertebral body; nutrient diffusion to disc (avascular)"
                    }
                },
                
                functions: [
                    "Absorb shock and cushion vertebrae",
                    "Allow movement between vertebrae (flexion, extension, lateral flexion, rotation)",
                    "Distribute forces evenly across vertebral bodies",
                    "Increase vertebral column height (lost with disc degeneration)"
                ],
                
                variations: {
                    cervical: "Thin; small nucleus; allows mobility",
                    thoracic: "Thin; restricted by ribs",
                    lumbar: "Thick; large nucleus; wedge-shaped (thicker anteriorly); bear most load"
                },
                
                aging_changes: {
                    water_loss: "Nucleus loses water; height decreases (~1 cm per decade after age 40)",
                    degeneration: "Nucleus becomes fibrous; less elastic",
                    tears: "Anulus develops tears; nucleus can protrude",
                    calcification: "Endplates calcify; reduced nutrient diffusion",
                    consequences: "Less shock absorption, decreased flexibility, increased risk of herniation"
                },
                
                herniation: {
                    description: "Nucleus pulposus protrudes through torn anulus fibrosus",
                    common_sites: "L4-L5 (45%), L5-S1 (40%), C5-C6, C6-C7",
                    direction: "Usually posterolateral (path of least resistance; posterior longitudinal ligament weak laterally)",
                    mechanism: "Lifting, twisting, trauma, degeneration",
                    clinical: {
                        compression: "Spinal nerve root compression → radiculopathy",
                        lumbar: "Sciatica (pain radiating down leg); weakness; numbness; positive straight leg raise",
                        cervical: "Arm pain, weakness, numbness; neck pain",
                        cauda_equina: "Massive central herniation → bladder/bowel dysfunction, saddle anesthesia - EMERGENCY"
                    },
                    diagnosis: "MRI (gold standard); CT",
                    treatment: "Conservative (NSAIDs, PT, time - 90% improve); epidural steroid injections; surgery (discectomy, microdiscectomy) if severe/progressive"
                }
            },
            
            ligaments: {
                anterior_longitudinal: {
                    location: "Anterior surface of vertebral bodies (skull to sacrum)",
                    attachments: "Vertebral bodies and discs",
                    function: "Prevent hyperextension; strongest spinal ligament",
                    injury: "Rare to rupture"
                },
                posterior_longitudinal: {
                    location: "Posterior surface of vertebral bodies within vertebral canal",
                    attachments: "Vertebral bodies and discs",
                    function: "Prevent hyperflexion; reinforce discs",
                    weakness: "Narrow laterally; allows posterolateral disc herniation"
                },
                ligamentum_flavum: {
                    description: "'Yellow ligament' - elastic tissue",
                    location: "Connects laminae of adjacent vertebrae",
                    function: "Assist return to upright posture after flexion; protect spinal cord",
                    hypertrophy: "Can cause spinal stenosis"
                },
                interspinous: {
                    location: "Between spinous processes",
                    function: "Limit flexion"
                },
                supraspinous: {
                    location: "Tips of spinous processes (C7 to sacrum)",
                    function: "Limit flexion",
                    cervical_extension: "Ligamentum nuchae (neck)"
                },
                intertransverse: {
                    location: "Between transverse processes",
                    function: "Limit lateral flexion"
                }
            },
            
            spinal_cord_relations: {
                spinal_cord_length: "~42-45 cm (ends at L1-L2 level in adults)",
                vertebral_column_length: "~70 cm",
                discrepancy: "Spinal cord shorter than vertebral column (differential growth)",
                
                termination: {
                    conus_medullaris: "Tapered inferior end of spinal cord (L1-L2 level)",
                    filum_terminale: "Fibrous extension from conus to coccyx",
                    cauda_equina: "'Horse's tail' - nerve roots of lumbar and sacral spinal nerves descending to exit"
                },
                
                nerve_roots: {
                    cervical: "C1-C7 nerve roots exit ABOVE corresponding vertebra; C8 exits below C7",
                    thoracic_lumbar_sacral: "Exit BELOW corresponding vertebra",
                    total_spinal_nerves: "31 pairs (8 cervical, 12 thoracic, 5 lumbar, 5 sacral, 1 coccygeal)"
                },
                
                meninges: {
                    dura_mater: "Tough outer layer; forms dural sac containing cord and nerve roots",
                    arachnoid_mater: "Middle layer",
                    pia_mater: "Delicate inner layer adhering to cord",
                    subarachnoid_space: "Between arachnoid and pia; contains CSF",
                    epidural_space: "Between dura and vertebrae; contains fat and veins; site for epidural anesthesia"
                },
                
                clinical: {
                    lumbar_puncture: "L3-L4 or L4-L5 (below conus); sample CSF; measure pressure; intrathecal drugs",
                    epidural_anesthesia: "Inject local anesthetic into epidural space; labor, surgery",
                    spinal_anesthesia: "Inject into subarachnoid space; rapid onset, denser block"
                }
            },
            
            clinical_correlations: {
                fractures: {
                    compression: "Vertebral body collapse; osteoporosis, trauma",
                    burst: "Comminuted body fracture; axial load",
                    chance: "Horizontal fracture through body, pedicles, processes; flexion-distraction (seat belt injury)",
                    fracture_dislocation: "Unstable; high risk of spinal cord injury"
                },
                spinal_cord_injury: {
                    complete: "No motor/sensory below level",
                    incomplete: "Some function preserved",
                    syndromes: "Central cord, anterior cord, Brown-Séquard, cauda equina, conus medullaris"
                },
                degenerative_disease: {
                    disc_degeneration: "Loss of height, bulging, herniation",
                    spondylosis: "Degenerative changes; bone spurs (osteophytes)",
                    spinal_stenosis: "Narrowing of canal or foramina; nerve compression",
                    spondylolisthesis: "Vertebral slippage (degenerative, isthmic)"
                },
                infections: {
                    osteomyelitis: "Vertebral body infection",
                    discitis: "Disc infection",
                    epidural_abscess: "EMERGENCY - can cause paralysis"
                }
            }
        },
        
        thoracic_cage: {
            overview: {
                total_bones: 25,
                composition: "1 sternum + 24 ribs (12 pairs)",
                alternative_name: "Rib cage, thorax",
                shape: "Cone-shaped; narrow superiorly, broad inferiorly",
                boundaries: {
                    posterior: "12 thoracic vertebrae and intervertebral discs",
                    anterior: "Sternum and costal cartilages",
                    lateral: "12 pairs of ribs and intercostal spaces"
                },
                functions: [
                    "Protect heart, lungs, great vessels, esophagus",
                    "Support shoulder girdle (via muscles and clavicle articulation)",
                    "Provide attachment for muscles of respiration, back, upper limb",
                    "Enable breathing (rib elevation increases thoracic volume)"
                ]
            },
            
            sternum: {
                description: "Flat bone forming anterior midline of thoracic cage; 'breastbone'",
                length: "~17 cm in adults",
                parts: {
                    manubrium: {
                        description: "Superior, broad portion",
                        shape: "Trapezoidal",
                        jugular_notch: {
                            location: "Superior border, midline",
                            palpation: "Easily palpable at base of neck",
                            also_called: "Suprasternal notch"
                        },
                        clavicular_notches: {
                            location: "Superior lateral borders",
                            articulation: "Sternoclavicular joints with medial ends of clavicles",
                            clinical: "Only bony attachment of upper limb to axial skeleton"
                        },
                        first_costal_notch: "Articulation with 1st rib (cartilage); immediately inferior to clavicular notch",
                        demifacet: "Partial facet for 2nd rib (shared with body)"
                    },
                    body: {
                        description: "Middle, longest portion",
                        length: "~10 cm",
                        costal_notches: "Articulations for ribs 2-7 (via costal cartilages)",
                        transverse_ridges: "Marks of fusion of 4 sternebrae (embryonic segments)"
                    },
                    xiphoid_process: {
                        description: "Inferior, smallest portion",
                        shape: "Variable (pointed, blunt, bifid, perforated)",
                        composition: "Cartilaginous in youth; ossifies by ~40 years",
                        palpation: "Palpable but easily damaged; avoid during CPR",
                        clinical: "Landmark for CPR hand placement (2 finger widths above)"
                    }
                },
                joints: {
                    manubriosternal: {
                        location: "Junction of manubrium and body",
                        type: "Symphysis (cartilaginous)",
                        sternal_angle: {
                            description: "Ridge at this joint (angle of Louis)",
                            palpation: "Easily palpable",
                            level: "T4-T5 vertebral level",
                            landmarks: [
                                "2nd rib articulation (rib counting starts here)",
                                "Tracheal bifurcation (carina)",
                                "Aortic arch beginning and end",
                                "Azygos vein entering SVC",
                                "Thoracic duct crossing from right to left",
                                "Superior mediastinum/inferior mediastinum division"
                            ],
                            clinical: "Key clinical and radiological landmark"
                        }
                    },
                    xiphisternal: {
                        location: "Junction of body and xiphoid process",
                        type: "Symphysis; may ossify with age",
                        level: "T9 vertebral level"
                    }
                },
                clinical: {
                    fractures: "Usually from direct trauma (steering wheel); can injure heart, lungs",
                    CPR: "Sternal compressions; risk of rib/sternal fractures (acceptable)",
                    sternotomy: "Median sternotomy for cardiac surgery; saw through sternum, wire back together",
                    bone_marrow: "Sternal marrow biopsy (hematopoietic tissue)"
                }
            },
            
            ribs: {
                description: "Thin, flat, curved bones forming lateral walls of thoracic cage",
                number: "24 (12 pairs)",
                classification: {
                    true_ribs: {
                        number: "Ribs 1-7",
                        description: "Attach directly to sternum via own costal cartilages",
                        also_called: "Vertebrosternal ribs"
                    },
                    false_ribs: {
                        number: "Ribs 8-12",
                        description: "Do NOT attach directly to sternum",
                        ribs_8_10: "Attach indirectly via costal cartilage of rib 7 (common cartilage)",
                        ribs_11_12: "Floating ribs - no anterior attachment",
                        also_called: "Vertebrochondral (8-10) and vertebral/floating (11-12)"
                    }
                },
                
                typical_rib: {
                    example: "Ribs 3-9",
                    parts: {
                        head: {
                            description: "Posterior end; wedge-shaped",
                            facets: "Two articular facets separated by crest",
                            superior_facet: "Articulates with inferior costal facet of vertebra above",
                            inferior_facet: "Articulates with superior costal facet of own vertebra",
                            joint: "Joint of head of rib (costovertebral joint)"
                        },
                        neck: {
                            description: "Constriction between head and tubercle",
                            length: "~2.5 cm"
                        },
                        tubercle: {
                            description: "Knob on posterior surface at neck-body junction",
                            articular_part: "Medial smooth facet; articulates with transverse costal facet of own vertebra (costotransverse joint)",
                            non_articular_part: "Lateral rough area; ligament attachment"
                        },
                        angle: {
                            description: "Sharp bend where rib turns anterolaterally",
                            location: "~5-6 cm from tubercle; near tubercle attachment site for iliocostalis muscle"
                        },
                        body_shaft: {
                            description: "Thin, flat, curved portion",
                            direction: "Curves anteroinferiorly",
                            costal_groove: "Shallow groove on inferior internal surface; pathway for intercostal vein, artery, nerve (VAN, superior to inferior)",
                            clinical: "Thoracentesis needle inserted superior to rib to avoid neurovascular bundle"
                        }
                    },
                    anterior_end: "Costal cartilage attachment"
                },
                
                atypical_ribs: {
                    rib_1: {
                        description: "Shortest, broadest, most curved",
                        shape: "Flat horizontally (superior and inferior surfaces)",
                        head: "Single facet (articulates only with T1)",
                        tubercles: {
                            scalene_tubercle: "Attachment for anterior scalene muscle",
                            groove_subclavian_vein: "Anterior to scalene tubercle",
                            groove_subclavian_artery: "Posterior to scalene tubercle"
                        },
                        protection: "Protected by clavicle; rarely fractured",
                        clinical: "Cervical rib (extra rib from C7) can compress neurovascular bundle"
                    },
                    rib_2: {
                        description: "Twice as long as rib 1; less curved",
                        tuberosity: "Roughened area on superior surface; serratus anterior attachment"
                    },
                    ribs_10: {
                        head: "Single facet (articulates only with T10)"
                    },
                    ribs_11_12: {
                        description: "Floating ribs",
                        head: "Single facet each",
                        tubercle: "Absent or rudimentary",
                        no_neck: "Very short or absent",
                        no_angle: "Slight curve only",
                        anterior_end: "Pointed; embedded in posterior abdominal wall muscles"
                    }
                },
                
                costal_cartilages: {
                    description: "Hyaline cartilage extensions of ribs",
                    function: "Connect ribs to sternum; provide flexibility for respiration",
                    ribs_1_7: "Each has own cartilage to sternum",
                    ribs_8_10: "Cartilages fuse with cartilage of rib 7 → costal margin",
                    ribs_11_12: "Short, pointed cartilage tips; no anterior attachment",
                    aging: "Calcify with age (visible on X-ray); decrease flexibility"
                },
                
                intercostal_spaces: {
                    number: 11,
                    definition: "Spaces between adjacent ribs",
                    numbering: "Named for rib above (e.g., 3rd intercostal space = between ribs 3 and 4)",
                    contents: {
                        intercostal_muscles: "External, internal, innermost layers; aid respiration",
                        neurovascular_bundle: {
                            location: "Costal groove of rib above",
                            order: "VAN (superior to inferior): Vein, Artery, Nerve",
                            clinical: "Thoracentesis/chest tube inserted superior to lower rib to avoid bundle"
                        }
                    }
                }
            },
            
            thoracic_apertures: {
                superior_thoracic_aperture: {
                    also_called: "Thoracic inlet",
                    boundaries: {
                        anterior: "Manubrium (superior border)",
                        posterior: "T1 vertebra",
                        lateral: "1st ribs and cartilages"
                    },
                    shape: "Kidney-shaped (wider transversely)",
                    passage: [
                        "Trachea",
                        "Esophagus",
                        "Nerves (vagus, phrenic, sympathetic trunk)",
                        "Vessels (carotid arteries, jugular veins, subclavian vessels)",
                        "Thoracic duct",
                        "Apex of lungs (extends above 1st rib)"
                    ],
                    clinical: "Thoracic outlet syndrome - compression of neurovascular structures"
                },
                inferior_thoracic_aperture: {
                    also_called: "Thoracic outlet",
                    boundaries: {
                        anterior: "Xiphisternal joint",
                        posterior: "T12 vertebra",
                        anterolateral: "Costal margins (ribs 7-10 cartilages)",
                        posterolateral: "Ribs 11-12"
                    },
                    closed_by: "Diaphragm",
                    shape: "Irregular; larger than superior",
                    passage: {
                        esophageal_hiatus: "T10 level; esophagus, vagus nerves",
                        aortic_hiatus: "T12 level; aorta, thoracic duct, azygos vein",
                        caval_opening: "T8 level; inferior vena cava, phrenic nerve branches"
                    }
                }
            },
            
            breathing_mechanics: {
                inspiration: {
                    muscle_contraction: "Diaphragm (descends), external intercostals (elevate ribs)",
                    rib_movement: "Ribs elevate and swing outward ('bucket handle' and 'pump handle' motions)",
                    volume_change: "Thoracic volume increases (vertical, anteroposterior, transverse)",
                    pressure: "Intrathoracic pressure decreases → air flows in"
                },
                expiration: {
                    quiet: "Passive - elastic recoil of lungs and thoracic cage",
                    forced: "Active - abdominal muscles, internal intercostals contract → depress ribs",
                    volume_change: "Thoracic volume decreases",
                    pressure: "Intrathoracic pressure increases → air flows out"
                }
            },
            
            clinical_correlations: {
                rib_fractures: {
                    causes: "Trauma (blunt, penetrating), severe coughing, CPR",
                    common_sites: "Ribs 4-9 (middle ribs most vulnerable)",
                    ribs_1_3: "Protected by clavicle, scapula; fracture indicates severe trauma",
                    ribs_11_12: "Rarely fractured (mobile)",
                    complications: "Pneumothorax, hemothorax, pulmonary contusion, flail chest",
                    flail_chest: "≥3 adjacent ribs fractured in ≥2 places; paradoxical movement; respiratory compromise",
                    treatment: "Pain control (nerve blocks, epidural), pulmonary hygiene; internal fixation if severe"
                },
                chest_tubes: {
                    indication: "Pneumothorax, hemothorax, pleural effusion",
                    site: "'Triangle of safety' - 5th intercostal space, mid-axillary line",
                    insertion: "Superior to lower rib to avoid neurovascular bundle",
                    function: "Drain air/fluid; re-expand lung"
                },
                thoracentesis: {
                    indication: "Sample or drain pleural fluid",
                    site: "Usually 7th-9th intercostal space, mid-scapular or mid-axillary line",
                    technique: "Insert needle superior to lower rib; aspirate"
                },
                pectus_excavatum: {
                    description: "Sunken chest; sternum/costal cartilages depressed",
                    severity: "Mild (cosmetic) to severe (cardiac/pulmonary compression)",
                    treatment: "Observation, exercise, surgery (Nuss procedure) if severe"
                },
                pectus_carinatum: {
                    description: "Pigeon chest; sternum protrudes anteriorly",
                    treatment: "Usually cosmetic; bracing, surgery if desired"
                }
            }
        },
        
        clinical_applications: {
            radiology: "X-rays (AP, lateral, oblique); CT for detailed bony anatomy, fractures; MRI for soft tissue, spinal cord",
            surgery: "Spinal fusion, laminectomy, discectomy, thoracotomy, sternotomy, rib resection",
            physical_examination: "Palpation of vertebrae, ribs, sternum; range of motion; neurological exam",
            anesthesia: "Spinal, epidural, intercostal nerve blocks",
            trauma: "ATLS protocols; spinal precautions; imaging; stabilization"
        },
        
        examples: [
            {
                structure: "Atlas (C1)",
                unique_features: "No body, no spinous process; ring-shaped; allows 'yes' motion",
                clinical: "Jefferson fracture from axial load (diving into shallow water)"
            },
            {
                structure: "Axis (C2)",
                unique_features: "Dens (odontoid process) projects superiorly through atlas",
                clinical: "Hangman's fracture; dens fracture; allows 'no' motion"
            },
            {
                structure: "Sternal angle",
                unique_features: "Ridge at manubriosternal joint; 2nd rib attachment",
                clinical: "Key landmark - T4-T5 level, tracheal bifurcation, aortic arch"
            },
            {
                structure: "Lumbar vertebrae L5",
                unique_features: "Largest vertebrae; wedge-shaped body",
                clinical: "Spondylolisthesis (slips forward on sacrum); L5-S1 disc herniation"
            }
        ],
        
        applications: [
            "Spinal surgery - decompression, fusion, instrumentation",
            "Trauma management - ATLS, spinal precautions, imaging",
            "Anesthesia - spinal, epidural, nerve blocks",
            "Cardiothoracic surgery - sternotomy, thoracotomy",
            "Pulmonology - chest tubes, thoracentesis",
            "Orthopedics - scoliosis treatment, vertebroplasty, kyphoplasty",
            "Rheumatology - ankylosing spondylitis, spinal stenosis"
        ]
    };
    
    return content;
}

handleAppendicularSkeleton(problem) {
    const content = {
        topic: "Appendicular Skeleton: Limbs and Girdles",
        category: 'skeletal_anatomy',
        summary: "The appendicular skeleton consists of 126 bones forming the upper and lower limbs and their attachment girdles. The pectoral (shoulder) girdle (4 bones) attaches the upper limbs to the axial skeleton, while the pelvic girdle (2 hip bones) attaches the lower limbs. The appendicular skeleton provides mobility for locomotion and manipulation, with the upper limbs specialized for range of motion and dexterity, and the lower limbs specialized for weight-bearing and locomotion.",
        
        overview: {
            total_bones: 126,
            divisions: {
                pectoral_girdle: "4 bones (2 clavicles + 2 scapulae)",
                upper_limbs: "60 bones (30 per limb)",
                pelvic_girdle: "2 bones (2 hip bones/os coxae)",
                lower_limbs: "60 bones (30 per limb)"
            },
            functions: [
                "Enable locomotion (walking, running)",
                "Manipulate environment (grasping, tool use)",
                "Attach limbs to axial skeleton",
                "Provide range of motion and dexterity",
                "Bear and transfer body weight"
            ]
        },
        
        pectoral_girdle: {
            overview: {
                bones: "Clavicle (2), scapula (2)",
                total: 4,
                function: "Attach upper limbs to axial skeleton; provide mobility for arm movement",
                characteristics: "Incomplete posteriorly (scapulae don't articulate with each other or vertebrae); allows great range of motion but less stability",
                articulations: {
                    with_axial: "Clavicle articulates with sternum (sternoclavicular joint) - ONLY bony attachment",
                    within_girdle: "Clavicle articulates with scapula (acromioclavicular joint)",
                    with_limb: "Scapula articulates with humerus (glenohumeral/shoulder joint)"
                }
            },
            
            clavicle: {
                description: "S-shaped bone; 'collarbone'",
                location: "Lies horizontally at root of neck; overlies 1st rib",
                length: "~15 cm (females slightly shorter)",
                shape: "Medial 2/3 convex anteriorly; lateral 1/3 concave anteriorly",
                
                ends: {
                    sternal_medial_end: {
                        description: "Enlarged, quadrangular",
                        articulation: "Sternoclavicular joint with manubrium",
                        joint_type: "Saddle synovial joint; articular disc present",
                        movements: "Elevation/depression, protraction/retraction, rotation",
                        stability: "Strong ligaments (costoclavicular); only bony upper limb-axial connection"
                    },
                    acromial_lateral_end: {
                        description: "Flattened",
                        articulation: "Acromioclavicular (AC) joint with scapula acromion",
                        joint_type: "Plane synovial joint",
                        movements: "Gliding; allows scapular movements on thorax",
                        ligaments: "AC ligament, coracoclavicular ligaments (conoid, trapezoid)"
                    }
                },
                
                shaft: {
                    surfaces: "Superior (subcutaneous) and inferior",
                    borders: "Anterior and posterior",
                    features: {
                        conoid_tubercle: "Inferior surface, lateral 1/3; attachment for conoid ligament",
                        trapezoid_line: "Inferior surface, lateral; attachment for trapezoid ligament",
                        subclavian_groove: "Inferior surface, middle 1/3; subclavius muscle attachment",
                        costal_tuberosity: "Inferior surface, medial end; costoclavicular ligament attachment"
                    }
                },
                
                muscle_attachments: {
                    superior: "Sternocleidomastoid (medial), trapezius (lateral), deltoid (lateral anterior)",
                    inferior: "Subclavius, pectoralis major (medial)"
                },
                
                functions: [
                    "Brace shoulder laterally (holds arm away from trunk)",
                    "Transmit forces from upper limb to axial skeleton",
                    "Protect neurovascular structures (subclavian vessels, brachial plexus)",
                    "Attachment for muscles",
                    "Improve shoulder mechanics (deltoid lever arm)"
                ],
                
                clinical: {
                    fractures: {
                        incidence: "Most commonly fractured bone (~5% of all fractures)",
                        mechanism: "Fall on outstretched hand (FOOSH), direct blow to shoulder",
                        location: "Most common at junction of middle and lateral thirds",
                        displacement: "Medial fragment pulled up (sternocleidomastoid); lateral fragment down (weight of arm)",
                        complications: "Neurovascular injury (rare), pneumothorax, malunion",
                        treatment: "Figure-8 brace or sling (most); surgery (ORIF) if severe displacement, open, neurovascular injury"
                    },
                    AC_separation: {
                        description: "Sprain or tear of AC joint ligaments",
                        mechanism: "Fall on shoulder (point of shoulder)",
                        grading: "Type I (sprain) to VI (severe displacement)",
                        clinical: "Step deformity; clavicle elevated relative to acromion",
                        treatment: "Conservative (I-II); surgery considered (III-VI)"
                    },
                    sternoclavicular_dislocation: "Rare; anterior or posterior; posterior can compress mediastinal structures"
                },
                
                development: "First bone to ossify (week 5-6); intramembranous ossification",
                sex_differences: "Males: longer, more curved; females: shorter, less curved"
            },
            
            scapula: {
                description: "Flat, triangular bone; 'shoulder blade'",
                location: "Posterior thoracic wall; ribs 2-7 level",
                size: "~15-20 cm long",
                
                surfaces: {
                    costal_anterior: {
                        description: "Faces ribs; concave",
                        subscapular_fossa: "Entire costal surface; attachment for subscapularis muscle",
                        surface: "Ridges for tendinous intersections of muscle"
                    },
                    dorsal_posterior: {
                        description: "Convex",
                        spine: {
                            description: "Prominent ridge running transversely",
                            location: "Crosses posterior surface obliquely",
                            parts: "Root (medial, near vertebral border) to acromion (lateral)",
                            borders: "Superior and inferior lips",
                            function: "Divides posterior surface; muscle attachment"
                        },
                        supraspinous_fossa: {
                            location: "Above spine",
                            muscle: "Supraspinatus (rotator cuff)"
                        },
                        infraspinous_fossa: {
                            location: "Below spine; larger than supraspinous",
                            muscle: "Infraspinatus (rotator cuff)"
                        }
                    }
                },
                
                borders: {
                    superior: {
                        description: "Shortest, thinnest border",
                        suprascapular_notch: "Medial to coracoid process; suprascapular nerve passes through (artery over)",
                        muscle: "Omohyoid"
                    },
                    medial_vertebral: {
                        description: "Longest border; parallel to vertebral column",
                        location: "~5 cm from spinous processes",
                        muscles: "Levator scapulae, rhomboids, serratus anterior"
                    },
                    lateral_axillary: {
                        description: "Thick, directed toward axilla",
                        glenoid_cavity: "At superior end; shallow socket",
                        infraglenoid_tubercle: "Just below glenoid; long head triceps origin",
                        supraglenoid_tubercle: "Just above glenoid; long head biceps origin"
                    }
                },
                
                angles: {
                    superior: "Where superior and medial borders meet; sharp",
                    inferior: {
                        description: "Where medial and lateral borders meet",
                        palpation: "Easily palpable; inferior tip",
                        level: "T7 vertebra (when arm at side)",
                        clinical: "Landmark for counting ribs posteriorly"
                    },
                    lateral: {
                        description: "Truncated; where lateral and superior borders meet",
                        glenoid_cavity: "Located here; articulates with humerus head",
                        head_of_scapula: "Enlarged lateral part containing glenoid",
                        neck: "Slightly constricted region supporting head"
                    }
                },
                
                processes: {
                    acromion: {
                        description: "Lateral end of spine; projects anteriorly over shoulder joint",
                        shape: "Flattened, quadrilateral",
                        articulation: "AC joint with clavicle (medial border)",
                        palpation: "Easily palpated; 'point of shoulder'",
                        muscles: "Deltoid, trapezius",
                        clinical: "Subacromial impingement; AC separation"
                    },
                    coracoid_process: {
                        description: "Finger-like projection anteriorly from superior lateral scapula",
                        shape: "Hook-shaped (coracoid = 'crow's beak')",
                        location: "Projects anterolaterally beneath clavicle",
                        palpation: "Can be felt inferior to lateral clavicle in deltopectoral groove",
                        attachments: {
                            muscles: "Pectoralis minor, short head biceps, coracobrachialis",
                            ligaments: "Coracoclavicular (conoid, trapezoid), coracoacromial, coracohumeral"
                        },
                        clinical: "Coracoid process fractures (rare); transferred in Latarjet procedure (shoulder instability)"
                    }
                },
                
                glenoid_cavity: {
                    description: "Shallow, pear-shaped socket for humerus head",
                    size: "~3 cm × 2.5 cm; covers only 1/3 of humeral head",
                    shape: "Pear-shaped (wider inferiorly)",
                    rim: "Slight rim; deepened by fibrocartilaginous glenoid labrum",
                    orientation: "Faces laterally, anteriorly, and slightly superiorly",
                    function: "Articulates with humerus (glenohumeral joint)",
                    clinical: "Shallow socket allows great ROM but poor stability → shoulder dislocations common"
                },
                
                scapulothoracic_articulation: {
                    type: "Physiological joint (not true synovial joint)",
                    description: "Scapula glides on posterior thoracic wall",
                    muscles: {
                        elevation: "Levator scapulae, trapezius (upper), rhomboids",
                        depression: "Trapezius (lower), pectoralis minor, serratus anterior (lower)",
                        protraction: "Serratus anterior, pectoralis minor",
                        retraction: "Trapezius (middle), rhomboids",
                        upward_rotation: "Trapezius (upper and lower), serratus anterior",
                        downward_rotation: "Levator scapulae, rhomboids, pectoralis minor"
                    },
                    importance: "Scapular mobility critical for normal shoulder function"
                },
                
                clinical: {
                    fractures: "Uncommon (protected by muscles); high-energy trauma; body, neck, acromion, coracoid",
                    scapular_winging: {
                        description: "Medial border lifts off thorax",
                        cause: "Serratus anterior weakness/paralysis (long thoracic nerve injury)",
                        test: "Push against wall; scapula protrudes"
                    },
                    impingement: "Subacromial impingement - rotator cuff tendon compressed under acromion"
                }
            }
        },
        
        upper_limb: {
            overview: {
                bones_per_limb: 30,
                total_both_limbs: 60,
                regions: ["Arm (brachium) - 1 bone", "Forearm (antebrachium) - 2 bones", "Wrist (carpus) - 8 bones", "Hand (metacarpus and digits) - 19 bones"],
                functions: "Manipulation, grasping, tool use; prioritizes mobility over stability"
            },
            
            arm: {
                bone: "Humerus",
                number: 1,
                description: "Longest and largest bone of upper limb",
                length: "~33 cm (males), ~30 cm (females)",
                
                proximal_end: {
                    head: {
                        description: "Large, smooth, hemispherical",
                        articulation: "Glenoid cavity of scapula (glenohumeral joint)",
                        coverage: "Forms ~1/3 of sphere",
                        facing: "Medially, superiorly, posteriorly"
                    },
                    anatomical_neck: {
                        description: "Slight groove encircling head",
                        location: "Junction of head and tubercles",
                        clinical: "Fractures rare; separates head from tubercles"
                    },
                    greater_tubercle: {
                        location: "Lateral; most lateral point of shoulder",
                        size: "Large, prominent",
                        facets: "Three impressions (superior, middle, inferior)",
                        muscle_attachments: {
                            superior: "Supraspinatus (rotator cuff)",
                            middle: "Infraspinatus (rotator cuff)",
                            inferior: "Teres minor (rotator cuff)"
                        },
                        palpation: "Palpable below acromion when arm at side"
                    },
                    lesser_tubercle: {
                        location: "Anterior; smaller than greater",
                        muscle: "Subscapularis (rotator cuff)",
                        facing: "Anteriorly"
                    },
                    intertubercular_sulcus: {
                        description: "Groove between greater and lesser tubercles",
                        also_called: "Bicipital groove",
                        contents: "Tendon of long head of biceps brachii",
                        lips: {
                            lateral: "Pectoralis major attachment",
                            medial: "Teres major attachment",
                            floor: "Latissimus dorsi attachment"
                        },
                        clinical: "Biceps tendinitis; tendon rupture"
                    },
                    surgical_neck: {
                        location: "Below tubercles; junction of head and shaft",
                        description: "Slightly narrowed region",
                        clinical: "Common fracture site (especially elderly); axillary nerve risk",
                        name_origin: "Named for frequency of fractures requiring surgery"
                    }
                },
                
                shaft: {
                    shape: "Cylindrical proximally; triangular distally",
                    borders: "Anterior, lateral, medial",
                    surfaces: "Anterolateral, anteromedial, posterior",
                    features: {
                        deltoid_tuberosity: {
                            location: "Lateral surface, middle of shaft",
                            shape: "Rough, V-shaped elevation",
                            muscle: "Deltoid insertion",
                            level: "About midshaft"
                        },
                        radial_groove: {
                            description: "Shallow, spiral groove on posterior surface",
                            also_called: "Spiral groove",
                            direction: "Runs obliquely from posteromedial to posterolateral",
                            contents: "Radial nerve, profunda brachii artery",
                            clinical: "Midshaft fractures can injure radial nerve → wrist drop"
                        }
                    }
                },
                
                distal_end: {
                    shape: "Flattened anteroposteriorly; wide mediolaterally",
                    condyles: {
                        capitulum: {
                            description: "Lateral, rounded knob",
                            articulation: "Head of radius",
                            shape: "Hemispherical",
                            location: "Anterior surface"
                        },
                        trochlea: {
                            description: "Medial, pulley-shaped",
                            articulation: "Trochlear notch of ulna",
                            shape: "Hourglass/spool-shaped",
                            extent: "Wraps around from anterior to posterior",
                            clinical: "Carrying angle determined by trochlea orientation"
                        }
                    },
                    epicondyles: {
                        medial: {
                            description: "More prominent; projects medially",
                            palpation: "Easily palpable; 'funny bone' region",
                            muscles: "Common flexor tendon origin (flexor-pronator group)",
                            nerve: "Ulnar nerve passes in groove posterior to epicondyle",
                            clinical: "Ulnar nerve injury → numbness ring/little fingers, weak hand intrinsics; golfer's elbow (medial epicondylitis)"
                        },
                        lateral: {
                            description: "Less prominent",
                            muscles: "Common extensor tendon origin (extensor-supinator group)",
                            clinical: "Tennis elbow (lateral epicondylitis)"
                        }
                    },
                    fossae: {
                        coronoid_fossa: {
                            location: "Anterior surface, above trochlea",
                            receives: "Coronoid process of ulna during flexion"
                        },
                        radial_fossa: {
                            location: "Anterior surface, above capitulum",
                            receives: "Head of radius during flexion"
                        },
                        olecranon_fossa: {
                            location: "Posterior surface, above trochlea",
                            description: "Deep depression",
                            receives: "Olecranon of ulna during extension",
                            clinical: "May be perforated (supratrochlear foramen) - normal variant ~6%"
                        }
                    }
                },
                
                clinical: {
                    fractures: {
                        proximal: {
                            surgical_neck: "Most common proximal fracture; risk to axillary nerve",
                            anatomical_neck: "Rare; may compromise blood supply to head",
                            greater_tubercle: "Usually with dislocation; rotator cuff injury"
                        },
                        shaft: {
                            location: "Middle third most common",
                            radial_nerve_injury: "Wrist drop, loss of thumb extension, sensory loss dorsal hand",
                            treatment: "Functional brace; surgery if nerve injury, open fracture, non-union"
                        },
                        distal: {
                            supracondylar: "Common in children; risk to brachial artery, median nerve",
                            intercondylar: "T or Y shaped; intra-articular",
                            complications: "Volkmann's contracture (compartment syndrome → ischemic contracture)"
                        }
                    },
                    shoulder_dislocation: {
                        anterior: "95% of dislocations; head displaced anteroinferiorly",
                        mechanism: "Abduction, external rotation, extension (e.g., throwing)",
                        complications: "Axillary nerve injury, rotator cuff tear, labral tear, recurrent instability",
                        clinical: "Loss of normal shoulder contour; arm held abducted and externally rotated"
                    }
                }
            },
            
            forearm: {
                bones: "Radius (lateral/thumb side), ulna (medial/pinky side)",
                number: 2,
                arrangement: "Parallel in anatomical position; radius rotates around ulna in pronation",
                
                radius: {
                    description: "Lateral forearm bone; shorter than ulna",
                    name_origin: "Latin 'spoke of wheel' - rotates like spoke",
                    position: "Thumb side; lateral in anatomical position",
                    
                    proximal_end: {
                        head: {
                            description: "Disc-shaped, shallow depression on top",
                            articulation_superior: "Capitulum of humerus (humeroradial joint)",
                            articulation_rim: "Radial notch of ulna (proximal radioulnar joint)",
                            movement: "Rotates during pronation/supination"
                        },
                        neck: {
                            description: "Narrowed region below head",
                            location: "Between head and radial tuberosity"
                        },
                        radial_tuberosity: {
                            location: "Medial surface, below neck",
                            description: "Oval roughening",
                            muscle: "Biceps brachii tendon insertion",
                            clinical: "Radial tuberosity bursitis"
                        }
                    },
                    
                    shaft: {
                        shape: "Expands distally (opposite of ulna)",
                        curvature: "Slight lateral convexity",
                        borders: "Anterior, posterior, interosseous",
                        surfaces: "Anterior, posterior, lateral",
                        interosseous_border: {
                            description: "Sharp, medial border",
                            attachment: "Interosseous membrane (connects radius and ulna)"
                        }
                    },
                    
                    distal_end: {
                        description: "Expanded; articulates with wrist",
                        shape: "Broad, flattened",
                        carpal_articular_surface: {
                            articulation: "Scaphoid (lateral) and lunate (medial) - radiocarpal joint",
                            surface: "Concave, smooth"
                        },
                        styloid_process: {
                            description: "Projects distally from lateral side",
                            palpation: "Easily palpable in anatomical snuffbox",
                            attachments: "Radial collateral ligament, brachioradialis tendon",
                            clinical: "Landmark for radial artery pulse"
                        },
                        ulnar_notch: {
                            description: "Medial surface, concave",
                            articulation: "Head of ulna (distal radioulnar joint)"
                        },
                        dorsal_tubercle: {
                            description: "Prominent ridge on posterior surface",
                            also_called: "Lister's tubercle",
                            function: "Pulley for extensor pollicis longus tendon",
                            palpation: "Palpable on dorsal wrist"
                        },
                        grooves: "Multiple on posterior surface for extensor tendons"
                    },
                    
                    clinical: {
                        fractures: {
                            head: "Usually with elbow dislocation; limited pronation/supination",
                            neck: "Children; often with ulna (Monteggia - ulna shaft + radial head dislocation)",
                            shaft: "May occur with ulna (both bones forearm fracture)",
                            Colles_fracture: {
                                description: "Distal radius fracture with dorsal angulation",
                                mechanism: "FOOSH (fall on outstretched hand)",
                                appearance: "Dinner fork deformity",
                                common: "Most common forearm fracture; elderly with osteoporosis"
                            },
                            Smith_fracture: {
                                description: "Distal radius fracture with volar (palmar) angulation",
                                mechanism: "Fall on flexed wrist",
                                appearance: "Garden spade deformity",
                                reverse: "Reverse of Colles"
                            },
                            Barton_fracture: "Intra-articular distal radius with radiocarpal dislocation"
                        }
                    }
                },
                
                ulna: {
                    description: "Medial forearm bone; longer than radius",
                    position: "Pinky side; medial in anatomical position",
                    characteristic: "Large proximally; small distally (opposite of radius)",
                    
                    proximal_end: {
                        olecranon: {
                            description: "Large, posterior projection",
                            palpation: "Forms point of elbow; easily palpable",
                            function: "Insertion for triceps brachii tendon",
                            articulation: "Olecranon fossa of humerus in extension",
                            clinical: "Olecranon bursitis; fractures"
                        },
                        coronoid_process: {
                            description: "Anterior projection, inferior to olecranon",
                            function: "Insertion for brachialis muscle",
                            articulation: "Coronoid fossa of humerus in flexion",
                            facets: "Sublime tubercle (medial) - ulnar collateral ligament"
                        },
                        trochlear_notch: {
                            description: "Large C-shaped concavity",
                            also_called: "Semilunar notch",
                            location: "Between olecranon and coronoid process",
                            articulation: "Trochlea of humerus (humeroulnar joint)",
                            shape: "Wraps around trochlea",
                            clinical: "Trochlear notch fractures → elbow instability"
                        },
                        radial_notch: {
                            description: "Shallow depression on lateral surface",
                            location: "Below coronoid process",
                            articulation: "Head of radius (proximal radioulnar joint)",
                            shape: "Concave"
                        },
                        tuberosity_of_ulna: {
                            location: "Anterior surface, below coronoid",
                            muscle: "Brachialis insertion"
                        }
                    },
                    
                    shaft: {
                        shape: "Triangular in cross-section proximally; becomes more cylindrical distally",
                        borders: "Anterior, posterior, interosseous",
                        surfaces: "Anterior, posterior, medial",
                        interosseous_border: {
                            description: "Sharp, lateral border",
                            attachment: "Interosseous membrane"
                        }
                    },
                    
                    distal_end: {
                        description: "Small, rounded",
                        head: {
                            description: "Small, knob-like",
                            articulation: "Ulnar notch of radius (distal radioulnar joint)",
                            note: "Does NOT articulate with carpals"
                        },
                        styloid_process: {
                            description: "Projects distally from posteromedial side of head",
                            palpation: "Palpable on medial wrist",
                            attachment: "Ulnar collateral ligament",
                            clinical: "Styloid fracture with distal radius fracture"
                        }
                    },
                    
                    clinical: {
                        fractures: {
                            olecranon: "Direct blow; triceps pull; loss of active extension if displaced",
                            shaft: {
                                isolated: "Nightstick fracture (direct blow)",
                                with_radial_head_dislocation: "Monteggia fracture-dislocation"
                            },
                            distal: "Usually with radius (Colles, Smith)"
                        }
                    }
                },
                
                interosseous_membrane: {
                    description: "Fibrous sheet connecting radius and ulna",
                    extent: "Between interosseous borders of radius and ulna",
                    fibers: "Run obliquely from radius (superior) to ulna (inferior)",
                    functions: [
                        "Bind radius and ulna together",
                        "Provide surface for muscle attachment",
                        "Transfer forces from radius to ulna → humerus",
                        "Divide forearm into anterior and posterior compartments"
                    ],
                    openings: "For blood vessels (anterior/posterior interosseous arteries)"
                },
                
                radioulnar_joints: {
                    proximal: {
                        type: "Pivot synovial joint",
                        articulation: "Radial head with radial notch of ulna",
                        movement: "Rotation of radial head"
                    },
                    distal: {
                        type: "Pivot synovial joint",
                        articulation: "Ulnar head with ulnar notch of radius",
                        articular_disc: "Triangular fibrocartilage complex (TFCC); separates ulna from carpals",
                        movement: "Radius rotates around ulna"
                    },
                    movements: {
                        supination: "Radius and ulna parallel; palm up (anatomical position)",
                        pronation: "Radius crosses over ulna; palm down",
                        muscles_supination: "Supinator, biceps brachii",
                        muscles_pronation: "Pronator teres, pronator quadratus"
                    }
                }
            },
            
            wrist: {
                bones: "Eight carpal bones",
                arrangement: "Two rows of four",
                shape: "Small, irregularly shaped",
                articulations: "Each carpal articulates with multiple neighbors; allow complex movements",
                
                proximal_row: {
                    description: "Lateral to medial; articulate with radius",
                    scaphoid: {
                        name_meaning: "Boat-shaped",
                        position: "Lateral; largest in proximal row",
                        articulation: "Radius, lunate, capitate, trapezium, trapezoid",
                        tubercle: "Palpable on palmar surface; scaphoid tubercle",
                        blood_supply: "Enters distally; proximal pole vulnerable",
                        clinical: {
                            fracture: "Most commonly fractured carpal (fall on outstretched hand)",
                            waist_fracture: "Most common site; may disrupt blood supply to proximal pole",
                            AVN: "Avascular necrosis of proximal pole if fracture missed",
                            snuffbox_tenderness: "Pain in anatomical snuffbox suggests fracture",
                            imaging: "May not be visible on initial X-ray; MRI or repeat X-ray in 2 weeks"
                        }
                    },
                    lunate: {
                        name_meaning: "Moon-shaped",
                        position: "Central proximal row; most frequently dislocated carpal",
                        articulation: "Radius, scaphoid, capitate, hamate, triquetrum",
                        shape: "Crescent-shaped",
                        clinical: {
                            dislocation: "Lunate dislocation (perilunate injury) - median nerve compression",
                            Kienböck_disease: "Avascular necrosis of lunate; cause unknown"
                        }
                    },
                    triquetrum: {
                        name_meaning: "Three-cornered",
                        position: "Medial to lunate",
                        articulation: "Lunate, hamate, pisiform (anterior surface)",
                        clinical: "Second most commonly fractured carpal"
                    },
                    pisiform: {
                        name_meaning: "Pea-shaped",
                        position: "Anterior to triquetrum; palmar surface",
                        type: "Sesamoid bone within flexor carpi ulnaris tendon",
                        palpation: "Palpable on medial palmar wrist",
                        articulation: "Only articulates with triquetrum",
                        attachment: "Flexor carpi ulnaris tendon"
                    }
                },
                
                distal_row: {
                    description: "Lateral to medial; articulate with metacarpals",
                    trapezium: {
                        name_meaning: "Table-shaped",
                        position: "Lateral distal row; beneath scaphoid",
                        articulation: "Scaphoid, trapezoid, 1st metacarpal (thumb), 2nd metacarpal",
                        tubercle: "Tubercle of trapezium on palmar surface",
                        saddle_joint: "With 1st metacarpal - allows thumb opposition",
                        groove: "For flexor carpi radialis tendon",
                        clinical: "Thumb CMC joint arthritis (very common); thumb basal joint arthritis"
                    },
                    trapezoid: {
                        name_meaning: "Table-shaped",
                        position: "Between trapezium and capitate",
                        articulation: "Scaphoid, trapezium, capitate, 2nd metacarpal",
                        smallest: "Smallest carpal bone",
                        clinical: "Rarely fractured or dislocated"
                    },
                    capitate: {
                        name_meaning: "Head-shaped",
                        position: "Central; largest carpal bone",
                        articulation: "Scaphoid, lunate, trapezoid, hamate, 2nd, 3rd, 4th metacarpals",
                        head: "Rounded proximal end; fits into concavity of scaphoid-lunate",
                        clinical: "May fracture with scaphoid (scaphocapitate syndrome)"
                    },
                    hamate: {
                        name_meaning: "Hooked",
                        position: "Medial distal row",
                        articulation: "Lunate, triquetrum, capitate, 4th and 5th metacarpals",
                        hook: "Hook of hamate - projects from palmar surface; palpable",
                        groove: "For flexor tendons",
                        clinical: {
                            hook_fracture: "Fracture of hook (fall on palm, racquet sports); ulnar nerve/artery in Guyon's canal at risk",
                            palpation: "Hook palpable deep in hypothenar eminence"
                        }
                    }
                },
                
                mnemonic: {
                    proximal_to_distal_lateral_to_medial: "Some Lovers Try Positions That They Can't Handle",
                    breakdown: "Scaphoid, Lunate, Triquetrum, Pisiform, Trapezium, Trapezoid, Capitate, Hamate"
                },
                
                carpal_tunnel: {
                    floor: "Carpal bones (concave arch)",
                    roof: "Flexor retinaculum (transverse carpal ligament)",
                    attachments: {
                        radial: "Scaphoid tubercle, trapezium tubercle",
                        ulnar: "Pisiform, hook of hamate"
                    },
                    contents: [
                        "Median nerve",
                        "4 tendons of flexor digitorum superficialis",
                        "4 tendons of flexor digitorum profundus",
                        "Tendon of flexor pollicis longus"
                    ],
                    clinical: {
                        carpal_tunnel_syndrome: {
                            description: "Compression of median nerve in carpal tunnel",
                            causes: "Repetitive motion, pregnancy, hypothyroidism, rheumatoid arthritis, wrist fracture",
                            symptoms: "Numbness/tingling thumb, index, middle, lateral ring fingers; weakness of thumb opposition/abduction; worse at night",
                            tests: "Tinel's sign (tap over tunnel), Phalen's test (wrist flexion 60 sec), nerve conduction studies",
                            treatment: "Wrist splinting, corticosteroid injection, surgical release (divide flexor retinaculum)"
                        }
                    }
                },
                
                movements: {
                    flexion: "~80-90°",
                    extension: "~70-80°",
                    abduction_radial_deviation: "~15-20°",
                    adduction_ulnar_deviation: "~30-40°",
                    circumduction: "Combination of above movements"
                }
            },
            
            hand: {
                metacarpals: {
                    number: 5,
                    numbering: "I-V (thumb to little finger)",
                    location: "Palm",
                    
                    parts: {
                        base: "Proximal; articulates with carpals",
                        shaft: "Body; slightly concave palmarly",
                        head: "Distal; 'knuckles'; articulates with proximal phalanges"
                    },
                    
                    individual: {
                        first_I: {
                            description: "Thumb metacarpal; shortest, thickest",
                            articulation: "Trapezium (saddle joint - CMC joint)",
                            movement: "Wide range - opposition possible",
                            clinical: "CMC joint arthritis very common"
                        },
                        second_II: {
                            description: "Index finger metacarpal; longest",
                            articulation: "Trapezoid, capitate, 3rd metacarpal",
                            stability: "Most stable; least mobile CMC joint"
                        },
                        third_III: {
                            description: "Middle finger metacarpal",
                            articulation: "Capitate; largest head",
                            styloid_process: "Small dorsal projection at base"
                        },
                        fourth_IV: {
                            description: "Ring finger metacarpal",
                            articulation: "Hamate, capitate"
                        },
                        fifth_V: {
                            description: "Little finger metacarpal",
                            articulation: "Hamate",
                            clinical: "Boxer's fracture (fracture of neck) - punch with closed fist"
                        }
                    },
                    
                    clinical: {
                        boxers_fracture: "Fracture of 5th metacarpal neck; angulated volarly",
                        Bennett_fracture: "Intra-articular fracture-dislocation of 1st metacarpal base",
                        Rolando_fracture: "Comminuted intra-articular fracture of 1st metacarpal base"
                    }
                },
                
                phalanges: {
                    total: 14,
                    thumb: "2 phalanges (proximal, distal) - no middle phalanx",
                    fingers: "3 phalanges each (proximal, middle, distal) - 4 fingers × 3 = 12",
                    
                    parts: {
                        base: "Proximal; articulates with bone above",
                        shaft: "Body",
                        head: "Distal; articulates with bone below (except distal phalanges)"
                    },
                    
                    distal_phalanges: {
                        description: "Terminal bones of digits",
                        tuberosity: "Roughened distal end; supports nail bed and fingertip",
                        clinical: "Mallet finger (extensor tendon avulsion), jersey finger (flexor tendon avulsion)"
                    },
                    
                    clinical: {
                        fractures: "Very common; usually stable; buddy taping",
                        dislocations: "PIP joint (proximal interphalangeal) most common; volar plate injury",
                        mallet_finger: "Avulsion of extensor tendon from distal phalanx; unable to extend DIP",
                        jersey_finger: "Avulsion of flexor digitorum profundus; unable to flex DIP"
                    }
                },
                
                joints: {
                    CMC: {
                        name: "Carpometacarpal joints",
                        articulation: "Carpals with metacarpal bases",
                        thumb_CMC: "Saddle joint; highly mobile; opposition",
                        fingers_CMC: "Less mobile; 4th and 5th have some movement"
                    },
                    MCP: {
                        name: "Metacarpophalangeal joints",
                        articulation: "Metacarpal heads with proximal phalanx bases",
                        type: "Condyloid synovial joints",
                        movements: "Flexion/extension, abduction/adduction",
                        collateral_ligaments: "Tight in flexion, loose in extension",
                        knuckles: "MCP joints form knuckles when fist clenched"
                    },
                    IP: {
                        name: "Interphalangeal joints",
                        type: "Hinge synovial joints",
                        PIP: "Proximal interphalangeal (between proximal and middle phalanges)",
                        DIP: "Distal interphalangeal (between middle and distal phalanges)",
                        thumb_IP: "Only one IP joint (no middle phalanx)",
                        movements: "Flexion/extension only",
                        volar_plate: "Fibrocartilaginous structure on palmar side; prevents hyperextension"
                    }
                }
            }
        },
        
        pelvic_girdle: {
            overview: {
                bones: "2 hip bones (os coxae); articulate with sacrum",
                total: 2,
                formation: "Each hip bone formed by fusion of 3 bones: ilium, ischium, pubis (complete fusion by age 23)",
                articulations: {
                    with_axial: "Sacroiliac joints (with sacrum); pubic symphysis (two pubic bones)",
                    with_limb: "Hip joint (acetabulum with femur head)"
                },
                functions: [
                    "Transfer body weight from axial skeleton to lower limbs",
                    "Support and protect pelvic organs (bladder, reproductive organs, rectum)",
                    "Provide attachment for lower limb and trunk muscles",
                    "Facilitate childbirth (in females)",
                    "Bear body weight when sitting (ischial tuberosities)"
                ],
                characteristics: "Strong, stable; less mobile than pectoral girdle; adapted for weight-bearing"
            },
            
            hip_bone: {
                description: "Large, irregular bone; forms lateral wall of pelvis",
                development: "Three parts (ilium, ischium, pubis) fuse at acetabulum by age 16-18; complete fusion by 23",
                acetabulum: {
                    description: "Deep, cup-shaped socket on lateral surface",
                    location: "Where three bones meet (triradiate cartilage in children)",
                    articulation: "Femur head (hip joint)",
                    depth: "Deep socket provides stability (contrast with glenoid)",
                    features: {
                        lunate_surface: "Articular surface; C-shaped; covered with hyaline cartilage",
                        acetabular_notch: "Inferior gap in lunate surface",
                        acetabular_fossa: "Non-articular center; filled with fat pad",
                        acetabular_labrum: "Fibrocartilage rim; deepens socket"
                    },
                    coverage: "Covers ~40% of femoral head (vs ~30% glenoid coverage)"
                },
                obturator_foramen: {
                    description: "Large opening below and anterior to acetabulum",
                    size: "Largest foramen in skeleton",
                    border: "Formed by ischium and pubis",
                    closure: "Nearly completely closed by obturator membrane",
                    obturator_canal: "Small opening in membrane; passage for obturator nerve and vessels",
                    sex_differences: {
                        male: "Round or oval",
                        female: "Oval; larger"
                    }
                }
            },
            
            ilium: {
                description: "Superior, largest part of hip bone; 'hip bone' you can feel",
                parts: {
                    body: "Inferior part; forms superior 2/5 of acetabulum",
                    ala: "Wing; superior expanded portion; 'ala' = wing"
                },
                
                features: {
                    iliac_crest: {
                        description: "Superior curved border; S-shaped",
                        extent: "From anterior superior iliac spine (ASIS) to posterior superior iliac spine (PSIS)",
                        palpation: "Easily palpable; follows top of hip",
                        lips: "External (lateral) and internal (medial) lips; intermediate line",
                        muscle_attachments: {
                            external_lip: "Tensor fasciae latae, external oblique",
                            intermediate: "Internal oblique",
                            internal_lip: "Transversus abdominis, quadratus lumborum, erector spinae, latissimus dorsi"
                        },
                        clinical: "Bone graft harvest site; iliac crest contusion ('hip pointer')"
                    },
                    anterior_superior_iliac_spine_ASIS: {
                        description: "Blunt projection at anterior end of iliac crest",
                        palpation: "Prominent; easily palpable",
                        attachments: "Sartorius, inguinal ligament",
                        clinical: "Landmark for physical exam, injections; McBurney's point (appendicitis)"
                    },
                    anterior_inferior_iliac_spine_AIIS: {
                        description: "Below ASIS; less prominent",
                        attachment: "Rectus femoris (straight head)"
                    },
                    posterior_superior_iliac_spine_PSIS: {
                        description: "Posterior end of iliac crest",
                        palpation: "Palpable; marked by skin dimples ('dimples of Venus')",
                        level: "S2 vertebra",
                        clinical: "Landmark for sacroiliac joint"
                    },
                    posterior_inferior_iliac_spine_PIIS: {
                        description: "Below PSIS"
                    },
                    iliac_fossa: {
                        description: "Large, smooth, concave medial surface of ala",
                        muscle: "Iliacus muscle",
                        palpation: "Not palpable externally"
                    },
                    auricular_surface: {
                        description: "Ear-shaped roughened area on medial surface",
                        location: "Posterior to iliac fossa",
                        articulation: "Sacrum (sacroiliac joint)",
                        type: "Synovial joint with limited movement",
                        clinical: "Sacroiliac joint dysfunction; can become ankylosed"
                    },
                    iliac_tuberosity: {
                        description: "Rough area posterior and superior to auricular surface",
                        attachments: "Interosseous sacroiliac ligaments, erector spinae"
                    },
                    greater_sciatic_notch: {
                        description: "Large notch on posterior border below PIIS",
                        converted_to_foramen: "Greater sciatic foramen (by sacrotuberous ligament)",
                        passage: "Piriformis muscle, sciatic nerve, superior/inferior gluteal nerves and vessels, pudendal nerve and vessels, nerve to obturator internus"
                    },
                    arcuate_line: {
                        description: "Curved ridge on medial surface",
                        location: "Marks pelvic brim (inlet); separates true from false pelvis"
                    }
                }
            },
            
            ischium: {
                description: "Inferior, posterior part of hip bone; 'sit bone'",
                parts: {
                    body: "Superior part; forms posterior 2/5 of acetabulum",
                    ramus: "Inferior part; joins inferior pubic ramus"
                },
                
                features: {
                    ischial_spine: {
                        description: "Posterior projection from body",
                        location: "Between greater and lesser sciatic notches",
                        attachments: "Sacrospinous ligament, coccygeus, levator ani",
                        clinical: "Landmark for pudendal nerve block (childbirth); narrowest pelvic diameter (interspinous)"
                    },
                    lesser_sciatic_notch: {
                        description: "Below ischial spine",
                        converted_to_foramen: "Lesser sciatic foramen (by sacrospinous and sacrotuberous ligaments)",
                        passage: "Obturator internus tendon, pudendal nerve and vessels, nerve to obturator internus"
                    },
                    ischial_tuberosity: {
                        description: "Large, rough, posteroinferior projection",
                        palpation: "Palpable when hip flexed; covered by gluteus maximus when standing",
                        function: "Bears weight when sitting - 'sit bones'",
                        attachments: {
                            superior: "Hamstring muscles (semimembranosus, semitendinosus, long head biceps femoris, adductor magnus)",
                            inferior: "Sacrotuberous ligament"
                        },
                        clinical: "Ischial bursitis; hamstring avulsion injuries"
                    },
                    ischial_ramus: {
                        description: "Inferior projection from tuberosity",
                        direction: "Passes anteriorly and medially",
                        joins: "Inferior pubic ramus → forms ischiopubic ramus",
                        forms: "Inferior boundary of obturator foramen"
                    }
                }
            },
            
            pubis: {
                description: "Anterior, inferior part of hip bone",
                parts: {
                    body: "Forms anterior 1/5 of acetabulum",
                    superior_ramus: "Extends anteromedially from body to midline",
                    inferior_ramus: "Extends posterolaterally from body; joins ischial ramus"
                },
                
                features: {
                    pubic_symphysis: {
                        description: "Cartilaginous joint between two pubic bones at midline",
                        type: "Secondary cartilaginous joint (symphysis)",
                        disc: "Fibrocartilaginous disc between bones",
                        movement: "Minimal normally; increases in pregnancy (hormone relaxin)",
                        clinical: "Osteitis pubis (inflammation); separation during childbirth"
                    },
                    pubic_tubercle: {
                        description: "Small projection on superior ramus, lateral to symphysis",
                        palpation: "Palpable; ~2.5 cm from midline",
                        attachments: "Inguinal ligament (lateral attachment), medial crus of superficial inguinal ring",
                        clinical: "Landmark for inguinal hernia examination; distinguish direct vs indirect hernia"
                    },
                    pubic_crest: {
                        description: "Ridge on superior ramus from tubercle to symphysis",
                        attachment: "Rectus abdominis"
                    },
                    pecten_pubis: {
                        description: "Sharp ridge on superior ramus lateral to tubercle",
                        also_called: "Pectineal line",
                        location: "Part of pelvic brim",
                        attachment: "Pectineus muscle"
                    },
                    obturator_groove: {
                        description: "Groove on inferior surface of superior ramus",
                        location: "Above obturator foramen",
                        passage: "Obturator nerve and vessels"
                    }
                }
            },
            
            sex_differences: {
                description: "Female pelvis adapted for childbirth; male for muscle attachment",
                general: {
                    female: "Lighter, shallower, wider; larger pelvic inlet and outlet",
                    male: "Heavier, deeper, narrower; smaller inlet/outlet, thicker bones"
                },
                specific: {
                    pelvic_inlet: {
                        female: "Wider, oval or rounded",
                        male: "Narrower, heart-shaped (sacral promontory projects more anteriorly)"
                    },
                    pelvic_outlet: {
                        female: "Wider",
                        male: "Narrower"
                    },
                    subpubic_angle: {
                        female: ">80-90° (obtuse); U-shaped",
                        male: "<70° (acute); V-shaped"
                    },
                    greater_sciatic_notch: {
                        female: ">68° (wide, shallow U)",
                        male: "<68° (narrow, deep V)"
                    },
                    acetabulum: {
                        female: "Smaller, faces more anteriorly",
                        male: "Larger, faces more laterally"
                    },
                    obturator_foramen: {
                        female: "Oval, smaller",
                        male: "Round, larger"
                    },
                    ilium: {
                        female: "Less vertical, more flared outward",
                        male: "More vertical, less flared"
                    },
                    ischial_spines: {
                        female: "Farther apart, less prominent",
                        male: "Closer together, more prominent"
                    },
                    sacrum: {
                        female: "Shorter, wider, less curved",
                        male: "Longer, narrower, more curved"
                    }
                },
                clinical: "Sex determination in forensic anthropology; pelvimetry for childbirth; understanding dystocia (difficult birth)"
            },
            
            pelvic_divisions: {
                false_pelvis: {
                    description: "Superior, wider part above pelvic brim",
                    also_called: "Greater pelvis",
                    boundaries: "Iliac fossae laterally; L5-S1 posteriorly; abdominal wall anteriorly",
                    contents: "Lower abdominal organs (sigmoid colon, ileum)",
                    function: "Support abdominal organs"
                },
                true_pelvis: {
                    description: "Inferior, narrower part below pelvic brim",
                    also_called: "Lesser pelvis; pelvic cavity",
                    boundaries: {
                        inlet: "Pelvic brim (arcuate line, pectineal line, pubic crest, superior pubic ramus, sacral promontory)",
                        outlet: "Inferior opening (pubic arch anteriorly, ischial tuberosities laterally, coccyx posteriorly)"
                    },
                    contents: "Pelvic organs (bladder, reproductive organs, rectum)",
                    function: "Birth canal in females",
                    diameters: {
                        inlet_AP: "Conjugate diameter (~11 cm in females)",
                        inlet_transverse: "Widest diameter (~13cm in females)",
midpelvis_interspinous: "Between ischial spines (~10.5 cm); often narrowest point",
outlet_AP: "From inferior pubic symphysis to coccyx (~11 cm)",
outlet_transverse: "Between ischial tuberosities (~11 cm)"
},
pelvimetry: "Measurement of pelvic dimensions for childbirth assessment"
}
},
clinical_correlations: {
            fractures: {
                pelvic_ring: "High-energy trauma (MVA, fall from height); stable vs unstable",
                acetabular: "Hip dislocation or axial load; may require surgery",
                avulsion: "ASIS (sartorius), AIIS (rectus femoris), ischial tuberosity (hamstrings) - adolescent athletes",
                complications: "Hemorrhage (rich blood supply), urologic injury, neurologic injury, chronic pain"
            },
            sacroiliac_joint_dysfunction: "Back/buttock pain; pregnancy, trauma, arthritis",
            pubic_symphysis_separation: "Pregnancy, childbirth; excessive separation (>10 mm)",
            hip_dysplasia: "Shallow acetabulum; congenital; can lead to early arthritis"
        }
    },
    
    lower_limb: {
        overview: {
            bones_per_limb: 30,
            total_both_limbs: 60,
            regions: ["Thigh (femur, patella) - 2 bones", "Leg (tibia, fibula) - 2 bones", "Ankle (tarsals) - 7 bones", "Foot (metatarsals and phalanges) - 19 bones"],
            functions: "Support body weight, locomotion, balance; prioritizes stability over mobility"
        },
        
        thigh: {
            femur: {
                description: "Longest, heaviest, strongest bone in body",
                length: "~45-50 cm (males), ~40-45 cm (females); ~26% of height",
                weight_bearing: "Transmits body weight from hip to tibia",
                
                proximal_end: {
                    head: {
                        description: "Smooth, rounded, ball-shaped",
                        coverage: "Forms 2/3 of sphere",
                        articulation: "Acetabulum (hip joint)",
                        orientation: "Directed superomedially",
                        fovea_capitis: {
                            description: "Small pit on head",
                            location: "Slightly inferior and posterior to center",
                            attachment: "Ligament of head of femur (ligamentum teres)",
                            blood_supply: "Artery to head of femur (branch of obturator artery) runs in ligament; minimal in adults",
                            clinical: "Avascular necrosis risk if femoral neck fracture disrupts main blood supply"
                        }
                    },
                    neck: {
                        description: "Connects head to shaft",
                        length: "~5 cm",
                        orientation: "Projects superomedially from shaft",
                        angles: {
                            angle_of_inclination: {
                                description: "Angle between neck and shaft in frontal plane",
                                normal_adult: "~125° (range 120-135°)",
                                infant: "~150°",
                                elderly: "Decreases with age",
                                coxa_vara: "<120° - decreased angle; 'knock-kneed' tendency",
                                coxa_valga: ">135° - increased angle; 'bow-legged' tendency"
                            },
                            angle_of_anteversion: {
                                description: "Angle between neck and transcondylar axis in transverse plane",
                                normal_adult: "~10-15° (neck rotated anteriorly)",
                                infant: "~30-40°",
                                excessive: "Femoral anteversion - 'toeing in', patella faces medially",
                                retroversion: "Rare; 'toeing out'"
                            }
                        },
                        blood_supply: {
                            primary: "Medial and lateral circumflex femoral arteries (from profunda femoris)",
                            anastomosis: "Retinacular arteries on neck surface; ascend to head",
                            vulnerable: "Intracapsular fractures can disrupt blood supply → avascular necrosis of head"
                        },
                        clinical: {
                            fractures: {
                                intracapsular: "Within joint capsule; disrupt blood supply; high risk AVN",
                                subcapital: "Below head; common in elderly with osteoporosis",
                                transcervical: "Through mid-neck",
                                basicervical: "At neck-shaft junction",
                                Garden_classification: "I-IV; based on displacement; guide treatment",
                                treatment: "Hemiarthroplasty or total hip replacement (elderly); pinning (young)"
                            }
                        }
                    },
                    trochanters: {
                        greater_trochanter: {
                            description: "Large, quadrilateral projection",
                            location: "Lateral aspect, superior to shaft",
                            palpation: "Easily palpable; most lateral bony point of hip",
                            surfaces: {
                                lateral: "Gluteus medius and minimus insertions",
                                medial: "Trochanteric fossa; obturator externus insertion",
                                posterior: "Piriformis, obturator internus, gemelli insertions",
                                anterior: "Gluteus minimus insertion"
                            },
                            clinical: "Trochanteric bursitis; landmark for hip injections; total hip replacement approach"
                        },
                        lesser_trochanter: {
                            description: "Conical projection",
                            location: "Posteromedial aspect at shaft junction",
                            palpation: "Not palpable",
                            muscle: "Iliopsoas insertion (primary hip flexor)",
                            clinical: "Avulsion fracture in young athletes"
                        },
                        intertrochanteric_line: {
                            description: "Ridge on anterior surface",
                            extent: "From greater to lesser trochanter",
                            attachment: "Joint capsule attaches here anteriorly",
                            clinical: "Intertrochanteric fractures (extracapsular); lower AVN risk than neck fractures"
                        },
                        intertrochanteric_crest: {
                            description: "Prominent ridge on posterior surface",
                            extent: "From greater to lesser trochanter",
                            quadrate_tubercle: "Rounded elevation on crest; quadratus femoris insertion"
                        }
                    }
                },
                
                shaft: {
                    shape: "Cylindrical, slightly bowed anteriorly",
                    cross_section: "Nearly round proximally; triangular distally",
                    linea_aspera: {
                        description: "Prominent vertical ridge on posterior surface",
                        meaning: "'Rough line'",
                        parts: "Medial and lateral lips with intermediate line",
                        attachments: {
                            lateral_lip: "Vastus lateralis, gluteus maximus (gluteal tuberosity superiorly), short head biceps femoris",
                            medial_lip: "Vastus medialis, pectineus, adductor brevis, adductor longus, adductor magnus",
                            intermediate: "Intermuscular septum"
                        },
                        superior: "Diverges into gluteal tuberosity (lateral) and pectineal line (medial)",
                        inferior: "Diverges into supracondylar lines (medial and lateral)"
                    }
                },
                
                distal_end: {
                    description: "Expanded; box-like",
                    condyles: {
                        medial_condyle: {
                            description: "Larger than lateral (bear more weight)",
                            articulation: "Medial tibial condyle",
                            shape: "Curved"
                        },
                        lateral_condyle: {
                            description: "Smaller; projects more anteriorly",
                            articulation: "Lateral tibial condyle"
                        },
                        posterior: "Separated by intercondylar fossa/notch",
                        anterior: "Patellar surface - articulates with patella"
                    },
                    epicondyles: {
                        medial: "Above medial condyle; adductor tubercle (adductor magnus insertion)",
                        lateral: "Above lateral condyle"
                    },
                    patellar_surface: {
                        description: "Anterior surface between condyles",
                        articulation: "Posterior surface of patella",
                        shape: "Smooth, grooved for patellar tracking"
                    },
                    intercondylar_fossa: {
                        description: "Deep notch separating condyles posteriorly",
                        contents: "Cruciate ligaments attach here",
                        ACL_attachment: "Medial wall of lateral condyle",
                        PCL_attachment: "Lateral wall of medial condyle"
                    }
                },
                
                clinical: {
                    femoral_shaft_fractures: {
                        mechanism: "High-energy trauma (MVA, GSW); pathologic (tumor, osteoporosis)",
                        classification: "Proximal, middle, distal third; transverse, oblique, spiral, comminuted",
                        complications: "Fat embolism, blood loss (1-2 liters), sciatic nerve injury (rare)",
                        treatment: "Intramedullary nailing (rod); external fixation; traction (historical)"
                    },
                    supracondylar_fractures: "Above condyles; elderly or high-energy; risk to popliteal vessels",
                    stress_fractures: "Femoral neck, shaft; military recruits, runners; 'hip pain + normal X-ray = MRI'",
                    slipped_capital_femoral_epiphysis: {
                        description: "Femoral head slips posteriorly and inferiorly on neck",
                        age: "Adolescents (10-16 years); obesity, growth spurt",
                        presentation: "Hip/knee pain, limp, externally rotated leg",
                        diagnosis: "Lateral X-ray (frog-leg view)",
                        treatment: "Urgent surgical pinning (prevent further slip, AVN)"
                    }
                }
            },
            
            patella: {
                description: "Triangular sesamoid bone; 'kneecap'",
                location: "Anterior to knee joint; within quadriceps tendon",
                size: "~5 cm tall, 4 cm wide",
                type: "Largest sesamoid bone in body",
                
                surfaces: {
                    anterior: {
                        description: "Convex, roughened",
                        subcutaneous: "Covered only by skin; prepatellar bursa anteriorly",
                        palpation: "Easily palpable"
                    },
                    posterior: {
                        description: "Articular surface",
                        articulation: "Patellar surface of femur (patellofemoral joint)",
                        facets: "Medial and lateral facets separated by vertical ridge",
                        cartilage: "Thickest articular cartilage in body (~5 mm)"
                    }
                },
                
                borders: {
                    superior_base: "Broad; quadriceps tendon attachment",
                    inferior_apex: "Pointed; patellar ligament attachment",
                    medial_lateral: "Vastus medialis and lateralis attachments (via aponeuroses)"
                },
                
                function: {
                    lever_arm: "Increases quadriceps leverage (increases moment arm)",
                    mechanical_advantage: "Improves knee extension efficiency (~30-50%)",
                    protection: "Protects knee joint anteriorly",
                    tracking: "Glides in femoral groove (trochlea)"
                },
                
                clinical: {
                    fractures: {
                        mechanism: "Direct blow (dashboard injury); eccentric quadriceps contraction",
                        types: "Transverse (most common), comminuted, vertical, apical, osteochondral",
                        treatment: "ORIF with tension band if displaced; excision if comminuted fragments"
                    },
                    dislocation: {
                        direction: "Lateral (almost always)",
                        mechanism: "Valgus force + internal rotation + quadriceps contraction",
                        risk_factors: "Shallow trochlea, patella alta, quadriceps dysplasia, ligamentous laxity",
                        acute: "Reduce (extend knee); immobilize; PT",
                        recurrent: "Surgical stabilization (lateral release, medial imbrication, trochleoplasty)"
                    },
                    chondromalacia_patellae: "Softening of patellar cartilage; anterior knee pain; young adults",
                    patellofemoral_pain_syndrome: "Anterior knee pain; overuse; muscle imbalance; 'runner's knee'",
                    bipartite_patella: "Unfused ossification center; normal variant; usually asymptomatic",
                    prepatellar_bursitis: "Inflammation of bursa anterior to patella; 'housemaid's knee'; kneeling trauma"
                },
                
                development: "Ossifies from multiple centers (age 3-6 years); may remain bipartite (~2%)"
            }
        },
        
        leg: {
            tibia: {
                description: "Shinbone; larger, medial leg bone; weight-bearing",
                length: "~36-43 cm (second longest bone after femur)",
                characteristic: "Expanded proximally and distally; narrow shaft",
                
                proximal_end: {
                    condyles: {
                        medial: "Larger; concave superior articular surface",
                        lateral: "Smaller; slightly convex superior surface; fibular articular facet on lateral side"
                    },
                    tibial_plateau: {
                        description: "Superior surface; two condylar articular surfaces",
                        articulation: "Femoral condyles (tibiofemoral joint)",
                        menisci: "Medial and lateral fibrocartilage menisci improve congruence",
                        slope: "Posterior slope ~7-10°"
                    },
                    intercondylar_eminence: {
                        description: "Central raised area between condyles",
                        parts: "Medial and lateral intercondylar tubercles",
                        attachments: "Cruciate ligaments, menisci attach around this area",
                        ACL_attachment: "Anterior intercondylar area (anterior to eminence)",
                        PCL_attachment: "Posterior intercondylar area (posterior to eminence)"
                    },
                    tibial_tuberosity: {
                        description: "Prominent anterior projection below condyles",
                        palpation: "Easily palpable on anterior shin",
                        attachment: "Patellar ligament insertion",
                        clinical: "Osgood-Schlatter disease (apophysitis in adolescents); avulsion fracture"
                    },
                    Gerdy_tubercle: {
                        description: "Lateral tubercle on anterolateral tibia",
                        location: "Just below lateral condyle",
                        attachment: "Iliotibial band (IT band) insertion"
                    }
                },
                
                shaft: {
                    shape: "Triangular in cross-section; three borders, three surfaces",
                    borders: {
                        anterior: "Sharp, subcutaneous; 'shin'",
                        medial: "Rounded",
                        interosseous: "Lateral; attachment for interosseous membrane"
                    },
                    surfaces: {
                        medial: "Broad, subcutaneous; no muscle coverage; palpable along entire length",
                        lateral: "Tibialis anterior muscle",
                        posterior: "Soleal line (soleus origin) crosses obliquely"
                    },
                    nutrient_foramen: "Posterior surface; directed distally"
                },
                
                distal_end: {
                    description: "Quadrilateral; expanded but less than proximal end",
                    inferior_articular_surface: {
                        articulation: "Superior surface of talus (ankle joint)",
                        shape: "Concave, smooth"
                    },
                    medial_malleolus: {
                        description: "Prominent medial projection",
                        location: "Medial side of ankle",
                        palpation: "Medial ankle bump; easily palpable",
                        articulation: "Lateral facet articulates with talus",
                        groove: "Posterior surface; tendons (tibialis posterior, flexor digitorum longus)",
                        clinical: "Medial malleolus fracture (ankle fracture classification)"
                    },
                    fibular_notch: {
                        description: "Lateral surface",
                        articulation: "Distal tibia with fibula (distal tibiofibular joint)",
                        type: "Syndesmosis (fibrous joint); ligaments bind tibia and fibula"
                    }
                },
                
                clinical: {
                    plateau_fractures: {
                        description: "Fracture of tibial plateau",
                        mechanism: "Axial load + varus or valgus force (e.g., pedestrian hit by car bumper)",
                        Schatzker_classification: "I-VI based on location and comminution",
                        treatment: "ORIF; maintain joint surface alignment"
                    },
                    shaft_fractures: {
                        mechanism: "High-energy trauma, sports injuries",
                        complications: "Compartment syndrome (anterior compartment most common); nonunion (poor blood supply mid-shaft)",
                        treatment: "Intramedullary nail; plate fixation; casting (stable fractures)"
                    },
                    pilon_fractures: {
                        description: "Distal tibia fracture involving ankle joint",
                        mechanism: "Axial load (fall from height)",
                        challenge: "Comminuted; articular involvement; soft tissue injury",
                        treatment: "Staged: external fixation → ORIF when swelling resolves"
                    },
                    stress_fractures: "Proximal or distal third; runners, military; 'shin splints' differential"
                }
            },
            
            fibula: {
                description: "Slender, lateral leg bone; non-weight-bearing",
                function: "Lateral ankle stability; muscle attachment; minimal weight-bearing (~10%)",
                length: "Slightly shorter than tibia",
                
                proximal_end: {
                    head: {
                        description: "Enlarged, knob-like",
                        location: "Posterolateral to lateral tibial condyle",
                        articulation: "Fibular articular facet on lateral tibial condyle (proximal tibiofibular joint)",
                        palpation: "Palpable below lateral knee",
                        apex: "Styloid process projects superiorly"
                    },
                    neck: {
                        description: "Constricted region below head",
                        clinical: "Common fibular (peroneal) nerve wraps around fibular neck - vulnerable to injury"
                    }
                },
                
                shaft: {
                    shape: "Thin, irregular; triangular to quadrangular",
                    borders: "Anterior, interosseous (medial), posterior",
                    surfaces: "Lateral, medial, posterior",
                    interosseous_border: "Attachment for interosseous membrane"
                },
                
                distal_end: {
                    lateral_malleolus: {
                        description: "Projects distally beyond medial malleolus",
                        location: "Lateral ankle; forms lateral wall of ankle joint",
                        palpation: "Lateral ankle bump",
                        articulation: "Medial surface articulates with talus",
                        groove: "Posterior surface; peroneus longus and brevis tendons",
                        clinical: "Lateral malleolus fracture (most common ankle fracture component)",
                        level: "Extends ~1 cm more distal than medial malleolus"
                    },
                    malleolar_fossa: "Medial surface; ligament attachments"
                },
                
                clinical: {
                    fractures: {
                        head_neck: "Uncommon isolated; with tibial plateau or knee dislocation",
                        shaft: "Isolated: minimal treatment needed (fibula non-weight-bearing); with tibia: significant",
                        lateral_malleolus: "Part of ankle fracture; classify by level relative to syndesmosis (Weber A, B, C)",
                        Maisonneuve: "Proximal fibula fracture + ankle injury + syndesmotic disruption; easily missed"
                    },
                    common_fibular_nerve_injury: {
                        location: "Wraps around fibular neck",
                        causes: "Fibular neck fracture, knee dislocation, leg crossing, cast compression",
                        deficit: "Foot drop (loss of ankle dorsiflexion, toe extension); sensory loss dorsal foot",
                        gait: "Steppage gait (high stepping to clear dropped foot)"
                    },
                    bone_graft: "Fibula often harvested for bone grafts (vascularized or non-vascularized)"
                }
            },
            
            tibiofibular_joints: {
                proximal: {
                    type: "Plane synovial joint",
                    articulation: "Fibular head with lateral tibial condyle",
                    movement: "Minimal gliding; slight superior-inferior movement"
                },
                middle: {
                    interosseous_membrane: "Fibrous sheet connecting tibia and fibula",
                    fibers: "Run obliquely from tibia (superior) to fibula (inferior)",
                    functions: "Bind bones; surface for muscle attachment; transfer forces; divide leg compartments"
                },
                distal: {
                    type: "Syndesmosis (fibrous joint)",
                    ligaments: "Anterior and posterior tibiofibular ligaments; interosseous ligament",
                    function: "Stabilize ankle mortise; maintain ankle joint integrity",
                    injury: "High ankle sprain - syndesmotic injury; longer recovery than typical ankle sprain"
                }
            }
        },
        
        ankle: {
            tarsal_bones: {
                number: 7,
                arrangement: "Proximal row (2), intermediate (1), distal row (4)",
                function: "Form ankle and midfoot; support body weight; provide spring for walking",
                
                proximal_row: {
                    talus: {
                        name_meaning: "Ankle bone",
                        description: "Second largest tarsal; no muscle attachments",
                        unique: "Only tarsal in ankle joint; all surfaces articular or ligamentous",
                        parts: {
                            head: {
                                description: "Anterior, rounded",
                                articulation: "Navicular anteriorly; sustentaculum tali of calcaneus inferiorly",
                                neck: "Constricted region between head and body"
                            },
                            body: {
                                description: "Main portion",
                                trochlea: {
                                    description: "Superior surface; pulley-shaped",
                                    articulation: "Tibia (superior), malleoli (medial and lateral) - ankle joint",
                                    shape: "Wider anteriorly (wedge); more stable in dorsiflexion",
                                    movements: "Dorsiflexion/plantarflexion"
                                },
                                facets: "Lateral (lateral malleolus), medial (medial malleolus), inferior (calcaneus)"
                            }
                        },
                        blood_supply: {
                            sources: "Branches from dorsalis pedis, posterior tibial, peroneal arteries",
                            vulnerable: "Neck and body; limited extraosseous anastomoses",
                            risk: "Avascular necrosis if fracture disrupts blood supply"
                        },
                        clinical: {
                            fractures: {
                                classification: "Hawkins classification (I-IV) based on location and dislocation",
                                AVN_risk: "High; 10-50% depending on fracture type",
                                mechanism: "Ankle dorsiflexion + rotation (MVA); fall from height"
                            },
                            osteochondral_lesions: "Cartilage and subchondral bone damage; ankle pain; may require drilling or grafting"
                        }
                    },
                    calcaneus: {
                        name_meaning: "Heel bone",
                        description: "Largest, strongest tarsal bone",
                        location: "Posterior foot; most inferior tarsal",
                        function: "Transmits body weight from talus to ground; attachment for Achilles tendon",
                        parts: {
                            body: "Main portion",
                            anterior_process: "Extends anteriorly; articulates with cuboid",
                            posterior_process: "Tuberosity - weight-bearing surface when standing"
                        },
                        features: {
                            calcaneal_tuberosity: {
                                description: "Posterior prominence; weight-bearing",
                                parts: "Medial and lateral processes",
                                palpation: "Forms heel; easily palpable"
                            },
                            sustentaculum_tali: {
                                description: "Shelf-like projection from medial surface",
                                function: "Supports talus head",
                                groove: "Inferior surface; flexor hallucis longus tendon",
                                palpation: "~2 cm below medial malleolus"
                            },
                            calcaneal_sulcus: {
                                description: "Groove on superior surface",
                                formation: "With talus → sinus tarsi (tunnel between talus and calcaneus)",
                                contents: "Ligaments, fat, vessels"
                            }
                        },
                        articulations: {
                            superior: "Talus (subtalar joint) - inversion/eversion",
                            anterior: "Cuboid (calcaneocuboid joint)"
                        },
                        clinical: {
                            fractures: {
                                mechanism: "Fall from height (axial load); MVA",
                                Sanders_classification: "I-IV based on joint involvement and comminution",
                                complications: "Subtalar arthritis, heel widening, chronic pain, nerve injury",
                                Bohler_angle: "Measure on lateral X-ray; normal 20-40°; decreased in fracture",
                                treatment: "ORIF if displaced/intra-articular; often complex surgery"
                            },
                            calcaneal_spur: "Bony growth on inferior surface; associated with plantar fasciitis",
                            Achilles_tendonitis: "Inflammation at insertion on posterior tuberosity",
                            Sever_disease: "Apophysitis (growing heel) in children; overuse"
                        }
                    }
                },
                
                intermediate: {
                    navicular: {
                        name_meaning: "Boat-shaped",
                        description: "Between talus and cuneiforms",
                        location: "Medial side of foot",
                        articulations: {
                            posterior: "Talus head",
                            anterior: "Three cuneiforms",
                            lateral: "Cuboid (sometimes)"
                        },
                        tuberosity: {
                            description: "Medial projection",
                            palpation: "Palpable on medial foot; ~2.5 cm anterior-inferior to medial malleolus",
                            attachment: "Tibialis posterior tendon (main insertion)",
                            clinical: "Accessory navicular (10-15%); os naviculare - extra ossification center; may cause pain"
                        },
                        clinical: {
                            stress_fractures: "Rare but problematic; athletes; slow healing (watershed blood supply)",
                            Köhler_disease: "Avascular necrosis of navicular in children (age 3-7); self-limiting"
                        }
                    }
                },
                
                distal_row: {
                    medial_cuneiform: {
                        description: "Largest cuneiform; wedge-shaped",
                        location: "Medial side; between navicular and 1st metatarsal",
                        articulation: "Navicular, 1st and 2nd metatarsals, intermediate cuneiform",
                        clinical: "Rarely injured"
                    },
                    intermediate_cuneiform: {
                        description: "Smallest cuneiform; wedge-shaped",
                        location: "Between medial and lateral cuneiforms",
                        articulation: "Navicular, 2nd metatarsal, medial and lateral cuneiforms",
                        recessed: "Shorter than medial/lateral → creates transverse arch keystone"
                    },
                    lateral_cuneiform: {
                        description: "Intermediate size; wedge-shaped",
                        location: "Between intermediate cuneiform and cuboid",
                        articulation: "Navicular, intermediate cuneiform, cuboid, 2nd, 3rd, 4th metatarsals"
                    },
                    cuboid: {
                        description: "Cube-shaped",
                        location: "Lateral side of foot",
                        articulation: {
                            posterior: "Calcaneus",
                            medial: "Lateral cuneiform, navicular (sometimes)",
                            anterior: "4th and 5th metatarsals"
                        },
                        groove: {
                            description: "Oblique groove on inferior surface",
                            contents: "Peroneus longus tendon",
                            function: "Peroneus longus crosses to medial foot in this groove"
                        },
                        tuberosity: "Lateral surface; peroneus longus attachment",
                        clinical: "Cuboid syndrome - subluxation; 'nutcracker fracture' (crush between calcaneus and metatarsals)"
                    }
                }
            },
            
            ankle_joint: {
                type: "Hinge synovial joint",
                also_called: "Talocrural joint",
                articulation: "Tibia, fibula, talus",
                mortise: {
                    description: "Socket formed by tibia and fibular malleoli",
                    fit: "Talus fits into mortise",
                    stability: "Malleoli on either side provide mediolateral stability"
                },
                movements: {
                    primary: "Dorsiflexion (~20°) and plantarflexion (~50°)",
                    axis: "Through malleoli",
                    limited: "Slight inversion/eversion (mostly at subtalar joint)"
                },
                ligaments: {
                    medial_deltoid: {
                        description: "Strong, triangular ligament",
                        parts: "Tibionavicular, tibiocalcaneal, anterior/posterior tibiotalar",
                        function: "Resist eversion (less common than inversion)",
                        injury: "Eversion ankle sprain; usually with fracture (strong ligament)"
                    },
                    lateral: {
                        anterior_talofibular: "Weakest; most commonly injured; inversion + plantarflexion",
                        calcaneofibular: "Inversion; may also tear with ATFL",
                        posterior_talofibular: "Strongest; rarely injured alone",
                        injury: "Inversion ankle sprain (90% of ankle sprains); grade I-III"
                    },
                    syndesmotic: "Anterior/posterior tibiofibular ligaments; 'high ankle sprain' if injured"
                },
                fractures: {
                    classification: {
                        Lauge_Hansen: "Based on mechanism (supination-adduction, supination-external rotation, pronation-abduction, pronation-external rotation)",
                        Weber: "Based on fibula fracture level relative to syndesmosis (A below, B at, C above)",
                        Danis_Weber: "Same as Weber"
                    },
                    bimalleolar: "Medial and lateral malleoli fractured",
                    trimalleolar: "Both malleoli + posterior malleolus (posterior tibia)",
                    treatment: "ORIF if displaced/unstable; restore mortise anatomy"
                }
            }
        },
        
        foot: {
            metatarsals: {
                number: 5,
                numbering: "I-V (big toe to little toe)",
                location: "Forefoot",
                shape: "Miniature long bones",
                parts: {
                    base: "Proximal; articulates with tarsals",
                    shaft: "Body; slightly concave on plantar surface",
                    head: "Distal; 'ball of foot'; articulates with proximal phalanges"
                },
                
                individual: {
                    first_I: {
                        description: "Shortest, thickest metatarsal",
                        articulation: "Medial cuneiform (TMT joint)",
                        function: "Primary weight-bearing during push-off",
                        sesamoids: "Two sesamoid bones on plantar surface at head (in flexor hallucis brevis tendons)",
                        clinical: "Hallux valgus (bunion), hallux rigidus, sesamoiditis, turf toe"
                    },
                    second_II: {
                        description: "Longest metatarsal",
                        articulation: "Intermediate cuneiform (recessed) + medial and lateral cuneiforms",
                        stability: "Most stable; 'keystone' of transverse arch",
                        clinical: "Most common stress fracture site (march fracture)"
                    },
                    third_IV_V: {
                        articulation: "Lateral cuneiform (III), cuboid (IV, V)",
                        stability: "More mobile than I-II"
                    },
                    fifth_V: {
                        tuberosity: "Lateral projection at base; palpable on lateral foot",
                        attachment: "Peroneus brevis tendon insertion",
                        clinical: {
                            Jones_fracture: "Base fracture at metaphyseal-diaphyseal junction; poor healing",
                            pseudo_Jones: "Avulsion fracture of tuberosity (peroneus brevis pull); better healing",
                            apophysis: "In children; normal growth plate; don't confuse with fracture"
                        }
                    }
                },
                
                clinical: {
                    stress_fractures: "March fracture - 2nd metatarsal most common; military recruits, dancers",
                    Freiberg_disease: "Avascular necrosis of 2nd metatarsal head; adolescents",
                    metatarsalgia: "Pain in ball of foot; overuse, poor footwear, high heels"
                }
            },
            
            phalanges: {
                total: 14,
                great_toe: "2 phalanges (proximal, distal)",
                lesser_toes: "3 phalanges each (proximal, middle, distal) - 4 toes × 3 = 12",
                parts: "Base, shaft, head (except distal phalanges)",
                
                clinical: {
                    fractures: "Common (stubbing toe); usually treated conservatively; buddy taping",
                    turf_toe: "Hyperextension injury of 1st MTP joint; football on artificial turf",
                    hammertoe: "Flexion deformity at PIP; callus on dorsum",
                    claw_toe: "Hyperextension MTP + flexion PIP and DIP",
                    hallux_valgus: "Lateral deviation of great toe; 'bunion'; genetics, footwear"
                }
            },
            
            arches: {
                description: "Curved architecture distributes weight, absorbs shock, provides spring",
                support: "Bones, ligaments (plantar fascia, spring ligament), muscles (intrinsic, extrinsic)",
                
                medial_longitudinal: {
                    description: "Higher, more dynamic arch",
                    bones: "Calcaneus → talus → navicular → cuneiforms → metatarsals I-III",
                    keystone: "Talus head",
                    support: {
                        ligaments: "Plantar calcaneonavicular (spring ligament) - supports talus head; plantar fascia",
                        muscles: "Tibialis anterior, tibialis posterior, flexor hallucis longus, intrinsics"
                    },
                    function: "Shock absorption; push-off",
                    clinical: "Pes planus (flat foot) - arch collapses; pes cavus (high arch)"
                },
                lateral_longitudinal: {
                    description: "Lower, less mobile arch",
                    bones: "Calcaneus → cuboid → metatarsals IV-V",
                    keystone: "Cuboid",
                    support: {
                        ligaments: "Long plantar ligament, plantar fascia",
                        muscles: "Peroneus longus, abductor digiti minimi"
                    },
                    function: "Weight-bearing platform; stability"
                },
                transverse: {
                    description: "Arch across width of foot",
                    location: "At level of cuneiforms and cuboid; metatarsal heads (anterior)",
                    keystone: "Intermediate cuneiform (recessed)",
                    support: {
                        ligaments: "Interosseous, plantar, dorsal ligaments",
                        muscles: "Peroneus longus (tendon crosses sole from lateral to medial), tibialis posterior, intrinsics"
                    },
                    function: "Distribute weight across foot"
                },
                
                clinical: {
                    pes_planus: {
                        description: "Flat feet; loss of medial longitudinal arch",
                        types: "Flexible (normal in children; arch returns non-weight-bearing) vs rigid",
                        causes: "Tibialis posterior dysfunction, ligament laxity, genetics, obesity",
                        treatment: "Usually asymptomatic; arch supports if painful; surgery if severe"
                    },
                    pes_cavus: {
                        description: "High arched feet",
                        causes: "Neurologic (Charcot-Marie-Tooth), idiopathic",
                        complications: "Metatarsalgia, ankle instability, calluses",
                        treatment: "Orthotics; surgery if severe"
                    },
                    plantar_fasciitis: {
                        description: "Inflammation of plantar fascia",
                        presentation: "Heel pain, worse with first steps in morning",
                        causes: "Overuse, tight Achilles, obesity, pronation",
                        treatment: "Stretching, orthotics, NSAIDs, steroid injection, surgery (rare)"
                    }
                }
            }
        }
    },
    
    clinical_applications: {
        imaging: "X-rays (fractures, arthritis); CT (complex fractures, surgical planning); MRI (soft tissue, AVN, stress fractures)",
        surgery: {
            upper_limb: "Total shoulder replacement, rotator cuff repair, ORIF fractures, carpal tunnel release",
            lower_limb: "Total hip replacement, total knee replacement, ACL reconstruction, ankle arthrodesis, bunion correction"
        },
        trauma: "ATLS protocols; compartment syndrome recognition; neurovascular assessment",
        sports_medicine: "Overuse injuries (stress fractures, tendinitis); ligament injuries; rehabilitation"
    },
    
    examples: [
        {
            structure: "Clavicle",
            unique_features: "S-shaped; only bony connection of upper limb to axial skeleton",
            clinical: "Most commonly fractured bone; fall on outstretched hand"
        },
        {
            structure: "Scapula",
            unique_features: "Flat, triangular; glides on thoracic wall; shallow glenoid cavity",
            clinical: "Scapular winging (serratus anterior weakness); rotator cuff tears"
        },
        {
            structure: "Femur",
            unique_features: "Longest, strongest bone; angled neck; bears full body weight",
            clinical: "Hip fractures in elderly; femoral neck fractures → AVN risk"
        },
        {
            structure: "Patella",
            unique_features: "Largest sesamoid bone; increases quadriceps leverage",
            clinical: "Lateral dislocation; patellofemoral pain syndrome; fractures"
        },
        {
            structure: "Calcaneus",
            unique_features: "Largest tarsal; heel bone; transmits weight to ground",
            clinical: "Calcaneal fractures from fall; plantar fasciitis; Achilles tendinitis"
        }
    ],
    
    applications: [
        "Orthopedic surgery - joint replacement, fracture fixation, arthroscopy",
        "Sports medicine - ligament reconstruction, cartilage repair, rehabilitation",
        "Podiatry - bunion correction, hammertoe repair, arch support",
        "Prosthetics and orthotics - limb prostheses, braces, inserts",
        "Physical therapy - range of motion, strengthening, gait training",
        "Forensic anthropology - sex determination (pelvis), stature estimation",
        "Occupational therapy - hand rehabilitation, adaptive devices"
    ]
};

return content;
}
handleJoints(problem) {
return this.lessons.joints_articulations;
}


// ========================================
// MAIN PROBLEM PROCESSING METHODS
// ========================================

parseSkeletalProblem(topic, parameters = {}, subTopic = null, context = {}) {
    let topicType = null;

    // Match topic to handler
    for (const [type, config] of Object.entries(this.skeletalTopics)) {
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
        throw new Error(`Unable to recognize skeletal system topic: ${topic}`);
    }

    return {
        originalTopic: topic,
        type: topicType,
        subTopic: subTopic,
        parameters: { ...parameters },
        context: { ...context },
        difficulty: this.skeletalTopics[topicType].difficulty,
        prerequisites: this.skeletalTopics[topicType].prerequisites,
        parsedAt: new Date().toISOString()
    };
}

handleSkeletalProblem(config) {
    const { topic, parameters, subTopic, context, requestType } = config;

    try {
        const isExperimentRequest = requestType === 'experiment' || 
                                   (typeof topic === 'string' && topic.toLowerCase().includes('experiment'));

        if (isExperimentRequest) {
            return this.handleExperimentRequest(config);
        } else {
            this.currentProblem = this.parseSkeletalProblem(topic, parameters, subTopic, context);
            this.currentContent = this.getSkeletalContent(this.currentProblem);
            
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
            
            this.contentSteps = this.generateSkeletalContent(this.currentProblem, this.currentContent);
            
            // Generate workbook (handles async internally)
            this.generateSkeletalWorkbook();

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
        throw new Error(`Failed to process skeletal system request: ${error.message}`);
    }
}

handleExperimentRequest(config) {
    const { topic, parameters, experimentId } = config;

    if (experimentId && this.skeletalExperiments[experimentId]) {
        this.currentExperiment = this.skeletalExperiments[experimentId];
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
    
    for (const [id, experiment] of Object.entries(this.skeletalExperiments)) {
        if (experiment.name.toLowerCase().includes(topicLower)) {
            return experiment;
        }
        
        if (experiment.relatedTopics) {
            for (const relatedTopic of experiment.relatedTopics) {
                if (topicLower.includes(relatedTopic.toLowerCase())) {
                    return experiment;
                }
            }
        }
    }
    
    return null;
}

getSkeletalContent(problem) {
    const handler = this.skeletalTopics[problem.type]?.handler;
    if (!handler) {
        throw new Error(`No handler available for skeletal system topic: ${problem.type}`);
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

    // Filter by specific items (e.g., specific bones, regions)
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

    // Filter by region (axial vs appendicular)
    if (parameters.region) {
        if (parameters.region === 'axial' && filtered.axial_skeleton) {
            filtered.focus = filtered.axial_skeleton;
        } else if (parameters.region === 'appendicular' && filtered.appendicular_skeleton) {
            filtered.focus = filtered.appendicular_skeleton;
        }
    }

    // Filter by difficulty level
    if (parameters.difficulty) {
        filtered.detailLevel = parameters.difficulty;
    }

    return filtered;
}

getRelatedExperiments(topicType) {
    const relatedExperiments = [];
    
    for (const [id, experiment] of Object.entries(this.skeletalExperiments)) {
        if (experiment.relatedTopics && experiment.relatedTopics.includes(topicType)) {
            relatedExperiments.push({
                id: id,
                name: experiment.name,
                category: experiment.category,
                description: experiment.labExperiment?.purpose || 'Skeletal system experiment'
            });
        }
    }
    
    return relatedExperiments;
}

// ========================================
// EXPERIMENT MANAGEMENT METHODS
// ========================================

findExperimentByTopic(topic) {
    const topicLower = topic.toLowerCase();
    
    // First, try direct name match
    for (const [id, exp] of Object.entries(this.skeletalExperiments)) {
        if (exp.name.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    // Then try related topics match
    for (const [id, exp] of Object.entries(this.skeletalExperiments)) {
        if (exp.relatedTopics.some(t => topicLower.includes(t.toLowerCase()))) {
            return exp;
        }
    }

    return null;
}

getExperimentById(experimentId) {
    return this.skeletalExperiments[experimentId] || null;
}

generateExperimentContent(experiment, parameters = {}) {
    const content = {
        experimentName: experiment.name,
        category: experiment.category,
        relatedTopics: experiment.relatedTopics,
        sections: []
    };

    // Historical Background Section
    if (experiment.historicalBackground) {
        content.sections.push({
            type: 'historical_background',
            title: 'Historical Background',
            data: this.formatHistoricalBackground(experiment.historicalBackground)
        });
    }

    // Theory Section (if present)
    if (experiment.theory) {
        content.sections.push({
            type: 'theory',
            title: 'Theoretical Foundation',
            data: this.formatTheory(experiment.theory)
        });
    }

    // Laboratory Experiment Section
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
        // Format the key (convert snake_case to Title Case)
        const formattedKey = key.split('_').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');

        if (Array.isArray(value)) {
            formatted.push([formattedKey, '']);
            value.forEach((item, index) => {
                if (typeof item === 'object' && item !== null) {
                    Object.entries(item).forEach(([k, v]) => {
                        const subKey = k.split('_').map(w => 
                            w.charAt(0).toUpperCase() + w.slice(1)
                        ).join(' ');
                        formatted.push([`  ${subKey}`, v]);
                    });
                    if (index < value.length - 1) formatted.push(['', '']);
                } else {
                    formatted.push([`  ${index + 1}.`, item]);
                }
            });
        } else if (typeof value === 'object' && value !== null) {
            formatted.push([formattedKey, '']);
            Object.entries(value).forEach(([k, v]) => {
                const subKey = k.split('_').map(w => 
                    w.charAt(0).toUpperCase() + w.slice(1)
                ).join(' ');
                
                if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
                    formatted.push([`  ${subKey}:`, '']);
                    Object.entries(v).forEach(([sk, sv]) => {
                        formatted.push([`    ${sk}`, sv]);
                    });
                } else if (Array.isArray(v)) {
                    formatted.push([`  ${subKey}:`, '']);
                    v.forEach(item => formatted.push(['    -', item]));
                } else {
                    formatted.push([`  ${subKey}`, v]);
                }
            });
        } else {
            formatted.push([formattedKey, value]);
        }
    });

    return formatted;
}

formatTheory(theory) {
    const formatted = [];

    Object.entries(theory).forEach(([key, value]) => {
        const formattedKey = key.split('_').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');

        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            formatted.push([formattedKey, '']);
            this.formatNestedObject(value, formatted, 1);
        } else if (Array.isArray(value)) {
            formatted.push([formattedKey, '']);
            value.forEach((item, idx) => {
                if (typeof item === 'object') {
                    Object.entries(item).forEach(([k, v]) => {
                        formatted.push([`  ${k}`, v]);
                    });
                } else {
                    formatted.push([`  ${idx + 1}.`, item]);
                }
            });
        } else {
            formatted.push([formattedKey, value]);
        }
    });

    return formatted;
}

formatNestedObject(obj, formatted, indentLevel) {
    const indent = '  '.repeat(indentLevel);
    
    Object.entries(obj).forEach(([key, value]) => {
        const formattedKey = key.split('_').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');

        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            formatted.push([`${indent}${formattedKey}:`, '']);
            this.formatNestedObject(value, formatted, indentLevel + 1);
        } else if (Array.isArray(value)) {
            formatted.push([`${indent}${formattedKey}:`, '']);
            value.forEach((item, idx) => {
                if (typeof item === 'object') {
                    Object.entries(item).forEach(([k, v]) => {
                        formatted.push([`${indent}  ${k}`, v]);
                    });
                } else {
                    formatted.push([`${indent}  -`, item]);
                }
            });
        } else {
            formatted.push([`${indent}${formattedKey}`, value]);
        }
    });
}

formatLabExperiment(labExp) {
    const formatted = [];

    // Title and Hypothesis
    if (labExp.title) {
        formatted.push(['Experiment Title', labExp.title]);
    }
    
    if (labExp.hypothesis) {
        formatted.push(['Hypothesis', labExp.hypothesis]);
    }

    if (labExp.purpose) {
        formatted.push(['Purpose', labExp.purpose]);
    }

    if (labExp.note) {
        formatted.push(['Note', labExp.note]);
    }

    // Variables
    if (labExp.variables) {
        formatted.push(['', '']);
        formatted.push(['Variables', '']);
        if (labExp.variables.independent) {
            formatted.push(['  Independent', labExp.variables.independent]);
        }
        if (labExp.variables.dependent) {
            formatted.push(['  Dependent', labExp.variables.dependent]);
        }
        if (labExp.variables.controlled) {
            const controlled = Array.isArray(labExp.variables.controlled) ? 
                labExp.variables.controlled.join(', ') : labExp.variables.controlled;
            formatted.push(['  Controlled', controlled]);
        }
    }

    // Background (if present)
    if (labExp.background) {
        formatted.push(['', '']);
        formatted.push(['Background', '']);
        if (typeof labExp.background === 'object') {
            Object.entries(labExp.background).forEach(([key, value]) => {
                formatted.push([`  ${key}`, value]);
            });
        } else {
            formatted.push(['  ', labExp.background]);
        }
    }

    // Materials
    if (labExp.materials) {
        formatted.push(['', '']);
        formatted.push(['Materials Required', '']);
        
        if (Array.isArray(labExp.materials)) {
            labExp.materials.forEach(material => {
                formatted.push(['  •', material]);
            });
        } else if (typeof labExp.materials === 'object') {
            Object.entries(labExp.materials).forEach(([category, items]) => {
                if (Array.isArray(items)) {
                    formatted.push([`  ${category}:`, '']);
                    items.forEach(item => formatted.push(['    -', item]));
                } else {
                    formatted.push([`  ${category}`, items]);
                }
            });
        }
    }

    // Safety Precautions
    if (labExp.safetyPrecautions) {
        formatted.push(['', '']);
        formatted.push(['⚠ SAFETY PRECAUTIONS', '']);
        if (Array.isArray(labExp.safetyPrecautions)) {
            labExp.safetyPrecautions.forEach(precaution => {
                formatted.push(['  ⚠', precaution]);
            });
        }
    }

    // Procedure
    if (labExp.procedure) {
        formatted.push(['', '']);
        formatted.push(['Procedure', '']);
        
        if (Array.isArray(labExp.procedure)) {
            let stepNumber = 1;
            labExp.procedure.forEach((step) => {
                if (step.trim() === '') {
                    formatted.push(['', '']);
                } else if (step.endsWith(':') || step === step.toUpperCase()) {
                    // Section header
                    formatted.push([step, '']);
                } else if (step.startsWith('  ') || step.startsWith('    ')) {
                    // Sub-step (already indented)
                    formatted.push(['  ', step.trim()]);
                } else {
                    // Regular step
                    formatted.push([`  ${stepNumber}.`, step]);
                    stepNumber++;
                }
            });
        } else if (typeof labExp.procedure === 'object') {
            Object.entries(labExp.procedure).forEach(([section, steps]) => {
                formatted.push([section.toUpperCase().replace(/_/g, ' ') + ':', '']);
                if (Array.isArray(steps)) {
                    if (typeof steps[0] === 'object') {
                        // Nested structure
                        Object.entries(steps).forEach(([key, value]) => {
                            formatted.push([`  ${key}:`, '']);
                            if (Array.isArray(value)) {
                                value.forEach(item => formatted.push(['    -', item]));
                            } else if (typeof value === 'object') {
                                Object.entries(value).forEach(([k, v]) => {
                                    formatted.push([`    ${k}`, v]);
                                });
                            }
                        });
                    } else {
                        steps.forEach((step, idx) => {
                            formatted.push([`  ${idx + 1}.`, step]);
                        });
                    }
                } else if (typeof steps === 'object') {
                    Object.entries(steps).forEach(([key, value]) => {
                        formatted.push([`  ${key}:`, '']);
                        if (Array.isArray(value)) {
                            value.forEach(item => formatted.push(['    -', item]));
                        } else {
                            formatted.push(['    ', value]);
                        }
                    });
                }
                formatted.push(['', '']);
            });
        }
    }

    // Expected Results
    if (labExp.expectedResults || labExp.expectedObservations) {
        const results = labExp.expectedResults || labExp.expectedObservations;
        formatted.push(['', '']);
        formatted.push(['Expected Results/Observations', '']);
        
        if (typeof results === 'object' && !Array.isArray(results)) {
            Object.entries(results).forEach(([key, value]) => {
                const formattedKey = key.split('_').map(w => 
                    w.charAt(0).toUpperCase() + w.slice(1)
                ).join(' ');
                
                formatted.push([`  ${formattedKey}:`, '']);
                
                if (typeof value === 'object' && !Array.isArray(value)) {
                    Object.entries(value).forEach(([subKey, subValue]) => {
                        if (Array.isArray(subValue)) {
                            formatted.push([`    ${subKey}:`, '']);
                            subValue.forEach(item => formatted.push(['      -', item]));
                        } else {
                            formatted.push([`    ${subKey}`, subValue]);
                        }
                    });
                } else if (Array.isArray(value)) {
                    value.forEach(item => formatted.push(['    -', item]));
                } else {
                    formatted.push(['    ', value]);
                }
            });
        }
    }

    // Data Table
    if (labExp.dataTable) {
        formatted.push(['', '']);
        formatted.push(['Data Table', '']);
        formatted.push(['', '']);
        
        labExp.dataTable.forEach((row, idx) => {
            if (idx === 0) {
                // Header row
                formatted.push(['  ' + row.join(' | '), '']);
                formatted.push(['  ' + '-'.repeat(row.join(' | ').length), '']);
            } else if (row.every(cell => cell === '')) {
                // Empty row (separator)
                formatted.push(['', '']);
            } else {
                formatted.push(['  ' + row.join(' | '), '']);
            }
        });
    }

    // Analysis
    if (labExp.analysis) {
        formatted.push(['', '']);
        formatted.push(['Analysis', '']);
        
        if (typeof labExp.analysis === 'object' && !Array.isArray(labExp.analysis)) {
            Object.entries(labExp.analysis).forEach(([key, value]) => {
                const formattedKey = key.split('_').map(w => 
                    w.charAt(0).toUpperCase() + w.slice(1)
                ).join(' ');
                
                formatted.push([`  ${formattedKey}:`, '']);
                
                if (Array.isArray(value)) {
                    value.forEach(item => formatted.push(['    -', item]));
                } else if (typeof value === 'object') {
                    Object.entries(value).forEach(([k, v]) => {
                        if (Array.isArray(v)) {
                            formatted.push([`    ${k}:`, '']);
                            v.forEach(item => formatted.push(['      -', item]));
                        } else {
                            formatted.push([`    ${k}`, v]);
                        }
                    });
                } else {
                    formatted.push(['    ', value]);
                }
            });
        }
    }

    // Calculations
    if (labExp.calculations) {
        formatted.push(['', '']);
        formatted.push(['Calculations', '']);
        
        if (typeof labExp.calculations === 'object') {
            Object.entries(labExp.calculations).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, '']);
                if (typeof value === 'object') {
                    Object.entries(value).forEach(([k, v]) => {
                        formatted.push([`    ${k}`, v]);
                    });
                } else {
                    formatted.push(['    ', value]);
                }
            });
        }
    }

    // Observations
    if (labExp.observations) {
        formatted.push(['', '']);
        formatted.push(['Observations', '']);
        if (Array.isArray(labExp.observations)) {
            labExp.observations.forEach(obs => formatted.push(['  -', obs]));
        }
    }

    // Results
    if (labExp.results) {
        formatted.push(['', '']);
        formatted.push(['Results', labExp.results]);
    }

    // Conclusions
    if (labExp.conclusions) {
        formatted.push(['', '']);
        formatted.push(['Conclusions', '']);
        if (Array.isArray(labExp.conclusions)) {
            labExp.conclusions.forEach(conclusion => {
                formatted.push(['  -', conclusion]);
            });
        } else {
            formatted.push(['  ', labExp.conclusions]);
        }
    }

    // Connection to Historical/Theory
    if (labExp.connectionToOverton || labExp.connectionToHistorical) {
        const connection = labExp.connectionToOverton || labExp.connectionToHistorical;
        formatted.push(['', '']);
        formatted.push(['Connection to Historical Work', '']);
        
        if (typeof connection === 'object') {
            Object.entries(connection).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, value]);
            });
        } else {
            formatted.push(['  ', connection]);
        }
    }

    // Molecular Explanation (if present)
    if (labExp.molecularExplanation) {
        formatted.push(['', '']);
        formatted.push(['Molecular Explanation', '']);
        
        Object.entries(labExp.molecularExplanation).forEach(([key, value]) => {
            formatted.push([`  ${key}:`, '']);
            if (typeof value === 'object' && !Array.isArray(value)) {
                Object.entries(value).forEach(([k, v]) => {
                    if (Array.isArray(v)) {
                        formatted.push([`    ${k}:`, '']);
                        v.forEach(item => formatted.push(['      -', item]));
                    } else {
                        formatted.push([`    ${k}`, v]);
                    }
                });
            }
        });
    }

    // Real-World Applications
    if (labExp.realWorldApplications) {
        formatted.push(['', '']);
        formatted.push(['Real-World Applications', '']);
        if (Array.isArray(labExp.realWorldApplications)) {
            labExp.realWorldApplications.forEach(app => {
                formatted.push(['  •', app]);
            });
        }
    }

    // Extensions
    if (labExp.extensions) {
        formatted.push(['', '']);
        formatted.push(['Extensions & Further Investigation', '']);
        if (Array.isArray(labExp.extensions)) {
            labExp.extensions.forEach(ext => {
                formatted.push(['  •', ext]);
            });
        }
    }

    // Limitations
    if (labExp.limitations) {
        formatted.push(['', '']);
        formatted.push(['Limitations', '']);
        if (Array.isArray(labExp.limitations)) {
            labExp.limitations.forEach(lim => {
                formatted.push(['  -', lim]);
            });
        }
    }

    // Troubleshooting
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
    
    Object.entries(this.skeletalExperiments).forEach(([id, experiment]) => {
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
    return Object.entries(this.skeletalExperiments).map(([id, exp]) => ({
        id: id,
        name: exp.name,
        category: exp.category,
        relatedTopics: exp.relatedTopics,
        scientist: exp.historicalBackground?.scientist,
        year: exp.historicalBackground?.year
    }));
}

getExperimentsByCategory(category) {
    return Object.entries(this.skeletalExperiments)
        .filter(([id, exp]) => exp.category === category)
        .map(([id, exp]) => ({
            id: id,
            name: exp.name,
            relatedTopics: exp.relatedTopics
        }));
}

getExperimentCategories() {
    const categories = new Set();
    Object.values(this.skeletalExperiments).forEach(exp => {
        categories.add(exp.category);
    });
    return Array.from(categories);
}

searchExperiments(searchTerm) {
    const term = searchTerm.toLowerCase();
    const results = [];

    Object.entries(this.skeletalExperiments).forEach(([id, exp]) => {
        let score = 0;
        
        // Check name
        if (exp.name.toLowerCase().includes(term)) score += 10;
        
        // Check category
        if (exp.category.toLowerCase().includes(term)) score += 5;
        
        // Check related topics
        if (exp.relatedTopics.some(t => t.toLowerCase().includes(term))) score += 7;
        
        // Check historical scientist
        if (exp.historicalBackground?.scientist?.toLowerCase().includes(term)) score += 8;
        
        // Check lab title
        if (exp.labExperiment?.title?.toLowerCase().includes(term)) score += 6;

        if (score > 0) {
            results.push({
                id: id,
                experiment: exp,
                relevanceScore: score
            });
        }
    });

    // Sort by relevance score (descending)
    return results.sort((a, b) => b.relevanceScore - a.relevanceScore);
}

getExperimentSummary(experimentId) {
    const exp = this.skeletalExperiments[experimentId];
    if (!exp) return null;

    return {
        id: experimentId,
        name: exp.name,
        category: exp.category,
        relatedTopics: exp.relatedTopics,
        historical: {
            scientist: exp.historicalBackground?.scientist,
            year: exp.historicalBackground?.year,
            discovery: exp.historicalBackground?.discovery
        },
        lab: {
            title: exp.labExperiment?.title,
            hypothesis: exp.labExperiment?.hypothesis,
            purpose: exp.labExperiment?.purpose
        }
    };
}

compareExperiments(experimentId1, experimentId2) {
    const exp1 = this.skeletalExperiments[experimentId1];
    const exp2 = this.skeletalExperiments[experimentId2];

    if (!exp1 || !exp2) return null;

    return {
        experiment1: {
            id: experimentId1,
            name: exp1.name,
            category: exp1.category,
            scientist: exp1.historicalBackground?.scientist,
            year: exp1.historicalBackground?.year
        },
        experiment2: {
            id: experimentId2,
            name: exp2.name,
            category: exp2.category,
            scientist: exp2.historicalBackground?.scientist,
            year: exp2.historicalBackground?.year
        },
        commonTopics: exp1.relatedTopics.filter(topic => 
            exp2.relatedTopics.includes(topic)
        ),
        sameCategory: exp1.category === exp2.category
    };
}

getExperimentTimeline() {
    const timeline = [];

    Object.entries(this.skeletalExperiments).forEach(([id, exp]) => {
        if (exp.historicalBackground?.year) {
            timeline.push({
                id: id,
                year: exp.historicalBackground.year,
                scientist: exp.historicalBackground.scientist,
                discovery: exp.historicalBackground.discovery || exp.name,
                name: exp.name
            });
        }
    });

    // Sort by year
    return timeline.sort((a, b) => {
        const yearA = typeof a.year === 'string' ? parseInt(a.year) : a.year;
        const yearB = typeof b.year === 'string' ? parseInt(b.year) : b.year;
        return yearA - yearB;
    });
}

validateExperimentData(experimentId) {
    const exp = this.skeletalExperiments[experimentId];
    if (!exp) return { valid: false, errors: ['Experiment not found'] };

    const errors = [];
    const warnings = [];

    // Required fields
    if (!exp.name) errors.push('Missing experiment name');
    if (!exp.category) errors.push('Missing category');
    if (!exp.relatedTopics || exp.relatedTopics.length === 0) {
        errors.push('Missing related topics');
    }

    // Historical background checks
    if (exp.historicalBackground) {
        if (!exp.historicalBackground.scientist) {
            warnings.push('Missing historical scientist');
        }
        if (!exp.historicalBackground.year) {
            warnings.push('Missing historical year');
        }
    } else {
        warnings.push('Missing historical background section');
    }

    // Lab experiment checks
    if (exp.labExperiment) {
        if (!exp.labExperiment.title) warnings.push('Missing lab experiment title');
        if (!exp.labExperiment.hypothesis) warnings.push('Missing hypothesis');
        if (!exp.labExperiment.procedure) warnings.push('Missing procedure');
        if (!exp.labExperiment.materials) warnings.push('Missing materials list');
    } else {
        errors.push('Missing lab experiment section');
    }

    return {
        valid: errors.length === 0,
        errors: errors,
        warnings: warnings
    };

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
            adapted.includeLatinNames = false;
            break;
        
        case 'intermediate':
            adapted.vocabulary = 'standard';
            adapted.examples = this.selectMixedExamples(content.examples);
            adapted.depth = 'moderate';
            adapted.includeLatinNames = true;
            break;
        
        case 'advanced':
            adapted.vocabulary = 'technical';
            adapted.examples = this.selectAdvancedExamples(content.examples);
            adapted.depth = 'comprehensive';
            adapted.includeLatinNames = true;
            adapted.clinical = this.addClinicalConnections(content);
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

addClinicalConnections(content) {
    return {
        clinicalApplications: `Clinical applications of ${content.topic} include...`,
        commonInjuries: "Common injuries and pathologies...",
        surgicalApproaches: "Surgical techniques and interventions..."
    };
}

getContextualScenarios(topicType) {
    return this.contextualScenarios[topicType] || [];
}

getMetacognitivePrompts(topicType) {
    const prompts = {
        beforeLearning: this.metacognitivePrompts.beforeLearning.map(p => 
            p.replace('{topic}', this.skeletalTopics[topicType]?.name || topicType)
        ),
        duringLearning: this.metacognitivePrompts.duringLearning.map(p => 
            p.replace('{concept}', topicType)
        ),
        afterLearning: this.metacognitivePrompts.afterLearning.map(p => 
            p.replace('{topic}', this.skeletalTopics[topicType]?.name || topicType)
        )
    };

    return prompts;
}

updateLearnerProfile(topicType, performance) {
    if (performance.score >= 0.8) {
        if (!this.learnerProfile.masteredTopics.includes(topicType)) {
            this.learnerProfile.masteredTopics.push(topicType);
        }
        // Remove from struggling if present
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

generateSkeletalContent(problem, content) {
    const contentSections = [];

    // Generate overview section
    contentSections.push(this.generateOverviewSection(problem, content));

    // Generate specific content sections based on content structure
    if (content.overview) {
        contentSections.push(this.generateAnatomyOverviewSection(content));
    }

    if (content.skull || content.vertebral_column || content.thoracic_cage) {
        contentSections.push(this.generateBoneStructuresSection(content));
    }

    if (content.pectoral_girdle || content.pelvic_girdle) {
        contentSections.push(this.generateGirdlesSection(content));
    }

    if (content.upper_limb || content.lower_limb) {
        contentSections.push(this.generateLimbsSection(content));
    }

    if (content.joints || content.joints_articulations) {
        contentSections.push(this.generateJointsSection(content));
    }

    if (content.ossificationTypes || content.remodelingProcess) {
        contentSections.push(this.generatePhysiologySection(content));
    }

    // Add comparisons if available
    if (content.comparison) {
        contentSections.push(this.generateComparisonsSection(content));
    }

    // Add clinical correlations
    if (content.clinicalCorrelations || content.clinical_applications) {
        contentSections.push(this.generateClinicalSection(content));
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

generateOverviewSection(problem, content) {
    return {
        title: 'Overview',
        type: 'overview',
        data: {
            topic: content.topic,
            category: content.category,
            summary: content.summary,
            keyPoints: this.extractKeyPoints(content),
            difficulty: problem.difficulty,
            prerequisites: problem.prerequisites
        }
    };
}

generateAnatomyOverviewSection(content) {
    return {
        title: 'Anatomical Organization',
        type: 'anatomy_overview',
        data: content.overview
    };
}

generateBoneStructuresSection(content) {
    const structures = {};
    
    if (content.skull) structures.skull = content.skull;
    if (content.vertebral_column) structures.vertebral_column = content.vertebral_column;
    if (content.thoracic_cage) structures.thoracic_cage = content.thoracic_cage;
    
    return {
        title: 'Bone Structures',
        type: 'bone_structures',
        data: structures
    };
}

generateGirdlesSection(content) {
    const girdles = {};
    
    if (content.pectoral_girdle) girdles.pectoral = content.pectoral_girdle;
    if (content.pelvic_girdle) girdles.pelvic = content.pelvic_girdle;
    
    return {
        title: 'Skeletal Girdles',
        type: 'girdles',
        data: girdles
    };
}

generateLimbsSection(content) {
    const limbs = {};
    
    if (content.upper_limb) limbs.upper = content.upper_limb;
    if (content.lower_limb) limbs.lower = content.lower_limb;
    
    return {
        title: 'Limb Bones',
        type: 'limbs',
        data: limbs
    };
}

generateJointsSection(content) {
    return {
        title: 'Joints and Articulations',
        type: 'joints',
        data: content.joints || content.joints_articulations || content.structuralClassification
    };
}

generatePhysiologySection(content) {
    const physiology = {};
    
    if (content.ossificationTypes) physiology.ossification = content.ossificationTypes;
    if (content.remodelingProcess) physiology.remodeling = content.remodelingProcess;
    if (content.longitudinalGrowth) physiology.growth = content.longitudinalGrowth;
    if (content.calciumHomeostasis) physiology.calcium = content.calciumHomeostasis;
    
    return {
        title: 'Bone Physiology',
        type: 'physiology',
        data: physiology
    };
}

generateClinicalSection(content) {
    return {
        title: 'Clinical Applications',
        type: 'clinical',
        data: content.clinicalCorrelations || content.clinical_applications
    };
}

generateComparisonsSection(content) {
    return {
        title: 'Comparisons and Contrasts',
        type: 'comparisons',
        data: content.comparison
    };
}

generateExamplesSection(content) {
    return {
        title: 'Examples and Applications',
        type: 'examples',
        data: {
            examples: content.examples,
            applications: content.applications || content.clinical_applications
        }
    };
}

generateContextualScenariosSection(content) {
    return {
        title: 'Clinical Scenarios',
        type: 'contextual_scenarios',
        data: content.contextualScenarios
    };
}

generateRelatedExperimentsSection(content) {
    return {
        title: 'Related Laboratory Experiments',
        type: 'related_experiments',
        data: content.relatedExperiments
    };
}

generateMetacognitiveSection(content) {
    return {
        title: 'Study Guide and Self-Assessment',
        type: 'metacognitive',
        data: content.metacognitivePrompts
    };
}

extractKeyPoints(content) {
    const keyPoints = [];

    if (content.summary) keyPoints.push(content.summary);
    
    // Extract from various content structures
    if (content.overview && content.overview.functions) {
        keyPoints.push(...content.overview.functions.slice(0, 3));
    }

    if (content.functions) {
        if (Array.isArray(content.functions)) {
            keyPoints.push(...content.functions.slice(0, 3));
        }
    }

    // Extract from bone development
    if (content.ossificationTypes) {
        keyPoints.push("Bone forms through intramembranous and endochondral ossification");
    }

    // Extract from bone remodeling
    if (content.remodelingProcess) {
        keyPoints.push("Bone continuously remodels throughout life");
    }

    return keyPoints.slice(0, 5);
}

// ========================================
// EXPERIMENT CONTENT GENERATION
// ========================================

generateExperimentContent(experiment, parameters) {
    const content = {
        name: experiment.name,
        category: experiment.category,
        relatedTopics: experiment.relatedTopics,
        sections: []
    };

    // Historical background
    if (experiment.historicalBackground) {
        content.sections.push({
            title: 'Historical Background',
            type: 'historical',
            data: experiment.historicalBackground
        });
    }

    // Lab experiment
    if (experiment.labExperiment) {
        content.sections.push({
            title: 'Laboratory Experiment',
            type: 'lab_procedure',
            data: experiment.labExperiment
        });
    }

    // Theory
    if (experiment.theory) {
        content.sections.push({
            title: 'Theoretical Background',
            type: 'theory',
            data: experiment.theory
        });
    }

    // Analysis and conclusions
    if (experiment.labExperiment) {
        const lab = experiment.labExperiment;
        
        if (lab.expectedResults) {
            content.sections.push({
                title: 'Expected Results',
                type: 'results',
                data: lab.expectedResults
            });
        }

        if (lab.analysis) {
            content.sections.push({
                title: 'Analysis',
                type: 'analysis',
                data: lab.analysis
            });
        }

        if (lab.conclusions) {
            content.sections.push({
                title: 'Conclusions',
                type: 'conclusions',
                data: lab.conclusions
            });
        }

        if (lab.realWorldApplications) {
            content.sections.push({
                title: 'Real-World Applications',
                type: 'applications',
                data: lab.realWorldApplications
            });
        }
    }

    return content;
}

// ========================================
// WORKBOOK GENERATION METHODS
// ========================================

generateSkeletalWorkbook() {
    if (!this.currentContent || !this.currentProblem) return;

    const workbook = this.createWorkbookStructure();
    workbook.title = 'Skeletal System Workbook';

    // Start diagram generation in background if needed
    if (this.includeDiagramsInWorkbook) {
        this.diagramsPromise = this.generateSkeletalDiagramDataAsync();
    }

    workbook.sections = [
        this.createProblemSection(),
        this.createContentOverviewSection(),
        this.createDetailedContentSection(),
        this.createDiagramsPlaceholderSection(), // Placeholder until diagrams ready
        this.createComparisonsWorkbookSection(),
        this.createClinicalApplicationsSection(),
        this.createExamplesApplicationsSection(),
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
    workbook.title = 'Skeletal System Experiment Workbook';

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
                this.skeletalTopics[topic]?.name || topic,
                this.skeletalTopics[topic]?.description || ''
            ])
        });
    }

    this.currentWorkbook = workbook;
}

createWorkbookStructure() {
    return {
        title: 'Skeletal System Workbook',
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
        title: 'Topic Information',
        type: 'problem',
        data: {
            topic: this.currentProblem.originalTopic,
            type: this.currentProblem.type,
            difficulty: this.currentProblem.difficulty,
            prerequisites: this.currentProblem.prerequisites,
            parsedAt: this.currentProblem.parsedAt
        }
    };
}

createContentOverviewSection() {
    if (!this.currentContent) return null;

    return {
        title: 'Content Overview',
        type: 'content_overview',
        data: {
            topic: this.currentContent.topic,
            category: this.currentContent.category,
            summary: this.currentContent.summary,
            keyPoints: this.extractKeyPoints(this.currentContent)
        }
    };
}

createDetailedContentSection() {
    if (!this.contentSteps || this.contentSteps.length === 0) return null;

    return {
        title: 'Detailed Content',
        type: 'detailed_content',
        data: this.contentSteps
    };
}

createComparisonsWorkbookSection() {
    if (!this.currentContent || !this.currentContent.comparison) return null;

    return {
        title: 'Comparisons and Contrasts',
        type: 'comparisons',
        data: this.currentContent.comparison
    };
}

createClinicalApplicationsSection() {
    if (!this.currentContent) return null;

    const clinical = this.currentContent.clinicalCorrelations || 
                    this.currentContent.clinical_applications ||
                    this.currentContent.clinical;

    if (!clinical) return null;

    return {
        title: 'Clinical Applications',
        type: 'clinical',
        data: clinical
    };
}

createExamplesApplicationsSection() {
    if (!this.currentContent || !this.currentContent.examples) return null;

    return {
        title: 'Examples and Applications',
        type: 'examples',
        data: {
            examples: this.currentContent.examples,
            applications: this.currentContent.applications
        }
    };
}

createContextualScenariosWorkbookSection() {
    if (!this.currentContent || !this.currentContent.contextualScenarios) return null;

    return {
        title: 'Clinical Scenarios',
        type: 'contextual_scenarios',
        data: this.currentContent.contextualScenarios
    };
}

createRelatedExperimentsWorkbookSection() {
    if (!this.currentContent || !this.currentContent.relatedExperiments) return null;

    return {
        title: 'Related Experiments',
        type: 'related_experiments',
        data: this.currentContent.relatedExperiments
    };
}

createMisconceptionsSection() {
    if (!this.includeCommonMisconceptions) return null;

    const misconceptions = this.commonMisconceptions[this.currentProblem?.type];
    if (!misconceptions) return null;

    return {
        title: 'Common Misconceptions',
        type: 'misconceptions',
        data: misconceptions
    };
}

createMetacognitiveWorkbookSection() {
    if (!this.metacognitiveSupport || !this.currentContent.metacognitivePrompts) return null;

    return {
        title: 'Study Guide and Reflection',
        type: 'metacognitive',
        data: this.currentContent.metacognitivePrompts
    };
}

createAssessmentSection() {
    if (!this.assessmentFeedback) return null;

    return {
        title: 'Self-Assessment Questions',
        type: 'assessment',
        data: this.generateAssessmentQuestions()
    };
}

generateAssessmentQuestions() {
    if (!this.currentProblem) return [];

    const questions = this.assessmentRubrics.assessmentQuestions?.[this.currentProblem.type];
    
    if (!questions) {
        return [
            {
                level: 'remember',
                question: `Define the key components of ${this.currentProblem.type}`
            },
            {
                level: 'understand',
                question: `Explain the relationship between structure and function in ${this.currentProblem.type}`
            },
            {
                level: 'apply',
                question: `Apply your knowledge to identify ${this.currentProblem.type} in clinical scenarios`
            }
        ];
    }

    return Object.entries(questions).map(([level, question]) => ({
        level: level,
        question: question
    }));
}

// ========================================
// DIAGRAM GENERATION METHODS
// ========================================

async generateSkeletalDiagramDataAsync() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    // Get relevant diagram keys
    const diagramKeys = this.getRelevantSkeletalDiagrams(type);

    this.diagramData = {
        type: type,
        diagrams: diagramKeys,
        renderedImages: [],
        status: 'rendering',
        placeholder: false,
        note: "Skeletal system diagrams"
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

createDiagramsPlaceholderSection() {
    if (!this.includeDiagramsInWorkbook) {
        return null;
    }

    return {
        title: 'Skeletal Diagrams',
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
        title: 'Skeletal Diagrams',
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

getRelevantSkeletalDiagrams(topicType) {
    const diagramMap = {
        bone_structure: [
            "boneStructure",
            "compactBone",
            "spongyBone",
            "osteon"
        ],
        bone_development: [
            "boneGrowth",
            "epiphysealPlate",
            "ossification"
        ],
        bone_remodeling: [
            "boneRemodeling",
            "wolffLaw",
            "calciumHomeostasis"
        ],
        axial_skeleton: [
            "skull",
            "vertebralColumn",
            "thoracicCage",
            "skeletonAxial"
        ],
        appendicular_skeleton: [
            "skeletonAppendicular",
            "upperLimb",
            "lowerLimb",
            "pelvis"
        ],
        joints_articulations: [
            "jointTypes",
            "synovialJoint",
            "kneeJoint"
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

// ========================================
// SKELETAL SYSTEM SPECIFIC HELPER METHODS
// ========================================

getTopicRelevance(topicType) {
    const relevance = {
        bone_structure: "Understanding bone structure is essential for comprehending bone function, disease, and repair",
        bone_development: "Bone development and growth patterns inform treatment of developmental disorders and fractures",
        bone_remodeling: "Bone remodeling knowledge is crucial for preventing and treating osteoporosis and fractures",
        axial_skeleton: "The axial skeleton protects vital organs and forms the body's central support structure",
        appendicular_skeleton: "The appendicular skeleton enables mobility, manipulation, and weight-bearing",
        joints_articulations: "Joint anatomy and function are critical for understanding movement and treating arthritis"
    };

    return relevance[topicType] || "Important skeletal system concept";
}

suggestRelatedTopics() {
    if (!this.currentProblem) return [];

    const relatedTopicsMap = {
        bone_structure: ['bone_development', 'bone_remodeling'],
        bone_development: ['bone_structure', 'bone_remodeling'],
        bone_remodeling: ['bone_structure', 'bone_development'],
        axial_skeleton: ['appendicular_skeleton', 'joints_articulations', 'bone_structure'],
        appendicular_skeleton: ['axial_skeleton', 'joints_articulations', 'bone_structure'],
        joints_articulations: ['axial_skeleton', 'appendicular_skeleton', 'bone_structure']
    };

    const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];

    return relatedTypes.map(type => ({
        type: type,
        name: this.skeletalTopics[type]?.name,
        description: this.skeletalTopics[type]?.description
    }));
}

generateGlossary() {
    if (!this.currentContent) return {};

    const glossary = {};

    // Extract from key definitions
    if (this.currentContent.keyDefinitions) {
        Object.entries(this.currentContent.keyDefinitions).forEach(([term, definition]) => {
            glossary[term] = definition;
        });
    }

    // Extract from classification structures
    if (this.currentContent.classification) {
        this.extractGlossaryFromClassification(this.currentContent.classification, glossary);
    }

    // Extract from bone structures
    if (this.currentContent.cranial_bones) {
        Object.entries(this.currentContent.cranial_bones).forEach(([key, bone]) => {
            if (bone.description) {
                glossary[this.formatKey(key)] = bone.description;
            }
        });
    }

    return glossary;
}

extractGlossaryFromClassification(classification, glossary) {
    Object.entries(classification).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
            if (value.definition) {
                glossary[this.formatKey(key)] = value.definition;
            }
            if (value.description) {
                glossary[this.formatKey(key)] = value.description;
            }
            // Recurse for nested objects
            Object.entries(value).forEach(([subKey, subValue]) => {
                if (typeof subValue === 'object' && subValue !== null) {
                    if (subValue.definition) {
                        glossary[this.formatKey(subKey)] = subValue.definition;
                    }
                    if (subValue.description) {
                        glossary[this.formatKey(subKey)] = subValue.description;
                    }
                }
            });
        }
    });
}

formatKey(key) {
    return key.split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

generateSkeletalAnalogy(concept) {
    const analogies = {
        // Bone structure
        compact_bone: "Like the strong outer walls of a building providing support",
        spongy_bone: "Like a honeycomb structure - strong but lightweight",
        osteon: "Like the rings in a tree trunk, showing layers of growth",
        bone_marrow: "Like a factory producing new blood cells",
        
        // Bone development
        ossification: "Like concrete hardening - starting soft and becoming solid",
        growth_plate: "Like an assembly line adding length to bones",
        fontanel: "Like expansion joints in a sidewalk, allowing growth and movement",
        
        // Bone remodeling
        osteoblast: "Like construction workers building new bone",
        osteoclast: "Like demolition crews breaking down old bone",
        bone_remodeling: "Like renovating a house - tear down and rebuild continuously",
        wolff_law: "Like muscles getting stronger with exercise, bones strengthen where used",
        
        // Skeletal anatomy
        vertebral_column: "Like a stack of donuts (vertebrae) with jelly (discs) between them",
        rib_cage: "Like a protective cage surrounding delicate organs",
        skull_sutures: "Like interlocking puzzle pieces holding skull bones together",
        pelvis: "Like a bowl supporting and protecting pelvic organs",
        
        // Joints
        hinge_joint: "Like a door hinge allowing back-and-forth movement",
        ball_socket: "Like a joystick allowing movement in all directions",
        synovial_fluid: "Like oil in a machine, reducing friction between moving parts",
        cartilage: "Like a cushion or shock absorber at joint surfaces",
        ligament: "Like strong ropes tying bones together at joints"
    };

    return analogies[concept] || "Performs a specialized skeletal function";
}

adaptSkeletalLanguage(text, level) {
    if (!text) return '';

    const adaptations = {
        basic: {
            replacements: {
                'osteoblast': 'bone-building cell',
                'osteoclast': 'bone-breaking cell',
                'osteocyte': 'mature bone cell',
                'ossification': 'bone formation',
                'epiphyseal plate': 'growth plate',
                'articular cartilage': 'joint cartilage',
                'synovial fluid': 'joint lubricating fluid',
                'trabecular bone': 'spongy bone',
                'cortical bone': 'compact bone',
                'haversian system': 'bone unit',
                'periosteum': 'bone covering',
                'endosteum': 'inner bone lining',
                'fontanel': 'soft spot (in infant skull)'
            }
        },
        intermediate: {
            replacements: {
                'osteoblast': 'osteoblast (bone-building cell)',
                'osteoclast': 'osteoclast (bone-breaking cell)',
                'ossification': 'ossification (bone formation)',
                'epiphyseal plate': 'epiphyseal (growth) plate',
                'trabecular bone': 'trabecular (spongy) bone',
                'cortical bone': 'cortical (compact) bone'
            }
        },
        advanced: {
            replacements: {
                'osteoblast': 'osteoblast',
                'osteoclast': 'osteoclast',
                'ossification': 'ossification',
                'epiphyseal plate': 'epiphyseal plate',
                'haversian system': 'osteon (Haversian system)'
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

addSkeletalConceptualConnections(content) {
    if (!this.includeConceptualConnections) return content;

    const connections = {
        bone_structure: "Bone structure (compact and spongy) determines mechanical properties and relates to function. Blood supply and innervation connect to bone health and pain.",
        bone_development: "Bone development (ossification) connects to genetics, hormones, and nutrition. Growth plates relate to final adult height and skeletal maturity.",
        bone_remodeling: "Bone remodeling connects to calcium homeostasis, hormonal regulation, and mechanical loading. Links to osteoporosis, fracture healing, and adaptation.",
        axial_skeleton: "Axial skeleton (skull, spine, ribs) protects vital organs and connects to neurology (spinal cord), respiration (ribs), and posture (vertebral column).",
        appendicular_skeleton: "Appendicular skeleton (limbs and girdles) connects to movement, muscle attachments, and weight-bearing. Links to orthopedics and biomechanics.",
        joints_articulations: "Joint structure determines movement type and range. Connects to arthritis, injuries, and rehabilitation. Links to muscle function and biomechanics."
    };

    content.conceptualConnections = connections[this.currentProblem.type] || 
        "This topic connects to broader skeletal system principles and clinical applications";

    return content;
}

enrichWithSkeletalExamples(content) {
    if (!this.includeExamples || content.examples) return content;

    const exampleDatabase = {
        bone_structure: [
            "Osteoporosis: Loss of trabecular bone leads to fragile bones and fractures",
            "Osteogenesis imperfecta: Genetic defect in collagen causes brittle bones",
            "Bone marrow transplant: Red marrow in spongy bone produces blood cells"
        ],
        bone_development: [
            "Achondroplasia: Defective endochondral ossification causes short stature",
            "Premature fontanel closure (craniosynostosis): Causes skull deformities",
            "Growth hormone deficiency: Results in proportionate short stature"
        ],
        bone_remodeling: [
            "Astronaut bone loss: 1-2% per month in microgravity due to lack of loading",
            "Vitamin D deficiency: Causes rickets in children, osteomalacia in adults",
            "Hyperparathyroidism: Excess PTH causes bone loss and high blood calcium"
        ],
        axial_skeleton: [
            "Whiplash injury: Hyperextension-flexion damages cervical vertebrae and ligaments",
            "Herniated disc: Nucleus pulposus protrudes, compresses spinal nerves",
            "Skull fractures: Can cause CSF leak, brain injury, or nerve damage"
        ],
        appendicular_skeleton: [
            "Colles fracture: Common distal radius fracture from fall on outstretched hand",
            "Hip fracture: Common in elderly; 20% mortality within 1 year",
            "Carpal tunnel syndrome: Median nerve compression in wrist"
        ],
        joints_articulations: [
            "Shoulder dislocation: Most commonly dislocated joint due to shallow socket",
            "ACL tear: Common knee injury in athletes; causes instability",
            "Rheumatoid arthritis: Autoimmune attack on synovial joints"
        ]
    };

    if (exampleDatabase[this.currentProblem.type]) {
        content.examples = content.examples || [];
        content.examples.push(...exampleDatabase[this.currentProblem.type]);
    }

    return content;
}

addSkeletalComparativeContext(content) {
    if (!this.includeComparisons || content.comparison) return content;

    const comparativeData = {
        bone_structure: {
            compact_vs_spongy: "Compact bone: 80% mass, dense, outer layer vs Spongy bone: 20% mass, porous, interior",
            strength: "Compact bone resists bending and torsion; spongy bone distributes forces",
            turnover: "Spongy bone: 20%/year turnover vs Compact bone: 2-3%/year"
        },
        bone_development: {
            intramembranous_vs_endochondral: "Direct bone formation (flat bones) vs Cartilage replacement (long bones)",
            timing: "Intramembranous starts week 8; Endochondral weeks 8-12",
            complexity: "Intramembranous simpler (4 steps) vs Endochondral more complex (5 steps)"
        },
        bone_remodeling: {
            formation_vs_resorption: "Osteoblasts build bone vs Osteoclasts break down bone",
            duration: "Formation: 3-4 months vs Resorption: 2-4 weeks",
            balance: "Childhood: formation > resorption; Adulthood: formation = resorption; Elderly: resorption > formation"
        },
        axial_vs_appendicular: {
            bones: "Axial: 80 bones vs Appendicular: 126 bones",
            function: "Axial: protection, support vs Appendicular: movement, manipulation",
            stability: "Axial: more stable vs Appendicular: more mobile"
        },
        upper_vs_lower_limb: {
            function: "Upper: manipulation, dexterity vs Lower: weight-bearing, locomotion",
            stability: "Upper: mobile joints, less stable vs Lower: stable joints, weight-bearing",
            joints: "Shoulder: shallow socket, mobile vs Hip: deep socket, stable"
        }
    };

    if (comparativeData[this.currentProblem.type]) {
        content.comparativeContext = comparativeData[this.currentProblem.type];
    }

    return content;
}

validateSkeletalContent(content) {
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
        content.overview ||
        content.skull ||
        content.vertebral_column ||
        content.pectoral_girdle ||
        content.upper_limb ||
        content.ossificationTypes ||
        content.remodelingProcess;

    if (!hasSubstantiveContent) {
        validationResults.warnings.push("Limited substantive content");
        validationResults.suggestions.push("Consider adding more detailed anatomical or physiological information");
    }

    // Check for educational value
    if (!content.examples && !content.applications) {
        validationResults.suggestions.push("Consider adding clinical examples and applications");
    }

    // Check for comparisons
    if (!content.comparison) {
        validationResults.suggestions.push("Consider adding comparative anatomical information");
    }

    // Check for clinical correlations
    if (!content.clinicalCorrelations && !content.clinical_applications) {
        validationResults.suggestions.push("Consider adding clinical correlations");
    }

    return validationResults;
}

calculateSkeletalContentCompleteness() {
    if (!this.currentContent) return 0;

    let score = 0;
    const maxScore = 10;

    // Award points for different content aspects
    if (this.currentContent.topic) score += 1;
    if (this.currentContent.summary) score += 1;
    if (this.currentContent.examples) score += 1;
    if (this.currentContent.applications) score += 1;
    if (this.currentContent.comparison) score += 1;
    
    // Main content structures
    const hasMainContent = 
        this.currentContent.overview ||
        this.currentContent.skull ||
        this.currentContent.vertebral_column ||
        this.currentContent.pectoral_girdle ||
        this.currentContent.ossificationTypes;
    if (hasMainContent) score += 3;

    // Additional depth
    if (this.currentContent.clinicalCorrelations || this.currentContent.clinical_applications) score += 1;
    if (this.currentContent.contextualScenarios) score += 1;

    return Math.round((score / maxScore) * 100);
}

getSkeletalContentQualityMetrics() {
    return {
        completeness: this.calculateSkeletalContentCompleteness(),
        hasExamples: !!this.currentContent?.examples,
        hasComparisons: !!this.currentContent?.comparison,
        hasApplications: !!this.currentContent?.applications,
        hasClinicalCorrelations: !!(this.currentContent?.clinicalCorrelations || this.currentContent?.clinical_applications),
        hasContextualScenarios: !!this.currentContent?.contextualScenarios,
        detailLevel: this.explanationLevel,
        includesVisualizations: this.includeVisualizations,
        includesMisconceptions: this.includeCommonMisconceptions,
        includesExperiments: this.includeExperiments,
        adaptiveDifficulty: this.adaptiveDifficulty,
        metacognitiveSupport: this.metacognitiveSupport
    };
}

generateSkeletalContentSummary() {
    if (!this.currentContent) return null;

    const summary = {
        topic: this.currentContent.topic,
        category: this.currentContent.category,
        summary: this.currentContent.summary,
        keyPoints: [],
        coverage: {},
        difficulty: this.currentProblem?.difficulty
    };

    // Extract key points
    if (this.currentContent.overview) {
        summary.keyPoints.push("Anatomical overview provided");
        summary.coverage.overview = true;
    }

    if (this.currentContent.skull || this.currentContent.vertebral_column) {
        summary.keyPoints.push("Detailed bone structures described");
        summary.coverage.boneStructures = true;
    }

    if (this.currentContent.clinicalCorrelations || this.currentContent.clinical_applications) {
        summary.keyPoints.push("Clinical applications included");
        summary.coverage.clinical = true;
    }

    if (this.currentContent.examples) {
        summary.coverage.examples = this.currentContent.examples.length;
    }

    return summary;
}

assessSkeletalContentDifficulty() {
    if (!this.currentContent) return 'unknown';

    let difficultyScore = 0;

    // Topic-based difficulty
    const basicTopics = ['axial_skeleton'];
    const intermediateTopics = ['appendicular_skeleton', 'bone_structure'];
    const advancedTopics = ['bone_development', 'bone_remodeling', 'joints_articulations'];

    if (basicTopics.includes(this.currentProblem.type)) {
        difficultyScore += 1;
    } else if (intermediateTopics.includes(this.currentProblem.type)) {
        difficultyScore += 2;
    } else if (advancedTopics.includes(this.currentProblem.type)) {
        difficultyScore += 3;
    }

    // Adjust based on detail level
    if (this.explanationLevel === 'advanced') difficultyScore += 1;
    if (this.explanationLevel === 'basic') difficultyScore -= 1;

    // Return difficulty rating
    if (difficultyScore <= 2) return 'beginner';
    if (difficultyScore <= 4) return 'intermediate';
    return 'advanced';
}

generateSkeletalLearningObjectives() {
    if (!this.currentProblem) return [];

    const objectivesDatabase = {
        bone_structure: [
            "Identify and describe the two types of bone tissue",
            "Explain the structure of compact bone including osteons",
            "Describe the organization of spongy bone and its functions",
            "Identify the major cell types in bone and their functions"
        ],
        bone_development: [
            "Compare and contrast intramembranous and endochondral ossification",
            "Describe the zones of the epiphyseal plate and their roles in bone lengthening",
            "Explain how hormones regulate bone growth",
            "Predict how nutritional deficiencies affect bone development"
        ],
        bone_remodeling: [
            "Explain the process of bone remodeling and its purposes",
            "Describe Wolff's Law and provide examples",
            "Explain how calcium homeostasis is maintained",
            "Identify factors that affect bone density and strength"
        ],
        axial_skeleton: [
            "Identify all bones of the skull and their major features",
            "Describe the structure and functions of the vertebral column",
            "Identify the components of the thoracic cage",
            "Explain the functions of the axial skeleton"
        ],
        appendicular_skeleton: [
            "Identify bones of the pectoral and pelvic girdles",
            "Describe the bones of the upper and lower limbs",
            "Compare the structure and function of the pectoral and pelvic girdles",
            "Explain how skeletal differences relate to function"
        ],
        joints_articulations: [
            "Classify joints structurally and functionally",
            "Describe the structure of a typical synovial joint",
            "Identify the six types of synovial joints and their movements",
            "Explain common joint injuries and pathologies"
        ]
    };

    return objectivesDatabase[this.currentProblem.type] || [
        "Understand key skeletal anatomy concepts",
        "Apply knowledge to clinical scenarios",
        "Make connections between structure and function"
    ];
}

identifySkeletalPrerequisites() {
    if (!this.currentProblem) return [];

    const prerequisitesDatabase = {
        bone_structure: [
            "Basic tissue types (connective tissue)",
            "Cell biology (cells, organelles)",
            "Basic chemistry (minerals, proteins)"
        ],
        bone_development: [
            "Bone structure",
            "Basic embryology",
            "Endocrinology basics (hormones)"
        ],
        bone_remodeling: [
            "Bone structure",
            "Cell biology",
            "Calcium chemistry and physiology"
        ],
        axial_skeleton: [
            "Anatomical terminology (directional terms, planes)",
            "Basic bone structure",
            "Organ systems overview"
        ],
        appendicular_skeleton: [
            "Anatomical terminology",
            "Basic bone structure",
            "Muscle attachments (basic understanding)"
        ],
        joints_articulations: [
            "Bone structure",
            "Connective tissue types",
            "Anatomical movements"
        ]
    };

    return prerequisitesDatabase[this.currentProblem.type] || [
        "Basic anatomy and physiology",
        "Anatomical terminology"
    ];
}

generateSkeletalStudyTips() {
    if (!this.currentProblem) return [];

    const studyTipsDatabase = {
        bone_structure: [
            "Use skeletal models to understand 3D bone structure",
            "Draw and label compact vs spongy bone diagrams",
            "Create flashcards for bone cell types and functions",
            "Palpate your own bones to understand surface anatomy"
        ],
        bone_development: [
            "Make flowcharts comparing intramembranous vs endochondral ossification",
            "Draw the epiphyseal plate zones and label functions",
            "Create a timeline of bone development from embryo to adult",
            "Use X-rays or images to identify growth plates"
        ],
        bone_remodeling: [
            "Create concept maps linking calcium homeostasis to hormones",
            "Practice drawing the bone remodeling cycle",
            "Relate Wolff's Law to real-world examples (athletes, astronauts)",
            "Make comparison tables for PTH, calcitonin, and vitamin D"
        ],
        axial_skeleton: [
            "Use skull models and identify all bones and features",
            "Feel your own vertebrae and ribs to understand structure",
            "Create mnemonic devices for bone names (e.g., 'Some Lovers Try Positions...' for carpals applies to learning strategies)",
            "Practice with labeled diagrams, then blank diagrams"
        ],
        appendicular_skeleton: [
            "Build a skeleton model to understand bone relationships",
            "Palpate landmarks on your own body (ASIS, clavicle, etc.)",
            "Create comparison tables for upper vs lower limbs",
            "Use muscle attachment sites to remember bone features"
        ],
        joints_articulations: [
            "Move your own joints to understand movements",
            "Create a joint classification chart (structural and functional)",
            "Draw synovial joint structures and label all components",
            "Relate joint types to everyday activities and sports"
        ]
    };

    return studyTipsDatabase[this.currentProblem.type] || [
        "Review material regularly with active recall",
        "Use anatomical models and palpation",
        "Practice explaining concepts to others",
        "Relate anatomy to clinical applications"
    ];
}

