

inflammation: {
    title: "Inflammation: The Innate Immune Response",

    databaseLinks: {
        misconceptions: [
            'inflammationBasics',
            'cellularMechanisms',
            'chemicalMediators',
            'chronicVsAcute',
            'resolutionAndRepair'
        ],
        contextualScenarios: [
            'inflammationBasics',
            'cellularMechanisms',
            'chemicalMediators',
            'chronicVsAcute'
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
            'inflammationBasics',
            'cellularMechanisms',
            'chemicalMediators',
            'chronicVsAcute'
        ]
    },

    conceptLinks: {
        "Inflammation is a protective vascular and cellular response to tissue injury or infection": {
            misconceptions:      ['inflammationBasics'],
            scenarios:           ['inflammationBasics'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['inflammationBasics']
        },
        "Cardinal signs of inflammation reflect underlying vascular and cellular events": {
            misconceptions:      ['inflammationBasics'],
            scenarios:           ['inflammationBasics'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['inflammationBasics']
        },
        "Chemical mediators coordinate the inflammatory response": {
            misconceptions:      ['chemicalMediators'],
            scenarios:           ['chemicalMediators'],
            studyTips:           ['flashcards', 'comparisonTables', 'mnemonics'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['chemicalMediators']
        },
        "Leukocyte recruitment follows a defined sequence of adhesion and migration": {
            misconceptions:      ['cellularMechanisms'],
            scenarios:           ['cellularMechanisms'],
            studyTips:           ['diagrams', 'comparisonTables', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['cellularMechanisms']
        },
        "Acute inflammation resolves or progresses to chronic inflammation": {
            misconceptions:      ['chronicVsAcute', 'resolutionAndRepair'],
            scenarios:           ['chronicVsAcute'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['chronicVsAcute']
        }
    },

    topicIntroduction: {
        overview: "Inflammation is the body's immediate, coordinated response to tissue damage or microbial invasion. Far from being simply synonymous with infection or pain, inflammation is a precisely regulated programme involving vascular changes, cellular recruitment, chemical signalling, and eventual resolution or repair. Understanding inflammation is foundational to medicine: virtually every disease, from heart disease to cancer to autoimmunity, involves inflammatory mechanisms.",
        whyItMatters: "Anti-inflammatory drugs — NSAIDs, corticosteroids, and targeted biologics — are among the most widely prescribed medicines in the world. The mechanisms of septic shock, wound healing, rheumatoid arthritis, asthma, and atherosclerosis are all rooted in inflammatory biology. A student who understands inflammation mechanistically can reason about disease pathology and drug action rather than merely memorising symptoms.",
        bigPicture: "Inflammation is not a single event but a programme: recognition of danger → vascular response → cellular recruitment → pathogen destruction or debris removal → resolution and repair. Each step is controlled by chemical mediators that act on specific receptors. When this programme is tightly regulated, it protects the host; when dysregulated, it becomes the disease itself.",
        priorKnowledge: [
            "Cell biology: cell types, receptors, signal transduction",
            "Vascular anatomy: capillaries, venules, endothelium",
            "Basic immunology: innate vs adaptive immunity, self vs non-self",
            "Protein structure: receptors, enzymes, cytokines",
            "Pharmacology basics: receptor agonists and antagonists"
        ],
        topicRoadmap: [
            "Definition and purpose of inflammation — protective vs pathological",
            "Cardinal signs: rubor, calor, tumor, dolor, functio laesa — vascular basis of each",
            "Vascular changes: vasodilation, increased permeability, exudate formation",
            "Chemical mediators: histamine, prostaglandins, leukotrienes, cytokines, complement",
            "Cellular events: leukocyte margination, rolling, adhesion, transmigration, chemotaxis",
            "Phagocytosis and pathogen destruction: oxidative burst, lysosomal enzymes",
            "Acute vs chronic inflammation: differences in cells, timescale, and outcomes",
            "Resolution and repair: anti-inflammatory mediators, tissue regeneration vs fibrosis",
            "Systemic effects: fever, acute-phase response, sepsis"
        ]
    },

    concepts: [
        "Inflammation is a protective vascular and cellular response to tissue injury or infection",
        "Cardinal signs of inflammation reflect underlying vascular and cellular events",
        "Chemical mediators coordinate the inflammatory response",
        "Leukocyte recruitment follows a defined sequence of adhesion and migration",
        "Phagocytes destroy pathogens through oxidative and non-oxidative mechanisms",
        "Acute inflammation resolves or progresses to chronic inflammation"
    ],

    theory: "Inflammation is the innate immune system's coordinated response to tissue injury or infection, involving vascular dilation, increased permeability, and leukocyte recruitment, all orchestrated by chemical mediators, with the goal of eliminating the causative agent and initiating repair.",

    keyDefinitions: {
        "Inflammation": "A protective vascular and cellular response to injury, infection, or tissue necrosis",
        "Acute Inflammation": "Rapid-onset, short-duration response dominated by vascular changes and neutrophil recruitment",
        "Chronic Inflammation": "Prolonged response (weeks–months) dominated by mononuclear cells (macrophages, lymphocytes) and tissue remodelling",
        "Exudate": "Protein-rich fluid that escapes from vessels due to increased permeability",
        "Transudate": "Protein-poor fluid that escapes due to increased hydrostatic or decreased osmotic pressure (not inflammation)",
        "Oedema": "Excess fluid in interstitial tissue or body cavities",
        "Neutrophil": "First-responding phagocyte; dominant cell of acute inflammation",
        "Macrophage": "Long-lived phagocyte; dominant cell of chronic inflammation; derived from monocyte",
        "Chemotaxis": "Directed migration of leukocytes toward a chemical gradient",
        "Opsonisation": "Coating of a pathogen by antibodies or complement to enhance phagocytosis",
        "Cytokine": "Small signalling protein that regulates immune responses (e.g. IL-1, TNF-α, IL-6)",
        "Granuloma": "Organised collection of activated macrophages (epithelioid cells); hallmark of chronic granulomatous inflammation"
    },

    cardinalSigns: {
        rubor: {
            sign: "Redness",
            mechanism: "Vasodilation increases blood flow to the area (hyperaemia)",
            mediators: ["Histamine", "Prostaglandins (PGE₂)", "Nitric oxide"]
        },
        calor: {
            sign: "Heat",
            mechanism: "Increased blood flow brings warm core blood to peripheral tissues",
            mediators: ["Same as rubor — vasodilatory mediators"]
        },
        tumor: {
            sign: "Swelling",
            mechanism: "Increased vascular permeability allows protein-rich exudate into interstitium; oedema forms",
            mediators: ["Histamine", "Bradykinin", "Leukotrienes (LTC₄, LTD₄)"]
        },
        dolor: {
            sign: "Pain",
            mechanism: "Sensitisation and direct stimulation of nociceptors by chemical mediators",
            mediators: ["Bradykinin (direct activation)", "Prostaglandins (sensitisation)", "Substance P"]
        },
        functioLaesa: {
            sign: "Loss of function",
            mechanism: "Combination of pain, swelling, and deliberate nervous system suppression of movement to protect the area",
            mediators: ["Secondary consequence of all other signs"]
        }
    },

    vascularChanges: {
        sequence: [
            "Transient vasoconstriction (seconds) — neurogenic reflex",
            "Vasodilation of arterioles and capillaries (minutes) — histamine, PGE₂, nitric oxide",
            "Increased vascular permeability — endothelial cell contraction opens intercellular gaps",
            "Slowing of blood flow (stasis) — haemoconcentration as fluid leaves vessels",
            "Leukocyte margination — white cells move to vessel periphery"
        ],
        permeabilityMechanisms: {
            endothelialContraction: "Histamine and bradykinin cause endothelial cells to contract, opening gaps; rapid and reversible",
            endothelialInjury: "Direct damage to endothelium (burns, toxins); prolonged leakage",
            leucocyteMediated: "Activated neutrophils release toxic mediators that damage endothelium",
            newVesselFormation: "Angiogenic vessels in chronic inflammation are inherently leaky"
        },
        exudateFormation: {
            driving: "Increased hydrostatic pressure + decreased osmotic pressure (protein loss) drives fluid out",
            consequence: "Oedema, fibrin deposition, isolation of injured area"
        }
    },

    chemicalMediators: {
        histamine: {
            source: "Mast cells, basophils, platelets",
            trigger: "IgE cross-linking, complement fragments C3a and C5a, physical trauma",
            effects: ["Vasodilation", "Increased vascular permeability", "Bronchoconstriction"],
            onset: "Immediate (seconds to minutes)",
            receptor: "H₁ and H₂ receptors"
        },
        prostaglandins: {
            source: "Most cell types (via COX-1 and COX-2 acting on arachidonic acid)",
            keyTypes: {
                PGE2: "Vasodilation, fever, pain sensitisation",
                PGI2: "Vasodilation, inhibits platelet aggregation",
                TXA2: "Vasoconstriction, platelet aggregation (from platelets via COX-1)"
            },
            pharmacology: "NSAIDs inhibit COX enzymes, blocking prostaglandin synthesis — mechanism of anti-inflammatory and analgesic effects"
        },
        leukotrienes: {
            source: "Leukocytes, mast cells (via 5-lipoxygenase acting on arachidonic acid)",
            keyTypes: {
                LTB4: "Potent neutrophil chemoattractant",
                LTC4_LTD4_LTE4: "Cysteinyl leukotrienes — bronchoconstriction, increased permeability"
            },
            pharmacology: "Leukotriene receptor antagonists (montelukast) used in asthma"
        },
        cytokines: {
            IL1_TNFalpha: {
                source: "Activated macrophages",
                localEffects: ["Endothelial activation (upregulate adhesion molecules)", "Increased permeability", "Fever"],
                systemicEffects: ["Fever (act on hypothalamus)", "Acute-phase protein synthesis (liver)", "Leucocytosis (bone marrow stimulation)"],
                overlap: "IL-1 and TNF-α have near-identical local effects; TNF-α is more potent systemically"
            },
            IL6: {
                source: "Macrophages, endothelium",
                effects: ["Acute-phase response — hepatic synthesis of CRP, fibrinogen, serum amyloid A", "Fever"]
            },
            IL8_CXCL8: {
                source: "Macrophages, endothelium",
                effects: ["Potent neutrophil chemokine — directs neutrophils to site of infection"]
            }
        },
        complement: {
            pathways: {
                classical: "Activated by antigen-antibody complexes",
                lectin: "Activated by mannose-binding lectin recognising microbial surfaces",
                alternative: "Spontaneous, amplified by microbial surfaces"
            },
            inflammatoryProducts: {
                C3a_C5a: "Anaphylatoxins — trigger mast cell degranulation (histamine release), chemotaxis (C5a)",
                C3b: "Opsonin — coats pathogens for phagocytosis",
                MAC: "Membrane attack complex — lyses pathogens directly"
            }
        },
        bradykinin: {
            source: "Kinin system (plasma)",
            effects: ["Vasodilation", "Increased permeability", "Smooth muscle contraction", "Pain (direct nociceptor activation)"],
            pharmacology: "ACE inhibitors prevent bradykinin breakdown → cough as side effect"
        },
        nitricOxide: {
            source: "Endothelium (eNOS), macrophages (iNOS)",
            effects: ["Vasodilation (endothelial NO)", "Antimicrobial (macrophage NO)", "Inhibits platelet aggregation"],
            note: "iNOS induction by IL-1 and TNF-α produces large amounts of NO for pathogen killing"
        }
    },

    cellularEvents: {
        leukocyteRecruitment: {
            sequence: [
                "Margination — leukocytes move from central axial flow to vessel periphery as flow slows",
                "Rolling — loose, reversible adhesion via selectins (P-selectin, E-selectin on endothelium binding PSGL-1 on leukocyte)",
                "Activation — chemokines (IL-8/CXCL8) bind leukocyte receptors, activating integrins",
                "Firm adhesion — activated integrins (LFA-1, Mac-1) bind ICAMs on endothelium; leukocyte stops rolling",
                "Transmigration (diapedesis) — leukocyte squeezes between endothelial cells through basement membrane (PECAM-1/CD31 mediates)",
                "Chemotaxis — directed migration through tissue along chemokine gradient toward the injury site"
            ],
            keyAdhesionMolecules: {
                selectins: "P-selectin (stored in Weibel-Palade bodies, rapidly expressed), E-selectin (induced by IL-1 and TNF-α)",
                integrins: "LFA-1 (CD11a/CD18), Mac-1 (CD11b/CD18) — activated by chemokines to high-affinity state",
                ICAMs: "ICAM-1 on endothelium — ligand for integrins; upregulated by IL-1 and TNF-α"
            }
        },
        phagocytosis: {
            sequence: [
                "Recognition — phagocyte receptors (Fc receptor, CR3 complement receptor, TLRs) bind pathogen directly or via opsonins",
                "Engulfment — pseudopods extend around particle, forming phagosome",
                "Phagolysosome formation — phagosome fuses with lysosome",
                "Killing — oxidative and non-oxidative mechanisms destroy pathogen",
                "Degradation and antigen presentation"
            ],
            oxidativeBurst: {
                mechanism: "NADPH oxidase generates superoxide (O₂⁻) → H₂O₂ → hypochlorous acid (HOCl via myeloperoxidase)",
                importance: "Primary microbicidal mechanism in neutrophils",
                clinicalConnection: "Chronic granulomatous disease — NADPH oxidase deficiency; patients suffer recurrent infections"
            },
            nonOxidative: {
                mechanisms: ["Defensins (membrane-disrupting peptides)", "Lysozyme (cleaves bacterial cell wall)", "Lactoferrin (sequesters iron)", "Proteases (elastase, cathepsins)"]
            }
        },
        cellTypes: {
            neutrophils: {
                timing: "First to arrive (within hours)",
                lifespan: "Short-lived (hours to days)",
                function: "Phagocytosis, oxidative burst, NET formation (neutrophil extracellular traps)",
                dominant: "Acute inflammation"
            },
            macrophages: {
                timing: "Arrive days later (from circulating monocytes)",
                lifespan: "Long-lived (months to years)",
                function: "Phagocytosis, antigen presentation, cytokine production, tissue repair",
                dominant: "Chronic inflammation; orchestrators of the entire inflammatory response"
            },
            mastCells: {
                location: "Resident in connective tissue",
                function: "First responders via preformed histamine granules; trigger initial vascular response",
                activation: "IgE-mediated, complement (C3a/C5a), physical trauma"
            },
            dendritic: {
                function: "Antigen presenting cells — bridge innate to adaptive immunity",
                location: "Tissues and lymphoid organs"
            }
        }
    },

    acuteVsChronicInflammation: {
        acute: {
            onset: "Rapid (minutes to hours)",
            duration: "Days to 2 weeks",
            dominantCell: "Neutrophil",
            vascularChange: "Pronounced — vasodilation, exudate",
            tissue: "Minimal destruction if resolves normally",
            outcomes: ["Resolution (complete restoration)", "Abscess formation", "Organisation/fibrosis", "Progression to chronic"],
            examples: ["Lobar pneumonia", "Acute appendicitis", "Bee sting reaction"]
        },
        chronic: {
            onset: "Insidious or following persistent acute",
            duration: "Weeks to years",
            dominantCell: "Macrophages, lymphocytes, plasma cells",
            vascularChange: "Less pronounced; angiogenesis prominent",
            tissue: "Significant destruction and simultaneous repair; fibrosis",
            outcomes: ["Fibrosis and scarring", "Granuloma formation", "Amyloidosis (rare)", "Malignant transformation (very rare)"],
            examples: ["Rheumatoid arthritis", "Tuberculosis", "Crohn's disease", "Atherosclerosis"]
        },
        granulomatousInflammation: {
            definition: "Specific pattern of chronic inflammation with granuloma formation",
            granuloma: "Aggregate of activated macrophages (epithelioid cells), often surrounded by lymphocytes, sometimes with giant cells and central necrosis",
            causes: ["Tuberculosis (caseating granuloma)", "Sarcoidosis (non-caseating)", "Crohn's disease", "Foreign body reaction"],
            significance: "Indicates persistence of an agent that cannot be destroyed — macrophages wall it off"
        }
    },

    resolution: {
        mechanisms: [
            "Cessation of mediator production as stimulus resolves",
            "Short half-life of inflammatory mediators",
            "Lipoxins and resolvins actively terminate the response",
            "Neutrophil apoptosis and phagocytosis by macrophages (efferocytosis)",
            "Lymphatic drainage removes exudate",
            "Tissue regeneration (if stem cells and scaffold intact)"
        ],
        outcomes: {
            resolution: "Complete structural and functional restoration — requires limited damage and regenerative capacity",
            organisation: "Ingrowth of granulation tissue → fibrosis (scar) — when damage is extensive or tissue cannot regenerate",
            abscess: "Localised collection of pus (neutrophils, debris, bacteria) — walls off but may require drainage",
            chronicInflammation: "Persistence of stimulus drives ongoing recruitment and tissue destruction"
        },
        antiInflammatoryMediators: {
            lipoxins: "Produced from arachidonic acid via 15-lipoxygenase; inhibit neutrophil recruitment; pro-resolution",
            resolvins: "Derived from omega-3 fatty acids; actively promote resolution",
            IL10: "Anti-inflammatory cytokine from macrophages and T-regulatory cells",
            TGFbeta: "Inhibits lymphocyte proliferation; promotes fibrosis in repair"
        }
    },

    systemicEffects: {
        fever: {
            mechanism: "Exogenous pyrogens (LPS) → macrophages release IL-1, TNF-α, IL-6 → act on hypothalamus → increase prostaglandin E₂ → raise set-point temperature",
            benefit: "Impairs bacterial replication; enhances immune cell function",
            pharmacology: "Paracetamol and NSAIDs reduce fever by inhibiting PGE₂ synthesis"
        },
        acutePhaseResponse: {
            proteins: ["C-reactive protein (CRP) — opsonin, activates complement", "Fibrinogen — clotting, ESR elevation", "Serum amyloid A — HDL displacement, opsonin", "Hepcidin — sequesters iron from bacteria"],
            trigger: "IL-6 stimulates hepatic synthesis",
            clinicalUse: "CRP and ESR used clinically to monitor inflammation severity"
        },
        leucocytosis: {
            mechanism: "IL-1 and TNF-α stimulate bone marrow → increased leukocyte production and release",
            leftShift: "Release of immature band neutrophils — indicates severe bacterial infection"
        },
        sepsis: {
            definition: "Life-threatening organ dysfunction caused by dysregulated host response to infection",
            mechanism: "Massive systemic cytokine release (cytokine storm) → widespread endothelial activation → disseminated intravascular coagulation (DIC) → multi-organ failure",
            mediators: "TNF-α, IL-1, IL-6, nitric oxide (hypotension)",
            mortality: "25–30% even with optimal treatment"
        }
    },

    pharmacology: {
        NSAIDs: {
            mechanism: "Inhibit COX-1 and/or COX-2 → reduce prostaglandin synthesis",
            effects: "Anti-inflammatory, analgesic, antipyretic, antiplatelet (aspirin only — irreversible COX-1)",
            sideEffects: "Gastric ulceration (COX-1 inhibition reduces gastroprotective PGE₂), renal impairment, cardiovascular risk (COX-2 selective agents)",
            examples: "Ibuprofen, naproxen, aspirin, celecoxib (COX-2 selective)"
        },
        corticosteroids: {
            mechanism: "Bind glucocorticoid receptor → induce lipocortin (annexin A1) → inhibits phospholipase A₂ → blocks arachidonic acid release → suppresses ALL eicosanoids",
            effects: "Powerful anti-inflammatory; also immunosuppressive",
            sideEffects: "Cushing's syndrome, osteoporosis, immunosuppression, hyperglycaemia, adrenal suppression",
            examples: "Prednisolone, dexamethasone, hydrocortisone"
        },
        biologics: {
            antiTNF: {
                examples: "Infliximab, adalimumab, etanercept",
                use: "Rheumatoid arthritis, Crohn's disease, psoriasis",
                mechanism: "Neutralise TNF-α, blocking downstream endothelial activation and cytokine cascade"
            },
            IL1Blockade: "Anakinra (IL-1 receptor antagonist) — used in autoinflammatory diseases",
            IL6Blockade: "Tocilizumab (anti-IL-6 receptor) — used in rheumatoid arthritis and COVID-19 cytokine storm"
        },
        antihistamines: {
            H1Blockers: "Loratadine, cetirizine — block H₁ receptors, reduce vasodilation and permeability in allergic reactions",
            use: "Allergic rhinitis, urticaria, anaphylaxis (adjunct to adrenaline)"
        }
    },

    topicSummary: {
        coreInsights: [
            "Inflammation is a programme, not a single event — recognition, vascular response, cellular recruitment, killing, and resolution are sequential, regulated steps.",
            "The five cardinal signs each have a specific vascular or cellular mechanism: rubor and calor from vasodilation; tumor from exudate; dolor from bradykinin and prostaglandins; functio laesa from the sum of all others.",
            "Chemical mediators act in concert — histamine initiates, prostaglandins sustain, cytokines amplify, complement bridges innate and adaptive systems.",
            "Leukocyte recruitment is a multi-step adhesion cascade: rolling (selectins) → activation (chemokines) → firm adhesion (integrins/ICAMs) → transmigration → chemotaxis.",
            "The arachidonic acid cascade produces both prostaglandins (via COX) and leukotrienes (via 5-lipoxygenase) — drugs targeting each pathway have specific anti-inflammatory profiles.",
            "Acute inflammation dominated by neutrophils; chronic inflammation dominated by macrophages and lymphocytes — cell type is the key histological distinction.",
            "Resolution requires active anti-inflammatory mediators (lipoxins, resolvins, IL-10); failure to resolve drives chronic disease.",
            "Systemic effects — fever, acute-phase response, leucocytosis — are mediated by IL-1, TNF-α, and IL-6 released from activated macrophages."
        ],
        keyMediatorSummary: {
            histamine:      "Mast cells → immediate vasodilation and permeability",
            PGE2:           "COX pathway → sustained vasodilation, fever, pain sensitisation",
            LTB4:           "5-LOX pathway → neutrophil chemotaxis",
            LTC4D4E4:       "5-LOX pathway → bronchoconstriction, permeability",
            IL1_TNFalpha:   "Macrophages → endothelial activation, fever, acute-phase response",
            IL8_CXCL8:      "Macrophages/endothelium → neutrophil chemotaxis",
            C5a:            "Complement → mast cell degranulation, chemotaxis",
            bradykinin:     "Kinin system → pain, vasodilation, permeability",
            lipoxins:       "Pro-resolution — terminate neutrophil recruitment"
        },
        acuteChronicComparison: {
            acute:   { cells: "Neutrophils",            duration: "Days",        outcome: "Resolution or progression" },
            chronic: { cells: "Macrophages/lymphocytes", duration: "Weeks–years", outcome: "Fibrosis or granuloma" }
        },
        commonMistakesToAvoid: [
            "Inflammation is NOT synonymous with infection — sterile inflammation occurs in response to necrosis, crystals, and foreign bodies",
            "Exudate and transudate are NOT the same — exudate is protein-rich (inflammatory); transudate is protein-poor (hydrostatic/osmotic)",
            "NSAIDs do NOT block leukotriene synthesis — they only inhibit COX; leukotrienes require separate drugs (e.g. montelukast)",
            "Corticosteroids act UPSTREAM of NSAIDs — they block phospholipase A₂, preventing release of arachidonic acid for BOTH pathways",
            "Neutrophils are NOT the dominant cell of chronic inflammation — macrophages and lymphocytes are",
            "Fever is NOT directly caused by bacterial toxins — bacteria → macrophage cytokines → hypothalamic PGE₂ → fever"
        ],
        connections: [
            "Pharmacology: every major anti-inflammatory drug class targets a specific step in the mediator cascade",
            "Pathology: chronic inflammation underlies atherosclerosis, type 2 diabetes, Alzheimer's disease, and many cancers",
            "Immunology: inflammation bridges innate (immediate, non-specific) and adaptive (delayed, specific) immunity via dendritic cells and cytokines",
            "Wound healing: the resolution of inflammation is the trigger for proliferative and remodelling phases of repair",
            "Genetics: polymorphisms in IL-1, TNF-α, and COX-2 genes influence inflammatory disease susceptibility"
        ],
        examReadinessChecklist: [
            "Can you list all five cardinal signs and explain the specific mechanism of each?",
            "Can you trace the arachidonic acid pathway and identify where NSAIDs and corticosteroids act?",
            "Can you describe each step of the leukocyte adhesion cascade with the molecules involved?",
            "Can you distinguish acute from chronic inflammation by cell type, duration, and tissue outcome?",
            "Can you explain how IL-1 and TNF-α produce fever, acute-phase response, and leucocytosis?",
            "Can you describe what a granuloma is, why it forms, and give two clinical examples?"
        ]
    }
},


fermentation: {
    title: "Fermentation: Anaerobic Metabolism and Energy Production",

    databaseLinks: {
        misconceptions: [
            'fermentationBasics',
            'alcoholicFermentation',
            'lacticAcidFermentation',
            'fermentationVsRespiration',
            'yeastAndMicroorganisms'
        ],
        contextualScenarios: [
            'fermentationBasics',
            'alcoholicFermentation',
            'lacticAcidFermentation',
            'fermentationVsRespiration'
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
            'fermentationBasics',
            'alcoholicFermentation',
            'lacticAcidFermentation',
            'fermentationVsRespiration'
        ]
    },

    conceptLinks: {
        "Fermentation is anaerobic catabolism that regenerates NAD+ without oxygen": {
            misconceptions:      ['fermentationBasics', 'fermentationVsRespiration'],
            scenarios:           ['fermentationBasics'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['fermentationBasics']
        },
        "Glycolysis produces pyruvate, ATP, and NADH from glucose": {
            misconceptions:      ['fermentationBasics'],
            scenarios:           ['fermentationBasics'],
            studyTips:           ['diagrams', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['fermentationBasics']
        },
        "Alcoholic fermentation converts pyruvate to ethanol and CO2": {
            misconceptions:      ['alcoholicFermentation'],
            scenarios:           ['alcoholicFermentation'],
            studyTips:           ['diagrams', 'specimens', 'mnemonics'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['alcoholicFermentation']
        },
        "Lactic acid fermentation converts pyruvate to lactate": {
            misconceptions:      ['lacticAcidFermentation'],
            scenarios:           ['lacticAcidFermentation'],
            studyTips:           ['diagrams', 'comparisonTables', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['lacticAcidFermentation']
        },
        "Fermentation yields far less ATP than aerobic respiration": {
            misconceptions:      ['fermentationVsRespiration'],
            scenarios:           ['fermentationVsRespiration'],
            studyTips:           ['comparisonTables', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['fermentationVsRespiration']
        },
        "NAD+ regeneration is the essential function of fermentation": {
            misconceptions:      ['fermentationBasics', 'fermentationVsRespiration'],
            scenarios:           ['fermentationBasics', 'fermentationVsRespiration'],
            studyTips:           ['diagrams', 'mnemonics', 'dissectionAndExperiment'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['fermentationBasics', 'fermentationVsRespiration']
        }
    },

    topicIntroduction: {
        overview: "Fermentation is one of the oldest metabolic processes on Earth — predating the oxygenation of the atmosphere by billions of years. It is the set of anaerobic catabolic pathways that allow cells to extract energy from organic molecules without using oxygen as a terminal electron acceptor. At its biochemical core, fermentation solves a single critical problem: how to regenerate NAD+ so that glycolysis can continue producing ATP when oxygen is unavailable. In this lesson, we examine the two principal fermentation pathways — alcoholic and lactic acid — their biochemical mechanisms, their energy yields, their regulation, and their profound applications in food technology, medicine, and biotechnology.",
        whyItMatters: "Fermentation underlies bread, beer, wine, cheese, yoghurt, and vinegar — foods that have shaped human civilisation. In medicine, understanding lactic acid fermentation explains muscle fatigue, lactic acidosis, and tumour metabolism (the Warburg effect). Industrially, fermentation produces antibiotics, biofuels, insulin, and countless other products. Understanding fermentation means understanding how life persists in the absence of oxygen.",
        bigPicture: "Fermentation is not the opposite of respiration — it is a partial, oxygen-independent extension of glycolysis. Glycolysis produces ATP and reduces NAD+ to NADH. Fermentation simply re-oxidises NADH back to NAD+ using an organic molecule (pyruvate or a derivative) as the electron acceptor, allowing glycolysis to continue. The net energy yield is just 2 ATP per glucose — far less than the ~30 ATP of aerobic respiration — but it is sufficient for survival when oxygen is absent.",
        priorKnowledge: [
            "Cell biology: cytoplasm vs mitochondria as metabolic compartments",
            "Glycolysis: the ten steps from glucose to pyruvate, producing 2 ATP and 2 NADH",
            "Oxidation and reduction: electron transfer, NAD+/NADH redox couple",
            "ATP structure and function: adenosine triphosphate as energy currency",
            "Basic microbiology: yeast and bacteria as fermentation organisms",
            "Aerobic respiration overview: glycolysis → pyruvate oxidation → TCA cycle → oxidative phosphorylation"
        ],
        topicRoadmap: [
            "The metabolic context: why cells need to regenerate NAD+",
            "Glycolysis recap: pyruvate, ATP, and NADH as the starting materials for fermentation",
            "Alcoholic fermentation: pyruvate → acetaldehyde → ethanol (yeast and some bacteria)",
            "Lactic acid fermentation: pyruvate → lactate (muscle cells, lactic acid bacteria)",
            "Comparative energy yield: fermentation vs aerobic respiration",
            "Regulation of fermentation pathways: the Pasteur effect and oxygen sensing",
            "The Warburg effect: cancer cells and aerobic glycolysis",
            "Industrial and biotechnological applications of fermentation"
        ]
    },

    concepts: [
        "Fermentation is anaerobic catabolism that regenerates NAD+ without oxygen",
        "Glycolysis produces pyruvate, ATP, and NADH from glucose",
        "Alcoholic fermentation converts pyruvate to ethanol and CO2",
        "Lactic acid fermentation converts pyruvate to lactate",
        "Fermentation yields far less ATP than aerobic respiration",
        "NAD+ regeneration is the essential function of fermentation"
    ],

    theory: "Fermentation is an anaerobic metabolic process in which organic molecules serve as both electron donors and electron acceptors, allowing ATP production via substrate-level phosphorylation in glycolysis without any requirement for oxygen or an electron transport chain.",

    keyDefinitions: {
        "Fermentation":             "Anaerobic catabolism that regenerates NAD+ by transferring electrons from NADH to an organic acceptor, enabling continued ATP production via glycolysis",
        "Anaerobic":                "Occurring in the absence of molecular oxygen",
        "Glycolysis":               "The ten-step cytoplasmic pathway converting one glucose to two pyruvate molecules, yielding 2 net ATP and 2 NADH",
        "Pyruvate":                 "The three-carbon end product of glycolysis; the substrate for fermentation pathways",
        "NAD+":                     "Oxidised form of nicotinamide adenine dinucleotide; essential electron carrier that must be regenerated for glycolysis to continue",
        "NADH":                     "Reduced form of NAD+; produced in glycolysis; re-oxidised to NAD+ during fermentation",
        "Alcoholic Fermentation":   "Pathway converting pyruvate to ethanol and CO2 via acetaldehyde; found in yeast and some bacteria",
        "Lactic Acid Fermentation": "Pathway converting pyruvate directly to lactate; found in muscle cells, red blood cells, and lactic acid bacteria",
        "Pyruvate Decarboxylase":   "Enzyme catalysing pyruvate → acetaldehyde + CO2 in alcoholic fermentation (requires TPP cofactor)",
        "Alcohol Dehydrogenase":    "Enzyme catalysing acetaldehyde → ethanol using NADH (re-oxidising it to NAD+)",
        "Lactate Dehydrogenase":    "Enzyme catalysing pyruvate → lactate using NADH (re-oxidising it to NAD+)",
        "Substrate-Level Phosphorylation": "ATP synthesis by direct transfer of a phosphate group from a high-energy substrate to ADP (does not require the electron transport chain)",
        "Pasteur Effect":           "The inhibition of fermentation by oxygen; when O2 is available, aerobic respiration suppresses fermentation",
        "Warburg Effect":           "The preference of cancer cells for aerobic glycolysis (fermentation even in the presence of oxygen)",
        "Obligate Anaerobe":        "Organism that can only survive in the absence of oxygen; oxygen is toxic",
        "Facultative Anaerobe":     "Organism that can survive with or without oxygen, switching between aerobic respiration and fermentation"
    },

    mechanismOfAction: {
        glycolysisRecap: {
            location:    "Cytoplasm",
            input:       "1 glucose (6C)",
            output:      "2 pyruvate (3C), 2 net ATP, 2 NADH",
            keySteps: [
                "Investment phase: 2 ATP consumed to phosphorylate glucose",
                "Cleavage: fructose-1,6-bisphosphate split into two 3C molecules",
                "Payoff phase: 4 ATP produced (net 2), 2 NADH produced",
                "NADH accumulates — must be re-oxidised for glycolysis to continue"
            ],
            bottleneck: "NADH accumulation: if NAD+ is not regenerated, glycolysis halts because the glyceraldehyde-3-phosphate dehydrogenase step cannot proceed without NAD+ as electron acceptor"
        },
        alcoholicFermentation: {
            organisms:   "Saccharomyces cerevisiae (baker's/brewer's yeast), some bacteria",
            location:    "Cytoplasm",
            steps: [
                "Step 1 — Decarboxylation: pyruvate + H+ → acetaldehyde + CO2 (enzyme: pyruvate decarboxylase, cofactor: TPP)",
                "Step 2 — Reduction: acetaldehyde + NADH + H+ → ethanol + NAD+ (enzyme: alcohol dehydrogenase)"
            ],
            overallEquation: "C6H12O6 → 2 C2H5OH + 2 CO2",
            netATP:          "2 ATP per glucose (from glycolysis only)",
            keyPoint:        "NAD+ is regenerated in step 2, allowing glycolysis to continue; ethanol and CO2 are waste products excreted from the cell",
            industrialNote:  "CO2 produced causes bread to rise; ethanol accumulates in brewing until it reaches toxic levels (~12–15%) that kill the yeast"
        },
        lacticAcidFermentation: {
            organisms:   "Human skeletal muscle, red blood cells, Lactobacillus, Streptococcus",
            location:    "Cytoplasm",
            steps: [
                "Single step — Reduction: pyruvate + NADH + H+ → lactate + NAD+ (enzyme: lactate dehydrogenase)"
            ],
            overallEquation: "C6H12O6 → 2 C3H6O3 (lactate)",
            netATP:          "2 ATP per glucose (from glycolysis only)",
            keyPoint:        "Pyruvate is directly reduced to lactate; no CO2 is produced; NAD+ is regenerated in the single reduction step",
            musclePhysiology: "During intense exercise, muscle cells switch to lactic acid fermentation when O2 delivery is insufficient; lactate is exported to the liver (Cori cycle) where it is reconverted to glucose"
        },
        coriCycle: {
            description: "The metabolic cycle linking muscle lactic acid fermentation to hepatic gluconeogenesis",
            steps: [
                "Muscle: glucose → 2 lactate + 2 ATP (anaerobic glycolysis)",
                "Lactate exported into bloodstream",
                "Liver: 2 lactate → glucose (gluconeogenesis, consumes 6 ATP)",
                "Glucose returned to muscle via bloodstream"
            ],
            energyNote: "The Cori cycle transfers the metabolic burden of ATP deficit from muscle to liver — liver uses aerobic respiration to fund the gluconeogenesis that rescues the lactate"
        }
    },

    factorsAffectingFermentation: {
        oxygenAvailability: {
            aerobic:    "Pyruvate enters mitochondria for TCA cycle; fermentation suppressed (Pasteur effect)",
            anaerobic:  "Pyruvate remains in cytoplasm; fermentation activated to regenerate NAD+",
            facultative: "Many organisms switch seamlessly between pathways based on O2 tension"
        },
        temperature: {
            yeast:      "Optimal ~30–37°C; below 10°C: fermentation slows dramatically; above 45°C: yeast denatures",
            lactic:     "Lactic acid bacteria optimal ~37–42°C; thermophilic strains used in yoghurt production"
        },
        pH: {
            effect:     "Accumulation of ethanol or lactate (acidic products) progressively inhibits the fermenting organism",
            brewing:    "pH drop to ~4 slows yeast; lactic acid bacteria are more acid-tolerant (can grow to pH 4–3.5)",
            industrial: "pH is controlled in industrial fermenters by buffering or base addition"
        },
        substrateAvailability: {
            glucose:    "Primary substrate; high glucose concentrations activate fermentation even in the presence of O2 in yeast (Crabtree effect)",
            alternatives: "Fructose, sucrose, maltose, and starch (after amylase hydrolysis) can all feed glycolysis and fermentation"
        },
        productInhibition: {
            ethanol:    "Accumulates as a waste product; above ~12–15% v/v kills the yeast (ethanol denaturation of membrane proteins)",
            lactate:    "Lowers intracellular pH; inhibits phosphofructokinase and other glycolytic enzymes; contributes to muscle fatigue"
        }
    },

    energyYieldComparison: {
        fermentation: {
            ATPperGlucose: "2 ATP (substrate-level phosphorylation in glycolysis only)",
            electronAcceptor: "Organic molecule (acetaldehyde or pyruvate)",
            oxygenRequired: false,
            finalProducts: "Ethanol + CO2 (alcoholic) OR lactate (lactic acid)"
        },
        aerobicRespiration: {
            ATPperGlucose: "~30–32 ATP (glycolysis + pyruvate oxidation + TCA + oxidative phosphorylation)",
            electronAcceptor: "O2 (terminal acceptor in electron transport chain)",
            oxygenRequired: true,
            finalProducts: "CO2 + H2O"
        },
        efficiency: "Aerobic respiration extracts ~15× more ATP per glucose than fermentation; however fermentation is sufficient for short bursts of anaerobic activity and for organisms in oxygen-poor environments"
    },

    warburgEffect: {
        description: "Many cancer cells preferentially use aerobic glycolysis (glycolysis + lactic acid fermentation) even when oxygen is available, rather than switching to full aerobic respiration",
        mechanisticBasis: [
            "Upregulation of glucose transporters (GLUT1) and glycolytic enzymes",
            "Expression of pyruvate kinase M2 (PKM2) isoform — produces less efficient glycolysis but provides metabolic intermediates for biosynthesis",
            "Inhibition of pyruvate dehydrogenase by pyruvate dehydrogenase kinase (PDK) — prevents pyruvate entering mitochondria",
            "HIF-1α (hypoxia-inducible factor) upregulates fermentation even under normoxia in cancer"
        ],
        clinicalSignificance: [
            "Basis of PET scanning: cancer cells take up 18F-FDG (radioactive glucose analogue) at much higher rates than normal tissue",
            "Target for cancer therapy: inhibitors of lactate dehydrogenase (e.g. oxamate) and PDK (e.g. dichloroacetate) are under investigation",
            "Provides biosynthetic precursors (not just ATP) for rapidly dividing cells"
        ]
    },

    regulation: {
        pasteurEffect: {
            mechanism: "O2 presence activates oxidative phosphorylation; increased ATP production inhibits phosphofructokinase (PFK) and other glycolytic enzymes via allosteric inhibition; glycolytic flux drops, reducing pyruvate and NADH supply, suppressing fermentation",
            keyRegulator: "Phosphofructokinase (PFK) — allosterically inhibited by ATP, activated by AMP; the central switch between fermentation and respiration"
        },
        crabTreeEffect: {
            description: "In yeast (and some cancer cells), very high glucose concentrations trigger fermentation even in the presence of O2, due to overflow metabolism exceeding the capacity of mitochondria",
            relevance:   "Explains why bread yeast produces CO2 (for leavening) in standard dough even though dough is not oxygen-free"
        },
        pfkRegulation: {
            inhibitors: ["ATP (high energy signal)", "citrate", "H+ (low pH)"],
            activators: ["AMP (low energy signal)", "ADP", "fructose-2,6-bisphosphate"],
            role:       "PFK is the primary committed step of glycolysis and the key metabolic switch; its allosteric regulation determines whether glucose flows into glycolysis/fermentation or is stored"
        }
    },

    applications: [
        "Food and beverage production: bread, beer, wine, cider, sake, vinegar, yoghurt, cheese, sauerkraut, kimchi, sourdough",
        "Pharmaceutical: production of antibiotics (penicillin by Penicillium mould fermentation), vitamins (B12 by bacterial fermentation), recombinant insulin (yeast fermentation of engineered strains)",
        "Biofuel production: bioethanol from glucose fermentation (corn, sugarcane) as renewable fuel",
        "Industrial chemicals: lactic acid for bioplastics (polylactic acid), citric acid (Aspergillus niger fermentation), acetone/butanol (Clostridium fermentation)",
        "Medical diagnostics: blood lactate measurement in lactic acidosis and sepsis; LDH levels as tissue damage marker",
        "Cancer biology: Warburg effect as diagnostic (PET scanning) and therapeutic target",
        "Biotechnology: production of recombinant proteins, vaccines, and amino acids using fermentation bioreactors"
    ],

    topicSummary: {
        coreInsights: [
            "Fermentation is not about making alcohol or yoghurt — it is fundamentally about regenerating NAD+ so that glycolysis can continue producing ATP when oxygen is absent.",
            "Both fermentation pathways (alcoholic and lactic acid) are biochemical strategies for re-oxidising NADH to NAD+ using pyruvate (or its derivative) as the electron acceptor.",
            "The net ATP yield of fermentation is only 2 per glucose — identical to glycolysis alone — because no additional ATP is produced in the fermentation steps themselves; they exist solely to recycle NAD+.",
            "Aerobic respiration yields ~30–32 ATP per glucose vs 2 for fermentation — a ~15-fold difference that explains why organisms preferentially respire aerobically when oxygen is available.",
            "The Pasteur effect (fermentation inhibited by O2) is mediated primarily through allosteric regulation of phosphofructokinase by ATP, linking cellular energy status to pathway choice.",
            "The Warburg effect in cancer cells represents a reprogramming of pyruvate fate — away from mitochondria and toward fermentation — driven by HIF-1α and isoform switching of metabolic enzymes.",
            "The Cori cycle elegantly distributes metabolic labour: muscle cells gain rapid ATP via lactic acid fermentation during exercise; liver cells spend aerobic ATP to reconvert lactate to glucose."
        ],
        keyEquations: {
            glycolysis:              "C6H12O6 + 2 NAD+ + 2 ADP + 2 Pi → 2 pyruvate + 2 NADH + 2 H+ + 2 ATP + 2 H2O",
            alcoholicFermentation:   "2 pyruvate + 2 NADH + 2 H+ → 2 ethanol + 2 CO2 + 2 NAD+",
            lacticAcidFermentation:  "2 pyruvate + 2 NADH + 2 H+ → 2 lactate + 2 NAD+",
            overallAlcoholic:        "C6H12O6 → 2 C2H5OH + 2 CO2 (+ 2 ATP)",
            overallLactic:           "C6H12O6 → 2 C3H6O3 (+ 2 ATP)"
        },
        fermentationComparison: {
            alcoholic:   { substrate: "Pyruvate", intermediates: "Acetaldehyde", products: "Ethanol + CO2", enzyme1: "Pyruvate decarboxylase", enzyme2: "Alcohol dehydrogenase", organisms: "Yeast, some bacteria", NADRegenerated: true },
            lacticAcid:  { substrate: "Pyruvate", intermediates: "None", products: "Lactate", enzyme1: "Lactate dehydrogenase", enzyme2: "N/A", organisms: "Muscle, RBCs, Lactobacillus", NADRegenerated: true }
        },
        commonMistakesToAvoid: [
            "Fermentation does NOT produce ATP directly — all ATP in fermentation comes from glycolysis; the fermentation steps themselves produce zero ATP",
            "NAD+ regeneration, not ATP production, is the primary biochemical purpose of fermentation — ATP is a consequence of glycolysis, which fermentation enables",
            "Lactic acid fermentation does NOT produce CO2 — only alcoholic fermentation releases CO2 (via pyruvate decarboxylase)",
            "Lactate is NOT the same as lactic acid — at physiological pH, the deprotonated form (lactate) dominates; lactic acid only exists at very low pH",
            "Muscle fatigue is NOT caused solely by lactate accumulation — it is primarily caused by H+ accumulation (acidosis) from ATP hydrolysis; lactate is a consequence, not the direct cause",
            "Fermentation is not exclusively microbial — human muscle cells and red blood cells perform lactic acid fermentation routinely",
            "The Warburg effect is NOT simply because cancer cells lack oxygen — many tumours have adequate O2 supply but still preferentially ferment (aerobic glycolysis)"
        ],
        connections: [
            "Metabolism: fermentation is the anaerobic extension of glycolysis; understanding it requires mastery of the glycolytic pathway and the NAD+/NADH redox couple",
            "Exercise physiology: oxygen debt, muscle fatigue, and lactate threshold are direct physiological consequences of switching to lactic acid fermentation during intense exercise",
            "Cancer biology: the Warburg effect links fermentation to tumour growth, PET imaging, and metabolic cancer therapy",
            "Food science: the chemistry of brewing, baking, and dairy fermentation is entirely explainable by the biochemistry in this lesson",
            "Evolutionary biology: fermentation is the ancestral metabolic pathway; aerobic respiration evolved later when cyanobacteria oxygenated the atmosphere ~2.4 billion years ago"
        ],
        examReadinessChecklist: [
            "Can you write the overall equations for both fermentation pathways from memory?",
            "Can you explain why fermentation produces only 2 ATP per glucose, not more?",
            "Can you explain the purpose of fermentation in one sentence without mentioning ethanol or lactate?",
            "Can you draw the alcoholic fermentation pathway with enzyme names and cofactors?",
            "Can you explain the Pasteur effect mechanistically, naming the allosteric enzyme involved?",
            "Can you explain the Warburg effect and its clinical significance?",
            "Can you compare fermentation and aerobic respiration across five criteria: ATP yield, location, oxygen requirement, products, and efficiency?"
        ]
    }
},


electronTransport: {
    title: "Electron Transport Chain and Oxidative Phosphorylation",

    databaseLinks: {
        misconceptions: [
            'etcBasics',
            'chemiosmosis',
            'atpSynthase',
            'etcInhibition',
            'energyYield'
        ],
        contextualScenarios: [
            'etcBasics',
            'chemiosmosis',
            'etcInhibition',
            'etcRegulation'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'models',
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
            'etcBasics',
            'chemiosmosis',
            'atpSynthase',
            'etcInhibition'
        ]
    },

    conceptLinks: {
        "The ETC couples electron flow to proton pumping across the inner mitochondrial membrane": {
            misconceptions:      ['etcBasics'],
            scenarios:           ['etcBasics'],
            studyTips:           ['diagrams', 'models'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['etcBasics']
        },
        "Chemiosmosis drives ATP synthesis via a proton gradient": {
            misconceptions:      ['chemiosmosis'],
            scenarios:           ['chemiosmosis'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['understand', 'apply'],
            assessmentQuestions: ['chemiosmosis']
        },
        "ATP synthase uses proton flow to phosphorylate ADP": {
            misconceptions:      ['atpSynthase'],
            scenarios:           ['chemiosmosis'],
            studyTips:           ['diagrams', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['atpSynthase']
        },
        "Electron carriers have defined reduction potentials that determine electron flow direction": {
            misconceptions:      ['etcBasics'],
            scenarios:           ['etcBasics'],
            studyTips:           ['comparisonTables', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze'],
            assessmentQuestions: ['etcBasics']
        },
        "Inhibitors and uncouplers disrupt ETC function in distinct ways": {
            misconceptions:      ['etcInhibition'],
            scenarios:           ['etcInhibition'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['etcInhibition']
        }
    },

    topicIntroduction: {
        overview: "The electron transport chain (ETC) is the cell's power station — a series of protein complexes embedded in the inner mitochondrial membrane that harvest the energy stored in NADH and FADH₂ by passing electrons down a thermodynamic gradient to oxygen. This energy is used to pump protons across the membrane, creating an electrochemical gradient that drives ATP synthesis. Together, the ETC and ATP synthase constitute oxidative phosphorylation — the process responsible for the majority of ATP produced in aerobic respiration.",
        whyItMatters: "Virtually every aerobic organism depends on oxidative phosphorylation for energy. Disruption of the ETC by toxins (cyanide, carbon monoxide), genetic disease (mitochondrial myopathies), or drugs (metformin, aspirin in overdose) can be lethal. Understanding the ETC is fundamental to medicine, toxicology, and the treatment of metabolic disease. It also underpins our understanding of reactive oxygen species, ageing, and the evolution of eukaryotic cells.",
        bigPicture: "The ETC does not produce ATP directly — it builds the proton gradient that ATP synthase uses as its energy source. This separation of electron flow from ATP synthesis (Mitchell's chemiosmotic theory) was a revolutionary concept that replaced earlier substrate-level phosphorylation theories and earned Peter Mitchell the 1978 Nobel Prize in Chemistry.",
        priorKnowledge: [
            "Glycolysis and the citric acid cycle: where NADH and FADH₂ come from",
            "Redox chemistry: oxidation, reduction, electron donors and acceptors",
            "Membrane biology: phospholipid bilayer, membrane proteins, electrochemical gradients",
            "Thermodynamics: free energy, Gibbs energy, spontaneous reactions",
            "Protein structure: how transmembrane proteins are anchored in membranes"
        ],
        topicRoadmap: [
            "Location and structural context: inner mitochondrial membrane and cristae",
            "Electron carriers: NADH, FADH₂, ubiquinone (CoQ), cytochrome c",
            "The four complexes: structure, function, and proton pumping stoichiometry",
            "Reduction potentials and the thermodynamics of electron flow",
            "Chemiosmosis: the proton motive force and its two components",
            "ATP synthase: structure (F₀F₁), rotary mechanism, and ATP yield",
            "Inhibitors and uncouplers: mechanisms and physiological/pharmacological relevance",
            "Regulation of oxidative phosphorylation",
            "ATP yield calculation and why the theoretical maximum is rarely achieved"
        ]
    },

    concepts: [
        "The ETC is a series of protein complexes in the inner mitochondrial membrane",
        "Electrons flow from high-energy carriers (NADH, FADH₂) to oxygen via redox carriers",
        "Electron flow drives proton pumping from matrix to intermembrane space",
        "The proton gradient (proton motive force) stores energy in two components: chemical and electrical",
        "ATP synthase uses proton flow back into the matrix to synthesise ATP from ADP and Pi",
        "Inhibitors block specific complexes; uncouplers dissipate the proton gradient without making ATP"
    ],

    theory: "Oxidative phosphorylation couples the exergonic transfer of electrons from NADH/FADH₂ to O₂ with the endergonic synthesis of ATP. The mechanism — chemiosmosis — uses electron flow to pump protons across the inner mitochondrial membrane, creating a proton motive force that drives ATP synthase.",

    keyDefinitions: {
        "Electron Transport Chain (ETC)": "Series of protein complexes (I–IV) and mobile carriers in the inner mitochondrial membrane that transfer electrons from NADH/FADH₂ to O₂",
        "Oxidative Phosphorylation": "ATP synthesis driven by electron transport and the resultant proton gradient",
        "NADH": "Primary electron donor to the ETC; carries two electrons and one proton (as hydride) to Complex I",
        "FADH₂": "Secondary electron donor; carries two electrons to Complex II, bypassing Complex I",
        "Ubiquinone (CoQ)": "Lipid-soluble mobile electron carrier; shuttles electrons from Complexes I and II to Complex III",
        "Cytochrome c": "Small, water-soluble peripheral membrane protein; shuttles electrons from Complex III to Complex IV",
        "Proton Motive Force (PMF)": "Electrochemical gradient of protons across the inner mitochondrial membrane; has chemical (ΔpH) and electrical (ΔΨ) components",
        "Chemiosmosis": "Process by which proton flow down an electrochemical gradient drives ATP synthesis",
        "ATP Synthase (Complex V)": "Molecular motor that uses proton flow to phosphorylate ADP; consists of F₀ (membrane) and F₁ (catalytic) subunits",
        "Uncoupler": "Agent that dissipates the proton gradient without ATP synthesis, converting the energy to heat",
        "Reduction Potential (E°')": "Tendency of a molecule to accept electrons; more positive E°' = stronger electron acceptor",
        "P/O Ratio": "Moles of ATP synthesised per atom of oxygen consumed; reflects coupling efficiency"
    },

    mechanismOfAction: {
        overview: "Electron flow through the ETC is thermodynamically driven by the difference in reduction potential between electron donors and the terminal acceptor (O₂). Each complex captures a portion of this free energy to pump protons, creating the PMF that powers ATP synthase.",
        complexI: {
            name: "NADH-Ubiquinone Oxidoreductase (NADH dehydrogenase)",
            substrates: "NADH (donor), ubiquinone (acceptor)",
            protonsTranslocated: 4,
            mechanism: "NADH donates electrons to an FMN prosthetic group; electrons pass through a chain of iron-sulfur (Fe-S) clusters to ubiquinone; conformational change pumps 4H⁺ across membrane",
            inhibitors: ["Rotenone", "Amytal (amobarbital)", "Piericidin A"]
        },
        complexII: {
            name: "Succinate-Ubiquinone Oxidoreductase (Succinate dehydrogenase)",
            substrates: "FADH₂ (from succinate oxidation), ubiquinone (acceptor)",
            protonsTranslocated: 0,
            mechanism: "FADH₂ electrons pass through Fe-S clusters directly to ubiquinone; no proton pumping (explains lower ATP yield from FADH₂ vs NADH)",
            note: "Complex II is also an enzyme of the citric acid cycle (catalyses succinate → fumarate)",
            inhibitors: ["Malonate (competitive with succinate)", "TTFA"]
        },
        complexIII: {
            name: "Ubiquinol-Cytochrome c Oxidoreductase (Cytochrome bc₁ complex)",
            substrates: "Ubiquinol (QH₂, donor), cytochrome c (acceptor)",
            protonsTranslocated: 4,
            mechanism: "Q cycle: each QH₂ oxidised releases 2H⁺ to intermembrane space; one electron reduces cytochrome c, the other recycles a semiquinone intermediate — net result: 4H⁺ pumped per 2 electrons passed",
            inhibitors: ["Antimycin A", "Stigmatellin", "Myxothiazol"]
        },
        complexIV: {
            name: "Cytochrome c Oxidase",
            substrates: "Cytochrome c (donor), O₂ (terminal electron acceptor)",
            protonsTranslocated: 2,
            mechanism: "4 electrons from 4 cytochrome c molecules reduce O₂ to 2 H₂O; additionally pumps 2H⁺ per electron pair; contains copper centres (CuA, CuB) and haem groups (a, a₃)",
            terminalAcceptor: "Oxygen is reduced to water — this is the only step where O₂ is consumed",
            inhibitors: ["Cyanide (CN⁻)", "Carbon monoxide (CO)", "Azide (N₃⁻)", "Hydrogen sulfide (H₂S)"]
        },
        mobileCarriers: {
            ubiquinone: "Hydrophobic; diffuses freely within the lipid bilayer; collects electrons from Complexes I and II and delivers them to Complex III",
            cytochromec: "Hydrophilic; loosely attached to outer face of inner membrane; shuttles electrons from Complex III to Complex IV"
        }
    },

    reductionPotentials: {
        principle: "Electrons flow spontaneously from carriers with more negative (lower) E°' to those with more positive (higher) E°'. The free energy released is ΔG°' = −nFΔE°'.",
        series: [
            { carrier: "NAD⁺/NADH",         eo_prime: -0.32 },
            { carrier: "FAD/FADH₂",          eo_prime: -0.22 },
            { carrier: "Ubiquinone (CoQ)",    eo_prime: +0.04 },
            { carrier: "Cytochrome b",        eo_prime: +0.07 },
            { carrier: "Cytochrome c₁",       eo_prime: +0.22 },
            { carrier: "Cytochrome c",        eo_prime: +0.25 },
            { carrier: "Cytochrome a/a₃",     eo_prime: +0.39 },
            { carrier: "O₂/H₂O",             eo_prime: +0.82 }
        ],
        freeEnergyEquation: "ΔG°' = −nFΔE°' where n = electrons transferred, F = 96,485 C/mol (Faraday constant)",
        totalDeltaE: "From NADH to O₂: ΔE°' = +0.82 − (−0.32) = +1.14 V → ΔG°' ≈ −220 kJ/mol (per NADH)"
    },

    protonMotiveForce: {
        components: {
            chemical: "ΔpH component: pH is higher in matrix (more alkaline) than intermembrane space",
            electrical: "ΔΨ component: matrix is negatively charged relative to intermembrane space",
            combined: "PMF (Δp) = ΔΨ − (2.303 RT/F)ΔpH; in mitochondria ≈ 220 mV total"
        },
        contribution: "In mitochondria, ΔΨ contributes approximately 150–180 mV and ΔpH approximately 30–60 mV to the total PMF",
        energyStorage: "The PMF represents stored free energy; approximately 21 kJ/mol of free energy per unit of PMF across the membrane"
    },

    atpSynthase: {
        structure: {
            F0subunit: "Membrane-embedded rotor ring (c-ring of 8–15 subunits depending on species) plus a-subunit (stator); conducts protons through the membrane",
            F1subunit: "Peripheral catalytic head projecting into matrix; contains 3α and 3β subunits arranged alternately around a central γ subunit (rotor stalk)",
            stator: "b₂ and δ subunits connect F₀ and F₁ on the outside to prevent co-rotation"
        },
        mechanism: {
            rotaryModel: "Proton flow through F₀ drives rotation of the c-ring and γ subunit (rotor); rotation causes conformational changes in β subunits cycling through three states",
            bindingChange: {
                openState: "O state: empty, low affinity — ADP + Pi bind",
                looseState: "L state: ADP and Pi loosely bound — non-covalent associations form",
                tightState: "T state: ATP synthesised and tightly bound — ATP is released upon next conformational change"
            },
            protonsPerATP: "Approximately 3–4 H⁺ must flow through F₀ to synthesise one ATP (depends on c-ring size: human mitochondria c-ring has 8 subunits, so 8H⁺ per rotation × 3 ATP per rotation = approximately 2.7H⁺/ATP)"
        },
        inhibitors: ["Oligomycin (blocks F₀ proton channel — stops both ATP synthesis and proton flow)", "DCCD (covalently modifies c-subunit)"]
    },

    atpYield: {
        theoreticalPerGlucose: {
            glycolysis:          { NADH: 2, FADH2: 0, directATP: 2 },
            pyruvateDecarboxylation: { NADH: 2, FADH2: 0, directATP: 0 },
            citricAcidCycle:     { NADH: 6, FADH2: 2, directGTP: 2 },
            totals:              { NADH: 10, FADH2: 2, directATP: 4 }
        },
        atpFromNADH:  "Each NADH → approximately 2.5 ATP (using modern P/O ratio of 2.5)",
        atpFromFADH2: "Each FADH₂ → approximately 1.5 ATP (using modern P/O ratio of 1.5)",
        netATPPerGlucose: "10 × 2.5 + 2 × 1.5 + 4 = 25 + 3 + 4 = approximately 30–32 ATP",
        whyNotTheoreticalMaximum: [
            "Proton leak across inner mitochondrial membrane (not all protons pass through ATP synthase)",
            "Cost of transporting ADP/Pi into matrix and ATP out (ATP/ADP translocase uses PMF)",
            "Cost of transporting cytoplasmic NADH electrons via shuttle systems (malate-aspartate vs glycerol-3-phosphate shuttle)",
            "Measurement conditions differ from in vivo conditions"
        ],
        historicalNote: "The classic textbook value of 36–38 ATP per glucose is now considered an overestimate; modern measurements using actual P/O ratios give approximately 30–32 ATP"
    },

    inhibitorsAndUncouplers: {
        etcInhibitors: {
            mechanism: "Block electron flow at a specific complex — prevent proton pumping — PMF collapses — ATP synthesis stops — O₂ consumption stops (except for any residual non-ETC oxygen use)",
            examples: {
                rotenone:   { complex: "I",   source: "Plant insecticide / rodenticide",   clinicalRelevance: "Linked to Parkinson's disease in animal models; blocks NADH entry into ETC" },
                antimycinA: { complex: "III",  source: "Antibiotic from Streptomyces",      clinicalRelevance: "Experimental tool; increases superoxide production" },
                cyanide:    { complex: "IV",   source: "Industrial/smoke inhalation",       clinicalRelevance: "Binds Fe³⁺ in cytochrome a₃; treated with hydroxocobalamin or sodium thiosulfate" },
                CO:         { complex: "IV",   source: "Combustion products",               clinicalRelevance: "Competes with O₂ at CuB/haem a₃; also binds haemoglobin" }
            }
        },
        atpSynthaseInhibitors: {
            mechanism: "Block proton channel through F₀ — protons cannot flow — ATP synthesis stops — PMF builds up — electron flow slows (backs up) — O₂ consumption decreases",
            examples: {
                oligomycin: { source: "Streptomyces antibiotic", use: "Experimental tool to confirm ATP synthase coupling; blocks F₀ c-subunit proton channel" }
            }
        },
        uncouplers: {
            mechanism: "Carry protons across the inner mitochondrial membrane independently of ATP synthase — PMF dissipated as heat — ATP synthesis stops but O₂ consumption continues or INCREASES (because ETC is no longer backed up)",
            keyDistinction: "Uncouplers increase O₂ consumption while decreasing ATP synthesis — the opposite of ETC inhibitors",
            examples: {
                DNP: { 
                    name: "2,4-Dinitrophenol", 
                    mechanism: "Lipid-soluble weak acid; picks up H⁺ in IMS, diffuses to matrix, releases H⁺, returns as anion — acts as a proton shuttle bypassing ATP synthase", 
                    history: "Used as a slimming drug in the 1930s; caused hyperthermia deaths; still misused today" 
                },
                thermogenin: { 
                    name: "UCP1 (Uncoupling Protein 1)", 
                    mechanism: "Physiological uncoupler in brown adipose tissue; allows controlled proton leak for non-shivering thermogenesis", 
                    clinicalRelevance: "Important in newborns and hibernating mammals; target for obesity research" 
                }
            }
        }
    },

    regulation: {
        substrateAvailability: {
            ADP: "Rate-limiting substrate for ATP synthase; when ADP is low (cell is energy-rich), PMF builds up and slows electron flow — respiratory control",
            NADH: "Availability from TCA cycle and glycolysis limits electron input; TCA cycle itself regulated by NADH/NAD⁺ ratio",
            O2: "Terminal electron acceptor; hypoxia limits Complex IV activity — basis of anaerobic metabolism"
        },
        respiratoryControl: {
            definition: "Tight coupling between ADP availability and the rate of electron transport; when ATP is plentiful (low ADP), PMF increases and electron flow decreases",
            respiratoryControlRatio: "RCR = O₂ consumption with ADP / O₂ consumption without ADP; high RCR (>5) indicates tightly coupled mitochondria"
        },
        allostericRegulation: "Cytochrome c oxidase (Complex IV) is inhibited allosterically by ATP and activated by ADP — a direct feedback loop matching ETC activity to cellular energy status"
    },

    reactiveOxygenSpecies: {
        production: "Electrons occasionally leak from Complexes I and III directly to O₂, producing superoxide (O₂•⁻) — estimated 0.1–2% of electron flow under normal conditions",
        consequences: "Superoxide and derived ROS (H₂O₂, OH•) can damage DNA, proteins, and lipids — implicated in ageing, cancer, and neurodegenerative disease",
        defences: "Superoxide dismutase (SOD) converts O₂•⁻ to H₂O₂; catalase and glutathione peroxidase convert H₂O₂ to water",
        uncouplerEffect: "Mild uncoupling reduces ROS production by preventing the extremely high PMF states that favour electron leak"
    },

    applications: [
        "Toxicology: cyanide and CO poisoning mechanisms and antidotes",
        "Medicine: mitochondrial diseases (Complex I deficiency, MELAS syndrome)",
        "Pharmacology: metformin (Complex I inhibition in liver — reduces hepatic glucose output)",
        "Obesity research: brown adipose tissue uncoupling and UCP1 activators",
        "Evolutionary biology: endosymbiotic origin of mitochondria",
        "Ageing research: mitochondrial ROS and the free radical theory of ageing",
        "Exercise physiology: how ATP demand modulates ETC flux"
    ],

    topicSummary: {
        coreInsights: [
            "The ETC does not synthesise ATP directly — it builds the proton gradient that ATP synthase uses as its energy currency. Electron flow and ATP synthesis are separate, coupled processes.",
            "Electron flow direction is determined by reduction potential: electrons always flow from more negative to more positive E°', spontaneously releasing free energy (ΔG°' = −nFΔE°').",
            "NADH and FADH₂ enter at different points: NADH at Complex I (4H⁺ pumped), FADH₂ at Complex II (0H⁺ pumped) — explaining why FADH₂ yields fewer ATP.",
            "The proton motive force has two components: the chemical gradient (ΔpH) and the electrical gradient (ΔΨ); both drive protons back through ATP synthase.",
            "ATP synthase is a rotary molecular motor: proton flow through F₀ rotates the γ subunit, cycling the three β subunits of F₁ through conformational states that bind ADP+Pi, synthesise ATP, and release it.",
            "ETC inhibitors stop electron flow and therefore O₂ consumption and ATP synthesis. Uncouplers stop ATP synthesis but increase O₂ consumption — a critical distinction.",
            "The modern ATP yield per glucose (approximately 30–32) is lower than the classical textbook value (36–38) due to proton leak, transporter costs, and shuttle system inefficiencies.",
            "Respiratory control couples the rate of oxidative phosphorylation to cellular ADP availability — matching energy production to energy demand."
        ],
        keyEquations: {
            freeEnergyFromRedox:  "ΔG°' = −nFΔE°'  (n = electrons, F = 96,485 C/mol)",
            protonMotiveForce:    "Δp = ΔΨ − (2.303RT/F)ΔpH  (≈ 220 mV in mitochondria)",
            atpSynthesisEquation: "ADP + Pi → ATP  (driven by ~3–4 H⁺ flowing through F₀ per ATP)",
            atpYieldNADH:         "1 NADH → ~2.5 ATP (modern P/O ratio)",
            atpYieldFADH2:        "1 FADH₂ → ~1.5 ATP (modern P/O ratio)",
            netATPPerGlucose:     "(10 × 2.5) + (2 × 1.5) + 4 = ~30–32 ATP"
        },
        inhibitorComparison: {
            etcInhibitor:          { O2Consumption: "Decreases",  ATPSynthesis: "Decreases", PMF: "Collapses",    example: "Cyanide, Rotenone" },
            atpSynthaseInhibitor:  { O2Consumption: "Decreases",  ATPSynthesis: "Stops",     PMF: "Increases",   example: "Oligomycin" },
            uncoupler:             { O2Consumption: "Increases",  ATPSynthesis: "Decreases", PMF: "Collapses",   example: "DNP, UCP1" }
        },
        commonMistakesToAvoid: [
            "The ETC does NOT directly make ATP — ATP synthase (Complex V) makes ATP using the PMF; the ETC only builds the gradient",
            "FADH₂ bypasses Complex I (enters at Complex II) — it does not pump 4H⁺ like NADH, yielding fewer ATP",
            "Oxygen is consumed ONLY at Complex IV — not at Complexes I, II, or III",
            "Uncouplers increase O₂ consumption (they do NOT stop it) — students frequently predict the opposite",
            "The matrix is alkaline and negatively charged (not acidic and positive) — students often reverse the gradient direction",
            "The modern ATP yield is approximately 30–32, not 36–38 — the classic value assumed 100% coupling efficiency"
        ],
        connections: [
            "Metabolism: the ETC is the final destination for electrons from glycolysis, pyruvate decarboxylation, and the TCA cycle",
            "Toxicology: cyanide, CO, and rotenone all target specific ETC complexes — understanding mechanism allows treatment design",
            "Evolutionary biology: the inner mitochondrial membrane's unique cardiolipin-rich composition reflects its bacterial ancestor",
            "Medicine: over 1,000 mitochondrial diseases linked to mutations in ETC complex subunits or assembly factors",
            "Pharmacology: metformin (the most prescribed antidiabetic drug) partially inhibits Complex I"
        ],
        examReadinessChecklist: [
            "Can you draw and label all four complexes, showing electron flow direction and H⁺ pumping stoichiometry?",
            "Can you explain why FADH₂ produces fewer ATP than NADH using the entry point and proton pumping argument?",
            "Can you predict the effect of cyanide, oligomycin, and DNP on O₂ consumption and ATP synthesis?",
            "Can you explain the two components of PMF and how each drives ATP synthase?",
            "Can you describe the rotary mechanism of ATP synthase (binding change mechanism)?",
            "Can you calculate ATP yield per glucose using modern P/O ratios?"
        ]
    }
},

glycolysis: {
    title: "Glycolysis: The Universal Pathway of Glucose Catabolism",

    databaseLinks: {
        misconceptions: [
            'glycolysisOverview',
            'glycolysisEnergetics',
            'glycolysisRegulation',
            'glycolysisProducts',
            'glycolysisContext'
        ],
        contextualScenarios: [
            'glycolysisOverview',
            'glycolysisEnergetics',
            'glycolysisRegulation',
            'glycolysisProducts'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'models',
            'timelines',
            'observations',
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
            'glycolysisOverview',
            'glycolysisEnergetics',
            'glycolysisRegulation',
            'glycolysisProducts'
        ]
    },

    conceptLinks: {
        "Glycolysis converts glucose to pyruvate in ten enzyme-catalysed steps": {
            misconceptions:      ['glycolysisOverview'],
            scenarios:           ['glycolysisOverview'],
            studyTips:           ['diagrams', 'mnemonics'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['glycolysisOverview']
        },
        "Glycolysis has an investment phase and a payoff phase": {
            misconceptions:      ['glycolysisEnergetics'],
            scenarios:           ['glycolysisEnergetics'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['glycolysisEnergetics']
        },
        "Net yield is 2 ATP, 2 NADH, and 2 pyruvate per glucose": {
            misconceptions:      ['glycolysisProducts', 'glycolysisEnergetics'],
            scenarios:           ['glycolysisEnergetics'],
            studyTips:           ['flashcards', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['glycolysisEnergetics', 'glycolysisProducts']
        },
        "Three irreversible steps are the key regulatory control points": {
            misconceptions:      ['glycolysisRegulation'],
            scenarios:           ['glycolysisRegulation'],
            studyTips:           ['diagrams', 'comparisonTables', 'mnemonics'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['glycolysisRegulation']
        },
        "Pyruvate fate depends on oxygen availability": {
            misconceptions:      ['glycolysisProducts', 'glycolysisContext'],
            scenarios:           ['glycolysisProducts'],
            studyTips:           ['comparisonTables', 'diagrams'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['glycolysisProducts']
        },
        "Glycolysis is regulated by allosteric control and hormonal signals": {
            misconceptions:      ['glycolysisRegulation'],
            scenarios:           ['glycolysisRegulation'],
            studyTips:           ['diagrams', 'flashcards', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['glycolysisRegulation']
        }
    },

    topicIntroduction: {
        overview: "Glycolysis is the most ancient and universal metabolic pathway — present in virtually every living organism from bacteria to humans. It converts one molecule of glucose (a six-carbon sugar) into two molecules of pyruvate (a three-carbon compound) through ten sequential enzyme-catalysed reactions, generating ATP and NADH in the process. Glycolysis occurs in the cytoplasm, requires no oxygen, and serves as the entry point into virtually all other pathways of carbohydrate metabolism.",
        whyItMatters: "Glycolysis is the foundation of cellular energy metabolism. It is the only energy-yielding pathway available during anaerobic conditions, the gateway to the TCA cycle and oxidative phosphorylation, the source of biosynthetic precursors for amino acids and lipids, and a primary target for cancer metabolism (the Warburg effect). Understanding glycolysis is prerequisite to understanding all of cellular metabolism.",
        bigPicture: "Glycolysis solves a fundamental biological problem: how to extract usable energy from glucose efficiently. It does so by investing ATP to activate glucose (investment phase), then recouping more ATP than was spent through substrate-level phosphorylation (payoff phase). The NADH produced carries electrons to the mitochondria for further ATP production via oxidative phosphorylation — or is recycled by fermentation when oxygen is absent.",
        priorKnowledge: [
            "Cell biology: cytoplasm, mitochondria, compartmentalisation",
            "Biochemistry: ATP structure and function as the energy currency",
            "Enzyme kinetics: Km, Vmax, allosteric regulation, feedback inhibition",
            "Redox chemistry: oxidation, reduction, NAD⁺/NADH as electron carriers",
            "Thermodynamics: free energy (ΔG), exergonic vs endergonic reactions",
            "Carbohydrate chemistry: glucose structure, phosphorylation, isomerisation"
        ],
        topicRoadmap: [
            "Overview: ten steps, two phases, cytoplasmic location",
            "Investment phase (steps 1–5): ATP consumed, glucose split into two trioses",
            "Payoff phase (steps 6–10): ATP and NADH generated, pyruvate formed",
            "Energy accounting: gross vs net ATP yield, substrate-level phosphorylation",
            "Regulation: three irreversible steps — hexokinase, PFK-1, pyruvate kinase",
            "Pyruvate fate: aerobic (TCA cycle) vs anaerobic (lactic acid or ethanol fermentation)",
            "Integration: glycolysis in the context of whole-body metabolism, cancer, and exercise"
        ]
    },

    concepts: [
        "Glycolysis converts glucose to pyruvate in ten enzyme-catalysed steps",
        "Glycolysis has an investment phase and a payoff phase",
        "Net yield is 2 ATP, 2 NADH, and 2 pyruvate per glucose",
        "Three irreversible steps are the key regulatory control points",
        "Pyruvate fate depends on oxygen availability",
        "Glycolysis is regulated by allosteric control and hormonal signals"
    ],

    theory: "Glycolysis is the universal ten-step cytoplasmic pathway converting glucose to pyruvate. It proceeds in two phases: an energy-investment phase consuming 2 ATP and an energy-payoff phase generating 4 ATP and 2 NADH, for a net yield of 2 ATP and 2 NADH per glucose. Three irreversible, highly regulated steps (catalysed by hexokinase, phosphofructokinase-1, and pyruvate kinase) control overall flux through the pathway.",

    keyDefinitions: {
        "Glycolysis": "Ten-step cytoplasmic pathway converting one glucose to two pyruvates, yielding 2 net ATP and 2 NADH",
        "Investment Phase": "Steps 1–5: two ATP consumed to phosphorylate and split glucose into two triose phosphates",
        "Payoff Phase": "Steps 6–10: four ATP and two NADH generated per glucose (×2 for both trioses)",
        "Substrate-Level Phosphorylation": "Direct transfer of a phosphate group from a substrate to ADP, producing ATP (without the electron transport chain)",
        "NAD⁺/NADH": "Nicotinamide adenine dinucleotide — oxidised (NAD⁺) and reduced (NADH) forms; key electron carrier in glycolysis",
        "Phosphofructokinase-1 (PFK-1)": "The primary rate-limiting enzyme of glycolysis; catalyses the committed step; the principal regulatory target",
        "Committed Step": "The first irreversible step unique to a pathway — for glycolysis, PFK-1 catalyses this step (fructose-6-phosphate → fructose-1,6-bisphosphate)",
        "Pyruvate": "The three-carbon end product of glycolysis; fate depends on oxygen availability",
        "Fermentation": "Anaerobic regeneration of NAD⁺ from NADH, allowing glycolysis to continue without oxygen",
        "Warburg Effect": "The preference of cancer cells for aerobic glycolysis over oxidative phosphorylation, even when oxygen is available",
        "Hexokinase": "Step 1 enzyme; phosphorylates glucose to glucose-6-phosphate; traps glucose inside the cell",
        "Pyruvate Kinase": "Step 10 enzyme; catalyses the final ATP-generating step; a key allosteric regulatory point"
    },

    // ─── THE TEN STEPS ───────────────────────────────────────────────────────

    tenSteps: {
        investmentPhase: {
            step1: {
                name: "Glucose phosphorylation",
                enzyme: "Hexokinase (or Glucokinase in liver/pancreas)",
                reaction: "Glucose + ATP → Glucose-6-phosphate + ADP",
                energetics: "Irreversible (ΔG strongly negative); consumes 1 ATP",
                significance: "Traps glucose inside the cell; glucose-6-phosphate cannot cross the plasma membrane",
                regulation: "Hexokinase inhibited by its own product (glucose-6-phosphate); glucokinase is NOT inhibited by G6P — enables liver to act as a glucose buffer"
            },
            step2: {
                name: "Glucose-6-phosphate isomerisation",
                enzyme: "Phosphoglucose isomerase",
                reaction: "Glucose-6-phosphate ⇌ Fructose-6-phosphate",
                energetics: "Reversible; small ΔG",
                significance: "Converts aldose to ketose for subsequent phosphorylation by PFK-1"
            },
            step3: {
                name: "Fructose-6-phosphate phosphorylation (committed step)",
                enzyme: "Phosphofructokinase-1 (PFK-1)",
                reaction: "Fructose-6-phosphate + ATP → Fructose-1,6-bisphosphate + ADP",
                energetics: "Irreversible (ΔG strongly negative); consumes 1 ATP",
                significance: "The committed step — once this occurs, the molecule must proceed through glycolysis",
                regulation: "Allosteric inhibition by ATP and citrate; allosteric activation by AMP and fructose-2,6-bisphosphate; the principal regulatory valve of glycolysis"
            },
            step4: {
                name: "Cleavage of fructose-1,6-bisphosphate",
                enzyme: "Aldolase",
                reaction: "Fructose-1,6-bisphosphate → Glyceraldehyde-3-phosphate (G3P) + Dihydroxyacetone phosphate (DHAP)",
                energetics: "Reversible under cellular conditions despite positive ΔG° (equilibrium driven by product removal)",
                significance: "Splits the six-carbon sugar into two three-carbon units"
            },
            step5: {
                name: "Interconversion of triose phosphates",
                enzyme: "Triose phosphate isomerase (TPI)",
                reaction: "DHAP ⇌ Glyceraldehyde-3-phosphate (G3P)",
                energetics: "Reversible; small ΔG",
                significance: "Ensures both three-carbon products enter the payoff phase as G3P; TPI is one of the most catalytically perfect enzymes known (kcat/Km near diffusion limit)"
            }
        },
        payoffPhase: {
            step6: {
                name: "Oxidation and phosphorylation of G3P",
                enzyme: "Glyceraldehyde-3-phosphate dehydrogenase (GAPDH)",
                reaction: "G3P + NAD⁺ + Pᵢ → 1,3-Bisphosphoglycerate + NADH + H⁺",
                energetics: "Exergonic; produces 2 NADH per glucose (one per triose)",
                significance: "The only oxidation step in glycolysis; produces the high-energy acyl phosphate 1,3-BPG; requires NAD⁺ — the NAD⁺ supply is limiting under anaerobic conditions"
            },
            step7: {
                name: "ATP generation (first substrate-level phosphorylation)",
                enzyme: "Phosphoglycerate kinase",
                reaction: "1,3-Bisphosphoglycerate + ADP → 3-Phosphoglycerate + ATP",
                energetics: "Exergonic; produces 2 ATP per glucose",
                significance: "First ATP-generating step; substrate-level phosphorylation; this step directly recovers the ATP invested in the investment phase"
            },
            step8: {
                name: "Shift of phosphate group",
                enzyme: "Phosphoglycerate mutase",
                reaction: "3-Phosphoglycerate ⇌ 2-Phosphoglycerate",
                energetics: "Reversible; small ΔG",
                significance: "Repositions the phosphate to enable the next step"
            },
            step9: {
                name: "Dehydration",
                enzyme: "Enolase",
                reaction: "2-Phosphoglycerate → Phosphoenolpyruvate (PEP) + H₂O",
                energetics: "Slightly endergonic but driven by next step",
                significance: "Creates PEP — a very high-energy phosphate compound; fluoride inhibits enolase (used in dental protection)"
            },
            step10: {
                name: "Final ATP generation and pyruvate formation",
                enzyme: "Pyruvate kinase",
                reaction: "Phosphoenolpyruvate + ADP → Pyruvate + ATP",
                energetics: "Irreversible (ΔG strongly negative); produces 2 ATP per glucose",
                significance: "Second ATP-generating step; the final irreversible step; pyruvate is the committed exit product",
                regulation: "Allosteric inhibition by ATP and alanine; allosteric activation by fructose-1,6-bisphosphate (feedforward activation); inhibited by phosphorylation (glucagon signalling)"
            }
        }
    },

    energyAccounting: {
        investmentPhase: {
            ATPconsumed: 2,
            steps: "Steps 1 and 3 each consume one ATP"
        },
        payoffPhase: {
            ATPproduced: 4,
            NADHproduced: 4,
            steps: "Steps 7 and 10 each produce 2 ATP (×2 for both trioses); Step 6 produces 2 NADH (×2 for both trioses)"
        },
        netYield: {
            ATP: 2,
            NADH: 2,
            pyruvate: 2,
            summary: "Net: 2 ATP + 2 NADH + 2 pyruvate per glucose"
        },
        substrateLevel: "All ATP in glycolysis is produced by substrate-level phosphorylation — direct phosphate transfer from substrate to ADP, no ETC required",
        NADHfate: {
            aerobic: "NADH enters mitochondria via malate-aspartate or glycerol-3-phosphate shuttle; yields 1.5–2.5 ATP per NADH via oxidative phosphorylation",
            anaerobic: "NADH is reoxidised to NAD⁺ by fermentation — no additional ATP produced from NADH"
        }
    },

    regulation: {
        overview: "Glycolytic flux is controlled primarily at the three irreversible steps (steps 1, 3, 10). The key regulatory principle: when energy is abundant (high ATP, high citrate), glycolysis is slowed; when energy is scarce (high AMP, high ADP), glycolysis is accelerated.",
        hexokinase: {
            step: 1,
            type: "Product inhibition",
            inhibitors: ["Glucose-6-phosphate (product inhibition)"],
            activators: [],
            significance: "Prevents glucose trapping when G6P accumulates (e.g. when downstream pathway is blocked)",
            liverDifference: "Liver glucokinase (hexokinase IV) is NOT inhibited by G6P and has high Km — only active when blood glucose is very high (post-meal buffering)"
        },
        pfk1: {
            step: 3,
            type: "Allosteric regulation — the master valve",
            inhibitors: ["ATP (high energy charge)", "Citrate (TCA cycle intermediate — signals biosynthetic sufficiency)", "H⁺ (low pH — prevents glycolysis during ischaemia)"],
            activators: ["AMP (low energy charge)", "ADP", "Fructose-2,6-bisphosphate (F2,6-BP — the most potent activator; produced by PFK-2, regulated by insulin/glucagon)"],
            significance: "The committed step; the principal control point of glycolytic flux; integrates energy status and hormonal signals",
            hormonalControl: "Insulin increases F2,6-BP → activates PFK-1 → increases glycolysis. Glucagon decreases F2,6-BP → inhibits PFK-1 → decreases glycolysis."
        },
        pyruvateKinase: {
            step: 10,
            type: "Allosteric regulation and covalent modification",
            inhibitors: ["ATP", "Alanine (amino acid — signals amino acid sufficiency)", "Glucagon-induced phosphorylation (inactivates liver PK)"],
            activators: ["Fructose-1,6-bisphosphate (feedforward activation from step 3)", "AMP"],
            significance: "Feedforward activation by F1,6-BP ensures the payoff phase keeps pace with the investment phase; glucagon suppresses PK in liver to favour gluconeogenesis"
        },
        energyChargeIntegration: {
            definition: "Energy charge = ([ATP] + 0.5[ADP]) / ([ATP] + [ADP] + [AMP])",
            highCharge: "Glycolysis inhibited (ATP inhibits PFK-1 and pyruvate kinase)",
            lowCharge: "Glycolysis activated (AMP activates PFK-1 and pyruvate kinase)"
        }
    },

    pyruvateFates: {
        aerobic: {
            condition: "Oxygen present, mitochondria functional",
            pathway: "Pyruvate dehydrogenase complex → Acetyl-CoA → TCA cycle → oxidative phosphorylation",
            additionalATP: "Approximately 30–32 ATP per glucose (in addition to 2 from glycolysis)",
            product: "CO₂ and H₂O"
        },
        lacticAcidFermentation: {
            condition: "Anaerobic conditions (intense exercise, RBCs which lack mitochondria)",
            enzyme: "Lactate dehydrogenase",
            reaction: "Pyruvate + NADH → Lactate + NAD⁺",
            purpose: "Regenerates NAD⁺ so glycolysis can continue; no additional ATP produced",
            clinicalNote: "Lactic acidosis occurs when lactate accumulates faster than the liver can process it"
        },
        alcoholicFermentation: {
            condition: "Anaerobic conditions in yeast",
            enzymes: "Pyruvate decarboxylase then alcohol dehydrogenase",
            reaction: "Pyruvate → Acetaldehyde + CO₂ → Ethanol + NAD⁺",
            purpose: "Regenerates NAD⁺; used in brewing and bread-making",
            clinicalNote: "Does not occur in human cells"
        },
        warburgEffect: {
            condition: "Cancer cells — even in the presence of oxygen",
            description: "Aerobic glycolysis: glucose is converted to lactate even when oxygen is available",
            advantage: "Provides biosynthetic precursors (for nucleotides, amino acids, lipids) for rapid cell proliferation; generates an acidic tumour microenvironment that suppresses immune surveillance",
            clinicalApplication: "PET scanning exploits the Warburg effect: ¹⁸F-fluorodeoxyglucose (a glucose analogue) accumulates in metabolically active tumours"
        }
    },

    glycolysisInContext: {
        connections: [
            "Gluconeogenesis: the reversal of glycolysis using different enzymes at the three irreversible steps; occurs in liver and kidney during fasting",
            "Pentose phosphate pathway: branches from G6P; provides NADPH and ribose-5-phosphate for biosynthesis",
            "Glycogen metabolism: glycogen is mobilised to glucose-1-phosphate → glucose-6-phosphate → enters glycolysis at step 2",
            "TCA cycle: pyruvate → acetyl-CoA feeds the TCA cycle; TCA intermediates (citrate) feed back to regulate PFK-1",
            "Lipid synthesis: excess acetyl-CoA from pyruvate can be used for fatty acid synthesis",
            "Amino acid metabolism: several glycolytic intermediates (3PG, pyruvate, PEP) are precursors to amino acid biosynthesis"
        ],
        exercisePhysiology: "During sprint exercise, glycolysis runs at maximum rate; lactate production allows continuation beyond the aerobic limit; the oxygen debt after exercise represents the metabolic cost of clearing lactate",
        cancerMetabolism: "Upregulated glycolytic enzymes and glucose transporters (GLUT1) are a hallmark of cancer; HIF-1α transcription factor drives glycolytic gene expression under tumour hypoxia",
        diabetes: "In Type 2 diabetes, impaired insulin signalling reduces GLUT4 translocation; glucose uptake into muscle and adipose is impaired; hepatic PFK-1 activity is dysregulated"
    },

    applications: [
        "Sports science: understanding lactate threshold in exercise physiology",
        "Cancer diagnostics: PET scanning exploits the Warburg effect (¹⁸F-FDG uptake)",
        "Microbiology: ethanol fermentation in brewing and biofuel production",
        "Pharmacology: glycolytic enzyme inhibitors as anticancer targets (e.g. 2-DG)",
        "Diabetes management: understanding impaired glucose metabolism",
        "Forensic science: glycolytic enzyme activity as a marker of tissue viability"
    ],

    topicSummary: {
        coreInsights: [
            "Glycolysis is a universal, cytoplasmic, oxygen-independent ten-step pathway converting glucose to two pyruvates.",
            "The investment phase (steps 1–5) spends 2 ATP to activate and cleave glucose; the payoff phase (steps 6–10) recovers 4 ATP and 2 NADH — net gain: 2 ATP and 2 NADH.",
            "All ATP in glycolysis is produced by substrate-level phosphorylation — no mitochondria, no electron transport chain required.",
            "Three irreversible steps control glycolytic flux: step 1 (hexokinase), step 3 (PFK-1), and step 10 (pyruvate kinase); PFK-1 is the principal regulatory valve.",
            "PFK-1 is activated by AMP and fructose-2,6-bisphosphate and inhibited by ATP and citrate — a precise integration of energy charge and TCA cycle status.",
            "Pyruvate fate bifurcates at oxygen availability: aerobically it enters the TCA cycle; anaerobically it is fermented to lactate (animals) or ethanol (yeast) to regenerate NAD⁺.",
            "The Warburg effect — aerobic glycolysis in cancer cells — is both a diagnostic tool (PET scanning) and a therapeutic target.",
            "Glycolysis is the gateway pathway: its intermediates feed gluconeogenesis, the pentose phosphate pathway, lipid synthesis, and amino acid biosynthesis."
        ],
        keyEquations: {
            overallReaction: "Glucose + 2 ADP + 2 Pᵢ + 2 NAD⁺ → 2 Pyruvate + 2 ATP + 2 NADH + 2 H⁺ + 2 H₂O",
            netATP: "4 ATP produced − 2 ATP consumed = 2 net ATP",
            lactateFermentation: "Pyruvate + NADH + H⁺ → Lactate + NAD⁺",
            energyCharge: "([ATP] + 0.5[ADP]) / ([ATP] + [ADP] + [AMP])"
        },
        phaseComparison: {
            investmentPhase: { steps: "1–5", ATPchange: "−2", NADHchange: "0",  keyEvent: "Glucose split into 2 × G3P" },
            payoffPhase:     { steps: "6–10", ATPchange: "+4", NADHchange: "+2", keyEvent: "2 × G3P oxidised to 2 × pyruvate" },
            net:             { steps: "1–10", ATPchange: "+2", NADHchange: "+2", keyEvent: "Glucose → 2 pyruvate" }
        },
        regulatoryComparison: {
            hexokinase:    { step: 1, signal: "G6P accumulation",    effect: "Product inhibition",   reversible: "Yes" },
            pfk1:          { step: 3, signal: "ATP/AMP ratio, F2,6-BP, citrate", effect: "Allosteric",  reversible: "Yes" },
            pyruvateKinase:{ step: 10, signal: "ATP, alanine, F1,6-BP (activator)", effect: "Allosteric + phosphorylation", reversible: "Yes" }
        },
        pyruvateFateComparison: {
            aerobic:          { oxygen: "Present", product: "Acetyl-CoA → CO₂ + H₂O", totalATP: "~30–32", NADHfate: "Mitochondrial oxidation" },
            lacticAcid:       { oxygen: "Absent",  product: "Lactate",                 totalATP: "2",      NADHfate: "Reoxidised to NAD⁺" },
            alcoholic:        { oxygen: "Absent (yeast only)", product: "Ethanol + CO₂", totalATP: "2",    NADHfate: "Reoxidised to NAD⁺" },
            warburgEffect:    { oxygen: "Present", product: "Lactate (cancer cells)",   totalATP: "2",     NADHfate: "Reoxidised to NAD⁺" }
        },
        commonMistakesToAvoid: [
            "Gross yield is 4 ATP — but 2 were invested; always state NET yield of 2 ATP",
            "NADH is produced in glycolysis but its ATP equivalent depends on aerobic conditions and the shuttle used — do not add it to the glycolytic ATP count",
            "PFK-1, not hexokinase, is the committed step and the primary regulatory enzyme",
            "Fermentation does not produce extra ATP — it only regenerates NAD⁺ to allow glycolysis to continue",
            "The Warburg effect is aerobic glycolysis — it occurs WITH oxygen present, not in its absence",
            "Glucokinase (liver) behaves differently from hexokinase (other tissues) — it is not inhibited by G6P and has a much higher Km for glucose"
        ],
        examReadinessChecklist: [
            "Can you list all ten steps with enzyme names and state which are reversible vs irreversible?",
            "Can you calculate net ATP and NADH yield from first principles, showing gross minus investment?",
            "Can you predict the effect on glycolytic flux of high ATP, high AMP, or high citrate?",
            "Can you explain why fermentation regenerates NAD⁺ and why this matters for glycolysis?",
            "Can you describe the Warburg effect and explain its clinical application in PET scanning?",
            "Can you connect glycolysis to gluconeogenesis, the TCA cycle, and the pentose phosphate pathway?"
        ],
        connections: [
            "TCA cycle: pyruvate → acetyl-CoA is the bridge from glycolysis to oxidative metabolism",
            "Gluconeogenesis: reversal of glycolysis using bypass enzymes at the three irreversible steps",
            "Pentose phosphate pathway: branches from glucose-6-phosphate; parallel to glycolysis",
            "Glycogen metabolism: glycogenolysis feeds into glycolysis at glucose-6-phosphate",
            "Cancer biology: Warburg effect — aerobic glycolysis as a hallmark of malignancy",
            "Exercise physiology: lactate threshold represents the limit of aerobic glycolysis"
        ]
    }
},

krebsCycle: {
    title: "The Krebs Cycle: Central Metabolic Hub",

    databaseLinks: {
        misconceptions: [
            'krebsOverview',
            'acetylCoA',
            'oxidativeSteps',
            'regulation',
            'connections'
        ],
        contextualScenarios: [
            'krebsOverview',
            'oxidativeSteps',
            'regulation',
            'connections'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'models',
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
            'krebsOverview',
            'acetylCoA',
            'oxidativeSteps',
            'regulation'
        ]
    },

    conceptLinks: {
        "The Krebs cycle oxidises acetyl-CoA to CO₂, capturing energy as NADH, FADH₂, and GTP": {
            misconceptions:      ['krebsOverview', 'oxidativeSteps'],
            scenarios:           ['krebsOverview'],
            studyTips:           ['diagrams', 'mnemonics'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['krebsOverview']
        },
        "Acetyl-CoA enters the cycle by condensing with oxaloacetate to form citrate": {
            misconceptions:      ['acetylCoA'],
            scenarios:           ['krebsOverview'],
            studyTips:           ['diagrams', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['acetylCoA']
        },
        "Each turn of the cycle produces 3 NADH, 1 FADH₂, 1 GTP, and 2 CO₂": {
            misconceptions:      ['krebsOverview', 'oxidativeSteps'],
            scenarios:           ['oxidativeSteps'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['remember', 'apply'],
            assessmentQuestions: ['krebsOverview', 'oxidativeSteps']
        },
        "The cycle is regulated at three irreversible steps by citrate synthase, isocitrate dehydrogenase, and α-ketoglutarate dehydrogenase": {
            misconceptions:      ['regulation'],
            scenarios:           ['regulation'],
            studyTips:           ['comparisonTables', 'flashcards', 'practiceRoutines'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['regulation']
        },
        "The cycle provides biosynthetic precursors for amino acids, fatty acids, and haem": {
            misconceptions:      ['connections'],
            scenarios:           ['connections'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['understand', 'analyze', 'evaluate'],
            assessmentQuestions: ['krebsOverview']
        }
    },

    topicIntroduction: {
        overview: "The Krebs cycle — also called the citric acid cycle or TCA (tricarboxylic acid) cycle — is the central metabolic hub of aerobic respiration. Taking place in the mitochondrial matrix, it completes the oxidation of fuel molecules begun in glycolysis and fatty acid oxidation, converting acetyl-CoA into CO₂ while capturing the released energy as electron carriers (NADH and FADH₂) and substrate-level phosphorylation (GTP). These carriers then feed the electron transport chain to drive ATP synthesis. The cycle also acts as a biosynthetic crossroads, providing carbon skeletons for amino acids, porphyrins, and gluconeogenesis.",
        whyItMatters: "Understanding the Krebs cycle is essential for making sense of metabolic diseases, nutritional biochemistry, and cancer biology. The cycle is disrupted in mitochondrial diseases, exploited differently in cancer cells (Warburg effect), and is the target of several metabolic poisons and emerging anticancer drugs. Virtually every macronutrient — carbohydrate, fat, and protein — converges on this cycle.",
        bigPicture: "The Krebs cycle is not a one-way generator of ATP — it is a cyclic amplifier and distributor of carbon and energy. It turns over continuously, regenerating oxaloacetate with each revolution. Its products (NADH and FADH₂) feed oxidative phosphorylation, its intermediates are drawn off for biosynthesis (anaplerosis refills them), and its regulation is exquisitely tuned to the cell's energy state.",
        priorKnowledge: [
            "Glycolysis: conversion of glucose to pyruvate",
            "Mitochondrial structure: matrix, inner membrane, cristae",
            "Redox chemistry: oxidation, reduction, electron carriers (NAD⁺/NADH, FAD/FADH₂)",
            "Coenzyme A structure and thioester bond chemistry",
            "Basic thermodynamics: exergonic vs endergonic reactions, ΔG"
        ],
        topicRoadmap: [
            "Entry into the cycle: pyruvate decarboxylation and acetyl-CoA formation",
            "The eight steps of the Krebs cycle: substrates, products, enzymes, and cofactors",
            "Energy accounting: NADH, FADH₂, GTP yield per turn",
            "Regulation: allosteric control of the three key enzymes",
            "Amphibolic nature: catabolism and anabolism via anaplerosis",
            "Connections to glycolysis, oxidative phosphorylation, amino acid metabolism, and lipid metabolism",
            "Clinical relevance: mitochondrial disorders, the Warburg effect, and metabolic poisons"
        ]
    },

    concepts: [
        "The Krebs cycle oxidises acetyl-CoA to CO₂, capturing energy as NADH, FADH₂, and GTP",
        "Acetyl-CoA enters the cycle by condensing with oxaloacetate to form citrate",
        "Each turn of the cycle produces 3 NADH, 1 FADH₂, 1 GTP, and 2 CO₂",
        "The cycle is regulated at three irreversible steps by energy status and product inhibition",
        "The cycle is amphibolic — it serves both catabolic and anabolic functions",
        "The cycle provides biosynthetic precursors for amino acids, fatty acids, and haem"
    ],

    theory: "The Krebs cycle is a series of eight enzyme-catalysed reactions in the mitochondrial matrix that regenerate oxaloacetate while oxidising a two-carbon acetyl group to two molecules of CO₂. It is the final common pathway for the oxidation of all fuel molecules and the central supplier of biosynthetic intermediates.",

    keyDefinitions: {
        "Krebs Cycle": "Cyclic series of eight reactions in the mitochondrial matrix oxidising acetyl-CoA to CO₂ and capturing energy as NADH, FADH₂, and GTP",
        "Acetyl-CoA": "Two-carbon acetyl group linked to coenzyme A via a high-energy thioester bond; the universal entry substrate for the cycle",
        "Oxaloacetate (OAA)": "Four-carbon dicarboxylate regenerated at the end of each cycle turn; condenses with acetyl-CoA to begin the next turn",
        "Citrate": "Six-carbon tricarboxylate formed by condensation of acetyl-CoA and oxaloacetate; first intermediate of the cycle",
        "NADH": "Reduced electron carrier; produced at three steps in the cycle; feeds electrons to Complex I of the electron transport chain",
        "FADH₂": "Reduced electron carrier; produced at one step (succinate dehydrogenase); feeds electrons to Complex II",
        "GTP": "Nucleotide produced by substrate-level phosphorylation at the succinyl-CoA synthetase step; equivalent to ATP in energy",
        "Anaplerosis": "Reactions that replenish Krebs cycle intermediates drawn off for biosynthesis",
        "Amphibolic Pathway": "Pathway serving both catabolic (energy-releasing) and anabolic (biosynthetic) functions",
        "Pyruvate Dehydrogenase Complex (PDC)": "Multi-enzyme complex converting pyruvate to acetyl-CoA and CO₂; irreversible committed step linking glycolysis to the Krebs cycle",
        "Substrate-level Phosphorylation": "Direct synthesis of GTP (or ATP) from a substrate without the electron transport chain",
        "α-Ketoglutarate (α-KG)": "Five-carbon intermediate; analogous to pyruvate dehydrogenase step; converted to succinyl-CoA with CO₂ release and NADH production"
    },

    mechanismOfAction: {
        pyruvateDehydrogenaseComplex: {
            location: "Mitochondrial matrix (inner membrane-associated)",
            reaction: "Pyruvate + CoA + NAD⁺ → Acetyl-CoA + CO₂ + NADH",
            components: ["E1: pyruvate decarboxylase (TPP cofactor)", "E2: dihydrolipoamide acetyltransferase (lipoamide cofactor)", "E3: dihydrolipoamide dehydrogenase (FAD cofactor)"],
            regulation: {
                inhibitors: ["Acetyl-CoA (product)", "NADH (product)", "ATP (high energy signal)", "PDC kinase (phosphorylates and inactivates E1)"],
                activators: ["CoA", "NAD⁺", "AMP", "PDC phosphatase (removes phosphate, activates E1)"]
            },
            irreversibility: "Highly exergonic (ΔG° = −33.4 kJ/mol); commits carbon to oxidation — cannot be reversed to regenerate pyruvate in animals"
        },
        cycleSteps: {
            step1: {
                name: "Citrate Synthase",
                reaction: "Oxaloacetate + Acetyl-CoA → Citrate + CoA",
                carbons: "4C + 2C → 6C",
                cofactors: "None (water used)",
                energetics: "Highly exergonic (ΔG° = −32.2 kJ/mol); irreversible",
                regulation: "Inhibited by NADH, succinyl-CoA, citrate (product), and ATP"
            },
            step2: {
                name: "Aconitase",
                reaction: "Citrate → Isocitrate (via cis-aconitate)",
                carbons: "6C → 6C",
                cofactors: "Iron-sulfur cluster [4Fe-4S]",
                energetics: "Near equilibrium; reversible",
                note: "Isomerisation — rearranges OH group for subsequent oxidation"
            },
            step3: {
                name: "Isocitrate Dehydrogenase",
                reaction: "Isocitrate + NAD⁺ → α-Ketoglutarate + CO₂ + NADH",
                carbons: "6C → 5C",
                cofactors: "NAD⁺, Mn²⁺",
                energetics: "Irreversible; first CO₂ released",
                regulation: "Activated by ADP, Ca²⁺; inhibited by NADH, ATP"
            },
            step4: {
                name: "α-Ketoglutarate Dehydrogenase Complex",
                reaction: "α-Ketoglutarate + CoA + NAD⁺ → Succinyl-CoA + CO₂ + NADH",
                carbons: "5C → 4C",
                cofactors: "TPP, lipoamide, FAD, CoA, NAD⁺",
                energetics: "Irreversible; second CO₂ released",
                regulation: "Inhibited by succinyl-CoA (product), NADH, ATP; structurally analogous to PDC"
            },
            step5: {
                name: "Succinyl-CoA Synthetase",
                reaction: "Succinyl-CoA + GDP + Pᵢ → Succinate + GTP + CoA",
                carbons: "4C → 4C",
                cofactors: "GDP/GTP",
                energetics: "Substrate-level phosphorylation — only GTP produced in the cycle",
                note: "In heart and skeletal muscle, ATP is produced directly instead of GTP"
            },
            step6: {
                name: "Succinate Dehydrogenase",
                reaction: "Succinate + FAD → Fumarate + FADH₂",
                carbons: "4C → 4C",
                cofactors: "FAD (covalently bound), iron-sulfur clusters",
                energetics: "Only step embedded in the inner mitochondrial membrane; feeds electrons directly to Complex II",
                note: "Competitively inhibited by malonate (structural analogue of succinate)"
            },
            step7: {
                name: "Fumarase (Fumarate Hydratase)",
                reaction: "Fumarate + H₂O → Malate",
                carbons: "4C → 4C",
                cofactors: "None",
                energetics: "Near equilibrium; stereospecific — produces only L-malate",
                note: "Stereospecificity demonstrates enzyme precision; only the L-isomer is accepted"
            },
            step8: {
                name: "Malate Dehydrogenase",
                reaction: "Malate + NAD⁺ → Oxaloacetate + NADH",
                carbons: "4C → 4C",
                cofactors: "NAD⁺",
                energetics: "Endergonic (ΔG° = +29.7 kJ/mol); driven forward by OAA removal via citrate synthase",
                note: "Regenerates oxaloacetate; completes the cycle; equilibrium strongly favours malate but OAA is pulled toward citrate synthesis"
            }
        }
    },

    energyAccounting: {
        perTurn: {
            NADH: 3,
            FADH2: 1,
            GTP: 1,
            CO2: 2,
            note: "Per acetyl-CoA (= per turn of cycle)"
        },
        perGlucose: {
            NADH_krebs: 6,
            FADH2_krebs: 2,
            GTP_krebs: 2,
            CO2_krebs: 4,
            note: "Two turns per glucose (two pyruvates → two acetyl-CoA)"
        },
        perPyruvate: {
            NADH_PDC: 1,
            CO2_PDC: 1,
            note: "Pyruvate dehydrogenase step (before cycle entry)"
        },
        ATPEquivalents: {
            NADH_yield: "~2.5 ATP each via Complex I → III → IV",
            FADH2_yield: "~1.5 ATP each via Complex II → III → IV",
            GTP_yield: "1 ATP equivalent directly",
            totalPerTurn: "~10 ATP equivalents per acetyl-CoA"
        }
    },

    regulation: {
        overview: "The cycle is regulated primarily at its three irreversible steps. Regulation is product inhibition and energy-charge dependent — high NADH, ATP, and succinyl-CoA signal energy sufficiency and slow the cycle; high ADP, AMP, NAD⁺, and Ca²⁺ signal energy demand and accelerate it.",
        citrateSynthase: {
            inhibitors: ["NADH", "ATP", "Succinyl-CoA", "Citrate (product inhibition)"],
            activators: ["OAA (substrate)", "Acetyl-CoA (substrate)"],
            rationale: "Gate-keeper of cycle entry; when products accumulate, flux is throttled at the first irreversible step"
        },
        isocitrateDehydrogenase: {
            inhibitors: ["NADH", "ATP"],
            activators: ["ADP", "Ca²⁺", "NAD⁺"],
            rationale: "Pace-setter of oxidative flux; Ca²⁺ activation links cycle rate to muscle contraction and increased ATP demand"
        },
        alphaKetoglutarateDehydrogenase: {
            inhibitors: ["Succinyl-CoA (product)", "NADH", "ATP"],
            activators: ["Ca²⁺", "AMP"],
            rationale: "Analogous to PDC; its inhibition by succinyl-CoA prevents cycle overrun and coordinates with downstream steps"
        },
        pyruvateDehydrogenaseComplex: {
            inhibitors: ["Acetyl-CoA", "NADH", "ATP", "PDC kinase"],
            activators: ["CoA", "NAD⁺", "AMP", "PDC phosphatase", "Ca²⁺"],
            rationale: "Controls carbon entry into the cycle from glycolysis; regulated by both allosteric effectors and reversible phosphorylation"
        }
    },

    amphibolicNature: {
        catabolism: "Oxidises acetyl-CoA from carbohydrates, fatty acids, and amino acids to CO₂; produces NADH and FADH₂ for ATP synthesis",
        anabolism: {
            oxaloacetate: "Precursor for gluconeogenesis (via PEP carboxykinase) and aspartate synthesis",
            alphaKetoglutarate: "Precursor for glutamate and glutamine synthesis",
            succinylCoA: "Precursor for haem (porphyrin) synthesis and ketone body utilisation",
            citrate: "Exported to cytoplasm for fatty acid and cholesterol synthesis",
            fumarate: "Links to urea cycle (argininosuccinate lyase produces fumarate)"
        },
        anaplerosis: {
            definition: "Reactions that replenish cycle intermediates drawn off for biosynthesis",
            examples: [
                "Pyruvate carboxylase: Pyruvate + CO₂ + ATP → Oxaloacetate (most important anaplerotic reaction)",
                "Glutamate dehydrogenase: Glutamate → α-Ketoglutarate + NH₄⁺",
                "Propionyl-CoA carboxylase: odd-chain fatty acids → Succinyl-CoA",
                "Transamination: amino acids → cycle intermediates (α-keto acids)"
            ]
        }
    },

    clinicalConnections: {
        thiamineDeficiency: {
            condition: "Beriberi / Wernicke-Korsakoff syndrome",
            mechanism: "Thiamine (vitamin B₁) is a cofactor for PDC and α-KG dehydrogenase; deficiency impairs both, blocking cycle entry and flux",
            consequence: "Lactic acidosis (pyruvate accumulates), neurological damage (brain depends heavily on glucose oxidation)"
        },
        arsenicPoisoning: {
            mechanism: "Arsenite inhibits lipoamide-containing enzyme complexes (PDC and α-KG dehydrogenase) by binding to the dithiol groups of lipoamide",
            consequence: "Blocks cycle entry and the α-KG oxidation step; ATP production collapses"
        },
        warbergEffect: {
            description: "Cancer cells preferentially use aerobic glycolysis even in the presence of oxygen, exporting lactate",
            mechanism: "Upregulation of glucose transporters and glycolytic enzymes; downregulation of PDC activity (via PDC kinase); diversion of cycle intermediates toward biosynthesis",
            relevance: "Provides biosynthetic precursors (OAA → aspartate; citrate → fatty acids; α-KG → glutamine) for rapidly proliferating cells"
        },
        IDH_mutations: {
            condition: "IDH1/IDH2 mutations in glioma and AML",
            mechanism: "Mutant isocitrate dehydrogenase produces 2-hydroxyglutarate (2-HG) instead of α-KG; 2-HG inhibits α-KG-dependent dioxygenases (TET enzymes, histone demethylases)",
            consequence: "Epigenetic dysregulation, impaired differentiation, and oncogenesis"
        },
        MELAS: {
            condition: "Mitochondrial Encephalomyopathy, Lactic Acidosis, and Stroke-like episodes",
            mechanism: "Mitochondrial DNA mutations impair the electron transport chain; NADH from the Krebs cycle cannot be reoxidised; NAD⁺ becomes limiting; cycle slows",
            consequence: "Energy failure in high-demand tissues (brain, muscle); lactic acidosis from pyruvate diversion to lactate"
        }
    },

    topicSummary: {
        coreInsights: [
            "The Krebs cycle is a cyclic pathway — oxaloacetate is both consumed at step 1 and regenerated at step 8, making the net input only acetyl-CoA and the net outputs CO₂, NADH, FADH₂, and GTP.",
            "Each turn produces 3 NADH, 1 FADH₂, 1 GTP, and 2 CO₂ — but produces zero ATP directly; all ATP comes via the electron transport chain using the electron carriers.",
            "The two carbons entering as acetyl-CoA are NOT the same two carbons released as CO₂ in the same turn — carbon tracking shows they are released in subsequent turns.",
            "The cycle is regulated by energy charge at three irreversible steps: citrate synthase, isocitrate dehydrogenase, and α-KG dehydrogenase — all inhibited by high NADH and ATP.",
            "Pyruvate dehydrogenase complex is not part of the cycle but is regulated identically — it is the committed, irreversible gateway from glycolysis into the cycle.",
            "The cycle is amphibolic — it simultaneously catabolises fuel and provides biosynthetic precursors. Anaplerotic reactions maintain intermediate levels when intermediates are withdrawn.",
            "Succinate dehydrogenase is unique: it is the only Krebs cycle enzyme embedded in the inner mitochondrial membrane and doubles as Complex II of the electron transport chain.",
            "Clinical relevance is immense: thiamine deficiency, arsenic poisoning, IDH mutations in cancer, and the Warburg effect all directly impair cycle function."
        ],
        keyReactions: {
            PDC: "Pyruvate + CoA + NAD⁺ → Acetyl-CoA + CO₂ + NADH",
            citrateSynthase: "OAA + Acetyl-CoA → Citrate + CoA",
            isocitrateDehydrogenase: "Isocitrate + NAD⁺ → α-KG + CO₂ + NADH",
            alphaKGDehydrogenase: "α-KG + CoA + NAD⁺ → Succinyl-CoA + CO₂ + NADH",
            succinylCoASynthetase: "Succinyl-CoA + GDP + Pᵢ → Succinate + GTP + CoA",
            succinateDehydrogenase: "Succinate + FAD → Fumarate + FADH₂",
            fumarase: "Fumarate + H₂O → L-Malate",
            malateDehydrogenase: "Malate + NAD⁺ → OAA + NADH"
        },
        energySummaryTable: {
            headers: ["Step", "Enzyme", "Cofactor reduced", "Product"],
            rows: [
                ["PDC (entry)", "Pyruvate dehydrogenase complex", "NAD⁺ → NADH", "Acetyl-CoA, CO₂"],
                ["Step 3", "Isocitrate dehydrogenase", "NAD⁺ → NADH", "α-KG, CO₂"],
                ["Step 4", "α-KG dehydrogenase", "NAD⁺ → NADH", "Succinyl-CoA, CO₂"],
                ["Step 5", "Succinyl-CoA synthetase", "GDP → GTP", "Succinate"],
                ["Step 6", "Succinate dehydrogenase", "FAD → FADH₂", "Fumarate"],
                ["Step 8", "Malate dehydrogenase", "NAD⁺ → NADH", "OAA"]
            ]
        },
        commonMistakesToAvoid: [
            "The cycle does NOT produce ATP directly — only GTP (one per turn) via substrate-level phosphorylation; all ATP comes from the electron transport chain",
            "Acetyl-CoA carbons are NOT the CO₂ carbons released in the same turn — they are incorporated into the cycle skeleton and released in subsequent turns",
            "The cycle occurs in the mitochondrial matrix, NOT the cytoplasm — students confuse this with glycolysis",
            "NAD⁺ and FAD are coenzymes that must be regenerated by the electron transport chain — without oxygen, they cannot be reoxidised and the cycle halts",
            "Succinate dehydrogenase uses FAD, not NAD⁺ — because succinate oxidation to fumarate releases insufficient energy to reduce NAD⁺",
            "Oxaloacetate is NOT consumed net — it is regenerated each turn; only acetyl-CoA is consumed net"
        ],
        connections: [
            "Glycolysis: pyruvate feeds into PDC → cycle; glucose oxidation is only complete when the cycle runs",
            "Oxidative phosphorylation: NADH and FADH₂ from the cycle donate electrons to Complexes I and II respectively",
            "Fatty acid oxidation: β-oxidation produces acetyl-CoA that directly enters the cycle",
            "Amino acid catabolism: carbon skeletons of most amino acids enter the cycle as α-KG, OAA, succinyl-CoA, fumarate, or acetyl-CoA",
            "Urea cycle: fumarate links the Krebs and urea cycles (Krebs bicycle)",
            "Gluconeogenesis: OAA from the cycle is a precursor for glucose synthesis"
        ],
        examReadinessChecklist: [
            "Can you draw all eight steps with enzyme names, substrates, products, and cofactors from memory?",
            "Can you identify which steps produce NADH, FADH₂, and GTP?",
            "Can you explain why the cycle halts under anaerobic conditions?",
            "Can you predict the effect of each regulatory allosteric effector on cycle flux?",
            "Can you name four biosynthetic pathways that draw intermediates from the cycle?",
            "Can you explain why acetyl-CoA carbons are not released as CO₂ in the same turn they enter?"
        ]
    }
},

energyCoupling: {
    title: "Energy Coupling and ATP: The Currency of Cellular Work",

    databaseLinks: {
        misconceptions: [
            'atpStructureAndHydrolysis',
            'gibbsFreeEnergy',
            'couplingMechanism',
            'oxidativePhosphorylation',
            'substratePhosphorylation'
        ],
        contextualScenarios: [
            'atpStructureAndHydrolysis',
            'gibbsFreeEnergy',
            'couplingMechanism',
            'oxidativePhosphorylation'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'models',
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
            'atpStructureAndHydrolysis',
            'gibbsFreeEnergy',
            'couplingMechanism',
            'oxidativePhosphorylation'
        ]
    },

    conceptLinks: {
        "ATP is the universal energy currency of the cell": {
            misconceptions:      ['atpStructureAndHydrolysis'],
            scenarios:           ['atpStructureAndHydrolysis'],
            studyTips:           ['diagrams', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['atpStructureAndHydrolysis']
        },
        "Gibbs free energy determines reaction spontaneity": {
            misconceptions:      ['gibbsFreeEnergy'],
            scenarios:           ['gibbsFreeEnergy'],
            studyTips:           ['diagrams', 'comparisonTables', 'practiceRoutines'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['gibbsFreeEnergy']
        },
        "Endergonic reactions are driven by coupling to ATP hydrolysis": {
            misconceptions:      ['couplingMechanism', 'atpStructureAndHydrolysis'],
            scenarios:           ['couplingMechanism'],
            studyTips:           ['diagrams', 'comparisonTables', 'mnemonics'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['couplingMechanism']
        },
        "The proton gradient drives ATP synthesis via chemiosmosis": {
            misconceptions:      ['oxidativePhosphorylation'],
            scenarios:           ['oxidativePhosphorylation'],
            studyTips:           ['diagrams', 'models', 'dissectionAndExperiment'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['oxidativePhosphorylation']
        },
        "Substrate-level and oxidative phosphorylation produce ATP by different mechanisms": {
            misconceptions:      ['substratePhosphorylation', 'oxidativePhosphorylation'],
            scenarios:           ['oxidativePhosphorylation'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['atpStructureAndHydrolysis', 'oxidativePhosphorylation']
        }
    },

    // ── LAYER 2: TOPIC FRAMING ────────────────────────────────────────────────

    topicIntroduction: {
        overview: "Energy coupling is the fundamental principle by which cells harness the energy released from spontaneous (exergonic) reactions to drive non-spontaneous (endergonic) reactions. At the centre of this system sits ATP — adenosine triphosphate — the universal energy currency of all living cells. Every muscle contraction, every biosynthesis reaction, every active transport event is paid for in ATP. In this lesson, we explore how ATP stores and releases energy, how cells regenerate ATP, and how Gibbs free energy governs whether reactions are thermodynamically possible.",
        whyItMatters: "Without energy coupling, anabolic reactions — building proteins, copying DNA, pumping ions — could not proceed spontaneously. Life maintains order in a universe tending toward disorder only because it continuously couples energy-releasing reactions to energy-requiring ones. Understanding this principle explains every metabolic pathway, every drug that targets metabolism, and every disease caused by mitochondrial dysfunction.",
        bigPicture: "The cell operates as an energy transducer: chemical energy in glucose → ATP → mechanical, chemical, osmotic, and electrical work. The coupling mechanism is not abstract chemistry — it is physically enacted by enzymes that bind both the energy-releasing and energy-requiring reactants simultaneously, ensuring that energy released in one step is captured and used in the next.",
        priorKnowledge: [
            "Basic thermodynamics: enthalpy, entropy, and Gibbs free energy (ΔG)",
            "Chemical reactions: exergonic vs endergonic, reaction spontaneity",
            "Cell biology: mitochondria structure — inner membrane, matrix, cristae",
            "Oxidation and reduction: electron transfer, redox couples",
            "Enzyme function: how enzymes lower activation energy"
        ],
        topicRoadmap: [
            "ATP structure: adenine + ribose + three phosphate groups; the role of the high-energy phosphoanhydride bond",
            "Gibbs free energy: ΔG, ΔG°', spontaneity, and the relationship to equilibrium",
            "ATP hydrolysis: ΔG°' = −30.5 kJ/mol and why ATP occupies the middle of the phosphoryl transfer potential scale",
            "Energy coupling: how exergonic ATP hydrolysis is used to drive endergonic reactions",
            "Substrate-level phosphorylation: direct ATP synthesis by phosphate transfer",
            "Oxidative phosphorylation: electron transport chain, proton gradient, and ATP synthase (chemiosmosis)",
            "ATP yield from glucose: integration of glycolysis, TCA cycle, and oxidative phosphorylation",
            "Medical and pharmacological relevance: mitochondrial uncouplers, ATP synthase inhibitors"
        ]
    },

    // ── LAYER 3: CORE LESSON CONTENT ─────────────────────────────────────────

    concepts: [
        "ATP is the universal energy currency of the cell",
        "Gibbs free energy determines reaction spontaneity",
        "ATP hydrolysis is highly exergonic (ΔG°' = −30.5 kJ/mol)",
        "Endergonic reactions are driven by coupling to ATP hydrolysis",
        "The proton gradient drives ATP synthesis via chemiosmosis",
        "Substrate-level and oxidative phosphorylation produce ATP by different mechanisms"
    ],

    theory: "Energy coupling is the thermodynamic principle by which free energy released from exergonic reactions (primarily ATP hydrolysis) is used to drive endergonic reactions, enabling cells to perform work and maintain order against the Second Law of Thermodynamics.",

    keyDefinitions: {
        "ATP (Adenosine Triphosphate)": "Universal energy carrier; hydrolysis releases ~30.5 kJ/mol under standard conditions",
        "ADP (Adenosine Diphosphate)": "Product of ATP hydrolysis; recharged to ATP by phosphorylation",
        "Phosphoanhydride Bond": "High-energy bond between the β and γ phosphate groups of ATP",
        "Gibbs Free Energy (ΔG)": "Energy available to do work; negative ΔG = spontaneous reaction",
        "ΔG°' (Standard Free Energy Change)": "ΔG measured at pH 7, 25°C, 1 M concentrations — biochemical standard",
        "Exergonic Reaction": "Spontaneous reaction; ΔG < 0; releases free energy",
        "Endergonic Reaction": "Non-spontaneous reaction; ΔG > 0; requires free energy input",
        "Energy Coupling": "Linkage of exergonic and endergonic reactions so energy from one drives the other",
        "Phosphoryl Transfer Potential": "Tendency of a compound to donate its phosphate group; ATP occupies a middle position",
        "Substrate-Level Phosphorylation": "ATP synthesis by direct transfer of phosphate from a substrate to ADP",
        "Oxidative Phosphorylation": "ATP synthesis driven by the proton gradient generated by the electron transport chain",
        "Chemiosmosis": "ATP synthesis powered by proton flow down an electrochemical gradient through ATP synthase",
        "Proton Motive Force (PMF)": "Electrochemical gradient across the inner mitochondrial membrane; sum of ΔpH and Δψ",
        "ATP Synthase (Complex V)": "Molecular machine that uses proton flow to phosphorylate ADP to ATP",
        "Uncoupler": "Compound that dissipates the proton gradient without generating ATP (e.g. DNP, thermogenin)"
    },

    atpStructure: {
        components: {
            adenine: "Nitrogenous base (purine)",
            ribose: "Five-carbon sugar",
            phosphates: "Three phosphate groups (α, β, γ) — the triphosphate tail"
        },
        highEnergyBond: {
            location: "Phosphoanhydride bonds between β-γ and α-β phosphates",
            whyHighEnergy: [
                "Resonance stabilisation of products (Pi and ADP) is greater than in ATP",
                "Electrostatic repulsion between negatively charged phosphate groups in ATP is relieved on hydrolysis",
                "Products are better solvated (hydration stabilisation) than ATP"
            ],
            note: "The bond itself is not unusually strong — it is the stability of the products relative to ATP that releases energy"
        },
        hydrolysis: {
            reaction: "ATP + H₂O → ADP + Pi",
            deltaGStandard: "ΔG°' = −30.5 kJ/mol",
            deltaGCellular: "ΔG ≈ −50 to −60 kJ/mol (due to low [ADP], low [Pi], high [ATP] in vivo)",
            note: "Cellular conditions make ATP hydrolysis significantly more exergonic than the standard value"
        },
        phosphorylTransferScale: {
            highPotential: "Phosphoenolpyruvate (PEP): ΔG°' = −61.9 kJ/mol",
            atpPosition: "ATP: ΔG°' = −30.5 kJ/mol (middle)",
            lowPotential: "Glucose-6-phosphate: ΔG°' = −13.8 kJ/mol",
            significance: "ATP can accept phosphate from PEP and donate it to glucose — its intermediate position makes it a universal phosphoryl carrier"
        }
    },

    gibbsFreeEnergy: {
        equation: "ΔG = ΔH − TΔS",
        biochemicalStandard: "ΔG°' defined at pH 7, 25°C, 1 atm, all solutes at 1 M (except H₂O and H⁺)",
        spontaneity: {
            negative: "ΔG < 0 → exergonic → spontaneous (can do work)",
            zero: "ΔG = 0 → system at equilibrium → no net work",
            positive: "ΔG > 0 → endergonic → non-spontaneous (requires energy input)"
        },
        relationship_to_equilibrium: {
            equation: "ΔG°' = −RT ln Keq",
            interpretation: "Keq > 1 → ΔG°' < 0 → products favoured at equilibrium",
            note: "ΔG°' tells you the direction at standard conditions; ΔG tells you the direction under actual cellular conditions"
        },
        additiveCoupling: {
            principle: "ΔG values are additive for coupled reactions",
            example: "Glucose + Pi → Glucose-6-P (ΔG°' = +13.8 kJ/mol) COUPLED WITH ATP → ADP + Pi (ΔG°' = −30.5 kJ/mol) → Net ΔG°' = −16.7 kJ/mol (spontaneous)"
        }
    },

    energyCouplingMechanism: {
        principle: "Cells couple endergonic reactions to ATP hydrolysis so the combined ΔG is negative, making the overall process spontaneous",
        mechanisticBasis: {
            enzymeMediated: "The coupling enzyme binds both substrates simultaneously — energy transfer occurs within the enzyme active site, not in free solution",
            phosphorylatedIntermediate: "Often a phosphorylated enzyme or substrate intermediate is formed, storing the phosphoryl group temporarily before transfer to the final acceptor",
            notDirectTransfer: "Energy is not released as heat and then recaptured — it is transferred directly within the enzyme, which is why coupling is efficient"
        },
        examples: [
            {
                reaction: "Glutamine synthesis",
                endergonic: "Glutamate + NH₃ → Glutamine (ΔG°' = +14.2 kJ/mol)",
                coupled: "ATP → ADP + Pi (ΔG°' = −30.5 kJ/mol)",
                net: "ΔG°' = −16.3 kJ/mol (spontaneous)",
                mechanism: "Glutamine synthetase first phosphorylates glutamate using ATP, forming γ-glutamyl phosphate intermediate, then NH₃ attacks the intermediate"
            },
            {
                reaction: "Muscle contraction",
                endergonic: "Myosin conformational change against load (ΔG > 0)",
                coupled: "ATP hydrolysis by myosin ATPase",
                net: "Net ΔG < 0 — contraction proceeds",
                mechanism: "ATP binding releases myosin from actin; hydrolysis to ADP + Pi cocks the myosin head; Pi release triggers the power stroke"
            },
            {
                reaction: "Active transport (Na⁺/K⁺-ATPase)",
                endergonic: "Moving Na⁺ out and K⁺ in against concentration gradients",
                coupled: "ATP hydrolysis",
                net: "Each cycle moves 3 Na⁺ out and 2 K⁺ in using 1 ATP",
                mechanism: "Phosphorylation of the pump protein causes conformational change that alternately exposes binding sites to each side of the membrane"
            }
        ],
        atpAsDG: {
            description: "ATP does not 'contain' energy like a battery — it is a phosphoryl group donor whose transfer to acceptors drives endergonic reactions",
            currency_analogy: "ATP is like currency: it does not inherently have value, but it can be exchanged for work in the right context (the enzyme active site)"
        }
    },

    atpSynthesis: {
        substrateLevelPhosphorylation: {
            definition: "Direct phosphate transfer from a high-energy substrate to ADP, producing ATP without an electron transport chain",
            examples: [
                "Phosphoglycerate kinase: 1,3-bisphosphoglycerate + ADP → 3-phosphoglycerate + ATP (glycolysis step 7)",
                "Pyruvate kinase: phosphoenolpyruvate + ADP → pyruvate + ATP (glycolysis step 10)",
                "Succinyl-CoA synthetase: succinyl-CoA + GDP → succinate + GTP (TCA cycle)"
            ],
            yield: "2 ATP per glucose in glycolysis; 1 GTP per acetyl-CoA in TCA cycle",
            advantage: "Does not require oxygen or a membrane — occurs in cytoplasm (glycolysis) and mitochondrial matrix (TCA)"
        },
        oxidativePhosphorylation: {
            location: "Inner mitochondrial membrane",
            overview: "NADH and FADH₂ donate electrons to the electron transport chain (ETC); electron flow drives proton pumping; proton gradient drives ATP synthase",
            electronTransportChain: {
                complexI: "NADH dehydrogenase — oxidises NADH, pumps 4H⁺",
                complexII: "Succinate dehydrogenase — oxidises FADH₂, does NOT pump protons",
                complexIII: "Cytochrome bc₁ complex — transfers electrons from ubiquinol to cytochrome c, pumps 4H⁺",
                complexIV: "Cytochrome c oxidase — reduces O₂ to H₂O, pumps 2H⁺",
                ubiquinone: "Mobile electron carrier between Complexes I/II and III",
                cytochromeC: "Mobile electron carrier between Complexes III and IV"
            },
            protonMotiveForce: {
                components: "ΔpH (chemical gradient) + Δψ (electrical gradient, inside negative)",
                direction: "Protons pumped from matrix to intermembrane space; flow back through ATP synthase",
                magnitude: "~200 mV across inner mitochondrial membrane"
            },
            atpSynthase: {
                structure: "F₀ subunit (membrane-embedded, proton channel) + F₁ subunit (catalytic, matrix-facing)",
                mechanism: "Proton flow through F₀ rotates the γ subunit of F₁; rotation causes conformational changes in β subunits cycling through Open → Loose → Tight states (binding change mechanism)",
                stoichiometry: "~2.7 H⁺ per ATP (theoretical); ~3 H⁺ per ATP (practical estimate used in calculations)",
                inhibitors: "Oligomycin blocks F₀ channel; prevents ATP synthesis and proton flow"
            },
            uncouplers: {
                mechanism: "Carry protons across the inner membrane independently of ATP synthase, dissipating the gradient as heat",
                examples: [
                    "2,4-dinitrophenol (DNP): lipid-soluble proton carrier; used as a weight-loss drug in the 1930s (lethal in excess)",
                    "Thermogenin (UCP1): natural uncoupler in brown adipose tissue; generates body heat in newborns and hibernating animals"
                ],
                effect: "O₂ consumption continues (ETC still runs); ATP synthesis stops; energy released as heat"
            },
            protonPumping_summary: {
                NADH: "10 H⁺ pumped per NADH (Complexes I + III + IV)",
                FADH2: "6 H⁺ pumped per FADH₂ (Complexes III + IV only — bypasses Complex I)"
            }
        }
    },

    atpYieldFromGlucose: {
        overview: "Complete oxidation of one glucose molecule (C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O) yields approximately 30–32 ATP under physiological conditions",
        breakdown: {
            glycolysis: {
                location: "Cytoplasm",
                substrateATP: 2,
                NADH: "2 NADH (cytoplasmic — yield depends on shuttle used: ~1.5 or ~2.5 ATP each)",
                net: "2 ATP (substrate-level) + ~3–5 ATP (from NADH via malate-aspartate or glycerol-3-phosphate shuttle)"
            },
            pyruvateDecarboxylation: {
                location: "Mitochondrial matrix",
                NADH: "2 NADH → ~5 ATP",
                net: "~5 ATP"
            },
            TCA_cycle: {
                location: "Mitochondrial matrix",
                substrateGTP: 2,
                NADH: "6 NADH → ~15 ATP",
                FADH2: "2 FADH₂ → ~3 ATP",
                net: "2 GTP + ~18 ATP"
            },
            total: "~30–32 ATP per glucose (modern revised estimate; older textbooks cite 36–38)"
        },
        historicalNote: "The 36–38 figure assumed perfect coupling efficiency and idealised proton stoichiometry. Modern measurements of ATP synthase stoichiometry and membrane leak give ~30–32 as the physiologically accurate estimate."
    },

    applications: [
        "Mitochondrial disease: defects in ETC complexes cause ATP depletion in high-demand tissues",
        "Pharmacology: metformin inhibits Complex I (mechanism of action in type 2 diabetes)",
        "Thermogenesis: uncoupling proteins in brown adipose tissue generate heat without ATP production",
        "Sports science: understanding ATP regeneration rates limits exercise intensity",
        "Cyanide poisoning: inhibits Complex IV, preventing O₂ reduction and ATP synthesis",
        "Antibiotics: oligomycin-class compounds target ATP synthase in bacteria",
        "Weight loss pharmacology: historical use of DNP as a metabolic uncoupler"
    ],

    topicSummary: {
        coreInsights: [
            "ATP is not a store of potential energy like a compressed spring — it is a phosphoryl group donor whose transfer to acceptors within enzyme active sites drives endergonic reactions directly.",
            "The high phosphoryl transfer potential of ATP arises from the electrostatic repulsion and poor resonance stabilisation of the triphosphate group, not from an unusually weak bond.",
            "ΔG values are additive: coupling an endergonic reaction to ATP hydrolysis makes the combined ΔG negative, thermodynamically driving the endergonic process forward.",
            "In vivo, ATP hydrolysis is far more exergonic (ΔG ≈ −50 to −60 kJ/mol) than the standard value (ΔG°' = −30.5 kJ/mol) because the cell maintains ATP/ADP ratios far from equilibrium.",
            "The electron transport chain does not synthesise ATP directly — it builds a proton gradient (proton motive force) that then drives ATP synthase by chemiosmosis.",
            "FADH₂ yields less ATP than NADH because it donates electrons to Complex II, which does not pump protons, bypassing one of the three proton-pumping sites.",
            "Uncouplers are metabolic saboteurs: they dissipate the proton gradient as heat, leaving the ETC running but ATP synthase spinning unproductively.",
            "The modern ATP yield from glucose (~30–32) is lower than the classical textbook figure (36–38) because it accounts for the actual proton stoichiometry of ATP synthase and membrane proton leak."
        ],
        keyEquations: {
            gibbsFreeEnergy: "ΔG = ΔH − TΔS",
            standardFreeEnergy: "ΔG°' = −RT ln Keq",
            atpHydrolysis: "ATP + H₂O → ADP + Pi    ΔG°' = −30.5 kJ/mol",
            coupledReaction: "ΔG_net = ΔG_endergonic + ΔG_ATP hydrolysis  (must be < 0 for spontaneity)",
            protonMotiveForce: "PMF = Δψ − (2.303 RT/F) × ΔpH  ≈ 200 mV"
        },
        phosphorylationComparison: {
            substrateLevelPhosphorylation: {
                mechanism: "Direct phosphate transfer from substrate to ADP",
                location: "Cytoplasm and mitochondrial matrix",
                oxygenRequired: "No",
                yieldPerGlucose: "4 ATP (2 glycolysis + 2 TCA)"
            },
            oxidativePhosphorylation: {
                mechanism: "Proton gradient drives ATP synthase",
                location: "Inner mitochondrial membrane",
                oxygenRequired: "Yes (final electron acceptor)",
                yieldPerGlucose: "~26–28 ATP"
            }
        },
        commonMistakesToAvoid: [
            "ATP does NOT contain a 'high-energy bond' in the sense of a strong bond — the energy comes from the stability of the hydrolysis PRODUCTS, not from breaking a weak bond",
            "Uncouplers do NOT inhibit the ETC — they allow the ETC to run faster (no back-pressure) but prevent ATP synthesis",
            "FADH₂ does NOT yield the same ATP as NADH — it enters at Complex II, bypassing Complex I, producing fewer protons and less ATP",
            "The proton gradient is NOT used directly for work — it drives ATP synthase specifically, which then provides ATP for work",
            "ΔG°' and ΔG are NOT the same — cellular conditions (particularly the ATP/ADP ratio) make ΔG much more negative than ΔG°'",
            "Substrate-level phosphorylation does NOT require oxygen — it is the oxidative phosphorylation pathway that requires O₂ as the terminal electron acceptor"
        ],
        connections: [
            "Metabolism: energy coupling integrates glycolysis, TCA cycle, and oxidative phosphorylation into a unified ATP-generating system",
            "Pharmacology: Complex I inhibitors (metformin), Complex IV inhibitors (cyanide), and ATP synthase blockers (oligomycin) are all clinically or toxicologically relevant",
            "Physiology: the Na⁺/K⁺-ATPase uses ~20–40% of all cellular ATP — understanding coupling explains why neurons are so metabolically expensive",
            "Evolutionary biology: the rotary mechanism of ATP synthase is one of the most conserved molecular machines in all of life — present in bacteria, mitochondria, and chloroplasts",
            "Disease: mitochondrial dysfunction underlies Parkinson's disease, Leigh syndrome, and type 2 diabetes — all ultimately failures of energy coupling"
        ],
        examReadinessChecklist: [
            "Can you draw ATP and label the phosphoanhydride bonds and explain why hydrolysis is exergonic?",
            "Can you calculate the net ΔG°' of a coupled reaction and determine whether it is spontaneous?",
            "Can you trace an electron from NADH through all four ETC complexes to O₂, naming each carrier?",
            "Can you explain why FADH₂ produces less ATP than NADH?",
            "Can you explain how an uncoupler works and predict its effects on O₂ consumption and ATP yield?",
            "Can you distinguish substrate-level from oxidative phosphorylation with an example of each?"
        ]
    }
},


const EndSection10 = "close"