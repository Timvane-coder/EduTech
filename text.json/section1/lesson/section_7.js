

plantAdaptations: {
    title: "Plant Adaptations: Structural, Physiological, and Behavioural Responses to Environment",

    databaseLinks: {
        misconceptions: [
            'plantStructure',
            'photosynthesisAdaptations',
            'waterTransport',
            'xerophytes',
            'tropisms'
        ],
        contextualScenarios: [
            'plantStructure',
            'photosynthesisAdaptations',
            'waterTransport',
            'xerophytes'
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
            'plantStructure',
            'photosynthesisAdaptations',
            'waterTransport',
            'xerophytes'
        ]
    },

    conceptLinks: {
        "Plants adapt structurally to maximise light capture and gas exchange": {
            misconceptions:      ['plantStructure'],
            scenarios:           ['plantStructure'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['plantStructure']
        },
        "Photosynthetic adaptations vary with light intensity and CO2 availability": {
            misconceptions:      ['photosynthesisAdaptations'],
            scenarios:           ['photosynthesisAdaptations'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['photosynthesisAdaptations']
        },
        "Water transport depends on cohesion-tension and osmotic gradients": {
            misconceptions:      ['waterTransport'],
            scenarios:           ['waterTransport'],
            studyTips:           ['specimens', 'flashcards'],
            assessmentRubrics:   ['understand', 'apply'],
            assessmentQuestions: ['waterTransport']
        },
        "Xerophytes reduce water loss through structural and physiological modifications": {
            misconceptions:      ['xerophytes'],
            scenarios:           ['xerophytes'],
            studyTips:           ['diagrams', 'comparisonTables', 'practiceRoutines', 'dissectionAndExperiment'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['xerophytes']
        },
        "Tropisms and nastic responses allow plants to respond to environmental stimuli": {
            misconceptions:      ['tropisms'],
            scenarios:           ['plantStructure'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['plantStructure']
        }
    },

    topicIntroduction: {
        overview: "Plants are sessile organisms — they cannot move away from adverse conditions. Every structural feature, from the arrangement of mesophyll cells to the waxy cuticle of a desert succulent, is an adaptation refined over hundreds of millions of years of evolution. In this lesson, we explore how plants are built to capture light, manage water, transport resources, and respond to environmental stimuli — and why each adaptation is an evolutionary solution to a specific ecological challenge.",
        whyItMatters: "Understanding plant adaptations underpins agriculture, conservation biology, and climate science. Drought-resistant crops engineered using knowledge of xerophyte physiology feed millions; understanding stomatal regulation informs climate models of global water cycles; and appreciating C4 photosynthesis explains why maize and sugarcane outperform wheat in tropical agriculture.",
        bigPicture: "Every plant adaptation represents a trade-off: a wider leaf maximises light capture but risks overheating and water loss; a thick cuticle reduces water loss but impairs gas exchange. Natural selection has tuned these trade-offs differently in each ecological niche, producing the extraordinary diversity of plant form and physiology we observe today.",
        priorKnowledge: [
            "Basic cell biology: cell wall, vacuole, chloroplast, cell membrane",
            "Osmosis and diffusion: water potential, concentration gradients",
            "Photosynthesis: light-dependent and light-independent reactions, chlorophyll",
            "Basic ecology: biomes, abiotic factors, natural selection",
            "Plant cell types: parenchyma, collenchyma, sclerenchyma, xylem, phloem"
        ],
        topicRoadmap: [
            "Leaf structure as an adaptation for photosynthesis and gas exchange",
            "C3, C4, and CAM photosynthetic pathways as adaptations to different climates",
            "Water uptake, transport through xylem, and the cohesion-tension mechanism",
            "Stomatal regulation: guard cell mechanism and environmental control",
            "Xerophyte adaptations: structural and physiological responses to drought",
            "Hydrophyte adaptations: structural responses to waterlogged environments",
            "Tropisms: phototropism, gravitropism, thigmotropism — mechanism and adaptive value",
            "Nastic responses and their distinction from tropisms"
        ]
    },

    concepts: [
        "Plants adapt structurally to maximise light capture and gas exchange",
        "Photosynthetic adaptations vary with light intensity and CO2 availability",
        "Water transport depends on cohesion-tension and osmotic gradients",
        "Stomatal opening and closing is regulated by guard cell turgor",
        "Xerophytes reduce water loss through structural and physiological modifications",
        "Tropisms allow directional growth responses to environmental stimuli"
    ],

    theory: "Plant adaptations are evolutionary solutions to environmental challenges — primarily the need to maximise photosynthesis while minimising water loss, a fundamental tension that shapes every aspect of plant anatomy and physiology.",

    keyDefinitions: {
        "Adaptation": "A heritable feature that increases an organism's fitness in its environment",
        "Xerophyte": "Plant adapted to survive in low water availability environments",
        "Hydrophyte": "Plant adapted to live in waterlogged or aquatic environments",
        "Mesophyte": "Plant adapted to environments with moderate water availability",
        "Stomata": "Pores in the leaf epidermis through which gas exchange and transpiration occur",
        "Guard Cells": "Pairs of specialised cells that control stomatal aperture through turgor changes",
        "Transpiration": "Loss of water vapour from plant surfaces, primarily through stomata",
        "Cohesion-Tension": "Mechanism driving xylem water transport: water molecules cohere and are pulled upward by transpiration",
        "Water Potential (Ψ)": "Measure of the tendency of water to move; pure water = 0; solutions have negative Ψ",
        "Cuticle": "Waxy layer secreted by the epidermis that reduces water loss",
        "Trichomes": "Hair-like epidermal outgrowths that trap humid air and reflect light",
        "CAM Photosynthesis": "Crassulacean Acid Metabolism — CO2 fixed at night and stored as malic acid, released during day",
        "C4 Photosynthesis": "Carbon fixation pathway using PEP carboxylase; concentrates CO2 around RuBisCO in bundle sheath cells",
        "Tropism": "Directional growth response to a unidirectional stimulus",
        "Auxin": "Plant hormone (IAA) that promotes cell elongation on the shaded side of shoots",
        "Turgor Pressure": "Pressure exerted by cell contents against the cell wall when fully hydrated"
    },

    mechanismOfAction: {
        stomatalRegulation: {
            opening: {
                trigger: "Light, low CO2, circadian rhythm",
                mechanism: "K+ ions pumped into guard cells → water enters by osmosis → guard cells swell → unequal cell wall thickening causes guard cells to bow outward → pore opens",
                role: "Allows CO2 entry for photosynthesis; water vapour exits"
            },
            closing: {
                trigger: "Darkness, high CO2, water stress (ABA release)",
                mechanism: "K+ ions leave guard cells → water leaves by osmosis → guard cells lose turgor → pore closes",
                role: "Reduces water loss during drought or darkness"
            },
            ABARole: "Abscisic acid released during water stress triggers K+ efflux from guard cells — a chemical drought signal"
        },
        cohesionTension: {
            steps: [
                "Water evaporates from mesophyll cell walls into sub-stomatal air spaces (transpiration pull)",
                "Water molecules cohere due to hydrogen bonding, creating a continuous water column in xylem",
                "Tension (negative pressure) propagates down xylem to roots",
                "Water enters roots from soil by osmosis down the water potential gradient",
                "Root pressure (active) provides a minor supplementary force"
            ],
            limitingFactors: "High humidity reduces transpiration pull; cavitation (air bubble in xylem) breaks the water column"
        },
        phototropism: {
            mechanism: "Phototropin receptors in shoot tip detect unilateral light; auxin redistributed to shaded side; shaded cells elongate more; shoot bends toward light",
            adaptive: "Maximises light interception for photosynthesis"
        },
        gravitropism: {
            shoot: "Auxin accumulates on lower side; lower cells elongate; shoot bends upward (negative gravitropism)",
            root: "Roots are more sensitive to auxin; high auxin on lower side inhibits elongation; roots bend downward (positive gravitropism)"
        }
    },

    factorsAffectingAdaptation: {
        light: {
            sunPlants: "Thick leaves, many chloroplasts per cell, high chlorophyll density, multiple palisade layers",
            shadePlants: "Broader and thinner leaves, larger chloroplasts, high ratio of chlorophyll b to a, horizontal leaf orientation",
            adaptive: "Maximise photon capture at low light intensity"
        },
        water: {
            xeric: "Thick cuticle, sunken stomata, trichomes, rolled leaves, succulent tissue, CAM pathway, deep roots",
            aquatic: "Aerenchyma (air spaces), reduced cuticle, stomata on upper surface (floating leaves), flexible stems",
            mesic: "Flat broad leaves, stomata mainly on lower surface, moderate cuticle thickness"
        },
        temperature: {
            cold: "Antifreeze proteins, reduced cell water content, dark pigmentation to absorb heat",
            hot: "Reflective surfaces, heat shock proteins, reduced leaf area, C4 or CAM photosynthesis to reduce photorespiration"
        },
        soilNutrients: {
            nitrogen_poor: "Carnivorous plant traps, nitrogen-fixing bacterial symbioses (legumes)",
            saline: "Salt glands, succulent dilution, salt exclusion at roots"
        }
    },

    leafStructure: {
        epidermis: {
            upper: "Single layer, no chloroplasts, cuticle-coated — protection and light transmission",
            lower: "Contains stomata and guard cells — gas exchange",
            function: "Protection, cuticle secretion, guard cell function"
        },
        mesophyll: {
            palisade: "Columnar cells packed with chloroplasts, positioned near upper surface — primary photosynthesis layer",
            spongy: "Irregular cells with large air spaces — gas exchange and some photosynthesis",
            adaptation: "Palisade thickness increases with light availability"
        },
        vascularbundle: {
            xylem: "Transports water and minerals upward; provides structural support",
            phloem: "Transports dissolved sugars (sucrose) bidirectionally",
            bundleSheath: "Surrounds vascular bundles; site of C4 carbon fixation in C4 plants"
        }
    },

    photosyntheticPathways: {
        C3: {
            firstProduct: "3-phosphoglycerate (3-carbon)",
            enzyme: "RuBisCO",
            distribution: "Temperate climates, moderate water",
            limitation: "Photorespiration at high temperatures reduces efficiency",
            examples: "Wheat, rice, most trees"
        },
        C4: {
            firstProduct: "Oxaloacetate (4-carbon)",
            enzyme: "PEP carboxylase in mesophyll; RuBisCO in bundle sheath",
            distribution: "Hot, sunny climates",
            advantage: "CO2 concentrated in bundle sheath suppresses photorespiration",
            examples: "Maize, sugarcane, sorghum"
        },
        CAM: {
            mechanism: "Stomata open at night; CO2 fixed as malic acid; stored in vacuole; released during day for Calvin cycle with stomata closed",
            distribution: "Arid environments",
            advantage: "Drastically reduces daytime water loss",
            examples: "Cacti, agaves, pineapple, stonecrops"
        }
    },

    xerophyteAdaptations: {
        reducedWaterLoss: [
            "Thick waxy cuticle — physical barrier to evaporation",
            "Sunken stomata in pits or grooves — trapped humid air reduces diffusion gradient",
            "Trichomes (leaf hairs) — trap humid air boundary layer, reflect light",
            "Rolled leaves (e.g. Marram grass) — stomata enclosed inside roll, humidity maintained",
            "Reduced leaf area (e.g. spines in cacti) — minimises surface area for evaporation",
            "CAM photosynthesis — nocturnal CO2 fixation, stomata closed during hottest hours"
        ],
        waterStorage: [
            "Succulent stem or leaves (e.g. cacti, aloe) — store water in parenchyma cells",
            "Deep or extensive root systems — access groundwater or maximise rainfall uptake"
        ],
        structuralFeatures: [
            "Thick-walled cells to withstand turgor fluctuation",
            "Stomata mainly on lower surface in non-rolled species",
            "Heavily lignified xylem to maintain column integrity under high tension"
        ]
    },

    hydrophyteAdaptations: {
        gasExchange: [
            "Aerenchyma — large intercellular air spaces in stems and roots allow O2/CO2 diffusion to submerged tissues",
            "Stomata on upper leaf surface only (floating leaves) — direct contact with air"
        ],
        structural: [
            "Flexible stems — bend with water current rather than breaking",
            "Reduced or absent root systems — water absorbed directly through leaf surface",
            "Reduced cuticle — no need for waterproofing; facilitates direct gas exchange with water",
            "Submerged leaves may be finely divided — maximises surface area for gas exchange in water"
        ]
    },

    tropisms: {
        phototropism: {
            stimulus: "Unilateral light",
            response: "Shoot bends toward light (positive); roots away from light (negative)",
            mechanism: "Auxin redistribution by phototropin receptors"
        },
        gravitropism: {
            stimulus: "Gravity",
            response: "Shoots grow upward (negative gravitropism); roots grow downward (positive gravitropism)",
            mechanism: "Statolith (amyloplast) sedimentation triggers auxin redistribution"
        },
        thigmotropism: {
            stimulus: "Contact/touch",
            response: "Tendrils and climbing stems coil around support",
            mechanism: "Differential auxin-mediated growth on contact vs non-contact sides"
        },
        chemotropism: {
            stimulus: "Chemical gradient",
            response: "Pollen tube grows toward ovule following sucrose/calcium gradient",
            mechanism: "Directional vesicle fusion at pollen tube tip"
        },
        nasticResponses: {
            definition: "Non-directional responses to stimuli; direction of response is determined by plant anatomy, not stimulus direction",
            examples: [
                "Thigmonasty: Mimosa pudica leaf folding on touch",
                "Photonasty: flower opening and closing with light changes",
                "Thermonasty: tulip opening with temperature increase"
            ]
        }
    },

    applications: [
        "Designing drought-tolerant crop varieties using xerophyte principles",
        "Optimising glasshouse lighting and CO2 enrichment based on photosynthetic pathway",
        "Restoring wetland plant communities using hydrophyte ecology",
        "Developing herbicides targeting auxin signalling (synthetic auxins cause uncontrolled growth)",
        "Understanding C4 and CAM pathways for biofuel crop improvement",
        "Modelling stomatal conductance in global climate water cycle predictions"
    ],

    topicSummary: {
        coreInsights: [
            "Every plant adaptation represents a trade-off: maximising photosynthesis while minimising water loss is the central tension driving leaf, stem, and root evolution.",
            "Stomatal regulation by guard cells is the most finely tuned water-conservation mechanism in plants — balancing CO2 entry against water vapour exit in real time.",
            "Cohesion-tension explains how water reaches the tops of 100-metre trees without a pump: transpiration pull, maintained by hydrogen bonding between water molecules.",
            "C4 and CAM photosynthesis evolved independently in multiple lineages as solutions to photorespiration in hot, arid environments — a striking example of convergent evolution.",
            "Xerophyte adaptations work synergistically: a single adaptation (e.g. rolled leaves) often incorporates multiple mechanisms (sunken stomata, trapped air, reduced surface area) simultaneously.",
            "Tropisms are not random growth — they are precisely directional hormonal responses driven by auxin redistribution, with each direction having clear adaptive value.",
            "The distinction between C3, C4, and CAM plants directly determines agricultural suitability for different climates — understanding this is foundational to food security biology."
        ],
        keyEquations: {
            waterPotential: "Ψ = Ψs + Ψp (water potential = solute potential + pressure potential)",
            transpirationRate: "E = (Ci − Ca) / r (transpiration rate depends on concentration gradient and stomatal resistance)",
            ficksDiffusion: "Rate of diffusion ∝ (surface area × concentration difference) / thickness"
        },
        adaptationComparison: {
            xerophyte:   { waterLoss: "Minimised",   gasExchange: "Restricted",  structural: "Thick cuticle, sunken stomata, trichomes, rolled leaves" },
            hydrophyte:  { waterLoss: "Unrestricted", gasExchange: "Facilitated", structural: "Aerenchyma, reduced cuticle, flexible stems" },
            mesophyte:   { waterLoss: "Moderate",    gasExchange: "Moderate",    structural: "Flat broad leaf, stomata mainly abaxial, moderate cuticle" },
            shadePlant:  { waterLoss: "Moderate",    gasExchange: "Facilitated", structural: "Large thin leaf, high chlorophyll b, horizontal orientation" }
        },
        commonMistakesToAvoid: [
            "Transpiration is not 'waste' — it drives the cohesion-tension mechanism that delivers water and minerals to all aerial tissues",
            "Stomata are not always on the lower surface — floating hydrophyte leaves have stomata on the upper surface; some xerophytes have sunken stomata on both surfaces",
            "CAM plants do NOT photosynthesize at night — they fix CO2 at night (storing malic acid) and run the Calvin cycle during the day with stored CO2",
            "Auxin promotes elongation in shoots but inhibits elongation in roots at the same concentration — the two organs have different sensitivity thresholds",
            "Xerophyte does not mean cactus — many xerophytes are grasses, shrubs, or bulb plants; the adaptations vary widely while serving the same function",
            "Water potential is always negative or zero in plant cells — students frequently assign positive values to solute potential"
        ],
        connections: [
            "Climate change: stomatal closure responses to elevated CO2 affect global water cycling and rainfall patterns",
            "Agriculture: C4 crops (maize, sugarcane) are more productive in tropical regions because C4 suppresses photorespiration",
            "Evolution: CAM photosynthesis has evolved at least 60 times independently — one of the most striking examples of convergent molecular evolution",
            "Ecology: plant adaptation type (xerophyte/hydrophyte/mesophyte) determines biome structure and species distribution",
            "Pharmacology: auxin-mimicking herbicides (2,4-D) are among the most widely used weedkillers — mechanism directly tied to auxin signalling biology"
        ],
        examReadinessChecklist: [
            "Can you draw and fully label a transverse section of a xerophyte leaf, annotating each feature with its adaptive function?",
            "Can you explain the guard cell mechanism of stomatal opening and closing, naming the ion involved?",
            "Can you describe the cohesion-tension mechanism in full, including the role of hydrogen bonding?",
            "Can you compare C3, C4, and CAM photosynthesis — stating the first product, key enzyme, and environmental advantage of each?",
            "Can you distinguish tropisms from nastic responses with an example of each?",
            "Can you predict which adaptations a plant would have given a description of its habitat?"
        ]
    }
},


plantNutrition: {
    title: "Plant Nutrition: Autotrophy, Mineral Uptake, and Photosynthetic Metabolism",

    databaseLinks: {
        misconceptions: [
            'photosynthesisBasics',
            'mineralNutrition',
            'waterAndTransport',
            'nitrogenCycle',
            'carbonFixation'
        ],
        contextualScenarios: [
            'photosynthesisBasics',
            'mineralNutrition',
            'waterAndTransport',
            'nitrogenCycle'
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
            'photosynthesisBasics',
            'mineralNutrition',
            'waterAndTransport',
            'nitrogenCycle'
        ]
    },

    conceptLinks: {
        "Plants are autotrophs that fix atmospheric CO₂ into organic molecules using light energy": {
            misconceptions:      ['photosynthesisBasics'],
            scenarios:           ['photosynthesisBasics'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['photosynthesisBasics']
        },
        "Photosynthesis occurs in two stages: light-dependent reactions and the Calvin cycle": {
            misconceptions:      ['photosynthesisBasics', 'carbonFixation'],
            scenarios:           ['photosynthesisBasics'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['photosynthesisBasics']
        },
        "Plants absorb mineral ions from soil via active transport and diffusion through roots": {
            misconceptions:      ['mineralNutrition'],
            scenarios:           ['mineralNutrition'],
            studyTips:           ['specimens', 'flashcards'],
            assessmentRubrics:   ['understand', 'apply'],
            assessmentQuestions: ['mineralNutrition']
        },
        "Water and dissolved minerals move through the plant via xylem; assimilates move via phloem": {
            misconceptions:      ['waterAndTransport'],
            scenarios:           ['waterAndTransport'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens'],
            assessmentRubrics:   ['apply', 'analyze'],
            assessmentQuestions: ['waterAndTransport']
        },
        "Nitrogen fixation converts atmospheric N₂ to bioavailable forms essential for amino acid and nucleotide synthesis": {
            misconceptions:      ['nitrogenCycle'],
            scenarios:           ['nitrogenCycle'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['nitrogenCycle']
        }
    },

    // ── Layer 2: Topic Framing ────────────────────────────────────────────

    topicIntroduction: {
        overview: "Plants are the primary producers that sustain virtually all life on Earth. Through photosynthesis, they capture solar energy and fix atmospheric carbon dioxide into organic molecules — the foundation of every food web. This lesson examines how plants obtain the raw materials they need: carbon dioxide from the atmosphere, water and mineral ions from the soil, and light energy from the sun. We explore the biochemistry of photosynthesis, the physiology of water and solute transport, and the ecological significance of nitrogen fixation.",
        whyItMatters: "Understanding plant nutrition underpins agriculture, ecology, and global biogeochemical cycles. Every food crop, every forest, and every marine food web depends on photosynthetic carbon fixation. Fertiliser design, irrigation management, climate change modelling, and sustainable farming all rest on the principles covered in this lesson. The global nitrogen cycle — mediated in part by root nodule bacteria — determines the productivity of natural and agricultural ecosystems worldwide.",
        bigPicture: "Plants are autotrophs: they manufacture their own organic molecules from inorganic raw materials. The two-stage process of photosynthesis — light-dependent reactions in the thylakoid membranes and the Calvin cycle in the stroma — converts light energy into chemical energy stored as glucose. Mineral ions absorbed through roots provide the nitrogen, phosphorus, potassium, and trace elements required for growth. Water moves passively up the xylem driven by transpiration; assimilates move actively through the phloem driven by source-to-sink pressure gradients.",
        priorKnowledge: [
            "Cell biology: chloroplast and mitochondrial structure",
            "Biochemistry: ATP structure, reduction and oxidation, electron carriers (NAD⁺/NADH)",
            "Membrane biology: osmosis, diffusion, active transport, membrane potential",
            "Chemistry: covalent bonds, ionic compounds, pH, redox reactions",
            "Ecology: food webs, producers, consumers, decomposers"
        ],
        topicRoadmap: [
            "Autotrophy vs heterotrophy: why plants are primary producers",
            "Chloroplast structure and its relationship to photosynthetic function",
            "Light-dependent reactions: photosystems I and II, electron transport, photolysis, chemiosmosis",
            "The Calvin cycle: carbon fixation, reduction, and regeneration of RuBP",
            "Factors limiting photosynthesis: light intensity, CO₂ concentration, temperature",
            "Mineral nutrition: macronutrients, micronutrients, ion uptake mechanisms",
            "Water transport: osmosis, root pressure, cohesion-tension theory",
            "Phloem transport: source-sink model, mass flow hypothesis",
            "Nitrogen nutrition: nitrogen cycle, fixation, assimilation, ammonification, nitrification"
        ]
    },

    // ── Layer 3: Core Lesson Content ─────────────────────────────────────

    concepts: [
        "Plants are autotrophs that fix atmospheric CO₂ into organic molecules using light energy",
        "Photosynthesis occurs in two stages: light-dependent reactions and the Calvin cycle",
        "Light-dependent reactions generate ATP and NADPH and release O₂ from water",
        "The Calvin cycle uses ATP and NADPH to fix CO₂ into triose phosphate",
        "Plants absorb mineral ions from soil via active transport and diffusion through roots",
        "Water and dissolved minerals move through the plant via xylem; assimilates move via phloem",
        "Nitrogen fixation converts atmospheric N₂ to bioavailable forms essential for amino acid and nucleotide synthesis"
    ],

    theory: "Plants obtain carbon from atmospheric CO₂ via photosynthesis, water and mineral ions from soil via roots, and nitrogen from soil nitrate/ammonium or from symbiotic nitrogen-fixing bacteria. The coordinated activity of leaves, roots, and vascular tissue sustains autotrophic growth.",

    keyDefinitions: {
        "Autotroph": "Organism that synthesises organic molecules from inorganic sources using an external energy source (light or chemical energy)",
        "Photosynthesis": "Process by which light energy is used to convert CO₂ and H₂O into glucose and O₂",
        "Chlorophyll": "Green photosynthetic pigment that absorbs red and blue light; reflects green",
        "Thylakoid": "Flattened membranous sac in the chloroplast where light-dependent reactions occur",
        "Stroma": "Aqueous matrix of the chloroplast where the Calvin cycle occurs",
        "Photosystem": "Protein-pigment complex that absorbs light and transfers excited electrons (PSI and PSII)",
        "Photolysis": "Light-driven splitting of water: 2H₂O → 4H⁺ + 4e⁻ + O₂",
        "Chemiosmosis": "ATP synthesis driven by proton gradient across thylakoid membrane via ATP synthase",
        "Calvin Cycle": "Series of reactions in the stroma that fix CO₂ into triose phosphate using ATP and NADPH",
        "RuBisCO": "Enzyme that catalyses CO₂ fixation with RuBP in the Calvin cycle; most abundant enzyme on Earth",
        "Triose Phosphate (TP)": "Three-carbon product of the Calvin cycle; used to synthesise glucose, sucrose, and amino acids",
        "Macronutrient": "Mineral element required in relatively large amounts (N, P, K, Ca, Mg, S)",
        "Micronutrient": "Mineral element required in trace amounts (Fe, Mn, Cu, Zn, Mo, B, Cl)",
        "Transpiration": "Loss of water vapour from leaves through stomata; drives xylem water flow",
        "Cohesion-Tension": "Mechanism of xylem water transport; water molecules cohere and are pulled up by transpiration tension",
        "Apoplast": "Pathway for water movement through cell walls and intercellular spaces (no membrane crossing)",
        "Symplast": "Pathway for water movement through cytoplasm connected by plasmodesmata",
        "Source": "Organ that loads sugars into phloem (e.g. mature leaf)",
        "Sink": "Organ that unloads sugars from phloem (e.g. root, developing fruit)",
        "Nitrogen Fixation": "Conversion of N₂ to NH₃ by nitrogenase enzyme in free-living or symbiotic bacteria",
        "Nitrification": "Oxidation of NH₃ to NO₂⁻ then NO₃⁻ by nitrifying bacteria (Nitrosomonas, Nitrobacter)",
        "Denitrification": "Reduction of NO₃⁻ to N₂ by anaerobic bacteria; returns nitrogen to atmosphere"
    },

    chloroplastStructure: {
        outerMembrane: "Permeable to small molecules; controls entry of larger molecules",
        innerMembrane: "Selectively permeable; contains transport proteins for CO₂, sugars, ions",
        intermembraneSpace: "Narrow space between outer and inner membranes",
        thylakoids: {
            description: "Flattened membranous sacs arranged in stacks (grana); site of light-dependent reactions",
            granum: "Stack of thylakoids; maximises membrane surface area for photosystems",
            lumenSpace: "Interior of thylakoid; site of proton accumulation during light reactions",
            membraneComponents: ["Photosystem II (PSII)", "Photosystem I (PSI)", "Cytochrome b6f complex", "ATP synthase (CF₀CF₁)", "Plastoquinone", "Plastocyanin", "Ferredoxin"]
        },
        stroma: {
            description: "Aqueous matrix between inner membrane and thylakoids; site of Calvin cycle",
            components: ["RuBisCO", "Calvin cycle enzymes", "Starch granules", "Ribosomes (70S)", "Circular DNA"]
        }
    },

    lightDependentReactions: {
        location: "Thylakoid membranes",
        overview: "Light energy is captured by photosystems and used to drive electron transport, producing ATP (via chemiosmosis) and NADPH (via reduction of NADP⁺). Water is split (photolysis) to replace electrons lost by PSII, releasing O₂.",
        photosystemII: {
            absorbance: "Maximum at 680 nm (P680)",
            function: "Absorbs light, excites electrons to higher energy level; electrons passed to plastoquinone",
            photolysis: "2H₂O → 4H⁺ + 4e⁻ + O₂ (replaces electrons lost from P680)",
            significance: "Source of all atmospheric O₂"
        },
        electronTransportChain: {
            components: ["Plastoquinone (PQ)", "Cytochrome b6f complex", "Plastocyanin (PC)"],
            function: "Passes electrons from PSII to PSI; pumps H⁺ into thylakoid lumen, generating proton gradient"
        },
        photosystemI: {
            absorbance: "Maximum at 700 nm (P700)",
            function: "Re-energises electrons from ETC; passes them via ferredoxin to NADP⁺ reductase",
            product: "NADPH (NADP⁺ + H⁺ + 2e⁻ → NADPH)"
        },
        chemiosmosis: {
            protonGradient: "H⁺ accumulates in thylakoid lumen (from photolysis and PQ pumping)",
            ATPsynthase: "H⁺ flows back through CF₀CF₁ ATP synthase (from lumen to stroma); drives ATP synthesis",
            product: "ATP (ADP + Pᵢ → ATP)"
        },
        overallEquation: "12H₂O + 12NADP⁺ + 18ADP + 18Pᵢ → 6O₂ + 12NADPH + 18ATP (per glucose equivalent)"
    },

    calvinCycle: {
        location: "Stroma",
        overview: "Three phases use the ATP and NADPH from light reactions to fix CO₂ into organic molecules.",
        phases: {
            carbonFixation: {
                enzyme: "RuBisCO (ribulose-1,5-bisphosphate carboxylase/oxygenase)",
                reaction: "CO₂ + RuBP (C₅) → 2× glycerate-3-phosphate (GP, C₃)",
                note: "Rate-limiting step; most abundant protein on Earth; also performs oxygenase reaction (photorespiration)"
            },
            reduction: {
                reaction: "GP → triose phosphate (TP) using ATP and NADPH",
                products: "TP used to synthesise glucose, sucrose, starch, fatty acids, amino acids"
            },
            regenerationOfRuBP: {
                reaction: "5 of every 6 TP molecules are used to regenerate 3 RuBP using ATP",
                significance: "Maintains cycle continuity; 1 in 6 TP molecules represents net carbon gain"
            }
        },
        stepsPerGlucose: {
            CO2_fixed: 6,
            ATP_used: 18,
            NADPH_used: 12,
            RuBP_regenerated: 6,
            TP_produced: 12,
            TP_exported: 2
        },
        overallEquation: "6CO₂ + 18ATP + 12NADPH → C₆H₁₂O₆ + 18ADP + 18Pᵢ + 12NADP⁺"
    },

    limitingFactors: {
        lightIntensity: {
            low: "Rate of light-dependent reactions limits overall photosynthesis; below light compensation point, respiration exceeds photosynthesis",
            high: "Light saturation point reached; Calvin cycle or CO₂ supply becomes limiting",
            compensationPoint: "[Light intensity at which photosynthesis rate = respiration rate; net gas exchange = 0]"
        },
        carbonDioxideConcentration: {
            low: "RuBisCO is not saturated; Calvin cycle rate limited by CO₂ availability",
            high: "Photosynthesis rate increases up to the point where light or temperature becomes limiting",
            atmosphericLevel: "Currently ~420 ppm CO₂; C3 plants show substantial increases in photosynthesis with elevated CO₂"
        },
        temperature: {
            low: "Enzyme activity (especially RuBisCO and Calvin cycle enzymes) slows; light reactions less affected",
            optimal: "Typically 25–30°C for temperate C3 plants",
            high: "Enzyme denaturation; stomata close to prevent water loss (reducing CO₂ entry); photorespiration increases"
        },
        interactions: "In practice, multiple factors operate simultaneously; the factor in shortest supply is rate-limiting. Raising one factor only increases rate until another becomes limiting (Blackman's Law of Limiting Factors)."
    },

    mineralNutrition: {
        macronutrients: {
            nitrogen: { symbol: "N", form: "NO₃⁻ or NH₄⁺", role: "Amino acids, nucleotides, chlorophyll, ATP", deficiency: "Chlorosis (yellowing), stunted growth, anthocyanin accumulation" },
            phosphorus: { symbol: "P", form: "H₂PO₄⁻", role: "ATP, nucleic acids, phospholipids, signal transduction", deficiency: "Purple discolouration (anthocyanin), poor root development" },
            potassium: { symbol: "K", form: "K⁺", role: "Enzyme activation, stomatal guard cell osmosis, membrane potential", deficiency: "Marginal leaf scorch, wilting, poor fruit quality" },
            calcium: { symbol: "Ca", form: "Ca²⁺", role: "Cell wall middle lamella (calcium pectate), cell signalling, membrane stability", deficiency: "Distorted young leaves, blossom end rot (tomato)" },
            magnesium: { symbol: "Mg", form: "Mg²⁺", role: "Central atom of chlorophyll; enzyme cofactor (kinases)", deficiency: "Interveinal chlorosis of older leaves" },
            sulfur: { symbol: "S", form: "SO₄²⁻", role: "Cysteine and methionine amino acids, coenzyme A", deficiency: "Pale green young leaves" }
        },
        micronutrients: {
            iron: { role: "Cytochromes in ETC, ferredoxin, chlorophyll synthesis", deficiency: "Interveinal chlorosis of young leaves" },
            manganese: { role: "Oxygen-evolving complex in PSII (photolysis)", deficiency: "Interveinal chlorosis, stunted growth" },
            copper: { role: "Plastocyanin in ETC, lignin synthesis", deficiency: "Wilting, blue-green discolouration" },
            molybdenum: { role: "Nitrate reductase (NO₃⁻ → NH₄⁺ pathway)", deficiency: "Whiptail in cauliflower; nitrogen deficiency symptoms" },
            boron: { role: "Cell wall synthesis, pollen tube growth, sugar transport", deficiency: "Death of growing points" }
        },
        ionUptake: {
            mechanisms: {
                diffusion: "Movement of ions down concentration gradient; passive; no energy required",
                activeTransport: "Movement of ions against concentration gradient using ATP and carrier proteins; required for most mineral uptake",
                facilitated: "Ion channels and carriers allow passive movement of ions down electrochemical gradient"
            },
            rootHairs: "Greatly increase surface area for absorption; thin walls and close contact with soil particles",
            mycorrhizae: "Symbiotic fungi that extend the effective root surface area by orders of magnitude; particularly important for phosphorus uptake"
        }
    },

    waterTransport: {
        osmosis: "Movement of water from high water potential (Ψ) to low water potential across a selectively permeable membrane",
        waterPotential: {
            equation: "Ψ = Ψₛ + Ψₚ (solute potential + pressure potential)",
            soil: "Highest water potential in well-watered soil",
            leaf: "Lowest water potential in the leaf (mesophyll cells with high solute concentration and negative pressure)"
        },
        pathwaysThroughRoot: {
            apoplast: "Through cell walls; no membrane crossing; blocked by Casparian strip in endodermis",
            symplast: "Through cytoplasm via plasmodesmata; crosses at least one membrane (endodermal cell)",
            casparian: "Suberin-impregnated band in endodermis cell walls; forces water into symplast; controls ion entry to xylem"
        },
        xylemTransport: {
            cohesionTension: {
                transpiration: "Evaporation of water from mesophyll cell walls into substomatal cavity and out through stomata creates negative pressure (tension)",
                cohesion: "Hydrogen bonds between water molecules create continuous water column under tension",
                adhesion: "Water adheres to xylem vessel walls, preventing column collapse",
                rootPressure: "Active transport of ions into xylem lowers water potential; water follows by osmosis; minor contribution"
            },
            xylemVessels: "Dead, lignified cells with no end walls; wide lumen for low-resistance flow; lignin spiral or annular thickening prevents collapse"
        },
        stomataControl: {
            opening: "Guard cells absorb K⁺ (active transport) → water potential decreases → water enters by osmosis → turgor increases → stoma opens",
            closing: "K⁺ leaves guard cells → water potential increases → water leaves → turgor decreases → stoma closes",
            triggers: {
                open: ["Light (blue light via phototropin), low CO₂ in substomatal cavity"],
                close: ["Darkness, high CO₂, water stress (ABA signal), high temperature"]
            }
        },
        transpirationFactors: {
            lightIntensity: "Promotes stomatal opening → increases transpiration",
            temperature: "Increases evaporation rate and water vapour deficit → increases transpiration",
            humidity: "High humidity reduces water vapour gradient → decreases transpiration",
            windSpeed: "Removes humid air near leaf surface → increases transpiration"
        }
    },

    phloemTransport: {
        overview: "Movement of assimilates (sucrose, amino acids) from sources to sinks via phloem sieve tubes",
        massFlowHypothesis: {
            loading: "Sucrose actively loaded into sieve tubes at source (companion cells use ATP to load sucrose via H⁺ cotransport); water potential decreases; water enters by osmosis → high hydrostatic pressure",
            unloading: "Sucrose unloaded at sink (by active or passive transport); water potential increases; water leaves → low hydrostatic pressure",
            pressureGradient: "High pressure at source, low pressure at sink drives mass flow of solutes through sieve tubes",
            evidence: ["Aphid stylet experiments show positive pressure in sieve tubes", "Radioactive tracer (¹⁴C-sucrose) moves from source to sink", "Girdling (removing phloem ring) blocks assimilate movement below the girdle"]
        },
        sieveElements: {
            structure: "Living cells; lack nucleus; cytoplasm reduced; sieve plates allow flow between cells",
            companionCells: "Metabolically active; provide ATP for active loading/unloading; connected to sieve elements by numerous plasmodesmata"
        }
    },

    nitrogenNutrition: {
        nitrogenCycle: {
            fixation: "N₂ → NH₃ by nitrogenase enzyme in nitrogen-fixing bacteria (Rhizobium in root nodules; Azotobacter free-living); requires 16 ATP and 8e⁻ per N₂; anaerobic enzyme protected by leghemoglobin in nodules",
            ammonification: "Organic N (proteins, nucleotides) → NH₄⁺ by decomposer bacteria and fungi",
            nitrification: "NH₄⁺ → NO₂⁻ (Nitrosomonas) → NO₃⁻ (Nitrobacter); aerobic; provides energy for chemoautotrophic bacteria",
            assimilation: "Plants take up NO₃⁻ or NH₄⁺; NO₃⁻ reduced to NH₄⁺ by nitrate reductase (requires molybdenum); NH₄⁺ incorporated into glutamate via glutamine synthetase",
            denitrification: "NO₃⁻ → N₂ by anaerobic bacteria in waterlogged soils; returns N to atmosphere; reduces soil fertility"
        },
        rootNoduleSymbiosis: {
            partners: "Legume plant + Rhizobium bacteria",
            infection: "Rhizobium infects root hair; produces nodule where bacteria differentiate into bacteroids",
            leghemoglobin: "Pink oxygen-buffering protein (plant-encoded globin + bacterial haem); maintains low O₂ for nitrogenase while supplying O₂ for bacteroid respiration",
            exchange: "Bacteroid provides NH₄⁺/amino acids to plant; plant provides photosynthate (malate) to bacteroid",
            agronomicImportance: "Legume-Rhizobium symbiosis fixes ~40–60 kg N/ha/year; reduces fertiliser requirement"
        },
        nitrogenAssimilation: {
            nitrateReduction: "NO₃⁻ → NO₂⁻ (nitrate reductase, cytoplasm) → NH₄⁺ (nitrite reductase, chloroplast)",
            glutamineSynthetase: "NH₄⁺ + glutamate → glutamine (uses ATP); key entry point for inorganic N into organic molecules",
            transamination: "Amino groups transferred from glutamate/glutamine to other carbon skeletons to make other amino acids"
        }
    },

    applications: [
        "Fertiliser design (N:P:K ratios based on macronutrient roles and deficiency symptoms)",
        "Greenhouse CO₂ enrichment to increase crop yields",
        "Drip irrigation systems informed by cohesion-tension and water potential theory",
        "Genetic engineering of RuBisCO for improved CO₂ fixation efficiency",
        "Legume rotation in sustainable agriculture (biological nitrogen fixation)",
        "Hydroponic systems with precisely formulated nutrient solutions",
        "Herbicide design (targeting Calvin cycle enzymes, e.g. glyphosate inhibits EPSPS)"
    ],

    topicSummary: {
        coreInsights: [
            "Photosynthesis is a two-stage energy conversion process: light energy → ATP and NADPH (light-dependent stage) → chemical energy in triose phosphate (Calvin cycle).",
            "The Z-scheme of electron flow — from water through PSII, the ETC, and PSI to NADP⁺ — explains the origin of both ATP (chemiosmosis) and NADPH (NADP⁺ reduction).",
            "RuBisCO is the gateway enzyme for carbon entering the biosphere; its slow, error-prone kinetics (also catalysing oxygenase reactions) make it a key target for crop improvement.",
            "Water moves passively up the xylem driven by transpiration; the driving force is the water potential gradient from soil (high Ψ) to leaf (low Ψ), maintained by cohesion of the water column.",
            "Phloem transport is active at both ends: sucrose is loaded at the source and unloaded at the sink, generating the turgor pressure gradient that drives mass flow.",
            "Plant mineral nutrition is tightly linked to metabolic function: N for proteins, P for ATP and nucleic acids, K for osmotic regulation, Mg for chlorophyll, and Fe/Mn/Mo for specific enzymatic roles.",
            "Biological nitrogen fixation by Rhizobium in legume root nodules is one of the most ecologically and agriculturally significant symbioses in nature."
        ],
        keyEquations: {
            overallPhotosynthesis: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",
            photolysis: "2H₂O → 4H⁺ + 4e⁻ + O₂",
            PSI_reaction: "NADP⁺ + H⁺ + 2e⁻ → NADPH",
            CalvinCyclePerGlucose: "6CO₂ + 18ATP + 12NADPH → glucose + 18ADP + 18Pᵢ + 12NADP⁺",
            waterPotential: "Ψ = Ψₛ + Ψₚ",
            nitrogenFixation: "N₂ + 8H⁺ + 8e⁻ + 16ATP → 2NH₃ + H₂ + 16ADP + 16Pᵢ"
        },
        inhibitionComparison: {
            lightReactions:  { location: "Thylakoid membrane", inputs: "H₂O, NADP⁺, ADP+Pᵢ, light", outputs: "O₂, NADPH, ATP" },
            calvinCycle:     { location: "Stroma", inputs: "CO₂, ATP, NADPH", outputs: "TP (triose phosphate), ADP, NADP⁺" }
        },
        commonMistakesToAvoid: [
            "Photosynthesis is not simply the reverse of respiration — the pathways, locations, and intermediates are entirely different",
            "O₂ in photosynthesis comes from WATER (photolysis), not from CO₂ — confirmed by isotope labelling with ¹⁸O",
            "The Calvin cycle does not directly produce glucose — it produces triose phosphate, which is then used to make glucose",
            "Xylem transport is passive — no ATP is used; the driving force is transpiration-generated tension",
            "Phloem transport requires ATP — active loading and unloading of sucrose at source and sink",
            "Low Mg causes chlorosis because Mg is the central atom of chlorophyll — students often confuse Mg and Fe deficiency symptoms",
            "Nitrogen fixation requires strictly anaerobic conditions for nitrogenase — leghemoglobin maintains this in nodules despite aerobic plant tissue"
        ],
        connections: [
            "Biochemistry: Calvin cycle intermediates feed into glycolysis, the pentose phosphate pathway, and amino acid biosynthesis",
            "Ecology: carbon and nitrogen cycles underpin all ecosystem productivity; photosynthesis drives the carbon cycle",
            "Agriculture: N:P:K fertilisers, legume rotation, and irrigation management all depend on plant nutrition principles",
            "Climate science: plants fix ~120 Gt C/year; changes in photosynthesis rates directly affect atmospheric CO₂",
            "Genetics: engineering C4 or crassulacean acid metabolism (CAM) into C3 crops is a major goal of food security research"
        ],
        examReadinessChecklist: [
            "Can you draw and annotate a Z-scheme diagram showing electron flow from water to NADPH?",
            "Can you describe each stage of the Calvin cycle, naming the key enzyme, substrates, and products?",
            "Can you predict how each limiting factor affects photosynthesis rate and explain the mechanism?",
            "Can you explain cohesion-tension theory and why xylem vessels can sustain a column of water under negative pressure?",
            "Can you distinguish source from sink and explain the mass flow hypothesis with reference to active loading?",
            "Can you describe the nitrogen cycle and explain the specific role of Rhizobium in legume root nodules?"
        ]
    }
},

populationDynamics: {
    title: "Population Dynamics: Growth, Regulation, and Ecological Interactions",

    databaseLinks: {
        misconceptions: [
            'populationGrowth',
            'carryingCapacity',
            'regulationMechanisms',
            'interspecificInteractions',
            'humanImpact'
        ],
        contextualScenarios: [
            'populationGrowth',
            'carryingCapacity',
            'regulationMechanisms',
            'interspecificInteractions'
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
            'populationGrowth',
            'carryingCapacity',
            'regulationMechanisms',
            'interspecificInteractions'
        ]
    },

    conceptLinks: {
        "Populations grow exponentially when resources are unlimited": {
            misconceptions:      ['populationGrowth'],
            scenarios:           ['populationGrowth'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['populationGrowth']
        },
        "Logistic growth occurs when resources limit population size": {
            misconceptions:      ['carryingCapacity'],
            scenarios:           ['carryingCapacity'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['carryingCapacity']
        },
        "Carrying capacity is set by limiting factors in the environment": {
            misconceptions:      ['carryingCapacity', 'regulationMechanisms'],
            scenarios:           ['carryingCapacity'],
            studyTips:           ['specimens', 'flashcards'],
            assessmentRubrics:   ['understand', 'apply'],
            assessmentQuestions: ['carryingCapacity']
        },
        "Density-dependent and density-independent factors regulate populations": {
            misconceptions:      ['regulationMechanisms'],
            scenarios:           ['regulationMechanisms'],
            studyTips:           ['diagrams', 'comparisonTables', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['regulationMechanisms']
        },
        "Interspecific interactions shape population size and community structure": {
            misconceptions:      ['interspecificInteractions'],
            scenarios:           ['interspecificInteractions'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['interspecificInteractions']
        }
    },

    // ── Layer 2: Topic Framing ────────────────────────────────────────────

    topicIntroduction: {
        overview: "Population dynamics is the study of how and why populations change in size, density, and composition over time. Every population on Earth is shaped by birth rates, death rates, immigration, emigration, resource availability, and the interactions it has with other species. Understanding these forces allows ecologists to predict population trajectories, conservationists to prevent extinction, and public health officials to model disease spread.",
        whyItMatters: "Human population growth is straining global food, water, and energy systems. Fisheries collapse when harvesting exceeds sustainable yield. Invasive species devastate native communities. Predator removal destabilises entire ecosystems. Every one of these real-world crises is, at its core, a population dynamics problem — and every solution requires quantitative understanding of growth rates, carrying capacity, and ecological interactions.",
        bigPicture: "Populations are not static — they are continuously shaped by the balance between births and deaths, resource availability, and interactions with other species. Two fundamental growth models — exponential and logistic — capture the spectrum from unchecked growth to resource-limited equilibrium. Above this, species interactions (predation, competition, mutualism, parasitism) add complexity that drives the patterns ecologists observe in nature.",
        priorKnowledge: [
            "Basic ecology: ecosystems, biotic and abiotic factors",
            "Cell biology: reproduction — sexual and asexual",
            "Basic mathematics: rates of change, exponential functions, graphs",
            "Evolution: natural selection, fitness, adaptation",
            "Energy flow: food chains, trophic levels, energy transfer"
        ],
        topicRoadmap: [
            "Measuring populations: density, distribution, sampling methods",
            "Exponential growth: the J-curve and its assumptions",
            "Logistic growth: the S-curve, carrying capacity, and limiting factors",
            "Density-dependent regulation: competition, predation, disease, stress",
            "Density-independent regulation: abiotic disturbances",
            "Interspecific interactions: predation, competition, mutualism, commensalism, parasitism",
            "Predator-prey oscillations: the Lotka-Volterra model",
            "Life tables, survivorship curves, and reproductive strategies",
            "Human impacts: habitat loss, overexploitation, invasive species, conservation"
        ]
    },

    // ── Layer 3: Core Lesson Content ──────────────────────────────────────

    concepts: [
        "Populations grow exponentially when resources are unlimited",
        "Logistic growth occurs when resources limit population size",
        "Carrying capacity is set by limiting factors in the environment",
        "Density-dependent and density-independent factors regulate populations",
        "Interspecific interactions shape population size and community structure",
        "Predator and prey populations oscillate in coupled cycles"
    ],

    theory: "Population dynamics describes the quantitative changes in population size and structure over time, governed by birth rates, death rates, immigration, emigration, resource availability, and interspecific interactions. Two foundational models — exponential and logistic growth — frame all further analysis.",

    keyDefinitions: {
        "Population":               "All individuals of one species living in a defined area at a given time",
        "Population Density":       "Number of individuals per unit area or volume",
        "Biotic Potential (r_max)": "Maximum per capita rate of increase under ideal conditions",
        "Carrying Capacity (K)":    "Maximum population size an environment can sustainably support",
        "Exponential Growth":       "Unrestricted growth at a constant per capita rate (J-shaped curve)",
        "Logistic Growth":          "Growth that decelerates as population approaches K (S-shaped curve)",
        "Limiting Factor":          "Any resource or condition that restricts population growth",
        "Density-Dependent Factor": "Regulatory factor whose effect intensifies as density increases",
        "Density-Independent Factor": "Factor affecting population regardless of density (e.g. frost)",
        "Natality":                 "Birth rate — new individuals added per unit time",
        "Mortality":                "Death rate — individuals lost per unit time",
        "Immigration":              "Movement of individuals into a population",
        "Emigration":               "Movement of individuals out of a population",
        "Predator-Prey Oscillation": "Cyclical fluctuation of predator and prey populations driven by their interaction",
        "Survivorship Curve":       "Graph of number of survivors in a cohort against age",
        "Life Table":               "Age-specific summary of survival and reproduction in a population"
    },

    growthModels: {
        exponential: {
            equation:    "dN/dt = r_max × N",
            integrated:  "N(t) = N₀ × e^(r_max × t)",
            rmax:        "Intrinsic rate of natural increase (birth rate minus death rate under ideal conditions)",
            shape:       "J-shaped curve — accelerating growth with no upper limit",
            conditions:  "Unlimited resources, no predation, no disease, no intraspecific competition",
            realWorld:   "Bacteria in fresh media, invasive species with no natural enemies, early recolonisation after disturbance",
            doublingTime: "t_d = ln(2) / r_max ≈ 0.693 / r_max"
        },
        logistic: {
            equation:    "dN/dt = r_max × N × ((K − N) / K)",
            shape:       "S-shaped (sigmoidal) curve — growth slows as N approaches K",
            inflectionPoint: "Maximum growth rate occurs at N = K/2",
            atEquilibrium:   "dN/dt = 0 when N = K",
            conditions:  "Resources limited; intraspecific competition intensifies as N increases",
            realWorld:   "Laboratory yeast cultures, island colonisation, managed fisheries",
            keyInsight:  "The term (K − N)/K is the 'unused portion of K' — as N approaches K, this fraction approaches zero and growth halts"
        }
    },

    populationMeasurement: {
        density:        "Individuals per unit area (terrestrial) or volume (aquatic)",
        samplingMethods: {
            quadrats:       "Count organisms within defined sample areas — suited to sessile organisms",
            transects:      "Count organisms along a line or belt — suited to linear habitats or mobile organisms",
            markRecapture:  "Lincoln-Petersen method: N = (M × C) / R, where M = marked, C = second sample size, R = recaptured marked individuals",
            assumptions:    ["Marked individuals mix randomly", "No births/deaths/immigration/emigration between samples", "Marking does not affect survival or behaviour"]
        },
        distribution: {
            clumped:   "Most common — resources patchy, social behaviour, parental care",
            uniform:   "Territorial spacing or resource competition (e.g. nesting seabirds)",
            random:    "Rare — resources uniformly distributed, no social interactions"
        }
    },

    regulatoryFactors: {
        densityDependent: {
            intraspecificCompetition: "Competition for food, space, mates — intensifies as N increases",
            predation:                "Predator populations rise as prey density rises, increasing predation pressure",
            disease:                  "Pathogen transmission rate increases with host density",
            stress:                   "Overcrowding causes physiological stress, reducing reproduction and immune function",
            territoriality:           "Limited territories exclude excess individuals from breeding"
        },
        densityIndependent: {
            weather:       "Frost, drought, flood — affect all individuals regardless of population size",
            natural:       "Volcanic eruption, wildfire — sudden large-scale mortality events",
            humanActivity: "Pollution, habitat destruction — can act independently of local density"
        }
    },

    interspecificInteractions: {
        predation: {
            effect:  "Predator (+), prey (−)",
            outcome: "Regulates prey populations; drives co-evolution of predator hunting ability and prey defences",
            example: "Lynx and snowshoe hare (Canada) — classic oscillating populations"
        },
        competition: {
            interspecific: "Between different species for shared limited resource",
            competitiveExclusion: "Gause's principle — two species with identical niches cannot coexist; one excludes the other",
            resourcePartitioning: "Species divide resources to reduce overlap and coexist",
            example: "Darwin's finches — beak morphology evolved to partition seed sizes"
        },
        mutualism: {
            effect:  "Both species benefit (+/+)",
            example: "Mycorrhizal fungi and plant roots — fungi receive carbon, plant receives phosphate"
        },
        commensalism: {
            effect:  "One benefits, one unaffected (+/0)",
            example: "Epiphytic orchids on tree trunks — orchid gains support, tree unaffected"
        },
        parasitism: {
            effect:  "Parasite benefits (+), host harmed (−)",
            distinction: "Different from predation in that host is not immediately killed",
            example: "Plasmodium falciparum in human red blood cells — malaria"
        },
        amensalism: {
            effect:  "One harmed (−), one unaffected (0)",
            example: "Allelopathy — black walnut trees secrete juglone, inhibiting neighbouring plants"
        }
    },

    predatorPreyDynamics: {
        LotkaVolterra: {
            preyEquation:     "dN/dt = rN − aNP",
            predatorEquation: "dP/dt = baNP − mP",
            variables:        { N: "prey population", P: "predator population", r: "prey growth rate", a: "predation rate", b: "conversion efficiency", m: "predator mortality rate" },
            predictions:      ["Populations oscillate in coupled cycles", "Predator peak lags behind prey peak", "Removing predators allows prey to overshoot K"],
            limitations:      ["Assumes no age structure", "Ignores prey refuge behaviour", "Assumes linear functional response"]
        },
        realWorldEvidence: "Hudson Bay Company fur trade records (1845–1935) show lynx and hare pelt counts oscillating with an approximately 10-year cycle, consistent with Lotka-Volterra predictions."
    },

    survivorshipCurves: {
        typeI:   { shape: "Convex — most mortality in old age", examples: "Humans, large mammals, elephants" },
        typeII:  { shape: "Linear — constant mortality rate at all ages", examples: "Songbirds, many reptiles" },
        typeIII: { shape: "Concave — high early mortality, survivors live long", examples: "Most fish, oysters, many plants" }
    },

    reproductiveStrategies: {
        rSelected: {
            characteristics: "High r_max, small body size, many offspring, little parental care, short lifespan, early reproduction",
            environment:     "Unpredictable, disturbed habitats",
            examples:        "Dandelions, mice, cockroaches, annual plants"
        },
        KSelected: {
            characteristics: "Low r_max, large body size, few offspring, high parental care, long lifespan, delayed reproduction",
            environment:     "Stable, resource-limited habitats",
            examples:        "Elephants, whales, humans, giant tortoises"
        }
    },

    humanImpacts: {
        habitatLoss:        "Reduces K for many species — most significant driver of biodiversity loss",
        overexploitation:   "Harvesting beyond maximum sustainable yield (MSY = population growth at N = K/2)",
        invasiveSpecies:    "Arrive without natural enemies — may undergo exponential growth, outcompeting natives",
        climateChange:      "Shifts geographic ranges, alters phenology, changes timing of species interactions",
        conservation:       "Minimum viable population (MVP), protected areas, wildlife corridors, captive breeding"
    },

    topicSummary: {
        coreInsights: [
            "All population change reduces to four variables: births, deaths, immigration, emigration. The balance of these four forces determines whether a population grows, declines, or stabilises.",
            "Exponential growth (J-curve) is the null model — what happens when nothing limits a population. It is always temporary in nature because resources are finite.",
            "Logistic growth (S-curve) introduces the carrying capacity K. The inflection point at K/2 is where growth rate is highest — the principle behind maximum sustainable yield in fisheries.",
            "Density-dependent factors create negative feedback: as population rises, the regulatory force strengthens, pushing the population back toward K. This is the mechanism behind logistic growth.",
            "Density-independent factors can override density-dependent regulation, causing population crashes regardless of current size.",
            "The Lotka-Volterra model predicts predator-prey oscillations: prey rises → predators rise (with a lag) → prey falls → predators fall → prey rises again. The lag is critical.",
            "Interspecific competition can drive competitive exclusion or resource partitioning — the outcome determines community composition.",
            "r-selected and K-selected species represent opposite ends of a life history spectrum shaped by the predictability of their environment."
        ],
        keyEquations: {
            exponentialGrowth:  "dN/dt = r_max × N",
            logisticGrowth:     "dN/dt = r_max × N × ((K − N) / K)",
            doublingTime:       "t_d = ln(2) / r_max ≈ 0.693 / r_max",
            markRecapture:      "N = (M × C) / R",
            maximumSustainableYield: "MSY occurs at N = K/2"
        },
        interactionSummary: {
            predation:      { species1: "+", species2: "−", example: "Lion and zebra" },
            competition:    { species1: "−", species2: "−", example: "Lions and hyenas for carcasses" },
            mutualism:      { species1: "+", species2: "+", example: "Mycorrhizae and plant roots" },
            commensalism:   { species1: "+", species2: "0", example: "Epiphytic orchid on tree" },
            parasitism:     { species1: "+", species2: "−", example: "Plasmodium and human host" },
            amensalism:     { species1: "0", species2: "−", example: "Black walnut and neighbouring plants" }
        },
        commonMistakesToAvoid: [
            "Carrying capacity is NOT a fixed constant — K changes when environmental conditions change (drought, habitat loss, food availability)",
            "Exponential growth does NOT mean infinitely fast — it means the rate of growth is proportional to current population size",
            "Density-dependent and density-independent factors are NOT mutually exclusive — both operate simultaneously on real populations",
            "Competitive exclusion does NOT always occur — resource partitioning and niche differentiation allow competing species to coexist",
            "Predators do NOT always control prey populations — prey can be regulated primarily by food supply (bottom-up control) rather than predation (top-down control)",
            "The predator population peak does NOT coincide with the prey peak — predators lag behind prey in Lotka-Volterra dynamics"
        ],
        connections: [
            "Evolution: population dynamics drives natural selection — when N approaches K, selection favours individuals with competitive advantages",
            "Epidemiology: disease transmission follows population density models; herd immunity is a population-level phenomenon",
            "Conservation biology: minimum viable population, corridor design, and reintroduction programmes all apply population dynamics principles",
            "Fisheries management: maximum sustainable yield is derived directly from the logistic growth model",
            "Climate science: range shifts and phenological mismatches are population-level responses to climate change"
        ],
        examReadinessChecklist: [
            "Can you draw and annotate both a J-curve and an S-curve, labelling key points?",
            "Can you calculate population growth rate using the logistic equation for a given N and K?",
            "Can you calculate population size using the Lincoln-Petersen mark-recapture formula?",
            "Can you distinguish density-dependent from density-independent factors with examples?",
            "Can you describe the outcome of competitive exclusion vs resource partitioning?",
            "Can you sketch and explain predator-prey oscillation cycles with the lag correctly shown?"
        ]
    }
},

biomes: {
    title: "Biomes: Global Ecosystems and Their Characteristics",

    databaseLinks: {
        misconceptions: [
            'biomeDefinition',
            'climateAndVegetation',
            'adaptations',
            'biomeDistribution',
            'humanImpact'
        ],
        contextualScenarios: [
            'biomeDefinition',
            'climateAndVegetation',
            'adaptations',
            'humanImpact'
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
            'biomeDefinition',
            'climateAndVegetation',
            'adaptations',
            'humanImpact'
        ]
    },

    conceptLinks: {
        "A biome is defined by climate, not by geography": {
            misconceptions:      ['biomeDefinition', 'biomeDistribution'],
            scenarios:           ['biomeDefinition'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['biomeDefinition']
        },
        "Temperature and precipitation are the primary determinants of biome type": {
            misconceptions:      ['climateAndVegetation'],
            scenarios:           ['climateAndVegetation'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['climateAndVegetation']
        },
        "Organisms show structural and physiological adaptations to their biome": {
            misconceptions:      ['adaptations'],
            scenarios:           ['adaptations'],
            studyTips:           ['specimens', 'flashcards', 'comparisonTables'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['adaptations']
        },
        "Biome boundaries shift with climate change": {
            misconceptions:      ['biomeDistribution', 'humanImpact'],
            scenarios:           ['humanImpact'],
            studyTips:           ['diagrams', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['humanImpact']
        },
        "Human activity converts and fragments biomes, reducing biodiversity": {
            misconceptions:      ['humanImpact'],
            scenarios:           ['humanImpact'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['humanImpact']
        }
    },

    topicIntroduction: {
        overview: "Biomes are the planet's major life zones — large-scale ecosystems defined by characteristic climate, vegetation structure, and animal communities. From frozen tundra to sun-baked desert, each biome represents a stable, self-sustaining response to its climate. Understanding biomes is fundamental to ecology, conservation biology, and predicting how life on Earth will respond to climate change.",
        whyItMatters: "The biome concept underpins global conservation strategy, agricultural land-use planning, carbon accounting, and climate modelling. As temperatures rise and precipitation patterns shift, biome boundaries are moving — with profound consequences for biodiversity, food security, and ecosystem services that human societies depend on.",
        bigPicture: "Biomes are not random — they are deterministic outcomes of temperature and precipitation interacting with soil, latitude, and altitude. The same biome can appear on different continents because climate, not location, is the controlling variable. Organisms within each biome share convergent adaptations — similar solutions to similar environmental challenges, arrived at independently through evolution.",
        priorKnowledge: [
            "Basic ecology: populations, communities, ecosystems, food webs",
            "Natural selection and adaptation",
            "Plant biology: photosynthesis, transpiration, leaf structure",
            "Basic climate science: latitude, altitude, and their effects on temperature",
            "Nutrient cycles: carbon, nitrogen, and water cycles"
        ],
        topicRoadmap: [
            "What a biome is and how biomes are classified",
            "The role of temperature and precipitation in determining biome type (Whittaker diagrams)",
            "The major terrestrial biomes: tropical rainforest, savanna, desert, temperate grassland, temperate deciduous forest, boreal forest (taiga), and tundra",
            "Major aquatic biomes: freshwater and marine",
            "Adaptations of organisms to their biome environment",
            "Biome distribution on Earth and the role of latitude, altitude, and ocean currents",
            "Human impacts on biomes: deforestation, desertification, fragmentation, and climate-driven biome shift"
        ]
    },

    concepts: [
        "A biome is defined by climate, not by geography",
        "Temperature and precipitation are the primary determinants of biome type",
        "Each biome has a characteristic vegetation structure and animal community",
        "Organisms show structural and physiological adaptations to their biome",
        "Biomes are distributed non-randomly across Earth according to climate patterns",
        "Biome boundaries shift with climate change",
        "Human activity converts and fragments biomes, reducing biodiversity"
    ],

    theory: "Biomes are large-scale ecosystems characterised by a dominant vegetation type, determined primarily by climate — especially mean annual temperature and precipitation. The Whittaker biome classification system plots biomes on temperature-precipitation axes, demonstrating that biome type is a predictable, deterministic response to climate. Within each biome, convergent evolution produces organisms with similar adaptations despite different evolutionary origins.",

    keyDefinitions: {
        "Biome": "A large-scale ecosystem characterised by a dominant vegetation type and associated animal community, determined primarily by climate",
        "Climate": "The long-term average pattern of temperature and precipitation in a region",
        "Vegetation Structure": "The physical arrangement of plants in a community — height, density, layering, and life form",
        "Biotic Factors": "Living components of an ecosystem (organisms, competition, predation)",
        "Abiotic Factors": "Non-living components (temperature, rainfall, soil type, light)",
        "Adaptation": "A heritable trait that increases an organism's fitness in its environment",
        "Convergent Evolution": "Independent evolution of similar traits in unrelated species facing similar environmental pressures",
        "Net Primary Productivity (NPP)": "The rate at which plants fix carbon through photosynthesis minus respiration losses — a measure of ecosystem energy output",
        "Ecotone": "A transition zone between two adjacent biomes",
        "Biome Shift": "Movement of a biome boundary in response to changing climate conditions",
        "Desertification": "Conversion of productive land to desert-like conditions, often by overgrazing, deforestation, or drought"
    },

    biomesOverview: {
        tropicalRainforest: {
            climate: "High temperature (25–30°C year-round), very high rainfall (>2000 mm/year), no dry season",
            vegetationStructure: "Multi-layered canopy (emergent, canopy, understorey, shrub, ground layers), dense, evergreen",
            soilType: "Laterite — heavily leached, low in nutrients despite high biomass",
            NPP: "Highest of all terrestrial biomes",
            keyAdaptations: ["Drip tips on leaves (rapid water shedding)", "Buttress roots (shallow soil support)", "Epiphytes (canopy light competition)", "Cauliflory (trunk-flowering for pollinator access)"],
            biodiversity: "Highest species richness of any terrestrial biome",
            distribution: "Near equator: Amazon basin, Congo, Southeast Asia",
            threats: "Deforestation, agricultural conversion, fragmentation"
        },
        savanna: {
            climate: "Warm year-round (20–30°C), seasonal rainfall (500–1500 mm/year) with a distinct dry season",
            vegetationStructure: "Open grassland with scattered trees; grasses dominate ground layer",
            soilType: "Variable; often nutrient-poor, seasonally waterlogged or dry",
            NPP: "Moderate",
            keyAdaptations: ["Deep roots (water access in dry season)", "Thick bark (fire resistance)", "CAM/C4 photosynthesis (water use efficiency)", "Animal migration (following rainfall)"],
            biodiversity: "High vertebrate diversity, especially large mammals",
            distribution: "Sub-Saharan Africa, South America (Cerrado), Northern Australia",
            threats: "Overgrazing, fire suppression, agricultural conversion"
        },
        desert: {
            climate: "Extreme temperatures (hot desert: 20–49°C day; cold desert: extreme range), very low rainfall (<250 mm/year)",
            vegetationStructure: "Sparse; cacti, succulents, drought-deciduous shrubs, cryptobiotic soil crusts",
            soilType: "Thin, sandy or rocky, low organic matter, high mineral content",
            NPP: "Lowest of terrestrial biomes",
            keyAdaptations: ["Succulent water storage (cacti)", "CAM photosynthesis (night CO₂ uptake)", "Waxy cuticle and reduced leaves (reduce transpiration)", "Nocturnal activity (avoid heat)", "Highly concentrated urine (water conservation)"],
            biodiversity: "Low species richness but high endemism",
            distribution: "Sahara, Arabian, Australian, Atacama, Mojave, Gobi",
            threats: "Desertification from overgrazing, climate change expanding desert boundaries"
        },
        temperateGrassland: {
            climate: "Hot summers, cold winters, moderate and seasonal rainfall (250–750 mm/year), prone to drought",
            vegetationStructure: "Dominated by grasses; few trees due to fire and drought",
            soilType: "Deep, dark, nutrient-rich mollisols — among the most fertile soils on Earth",
            NPP: "Moderate",
            keyAdaptations: ["Fibrous root systems (soil stability and regrowth after fire/grazing)", "Dormancy in winter", "Wind pollination", "Burrowing animals (predator avoidance, temperature regulation)"],
            biodiversity: "Moderate — large herds of grazing mammals historically",
            distribution: "North American prairies, South American pampas, African veld, Eurasian steppes",
            threats: "Almost entirely converted to agriculture; most threatened biome globally"
        },
        temperateDeciduousForest: {
            climate: "Moderate temperature range (−30 to 30°C), moderate to high rainfall (750–1500 mm/year), four distinct seasons",
            vegetationStructure: "Canopy of broad-leaved deciduous trees, understorey shrubs, spring ephemeral ground layer",
            soilType: "Fertile, well-structured alfisols with good organic matter",
            NPP: "Moderate to high",
            keyAdaptations: ["Leaf abscission (water loss prevention in winter)", "Dormancy (cold survival)", "Thick bark insulation", "Spring leaf flush before canopy closes (ground-layer plants)"],
            biodiversity: "Moderate; significant vertebrate diversity, high invertebrate diversity",
            distribution: "Eastern North America, Western Europe, East Asia",
            threats: "Heavily fragmented by urbanisation and agriculture; acid rain; invasive species"
        },
        borealForest: {
            climate: "Very cold winters (−40°C), short cool summers, low precipitation (300–850 mm/year), mostly as snow",
            vegetationStructure: "Dense coniferous trees (spruce, fir, pine, larch) with sparse understorey; permafrost in northern sections",
            soilType: "Spodosols — acidic, leached, low fertility; peat in waterlogged areas",
            NPP: "Low to moderate",
            keyAdaptations: ["Needle-shaped leaves (snow shedding, reduced surface area, reduce transpiration)", "Dark colour (absorb limited light)", "Evergreen strategy (ready to photosynthesise when brief growing season arrives)", "Antifreeze proteins in some species"],
            biodiversity: "Low species richness but very high abundance of specialist species",
            distribution: "Northern Canada, Scandinavia, Russia (world's largest terrestrial biome by area)",
            threats: "Logging, permafrost thaw releasing methane, bark beetle outbreaks linked to warming"
        },
        tundra: {
            climate: "Very cold (mean annual temperature below −5°C), extremely low precipitation (<250 mm/year), permafrost, short growing season (6–10 weeks)",
            vegetationStructure: "Low-growing: mosses, lichens, sedges, dwarf shrubs — no trees due to permafrost and wind",
            soilType: "Gelisols — frozen permafrost layer beneath thin active layer; waterlogged in summer",
            NPP: "Very low",
            keyAdaptations: ["Low growth form (below wind chill)", "Rapid reproduction in short season", "High leaf density (maximise photosynthesis)", "Dark pigmentation (absorb heat)", "Hibernation and migration in animals"],
            biodiversity: "Very low species richness; high abundance of specialist species (lemmings, caribou, snowy owl)",
            distribution: "Arctic regions of North America, Europe, Asia; alpine tundra at high altitude",
            threats: "Permafrost thaw, warming at 2–4× global mean rate, oil extraction"
        },
        aquaticBiomes: {
            freshwater: {
                lakes: "Stratified by temperature (thermocline); nutrient inputs from watershed; phytoplankton productivity",
                rivers: "Unidirectional flow; zonation from headwater (rocky, fast) to estuary (slow, silty)",
                wetlands: "Transitional between aquatic and terrestrial; exceptionally high NPP and carbon storage"
            },
            marine: {
                openOcean: "Low nutrient, low NPP except at upwelling zones; phytoplankton base of food web",
                coralReefs: "Highest marine biodiversity; nutrient-poor but highly structured habitat; photosynthetic zooxanthellae",
                estuaries: "Transition zone of fresh and saltwater; very high NPP; nursery habitat for many marine species",
                intertidalZone: "Exposed at low tide; zonation by tidal exposure; extreme physical stress adaptations"
            }
        }
    },

    whittakerDiagram: {
        description: "A bioclimate diagram plotting mean annual temperature (x-axis) against mean annual precipitation (y-axis), with biome zones mapped as regions. Demonstrates that biome type is a deterministic function of climate.",
        keyPattern: "Moving from bottom-left (cold, dry = tundra/desert) to top-right (warm, wet = tropical rainforest), biomes transition predictably. The diagonal gradient from dry-cold (desert) to wet-warm (rainforest) runs through grassland, shrubland, and forest biomes.",
        limitations: "Does not account for seasonality of rainfall, soil type, fire regime, or evolutionary history — all of which modify predicted biome type"
    },

    adaptationCategories: {
        structural: "Physical features of the body — leaf shape, root depth, body size, colouration",
        physiological: "Internal biochemical or metabolic adaptations — CAM photosynthesis, antifreeze proteins, concentrated urine production",
        behavioural: "Learned or instinctive actions — migration, nocturnal activity, hibernation, burrowing"
    },

    climateChangeImpacts: {
        biomeShift: "Boreal forest expanding poleward into tundra; desert expanding at subtropical margins; alpine species losing habitat as snowlines rise",
        phenologyChange: "Timing mismatches between flowering, pollination, and fruiting; arrival of migratory species before food peaks",
        permafrostThaw: "Release of stored methane and CO₂ — a positive feedback accelerating warming",
        coralBleaching: "Thermal stress causes zooxanthellae expulsion — reef-building corals lose photosynthetic partners and die if bleaching is prolonged"
    },

    humanImpacts: {
        deforestation: "Tropical rainforest cleared at ~10 million hectares/year for agriculture and cattle ranching — largest driver of terrestrial biodiversity loss",
        agriculture: "Temperate grasslands >90% converted; conversion reduces carbon storage, increases erosion, and eliminates specialist grassland species",
        fragmentation: "Breaking continuous biome into isolated patches — reduces gene flow, increases edge effects, and creates extinction debt",
        invasiveSpecies: "Non-native species alter competitive balance — cheatgrass in North American grasslands increases fire frequency; cane toads in Australian savanna",
        desertification: "Overgrazing and poor land management converting savanna and grassland to desert — affects 1/3 of Earth's land surface"
    },

    topicSummary: {
        coreInsights: [
            "Biomes are defined by climate — primarily temperature and precipitation — not by geographic location; the same biome type occurs on multiple continents wherever climate conditions match.",
            "The Whittaker diagram formalises the climate-biome relationship: low temperature and low precipitation converge on tundra and cold desert; high temperature and high precipitation produce tropical rainforest.",
            "Net primary productivity (NPP) is highest in tropical rainforests (warm, wet, high light) and lowest in deserts and tundra (resource-limited) — NPP determines the energy available to support food webs.",
            "Convergent evolution produces structurally similar organisms in the same biome across continents: cacti (Americas) and euphorbias (Africa) are unrelated succulents with almost identical desert adaptations.",
            "Soils and vegetation co-determine each other: tropical rainforest soils are surprisingly poor (nutrients locked in biomass); temperate grassland soils are extraordinarily rich (mollisols) — the basis of global cereal agriculture.",
            "Biome boundaries are not fixed: climate change is already causing measurable poleward and upslope shifts in biome boundaries at rates faster than many species can migrate.",
            "Human activity has converted or significantly degraded the majority of temperate grassland and substantial fractions of tropical rainforest and savanna — making biome conservation one of the central challenges of the 21st century."
        ],
        keyRelationships: {
            temperatureVsNPP: "Positive — warmer biomes generally have higher NPP up to moisture limits",
            precipitationVsNPP: "Positive — wetter biomes have higher NPP up to temperature limits",
            latitudeVsBiodiversity: "Negative — species richness generally increases toward the equator (latitudinal diversity gradient)",
            soilFertilityVsBiomass: "Inverse in extreme cases — tropical rainforest has very low soil fertility but enormous above-ground biomass; nutrients are in the living organisms, not the soil",
            fragmentationVsExtinction: "Positive — increased fragmentation increases extinction probability, especially for large-ranging species"
        },
        biomeComparison: {
            tropicalRainforest: { temperature: "High (>25°C)", rainfall: "Very High (>2000mm)", NPP: "Highest", soilFertility: "Low (laterite)", biodiversity: "Highest" },
            savanna:            { temperature: "Warm (20-30°C)", rainfall: "Seasonal (500-1500mm)", NPP: "Moderate", soilFertility: "Variable", biodiversity: "High (vertebrates)" },
            desert:             { temperature: "Extreme range", rainfall: "Very Low (<250mm)", NPP: "Lowest", soilFertility: "Very Low", biodiversity: "Low (high endemism)" },
            temperateGrassland: { temperature: "Seasonal", rainfall: "Moderate (250-750mm)", NPP: "Moderate", soilFertility: "Highest (mollisol)", biodiversity: "Moderate" },
            temperateForest:    { temperature: "Moderate seasonal", rainfall: "Moderate-High (750-1500mm)", NPP: "Moderate-High", soilFertility: "Good (alfisol)", biodiversity: "Moderate" },
            borealForest:       { temperature: "Cold", rainfall: "Low-Moderate (300-850mm)", NPP: "Low-Moderate", soilFertility: "Low (spodosol)", biodiversity: "Low (high abundance)" },
            tundra:             { temperature: "Very Cold (<-5°C mean)", rainfall: "Very Low (<250mm)", NPP: "Very Low", soilFertility: "Very Low (permafrost)", biodiversity: "Very Low" }
        },
        commonMistakesToAvoid: [
            "Biomes are not defined by location — a tropical rainforest in Brazil and one in the Congo are the same biome type because they share climate, not because they are geographically linked",
            "Tropical rainforest soils are NOT fertile — virtually all nutrients are locked in the living biomass; cleared rainforest loses agricultural productivity rapidly",
            "Tundra and desert both receive low precipitation, but their temperature regimes are opposite — do not conflate them simply because both are 'dry'",
            "Adaptations are not 'choices' — organisms did not decide to adapt; natural selection favoured heritable variants better suited to the environment over many generations",
            "Climate change does not simply 'warm' biomes — it alters precipitation patterns, seasonality, and disturbance regimes, producing complex and not always predictable biome responses",
            "Desertification is not the same as natural desert — it is human-accelerated conversion of productive land caused by overgrazing, deforestation, and poor water management"
        ],
        connections: [
            "Evolution: convergent adaptations across biomes demonstrate that natural selection produces predictable solutions to common environmental challenges",
            "Carbon cycling: biomes are major carbon stores — tropical forests and boreal peat bogs together store more carbon than the atmosphere; their destruction accelerates climate change",
            "Agriculture: the most agriculturally productive soils on Earth (mollisols of temperate grasslands) formed under biomes now almost entirely converted to cropland",
            "Pharmacology: the majority of plant-derived medicines originate from tropical rainforests — biome loss directly threatens drug discovery",
            "Climate science: biomes act as climate feeders — forests increase local precipitation through evapotranspiration; their removal can shift regional climate, accelerating biome loss in a positive feedback"
        ],
        examReadinessChecklist: [
            "Can you position the seven major terrestrial biomes correctly on a Whittaker temperature-precipitation diagram?",
            "For each biome, can you state the climate, vegetation structure, soil type, NPP, and two specific organism adaptations?",
            "Can you explain why tropical rainforest soils are poor despite the biome's high productivity?",
            "Can you distinguish structural, physiological, and behavioural adaptations with one example each from a named biome?",
            "Can you explain the mechanism by which permafrost thaw acts as a positive feedback on climate change?",
            "Can you evaluate the relative severity of human impacts on at least three different biomes with specific data?"
        ]
    }
},


photosynthesis: {
    title: "Photosynthesis: Light Energy to Chemical Energy",

    databaseLinks: {
        misconceptions: [
            'lightReactions',
            'calvinCycle',
            'pigmentsAndAbsorption',
            'photosynthesisVsRespiration',
            'limitingFactors'
        ],
        contextualScenarios: [
            'lightReactions',
            'calvinCycle',
            'pigmentsAndAbsorption',
            'limitingFactors'
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
            'lightReactions',
            'calvinCycle',
            'pigmentsAndAbsorption',
            'limitingFactors'
        ]
    },

    conceptLinks: {
        "Photosynthesis converts light energy into chemical energy stored in glucose": {
            misconceptions:      ['lightReactions', 'photosynthesisVsRespiration'],
            scenarios:           ['lightReactions'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['lightReactions']
        },
        "Chlorophyll and accessory pigments absorb specific wavelengths of light": {
            misconceptions:      ['pigmentsAndAbsorption'],
            scenarios:           ['pigmentsAndAbsorption'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['pigmentsAndAbsorption']
        },
        "The light-dependent reactions produce ATP, NADPH, and O2 in the thylakoid membrane": {
            misconceptions:      ['lightReactions'],
            scenarios:           ['lightReactions'],
            studyTips:           ['diagrams', 'flashcards', 'specimens'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['lightReactions']
        },
        "The Calvin cycle uses ATP and NADPH to fix CO2 into G3P in the stroma": {
            misconceptions:      ['calvinCycle'],
            scenarios:           ['calvinCycle'],
            studyTips:           ['diagrams', 'comparisonTables', 'mnemonics', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['calvinCycle']
        },
        "Rate of photosynthesis is controlled by limiting factors": {
            misconceptions:      ['limitingFactors'],
            scenarios:           ['limitingFactors'],
            studyTips:           ['comparisonTables', 'flashcards', 'dissectionAndExperiment'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['limitingFactors']
        }
    },

    topicIntroduction: {
        overview: "Photosynthesis is the fundamental process by which plants, algae, and cyanobacteria capture electromagnetic energy from sunlight and transduce it into the chemical bond energy of organic molecules. It is the primary entry point of energy into almost every food web on Earth and the origin of essentially all atmospheric oxygen. Understanding photosynthesis at the molecular level requires integrating membrane biophysics, redox chemistry, enzyme kinetics, and thermodynamics into a coherent picture of how light becomes life.",
        whyItMatters: "Photosynthesis feeds every organism on Earth — directly or indirectly. It also underpins global carbon cycling, atmospheric oxygen maintenance, and the fossil fuel reserves that power industrial civilisation. Agricultural productivity, climate change mitigation through carbon sequestration, and the emerging field of artificial photosynthesis for renewable energy all depend on deep understanding of this process.",
        bigPicture: "Photosynthesis is divided into two coupled stages: the light-dependent reactions, which capture photon energy and use it to generate the chemical currency ATP and NADPH while splitting water to release O2; and the light-independent reactions (Calvin cycle), which use that currency to reduce CO2 into glyceraldehyde-3-phosphate (G3P), the precursor to glucose and all other organic molecules.",
        priorKnowledge: [
            "Cell biology: chloroplast structure — outer membrane, inner membrane, thylakoid, stroma, grana",
            "Biochemistry: ATP structure and function as energy currency",
            "Redox chemistry: oxidation as electron loss, reduction as electron gain",
            "Protein structure: membrane proteins, electron carriers, enzyme function",
            "Basic thermodynamics: energy transfer, free energy, endergonic vs exergonic reactions"
        ],
        topicRoadmap: [
            "Chloroplast ultrastructure and the two-stage organisation of photosynthesis",
            "Pigments: chlorophyll a, chlorophyll b, carotenoids — absorption spectra and action spectra",
            "Light-dependent reactions: Photosystem II, the electron transport chain, Photosystem I, photophosphorylation",
            "Water splitting (photolysis) and the origin of oxygen",
            "The Calvin cycle: carbon fixation (RuBisCO), reduction, and regeneration of RuBP",
            "Limiting factors: light intensity, CO2 concentration, temperature",
            "C3, C4, and CAM adaptations to different environments",
            "Connections to respiration, ecology, and biotechnology"
        ]
    },

    concepts: [
        "Photosynthesis converts light energy into chemical energy stored in glucose",
        "Chlorophyll and accessory pigments absorb specific wavelengths of light",
        "The light-dependent reactions produce ATP, NADPH, and O2 in the thylakoid membrane",
        "The Calvin cycle uses ATP and NADPH to fix CO2 into G3P in the stroma",
        "RuBisCO catalyses CO2 fixation in the Calvin cycle",
        "Rate of photosynthesis is controlled by limiting factors"
    ],

    theory: "Photosynthesis is a two-stage process occurring in the chloroplast. Light-dependent reactions in the thylakoid membrane transduce photon energy into ATP and NADPH. The Calvin cycle in the stroma uses these to reduce CO2 into organic carbon, sustaining life on Earth.",

    keyDefinitions: {
        "Photosynthesis": "The process by which light energy is converted into chemical energy stored in organic molecules",
        "Chloroplast": "Double-membrane organelle in plant cells where photosynthesis occurs",
        "Thylakoid": "Flattened membrane sacs inside the chloroplast where light reactions occur",
        "Granum": "Stack of thylakoids connected by lamellae",
        "Stroma": "Fluid-filled matrix surrounding thylakoids where the Calvin cycle occurs",
        "Chlorophyll a": "Primary photosynthetic pigment; absorbs red (680 nm) and blue-violet (430 nm) light",
        "Chlorophyll b": "Accessory pigment; absorbs blue (453 nm) and red-orange (642 nm) light; transfers energy to chlorophyll a",
        "Carotenoids": "Accessory pigments (yellows and oranges); extend absorption spectrum and protect against photooxidation",
        "Photosystem": "Protein-pigment complex in the thylakoid membrane that absorbs light and initiates electron flow",
        "Reaction Centre": "Core of a photosystem where charge separation occurs; P680 (PSII) or P700 (PSI)",
        "Antenna Complex": "Array of pigment molecules that capture photons and funnel energy to the reaction centre",
        "Photolysis": "Light-driven splitting of water molecules, releasing O2, H+, and electrons",
        "Photophosphorylation": "ATP synthesis driven by a proton gradient across the thylakoid membrane",
        "NADPH": "Reduced electron carrier; produced by PSI; supplies electrons and protons for the Calvin cycle",
        "Calvin Cycle": "Light-independent reactions in the stroma; uses ATP and NADPH to fix CO2 into G3P",
        "RuBisCO": "Ribulose-1,5-bisphosphate carboxylase/oxygenase; enzyme that catalyses CO2 fixation",
        "RuBP": "Ribulose-1,5-bisphosphate; 5-carbon CO2 acceptor molecule regenerated in the Calvin cycle",
        "G3P": "Glyceraldehyde-3-phosphate; 3-carbon product of the Calvin cycle; precursor to glucose",
        "Compensation Point": "Light intensity at which photosynthesis rate equals respiration rate (net gas exchange = 0)",
        "Limiting Factor": "Factor present at a suboptimal level that limits the rate of photosynthesis despite other factors being adequate"
    },

    chloroplastStructure: {
        outerMembrane: "Freely permeable to small molecules; controls entry of larger molecules via porins",
        innerMembrane: "Selectively permeable; contains transporters for metabolites",
        intermembraneSpace: "Between outer and inner membranes",
        thylakoidMembrane: "Site of light-dependent reactions; contains photosystems, electron carriers, ATP synthase",
        thylakoidLumen: "Interior of thylakoid sacs; site of water splitting; accumulates H+ during electron transport",
        stroma: "Site of Calvin cycle; contains RuBisCO, ATP, NADPH, and Calvin cycle enzymes",
        granum: "Stacked thylakoids (50–100 per granum); maximise membrane surface area for light capture"
    },

    pigmentsAndAbsorption: {
        absorptionSpectrum: "Graph of light absorption vs wavelength for a specific pigment in solution",
        actionSpectrum: "Graph of photosynthesis rate vs wavelength of incident light — reflects which wavelengths drive the reaction",
        chlorophyllA: {
            absorptionPeaks: "430 nm (blue-violet) and 680 nm (red)",
            reflectedLight: "Green (~550 nm) — hence plant colour",
            role: "Primary pigment; transfers excitation energy to reaction centre"
        },
        chlorophyllB: {
            absorptionPeaks: "453 nm (blue) and 642 nm (red-orange)",
            role: "Accessory pigment; extends absorption spectrum; transfers energy to chlorophyll a"
        },
        carotenoids: {
            types: "Carotenes (orange) and xanthophylls (yellow)",
            absorptionPeaks: "400–500 nm (blue-violet)",
            roles: ["Extend light-harvesting range", "Protect chlorophyll from photooxidation by quenching singlet oxygen"],
            example: "Beta-carotene in carrots and leaves"
        },
        engelmannExperiment: {
            description: "Engelmann (1882) illuminated Spirogyra with a prism to produce a spectrum, added aerobic bacteria, and observed clustering near red and blue wavelengths — directly linking absorption wavelengths to photosynthetic activity",
            significance: "First experimental demonstration that the action spectrum matches the absorption spectrum of chlorophyll"
        }
    },

    lightDependentReactions: {
        location: "Thylakoid membrane",
        overview: "Photon energy is used to drive electron flow from water to NADP+, producing ATP and NADPH. Water is oxidised (split), releasing O2. Electrons flow through two photosystems linked by an electron transport chain.",
        photosystemII: {
            reactionCentre: "P680 (absorbs maximally at 680 nm)",
            process: [
                "Photon absorbed by antenna complex; energy funnelled to P680",
                "P680 excited; loses electron to primary electron acceptor",
                "Oxidised P680 (P680+) is re-reduced by electrons from water splitting (photolysis)",
                "2H₂O → 4H+ + 4e- + O₂ (catalysed by oxygen-evolving complex)"
            ],
            output: "Electrons to plastoquinone (PQ); H+ released into thylakoid lumen; O₂ released"
        },
        electronTransportChain: {
            components: ["Plastoquinone (PQ)", "Cytochrome b6f complex", "Plastocyanin (PC)"],
            function: "Electrons pass from PSII to PSI; proton pumping across thylakoid membrane builds proton gradient (H+ lumen > stroma)",
            chemiOsmosis: "H+ flows back through ATP synthase (CF0-CF1) from lumen to stroma; drives ATP synthesis (photophosphorylation)"
        },
        photosystemI: {
            reactionCentre: "P700 (absorbs maximally at 700 nm)",
            process: [
                "Photon absorbed; P700 excited",
                "Electron passed to ferredoxin",
                "NADP+ reductase uses ferredoxin electrons to reduce NADP+ + H+ → NADPH"
            ],
            output: "NADPH"
        },
        summary: {
            inputs: "12H₂O, 12NADP+, 18ADP + 18Pi, light",
            outputs: "6O₂, 12NADPH, 18ATP"
        },
        cyclicPhotophosphorylation: {
            description: "Electrons from PSI cycle back to cytochrome b6f complex instead of reducing NADP+",
            output: "ATP only (no NADPH, no O₂)",
            significance: "Adjusts ATP:NADPH ratio when Calvin cycle demand shifts"
        }
    },

    calvinCycle: {
        location: "Stroma",
        overview: "A cyclic series of enzyme-catalysed reactions that use ATP and NADPH to reduce CO2 into G3P. Named after Melvin Calvin; elucidated using radioactive 14C tracing.",
        stages: {
            carbonFixation: {
                enzyme: "RuBisCO (ribulose-1,5-bisphosphate carboxylase/oxygenase)",
                reaction: "CO₂ + RuBP (C5) → 2 × 3-phosphoglycerate (3-PGA, C3)",
                note: "RuBisCO is the most abundant enzyme on Earth; despite its central role, it is remarkably slow (~3 reactions/second) and mistakes CO₂ for O₂ (photorespiration)"
            },
            reduction: {
                reaction: "3-PGA + ATP + NADPH → G3P + ADP + NADP+ + Pi",
                note: "This is where ATP and NADPH from the light reactions are consumed"
            },
            regenerationOfRuBP: {
                reaction: "G3P + ATP → RuBP",
                note: "5 of every 6 G3P molecules are used to regenerate RuBP; only 1 in 6 exits the cycle as net fixed carbon"
            }
        },
        stoichiometry: {
            perCO2Fixed: "3 ATP + 2 NADPH consumed",
            perGlucose: "To produce 1 glucose (C6): 6 turns of the cycle, consuming 18 ATP and 12 NADPH",
            netOutput: "1 G3P net per CO₂ fixed (used for glucose, sucrose, starch, amino acid, and lipid biosynthesis)"
        },
        rubiscoDetail: {
            fullName: "Ribulose-1,5-bisphosphate carboxylase/oxygenase",
            significance: "Responsible for virtually all biological carbon fixation on Earth",
            limitation: "Low specificity: O₂ competes with CO₂ at the active site → photorespiration, which wastes fixed carbon and reduces photosynthetic efficiency",
            biotechTarget: "Engineering RuBisCO with higher CO₂ specificity is a major goal of synthetic biology for improved crop yields"
        }
    },

    limitingFactors: {
        blackmanLaw: "The rate of a process is limited by the factor present at the most limiting quantity — increasing a non-limiting factor has no effect on rate",
        lightIntensity: {
            lowLight: "Rate increases linearly with light intensity — photons are the limiting factor",
            saturationPoint: "Beyond a threshold, rate plateaus — another factor (CO₂, temperature) becomes limiting",
            compensationPoint: "Light intensity at which gross photosynthesis = respiration (net O₂ exchange = 0)"
        },
        co2Concentration: {
            effect: "Increasing CO₂ increases rate (at adequate light and temperature) until enzyme or light saturation",
            greenhouseCO2: "Glasshouse growers enrich CO₂ to 0.1% (vs atmospheric 0.04%) to boost yield"
        },
        temperature: {
            effect: "Rate increases with temperature (up to ~35°C for most C3 plants) due to enzyme kinetics (Q₁₀)",
            optimalRange: "25–35°C for most temperate plants",
            high: "Above ~40°C: RuBisCO and Calvin cycle enzymes denature; stomata close to prevent water loss",
            interaction: "Temperature only limits rate when light and CO₂ are not themselves limiting"
        },
        waterAvailability: {
            indirect: "Water is both a substrate for photolysis and a regulator of stomatal opening; drought-induced stomatal closure reduces CO₂ uptake, limiting Calvin cycle"
        }
    },

    c3c4cam: {
        c3Plants: {
            description: "First product of CO₂ fixation is 3-PGA (3 carbons) — the standard pathway",
            examples: "Wheat, rice, soybean",
            limitation: "Photorespiration significant at high temperature and low CO₂"
        },
        c4Plants: {
            description: "CO₂ first fixed into oxaloacetate (4 carbons) by PEP carboxylase in mesophyll cells; CO₂ concentrated and released around RuBisCO in bundle sheath cells",
            advantage: "Suppresses photorespiration; efficient at high temperature and light",
            examples: "Maize, sugarcane, sorghum"
        },
        camPlants: {
            description: "CO₂ fixed at night into organic acids (stored in vacuoles); released for Calvin cycle during day with stomata closed",
            advantage: "Minimises water loss in arid environments",
            examples: "Cacti, pineapple, agave"
        }
    },

    applications: [
        "Agriculture: optimising light, CO₂, and temperature to maximise crop yield",
        "Biotechnology: engineering RuBisCO for greater efficiency; synthetic photosynthesis",
        "Renewable energy: artificial photosynthesis to produce hydrogen or organic fuels",
        "Climate science: understanding the global carbon cycle and carbon sequestration",
        "Medicine: understanding chloroplast-derived metabolites (e.g. carotenoids as antioxidants)"
    ],

    topicSummary: {
        coreInsights: [
            "Photosynthesis is a two-stage energy transduction process: light reactions convert photon energy into ATP and NADPH; the Calvin cycle uses these to fix CO₂ into G3P.",
            "Chlorophyll a is the primary pigment; accessory pigments (chlorophyll b, carotenoids) extend the absorption spectrum and funnel energy to the reaction centres.",
            "PSII splits water (photolysis), generating O₂ and electrons; PSI reduces NADP+ to NADPH. Both are powered by separate photon absorption events.",
            "The proton gradient across the thylakoid membrane — built by electron transport and photolysis — drives ATP synthesis via ATP synthase (chemiosmosis).",
            "RuBisCO, the most abundant enzyme on Earth, catalyses CO₂ fixation in the Calvin cycle; its low speed and O₂ sensitivity (photorespiration) limit photosynthetic efficiency.",
            "Limiting factors (light, CO₂, temperature) control photosynthesis rate; only the most limiting factor constrains rate — Blackman's Law.",
            "C4 and CAM pathways are evolutionary adaptations that concentrate CO₂ around RuBisCO, suppressing photorespiration in hot, arid, or high-light environments."
        ],
        keyEquations: {
            overallPhotosynthesis: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",
            photolysis: "2H₂O → 4H+ + 4e- + O₂",
            netLightReactions: "12H₂O + 12NADP+ + 18ADP + 18Pi + light → 6O₂ + 12NADPH + 18ATP",
            calvinPerGlucose: "6CO₂ + 18ATP + 12NADPH → C₆H₁₂O₆ + 18ADP + 12NADP+ + 18Pi"
        },
        inhibitionComparison: {
            lightReactions:  { location: "Thylakoid membrane", inputs: "Light, H₂O, ADP+Pi, NADP+", outputs: "ATP, NADPH, O₂" },
            calvinCycle:     { location: "Stroma",             inputs: "CO₂, ATP, NADPH",          outputs: "G3P, ADP, NADP+" }
        },
        commonMistakesToAvoid: [
            "Photosynthesis does not occur only in leaves — any green (chlorophyll-containing) tissue, including stems, unripe fruit, and guard cells, can photosynthesise",
            "O₂ produced in photosynthesis comes from water (photolysis), NOT from CO₂ — confirmed by isotope tracing with ¹⁸O",
            "The Calvin cycle is light-independent, not 'dark reactions' — it can run in light or dark as long as ATP and NADPH are available",
            "Glucose is not a direct product of the Calvin cycle — G3P is; glucose is synthesised from G3P outside the cycle",
            "Chlorophyll reflects green light — it does NOT absorb green; green is the least effective wavelength for photosynthesis",
            "Increasing light beyond the saturation point does not increase rate — CO₂ or temperature then become limiting"
        ],
        connections: [
            "Respiration: photosynthesis and cellular respiration are coupled — G3P and glucose feed glycolysis; ATP and NADPH from photosynthesis mirror those produced in the ETC",
            "Ecology: primary productivity, food web energy flow, and carbon cycling all depend on photosynthetic rate",
            "Agriculture: crop yield is directly determined by photosynthetic efficiency under field limiting factors",
            "Climate: photosynthesis is the primary CO₂ sink; deforestation and ocean warming reduce global carbon sequestration capacity",
            "Evolution: the Great Oxidation Event (~2.4 Gya) was caused by cyanobacterial photosynthesis producing O₂ — transforming Earth's atmosphere and enabling aerobic life"
        ],
        examReadinessChecklist: [
            "Can you draw and label a chloroplast cross-section, locating where each stage of photosynthesis occurs?",
            "Can you trace the path of an electron from water to NADPH through both photosystems?",
            "Can you explain chemiosmosis in the chloroplast, including where H+ accumulates and how ATP synthase works?",
            "Can you draw the three stages of the Calvin cycle with reactants and products at each stage?",
            "Can you sketch and interpret a graph showing the effect of each limiting factor on photosynthesis rate?",
            "Can you distinguish the absorption spectrum of chlorophyll from the action spectrum of photosynthesis and explain why they differ slightly?"
        ]
    }
},

symbiosis: {
    title: "Symbiosis: Ecological Relationships Between Species",

    databaseLinks: {
        misconceptions: [
            'symbiosisDefinitions',
            'mutualismMechanisms',
            'parasitismAndPathogenicity',
            'commensalismEvidence',
            'coevolution'
        ],
        contextualScenarios: [
            'mutualismMechanisms',
            'parasitismAndPathogenicity',
            'commensalismEvidence',
            'coevolution'
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
            'symbiosisDefinitions',
            'mutualism',
            'parasitism',
            'coevolution'
        ]
    },

    conceptLinks: {
        "Symbiosis describes persistent interspecific associations with fitness consequences": {
            misconceptions:      ['symbiosisDefinitions'],
            scenarios:           ['mutualismMechanisms'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['symbiosisDefinitions']
        },
        "Mutualism benefits both partners through reciprocal exploitation": {
            misconceptions:      ['mutualismMechanisms'],
            scenarios:           ['mutualismMechanisms'],
            studyTips:           ['diagrams', 'specimens', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['mutualism']
        },
        "Parasitism involves fitness gain for one partner at direct cost to the host": {
            misconceptions:      ['parasitismAndPathogenicity'],
            scenarios:           ['parasitismAndPathogenicity'],
            studyTips:           ['specimens', 'flashcards', 'diagrams'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['parasitism']
        },
        "Commensalism is association with benefit to one partner and no measurable effect on the other": {
            misconceptions:      ['commensalismEvidence'],
            scenarios:           ['commensalismEvidence'],
            studyTips:           ['comparisonTables', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand', 'evaluate'],
            assessmentQuestions: ['symbiosisDefinitions']
        },
        "Coevolution drives reciprocal adaptation between symbiotic partners": {
            misconceptions:      ['coevolution'],
            scenarios:           ['coevolution'],
            studyTips:           ['diagrams', 'mnemonics', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['coevolution']
        }
    },

    topicIntroduction: {
        overview: "Symbiosis — from the Greek for 'living together' — describes any persistent, intimate association between individuals of two different species. Far from being rare or exotic, symbiotic relationships are ubiquitous: every plant root system harbours mycorrhizal fungi, every animal gut is colonised by microbial communities, and every coral reef exists because of an ancient mutualism between cnidarians and photosynthetic dinoflagellates. Symbiosis is not a peripheral topic in ecology — it is a primary driver of biodiversity, ecosystem function, and evolutionary novelty.",
        whyItMatters: "Understanding symbiosis is essential for medicine (the human microbiome, parasitic disease, antibiotic resistance), agriculture (nitrogen-fixing bacteria, mycorrhizal networks, crop pests), conservation biology (coral bleaching, pollinator decline), and evolutionary biology (the endosymbiotic origin of mitochondria and chloroplasts). The boundaries between mutualism, commensalism, and parasitism are not fixed — they shift with environmental conditions, and this dynamic nature makes symbiosis one of the most conceptually rich areas of modern biology.",
        bigPicture: "Symbiotic relationships exist on a continuum from mutualism (both partners benefit) through commensalism (one benefits, one unaffected) to parasitism (one benefits at the other's expense). These categories are analytical tools, not rigid biological categories — the same association can shift along this continuum as environmental conditions change. Coevolution between partners produces the exquisite specificity and mutual adaptations that make symbioses among the most elegant subjects in all of biology.",
        priorKnowledge: [
            "Basic ecology: populations, communities, and ecosystem interactions",
            "Natural selection and adaptation",
            "Basic cell biology: prokaryotes vs eukaryotes",
            "Nutrition modes: autotrophy, heterotrophy, chemotrophy",
            "Basic immunology: host-pathogen recognition",
            "Evolutionary concepts: fitness, selection pressure, co-adaptation"
        ],
        topicRoadmap: [
            "Defining symbiosis: terminology, categories, and the continuum model",
            "Mutualism: obligate vs facultative, nutritional and defensive mutualisms",
            "Commensalism: evidence problems and the continuum between commensalism and mutualism",
            "Parasitism: ectoparasites, endoparasites, brood parasites, and virulence evolution",
            "Coevolution: arms races, the Red Queen hypothesis, and cospeciation",
            "Endosymbiosis: the origin of mitochondria and chloroplasts",
            "The human microbiome as a symbiotic system",
            "Applied symbiosis: agriculture, medicine, and conservation"
        ]
    },

    concepts: [
        "Symbiosis describes persistent interspecific associations with fitness consequences",
        "Mutualism benefits both partners through reciprocal exploitation",
        "Commensalism is association with benefit to one partner and no measurable effect on the other",
        "Parasitism involves fitness gain for one partner at direct cost to the host",
        "Symbiotic relationships exist on a continuum and can shift with environmental conditions",
        "Coevolution drives reciprocal adaptation between symbiotic partners"
    ],

    theory: "Symbiosis encompasses the full range of persistent interspecific associations — mutualism, commensalism, and parasitism — and is a major driver of evolutionary change through coevolution, endosymbiosis, and the shaping of ecological communities.",

    keyDefinitions: {
        "Symbiosis": "Any persistent, intimate ecological association between individuals of two different species, regardless of the fitness outcome for either partner",
        "Mutualism": "Symbiotic association in which both partners experience increased fitness (net benefit to each)",
        "Commensalism": "Symbiotic association in which one partner benefits and the other experiences no measurable fitness change",
        "Parasitism": "Symbiotic association in which one partner (parasite) gains fitness at a direct cost to the other (host)",
        "Host": "The organism that harbours a symbiont, particularly used in parasitism and endosymbiosis",
        "Symbiont": "The organism living in association with a host; may be mutualistic, commensal, or parasitic",
        "Ectoparasite": "Parasite living on the external surface of the host (e.g. ticks, fleas, lice)",
        "Endoparasite": "Parasite living within the host's body (e.g. tapeworms, Plasmodium, Toxoplasma)",
        "Obligate symbiosis": "Association from which one or both partners cannot survive independently",
        "Facultative symbiosis": "Association that is beneficial but not essential for survival of either partner",
        "Coevolution": "Reciprocal evolutionary change in two interacting species, each acting as a selective pressure on the other",
        "Endosymbiosis": "Form of mutualism in which one organism lives permanently inside the cells or body of another",
        "Virulence": "Degree of harm a parasite causes to its host; shaped by evolutionary trade-offs between transmission and host survival",
        "Mycorrhiza": "Mutualistic association between plant roots and soil fungi, facilitating mineral nutrient uptake in exchange for photosynthate",
        "Nitrogen fixation": "Conversion of atmospheric N₂ to biologically usable NH₃/NH₄⁺, performed by diazotrophic bacteria including Rhizobium in root nodules"
    },

    mechanismOfAction: {
        mutualismMechanisms: {
            nutritional: {
                description: "Partners exchange limiting nutrients or metabolic products neither can produce independently",
                examples: [
                    "Rhizobium fixes N₂ for legume; receives photosynthate (C source) in return",
                    "Mycorrhizal fungi deliver phosphate and water to plant roots; receive sugars",
                    "Coral-Symbiodinium: dinoflagellate photosynthesis provides up to 90% of coral energy needs"
                ]
            },
            defensive: {
                description: "One partner protects the other from predators, pathogens, or competitors",
                examples: [
                    "Acacia–ant mutualism: ants aggressively defend Acacia against herbivores; receive food bodies and hollow thorns for nesting",
                    "Clownfish–anemone: anemone stings protect clownfish; clownfish chase away butterfly fish that eat anemones"
                ]
            },
            reproductive: {
                description: "One partner facilitates reproduction of the other",
                examples: [
                    "Fig–fig wasp mutualism: wasp pollinates fig flowers; fig provides oviposition site and larval food",
                    "Yucca–yucca moth: obligate, highly specific reciprocal pollination and seed predation"
                ]
            }
        },
        parasitismMechanisms: {
            resourceExtraction: "Parasite consumes host tissues, blood, or metabolic products directly",
            immunoevasion: "Parasite evolves mechanisms to avoid host immune detection (antigenic variation in Trypanosoma, intracellular hiding in Plasmodium)",
            manipulationOfHostBehaviour: "Some parasites alter host behaviour to increase transmission (Toxoplasma reduces rodent fear of cats; Ophiocordyceps directs ant climbing behaviour)",
            virulenceEvolution: "Natural selection favours intermediate virulence — too lethal kills host before transmission; too mild fails to compete with other parasites"
        },
        coevolutionaryMechanisms: {
            armsRace: "Progressive escalation of parasite offence (immune evasion) and host defence (recognition) — each advance in one partner selects for counter-advance in the other",
            redQueen: "Frequency-dependent selection maintains genetic diversity in both host and parasite populations — rare host genotypes resistant to common parasites are favoured, driving continuous cycling",
            cospeciation: "Host and symbiont speciate in parallel — phylogenetic trees of host and symbiont mirror each other (seen in louse-mammal associations)"
        }
    },

    symbiosisTypes: {
        mutualism: {
            obligate: {
                description: "Both partners entirely dependent on the association for survival or reproduction",
                examples: ["Mitochondria and eukaryotic cells (endosymbiosis)", "Yucca–yucca moth", "Rhizobium–legume under nitrogen-limiting conditions"]
            },
            facultative: {
                description: "Both partners benefit but can survive independently",
                examples: ["Clownfish–anemone (clownfish survive without anemone in captivity)", "Oxpecker–large mammal"]
            }
        },
        commensalism: {
            definition: "One partner benefits; host is unaffected — though truly neutral associations are rare and difficult to demonstrate experimentally",
            examples: [
                "Epiphytic orchids on tropical trees (orchid benefits from light access; tree structurally unaffected)",
                "Remora fish attached to sharks (remora accesses food scraps; shark unaffected)",
                "Barnacles on whale skin (barnacle gains transport and access to plankton; whale unaffected)"
            ],
            evidenceChallenge: "Demonstrating true commensalism requires showing zero fitness effect on the host under all conditions — extremely difficult; most 'commensal' associations are likely weakly mutualistic or parasitic depending on context"
        },
        parasitism: {
            ectoparasites: {
                examples: ["Ticks (Ixodes) — transmit Lyme disease", "Fleas (Siphonaptera)", "Sea lice (Lepeophtheirus) on farmed salmon"]
            },
            endoparasites: {
                examples: ["Plasmodium (malaria)", "Taenia solium (tapeworm)", "Toxoplasma gondii"]
            },
            broodParasites: {
                description: "Parasite exploits host's parental behaviour without physical harm",
                examples: ["Cuckoo (Cuculus canorus) lays eggs in warbler nests — host rears cuckoo chick exclusively"]
            },
            hyperparasites: {
                description: "Parasite of a parasite",
                examples: ["Bacteriophages infecting bacterial pathogens", "Parasitic wasps that parasitise other parasitic wasps"]
            }
        }
    },

    coevolution: {
        armsRace: {
            description: "Reciprocal escalation of offensive and defensive adaptations between host and parasite",
            example: "Myxoma virus virulence evolution in Australian rabbits: initial high virulence → rabbit resistance evolves → virus virulence attenuates → dynamic equilibrium"
        },
        redQueenHypothesis: {
            proposedBy: "Leigh Van Valen (1973)",
            principle: "Organisms must continuously evolve merely to maintain fitness relative to co-evolving partners — 'It takes all the running you can do, to keep in the same place'",
            evidence: "Sexual reproduction maintains genetic diversity against rapidly evolving parasites — Potamopyrgus snails reproduce sexually in parasite-rich habitats, asexually in parasite-poor habitats"
        },
        cospeciation: {
            description: "Host speciation events drive parallel symbiont speciation, producing congruent phylogenies",
            example: "Buchnerabacteria (endosymbionts of aphids) — phylogeny exactly matches aphid host phylogeny over 150 million years"
        },
        mutualistCoevolution: {
            description: "Mutualistic partners evolve reciprocal specialisation — not arms race but complementarity",
            example: "Darwin's hawk moth (Xanthopan morganii) and Angraecum sesquipedale orchid — 30 cm nectar spur precisely matches moth proboscis length; Darwin predicted the moth's existence from the orchid alone before it was discovered"
        }
    },

    endosymbiosis: {
        endosymbioticTheory: {
            proposedBy: "Lynn Margulis (1967)",
            evidence: [
                "Mitochondria and chloroplasts have their own circular DNA (like prokaryotes)",
                "Both have double membranes — outer membrane from host engulfment, inner from original prokaryote",
                "Both replicate by binary fission independently of host cell division",
                "Their ribosomes are 70S (prokaryotic type) not 80S (eukaryotic type)",
                "Antibiotic sensitivity: mitochondrial ribosomes sensitive to prokaryotic antibiotics (e.g. chloramphenicol)"
            ],
            primaryEndosymbiosis: "α-proteobacterium engulfed by archaeal host → mitochondrion; cyanobacterium engulfed → chloroplast",
            secondaryEndosymbiosis: "Eukaryote engulfs another eukaryote containing chloroplast → explains triple/quadruple membrane chloroplasts in some algae"
        }
    },

    humanMicrobiome: {
        overview: "The human body is colonised by approximately 3.8 × 10¹³ bacteria (roughly equal to human cell number), constituting the microbiome — a community of largely mutualistic symbionts",
        keyRoles: [
            "Gut microbiome ferments indigestible polysaccharides, producing short-chain fatty acids (energy source for colonocytes)",
            "Competitive exclusion of pathogenic bacteria (colonisation resistance)",
            "Immune system education and regulation (Bacteroides fragilis produces polysaccharide A, preventing colitis)",
            "Synthesis of vitamin K and B vitamins",
            "Enteric nervous system modulation (gut-brain axis)"
        ],
        dysbiosis: "Disruption of normal microbiome composition (e.g. by antibiotics) — associated with Clostridioides difficile infection, inflammatory bowel disease, and potentially metabolic syndrome",
        continuum: "The microbiome illustrates the symbiosis continuum — the same bacterial species may be mutualistic in a healthy host, commensal in an immunocompetent individual, and pathogenic (opportunistic) in an immunocompromised host"
    },

    applications: [
        "Agriculture: inoculation of legume seeds with Rhizobium to reduce synthetic nitrogen fertiliser use",
        "Medicine: faecal microbiota transplantation (FMT) to restore microbiome after C. difficile infection",
        "Biocontrol: using parasitoid wasps (Trichogramma) to control crop pest populations instead of pesticides",
        "Conservation: coral reef protection requires understanding and preserving the coral-Symbiodinium mutualism",
        "Antibiotic resistance: understanding parasite-host coevolution informs strategies to slow resistance evolution",
        "Drug discovery: parasite-specific metabolic pathways (absent in host) are targets for antiparasitic drugs"
    ],

    topicSummary: {
        coreInsights: [
            "Symbiosis is not a fixed category but a continuum — the same association can be mutualistic, commensal, or parasitic depending on environmental conditions and the organisms' physiological states.",
            "Mutualism is maintained by reciprocal exploitation, not altruism — each partner gains fitness; evolutionary cheaters are kept in check by partner sanctions and specificity.",
            "True commensalism is exceedingly difficult to demonstrate — demonstrating zero fitness effect on the host under all conditions is practically impossible, and most 'commensal' associations are context-dependent mutualisms or very low-grade parasitisms.",
            "Virulence is not maximised by natural selection — intermediate virulence is favoured when transmission depends on host survival; highly virulent parasites that kill hosts rapidly are selected against unless transmission is rapid.",
            "The endosymbiotic origin of mitochondria and chloroplasts demonstrates that parasitism, mutualism, and endosymbiosis exist on an evolutionary continuum — what began as engulfment became permanent metabolic integration.",
            "Coevolution drives arms races in host-parasite systems and complementary specialisation in mutualistic systems — the Red Queen hypothesis explains why sexual reproduction and immune diversity are maintained.",
            "The human microbiome exemplifies obligate mutualism at massive scale — the gut bacterial community is so deeply integrated with human physiology that it functions as a metabolic organ."
        ],
        inhibitionComparison: {
            mutualism:     { partnerA: "Benefits (+)",  partnerB: "Benefits (+)",    obligacy: "Obligate or facultative",  example: "Rhizobium–legume" },
            commensalism:  { partnerA: "Benefits (+)",  partnerB: "No effect (0)",   obligacy: "Usually facultative",      example: "Epiphytic orchid–tree" },
            parasitism:    { partnerA: "Benefits (+)",  partnerB: "Harmed (−)",      obligacy: "Often obligate for parasite", example: "Plasmodium–human" },
            amensalism:    { partnerA: "No effect (0)", partnerB: "Harmed (−)",      obligacy: "Not applicable",           example: "Penicillium producing penicillin near bacteria" }
        },
        commonMistakesToAvoid: [
            "Symbiosis does NOT mean mutualism — symbiosis is the umbrella term for all persistent interspecific associations, including parasitism",
            "Commensalism is not proven by demonstrating benefit to one partner — you must also demonstrate zero effect on the other, which is experimentally very difficult",
            "Parasites are NOT always selected to become less virulent — virulence evolution depends on the transmission mode; vector-borne parasites can maintain high virulence because they do not depend on host mobility for transmission",
            "Endosymbiosis is NOT parasitism that became tolerated — it represents a fundamental transition in cellular integration over hundreds of millions of years",
            "Coevolution does NOT require both species to change at the same rate — asymmetric coevolution (one partner evolves faster) is common",
            "The human microbiome is NOT simply commensal — the vast majority of gut bacteria are mutualistic, performing metabolic functions the host cannot perform alone"
        ],
        connections: [
            "Evolution: symbiosis is a major source of evolutionary novelty — the eukaryotic cell itself arose from endosymbiosis",
            "Ecology: mutualistic networks (plant-pollinator, plant-mycorrhizal) underpin ecosystem productivity and stability",
            "Medicine: parasitic diseases (malaria, tuberculosis, helminths) remain leading causes of global mortality; microbiome disruption underlies numerous chronic diseases",
            "Immunology: host immune systems are fundamentally shaped by co-evolution with parasites — the hygiene hypothesis proposes that reduced parasite exposure drives autoimmune disease",
            "Agriculture: nitrogen-fixing symbioses fix approximately 120 million tonnes of N₂ per year globally — comparable to industrial fertiliser production",
            "Climate: coral bleaching (breakdown of coral-Symbiodinium mutualism driven by thermal stress) is among the most visible ecological consequences of climate change"
        ],
        examReadinessChecklist: [
            "Can you define symbiosis, mutualism, commensalism, and parasitism with precision and explain why commensalism is the hardest to demonstrate?",
            "Can you give two mechanistically distinct examples of mutualism (nutritional, defensive, reproductive) and explain the reciprocal benefit in each?",
            "Can you explain virulence evolution — why natural selection does not always favour maximum virulence?",
            "Can you describe the endosymbiotic theory with four lines of evidence and explain why it is now universally accepted?",
            "Can you explain the Red Queen hypothesis with a specific biological example?",
            "Can you apply the symbiosis continuum concept to explain how the same organism can be mutualistic, commensal, or parasitic depending on context?"
        ]
    }
},

nutrientCycles: {
    title: "Nutrient Cycles: Carbon, Nitrogen, Phosphorus, and Water",

    // ── LAYER 1: DATABASE LINKAGE ────────────────────────────────────────────

    databaseLinks: {
        misconceptions: [
            'carbonCycle',
            'nitrogenCycle',
            'phosphorusCycle',
            'waterCycle',
            'humanImpact'
        ],
        contextualScenarios: [
            'carbonCycle',
            'nitrogenCycle',
            'phosphorusCycle',
            'waterCycle'
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
            'carbonCycle',
            'nitrogenCycle',
            'phosphorusCycle',
            'waterCycle'
        ]
    },

    // ── LAYER 1: CONCEPT LINKS ───────────────────────────────────────────────

    conceptLinks: {
        "Carbon cycles through living organisms, atmosphere, oceans, and rocks": {
            misconceptions:      ['carbonCycle'],
            scenarios:           ['carbonCycle'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['carbonCycle']
        },
        "Nitrogen fixation converts atmospheric N₂ into bioavailable ammonia": {
            misconceptions:      ['nitrogenCycle'],
            scenarios:           ['nitrogenCycle'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['nitrogenCycle']
        },
        "Phosphorus cycles without a significant atmospheric phase": {
            misconceptions:      ['phosphorusCycle'],
            scenarios:           ['phosphorusCycle'],
            studyTips:           ['comparisonTables', 'flashcards'],
            assessmentRubrics:   ['understand', 'apply'],
            assessmentQuestions: ['phosphorusCycle']
        },
        "Water cycles through evaporation, condensation, precipitation, and flow": {
            misconceptions:      ['waterCycle'],
            scenarios:           ['waterCycle'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['waterCycle']
        },
        "Human activities disrupt nutrient cycles causing eutrophication and climate change": {
            misconceptions:      ['humanImpact'],
            scenarios:           ['carbonCycle', 'nitrogenCycle', 'phosphorusCycle'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['carbonCycle', 'nitrogenCycle', 'phosphorusCycle']
        }
    },

    // ── LAYER 2: TOPIC FRAMING ───────────────────────────────────────────────

    topicIntroduction: {
        overview: "Nutrient cycles — also called biogeochemical cycles — describe the pathways by which chemical elements essential for life move between living organisms and the non-living environment. Carbon, nitrogen, phosphorus, and water are cycled continuously through biotic and abiotic compartments: the atmosphere, hydrosphere, lithosphere, and biosphere. These cycles are not isolated; they are deeply interconnected, and disruption of one invariably affects the others.",
        whyItMatters: "Every molecule of protein, DNA, and ATP in your body was assembled from atoms cycled through ecosystems over geological time. Human activities — fossil fuel combustion, synthetic fertiliser production, deforestation, and industrial agriculture — have accelerated and disrupted these cycles at a rate unprecedented in Earth's history, driving climate change, ocean acidification, and the collapse of aquatic ecosystems through eutrophication.",
        bigPicture: "Nutrient cycles maintain the chemical composition of the biosphere within the narrow ranges that support life. Atoms are not created or destroyed — they are endlessly borrowed from the environment, incorporated into living things, and returned. The rate at which this borrowing and return occurs is regulated by biological processes (photosynthesis, respiration, decomposition, nitrogen fixation) and physical processes (weathering, erosion, precipitation, evaporation).",
        priorKnowledge: [
            "Photosynthesis: reactants, products, and where it occurs",
            "Cellular respiration: aerobic and anaerobic pathways",
            "Trophic levels: producers, consumers, decomposers",
            "Ecology: biotic and abiotic components of ecosystems",
            "Basic chemistry: chemical formulae, oxidation states, solubility"
        ],
        topicRoadmap: [
            "The carbon cycle: photosynthesis, respiration, decomposition, combustion, ocean exchange, and geological reservoirs",
            "The nitrogen cycle: fixation, nitrification, assimilation, ammonification, denitrification — and the organisms that drive each step",
            "The phosphorus cycle: weathering, uptake, decomposition — the slowest cycle with no atmospheric phase",
            "The water cycle: evaporation, transpiration, condensation, precipitation, surface runoff, and groundwater",
            "Human impacts: fossil fuels, synthetic fertilisers, deforestation, and their consequences for each cycle",
            "Eutrophication: mechanism, consequences, and management",
            "Interconnections between cycles and implications for global change"
        ]
    },

    // ── LAYER 3: CORE LESSON CONTENT ────────────────────────────────────────

    concepts: [
        "Carbon cycles through living organisms, atmosphere, oceans, and rocks",
        "Nitrogen fixation converts atmospheric N₂ into bioavailable ammonia",
        "Phosphorus cycles without a significant atmospheric phase",
        "Water cycles through evaporation, condensation, precipitation, and flow",
        "Decomposers are essential for releasing nutrients back into cycles",
        "Human activities disrupt nutrient cycles causing eutrophication and climate change"
    ],

    theory: "Biogeochemical cycles describe the movement of chemical elements through the biotic and abiotic components of Earth's systems. Each cycle has characteristic reservoirs, fluxes, and residence times, and is driven by a combination of biological, chemical, geological, and physical processes.",

    keyDefinitions: {
        "Biogeochemical Cycle": "The pathway by which a chemical element moves through the biotic and abiotic components of an ecosystem",
        "Reservoir": "A compartment where a substance is stored (e.g. atmosphere, ocean, soil, living biomass)",
        "Flux": "The rate of transfer of a substance between reservoirs",
        "Residence Time": "The average time an atom spends in a given reservoir before moving to another",
        "Nitrogen Fixation": "Conversion of atmospheric N₂ to ammonia (NH₃) or ammonium (NH₄⁺) by biological or industrial processes",
        "Nitrification": "Oxidation of ammonium to nitrite, then nitrate, by nitrifying bacteria",
        "Denitrification": "Reduction of nitrate back to N₂ or N₂O by denitrifying bacteria under anaerobic conditions",
        "Ammonification": "Decomposition of organic nitrogen (proteins, nucleic acids) to ammonium by decomposers",
        "Eutrophication": "Excessive nutrient enrichment of a water body causing algal blooms and oxygen depletion",
        "Transpiration": "Loss of water vapour from plant leaves through stomata",
        "Weathering": "Physical and chemical breakdown of rocks, releasing minerals (including phosphate) into soil and water",
        "Carbon Sequestration": "Long-term storage of carbon in reservoirs such as forests, soils, oceans, or geological deposits",
        "Decomposer": "Organism (primarily bacteria and fungi) that breaks down dead organic matter, releasing nutrients for cycling",
        "Mycorrhizae": "Symbiotic fungi associated with plant roots that dramatically increase phosphorus (and other nutrient) uptake"
    },

    carbonCycle: {
        reservoirs: {
            atmosphere: "CO₂ (~420 ppm currently); residence time ~4 years before uptake",
            terrestrialBiomass: "Plants, animals, soil organic matter; carbon fixed by photosynthesis",
            oceans: "Largest active reservoir; CO₂ dissolves to form carbonic acid (H₂CO₃), bicarbonate (HCO₃⁻), carbonate (CO₃²⁻)",
            lithosphere: "Fossil fuels (coal, oil, gas), carbonate rocks (limestone) — largest reservoir, slowest flux"
        },
        keyProcesses: {
            photosynthesis: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ — removes CO₂ from atmosphere",
            respiration: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O — returns CO₂ to atmosphere",
            decomposition: "Microbial breakdown of dead organic matter — releases CO₂ and CH₄",
            combustion: "Burning of fossil fuels and biomass — rapidly transfers geological carbon to atmosphere",
            oceanExchange: "CO₂ absorbed at cold surfaces, released at warm surfaces; also fixed by marine photosynthesis",
            calcification: "Marine organisms use CO₂ to form CaCO₃ shells — sequesters carbon in sediments"
        },
        humanImpact: "Fossil fuel combustion releases ~36 billion tonnes CO₂/year; deforestation adds ~5 billion tonnes/year — atmospheric CO₂ has risen from 280 ppm (pre-industrial) to over 420 ppm (2024), driving global warming and ocean acidification"
    },

    nitrogenCycle: {
        atmosphere: "N₂ comprises 78% of atmosphere — vast reservoir but biologically unavailable without fixation",
        keyProcesses: {
            biologicalNitrogenFixation: {
                organisms: "Rhizobium (in legume root nodules), Azotobacter (free-living), cyanobacteria",
                reaction: "N₂ + 8H⁺ + 8e⁻ + 16ATP → 2NH₃ + H₂ + 16ADP + 16Pᵢ",
                enzyme: "Nitrogenase (inhibited by O₂ — hence anaerobic micro-environments in nodules)"
            },
            industrialNitrogenFixation: {
                process: "Haber-Bosch process: N₂ + 3H₂ → 2NH₃ (high temperature, high pressure, iron catalyst)",
                impact: "Produces ~50% of nitrogen in human food supply; doubles the natural rate of nitrogen fixation globally"
            },
            nitrification: {
                step1: "NH₄⁺ → NO₂⁻ (Nitrosomonas and related bacteria)",
                step2: "NO₂⁻ → NO₃⁻ (Nitrobacter and related bacteria)",
                conditions: "Requires aerobic conditions"
            },
            assimilation: "Plants absorb NH₄⁺ or NO₃⁻ from soil; incorporate nitrogen into amino acids, proteins, nucleic acids",
            ammonification: "Decomposers break down proteins and nucleic acids → release NH₄⁺ to soil",
            denitrification: {
                reaction: "NO₃⁻ → NO₂⁻ → NO → N₂O → N₂",
                organisms: "Pseudomonas, Paracoccus and other anaerobic bacteria",
                conditions: "Anaerobic conditions — waterlogged soils, deep sediments"
            }
        },
        humanImpact: "Synthetic fertiliser use (Haber-Bosch), livestock waste, and combustion (producing NOₓ) have more than doubled the global nitrogen fixation rate, causing nitrate leaching, eutrophication, and N₂O emissions (a potent greenhouse gas)"
    },

    phosphorusCycle: {
        keyFeature: "No significant atmospheric phase — the slowest of the major nutrient cycles; operates on geological timescales",
        reservoirs: {
            rocks: "Primary reservoir — phosphate locked in apatite minerals; released only by weathering",
            soil: "Inorganic phosphate (H₂PO₄⁻, HPO₄²⁻) and organic phosphorus in humus",
            water: "Dissolved phosphate in rivers and oceans; often the limiting nutrient in freshwater",
            livingOrganisms: "Phospholipids, ATP, DNA, RNA, bone (hydroxyapatite)"
        },
        keyProcesses: {
            weathering: "Chemical and physical breakdown of phosphate rock releases H₂PO₄⁻ into soil water",
            plantUptake: "Roots absorb H₂PO₄⁻ directly; mycorrhizal fungi dramatically extend the absorptive surface",
            consumerUptake: "Phosphorus transferred through food chains in organic molecules",
            decomposition: "Decomposers mineralise organic phosphorus back to inorganic phosphate (H₂PO₄⁻)",
            sedimentation: "Phosphate in ocean water accumulates in sediments; uplifted over geological time to reform rocks"
        },
        humanImpact: "Mining of phosphate rock for fertiliser is non-renewable on human timescales; runoff causes freshwater eutrophication; current reserves may be depleted within 50–100 years at current extraction rates"
    },

    waterCycle: {
        keyProcesses: {
            evaporation: "Solar energy converts liquid water to water vapour from ocean, lake, and soil surfaces",
            transpiration: "Plants release water vapour through stomata — up to 90% of water absorbed by roots is transpired",
            evapotranspiration: "Combined evaporation + transpiration — primary flux from land to atmosphere",
            condensation: "Water vapour cools and condenses around aerosol particles to form clouds",
            precipitation: "Water falls as rain, snow, sleet, or hail when droplets coalesce",
            surfaceRunoff: "Water flows over land into rivers, lakes, and eventually oceans",
            infiltration: "Water percolates through soil into groundwater aquifers",
            groundwaterFlow: "Slow movement of water through aquifers — residence time of decades to millennia"
        },
        connectionsToOtherCycles: {
            carbon: "Water transport dissolves and moves CO₂, bicarbonate, and organic carbon through landscapes",
            nitrogen: "Nitrate leaches from soil into groundwater and rivers via water movement — causes eutrophication",
            phosphorus: "Phosphate moves from soil to water bodies through runoff and erosion — main delivery pathway"
        },
        humanImpact: "Deforestation reduces transpiration and increases surface runoff and erosion; irrigation depletes groundwater aquifers; climate change alters precipitation patterns and increases evaporation rates"
    },

    eutrophication: {
        definition: "Excessive nutrient (particularly N and P) enrichment of a water body, causing rapid algal growth followed by ecological disruption",
        mechanism: [
            "1. Nutrient runoff (nitrates, phosphates from fertilisers, sewage) enters water body",
            "2. Algal bloom: rapid growth of algae and cyanobacteria on the surface",
            "3. Light penetration reduced — submerged aquatic plants die",
            "4. Algae die and sink; decomposers (bacteria) proliferate",
            "5. Bacterial decomposition consumes dissolved oxygen — hypoxic or anoxic conditions",
            "6. Fish and invertebrates die — ecological collapse"
        ],
        limitingNutrient: "Phosphorus typically limits algal growth in freshwater; nitrogen typically limits growth in marine systems",
        management: ["Reduce fertiliser application and improve timing", "Buffer strips to intercept runoff", "Constructed wetlands for nutrient stripping", "Phosphate stripping in sewage treatment plants", "Restoration of riparian vegetation"]
    },

    decomposers: {
        role: "Break down dead organic matter (detritus) — release carbon as CO₂, nitrogen as NH₄⁺, and phosphorus as H₂PO₄⁻ back into cycles",
        organisms: ["Bacteria (major decomposers in most ecosystems)", "Fungi (especially saprotrophic basidiomycetes for lignin breakdown)", "Detritivores (earthworms, woodlice, millipedes — fragment material, increasing surface area for microbial decomposition)"],
        factors: {
            temperature: "Decomposition rate increases with temperature (Q₁₀ ≈ 2) — cold slows decomposition, warm accelerates",
            moisture: "Aerobic decomposition requires moisture; waterlogged conditions favour anaerobic decomposition (produces CH₄ not CO₂)",
            pH: "Neutral to slightly acid conditions optimal; extremes (peat bogs, pH ~3.5) dramatically slow decomposition",
            oxygenAvailability: "Aerobic decomposition faster and more complete; anaerobic produces methane, a potent greenhouse gas"
        }
    },

    cycleComparisons: {
        atmosphericPhase:  { carbon: "Yes — CO₂",              nitrogen: "Yes — N₂ (major), N₂O, NO", phosphorus: "No",         water: "Yes — H₂O vapour" },
        geologicalReservoir: { carbon: "Yes — fossil fuels, limestone", nitrogen: "Minor",         phosphorus: "Yes — apatite rock", water: "Yes — groundwater, ice caps" },
        limitingNutrient:  { carbon: "Rarely limits",          nitrogen: "Limits marine + terrestrial", phosphorus: "Limits freshwater", water: "Limits arid ecosystems" },
        biologicalFixation: { carbon: "Photosynthesis (plants, algae, cyanobacteria)", nitrogen: "Rhizobium, Azotobacter, cyanobacteria", phosphorus: "None — only weathering and decomposition", water: "N/A" },
        humanAcceleration: { carbon: "Fossil fuels, deforestation", nitrogen: "Haber-Bosch, livestock, combustion", phosphorus: "Mining, agricultural runoff", water: "Deforestation, irrigation, climate change" }
    },

    applications: [
        "Agriculture: optimising fertiliser use to maintain yields while minimising eutrophication",
        "Climate policy: carbon sequestration strategies (reforestation, ocean iron fertilisation, biochar)",
        "Water management: preventing nitrate and phosphate contamination of drinking water",
        "Conservation: restoring wetlands and riparian buffers to intercept nutrient runoff",
        "Food security: sustainable management of finite phosphate rock reserves",
        "Global change biology: predicting ecosystem responses to elevated CO₂ and altered precipitation"
    ],

    topicSummary: {
        coreInsights: [
            "Atoms are cycled — not created or consumed — through biotic and abiotic reservoirs linked by biological and physical fluxes.",
            "The carbon cycle is driven by the balance between photosynthesis (fixation) and respiration plus decomposition (release); fossil fuel combustion has broken this balance.",
            "Nitrogen is uniquely constrained by fixation: despite comprising 78% of the atmosphere, N₂ is biologically unavailable without nitrogenase or the Haber-Bosch process.",
            "The phosphorus cycle operates on geological timescales and has no atmospheric phase — making it the most easily disrupted by agriculture and the most finite in terms of mineable reserves.",
            "The water cycle connects all other cycles by transporting dissolved nutrients between terrestrial and aquatic ecosystems.",
            "Decomposers are the closing link of every cycle — without them, nutrients would be locked in dead organic matter indefinitely.",
            "Eutrophication demonstrates how nutrient cycles interact: excess N and P (from disrupted cycles) drive oxygen depletion through a cascade of biological responses.",
            "Human activities have fundamentally altered the rates and balances of all four cycles simultaneously — the central challenge of 21st-century environmental science."
        ],
        keyEquations: {
            photosynthesis: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",
            respiration: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP",
            nitrogenFixation: "N₂ + 8H⁺ + 8e⁻ + 16ATP → 2NH₃ + H₂ + 16ADP + 16Pᵢ",
            haberBosch: "N₂ + 3H₂ ⇌ 2NH₃ (450°C, 200 atm, Fe catalyst)",
            nitrification: "NH₄⁺ → NO₂⁻ → NO₃⁻ (aerobic, two bacterial steps)"
        },
        cycleComparisonSummary: {
            carbon:     { atmosphericPhase: "Yes (CO₂)",        limitingIn: "Rarely",           keyOrganisms: "Plants, algae, decomposers",          humanImpact: "Fossil fuels → global warming" },
            nitrogen:   { atmosphericPhase: "Yes (N₂)",         limitingIn: "Marine, terrestrial", keyOrganisms: "Rhizobium, nitrifiers, denitrifiers", humanImpact: "Haber-Bosch → eutrophication, N₂O" },
            phosphorus: { atmosphericPhase: "No",               limitingIn: "Freshwater",        keyOrganisms: "Decomposers, mycorrhizae",             humanImpact: "Mining, runoff → eutrophication" },
            water:      { atmosphericPhase: "Yes (H₂O vapour)", limitingIn: "Arid ecosystems",   keyOrganisms: "Plants (transpiration)",               humanImpact: "Deforestation → altered hydrology" }
        },
        commonMistakesToAvoid: [
            "Nitrogen fixation is NOT the same as nitrification — fixation converts N₂ → NH₃; nitrification converts NH₄⁺ → NO₂⁻ → NO₃⁻",
            "Decomposition does NOT destroy matter — it converts organic molecules back into inorganic forms that re-enter cycles",
            "The phosphorus cycle does NOT have a significant atmospheric phase — phosphorus moves only through soil, water, and organisms",
            "Eutrophication is caused by excess nutrients, NOT by the algae themselves — the algae are a symptom, not the cause",
            "Transpiration is a biological process — it is NOT the same as evaporation, which is physical",
            "Denitrification requires ANAEROBIC conditions — it does not occur in well-aerated soils",
            "Fossil fuels do not introduce 'new' carbon — they transfer ancient geological carbon to the active cycle"
        ],
        connections: [
            "Climate change: carbon cycle disruption drives temperature rise, which in turn accelerates water cycle evaporation and alters precipitation",
            "Agriculture: the nitrogen and phosphorus cycles are the biochemical foundation of crop nutrition — fertiliser chemistry is applied biogeochemistry",
            "Ecology: trophic levels are the biotic component of all nutrient cycles — energy flows, but matter cycles",
            "Microbiology: nitrogen and carbon cycling are almost entirely microbially mediated — bacteria and fungi are the engines of biogeochemical cycles",
            "Conservation: wetland restoration, cover crops, and riparian buffers are practical applications of nutrient cycle knowledge"
        ],
        examReadinessChecklist: [
            "Can you draw and annotate the full nitrogen cycle including all five processes and the organisms responsible for each?",
            "Can you explain why phosphorus is considered the most likely limiting nutrient in freshwater ecosystems?",
            "Can you trace a single carbon atom from fossil fuel combustion through the atmosphere, into a plant, through a food chain, and back to the soil?",
            "Can you explain the mechanism of eutrophication step by step, including which nutrient limits freshwater vs marine systems?",
            "Can you compare the four cycles in a table covering atmospheric phase, reservoir, limiting contexts, and human impact?",
            "Can you explain why the Haber-Bosch process was described as the most important chemical invention of the 20th century?"
        ]
    }
},

const EndSection7 = "close"