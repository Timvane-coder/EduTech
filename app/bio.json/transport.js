I'll create an enhanced cellular transport workbook class following the same structure as the molecular biology workbook. Here's the complete code:
//Enhanced Cellular Transport Workbook - Comprehensive Membrane Transport System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { BiologySvgDiagrams } from '../svg-data.js';
import { BiologyDiagramsRegistry} from '../registry.js';
import { BiologyDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedCellularTransportWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "cellular";
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

        this.cellularSymbols = this.initializeCellularSymbols();
        this.setThemeColors();
        this.initializeCellularTransportTopics();
        this.initializeCellularTransportLessons();
        this.initializeCellularTransportExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            cellular: {
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
                stepBg: '#e1f5fe',
                stepText: '#01579b',
                borderColor: '#66bb6a',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#e0f2f1',
                experimentBg: '#fff9c4',
                experimentText: '#f57f17',
                passiveBg: '#e3f2fd',
                activeBg: '#fff3e0',
                bulkBg: '#f3e5f5',
                tonicityBg: '#e0f7fa'
            },
            membrane: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#00838f',
                headerText: '#ffffff',
                sectionBg: '#b2ebf2',
                sectionText: '#006064',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e0f7fa',
                resultText: '#00695c',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#26c6da',
                contentBg: '#ede7f6',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#e8eaf6',
                experimentBg: '#fffde7',
                experimentText: '#f57f17',
                passiveBg: '#e8f5e9',
                activeBg: '#fff3e0',
                bulkBg: '#f3e5f5',
                tonicityBg: '#e1f5fe'
            }
        };

        this.colors = themes[this.theme] || themes.cellular;
    }

    initializeCellularSymbols() {
        return {
            // Common ions
            'Na+': 'Na⁺',
            'K+': 'K⁺',
            'Ca2+': 'Ca²⁺',
            'Cl-': 'Cl⁻',
            'H+': 'H⁺',
            'OH-': 'OH⁻',
            'HCO3-': 'HCO₃⁻',
            
            // Chemical formulas
            'H2O': 'H₂O',
            'CO2': 'CO₂',
            'O2': 'O₂',
            'ATP': 'ATP',
            'ADP': 'ADP',
            'Pi': 'Pᵢ',
            
            // Arrows
            'arrow': '→',
            'reversible': '⇌',
            'doubleArrow': '↔',
            
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'Delta': 'Δ',
            'pi': 'π',
            'Psi': 'Ψ',
            
            // Math symbols
            'degree': '°',
            'plus': '+',
            'minus': '−',
            'approximately': '≈',
            'proportional': '∝',
            'greater': '>',
            'less': '<'
        };
    }

    initializeCellularTransportTopics() {
        this.cellularTransportTopics = {
            membrane_structure: {
                patterns: [
                    /plasma.*membrane|cell.*membrane/i,
                    /phospholipid.*bilayer|lipid.*bilayer/i,
                    /fluid.*mosaic|membrane.*structure/i,
                    /membrane.*protein|integral.*protein/i
                ],
                handler: this.handleMembraneStructure.bind(this),
                name: 'Plasma Membrane Structure',
                category: 'cell_membrane',
                description: 'Structure and composition of the cell membrane',
                difficulty: 'intermediate',
                prerequisites: ['lipids', 'proteins', 'basic_cell_structure']
            },
            
            passive_transport: {
                patterns: [
                    /passive.*transport|diffusion/i,
                    /osmosis|facilitated.*diffusion/i,
                    /concentration.*gradient|simple.*diffusion/i,
                    /channel.*protein|carrier.*protein/i
                ],
                handler: this.handlePassiveTransport.bind(this),
                name: 'Passive Transport',
                category: 'membrane_transport',
                description: 'Transport that does not require cellular energy (ATP)',
                difficulty: 'intermediate',
                prerequisites: ['membrane_structure', 'concentration_gradient']
            },
            
            active_transport: {
                patterns: [
                    /active.*transport|sodium.*potassium.*pump/i,
                    /Na.*K.*ATPase|proton.*pump/i,
                    /primary.*active|secondary.*active/i,
                    /cotransport|antiport|symport/i
                ],
                handler: this.handleActiveTransport.bind(this),
                name: 'Active Transport',
                category: 'membrane_transport',
                description: 'Energy-requiring transport against concentration gradients',
                difficulty: 'advanced',
                prerequisites: ['passive_transport', 'ATP', 'concentration_gradient']
            },
            
            bulk_transport: {
                patterns: [
                    /bulk.*transport|endocytosis|exocytosis/i,
                    /phagocytosis|pinocytosis/i,
                    /receptor.*mediated.*endocytosis/i,
                    /vesicle.*transport/i
                ],
                handler: this.handleBulkTransport.bind(this),
                name: 'Bulk Transport',
                category: 'membrane_transport',
                description: 'Transport of large molecules and particles via vesicles',
                difficulty: 'advanced',
                prerequisites: ['membrane_structure', 'vesicles', 'ATP']
            },
            
            tonicity_osmoregulation: {
                patterns: [
                    /tonicity|osmoregulation/i,
                    /hypotonic|hypertonic|isotonic/i,
                    /plasmolysis|turgor.*pressure/i,
                    /water.*potential|osmotic.*pressure/i
                ],
                handler: this.handleTonicityOsmoregulation.bind(this),
                name: 'Tonicity and Osmoregulation',
                category: 'water_balance',
                description: 'Water movement and cellular response to osmotic conditions',
                difficulty: 'intermediate',
                prerequisites: ['osmosis', 'passive_transport', 'cell_structure']
            }
        };
    }

    initializeCellularTransportLessons() {
        this.lessons = {
            membrane_structure: {
                title: "Plasma Membrane Structure: The Fluid Mosaic Model",
                concepts: [
                    "The plasma membrane is a selectively permeable barrier",
                    "Phospholipid bilayer forms the basic structure",
                    "Proteins embedded in membrane perform various functions",
                    "Membrane is fluid and dynamic, not static",
                    "Carbohydrates on surface serve as recognition markers"
                ],
                theory: "The fluid mosaic model (Singer and Nicolson, 1972) describes the cell membrane as a dynamic structure with a phospholipid bilayer containing embedded proteins that can move laterally. This structure provides both barrier function and selective permeability.",
                keyDefinitions: {
                    "Plasma Membrane": "Selectively permeable barrier separating cell interior from external environment",
                    "Phospholipid Bilayer": "Double layer of phospholipids with hydrophobic tails inside and hydrophilic heads outside",
                    "Amphipathic": "Having both hydrophobic and hydrophilic regions (describes phospholipids)",
                    "Fluid Mosaic Model": "Model describing membrane as fluid structure with embedded proteins",
                    "Integral Proteins": "Proteins embedded in membrane, often spanning entire bilayer (transmembrane)",
                    "Peripheral Proteins": "Proteins loosely attached to membrane surface",
                    "Glycocalyx": "Carbohydrate-rich coating on cell surface (glycoproteins and glycolipids)",
                    "Selective Permeability": "Membrane allows some substances to pass while blocking others"
                },
                membraneComponents: {
                    phospholipids: {
                        structure: "Glycerol + 2 fatty acids + phosphate group",
                        arrangement: "Bilayer with tails facing inward, heads facing outward",
                        function: "Forms basic structure and barrier",
                        fluidity: "Unsaturated fatty acids increase fluidity (kinks prevent tight packing)"
                    },
                    cholesterol: {
                        location: "Embedded between phospholipids",
                        function: "Modulates membrane fluidity",
                        effect: {
                            highTemp: "Reduces fluidity (restrains movement)",
                            lowTemp: "Increases fluidity (prevents tight packing)"
                        },
                        amount: "Up to 50% of membrane lipids in animal cells"
                    },
                    proteins: {
                        integralProteins: {
                            definition: "Embedded in membrane, amphipathic",
                            types: {
                                transmembrane: "Span entire membrane",
                                channels: "Form pores for specific molecules",
                                carriers: "Bind and transport specific molecules",
                                receptors: "Bind signaling molecules",
                                enzymes: "Catalyze reactions at membrane"
                            },
                            removal: "Requires detergents to extract"
                        },
                        peripheralProteins: {
                            definition: "Attached to membrane surface",
                            attachment: "Ionic bonds to integral proteins or lipid heads",
                            functions: "Structural support, signaling, enzymatic",
                            removal: "Easy to remove (gentle methods)"
                        }
                    },
                    carbohydrates: {
                        location: "Always on extracellular surface",
                        types: {
                            glycoproteins: "Carbohydrate attached to protein",
                            glycolipids: "Carbohydrate attached to lipid"
                        },
                        functions: [
                            "Cell-cell recognition",
                            "Tissue formation",
                            "Immune recognition (self vs non-self)",
                            "Cell surface markers (blood types)"
                        ],
                        glycocalyx: "Fuzzy carbohydrate coat on cell surface"
                    }
                },
                fluidMosaicModel: {
                    proposed: "Singer and Nicolson (1972)",
                    fluid: {
                        meaning: "Phospholipids and proteins can move laterally",
                        factors: [
                            "Temperature (higher = more fluid)",
                            "Fatty acid saturation (unsaturated = more fluid)",
                            "Cholesterol content (moderates fluidity)",
                            "Protein content"
                        ]
                    },
                    mosaic: {
                        meaning: "Proteins scattered throughout like tiles in mosaic",
                        diversity: "Different proteins perform different functions"
                    },
                    evidence: [
                        "Freeze-fracture electron microscopy (shows proteins embedded)",
                        "FRAP (Fluorescence Recovery After Photobleaching) - shows lateral movement",
                        "Cell fusion experiments (mouse-human hybrid cells)"
                    ]
                },
                membraneAsymmetry: {
                    lipidAsymmetry: "Different lipid composition in inner vs outer leaflet",
                    proteinAsymmetry: "Proteins oriented in specific direction (functional)",
                    carbohydrateAsymmetry: "Carbohydrates only on extracellular side"
                },
                selectivePermeability: {
                    principle: "Membrane allows some substances to cross but not others",
                    permeability: {
                        highlyPermeable: [
                            "Small nonpolar molecules (O₂, CO₂, N₂)",
                            "Small uncharged polar molecules (H₂O, ethanol, glycerol)"
                        ],
                        lowPermeability: [
                            "Large polar molecules (glucose, sucrose)",
                            "Ions (Na⁺, K⁺, Ca²⁺, Cl⁻, H⁺)"
                        ],
                        impermeable: [
                            "Very large molecules (proteins, polysaccharides)",
                            "Highly charged molecules"
                        ]
                    },
                    basis: "Hydrophobic interior repels polar and charged molecules"
                },
                applications: [
                    "Understanding drug delivery (lipid-soluble drugs cross easily)",
                    "Membrane disorders (cholesterol imbalance, protein defects)",
                    "Designing artificial membranes and liposomes",
                    "Understanding pathogen entry mechanisms",
                    "Cell signaling and receptor function"
                ]
            },

            passive_transport: {
                title: "Passive Transport: Movement Down Concentration Gradients",
                concepts: [
                    "Passive transport requires no cellular energy (ATP)",
                    "Molecules move down their concentration gradient",
                    "Three types: simple diffusion, facilitated diffusion, osmosis",
                    "Driven by kinetic energy and entropy",
                    "Rate depends on concentration gradient and membrane permeability"
                ],
                theory: "Passive transport is the spontaneous movement of substances across membranes down their concentration gradient. This process is driven by the kinetic energy of molecules and the tendency toward entropy (disorder), requiring no ATP expenditure by the cell.",
                keyDefinitions: {
                    "Passive Transport": "Movement of substances across membrane without energy input from cell",
                    "Concentration Gradient": "Difference in concentration between two regions",
                    "Diffusion": "Net movement of particles from high to low concentration",
                    "Facilitated Diffusion": "Diffusion through protein channels or carriers",
                    "Osmosis": "Diffusion of water across selectively permeable membrane",
                    "Equilibrium": "State where no net movement occurs (concentrations equal)",
                    "Channel Protein": "Protein forming pore allowing specific molecules to pass",
                    "Carrier Protein": "Protein that binds molecule and changes shape to transport it",
                    "Aquaporin": "Channel protein specific for water molecules"
                },
                types: {
                    simpleDiffusion: {
                        definition: "Direct movement through lipid bilayer",
                        molecules: "Small nonpolar (O₂, CO₂), small uncharged polar (H₂O, ethanol)",
                        mechanism: "Dissolve in lipid bilayer and cross",
                        rate: "Depends on size, polarity, concentration gradient, temperature",
                        noSaturation: "Rate increases linearly with concentration",
                        fickLaw: "Rate ∝ (surface area × concentration gradient × permeability) / thickness"
                    },
                    facilitatedDiffusion: {
                        definition: "Diffusion through protein channels or carriers",
                        molecules: "Polar molecules (glucose, amino acids) and ions (Na⁺, K⁺, Cl⁻)",
                        mechanism: {
                            channels: "Form pores; ions flow through when open",
                            carriers: "Bind molecule, change shape, release on other side"
                        },
                        characteristics: [
                            "Faster than simple diffusion",
                            "Specific for certain molecules",
                            "Shows saturation (limited number of proteins)",
                            "Can be regulated (gated channels)"
                        ],
                        gatedChannels: {
                            voltageGated: "Open/close in response to voltage changes",
                            ligandGated: "Open when specific molecule binds",
                            mechanicallyGated: "Open in response to physical force"
                        }
                    },
                    osmosis: {
                        definition: "Diffusion of water across selectively permeable membrane",
                        direction: "Water moves from low solute (high water potential) to high solute (low water potential)",
                        mechanism: "Water moves through lipid bilayer and aquaporins",
                        aquaporins: {
                            discovery: "Peter Agre (2003 Nobel Prize)",
                            function: "Channel proteins specific for water",
                            rate: "Billions of water molecules per second per channel",
                            selectivity: "Allows water but excludes ions (H⁺)"
                        },
                        osmoticPressure: {
                            definition: "Pressure required to prevent osmosis",
                            calculation: "π = iMRT (i=ions, M=molarity, R=gas constant, T=temp)",
                            importance: "Determines water movement between solutions"
                        }
                    }
                },
                concentrationGradient: {
                    definition: "Difference in concentration across space",
                    energySource: "Potential energy stored in gradient",
                    tendency: "Molecules spontaneously move down gradient (high → low)",
                    equilibrium: "Reached when concentrations equal (no net movement)",
                    dynamicEquilibrium: "Individual molecules still move, but no net change"
                },
                factorsAffectingRate: {
                    concentrationGradient: "Steeper gradient = faster diffusion",
                    temperature: "Higher temperature = more kinetic energy = faster",
                    moleculeSize: "Smaller molecules diffuse faster",
                    moleculePolarity: "Nonpolar crosses faster than polar",
                    membraneThickness: "Thinner membrane = faster diffusion",
                    surfaceArea: "Larger area = more diffusion",
                    membranePermeability: "More permeable = faster crossing"
                },
                comparison: {
                    simpleDiffusion: {
                        pathway: "Through lipid bilayer",
                        molecules: "Small, nonpolar",
                        proteins: "None required",
                        specificity: "Non-specific",
                        saturation: "No",
                        competition: "No"
                    },
                    facilitatedDiffusion: {
                        pathway: "Through proteins",
                        molecules: "Polar, ions",
                        proteins: "Channels or carriers",
                        specificity: "Highly specific",
                        saturation: "Yes",
                        competition: "Yes (for carrier sites)"
                    },
                    osmosis: {
                        pathway: "Through bilayer and aquaporins",
                        molecules: "Water only",
                        proteins: "Aquaporins (optional but faster)",
                        specificity: "Water-specific",
                        saturation: "No (through bilayer), Yes (through aquaporins)",
                        direction: "Toward higher solute concentration"
                    }
                },
                examples: [
                    {
                        process: "Gas exchange in lungs",
                        type: "Simple diffusion",
                        molecules: "O₂ and CO₂",
                        gradient: "O₂ high in alveoli → low in blood; CO₂ high in blood → low in alveoli"
                    },
                    {
                        process: "Glucose uptake in muscle",
                        type: "Facilitated diffusion",
                        carrier: "GLUT4 transporter",
                        regulation: "Insulin increases GLUT4 on membrane"
                    },
                    {
                        process: "Water reabsorption in kidney",
                        type: "Osmosis",
                        channels: "Aquaporin-2",
                        regulation: "ADH (antidiuretic hormone) increases aquaporin insertion"
                    }
                ],
                applications: [
                    "Dialysis (kidney treatment removes waste by diffusion)",
                    "Drug delivery (lipid-soluble drugs absorbed faster)",
                    "Preserving food (high salt/sugar draws water from bacteria)",
                    "Understanding edema (fluid accumulation in tissues)",
                    "Oxygen therapy (increases O₂ gradient for diffusion)"
                ]
            },

            active_transport: {
                title: "Active Transport: Energy-Driven Movement Against Gradients",
                concepts: [
                    "Active transport requires cellular energy (ATP)",
                    "Moves molecules against their concentration gradient",
                    "Maintains concentration differences across membranes",
                    "Two types: primary (direct ATP use) and secondary (indirect)",
                    "Essential for ion gradients, nutrient uptake, and nerve function"
                ],
                theory: "Active transport uses cellular energy to move substances against their concentration gradient (from low to high concentration). This process is essential for maintaining ion gradients, concentrating nutrients, and removing waste products.",
                keyDefinitions: {
                    "Active Transport": "Movement of substances against concentration gradient using cellular energy",
                    "ATP (Adenosine Triphosphate)": "Primary energy currency of cells",
                    "Ion Pump": "Protein that actively transports ions across membrane",
                    "Primary Active Transport": "Directly uses ATP to transport molecules",
                    "Secondary Active Transport": "Uses electrochemical gradient created by primary transport",
                    "Cotransport": "Transport of two substances in same direction",
                    "Antiport": "Transport of two substances in opposite directions",
                    "Symport": "Type of cotransport (both substances move same direction)",
                    "Electrochemical Gradient": "Combined gradient of concentration and electrical charge"
                },
                types: {
                    primaryActiveTransport: {
                        definition: "Direct use of ATP to transport molecules",
                        energySource: "ATP hydrolysis (ATP → ADP + Pᵢ + energy)",
                        examples: {
                            sodiumPotassiumPump: {
                                name: "Na⁺/K⁺-ATPase",
                                discovery: "Jens Skou (1997 Nobel Prize)",
                                function: "Maintains ion gradients across plasma membrane",
                                mechanism: [
                                    "1. Pump binds 3 Na⁺ ions inside cell",
                                    "2. ATP binds and is hydrolyzed to ADP + Pᵢ",
                                    "3. Phosphorylation causes conformational change",
                                    "4. Pump opens to outside, releases 3 Na⁺",
                                    "5. Pump binds 2 K⁺ ions outside",
                                    "6. Dephosphorylation causes return to original shape",
                                    "7. Pump opens to inside, releases 2 K⁺",
                                    "8. Cycle repeats"
                                ],
                                stoichiometry: "3 Na⁺ out : 2 K⁺ in : 1 ATP",
                                electrogenic: "Yes (net movement of 1+ charge outward)",
                                importance: [
                                    "Maintains resting membrane potential",
                                    "Drives secondary active transport",
                                    "Controls cell volume",
                                    "Essential for nerve impulses"
                                ],
                                energyUse: "Uses ~30% of cell's ATP (up to 70% in neurons)",
                                inhibitors: "Ouabain (cardiac glycoside)"
                            },
                            calciumPump: {
                                name: "Ca²⁺-ATPase",
                                location: "Plasma membrane and sarcoplasmic reticulum",
                                function: "Pumps Ca²⁺ out of cytoplasm",
                                importance: "Maintains low cytoplasmic Ca²⁺ (~10⁻⁷ M vs 10⁻³ M outside)",
                                role: "Ca²⁺ signaling, muscle relaxation"
                            },
                            protonPump: {
                                name: "H⁺-ATPase",
                                locations: [
                                    "Stomach lining (secretes HCl)",
                                    "Plant vacuoles (acidifies interior)",
                                    "Lysosomes (maintains acidic pH ~4.5)",
                                    "Mitochondria/chloroplasts (chemiosmosis)"
                                ],
                                function: "Creates pH gradients",
                                applications: "Drug targets (proton pump inhibitors for ulcers)"
                            }
                        }
                    },
                    secondaryActiveTransport: {
                        definition: "Uses electrochemical gradient to drive transport of another substance",
                        energySource: "Ion gradient created by primary active transport (indirect ATP use)",
                        types: {
                            symport: {
                                definition: "Both substances move in same direction",
                                examples: [
                                    {
                                        name: "Na⁺-glucose cotransporter (SGLT)",
                                        location: "Intestinal epithelium, kidney tubules",
                                        mechanism: "Na⁺ flows down gradient, pulls glucose against gradient",
                                        stoichiometry: "2 Na⁺ : 1 glucose",
                                        importance: "Glucose absorption from gut and kidney reabsorption"
                                    },
                                    {
                                        name: "Na⁺-amino acid cotransporters",
                                        location: "Intestine, kidney",
                                        function: "Absorb amino acids using Na⁺ gradient"
                                    }
                                ]
                            },
                            antiport: {
                                definition: "Two substances move in opposite directions",
                                examples: [
                                    {
                                        name: "Na⁺-H⁺ exchanger (NHE)",
                                        mechanism: "Na⁺ in, H⁺ out",
                                        location: "Most cells",
                                        function: "Regulates intracellular pH"
                                    },
                                    {
                                        name: "Na⁺-Ca²⁺ exchanger (NCX)",
                                        mechanism: "3 Na⁺ in, 1 Ca²⁺ out",
                                        location: "Heart muscle, neurons",
                                        function: "Maintains low cytoplasmic Ca²⁺",
                                        importance: "Cardiac muscle relaxation"
                                    },
                                    {
                                        name: "Cl⁻-HCO₃⁻ exchanger",
                                        mechanism: "Cl⁻ in, HCO₃⁻ out (or vice versa)",
                                        location: "Red blood cells",
                                        function: "CO₂ transport in blood"
                                    }
                                ]
                            }
                        },
                        dependence: "Requires primary active transport to maintain ion gradient",
                        efficiency: "One ATP can drive multiple secondary transport events"
                    }
                },
                electrochemicalGradient: {
                    definition: "Combined effect of concentration gradient and electrical gradient",
                    components: {
                        chemicalGradient: "Concentration difference (high → low)",
                        electricalGradient: "Charge difference (+ → - or - → +)"
                    },
                    importance: "Determines actual direction and energy of ion movement",
                    example: "Na⁺ enters cells passively (both gradients favor inward movement)"
                },
                energetics: {
                    ATPHydrolysis: "ATP + H₂O → ADP + Pᵢ + energy (~30.5 kJ/mol)",
                    conformationalChange: "Energy from ATP changes pump protein shape",
                    uphill: "Active transport is thermodynamically unfavorable (requires energy)",
                    coupling: "ATP hydrolysis coupled to unfavorable transport"
                },
                regulation: {
                    enzymeLevels: "Increase/decrease number of pump proteins",
                    activity: "Phosphorylation, hormones regulate pump activity",
                    feedback: "Product accumulation can inhibit transport",
                    hormonal: {
                        insulin: "Increases Na⁺/K⁺-ATPase activity",
                        thyroid: "Increases pump synthesis",
                        aldosterone: "Increases Na⁺ reabsorption (kidney)"
                    }
                },
                comparison: {
                    activeVsPassive: [
                        {feature: "Energy", passive: "None (ATP-independent)", active: "ATP required"},
                        {feature: "Direction", passive: "Down gradient (high → low)", active: "Against gradient (low → high)"},
                        {feature: "Proteins", passive: "Channels, carriers (optional)", active: "Pumps (required)"},
                        {feature: "Specificity", passive: "Moderate to high", active: "Very high"},
                        {feature: "Saturation", passive: "Facilitated shows saturation", active: "Shows saturation"},
                        {feature: "Equilibrium", passive: "Reaches equilibrium", active: "Maintains disequilibrium"}
                    ],
                    primaryVsSecondary: [
                        {feature: "Energy source", primary: "Direct ATP hydrolysis", secondary: "Ion gradient (indirect ATP)"},
                        {feature: "Protein type", primary: "ATPase pump", secondary: "Cotransporter"},
                        {feature: "Example", primary: "Na⁺/K⁺-ATPase", secondary: "Na⁺-glucose symporter"}
                    ]
                },
                examples: [
                    {
                        system: "Nerve impulse",
                        transport: "Na⁺/K⁺ pump maintains resting potential",
                        importance: "Essential for action potential propagation"
                    },
                    {
                        system: "Kidney",
                        transport: "Reabsorbs 99% of filtered glucose via Na⁺-glucose symporter",
                        disease: "Diabetes → glucose in urine (exceeds transport capacity)"
                    },
                    {
                        system: "Stomach",
                        transport: "H⁺/K⁺-ATPase secretes acid (HCl)",
                        treatment: "Proton pump inhibitors (omeprazole) reduce acid"
                    }
                ],
                applications: [
                    "Understanding nerve function and neurological disorders",
                    "Drug design (cardiac glycosides, proton pump inhibitors)",
                    "Cystic fibrosis (defective Cl⁻ channel affects transport)",
                    "Kidney disease and dialysis",
                    "Cardiac function (Na⁺/K⁺ pump critical for heart rhythm)"
                ]
            },

            bulk_transport: {
                title: "Bulk Transport: Moving Large Molecules and Particles",
                concepts: [
                    "Bulk transport moves large particles or quantities of material",
                    "Involves vesicle formation and fusion with membrane",
                    "Requires ATP for vesicle budding and fusion",
                    "Two main types: endocytosis (into cell) and exocytosis (out of cell)",
                    "Essential for nutrient uptake, waste removal, and cell communication"
                ],
                theory: "Bulk transport moves large molecules, particles, or large quantities of material across the plasma membrane using vesicles. Unlike channel or carrier proteins which transport individual molecules, bulk transport can move macromolecules, aggregates of molecules, or even whole cells.",
                keyDefinitions: {
                    "Bulk Transport": "Movement of large quantities or large particles via vesicles",
                    "Vesicle": "Small membrane-bound sac that transports materials",
                    "Endocytosis": "Process of taking materials into cell by forming vesicles",
                    "Exocytosis": "Process of releasing materials from cell by vesicle fusion",
                    "Phagocytosis": "\"Cell eating\" - engulfing large particles or cells",
                    "Pinocytosis": "\"Cell drinking\" - taking in fluid and dissolved solutes",
                    "Receptor-Mediated Endocytosis": "Specific uptake via receptor binding",
                    "Coated Pit": "Depression in membrane coated with clathrin protein"
                },
                types: {
                    endocytosis: {
                        definition: "Taking materials into cell by vesicle formation",
                        energyRequired: "ATP for vesicle budding and transport",
                        types: {
                            phagocytosis: {
                                name: "Phagocytosis (cell eating)",
                                particles: "Large particles (bacteria, dead cells, debris)",
                                size: "Vesicles >250 nm (visible by light microscope)",
                                mechanism: [
                                    "1. Particle binds to receptors on cell surface",
                                    "2. Membrane extends pseudopodia around particle",
                                    "3. Pseudopodia fuse, engulfing particle",
                                    "4. Phagosome (vesicle) forms inside cell",
                                    "5. Phagosome fuses with lysosome → phagolysosome",
                                    "6. Lysosomal enzymes digest contents",
                                    "7. Useful products absorbed, waste expelled"
                                ],
                                cells: "White blood cells (neutrophils, macrophages), amoebas",
                                function: "Defense (destroy pathogens), waste removal, nutrient acquisition",
                                example: "Macrophages engulf bacteria during infection"
                            },
                            pinocytosis: {
                                name: "Pinocytosis (cell drinking)",
                                material: "Extracellular fluid with dissolved solutes",
                                size: "Small vesicles <150 nm",
                                mechanism: [
                                    "1. Membrane invaginates (folds inward)",
                                    "2. Vesicle pinches off into cytoplasm",
                                    "3. Vesicle contents processed or transported"
                                ],
                                cells: "Most cells (continuous process)",
                                nonspecific: "Takes in whatever is in extracellular fluid",
                                function: "Sample extracellular environment, nutrient uptake"
                            },
                            receptorMediatedEndocytosis: {
                                name: "Receptor-Mediated Endocytosis (RME)",
                                specificity: "Highly specific - only molecules that bind receptors",
                                mechanism: [
                                    "1. Ligands bind to specific receptors on membrane",
                                    "2. Receptors cluster in clathrin-coated pits",
                                    "3. Coated pit invaginates",
                                    "4. Clathrin-coated vesicle pinches off",
                                    "5. Clathrin coat removed",
                                    "6. Vesicle fuses with endosome",
                                    "7. Contents sorted: receptors recycled, ligands processed"
                                ],
                                clathrin: "Protein forming lattice coat on vesicle",
                                examples: [
                                    {
                                        molecule: "LDL cholesterol",
                                        receptor: "LDL receptor",
                                        disease: "Familial hypercholesterolemia (defective LDL receptors)"
                                    },
                                    {
                                        molecule: "Iron (bound to transferrin)",
                                        receptor: "Transferrin receptor",
                                        importance: "Iron uptake for hemoglobin synthesis"
                                    },
                                    {
                                        molecule: "Insulin",
                                        receptor: "Insulin receptor",
                                        function: "Hormone uptake and signaling"
                                    }
                                ],
                                efficiency: "Concentrates specific molecules from dilute solutions",
                                recycling: "Receptors often returned to membrane for reuse"
                            }
                        },
                        fate: {
                            digestivePathway: "Vesicle fuses with lysosome, contents digested",
                            transcytosis: "Vesicle moves through cell, releases on other side",
                            signaling: "Receptor-ligand complex triggers signaling pathways"
                        }
                    },
                    exocytosis: {
                        definition: "Secretion of materials from cell by vesicle fusion with plasma membrane",
                        energyRequired: "ATP for vesicle transport and membrane fusion",
                        mechanism: [
                            "1. Materials packaged into secretory vesicles (usually from Golgi)",
                            "2. Vesicles transported to plasma membrane",
                            "3. Vesicle membrane fuses with plasma membrane",
                            "4. Contents released to extracellular space",
                            "5. Vesicle membrane incorporated into plasma membrane"
                        ],
                        types: {
                            constitutive: {
                                definition: "Continuous, unregulated secretion",
                                function: "Deliver membrane proteins and lipids to cell surface",
                                example: "Plasma membrane maintenance, ECM protein secretion"
                            },
                            regulated: {
                                definition: "Secretion in response to signal (Ca²⁺ influx)",
                                storage: "Materials stored in vesicles until signal received",
                                examples: [
                                    "Neurotransmitter release (neurons)",
                                    "Hormone secretion (endocrine cells)",
                                    "Digestive enzyme release (pancreas)",
                                    "Insulin secretion (pancreatic β-cells)"
                                ]
                            }
                        },
                        SNAREs: {
                            definition: "SNARE proteins mediate vesicle fusion",
                            mechanism: "v-SNARE (vesicle) binds t-SNARE (target membrane), pulls membranes together",
                            importance: "Essential for all vesicle fusion events"
                        },
                        examples: [
                            {
                                cell: "Neurons",
                                secretion: "Neurotransmitters",
                                trigger: "Action potential → Ca²⁺ influx"
                            },
                            {
                                cell: "Pancreatic β-cells",
                                secretion: "Insulin",
                                trigger: "High blood glucose → Ca²⁺ influx"
                            },
                            {
                                cell: "Mast cells",
                                secretion: "Histamine",
                                trigger: "Allergen binding → degranulation"
                            }
                        ]
                    }
                },
                energyCost: {
                    ATP: "Required for vesicle budding, transport, and fusion",
                    cytoskeleton: "Motor proteins use ATP to move vesicles along tracks",
                    compared: "More energy-intensive than channel/carrier transport"
                },
                regulation: {
                    calcium: "Ca²⁺ triggers regulated exocytosis",
                    GTPases: "Rab proteins regulate vesicle trafficking",
                    SNAREs: "Specificity of vesicle fusion",
                    signals: "Hormones, neurotransmitters, intracellular signals"
                },
                comparison: [
                    {type: "Phagocytosis", material: "Large particles", size: ">250 nm", specificity: "Moderate", cells: "Specialized (WBCs)"},
                    {type: "Pinocytosis", material: "Fluids, solutes", size: "<150 nm", specificity: "Non-specific", cells: "Most cells"},
                    {type: "Receptor-mediated", material: "Specific molecules", size: "<150 nm", specificity: "Highly specific", cells: "Most cells"},
                    {type: "Exocytosis", material: "Secretory products", size: "Variable", specificity: "Varies", cells: "All cells"}
                ],
                examples: [
                    {
                        process: "Immune response",
                        mechanism: "Macrophages phagocytose bacteria",
                        importance: "Primary defense against infection"
                    },
                    {
                        process: "Cholesterol uptake",
                        mechanism: "Receptor-mediated endocytosis of LDL",
                        disease: "Hypercholesterolemia (receptor defect)"
                    },
                    {
                        process: "Neurotransmission",
                        mechanism: "Exocytosis of neurotransmitters",
                        importance: "Communication between neurons"
                    },
                    {
                        process: "Waste removal",
                        mechanism: "Phagocytosis of apoptotic cells",
                        importance: "Tissue homeostasis"
                    }
                ],
                applications: [
                    "Drug delivery (nanoparticles taken up by endocytosis)",
                    "Vaccine design (adjuvants enhance phagocytosis)",
                    "Gene therapy (viral vectors use endocytosis to enter cells)",
                    "Understanding viral entry mechanisms",
                    "Botulinum toxin therapy (blocks exocytosis of neurotransmitters)"
                ]
            },

            tonicity_osmoregulation: {
                title: "Tonicity and Osmoregulation: Water Balance in Cells",
                concepts: [
                    "Tonicity describes relative solute concentration of solutions",
                    "Water moves by osmosis toward higher solute concentration",
                    "Cells respond differently to hypotonic, isotonic, and hypertonic environments",
                    "Plant and animal cells have different responses to osmotic stress",
                    "Organisms regulate internal osmotic environment (osmoregulation)"
                ],
                theory: "Tonicity refers to the relative concentration of solutes in two solutions separated by a semipermeable membrane. Water movement by osmosis is determined by tonicity, and cells must regulate their internal environment to prevent damage from excessive water gain or loss.",
                keyDefinitions: {
                    "Tonicity": "Relative concentration of solutes in solution compared to another solution",
                    "Hypotonic": "Solution with lower solute concentration (more water) than comparison",
                    "Hypertonic": "Solution with higher solute concentration (less water) than comparison",
                    "Isotonic": "Solutions with equal solute concentrations",
                    "Osmotic Pressure": "Pressure required to prevent osmosis",
                    "Water Potential": "Potential energy of water; water moves from high to low water potential",
                    "Turgor Pressure": "Pressure of cell contents against cell wall (plants)",
                    "Plasmolysis": "Shrinkage of plant cell membrane away from cell wall",
                    "Cytolysis": "Bursting of cell due to excessive water influx",
                    "Osmoregulation": "Maintenance of internal osmotic environment",
                    "Osmolarity": "Total concentration of solute particles (mOsm)"
                },
                tonicityEffects: {
                    hypotonicSolution: {
                        definition: "Lower solute concentration outside cell than inside",
                        waterMovement: "Net movement INTO cell (osmosis)",
                        animalCell: {
                            effect: "Swells and may burst (cytolysis/lysis)",
                            noCellWall: "No rigid structure to resist swelling",
                            examples: "RBCs in distilled water will lyse"
                        },
                        plantCell: {
                            effect: "Becomes turgid (swollen, firm)",
                            cellWall: "Prevents bursting by exerting back pressure",
                            turgor: "Turgor pressure increases, cell becomes rigid",
                            importance: "Turgidity provides support to herbaceous plants",
                            note: "Optimal condition for plant cells"
                        }
                    },
                    hypertonicSolution: {
                        definition: "Higher solute concentration outside cell than inside",
                        waterMovement: "Net movement OUT OF cell (osmosis)",
                        animalCell: {
                            effect: "Shrinks, becomes shriveled (crenation)",
                            examples: "RBCs in concentrated salt solution crenate",
                            consequence: "Loss of function, potential cell death"
                        },
                        plantCell: {
                            effect: "Plasmolysis - membrane pulls away from cell wall",
                            stages: [
                                "Incipient plasmolysis: Just beginning to pull away",
                                "Evident plasmolysis: Clear gap between membrane and wall",
                                "Final plasmolysis: Membrane fully retracted, cell flaccid"
                            ],
                            consequence: "Plant wilts; can be reversed if not too severe",
                            example: "Salting vegetables draws water out (preservation)"
                        }
                    },
                    isotonicSolution: {
                        definition: "Equal solute concentration inside and outside cell",
                        waterMovement: "No net movement (equilibrium)",
                        animalCell: {
                            effect: "Maintains normal shape and volume",
                            ideal: "Isotonic condition is optimal for animal cells",
                            examples: "0.9% NaCl (physiological saline), blood plasma"
                        },
                        plantCell: {
                            effect: "Flaccid (limp), no turgor pressure",
                            notIdeal: "Plants need hypotonic environment for rigidity",
                            consequence: "Plant droops, not ideal"
                        }
                    }
                },
                waterPotential: {
                    definition: "Potential energy of water; determines water movement",
                    symbol: "Ψ (psi)",
                    units: "Pascals (Pa) or megapascals (MPa) or bars",
                    equation: "Ψ = Ψs + Ψp",
                    components: {
                        solutePotential: {
                            symbol: "Ψs (also called osmotic potential)",
                            definition: "Effect of solutes on water potential",
                            value: "Always negative (solutes lower water potential)",
                            pureWater: "Ψs = 0",
                            moreSolute: "More negative Ψs"
                        },
                        pressurePotential: {
                            symbol: "Ψp",
                            definition: "Physical pressure on water",
                            value: "Positive (pressure increases water potential) or negative (tension)",
                            turgor: "Turgor pressure in plants is positive Ψp",
                            atmosphericPressure: "Ψp = 0 at atmospheric pressure"
                        }
                    },
                    principle: "Water moves from high Ψ to low Ψ",
                    pureWater: "Ψ = 0 (maximum water potential)",
                    calculation: {
                        example: "Cell with solutes (Ψs = -0.5 MPa) and turgor (Ψp = +0.3 MPa) → Ψ = -0.2 MPa",
                        direction: "Water enters if outside Ψ > inside Ψ"
                    }
                },
                osmoregulation: {
                    definition: "Maintenance of water and solute balance",
                    importance: "Prevents osmotic stress, maintains cell volume",
                    strategies: {
                        freshwaterOrganisms: {
                            problem: "Hypotonic environment (water constantly enters)",
                            solutions: [
                                "Contractile vacuoles (pump water out) - protists",
                                "Dilute urine production - fish",
                                "Active uptake of salts from environment"
                            ],
                            example: "Paramecium uses contractile vacuole to expel excess water"
                        },
                        marinOrganisms: {
                            problem: "Hypertonic environment (water constantly leaves)",
                            solutions: [
                                "Drink seawater, excrete excess salt - marine fish",
                                "Match internal osmolarity to seawater - sharks (urea retention)",
                                "Minimize water loss - waxy cuticle in marine plants"
                            ],
                            example: "Sharks retain urea to increase internal osmolarity"
                        },
                        terrestrialOrganisms: {
                            problem: "Variable environments, risk of dehydration",
                            solutions: [
                                "Kidneys concentrate urine - mammals",
                                "Waxy cuticle prevents water loss - plants",
                                "Behavioral adaptations - seek water, shade",
                                "Stomata control water loss - plants"
                            ],
                            example: "Kangaroo rat produces very concentrated urine, gets water from metabolism"
                        }
                    },
                    hormones: {
                        ADH: {
                            fullName: "Antidiuretic hormone (vasopressin)",
                            function: "Increases water reabsorption in kidney",
                            mechanism: "Increases aquaporin-2 channels in collecting duct",
                            trigger: "High blood osmolarity (dehydration)",
                            effect: "Concentrated urine, water retention"
                        },
                        aldosterone: {
                            function: "Increases Na⁺ reabsorption in kidney",
                            effect: "Water follows Na⁺, increases blood volume",
                            trigger: "Low blood pressure, low Na⁺"
                        }
                    }
                },
                cellularAdaptations: {
                    animalCells: {
                        strategies: [
                            "Maintain isotonic internal environment (homeostasis)",
                            "Na⁺/K⁺ pump maintains ion gradients",
                            "Kidney regulates blood osmolarity",
                            "Some cells can regulate volume (regulatory volume decrease/increase)"
                        ],
                        vulnerability: "More vulnerable to osmotic stress than plant cells"
                    },
                    plantCells: {
                        cellWall: "Rigid structure prevents lysis in hypotonic solution",
                        turgorPressure: "Internal pressure provides structural support",
                        vacuole: "Large central vacuole regulates water content",
                        advantage: "Can tolerate wide range of external osmotic conditions"
                    }
                },
                medicalApplications: {
                    IVfluids: {
                        requirement: "Must be isotonic to blood (0.9% NaCl or 5% glucose)",
                        hypotonc: "Would cause RBC lysis",
                        hypertonic: "Would cause RBC crenation"
                    },
                    oralRehydration: {
                        principle: "Salt and sugar solution for diarrhea treatment",
                        mechanism: "Na⁺-glucose cotransporter drives water absorption",
                        composition: "Balanced electrolytes and glucose"
                    },
                    edema: {
                        cause: "Fluid accumulation in tissues due to osmotic imbalance",
                        types: "Pulmonary edema, cerebral edema, peripheral edema",
                        treatment: "Diuretics, addressing underlying cause"
                    }
                },
                examples: [
                    {
                        organism: "Red blood cells",
                        hypotonic: "Swell and lyse (hemolysis)",
                        isotonic: "Normal, biconcave shape",
                        hypertonic: "Shrink and crenate"
                    },
                    {
                        organism: "Plant cells (Elodea)",
                        hypotonic: "Turgid, firm",
                        isotonic: "Flaccid, limp",
                        hypertonic: "Plasmolyzed"
                    },
                    {
                        scenario: "Drinking seawater",
                        effect: "Hypertonic to body fluids → dehydration worsens",
                        reason: "Body uses more water to excrete excess salt than gained from drinking"
                    }
                ],
                applications: [
                    "IV fluid selection in medicine",
                    "Food preservation (salting, sugaring draws water from bacteria)",
                    "Understanding kidney function and renal disease",
                    "Plant irrigation (avoid saline water)",
                    "Cryopreservation (prevent ice crystal damage)"
                ]
            }
        };
    }

    initializeCellularTransportExperiments() {
        this.cellularTransportExperiments = {
            pfeffer_osmometer: {
                name: "Pfeffer's Osmometer - First Quantitative Study of Osmotic Pressure",
                relatedTopics: ['passive_transport', 'tonicity_osmoregulation'],
                category: 'osmosis',
                historicalBackground: {
                    scientist: "Wilhelm Pfeffer",
                    year: "1877",
                    discovery: "First quantitative measurement of osmotic pressure",
                    apparatus: "Osmometer - semipermeable membrane (copper ferrocyanide) separating solutions",
                    achievement: "Measured osmotic pressure of various solutions, established relationship between concentration and osmotic pressure",
                    significance: "Provided empirical foundation for van't Hoff's equation (π = iMRT)",
                    context: "Before Pfeffer, osmosis understood qualitatively but not quantitatively measured",
                    contribution: "Demonstrated osmotic pressure can be substantial (several atmospheres)",
                    impact: "Led to understanding of osmosis in plant cells and development of physical chemistry",
                    vanTHoff: "Jacobus van't Hoff used Pfeffer's data to derive osmotic pressure equation (1901 Nobel Prize)"
                },
                labExperiment: {
                    title: "Dialysis Tubing 'Cell' Model - Investigating Osmosis and Selective Permeability",
                    hypothesis: "If osmosis occurs, then a dialysis tubing 'cell' filled with starch and glucose solution will gain mass in distilled water, and iodine will enter but starch will not exit",
                    purpose: "Model cell membrane behavior, demonstrate osmosis and selective permeability using dialysis tubing",
                    background: {
                        dialysisTubing: "Semi-permeable membrane with pores ~10 nm diameter",
                        permeable: "Water, ions, small molecules (glucose, iodine)",
                        impermeable: "Large molecules (starch, proteins)",
                        osmosis: "Water moves from high water potential (distilled water) to low water potential (inside tubing with solutes)"
                    },
                    variables: {
                        independent: "Contents of dialysis tubing and surrounding solution",
                        dependent: "Mass change of dialysis bag, presence of starch (iodine test), presence of glucose (Benedict's test)",
                        controlled: ["Volume of solutions", "Dialysis tubing type", "Time", "Temperature"]
                    },
                    materials: [
                        "Dialysis tubing (presoaked in water)",
                        "String or clips to seal tubing",
                        "1% starch solution",
                        "1% glucose solution",
                        "Distilled water",
                        "Iodine solution (I₂KI)",
                        "Benedict's reagent",
                        "Beakers (250-500 ml)",
                        "Balance (accurate to 0.01 g)",
                        "Test tubes",
                        "Hot water bath or hot plate",
                        "Graduated cylinders or pipettes",
                        "Paper towels"
                    ],
                    safetyPrecautions: [
                        "Wear safety goggles and lab coat",
                        "Iodine stains - avoid skin contact",
                        "Benedict's reagent contains copper sulfate - handle carefully",
                        "Hot water bath can cause burns",
                        "Dispose of chemicals properly"
                    ],
                    procedure: [
                        "PREPARATION OF DIALYSIS BAGS:",
                        "Cut dialysis tubing into ~15 cm pieces",
                        "Soak tubing in distilled water for at least 10 minutes (softens membrane)",
                        "Tie or clamp one end of tubing securely (double knot or clip)",
                        "Open other end by rubbing between fingers",
                        "",
                        "SETUP - EXPERIMENT 1: OSMOSIS (Mass Change):",
                        "Prepare 3 dialysis bags:",
                        "  Bag A: Fill with 10 ml distilled water",
                        "  Bag B: Fill with 10 ml 5% glucose solution",
                        "  Bag C: Fill with 10 ml 15% glucose solution",
                        "Remove air bubbles by gently squeezing bag",
                        "Tie or clamp open end securely",
                        "Rinse outside of bags with distilled water and blot dry",
                        "Weigh each bag and record initial mass",
                        "Place each bag in separate beaker with 200 ml distilled water",
                        "Let sit for 30-60 minutes",
                        "Remove bags, blot dry, weigh again",
                        "Calculate percent change in mass: ((final - initial) / initial) × 100%",
                        "",
                        "SETUP - EXPERIMENT 2: SELECTIVE PERMEABILITY (Starch/Glucose/Iodine):",
                        "Prepare dialysis bag:",
                        "Mix 1% starch solution with 1% glucose solution (10 ml total)",
                        "Fill dialysis bag with this mixture",
                        "Remove air, seal securely",
                        "Rinse and blot outside",
                        "Record initial color of bag contents",
                        "Place bag in beaker with 200 ml distilled water",
                        "Add iodine solution to water until light amber color (~2-3 ml)",
                        "Record initial color of surrounding water",
                        "Let sit for 30 minutes, observe color changes every 5 minutes",
                        "",
                        "TESTING:",
                        "After 30 minutes, perform tests:",
                        "1. IODINE TEST (for starch):",
                        "   - Test liquid INSIDE bag: Remove ~2 ml, add 2 drops iodine",
                        "   - Test liquid OUTSIDE bag: Take ~2 ml from beaker, add 2 drops iodine",
                        "   - Blue-black = starch present; brown/amber = no starch",
                        "",
                        "2. BENEDICT'S TEST (for glucose):",
                        "   - Test liquid OUTSIDE bag: Take 2 ml from beaker, add 2 ml Benedict's",
                        "   - Heat in boiling water bath 3-5 minutes",
                        "   - Orange/red = glucose present; blue = no glucose",
                        "   - (Assume glucose was initially only inside bag)",
                        "",
                        "Record all observations"
                    ],
                    expectedResults: {
                        experiment1_osmosis: {
                            bagA_water: "Little or no mass change (isotonic)",
                            bagB_5percent: "Mass increases (water enters by osmosis)",
                            bagC_15percent: "Mass increases MORE (greater concentration gradient)",
                            trend: "Higher internal solute concentration → more water gain"
                        },
                        experiment2_selectivePermeability: {
                            insideBag: {
                                colorChange: "Clear/white → blue-black (iodine entered, reacted with starch)",
                                iodineTest: "Blue-black (starch present)",
                                conclusion: "Iodine entered bag (small molecule), starch stayed inside"
                            },
                            outsideBag: {
                                colorChange: "Amber (iodine) → lighter amber or remains amber",
                                iodineTest: "No blue-black color (starch did NOT exit)",
                                benedictsTest: "Orange/red (glucose exited bag)",
                                conclusion: "Glucose exited (small), starch did not (large)"
                            }
                        }
                    },
                    dataTable: [
                        ["Bag", "Solution Inside", "Initial Mass (g)", "Final Mass (g)", "Change (g)", "% Change"],
                        ["A", "Water", "", "", "", ""],
                        ["B", "5% glucose", "", "", "", ""],
                        ["C", "15% glucose", "", "", "", ""],
                        ["", "", "", "", "", ""],
                        ["Test", "Inside Bag", "Outside Bag", "", "", ""],
                        ["Initial color", "Clear/white", "Amber (iodine)", "", "", ""],
                        ["Final color (30 min)", "Blue-black", "Amber", "", "", ""],
                        ["Iodine test", "Blue-black (starch+)", "No change (starch-)", "", "", ""],
                        ["Benedict's test", "N/A", "Orange/red (glucose+)", "", "", ""]
                    ],
                    observations: [
                        "Bags with higher glucose concentration gained more mass",
                        "Water moved by osmosis from high water potential (pure water) to low (glucose solution)",
                        "Iodine (small molecule, MW 254) passed through membrane",
                        "Starch (large polysaccharide, MW ~500,000) could not pass through",
                        "Glucose (small molecule, MW 180) passed through membrane",
                        "Membrane is selectively permeable based on molecular size"
                    ],
                    analysis: {
                        osmosis: [
                            "Water moved down its concentration gradient (high water potential → low)",
                            "Greater solute concentration inside = lower water potential = more water entry",
                            "Osmotic pressure can be substantial (bags become very turgid)"
                        ],
                        selectivePermeability: [
                            "Membrane pore size determines what passes",
                            "Iodine (~2-5 nm) < pore size (~10 nm) → can pass",
                            "Glucose (~1 nm) < pore size → can pass",
                            "Starch (coiled, ~5-100 nm) > pore size → cannot pass",
                            "Models cell membrane selective permeability"
                        ],
                        connectionToPfeffer: [
                            "Pfeffer measured osmotic pressure quantitatively",
                            "This lab demonstrates osmotic pressure qualitatively (mass gain, bag tension)",
                            "Principle is same: water moves across semipermeable membrane due to solute concentration"
                        ]
                    },
                    calculations: {
                        percentChange: "((Final mass - Initial mass) / Initial mass) × 100%",
                        example: "Bag B: Initial 12.5 g, Final 15.0 g → ((15.0 - 12.5) / 12.5) × 100% = 20% increase"
                    },
                    results: "Dialysis bags in distilled water gained mass proportional to internal solute concentration, demonstrating osmosis. Iodine and glucose passed through membrane while starch did not, demonstrating selective permeability based on molecular size.",
                    conclusions: [
                        "Osmosis occurs across selectively permeable membranes down water concentration gradient",
                        "Osmotic pressure depends on solute concentration",
                        "Membrane permeability depends on molecular size and pore size",
                        "Dialysis tubing models cell membrane behavior (though pores larger than real membranes)",
                        "Confirms Pfeffer's principle: osmotic pressure proportional to concentration"
                    ],
                    realWorldApplications: [
                        "Dialysis in kidney failure (removes waste, maintains electrolyte balance)",
                        "Intravenous fluid selection (must be isotonic to blood)",
                        "Food preservation (osmotic dehydration)",
                        "Understanding plant water uptake",
                        "Desalination technology (reverse osmosis)"
                    ],
                    extensions: [
                        "Test different solute concentrations and plot mass change vs concentration",
                        "Compare different membrane types (cellophane, other polymers)",
                        "Calculate theoretical osmotic pressure using van't Hoff equation: π = MRT",
                        "Investigate effect of temperature on osmosis rate",
                        "Test molecular weight cutoff of dialysis membrane with different sized molecules"
                    ],
                    limitations: [
                        "Dialysis tubing pores larger than real cell membrane (~10 nm vs ~1 nm)",
                        "No active transport (only passive diffusion/osmosis)",
                        "No protein channels (real membranes have aquaporins, ion channels)",
                        "Does not model membrane fluidity or lipid bilayer structure"
                    ],
                    troubleshooting: [
                        "Bag breaks: Tied too tightly with air inside, or tubing damaged",
                        "No mass change: Bag not sealed properly (leaking), or not enough time",
                        "Iodine test ambiguous: Too much or too little iodine added initially",
                        "No glucose detected outside: Not enough time, or glucose concentration too low"
                    ]
                }
            },

            overton_lipid_solubility: {
                name: "Overton's Lipid Solubility Rule - The Membrane is 'Fatty'",
                relatedTopics: ['membrane_structure', 'passive_transport'],
                category: 'membrane_permeability',
                historicalBackground: {
                    scientist: "Charles Ernest Overton",
                    year: "1899",
                    discovery: "Cell membrane permeability correlates with lipid solubility",
                    experiments: "Tested ~500 compounds on plant cells and algae",
                    observation: "Lipid-soluble substances enter cells faster than water-soluble substances",
                    conclusion: "Cell membranes must be composed primarily of lipids",
                    significance: "First evidence that membranes are lipid-based (before phospholipid bilayer discovered)",
                    overtonRule: "Permeability coefficient ∝ oil/water partition coefficient",
                    context: "At the time, membrane composition was completely unknown",
                    impact: "Led to lipid bilayer hypothesis, confirmed decades later by Gorter and Grendel (1925)",
                    modernRelevance: "Explains why lipid-soluble drugs (anesthetics, alcohol) cross membranes easily"
                },
                labExperiment: {
                    title: "Beetroot Membrane Permeability Lab - Testing Temperature and Alcohol Effects",
                    hypothesis: "If cell membranes are lipid bilayers, then treatments that disrupt lipid structure (high temperature, organic solvents like ethanol) will increase membrane permeability and cause leakage of intracellular pigments",
                    purpose: "Investigate factors affecting membrane permeability using beetroot vacuolar pigment (betalain) as an indicator of membrane integrity",
                    background: {
                        beetroot: "Contains betalain pigments in vacuole (red/purple anthocyanin-like compounds)",
                        intactMembrane: "Tonoplast (vacuolar membrane) and plasma membrane keep pigment inside",
                        damagedMembrane: "Pigment leaks out into surrounding solution (visible/measurable)",
                        principle: "Membrane damage increases permeability, pigment leakage indicates damage",
                        factors: "Temperature, ethanol, detergents, pH affect lipid bilayer integrity"
                    },
                    variables: {
                        independent: "Treatment type (temperature or ethanol concentration)",
                        dependent: "Pigment leakage (measured by absorbance at 530 nm or visual color intensity)",
                        controlled: ["Beetroot piece size", "Treatment time", "Volume of solution", "Beetroot variety/freshness"]
                    },
                    materials: [
                        "Fresh beetroot (red beet)",
                        "Cork borer (5-10 mm diameter) or sharp knife",
                        "Ruler",
                        "White tile or cutting board",
                        "Distilled water",
                        "Ethanol (various concentrations: 0%, 20%, 40%, 60%, 80%, 100%)",
                        "Test tubes (at least 15-20)",
                        "Test tube rack",
                        "Water baths at different temperatures (0°C ice bath, 20°C room temp, 40°C, 60°C, 80°C)",
                        "Thermometer",
                        "Colorimeter or spectrophotometer (optional, for quantitative measurement)",
                        "Timer or stopwatch",
                        "Pipettes or syringes",
                        "Paper towels",
                        "Beakers",
                        "Marker for labeling"
                    ],
                    safetyPrecautions: [
                        "Beetroot juice stains - wear lab coat and gloves",
                        "Cork borer and knife are sharp - cut away from body",
                        "Hot water baths can cause burns - use carefully",
                        "High concentrations of ethanol are flammable - keep away from flames",
                        "Dispose of beetroot waste properly (compost if available)"
                    ],
                    procedure: [
                        "PREPARATION OF BEETROOT SAMPLES:",
                        "Peel beetroot and rinse under running water",
                        "Use cork borer to cut uniform cylinders (~5-8 mm diameter)",
                        "Cut cylinders into uniform discs (~3-5 mm thick) using sharp knife",
                        "CRITICAL: Rinse discs thoroughly in running distilled water until rinse water is clear",
                        "This step removes pigment from surface cells damaged during cutting",
                        "Continue rinsing until water runs clear (may take 5-10 minutes)",
                        "Blot discs gently with paper towel to remove surface water",
                        "Prepare at least 15-20 uniform discs (for replicates and both experiments)",
                        "",
                        "EXPERIMENT 1: EFFECT OF TEMPERATURE:",
                        "Label 6 test tubes: 0°C, 20°C, 40°C, 60°C, 80°C, 100°C (boiling)",
                        "Add exactly 10 ml distilled water to each tube",
                        "Place tubes in appropriate water baths to equilibrate to temperature",
                        "Place one beetroot disc in each tube at the same time",
                        "Incubate for exactly 20 minutes at respective temperatures",
                        "During incubation, do NOT shake or disturb tubes",
                        "After 20 minutes, carefully remove beetroot discs with forceps",
                        "Observe color intensity of solutions visually against white background",
                        "Rank color intensity on scale: 0 (clear) to 5 (dark red)",
                        "If colorimeter available: Transfer solution to cuvette, measure absorbance at 530 nm",
                        "Record all data",
                        "",
                        "EXPERIMENT 2: EFFECT OF ETHANOL CONCENTRATION:",
                        "Label 6 test tubes: 0%, 20%, 40%, 60%, 80%, 100% ethanol",
                        "Prepare ethanol solutions by mixing with distilled water (final volume 10 ml):",
                        "  0%: 10 ml water (control)",
                        "  20%: 2 ml ethanol + 8 ml water",
                        "  40%: 4 ml ethanol + 6 ml water",
                        "  60%: 6 ml ethanol + 4 ml water",
                        "  80%: 8 ml ethanol + 2 ml water",
                        "  100%: 10 ml ethanol",
                        "Add one beetroot disc to each tube simultaneously",
                        "Incubate at room temperature (~20°C) for exactly 20 minutes",
                        "Remove discs, observe/measure color as above",
                        "Record data",
                        "",
                        "OPTIONAL EXPERIMENT 3: EFFECT OF DETERGENT:",
                        "Prepare detergent solutions: 0%, 0.1%, 0.5%, 1%, 2% (dishwashing liquid)",
                        "Follow same procedure as temperature experiment",
                        "Detergent will rapidly disrupt membranes even at low concentrations",
                        "",
                        "DATA ANALYSIS:",
                        "Plot absorbance (or color score) vs temperature or ethanol concentration",
                        "Calculate percent transmittance if using colorimeter: %T = (I/I₀) × 100",
                        "Higher absorbance or darker color = more pigment leakage = more membrane damage",
                        "Look for trends and threshold temperatures/concentrations"
                    ],
                    expectedResults: {
                        temperature: {
                            low_0_20C: {
                                pigmentLeakage: "Minimal or none (clear to very pale pink)",
                                absorbance: "~0.05-0.15",
                                membraneIntegrity: "Intact",
                                explanation: "Low temp decreases membrane fluidity but membrane remains intact"
                            },
                            moderate_40C: {
                                pigmentLeakage: "Slight (light pink)",
                                absorbance: "~0.25-0.45",
                                membraneIntegrity: "Slightly damaged",
                                explanation: "Increased fluidity, some pigment escapes"
                            },
                            high_60_80C: {
                                pigmentLeakage: "Significant (medium to dark red)",
                                absorbance: "~0.80-1.50",
                                membraneIntegrity: "Significantly damaged",
                                explanation: "Membrane proteins denature, lipids become too fluid, structure breaks down"
                            },
                            boiling_100C: {
                                pigmentLeakage: "Complete (very dark red/purple)",
                                absorbance: "~1.50-2.00+",
                                membraneIntegrity: "Completely destroyed",
                                explanation: "Total membrane breakdown, all pigment released"
                            },
                            threshold: "Sharp increase in leakage around 60°C (protein denaturation begins)"
                        },
                        ethanol: {
                            zero_0percent: {
                                pigmentLeakage: "None (clear or very pale)",
                                absorbance: "~0.05-0.10",
                                membraneIntegrity: "Intact"
                            },
                            low_20percent: {
                                pigmentLeakage: "Slight (pale pink)",
                                absorbance: "~0.20-0.40",
                                membraneIntegrity: "Slightly disrupted"
                            },
                            moderate_40_60percent: {
                                pigmentLeakage: "Moderate (pink to red)",
                                absorbance: "~0.60-1.20",
                                membraneIntegrity: "Moderately disrupted",
                                explanation: "Ethanol dissolves lipids, creates holes in bilayer"
                            },
                            high_80_100percent: {
                                pigmentLeakage: "High (dark red)",
                                absorbance: "~1.30-1.80",
                                membraneIntegrity: "Severely disrupted",
                                explanation: "Extensive lipid dissolution, membrane largely non-functional"
                            },
                            trend: "Generally linear increase in pigment leakage with ethanol concentration"
                        },
                        detergent: {
                            effect: "Even low concentrations (0.1-0.5%) cause rapid, extensive leakage",
                            mechanism: "Detergents solubilize lipids into micelles, destroying bilayer",
                            observation: "Often see complete pigment release within minutes"
                        }
                    },
                    dataTable: [
                        ["Temperature (°C)", "Color Score (0-5)", "Absorbance (530nm)", "% Transmittance", "Membrane Condition"],
                        ["0 (ice)", "0-1", "0.05-0.15", "90-95%", "Intact"],
                        ["20 (room temp)", "1", "0.10-0.20", "80-90%", "Intact"],
                        ["40", "2", "0.30-0.50", "60-70%", "Slightly damaged"],
                        ["60", "4", "0.90-1.30", "20-30%", "Significantly damaged"],
                        ["80", "5", "1.50-1.80", "5-15%", "Severely damaged"],
                        ["100 (boiling)", "5", "1.80-2.20", "<5%", "Destroyed"],
                        ["", "", "", "", ""],
                        ["Ethanol (%)", "Color Score", "Absorbance", "% Transmittance", "Membrane Condition"],
                        ["0 (water)", "0", "0.05-0.10", "90-95%", "Intact"],
                        ["20", "1-2", "0.25-0.45", "70-80%", "Slightly disrupted"],
                        ["40", "2-3", "0.50-0.80", "50-60%", "Moderately disrupted"],
                        ["60", "3-4", "0.90-1.30", "30-40%", "Significantly disrupted"],
                        ["80", "4-5", "1.40-1.70", "10-20%", "Severely disrupted"],
                        ["100", "5", "1.70-2.00", "<10%", "Severely disrupted"]
                    ],
                    observations: [
                        "Low temperatures (0-20°C) preserve membrane integrity - little to no pigment leakage",
                        "Threshold around 60°C where leakage dramatically increases",
                        "High temperatures (60-100°C) cause extensive membrane damage",
                        "Ethanol causes dose-dependent membrane disruption",
                        "Even moderate ethanol concentrations (40-60%) cause significant leakage",
                        "Damage is irreversible - pigment does not return to cells",
                        "Visual color intensity correlates well with spectrophotometric measurements"
                    ],
                    analysis: {
                        temperatureEffect: [
                            "LOW TEMP (0-20°C):",
                            "- Membranes remain intact",
                            "- Decreased kinetic energy, reduced fluidity",
                            "- Phospholipids pack more tightly but structure maintained",
                            "",
                            "MODERATE TEMP (40°C):",
                            "- Slight increase in fluidity",
                            "- Minor disruption, some pigment escapes",
                            "",
                            "HIGH TEMP (60-80°C):",
                            "- Membrane proteins denature (lose 3D structure)",
                            "- Lipids become too fluid, bilayer integrity lost",
                            "- Large increase in permeability",
                            "",
                            "BOILING (100°C):",
                            "- Complete destruction of membrane structure",
                            "- All proteins denatured, lipids disorganized",
                            "- Total pigment release"
                        ],
                        ethanolEffect: [
                            "Ethanol is AMPHIPATHIC (has both hydrophobic and hydrophilic regions)",
                            "Dissolves in lipid bilayer (similar polarity principle)",
                            "Disrupts lipid packing, creates 'holes' or increases fluidity",
                            "At high concentrations, extracts lipids from membrane",
                            "Demonstrates Overton's Rule: lipid solvents penetrate/disrupt lipid membranes",
                            "",
                            "MECHANISM:",
                            "- Ethanol molecules intercalate between phospholipids",
                            "- Weakens hydrophobic interactions holding bilayer together",
                            "- Increases membrane permeability non-selectively",
                            "- Damage proportional to concentration"
                        ],
                        detergentEffect: [
                            "Detergents are AMPHIPATHIC (like phospholipids)",
                            "BUT: Single tail vs double tail in phospholipids",
                            "Form micelles instead of bilayers",
                            "Solubilize membrane lipids into micelles",
                            "Rapidly destroy bilayer integrity",
                            "Used in cell lysis for protein/DNA extraction"
                        ],
                        connectionToOverton: [
                            "Overton showed lipid-soluble substances cross membranes easily",
                            "Ethanol is lipid-soluble → penetrates membrane easily",
                            "Ethanol disrupts lipid structure → increases permeability",
                            "Demonstrates membrane is lipid-based (Overton's conclusion)",
                            "Modern understanding: phospholipid bilayer confirmed by Gorter & Grendel (1925)"
                        ]
                    },
                    molecularExplanation: {
                        membraneStructure: "Phospholipid bilayer with embedded proteins",
                        normalPermeability: "Selectively permeable - hydrophobic core excludes polar molecules",
                        temperatureDamage: {
                            kinetics: "Higher temp → more kinetic energy → more movement",
                            proteinDenaturation: "Above ~50-60°C, proteins unfold and lose function",
                            lipidDisorder: "High temps disrupt ordered bilayer arrangement",
                            result: "Increased permeability, non-selective leakage"
                        },
                        ethanolDamage: {
                            penetration: "Ethanol dissolves into hydrophobic core",
                            disruption: "Interferes with lipid-lipid interactions",
                            extraction: "At high concentrations, removes lipids from membrane",
                            result: "Holes, increased fluidity, loss of barrier function"
                        }
                    },
                    results: "Membrane permeability increased with temperature (especially above 60°C) and ethanol concentration. This demonstrates that cell membranes are lipid-based structures that can be disrupted by heat and organic solvents, supporting Overton's Rule and the fluid mosaic model of membrane structure.",
                    conclusions: [
                        "Cell membranes are selectively permeable lipid barriers",
                        "Temperature affects membrane fluidity and integrity",
                        "High temperatures cause protein denaturation and lipid disorganization",
                        "Organic solvents (ethanol) disrupt membrane structure by dissolving lipids",
                        "Detergents solubilize membranes by forming micelles",
                        "Confirms Overton's Rule: lipid solubility predicts membrane interaction",
                        "Supports fluid mosaic model: membrane is dynamic lipid structure with proteins"
                    ],
                    realWorldApplications: [
                        "MEDICINE:",
                        "- Alcohol antiseptics kill bacteria by disrupting membranes",
                        "- Understanding drug delivery (lipid-soluble drugs cross easily)",
                        "- Anesthesia (lipid-soluble anesthetics affect nerve membranes)",
                        "- Hypothermia/hyperthermia treatment considerations",
                        "",
                        "FOOD SCIENCE:",
                        "- Heat sterilization destroys microbial membranes",
                        "- Alcohol preservation (e.g., vodka sauce, extracts)",
                        "- Understanding why cooking changes food texture",
                        "",
                        "BIOTECHNOLOGY:",
                        "- Cell lysis for protein/DNA extraction (detergents, heat)",
                        "- Cryopreservation (must avoid ice crystal damage to membranes)",
                        "- Liposome drug delivery systems",
                        "",
                        "ENVIRONMENTAL:",
                        "- Toxin effects on aquatic organisms (membrane damage)",
                        "- Pollution effects on cell membranes"
                    ],
                    extensions: [
                        "Investigate effect of pH on membrane integrity",
                        "Compare different types of detergents (ionic, nonionic, anionic)",
                        "Test membrane recovery after mild stress (e.g., 40°C for short time)",
                        "Compare beetroot cells to other plant cells (onion, celery) or animal cells",
                        "Investigate protective effects of cryoprotectants (glycerol, DMSO)",
                        "Model membrane as lipid bilayer and predict permeability of different molecules",
                        "Quantify membrane fluidity using fluorescence anisotropy (advanced)",
                        "Test effect of cholesterol on membrane stability (add cholesterol to artificial membranes)"
                    ],
                    limitations: [
                        "Beetroot cells are dead (we're studying tonoplast and plasma membrane of non-living cells)",
                        "Only measures passive leakage, not active transport or repair mechanisms",
                        "Natural variation in pigment content between beetroots",
                        "Qualitative color scoring is subjective (spectrophotometry more accurate)",
                        "Cutting damages some surface cells (hence the rinsing step)",
                        "Does not model all aspects of living cell membrane (no metabolic processes)"
                    ],
                    troubleshooting: [
                        "PROBLEM: Rinse water stays colored even after long rinsing",
                        "SOLUTION: Cutting damaged many cells. Cut more carefully with very sharp blade, or accept baseline color and measure relative change",
                        "",
                        "PROBLEM: Control tubes (0°C, 0% ethanol) show significant color",
                        "SOLUTION: Beetroot slices too thin or damaged, or not rinsed enough. Use thicker slices (5mm), rinse more thoroughly",
                        "",
                        "PROBLEM: No difference between treatments",
                        "SOLUTION: Beetroot old/damaged (all membranes already compromised), or time too short. Use fresh beetroot, extend to 30 min",
                        "",
                        "PROBLEM: Inconsistent results between replicates",
                        "SOLUTION: Beetroot pieces not uniform, or treatment conditions varied. Cut more carefully, control temperature/time precisely",
                        "",
                        "PROBLEM: Very dark color in all tubes",
                        "SOLUTION: Too many beetroot pieces or pieces too large. Use single, small piece per tube"
                    ]
                }
            },

            agre_aquaporins: {
                name: "Agre's Discovery of Aquaporins - Water-Specific Channels",
                relatedTopics: ['passive_transport', 'membrane_structure'],
                category: 'membrane_channels',
                historicalBackground: {
                    scientist: "Peter Agre",
                    year: "1992 (discovery), 2003 (Nobel Prize)",
                    discovery: "Identified aquaporin proteins - water-specific membrane channels",
                    nobelPrize: "2003 Nobel Prize in Chemistry (shared with Roderick MacKinnon for ion channel work)",
                    background: "Water crosses membranes much faster than predicted by simple lipid diffusion alone",
                    puzzle: "How does water cross membranes so rapidly, yet H⁺ ions (which are smaller) do not?",
                    protein: "AQP1 (aquaporin-1) - 28 kDa membrane protein forming water channel",
                    mechanism: "Channel allows water molecules to pass single-file at rate of billions per second per channel",
                    selectivity: "Highly selective for water; excludes ions including H⁺ (protons)",
                    significance: "Explained rapid water transport in kidneys, red blood cells, plants, and many other tissues",
                    impact: "Revolutionized understanding of water homeostasis, kidney function, plant physiology",
                    family: ">13 different aquaporins in humans, found in all kingdoms of life",
                    context: "Before discovery, water transport understood but molecular mechanism unknown",
                    quote: "It was as if we had discovered a secret passageway in a very old house",
                    applications: "Drug targets for edema, glaucoma, brain swelling; understanding drought resistance in plants"
                },
                labExperiment: {
                    title: "Osmosis in Potato Strips or Egg Osmosis - Measuring Water Movement",
                    hypothesis: "If osmosis occurs, then potato strips (or eggs) will gain mass in hypotonic solutions and lose mass in hypertonic solutions, with the magnitude proportional to the concentration gradient",
                    purpose: "Demonstrate and quantify osmotic water movement across biological membranes using potato tissue or chicken eggs as model systems",
                    background: {
                        osmosis: "Net movement of water across selectively permeable membrane from high water potential to low water potential",
                        potatoCells: "Contain water-permeable membranes (including aquaporins) that allow rapid water equilibration",
                        eggMembrane: "Protein membrane just beneath shell (exposed by dissolving shell in vinegar) is semipermeable",
                        waterPotential: "Ψ = Ψs + Ψp; water moves from high Ψ to low Ψ",
                        agre: "Aquaporins explain why water moves so fast across membranes"
                    },
                    variables: {
                        independent: "Solute concentration of external solution (0%, 2%, 5%, 10%, 15%, 20% salt or sugar)",
                        dependent: "Mass change of potato strips or eggs (percent change)",
                        controlled: ["Initial mass", "Surface area", "Volume of solution", "Time", "Temperature", "Type of solute"]
                    },
                    materials: {
                        potatoVersion: [
                            "Large potatoes (3-4, same variety)",
                            "Cork borer (5-10 mm) or knife",
                            "Ruler",
                            "Distilled water",
                            "Salt (NaCl) or sugar (sucrose) solutions: 0%, 2%, 5%, 10%, 15%, 20%",
                            "Beakers or cups (50-100 ml)",
                            "Balance accurate to 0.01 g",
                            "Paper towels",
                            "Timer",
                            "Marker for labeling"
                        ],
                        eggVersion: [
                            "Chicken eggs (6-8)",
                            "White vinegar (acetic acid)",
                            "Large beakers or jars",
                            "Corn syrup or concentrated salt solution",
                            "Distilled water",
                            "Balance accurate to 0.1 g",
                            "Timer",
                            "Marker"
                        ]
                    },
                    safetyPrecautions: [
                        "Cork borer and knife are sharp - cut away from body",
                        "Vinegar can irritate eyes - wear safety goggles if using egg method",
                        "Eggs may break during handling - clean up spills immediately",
                        "Dispose of biological materials properly"
                    ],
                    procedure: [
                        "OPTION A: POTATO OSMOSIS METHOD:",
                        "",
                        "PREPARATION:",
                        "Peel potatoes",
                        "Use cork borer to cut uniform cylinders (5-8 mm diameter)",
                        "Cut cylinders into strips of equal length (3-5 cm)",
                        "Blot strips dry with paper towel",
                        "Weigh each strip and record initial mass",
                        "Prepare at least 3 strips per concentration (for replicates)",
                        "",
                        "SOLUTION PREPARATION:",
                        "Prepare 6 different concentrations of salt (NaCl) or sugar (sucrose) solution:",
                        "  0% (distilled water - hypotonic control)",
                        "  2% (2 g solute in 100 ml water)",
                        "  5% (5 g in 100 ml)",
                        "  10% (10 g in 100 ml)",
                        "  15% (15 g in 100 ml)",
                        "  20% (20 g in 100 ml - hypertonic)",
                        "Label beakers clearly with concentration",
                        "Pour ~50 ml of each solution into separate beakers",
                        "",
                        "EXPERIMENTAL SETUP:",
                        "Place 3 potato strips into each beaker",
                        "Ensure strips are fully submerged",
                        "Record start time",
                        "Let sit undisturbed for 60-90 minutes (or overnight for larger changes)",
                        "",
                        "MEASUREMENTS:",
                        "After incubation, remove strips one at a time",
                        "Blot gently with paper towel to remove surface water",
                        "Weigh immediately and record final mass",
                        "Calculate percent change: ((final - initial) / initial) × 100%",
                        "Calculate mean and standard deviation for each concentration",
                        "",
                        "OBSERVATIONS:",
                        "Note texture: Are strips firm (turgid) or limp (flaccid)?",
                        "Check for any changes in appearance",
                        "",
                        "========================================",
                        "",
                        "OPTION B: EGG OSMOSIS METHOD:",
                        "",
                        "DAY 1 - SHELL REMOVAL:",
                        "Place whole raw eggs in large beakers or jars",
                        "Cover eggs completely with white vinegar (acetic acid)",
                        "Let sit 24-48 hours (vinegar dissolves calcium carbonate shell)",
                        "Change vinegar after 24 hours if not fully dissolved",
                        "Egg is ready when shell completely gone, leaving only membrane",
                        "Rinse gently with water to remove vinegar",
                        "Blot dry carefully (membrane is delicate)",
                        "Weigh each egg and record initial mass",
                        "",
                        "DAY 2-3 - OSMOSIS EXPERIMENT:",
                        "Prepare 3 treatments (use 2-3 eggs per treatment):",
                        "  HYPOTONIC: Place egg in distilled water",
                        "  ISOTONIC: Place egg in dilute salt solution (~0.9% NaCl)",
                        "  HYPERTONIC: Place egg in corn syrup or concentrated salt solution (25% NaCl)",
                        "Record start time",
                        "Let sit 24-48 hours",
                        "",
                        "FINAL MEASUREMENTS:",
                        "Carefully remove eggs",
                        "Blot dry gently",
                        "Weigh and record final mass",
                        "Calculate percent change",
                        "Observe size and firmness differences",
                        "",
                        "DATA ANALYSIS (BOTH METHODS):",
                        "Plot percent mass change vs. solution concentration",
                        "Identify isotonic point (where mass change = 0)",
                        "Compare hypotonic (positive % change) vs hypertonic (negative % change) regions"
                    ],
                    expectedResults: {
                        potato: {
                            hypotonic_0_2percent: {
                                massChange: "+10% to +20% (gain mass)",
                                appearance: "Swollen, firm, turgid",
                                explanation: "Water enters by osmosis (high water potential outside → low inside)",
                                texture: "Crisp, rigid"
                            },
                            mildHypotonic_5percent: {
                                massChange: "+5% to +10%",
                                appearance: "Slightly swollen",
                                explanation: "Still net water entry but smaller gradient"
                            },
                            isotonic_10_15percent: {
                                massChange: "~0% (little to no change)",
                                appearance: "Normal",
                                explanation: "Equal water potential inside and outside (equilibrium)",
                                note: "Isotonic point varies by potato variety and age"
                            },
                            hypertonic_15_20percent: {
                                massChange: "-10% to -25% (lose mass)",
                                appearance: "Shrunken, limp, flaccid",
                                explanation: "Water exits by osmosis (low water potential outside)",
                                texture: "Soft, bendable, wilted"
                            },
                            graph: "Sigmoidal curve: positive slope in hypotonic region, crosses zero (isotonic point), negative slope in hypertonic"
                        },
                        egg: {
                            hypotonic_water: {
                                massChange: "+20% to +50% (can double in size)",
                                appearance: "Swollen, translucent, very firm",
                                explanation: "Massive water influx",
                                risk: "May rupture if left too long"
                            },
                            isotonic: {
                                massChange: "~0%",
                                appearance: "Normal size",
                                note: "Isotonic to egg is ~0.9% NaCl (same as body fluids)"
                            },
                            hypertonic_syrup: {
                                massChange: "-30% to -60% (shrinks dramatically)",
                                appearance: "Shriveled, wrinkled, small, soft",
                                explanation: "Massive water loss to highly concentrated syrup"
                            }
                        }
                    },
                    dataTable: [
                        ["Solution Concentration", "Initial Mass (g)", "Final Mass (g)", "Change (g)", "% Change", "Appearance"],
                        ["0% (water - hypotonic)", "5.00", "5.80", "+0.80", "+16%", "Turgid, firm"],
                        ["2%", "5.00", "5.50", "+0.50", "+10%", "Firm"],
                        ["5%", "5.00", "5.20", "+0.20", "+4%", "Slightly firm"],
                        ["10% (isotonic)", "5.00", "5.00", "0.00", "0%", "Normal"],
                        ["15%", "5.00", "4.50", "-0.50", "-10%", "Slightly limp"],
                        ["20% (hypertonic)", "5.00", "4.00", "-1.00", "-20%", "Flaccid, limp"],
                        ["", "", "", "", "", ""],
                        ["Calculation: % Change = ((Final - Initial) / Initial) × 100%", "", "", "", "", ""]
                    ],
                    observations: [
                        "Potato strips in hypotonic solutions gained mass and became turgid",
                        "Potato strips in hypertonic solutions lost mass and became flaccid",
                        "Mass change proportional to concentration gradient",
                        "Isotonic point (0% change) around 10-15% for potatoes (varies)",
                        "Eggs showed dramatic size changes (more permeable than potato cells)",
                        "Water movement was rapid (noticeable changes within 1 hour)",
                        "Changes were reversible (strips can regain turgor if transferred back)"
                    ],
                    analysis: {
                        osmosisPrinciple: [
                            "Water moves from high water potential (low solute) to low water potential (high solute)",
                            "Net movement continues until equilibrium reached (isotonic)",
                            "Rate and magnitude depend on concentration gradient"
                        ],
                        waterPotential: [
                            "Hypotonic solution: High Ψ (lots of water, few solutes)",
                            "Isotonic solution: Equal Ψ inside and outside",
                            "Hypertonic solution: Low Ψ (little water, many solutes)",
                            "Water always flows down water potential gradient"
                        ],
                        cellularResponse: {
                            plantCells: [
                                "HYPOTONIC: Water enters → turgor pressure builds → cell wall resists → turgid, firm",
                                "HYPERTONIC: Water exits → turgor pressure drops → membrane pulls from wall (plasmolysis) → flaccid",
                                "Importance: Turgor provides structural support in plants"
                            ],
                            animalCells: [
                                "HYPOTONIC: Water enters → cell swells → may burst (lysis)",
                                "HYPERTONIC: Water exits → cell shrinks (crenation)",
                                "No cell wall to protect from lysis"
                            ]
                        },
                        connectionToAgre: [
                            "Water moves MUCH FASTER than predicted by simple lipid diffusion",
                            "Agre discovered aquaporins explain this rapid movement",
                            "Aquaporins: Water-specific channels allowing billions of molecules/second",
                            "Potato cells and egg membranes contain aquaporins",
                            "Without aquaporins, osmotic equilibration would be 10-100x slower",
                            "Aquaporins are highly selective: allow water, exclude H⁺ and other ions"
                        ],
                        quantitativeAnalysis: [
                            "Plot % mass change vs. concentration",
                            "Find isotonic point: where line crosses x-axis (0% change)",
                            "Isotonic concentration ≈ internal solute concentration of potato/egg",
                            "Slope indicates membrane water permeability (steeper = more permeable)"
                        ]
                    },
                    calculations: {
                        percentChange: "% change = ((Final mass - Initial mass) / Initial mass) × 100%",
                        example: "Initial: 5.00 g, Final: 5.80 g → ((5.80 - 5.00) / 5.00) × 100% = +16% (water gained)",
                        waterGain: "Positive % change indicates water entered (hypotonic)",
                        waterLoss: "Negative % change indicates water exited (hypertonic)"
                    },
                    results: "Potato strips and eggs demonstrated predictable osmotic behavior. Strips gained mass in hypotonic solutions (becoming turgid) and lost mass in hypertonic solutions (becoming flaccid), with magnitude proportional to concentration gradient. The isotonic point where no net water movement occurred was approximately 10-15% for potatoes. The rapid rate of water movement supports the existence of water channels (aquaporins) in cell membranes.",
                    conclusions: [
                        "Osmosis is the net movement of water across selectively permeable membranes",
                        "Water moves from high water potential to low water potential",
                        "Plant cells in hypotonic solutions become turgid; in hypertonic solutions become plasmolyzed",
                        "The rapid rate of osmosis observed supports the presence of aquaporins (water channels)",
                        "Isotonic point reflects internal solute concentration of cells",
                        "Confirms Agre's discovery: water-specific channels facilitate rapid water transport"
                    ],
                    realWorldApplications: [
                        "PLANT PHYSIOLOGY:",
                        "- Understanding plant wilting and water uptake from soil",
                        "- Crop irrigation strategies",
                        "- Drought resistance (plants with more aquaporins may be more efficient)",
                        "",
                        "HUMAN HEALTH:",
                        "- Kidney function: aquaporins crucial for water reabsorption",
                        "- Edema and fluid balance disorders",
                        "- Brain swelling (cerebral edema) - aquaporin inhibitors as treatment",
                        "- Glaucoma treatment (reduce aqueous humor production)",
                        "",
                        "FOOD INDUSTRY:",
                        "- Food preservation (osmotic dehydration, salting, sugaring)",
                        "- Rehydration of dried foods",
                        "- Texture control in processed foods",
                        "",
                        "MEDICINE:",
                        "- IV fluid selection (must be isotonic to blood)",
                        "- Oral rehydration therapy",
                        "- Understanding drug delivery across membranes"
                    ],
                    extensions: [
                        "Calculate water potential (Ψ) using the formula: Ψ = -iCRT",
                        "Compare water permeability of different tissues (potato, apple, carrot)",
                        "Investigate effect of temperature on osmosis rate",
                        "Test effect of aquaporin inhibitors (mercury compounds - CAUTION: toxic)",
                        "Measure actual volume change using graduated cylinders",
                        "Determine isotonic point more precisely with narrower concentration range",
                        "Compare osmotic behavior of plant cells vs animal cells (onion vs egg)",
                        "Investigate reverse osmosis (apply pressure to reverse water flow)"
                    ],
                    limitations: [
                        "Potato cells are not perfect models (cell wall complicates interpretation)",
                        "Initial mass varies between strips (calculate % change to normalize)",
                        "Cutting exposes cells, some may be damaged",
                        "Natural variation in potato solute concentration",
                        "Egg membrane permeability higher than typical cell membranes",
                        "Does not directly measure aquaporin function (just osmosis rate)",
                        "Ignores effects of pressure potential (turgor) in calculations"
                    ],
                    troubleshooting: [
                        "PROBLEM: Inconsistent results between replicates",
                        "SOLUTION: Cut strips more uniformly, control incubation time precisely, use potatoes from same batch",
                        "",
                        "PROBLEM: No clear isotonic point",
                        "SOLUTION: Test more concentrations in 5-15% range with smaller increments (e.g., 8%, 10%, 12%)",
                        "",
                        "PROBLEM: Egg membrane breaks during vinegar treatment",
                        "SOLUTION: Use fresh eggs, handle gently, change vinegar after 12-24 hours",
                        "",
                        "PROBLEM: Changes too small to measure",
                        "SOLUTION: Extend incubation time (overnight or 24 hours), use more extreme concentrations",
                        "",
                        "PROBLEM: Potato strips float",
                        "SOLUTION: Weight down with glass rod or mesh, or ensure strips fully submerged"
                    ]
                }
            },

            skou_sodium_potassium_pump: {
                name: "Skou's Discovery of the Sodium-Potassium Pump - The First Ion Pump",
                relatedTopics: ['active_transport', 'membrane_structure'],
                category: 'active_transport',
                historicalBackground: {
                    scientist: "Jens Christian Skou",
                    year: "1957 (discovery), 1997 (Nobel Prize)",
                    discovery: "Sodium-potassium ATPase (Na⁺/K⁺-ATPase) - first identified ion pump",
                    nobelPrize: "1997 Nobel Prize in Chemistry",
                    background: "Studied mechanism of local anesthetics; noticed they affected membrane enzyme requiring Na⁺ and K⁺",
                    breakthrough: "Identified membrane-bound enzyme that hydrolyzes ATP and actively transports Na⁺ and K⁺ against gradients",
                    stoichiometry: "3 Na⁺ out : 2 K⁺ in : 1 ATP hydrolyzed",
                    function: "Maintains ion gradients across plasma membrane of all animal cells",
                    mechanism: "Phosphorylation-induced conformational changes alternately expose binding sites inside and outside cell",
                    importance: [
                        "Maintains resting membrane potential (-70 mV in neurons)",
                        "Drives secondary active transport (Na⁺ gradient powers cotransporters)",
                        "Controls cell volume (prevents osmotic swelling)",
                        "Essential for nerve impulse transmission"
                    ],
                    energyCost: "Uses ~30% of cell's ATP in typical cells, up to 70% in neurons",
                    inhibitors: "Ouabain, digoxin (cardiac glycosides) - used as heart medications and research tools",
                    significance: "First direct evidence for active transport mechanism; explained how cells maintain ion gradients",
                    impact: "Revolutionized understanding of membrane transport and cellular energetics",
                    context: "Before Skou, active transport was hypothesized but not proven at molecular level"
                },
                labExperiment: {
                    title: "Inhibition of Active Transport in Yeast - Effects of Metabolic Poisons",
                    hypothesis: "If active transport requires cellular energy (ATP), then metabolic poisons that inhibit ATP production (sodium azide, cyanide) will block active transport of substances like methylene blue dye into yeast cells, preventing dye accumulation",
                    purpose: "Demonstrate that active transport requires cellular energy by showing that metabolic inhibitors prevent dye uptake in living yeast cells",
                    background: {
                        yeastCells: "Single-celled fungi with active transport systems",
                        methyleneBlue: "Vital dye that is actively transported into cells and reduced (becomes colorless inside living cells)",
                        activeTransport: "Requires ATP; metabolic poisons block ATP production → block transport",
                        metabolicPoisons: {
                            sodiumAzide: "NaN₃ - inhibits cytochrome oxidase (blocks electron transport chain)",
                            potassiumCyanide: "KCN - inhibits cytochrome oxidase (blocks ETC)",
                            effect: "Stop cellular respiration → no ATP → no active transport"
                        },
                        control: "Live yeast without poison should accumulate and reduce dye (cells stay colorless inside, dye removed from solution)",
                        poisoned: "Yeast with metabolic poison cannot accumulate dye (dye remains in solution, cells blue outside)"
                    },
                    variables: {
                        independent: "Presence or absence of metabolic poison (sodium azide or KCN)",
                        dependent: "Dye uptake by yeast cells (visual observation, spectrophotometry of supernatant)",
                        controlled: ["Yeast concentration", "Dye concentration", "Time", "Temperature", "Volume"]
                    },
                    materials: [
                        "Active dry yeast (Saccharomyces cerevisiae)",
                        "Warm water (~37°C)",
                        "Glucose solution (5-10%)",
                        "Methylene blue solution (0.01% or 0.1 mg/ml)",
                        "Sodium azide (NaN₃) solution (0.1 M) - CAUTION: TOXIC",
                        "Potassium cyanide (KCN) solution (0.01 M) - CAUTION: EXTREMELY TOXIC (optional, azide is safer substitute)",
                        "Test tubes or small beakers",
                        "Water bath or incubator (37°C)",
                        "Microscope and slides (optional, for observing cells)",
                        "Spectrophotometer (optional, for quantitative measurement)",
                        "Pipettes or syringes",
                        "Timer",
                        "Ice bath (for killed yeast control)"
                    ],
                    safetyPrecautions: [
                        "CRITICAL: Sodium azide is TOXIC. Wear gloves, goggles, lab coat",
                        "CRITICAL: Potassium cyanide is EXTREMELY TOXIC and LETHAL. Use only with proper training. Sodium azide is safer alternative",
                        "Do NOT ingest, inhale, or allow skin contact with poisons",
                        "Work in well-ventilated area or fume hood",
                        "Dispose of all solutions containing poisons as hazardous waste",
                        "Wash hands thoroughly after experiment",
                        "Have emergency protocols ready",
                        "Consider using SAFER alternative: high temperature (boil yeast) or ice (chill yeast) to inhibit metabolism instead of chemical poisons"
                    ],
                    procedure: [
                        "YEAST PREPARATION:",
                        "Rehydrate active dry yeast in warm water (~37°C) with glucose (food source)",
                        "Mix 1 teaspoon yeast in 50 ml water + 5 ml 10% glucose",
                        "Let sit 10-15 minutes until yeast is active (bubbling, foamy)",
                        "This activates yeast metabolism and transport systems",
                        "",
                        "EXPERIMENTAL SETUP (4 treatments):",
                        "",
                        "TUBE 1 - CONTROL (Active yeast, no poison):",
                        "Add 5 ml activated yeast suspension",
                        "Add 1 ml methylene blue solution (0.01%)",
                        "Mix gently",
                        "Place in 37°C water bath",
                        "",
                        "TUBE 2 - METABOLIC INHIBITOR (Sodium azide):",
                        "Add 5 ml activated yeast suspension",
                        "Add 0.5 ml sodium azide solution (0.1 M) - final ~10 mM",
                        "Mix and wait 5 minutes (allow poison to inhibit metabolism)",
                        "Add 1 ml methylene blue solution",
                        "Mix gently",
                        "Place in 37°C water bath",
                        "",
                        "TUBE 3 - KILLED YEAST CONTROL (Heat-killed):",
                        "Take 5 ml yeast suspension",
                        "Boil for 5-10 minutes (kills yeast, denatures enzymes)",
                        "Cool to 37°C",
                        "Add 1 ml methylene blue",
                        "Place in 37°C water bath",
                        "",
                        "TUBE 4 - COLD-INHIBITED CONTROL:",
                        "Add 5 ml activated yeast suspension",
                        "Add 1 ml methylene blue",
                        "Place in ice bath (0-4°C) - cold slows metabolism dramatically",
                        "",
                        "OBSERVATIONS:",
                        "Observe color of tubes at 0, 5, 10, 15, 20, 30 minutes",
                        "Record color intensity of:",
                        "  a) Yeast cells (under microscope if available)",
                        "  b) Supernatant (liquid above settled yeast)",
                        "",
                        "Expected observations:",
                        "- CONTROL (active yeast): Solution becomes clearer (dye taken up and reduced inside cells)",
                        "- POISONED yeast: Solution remains blue (no dye uptake)",
                        "- KILLED yeast: Solution remains blue (no active transport)",
                        "- COLD yeast: Solution remains blue or clears very slowly (metabolism inhibited)",
                        "",
                        "OPTIONAL QUANTITATIVE MEASUREMENT:",
                        "After 30 minutes, centrifuge or let settle",
                        "Measure absorbance of supernatant at 665 nm (methylene blue peak)",
                        "Higher absorbance = more dye remaining = less uptake = inhibited transport"
                    ],
                    expectedResults: {
                        controlActiveLiving: {
                            dyeUptake: "YES - rapid uptake",
                            colorChange: "Blue solution → becomes clearer/lighter over time",
                            cellAppearance: "Cells colorless inside (dye reduced)",
                            supernatant: "Clear or light blue (dye removed)",
                            absorbance: "Low (most dye taken up)",
                            explanation: "Active transport functioning; dye actively transported into cells and reduced by metabolism"
                        },
                        poisonedSodiumAzide: {
                            dyeUptake: "NO - little or no uptake",
                            colorChange: "Solution remains dark blue throughout",
                            cellAppearance: "Cells blue on outside only (no internal accumulation)",
                            supernatant: "Dark blue (dye remains in solution)",
                            absorbance: "High (dye not removed)",
                            explanation: "Sodium azide blocks electron transport chain → no ATP → no active transport → no dye uptake"
                        },
                        killedHeat: {
                            dyeUptake: "NO - none",
                            colorChange: "Remains dark blue",
                            cellAppearance: "Cells stained blue (passive diffusion only)",
                            supernatant: "Dark blue",
                            absorbance: "High",
                            explanation: "Boiling denatures all enzymes and transport proteins → no metabolism → no active transport"
                        },
                        coldInhibited: {
                            dyeUptake: "Minimal - very slow if any",
                            colorChange: "Remains blue or very slow lightening",
                            cellAppearance: "Little dye accumulation",
                            supernatant: "Blue",
                            absorbance: "High",
                            explanation: "Cold dramatically slows all enzymatic reactions including ATP production and transport"
                        }
                    },
                    dataTable: [
                        ["Treatment", "0 min", "10 min", "20 min", "30 min", "Final Absorbance (665nm)", "Dye Uptake?"],
                        ["Control (active yeast)", "Dark blue", "Medium blue", "Light blue", "Clear/pale", "0.15", "YES"],
                        ["+ Sodium azide (poison)", "Dark blue", "Dark blue", "Dark blue", "Dark blue", "0.95", "NO"],
                        ["Boiled (killed)", "Dark blue", "Dark blue", "Dark blue", "Dark blue", "1.00", "NO"],
                        ["Cold (4°C)", "Dark blue", "Dark blue", "Medium blue", "Medium blue", "0.80", "Minimal"],
                        ["", "", "", "", "", "", ""],
                        ["Interpretation: Low absorbance = dye removed from solution = active uptake", "", "", "", "", "", ""]
                    ],
                    observations: [
                        "Active (control) yeast: Solution cleared significantly over 30 min (dye taken up)",
                        "Poisoned yeast (azide): Solution remained dark blue (no dye uptake)",
                        "Killed yeast: Solution remained dark blue (no active process)",
                        "Cold yeast: Solution remained blue or cleared very slowly",
                        "Under microscope: Control cells show dye reduction inside; poisoned cells show dye only on surface",
                        "Demonstrates that dye uptake is an active, energy-dependent process"
                    ],
                    analysis: {
                        activeTransport: [
                            "Control yeast actively transports methylene blue INTO cells",
                            "Inside cells, dye is REDUCED by metabolic processes (becomes colorless)",
                            "Result: Dye removed from solution, cells appear clear",
                            "This requires ATP from cellular respiration"
                        ],
                        metabolicPoisonEffect: [
                            "Sodium azide (or cyanide) inhibits cytochrome oxidase in electron transport chain",
                            "ETC blocked → oxidative phosphorylation stopped → no ATP production",
                            "No ATP → no active transport → no dye uptake",
                            "Dye remains in solution (blue supernatant)",
                            "Proves transport is ACTIVE (energy-dependent), not passive"
                        ],
                        controlComparisons: {
                            killedYeast: "Proves LIVING metabolism required (not just physical adsorption)",
                            coldYeast: "Proves TEMPERATURE-DEPENDENT enzymatic process",
                            unpoisonedYeast: "Shows normal active transport when ATP available"
                        },
                        connectionToSkou: [
                            "Skou discovered Na⁺/K⁺-ATPase uses ATP to pump ions against gradients",
                            "This experiment demonstrates principle: active transport requires ATP",
                            "Metabolic poisons that block ATP production → block active transport",
                            "Yeast uses similar ATP-dependent transporters for various solutes including dyes",
                            "Na⁺/K⁺ pump would also be inhibited by these poisons in animal cells"
                        ]
                    },
                    mechanismExplanation: {
                        normalConditions: [
                            "1. Glucose + O₂ → cellular respiration → ATP",
                            "2. ATP powers transport proteins in membrane",
                            "3. Methylene blue actively transported into cell",
                            "4. Inside cell, dye reduced by metabolic reactions → colorless",
                            "5. More dye enters → cycle continues → solution clears"
                        ],
                        withPoison: [
                            "1. Poison inhibits electron transport chain",
                            "2. No ATP produced",
                            "3. Transport proteins cannot function without ATP",
                            "4. Dye cannot enter cells",
                            "5. Solution remains blue"
                        ]
                    },
                    results: "Active yeast cells took up methylene blue dye, clearing the solution, while yeast treated with metabolic poison (sodium azide), killed by boiling, or chilled showed little to no dye uptake. This demonstrates that dye accumulation is an active, energy-dependent transport process requiring ATP.",
                    conclusions: [
                        "Methylene blue uptake in yeast is an active transport process requiring ATP",
                        "Metabolic poisons (sodium azide) that block ATP production inhibit active transport",
                        "Active transport is temperature-dependent (enzymatic)",
                        "Living, metabolizing cells are required for active dye accumulation",
                        "Confirms principle discovered by Skou: active transport requires cellular energy",
                        "Demonstrates difference between active transport (energy-required) and passive diffusion"
                    ],
                    realWorldApplications: [
                        "MEDICINE:",
                        "- Understanding drug mechanisms (cardiac glycosides like digoxin inhibit Na⁺/K⁺ pump)",
                        "- Poison antidotes (cyanide poisoning treatment)",
                        "- Antibiotic mechanisms (some block bacterial transport systems)",
                        "- Cancer chemotherapy (some drugs target metabolic enzymes)",
                        "",
                        "NEUROSCIENCE:",
                        "- Understanding nerve function (Na⁺/K⁺ pump essential for action potentials)",
                        "- Local anesthetics mechanism (block Na⁺ channels and pumps)",
                        "- Neurotoxin effects (many toxins target ion transport)",
                        "",
                        "CELL BIOLOGY:",
                        "- Studying cellular energy metabolism",
                        "- Understanding how cells maintain ion gradients",
                        "- Investigating membrane transport in different cell types",
                        "",
                        "BIOTECHNOLOGY:",
                        "- Optimizing fermentation (yeast metabolism in brewing, baking)",
                        "- Cell culture conditions (maintaining proper ion balance)",
                        "- Drug screening (testing effects on cellular transport)"
                    ],
                    extensions: [
                        "Dose-response: Test different concentrations of metabolic poison",
                        "Time course: Measure dye uptake every 5 minutes, plot kinetics",
                        "Temperature: Test dye uptake at 0°C, 20°C, 37°C, 50°C",
                        "Different dyes: Compare methylene blue with neutral red or other vital dyes",
                        "Recovery: Add glucose after poison treatment, see if cells recover",
                        "Microscopy: Observe individual cells under microscope, document color changes",
                        "Quantitative: Use spectrophotometer to precisely measure dye concentration over time",
                        "Different organisms: Compare yeast to bacteria or other cells",
                        "Ouabain: If available (and safe to use), test specific Na⁺/K⁺-ATPase inhibitor ouabain on animal cells"
                    ],
                    limitations: [
                        "Methylene blue transport may not be identical to Na⁺/K⁺ pump mechanism",
                        "Yeast transporters different from animal cell Na⁺/K⁺-ATPase",
                        "Cannot directly observe ATP depletion (only infer from lack of transport)",
                        "Metabolic poisons have multiple effects beyond blocking ATP production",
                        "Visual observations subjective unless spectrophotometry used",
                        "Does not directly demonstrate ion pumping (uses dye as proxy)"
                    ],
                    troubleshooting: [
                        "PROBLEM: Control yeast doesn't clear solution",
                        "SOLUTION: Yeast not active (old, dead). Use fresh yeast, ensure warm activation with glucose. Check for bubbling during activation.",
                        "",
                        "PROBLEM: Poisoned yeast still shows dye uptake",
                        "SOLUTION: Poison concentration too low, or not enough pre-incubation time. Increase poison concentration or wait 10 min before adding dye.",
                        "",
                        "PROBLEM: All tubes stay blue",
                        "SOLUTION: Dye concentration too high (saturating), or yeast concentration too low. Dilute dye or increase yeast.",
                        "",
                        "PROBLEM: Inconsistent results between replicates",
                        "SOLUTION: Variation in yeast viability. Mix yeast suspension well before dispensing, use freshly activated yeast.",
                        "",
                        "PROBLEM: Rapid color change in all tubes (including poisoned)",
                        "SOLUTION: Non-specific chemical reduction of dye (not biological). Check for contamination, use fresh reagents."
                    ],
                    saferAlternatives: [
                        "Instead of chemical poisons, use:",
                        "- HEAT: Boil yeast (kills cells, easy and safe)",
                        "- COLD: Ice bath (slows metabolism dramatically)",
                        "- STARVATION: Omit glucose (no substrate for ATP production)",
                        "- ANOXIA: Bubble nitrogen through solution (removes O₂, blocks aerobic respiration)",
                        "These alternatives demonstrate same principle without toxic chemicals"
                     ]
                }
            },

            singer_nicolson_fluid_mosaic: {
                name: "The Fluid Mosaic Model - Singer and Nicolson's Revolutionary Model",
                relatedTopics: ['membrane_structure'],
                category: 'membrane_structure',
                historicalBackground: {
                    scientists: "S. Jonathan Singer and Garth L. Nicolson",
                    year: "1972",
                    publication: "Science magazine article 'The Fluid Mosaic Model of the Structure of Cell Membranes'",
                    revolutionaryIdea: "Membrane is a dynamic, fluid structure with proteins floating in lipid bilayer like 'icebergs in a sea'",
                    previousModels: {
                        danielliDavson: "1935 - 'protein-lipid-protein sandwich' (proteins coating lipid bilayer)",
                        limitation: "Static model, didn't explain membrane protein mobility or diversity"
                    },
                    keyInsights: [
                        "Membrane is FLUID - lipids and proteins can move laterally",
                        "Membrane is MOSAIC - diverse proteins scattered throughout like tiles",
                        "Proteins are INTEGRAL (embedded) or PERIPHERAL (surface-attached)",
                        "Proteins can diffuse laterally but rarely flip transversely",
                        "Asymmetry is maintained (inside different from outside)"
                    ],
                    evidenceSupporting: [
                        "Freeze-fracture electron microscopy - showed proteins embedded within bilayer",
                        "FRAP experiments - demonstrated lateral diffusion of membrane components",
                        "Cell fusion studies - mouse and human proteins intermixed after fusion",
                        "Temperature effects on membrane fluidity"
                    ],
                    impact: "Unified model explaining membrane structure, function, and dynamics; became foundation for cell biology",
                    modernRefinements: "Lipid rafts, membrane domains, protein complexes, cytoskeleton interactions - membrane more organized than simple 'fluid sea'",
                    significance: "Most cited model in cell biology; revolutionized understanding of membrane function"
                },
                labExperiment: {
                    title: "Plasmolysis in Elodea/Onion Cells - Observing Membrane Separation from Cell Wall",
                    hypothesis: "If the plasma membrane is a distinct structure separate from the cell wall, then placing plant cells in hypertonic solution will cause water loss by osmosis, leading to membrane shrinkage and separation from the rigid cell wall (plasmolysis), which can be observed microscopically",
                    purpose: "Demonstrate the plasma membrane as a distinct, flexible structure using plasmolysis in plant cells; observe the fluid nature of the membrane and its response to osmotic stress",
                    background: {
                        plasmolysis: "Shrinkage of cytoplasm and plasma membrane away from cell wall due to water loss",
                        mechanism: "Hypertonic solution → water exits by osmosis → cell contents shrink → membrane pulls away from wall",
                        reversibility: "Can be reversed by returning cells to hypotonic solution (deplasmolysis)",
                        cellWall: "Rigid, does NOT shrink (prevents cell from changing shape)",
                        plasmaMembrane: "Flexible, fluid, follows the cytoplasm as it shrinks",
                        observation: "Gap between cell wall and membrane becomes visible under microscope",
                        fluidMosaicRelevance: "Demonstrates membrane is flexible, dynamic structure separate from cell wall"
                    },
                    variables: {
                        independent: "Tonicity of surrounding solution (hypotonic, isotonic, hypertonic)",
                        dependent: "Degree of plasmolysis (% of cells showing membrane separation)",
                        controlled: ["Plant material", "Solution concentration", "Time", "Temperature", "Microscope magnification"]
                    },
                    materials: [
                        "Fresh Elodea (aquatic plant) or onion bulb",
                        "Microscope slides and coverslips",
                        "Compound light microscope",
                        "Distilled water (hypotonic control)",
                        "0.9% NaCl solution (approximately isotonic)",
                        "10% NaCl solution (hypertonic)",
                        "20-30% NaCl or sucrose solution (very hypertonic)",
                        "Pipettes or droppers",
                        "Paper towels or filter paper",
                        "Forceps or tweezers",
                        "Razor blade or scalpel (for onion)",
                        "Petri dish"
                    ],
                    safetyPrecautions: [
                        "Handle microscope slides and coverslips carefully (breakable)",
                        "Razor blade/scalpel very sharp - cut away from body",
                        "Concentrated salt solutions can irritate eyes - wear goggles",
                        "Clean up any spills immediately",
                        "Dispose of plant material and solutions properly"
                    ],
                    procedure: [
                        "OPTION A: ELODEA METHOD (Easier, faster)",
                        "",
                        "PREPARATION:",
                        "Select young, healthy Elodea leaf (bright green)",
                        "Using forceps, carefully remove one leaf from near growing tip",
                        "",
                        "SLIDE 1 - CONTROL (Normal cells in water):",
                        "Place Elodea leaf on slide with 1-2 drops distilled water",
                        "Add coverslip gently (avoid air bubbles)",
                        "Observe under microscope at 100x, then 400x magnification",
                        "Locate individual cells with visible cell walls and chloroplasts",
                        "Draw and label: cell wall, plasma membrane (against wall), chloroplasts, central vacuole",
                        "NOTE: In turgid cells, membrane pressed tightly against wall (may be hard to distinguish)",
                        "",
                        "SLIDE 2 - HYPERTONIC TREATMENT (Plasmolysis):",
                        "Place fresh Elodea leaf on new slide with 1-2 drops distilled water",
                        "Add coverslip",
                        "PLASMOLYSIS TECHNIQUE - add salt solution to draw it under coverslip:",
                        "  - Place 2-3 drops of 20% NaCl solution on one side of coverslip",
                        "  - Touch edge of paper towel to opposite side of coverslip",
                        "  - Capillary action draws salt solution under coverslip, replacing water",
                        "Observe immediately and continue watching for 5-10 minutes",
                        "Record changes as they occur:",
                        "  - Incipient plasmolysis: Membrane just beginning to pull away at corners",
                        "  - Evident plasmolysis: Clear gap between membrane and wall",
                        "  - Final plasmolysis: Membrane fully retracted, cytoplasm forms rounded mass in center",
                        "Draw stages of plasmolysis",
                        "",
                        "SLIDE 3 - RECOVERY (Deplasmolysis):",
                        "Using same plasmolyzed leaf, replace hypertonic solution with distilled water",
                        "Use same technique: add water drops on one side, wick away salt solution from other",
                        "Observe over 10-15 minutes",
                        "Watch for membrane to expand back against cell wall (recovery)",
                        "Draw deplasmolyzed cells",
                        "",
                        "========================================",
                        "",
                        "OPTION B: ONION EPIDERMIS METHOD (Shows plasmolysis more dramatically)",
                        "",
                        "PREPARATION:",
                        "Cut onion bulb into quarters",
                        "Peel apart layers (scales)",
                        "Using forceps, peel thin transparent epidermis from INNER (concave) surface",
                        "Epidermis is single cell layer thick - should be almost transparent",
                        "",
                        "SLIDE 1 - CONTROL:",
                        "Place small piece of onion epidermis on slide",
                        "Add 1-2 drops distilled water",
                        "Add coverslip",
                        "Observe at 100x and 400x",
                        "NOTE: Onion cells lack chloroplasts but have large central vacuole",
                        "May need to add iodine stain to see cell structures better (optional)",
                        "",
                        "SLIDE 2 - PLASMOLYSIS:",
                        "Fresh epidermis on new slide with distilled water",
                        "Add coverslip",
                        "Draw 10% NaCl solution under coverslip (same technique as Elodea)",
                        "Observe for 5-10 minutes",
                        "Plasmolysis more dramatic in onion - purple pigment (if present) shrinks away from wall",
                        "Draw stages",
                        "",
                        "SLIDE 3 - RECOVERY:",
                        "Replace hypertonic solution with distilled water",
                        "Observe recovery over 10-15 minutes",
                        "",
                        "DATA COLLECTION:",
                        "For each treatment, count 50-100 cells (if possible)",
                        "Record number showing:",
                        "  - Turgid (normal)",
                        "  - Incipient plasmolysis (slight separation)",
                        "  - Evident plasmolysis (clear separation)",
                        "  - Final plasmolysis (complete retraction)",
                        "Calculate percentages",
                        "",
                        "OPTIONAL CONCENTRATION GRADIENT:",
                        "Test multiple salt concentrations (5%, 10%, 15%, 20%, 25%)",
                        "Compare degree of plasmolysis",
                        "Determine concentration where 50% of cells plasmolyzed (incipient plasmolysis point)"
                    ],
                    expectedResults: {
                        control_distilledWater: {
                            observation: "Cells turgid, cytoplasm fills entire space bounded by cell wall",
                            membrane: "Pressed tightly against cell wall (not visible as separate structure)",
                            chloroplasts: "Distributed around periphery (Elodea)",
                            vacuole: "Large, central, occupies most of cell volume",
                            turgorPressure: "High - cell firm",
                            condition: "Normal, healthy plant cell"
                        },
                        hypertonic_treatment: {
                            immediateEffect: "Chloroplasts begin moving inward",
                            incipientPlasmolysis_2_5min: {
                                observation: "Membrane begins pulling away from wall at corners and edges",
                                appearance: "Small gaps appear between membrane and wall",
                                chloroplasts: "Clumping slightly",
                                stage: "First signs of plasmolysis"
                            },
                            evidentPlasmolysis_5_10min: {
                                observation: "Clear, large gap between membrane and wall all around cell",
                                cytoplasm: "Shrinking toward center",
                                membrane: "Clearly visible as separate structure",
                                shape: "Cytoplasm becoming rounded or irregular",
                                stage: "Obvious plasmolysis"
                            },
                            finalPlasmolysis_10_15min: {
                                observation: "Membrane fully retracted, cytoplasm forms compact rounded mass in cell center",
                                gap: "Large space between membrane and wall (filled with hypertonic solution)",
                                chloroplasts: "Densely packed in center",
                                stage: "Maximum plasmolysis"
                            },
                            cellWall: "Remains unchanged (rigid, does not shrink)",
                            percentCells: "80-100% of cells should show plasmolysis in 20% NaCl"
                        },
                        recovery_deplasmolysis: {
                            process: "Reversal of plasmolysis when returned to hypotonic solution",
                            mechanism: "Water re-enters cell by osmosis, cytoplasm swells, membrane expands",
                            timeframe: "10-20 minutes for full recovery",
                            observation: "Gap gradually closes, membrane moves back against wall, turgor restored",
                            chloroplasts: "Redistribute around periphery",
                            reversibility: "Usually complete if plasmolysis not too severe or prolonged",
                            evidence: "Demonstrates membrane is flexible, dynamic, living structure"
                        }
                    },
                    dataTable: [
                        ["Treatment", "Turgid (%)", "Incipient (%)", "Evident (%)", "Final (%)", "Total Cells"],
                        ["Control (water)", "100", "0", "0", "0", "50"],
                        ["5% NaCl", "70", "25", "5", "0", "50"],
                        ["10% NaCl", "20", "30", "40", "10", "50"],
                        ["20% NaCl", "0", "10", "40", "50", "50"],
                        ["Recovery (water)", "85", "10", "5", "0", "50"],
                        ["", "", "", "", "", ""],
                        ["Observations:", "Note speed of plasmolysis, shape of retracted cytoplasm, membrane flexibility", "", "", "", ""]
                    ],
                    observations: [
                        "In hypertonic solution, cells rapidly lost water and membrane separated from cell wall",
                        "Cell wall remained rigid and unchanged throughout",
                        "Plasma membrane was flexible and followed the shrinking cytoplasm",
                        "Gap between membrane and wall became clearly visible",
                        "Plasmolysis degree increased with salt concentration",
                        "Process was reversible - cells recovered when returned to water",
                        "Chloroplasts moved with cytoplasm, concentrating in center during plasmolysis",
                        "Membrane appeared as distinct, continuous structure separate from wall"
                    ],
                    analysis: {
                        demonstratesMembraneStructure: [
                            "Plasmolysis PROVES membrane is separate structure from cell wall",
                            "Gap between wall and membrane visible under microscope",
                            "Membrane is FLEXIBLE - can shrink and expand",
                            "Cell wall is RIGID - maintains shape even when cell loses water",
                            "Membrane is SELECTIVELY PERMEABLE - allows water but retains cytoplasm"
                        ],
                        osmosisExplanation: [
                            "Hypertonic solution has lower water potential than cell interior",
                            "Water exits cell by osmosis (high water potential → low)",
                            "As water leaves, cytoplasm volume decreases",
                            "Membrane is flexible, follows shrinking cytoplasm",
                            "Cell wall is rigid, cannot shrink → gap forms"
                        ],
                        connectionToFluidMosaic: [
                            "Demonstrates membrane is FLUID structure (flexible, adapts to volume changes)",
                            "Membrane maintains integrity even when severely distorted",
                            "Rapid recovery shows membrane is dynamic, not static",
                            "Membrane is distinct from cell wall - separate lipid bilayer structure",
                            "Supports Singer-Nicolson model: membrane is flexible, lipid-based, fluid"
                        ],
                        reversibility: [
                            "Recovery demonstrates membrane is LIVING, functional structure",
                            "Water re-enters by osmosis when gradient reversed",
                            "Membrane can return to original configuration",
                            "Proves damage is osmotic (not structural) and temporary"
                        ],
                        stages: {
                            incipientPlasmolysis: "First pulling away - minimal water loss",
                            evidentPlasmolysis: "Obvious gap - substantial water loss",
                            finalPlasmolysis: "Maximum retraction - extreme water loss",
                            lethality: "If too prolonged or severe, cells may die (irreversible)"
                        }
                    },
                    drawings: {
                        required: [
                            "NORMAL TURGID CELL: Show cell wall, membrane (against wall), cytoplasm filling cell, chloroplasts around edge, large central vacuole",
                            "PLASMOLYZED CELL: Show cell wall (unchanged), gap, retracted membrane, shrunken cytoplasm (rounded), clustered chloroplasts",
                            "RECOVERED CELL: Show membrane back against wall, restored cytoplasm, redistributed chloroplasts"
                        ],
                        labels: ["Cell wall", "Plasma membrane", "Cytoplasm", "Central vacuole", "Chloroplasts", "Gap (plasmolytic space)"]
                    },
                    calculations: {
                        percentPlasmolysis: "(Number plasmolyzed cells / Total cells counted) × 100%",
                        incipientPlasmolysisSolution: "Concentration where ~50% cells show incipient plasmolysis ≈ isotonic point"
                    },
                    results: "Plant cells placed in hypertonic salt solutions underwent plasmolysis, with the plasma membrane visibly separating from the cell wall as water exited by osmosis. The process was reversible when cells were returned to hypotonic solution. The cell wall remained rigid while the membrane was flexible and dynamic, demonstrating that the plasma membrane is a distinct, fluid structure separate from the cell wall.",
                    conclusions: [
                        "The plasma membrane is a distinct, flexible structure separate from the cell wall",
                        "Membrane is fluid and dynamic - can shrink, expand, and maintain integrity under stress",
                        "Cell wall is rigid and does not change shape with osmotic changes",
                        "Osmosis causes water movement that can lead to plasmolysis in hypertonic solutions",
                        "Plasmolysis is reversible if not too severe, demonstrating living membrane",
                        "Supports fluid mosaic model: membrane is flexible lipid structure, not rigid scaffold",
                        "Demonstrates membrane selective permeability (water exits, solutes retained)"
                    ],
                    realWorldApplications: [
                        "PLANT PHYSIOLOGY:",
                        "- Understanding plant wilting (similar to plasmolysis)",
                        "- Soil salinity effects on crops (high salt → plasmolysis → death)",
                        "- Drought stress response",
                        "- Frost damage (ice crystal formation causes plasmolysis)",
                        "",
                        "FOOD PRESERVATION:",
                        "- Salting vegetables (e.g., sauerkraut) - plasmolysis removes water from cells",
                        "- Making jams/jellies (high sugar causes plasmolysis in microbes)",
                        "- Pickling (salt/vinegar causes microbial plasmolysis)",
                        "",
                        "AGRICULTURE:",
                        "- Fertilizer application (over-fertilization can cause plasmolysis)",
                        "- Irrigation water quality (salty water damages crops)",
                        "- Selecting salt-tolerant crop varieties",
                        "",
                        "MEDICINE:",
                        "- Understanding cell volume regulation",
                        "- IV fluid selection (wrong tonicity can damage cells)",
                        "- Hypertonic saline uses (reduce brain swelling)"
                    ],
                    extensions: [
                        "Concentration series: Test 5%, 10%, 15%, 20%, 25% NaCl to determine threshold",
                        "Time course: Observe plasmolysis every 2 minutes, plot % plasmolyzed vs time",
                        "Different solutes: Compare NaCl vs sucrose vs glycerol (different molecular weights)",
                        "Temperature effect: Compare plasmolysis rate at 5°C, 20°C, 37°C",
                        "Different plants: Compare Elodea, onion, Tradescantia, etc.",
                        "Recovery kinetics: Measure how fast cells recover at different concentrations",
                        "Vital stains: Use neutral red (accumulates in vacuole) to visualize membrane better",
                        "Calculate water potential: Use incipient plasmolysis point to estimate cell Ψ",
                        "Freeze damage: Freeze and thaw cells, observe membrane damage (irreversible plasmolysis)"
                    ],
                    limitations: [
                        "Only works with plant cells (animal cells would lyse or crenate, not plasmolyze)",
                        "Cell wall prevents observation of membrane in turgid cells (pressed against wall)",
                        "Severe or prolonged plasmolysis can be lethal (cell death)",
                        "Natural variation between cells (age, health affect response)",
                        "Subjective classification of plasmolysis stages",
                        "Does not directly show lipid bilayer or proteins (just overall membrane)"
                    ],
                    troubleshooting: [
                        "PROBLEM: Cannot see plasmolysis",
                        "SOLUTION: Salt concentration too low. Use 20-30% NaCl. Or wait longer (10+ minutes).",
                        "",
                        "PROBLEM: Cells immediately burst or die",
                        "SOLUTION: Too rough handling or wrong material. Use fresh, healthy tissue. Handle gently.",
                        "",
                        "PROBLEM: Membrane not visible in turgid cells",
                        "SOLUTION: Normal - membrane pressed against wall. Add hypertonic solution to see separation.",
                        "",
                        "PROBLEM: No recovery observed",
                        "SOLUTION: Plasmolysis too severe/long (cells dead). Use milder concentration (10%) and shorter time (5 min).",
                        "",
                        "PROBLEM: Chloroplasts not visible (onion)",
                        "SOLUTION: Onion lacks chloroplasts (normal). Use Elodea for chloroplasts, or add iodine stain to onion.",
                        "",
                        "PROBLEM: Air bubbles obscure view",
                        "SOLUTION: Add coverslip carefully at 45° angle. Use mounting needle to lower slowly.",
                        "",
                        "PROBLEM: Inconsistent results",
                        "SOLUTION: Use cells from same region of plant. Control solution concentration carefully. Time precisely."
                    ],
                    historicalContext: {
                        beforeFluidMosaic: "Earlier models depicted membrane as static protein coating on lipid",
                        plasmolysisMeaning: "Plasmolysis studies showed membrane was flexible, separate from wall",
                        evidenceForFluidity: "Membrane can distort, compress, expand - requires fluid lipid structure",
                        singerNicolson: "1972 model explained this flexibility: lipid bilayer is fluid 'sea'",
                        modernView: "Fluid mosaic model confirmed, refined with lipid rafts, membrane domains"
                    }
                }
            }
        };

        // Link experiments to topics
        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.cellularTransportExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.cellularTransportTopics[topicId]) {
                    if (!this.cellularTransportTopics[topicId].relatedExperiments) {
                        this.cellularTransportTopics[topicId].relatedExperiments = [];
                    }
                    this.cellularTransportTopics[topicId].relatedExperiments.push({
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
            membrane_structure: {
                'Structure and Composition': [
                    'Thinking the membrane is a solid, static barrier (it\'s fluid and dynamic)',
                    'Believing proteins are only on the surface (many are embedded/integral)',
                    'Confusing cell wall with cell membrane (plants have both, animals only membrane)',
                    'Thinking all membranes are identical (composition varies by cell type and organelle)',
                    'Believing cholesterol is bad for membranes (it\'s essential for fluidity regulation)'
                ],
                'Fluid Mosaic Model': [
                    'Thinking "fluid" means liquid like water (it\'s more like a 2D fluid within the plane)',
                    'Believing proteins are fixed in place (most can move laterally)',
                    'Thinking membrane is homogeneous (there are lipid rafts and domains)',
                    'Confusing lateral movement with flipping across bilayer (flipping is rare)'
                ]
            },
            
            passive_transport: {
                'Diffusion and Osmosis': [
                    'Thinking diffusion requires energy (it\'s spontaneous, driven by kinetic energy)',
                    'Believing molecules stop moving at equilibrium (they move but no NET movement)',
                    'Confusing diffusion with active transport',
                    'Thinking osmosis only occurs in living cells (happens across any semipermeable membrane)',
                    'Believing osmosis is movement of solutes (it\'s water movement)',
                    'Thinking water always moves into cells (direction depends on tonicity)'
                ],
                'Facilitated Diffusion': [
                    'Confusing facilitated diffusion with active transport (facilitated is still passive, no ATP)',
                    'Believing all channel proteins are always open (many are gated)',
                    'Thinking carriers and channels are the same (different mechanisms)'
                ]
            },
            
            active_transport: {
                'Energy and Direction': [
                    'Thinking active transport always moves molecules into cells (can move out too)',
                    'Confusing active transport with facilitated diffusion',
                    'Believing only ions are actively transported (many molecules are)',
                    'Thinking ATP directly pushes molecules (ATP changes protein shape)',
                    'Believing all membrane transport requires ATP (passive doesn\'t)'
                ],
                'Sodium-Potassium Pump': [
                    'Thinking pump moves equal numbers of Na⁺ and K⁺ (3 Na⁺ out, 2 K⁺ in)',
                    'Believing pump only maintains resting potential (also drives secondary transport, controls volume)',
                    'Confusing primary and secondary active transport',
                    'Thinking secondary transport doesn\'t use energy (uses ion gradient, which required ATP to create)'
                ]
            },
            
            bulk_transport: {
                'Endocytosis and Exocytosis': [
                    'Thinking bulk transport is just for large cells (all cells use it)',
                    'Confusing phagocytosis with pinocytosis',
                    'Believing endocytosis and exocytosis are opposite processes for same molecules (often different materials)',
                    'Thinking receptor-mediated endocytosis is non-specific (it\'s highly specific)',
                    'Believing vesicles just randomly fuse (specific SNARE proteins direct fusion)'
                ]
            },
            
            tonicity_osmoregulation: {
                'Tonicity': [
                    'Confusing tonicity with osmolarity (tonicity considers membrane permeability)',
                    'Thinking isotonic means no water movement at all (equal movement in both directions)',
                    'Believing hypertonic/hypotonic are absolute (they\'re relative comparisons)',
                    'Confusing concentration of solution with its tonicity',
                    'Thinking plant cells burst in hypotonic solution (cell wall prevents this)'
                ],
                'Cell Responses': [
                    'Believing all cells respond the same to tonicity (plant vs animal cells differ)',
                    'Thinking plasmolysis is cell death (usually reversible)',
                    'Confusing crenation (animal cells) with plasmolysis (plant cells)',
                    'Believing turgor pressure is bad (it\'s essential for plant structure)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use diagrams showing before/after states',
                effectiveness: 'High for understanding dynamic processes'
            },
            hands_on_models: {
                method: 'Physical models of membranes and transport',
                effectiveness: 'Very high for kinesthetic learners'
            },
            analogies: {
                method: 'Relate to everyday examples (doors, pumps, filters)',
                effectiveness: 'High for making abstract concepts concrete'
            },
            contrast_table: {
                method: 'Side-by-side comparison of related concepts',
                effectiveness: 'High for distinguishing similar processes'
            },
            time_lapse: {
                method: 'Show process development over time',
                effectiveness: 'Very high for understanding sequential events'
            },
            experimental_demonstration: {
                method: 'Link to hands-on lab experiments',
                effectiveness: 'Very high for concrete understanding'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}?",
                "How do you think molecules cross cell membranes?",
                "What questions do you have about {topic}?",
                "What do you predict will be most challenging about {topic}?"
            ],
            duringLearning: [
                "Does this make sense? Can you explain it in your own words?",
                "How does {process} differ from {related_process}?",
                "Can you predict what would happen if {condition changed}?",
                "What's still confusing about this concept?",
                "Can you draw a diagram to represent this process?"
            ],
            afterLearning: [
                "What were the key differences between passive and active transport?",
                "What surprised you about {topic}?",
                "How would you explain {concept} to someone else?",
                "What real-world examples can you think of for {process}?",
                "What are you still unsure about?"
            ],
            problemSolving: [
                "Is this passive or active transport? How can you tell?",
                "Which direction will water/molecules move? Why?",
                "What would happen if ATP was depleted?",
                "How does this relate to what you learned about {previous_topic}?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            membrane_structure: [
                {
                    scenario: "Cholesterol and Heart Disease",
                    context: "People worry about cholesterol, but it's essential for membrane function",
                    application: "Cholesterol modulates membrane fluidity; too little causes membranes too fluid, too much makes them too rigid",
                    question: "Why do cells need cholesterol in their membranes despite its association with heart disease?"
                },
                {
                    scenario: "Hypothermia and Membranes",
                    context: "Cold-water drowning victims sometimes survive long periods underwater",
                    application: "Low temperature decreases membrane fluidity, slowing all cellular processes including damage",
                    question: "How does membrane fluidity affect survival in extreme cold?"
                }
            ],
            
            passive_transport: [
                {
                    scenario: "Oxygen Therapy",
                    context: "Hospital patients receive supplemental oxygen to improve breathing",
                    application: "Increasing O₂ concentration in lungs increases diffusion gradient, driving more O₂ into blood",
                    question: "Why does increasing oxygen concentration help patients with breathing difficulties?"
                },
                {
                    scenario: "Altitude Sickness",
                    context: "Climbers at high altitude experience headache, nausea, fatigue",
                    application: "Lower atmospheric pressure reduces O₂ gradient, slowing diffusion into blood",
                    question: "Why do people experience symptoms at high altitude even though air still contains 21% oxygen?"
                }
            ],
            
            active_transport: [
                {
                    scenario: "Digitalis (Foxglove) Poisoning",
                    context: "Digitalis is a cardiac medication that can be toxic in overdose",
                    application: "Digitalis inhibits Na⁺/K⁺ pump → increased intracellular Na⁺ → affects cardiac muscle contraction",
                    question: "How does inhibiting the sodium-potassium pump affect heart function?"
                },
                {
                    scenario: "Cystic Fibrosis",
                    context: "Genetic disease causing thick mucus in lungs",
                    application: "Defective Cl⁻ channel → reduced Cl⁻ and water secretion → thick mucus",
                    question: "How does a defective chloride channel cause mucus buildup?"
                }
            ],
            
            bulk_transport: [
                {
                    scenario: "Botulinum Toxin (Botox)",
                    context: "Used cosmetically and medically to reduce muscle contractions",
                    application: "Botulinum toxin blocks exocytosis of acetylcholine at neuromuscular junction → paralysis",
                    question: "How does blocking exocytosis cause muscle paralysis?"
                },
                {
                    scenario: "Familial Hypercholesterolemia",
                    context: "Genetic disorder causing extremely high cholesterol and early heart attacks",
                    application: "Defective LDL receptors → reduced receptor-mediated endocytosis → cholesterol accumulates in blood",
                    question: "Why do people with defective LDL receptors have high cholesterol despite normal diet?"
                }
            ],
            
            tonicity_osmoregulation: [
                {
                    scenario: "IV Fluid Selection",
                    context: "Hospitals use 0.9% saline (normal saline) for IV fluids",
                    application: "0.9% NaCl is isotonic to blood; prevents RBC lysis (hypotonic) or crenation (hypertonic)",
                    question: "Why is it dangerous to inject pure water intravenously?"
                },
                {
                    scenario: "Saltwater Drowning vs Freshwater Drowning",
                    context: "Medical treatment differs depending on water type",
                    application: "Saltwater (hypertonic) draws water from blood; freshwater (hypotonic) enters blood, can lyse RBCs",
                    question: "Why do saltwater and freshwater drowning have different medical consequences?"
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
                    example: "Define osmosis"
                },
                understand: {
                    description: "Explain ideas or concepts",
                    verbs: ["Explain", "Describe", "Summarize", "Compare", "Classify"],
                    example: "Explain how the sodium-potassium pump maintains ion gradients"
                },
                apply: {
                    description: "Use information in new situations",
                    verbs: ["Calculate", "Solve", "Demonstrate", "Predict", "Use"],
                    example: "Predict what happens to a cell in hypertonic solution"
                },
                analyze: {
                    description: "Draw connections among ideas",
                    verbs: ["Analyze", "Differentiate", "Organize", "Compare", "Contrast"],
                    example: "Compare and contrast passive and active transport mechanisms"
                },
                evaluate: {
                    description: "Justify a decision or course of action",
                    verbs: ["Evaluate", "Critique", "Judge", "Defend", "Assess"],
                    example: "Evaluate why IV fluids must be isotonic to blood"
                },
                create: {
                    description: "Produce new or original work",
                    verbs: ["Design", "Construct", "Create", "Develop", "Formulate"],
                    example: "Design an experiment to test membrane permeability to different molecules"
                }
            },
            
            understandingLevels: {
                novice: {
                    characteristics: ["Memorizes facts", "Confuses similar concepts", "Struggles with application"],
                    support: ["Provide clear definitions", "Use concrete examples", "Create comparison tables"]
                },
                developing: {
                    characteristics: ["Understands individual concepts", "Can apply to familiar situations", "Beginning to make connections"],
                    support: ["Challenge with new contexts", "Encourage explanation", "Introduce exceptions"]
                },
                proficient: {
                    characteristics: ["Connects related concepts", "Applies to novel situations", "Explains reasoning"],
                    support: ["Present complex problems", "Encourage analysis", "Develop experimental design skills"]
                },
                expert: {
                    characteristics: ["Synthesizes across topics", "Creates new connections", "Teaches others effectively"],
                    support: ["Research-level questions", "Mentoring others", "Advanced applications"]
                }
            }
        };

        this.assessmentQuestions = {
            membrane_structure: {
                remember: "List the main components of the plasma membrane",
                understand: "Explain why the membrane is described as a 'fluid mosaic'",
                apply: "Predict how decreasing temperature would affect membrane fluidity",
                analyze: "Compare the fluid mosaic model to earlier membrane models",
                evaluate: "Evaluate the evidence supporting the fluid mosaic model",
                create: "Design an experiment to demonstrate lateral diffusion of membrane proteins"
            },
            passive_transport: {
                remember: "Define facilitated diffusion",
                understand: "Explain why oxygen can cross the membrane easily but glucose cannot",
                apply: "Predict the direction of water movement when a cell is placed in 10% salt solution",
                analyze: "Differentiate between simple diffusion, facilitated diffusion, and osmosis",
                evaluate: "Evaluate why aquaporins are necessary if water can cross lipid bilayers",
                create: "Design an experiment to measure the rate of diffusion across a membrane"
            },
            active_transport: {
                remember: "State the stoichiometry of the Na⁺/K⁺ pump",
                understand: "Explain how secondary active transport uses the Na⁺ gradient",
                apply: "Predict what happens to glucose uptake if ATP production is blocked",
                analyze: "Compare primary and secondary active transport mechanisms",
                evaluate: "Evaluate why cells invest so much ATP in the Na⁺/K⁺ pump",
                create: "Design a drug that could selectively inhibit active transport"
            },
            bulk_transport: {
                remember: "Identify three types of endocytosis",
                understand: "Explain how receptor-mediated endocytosis achieves specificity",
                apply: "Predict how blocking SNARE proteins would affect neurotransmitter release",
                analyze: "Distinguish between constitutive and regulated exocytosis",
                evaluate: "Evaluate the advantages of receptor-mediated endocytosis over pinocytosis",
                create: "Design a nanoparticle drug delivery system using endocytosis"
            },
            tonicity_osmoregulation: {
                remember: "Define plasmolysis",
                understand: "Explain why plant cells don't burst in distilled water",
                apply: "Calculate the direction of water movement given water potentials",
                analyze: "Compare the response of plant and animal cells to hypotonic solutions",
                evaluate: "Evaluate different strategies organisms use for osmoregulation",
                create: "Design an experiment to determine the isotonic point for a cell type"
            }
        };
    }

// ========================================
    // COMPREHENSIVE HANDLER METHODS FOR EACH TOPIC
    // ========================================

    handleMembraneStructure(problem) {
        const content = {
            topic: "Plasma Membrane Structure: The Fluid Mosaic Model",
            category: 'cell_membrane',
            summary: "The plasma membrane is a selectively permeable barrier composed of a phospholipid bilayer with embedded proteins, carbohydrates, and cholesterol. The fluid mosaic model describes the membrane as a dynamic, fluid structure with proteins floating in a 'sea' of lipids.",
            
            historicalDevelopment: {
                overtonRule: {
                    year: "1899",
                    scientist: "Charles Ernest Overton",
                    discovery: "Cell permeability correlates with lipid solubility",
                    conclusion: "Membranes must be lipid-based"
                },
                gorterGrendel: {
                    year: "1925",
                    scientists: "Gorter and Grendel",
                    discovery: "Lipid bilayer structure",
                    method: "Measured lipid content of RBC membranes"
                },
                danielliDavson: {
                    year: "1935",
                    scientists: "Davson and Danielli",
                    model: "Protein-lipid-protein sandwich",
                    limitation: "Static model, proteins only on surface"
                },
                singerNicolson: {
                    year: "1972",
                    scientists: "S.J. Singer and G.L. Nicolson",
                    model: "Fluid Mosaic Model",
                    revolutionary: "Proteins embedded in fluid lipid bilayer",
                    current: "Still the accepted model (with refinements)"
                }
            },
            
            components: {
                phospholipids: {
                    structure: {
                        head: {
                            composition: "Phosphate group + glycerol",
                            property: "Hydrophilic (polar, 'water-loving')",
                            charge: "Negatively charged",
                            orientation: "Faces aqueous environment"
                        },
                        tails: {
                            composition: "Two fatty acid chains (usually 16-18 carbons)",
                            property: "Hydrophobic (nonpolar, 'water-fearing')",
                            types: {
                                saturated: "No double bonds, straight chains, less fluid",
                                unsaturated: "One or more double bonds, kinked chains, more fluid"
                            },
                            orientation: "Face interior of bilayer"
                        }
                    },
                    arrangement: {
                        bilayer: "Double layer with tails facing inward, heads facing outward",
                        thickness: "~5-10 nm total",
                        selfAssembly: "Spontaneous due to hydrophobic effect",
                        stability: "Held together by hydrophobic interactions and van der Waals forces"
                    },
                    types: {
                        phosphatidylcholine: "Most abundant, PC",
                        phosphatidylethanolamine: "PE, common in inner leaflet",
                        phosphatidylserine: "PS, negatively charged, inner leaflet only",
                        phosphatidylinositol: "PI, signaling molecule precursor",
                        sphingomyelin: "Contains sphingosine, outer leaflet"
                    },
                    functions: [
                        "Forms basic structure and permeability barrier",
                        "Provides fluidity allowing protein movement",
                        "Creates hydrophobic environment excluding polar molecules",
                        "Self-seals when punctured (energetically favorable)"
                    ],
                    amount: "~50% of membrane mass, 75% of membrane molecules by number"
                },
                
                cholesterol: {
                    structure: {
                        composition: "Rigid steroid ring structure + short hydrocarbon tail + hydroxyl group",
                        amphipathic: "Hydroxyl (polar) + ring/tail (nonpolar)"
                    },
                    location: "Embedded between phospholipids, hydroxyl near heads",
                    orientation: "Perpendicular to membrane plane",
                    amount: {
                        variation: "0-50% of lipids depending on cell type",
                        animalCells: "High (up to 50%)",
                        plantCells: "Low or absent (have other sterols)",
                        bacteria: "Generally absent (except Mycoplasma)"
                    },
                    functions: {
                        fluidityModulation: "Acts as 'fluidity buffer'",
                        highTemperature: {
                            effect: "Decreases fluidity",
                            mechanism: "Restrains phospholipid movement, prevents membrane from becoming too fluid"
                        },
                        lowTemperature: {
                            effect: "Increases fluidity",
                            mechanism: "Prevents tight packing of phospholipids, prevents solidification"
                        },
                        stabilization: "Reduces membrane permeability to small water-soluble molecules",
                        strengthening: "Increases mechanical stability"
                    },
                    medicalRelevance: "High cholesterol in blood ≠ high in membranes; LDL delivers cholesterol to cells"
                },
                
                proteins: {
                    amount: "~50% of membrane mass, but 25% by number (proteins larger)",
                    diversity: "Hundreds of different proteins per cell type",
                    classification: {
                        byAttachment: {
                            integralProteins: {
                                definition: "Embedded in lipid bilayer, amphipathic",
                                transmembrane: {
                                    structure: "Span entire membrane (one or multiple passes)",
                                    domains: "Hydrophobic regions in bilayer, hydrophilic regions outside",
                                    alphaHelices: "Common transmembrane structure (e.g., 7 in GPCRs)",
                                    betaBarrels: "Less common (e.g., porins in bacteria)"
                                },
                                removal: "Requires detergents or organic solvents",
                                examples: "Ion channels, carrier proteins, receptors"
                            },
                            peripheralProteins: {
                                definition: "Attached to membrane surface via ionic/hydrogen bonds",
                                attachment: "Bind to integral proteins or lipid head groups",
                                location: "Inner or outer surface (mostly inner)",
                                removal: "Easy - gentle pH or salt changes",
                                examples: "Spectrin (cytoskeleton), some enzymes"
                            }
                        },
                        byFunction: {
                            transport: {
                                channels: "Form pores for specific ions/molecules",
                                carriers: "Bind and change conformation to move molecules",
                                pumps: "Use ATP to move against gradient"
                            },
                            enzymatic: {
                                function: "Catalyze reactions at membrane",
                                examples: "ATP synthase, adenylyl cyclase"
                            },
                            receptors: {
                                function: "Bind signaling molecules, trigger responses",
                                examples: "Hormone receptors, neurotransmitter receptors"
                            },
                            cellAdhesion: {
                                function: "Attach to other cells or ECM",
                                examples: "Integrins, cadherins, selectins"
                            },
                            cellRecognition: {
                                function: "Identify cell type, self vs non-self",
                                examples: "MHC proteins, blood type antigens"
                            },
                            attachmentToCytoskeleton: {
                                function: "Maintain cell shape, anchor organelles",
                                examples: "Spectrin, ankyrin"
                            }
                        }
                    },
                    mobility: {
                        lateral: "Can move within plane of membrane (diffusion rate ~1 μm²/s)",
                        rotational: "Can rotate around axis perpendicular to membrane",
                        transbilayer: "Flip-flop between leaflets (very rare without flippases)",
                        restrictions: [
                            "Cytoskeleton attachments limit movement",
                            "Protein-protein interactions create complexes",
                            "Lipid rafts concentrate certain proteins",
                            "Tight junctions separate membrane regions"
                        ]
                    }
                },
                
                carbohydrates: {
                    amount: "2-10% of membrane mass",
                    location: "ALWAYS on extracellular surface (exoplasmic face)",
                    types: {
                        glycoproteins: {
                            definition: "Carbohydrate covalently bonded to protein",
                            linkage: "N-linked (asparagine) or O-linked (serine/threonine)",
                            examples: "Blood type antigens, MHC proteins, antibodies"
                        },
                        glycolipids: {
                            definition: "Carbohydrate bonded to lipid (usually sphingolipid)",
                            examples: "Cerebrosides, gangliosides",
                            location: "Outer leaflet only"
                        }
                    },
                    glycocalyx: {
                        definition: "Fuzzy carbohydrate coat on cell surface",
                        composition: "Oligosaccharide chains of glycoproteins and glycolipids",
                        thickness: "Up to 50 nm",
                        functions: [
                            "Protection from mechanical and chemical damage",
                            "Cell-cell recognition and adhesion",
                            "Tissue formation and organization",
                            "Immune recognition (self vs non-self)",
                            "Cell surface charge (negative)",
                            "Lubrication (e.g., intestinal lining)",
                            "Receptor binding sites"
                        ]
                    },
                    functions: [
                        "Cell-cell recognition (ABO blood types)",
                        "Immune system identification",
                        "Tissue formation (adhesion)",
                        "Viral/bacterial attachment sites",
                        "Embryonic development"
                    ],
                    clinicalSignificance: {
                        bloodTypes: "ABO antigens are carbohydrate structures",
                        cancerCells: "Altered glycosylation patterns",
                        viralEntry: "Viruses recognize specific glycoproteins (influenza, HIV)"
                    }
                }
            },
            
            fluidMosaicModel: {
                proposed: {
                    year: "1972",
                    scientists: "S. Jonathan Singer and Garth L. Nicolson",
                    publication: "Science"
                },
                keyFeatures: {
                    fluid: {
                        meaning: "Membrane components can move laterally within the plane",
                        lipidMovement: "Phospholipids exchange places ~10⁷ times/second",
                        proteinMovement: "Slower than lipids but still mobile",
                        analogy: "Like icebergs floating in a sea of lipids",
                        evidence: [
                            "FRAP (Fluorescence Recovery After Photobleaching) experiments",
                            "Cell fusion studies (mouse-human hybrid cells)",
                            "Lateral diffusion measurements"
                        ]
                    },
                    mosaic: {
                        meaning: "Diverse proteins scattered throughout like tiles in mosaic",
                        heterogeneity: "Different regions have different protein compositions",
                        asymmetry: "Inside face different from outside face",
                        organization: "Not random - lipid rafts and protein complexes exist"
                    }
                },
                factorsAffectingFluidity: {
                    temperature: {
                        higher: "Increases fluidity (more kinetic energy)",
                        lower: "Decreases fluidity (lipids pack tighter)",
                        transitionTemp: "Temperature where membrane goes from fluid to gel state",
                        adaptation: "Organisms adjust fatty acid composition based on environment"
                    },
                    fattyAcidSaturation: {
                        saturated: "Straight chains pack tightly → less fluid",
                        unsaturated: "Kinks from double bonds → more fluid",
                        example: "Fish in cold water have more unsaturated fatty acids"
                    },
                    fattyAcidLength: {
                        longer: "More van der Waals forces → less fluid",
                        shorter: "Less interaction → more fluid"
                    },
                    cholesterol: {
                        warmTemp: "Restrains movement → decreases fluidity",
                        coldTemp: "Prevents packing → increases fluidity",
                        effect: "Moderates fluidity, narrows range of temperatures where membrane functions"
                    }
                },
                modernRefinements: {
                    lipidRafts: {
                        definition: "Microdomains enriched in cholesterol and sphingolipids",
                        properties: "More ordered, less fluid than surrounding membrane",
                        proteins: "Certain proteins preferentially partition into rafts",
                        functions: "Signal transduction, protein sorting, pathogen entry",
                        size: "10-200 nm, transient"
                    },
                    membraneProteins: "Often form stable complexes, not freely diffusing",
                    cytoskeletonAttachment: "Restricts lateral mobility of many proteins",
                    caveolea: "Flask-shaped invaginations enriched in caveolin protein"
                },
                evidence: {
                    freezeFracture: {
                        technique: "Freeze cells, fracture through membrane, view with EM",
                        observation: "Proteins embedded within bilayer (particles on fracture faces)",
                        significance: "Proved proteins integral to membrane, not just surface coating"
                    },
                    cellFusion: {
                        experiment: "Fuse mouse and human cells, label proteins with fluorescent antibodies",
                        observation: "Proteins intermix over time",
                        conclusion: "Membrane proteins can diffuse laterally",
                        scientists: "Frye and Edidin (1970)"
                    },
                    FRAP: {
                        technique: "Label membrane components, bleach region with laser, watch recovery",
                        observation: "Fluorescence recovers as molecules move into bleached area",
                        conclusion: "Membrane is fluid, components mobile"
                    }
                }
            },
            
            membraneAsymmetry: {
                lipidAsymmetry: {
                    outerLeaflet: "Enriched in phosphatidylcholine, sphingomyelin, glycolipids",
                    innerLeaflet: "Enriched in phosphatidylethanolamine, phosphatidylserine",
                    significance: "PS on outer surface signals apoptosis (cell death)",
                    maintenance: "Flippases, floppases, scramblases control distribution"
                },
                proteinAsymmetry: {
                    orientation: "Proteins have specific orientation (inside-out or outside-in)",
                    glycosylation: "Carbohydrates always on extracellular side",
                    binding: "Active sites, binding domains face specific direction",
                    establishment: "Set during synthesis in ER, maintained in membrane"
                },
                functionalImportance: [
                    "Allows different functions on each face",
                    "Enables directional transport",
                    "Permits asymmetric signaling",
                    "Supports cell polarity (e.g., epithelial cells)"
                ]
            },
            
            selectivePermeability: {
                principle: "Membrane allows some substances to cross but blocks others",
                basis: "Hydrophobic core of bilayer acts as barrier",
                permeabilitySpectrum: {
                    highlyPermeable: {
                        molecules: ["Small nonpolar: O₂, CO₂, N₂", "Small uncharged polar: H₂O, ethanol, urea, glycerol"],
                        mechanism: "Dissolve in lipid bilayer, cross by simple diffusion",
                        rate: "Fast (milliseconds to seconds)"
                    },
                    lowPermeability: {
                        molecules: ["Large polar: Glucose, sucrose, amino acids", "Ions: Na⁺, K⁺, Ca²⁺, Cl⁻, H⁺"],
                        mechanism: "Require protein channels or carriers",
                        rate: "Slower, depends on protein availability"
                    },
                    impermeable: {
                        molecules: ["Very large: Proteins, polysaccharides, nucleic acids", "Highly charged molecules"],
                        mechanism: "Cannot cross; require vesicular transport",
                        crossing: "Endocytosis/exocytosis only"
                    }
                },
                factorsAffectingPermeability: {
                    size: "Smaller molecules cross faster",
                    polarity: "Nonpolar > polar",
                    charge: "Uncharged > charged",
                    lipidSolubility: "Higher solubility = higher permeability (Overton's Rule)",
                    concentration: "Higher gradient = faster diffusion"
                },
                transportProteins: {
                    necessity: "Required for polar/charged molecules",
                    specificity: "Each protein specific for certain molecules",
                    regulation: "Number and activity can be controlled",
                    types: "Channels, carriers, pumps"
                }
            },
            
            membraneSpecializations: {
                microvilli: {
                    structure: "Finger-like projections of plasma membrane",
                    location: "Intestinal epithelium, kidney tubules",
                    function: "Increase surface area for absorption (20-40x)",
                    cytoskeleton: "Actin filament bundles provide structure"
                },
                tightJunctions: {
                    function: "Seal adjacent cells, prevent leakage between cells",
                    location: "Epithelial tissues",
                    proteins: "Claudins, occludins",
                    significance: "Maintain distinct membrane domains (apical vs basolateral)"
                },
                desmosomes: {
                    function: "Anchor cells together, provide mechanical strength",
                    structure: "Cadherins span membrane, link to intermediate filaments",
                    location: "Skin, heart muscle"
                },
                gapJunctions: {
                    function: "Allow direct cell-cell communication",
                    structure: "Connexin proteins form channels (connexons)",
                    pass: "Small molecules (<1000 Da), ions, second messengers",
                    location: "Heart muscle, smooth muscle, many tissues"
                }
            },
            
            comparison: {
                prokaryoticVsEukaryotic: [
                    {feature: "Basic structure", prokaryotic: "Phospholipid bilayer with proteins", eukaryotic: "Phospholipid bilayer with proteins"},
                    {feature: "Cholesterol", prokaryotic: "Absent (except Mycoplasma)", eukaryotic: "Present in animals (up to 50%)"},
                    {feature: "Sterols", prokaryotic: "Some have hopanoids", eukaryotic: "Cholesterol (animals), phytosterols (plants)"},
                    {feature: "Glycocalyx", prokaryotic: "Often extensive (capsule)", eukaryotic: "Thin glycocalyx"},
                    {feature: "Cell wall", prokaryotic: "Most have (peptidoglycan)", eukaryotic: "Plants/fungi yes, animals no"},
                    {feature: "Complexity", prokaryotic: "Simpler", eukaryotic: "More complex, many protein types"}
                ]
            },
            
            examples: [
                {
                    cellType: "Red blood cell (RBC)",
                    features: "Simple membrane, no nucleus, high protein content (50% by mass)",
                    specialization: "Flexible to squeeze through capillaries",
                    proteins: "Band 3 (anion exchanger), glycophorins, spectrin (cytoskeleton)"
                },
                {
                    cellType: "Neuron (nerve cell)",
                    features: "Specialized for electrical signaling",
                    proteins: "Voltage-gated Na⁺ and K⁺ channels, Na⁺/K⁺ pump (high density)",
                    specialization: "Rapid changes in membrane potential"
                },
                {
                    cellType: "Intestinal epithelial cell",
                    features: "Polarized - apical surface different from basolateral",
                    apical: "Microvilli, digestive enzymes, nutrient transporters",
                    basolateral: "Na⁺/K⁺ pump, basolateral transporters"
                },
                {
                    cellType: "Plant cell",
                    features: "Plasma membrane + cell wall",
                    differences: "No cholesterol (have sitosterol), plasmodesmata (cell-cell channels)"
                }
            ],
            
            applications: [
                "Drug delivery: Understanding permeability guides drug design (lipid-soluble drugs cross easily)",
                "Anesthesia: Lipid-soluble anesthetics dissolve in membranes, affecting function",
                "Membrane diseases: Cystic fibrosis (defective Cl⁻ channel), muscular dystrophy (membrane protein defects)",
                "Artificial membranes: Liposomes for drug delivery, dialysis membranes",
                "Understanding how toxins/pathogens affect membranes",
                "Cryopreservation: Preventing ice crystal damage to membranes",
                "Membrane protein as drug targets: ~50% of drugs target membrane proteins",
                "Understanding cholesterol and heart disease"
            ],
            
            clinicalRelevance: {
                cysticFibrosis: "Defective CFTR (Cl⁻ channel) → thick mucus",
                sickleCellAnemia: "Altered RBC membrane protein → abnormal cell shape",
                muscularDystrophy: "Dystrophin protein defect → membrane instability",
                hypercholesterolemia: "Defective LDL receptor → high blood cholesterol",
                aquaporinDefects: "Nephrogenic diabetes insipidus (kidney can't concentrate urine)"
            }
        };
        
        return content;
    }

    handlePassiveTransport(problem) {
        const content = {
            topic: "Passive Transport: Movement Down Concentration Gradients",
            category: 'membrane_transport',
            summary: "Passive transport is the spontaneous movement of substances across membranes down their concentration gradient (from high to low concentration) without requiring cellular energy expenditure. This includes simple diffusion, facilitated diffusion, and osmosis.",
            
            fundamentalPrinciples: {
                thermodynamics: {
                    spontaneous: "Driven by increase in entropy (disorder)",
                    energetically: "Thermodynamically favorable (ΔG < 0)",
                    equilibrium: "System moves toward equilibrium",
                    noATPRequired: "Uses kinetic energy of molecules, not cellular energy"
                },
                concentrationGradient: {
                    definition: "Difference in concentration between two regions",
                    direction: "Net movement from high to low concentration",
                    magnitude: "Steeper gradient → faster rate",
                    electrochemicalGradient: "For ions: concentration + electrical gradient combined",
                    equilibrium: "Reached when concentrations equal (no net movement)",
                    dynamicEquilibrium: "Individual molecules still move, but no net change"
                },
                kineticEnergy: {
                    source: "Random thermal motion of molecules",
                    temperature: "Higher temp → more kinetic energy → faster diffusion",
                    brownianMotion: "Random walk of particles"
                }
            },
            
            types: {
                simpleDiffusion: {
                    definition: "Direct movement through lipid bilayer without assistance",
                    mechanism: {
                        dissolution: "Molecule dissolves in hydrophobic core",
                        crossing: "Moves through bilayer down gradient",
                        emergence: "Exits on other side"
                    },
                    molecules: {
                        smallNonpolar: ["Oxygen (O₂)", "Carbon dioxide (CO₂)", "Nitrogen (N₂)", "Benzene", "Steroid hormones"],
                        smallUnchargedPolar: ["Water (H₂O) - slow", "Ethanol", "Urea", "Glycerol"],
                        lipidSoluble: "Hormones, vitamins A/D/E/K, drugs"
                    },
                    characteristics: [
                        "No specificity (any suitable molecule)",
                        "No saturation (rate increases linearly with concentration)",
                        "No competition (different molecules don't compete)",
                        "Bidirectional (depends on gradient)",
                        "Rate depends on concentration gradient, not protein availability"
                    ],
                    rate: {
                        ficksFirstLaw: "J = -D × A × (ΔC/Δx)",
                        J: "Diffusion flux (amount per time)",
                        D: "Diffusion coefficient (depends on molecule)",
                        A: "Surface area",
                        ΔCΔx: "Concentration gradient",
                        factors: [
                            "Steeper gradient → faster",
                            "Larger area → faster",
                            "Smaller molecule → faster",
                            "Higher temperature → faster",
                            "Less polar → faster",
                            "Thinner membrane → faster"
                        ]
                    },
                    limitations: {
                        polar: "Polar molecules cross slowly or not at all",
                        charged: "Ions virtually cannot cross by simple diffusion",
                        large: "Large molecules too big to dissolve in bilayer"
                    },
                    examples: [
                        {
                            process: "Gas exchange in lungs",
                            molecules: "O₂ and CO₂",
                            gradient: "O₂ high in alveoli → blood; CO₂ high in blood → alveoli",
                            importance: "Essential for respiration"
                        },
                        {
                            process: "Gas exchange in tissues",
                            molecules: "O₂ and CO₂",
                            gradient: "O₂ high in blood → cells; CO₂ high in cells → blood",
                            importance: "Delivers O₂, removes CO₂"
                        },
                        {
                            process: "Steroid hormone action",
                            molecules: "Testosterone, estrogen, cortisol",
                            mechanism: "Cross membrane, bind intracellular receptors",
                            importance: "Gene regulation"
                        }
                    ]
                },
                
                facilitatedDiffusion: {
                    definition: "Diffusion through protein channels or carriers",
                    necessity: "Required for polar molecules and ions (cannot cross lipid bilayer)",
                    stillPassive: "Still down gradient, no ATP required",
                    mechanisms: {
                        channelProteins: {
                            structure: "Form hydrophilic pore through membrane",
                            function: "Allow specific molecules to flow through",
                            specificity: {
                                ionChannels: "Specific for Na⁺, K⁺, Ca²⁺, Cl⁻, etc.",
                                basis: "Size, charge of selectivity filter",
                                discrimination: "Can distinguish between similar ions (e.g., Na⁺ vs K⁺)"
                            },
                            gating: {
                                voltageGated: {
                                    trigger: "Membrane potential change",
                                    examples: "Na⁺ and K⁺ channels in neurons",
                                    function: "Action potentials"
                                },
                                ligandGated: {
                                    trigger: "Specific molecule binds",
                                    examples: "Acetylcholine receptor, GABA receptor",
                                    function: "Neurotransmission"
                                },
                                mechanicallyGated: {
                                    trigger: "Physical force (pressure, stretch)",
                                    examples: "Touch and hearing receptors",
                                    function: "Mechanosensation"
                                },
                                leakChannels: {
                                    state: "Always open",
                                    examples: "K⁺ leak channels",
                                    function: "Maintain resting membrane potential"
                                }
                            },
                            rate: "Very fast (~10⁶-10⁸ ions/second per channel)",
                            noConformationalChange: "Pore stays open, molecules flow through"
                        },
                        carrierProteins: {
                            structure: "Binding site for specific molecule",
                            function: "Bind molecule, change conformation, release on other side",
                            mechanism: [
                                "1. Molecule binds to carrier (recognition site)",
                                "2. Binding induces conformational change",
                                "3. Molecule released on other side",
                                "4. Carrier returns to original conformation"
                            ],
                            specificity: "Highly specific (lock-and-key or induced fit)",
                            examples: {
                                GLUT: {
                                    name: "Glucose transporters (GLUT1-14)",
                                    function: "Facilitate glucose uptake",
                                    locations: {
                                        GLUT1: "Brain, RBCs (high affinity, always present)",
                                        GLUT2: "Liver, pancreas (low affinity, glucose sensor)",
                                        GLUT3: "Neurons (high affinity)",
                                        GLUT4: "Muscle, fat (insulin-regulated)"
                                    },
                                    regulation: "GLUT4 inserted into membrane in response to insulin"
                                },
                                aminoAcidTransporters: "Various carriers for different amino acids"
                            },
                            rate: "Slower than channels (~10²-10⁴ molecules/second)",
                            saturation: "Shows saturation kinetics (like enzymes)",
                            VmaxAndKm: {
                                Vmax: "Maximum rate when all carriers occupied",
                                Km: "Concentration at half-maximal rate (affinity measure)"
                            }
                        }
                    },
                    characteristics: [
                        "Highly specific (each protein for specific molecule/ion)",
                        "Shows saturation (limited number of proteins)",
                        "Can be regulated (number or activity of proteins)",
                        "Competition (similar molecules compete for same carrier)",
                        "Much faster than simple diffusion for polar molecules",
                        "Bidirectional (direction depends on gradient)"
                    ],
                    channelVsCarrier: [
                        {feature: "Structure", channel: "Pore through membrane", carrier: "Binding site, conformational change"},
                        {feature: "Rate", channel: "Very fast (10⁶-10⁸/s)", carrier: "Slower (10²-10⁴/s)"},
                        {feature: "Saturation", channel: "Can saturate at very high concentrations", carrier: "Saturates easily"},
                        {feature: "Conformational change", channel: "No (or minimal)", carrier: "Yes (required)"},
                        {feature: "Selectivity", channel: "Moderate to high", carrier: "Very high"},
                        {feature: "Examples", channel: "Ion channels", carrier: "GLUT transporters"}
                    ],
                    examples: [
                        {
                            system: "Neurons",
                            molecules: "Na⁺, K⁺",
                            proteins: "Voltage-gated channels",
                            function: "Action potentials",
                            regulation: "Voltage-dependent opening/closing"
                        },
                        {
                            system: "Muscle cells",
                            molecule: "Glucose",
                            protein: "GLUT4",
                            function: "Glucose uptake for energy",
                            regulation: "Insulin increases GLUT4 insertion"
                        },
                        {
                            system: "Red blood cells",
                            molecule: "Cl⁻ and HCO₃⁻",
                            protein: "Anion exchanger (Band 3)",
                            function: "CO₂ transport in blood (chloride shift)"
                        }
                    ]
                },
                
                osmosis: {
                    definition: "Diffusion of water across selectively permeable membrane",
                    specialCase: "Osmosis is a type of diffusion specific to water",
                    direction: "Water moves from high water concentration (low solute) to low water concentration (high solute)",
                    alternativeView: "Water moves from high water potential to low water potential",
                    mechanism: {
                        throughBilayer: "Water can cross lipid bilayer (small, polar, uncharged)",
                        rate: "Slow through bilayer alone",
                        aquaporins: "Greatly increase water permeability"
                    },
                    
                    aquaporins: {
                        discovery: {
                            scientist: "Peter Agre",
                            year: "1992",
                            nobelPrize: "2003 Chemistry Nobel Prize"
                        },
                        structure: {
                            type: "Integral membrane protein",
                            tetramer: "Four subunits, each a water channel",
                            pore: "Narrow, hourglass-shaped",
                            size: "~3 Å at narrowest point (perfect for single-file water)"
                        },
                        selectivity: {
                            waterOnly: "Allows water but excludes everything else",
                            protonExclusion: "Blocks H₃O⁺ (hydronium ions) via electrostatic repulsion",
                            mechanism: "Specific interactions with water oxygen, forces linear orientation"
                        },
                        rate: "Billions (10⁹) water molecules per second per channel",
                        distribution: {
                            kidney: "AQP1, AQP2 - concentrate urine",
                            brain: "AQP4 - regulate brain water content",
                            RBCs: "AQP1 - rapid water equilibration",
                            plants: "Many aquaporins - water uptake and transport",
                            ubiquitous: "Found in all kingdoms of life"
                        },
                        regulation: {
                            AQP2: "Vasopressin (ADH) increases insertion in kidney collecting duct",
                            phosphorylation: "Affects trafficking and activity",
                            expression: "Can be up/down-regulated"
                        },
                        clinicalRelevance: {
                            nephrogenicDI: "Defective AQP2 → cannot concentrate urine",
                            brainEdema: "AQP4 involved in cerebral swelling",
                            targets: "Potential drug targets for edema, glaucoma"
                        }
                    },
                    
                    osmoticPressure: {
                        definition: "Pressure required to prevent osmosis",
                        direction: "Pressure must be applied to side with higher solute concentration",
                        measurement: "Can measure in osmometer (like Pfeffer's)",
                        equation: "π = iMRT (van't Hoff equation)",
                        i: "Van't Hoff factor (# of particles per molecule: 1 for glucose, 2 for NaCl)",
                        M: "Molar concentration of solute",
                        R: "Gas constant (0.0821 L·atm/mol·K)",
                        T: "Absolute temperature (Kelvin)",
                        magnitude: "Can be substantial (e.g., seawater ~25 atm)",
                        applications: "Reverse osmosis (desalination), calculating tonicity"
                    },
                    
                    waterPotential: {
                        symbol: "Ψ (psi)",
                        definition: "Potential energy of water; predicts water movement direction",
                        units: "Pascals (Pa), megapascals (MPa), or bars",
                        principle: "Water moves from high Ψ to low Ψ",
                        pureWater: "Ψ = 0 (maximum water potential, reference point)",
                        equation: "Ψ = Ψs + Ψp",
                        components: {
                            solutePotential: {
                                symbol: "Ψs (osmotic potential)",
                                definition: "Effect of dissolved solutes on water potential",
                                sign: "Always negative (solutes lower water potential)",
                                pureWater: "Ψs = 0",
                                moreSolute: "More negative Ψs",
                                equation: "Ψs = -iCRT (similar to osmotic pressure)"
                            },
                            pressurePotential: {
                                symbol: "Ψp (turgor pressure in plants)",
                                definition: "Physical pressure on water",
                                sign: "Positive (pressure increases water potential) or negative (tension)",
                                plants: "Turgor pressure from cell wall",
                                atmosphericPressure: "Ψp = 0"
                            }
                        },
                        calculation: {
                            example: "Cell: Ψs = -0.7 MPa, Ψp = +0.3 MPa → Ψcell = -0.4 MPa",
                            surroundings: "Pure water: Ψ = 0",
                            prediction: "Water enters cell (moves from 0 to -0.4)"
                        },
                        plantCells: "Critical for understanding water movement in plants"
                    },
                    
                    examples: [
                        {
                            system: "Kidney",
                            process: "Water reabsorption",
                            aquaporin: "AQP2 (ADH-regulated)",
                            importance: "Concentrate urine, conserve water"
                        },
                        {
                            system: "Red blood cells",
                            process: "Rapid water equilibration",
                            aquaporin: "AQP1",
                            importance: "Cells change shape passing through capillaries"
                        },
                        {
                            system: "Plant roots",
                            process: "Water uptake from soil",
                            aquaporins: "Multiple types",
                            importance: "Essential for plant survival"
                        }
                    ]
                }
            },
            
            factorsAffectingRate: {
                concentrationGradient: {
                    effect: "Steeper gradient → faster diffusion",
                    magnitude: "Rate proportional to ΔC",
                    example: "2x concentration difference → 2x faster diffusion"
                },
                temperature: {
                    effect: "Higher temperature → faster diffusion",
                    mechanism: "More kinetic energy → faster molecular motion",
                    Q10: "Rate approximately doubles per 10°C increase",
                    example: "Organisms in cold environments have more unsaturated fatty acids (maintain fluidity)"
                },
                molecularSize: {
                    effect: "Smaller molecules diffuse faster",
                    relationship: "Rate ∝ 1/√(molecular weight)",
                    example: "O₂ (MW 32) diffuses faster than CO₂ (MW 44)"
                },
                molecularPolarity: {
                    effect: "Nonpolar >> polar for crossing lipid bilayer",
                    mechanism: "Polar molecules interact poorly with hydrophobic core",
                    example: "O₂ crosses easily, glucose requires transporter"
                },
                membranePermeability: {
                    factors: "Lipid composition, protein channels/carriers",
                    modulation: "Cells can regulate by changing protein expression",
                    example: "Insulin increases glucose permeability by inserting GLUT4"
                },
                membraneSurfaceArea: {
                    effect: "Larger area → more diffusion",
                    adaptations: "Microvilli in intestine increase area 20-40x",
                    example: "Lungs have huge surface area (~70 m²) for gas exchange"
                },
                membraneThickness: {
                    effect: "Thinner membrane → faster diffusion",
                    mechanism: "Shorter distance to travel",
                    example: "Alveolar-capillary barrier very thin (~0.5 μm)"
                },
                numberOfChannelsCarriers: {
                    facilitatedOnly: "Applies to facilitated diffusion",
                    regulation: "Cells adjust protein number",
                    example: "Exercise training increases muscle GLUT4"
                }
            },
            
            comparison: {
                simpleDiffusionVsFacilitatedDiffusion: [
                    {feature: "Pathway", simple: "Through lipid bilayer", facilitated: "Through protein channels/carriers"},
                    {feature: "Molecules", simple: "Small, nonpolar or small uncharged polar", facilitated: "Polar, ions, large molecules"},
                    {feature: "Proteins required", simple: "No", facilitated: "Yes"},
                    {feature: "Specificity", simple: "Non-specific", facilitated: "Highly specific"},
                    {feature: "Saturation", simple: "No", facilitated: "Yes (limited proteins)"},
                    {feature: "Competition", simple: "No", facilitated: "Yes (for carrier sites)"},
                    {feature: "Rate", simple: "Depends on lipid solubility", facilitated: "Depends on protein availability"},
                    {feature: "Regulation", simple: "Limited (change membrane composition)", facilitated: "Can be regulated (protein number/activity)"},
                    {feature: "Energy", simple: "None (ATP-independent)", facilitated: "None (ATP-independent)"},
                    {feature: "Examples", simple: "O₂, CO₂, steroid hormones", facilitated: "Glucose, amino acids, ions"}
                ],
                passiveVsActive: [
                    {feature: "Energy", passive: "No ATP required", active: "ATP required"},
                    {feature: "Direction", passive: "Down gradient (high → low)", active: "Against gradient (low → high)"},
                    {feature: "Equilibrium", passive: "Reaches equilibrium", active: "Maintains disequilibrium"},
                    {feature: "Proteins", passive: "Optional (channels/carriers) or none", active: "Required (pumps)"},
                    {feature: "Examples", passive: "Diffusion, osmosis, facilitated diffusion", active: "Na⁺/K⁺ pump, Ca²⁺ pump"}
                ]
            },
            
            examples: [
                {
                    process: "Respiratory gas exchange",
                    type: "Simple diffusion",
                    molecules: "O₂ and CO₂",
                    location: "Alveoli ↔ blood",
                    gradient: "O₂ high in alveoli → blood; CO₂ high in blood → alveoli",
                    importance: "Essential for cellular respiration",
                    adaptations: "Large surface area, thin barrier, high blood flow"
                },
                {
                    process: "Glucose uptake in muscle",
                    type: "Facilitated diffusion",
                    molecule: "Glucose",
                    protein: "GLUT4 transporter",
                    regulation: "Insulin increases GLUT4 on membrane",
                    importance: "Provides fuel for muscle contraction",
                    disease: "Diabetes - defective insulin signaling or GLUT4 function"
                },
                {
                    process: "Water reabsorption in kidney",
                    type: "Osmosis (facilitated by aquaporins)",
                    molecule: "Water",
                    protein: "Aquaporin-2 (AQP2)",
                    regulation: "ADH (vasopressin) increases AQP2 insertion",
                    importance: "Concentrate urine, prevent dehydration",
                    disease: "Nephrogenic diabetes insipidus - defective AQP2"
                },
                {
                    process: "Neurotransmission",
                    type: "Facilitated diffusion (ions)",
                    molecules: "Na⁺, K⁺",
                    proteins: "Voltage-gated channels",
                    mechanism: "Channels open, ions flow down gradient",
                    importance: "Action potential propagation",
                    drugs: "Local anesthetics block Na⁺ channels"
                }
            ],
            
            applications: [
                "Dialysis: Removing waste from blood (passive diffusion through semipermeable membrane)",
                "Oxygen therapy: Increasing O₂ gradient drives more diffusion into blood",
                "Drug delivery: Lipid-soluble drugs absorbed better (can use simple diffusion)",
                "Food preservation: High salt/sugar creates osmotic stress on microbes",
                "Understanding altitude sickness: Reduced O₂ gradient at high altitude",
                "Intravenous fluids: Must be isotonic to avoid damaging cells",
                "Organ preservation: Prevent osmotic damage during transplantation",
                "Understanding edema: Fluid accumulation due to osmotic imbalances"
            ],
            
            clinicalRelevance: {
                cysticFibrosis: "Defective Cl⁻ channel (CFTR) affects water transport",
                diabetes: "Glucose cannot enter cells without insulin-stimulated GLUT4",
                hemoglobinopathies: "Affect O₂ diffusion and binding in RBCs",
                pneumonia: "Fluid in alveoli increases diffusion distance, impairs gas exchange",
                highAltitude: "Reduced O₂ gradient causes hypoxia",
                dehydration: "Reduced water potential affects all osmotic processes",
                nephrogenicDI: "Defective aquaporin-2 → excessive urination"
            }
        };
        
        return content;
    }


handleActiveTransport(problem) {
        const content = {
            topic: "Active Transport: Energy-Driven Movement Against Gradients",
            category: 'membrane_transport',
            summary: "Active transport uses cellular energy (ATP) to move substances against their concentration gradient (from low to high concentration). It is essential for maintaining ion gradients, concentrating nutrients, removing waste, and powering secondary transport systems.",
            
            fundamentalPrinciples: {
                thermodynamics: {
                    nonspontaneous: "Moving against gradient is thermodynamically unfavorable (ΔG > 0)",
                    energyRequired: "Requires energy input to overcome unfavorable gradient",
                    coupling: "ATP hydrolysis coupled to transport (makes overall ΔG < 0)",
                    maintenance: "Maintains concentration differences (disequilibrium)"
                },
                ATPHydrolysis: {
                    reaction: "ATP + H₂O → ADP + Pᵢ + energy",
                    energyReleased: "~30.5 kJ/mol (7.3 kcal/mol) under standard conditions",
                    cellularConditions: "~50-65 kJ/mol (actual cellular conditions)",
                    mechanism: "Energy released changes protein conformation",
                    reversible: "Can be reversed by ATP synthase (in mitochondria/chloroplasts)"
                },
                directionality: {
                    uphill: "Against concentration gradient (low → high)",
                    accumulation: "Can concentrate substances 100-1000x or more",
                    vectorial: "Directional - always moves specific direction regardless of gradient",
                    asymmetry: "Creates and maintains membrane asymmetry"
                }
            },
            
            types: {
                primaryActiveTransport: {
                    definition: "Direct use of ATP to transport molecules",
                    mechanism: "ATP binds to pump protein, hydrolyzed, phosphate transferred to protein",
                    conformationalChange: "Phosphorylation causes protein shape change",
                    transport: "Shape change moves molecules across membrane",
                    dephosphorylation: "Protein returns to original conformation",
                    
                    pumps: {
                        sodiumPotassiumPump: {
                            name: "Na⁺/K⁺-ATPase",
                            discovery: {
                                scientist: "Jens Christian Skou",
                                year: "1957",
                                nobelPrize: "1997 Chemistry Nobel Prize",
                                context: "Studying local anesthetic mechanisms"
                            },
                            structure: {
                                subunits: "α (catalytic, 110 kDa) and β (glycoprotein, 55 kDa)",
                                domains: "10 transmembrane helices in α subunit",
                                bindingSites: {
                                    ATP: "On cytoplasmic side",
                                    Na: "3 sites facing cytoplasm (when dephosphorylated)",
                                    K: "2 sites facing extracellular (when phosphorylated)"
                                }
                            },
                            stoichiometry: {
                                ratio: "3 Na⁺ out : 2 K⁺ in : 1 ATP consumed",
                                electrogenic: "Yes - net movement of 1 positive charge outward",
                                contribution: "~-10 to -15 mV of resting potential"
                            },
                            mechanism: {
                                step1: "3 Na⁺ bind to sites on cytoplasmic side",
                                step2: "ATP binds and is hydrolyzed; phosphate attaches to pump (phosphorylation)",
                                step3: "Phosphorylation causes conformational change",
                                step4: "Pump opens to extracellular side, releases 3 Na⁺",
                                step5: "2 K⁺ bind to sites on extracellular side",
                                step6: "Binding triggers dephosphorylation (phosphate released)",
                                step7: "Dephosphorylation returns pump to original conformation",
                                step8: "Pump opens to cytoplasmic side, releases 2 K⁺",
                                step9: "Cycle repeats"
                            },
                            functions: [
                                "Maintains resting membrane potential (-70 mV in neurons)",
                                "Drives secondary active transport (Na⁺ gradient powers cotransporters)",
                                "Controls cell volume (prevents osmotic swelling)",
                                "Essential for nerve impulse transmission",
                                "Generates heat (especially in brown adipose tissue)"
                            ],
                            energyCost: {
                                typical: "~30% of cell's ATP expenditure",
                                neurons: "Up to 70% of neuronal ATP",
                                kidney: "~50% in kidney cells",
                                total: "Humans use ~40 kg ATP/day, much for Na⁺/K⁺ pump"
                            },
                            gradients: {
                                intracellular: "K⁺ high (~140 mM), Na⁺ low (~12 mM)",
                                extracellular: "Na⁺ high (~145 mM), K⁺ low (~4 mM)",
                                maintenance: "Pump constantly works against leak channels"
                            },
                            inhibitors: {
                                ouabain: {
                                    source: "Cardiac glycoside from plants",
                                    mechanism: "Binds to extracellular K⁺ site, blocks pump",
                                    use: "Research tool, some cardiac drugs",
                                    effect: "Increases intracellular Na⁺ and Ca²⁺ (via Na⁺/Ca²⁺ exchanger)"
                                },
                                digoxin: {
                                    source: "From foxglove (Digitalis)",
                                    use: "Heart failure treatment (increases contractility)",
                                    mechanism: "Similar to ouabain",
                                    toxicity: "Narrow therapeutic window"
                                },
                                vanadate: "Mimics phosphate, blocks pump"
                            },
                            regulation: {
                                hormonal: "Insulin, thyroid hormone, aldosterone increase activity",
                                phosphorylation: "PKA, PKC can modulate activity",
                                expressionLevel: "Chronic regulation via gene expression",
                                feedbackInhibition: "High intracellular Na⁺ activates pump"
                            },
                            clinicalRelevance: {
                                heartFailure: "Digoxin increases pump inhibition → increased contractility",
                                hyperkalemia: "Excess K⁺ affects pump function",
                                neurologicalDisorders: "Pump mutations cause neurological diseases",
                                hypertension: "Altered pump activity in some forms"
                            }
                        },
                        
                        calciumPump: {
                            name: "Ca²⁺-ATPase (SERCA, PMCA)",
                            types: {
                                SERCA: {
                                    name: "Sarco/Endoplasmic Reticulum Ca²⁺-ATPase",
                                    location: "ER/SR membrane",
                                    function: "Pumps Ca²⁺ from cytoplasm into ER/SR lumen",
                                    importance: "Muscle relaxation, Ca²⁺ signaling termination"
                                },
                                PMCA: {
                                    name: "Plasma Membrane Ca²⁺-ATPase",
                                    location: "Plasma membrane",
                                    function: "Pumps Ca²⁺ out of cell",
                                    importance: "Maintains low cytoplasmic Ca²⁺"
                                }
                            },
                            stoichiometry: "1 ATP : 1-2 Ca²⁺ (varies by type)",
                            gradients: {
                                cytoplasm: "~100 nM (10⁻⁷ M) - very low",
                                extracellular: "~1-2 mM (10⁻³ M) - 10,000x higher",
                                ERlumen: "~0.5-1 mM - high"
                            },
                            importance: {
                                signaling: "Ca²⁺ is universal second messenger",
                                muscleContraction: "SR releases Ca²⁺ → contraction; pump removes Ca²⁺ → relaxation",
                                toxicity: "High cytoplasmic Ca²⁺ toxic to cells",
                                apoptosis: "Ca²⁺ overload triggers cell death"
                            },
                            regulation: {
                                calmodulin: "Ca²⁺-calmodulin activates PMCA",
                                phospholamban: "Inhibits SERCA; phosphorylation releases inhibition",
                                hormones: "β-adrenergic stimulation increases SERCA activity (via phospholamban)"
                            }
                        },
                        
                        protonPump: {
                            name: "H⁺-ATPase or H⁺/K⁺-ATPase",
                            types: {
                                vacuolar: {
                                    name: "V-type H⁺-ATPase",
                                    locations: "Lysosomes, endosomes, vacuoles, some plasma membranes",
                                    function: "Acidifies organelle interior",
                                    mechanism: "Rotary motor (similar to ATP synthase but reversed)",
                                    importance: "Lysosomal enzyme activity, protein degradation"
                                },
                                gastric: {
                                    name: "H⁺/K⁺-ATPase",
                                    location: "Stomach parietal cells",
                                    function: "Secretes H⁺ into stomach lumen",
                                    stoichiometry: "1 H⁺ out : 1 K⁺ in : 1 ATP",
                                    result: "Stomach pH ~1-2 (very acidic)",
                                    clinicalUse: "Target of proton pump inhibitors (PPIs)"
                                },
                                plant: {
                                    name: "P-type H⁺-ATPase",
                                    location: "Plant plasma membrane",
                                    function: "Creates H⁺ gradient for secondary transport",
                                    importance: "Drives nutrient uptake, cell expansion"
                                }
                            },
                            inhibitors: {
                                omeprazole: "Proton pump inhibitor (PPI) - blocks gastric H⁺/K⁺-ATPase",
                                lansoprazole: "Another PPI",
                                use: "Treat ulcers, GERD, Zollinger-Ellison syndrome",
                                mechanism: "Irreversible inhibition via covalent binding"
                            },
                            functions: [
                                "Create pH gradients",
                                "Enable acid secretion (stomach)",
                                "Acidify organelles (lysosomes pH ~4.5)",
                                "Drive secondary transport (especially in plants)"
                            ]
                        },
                        
                        ABCTransporters: {
                            name: "ATP-Binding Cassette transporters",
                            structure: "Two transmembrane domains + two ATP-binding domains",
                            diversity: "48 ABC transporters in humans (largest transporter family)",
                            mechanism: "ATP binding/hydrolysis drives conformational changes",
                            types: {
                                CFTR: {
                                    name: "Cystic Fibrosis Transmembrane Conductance Regulator",
                                    function: "Cl⁻ channel (unusual for ABC transporter)",
                                    regulation: "Opened by PKA phosphorylation + ATP binding",
                                    disease: "Mutations cause cystic fibrosis"
                                },
                                MDR1: {
                                    name: "Multidrug Resistance protein 1 (P-glycoprotein)",
                                    function: "Pumps hydrophobic drugs out of cells",
                                    location: "Liver, kidney, intestine, blood-brain barrier",
                                    importance: "Drug resistance in cancer cells",
                                    substrates: "Broad specificity - many drugs"
                                },
                                TAP: {
                                    name: "Transporter associated with Antigen Processing",
                                    function: "Pumps peptides from cytoplasm to ER",
                                    importance: "MHC class I antigen presentation"
                                }
                            },
                            clinicalRelevance: {
                                cysticFibrosis: "Defective CFTR → thick mucus",
                                drugResistance: "MDR1 overexpression in cancer cells",
                                pharmacology: "MDR1 affects drug absorption and distribution"
                            }
                        }
                    },
                    
                    energetics: {
                        ATPCost: "1 ATP per cycle (varies by pump and stoichiometry)",
                        efficiency: "Not 100% efficient - some energy lost as heat",
                        totalCellular: "Active transport accounts for large fraction of cellular ATP use",
                        comparison: "Much more energy-intensive than passive transport (which is free)"
                    }
                },
                
                secondaryActiveTransport: {
                    definition: "Uses electrochemical gradient (created by primary transport) to drive transport of another substance",
                    energySource: "Indirect - uses ion gradient (usually Na⁺ gradient)",
                    ionGradient: "Created by primary active transport (Na⁺/K⁺ pump)",
                    advantage: "One primary transport (ATP) can drive multiple secondary transports",
                    efficiency: "More efficient than using ATP for each molecule",
                    
                    types: {
                        symport: {
                            definition: "Both substances move in SAME direction",
                            alternateName: "Cotransport",
                            drivingIon: "Usually Na⁺ (sometimes H⁺)",
                            
                            examples: {
                                sodiumGlucoseCotransporter: {
                                    name: "SGLT (Sodium-Glucose Linked Transporter)",
                                    types: {
                                        SGLT1: {
                                            location: "Small intestine, kidney (proximal tubule S3 segment)",
                                            stoichiometry: "2 Na⁺ : 1 glucose",
                                            affinity: "High affinity (Km ~0.5 mM)",
                                            capacity: "Low capacity"
                                        },
                                        SGLT2: {
                                            location: "Kidney proximal tubule (S1/S2 segments)",
                                            stoichiometry: "1 Na⁺ : 1 glucose",
                                            affinity: "Lower affinity (Km ~5 mM)",
                                            capacity: "High capacity (reabsorbs ~90% of filtered glucose)"
                                        }
                                    },
                                    mechanism: [
                                        "1. Na⁺ binds to transporter (extracellular side)",
                                        "2. Na⁺ binding increases affinity for glucose",
                                        "3. Glucose binds",
                                        "4. Conformational change exposes binding sites to cytoplasm",
                                        "5. Na⁺ dissociates (moves down gradient into cell)",
                                        "6. Glucose dissociates",
                                        "7. Transporter returns to original conformation"
                                    ],
                                    importance: {
                                        intestine: "Absorbs glucose from food",
                                        kidney: "Reabsorbs 99% of filtered glucose (prevents glucose loss in urine)",
                                        energyCost: "Uses Na⁺ gradient (created by Na⁺/K⁺ pump on basolateral side)"
                                    },
                                    clinicalRelevance: {
                                        diabetes: "When blood glucose >~180 mg/dL, exceeds reabsorption capacity → glucose in urine (glycosuria)",
                                        SGLT2inhibitors: "New diabetes drugs (e.g., canagliflozin, dapagliflozin) - block SGLT2, cause glucose excretion",
                                        malabsorption: "SGLT1 deficiency causes glucose-galactose malabsorption"
                                    }
                                },
                                
                                sodiumAminoAcidCotransporters: {
                                    diversity: "Multiple transporters for different amino acid groups",
                                    location: "Intestine, kidney",
                                    stoichiometry: "1-3 Na⁺ : 1 amino acid (varies)",
                                    groups: {
                                        neutral: "Ala, Ser, Thr, etc.",
                                        acidic: "Glu, Asp",
                                        basic: "Lys, Arg",
                                        imino: "Pro, hydroxyproline"
                                    },
                                    importance: "Absorb amino acids from food, reabsorb from kidney filtrate",
                                    disease: "Hartnup disease (defective neutral amino acid transporter)"
                                },
                                
                                sodiumPhosphateCotransporter: {
                                    location: "Kidney, intestine, bone",
                                    function: "Reabsorb phosphate",
                                    regulation: "Parathyroid hormone (PTH) decreases activity",
                                    importance: "Maintain phosphate balance"
                                },
                                
                                sodiumIodideCotransporter: {
                                    location: "Thyroid gland",
                                    function: "Concentrate iodide for thyroid hormone synthesis",
                                    concentration: "Can concentrate iodide 20-40x",
                                    clinicalUse: "Radioiodine treatment for thyroid cancer"
                                }
                            }
                        },
                        
                        antiport: {
                            definition: "Two substances move in OPPOSITE directions",
                            alternateName: "Exchange, countertransport",
                            mechanism: "One ion down gradient drives other against gradient",
                            
                            examples: {
                                sodiumCalciumExchanger: {
                                    name: "NCX (Na⁺/Ca²⁺ exchanger)",
                                    location: "Cardiac muscle, neurons, most excitable cells",
                                    stoichiometry: "3 Na⁺ in : 1 Ca²⁺ out",
                                    electrogenic: "Yes (net 1+ charge inward)",
                                    function: {
                                        primary: "Extrude Ca²⁺ from cytoplasm",
                                        cardiac: "Essential for cardiac muscle relaxation",
                                        neurons: "Restores Ca²⁺ levels after action potential"
                                    },
                                    mechanism: [
                                        "Na⁺ gradient drives Ca²⁺ extrusion",
                                        "Can reverse if membrane depolarized enough (Ca²⁺ entry mode)"
                                    ],
                                    importance: {
                                        heartBeat: "Removes Ca²⁺ after contraction",
                                        cooperation: "Works with Ca²⁺-ATPase pump",
                                        capacity: "Lower affinity but higher capacity than Ca²⁺ pump"
                                    },
                                    clinicalRelevance: {
                                        heartFailure: "Altered NCX activity",
                                        digitalEffect: "Digoxin increases Ca²⁺ by inhibiting Na⁺/K⁺ pump → increased Na⁺ → reduced NCX activity → more Ca²⁺ → stronger contraction"
                                    }
                                },
                                
                                sodiumHydrogenExchanger: {
                                    name: "NHE (Na⁺/H⁺ exchanger)",
                                    location: "Most cell membranes",
                                    stoichiometry: "1 Na⁺ in : 1 H⁺ out",
                                    function: {
                                        pHRegulation: "Extrudes H⁺, raises intracellular pH",
                                        volumeRegulation: "Na⁺ entry increases osmolarity → water follows",
                                        recovery: "Restores pH after acid load"
                                    },
                                    regulation: {
                                        pHSensitive: "Activated by intracellular acidification",
                                        growthFactors: "Activated by growth factors, oncogenes",
                                        hormones: "Various hormones regulate activity"
                                    },
                                    isoforms: "NHE1-9 (different tissues, functions)",
                                    importance: {
                                        housekeeping: "NHE1 ubiquitous, essential",
                                        kidney: "NHE3 in proximal tubule reabsorbs Na⁺, secretes H⁺",
                                        intestine: "NHE3 absorbs Na⁺"
                                    },
                                    clinicalRelevance: {
                                        ischemiaReperfusion: "NHE contributes to cell damage",
                                        hypertension: "Altered NHE activity in some forms",
                                        cancer: "Overactive NHE in cancer cells (pH regulation)"
                                    }
                                },
                                
                                chlorideBicarbonateExchanger: {
                                    name: "AE1 (Anion Exchanger 1, Band 3)",
                                    location: "Red blood cells (also kidney)",
                                    stoichiometry: "1 Cl⁻ : 1 HCO₃⁻ (electroneutral)",
                                    function: "CO₂ transport in blood",
                                    mechanism: {
                                        tissues: "CO₂ enters RBC → converted to HCO₃⁻ → HCO₃⁻ exported for Cl⁻ (chloride shift)",
                                        lungs: "Reversed - Cl⁻ exported, HCO₃⁻ enters, converted to CO₂, exhaled"
                                    },
                                    importance: "Allows blood to carry much more CO₂ than dissolved alone",
                                    rate: "Extremely fast (~50,000/second) - one of fastest known transporters",
                                    clinicalRelevance: {
                                        mutations: "Cause hereditary spherocytosis or ovalocytosis",
                                        malariaResistance: "Some mutations confer resistance to malaria"
                                    }
                                }
                            }
                        }
                    },
                    
                    comparison: [
                        {feature: "Direction", symport: "Same direction (cotransport)", antiport: "Opposite directions (exchange)"},
                        {feature: "Example", symport: "Na⁺-glucose (both in)", antiport: "Na⁺-Ca²⁺ (Na⁺ in, Ca²⁺ out)"},
                        {feature: "Charge movement", symport: "Variable (can be electrogenic)", antiport: "Often electroneutral (but NCX is electrogenic)"}
                    ],
                    
                    dependence: {
                        primaryTransport: "Requires Na⁺/K⁺ pump to maintain Na⁺ gradient",
                        ATPIndirect: "Uses ATP indirectly (to create ion gradient)",
                        coupling: "One primary transport can drive many secondary transports",
                        inhibition: "Blocking Na⁺/K⁺ pump stops secondary transport too"
                    }
                }
            },
            
            electrochemicalGradient: {
                definition: "Combined effect of concentration gradient and electrical gradient",
                components: {
                    chemicalGradient: {
                        definition: "Concentration difference across membrane",
                        direction: "Drives movement from high to low concentration",
                        magnitude: "ΔG = RT ln([C₂]/[C₁])"
                    },
                    electricalGradient: {
                        definition: "Voltage difference across membrane",
                        direction: "Drives positive ions toward negative side",
                        magnitude: "ΔG = zFV (z=charge, F=Faraday constant, V=voltage)"
                    }
                },
                totalDrivingForce: "ΔG(total) = RT ln([C₂]/[C₁]) + zFV",
                nernstEquation: {
                    formula: "E(ion) = (RT/zF) ln([ion]out/[ion]in)",
                    use: "Calculates equilibrium potential for an ion",
                    interpretation: "Voltage at which electrical = chemical force (no net movement)"
                },
                examples: {
                    sodium: {
                        concentration: "High outside (~145 mM), low inside (~12 mM)",
                        voltage: "Inside negative (-70 mV)",
                        result: "Both gradients drive Na⁺ INWARD",
                        equilibrium: "~+60 mV (Nernst potential)",
                        actual: "-70 mV, so far from equilibrium → strong driving force inward"
                    },
                    potassium: {
                        concentration: "High inside (~140 mM), low outside (~4 mM)",
                        voltage: "Inside negative (-70 mV)",
                        result: "Chemical drives OUT, electrical drives IN",
                        equilibrium: "~-90 mV (Nernst potential)",
                        actual: "-70 mV → net driving force still slightly outward"
                    },
                    calcium: {
                        concentration: "Very high outside (~2 mM), very low inside (~100 nM = 0.0001 mM)",
                        voltage: "Inside negative",
                        result: "HUGE driving force inward (10,000x concentration + voltage)",
                        equilibrium: "~+120 mV",
                        importance: "Why Ca²⁺ signaling so powerful - opens channel, Ca²⁺ floods in"
                    }
                },
                importance: "Determines actual direction and magnitude of ion movement"
            },
            
            energetics: {
                ATPConsumption: {
                    typical: "~30% of resting cell ATP (up to 70% in neurons)",
                    brainExample: "Human brain ~2% body weight but 20% oxygen consumption (much for Na⁺/K⁺ pump)",
                    totalBody: "Humans produce/consume ~40-70 kg ATP per day"
                },
                efficiency: {
                    notPerfect: "Some energy dissipated as heat",
                    thermogenesis: "Heat generation, especially in brown fat (uncoupled pumping)"
                },
                regulation: {
                    supply: "If ATP depleted, active transport stops",
                    metabolicPoisons: "Cyanide, azide block ATP production → stop active transport",
                    oxygen: "Oxygen required for ATP production (via oxidative phosphorylation)"
                }
            },
            
            regulation: {
                shortTerm: {
                    phosphorylation: "Protein kinases modify pump activity",
                    allosteric: "Binding of regulatory molecules",
                    feedback: "Product or substrate levels affect activity",
                    hormones: "Insulin, catecholamines, etc. rapidly modulate activity"
                },
                longTerm: {
                    geneExpression: "Increase/decrease pump protein synthesis",
                    proteinDegradation: "Regulate pump turnover",
                    trafficking: "Insert/remove pumps from membrane",
                    adaptation: "Chronic changes in response to needs (e.g., altitude, training)"
                }
            },
            
            comparison: {
                primaryVsSecondary: [
                    {feature: "Energy source", primary: "Direct ATP hydrolysis", secondary: "Ion gradient (indirect ATP)"},
                    {feature: "Protein type", primary: "ATPase (pump)", secondary: "Cotransporter or exchanger"},
                    {feature: "ATP binding", primary: "Yes", secondary: "No"},
                    {feature: "Example", primary: "Na⁺/K⁺-ATPase", secondary: "Na⁺-glucose symporter"},
                    {feature: "Dependence", primary: "Independent", secondary: "Depends on primary transport"}
                ],
                activeVsPassive: [
                    {feature: "Energy (ATP)", active: "Required", passive: "Not required"},
                    {feature: "Direction", active: "Against gradient (low → high)", passive: "Down gradient (high → low)"},
                    {feature: "Protein", active: "Pump (ATPase) required", passive: "Channel/carrier optional"},
                    {feature: "Equilibrium", active: "Maintains disequilibrium", passive: "Reaches equilibrium"},
                    {feature: "Specificity", active: "Very high", passive: "Varies"},
                    {feature: "Saturation", active: "Shows saturation", passive: "Varies (facilitated shows saturation)"},
                    {feature: "Regulation", active: "Highly regulated", passive: "Less regulated"},
                    {feature: "Example", active: "Na⁺/K⁺ pump", passive: "O₂ diffusion"}
                ]
            },
            
            examples: [
                {
                    system: "Neurons",
                    transport: "Na⁺/K⁺ pump",
                    function: "Maintains resting membrane potential (-70 mV)",
                    importance: "Essential for action potentials, nerve signaling",
                    energyCost: "Up to 70% of neuronal ATP",
                    consequence: "Stroke/ischemia → ATP depleted → pump fails → depolarization → cell death"
                },
                {
                    system: "Kidney proximal tubule",
                    primaryTransport: "Na⁺/K⁺ pump (basolateral membrane)",
                    secondaryTransport: "Na⁺-glucose symporter (apical membrane)",
                    function: "Reabsorbs 99% of filtered glucose",
                    mechanism: "Pump creates Na⁺ gradient → drives glucose uptake → glucose exits via GLUT2 (passive)",
                    clinicalRelevance: "Diabetes → exceeds capacity → glucose in urine"
                },
                {
                    system: "Stomach parietal cells",
                    transport: "H⁺/K⁺-ATPase",
                    function: "Secretes HCl into stomach",
                    result: "Stomach pH ~1-2 (1 million times more acidic than blood)",
                    importance: "Protein digestion, kills bacteria",
                    drugs: "Proton pump inhibitors (omeprazole) treat ulcers"
                },
                {
                    system: "Cardiac muscle",
                    primaryTransport: "Ca²⁺-ATPase (SERCA), Na⁺/K⁺ pump",
                    secondaryTransport: "Na⁺-Ca²⁺ exchanger (NCX)",
                    function: "Remove Ca²⁺ after contraction → relaxation",
                    regulation: "β-adrenergic stimulation increases SERCA (faster relaxation)",
                    disease: "Heart failure → impaired Ca²⁺ removal → incomplete relaxation"
                }
            ],
            
            applications: [
                "Understanding nerve function and neurological diseases",
                "Drug development (cardiac glycosides, proton pump inhibitors, SGLT2 inhibitors)",
                "Understanding kidney function and renal disease",
                "Explaining nutrient absorption in intestine",
                "Cardiac physiology and heart failure treatment",
                "Understanding effects of metabolic poisons (cyanide, carbon monoxide)",
                "Cryopreservation (ATP depletion affects pumps)",
                "Understanding altitude adaptation (hypoxia affects ATP, pumps)"
            ],
            
            clinicalRelevance: {
                cysticFibrosis: "Defective CFTR (ABC transporter) → thick mucus",
                digitalToxicity: "Overdose of cardiac glycosides → pump inhibition → arrhythmias",
                hyperkalemia: "High K⁺ affects pump, membrane potential → cardiac arrest risk",
                ischemiaStroke: "Oxygen deprivation → ATP depletion → pump failure → cell swelling, death",
                diabetesMellitus: "Altered glucose transport (insulin resistance affects GLUT4, not active transport, but related)",
                renalTubularAcidosis: "Defective H⁺ pumps → cannot acidify urine",
                neurologicalDisorders: "Na⁺/K⁺ pump mutations cause familial hemiplegic migraine, dystonia"
            }
        };
        
        return content;
    }

    handleBulkTransport(problem) {
        const content = {
            topic: "Bulk Transport: Moving Large Molecules and Particles via Vesicles",
            category: 'membrane_transport',
            summary: "Bulk transport moves large quantities of materials, large molecules, or particles across the plasma membrane using membrane-bound vesicles. Endocytosis brings materials into cells, while exocytosis releases materials from cells. Both processes require ATP and involve vesicle formation or fusion.",
            
            fundamentalPrinciples: {
                necessity: {
                    largeMolecules: "Macromolecules (proteins, polysaccharides, nucleic acids) too large for channels/carriers",
                    particles: "Whole cells, bacteria, debris cannot cross membrane",
                    largeQuantities: "Bulk transport can move large volumes at once",
                    specificity: "Can be highly specific (receptor-mediated) or non-specific"
                },
                mechanism: {
                    vesicles: "Membrane-bound sacs transport materials",
                    membraneFusion: "Vesicle membrane fuses with plasma membrane or organelle membrane",
                    conservation: "Membrane area conserved (endocytosis removes area, exocytosis adds area)",
                    bidirectional: "Constant cycling between endocytosis and exocytosis"
                },
                energyRequirement: {
                    ATPNeeded: "For vesicle budding, transport, and fusion",
                    cytoskeleton: "Motor proteins (kinesin, dynein, myosin) use ATP to move vesicles",
                    GTPases: "Small GTPases (Rab proteins) regulate vesicle trafficking (GTP hydrolysis)",
                    expensive: "More energy-intensive than channel/carrier transport"
                }
            },
            
            types: {
                endocytosis: {
                    definition: "Process of taking materials INTO cell by forming vesicles from plasma membrane",
                    direction: "Extracellular → intracellular",
                    membraneChange: "Decreases plasma membrane surface area",
                    rate: "Constant in most cells (plasma membrane recycled every 30-60 min)",
                    
                    types: {
                        phagocytosis: {
                            name: "Phagocytosis ('cell eating')",
                            etymology: "Greek: phagein = to eat, kytos = cell",
                            particles: "Large particles (>0.5 μm): bacteria, dead cells, debris, foreign particles",
                            vesicleSize: ">250 nm (visible by light microscopy)",
                            vesicle Name: "Phagosome",
                            
                            mechanism: {
                                recognition: {
                                    step1: "Particle binds to receptors on cell surface",
                                    receptors: "Fc receptors (bind antibody-coated particles), complement receptors, scavenger receptors, lectins",
                                    opsonization: "Coating particles with antibodies or complement proteins enhances recognition",
                                    patternRecognition: "Toll-like receptors recognize pathogen-associated molecular patterns (PAMPs)"
                                },
                                engulfment: {
                                    step2: "Receptor binding triggers actin polymerization",
                                    step3: "Plasma membrane extends pseudopodia ('false feet') around particle",
                                    step4: "Pseudopodia zipper around particle",
                                    step5: "Tips of pseudopodia meet and fuse",
                                    step6: "Phagosome pinches off into cytoplasm"
                                },
                                maturation: {
                                    step7: "Early phagosome (pH ~6)",
                                    step8: "Phagosome fuses with early endosome",
                                    step9: "Maturation to late phagosome (pH ~5.5)",
                                    step10: "Fusion with lysosome → phagolysosome",
                                    step11: "Lysosomal enzymes digest contents (pH ~4.5-5)",
                                    step12: "Nutrients absorbed, waste retained",
                                    step13: "Residual body may be expelled (exocytosis) or persist"
                                },
                                timing: "Engulfment: minutes; digestion: minutes to hours"
                            },
                            
                            cells: {
                                specialized: "Only specialized cells (professional phagocytes)",
                                neutrophils: {
                                    type: "Granulocyte",
                                    abundance: "Most abundant leukocyte (50-70%)",
                                    lifespan: "Hours to few days",
                                    function: "First responders to infection, engulf bacteria",
                                    death: "Die after phagocytosis (form pus)"
                                },
                                macrophages: {
                                    type: "Monocyte-derived",
                                    lifespan: "Months to years",
                                    function: "Engulf bacteria, dead cells, debris; antigen presentation",
                                    locations: "Tissues throughout body (named by location: alveolar, Kupffer cells in liver, microglia in brain)",
                                    coordination: "Coordinate immune response via cytokines"
                                },
                                dendriticCells: {
                                    function: "Antigen presenting cells (APCs) - capture and present antigens to T cells",
                                    importance: "Bridge innate and adaptive immunity",
                                    location: "Tissues, lymph nodes"
                                },
                                other: {
                                    amoebas: "Use phagocytosis for feeding",
                                    osteoclasts: "Bone resorption"
                                }
                            },
                            
                            functions: [
                                "Defense: Destroy pathogens (bacteria, fungi, parasites)",
                                "Clean-up: Remove dead cells, debris (apoptotic cells)",
                                "Antigen presentation: Display pathogen fragments to adaptive immune system",
                                "Tissue remodeling: Clear debris during development/healing",
                                "Nutrition: In protists (amoebas)"
                            ],
                            
                            regulation: {
                                activation: "Cytokines (IFN-γ), bacterial products (LPS), complement",
                                inhibition: "Anti-inflammatory cytokines (IL-10, TGF-β)",
                                recognition: "Enhanced by opsonization (antibodies, complement)"
                            },
                            
                            diseases: {
                                chronicGranulomatouDisease: {
                                    defect: "Defective NADPH oxidase in phagocytes",
                                    consequence: "Cannot produce reactive oxygen species (respiratory burst)",
                                    result: "Cannot kill phagocytosed bacteria → chronic infections",
                                    symptoms: "Recurrent bacterial/fungal infections, granulomas"
                                },
                                chediak Higashi: "Defective lysosomal trafficking → impaired killing",
                                sepsis: "Overwhelming infection → excessive phagocyte activation → tissue damage"
                            },
                            
                            examples: [
                                "Neutrophil engulfing Staphylococcus aureus bacteria",
                                "Macrophage clearing apoptotic cells during development",
                                "Alveolar macrophages removing dust particles from lungs",
                                "Microglia phagocytosing cellular debris in brain"
                            ]
                        },
                        
                        pinocytosis: {
                            name: "Pinocytosis ('cell drinking')",
                            etymology: "Greek: pinein = to drink",
                            material: "Extracellular fluid with dissolved solutes",
                            vesicleSize: "<150 nm (small, numerous)",
                            vesicle Name: "Pinosome or endocytic vesicle",
                            specificity: "Non-specific (takes in whatever is in fluid)",
                            
                            mechanism: {
                                step1: "Small region of plasma membrane invaginates (folds inward)",
                                step2: "Invagination deepens to form pit",
                                step3: "Pit pinches off to form vesicle",
                                step4: "Vesicle moves into cytoplasm",
                                step5: "Usually fuses with early endosome",
                                step6: "Contents processed or sorted"
                            },
                            
                            rate: "Continuous, constitutive process in most cells",
                            amount: "Can internalize ~3% of plasma membrane per hour",
                            recycling: "Most membrane components recycled back to surface",
                            
                            cells: "All cells (ubiquitous)",
                            
                            functions: [
                                "Sample extracellular environment",
                                "Nutrient uptake (non-specific)",
                                "Turnover of plasma membrane",
                                "Receptor downregulation",
                                "Antigen capture (immature dendritic cells)"
                            ],
                            
                            types: {
                                macropinocytosis: {
                                    vesicleSize: "Large (0.5-5 μm) - overlaps with phagocytosis size",
                                    mechanism: "Large ruffles extend and fold back, capturing large volume of fluid",
                                    trigger: "Growth factors, bacterial products",
                                    cells: "Macrophages, dendritic cells, cancer cells",
                                    function: "Nutrient uptake, antigen sampling"
                                },
                                micropinocytosis: "Small vesicles, constitutive"
                            },
                            
                            example: "Capillary endothelial cells - pinocytosis transports nutrients across blood vessel wall"
                        },
                        
                        receptorMediatedEndocytosis: {
                            name: "Receptor-Mediated Endocytosis (RME)",
                            acronym: "RME",
                            specificity: "HIGHLY specific - only molecules that bind receptors are internalized",
                            efficiency: "Can concentrate ligands >1000-fold",
                            
                            mechanism: {
                                recognition: {
                                    step1: "Specific ligands (signaling molecules, nutrients) bind to specific receptors on membrane",
                                    step2: "Ligand-receptor complexes migrate and cluster in clathrin-coated pits",
                                    coatedPits: "Specialized regions of membrane with protein coat on cytoplasmic side"
                                },
                                invagination: {
                                    step3: "Clathrin coat assembles, causing membrane invagination",
                                    step4: "Dynamin GTPase assembles at neck of pit",
                                    step5: "Dynamin constricts and pinches off vesicle (using GTP hydrolysis)",
                                    step6: "Clathrin-coated vesicle released into cytoplasm"
                                },
                                uncoating: {
                                    step7: "Clathrin coat disassembles (uncoating)",
                                    step8: "Uncoated vesicle fuses with early endosome"
                                },
                                sorting: {
                                    step9: "In early endosome (pH ~6): receptors and ligands may dissociate",
                                    step10: "Receptors often recycled back to plasma membrane",
                                    step11: "Ligands proceed to late endosome (pH ~5.5)",
                                    step12: "Late endosome matures to lysosome or fuses with lysosome",
                                    step13: "Lysosomal enzymes degrade ligands"
                                },
                                timing: "Rapid - pit to vesicle in ~1 minute; entire cycle 5-10 minutes"
                            },
                            
                            clathrin: {
                                structure: "Three heavy chains + three light chains form triskelion (3-legged structure)",
                                assembly: "Triskelions assemble into lattice/cage structure",
                                coat: "Forms polygonal basket on cytoplasmic side of membrane",
                                function: "Drives membrane curvature and vesicle formation",
                                disassembly: "Hsc70 chaperone + auxilin disassemble coat (ATP-dependent)"
                            },
                            
                            adaptorProteins: {
                                AP2: "Main adaptor linking clathrin to membrane and to receptor cytoplasmic tails",
                                function: "Recognize receptor signals, recruit clathrin",
                                cargo: "Select which receptors/proteins to include in vesicle"
                            },
                            
                            dynamin: {
                                type: "Large GTPase",
                                structure: "Forms helix around neck of budding vesicle",
                                function: "Constricts neck, pinches off vesicle",
                                mechanism: "GTP hydrolysis drives conformational change → constriction",
                                analogy: "Like a molecular 'scissors' cutting vesicle from membrane"
                            },
                            
                            examples: {
                                LDLCholesterol: {
                                    ligand: "LDL (Low-Density Lipoprotein) particle",
                                    receptor: "LDL receptor (LDLR)",
                                    function: "Uptake of cholesterol for cell membranes and steroid synthesis",
                                    mechanism: [
                                        "LDL binds to LDL receptor in coated pit",
                                        "Internalized via RME",
                                        "In endosome: pH drops, LDL releases from receptor",
                                        "Receptor recycled to membrane (lifetime: 20 hours, 150 cycles)",
                                        "LDL to lysosome: cholesteryl esters hydrolyzed to free cholesterol",
                                        "Cholesterol used or stored"
                                    ],
                                    disease: {
                                        familialHypercholesterolemia: {
                                            inheritance: "Autosomal dominant",
                                            defect: "Defective or absent LDL receptors",
                                            homozygous: "No functional receptors → cholesterol >600 mg/dL → heart attacks in childhood",
                                            heterozygous: "50% receptors → cholesterol ~300 mg/dL → heart attacks in 30s-40s",
                                            prevalence: "1 in 500 heterozygous (one of most common genetic diseases)",
                                            treatment: "Statins (reduce cholesterol synthesis), PCSK9 inhibitors (increase receptor recycling), liver transplant"
                                        }
                                    },
                                    discoverers: "Brown and Goldstein (1985 Nobel Prize)"
                                },
                                
                                ironTransferrin: {
                                    ligand: "Transferrin (iron-binding protein)",
                                    receptor: "Transferrin receptor (TfR)",
                                    function: "Iron uptake for hemoglobin synthesis, cellular processes",
                                    mechanism: [
                                        "Fe³⁺-transferrin binds to TfR",
                                        "Internalized via RME",
                                        "In endosome: pH drops, iron released from transferrin",
                                        "Iron transported to cytoplasm (DMT1 transporter)",
                                        "Apotransferrin (iron-free) + receptor recycled to surface",
                                        "Apotransferrin released (low affinity at pH 7.4)"
                                    ],
                                    regulation: "TfR expression increases when iron low (via iron-responsive elements in mRNA)",
                                    importance: "Essential for erythropoiesis (red blood cell production)"
                                },
                                
                                hormoneReceptors: {
                                    ligands: "Insulin, growth factors (EGF, PDGF), etc.",
                                    receptors: "Insulin receptor, EGF receptor, etc.",
                                    function: "Hormone uptake AND signal transduction",
                                    mechanism: [
                                        "Hormone binds receptor → activates signaling",
                                        "Receptor-hormone complex internalized (RME)",
                                        "Downregulation: reduces receptor number on surface",
                                        "Desensitization: reduces cell's response to hormone",
                                        "Some receptors recycled, some degraded"
                                    ],
                                    importance: "Regulates cellular sensitivity to hormones"
                                },
                                
                                viralEntry: {
                                    viruses: "Influenza, HIV, others",
                                    mechanism: "Viruses hijack RME pathway to enter cells",
                                    example: {
                                        influenza: "Hemagglutinin binds sialic acid receptor → endocytosis → low pH in endosome triggers fusion → viral RNA released",
                                        HIV: "gp120 binds CD4 + coreceptor → endocytosis or direct fusion"
                                    },
                                    drugging: "Target viral entry (e.g., fusion inhibitors)"
                                }
                            },
                            
                            regulation: {
                                receptorNumber: "Increase or decrease receptor expression",
                                affinity: "Modify receptor affinity for ligand",
                                coatProtein: "Regulate clathrin/adaptor protein availability",
                                signaling: "Growth factors, hormones regulate RME rate"
                            },
                            
                            clathrinIndependent: {
                                note: "Some RME occurs without clathrin (caveolae, other mechanisms)",
                                caveolae: "Flask-shaped invaginations enriched in caveolin protein and cholesterol",
                                function: "Signal transduction, lipid trafficking, transcytosis"
                            }
                        }
                    },
                    
                    comparison: [
                        {type: "Phagocytosis", particles: "Large (bacteria, cells)", vesicleSize: ">250 nm", specificity: "Specific receptors", cells: "Specialized phagocytes", function: "Defense, cleanup"},
                        {type: "Pinocytosis", particles: "Fluid, solutes", vesicleSize: "<150 nm", specificity: "Non-specific", cells: "All cells", function: "Sampling, nutrient uptake"},
                        {type: "Receptor-mediated", particles: "Specific ligands", vesicleSize: "~100 nm", specificity: "Highly specific", cells: "All cells", function: "Targeted uptake, regulation"}
                    ],
                    
                    fate: {
                        degradativePathway: "Most common: vesicle → early endosome → late endosome → lysosome → degradation",
                        transcytosis: "Vesicle moves through cell, releases on opposite side (e.g., across endothelium)",
                        recycling: "Receptors/membrane often recycled back to plasma membrane",
                        signaling: "Some receptors continue signaling from endosomes (sustained signaling)"
                    }
                },
                
                exocytosis: {
                    definition: "Process of releasing materials FROM cell by fusion of vesicles with plasma membrane",
                    direction: "Intracellular → extracellular",
                    membraneChange: "Increases plasma membrane surface area",
                    packaging: "Materials packaged into secretory vesicles (usually by Golgi apparatus)",
                    
                    types: {
                        constitutiveExocytosis: {
                            name: "Constitutive (continuous) exocytosis",
                            regulation: "Unregulated, continuous process",
                            rate: "Constant",
                            vesicles: "Constitutive secretory vesicles",
                            
                            functions: [
                                "Deliver newly synthesized membrane proteins to plasma membrane",
                                "Deliver lipids to plasma membrane",
                                "Secrete extracellular matrix proteins (collagen, fibronectin, proteoglycans)",
                                "Replace membrane removed by endocytosis (balance)",
                                "Secrete continuously needed proteins (e.g., albumin from liver)"
                            ],
                            
                            cells: "All cells (ubiquitous)",
                            
                            mechanism: {
                                step1: "Proteins synthesized in ER",
                                step2: "Transported to Golgi apparatus",
                                step3: "Sorted into constitutive secretory vesicles in trans-Golgi network",
                                step4: "Vesicles bud from Golgi",
                                step5: "Transported to plasma membrane (via cytoskeleton/motor proteins)",
                                step6: "Vesicle membrane fuses with plasma membrane (SNAREs mediate)",
                                step7: "Contents released to extracellular space",
                                step8: "Vesicle membrane incorporated into plasma membrane"
                            },
                            
                            examples: [
                                "Delivery of GLUT4 to muscle cell membrane (insulin-stimulated, but considered constitutive pathway with regulation)",
                                "Secretion of antibodies by plasma cells (continuous)",
                                "Secretion of albumin by liver cells",
                                "Secretion of ECM proteins by fibroblasts"
                            ]
                        },
                        
                        regulatedExocytosis: {
                            name: "Regulated (triggered) exocytosis",
                            regulation: "Occurs in response to specific signal (usually Ca²⁺ influx)",
                            storage: "Materials stored in secretory granules/vesicles until signal received",
                            trigger: "Extracellular signal → increased cytoplasmic Ca²⁺ → exocytosis",
                            
                            mechanism: {
                                packaging: {
                                    step1: "Proteins synthesized in ER, transported to Golgi",
                                    step2: "In trans-Golgi network: sorted into regulated secretory vesicles",
                                    step3: "Proteins aggregate/condense in acidic environment",
                                    step4: "Vesicles bud, mature into secretory granules",
                                    step5: "Granules stored near plasma membrane (docked, primed)"
                                },
                                stimulus: {
                                    step6: "Extracellular signal (neurotransmitter, hormone)",
                                    step7: "Signal transduction → Ca²⁺ channels open OR Ca²⁺ released from ER",
                                    step8: "Cytoplasmic Ca²⁺ concentration increases (0.1 μM → 1-10 μM)"
                                },
                                fusion: {
                                    step9: "Ca²⁺ binds to synaptotagmin (Ca²⁺ sensor on vesicle)",
                                    step10: "Synaptotagmin triggers SNARE-mediated membrane fusion",
                                    step11: "Fusion pore opens",
                                    step12: "Contents released (full release or 'kiss-and-run')",
                                    step13: "Vesicle membrane retrieved or incorporated"
                                },
                                timing: "Milliseconds (neurotransmitter release) to seconds/minutes (hormone release)"
                            },
                            
                            SNAREs: {
                                name: "SNARE proteins (Soluble NSF Attachment Protein REceptors)",
                                discovery: "James Rothman, Randy Schekman, Thomas Südhof (2013 Nobel Prize)",
                                types: {
                                    vSNARE: "On vesicle membrane (e.g., synaptobrevin/VAMP)",
                                    tSNARE: "On target membrane (e.g., syntaxin, SNAP-25)"
                                },
                                mechanism: [
                                    "v-SNARE and t-SNAREs form tight complex (coiled-coil)",
                                    "SNARE complex brings membranes very close together",
                                    "Energy released pulls membranes together → fusion",
                                    "Ca²⁺-synaptotagmin triggers final fusion step"
                                ],
                                specificity: "Different SNARE combinations ensure vesicles fuse with correct target membrane",
                                recycling: "NSF and α-SNAP disassemble SNARE complexes (ATP-dependent) for reuse",
                                toxins: {
                                    botulinumToxin: "Cleaves SNAREs (synaptobrevin, SNAP-25, syntaxin) → blocks neurotransmitter release → paralysis",
                                    tetanusToxin: "Cleaves synaptobrevin → blocks inhibitory neurotransmitters → spastic paralysis"
                                }
                            },
                            
                            functions: {
                                neurotransmission: {
                                    location: "Synaptic terminals of neurons",
                                    contents: "Neurotransmitters (acetylcholine, glutamate, GABA, dopamine, etc.)",
                                    trigger: "Action potential → Ca²⁺ influx through voltage-gated channels",
                                    speed: "Milliseconds (fastest regulated exocytosis)",
                                    amount: "Contents of 1 vesicle = 1 quantum (~5000-10000 molecules)",
                                    recycling: "Vesicles rapidly recycled (seconds to minutes)",
                                    importance: "Essential for all neural communication"
                                },
                                hormoneSecretion: {
                                    examples: [
                                        "Insulin from pancreatic β-cells (trigger: high blood glucose → ATP rise → K⁺ channel closes → depolarization → Ca²⁺ influx)",
                                        "Growth hormone from pituitary",
                                        "Adrenaline from adrenal medulla (trigger: sympathetic stimulation)"
                                    ],
                                    speed: "Seconds to minutes",
                                    storage: "Large secretory granules (100-300 nm)",
                                    regulation: "Hormone levels tightly regulated"
                                },
                                digestiveEnzymeRelease: {
                                    location: "Pancreatic acinar cells",
                                    contents: "Digestive enzymes (amylase, lipase, proteases - stored as zymogens)",
                                    trigger: "Hormones (CCK, secretin) + ACh from vagus nerve",
                                    storage: "Zymogen granules",
                                    timing: "Minutes after meal",
                                    importance: "Digestion of food"
                                },
                                immuneResponse: {
                                    mastCells: {
                                        contents: "Histamine, heparin, cytokines in granules",
                                        trigger: "Allergen binds IgE on surface → cross-linking → Ca²⁺ influx",
                                        response: "Degranulation (massive exocytosis)",
                                        result: "Inflammation, allergic reaction, anaphylaxis",
                                        speed: "Seconds to minutes",
                                        importance: "Allergies, defense against parasites"
                                    },
                                    cytotoxicTCells: {
                                        contents: "Perforin, granzymes in granules",
                                        trigger: "Recognition of infected cell",
                                        result: "Target cell death (apoptosis)",
                                        importance: "Kill virus-infected cells, cancer cells"
                                    }
                                }
                            },
                            
                            examples: [
                                {
                                    cell: "Neuron (motor neuron at neuromuscular junction)",
                                    content: "Acetylcholine",
                                    trigger: "Action potential",
                                    timing: "<1 millisecond",
                                    result: "Muscle contraction",
                                    clinical: "Botulinum toxin blocks this → paralysis (Botox)"
                                },
                                {
                                    cell: "Pancreatic β-cell",
                                    content: "Insulin",
                                    trigger: "High blood glucose",
                                    timing: "Minutes",
                                    result: "Glucose uptake by cells, blood sugar decreases",
                                    clinical: "Diabetes Type 1 - β-cells destroyed, no insulin secretion"
                                },
                                {
                                    cell: "Mast cell",
                                    content: "Histamine",
                                    trigger: "Allergen cross-links IgE receptors",
                                    timing: "Seconds to minutes",
                                    result: "Vasodilation, inflammation, bronchoconstriction",
                                    clinical: "Anaphylaxis - life-threatening allergic reaction"
                                }
                            ]
                        }
                    },
                    
                    comparison: [
                        {feature: "Regulation", constitutive: "Continuous, unregulated", regulated: "Triggered by signal (Ca²⁺)"},
                        {feature: "Storage", constitutive: "No storage (immediate release)", regulated: "Stored in granules until signal"},
                        {feature: "Speed", constitutive: "Continuous", regulated: "Rapid (milliseconds to minutes)"},
                        {feature: "Cells", constitutive: "All cells", regulated: "Specialized cells (neurons, endocrine, exocrine)"},
                        {feature: "Function", constitutive: "Membrane delivery, ECM secretion", regulated: "Signaling, digestion, defense"},
                        {feature: "Example", constitutive: "Albumin secretion", regulated: "Neurotransmitter release"}
                    ]
                }
            },
            
            regulation: {
                vesicleTrafficking: {
                    RabGTPases: {
                        function: "Small GTPases that regulate vesicle transport and fusion",
                        number: ">60 Rab proteins in humans",
                        specificity: "Each Rab marks specific vesicle type and destination",
                        mechanism: "Active (GTP-bound) Rab recruits effector proteins (tethers, motors, SNAREs)",
                        cycle: "GTP-bound (active) ↔ GDP-bound (inactive); regulated by GEFs and GAPs",
                        examples: "Rab5 (early endosomes), Rab7 (late endosomes/lysosomes), Rab11 (recycling endosomes)"
                    },
                    motorProteins: {
                        kinesin: "Moves vesicles toward plus end of microtubules (periphery)",
                        dynein: "Moves toward minus end (cell center)",
                        myosin: "Moves along actin filaments (short-range, at periphery)",
                        energy: "All use ATP hydrolysis for movement"
                    },
                    tethering: "Long coiled-coil proteins tether vesicles to target before SNARE-mediated fusion"
                },
                calciumSensors: {
                    synaptotagmin: "Main Ca²⁺ sensor for fast regulated exocytosis (synaptic transmission)",
                    otherSensors: "DOC2, synaptotagmin-like proteins"
                },
                membraneBalance: {
                    principle: "Endocytosis and exocytosis must be balanced to maintain constant plasma membrane area",
                    compensation: "Rapid endocytosis after exocytosis (especially in neurons)",
                    imbalance: "Cell swells if exocytosis > endocytosis"
                }
            },
            
            energyCost: {
                vesicleFormation: "ATP for membrane bending/fission (dynamin, others)",
                transport: "ATP for motor proteins moving vesicles",
                fusion: "GTP for SNAREs and Rabs",
                total: "Bulk transport very energy-expensive relative to amount transported"
            },
            
            comparison: {
                endocytosisVsExocytosis: [
                    {feature: "Direction", endocytosis: "Into cell", exocytosis: "Out of cell"},
                    {feature: "Membrane area", endocytosis: "Decreases plasma membrane", exocytosis: "Increases plasma membrane"},
                    {feature: "Function", endocytosis: "Uptake, downregulation", exocytosis: "Secretion, membrane delivery"},
                    {feature: "Energy", endocytosis: "ATP required", exocytosis: "ATP required"},
                    {feature: "Example", endocytosis: "LDL uptake", exocytosis: "Insulin secretion"}
                ]
            },
            
            examples: [
                {
                    process: "Neurotransmitter release at synapse",
                    type: "Regulated exocytosis",
                    trigger: "Action potential → Ca²⁺ influx",
                    timing: "<1 ms",
                    importance: "All neural communication, muscle contraction, thought",
                    disease: "Myasthenia gravis (autoantibodies block ACh receptors), Lambert-Eaton syndrome (autoantibodies block Ca²⁺ channels)"
                },
                {
                    process: "Cholesterol uptake",
                    type: "Receptor-mediated endocytosis",
                    ligand: "LDL particles",
                    importance: "Provides cholesterol for membranes and steroid hormones",
                    disease: "Familial hypercholesterolemia (defective LDL receptors) → early heart attacks"
                },
                {
                    process: "Bacterial phagocytosis by neutrophil",
                    type: "Phagocytosis",
                    trigger: "Bacteria coated with antibodies (opsonized)",
                    importance: "First line defense against infection",
                    disease: "Chronic granulomatous disease (cannot kill phagocytosed bacteria)"
                },
                {
                    process: "Insulin secretion from pancreatic β-cell",
                    type: "Regulated exocytosis",
                    trigger: "High blood glucose → ATP rise → Ca²⁺ influx",
                    importance: "Blood glucose regulation",
                    disease: "Type 1 diabetes (β-cells destroyed, no insulin)"
                }
            ],
            
            applications: [
                "Drug delivery: Nanoparticles designed to be taken up by endocytosis",
                "Vaccine development: Adjuvants enhance phagocytosis of antigens",
                "Gene therapy: Viral vectors use endocytosis to enter cells",
                "Understanding viral infection mechanisms",
                "Cancer therapy: Targeting receptor-mediated endocytosis",
                "Botulinum toxin (Botox): Blocks exocytosis, treats wrinkles, muscle spasms",
                "Understanding neurodegenerative diseases (synaptic dysfunction)",
                "Developing drugs targeting exocytosis (e.g., insulin secretagogues for diabetes)"
            ],
            
            clinicalRelevance: {
                familialHypercholesterolemia: "Defective LDL receptor → impaired cholesterol uptake",
                chronicGranulomatousDisease: "Defective phagocyte killing → recurrent infections",
                cysticFibrosis: "Defective CFTR trafficking (endocytosis/exocytosis pathway affected)",
                myastheniaGravis: "Autoantibodies to ACh receptors → impaired neurotransmission",
                botulinumToxin: "Medical use (wrinkles, spasticity, migraines); bioterrorism concern",
                diabetesMellitus: "Type 1: No insulin secretion; Type 2: Impaired insulin secretion",
                Alzheimer: "Impaired synaptic vesicle recycling, Aβ peptide from abnormal APP processing",
                cancer: "Altered endocytosis affects growth factor signaling, metastasis"
            }
        };
        
        return content;
    }

    handleTonicityOsmoregulation(problem) {
        const content = {
            topic: "Tonicity and Osmoregulation: Water Balance in Cells and Organisms",
            category: 'water_balance',
            summary: "Tonicity describes the relative solute concentration of solutions and determines the direction of water movement by osmosis. Cells and organisms must regulate their internal osmotic environment (osmoregulation) to maintain proper water balance and prevent damage from osmotic stress.",
            
            fundamentalPrinciples: {
                osmosis: {
                    definition: "Net movement of water across selectively permeable membrane from high water concentration to low water concentration",
                    driving Force: "Water potential gradient (moves from high Ψ to low Ψ)",
                    selectivePermeability: "Membrane permeable to water but not (or less so) to solutes",
                    equilibrium: "Water movement continues until water potential equal on both sides (or prevented by pressure)",
                    spontaneous: "Thermodynamically favorable, no ATP required"
                },
                waterConcentration: {
                    concept: "More solute dissolved = less water molecules per volume = lower water concentration",
                    inversely: "Water concentration inversely related to solute concentration"
                },
                importance: {
                    cellVolume: "Determines cell volume and shape",
                    turgidity: "Plant cells need water influx for rigidity (turgor pressure)",
                    animalCells: "Must maintain constant volume to prevent lysis or crenation",
                    organisms: "Water balance essential for survival"
                }
            },
            
            tonicity: {
                definition: "Relative concentration of solutes in solution compared to another solution (usually compared to cell interior)",
                note: "Tonicity is RELATIVE - a solution is hypertonic/hypotonic/isotonic with respect to a particular cell",
                determinants: {
                    soluteConcentration: "Total concentration of non-penetrating solutes",
                    penetrating: "Solutes that can cross membrane (e.g., urea, ethanol) do NOT affect tonicity",
                    impermeant: "Only solutes that cannot cross membrane affect tonicity (e.g., NaCl, glucose when no transporters)"
                },
                
                types: {
                    hypotonicSolution: {
                        definition: "Solution with LOWER solute concentration (higher water concentration) than cell interior",
                        waterMovement: "Net movement of water INTO cell (osmosis)",
                        cellResponse: {
                            animalCells: {
                                effect: "Cell swells as water enters",
                                risk: "Cell may burst (cytolysis/lysis) - no cell wall to resist",
                                osmotic Lysis: "Bursting due to water influx",
                                examples: "RBCs in distilled water lyse (hemolysis)",
                                prevention: "Maintain isotonic environment (e.g., 0.9% saline for RBCs)"
                            },
                            plantCells: {
                                effect: "Cell becomes turgid (swollen, firm)",
                                turgorPressure: "Pressure of cell contents against cell wall",
                                cellWall: "Rigid wall prevents bursting",
                                result: "Cell very firm, provides structural support",
                                optimal: "This is ideal condition for plant cells",
                                importance: "Turgor gives plants rigidity (non-woody plants especially)",
                                wilting: "Loss of turgor → plant droops"
                            }
                        },
                        examples: [
                            "Distilled water (pure water) - most hypotonic",
                            "0.45% NaCl - hypotonic to blood",
                            "Freshwater (to fish cells)",
                            "Dilute sugar solutions"
                        ]
                    },
                    
                    hypertonicSolution: {
                        definition: "Solution with HIGHER solute concentration (lower water concentration) than cell interior",
                        waterMovement: "Net movement of water OUT OF cell (osmosis)",
                        cellResponse: {
                            animalCells: {
                                effect: "Cell shrinks as water leaves (shrivels)",
                                crenation: "Shriveled, spiky appearance (especially RBCs)",
                                consequence: "Loss of function, potential cell death",
                                examples: "RBCs in 10% NaCl crenate",
                                applications: "Food preservation (salting draws water from bacteria)"
                            },
                            plantCells: {
                                effect: "Plasmolysis - cytoplasm and plasma membrane shrink away from cell wall",
                                stages: [
                                    "Incipient plasmolysis: Just beginning to pull away",
                                    "Evident plasmolysis: Clear gap visible",
                                    "Final plasmolysis: Membrane completely retracted, cytoplasm very small"
                                ],
                                cellWall: "Remains rigid, doesn't shrink",
                                gap: "Space between wall and membrane filled with hypertonic solution",
                                reversibility: "Can reverse if returned to hypotonic solution (not too severe or prolonged)",
                                consequence: "Plant wilts, flaccid",
                                lethality: "Severe or prolonged plasmolysis can kill cell"
                            }
                        },
                        examples: [
                            "Seawater (~3.5% NaCl) - hypertonic to most cells",
                            "10% NaCl solution",
                            "Concentrated sugar solutions (corn syrup)",
                            "Soil with high salt (saline soil)"
                        ]
                    },
                    
                    isotonicSolution: {
                        definition: "Solution with EQUAL solute concentration (equal water concentration) to cell interior",
                        waterMovement: "No NET water movement (equal movement in and out)",
                        equilibrium: "Cell at osmotic equilibrium with surroundings",
                        cellResponse: {
                            animalCells: {
                                effect: "Maintains normal shape and volume",
                                ideal: "This is optimal for animal cells",
                                examples: "RBCs in 0.9% NaCl (normal saline) or blood plasma",
                                importance: "IV fluids must be isotonic to blood"
                            },
                            plantCells: {
                                effect: "Flaccid (limp, not turgid)",
                                turgorPressure: "Zero",
                                notIdeal: "Plant cells prefer hypotonic (need turgor for support)",
                                result: "Plant droops",
                                incipientPlasmolyze: "Point where plasmolysis just begins (Ψp = 0)"
                            }
                        },
                        medicalUse: {
                            normalSaline: "0.9% NaCl (~154 mM) - isotonic to blood",
                            dextrose: "5% glucose (5g/100mL) - isotonic to blood",
                            LactatedRingers: "Balanced electrolyte solution, isotonic",
                            importance: "IV fluids must be isotonic to prevent cell damage"
                        },
                        examples: [
                            "0.9% NaCl (normal saline)",
                            "5% glucose solution",
                            "Blood plasma (for RBCs)",
                            "Most body fluids"
                        ]
                    }
                },
                
                comparison: [
                    {solution: "Hypotonic", solute: "Lower than cell", water: "Higher than cell", movement: "Water into cell", animal: "Swells → may lyse", plant: "Turgid (firm)"},
                    {solution: "Isotonic", solute: "Equal to cell", water: "Equal to cell", movement: "No net movement", animal: "Normal shape", plant: "Flaccid (limp)"},
                    {solution: "Hypertonic", solute: "Higher than cell", water: "Lower than cell", movement: "Water out of cell", animal: "Shrinks (crenation)", plant: "Plasmolyzed"}
                ]
            },
            
            waterPotential: {
                symbol: "Ψ (Greek letter psi)",
                definition: "Potential energy of water; predicts direction and magnitude of water movement",
                units: "Pascals (Pa), megapascals (MPa), bars, or atmospheres",
                principle: "Water moves from HIGH water potential to LOW water potential",
                reference: "Pure water at atmospheric pressure has Ψ = 0 (maximum water potential)",
                
                equation: "Ψ = Ψs + Ψp",
                
                components: {
                    solutePotential: {
                        symbol: "Ψs (also called osmotic potential)",
                        definition: "Effect of dissolved solutes on water potential",
                        sign: "Always NEGATIVE (or zero for pure water)",
                        reason: "Solutes lower water potential by diluting water",
                        calculation: "Ψs = -iCRT",
                        i: "Van't Hoff factor (# particles per molecule: 1 for glucose, 2 for NaCl)",
                        C: "Molar concentration (mol/L)",
                        R: "Pressure constant (0.0831 L·bar/mol·K)",
                        T: "Temperature (Kelvin)",
                        relationship: "More solute → more negative Ψs → lower total Ψ",
                        pureWater: "Ψs = 0 (no solutes)",
                        example: "0.1 M NaCl: Ψs = -(2)(0.1)(0.0831)(293) = -4.9 bars"
                    },
                    pressurePotential: {
                        symbol: "Ψp (also called turgor pressure in plants)",
                        definition: "Effect of physical pressure on water potential",
                        sign: "Positive (pressure increases Ψ) or negative (tension decreases Ψ)",
                        plantCells: {
                            turgorPressure: "Pressure of cell contents pushing against cell wall",
                            range: "0 (flaccid) to ~10 bars (very turgid)",
                            positiveΨp: "Increases water potential",
                            cellWall: "Resists expansion, builds up pressure",
                            incipientPlasmolysis: "Point where Ψp = 0 (cell just beginning to plasmolyze)"
                        },
                        animalCells: {
                            value: "Typically Ψp ≈ 0 (no rigid cell wall)",
                            note: "Some pressure from cytoskeleton"
                        },
                        atmosphericPressure: "Open to atmosphere: Ψp = 0",
                        xylem: "Can be negative (tension) due to transpiration pull"
                    }
                },
                
                interpretation: {
                    highΨ: "High water potential = lots of free water",
                    lowΨ: "Low water potential = less free water (more solute or negative pressure)",
                    movementDirection: "Water always moves from high Ψ to low Ψ",
                    magnitude: "Greater difference in Ψ → faster water movement"
                },
                
                calculations: {
                    example1: {
                        cell: "Ψs = -0.7 MPa, Ψp = +0.3 MPa",
                        Ψcell: "Ψ = -0.7 + 0.3 = -0.4 MPa",
                        surroundings: "Pure water: Ψ = 0 MPa",
                        prediction: "Water moves from surroundings (0) into cell (-0.4)"
                    },
                    example2: {
                        cell: "Ψs = -0.5 MPa, Ψp = 0 MPa (flaccid)",
                        Ψcell: "Ψ = -0.5 MPa",
                        surroundings: "0.2 M sucrose: Ψs = -0.5 MPa, Ψp = 0",
                        Ψsurroundings: "Ψ = -0.5 MPa",
                        prediction: "No net water movement (equilibrium, isotonic)"
                    },
                    example3: {
                        cell: "Ψs = -0.9 MPa, Ψp = +0.5 MPa",
                        Ψcell: "Ψ = -0.9 + 0.5 = -0.4 MPa",
                        surroundings: "0.3 M sucrose: Ψs = -0.7 MPa, Ψp = 0",
                        Ψsurroundings: "Ψ = -0.7 MPa",
                        prediction: "Water moves from cell (-0.4) to surroundings (-0.7)"
                    }
                },
                
                plantApplications: {
                    waterUptake: "Water enters root from soil if Ψsoil > Ψroot",
                    wilting: "If Ψsoil drops too low (drought), water cannot enter roots",
                    permanentWilting: "Point where Ψsoil so negative that plants cannot recover",
                    transport: "Water moves through plant from high Ψ (roots) to low Ψ (leaves/atmosphere)",
                    transpiration: "Evaporation from leaves creates very negative Ψ (tension) in xylem, pulls water up"
                }
            },
            
            osmoticPressure: {
                definition: "Pressure required to PREVENT osmosis",
                symbol: "π (Greek letter pi)",
                direction: "Applied to side with higher solute concentration",
                equation: "π = iMRT (van't Hoff equation)",
                relationship: "Osmotic pressure = -Ψs (magnitude)",
                magnitude: "Can be substantial (e.g., seawater ~25 atm, blood ~7.7 atm)",
                
                applications: {
                    reverseOsmosis: "Apply pressure greater than π to force water through membrane (desalination)",
                    pfefferOsmometer: "Historical device for measuring π",
                    clinicalEstimation: "Estimate tonicity of IV fluids"
                },
                
                example: {
                    bloodPlasma: "~0.3 Osm (300 mOsm) → π ≈ 7.7 atm",
                    NaCl: "0.9% NaCl = 0.154 M → i=2 → 0.308 Osm ≈ isotonic to blood"
                }
            },
            
            osmoregulation: {
                definition: "Maintenance of constant internal osmotic environment (water and solute balance)",
                importance: "Prevents osmotic stress, maintains cell volume, enables function in variable environments",
                challenge: "Organisms face different osmotic challenges based on environment",
                
                strategies: {
                    freshwaterOrganisms: {
                        problem: "Living in HYPOTONIC environment (water constantly enters)",
                        challenge: "Prevent excessive water influx and dilution of body fluids",
                        solutions: [
                            "Contractile vacuoles (protists): Collect excess water, expel via exocytosis",
                            "Dilute urine production (freshwater fish): Excrete lots of water, retain salts",
                            "Active salt uptake (fish gills): Actively pump Na⁺, Cl⁻ from water (even though dilute)",
                            "Impermeable skin (amphibians, fish): Reduce water influx",
                            "Do NOT drink water (fish): Would worsen problem"
                        ],
                        examples: {
                            paramecium: "Contractile vacuole pumps out water every few seconds",
                            freshwaterFish: "Produce copious dilute urine, actively absorb salts from water via gills"
                        }
                    },
                    
                    marineOrganisms: {
                        problem: "Living in HYPERTONIC environment (water constantly leaves)",
                        challenge: "Prevent dehydration and excessive salt uptake",
                        solutions: [
                            "Drink seawater, excrete excess salt (marine bony fish): Special salt-excreting cells in gills",
                            "Match internal osmolarity to seawater (sharks, rays): Retain urea to raise body fluid osmolarity (~1000 mOsm, close to seawater 1100 mOsm)",
                            "Salt glands (marine birds, sea turtles): Specialized glands excrete concentrated salt solution",
                            "Minimize water loss (marine mammals): Produce very concentrated urine, metabolic water from food",
                            "Impermeable skin (marine mammals, reptiles)"
                        ],
                        examples: {
                            sharks: "Urea retention raises internal osmolarity to near seawater levels (isosm otic)",
                            marinefish: "Drink seawater, actively excrete salt via gills, produce small amount of isotonic urine",
                            seabirds: "Nasal salt glands excrete concentrated NaCl (drips from beak)"
                        },
                        note: "Marine invertebrates (most) are isosmotic with seawater (no osmoregulation needed)"
                    },
                    
                    terrestrialOrganisms: {
                        problem: "Variable environment, risk of DEHYDRATION",
                        challenge: "Conserve water, prevent desiccation",
                        solutions: [
                            "Kidneys (mammals): Concentrate urine, reabsorb water (loop of Henle)",
                            "Impermeable skin (reptiles): Scales prevent water loss",
                            "Waxy cuticle (plants): Reduces evaporation from leaves",
                            "Stomata control (plants): Close stomata to reduce transpiration when water limited",
                            "Behavioral adaptations: Seek shade, burrow, nocturnal activity",
                            "Metabolic water (desert animals): Water produced from breaking down fats"
                        ],
                        examples: {
                            kangarooRat: "Produces very concentrated urine (4x human), gets water from metabolizing seeds, never drinks",
                            cacti: "CAM photosynthesis (open stomata at night only), water storage in tissues",
                            camels: "Tolerate dehydration, produce very concentrated urine, get water from fat metabolism"
                        }
                    }
                },
                
                hormonalRegulation: {
                    ADH: {
                        fullName: "Antidiuretic hormone (also called vasopressin)",
                        source: "Posterior pituitary (synthesized in hypothalamus)",
                        trigger: {
                            high: "High blood osmolarity (dehydration) detected by hypothalamus",
                            low: "Low blood pressure/volume"
                        },
                        target: "Kidney collecting duct cells",
                        mechanism: "Increases aquaporin-2 (AQP2) insertion into apical membrane",
                        effect: "Increases water reabsorption → concentrated urine, water retention",
                        result: "Restores blood osmolarity to normal (~300 mOsm)",
                        absence: {
                            disease: "Diabetes insipidus",
                            types: {
                                central: "Lack of ADH production",
                                nephrogenic: "Kidneys don't respond to ADH (defective aquaporin-2)"
                            },
                            symptoms: "Excessive urination (10-20 L/day), extreme thirst",
                            urine: "Very dilute (~50 mOsm)"
                        },
                        excess: "SIADH (Syndrome of Inappropriate ADH) → water retention → dilution hyponatremia"
                    },
                    
                    aldosterone: {
                        source: "Adrenal cortex",
                        trigger: "Low blood Na⁺, low blood pressure/volume (via renin-angiotensin system)",
                        target: "Kidney distal tubule and collecting duct",
                        effect: "Increases Na⁺ reabsorption (and K⁺ secretion)",
                        consequence: "Water follows Na⁺ (osmosis) → increased blood volume and pressure",
                        disease: {
                            excess: "Conn's syndrome → hypertension, hypokalemia",
                            deficiency: "Addison's disease → hypotension, hyperkalemia, hyponatremia"
                        }
                    },
                    
                    ANP: {
                        fullName: "Atrial Natriuretic Peptide",
                        source: "Heart atria (when stretched by high blood volume)",
                        effect: "Increases Na⁺ excretion, decreases water reabsorption",
                        result: "Decreases blood volume and pressure",
                        opposes: "Aldosterone and ADH"
                    }
                },
                
                kidneyFunction: {
                    role: "Primary osmoregulatory organ in vertebrates",
                    functions: [
                        "Filter blood, remove waste",
                        "Regulate water balance (reabsorb or excrete)",
                        "Regulate electrolyte balance (Na⁺, K⁺, Ca²⁺, etc.)",
                        "Maintain blood pH"
                    ],
                    concentrationAbility: {
                        humans: "Can concentrate urine to ~1200 mOsm (4x blood) or dilute to ~50 mOsm",
                        desertRodents: "Up to 5000 mOsm (extreme water conservation)",
                        aquaticMammals: "Similar to terrestrial (not as extreme as thought)",
                        mechanism: "Countercurrent multiplier in loop of Henle creates osmotic gradient"
                    },
                    ADHEffect: "Presence → concentrated urine; absence → dilute urine"
                }
            },
            
            cellularAdaptations: {
                animalCells: {
                    challenge: "No cell wall → vulnerable to osmotic stress",
                    strategies: [
                        "Maintain isotonic internal environment (homeostasis)",
                        "Na⁺/K⁺ pump maintains ion gradients",
                        "Kidney/excretory system regulates blood osmolarity",
                        "Some cells can regulate volume (regulatory volume decrease/increase)",
                        "Aquaporins allow rapid water equilibration"
                    ],
                    RVD_RVI: {
                        RVD: "Regulatory Volume Decrease - cell swells → activates K⁺ and Cl⁻ channels → ions leave → water follows → volume decreases",
                        RVI: "Regulatory Volume Increase - cell shrinks → activates Na⁺/H⁺ exchanger, Na⁺-K⁺-2Cl⁻ cotransporter → ions enter → water follows → volume increases",
                        importance: "Helps cells tolerate transient osmotic stress"
                    }
                },
                plantCells: {
                    cellWall: "Rigid structure provides protection",
                    advantages: [
                        "Prevents lysis in hypotonic solutions (turgor pressure builds but wall resists)",
                        "Turgor pressure provides structural support",
                        "Can tolerate wide range of external osmotic conditions"
                    ],
                    turgorPressure: {
                        definition: "Pressure of cell contents pushing against cell wall",
                        importance: "Provides rigidity to non-woody plants (herbaceous)",
                        loss: "Wilting (flaccid cells)",
                        gain: "Turgid, firm cells"
                    },
                    vacuole: {
                        role: "Large central vacuole (up to 90% of cell volume)",
                        function: "Regulate water content, store solutes",
                        tonoplast: "Vacuolar membrane with aquaporins",
                        osmolytes: "Accumulate solutes in vacuole to adjust osmotic potential"
                    }
                }
            },
            
            medicalApplications: {
                IVFluids: {
                    requirement: "Must be isotonic to blood (~300 mOsm)",
                    normalSaline: "0.9% NaCl (~154 mM) - isotonic",
                    dextrose: "5% glucose (D5W) - isotonic",
                    lactatedRingers: "Balanced electrolyte solution",
                    hypotonic: "Would cause RBC lysis (hemolysis) - DANGEROUS",
                    hypertonic: "Would cause RBC crenation - also dangerous",
                    consequence: "Wrong tonicity can be fatal"
                },
                
                oralRehydration: {
                    principle: "Treat diarrhea/dehydration with Na⁺-glucose solution",
                    mechanism: "Na⁺-glucose cotransporter in intestine → drives water absorption",
                    composition: "Balanced electrolytes + glucose",
                    importance: "Saves millions of lives (especially children) from diarrheal diseases",
                    example: "Pedialyte, WHO ORS (oral rehydration solution)"
                },
                
                edema: {
                    definition: "Abnormal accumulation of fluid in tissues",
                    causes: {
                        increased: "Increased capillary pressure (heart failure, venous obstruction)",
                        decreased: "Decreased plasma protein (liver disease, kidney disease → loss of albumin)",
                        increased2: "Increased capillary permeability (inflammation, allergic reaction)",
                        blocked: "Blocked lymphatic drainage (lymphedema)"
                    },
                    mechanism: "Osmotic or pressure imbalance → fluid leaves capillaries, accumulates in tissues",
                    types: "Peripheral (ankles, legs), pulmonary (lungs), cerebral (brain - dangerous)",
                    treatment: "Diuretics, treat underlying cause, compression, elevation"
                },
                
                dialysis: {
                    indication: "Kidney failure → cannot regulate osmolarity/electrolytes",
                    principle: "Blood flows past dialysate solution across semipermeable membrane",
                    osmosis: "Water moves to balance osmotic pressure",
                    diffusion: "Waste products (urea, creatinine) diffuse into dialysate",
                    dialysate: "Carefully controlled composition (isotonic, specific electrolytes)",
                    frequency: "Typically 3x per week, 4 hours per session"
                },
                
                cerebralEdema: {
                    danger: "Brain swelling inside rigid skull → increased intracranial pressure → damage/death",
                    causes: "Trauma, stroke, infection, high-altitude cerebral edema",
                    treatment: {
                        mannitol: "Hypertonic solution → draws water from brain into blood",
                        hypertonicSaline: "3% NaCl → similar mechanism",
                        mechanism: "Creates osmotic gradient, pulls water out of brain tissue"
                    },
                    emergency: "Life-threatening - requires immediate treatment"
                }
            },
            
            examples: [
                {
                    organism: "Freshwater fish",
                    environment: "Hypotonic (freshwater)",
                    problem: "Constant water influx, ion loss",
                    adaptations: "Never drinks water, produces copious dilute urine, actively absorbs salts via gills"
                },
                {
                    organism: "Marine bony fish",
                    environment: "Hypertonic (seawater)",
                    problem: "Constant water loss, excess salt intake",
                    adaptations: "Drinks seawater, excretes excess salt via gills, produces small isotonic urine"
                },
                {
                    organism: "Kangaroo rat",
                    environment: "Desert (terrestrial, dry)",
                    problem: "Water scarcity, risk of dehydration",
                    adaptations: "Never drinks, gets water from seed metabolism, extremely concentrated urine, nocturnal"
                },
                {
                    organism: "Paramecium",
                    environment: "Freshwater (hypotonic)",
                    problem: "Constant water influx",
                    adaptation: "Contractile vacuole pumps out excess water every few seconds"
                },
                {
                    organism: "Human RBCs",
                    environment: "Blood plasma (~300 mOsm)",
                    normal: "Isotonic - maintains biconcave shape",
                    hypotonic: "Distilled water → swells → lyses (hemolysis)",
                    hypertonic: "10% NaCl → shrinks → crenates"
                },
                {
                    organism: "Plant cells (e.g., Elodea)",
                    hypotonic: "Distilled water → turgid (firm, healthy)",
                    isotonic: "Flaccid (limp)",
                    hypertonic: "Salt solution → plasmolyzed (membrane pulls away from wall)"
                }
            ],
            
            applications: [
                "Intravenous fluid selection in hospitals",
                "Food preservation (salting, sugaring creates hypertonic environment → kills microbes)",
                "Understanding kidney function and renal disease",
                "Plant irrigation (avoid saline water which causes plasmolysis)",
                "Oral rehydration therapy (saves millions of lives)",
                "Understanding drowning (freshwater vs saltwater have different effects)",
                "Cryopreservation (prevent ice crystal formation which damages cells osmotically)",
                "Sports drinks (isotonic to blood for rapid absorption)",
                "Understanding altitude sickness (affects fluid balance)",
                "Treating cerebral edema (hypertonic saline)"
            ],
            
            clinicalRelevance: {
                diabetesInsipidus: "Defective ADH or aquaporin-2 → excessive urination, extreme thirst",
                SIADH: "Excess ADH → water retention → dilution of blood → hyponatremia",
                addisonsDisease: "Aldosterone deficiency → salt wasting, dehydration, hypotension",
                connsyndrome: "Aldosterone excess → salt retention, hypertension, hypokalemia",
                nephrogenic DI: "Kidneys don't respond to ADH (genetic defect in aquaporin-2)",
                edema: "Fluid accumulation in tissues due to osmotic imbalances",
                IVFluidErrors: "Wrong tonicity can cause hemolysis or crenation → potentially fatal",
                drowning: {
                    freshwater: "Hypotonic → water enters blood → dilutes → hemolysis → cardiac arrest",
                    saltwater: "Hypertonic → water leaves blood → hemoconcentration → pulmonary edema"
                }
            }
        };
        
        return content;
    }

   // ========================================
    // CELLULAR TRANSPORT CONTENT GENERATION
    // ========================================

   // ========================================
    // MAIN PROBLEM PROCESSING METHODS
    // ========================================

    parseCellularTransportProblem(topic, parameters = {}, subTopic = null, context = {}) {
        let topicType = null;

        // Match topic to handler
        for (const [type, config] of Object.entries(this.cellularTransportTopics)) {
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
            throw new Error(`Unable to recognize cellular transport topic: ${topic}`);
        }

        return {
            originalTopic: topic,
            type: topicType,
            subTopic: subTopic,
            parameters: { ...parameters },
            context: { ...context },
            difficulty: this.cellularTransportTopics[topicType].difficulty,
            prerequisites: this.cellularTransportTopics[topicType].prerequisites,
            parsedAt: new Date().toISOString()
        };
    }

    handleCellularTransportProblem(config) {
        const { topic, parameters, subTopic, context, requestType } = config;

        try {
            const isExperimentRequest = requestType === 'experiment' || 
                                       (typeof topic === 'string' && topic.toLowerCase().includes('experiment'));

            if (isExperimentRequest) {
                return this.handleExperimentRequest(config);
            } else {
                this.currentProblem = this.parseCellularTransportProblem(topic, parameters, subTopic, context);
                this.currentContent = this.getCellularTransportContent(this.currentProblem);
                
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
                
                this.contentSteps = this.generateCellularTransportContent(this.currentProblem, this.currentContent);
                
                // Generate workbook (handles async internally)
                this.generateCellularTransportWorkbook();

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
            throw new Error(`Failed to process cellular transport request: ${error.message}`);
        }
    }

    handleExperimentRequest(config) {
        const { topic, parameters, experimentId } = config;

        if (experimentId && this.cellularTransportExperiments[experimentId]) {
            this.currentExperiment = this.cellularTransportExperiments[experimentId];
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
        
        for (const [id, exp] of Object.entries(this.cellularTransportExperiments)) {
            if (exp.name.toLowerCase().includes(topicLower)) {
                return exp;
            }
        }

        for (const [id, exp] of Object.entries(this.cellularTransportExperiments)) {
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

        if (labExp.observations) {
            formatted.push(['', '']);
            formatted.push(['Expected Observations', '']);
            Object.entries(labExp.observations).forEach(([key, value]) => {
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
                formatted.push(['', labExp.conclusions]);
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

        if (labExp.safetyPrecautions) {
            formatted.push(['', '']);
            formatted.push(['SAFETY NOTES', '']);
            if (Array.isArray(labExp.safetyPrecautions)) {
                labExp.safetyPrecautions.forEach(note => {
                    formatted.push(['  ⚠', note]);
                });
            }
        }

        return formatted;
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
                break;
            
            case 'intermediate':
                adapted.vocabulary = 'standard';
                adapted.examples = this.selectMixedExamples(content.examples);
                adapted.depth = 'moderate';
                break;
            
            case 'advanced':
                adapted.vocabulary = 'technical';
                adapted.examples = this.selectAdvancedExamples(content.examples);
                adapted.depth = 'comprehensive';
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
            currentResearch: `Current research in ${content.topic} includes...`,
            openQuestions: "Unresolved questions in the field...",
            techniques: "Advanced techniques used to study this topic..."
        };
    }

    getContextualScenarios(topicType) {
        return this.contextualScenarios[topicType] || [];
    }

    getMetacognitivePrompts(topicType) {
        const prompts = {
            beforeLearning: this.metacognitivePrompts.beforeLearning.map(p => 
                p.replace('{topic}', this.cellularTransportTopics[topicType]?.name || topicType)
            ),
            duringLearning: this.metacognitivePrompts.duringLearning.map(p => 
                p.replace('{concept}', topicType).replace('{process}', topicType).replace('{related_process}', '')
            ),
            afterLearning: this.metacognitivePrompts.afterLearning.map(p => 
                p.replace('{topic}', this.cellularTransportTopics[topicType]?.name || topicType).replace('{concept}', topicType)
            )
        };

        return prompts;
    }

    getRelatedExperiments(topicType) {
        const related = [];
        
        Object.entries(this.cellularTransportExperiments).forEach(([id, experiment]) => {
            if (experiment.relatedTopics.includes(topicType)) {
                related.push({
                    id: id,
                    name: experiment.name,
                    category: experiment.category,
                    historicalScientist: experiment.historicalBackground?.scientist || experiment.historicalBackground?.scientists,
                    labTitle: experiment.labExperiment?.title
                });
            }
        });

        return related;
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

    generateCellularTransportContent(problem, content) {
        const contentSections = [];

        contentSections.push(this.generateOverviewSection(problem, content));

        if (content.components || content.membraneComponents) {
            contentSections.push(this.generateComponentsSection(content));
        }

        if (content.types) {
            contentSections.push(this.generateTypesSection(content));
        }

        if (content.mechanisms || content.mechanism) {
            contentSections.push(this.generateMechanismsSection(content));
        }

        if (content.comparison) {
            contentSections.push(this.generateComparisonsSection(content));
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
            sectionType: 'overview',
            title: content.topic || problem.originalTopic,
            category: content.category,
            summary: content.summary,
            difficulty: problem.difficulty,
            prerequisites: problem.prerequisites,
            keyPoints: this.extractKeyPoints(content)
        };
    }

    generateComponentsSection(content) {
        return {
            sectionType: 'components',
            title: 'Cellular Components',
            data: content.components || content.membraneComponents
        };
    }

    generateTypesSection(content) {
        return {
            sectionType: 'types',
            title: 'Types and Classification',
            data: content.types
        };
    }

    generateMechanismsSection(content) {
        return {
            sectionType: 'mechanisms',
            title: 'Transport Mechanisms',
            data: content.mechanisms || content.mechanism
        };
    }

    generateComparisonsSection(content) {
        return {
            sectionType: 'comparisons',
            title: 'Comparisons and Contrasts',
            data: content.comparison
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

    generateContextualScenariosSection(content) {
        return {
            sectionType: 'contextual_scenarios',
            title: 'Real-World Applications',
            scenarios: content.contextualScenarios
        };
    }

    generateRelatedExperimentsSection(content) {
        if (!content.relatedExperiments || content.relatedExperiments.length === 0) {
            return null;
        }

        return {
            sectionType: 'related_experiments',
            title: 'Related Experiments',
            experiments: content.relatedExperiments
        };
    }

    generateMetacognitiveSection(content) {
        return {
            sectionType: 'metacognitive',
            title: 'Learning Guidance',
            prompts: content.metacognitivePrompts
        };
    }

    extractKeyPoints(content) {
        const keyPoints = [];

        if (content.summary) keyPoints.push(content.summary);
        
        if (content.types) {
            Object.keys(content.types).forEach(key => {
                if (content.types[key].definition) {
                    keyPoints.push(`${key}: ${content.types[key].definition}`);
                }
            });
        }

        return keyPoints.slice(0, 5);
    }

    // ========================================
    // WORKBOOK GENERATION METHODS
    // ========================================

    generateCellularTransportWorkbook() {
        if (!this.currentContent || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();
        workbook.title = 'Cellular Transport Workbook';

        if (this.includeDiagramsInWorkbook) {
            this.diagramsPromise = this.generateCellularTransportDiagramDataAsync();
        }

        workbook.sections = [
            this.createProblemSection(),
            this.createContentOverviewSection(),
            this.createDetailedContentSection(),
            this.createDiagramsPlaceholderSection(),
            this.createComparisonsWorkbookSection(),
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
        workbook.title = 'Cellular Transport Experiment Workbook';

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
                    this.cellularTransportTopics[topic]?.name || topic,
                    this.cellularTransportTopics[topic]?.description || ''
                ])
            });
        }

        this.currentWorkbook = workbook;
    }

    async generateCellularTransportDiagramDataAsync() {
        if (!this.currentContent) return;

        const { type } = this.currentProblem;
        const diagramKeys = this.getRelevantCellularTransportDiagrams(type);

        this.diagramData = {
            type: type,
            diagrams: diagramKeys,
            renderedImages: [],
            status: 'rendering',
            placeholder: false,
            note: "Cellular transport diagrams"
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

    createDiagramsPlaceholderSection() {
        if (!this.includeDiagramsInWorkbook) {
            return null;
        }

        return {
            title: 'Cellular Transport Diagrams',
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
            title: 'Cellular Transport Diagrams',
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

    getRelevantCellularTransportDiagrams(topicType) {
        const diagramMap = {
            membrane_structure: [
                "cellMembrane",
                "cellStructure"
            ],
            passive_transport: [
                "cellMembrane",
                "diffusion",
                "osmosis"
            ],
            active_transport: [
                "cellMembrane",
                "sodiumPotassiumPump"
            ],
            bulk_transport: [
                "cellMembrane",
                "endocytosis",
                "exocytosis"
            ],
            tonicity_osmoregulation: [
                "cellMembrane",
                "osmosis",
                "cellStructure"
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
            title: 'Cellular Transport Workbook',
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
            data: [
                ['Topic Type', this.currentProblem.type],
                ['Main Topic', this.currentProblem.originalTopic],
                ['Sub-Topic', this.currentProblem.subTopic || 'General'],
                ['Category', this.cellularTransportTopics[this.currentProblem.type]?.category || 'N/A'],
                ['Difficulty', this.currentProblem.difficulty || 'Intermediate'],
                ['Prerequisites', this.currentProblem.prerequisites ? this.currentProblem.prerequisites.join(', ') : 'None']
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

        return {
            title: 'Content Overview',
            type: 'overview',
            data: overviewData
        };
    }

    createDetailedContentSection() {
        if (!this.currentContent) return null;

        const contentData = [];
        this.processContentStructure(this.currentContent, contentData);

        return contentData.length > 0 ? {
            title: 'Detailed Content',
            type: 'detailed_content',
            data: contentData
        } : null;
    }

    processContentStructure(obj, dataArray, prefix = '') {
        Object.entries(obj).forEach(([key, value]) => {
            if (key === 'topic' || key === 'category' || key === 'summary') return;

            if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
                dataArray.push([`${prefix}${key.toUpperCase()}`, '']);
                this.processContentStructure(value, dataArray, '  ');
            } else if (Array.isArray(value)) {
                dataArray.push([`${prefix}${key}`, '']);
                value.forEach(item => {
                    if (typeof item === 'string') {
                        dataArray.push([`${prefix}  •`, item]);
                    } else if (typeof item === 'object') {
                        Object.entries(item).forEach(([k, v]) => {
                            dataArray.push([`${prefix}  ${k}`, typeof v === 'object' ? JSON.stringify(v) : v]);
                        });
                        dataArray.push(['', '']);
                    }
                });
            } else {
                dataArray.push([`${prefix}${key}`, value]);
            }
        });
    }

    createComparisonsWorkbookSection() {
        if (!this.currentContent?.comparison) return null;

        const comparisonData = [];
        
        if (Array.isArray(this.currentContent.comparison)) {
            comparisonData.push(['Feature', 'Comparison 1', 'Comparison 2']);
            this.currentContent.comparison.forEach(comp => {
                const row = [];
                Object.values(comp).forEach(val => row.push(val));
                comparisonData.push(row);
            });
        } else {
            Object.entries(this.currentContent.comparison).forEach(([key, value]) => {
                comparisonData.push([key.toUpperCase(), '']);
                Object.entries(value).forEach(([k, v]) => {
                    comparisonData.push([`  ${k}`, typeof v === 'object' ? JSON.stringify(v) : v]);
                });
                comparisonData.push(['', '']);
            });
        }

        return {
            title: 'Comparisons',
            type: 'comparisons',
            data: comparisonData
        };
    }

    createExamplesApplicationsSection() {
        if (!this.currentContent.examples && !this.currentContent.applications) return null;

        const data = [];

        if (this.currentContent.examples) {
            data.push(['EXAMPLES', '']);
            this.currentContent.examples.forEach(example => {
                if (typeof example === 'object') {
                    Object.entries(example).forEach(([key, value]) => {
                        data.push([key, typeof value === 'object' ? JSON.stringify(value) : value]);
                    });
                    data.push(['', '']);
                }
            });
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

    createContextualScenariosWorkbookSection() {
        if (!this.currentContent.contextualScenarios || this.currentContent.contextualScenarios.length === 0) {
            return null;
        }

        const data = [['Scenario', 'Context', 'Application']];
        
        this.currentContent.contextualScenarios.forEach(scenario => {
            data.push([
                scenario.scenario,
                scenario.context,
                scenario.application
            ]);
        });

        return {
            title: 'Real-World Scenarios',
            type: 'contextual',
            data: data
        };
    }

    createRelatedExperimentsWorkbookSection() {
        if (!this.includeExperiments || !this.currentContent.relatedExperiments) {
            return null;
        }

        const data = [['Experiment Name', 'Category', 'Scientist']];

        this.currentContent.relatedExperiments.forEach(exp => {
            data.push([
                exp.name,
                exp.category,
                exp.historicalScientist || 'Various'
            ]);
        });

        return {
            title: 'Related Experiments',
            type: 'experiments',
            data: data
        };
    }

    createMisconceptionsSection() {
        if (!this.includeCommonMisconceptions) return null;

        const misconceptions = this.commonMisconceptions[this.currentProblem.type];
        if (!misconceptions) return null;

        const data = [['Category', 'Common Misconceptions']];

        Object.entries(misconceptions).forEach(([category, miscList]) => {
            data.push([category, '']);
            miscList.forEach(misc => {
                data.push(['  •', misc]);
            });
        });

        return {
            title: 'Common Misconceptions',
            type: 'misconceptions',
            data: data
        };
    }

    createMetacognitiveWorkbookSection() {
        if (!this.metacognitiveSupport || !this.currentContent.metacognitivePrompts) {
            return null;
        }

        const data = [];

        Object.entries(this.currentContent.metacognitivePrompts).forEach(([phase, prompts]) => {
            data.push([phase.toUpperCase().replace('_', ' '), '']);
            prompts.forEach(prompt => {
                data.push(['  •', prompt]);
            });
            data.push(['', '']);
        });

        return {
            title: 'Learning Strategies',
            type: 'metacognitive',
            data: data
        };
    }

    createAssessmentSection() {
        if (!this.assessmentFeedback) return null;

        const questions = this.generateAssessmentQuestions(this.currentProblem.type);
        if (!questions || questions.length === 0) return null;

        const data = [['Level', 'Question']];

        Object.entries(questions).forEach(([level, question]) => {
            data.push([level.charAt(0).toUpperCase() + level.slice(1), question]);
        });

        return {
            title: 'Assessment Questions',
            type: 'assessment',
            data: data
        };
    }

    generateAssessmentQuestions(topicType) {
        return this.assessmentQuestions[topicType] || {};
    }

    // Utility methods
    getAllTopics() {
        return Object.entries(this.cellularTransportTopics).map(([id, topic]) => ({
            id: id,
            name: topic.name,
            category: topic.category,
            description: topic.description,
            difficulty: topic.difficulty,
            prerequisites: topic.prerequisites
        }));
    }

    getAllExperiments() {
        return Object.entries(this.cellularTransportExperiments).map(([id, exp]) => ({
            id: id,
            name: exp.name,
            category: exp.category,
            relatedTopics: exp.relatedTopics,
            scientist: exp.historicalBackground?.scientist || exp.historicalBackground?.scientists,
            year: exp.historicalBackground?.year
        }));
    }

    resetWorkbook() {
        this.currentProblem = null;
        this.currentContent = null;
        this.contentSteps = [];
        this.currentWorkbook = null;
        this.currentExperiment = null;
    }

    formatCellularTerm(term) {
        let formatted = term;
        
        Object.entries(this.cellularSymbols).forEach(([key, symbol]) => {
            const regex = new RegExp(key, 'g');
            formatted = formatted.replace(regex, symbol);
        });

        return formatted;
    }
}





// Export the class
export default EnhancedCellularTransportWorkbook;
