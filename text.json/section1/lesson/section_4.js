

cellCommunication: {
    title: "Cell Communication: Signalling Pathways and Cellular Responses",

    databaseLinks: {
        misconceptions: [
            'signallingBasics',
            'receptorTypes',
            'secondMessengers',
            'signalAmplification',
            'cellularResponses'
        ],
        contextualScenarios: [
            'signallingBasics',
            'receptorTypes',
            'secondMessengers',
            'signalAmplification'
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
            'signallingBasics',
            'receptorTypes',
            'secondMessengers',
            'signalAmplification'
        ]
    },

    conceptLinks: {
        "Cell signalling occurs through chemical signals binding to receptors": {
            misconceptions:      ['signallingBasics'],
            scenarios:           ['signallingBasics'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['signallingBasics']
        },
        "Receptor type determines the intracellular response": {
            misconceptions:      ['receptorTypes'],
            scenarios:           ['receptorTypes'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['receptorTypes']
        },
        "Second messengers amplify and relay signals inside the cell": {
            misconceptions:      ['secondMessengers'],
            scenarios:           ['secondMessengers'],
            studyTips:           ['diagrams', 'flashcards', 'specimens'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['secondMessengers']
        },
        "Signal transduction cascades amplify weak signals enormously": {
            misconceptions:      ['signalAmplification'],
            scenarios:           ['signalAmplification'],
            studyTips:           ['comparisonTables', 'mnemonics', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['signalAmplification']
        },
        "Cellular responses include changes in gene expression, metabolism, and cell behaviour": {
            misconceptions:      ['cellularResponses'],
            scenarios:           ['signallingBasics', 'secondMessengers'],
            studyTips:           ['comparisonTables', 'flashcards', 'dissectionAndExperiment'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['signalAmplification']
        }
    },

    topicIntroduction: {
        overview: "Cell communication is the molecular basis of coordination in multicellular life. Every heartbeat, immune response, growth event, and stress reaction depends on cells receiving, interpreting, and responding to chemical signals. Signals can travel nanometres (between adjacent cells) or metres (hormones through the bloodstream), yet the intracellular logic — receptor binding, signal transduction, amplification, and response — follows conserved principles across all eukaryotes.",
        whyItMatters: "Virtually every major disease involves disrupted cell signalling. Cancer arises when signalling pathways controlling growth and division are constitutively activated or silenced. Diabetes involves defective insulin receptor signalling. Neurological disorders often reflect failures in synaptic signalling. The majority of drugs on the market — including beta-blockers, SSRIs, statins, and monoclonal antibodies — work by modifying specific steps in signalling pathways.",
        bigPicture: "Cell signalling follows a universal three-stage logic: reception (a receptor protein detects the signal), transduction (a cascade of intracellular molecules relays and transforms the signal), and response (the cell alters gene expression, metabolism, cytoskeleton, or behaviour). Signal amplification at each transduction step means that a single hormone molecule can ultimately activate millions of downstream effectors.",
        priorKnowledge: [
            "Cell membrane structure: phospholipid bilayer, membrane proteins, hydrophobicity",
            "Protein structure: how shape determines function; conformational change",
            "Enzyme regulation: phosphorylation, allosteric regulation",
            "Gene expression: transcription factors and how genes are switched on/off",
            "Basic chemistry: ligand-receptor binding, concentration gradients"
        ],
        topicRoadmap: [
            "Types of cell signalling: autocrine, paracrine, endocrine, synaptic, contact-dependent",
            "The three stages: reception, transduction, response",
            "Receptor classes: GPCRs, RTKs, ligand-gated ion channels, intracellular receptors",
            "Second messengers: cAMP, IP₃, DAG, Ca²⁺",
            "Signal transduction cascades: kinase cascades and signal amplification",
            "Cellular responses: gene expression changes, metabolic shifts, cytoskeletal changes",
            "Signal termination and pathway crosstalk",
            "Disrupted signalling in disease: cancer, diabetes, pharmacology"
        ]
    },

    concepts: [
        "Cell signalling occurs through chemical signals binding to receptors",
        "Receptor type determines the intracellular response",
        "Second messengers amplify and relay signals inside the cell",
        "Signal transduction cascades amplify weak signals enormously",
        "Cellular responses include changes in gene expression, metabolism, and cell behaviour",
        "Signal termination prevents continuous or inappropriate responses"
    ],

    theory: "Cell communication relies on signal molecules (ligands) binding to specific receptor proteins, triggering conformational changes that initiate intracellular signalling cascades. These cascades — often involving sequential protein phosphorylation — amplify and diversify the original signal, ultimately producing changes in cell behaviour appropriate to the physiological context.",

    keyDefinitions: {
        "Ligand": "A signalling molecule that binds to a specific receptor",
        "Receptor": "A protein that binds a ligand and initiates a cellular response",
        "Signal Transduction": "The conversion of an extracellular signal into an intracellular response",
        "Second Messenger": "Small intracellular molecule that relays and amplifies the signal (e.g. cAMP, Ca²⁺)",
        "GPCR": "G protein-coupled receptor — largest family of cell-surface receptors",
        "RTK": "Receptor tyrosine kinase — receptor with intrinsic kinase activity",
        "Kinase": "Enzyme that phosphorylates target proteins (transfers phosphate from ATP)",
        "Phosphatase": "Enzyme that removes phosphate groups, reversing kinase activity",
        "Amplification": "Each step in a cascade activates many molecules — one signal → millions of responses",
        "Signal Termination": "Mechanisms that switch off the signalling pathway after response",
        "Autocrine Signalling": "Cell signals to itself",
        "Paracrine Signalling": "Cell signals to nearby cells (local)",
        "Endocrine Signalling": "Hormones travel through the bloodstream to distant target cells",
        "Synaptic Signalling": "Neurotransmitters released across a synapse — rapid and localised"
    },

    signallingTypes: {
        autocrine: {
            distance: "Same cell",
            example: "Growth factors secreted by cancer cells stimulating their own proliferation",
            speed: "Immediate"
        },
        paracrine: {
            distance: "Adjacent cells (micrometres to millimetres)",
            example: "Neurotrophic factors, inflammatory mediators, histamine",
            speed: "Seconds to minutes"
        },
        endocrine: {
            distance: "Distant organs (centimetres to metres via bloodstream)",
            example: "Insulin, adrenaline, cortisol, oestrogen",
            speed: "Minutes to hours"
        },
        synaptic: {
            distance: "Across synapse (~20 nm cleft)",
            example: "Acetylcholine, dopamine, serotonin, GABA",
            speed: "Milliseconds"
        },
        contactDependent: {
            distance: "Direct cell-to-cell contact",
            example: "Notch-Delta signalling in development",
            speed: "Variable"
        }
    },

    receptorClasses: {
        GPCRs: {
            location: "Cell surface (transmembrane)",
            structure: "Seven transmembrane alpha-helices coupled to heterotrimeric G protein (Gα, Gβ, Gγ)",
            mechanism: "Ligand binding → G protein activation (GDP→GTP on Gα) → Gα dissociates → activates effector (adenylyl cyclase or phospholipase C)",
            examples: "Adrenaline (β-adrenergic receptor), glucagon receptor, odorant receptors, light receptors (rhodopsin)",
            downstream: "cAMP pathway (Gs) or IP₃/DAG pathway (Gq)",
            termination: "GTPase activity of Gα hydrolyses GTP → GDP; receptor desensitisation by phosphorylation"
        },
        RTKs: {
            location: "Cell surface (transmembrane)",
            structure: "Single transmembrane domain with extracellular ligand-binding domain and intracellular tyrosine kinase domain",
            mechanism: "Ligand binding → receptor dimerisation → autophosphorylation of tyrosine residues → docking sites for downstream signalling proteins",
            examples: "Insulin receptor, EGF receptor, PDGF receptor, VEGF receptor",
            downstream: "Ras/MAPK pathway, PI3K/Akt pathway",
            termination: "Receptor internalisation (endocytosis), phosphatase activity, GAP proteins deactivate Ras"
        },
        ligandGatedIonChannels: {
            location: "Cell surface (transmembrane)",
            structure: "Ion channel gated by ligand binding — ligand binding opens channel directly",
            mechanism: "Ligand binding → conformational change → channel opens → ion flux → change in membrane potential or intracellular [Ca²⁺]",
            examples: "Nicotinic acetylcholine receptor (Na⁺/K⁺), GABA-A receptor (Cl⁻), NMDA receptor (Ca²⁺)",
            downstream: "Ion concentration changes, membrane depolarisation, CaM kinase activation",
            termination: "Ligand dissociation, channel inactivation, ion pump restoration"
        },
        intracellularReceptors: {
            location: "Cytoplasm or nucleus",
            structure: "Soluble proteins with ligand-binding domain and DNA-binding domain",
            mechanism: "Lipid-soluble ligand diffuses across membrane → binds receptor → receptor-ligand complex enters nucleus → acts as transcription factor",
            examples: "Steroid hormone receptors (oestrogen, testosterone, cortisol), thyroid hormone receptor, vitamin D receptor",
            downstream: "Direct gene expression changes (hours to days)",
            termination: "Ligand dissociation, receptor degradation, transcriptional repressors"
        }
    },

    secondMessengers: {
        cAMP: {
            production: "Adenylyl cyclase converts ATP → cAMP (activated by Gs-coupled GPCRs)",
            targets: "Protein kinase A (PKA) — phosphorylates many target proteins",
            examples: "Adrenaline → β-adrenergic GPCR → cAMP → PKA → glycogen phosphorylase activation",
            degradation: "Phosphodiesterase cleaves cAMP → AMP (termination)",
            cellularEffects: "Glycogen breakdown, lipolysis, cardiac contractility, gene expression via CREB"
        },
        IP3andDAG: {
            production: "Phospholipase C cleaves PIP₂ → IP₃ + DAG (activated by Gq-coupled GPCRs or RTKs)",
            IP3target: "IP₃ binds IP₃ receptor on ER membrane → Ca²⁺ release from ER",
            DAGtarget: "DAG activates Protein kinase C (PKC) at the plasma membrane",
            examples: "Acetylcholine → muscarinic GPCR → Gq → PLC → IP₃ + DAG → Ca²⁺ release + PKC",
            cellularEffects: "Smooth muscle contraction, platelet activation, secretion, cell proliferation"
        },
        calcium: {
            sources: "ER release via IP₃R; extracellular entry via voltage-gated or ligand-gated channels",
            targets: "Calmodulin (CaM) → CaM kinase; troponin C (muscle contraction); synaptotagmin (vesicle fusion)",
            examples: "Ca²⁺ → calmodulin → myosin light chain kinase → smooth muscle contraction",
            restoration: "Ca²⁺-ATPase pumps Ca²⁺ back into ER; Na⁺/Ca²⁺ exchanger removes from cytoplasm",
            cellularEffects: "Muscle contraction, neurotransmitter release, fertilisation response, apoptosis"
        }
    },

    signalTransductionCascades: {
        RasMapkPathway: {
            trigger: "RTK activation (e.g. EGF receptor)",
            steps: [
                "EGF binds EGFR → receptor dimerisation and autophosphorylation",
                "Adaptor protein Grb2 binds phosphotyrosine → recruits SOS (GEF)",
                "SOS activates Ras (GDP→GTP)",
                "Ras-GTP activates Raf (MAP kinase kinase kinase)",
                "Raf phosphorylates MEK (MAP kinase kinase)",
                "MEK phosphorylates ERK (MAP kinase)",
                "ERK enters nucleus → phosphorylates transcription factors → gene expression changes"
            ],
            amplification: "Each step activates many downstream molecules; one EGF molecule → thousands of activated ERK molecules",
            outcome: "Cell proliferation, survival, differentiation",
            disease: "Ras mutations (constitutively active) present in ~30% of all cancers"
        },
        cAMPpkaPathway: {
            trigger: "Gs-coupled GPCR activation (e.g. adrenaline → β-adrenergic receptor)",
            steps: [
                "Adrenaline binds β-adrenergic receptor",
                "Gs protein activated (GDP→GTP on Gα-s)",
                "Gα-s activates adenylyl cyclase",
                "Adenylyl cyclase converts ATP → cAMP (signal amplification)",
                "cAMP binds regulatory subunits of PKA → catalytic subunits released",
                "PKA phosphorylates target proteins (glycogen phosphorylase kinase, CREB, etc.)",
                "Response: glycogen breakdown, increased heart rate, gene expression"
            ],
            amplification: "One receptor → many G proteins → many adenylyl cyclase molecules → enormous cAMP elevation → many PKA molecules → many substrate phosphorylations",
            termination: "Phosphodiesterase degrades cAMP; phosphatases remove phosphate groups; GTPase deactivates Gα"
        }
    },

    signalTermination: {
        ligandRemoval: "Signal molecule degraded or diluted",
        receptorDesensitisation: "Receptor phosphorylation → reduced sensitivity; receptor internalisation (endocytosis)",
        secondMessengerDegradation: "Phosphodiesterase degrades cAMP; Ca²⁺-ATPase removes Ca²⁺",
        phosphataseActivity: "Protein phosphatases remove phosphate groups added by kinases",
        GTPaseActivity: "Intrinsic GTPase of Gα and Ras hydrolyses GTP → GDP, inactivating these switches",
        importance: "Without termination, signals would be permanently on — constitutive activation drives cancer and other diseases"
    },

    disruptedSignallingInDisease: {
        cancer: {
            mechanism: "Oncogenic mutations cause constitutive (always-on) signalling in growth pathways",
            examples: "Ras mutations (30% of cancers), EGFR mutations (lung cancer), HER2 amplification (breast cancer)",
            drugs: "Imatinib (BCR-Abl kinase inhibitor), gefitinib (EGFR inhibitor), trastuzumab (anti-HER2)"
        },
        diabetes: {
            mechanism: "Defective insulin receptor signalling — insulin resistance (type 2) or absent insulin (type 1)",
            consequence: "Cells fail to take up glucose; hyperglycaemia; downstream metabolic dysregulation",
            drugs: "Metformin (activates AMPK pathway), GLP-1 agonists (mimic incretin signalling)"
        },
        cholera: {
            mechanism: "Cholera toxin permanently activates Gα-s by ADP-ribosylation — locks adenylyl cyclase ON",
            consequence: "Massive cAMP elevation in intestinal epithelial cells → Cl⁻ and H₂O secretion → profuse watery diarrhoea"
        },
        heartFailure: {
            mechanism: "Chronic β-adrenergic overstimulation → receptor downregulation → impaired cardiac response",
            drugs: "Beta-blockers block β-adrenergic GPCRs — reduce excessive signalling and protect the heart"
        }
    },

    applications: [
        "Drug design targeting specific receptors or kinases (beta-blockers, kinase inhibitors, monoclonal antibodies)",
        "Cancer therapy (targeting oncogenic signalling pathways)",
        "Hormone replacement and reproductive medicine",
        "Neuropharmacology (SSRIs, antipsychotics, anaesthetics act on signalling receptors)",
        "Vaccine adjuvants (stimulating immune cell signalling)",
        "Understanding developmental biology and stem cell differentiation"
    ],

    topicSummary: {
        coreInsights: [
            "Cell communication follows a universal three-stage logic — reception, transduction, response — conserved across all eukaryotes and exploited by virtually all drugs that affect physiology.",
            "Receptor type dictates signalling mechanism: GPCRs use G proteins and second messengers; RTKs use tyrosine phosphorylation and adaptor proteins; intracellular receptors directly control gene expression.",
            "Second messengers (cAMP, IP₃, DAG, Ca²⁺) are small, rapidly diffusible molecules that translate membrane receptor activation into cytoplasmic and nuclear events.",
            "Signal amplification through kinase cascades means that a single ligand-receptor binding event can activate millions of effector molecules — explaining how nanomolar hormone concentrations produce large physiological responses.",
            "Signal termination is as important as initiation: phosphodiesterases, phosphatases, GTPases, and receptor internalisation prevent pathological continuous signalling.",
            "Cancer is fundamentally a disease of disrupted cell signalling — oncogenes are constitutively active signalling proteins; tumour suppressors are brakes on signalling that have been lost."
        ],
        keyPathways: {
            "GPCR→cAMP→PKA": "Adrenaline, glucagon, many hormones — fast metabolic responses",
            "GPCR→PLC→IP₃/DAG→Ca²⁺/PKC": "Acetylcholine, angiotensin — smooth muscle, secretion",
            "RTK→Ras→MAPK→ERK": "Growth factors — cell proliferation and differentiation",
            "Intracellular receptor→nucleus": "Steroid hormones — gene expression changes (hours to days)"
        },
        receptorComparison: {
            GPCR:                  { location: "Membrane", ligand: "Hydrophilic", speed: "Seconds–minutes",   mechanism: "G protein → second messenger" },
            RTK:                   { location: "Membrane", ligand: "Hydrophilic", speed: "Minutes",           mechanism: "Dimerisation → tyrosine phosphorylation" },
            LigandGatedChannel:    { location: "Membrane", ligand: "Hydrophilic", speed: "Milliseconds",      mechanism: "Direct ion flux" },
            IntracellularReceptor: { location: "Cytoplasm/nucleus", ligand: "Hydrophobic", speed: "Hours–days", mechanism: "Direct transcription factor" }
        },
        commonMistakesToAvoid: [
            "Second messengers are NOT the same as the original signal — they are intracellular relay molecules produced in response to receptor activation",
            "GPCRs do NOT directly open ion channels — they act via G proteins and second messengers (except when directly coupled to channels in some contexts)",
            "Steroid hormones use intracellular receptors because they are lipid-soluble and cross the membrane — hydrophilic hormones cannot and must use surface receptors",
            "Signal amplification means MORE molecules are activated at each step — the signal does not simply pass unchanged from receptor to response",
            "Phosphorylation does not always activate a protein — whether phosphorylation activates or inhibits depends entirely on the specific protein and site",
            "Ras is a G protein but NOT a GPCR-associated G protein — it is a small monomeric GTPase in the RTK pathway; confusing it with the heterotrimeric Gα is a very common error"
        ],
        connections: [
            "Enzyme regulation: kinase cascades are chains of regulated enzymes; covalent phosphorylation is the key mechanism connecting signalling to enzyme activity",
            "Gene expression: many signalling pathways ultimately phosphorylate transcription factors (e.g. CREB, NF-κB) — connecting extracellular signals to genomic responses",
            "Cancer biology: mutated signalling proteins (Ras, EGFR, HER2) are among the most clinically important oncogenes",
            "Pharmacology: the majority of drugs target receptors, particularly GPCRs — making this the most druggable class of proteins in the human proteome",
            "Immunology: cytokine signalling (via JAK-STAT pathways) coordinates the entire immune response"
        ],
        examReadinessChecklist: [
            "Can you draw and annotate the complete GPCR→cAMP→PKA pathway from ligand binding to cellular response?",
            "Can you draw and annotate the RTK→Ras→MAPK pathway including the role of adaptor proteins?",
            "Can you explain why steroid hormones use intracellular receptors while peptide hormones use surface receptors?",
            "Can you explain signal amplification quantitatively — how one receptor activation leads to millions of effector activations?",
            "Can you connect a specific disease (cancer, diabetes, cholera) to a specific signalling defect?",
            "Can you predict the consequence of a constitutively active Ras mutation on cell behaviour?"
        ]
    }
},

cellularProcesses: {
    title: "Cellular Processes: Respiration, Photosynthesis, and the Cell Cycle",

    databaseLinks: {
        misconceptions: [
            'cellularRespiration',
            'photosynthesis',
            'cellCycle',
            'atpAndEnergy',
            'membraneTransport'
        ],
        contextualScenarios: [
            'cellularRespiration',
            'photosynthesis',
            'cellCycle',
            'membraneTransport'
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
            'cellularRespiration',
            'photosynthesis',
            'cellCycle',
            'membraneTransport'
        ]
    },

    conceptLinks: {
        "ATP is the universal energy currency of the cell": {
            misconceptions:      ['atpAndEnergy'],
            scenarios:           ['cellularRespiration'],
            studyTips:           ['diagrams', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['cellularRespiration']
        },
        "Cellular respiration oxidises glucose to produce ATP via glycolysis, the Krebs cycle, and oxidative phosphorylation": {
            misconceptions:      ['cellularRespiration'],
            scenarios:           ['cellularRespiration'],
            studyTips:           ['diagrams', 'comparisonTables', 'practiceRoutines'],
            assessmentRubrics:   ['remember', 'understand', 'apply', 'analyze'],
            assessmentQuestions: ['cellularRespiration']
        },
        "Photosynthesis converts light energy into chemical energy via light-dependent and light-independent reactions": {
            misconceptions:      ['photosynthesis'],
            scenarios:           ['photosynthesis'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['photosynthesis']
        },
        "The cell cycle is regulated at checkpoints to ensure accurate DNA replication and division": {
            misconceptions:      ['cellCycle'],
            scenarios:           ['cellCycle'],
            studyTips:           ['diagrams', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['remember', 'understand', 'apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['cellCycle']
        },
        "Membrane transport maintains cellular homeostasis through passive and active mechanisms": {
            misconceptions:      ['membraneTransport'],
            scenarios:           ['membraneTransport'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['membraneTransport']
        }
    },

    topicIntroduction: {
        overview: "Cellular processes are the integrated molecular events that sustain life: producing energy, capturing light, dividing accurately, and maintaining internal composition. In this lesson, we examine cellular respiration and photosynthesis as complementary energy-transformation pathways, the cell cycle as the mechanism of accurate heredity, and membrane transport as the gatekeeper of cellular identity. Together these processes define what it means for a cell to be alive.",
        whyItMatters: "Every heartbeat depends on ATP produced by mitochondrial respiration. Every crop plant's yield depends on photosynthetic efficiency. Every cancer arises from a failure in cell cycle regulation. Every intravenous drip depends on understanding osmosis. These are not abstract concepts — they are the molecular basis of medicine, agriculture, and biotechnology.",
        bigPicture: "Cellular processes are thermodynamically coherent: respiration releases free energy from chemical bonds; photosynthesis captures electromagnetic energy and stores it as chemical bonds; the cell cycle uses that energy to replicate and partition genetic information; membrane transport uses it to maintain electrochemical gradients essential for signalling and homeostasis. All four are interconnected and regulated by the same core principles of enzyme kinetics, thermodynamics, and signal transduction.",
        priorKnowledge: [
            "Cell structure: organelles and their functions (mitochondria, chloroplasts, nucleus)",
            "Protein structure and enzyme function (from the Enzymes lesson)",
            "Basic chemistry: oxidation and reduction, phosphate bonds, free energy",
            "DNA structure: double helix, base pairing, nucleotides",
            "Basic genetics: chromosomes, ploidy, Mendelian inheritance"
        ],
        topicRoadmap: [
            "ATP structure and the logic of energy coupling",
            "Glycolysis: the universal first stage of respiration",
            "The Krebs cycle (citric acid cycle): acetyl-CoA oxidation",
            "Oxidative phosphorylation: the electron transport chain and chemiosmosis",
            "Anaerobic respiration and fermentation",
            "Photosynthesis: light-dependent reactions (photosystems I and II)",
            "The Calvin cycle (light-independent reactions)",
            "Comparison of respiration and photosynthesis",
            "The cell cycle: interphase, mitosis, cytokinesis",
            "Cell cycle checkpoints and cancer",
            "Membrane structure and the fluid mosaic model",
            "Passive transport: diffusion, facilitated diffusion, osmosis",
            "Active transport: pumps, vesicular transport"
        ]
    },

    concepts: [
        "ATP is the universal energy currency of the cell",
        "Cellular respiration oxidises glucose to produce ATP via glycolysis, the Krebs cycle, and oxidative phosphorylation",
        "Photosynthesis converts light energy into chemical energy via light-dependent and light-independent reactions",
        "The cell cycle is regulated at checkpoints to ensure accurate DNA replication and division",
        "Membrane transport maintains cellular homeostasis through passive and active mechanisms",
        "Oxidation and reduction are coupled in biological energy transfer (redox reactions)",
        "Chemiosmosis links proton gradients to ATP synthesis in both respiration and photosynthesis"
    ],

    theory: "Cellular processes represent the convergence of thermodynamics, genetics, and structural biology. Energy flows from photosynthesis to respiration; genetic information flows from DNA replication through mitosis; chemical composition is maintained by membrane transport. Each process is catalysed by enzymes, regulated by signals, and embedded in membrane architecture.",

    keyDefinitions: {
        "ATP (Adenosine Triphosphate)": "Universal energy carrier; hydrolysis of the terminal phosphate bond releases ~30.5 kJ/mol usable energy",
        "Glycolysis": "Ten-step cytoplasmic pathway converting glucose to two pyruvate molecules; net yield 2 ATP and 2 NADH",
        "Pyruvate decarboxylation": "Conversion of pyruvate to acetyl-CoA in the mitochondrial matrix; produces NADH and CO₂",
        "Krebs Cycle": "Eight-step cyclic pathway in the mitochondrial matrix; oxidises acetyl-CoA to CO₂; yields NADH, FADH₂, and GTP",
        "Electron Transport Chain (ETC)": "Series of protein complexes in the inner mitochondrial membrane that transfer electrons from NADH/FADH₂ to O₂, pumping H⁺ to create the proton gradient",
        "Chemiosmosis": "ATP synthesis driven by H⁺ flow down its electrochemical gradient through ATP synthase",
        "Oxidative Phosphorylation": "ATP production via the ETC and chemiosmosis; yields ~28–32 ATP per glucose",
        "Fermentation": "Anaerobic pathway regenerating NAD⁺ from NADH using pyruvate as electron acceptor; no additional ATP produced",
        "Photosynthesis": "Conversion of light energy to chemical energy: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂",
        "Light-Dependent Reactions": "Occur in thylakoid membranes; split water, produce ATP and NADPH, release O₂",
        "Calvin Cycle": "Light-independent reactions in the stroma; use ATP and NADPH to fix CO₂ into G3P (glyceraldehyde-3-phosphate)",
        "Cell Cycle": "Ordered sequence of events: G1 → S (DNA replication) → G2 → M (mitosis) → cytokinesis",
        "Checkpoint": "Surveillance mechanism that halts cell cycle progression if criteria (DNA integrity, spindle assembly) are not met",
        "Cyclins": "Regulatory proteins whose concentration oscillates through the cell cycle, activating CDKs",
        "CDK (Cyclin-Dependent Kinase)": "Kinase activated by cyclin binding; phosphorylates target proteins to advance cell cycle stages",
        "Apoptosis": "Programmed cell death; eliminates damaged or unwanted cells without triggering inflammation",
        "Osmosis": "Net movement of water across a semi-permeable membrane from low to high solute concentration",
        "Tonicity": "Effect of a solution on cell volume relative to cytoplasm (hypotonic, isotonic, hypertonic)",
        "Active Transport": "Movement of molecules against their concentration gradient using ATP or co-transport",
        "Sodium-Potassium Pump": "P-type ATPase that moves 3 Na⁺ out and 2 K⁺ in per ATP; maintains resting membrane potential"
    },

    cellularRespiration: {
        overview: "Cellular respiration is the controlled oxidation of organic molecules (primarily glucose) to generate ATP. It proceeds through four stages, each in a specific subcellular location.",
        glycolysis: {
            location: "Cytoplasm",
            substrate: "Glucose (6C)",
            products: "2 Pyruvate (3C), 2 NADH, net 2 ATP",
            keySteps: [
                "Glucose phosphorylated twice (investment phase: −2 ATP)",
                "Fructose-1,6-bisphosphate cleaved into two triose phosphates",
                "Each triose phosphate oxidised and phosphorylated (payoff phase: +4 ATP, +2 NADH)",
                "Net yield: 2 ATP, 2 NADH, 2 pyruvate"
            ],
            keyEnzymes: ["Hexokinase", "Phosphofructokinase (PFK)", "Pyruvate kinase"]
        },
        pyruvateDecarboxylation: {
            location: "Mitochondrial matrix",
            substrate: "Pyruvate (3C)",
            products: "Acetyl-CoA (2C), CO₂, NADH",
            enzyme: "Pyruvate dehydrogenase complex"
        },
        krebsCycle: {
            location: "Mitochondrial matrix",
            substrate: "Acetyl-CoA (2C) + oxaloacetate (4C) → citrate (6C)",
            productsPerTurn: "2 CO₂, 3 NADH, 1 FADH₂, 1 GTP",
            turnsPerGlucose: 2,
            totalPerGlucose: "6 CO₂, 6 NADH, 2 FADH₂, 2 GTP",
            keyPoint: "Cycle regenerates oxaloacetate — the acceptor molecule is not consumed"
        },
        oxidativePhosphorylation: {
            location: "Inner mitochondrial membrane",
            components: {
                ComplexI: "NADH dehydrogenase; oxidises NADH, pumps 4 H⁺",
                ComplexII: "Succinate dehydrogenase; oxidises FADH₂, does NOT pump H⁺",
                ComplexIII: "Cytochrome bc1; transfers electrons from ubiquinol to cytochrome c, pumps 4 H⁺",
                ComplexIV: "Cytochrome c oxidase; transfers electrons to O₂ (final acceptor), pumps 2 H⁺",
                ATPSynthase: "Uses H⁺ flow (chemiosmosis) to synthesise ATP from ADP + Pi"
            },
            protonGradient: "H⁺ pumped into intermembrane space; flows back through ATP synthase",
            ATPYield: "Approximately 2.5 ATP per NADH, 1.5 ATP per FADH₂",
            totalATPPerGlucose: "Approximately 30–32 ATP (modern estimate; older texts cite 36–38)"
        },
        fermentation: {
            purpose: "Regenerate NAD⁺ to allow glycolysis to continue in anaerobic conditions",
            lacticAcid: "Pyruvate reduced to lactate (muscle, bacteria); no CO₂ produced",
            alcoholic: "Pyruvate decarboxylated to acetaldehyde, then reduced to ethanol (yeast); CO₂ produced",
            ATPYield: "Only 2 ATP (from glycolysis); no additional ATP from fermentation itself"
        }
    },

    photosynthesis: {
        overview: "Photosynthesis uses light energy to drive the synthesis of organic molecules from CO₂ and H₂O. It occurs in two linked stages: the light-dependent reactions (thylakoids) and the Calvin cycle (stroma).",
        lightDependentReactions: {
            location: "Thylakoid membranes (grana)",
            photosystemII: {
                function: "Absorbs light (680 nm); splits water (photolysis: 2H₂O → 4H⁺ + 4e⁻ + O₂); excites electrons",
                electronFlow: "Excited electrons passed to plastoquinone (PQ)"
            },
            electronTransportChain: {
                components: "Plastoquinone → cytochrome b6f complex → plastocyanin",
                function: "Pumps H⁺ into thylakoid lumen; creates proton gradient for ATP synthesis"
            },
            photosystemI: {
                function: "Absorbs light (700 nm); re-energises electrons; reduces NADP⁺ to NADPH via ferredoxin and NADP⁺ reductase"
            },
            ATPSynthase: "Thylakoid ATP synthase (CF₀CF₁) uses lumenal H⁺ gradient to synthesise ATP",
            outputs: "ATP, NADPH, O₂ (byproduct of water splitting)"
        },
        calvinCycle: {
            location: "Stroma",
            stages: {
                carbonFixation: "CO₂ fixed onto RuBP (5C) by RuBisCO → two molecules of 3-phosphoglycerate (3PG, 3C)",
                reduction: "3PG phosphorylated by ATP and reduced by NADPH to glyceraldehyde-3-phosphate (G3P)",
                regeneration: "5/6 G3P molecules used to regenerate RuBP using ATP; 1/6 G3P exits as net product"
            },
            inputsPerCarbonDioxideFixed: "3 ATP, 2 NADPH",
            totalToMakeOneGlucose: "6 turns, 18 ATP, 12 NADPH",
            keyEnzyme: "RuBisCO (most abundant enzyme on Earth; also catalyses photorespiration)"
        },
        comparisonWithRespiration: {
            similarities: [
                "Both use electron transport chains in membranes",
                "Both use ATP synthase driven by chemiosmosis (proton gradient)",
                "Both involve redox reactions and electron carriers (NAD⁺/NADH, NADP⁺/NADPH)",
                "Both are compartmentalised within specific organelles"
            ],
            differences: {
                energyDirection: "Respiration: chemical → ATP (exergonic); Photosynthesis: light → chemical (endergonic overall)",
                electronSource: "Respiration: glucose; Photosynthesis: water",
                finalElectronAcceptor: "Respiration: O₂; Photosynthesis: NADP⁺",
                location: "Respiration: mitochondria; Photosynthesis: chloroplasts"
            }
        }
    },

    cellCycle: {
        phases: {
            G1: "Cell growth; synthesis of proteins and organelles; commitment to division at the Restriction Point (R point)",
            S: "DNA replication; each chromosome duplicated to form sister chromatids joined at centromere",
            G2: "Further growth; synthesis of mitotic spindle components; DNA damage checkpoint",
            M: {
                prophase: "Chromatin condenses; spindle forms; nuclear envelope breaks down",
                metaphase: "Chromosomes align at metaphase plate; spindle assembly checkpoint operates",
                anaphase: "Sister chromatids separated by cohesin cleavage; pulled to opposite poles",
                telophase: "Nuclear envelopes reform; chromosomes decondense",
                cytokinesis: "Cytoplasm divided (cleavage furrow in animals; cell plate in plants)"
            },
            G0: "Quiescent state; cell has exited cycle (most differentiated cells)"
        },
        checkpoints: {
            G1Checkpoint: "Is the cell large enough? Is DNA undamaged? Are growth signals present? If no → arrest in G0",
            G2Checkpoint: "Is DNA fully replicated and undamaged? Are conditions favourable for mitosis? If no → arrest",
            SpindleAssemblyCheckpoint: "Are all kinetochores attached to spindle microtubules? If no → anaphase blocked; prevents aneuploidy"
        },
        regulation: {
            cyclins: {
                cyclinD: "Accumulates in G1; activates CDK4/6; drives Rb phosphorylation",
                cyclinE: "Rises in late G1; activates CDK2; commits cell to S phase",
                cyclinA: "Present in S and G2; activates CDK2 then CDK1",
                cyclinB: "Rises in G2; activates CDK1 (MPF — maturation-promoting factor); triggers mitosis onset"
            },
            tumourSuppressors: {
                Rb: "Retinoblastoma protein; when unphosphorylated, inhibits E2F transcription factors; phosphorylation by cyclin D-CDK4/6 releases E2F, allowing S-phase entry",
                p53: "Activated by DNA damage; induces p21 (CDK inhibitor) causing G1 arrest; can trigger apoptosis if damage is irreparable"
            },
            CDKInhibitors: "p21, p27, p57 — inhibit cyclin-CDK complexes to halt progression"
        },
        cancer: {
            definition: "Uncontrolled cell proliferation resulting from accumulated mutations in proto-oncogenes and tumour suppressor genes",
            protoOncogenes: "Normal genes encoding growth-promoting proteins (Ras, Myc); when mutated to oncogenes, constitutively active",
            tumourSuppressors: "Genes encoding growth-inhibiting proteins (p53, Rb); loss of both alleles required for effect (two-hit hypothesis)",
            hallmarks: [
                "Self-sufficient growth signals",
                "Insensitivity to anti-growth signals",
                "Evasion of apoptosis",
                "Limitless replicative potential (telomerase activation)",
                "Sustained angiogenesis",
                "Tissue invasion and metastasis"
            ]
        }
    },

    membraneTransport: {
        membraneStructure: {
            fluidMosaicModel: "Singer and Nicolson (1972): phospholipid bilayer with embedded proteins; both lipids and proteins can move laterally",
            components: {
                phospholipids: "Amphipathic; hydrophilic head faces aqueous environment; hydrophobic tail faces membrane interior",
                cholesterol: "Moderates fluidity; prevents crystallisation at low temperature and excessive fluidity at high temperature",
                integralProteins: "Span the bilayer; include channels, carriers, pumps, receptors",
                peripheralProteins: "Attached to membrane surface; often structural or signalling roles"
            }
        },
        passiveTransport: {
            simpleDiffusion: "Non-polar, lipid-soluble molecules (O₂, CO₂, ethanol) move directly through bilayer; rate proportional to concentration gradient",
            facilitatedDiffusion: {
                channelProteins: "Form water-filled pores for specific ions or water (aquaporins); gated or always open",
                carrierProteins: "Bind specific solutes and undergo conformational change to transport; subject to saturation (like enzymes)"
            },
            osmosis: {
                definition: "Net movement of water from low solute concentration to high solute concentration across a semi-permeable membrane",
                osmotic_pressure: "Pressure required to prevent net osmotic water movement",
                tonicity: {
                    hypotonic: "Solution has lower solute concentration than cell; water enters; cell swells (animal: lysis; plant: turgor)",
                    isotonic: "Equal solute concentration; no net water movement",
                    hypertonic: "Solution has higher solute concentration; water leaves cell; cell shrinks (animal: crenation; plant: plasmolysis)"
                }
            }
        },
        activeTransport: {
            primaryActive: {
                mechanism: "Directly uses ATP hydrolysis to move molecules against gradient",
                example: "Na⁺/K⁺-ATPase: moves 3 Na⁺ out and 2 K⁺ in per ATP; creates electrochemical gradient used by neurons"
            },
            secondaryActive: {
                mechanism: "Uses electrochemical gradient (generated by primary active transport) to co-transport another molecule",
                symport: "Both molecules move in same direction (e.g. Na⁺-glucose cotransporter in intestinal epithelium)",
                antiport: "Molecules move in opposite directions (e.g. Na⁺/H⁺ exchanger)"
            },
            vesicularTransport: {
                endocytosis: "Cell engulfs material; phagocytosis (particles), pinocytosis (fluid), receptor-mediated endocytosis (specific ligands)",
                exocytosis: "Vesicles fuse with plasma membrane to secrete contents (neurotransmitters, hormones, digestive enzymes)"
            }
        }
    },

    applications: [
        "Cancer therapy: targeting cell cycle checkpoints (CDK inhibitors, p53 activation)",
        "Antibiotics: disrupting bacterial cell wall synthesis (linked to cell division)",
        "Agriculture: engineering crops with improved photosynthetic efficiency (C4 and CAM metabolism)",
        "Sports medicine: understanding lactate threshold and anaerobic respiration",
        "Oral rehydration therapy: exploiting Na⁺-glucose cotransport to drive water absorption",
        "Biofuels: harnessing fermentation (ethanol) and photosynthesis (algal lipids)",
        "Anaesthesia: exploiting membrane lipid solubility to deliver anaesthetic agents"
    ],

    topicSummary: {
        coreInsights: [
            "ATP is the universal energy currency — its hydrolysis is coupled to virtually every energy-requiring cellular process, from biosynthesis to active transport to muscle contraction.",
            "Glycolysis is the universal first stage of respiration; it occurs in the cytoplasm of all living cells and requires no oxygen — its products enter either aerobic or anaerobic pathways.",
            "The electron transport chain and ATP synthase are physically and functionally analogous in mitochondria (respiration) and chloroplasts (photosynthesis) — chemiosmosis is a unifying principle of bioenergetics.",
            "The Calvin cycle does not directly require light — it requires ATP and NADPH produced by the light reactions; the terms 'light-independent' and 'dark reactions' are misleading because the cycle cannot sustain itself in prolonged darkness.",
            "Cell cycle checkpoints are molecular quality-control mechanisms — their failure underlies virtually all cancers; understanding them is the basis of targeted oncology.",
            "Carrier-mediated transport displays saturation kinetics analogous to Michaelis-Menten enzyme kinetics — connecting membrane biology to the kinetic framework of the Enzymes lesson.",
            "Osmosis has life-or-death clinical consequences: hypotonic IV fluids cause cell lysis; hypertonic fluids cause cell shrinkage; correct tonicity matching is fundamental to clinical medicine."
        ],
        keyEquations: {
            aerobicRespiration: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~30–32 ATP",
            photosynthesis: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",
            ATPHydrolysis: "ATP + H₂O → ADP + Pᵢ + ~30.5 kJ/mol",
            glycolysisNet: "Glucose + 2NAD⁺ + 2ADP + 2Pᵢ → 2 Pyruvate + 2NADH + 2ATP + 2H₂O",
            waterPotential: "Ψ = Ψₛ + Ψₚ (solute potential + pressure potential)"
        },
        ATPYieldSummary: {
            glycolysis: "2 ATP (net), 2 NADH",
            pyruvateDecarboxylation: "2 NADH (per glucose)",
            krebsCycle: "2 GTP, 6 NADH, 2 FADH₂ (per glucose)",
            oxidativePhosphorylation: "~26–28 ATP (from 10 NADH and 2 FADH₂)",
            total: "~30–32 ATP per glucose"
        },
        commonMistakesToAvoid: [
            "The Calvin cycle does not occur 'in the dark' — it occurs continuously when ATP and NADPH are available, which requires light to be on",
            "O₂ in photosynthesis comes from water, not CO₂ — this was proven by isotope labelling (¹⁸O experiments)",
            "Fermentation does not produce ATP beyond glycolysis — it only regenerates NAD⁺ to allow glycolysis to continue",
            "FADH₂ yields less ATP than NADH because it donates electrons at Complex II, bypassing the H⁺-pumping step of Complex I",
            "The modern ATP yield from glucose is ~30–32, not 36–38 — older estimates assumed 100% coupling efficiency",
            "Mitosis produces genetically identical diploid cells — it is not the same as meiosis (which produces haploid gametes)",
            "Osmosis is the movement of WATER, not solutes — solutes do not move through the semi-permeable membrane in simple osmosis"
        ],
        connections: [
            "Enzymes (prior lesson): every step of respiration, the Calvin cycle, and the cell cycle is catalysed by enzymes subject to the kinetic and regulatory principles already studied",
            "Genetics: the S phase of the cell cycle produces the DNA copies that Mendelian genetics describes; cell cycle failure produces the mutations that cause cancer",
            "Medicine: ATP depletion (ischaemia), checkpoint failure (cancer), and osmotic imbalance (renal failure) are three of the most clinically significant cellular process failures",
            "Evolution: the structural and mechanistic similarity of mitochondrial and chloroplast electron transport chains supports the endosymbiotic theory",
            "Ecology: global carbon and oxygen cycles are driven by the balance between photosynthesis and respiration across the biosphere"
        ],
        examReadinessChecklist: [
            "Can you write the net equation for glycolysis, including all inputs and outputs?",
            "Can you trace an electron from NADH through all four ETC complexes to O₂, naming where H⁺ is pumped?",
            "Can you compare the light-dependent reactions and the Calvin cycle in a table (location, inputs, outputs, key enzymes)?",
            "Can you draw and label the cell cycle, marking where each checkpoint operates?",
            "Can you explain why competitive inhibition of PFK (by ATP) is an example of both enzyme regulation and cellular respiration regulation?",
            "Can you predict what happens to a plant cell and an animal cell placed in a hypotonic solution, and explain why the outcomes differ?"
        ]
    }
},

cellularMolecules: {
    title: "Cellular Molecules: The Chemistry of Life",

    databaseLinks: {
        misconceptions: [
            'macromoleculeBasics',
            'carbohydrates',
            'lipids',
            'proteins',
            'nucleicAcids',
            'waterAndBonding'
        ],
        contextualScenarios: [
            'macromoleculeBasics',
            'carbohydrates',
            'lipids',
            'proteins',
            'nucleicAcids'
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
            'macromoleculeBasics',
            'carbohydrates',
            'lipids',
            'proteins',
            'nucleicAcids'
        ]
    },

    conceptLinks: {
        "Cells are built from four classes of biological macromolecules": {
            misconceptions:      ['macromoleculeBasics'],
            scenarios:           ['macromoleculeBasics'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['macromoleculeBasics']
        },
        "Monomers are joined by condensation and separated by hydrolysis": {
            misconceptions:      ['macromoleculeBasics'],
            scenarios:           ['macromoleculeBasics'],
            studyTips:           ['diagrams', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['macromoleculeBasics']
        },
        "Carbohydrates serve as energy sources and structural materials": {
            misconceptions:      ['carbohydrates'],
            scenarios:           ['carbohydrates'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens', 'mnemonics'],
            assessmentRubrics:   ['understand', 'apply'],
            assessmentQuestions: ['carbohydrates']
        },
        "Lipids are defined by hydrophobicity, not by polymer structure": {
            misconceptions:      ['lipids'],
            scenarios:           ['lipids'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['lipids']
        },
        "Protein structure at four levels determines function": {
            misconceptions:      ['proteins'],
            scenarios:           ['proteins'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['proteins']
        },
        "Nucleic acids encode, transmit, and express genetic information": {
            misconceptions:      ['nucleicAcids'],
            scenarios:           ['nucleicAcids'],
            studyTips:           ['diagrams', 'comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['nucleicAcids']
        }
    },

    topicIntroduction: {
        overview: "All living cells are built from the same four classes of biological macromolecules — carbohydrates, lipids, proteins, and nucleic acids. These molecules carry out every function of life: storing and releasing energy, forming membranes, catalysing reactions, transmitting genetic information, and providing structural support. Understanding their chemical structure is inseparable from understanding how they function, because in biology, structure determines function at every scale from atom to organism.",
        whyItMatters: "Virtually every disease, drug, and biotechnology application can be traced to a change in one or more of these molecules. Cancer is driven by mutations in nucleic acids that alter protein function. Diabetes involves dysregulation of carbohydrate metabolism. Atherosclerosis results from lipid accumulation. Antibiotics target bacterial proteins or nucleic acids. Understanding cellular molecules is the molecular foundation of all of medicine and biotechnology.",
        bigPicture: "Biological macromolecules are polymers built from repeating monomer units by condensation reactions and disassembled by hydrolysis. The diversity of life arises not from exotic chemistry but from the combinatorial assembly of a small set of monomer types — 20 amino acids, 4–5 nucleotide bases, a handful of monosaccharides — into polymers of extraordinary variety. Lipids are the exception: they are not polymers, but their amphipathic chemistry makes membranes and life itself possible.",
        priorKnowledge: [
            "Atomic structure: electrons, protons, neutrons; electron shells",
            "Chemical bonding: covalent, ionic, hydrogen bonds, van der Waals forces",
            "Functional groups: hydroxyl, carboxyl, amino, phosphate, carbonyl",
            "Basic organic chemistry: carbon bonding, isomers, condensation and hydrolysis reactions",
            "Cell biology: cell membrane, organelles, nucleus"
        ],
        topicRoadmap: [
            "Condensation and hydrolysis: the universal reactions of macromolecule assembly and disassembly",
            "Carbohydrates: monosaccharides, disaccharides, polysaccharides — structure, isomerism, and function",
            "Lipids: triglycerides, phospholipids, steroids — hydrophobicity, membrane structure, and energy storage",
            "Proteins: amino acid structure, peptide bonds, four levels of structure, and structure-function relationships",
            "Nucleic acids: nucleotide structure, DNA double helix, RNA types, and the central dogma",
            "Water: hydrogen bonding, cohesion, adhesion, specific heat capacity, and solvent properties"
        ]
    },

    concepts: [
        "Cells are built from four classes of biological macromolecules",
        "Monomers are joined by condensation and separated by hydrolysis",
        "Carbohydrates serve as energy sources and structural materials",
        "Lipids are defined by hydrophobicity, not by polymer structure",
        "Protein structure at four levels determines function",
        "Nucleic acids encode, transmit, and express genetic information"
    ],

    theory: "Biological macromolecules are large organic molecules essential for all cellular functions. They are built from smaller monomer units and exhibit precise three-dimensional structures that determine their biological roles. The principle that structure determines function operates at every level — from individual bond angles to quaternary protein assemblies.",

    keyDefinitions: {
        "Monomer": "Small repeating subunit that polymerises to form a macromolecule",
        "Polymer": "Large molecule composed of many covalently bonded monomers",
        "Condensation Reaction": "Bond-forming reaction that releases water; joins monomers",
        "Hydrolysis": "Bond-breaking reaction using water; disassembles polymers",
        "Monosaccharide": "Single sugar unit; simplest carbohydrate (e.g. glucose, fructose)",
        "Disaccharide": "Two monosaccharides joined by a glycosidic bond",
        "Polysaccharide": "Many monosaccharides joined into a chain (e.g. starch, cellulose, glycogen)",
        "Glycosidic Bond": "Covalent bond between two monosaccharide units",
        "Fatty Acid": "Long hydrocarbon chain with a carboxyl group; monomer of triglycerides",
        "Triglyceride": "Glycerol backbone esterified with three fatty acids",
        "Phospholipid": "Glycerol, two fatty acids, a phosphate group, and a polar head group",
        "Saturated Fatty Acid": "No carbon-carbon double bonds; solid at room temperature",
        "Unsaturated Fatty Acid": "One or more C=C double bonds; liquid (oil) at room temperature",
        "Amino Acid": "Monomer of proteins; contains amino group, carboxyl group, R-group, and central carbon",
        "Peptide Bond": "Covalent bond between amino group of one amino acid and carboxyl group of another",
        "Primary Structure": "Sequence of amino acids in a polypeptide chain",
        "Secondary Structure": "Local folding into α-helix or β-pleated sheet; stabilised by hydrogen bonds",
        "Tertiary Structure": "Overall 3D shape of a single polypeptide; stabilised by R-group interactions",
        "Quaternary Structure": "Assembly of two or more polypeptide subunits",
        "Nucleotide": "Monomer of nucleic acids: phosphate group + pentose sugar + nitrogenous base",
        "Phosphodiester Bond": "Covalent bond linking nucleotides in a nucleic acid strand (5' to 3')",
        "Complementary Base Pairing": "A pairs with T (DNA) or U (RNA); G pairs with C; via hydrogen bonds",
        "Antiparallel": "Two DNA strands run in opposite 5'→3' directions"
    },

    condensationAndHydrolysis: {
        condensation: {
            altName: "Dehydration synthesis",
            mechanism: "Hydroxyl group on one monomer reacts with hydrogen on another, releasing H₂O and forming a covalent bond",
            examplesPerClass: {
                carbohydrates: "Glycosidic bond formation between monosaccharides",
                proteins:      "Peptide bond formation between amino acids",
                nucleicAcids:  "Phosphodiester bond formation between nucleotides",
                lipids:        "Ester bond formation between glycerol and fatty acids"
            },
            energetics: "Requires energy input (endergonic); driven by cellular metabolism"
        },
        hydrolysis: {
            mechanism: "Water molecule is added across a covalent bond, breaking it",
            examplesPerClass: {
                carbohydrates: "Amylase cleaves glycosidic bonds in starch",
                proteins:      "Proteases cleave peptide bonds during digestion",
                nucleicAcids:  "Restriction enzymes cleave phosphodiester bonds",
                lipids:        "Lipase cleaves ester bonds in triglycerides"
            },
            energetics: "Releases energy (exergonic); proceeds spontaneously with enzyme catalysis"
        }
    },

    carbohydrates: {
        generalFormula: "(CH₂O)ₙ",
        monosaccharides: {
            structure: "Single ring or chain structure; 3–7 carbons",
            examples: {
                glucose:   "6C; primary cellular fuel; α and β isomers",
                fructose:  "6C; fruit sugar; isomer of glucose",
                galactose: "6C; component of lactose",
                ribose:    "5C; component of RNA and ATP",
                deoxyribose: "5C; component of DNA (missing one oxygen)"
            },
            isomerism: {
                structural: "Same molecular formula, different connectivity (glucose vs fructose)",
                optical:    "Mirror image isomers (D and L forms)",
                alpha_beta: "α-glucose: -OH below ring plane at C1; β-glucose: -OH above ring plane at C1 — determines polymer properties"
            }
        },
        disaccharides: {
            maltose:  "α-glucose + α-glucose; α-1,4-glycosidic bond; from starch hydrolysis",
            sucrose:  "α-glucose + β-fructose; from plants; table sugar",
            lactose:  "β-galactose + glucose; from milk; requires lactase"
        },
        polysaccharides: {
            starch: {
                monomer: "α-glucose",
                bonds:   "α-1,4 (amylose); α-1,4 and α-1,6 (amylopectin — branched)",
                function: "Energy storage in plants",
                structure: "Helical (amylose) or branched (amylopectin)"
            },
            glycogen: {
                monomer: "α-glucose",
                bonds:   "α-1,4 and α-1,6 (more branched than amylopectin)",
                function: "Energy storage in animals (liver and muscle)",
                structure: "Highly branched — allows rapid glucose release"
            },
            cellulose: {
                monomer: "β-glucose",
                bonds:   "β-1,4-glycosidic bonds",
                function: "Structural support in plant cell walls",
                structure: "Straight, unbranched chains; hydrogen bonds between chains form rigid microfibrils",
                key: "β-linkage creates straight chains; humans lack cellulase and cannot digest it"
            },
            chitin: {
                monomer: "N-acetylglucosamine (modified β-glucose)",
                function: "Structural support in fungal cell walls and insect exoskeletons"
            }
        }
    },

    lipids: {
        notPolymers: "Lipids are NOT polymers — they are defined by hydrophobicity (insolubility in water), not by repeating monomer units",
        triglycerides: {
            structure: "One glycerol molecule esterified with three fatty acid chains via ester bonds",
            saturation: {
                saturated:   "No C=C double bonds; straight chains pack tightly; solid at room temperature (e.g. butter, lard)",
                unsaturated: "One (mono) or more (poly) C=C double bonds; kinked chains; liquid at room temperature (e.g. olive oil)",
                trans:       "Artificially hydrogenated unsaturated fats; straight chains; associated with cardiovascular disease"
            },
            function: "Long-term energy storage (2× energy per gram vs carbohydrates); thermal insulation; buoyancy"
        },
        phospholipids: {
            structure: "Glycerol + two fatty acids (hydrophobic tails) + phosphate group + polar head group (hydrophilic)",
            amphipathic: "Possesses both hydrophilic (head) and hydrophobic (tail) regions",
            bilayer: "In aqueous environments, phospholipids form bilayers: heads face water, tails face each other",
            function: "Structural basis of all biological membranes (plasma membrane, organelle membranes)"
        },
        steroids: {
            structure: "Four fused carbon rings; cholesterol is the precursor",
            examples:  "Cholesterol (membrane fluidity); testosterone, oestrogen (sex hormones); cortisol (stress hormone); vitamin D"
        },
        waxes: {
            structure: "Long-chain fatty acid esterified with a long-chain alcohol",
            function:  "Waterproofing (cuticle of leaves, earwax, feather waterproofing)"
        }
    },

    proteins: {
        aminoAcidStructure: {
            centralCarbon: "Alpha carbon bonded to four groups",
            aminoGroup:    "-NH₂ (basic)",
            carboxylGroup: "-COOH (acidic)",
            hydrogen:      "Single H atom",
            rGroup:        "Variable side chain — determines amino acid identity and properties",
            rGroupCategories: {
                nonpolarHydrophobic: "Alanine, valine, leucine, isoleucine, phenylalanine, proline, tryptophan — found in protein interior",
                polarUncharged:      "Serine, threonine, cysteine, tyrosine, asparagine, glutamine — form hydrogen bonds",
                positivelyCharged:   "Lysine, arginine, histidine — ionic bonds with negative groups",
                negativelyCharged:   "Aspartate, glutamate — ionic bonds with positive groups"
            }
        },
        peptideBond: {
            formation:   "Condensation between -COOH of one amino acid and -NH₂ of next; releases H₂O",
            character:   "Partial double bond character; planar; limits rotation",
            polarity:    "Polypeptide has N-terminus (free -NH₂) and C-terminus (free -COOH); reads N→C"
        },
        levelsOfStructure: {
            primary: {
                definition:   "Linear sequence of amino acids, held by peptide bonds",
                determinant:  "Encoded directly by gene sequence",
                importance:   "Determines all higher levels of structure"
            },
            secondary: {
                definition:   "Local regular folding patterns",
                alphaHelix:   "Right-handed coil; H-bonds between C=O of residue n and N-H of residue n+4",
                betaSheet:    "Extended strands held side-by-side by H-bonds; parallel or antiparallel",
                stabilisedBy: "Hydrogen bonds between backbone atoms (not R-groups)"
            },
            tertiary: {
                definition:   "Overall 3D shape of a single polypeptide",
                stabilisedBy: [
                    "Hydrophobic interactions (nonpolar R-groups cluster in interior)",
                    "Hydrogen bonds between R-groups",
                    "Ionic bonds (salt bridges) between charged R-groups",
                    "Disulphide bonds (covalent; between cysteine R-groups; strongest)"
                ]
            },
            quaternary: {
                definition:   "Association of two or more polypeptide chains (subunits)",
                example:      "Haemoglobin: 4 subunits (2α + 2β); collagen: triple helix of three polypeptides",
                stabilisedBy: "Same interactions as tertiary structure, between subunits"
            }
        },
        proteinFunctions: [
            "Structural (collagen, keratin, actin)",
            "Catalytic (enzymes)",
            "Transport (haemoglobin, membrane transporters)",
            "Signalling (hormones like insulin; receptors)",
            "Defence (antibodies)",
            "Motor (myosin, kinesin)",
            "Storage (ferritin, casein)"
        ],
        denaturation: {
            definition:   "Loss of 3D structure (secondary, tertiary, quaternary) — primary structure intact",
            causes:       "High temperature, extreme pH, heavy metals, organic solvents, detergents",
            consequence:  "Loss of biological function",
            reversibility: "Usually irreversible (e.g. cooked egg white); occasionally reversible under mild conditions"
        }
    },

    nucleicAcids: {
        nucleotideStructure: {
            components:    "Phosphate group + pentose sugar + nitrogenous base",
            sugars:        { DNA: "Deoxyribose (missing -OH at 2' carbon)", RNA: "Ribose" },
            bases: {
                purines:    "Adenine (A), Guanine (G) — double ring",
                pyrimidines: "Cytosine (C), Thymine (T — DNA only), Uracil (U — RNA only) — single ring"
            }
        },
        DNA: {
            structure:     "Double helix; two antiparallel strands wound around each other",
            bonding:       "Strands held by hydrogen bonds: A=T (2 H-bonds), G≡C (3 H-bonds)",
            backbone:      "Alternating deoxyribose and phosphate groups; phosphodiester bonds",
            antiparallel:  "One strand runs 5'→3'; complementary strand runs 3'→5'",
            function:      "Long-term storage of genetic information"
        },
        RNA: {
            types: {
                mRNA:  "Messenger RNA: carries genetic information from DNA to ribosome",
                tRNA:  "Transfer RNA: brings amino acids to ribosome; anticodon matches codon",
                rRNA:  "Ribosomal RNA: structural and catalytic component of ribosomes"
            },
            structureDifferences: "Single-stranded; ribose sugar; uracil instead of thymine; shorter than DNA"
        },
        centralDogma: "DNA → (transcription) → mRNA → (translation) → Protein",
        atpAsNucleotide: {
            structure: "Adenine + ribose + three phosphate groups",
            role:      "Universal energy currency of the cell; energy released when terminal phosphate hydrolysed"
        }
    },

    waterProperties: {
        hydrogenBonding: {
            cause:   "Oxygen is electronegative; pulls electrons from H atoms; creates partial charges (δ- on O, δ+ on H)",
            result:  "Hydrogen bonds form between water molecules and with other polar/charged molecules"
        },
        properties: {
            cohesion:          "Water-water attraction; surface tension; supports water columns in xylem",
            adhesion:          "Water-surface attraction; capillary action",
            specificHeatCapacity: "High energy needed to raise temperature; stabilises body and aquatic temperatures",
            latentHeatOfVaporisation: "Large energy needed to evaporate; effective cooling (sweating, transpiration)",
            densityAnomaly:    "Ice less dense than liquid water (H-bonds maximally extended in ice); ice floats, insulating aquatic environments",
            solventProperties: "Polar molecules and ions dissolve readily; hydrophobic molecules excluded (drives membrane formation)"
        }
    },

    topicSummary: {
        coreInsights: [
            "Four macromolecule classes — carbohydrates, lipids, proteins, nucleic acids — account for virtually all cellular dry mass and carry out all biological functions.",
            "Condensation builds polymers by releasing water; hydrolysis disassembles them by consuming water — these two reactions are the molecular transactions of metabolism.",
            "The α vs β isomerism of glucose determines whether the resulting polysaccharide is digestible (α: starch/glycogen) or structural (β: cellulose) — a single bond angle change alters macroscopic biological function.",
            "Lipids are not polymers. Their defining property is hydrophobicity, which drives phospholipid bilayer formation — the structural basis of all membranes and of cellular compartmentalisation.",
            "Protein function is a direct consequence of 3D structure, which emerges hierarchically from the amino acid sequence (primary → secondary → tertiary → quaternary), stabilised by a hierarchy of bond types from strong (disulphide) to weak but numerous (hydrophobic interactions).",
            "Nucleic acids store (DNA) and express (RNA) genetic information. Complementary base pairing via hydrogen bonds is the molecular mechanism underlying heredity, replication, transcription, and translation.",
            "Water's hydrogen bonding underlies every emergent property — cohesion, high heat capacity, solvent behaviour — that makes aqueous life possible."
        ],
        keyStructuralComparisons: {
            starchVsCellulose: {
                monomer:  "Both α-glucose (starch) vs β-glucose (cellulose)",
                bonds:    "α-1,4/α-1,6 (starch) vs β-1,4 (cellulose)",
                shape:    "Helical/branched (starch) vs straight, fibrous (cellulose)",
                function: "Energy storage (starch) vs structural support (cellulose)",
                digestibility: "Digestible by amylase (starch) vs indigestible by most animals (cellulose)"
            },
            DNAvsRNA: {
                sugar:    "Deoxyribose (DNA) vs ribose (RNA)",
                bases:    "A, T, G, C (DNA) vs A, U, G, C (RNA)",
                strands:  "Double-stranded (DNA) vs single-stranded (RNA)",
                function: "Genetic storage (DNA) vs expression (RNA)"
            },
            saturatedVsUnsaturated: {
                bonds:    "No C=C (saturated) vs one or more C=C (unsaturated)",
                shape:    "Straight chains (saturated) vs kinked chains (unsaturated)",
                state:    "Solid at room temp (saturated) vs liquid (unsaturated)",
                packing:  "Tight packing → high melting point (saturated) vs loose → low melting point (unsaturated)"
            }
        },
        bondHierarchyInProteins: {
            peptideBond:         "Covalent; holds primary structure; broken only by hydrolysis",
            disulphideBond:      "Covalent; strongest tertiary/quaternary stabiliser; between cysteine R-groups",
            ionicBond:           "Electrostatic; between oppositely charged R-groups; broken by pH change",
            hydrogenBond:        "Weak individually, strong collectively; secondary and tertiary structure",
            hydrophobicInteractions: "Not bonds per se — exclusion of nonpolar groups from water; major driver of tertiary folding"
        },
        commonMistakesToAvoid: [
            "Lipids are NOT polymers — they have no repeating monomer unit joined by a single bond type",
            "α and β glucose are NOT structural isomers — they are anomers (differ only at C1 -OH orientation)",
            "Denaturation destroys secondary/tertiary/quaternary structure — the PRIMARY structure (amino acid sequence) remains intact",
            "DNA base pairing: A with T (2 H-bonds), G with C (3 H-bonds) — not A with U (that is RNA)",
            "Condensation releases water; it does NOT require water — hydrolysis requires water",
            "Glycogen is more branched than amylopectin, not less — more branch points allow faster glucose mobilisation",
            "RNA uses uracil instead of thymine — not in addition to thymine"
        ],
        connections: [
            "Enzymes (proteins) catalyse every step of carbohydrate and lipid metabolism",
            "Nucleic acids encode the sequence of every protein — connecting DNA structure directly to protein function",
            "Phospholipid bilayer properties (fluidity) depend on the degree of fatty acid saturation",
            "ATP is itself a nucleotide — connecting nucleic acid chemistry to energy metabolism",
            "Denaturation of proteins by fever is a direct consequence of disrupting the hydrogen bonds and hydrophobic interactions that maintain 3D structure",
            "Cholesterol (a lipid) regulates membrane fluidity — linking lipid chemistry to membrane biology"
        ],
        examReadinessChecklist: [
            "Can you draw and label the structure of a phospholipid and explain bilayer formation?",
            "Can you compare starch, glycogen, and cellulose by monomer, bond type, branching, and function?",
            "Can you name the four levels of protein structure and state the bonds stabilising each?",
            "Can you draw a nucleotide and identify its three components?",
            "Can you write out complementary base pairing rules for both DNA and RNA?",
            "Can you explain why denaturation does not destroy primary structure?",
            "Can you distinguish condensation from hydrolysis and give one enzyme example of each?"
        ]
    }
},


cellStructure: {
    title: "Cell Structure and Function: The Fundamental Unit of Life",

    databaseLinks: {
        misconceptions: [
            'cellBasics',
            'membraneStructure',
            'organelleFunction',
            'prokaryoteVsEukaryote',
            'cellTransport'
        ],
        contextualScenarios: [
            'cellBasics',
            'organelleFunction',
            'membraneStructure',
            'prokaryoteVsEukaryote'
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
            'cellBasics',
            'organelleFunction',
            'membraneStructure',
            'prokaryoteVsEukaryote'
        ]
    },

    conceptLinks: {
        "Cells are the basic structural and functional units of life": {
            misconceptions:      ['cellBasics'],
            scenarios:           ['cellBasics'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['cellBasics']
        },
        "Prokaryotic and eukaryotic cells differ in structural complexity": {
            misconceptions:      ['prokaryoteVsEukaryote'],
            scenarios:           ['prokaryoteVsEukaryote'],
            studyTips:           ['comparisonTables', 'specimens'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['prokaryoteVsEukaryote']
        },
        "Membrane-bound organelles compartmentalise eukaryotic cell functions": {
            misconceptions:      ['organelleFunction'],
            scenarios:           ['organelleFunction'],
            studyTips:           ['diagrams', 'comparisonTables', 'flashcards'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['organelleFunction']
        },
        "The fluid mosaic model describes membrane structure and function": {
            misconceptions:      ['membraneStructure'],
            scenarios:           ['membraneStructure'],
            studyTips:           ['diagrams', 'specimens', 'mnemonics'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['membraneStructure']
        },
        "Cell size is constrained by the surface area to volume ratio": {
            misconceptions:      ['cellBasics'],
            scenarios:           ['cellBasics'],
            studyTips:           ['comparisonTables', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['cellBasics']
        },
        "Transport across membranes maintains cellular homeostasis": {
            misconceptions:      ['cellTransport'],
            scenarios:           ['membraneStructure'],
            studyTips:           ['diagrams', 'flashcards', 'dissectionAndExperiment'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['membraneStructure']
        }
    },

    topicIntroduction: {
        overview: "The cell is the fundamental unit of life — every living organism is composed of one or more cells, and every life process occurs within or between cells. In this lesson, we explore the structural organisation of prokaryotic and eukaryotic cells, the function of membrane-bound organelles, the fluid mosaic model of membrane architecture, and the constraints that govern cell size. Understanding cell structure is not merely descriptive biology — it is the foundation for understanding how drugs enter cells, how pathogens evade immune systems, and how genetic information flows from nucleus to ribosome to protein.",
        whyItMatters: "Every disease process begins at the cellular level. Cancer is a failure of cell cycle control. Bacterial infections exploit differences between prokaryotic and eukaryotic cells. Cystic fibrosis results from a defective membrane transport protein. HIV hijacks the endomembrane system. Understanding cell structure allows us to understand, diagnose, and treat disease at its molecular origin.",
        bigPicture: "Cells are not random collections of molecules — they are exquisitely organised systems where structure and function are inseparable. Compartmentalisation allows incompatible reactions to occur simultaneously in the same cell. The plasma membrane is not a passive barrier but a dynamic, selective interface. The endomembrane system forms an integrated secretory and degradative network. Prokaryotes achieve complexity through molecular economy; eukaryotes achieve it through compartmentalisation.",
        priorKnowledge: [
            "Basic chemistry: atoms, molecules, covalent and ionic bonds",
            "Biomolecule classes: lipids, proteins, carbohydrates, nucleic acids",
            "Diffusion and osmosis: concentration gradients and water potential",
            "Basic genetics: DNA as genetic material, gene expression concept",
            "Scale and measurement: nanometres, micrometres, light vs electron microscopy"
        ],
        topicRoadmap: [
            "Cell theory: principles and historical development",
            "Prokaryotic cell structure: features and functional significance",
            "Eukaryotic cell structure: animal and plant cell organelles",
            "Fluid mosaic model: membrane components and their roles",
            "Transport across membranes: passive, active, and vesicular",
            "Surface area to volume ratio: constraints on cell size",
            "Endosymbiotic theory: origin of mitochondria and chloroplasts",
            "Cell fractionation and microscopy: how we study cells"
        ]
    },

    concepts: [
        "Cells are the basic structural and functional units of life",
        "Prokaryotic and eukaryotic cells differ in structural complexity",
        "Membrane-bound organelles compartmentalise eukaryotic cell functions",
        "The fluid mosaic model describes membrane structure and function",
        "Cell size is constrained by the surface area to volume ratio",
        "Transport across membranes maintains cellular homeostasis"
    ],

    theory: "All living organisms are composed of cells, which are the smallest units capable of carrying out all fundamental life processes. Cells are enclosed by a selectively permeable plasma membrane and contain the genetic information needed for their own reproduction.",

    keyDefinitions: {
        "Cell": "The smallest structural and functional unit of a living organism capable of independent existence",
        "Plasma Membrane": "Phospholipid bilayer with embedded proteins that encloses the cell and regulates transport",
        "Cytoplasm": "Aqueous contents of the cell excluding the nucleus; contains organelles and cytosol",
        "Cytosol": "Fluid component of cytoplasm in which organelles are suspended",
        "Organelle": "Membrane-bound or non-membrane-bound subcellular structure with a specific function",
        "Nucleus": "Membrane-bound organelle containing the cell's DNA and controlling gene expression",
        "Nucleolus": "Dense region within the nucleus where ribosomal RNA is synthesised",
        "Ribosome": "Non-membrane-bound organelle that synthesises proteins; found free or on rough ER",
        "Endoplasmic Reticulum (ER)": "Network of membranes continuous with the nuclear envelope; rough ER has ribosomes, smooth ER does not",
        "Golgi Apparatus": "Stack of flattened membrane sacs that modifies, sorts, and packages proteins and lipids for secretion or delivery",
        "Mitochondrion": "Double-membrane organelle that produces ATP by oxidative phosphorylation; has its own DNA",
        "Chloroplast": "Double-membrane organelle in plant cells that conducts photosynthesis; has its own DNA",
        "Lysosome": "Membrane-bound vesicle containing hydrolytic enzymes for intracellular digestion",
        "Vacuole": "Membrane-bound storage organelle; large central vacuole in plant cells maintains turgor",
        "Peroxisome": "Organelle containing oxidative enzymes; involved in fatty acid oxidation and H₂O₂ detoxification",
        "Cytoskeleton": "Network of protein fibres (microfilaments, intermediate filaments, microtubules) providing structural support and enabling movement",
        "Cell Wall": "Rigid outer layer outside the plasma membrane in plants (cellulose), fungi (chitin), and bacteria (peptidoglycan)",
        "Prokaryote": "Organism whose cells lack a membrane-bound nucleus and membrane-bound organelles (bacteria and archaea)",
        "Eukaryote": "Organism whose cells contain a membrane-bound nucleus and membrane-bound organelles",
        "Fluid Mosaic Model": "Singer and Nicolson's (1972) model describing the membrane as a fluid phospholipid bilayer with proteins embedded like tiles in a mosaic"
    },

    cellTheory: {
        principles: [
            "All living organisms are composed of one or more cells",
            "The cell is the basic unit of structure and function in organisms",
            "All cells arise from pre-existing cells (cell division)"
        ],
        history: {
            Hooke_1665: "Observed cork cells using a compound microscope; coined the term 'cell'",
            Leeuwenhoek_1670s: "First observed living microorganisms ('animalcules') in pond water",
            Schleiden_1838: "Proposed that all plants are composed of cells",
            Schwann_1839: "Proposed that all animals are composed of cells",
            Virchow_1855: "Added 'omnis cellula e cellula' — all cells from pre-existing cells"
        }
    },

    prokaryoticCell: {
        characteristics: [
            "No membrane-bound nucleus — DNA in nucleoid region",
            "No membrane-bound organelles",
            "Smaller (1–10 μm) than eukaryotic cells",
            "Single circular chromosome (usually)",
            "Ribosomes present (70S, smaller than eukaryotic 80S)",
            "Cell wall present (peptidoglycan in bacteria)",
            "May have: capsule, pili, flagella, plasmids"
        ],
        structures: {
            nucleoid: "Region (not membrane-bound) where circular chromosomal DNA is located",
            plasmid: "Small circular DNA separate from the chromosome; carries accessory genes",
            capsule: "Outer polysaccharide layer; protects from phagocytosis and desiccation",
            pili: "Protein filaments on surface; involved in attachment and conjugation",
            flagella: "Rotating protein appendages for motility; powered by proton gradient",
            mesosomes: "Infoldings of the plasma membrane; role debated (possibly artefact of fixation)"
        },
        examples: "Escherichia coli, Staphylococcus aureus, Mycobacterium tuberculosis"
    },

    eukaryoticCell: {
        sharedFeatures: [
            "Membrane-bound nucleus with nuclear envelope and nuclear pores",
            "Membrane-bound organelles",
            "Larger (10–100 μm) than prokaryotic cells",
            "Multiple linear chromosomes",
            "80S ribosomes (60S + 40S subunits)",
            "Cytoskeleton (microfilaments, microtubules, intermediate filaments)",
            "Endomembrane system (ER, Golgi, vesicles, lysosomes)"
        ],
        animalCellOnly: [
            "Centrioles (involved in cell division)",
            "Lysosomes (prominent)",
            "No cell wall",
            "No large central vacuole",
            "No chloroplasts"
        ],
        plantCellOnly: [
            "Cell wall (cellulose)",
            "Chloroplasts",
            "Large central vacuole (with tonoplast membrane)",
            "Plasmodesmata (cytoplasmic connections through cell walls)",
            "No centrioles (in most plants)"
        ]
    },

    organelleFunctions: {
        nucleus: {
            structure: "Double membrane (nuclear envelope) with nuclear pores; contains chromatin and nucleolus",
            function: "Stores and protects DNA; controls gene expression; site of DNA replication and RNA transcription",
            clinicalRelevance: "Nuclear pore mutations disrupt mRNA export; nuclear lamins link to muscular dystrophy"
        },
        roughER: {
            structure: "Membrane network studded with ribosomes; continuous with nuclear envelope",
            function: "Synthesis, folding, and initial modification of membrane and secretory proteins",
            clinicalRelevance: "ER stress (protein misfolding) triggers unfolded protein response; linked to type 2 diabetes and neurodegeneration"
        },
        smoothER: {
            structure: "Membrane network lacking ribosomes",
            function: "Lipid synthesis; detoxification (hepatocytes); Ca²⁺ storage (muscle cells)",
            clinicalRelevance: "Hepatic smooth ER expands in response to drugs and toxins; relevant to drug metabolism"
        },
        golgiApparatus: {
            structure: "Stack of flattened membrane cisternae with cis (receiving) and trans (shipping) faces",
            function: "Post-translational modification (glycosylation, phosphorylation); sorting and packaging into vesicles",
            clinicalRelevance: "Golgi dysfunction implicated in congenital disorders of glycosylation"
        },
        mitochondria: {
            structure: "Double membrane; inner membrane folded into cristae; matrix contains mitochondrial DNA and ribosomes",
            function: "Aerobic respiration (ATP synthesis); apoptosis regulation; calcium homeostasis",
            clinicalRelevance: "Mitochondrial DNA mutations cause mitochondrial myopathies; mitochondrial dysfunction in Parkinson's and Alzheimer's"
        },
        chloroplast: {
            structure: "Double membrane; thylakoid membranes stacked into grana; stroma surrounds thylakoids",
            function: "Light-dependent reactions (thylakoids); Calvin cycle/carbon fixation (stroma)",
            clinicalRelevance: "Herbicides target photosystem II; engineered chloroplasts used for pharmaceutical protein production"
        },
        lysosome: {
            structure: "Single membrane vesicle; internal pH ~4.8; contains ~60 hydrolytic enzymes",
            function: "Intracellular digestion of worn organelles (autophagy) and extracellular material (phagocytosis)",
            clinicalRelevance: "Lysosomal storage diseases (e.g. Gaucher's, Tay-Sachs) result from enzyme deficiencies causing substrate accumulation"
        },
        ribosome: {
            structure: "Two subunits (large and small); 80S in eukaryotes, 70S in prokaryotes; made of rRNA and protein",
            function: "Protein synthesis (translation)",
            clinicalRelevance: "Many antibiotics (e.g. streptomycin, tetracycline) selectively target 70S prokaryotic ribosomes"
        }
    },

    fluidMosaicModel: {
        proposed: "Singer and Nicolson (1972)",
        components: {
            phospholipidBilayer: {
                structure: "Two layers of phospholipids, hydrophilic heads facing outward (aqueous), hydrophobic tails facing inward",
                properties: "Fluid at physiological temperature; allows lateral movement of lipids and proteins",
                cholesterol: "Regulates membrane fluidity — increases fluidity at low temperatures, decreases fluidity at high temperatures"
            },
            membraneProteins: {
                integral: "Span the bilayer (transmembrane proteins); include ion channels, transporters, receptors",
                peripheral: "Attached to membrane surface; include enzymes, cytoskeletal anchors",
                functions: "Transport, cell signalling, structural support, enzymatic activity, cell-cell recognition"
            },
            glycolipidsAndGlycoproteins: {
                location: "Outer leaflet of the bilayer only",
                function: "Cell-cell recognition, immune response, blood group antigens"
            }
        },
        fluidityFactors: [
            "Temperature: higher temperature → greater fluidity",
            "Fatty acid saturation: unsaturated fatty acids → greater fluidity (kinked tails prevent packing)",
            "Cholesterol: acts as fluidity buffer — prevents both excessive rigidity and excessive fluidity",
            "Fatty acid chain length: shorter chains → greater fluidity"
        ],
        evidence: [
            "Frye and Edidin (1970) cell fusion experiment: mouse and human membrane proteins mixed within minutes after cell fusion — demonstrated lateral mobility",
            "Freeze-fracture electron microscopy: revealed proteins embedded within the bilayer, not just on its surface"
        ]
    },

    membraneTransport: {
        passiveTransport: {
            simpleDiffusion: {
                description: "Movement of small nonpolar molecules down concentration gradient through lipid bilayer",
                requires: "Concentration gradient; no energy; no protein",
                examples: "O₂, CO₂, ethanol, steroid hormones"
            },
            facilitatedDiffusion: {
                description: "Movement of polar or large molecules down concentration gradient via membrane proteins",
                requires: "Concentration gradient; no energy; channel or carrier protein",
                examples: "Glucose (GLUT transporters), ions (ion channels), water (aquaporins)"
            },
            osmosis: {
                description: "Movement of water molecules down their water potential gradient across a selectively permeable membrane",
                requires: "Water potential gradient; no energy",
                tonicity: "Hypotonic solution → cell swells (lysis in animal cells; turgor in plant cells); hypertonic → cell shrinks (crenation/plasmolysis)"
            }
        },
        activeTransport: {
            primaryActive: {
                description: "Movement of molecules against concentration gradient using ATP directly",
                requires: "ATP; transporter protein",
                examples: "Na⁺/K⁺-ATPase (3 Na⁺ out, 2 K⁺ in per ATP)"
            },
            secondaryActive: {
                description: "Uses electrochemical gradient established by primary active transport",
                requires: "Electrochemical gradient; co-transporter protein; no direct ATP",
                examples: "Glucose-Na⁺ co-transport in intestinal epithelial cells"
            }
        },
        vesicularTransport: {
            endocytosis: "Cell engulfs extracellular material by membrane invagination; phagocytosis (large particles), pinocytosis (fluid), receptor-mediated endocytosis (specific molecules)",
            exocytosis: "Vesicles fuse with plasma membrane to release contents; used by secretory cells (e.g. neurons, pancreatic cells)"
        }
    },

    surfaceAreaToVolumeRatio: {
        concept: "As cell size increases, volume increases faster than surface area (SA ∝ r², V ∝ r³), reducing the SA:V ratio",
        significance: [
            "Smaller SA:V means less membrane area per unit cytoplasm for nutrient import and waste export",
            "Large cells have insufficient membrane to supply the metabolic demands of their volume",
            "This constraint explains why cells are small and why large organisms are multicellular"
        ],
        adaptations: [
            "Microvilli: membrane folds that increase surface area without increasing volume (e.g. intestinal epithelium)",
            "Cristae: inner mitochondrial membrane folds increase surface area for ATP synthesis",
            "Flat or elongated cell shapes (e.g. red blood cells) maximise SA:V"
        ],
        calculation: "For a sphere: SA = 4πr², V = (4/3)πr³; SA:V = 3/r. As r increases, SA:V decreases."
    },

    endosymbioticTheory: {
        proposedBy: "Lynn Margulis (1967)",
        evidence: [
            "Mitochondria and chloroplasts have their own circular DNA (like prokaryotes)",
            "They replicate by binary fission (like bacteria), not by the cell cycle",
            "They have 70S ribosomes (prokaryotic size), sensitive to antibiotics that target bacteria",
            "They are double-membraned — the inner membrane resembles a bacterial plasma membrane",
            "Their inner membrane lipid composition resembles bacterial membranes more than eukaryotic ER"
        ],
        origin: "Mitochondria derived from endosymbiotic α-proteobacteria; chloroplasts from endosymbiotic cyanobacteria"
    },

    cellFractionation: {
        purpose: "Separate cell organelles to study their individual composition and function",
        steps: [
            "Homogenisation: cells disrupted in cold isotonic buffer",
            "Differential centrifugation: repeated spinning at increasing speeds",
            "Low speed (600g): nuclei and cell debris pellet",
            "Medium speed (10,000g): mitochondria, chloroplasts pellet",
            "High speed (100,000g): ribosomes, ER fragments, vesicles pellet",
            "Supernatant: cytosol"
        ],
        ultracentrifugation: "Density gradient (e.g. sucrose) used to separate organelles of similar size but different density"
    },

    microscopy: {
        lightMicroscope: {
            resolution: "~200 nm; can resolve organelles such as nucleus, mitochondria (barely), chloroplasts",
            magnification: "Up to ×1500",
            preparation: "Staining required for most specimens (haematoxylin, eosin, iodine)",
            uses: "Observing living cells; histology sections"
        },
        transmissionElectronMicroscope: {
            resolution: "~0.1–0.2 nm; reveals ultrastructure (ribosome size, membrane bilayer, cristae)",
            magnification: "Up to ×500,000",
            preparation: "Specimen must be dead, thin-sectioned, and stained with electron-dense metals",
            uses: "Internal ultrastructure"
        },
        scanningElectronMicroscope: {
            resolution: "~1–20 nm; surface detail",
            magnification: "Up to ×100,000",
            preparation: "Specimen coated in gold; produces 3D surface image",
            uses: "Surface morphology, cell surface features"
        }
    },

    applications: [
        "Drug targeting: antibiotics exploit differences between 70S (prokaryotic) and 80S (eukaryotic) ribosomes",
        "Cancer biology: tumour cells show abnormal organelle numbers, nuclear changes, and increased mitotic figures",
        "Gene therapy: viral vectors exploit endocytosis to deliver DNA to the nucleus",
        "Lysosomal enzyme replacement therapy for storage diseases (e.g. Gaucher's disease)",
        "Membrane fluidity manipulation in vaccine adjuvant design",
        "Cell fractionation used to isolate enzymes for industrial and pharmaceutical use"
    ],

    topicSummary: {
        coreInsights: [
            "Cell theory's three principles — cells as the unit of life, cells from pre-existing cells, cells as structural units — underpin all of modern biology.",
            "The fundamental distinction between prokaryotes and eukaryotes is not size but compartmentalisation: eukaryotes separate biochemical processes into membrane-bound organelles.",
            "Structure and function are inseparable in cell biology: cristae maximise mitochondrial ATP output; microvilli maximise intestinal absorption; the nuclear envelope protects DNA while nuclear pores allow selective mRNA export.",
            "The fluid mosaic model explains membrane properties: phospholipid fluidity enables membrane repair and vesicle budding; protein diversity enables selective transport, signalling, and recognition.",
            "Surface area to volume ratio explains why cells must remain small and why eukaryotic cells evolved internal membrane systems to expand functional surface area.",
            "Endosymbiotic theory — supported by the circular DNA, 70S ribosomes, binary fission, and double membranes of mitochondria and chloroplasts — is one of the strongest examples of evidence-based theory revision in biology.",
            "Cell fractionation and differential centrifugation allow organelles to be isolated and their functions verified biochemically — connecting structural observation to functional proof."
        ],
        keyRelationships: {
            "Ribosome size → antibiotic selectivity": "70S prokaryotic vs 80S eukaryotic ribosomes explain why streptomycin kills bacteria without harming human cells",
            "SA:V ratio → cell size limit": "SA:V = 3/r for a sphere; as r doubles, SA:V halves",
            "Cholesterol → membrane fluidity": "Cholesterol acts as a fluidity buffer — inserts between phospholipids to prevent extremes of rigidity or fluidity",
            "Rough ER → Golgi → vesicle → membrane/secretion": "The secretory pathway routes proteins from ribosome to final destination"
        },
        commonMistakesToAvoid: [
            "Prokaryotes do NOT have any membrane-bound organelles — not even mitochondria-like structures",
            "The cell wall is OUTSIDE the plasma membrane — it is not the same structure as the membrane",
            "Ribosomes are NOT membrane-bound organelles — they are non-membrane-bound ribonucleoprotein complexes",
            "The nuclear envelope is DOUBLE-membraned — each membrane is a lipid bilayer, giving four lipid layers total",
            "Osmosis is the movement of WATER, not solutes — students frequently reverse the direction of movement",
            "Plant cells do NOT have centrioles in most species — do not include them in plant cell diagrams",
            "Mitochondria and chloroplasts have TWO membranes — not one; the inner membrane is the functionally specialised one"
        ],
        connections: [
            "Metabolism: mitochondria and chloroplasts connect cell structure to respiration and photosynthesis topics",
            "Genetics: nucleus houses DNA; nuclear pores export mRNA; ribosomes translate it — the entire central dogma occurs within defined cell compartments",
            "Pharmacology: drug delivery, antibiotic selectivity, and membrane permeability all depend on cell structure knowledge",
            "Evolution: endosymbiosis connects cell biology to evolutionary theory; prokaryote-eukaryote transition is a major evolutionary step",
            "Disease: virtually every category of disease — infectious, genetic, metabolic, oncological — manifests as disruption of normal cell structure or function"
        ],
        examReadinessChecklist: [
            "Can you draw and fully label a prokaryotic cell and a eukaryotic animal and plant cell from memory?",
            "Can you construct a comparison table of prokaryote vs eukaryote with at least eight structural differences?",
            "Can you explain why the SA:V ratio limits cell size with a calculation for a spherical cell?",
            "Can you describe the secretory pathway from ribosome synthesis to exocytosis?",
            "Can you explain the fluid mosaic model and identify what each component (phospholipid, cholesterol, integral protein, glycoprotein) contributes to membrane function?",
            "Can you state four pieces of evidence for endosymbiotic theory and explain what each piece demonstrates?"
        ]
    }
},



        bioenergetics: {
            title: "Bioenergetics: Energy Flow in Living Systems",

            databaseLinks: {
                misconceptions: [
                    'bioenergeticsBasics',
                    'glycolysis',
                    'citricAcidCycle',
                    'oxidativePhosphorylation',
                    'photosynthesis',
                    'atp'
                ],
                contextualScenarios: [
                    'bioenergeticsBasics',
                    'glycolysis',
                    'oxidativePhosphorylation',
                    'photosynthesis'
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
                    'bioenergeticsBasics',
                    'glycolysis',
                    'oxidativePhosphorylation',
                    'photosynthesis'
                ]
            },

            conceptLinks: {
                "ATP is the universal energy currency of the cell": {
                    misconceptions:      ['atp', 'bioenergeticsBasics'],
                    scenarios:           ['bioenergeticsBasics'],
                    studyTips:           ['diagrams', 'specimens'],
                    assessmentRubrics:   ['remember', 'understand'],
                    assessmentQuestions: ['bioenergeticsBasics']
                },
                "Glycolysis converts glucose to pyruvate with net ATP and NADH gain": {
                    misconceptions:      ['glycolysis'],
                    scenarios:           ['glycolysis'],
                    studyTips:           ['diagrams', 'comparisonTables', 'flashcards'],
                    assessmentRubrics:   ['remember', 'understand', 'apply'],
                    assessmentQuestions: ['glycolysis']
                },
                "The citric acid cycle oxidises acetyl-CoA and generates electron carriers": {
                    misconceptions:      ['citricAcidCycle'],
                    scenarios:           ['glycolysis'],
                    studyTips:           ['diagrams', 'comparisonTables', 'mnemonics'],
                    assessmentRubrics:   ['remember', 'understand', 'apply'],
                    assessmentQuestions: ['glycolysis']
                },
                "Oxidative phosphorylation uses the proton gradient to synthesise ATP": {
                    misconceptions:      ['oxidativePhosphorylation'],
                    scenarios:           ['oxidativePhosphorylation'],
                    studyTips:           ['diagrams', 'specimens', 'practiceRoutines'],
                    assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
                    assessmentQuestions: ['oxidativePhosphorylation']
                },
                "Photosynthesis converts light energy into chemical energy": {
                    misconceptions:      ['photosynthesis'],
                    scenarios:           ['photosynthesis'],
                    studyTips:           ['diagrams', 'comparisonTables', 'specimens'],
                    assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
                    assessmentQuestions: ['photosynthesis']
                },
                "Free energy change (ΔG) determines whether reactions are spontaneous": {
                    misconceptions:      ['bioenergeticsBasics'],
                    scenarios:           ['bioenergeticsBasics'],
                    studyTips:           ['flashcards', 'comparisonTables', 'practiceRoutines'],
                    assessmentRubrics:   ['understand', 'apply', 'analyze'],
                    assessmentQuestions: ['bioenergeticsBasics']
                }
            },

            topicIntroduction: {
                overview: "Bioenergetics is the study of how living systems acquire, transform, store, and use energy. Every cellular process — from muscle contraction to DNA replication to ion transport — is powered by energy extracted from chemical bonds and channelled through a universal molecular currency: ATP. This lesson traces the flow of energy from sunlight and food molecules through the major metabolic pathways to the production of ATP, and examines the thermodynamic principles that govern why these reactions proceed as they do.",
                whyItMatters: "Understanding bioenergetics explains how exercise depletes ATP, why cyanide is lethal within minutes, how uncoupling agents cause weight loss, why mitochondrial diseases affect high-energy tissues preferentially, and how photosynthesis underpins virtually all food webs on Earth. Every organism alive today runs on the same core energy-transforming machinery — mastering this topic is mastering the engine of life.",
                bigPicture: "Energy flows in one direction: from high-energy inputs (sunlight, glucose) through a series of coupled reactions, releasing free energy that is captured in ATP, then dissipated as heat when ATP is used. The second law of thermodynamics guarantees that no energy conversion is perfectly efficient — cells are thermodynamic machines operating at roughly 40% efficiency, with the remainder lost as heat that maintains body temperature.",
                priorKnowledge: [
                    "Cell structure: mitochondria and chloroplasts — their membranes and compartments",
                    "Basic chemistry: bonds, oxidation-reduction, electronegativity",
                    "Thermodynamics: enthalpy, entropy, Gibbs free energy, activation energy",
                    "Protein structure: how membrane proteins span bilayers",
                    "Enzyme function: catalysis, active sites, cofactors (especially NAD⁺, FAD)"
                ],
                topicRoadmap: [
                    "Thermodynamic principles: ΔG, ΔH, ΔS, and what makes reactions spontaneous",
                    "ATP structure and the logic of high-energy phosphate bonds",
                    "Glycolysis: ten steps from glucose to pyruvate — investment and payoff phases",
                    "Pyruvate oxidation and the link reaction to the citric acid cycle",
                    "The citric acid cycle: eight steps, outputs, and regulatory logic",
                    "The electron transport chain: four complexes, proton pumping, and the chemiosmotic gradient",
                    "ATP synthase and oxidative phosphorylation: chemiosmosis and the binding change mechanism",
                    "Light-dependent reactions of photosynthesis: photosystems I and II, the Z-scheme",
                    "The Calvin cycle: carbon fixation, reduction, and regeneration of RuBP",
                    "Integration: comparing aerobic respiration and photosynthesis as coupled processes"
                ]
            },

            concepts: [
                "ATP is the universal energy currency of the cell",
                "Free energy change (ΔG) determines reaction spontaneity",
                "Glycolysis converts glucose to pyruvate with net ATP and NADH gain",
                "The citric acid cycle oxidises acetyl-CoA and generates electron carriers",
                "Oxidative phosphorylation uses the proton gradient to synthesise ATP",
                "Photosynthesis converts light energy into chemical energy",
                "Electron carriers (NAD⁺, FAD) link catabolic pathways to the electron transport chain",
                "Chemiosmosis couples proton flow to ATP synthesis via ATP synthase"
            ],

            theory: "Bioenergetics applies the laws of thermodynamics to living systems. Cells are open systems that maintain order by continuously consuming free energy, coupling exergonic reactions (ATP hydrolysis, electron transfer) to endergonic reactions (biosynthesis, active transport, mechanical work). The flow of energy through metabolism — from nutrient oxidation to ATP synthesis to cellular work — is governed by ΔG, redox potential differences, and the chemiosmotic gradient across energy-transducing membranes.",

            keyDefinitions: {
                "Bioenergetics":         "The study of energy transformations in living organisms",
                "Free Energy (G)":       "The energy available to do work at constant temperature and pressure (Gibbs free energy)",
                "ΔG":                    "Change in free energy; negative ΔG = spontaneous (exergonic); positive ΔG = non-spontaneous (endergonic)",
                "ΔG°'":                  "Standard free energy change under biochemical standard conditions (pH 7, 25°C, 1 M solutes)",
                "ATP":                   "Adenosine triphosphate — the primary short-term energy carrier; hydrolysis releases ~−30.5 kJ/mol",
                "NAD⁺/NADH":            "Nicotinamide adenine dinucleotide — electron carrier; NADH carries electrons to the ETC",
                "FAD/FADH₂":            "Flavin adenine dinucleotide — electron carrier; lower reduction potential than NAD⁺",
                "Substrate-level phosphorylation": "ATP synthesis by direct transfer of a phosphate group from a substrate to ADP",
                "Oxidative phosphorylation":       "ATP synthesis driven by the proton gradient generated by the electron transport chain",
                "Chemiosmosis":          "The coupling of proton flow down an electrochemical gradient to ATP synthesis",
                "Reduction Potential (E°')": "Tendency of a molecule to accept electrons; higher E°' = stronger oxidising agent",
                "Glycolysis":            "Ten-step cytoplasmic pathway converting glucose (6C) to two pyruvate (3C), yielding net 2 ATP and 2 NADH",
                "Citric Acid Cycle":     "Eight-step mitochondrial matrix cycle oxidising acetyl-CoA; yields 3 NADH, 1 FADH₂, 1 GTP per turn",
                "Electron Transport Chain (ETC)": "Series of four membrane-embedded complexes in the inner mitochondrial membrane that transfer electrons from NADH/FADH₂ to O₂, pumping protons",
                "Photosynthesis":        "Light-driven synthesis of glucose from CO₂ and H₂O in chloroplasts",
                "RuBisCO":              "Ribulose-1,5-bisphosphate carboxylase/oxygenase — the enzyme that fixes CO₂ in the Calvin cycle",
                "P/O Ratio":            "ATP molecules synthesised per oxygen atom reduced; approximately 2.5 for NADH, 1.5 for FADH₂"
            },

            thermodynamicPrinciples: {
                gibbsFreeEnergy: {
                    equation:       "ΔG = ΔH − TΔS",
                    spontaneous:    "ΔG < 0 (exergonic) — reaction releases free energy",
                    nonSpontaneous: "ΔG > 0 (endergonic) — reaction requires free energy input",
                    equilibrium:    "ΔG = 0 — no net reaction",
                    relationship:   "ΔG = ΔG°' + RT ln Q",
                    biologicalNote: "In cells, ΔG (not ΔG°') governs spontaneity — actual concentrations far from standard conditions shift ΔG considerably"
                },
                atpHydrolysis: {
                    reaction:      "ATP + H₂O → ADP + Pᵢ",
                    deltaG:        "ΔG°' = −30.5 kJ/mol (in cells, −50 to −60 kJ/mol due to low [ADP][Pᵢ])",
                    whyHighEnergy: [
                        "Electrostatic repulsion between phosphate groups in ATP",
                        "Stabilisation of products (ADP and Pᵢ) by resonance and hydration",
                        "Increased entropy on hydrolysis"
                    ],
                    energyCoupling: "Cells couple ATP hydrolysis (exergonic) to endergonic reactions by phosphoryl transfer — making the combined ΔG negative"
                },
                reductionPotential: {
                    concept:        "Molecules with more negative E°' donate electrons; those with more positive E°' accept electrons",
                    NAD:            "E°' = −0.32 V (strong electron donor)",
                    O2:             "E°' = +0.82 V (strong electron acceptor)",
                    deltaG_formula: "ΔG°' = −nFΔE°' (n = electrons transferred; F = Faraday constant 96,485 C/mol)",
                    ETC_logic:      "Electrons flow from NADH (most negative E°') through ETC complexes to O₂ (most positive E°') — the free energy released drives proton pumping"
                }
            },

            atpStructure: {
                components: ["Adenine base", "Ribose sugar", "Three phosphate groups (α, β, γ)"],
                highEnergyBonds: "The β-γ and α-β phosphoanhydride bonds are hydrolysed to release energy",
                turnover:        "A cell's entire ATP pool is recycled approximately 500–750 times per day",
                roles:           ["Chemical work: biosynthesis", "Mechanical work: muscle contraction", "Transport work: ion pumps", "Signal transduction: phosphorylation cascades"]
            },

            glycolysis: {
                location:    "Cytoplasm (cytosol)",
                overview:    "Ten enzyme-catalysed steps converting one glucose (6C) to two pyruvate (3C)",
                phases: {
                    investment: {
                        steps:   "Steps 1–5",
                        cost:    "2 ATP consumed",
                        keySteps: [
                            "Step 1: Hexokinase phosphorylates glucose → glucose-6-phosphate (traps glucose in cell)",
                            "Step 3: Phosphofructokinase-1 (PFK-1) phosphorylates F6P → F1,6-BP (key regulatory step)",
                            "Step 4: Aldolase cleaves F1,6-BP into two 3C triose phosphates"
                        ]
                    },
                    payoff: {
                        steps:   "Steps 6–10",
                        yield:   "4 ATP produced (net 2), 2 NADH produced",
                        keySteps: [
                            "Step 6: Glyceraldehyde-3-phosphate dehydrogenase — substrate-level phosphorylation, NADH produced",
                            "Step 7: Phosphoglycerate kinase — first ATP-generating step",
                            "Step 10: Pyruvate kinase — second ATP-generating step"
                        ]
                    }
                },
                netYield:    "2 pyruvate, net 2 ATP, 2 NADH, 2 H₂O",
                regulation: {
                    hexokinase:     "Inhibited by glucose-6-phosphate (product inhibition)",
                    PFK1:           "Key rate-limiting enzyme; inhibited by ATP and citrate; activated by AMP and fructose-2,6-bisphosphate",
                    pyruvateKinase: "Inhibited by ATP and alanine; activated by fructose-1,6-bisphosphate"
                },
                anaerobicFate: {
                    animals:  "Pyruvate → lactate (by lactate dehydrogenase) — regenerates NAD⁺ for continued glycolysis",
                    yeast:    "Pyruvate → ethanol + CO₂ (by pyruvate decarboxylase and alcohol dehydrogenase)",
                    purpose:  "Anaerobic fermentation regenerates NAD⁺ without using the ETC — allows glycolysis to continue"
                }
            },

            pyruvateOxidation: {
                location:    "Mitochondrial matrix",
                enzyme:      "Pyruvate dehydrogenase complex (PDC) — a multienzyme complex",
                reaction:    "Pyruvate + CoA + NAD⁺ → Acetyl-CoA + CO₂ + NADH",
                perGlucose:  "2 acetyl-CoA, 2 CO₂, 2 NADH produced (two pyruvates from one glucose)",
                regulation: {
                    inhibitors:  ["Acetyl-CoA (product inhibition)", "NADH (product inhibition)", "ATP (energy sufficiency signal)"],
                    activators:  ["CoA", "NAD⁺", "AMP (energy demand signal)"],
                    covalent:    "PDC is inactivated by phosphorylation (PDC kinase) and reactivated by dephosphorylation (PDC phosphatase)"
                }
            },

            citricAcidCycle: {
                location:    "Mitochondrial matrix",
                overview:    "Eight-step cyclic pathway oxidising acetyl-CoA; each turn regenerates oxaloacetate",
                input:       "1 acetyl-CoA (2C) + 1 oxaloacetate (4C)",
                output:      "2 CO₂, 3 NADH, 1 FADH₂, 1 GTP (per turn)",
                perGlucose:  "4 CO₂, 6 NADH, 2 FADH₂, 2 GTP",
                keySteps: [
                    "Step 1: Citrate synthase — acetyl-CoA + oxaloacetate → citrate (6C); irreversible, regulated",
                    "Step 3: Isocitrate dehydrogenase — isocitrate → α-ketoglutarate; first CO₂ release, first NADH",
                    "Step 4: α-Ketoglutarate dehydrogenase complex — second CO₂ release, second NADH; structurally similar to PDC",
                    "Step 6: Succinyl-CoA synthetase — substrate-level phosphorylation → GTP",
                    "Step 7: Succinate dehydrogenase — FADH₂ produced; also Complex II of ETC (embedded in inner mitochondrial membrane)",
                    "Step 8: Malate dehydrogenase — regenerates oxaloacetate; third NADH"
                ],
                regulation: {
                    citrateSynthase:             "Inhibited by ATP, NADH, and citrate (product); activated by ADP",
                    isocitrateDehydrogenase:      "Inhibited by ATP and NADH; activated by ADP and Ca²⁺",
                    alphaKetoglutarateDehydrogenase: "Inhibited by NADH, succinyl-CoA; activated by Ca²⁺"
                },
                amphipathicRole: "The TCA cycle is amphibolic — functions in both catabolism (oxidising fuels) and anabolism (supplying biosynthetic precursors such as α-ketoglutarate for amino acid synthesis)"
            },

            electronTransportChain: {
                location:    "Inner mitochondrial membrane",
                overview:    "Four protein complexes and two mobile carriers (ubiquinone/CoQ and cytochrome c) transfer electrons from NADH and FADH₂ to O₂, pumping protons across the membrane",
                complexes: {
                    complexI:   "NADH-ubiquinone oxidoreductase — oxidises NADH, pumps 4H⁺ per NADH",
                    complexII:  "Succinate-ubiquinone oxidoreductase (succinate dehydrogenase) — oxidises FADH₂; does NOT pump protons",
                    complexIII: "Ubiquinol-cytochrome c oxidoreductase — Q cycle pumps 4H⁺ per 2 electrons",
                    complexIV:  "Cytochrome c oxidase — reduces O₂ to H₂O, pumps 2H⁺ per 2 electrons"
                },
                protonPumping: {
                    perNADH:  "~10 H⁺ pumped across inner mitochondrial membrane",
                    perFADH2: "~6 H⁺ pumped (bypasses Complex I)"
                },
                terminalElectronAcceptor: "O₂ — reduced to H₂O at Complex IV; absence of O₂ halts the entire chain",
                inhibitors: {
                    "Rotenone":   "Complex I inhibitor — blocks NADH oxidation",
                    "Antimycin A":"Complex III inhibitor",
                    "Cyanide":    "Complex IV inhibitor — binds Fe³⁺ of cytochrome a₃, blocks O₂ reduction",
                    "Carbon monoxide": "Complex IV inhibitor — binds Fe²⁺ form of cytochrome a₃"
                }
            },

            oxidativePhosphorylation: {
                mechanism:   "ATP synthase (Complex V) uses the proton-motive force (PMF) to drive ATP synthesis",
                atpSynthase: {
                    structure:     "Two domains: F₀ (membrane-embedded, proton channel) and F₁ (catalytic head, matrix-facing)",
                    mechanism:     "Binding change mechanism: proton flow rotates the γ-subunit; rotation causes conformational changes in three β-subunits cycling through Open (O), Loose (L), and Tight (T) states — T state releases newly synthesised ATP",
                    protonsPerATP: "~4 H⁺ per ATP synthesised"
                },
                protonMotiveForce: {
                    components: ["Chemical gradient (ΔpH across inner membrane)", "Electrical gradient (Δψ — membrane potential, matrix negative)"],
                    equation:   "PMF = Δψ − (2.303 RT/F) × ΔpH"
                },
                uncouplers: {
                    mechanism:   "Carry protons across the inner membrane bypassing ATP synthase — dissipate the gradient as heat",
                    examples:    ["DNP (2,4-dinitrophenol)", "FCCP (carbonyl cyanide trifluoromethoxyphenylhydrazone)", "Thermogenin (UCP1) — natural uncoupler in brown adipose tissue"],
                    effect:      "O₂ consumption continues (ETC still runs) but ATP synthesis stops; energy is released as heat"
                },
                atpYield: {
                    NADH:         "~2.5 ATP per NADH (10 H⁺ pumped ÷ 4 H⁺ per ATP)",
                    FADH2:        "~1.5 ATP per FADH₂ (6 H⁺ pumped ÷ 4 H⁺ per ATP)",
                    perGlucose:   "~30–32 ATP total (modern chemiosmotic accounting; textbook values of 36–38 are outdated)"
                },
                substrateLevelVsOxidative: {
                    substrateLevel: "4 ATP (2 from glycolysis + 2 from TCA GTP)",
                    oxidative:      "~26–28 ATP (from 10 NADH and 2 FADH₂)"
                }
            },

            photosynthesis: {
                location:    "Chloroplasts — thylakoid membrane (light reactions) and stroma (Calvin cycle)",
                overview:    "Two-stage process: light-dependent reactions capture energy; the Calvin cycle uses that energy to fix CO₂ into glucose",
                overallEquation: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",
                lightDependentReactions: {
                    location:    "Thylakoid membrane",
                    photosystemII: {
                        function:   "Absorbs light (P680); oxidises H₂O → O₂ + 4H⁺ + 4e⁻ (water splitting / photolysis)",
                        significance: "Primary source of O₂ in Earth's atmosphere; electrons enter the Z-scheme here"
                    },
                    electronTransport: {
                        flow:       "PSII → plastoquinone (PQ) → cytochrome b₆f complex → plastocyanin (PC) → PSI",
                        protonPumping: "Cytochrome b₆f complex pumps H⁺ into thylakoid lumen — builds proton gradient",
                        chemiosmosis: "H⁺ flows back through ATP synthase (CF₀-CF₁) → photophosphorylation"
                    },
                    photosystemI: {
                        function:   "Absorbs light (P700); re-energises electrons; reduces NADP⁺ to NADPH via ferredoxin and NADP⁺ reductase"
                    },
                    outputs:     "ATP, NADPH, O₂"
                },
                calvinCycle: {
                    location:    "Chloroplast stroma",
                    phases: {
                        carbonFixation: {
                            step:     "RuBisCO fixes CO₂ onto RuBP (5C) → 2 × 3-phosphoglycerate (3-PGA, 3C)",
                            perTurn:  "1 CO₂ fixed per turn; 3 turns to fix 3 CO₂ and net 1 G3P"
                        },
                        reduction: {
                            step:     "3-PGA reduced to glyceraldehyde-3-phosphate (G3P) using ATP and NADPH",
                            cost:     "3 ATP + 2 NADPH per CO₂ fixed"
                        },
                        regeneration: {
                            step:     "5 of every 6 G3P used to regenerate RuBP; 1 G3P exits to glucose synthesis",
                            cost:     "3 ATP per 3 CO₂ fixed for RuBP regeneration"
                        }
                    },
                    outputs:     "G3P (used to synthesise glucose, starch, sucrose, amino acids, fatty acids)"
                },
                comparison: {
                    photosynthesisVsRespiration: {
                        photosynthesis:  "Stores energy in glucose; uses CO₂ and H₂O; produces O₂; occurs in chloroplasts",
                        respiration:     "Releases energy from glucose; uses O₂; produces CO₂ and H₂O; occurs in mitochondria (and cytoplasm)",
                        coupling:        "These two processes are the global-scale reciprocal reactions that cycle carbon and oxygen on Earth"
                    }
                }
            },

            metabolicIntegration: {
                energyCharge:    "AMP/ADP/ATP ratio — when ATP is high, catabolic pathways are inhibited; when AMP is high, they are activated",
                keyRegulatory:   "PFK-1 (glycolysis), isocitrate dehydrogenase (TCA), pyruvate dehydrogenase — all respond to energy charge",
                crossPathway:    "Intermediates of the TCA cycle feed amino acid biosynthesis, haem synthesis, and gluconeogenesis — the TCA cycle is amphibolic"
            },

            applications: [
                "Exercise physiology: aerobic vs anaerobic metabolism, lactate threshold",
                "Mitochondrial diseases: disorders affecting ETC complexes",
                "Pharmacology: metformin inhibits Complex I; statins affect isoprenoid pathway downstream of acetyl-CoA",
                "Uncoupler pharmacology: DNP historically used for weight loss (toxic); UCP1 as therapeutic target in obesity",
                "Agriculture: maximising photosynthetic efficiency in crops; C4 vs C3 pathways",
                "Climate science: photosynthesis as global carbon sink; fossil fuels as ancient stored photosynthetic energy",
                "Anaerobic fermentation: industrial ethanol production, lactic acid fermentation in food science"
            ],

            topicSummary: {
                coreInsights: [
                    "All cellular work is ultimately powered by ATP hydrolysis — the ~−30.5 kJ/mol (in vitro) or ~−50 kJ/mol (in vivo) released drives otherwise unfavourable reactions through energy coupling.",
                    "Glycolysis is ancient, universal, and oxygen-independent — it provides a rapid but inefficient 2 ATP per glucose, making it essential during oxygen debt.",
                    "The TCA cycle does not directly produce large amounts of ATP — its primary function is to fully oxidise acetyl-CoA and load electron carriers (NADH, FADH₂) for the ETC.",
                    "The ETC is the site of the vast majority of ATP production — approximately 26–28 of the ~30–32 ATP per glucose derive from chemiosmosis, not substrate-level phosphorylation.",
                    "The proton-motive force, not electron transfer itself, drives ATP synthase — cyanide kills not by blocking electron transfer directly but by stopping the proton gradient that feeds ATP synthase.",
                    "Photosynthesis and cellular respiration are thermodynamically reciprocal — respiration is essentially photosynthesis run in reverse at the level of the overall equation.",
                    "Modern ATP yield values (~30–32 per glucose) differ from older textbook values (36–38) because the P/O ratio of ATP synthase (~2.5 for NADH) and the cost of the malate-aspartate shuttle are now better measured.",
                    "Uncouplers demonstrate that electron transport and ATP synthesis are mechanistically separable — the gradient is the intermediate, not a direct chemical coupling."
                ],
                keyEquations: {
                    gibbsFreeEnergy:     "ΔG = ΔH − TΔS",
                    cellularDeltaG:      "ΔG = ΔG°' + RT ln Q",
                    reductionPotential:  "ΔG°' = −nFΔE°'",
                    atpHydrolysis:       "ATP + H₂O → ADP + Pᵢ; ΔG°' = −30.5 kJ/mol",
                    glycolysisNet:       "Glucose + 2NAD⁺ + 2ADP + 2Pᵢ → 2 Pyruvate + 2NADH + 2ATP + 2H₂O",
                    tcaPerTurn:          "Acetyl-CoA + 3NAD⁺ + FAD + GDP + Pᵢ + H₂O → 2CO₂ + 3NADH + FADH₂ + GTP + CoA",
                    photosynthesisNet:   "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂"
                },
                atpYieldSummary: {
                    glycolysis:          "2 ATP (net substrate-level) + 2 NADH",
                    pyruvateOxidation:   "2 NADH (per glucose)",
                    tcaCycle:            "2 GTP + 6 NADH + 2 FADH₂ (per glucose)",
                    oxidativePhosphorylation: "~26–28 ATP (from 10 NADH × 2.5 + 2 FADH₂ × 1.5)",
                    total:               "~30–32 ATP per glucose"
                },
                commonMistakesToAvoid: [
                    "ATP yield per glucose is ~30–32, not 36–38 — older textbook values do not account for the H⁺/ATP ratio of ATP synthase and shuttle costs",
                    "The TCA cycle produces very little ATP directly — GTP from succinyl-CoA synthetase, not from the electron carriers; students often attribute most ATP to the TCA cycle itself",
                    "FADH₂ enters the ETC at Complex II, bypassing Complex I — this is why it yields ~1.5 ATP, not ~2.5 like NADH",
                    "Oxygen is not directly used in glycolysis or the TCA cycle — O₂ is the terminal electron acceptor only at Complex IV",
                    "Fermentation does not produce more ATP than glycolysis — it simply regenerates NAD⁺ to allow glycolysis to continue",
                    "The Calvin cycle uses light-generated ATP and NADPH but does not itself require light — it can proceed in the dark if ATP and NADPH are supplied",
                    "Photosynthesis produces O₂ from water, not from CO₂ — water is the electron donor, not the carbon source",
                    "RuBisCO is famously inefficient — it can react with O₂ instead of CO₂ (photorespiration), wasting energy; this is why C4 plants evolved CO₂ concentration mechanisms"
                ],
                connections: [
                    "Exercise science: aerobic respiration sustains long-duration exercise; anaerobic glycolysis fuels short explosive effort — lactate accumulation signals the shift",
                    "Medicine: metformin (type 2 diabetes treatment) inhibits mitochondrial Complex I, reducing hepatic glucose production",
                    "Mitochondrial disease: mutations in ETC subunits preferentially damage high-energy tissues — brain, heart, skeletal muscle",
                    "Evolutionary biology: the endosymbiotic origin of mitochondria and chloroplasts explains their double membranes and separate genomes",
                    "Ecology: all food energy traces back to photosynthesis — bioenergetics underlies every trophic level calculation"
                ],
                examReadinessChecklist: [
                    "Can you write the net equation for glycolysis and account for every ATP, NADH, and carbon atom?",
                    "Can you describe the TCA cycle outputs per turn and per glucose, explaining what happens to each carbon?",
                    "Can you explain the chemiosmotic theory and trace a proton from the matrix through ATP synthase?",
                    "Can you explain why cyanide, rotenone, and DNP each affect ATP synthesis differently?",
                    "Can you trace an electron from water to NADP⁺ through the light reactions of photosynthesis?",
                    "Can you compare aerobic and anaerobic metabolism in terms of ATP yield, speed, and oxygen dependence?"
                ]
            }
         },


const EndSection5 = "close"