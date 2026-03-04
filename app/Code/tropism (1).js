//Enhanced Plant Tropism Workbook - Comprehensive Plant Movement and Response System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { BiologySvgDiagrams } from '../svg-data.js';
import { BiologyDiagramsRegistry} from '../registry.js';
import { BiologyDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedPlantTropismWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "botanical";
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

        this.tropismSymbols = this.initializeTropismSymbols();
        this.setThemeColors();
        this.initializeTropismTopics();
        this.initializeTropismLessons();
        this.initializeTropismExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            botanical: {
                background: '#ffffff',
                gridColor: '#a8d5a3',
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
                stepBg: '#e1f5fe',
                stepText: '#01579b',
                borderColor: '#66bb6a',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#fff3e0',
                structureBg: '#e0f2f1',
                experimentBg: '#fffde7',
                experimentText: '#f57f17',
                phototropismBg: '#fff9c4',
                gravitropismBg: '#e8f5e9',
                thigmotropismBg: '#e1f5fe',
                chemotropismBg: '#f3e5f5',
                auxinBg: '#ffecb3'
            },
            ecology: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#558b2f',
                headerText: '#ffffff',
                sectionBg: '#dcedc8',
                sectionText: '#33691e',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#f1f8e9',
                resultText: '#558b2f',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#e0f7fa',
                stepText: '#006064',
                borderColor: '#9ccc65',
                contentBg: '#ede7f6',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#e8eaf6',
                experimentBg: '#fffde7',
                experimentText: '#f57f17',
                phototropismBg: '#fff9c4',
                gravitropismBg: '#e8f5e9',
                thigmotropismBg: '#e1f5fe',
                chemotropismBg: '#f3e5f5',
                auxinBg: '#ffecb3'
            }
        };

        this.colors = themes[this.theme] || themes.botanical;
    }

    initializeTropismSymbols() {
        return {
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'lambda': 'λ',
            'mu': 'μ',
            
            // Arrows for movement
            'arrow': '→',
            'upArrow': '↑',
            'downArrow': '↓',
            'leftArrow': '←',
            'rightArrow': '→',
            'bidirectional': '↔',
            
            // Math/science symbols
            'degree': '°',
            'plus': '+',
            'minus': '−',
            'plusminus': '±',
            'approximately': '≈',
            'proportional': '∝',
            
            // Plant hormones
            'IAA': 'IAA',  // Indole-3-acetic acid
            'auxin': 'Auxin',
            'gibberellin': 'GA',
            'cytokinin': 'CK',
            'ABA': 'ABA',  // Abscisic acid
            'ethylene': 'C₂H₄',
            
            // Light
            'photon': 'hν',
            'wavelength': 'λ',
            
            // Chemical formulas
            'H2O': 'H₂O',
            'CO2': 'CO₂',
            'O2': 'O₂',
            'Ca2+': 'Ca²⁺',
            'H+': 'H⁺'
        };
    }

    initializeTropismTopics() {
        this.tropismTopics = {
            phototropism: {
                patterns: [
                    /phototropism|photo.*tropic/i,
                    /light.*response|grow.*light/i,
                    /darwin.*canary.*grass/i,
                    /cholodny.*went/i,
                    /phototropin|blue.*light.*receptor/i
                ],
                handler: this.handlePhototropism.bind(this),
                name: 'Phototropism',
                category: 'directional_growth',
                description: 'Growth or movement response toward or away from light stimulus',
                difficulty: 'intermediate',
                prerequisites: ['plant_structure', 'cell_elongation', 'hormones']
            },
            
            gravitropism: {
                patterns: [
                    /gravitropism|geotropism|gravity.*response/i,
                    /root.*down|shoot.*up/i,
                    /statocyte|statolith|amyloplast/i,
                    /positive.*gravitropism|negative.*gravitropism/i
                ],
                handler: this.handleGravitropism.bind(this),
                name: 'Gravitropism',
                category: 'directional_growth',
                description: 'Growth response to gravity - roots grow down (positive), shoots grow up (negative)',
                difficulty: 'intermediate',
                prerequisites: ['plant_structure', 'auxin', 'cell_biology']
            },
            
            thigmotropism: {
                patterns: [
                    /thigmotropism|touch.*response/i,
                    /tendril|climbing.*plant/i,
                    /coiling|twining/i,
                    /mechanoreceptor|touch.*sensitive/i
                ],
                handler: this.handleThigmotropism.bind(this),
                name: 'Thigmotropism',
                category: 'directional_growth',
                description: 'Growth response to physical contact or touch stimulus',
                difficulty: 'intermediate',
                prerequisites: ['plant_structure', 'mechanical_stimulus']
            },
            
            hydrotropism: {
                patterns: [
                    /hydrotropism|water.*response/i,
                    /root.*moisture|grow.*water/i,
                    /water.*gradient/i
                ],
                handler: this.handleHydrotropism.bind(this),
                name: 'Hydrotropism',
                category: 'directional_growth',
                description: 'Growth response toward water or moisture gradient',
                difficulty: 'intermediate',
                prerequisites: ['root_structure', 'water_potential']
            },
            
            chemotropism: {
                patterns: [
                    /chemotropism|chemical.*response/i,
                    /pollen.*tube|fertilization/i,
                    /chemical.*gradient/i
                ],
                handler: this.handleChemotropism.bind(this),
                name: 'Chemotropism',
                category: 'directional_growth',
                description: 'Growth response to chemical stimulus or concentration gradient',
                difficulty: 'advanced',
                prerequisites: ['reproduction', 'chemical_signaling']
            },
            
            auxin_transport: {
                patterns: [
                    /auxin|IAA|indole.*acetic/i,
                    /polar.*transport|basipetal/i,
                    /PIN.*protein|efflux.*carrier/i,
                    /auxin.*distribution/i
                ],
                handler: this.handleAuxinTransport.bind(this),
                name: 'Auxin and Polar Transport',
                category: 'plant_hormones',
                description: 'The key hormone controlling tropisms and its directional transport',
                difficulty: 'advanced',
                prerequisites: ['cell_biology', 'membrane_transport', 'hormones']
            },
            
            nastic_movements: {
                patterns: [
                    /nastic|nyctinastic|thigmonastic/i,
                    /sleep.*movement|prayer.*plant/i,
                    /mimosa|venus.*flytrap/i,
                    /turgor|pulvinus/i
                ],
                handler: this.handleNasticMovements.bind(this),
                name: 'Nastic Movements',
                category: 'non_directional_movement',
                description: 'Non-directional movements in response to stimuli (independent of stimulus direction)',
                difficulty: 'intermediate',
                prerequisites: ['turgor_pressure', 'ion_transport']
            }
        };
    }

    initializeTropismLessons() {
        this.lessons = {
            phototropism: {
                title: "Phototropism: Light-Directed Growth in Plants",
                concepts: [
                    "Phototropism is directional growth in response to light",
                    "Shoots typically show positive phototropism (grow toward light)",
                    "Auxin redistributes to the shaded side, causing differential growth",
                    "Blue light (400-500 nm) is the primary wavelength triggering phototropism",
                    "Phototropins are the blue light receptor proteins",
                    "The Cholodny-Went theory explains auxin redistribution mechanism"
                ],
                theory: "Phototropism allows plants to optimize light capture for photosynthesis. When light comes from one direction, photoreceptors detect this and trigger auxin redistribution. Higher auxin concentration on the shaded side causes those cells to elongate more, bending the shoot toward light.",
                
                keyDefinitions: {
                    "Phototropism": "Directional growth response to light stimulus",
                    "Positive Phototropism": "Growth toward light (typical of shoots/stems)",
                    "Negative Phototropism": "Growth away from light (some roots)",
                    "Phototropin": "Blue light receptor protein that triggers phototropic response",
                    "Auxin": "Plant hormone (IAA) that promotes cell elongation",
                    "Differential Growth": "Unequal growth rates on opposite sides causing bending",
                    "Cholodny-Went Theory": "Light causes lateral redistribution of auxin to shaded side",
                    "Coleoptile": "Protective sheath covering grass seedling shoot (classic experimental model)"
                },
                
                historicalDevelopment: {
                    darwin1880: {
                        scientist: "Charles Darwin & Francis Darwin",
                        experiment: "Canary grass coleoptile experiments",
                        observation: "Tip perceives light, but bending occurs below tip",
                        conclusion: "Some influence transmitted from tip to bending region",
                        significance: "First demonstration that stimulus perception and response are spatially separated"
                    },
                    boysenJensen1913: {
                        scientist: "Peter Boysen-Jensen",
                        experiment: "Inserted mica barriers (impermeable) and gelatin (permeable) on different sides of coleoptile",
                        observation: "Gelatin allowed bending, mica blocked it only when on shaded side",
                        conclusion: "Chemical signal (not electrical) moves down from tip on shaded side",
                        significance: "Proved signal is chemical substance that can diffuse"
                    },
                    paal1919: {
                        scientist: "Arpad Paal",
                        experiment: "Removed coleoptile tip, placed it asymmetrically on stump",
                        observation: "Curvature occurred on side without tip",
                        conclusion: "Tip produces growth-promoting substance that moves downward",
                        significance: "Further evidence for chemical messenger from tip"
                    },
                    went1926: {
                        scientist: "Frits Went",
                        experiment: "Collected diffusible substance from tips in agar blocks, applied blocks asymmetrically",
                        observation: "Curvature proportional to concentration of substance",
                        conclusion: "Quantified the growth substance (later named auxin)",
                        significance: "Developed bioassay; established auxin as hormonal signal",
                        method: "Went's Avena curvature test - standard bioassay for auxin"
                    },
                    cholodnyWent1920s: {
                        theory: "Cholodny-Went Theory",
                        proposal: "Light causes lateral redistribution of auxin from illuminated to shaded side",
                        mechanism: "Higher auxin on shaded side → greater cell elongation → curvature toward light",
                        status: "Generally accepted mechanism, though details still being refined"
                    },
                    modern: {
                        phototropins: "Blue light receptors identified (Christie et al., 1998)",
                        PIN_proteins: "Polar auxin transport proteins discovered",
                        molecular_mechanism: "Light triggers phototropin autophosphorylation → relocalization of PIN proteins → lateral auxin transport"
                    }
                },
                
                mechanism: {
                    step1_perception: {
                        description: "Blue light absorbed by phototropin receptors in shoot tip",
                        location: "Shoot apex, especially tip cells",
                        wavelength: "Blue light (400-500 nm) most effective",
                        receptor: "Phototropin 1 and 2 (phot1, phot2)"
                    },
                    step2_signal: {
                        description: "Phototropin activation triggers cellular signaling cascade",
                        process: "Phototropin autophosphorylates → activates downstream proteins",
                        result: "Changes in PIN protein localization on cell membranes"
                    },
                    step3_auxinRedistribution: {
                        description: "Auxin transported laterally from lit to shaded side",
                        mechanism: "PIN3 and other efflux carriers relocalize to direct auxin laterally",
                        result: "Higher auxin concentration on shaded side"
                    },
                    step4_differentialGrowth: {
                        description: "Cells on shaded side elongate more than lit side",
                        auxinAction: "Auxin activates proton pumps → acidifies cell wall → loosens wall → turgor-driven expansion",
                        mechanism: "Acid growth hypothesis",
                        result: "Curvature toward light source"
                    }
                },
                
                acidGrowthHypothesis: {
                    description: "Auxin promotes cell elongation by acidifying cell wall",
                    steps: [
                        "Auxin binds to receptors (TIR1/AFB)",
                        "Activates proton (H⁺) pumps in plasma membrane",
                        "H⁺ pumped into cell wall, lowering pH to ~4.5",
                        "Acidic pH activates expansins (wall-loosening proteins)",
                        "Cell wall becomes more plastic/extensible",
                        "Turgor pressure drives cell expansion"
                    ],
                    evidence: [
                        "Auxin causes measurable acidification of cell wall",
                        "Acid buffers can promote growth without auxin",
                        "Fusicoccin (activates H⁺-ATPase) mimics auxin effect"
                    ]
                },
                
                ecologicalSignificance: [
                    "Maximizes light capture for photosynthesis",
                    "Allows seedlings to grow toward light even when germinating in shade",
                    "Enables plants to compete for light in crowded environments",
                    "Helps indoor plants grow toward windows",
                    "Important for crop uniformity and yield"
                ],
                
                comparison: {
                    positiveVsNegative: {
                        positive: "Shoots grow toward light (adaptive for photosynthesis)",
                        negative: "Some roots grow away from light (adaptive for soil penetration)",
                        mechanism: "Same auxin redistribution, but opposite growth response (roots more sensitive to auxin)"
                    }
                },
                
                applications: [
                    "Agriculture: optimize plant spacing for light capture",
                    "Horticulture: control plant shape and growth direction",
                    "Space biology: understand plant growth in microgravity",
                    "Shade avoidance research: how plants detect and respond to competitors",
                    "Auxin herbicides: synthetic auxins (2,4-D) disrupt growth regulation"
                ]
            },

            gravitropism: {
                title: "Gravitropism: Gravity-Directed Growth in Plants",
                concepts: [
                    "Gravitropism is directional growth in response to gravity",
                    "Roots exhibit positive gravitropism (grow downward)",
                    "Shoots exhibit negative gravitropism (grow upward)",
                    "Statocytes containing statoliths (amyloplasts) perceive gravity",
                    "Auxin redistributes in response to gravity",
                    "Ensures roots grow into soil and shoots grow upward regardless of seed orientation"
                ],
                theory: "Gravitropism ensures that regardless of how a seed lands, roots will grow down into the soil (water and minerals) and shoots will grow up toward light. Gravity is sensed by specialized cells containing dense starch-filled organelles that settle, triggering auxin redistribution.",
                
                keyDefinitions: {
                    "Gravitropism": "Directional growth response to gravity (also called geotropism)",
                    "Positive Gravitropism": "Growth in direction of gravity (downward) - characteristic of roots",
                    "Negative Gravitropism": "Growth opposite to gravity (upward) - characteristic of shoots",
                    "Statocyte": "Specialized cell that perceives gravity",
                    "Statolith": "Dense, starch-filled amyloplast that sediments in response to gravity",
                    "Columella": "Root cap tissue containing statocytes (gravity-sensing region)",
                    "Amyloplast": "Starch-storing organelle that acts as statolith",
                    "Presentation Time": "Time required for statoliths to sediment and trigger response"
                },
                
                mechanism: {
                    rootGravitropism: {
                        step1_perception: {
                            location: "Root cap columella cells (statocytes)",
                            sensor: "Amyloplasts (starch-filled plastids) settle to bottom of cells",
                            mechanism: "Dense amyloplasts sediment in direction of gravity within 5-30 minutes"
                        },
                        step2_signaling: {
                            trigger: "Pressure of amyloplasts on endoplasmic reticulum or mechanosensitive channels",
                            cascade: "Activates calcium signaling and changes in PIN protein localization",
                            result: "Triggers auxin redistribution"
                        },
                        step3_auxinRedistribution: {
                            direction: "Auxin transported to lower side of horizontal root",
                            mechanism: "PIN3 and PIN7 proteins relocalize to direct auxin flow",
                            distribution: "Higher auxin accumulates on lower side"
                        },
                        step4_differentialGrowth: {
                            paradox: "Roots are more sensitive to auxin than shoots",
                            effect: "HIGH auxin on lower side INHIBITS growth",
                            result: "Lower side grows slower → root curves downward",
                            note: "Biphasic auxin response: low conc. promotes growth, high conc. inhibits"
                        }
                    },
                    
                    shootGravitropism: {
                        perception: "Statocytes in shoot endodermis (starch sheath)",
                        auxinEffect: "Auxin accumulates on lower side → PROMOTES growth",
                        result: "Lower side grows faster → shoot curves upward",
                        location: "Pulvinus or nodes in stems"
                    }
                },
                
                statolith_avalanche_hypothesis: {
                    description: "Statoliths settling creates mechanical pressure on cellular structures",
                    trigger: "Amyloplasts sediment and press against ER or mechanoreceptors",
                    evidence: [
                        "Removal of starch abolishes gravitropism",
                        "High-starch mutants show enhanced gravitropic response",
                        "Presentation time correlates with statolith sedimentation rate"
                    ],
                    alternative: "Protoplast pressure hypothesis - entire protoplast acts as sensor"
                },
                
                auxinConcentrationEffect: {
                    shoots: {
                        lowAuxin: "Below optimal → slow growth",
                        optimalAuxin: "Optimal concentration → maximum growth",
                        description: "Shoots operate on rising part of auxin-growth curve"
                    },
                    roots: {
                        lowAuxin: "Below optimal → slow growth",
                        optimalAuxin: "Optimal concentration → maximum growth",
                        highAuxin: "Above optimal → INHIBITED growth",
                        description: "Roots more sensitive; supraoptimal auxin inhibits"
                    },
                    implication: "Same auxin redistribution causes opposite curvatures in roots (down) vs shoots (up)"
                },
                
                experimentalEvidence: {
                    clinostat: {
                        device: "Slowly rotating platform to negate gravity stimulus",
                        result: "Plants grown on clinostat show no gravitropic curvature",
                        conclusion: "Demonstrates gravity is the directional cue"
                    },
                    spaceFlight: {
                        observation: "Plants in microgravity show disoriented growth",
                        note: "Some orientation maintained via other tropisms (light)",
                        significance: "Confirms gravity is primary directional cue for root/shoot orientation"
                    },
                    starchlessMutants: {
                        observation: "Mutants lacking starch in amyloplasts show reduced gravitropism",
                        conclusion: "Starch-filled amyloplasts are essential for gravity sensing"
                    }
                },
                
                ecologicalSignificance: [
                    "Ensures roots grow into soil for water and nutrient absorption",
                    "Ensures shoots grow upward for light capture",
                    "Allows germination success regardless of seed orientation",
                    "Helps plants recover upright position after lodging (wind, rain)",
                    "Critical for seedling establishment"
                ],
                
                applications: [
                    "Space agriculture: growing crops in microgravity",
                    "Understanding lodging resistance in crops (wind/rain damage)",
                    "Horticulture: training plant growth direction",
                    "Root architecture studies for drought resistance",
                    "Plant biotechnology: engineering root systems"
                ]
            },

            thigmotropism: {
                title: "Thigmotropism: Touch-Directed Growth in Plants",
                concepts: [
                    "Thigmotropism is directional growth in response to touch or contact",
                    "Common in climbing plants with tendrils (peas, grapes, cucumbers)",
                    "Contact triggers differential growth - contacted side grows slower",
                    "Allows plants to climb and gain support for vertical growth",
                    "Involves rapid cellular responses including calcium signaling",
                    "Coiling response can occur within minutes to hours"
                ],
                theory: "Thigmotropism enables climbing plants to attach to supports and grow upward, gaining access to light without investing energy in thick, sturdy stems. Mechanoreceptors detect touch, triggering growth changes that cause coiling around the support.",
                
                keyDefinitions: {
                    "Thigmotropism": "Directional growth response to touch or contact stimulus",
                    "Tendril": "Modified leaf, leaflet, or stem specialized for climbing",
                    "Mechanoreceptor": "Protein that detects mechanical stimulus (touch, pressure)",
                    "Differential Growth": "Unequal growth rates causing curvature",
                    "Coiling": "Wrapping growth around support structure",
                    "Circumnutation": "Spiral searching movement of growing shoot tip",
                    "Thigmomorphogenesis": "Developmental changes in response to mechanical stimulation (related but distinct)"
                },
                
                mechanism: {
                    step1_contact: {
                        description: "Tendril touches solid object",
                        detection: "Mechanoreceptors on tendril surface",
                        specificity: "Responds to solid objects, not air currents (distinguishes support from wind)"
                    },
                    step2_signaling: {
                        immediate: "Calcium influx into cells on contact side within seconds",
                        cascade: "Calcium activates calmodulin and downstream signaling",
                        hormones: "Auxin and ethylene involved in growth response"
                    },
                    step3_differentialGrowth: {
                        contactSide: "Growth INHIBITED on side touching support",
                        oppositeSide: "Growth CONTINUES normally on free side",
                        result: "Tendril curves around support (contacted side becomes concave)"
                    },
                    step4_coiling: {
                        primary: "Tendril wraps around support object",
                        secondary: "Free portions form helical coils (spring-like)",
                        function: "Coils act as springs, provide flexibility and shock absorption"
                    }
                },
                
                calciumRole: {
                    touchResponse: "Touch triggers rapid Ca²⁺ influx in contacted cells",
                    visualization: "Can be demonstrated with calcium-sensitive dyes",
                    function: "Ca²⁺ acts as second messenger, activating growth changes",
                    evidence: "Calcium channel blockers prevent thigmotropic response"
                },
                
                tendrilTypes: {
                    stem: "Modified stems (grape, Virginia creeper)",
                    leaf: "Modified leaves (pea, sweet pea)",
                    leaflet: "Modified leaflets (vetch)",
                    adhesivePad: "Some form adhesive pads at tips (Virginia creeper)"
                },
                
                circumnutation: {
                    description: "Spiral, searching movement of growing shoot tip",
                    mechanism: "Endogenous growth rhythm causes rotating growth",
                    function: "Increases probability of tendril contacting support",
                    rate: "Can complete circle in 1-3 hours",
                    interaction: "Works together with thigmotropism for effective climbing"
                },
                
                comparison: {
                    thigmotropismVsThigmonasty: {
                        thigmotropism: "DIRECTIONAL growth response (tendril coiling)",
                        thigmonasty: "NON-directional movement response (Mimosa leaf folding)",
                        similarity: "Both respond to touch",
                        difference: "Tropism is growth-based and directional; nastic is turgor-based and non-directional"
                    }
                },
                
                ecologicalSignificance: [
                    "Allows plants to climb without investing in thick, woody stems",
                    "Gains access to light in crowded environments",
                    "Increases vertical distribution of leaves for photosynthesis",
                    "Reduces competition with neighbors by growing upward",
                    "Coils provide flexibility - tendril doesn't break in wind"
                ],
                
                examples: [
                    {plant: "Garden pea (Pisum sativum)", tendril: "Modified leaflets"},
                    {plant: "Grape (Vitis)", tendril: "Modified stems"},
                    {plant: "Cucumber (Cucumis)", tendril: "Modified stems"},
                    {plant: "Passion flower (Passiflora)", tendril: "Modified stems"},
                    {plant: "Virginia creeper (Parthenocissus)", tendril: "Modified stems with adhesive pads"}
                ],
                
                applications: [
                    "Horticulture: training climbing plants on trellises",
                    "Agriculture: optimizing support structures for crops (peas, beans, cucumbers)",
                    "Understanding mechanosensing in plants",
                    "Bio-inspired robotics: soft robots that grip via coiling",
                    "Architecture: green walls and vertical gardens"
                ]
            },

            hydrotropism: {
                title: "Hydrotropism: Water-Directed Root Growth",
                concepts: [
                    "Hydrotropism is directional growth response to water or moisture gradient",
                    "Primarily observed in roots growing toward water",
                    "Allows plants to locate water sources in soil",
                    "Can override gravitropism under severe water stress",
                    "Mechanism less understood than phototropism/gravitropism",
                    "Important for plant survival in dry environments"
                ],
                theory: "Hydrotropism enables roots to grow toward regions of higher moisture, ensuring water uptake even when water distribution is uneven. This is critical for plant survival, especially in arid environments or during drought.",
                
                keyDefinitions: {
                    "Hydrotropism": "Directional growth response to water or moisture gradient",
                    "Positive Hydrotropism": "Growth toward higher moisture (typical of roots)",
                    "Water Potential Gradient": "Difference in water potential that drives water movement and root growth direction",
                    "Columella": "Root cap region involved in both gravity and water sensing",
                    "Mucilage": "Gel-like substance secreted by root cap, may be involved in moisture sensing"
                },
                
                mechanism: {
                    perception: {
                        location: "Root cap, possibly columella cells",
                        sensor: "Moisture gradient detected, exact mechanism unknown",
                        hypothesis: "May involve changes in water potential affecting cell membranes or osmotic sensors"
                    },
                    response: {
                        auxinInvolvement: "Auxin redistribution likely involved",
                        direction: "Root tip curves toward higher moisture",
                        interaction: "Can override gravitropic response if water gradient is strong"
                    }
                },
                
                gravitropismVsHydrotropism: {
                    normalConditions: "Gravitropism dominates - roots grow straight down",
                    waterStress: "Hydrotropism can override gravitropism",
                    experiment: "If water source is to side, root may grow horizontally toward it",
                    significance: "Demonstrates adaptive prioritization - water more important than gravity alignment when scarce"
                },
                
                experimentalEvidence: {
                    splitAgar: {
                        setup: "Root grows between two agar blocks - one moist, one dry",
                        result: "Root curves toward moist agar",
                        conclusion: "Demonstrates positive hydrotropism"
                    },
                    clinostatWithMoisture: {
                        setup: "Eliminate gravity effect using clinostat, apply moisture gradient",
                        result: "Root still curves toward moisture",
                        conclusion: "Hydrotropism is independent of gravitropism"
                    }
                },
                
                ecologicalSignificance: [
                    "Critical for seedling establishment in dry soils",
                    "Allows plants to locate and exploit localized water sources",
                    "Important for survival in arid and semi-arid environments",
                    "Helps plants cope with heterogeneous soil moisture",
                    "May be important for deep rooting in drought conditions"
                ],
                
                applications: [
                    "Agriculture: understanding root water foraging strategies",
                    "Drought resistance: breeding crops with enhanced hydrotropism",
                    "Irrigation efficiency: predicting root growth patterns",
                    "Ecological restoration: establishing plants in dry areas",
                    "Climate change adaptation: crops that can find water more effectively"
                ],
                
                challenges: {
                    research: "Hydrotropism is harder to study than other tropisms",
                    reasons: [
                        "Difficult to create stable, measurable moisture gradients",
                        "Roots hidden in soil (hard to observe)",
                        "Interaction with gravitropism complicates interpretation",
                        "Molecular mechanisms poorly understood compared to phototropism"
                    ]
                }
            },

            chemotropism: {
                title: "Chemotropism: Chemical-Directed Growth",
                concepts: [
                    "Chemotropism is directional growth response to chemical gradient",
                    "Most studied in pollen tube growth toward ovule",
                    "Chemical attractants guide pollen tube through style to egg cell",
                    "Also observed in some root growth (nutrients, microbes)",
                    "Involves precise recognition of chemical signals",
                    "Critical for successful sexual reproduction in plants"
                ],
                theory: "Chemotropism ensures that pollen tubes accurately navigate to the egg cell for fertilization. Chemical attractants secreted by the ovule create a concentration gradient that guides pollen tube growth direction.",
                
                keyDefinitions: {
                    "Chemotropism": "Directional growth response to chemical concentration gradient",
                    "Pollen Tube": "Extension of pollen grain that delivers sperm to egg",
                    "Synergid Cell": "Cells flanking egg cell that secrete attractant peptides",
                    "LURE Peptides": "Small secreted peptides that attract pollen tubes in Arabidopsis",
                    "Chemocyanin": "Peptide attractant in Lily",
                    "Attractant": "Chemical signal that guides directional growth"
                },
                
                pollenTubeGuidance: {
                    stage1_initial: {
                        description: "Pollen lands on stigma, germinates",
                        growth: "Pollen tube grows down through style",
                        guidance: "Initial growth may be guided by style tissues (non-specific)"
                    },
                    stage2_longDistance: {
                        description: "Pollen tube grows through transmitting tract toward ovary",
                        signals: "Style produces growth-supporting signals (gamma-aminobutyric acid, etc.)",
                        guidance: "General directional cues, not ovule-specific"
                    },
                    stage3_shortRange: {
                        description: "Pollen tube emerges into ovary, must target correct ovule",
                        signal: "Synergid cells secrete LURE peptides (species-specific)",
                        mechanism: "Concentration gradient - higher near ovule micropyle",
                        specificity: "Species-specific recognition ensures correct pollen-ovule pairing"
                    },
                    stage4_entry: {
                        description: "Pollen tube enters micropyle (opening in ovule)",
                        guidance: "Highest LURE concentration at micropyle",
                        result: "Tube ruptures, releases sperm cells for fertilization"
                    }
                },
                
                molecularMechanism: {
                    perception: {
                        location: "Pollen tube tip",
                        receptor: "PRK (Pollen Receptor Kinase) family proteins on tube surface",
                        binding: "LURE peptides bind to receptor kinases"
                    },
                    signaling: {
                        cascade: "Receptor activation → calcium signaling → cytoskeletal changes",
                        calciumGradient: "Tip of pollen tube has high Ca²⁺, creates growth gradient",
                        direction: "Growth toward side with higher attractant → higher Ca²⁺"
                    },
                    growth: {
                        mechanism: "Vesicle fusion at tip delivers new membrane and wall material",
                        direction: "Asymmetric vesicle fusion on side toward attractant",
                        rate: "Pollen tube can grow several millimeters in hours (very fast cellular growth)"
                    }
                },
                
                otherExamples: {
                    rootChemotropism: {
                        nutrients: "Roots may grow toward nutrient-rich patches",
                        microbes: "Some evidence for growth toward beneficial microbes",
                        status: "Less well-documented than pollen tube chemotropism"
                    },
                    fungalHyphae: {
                        note: "Fungi also show chemotropism (mating, host finding)",
                        similarity: "Similar mechanisms to pollen tubes"
                    }
                },
                
                speciesSpecificity: {
                    LUREpeptides: "Different plant species have different LURE sequences",
                    recognition: "Pollen tube receptors recognize species-specific LURE",
                    function: "Prevents cross-species fertilization (reproductive barrier)",
                    evidence: "Mismatched LURE doesn't attract pollen tubes"
                },
                
                ecologicalSignificance: [
                    "Essential for sexual reproduction and genetic diversity",
                    "Ensures pollen tube finds egg efficiently (faster fertilization)",
                    "Species-specific signaling prevents hybridization errors",
                    "Allows successful fertilization even in complex ovary structures",
                    "Important for seed and fruit production"
                ],
                
                applications: [
                    "Crop breeding: understanding fertilization efficiency",
                    "Hybrid seed production: overcoming reproductive barriers",
                    "Understanding infertility in crops",
                    "Biotechnology: engineering pollen tube guidance for controlled pollination",
                    "Evolutionary biology: studying speciation and reproductive isolation"
                ]
            },

            auxin_transport: {
                title: "Auxin: The Master Hormone of Plant Tropisms",
                concepts: [
                    "Auxin (IAA) is the primary hormone controlling tropisms",
                    "Auxin promotes cell elongation in shoots (acid growth)",
                    "Auxin is transported polarly (directionally) in plants",
                    "PIN proteins are auxin efflux carriers that determine transport direction",
                    "Lateral redistribution of auxin drives tropic curvatures",
                    "Auxin has concentration-dependent effects (low promotes, high inhibits in roots)"
                ],
                theory: "Auxin is the central hormonal regulator of plant tropisms. Its directional transport and redistribution in response to environmental stimuli (light, gravity, touch) create concentration gradients that drive differential growth and curvature.",
                
                keyDefinitions: {
                    "Auxin": "Plant hormone, primarily Indole-3-Acetic Acid (IAA), that regulates growth and tropisms",
                    "IAA": "Indole-3-Acetic Acid, the main naturally-occurring auxin",
                    "Polar Transport": "Directional, cell-to-cell movement of auxin from shoot to root (basipetal)",
                    "PIN Proteins": "Auxin efflux carrier proteins that determine direction of auxin transport",
                    "Auxin Influx Carrier": "AUX1/LAX proteins that import auxin into cells",
                    "Auxin Response Factor (ARF)": "Transcription factors that mediate auxin-regulated gene expression",
                    "Auxin/IAA Proteins": "Repressor proteins that block ARFs in absence of auxin"
                },
                
                biosynthesisAndDistribution: {
                    synthesis: {
                        location: "Young leaves, shoot apex, developing seeds",
                        precursor: "Tryptophan amino acid",
                        pathway: "Multiple pathways (TAA/YUC pathway is major route)",
                        regulation: "Developmentally and environmentally controlled"
                    },
                    distribution: {
                        source: "Shoot apex (high synthesis)",
                        sink: "Roots (low synthesis, high response)",
                        transport: "Basipetal (shoot → root), polar, cell-to-cell"
                    }
                },
                
                polarTransport: {
                    mechanism: {
                        step1: "Auxin (IAA) is weak acid, partially protonated at cytoplasmic pH ~7",
                        step2: "IAAH (protonated) diffuses into cell across membrane",
                        step3: "IAA⁻ (anionic form) cannot cross membrane easily",
                        step4: "AUX1 influx carriers import IAA⁻ into cells",
                        step5: "PIN efflux carriers export IAA⁻ out at basal end of cell",
                        step6: "Polar localization of PIN proteins creates directional flow"
                    },
                    chemiosmotic: {
                        description: "Chemiosmotic hypothesis of polar auxin transport",
                        pH: "Cytoplasm pH ~7, cell wall pH ~5",
                        ionization: "IAA pKa ~4.75, so more charged at pH 7, more neutral at pH 5",
                        consequence: "IAAH enters easily; IAA⁻ requires carriers to exit"
                    },
                    PINproteins: {
                        function: "Auxin efflux carriers, determine transport direction",
                        localization: "Asymmetrically localized on basal (rootward) side of cells",
                        types: "PIN1, PIN2, PIN3, PIN4, PIN7 (different tissues and functions)",
                        dynamics: "PIN proteins can relocalize in response to tropistic stimuli",
                        regulation: "Phosphorylation, endocytosis, targeted delivery control PIN localization"
                    }
                },
                
                lateralRedistribution: {
                    phototropism: "Light → phototropin activation → PIN3 relocalizes → auxin to shaded side",
                    gravitropism: "Gravity → statolith sedimentation → PIN relocation → auxin to lower side",
                    result: "Asymmetric auxin distribution drives differential growth"
                },
                
                cellularMechanism: {
                    acidGrowth: {
                        step1: "Auxin binds TIR1/AFB receptors (F-box proteins)",
                        step2: "Auxin-receptor complex binds Aux/IAA repressor proteins",
                        step3: "Aux/IAA proteins degraded via ubiquitin-proteasome pathway",
                        step4: "ARF transcription factors now active (no longer repressed)",
                        step5: "ARFs activate genes including plasma membrane H⁺-ATPases",
                        step6: "H⁺ pumps acidify cell wall (pH ~4.5)",
                        step7: "Acidic pH activates expansins (wall-loosening proteins)",
                        step8: "Cell wall loosens, turgor pressure drives cell expansion"
                    },
                    rapidResponse: "Acid pumping within 15-30 minutes",
                    longTerm: "Gene expression changes for sustained growth"
                },
                
                concentrationEffects: {
                    shoots: {
                        low: "Below optimal → slow growth",
                        optimal: "~10⁻⁶ M → maximum growth",
                        high: "Still promotes growth (shoots relatively insensitive to high auxin)",
                        curve: "Rising part of dose-response curve"
                    },
                    roots: {
                        low: "Below optimal → slow growth",
                        optimal: "~10⁻⁹ M → maximum growth (1000x more sensitive than shoots)",
                        high: "Above optimal → INHIBITED growth",
                        curve: "Peak in middle of dose-response curve, then declining",
                        implication: "Roots more sensitive; same auxin redistribution causes opposite curvature"
                    }
                },
                
                syntheticAuxins: {
                    examples: ["2,4-D (2,4-Dichlorophenoxyacetic acid)", "2,4,5-T", "Dicamba", "Picloram"],
                    characteristics: "Not degraded by plant enzymes, more persistent",
                    use: "Herbicides (selective - kill broadleaf weeds, not grasses)",
                    mechanism: "Mimic auxin, cause uncontrolled growth and death at high concentrations",
                    agriculture: "Widely used in lawn care and crop production"
                },
                
                applications: [
                    "Rooting hormones: auxin promotes adventitious root formation on cuttings",
                    "Herbicides: synthetic auxins (2,4-D) as selective weed killers",
                    "Fruit development: auxin (from seeds) promotes fruit growth",
                    "Apical dominance: high auxin from shoot tip suppresses lateral bud growth",
                    "Tissue culture: auxin/cytokinin ratio controls organ formation",
                    "Agriculture: control plant architecture and growth patterns"
                ]
            },

            nastic_movements: {
                title: "Nastic Movements: Non-Directional Plant Responses",
                concepts: [
                    "Nastic movements are non-directional responses (independent of stimulus direction)",
                    "Driven by reversible turgor changes, not growth",
                    "Can be rapid (seconds to minutes) unlike tropic growth responses",
                    "Examples: Mimosa leaf folding, prayer plant movements, Venus flytrap",
                    "Nyctinasty: sleep movements in response to day/night cycle",
                    "Thigmonasty: touch-induced movement (distinct from thigmotropism)"
                ],
                theory: "Unlike tropisms (directional growth responses), nastic movements are rapid, reversible responses mediated by turgor pressure changes. The direction of movement is determined by plant anatomy, not stimulus direction.",
                
                keyDefinitions: {
                    "Nastic Movement": "Non-directional plant movement in response to stimulus",
                    "Nyctinasty": "Sleep movements in response to day/night (circadian) rhythms",
                    "Thigmonasty": "Movement in response to touch (e.g., Mimosa)",
                    "Seismonasty": "Movement in response to shaking or vibration",
                    "Pulvinus": "Swollen region at base of leaf/leaflet that controls movement via turgor changes",
                    "Motor Cells": "Cells in pulvinus that change turgor to drive movement",
                    "Turgor Pressure": "Pressure of cell contents against cell wall due to water uptake"
                },
                
                mechanism: {
                    general: {
                        basis: "Rapid ion fluxes → osmotic water movement → turgor changes",
                        location: "Specialized motor cells in pulvinus",
                        reversibility: "Turgor can be regained, allowing repeated movements",
                        speed: "Seconds to minutes (much faster than growth-based tropisms)"
                    },
                    ionFlux: {
                        step1: "Stimulus triggers ion channel opening",
                        step2: "K⁺ and Cl⁻ rapidly exit cells on one side of pulvinus",
                        step3: "Water follows ions osmotically (water exits cells)",
                        step4: "Cells lose turgor and shrink",
                        step5: "Opposite side maintains turgor",
                        step6: "Differential turgor causes bending/folding"
                    }
                },
                
                types: {
                    nyctinasty: {
                        description: "Leaf movements in response to day/night cycle",
                        examples: ["Prayer plant (Maranta)", "Oxalis (wood sorrel)", "Bean leaves"],
                        pattern: {
                            day: "Leaves horizontal (maximizes light capture)",
                            night: "Leaves fold upward or downward ('sleep' position)"
                        },
                        mechanism: {
                            control: "Circadian clock + light signals",
                            pulvinus: "Motor cells at base of leaflets and petiole",
                            ionFlux: "K⁺ and Cl⁻ move between upper and lower motor cells",
                            result: "Turgor changes cause reversible movement"
                        },
                        function: {
                            hypotheses: [
                                "Reduce water loss at night (less surface area exposed)",
                                "Reduce heat loss at night (radiation cooling)",
                                "Protect from nocturnal herbivores or pathogens",
                                "Reduce dew formation on leaf surface"
                            ],
                            debated: "Adaptive significance still not fully clear"
                        }
                    },
                    
                    thigmonasty: {
                        description: "Rapid movement in response to touch",
                        example: "Mimosa pudica (sensitive plant)",
                        response: {
                            触发: "Touch leaflet → leaflets fold together",
                            spread: "Signal spreads to other leaflets and can travel to other leaves",
                            recovery: "Re-opens in 15-30 minutes"
                        },
                        mechanism: {
                            perception: "Mechanoreceptors detect touch",
                            signal: "Action potential-like electrical signal propagates",
                            speed: "Electrical signal travels ~2 cm/s along petiole",
                            ionFlux: "Ca²⁺ and K⁺ channels open → rapid ion efflux",
                            pulvinus: "Motor cells in primary pulvinus (base of petiole) and secondary pulvini (base of leaflets)",
                            result: "Turgor loss → leaflets fold, petiole droops"
                        },
                        function: {
                            hypotheses: [
                                "Startle/deter herbivores (sudden movement, exposes thorns on stem)",
                                "Reduce herbivore attractiveness (looks wilted/unhealthy)",
                                "Dislodge insects from leaf",
                                "Reduce damage during heavy rain or wind"
                            ]
                        },
                        energyCost: "Requires ATP to restore ion gradients after response"
                    },
                    
                    seismonasty: {
                        description: "Movement in response to shaking/vibration",
                        overlap: "Similar to thigmonasty, same mechanisms",
                        examples: "Mimosa pudica also responds to vibration"
                    }
                },
                
                venusFlytrap: {
                    note: "Rapid trap closure is specialized thigmonasty",
                    description: "Modified leaves form traps to capture insects",
                    mechanism: {
                        trigger: "Trigger hairs bent twice within 20 seconds",
                        electrical: "Action potentials generated and summed",
                        threshold: "Two touches needed (prevents false alarms from debris)",
                        closure: "Rapid turgor changes + cell expansion on outer surface",
                        speed: "Trap closes in <1 second (one of fastest plant movements)",
                        digestion: "If prey present, trap seals tighter and secretes enzymes"
                    },
                    energetics: "Closure requires ATP, can only close 3-5 times before leaf dies",
                    recovery: "Trap reopens in 24-48 hours if no prey captured"
                },
                
                comparisonTropismVsNasty: {
                    tropism: {
                        direction: "DIRECTIONAL (determined by stimulus direction)",
                        basis: "Irreversible growth (cell elongation)",
                        speed: "Hours to days",
                        examples: "Phototropism, gravitropism, thigmotropism",
                        energy: "Requires sustained metabolic investment in growth"
                    },
                    nasty: {
                        direction: "NON-DIRECTIONAL (determined by anatomy)",
                        basis: "Reversible turgor changes",
                        speed: "Seconds to minutes",
                        examples: "Nyctinasty, thigmonasty (Mimosa)",
                        energy: "Requires ATP to restore ion gradients, but no new growth"
                    }
                },
                
                ecologicalSignificance: [
                    "Rapid defense against herbivores (Mimosa)",
                    "Carnivory: capture insects for nutrients (Venus flytrap)",
                    "Possible thermoregulation or water conservation (nyctinasty)",
                    "Reduce damage from rain/wind",
                    "Optimize light capture and reduce nighttime exposure"
                ],
                
                applications: [
                    "Bio-inspired robotics: soft actuators mimicking plant movements",
                    "Understanding electrical signaling in plants",
                    "Sensing and actuation in materials science",
                    "Educational demonstrations of plant responsiveness",
                    "Studying circadian rhythms and timekeeping in plants"
                ]
            }
        };
    }

    initializeTropismExperiments() {
        this.tropismExperiments = {
            // ========================================
            // PHOTOTROPISM EXPERIMENTS
            // ========================================
            
            darwin_canary_grass: {
                name: "Darwin's Canary Grass Experiments - Discovery of Phototropism Signal",
                relatedTopics: ['phototropism', 'auxin_transport'],
                category: 'historical_phototropism',
                historicalBackground: {
                    scientists: "Charles Darwin and Francis Darwin (father and son)",
                    year: "1880",
                    publication: "The Power of Movement in Plants",
                    context: "Darwin was investigating plant movements to understand their adaptive significance. He used canary grass (Phalaris canariensis) seedlings, which have a protective sheath called a coleoptile covering the young shoot",
                    observation: "Grass seedlings grown in unilateral light bend toward the light source, but the bending occurs below the tip",
                    question: "Which part of the seedling perceives light, and which part responds?",
                    significance: "First experimental demonstration that stimulus perception (light) and response (bending) can be spatially separated in plants",
                    quote: "We must therefore conclude that when seedlings are freely exposed to a lateral light some influence is transmitted from the upper to the lower part, causing the latter to bend",
                    legacy: "Darwin's work inspired decades of research that eventually led to discovery of auxin (plant hormone) in 1920s-1930s"
                },
                labExperiment: {
                    title: "Replicating Darwin's Classic Phototropism Experiments",
                    hypothesis: "The tip of the coleoptile perceives light, and transmits a signal downward that causes bending in the region below the tip",
                    purpose: "Investigate which part of grass seedling perceives light and which part responds by bending",
                    background: {
                        coleoptile: "Protective sheath covering grass seedling shoot",
                        phototropism: "Growth toward light",
                        darwinQuestion: "Is perception and response in same region?",
                        prediction: "If tip perceives light, covering/removing tip should prevent phototropic response even if base is illuminated"
                    },
                    variables: {
                        independent: "Treatment of seedling (intact control, tip covered, tip removed, base covered)",
                        dependent: "Degree of phototropic curvature toward light",
                        controlled: ["Light intensity", "Light direction", "Temperature", "Time", "Seedling age", "Species"]
                    },
                    materials: [
                        "Grass seeds: oat (Avena sativa), wheat, or canary grass (Phalaris)",
                        "Petri dishes or seed trays",
                        "Moist filter paper or cotton",
                        "Light-proof cardboard box with opening on one side",
                        "Directional light source (LED, fluorescent lamp, or window)",
                        "Aluminum foil or opaque caps (to cover tips)",
                        "Razor blade or scalpel (for removing tips)",
                        "Black paper tubes (to cover base)",
                        "Transparent plastic or glass tubes (as control for covering)",
                        "Ruler or protractor (to measure curvature angle)",
                        "Camera (to document growth over time)",
                        "Vermiculite or agar (alternative growth medium)"
                    ],
                    safetyPrecautions: [
                        "Razor blade/scalpel is sharp - handle carefully",
                        "Sterilize blade with alcohol before use",
                        "Adult supervision required for cutting",
                        "Wash hands after handling seeds and seedlings",
                        "Ensure light source doesn't overheat (fire hazard)"
                    ],
                    procedure: {
                        preparation: [
                            "SEED GERMINATION (3-5 days before experiment):",
                            "Soak grass seeds in water for 4-6 hours to soften seed coat",
                            "Place seeds on moist filter paper in Petri dish or tray",
                            "Cover to maintain humidity",
                            "Keep in darkness at room temperature (20-25°C)",
                            "Seeds will germinate in 2-3 days",
                            "Continue growing until coleoptiles are 2-3 cm tall (straight, before leaves emerge)",
                            "Select uniform seedlings of similar size for consistency",
                            "",
                            "SETUP OF UNIDIRECTIONAL LIGHT BOX:",
                            "Use cardboard box painted black inside or line with black paper",
                            "Cut opening on one side (5-10 cm diameter)",
                            "Position light source 20-30 cm from opening",
                            "Test that light only enters from one direction",
                            "Place seedling tray inside box, opening facing light"
                        ],
                        
                        experiment1_intactControl: {
                            name: "Experiment 1: Intact Seedling (Control)",
                            setup: [
                                "Select 5-10 uniform seedlings",
                                "Place in light box with one side illuminated",
                                "Do NOT manipulate seedlings - they remain intact",
                                "Ensure light comes from one direction only (unilateral)"
                            ],
                            incubation: "6-24 hours of continuous unilateral light",
                            observation: [
                                "Photograph or sketch seedlings at start (0 hr)",
                                "Observe every 2-4 hours if possible",
                                "Measure curvature angle at end (use protractor or estimate)",
                                "Note: bending occurs in region BELOW the tip"
                            ],
                            expectedResult: "Seedlings bend toward light source (positive phototropism), typically 15-45° curvature"
                        },
                        
                        experiment2_tipCovered: {
                            name: "Experiment 2: Tip Covered with Opaque Cap (Darwin's Key Experiment)",
                            setup: [
                                "Select 5-10 seedlings",
                                "Cover only the TIP (top 2-3 mm) with aluminum foil cap or opaque tube",
                                "Ensure cap blocks all light from reaching tip",
                                "Base of seedling remains exposed to light",
                                "Place in unilateral light box same as control"
                            ],
                            incubation: "6-24 hours",
                            observation: "Measure curvature",
                            expectedResult: "Little or NO bending toward light - even though base is illuminated, tip cannot perceive light so no signal sent",
                            conclusion: "TIP perceives light (even though it doesn't bend)"
                        },
                        
                        experiment3_tipRemoved: {
                            name: "Experiment 3: Tip Removed (Decapitation)",
                            setup: [
                                "Select 5-10 seedlings",
                                "Using sterilized razor blade, carefully cut off top 1-2 mm of coleoptile",
                                "Place cut seedlings in unilateral light",
                                "Allow wound to heal for ~1 hour before starting light exposure"
                            ],
                            incubation: "6-24 hours",
                            observation: "Measure curvature",
                            expectedResult: "Little or NO bending - without tip, no phototropic response even when light is present",
                            conclusion: "Tip is NECESSARY for phototropic response"
                        },
                        
                        experiment4_baseCovered: {
                            name: "Experiment 4: Base Covered, Tip Exposed (Darwin's Elegant Control)",
                            setup: [
                                "Select 5-10 seedlings",
                                "Cover BASE (region where bending occurs) with black paper tube",
                                "Leave TIP exposed to light",
                                "Only tip receives light, bending zone is in darkness"
                            ],
                            incubation: "6-24 hours",
                            observation: "Measure curvature",
                            expectedResult: "Seedling DOES bend toward light (even though bending region was in darkness)",
                            conclusion: "Response (bending) occurs in region that doesn't need to sense light directly - signal must come from tip"
                        },
                        
                        experiment5_transparentCap: {
                            name: "Experiment 5: Tip Covered with Transparent Cap (Control for Cap Effect)",
                            setup: [
                                "Cover tip with transparent plastic or glass tube",
                                "This controls for possible mechanical effects of cap",
                                "Light can still reach tip through transparent cover"
                            ],
                            expectedResult: "Normal bending (similar to intact control) - transparent cap doesn't prevent phototropism",
                            conclusion: "It's light blockage, not physical presence of cap, that prevents bending in Experiment 2"
                        },
                        
                        measurement: [
                            "MEASURING CURVATURE ANGLE:",
                            "Photograph seedlings from side view",
                            "Draw vertical reference line",
                            "Draw line along coleoptile axis",
                            "Measure angle between reference and coleoptile (use protractor or image analysis software)",
                            "Alternatively: Measure horizontal displacement of tip from base",
                            "Record data for each seedling, calculate average and standard deviation"
                        ],
                        
                        dataCollection: [
                            "Create data table with columns: Treatment, Seedling #, Curvature Angle (°), Average, StDev",
                            "Photograph each treatment group at same time points",
                            "Plot bar graph: X-axis = Treatment, Y-axis = Average Curvature Angle",
                            "Include error bars (standard deviation or standard error)"
                        ]
                    },
                    expectedResults: {
                        intact: "Strong curvature toward light (20-45°)",
                        tipCovered: "Little or no curvature (<5°)",
                        tipRemoved: "Little or no curvature (<5°)",
                        baseCovered: "Strong curvature toward light (similar to intact)",
                        transparentCap: "Strong curvature toward light (similar to intact)"
                    },
                    dataTable: [
                        ["Treatment", "Light on Tip?", "Light on Base?", "Predicted Curvature", "Observed Curvature"],
                        ["Intact control", "Yes", "Yes", "Strong", "20-45°"],
                        ["Tip covered (opaque)", "No", "Yes", "None", "<5°"],
                        ["Tip removed", "N/A", "Yes", "None", "<5°"],
                        ["Base covered", "Yes", "No", "Strong", "20-45°"],
                        ["Tip covered (transparent)", "Yes", "Yes", "Strong", "20-45°"]
                    ],
                    observations: [
                        "Only seedlings with exposed tips bend toward light",
                        "Bending occurs in region BELOW tip (elongation zone)",
                        "Covering/removing tip prevents bending even when base is illuminated",
                        "Covering base doesn't prevent bending if tip is illuminated",
                        "This demonstrates SEPARATION of perception (tip) and response (base)"
                    ],
                    analysis: {
                        keyConclusion: "The tip perceives light and sends a signal down to the bending region below",
                        evidence: [
                            "Exp 2 & 3: No tip exposure or no tip → no bending (tip required)",
                            "Exp 4: Tip exposed, base covered → bending occurs (response doesn't need direct light)",
                            "Exp 5: Transparent cap → bending occurs (it's light, not cap, that matters)"
                        ],
                        darwinInterpretation: "Darwin concluded 'some influence is transmitted from the upper to the lower part'",
                        whatDarwinDidntKnow: "The 'influence' is auxin (plant hormone), discovered 40+ years later",
                        modernUnderstanding: {
                            signal: "Auxin (IAA) produced in tip",
                            redistribution: "Light causes auxin to move to shaded side",
                            effect: "Higher auxin on shaded side → more cell elongation → bending toward light"
                        }
                    },
                    modernExtension: {
                        description: "Modern scientists built on Darwin's work to discover auxin",
                        boysenJensen1913: "Showed signal can pass through gelatin (permeable) but not mica (impermeable) → chemical signal",
                        paal1919: "Tip placed asymmetrically causes curvature → substance can be isolated",
                        went1926: "Collected diffusible substance in agar, showed it promotes growth → named 'auxin'",
                        currentUnderstanding: "Phototropins (blue light receptors) trigger auxin redistribution via PIN protein relocalization"
                    },
                    realWorldSignificance: [
                        "Explains why houseplants lean toward windows",
                        "Understanding allows farmers to optimize plant spacing for light",
                        "Foundation for modern plant hormone research",
                        "Led to development of synthetic auxins (rooting hormones, herbicides)",
                        "Demonstrates scientific method: careful experimentation reveals mechanisms"
                    ],
                    extensions: [
                        "Test different wavelengths of light (blue most effective for phototropism)",
                        "Vary light intensity and measure dose-response",
                        "Test other species (sunflower, tomato, bean)",
                        "Investigate time course: when does bending begin?",
                        "Research Went's auxin bioassay method (Avena curvature test)",
                        "Explore modern molecular biology: phototropin genes, PIN proteins"
                    ],
                    troubleshooting: [
                        "No bending in control: Light may not be unidirectional enough, check box",
                        "All treatments bend: Caps may not be light-tight, use thicker foil",
                        "Seedlings fall over: May be overwatered or too old, use younger seedlings",
                        "Variable results: Ensure seedlings are same age and size, increase sample size",
                        "Tips dry out after cutting: Apply small amount of lanolin to cut surface"
                    ],
                    assessmentQuestions: [
                        "Why did Darwin cover just the tip instead of the whole seedling?",
                        "What does Experiment 4 (base covered) tell us that Experiment 2 (tip covered) doesn't?",
                        "How did Darwin's experiments support the idea of a 'transmitted influence'?",
                        "Design an experiment to test whether the signal is chemical or electrical (hint: use barriers)",
                        "How would you modify this experiment to identify the chemical nature of the signal?"
                    ]
                }
            },

            // ========================================
            // GRAVITROPISM EXPERIMENTS
            // ========================================
            
            knight_rotating_wheel: {
                name: "Knight's Rotating Wheel - Separating Gravity from Other Factors",
                relatedTopics: ['gravitropism', 'auxin_transport'],
                category: 'historical_gravitropism',
                historicalBackground: {
                    scientist: "Thomas Andrew Knight",
                    year: "1806",
                    title: "Knight's Wheel or Knight's Klinostat",
                    context: "Knight wanted to determine if gravity itself causes roots to grow down and shoots to grow up, or if some other factor (e.g., moisture, darkness for roots) was responsible",
                    question: "Is gravity the directional cue for root and shoot orientation?",
                    hypothesis: "If gravity is the cue, then eliminating its directional effect should result in disoriented growth",
                    innovation: "Used a rotating wheel (early klinostat/clinostat) to subject plants to centrifugal force greater than gravity",
                    observation: "Roots grew outward (away from center), shoots grew inward (toward center) - opposite to normal gravity response",
                    interpretation: "Plants respond to directional force. When centrifugal force > gravity, plants orient according to centrifugal force",
                    conclusion: "Gravity (or directional force) is the primary cue for root and shoot orientation",
                    significance: "First experimental demonstration that gravity itself, not correlated factors, controls plant orientation",
                    nobelConnection: "This work laid groundwork for understanding gravitropism, though the molecular mechanisms (statoliths, auxin) weren't discovered until 20th century"
                },
                labExperiment: {
                    title: "Knight's Rotating Wheel Experiment - Demonstrating Gravitropism via Centrifugal Force",
                    hypothesis: "If gravity is the directional cue for plant growth orientation, then a stronger directional force (centrifugal) will override gravity and cause roots/shoots to orient according to that force",
                    purpose: "Demonstrate that plants respond to directional force (gravity or centrifugal), and that gravity is the normal cue for root/shoot orientation",
                    background: {
                        gravitropism: "Roots: positive (grow down), Shoots: negative (grow up)",
                        normalCondition: "Gravity provides constant downward force",
                        knightIdea: "Rotate plants so centrifugal force > gravity → new directional cue",
                        prediction: "Roots grow outward (direction of centrifugal force), shoots grow inward (opposite)"
                    },
                    variables: {
                        independent: "Rotation speed (determines centrifugal force magnitude)",
                        dependent: "Direction of root and shoot growth (angle relative to wheel radius)",
                        controlled: ["Plant species", "Seedling age", "Temperature", "Light (keep in dark to isolate gravitropism)", "Humidity"]
                    },
                    materials: [
                        "Rotating platform: lazy Susan, pottery wheel, or electric motor with wheel",
                        "Speed control for motor (variable speed is ideal)",
                        "Seedlings: bean, pea, corn, or wheat (2-5 days old, roots 2-3 cm)",
                        "Petri dishes or small pots",
                        "Moist filter paper, cotton, or agar",
                        "Pins or tape to secure seedlings to wheel",
                        "Cardboard or foam board to mount seedlings on wheel",
                        "Dark enclosure (box) to cover wheel (eliminate phototropism)",
                        "Protractor or ruler to measure angles",
                        "Camera to document growth",
                        "Tachometer or smartphone app to measure rotation speed (RPM)",
                        "Graph paper (to plot results)"
                    ],
                    safetyPrecautions: [
                        "Secure wheel properly to prevent wobbling or detachment",
                        "Do not exceed safe rotation speed (motor/wheel rated speed)",
                        "Adult supervision if using electrical motor",
                        "Ensure wheel is balanced to prevent vibration",
                        "Keep fingers away from rotating parts"
                    ],
                    procedure: [
                        "SEEDLING PREPARATION:",
                        "Germinate seeds on moist filter paper in Petri dishes 3-5 days before experiment",
                        "Keep in darkness to avoid phototropic effects",
                        "Select seedlings with straight roots 2-3 cm long",
                        "Handle gently to avoid damaging root tips",
                        "",
                        "WHEEL SETUP:",
                        "Mount cardboard circle on rotating platform (lazy Susan or motor)",
                        "Divide circle into sections (e.g., 8 sections for 8 seedlings)",
                        "For each seedling:",
                        "  - Pin or tape seedling with root pointing TANGENTIAL to circle (perpendicular to radius)",
                        "  - Position seedling so root is horizontal relative to ground",
                        "  - Ensure shoot also horizontal",
                        "  - Cover roots with moist cotton or place on moist filter paper",
                        "Orient seedlings so that initially, roots point in random directions (not all same way)",
                        "Enclose entire setup in dark box to eliminate light effects",
                        "",
                        "CONTROL GROUP (Non-Rotating):",
                        "Mount 4-6 seedlings on stationary platform (not rotating)",
                        "Orient seedlings HORIZONTALLY (root and shoot both horizontal)",
                        "Keep in darkness same as experimental group",
                        "This controls for normal gravitropic response",
                        "",
                        "ROTATION:",
                        "Start rotation at moderate speed: 30-100 RPM (revolutions per minute)",
                        "Higher RPM = stronger centrifugal force (can calculate g-force)",
                        "Maintain constant rotation speed",
                        "Duration: 24-48 hours continuous rotation",
                        "Monitor: Check that setup remains stable, seedlings stay moist",
                        "",
                        "OBSERVATION:",
                        "Stop rotation after 24-48 hours",
                        "Carefully observe and photograph seedling orientations",
                        "Measure angles:",
                        "  - Root angle relative to radius (outward = 0°, tangent = 90°, inward = 180°)",
                        "  - Shoot angle relative to radius",
                        "Compare to control (non-rotating) seedlings",
                        "",
                        "CALCULATING CENTRIFUGAL FORCE:",
                        "Centrifugal acceleration a = ω²r",
                        "  where ω = angular velocity (rad/s) = 2π × RPM / 60",
                        "  r = radius from center to seedling (cm)",
                        "  a is in cm/s², convert to 'g' units by dividing by 980 cm/s²",
                        "Example: 60 RPM, r = 10 cm",
                        "  ω = 2π × 60 / 60 = 6.28 rad/s",
                        "  a = (6.28)² × 10 = 394 cm/s² = 0.4 g",
                        "For centrifugal force > gravity, need a > 1 g (~ >95 RPM at r=10cm)"
                    ],
                    expectedResults: {
                        rotatingWheel: {
                            roots: "Grow OUTWARD from center (in direction of centrifugal force) - positive gravitropism response to centrifugal 'gravity'",
                            shoots: "Grow INWARD toward center (opposite to centrifugal force) - negative gravitropism response",
                            angles: "Roots approach ~0° (radial outward), shoots approach ~180° (radial inward)"
                        },
                        control: {
                            roots: "Grow DOWNWARD (positive gravitropism in Earth's gravity)",
                            shoots: "Grow UPWARD (negative gravitropism in Earth's gravity)",
                            angles: "Roots ~270° (down), shoots ~90° (up) relative to initial horizontal position"
                        }
                    },
                    dataTable: [
                        ["Condition", "Force Direction", "Root Growth Direction", "Shoot Growth Direction", "Interpretation"],
                        ["Stationary (Control)", "Gravity (down)", "Downward (positive)", "Upward (negative)", "Normal gravitropism"],
                        ["Rotating (slow, <1g)", "Gravity dominates", "Slightly affected", "Slightly affected", "Gravity still main cue"],
                        ["Rotating (fast, >1g)", "Centrifugal (outward)", "Outward (positive)", "Inward (negative)", "Centrifugal force overrides gravity"],
                        ["Clinostat (slow rotation)", "Gravity averaged to zero", "Random/horizontal", "Random/horizontal", "No directional cue"]
                    ],
                    observations: [
                        "Roots on rotating wheel grow outward (away from center)",
                        "Shoots on rotating wheel grow inward (toward center)",
                        "This is OPPOSITE to their positions on wheel rim, but CONSISTENT with their gravitropic nature",
                        "Roots respond positively (toward force), shoots negatively (away from force)",
                        "Control seedlings: roots down, shoots up (normal gravity response)",
                        "Speed matters: faster rotation = stronger centrifugal force = clearer response"
                    ],
                    analysis: {
                        interpretation: [
                            "Plants perceive DIRECTIONAL FORCE, not specifically 'gravity'",
                            "When centrifugal force > gravity, plants reorient according to centrifugal force",
                            "Roots always grow toward greater force (positive gravitropism)",
                            "Shoots always grow away from greater force (negative gravitropism)",
                            "This proves gravity is the normal cue, but plants respond to force direction generally"
                        ],
                        mechanism: "Statoliths (amyloplasts) sediment in direction of net force → triggers auxin redistribution → differential growth",
                        modernUnderstanding: {
                            perception: "Statocytes in root cap (and shoot endodermis) sense direction of force via statolith sedimentation",
                            signal: "Auxin redistributes to side experiencing greater force",
                            response: "Root: high auxin inhibits growth → curves toward force; Shoot: high auxin promotes growth → curves away"
                        }
                    },
                    knightConclusion: "Knight concluded that gravity itself (or directional force) controls plant orientation. Roots and shoots respond oppositely to the same cue.",
                    modernRelevance: {
                        spaceBiology: "In microgravity (ISS), plants show disoriented growth - confirms gravity is key cue on Earth",
                        clinostat: "Slow rotation (1-2 RPM) averages gravity to near-zero - used to simulate microgravity in labs",
                        centrifuge: "Fast rotation (hypergravity) - used to study dose-response of gravitropism",
                        applications: "Design plant growth systems for space stations, understand crop lodging (falling over)"
                    },
                    extensions: [
                        "Vary rotation speed and measure response angle (dose-response curve)",
                        "Compare different plant species (monocots vs dicots)",
                        "Test effect of light (add unilateral light to see interaction of photo- and gravitropism)",
                        "Slow rotation (clinostat) to simulate microgravity",
                        "Research ISS plant growth experiments (VEGGIE, Advanced Plant Habitat)",
                        "Calculate minimum RPM needed to override gravity at different radii"
                    ],
                    mathematicalExtension: {
                        problem: "At what RPM does centrifugal force equal gravity at r = 10 cm?",
                        solution: [
                            "Set a = g (980 cm/s²)",
                            "ω²r = 980",
                            "ω² × 10 = 980",
                            "ω² = 98",
                            "ω = 9.9 rad/s",
                            "RPM = ω × 60 / (2π) = 9.9 × 60 / 6.28 = 94.6 RPM",
                            "Answer: ~95 RPM at r = 10 cm gives 1 g centrifugal force"
                        ]
                    },
                    realWorldApplications: [
                        "Space agriculture: growing food in microgravity or Mars gravity",
                        "Training astronauts: centrifuges create artificial gravity",
                        "Understanding plant lodging: crops falling over in wind",
                        "Gravitropic set-point angle: some organs grow at angles (branches, lateral roots)",
                        "Horticulture: controlling plant orientation for aesthetic or yield purposes"
                    ],
                    assessmentQuestions: [
                        "Why did Knight use a rotating wheel instead of just placing plants horizontally?",
                        "Explain why roots grow outward and shoots inward on a fast-rotating wheel",
                        "How does this experiment prove that gravity (not moisture or darkness) controls root growth direction?",
                        "Calculate the centrifugal force at 120 RPM with radius 15 cm. Is this greater than Earth's gravity?",
                        "Design an experiment to test if plants can distinguish between gravity and centrifugal force of same magnitude"
                    ]
                }
            },

            // ========================================
            // THIGMOTROPISM EXPERIMENTS
            // ========================================
            
            pea_tendril_coiling: {
                name: "Pea Tendril Coiling - Observing Thigmotropism in Real Time",
                relatedTopics: ['thigmotropism'],
                category: 'thigmotropism_observation',
                historicalBackground: {
                    context: "Climbing plants have been observed for centuries, but systematic study of thigmotropism began in 19th century",
                    darwin1875: "Charles Darwin described tendril movements in 'The Movements and Habits of Climbing Plants'",
                    observation: "Tendrils make spiral searching movements (circumnutation), then rapidly coil upon contact",
                    mechanism: "Contact triggers differential growth - contacted side grows slower",
                    significance: "Demonstrates plants can rapidly respond to mechanical stimulation with directional growth"
                },
                labExperiment: {
                    title: "Observing Thigmotropic Coiling in Pea Tendrils",
                    hypothesis: "Physical contact with a solid object will trigger directional coiling of pea tendrils around the support within hours",
                    purpose: "Observe and document thigmotropic response in real time, understand mechanism of tendril coiling",
                    background: {
                        tendril: "Modified leaf or stem structure for climbing",
                        thigmotropism: "Directional growth response to touch/contact",
                        circumnutation: "Spiral searching movement increases contact probability",
                        function: "Allows climbing plants to gain vertical support without thick stems"
                    },
                    variables: {
                        independent: "Presence/absence of support structure, type of support (thickness, texture)",
                        dependent: "Coiling response (yes/no), time to coiling, degree of coiling",
                        controlled: ["Plant age", "Tendril length", "Light", "Temperature", "Humidity"]
                    },
                    materials: [
                        "Pea plants (Pisum sativum) with developing tendrils (3-4 weeks old)",
                        "Small pots with potting soil",
                        "Supports of various materials: wooden dowels, pencils, string, wire, rough sticks",
                        "Supports of various thicknesses: 2mm, 5mm, 10mm, 20mm diameter",
                        "Camera or smartphone for time-lapse photography",
                        "Ruler or calipers to measure tendril length and coil diameter",
                        "Notebook for observations",
                        "Optional: video camera or webcam for continuous time-lapse",
                        "String or soft ties to support main plant stem (not tendrils)"
                    ],
                    safetyPrecautions: [
                        "Handle plants gently to avoid damaging tendrils",
                        "Ensure camera/lights don't overheat plants",
                        "Stable support for pots so they don't tip over"
                    ],
                    procedure: [
                        "PLANT PREPARATION:",
                        "Grow pea plants from seed (takes 3-4 weeks to produce tendrils)",
                        "Provide support for main stem (stake) but leave tendrils free",
                        "Keep plants healthy: adequate water, light, nutrients",
                        "Select plants with straight, actively growing tendrils 5-10 cm long",
                        "",
                        "EXPERIMENT 1: BASIC THIGMOTROPIC RESPONSE",
                        "Select 5-10 plants with tendrils that are NOT yet coiled",
                        "For EXPERIMENTAL group:",
                        "  - Gently place a thin wooden dowel or pencil (5-10 mm diameter) within reach of tendril",
                        "  - Position so tendril will encounter support during circumnutation (spiral searching)",
                        "  - Do NOT force contact - let tendril find support naturally over several hours",
                        "For CONTROL group:",
                        "  - Leave tendrils without any support nearby",
                        "  - Observe if tendrils remain straight or coil spontaneously (they shouldn't)",
                        "",
                        "OBSERVATION:",
                        "Method 1 - Time-lapse photography:",
                        "  - Set up camera to take photo every 5-15 minutes for 24-48 hours",
                        "  - Ensure consistent lighting and camera angle",
                        "  - Compile photos into video to see coiling in action",
                        "Method 2 - Periodic observation:",
                        "  - Check and photograph tendrils every 1-2 hours during day",
                        "  - Record time of first contact",
                        "  - Record time when coiling is clearly visible",
                        "  - Record time when coiling is complete",
                        "  - Measure number of coils formed",
                        "",
                        "EXPERIMENT 2: EFFECT OF SUPPORT DIAMETER",
                        "Offer supports of different thickness to different tendrils:",
                        "  - Very thin (toothpick, 2mm)",
                        "  - Thin (pencil, 5-8mm)",
                        "  - Medium (wooden dowel, 10-15mm)",
                        "  - Thick (broom handle, 20-30mm)",
                        "Observe which tendrils successfully coil and how tightly",
                        "Hypothesis: Thinner supports may be easier to coil around",
                        "",
                        "EXPERIMENT 3: EFFECT OF SUPPORT MATERIAL/TEXTURE",
                        "Offer supports of same diameter but different materials:",
                        "  - Smooth (glass rod, plastic tube)",
                        "  - Rough (wood, natural stick with bark)",
                        "  - String or wire",
                        "Observe if texture affects coiling success or speed",
                        "",
                        "MEASUREMENT AND ANALYSIS:",
                        "For each coiled tendril, measure:",
                        "  - Time from contact to start of coiling",
                        "  - Time from start to complete coiling",
                        "  - Number of coils formed around support",
                        "  - Diameter of coils (how tight)",
                        "  - Formation of secondary coils (free portion between plant and support)",
                        "Calculate averages and compare treatments"
                    ],
                    expectedResults: {
                        control: "Tendrils continue circumnutation (spiral searching) but do not coil without contact",
                        experimental: {
                            contact: "Within minutes to hours of contact",
                            coiling: "Begins within 30 min to 2 hours after contact",
                            complete: "Several hours to overnight (6-24 hours) for full coiling",
                            primaryCoils: "2-10 coils around support (depending on tendril length)",
                            secondaryCoils: "Free portion often forms helical coils (spring-like)",
                            direction: "Coiling direction may vary (clockwise or counterclockwise)"
                        },
                        diameter: "Optimal support diameter ~5-15mm; too thin may be unstable, too thick may prevent tight coiling",
                        texture: "Rough surfaces may provide better grip, but smooth surfaces can also work"
                    },
                    dataTable: [
                        ["Support Type", "Diameter (mm)", "Contact Time", "Coiling Start", "Complete Coiling", "# Coils", "Success"],
                        ["Wooden dowel", "8", "2 hr", "3 hr", "18 hr", "6", "Yes"],
                        ["Pencil", "7", "1 hr", "2 hr", "16 hr", "7", "Yes"],
                        ["Glass rod", "6", "3 hr", "5 hr", "20 hr", "5", "Yes"],
                        ["String", "3", "1 hr", "2 hr", "12 hr", "8", "Yes"],
                        ["Thick stick", "25", "4 hr", "6 hr", "30 hr", "2", "Partial"],
                        ["None (control)", "N/A", "N/A", "N/A", "N/A", "0", "No"]
                    ],
                    observations: [
                        "Tendrils make spiral, searching movements (circumnutation) before contact",
                        "Upon contact with support, tendril begins to coil within hours",
                        "Contacted side grows SLOWER than free side → curvature around support",
                        "Free portions (between plant and support) often form helical coils",
                        "Coiling provides strong, flexible attachment - can support plant weight",
                        "Secondary coils act like springs - absorb shock from wind"
                    ],
                    mechanism: {
                        step1: "Circumnutation: tendril tip rotates in spiral, 'searching' for support",
                        step2: "Contact: mechanoreceptors on tendril surface detect solid object",
                        step3: "Signal: Calcium influx, hormonal changes (auxin, ethylene)",
                        step4: "Differential growth: contacted side inhibited, free side continues → coiling",
                        step5: "Secondary coiling: free portions form helical coils for flexibility"
                    },
                    analysis: {
                        whyCoil: [
                            "Provides attachment to support without thick, woody stem",
                            "Allows plant to climb and access light",
                            "Energy-efficient compared to self-supporting trunk",
                            "Flexible - coils act as springs, preventing breakage in wind"
                        ],
                        directionality: "Thigmotropism is DIRECTIONAL - response direction depends on contact location",
                        specificity: "Tendrils don't respond to air currents (distinguish solid support from wind)",
                        reversibility: "Coiling is irreversible (growth-based), unlike nastic movements"
                    },
                    realWorldSignificance: [
                        "Agriculture: peas, beans, cucumbers, grapes use tendrils for support - need trellises",
                        "Horticulture: training climbing plants for vertical gardens, green walls",
                        "Biomimicry: soft robots that grip via coiling, bio-inspired actuators",
                        "Ecology: climbing strategy allows plants to reach canopy without thick stems"
                    ],
                    extensions: [
                        "Compare tendril types: leaf tendrils (pea) vs stem tendrils (grape)",
                        "Investigate role of calcium using calcium channel blockers",
                        "Test effect of temperature on coiling speed",
                        "Measure strength of coiled tendril attachment",
                        "Research other thigmotropic responses: root cap touching barrier",
                        "Study adhesive tendrils (Virginia creeper) with adhesive pads"
                    ],
                    troubleshooting: [
                        "Tendrils not coiling: May be too young or too old; ensure actively growing tendrils",
                        "Tendrils bypass support: May not be in reach; adjust position or wait for circumnutation",
                        "Plants unhealthy: Ensure adequate light, water, nutrients",
                        "Coiling too slow to observe: Use time-lapse photography (every 10-15 min)"
                    ],
                    assessmentQuestions: [
                        "How does thigmotropism differ from phototropism in terms of stimulus and mechanism?",
                        "Why do tendrils form secondary coils (helical spring) in addition to wrapping around support?",
                        "Predict what would happen if you applied auxin inhibitors to one side of a tendril",
                        "Design an experiment to test whether tendril coiling requires light or can occur in darkness",
                        "Explain the adaptive advantage of circumnutation combined with thigmotropism"
                    ]
                }
            },

            // ========================================
            // GRAVITROPISM - STATOLITH EXPERIMENTS
            // ========================================
            
            statolith_visualization: {
                name: "Statolith Sedimentation - Visualizing Gravity Sensors in Roots",
                relatedTopics: ['gravitropism'],
                category: 'gravitropism_cellular',
                historicalBackground: {
                    discovery: "Statoliths (amyloplasts) as gravity sensors proposed early 20th century",
                    nemec1900: "Bohumil Němec proposed starch grains in root cap sense gravity",
                    haberlandt1900: "Gottlieb Haberlandt independently proposed same idea",
                    evidence: "Removal of starch or root cap abolishes gravitropism",
                    statolithHypothesis: "Dense starch-filled amyloplasts sediment in direction of gravity, triggering signal",
                    confirmation: "Modern microscopy and genetics confirm amyloplasts as gravity sensors"
                },
                labExperiment: {
                    title: "Observing Statoliths (Amyloplasts) in Root Cap Cells",
                    hypothesis: "Gravity-sensing cells (statocytes) in root cap contain dense, starch-filled organelles (statoliths) that sediment to the bottom of cells in response to gravity",
                    purpose: "Visualize statoliths in root cap columella cells and observe their sedimentation in response to gravity reorientation",
                    background: {
                        statocyte: "Specialized cell in root cap that perceives gravity",
                        statolith: "Dense, starch-filled amyloplast that acts as gravity sensor",
                        columella: "Central region of root cap containing statocytes",
                        mechanism: "Statoliths settle to bottom of cell → pressure on ER or mechanoreceptors → signal cascade → auxin redistribution → curvature"
                    },
                    variables: {
                        independent: "Root orientation (vertical, horizontal, inverted)",
                        dependent: "Position of statoliths within statocytes",
                        controlled: ["Plant species", "Root age", "Time since reorientation", "Temperature"]
                    },
                    materials: [
                        "Seedlings with roots 2-5 cm long: corn (Zea mays, best), wheat, oat, bean, or pea",
                        "Microscope slides and cover slips",
                        "Razor blade or scalpel (very sharp, for thin sectioning)",
                        "Iodine solution (Lugol's iodine or I₂KI) - stains starch blue-black",
                        "Dropper or pipette",
                        "Light microscope (100-400x magnification)",
                        "Kimwipes or filter paper",
                        "Petri dishes with moist filter paper (for germinating seeds)",
                        "Graph paper or camera for microscope",
                        "Optional: stage micrometer for calibration",
                        "Optional: polarized light microscope (amyloplasts are birefringent)"
                    ],
                    safetyPrecautions: [
                        "Razor blade is very sharp - handle carefully, cut away from body",
                        "Adult supervision required for sectioning",
                        "Iodine stains skin and clothing - wear gloves and apron",
                        "Dispose of blades in sharps container"
                    ],
                    procedure: [
                        "SEEDLING PREPARATION:",
                        "Germinate seeds on moist filter paper in Petri dish in darkness 3-5 days",
                        "Select seedlings with straight roots 3-5 cm long",
                        "For EXPERIMENT 1 (baseline, vertical roots):",
                        "  - Keep roots growing vertically downward until sampling",
                        "For EXPERIMENT 2 (reorientation):",
                        "  - Carefully rotate seedling so root is HORIZONTAL",
                        "  - Wait various times: 0 min (immediate), 15 min, 30 min, 1 hr, 2 hr",
                        "  - This allows observation of statolith sedimentation dynamics",
                        "",
                        "ROOT CAP SECTIONING (Freehand Longitudinal Section):",
                        "CAUTION: Very sharp blade, supervise carefully",
                        "1. Remove seedling from Petri dish, keep root moist",
                        "2. Place root tip on microscope slide",
                        "3. Using very sharp razor blade, make THIN longitudinal slice through root cap",
                        "   - Cut parallel to root axis, through center",
                        "   - Aim for thin enough section to see cells (50-100 μm thick)",
                        "   - The thinner the better for visibility",
                        "4. Discard thick outer sections, keep thinnest central portion",
                        "5. Multiple attempts may be needed to get good section",
                        "",
                        "STAINING:",
                        "1. Add drop of iodine solution to section on slide",
                        "2. Wait 1-2 minutes for starch to stain",
                        "3. Add cover slip gently (avoid bubbles)",
                        "4. Blot excess iodine from slide edges with Kimwipe",
                        "",
                        "MICROSCOPY:",
                        "1. Start with low power (40x or 100x) to locate root cap",
                        "2. Identify COLUMELLA region - central part of root cap",
                        "3. Switch to higher power (200-400x) to see individual statocytes",
                        "4. Look for:",
                        "   - Large cells with many dark-stained granules (amyloplasts/statoliths)",
                        "   - In vertical roots: statoliths at BOTTOM (rootward end) of cells",
                        "   - In horizontal roots (after waiting): statoliths sedimenting to new 'bottom'",
                        "5. Sketch or photograph cells showing statolith distribution",
                        "6. Compare vertical vs horizontal (at different times) roots",
                        "",
                        "QUANTIFICATION (Optional):",
                        "For more rigorous experiment:",
                        "- Photograph multiple statocytes (n=10-20 cells per treatment)",
                        "- Measure position of statolith cluster within cell (distance from each end)",
                        "- Calculate percentage of statoliths in bottom half vs top half of cell",
                        "- Compare across treatments and time points"
                    ],
                    expectedResults: {
                        verticalRoot: {
                            statolithPosition: "Clustered at bottom (rootward end) of statocytes",
                            distribution: ">80% of statoliths in lower half of cells",
                            appearance: "Dense cluster of blue-black stained granules at base of cells"
                        },
                        horizontalRoot: {
                            immediate0min: "Statoliths still at former 'bottom' (may appear on side now)",
                            after15_30min: "Statoliths beginning to sediment to new bottom",
                            after1_2hr: "Statoliths fully sedimented to new bottom (gravitational low point)",
                            distribution: "Progressively shift from side to bottom over time"
                        },
                        presentationTime: "Time for statoliths to sediment and trigger response: typically 5-30 minutes"
                    },
                    observations: [
                        "Columella cells are larger than surrounding root cap cells",
                        "Each statocyte contains many (10-50+) amyloplasts",
                        "Amyloplasts stain dark blue-black with iodine (starch)",
                        "In vertical roots, statoliths at bottom of cells",
                        "In horizontal roots, statoliths sediment to new bottom over time",
                        "Sedimentation visible within 15-30 minutes"
                    ],
                    dataTable: [
                        ["Root Orientation", "Time After Reorientation", "Statolith Position", "% in Bottom Half", "Interpretation"],
                        ["Vertical (control)", "N/A", "Bottom (rootward)", "85%", "Baseline, gravity downward"],
                        ["Horizontal", "0 min", "Side (old bottom)", "45%", "Just reoriented, not yet sedimented"],
                        ["Horizontal", "15 min", "Settling to new bottom", "60%", "Sedimentation in progress"],
                        ["Horizontal", "30 min", "Mostly at new bottom", "75%", "Nearly complete sedimentation"],
                        ["Horizontal", "1-2 hr", "New bottom", "85%", "Fully sedimented, ready for signal"]
                    ],
                    analysis: {
                        interpretation: [
                            "Statoliths are dense (starch-filled) and sediment in response to gravity",
                            "Sedimentation time (15-30 min) corresponds to 'presentation time' before gravitropic curvature",
                            "Position of statoliths correlates with direction of gravity",
                            "This supports statolith hypothesis of gravity sensing"
                        ],
                        mechanism: "Statoliths settle → pressure on ER/mechanoreceptors → Ca²⁺ signaling → PIN protein relocalization → auxin redistribution → curvature",
                        evidenceForStatoliths: [
                            "Removal of starch (in mutants) reduces gravitropism",
                            "High-starch mutants show enhanced gravitropism",
                            "Sedimentation rate correlates with gravitropic response time",
                            "No other obvious 'gravity sensor' candidates in statocytes"
                        ]
                    },
                    modernTechniques: {
                        confocalMicroscopy: "Live imaging of statoliths in real time",
                        greenFluorescentProtein: "GFP-tagged proteins to visualize statocytes and statoliths in living roots",
                        microgravity: "ISS experiments show statoliths don't sediment in space → no gravitropism"
                    },
                    realWorldSignificance: [
                        "Understanding gravitropism essential for space agriculture",
                        "Explains how roots find their way down in soil",
                        "Model for understanding mechanosensing in biology",
                        "Helps predict root architecture in agriculture"
                    ],
                    extensions: [
                        "Compare different species (monocots vs dicots)",
                        "Test effect of rotation (clinostat) - do statoliths remain suspended?",
                        "Investigate starch mutants - do they have fewer/smaller statoliths and reduced gravitropism?",
                        "Time-lapse microscopy of living roots to watch sedimentation in real time",
                        "Research space experiments (ISS) on plant gravitropism"
                    ],
                    troubleshooting: [
                        "Can't see statoliths: Section may be too thick, try thinner sections",
                        "No starch staining: Iodine may be too old, prepare fresh; or seedlings too old (starch depleted)",
                        "Root cap damaged: Handle roots gently, use fresh, healthy seedlings",
                        "Can't find columella: Look for central region of root cap, larger cells with many granules"
                    ],
                    assessmentQuestions: [
                        "Why do statoliths sediment (what makes them dense)?",
                        "How does statolith position inform the plant about gravity direction?",
                        "What would happen to gravitropism in a starchless mutant?",
                        "Explain how presentation time (statocyte) relates to response time (curvature)",
                        "Design an experiment to test if statoliths are necessary for gravitropism (hint: use mutants or chemicals to block starch synthesis)"
                    ]
                }
            },

            // ========================================
            // NYCTINASTY - SLEEP MOVEMENTS
            // ========================================
            
            bean_nyctinasty: {
                name: "Bean Leaf Sleep Movements - Nyctinasty and Circadian Rhythms",
                relatedTopics: ['nastic_movements'],
                category: 'nastic_movements',
                historicalBackground: {
                    observation: "Leaf 'sleep' movements known since ancient times",
                    deMairan1729: "Jean-Jacques d'Ortous de Mairan studied Mimosa pudica nyctinasty, showed it persists in constant darkness - first evidence of circadian clock",
                    linneaus1751: "Carl Linnaeus designed 'flower clock' based on opening/closing times of flowers",
                    darwin1880: "Charles Darwin studied nyctinasty in 'The Power of Movement in Plants'",
                    modernUnderstanding: "Nyctinasty controlled by circadian clock + light signals; mediated by pulvinus turgor changes",
                    significance: "Demonstrates plants have internal timekeeping and can track day/night cycles"
                },
                labExperiment: {
                    title: "Observing Nyctinastic Sleep Movements in Bean Plants",
                    hypothesis: "Bean leaves will exhibit circadian-controlled sleep movements - leaflets folding downward at night and opening during day, persisting even in constant conditions",
                    purpose: "Observe and document nyctinastic leaf movements, investigate role of circadian clock vs direct light response",
                    background: {
                        nyctinasty: "Sleep movements - daily leaf folding and opening",
                        circadianClock: "Internal ~24-hour biological timer",
                        pulvinus: "Swollen region at base of leaflet that controls movement via turgor",
                        function: "Possible water conservation, thermoregulation, or predator avoidance (debated)"
                    },
                    variables: {
                        independent: "Light condition (light/dark cycle, constant light, constant dark)",
                        dependent: "Leaf angle (open vs closed) over time",
                        controlled: ["Plant age", "Temperature", "Humidity", "Plant health"]
                    },
                    materials: [
                        "Bean plants (Phaseolus vulgaris) 2-3 weeks old with trifoliate leaves",
                        "Alternatively: Oxalis (wood sorrel), Mimosa pudica, or prayer plant (Maranta)",
                        "Camera or smartphone for time-lapse",
                        "Protractor or angle-measuring app",
                        "Light source with timer (for controlled light/dark cycles)",
                        "Dark chamber or closet (for constant darkness experiment)",
                        "Graph paper or spreadsheet for data",
                        "Optional: video camera for continuous recording"
                    ],
                    safetyPrecautions: [
                        "Ensure light/heat source doesn't overheat plants",
                        "Maintain adequate ventilation in dark chamber"
                    ],
                    procedure: [
                        "PLANT PREPARATION:",
                        "Grow bean plants from seed (takes 2-3 weeks to develop trifoliate leaves)",
                        "Keep in normal day/night cycle (e.g., 16h light / 8h dark or natural light)",
                        "Select healthy plants with fully expanded leaves",
                        "Allow plants to acclimate to experimental location for 2-3 days",
                        "",
                        "EXPERIMENT 1: NORMAL LIGHT/DARK CYCLE (Baseline Observation)",
                        "Setup:",
                        "  - Place plant in location with clear light/dark cycle",
                        "  - Mark one leaf for consistent observation",
                        "  - Set up camera for time-lapse (photo every 30-60 minutes)",
                        "Observation period: 3-5 days continuous",
                        "Recording:",
                        "  - Photograph plant from side view every hour (or use time-lapse)",
                        "  - Note time of day for each photo",
                        "  - Measure leaflet angle relative to horizontal or petiole",
                        "Expected pattern:",
                        "  - Day (lights on): Leaflets horizontal or slightly raised (open)",
                        "  - Evening (before lights off): Leaflets begin to fold downward",
                        "  - Night (lights off): Leaflets fully folded downward (closed, 'sleeping')",
                        "  - Morning (lights on): Leaflets open again",
                        "",
                        "EXPERIMENT 2: CONSTANT DARKNESS (Test for Circadian Control)",
                        "After 3-5 days in normal cycle, transfer plant to constant darkness",
                        "Continue time-lapse photography using very brief dim light or infrared",
                        "Prediction IF circadian-controlled:",
                        "  - Leaf movements should CONTINUE with ~24h rhythm even in constant dark",
                        "  - Rhythm may drift slightly (not exactly 24h - 'free-running' period)",
                        "  - Amplitude may decrease over time",
                        "Prediction IF purely light-driven:",
                        "  - Movements should STOP or become random in constant dark",
                        "Duration: 5-7 days in constant darkness",
                        "",
                        "EXPERIMENT 3: CONSTANT LIGHT (Alternative Test)",
                        "Transfer plant to constant light (24h light)",
                        "Continue time-lapse",
                        "Prediction: Circadian rhythm should continue, though may be affected by constant light",
                        "",
                        "DATA ANALYSIS:",
                        "For each time point, measure leaflet angle:",
                        "  - Open (day) position = 0° (horizontal)",
                        "  - Closed (night) = 60-90° (folded downward)",
                        "Plot leaflet angle vs time (hours or days)",
                        "Look for rhythmic pattern with ~24h period",
                        "In constant conditions, check if rhythm persists (evidence for circadian clock)"
                    ],
                    expectedResults: {
                        lightDarkCycle: {
                            day: "Leaflets open (horizontal, 0-20° angle)",
                            evening: "Leaflets begin folding (30-60° angle)",
                            night: "Leaflets fully folded (70-90° angle)",
                            morning: "Leaflets re-open",
                            period: "Exactly 24 hours (entrained to light/dark)"
                        },
                        constantDarkness: {
                            persistence: "Rhythm CONTINUES for several days",
                            period: "Approximately 24h, may drift to 23-25h ('free-running')",
                            amplitude: "May decrease over time (damping)",
                            interpretation: "Demonstrates internal circadian clock independent of light"
                        },
                        constantLight: {
                            persistence: "Rhythm may continue but often disrupted",
                            interpretation: "Light can override or modify clock"
                        }
                    },
                    dataTable: [
                        ["Time (hr)", "Light Condition", "Leaflet Angle (°)", "State"],
                        ["0 (6am)", "Light on", "10", "Open"],
                        ["6 (12pm)", "Light", "5", "Fully open"],
                        ["12 (6pm)", "Light", "15", "Open"],
                        ["14 (8pm)", "Light off", "45", "Closing"],
                        ["16 (10pm)", "Dark", "75", "Closed"],
                        ["18 (12am)", "Dark", "80", "Closed"],
                        ["24 (6am)", "Light on", "60", "Opening"],
                        ["26 (8am)", "Light", "20", "Open"],
                        ["...", "...", "...", "..."],
                        ["After transfer to constant dark:", "", "", ""],
                        ["48 (6am equiv)", "Dark", "15", "Open (rhythm continues!)"],
                        ["60 (6pm equiv)", "Dark", "70", "Closed (rhythm continues!)"],
                        ["72 (6am equiv)", "Dark", "25", "Open (rhythm persists)"]
                    ],
                    graphing: {
                        xAxis: "Time (hours or days)",
                        yAxis: "Leaflet angle (degrees from horizontal)",
                        expected: "Sinusoidal (wave) pattern with ~24h period",
                        analysis: [
                            "Calculate period (time from peak to peak or trough to trough)",
                            "Normal cycle: period = 24h (entrained)",
                            "Constant conditions: period may be 23-25h (free-running)",
                            "Amplitude: difference between open and closed angles"
                        ]
                    },
                    observations: [
                        "Leaflet position changes rhythmically with ~24h period",
                        "Rhythm persists in constant darkness (circadian clock)",
                        "Movements driven by turgor changes in pulvinus cells",
                        "K⁺ and Cl⁻ ions move between upper and lower motor cells",
                        "Water follows ions osmotically → turgor changes → bending"
                    ],
                    mechanism: {
                        motorCells: "Specialized cells in pulvinus at base of leaflets",
                        ionFlux: {
                            opening: "K⁺ and Cl⁻ enter LOWER motor cells → water follows → turgor increases → leaflet lifts",
                            closing: "K⁺ and Cl⁻ exit lower cells, enter UPPER cells → turgor shifts → leaflet folds down"
                        },
                        circadianClock: "Internal oscillator (~24h) controls ion channel activity",
                        lightInput: "Blue/red light receptors (phototropins, phytochromes) can reset or entrain clock"
                    },
                    analysis: {
                        circadianEvidence: [
                            "Rhythm continues in constant darkness → not simply light response",
                            "Period close to but not exactly 24h in constant conditions → internal timer",
                            "Can be entrained (reset) by light/dark cycles → responsive to environment"
                        ],
                        functionalSignificance: {
                            hypotheses: [
                                "Reduce water loss at night (less surface area)",
                                "Reduce radiative heat loss (conserve warmth)",
                                "Reduce predation by nocturnal herbivores",
                                "Reduce dew accumulation (fungal pathogen defense)"
                            ],
                            note: "Adaptive significance still debated"
                        }
                    },
                    realWorldSignificance: [
                        "Demonstrates plants have internal clocks (circadian rhythms)",
                        "Agriculture: understanding plant daily rhythms can optimize harvest, treatments",
                        "Chronobiology: plants as models for studying biological clocks",
                        "Ecology: anticipatory responses to day/night improve fitness"
                    ],
                    extensions: [
                        "Compare different species (beans, Oxalis, Mimosa, Albizzia)",
                        "Test effect of different light/dark cycle lengths (e.g., 20h or 28h cycles)",
                        "Measure ion concentrations in pulvinus cells (requires advanced techniques)",
                        "Investigate temperature compensation (circadian clocks maintain ~24h period across temperatures)",
                        "Research molecular clock genes (TOC1, CCA1, LHY in Arabidopsis)",
                        "Compare nyctinasty to phototropism (both involve light but different mechanisms)"
                    ],
                    historicalNote: "de Mairan (1729) showed Mimosa sleep movements persist in constant darkness - first evidence that living organisms have internal clocks independent of environmental cues",
                    assessmentQuestions: [
                        "How would you distinguish between a direct light response and a circadian rhythm?",
                        "Why does the rhythm period in constant darkness often drift from exactly 24 hours?",
                        "Explain the role of the pulvinus in nyctinastic movements",
                        "What would happen if you reversed the light/dark cycle (light at night, dark during day)?",
                        "Design an experiment to test if temperature affects the circadian period"
                    ]
                }
            }
        };

        // Link experiments to topics
        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.tropismExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.tropismTopics[topicId]) {
                    if (!this.tropismTopics[topicId].relatedExperiments) {
                        this.tropismTopics[topicId].relatedExperiments = [];
                    }
                    this.tropismTopics[topicId].relatedExperiments.push({
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
            phototropism: {
                'Basic Concept': [
                    'Thinking light pulls or attracts the plant (it\'s differential growth, not attraction)',
                    'Believing the bending part perceives light (tip perceives, base bends)',
                    'Confusing phototropism with photosynthesis',
                    'Thinking all light wavelengths equally effective (blue light is key)'
                ],
                'Mechanism': [
                    'Believing auxin is produced only on shaded side (it redistributes from lit to shaded)',
                    'Thinking cells on light side shrink (cells on shaded side elongate more)',
                    'Confusing auxin with energy or nutrients'
                ]
            },
            
            gravitropism: {
                'Direction': [
                    'Thinking roots grow down because they\'re heavy (it\'s active response to gravity)',
                    'Believing shoots grow up to reach light (negative gravitropism is primary, phototropism is secondary)',
                    'Confusing geotropism (old term) with gravitropism (same thing)'
                ],
                'Mechanism': [
                    'Thinking statoliths are rocks or minerals (they\'re starch-filled plastids)',
                    'Believing auxin affects roots and shoots the same way (shoots: promotes growth; roots: high auxin inhibits)',
                    'Thinking gravity sensing requires brain or nerve (plants use statoliths)'
                ]
            },
            
            thigmotropism: {
                'Response': [
                    'Confusing thigmotropism (directional growth) with thigmonasty (non-directional movement like Mimosa)',
                    'Thinking all plants have tendrils (only climbing plants)',
                    'Believing tendril coiling is reversible (it\'s growth-based, irreversible)'
                ],
                'Function': [
                    'Thinking climbing plants are parasites (they\'re not - they photosynthesize)',
                    'Believing tendrils sense nutrients in support (they sense physical contact)'
                ]
            },
            
            auxin: {
                'Transport': [
                    'Thinking auxin travels in xylem or phloem (it\'s cell-to-cell, not vascular)',
                    'Believing auxin transport is passive diffusion (it\'s active, requires energy and PIN proteins)',
                    'Confusing polar transport (directional) with xylem/phloem transport'
                ],
                'Effects': [
                    'Thinking auxin always promotes growth (in roots, high auxin inhibits)',
                    'Believing all plant parts respond the same to auxin (sensitivity varies)',
                    'Confusing auxin (hormone) with nutrients or vitamins'
                ]
            },
            
            nastic_movements: {
                'Mechanism': [
                    'Thinking nastic movements are growth-based (they\'re turgor-based, reversible)',
                    'Confusing nastic (non-directional) with tropic (directional) responses',
                    'Believing Mimosa folding is phototropism (it\'s thigmonasty - touch response)'
                ],
                'Timing': [
                    'Thinking all plant movements are slow (nastic can be very rapid - seconds)',
                    'Believing nyctinasty is purely light-driven (it\'s circadian clock + light)'
                ]
            },
            
            general_tropisms: {
                'Terminology': [
                    'Using "tropism" and "taxis" interchangeably (tropism is growth, taxis is locomotion)',
                    'Thinking tropisms are conscious decisions (they\'re automatic growth responses)',
                    'Confusing stimulus (light, gravity) with response (bending)'
                ],
                'Evolution': [
                    'Believing tropisms are learned behaviors (they\'re genetic, evolved responses)',
                    'Thinking all tropisms are beneficial (some may be neutral or context-dependent)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_demonstration: {
                method: 'Use time-lapse videos and diagrams to show actual plant movements',
                effectiveness: 'Very high - seeing is believing'
            },
            hands_on_experiments: {
                method: 'Students conduct Darwin\'s coleoptile experiments or observe their own plants',
                effectiveness: 'Very high - direct experience builds understanding'
            },
            analogy: {
                method: 'Compare to familiar concepts (e.g., thermostats for circadian clocks)',
                effectiveness: 'High for abstract concepts like hormones and signals'
            },
            molecular_models: {
                method: 'Show auxin structure, PIN proteins, phototropins at molecular level',
                effectiveness: 'High for advanced students'
            },
            comparative_analysis: {
                method: 'Side-by-side comparison tables (tropism vs nastic, positive vs negative)',
                effectiveness: 'High for distinguishing related concepts'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about how plants grow and move?",
                "What questions do you have about plant tropisms?",
                "Have you noticed plants bending toward light? What do you think causes this?",
                "How might tropisms be important for plant survival?"
            ],
            duringLearning: [
                "Does this mechanism make sense? Can you explain it in your own words?",
                "How does phototropism relate to gravitropism? Are the mechanisms similar?",
                "What's confusing about auxin transport?",
                "Can you think of an everyday example of a plant responding to its environment?"
            ],
            afterLearning: [
                "What were the main ideas about plant tropisms?",
                "What surprised you about how plants sense and respond to stimuli?",
                "What are you still unsure about?",
                "How would you design an experiment to test a tropism?",
                "How could you explain tropisms to a younger student?"
            ],
            experimentalDesign: [
                "What is your hypothesis?",
                "What are you testing (independent variable)?",
                "What are you measuring (dependent variable)?",
                "What do you need to keep the same (controlled variables)?",
                "How will you know if your hypothesis is supported?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            phototropism: [
                {
                    scenario: "Houseplant by Window",
                    context: "Your houseplant leans toward the window",
                    application: "Phototropism - auxin redistributes to shaded side, causing curvature toward light",
                    question: "Why does rotating the pot help keep the plant growing straighter?"
                },
                {
                    scenario: "Seedling Under Leaf Litter",
                    context: "How does a seedling find its way up through leaf litter and soil to reach sunlight?",
                    application: "Negative gravitropism (shoot grows up) + phototropism (bends toward any light)",
                    question: "Which tropism is more important for initial upward growth?"
                }
            ],
            
            gravitropism: [
                {
                    scenario: "Planting Seeds Upside Down",
                    context: "If you plant a seed upside down, will it still grow properly?",
                    application: "Yes - gravitropism ensures roots grow down and shoots grow up regardless of seed orientation",
                    question: "How do the roots 'know' which way is down?"
                },
                {
                    scenario: "Tree on Hillside",
                    context: "Trees on steep hillsides often grow with curved trunks",
                    application: "Young tree initially grows vertically (gravitropism), but if hillside shifts, tree reorients trunk via gravitropic response",
                    question: "Why doesn't the tree just grow perpendicular to the slope?"
                }
            ],
            
            thigmotropism: [
                {
                    scenario: "Pea Plants on Trellis",
                    context: "Why do farmers provide trellises for pea and bean crops?",
                    application: "Pea tendrils exhibit thigmotropism - coil around supports, allowing plant to climb",
                    question: "What would happen to pea plants without supports?"
                },
                {
                    scenario: "Grape Vines",
                    context: "Grape vines climb trees or trellises in vineyards",
                    application: "Stem tendrils show thigmotropism, allowing vines to reach sunlight",
                    question: "How does this climbing strategy benefit the plant compared to growing a thick trunk?"
                }
            ],
            
            auxin: [
                {
                    scenario: "Rooting Hormone for Cuttings",
                    context: "Gardeners use rooting hormone powder when propagating plants from cuttings",
                    application: "Contains synthetic auxin (IBA or NAA) that promotes adventitious root formation",
                    question: "Why does auxin specifically promote root growth in this context?"
                },
                {
                    scenario: "Weed Killer (2,4-D)",
                    context: "Broadleaf weed killers kill dandelions but not grass",
application: "Synthetic auxin (2,4-D) causes uncontrolled growth in broadleaf plants (dicots) but not grasses (monocots)",
question: "Why are monocots (grasses) resistant to auxin-type herbicides?"
}
],
nastic_movements: [
            {
                scenario: "Mimosa pudica Folding",
                context: "Sensitive plant (Mimosa) folds leaves when touched",
                application: "Thigmonasty - rapid turgor changes in pulvinus cause folding",
                question: "How might this rapid movement protect the plant from herbivores?"
            },
            {
                scenario: "Prayer Plant at Night",
                context: "Prayer plant (Maranta) leaves fold upward at night",
                application: "Nyctinasty controlled by circadian clock + light signals",
                question: "Why might the plant 'sleep' with leaves folded?"
            }
        ],
        
        space_biology: [
            {
                scenario: "Growing Plants on the ISS",
                context: "Astronauts grow vegetables on International Space Station in microgravity",
                application: "Without gravity cue, plants show disoriented growth - LED lights provide directional cue (phototropism)",
                question: "Why is understanding tropisms important for space agriculture?"
            },
            {
                scenario: "Future Mars Colony",
                context: "Mars has only 38% of Earth's gravity",
                application: "Will plants still sense gravity and show gravitropism in reduced gravity?",
                question: "How might we test plant gravitropism sensitivity to different g-forces?"
            }
        ]
    };
}

initializeAssessmentRubrics() {
    this.assessmentRubrics = {
        knowledgeLevel: {
            remember: {
                description: "Recall facts, terms, basic concepts",
                verbs: ["Define", "List", "Identify", "Name", "State"],
                example: "Define phototropism"
            },
            understand: {
                description: "Explain ideas or concepts",
                verbs: ["Explain", "Describe", "Summarize", "Compare", "Classify"],
                example: "Explain how auxin causes phototropic curvature"
            },
            apply: {
                description: "Use information in new situations",
                verbs: ["Calculate", "Solve", "Demonstrate", "Predict", "Use"],
                example: "Predict what happens if you remove the tip of a coleoptile before exposing it to unilateral light"
            },
            analyze: {
                description: "Draw connections among ideas",
                verbs: ["Analyze", "Differentiate", "Organize", "Compare", "Contrast"],
                example: "Analyze how phototropism and gravitropism interact when a seedling is growing horizontally"
            },
            evaluate: {
                description: "Justify a decision or course of action",
                verbs: ["Evaluate", "Critique", "Judge", "Defend", "Assess"],
                example: "Evaluate the evidence supporting the Cholodny-Went theory of phototropism"
            },
            create: {
                description: "Produce new or original work",
                verbs: ["Design", "Construct", "Create", "Develop", "Formulate"],
                example: "Design an experiment to test whether blue or red light is more effective for phototropism"
            }
        },
        
        understandingLevels: {
            novice: {
                characteristics: [
                    "Knows basic vocabulary (tropism, auxin, phototropism)",
                    "Can describe what happens but not why",
                    "May confuse similar concepts (tropism vs taxis)"
                ],
                support: [
                    "Provide clear definitions and examples",
                    "Use visual aids and demonstrations",
                    "Start with hands-on observations before theory"
                ]
            },
            developing: {
                characteristics: [
                    "Understands basic mechanisms (auxin redistribution)",
                    "Can explain phototropism and gravitropism separately",
                    "Beginning to connect concepts (auxin involved in multiple tropisms)"
                ],
                support: [
                    "Challenge with comparative questions",
                    "Introduce experimental design",
                    "Explore molecular mechanisms"
                ]
            },
            proficient: {
                characteristics: [
                    "Integrates multiple concepts (hormones, cell biology, environmental signals)",
                    "Can design experiments and predict outcomes",
                    "Understands ecological and evolutionary significance"
                ],
                support: [
                    "Present complex scenarios (multiple stimuli)",
                    "Encourage critical analysis of research",
                    "Explore applications (agriculture, space biology)"
                ]
            },
            expert: {
                characteristics: [
                    "Synthesizes across plant biology (tropisms, development, ecology)",
                    "Critiques experimental design and interprets data",
                    "Connects to molecular mechanisms (phototropins, PIN proteins, signaling)"
                ],
                support: [
                    "Engage with primary literature",
                    "Design original research questions",
                    "Explore cutting-edge topics (optogenetics, synthetic biology)"
                ]
            }
        },
        
        experimentalSkills: {
            planning: {
                novice: "Follows procedure with guidance",
                proficient: "Modifies procedure appropriately",
                expert: "Designs novel experiments independently"
            },
            observation: {
                novice: "Records obvious changes",
                proficient: "Makes detailed, quantitative observations",
                expert: "Identifies subtle patterns and anomalies"
            },
            analysis: {
                novice: "States whether results match prediction",
                proficient: "Analyzes data statistically and graphically",
                expert: "Identifies sources of error, proposes alternative explanations"
            },
            communication: {
                novice: "Describes what was done",
                proficient: "Explains results in context of hypothesis",
                expert: "Critiques methods, proposes future directions"
            }
        }
    };

    this.assessmentQuestions = {
        phototropism: {
            remember: "List the steps in Darwin's canary grass experiment",
            understand: "Explain why covering the tip of a coleoptile prevents phototropic bending",
            apply: "Predict the growth pattern of a seedling exposed to light from two opposite sides",
            analyze: "Compare the Cholodny-Went theory with modern understanding of phototropin-mediated auxin redistribution",
            evaluate: "Evaluate whether Darwin's experiments definitively proved that a chemical signal mediates phototropism",
            create: "Design an experiment to determine which wavelength of light is most effective for phototropism"
        },
        
        gravitropism: {
            remember: "Define statolith and statocyte",
            understand: "Explain why roots and shoots respond oppositely to the same auxin redistribution in gravitropism",
            apply: "Predict root and shoot growth direction on Knight's rotating wheel at 2g centrifugal force",
            analyze: "Analyze how presentation time relates to statolith sedimentation rate",
            evaluate: "Evaluate the evidence for the statolith hypothesis of gravity sensing",
            create: "Design an experiment to test gravitropism in reduced gravity (Mars simulation)"
        },
        
        thigmotropism: {
            remember: "Name three plants that exhibit thigmotropism via tendrils",
            understand: "Explain how differential growth causes tendril coiling",
            apply: "Predict what happens if you apply auxin to one side of a tendril",
            analyze: "Compare thigmotropism (tendril coiling) with thigmonasty (Mimosa folding)",
            evaluate: "Evaluate the adaptive advantages of climbing via thigmotropism versus growing a self-supporting trunk",
            create: "Design a bio-inspired soft robot that grips via thigmotropic-like coiling"
        },
        
        auxin: {
            remember: "State the chemical name for auxin (IAA)",
            understand: "Explain how PIN proteins determine the direction of auxin transport",
            apply: "Predict the effect of applying auxin transport inhibitors on phototropism",
            analyze: "Analyze why the same auxin concentration promotes shoot growth but inhibits root growth",
            evaluate: "Evaluate synthetic auxins as herbicides: effectiveness and environmental concerns",
            create: "Design a method to visualize auxin distribution in living plant tissues"
        },
        
        nastic_movements: {
            remember: "Define nyctinasty and give an example",
            understand: "Explain how turgor changes in the pulvinus cause leaf folding in Mimosa",
            apply: "Predict what happens to nyctinastic rhythms in constant darkness",
            analyze: "Compare the mechanisms of tropic responses (growth-based) versus nastic movements (turgor-based)",
            evaluate: "Evaluate the evidence that nyctinasty is controlled by a circadian clock",
            create: "Design an experiment to test whether temperature affects the circadian period of nyctinasty"
        }
    };
}

// ========================================
// HANDLER METHODS FOR EACH TOPIC
// ========================================

handlePhototropism(problem) {
    const content = {
        topic: "Phototropism",
        category: 'directional_growth',
        summary: "Phototropism is the directional growth response of plants toward or away from light. It is primarily mediated by the redistribution of the plant hormone auxin, triggered by blue light perception via phototropin receptors.",
        
        definition: {
            phototropism: "Directional growth response to light stimulus",
            positive: "Growth toward light (typical of shoots)",
            negative: "Growth away from light (some roots)",
            adaptive: "Optimizes light capture for photosynthesis"
        },
        
        historicalDevelopment: {
            darwin1880: {
                contribution: "Demonstrated tip perceives light, but bending occurs below tip",
                experiment: "Covered/removed tips of grass coleoptiles",
                conclusion: "Some 'influence' transmitted from tip to bending region"
            },
            boysenJensen1913: {
                contribution: "Showed signal is chemical, can diffuse through gelatin",
                experiment: "Inserted mica (impermeable) vs gelatin (permeable) barriers"
            },
            paal1919: {
                contribution: "Tip produces growth-promoting substance",
                experiment: "Asymmetric placement of tip causes curvature"
            },
            went1926: {
                contribution: "Isolated and quantified auxin",
                experiment: "Collected diffusible substance in agar blocks",
                method: "Avena curvature test - bioassay for auxin"
            },
            cholodnyWent1920s: {
                theory: "Light causes lateral redistribution of auxin to shaded side",
                mechanism: "Higher auxin → more elongation → curvature"
            },
            modern1990s2000s: {
                discovery: "Phototropins identified as blue light receptors",
                mechanism: "Phototropin activation → PIN protein relocalization → lateral auxin transport"
            }
        },
        
        mechanism: {
            step1_lightPerception: {
                receptor: "Phototropin 1 and 2 (phot1, phot2)",
                location: "Shoot apex cells",
                wavelength: "Blue light (400-500 nm) most effective",
                activation: "Light causes phototropin autophosphorylation"
            },
            step2_signalTransduction: {
                process: "Phototropin phosphorylates downstream targets",
                effect: "Triggers relocalization of PIN3 auxin efflux carriers",
                result: "Change in polarity of auxin transport"
            },
            step3_auxinRedistribution: {
                mechanism: "PIN3 proteins move to lateral cell faces",
                direction: "Auxin flows from lit side to shaded side",
                gradient: "Higher auxin concentration on shaded side"
            },
            step4_differentialGrowth: {
                auxinEffect: "Auxin activates H⁺-ATPase pumps",
                acidGrowth: "Cell wall acidified to pH ~4.5",
                expansins: "Acid activates expansin proteins that loosen cell walls",
                turgor: "Cell expansion driven by turgor pressure",
                result: "Shaded side cells elongate more → curvature toward light"
            }
        },
        
        cholodnyWentTheory: {
            proposal: "Unilateral light causes lateral redistribution of auxin from illuminated to shaded side",
            predictions: [
                "Higher auxin on shaded side",
                "Auxin promotes cell elongation",
                "Differential elongation causes curvature"
            ],
            evidence: [
                "Auxin can be collected from shaded side in higher amounts",
                "Applying auxin asymmetrically mimics phototropic curvature",
                "Auxin transport inhibitors block phototropism"
            ],
            status: "Generally accepted, though molecular details have been refined"
        },
        
        acidGrowthHypothesis: {
            description: "Auxin promotes cell elongation by acidifying the cell wall",
            mechanism: [
                "Auxin binds TIR1/AFB receptors",
                "Triggers degradation of Aux/IAA repressor proteins",
                "Releases ARF transcription factors",
                "ARFs activate genes for H⁺-ATPase and other growth proteins",
                "Proton pumps acidify cell wall",
                "Low pH activates expansins",
                "Wall loosens, turgor drives expansion"
            ],
            timeScale: "Rapid (15-30 min) and sustained (hours) phases",
            evidence: [
                "Auxin causes measurable acidification",
                "Acid buffers can promote growth without auxin",
                "Fusicoccin (H⁺-ATPase activator) mimics auxin"
            ]
        },
        
        photoreceptors: {
            phototropin1: {
                wavelength: "Blue light (450 nm peak)",
                role: "Low light phototropism",
                location: "Plasma membrane",
                structure: "LOV domains (Light-Oxygen-Voltage) bind FMN chromophore"
            },
            phototropin2: {
                wavelength: "Blue light",
                role: "High light phototropism, stomatal opening",
                location: "Plasma membrane"
            },
            mechanism: "Light absorption → conformational change → autophosphorylation → signaling"
        },
        
        ecologicalSignificance: [
            "Maximizes light capture for photosynthesis",
            "Seedlings grow toward light even when germinating in shade",
            "Competition: plants detect and grow toward canopy gaps",
            "Shade avoidance: response to low red:far-red ratio",
            "Indoor plants lean toward windows"
        ],
        
        comparison: {
            positiveVsNegative: {
                shoots: "Positive phototropism (toward light) - adaptive for light capture",
                roots: "Negative phototropism (away from light) - adaptive for soil penetration",
                note: "Root phototropism less studied than shoot"
            }
        },
        
        applications: [
            "Agriculture: optimize plant spacing and light distribution",
            "Horticulture: control plant shape and growth direction",
            "Space biology: light as directional cue in microgravity",
            "Understanding shade avoidance syndrome",
            "Plant architecture in dense plantings"
        ],
        
        relatedExperiments: this.getRelatedExperiments('phototropism')
    };
    
    return content;
}

handleGravitropism(problem) {
    const content = {
        topic: "Gravitropism",
        category: 'directional_growth',
        summary: "Gravitropism (geotropism) is the directional growth response to gravity. Roots exhibit positive gravitropism (grow downward), while shoots show negative gravitropism (grow upward). This ensures proper orientation regardless of seed planting position.",
        
        definition: {
            gravitropism: "Directional growth response to gravity",
            positiveGravitropism: "Growth in direction of gravity (downward) - roots",
            negativeGravitropism: "Growth opposite to gravity (upward) - shoots",
            significance: "Ensures roots access water/nutrients, shoots access light"
        },
        
        gravitySensing: {
            location: {
                roots: "Root cap columella cells (statocytes)",
                shoots: "Endodermis cells (starch sheath)"
            },
            sensor: {
                statolith: "Dense, starch-filled amyloplast",
                mechanism: "Statoliths sediment in direction of gravity",
                presentationTime: "5-30 minutes for sedimentation and signal initiation"
            },
            statolithHypothesis: {
                proposed: "Němec (1900), Haberlandt (1900)",
                idea: "Starch grains act as gravity sensors",
                evidence: [
                    "Starchless mutants have reduced gravitropism",
                    "High-starch mutants show enhanced gravitropism",
                    "Sedimentation time matches presentation time",
                    "No other obvious dense organelles in statocytes"
                ]
            }
        },
        
        mechanism: {
            rootGravitropism: {
                perception: {
                    location: "Root cap columella statocytes",
                    sensor: "Amyloplasts sediment to lower side of cell",
                    pressure: "Statoliths contact ER or mechanosensitive channels",
                    signal: "Triggers calcium signaling cascade"
                },
                transduction: {
                    calcium: "Ca²⁺ spikes in response to reorientation",
                    PINproteins: "PIN3, PIN7 relocalize to redirect auxin flow",
                    auxinRedistribution: "Auxin accumulates on lower side of horizontal root"
                },
                response: {
                    paradox: "Roots more sensitive to auxin than shoots",
                    effect: "HIGH auxin on lower side INHIBITS elongation",
                    result: "Lower side grows slower → root curves downward",
                    biphasic: "Low auxin promotes root growth, high auxin inhibits"
                }
            },
            
            shootGravitropism: {
                perception: "Endodermal statocytes in shoot",
                auxinEffect: "Auxin accumulates on lower side",
                response: "Auxin PROMOTES elongation in shoots",
                result: "Lower side grows faster → shoot curves upward"
            }
        },
        
        auxinConcentrationEffect: {
            principle: "Same auxin redistribution causes opposite curvatures in roots vs shoots",
            shoots: {
                sensitivity: "Lower sensitivity to auxin",
                optimal: "~10⁻⁶ M auxin for maximum growth",
                curve: "Operating on rising part of dose-response curve",
                effect: "More auxin = more growth (within physiological range)"
            },
            roots: {
                sensitivity: "1000x more sensitive than shoots",
                optimal: "~10⁻⁹ M auxin for maximum growth",
                inhibitory: "Higher concentrations inhibit growth",
                curve: "Operating on peak and declining part of curve",
                effect: "More auxin can = less growth (supraoptimal inhibition)"
            },
            implication: "Lateral auxin redistribution causes downward root curvature but upward shoot curvature"
        },
        
        experimentalEvidence: {
            clinostat: {
                description: "Slowly rotating platform averages gravity to near-zero",
                speed: "1-4 RPM (slow rotation)",
                result: "Plants show no gravitropic curvature",
                conclusion: "Gravity provides directional cue",
                use: "Simulates microgravity in lab"
            },
            knightWheel: {
                scientist: "Thomas Andrew Knight (1806)",
                description: "Fast rotation creates centrifugal force > gravity",
                result: "Roots grow outward, shoots inward (following centrifugal 'gravity')",
                conclusion: "Plants respond to directional force, not specifically Earth's gravity"
            },
            spaceFlight: {
                observation: "Plants in microgravity (ISS) show disoriented growth",
                exception: "Some orientation from phototropism",
                conclusion: "Confirms gravity is primary orientation cue on Earth"
            },
            starchMutants: {
                observation: "Plants lacking starch in amyloplasts have reduced gravitropism",
                conclusion: "Starch-filled statoliths essential for gravity sensing"
            }
        },
        
        presentationTime: {
            definition: "Time required for statoliths to sediment and trigger gravitropic response",
            duration: "5-30 minutes typically",
            factors: [
                "Statolith density (more starch = faster)",
                "Cell size",
                "Cytoplasmic viscosity",
                "Magnitude of gravitational acceleration"
            ],
            threshold: "Minimum reorientation angle to trigger response (~15-30°)"
        },
        
        ecologicalSignificance: [
            "Ensures seedlings establish proper orientation regardless of how seed lands",
            "Roots penetrate soil for water and nutrients",
            "Shoots emerge from soil to access light",
            "Recovery from lodging (plants blown over by wind/rain)",
            "Branch angles controlled by gravitropic set-point angle"
        ],
        
        setPointAngle: {
            description: "Some organs grow at specific angle relative to gravity",
            examples: [
                "Lateral roots: often 45-60° from vertical",
                "Lateral branches: species-specific angles",
                "Rhizomes: horizontal growth"
            ],
            mechanism: "Balance between gravitropism and other factors (light, growth patterns)",
            significance: "Creates species-specific architecture"
        },
        
        applications: [
            "Space agriculture: growing crops without gravity cue",
            "Understanding lodging resistance in crops",
            "Root architecture engineering for drought tolerance",
            "Plant breeding: optimizing root/shoot angles",
            "Horticulture: training plant growth direction"
        ],
        
        relatedExperiments: this.getRelatedExperiments('gravitropism')
    };
    
    return content;
}

handleThigmotropism(problem) {
    const content = {
        topic: "Thigmotropism",
        category: 'directional_growth',
        summary: "Thigmotropism is directional growth in response to touch or contact stimulus. It is most famously exhibited by tendrils of climbing plants, which coil around supports after contact.",
        
        definition: {
            thigmotropism: "Directional growth response to touch/contact stimulus",
            function: "Enables climbing plants to attach to supports",
            reversibility: "Irreversible (growth-based), unlike nastic movements"
        },
        
        tendrilStructure: {
            types: {
                leafTendrils: "Modified leaves or leaflets (pea, sweet pea)",
                stemTendrils: "Modified stems (grape, cucumber, passion flower)",
                adhesiveTendrils: "Form adhesive pads at tips (Virginia creeper)"
            },
            specialization: "Tendrils are sensitive to touch but not wind (distinguish solid support)"
        },
        
        mechanism: {
            step1_contact: {
                detection: "Mechanoreceptors on tendril epidermal cells",
                specificity: "Responds to solid objects, not air currents",
                threshold: "Light touch sufficient, but repeated/sustained better"
            },
            step2_signaling: {
                immediate: "Calcium influx within seconds of contact",
                visualization: "Can be seen with Ca²⁺-sensitive fluorescent dyes",
                hormones: "Auxin and ethylene levels change",
                cascade: "Ca²⁺ → calmodulin → downstream effectors"
            },
            step3_differentialGrowth: {
                contactedSide: "Growth INHIBITED",
                freeSide: "Growth CONTINUES",
                result: "Tendril curves around support (contacted side becomes concave)",
                timeScale: "Coiling begins within 30min-2hr, completes in 6-24hr"
            },
            step4_coiling: {
                primary: "Coils tightly around support object",
                secondary: "Free portions form helical coils (springs)",
                function: "Secondary coils provide flexibility and shock absorption"
            }
        },
        
        calciumRole: {
            touchResponse: "Mechanical stimulation opens Ca²⁺ channels",
            gradient: "Higher Ca²⁺ on contacted side",
            secondMessenger: "Ca²⁺ activates calmodulin and protein kinases",
            evidence: "Ca²⁺ channel blockers prevent thigmotropic coiling",
            visualization: "Aequorin (Ca²⁺-sensitive protein) shows Ca²⁺ waves"
        },
        
        circumnutation: {
            description: "Spiral, searching movement of growing shoot tip or tendril",
            mechanism: "Endogenous oscillation in growth rate around tendril circumference",
            period: "Can complete 360° rotation in 1-3 hours",
            function: "Increases probability of contacting support",
            interaction: "Circumnutation + thigmotropism = effective climbing strategy",
            discovery: "Described by Charles Darwin (1880)"
        },
        
        coilingMechanism: {
            primaryCoiling: {
                description: "Tendril wraps around support",
                direction: "Clockwise or counterclockwise (varies)",
                reversibility: "Irreversible (cell wall cross-linking)",
                strength: "Can support significant weight"
            },
            secondaryCoiling: {
                description: "Free portions form helical springs",
                pattern: "Often reverses direction midway (creates S-shape)",
                function: [
                    "Acts as spring - absorbs shock from wind",
                    "Prevents tendril breakage",
                    "Allows plant to sway without detaching"
                ],
                remarkable: "Can see reversing chirality along single tendril"
            }
        },
        
        ecologicalSignificance: [
            "Allows vertical growth without investing in thick, woody stems",
            "Access to light in crowded/shaded environments",
            "Energy efficient compared to self-supporting growth",
            "Rapid growth and colonization of support structures",
            "Flexible attachment withstands wind and movement"
           
        ],
        
        climbingStrategies: {
            tendrils: "Thigmotropic coiling (pea, grape, cucumber)",
            twiners: "Entire stem coils around support (morning glory, bean)",
            scramblers: "Use hooks or thorns (roses, brambles)",
            rootClimbers: "Adventitious roots attach (ivy)",
            leaners: "Lean on supports without specialized structures"
        },
        
        comparison: {
            thigmotropismVsThigmonasty: {
                thigmotropism: {
                    directionality: "DIRECTIONAL - response direction depends on stimulus location",
                    mechanism: "Growth-based (irreversible)",
                    examples: "Tendril coiling",
                    timeScale: "Hours to complete"
                },
                thigmonasty: {
                    directionality: "NON-DIRECTIONAL - response independent of stimulus direction",
                    mechanism: "Turgor-based (reversible)",
                    examples: "Mimosa leaf folding",
                    timeScale: "Seconds to minutes"
                }
            }
        },
        
        applications: [
            "Agriculture: designing trellises for climbing crops",
            "Horticulture: vertical gardens, green walls",
            "Biomimicry: soft robots with coiling grippers",
            "Architecture: living structures using climbing plants",
            "Understanding plant mechanosensing"
        ],
        
        relatedExperiments: this.getRelatedExperiments('thigmotropism')
    };
    
    return content;
}

handleHydrotropism(problem) {
    const content = {
        topic: "Hydrotropism",
        category: 'directional_growth',
        summary: "Hydrotropism is directional root growth toward regions of higher moisture or water potential. It is less understood than other tropisms but is critical for plant survival in water-limited environments.",
        
        definition: {
            hydrotropism: "Directional growth response to moisture gradient",
            positiveHydrotropism: "Growth toward higher moisture (typical of roots)",
            significance: "Allows roots to locate and exploit water sources in heterogeneous soil"
        },
        
        mechanism: {
            perception: {
                location: "Root cap, likely columella cells (same as gravitropism)",
                sensor: "Mechanism unknown - possibly osmotic sensors or water potential gradient",
                hypothesis: "Changes in cell membrane tension or water channel activity"
            },
            response: {
                auxinInvolvement: "Likely involves auxin redistribution (mechanism unclear)",
                curvature: "Root tip curves toward higher moisture",
                override: "Can override gravitropism under severe water stress"
            }
        },
        
        interactionWithGravitropism: {
            normalConditions: "Gravitropism dominates - roots grow straight down",
            waterStress: "Hydrotropism can override gravitropism when water gradient is strong",
            experiment: "If water is to the side, root may grow horizontally toward it",
            priority: "Demonstrates adaptive hierarchy - water > gravity alignment when water scarce",
            molecular: "Unknown how plant balances competing signals"
        },
        
        experimentalChallenges: {
            difficulty: "Hydrotropism harder to study than photo/gravitropism",
            reasons: [
                "Difficult to create stable, measurable moisture gradients",
                "Roots hidden in soil (hard to observe)",
                "Gravitropism confounds interpretation",
                "Molecular mechanisms poorly understood",
                "Fewer genetic mutants available"
            ],
            solutions: [
                "Use split-agar technique (moist vs dry halves)",
                "Clinostat to eliminate gravity",
                "Transparent gel media for observation",
                "Time-lapse imaging through clear containers"
            ]
        },
        
        experimentalEvidence: {
            splitAgar: {
                setup: "Root grows between two agar blocks - one moist, one dry",
                result: "Root curves toward moist agar",
                control: "Equal moisture - no curvature",
                conclusion: "Demonstrates positive hydrotropism"
            },
            clinostatWithMoisture: {
                setup: "Clinostat eliminates gravity, moisture gradient applied",
                result: "Root still curves toward moisture",
                conclusion: "Hydrotropism independent of gravitropism"
            },
            waterStress: {
                observation: "Under drought, roots grow toward water even if upward (against gravity)",
                significance: "Water acquisition prioritized over gravitropic orientation"
            }
        },
        
        ecologicalSignificance: [
            "Critical for seedling establishment in dry soils",
            "Locates and exploits patchy water sources",
            "Important in arid and semi-arid environments",
            "Enables survival during drought",
            "May guide deep rooting in water-limited conditions"
        ],
        
        molecularInsights: {
            ABA: {
                hormone: "Abscisic acid (stress hormone)",
                role: "Increases under water stress",
                effect: "May modulate hydrotropism sensitivity"
            },
            aquaporins: {
                proteins: "Water channel proteins",
                hypothesis: "May be involved in sensing water availability",
                distribution: "Expression patterns may change with moisture"
            },
            miz1mutant: {
                plant: "Arabidopsis miz1 mutant",
                phenotype: "Reduced hydrotropism, normal gravitropism",
                significance: "MIZ1 gene specifically required for hydrotropism",
                function: "Unknown, but separates hydro- from gravitropism genetically"
            }
        },
        
        applications: [
            "Drought resistance: breeding crops with enhanced hydrotropism",
            "Efficient irrigation: understanding root water foraging",
            "Ecological restoration: establishing plants in arid areas",
            "Climate adaptation: crops that find water more effectively",
            "Precision agriculture: predicting root growth patterns"
        ],
        
        futureResearch: [
            "Identify molecular mechanism of moisture sensing",
            "Understand integration of hydro- and gravitropic signals",
            "Characterize water potential gradient detection",
            "Develop genetic markers for hydrotropism",
            "Engineer enhanced hydrotropism for drought tolerance"
        ],
        
        relatedExperiments: this.getRelatedExperiments('hydrotropism')
    };
    
    return content;
}

handleChemotropism(problem) {
    const content = {
        topic: "Chemotropism",
        category: 'directional_growth',
        summary: "Chemotropism is directional growth in response to a chemical concentration gradient. The best-studied example is pollen tube growth toward the ovule, guided by chemical attractants secreted by the female gametophyte.",
        
        definition: {
            chemotropism: "Directional growth response to chemical gradient",
            significance: "Critical for successful sexual reproduction - ensures pollen tube reaches egg",
            specificity: "Species-specific recognition prevents cross-species fertilization"
        },
        
        pollenTubeGuidance: {
            overview: "Pollen tube must navigate from stigma through style to ovule micropyle",
            distance: "Can be several millimeters to centimeters",
            precision: "Must target correct ovule among many",
            speed: "Rapid growth - can extend several mm in hours"
        },
        
        guidanceStages: {
            stage1_initial: {
                location: "Stigma surface",
                event: "Pollen grain germinates",
                guidance: "Initial penetration into stigma tissue"
            },
            stage2_style: {
                location: "Style transmitting tract",
                distance: "Long-distance guidance",
                signals: "Nutrients, growth factors (GABA, etc.)",
                specificity: "Low - general support, not ovule-specific"
            },
            stage3_ovary: {
                location: "Ovary cavity",
                challenge: "Multiple ovules present",
                signals: "Short-range attractants from ovules",
                specificity: "High - species-specific LURE peptides"
            },
            stage4_micropyle: {
                location: "Ovule opening (micropyle)",
                signal: "Highest attractant concentration",
                event: "Pollen tube enters, ruptures, releases sperm",
                fertilization: "Double fertilization occurs"
            }
        },
        
        LUREpeptides: {
            discovery: "Identified in Torenia (2001) and Arabidopsis (2009)",
            structure: "Small secreted cysteine-rich peptides",
            source: "Synergid cells flanking egg cell",
            gradient: "Diffuse from micropyle, create concentration gradient",
            function: "Attract pollen tubes to correct ovule",
            speciesSpecificity: {
                sequence: "Different species have different LURE sequences",
                recognition: "Pollen receptors recognize cognate LURE",
                barrier: "Prevents interspecific fertilization",
                evidence: "Mismatched LURE doesn't attract pollen tubes"
            }
        },
        
        molecularMechanism: {
            perception: {
                location: "Pollen tube tip",
                receptor: "PRK (Pollen Receptor Kinase) family proteins",
                binding: "LURE peptides bind to PRKs on tube surface",
                activation: "Receptor kinase phosphorylation cascade"
            },
            signaling: {
                calcium: "Ca²⁺ gradient at tube tip essential for growth",
                effect: "LURE binding modulates Ca²⁺ gradient",
                direction: "Higher Ca²⁺ on side toward attractant",
                oscillation: "Ca²⁺ oscillates in growing tube tip"
            },
            growth: {
                mechanism: "Vesicle fusion at tip delivers membrane and wall material",
                directionality: "Asymmetric vesicle fusion toward attractant",
                cytoskeleton: "Actin filaments guide vesicle delivery",
                rate: "Very fast cellular growth - mm/hour"
            }
        },
        
        otherChemotropicSystems: {
            rootNutrients: {
                observation: "Some evidence roots grow toward nutrient-rich patches",
                nutrients: "Phosphate, nitrate may attract roots",
                status: "Less well-documented than pollen tube chemotropism",
                mechanism: "Unknown"
            },
            rootMicrobes: {
                hypothesis: "Roots may grow toward beneficial microbes",
                signals: "Bacterial/fungal metabolites",
                examples: "Rhizobium-legume symbiosis, mycorrhizal associations",
                status: "Active area of research"
            },
            fungalHyphae: {
                observation: "Fungal hyphae show chemotropism during mating",
                signals: "Pheromones",
                similarity: "Similar mechanisms to pollen tubes"
            }
        },
        
        pollenTubeReception: {
            synergidDegeneration: "After pollen tube arrival, one synergid degenerates",
            spermRelease: "Tube ruptures, releases two sperm cells",
            doubleFertilization: {
                egg: "One sperm fertilizes egg → embryo (2n)",
                centralCell: "One sperm fertilizes central cell → endosperm (3n)",
                unique: "Double fertilization unique to flowering plants"
            },
            blockToPolyspermy: "Mechanisms prevent multiple pollen tubes from entering same ovule"
        },
        
        ecologicalSignificance: [
            "Ensures efficient fertilization",
            "Species-specific recognition maintains reproductive isolation",
            "Faster fertilization = faster seed development",
            "Critical for fruit and seed production",
            "Enables genetic diversity through sexual reproduction"
        ],
        
        applications: [
            "Crop breeding: understanding fertilization efficiency",
            "Hybrid seed production: overcoming incompatibility barriers",
            "Understanding plant infertility and low seed set",
            "Biotechnology: engineering pollen tube guidance for controlled crosses",
            "Evolutionary biology: reproductive isolation and speciation"
        ],
        
        experimentalApproaches: {
            invitro: {
                method: "Grow pollen tubes in culture with attractant gradients",
                advantage: "Direct observation and manipulation",
                limitation: "Artificial conditions"
            },
            genetics: {
                method: "Mutants lacking LURE or PRK receptors",
                phenotype: "Pollen tubes fail to target ovules",
                advantage: "Demonstrates necessity"
            },
            liveImaging: {
                method: "Fluorescent markers in pollen tubes and ovules",
                observation: "Real-time visualization of guidance",
                technology: "Confocal microscopy of living tissue"
            }
        },
        
        relatedExperiments: this.getRelatedExperiments('chemotropism')
    };
    
    return content;
}

handleAuxinTransport(problem) {
    const content = {
        topic: "Auxin and Polar Transport",
        category: 'plant_hormones',
        summary: "Auxin (indole-3-acetic acid, IAA) is the master hormone controlling plant tropisms. Its polar (directional) transport and stimulus-induced redistribution create concentration gradients that drive differential growth responses.",
        
        auxinBasics: {
            name: "Indole-3-Acetic Acid (IAA)",
            class: "Plant hormone (phytohormone)",
            discovery: "Isolated by Frits Went (1926), structure determined 1934",
            role: "Regulates growth, tropisms, apical dominance, root formation, fruit development"
        },
        
        biosynthesis: {
            location: "Young leaves, shoot apex, developing seeds",
            precursor: "Tryptophan amino acid",
            pathways: {
                major: "TAA/YUC pathway (Trp → IPyA → IAA)",
                alternative: "IAM pathway, Trp-independent pathways",
                regulation: "Developmentally and environmentally controlled"
            },
            distribution: {
                source: "Shoot apex (high synthesis)",
                sink: "Roots, developing tissues (high response)",
                transport: "Basipetal (shoot → root), polar"
            }
        },
        
        polarTransport: {
            description: "Directional, cell-to-cell movement of auxin from shoot to root",
            direction: "Basipetal (toward base/root), can also be acropetal in roots",
            speed: "~10 mm/hour (slower than xylem/phloem)",
            energyRequirement: "Active process, requires ATP",
            independence: "Not through vascular tissue (xylem/phloem)"
        },
        
        chemiosmoticModel: {
            principle: "Auxin transport driven by pH gradient across membrane",
            IAA_properties: {
                weakAcid: "pKa ~4.75",
                protonated: "IAAH (uncharged) at low pH",
                ionized: "IAA⁻ (charged) at high pH"
            },
            pHgradient: {
                cytoplasm: "pH ~7 - IAA mostly ionized (IAA⁻)",
                cellWall: "pH ~5 - IAA partially protonated (IAAH)"
            },
            mechanism: {
                influx: "IAAH diffuses in; IAA⁻ requires AUX1/LAX carriers",
                accumulation: "In cytoplasm (pH 7), IAA becomes charged, trapped",
                efflux: "IAA⁻ exported by PIN proteins (active, ATP-dependent)",
                directionality: "PIN proteins located on basal end → polar flow"
            }
        },
        
        transportProteins: {
            AUX1_LAX: {
                function: "Auxin influx carriers",
                location: "Plasma membrane (often apical/lateral)",
                mechanism: "H⁺/IAA⁻ symport",
                family: "AUX1 and LAX1-3 genes"
            },
            PINproteins: {
                function: "Auxin efflux carriers - determine transport direction",
                family: "PIN1-8 in Arabidopsis",
                localization: "Asymmetrically on plasma membrane",
                PINtypes: {
                    PIN1: "Shoot and root vascular tissue - long-distance transport",
                    PIN2: "Root epidermis and cortex - rootward transport",
                    PIN3: "Root columella - gravitropism, lateral transport",
                    PIN4: "Root meristem",
                    PIN7: "Embryo, root meristem"
                },
                regulation: {
                    phosphorylation: "PINOID kinase phosphorylates PINs",
                    trafficking: "Endocytosis and exocytosis control PIN localization",
                    tropic_stimuli: "Light, gravity trigger PIN relocalization"
                }
            },
            ABCB_MDR: {
                function: "Additional auxin efflux transporters",
                location: "Plasma membrane",
                role: "Non-polar auxin transport, complement PINs"
            }
        },
        
        lateralRedistribution: {
            definition: "Stimulus-induced change in auxin flow direction",
            phototropism: {
                trigger: "Unilateral blue light",
                receptor: "Phototropin activation",
                effect: "PIN3 relocalizes to lateral faces of cells",
                result: "Auxin flows from lit side to shaded side",
                outcome: "Higher auxin on shaded side → more growth → curvature toward light"
            },
            gravitropism: {
                trigger: "Gravity reorientation",
                sensor: "Statolith sedimentation",
                effect: "PIN3/PIN7 relocalize",
                result: "Auxin flows to lower side",
                outcome: "Root: high auxin inhibits → curves down; Shoot: high auxin promotes → curves up"
            }
        },
        
        auxinSignaling: {
            perception: {
                receptor: "TIR1/AFB F-box proteins (auxin receptors)",
                location: "Nucleus (part of SCF E3 ubiquitin ligase complex)",
                binding: "Auxin binds between TIR1 and Aux/IAA proteins"
            },
            derepression: {
                noAuxin: "Aux/IAA repressor proteins block ARF transcription factors",
                withAuxin: "Auxin-TIR1 complex binds Aux/IAA → ubiquitination → degradation",
                result: "ARF transcription factors now active"
            },
            transcription: {
                ARFs: "Auxin Response Factors - transcription factors",
                targets: "Activate or repress auxin-responsive genes",
                genes: "Include cell wall modifying enzymes, growth regulators"
            },
            rapidResponse: {
                acidGrowth: "Rapid (15-30 min) activation of H⁺-ATPases",
                wallLoosening: "Expansins activated, cell walls loosen",
                expansion: "Turgor drives cell elongation"
            }
        },
        
        concentrationEffects: {
            shoots: {
                response: "Auxin promotes elongation",
                optimal: "~10⁻⁶ M",
                curve: "Rising part of dose-response",
                highConcentrations: "Still promotes growth (relatively insensitive)"
            },
            roots: {
                response: "Biphasic - low promotes, high inhibits",
                optimal: "~10⁻⁹ M (1000x more sensitive)",
                supraoptimal: "High auxin inhibits root elongation",
                mechanism: "High auxin induces ethylene → inhibition"
            },
            lateralBuds: {
                apicalDominance: "High auxin from apex suppresses lateral bud outgrowth",
                removal: "Cutting apex reduces auxin → buds grow"
            },
            rootInitiation: {
                response: "Auxin promotes adventitious root formation",
                application: "Rooting hormones for cuttings (IAA, IBA, NAA)"
            }
        },
        
        syntheticAuxins: {
            IAA: "Natural auxin (indole-3-acetic acid)",
            IBA: "Indole-3-butyric acid (synthetic, converted to IAA)",
            NAA: "1-Naphthaleneacetic acid (synthetic, not degraded easily)",
            herbicides: {
                compounds: "2,4-D, 2,4,5-T, dicamba, picloram",
                mechanism: "Mimic auxin, cause uncontrolled growth at high doses",
                selectivity: "Affect broadleaf plants (dicots) more than grasses (monocots)",
                use: "Widely used for lawn care and agriculture",
                controversy: "2,4,5-T component of Agent Orange (contained dioxin contaminant)"
            }
        },
        
        auxinFunctions: {
            tropisms: "Phototropism, gravitropism (redistribution drives curvature)",
            apicalDominance: "Suppresses lateral bud growth",
            rootInitiation: "Promotes adventitious and lateral root formation",
            vascularDevelopment: "Promotes xylem and phloem differentiation",
            fruitDevelopment: "Produced by seeds, promotes fruit growth",
            leafAbscission: "Low auxin triggers leaf drop",
            cellDivision: "With cytokinin, regulates cell division in tissue culture"
        },
        
        applications: [
            "Rooting hormones: IBA/NAA on cuttings promotes root formation",
            "Herbicides: 2,4-D kills broadleaf weeds selectively",
            "Fruit set: Apply auxin to induce parthenocarpy (seedless fruit)",
            "Prevent fruit drop: Auxin delays abscission",
            "Tissue culture: Auxin/cytokinin ratio controls organ formation",
            "Plant breeding: Manipulate auxin pathways for architecture"
        ],
        
        relatedExperiments: this.getRelatedExperiments('auxin_transport')
    };
    
    return content;
}

handleNasticMovements(problem) {
    const content = {
        topic: "Nastic Movements",
        category: 'non_directional_movement',
        summary: "Nastic movements are non-directional plant responses that are independent of the direction of the stimulus. They are rapid, reversible, and mediated by turgor pressure changes rather than growth.",
        
        definition: {
            nasticMovement: "Non-directional response to stimulus (independent of stimulus direction)",
            mechanism: "Reversible turgor changes in specialized motor cells",
            speed: "Rapid (seconds to minutes) compared to tropisms (hours to days)",
            reversibility: "Reversible, can repeat multiple times"
        },
        
        comparisonToTropisms: {
            tropism: {
                directionality: "DIRECTIONAL - determined by stimulus direction",
                mechanism: "Irreversible growth (cell elongation)",
                timeScale: "Hours to days",
                examples: "Phototropism, gravitropism, thigmotropism"
            },
            nasty: {
                directionality: "NON-DIRECTIONAL - determined by plant anatomy",
                mechanism: "Reversible turgor changes",
                timeScale: "Seconds to minutes",
                examples: "Nyctinasty, thigmonasty, seismonasty"
            }
        },
        
        types: {
            nyctinasty: {
                definition: "Sleep movements - daily leaf folding/opening",
                examples: ["Prayer plant (Maranta)", "Oxalis", "Bean", "Silk tree (Albizzia)"],
                stimulus: "Day/night cycle (light and circadian clock)",
                pattern: "Leaves open during day, fold at night"
            },
            thigmonasty: {
                definition: "Response to touch stimulus",
                example: "Mimosa pudica (sensitive plant)",
                response: "Leaflets fold together, petiole droops",
                recovery: "Reopens in 15-30 minutes"
            },
            seismonasty: {
                definition: "Response to shaking or vibration",
                overlap: "Similar to thigmonasty",
                example: "Mimosa pudica also responds to vibration"
            },
            thermonasty: {
                definition: "Response to temperature changes",
                example: "Tulip and crocus flowers open when warm, close when cool"
            }
        },
        
        pulvinus: {
            description: "Swollen region at base of leaf or leaflet that controls movement",
            structure: {
                motorCells: "Specialized parenchyma cells that change volume",
                upperSide: "Extensor motor cells",
                lowerSide: "Flexor motor cells",
                vascularBundle: "Central strand provides water supply"
            },
            mechanism: "Differential turgor between upper and lower motor cells causes bending"
        },
        
        ionFluxMechanism: {
            opening_raising: {
                ionMovement: "K⁺ and Cl⁻ enter LOWER (flexor) motor cells",
                osmoticEffect: "Water follows ions into cells (osmosis)",
                turgor: "Lower cells swell, upper cells shrink relatively",
                result: "Leaf or leaflet rises/opens"
            },
            closing_lowering: {
                ionMovement: "K⁺ and Cl⁻ exit lower cells, enter UPPER (extensor) cells",
                osmoticEffect: "Water follows ions out of lower cells, into upper cells",
                turgor: "Upper cells swell, lower cells shrink",
                result: "Leaf or leaflet lowers/closes"
            },
            ionChannels: "Voltage-gated K⁺ channels and Cl⁻ channels mediate rapid flux",
            energyCost: "Requires ATP to restore ion gradients (Na⁺/K⁺-ATPase)"
        },
        
        nyctinasty_detailed: {
            description: "Circadian rhythm-controlled leaf movements",
            mechanism: {
                circadianClock: "Internal ~24h oscillator controls timing",
                lightSignals: "Blue/red light receptors (phototropins, phytochromes) entrain clock",
                output: "Clock regulates ion channel activity in pulvinus",
                rhythm: "Persists in constant darkness (free-running)"
            },
            evidence: {
                constantDark: "Movements continue with ~24h period in constant darkness",
                freeRunning: "Period may drift from 24h (23-25h typical)",
                damping: "Amplitude may decrease over time without light cues"
            },
            function_hypotheses: [
                "Reduce water loss at night (less surface area exposed)",
                "Reduce radiative heat loss (thermoregulation)",
                "Reduce nocturnal herbivory (looks less attractive)",
                "Reduce dew formation (fungal pathogen defense)"
            ],
            note: "Adaptive significance still debated"
        },
        
        mimosa_thigmonasty: {
            plant: "Mimosa pudica (sensitive plant, touch-me-not)",
            response: {
                trigger: "Touch, vibration, electrical shock, heat",
                sequence: [
                    "Leaflets fold together in pairs",
                    "Secondary rachis (leaflet-bearing axis) droops",
                    "Primary petiole (leaf stalk) droops",
                    "Signal can spread to adjacent leaves"
                ],
                recovery: "15-30 minutes to fully reopen"
            },
            mechanism: {
                perception: "Mechanoreceptors at base of leaflets",
                signal: "Action potential-like electrical signal",
                propagation: "Travels ~2 cm/s along petiole and stem",
                ionFlux: "Ca²⁺ and K⁺ channels open → rapid ion efflux from flexor cells",
                turgor: "Rapid water loss → turgor drop → folding",
                primaryPulvinus: "At base of main petiole",
                secondaryPulvini: "At base of each leaflet"
            },
            function_hypotheses: [
                "Startle predator (sudden movement)",
                "Expose thorns on stem (herbivore deterrent)",
                "Look wilted/unhealthy (reduce attractiveness to herbivores)",
                "Dislodge insects from leaves",
                "Reduce damage in heavy rain or wind"
            ],
            energyCost: "Significant - requires ATP to restore ion gradients after each response",
            fatigue: "Repeated stimulation causes reduced response (habituation)"
        },
        
        venusFlytrap: {
            plant: "Dionaea muscipula",
            type: "Specialized thigmonasty for carnivory",
            mechanism: {
                trigger: "Trigger hairs bent TWICE within ~20 seconds",
                threshold: "Prevents false closure from debris (requires moving prey)",
                electrical: "Action potentials generated, summed",
                closure: "Rapid turgor changes + cell expansion on outer lobe surface",
                speed: "Trap closes in <1 second (among fastest plant movements)",
                sealing: "If prey present, trap seals tighter over hours",
                digestion: "Secretes enzymes, absorbs nutrients over ~10 days",
                reopening: "Trap reopens in 24-48 hours if no prey"
            },
            energetics: "Each leaf can close only 3-5 times before it dies (high cost)",
            specialization: "Modified leaf with snap-buckling mechanism"
        },
        
        ecologicalSignificance: [
            "Rapid defense responses (Mimosa)",
            "Carnivory - capture insects for nutrients (Venus flytrap)",
            "Possible thermoregulation or water conservation (nyctinasty)",
            "Reduce mechanical damage from rain/wind",
            "Circadian regulation optimizes daily cycles"
        ],
        
        molecularBasis: {
            ionChannels: "K⁺ channels, Cl⁻ channels, Ca²⁺ channels",
            aquaporins: "Water channels facilitate rapid water flux",
            electricalSignals: "Membrane depolarization similar to animal action potentials",
            circadianClock: "TOC1, CCA1, LHY genes regulate clock in plants",
            signaling: "Calcium, ROS (reactive oxygen species), hormones (auxin, ABA)"
        },
        
        applications: [
            "Bio-inspired robotics: soft actuators mimicking Mimosa/Venus flytrap",
            "Understanding electrical signaling in plants",
            "Circadian rhythm research (model for biological clocks)",
            "Sensing and actuation in materials science",
            "Educational demonstrations of plant responsiveness",
            "Agricultural implications of circadian rhythms (optimal timing for harvest, treatments)"
        ],
        
        futureResearch: [
            "Molecular basis of electrical signals in plants",
            "Evolution of rapid movements",
            "Engineering tunable nastic movements in crops",
            "Synthetic biology: creating novel stimulus-responsive plants",
            "Understanding integration of circadian and environmental signals"
        ],
        
        relatedExperiments: this.getRelatedExperiments('nastic_movements')
    };
    
    return content;
}


// ========================================
// MAIN PROBLEM PROCESSING METHODS
// ========================================

parseTropismProblem(topic, parameters = {}, subTopic = null, context = {}) {
    let topicType = null;

    // Match topic to handler
    for (const [type, config] of Object.entries(this.tropismTopics)) {
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
        throw new Error(`Unable to recognize plant tropism topic: ${topic}`);
    }

    return {
        originalTopic: topic,
        type: topicType,
        subTopic: subTopic,
        parameters: { ...parameters },
        context: { ...context },
        difficulty: this.tropismTopics[topicType].difficulty,
        prerequisites: this.tropismTopics[topicType].prerequisites,
        parsedAt: new Date().toISOString()
    };
}

handleTropismProblem(config) {
    const { topic, parameters, subTopic, context, requestType } = config;

    try {
        const isExperimentRequest = requestType === 'experiment' || 
                                   (typeof topic === 'string' && topic.toLowerCase().includes('experiment'));

        if (isExperimentRequest) {
            return this.handleExperimentRequest(config);
        } else {
            this.currentProblem = this.parseTropismProblem(topic, parameters, subTopic, context);
            this.currentContent = this.getTropismContent(this.currentProblem);
            
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
            
            this.contentSteps = this.generateTropismContent(this.currentProblem, this.currentContent);
            
            // Generate workbook (handles async internally)
            this.generateTropismWorkbook();

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
        throw new Error(`Failed to process plant tropism request: ${error.message}`);
    }
}

getTropismContent(problem) {
    const handler = this.tropismTopics[problem.type]?.handler;
    if (!handler) {
        throw new Error(`No handler available for plant tropism topic: ${problem.type}`);
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

    // Filter by tropism type (positive/negative)
    if (parameters.tropismType) {
        if (filtered.definition) {
            filtered.definition = {
                ...filtered.definition,
                focus: parameters.tropismType
            };
        }
    }

    return filtered;
}

handleExperimentRequest(config) {
    const { topic, parameters, experimentId } = config;

    if (experimentId && this.tropismExperiments[experimentId]) {
        this.currentExperiment = this.tropismExperiments[experimentId];
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
    for (const [id, exp] of Object.entries(this.tropismExperiments)) {
        if (exp.name.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    // Historical scientist match
    for (const [id, exp] of Object.entries(this.tropismExperiments)) {
        if (exp.historicalBackground?.scientist?.toLowerCase().includes(topicLower) ||
            exp.historicalBackground?.scientists?.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    // Related topics match
    for (const [id, exp] of Object.entries(this.tropismExperiments)) {
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
                if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
                    formatted.push([`  ${k}:`, '']);
                    Object.entries(v).forEach(([subK, subV]) => {
                        formatted.push([`    ${subK}`, typeof subV === 'object' ? JSON.stringify(subV) : subV]);
                    });
                } else {
                    formatted.push([`  ${k}`, typeof v === 'object' ? JSON.stringify(v) : v]);
                }
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
    formatted.push(['Purpose', labExp.purpose]);
    
    if (labExp.background) {
        formatted.push(['', '']);
        formatted.push(['Background', '']);
        if (typeof labExp.background === 'object') {
            Object.entries(labExp.background).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, value]);
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
        formatted.push(['⚠ SAFETY PRECAUTIONS', '']);
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
            let stepNum = 1;
            labExp.procedure.forEach((step) => {
                if (step.trim() === '') {
                    formatted.push(['', '']);
                } else if (step.includes(':') && step === step.toUpperCase()) {
                    formatted.push([step, '']);
                } else if (step.startsWith('  ') || step.startsWith('    ')) {
                    formatted.push(['    ', step.trim()]);
                } else {
                    formatted.push([`  ${stepNum}.`, step]);
                    stepNum++;
                }
            });
        } else if (typeof labExp.procedure === 'object') {
            Object.entries(labExp.procedure).forEach(([key, value]) => {
                if (key === 'preparation' || key === 'measurement' || key === 'dataCollection') {
                    formatted.push(['', '']);
                    formatted.push([key.toUpperCase().replace(/([A-Z])/g, ' $1').trim() + ':', '']);
                }
                
                if (Array.isArray(value)) {
                    value.forEach((step, idx) => {
                        if (step.trim() === '') {
                            formatted.push(['', '']);
                        } else {
                            formatted.push([`  ${idx + 1}.`, step]);
                        }
                    });
                } else if (typeof value === 'object') {
                    formatted.push([key + ':', '']);
                    Object.entries(value).forEach(([subKey, subValue]) => {
                        formatted.push([`  ${subKey}:`, '']);
                        if (Array.isArray(subValue)) {
                            subValue.forEach((item, idx) => {
                                formatted.push([`    ${idx + 1}.`, item]);
                            });
                        } else if (typeof subValue === 'object') {
                            Object.entries(subValue).forEach(([k, v]) => {
                                formatted.push([`      ${k}:`, v]);
                            });
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

    if (labExp.expectedResults) {
        formatted.push(['', '']);
        formatted.push(['Expected Results', '']);
        if (typeof labExp.expectedResults === 'object') {
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
        } else {
            formatted.push(['  ', labExp.expectedResults]);
        }
    }

    if (labExp.dataTable) {
        formatted.push(['', '']);
        formatted.push(['Data Table', '']);
        if (Array.isArray(labExp.dataTable)) {
            labExp.dataTable.forEach((row, idx) => {
                if (idx === 0) {
                    formatted.push(['  Headers:', row.join(' | ')]);
                } else {
                    formatted.push([`  Row ${idx}:`, row.join(' | ')]);
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
        } else if (typeof labExp.observations === 'object') {
            Object.entries(labExp.observations).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, '']);
                if (Array.isArray(value)) {
                    value.forEach(item => formatted.push(['    -', item]));
                } else {
                    formatted.push(['    ', value]);
                }
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
                } else if (typeof value === 'object') {
                    Object.entries(value).forEach(([subK, subV]) => {
                        formatted.push([`    ${subK}:`, subV]);
                    });
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
        } else {
            formatted.push(['  ', labExp.conclusions]);
        }
    }

    if (labExp.modernExtension || labExp.modernConnections) {
        formatted.push(['', '']);
        formatted.push(['Modern Connections', '']);
        const modern = labExp.modernExtension || labExp.modernConnections;
        if (Array.isArray(modern)) {
            modern.forEach(item => {
                formatted.push(['  •', item]);
            });
        } else if (typeof modern === 'object') {
            Object.entries(modern).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, value]);
            });
        }
    }

    if (labExp.realWorldSignificance || labExp.realWorldApplications) {
        formatted.push(['', '']);
        formatted.push(['Real-World Applications', '']);
        const applications = labExp.realWorldSignificance || labExp.realWorldApplications;
        if (Array.isArray(applications)) {
            applications.forEach(app => {
                formatted.push(['  •', app]);
            });
        }
    }

    if (labExp.extensions) {
        formatted.push(['', '']);
        formatted.push(['Extension Activities', '']);
        if (Array.isArray(labExp.extensions)) {
            labExp.extensions.forEach(ext => {
                formatted.push(['  •', ext]);
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

    if (labExp.assessmentQuestions) {
        formatted.push(['', '']);
        formatted.push(['Assessment Questions', '']);
        if (Array.isArray(labExp.assessmentQuestions)) {
            labExp.assessmentQuestions.forEach((q, idx) => {
                formatted.push([`  ${idx + 1}.`, q]);
            });
        }
    }

    return formatted;
}

getRelatedExperiments(topicType) {
    const related = [];
    
    Object.entries(this.tropismExperiments).forEach(([id, experiment]) => {
        if (experiment.relatedTopics.includes(topicType)) {
            related.push({
                id: id,
                name: experiment.name,
                category: experiment.category,
                historicalScientist: experiment.historicalBackground?.scientist || 
                                    experiment.historicalBackground?.scientists,
                year: experiment.historicalBackground?.year,
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
    return Object.entries(this.tropismExperiments).map(([id, exp]) => ({
        id: id,
        name: exp.name,
        category: exp.category,
        relatedTopics: exp.relatedTopics,
        scientist: exp.historicalBackground?.scientist || exp.historicalBackground?.scientists,
        year: exp.historicalBackground?.year
    }));
}

getAllTopics() {
    return Object.entries(this.tropismTopics).map(([id, topic]) => ({
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
            adapted.focusAreas = ['definition', 'basicMechanism', 'simpleExamples'];
            break;
        
        case 'intermediate':
            adapted.vocabulary = 'standard';
            adapted.examples = this.selectMixedExamples(content.examples);
            adapted.depth = 'moderate';
            adapted.focusAreas = ['mechanism', 'ecologicalSignificance', 'experiments'];
            break;
        
        case 'advanced':
            adapted.vocabulary = 'technical';
            adapted.examples = this.selectAdvancedExamples(content.examples);
            adapted.depth = 'comprehensive';
            adapted.research = this.addResearchConnections(content);
            adapted.focusAreas = ['molecularMechanism', 'signaling', 'research', 'applications'];
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
        currentResearch: `Current research in ${content.topic} includes molecular mechanisms of signal transduction, role of PIN proteins in auxin transport, and applications in crop improvement...`,
        openQuestions: "Unresolved questions: How do plants integrate multiple tropic signals? What are the complete signaling pathways? How can we enhance tropisms for agriculture?",
        techniques: "Advanced techniques: Live imaging with fluorescent proteins, mutant analysis, molecular biology, optogenetics for controlling plant responses..."
    };
}

getContextualScenarios(topicType) {
    return this.contextualScenarios[topicType] || [];
}

getMetacognitivePrompts(topicType) {
    const prompts = {
        beforeLearning: this.metacognitivePrompts.beforeLearning.map(p => 
            p.replace('{topic}', this.tropismTopics[topicType]?.name || topicType)
        ),
        duringLearning: this.metacognitivePrompts.duringLearning.map(p => 
            p.replace('{concept}', topicType).replace('{related_concept}', 'other tropisms')
        ),
        afterLearning: this.metacognitivePrompts.afterLearning.map(p => 
            p.replace('{topic}', this.tropismTopics[topicType]?.name || topicType)
        ),
        experimentalDesign: this.metacognitivePrompts.experimentalDesign || []
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

generateTropismContent(problem, content) {
    const contentSections = [];

    // Generate overview section
    contentSections.push(this.generateOverviewSection(problem, content));

    // Generate historical development if available
    if (content.historicalDevelopment) {
        contentSections.push(this.generateHistoricalDevelopmentSection(content));
    }

    // Generate mechanism section
    if (content.mechanism) {
        contentSections.push(this.generateMechanismSection(content));
    }

    // Generate sensing/perception section
    if (content.gravitySensing || content.photoreceptors || content.pulvinus) {
        contentSections.push(this.generateSensingSection(content));
    }

    // Generate signal transduction
    if (content.auxinSignaling || content.ionFluxMechanism || content.signaling) {
        contentSections.push(this.generateSignalTransductionSection(content));
    }

    // Generate ecological significance
    if (content.ecologicalSignificance) {
        contentSections.push(this.generateEcologicalSection(content));
    }

    // Add comparisons if available
    if (content.comparison) {
        contentSections.push(this.generateComparisonsSection(content));
    }

    // Add examples section
    if (content.examples) {
        contentSections.push(this.generateExamplesSection(content));
    }

    // Add contextual scenarios
    if (content.contextualScenarios) {
        contentSections.push(this.generateContextualScenariosSection(content));
    }

    // Add experimental evidence
    if (content.experimentalEvidence) {
        contentSections.push(this.generateExperimentalEvidenceSection(content));
    }

    // Add related experiments section
    if (this.includeExperiments && content.relatedExperiments) {
        contentSections.push(this.generateRelatedExperimentsSection(content));
    }

    // Add applications
    if (content.applications) {
        contentSections.push(this.generateApplicationsSection(content));
    }

    // Add metacognitive prompts
    if (content.metacognitivePrompts) {
        contentSections.push(this.generateMetacognitiveSection(content));
    }

    return contentSections;
}

generateOverviewSection(problem, content) {
    return {
        title: `Overview: ${content.topic}`,
        type: 'overview',
        content: {
            topic: content.topic,
            category: content.category,
            summary: content.summary,
            keyPoints: this.extractKeyPoints(content)
        }
    };
}

generateHistoricalDevelopmentSection(content) {
    return {
        title: 'Historical Development',
        type: 'historical',
        content: content.historicalDevelopment
    };
}

generateMechanismSection(content) {
    return {
        title: 'Mechanism of Response',
        type: 'mechanism',
        content: content.mechanism
    };
}

generateSensingSection(content) {
    return {
        title: 'Stimulus Perception',
        type: 'sensing',
        content: content.gravitySensing || content.photoreceptors || content.pulvinus || {}
    };
}

generateSignalTransductionSection(content) {
    return {
        title: 'Signal Transduction',
        type: 'signaling',
        content: content.auxinSignaling || content.ionFluxMechanism || content.signaling || {}
    };
}

generateEcologicalSection(content) {
    return {
        title: 'Ecological Significance',
        type: 'ecology',
        content: content.ecologicalSignificance
    };
}

generateComparisonsSection(content) {
    return {
        title: 'Comparisons',
        type: 'comparisons',
        content: content.comparison
    };
}

generateExamplesSection(content) {
    return {
        title: 'Examples',
        type: 'examples',
        content: content.examples
    };
}

generateContextualScenariosSection(content) {
    return {
        title: 'Real-World Scenarios',
        type: 'scenarios',
        content: content.contextualScenarios
    };
}

generateExperimentalEvidenceSection(content) {
    return {
        title: 'Experimental Evidence',
        type: 'experiments',
        content: content.experimentalEvidence
    };
}

generateRelatedExperimentsSection(content) {
    return {
        title: 'Related Experiments',
        type: 'related_experiments',
        content: content.relatedExperiments
    };
}

generateApplicationsSection(content) {
    return {
        title: 'Applications',
        type: 'applications',
        content: content.applications
    };
}

generateMetacognitiveSection(content) {
    return {
        title: 'Reflection Questions',
        type: 'metacognitive',
        content: content.metacognitivePrompts
    };
}

extractKeyPoints(content) {
    const keyPoints = [];

    if (content.summary) keyPoints.push(content.summary);
    
    // Extract from various content structures
    if (content.definition) {
        Object.entries(content.definition).forEach(([key, value]) => {
            if (typeof value === 'string') {
                keyPoints.push(`${key}: ${value}`);
            }
        });
    }

    if (content.mechanism && content.mechanism.step1_perception) {
        keyPoints.push("Perception: " + content.mechanism.step1_perception.description);
    }

    if (content.ecologicalSignificance && Array.isArray(content.ecologicalSignificance)) {
        keyPoints.push(content.ecologicalSignificance[0]);
    }

    return keyPoints.slice(0, 5);
}


// ========================================
// WORKBOOK GENERATION METHODS
// ========================================

generateTropismWorkbook() {
    if (!this.currentContent || !this.currentProblem) return;

    const workbook = this.createWorkbookStructure();
    workbook.title = 'Plant Tropism Workbook';

    // Start diagram generation in background if needed
    if (this.includeDiagramsInWorkbook) {
        this.diagramsPromise = this.generateTropismDiagramDataAsync();
    }

    workbook.sections = [
        this.createProblemSection(),
        this.createContentOverviewSection(),
        this.createDetailedContentSection(),
        this.createDiagramsPlaceholderSection(), // Placeholder until diagrams ready
        this.createMechanismSection(),
        this.createHistoricalDevelopmentSection(),
        this.createComparisonsWorkbookSection(),
        this.createExamplesApplicationsSection(),
        this.createContextualScenariosWorkbookSection(),
        this.createExperimentalEvidenceSection(),
        this.createRelatedExperimentsWorkbookSection(),
        this.createMisconceptionsSection(),
        this.createMetacognitiveWorkbookSection(),
        this.createAssessmentSection()
    ].filter(section => section !== null);

    this.currentWorkbook = workbook;
}

generateExperimentWorkbook(experimentContent) {
    const workbook = this.createWorkbookStructure();
    workbook.title = 'Plant Tropism Experiment Workbook';

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
                this.tropismTopics[topic]?.name || topic,
                this.tropismTopics[topic]?.description || ''
            ])
        });
    }

    // Add diagram section for experiments if relevant
    if (this.includeDiagramsInWorkbook) {
        workbook.sections.push(this.createExperimentDiagramsSection(experimentContent));
    }

    this.currentWorkbook = workbook;
}

// Async helper that runs in background
async generateTropismDiagramDataAsync() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    // Get relevant diagram keys
    const diagramKeys = this.getRelevantTropismDiagrams(type);

    this.diagramData = {
        type: type,
        diagrams: diagramKeys,
        renderedImages: [],
        status: 'rendering',
        placeholder: false,
        note: "Plant tropism diagrams"
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
        title: 'Plant Tropism Diagrams',
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
        title: 'Plant Tropism Diagrams',
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

getRelevantTropismDiagrams(topicType) {
    const diagramMap = {
        phototropism: [
            "plantCell",
            "phototropismMechanism",
            "auxinTransport",
            "shootStructure",
            "coleoptileDiagram"
        ],
        gravitropism: [
            "plantCell",
            "rootStructure",
            "statolithCells",
            "gravitropismMechanism",
            "auxinTransport",
            "rootCapStructure"
        ],
        thigmotropism: [
            "plantCell",
            "tendrilStructure",
            "pulvinusStructure",
            "thigmotropismMechanism"
        ],
        hydrotropism: [
            "rootStructure",
            "rootTipDiagram",
            "waterPotentialGradient"
        ],
        chemotropism: [
            "pollenTubeGrowth",
            "plantReproduction",
            "ovuleStructure",
            "fertilization"
        ],
        auxin_transport: [
            "auxinStructure",
            "polarTransport",
            "PINproteins",
            "cellMembraneTransport",
            "auxinSignaling",
            "acidGrowth"
        ],
        nastic_movements: [
            "pulvinusStructure",
            "motorCells",
            "mimosaLeaf",
            "nyctinastyMechanism",
            "ionFluxDiagram"
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

// Update getWorkbookStatus to include diagram info
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
        title: 'Plant Tropism Workbook',
        timestamp: new Date().toISOString(),
        theme: this.theme,
        dimensions: { width: this.width, height: this.height },
        learnerLevel: this.learnerProfile.currentLevel,
        sections: []
    };
}

// ========================================
// WORKBOOK SECTION CREATION METHODS
// ========================================

createProblemSection() {
    if (!this.currentProblem) return null;

    return {
        title: 'Topic Overview',
        type: 'problem',
        data: [
            ['Topic', this.tropismTopics[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.currentProblem.category || this.tropismTopics[this.currentProblem.type]?.category],
            ['Difficulty', this.currentProblem.difficulty],
            ['Prerequisites', (this.currentProblem.prerequisites || []).join(', ')],
            ['', ''],
            ['Description', this.tropismTopics[this.currentProblem.type]?.description || '']
        ]
    };
}

createContentOverviewSection() {
    if (!this.currentContent) return null;

    const data = [
        ['Topic', this.currentContent.topic],
        ['Category', this.currentContent.category],
        ['', ''],
        ['Summary', this.currentContent.summary]
    ];

    if (this.currentContent.keyPoints) {
        data.push(['', '']);
        data.push(['Key Points', '']);
        this.currentContent.keyPoints.forEach((point, index) => {
            data.push([`  ${index + 1}.`, point]);
        });
    }

    return {
        title: 'Content Overview',
        type: 'overview',
        data: data
    };
}

createDetailedContentSection() {
    if (!this.currentContent) return null;

    const data = [];

    // Add definition section
    if (this.currentContent.definition) {
        data.push(['DEFINITIONS', '']);
        data.push(['', '']);
        Object.entries(this.currentContent.definition).forEach(([key, value]) => {
            data.push([key, value]);
        });
        data.push(['', '']);
    }

    // Add theory/background
    if (this.currentContent.theory) {
        data.push(['THEORY', '']);
        data.push(['', '']);
        data.push(['', this.currentContent.theory]);
        data.push(['', '']);
    }

    // Add key definitions
    if (this.currentContent.keyDefinitions) {
        data.push(['KEY TERMS', '']);
        data.push(['', '']);
        Object.entries(this.currentContent.keyDefinitions).forEach(([term, definition]) => {
            data.push([term, definition]);
        });
        data.push(['', '']);
    }

    return {
        title: 'Detailed Content',
        type: 'detailed_content',
        data: data
    };
}

createMechanismSection() {
    if (!this.currentContent || !this.currentContent.mechanism) return null;

    const data = [];
    data.push(['MECHANISM OF RESPONSE', '']);
    data.push(['', '']);

    const formatMechanism = (mechanism, indent = '') => {
        Object.entries(mechanism).forEach(([key, value]) => {
            if (typeof value === 'object' && !Array.isArray(value)) {
                data.push([indent + key, '']);
                formatMechanism(value, indent + '  ');
            } else if (Array.isArray(value)) {
                data.push([indent + key, '']);
                value.forEach(item => {
                    data.push([indent + '  •', item]);
                });
            } else {
                data.push([indent + key, value]);
            }
        });
    };

    formatMechanism(this.currentContent.mechanism);

    return {
        title: 'Mechanism',
        type: 'mechanism',
        data: data
    };
}

createHistoricalDevelopmentSection() {
    if (!this.currentContent || !this.currentContent.historicalDevelopment) return null;

    const data = [];
    data.push(['HISTORICAL DEVELOPMENT', '']);
    data.push(['', '']);

    Object.entries(this.currentContent.historicalDevelopment).forEach(([period, info]) => {
        data.push([period.toUpperCase(), '']);
        if (typeof info === 'object') {
            Object.entries(info).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    data.push([`  ${key}:`, '']);
                    value.forEach(item => {
                        data.push(['    •', item]);
                    });
                } else {
                    data.push([`  ${key}:`, value]);
                }
            });
        }
        data.push(['', '']);
    });

    return {
        title: 'Historical Development',
        type: 'historical',
        data: data
    };
}

createComparisonsWorkbookSection() {
    if (!this.currentContent || !this.currentContent.comparison) return null;

    const data = [];
    data.push(['COMPARISONS', '']);
    data.push(['', '']);

    const formatComparison = (comparison, indent = '') => {
        Object.entries(comparison).forEach(([key, value]) => {
            if (typeof value === 'object' && !Array.isArray(value)) {
                data.push([indent + key.toUpperCase(), '']);
                formatComparison(value, indent + '  ');
            } else if (Array.isArray(value)) {
                data.push([indent + key, '']);
                value.forEach(item => {
                    data.push([indent + '  •', item]);
                });
            } else {
                data.push([indent + key, value]);
            }
        });
    };

    formatComparison(this.currentContent.comparison);

    return {
        title: 'Comparisons',
        type: 'comparisons',
        data: data
    };
}

createExamplesApplicationsSection() {
    if (!this.currentContent) return null;

    const data = [];

    // Add examples
    if (this.currentContent.examples) {
        data.push(['EXAMPLES', '']);
        data.push(['', '']);
        
        if (Array.isArray(this.currentContent.examples)) {
            this.currentContent.examples.forEach((example, index) => {
                if (typeof example === 'object') {
                    data.push([`Example ${index + 1}:`, '']);
                    Object.entries(example).forEach(([key, value]) => {
                        data.push([`  ${key}:`, value]);
                    });
                } else {
                    data.push([`  ${index + 1}.`, example]);
                }
                data.push(['', '']);
            });
        }
    }

    // Add applications
    if (this.currentContent.applications) {
        data.push(['APPLICATIONS', '']);
        data.push(['', '']);
        
        if (Array.isArray(this.currentContent.applications)) {
            this.currentContent.applications.forEach((app, index) => {
                data.push([`  ${index + 1}.`, app]);
            });
        }
        data.push(['', '']);
    }

    // Add ecological significance
    if (this.currentContent.ecologicalSignificance) {
        data.push(['ECOLOGICAL SIGNIFICANCE', '']);
        data.push(['', '']);
        
        if (Array.isArray(this.currentContent.ecologicalSignificance)) {
            this.currentContent.ecologicalSignificance.forEach((sig, index) => {
                data.push([`  ${index + 1}.`, sig]);
            });
        }
        data.push(['', '']);
    }

    return data.length > 0 ? {
        title: 'Examples & Applications',
        type: 'examples_applications',
        data: data
    } : null;
}

createContextualScenariosWorkbookSection() {
    if (!this.currentContent || !this.currentContent.contextualScenarios) return null;

    const data = [];
    data.push(['REAL-WORLD SCENARIOS', '']);
    data.push(['', '']);

    this.currentContent.contextualScenarios.forEach((scenario, index) => {
        data.push([`Scenario ${index + 1}: ${scenario.scenario}`, '']);
        data.push(['  Context:', scenario.context]);
        data.push(['  Application:', scenario.application]);
        data.push(['  Question:', scenario.question]);
        data.push(['', '']);
    });

    return {
        title: 'Real-World Scenarios',
        type: 'scenarios',
        data: data
    };
}

createExperimentalEvidenceSection() {
    if (!this.currentContent || !this.currentContent.experimentalEvidence) return null;

    const data = [];
    data.push(['EXPERIMENTAL EVIDENCE', '']);
    data.push(['', '']);

    Object.entries(this.currentContent.experimentalEvidence).forEach(([experiment, info]) => {
        data.push([experiment.toUpperCase(), '']);
        
        if (typeof info === 'object') {
            Object.entries(info).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    data.push([`  ${key}:`, '']);
                    value.forEach(item => {
                        data.push(['    •', item]);
                    });
                } else {
                    data.push([`  ${key}:`, value]);
                }
            });
        }
        data.push(['', '']);
    });

    return {
        title: 'Experimental Evidence',
        type: 'experimental_evidence',
        data: data
    };
}

createRelatedExperimentsWorkbookSection() {
    if (!this.currentContent || !this.currentContent.relatedExperiments || 
        this.currentContent.relatedExperiments.length === 0) {
        return null;
    }

    const data = [];
    data.push(['RELATED EXPERIMENTS', '']);
    data.push(['', '']);

    this.currentContent.relatedExperiments.forEach((exp, index) => {
        data.push([`${index + 1}. ${exp.name}`, '']);
        data.push(['  Category:', exp.category]);
        if (exp.historicalScientist) {
            data.push(['  Scientist:', exp.historicalScientist]);
        }
        if (exp.year) {
            data.push(['  Year:', exp.year]);
        }
        if (exp.labTitle) {
            data.push(['  Lab:', exp.labTitle]);
        }
        data.push(['', '']);
    });

    return {
        title: 'Related Experiments',
        type: 'related_experiments',
        data: data
    };
}

createMisconceptionsSection() {
    if (!this.currentProblem) return null;

    const topicMisconceptions = this.commonMisconceptions[this.currentProblem.type];
    if (!topicMisconceptions) return null;

    const data = [];
    data.push(['COMMON MISCONCEPTIONS', '']);
    data.push(['', '']);

    Object.entries(topicMisconceptions).forEach(([category, misconceptions]) => {
        data.push([category.toUpperCase(), '']);
        misconceptions.forEach((misconception, index) => {
            data.push([`  ${index + 1}.`, misconception]);
        });
        data.push(['', '']);
    });

    return {
        title: 'Common Misconceptions',
        type: 'misconceptions',
        data: data
    };
}

createMetacognitiveWorkbookSection() {
    if (!this.currentContent || !this.currentContent.metacognitivePrompts) return null;

    const data = [];
    data.push(['REFLECTION QUESTIONS', '']);
    data.push(['', '']);

    Object.entries(this.currentContent.metacognitivePrompts).forEach(([phase, prompts]) => {
        data.push([phase.replace(/([A-Z])/g, ' $1').toUpperCase(), '']);
        prompts.forEach((prompt, index) => {
            data.push([`  ${index + 1}.`, prompt]);
        });
        data.push(['', '']);
    });

    return {
        title: 'Metacognitive Prompts',
        type: 'metacognitive',
        data: data
    };
}

createAssessmentSection() {
    if (!this.currentProblem) return null;

    const data = [];
    data.push(['ASSESSMENT QUESTIONS', '']);
    data.push(['', '']);

    const assessmentLevels = this.assessmentRubrics.knowledgeLevel;
    const topicQuestions = this.assessmentRubrics.assessmentQuestions?.[this.currentProblem.type];

    if (topicQuestions) {
        Object.entries(assessmentLevels).forEach(([level, info]) => {
            data.push([level.toUpperCase(), '']);
            data.push(['  Description:', info.description]);
            if (topicQuestions[level]) {
                data.push(['  Question:', topicQuestions[level]]);
            }
            data.push(['', '']);
        });
    } else {
        // Generic assessment structure
        Object.entries(assessmentLevels).forEach(([level, info]) => {
            data.push([level.toUpperCase(), '']);
            data.push(['  Description:', info.description]);
            data.push(['  Example:', info.example]);
            data.push(['', '']);
        });
    }

    return {
        title: 'Assessment',
        type: 'assessment',
        data: data
    };
}

createExperimentDiagramsSection(experimentContent) {
    return {
        title: 'Experiment Diagrams',
        type: 'experiment_diagrams',
        status: 'placeholder',
        note: 'Diagrams for experimental setup and expected results'
    };
}

// ========================================
// PLANT TROPISM SPECIFIC HELPER METHODS
// ========================================

getTopicRelevance(topicType) {
    const relevance = {
        phototropism: "Phototropism enables plants to optimize light capture for photosynthesis and survival",
        gravitropism: "Gravitropism ensures proper organ orientation for water uptake and light access",
        thigmotropism: "Thigmotropism allows climbing plants to find support and grow vertically",
        hydrotropism: "Hydrotropism helps roots locate water sources in heterogeneous soil environments",
        chemotropism: "Chemotropism guides pollen tubes to eggs, ensuring successful plant reproduction",
        auxin_transport: "Auxin is the master hormone coordinating all plant tropic responses",
        nastic_movements: "Nastic movements enable rapid, reversible responses to environmental stimuli"
    };

    return relevance[topicType] || "Important plant tropism concept";
}

suggestRelatedTopics() {
    if (!this.currentProblem) return [];

    const relatedTopicsMap = {
        phototropism: ['auxin_transport', 'gravitropism', 'nastic_movements'],
        gravitropism: ['auxin_transport', 'phototropism', 'hydrotropism'],
        thigmotropism: ['nastic_movements', 'auxin_transport'],
        hydrotropism: ['gravitropism', 'auxin_transport'],
        chemotropism: ['auxin_transport'],
        auxin_transport: ['phototropism', 'gravitropism', 'thigmotropism'],
        nastic_movements: ['thigmotropism', 'phototropism']
    };

    const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];

    return relatedTypes.map(type => ({
        type: type,
        name: this.tropismTopics[type]?.name,
        description: this.tropismTopics[type]?.description
    }));
}

// DIAGRAM GENERATION

generateTropismDiagramData() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    this.diagramData = {
        type: type,
        diagrams: this.getRelevantTropismDiagrams(type),
        placeholder: true,
        note: "Diagram generation will be implemented with actual plant tropism structures"
    };
}

generateGlossary() {
    if (!this.currentContent) return {};

    const glossary = {};

    // Extract from definitions
    if (this.currentContent.definition) {
        Object.entries(this.currentContent.definition).forEach(([term, definition]) => {
            glossary[term] = definition;
        });
    }

    // Extract from key definitions
    if (this.currentContent.keyDefinitions) {
        Object.entries(this.currentContent.keyDefinitions).forEach(([term, definition]) => {
            glossary[term] = definition;
        });
    }

    // Extract from mechanism structures
    if (this.currentContent.mechanism) {
        this.extractGlossaryFromMechanism(this.currentContent.mechanism, glossary);
    }

    // Extract from historical development
    if (this.currentContent.historicalDevelopment) {
        this.extractGlossaryFromHistorical(this.currentContent.historicalDevelopment, glossary);
    }

    // Auxin-related terms
    if (this.currentContent.auxinBasics) {
        glossary['Auxin'] = this.currentContent.auxinBasics.name;
        glossary['IAA'] = 'Indole-3-Acetic Acid';
    }

    // Gravitropism terms
    if (this.currentContent.gravitySensing) {
        if (this.currentContent.gravitySensing.sensor) {
            Object.entries(this.currentContent.gravitySensing.sensor).forEach(([key, value]) => {
                if (typeof value === 'string') {
                    glossary[this.formatKey(key)] = value;
                }
            });
        }
    }

    return glossary;
}

extractGlossaryFromMechanism(mechanism, glossary) {
    Object.entries(mechanism).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
            if (value.description) {
                glossary[this.formatKey(key)] = value.description;
            }
            // Recurse for nested objects
            Object.entries(value).forEach(([subKey, subValue]) => {
                if (typeof subValue === 'object' && subValue !== null && subValue.description) {
                    glossary[this.formatKey(subKey)] = subValue.description;
                }
            });
        }
    });
}

extractGlossaryFromHistorical(historical, glossary) {
    Object.entries(historical).forEach(([period, info]) => {
        if (typeof info === 'object' && info.contribution) {
            // Extract key terms from contributions
            if (typeof info.contribution === 'string') {
                // Could implement more sophisticated term extraction
            }
        }
    });
}

formatKey(key) {
    return key
        .replace(/_/g, ' ')
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

generateTropismAnalogy(concept) {
    const analogies = {
        // Phototropism
        phototropism: "Like a solar panel that automatically rotates to face the sun",
        auxin_redistribution: "Like water flowing to one side of a container, causing it to tip",
        phototropin: "Like a light sensor that triggers an automatic response",
        cholodny_went: "Like a traffic signal that redirects cars to one side of the road",
        
        // Gravitropism
        gravitropism: "Like a self-righting toy that always returns to upright position",
        statolith: "Like ball bearings in a spirit level that indicate direction",
        statocyte: "Like a biological compass that senses which way is down",
        presentation_time: "Like waiting for sand to settle in an hourglass before reading time",
        
        // Thigmotropism
        thigmotropism: "Like a hand automatically grasping an object it touches",
        tendril: "Like a prehensile tail that wraps around supports",
        circumnutation: "Like a searching hand making circular motions to find a handhold",
        coiling: "Like a spring wrapping around a rod",
        
        // Auxin
        auxin: "Like a growth hormone that tells cells how much to expand",
        polar_transport: "Like a one-way street for chemical messengers",
        PIN_proteins: "Like turnstiles that only let molecules through in one direction",
        acid_growth: "Like loosening bolts to allow expansion",
        
        // Nastic movements
        nyctinasty: "Like window blinds that open during day and close at night",
        thigmonasty: "Like a Venus flytrap snapping shut when triggered",
        pulvinus: "Like a hydraulic hinge that bends by changing fluid pressure",
        turgor: "Like a water balloon that's firm when full and limp when empty",
        motor_cells: "Like tiny water pumps that create movement",
        
        // Signaling
        calcium_signaling: "Like a spark that ignites a chain reaction",
        receptor: "Like a lock that only opens with the right key",
        signal_cascade: "Like dominoes falling in sequence to amplify a signal",
        action_potential: "Like an electrical pulse traveling along a wire"
    };

    return analogies[concept] || "Performs a specialized tropism function";
}

adaptTropismLanguage(text, level) {
    if (!text) return '';

    const adaptations = {
        basic: {
            replacements: {
                'phototropism': 'growing toward light',
                'gravitropism': 'growing in response to gravity',
                'thigmotropism': 'growing in response to touch',
                'auxin': 'plant growth hormone',
                'statolith': 'gravity-sensing particle',
                'statocyte': 'gravity-sensing cell',
                'pulvinus': 'movement joint',
                'turgor': 'water pressure in cells',
                'phototropin': 'light-sensing protein',
                'nyctinasty': 'sleep movements',
                'thigmonasty': 'touch response',
                'circumnutation': 'spiral searching movement',
                'polar transport': 'one-way movement',
                'differential growth': 'unequal growth causing bending'
            }
        },
        intermediate: {
            replacements: {
                'phototropism': 'phototropism (light-directed growth)',
                'gravitropism': 'gravitropism (gravity-directed growth)',
                'auxin': 'auxin (plant hormone)',
                'statolith': 'statolith (amyloplast)',
                'phototropin': 'phototropin (blue light receptor)'
            }
        },
        advanced: {
            replacements: {
                'auxin': 'auxin (indole-3-acetic acid, IAA)',
                'phototropin': 'phototropin 1/2 (phot1/phot2)',
                'statolith': 'statolith (sedimenting amyloplast)',
                'polar transport': 'basipetal polar auxin transport',
                'acid growth': 'acid growth hypothesis (wall acidification)',
                'PIN proteins': 'PIN auxin efflux carriers'
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

addTropismConceptualConnections(content) {
    if (!this.includeConceptualConnections) return content;

    const connections = {
        phototropism: "Phototropism connects to gravitropism through auxin redistribution. Both use the same hormone but different stimuli. Light perception links to circadian rhythms and photosynthesis optimization.",
        gravitropism: "Gravitropism ensures proper organ orientation. Root gravitropism (positive) and shoot gravitropism (negative) use same auxin signal but opposite responses. Links to plant architecture and stress resistance.",
        thigmotropism: "Thigmotropism enables climbing strategy. Relates to mechanosensing, calcium signaling, and cell wall modification. Connects to nastic movements but differs in reversibility.",
        hydrotropism: "Hydrotropism can override gravitropism under water stress, showing adaptive prioritization. Links to drought resistance, root architecture, and water potential sensing.",
        chemotropism: "Chemotropism in pollen tubes ensures fertilization. Relates to cell polarity, tip growth, and species-specific recognition. Links reproduction to molecular signaling.",
        auxin_transport: "Auxin transport underlies all major tropisms. PIN protein localization determines response direction. Connects cellular polarity to organismal responses. Links to development and pattern formation.",
        nastic_movements: "Nastic movements are rapid and reversible, unlike tropic growth responses. Use turgor changes instead of growth. Connect to circadian rhythms, ion transport, and electrical signaling in plants."
    };

    content.conceptualConnections = connections[this.currentProblem.type] || 
        "This topic connects to broader plant biology principles";

    return content;
}

enrichWithTropismExamples(content) {
    if (!this.includeExamples || content.examples) return content;

    const exampleDatabase = {
        phototropism: [
            "Houseplants leaning toward windows - common indoor observation of phototropism",
            "Seedlings under leaf litter grow toward any light gap to reach surface",
            "Sunflower heads track sun across sky (heliotropism, related to phototropism)"
        ],
        gravitropism: [
            "Seeds planted upside-down still produce upward shoots and downward roots",
            "Trees on hillsides grow vertically despite slope (negative gravitropism)",
            "Roots navigate around rocks by gravity-guided growth"
        ],
        thigmotropism: [
            "Pea tendrils coil around string or wire supports within hours",
            "Grape vines climb trellises using thigmotropic stem tendrils",
            "Cucumber plants find and wrap around stakes in gardens"
        ],
        hydrotropism: [
            "Roots grow horizontally toward moisture in dry soil",
            "Plant roots preferentially grow toward irrigation drip points",
            "Desert plants show enhanced hydrotropism for survival"
        ],
        chemotropism: [
            "Pollen tubes grow several cm through style to reach egg in ovary",
            "Fern sperm swim toward eggs using chemotropic guidance",
            "Root tips may grow toward nutrient-rich soil patches"
        ],
        auxin_transport: [
            "Rooting hormone (synthetic auxin) promotes root formation on cuttings",
            "2,4-D herbicide (synthetic auxin) kills broadleaf weeds but not grasses",
            "Apical dominance: cutting off shoot tip releases lateral buds (auxin control)"
        ],
        nastic_movements: [
            "Prayer plant leaves fold upward at night (nyctinasty)",
            "Mimosa pudica leaves fold when touched (thigmonasty)",
            "Venus flytrap snaps shut on insects (specialized thigmonasty)"
        ]
    };

    if (exampleDatabase[this.currentProblem.type]) {
        content.examples = content.examples || [];
        content.examples.push(...exampleDatabase[this.currentProblem.type]);
    }

    return content;
}

addTropismComparativeContext(content) {
    if (!this.includeComparisons || content.comparison) return content;

    const comparativeData = {
        phototropism: {
            speed: "Hours to days (growth-based)",
            reversibility: "Irreversible (permanent growth change)",
            stimulus: "Unilateral light (blue light most effective)",
            mechanism: "Auxin redistribution → differential growth"
        },
        gravitropism: {
            speed: "Hours to days (growth-based)",
            reversibility: "Irreversible (permanent growth change)",
            stimulus: "Gravity (constant directional force)",
            mechanism: "Statolith sedimentation → auxin redistribution"
        },
        thigmotropism: {
            speed: "Hours to days (growth-based)",
            reversibility: "Irreversible (permanent coiling)",
            stimulus: "Physical contact with solid object",
            mechanism: "Mechanoreception → calcium → differential growth"
        },
        nastic_movements: {
            speed: "Seconds to minutes (turgor-based)",
            reversibility: "Reversible (can repeat many times)",
            stimulus: "Various (light, touch, vibration)",
            mechanism: "Ion flux → turgor changes in motor cells"
        },
        auxin_transport: {
            direction: "Basipetal (shoot → root), polar",
            speed: "~10 mm/hour (slower than vascular transport)",
            energy: "Active transport (requires ATP)",
            carriers: "PIN efflux proteins, AUX1 influx carriers"
        }
    };

    if (comparativeData[this.currentProblem.type]) {
        content.comparativeContext = comparativeData[this.currentProblem.type];
    }

    return content;
}

validateTropismContent(content) {
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
        content.mechanism ||
        content.historicalDevelopment ||
        content.gravitySensing ||
        content.photoreceptors ||
        content.auxinSignaling;

    if (!hasSubstantiveContent) {
        validationResults.warnings.push("Limited substantive content");
        validationResults.suggestions.push("Consider adding more detailed information");
    }

    // Check for educational value
    if (!content.examples && !content.applications) {
        validationResults.suggestions.push("Consider adding examples and applications");
    }

    // Check for experimental evidence
    if (!content.experimentalEvidence) {
        validationResults.suggestions.push("Consider adding experimental evidence section");
    }

    // Check for ecological context
    if (!content.ecologicalSignificance) {
        validationResults.suggestions.push("Consider adding ecological significance");
    }

    return validationResults;
}

calculateTropismContentCompleteness() {
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
        this.currentContent.mechanism ||
        this.currentContent.historicalDevelopment ||
        this.currentContent.experimentalEvidence;
    if (hasMainContent) score += 2;

    // Additional depth
    if (this.currentContent.ecologicalSignificance) score += 1;
    if (this.currentContent.contextualScenarios) score += 1;
    if (this.currentContent.relatedExperiments) score += 1;

    return Math.round((score / maxScore) * 100);
}

getTropismContentQualityMetrics() {
    return {
        completeness: this.calculateTropismContentCompleteness(),
        hasExamples: !!this.currentContent?.examples,
        hasComparisons: !!this.currentContent?.comparison,
        hasApplications: !!this.currentContent?.applications,
        hasContextualScenarios: !!this.currentContent?.contextualScenarios,
        hasExperimentalEvidence: !!this.currentContent?.experimentalEvidence,
        hasHistoricalDevelopment: !!this.currentContent?.historicalDevelopment,
        hasEcologicalSignificance: !!this.currentContent?.ecologicalSignificance,
        detailLevel: this.explanationLevel,
        includesVisualizations: this.includeVisualizations,
        includesMisconceptions: this.includeCommonMisconceptions,
        includesExperiments: this.includeExperiments,
        adaptiveDifficulty: this.adaptiveDifficulty,
        metacognitiveSupport: this.metacognitiveSupport
    };
}

filterTropismContentByCategory(category) {
    if (!this.currentContent) return null;

    const filtered = {
        category: category,
        items: []
    };

    // Filter based on category
    if (this.currentContent.mechanism) {
        Object.entries(this.currentContent.mechanism).forEach(([key, value]) => {
            if (key.toLowerCase().includes(category.toLowerCase())) {
                filtered.items.push({ type: key, data: value });
            }
        });
    }

    if (this.currentContent.historicalDevelopment) {
        Object.entries(this.currentContent.historicalDevelopment).forEach(([key, value]) => {
            if (key.toLowerCase().includes(category.toLowerCase())) {
                filtered.items.push({ type: key, data: value });
            }
        });
    }

    return filtered;
}

generateTropismContentSummary() {
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
    if (this.currentContent.definition) {
        summary.keyPoints.push("Definition and basic concept covered");
        summary.coverage.definition = Object.keys(this.currentContent.definition).length;
    }

    if (this.currentContent.mechanism) {
        summary.keyPoints.push("Mechanism of response explained");
        summary.coverage.mechanism = true;
    }

    if (this.currentContent.historicalDevelopment) {
        summary.keyPoints.push("Historical development documented");
        summary.coverage.historical = true;
    }

    if (this.currentContent.experimentalEvidence) {
        summary.keyPoints.push("Experimental evidence provided");
        summary.coverage.experimental = true;
    }

    if (this.currentContent.examples) {
        summary.coverage.examples = this.currentContent.examples.length;
    }

    if (this.currentContent.ecologicalSignificance) {
        summary.keyPoints.push("Ecological significance explained");
        summary.coverage.ecological = true;
    }

    return summary;
}

assessTropismContentDifficulty() {
    if (!this.currentContent) return 'unknown';

    let difficultyScore = 0;

    // Topic-based difficulty
    const basicTopics = ['phototropism', 'gravitropism'];
    const intermediateTopics = ['thigmotropism', 'hydrotropism', 'nastic_movements'];
    const advancedTopics = ['chemotropism', 'auxin_transport'];

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

generateTropismLearningObjectives() {
    if (!this.currentProblem) return [];

    const objectivesDatabase = {
        phototropism: [
            "Define phototropism and distinguish positive from negative phototropism",
            "Explain the Cholodny-Went theory of auxin redistribution",
            "Describe the role of phototropins as blue light receptors",
            "Trace the historical development from Darwin to modern molecular understanding",
            "Relate phototropism to plant survival and agricultural applications"
        ],
        gravitropism: [
            "Define gravitropism and explain root vs shoot responses",
            "Describe the role of statoliths in gravity perception",
            "Explain how auxin concentration effects differ in roots vs shoots",
            "Analyze experimental evidence from clinostat and space experiments",
            "Apply gravitropism concepts to plant architecture and crop management"
        ],
        thigmotropism: [
            "Define thigmotropism and identify examples in climbing plants",
            "Explain the mechanism of tendril coiling via differential growth",
            "Describe the role of calcium in rapid touch responses",
            "Distinguish thigmotropism from thigmonasty",
            "Relate thigmotropism to plant support strategies and horticulture"
        ],
        hydrotropism: [
            "Define hydrotropism and explain its ecological importance",
            "Describe experimental challenges in studying hydrotropism",
            "Explain how hydrotropism can override gravitropism",
            "Analyze the adaptive significance in water-limited environments",
            "Apply concepts to drought resistance and irrigation strategies"
        ],
        chemotropism: [
            "Define chemotropism and explain its role in fertilization",
            "Describe the mechanism of pollen tube guidance by LURE peptides",
            "Explain species-specific recognition in plant reproduction",
            "Trace the stages of pollen tube growth and guidance",
            "Relate chemotropism to plant breeding and crop production"
        ],
        auxin_transport: [
            "Explain the structure and function of auxin (IAA)",
            "Describe polar auxin transport and the chemiosmotic model",
            "Identify the roles of PIN proteins and AUX1 carriers",
            "Explain the acid growth hypothesis",
            "Analyze how auxin concentration affects different plant organs",
            "Apply auxin concepts to practical applications (rooting hormones, herbicides)"
        ],
        nastic_movements: [
            "Distinguish nastic movements from tropic responses",
            "Explain the role of turgor changes in motor cells",
            "Describe nyctinasty and its circadian regulation",
            "Analyze thigmonasty in Mimosa pudica",
            "Compare tropisms and nastic movements in terms of mechanism and function"
        ]
    };

    return objectivesDatabase[this.currentProblem.type] || [
        "Understand the key tropism concepts",
        "Apply knowledge to plant responses and ecology",
        "Make connections between stimulus, perception, and response"
    ];
}

identifyTropismPrerequisites() {
    if (!this.currentProblem) return [];

    const prerequisitesDatabase = {
        phototropism: [
            "Basic plant structure (shoots, roots, leaves)",
            "Understanding of plant hormones (introduction to auxin)",
            "Cell structure and cell growth",
            "Light as energy source for photosynthesis"
        ],
        gravitropism: [
            "Basic plant structure and organ functions",
            "Understanding of gravity as directional force",
            "Cell structure (organelles, especially plastids)",
            "Introduction to plant hormones"
        ],
        thigmotropism: [
            "Plant structure and climbing strategies",
            "Basic understanding of stimuli and responses",
            "Cell growth and development"
        ],
        hydrotropism: [
            "Root structure and function",
            "Water uptake and transport in plants",
            "Concept of water potential"
        ],
        chemotropism: [
            "Plant reproduction basics",
            "Pollination and fertilization",
            "Cell-to-cell signaling concepts"
        ],
        auxin_transport: [
            "Plant hormones overview",
            "Cell membrane structure and transport",
            "Active vs passive transport",
            "pH and acid-base chemistry"
        ],
        nastic_movements: [
            "Plant structure",
            "Turgor pressure in plant cells",
            "Ion transport across membranes",
            "Difference between growth and movement"
        ]
    };

    return prerequisitesDatabase[this.currentProblem.type] || [
        "General plant biology background",
        "Basic understanding of plant structure"
    ];
}

generateTropismStudyTips() {
    if (!this.currentProblem) return [];

    const studyTipsDatabase = {
        phototropism: [
            "Observe houseplants by windows to see phototropism in action",
            "Create a timeline of historical experiments (Darwin → Went → modern)",
            "Draw diagrams showing auxin redistribution in lit vs shaded sides",
            "Practice explaining the Cholodny-Went theory to someone else",
            "Relate phototropism to everyday plant care (rotating pots)"
        ],
        gravitropism: [
            "Try the clinostat simulation with rotating seedlings",
            "Draw statoliths sedimenting in cells at different orientations",
            "Create comparison tables for root vs shoot gravitropism",
            "Practice calculating centrifugal force on Knight's wheel",
            "Watch time-lapse videos of gravitropic responses"
        ],
        thigmotropism: [
            "Observe pea tendrils coiling in real-time (fast process!)",
            "Draw the pulvinus structure and motor cells",
            "Create flowcharts showing touch → calcium → coiling",
            "Compare thigmotropism and thigmonasty side-by-side",
            "Practice explaining circumnutation's role in finding supports"
        ],
        hydrotropism: [
            "Design split-agar experiments to test hydrotropism",
            "Create concept maps linking water stress to hydrotropic response",
            "Compare research papers on hydrotropism (it's less studied!)",
            "Relate to drought resistance in crops"
        ],
        chemotropism: [
            "Draw pollen tube guidance with LURE gradients",
            "Create diagrams of fertilization stages",
            "Practice explaining species-specific recognition",
            "Relate to plant breeding and hybrid production"
        ],
        auxin_transport: [
            "Draw the chemiosmotic model with pH gradients",
            "Create flashcards for PIN proteins and their locations",
            "Practice drawing acid growth hypothesis step-by-step",
            "Make a comparison table: shoot vs root auxin sensitivity",
            "Relate synthetic auxins to real applications (herbicides, rooting)"
        ],
        nastic_movements: [
            "Observe prayer plants or Mimosa pudica if available",
            "Draw motor cells with ion fluxes for opening/closing",
            "Create a Venn diagram: tropisms vs nastic movements",
            "Watch time-lapse videos of nyctinasty",
            "Practice explaining turgor-based movement to others"
        ]
    };

    return studyTipsDatabase[this.currentProblem.type] || [
        "Review material regularly with active recall",
        "Create visual aids and plant diagrams",
        "Observe living plants showing tropisms",
        "Practice explaining concepts to others",
        "Relate tropism concepts to plant survival and agriculture"
    ];
}

generateTropismProcessTimeline(processName) {
    const timelines = {
        'Phototropic Response': [
            { stage: 'Light Perception', location: 'Shoot tip', duration: 'Seconds', event: 'Phototropin activation' },
            { stage: 'Signal Transduction', location: 'Shoot apex', duration: 'Minutes', event: 'PIN protein relocalization' },
            { stage: 'Auxin Redistribution', location: 'Elongation zone', duration: '15-30 minutes', event: 'Lateral auxin transport' },
            { stage: 'Differential Growth', location: 'Shaded side', duration: 'Hours', event: 'Acid growth, cell elongation' },
            { stage: 'Visible Curvature', location: 'Shoot', duration: '2-6 hours', event: 'Measurable bending toward light' }
        ],
        'Gravitropic Response': [
            { stage: 'Reorientation', location: 'Root/shoot', duration: 'Instant', event: 'Gravity direction changes' },
            { stage: 'Statolith Sedimentation', location: 'Columella cells', duration: '5-30 minutes', event: 'Amyloplasts settle to new bottom' },
            { stage: 'Signal Transduction', location: 'Root cap', duration: 'Minutes', event: 'Calcium signaling, PIN relocalization' },
            { stage: 'Auxin Redistribution', location: 'Elongation zone', duration: '30-60 minutes', event: 'Auxin accumulates on lower side' },
            { stage: 'Differential Growth', location: 'Root/shoot', duration: 'Hours', event: 'Curvature develops' },
            { stage: 'Visible Response', location: 'Organ', duration: '2-24 hours', event: 'Measurable reorientation' }
        ],
        'Thigmotropic Coiling': [
            { step: 'Contact', duration: 'Instant', event: 'Tendril touches support' },
            { step: 'Mechanoreception', duration: 'Seconds', event: 'Calcium influx on contact side' },
            { step: 'Signal Propagation', duration: 'Seconds-Minutes', event: 'Calcium signal spreads' },
            { step: 'Differential Growth Initiated', duration: '30 min - 2 hours', event: 'Contact side growth slows' },
            { step: 'Primary Coiling', duration: '6-24 hours', event: 'Tendril wraps around support' },
            { step: 'Secondary Coiling', duration: '12-48 hours', event: 'Free portions form helical coils' }
        ],
        'Nastic Movement (Mimosa)': [
            { phase: 'Stimulus', duration: 'Instant', event: 'Touch or vibration' },
            { phase: 'Perception', duration: 'Milliseconds', event: 'Mechanoreceptors activated' },
            { phase: 'Electrical Signal', duration: '~0.5 seconds', event: 'Action potential propagates (~2 cm/s)' },
            { phase: 'Ion Flux', duration: '1-2 seconds', event: 'K⁺ and Cl⁻ efflux from motor cells' },
            { phase: 'Water Loss', duration: '2-5 seconds', event: 'Turgor drops, leaflets fold' },
            { phase: 'Full Closure', duration: '5-10 seconds', event: 'Complete folding visible' },
            { phase: 'Recovery', duration: '15-30 minutes', event: 'Ions restored, leaflets reopen' }
        ],
        'Pollen Tube Growth': [
            { stage: 'Germination', location: 'Stigma', duration: 'Minutes', event: 'Pollen grain germinates' },
            { stage: 'Style Growth', location: 'Transmitting tract', duration: 'Hours', event: 'Tube grows through style (cm/hour)' },
            { stage: 'Ovary Entry', location: 'Ovary cavity', duration: 'Minutes', event: 'Emerges into ovary' },
            { stage: 'Chemotropic Guidance', location: 'Near ovule', duration: 'Minutes', event: 'LURE attracts tube to micropyle' },
            { stage: 'Fertilization', location: 'Ovule', duration: 'Minutes', event: 'Tube enters, releases sperm' }
        ]
    };

    return timelines[processName] || [];
}

generateTropismContentHierarchy() {
    if (!this.currentContent) return null;

    const hierarchy = {
        root: this.currentContent.topic,
        children: []
    };

    if (this.currentContent.definition) {
        hierarchy.children.push({
            name: 'Definition',
            type: 'section'
        });
    }

    if (this.currentContent.historicalDevelopment) {
        hierarchy.children.push({
            name: 'Historical Development',
            type: 'section',
            children: Object.keys(this.currentContent.historicalDevelopment).map(period => ({
                name: period,
                type: 'period'
            }))
        });
    }

    if (this.currentContent.mechanism) {
        hierarchy.children.push({
            name: 'Mechanism',
            type: 'section',
            children: Object.keys(this.currentContent.mechanism).map(step => ({
                name: step,
                type: 'step'
            }))
        });
    }

    if (this.currentContent.ecologicalSignificance) {
        hierarchy.children.push({
            name: 'Ecological Significance',
            type: 'section'
        });
    }

    if (this.currentContent.applications) {
        hierarchy.children.push({
            name: 'Applications',
            type: 'section'
        });
    }

    return hierarchy;
}

}

// Export the class
export default EnhancedPlantTropismWorkbook;
