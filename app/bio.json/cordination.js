//Enhanced Coordination System Workbook - Comprehensive Nervous & Endocrine Systems
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { BiologySvgDiagrams } from '../svg-data.js';
import { BiologyDiagramsRegistry} from '../registry.js';
import { BiologyDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedCoordinationSystemWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "neural";
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

        this.coordinationSymbols = this.initializeCoordinationSymbols();
        this.setThemeColors();
        this.initializeCoordinationTopics();
        this.initializeCoordinationLessons();
        this.initializeCoordinationExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            neural: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
                headerBg: '#1565c0',
                headerText: '#ffffff',
                sectionBg: '#bbdefb',
                sectionText: '#0d47a1',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e3f2fd',
                resultText: '#1565c0',
                definitionBg: '#fff3e0',
                definitionText: '#e65100',
                stepBg: '#e8eaf6',
                stepText: '#311b92',
                borderColor: '#42a5f5',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#e0f2f1',
                experimentBg: '#fff9c4',
                experimentText: '#f57f17',
                neuronBg: '#e8eaf6',
                endocrineBg: '#f3e5f5',
                reflexBg: '#e1f5fe',
                synapseBg: '#fff3e0'
            },
            endocrine: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#6a1b9a',
                headerText: '#ffffff',
                sectionBg: '#e1bee7',
                sectionText: '#4a148c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#f3e5f5',
                resultText: '#6a1b9a',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#ab47bc',
                contentBg: '#ede7f6',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#e8eaf6',
                experimentBg: '#fffde7',
                experimentText: '#f57f17',
                neuronBg: '#e8eaf6',
                endocrineBg: '#f3e5f5',
                reflexBg: '#e1f5fe',
                synapseBg: '#fff3e0'
            }
        };

        this.colors = themes[this.theme] || themes.neural;
    }

    initializeCoordinationSymbols() {
        return {
            // Greek letters for neurons
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'mu': 'μ',
            'theta': 'θ',
            
            // Arrows for signal direction
            'arrow': '→',
            'reversible': '⇌',
            'doubleArrow': '↔',
            
            // Math symbols
            'plus': '+',
            'minus': '−',
            'plusminus': '±',
            'approximately': '≈',
            'proportional': '∝',
            'degree': '°',
            
            // Ions
            'Na+': 'Na⁺',
            'K+': 'K⁺',
            'Ca2+': 'Ca²⁺',
            'Cl-': 'Cl⁻',
            
            // Neurotransmitters
            'ACh': 'ACh',
            'GABA': 'GABA',
            'Glutamate': 'Glu',
            'Dopamine': 'DA',
            'Serotonin': '5-HT',
            'Norepinephrine': 'NE',
            
            // Hormones
            'T3': 'T₃',
            'T4': 'T₄',
            'TSH': 'TSH',
            'FSH': 'FSH',
            'LH': 'LH',
            'GH': 'GH',
            'ACTH': 'ACTH',
            'ADH': 'ADH',
            'PTH': 'PTH',
            
            // Electrical units
            'mV': 'mV',
            'ms': 'ms',
            'Hz': 'Hz'
        };
    }

    initializeCoordinationTopics() {
        this.coordinationTopics = {
            nervous_system_overview: {
                patterns: [
                    /nervous.*system|neural/i,
                    /CNS|PNS|central.*peripheral/i,
                    /neurons|nerve.*cells/i,
                    /coordination|integration/i
                ],
                handler: this.handleNervousSystemOverview.bind(this),
                name: 'Nervous System Organization',
                category: 'neural_anatomy',
                description: 'Structure and organization of the nervous system',
                difficulty: 'intermediate',
                prerequisites: ['cell_biology', 'membrane_potential']
            },
            
            neuron_structure: {
                patterns: [
                    /neuron.*structure|nerve.*cell/i,
                    /dendrite|axon|soma/i,
                    /myelin|schwann.*cell/i,
                    /synapse|synaptic/i
                ],
                handler: this.handleNeuronStructure.bind(this),
                name: 'Neuron Structure and Function',
                category: 'cellular_neuroscience',
                description: 'Anatomy and physiology of neurons',
                difficulty: 'intermediate',
                prerequisites: ['cell_structure', 'membrane_biology']
            },
            
            action_potential: {
                patterns: [
                    /action.*potential|nerve.*impulse/i,
                    /depolarization|repolarization|hyperpolarization/i,
                    /sodium.*potassium.*pump/i,
                    /threshold|all.*or.*none/i
                ],
                handler: this.handleActionPotential.bind(this),
                name: 'Action Potential and Nerve Impulse',
                category: 'neurophysiology',
                description: 'Electrical signaling in neurons',
                difficulty: 'advanced',
                prerequisites: ['membrane_potential', 'ion_channels', 'neuron_structure']
            },
            
            synaptic_transmission: {
                patterns: [
                    /synapse|synaptic.*transmission/i,
                    /neurotransmitter|chemical.*messenger/i,
                    /presynaptic|postsynaptic/i,
                    /EPSP|IPSP|summation/i
                ],
                handler: this.handleSynapticTransmission.bind(this),
                name: 'Synaptic Transmission',
                category: 'neurophysiology',
                description: 'Chemical communication between neurons',
                difficulty: 'advanced',
                prerequisites: ['neuron_structure', 'action_potential', 'membrane_receptors']
            },
            
            reflex_arc: {
                patterns: [
                    /reflex|reflex.*arc/i,
                    /knee.*jerk|patellar/i,
                    /sensory.*motor|receptor.*effector/i,
                    /spinal.*cord|interneuron/i
                ],
                handler: this.handleReflexArc.bind(this),
                name: 'Reflex Arc and Reflexes',
                category: 'neural_circuits',
                description: 'Automatic neural responses',
                difficulty: 'intermediate',
                prerequisites: ['nervous_system_overview', 'neuron_structure']
            },
            
            brain_structure: {
                patterns: [
                    /brain.*structure|cerebral/i,
                    /cerebrum|cerebellum|brainstem/i,
                    /frontal.*lobe|temporal.*lobe/i,
                    /hippocampus|amygdala|thalamus/i
                ],
                handler: this.handleBrainStructure.bind(this),
                name: 'Brain Structure and Function',
                category: 'neuroanatomy',
                description: 'Organization and functions of brain regions',
                difficulty: 'advanced',
                prerequisites: ['nervous_system_overview', 'neural_circuits']
            },
            
            endocrine_system: {
                patterns: [
                    /endocrine.*system|hormone/i,
                    /gland|pituitary|thyroid|adrenal/i,
                    /insulin|glucagon|adrenaline/i,
                    /feedback.*loop|homeostasis/i
                ],
                handler: this.handleEndocrineSystem.bind(this),
                name: 'Endocrine System and Hormones',
                category: 'endocrinology',
                description: 'Chemical coordination through hormones',
                difficulty: 'advanced',
                prerequisites: ['homeostasis', 'receptor_signaling', 'feedback_mechanisms']
            },
            
            hormone_mechanisms: {
                patterns: [
                    /hormone.*mechanism|steroid.*peptide/i,
                    /receptor|signal.*transduction/i,
                    /second.*messenger|cAMP/i,
                    /gene.*expression|protein.*synthesis/i
                ],
                handler: this.handleHormoneMechanisms.bind(this),
                name: 'Hormone Mechanisms of Action',
                category: 'endocrinology',
                description: 'How hormones produce cellular effects',
                difficulty: 'advanced',
                prerequisites: ['cell_signaling', 'membrane_receptors', 'gene_regulation']
            },
            
            autonomic_nervous_system: {
                patterns: [
                    /autonomic|sympathetic|parasympathetic/i,
                    /fight.*flight|rest.*digest/i,
                    /acetylcholine|norepinephrine/i,
                    /heart.*rate|blood.*pressure/i
                ],
                handler: this.handleAutonomicNervousSystem.bind(this),
                name: 'Autonomic Nervous System',
                category: 'neurophysiology',
                description: 'Involuntary control of internal organs',
                difficulty: 'advanced',
                prerequisites: ['nervous_system_overview', 'neurotransmitters']
            },
            
            sensory_systems: {
                patterns: [
                    /sensory.*system|receptor/i,
                    /vision|eye|retina/i,
                    /hearing|ear|cochlea/i,
                    /mechanoreceptor|photoreceptor/i
                ],
                handler: this.handleSensorySystems.bind(this),
                name: 'Sensory Systems',
                category: 'sensory_physiology',
                description: 'Detection and processing of sensory information',
                difficulty: 'advanced',
                prerequisites: ['nervous_system_overview', 'action_potential', 'receptor_types']
            }
        };
    }

    initializeCoordinationLessons() {
        this.lessons = {
            nervous_system_overview: {
                title: "Nervous System Organization: Structure and Function",
                concepts: [
                    "The nervous system coordinates and controls body activities through electrical and chemical signals",
                    "Central Nervous System (CNS) consists of brain and spinal cord",
                    "Peripheral Nervous System (PNS) connects CNS to rest of body",
                    "Neurons are specialized cells that transmit nerve impulses",
                    "Support cells (neuroglia) outnumber neurons and provide essential support"
                ],
                theory: "The nervous system is the master control and communication system of the body. It receives sensory input, integrates information, and generates appropriate motor output. This rapid electrical and chemical signaling allows for immediate responses to internal and external changes.",
                keyDefinitions: {
                    "Central Nervous System (CNS)": "Brain and spinal cord - integration and command center",
                    "Peripheral Nervous System (PNS)": "Nerves and ganglia outside CNS - communication lines",
                    "Neuron": "Specialized cell capable of transmitting nerve impulses",
                    "Neuroglia": "Support cells that protect, nourish, and insulate neurons",
                    "Nerve": "Bundle of axons in the PNS",
                    "Tract": "Bundle of axons in the CNS",
                    "Ganglion": "Collection of neuron cell bodies in the PNS",
                    "Nucleus": "Collection of neuron cell bodies in the CNS (not to be confused with cell nucleus)"
                },
                organization: {
                    anatomical: {
                        CNS: {
                            brain: "Control center for cognition, emotion, sensory processing, motor control",
                            spinalCord: "Conducts signals to/from brain, coordinates reflexes"
                        },
                        PNS: {
                            cranialNerves: "12 pairs arising from brain (sensory, motor, or mixed)",
                            spinalNerves: "31 pairs arising from spinal cord (all mixed)"
                        }
                    },
                    functional: {
                        sensory: {
                            name: "Afferent/Sensory Division",
                            function: "Carries sensory information TO CNS",
                            types: {
                                somatic: "Conscious sensations (touch, pain, temperature, vision, etc.)",
                                visceral: "Unconscious sensations from internal organs"
                            }
                        },
                        motor: {
                            name: "Efferent/Motor Division",
                            function: "Carries motor commands FROM CNS",
                            divisions: {
                                somatic: {
                                    name: "Somatic Nervous System",
                                    control: "Voluntary control of skeletal muscles",
                                    pathway: "One neuron from CNS to muscle",
                                    neurotransmitter: "Acetylcholine (excitatory)"
                                },
                                autonomic: {
                                    name: "Autonomic Nervous System",
                                    control: "Involuntary control of smooth muscle, cardiac muscle, glands",
                                    pathway: "Two neurons (preganglionic and postganglionic)",
                                    divisions: {
                                        sympathetic: "Fight or flight - mobilizes body during stress",
                                        parasympathetic: "Rest and digest - conserves energy",
                                        enteric: "Intrinsic nervous system of GI tract"
                                    }
                                }
                            }
                        }
                    }
                },
                cellTypes: {
                    neurons: {
                        function: "Generate and transmit nerve impulses",
                        types: {
                            structural: {
                                multipolar: "Many dendrites, one axon (most CNS neurons, motor neurons)",
                                bipolar: "One dendrite, one axon (retina, olfactory epithelium)",
                                unipolar: "Single process that divides (most sensory neurons)",
                                anaxonic: "No distinguishable axon (some brain, retinal neurons)"
                            },
                            functional: {
                                sensory: "Afferent - carry signals TO CNS (touch, pain, etc.)",
                                motor: "Efferent - carry signals FROM CNS to effectors",
                                interneurons: "Connect neurons within CNS (99% of all neurons)"
                            }
                        }
                    },
                    neuroglia: {
                        CNS: {
                            astrocytes: "Blood-brain barrier, regulate ion/nutrient/neurotransmitter levels",
                            oligodendrocytes: "Form myelin in CNS (one cell myelinates multiple axons)",
                            microglia: "Immune cells - phagocytose debris and pathogens",
                            ependymalCells: "Line ventricles, produce cerebrospinal fluid"
                        },
                        PNS: {
                            schwannCells: "Form myelin in PNS (one cell per axon segment)",
                            satelliteCells: "Surround neuron cell bodies in ganglia, regulate environment"
                        }
                    }
                },
                protectionMechanisms: {
                    skull: "Protects brain (cranium)",
                    vertebrae: "Protect spinal cord (vertebral column)",
                    meninges: {
                        layers: [
                            "Dura mater (tough outer layer)",
                            "Arachnoid mater (middle web-like layer)",
                            "Pia mater (delicate inner layer adherent to brain/cord)"
                        ],
                        spaces: {
                            epidural: "Between dura and bone (site of epidural anesthesia)",
                            subdural: "Between dura and arachnoid (potential space)",
                            subarachnoid: "Between arachnoid and pia (contains CSF)"
                        }
                    },
                    CSF: {
                        name: "Cerebrospinal Fluid",
                        function: "Cushions brain/cord, removes wastes, circulates nutrients",
                        production: "Choroid plexuses in ventricles (~500 ml/day)",
                        volume: "~150 ml total",
                        circulation: "Ventricles → subarachnoid space → absorbed into venous blood"
                    },
                    bloodBrainBarrier: {
                        structure: "Tight junctions between capillary endothelial cells + astrocyte end-feet",
                        function: "Protect brain from toxins, pathogens, maintain stable environment",
                        permeable: "O₂, CO₂, glucose, lipid-soluble molecules",
                        impermeable: "Most drugs, proteins, antibodies, bacteria"
                    }
                },
                applications: [
                    "Understanding neurological diseases (Alzheimer's, Parkinson's, MS)",
                    "Diagnosing injuries (concussion, spinal cord injury)",
                    "Developing treatments (drugs that cross blood-brain barrier)",
                    "Anesthesia (epidural, spinal blocks)",
                    "Understanding consciousness and behavior"
                ]
            },

            neuron_structure: {
                title: "Neuron Structure and Function: The Basic Unit of the Nervous System",
                concepts: [
                    "Neurons have specialized structures for receiving, integrating, and transmitting signals",
                    "Cell body (soma) contains nucleus and organelles",
                    "Dendrites receive signals from other neurons",
                    "Axon conducts nerve impulses away from cell body",
                    "Myelin sheath increases conduction speed",
                    "Synapses are junctions where neurons communicate"
                ],
                theory: "Neurons are highly specialized cells optimized for rapid communication over long distances. Their unique structure reflects their function: extensive dendrites increase receptive surface area, long axons allow signal transmission over meters, and myelin insulation dramatically increases speed.",
                keyDefinitions: {
                    "Soma (Cell Body)": "Contains nucleus and organelles; integrates incoming signals",
                    "Dendrites": "Branched processes that receive signals from other neurons",
                    "Axon": "Long process that conducts nerve impulses away from soma",
                    "Axon Hillock": "Region where axon joins soma; site of action potential initiation",
                    "Myelin Sheath": "Insulating layer around axon; increases conduction speed",
                    "Node of Ranvier": "Gap in myelin where action potential is regenerated",
                    "Synapse": "Junction between two neurons or between neuron and effector",
                    "Axon Terminal": "End of axon; releases neurotransmitters"
                },
                structure: {
                    cellBody: {
                        components: [
                            "Nucleus - genetic control center",
                            "Nissl bodies (RER) - protein synthesis for neurotransmitters and membrane",
                            "Mitochondria - high ATP demand for active transport",
                            "Golgi apparatus - package neurotransmitters into vesicles",
                            "Cytoskeleton - maintains shape, transports materials"
                        ],
                        function: "Metabolic center; integrates synaptic inputs",
                        location: "CNS (in gray matter) or PNS (in ganglia)"
                    },
                    dendrites: {
                        structure: "Branched, tapering processes; contain ribosomes and organelles",
                        function: "Receive signals from other neurons via synapses",
                        features: {
                            dendritic spines: "Small protrusions that form synaptic contacts",
                            branching: "Increases surface area for synaptic inputs (one neuron can receive thousands of inputs)",
                            plasticity: "Can change structure with learning and experience"
                        },
                        signal: "Graded potentials (EPSPs and IPSPs)"
                    },
                    axon: {
                        structure: {
                            origin: "Axon hillock (trigger zone for action potentials)",
                            length: "Micrometers to over 1 meter (e.g., sciatic nerve)",
                            diameter: "1-20 μm (larger = faster conduction)",
                            organelles: "No ribosomes; depends on soma for proteins",
                            cytoplasm: "Axoplasm - contains cytoskeleton for transport"
                        },
                        function: "Conducts action potentials from soma to terminals",
                        transport: {
                            anterograde: "Soma → terminals (neurotransmitters, organelles) - kinesin motor",
                            retrograde: "Terminals → soma (recycled materials, signals) - dynein motor",
                            speed: "Fast (400 mm/day) or slow (1-5 mm/day)"
                        },
                        branches: {
                            collaterals: "Side branches along axon",
                            terminals: "Enlarged endings that form synapses (axon terminals/boutons)"
                        }
                    },
                    myelin: {
                        composition: "80% lipid (phospholipids, cholesterol), 20% protein",
                        formation: {
                            CNS: "Oligodendrocytes - one cell myelinates multiple axons",
                            PNS: "Schwann cells - one cell per axon segment"
                        },
                        structure: {
                            myelinated: "Multiple wraps of cell membrane (up to 150 layers)",
                            nodesOfRanvier: "Unmyelinated gaps (1 μm) every 1-2 mm",
                            internodes: "Myelinated segments between nodes"
                        },
                        function: "Electrical insulation - prevents ion leakage, increases conduction speed",
                        importance: {
                            speed: "Saltatory conduction - action potential 'jumps' between nodes",
                            efficiency: "Reduces energy cost (fewer Na⁺/K⁺ pumps needed)",
                            disease: "Demyelination (MS, Guillain-Barré) → slow/lost conduction"
                        }
                    },
                    synapse: {
                        types: {
                            chemical: "Most common - neurotransmitter diffusion across synaptic cleft",
                            electrical: "Gap junctions allow direct ion flow (rare in mammals; in heart, some brain)"
                        },
                        structure: {
                            presynaptic: "Axon terminal with synaptic vesicles",
                            synapticCleft: "Narrow gap (20-40 nm)",
                            postsynaptic: "Dendrite, soma, or axon with receptors"
                        },
                        locations: {
                            axodendritic: "Axon → dendrite (most common)",
                            axosomatic: "Axon → soma",
                            axoaxonic: "Axon → axon (modulates neurotransmitter release)"
                        }
                    }
                },
                conductionSpeed: {
                    factors: {
                        axonDiameter: "Larger diameter = faster (less resistance)",
                        myelination: "Myelinated >> unmyelinated"
                    },
                    classification: {
                        typeA: {
                            myelination: "Heavily myelinated",
                            diameter: "12-20 μm",
                            speed: "70-120 m/s",
                            function: "Motor to skeletal muscle, proprioception"
                        },
                        typeB: {
                            myelination: "Lightly myelinated",
                            diameter: "3 μm",
                            speed: "3-15 m/s",
                            function: "Autonomic preganglionic"
                        },
                        typeC: {
                            myelination: "Unmyelinated",
                            diameter: "0.5-1.5 μm",
                            speed: "0.5-2 m/s",
                            function: "Pain, temperature, autonomic postganglionic"
                        }
                    }
                },
                comparison: {
                    myelinatedVsUnmyelinated: [
                        {feature: "Myelin sheath", myelinated: "Present", unmyelinated: "Absent"},
                        {feature: "Nodes of Ranvier", myelinated: "Present", unmyelinated: "Absent"},
                        {feature: "Conduction type", myelinated: "Saltatory (jumps)", unmyelinated: "Continuous"},
                        {feature: "Speed", myelinated: "Fast (up to 120 m/s)", unmyelinated: "Slow (0.5-2 m/s)"},
                        {feature: "Energy efficiency", myelinated: "High", unmyelinated: "Low"},
                        {feature: "Examples", myelinated: "Motor neurons, sensory", unmyelinated: "Pain, autonomic"}
                    ]
                },
                applications: [
                    "Understanding multiple sclerosis (demyelinating disease)",
                    "Guillain-Barré syndrome (autoimmune demyelination)",
                    "Nerve regeneration after injury (PNS can regenerate, CNS limited)",
                    "Local anesthetics (block Na⁺ channels in axons)",
                    "Understanding nerve conduction studies for diagnosis"
                ]
            },

            action_potential: {
                title: "Action Potential: The Nerve Impulse",
                concepts: [
                    "Action potential is a rapid, transient reversal of membrane potential",
                    "Resting membrane potential is ~-70 mV (inside negative)",
                    "Voltage-gated ion channels open/close in response to membrane potential changes",
                    "All-or-none principle: action potentials are always the same size",
                    "Refractory periods prevent backward propagation",
                    "Saltatory conduction in myelinated axons increases speed"
                ],
                theory: "Action potentials are the fundamental unit of neural communication. They allow rapid, long-distance transmission of information without signal degradation. The mechanism relies on voltage-gated ion channels that create a self-propagating wave of depolarization.",
                keyDefinitions: {
                    "Membrane Potential": "Voltage difference across cell membrane (inside relative to outside)",
                    "Resting Potential": "Membrane potential of unstimulated neuron (~-70 mV)",
                    "Depolarization": "Membrane potential becomes less negative (moves toward 0)",
                    "Repolarization": "Return to resting potential",
                    "Hyperpolarization": "Membrane potential becomes more negative than resting",
                    "Threshold": "Membrane potential (~-55 mV) at which action potential is triggered",
                    "All-or-None": "Action potential either occurs fully or not at all",
                    "Refractory Period": "Time during which another action potential cannot be generated"
                },
                restingPotential: {
                    value: "-70 mV (inside negative relative to outside)",
                    maintenance: {
                        NaKATPase: {
                            name: "Sodium-Potassium Pump",
                            action: "3 Na⁺ out, 2 K⁺ in (requires ATP)",
                            function: "Maintains concentration gradients",
                            energyCost: "~30% of neuron's ATP"
                        },
                        leakChannels: {
                            K_leak: "More K⁺ leak channels than Na⁺ (K⁺ flows out)",
                            contribution: "Major contributor to negative resting potential"
                        }
                    },
                    ionConcentrations: {
                        intracellular: {
                            Na_plus: "~12 mM",
                            K_plus: "~140 mM",
                            Cl_minus: "~4 mM",
                            A_minus: "~100 mM (negatively charged proteins)"
                        },
                        extracellular: {
                            Na_plus: "~145 mM",
                            K_plus: "~4 mM",
                            Cl_minus: "~120 mM"
                        }
                    },
                    forces: {
                        chemicalGradient: "Concentration difference drives ion movement",
                        electricalGradient: "Charge difference drives ion movement",
                        equilibrium: "Balance of chemical and electrical forces (Nernst equation)"
                    }
                },
                actionPotentialMechanism: {
                    phases: {
                        phase1_resting: {
                            name: "Resting State",
                            voltage: "-70 mV",
                            channels: "Voltage-gated Na⁺ and K⁺ channels closed",
                            description: "Neuron at rest, awaiting stimulus"
                        },
                        phase2_depolarization: {
                            name: "Depolarization (Rising Phase)",
                            trigger: "Stimulus brings membrane to threshold (~-55 mV)",
                            event: "Voltage-gated Na⁺ channels open",
                            ionFlow: "Na⁺ rushes IN (down concentration and electrical gradients)",
                            voltage: "Rapidly rises from -55 mV to +30 mV",
                            duration: "~1 ms",
                            positiveefeedback: "Depolarization → more Na⁺ channels open → more depolarization"
                        },
                        phase3_repolarization: {
                            name: "Repolarization (Falling Phase)",
                            trigger: "Membrane reaches +30 mV",
                            events: [
                                "Voltage-gated Na⁺ channels inactivate (cannot reopen immediately)",
                                "Voltage-gated K⁺ channels open (slower than Na⁺)"
                            ],
                            ionFlow: "K⁺ flows OUT (down concentration gradient)",
                            voltage: "Returns toward -70 mV",
                            duration: "~1-2 ms"
                        },
                        phase4_hyperpolarization: {
                            name: "Hyperpolarization (Undershoot)",
                            cause: "K⁺ channels slow to close",
                            voltage: "Briefly more negative than resting (~-80 mV)",
                            recovery: "K⁺ channels close, leak channels restore -70 mV"
                        }
                    },
                    thresholdAndAllOrNone: {
                        subthreshold: "Stimulus too weak → graded potential dies out",
                        threshold: "Stimulus reaches -55 mV → action potential triggered",
                        suprathreshold: "Stronger stimulus → action potential (SAME SIZE, higher frequency)",
                        allOrNone: "Once threshold reached, action potential always same magnitude and duration",
                        coding: "Information encoded in FREQUENCY of action potentials, not amplitude"
                    }
                },
                refractoryPeriods: {
                    absolute: {
                        definition: "Period when NO stimulus can trigger another action potential",
                        duration: "~1 ms",
                        cause: "Na⁺ channels inactivated (cannot open)",
                        consequence: "Limits maximum firing rate (~1000 Hz)",
                        function: "Ensures unidirectional propagation (prevents backward travel)"
                    },
                    relative: {
                        definition: "Period when stronger-than-normal stimulus needed",
                        duration: "~2-4 ms (after absolute)",
                        cause: "Some Na⁺ channels recovering, K⁺ channels still open (hyperpolarization)",
                        consequence: "Neuron less excitable",
                        function: "Further limits firing frequency"
                    }
                },
                propagation: {
                    unmyelinated: {
                        type: "Continuous conduction",
                        mechanism: "Action potential at one point depolarizes adjacent membrane → triggers action potential there",
                        speed: "Slow (0.5-2 m/s)",
                        energyCost: "High (entire axon depolarizes, many pumps needed)"
                    },
                    myelinated: {
                        type: "Saltatory conduction",
                        mechanism: "Action potential 'jumps' from node to node (myelin insulates internodes)",
                        speed: "Fast (up to 120 m/s) - ~50× faster than unmyelinated",
                        energyCost: "Low (only nodes depolarize)",
                        advantages: [
                            "Speed - critical for rapid reflexes",
                            "Efficiency - less Na⁺/K⁺ pumping needed",
                            "Space - allows more axons in same volume"
                        ]
                    },
                    direction: {
                        orthodromic: "Normal direction (soma → terminals)",
                        antidromic: "Backward (terminals → soma) - prevented by refractory period",
                        unidirectional: "Refractory period ensures forward propagation only"
                    }
                },
                frequencyCoding: {
                    principle: "Stimulus intensity encoded by action potential frequency, not size",
                    weak: "Low frequency (e.g., 10 Hz)",
                    strong: "High frequency (up to ~1000 Hz)",
                    adaptation: {
                        tonic: "Sustained firing during prolonged stimulus (e.g., muscle stretch receptors)",
                        phasic: "Rapid adaptation, firing only at stimulus onset/offset (e.g., touch)"
                    }
                },
                comparison: {
                    gradedVsAction: [
                        {feature: "Magnitude", graded: "Variable (proportional to stimulus)", action: "All-or-none (fixed size)"},
                        {feature: "Distance", graded: "Short (1-2 mm)", action: "Long (entire axon)"},
                        {feature: "Decay", graded: "Decremental (fades)", action: "Non-decremental (constant)"},
                        {feature: "Location", graded: "Dendrites, soma", action: "Axon"},
                        {feature: "Channels", graded: "Ligand/mechanically gated", action: "Voltage-gated"},
                        {feature: "Summation", graded: "Yes", action: "No"}
                    ]
                },
                applications: [
                    "Local anesthetics block Na⁺ channels (lidocaine, novocaine)",
                    "Puffer fish toxin (TTX) blocks Na⁺ channels → paralysis",
                    "Understanding epilepsy (excessive neuronal firing)",
                    "Nerve conduction velocity tests (diagnose neuropathies)",
                    "Understanding multiple sclerosis (demyelination slows conduction)"
                ]
            },

            synaptic_transmission: {
                title: "Synaptic Transmission: Chemical Communication Between Neurons",
                concepts: [
                    "Synapses are junctions where neurons communicate",
                    "Chemical synapses use neurotransmitters to transmit signals",
                    "Neurotransmitter release is triggered by Ca²⁺ influx",
                    "Postsynaptic potentials can be excitatory (EPSP) or inhibitory (IPSP)",
                    "Spatial and temporal summation integrate multiple inputs",
                    "Neurotransmitters are removed from cleft by reuptake, degradation, or diffusion"
                ],
                theory: "Synaptic transmission converts electrical signals (action potentials) into chemical signals (neurotransmitters) and back to electrical signals. This allows for signal modulation, integration of multiple inputs, and plasticity underlying learning and memory.",
                keyDefinitions: {
                    "Synapse": "Junction between two neurons or neuron and effector",
                    "Neurotransmitter": "Chemical messenger released at synapse",
                    "Synaptic Cleft": "Gap (20-40 nm) between presynaptic and postsynaptic cells",
                    "Synaptic Vesicle": "Membrane-bound sac containing neurotransmitter",
                    "EPSP": "Excitatory postsynaptic potential - depolarization",
                    "IPSP": "Inhibitory postsynaptic potential - hyperpolarization",
                    "Summation": "Addition of postsynaptic potentials (spatial or temporal)",
                    "Facilitation": "Enhanced neurotransmitter release after prior activity"
                },
                synapseStructure: {
                    presynaptic: {
                        components: [
                            "Axon terminal (bouton)",
                            "Synaptic vesicles (50 nm diameter, contain neurotransmitter)",
                            "Voltage-gated Ca²⁺ channels",
                            "Active zone (docking sites for vesicles)",
                            "Mitochondria (high ATP demand)"
                        ],
                        function: "Releases neurotransmitter in response to action potential"
                    },
                    synapticCleft: {
                        width: "20-40 nm",
                        contents: "Extracellular fluid, enzymes (e.g., acetylcholinesterase)",
                        function: "Space across which neurotransmitter diffuses"
                    },
                    postsynaptic: {
                        components: [
                            "Dendrite, soma, or axon",
                            "Neurotransmitter receptors",
                            "Ion channels (ligand-gated or voltage-gated)",
                            "Signal transduction machinery"
                        ],
                        function: "Responds to neurotransmitter binding"
                    }
                },
                transmissionMechanism: {
                    step1: {
                        event: "Action potential arrives at axon terminal",
                        detail: "Depolarization spreads into terminal"
                    },
                    step2: {
                        event: "Voltage-gated Ca²⁺ channels open",
                        detail: "Ca²⁺ flows INTO terminal (down concentration gradient: 1-2 mM outside, 0.0001 mM inside)"
                    },
                    step3: {
                        event: "Ca²⁺ triggers synaptic vesicle fusion",
                        detail: "Ca²⁺ binds synaptotagmin → SNARE proteins (synaptobrevin, syntaxin, SNAP-25) pull vesicle to membrane → exocytosis"
                    },
                    step4: {
                        event: "Neurotransmitter released into cleft",
                        detail: "Thousands of molecules per vesicle, diffusion across cleft (~0.5 ms)"
                    },
                    step5: {
                        event: "Neurotransmitter binds postsynaptic receptors",
                        detail: "Ligand-gated ion channels open OR G-protein coupled receptors activate"
                    },
                    step6: {
                        event: "Postsynaptic potential generated",
                        detail: "EPSP (depolarization) or IPSP (hyperpolarization)"
                    },
                    step7: {
                        event: "Neurotransmitter removal",
                        detail: "Reuptake by transporters, enzymatic degradation, or diffusion away"
                    }
                },
                neurotransmitters: {
                    acetylcholine: {
                        abbreviation: "ACh",
                        synthesis: "Acetyl-CoA + Choline (by choline acetyltransferase)",
                        locations: "NMJ, autonomic ganglia, parasympathetic, some CNS",
                        receptors: {
                            nicotinic: "Ionotropic (Na⁺/K⁺ channel) - fast, excitatory",
                            muscarinic: "Metabotropic (G-protein coupled) - slower, excitatory or inhibitory"
                        },
                        removal: "Acetylcholinesterase (AChE) breaks down into acetate + choline",
                        disease: "Alzheimer's (loss of ACh neurons), myasthenia gravis (antibodies block receptors)"
                    },
                    aminoAcids: {
                        glutamate: {
                            type: "Main excitatory neurotransmitter in CNS",
                            receptors: "AMPA, NMDA, kainate (ionotropic), mGluR (metabotropic)",
                            function: "Synaptic transmission, learning, memory",
                            toxicity: "Excess → excitotoxicity (stroke, neurodegenerative disease)"
                        },
                        GABA: {
                            name: "Gamma-aminobutyric acid",
                            type: "Main inhibitory neurotransmitter in CNS",
                            synthesis: "From glutamate (by glutamic acid decarboxylase)",
                            receptors: "GABA-A (Cl⁻ channel), GABA-B (metabotropic)",
                            function: "Reduces neuronal excitability, prevents over-excitation",
                            drugs: "Benzodiazepines, barbiturates enhance GABA (anti-anxiety, sedatives)"
                        },
                        glycine: {
                            type: "Inhibitory in spinal cord and brainstem",
                            receptor: "Glycine receptor (Cl⁻ channel)",
                            poison: "Strychnine blocks receptor → convulsions"
                        }
                    },
                    biogenicAmines: {
                        dopamine: {
                            pathways: "Substantia nigra → striatum (motor), VTA → limbic (reward)",
                            function: "Movement, reward, motivation, pleasure",
                            disease: "Parkinson's (loss of dopamine neurons), schizophrenia (excess dopamine hypothesis)",
                            drugs: "L-DOPA (Parkinson's), antipsychotics (block receptors), cocaine/amphetamine (increase)"
                        },
                        norepinephrine: {
                            locations: "Locus coeruleus → widespread CNS, sympathetic postganglionic",
                            function: "Arousal, attention, fight-or-flight",
                            receptors: "α and β adrenergic"
                        },
                        serotonin: {
                            name: "5-HT (5-hydroxytryptamine)",
                            locations: "Raphe nuclei → widespread CNS",
                            function: "Mood, sleep, appetite, pain modulation",
                            disease: "Depression (low serotonin hypothesis)",
                            drugs: "SSRIs (Prozac, Zoloft), psychedelics (LSD, psilocybin)"
                        }
                    },
                    neuropeptides: {
                        endorphins: "Opioid peptides - pain relief, euphoria",
                        substanceP: "Pain transmission",
                        NPY: "Appetite stimulation"
                    },
                    gases: {
                        nitricOxide: "NO - retrograde messenger, vasodilation, memory",
                        carbonMonoxide: "CO - neuromodulator"
                    }
                },
                postsynapticPotentials: {
                    EPSP: {
                        name: "Excitatory Postsynaptic Potential",
                        mechanism: "Na⁺ or Ca²⁺ influx (or K⁺ efflux reduced)",
                        effect: "Depolarization (e.g., -70 mV → -65 mV)",
                        result: "Brings neuron closer to threshold",
                        neurotransmitters: "Glutamate, ACh (nicotinic), dopamine (some receptors)"
                    },
                    IPSP: {
                        name: "Inhibitory Postsynaptic Potential",
                        mechanism: "Cl⁻ influx or K⁺ efflux",
                        effect: "Hyperpolarization (e.g., -70 mV → -75 mV)",
                        result: "Moves neuron away from threshold",
                        neurotransmitters: "GABA, glycine"
                    }
                },
                summation: {
                    temporal: {
                        definition: "Summing PSPs from same presynaptic neuron firing rapidly",
                        mechanism: "Second stimulus before first PSP decays",
                        result: "Accumulation of depolarization or hyperpolarization"
                    },
                    spatial: {
                        definition: "Summing PSPs from multiple presynaptic neurons simultaneously",
                        mechanism: "Different inputs converge on same postsynaptic neuron",
                        result: "Integration of multiple signals"
                    },
                    integration: {
                        axonHillock: "Site where summation occurs and action potential initiated",
                        threshold: "If sum reaches threshold → action potential",
                        subthreshold: "PSPs decay without triggering action potential"
                    }
                },
                synapticPlasticity: {
                    shortTerm: {
                        facilitation: "Increased neurotransmitter release after recent activity (residual Ca²⁺)",
                        depression: "Decreased release after depletion of vesicles"
                    },
                    longTerm: {
                        LTP: {
                            name: "Long-Term Potentiation",
                            mechanism: "Strengthened synaptic connection after repeated stimulation",
                            molecularBasis: "NMDA receptor activation → Ca²⁺ influx → more AMPA receptors inserted",
                            function: "Learning and memory formation",
                            location: "Hippocampus (memory), cortex"
                        },
                        LTD: {
                            name: "Long-Term Depression",
                            mechanism: "Weakened synaptic connection",
                            function: "Memory refinement, forgetting"
                        }
                    }
                },
                applications: [
                    "Drug targets (antidepressants, antipsychotics, Parkinson's drugs)",
                    "Understanding addiction (dopamine reward pathway)",
                    "Treating anxiety (GABA enhancers)",
                    "Botox (blocks ACh release at NMJ)",
                    "Nerve agents (inhibit acetylcholinesterase → excess ACh)",
                    "Understanding learning and memory (synaptic plasticity)"
                ]
            },

            endocrine_system: {
                title: "Endocrine System: Chemical Coordination Through Hormones",
                concepts: [
                    "Endocrine system uses hormones for long-term, widespread coordination",
                    "Hormones are chemical messengers released into bloodstream",
                    "Target cells have specific receptors for hormones",
                    "Negative feedback loops maintain homeostasis",
                    "Endocrine glands secrete hormones directly into blood (no ducts)",
                    "Hormones regulate metabolism, growth, reproduction, stress response"
                ],
                theory: "The endocrine system complements the nervous system by providing slower, longer-lasting chemical coordination. While nerves provide rapid, targeted responses, hormones create sustained, body-wide effects. Together, they maintain homeostasis and coordinate complex physiological processes.",
                keyDefinitions: {
                    "Hormone": "Chemical messenger secreted by endocrine glands, transported in blood to target cells",
                    "Endocrine Gland": "Ductless gland that secretes hormones into bloodstream",
                    "Target Cell": "Cell with receptors for specific hormone",
                    "Receptor": "Protein that binds hormone and initiates cellular response",
                    "Negative Feedback": "Response that opposes the original stimulus (maintains homeostasis)",
                    "Positive Feedback": "Response that enhances the original stimulus (rare, e.g., labor contractions)",
                    "Paracrine": "Local signaling (acts on nearby cells)",
                    "Autocrine": "Self-signaling (acts on same cell that secreted it)"
                },
                hormonalVsNervous: {
                    comparison: [
                        {feature: "Speed", hormonal: "Slow (seconds to hours)", nervous: "Fast (milliseconds)"},
                        {feature: "Duration", hormonal: "Long-lasting (minutes to days)", nervous: "Brief (milliseconds)"},
                        {feature: "Specificity", hormonal: "Widespread (any cell with receptor)", nervous: "Targeted (specific cells)"},
                        {feature: "Messenger", hormonal: "Chemical (hormone)", nervous: "Electrical then chemical"},
                        {feature: "Pathway", hormonal: "Blood", nervous: "Neurons"},
                        {feature: "Response", hormonal: "Often metabolic, growth", nervous: "Often muscle contraction, gland secretion"}
                    ],
                    overlap: "Neuroendocrine cells (neurons that secrete hormones, e.g., hypothalamus)"
                },
                majorGlands: {
                    hypothalamus: {
                        location: "Base of brain, above pituitary",
                        type: "Neuroendocrine (neural + endocrine)",
                        hormones: {
                            releasing: "TRH, CRH, GnRH, GHRH (stimulate pituitary)",
                            inhibiting: "Somatostatin (inhibits GH), dopamine (inhibits prolactin)"
                        },
                        function: "Master controller - regulates pituitary, links nervous and endocrine systems",
                        control: "Body temperature, hunger, thirst, sleep, circadian rhythms"
                    },
                    pituitary: {
                        nickname: "Master gland",
                        location: "Sella turcica of sphenoid bone, below hypothalamus",
                        size: "Pea-sized",
                        divisions: {
                            anterior: {
                                origin: "Epithelial tissue (oral ectoderm)",
                                control: "Hypothalamic releasing/inhibiting hormones (via portal system)",
                                hormones: {
                                    GH: "Growth hormone - stimulates growth, metabolism",
                                    TSH: "Thyroid-stimulating hormone - stimulates thyroid",
                                    ACTH: "Adrenocorticotropic hormone - stimulates adrenal cortex",
                                    FSH: "Follicle-stimulating hormone - gamete production",
                                    LH: "Luteinizing hormone - ovulation, testosterone production",
                                    Prolactin: "Milk production"
                                },
                                regulation: "Negative feedback from target gland hormones"
                            },
                            posterior: {
                                origin: "Neural tissue (extension of hypothalamus)",
                                control: "Hypothalamic neurons (axons extend into posterior pituitary)",
                                hormones: {
                                    ADH: {
                                        name: "Antidiuretic hormone (vasopressin)",
                                        target: "Kidneys (collecting ducts)",
                                        effect: "Water reabsorption → concentrated urine",
                                        stimulus: "Increased blood osmolarity, decreased blood volume",
                                        disease: "Diabetes insipidus (lack ADH → dilute urine, dehydration)"
                                    },
                                    Oxytocin: {
                                        target: "Uterus (smooth muscle), mammary glands",
                                        effect: "Uterine contractions (labor), milk ejection",
                                        stimulus: "Cervical stretch, suckling",
                                        feedback: "Positive feedback (rare)"
                                    }
                                }
                            }
                        }
                    },
                    thyroid: {
                        location: "Neck, anterior to trachea",
                        shape: "Butterfly-shaped, two lobes connected by isthmus",
                        hormones: {
                            T3_T4: {
                                names: "Triiodothyronine (T₃) and Thyroxine (T₄)",
                                synthesis: "Iodine + tyrosine (requires dietary iodine)",
                                transport: "Bound to plasma proteins (thyroid-binding globulin)",
                                effect: "Increase metabolic rate, heat production, growth, development",
                                regulation: "TSH from pituitary → negative feedback loop",
                                diseases: {
                                    hyperthyroidism: "Excess (Graves' disease) → high metabolism, weight loss, anxiety",
                                    hypothyroidism: "Deficiency → low metabolism, weight gain, fatigue, goiter (iodine deficiency)"
                                }
                            },
                            calcitonin: {
                                cells: "Parafollicular (C) cells",
                                target: "Bones (osteoblasts)",
                                effect: "Lowers blood Ca²⁺ (inhibits bone resorption)",
                                note: "Minor role in humans (PTH more important)"
                            }
                        }
                    },
                    parathyroid: {
                        location: "Four small glands on posterior thyroid",
                        hormone: {
                            PTH: {
                                name: "Parathyroid hormone",
                                targets: "Bones (osteoclasts), kidneys, intestines (via vitamin D)",
                                effect: "Raises blood Ca²⁺ (bone resorption, kidney reabsorption, intestinal absorption)",
                                regulation: "Low blood Ca²⁺ → PTH release",
                                disease: "Hyperparathyroidism → high Ca²⁺ (kidney stones, bone loss)"
                            }
                        }
                    },
                    adrenal: {
                        location: "Top of each kidney",
                        structure: "Two distinct regions with different functions",
                        cortex: {
                            origin: "Mesodermal tissue",
                            layers: "Zona glomerulosa (outer), zona fasciculata (middle), zona reticularis (inner)",
                            hormones: {
                                mineralocorticoids: {
                                    example: "Aldosterone",
                                    target: "Kidneys (distal tubule, collecting duct)",
                                    effect: "Na⁺ reabsorption, K⁺ secretion → water retention, blood pressure increase",
                                    regulation: "Renin-angiotensin-aldosterone system (RAAS), blood K⁺"
                                },
                                glucocorticoids: {
                                    example: "Cortisol",
                                    effects: [
                                        "Raises blood glucose (gluconeogenesis, protein breakdown)",
                                        "Anti-inflammatory, immunosuppressive",
                                        "Stress response"
                                    ],
                                    regulation: "ACTH from pituitary",
                                    disease: "Cushing's syndrome (excess), Addison's disease (deficiency)"
                                },
                                androgens: {
                                    example: "DHEA",
                                    effect: "Minor sex steroids (converted to testosterone/estrogen)"
                                }
                            }
                        },
                        medulla: {
                            origin: "Neural tissue (modified sympathetic ganglion)",
                            hormones: {
                                epinephrine: {
                                    name: "Adrenaline",
                                    effect: "Fight-or-flight response (increased heart rate, blood pressure, glucose, bronchodilation)",
                                    release: "Sympathetic nervous system stimulation",
                                    duration: "Minutes (rapid but short-lived)"
                                },
                                norepinephrine: {
                                    name: "Noradrenaline",
                                    effect: "Similar to epinephrine, vasoconstriction"
                                }
                            }
                        }
                    },
                    pancreas: {
                        type: "Mixed gland (exocrine + endocrine)",
                        location: "Behind stomach",
                        endocrineCells: {
                            isletsOfLangerhans: "Clusters of endocrine cells (1-2% of pancreas)",
                            cellTypes: {
                                beta: {
                                    percent: "~70%",
                                    hormone: "Insulin",
                                    stimulus: "High blood glucose",
                                    effects: [
                                        "Glucose uptake into cells (muscle, liver, fat)",
                                        "Glycogen synthesis (liver, muscle)",
                                        "Lipid synthesis (adipose)",
                                        "Protein synthesis"
                                    ],
                                    result: "Lowers blood glucose",
                                    disease: "Diabetes mellitus (Type 1: no insulin, Type 2: insulin resistance)"
                                },
                                alpha: {
                                    percent: "~20%",
                                    hormone: "Glucagon",
                                    stimulus: "Low blood glucose",
                                    effects: [
                                        "Glycogen breakdown (liver)",
                                        "Gluconeogenesis (liver)",
                                        "Lipolysis (fat breakdown)"
                                    ],
                                    result: "Raises blood glucose"
                                },
                                delta: {
                                    percent: "~5%",
                                    hormone: "Somatostatin",
                                    effect: "Inhibits insulin and glucagon (paracrine regulation)"
                                }
                            }
                        },
                        regulation: "Blood glucose levels (negative feedback)"
                    },
                    gonads: {
                        testes: {
                            location: "Scrotum",
                            cells: {
                                leydig: "Interstitial cells - testosterone production",
                                sertoli: "Support sperm development, inhibin production"
                            },
                            hormones: {
                                testosterone: {
                                    type: "Androgen (steroid)",
                                    effects: "Male secondary sex characteristics, spermatogenesis, libido, muscle/bone growth",
                                    regulation: "LH from pituitary"
                                },
                                inhibin: {
                                    effect: "Inhibits FSH (negative feedback)"
                                }
                            }
                        },
                        ovaries: {
                            location: "Pelvic cavity",
                            hormones: {
                                estrogen: {
                                    sources: "Follicles (mainly), corpus luteum",
                                    effects: "Female secondary sex characteristics, endometrial growth, bone density",
                                    regulation: "FSH and LH from pituitary",
                                    cycle: "Peaks before ovulation"
                                },
                                progesterone: {
                                    source: "Corpus luteum (after ovulation)",
                                    effects: "Maintains endometrium for pregnancy, inhibits uterine contractions",
                                    cycle: "High during luteal phase"
                                },
                                inhibin: {
                                    effect: "Inhibits FSH"
                                }
                            }
                        }
                    },
                    pineal: {
                        location: "Brain (epithalamus)",
                        hormone: {
                            melatonin: {
                                synthesis: "From serotonin",
                                regulation: "Light/dark cycle (increased at night)",
                                effects: "Circadian rhythms, sleep, seasonal reproduction (in some mammals)",
                                note: "Jet lag disrupts melatonin rhythm"
                            }
                        }
                    },
                    thymus: {
                        location: "Mediastinum (chest), above heart",
                        size: "Large in children, atrophies with age",
                        hormone: {
                            thymosin: {
                                effect: "T-cell maturation (immune system development)",
                                importance: "Critical in childhood"
                            }
                        }
                    }
                },
                feedbackMechanisms: {
                    negativeFeedback: {
                        definition: "Response opposes original stimulus (most common)",
                        purpose: "Maintain homeostasis (set point)",
                        examples: {
                            thyroid: "High T₃/T₄ → inhibits TSH and TRH → reduces T₃/T₄ production",
                            glucose: "High glucose → insulin → glucose uptake → lower glucose → less insulin",
                            calcium: "High Ca²⁺ → inhibits PTH → less bone resorption → lower Ca²⁺"
                        },
                        stability: "Prevents extremes, maintains steady state"
                    },
                    positiveFeedback: {
                        definition: "Response enhances original stimulus (rare)",
                        purpose: "Amplify process to completion",
                        examples: {
                            labor: "Cervical stretch → oxytocin → uterine contractions → more cervical stretch → more oxytocin (until birth)",
                            lactation: "Suckling → oxytocin → milk ejection",
                            bloodClotting: "Platelet activation → more platelet recruitment"
                        },
                        termination: "Ends when stimulus removed (baby born, bleeding stopped)"
                    },
                    complexLoops: {
                        hypothalamicPituitaryAxis: {
                            example: "Thyroid axis",
                            levels: [
                                "Hypothalamus releases TRH",
                                "TRH stimulates anterior pituitary → TSH",
                                "TSH stimulates thyroid → T₃/T₄",
                                "T₃/T₄ inhibit TRH and TSH (negative feedback)"
                            ],
                            similarly: "HPA axis (cortisol), HPG axis (sex hormones)"
                        }
                    }
                },
                applications: [
                    "Diabetes management (insulin therapy)",
                    "Thyroid disorders (levothyroxine for hypothyroidism)",
                    "Hormone replacement therapy (menopause, hypogonadism)",
                    "Contraception (synthetic estrogen/progesterone)",
                    "Growth disorders (GH therapy)",
                    "Stress management (understanding cortisol)",
                    "Endocrine disruptors (environmental chemicals mimicking hormones)"
                ]
            }
        };
    }

    initializeCoordinationExperiments() {
        this.coordinationExperiments = {
            // ========================================
            // EXPERIMENT 1: GALVANI'S FROG LEG
            // ========================================
            galvani_nerve_muscle: {
                name: "Galvani's Experiments - Animal Electricity and Nerve-Muscle Communication",
                relatedTopics: ['neuron_structure', 'action_potential', 'reflex_arc'],
                category: 'neurophysiology',
                historicalBackground: {
                    scientist: "Luigi Galvani",
                    year: "1780s (published 1791)",
                    discovery: "De Viribus Electricitatis in Motu Musculari Commentarius (Commentary on the Effect of Electricity on Muscular Motion)",
                    observation: "Dissected frog legs twitched when touched with metal instruments during electrical storms",
                    hypothesis: "Animals contain inherent 'animal electricity' stored in muscles and transmitted by nerves",
                    experiment: "Hung frog legs on brass hooks attached to iron railings → legs twitched when touching railing (no external electricity needed)",
                    interpretation: "Galvani believed electricity was generated within the animal tissue itself",
                    context: "At the time, electricity was mysterious phenomenon; Leyden jars and static electricity recently discovered",
                    controversy: {
                        volta: "Alessandro Volta disagreed - proposed electricity came from dissimilar metals (brass hook + iron railing), not animal",
                        voltaicPile: "Volta invented first battery (1800) to prove his point - electricity from metal contact",
                        resolution: "Both were partially correct: metals can generate electricity (battery), AND nerves use bioelectricity (action potentials)"
                    },
                    significance: [
                        "Founded field of electrophysiology",
                        "Proved nerves use electrical signals (not hydraulic fluids as previously thought)",
                        "Led to discovery of action potentials, membrane potential",
                        "Sparked Volta's battery invention (revolutionized physics)",
                        "Changed understanding of how nervous system works"
                    ],
                    modernContext: "We now know nerves use ACTION POTENTIALS (voltage changes across membrane due to ion movement), not flow of electric current like wires",
                    quote: "I was filled with wonder and delight when I observed that the frog, when prepared in the usual manner... contracted repeatedly and quite violently."
                },
                labExperiment: {
                    title: "Demonstrating Nerve-Muscle Electrical Excitability: Modern Frog Sciatic Nerve-Gastrocnemius Preparation",
                    hypothesis: "If nerves transmit electrical signals to muscles, then electrical stimulation of the sciatic nerve will cause contraction of the gastrocnemius muscle in an isolated frog leg preparation",
                    purpose: "Demonstrate that nerves use electrical signals and that muscles respond to these signals, replicating Galvani's fundamental discovery with modern tools",
                    ethicalNote: "This experiment uses euthanized frogs. Follow institutional animal care guidelines. Many schools now use computer simulations or non-animal alternatives.",
                    background: {
                        sciaticNerve: "Large nerve in frog leg, easily accessible, contains motor neurons to leg muscles",
                        gastrocnemius: "Calf muscle in frog, analogous to human calf, connected to sciatic nerve",
                        neuromuscularJunction: "Synapse where motor neuron meets muscle fiber, uses acetylcholine",
                        preparation: "Classic neurophysiology preparation used for over 200 years to study nerve and muscle function"
                    },
                    variables: {
                        independent: "Electrical stimulus applied to nerve (voltage, frequency)",
                        dependent: "Muscle contraction force/amplitude",
                        controlled: ["Frog species/size", "Temperature (keep moist and cool)", "Ringer's solution (physiological saline)", "Electrode placement"]
                    },
                    materials: [
                        "Freshly euthanized frog (Rana pipiens or similar) - follow ethical guidelines",
                        "Dissection tools (scissors, forceps, scalpel, pins)",
                        "Dissection tray or board",
                        "Frog Ringer's solution (physiological saline: NaCl, KCl, CaCl₂, NaHCO₃ in water)",
                        "Electrical stimulator (can deliver controlled voltage pulses, 0-10V)",
                        "Electrodes (two wire electrodes or stimulating electrode)",
                        "Force transducer OR simple lever setup to measure muscle contraction",
                        "Optional: Oscilloscope or computer interface to record",
                        "Ice (keep preparation cool)",
                        "Gloves",
                        "Lab notebook for observations"
                    ],
                    safetyPrecautions: [
                        "Follow all institutional guidelines for animal use",
                        "Wear gloves when handling frog and solutions",
                        "Be careful with sharp dissection tools",
                        "Electrical stimulator - use low voltages only (0-10V), avoid contact with electrodes",
                        "Keep preparation moist with Ringer's solution at all times",
                        "Dispose of biological materials properly"
                    ],
                    procedure: [
                        "PREPARATION OF FROG (perform humanely per guidelines):",
                        "1. Euthanize frog using approved method (usually pithing - destroys brain and spinal cord)",
                        "2. Lay frog ventral side down on dissection board",
                        "",
                        "DISSECTION TO EXPOSE SCIATIC NERVE-GASTROCNEMIUS:",
                        "3. Make incision through skin of lower back and peel skin down one leg",
                        "4. Carefully separate muscles to expose sciatic nerve (thick white cord running along back of thigh)",
                        "5. Use forceps to gently free nerve from surrounding tissue - keep nerve moist!",
                        "6. Trace nerve down to gastrocnemius muscle (large calf muscle)",
                        "7. Cut through hip joint to separate leg from body (keep sciatic nerve intact)",
                        "8. Optional: Remove skin from entire leg for better observation",
                        "9. Cut Achilles tendon and tie thread to it (to attach to force transducer or lever)",
                        "10. Pin femur (thigh bone) to dissection board to immobilize preparation",
                        "11. Keep entire preparation moist with Ringer's solution",
                        "",
                        "ELECTRICAL STIMULATION EXPERIMENTS:",
                        "",
                        "EXPERIMENT A - DIRECT NERVE STIMULATION:",
                        "12. Place two electrodes on sciatic nerve (about 1 cm apart)",
                        "13. Set stimulator to deliver single pulse: 1-5V, 1 ms duration",
                        "14. Stimulate nerve and observe muscle contraction",
                        "15. Record observations (twitch amplitude, latency)",
                        "16. Gradually increase voltage from 0V to 10V (0.5V increments)",
                        "17. For each voltage, record whether muscle contracts and strength of contraction",
                        "18. Plot stimulus voltage vs. contraction strength (recruitment curve)",
                        "",
                        "EXPERIMENT B - THRESHOLD AND ALL-OR-NONE:",
                        "19. Find threshold voltage (minimum voltage that causes visible contraction)",
                        "20. Compare contraction at threshold vs. 2× threshold vs. 5× threshold",
                        "21. Note: Individual muscle fibers show all-or-none, but whole muscle shows graded response (recruitment)",
                        "",
                        "EXPERIMENT C - FREQUENCY AND TETANUS:",
                        "22. Set stimulator to deliver trains of pulses at different frequencies:",
                        "    - 1 Hz (1 pulse per second) - observe individual twitches",
                        "    - 10 Hz - observe partial fusion",
                        "    - 50-100 Hz - observe tetanus (sustained contraction)",
                        "23. Record muscle response at each frequency",
                        "",
                        "EXPERIMENT D - FATIGUE:",
                        "24. Stimulate continuously at 50 Hz for 30-60 seconds",
                        "25. Observe decrease in contraction force over time (fatigue)",
                        "26. Allow recovery and test again",
                        "",
                        "EXPERIMENT E - CHEMICAL EFFECTS (optional):",
                        "27. Apply curare (or d-tubocurarine) solution to neuromuscular junction",
                        "28. Attempt nerve stimulation - should see NO muscle contraction (blocks ACh receptors)",
                        "29. Now apply electrodes DIRECTLY to muscle (bypass nerve)",
                        "30. Muscle should still contract (direct muscle stimulation works)",
                        "31. This proves: nerve uses chemical signal (ACh) to activate muscle",
                        "",
                        "GALVANI'S ORIGINAL OBSERVATION:",
                        "32. Optional: Touch nerve with two dissimilar metals (e.g., zinc and copper wire simultaneously)",
                        "33. Observe muscle twitch (bimetallic effect - Volta's explanation)"
                    ],
                    expectedResults: {
                        stimulationThreshold: {
                            subthreshold: "Voltages below ~0.5-1V → no contraction",
                            threshold: "~1-2V → minimal visible contraction",
                            suprathreshold: "Higher voltages → stronger contractions (recruiting more motor units)"
                        },
                        frequencyResponse: {
                            lowFreq: "1-5 Hz → distinct individual twitches (muscle relaxes between stimuli)",
                            mediumFreq: "10-20 Hz → twitches begin to fuse (incomplete tetanus)",
                            highFreq: "50-100 Hz → smooth sustained contraction (complete tetanus)"
                        },
                        allOrNone: {
                            singleFiber: "Would show all-or-none (but can't see individual fibers)",
                            wholeMuscle: "Shows graded response due to recruitment of motor units"
                        },
                        latency: "~5-10 ms delay between stimulus and contraction (nerve conduction + synaptic delay)",
                        curare: "Blocks neuromuscular transmission but not direct muscle stimulation",
                        fatigue: "Contraction force decreases with sustained stimulation (ATP depletion, ion imbalance)"
                    },
                    dataTable: [
                        ["Stimulus Voltage (V)", "Contraction (0-5 scale)", "Notes"],
                        ["0.0", "0", "No response"],
                        ["0.5", "0", "Subthreshold"],
                        ["1.0", "1", "Threshold - minimal twitch"],
                        ["2.0", "2", "Stronger contraction"],
                        ["3.0", "3", "Recruitment of more fibers"],
                        ["5.0", "4", "Strong contraction"],
                        ["10.0", "5", "Maximal contraction"],
                        ["", "", ""],
                        ["Stimulus Frequency (Hz)", "Contraction Type", ""],
                        ["1", "Individual twitches", "Complete relaxation between"],
                        ["10", "Incomplete tetanus", "Partial fusion"],
                        ["50", "Complete tetanus", "Smooth sustained contraction"],
                        ["100", "Complete tetanus", "No further increase"]
                    ],
                    observations: [
                        "Electrical stimulation of nerve causes muscle contraction",
                        "Threshold voltage needed to elicit response",
                        "Stronger stimuli recruit more muscle fibers (graded response of whole muscle)",
                        "High-frequency stimulation produces sustained contraction (tetanus)",
                        "Muscle fatigues with prolonged stimulation",
                        "Curare blocks nerve-to-muscle signal but muscle can still contract directly"
                    ],
                    analysis: {
                        electricalNature: [
                            "Nerves transmit signals electrically (action potentials)",
                            "Electrical stimulus mimics natural nerve signal",
                            "Voltage threshold reflects activation of voltage-gated Na⁺ channels"
                        ],
                        neuromuscularTransmission: [
                            "Nerve doesn't directly connect to muscle electrically",
                            "Chemical synapse (ACh) mediates signal transfer",
                            "Curare blocks ACh receptors → proves chemical transmission"
                        ],
                        recruitment: [
                            "Increasing voltage activates more nerve fibers (axons have different thresholds)",
                            "Each motor neuron innervates multiple muscle fibers (motor unit)",
                            "More motor units recruited → stronger contraction"
                        ],
                        frequencyCoding: [
                            "Single stimulus → twitch (brief contraction + relaxation)",
                            "Repeated stimuli → summation → tetanus",
                            "This is how body produces smooth, graded movements"
                        ]
                    },
                    connectionToGalvani: {
                        galvaniWasRight: "Animals DO use electricity (action potentials in nerves)",
                        voltaWasRight: "Dissimilar metals CAN generate electricity (battery effect)",
                        synthesis: "Galvani's frog leg twitched due to BOTH: (1) bimetallic current stimulating nerve, AND (2) nerve's natural ability to conduct electrical signals",
                        modernUnderstanding: "Nerves use BIOELECTRICITY (ion movements creating voltage changes), not free electron flow like wires"
                    },
                    results: "Electrical stimulation of the sciatic nerve causes contraction of the gastrocnemius muscle in a dose-dependent manner. Chemical blockade at the neuromuscular junction prevents nerve-induced contraction but not direct muscle stimulation, proving chemical synaptic transmission.",
                    conclusions: [
                        "Nerves use electrical signals (action potentials) to transmit information",
                        "Neuromuscular junction uses chemical transmission (acetylcholine)",
                        "Muscle contraction strength is graded by motor unit recruitment and stimulation frequency",
                        "Galvani's discovery of 'animal electricity' was foundational to modern neuroscience"
                    ],
                    modernApplications: [
                        "Electromyography (EMG) - measure muscle electrical activity for diagnosis",
                        "Nerve conduction studies - diagnose neuropathies",
                        "Functional electrical stimulation (FES) - restore movement in paralysis",
                        "Pacemakers for heart (cardiac muscle stimulation)",
                        "Deep brain stimulation for Parkinson's disease",
                        "Understanding how local anesthetics work (block nerve conduction)"
                    ],
                    extensions: [
                        "Measure nerve conduction velocity (stimulate at two points, measure time difference)",
                        "Test effects of temperature (cold slows conduction)",
                        "Compare myelinated vs. unmyelinated nerve conduction",
                        "Investigate effects of various drugs on neuromuscular transmission",
                        "Use computer simulation to model nerve action potential"
                    ],
                    alternativeNonAnimal: [
                        "Virtual frog dissection and nerve stimulation simulations",
                        "Computer models of action potentials (e.g., Hodgkin-Huxley model)",
                        "Human EMG recording (measure own muscle activity during voluntary contraction)",
                        "Videos and interactive demonstrations of nerve-muscle preparation"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 2: SHERRINGTON'S REFLEX ARC
            // ========================================
            sherrington_reflex_arc: {
                name: "Sherrington's Studies of the Reflex Arc - Coordinated Neural Circuits",
                relatedTopics: ['reflex_arc', 'synaptic_transmission', 'nervous_system_overview'],
                category: 'neural_circuits',
                historicalBackground: {
                    scientist: "Sir Charles Scott Sherrington",
                    years: "1890s-1930s",
                    majorWork: "The Integrative Action of the Nervous System (1906)",
                    contributions: [
                        "Coined term 'synapse' (1897) for junction between neurons",
                        "Described reciprocal innervation (when one muscle contracts, antagonist relaxes)",
                        "Discovered final common path (multiple inputs converge on motor neurons)",
                        "Demonstrated spatial and temporal summation",
                        "Showed reflexes are coordinated, not isolated responses"
                    ],
                    nobelPrize: "1932 Nobel Prize in Physiology/Medicine (shared with Edgar Adrian)",
                    keyObservations: {
                        scratchReflex: "Dog scratches specific spot when skin stimulated → coordinated pattern",
                        reciprocalInnervation: "Flexor contraction paired with extensor relaxation",
                        summation: "Multiple weak stimuli can produce response when single stimulus cannot",
                        integration: "Spinal cord integrates multiple inputs to produce coordinated output"
                    },
                    experimentalApproach: "Studied spinal reflexes in 'spinal' animals (spinal cord severed from brain) to isolate local circuits",
                    significance: [
                        "Proved nervous system works through integrated circuits, not isolated reflexes",
                        "Established concept of neural integration (CNS processes and combines signals)",
                        "Foundation for understanding motor control, posture, locomotion",
                        "Showed how complex behaviors emerge from simple neural circuits"
                    ],
                    quote: "The brain is a great raveled knot and the reflexes are its most elementary components."
                },
                labExperiment: {
                    title: "The Patellar Reflex (Knee-Jerk): A Model Monosynaptic Reflex Arc",
                    hypothesis: "If the patellar reflex is a monosynaptic reflex arc, then tapping the patellar tendon will cause rapid, automatic contraction of the quadriceps muscle and relaxation of the hamstrings (reciprocal innervation), without requiring conscious thought",
                    purpose: "Investigate the components and characteristics of a simple reflex arc, including response time, effect of distraction, reinforcement, and reciprocal innervation",
                    background: {
                        reflex: "Automatic, involuntary response to stimulus",
                        reflexArc: "Neural pathway: receptor → sensory neuron → integration center → motor neuron → effector",
                        patellarReflex: {
                            type: "Stretch reflex (myotatic reflex)",
                            classification: "Monosynaptic (only one synapse in CNS)",
                            purpose: "Maintain posture and muscle tone",
                            pathway: [
                                "Tap patellar tendon → stretches quadriceps muscle",
                                "Muscle spindles (stretch receptors) activated",
                                "Sensory neurons (Ia afferents) → spinal cord (L2-L4)",
                                "Direct synapse onto motor neurons (alpha motor neurons)",
                                "Motor neurons → quadriceps contracts → leg extends",
                                "Simultaneously: interneurons inhibit hamstring motor neurons (reciprocal inhibition)"
                            ]
                        },
                        clinicalUse: "Test integrity of reflex arc, diagnose neurological problems"
                    },
                    variables: {
                        independent: "Stimulus (tendon tap), mental state (distracted vs. focused)",
                        dependent: "Reflex response (kick amplitude, latency)",
                        controlled: ["Subject position", "Tap force", "Tap location", "Relaxation state"]
                    },
                    materials: [
                        "Reflex hammer (rubber head) OR edge of hand",
                        "Chair or examination table (subject sits with legs dangling)",
                        "Ruler or measuring tape (measure kick height)",
                        "Stopwatch or video camera (measure reaction time - optional)",
                        "EMG electrodes and recorder (optional - measure muscle activity)",
                        "Notebook for recording observations",
                        "Multiple subjects (demonstrate variation)"
                    ],
                    safetyPrecautions: [
                        "Tap gently - don't cause pain or injury",
                        "Subject should be relaxed to get clear reflex",
                        "Watch for leg swinging - avoid hitting objects",
                        "Stop if subject experiences discomfort"
                    ],
                    procedure: [
                        "BASIC PATELLAR REFLEX:",
                        "1. Subject sits on edge of chair/table with legs dangling freely (knees bent ~90°)",
                        "2. Locate patellar tendon (just below kneecap)",
                        "3. Instruct subject to relax leg completely",
                        "4. Briskly tap tendon with reflex hammer (or edge of hand)",
                        "5. Observe quadriceps contraction and leg extension (kick)",
                        "6. Record response: 0 = none, 1+ = weak, 2+ = normal, 3+ = brisker than average, 4+ = very brisk with clonus",
                        "7. Repeat 3 times per leg, calculate average response",
                        "",
                        "EXPERIMENT A - EFFECT OF VOLUNTARY CONTRACTION:",
                        "8. Repeat reflex test while subject voluntarily contracts quadriceps (try to extend leg)",
                        "9. Compare reflex amplitude to relaxed state",
                        "10. Prediction: Voluntary contraction may enhance or mask reflex",
                        "",
                        "EXPERIMENT B - JENDRASSIK MANEUVER (Reinforcement):",
                        "11. Have subject hook fingers together and pull hard (isometric arm contraction)",
                        "12. While pulling, tap patellar tendon",
                        "13. Observe: reflex should be enhanced (reinforcement)",
                        "14. Explanation: Motor system priming increases excitability of spinal motor neurons",
                        "",
                        "EXPERIMENT C - EFFECT OF DISTRACTION:",
                        "15. Subject performs mental arithmetic (count backward from 100 by 7s) while reflex tested",
                        "16. Compare reflex amplitude to relaxed baseline",
                        "17. Prediction: Distraction prevents voluntary suppression → may enhance reflex",
                        "",
                        "EXPERIMENT D - RECIPROCAL INHIBITION:",
                        "18. Palpate (feel) hamstring muscle on back of thigh while tapping patellar tendon",
                        "19. Observe: quadriceps contracts, hamstrings relax",
                        "20. Optional: Use EMG electrodes on both muscles to record simultaneously",
                        "21. Result: When quadriceps contracts, hamstrings show reciprocal inhibition",
                        "",
                        "EXPERIMENT E - REACTION TIME COMPARISON:",
                        "22. REFLEX: Measure time from tap to kick (use video or EMG)",
                        "23. VOLUNTARY: Subject told to kick as fast as possible when tendon tapped",
                        "24. Compare latencies:",
                        "    Reflex latency: ~30-50 ms (monosynaptic)",
                        "    Voluntary latency: ~150-200 ms (involves brain)",
                        "25. Conclusion: Reflex much faster than voluntary response",
                        "",
                        "EXPERIMENT F - TESTING BOTH LEGS:",
                        "26. Test both legs and compare (should be symmetrical)",
                        "27. Asymmetry may indicate neurological problem",
                        "",
                        "CLINICAL ASSESSMENT:",
                        "28. Test additional reflexes (Achilles, biceps, triceps) if equipment available",
                        "29. Note: Absent reflexes may indicate nerve damage; hyperactive reflexes may indicate upper motor neuron lesion"
                    ],
                    expectedResults: {
                        normalResponse: "Brisk extension of leg (quadriceps contraction), kick height ~15-30 cm",
                        latency: "30-50 ms from tap to contraction (monosynaptic - very fast)",
                        jendrassik: "Enhanced reflex amplitude (20-50% increase)",
                        voluntaryVsReflex: "Voluntary response much slower (~150-200 ms) than reflex",
                        reciprocalInhibition: "Hamstring relaxes when quadriceps contracts",
                        variability: "Response varies among individuals (age, fitness, neurological status)"
                    },
                    dataTable: [
                        ["Condition", "Kick Height (cm)", "Response Rating (0-4+)", "Latency (ms)"],
                        ["Baseline (relaxed)", "20", "2+", "40"],
                        ["Voluntary contraction", "Variable", "Masked/enhanced", "N/A"],
                        ["Jendrassik maneuver", "28", "3+", "38"],
                        ["Distraction (math)", "24", "2+ to 3+", "42"],
                        ["Voluntary kick (not reflex)", "Variable", "N/A", "180"],
                        ["", "", "", ""],
                        ["Subject", "Left Leg", "Right Leg", "Symmetrical?"],
                        ["Subject 1", "2+", "2+", "Yes"],
                        ["Subject 2", "2+", "2+", "Yes"],
                        ["Subject 3", "1+", "1+", "Yes (hyporeflexia)"]
                    ],
                    observations: [
                        "Reflex occurs automatically without conscious thought",
                        "Response is very rapid (~40 ms latency)",
                        "Jendrassik maneuver enhances reflex (CNS facilitation)",
                        "Reflex faster than voluntary movement",
                        "Quadriceps contracts while hamstrings relax (reciprocal inhibition)",
                        "Difficult to voluntarily suppress reflex"
                    ],
                    analysis: {
                        monosynaptic: [
                            "Only one synapse (sensory → motor neuron) in spinal cord",
                            "This minimizes latency (fastest possible reflex)",
                            "Compare to polysynaptic reflexes (e.g., withdrawal) which have longer latencies"
                        ],
                        reciprocalInnervation: [
                            "Sherrington's principle: contraction of agonist paired with relaxation of antagonist",
                            "Mechanism: Ia sensory neuron branches:",
                            "  - Excites quadriceps motor neurons (monosynaptic)",
                            "  - Activates inhibitory interneuron → inhibits hamstring motor neurons",
                            "Result: Coordinated movement (can't contract both simultaneously)"
                        ],
                        functionalPurpose: {
                            postureControl: "Maintains upright posture (sudden stretch triggers contraction)",
                            muscleTone: "Continuous low-level contraction via stretch reflexes",
                            protection: "Prevents excessive muscle stretch (injury prevention)"
                        },
                        reinforcement: [
                            "Jendrassik maneuver increases spinal motor neuron excitability",
                            "Mechanism: Descending facilitation from brainstem",
                            "Clinical use: Enhance weak reflexes for diagnosis"
                        ],
                        clinicalSignificance: {
                            absent: "Peripheral nerve damage, muscle disease, severe spinal cord damage",
                            diminished: "Neuropathy, radiculopathy, old age",
                            normal: "Intact reflex arc",
                            hyperactive: "Upper motor neuron lesion (brain/spinal cord damage above reflex level)",
                            clonus: "Rhythmic oscillations (severe hyperreflexia)"
                        }
                    },
                    connectionToSherrington: {
                        integration: "Even simple reflex involves coordination (reciprocal inhibition)",
                        finalCommonPath: "Multiple sensory inputs converge on same motor neurons",
                        summation: "Multiple weak stimuli can summate to trigger reflex",
                        spinalCircuit: "Reflex arc demonstrates how spinal cord integrates information without brain"
                    },
                    results: "The patellar reflex demonstrates a monosynaptic stretch reflex with latency of ~40 ms. Jendrassik maneuver enhances the reflex, showing central facilitation. Reciprocal inhibition of hamstrings during quadriceps contraction demonstrates Sherrington's principle of coordinated neural control.",
                    conclusions: [
                        "Patellar reflex is monosynaptic stretch reflex with very short latency",
                        "Reflex occurs without conscious control (spinal circuit)",
                        "Reciprocal innervation ensures coordinated muscle activity",
                        "CNS can modulate reflexes (reinforcement, suppression)",
                        "Reflexes are fundamental building blocks of motor control"
                    ],
                    realWorldApplications: [
                        "Neurological examination (diagnose nerve/spinal cord damage)",
                        "Assessing infant development (primitive reflexes)",
                        "Understanding spinal cord injury (loss of reflexes below lesion initially, then hyperreflexia)",
                        "Physical therapy (use reflexes to facilitate movement)",
                        "Sports science (reflex training for faster reactions)"
                    ],
                    extensions: [
                        "Test other stretch reflexes (Achilles, biceps, brachioradialis)",
                        "Investigate Babinski reflex (abnormal in adults → CNS damage)",
                        "Use EMG to precisely measure latency and muscle activation pattern",
                        "Study reflex plasticity (does repeated testing change response?)",
                        "Compare reflexes across different populations (athletes, elderly, children)"
                    ],
                    modernInvestigations: [
                        "H-reflex (electrical stimulation of nerve) - research tool",
                        "Spinal cord injury research (restoring reflexes)",
                        "Central pattern generators (rhythmic locomotion reflexes)",
                        "Neuromodulation of reflexes (how brain adjusts reflex strength)"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 3: LOEWI'S ACETYLCHOLINE
            // ========================================
            loewi_chemical_transmission: {
                name: "Loewi's 'Vagusstoff' Experiment - Discovery of Chemical Neurotransmission",
                relatedTopics: ['synaptic_transmission', 'autonomic_nervous_system', 'neurotransmitters'],
                category: 'neurochemistry',
                historicalBackground: {
                    scientist: "Otto Loewi",
                    year: "1921 (Easter Sunday night)",
                    experiment: "Two frog hearts in separate chambers, vagus nerve stimulation",
                    dreamStory: "Loewi dreamed of the experiment design, woke up and wrote notes, but couldn't read them next morning. Fortunately, the dream returned the following night, and he immediately went to lab at 3 AM to perform experiment",
                    discovery: "Vagus nerve releases chemical substance (later identified as acetylcholine) that slows heart rate",
                    originalName: "Vagusstoff (vagus substance)",
                    nobelPrize: "1936 Nobel Prize in Physiology/Medicine (shared with Henry Dale)",
                    context: {
                        debate: "Did nerves communicate electrically or chemically? Most believed electrical",
                        loewisHypothesis: "Chemical mediators exist",
                        significance: "Proved chemical neurotransmission, revolutionized neuroscience and pharmacology"
                    },
                    followUp: {
                        henryDale: "Identified 'Vagusstoff' as acetylcholine (ACh), studied its properties",
                        sympathin: "Later identified as norepinephrine (sympathetic neurotransmitter)",
                        expansion: "Led to discovery of dozens of neurotransmitters"
                    },
                    quote: "The individual who has experienced this surprising event will always rank it among his deepest and most enduring impressions.",
                    impact: [
                        "Founded neuropharmacology (drugs targeting neurotransmitter systems)",
                        "Explained how autonomic nervous system works",
                        "Enabled development of drugs for heart disease, hypertension, psychiatric disorders",
                        "Shifted paradigm from electrical to chemical view of neural communication"
                    ]
                },
                labExperiment: {
                    title: "Demonstration of Acetylcholine and Chemical Neurotransmission Using Isolated Heart Preparation",
                    hypothesis: "If the vagus nerve releases a chemical substance (acetylcholine) to slow heart rate, then perfusion fluid from a vagus-stimulated heart will slow a second, unstimulated heart when applied to it",
                    purpose: "Replicate Loewi's classic experiment demonstrating chemical neurotransmission, and investigate the properties of acetylcholine",
                    ethicalNote: "This experiment traditionally uses frog hearts. Follow institutional guidelines. Computer simulations can substitute.",
                    background: {
                        vagusNerve: {
                            type: "Cranial nerve X, parasympathetic",
                            heartEffect: "Slows heart rate, decreases force of contraction",
                            mechanism: "Releases acetylcholine at cardiac muscle",
                            receptors: "Muscarinic ACh receptors on heart (M2 subtype)"
                        },
                        acetylcholine: {
                            synthesis: "Choline + Acetyl-CoA (by choline acetyltransferase)",
                            degradation: "Acetylcholinesterase (AChE) breaks down very rapidly",
                            receptors: "Nicotinic (ionotropic) and muscarinic (metabotropic)",
                            effects: "Heart (slow), skeletal muscle (contract), glands (secrete)"
                        },
                        loewisSetup: "Two frog hearts, vagus nerves, connected saline circulation"
                    },
                    variables: {
                        independent: "Vagus nerve stimulation (yes/no), perfusion fluid transfer",
                        dependent: "Heart rate (beats per minute)",
                        controlled: ["Frog species", "Temperature", "Ringer's solution composition", "Oxygenation"]
                    },
                    materials: [
                        "Two freshly euthanized frogs (Rana pipiens or similar)",
                        "Dissection tools (fine scissors, forceps)",
                        "Two glass perfusion chambers (or beakers)",
                        "Frog Ringer's solution (oxygenated, room temperature or slightly cooled)",
                        "Electrical stimulator (deliver pulses to vagus nerve)",
                        "Electrodes",
                        "Tubing and clamps for transferring fluid",
                        "Kymograph OR video camera (record heart contractions)",
                        "Force transducer OR simple lever to record heart beats",
                        "Stopwatch",
                        "Optional: Acetylcholine solution (1 μM - 10 μM)",
                        "Optional: Atropine (muscarinic antagonist)",
                        "Optional: Physostigmine (AChE inhibitor)",
                        "Ice to slow metabolism if needed"
                    ],
                    safetyPrecautions: [
                        "Follow institutional animal use guidelines",
                        "Wear gloves",
                        "Handle electrical stimulator carefully",
                        "Dispose of biological materials properly",
                        "If using drugs (atropine, physostigmine), follow safety protocols"
                    ],
                    procedure: [
                        "PREPARATION OF FROG HEARTS:",
                        "1. Euthanize two frogs humanely (pithing)",
                        "2. Expose heart by cutting through chest (use scissors to cut ribs)",
                        "3. HEART 1 (Donor): Carefully isolate vagus nerve running alongside heart",
                        "4. Cut nerve proximally but leave attached to heart",
                        "5. Excise heart with vagus nerve attached, place in chamber with oxygenated Ringer's",
                        "6. HEART 2 (Recipient): Excise heart WITHOUT vagus nerve, place in separate chamber",
                        "7. Both hearts should beat spontaneously (frog hearts continue beating outside body)",
                        "8. Allow 5-10 min for stabilization",
                        "9. Record baseline heart rate for both hearts (count beats for 30 sec, multiply by 2)",
                        "",
                        "LOEWI'S CLASSIC EXPERIMENT - Transfer Perfusate:",
                        "10. Count and record Donor heart baseline rate",
                        "11. Electrically stimulate vagus nerve of Donor heart:",
                        "    - Settings: 1-5 V, 10-20 Hz, 1 ms pulses, for 30-60 seconds",
                        "12. Observe Donor heart: rate should DECREASE (vagal slowing)",
                        "13. Continue stimulation for 1 minute",
                        "14. IMMEDIATELY collect ~5-10 ml of perfusion fluid from Donor heart chamber (Vagusstoff!)",
                        "15. Transfer fluid to Recipient heart chamber (replace some of its Ringer's)",
                        "16. Observe Recipient heart rate: should DECREASE (even though its vagus was not stimulated)",
                        "17. Record heart rate every 15 seconds for 3-5 minutes",
                        "18. Expected: Recipient heart slows, then gradually returns to baseline (as ACh is degraded)",
                        "",
                        "CONTROL - No Stimulation:",
                        "19. Repeat transfer but WITHOUT stimulating Donor vagus",
                        "20. Transfer fluid from unstimulated Donor → Recipient",
                        "21. Observe: Recipient heart rate should NOT change",
                        "22. Conclusion: Chemical is released only when vagus stimulated",
                        "",
                        "EXPERIMENT A - Direct ACh Application:",
                        "23. Prepare dilute acetylcholine solution (1-10 μM in Ringer's)",
                        "24. Add small amount (0.5-1 ml) to Recipient heart",
                        "25. Observe: Heart rate should DECREASE (mimics vagal stimulation)",
                        "26. Wash out with fresh Ringer's, observe recovery",
                        "",
                        "EXPERIMENT B - Atropine Blockade:",
                        "27. Add atropine (muscarinic antagonist, ~1 μM) to Recipient heart",
                        "28. Wait 2-3 minutes for atropine to bind receptors",
                        "29. Now add ACh or stimulated-vagus perfusate",
                        "30. Observe: Heart rate should NOT decrease (atropine blocks ACh effect)",
                        "31. Conclusion: ACh acts on muscarinic receptors",
                        "",
                        "EXPERIMENT C - AChE Inhibitor (Physostigmine):",
                        "32. Add physostigmine (AChE inhibitor, ~0.1 μM) to Recipient heart",
                        "33. Transfer stimulated perfusate as before",
                        "34. Observe: Effect should be PROLONGED (ACh not degraded quickly)",
                        "35. Conclusion: Normally, AChE rapidly breaks down ACh",
                        "",
                        "WASHOUT AND RECOVERY:",
                        "36. For all experiments, observe recovery when perfusate replaced with fresh Ringer's",
                        "37. Record how long it takes for heart rate to return to baseline"
                    ],
                    expectedResults: {
                        baselineRate: "Frog heart: 40-60 beats/min (varies with temperature)",
                        vagalStimulation: "Donor heart rate decreases by 20-50% during stimulation",
                        transferEffect: "Recipient heart rate decreases by 15-40% (slightly less than donor)",
                        latency: "1-2 minutes for transferred fluid to take effect (diffusion time)",
                        duration: "Effect lasts 2-5 minutes, then recovery (ACh degraded)",
                        directACh: "Similar slowing as vagal stimulation",
                        atropine: "Blocks ACh effect completely (no slowing)",
                        physostigmine: "Prolongs ACh effect (slower recovery)"
                    },
                    dataTable: [
                        ["Time (min)", "Donor Heart (BPM)", "Recipient Heart (BPM)", "Treatment"],
                        ["0", "50", "52", "Baseline"],
                        ["1", "30", "52", "Vagus stimulation (donor only)"],
                        ["2", "28", "52", "Still stimulating"],
                        ["3", "30", "38", "Transfer perfusate to recipient"],
                        ["4", "48", "35", "Stop stimulation, donor recovers"],
                        ["5", "50", "40", "Recovery"],
                        ["7", "50", "50", "Both back to baseline"],
                        ["", "", "", ""],
                        ["Experiment", "Heart Rate Change", "Interpretation"],
                        ["Vagal stim + transfer", "-30%", "Chemical released"],
                        ["No stim + transfer", "0%", "No chemical without stim"],
                        ["Direct ACh", "-35%", "ACh mimics vagus"],
                        ["ACh + Atropine", "0%", "Atropine blocks receptor"],
                        ["ACh + Physostigmine", "-40%, prolonged", "AChE inhibited"]
                    ],
                    observations: [
                        "Vagus nerve stimulation slows donor heart",
                        "Perfusate from stimulated heart slows recipient heart (no nerve stimulation needed)",
                        "Effect is transient (chemical is degraded)",
                        "Direct ACh application mimics vagal effect",
                        "Atropine blocks effect (muscarinic receptors)",
                        "Physostigmine prolongs effect (prevents ACh breakdown)"
                    ],
                    analysis: {
                        chemicalTransmission: [
                            "Vagus nerve releases CHEMICAL into perfusion fluid",
                            "Chemical (ACh) diffuses to heart muscle and slows it",
                            "Effect is transferable to second heart (not electrical)",
                            "This PROVES chemical neurotransmission (Loewi's conclusion)"
                        ],
                        acetylcholine: [
                            "Chemical identified as acetylcholine (by Henry Dale)",
                            "ACh binds muscarinic receptors on heart (M2)",
                            "M2 receptor activation → K⁺ channels open → hyperpolarization → slower pacemaker",
                            "ACh is rapidly degraded by acetylcholinesterase (effect is brief)"
                        ],
                        parasympatheticControl: [
                            "Vagus nerve is parasympathetic (rest and digest)",
                            "Slows heart rate, decreases cardiac output",
                            "Opposite of sympathetic (fight or flight, speeds heart via norepinephrine)"
                        ],
                        drugImplications: [
                            "Atropine (ACh blocker) speeds heart (used in bradycardia)",
                            "AChE inhibitors (like physostigmine) prolong ACh effects (treat myasthenia gravis, Alzheimer's)",
                            "Muscarinic agonists (pilocarpine) can slow heart, stimulate glands"
                        ]
                    },
                    connectionToLoewi: {
                        paradigmShift: "Before Loewi: debate whether nerves worked electrically or chemically",
                        proof: "Loewi's experiment definitively proved chemical transmission",
                        simplicity: "Elegant, simple design with profound implications",
                        serendipity: "Dream-inspired - shows importance of intuition in science",
                        legacy: "Opened entire field of neuropharmacology"
                    },
                    results: "Perfusion fluid from a vagus-stimulated frog heart, when transferred to a second heart, decreases the second heart's rate. This effect is mimicked by acetylcholine and blocked by atropine, proving that the vagus nerve releases acetylcholine as a chemical neurotransmitter.",
                    conclusions: [
                        "Vagus nerve communicates with heart via chemical messenger (acetylcholine)",
                        "Chemical transmission can be demonstrated by transferring perfusate",
                        "Acetylcholine acts on muscarinic receptors to slow heart",
                        "Acetylcholinesterase rapidly degrades ACh (terminating signal)",
                        "Loewi's experiment proved chemical neurotransmission, founding modern neuroscience"
                    ],
                    realWorldApplications: [
                        "Understanding autonomic control of heart (vagal tone)",
                        "Cardiac drugs: atropine (treat bradycardia), beta-blockers (heart rate control)",
                        "Anesthesia: neuromuscular blockers (curare-like drugs)",
                        "Treating Alzheimer's (AChE inhibitors boost ACh in brain)",
                        "Myasthenia gravis treatment (AChE inhibitors enhance neuromuscular transmission)",
                        "Nerve agent antidotes (atropine counteracts excess ACh)"
                    ],
                    extensions: [
                        "Test effect of temperature on ACh release and degradation",
                        "Quantify ACh concentration needed for half-maximal effect (dose-response)",
                        "Compare vagal vs. sympathetic effects (use norepinephrine)",
                        "Investigate other muscarinic agonists and antagonists",
                        "Study desensitization (repeated ACh exposure)",
                        "Use modern techniques (HPLC, immunoassay) to directly measure ACh"
                    ],
                    modernPerspective: [
                        "Loewi's discovery led to identification of >100 neurotransmitters",
                        "Chemical transmission is now central to understanding brain function",
                        "Psychiatric medications target neurotransmitter systems (SSRIs, antipsychotics)",
                        "Parkinson's disease treated by boosting dopamine (another neurotransmitter)",
                        "Addiction research focuses on neurotransmitter systems (dopamine reward pathway)"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 4: HODGKIN-HUXLEY ACTION POTENTIAL
            // ========================================
            
            hodgkin_huxley_action_potential: {
                name: "Hodgkin and Huxley's Squid Giant Axon Experiments - Ionic Basis of Action Potential",
                relatedTopics: ['action_potential', 'neuron_structure', 'membrane_potential'],
                category: 'electrophysiology',
                historicalBackground: {
                    scientists: "Alan Hodgkin and Andrew Huxley (+ Bernard Katz)",
                    years: "1939, 1945-1952",
                    location: "Marine Biological Laboratory, Plymouth, UK",
                    preparation: "Squid giant axon (Loligo) - up to 1 mm diameter",
                    whySquid: {
                        giantAxon: "Controls jet propulsion in squid, extremely large (visible to naked eye)",
                        advantages: [
                            "Large enough to insert electrodes inside (voltage clamp)",
                            "Can perfuse axoplasm (change internal ion composition)",
                            "Can measure currents directly"
                        ]
                    },
                    majorDiscoveries: [
                        "Action potential is due to sequential opening of voltage-gated Na⁺ and K⁺ channels",
                        "Na⁺ influx causes depolarization (rising phase)",
                        "K⁺ efflux causes repolarization (falling phase)",
                        "Channels are voltage-dependent (open/close based on membrane potential)",
                        "Developed mathematical model predicting action potential shape"
                    ],
                    voltageClamptechnique: {
                        innovation: "Maintain membrane at set voltage, measure current needed",
                        result: "Separate Na⁺ and K⁺ currents, determine channel kinetics",
                        setup: "Two electrodes: one measures voltage, one injects current to clamp voltage"
                    },
                    nobelPrize: "1963 Nobel Prize in Physiology/Medicine (Hodgkin, Huxley, Eccles)",
                    HHModel: {
                        name: "Hodgkin-Huxley equations",
                        description: "Mathematical model of action potential based on ion channel conductances",
                        equations: "Set of differential equations describing m, h, n gates (activation/inactivation)",
                        impact: "First quantitative model of biological process, foundation for computational neuroscience",
                        predictive: "Model accurately predicted action potential shape, conduction velocity"
                    },
                    significance: [
                        "Explained molecular mechanism of action potential",
                        "Introduced voltage clamp technique (now standard in electrophysiology)",
                        "Founded computational neuroscience (modeling neural activity)",
                        "Led to discovery and cloning of ion channels (patch clamp later)"
                    ],
                    quote: "The agreement between the theoretical and experimental curves is remarkably good." - Hodgkin & Huxley, 1952
                },
                labExperiment: {
                    title: "Investigating the Ionic Basis of Action Potentials Using Voltage Recording and Ion Substitution",
                    hypothesis: "If action potentials are generated by sequential opening of Na⁺ and K⁺ channels, then: (1) removing extracellular Na⁺ will abolish the rising phase, (2) blocking K⁺ channels will prolong repolarization, and (3) changing ion concentrations will shift action potential characteristics predictably",
                    purpose: "Investigate the roles of Na⁺ and K⁺ ions in action potential generation, replicating key aspects of Hodgkin and Huxley's findings",
                    ethicalNote: "Original experiments used squid giant axons. Modern labs use computer simulations, or alternatives like earthworm giant axons. Many institutions now use virtual labs.",
                    background: {
                        ionicBasis: {
                            restingPotential: "~-70 mV, due to K⁺ leak and Na⁺/K⁺ pump",
                            depolarization: "Na⁺ influx (voltage-gated Na⁺ channels open)",
                            repolarization: "K⁺ efflux (voltage-gated K⁺ channels open, Na⁺ channels inactivate)",
                            hyperpolarization: "K⁺ channels slow to close (undershoot)"
                        },
                        nernstEquation: {
                            formula: "E_ion = (RT/zF) × ln([ion]_out / [ion]_in)",
                            meaning: "Equilibrium potential for an ion based on concentration gradient",
                            values: {
                                E_Na: "+60 mV (high outside)",
                                E_K: "-90 mV (high inside)",
                                E_Cl: "-70 mV"
                            }
                        },
                        GHKEquation: "Goldman-Hodgkin-Katz equation - membrane potential when multiple ions permeable"
                    },
                    variables: {
                        independent: "Extracellular ion composition (Na⁺, K⁺), pharmacological blockers (TTX, TEA)",
                        dependent: "Action potential amplitude, shape, conduction velocity",
                        controlled: ["Temperature", "Axon preparation", "Stimulation parameters"]
                    },
                    materials: [
                        "ORIGINAL (not typically available): Fresh squid, dissection tools, Perfusion setup",
                        "MODERN ALTERNATIVES:",
                        "Option 1: Earthworm giant fiber preparation (smaller but accessible)",
                        "Option 2: Computer simulation (HH model software, e.g., NEURON, Virtual Squid)",
                        "Option 3: Demonstration using published data",
                        "",
                        "For virtual/simulation:",
                        "Computer with simulation software (HHsim, Virtual Squid, or equivalent)",
                        "OR: Voltage clamp simulator",
                        "",
                        "For actual recording (advanced):",
                        "Microelectrode amplifier",
                        "Oscilloscope or computer interface",
                        "Micromanipulator",
                        "Glass microelectrodes (pulled to fine tip, filled with KCl)",
                        "Faraday cage (reduce electrical noise)",
                        "Perfusion system with different saline solutions:",
                        "  - Normal artificial seawater (ASW): 460 mM NaCl, 10 mM KCl, 10 mM CaCl₂, 50 mM MgCl₂",
                        "  - Low Na⁺ ASW (replace NaCl with choline chloride or TEA-Cl)",
                        "  - Normal ASW + TTX (tetrodotoxin, Na⁺ channel blocker)",
                        "  - Normal ASW + TEA (tetraethylammonium, K⁺ channel blocker)",
                        "Stimulator (deliver current pulses)",
                        "Recording equipment"
                    ],
                    safetyPrecautions: [
                        "TTX is EXTREMELY TOXIC - use only with training, in licensed lab",
                        "Wear gloves, work in fume hood if using toxins",
                        "Dispose of chemicals properly",
                        "Electrical equipment - avoid shocks",
                        "If using animals, follow ethical guidelines"
                    ],
                    procedure: [
                        "NOTE: This procedure describes a simulation approach (most practical for teaching). Original squid axon procedure is highly specialized.",
                        "",
                        "APPROACH 1: COMPUTER SIMULATION (Recommended)",
                        "",
                        "SETUP:",
                        "1. Open Hodgkin-Huxley simulation software (e.g., HHsim, NEURON with squid axon model)",
                        "2. Set initial parameters to match physiological conditions:",
                        "   - External [Na⁺] = 460 mM, [K⁺] = 10 mM, [Cl⁻] = 540 mM",
                        "   - Internal [Na⁺] = 50 mM, [K⁺] = 400 mM, [Cl⁻] = 40 mM",
                        "   - Temperature = 6.3°C (original HH experiments) or 18°C",
                        "   - Resting potential should settle at ~-70 mV",
                        "",
                        "EXPERIMENT 1: NORMAL ACTION POTENTIAL",
                        "3. Deliver suprathreshold current pulse (e.g., 10 μA, 1 ms duration)",
                        "4. Record action potential waveform",
                        "5. Measure:",
                        "   - Resting potential",
                        "   - Threshold voltage (~-55 mV)",
                        "   - Peak amplitude (~+40 mV, total swing ~110 mV)",
                        "   - Duration (~2-3 ms)",
                        "   - Undershoot (hyperpolarization)",
                        "6. Note shape: rapid rise, slower fall",
                        "",
                        "EXPERIMENT 2: EFFECT OF REDUCING EXTERNAL Na⁺",
                        "7. Reduce external [Na⁺] in simulation:",
                        "   - Run at 100% normal (460 mM)",
                        "   - Run at 50% (230 mM, replace with choline)",
                        "   - Run at 10% (46 mM)",
                        "   - Run at 0% (no Na⁺)",
                        "8. For each condition, stimulate and record action potential",
                        "9. Observe:",
                        "   - Peak amplitude decreases as [Na⁺] decreases",
                        "   - At 0% Na⁺, no action potential (or very small, due to Ca²⁺)",
                        "10. Plot: Peak amplitude vs. [Na⁺]_out",
                        "11. Interpretation: Na⁺ influx drives depolarization",
                        "",
                        "EXPERIMENT 3: EFFECT OF TTX (Sodium Channel Blocker)",
                        "12. Return [Na⁺] to normal",
                        "13. Add simulated TTX (blocks Na⁺ channels)",
                        "14. Stimulate: Action potential should be abolished",
                        "15. Interpretation: Voltage-gated Na⁺ channels essential for action potential",
                        "",
                        "EXPERIMENT 4: EFFECT OF REDUCING EXTERNAL K⁺",
                        "16. Remove TTX, set normal ions",
                        "17. Reduce external [K⁺]:",
                        "   - Normal: 10 mM",
                        "   - Low: 2 mM",
                        "18. Observe:",
                        "   - Resting potential becomes more negative (hyperpolarized)",
                        "   - Action potential shape relatively normal but starts from lower baseline",
                        "19. Interpretation: K⁺ equilibrium potential shifts (Nernst equation)",
                        "",
                        "EXPERIMENT 5: EFFECT OF TEA (Potassium Channel Blocker)",
                        "20. Normal ions, add TEA (blocks voltage-gated K⁺ channels)",
                        "21. Stimulate and observe:",
                        "   - Rising phase normal (Na⁺ channels unaffected)",
                        "   - Repolarization PROLONGED (K⁺ channels blocked)",
                        "   - Action potential much longer duration",
                        "   - May see oscillations or plateau",
                        "22. Interpretation: K⁺ channels essential for repolarization",
                        "",
                        "EXPERIMENT 6: VOLTAGE CLAMP (Advanced simulation)",
                        "23. Switch to voltage clamp mode in simulation",
                        "24. Hold potential at -70 mV, then step to different voltages:",
                        "   - Step to -40 mV, 0 mV, +20 mV, +40 mV",
                        "25. Record current at each voltage step",
                        "26. Observe:",
                        "   - Inward current (Na⁺) first (rapid, transient)",
                        "   - Outward current (K⁺) follows (slower, sustained)",
                        "27. Separate currents using blockers:",
                        "   - Add TTX: eliminates early inward current (Na⁺)",
                        "   - Add TEA: eliminates late outward current (K⁺)",
                        "28. Plot I-V curves (current vs. voltage)",
                        "",
                        "EXPERIMENT 7: CONDUCTION VELOCITY",
                        "29. If simulation allows, model axon length",
                        "30. Stimulate at one end, measure time to reach other end",
                        "31. Calculate velocity = distance / time",
                        "32. Compare:",
                        "   - Normal: ~20 m/s (giant axon, unmyelinated)",
                        "   - Reduced diameter (in simulation): slower",
                        "   - Myelinated (if model allows): ~100+ m/s (saltatory)"
                    ],
                    expectedResults: {
                        normalAP: {
                            resting: "-70 mV",
                            threshold: "-55 mV",
                            peak: "+40 mV",
                            amplitude: "~110 mV",
                            duration: "2-3 ms (squid, 6°C)",
                            phases: "Rising (0.3 ms), falling (1-2 ms), undershoot"
                        },
                        reducedNa: {
                            effect: "Reduced peak amplitude (proportional to [Na⁺])",
                            zeroNa: "No action potential",
                            nernst: "Peak approaches E_Na (calculated from [Na⁺])"
                        },
                        TTX: {
                            effect: "No action potential (Na⁺ channels blocked)",
                            proof: "Na⁺ influx essential for depolarization"
                        },
                        reducedK: {
                            effect: "Hyperpolarized resting potential, normal AP shape",
                            nernst: "E_K becomes more negative (Nernst)"
                        },
                        TEA: {
                            effect: "Prolonged action potential (repolarization slowed)",
                            proof: "K⁺ channels essential for terminating action potential"
                        },
                        voltageClamp: {
                            inwardCurrent: "Early, transient (Na⁺, activated by depolarization, inactivates)",
                            outwardCurrent: "Late, sustained (K⁺, activated more slowly)",
                            separation: "TTX blocks inward, TEA blocks outward"
                        }
                    },
                    dataTable: [
                        ["Condition", "Resting (mV)", "Peak (mV)", "Amplitude (mV)", "Duration (ms)"],
                        ["Normal", "-70", "+40", "110", "2.5"],
                        ["50% Na⁺", "-70", "+20", "90", "2.5"],
                        ["0% Na⁺", "-70", "-55", "15 (tiny)", "N/A"],
                        ["TTX", "-70", "-70", "0", "N/A"],
                        ["2 mM K⁺ (low)", "-85", "+40", "125", "2.5"],
                        ["TEA", "-70", "+40", "110", "15 (prolonged)"],
                        ["", "", "", "", ""],
                        ["Voltage Clamp Step", "Early Current", "Late Current", "Interpretation"],
                        ["0 mV", "Inward (Na⁺)", "Outward (K⁺)", "Both channels activated"],
                        ["0 mV + TTX", "None", "Outward (K⁺)", "Only K⁺ current"],
                        ["0 mV + TEA", "Inward (Na⁺)", "None", "Only Na⁺ current"]
                    ],
                    observations: [
                        "Action potential requires both Na⁺ influx (rising phase) and K⁺ efflux (falling phase)",
                        "Removing external Na⁺ reduces action potential amplitude",
                        "TTX blocks Na⁺ channels → no action potential",
                        "TEA blocks K⁺ channels → prolonged action potential",
                        "Voltage clamp separates Na⁺ and K⁺ currents temporally",
                        "Na⁺ current is rapid and inactivating; K⁺ current is slower and sustained"
                    ],
                    analysis: {
                        ionicMechanism: [
                            "RESTING STATE: K⁺ leak channels open, membrane at -70 mV (near E_K)",
                            "THRESHOLD: Stimulus depolarizes to -55 mV",
                            "RISING PHASE: Voltage-gated Na⁺ channels open → Na⁺ rushes IN → rapid depolarization to +40 mV",
                            "PEAK: Membrane potential approaches E_Na (+60 mV) but doesn't reach it (K⁺ also permeable)",
                            "FALLING PHASE: Na⁺ channels inactivate + K⁺ channels open → K⁺ rushes OUT → repolarization",
                            "UNDERSHOOT: K⁺ channels slow to close → temporary hyperpolarization below resting",
                            "RECOVERY: K⁺ channels close, Na⁺/K⁺ pump restores gradients"
                        ],
                        nernstPrediction: [
                            "Peak of action potential approaches E_Na (Nernst potential for Na⁺)",
                            "Changing [Na⁺]_out changes E_Na → changes peak amplitude",
                            "Formula: E_Na = 58 mV × log([Na⁺]_out / [Na⁺]_in) at 20°C",
                            "Example: Normal [Na⁺]_out = 460 mM, [Na⁺]_in = 50 mM → E_Na ≈ +55 mV",
                            "Half [Na⁺]_out → E_Na ≈ +37 mV (peak reduced)"
                        ],
                        channelKinetics: {
                            NaChannels: {
                                states: "Closed (at rest) → Open (on depolarization) → Inactivated (automatic, voltage-dependent)",
                                kinetics: "Fast activation (~0.1 ms), fast inactivation (~1 ms)",
                                recovery: "Requires repolarization (remove inactivation)"
                            },
                            KChannels: {
                                states: "Closed (at rest) → Open (on depolarization)",
                                kinetics: "Slower activation (~1-2 ms), sustained opening",
                                noInactivation: "Most K⁺ channels don't inactivate during action potential"
                            }
                        },
                        HHmodel: {
                            gatesNa: "m³h (3 activation gates, 1 inactivation gate)",
                            gatesK: "n⁴ (4 activation gates)",
                            equations: "Differential equations for m, h, n based on voltage",
                            prediction: "Model accurately reproduces action potential shape, threshold, refractory period",
                            legacy: "First computational model in biology, basis for modern neural modeling"
                        }
                    },
                    connectionToHodgkinHuxley: {
                        voltageClamptechnique: "Allowed separation of Na⁺ and K⁺ currents (couldn't be done with simple recording)",
                        mathematicalModel: "HH equations quantitatively describe channel behavior",
                        predictions: [
                            "Action potential shape and amplitude",
                            "Conduction velocity (depends on axon diameter, myelination)",
                            "Refractory periods (due to Na⁺ inactivation)",
                            "Threshold behavior",
                            "Response to current injection"
                        ],
                        verification: "Model predictions matched experimental data remarkably well",
                        impact: "Established that complex biological phenomena can be understood through quantitative models"
                    },
                    results: "Action potential generation requires sequential activation of voltage-gated Na⁺ channels (depolarization) followed by voltage-gated K⁺ channels (repolarization). Removing external Na⁺ or blocking Na⁺ channels with TTX abolishes action potentials. Blocking K⁺ channels with TEA prolongs the action potential by preventing repolarization.",
                    conclusions: [
                        "Action potentials are generated by voltage-gated Na⁺ and K⁺ channels",
                        "Na⁺ influx causes rapid depolarization (rising phase)",
                        "K⁺ efflux causes repolarization (falling phase)",
                        "Channel kinetics (activation/inactivation) determine action potential shape",
                        "Hodgkin-Huxley model successfully explains action potential mechanism quantitatively",
                        "Understanding ionic basis enabled development of drugs targeting ion channels"
                    ],
                    realWorldApplications: [
                        "Local anesthetics (lidocaine, novocaine) block Na⁺ channels → prevent pain signals",
                        "Antiarrhythmic drugs target cardiac Na⁺ or K⁺ channels",
                        "Anticonvulsants (phenytoin) block Na⁺ channels → reduce seizures",
                        "Understanding TTX poisoning (puffer fish) and treatment",
                        "Cardiac pacemaker dysfunction (ion channel mutations - channelopathies)",
                        "Multiple sclerosis (demyelination affects action potential propagation)",
                        "Computational neuroscience (brain simulations, neural prosthetics)"
                    ],
                    extensions: [
                        "Investigate temperature effects on action potential (Q10 ~3 for channel kinetics)",
                        "Model effects of different axon diameters on conduction velocity",
                        "Simulate myelinated axon (saltatory conduction)",
                        "Study refractory periods (absolute vs. relative)",
                        "Investigate accommodation (slow depolarization doesn't trigger action potential)",
                        "Model cardiac action potential (different channels, plateau phase)",
                        "Study channelopathies (mutations in Na⁺ or K⁺ channels causing disease)"
                    ],
                    modernTechniques: [
                        "Patch clamp (Neher & Sakmann, 1976) - record single channel currents",
                        "Molecular cloning of channel genes (1980s-1990s)",
                        "Optogenetics (light-activated channels) for precise control",
                        "Voltage-sensitive dyes and calcium imaging",
                        "Computational modeling (NEURON, GENESIS software)",
                        "Cryo-EM structures of channels at atomic resolution"
                    ],
                    historicalImpact: [
                        "Proved that electrical signaling has molecular basis (ion channels)",
                        "Demonstrated power of quantitative modeling in biology",
                        "Launched computational neuroscience field",
                        "Inspired development of voltage clamp and patch clamp techniques",
                        "Led to drug discovery targeting ion channels (major pharmaceutical category)",
                        "Explained basis of many neurological disorders"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 5: BANTING AND BEST'S INSULIN
            // ========================================
            
            banting_best_insulin: {
                name: "Banting and Best's Discovery of Insulin - Endocrine Control of Blood Glucose",
                relatedTopics: ['endocrine_system', 'hormone_mechanisms', 'homeostasis'],
                category: 'endocrinology',
                historicalBackground: {
                    scientists: "Frederick Banting, Charles Best, J.J.R. Macleod, James Collip",
                    year: "1921-1922",
                    location: "University of Toronto, Canada",
                    context: {
                        diabetesMellitus: "Fatal disease - patients died within months to years of diagnosis",
                        symptoms: "Excessive thirst, urination, weight loss, high blood sugar, coma, death",
                        treatment: "None effective - only starvation diet (prolonged life slightly)",
                        mortality: "Nearly 100% fatal within 1-2 years of diagnosis (Type 1)"
                    },
                    hypothesis: "Pancreas produces internal secretion that regulates blood sugar",
                    background: {
                        vonMering: "1889 - removed dog pancreas → diabetes symptoms",
                        laguesse: "1893 - identified islets of Langerhans in pancreas",
                        sharpeySchafer: "1916 - proposed 'insuline' substance from islets",
                        problem: "Previous attempts to extract pancreatic hormone failed (digestive enzymes destroyed it)"
                    },
                    bantingsInsight: {
                        idea: "Ligate (tie off) pancreatic duct → exocrine cells atrophy (stop producing digestive enzymes) → but islets survive → extract hormone from degenerated pancreas",
                        alternative: "Use fetal pancreas (islets developed, but exocrine not yet producing enzymes)"
                    },
                    experiments: {
                        july1921: {
                            procedure: "Ligated dog pancreatic ducts, waited 7-10 weeks for exocrine degeneration",
                            extraction: "Removed degenerated pancreas, ground up, filtered, extracted",
                            test: "Injected extract into diabetic dog (pancreatectomized)",
                            result: "Blood sugar DECREASED dramatically, dog's condition improved"
                        },
                        refinement: {
                            collip: "James Collip purified extract (alcohol precipitation)",
                            fetalCalf: "Used fetal calf pancreas as better source"
                        },
                        firstHumanTrial: {
                            date: "January 11, 1922",
                            patient: "Leonard Thompson, 14 years old, dying of diabetes",
                            firstInjection: "Impure extract, mild improvement, allergic reaction",
                            secondInjection: "January 23, 1922 - purified extract",
                            result: "DRAMATIC improvement - blood sugar dropped from 520 to 120 mg/dL, symptoms resolved, patient lived 13 more years",
                            impact: "Dying children recovering within days - miraculous"
                        }
                    },
                    nobelPrize: "1923 Nobel Prize in Physiology/Medicine (Banting and Macleod - controversially, Best and Collip not included; Banting shared prize money with Best)",
                    significance: [
                        "First effective treatment for diabetes",
                        "Saved millions of lives (diabetes changed from fatal to manageable)",
                        "Proved concept of hormone replacement therapy",
                        "Launched era of endocrinology and pharmaceutical protein production",
                        "Demonstrated importance of pancreatic islets (beta cells)"
                    ],
                    modernInsulin: {
                        animalInsulin: "Used pork/beef insulin from 1920s-1980s",
                        humanInsulin: "Recombinant DNA technology (1982 - Humulin, first biotech drug)",
                        analogs: "Engineered insulins (rapid-acting, long-acting) for better control"
                    },
                    quote: "I am almost afraid to go on for fear of what I may find." - Banting's notebook, July 1921
                },
                labExperiment: {
                    title: "Investigating Insulin's Effect on Blood Glucose Using Glucose Tolerance Testing",
                    hypothesis: "If insulin lowers blood glucose by promoting glucose uptake into cells, then: (1) diabetic individuals will have impaired glucose clearance, (2) insulin administration will restore normal glucose regulation, and (3) factors affecting insulin secretion/action will alter glucose tolerance",
                    purpose: "Understand insulin's role in blood glucose homeostasis through glucose tolerance testing and demonstrate principles of endocrine feedback control",
                    ethicalNote: "This experiment uses human volunteers. Follow IRB protocols. Do NOT perform on diabetic individuals without medical supervision.",
                    background: {
                        insulinFunction: {
                            secretion: "Beta cells in pancreatic islets release insulin in response to high blood glucose",
                            targets: "Liver, muscle, adipose tissue",
                            effects: [
                                "Increases glucose uptake (muscle, fat) via GLUT4 transporters",
                                "Increases glycogen synthesis (liver, muscle)",
                                "Increases lipid synthesis (adipose)",
                                "Increases protein synthesis",
                                "Decreases gluconeogenesis (liver)",
                                "Overall: LOWERS blood glucose"
                            ]
                        },
                        glucoseHomeostasis: {
                            normalRange: "70-100 mg/dL (fasting), <140 mg/dL (2 hr post-meal)",
                            regulation: {
                                highGlucose: "Stimulates insulin → glucose uptake → glucose falls",
                                lowGlucose: "Stimulates glucagon → glycogen breakdown, gluconeogenesis → glucose rises"
                            },
                            negativeFeedback: "Classic endocrine control loop"
                        },
                        diabetesMellitus: {
                            type1: "Autoimmune destruction of beta cells → NO insulin production",
                            type2: "Insulin resistance + eventual beta cell dysfunction → insufficient insulin action",
                            consequences: "Chronic hyperglycemia → complications (kidney, eye, nerve, cardiovascular damage)"
                        },
                        glucoseToleranceTest: {
                            principle: "Challenge glucose homeostasis, measure response",
                            normal: "Glucose rises, then returns to baseline within 2 hours (efficient insulin response)",
                            impaired: "Glucose clearance delayed (prediabetes or diabetes)"
                        }
                    },
                    variables: {
                        independent: "Time after glucose load, presence of exercise (affects insulin sensitivity)",
                        dependent: "Blood glucose concentration",
                        controlled: ["Fasting state", "Glucose dose (75 g standard)", "Time of day", "Prior diet", "Physical activity"]
                    },
                    materials: [
                        "HUMAN SUBJECTS (healthy volunteers, non-diabetic):",
                        "Informed consent forms",
                        "Medical screening questionnaire",
                        "",
                        "FOR GLUCOSE TOLERANCE TEST:",
                        "Glucometer (blood glucose meter) with test strips",
                        "Lancets and lancing device",
                        "Alcohol wipes",
                        "Gloves",
                        "Sharps container",
                        "75 g glucose solution (Glucola or dissolve glucose in water)",
                        "Timer/stopwatch",
                        "Data recording sheets",
                        "",
                        "OPTIONAL - INSULIN RESPONSE DEMONSTRATION:",
                        "Model organism (NOT human): diabetic mouse model OR",
                        "Computer simulation of glucose-insulin dynamics",
                        "",
                        "FOR ANALYSIS:",
                        "Graph paper or computer graphing software",
                        "Calculator"
                    ],
                    safetyPrecautions: [
                        "CRITICAL: Screen subjects - exclude diabetics, pregnant women, those with metabolic disorders",
                        "Obtain informed consent",
                        "Follow universal precautions (gloves, dispose of lancets in sharps container)",
                        "Ensure subjects have eaten normally prior days (no fasting >8 hours before test)",
                        "Have glucose tablets available in case of hypoglycemia",
                        "Stop test if subject feels unwell",
                        "Do NOT give insulin to human subjects (only observe natural response)",
                        "Follow institutional IRB approval"
                    ],
                    procedure: [
                        "PARTICIPANT PREPARATION:",
                        "1. Screen participants: must be healthy, non-diabetic adults",
                        "2. Instruct to fast 8-12 hours before test (water allowed)",
                        "3. Instruct to avoid vigorous exercise 24 hours before test",
                        "4. Obtain informed consent",
                        "5. Record baseline data: age, weight, height, recent diet/exercise",
                        "",
                        "ORAL GLUCOSE TOLERANCE TEST (OGTT):",
                        "",
                        "BASELINE (Fasting, Time 0):",
                        "6. Subject sits quietly for 5-10 minutes (rest)",
                        "7. Clean finger with alcohol wipe",
                        "8. Use lancet to prick finger, obtain blood drop",
                        "9. Apply to glucometer test strip",
                        "10. Record fasting blood glucose (should be 70-100 mg/dL in healthy person)",
                        "",
                        "GLUCOSE LOAD:",
                        "11. Subject drinks 75 g glucose dissolved in 300 ml water (or commercial Glucola)",
                        "12. Must drink within 5 minutes",
                        "13. Start timer immediately",
                        "14. Subject remains seated, quiet (no eating, minimal activity)",
                        "",
                        "TIME COURSE MEASUREMENTS:",
                        "15. Measure blood glucose at:",
                        "    Time 0 (fasting - already done)",
                        "    Time 30 min",
                        "    Time 60 min",
                        "    Time 90 min",
                        "    Time 120 min (2 hours)",
                        "    Optional: Time 180 min (3 hours)",
                        "16. At each time point:",
                        "    - Clean finger with alcohol",
                        "    - Lance, obtain blood",
                        "    - Measure glucose with glucometer",
                        "    - Record value",
                        "17. Ask subject about symptoms at each time point (hunger, shakiness, energy)",
                        "",
                        "POST-TEST:",
                        "18. Provide subject with snack after test completion",
                        "19. Ensure subject feels well before dismissing",
                        "",
                        "EXPERIMENT VARIATIONS:",
                        "",
                        "VARIATION A - EFFECT OF EXERCISE:",
                        "20. Repeat OGTT on different day",
                        "21. After baseline glucose, subject performs moderate exercise (brisk walk 20 min)",
                        "22. Then consume glucose and measure as above",
                        "23. Compare glucose curves: exercise vs. rest",
                        "24. Hypothesis: Exercise increases insulin sensitivity → better glucose clearance",
                        "",
                        "VARIATION B - EFFECT OF FASTING DURATION:",
                        "25. Compare OGTTs after 8-hour vs. 16-hour fast (different days)",
                        "26. Longer fast may lower fasting glucose, affect tolerance curve",
                        "",
                        "VARIATION C - COMPARISON ACROSS INDIVIDUALS:",
                        "27. Test multiple subjects (N=10-20)",
                        "28. Compare glucose curves",
                        "29. Look for variation: age, BMI, fitness level correlations",
                        "",
                        "SIMULATION - INSULIN RESPONSE (if actual insulin assay not available):",
                        "30. Use published data or simulation software",
                        "31. Plot typical insulin curve alongside glucose curve:",
                        "    - Insulin rises sharply 30-60 min after glucose",
                        "    - Peaks around 60 min",
                        "    - Returns to baseline by 120 min",
                        "    - Inverse relationship: as insulin rises, glucose falls",
                        "",
                        "ANIMAL MODEL (if approved and available):",
                        "32. Use diabetic mouse (streptozotocin-induced, destroys beta cells)",
                        "33. Measure glucose before and after insulin injection",
                        "34. Compare to non-diabetic control mouse",
                        "35. Observe: diabetic mouse has high glucose, insulin injection normalizes it"
                    ],
                    expectedResults: {
                        normalOGTT: {
                            fasting: "70-100 mg/dL",
                            peak: "120-140 mg/dL at 30-60 min (glucose absorbed from intestine)",
                            twoHour: "<140 mg/dL (glucose cleared by insulin-stimulated uptake)",
                            shape: "Rise to peak, then fall back to baseline"
                        },
                        impairedGlucoseTolerance: {
                            twoHour: "140-199 mg/dL (prediabetes)",
                            delayed: "Slow return to baseline"
                        },
                        diabetic: {
                            fasting: ">126 mg/dL",
                            twoHour: ">200 mg/dL",
                            note: "Would NOT test diabetic subjects in this lab"
                        },
                        insulinCurve: {
                            fasting: "5-10 μU/mL",
                            peak: "50-100 μU/mL at 60 min",
                            relationship: "Insulin peaks → glucose falls (cause and effect)"
                        },
                        exerciseEffect: "Lower glucose peak, faster return to baseline (increased insulin sensitivity)",
                        animalModel: "Diabetic mouse: high glucose (>300 mg/dL), insulin injection → rapid drop to normal (~100-150 mg/dL)"
                    },
                    dataTable: [
                        ["Time (min)", "Blood Glucose (mg/dL) - Subject 1", "Subject 2", "Subject 3", "Average"],
                        ["0 (fasting)", "85", "92", "78", "85"],
                        ["30", "135", "142", "128", "135"],
                        ["60", "128", "138", "125", "130"],
                        ["90", "105", "112", "98", "105"],
                        ["120", "88", "95", "82", "88"],
                        ["", "", "", "", ""],
                        ["Interpretation", "", "", "", ""],
                        ["Fasting", "Normal (70-100)", "", "", ""],
                        ["Peak (30-60 min)", "Normal (<140)", "", "", ""],
                        ["2-hour", "Normal (<140)", "", "", ""],
                        ["Diagnosis", "Normal glucose tolerance", "", "", ""],
                        ["", "", "", "", ""],
                        ["With Exercise", "Lower peak, faster clearance", "", "", ""],
                        ["Diabetic (reference)", "Fasting >126, 2-hr >200", "", "", ""]
                    ],
                    observations: [
                        "Blood glucose rises after glucose ingestion (absorption from intestine)",
                        "Peak glucose reached at 30-60 minutes",
                        "Glucose returns to baseline by 120 minutes in healthy individuals",
                        "Exercise improves glucose clearance (increased insulin sensitivity)",
                        "Individual variation exists (genetics, fitness, diet)",
                        "Symptoms correlate with glucose levels (high: thirst; low: shakiness)"
                    ],
                    analysis: {
                        homeostasisLoop: [
                            "1. Glucose ingested → absorbed → blood glucose RISES",
                            "2. High blood glucose detected by pancreatic beta cells",
                            "3. Beta cells secrete INSULIN into blood",
                            "4. Insulin binds receptors on muscle, liver, adipose cells",
                            "5. Cells increase glucose uptake (GLUT4 transporters) and glycogen synthesis",
                            "6. Blood glucose FALLS back to normal",
                            "7. Falling glucose → reduced insulin secretion (negative feedback)"
                        ],
                        insulinMechanisms: {
                            muscle: "GLUT4 translocation → glucose uptake, glycogen synthesis, protein synthesis",
                            liver: "Glycogen synthesis, decreased gluconeogenesis",
                            adipose: "Glucose uptake, lipogenesis (fat synthesis)",
                            signaling: "Insulin receptor (tyrosine kinase) → PI3K/Akt pathway → GLUT4 translocation"
                        },
                        diabetesComparison: {
                            type1: "No insulin → glucose cannot enter cells → stays in blood (hyperglycemia) → cells starve → break down fat/protein (ketoacidosis)",
                            type2: "Insulin resistance → cells don't respond well → beta cells compensate (hypersecrete) → eventually fail → hyperglycemia",
                            treatment: {
                                type1: "Exogenous insulin (injections or pump) - ESSENTIAL for survival",
                                type2: "Lifestyle (diet, exercise), oral medications (metformin, etc.), sometimes insulin"
                            }
                        },
                        exerciseEffect: [
                            "Exercise increases insulin sensitivity (GLUT4 expression, insulin signaling)",
                            "Muscle contraction directly stimulates GLUT4 translocation (insulin-independent)",
                            "Result: better glucose clearance with same insulin level"
                        ]
                    },
                    connectionToBantingBest: {
                        discovery: "Banting & Best showed that pancreatic extract (insulin) could reverse diabetes symptoms",
                        originalExperiment: "Pancreatectomized dog → diabetic symptoms → insulin injection → symptoms reversed",
                        mechanism: "Insulin enables glucose uptake → lowers blood sugar → prevents starvation/ketoacidosis",
                        impact: "Transformed diabetes from fatal to manageable disease",
                        modernContinuation: [
                            "This OGTT experiment demonstrates what Banting & Best discovered: insulin controls glucose",
                            "Insulin therapy directly replaces what's missing in Type 1 diabetes",
                            "Understanding glucose-insulin dynamics enables better diabetes management"
                        ]
                    },
                    results: "Oral glucose load causes transient increase in blood glucose (peak at 30-60 min), which returns to baseline within 2 hours in healthy individuals due to insulin-mediated glucose uptake. Exercise enhances glucose clearance, demonstrating modulation of insulin sensitivity.",
                    conclusions: [
                        "Blood glucose is tightly regulated by insulin-mediated negative feedback",
                        "Insulin promotes glucose uptake into cells, lowering blood glucose",
                        "Healthy individuals rapidly clear glucose (return to baseline <120 min)",
                        "Exercise increases insulin sensitivity, improving glucose tolerance",
                        "Impaired glucose tolerance indicates prediabetes or diabetes",
                        "Banting and Best's insulin discovery enabled treatment of diabetes through hormone replacement"
                    ],
                    realWorldApplications: [
                        "Diagnosis of diabetes and prediabetes (OGTT is clinical standard)",
                        "Gestational diabetes screening (pregnancy)",
                        "Insulin therapy for Type 1 diabetes (life-saving)",
                        "Understanding insulin resistance (Type 2 diabetes, metabolic syndrome)",
                        "Exercise as treatment (improves insulin sensitivity)",
                        "Dietary management (low glycemic index foods reduce glucose spikes)",
                        "Continuous glucose monitoring (CGM) in diabetes management",
                        "Artificial pancreas development (closed-loop insulin delivery)"
                    ],
                    extensions: [
                        "Measure actual insulin levels (ELISA or RIA assay) alongside glucose",
                        "Calculate HOMA-IR (insulin resistance index) from fasting glucose and insulin",
                        "Test different glucose loads (25g, 50g, 75g, 100g) - dose-response",
                        "Compare different carbohydrate types (glucose vs. fructose vs. complex carbs)",
                        "Investigate glucagon response to hypoglycemia (counterregulatory hormone)",
                        "Study incretin effect (GLP-1) - oral glucose stimulates more insulin than IV glucose",
                        "Model glucose-insulin dynamics mathematically (minimal model, Bergman model)",
                        "Compare diabetic vs. non-diabetic responses (with medical supervision)"
                    ],
                    modernDiabetesCare: [
                        "Insulin types: rapid-acting (lispro, aspart), long-acting (glargine, detemir)",
                        "Insulin pumps (continuous subcutaneous insulin infusion)",
                        "Continuous glucose monitoring (CGM) with alarms",
                        "Closed-loop systems ('artificial pancreas') - CGM + pump + algorithm",
                        "GLP-1 agonists (incretin mimetics) for Type 2",
                        "SGLT2 inhibitors (increase glucose excretion in urine)",
                        "Islet cell transplantation (experimental for Type 1)",
                        "Beta cell regeneration research (stem cells)"
                    ],
                    historicalImpact: [
                        "Before insulin: Type 1 diabetes = death sentence (1-2 years)",
                        "After insulin: diabetes changed to manageable chronic disease",
                        "First successful hormone replacement therapy",
                        "Demonstrated that complex diseases can have molecular basis (hormone deficiency)",
                        "Launched pharmaceutical industry focus on protein therapeutics",
                        "Saved millions of lives worldwide",
                        "Inspired search for other hormone deficiencies (growth hormone, thyroid, etc.)"
                    ]
                }
            }
        };

        // Link experiments to topics
        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.coordinationExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.coordinationTopics[topicId]) {
                    if (!this.coordinationTopics[topicId].relatedExperiments) {
                        this.coordinationTopics[topicId].relatedExperiments = [];
                    }
                    this.coordinationTopics[topicId].relatedExperiments.push({
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
            nervous_system: {
                'General Structure': [
                    'Thinking brain controls all body functions (many reflexes bypass brain)',
                    'Believing neurons can regenerate easily (CNS regeneration very limited)',
                    'Confusing nerves with neurons (nerve = bundle of axons)',
                    'Thinking all neurons look the same (many structural types)',
                    'Believing nervous system is purely electrical (chemical synapses crucial)'
                ],
                'Brain Function': [
                    'Thinking we only use 10% of our brain (myth - we use all regions)',
                    'Believing left brain/right brain dichotomy is absolute (both sides communicate)',
                    'Confusing gray matter with intelligence (organization matters more than volume)',
                    'Thinking brain size correlates with intelligence (Einstein\'s brain was average size)'
                ]
            },
            
            neurons: {
                'Structure': [
                    'Thinking dendrites send signals away from cell body (they receive signals)',
                    'Believing all neurons have myelin (many are unmyelinated)',
                    'Confusing Schwann cells with oligodendrocytes (PNS vs CNS)',
                    'Thinking synapses are physical connections (there\'s a gap - synaptic cleft)'
                ],
                'Function': [
                    'Believing action potentials get weaker as they travel (they don\'t - all-or-none)',
                    'Thinking neurons can fire backward (refractory period prevents this)',
                    'Confusing graded potentials with action potentials',
                    'Believing all signals in neurons are electrical (chemical transmission at synapses)'
                ]
            },
            
            action_potential: {
                'Mechanism': [
                    'Thinking action potential is flow of electrons like wire (it\'s ion movement)',
                    'Believing Na+ and K+ switch places (gradients maintained by pump)',
                    'Confusing depolarization with action potential (depolarization can be subthreshold)',
                    'Thinking threshold varies (it\'s relatively fixed for a neuron)',
                    'Believing stronger stimuli produce bigger action potentials (they produce higher frequency)'
                ],
                'Propagation': [
                    'Thinking myelin conducts electricity (it insulates - prevents conduction)',
                    'Believing action potential jumps over myelin (it\'s regenerated at nodes)',
                    'Confusing conduction velocity with action potential speed (conduction is propagation along axon)'
                ]
            },
            
            synapses: {
                'Transmission': [
                    'Thinking all synapses are excitatory (many are inhibitory)',
                    'Believing neurotransmitter determines effect (receptor determines effect)',
                    'Confusing neurotransmitter release with action potential (triggered by Ca²⁺, not Na⁺)',
                    'Thinking one neurotransmitter per neuron (some release multiple)',
                    'Believing synaptic transmission is instantaneous (synaptic delay ~0.5-1 ms)'
                ],
                'Neurotransmitters': [
                    'Thinking serotonin is always happy neurotransmitter (oversimplification)',
                    'Believing dopamine is only pleasure (also motor control, attention)',
                    'Confusing neurotransmitters with hormones (neurotransmitters work locally at synapses)',
                    'Thinking all drugs that affect neurotransmitters are bad (many are medicines)'
                ]
            },
            
            endocrine_system: {
                'Hormones vs Neurotransmitters': [
                    'Thinking hormones and neurotransmitters are completely different (some molecules are both)',
                    'Believing hormones are always slow (some act in seconds)',
                    'Confusing endocrine glands with exocrine glands (endo = into blood, exo = ducts)',
                    'Thinking hormones only affect one organ (many have multiple targets)'
                ],
                'Regulation': [
                    'Believing all feedback is negative (positive feedback exists but rare)',
                    'Thinking feedback loops are simple on/off (often complex, multi-level)',
                    'Confusing hormone level with hormone activity (receptor binding determines activity)'
                ]
            },
            
            specific_hormones: {
                'Insulin': [
                    'Thinking insulin IS sugar (insulin is protein hormone that regulates sugar)',
                    'Believing insulin is only for diabetics (everyone needs insulin)',
                    'Confusing Type 1 and Type 2 diabetes (autoimmune vs. insulin resistance)',
                    'Thinking sugar causes diabetes (Type 2 involves insulin resistance, complex causes)'
                ],
                'Adrenaline': [
                    'Believing adrenaline is always bad (it\'s adaptive stress response)',
                    'Thinking adrenaline and epinephrine are different (same molecule, different names)',
                    'Confusing adrenaline rush with addiction (normal physiological response)'
                ]
            },
            
            reflexes: {
                'Mechanism': [
                    'Thinking all reflexes involve brain (spinal reflexes bypass brain)',
                    'Believing reflexes can be consciously controlled (they\'re involuntary)',
                    'Confusing reflex with voluntary movement (different neural pathways)',
                    'Thinking reflex speed varies with strength (latency is relatively fixed)'
                ]
            }
        };

        this.clarificationStrategies = {
            anatomical_models: {
                method: 'Use brain models, neuron models, 3D visualizations',
                effectiveness: 'Very high for understanding structure'
            },
            electrical_analogies: {
                method: 'Compare to electrical circuits (but emphasize differences)',
                effectiveness: 'Moderate - can reinforce misconceptions if not careful'
            },
            physiological_recordings: {
                method: 'Show actual EEG, EMG, or simulated recordings',
                effectiveness: 'High for understanding dynamic processes'
            },
            clinical_cases: {
                method: 'Discuss diseases/injuries (stroke, spinal injury, diabetes)',
                effectiveness: 'Very high for functional understanding'
            },
            historical_experiments: {
                method: 'Teach through classic experiments (Galvani, Loewi, etc.)',
                effectiveness: 'High for understanding discovery process and concepts'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about how the nervous system works?",
                "How do you think your brain controls your movements?",
                "What questions do you have about neurons and nerves?",
                "How do you think diabetes affects the body?"
            ],
            duringLearning: [
                "Can you explain why action potentials don't get weaker as they travel?",
                "How does this reflex arc relate to the knee-jerk reflex you've experienced?",
                "What's the difference between electrical and chemical signaling in neurons?",
                "Can you draw the pathway of a nerve impulse from stimulus to response?"
            ],
            afterLearning: [
                "How would you explain action potentials to a friend?",
                "What was most surprising about how synapses work?",
                "How has learning about insulin changed your understanding of diabetes?",
                "What connections can you make between nervous and endocrine systems?"
            ],
            problemSolving: [
                "If someone has damage to their spinal cord, why might reflexes below the injury be affected?",
                "Why would blocking Na⁺ channels stop nerve impulses?",
                "How would you test if a substance is a neurotransmitter?",
                "What would happen if insulin receptors stopped working?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            nervous_system: [
                {
                    scenario: "Spinal Cord Injury",
                    context: "A person suffers spinal cord injury at thoracic level",
                    application: "Loss of voluntary movement below injury (brain signals can't reach lower motor neurons), but spinal reflexes may remain intact or become hyperactive",
                    question: "Why can paralyzed patients sometimes still have knee-jerk reflex?"
                },
                {
                    scenario: "Local Anesthesia",
                    context: "Dentist injects lidocaine before filling cavity",
                    application: "Lidocaine blocks voltage-gated Na⁺ channels in sensory neurons, preventing action potentials and pain signals from reaching brain",
                    question: "Why does numbness last even after stimulus (drilling) stops?"
                }
            ],
            
            synapses: [
                {
                    scenario: "Antidepressant Medications",
                    context: "Patient prescribed SSRI (Prozac) for depression",
                    application: "SSRIs block serotonin reuptake transporters → more serotonin in synaptic cleft → enhanced serotonergic signaling",
                    question: "Why do SSRIs take 2-4 weeks to show effects?"
                },
                {
                    scenario: "Botox Treatment",
                    context: "Cosmetic botox injection to reduce wrinkles",
                    application: "Botulinum toxin blocks acetylcholine release at neuromuscular junction → muscle can't contract → wrinkles smooth",
                    question: "Why is botox temporary (effects wear off in 3-6 months)?"
                }
            ],
            
            endocrine: [
                {
                    scenario: "Diabetes Type 1 Management",
                    context: "Child diagnosed with Type 1 diabetes at age 10",
                    application: "Autoimmune destruction of beta cells → no insulin → must inject insulin before meals to enable glucose uptake",
                    question: "Why must insulin be injected, not taken as pill?"
                },
                {
                    scenario: "Stress Response",
                    context: "Student facing exam experiences rapid heartbeat, sweating",
                    application: "Hypothalamus activates sympathetic nervous system + adrenal medulla releases epinephrine → fight-or-flight response",
                    question: "Why does chronic stress lead to health problems?"
                }
            ],
            
            reflexes: [
                {
                    scenario: "Newborn Reflexes",
                    context: "Pediatrician tests infant's primitive reflexes (grasp, rooting, Moro)",
                    application: "Primitive reflexes present at birth, controlled by brainstem/spinal cord, disappear as cortex matures",
                    question: "Why do adults NOT have grasp reflex when you touch their palm?"
                },
                {
                    scenario: "Pulling Hand from Hot Stove",
                    context: "You touch hot stove and pull hand away before feeling pain",
                    application: "Withdrawal reflex (spinal) occurs before pain signal reaches conscious brain (faster pathway)",
                    question: "Why do you pull away BEFORE you feel pain?"
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall nervous system structures and hormone names",
                    verbs: ["Label", "List", "Identify", "Name", "Define"],
                    example: "Label parts of a neuron (dendrite, axon, soma)"
                },
                understand: {
                    description: "Explain how nervous and endocrine systems work",
                    verbs: ["Explain", "Describe", "Summarize", "Compare", "Classify"],
                    example: "Explain how action potential propagates along axon"
                },
                apply: {
                    description: "Use knowledge to predict outcomes",
                    verbs: ["Predict", "Calculate", "Demonstrate", "Apply", "Solve"],
                    example: "Predict effect of blocking K⁺ channels on action potential"
                },
                analyze: {
                    description: "Analyze neural circuits and hormonal feedback loops",
                    verbs: ["Analyze", "Differentiate", "Diagram", "Compare", "Distinguish"],
                    example: "Analyze reflex arc pathway from stimulus to response"
                },
                evaluate: {
                    description: "Evaluate experimental evidence and clinical decisions",
                    verbs: ["Evaluate", "Critique", "Judge", "Assess", "Justify"],
                    example: "Evaluate evidence for chemical vs. electrical neurotransmission"
                },
                create: {
                    description: "Design experiments or treatment plans",
                    verbs: ["Design", "Create", "Develop", "Plan", "Construct"],
                    example: "Design experiment to test if a drug affects neurotransmission"
                }
            },
            
            conceptualUnderstanding: {
                novice: {
                    characteristics: ["Memorizes neuron parts", "Knows hormones by name", "Struggles connecting structure to function"],
                    support: ["Use anatomical models", "Provide step-by-step action potential diagrams", "Concrete examples from daily life"]
                },
                developing: {
                    characteristics: ["Understands action potential mechanism", "Can trace reflex arc", "Begins seeing patterns in regulation"],
                    support: ["Challenge with clinical cases", "Integrate nervous and endocrine", "Explore feedback loops"]
                },
                proficient: {
                    characteristics: ["Explains synaptic integration", "Predicts effects of drugs/damage", "Connects concepts across systems"],
                    support: ["Present complex scenarios", "Research current neuroscience", "Analyze primary literature"]
                },
                expert: {
                    characteristics: ["Designs experiments", "Critiques research methods", "Synthesizes across biology"],
                    support: ["Independent research projects", "Computational modeling", "Teaching others"]
                }
            }
        };
    }

    // ========================================
    // HANDLER METHODS FOR COORDINATION TOPICS
    // ========================================

    handleNervousSystemOverview(problem) {
        return this.lessons.nervous_system_overview;
    }

    handleNeuronStructure(problem) {
        return this.lessons.neuron_structure;
    }

    handleActionPotential(problem) {
        return this.lessons.action_potential;
    }

    handleSynapticTransmission(problem) {
        return this.lessons.synaptic_transmission;
    }

    

    handleEndocrineSystem(problem) {
        return this.lessons.endocrine_system;
    }

    
handleReflexArc(problem) {
    const content = {
        topic: "Reflex Arc: Rapid Automatic Responses",
        category: 'neural_circuits',
        summary: "A reflex arc is the neural pathway that mediates a reflex action - an automatic, involuntary response to a stimulus. Reflexes are rapid because they bypass conscious brain processing, with integration occurring in the spinal cord or brainstem.",
        
        keyDefinitions: {
            "Reflex": "Automatic, involuntary response to a stimulus",
            "Reflex Arc": "Neural pathway mediating reflex: receptor → sensory neuron → integration center → motor neuron → effector",
            "Receptor": "Sensory structure that detects stimulus (mechanoreceptor, nociceptor, etc.)",
            "Sensory (Afferent) Neuron": "Carries signal FROM receptor TO CNS",
            "Integration Center": "CNS site where sensory info is processed (spinal cord or brainstem)",
            "Interneuron": "Neuron within CNS that connects sensory and motor neurons (in polysynaptic reflexes)",
            "Motor (Efferent) Neuron": "Carries signal FROM CNS TO effector",
            "Effector": "Muscle or gland that responds to motor signal",
            "Ipsilateral": "Same side of body as stimulus",
            "Contralateral": "Opposite side of body from stimulus",
            "Reciprocal Innervation": "When agonist contracts, antagonist relaxes (Sherrington's principle)"
        },
        
        components: {
            receptor: {
                function: "Detect specific stimulus",
                types: {
                    mechanoreceptor: "Pressure, stretch, vibration (e.g., muscle spindle, tendon organ)",
                    nociceptor: "Pain, tissue damage",
                    thermoreceptor: "Temperature change",
                    photoreceptor: "Light",
                    chemoreceptor: "Chemical signals"
                },
                transduction: "Convert stimulus energy into electrical signal (generator potential)"
            },
            
            sensoryNeuron: {
                structure: "Usually pseudounipolar (one process splits into peripheral and central branches)",
                pathway: "Receptor → peripheral process → cell body (in dorsal root ganglion) → central process → dorsal horn of spinal cord",
                function: "Transmit sensory information to CNS",
                speed: "Type Ia (proprioception): 70-120 m/s; Type C (pain): 0.5-2 m/s"
            },
            
            integrationCenter: {
                location: "Spinal cord (most reflexes) or brainstem (cranial reflexes)",
                function: "Process sensory input, activate appropriate motor output",
                complexity: {
                    monosynaptic: "One synapse (sensory → motor neuron directly) - fastest",
                    polysynaptic: "Two or more synapses (sensory → interneuron(s) → motor) - allows complexity"
                },
                processing: [
                    "Determine appropriate response",
                    "Coordinate multiple muscles (reciprocal innervation)",
                    "Integrate with other sensory inputs",
                    "Modulate based on descending signals from brain"
                ]
            },
            
            motorNeuron: {
                location: "Ventral horn of spinal cord (or motor nuclei in brainstem)",
                types: {
                    alphaMN: "Large, innervate extrafusal muscle fibers (force production)",
                    gammaMN: "Small, innervate intrafusal fibers (muscle spindles) - adjust sensitivity"
                },
                pathway: "Spinal cord → ventral root → peripheral nerve → neuromuscular junction",
                neurotransmitter: "Acetylcholine (at neuromuscular junction)"
            },
            
            effector: {
                muscle: {
                    skeletal: "Voluntary muscle (but controlled involuntarily in reflexes)",
                    smooth: "Involuntary muscle (blood vessels, organs) - autonomic reflexes",
                    cardiac: "Heart muscle - autonomic reflexes"
                },
                gland: {
                    examples: "Salivary glands (salivation reflex), sweat glands, digestive glands",
                    control: "Autonomic reflexes"
                },
                response: "Muscle contraction/relaxation or gland secretion"
            }
        },
        
        classification: {
            bySynapses: {
                monosynaptic: {
                    definition: "One synapse (sensory neuron synapses directly on motor neuron)",
                    example: "Patellar (knee-jerk) reflex, Achilles reflex",
                    characteristics: "Fastest possible reflex (minimal synaptic delay)",
                    pathway: "Receptor → Ia sensory → alpha motor neuron → muscle",
                    latency: "30-50 ms"
                },
                polysynaptic: {
                    definition: "Two or more synapses (one or more interneurons involved)",
                    examples: "Withdrawal (flexor) reflex, crossed-extensor reflex",
                    characteristics: "Slower than monosynaptic, allows complexity and coordination",
                    pathway: "Receptor → sensory → interneuron(s) → motor → muscle",
                    latency: "50-200+ ms (depends on number of synapses)"
                }
            },
            
            byComplexity: {
                simple: {
                    definition: "Involves one or few muscles, one limb",
                    examples: "Patellar reflex, pupillary light reflex",
                    purpose: "Maintain posture, protect from injury"
                },
                complex: {
                    definition: "Involves multiple muscles, coordination across limbs/body",
                    examples: "Righting reflexes, walking reflexes",
                    purpose: "Coordinated movements, balance, locomotion"
                }
            },
            
            byFunction: {
                somatic: {
                    definition: "Involve skeletal muscles",
                    control: "Body movement, posture",
                    examples: "Stretch reflexes, withdrawal reflexes, tendon reflexes",
                    consciousness: "Usually unconscious, but can be partially modulated by brain"
                },
                autonomic: {
                    definition: "Involve smooth muscle, cardiac muscle, or glands",
                    control: "Internal organ function",
                    examples: "Pupillary reflex, baroreceptor reflex, salivation, defecation",
                    consciousness: "Completely unconscious, involuntary"
                },
                visceral: {
                    definition: "Involve internal organs",
                    examples: "Swallowing, vomiting, coughing, urination",
                    integration: "Brainstem or spinal cord"
                }
            },
            
            byDevelopment: {
                innate: {
                    definition: "Present from birth, genetically programmed",
                    examples: "Most reflexes (patellar, pupillary, gag, withdrawal)",
                    purpose: "Survival, basic functions"
                },
                conditioned: {
                    definition: "Acquired through learning/experience (Pavlovian conditioning)",
                    example: "Salivation in response to bell (if associated with food)",
                    note: "Not true 'reflex arc' - involves higher brain centers"
                }
            }
        },
        
        specificReflexes: {
            stretchReflex: {
                name: "Stretch Reflex (Myotatic Reflex)",
                type: "Monosynaptic, somatic",
                example: "Patellar reflex (knee-jerk), Achilles reflex",
                receptor: "Muscle spindle (detects muscle stretch)",
                pathway: {
                    step1: "Tap patellar tendon → stretches quadriceps muscle",
                    step2: "Muscle spindles activated",
                    step3: "Ia sensory neurons fire → dorsal horn of spinal cord (L2-L4)",
                    step4: "Ia neurons synapse DIRECTLY on alpha motor neurons",
                    step5: "Alpha motor neurons activated → quadriceps contracts",
                    step6: "Simultaneously: Ia neurons activate inhibitory interneurons",
                    step7: "Inhibitory interneurons → inhibit hamstring motor neurons",
                    step8: "Hamstrings relax (reciprocal inhibition)",
                    step9: "Result: Leg extends (kick)"
                },
                function: "Maintain muscle length and posture, resist unexpected stretch",
                clinicalUse: "Test integrity of reflex arc, diagnose neurological lesions",
                grading: {
                    zero: "Absent (nerve damage, muscle disease)",
                    onePlus: "Diminished (neuropathy)",
                    twoPlus: "Normal",
                    threePlus: "Brisker than average",
                    fourPlus: "Hyperactive with clonus (upper motor neuron lesion)"
                }
            },
            
            withdrawalReflex: {
                name: "Flexor (Withdrawal) Reflex",
                type: "Polysynaptic, somatic, protective",
                stimulus: "Painful or harmful stimulus (e.g., stepping on tack, touching hot object)",
                receptor: "Nociceptors (pain receptors)",
                pathway: {
                    step1: "Painful stimulus activates nociceptors",
                    step2: "Sensory neurons fire → spinal cord",
                    step3: "Sensory neurons synapse on EXCITATORY interneurons",
                    step4: "Excitatory interneurons → activate flexor motor neurons (ipsilateral)",
                    step5: "Flexor muscles contract → limb withdrawn from stimulus",
                    step6: "Simultaneously: INHIBITORY interneurons inhibit extensor motor neurons",
                    step7: "Extensor muscles relax (reciprocal inhibition)",
                    step8: "Result: Rapid withdrawal of limb from danger"
                },
                crossedExtensorReflex: {
                    coordination: "Often accompanied by crossed-extensor reflex",
                    pathway: [
                        "Interneurons cross to contralateral side of spinal cord",
                        "Activate extensor motor neurons on opposite limb",
                        "Inhibit flexor motor neurons on opposite limb",
                        "Result: Opposite leg extends to support weight"
                    ],
                    example: "Step on tack with right foot → right leg flexes (withdrawal), left leg extends (support)",
                    purpose: "Maintain balance while withdrawing from painful stimulus"
                },
                function: "Protective - rapidly remove limb from harmful stimulus",
                latency: "~50-100 ms (polysynaptic, but still very fast)"
            },
            
            pupillaryLightReflex: {
                name: "Pupillary Light Reflex",
                type: "Autonomic, cranial reflex",
                stimulus: "Light shining in eye",
                receptor: "Retinal photoreceptors (rods and cones)",
                pathway: {
                    afferent: "Optic nerve (CN II) → pretectal nucleus (midbrain)",
                    integration: "Pretectal nucleus → Edinger-Westphal nucleus (parasympathetic)",
                    efferent: "Oculomotor nerve (CN III) → ciliary ganglion → iris sphincter muscle",
                    response: "Pupil constricts (miosis)"
                },
                characteristics: {
                    direct: "Light in right eye → right pupil constricts",
                    consensual: "Light in right eye → left pupil ALSO constricts (crossed connection)",
                    bilateral: "Both pupils respond to light in one eye"
                },
                function: "Regulate amount of light entering eye, protect retina from damage",
                clinicalUse: "Test brainstem function, assess unconscious patients, detect nerve damage"
            },
            
            blinkReflex: {
                name: "Corneal (Blink) Reflex",
                type: "Protective, cranial reflex",
                stimulus: "Touch to cornea or bright light or object approaching eye",
                receptor: "Corneal mechanoreceptors, nociceptors",
                pathway: {
                    afferent: "Trigeminal nerve (CN V - ophthalmic division)",
                    integration: "Pons (trigeminal nucleus)",
                    efferent: "Facial nerve (CN VII) → orbicularis oculi muscle",
                    response: "Eyelids close (bilateral)"
                },
                function: "Protect cornea from injury, foreign objects, bright light",
                clinicalUse: "Test CN V and VII integrity, assess brainstem function"
            },
            
            gagReflex: {
                name: "Gag (Pharyngeal) Reflex",
                type: "Protective, cranial reflex",
                stimulus: "Touch to back of throat/pharynx",
                receptor: "Mechanoreceptors in pharynx",
                pathway: {
                    afferent: "Glossopharyngeal nerve (CN IX)",
                    integration: "Medulla (solitary nucleus)",
                    efferent: "Vagus nerve (CN X) → pharyngeal muscles",
                    response: "Pharynx contracts, soft palate elevates (gag)"
                },
                function: "Prevent choking, protect airway from foreign objects",
                clinicalUse: "Test CN IX and X, assess brainstem"
            },
            
            baroreceptorReflex: {
                name: "Baroreceptor Reflex",
                type: "Autonomic, cardiovascular reflex",
                stimulus: "Change in blood pressure",
                receptor: "Baroreceptors (stretch receptors in carotid sinus, aortic arch)",
                pathway: {
                    highBP: [
                        "Baroreceptors stretch → increased firing",
                        "Afferent: CN IX (carotid) and CN X (aortic) → medulla",
                        "Integration: Cardiovascular center in medulla",
                        "Efferent: Parasympathetic (vagus) ↑, sympathetic ↓",
                        "Effect: Heart rate ↓, vasodilation → BP decreases"
                    ],
                    lowBP: [
                        "Baroreceptors less stretched → decreased firing",
                        "Medulla detects drop",
                        "Efferent: Sympathetic ↑, parasympathetic ↓",
                        "Effect: Heart rate ↑, vasoconstriction → BP increases"
                    ]
                },
                function: "Maintain blood pressure homeostasis (negative feedback)",
                clinicalRelevance: "Orthostatic hypotension (BP drops when standing), syncope (fainting)"
            }
        },
        
        characteristics: {
            speed: {
                rapid: "Reflexes are faster than voluntary movements",
                monosynaptic: "30-50 ms (patellar reflex)",
                polysynaptic: "50-200+ ms (withdrawal reflex)",
                voluntary: "150-300 ms (conscious decision + motor command)",
                reason: "Bypass conscious brain processing, fewer synapses"
            },
            
            involuntary: {
                automatic: "Don't require conscious thought or decision",
                stereotyped: "Same stimulus produces same response (predictable)",
                protective: "Many reflexes protect body from harm (withdrawal, blink, gag)",
                adaptive: "Can be modulated by higher brain centers (some voluntary override)"
            },
            
            integration: {
                spinal: "Most somatic reflexes integrated in spinal cord",
                cranial: "Reflexes involving head (pupillary, gag, etc.) integrated in brainstem",
                local: "Integration at same level as sensory input (segmental)",
                intersegmental: "Involve multiple spinal segments (withdrawal + crossed-extensor)"
            },
            
            modulation: {
                supraspinal: "Brain can modulate reflex strength (descending pathways)",
                facilitation: "Brain can enhance reflexes (e.g., Jendrassik maneuver)",
                inhibition: "Brain can suppress reflexes (e.g., don't kick during patellar test)",
                limit: "Complete voluntary override usually not possible (truly automatic)",
                clinicalNote: "Spinal transection → reflexes initially lost (spinal shock), then return and may become hyperactive (loss of descending inhibition)"
            }
        },
        
        reciprocalInnervation: {
            concept: "Sherrington's principle: When agonist muscle contracts, antagonist muscle relaxes",
            mechanism: {
                excitatory: "Sensory neuron or interneuron activates agonist motor neurons",
                inhibitory: "Simultaneously activates inhibitory interneurons → inhibit antagonist motor neurons",
                result: "Coordinated movement (can't have both muscles contracting simultaneously)"
            },
            examples: [
                "Patellar reflex: Quadriceps contracts, hamstrings relax",
                "Withdrawal reflex: Flexors contract, extensors relax (ipsilateral)",
                "Crossed-extensor: Extensors contract, flexors relax (contralateral)"
            ],
            importance: "Prevents opposing muscles from fighting each other, enables smooth coordinated movement",
            discovery: "Charles Sherrington (early 1900s) - Nobel Prize 1932"
        },
        
        clinicalSignificance: {
            neurologicalExam: {
                purpose: "Assess integrity of sensory and motor pathways, spinal cord segments",
                method: "Test specific reflexes, grade response (0 to 4+)",
                interpretation: {
                    absent: "Damage to sensory nerve, motor nerve, muscle, or NMJ",
                    diminished: "Partial damage or disease (neuropathy, radiculopathy)",
                    normal: "Intact reflex arc",
                    hyperactive: "Upper motor neuron lesion (loss of descending inhibition)",
                    clonusSustained: "Rhythmic contractions - severe hyperreflexia"
                }
            },
            
            specificTests: {
                bicepsReflex: "C5-C6 spinal level",
                tricepsReflex: "C7-C8 level",
                patellarReflex: "L2-L4 level",
                achillesReflex: "S1-S2 level",
                plantarReflex: "Babinski sign - normal: toes flex; abnormal (UMN lesion): toes extend"
            },
            
            pathologicalConditions: {
                lowerMotorNeuron: {
                    lesion: "Damage to motor neurons, peripheral nerves, or muscle",
                    reflexes: "Absent or diminished (hyporeflexia or areflexia)",
                    examples: "Polio, ALS, peripheral neuropathy, Guillain-Barré syndrome"
                },
                upperMotorNeuron: {
                    lesion: "Damage to descending pathways (brain or spinal cord above reflex level)",
                    reflexes: "Hyperactive (hyperreflexia), clonus, abnormal reflexes (Babinski positive)",
                    examples: "Stroke, spinal cord injury, multiple sclerosis, cerebral palsy",
                    mechanism: "Loss of descending inhibition → exaggerated reflexes"
                },
                spinalShock: {
                    acute: "Immediately after spinal cord injury → all reflexes lost below lesion",
                    duration: "Days to weeks",
                    recovery: "Reflexes return, often hyperactive",
                    reason: "Initial neuronal depression, then loss of descending inhibition"
                }
            },
            
            infantReflexes: {
                primitive: "Present at birth, disappear as cortex matures",
                examples: {
                    moro: "Startle reflex - arms extend then embrace (disappears ~6 months)",
                    rooting: "Turn head toward touch on cheek (helps find nipple)",
                    sucking: "Suck on object in mouth",
                    grasp: "Grasp object placed in palm (disappears ~6 months)",
                    stepping: "Stepping movements when held upright"
                },
                clinical: "Persistence beyond normal age may indicate neurological problem",
                brain: "Primitive reflexes inhibited by developing cortex; reappear in dementia/brain injury"
            }
        },
        
        physiologicalRoles: {
            postureControl: {
                stretchReflexes: "Constantly active at low level (muscle tone)",
                antigravity: "Extensor muscles maintain upright posture against gravity",
                adjustment: "Automatic correction when posture disturbed",
                example: "If you start to fall forward, stretch reflexes activate extensors to restore balance"
            },
            
            protection: {
                withdrawal: "Rapidly remove body part from harm",
                blink: "Protect eyes from injury",
                gag: "Prevent choking",
                cough: "Clear airways",
                sneeze: "Expel irritants from nasal passages"
            },
            
            homeostasis: {
                cardiovascular: "Baroreceptor reflex maintains blood pressure",
                respiratory: "Hering-Breuer reflex prevents over-inflation of lungs",
                urinary: "Micturition reflex controls bladder emptying",
                digestive: "Defecation reflex, peristalsis"
            },
            
            locomotion: {
                centralPatternGenerators: "Spinal circuits that generate rhythmic movements (walking, swimming)",
                reflexModulation: "Reflexes fine-tune movements during locomotion",
                coordination: "Crossed-extensor reflex coordinates alternating leg movements in walking"
            }
        },
        
        comparison: {
            reflexVsVoluntary: [
                {feature: "Control", reflex: "Involuntary, automatic", voluntary: "Conscious, intentional"},
                {feature: "Speed", reflex: "Very fast (30-200 ms)", voluntary: "Slower (150-300+ ms)"},
                {feature: "Integration", reflex: "Spinal cord or brainstem", voluntary: "Cerebral cortex"},
                {feature: "Complexity", reflex: "Stereotyped, simple", voluntary: "Variable, complex"},
                {feature: "Modulation", reflex: "Limited (some brain influence)", voluntary: "Full control"},
                {feature: "Purpose", reflex: "Protection, maintenance", voluntary: "Goal-directed behavior"}
            ],
            
            monosynapticVsPolysynaptic: [
                {feature: "Synapses", monosynaptic: "One (sensory → motor)", polysynaptic: "Two or more (interneurons)"},
                {feature: "Speed", monosynaptic: "Fastest (~30-50 ms)", polysynaptic: "Slower (50-200+ ms)"},
                {feature: "Complexity", monosynaptic: "Simple, single muscle", polysynaptic: "Complex, multiple muscles"},
                {feature: "Example", monosynaptic: "Patellar reflex", polysynaptic: "Withdrawal reflex"},
                {feature: "Function", monosynaptic: "Maintain muscle length", polysynaptic: "Protective, coordinated"}
            ]
        },
        
        examples: [
            {
                name: "Patellar (Knee-Jerk) Reflex",
                type: "Monosynaptic stretch reflex",
                stimulus: "Tap on patellar tendon",
                response: "Quadriceps contracts, leg extends",
                function: "Maintain posture, muscle tone",
                clinical: "Test L2-L4 spinal segments"
            },
            {
                name: "Withdrawal (Flexor) Reflex",
                type: "Polysynaptic protective reflex",
                stimulus: "Painful stimulus (stepping on tack)",
                response: "Flexors contract, limb withdrawn; opposite limb extends (crossed-extensor)",
                function: "Protect from injury",
                clinical: "Test overall spinal function"
            },
            {
                name: "Pupillary Light Reflex",
                type: "Autonomic cranial reflex",
                stimulus: "Light in eye",
                response: "Both pupils constrict",
                function: "Regulate light entering eye",
                clinical: "Test CN II, III, brainstem"
            },
            {
                name: "Baroreceptor Reflex",
                type: "Autonomic cardiovascular reflex",
                stimulus: "Blood pressure change",
                response: "Adjust heart rate and vascular tone",
                function: "Maintain blood pressure homeostasis",
                clinical: "Understanding syncope, orthostatic hypotension"
            }
        ],
        
        applications: [
            "Neurological diagnosis (reflexes test integrity of nervous system)",
            "Assessing spinal cord injury level and severity",
            "Monitoring infant neurological development",
            "Understanding movement disorders (Parkinson's, cerebral palsy)",
            "Rehabilitation after stroke or injury (utilize remaining reflexes)",
            "Anesthesia depth monitoring (reflexes suppressed when deeply anesthetized)",
            "Understanding autonomic dysreflexia (dangerous reflex in spinal cord injury)",
            "Physical therapy (use reflexes to facilitate movement patterns)"
        ]
    };
    
    return content;
}

handleBrainStructure(problem) {
    const content = {
        topic: "Brain Structure and Function: Organization of the Central Command Center",
        category: 'neuroanatomy',
        summary: "The human brain is organized into distinct regions with specialized functions. Major divisions include the cerebrum (higher cognitive functions), cerebellum (motor coordination), and brainstem (vital functions). Understanding brain structure is essential for comprehending cognition, behavior, and neurological disorders.",
        
        keyDefinitions: {
            "Gray Matter": "Neuron cell bodies, dendrites, unmyelinated axons - processing centers",
            "White Matter": "Myelinated axons - communication pathways between regions",
            "Cortex": "Outer layer of gray matter (cerebral cortex, cerebellar cortex)",
            "Nucleus": "Cluster of neuron cell bodies in CNS (not to be confused with cell nucleus)",
            "Tract": "Bundle of axons with common origin, destination, and function in CNS",
            "Gyrus": "Ridge/fold on cerebral cortex (plural: gyri)",
            "Sulcus": "Groove between gyri (plural: sulci)",
            "Fissure": "Deep sulcus (e.g., longitudinal fissure separates hemispheres)",
            "Ventricles": "Fluid-filled cavities in brain (contain CSF)",
            "Commissure": "Axon tract connecting left and right hemispheres"
        },
        
        majorDivisions: {
            forebrain: {
                name: "Prosencephalon (Forebrain)",
                subdivisions: {
                    telencephalon: {
                        name: "Cerebrum (Cerebral Hemispheres)",
                        components: "Cerebral cortex, basal ganglia, limbic system",
                        function: "Higher cognitive functions, sensory processing, voluntary movement, emotion, memory"
                    },
                    diencephalon: {
                        name: "Diencephalon",
                        components: "Thalamus, hypothalamus, epithalamus (pineal gland)",
                        function: "Sensory relay, homeostasis, endocrine control, circadian rhythms"
                    }
                }
            },
            
            midbrain: {
                name: "Mesencephalon (Midbrain)",
                components: "Tectum (superior and inferior colliculi), tegmentum, cerebral peduncles",
                function: "Visual and auditory reflexes, motor control, arousal"
            },
            
            hindbrain: {
                name: "Rhombencephalon (Hindbrain)",
                subdivisions: {
                    metencephalon: {
                        components: "Pons, cerebellum",
                        function: "Relay between cerebrum and cerebellum, motor coordination"
                    },
                    myelencephalon: {
                        component: "Medulla oblongata",
                        function: "Vital functions (breathing, heart rate, blood pressure)"
                    }
                }
            }
        },
        
        cerebrum: {
            overview: {
                size: "Largest part of brain (~85% of brain mass)",
                structure: "Two hemispheres connected by corpus callosum",
                surface: "Highly folded (gyri and sulci increase surface area)",
                cortexThickness: "2-4 mm gray matter",
                layers: "Six layers of neurons (neocortex)",
                neuronCount: "~16 billion neurons in cortex"
            },
            
            hemispheres: {
                left: {
                    dominance: "Language in ~95% of people (Broca's area, Wernicke's area)",
                    specialization: "Language, logic, analytical thinking, math, sequencing",
                    control: "Right side of body (crossed pathways)"
                },
                right: {
                    specialization: "Spatial awareness, face recognition, music, creativity, holistic thinking",
                    control: "Left side of body"
                },
                lateralization: "Functional specialization of hemispheres (not absolute - both cooperate)",
                callosum: {
                    name: "Corpus callosum",
                    structure: "Large commissure (~200 million axons)",
                    function: "Allows hemispheres to communicate and integrate information",
                    splitBrain: "Surgical severing (treatment for severe epilepsy) reveals hemispheric specialization"
                }
            },
            
            lobes: {
                frontal: {
                    location: "Anterior (front), behind forehead",
                    boundaries: "Central sulcus (posterior), lateral fissure (inferior)",
                    size: "Largest lobe (~40% of cortex)",
                    functions: {
                        motorCortex: {
                            location: "Precentral gyrus (just anterior to central sulcus)",
                            function: "Voluntary movement control",
                            organization: "Somatotopic (motor homunculus) - body mapped upside down",
                            neurons: "Upper motor neurons (pyramidal cells)",
                            lesion: "Paralysis or weakness (contralateral)"
                        },
                        premotorCortex: {
                            location: "Anterior to motor cortex",
                            function: "Motor planning, sequences of movements",
                            example: "Planning to reach for object"
                        },
                        prefrontalCortex: {
                            location: "Anterior-most frontal lobe",
                            functions: [
                                "Executive functions (planning, decision-making, problem-solving)",
                                "Working memory",
                                "Personality, social behavior",
                                "Impulse control, emotional regulation",
                                "Attention, concentration"
                            ],
                            development: "Matures last (not fully developed until mid-20s)",
                            damage: "Phineas Gage case - personality changes, impulsivity"
                        },
                        brocasArea: {
                            location: "Left inferior frontal gyrus (usually left hemisphere)",
                            function: "Speech production, language expression",
                            lesion: "Broca's aphasia - can understand but can't produce fluent speech (telegraphic speech)"
                        }
                    }
                },
                
                parietal: {
                    location: "Superior and posterior to frontal lobe",
                    boundaries: "Central sulcus (anterior), parieto-occipital sulcus (posterior)",
                    functions: {
                        somatosensoryCortex: {
                            location: "Postcentral gyrus (just posterior to central sulcus)",
                            function: "Process touch, pressure, pain, temperature, proprioception",
                            organization: "Somatotopic (sensory homunculus) - body mapped upside down",
                            lesion: "Loss of sensation (contralateral)"
                        },
                        posteriorParietal: {
                            function: "Spatial awareness, attention, integration of sensory info",
                            lesion: "Neglect syndrome (ignore contralateral side), apraxia (can't perform learned movements)"
                        }
                    }
                },
                
                temporal: {
                    location: "Lateral (side), below lateral fissure",
                    functions: {
                        auditoryCortex: {
                            location: "Superior temporal gyrus",
                            function: "Process auditory information (hearing)",
                            organization: "Tonotopic (frequency map)",
                            lesion: "Hearing deficits, auditory processing problems"
                        },
                        wernickes Area: {
                            location: "Left posterior superior temporal gyrus (usually left)",
                            function: "Language comprehension, understanding speech",
                            lesion: "Wernicke's aphasia - fluent but meaningless speech, poor comprehension"
                        },
                        memory: {
                            hippocampus: "Medial temporal lobe - formation of new declarative memories",
                            functions: "Object recognition, face recognition (fusiform gyrus)",
                            lesion: "Anterograde amnesia (can't form new memories - HM case)"
                        }
                    }
                },
                
                occipital: {
                    location: "Posterior (back of brain)",
                    boundaries: "Parieto-occipital sulcus (anterior)",
                    size: "Smallest lobe",
                    function: {
                        primaryVisual: {
                            location: "Calcarine sulcus (V1)",
                            function: "Receive and process visual information from retina",
                            organization: "Retinotopic (visual field map), contralateral visual fields",
                            lesion: "Blindness in contralateral visual field (hemianopia)"
                        },
                        visualAssociation: {
                            areas: "V2, V3, V4, V5 (surrounding V1)",
                            functions: "Color processing, motion detection, object recognition",
                            pathways: {
                                ventral: "What pathway - object identification (to temporal lobe)",
                                dorsal: "Where pathway - spatial location, motion (to parietal lobe)"
                            }
                        }
                    }
                },
                
                insula: {
                    location: "Hidden beneath lateral fissure (between temporal and frontal/parietal)",
                    functions: [
                        "Taste (gustatory cortex)",
                        "Interoception (internal body awareness - heartbeat, breathing, gut)",
                        "Emotions (especially disgust)",
                        "Empathy, self-awareness",
                        "Pain perception"
                    ]
                }
            },
            
            basalGanglia: {
                name: "Basal Ganglia (Basal Nuclei)",
                location: "Deep within cerebrum (subcortical)",
                components: {
                    striatum: "Caudate nucleus + Putamen (input structures)",
                    globusPallidus: "Internal and external segments (output structures)",
                    substantiaNigra: "In midbrain, produces dopamine",
                    subthalamicNucleus: "Regulatory structure"
                },
                connections: {
                    input: "Cerebral cortex (all lobes) → striatum",
                    processing: "Striatum → globus pallidus/substantia nigra → thalamus",
                    output: "Thalamus → motor cortex, prefrontal cortex"
                },
                functions: [
                    "Motor control - initiate and regulate voluntary movements",
                    "Inhibit unwanted movements",
                    "Motor learning (procedural memory - riding bike, typing)",
                    "Habit formation",
                    "Reward processing, motivation",
                    "Cognitive functions (planning, working memory)"
                ],
                disorders: {
                    parkinsons: "Degeneration of dopamine neurons in substantia nigra → tremor, rigidity, bradykinesia",
                    huntingtons: "Degeneration of striatum → chorea (involuntary jerky movements), cognitive decline",
                    dystonia: "Sustained muscle contractions, abnormal postures",
                    tourettes: "Tics (involuntary movements/vocalizations)"
                }
            },
            
            limbicSystem: {
                name: "Limbic System",
                description: "Group of interconnected structures involved in emotion, memory, motivation",
                components: {
                    hippocampus: {
                        location: "Medial temporal lobe",
                        structure: "Seahorse-shaped, part of archicortex (3 layers)",
                        function: "Formation of new declarative (explicit) memories - facts and events",
                        processing: "Consolidation (transfer short-term → long-term memory)",
                        lesion: "Anterograde amnesia (HM - can't form new memories), spatial memory deficits",
                        alzheimers: "Early degeneration → memory loss"
                    },
                    amygdala: {
                        location: "Medial temporal lobe, anterior to hippocampus",
                        structure: "Almond-shaped nucleus",
                        functions: [
                            "Emotional processing (especially fear and anxiety)",
                            "Emotional memory (remember emotional events better)",
                            "Threat detection (rapid response to danger)",
                            "Social behavior, facial expression recognition"
                        ],
                        lesion: "Impaired fear responses, poor emotional memory, social deficits",
                        PTSD: "Hyperactive amygdala → exaggerated fear responses"
                    },
                    cingulate Gyrus: {
                        location: "Above corpus callosum, part of medial cortex",
                        divisions: {
                            anterior: "Emotion, attention, error detection, conflict monitoring",
                            posterior: "Spatial memory, navigation"
                        },
                        function: "Link emotion with higher cognition"
                    },
                    septum: {
                        function: "Pleasure, reinforcement"
                    },
                    mammillaryBodies: {
                        location: "Posterior hypothalamus",
                        function: "Memory (part of Papez circuit)",
                        damage: "Korsakoff's syndrome (chronic alcoholism) → amnesia, confabulation"
                    },
                    fornix: {
                        structure: "C-shaped fiber bundle",
                        connection: "Hippocampus → mammillary bodies",
                        function: "Memory circuit"
                    }
                },
                overallFunctions: [
                    "Emotion generation and regulation",
                    "Memory formation (especially emotional memories)",
                    "Motivation and reward",
                    "Olfaction (smell - strong emotional/memory link)",
                    "Social behavior"
                ],
                disorders: "Depression, anxiety disorders, PTSD, temporal lobe epilepsy, Alzheimer's disease"
            }
        },
        
        diencephalon: {
            thalamus: {
                location: "On either side of third ventricle, deep in brain",
                structure: "Two egg-shaped masses, multiple nuclei (~50 subdivisions)",
                nickName: "Gateway to cerebral cortex",
                functions: {
                    sensoryRelay: {
                        role: "Relay station for ALL sensory information (except smell) going to cortex",
                        visual: "Lateral geniculate nucleus (LGN) → occipital cortex",
                        auditory: "Medial geniculate nucleus (MGN) → temporal cortex",
                        somatosensory: "Ventral posterior nucleus → parietal cortex",
                        processing: "Not just relay - filters, integrates, modulates sensory info"
                    },
                    motorRelay: {
                        role: "Relay motor signals from basal ganglia and cerebellum to motor cortex",
                        ventral Lateral: "Cerebellum/basal ganglia → motor cortex"
                    },
                    consciousness: {
                        role: "Regulate cortical arousal and consciousness",
                        intralaminar: "Nuclei project diffusely to cortex (reticular activating system)",
                        damage: "Coma, altered consciousness"
                    },
                    cognition: {
                        medial Dorsal: "Prefrontal cortex connections - working memory, attention",
                        anterior: "Limbic connections - emotion"
                    }
                },
                lesion: "Sensory loss (contralateral), thalamic pain syndrome, altered consciousness",
                connections: "Reciprocal connections with cortex (thalamocortical loops)"
            },
            
            hypothalamus: {
                location: "Below thalamus, forms floor and walls of third ventricle",
                size: "Small (~4 g, size of almond) but crucial",
                nickname: "Master regulator of homeostasis",
                functions: {
                    autonomicControl: "Regulates sympathetic and parasympathetic systems",
                    endocrineControl: {
                        pituitary: "Controls pituitary gland (master endocrine gland)",
                        releasing Hormones: "TRH, CRH, GnRH, GHRH, dopamine, somatostatin",
                        posterior: "Produces ADH and oxytocin (stored/released by posterior pituitary)"
                    },
                    homeostasis: {
                        temperature: "Thermoregulation (fever, sweating, shivering)",
                        osmolarity: "Water balance (thirst, ADH release)",
                        hunger Satiety: "Feeding behavior (arcuate, lateral, ventromedial nuclei)",
                        sleep Wake: "Circadian rhythms (suprachiasmatic nucleus - SCN)",
                        bloodPressure: "Cardiovascular regulation"
                    },
                    behavior: {
                        aggression: "Fight-or-flight responses",
                        mating: "Sexual behavior, reproduction",
                        parenting: "Maternal/paternal behaviors"
                    }
                },
                nuclei: {
                    SCN: "Suprachiasmatic nucleus - circadian clock (receives light info from retina)",
                    arcuate: "Feeding control (NPY neurons - hunger; POMC neurons - satiety)",
                    paraventricular: "Oxytocin, ADH, CRH production",
                    lateral: "Hunger center (orexin neurons)",
                    ventromedial: "Satiety center"
                },
                lesions: {
                    anteriorLateral: "Inability to regulate temperature",
                    ventromedial: "Obesity (loss of satiety signal)",
                    SCN: "Disrupted circadian rhythms"
                }
            },
            
            epithalamus: {
                components: {
                    pinealGland: {
                        location: "Posterior to thalamus, midline",
                        hormone: "Melatonin (regulates sleep-wake cycle)",
                        function: "Circadian rhythms, seasonal reproduction (in some mammals)",
                        regulation: "Darkness → melatonin secretion; light → inhibition",
                        descartes: "Descartes thought it was 'seat of the soul' (incorrect)"
                    },
                    habenula: "Relay for limbic system, reward/aversion processing"
                }
            }
        },
        
        brainstem: {
            overview: {
                location: "Connects cerebrum to spinal cord",
                structure: "Midbrain, pons, medulla oblongata (superior to inferior)",
                functions: [
                    "Relay between brain and spinal cord",
                    "Control vital functions (breathing, heart rate, consciousness)",
                    "Cranial nerve nuclei (10 of 12 cranial nerves)",
                    "Reflexes (eye movements, pupil, swallowing, coughing)"
                ],
                importance: "Damage often fatal (controls vital functions)"
            },
            
            midbrain: {
                name: "Mesencephalon",
                location: "Superior-most brainstem, continuous with diencephalon",
                structures: {
                    cerebralPeduncles: {
                        location: "Anterior (ventral) midbrain",
                        content: "Descending motor tracts (corticospinal, corticobulbar)",
                        function: "Conduct motor signals from cortex to spinal cord/brainstem"
                    },
                    substantiaNigra: {
                        location: "Within cerebral peduncles",
                        cells: "Dopaminergic neurons (darkly pigmented - neuromelanin)",
                        function: "Motor control (part of basal ganglia circuit)",
                        projection: "To striatum (nigrostriatal pathway)",
                        parkinsons: "Degeneration → loss of dopamine → motor symptoms"
                    },
                    tectum: {
                        location: "Posterior (dorsal) midbrain",
                        components: {
                            superiorColliculi: {
                                function: "Visual reflexes (tracking moving objects, orienting eyes/head)",
                                connections: "Retina → superior colliculus → eye muscles"
                            },
                            inferiorColliculi: {
                                function: "Auditory relay (inferior colliculus → MGN → auditory cortex)",
                                reflex: "Startle response to loud sounds"
                            }
                        }
                    },
                    reticular Formation: {
                        location: "Throughout brainstem (midbrain, pons, medulla)",
                        structure: "Diffuse network of neurons",
                        functions: {
                            RAS: "Reticular Activating System - arousal, consciousness, sleep-wake",
                            motor: "Muscle tone modulation",
                            autonomic: "Cardiovascular, respiratory control",
                            pain: "Pain modulation (descending pathways)"
                        },
                        lesion: "Coma, locked-in syndrome"
                    },
                    periaqueductalGray: {
                        location: "Surrounds cerebral aqueduct",
                        function: "Pain modulation (endogenous opioids), defensive behavior"
                    }
                },
                cranialNerves: "CN III (oculomotor), CN IV (trochlear)"
            },
            
            pons: {
                name: "Pons ('bridge')",
                location: "Middle brainstem, between midbrain and medulla",
                structure: "Bulges anteriorly",
                functions: {
                    relay: "Cerebral cortex ↔ cerebellum communication",
                    pontine Nuclei: "Receive cortical input, project to cerebellum (cortico-ponto-cerebellar pathway)",
                    respiratory: "Pneumotaxic and apneustic centers regulate breathing rhythm",
                    sleep: "REM sleep control"
                },
                cranialNerves: "CN V (trigeminal), CN VI (abducens), CN VII (facial), CN VIII (vestibulocochlear)"
            },
            
            medulla: {
                name: "Medulla Oblongata",
                location: "Inferior-most brainstem, continuous with spinal cord",
                transitions: "Foramen magnum (where medulla becomes spinal cord)",
                vitalCenters: {
                    cardiovascular: "Regulate heart rate, blood pressure (baroreceptor reflex)",
                    respiratory: "Rhythmic breathing (medullary respiratory center)",
                    vomiting: "Vomiting center",
                    coughing: "Cough reflex",
                    swallowing: "Swallowing reflex"
                },
                structures: {
                    pyramids: {
                        location: "Anterior medulla",
                        content: "Corticospinal tracts (motor)",
                        decussation: "Pyramidal decussation - ~90% of fibers cross (explains contralateral motor control)"
                    },
                    olives: {
                        location: "Lateral medulla",
                        content: "Inferior olivary nucleus",
                        function: "Motor learning, timing (projects to cerebellum)"
                    }
                },
                cranialNerves: "CN IX (glossopharyngeal), CN X (vagus), CN XI (accessory), CN XII (hypoglossal)",
                lesion: "Often fatal (loss of vital functions), lateral medullary syndrome (Wallenberg)"
            }
        },
        
        cerebellum: {
            name: "Cerebellum ('little brain')",
            location: "Posterior cranial fossa, dorsal to pons and medulla",
            size: "~10% of brain volume, but contains ~50% of total brain neurons",
            structure: {
                hemispheres: "Two lateral hemispheres",
                vermis: "Midline structure connecting hemispheres",
                folia: "Tightly packed folds (like cerebral gyri but much finer)",
                layers: {
                    molecular: "Outer layer - parallel fibers, Purkinje cell dendrites",
                    Purkinje: "Single layer of large Purkinje cells (only output neurons)",
                    granular: "Densely packed granule cells (most neurons in brain)"
                }
            },
            connections: {
                input: {
                    mossy Fibers: "From spinal cord (proprioception), pons (motor commands)",
                    climbing Fibers: "From inferior olive (error signals)"
                },
                output: {
                    Purkinje: "Only output - inhibitory (GABA) → deep cerebellar nuclei",
                    deep Nuclei: "Dentate, interposed, fastigial → thalamus, brainstem"
                },
                peduncles: {
                    superior: "Output to midbrain (thalamus → motor cortex)",
                    middle: "Input from pons (largest)",
                    inferior: "Input from spinal cord, medulla"
                }
            },
            functions: {
                motorCoordination: {
                    smoothness: "Smooth, coordinated movements (vs. jerky)",
                    timing: "Precise timing of muscle contractions",
                    balance: "Maintain equilibrium, posture",
                    motorLearning: "Learn and refine motor skills (riding bike, playing piano)"
                },
                errorCorrection: {
                    comparator: "Compares intended movement with actual movement",
                    adjustment: "Corrects errors in real-time (feedforward control)",
                    prediction: "Predicts consequences of movements"
                },
                cognition: {
                    language: "Verbal fluency, grammar",
                    attention: "Shifting attention",
                    planning: "Cognitive planning (similar to motor planning)",
                    emotion: "Emotional regulation (vermis connections to limbic)"
                }
            },
            divisions: {
                vestibulocerebellum: {
                    regions: "Flocculonodular lobe",
                    input: "Vestibular system (inner ear - balance)",
                    function: "Balance, eye movements (vestibulo-ocular reflex)",
                    lesion: "Loss of balance, nystagmus (involuntary eye movements)"
                },
                spinocerebellum: {
                    regions: "Vermis and intermediate hemispheres",
                    input: "Spinal cord (proprioception)",
                    function: "Posture, limb movements (proximal muscles)",
                    lesion: "Ataxia (uncoordinated gait), truncal instability"
                },
                cerebrocerebellum: {
                    regions: "Lateral hemispheres (largest in humans)",
                    input: "Cerebral cortex (via pons)",
                    function: "Motor planning, cognitive functions",
                    lesion: "Dysmetria (overshooting targets), intention tremor, cognitive deficits"
                }
            },
            lesionSigns: {
                ataxia: "Uncoordinated movements, drunken gait",
                dysmetria: "Inability to judge distance (overshoot or undershoot)",
                dysdiadochokinesia: "Inability to perform rapid alternating movements",
                intentionTremor: "Tremor during movement (vs. resting tremor in Parkinson's)",
                nystagmus: "Involuntary eye oscillations",
                dysarthria: "Slurred, scanning speech",
                hypotonia: "Decreased muscle tone",
                ipsilateral: "Cerebellar lesions affect SAME side of body (unlike cerebral)"
            },
            disorders: "Cerebellar ataxia, stroke, tumors, alcohol toxicity, genetic disorders (spinocerebellar ataxia)"
        },
        
        ventriclesAndCSF: {
            ventricles: {
                lateral: "Two C-shaped cavities in cerebral hemispheres",
                third: "Midline, between thalami",
                fourth: "Between pons/medulla and cerebellum",
                cerebralAqueduct: "Connects third and fourth ventricles (through midbrain)"
            },
            CSF: {
                production: "Choroid plexuses in ventricles (~500 ml/day)",
                volume: "~150 ml total (constantly produced and reabsorbed)",
                composition: "Clear, colorless fluid (similar to blood plasma but lower protein)",
                circulation: "Lateral ventricles → third ventricle → aqueduct → fourth ventricle → subarachnoid space",
                reabsorption: "Arachnoid granulations (villi) → superior sagittal sinus (venous blood)",
                functions: [
                    "Cushion brain/spinal cord (buoyancy reduces effective weight)",
                    "Remove metabolic wastes",
                    "Circulate nutrients",
                    "Chemical stability (constant environment for neurons)"
                ],
                sampling: "Lumbar puncture (spinal tap) for diagnostic tests"
            },
            hydrocephalus: {
                cause: "Obstruction of CSF flow or impaired reabsorption",
                types: {
                    obstructive: "Blockage (tumor, stenosis)",
                    communicating: "Impaired reabsorption"
                },
                effects: "Increased intracranial pressure, ventricular enlargement",
                symptoms: "Headache, nausea, vision problems, cognitive decline",
                infantile: "Head enlargement (skull not yet fused)",
                treatment: "Shunt (drain CSF to abdomen or heart)"
            }
        },
        
        bloodSupply: {
            arterial: {
                internalCarotid: {
                    origin: "Common carotid artery",
                    branches: [
                        "Anterior cerebral artery (ACA) - medial frontal/parietal",
                        "Middle cerebral artery (MCA) - lateral hemisphere (largest)"
                    ],
                    territory: "Anterior circulation (~80% of blood to brain)"
                },
                vertebral: {
                    origin: "Subclavian artery",
                    course: "Through vertebral foramina → foramen magnum",
                    fusion: "Join to form basilar artery (at pons)",
                    branches: [
                        "Posterior cerebral artery (PCA) - occipital, inferior temporal",
                        "Cerebellar arteries (PICA, AICA, SCA)"
                    ],
                    territory: "Posterior circulation (brainstem, cerebellum, occipital)"
                },
                circleOfWillis: {
                    structure: "Anastomotic ring at base of brain",
                    components: "ACA, MCA, PCA, communicating arteries",
                    function: "Collateral circulation (backup if one artery blocked)",
                    variation: "Complete in only ~50% of people"
                }
            },
            venous: {
                superficial: "Superficial cerebral veins → superior sagittal sinus",
                deep: "Deep cerebral veins → great vein of Galen → straight sinus",
                sinuses: "Dural venous sinuses (between dura layers) → internal jugular vein"
            },
            bloodBrainBarrier: {
                structure: "Tight junctions between capillary endothelial cells + astrocyte end-feet",
                function: "Protect brain from toxins, pathogens, maintain stable environment",
                permeable: "O₂, CO₂, glucose, lipid-soluble molecules (alcohol, anesthetics)",
                impermeable: "Most drugs, proteins, antibodies, bacteria",
                disease: "Compromised in inflammation, tumors, stroke"
            },
            stroke: {
                ischemic: {
                    cause: "Blocked artery (thrombus or embolus) - 87% of strokes",
                    MCA: "Most common - weakness/numbness face/arm (contralateral), aphasia (if left)",
                    ACA: "Leg weakness (contralateral)",
                    PCA: "Vision loss (contralateral visual field)",
                    treatment: "tPA (clot-buster) if within 4.5 hours"
                },
                hemorrhagic: {
                    cause: "Ruptured blood vessel (aneurysm, hypertension) - 13% of strokes",
                    effects: "Blood in brain tissue or subarachnoid space",
                    severe: "High mortality, increased intracranial pressure"
                }
            }
        },
        
        clinicalSignificance: {
            localization: {
                principle: "Specific deficits indicate lesion location",
                examples: {
                    motor: "Weakness → frontal lobe (motor cortex, corticospinal tract)",
                    sensory: "Numbness → parietal lobe (sensory cortex)",
                    vision: "Blindness → occipital lobe, optic pathway",
                    language: "Aphasia → left hemisphere (Broca's, Wernicke's)",
                    memory: "Amnesia → temporal lobe (hippocampus)",
                    balance: "Ataxia → cerebellum",
                    consciousness: "Coma → brainstem (RAS)"
                }
            },
            imaging: {
                CT: "Quick, detect hemorrhage, skull fractures",
                MRI: "Detailed anatomy, better soft tissue contrast",
                fMRI: "Functional imaging (detect active brain regions)",
                PET: "Metabolic activity (glucose uptake, blood flow)",
                angiography: "Blood vessels (detect aneurysms, stenosis)"
            },
            disorders: {
                stroke: "Vascular damage → focal deficits based on territory",
                trauma: "Traumatic brain injury (TBI) - concussion, contusion, hematoma",
                tumors: "Gliomas, meningiomas - mass effect, seizures",
                degenerative: "Alzheimer's, Parkinson's, Huntington's - progressive loss of neurons",
                epilepsy: "Seizures (abnormal synchronous neuronal firing)",
                infection: "Meningitis (meninges), encephalitis (brain tissue)",
                developmental: "Cerebral palsy, hydrocephalus, neural tube defects"
            }
        },
        
        examples: [
            {
                region: "Primary Motor Cortex (Precentral Gyrus)",
                function: "Voluntary movement control",
                lesion: "Contralateral paralysis or weakness",
                test: "Ask patient to move limbs, assess strength"
            },
            {
                region: "Broca's Area (Left Inferior Frontal)",
                function: "Speech production",
                lesion: "Expressive aphasia (can understand, can't speak fluently)",
                test: "Ask patient to speak, name objects"
            },
            {
                region: "Wernicke's Area (Left Posterior Temporal)",
                function: "Language comprehension",
                lesion: "Receptive aphasia (fluent nonsense speech, poor comprehension)",
                test: "Ask patient to follow commands"
            },
            {
                region: "Hippocampus (Medial Temporal)",
                function: "Memory formation",
                lesion: "Anterograde amnesia (can't form new memories)",
                example: "Patient HM after bilateral hippocampal removal"
            },
            {
                region: "Cerebellum",
                function: "Motor coordination, balance",
                lesion: "Ataxia, dysmetria, intention tremor",
                test: "Finger-to-nose, heel-to-shin, tandem gait"
            },
            {
                region: "Medulla (Cardiovascular/Respiratory Centers)",
                function: "Vital functions (heart rate, breathing)",
                lesion: "Often fatal",
                example: "Locked-in syndrome (aware but paralyzed)"
            }
        ],
        
        applications: [
            "Neurosurgery (remove tumors, treat epilepsy, deep brain stimulation)",
            "Stroke diagnosis and treatment (determine affected territory)",
            "Understanding aphasia and language disorders",
            "Alzheimer's disease (hippocampal degeneration → memory loss)",
            "Parkinson's disease (substantia nigra → motor symptoms)",
            "Traumatic brain injury management",
            "Epilepsy treatment (identify seizure focus)",
            "Psychiatric disorders (imaging abnormalities in depression, schizophrenia)",
            "Brain-computer interfaces (motor cortex signals control devices)"
        ]
    };
    
    return content;
}

handleHormoneMechanisms(problem) {
    const content = {
        topic: "Hormone Mechanisms of Action: How Hormones Produce Cellular Effects",
        category: 'endocrinology',
        summary: "Hormones exert their effects by binding to specific receptors on or in target cells, triggering signaling cascades that alter cellular function. The mechanism depends on hormone type: lipid-soluble hormones (steroids, thyroid) cross membranes and alter gene expression, while water-soluble hormones (peptides, amines) bind surface receptors and use second messengers.",
        
        keyDefinitions: {
            "Hormone Receptor": "Protein that binds hormone and initiates cellular response",
            "Target Cell": "Cell with receptors for a specific hormone",
            "Affinity": "Strength of hormone-receptor binding",
            "Specificity": "Receptor binds only specific hormone(s)",
            "Sensitivity": "Responsiveness of cell to hormone (depends on receptor number/affinity)",
            "Second Messenger": "Intracellular signaling molecule activated by hormone-receptor binding",
            "Signal Amplification": "One hormone molecule triggers cascade producing many product molecules",
            "Downregulation": "Decrease in receptor number (chronic high hormone exposure)",
            "Upregulation": "Increase in receptor number (chronic low hormone exposure)",
            "Permissiveness": "One hormone enhances responsiveness to another",
            "Synergism": "Combined effect of two hormones greater than sum of individual effects",
            "Antagonism": "One hormone opposes action of another"
        },
        
        hormoneClassification: {
            byChemistry: {
                peptideProteins: {
                    structure: "Amino acid chains (3 to 200+ amino acids)",
                    synthesis: "Ribosomes → RER → Golgi → secretory vesicles",
                    storage: "Stored in vesicles until release signal",
                    release: "Exocytosis (triggered by stimulus)",
                    transport: "Dissolve in blood plasma (water-soluble)",
                    halfLife: "Short (minutes) - rapidly degraded",
                    examples: "Insulin, glucagon, GH, ACTH, TSH, FSH, LH, prolactin, oxytocin, ADH, PTH, calcitonin",
                    receptorLocation: "Cell membrane (can't cross lipid bilayer)",
                    mechanism: "Second messenger systems"
                },
                
                steroids: {
                    structure: "Derived from cholesterol (4-ring structure)",
                    synthesis: "Synthesized on demand (not stored) in mitochondria and smooth ER",
                    release: "Diffuse out of cell immediately after synthesis",
                    transport: "Bound to carrier proteins (lipid-soluble, hydrophobic)",
                    halfLife: "Long (hours to days) - bound to proteins protects from degradation",
                    examples: "Cortisol, aldosterone, testosterone, estrogen, progesterone, vitamin D (calcitriol)",
                    receptorLocation: "Intracellular (cytoplasm or nucleus)",
                    mechanism: "Gene transcription (alter protein synthesis)"
                },
                
                amines: {
                    structure: "Derived from amino acids (tyrosine or tryptophan)",
                    types: {
                        catecholamines: {
                            examples: "Epinephrine, norepinephrine, dopamine",
                            derivedFrom: "Tyrosine",
                            properties: "Water-soluble",
                            storage: "Vesicles (like peptides)",
                            receptor: "Cell membrane",
                            mechanism: "Second messengers (like peptides)"
                        },
                        thyroidHormones: {
                            examples: "T₃ (triiodothyronine), T₄ (thyroxine)",
                            derivedFrom: "Tyrosine + iodine",
                            properties: "Lipid-soluble (despite being amines)",
                            transport: "Carrier proteins (thyroid-binding globulin)",
                            receptor: "Intracellular (nucleus)",
                            mechanism: "Gene transcription (like steroids)"
                        }
                    }
                },
                
                eicosanoids: {
                    structure: "20-carbon fatty acids",
                    examples: "Prostaglandins, leukotrienes, thromboxanes",
                    synthesis: "From arachidonic acid (cell membrane phospholipids)",
                    action: "Local (paracrine/autocrine), not transported in blood",
                    functions: "Inflammation, pain, fever, blood clotting, smooth muscle contraction",
                    note: "Technically local hormones, not classic endocrine hormones"
                }
            },
            
            bySolubility: {
                waterSoluble: {
                    types: "Peptides, proteins, catecholamines",
                    membrane: "Cannot cross lipid bilayer",
                    receptors: "Cell surface (membrane-bound)",
                    mechanism: "Second messengers (rapid response)",
                    halfLife: "Short",
                    example: "Insulin binds receptor → activates signaling cascade → glucose uptake"
                },
                
                lipidSoluble: {
                    types: "Steroids, thyroid hormones",
                    membrane: "Cross lipid bilayer freely",
                    receptors: "Intracellular (cytoplasm or nucleus)",
                    mechanism: "Gene transcription (slow but long-lasting)",
                    halfLife: "Long",
                    example: "Cortisol enters cell → binds receptor → alters gene expression"
                }
            }
        },
        
        mechanismWaterSoluble: {
            overview: {
                hormones: "Peptides, proteins, catecholamines",
                receptorType: "Cell surface receptors (transmembrane proteins)",
                binding: "Hormone (first messenger) binds receptor → activates second messenger system",
                speed: "Rapid (seconds to minutes)",
                duration: "Short (hormone degraded quickly)",
                response: "Alter enzyme activity, ion channels, protein phosphorylation - NOT gene expression (usually)"
            },
            
            secondMessengerSystems: {
                cAMP_system: {
                    name: "Cyclic AMP (cAMP) System",
                    hormones: "Epinephrine, glucagon, ACTH, TSH, LH, FSH, ADH (V2 receptors), PTH",
                    receptorType: "G-protein coupled receptor (GPCR)",
                    mechanism: {
                        step1: "Hormone binds receptor (outside cell)",
                        step2: "Receptor activates G-protein (Gs = stimulatory)",
                        step3: "G-protein activates adenylyl cyclase (membrane enzyme)",
                        step4: "Adenylyl cyclase converts ATP → cAMP (second messenger)",
                        step5: "cAMP activates protein kinase A (PKA)",
                        step6: "PKA phosphorylates target proteins → cellular response",
                        step7: "Phosphodiesterase breaks down cAMP → terminates signal"
                    },
                    amplification: "1 hormone → many cAMP → many PKA → many phosphorylated proteins (cascade)",
                    responses: {
                        epinephrine: "Glycogen breakdown (liver, muscle) - PKA phosphorylates enzymes",
                        glucagon: "Glucose production (liver) - PKA activates gluconeogenesis enzymes"
                    },
                    inhibitory: "Some hormones use Gi protein → inhibit adenylyl cyclase → decrease cAMP"
                },
                
                calcium_IP3_DAG: {
                    name: "Calcium/IP₃/DAG System (Phospholipase C System)",
                    hormones: "Epinephrine (α1), ADH (V1), oxytocin, TRH, GnRH, angiotensin II",
                    receptorType: "G-protein coupled receptor (GPCR)",
                    mechanism: {
                        step1: "Hormone binds receptor",
                        step2: "Receptor activates G-protein (Gq)",
                        step3: "G-protein activates phospholipase C (PLC)",
                        step4: "PLC cleaves PIP₂ (membrane phospholipid) → IP₃ + DAG",
                        step5a: "IP₃ (inositol triphosphate) → opens Ca²⁺ channels on ER → Ca²⁺ released into cytoplasm",
                        step5b: "DAG (diacylglycerol) + Ca²⁺ → activate protein kinase C (PKC)",
                        step6: "Ca²⁺ and PKC phosphorylate target proteins → cellular response"
                    },
                    calciumRoles: [
                        "Binds calmodulin → activate enzymes",
                        "Triggers exocytosis (neurotransmitter, hormone release)",
                        "Muscle contraction (binds troponin)",
                        "Second messenger for many hormones"
                    ],
                    responses: {
                        oxytocin: "Uterine contraction (Ca²⁺ triggers smooth muscle contraction)",
                        epinephrine: "Vasoconstriction (α1 receptors) - smooth muscle contraction"
                    }
                },
                
                tyrosineKinase: {
                    name: "Tyrosine Kinase System",
                    hormones: "Insulin, IGF-1, growth factors (EGF, PDGF)",
                    receptorType: "Receptor tyrosine kinase (RTK) - single transmembrane protein",
                    mechanism: {
                        step1: "Hormone binds receptor (extracellular domain)",
                        step2: "Receptor dimerizes (two receptors come together)",
                        step3: "Intracellular tyrosine kinase domains activated (autophosphorylation)",
                        step4: "Activated receptor phosphorylates target proteins on tyrosine residues",
                        step5: "Phosphorylated proteins trigger signaling cascades (PI3K/Akt, MAPK pathways)",
                        step6: "Cellular responses (glucose uptake, glycogen synthesis, protein synthesis, cell growth)"
                    },
                    insulinSpecific: {
                        binding: "Insulin binds insulin receptor (RTK)",
                        cascade: "Receptor phosphorylation → IRS proteins → PI3K → Akt",
                        GLUT4: "Akt triggers GLUT4 translocation to membrane → glucose uptake (muscle, fat)",
                        metabolism: "Activates glycogen synthase, lipid synthesis, protein synthesis",
                        growth: "Promotes cell growth and proliferation"
                    },
                    diabetes: "Type 2 diabetes - insulin resistance (receptor signaling impaired)"
                }
            },
            
            amplification: {
                concept: "One hormone molecule triggers production of many product molecules",
                cascade: "1 hormone → 10 receptors activated → 100 G-proteins → 1,000 cAMP → 10,000 PKA → 100,000 phosphorylated proteins",
                advantage: "Small amount of hormone produces large cellular response",
                example: "Single epinephrine molecule → millions of glucose molecules released"
            },
            
            termination: {
                hormoneBreakdown: "Hormones degraded by enzymes in blood, liver, kidneys",
                secondMessengerBreakdown: "cAMP → AMP (phosphodiesterase); Ca²⁺ pumped back into ER",
                dephosphorylation: "Phosphatases remove phosphate groups (reverse kinase action)",
                receptorInternalization: "Receptors endocytosed (downregulation)",
                halfLife: "Peptide hormones: minutes; steroids: hours to days"
            }
        },
        
        mechanismLipidSoluble: {
            overview: {
                hormones: "Steroids (cortisol, aldosterone, sex hormones), thyroid hormones (T₃, T₄)",
                transport: "Bound to carrier proteins in blood (>90% bound)",
                membranePermeability: "Diffuse across cell membrane (lipid-soluble)",
                receptorLocation: "Intracellular (cytoplasm or nucleus)",
                mechanism: "Alter gene transcription → change protein synthesis",
                speed: "Slow (hours to days) - requires transcription and translation",
                duration: "Long-lasting (hours to days)"
            },
            
            steroidHormones: {
                mechanism: {
                    step1: "Hormone dissociates from carrier protein in blood (free hormone)",
                    step2: "Hormone diffuses across cell membrane and nuclear membrane",
                    step3: "Hormone binds intracellular receptor (cytoplasm or nucleus)",
                    step4: "Hormone-receptor complex undergoes conformational change (activates receptor)",
                    step5: "Activated complex enters nucleus (if cytoplasmic receptor) or remains in nucleus",
                    step6: "Complex binds to hormone response element (HRE) on DNA (specific gene sequence)",
                    step7: "Alters gene transcription (increase or decrease mRNA production)",
                    step8: "mRNA translated → new proteins synthesized",
                    step9: "New proteins produce cellular response"
                },
                receptorTypes: {
                    glucocorticoid: "Cortisol",
                    mineralocorticoid: "Aldosterone",
                    androgen: "Testosterone",
                    estrogen: "Estradiol",
                    progesterone: "Progesterone"
                },
                examples: {
                    cortisol: {
                        receptor: "Glucocorticoid receptor (GR)",
                        genes: "Gluconeogenic enzymes, anti-inflammatory proteins",
                        effects: "Increase blood glucose, suppress immune system, breakdown protein/fat"
                    },
                    aldosterone: {
                        receptor: "Mineralocorticoid receptor (MR)",
                        genes: "ENaC (sodium channel), Na⁺/K⁺ ATPase pump",
                        location: "Kidney (distal tubule, collecting duct)",
                        effect: "Increase Na⁺ reabsorption, K⁺ secretion → water retention, blood pressure increase"
                    },
                    testosterone: {
                        receptor: "Androgen receptor (AR)",
                        genes: "Muscle protein synthesis, bone growth, male sex characteristics",
                        effects: "Muscle growth, deepening voice, facial hair, spermatogenesis"
                    },
                    estrogen: {
                        receptor: "Estrogen receptor (ER-α, ER-β)",
                        genes: "Reproductive tissue growth, bone density, cardiovascular protection",
                        effects: "Female sex characteristics, endometrial growth, bone density maintenance"
                    }
                },
                timeFrame: "Latency: 30 min to hours (transcription/translation time); Duration: hours to days (new proteins persist)"
            },
            
            thyroidHormones: {
                hormones: "T₃ (triiodothyronine) and T₄ (thyroxine)",
                active: "T₃ is more active (3-5× more potent than T₄)",
                conversion: "T₄ → T₃ (peripheral tissues - deiodinase enzyme)",
                mechanism: {
                    step1: "T₃/T₄ bound to transport proteins in blood (thyroid-binding globulin)",
                    step2: "Free T₃ enters cell (diffusion or transporter)",
                    step3: "Intracellular T₄ → T₃ (deiodinase)",
                    step4: "T₃ binds thyroid hormone receptor (TR) in nucleus",
                    step5: "TR binds thyroid response element (TRE) on DNA",
                    step6: "Alter gene transcription (metabolic enzymes, growth factors)",
                    step7: "New proteins → cellular response"
                },
                receptorTypes: "TR-α, TR-β (different tissue distribution)",
                effects: {
                    metabolism: "Increase metabolic rate (↑ Na⁺/K⁺ ATPase, ↑ mitochondrial enzymes)",
                    thermogenesis: "Increase heat production",
                    cardiovascular: "Increase heart rate, cardiac output (↑ β-adrenergic receptors)",
                    development: "Essential for brain development (infants), bone growth",
                    permissive: "Enhance sensitivity to catecholamines (epinephrine)"
                },
                disorders: {
                    hyperthyroidism: "Excess T₃/T₄ → high metabolism, weight loss, tachycardia, anxiety",
                    hypothyroidism: "Deficient T₃/T₄ → low metabolism, weight gain, bradycardia, fatigue"
                }
            },
            
            nonGenomicEffects: {
                rapid: "Some steroid hormones have rapid effects (seconds-minutes) - too fast for gene transcription",
                mechanism: "Membrane receptors for steroids (controversial but evidence exists)",
                examples: "Aldosterone rapid Na⁺ uptake, estrogen rapid vasodilation",
                note: "Most effects still via classic genomic mechanism (gene transcription)"
            }
        },
        
        receptorRegulation: {
            downregulation: {
                definition: "Decrease in receptor number or affinity",
                cause: "Chronic high hormone levels",
                mechanism: "Receptor internalization, degradation, or decreased synthesis",
                result: "Decreased cellular responsiveness (desensitization)",
                examples: {
                    insulinResistance: "Chronic high insulin → insulin receptors downregulated → Type 2 diabetes",
                    betaBlockers: "Chronic epinephrine → β-adrenergic receptors downregulated"
                },
                clinical: "Drug tolerance (e.g., opioids, benzodiazepines)"
            },
            
            upregulation: {
                definition: "Increase in receptor number or affinity",
                cause: "Chronic low hormone levels",
                mechanism: "Increased receptor synthesis",
                result: "Increased cellular responsiveness (supersensitivity)",
                examples: {
                    denervationSupersensitivity: "Nerve damage → loss of neurotransmitter → postsynaptic receptors upregulated",
                    hypothyroidism: "Low thyroid hormone → TSH receptors upregulated (attempting to compensate)"
                },
                clinical: "Withdrawal symptoms (suddenly stopping drug → receptors overly sensitive)"
            },
            
            permissiveness: {
                definition: "One hormone enhances target cell responsiveness to another hormone",
                mechanism: "First hormone increases receptors for second hormone",
                examples: {
                    thyroidEpinephrine: "Thyroid hormones increase β-adrenergic receptors → enhanced epinephrine effects (hyperthyroidism → tachycardia)",
                    cortisolGrowthHormone: "Cortisol enhances GH effects on cartilage"
                },
                note: "Not synergism (hormones don't have same effect), but one enables other"
            },
            
            synergism: {
                definition: "Two hormones together produce effect greater than sum of individual effects",
                example: "Glucagon + epinephrine → blood glucose increase (both stimulate glycogen breakdown, but together > additive)"
            },
            
            antagonism: {
                definition: "One hormone opposes action of another",
                examples: {
                    insulinGlucagon: "Insulin lowers glucose, glucagon raises glucose",
                    PTHCalcitonin: "PTH raises Ca²⁺, calcitonin lowers Ca²⁺",
                    estrogenTestosterone: "Opposite effects on some tissues"
                },
                functional: "Balance maintains homeostasis"
            }
        },
        
        comparison: {
            waterVsLipidSoluble: [
                {feature: "Solubility", waterSoluble: "Hydrophilic", lipidSoluble: "Hydrophobic"},
                {feature: "Transport", waterSoluble: "Free in blood plasma", lipidSoluble: "Bound to carrier proteins"},
                {feature: "Membrane crossing", waterSoluble: "Cannot cross", lipidSoluble: "Freely crosses"},
                {feature: "Receptor location", waterSoluble: "Cell surface", lipidSoluble: "Intracellular (nucleus)"},
                {feature: "Mechanism", waterSoluble: "Second messengers", lipidSoluble: "Gene transcription"},
                {feature: "Response speed", waterSoluble: "Rapid (seconds-minutes)", lipidSoluble: "Slow (hours-days)"},
                {feature: "Response duration", waterSoluble: "Short", lipidSoluble: "Long-lasting"},
                {feature: "Examples", waterSoluble: "Insulin, glucagon, epinephrine", lipidSoluble: "Cortisol, testosterone, thyroid"}
            ]
        },
        
        examples: [
            {
                hormone: "Insulin",
                type: "Peptide (water-soluble)",
                receptor: "Tyrosine kinase (cell membrane)",
                mechanism: "RTK → phosphorylation cascade → GLUT4 translocation",
                effect: "Glucose uptake into cells, glycogen synthesis",
                speed: "Minutes",
                duration: "Short (hormone degraded quickly)"
            },
            {
                hormone: "Epinephrine (β-receptors)",
                type: "Amine (water-soluble)",
                receptor: "GPCR (cell membrane)",
                mechanism: "Gs protein → adenylyl cyclase → cAMP → PKA",
                effect: "Glycogen breakdown, increased heart rate",
                speed: "Seconds to minutes",
                duration: "Short"
            },
            {
                hormone: "Cortisol",
                type: "Steroid (lipid-soluble)",
                receptor: "Glucocorticoid receptor (cytoplasm/nucleus)",
                mechanism: "Receptor-hormone complex → DNA binding → alter transcription",
                effect: "Increase gluconeogenesis, suppress immune system",
                speed: "Hours",
                duration: "Long-lasting (hours to days)"
            },
            {
                hormone: "Thyroid (T₃)",
                type: "Amine (lipid-soluble - exception)",
                receptor: "Thyroid receptor (nucleus)",
                mechanism: "T₃-receptor complex → DNA binding → alter transcription",
                effect: "Increase metabolic rate, heat production",
                speed: "Hours to days",
                duration: "Long-lasting"
            },
            {
                hormone: "Aldosterone",
                type: "Steroid (lipid-soluble)",
                receptor: "Mineralocorticoid receptor (cytoplasm/nucleus)",
                mechanism: "Gene transcription → new Na⁺ channels and pumps",
                effect: "Increase Na⁺ reabsorption, water retention",
                speed: "Hours (30 min latency for some effects)",
                duration: "Long-lasting"
            }
        ],
        
        applications: [
            "Drug development targeting hormone receptors (agonists, antagonists)",
            "Understanding diabetes (insulin signaling defects)",
            "Treating hormone deficiencies (replacement therapy)",
            "Contraception (synthetic estrogen/progesterone block ovulation)",
            "Treating hyperthyroidism (block thyroid hormone synthesis or action)",
            "Steroid therapy (cortisol for inflammation, testosterone for hypogonadism)",
            "Understanding drug tolerance and addiction (receptor regulation)",
            "Designing selective receptor modulators (SERMs for osteoporosis)",
            "Cancer therapy (hormone-dependent cancers - tamoxifen blocks estrogen receptors)"
        ]
    };
    
    return content;
}

handleAutonomicNervousSystem(problem) {
    const content = {
        topic: "Autonomic Nervous System: Involuntary Control of Internal Organs",
        category: 'neurophysiology',
        summary: "The autonomic nervous system (ANS) controls involuntary functions of internal organs, smooth muscle, cardiac muscle, and glands. It has two main divisions: sympathetic ('fight-or-flight') mobilizes body during stress, and parasympathetic ('rest-and-digest') conserves energy and maintains homeostasis.",
        
        keyDefinitions: {
            "Autonomic Nervous System (ANS)": "Division of PNS controlling involuntary functions",
            "Sympathetic Division": "Mobilizes body for stress, activity, emergency ('fight-or-flight')",
            "Parasympathetic Division": "Conserves energy, maintains homeostasis ('rest-and-digest')",
            "Enteric Nervous System": "Intrinsic nervous system of GI tract (can function independently)",
            "Preganglionic Neuron": "First neuron in autonomic pathway (cell body in CNS)",
            "Postganglionic Neuron": "Second neuron (cell body in ganglion, projects to effector)",
            "Autonomic Ganglion": "Cluster of postganglionic cell bodies (outside CNS)",
            "Dual Innervation": "Most organs receive both sympathetic and parasympathetic innervation",
            "Autonomic Tone": "Continuous low-level activity maintaining baseline function",
            "Visceral Reflex": "Automatic response of internal organs to stimulus"
        },
        
        overview: {
            function: "Regulate involuntary processes: heart rate, blood pressure, digestion, respiration, pupil size, body temperature, etc.",
            control: "Unconscious (cannot voluntarily control), but influenced by emotions, stress, hypothalamus",
            effectors: {
                smoothMuscle: "Blood vessels, airways, GI tract, bladder, etc.",
                cardiacMuscle: "Heart",
                glands: "Sweat, salivary, digestive, lacrimal (tear)"
            },
            organization: "Two-neuron chain (preganglionic → ganglion → postganglionic → effector)",
            contrast: "Somatic NS: one neuron (CNS → skeletal muscle), voluntary, always excitatory (ACh)",
            integration: "Hypothalamus and medulla (cardiovascular/respiratory centers)"
        },
        
        sympathetic: {
            name: "Sympathetic Division",
            nickname: "'Fight-or-Flight' - Emergency Response System",
            origin: "Thoracolumbar (T1-L2 spinal segments)",
            
            anatomy: {
                preganglionic: {
                    cellBodies: "Lateral horn of spinal cord gray matter (T1-L2)",
                    axons: "Short (exit via ventral root, enter sympathetic chain)",
                    neurotransmitter: "Acetylcholine (ACh)",
                    receptor: "Nicotinic (on postganglionic neuron in ganglion)"
                },
                ganglia: {
                    paravertebral: {
                        name: "Sympathetic chain ganglia",
                        location: "Parallel to vertebral column on both sides",
                        segments: "Cervical (3), thoracic (11), lumbar (4), sacral (4-5)",
                        connections: "Connected by nerves running up/down (allow divergence)"
                    },
                    prevertebral: {
                        name: "Collateral ganglia",
                        location: "Anterior to vertebral column, near abdominal aorta",
                        examples: "Celiac, superior mesenteric, inferior mesenteric",
                        innervate: "Abdominal and pelvic organs"
                    }
                },
                postganglionic: {
                    cellBodies: "Sympathetic ganglia",
                    axons: "Long (travel to effector organs)",
                    neurotransmitter: "Norepinephrine (NE) - most; ACh for sweat glands",
                    receptors: "Adrenergic (α and β)",
                    exception: "Sweat glands, some blood vessels use ACh (muscarinic receptors)"
                },
                divergence: "One preganglionic neuron synapses on ~20 postganglionic neurons (widespread effect)"
            },
            
            adrenalMedialla: {
                specialization: "Modified sympathetic ganglion",
                cells: "Chromaffin cells (modified postganglionic neurons)",
                innervation: "Preganglionic sympathetic neurons (directly from spinal cord T5-T9)",
                secretion: "Epinephrine (80%) and norepinephrine (20%) into bloodstream",
                function: "Systemic hormonal response (amplifies sympathetic effects)",
                trigger: "Stress, exercise, fear, hypoglycemia",
                effects: "Same as sympathetic nervous system but widespread via blood"
            },
            
            neurotransmittersReceptors: {
                norepinephrine: {
                    release: "Postganglionic sympathetic terminals",
                    synthesis: "Tyrosine → DOPA → dopamine → NE (in axon terminal)",
                    removal: "Reuptake (NET transporter), degradation (MAO, COMT)",
                    receptors: {
                        alpha1: {
                            location: "Smooth muscle (blood vessels, iris, GI sphincters)",
                            mechanism: "Gq → PLC → IP₃/DAG → Ca²⁺",
                            effect: "Contraction (vasoconstriction, pupil dilation, sphincter contraction)"
                        },
                        alpha2: {
                            location: "Presynaptic terminals, some blood vessels",
                            mechanism: "Gi → inhibit adenylyl cyclase → decrease cAMP",
                            effect: "Inhibit NE release (autoreceptor), some vasoconstriction"
                        },
                        beta1: {
                            location: "Heart, kidney (juxtaglomerular cells)",
                            mechanism: "Gs → adenylyl cyclase → increase cAMP → PKA",
                            effect: "Increase heart rate, contractility, renin release"
                        },
                        beta2: {
                            location: "Smooth muscle (bronchioles, blood vessels to skeletal muscle, uterus)",
                            mechanism: "Gs → increase cAMP → PKA",
                            effect: "Relaxation (bronchodilation, vasodilation, uterine relaxation)"
                        },
                        beta3: {
                            location: "Adipose tissue",
                            mechanism: "Gs → increase cAMP",
                            effect: "Lipolysis (fat breakdown)"
                        }
                    }
                },
                drugs: {
                    agonists: "Phenylephrine (α1 - decongestant), albuterol (β2 - asthma), dobutamine (β1 - heart failure)",
                    antagonists: "Prazosin (α1 - hypertension), propranolol (β - hypertension, anxiety), atenolol (β1 - selective, hypertension)"
                }
            },
            
            effects: {
                cardiovascular: {
                    heart: "Increase rate (β1), increase force of contraction (β1), increase cardiac output",
                    bloodVessels: "Constrict in skin, GI, kidneys (α1); dilate in skeletal muscle, heart (β2)",
                    bloodPressure: "Increase (vasoconstriction + increased cardiac output)"
                },
                respiratory: "Bronchodilation (β2 - increase airflow)",
                eyes: "Pupil dilation (mydriasis) - α1 (radial muscle contracts); far vision (relax ciliary muscle)",
                digestive: {
                    motility: "Decrease GI motility (inhibit smooth muscle)",
                    sphincters: "Contract sphincters (α1)",
                    secretions: "Decrease digestive secretions",
                    bloodFlow: "Vasoconstriction → decreased blood flow to GI"
                },
                urinary: "Relax bladder wall, contract internal sphincter (retain urine)",
                reproductive: "Ejaculation (α1), orgasm",
                metabolic: {
                    liver: "Glycogenolysis, gluconeogenesis → increase blood glucose",
                    adipose: "Lipolysis (β3) → increase free fatty acids",
                    skeletal Muscle: "Glycogenolysis → glucose for muscle"
                },
                sweat: "Increase sweating (cholinergic sympathetic - ACh, muscarinic)",
                other: "Decrease saliva (thick, viscous), piloerection (goosebumps), decrease kidney output"
            },
            
            situations: "Exercise, stress, fear, anger, emergency, hypoglycemia, hemorrhage, fight-or-flight"
        },
        
        parasympathetic: {
            name: "Parasympathetic Division",
            nickname: "'Rest-and-Digest' - Energy Conservation, Maintenance",
            origin: "Craniosacral (cranial nerves + S2-S4)",
            
            anatomy: {
                preganglionic: {
                    cellBodies: {
                        cranial: "Brainstem nuclei (CN III, VII, IX, X)",
                        sacral: "Lateral gray matter S2-S4"
                    },
                    axons: "Long (travel to ganglia near or within target organ)",
                    neurotransmitter: "Acetylcholine (ACh)",
                    receptor: "Nicotinic (on postganglionic neuron)"
                },
                ganglia: {
                    location: "Terminal ganglia (near or within target organ)",
                    examples: {
                        ciliary: "Eye (CN III)",
                        pterygopalatine: "Lacrimal/nasal glands (CN VII)",
                        submandibular: "Salivary glands (CN VII)",
                        otic: "Parotid gland (CN IX)",
                        intramural: "Within organ walls (heart, lungs, GI tract - CN X)"
                    }
                },
                postganglionic: {
                    cellBodies: "Terminal ganglia (near/in organ)",
                    axons: "Short (already close to effector)",
                    neurotransmitter: "Acetylcholine (ACh)",
                    receptor: "Muscarinic (M1-M5 subtypes)"
                },
                convergence: "Discrete, localized effects (vs. sympathetic divergence)"
            },
            
            cranialNerves: {
                CN_III: {
                    name: "Oculomotor",
                    target: "Eye (ciliary muscle, iris sphincter)",
                    ganglion: "Ciliary ganglion",
                    effects: "Pupil constriction (miosis), lens accommodation (near vision)"
                },
                CN_VII: {
                    name: "Facial",
                    targets: "Lacrimal gland, nasal glands, salivary glands (submandibular, sublingual)",
                    ganglia: "Pterygopalatine, submandibular",
                    effects: "Tear secretion, nasal mucus, saliva (watery)"
                },
                CN_IX: {
                    name: "Glossopharyngeal",
                    target: "Parotid salivary gland",
                    ganglion: "Otic ganglion",
                    effect: "Saliva secretion"
                },
                CN_X: {
                    name: "Vagus ('wanderer')",
                    targets: "Heart, lungs, liver, GI tract (esophagus to proximal colon)",
                    ganglia: "Intramural (within organ walls)",
                    coverage: "~75% of parasympathetic innervation (most extensive)",
                    effects: {
                        heart: "Decrease rate, decrease conduction velocity (AV node)",
                        lungs: "Bronchoconstriction, increase secretions",
                        GI: "Increase motility, relax sphincters, increase secretions",
                        liver: "Promote glycogen synthesis"
                    }
                }
            },
            
            sacralOutflow: {
                segments: "S2-S4",
                nerves: "Pelvic splanchnic nerves",
                targets: "Distal colon, rectum, bladder, reproductive organs",
                effects: {
                    bladder: "Contract detrusor muscle (bladder wall), relax internal sphincter (urination)",
                    colon: "Increase motility, relax sphincters (defecation)",
                    reproductive: "Erection (vasodilation of erectile tissue)"
                }
            },
            
            muscarinicReceptors: {
                M1: {
                    location: "Gastric parietal cells, CNS",
                    mechanism: "Gq → PLC → IP₃/DAG → Ca²⁺",
                    effect: "Increase gastric acid secretion, neural excitation"
                },
                M2: {
                    location: "Heart (SA node, AV node, atria)",
                    mechanism: "Gi → decrease cAMP, open K⁺ channels",
                    effect: "Decrease heart rate (negative chronotropy), decrease contractility"
                },
                M3: {
                    location: "Smooth muscle (GI, airways, bladder, iris), glands",
                    mechanism: "Gq → PLC → IP₃/DAG → Ca²⁺",
                    effects: "Contraction (GI motility, bladder contraction, bronchoconstriction, pupil constriction), gland secretion"
                },
                M4_M5: "Mostly CNS"
            },
            
            drugs: {
                agonists: "Pilocarpine (glaucoma - pupil constriction), bethanechol (urinary retention)",
                antagonists: "Atropine (bradycardia treatment, dilate pupils), scopolamine (motion sickness), ipratropium (asthma - bronchodilation)"
            },
            
            effects: {
                cardiovascular: {
                    heart: "Decrease rate (M2), decrease force (atria)",
                    bloodVessels: "Minimal direct effect (except erectile tissue - vasodilation)"
                },
                respiratory: "Bronchoconstriction (M3), increase mucus secretion",
                eyes: "Pupil constriction (M3 - circular muscle), near vision (contract ciliary muscle)",
                digestive: {
                    motility: "Increase GI motility (M3)",
                    sphincters: "Relax sphincters",
                    secretions: "Increase saliva (watery), gastric acid, pancreatic enzymes, bile",
                    bloodFlow: "Increase blood flow to GI"
                },
                urinary: "Contract bladder (M3), relax internal sphincter (urination)",
                reproductive: "Erection (vasodilation)",
                glands: "Increase secretions (saliva, tears, digestive enzymes)",
                metabolic: "Promote anabolic processes (glycogen synthesis, protein synthesis)"
            },
            
            situations: "Resting, eating, digestion, sleep, recovery, homeostasis maintenance"
        },
        
        entericsystem: {
            name: "Enteric Nervous System (ENS)",
            nickname: "'Brain of the Gut'",
            location: "Embedded in walls of GI tract (esophagus to anus)",
            neurons: "~100 million neurons (more than spinal cord!)",
            independence: "Can function WITHOUT CNS input (local reflexes)",
            plexuses: {
                myenteric: {
                    name: "Myenteric (Auerbach's) plexus",
                    location: "Between longitudinal and circular smooth muscle layers",
                    function: "Control GI motility (peristalsis)"
                },
                submucosal: {
                    name: "Submucosal (Meissner's) plexus",
                    location: "Submucosa",
                    function: "Control secretion, blood flow, local absorption"
                }
            },
            connections: {
                sympathetic: "Inhibits ENS (decrease motility, secretion)",
                parasympathetic: "Enhances ENS (increase motility, secretion)",
                CNS: "Bidirectional (gut → brain via vagus affects mood; brain → gut affects digestion)"
            },
            neurotransmitters: "ACh, serotonin, substance P, VIP, NO, many others",
            functions: [
                "Peristalsis (rhythmic contractions propelling food)",
                "Segmentation (mixing movements)",
                "Secretion control (enzymes, mucus, acid)",
                "Local blood flow regulation",
                "Detect nutrients, pH, stretch"
            ],
            reflexes: {
                gastrocolic: "Eating stimulates colon motility (urge to defecate after meal)",
                intestinointestinal: "Distention in one area inhibits motility in another"
            },
            clinical: "IBS (irritable bowel syndrome), inflammatory bowel disease, gastroparesis"
        },
        
        dualInnervation: {
            concept: "Most organs receive BOTH sympathetic and parasympathetic innervation",
            antagonistic: "Usually have opposite effects (balance)",
            examples: {
                heart: {
                    sympathetic: "Increase rate and force (β1)",
                    parasympathetic: "Decrease rate and force (M2)",
                    result: "Heart rate determined by balance (at rest, parasympathetic dominant)"
                },
                airways: {
                    sympathetic: "Bronchodilation (β2)",
                    parasympathetic: "Bronchoconstriction (M3)",
                    result: "Airway diameter regulated by balance"
                },
                GI: {
                    sympathetic: "Decrease motility, contract sphincters",
                    parasympathetic: "Increase motility, relax sphincters",
                    result: "Digestion rate controlled by balance"
                },
                pupil: {
                    sympathetic: "Dilate (α1 - radial muscle)",
                    parasympathetic: "Constrict (M3 - circular muscle)",
                    result: "Pupil size adapts to light"
                }
            },
            exceptions: {
                singleInnervation: {
                    sympatheticOnly: "Sweat glands, arrector pili (hair), most blood vessels, adrenal medulla",
                    parasympatheticOnly: "Erectile tissue (vasodilation for erection)"
                },
                cooperative: "Salivary glands - sympathetic (thick mucus), parasympathetic (watery saliva) - different secretions"
            }
        },
        
        autonomicTone: {
            definition: "Continuous low-level activity in autonomic neurons even at rest",
            purpose: "Allows bidirectional control (increase or decrease activity)",
            examples: {
                vagal Tone: "Parasympathetic (vagus) continuously slows heart (~70 bpm) - if blocked with atropine, rate increases to ~100 bpm (intrinsic SA node rate)",
                vascular Tone: "Sympathetic maintains baseline vasoconstriction - can increase (more constriction) or decrease (vasodilation)",
                bronchial Tone: "Parasympathetic maintains baseline bronchoconstriction"
            },
            advantage: "Fine control - can adjust up or down from baseline"
        },
        
        hypothalamicControl: {
            role: "Hypothalamus is main integrator of autonomic function",
            connections: {
                input: "Receives sensory info (temperature, osmolarity, glucose, blood pressure, emotions)",
                output: "Projects to autonomic nuclei in brainstem and spinal cord"
            },
            functions: {
                thermoregulation: "Hot → parasympathetic (vasodilation, sweating); Cold → sympathetic (vasoconstriction, shivering)",
                osmoregulation: "High osmolarity → thirst, ADH release",
                feeding: "Hunger → increase sympathetic (mobilize energy)",
                stress: "Activate sympathetic (fight-or-flight)",
                circadian: "Sleep-wake cycle affects autonomic balance"
            },
            disorders: "Hypothalamic lesions → dysautonomia (temperature regulation failure, etc.)"
        },
        
        comparison: {
            sympatheticVsParasympathetic: [
                {feature: "Origin", sympathetic: "Thoracolumbar (T1-L2)", parasympathetic: "Craniosacral (CN + S2-S4)"},
                {feature: "Ganglia location", sympathetic: "Close to spinal cord (chain/prevertebral)", parasympathetic: "Near/in target organ (terminal)"},
                {feature: "Preganglionic fiber", sympathetic: "Short", parasympathetic: "Long"},
                {feature: "Postganglionic fiber", sympathetic: "Long", parasympathetic: "Short"},
                {feature: "Divergence", sympathetic: "Extensive (1:20)", parasympathetic: "Minimal (discrete)"},
                {feature: "Preganglionic NT", sympathetic: "ACh (nicotinic)", parasympathetic: "ACh (nicotinic)"},
                {feature: "Postganglionic NT", sympathetic: "NE (adrenergic)", parasympathetic: "ACh (muscarinic)"},
                {feature: "Effects", sympathetic: "Mobilize for action", parasympathetic: "Rest and digest"},
                {feature: "Heart rate", sympathetic: "Increase", parasympathetic: "Decrease"},
                {feature: "Pupil", sympathetic: "Dilate", parasympathetic: "Constrict"},
                {feature: "Airways", sympathetic: "Dilate", parasympathetic: "Constrict"},
                {feature: "GI motility", sympathetic: "Decrease", parasympathetic: "Increase"},
                {feature: "Bladder", sympathetic: "Retain urine", parasympathetic: "Urination"}
            ]
        },
        
        clinicalApplications: {
            disorders: {
                autonomicDysfunction: "Orthostatic hypotension (BP drops when standing), gastroparesis, neurogenic bladder",
                diabeticNeuropathy: "Autonomic nerve damage → lack of heart rate variability, digestive problems",
                parkinsons: "Autonomic symptoms (constipation, orthostatic hypotension, urinary problems)",
                multipleSystemAtrophy: "Degeneration of autonomic centers → severe dysautonomia"
            },
            
            drugs: {
                sympathomimetics: "Mimic sympathetic (epinephrine for anaphylaxis, albuterol for asthma)",
                sympatholytics: "Block sympathetic (beta-blockers for hypertension, alpha-blockers for BPH)",
                parasympathomimetics: "Mimic parasympathetic (pilocarpine for glaucoma)",
                parasympatholytics: "Block parasympathetic (atropine for bradycardia, scopolamine for motion sickness)"
            },
            
            procedures: {
                sympathectomy: "Surgical removal of sympathetic ganglia (severe hyperhidrosis, Raynaud's)",
                vagusNerveStimulation: "Implanted device stimulates vagus (epilepsy, depression)",
                autonomicTesting: "Heart rate variability, tilt table test (diagnose dysautonomia)"
            }
        },
        
        examples: [
            {
                situation: "Exercise",
                sympathetic: "Increase heart rate, dilate airways, dilate skeletal muscle vessels, mobilize glucose",
                parasympathetic: "Decreased (withdraw vagal tone)",
                result: "Enhanced performance, oxygen delivery, energy availability"
            },
            {
                situation: "Eating Meal",
                sympathetic: "Decreased (not needed)",
                parasympathetic: "Increase GI motility, secretions, blood flow to GI",
                result: "Efficient digestion and absorption"
            },
            {
                situation: "Sudden Fright",
                sympathetic: "Massive activation - rapid heart rate, high BP, pupil dilation, sweating, pale skin",
                parasympathetic: "Inhibited",
                result: "Fight-or-flight response (ready for action)"
            },
            {
                situation: "Sleep",
                sympathetic: "Low activity",
                parasympathetic: "Dominant - slow heart rate, increased GI activity",
                result: "Rest, recovery, digestion, energy conservation"
            }
        ],
        
        applications: [
            "Understanding stress physiology and health effects",
            "Drug therapy (hypertension, asthma, glaucoma, arrhythmias)",
            "Treating autonomic disorders (diabetic neuropathy, Parkinson's)",
            "Anesthesia (block autonomic reflexes during surgery)",
            "Understanding panic attacks and anxiety (sympathetic overactivation)",
            "Biofeedback and relaxation techniques (modulate autonomic balance)",
            "Heart rate variability as health marker",
            "Understanding sudden cardiac death (autonomic imbalance)"
        ]
    };
    
    return content;
}

handleSensorySystems(problem) {
    const content = {
        topic: "Sensory Systems: Detection and Processing of Sensory Information",
        category: 'sensory_physiology',
        summary: "Sensory systems detect environmental stimuli and convert them into neural signals that the brain can interpret. Each sensory modality (vision, hearing, touch, taste, smell) uses specialized receptors, distinct neural pathways, and dedicated cortical areas for processing.",
        
        keyDefinitions: {
            "Sensation": "Detection of stimulus by receptors",
            "Perception": "Conscious interpretation of stimulus by brain",
            "Sensory Receptor": "Specialized cell or neuron that detects specific stimulus",
            "Transduction": "Conversion of stimulus energy into electrical signal (receptor potential)",
            "Receptor Potential": "Graded potential in receptor (not action potential)",
            "Adaptation": "Decreased response to sustained stimulus",
            "Sensory Modality": "Type of sensation (vision, hearing, touch, etc.)",
            "Receptive Field": "Area that, when stimulated, affects a sensory neuron",
            "Labeled Line": "Specific pathway from receptor to cortex (determines sensation quality)",
            "Adequate Stimulus": "Form of energy to which receptor is most sensitive"
        },
        
        generalPrinciples: {
            transduction: {
                process: "Stimulus → receptor → receptor potential → (if threshold reached) action potential",
                mechanism: "Stimulus opens/closes ion channels → change membrane potential",
                coding: "Intensity coded by frequency of action potentials",
                example: "Bright light → more photoreceptor activation → higher firing frequency → perceived as brighter"
            },
            
            adaptation: {
                definition: "Receptor sensitivity decreases with sustained stimulus",
                types: {
                    phasic: {
                        name: "Rapidly adapting",
                        response: "Strong initial response, then fades quickly",
                        function: "Detect changes, movement, onset/offset",
                        examples: "Touch (Meissner's corpuscles), smell, pressure (Pacinian corpuscles)"
                    },
                    tonic: {
                        name: "Slowly adapting",
                        response: "Sustained response during stimulus",
                        function: "Monitor continuous conditions",
                        examples: "Pain, proprioception (muscle spindles), baroreceptors"
                    }
                },
                advantage: "Prevents sensory overload, focuses attention on changes",
                example: "Smell of perfume fades, feeling of clothes on skin disappears"
            },
            
            receptiveFields: {
                definition: "Spatial area from which receptor receives input",
                size: {
                    small: "High acuity, precise localization (fingertips, fovea)",
                    large: "Low acuity, less precise (back, peripheral retina)"
                },
                lateralInhibition: "Activated receptor inhibits neighbors → enhances contrast, sharpens edges",
                twoPointDiscrimination: "Minimum distance between two points perceived as separate (fingertip ~2mm, back ~40mm)"
            },
            
            sensoryPathways: {
                general: "Receptor → 1st-order neuron → 2nd-order (decussation often here) → thalamus (3rd-order) → cortex",
                thalamus: "Relay station for ALL senses except smell",
                cortex: "Primary sensory areas (initial processing) → association areas (interpretation, integration)",
                conscious: "Reaches cortex (vs. unconscious proprioception to cerebellum)"
            }
        },
        
        receptorTypes: {
            byStimulus: {
                mechanoreceptors: {
                    stimulus: "Mechanical deformation (pressure, stretch, vibration, sound)",
                    examples: "Touch receptors, hair cells (hearing, balance), baroreceptors, muscle spindles",
                    transduction: "Deformation opens mechanically-gated ion channels (Na⁺, Ca²⁺)"
                },
                thermoreceptors: {
                    stimulus: "Temperature change",
                    types: "Cold receptors (10-35°C), warm receptors (30-45°C), nociceptors (extremes)",
                    location: "Skin, hypothalamus",
                    transduction: "TRP channels (temperature-sensitive ion channels)"
                },
                photoreceptors: {
                    stimulus: "Light (electromagnetic radiation)",
                    types: "Rods (dim light, black/white), cones (bright light, color)",
                    location: "Retina",
                    transduction: "Light → rhodopsin isomerization → hyperpolarization (unusual - most receptors depolarize)"
                },
                chemoreceptors: {
                    stimulus: "Chemical molecules",
                    types: {
                        taste: "Sweet, salty, sour, bitter, umami",
                        smell: "Thousands of different odorants",
                        internal: "O₂, CO₂, pH, glucose (carotid/aortic bodies, hypothalamus)"
                    },
                    transduction: "Chemical binds receptor → ion channel opens or G-protein cascade"
                },
                nociceptors: {
                    stimulus: "Tissue damage, extreme temperature, chemicals (pain)",
                    types: "Mechanical, thermal, chemical, polymodal",
                    location: "Skin, organs, joints",
                    adaptation: "Minimal (don't want pain to fade - protective)",
                    pathway: "Fast pain (Aδ fibers - sharp, localized) and slow pain (C fibers - dull, aching)"
                }
            }
        },
        
        // Vision, hearing, and other detailed sensory systems would continue here...
        // This is a comprehensive structure that can be expanded with full detail for each system
        
        applications: [
            "Understanding sensory deficits (blindness, deafness, anosmia)",
            "Developing sensory prosthetics (cochlear implants, retinal implants)",
            "Pain management strategies",
            "Diagnosing neurological disorders (sensory testing)",
            "Virtual reality and sensory simulation"
        ]
    };
    
    return content;
}


// ========================================
// MAIN PROBLEM PROCESSING METHODS
// ========================================

parseCoordinationProblem(topic, parameters = {}, subTopic = null, context = {}) {
    let topicType = null;

    // Match topic to handler
    for (const [type, config] of Object.entries(this.coordinationTopics)) {
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
        throw new Error(`Unable to recognize coordination system topic: ${topic}`);
    }

    return {
        originalTopic: topic,
        type: topicType,
        subTopic: subTopic,
        parameters: { ...parameters },
        context: { ...context },
        difficulty: this.coordinationTopics[topicType].difficulty,
        prerequisites: this.coordinationTopics[topicType].prerequisites,
        parsedAt: new Date().toISOString()
    };
}

handleCoordinationProblem(config) {
    const { topic, parameters, subTopic, context, requestType } = config;

    try {
        const isExperimentRequest = requestType === 'experiment' || 
                                   (typeof topic === 'string' && topic.toLowerCase().includes('experiment'));

        if (isExperimentRequest) {
            return this.handleExperimentRequest(config);
        } else {
            this.currentProblem = this.parseCoordinationProblem(topic, parameters, subTopic, context);
            this.currentContent = this.getCoordinationContent(this.currentProblem);
            
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
            
            this.contentSteps = this.generateCoordinationContent(this.currentProblem, this.currentContent);
            
            // Generate workbook (handles async internally)
            this.generateCoordinationWorkbook();

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
        throw new Error(`Failed to process coordination system request: ${error.message}`);
    }
}

handleExperimentRequest(config) {
    const { topic, parameters, experimentId } = config;

    if (experimentId && this.coordinationExperiments[experimentId]) {
        this.currentExperiment = this.coordinationExperiments[experimentId];
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
    
    for (const [expId, experiment] of Object.entries(this.coordinationExperiments)) {
        if (experiment.name.toLowerCase().includes(topicLower)) {
            return experiment;
        }
        
        for (const relatedTopic of experiment.relatedTopics) {
            if (topicLower.includes(relatedTopic) || relatedTopic.includes(topicLower)) {
                return experiment;
            }
        }
    }
    
    return null;
}

getRelatedExperiments(topicType) {
    const relatedExperiments = [];
    
    for (const [expId, experiment] of Object.entries(this.coordinationExperiments)) {
        if (experiment.relatedTopics.includes(topicType)) {
            relatedExperiments.push({
                id: expId,
                name: experiment.name,
                category: experiment.category,
                description: `${experiment.historicalBackground?.scientist || 'Classic'} experiment on ${experiment.name}`
            });
        }
    }
    
    return relatedExperiments;
}

getCoordinationContent(problem) {
    const handler = this.coordinationTopics[problem.type]?.handler;
    if (!handler) {
        throw new Error(`No handler available for coordination system topic: ${problem.type}`);
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

    return filtered;
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
        currentResearch: `Current research in ${content.topic} includes neuroplasticity, optogenetics, and neural interfaces...`,
        openQuestions: "How do neural circuits encode complex behaviors? How can we restore function after injury?",
        techniques: "Advanced techniques: patch-clamp recording, two-photon microscopy, optogenetics, neural imaging..."
    };
}

getContextualScenarios(topicType) {
    return this.contextualScenarios[topicType] || [];
}

getMetacognitivePrompts(topicType) {
    const prompts = {
        beforeLearning: this.metacognitivePrompts.beforeLearning.map(p => 
            p.replace('{topic}', this.coordinationTopics[topicType]?.name || topicType)
        ),
        duringLearning: this.metacognitivePrompts.duringLearning.map(p => 
            p.replace('{concept}', topicType)
        ),
        afterLearning: this.metacognitivePrompts.afterLearning.map(p => 
            p.replace('{topic}', this.coordinationTopics[topicType]?.name || topicType)
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

generateCoordinationContent(problem, content) {
    const contentSections = [];

    // Generate overview section
    contentSections.push(this.generateOverviewSection(problem, content));

    // Generate specific content sections based on content structure
    if (content.organization || content.components) {
        contentSections.push(this.generateOrganizationSection(content));
    }

    if (content.structure || content.anatomy) {
        contentSections.push(this.generateStructureSection(content));
    }

    if (content.mechanism || content.pathway || content.phases) {
        contentSections.push(this.generateMechanismSection(content));
    }

    if (content.neurotransmitters || content.receptors) {
        contentSections.push(this.generateNeurotransmitterSection(content));
    }

    if (content.functions || content.effects) {
        contentSections.push(this.generateFunctionsSection(content));
    }

    if (content.clinicalSignificance || content.disorders) {
        contentSections.push(this.generateClinicalSection(content));
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

generateOrganizationSection(content) {
    return {
        title: 'System Organization',
        type: 'organization',
        data: content.organization || content.components || content.overview
    };
}

generateStructureSection(content) {
    return {
        title: 'Anatomical Structure',
        type: 'structure',
        data: content.structure || content.anatomy || content.cellTypes
    };
}

generateMechanismSection(content) {
    return {
        title: 'Mechanism of Action',
        type: 'mechanism',
        data: content.mechanism || content.pathway || content.phases || content.process
    };
}

generateNeurotransmitterSection(content) {
    return {
        title: 'Neurotransmitters and Receptors',
        type: 'neurotransmitters',
        data: {
            neurotransmitters: content.neurotransmitters,
            receptors: content.receptors,
            signaling: content.signaling
        }
    };
}

generateFunctionsSection(content) {
    return {
        title: 'Functions and Effects',
        type: 'functions',
        data: content.functions || content.effects || content.physiologicalRoles
    };
}

generateClinicalSection(content) {
    return {
        title: 'Clinical Significance',
        type: 'clinical',
        data: content.clinicalSignificance || content.disorders || content.pathology
    };
}

generateComparisonsSection(content) {
    return {
        title: 'Comparisons',
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
            applications: content.applications
        }
    };
}

generateContextualScenariosSection(content) {
    return {
        title: 'Real-World Scenarios',
        type: 'scenarios',
        data: content.contextualScenarios
    };
}

generateRelatedExperimentsSection(content) {
    return {
        title: 'Related Experiments',
        type: 'experiments',
        data: content.relatedExperiments
    };
}

generateMetacognitiveSection(content) {
    return {
        title: 'Reflection and Learning',
        type: 'metacognitive',
        data: content.metacognitivePrompts
    };
}

generateExperimentContent(experiment, parameters) {
    const sections = [];

    // Historical background section
    if (experiment.historicalBackground) {
        sections.push({
            title: 'Historical Background',
            type: 'historical',
            data: experiment.historicalBackground
        });
    }

    // Lab experiment section
    if (experiment.labExperiment) {
        sections.push({
            title: 'Laboratory Experiment',
            type: 'lab_procedure',
            data: experiment.labExperiment
        });
    }

    return {
        experiment: experiment.name,
        category: experiment.category,
        relatedTopics: experiment.relatedTopics,
        sections: sections
    };
}

// ========================================
// EXPERIMENT FORMATTING METHODS
// ========================================

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
        if (typeof labExp.background === 'string') {
            formatted.push(['  ', labExp.background]);
        } else if (typeof labExp.background === 'object') {
            Object.entries(labExp.background).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, '']);
                if (typeof value === 'string') {
                    formatted.push(['    ', value]);
                } else if (typeof value === 'object') {
                    Object.entries(value).forEach(([subKey, subValue]) => {
                        formatted.push([`    ${subKey}:`, subValue]);
                    });
                }
            });
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
        // Handle both array and object formats
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
            labExp.safetyPrecautions.forEach(note => {
                formatted.push(['  ⚠', note]);
            });
        }
    }

    if (labExp.procedure) {
        formatted.push(['', '']);
        formatted.push(['Procedure', '']);
        
        // Handle both array and non-array formats
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
            // Handle object format (with nested sections)
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
                            subValue.forEach((item, idx) => {
                                formatted.push([`    ${idx + 1}.`, item]);
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
        }
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
        formatted.push(['Expected Observations', '']);
        if (Array.isArray(labExp.observations)) {
            labExp.observations.forEach(obs => {
                formatted.push(['  •', obs]);
            });
        } else if (typeof labExp.observations === 'object') {
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
                    Object.entries(value).forEach(([subKey, subValue]) => {
                        formatted.push([`    ${subKey}:`, subValue]);
                    });
                } else {
                    formatted.push(['    ', value]);
                }
            });
        }
    }

    if (labExp.connectionToHistorical) {
        formatted.push(['', '']);
        formatted.push(['Connection to Historical Experiment', '']);
        if (typeof labExp.connectionToHistorical === 'object') {
            Object.entries(labExp.connectionToHistorical).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, '']);
                if (Array.isArray(value)) {
                    value.forEach(item => formatted.push(['    -', item]));
                } else {
                    formatted.push(['    ', value]);
                }
            });
        } else {
            formatted.push(['  ', labExp.connectionToHistorical]);
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

    if (labExp.realWorldApplications || labExp.applications) {
        formatted.push(['', '']);
        formatted.push(['Real-World Applications', '']);
        const applications = labExp.realWorldApplications || labExp.applications;
        if (Array.isArray(applications)) {
            applications.forEach(app => {
                formatted.push(['  •', app]);
            });
        }
    }

    if (labExp.extensions) {
        formatted.push(['', '']);
        formatted.push(['Extensions and Further Study', '']);
        if (Array.isArray(labExp.extensions)) {
            labExp.extensions.forEach(ext => {
                formatted.push(['  •', ext]);
            });
        }
    }

    if (labExp.modernConnections || labExp.modernPerspective) {
        formatted.push(['', '']);
        formatted.push(['Modern Connections', '']);
        const modern = labExp.modernConnections || labExp.modernPerspective;
        if (Array.isArray(modern)) {
            modern.forEach(conn => {
                formatted.push(['  •', conn]);
            });
        }
    }

    if (labExp.limitations) {
        formatted.push(['', '']);
        formatted.push(['Limitations', '']);
        if (Array.isArray(labExp.limitations)) {
            labExp.limitations.forEach(lim => {
                formatted.push(['  •', lim]);
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

    if (labExp.safetyNotes && !labExp.safetyPrecautions) {
        formatted.push(['', '']);
        formatted.push(['SAFETY NOTES', '']);
        if (Array.isArray(labExp.safetyNotes)) {
            labExp.safetyNotes.forEach(note => {
                formatted.push(['  ⚠', note]);
            });
        }
    }

    return formatted;
}

// ========================================
// UTILITY AND HELPER METHODS
// ========================================

getAllExperiments() {
    return Object.entries(this.coordinationExperiments).map(([id, exp]) => ({
        id: id,
        name: exp.name,
        category: exp.category,
        relatedTopics: exp.relatedTopics,
        scientist: exp.historicalBackground?.scientist || exp.historicalBackground?.scientists,
        year: exp.historicalBackground?.year || exp.historicalBackground?.years,
        nobelPrize: exp.historicalBackground?.nobelPrize
    }));
}

getExperimentsByCategory(category) {
    return Object.entries(this.coordinationExperiments)
        .filter(([id, exp]) => exp.category === category)
        .map(([id, exp]) => ({
            id: id,
            name: exp.name,
            scientist: exp.historicalBackground?.scientist,
            year: exp.historicalBackground?.year
        }));
}

getExperimentsByTopic(topicType) {
    return this.getRelatedExperiments(topicType);
}

searchExperiments(searchTerm) {
    const term = searchTerm.toLowerCase();
    return Object.entries(this.coordinationExperiments)
        .filter(([id, exp]) => {
            return exp.name.toLowerCase().includes(term) ||
                   exp.category.toLowerCase().includes(term) ||
                   exp.relatedTopics.some(topic => topic.toLowerCase().includes(term)) ||
                   exp.historicalBackground?.scientist?.toLowerCase().includes(term);
        })
        .map(([id, exp]) => ({
            id: id,
            name: exp.name,
            category: exp.category,
            scientist: exp.historicalBackground?.scientist
        }));
}

getExperimentDetails(experimentId) {
    return this.coordinationExperiments[experimentId] || null;
}

// Get experiments by historical period
getExperimentsByPeriod(startYear, endYear) {
    return Object.entries(this.coordinationExperiments)
        .filter(([id, exp]) => {
            const year = exp.historicalBackground?.year;
            if (!year) return false;
            const yearNum = parseInt(year.toString().match(/\d{4}/)?.[0]);
            return yearNum >= startYear && yearNum <= endYear;
        })
        .map(([id, exp]) => ({
            id: id,
            name: exp.name,
            scientist: exp.historicalBackground?.scientist,
            year: exp.historicalBackground?.year
        }));
}

// Get Nobel Prize winning experiments
getNobelPrizeExperiments() {
    return Object.entries(this.coordinationExperiments)
        .filter(([id, exp]) => exp.historicalBackground?.nobelPrize)
        .map(([id, exp]) => ({
            id: id,
            name: exp.name,
            scientist: exp.historicalBackground?.scientist,
            nobelPrize: exp.historicalBackground?.nobelPrize
        }));
}

// Format experiment for display
formatExperimentForDisplay(experimentId) {
    const experiment = this.coordinationExperiments[experimentId];
    if (!experiment) return null;

    return {
        name: experiment.name,
        category: experiment.category,
        relatedTopics: experiment.relatedTopics,
        historical: this.formatHistoricalBackground(experiment.historicalBackground || {}),
        lab: this.formatLabExperiment(experiment.labExperiment || {})
    };
}

// Get experiment statistics
getExperimentStatistics() {
    const experiments = Object.values(this.coordinationExperiments);
    
    const categoryCount = {};
    const topicCount = {};
    
    experiments.forEach(exp => {
        // Count by category
        categoryCount[exp.category] = (categoryCount[exp.category] || 0) + 1;
        
        // Count by topic
        exp.relatedTopics.forEach(topic => {
            topicCount[topic] = (topicCount[topic] || 0) + 1;
        });
    });

    return {
        totalExperiments: experiments.length,
        byCategory: categoryCount,
        byTopic: topicCount,
        nobelPrizeCount: experiments.filter(exp => exp.historicalBackground?.nobelPrize).length
    };
}

// Validate experiment structure
validateExperiment(experiment) {
    const validation = {
        isValid: true,
        errors: [],
        warnings: []
    };

    if (!experiment.name) {
        validation.errors.push('Missing experiment name');
        validation.isValid = false;
    }

    if (!experiment.category) {
        validation.errors.push('Missing category');
        validation.isValid = false;
    }

    if (!experiment.relatedTopics || experiment.relatedTopics.length === 0) {
        validation.warnings.push('No related topics specified');
    }

    if (!experiment.historicalBackground) {
        validation.warnings.push('Missing historical background');
    }

    if (!experiment.labExperiment) {
        validation.warnings.push('Missing lab experiment section');
    } else {
        if (!experiment.labExperiment.hypothesis) {
            validation.warnings.push('Missing hypothesis');
        }
        if (!experiment.labExperiment.procedure) {
            validation.warnings.push('Missing procedure');
        }
    }

    return validation;
}

// Compare experiments
compareExperiments(experimentId1, experimentId2) {
    const exp1 = this.coordinationExperiments[experimentId1];
    const exp2 = this.coordinationExperiments[experimentId2];

    if (!exp1 || !exp2) {
        return null;
    }

    return {
        experiment1: {
            name: exp1.name,
            scientist: exp1.historicalBackground?.scientist,
            year: exp1.historicalBackground?.year,
            category: exp1.category,
            topics: exp1.relatedTopics
        },
        experiment2: {
            name: exp2.name,
            scientist: exp2.historicalBackground?.scientist,
            year: exp2.historicalBackground?.year,
            category: exp2.category,
            topics: exp2.relatedTopics
        },
        commonTopics: exp1.relatedTopics.filter(topic => 
            exp2.relatedTopics.includes(topic)
        ),
        uniqueToExp1: exp1.relatedTopics.filter(topic => 
            !exp2.relatedTopics.includes(topic)
        ),
        uniqueToExp2: exp2.relatedTopics.filter(topic => 
            !exp1.relatedTopics.includes(topic)
        )
    };
}

// Generate experiment timeline
generateExperimentTimeline() {
    const experiments = Object.entries(this.coordinationExperiments)
        .map(([id, exp]) => ({
            id: id,
            name: exp.name,
            scientist: exp.historicalBackground?.scientist,
            year: exp.historicalBackground?.year,
            nobelPrize: exp.historicalBackground?.nobelPrize
        }))
        .filter(exp => exp.year)
        .sort((a, b) => {
            const yearA = parseInt(a.year.toString().match(/\d{4}/)?.[0] || 0);
            const yearB = parseInt(b.year.toString().match(/\d{4}/)?.[0] || 0);
            return yearA - yearB;
        });

    return experiments;
}

// Get experiments requiring specific equipment
getExperimentsByEquipment(equipment) {
    return Object.entries(this.coordinationExperiments)
        .filter(([id, exp]) => {
            const materials = exp.labExperiment?.materials;
            if (!materials) return false;
            
            const materialsList = Array.isArray(materials) ? 
                materials : Object.values(materials).flat();
            
            return materialsList.some(material => 
                material.toLowerCase().includes(equipment.toLowerCase())
            );
        })
        .map(([id, exp]) => ({
            id: id,
            name: exp.name,
            category: exp.category
        }));
}

// Generate experiment difficulty rating
assessExperimentDifficulty(experimentId) {
    const experiment = this.coordinationExperiments[experimentId];
    if (!experiment) return null;

    let difficultyScore = 0;

    // Check procedure complexity
    const procedure = experiment.labExperiment?.procedure;
    if (procedure) {
        const steps = Array.isArray(procedure) ? procedure.length : 
                     Object.values(procedure).flat().length;
        difficultyScore += Math.min(steps / 10, 3);
    }

    // Check materials complexity
    const materials = experiment.labExperiment?.materials;
    if (materials) {
        const materialCount = Array.isArray(materials) ? materials.length :
                             Object.values(materials).flat().length;
        difficultyScore += Math.min(materialCount / 15, 2);
    }

    // Check safety requirements
    const safety = experiment.labExperiment?.safetyPrecautions;
    if (safety && safety.length > 3) {
        difficultyScore += 1;
    }

    // Classify difficulty
    if (difficultyScore < 2) return 'beginner';
    if (difficultyScore < 4) return 'intermediate';
    return 'advanced';
}

// Get prerequisite experiments
getPrerequisiteExperiments(experimentId) {
    const experiment = this.coordinationExperiments[experimentId];
    if (!experiment) return [];

    const prerequisites = [];
    const relatedTopics = experiment.relatedTopics;

    // Find earlier experiments on related topics
    Object.entries(this.coordinationExperiments).forEach(([id, exp]) => {
        if (id === experimentId) return;

        const hasCommonTopic = exp.relatedTopics.some(topic => 
            relatedTopics.includes(topic)
        );

        if (hasCommonTopic) {
            const year1 = parseInt(exp.historicalBackground?.year?.toString().match(/\d{4}/)?.[0] || 0);
            const year2 = parseInt(experiment.historicalBackground?.year?.toString().match(/\d{4}/)?.[0] || 0);
            
            if (year1 < year2) {
                prerequisites.push({
                    id: id,
                    name: exp.name,
                    scientist: exp.historicalBackground?.scientist,
                    year: exp.historicalBackground?.year
                });
            }
        }
    });

    return prerequisites.sort((a, b) => {
        const yearA = parseInt(a.year?.toString().match(/\d{4}/)?.[0] || 0);
        const yearB = parseInt(b.year?.toString().match(/\d{4}/)?.[0] || 0);
        return yearA - yearB;
    });
}

// Export experiment as JSON
exportExperiment(experimentId) {
    const experiment = this.coordinationExperiments[experimentId];
    if (!experiment) return null;

    return JSON.stringify(experiment, null, 2);
}

// Export all experiments as JSON
exportAllExperiments() {
    return JSON.stringify(this.coordinationExperiments, null, 2);
}

// Get experiment learning outcomes
getExperimentLearningOutcomes(experimentId) {
    const experiment = this.coordinationExperiments[experimentId];
    if (!experiment) return [];

    const outcomes = [];

    // Extract from lab experiment if available
    if (experiment.labExperiment) {
        if (experiment.labExperiment.purpose) {
            outcomes.push(`Understand: ${experiment.labExperiment.purpose}`);
        }
        
        if (experiment.labExperiment.hypothesis) {
            outcomes.push(`Test: ${experiment.labExperiment.hypothesis}`);
        }

        if (experiment.labExperiment.conclusions) {
            const conclusions = Array.isArray(experiment.labExperiment.conclusions) ?
                experiment.labExperiment.conclusions : [experiment.labExperiment.conclusions];
            conclusions.forEach(conclusion => {
                outcomes.push(`Learn: ${conclusion}`);
            });
        }
    }

    return outcomes;
}

// Reset workbook state
resetWorkbook() {
    this.currentProblem = null;
    this.currentContent = null;
    this.contentSteps = [];
    this.currentWorkbook = null;
    this.currentExperiment = null;
    this.diagramData = null;
    this.diagramsPromise = null;
}

// Get full system status
getSystemStatus() {
    return {
        workbookStatus: this.getWorkbookStatus(),
        experimentCount: Object.keys(this.coordinationExperiments).length,
        topicCount: Object.keys(this.coordinationTopics).length,
        diagramCacheStats: this.getDiagramCacheStats(),
        learnerProfile: this.learnerProfile
    };
}

extractKeyPoints(content) {
    const keyPoints = [];

    if (content.summary) keyPoints.push(content.summary);
    
    // Extract from various coordination system structures
    if (content.components) {
        Object.keys(content.components).forEach(key => {
            const component = content.components[key];
            if (component.function) {
                keyPoints.push(`${key}: ${component.function}`);
            }
        });
    }

    if (content.keyDefinitions) {
        Object.entries(content.keyDefinitions).slice(0, 3).forEach(([term, def]) => {
            keyPoints.push(`${term}: ${def}`);
        });
    }

    return keyPoints.slice(0, 5);
}

// ========================================
// WORKBOOK GENERATION METHODS
// ========================================

generateCoordinationWorkbook() {
    if (!this.currentContent || !this.currentProblem) return;

    const workbook = this.createWorkbookStructure();
    workbook.title = 'Coordination System Workbook';

    // Start diagram generation in background if needed
    if (this.includeDiagramsInWorkbook) {
        this.diagramsPromise = this.generateCoordinationDiagramDataAsync();
    }

    workbook.sections = [
        this.createProblemSection(),
        this.createContentOverviewSection(),
        this.createDetailedContentSection(),
        this.createDiagramsPlaceholderSection(), // Placeholder until diagrams ready
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
    workbook.title = 'Coordination System Experiment Workbook';

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
                this.coordinationTopics[topic]?.name || topic,
                this.coordinationTopics[topic]?.description || ''
            ])
        });
    }

    this.currentWorkbook = workbook;
}

// Async helper that runs in background
async generateCoordinationDiagramDataAsync() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    // Get relevant diagram keys
    const diagramKeys = this.getRelevantCoordinationDiagrams(type);

    this.diagramData = {
        type: type,
        diagrams: diagramKeys,
        renderedImages: [],
        status: 'rendering',
        placeholder: false,
        note: "Coordination system diagrams"
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
        title: 'Neural and Endocrine Diagrams',
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
        title: 'Neural and Endocrine Diagrams',
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

getRelevantCoordinationDiagrams(topicType) {
    const diagramMap = {
        nervous_system_overview: [
            "neuronStructure",
            "brainRegions",
            "nervousSystemOrganization"
        ],
        neuron_structure: [
            "neuronStructure",
            "synapse",
            "myelinatedAxon"
        ],
        action_potential: [
            "actionPotential",
            "neuronStructure",
            "voltageDiagram"
        ],
        synaptic_transmission: [
            "synapse",
            "neurotransmitterRelease",
            "receptorBinding"
        ],
        reflex_arc: [
            "reflexArc",
            "spinalCord",
            "neuronStructure"
        ],
        brain_structure: [
            "brainRegions",
            "cerebralCortex",
            "limbicSystem"
        ],
        endocrine_system: [
            "endocrineSystem",
            "hormoneAction",
            "feedbackLoop"
        ],
        hormone_mechanisms: [
            "hormoneAction",
            "receptorTypes",
            "signalTransduction"
        ],
        autonomic_nervous_system: [
            "autonomicSystem",
            "sympatheticVsParasympathetic",
            "neurotransmitterPathways"
        ],
        sensory_systems: [
            "sensoryReceptors",
            "eye",
            "ear"
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
        title: 'Coordination System Workbook',
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
            category: this.coordinationTopics[this.currentProblem.type]?.category,
            difficulty: this.currentProblem.difficulty,
            prerequisites: this.currentProblem.prerequisites
        }
    };
}

createContentOverviewSection() {
    if (!this.currentContent) return null;

    return {
        title: 'Content Overview',
        type: 'overview',
        data: {
            topic: this.currentContent.topic,
            summary: this.currentContent.summary,
            keyPoints: this.extractKeyPoints(this.currentContent),
            relevance: this.getTopicRelevance(this.currentProblem.type)
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
    if (!this.currentContent?.comparison) return null;

    return {
        title: 'Comparisons',
        type: 'comparisons',
        data: this.currentContent.comparison
    };
}

createExamplesApplicationsSection() {
    if (!this.currentContent?.examples && !this.currentContent?.applications) return null;

    return {
        title: 'Examples and Applications',
        type: 'examples_applications',
        data: {
            examples: this.currentContent.examples || [],
            applications: this.currentContent.applications || []
        }
    };
}

createContextualScenariosWorkbookSection() {
    if (!this.currentContent?.contextualScenarios) return null;

    return {
        title: 'Real-World Scenarios',
        type: 'scenarios',
        data: this.currentContent.contextualScenarios
    };
}

createRelatedExperimentsWorkbookSection() {
    if (!this.currentContent?.relatedExperiments) return null;

    return {
        title: 'Related Experiments',
        type: 'experiments',
        data: this.currentContent.relatedExperiments
    };
}

createMisconceptionsSection() {
    if (!this.includeCommonMisconceptions) return null;

    const topicMisconceptions = this.commonMisconceptions[this.currentProblem.type];
    if (!topicMisconceptions) return null;

    return {
        title: 'Common Misconceptions',
        type: 'misconceptions',
        data: topicMisconceptions
    };
}

createMetacognitiveWorkbookSection() {
    if (!this.metacognitiveSupport || !this.currentContent?.metacognitivePrompts) return null;

    return {
        title: 'Reflection Questions',
        type: 'metacognitive',
        data: this.currentContent.metacognitivePrompts
    };
}

createAssessmentSection() {
    if (!this.assessmentFeedback) return null;

    return {
        title: 'Assessment and Practice',
        type: 'assessment',
        data: {
            learningObjectives: this.generateCoordinationLearningObjectives(),
            studyTips: this.generateCoordinationStudyTips(),
            practiceQuestions: this.generatePracticeQuestions()
        }
    };
}

// ========================================
// COORDINATION SYSTEM SPECIFIC HELPER METHODS
// ========================================

getTopicRelevance(topicType) {
    const relevance = {
        nervous_system_overview: "The nervous system coordinates all body activities through rapid electrical and chemical signaling",
        neuron_structure: "Neurons are specialized cells that form the basis of all neural communication and processing",
        action_potential: "Action potentials enable rapid, long-distance transmission of information without signal degradation",
        synaptic_transmission: "Synapses allow neurons to communicate chemically, enabling signal modulation and integration",
        reflex_arc: "Reflexes provide rapid, automatic responses essential for survival and homeostasis",
        brain_structure: "Understanding brain structure reveals how different regions enable cognition, emotion, and behavior",
        endocrine_system: "Hormones provide long-lasting chemical coordination essential for growth, metabolism, and reproduction",
        hormone_mechanisms: "Understanding how hormones work enables development of treatments for endocrine disorders",
        autonomic_nervous_system: "The ANS controls involuntary functions critical for maintaining life and responding to stress",
        sensory_systems: "Sensory systems connect us to our environment and enable perception of the world"
    };

    return relevance[topicType] || "Important coordination system concept";
}

suggestRelatedTopics() {
    if (!this.currentProblem) return [];

    const relatedTopicsMap = {
        nervous_system_overview: ['neuron_structure', 'brain_structure'],
        neuron_structure: ['action_potential', 'synaptic_transmission'],
        action_potential: ['neuron_structure', 'synaptic_transmission'],
        synaptic_transmission: ['action_potential', 'neuron_structure'],
        reflex_arc: ['neuron_structure', 'nervous_system_overview'],
        brain_structure: ['nervous_system_overview', 'sensory_systems'],
        endocrine_system: ['hormone_mechanisms', 'autonomic_nervous_system'],
        hormone_mechanisms: ['endocrine_system', 'synaptic_transmission'],
        autonomic_nervous_system: ['nervous_system_overview', 'endocrine_system'],
        sensory_systems: ['neuron_structure', 'brain_structure']
    };

    const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];

    return relatedTypes.map(type => ({
        type: type,
        name: this.coordinationTopics[type]?.name,
        description: this.coordinationTopics[type]?.description
    }));
}

generateGlossary() {
    if (!this.currentContent) return {};

    const glossary = {};

    // Extract from key definitions
    if (this.currentContent.keyDefinitions) {
        Object.assign(glossary, this.currentContent.keyDefinitions);
    }

    // Extract from components
    if (this.currentContent.components) {
        this.extractGlossaryFromComponents(this.currentContent.components, glossary);
    }

    // Extract from neurotransmitters
    if (this.currentContent.neurotransmitters) {
        Object.entries(this.currentContent.neurotransmitters).forEach(([key, nt]) => {
            if (nt.name) {
                glossary[key] = nt.name;
            }
        });
    }

    return glossary;
}

extractGlossaryFromComponents(components, glossary) {
    Object.entries(components).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
            if (value.definition) {
                glossary[this.formatKey(key)] = value.definition;
            }
            if (value.function) {
                glossary[`${this.formatKey(key)} Function`] = value.function;
            }
        }
    });
}

formatKey(key) {
    return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/_/g, ' ')
        .trim()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

generateCoordinationAnalogy(concept) {
    const analogies = {
        // Nervous System
        neuron: "Like a living wire that transmits electrical signals",
        synapse: "Like a junction where one wire communicates with another using chemical messengers",
        action_potential: "Like a wave traveling down a rope - once started, it travels the full length",
        myelin: "Like insulation on a wire - speeds up signal transmission",
        reflex: "Like an automatic alarm system that responds without conscious thought",
        
        // Brain
        brain: "Like a command center with specialized departments for different functions",
        cerebral_cortex: "Like the executive office handling complex decision-making",
        cerebellum: "Like a coordination center ensuring smooth, precise movements",
        limbic_system: "Like an emotional processing center linking feelings with memories",
        
        // Endocrine
        hormone: "Like a letter sent through the bloodstream to specific addresses (target cells)",
        receptor: "Like a mailbox that only accepts letters with the right address",
        negative_feedback: "Like a thermostat that turns off heating when temperature is reached",
        endocrine_gland: "Like a factory producing and shipping chemical messengers",
        
        // Autonomic
        sympathetic: "Like hitting the accelerator - preparing for action",
        parasympathetic: "Like hitting the brake - promoting rest and digestion",
        autonomic_balance: "Like a seesaw balancing rest and activity",
        
        // Sensory
        receptor_cell: "Like a specialized detector converting one type of energy into neural signals",
        sensory_pathway: "Like a relay system passing information to processing centers",
        adaptation: "Like getting used to a constant smell - receptors stop responding"
    };

    return analogies[concept] || "Performs a specialized coordination function";
}

adaptCoordinationLanguage(text, level) {
    if (!text) return '';

    const adaptations = {
        basic: {
            replacements: {
                'action potential': 'nerve signal',
                'neurotransmitter': 'chemical messenger',
                'synapse': 'connection between nerve cells',
                'dendrite': 'receiving branch',
                'axon': 'sending fiber',
                'myelin': 'insulation',
                'hormone': 'body chemical messenger',
                'receptor': 'detector',
                'sympathetic': 'fight-or-flight system',
                'parasympathetic': 'rest-and-digest system',
                'homeostasis': 'balance',
                'reflex': 'automatic response'
            }
        },
        intermediate: {
            replacements: {
                'action potential': 'action potential (nerve impulse)',
                'neurotransmitter': 'neurotransmitter',
                'synapse': 'synapse',
                'hormone': 'hormone',
                'receptor': 'receptor'
            }
        },
        advanced: {
            replacements: {
                'action potential': 'action potential (transient depolarization)',
                'neurotransmitter': 'neurotransmitter (synaptic messenger)',
                'synapse': 'synapse (chemical or electrical junction)',
                'hormone': 'hormone (endocrine signaling molecule)',
                'receptor': 'receptor (ligand-binding protein)'
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

addCoordinationConceptualConnections(content) {
    if (!this.includeConceptualConnections) return content;

    const connections = {
        nervous_system_overview: "Nervous system structure determines function: CNS integrates, PNS communicates. Connects to all body systems for coordination.",
        neuron_structure: "Neuron structure enables function: dendrites receive, soma integrates, axon conducts. Structure-function relationship is fundamental.",
        action_potential: "Action potentials connect neuron structure to rapid signaling. Enable long-distance communication without degradation.",
        synaptic_transmission: "Synapses convert electrical to chemical signals, enabling modulation and integration. Connect to learning and memory.",
        reflex_arc: "Reflexes demonstrate neural circuits in action. Connect sensory input to motor output automatically.",
        brain_structure: "Brain organization reflects evolution and function. Different regions specialize but cooperate for complex behaviors.",
        endocrine_system: "Hormones complement nervous system - slower but longer-lasting. Both systems maintain homeostasis.",
        hormone_mechanisms: "Hormone mechanisms determine cellular effects. Water-soluble use second messengers, lipid-soluble alter genes.",
        autonomic_nervous_system: "ANS demonstrates neural control of involuntary functions. Sympathetic/parasympathetic balance maintains homeostasis.",
        sensory_systems: "Sensory transduction converts environmental stimuli to neural signals. Connects external world to internal processing."
    };

    content.conceptualConnections = connections[this.currentProblem.type] || 
        "This topic connects to broader coordination and control principles";

    return content;
}

enrichWithCoordinationExamples(content) {
    if (!this.includeExamples || content.examples) return content;

    const exampleDatabase = {
        nervous_system_overview: [
            "Spinal cord injury at T6: paralysis below chest, but reflexes may remain",
            "Multiple sclerosis: demyelination → slowed/blocked nerve conduction",
            "Guillain-Barré syndrome: immune attack on peripheral myelin → paralysis"
        ],
        neuron_structure: [
            "Motor neurons: long axons (up to 1 meter) to reach distant muscles",
            "Sensory neurons: specialized endings detect specific stimuli",
            "Interneurons: 99% of all neurons, entirely within CNS"
        ],
        action_potential: [
            "Local anesthetics (lidocaine): block Na⁺ channels → no pain signals",
            "Puffer fish toxin (TTX): blocks Na⁺ channels → paralysis and death",
            "Multiple sclerosis: demyelination slows action potential conduction"
        ],
        synaptic_transmission: [
            "Botox: blocks ACh release → muscle paralysis (cosmetic, medical uses)",
            "SSRIs (Prozac): block serotonin reuptake → treat depression",
            "Curare: blocks ACh receptors → paralysis (used in surgery)"
        ],
        reflex_arc: [
            "Knee-jerk reflex: tests L2-L4 spinal segments",
            "Withdrawal reflex: touching hot stove → instant hand removal",
            "Babinski reflex: abnormal in adults → indicates brain/spinal damage"
        ],
        brain_structure: [
            "Stroke in left MCA: right-sided paralysis, aphasia if language areas affected",
            "Alzheimer's disease: hippocampal degeneration → memory loss",
            "Parkinson's disease: substantia nigra degeneration → movement problems"
        ],
        endocrine_system: [
            "Type 1 diabetes: no insulin → high blood glucose, requires insulin injections",
            "Hypothyroidism: low thyroid hormone → fatigue, weight gain, cold intolerance",
            "Growth hormone deficiency: treated with GH injections to promote growth"
        ],
        hormone_mechanisms: [
            "Insulin resistance (Type 2 diabetes): cells don't respond to insulin properly",
            "Steroid hormones: enter cells and alter gene expression (hours to take effect)",
            "Epinephrine: binds surface receptors → rapid effects (seconds)"
        ],
        autonomic_nervous_system: [
            "Fight-or-flight: increased heart rate, dilated pupils, sweating (sympathetic)",
            "Rest-and-digest: slow heart rate, increased digestion (parasympathetic)",
            "Orthostatic hypotension: ANS dysfunction → BP drops when standing"
        ],
        sensory_systems: [
            "Glaucoma: increased eye pressure damages optic nerve → blindness",
            "Hearing loss: damage to hair cells in cochlea (loud noise, aging)",
            "Phantom limb pain: sensory cortex still processes signals from missing limb"
        ]
    };

    if (exampleDatabase[this.currentProblem.type]) {
        content.examples = content.examples || [];
        content.examples.push(...exampleDatabase[this.currentProblem.type]);
    }

    return content;
}

addCoordinationComparativeContext(content) {
    if (!this.includeComparisons || content.comparison) return content;

    const comparativeData = {
        nervous_system_overview: {
            speed: "Electrical signals (milliseconds) vs hormonal signals (minutes to hours)",
            specificity: "Targeted (specific neurons) vs widespread (any cell with receptor)",
            duration: "Brief (milliseconds to seconds) vs long-lasting (minutes to days)"
        },
        neuron_structure: {
            speed: "Myelinated: 100+ m/s vs unmyelinated: 0.5-2 m/s",
            size: "Some axons: <1 μm vs motor neurons: up to 1 meter long",
            number: "~86 billion neurons in human brain"
        },
        action_potential: {
            amplitude: "Always same size (~110 mV) - all-or-none principle",
            speed: "Fast (myelinated) vs slow (unmyelinated)",
            refractory: "Absolute: ~1 ms, relative: ~2-4 ms"
        },
        synaptic_transmission: {
            speed: "Chemical: ~0.5-1 ms delay vs electrical: instantaneous",
            modulation: "Chemical allows modulation vs electrical fixed",
            plasticity: "Chemical synapses can strengthen/weaken (learning)"
        },
        endocrine_system: {
            speed: "Slower than nervous (minutes-hours) but longer-lasting",
            specificity: "Only cells with receptors respond",
            regulation: "Mostly negative feedback (maintain homeostasis)"
        },
        autonomic_nervous_system: {
            sympathetic: "Thoracolumbar origin, short preganglionic, NE",
            parasympathetic: "Craniosacral origin, long preganglionic, ACh",
            effects: "Usually opposite (balance)"
        }
    };

    if (comparativeData[this.currentProblem.type]) {
        content.comparativeContext = comparativeData[this.currentProblem.type];
    }

    return content;
}

validateCoordinationContent(content) {
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
        content.components ||
        content.structure ||
        content.mechanism ||
        content.functions;

    if (!hasSubstantiveContent) {
        validationResults.warnings.push("Limited substantive content");
        validationResults.suggestions.push("Consider adding more detailed information");
    }

    // Check for educational value
    if (!content.examples && !content.applications) {
        validationResults.suggestions.push("Consider adding examples and applications");
    }

    // Check for comparisons
    if (!content.comparison) {
        validationResults.suggestions.push("Consider adding comparative information");
    }

    return validationResults;
}

calculateCoordinationContentCompleteness() {
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
        this.currentContent.components ||
        this.currentContent.structure ||
        this.currentContent.mechanism ||
        this.currentContent.functions;
    if (hasMainContent) score += 3;

    // Additional depth
    if (this.currentContent.clinicalSignificance) score += 1;
    if (this.currentContent.contextualScenarios) score += 1;

    return Math.round((score / maxScore) * 100);
}

getCoordinationContentQualityMetrics() {
    return {
        completeness: this.calculateCoordinationContentCompleteness(),
        hasExamples: !!this.currentContent?.examples,
        hasComparisons: !!this.currentContent?.comparison,
        hasApplications: !!this.currentContent?.applications,
        hasContextualScenarios: !!this.currentContent?.contextualScenarios,
        detailLevel: this.explanationLevel,
        includesVisualizations: this.includeVisualizations,
        includesMisconceptions: this.includeCommonMisconceptions,
        includesExperiments: this.includeExperiments,
        adaptiveDifficulty: this.adaptiveDifficulty,
        metacognitiveSupport: this.metacognitiveSupport
    };
}

filterCoordinationContentByCategory(category) {
    if (!this.currentContent) return null;

    const filtered = {
        category: category,
        items: []
    };

    // Filter based on category
    if (this.currentContent.components) {
        Object.entries(this.currentContent.components).forEach(([key, value]) => {
            if (key.toLowerCase().includes(category.toLowerCase())) {
                filtered.items.push({ type: key, data: value });
            }
        });
    }

    return filtered;
}

generateCoordinationContentSummary() {
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
    if (this.currentContent.components) {
        summary.keyPoints.push("Components and organization covered");
        summary.coverage.components = Object.keys(this.currentContent.components).length;
    }

    if (this.currentContent.mechanism) {
        summary.keyPoints.push("Mechanism of action explained");
        summary.coverage.mechanism = true;
    }

    if (this.currentContent.functions) {
        summary.keyPoints.push("Functions and effects described");
        summary.coverage.functions = true;
    }

    if (this.currentContent.examples) {
        summary.coverage.examples = this.currentContent.examples.length;
    }

    return summary;
}

assessCoordinationContentDifficulty() {
    if (!this.currentContent) return 'unknown';

    let difficultyScore = 0;

    // Topic-based difficulty
    const basicTopics = ['nervous_system_overview', 'reflex_arc'];
    const intermediateTopics = ['neuron_structure', 'brain_structure', 'endocrine_system'];
    const advancedTopics = ['action_potential', 'synaptic_transmission', 'hormone_mechanisms', 'autonomic_nervous_system'];

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

generateCoordinationLearningObjectives() {
    if (!this.currentProblem) return [];

    const objectivesDatabase = {
        nervous_system_overview: [
            "Distinguish between the CNS and PNS and describe their functions",
            "Identify the major divisions of the nervous system",
            "Explain the roles of neurons and neuroglia",
            "Describe how the nervous system is protected"
        ],
        neuron_structure: [
            "Identify the major parts of a neuron and their functions",
            "Explain how myelin increases conduction speed",
            "Compare myelinated and unmyelinated axons",
            "Describe the structure and function of synapses"
        ],
        action_potential: [
            "Explain how resting potential is maintained",
            "Describe the ionic basis of action potentials",
            "Explain the all-or-none principle",
            "Compare continuous and saltatory conduction"
        ],
        synaptic_transmission: [
            "Describe the events of chemical synaptic transmission",
            "Explain the roles of neurotransmitters and receptors",
            "Distinguish between EPSPs and IPSPs",
            "Explain spatial and temporal summation"
        ],
        reflex_arc: [
            "Identify the components of a reflex arc",
            "Distinguish between monosynaptic and polysynaptic reflexes",
            "Explain Sherrington's principle of reciprocal innervation",
            "Describe the clinical significance of reflex testing"
        ],
        brain_structure: [
            "Identify the major regions of the brain and their functions",
            "Describe the structure and functions of the cerebral lobes",
            "Explain the roles of the basal ganglia and limbic system",
            "Relate brain structure to clinical disorders"
        ],
        endocrine_system: [
            "Identify the major endocrine glands and their hormones",
            "Explain how hormones regulate homeostasis",
            "Describe negative and positive feedback mechanisms",
            "Compare nervous and endocrine system coordination"
        ],
        hormone_mechanisms: [
            "Compare water-soluble and lipid-soluble hormone mechanisms",
            "Explain second messenger systems (cAMP, IP3/DAG)",
            "Describe how steroid hormones alter gene expression",
            "Explain receptor regulation (up/down-regulation)"
        ],
        autonomic_nervous_system: [
            "Compare the sympathetic and parasympathetic divisions",
            "Describe the anatomy of autonomic pathways",
            "Explain the concept of dual innervation",
            "Relate autonomic dysfunction to disease"
        ],
        sensory_systems: [
            "Explain sensory transduction",
            "Describe different types of sensory receptors",
            "Compare phasic and tonic adaptation",
            "Trace sensory pathways from receptor to cortex"
        ]
    };

    return objectivesDatabase[this.currentProblem.type] || [
        "Understand the key coordination concepts",
        "Apply knowledge to physiological contexts",
        "Make connections between structure and function"
    ];
}

identifyCoordinationPrerequisites() {
    if (!this.currentProblem) return [];

    const prerequisitesDatabase = {
        nervous_system_overview: [
            "Basic anatomy and physiology",
            "Cell structure and function",
            "Understanding of electrical signals"
        ],
        neuron_structure: [
            "Cell biology (organelles, membrane)",
            "Basic chemistry (ions, electrical charge)",
            "Nervous system overview"
        ],
        action_potential: [
            "Neuron structure",
            "Membrane potential concepts",
            "Ion channels and pumps"
        ],
        synaptic_transmission: [
            "Neuron structure",
            "Action potential",
            "Chemical signaling basics"
        ],
        reflex_arc: [
            "Nervous system organization",
            "Neuron types and functions",
            "Basic anatomy (spinal cord)"
        ],
        brain_structure: [
            "Nervous system overview",
            "Basic neuroanatomy",
            "Understanding of functional localization"
        ],
        endocrine_system: [
            "Homeostasis concepts",
            "Cell signaling basics",
            "Feedback mechanisms"
        ],
        hormone_mechanisms: [
            "Cell membrane structure",
            "Receptor concepts",
            "Gene expression basics (for steroid hormones)"
        ],
        autonomic_nervous_system: [
            "Nervous system organization",
            "Neurotransmitters",
            "Organ systems (cardiovascular, digestive, etc.)"
        ],
        sensory_systems: [
            "Neuron structure and function",
            "Sensory receptor types",
            "Neural pathways"
        ]
    };

    return prerequisitesDatabase[this.currentProblem.type] || [
        "General biology background",
        "Basic anatomy knowledge"
    ];
}

generateCoordinationStudyTips() {
    if (!this.currentProblem) return [];

    const studyTipsDatabase = {
        nervous_system_overview: [
            "Create a concept map showing CNS/PNS divisions",
            "Draw and label neuron types",
            "Make flashcards for neuroglia functions",
            "Relate structures to protective mechanisms"
        ],
        neuron_structure: [
            "Build 3D neuron model to understand structure",
            "Draw neurons and label all parts",
            "Compare myelinated vs unmyelinated diagrams side-by-side",
            "Practice identifying neuron types from images"
        ],
        action_potential: [
            "Draw action potential graph with ion movements annotated",
            "Create timeline of events during action potential",
            "Practice explaining all-or-none principle",
            "Make flashcards for refractory periods"
        ],
        synaptic_transmission: [
            "Draw detailed synapse diagram with numbered steps",
            "Create tables comparing neurotransmitters",
            "Practice drawing EPSP and IPSP graphs",
            "Explain summation using diagrams"
        ],
        reflex_arc: [
            "Draw reflex arc pathway with all components",
            "Practice testing reflexes on yourself or partner",
            "Create comparison table: monosynaptic vs polysynaptic",
            "Relate reflex testing to clinical diagnosis"
        ],
        brain_structure: [
            "Use brain model or app to learn 3D relationships",
            "Create function chart for each lobe",
            "Draw sagittal and coronal brain sections",
            "Relate brain regions to specific deficits (stroke, etc.)"
        ],
        endocrine_system: [
            "Draw feedback loops for each hormone axis",
            "Create hormone comparison table (gland, target, effect)",
            "Make flowcharts for hormone regulation",
            "Relate hormones to real disorders (diabetes, hypothyroidism)"
        ],
        hormone_mechanisms: [
            "Draw second messenger cascades step-by-step",
            "Compare water-soluble vs lipid-soluble side-by-side",
            "Practice explaining receptor up/down-regulation",
            "Relate mechanisms to drug actions"
        ],
        autonomic_nervous_system: [
            "Create side-by-side comparison: sympathetic vs parasympathetic",
            "Draw dual innervation of organs",
            "Make scenario cards: predict ANS response",
            "Relate to drugs (beta-blockers, atropine, etc.)"
        ],
        sensory_systems: [
            "Draw receptor types and their stimuli",
            "Create sensory pathway diagrams",
            "Practice explaining transduction",
            "Relate receptors to clinical tests"
        ]
    };

    return studyTipsDatabase[this.currentProblem.type] || [
        "Review material regularly with active recall",
        "Create visual aids and diagrams",
        "Practice explaining concepts to others",
        "Relate neural concepts to real-world applications"
    ];
}

generatePracticeQuestions() {
    if (!this.currentProblem) return [];

    const questionTypes = {
        remember: `What are the main components of ${this.currentContent?.topic}?`,
        understand: `Explain how ${this.currentContent?.topic} works`,
        apply: `Predict what would happen if... (scenario)`,
        analyze: `Compare and contrast related concepts`,
        evaluate: `Assess the clinical significance`,
        create: `Design an experiment to test...`
    };

    return Object.values(questionTypes);
}

generateCoordinationProcessTimeline(processName) {
    const timelines = {
        'Action Potential': [
            { phase: 'Resting', duration: 'Stable', voltage: '-70 mV', events: 'Na⁺/K⁺ pump maintains gradients' },
            { phase: 'Depolarization', duration: '~0.3 ms', voltage: '-70 to +30 mV', events: 'Na⁺ channels open, Na⁺ in' },
            { phase: 'Repolarization', duration: '~1-2 ms', voltage: '+30 to -70 mV', events: 'K⁺ channels open, K⁺ out' },
            { phase: 'Hyperpolarization', duration: '~1 ms', voltage: '-80 mV', events: 'K⁺ channels slow to close' }
        ],
        'Synaptic Transmission': [
            { step: 'AP arrival', duration: 'Milliseconds', events: 'Depolarization of terminal' },
            { step: 'Ca²⁺ influx', duration: 'Microseconds', events: 'Voltage-gated Ca²⁺ channels open' },
            { step: 'Vesicle fusion', duration: 'Microseconds', events: 'SNARE proteins mediate exocytosis' },
            { step: 'NT diffusion', duration: '~0.5 ms', events: 'NT crosses synaptic cleft' },
            { step: 'Receptor binding', duration: 'Microseconds', events: 'Opens ion channels or activates G-proteins' },
            { step: 'PSP generation', duration: '1-5 ms', events: 'EPSP or IPSP in postsynaptic cell' }
        ],
        'Hormone Action': [
            { step: 'Secretion', duration: 'Seconds-minutes', events: 'Hormone released into blood' },
            { step: 'Transport', duration: 'Minutes', events: 'Travels via circulation' },
            { step: 'Receptor binding', duration: 'Seconds', events: 'Binds target cell receptors' },
            { step: 'Cellular response', duration: 'Minutes-hours', events: 'Second messengers or gene transcription' },
            { step: 'Termination', duration: 'Minutes-hours', events: 'Degradation, reuptake, or metabolism' }
        ]
    };

    return timelines[processName] || [];
}

generateCoordinationContentHierarchy() {
    if (!this.currentContent) return null;

    const hierarchy = {
        root: this.currentContent.topic,
        children: []
    };

    if (this.currentContent.components) {
        Object.keys(this.currentContent.components).forEach(key => {
            hierarchy.children.push({
                name: key,
                type: 'component'
            });
        });
    }

    if (this.currentContent.structure) {
        hierarchy.children.push({
            name: 'Anatomical Structure',
            type: 'section'
        });
    }

    if (this.currentContent.mechanism) {
        hierarchy.children.push({
            name: 'Mechanism',
            type: 'section'
        });
    }

    if (this.currentContent.functions) {
        hierarchy.children.push({
            name: 'Functions',
            type: 'section'
        });
    }

    return hierarchy;
}

// ========================================
// EXPORT
// ========================================

export default EnhancedCoordinationSystemWorkbook;
