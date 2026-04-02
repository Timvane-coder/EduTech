class BiologyDiagramsRegistry {





    static diagrams = {
        // ===== 1. CELL BIOLOGY =====
        'animalCell': {
            name: 'Animal Cell',
            category: 'Cell Biology',
            description: 'Complete animal cell with all organelles',
            dataRequired: [],
            usage: 'Best for cell biology education',
            examples: ['Cell biology', 'Organelles', 'Cellular anatomy'],
            defaultOptions: {
                title: 'Animal Cell Structure',
                type: 'generic',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'prokaryoticVsEukaryoticDiagram': {
            name: 'Prokaryotic vs Eukaryotic Cell',
            category: 'Cell Biology',
            description: 'Side-by-side comparison of prokaryotic and eukaryotic cells',
            dataRequired: [],
            usage: 'Best for comparing cell types',
            examples: ['Cell types', 'Evolution', 'Microbiology'],
            defaultOptions: {
                title: 'Prokaryotic vs Eukaryotic Cells',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'photosynthesisDetailed': {
            name: 'Photosynthesis (Light & Dark Reactions)',
            category: 'Energy in Living Systems',
            description: 'Complete photosynthesis with both reaction stages',
            dataRequired: [],
            usage: 'Best for detailed photosynthesis',
            examples: ['Light reactions', 'Calvin cycle', 'Photosynthesis'],
            defaultOptions: {
                title: 'Photosynthesis - Complete Process',
                showLabels: true,
                showBothStages: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 2. TRANSPORT & MEMBRANE PHYSIOLOGY =====
        'haemoglobinOxygenCO2TransportChlorideShiftDiagram': {
            name: 'Haemoglobin O₂/CO₂ Transport & Chloride Shift',
            category: 'Transport Physiology',
            description: 'Oxygen and carbon dioxide transport by haemoglobin including the chloride shift mechanism in red blood cells',
            dataRequired: [],
            usage: 'Best for respiratory physiology and blood gas transport',
            examples: ['Haemoglobin', 'Chloride shift', 'CO2 transport', 'Bohr effect'],
            defaultOptions: {
                title: 'Haemoglobin O₂/CO₂ Transport & Chloride Shift',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'restingMembranePotentialActionPotentialIonFluxPhaseDiagram': {
            name: 'Resting Membrane Potential & Action Potential Ion Flux Phases',
            category: 'Neurophysiology',
            description: 'Ion movements underlying resting membrane potential and each phase of the action potential',
            dataRequired: [],
            usage: 'Best for neurophysiology and electrophysiology teaching',
            examples: ['Action potential', 'Ion channels', 'Membrane potential', 'Na/K flux'],
            defaultOptions: {
                title: 'Resting Membrane Potential & Action Potential Ion Flux',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'mitochondrialDoubleMembraneCarrierProteinNetworkDiagram': {
            name: 'Mitochondrial Double Membrane & Carrier Protein Network',
            category: 'Cell Biology',
            description: 'Detailed cross-section of mitochondrial inner and outer membranes with carrier proteins and transport complexes',
            dataRequired: [],
            usage: 'Best for mitochondrial biology and bioenergetics',
            examples: ['Mitochondria', 'Carrier proteins', 'Inner membrane', 'ATP synthase'],
            defaultOptions: {
                title: 'Mitochondrial Double Membrane & Carrier Protein Network',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'channelopathyTransporterDiseaseGeneProteinConsequenceTable': {
            name: 'Channelopathy & Transporter Disease Gene–Protein–Consequence Table',
            category: 'Pathophysiology',
            description: 'Summary table linking ion channel/transporter gene mutations to protein defects and clinical disease consequences',
            dataRequired: [],
            usage: 'Best for clinical genetics and channelopathy teaching',
            examples: ['Channelopathy', 'Ion channel disease', 'Cystic fibrosis', 'Long QT'],
            defaultOptions: {
                title: 'Channelopathy & Transporter Disease: Gene–Protein–Consequence',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'starlingForcesFiltrationReabsorptionCapillaryExchangeDiagram': {
            name: 'Starling Forces Filtration & Reabsorption Capillary Exchange',
            category: 'Cardiovascular Physiology',
            description: 'Hydrostatic and oncotic pressure gradients driving filtration and reabsorption across the capillary wall',
            dataRequired: [],
            usage: 'Best for capillary exchange and oedema physiology',
            examples: ['Starling forces', 'Capillary exchange', 'Oedema', 'Oncotic pressure'],
            defaultOptions: {
                title: 'Starling Forces: Filtration & Reabsorption at the Capillary',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 3. GENETICS & CELL DIVISION =====
        'ploidyKaryotypeChromosomeMorphologyDiagram': {
            name: 'Ploidy, Karyotype & Chromosome Morphology',
            category: 'Genetics',
            description: 'Overview of ploidy levels, karyotype organisation, and chromosome morphology classifications',
            dataRequired: [],
            usage: 'Best for genetics and cytogenetics education',
            examples: ['Karyotype', 'Ploidy', 'Chromosome morphology', 'Metacentric'],
            defaultOptions: {
                title: 'Ploidy, Karyotype & Chromosome Morphology',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'cellCyclePhasesCyclinCdkCheckpointSummaryDiagram': {
            name: 'Cell Cycle Phases, Cyclin-CDK & Checkpoint Summary',
            category: 'Cell Biology',
            description: 'Complete cell cycle with cyclin-CDK complexes active at each phase and checkpoint control mechanisms',
            dataRequired: [],
            usage: 'Best for cell cycle regulation and cancer biology',
            examples: ['Cell cycle', 'Cyclin', 'CDK', 'Checkpoints', 'G1 S G2 M'],
            defaultOptions: {
                title: 'Cell Cycle Phases, Cyclin-CDK Complexes & Checkpoints',
                showLabels: true,
                width: 850,
                height: 750,
                backgroundColor: '#ffffff'
            }
        },

        'mitosisStageByStageChromosomeBehaviourAnnotatedDiagram': {
            name: 'Mitosis Stage-by-Stage Chromosome Behaviour Annotated',
            category: 'Cell Biology',
            description: 'Annotated sequential stages of mitosis showing chromosome condensation, alignment, and segregation',
            dataRequired: [],
            usage: 'Best for mitosis education and cell division teaching',
            examples: ['Mitosis', 'Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
            defaultOptions: {
                title: 'Mitosis: Stage-by-Stage Chromosome Behaviour',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'meiosisIAndIIChrosomeSynapsisCrossingOverSegregationDiagram': {
            name: 'Meiosis I & II: Chromosome Synapsis, Crossing Over & Segregation',
            category: 'Genetics',
            description: 'Complete meiosis I and II showing synapsis, crossing over at chiasmata, and chromosome segregation',
            dataRequired: [],
            usage: 'Best for meiosis and genetic recombination teaching',
            examples: ['Meiosis', 'Crossing over', 'Synapsis', 'Chiasmata', 'Genetic diversity'],
            defaultOptions: {
                title: 'Meiosis I & II: Synapsis, Crossing Over & Segregation',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nondisjunctionMeiosisIVsMeiosisIIAneuploidyOutcomeDiagram': {
            name: 'Nondisjunction in Meiosis I vs Meiosis II & Aneuploidy Outcomes',
            category: 'Genetics',
            description: 'Comparison of nondisjunction errors in meiosis I and II and resulting aneuploid gametes and offspring',
            dataRequired: [],
            usage: 'Best for chromosomal abnormality and aneuploidy teaching',
            examples: ['Nondisjunction', 'Aneuploidy', 'Trisomy', 'Monosomy', 'Down syndrome'],
            defaultOptions: {
                title: 'Nondisjunction: Meiosis I vs Meiosis II & Aneuploidy Outcomes',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 4. CANCER BIOLOGY =====
        'oncogeneGainOfFunctionTumourSuppressorLossHallmarksDiagram': {
            name: 'Oncogene Gain-of-Function & Tumour Suppressor Loss – Cancer Hallmarks',
            category: 'Cancer Biology',
            description: 'Oncogene activation and tumour suppressor inactivation mapped to the hallmarks of cancer',
            dataRequired: [],
            usage: 'Best for cancer biology and oncology education',
            examples: ['Oncogenes', 'Tumour suppressors', 'Hallmarks of cancer', 'RAS', 'p53'],
            defaultOptions: {
                title: 'Oncogene & Tumour Suppressor Alterations: Cancer Hallmarks',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'atmAtrCheckpointKinaseP53P21GammaH2axSignallingDiagram': {
            name: 'ATM/ATR Checkpoint Kinase, p53, p21 & γH2AX Signalling',
            category: 'Cancer Biology',
            description: 'DNA damage response signalling cascade through ATM/ATR, p53, p21, and γH2AX to cell cycle arrest or apoptosis',
            dataRequired: [],
            usage: 'Best for DNA damage response and cancer biology',
            examples: ['ATM', 'ATR', 'p53', 'p21', 'γH2AX', 'DNA damage response'],
            defaultOptions: {
                title: 'ATM/ATR–p53–p21–γH2AX DNA Damage Signalling',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'haematopoieticStemCellDifferentiationHierarchyDiagram': {
            name: 'Haematopoietic Stem Cell Differentiation Hierarchy',
            category: 'Cancer Biology',
            description: 'Full haematopoietic tree from HSC through common myeloid and lymphoid progenitors to mature blood cell lineages',
            dataRequired: [],
            usage: 'Best for haematology and stem cell biology',
            examples: ['Haematopoiesis', 'HSC', 'Myeloid', 'Lymphoid', 'Blood cells'],
            defaultOptions: {
                title: 'Haematopoietic Stem Cell Differentiation Hierarchy',
                showLabels: true,
                width: 1000,
                height: 750,
                backgroundColor: '#ffffff'
            }
        },

        'dnaAndHistoneModificationInheritanceReplicationForkDiagram': {
            name: 'DNA & Histone Modification Inheritance at the Replication Fork',
            category: 'Epigenetics',
            description: 'Epigenetic mark inheritance showing DNA methylation and histone modification transfer at the replication fork',
            dataRequired: [],
            usage: 'Best for epigenetics and chromatin biology',
            examples: ['Epigenetics', 'DNA methylation', 'Histone modifications', 'Replication fork'],
            defaultOptions: {
                title: 'DNA & Histone Modification Inheritance at the Replication Fork',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'tissueRenewalRatesAndCancerOriginBySystemDiagram': {
            name: 'Tissue Renewal Rates & Cancer Origin by System',
            category: 'Cancer Biology',
            description: 'Comparison of tissue turnover rates across body systems and their correlation with cancer incidence and origin',
            dataRequired: [],
            usage: 'Best for cancer epidemiology and stem cell biology',
            examples: ['Tissue renewal', 'Cancer risk', 'Stem cells', 'Turnover rate'],
            defaultOptions: {
                title: 'Tissue Renewal Rates & Cancer Origin by System',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 5. NEUROSCIENCE =====
        'neuronAnatomyLabelledDiagram': {
            name: 'Neuron Anatomy Labelled',
            category: 'Neuroscience',
            description: 'Fully labelled neuron anatomy including soma, dendrites, axon, myelin sheath, nodes of Ranvier, and axon terminals',
            dataRequired: [],
            usage: 'Best for neuroscience and neuroanatomy education',
            examples: ['Neuron', 'Axon', 'Dendrite', 'Myelin', 'Synapse'],
            defaultOptions: {
                title: 'Neuron Anatomy',
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'cnsVsPnsDivisionOverviewDiagram': {
            name: 'CNS vs PNS Division Overview',
            category: 'Neuroscience',
            description: 'Structural and functional overview of the central and peripheral nervous system divisions',
            dataRequired: [],
            usage: 'Best for neuroanatomy and nervous system organisation',
            examples: ['CNS', 'PNS', 'Nervous system', 'Brain', 'Spinal cord'],
            defaultOptions: {
                title: 'CNS vs PNS: Division Overview',
                showLabels: true,
                width: 850,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'somaticVsAutonomicNervousSystemComparisonDiagram': {
            name: 'Somatic vs Autonomic Nervous System Comparison',
            category: 'Neuroscience',
            description: 'Side-by-side comparison of somatic and autonomic (sympathetic/parasympathetic) nervous system pathways',
            dataRequired: [],
            usage: 'Best for autonomic physiology and nervous system teaching',
            examples: ['Somatic', 'Autonomic', 'Sympathetic', 'Parasympathetic', 'Ganglia'],
            defaultOptions: {
                title: 'Somatic vs Autonomic Nervous System',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'actionPotentialPhasesMembranePotentialGraph': {
            name: 'Action Potential Phases Membrane Potential Graph',
            category: 'Neurophysiology',
            description: 'Annotated membrane potential graph showing all phases of the action potential with ion channel states',
            dataRequired: [],
            usage: 'Best for electrophysiology and neurophysiology teaching',
            examples: ['Action potential', 'Depolarisation', 'Repolarisation', 'Refractory period'],
            defaultOptions: {
                title: 'Action Potential Phases & Membrane Potential',
                showLabels: true,
                width: 850,
                height: 550,
                backgroundColor: '#ffffff'
            }
        },

        'chemicalSynapseVesicleReleaseStepsDiagram': {
            name: 'Chemical Synapse Vesicle Release Steps',
            category: 'Neuroscience',
            description: 'Step-by-step diagram of neurotransmitter vesicle release at a chemical synapse including SNARE complex',
            dataRequired: [],
            usage: 'Best for synaptic transmission and neuropharmacology',
            examples: ['Synapse', 'Neurotransmitter', 'Vesicle', 'SNARE', 'Exocytosis'],
            defaultOptions: {
                title: 'Chemical Synapse: Vesicle Release Steps',
                showLabels: true,
                width: 850,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'spinalReflexArcFiveComponentPathwayDiagram': {
            name: 'Spinal Reflex Arc Five-Component Pathway',
            category: 'Neuroscience',
            description: 'Five-component spinal reflex arc: receptor, afferent neuron, integration centre, efferent neuron, and effector',
            dataRequired: [],
            usage: 'Best for reflex physiology and spinal cord anatomy',
            examples: ['Reflex arc', 'Spinal reflex', 'Afferent', 'Efferent', 'Interneuron'],
            defaultOptions: {
                title: 'Spinal Reflex Arc: Five-Component Pathway',
                showLabels: true,
                width: 900,
                height: 550,
                backgroundColor: '#ffffff'
            }
        },

        'somatosensoryPathwaySpineCortexAscendingTractsDiagram': {
            name: 'Somatosensory Pathway: Spine to Cortex Ascending Tracts',
            category: 'Neuroscience',
            description: 'Ascending somatosensory tracts (dorsal column-medial lemniscal and spinothalamic) from receptor to cortex',
            dataRequired: [],
            usage: 'Best for neuroanatomy and sensory pathway teaching',
            examples: ['Somatosensory', 'Dorsal column', 'Spinothalamic', 'Thalamus', 'Sensory cortex'],
            defaultOptions: {
                title: 'Somatosensory Pathway: Ascending Tracts',
                showLabels: true,
                width: 750,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'corticospinalTractUpperLowerMotorNeuronDiagram': {
            name: 'Corticospinal Tract: Upper & Lower Motor Neuron',
            category: 'Neuroscience',
            description: 'Corticospinal tract anatomy distinguishing upper motor neuron (cortex to spinal cord) and lower motor neuron pathways',
            dataRequired: [],
            usage: 'Best for motor neuron and corticospinal tract teaching',
            examples: ['Corticospinal', 'Upper motor neuron', 'Lower motor neuron', 'Pyramidal tract'],
            defaultOptions: {
                title: 'Corticospinal Tract: Upper & Lower Motor Neurons',
                showLabels: true,
                width: 750,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'cerebrallLobesFunctionalMapDiagram': {
            name: 'Cerebral Lobes Functional Map',
            category: 'Neuroscience',
            description: 'Lateral view of cerebral cortex with functional areas mapped onto frontal, parietal, temporal, and occipital lobes',
            dataRequired: [],
            usage: 'Best for neuroanatomy and cortical function teaching',
            examples: ['Cerebral cortex', 'Frontal lobe', 'Parietal', 'Temporal', 'Occipital', 'Broca', 'Wernicke'],
            defaultOptions: {
                title: 'Cerebral Lobes: Functional Map',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'synapticPruningAndLtpNeuroplasticityDiagram': {
            name: 'Synaptic Pruning & LTP Neuroplasticity',
            category: 'Neuroscience',
            description: 'Mechanisms of synaptic pruning during development and long-term potentiation as a basis for neuroplasticity',
            dataRequired: [],
            usage: 'Best for neuroplasticity, learning, and memory teaching',
            examples: ['Synaptic pruning', 'LTP', 'Neuroplasticity', 'AMPA', 'NMDA', 'Memory'],
            defaultOptions: {
                title: 'Synaptic Pruning & LTP: Neuroplasticity',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'multipleSclerosisVsParkinsonsDemyelinationPathologyDiagram': {
            name: 'Multiple Sclerosis vs Parkinson\'s: Demyelination Pathology',
            category: 'Neuropathology',
            description: 'Comparative pathology of MS (demyelination, plaques) and Parkinson\'s disease (dopaminergic neuron loss, Lewy bodies)',
            dataRequired: [],
            usage: 'Best for neuropathology and neurological disease teaching',
            examples: ['Multiple sclerosis', 'Parkinson\'s', 'Demyelination', 'Lewy bodies', 'Dopamine'],
            defaultOptions: {
                title: 'Multiple Sclerosis vs Parkinson\'s Disease Pathology',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 6. MUSCULOSKELETAL =====
        'fiveBoneTypesMorphologyComparisonDiagram': {
            name: 'Five Bone Types Morphology Comparison',
            category: 'Musculoskeletal',
            description: 'Comparison of the five bone types (long, short, flat, irregular, sesamoid) with morphology examples',
            dataRequired: [],
            usage: 'Best for skeletal anatomy and bone classification',
            examples: ['Bone types', 'Long bone', 'Flat bone', 'Sesamoid', 'Irregular bone'],
            defaultOptions: {
                title: 'Five Bone Types: Morphology Comparison',
                showLabels: true,
                width: 950,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'osteonHaversianSystemCrossSectionDiagram': {
            name: 'Osteon & Haversian System Cross-Section',
            category: 'Musculoskeletal',
            description: 'Cross-sectional diagram of compact bone showing the osteon, Haversian canal, lamellae, lacunae, and canaliculi',
            dataRequired: [],
            usage: 'Best for bone histology and compact bone structure',
            examples: ['Osteon', 'Haversian canal', 'Lamellae', 'Compact bone', 'Osteocyte'],
            defaultOptions: {
                title: 'Osteon & Haversian System Cross-Section',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'endochondralVsIntramembranousOssificationStepsDiagram': {
            name: 'Endochondral vs Intramembranous Ossification Steps',
            category: 'Musculoskeletal',
            description: 'Step-by-step comparison of endochondral and intramembranous bone ossification pathways',
            dataRequired: [],
            usage: 'Best for bone development and ossification teaching',
            examples: ['Ossification', 'Endochondral', 'Intramembranous', 'Bone formation', 'Cartilage'],
            defaultOptions: {
                title: 'Endochondral vs Intramembranous Ossification',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pthCalcitoninVitaminDCalciumFeedbackLoopDiagram': {
            name: 'PTH, Calcitonin & Vitamin D Calcium Feedback Loop',
            category: 'Musculoskeletal',
            description: 'Hormonal feedback loop regulating blood calcium via PTH, calcitonin, and vitamin D acting on bone, kidney, and gut',
            dataRequired: [],
            usage: 'Best for calcium homeostasis and endocrine-bone axis',
            examples: ['PTH', 'Calcitonin', 'Vitamin D', 'Calcium', 'Homeostasis'],
            defaultOptions: {
                title: 'PTH, Calcitonin & Vitamin D: Calcium Feedback Loop',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'axialVsAppendicular206BonesAnnotatedSkeletonDiagram': {
            name: 'Axial vs Appendicular Skeleton – 206 Bones Annotated',
            category: 'Musculoskeletal',
            description: 'Full skeleton diagram annotating axial and appendicular divisions with key bones labelled across all 206',
            dataRequired: [],
            usage: 'Best for skeletal anatomy and osteology',
            examples: ['Axial skeleton', 'Appendicular skeleton', '206 bones', 'Skeleton', 'Osteology'],
            defaultOptions: {
                title: 'Axial vs Appendicular Skeleton: 206 Bones Annotated',
                showLabels: true,
                width: 700,
                height: 1000,
                backgroundColor: '#ffffff'
            }
        },

        'synovialJointStructureAndSixTypesDiagram': {
            name: 'Synovial Joint Structure & Six Types',
            category: 'Musculoskeletal',
            description: 'Labelled synovial joint anatomy and comparison of the six synovial joint types with movement examples',
            dataRequired: [],
            usage: 'Best for joint anatomy and arthrology',
            examples: ['Synovial joint', 'Hinge', 'Ball and socket', 'Pivot', 'Gliding', 'Condyloid'],
            defaultOptions: {
                title: 'Synovial Joint Structure & Six Types',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'fractureFourStageHealingTimelineDiagram': {
            name: 'Fracture Four-Stage Healing Timeline',
            category: 'Musculoskeletal',
            description: 'Four-stage fracture healing timeline: haematoma formation, fibrocartilaginous callus, bony callus, and remodelling',
            dataRequired: [],
            usage: 'Best for bone repair and fracture healing teaching',
            examples: ['Fracture healing', 'Callus', 'Bone repair', 'Remodelling', 'Haematoma'],
            defaultOptions: {
                title: 'Fracture Healing: Four-Stage Timeline',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'boneSurfaceMarkingsProcessesFossaeForaminaDiagram': {
            name: 'Bone Surface Markings: Processes, Fossae & Foramina',
            category: 'Musculoskeletal',
            description: 'Reference diagram of bone surface markings including processes, condyles, fossae, foramina, and other features',
            dataRequired: [],
            usage: 'Best for osteology and anatomical landmark identification',
            examples: ['Bone markings', 'Process', 'Foramen', 'Fossa', 'Condyle', 'Epicondyle'],
            defaultOptions: {
                title: 'Bone Surface Markings: Processes, Fossae & Foramina',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'firstSecondThirdClassLeverSystemsInBodyDiagram': {
            name: 'First, Second & Third Class Lever Systems in the Body',
            category: 'Musculoskeletal',
            description: 'Biomechanical lever class diagrams applied to body examples showing fulcrum, effort, and load positions',
            dataRequired: [],
            usage: 'Best for biomechanics and musculoskeletal mechanics teaching',
            examples: ['Levers', 'Biomechanics', 'First class lever', 'Second class lever', 'Third class lever'],
            defaultOptions: {
                title: 'First, Second & Third Class Lever Systems in the Body',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'osteoporosisVsOsteoarthritisVsRheumatoidBonePathologyDiagram': {
            name: 'Osteoporosis vs Osteoarthritis vs Rheumatoid Arthritis Bone Pathology',
            category: 'Musculoskeletal',
            description: 'Comparative pathology diagrams of osteoporosis, osteoarthritis, and rheumatoid arthritis at the joint and bone level',
            dataRequired: [],
            usage: 'Best for musculoskeletal pathology and rheumatology teaching',
            examples: ['Osteoporosis', 'Osteoarthritis', 'Rheumatoid arthritis', 'Bone pathology'],
            defaultOptions: {
                title: 'Osteoporosis vs Osteoarthritis vs Rheumatoid Arthritis',
                showLabels: true,
                width: 1000,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'peakBoneMassLifespanDeclineCurveByAgeDiagram': {
            name: 'Peak Bone Mass & Lifespan Decline Curve by Age',
            category: 'Musculoskeletal',
            description: 'Graph of bone mass across the lifespan showing peak bone mass acquisition, plateau, and age-related decline by sex',
            dataRequired: [],
            usage: 'Best for osteoporosis risk, bone biology, and ageing',
            examples: ['Peak bone mass', 'Bone density', 'Ageing', 'Osteoporosis risk', 'Lifespan'],
            defaultOptions: {
                title: 'Peak Bone Mass & Lifespan Decline Curve',
                showLabels: true,
                width: 850,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 7. REPRODUCTION =====
        'meiosisVsMitosisChromosomeDivisionComparisonDiagram': {
            name: 'Meiosis vs Mitosis Chromosome Division Comparison',
            category: 'Reproduction',
            description: 'Side-by-side comparison of meiosis and mitosis showing chromosome number, division rounds, and genetic outcomes',
            dataRequired: [],
            usage: 'Best for cell division and reproduction teaching',
            examples: ['Meiosis', 'Mitosis', 'Chromosome division', 'Haploid', 'Diploid'],
            defaultOptions: {
                title: 'Meiosis vs Mitosis: Chromosome Division Comparison',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'maleReproductiveTractLabelledPathwayDiagram': {
            name: 'Male Reproductive Tract Labelled Pathway',
            category: 'Reproduction',
            description: 'Labelled diagram of the male reproductive tract showing the pathway from testis to urethra with all accessory structures',
            dataRequired: [],
            usage: 'Best for male reproductive anatomy teaching',
            examples: ['Male reproductive', 'Testis', 'Epididymis', 'Vas deferens', 'Urethra'],
            defaultOptions: {
                title: 'Male Reproductive Tract: Labelled Pathway',
                showLabels: true,
                width: 750,
                height: 850,
                backgroundColor: '#ffffff'
            }
        },

        'femaleReproductiveTractSagittalSectionLabelledDiagram': {
            name: 'Female Reproductive Tract Sagittal Section Labelled',
            category: 'Reproduction',
            description: 'Sagittal section of the female reproductive tract with all structures labelled including ovary, uterus, and vagina',
            dataRequired: [],
            usage: 'Best for female reproductive anatomy teaching',
            examples: ['Female reproductive', 'Uterus', 'Ovary', 'Fallopian tube', 'Vagina'],
            defaultOptions: {
                title: 'Female Reproductive Tract: Sagittal Section',
                showLabels: true,
                width: 750,
                height: 850,
                backgroundColor: '#ffffff'
            }
        },

        'spermatogenesisVsOogenesisParallelTimelineDiagram': {
            name: 'Spermatogenesis vs Oogenesis Parallel Timeline',
            category: 'Reproduction',
            description: 'Parallel timeline comparison of spermatogenesis and oogenesis from primordial germ cells to mature gametes',
            dataRequired: [],
            usage: 'Best for gametogenesis and reproductive biology teaching',
            examples: ['Spermatogenesis', 'Oogenesis', 'Gametogenesis', 'Gametes', 'Meiosis'],
            defaultOptions: {
                title: 'Spermatogenesis vs Oogenesis: Parallel Timeline',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'hpgAxisFeedbackLoopMaleAndFemaleDiagram': {
            name: 'HPG Axis Feedback Loop – Male & Female',
            category: 'Reproduction',
            description: 'Hypothalamic-pituitary-gonadal axis feedback loops for both male and female reproductive hormone regulation',
            dataRequired: [],
            usage: 'Best for reproductive endocrinology and HPG axis teaching',
            examples: ['HPG axis', 'GnRH', 'LH', 'FSH', 'Testosterone', 'Oestrogen'],
            defaultOptions: {
                title: 'HPG Axis Feedback Loop: Male & Female',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'ovarianAndEndometrialCycleHormoneSynchronisationDiagram': {
            name: 'Ovarian & Endometrial Cycle Hormone Synchronisation',
            category: 'Reproduction',
            description: 'Synchronised diagram of the ovarian and endometrial cycles with corresponding hormone level changes across the menstrual cycle',
            dataRequired: [],
            usage: 'Best for menstrual cycle and reproductive physiology teaching',
            examples: ['Menstrual cycle', 'Ovarian cycle', 'Endometrial cycle', 'LH surge', 'Progesterone'],
            defaultOptions: {
                title: 'Ovarian & Endometrial Cycle: Hormone Synchronisation',
                showLabels: true,
                width: 1000,
                height: 750,
                backgroundColor: '#ffffff'
            }
        },

        'acrosomeReactionZonaPellucidaPenetrationCorticalReactionDiagram': {
            name: 'Acrosome Reaction, Zona Pellucida Penetration & Cortical Reaction',
            category: 'Reproduction',
            description: 'Sequential steps of fertilisation: acrosome reaction, sperm penetration of zona pellucida, and cortical reaction preventing polyspermy',
            dataRequired: [],
            usage: 'Best for fertilisation and early embryology teaching',
            examples: ['Acrosome reaction', 'Zona pellucida', 'Cortical reaction', 'Fertilisation', 'Polyspermy'],
            defaultOptions: {
                title: 'Acrosome Reaction, Zona Penetration & Cortical Reaction',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'trimesterDevelopmentMilestonesAndPlacentaStructureDiagram': {
            name: 'Trimester Development Milestones & Placenta Structure',
            category: 'Reproduction',
            description: 'Key developmental milestones across three trimesters alongside labelled placenta structure and function',
            dataRequired: [],
            usage: 'Best for embryology, foetal development, and obstetrics',
            examples: ['Trimesters', 'Foetal development', 'Placenta', 'Embryology', 'Milestones'],
            defaultOptions: {
                title: 'Trimester Development Milestones & Placenta Structure',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'oxytocinPositiveFeedbackLabourStagesAndMilkEjectionDiagram': {
            name: 'Oxytocin Positive Feedback: Labour Stages & Milk Ejection',
            category: 'Reproduction',
            description: 'Oxytocin positive feedback loops governing uterine contractions during labour and milk ejection reflex',
            dataRequired: [],
            usage: 'Best for reproductive endocrinology and parturition teaching',
            examples: ['Oxytocin', 'Labour', 'Positive feedback', 'Milk ejection', 'Parturition'],
            defaultOptions: {
                title: 'Oxytocin Positive Feedback: Labour & Milk Ejection',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'pubertalSequenceAndMenopauseHormoneChangesTimelineDiagram': {
            name: 'Pubertal Sequence & Menopause Hormone Changes Timeline',
            category: 'Reproduction',
            description: 'Timeline of pubertal development sequence in males and females and hormonal changes during menopause',
            dataRequired: [],
            usage: 'Best for reproductive endocrinology and life stages teaching',
            examples: ['Puberty', 'Menopause', 'Hormones', 'Tanner stages', 'Oestrogen decline'],
            defaultOptions: {
                title: 'Pubertal Sequence & Menopause: Hormone Changes Timeline',
                showLabels: true,
                width: 1000,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'pcosEndometriosisInfertilityPathophysiologyDiagram': {
            name: 'PCOS, Endometriosis & Infertility Pathophysiology',
            category: 'Reproduction',
            description: 'Pathophysiology diagrams for PCOS and endometriosis and their mechanisms contributing to infertility',
            dataRequired: [],
            usage: 'Best for gynaecological pathology and infertility teaching',
            examples: ['PCOS', 'Endometriosis', 'Infertility', 'Anovulation', 'Androgens'],
            defaultOptions: {
                title: 'PCOS, Endometriosis & Infertility Pathophysiology',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 8. LYMPHATICS & IMMUNITY =====
        'lymphaticSystemOverviewVesselsNodesOrgansDiagram': {
            name: 'Lymphatic System Overview: Vessels, Nodes & Organs',
            category: 'Lymphatics & Immunity',
            description: 'Body map overview of the lymphatic system including lymphatic vessels, lymph nodes, and lymphoid organs',
            dataRequired: [],
            usage: 'Best for lymphatic anatomy and immune system overview',
            examples: ['Lymphatic system', 'Lymph nodes', 'Lymph vessels', 'Spleen', 'Thymus'],
            defaultOptions: {
                title: 'Lymphatic System: Vessels, Nodes & Organs',
                showLabels: true,
                width: 700,
                height: 950,
                backgroundColor: '#ffffff'
            }
        },

        'lymphCapillaryFlapValveThoracicDuctDrainageDiagram': {
            name: 'Lymph Capillary Flap-Valve & Thoracic Duct Drainage',
            category: 'Lymphatics & Immunity',
            description: 'Mechanism of lymph capillary flap-valve fluid uptake and thoracic duct drainage into the venous system',
            dataRequired: [],
            usage: 'Best for lymphatic physiology and fluid balance',
            examples: ['Lymph capillary', 'Flap valve', 'Thoracic duct', 'Lymph drainage'],
            defaultOptions: {
                title: 'Lymph Capillary Flap-Valve & Thoracic Duct Drainage',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'primaryVsSecondaryLymphoidOrgansLocationDiagram': {
            name: 'Primary vs Secondary Lymphoid Organs Location',
            category: 'Lymphatics & Immunity',
            description: 'Body diagram distinguishing primary (bone marrow, thymus) from secondary (spleen, lymph nodes, MALT) lymphoid organs',
            dataRequired: [],
            usage: 'Best for immunology and lymphoid organ anatomy',
            examples: ['Primary lymphoid', 'Secondary lymphoid', 'Thymus', 'Bone marrow', 'Spleen'],
            defaultOptions: {
                title: 'Primary vs Secondary Lymphoid Organs',
                showLabels: true,
                width: 750,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'bCellTCellNkCellDifferentiationAndFunctionDiagram': {
            name: 'B Cell, T Cell & NK Cell Differentiation & Function',
            category: 'Lymphatics & Immunity',
            description: 'Differentiation pathways and functional roles of B lymphocytes, T lymphocytes, and natural killer cells',
            dataRequired: [],
            usage: 'Best for lymphocyte biology and adaptive immunity',
            examples: ['B cell', 'T cell', 'NK cell', 'Lymphocyte', 'Adaptive immunity'],
            defaultOptions: {
                title: 'B Cell, T Cell & NK Cell Differentiation & Function',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'innateImmunityBarriersInflammationComplementCascadeDiagram': {
            name: 'Innate Immunity: Barriers, Inflammation & Complement Cascade',
            category: 'Lymphatics & Immunity',
            description: 'Physical barriers, acute inflammation response, and complement cascade pathways of innate immunity',
            dataRequired: [],
            usage: 'Best for innate immunity and inflammation teaching',
            examples: ['Innate immunity', 'Inflammation', 'Complement', 'Phagocytosis', 'Barriers'],
            defaultOptions: {
                title: 'Innate Immunity: Barriers, Inflammation & Complement',
                showLabels: true,
                width: 950,
                height: 750,
                backgroundColor: '#ffffff'
            }
        },

        'primaryVsSecondaryImmuneResponseAntibodyTitreCurveDiagram': {
            name: 'Primary vs Secondary Immune Response Antibody Titre Curve',
            category: 'Lymphatics & Immunity',
            description: 'Graph comparing antibody titre over time for primary and secondary immune responses showing memory cell effect',
            dataRequired: [],
            usage: 'Best for adaptive immunity and vaccination teaching',
            examples: ['Primary immune response', 'Secondary immune response', 'Antibody titre', 'Memory cells'],
            defaultOptions: {
                title: 'Primary vs Secondary Immune Response: Antibody Titre Curve',
                showLabels: true,
                width: 850,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vaccineTypesAndMemoryCellSecondaryResponseDiagram': {
            name: 'Vaccine Types & Memory Cell Secondary Response',
            category: 'Lymphatics & Immunity',
            description: 'Classification of vaccine types (live-attenuated, inactivated, subunit, mRNA) and how they elicit memory cell formation',
            dataRequired: [],
            usage: 'Best for vaccinology and immunology teaching',
            examples: ['Vaccines', 'Live attenuated', 'mRNA vaccine', 'Memory cells', 'Immunisation'],
            defaultOptions: {
                title: 'Vaccine Types & Memory Cell Secondary Response',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'gellCoombsFourHypersensitivityTypesComparisonDiagram': {
            name: 'Gell & Coombs Four Hypersensitivity Types Comparison',
            category: 'Lymphatics & Immunity',
            description: 'Comparison table and mechanism diagrams for Gell and Coombs Type I, II, III, and IV hypersensitivity reactions',
            dataRequired: [],
            usage: 'Best for hypersensitivity and allergy immunology teaching',
            examples: ['Hypersensitivity', 'Type I', 'Anaphylaxis', 'Type IV', 'Delayed hypersensitivity'],
            defaultOptions: {
                title: 'Gell & Coombs: Four Hypersensitivity Types',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'starlingForcesFiltrationReabsorptionOedemaFormationDiagram': {
            name: 'Starling Forces, Filtration, Reabsorption & Oedema Formation',
            category: 'Cardiovascular Physiology',
            description: 'Starling forces at the capillary with disrupted balance leading to oedema formation pathophysiology',
            dataRequired: [],
            usage: 'Best for oedema pathophysiology and fluid balance',
            examples: ['Starling forces', 'Oedema', 'Filtration', 'Reabsorption', 'Capillary pressure'],
            defaultOptions: {
                title: 'Starling Forces & Oedema Formation',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'mhcHlaMatchingTransplantRejectionTypesDiagram': {
            name: 'MHC/HLA Matching & Transplant Rejection Types',
            category: 'Lymphatics & Immunity',
            description: 'MHC/HLA antigen matching principles and mechanisms of hyperacute, acute, and chronic transplant rejection',
            dataRequired: [],
            usage: 'Best for transplant immunology and MHC biology',
            examples: ['MHC', 'HLA', 'Transplant rejection', 'Hyperacute', 'Graft rejection'],
            defaultOptions: {
                title: 'MHC/HLA Matching & Transplant Rejection Types',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'hodgkinVsNonHodgkinReedSternbergCellHistologyDiagram': {
            name: 'Hodgkin vs Non-Hodgkin Lymphoma & Reed-Sternberg Cell Histology',
            category: 'Lymphatics & Immunity',
            description: 'Comparison of Hodgkin and non-Hodgkin lymphoma features including Reed-Sternberg cell histology',
            dataRequired: [],
            usage: 'Best for haematological malignancy and histopathology teaching',
            examples: ['Hodgkin lymphoma', 'Non-Hodgkin', 'Reed-Sternberg cell', 'Lymphoma', 'Histology'],
            defaultOptions: {
                title: 'Hodgkin vs Non-Hodgkin Lymphoma & Reed-Sternberg Histology',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 9. ENDOCRINOLOGY =====
        'hormoneChemistryClassificationReceptorMechanismDiagram': {
            name: 'Hormone Chemistry Classification & Receptor Mechanism',
            category: 'Endocrinology',
            description: 'Classification of hormones by chemical nature (peptide, steroid, amine) and their receptor signalling mechanisms',
            dataRequired: [],
            usage: 'Best for endocrinology and hormone signalling teaching',
            examples: ['Hormone classification', 'Peptide hormone', 'Steroid hormone', 'Receptor', 'Signal transduction'],
            defaultOptions: {
                title: 'Hormone Chemistry Classification & Receptor Mechanism',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'hypothalamusPortalSystemAnteriorPosteriorPituitaryHormonesDiagram': {
            name: 'Hypothalamus Portal System & Anterior/Posterior Pituitary Hormones',
            category: 'Endocrinology',
            description: 'Hypothalamic-pituitary portal system with releasing hormones and anterior vs posterior pituitary hormone secretion',
            dataRequired: [],
            usage: 'Best for neuroendocrinology and pituitary axis teaching',
            examples: ['Hypothalamus', 'Pituitary', 'Portal system', 'ACTH', 'ADH', 'Oxytocin'],
            defaultOptions: {
                title: 'Hypothalamus Portal System & Pituitary Hormones',
                showLabels: true,
                width: 900,
                height: 750,
                backgroundColor: '#ffffff'
            }
        },

        'thyroidHormoneSynthesisIodineOrganificationStepsDiagram': {
            name: 'Thyroid Hormone Synthesis: Iodine Organification Steps',
            category: 'Endocrinology',
            description: 'Step-by-step thyroid hormone synthesis pathway including iodine uptake, organification, coupling, and secretion',
            dataRequired: [],
            usage: 'Best for thyroid physiology and endocrinology',
            examples: ['Thyroid hormone', 'T3', 'T4', 'Iodine', 'Organification', 'Thyroglobulin'],
            defaultOptions: {
                title: 'Thyroid Hormone Synthesis: Iodine Organification',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pthCalciumBonesKidneysIntestineFeedbackDiagram': {
            name: 'PTH–Calcium: Bones, Kidneys & Intestine Feedback',
            category: 'Endocrinology',
            description: 'PTH actions on bone, kidney, and intestine to regulate blood calcium with feedback control diagram',
            dataRequired: [],
            usage: 'Best for calcium regulation and parathyroid physiology',
            examples: ['PTH', 'Calcium', 'Bone resorption', 'Kidney', 'Intestinal absorption'],
            defaultOptions: {
                title: 'PTH–Calcium: Bones, Kidneys & Intestine Feedback',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'adrenalCortexThreeZonesAndMedullaHormonesAnnotatedDiagram': {
            name: 'Adrenal Cortex Three Zones & Medulla Hormones Annotated',
            category: 'Endocrinology',
            description: 'Annotated cross-section of adrenal gland showing three cortical zones (glomerulosa, fasciculata, reticularis) and medulla with their hormones',
            dataRequired: [],
            usage: 'Best for adrenal gland physiology and steroidogenesis',
            examples: ['Adrenal cortex', 'Aldosterone', 'Cortisol', 'DHEA', 'Adrenaline', 'Catecholamines'],
            defaultOptions: {
                title: 'Adrenal Cortex Three Zones & Medulla Hormones',
                showLabels: true,
                width: 850,
                height: 750,
                backgroundColor: '#ffffff'
            }
        },

        'isletsOfLangerhansCellTypesInsulinGlucagonFeedbackDiagram': {
            name: 'Islets of Langerhans Cell Types & Insulin/Glucagon Feedback',
            category: 'Endocrinology',
            description: 'Islet of Langerhans cell type distribution (α, β, δ, PP cells) and insulin-glucagon blood glucose feedback loop',
            dataRequired: [],
            usage: 'Best for pancreatic endocrinology and diabetes teaching',
            examples: ['Islets of Langerhans', 'Insulin', 'Glucagon', 'Beta cell', 'Alpha cell', 'Diabetes'],
            defaultOptions: {
                title: 'Islets of Langerhans: Cell Types & Insulin/Glucagon Feedback',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'melatoninCircadianRhythmLightDarkCycleScnDiagram': {
            name: 'Melatonin, Circadian Rhythm & Light-Dark Cycle SCN',
            category: 'Endocrinology',
            description: 'Suprachiasmatic nucleus regulation of circadian rhythm and melatonin secretion in response to the light-dark cycle',
            dataRequired: [],
            usage: 'Best for circadian biology and sleep medicine',
            examples: ['Melatonin', 'Circadian rhythm', 'SCN', 'Pineal gland', 'Light-dark cycle'],
            defaultOptions: {
                title: 'Melatonin, Circadian Rhythm & SCN Light-Dark Cycle',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'testosteroneOestrogenSynthesisAndTargetEffectsDiagram': {
            name: 'Testosterone & Oestrogen Synthesis & Target Effects',
            category: 'Endocrinology',
            description: 'Biosynthesis pathways of testosterone and oestrogen from cholesterol and their effects on target tissues',
            dataRequired: [],
            usage: 'Best for sex hormone biology and steroidogenesis',
            examples: ['Testosterone', 'Oestrogen', 'Steroidogenesis', 'Aromatase', 'Sex hormones'],
            defaultOptions: {
                title: 'Testosterone & Oestrogen: Synthesis & Target Effects',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'heartKidneyAdiposeGiEndocrineFunctionsSummaryDiagram': {
            name: 'Heart, Kidney, Adipose & GI Endocrine Functions Summary',
            category: 'Endocrinology',
            description: 'Summary of endocrine functions of non-classical endocrine organs: heart (ANP/BNP), kidney (EPO/renin), adipose (leptin), and GI tract',
            dataRequired: [],
            usage: 'Best for endocrinology and organ-specific hormone teaching',
            examples: ['ANP', 'BNP', 'EPO', 'Leptin', 'GI hormones', 'Non-classical endocrine'],
            defaultOptions: {
                title: 'Heart, Kidney, Adipose & GI Endocrine Functions',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'sympathoadrenalVsHpaAxisAcuteChronicStressTimelineDiagram': {
            name: 'Sympathoadrenal vs HPA Axis: Acute & Chronic Stress Timeline',
            category: 'Endocrinology',
            description: 'Timeline comparison of the sympathoadrenal (rapid) and HPA axis (sustained) stress responses in acute and chronic stress',
            dataRequired: [],
            usage: 'Best for stress physiology and neuroendocrinology',
            examples: ['HPA axis', 'Sympathoadrenal', 'Cortisol', 'Adrenaline', 'Stress response'],
            defaultOptions: {
                title: 'Sympathoadrenal vs HPA Axis: Acute & Chronic Stress',
                showLabels: true,
                width: 1000,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'endocrineDisruptorChemicalInterferenceHormoneAxisDiagram': {
            name: 'Endocrine Disruptor Chemical Interference on Hormone Axes',
            category: 'Endocrinology',
            description: 'Mechanisms by which endocrine-disrupting chemicals interfere with hormone receptors and signalling axes',
            dataRequired: [],
            usage: 'Best for environmental endocrinology and toxicology',
            examples: ['Endocrine disruptors', 'BPA', 'Hormone interference', 'Receptor binding', 'Toxicology'],
            defaultOptions: {
                title: 'Endocrine Disruptor Chemical Interference on Hormone Axes',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 10. MUSCLE PHYSIOLOGY =====
        'threeMusclTypesMorphologyControlComparisonDiagram': {
            name: 'Three Muscle Types: Morphology & Control Comparison',
            category: 'Muscle Physiology',
            description: 'Comparative morphology and neural control of skeletal, cardiac, and smooth muscle types',
            dataRequired: [],
            usage: 'Best for muscle histology and physiology overview',
            examples: ['Skeletal muscle', 'Cardiac muscle', 'Smooth muscle', 'Muscle types', 'Morphology'],
            defaultOptions: {
                title: 'Three Muscle Types: Morphology & Control',
                showLabels: true,
                width: 1000,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'sarcomereZDiscABandIBandHZoneLabelledDiagram': {
            name: 'Sarcomere: Z-Disc, A-Band, I-Band & H-Zone Labelled',
            category: 'Muscle Physiology',
            description: 'Fully labelled sarcomere structure showing Z-discs, M-line, A-band, I-band, H-zone, and myofilament arrangement',
            dataRequired: [],
            usage: 'Best for muscle ultrastructure and contraction physiology',
            examples: ['Sarcomere', 'Z-disc', 'A-band', 'I-band', 'H-zone', 'Actin', 'Myosin'],
            defaultOptions: {
                title: 'Sarcomere: Z-Disc, A-Band, I-Band & H-Zone',
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'nmjAchVesicleReleaseMotorEndPlateStepsDiagram': {
            name: 'NMJ: ACh Vesicle Release & Motor End Plate Steps',
            category: 'Muscle Physiology',
            description: 'Step-by-step neuromuscular junction mechanism including ACh vesicle release, motor end plate depolarisation, and nicotinic receptor activation',
            dataRequired: [],
            usage: 'Best for NMJ physiology and neuromuscular pharmacology',
            examples: ['NMJ', 'Acetylcholine', 'Motor end plate', 'Nicotinic receptor', 'Neuromuscular junction'],
            defaultOptions: {
                title: 'NMJ: ACh Vesicle Release & Motor End Plate',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'tTubuleDhprRyr1SrCalciumReleaseCouplingDiagram': {
            name: 'T-Tubule, DHPR & RyR1: SR Calcium Release Coupling',
            category: 'Muscle Physiology',
            description: 'Excitation-contraction coupling via T-tubule DHPR voltage sensor and RyR1-mediated sarcoplasmic reticulum calcium release',
            dataRequired: [],
            usage: 'Best for excitation-contraction coupling and calcium signalling',
            examples: ['T-tubule', 'DHPR', 'RyR1', 'Sarcoplasmic reticulum', 'Calcium release', 'E-C coupling'],
            defaultOptions: {
                title: 'T-Tubule, DHPR & RyR1: SR Calcium Release Coupling',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'myosinActinATPaseCrossBridgeFiveStepCycleDiagram': {
            name: 'Myosin-Actin ATPase Cross-Bridge Five-Step Cycle',
            category: 'Muscle Physiology',
            description: 'Five-step cross-bridge cycle showing myosin head attachment, power stroke, detachment, and re-cocking with ATP hydrolysis',
            dataRequired: [],
            usage: 'Best for muscle contraction molecular mechanism',
            examples: ['Cross-bridge cycle', 'Myosin', 'Actin', 'Power stroke', 'ATP hydrolysis'],
            defaultOptions: {
                title: 'Myosin-Actin ATPase Cross-Bridge Five-Step Cycle',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'motorUnitRecruitmentSizePrincipleFrequencyCodingDiagram': {
            name: 'Motor Unit Recruitment: Size Principle & Frequency Coding',
            category: 'Muscle Physiology',
            description: 'Henneman\'s size principle of motor unit recruitment and rate coding for graded force production',
            dataRequired: [],
            usage: 'Best for motor control and muscle force physiology',
            examples: ['Motor unit', 'Size principle', 'Recruitment', 'Frequency coding', 'Henneman'],
            defaultOptions: {
                title: 'Motor Unit Recruitment: Size Principle & Frequency Coding',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'typeITypeIIaTypeIIxFibrePropertiesComparisonDiagram': {
            name: 'Type I, Type IIa & Type IIx Fibre Properties Comparison',
            category: 'Muscle Physiology',
            description: 'Comparative table and diagram of Type I (slow oxidative), Type IIa, and Type IIx (fast glycolytic) muscle fibre properties',
            dataRequired: [],
            usage: 'Best for muscle fibre type physiology and exercise science',
            examples: ['Type I fibre', 'Type II fibre', 'Slow twitch', 'Fast twitch', 'Muscle fibre types'],
            defaultOptions: {
                title: 'Type I, IIa & IIx Muscle Fibre Properties',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'threeEnergySystemsATPPcGlycolysisOxidativePhosphorilationDiagram': {
            name: 'Three Energy Systems: ATP-PC, Glycolysis & Oxidative Phosphorylation',
            category: 'Muscle Physiology',
            description: 'Comparison of the three muscle energy systems: phosphocreatine, anaerobic glycolysis, and oxidative phosphorylation with capacity and power',
            dataRequired: [],
            usage: 'Best for exercise physiology and bioenergetics',
            examples: ['Energy systems', 'ATP-PC', 'Glycolysis', 'Oxidative phosphorylation', 'Exercise metabolism'],
            defaultOptions: {
                title: 'Three Energy Systems: ATP-PC, Glycolysis & Oxidative Phosphorylation',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'concentricEccentricIsometricForceVelocityRelationshipDiagram': {
            name: 'Concentric, Eccentric & Isometric Force-Velocity Relationship',
            category: 'Muscle Physiology',
            description: 'Force-velocity curve for muscle showing concentric, isometric, and eccentric contraction regions',
            dataRequired: [],
            usage: 'Best for muscle mechanics and exercise physiology',
            examples: ['Force-velocity', 'Concentric', 'Eccentric', 'Isometric', 'Muscle mechanics'],
            defaultOptions: {
                title: 'Force-Velocity Relationship: Concentric, Eccentric & Isometric',
                showLabels: true,
                width: 850,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'centralVsPeripheralFatigueDomsAdaptationTimelineDiagram': {
            name: 'Central vs Peripheral Fatigue, DOMS & Adaptation Timeline',
            category: 'Muscle Physiology',
            description: 'Distinction between central and peripheral fatigue mechanisms and DOMS timeline with training adaptation',
            dataRequired: [],
            usage: 'Best for exercise physiology and sports science',
            examples: ['Muscle fatigue', 'DOMS', 'Central fatigue', 'Peripheral fatigue', 'Training adaptation'],
            defaultOptions: {
                title: 'Central vs Peripheral Fatigue, DOMS & Adaptation Timeline',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'cardiacActionPotentialPlateauPhaseAndStarlingLawDiagram': {
            name: 'Cardiac Action Potential Plateau Phase & Starling Law',
            category: 'Cardiovascular Physiology',
            description: 'Cardiac action potential with plateau phase ion currents and Frank-Starling law of the heart',
            dataRequired: [],
            usage: 'Best for cardiac electrophysiology and cardiac mechanics',
            examples: ['Cardiac action potential', 'Plateau phase', 'Frank-Starling', 'Cardiac output'],
            defaultOptions: {
                title: 'Cardiac Action Potential, Plateau Phase & Starling Law',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'duchenneMuscularDystrophyDystrophinDeficitPathologyDiagram': {
            name: 'Duchenne Muscular Dystrophy & Dystrophin Deficit Pathology',
            category: 'Muscle Physiology',
            description: 'Pathological mechanism of Duchenne muscular dystrophy showing dystrophin deficit, membrane fragility, and muscle fibre degeneration',
            dataRequired: [],
            usage: 'Best for muscular dystrophy and myopathy teaching',
            examples: ['Duchenne', 'Dystrophin', 'Muscular dystrophy', 'DMD', 'Muscle pathology'],
            defaultOptions: {
                title: 'Duchenne Muscular Dystrophy: Dystrophin Deficit Pathology',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 11. CARDIOVASCULAR =====
        'doubleCirculationPathwayDiagram': {
            name: 'Double Circulation Pathway',
            category: 'Cardiovascular',
            description: 'Pulmonary and systemic circulation pathways showing oxygenated and deoxygenated blood flow through the heart and body',
            dataRequired: [],
            usage: 'Best for cardiovascular anatomy and circulation overview',
            examples: ['Double circulation', 'Pulmonary circulation', 'Systemic circulation', 'Heart'],
            defaultOptions: {
                title: 'Double Circulation Pathway',
                showLabels: true,
                width: 850,
                height: 750,
                backgroundColor: '#ffffff'
            }
        },

        'heartChambersValvesLabelledDiagram': {
            name: 'Heart Chambers & Valves Labelled',
            category: 'Cardiovascular',
            description: 'Fully labelled cross-section of the heart showing four chambers, four valves, and major vessels',
            dataRequired: [],
            usage: 'Best for cardiac anatomy and clinical cardiology',
            examples: ['Heart chambers', 'Valves', 'Mitral valve', 'Aortic valve', 'Cardiac anatomy'],
            defaultOptions: {
                title: 'Heart Chambers & Valves',
                showLabels: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'cardiacCycleAndECGWaveformDiagram': {
            name: 'Cardiac Cycle & ECG Waveform',
            category: 'Cardiovascular',
            description: 'Wiggers diagram of the cardiac cycle with pressure-volume changes synchronised with the ECG waveform',
            dataRequired: [],
            usage: 'Best for cardiac physiology and ECG interpretation',
            examples: ['Cardiac cycle', 'ECG', 'Wiggers diagram', 'Systole', 'Diastole'],
            defaultOptions: {
                title: 'Cardiac Cycle & ECG Waveform',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'arteryVeinCapillaryWallStructureDiagram': {
            name: 'Artery, Vein & Capillary Wall Structure',
            category: 'Cardiovascular',
            description: 'Cross-sectional comparison of artery, vein, and capillary wall layers (tunica intima, media, adventitia)',
            dataRequired: [],
            usage: 'Best for vascular histology and blood vessel anatomy',
            examples: ['Artery', 'Vein', 'Capillary', 'Tunica', 'Blood vessel wall'],
            defaultOptions: {
                title: 'Artery, Vein & Capillary Wall Structure',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'bloodComponentsAndHaematocritDiagram': {
            name: 'Blood Components & Haematocrit',
            category: 'Cardiovascular',
            description: 'Composition of blood showing plasma, buffy coat, and red blood cell layers with haematocrit reference values',
            dataRequired: [],
            usage: 'Best for haematology and blood composition teaching',
            examples: ['Blood components', 'Haematocrit', 'Plasma', 'Red blood cells', 'Buffy coat'],
            defaultOptions: {
                title: 'Blood Components & Haematocrit',
                showLabels: true,
                width: 800,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'coagulationCascadeFlowchart': {
            name: 'Coagulation Cascade Flowchart',
            category: 'Cardiovascular',
            description: 'Intrinsic and extrinsic coagulation cascade pathways converging on the common pathway to fibrin clot formation',
            dataRequired: [],
            usage: 'Best for haemostasis and coagulation physiology teaching',
            examples: ['Coagulation cascade', 'Intrinsic pathway', 'Extrinsic pathway', 'Fibrin', 'Thrombin'],
            defaultOptions: {
                title: 'Coagulation Cascade Flowchart',
                showLabels: true,
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'bloodPressureGradientAcrossVascularSystemGraph': {
            name: 'Blood Pressure Gradient Across Vascular System',
            category: 'Cardiovascular',
            description: 'Graph of blood pressure decline from aorta through arteries, arterioles, capillaries, venules, and veins back to heart',
            dataRequired: [],
            usage: 'Best for vascular physiology and blood pressure teaching',
            examples: ['Blood pressure gradient', 'Vascular resistance', 'Arterioles', 'Capillary pressure'],
            defaultOptions: {
                title: 'Blood Pressure Gradient Across the Vascular System',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'starlingForcesFiltrationReabsorptionDiagram': {
            name: 'Starling Forces Filtration & Reabsorption',
            category: 'Cardiovascular',
            description: 'Capillary Starling forces showing net filtration at the arterial end and reabsorption at the venous end',
            dataRequired: [],
            usage: 'Best for capillary exchange physiology',
            examples: ['Starling forces', 'Filtration', 'Reabsorption', 'Capillary', 'Oncotic pressure'],
            defaultOptions: {
                title: 'Starling Forces: Filtration & Reabsorption',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'baroreceptorReflexNeuralControlDiagram': {
            name: 'Baroreceptor Reflex Neural Control',
            category: 'Cardiovascular',
            description: 'Carotid sinus and aortic arch baroreceptor reflex pathway for short-term blood pressure neural control',
            dataRequired: [],
            usage: 'Best for blood pressure regulation and autonomic physiology',
            examples: ['Baroreceptor reflex', 'Blood pressure control', 'Carotid sinus', 'Vagus nerve'],
            defaultOptions: {
                title: 'Baroreceptor Reflex: Neural Control of Blood Pressure',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'foetalCirculationShuntsDiagram': {
            name: 'Foetal Circulation Shunts',
            category: 'Cardiovascular',
            description: 'Foetal circulation showing three shunts: ductus venosus, foramen ovale, and ductus arteriosus with blood flow direction',
            dataRequired: [],
            usage: 'Best for foetal physiology and neonatal transition teaching',
            examples: ['Foetal circulation', 'Ductus arteriosus', 'Foramen ovale', 'Ductus venosus', 'Placenta'],
            defaultOptions: {
                title: 'Foetal Circulation Shunts',
                showLabels: true,
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'atherosclerosisProgressionCrossSection': {
            name: 'Atherosclerosis Progression Cross-Section',
            category: 'Cardiovascular',
            description: 'Sequential cross-sections of an artery showing atherosclerosis progression from fatty streak to vulnerable plaque',
            dataRequired: [],
            usage: 'Best for cardiovascular pathology and atherosclerosis teaching',
            examples: ['Atherosclerosis', 'Plaque', 'Foam cells', 'Fatty streak', 'Vulnerable plaque'],
            defaultOptions: {
                title: 'Atherosclerosis Progression: Cross-Section',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 12. RESPIRATORY =====
        'conductingZoneVsRespiratoryZoneDiagram': {
            name: 'Conducting Zone vs Respiratory Zone',
            category: 'Respiratory',
            description: 'Distinction between conducting zone (trachea to terminal bronchioles) and respiratory zone (respiratory bronchioles to alveoli)',
            dataRequired: [],
            usage: 'Best for respiratory anatomy and lung zone teaching',
            examples: ['Conducting zone', 'Respiratory zone', 'Bronchioles', 'Alveoli', 'Trachea'],
            defaultOptions: {
                title: 'Conducting Zone vs Respiratory Zone',
                showLabels: true,
                width: 850,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'labelledRespiratoryTractAnatomyDiagram': {
            name: 'Labelled Respiratory Tract Anatomy',
            category: 'Respiratory',
            description: 'Fully labelled upper and lower respiratory tract anatomy from nasal cavity to alveoli',
            dataRequired: [],
            usage: 'Best for respiratory anatomy teaching',
            examples: ['Respiratory tract', 'Larynx', 'Trachea', 'Bronchi', 'Lungs', 'Alveoli'],
            defaultOptions: {
                title: 'Respiratory Tract Anatomy',
                showLabels: true,
                width: 750,
                height: 950,
                backgroundColor: '#ffffff'
            }
        },

        'diaphragmIntercostalPressureVolumeDiagram': {
            name: 'Diaphragm & Intercostal Pressure-Volume Diagram',
            category: 'Respiratory',
            description: 'Mechanics of breathing showing diaphragm and intercostal muscle action with resulting pressure and volume changes',
            dataRequired: [],
            usage: 'Best for respiratory mechanics and ventilation teaching',
            examples: ['Diaphragm', 'Intercostal muscles', 'Pressure volume', 'Inhalation', 'Exhalation'],
            defaultOptions: {
                title: 'Diaphragm & Intercostal Pressure-Volume Changes',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'spirogramLungVolumesAndCapacitiesDiagram': {
            name: 'Spirogram: Lung Volumes & Capacities',
            category: 'Respiratory',
            description: 'Spirogram trace with all lung volumes (TV, IRV, ERV, RV) and capacities (IC, FRC, VC, TLC) labelled',
            dataRequired: [],
            usage: 'Best for respiratory physiology and spirometry interpretation',
            examples: ['Spirogram', 'Tidal volume', 'FRC', 'Vital capacity', 'TLC', 'RV'],
            defaultOptions: {
                title: 'Spirogram: Lung Volumes & Capacities',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'partialPressureGradientsAlveoliToTissueDiagram': {
            name: 'Partial Pressure Gradients: Alveoli to Tissue',
            category: 'Respiratory',
            description: 'O₂ and CO₂ partial pressure gradients from alveoli to pulmonary capillary blood and from systemic capillaries to tissue',
            dataRequired: [],
            usage: 'Best for gas exchange physiology teaching',
            examples: ['Partial pressure', 'Gas exchange', 'Alveoli', 'PO2', 'PCO2', 'Diffusion'],
            defaultOptions: {
                title: 'Partial Pressure Gradients: Alveoli to Tissue',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'oxyhaemoglobinDissociationCurveBohrEffectDiagram': {
            name: 'Oxyhaemoglobin Dissociation Curve & Bohr Effect',
            category: 'Respiratory',
            description: 'Sigmoidal oxyhaemoglobin dissociation curve with Bohr effect shifts caused by pH, PCO₂, temperature, and 2,3-DPG',
            dataRequired: [],
            usage: 'Best for oxygen transport and respiratory physiology',
            examples: ['Oxyhaemoglobin', 'Dissociation curve', 'Bohr effect', '2,3-DPG', 'Oxygen saturation'],
            defaultOptions: {
                title: 'Oxyhaemoglobin Dissociation Curve & Bohr Effect',
                showLabels: true,
                width: 850,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'medullaryRespiratoryControlCentreChemoreceptorDiagram': {
            name: 'Medullary Respiratory Control Centre & Chemoreceptors',
            category: 'Respiratory',
            description: 'Medullary respiratory centres (DRG, VRG) and central/peripheral chemoreceptor inputs controlling breathing rate and depth',
            dataRequired: [],
            usage: 'Best for respiratory control and chemoreception teaching',
            examples: ['Respiratory centre', 'Medulla', 'Chemoreceptor', 'Central chemoreceptor', 'Peripheral chemoreceptor'],
            defaultOptions: {
                title: 'Medullary Respiratory Control & Chemoreceptors',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'respiratoryAcidosisAlkalosisABGDiagram': {
            name: 'Respiratory Acidosis & Alkalosis ABG Diagram',
            category: 'Respiratory',
            description: 'Arterial blood gas interpretation diagram for respiratory acidosis, respiratory alkalosis, and metabolic compensation',
            dataRequired: [],
            usage: 'Best for ABG interpretation and acid-base physiology',
            examples: ['ABG', 'Respiratory acidosis', 'Respiratory alkalosis', 'pH', 'PCO2', 'HCO3'],
            defaultOptions: {
                title: 'Respiratory Acidosis & Alkalosis: ABG Interpretation',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'mucociliaryClearanceEscalatorDiagram': {
            name: 'Mucociliary Clearance Escalator',
            category: 'Respiratory',
            description: 'Mucociliary escalator mechanism showing ciliated epithelium, mucus layer, and particle clearance toward the pharynx',
            dataRequired: [],
            usage: 'Best for respiratory defence and innate immunity of the lung',
            examples: ['Mucociliary clearance', 'Cilia', 'Mucus', 'Respiratory defence', 'Particle clearance'],
            defaultOptions: {
                title: 'Mucociliary Clearance Escalator',
                showLabels: true,
                width: 850,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'altitudeVsAtmosphericPO2AcclimatisationGraph': {
            name: 'Altitude vs Atmospheric PO₂ & Acclimatisation',
            category: 'Respiratory',
            description: 'Graph of declining atmospheric PO₂ with altitude and physiological acclimatisation responses including polycythaemia',
            dataRequired: [],
            usage: 'Best for altitude physiology and acclimatisation teaching',
            examples: ['Altitude', 'PO2', 'Acclimatisation', 'Polycythaemia', 'Hypoxia'],
            defaultOptions: {
                title: 'Altitude vs Atmospheric PO₂ & Acclimatisation',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'obstructiveVsRestrictiveSpirometryComparisonChart': {
            name: 'Obstructive vs Restrictive Spirometry Comparison',
            category: 'Respiratory',
            description: 'Spirometry flow-volume loops and FEV1/FVC ratios comparing obstructive (asthma, COPD) and restrictive (fibrosis) patterns',
            dataRequired: [],
            usage: 'Best for spirometry interpretation and respiratory disease',
            examples: ['Obstructive', 'Restrictive', 'FEV1', 'FVC', 'COPD', 'Asthma', 'Fibrosis'],
            defaultOptions: {
                title: 'Obstructive vs Restrictive Spirometry Comparison',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 13. DIGESTIVE =====
        'alimentaryCanalOverviewLabelledDiagram': {
            name: 'Alimentary Canal Overview Labelled',
            category: 'Digestive',
            description: 'Full labelled overview of the alimentary canal from mouth to anus with associated organs',
            dataRequired: [],
            usage: 'Best for digestive system anatomy overview',
            examples: ['Alimentary canal', 'GI tract', 'Digestive system', 'Oesophagus', 'Intestines'],
            defaultOptions: {
                title: 'Alimentary Canal: Overview',
                showLabels: true,
                width: 750,
                height: 950,
                backgroundColor: '#ffffff'
            }
        },

        'salivaryGlandsAndDentitionLabelledDiagram': {
            name: 'Salivary Glands & Dentition Labelled',
            category: 'Digestive',
            description: 'Labelled diagram of the three major salivary glands and adult dentition with tooth types and functions',
            dataRequired: [],
            usage: 'Best for oral anatomy and digestion teaching',
            examples: ['Salivary glands', 'Parotid', 'Submandibular', 'Dentition', 'Teeth'],
            defaultOptions: {
                title: 'Salivary Glands & Dentition',
                showLabels: true,
                width: 850,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'swallowingPhasesAndOesophagealPeristalsisdiagram': {
            name: 'Swallowing Phases & Oesophageal Peristalsis',
            category: 'Digestive',
            description: 'Three phases of swallowing (oral, pharyngeal, oesophageal) and peristaltic wave propagation in the oesophagus',
            dataRequired: [],
            usage: 'Best for deglutition and oesophageal physiology teaching',
            examples: ['Swallowing', 'Peristalsis', 'Oesophagus', 'Deglutition', 'Pharynx'],
            defaultOptions: {
                title: 'Swallowing Phases & Oesophageal Peristalsis',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'stomachRegionsGastricGlandCellTypesDiagram': {
            name: 'Stomach Regions & Gastric Gland Cell Types',
            category: 'Digestive',
            description: 'Stomach anatomical regions with gastric gland histology showing chief cells, parietal cells, G cells, and mucous cells',
            dataRequired: [],
            usage: 'Best for stomach physiology and gastric secretion teaching',
            examples: ['Stomach', 'Gastric gland', 'Parietal cell', 'Chief cell', 'G cell', 'HCl'],
            defaultOptions: {
                title: 'Stomach Regions & Gastric Gland Cell Types',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'villiMicrovilliSurfaceAreaAmplificationDiagram': {
            name: 'Villi & Microvilli Surface Area Amplification',
            category: 'Digestive',
            description: 'Three levels of intestinal surface area amplification: circular folds, villi, and microvilli (brush border)',
            dataRequired: [],
            usage: 'Best for intestinal absorption and small intestine histology',
            examples: ['Villi', 'Microvilli', 'Brush border', 'Surface area', 'Absorption', 'Small intestine'],
            defaultOptions: {
                title: 'Villi & Microvilli: Surface Area Amplification',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'liverLobulesPortalTriadBileFlowDiagram': {
            name: 'Liver Lobules, Portal Triad & Bile Flow',
            category: 'Digestive',
            description: 'Hepatic lobule architecture showing portal triad (portal vein, hepatic artery, bile duct) and bile flow direction',
            dataRequired: [],
            usage: 'Best for liver histology and hepatic physiology',
            examples: ['Liver lobule', 'Portal triad', 'Bile duct', 'Hepatocyte', 'Bile flow'],
            defaultOptions: {
                title: 'Liver Lobules, Portal Triad & Bile Flow',
                showLabels: true,
                width: 900,
                height: 750,
                backgroundColor: '#ffffff'
            }
        },

        'pancreaticAcinarCellsIsletsDualFunctionDiagram': {
            name: 'Pancreatic Acinar Cells & Islets: Dual Function',
            category: 'Digestive',
            description: 'Pancreatic exocrine (acinar cells, digestive enzymes) and endocrine (islets of Langerhans) dual function anatomy',
            dataRequired: [],
            usage: 'Best for pancreatic physiology and dual function teaching',
            examples: ['Pancreas', 'Acinar cells', 'Islets', 'Exocrine', 'Endocrine', 'Pancreatic enzymes'],
            defaultOptions: {
                title: 'Pancreatic Acinar Cells & Islets: Dual Function',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'largeIntestineRegionsHaustraWaterAbsorptionDiagram': {
            name: 'Large Intestine Regions, Haustra & Water Absorption',
            category: 'Digestive',
            description: 'Regions of the large intestine with haustral structure and water/electrolyte absorption along the colon',
            dataRequired: [],
            usage: 'Best for large intestine anatomy and colonic physiology',
            examples: ['Large intestine', 'Colon', 'Haustra', 'Caecum', 'Rectum', 'Water absorption'],
            defaultOptions: {
                title: 'Large Intestine: Regions, Haustra & Water Absorption',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'gastrinSecretinCCKHormoneActionSummaryTable': {
            name: 'Gastrin, Secretin & CCK Hormone Action Summary',
            category: 'Digestive',
            description: 'Summary table of GI hormones (gastrin, secretin, CCK) including stimuli, source cells, targets, and actions',
            dataRequired: [],
            usage: 'Best for GI endocrinology and digestive hormone teaching',
            examples: ['Gastrin', 'Secretin', 'CCK', 'GI hormones', 'Digestion'],
            defaultOptions: {
                title: 'Gastrin, Secretin & CCK: Hormone Action Summary',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'macronutrientDigestionAbsorptionSummaryDiagram': {
            name: 'Macronutrient Digestion & Absorption Summary',
            category: 'Digestive',
            description: 'Summary diagram of carbohydrate, protein, and fat digestion and absorption sites along the GI tract',
            dataRequired: [],
            usage: 'Best for nutrition and digestive physiology teaching',
            examples: ['Digestion', 'Absorption', 'Carbohydrates', 'Proteins', 'Fats', 'Macronutrients'],
            defaultOptions: {
                title: 'Macronutrient Digestion & Absorption Summary',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pepticUlcerVsIBDPathologyComparisonDiagram': {
            name: 'Peptic Ulcer vs IBD Pathology Comparison',
            category: 'Digestive',
            description: 'Comparative pathology of peptic ulcer disease (H. pylori, NSAIDs) and inflammatory bowel disease (Crohn\'s, UC)',
            dataRequired: [],
            usage: 'Best for GI pathology and gastroenterology teaching',
            examples: ['Peptic ulcer', 'IBD', 'Crohn\'s disease', 'Ulcerative colitis', 'H. pylori'],
            defaultOptions: {
                title: 'Peptic Ulcer vs IBD: Pathology Comparison',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 14. RENAL =====
        'excretoryOrgansAndWasteProductsOverviewDiagram': {
            name: 'Excretory Organs & Waste Products Overview',
            category: 'Renal',
            description: 'Overview of excretory organs (kidneys, lungs, skin, liver) and the waste products each eliminates',
            dataRequired: [],
            usage: 'Best for excretion physiology and organ system overview',
            examples: ['Excretion', 'Kidneys', 'Waste products', 'Urea', 'Excretory organs'],
            defaultOptions: {
                title: 'Excretory Organs & Waste Products Overview',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'kidneyExternalInternalStructureLabelledDiagram': {
            name: 'Kidney External & Internal Structure Labelled',
            category: 'Renal',
            description: 'Labelled external and coronal section view of the kidney showing cortex, medulla, pyramids, calyces, pelvis, and ureter',
            dataRequired: [],
            usage: 'Best for renal anatomy and nephrology teaching',
            examples: ['Kidney', 'Renal cortex', 'Renal medulla', 'Renal pelvis', 'Ureter'],
            defaultOptions: {
                title: 'Kidney: External & Internal Structure',
                showLabels: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'nephronComponentsLabelledFlowDiagram': {
            name: 'Nephron Components Labelled Flow Diagram',
            category: 'Renal',
            description: 'Labelled nephron diagram showing flow through glomerulus, proximal tubule, loop of Henle, distal tubule, and collecting duct',
            dataRequired: [],
            usage: 'Best for renal physiology and nephron anatomy',
            examples: ['Nephron', 'Glomerulus', 'Loop of Henle', 'Proximal tubule', 'Collecting duct'],
            defaultOptions: {
                title: 'Nephron Components: Labelled Flow',
                showLabels: true,
                width: 850,
                height: 850,
                backgroundColor: '#ffffff'
            }
        },

        'filtrationReabsorptionSecretionAlongNephronDiagram': {
            name: 'Filtration, Reabsorption & Secretion Along the Nephron',
            category: 'Renal',
            description: 'Diagram showing sites of glomerular filtration, tubular reabsorption, and secretion at each nephron segment',
            dataRequired: [],
            usage: 'Best for renal tubular physiology and urine formation',
            examples: ['Filtration', 'Reabsorption', 'Secretion', 'Nephron', 'Tubular transport'],
            defaultOptions: {
                title: 'Filtration, Reabsorption & Secretion Along the Nephron',
                showLabels: true,
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'countercurrentMultiplierMedullaryGradientDiagram': {
            name: 'Countercurrent Multiplier & Medullary Gradient',
            category: 'Renal',
            description: 'Loop of Henle countercurrent multiplier mechanism establishing the medullary osmotic gradient for urine concentration',
            dataRequired: [],
            usage: 'Best for urine concentration and countercurrent mechanism teaching',
            examples: ['Countercurrent multiplier', 'Medullary gradient', 'Loop of Henle', 'Urine concentration', 'ADH'],
            defaultOptions: {
                title: 'Countercurrent Multiplier & Medullary Gradient',
                showLabels: true,
                width: 850,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'renalHPlusHCO3HandlingAlongNephronDiagram': {
            name: 'Renal H⁺ & HCO₃⁻ Handling Along the Nephron',
            category: 'Renal',
            description: 'Acid-base regulation by the nephron showing H⁺ secretion and HCO₃⁻ reabsorption at each tubular segment',
            dataRequired: [],
            usage: 'Best for renal acid-base physiology and buffer teaching',
            examples: ['Renal acid-base', 'Bicarbonate', 'H+ secretion', 'Proximal tubule', 'Collecting duct'],
            defaultOptions: {
                title: 'Renal H⁺ & HCO₃⁻ Handling Along the Nephron',
                showLabels: true,
                width: 900,
                height: 750,
                backgroundColor: '#ffffff'
            }
        },

        'kidneyEndocrineFunctionsEPOVitaminDRAASDiagram': {
            name: 'Kidney Endocrine Functions: EPO, Vitamin D & RAAS',
            category: 'Renal',
            description: 'Endocrine roles of the kidney: erythropoietin production, vitamin D activation, and renin release into the RAAS',
            dataRequired: [],
            usage: 'Best for renal endocrinology and RAAS physiology',
            examples: ['EPO', 'Vitamin D', 'RAAS', 'Renin', 'Kidney hormones'],
            defaultOptions: {
                title: 'Kidney Endocrine Functions: EPO, Vitamin D & RAAS',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'GFRCreatinineClearanceCalculationDiagram': {
            name: 'GFR & Creatinine Clearance Calculation',
            category: 'Renal',
            description: 'GFR measurement principles using inulin and creatinine clearance with calculation method and clinical interpretation',
            dataRequired: [],
            usage: 'Best for renal function assessment and nephrology',
            examples: ['GFR', 'Creatinine clearance', 'Inulin', 'Renal function', 'eGFR'],
            defaultOptions: {
                title: 'GFR & Creatinine Clearance Calculation',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'sodiumPotassiumCalciumRenalHandlingSummaryDiagram': {
            name: 'Sodium, Potassium & Calcium Renal Handling Summary',
            category: 'Renal',
            description: 'Summary of sodium, potassium, and calcium handling at each nephron segment with regulatory hormones',
            dataRequired: [],
            usage: 'Best for electrolyte physiology and renal handling',
            examples: ['Sodium', 'Potassium', 'Calcium', 'Renal handling', 'Electrolytes', 'Aldosterone'],
            defaultOptions: {
                title: 'Sodium, Potassium & Calcium: Renal Handling Summary',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'juxtaglomerularApparatusGranularCellsMaculaDensaDiagram': {
            name: 'Juxtaglomerular Apparatus: Granular Cells & Macula Densa',
            category: 'Renal',
            description: 'Juxtaglomerular apparatus anatomy showing granular (JG) cells, macula densa, and their roles in renin release',
            dataRequired: [],
            usage: 'Best for RAAS regulation and renal autoregulation teaching',
            examples: ['JGA', 'Macula densa', 'Granular cells', 'Renin', 'RAAS', 'Tubuloglomerular feedback'],
            defaultOptions: {
                title: 'Juxtaglomerular Apparatus: Granular Cells & Macula Densa',
                showLabels: true,
                width: 850,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'CKDStagingGFRDeclineGraph': {
            name: 'CKD Staging & GFR Decline Graph',
            category: 'Renal',
            description: 'CKD staging (G1–G5) with GFR thresholds and a decline curve showing progressive renal function loss',
            dataRequired: [],
            usage: 'Best for chronic kidney disease and nephrology teaching',
            examples: ['CKD', 'GFR', 'Chronic kidney disease', 'Staging', 'Renal failure'],
            defaultOptions: {
                title: 'CKD Staging & GFR Decline',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 15. IMMUNOLOGY (DETAILED) =====
        'innateVsAdaptiveImmunityComparisonDiagram': {
            name: 'Innate vs Adaptive Immunity Comparison',
            category: 'Immunology',
            description: 'Side-by-side comparison of innate and adaptive immunity: speed, specificity, memory, and cellular components',
            dataRequired: [],
            usage: 'Best for immunology overview and teaching',
            examples: ['Innate immunity', 'Adaptive immunity', 'Specificity', 'Memory', 'Immune response'],
            defaultOptions: {
                title: 'Innate vs Adaptive Immunity Comparison',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'primarySecondaryLymphoidOrgansBodyMapDiagram': {
            name: 'Primary & Secondary Lymphoid Organs Body Map',
            category: 'Immunology',
            description: 'Body map locating primary (bone marrow, thymus) and secondary (lymph nodes, spleen, MALT, tonsils) lymphoid organs',
            dataRequired: [],
            usage: 'Best for lymphoid organ anatomy and immunology',
            examples: ['Lymphoid organs', 'Bone marrow', 'Thymus', 'Spleen', 'MALT', 'Tonsils'],
            defaultOptions: {
                title: 'Primary & Secondary Lymphoid Organs Body Map',
                showLabels: true,
                width: 750,
                height: 950,
                backgroundColor: '#ffffff'
            }
        },

        'physicalAndChemicalBarriersOfInnateImmunityDiagram': {
            name: 'Physical & Chemical Barriers of Innate Immunity',
            category: 'Immunology',
            description: 'Overview of physical (skin, mucosa, cilia) and chemical (lysozyme, acid, defensins) barriers of innate immunity',
            dataRequired: [],
            usage: 'Best for innate immunity and barrier defence teaching',
            examples: ['Innate barriers', 'Skin barrier', 'Lysozyme', 'Mucus', 'Defensins', 'Acid pH'],
            defaultOptions: {
                title: 'Physical & Chemical Barriers of Innate Immunity',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'phagocytosisComplementInflammationCascadeDiagram': {
            name: 'Phagocytosis, Complement & Inflammation Cascade',
            category: 'Immunology',
            description: 'Phagocytosis steps, complement activation pathways, and acute inflammation cascade as innate immune effector mechanisms',
            dataRequired: [],
            usage: 'Best for innate immunity and inflammation cascade teaching',
            examples: ['Phagocytosis', 'Complement', 'Inflammation', 'Neutrophil', 'Opsonisation'],
            defaultOptions: {
                title: 'Phagocytosis, Complement & Inflammation Cascade',
                showLabels: true,
                width: 1000,
                height: 750,
                backgroundColor: '#ffffff'
            }
        },

        'antibodyStructureAndFiveClassesDiagram': {
            name: 'Antibody Structure & Five Classes',
            category: 'Immunology',
            description: 'Y-shaped antibody structure with heavy/light chains, variable/constant regions, and comparison of IgG, IgM, IgA, IgE, IgD classes',
            dataRequired: [],
            usage: 'Best for antibody biology and immunology teaching',
            examples: ['Antibody', 'Immunoglobulin', 'IgG', 'IgM', 'IgA', 'IgE', 'Five classes'],
            defaultOptions: {
                title: 'Antibody Structure & Five Classes',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'ThelperCTLCD4CD8MHCActivationPathwayDiagram': {
            name: 'T Helper & CTL CD4/CD8 MHC Activation Pathway',
            category: 'Immunology',
            description: 'Activation pathways of CD4+ T helper cells via MHC II and CD8+ cytotoxic T lymphocytes via MHC I',
            dataRequired: [],
            usage: 'Best for adaptive immunity and T cell activation teaching',
            examples: ['T helper cell', 'CTL', 'CD4', 'CD8', 'MHC II', 'MHC I', 'T cell activation'],
            defaultOptions: {
                title: 'T Helper & CTL CD4/CD8 MHC Activation Pathway',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'endogenousExogenousAntigenPresentationMHC1MHC2Diagram': {
            name: 'Endogenous & Exogenous Antigen Presentation: MHC I & MHC II',
            category: 'Immunology',
            description: 'Endogenous antigen processing via proteasome/MHC I and exogenous antigen processing via lysosome/MHC II pathways',
            dataRequired: [],
            usage: 'Best for antigen presentation and MHC biology teaching',
            examples: ['Antigen presentation', 'MHC I', 'MHC II', 'Endogenous', 'Exogenous', 'Proteasome'],
            defaultOptions: {
                title: 'Endogenous & Exogenous Antigen Presentation: MHC I & II',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'primaryVsSecondaryImmuneResponseAntibodyTitreDiagram': {
            name: 'Primary vs Secondary Immune Response Antibody Titre',
            category: 'Immunology',
            description: 'Antibody titre graph comparing primary and secondary immune responses showing latency, peak, and isotype switching',
            dataRequired: [],
            usage: 'Best for adaptive immunity, vaccination, and memory cell teaching',
            examples: ['Primary response', 'Secondary response', 'Antibody titre', 'Memory B cells', 'Isotype switching'],
            defaultOptions: {
                title: 'Primary vs Secondary Immune Response: Antibody Titre',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gellAndCoombsTypeIIIIIIIVHypersensitivityDiagram': {
            name: 'Gell & Coombs Type I, II, III & IV Hypersensitivity',
            category: 'Immunology',
            description: 'Mechanism diagrams for all four Gell and Coombs hypersensitivity types with clinical examples',
            dataRequired: [],
            usage: 'Best for allergy and hypersensitivity immunology teaching',
            examples: ['Type I hypersensitivity', 'Type II', 'Type III', 'Type IV', 'IgE', 'Delayed hypersensitivity'],
            defaultOptions: {
                title: 'Gell & Coombs: Type I, II, III & IV Hypersensitivity',
                showLabels: true,
                width: 1000,
                height: 750,
                backgroundColor: '#ffffff'
            }
        },

        'autoimmunityMechanismsAndExamplesDiseasesDiagram': {
            name: 'Autoimmunity Mechanisms & Example Diseases',
            category: 'Immunology',
            description: 'Mechanisms of autoimmunity (molecular mimicry, epitope spreading, bystander activation) with clinical autoimmune disease examples',
            dataRequired: [],
            usage: 'Best for autoimmunity and rheumatology immunology teaching',
            examples: ['Autoimmunity', 'Molecular mimicry', 'SLE', 'Rheumatoid arthritis', 'Type 1 diabetes'],
            defaultOptions: {
                title: 'Autoimmunity: Mechanisms & Example Diseases',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'tumourImmuneEvasionCheckpointInhibitorDiagram': {
            name: 'Tumour Immune Evasion & Checkpoint Inhibitor',
            category: 'Immunology',
            description: 'Tumour immune evasion mechanisms (PD-L1, CTLA-4, immunosuppressive microenvironment) and checkpoint inhibitor therapeutic targets',
            dataRequired: [],
            usage: 'Best for tumour immunology and immunotherapy teaching',
            examples: ['Tumour immune evasion', 'PD-1', 'PD-L1', 'CTLA-4', 'Checkpoint inhibitor', 'Immunotherapy'],
            defaultOptions: {
                title: 'Tumour Immune Evasion & Checkpoint Inhibitors',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 16. INTEGUMENTARY (SKIN) =====
        'skinFunctionsSummaryAndColourDeterminantsDiagram': {
            name: 'Skin Functions Summary & Colour Determinants',
            category: 'Integumentary',
            description: 'Summary of skin functions (protection, thermoregulation, sensation, vitamin D, excretion) and determinants of skin colour',
            dataRequired: [],
            usage: 'Best for integumentary system overview and dermatology',
            examples: ['Skin functions', 'Melanin', 'Skin colour', 'Keratin', 'Thermoregulation'],
            defaultOptions: {
                title: 'Skin Functions Summary & Colour Determinants',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'fiveLayersOfEpidermisLabelledCrossSection': {
            name: 'Five Layers of the Epidermis: Labelled Cross-Section',
            category: 'Integumentary',
            description: 'Labelled cross-section of the five epidermal layers from stratum basale to stratum corneum with cell types',
            dataRequired: [],
            usage: 'Best for skin histology and epidermis teaching',
            examples: ['Epidermis', 'Stratum corneum', 'Stratum basale', 'Keratinocyte', 'Melanocyte'],
            defaultOptions: {
                title: 'Five Layers of the Epidermis: Cross-Section',
                showLabels: true,
                width: 850,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'papillaryReticularyDermisSensoryReceptorsDiagram': {
            name: 'Papillary & Reticular Dermis with Sensory Receptors',
            category: 'Integumentary',
            description: 'Dermis layers (papillary and reticular) with Meissner\'s, Pacinian, Ruffini, and Merkel sensory receptors labelled',
            dataRequired: [],
            usage: 'Best for skin histology and cutaneous sensation teaching',
            examples: ['Dermis', 'Papillary', 'Reticular', 'Meissner', 'Pacinian', 'Sensory receptors'],
            defaultOptions: {
                title: 'Papillary & Reticular Dermis: Sensory Receptors',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'hypodermisFatLayerInsulationPaddingDiagram': {
            name: 'Hypodermis Fat Layer: Insulation & Padding',
            category: 'Integumentary',
            description: 'Hypodermis (subcutaneous layer) structure, adipocyte arrangement, and roles in thermal insulation, padding, and energy storage',
            dataRequired: [],
            usage: 'Best for skin anatomy and adipose tissue teaching',
            examples: ['Hypodermis', 'Subcutaneous fat', 'Adipocytes', 'Insulation', 'Energy storage'],
            defaultOptions: {
                title: 'Hypodermis Fat Layer: Insulation & Padding',
                showLabels: true,
                width: 850,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'hairFollicleShaftGrowthCycleAnagenCatagenTelogenDiagram': {
            name: 'Hair Follicle, Shaft & Growth Cycle: Anagen, Catagen, Telogen',
            category: 'Integumentary',
            description: 'Labelled hair follicle and shaft anatomy with the three-phase hair growth cycle (anagen, catagen, telogen)',
            dataRequired: [],
            usage: 'Best for hair biology and dermatology teaching',
            examples: ['Hair follicle', 'Hair shaft', 'Anagen', 'Catagen', 'Telogen', 'Hair growth cycle'],
            defaultOptions: {
                title: 'Hair Follicle, Shaft & Growth Cycle',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nailStructurePlateMatrixBedLunulaDiagram': {
            name: 'Nail Structure: Plate, Matrix, Bed & Lunula',
            category: 'Integumentary',
            description: 'Labelled nail anatomy including nail plate, matrix, nail bed, lunula, hyponychium, and eponychium',
            dataRequired: [],
            usage: 'Best for nail anatomy and dermatology teaching',
            examples: ['Nail', 'Nail plate', 'Nail matrix', 'Lunula', 'Nail bed', 'Eponychium'],
            defaultOptions: {
                title: 'Nail Structure: Plate, Matrix, Bed & Lunula',
                showLabels: true,
                width: 850,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'eccrineApocrineSeabaceousGlandsComparisonDiagram': {
            name: 'Eccrine, Apocrine & Sebaceous Glands Comparison',
            category: 'Integumentary',
            description: 'Comparative diagram of eccrine sweat glands, apocrine sweat glands, and sebaceous glands in structure, location, and secretion',
            dataRequired: [],
            usage: 'Best for skin gland histology and dermatology',
            examples: ['Eccrine glands', 'Apocrine glands', 'Sebaceous glands', 'Sweat', 'Sebum'],
            defaultOptions: {
                title: 'Eccrine, Apocrine & Sebaceous Glands Comparison',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'skinVasodilationVasoconstrictionHeatLossMechanismsDiagram': {
            name: 'Skin Vasodilation & Vasoconstriction Heat Loss Mechanisms',
            category: 'Integumentary',
            description: 'Cutaneous vasodilation and vasoconstriction responses for heat loss and heat conservation in thermoregulation',
            dataRequired: [],
            usage: 'Best for thermoregulation and skin physiology teaching',
            examples: ['Thermoregulation', 'Vasodilation', 'Vasoconstriction', 'Heat loss', 'Sweating'],
            defaultOptions: {
                title: 'Skin Vasodilation & Vasoconstriction: Heat Loss Mechanisms',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'vitaminD3SynthesisActivationPathwaySkinLiverKidneyDiagram': {
            name: 'Vitamin D3 Synthesis & Activation Pathway: Skin, Liver & Kidney',
            category: 'Integumentary',
            description: 'Sequential vitamin D3 synthesis from 7-dehydrocholesterol in skin via UV, hydroxylation in liver, and activation in kidney',
            dataRequired: [],
            usage: 'Best for vitamin D metabolism and integumentary–endocrine axis',
            examples: ['Vitamin D3', 'Cholecalciferol', '25-hydroxyvitamin D', 'Calcitriol', 'UV radiation'],
            defaultOptions: {
                title: 'Vitamin D3 Synthesis & Activation: Skin–Liver–Kidney',
                showLabels: true,
                width: 1000,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'woundHealingFourPhasesDiagram': {
            name: 'Wound Healing Four Phases',
            category: 'Integumentary',
            description: 'Four-phase wound healing timeline: haemostasis, inflammation, proliferation, and remodelling with cellular events',
            dataRequired: [],
            usage: 'Best for wound healing and skin repair teaching',
            examples: ['Wound healing', 'Haemostasis', 'Inflammation', 'Proliferation', 'Remodelling'],
            defaultOptions: {
                title: 'Wound Healing: Four Phases',
                showLabels: true,
                width: 1000,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'ABCDEMelanomaDetectionSkinCancerTypesDiagram': {
            name: 'ABCDE Melanoma Detection & Skin Cancer Types',
            category: 'Integumentary',
            description: 'ABCDE criteria for melanoma detection and comparison of basal cell carcinoma, squamous cell carcinoma, and melanoma',
            dataRequired: [],
            usage: 'Best for skin cancer and dermatology teaching',
            examples: ['Melanoma', 'ABCDE', 'Skin cancer', 'BCC', 'SCC', 'Dermatology'],
            defaultOptions: {
                title: 'ABCDE Melanoma Detection & Skin Cancer Types',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 17. BIOCHEMISTRY – CARBOHYDRATES =====
        'carbohydrateGeneralFormulaDiagram': {
            name: 'Carbohydrate General Formula',
            category: 'Biochemistry',
            description: 'General formula of carbohydrates (CH₂O)n with monosaccharide, disaccharide, and polysaccharide classification',
            dataRequired: [],
            usage: 'Best for carbohydrate biochemistry introduction',
            examples: ['Carbohydrates', 'General formula', 'Monosaccharide', 'Disaccharide', 'Polysaccharide'],
            defaultOptions: {
                title: 'Carbohydrate General Formula',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'glucoseHaworthProjectionDiagram': {
            name: 'Glucose Haworth Projection',
            category: 'Biochemistry',
            description: 'Haworth projection of α-D-glucose and β-D-glucose ring structures showing anomeric carbon',
            dataRequired: [],
            usage: 'Best for carbohydrate chemistry and stereochemistry',
            examples: ['Glucose', 'Haworth projection', 'Alpha glucose', 'Beta glucose', 'Anomeric carbon'],
            defaultOptions: {
                title: 'Glucose Haworth Projection',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'glycosidicBondFormationDiagram': {
            name: 'Glycosidic Bond Formation',
            category: 'Biochemistry',
            description: 'Condensation reaction forming α-1,4 and α-1,6 glycosidic bonds between monosaccharides with water release',
            dataRequired: [],
            usage: 'Best for carbohydrate chemistry and glycobiology',
            examples: ['Glycosidic bond', 'Condensation', 'Alpha-1,4', 'Maltose', 'Sucrose'],
            defaultOptions: {
                title: 'Glycosidic Bond Formation',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'starchGlycogenCelluloseComparisonDiagram': {
            name: 'Starch, Glycogen & Cellulose Comparison',
            category: 'Biochemistry',
            description: 'Structural and functional comparison of starch (amylose/amylopectin), glycogen, and cellulose polysaccharides',
            dataRequired: [],
            usage: 'Best for polysaccharide biochemistry and nutrition',
            examples: ['Starch', 'Glycogen', 'Cellulose', 'Amylose', 'Amylopectin', 'Polysaccharides'],
            defaultOptions: {
                title: 'Starch, Glycogen & Cellulose Comparison',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'condensationHydrolysisReactionDiagram': {
            name: 'Condensation & Hydrolysis Reaction',
            category: 'Biochemistry',
            description: 'Condensation (dehydration synthesis) and hydrolysis reactions as the reverse biological processes for polymer building and breakdown',
            dataRequired: [],
            usage: 'Best for biological macromolecule synthesis and digestion',
            examples: ['Condensation', 'Hydrolysis', 'Dehydration synthesis', 'Water', 'Polymer'],
            defaultOptions: {
                title: 'Condensation & Hydrolysis Reaction',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'benedictIodineTestResultsChart': {
            name: 'Benedict & Iodine Test Results Chart',
            category: 'Biochemistry',
            description: 'Results chart for Benedict\'s test for reducing sugars and iodine test for starch with colour interpretation',
            dataRequired: [],
            usage: 'Best for carbohydrate biochemical testing and practical education',
            examples: ['Benedict\'s test', 'Iodine test', 'Reducing sugars', 'Starch', 'Food tests'],
            defaultOptions: {
                title: 'Benedict & Iodine Test Results Chart',
                showLabels: true,
                width: 850,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'glycocalyxMembraneDiagram': {
            name: 'Glycocalyx Membrane Diagram',
            category: 'Biochemistry',
            description: 'Cell surface glycocalyx showing glycoproteins and glycolipids in the plasma membrane and their roles in cell recognition',
            dataRequired: [],
            usage: 'Best for membrane biochemistry and cell signalling',
            examples: ['Glycocalyx', 'Glycoproteins', 'Glycolipids', 'Cell recognition', 'Membrane'],
            defaultOptions: {
                title: 'Glycocalyx Membrane Diagram',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'glycolysisGlycogenesisPathwayDiagram': {
            name: 'Glycolysis & Glycogenesis Pathway',
            category: 'Biochemistry',
            description: 'Glycolysis pathway from glucose to pyruvate and glycogenesis pathway for glycogen synthesis with key enzymes',
            dataRequired: [],
            usage: 'Best for carbohydrate metabolism and biochemistry',
            examples: ['Glycolysis', 'Glycogenesis', 'Glucose', 'Pyruvate', 'Glycogen synthesis'],
            defaultOptions: {
                title: 'Glycolysis & Glycogenesis Pathway',
                showLabels: true,
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'carbohydrateDigestionTractDiagram': {
            name: 'Carbohydrate Digestion Along the GI Tract',
            category: 'Biochemistry',
            description: 'Sites and enzymes of carbohydrate digestion from salivary amylase in the mouth to brush border disaccharidases in the intestine',
            dataRequired: [],
            usage: 'Best for carbohydrate digestion and nutrition biochemistry',
            examples: ['Carbohydrate digestion', 'Amylase', 'Brush border enzymes', 'Maltase', 'Lactase'],
            defaultOptions: {
                title: 'Carbohydrate Digestion Along the GI Tract',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'selectinLigandBindingDiagram': {
            name: 'Selectin–Ligand Binding Diagram',
            category: 'Biochemistry',
            description: 'Selectin-carbohydrate ligand binding in leukocyte rolling and adhesion during inflammation',
            dataRequired: [],
            usage: 'Best for cell adhesion molecules and inflammation biochemistry',
            examples: ['Selectin', 'Leukocyte adhesion', 'Rolling', 'Sialyl Lewis X', 'Inflammation'],
            defaultOptions: {
                title: 'Selectin–Ligand Binding',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'diabetesBloodGlucoseRegulationDiagram': {
            name: 'Diabetes & Blood Glucose Regulation',
            category: 'Biochemistry',
            description: 'Normal blood glucose regulation compared to Type 1 and Type 2 diabetes pathophysiology with insulin/glucagon axes',
            dataRequired: [],
            usage: 'Best for diabetes, insulin signalling, and glucose homeostasis',
            examples: ['Diabetes', 'Blood glucose', 'Insulin resistance', 'Type 1', 'Type 2', 'Glucagon'],
            defaultOptions: {
                title: 'Diabetes & Blood Glucose Regulation',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 18. BIOCHEMISTRY – LIPIDS =====
        'fattyAcidStructureDiagram': {
            name: 'Fatty Acid Structure',
            category: 'Biochemistry',
            description: 'Saturated and unsaturated fatty acid structures with carboxyl head group and hydrocarbon chain, showing cis double bond geometry',
            dataRequired: [],
            usage: 'Best for lipid biochemistry and nutrition',
            examples: ['Fatty acid', 'Saturated', 'Unsaturated', 'Double bond', 'Palmitic acid'],
            defaultOptions: {
                title: 'Fatty Acid Structure',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'triacylglycerolEsterBondDiagram': {
            name: 'Triacylglycerol & Ester Bond Formation',
            category: 'Biochemistry',
            description: 'Formation of triacylglycerol from glycerol and three fatty acids via ester bond condensation reactions',
            dataRequired: [],
            usage: 'Best for lipid biochemistry and fat structure',
            examples: ['Triacylglycerol', 'Triglyceride', 'Ester bond', 'Glycerol', 'Fatty acid'],
            defaultOptions: {
                title: 'Triacylglycerol & Ester Bond Formation',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'phospholipidBilayerDiagram': {
            name: 'Phospholipid Bilayer',
            category: 'Biochemistry',
            description: 'Phospholipid bilayer structure showing hydrophilic head groups and hydrophobic tails forming the membrane core',
            dataRequired: [],
            usage: 'Best for membrane biology and lipid biochemistry',
            examples: ['Phospholipid', 'Bilayer', 'Hydrophilic', 'Hydrophobic', 'Cell membrane'],
            defaultOptions: {
                title: 'Phospholipid Bilayer',
                showLabels: true,
                width: 850,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cholesterolSteraneSkeleton': {
            name: 'Cholesterol & Sterane Skeleton',
            category: 'Biochemistry',
            description: 'Cholesterol molecular structure with four-ring sterane skeleton and roles as membrane component and steroid hormone precursor',
            dataRequired: [],
            usage: 'Best for steroid biochemistry and lipid teaching',
            examples: ['Cholesterol', 'Sterane', 'Steroid', 'Membrane fluidity', 'Bile acids'],
            defaultOptions: {
                title: 'Cholesterol & Sterane Skeleton',
                showLabels: true,
                width: 850,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'waxEsterStructureDiagram': {
            name: 'Wax Ester Structure',
            category: 'Biochemistry',
            description: 'Structure of biological wax esters with long-chain fatty acid and long-chain alcohol joined by an ester bond',
            dataRequired: [],
            usage: 'Best for lipid diversity and biological wax function teaching',
            examples: ['Wax ester', 'Cuticle wax', 'Ester bond', 'Long-chain alcohol', 'Waterproofing'],
            defaultOptions: {
                title: 'Wax Ester Structure',
                showLabels: true,
                width: 800,
                height: 550,
                backgroundColor: '#ffffff'
            }
        },

        'fatSolubleVitaminAbsorptionDiagram': {
            name: 'Fat-Soluble Vitamin Absorption Diagram',
            category: 'Biochemistry',
            description: 'Absorption of fat-soluble vitamins A, D, E, K with dietary fat via micelles, chylomicrons, and lymphatic system',
            dataRequired: [],
            usage: 'Best for vitamin biochemistry and lipid absorption',
            examples: ['Fat-soluble vitamins', 'Vitamin A', 'Vitamin D', 'Vitamin E', 'Vitamin K', 'Chylomicron'],
            defaultOptions: {
                title: 'Fat-Soluble Vitamin Absorption',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'arachidonicAcidCascadeDiagram': {
            name: 'Arachidonic Acid Cascade',
            category: 'Biochemistry',
            description: 'Arachidonic acid release and cascade through COX (prostaglandins, thromboxanes) and LOX (leukotrienes) pathways',
            dataRequired: [],
            usage: 'Best for eicosanoid biochemistry and anti-inflammatory pharmacology',
            examples: ['Arachidonic acid', 'COX', 'Prostaglandins', 'Thromboxanes', 'Leukotrienes', 'NSAIDs'],
            defaultOptions: {
                title: 'Arachidonic Acid Cascade',
                showLabels: true,
                width: 950,
                height: 750,
                backgroundColor: '#ffffff'
            }
        },

        'betaOxidationPathwayDiagram': {
            name: 'Beta-Oxidation Pathway',
            category: 'Biochemistry',
            description: 'Beta-oxidation spiral of fatty acid catabolism in the mitochondrial matrix yielding acetyl-CoA, FADH₂, and NADH',
            dataRequired: [],
            usage: 'Best for lipid metabolism and fatty acid catabolism teaching',
            examples: ['Beta-oxidation', 'Fatty acid oxidation', 'Acetyl-CoA', 'Mitochondria', 'FADH2', 'NADH'],
            defaultOptions: {
                title: 'Beta-Oxidation Pathway',
                showLabels: true,
                width: 900,
                height: 750,
                backgroundColor: '#ffffff'
            }
        },

        'fluidMosaicModelDiagram': {
            name: 'Fluid Mosaic Model',
            category: 'Biochemistry',
            description: 'Singer-Nicolson fluid mosaic model of the cell membrane showing phospholipid bilayer, integral proteins, peripheral proteins, cholesterol, and glycocalyx',
            dataRequired: [],
            usage: 'Best for cell membrane biology and biochemistry',
            examples: ['Fluid mosaic model', 'Cell membrane', 'Integral protein', 'Peripheral protein', 'Cholesterol'],
            defaultOptions: {
                title: 'Fluid Mosaic Model',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'emulsionTestResultsDiagram': {
            name: 'Emulsion Test Results Diagram',
            category: 'Biochemistry',
            description: 'Emulsion (ethanol) food test for lipids with positive (milky white emulsion) and negative result comparison',
            dataRequired: [],
            usage: 'Best for lipid biochemical testing and practical education',
            examples: ['Emulsion test', 'Ethanol test', 'Lipid test', 'Food tests', 'Practical'],
            defaultOptions: {
                title: 'Emulsion Test Results',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'atherosclerosisPlaqueDiagram': {
            name: 'Atherosclerosis Plaque Diagram',
            category: 'Biochemistry',
            description: 'Lipid-driven atherosclerotic plaque formation showing LDL oxidation, foam cell formation, and plaque structure',
            dataRequired: [],
            usage: 'Best for lipid pathology and cardiovascular disease biochemistry',
            examples: ['Atherosclerosis', 'LDL', 'Foam cells', 'Plaque', 'Oxidised LDL'],
            defaultOptions: {
                title: 'Atherosclerosis Plaque: Lipid Pathology',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 19. BIOCHEMISTRY – PROTEINS =====
        'aminoAcidGeneralStructureDiagram': {
            name: 'Amino Acid General Structure',
            category: 'Biochemistry',
            description: 'General amino acid structure with central carbon, amino group, carboxyl group, hydrogen, and R-group side chain',
            dataRequired: [],
            usage: 'Best for protein biochemistry introduction',
            examples: ['Amino acid', 'R-group', 'Amino group', 'Carboxyl group', 'Zwitterion'],
            defaultOptions: {
                title: 'Amino Acid General Structure',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'peptideBondCondensationDiagram': {
            name: 'Peptide Bond Condensation',
            category: 'Biochemistry',
            description: 'Peptide bond formation between amino acids by condensation reaction with water release and polypeptide chain formation',
            dataRequired: [],
            usage: 'Best for protein chemistry and polypeptide synthesis',
            examples: ['Peptide bond', 'Condensation', 'Polypeptide', 'Amino acids', 'Water release'],
            defaultOptions: {
                title: 'Peptide Bond Condensation',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fourLevelsProteinStructureDiagram': {
            name: 'Four Levels of Protein Structure',
            category: 'Biochemistry',
            description: 'Primary, secondary, tertiary, and quaternary protein structure levels with stabilising bonds at each level',
            dataRequired: [],
            usage: 'Best for protein biochemistry and structural biology',
            examples: ['Protein structure', 'Primary', 'Secondary', 'Tertiary', 'Quaternary', 'Alpha helix', 'Beta sheet'],
            defaultOptions: {
                title: 'Four Levels of Protein Structure',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'proteinFoldingEnergyLandscapeDiagram': {
            name: 'Protein Folding Energy Landscape',
            category: 'Biochemistry',
            description: 'Funnel-shaped energy landscape of protein folding showing entropy loss and energy minima toward the native state',
            dataRequired: [],
            usage: 'Best for protein folding, chaperones, and misfolding diseases',
            examples: ['Protein folding', 'Energy landscape', 'Native state', 'Chaperone', 'Misfolding'],
            defaultOptions: {
                title: 'Protein Folding Energy Landscape',
                showLabels: true,
                width: 850,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'collagenTripleHelixDiagram': {
            name: 'Collagen Triple Helix',
            category: 'Biochemistry',
            description: 'Collagen triple helix structure with Gly-X-Y repeat, procollagen assembly, and fibril organisation',
            dataRequired: [],
            usage: 'Best for structural proteins, connective tissue, and collagen biochemistry',
            examples: ['Collagen', 'Triple helix', 'Glycine', 'Proline', 'Hydroxyproline', 'Fibril'],
            defaultOptions: {
                title: 'Collagen Triple Helix',
                showLabels: true,
                width: 850,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'haemoglobinOxygenDissociationCurve': {
            name: 'Haemoglobin Oxygen Dissociation Curve',
            category: 'Biochemistry',
            description: 'Sigmoidal haemoglobin oxygen dissociation curve showing cooperative binding and P50 value',
            dataRequired: [],
            usage: 'Best for haemoglobin biochemistry and cooperative binding',
            examples: ['Haemoglobin', 'Oxygen dissociation', 'Cooperativity', 'P50', 'Sigmoidal'],
            defaultOptions: {
                title: 'Haemoglobin Oxygen Dissociation Curve',
                showLabels: true,
                width: 850,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'immunoglobulinYShapeDiagram': {
            name: 'Immunoglobulin Y-Shape Diagram',
            category: 'Biochemistry',
            description: 'Y-shaped immunoglobulin structure with Fab and Fc regions, heavy and light chains, disulfide bonds, and antigen-binding sites',
            dataRequired: [],
            usage: 'Best for antibody structure and immunology biochemistry',
            examples: ['Immunoglobulin', 'Antibody', 'Fab region', 'Fc region', 'Disulfide bonds'],
            defaultOptions: {
                title: 'Immunoglobulin Y-Shape Structure',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'integralPeripheralProteinDiagram': {
            name: 'Integral & Peripheral Membrane Protein Diagram',
            category: 'Biochemistry',
            description: 'Classification and location of integral (transmembrane) and peripheral membrane proteins in the lipid bilayer',
            dataRequired: [],
            usage: 'Best for membrane protein biochemistry and cell biology',
            examples: ['Integral protein', 'Peripheral protein', 'Transmembrane', 'Membrane protein', 'Lipid bilayer'],
            defaultOptions: {
                title: 'Integral & Peripheral Membrane Proteins',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'proteinFunctionClassificationChart': {
            name: 'Protein Function Classification Chart',
            category: 'Biochemistry',
            description: 'Classification chart of proteins by function: structural, enzymatic, transport, hormonal, immunological, contractile, and receptor',
            dataRequired: [],
            usage: 'Best for protein function overview and biochemistry',
            examples: ['Protein function', 'Enzyme', 'Transport protein', 'Structural protein', 'Receptor protein'],
            defaultOptions: {
                title: 'Protein Function Classification Chart',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'biuretTestColourResultsDiagram': {
            name: 'Biuret Test Colour Results Diagram',
            category: 'Biochemistry',
            description: 'Biuret food test for proteins with positive (purple/violet) and negative (blue) colour results interpretation',
            dataRequired: [],
            usage: 'Best for protein biochemical testing and practical education',
            examples: ['Biuret test', 'Protein test', 'Food tests', 'Colour change', 'Practical'],
            defaultOptions: {
                title: 'Biuret Test Colour Results',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'sickleCellHaemoglobinPolymerisation': {
            name: 'Sickle Cell Haemoglobin Polymerisation',
            category: 'Biochemistry',
            description: 'HbS point mutation (Glu→Val), deoxygenation-triggered polymerisation, and sickle cell morphology consequences',
            dataRequired: [],
            usage: 'Best for haemoglobin pathology and protein misfolding teaching',
            examples: ['Sickle cell', 'HbS', 'Polymerisation', 'Glu to Val', 'Sickling'],
            defaultOptions: {
                title: 'Sickle Cell Haemoglobin Polymerisation',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 20. BIOCHEMISTRY – NUCLEIC ACIDS & GENETICS =====
        'nucleotideStructureDiagram': {
            name: 'Nucleotide Structure',
            category: 'Biochemistry',
            description: 'Nucleotide structure showing phosphate group, pentose sugar, and nitrogenous base with purine/pyrimidine examples',
            dataRequired: [],
            usage: 'Best for nucleic acid biochemistry introduction',
            examples: ['Nucleotide', 'Phosphate', 'Pentose sugar', 'Nitrogenous base', 'Purine', 'Pyrimidine'],
            defaultOptions: {
                title: 'Nucleotide Structure',
                showLabels: true,
                width: 850,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'dnaStructure': {
            name: 'DNA Double Helix Structure',
            category: 'Biochemistry',
            description: 'DNA double helix with complementary base pairing, antiparallel strands, major and minor grooves, and dimensions',
            dataRequired: [],
            usage: 'Best for DNA biochemistry and molecular biology',
            examples: ['DNA', 'Double helix', 'Base pairing', 'Antiparallel', 'Watson Crick'],
            defaultOptions: {
                title: 'DNA Double Helix Structure',
                showLabels: true,
                width: 750,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'rnaStructure': {
            name: 'RNA Structure & Types',
            category: 'Biochemistry',
            description: 'Comparison of mRNA, tRNA, and rRNA structures and functions with RNA structural features versus DNA',
            dataRequired: [],
            usage: 'Best for RNA biochemistry and molecular biology',
            examples: ['RNA', 'mRNA', 'tRNA', 'rRNA', 'Single-stranded', 'Uracil'],
            defaultOptions: {
                title: 'RNA Structure & Types',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'dnaReplication': {
            name: 'DNA Replication',
            category: 'Biochemistry',
            description: 'Semi-conservative DNA replication showing helicase unwinding, primase, DNA polymerase, leading/lagging strand synthesis, and Okazaki fragments',
            dataRequired: [],
            usage: 'Best for DNA replication and molecular biology teaching',
            examples: ['DNA replication', 'Helicase', 'DNA polymerase', 'Leading strand', 'Okazaki fragments'],
            defaultOptions: {
                title: 'DNA Replication',
                showLabels: true,
                width: 950,
                height: 750,
                backgroundColor: '#ffffff'
            }
        },

        'transcription': {
            name: 'Transcription',
            category: 'Biochemistry',
            description: 'DNA transcription to pre-mRNA by RNA polymerase with promoter recognition, elongation, and termination steps',
            dataRequired: [],
            usage: 'Best for gene expression and transcription teaching',
            examples: ['Transcription', 'RNA polymerase', 'Promoter', 'mRNA', 'Gene expression'],
            defaultOptions: {
                title: 'Transcription',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'codonChart': {
            name: 'Codon Chart',
            category: 'Biochemistry',
            description: 'Standard genetic code codon chart mapping all 64 codons to amino acids and stop codons',
            dataRequired: [],
            usage: 'Best for genetic code and translation teaching',
            examples: ['Codon chart', 'Genetic code', 'Amino acids', 'Stop codon', 'Start codon'],
            defaultOptions: {
                title: 'Codon Chart: The Genetic Code',
                showLabels: true,
                width: 900,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'translation': {
            name: 'Translation',
            category: 'Biochemistry',
            description: 'mRNA translation at the ribosome showing A, P, E sites, tRNA anticodon matching, and polypeptide elongation',
            dataRequired: [],
            usage: 'Best for translation and protein synthesis teaching',
            examples: ['Translation', 'Ribosome', 'tRNA', 'Codon', 'Polypeptide', 'A P E sites'],
            defaultOptions: {
                title: 'Translation',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'chromosomes': {
            name: 'Chromosome Structure',
            category: 'Biochemistry',
            description: 'Chromosome structure showing centromere, telomeres, sister chromatids, and levels of DNA packaging from double helix to metaphase chromosome',
            dataRequired: [],
            usage: 'Best for chromosome biology and chromatin organisation',
            examples: ['Chromosome', 'Centromere', 'Telomere', 'Chromatid', 'DNA packaging'],
            defaultOptions: {
                title: 'Chromosome Structure',
                showLabels: true,
                width: 850,
                height: 750,
                backgroundColor: '#ffffff'
            }
        },

        'mutationTypesClassificationDiagram': {
            name: 'Mutation Types Classification',
            category: 'Biochemistry',
            description: 'Classification of gene mutations by type (substitution, insertion, deletion, frameshift) and effect on protein sequence',
            dataRequired: [],
            usage: 'Best for genetics and molecular pathology teaching',
            examples: ['Mutations', 'Substitution', 'Frameshift', 'Insertion', 'Deletion', 'Nonsense mutation'],
            defaultOptions: {
                title: 'Mutation Types Classification',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 21. BIOENERGETICS & METABOLISM =====
        'gibbsFreeEnergyReactionDiagram': {
            name: 'Gibbs Free Energy Reaction Diagram',
            category: 'Bioenergetics',
            description: 'Gibbs free energy reaction coordinate diagram showing exergonic and endergonic reactions with activation energy and ΔG',
            dataRequired: [],
            usage: 'Best for thermodynamics and bioenergetics teaching',
            examples: ['Gibbs free energy', 'ΔG', 'Exergonic', 'Endergonic', 'Activation energy'],
            defaultOptions: {
                title: 'Gibbs Free Energy Reaction Diagram',
                showLabels: true,
                width: 850,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'atpStructureHydrolysisDiagram': {
            name: 'ATP Structure & Hydrolysis',
            category: 'Bioenergetics',
            description: 'ATP molecular structure with three phosphate groups and adenosine, and hydrolysis to ADP + Pi releasing energy',
            dataRequired: [],
            usage: 'Best for ATP and energy currency biochemistry',
            examples: ['ATP', 'ADP', 'Phosphate', 'Adenosine', 'Hydrolysis', 'Energy currency'],
            defaultOptions: {
                title: 'ATP Structure & Hydrolysis',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'cellularRespirationOverviewDiagram': {
            name: 'Cellular Respiration Overview',
            category: 'Bioenergetics',
            description: 'Overview of cellular respiration stages: glycolysis, pyruvate decarboxylation, Krebs cycle, and oxidative phosphorylation with ATP yield',
            dataRequired: [],
            usage: 'Best for cellular respiration and metabolism overview',
            examples: ['Cellular respiration', 'Glycolysis', 'Krebs cycle', 'ATP yield', 'Mitochondria'],
            defaultOptions: {
                title: 'Cellular Respiration Overview',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'glycolysisPathwayDiagram': {
            name: 'Glycolysis Pathway',
            category: 'Bioenergetics',
            description: 'Ten-step glycolysis pathway from glucose to pyruvate with enzymes, substrates, ATP investment and yield, and NADH production',
            dataRequired: [],
            usage: 'Best for glycolysis and carbohydrate metabolism teaching',
            examples: ['Glycolysis', 'Glucose', 'Pyruvate', 'Phosphofructokinase', 'ATP yield', 'NADH'],
            defaultOptions: {
                title: 'Glycolysis Pathway',
                showLabels: true,
                width: 900,
                height: 950,
                backgroundColor: '#ffffff'
            }
        },

        'pyruvateDehydrogenaseComplexDiagram': {
            name: 'Pyruvate Dehydrogenase Complex',
            category: 'Bioenergetics',
            description: 'Pyruvate dehydrogenase complex converting pyruvate to acetyl-CoA with CO₂ release, NADH production, and regulation by PDK/PDH',
            dataRequired: [],
            usage: 'Best for metabolic bridge and pyruvate metabolism teaching',
            examples: ['Pyruvate dehydrogenase', 'Acetyl-CoA', 'PDH complex', 'CO2', 'NADH', 'CoA'],
            defaultOptions: {
                title: 'Pyruvate Dehydrogenase Complex',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'krebsCycleCircularDiagram': {
            name: 'Krebs Cycle Circular Diagram',
            category: 'Bioenergetics',
            description: 'Circular Krebs (TCA) cycle diagram with eight steps, intermediates, enzymes, and NADH/FADH₂/ATP/CO₂ yield per turn',
            dataRequired: [],
            usage: 'Best for TCA cycle and cellular respiration teaching',
            examples: ['Krebs cycle', 'TCA cycle', 'Citric acid cycle', 'Acetyl-CoA', 'NADH', 'FADH2'],
            defaultOptions: {
                title: 'Krebs Cycle (TCA Cycle)',
                showLabels: true,
                width: 900,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'electronTransportChainDiagram': {
            name: 'Electron Transport Chain',
            category: 'Bioenergetics',
            description: 'Inner mitochondrial membrane ETC showing Complexes I-IV, electron flow, proton pumping, and ATP synthase (Complex V)',
            dataRequired: [],
            usage: 'Best for oxidative phosphorylation and bioenergetics teaching',
            examples: ['Electron transport chain', 'Complex I', 'ATP synthase', 'Proton gradient', 'NADH', 'Oxygen'],
            defaultOptions: {
                title: 'Electron Transport Chain',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'lightDependentCalvinCycleDiagram': {
            name: 'Light-Dependent Reactions & Calvin Cycle',
            category: 'Bioenergetics',
            description: 'Thylakoid light-dependent reactions (photosystems I and II, ATP, NADPH) and stroma Calvin cycle (carbon fixation, G3P)',
            dataRequired: [],
            usage: 'Best for photosynthesis and plant biochemistry teaching',
            examples: ['Light reactions', 'Calvin cycle', 'Photosystem', 'NADPH', 'ATP', 'Carbon fixation'],
            defaultOptions: {
                title: 'Light-Dependent Reactions & Calvin Cycle',
                showLabels: true,
                width: 1000,
                height: 750,
                backgroundColor: '#ffffff'
            }
        },

        'metabolicPathwayIntegrationDiagram': {
            name: 'Metabolic Pathway Integration',
            category: 'Bioenergetics',
            description: 'Integration map of carbohydrate, lipid, and protein metabolism converging on central metabolic intermediates and the TCA cycle',
            dataRequired: [],
            usage: 'Best for metabolic integration and biochemistry synthesis',
            examples: ['Metabolic integration', 'Carbohydrate', 'Lipid', 'Protein', 'TCA cycle', 'Metabolism'],
            defaultOptions: {
                title: 'Metabolic Pathway Integration',
                showLabels: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'warburgEffectCancerMetabolismDiagram': {
            name: 'Warburg Effect & Cancer Metabolism',
            category: 'Bioenergetics',
            description: 'Warburg effect showing aerobic glycolysis preference in cancer cells versus oxidative phosphorylation in normal cells',
            dataRequired: [],
            usage: 'Best for cancer metabolism and tumour biology teaching',
            examples: ['Warburg effect', 'Aerobic glycolysis', 'Cancer metabolism', 'Lactate', 'Tumour'],
            defaultOptions: {
                title: 'Warburg Effect & Cancer Metabolism',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'respiratoryQuotientCalculationDiagram': {
            name: 'Respiratory Quotient Calculation',
            category: 'Bioenergetics',
            description: 'Respiratory quotient (RQ = CO₂ produced / O₂ consumed) values for carbohydrates, fats, and proteins with calculation method',
            dataRequired: [],
            usage: 'Best for exercise physiology and indirect calorimetry teaching',
            examples: ['Respiratory quotient', 'RQ', 'CO2', 'O2', 'Carbohydrate', 'Fat oxidation'],
            defaultOptions: {
                title: 'Respiratory Quotient Calculation',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 22. ENZYMOLOGY =====
        'activationEnergyReactionCoordinateDiagram': {
            name: 'Activation Energy Reaction Coordinate Diagram',
            category: 'Enzymology',
            description: 'Reaction coordinate diagram comparing uncatalysed and enzyme-catalysed activation energy (Ea) for a reaction',
            dataRequired: [],
            usage: 'Best for enzyme kinetics and catalysis teaching',
            examples: ['Activation energy', 'Enzyme catalysis', 'Reaction coordinate', 'Transition state', 'Ea'],
            defaultOptions: {
                title: 'Activation Energy: Reaction Coordinate Diagram',
                showLabels: true,
                width: 850,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'activeSiteInducedFitDiagram': {
            name: 'Active Site & Induced Fit Diagram',
            category: 'Enzymology',
            description: 'Enzyme active site and induced fit model showing conformational change upon substrate binding versus lock-and-key model',
            dataRequired: [],
            usage: 'Best for enzyme-substrate interaction and catalysis teaching',
            examples: ['Active site', 'Induced fit', 'Lock and key', 'Enzyme-substrate complex', 'Conformational change'],
            defaultOptions: {
                title: 'Active Site & Induced Fit Model',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'stereospecificitySubstrateDiagram': {
            name: 'Stereospecificity & Substrate Diagram',
            category: 'Enzymology',
            description: 'Enzyme stereospecificity showing differential binding of enantiomers (D vs L) and substrate structural specificity',
            dataRequired: [],
            usage: 'Best for enzyme specificity and stereochemistry teaching',
            examples: ['Stereospecificity', 'Enantiomers', 'D-amino acid', 'L-amino acid', 'Enzyme specificity'],
            defaultOptions: {
                title: 'Enzyme Stereospecificity & Substrate',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'michaelisMentenLineweaverBurkDiagram': {
            name: 'Michaelis-Menten & Lineweaver-Burk Diagram',
            category: 'Enzymology',
            description: 'Michaelis-Menten saturation curve (Km, Vmax) and Lineweaver-Burk double reciprocal plot for enzyme kinetics',
            dataRequired: [],
            usage: 'Best for enzyme kinetics and Km/Vmax determination teaching',
            examples: ['Michaelis-Menten', 'Lineweaver-Burk', 'Km', 'Vmax', 'Enzyme kinetics'],
            defaultOptions: {
                title: 'Michaelis-Menten & Lineweaver-Burk',
                showLabels: true,
                width: 950,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'serineProteaseCatalyticTriadDiagram': {
            name: 'Serine Protease Catalytic Triad',
            category: 'Enzymology',
            description: 'Catalytic triad (Ser, His, Asp) of serine proteases with the charge relay mechanism and tetrahedral intermediate',
            dataRequired: [],
            usage: 'Best for enzyme mechanism and serine protease teaching',
            examples: ['Serine protease', 'Catalytic triad', 'Serine', 'Histidine', 'Aspartate', 'Charge relay'],
            defaultOptions: {
                title: 'Serine Protease Catalytic Triad',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'inhibitionTypesLineweaverBurkComparison': {
            name: 'Enzyme Inhibition Types: Lineweaver-Burk Comparison',
            category: 'Enzymology',
            description: 'Lineweaver-Burk plots comparing competitive, non-competitive, and uncompetitive enzyme inhibition patterns',
            dataRequired: [],
            usage: 'Best for enzyme inhibition and pharmacology teaching',
            examples: ['Competitive inhibition', 'Non-competitive', 'Uncompetitive', 'Lineweaver-Burk', 'Inhibition'],
            defaultOptions: {
                title: 'Enzyme Inhibition Types: Lineweaver-Burk Comparison',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'allostericSigmoidalCurveDiagram': {
            name: 'Allosteric Enzyme Sigmoidal Curve',
            category: 'Enzymology',
            description: 'Sigmoidal velocity-substrate curve of allosteric enzymes compared to Michaelis-Menten hyperbolic curve with activator/inhibitor shifts',
            dataRequired: [],
            usage: 'Best for allosteric regulation and enzyme cooperativity teaching',
            examples: ['Allosteric', 'Sigmoidal', 'Cooperativity', 'Activator', 'Inhibitor', 'Hill equation'],
            defaultOptions: {
                title: 'Allosteric Enzyme Sigmoidal Curve',
                showLabels: true,
                width: 850,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'temperaturePHOptimumCurveDiagram': {
            name: 'Temperature & pH Optimum Curve',
            category: 'Enzymology',
            description: 'Enzyme activity curves showing optimal temperature and pH with denaturation above optimum and examples for different enzymes',
            dataRequired: [],
            usage: 'Best for enzyme activity and denaturation teaching',
            examples: ['Temperature optimum', 'pH optimum', 'Enzyme denaturation', 'Enzyme activity', 'Pepsin', 'Trypsin'],
            defaultOptions: {
                title: 'Enzyme Temperature & pH Optimum Curves',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'digestiveEnzymeGITractDiagram': {
            name: 'Digestive Enzymes Along the GI Tract',
            category: 'Enzymology',
            description: 'Summary of digestive enzymes (amylase, pepsin, trypsin, lipase, lactase) location and substrate along the GI tract',
            dataRequired: [],
            usage: 'Best for digestive enzymology and GI physiology teaching',
            examples: ['Digestive enzymes', 'Amylase', 'Pepsin', 'Trypsin', 'Lipase', 'GI tract'],
            defaultOptions: {
                title: 'Digestive Enzymes Along the GI Tract',
                showLabels: true,
                width: 950,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'cardiacEnzymeBiomarkerTimingChart': {
            name: 'Cardiac Enzyme Biomarker Timing Chart',
            category: 'Enzymology',
            description: 'Time-course chart of cardiac enzyme biomarkers (troponin I, troponin T, CK-MB, myoglobin) following myocardial infarction',
            dataRequired: [],
            usage: 'Best for cardiac biomarkers and MI diagnosis teaching',
            examples: ['Troponin', 'CK-MB', 'Myoglobin', 'Cardiac biomarkers', 'Myocardial infarction'],
            defaultOptions: {
                title: 'Cardiac Enzyme Biomarker Timing Chart',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },

        'immobilisedEnzymeBiosensorDiagram': {
            name: 'Immobilised Enzyme & Biosensor Diagram',
            category: 'Enzymology',
            description: 'Immobilised enzyme technology and biosensor design (e.g. glucose oxidase biosensor) with transducer and signal output',
            dataRequired: [],
            usage: 'Best for biotechnology and applied enzymology teaching',
            examples: ['Immobilised enzyme', 'Biosensor', 'Glucose sensor', 'Transducer', 'Biotechnology'],
            defaultOptions: {
                title: 'Immobilised Enzyme & Biosensor',
                showLabels: true,
                width: 900,
                height: 650,
                backgroundColor: '#ffffff'
            }
        },





// ===== AUTOIMMUNITY & HYPERSENSITIVITY =====
'autoantibodySpecificityDiseaseMappingReferenceTable': {
    name: 'Autoantibody Specificity Disease Mapping Reference Table',
    category: 'Autoimmunity',
    description: 'Reference table mapping autoantibodies to their target antigens and associated diseases',
    dataRequired: [],
    usage: 'Best for autoimmune disease diagnosis and serology education',
    examples: ['Autoimmunity', 'Serology', 'Rheumatology'],
    defaultOptions: {
        title: 'Autoantibody Specificity & Disease Mapping',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'autoimmuneDiagnosticAlgorithmSerologyBiopsyDiagram': {
    name: 'Autoimmune Diagnostic Algorithm: Serology & Biopsy',
    category: 'Autoimmunity',
    description: 'Step-by-step diagnostic algorithm integrating serological and biopsy findings for autoimmune disease',
    dataRequired: [],
    usage: 'Best for clinical immunology and diagnostic pathways',
    examples: ['Diagnostics', 'Serology', 'Biopsy', 'Autoimmunity'],
    defaultOptions: {
        title: 'Autoimmune Diagnostic Algorithm',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'biologicTargetsCytokinePathwayAutoimmunityDiagram': {
    name: 'Biologic Targets & Cytokine Pathways in Autoimmunity',
    category: 'Autoimmunity',
    description: 'Diagram of key cytokine pathways and their biologic drug targets in autoimmune diseases',
    dataRequired: [],
    usage: 'Best for pharmacology and immunotherapy education',
    examples: ['Biologics', 'Cytokines', 'TNF', 'IL-6', 'Autoimmunity'],
    defaultOptions: {
        title: 'Biologic Targets & Cytokine Pathways in Autoimmunity',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'hlaB27SpondyloarthropathySpectrumDiagram': {
    name: 'HLA-B27 & Spondyloarthropathy Spectrum',
    category: 'Autoimmunity',
    description: 'Spectrum of HLA-B27-associated spondyloarthropathies and their clinical relationships',
    dataRequired: [],
    usage: 'Best for rheumatology and immunogenetics education',
    examples: ['HLA-B27', 'Spondyloarthropathy', 'Ankylosing spondylitis'],
    defaultOptions: {
        title: 'HLA-B27 & Spondyloarthropathy Spectrum',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'mixedConnectiveTissueOverlapVennDiagram': {
    name: 'Mixed Connective Tissue & Overlap Syndromes Venn Diagram',
    category: 'Autoimmunity',
    description: 'Venn diagram illustrating overlapping features of mixed connective tissue disease and related syndromes',
    dataRequired: [],
    usage: 'Best for rheumatology overlap syndrome education',
    examples: ['MCTD', 'Overlap syndrome', 'Connective tissue disease'],
    defaultOptions: {
        title: 'Mixed Connective Tissue & Overlap Syndromes',
        type: 'generic',
        showLabels: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'gellCoombsTypeIIIIIIVHypersensitivityOverviewDiagram': {
    name: 'Gell & Coombs Type I–IV Hypersensitivity Overview',
    category: 'Hypersensitivity',
    description: 'Overview diagram of the four Gell and Coombs hypersensitivity types with mechanisms and examples',
    dataRequired: [],
    usage: 'Best for immunology hypersensitivity education',
    examples: ['Hypersensitivity', 'Type I-IV', 'Allergy', 'Immunology'],
    defaultOptions: {
        title: 'Gell & Coombs Hypersensitivity Types I–IV',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'igeFcepsilonRIMastCellDegranulationCrossLinkingDiagram': {
    name: 'IgE / FcεRI Mast Cell Degranulation & Cross-Linking',
    category: 'Hypersensitivity',
    description: 'Molecular diagram of IgE binding to FcεRI, antigen cross-linking, and mast cell degranulation pathway',
    dataRequired: [],
    usage: 'Best for allergy and Type I hypersensitivity education',
    examples: ['IgE', 'Mast cell', 'Degranulation', 'FcεRI'],
    defaultOptions: {
        title: 'IgE/FcεRI Mast Cell Degranulation',
        type: 'generic',
        showLabels: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'biphasicAllergyEarlyLatePhaseTimeCourseDiagram': {
    name: 'Biphasic Allergy: Early & Late Phase Time Course',
    category: 'Hypersensitivity',
    description: 'Time course diagram of early and late phase allergic responses with mediator profiles',
    dataRequired: [],
    usage: 'Best for allergy and asthma pathophysiology education',
    examples: ['Biphasic response', 'Early phase', 'Late phase', 'Allergy'],
    defaultOptions: {
        title: 'Biphasic Allergic Response: Early & Late Phase',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'anaphylaxisSystemicMediatorOrganEffectsDiagram': {
    name: 'Anaphylaxis: Systemic Mediator & Organ Effects',
    category: 'Hypersensitivity',
    description: 'Diagram of anaphylaxis mediators and their systemic effects across organ systems',
    dataRequired: [],
    usage: 'Best for emergency medicine and allergy education',
    examples: ['Anaphylaxis', 'Systemic effects', 'Mediators', 'Shock'],
    defaultOptions: {
        title: 'Anaphylaxis: Systemic Mediators & Organ Effects',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'nasalMucosaMastCellEosinophilInfiltrationDiagram': {
    name: 'Nasal Mucosa Mast Cell & Eosinophil Infiltration',
    category: 'Hypersensitivity',
    description: 'Histological diagram of nasal mucosa showing mast cell and eosinophil infiltration in allergic rhinitis',
    dataRequired: [],
    usage: 'Best for allergic rhinitis and ENT pathology education',
    examples: ['Allergic rhinitis', 'Nasal mucosa', 'Eosinophils', 'Mast cells'],
    defaultOptions: {
        title: 'Nasal Mucosa Mast Cell & Eosinophil Infiltration',
        type: 'generic',
        showLabels: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'airwayRemodelingEosinophilicInflammationSpiromteryDiagram': {
    name: 'Airway Remodeling, Eosinophilic Inflammation & Spirometry',
    category: 'Hypersensitivity',
    description: 'Diagram linking airway remodeling and eosinophilic inflammation to spirometric changes in asthma',
    dataRequired: [],
    usage: 'Best for asthma pathophysiology and pulmonology education',
    examples: ['Asthma', 'Airway remodeling', 'Spirometry', 'Eosinophils'],
    defaultOptions: {
        title: 'Airway Remodeling & Eosinophilic Inflammation',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'igeMediaatedVsNonIgeFoodAllergyClassificationDiagram': {
    name: 'IgE-Mediated vs Non-IgE Food Allergy Classification',
    category: 'Hypersensitivity',
    description: 'Classification diagram distinguishing IgE-mediated and non-IgE-mediated food allergy mechanisms and presentations',
    dataRequired: [],
    usage: 'Best for food allergy and gastroenterology education',
    examples: ['Food allergy', 'IgE-mediated', 'Non-IgE', 'Classification'],
    defaultOptions: {
        title: 'IgE-Mediated vs Non-IgE Food Allergy',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'filaggrinBarrierDefectTh2ItchScratchCycleDiagram': {
    name: 'Filaggrin Barrier Defect, Th2 Skew & Itch-Scratch Cycle',
    category: 'Hypersensitivity',
    description: 'Diagram showing how filaggrin mutations drive barrier defect, Th2 immune skewing and the itch-scratch cycle in atopic dermatitis',
    dataRequired: [],
    usage: 'Best for atopic dermatitis and dermatology education',
    examples: ['Filaggrin', 'Atopic dermatitis', 'Th2', 'Itch-scratch cycle'],
    defaultOptions: {
        title: 'Filaggrin Barrier Defect & Itch-Scratch Cycle',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'skinPrickTestSptWhealFlareReadingDiagram': {
    name: 'Skin Prick Test (SPT): Wheal & Flare Reading',
    category: 'Hypersensitivity',
    description: 'Diagram illustrating skin prick test technique, wheal and flare interpretation, and positive/negative controls',
    dataRequired: [],
    usage: 'Best for allergy testing and clinical skills education',
    examples: ['Skin prick test', 'SPT', 'Wheal', 'Flare', 'Allergy testing'],
    defaultOptions: {
        title: 'Skin Prick Test: Wheal & Flare Reading',
        type: 'generic',
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'immunotherapyIgG4ShiftTregInductionMechanismDiagram': {
    name: 'Immunotherapy: IgG4 Shift & Treg Induction Mechanism',
    category: 'Hypersensitivity',
    description: 'Mechanism diagram of allergen immunotherapy showing IgE-to-IgG4 class switching and regulatory T cell induction',
    dataRequired: [],
    usage: 'Best for allergen immunotherapy and tolerance education',
    examples: ['Immunotherapy', 'IgG4', 'Treg', 'Desensitisation', 'Tolerance'],
    defaultOptions: {
        title: 'Immunotherapy: IgG4 Shift & Treg Induction',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== INFECTION & MICROBIOLOGY =====
'pathogenClassificationBacteriaVirusFungiParasitePrionDiagram': {
    name: 'Pathogen Classification: Bacteria, Virus, Fungi, Parasite, Prion',
    category: 'Infection & Microbiology',
    description: 'Comparative classification chart of major pathogen types with structural and biological features',
    dataRequired: [],
    usage: 'Best for microbiology and infectious disease overview',
    examples: ['Pathogens', 'Bacteria', 'Virus', 'Fungi', 'Parasite', 'Prion'],
    defaultOptions: {
        title: 'Pathogen Classification Overview',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'transmissionRoutesAirborneDropletContactFaecalOralVectorDiagram': {
    name: 'Transmission Routes: Airborne, Droplet, Contact, Faecal-Oral, Vector',
    category: 'Infection & Microbiology',
    description: 'Diagram of major infectious disease transmission routes with examples for each mode',
    dataRequired: [],
    usage: 'Best for infection control and public health education',
    examples: ['Transmission', 'Airborne', 'Droplet', 'Faecal-oral', 'Vector'],
    defaultOptions: {
        title: 'Infection Transmission Routes',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'virulenceFactorsAdhesinsInvasinsExotoxinEndotoxinDiagram': {
    name: 'Virulence Factors: Adhesins, Invasins, Exotoxin & Endotoxin',
    category: 'Infection & Microbiology',
    description: 'Comparative diagram of bacterial virulence factors including adhesins, invasins, exotoxins, and endotoxins',
    dataRequired: [],
    usage: 'Best for bacteriology and pathogenesis education',
    examples: ['Virulence factors', 'Adhesins', 'Exotoxin', 'Endotoxin', 'Pathogenesis'],
    defaultOptions: {
        title: 'Bacterial Virulence Factors',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'innateToAdaptiveImmuneResponseTimelineDiagram': {
    name: 'Innate to Adaptive Immune Response Timeline',
    category: 'Infection & Microbiology',
    description: 'Timeline diagram showing the transition from innate to adaptive immune responses during infection',
    dataRequired: [],
    usage: 'Best for immunology and infection response education',
    examples: ['Innate immunity', 'Adaptive immunity', 'Timeline', 'Infection'],
    defaultOptions: {
        title: 'Innate to Adaptive Immune Response Timeline',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'keyBacterialPathogensMechanismClinicalFeaturesComparisonDiagram': {
    name: 'Key Bacterial Pathogens: Mechanism & Clinical Features Comparison',
    category: 'Infection & Microbiology',
    description: 'Comparative overview of key bacterial pathogens with their virulence mechanisms and clinical presentations',
    dataRequired: [],
    usage: 'Best for bacteriology and clinical microbiology education',
    examples: ['Bacterial pathogens', 'Clinical features', 'Mechanisms', 'Microbiology'],
    defaultOptions: {
        title: 'Key Bacterial Pathogens: Mechanism & Clinical Features',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'hivReplicationCycleReverseTranscriptaseIntegraseDiagram': {
    name: 'HIV Replication Cycle: Reverse Transcriptase & Integrase',
    category: 'Infection & Microbiology',
    description: 'Step-by-step diagram of the HIV replication cycle highlighting reverse transcriptase and integrase steps',
    dataRequired: [],
    usage: 'Best for virology and HIV/AIDS education',
    examples: ['HIV', 'Replication cycle', 'Reverse transcriptase', 'Integrase'],
    defaultOptions: {
        title: 'HIV Replication Cycle',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'antibioticClassesMolecularTargetsBacterialCellDiagram': {
    name: 'Antibiotic Classes & Molecular Targets on Bacterial Cell',
    category: 'Infection & Microbiology',
    description: 'Annotated bacterial cell diagram showing the molecular targets of major antibiotic classes',
    dataRequired: [],
    usage: 'Best for pharmacology and antibiotic mechanisms education',
    examples: ['Antibiotics', 'Molecular targets', 'Bacteriology', 'Pharmacology'],
    defaultOptions: {
        title: 'Antibiotic Classes & Molecular Targets',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'plasmodiumLifeCycleHumanMosquitoStagesDiagram': {
    name: 'Plasmodium Life Cycle: Human & Mosquito Stages',
    category: 'Infection & Microbiology',
    description: 'Complete life cycle of Plasmodium showing all stages in the human host and Anopheles mosquito',
    dataRequired: [],
    usage: 'Best for parasitology and malaria education',
    examples: ['Plasmodium', 'Malaria', 'Life cycle', 'Mosquito', 'Parasite'],
    defaultOptions: {
        title: 'Plasmodium Life Cycle',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'vaccineTypesLiveAttenuatedSubunitMRNAImmunogenicityComparisonDiagram': {
    name: 'Vaccine Types: Live Attenuated, Subunit & mRNA Immunogenicity Comparison',
    category: 'Infection & Microbiology',
    description: 'Comparative diagram of vaccine types including live attenuated, subunit, and mRNA vaccines with immunogenicity profiles',
    dataRequired: [],
    usage: 'Best for vaccinology and immunisation education',
    examples: ['Vaccines', 'mRNA', 'Live attenuated', 'Subunit', 'Immunogenicity'],
    defaultOptions: {
        title: 'Vaccine Types & Immunogenicity Comparison',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'who5MomentsHandHygienePrecautionTypesFlowchartDiagram': {
    name: 'WHO 5 Moments of Hand Hygiene & Precaution Types Flowchart',
    category: 'Infection & Microbiology',
    description: 'Flowchart combining the WHO 5 moments of hand hygiene with infection control precaution types',
    dataRequired: [],
    usage: 'Best for infection control and healthcare education',
    examples: ['Hand hygiene', 'WHO', 'Infection control', 'Precautions'],
    defaultOptions: {
        title: 'WHO 5 Moments Hand Hygiene & Precautions',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== IMMUNODEFICIENCY =====
'infectionPatternComponentDeficiencyDiagnosticFrameworkDiagram': {
    name: 'Infection Pattern & Component Deficiency Diagnostic Framework',
    category: 'Immunodeficiency',
    description: 'Diagnostic framework mapping infection patterns to underlying immune component deficiencies',
    dataRequired: [],
    usage: 'Best for clinical immunology and immunodeficiency diagnosis',
    examples: ['Immunodeficiency', 'Infection patterns', 'Diagnostics', 'Immune deficiency'],
    defaultOptions: {
        title: 'Infection Pattern & Immunodeficiency Diagnostic Framework',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'btkXlaVsCvidHyperIgMBCellDevelopmentBlockDiagram': {
    name: 'BTK/XLA vs CVID vs Hyper-IgM: B Cell Development Block',
    category: 'Immunodeficiency',
    description: 'Comparative diagram of B cell development blocks in XLA, CVID, and Hyper-IgM syndrome',
    dataRequired: [],
    usage: 'Best for primary antibody deficiency and B cell immunology education',
    examples: ['XLA', 'CVID', 'Hyper-IgM', 'B cell', 'BTK'],
    defaultOptions: {
        title: 'BTK/XLA vs CVID vs Hyper-IgM: B Cell Development',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'scidGenotypeImmunophenotypeGammaChainAdaRagIl7rDiagram': {
    name: 'SCID Genotype–Immunophenotype: γ-Chain, ADA, RAG, IL-7R',
    category: 'Immunodeficiency',
    description: 'Genotype-to-immunophenotype mapping for major SCID subtypes including γ-chain, ADA, RAG, and IL-7R deficiencies',
    dataRequired: [],
    usage: 'Best for SCID and primary immunodeficiency genetics education',
    examples: ['SCID', 'Genotype', 'Immunophenotype', 'ADA', 'RAG', 'IL-7R'],
    defaultOptions: {
        title: 'SCID Genotype–Immunophenotype Map',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'digeorgeCatch22ThymicAplasiaTCellDevelopmentDiagram': {
    name: 'DiGeorge / CATCH-22: Thymic Aplasia & T Cell Development',
    category: 'Immunodeficiency',
    description: 'Diagram of DiGeorge syndrome showing thymic aplasia and its impact on T cell development',
    dataRequired: [],
    usage: 'Best for DiGeorge syndrome and T cell immunodeficiency education',
    examples: ['DiGeorge', 'CATCH-22', 'Thymic aplasia', 'T cell development'],
    defaultOptions: {
        title: 'DiGeorge Syndrome: Thymic Aplasia & T Cell Development',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'cgdNadphOxidaseSubunitsRespiratoryBurstLadAdhesionCascadeDiagram': {
    name: 'CGD: NADPH Oxidase Subunits, Respiratory Burst & LAD Adhesion Cascade',
    category: 'Immunodeficiency',
    description: 'Diagram of chronic granulomatous disease NADPH oxidase subunits, respiratory burst failure, and LAD adhesion cascade',
    dataRequired: [],
    usage: 'Best for CGD, LAD, and phagocyte immunodeficiency education',
    examples: ['CGD', 'NADPH oxidase', 'Respiratory burst', 'LAD', 'Phagocyte'],
    defaultOptions: {
        title: 'CGD: NADPH Oxidase & Respiratory Burst',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'complementPathwayDeficiencyNeiSseriaTerminalComponentMacDiagram': {
    name: 'Complement Pathway Deficiency: Neisseria & Terminal Component MAC',
    category: 'Immunodeficiency',
    description: 'Diagram linking complement pathway deficiencies to Neisseria susceptibility and terminal MAC component defects',
    dataRequired: [],
    usage: 'Best for complement immunodeficiency and meningococcal disease education',
    examples: ['Complement', 'MAC', 'Neisseria', 'Terminal complement', 'Immunodeficiency'],
    defaultOptions: {
        title: 'Complement Deficiency: Neisseria & Terminal MAC',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'secondaryImmunodeficiencyCausesHivMalnutritionAspleniaDrugsDiagram': {
    name: 'Secondary Immunodeficiency Causes: HIV, Malnutrition, Asplenia & Drugs',
    category: 'Immunodeficiency',
    description: 'Overview diagram of secondary immunodeficiency causes including HIV, malnutrition, asplenia, and immunosuppressive drugs',
    dataRequired: [],
    usage: 'Best for secondary immunodeficiency and clinical immunology education',
    examples: ['Secondary immunodeficiency', 'HIV', 'Asplenia', 'Malnutrition', 'Immunosuppression'],
    defaultOptions: {
        title: 'Secondary Immunodeficiency Causes',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'hlhCytotoxicGranuleExocytosisDefectCytokineStormDiagram': {
    name: 'HLH: Cytotoxic Granule Exocytosis Defect & Cytokine Storm',
    category: 'Immunodeficiency',
    description: 'Diagram of haemophagocytic lymphohistiocytosis showing cytotoxic granule exocytosis defect leading to cytokine storm',
    dataRequired: [],
    usage: 'Best for HLH and hyperinflammatory syndrome education',
    examples: ['HLH', 'Cytokine storm', 'Cytotoxic granules', 'Perforin', 'Hyperinflammation'],
    defaultOptions: {
        title: 'HLH: Cytotoxic Granule Defect & Cytokine Storm',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'immunodeficiencyWorkupFlowchartFbcIgLymphocyteSubsetsDiagram': {
    name: 'Immunodeficiency Workup Flowchart: FBC, Ig & Lymphocyte Subsets',
    category: 'Immunodeficiency',
    description: 'Clinical flowchart for immunodeficiency workup incorporating FBC, immunoglobulin levels, and lymphocyte subset analysis',
    dataRequired: [],
    usage: 'Best for immunodeficiency investigation and haematology education',
    examples: ['Immunodeficiency workup', 'FBC', 'Immunoglobulins', 'Lymphocyte subsets'],
    defaultOptions: {
        title: 'Immunodeficiency Workup Flowchart',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'igrtHsctGeneTherapyTreatmentLadderPidDiagram': {
    name: 'IgRT, HSCT & Gene Therapy Treatment Ladder for PID',
    category: 'Immunodeficiency',
    description: 'Treatment ladder diagram for primary immunodeficiency showing escalation from immunoglobulin replacement to HSCT and gene therapy',
    dataRequired: [],
    usage: 'Best for PID treatment and gene therapy education',
    examples: ['PID treatment', 'IgRT', 'HSCT', 'Gene therapy', 'Immunodeficiency'],
    defaultOptions: {
        title: 'PID Treatment Ladder: IgRT, HSCT & Gene Therapy',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== PHOTOSYNTHESIS (EXTENDED) =====
'chloroplastAnnotatedUltrastructureDiagram': {
    name: 'Chloroplast Annotated Ultrastructure',
    category: 'Photosynthesis',
    description: 'Fully annotated ultrastructure diagram of the chloroplast showing all membranes, compartments, and functional regions',
    dataRequired: [],
    usage: 'Best for chloroplast biology and photosynthesis education',
    examples: ['Chloroplast', 'Ultrastructure', 'Thylakoid', 'Stroma', 'Granum'],
    defaultOptions: {
        title: 'Chloroplast Annotated Ultrastructure',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'thylakoidElectronTransportChainAndChemiosmosisdiagram': {
    name: 'Thylakoid Electron Transport Chain & Chemiosmosis',
    category: 'Photosynthesis',
    description: 'Detailed diagram of the thylakoid membrane electron transport chain and chemiosmotic ATP synthesis',
    dataRequired: [],
    usage: 'Best for light reactions and bioenergetics education',
    examples: ['Electron transport chain', 'Chemiosmosis', 'Thylakoid', 'ATP synthesis'],
    defaultOptions: {
        title: 'Thylakoid ETC & Chemiosmosis',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'calvinCycleThreeStageAnnotatedDiagram': {
    name: 'Calvin Cycle: Three Stage Annotated Diagram',
    category: 'Photosynthesis',
    description: 'Annotated three-stage diagram of the Calvin cycle: carbon fixation, reduction, and RuBP regeneration',
    dataRequired: [],
    usage: 'Best for Calvin cycle and dark reactions education',
    examples: ['Calvin cycle', 'Carbon fixation', 'RuBP', 'G3P', 'Dark reactions'],
    defaultOptions: {
        title: 'Calvin Cycle: Three Stages Annotated',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'c3VsC4VsCamPathwayComparisonDiagram': {
    name: 'C3 vs C4 vs CAM Pathway Comparison',
    category: 'Photosynthesis',
    description: 'Comparative diagram of C3, C4, and CAM photosynthetic pathways with anatomical and biochemical differences',
    dataRequired: [],
    usage: 'Best for photosynthesis pathway comparison education',
    examples: ['C3', 'C4', 'CAM', 'Photosynthesis', 'Carbon fixation'],
    defaultOptions: {
        title: 'C3 vs C4 vs CAM Pathways',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'limitingFactorRateVsIntensityCurvesDiagram': {
    name: 'Limiting Factor Rate vs Intensity Curves',
    category: 'Photosynthesis',
    description: 'Graph showing rate of photosynthesis vs light intensity with limiting factor analysis for CO2 and temperature',
    dataRequired: [],
    usage: 'Best for limiting factors and photosynthesis rate education',
    examples: ['Limiting factors', 'Light intensity', 'Photosynthesis rate', 'CO2'],
    defaultOptions: {
        title: 'Limiting Factor Rate vs Intensity Curves',
        type: 'generic',
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'leafDiscFloatationAssaySetupDiagram': {
    name: 'Leaf Disc Flotation Assay Setup',
    category: 'Photosynthesis',
    description: 'Experimental setup diagram for the leaf disc flotation assay to measure photosynthesis rate',
    dataRequired: [],
    usage: 'Best for practical photosynthesis investigation education',
    examples: ['Leaf disc assay', 'Photosynthesis practical', 'Flotation assay', 'Experimental'],
    defaultOptions: {
        title: 'Leaf Disc Flotation Assay Setup',
        type: 'generic',
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'netGrossPhotosynthesisCompensationPointGraph': {
    name: 'Net vs Gross Photosynthesis & Compensation Point Graph',
    category: 'Photosynthesis',
    description: 'Graph illustrating net and gross photosynthesis, the compensation point, and light saturation point',
    dataRequired: [],
    usage: 'Best for photosynthesis and respiration balance education',
    examples: ['Net photosynthesis', 'Gross photosynthesis', 'Compensation point', 'Light saturation'],
    defaultOptions: {
        title: 'Net vs Gross Photosynthesis & Compensation Point',
        type: 'generic',
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'primaryProductivityBiomeComparisonMap': {
    name: 'Primary Productivity Biome Comparison Map',
    category: 'Photosynthesis',
    description: 'Map and comparison chart of primary productivity across major global biomes',
    dataRequired: [],
    usage: 'Best for ecology and primary productivity education',
    examples: ['Primary productivity', 'Biomes', 'NPP', 'Ecosystems', 'Global productivity'],
    defaultOptions: {
        title: 'Primary Productivity Across Biomes',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'artificialPhotosynthesisPhotoelectrochemicalCellDiagram': {
    name: 'Artificial Photosynthesis: Photoelectrochemical Cell',
    category: 'Photosynthesis',
    description: 'Diagram of an artificial photosynthesis photoelectrochemical cell for solar fuel production',
    dataRequired: [],
    usage: 'Best for renewable energy and artificial photosynthesis education',
    examples: ['Artificial photosynthesis', 'Photoelectrochemical cell', 'Solar fuel', 'Renewable energy'],
    defaultOptions: {
        title: 'Artificial Photosynthesis: Photoelectrochemical Cell',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'rubiscoOxygenaseCarbonylaseCompetitionDiagram': {
    name: 'RuBisCO Oxygenase vs Carboxylase Competition',
    category: 'Photosynthesis',
    description: 'Diagram illustrating the competition between oxygenase and carboxylase activities of RuBisCO and its implications for photorespiration',
    dataRequired: [],
    usage: 'Best for RuBisCO, photorespiration, and photosynthesis efficiency education',
    examples: ['RuBisCO', 'Photorespiration', 'Carboxylase', 'Oxygenase', 'C3 pathway'],
    defaultOptions: {
        title: 'RuBisCO: Oxygenase vs Carboxylase Competition',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== PLANT NUTRITION =====
'essentialElementsClassificationAndSoilSourceDiagram': {
    name: 'Essential Elements Classification & Soil Source',
    category: 'Plant Nutrition',
    description: 'Classification diagram of essential plant elements (macro/micronutrients) with their soil sources',
    dataRequired: [],
    usage: 'Best for plant nutrition and soil science education',
    examples: ['Essential elements', 'Macronutrients', 'Micronutrients', 'Soil', 'Plant nutrition'],
    defaultOptions: {
        title: 'Essential Elements Classification & Soil Sources',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'macronutrientFunctionAndMolecularRoleSummaryDiagram': {
    name: 'Macronutrient Function & Molecular Role Summary',
    category: 'Plant Nutrition',
    description: 'Summary diagram of macronutrient functions and their molecular roles in plant metabolism',
    dataRequired: [],
    usage: 'Best for macronutrient biochemistry and plant nutrition education',
    examples: ['Macronutrients', 'Nitrogen', 'Phosphorus', 'Potassium', 'Molecular role'],
    defaultOptions: {
        title: 'Macronutrient Function & Molecular Role',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'micronutrientCofactorEnzymeLocationDiagram': {
    name: 'Micronutrient Cofactor, Enzyme & Location',
    category: 'Plant Nutrition',
    description: 'Diagram mapping micronutrients to their cofactor roles, associated enzymes, and cellular locations in plants',
    dataRequired: [],
    usage: 'Best for micronutrient function and plant biochemistry education',
    examples: ['Micronutrients', 'Cofactors', 'Enzymes', 'Iron', 'Manganese', 'Zinc'],
    defaultOptions: {
        title: 'Micronutrient Cofactor, Enzyme & Location',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'apoplasticSymplasticPathwayCasparianStripCrossSection': {
    name: 'Apoplastic & Symplastic Pathway: Casparian Strip Cross-Section',
    category: 'Plant Nutrition',
    description: 'Cross-section diagram showing apoplastic and symplastic nutrient pathways and the Casparian strip barrier',
    dataRequired: [],
    usage: 'Best for mineral uptake and root anatomy education',
    examples: ['Apoplastic', 'Symplastic', 'Casparian strip', 'Root', 'Mineral uptake'],
    defaultOptions: {
        title: 'Apoplastic & Symplastic Pathways: Casparian Strip',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'nitrogenCycleBiogeochemicalFlowDiagram': {
    name: 'Nitrogen Cycle: Biogeochemical Flow',
    category: 'Plant Nutrition',
    description: 'Complete biogeochemical nitrogen cycle diagram showing fixation, nitrification, denitrification, and assimilation',
    dataRequired: [],
    usage: 'Best for nitrogen cycle and ecosystem ecology education',
    examples: ['Nitrogen cycle', 'Nitrification', 'Denitrification', 'Fixation', 'Biogeochemistry'],
    defaultOptions: {
        title: 'Nitrogen Cycle: Biogeochemical Flow',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'arbuscularVsEctomycorrhizaeRootAnatomyComparisonDiagram': {
    name: 'Arbuscular vs Ectomycorrhizae Root Anatomy Comparison',
    category: 'Plant Nutrition',
    description: 'Comparative anatomy diagram of arbuscular and ectomycorrhizal root associations',
    dataRequired: [],
    usage: 'Best for mycorrhizae and symbiosis education',
    examples: ['Mycorrhizae', 'Arbuscular', 'Ectomycorrhizae', 'Root anatomy', 'Symbiosis'],
    defaultOptions: {
        title: 'Arbuscular vs Ectomycorrhizae: Root Anatomy',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'nutrientMobilityDeficiencyPatternLeafDiagram': {
    name: 'Nutrient Mobility & Deficiency Pattern Leaf Diagram',
    category: 'Plant Nutrition',
    description: 'Diagram showing nutrient mobility in plants and corresponding leaf deficiency symptom patterns',
    dataRequired: [],
    usage: 'Best for nutrient deficiency diagnosis and plant nutrition education',
    examples: ['Nutrient deficiency', 'Leaf symptoms', 'Mobility', 'Chlorosis', 'Necrosis'],
    defaultOptions: {
        title: 'Nutrient Mobility & Deficiency Patterns',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'eutrophicationRunoffNutrientCycleFlowDiagram': {
    name: 'Eutrophication, Runoff & Nutrient Cycle Flow',
    category: 'Plant Nutrition',
    description: 'Flow diagram of eutrophication process driven by agricultural runoff and its impact on nutrient cycling',
    dataRequired: [],
    usage: 'Best for eutrophication, environmental science, and nutrient cycle education',
    examples: ['Eutrophication', 'Runoff', 'Nutrient cycle', 'Algal bloom', 'Water quality'],
    defaultOptions: {
        title: 'Eutrophication & Nutrient Cycle Flow',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'carnivorousPlantTrapMechanismComparisonDiagram': {
    name: 'Carnivorous Plant Trap Mechanism Comparison',
    category: 'Plant Nutrition',
    description: 'Comparative diagram of trap mechanisms in carnivorous plants including pitfall, snap, and adhesive types',
    dataRequired: [],
    usage: 'Best for carnivorous plant adaptations and plant nutrition education',
    examples: ['Carnivorous plants', 'Venus flytrap', 'Pitcher plant', 'Trap mechanisms'],
    defaultOptions: {
        title: 'Carnivorous Plant Trap Mechanisms',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'xylemPhloemNutrientDirectionAndMobilityDiagram': {
    name: 'Xylem & Phloem Nutrient Direction & Mobility',
    category: 'Plant Nutrition',
    description: 'Diagram showing directional transport of nutrients through xylem and phloem with mobility classifications',
    dataRequired: [],
    usage: 'Best for vascular transport and plant nutrition education',
    examples: ['Xylem', 'Phloem', 'Nutrient transport', 'Mobility', 'Vascular'],
    defaultOptions: {
        title: 'Xylem & Phloem Nutrient Direction & Mobility',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== PLANT GROWTH & DEVELOPMENT =====
'primarySecondaryGrowthComparisonDiagram': {
    name: 'Primary vs Secondary Growth Comparison',
    category: 'Plant Growth & Development',
    description: 'Comparative diagram of primary and secondary growth in plants showing meristematic activity and structural outcomes',
    dataRequired: [],
    usage: 'Best for plant growth and development education',
    examples: ['Primary growth', 'Secondary growth', 'Meristem', 'Vascular cambium', 'Cork cambium'],
    defaultOptions: {
        title: 'Primary vs Secondary Plant Growth',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'rootApicalMeristemZoneAnnotatedLongitudinalDiagram': {
    name: 'Root Apical Meristem Zone: Annotated Longitudinal Diagram',
    category: 'Plant Growth & Development',
    description: 'Annotated longitudinal section of root apex showing meristematic, elongation, and maturation zones',
    dataRequired: [],
    usage: 'Best for root development and meristem biology education',
    examples: ['Root apical meristem', 'Elongation zone', 'Maturation zone', 'Root tip'],
    defaultOptions: {
        title: 'Root Apical Meristem Zones: Longitudinal Section',
        type: 'generic',
        showLabels: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'phytohormoneInteractionNetworkDiagram': {
    name: 'Phytohormone Interaction Network',
    category: 'Plant Growth & Development',
    description: 'Network diagram of phytohormone interactions showing synergistic and antagonistic relationships',
    dataRequired: [],
    usage: 'Best for plant hormone signalling and development education',
    examples: ['Phytohormones', 'Hormone interaction', 'Auxin', 'Cytokinin', 'Ethylene'],
    defaultOptions: {
        title: 'Phytohormone Interaction Network',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'auxinLateralRedistributionPhototropismGravitropismDiagram': {
    name: 'Auxin Lateral Redistribution: Phototropism & Gravitropism',
    category: 'Plant Growth & Development',
    description: 'Diagram of lateral auxin redistribution in response to light and gravity stimuli',
    dataRequired: [],
    usage: 'Best for tropism and auxin signalling education',
    examples: ['Auxin', 'Phototropism', 'Gravitropism', 'Lateral redistribution', 'Canalization'],
    defaultOptions: {
        title: 'Auxin Redistribution: Phototropism & Gravitropism',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'phytochromeConversionCriticalNightLengthFloweringDiagram': {
    name: 'Phytochrome Conversion & Critical Night Length in Flowering',
    category: 'Plant Growth & Development',
    description: 'Diagram of Pr/Pfr phytochrome interconversion and its role in critical night length and flowering control',
    dataRequired: [],
    usage: 'Best for photoperiodism and flowering control education',
    examples: ['Phytochrome', 'Photoperiodism', 'Flowering', 'Critical night length', 'Pr Pfr'],
    defaultOptions: {
        title: 'Phytochrome & Critical Night Length in Flowering',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'seedStructureGibberellinAleuroneCascadeDiagram': {
    name: 'Seed Structure & Gibberellin–Aleurone Cascade',
    category: 'Plant Growth & Development',
    description: 'Diagram of seed structure and gibberellin-induced aleurone layer signalling cascade for starch mobilisation',
    dataRequired: [],
    usage: 'Best for seed germination and gibberellin signalling education',
    examples: ['Seed structure', 'Gibberellin', 'Aleurone', 'Germination', 'Alpha-amylase'],
    defaultOptions: {
        title: 'Seed Structure & Gibberellin–Aleurone Cascade',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'leafAbscissionZoneSeparationProtectiveLayerDiagram': {
    name: 'Leaf Abscission Zone: Separation & Protective Layer',
    category: 'Plant Growth & Development',
    description: 'Diagram of leaf abscission zone showing separation layer formation and protective layer development',
    dataRequired: [],
    usage: 'Best for leaf senescence and abscission education',
    examples: ['Leaf abscission', 'Abscission zone', 'Separation layer', 'Ethylene', 'Auxin'],
    defaultOptions: {
        title: 'Leaf Abscission Zone: Separation & Protective Layer',
        type: 'generic',
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'etiolationDeEtiolationLightQualityResponseDiagram': {
    name: 'Etiolation & De-etiolation: Light Quality Response',
    category: 'Plant Growth & Development',
    description: 'Diagram comparing etiolated and de-etiolated plant morphology and light quality response mechanisms',
    dataRequired: [],
    usage: 'Best for photomorphogenesis and light response education',
    examples: ['Etiolation', 'De-etiolation', 'Photomorphogenesis', 'Light quality', 'Skotomorphogenesis'],
    defaultOptions: {
        title: 'Etiolation & De-etiolation: Light Quality Response',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'micropropagationExplantCallusOrganogenesisFlowDiagram': {
    name: 'Micropropagation: Explant → Callus → Organogenesis Flow',
    category: 'Plant Growth & Development',
    description: 'Flow diagram of plant micropropagation from explant through callus to organogenesis and plantlet formation',
    dataRequired: [],
    usage: 'Best for tissue culture and micropropagation education',
    examples: ['Micropropagation', 'Tissue culture', 'Callus', 'Organogenesis', 'Explant'],
    defaultOptions: {
        title: 'Micropropagation: Explant to Organogenesis',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'sourceToSinkAssimilateFlowHormoneRatioDiagram': {
    name: 'Source to Sink Assimilate Flow & Hormone Ratio',
    category: 'Plant Growth & Development',
    description: 'Diagram of assimilate flow from source to sink tissues with hormone ratio control of distribution',
    dataRequired: [],
    usage: 'Best for phloem transport and source-sink dynamics education',
    examples: ['Source-sink', 'Assimilate flow', 'Phloem', 'Hormone ratio', 'Sugar transport'],
    defaultOptions: {
        title: 'Source to Sink Assimilate Flow & Hormone Ratio',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== PLANT ADAPTATIONS =====
'adaptationTypesStructuralPhysiologicalBehaviouralClassificationDiagram': {
    name: 'Adaptation Types: Structural, Physiological & Behavioural Classification',
    category: 'Plant Adaptations',
    description: 'Classification diagram of plant adaptation types including structural, physiological, and behavioural categories',
    dataRequired: [],
    usage: 'Best for plant adaptations and ecology education',
    examples: ['Plant adaptations', 'Structural', 'Physiological', 'Behavioural', 'Classification'],
    defaultOptions: {
        title: 'Plant Adaptation Types Classification',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'xerophyteLeafCrossSectionSunkenStomataRolledLeafDiagram': {
    name: 'Xerophyte Leaf Cross-Section: Sunken Stomata & Rolled Leaf',
    category: 'Plant Adaptations',
    description: 'Cross-section diagram of xerophyte leaf showing sunken stomata, rolled leaf, and water conservation adaptations',
    dataRequired: [],
    usage: 'Best for xerophyte adaptation and drought tolerance education',
    examples: ['Xerophyte', 'Sunken stomata', 'Rolled leaf', 'Drought adaptation', 'Water conservation'],
    defaultOptions: {
        title: 'Xerophyte Leaf: Sunken Stomata & Rolled Leaf',
        type: 'generic',
        showLabels: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'hydrophyteAerenchymaFloatingLeafPneumatophoreAdaptationDiagram': {
    name: 'Hydrophyte Adaptations: Aerenchyma, Floating Leaf & Pneumatophore',
    category: 'Plant Adaptations',
    description: 'Diagram of hydrophyte adaptations including aerenchyma tissue, floating leaf structure, and pneumatophores',
    dataRequired: [],
    usage: 'Best for hydrophyte and aquatic plant adaptation education',
    examples: ['Hydrophyte', 'Aerenchyma', 'Floating leaf', 'Pneumatophore', 'Aquatic plant'],
    defaultOptions: {
        title: 'Hydrophyte Adaptations: Aerenchyma, Floating Leaf & Pneumatophore',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'halophyteSaltGlandIonCompartmentalisationVacuoleDiagram': {
    name: 'Halophyte: Salt Gland, Ion Compartmentalisation & Vacuole',
    category: 'Plant Adaptations',
    description: 'Diagram of halophyte salt tolerance mechanisms including salt glands and vacuolar ion compartmentalisation',
    dataRequired: [],
    usage: 'Best for halophyte and salt stress adaptation education',
    examples: ['Halophyte', 'Salt gland', 'Ion compartmentalisation', 'Vacuole', 'Salt tolerance'],
    defaultOptions: {
        title: 'Halophyte: Salt Glands & Ion Compartmentalisation',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'coldAcclimationMembraneLipidAntifreezeProteinResponseDiagram': {
    name: 'Cold Acclimation: Membrane Lipid & Antifreeze Protein Response',
    category: 'Plant Adaptations',
    description: 'Diagram of plant cold acclimation responses including membrane lipid changes and antifreeze protein induction',
    dataRequired: [],
    usage: 'Best for cold tolerance and plant stress response education',
    examples: ['Cold acclimation', 'Membrane lipids', 'Antifreeze proteins', 'Frost tolerance', 'Stress response'],
    defaultOptions: {
        title: 'Cold Acclimation: Membrane Lipids & Antifreeze Proteins',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'sunVsShadeLeafChlorophyllAbsorptionCompensationPointDiagram': {
    name: 'Sun vs Shade Leaf: Chlorophyll Absorption & Compensation Point',
    category: 'Plant Adaptations',
    description: 'Comparative diagram of sun and shade leaf anatomy, chlorophyll absorption spectra, and compensation points',
    dataRequired: [],
    usage: 'Best for leaf adaptation and light response education',
    examples: ['Sun leaf', 'Shade leaf', 'Chlorophyll', 'Compensation point', 'Light adaptation'],
    defaultOptions: {
        title: 'Sun vs Shade Leaf: Chlorophyll & Compensation Point',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'proteoidRootClusterRhizosphereAcidificationDiagram': {
    name: 'Proteoid Root Cluster & Rhizosphere Acidification',
    category: 'Plant Adaptations',
    description: 'Diagram of proteoid (cluster) root formation and rhizosphere acidification for phosphorus mobilisation',
    dataRequired: [],
    usage: 'Best for phosphorus nutrition and root adaptation education',
    examples: ['Proteoid roots', 'Cluster roots', 'Rhizosphere', 'Acidification', 'Phosphorus'],
    defaultOptions: {
        title: 'Proteoid Roots & Rhizosphere Acidification',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'pollinationSyndromeFlowerMorphologyComparisonDiagram': {
    name: 'Pollination Syndrome & Flower Morphology Comparison',
    category: 'Plant Adaptations',
    description: 'Comparative diagram of pollination syndromes and associated flower morphology adaptations',
    dataRequired: [],
    usage: 'Best for pollination biology and plant-animal interaction education',
    examples: ['Pollination syndrome', 'Flower morphology', 'Entomophily', 'Ornithophily', 'Anemophily'],
    defaultOptions: {
        title: 'Pollination Syndromes & Flower Morphology',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'physicalChemicalDefenceSecondaryMetabolitePathwayDiagram': {
    name: 'Physical & Chemical Defence: Secondary Metabolite Pathway',
    category: 'Plant Adaptations',
    description: 'Diagram of plant defence mechanisms including physical barriers and chemical secondary metabolite pathways',
    dataRequired: [],
    usage: 'Best for plant defence and secondary metabolism education',
    examples: ['Plant defence', 'Secondary metabolites', 'Alkaloids', 'Terpenes', 'Physical defence'],
    defaultOptions: {
        title: 'Plant Physical & Chemical Defence: Secondary Metabolites',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'biomeAdaptationSyndromeWorldMapDiagram': {
    name: 'Biome Adaptation Syndrome World Map',
    category: 'Plant Adaptations',
    description: 'World map overlaid with biome-specific plant adaptation syndromes and their geographic distribution',
    dataRequired: [],
    usage: 'Best for global ecology and biome adaptation education',
    examples: ['Biomes', 'Adaptation syndromes', 'World map', 'Global ecology', 'Plant distribution'],
    defaultOptions: {
        title: 'Biome Adaptation Syndromes World Map',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

// ===== ROOT BIOLOGY =====
'rootVsShootAnatomyComparativeOrganisationDiagram': {
    name: 'Root vs Shoot Anatomy: Comparative Organisation',
    category: 'Root Biology',
    description: 'Comparative cross-section organisation diagram of root and shoot anatomy highlighting key differences',
    dataRequired: [],
    usage: 'Best for plant anatomy and organ comparison education',
    examples: ['Root anatomy', 'Shoot anatomy', 'Comparative', 'Vascular tissue', 'Organisation'],
    defaultOptions: {
        title: 'Root vs Shoot: Comparative Anatomy',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'tapRootVsFibrousAdventitousRootSystemComparisonDiagram': {
    name: 'Taproot vs Fibrous vs Adventitious Root System Comparison',
    category: 'Root Biology',
    description: 'Comparative diagram of taproot, fibrous, and adventitious root system architectures and functions',
    dataRequired: [],
    usage: 'Best for root system diversity and plant morphology education',
    examples: ['Taproot', 'Fibrous root', 'Adventitious root', 'Root system', 'Morphology'],
    defaultOptions: {
        title: 'Taproot vs Fibrous vs Adventitious Root Systems',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'rootLongitudinalZonesCrossSectionAnnotatedDiagram': {
    name: 'Root Longitudinal Zones: Cross-Section Annotated',
    category: 'Root Biology',
    description: 'Annotated diagram of root longitudinal zones with corresponding cross-sections at each zone',
    dataRequired: [],
    usage: 'Best for root structure and development education',
    examples: ['Root zones', 'Longitudinal section', 'Cross-section', 'Root development', 'Meristem'],
    defaultOptions: {
        title: 'Root Longitudinal Zones & Cross-Sections',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'apoplasticSymplasticTransmembraneWaterPathwayDiagram': {
    name: 'Apoplastic, Symplastic & Transmembrane Water Pathway',
    category: 'Root Biology',
    description: 'Diagram of the three water transport pathways through root tissue: apoplastic, symplastic, and transmembrane',
    dataRequired: [],
    usage: 'Best for water transport and root physiology education',
    examples: ['Water transport', 'Apoplastic', 'Symplastic', 'Transmembrane', 'Root'],
    defaultOptions: {
        title: 'Water Pathways: Apoplastic, Symplastic & Transmembrane',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'lateralRootPericycleInitiationAuxinMaximumDiagram': {
    name: 'Lateral Root Pericycle Initiation & Auxin Maximum',
    category: 'Root Biology',
    description: 'Diagram of lateral root initiation from pericycle cells driven by local auxin maxima',
    dataRequired: [],
    usage: 'Best for lateral root development and auxin signalling education',
    examples: ['Lateral root', 'Pericycle', 'Auxin maximum', 'Root initiation', 'Primordia'],
    defaultOptions: {
        title: 'Lateral Root Initiation: Pericycle & Auxin Maximum',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'rhizosphereExudatesMicrobialCommunityGradientDiagram': {
    name: 'Rhizosphere Exudates & Microbial Community Gradient',
    category: 'Root Biology',
    description: 'Diagram of rhizosphere chemical gradients from root exudates and their influence on microbial community structure',
    dataRequired: [],
    usage: 'Best for rhizosphere ecology and soil microbiology education',
    examples: ['Rhizosphere', 'Root exudates', 'Microbial community', 'Soil ecology', 'Microbiome'],
    defaultOptions: {
        title: 'Rhizosphere Exudates & Microbial Community Gradient',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'rootModificationTypesFunctionComparisonDiagram': {
    name: 'Root Modification Types & Function Comparison',
    category: 'Root Biology',
    description: 'Comparative diagram of root modification types (storage, aerial, contractile, buttress) and their functions',
    dataRequired: [],
    usage: 'Best for root modification and functional morphology education',
    examples: ['Root modifications', 'Storage root', 'Aerial root', 'Buttress root', 'Contractile root'],
    defaultOptions: {
        title: 'Root Modification Types & Functions',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'statocyteAmyloplastSedimentationAuxinRedistributionDiagram': {
    name: 'Statocyte Amyloplast Sedimentation & Auxin Redistribution',
    category: 'Root Biology',
    description: 'Diagram of statocyte amyloplast gravitational sedimentation and downstream auxin redistribution in gravitropism',
    dataRequired: [],
    usage: 'Best for gravitropism and root orientation education',
    examples: ['Statocyte', 'Amyloplast', 'Gravitropism', 'Auxin redistribution', 'Sedimentation'],
    defaultOptions: {
        title: 'Statocyte Amyloplast Sedimentation & Auxin Redistribution',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'rootSecondaryGrowthVascularCorkCambiumAnnualRingDiagram': {
    name: 'Root Secondary Growth: Vascular & Cork Cambium Annual Rings',
    category: 'Root Biology',
    description: 'Diagram of root secondary growth showing vascular cambium, cork cambium activity, and annual ring formation',
    dataRequired: [],
    usage: 'Best for secondary growth and wood formation education',
    examples: ['Root secondary growth', 'Vascular cambium', 'Cork cambium', 'Annual rings', 'Wood'],
    defaultOptions: {
        title: 'Root Secondary Growth: Cambium & Annual Rings',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'rootCarbonSequestrationSoilStabilisationEcosystemRoleDiagram': {
    name: 'Root Carbon Sequestration, Soil Stabilisation & Ecosystem Role',
    category: 'Root Biology',
    description: 'Diagram of root contributions to carbon sequestration, soil stabilisation, and broader ecosystem services',
    dataRequired: [],
    usage: 'Best for ecosystem services and root ecology education',
    examples: ['Carbon sequestration', 'Soil stabilisation', 'Root ecology', 'Ecosystem services'],
    defaultOptions: {
        title: 'Root: Carbon Sequestration & Ecosystem Role',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== LEAF BIOLOGY =====
'leafExternalMorphologyLaminaPetioleVenationLabelledDiagram': {
    name: 'Leaf External Morphology: Lamina, Petiole & Venation Labelled',
    category: 'Leaf Biology',
    description: 'Labelled diagram of leaf external morphology including lamina, petiole, stipules, and venation patterns',
    dataRequired: [],
    usage: 'Best for leaf morphology and plant anatomy education',
    examples: ['Leaf morphology', 'Lamina', 'Petiole', 'Venation', 'Stipule'],
    defaultOptions: {
        title: 'Leaf External Morphology: Lamina, Petiole & Venation',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'leafCrossSectionAllTissueLayersAnnotatedDiagram': {
    name: 'Leaf Cross-Section: All Tissue Layers Annotated',
    category: 'Leaf Biology',
    description: 'Fully annotated leaf cross-section showing all tissue layers from upper epidermis to lower epidermis',
    dataRequired: [],
    usage: 'Best for leaf anatomy and histology education',
    examples: ['Leaf cross-section', 'Palisade mesophyll', 'Spongy mesophyll', 'Epidermis', 'Vascular bundle'],
    defaultOptions: {
        title: 'Leaf Cross-Section: All Tissue Layers',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'guardCellIonFluxStomatalOpeningMechanismDiagram': {
    name: 'Guard Cell Ion Flux & Stomatal Opening Mechanism',
    category: 'Leaf Biology',
    description: 'Diagram of guard cell ion flux mechanisms and the resulting stomatal opening and closing responses',
    dataRequired: [],
    usage: 'Best for stomatal regulation and guard cell physiology education',
    examples: ['Guard cells', 'Ion flux', 'Stomatal opening', 'K+ flux', 'ABA'],
    defaultOptions: {
        title: 'Guard Cell Ion Flux & Stomatal Opening',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'netVsParallelVenationDicotMonocotComparisonDiagram': {
    name: 'Net vs Parallel Venation: Dicot & Monocot Comparison',
    category: 'Leaf Biology',
    description: 'Comparative diagram of net (reticulate) and parallel venation patterns in dicot and monocot leaves',
    dataRequired: [],
    usage: 'Best for leaf venation and plant classification education',
    examples: ['Venation', 'Net venation', 'Parallel venation', 'Dicot', 'Monocot'],
    defaultOptions: {
        title: 'Net vs Parallel Venation: Dicot & Monocot',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'co2DiffusionPathwayStomataToChloroplastResistanceModelDiagram': {
    name: 'CO2 Diffusion Pathway: Stomata to Chloroplast Resistance Model',
    category: 'Leaf Biology',
    description: 'Resistance model diagram of CO2 diffusion pathway from stomata through intercellular spaces to chloroplast',
    dataRequired: [],
    usage: 'Best for gas exchange and diffusion resistance education',
    examples: ['CO2 diffusion', 'Stomata', 'Chloroplast', 'Diffusion resistance', 'Gas exchange'],
    defaultOptions: {
        title: 'CO2 Diffusion: Stomata to Chloroplast Resistance Model',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'sunShadeLeafPalisadeLayersThicknessCrossComparisonDiagram': {
    name: 'Sun vs Shade Leaf: Palisade Layers & Thickness Cross-Comparison',
    category: 'Leaf Biology',
    description: 'Cross-comparison diagram of sun and shade leaf palisade layer number, thickness, and chloroplast distribution',
    dataRequired: [],
    usage: 'Best for light adaptation and leaf anatomy education',
    examples: ['Sun leaf', 'Shade leaf', 'Palisade layers', 'Thickness', 'Chloroplast density'],
    defaultOptions: {
        title: 'Sun vs Shade Leaf: Palisade Layers & Thickness',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'leafModificationTypesFunctionEvolutionaryOriginDiagram': {
    name: 'Leaf Modification Types, Function & Evolutionary Origin',
    category: 'Leaf Biology',
    description: 'Comparative diagram of leaf modification types (tendrils, spines, scales, bracts) with functions and evolutionary origins',
    dataRequired: [],
    usage: 'Best for leaf modification and evolutionary morphology education',
    examples: ['Leaf modifications', 'Tendrils', 'Spines', 'Bracts', 'Evolutionary origin'],
    defaultOptions: {
        title: 'Leaf Modification Types, Function & Origin',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'abscissionZoneSeparationProtectiveLayerHormonalControlDiagram': {
    name: 'Abscission Zone: Separation, Protective Layer & Hormonal Control',
    category: 'Leaf Biology',
    description: 'Diagram of abscission zone anatomy and hormonal control (ethylene/auxin ratio) of separation and protective layer formation',
    dataRequired: [],
    usage: 'Best for leaf abscission and senescence hormone education',
    examples: ['Abscission zone', 'Ethylene', 'Auxin', 'Separation layer', 'Leaf fall'],
    defaultOptions: {
        title: 'Abscission Zone: Hormonal Control & Layers',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'phyllotaxisGoldenAngleFibonacciLeafArrangementDiagram': {
    name: 'Phyllotaxis: Golden Angle & Fibonacci Leaf Arrangement',
    category: 'Leaf Biology',
    description: 'Diagram illustrating phyllotaxis patterns, golden angle, and Fibonacci sequence in leaf arrangement for light capture optimisation',
    dataRequired: [],
    usage: 'Best for phyllotaxis, mathematical biology, and plant architecture education',
    examples: ['Phyllotaxis', 'Golden angle', 'Fibonacci', 'Leaf arrangement', 'Light capture'],
    defaultOptions: {
        title: 'Phyllotaxis: Golden Angle & Fibonacci Arrangement',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'leafEconomicsSpectrumSlaVsLeafNitrogenBiomePlotDiagram': {
    name: 'Leaf Economics Spectrum: SLA vs Leaf Nitrogen Biome Plot',
    category: 'Leaf Biology',
    description: 'Biome-level plot of specific leaf area (SLA) vs leaf nitrogen content illustrating the leaf economics spectrum',
    dataRequired: [],
    usage: 'Best for functional ecology and leaf trait variation education',
    examples: ['Leaf economics spectrum', 'SLA', 'Leaf nitrogen', 'Functional ecology', 'Biome'],
    defaultOptions: {
        title: 'Leaf Economics Spectrum: SLA vs Leaf Nitrogen',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== PLANT ORGANISATION =====
'plantOrganisationHierarchyCellToOrganismDiagram': {
    name: 'Plant Organisation Hierarchy: Cell to Organism',
    category: 'Plant Organisation',
    description: 'Hierarchical diagram of plant organisation levels from cell through tissue and organ to whole organism',
    dataRequired: [],
    usage: 'Best for plant organisation and hierarchy education',
    examples: ['Plant organisation', 'Hierarchy', 'Cell', 'Tissue', 'Organ', 'Organism'],
    defaultOptions: {
        title: 'Plant Organisation: Cell to Organism Hierarchy',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'parenchymaCollenchymaSclerenchymaComparisonDiagram': {
    name: 'Parenchyma, Collenchyma & Sclerenchyma Comparison',
    category: 'Plant Organisation',
    description: 'Comparative diagram of three main plant ground tissue types with structural and functional differences',
    dataRequired: [],
    usage: 'Best for plant tissue types and histology education',
    examples: ['Parenchyma', 'Collenchyma', 'Sclerenchyma', 'Ground tissue', 'Plant histology'],
    defaultOptions: {
        title: 'Parenchyma, Collenchyma & Sclerenchyma Comparison',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'rootZonesCrossSection_casparianStripLabelledDiagram': {
    name: 'Root Zones Cross-Section: Casparian Strip Labelled',
    category: 'Plant Organisation',
    description: 'Cross-section diagram of root zones with Casparian strip clearly labelled in the endodermis',
    dataRequired: [],
    usage: 'Best for root anatomy and Casparian strip education',
    examples: ['Root cross-section', 'Casparian strip', 'Endodermis', 'Root zones', 'Cortex'],
    defaultOptions: {
        title: 'Root Cross-Section: Casparian Strip Labelled',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'stemModificationsTypesComparativeDiagram': {
    name: 'Stem Modifications: Types Comparative Diagram',
    category: 'Plant Organisation',
    description: 'Comparative diagram of stem modification types including rhizomes, stolons, corms, tubers, and cladodes',
    dataRequired: [],
    usage: 'Best for stem modification and vegetative reproduction education',
    examples: ['Stem modifications', 'Rhizome', 'Stolon', 'Corm', 'Tuber', 'Cladode'],
    defaultOptions: {
        title: 'Stem Modification Types: Comparative Overview',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'leafInternalAnatomyPalisadeSpongyMesophyllLabelledDiagram': {
    name: 'Leaf Internal Anatomy: Palisade & Spongy Mesophyll Labelled',
    category: 'Plant Organisation',
    description: 'Labelled cross-section of leaf internal anatomy emphasising palisade and spongy mesophyll tissue organisation',
    dataRequired: [],
    usage: 'Best for leaf anatomy and photosynthesis tissue education',
    examples: ['Leaf anatomy', 'Palisade mesophyll', 'Spongy mesophyll', 'Cross-section', 'Chloroplast'],
    defaultOptions: {
        title: 'Leaf Internal Anatomy: Palisade & Spongy Mesophyll',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'monocotVsDicotWholeBodyComparativeDiagram': {
    name: 'Monocot vs Dicot: Whole Body Comparative',
    category: 'Plant Organisation',
    description: 'Whole body comparative diagram of monocot and dicot plants covering root, stem, leaf, and flower differences',
    dataRequired: [],
    usage: 'Best for plant classification and monocot-dicot comparison education',
    examples: ['Monocot', 'Dicot', 'Comparative', 'Plant classification', 'Whole body'],
    defaultOptions: {
        title: 'Monocot vs Dicot: Whole Body Comparison',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'xerophyteHydrophyteAdaptationComparativeDiagram': {
    name: 'Xerophyte vs Hydrophyte Adaptation Comparative',
    category: 'Plant Organisation',
    description: 'Comparative diagram contrasting xerophyte and hydrophyte anatomical and physiological adaptations',
    dataRequired: [],
    usage: 'Best for plant adaptation comparison and ecology education',
    examples: ['Xerophyte', 'Hydrophyte', 'Adaptation', 'Comparative', 'Water regulation'],
    defaultOptions: {
        title: 'Xerophyte vs Hydrophyte Adaptation Comparison',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'woodAnnualRingsHeartwoodSapwoodCambiumDiagram': {
    name: 'Wood Annual Rings: Heartwood, Sapwood & Cambium',
    category: 'Plant Organisation',
    description: 'Cross-section diagram of wood showing annual ring formation, heartwood, sapwood, and cambium layers',
    dataRequired: [],
    usage: 'Best for wood anatomy and secondary growth education',
    examples: ['Annual rings', 'Heartwood', 'Sapwood', 'Cambium', 'Wood anatomy'],
    defaultOptions: {
        title: 'Wood: Annual Rings, Heartwood, Sapwood & Cambium',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'completeFlowerLabelledWhorlsDiagram': {
    name: 'Complete Flower: Labelled Whorls',
    category: 'Plant Organisation',
    description: 'Fully labelled diagram of a complete flower showing all four whorls: calyx, corolla, androecium, and gynoecium',
    dataRequired: [],
    usage: 'Best for flower anatomy and plant reproduction education',
    examples: ['Flower anatomy', 'Sepals', 'Petals', 'Stamens', 'Carpels', 'Whorls'],
    defaultOptions: {
        title: 'Complete Flower: Labelled Whorls',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'seedPartsEmbryoEndospermTestaDiagram': {
    name: 'Seed Parts: Embryo, Endosperm & Testa',
    category: 'Plant Organisation',
    description: 'Labelled cross-section diagram of seed structure showing embryo, endosperm, testa, and associated structures',
    dataRequired: [],
    usage: 'Best for seed structure and germination education',
    examples: ['Seed structure', 'Embryo', 'Endosperm', 'Testa', 'Cotyledon', 'Radicle'],
    defaultOptions: {
        title: 'Seed Structure: Embryo, Endosperm & Testa',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== TRANSPORT IN PLANTS =====
'diffusionOsmosisActiveTransportComparisonDiagram': {
    name: 'Diffusion, Osmosis & Active Transport Comparison',
    category: 'Transport in Plants',
    description: 'Comparative diagram of diffusion, osmosis, and active transport mechanisms in plant cells',
    dataRequired: [],
    usage: 'Best for membrane transport and plant physiology education',
    examples: ['Diffusion', 'Osmosis', 'Active transport', 'Membrane', 'Transport'],
    defaultOptions: {
        title: 'Diffusion, Osmosis & Active Transport Comparison',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'apoplasticSymplasticTransmembranepathwaysCasparianStripDiagram': {
    name: 'Apoplastic, Symplastic & Transmembrane Pathways with Casparian Strip',
    category: 'Transport in Plants',
    description: 'Diagram of all three water and solute transport pathways through root tissue including the Casparian strip barrier',
    dataRequired: [],
    usage: 'Best for root transport and mineral uptake education',
    examples: ['Apoplastic pathway', 'Symplastic pathway', 'Transmembrane', 'Casparian strip', 'Root transport'],
    defaultOptions: {
        title: 'Apoplastic, Symplastic & Transmembrane Pathways',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'cohesionTensionTranspirationPullWaterColumnDiagram': {
    name: 'Cohesion–Tension: Transpiration Pull & Water Column',
    category: 'Transport in Plants',
    description: 'Diagram of the cohesion-tension mechanism showing transpiration pull and continuous water column in xylem',
    dataRequired: [],
    usage: 'Best for xylem transport and transpiration mechanism education',
    examples: ['Cohesion-tension', 'Transpiration pull', 'Water column', 'Xylem', 'Adhesion'],
    defaultOptions: {
        title: 'Cohesion–Tension: Transpiration Pull & Water Column',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'guardCellTurgorKplusFluxStomatalOpeningClosingDiagram': {
    name: 'Guard Cell Turgor, K+ Flux & Stomatal Opening/Closing',
    category: 'Transport in Plants',
    description: 'Diagram of guard cell potassium flux driving turgor changes and stomatal opening and closing',
    dataRequired: [],
    usage: 'Best for stomatal regulation and guard cell physiology education',
    examples: ['Guard cell', 'Turgor', 'K+ flux', 'Stomatal opening', 'Stomatal closing'],
    defaultOptions: {
        title: 'Guard Cell Turgor & K+ Flux: Stomatal Control',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'essentialMineralFunctionDeficiencySymptomSummaryDiagram': {
    name: 'Essential Mineral Function & Deficiency Symptom Summary',
    category: 'Transport in Plants',
    description: 'Summary diagram of essential mineral functions in plants with corresponding deficiency symptoms',
    dataRequired: [],
    usage: 'Best for mineral nutrition and deficiency diagnosis education',
    examples: ['Mineral nutrition', 'Deficiency symptoms', 'Nitrogen', 'Iron', 'Phosphorus', 'Chlorosis'],
    defaultOptions: {
        title: 'Essential Mineral Function & Deficiency Symptoms',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'massFlowHypothesisSourceSinkPressureGradientDiagram': {
    name: 'Mass Flow Hypothesis: Source–Sink Pressure Gradient',
    category: 'Transport in Plants',
    description: 'Diagram of the Münch mass flow hypothesis showing source-sink pressure gradient driving phloem transport',
    dataRequired: [],
    usage: 'Best for phloem transport and mass flow education',
    examples: ['Mass flow hypothesis', 'Source-sink', 'Phloem', 'Pressure gradient', 'Münch'],
    defaultOptions: {
        title: 'Mass Flow Hypothesis: Source–Sink Pressure Gradient',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'leafGasExchangeCO2O2GradientsPhotosynthesisRespirationDiagram': {
    name: 'Leaf Gas Exchange: CO2/O2 Gradients & Photosynthesis/Respiration',
    category: 'Transport in Plants',
    description: 'Diagram of leaf gas exchange showing CO2 and O2 concentration gradients during photosynthesis and respiration',
    dataRequired: [],
    usage: 'Best for leaf gas exchange and photosynthesis-respiration balance education',
    examples: ['Gas exchange', 'CO2 gradient', 'O2 gradient', 'Photosynthesis', 'Respiration'],
    defaultOptions: {
        title: 'Leaf Gas Exchange: CO2/O2 Gradients',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'transpirationRateFactorsSummaryDiagram': {
    name: 'Transpiration Rate Factors Summary',
    category: 'Transport in Plants',
    description: 'Summary diagram of factors affecting transpiration rate including light, temperature, humidity, and wind',
    dataRequired: [],
    usage: 'Best for transpiration and environmental factors education',
    examples: ['Transpiration rate', 'Light', 'Temperature', 'Humidity', 'Wind', 'Factors'],
    defaultOptions: {
        title: 'Transpiration Rate: Factors Summary',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'soilPlantAtmosphereContinuumWaterPotentialGradientDiagram': {
    name: 'Soil–Plant–Atmosphere Continuum: Water Potential Gradient',
    category: 'Transport in Plants',
    description: 'Diagram of the soil-plant-atmosphere continuum showing water potential gradient driving water movement',
    dataRequired: [],
    usage: 'Best for SPAC and water potential education',
    examples: ['SPAC', 'Water potential', 'Soil-plant-atmosphere', 'Water movement', 'Gradient'],
    defaultOptions: {
        title: 'Soil–Plant–Atmosphere Continuum: Water Potential Gradient',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'xylemPhloemStructureFunctionSideBySideComparisonDiagram': {
    name: 'Xylem & Phloem Structure–Function: Side-by-Side Comparison',
    category: 'Transport in Plants',
    description: 'Side-by-side comparison diagram of xylem and phloem structure and function in vascular transport',
    dataRequired: [],
    usage: 'Best for vascular tissue structure and function education',
    examples: ['Xylem', 'Phloem', 'Vascular tissue', 'Structure', 'Function', 'Comparison'],
    defaultOptions: {
        title: 'Xylem vs Phloem: Structure & Function Comparison',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== PLANT REPRODUCTION =====
'alternationOfGenerationsSporophyteGametophyteCycleDiagram': {
    name: 'Alternation of Generations: Sporophyte & Gametophyte Cycle',
    category: 'Plant Reproduction',
    description: 'Cycle diagram of alternation of generations showing sporophyte and gametophyte phases across plant groups',
    dataRequired: [],
    usage: 'Best for plant reproduction and life cycle education',
    examples: ['Alternation of generations', 'Sporophyte', 'Gametophyte', 'Meiosis', 'Fertilisation'],
    defaultOptions: {
        title: 'Alternation of Generations: Sporophyte & Gametophyte',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'vegetativePropagationTypesStolonRhizomeTuberBulbDiagram': {
    name: 'Vegetative Propagation Types: Stolon, Rhizome, Tuber & Bulb',
    category: 'Plant Reproduction',
    description: 'Comparative diagram of vegetative propagation structures including stolons, rhizomes, tubers, and bulbs',
    dataRequired: [],
    usage: 'Best for vegetative reproduction and asexual propagation education',
    examples: ['Vegetative propagation', 'Stolon', 'Rhizome', 'Tuber', 'Bulb', 'Asexual reproduction'],
    defaultOptions: {
        title: 'Vegetative Propagation: Stolon, Rhizome, Tuber & Bulb',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'angiospermFlowerLabelledEmbryoSacPollenDevelopmentDiagram': {
    name: 'Angiosperm Flower: Labelled Embryo Sac & Pollen Development',
    category: 'Plant Reproduction',
    description: 'Labelled diagram of angiosperm flower showing embryo sac development and pollen grain formation',
    dataRequired: [],
    usage: 'Best for angiosperm reproduction and gametogenesis education',
    examples: ['Angiosperm', 'Embryo sac', 'Pollen development', 'Gametogenesis', 'Flower'],
    defaultOptions: {
        title: 'Angiosperm: Embryo Sac & Pollen Development',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'windVsInsectPollinationFlowerAdaptationComparisonDiagram': {
    name: 'Wind vs Insect Pollination: Flower Adaptation Comparison',
    category: 'Plant Reproduction',
    description: 'Comparative diagram of wind-pollinated and insect-pollinated flower adaptations',
    dataRequired: [],
    usage: 'Best for pollination biology and flower adaptation education',
    examples: ['Wind pollination', 'Insect pollination', 'Flower adaptation', 'Anemophily', 'Entomophily'],
    defaultOptions: {
        title: 'Wind vs Insect Pollination: Flower Adaptations',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'doubleFertilisationPollenTubeZygoteEndospermDiagram': {
    name: 'Double Fertilisation: Pollen Tube, Zygote & Endosperm',
    category: 'Plant Reproduction',
    description: 'Diagram of angiosperm double fertilisation showing pollen tube growth, zygote formation, and endosperm development',
    dataRequired: [],
    usage: 'Best for double fertilisation and angiosperm reproduction education',
    examples: ['Double fertilisation', 'Pollen tube', 'Zygote', 'Endosperm', 'Angiosperm'],
    defaultOptions: {
        title: 'Double Fertilisation: Pollen Tube, Zygote & Endosperm',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'embryoDevelopmentGlobularHeartTorpedoMatureStageDiagram': {
    name: 'Embryo Development: Globular, Heart, Torpedo & Mature Stages',
    category: 'Plant Reproduction',
    description: 'Sequential diagram of plant embryo development from globular through heart, torpedo, to mature stages',
    dataRequired: [],
    usage: 'Best for plant embryogenesis and development education',
    examples: ['Embryo development', 'Globular stage', 'Heart stage', 'Torpedo stage', 'Embryogenesis'],
    defaultOptions: {
        title: 'Embryo Development: Globular to Mature Stages',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'fruitTypesClassificationFleshyDryAggregateMultipleDiagram': {
    name: 'Fruit Types Classification: Fleshy, Dry, Aggregate & Multiple',
    category: 'Plant Reproduction',
    description: 'Classification diagram of fruit types including fleshy, dry, aggregate, and multiple fruits with examples',
    dataRequired: [],
    usage: 'Best for fruit classification and seed dispersal education',
    examples: ['Fruit types', 'Fleshy fruit', 'Dry fruit', 'Aggregate fruit', 'Multiple fruit'],
    defaultOptions: {
        title: 'Fruit Types Classification',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'gibberellinAleuroneLayers_alphaAmylaseStarchMobilisationDiagram': {
    name: 'Gibberellin, Aleurone Layer & α-Amylase Starch Mobilisation',
    category: 'Plant Reproduction',
    description: 'Diagram of gibberellin signalling through aleurone layer to activate α-amylase for starch mobilisation during germination',
    dataRequired: [],
    usage: 'Best for seed germination and gibberellin signalling education',
    examples: ['Gibberellin', 'Aleurone layer', 'Alpha-amylase', 'Starch mobilisation', 'Germination'],
    defaultOptions: {
        title: 'Gibberellin–Aleurone–α-Amylase Cascade',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'mossLifeCycleGametophyteSporophyteDependencyDiagram': {
    name: 'Moss Life Cycle: Gametophyte & Sporophyte Dependency',
    category: 'Plant Reproduction',
    description: 'Life cycle diagram of moss showing gametophyte dominance and sporophyte dependency',
    dataRequired: [],
    usage: 'Best for bryophyte life cycle and plant evolution education',
    examples: ['Moss life cycle', 'Gametophyte', 'Sporophyte', 'Bryophyte', 'Alternation of generations'],
    defaultOptions: {
        title: 'Moss Life Cycle: Gametophyte & Sporophyte',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'annualBiennialPerennialLifeHistoryComparisonDiagram': {
    name: 'Annual, Biennial & Perennial Life History Comparison',
    category: 'Plant Reproduction',
    description: 'Comparative diagram of annual, biennial, and perennial plant life history strategies',
    dataRequired: [],
    usage: 'Best for plant life history and ecology education',
    examples: ['Annual', 'Biennial', 'Perennial', 'Life history', 'Plant strategy'],
    defaultOptions: {
        title: 'Annual, Biennial & Perennial Life Histories',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== PLANT HORMONES =====
'hormoneReceptorSignalTransductionGeneralPathwayDiagram': {
    name: 'Hormone Receptor Signal Transduction: General Pathway',
    category: 'Plant Hormones',
    description: 'General pathway diagram of plant hormone receptor binding and downstream signal transduction',
    dataRequired: [],
    usage: 'Best for plant hormone signalling overview education',
    examples: ['Hormone receptor', 'Signal transduction', 'Plant hormones', 'Receptor binding'],
    defaultOptions: {
        title: 'Hormone Receptor Signal Transduction',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'auxinPolarTransportPINProteinApicalDominanceDiagram': {
    name: 'Auxin Polar Transport: PIN Protein & Apical Dominance',
    category: 'Plant Hormones',
    description: 'Diagram of auxin polar transport via PIN efflux carriers and its role in establishing apical dominance',
    dataRequired: [],
    usage: 'Best for auxin transport and plant architecture education',
    examples: ['Auxin', 'PIN protein', 'Polar transport', 'Apical dominance', 'Branching'],
    defaultOptions: {
        title: 'Auxin Polar Transport: PIN Proteins & Apical Dominance',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'gibberellinDELLARepressorDegradationStemElongationDiagram': {
    name: 'Gibberellin: DELLA Repressor Degradation & Stem Elongation',
    category: 'Plant Hormones',
    description: 'Mechanism diagram of gibberellin-induced DELLA protein degradation leading to stem elongation',
    dataRequired: [],
    usage: 'Best for gibberellin signalling and growth regulation education',
    examples: ['Gibberellin', 'DELLA repressor', 'Stem elongation', 'Proteasome', 'GID1'],
    defaultOptions: {
        title: 'Gibberellin: DELLA Degradation & Stem Elongation',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'cytokininAuxinRatioShootRootOrganogenesisTissueCultureDiagram': {
    name: 'Cytokinin/Auxin Ratio: Shoot/Root Organogenesis in Tissue Culture',
    category: 'Plant Hormones',
    description: 'Diagram showing how cytokinin-to-auxin ratio determines shoot or root organogenesis in tissue culture',
    dataRequired: [],
    usage: 'Best for tissue culture and hormone ratio education',
    examples: ['Cytokinin', 'Auxin', 'Ratio', 'Shoot organogenesis', 'Root organogenesis', 'Tissue culture'],
    defaultOptions: {
        title: 'Cytokinin/Auxin Ratio: Organogenesis in Culture',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'abaGuardCellSignallingPYRPYLSnRK2StomatalClosureDiagram': {
    name: 'ABA Guard Cell Signalling: PYR/PYL–SnRK2 Stomatal Closure',
    category: 'Plant Hormones',
    description: 'Molecular pathway diagram of ABA perception by PYR/PYL receptors and SnRK2 kinase activation leading to stomatal closure',
    dataRequired: [],
    usage: 'Best for ABA signalling and drought response education',
    examples: ['ABA', 'Guard cell', 'PYR/PYL', 'SnRK2', 'Stomatal closure', 'Drought'],
    defaultOptions: {
        title: 'ABA: PYR/PYL–SnRK2 Stomatal Closure Pathway',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'ethyleneYangCycleClimactericFruitRipeningTripleResponseDiagram': {
    name: 'Ethylene: Yang Cycle, Climacteric Fruit Ripening & Triple Response',
    category: 'Plant Hormones',
    description: 'Diagram of ethylene biosynthesis via the Yang cycle, climacteric fruit ripening, and the triple response in seedlings',
    dataRequired: [],
    usage: 'Best for ethylene biology and fruit ripening education',
    examples: ['Ethylene', 'Yang cycle', 'Climacteric ripening', 'Triple response', 'ACC synthase'],
    defaultOptions: {
        title: 'Ethylene: Yang Cycle, Ripening & Triple Response',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'brassinosteroidBRI1ReceptorBES1BZR1SignallingCellElongationDiagram': {
    name: 'Brassinosteroid: BRI1 Receptor, BES1/BZR1 Signalling & Cell Elongation',
    category: 'Plant Hormones',
    description: 'Signalling pathway diagram of brassinosteroid perception by BRI1 receptor and BES1/BZR1 transcription factor activation for cell elongation',
    dataRequired: [],
    usage: 'Best for brassinosteroid signalling and cell growth education',
    examples: ['Brassinosteroid', 'BRI1', 'BES1', 'BZR1', 'Cell elongation', 'Signalling'],
    defaultOptions: {
        title: 'Brassinosteroid: BRI1–BES1/BZR1 Signalling',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'jasmonateCOI1JAZRepressorWoundingDefenceGeneActivationDiagram': {
    name: 'Jasmonate: COI1–JAZ Repressor, Wounding & Defence Gene Activation',
    category: 'Plant Hormones',
    description: 'Pathway diagram of jasmonate signalling through COI1 receptor and JAZ repressor degradation to activate defence genes',
    dataRequired: [],
    usage: 'Best for jasmonate signalling and plant defence education',
    examples: ['Jasmonate', 'COI1', 'JAZ repressor', 'Defence genes', 'Wounding response'],
    defaultOptions: {
        title: 'Jasmonate: COI1–JAZ Repressor & Defence Activation',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'strigolactoneShootBranchingMycorrhizalSignallingRootExudateDiagram': {
    name: 'Strigolactone: Shoot Branching, Mycorrhizal Signalling & Root Exudate',
    category: 'Plant Hormones',
    description: 'Diagram of strigolactone roles in shoot branching inhibition, mycorrhizal symbiosis signalling, and root exudate function',
    dataRequired: [],
    usage: 'Best for strigolactone biology and symbiosis education',
    examples: ['Strigolactone', 'Shoot branching', 'Mycorrhizal signalling', 'Root exudate', 'Symbiosis'],
    defaultOptions: {
        title: 'Strigolactone: Branching, Mycorrhizal & Root Exudate',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'plantHormoneInteractionNetworkSummaryTableDiagram': {
    name: 'Plant Hormone Interaction Network Summary Table',
    category: 'Plant Hormones',
    description: 'Summary table and network diagram of plant hormone interactions, synergies, and antagonisms',
    dataRequired: [],
    usage: 'Best for plant hormone overview and interaction education',
    examples: ['Hormone interactions', 'Synergy', 'Antagonism', 'Plant hormones', 'Summary'],
    defaultOptions: {
        title: 'Plant Hormone Interaction Network & Summary',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== PLANT MOVEMENTS & TROPISMS =====
'tropismVsNasticMovementDirectionalVsNonDirectionalDiagram': {
    name: 'Tropism vs Nastic Movement: Directional vs Non-Directional',
    category: 'Plant Movements & Tropisms',
    description: 'Comparative diagram distinguishing tropistic (directional) and nastic (non-directional) plant movements',
    dataRequired: [],
    usage: 'Best for plant movements and stimulus-response education',
    examples: ['Tropism', 'Nastic movement', 'Directional', 'Non-directional', 'Stimulus-response'],
    defaultOptions: {
        title: 'Tropism vs Nastic Movement',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'darwinBoysenJensenWentColeoptileExperimentSequenceDiagram': {
    name: 'Darwin, Boysen-Jensen & Went Coleoptile Experiment Sequence',
    category: 'Plant Movements & Tropisms',
    description: 'Sequential diagram of the classic coleoptile experiments by Darwin, Boysen-Jensen, and Went establishing auxin phototropism',
    dataRequired: [],
    usage: 'Best for history of auxin discovery and phototropism education',
    examples: ['Coleoptile', 'Darwin', 'Boysen-Jensen', 'Went', 'Auxin', 'Phototropism'],
    defaultOptions: {
        title: 'Coleoptile Experiments: Darwin, Boysen-Jensen & Went',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'statolythColumellaCellAuxinRedistributionRootShootGravitropismDiagram': {
    name: 'Statolith Columella Cell, Auxin Redistribution & Root/Shoot Gravitropism',
    category: 'Plant Movements & Tropisms',
    description: 'Diagram of statolith sedimentation in columella cells and differential auxin redistribution in root and shoot gravitropism',
    dataRequired: [],
    usage: 'Best for gravitropism mechanism and root/shoot response education',
    examples: ['Statolith', 'Columella', 'Gravitropism', 'Auxin redistribution', 'Root gravitropism'],
    defaultOptions: {
        title: 'Statolith–Auxin Redistribution: Root & Shoot Gravitropism',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'tendrilContactCoilingMechanosensitiveCalciumSignallingDiagram': {
    name: 'Tendril Contact Coiling: Mechanosensitive Calcium Signalling',
    category: 'Plant Movements & Tropisms',
    description: 'Diagram of tendril contact coiling mechanism involving mechanosensitive ion channels and calcium signalling',
    dataRequired: [],
    usage: 'Best for thigmotropism and mechanosensing education',
    examples: ['Tendril', 'Thigmotropism', 'Mechanosensing', 'Calcium signalling', 'Coiling'],
    defaultOptions: {
        title: 'Tendril Coiling: Mechanosensitive Calcium Signalling',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'rootHydrotropismMoisureGradientABASignallingElongationZoneDiagram': {
    name: 'Root Hydrotropism: Moisture Gradient, ABA Signalling & Elongation Zone',
    category: 'Plant Movements & Tropisms',
    description: 'Diagram of root hydrotropism showing moisture gradient sensing, ABA signalling, and differential elongation',
    dataRequired: [],
    usage: 'Best for hydrotropism and root water sensing education',
    examples: ['Hydrotropism', 'Moisture gradient', 'ABA signalling', 'Root elongation', 'Water sensing'],
    defaultOptions: {
        title: 'Root Hydrotropism: Moisture Gradient & ABA Signalling',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'pollenTubeLUREPeptideCalciumGradientMicropyleGuidanceDiagram': {
    name: 'Pollen Tube: LURE Peptide, Calcium Gradient & Micropyle Guidance',
    category: 'Plant Movements & Tropisms',
    description: 'Diagram of pollen tube chemotropism showing LURE peptide attraction, calcium gradient, and micropyle guidance',
    dataRequired: [],
    usage: 'Best for pollen tube guidance and fertilisation education',
    examples: ['Pollen tube', 'LURE peptide', 'Calcium gradient', 'Micropyle', 'Chemotropism'],
    defaultOptions: {
        title: 'Pollen Tube Guidance: LURE, Calcium & Micropyle',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'thermotropismElectrotropismSkototropismComparisonDiagram': {
    name: 'Thermotropism, Electrotropism & Skototropism Comparison',
    category: 'Plant Movements & Tropisms',
    description: 'Comparative diagram of thermotropism, electrotropism, and skototropism as lesser-known plant tropisms',
    dataRequired: [],
    usage: 'Best for plant tropism diversity and stimulus-response education',
    examples: ['Thermotropism', 'Electrotropism', 'Skototropism', 'Tropisms', 'Plant movements'],
    defaultOptions: {
        title: 'Thermotropism, Electrotropism & Skototropism',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'phytochromePrPfrRedFarRedInterconversionShadeAvoidanceDiagram': {
    name: 'Phytochrome Pr/Pfr: Red/Far-Red Interconversion & Shade Avoidance',
    category: 'Plant Movements & Tropisms',
    description: 'Diagram of phytochrome Pr/Pfr interconversion under red and far-red light and its role in shade avoidance syndrome',
    dataRequired: [],
    usage: 'Best for phytochrome signalling and shade avoidance education',
    examples: ['Phytochrome', 'Pr', 'Pfr', 'Shade avoidance', 'Red light', 'Far-red light'],
    defaultOptions: {
        title: 'Phytochrome Pr/Pfr: Shade Avoidance',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'mimosaPudicaPulvinusThigmonastyVenusFlytrapActionPotentialDiagram': {
    name: 'Mimosa pudica Pulvinus Thigmonasty & Venus Flytrap Action Potential',
    category: 'Plant Movements & Tropisms',
    description: 'Diagram comparing Mimosa pudica pulvinus thigmonastic response and Venus flytrap action potential mechanism',
    dataRequired: [],
    usage: 'Best for rapid plant movement and nastic response education',
    examples: ['Mimosa pudica', 'Pulvinus', 'Thigmonasty', 'Venus flytrap', 'Action potential'],
    defaultOptions: {
        title: 'Mimosa Pulvinus & Venus Flytrap Action Potential',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'competingTropismsGravitropismHydrotropismIntegrationDiagram': {
    name: 'Competing Tropisms: Gravitropism & Hydrotropism Integration',
    category: 'Plant Movements & Tropisms',
    description: 'Diagram showing how competing gravitropic and hydrotropic signals are integrated in root orientation',
    dataRequired: [],
    usage: 'Best for tropism integration and root behaviour education',
    examples: ['Competing tropisms', 'Gravitropism', 'Hydrotropism', 'Integration', 'Root orientation'],
    defaultOptions: {
        title: 'Competing Tropisms: Gravitropism & Hydrotropism',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== PLANT ANATOMY (ADVANCED) =====
'transverseLongitudinalSectionPlanePrimarySecondaryBodyDiagram': {
    name: 'Transverse & Longitudinal Section Plane: Primary & Secondary Body',
    category: 'Plant Anatomy',
    description: 'Diagram showing transverse and longitudinal section planes through primary and secondary plant body',
    dataRequired: [],
    usage: 'Best for plant anatomy sectioning and body organisation education',
    examples: ['Transverse section', 'Longitudinal section', 'Primary body', 'Secondary body', 'Anatomy'],
    defaultOptions: {
        title: 'Section Planes: Primary & Secondary Plant Body',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'epidermisStomataGuardCellTrichomeCorkLenticellDiagram': {
    name: 'Epidermis: Stomata, Guard Cell, Trichome, Cork & Lenticel',
    category: 'Plant Anatomy',
    description: 'Comprehensive diagram of epidermal tissue features including stomata, guard cells, trichomes, cork, and lenticels',
    dataRequired: [],
    usage: 'Best for plant epidermis and surface tissue education',
    examples: ['Epidermis', 'Stomata', 'Trichome', 'Cork', 'Lenticel', 'Guard cell'],
    defaultOptions: {
        title: 'Plant Epidermis: Stomata, Trichomes & Lenticels',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'xylemVesselTracheidsPhloeSieveTubeCompanionCellUltrastructureDiagram': {
    name: 'Xylem Vessels & Tracheids / Phloem Sieve Tube & Companion Cell Ultrastructure',
    category: 'Plant Anatomy',
    description: 'Ultrastructure comparison diagram of xylem vessels and tracheids alongside phloem sieve tube elements and companion cells',
    dataRequired: [],
    usage: 'Best for vascular tissue ultrastructure and transport education',
    examples: ['Xylem vessels', 'Tracheids', 'Sieve tube', 'Companion cell', 'Vascular ultrastructure'],
    defaultOptions: {
        title: 'Xylem & Phloem Ultrastructure: Vessels, Tracheids & Sieve Tubes',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'parenchymaCollenchymaSclerenchymaSecretoryStructuresComparativeDiagram': {
    name: 'Parenchyma, Collenchyma, Sclerenchyma & Secretory Structures Comparative',
    category: 'Plant Anatomy',
    description: 'Comprehensive comparative diagram of all ground tissue types plus secretory structures in plants',
    dataRequired: [],
    usage: 'Best for plant tissue diversity and histology education',
    examples: ['Ground tissue', 'Parenchyma', 'Collenchyma', 'Sclerenchyma', 'Secretory structures'],
    defaultOptions: {
        title: 'Plant Tissues: Parenchyma to Secretory Structures',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'dicotMonocotRootCrossSectionEpidermisCortexEndodermisVascularDiagram': {
    name: 'Dicot & Monocot Root Cross-Section: Epidermis, Cortex, Endodermis & Vascular',
    category: 'Plant Anatomy',
    description: 'Comparative cross-section diagram of dicot and monocot roots showing epidermis, cortex, endodermis, and vascular tissue',
    dataRequired: [],
    usage: 'Best for root anatomy and dicot-monocot comparison education',
    examples: ['Root cross-section', 'Dicot root', 'Monocot root', 'Endodermis', 'Vascular bundle'],
    defaultOptions: {
        title: 'Dicot vs Monocot Root Cross-Sections',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'dicotVsMonocotStemCrossSectionEusteeleVsAtactosteleComparisonDiagram': {
    name: 'Dicot vs Monocot Stem Cross-Section: Eustele vs Atactostele',
    category: 'Plant Anatomy',
    description: 'Comparative cross-section diagram of dicot (eustele) and monocot (atactostele) stem vascular arrangements',
    dataRequired: [],
    usage: 'Best for stem anatomy and vascular arrangement education',
    examples: ['Stem cross-section', 'Eustele', 'Atactostele', 'Dicot stem', 'Monocot stem'],
    defaultOptions: {
        title: 'Dicot vs Monocot Stem: Eustele vs Atactostele',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'vascularCambiumSecondaryXylemPhloemBarkAnnualRingsDiagram': {
    name: 'Vascular Cambium: Secondary Xylem, Phloem, Bark & Annual Rings',
    category: 'Plant Anatomy',
    description: 'Diagram of vascular cambium activity producing secondary xylem and phloem with bark formation and annual ring development',
    dataRequired: [],
    usage: 'Best for secondary growth and wood anatomy education',
    examples: ['Vascular cambium', 'Secondary xylem', 'Secondary phloem', 'Bark', 'Annual rings'],
    defaultOptions: {
        title: 'Vascular Cambium: Secondary Growth & Annual Rings',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'c3VsC4LeafKranzAnatomyBundleSheathPalisadeSpongyDiagram': {
    name: 'C3 vs C4 Leaf: Kranz Anatomy, Bundle Sheath, Palisade & Spongy',
    category: 'Plant Anatomy',
    description: 'Comparative leaf anatomy diagram of C3 and C4 plants highlighting Kranz anatomy and bundle sheath differences',
    dataRequired: [],
    usage: 'Best for C3/C4 photosynthesis anatomy and Kranz anatomy education',
    examples: ['Kranz anatomy', 'Bundle sheath', 'C3 leaf', 'C4 leaf', 'Palisade', 'Spongy mesophyll'],
    defaultOptions: {
        title: 'C3 vs C4 Leaf: Kranz Anatomy & Bundle Sheath',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'monocotDicotGymnospermAnatomicalFeaturesComparisonTableDiagram': {
    name: 'Monocot, Dicot & Gymnosperm Anatomical Features Comparison Table',
    category: 'Plant Anatomy',
    description: 'Comparison table diagram of key anatomical features across monocots, dicots, and gymnosperms',
    dataRequired: [],
    usage: 'Best for plant group comparison and classification education',
    examples: ['Monocot', 'Dicot', 'Gymnosperm', 'Anatomical comparison', 'Classification'],
    defaultOptions: {
        title: 'Monocot, Dicot & Gymnosperm: Anatomical Comparison',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'xerophyteHydrophyteTransferCellStructureFunctionAdaptationDiagram': {
    name: 'Xerophyte & Hydrophyte Transfer Cell Structure, Function & Adaptation',
    category: 'Plant Anatomy',
    description: 'Comparative diagram of transfer cell structure and function in xerophyte and hydrophyte adaptation contexts',
    dataRequired: [],
    usage: 'Best for transfer cells and plant adaptation education',
    examples: ['Transfer cells', 'Xerophyte', 'Hydrophyte', 'Cell wall ingrowths', 'Adaptation'],
    defaultOptions: {
        title: 'Transfer Cells in Xerophyte & Hydrophyte Adaptations',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== CELL BIOLOGY (EXTENDED) =====
'cellTheoryHistoricalTimelineDiagram': {
    name: 'Cell Theory Historical Timeline',
    category: 'Cell Biology',
    description: 'Historical timeline diagram of the development of cell theory from Hooke to modern cell biology',
    dataRequired: [],
    usage: 'Best for history of biology and cell theory education',
    examples: ['Cell theory', 'History of biology', 'Hooke', 'Schleiden', 'Schwann', 'Virchow'],
    defaultOptions: {
        title: 'Cell Theory: Historical Timeline',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'fluidMosaicModelLabelledCrossSection': {
    name: 'Fluid Mosaic Model: Labelled Cross-Section',
    category: 'Cell Biology',
    description: 'Labelled cross-section diagram of the fluid mosaic model of the cell membrane',
    dataRequired: [],
    usage: 'Best for cell membrane structure and fluid mosaic model education',
    examples: ['Fluid mosaic model', 'Cell membrane', 'Phospholipid bilayer', 'Membrane proteins', 'Cholesterol'],
    defaultOptions: {
        title: 'Fluid Mosaic Model: Labelled Cross-Section',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'prokaryoticCellAnnotatedStructureDiagram': {
    name: 'Prokaryotic Cell: Annotated Structure',
    category: 'Cell Biology',
    description: 'Fully annotated diagram of prokaryotic cell structure showing all key components',
    dataRequired: [],
    usage: 'Best for prokaryotic cell biology education',
    examples: ['Prokaryotic cell', 'Bacteria', 'Cell wall', 'Nucleoid', 'Ribosome', 'Flagellum'],
    defaultOptions: {
        title: 'Prokaryotic Cell: Annotated Structure',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'nuclearEnvelopeAndPoreComplexCrossSection': {
    name: 'Nuclear Envelope & Pore Complex: Cross-Section',
    category: 'Cell Biology',
    description: 'Cross-section diagram of the nuclear envelope and nuclear pore complex structure',
    dataRequired: [],
    usage: 'Best for nuclear structure and nucleocytoplasmic transport education',
    examples: ['Nuclear envelope', 'Nuclear pore', 'Nucleocytoplasmic transport', 'NPC', 'Nucleus'],
    defaultOptions: {
        title: 'Nuclear Envelope & Pore Complex',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'eukaryoticOrganelleMapAndFunctionSummary': {
    name: 'Eukaryotic Organelle Map & Function Summary',
    category: 'Cell Biology',
    description: 'Map diagram of eukaryotic cell organelles with function summary for each organelle',
    dataRequired: [],
    usage: 'Best for eukaryotic cell biology and organelle function education',
    examples: ['Eukaryotic cell', 'Organelles', 'Function summary', 'Cell biology', 'Mitochondria'],
    defaultOptions: {
        title: 'Eukaryotic Organelle Map & Functions',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'chloroplastInternalMembraneSystemDiagram': {
    name: 'Chloroplast Internal Membrane System',
    category: 'Cell Biology',
    description: 'Detailed diagram of chloroplast internal membrane system including thylakoid stacks and stroma lamellae',
    dataRequired: [],
    usage: 'Best for chloroplast ultrastructure and photosynthesis education',
    examples: ['Chloroplast', 'Thylakoid', 'Granum', 'Stroma lamellae', 'Internal membranes'],
    defaultOptions: {
        title: 'Chloroplast Internal Membrane System',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'cytoskeletalFilamentsComparativeStructureChart': {
    name: 'Cytoskeletal Filaments: Comparative Structure Chart',
    category: 'Cell Biology',
    description: 'Comparative structure chart of cytoskeletal filaments: microtubules, actin filaments, and intermediate filaments',
    dataRequired: [],
    usage: 'Best for cytoskeleton biology education',
    examples: ['Cytoskeleton', 'Microtubules', 'Actin filaments', 'Intermediate filaments', 'Cell structure'],
    defaultOptions: {
        title: 'Cytoskeletal Filaments: Comparative Structure',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'plantCellWallLayersAndCompositionDiagram': {
    name: 'Plant Cell Wall Layers & Composition',
    category: 'Cell Biology',
    description: 'Diagram of plant cell wall layers including primary wall, secondary wall, and middle lamella with composition details',
    dataRequired: [],
    usage: 'Best for plant cell wall biology education',
    examples: ['Cell wall', 'Primary wall', 'Secondary wall', 'Cellulose', 'Middle lamella'],
    defaultOptions: {
        title: 'Plant Cell Wall: Layers & Composition',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'epithelialCellJunctionTypesAnnotatedDiagram': {
    name: 'Epithelial Cell Junction Types: Annotated',
    category: 'Cell Biology',
    description: 'Annotated diagram of epithelial cell junction types including tight junctions, desmosomes, and gap junctions',
    dataRequired: [],
    usage: 'Best for cell junction biology and epithelial tissue education',
    examples: ['Cell junctions', 'Tight junctions', 'Desmosomes', 'Gap junctions', 'Epithelial'],
    defaultOptions: {
        title: 'Epithelial Cell Junction Types',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'animalVsPlantVsProkaryoteCellComparisonChart': {
    name: 'Animal vs Plant vs Prokaryote Cell Comparison Chart',
    category: 'Cell Biology',
    description: 'Comprehensive comparison chart of animal, plant, and prokaryote cell features',
    dataRequired: [],
    usage: 'Best for cell type comparison and classification education',
    examples: ['Animal cell', 'Plant cell', 'Prokaryote', 'Cell comparison', 'Organelles'],
    defaultOptions: {
        title: 'Animal vs Plant vs Prokaryote Cell Comparison',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== BIOCHEMISTRY =====
'biologicalFunctionalGroupsAndBondTypesSummary': {
    name: 'Biological Functional Groups & Bond Types Summary',
    category: 'Biochemistry',
    description: 'Summary diagram of key biological functional groups and bond types found in biomolecules',
    dataRequired: [],
    usage: 'Best for biochemistry and organic chemistry foundation education',
    examples: ['Functional groups', 'Hydroxyl', 'Amino', 'Carboxyl', 'Peptide bond', 'Glycosidic bond'],
    defaultOptions: {
        title: 'Biological Functional Groups & Bond Types',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'waterHydrogenBondNetworkAndPropertiesDiagram': {
    name: 'Water Hydrogen Bond Network & Properties',
    category: 'Biochemistry',
    description: 'Diagram of water hydrogen bond network and associated emergent properties relevant to biology',
    dataRequired: [],
    usage: 'Best for water chemistry and biochemistry education',
    examples: ['Water', 'Hydrogen bonds', 'Cohesion', 'Adhesion', 'Heat capacity', 'Solvent properties'],
    defaultOptions: {
        title: 'Water: Hydrogen Bond Network & Properties',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'monosaccharideToPolysaccharidePolymerisationDiagram': {
    name: 'Monosaccharide to Polysaccharide Polymerisation',
    category: 'Biochemistry',
    description: 'Diagram of carbohydrate polymerisation from monosaccharides through disaccharides to polysaccharides',
    dataRequired: [],
    usage: 'Best for carbohydrate biochemistry education',
    examples: ['Monosaccharide', 'Disaccharide', 'Polysaccharide', 'Glycosidic bond', 'Condensation'],
    defaultOptions: {
        title: 'Carbohydrate Polymerisation: Monosaccharide to Polysaccharide',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'lipidClassesStructuralComparisonChart': {
    name: 'Lipid Classes: Structural Comparison Chart',
    category: 'Biochemistry',
    description: 'Structural comparison chart of major lipid classes including triglycerides, phospholipids, sterols, and waxes',
    dataRequired: [],
    usage: 'Best for lipid biochemistry and membrane biology education',
    examples: ['Lipids', 'Triglycerides', 'Phospholipids', 'Sterols', 'Waxes', 'Fatty acids'],
    defaultOptions: {
        title: 'Lipid Classes: Structural Comparison',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'proteinFourLevelsOfStructureDiagram': {
    name: 'Protein: Four Levels of Structure',
    category: 'Biochemistry',
    description: 'Diagram of protein primary, secondary, tertiary, and quaternary structure levels',
    dataRequired: [],
    usage: 'Best for protein biochemistry education',
    examples: ['Protein structure', 'Primary structure', 'Secondary structure', 'Tertiary', 'Quaternary'],
    defaultOptions: {
        title: 'Protein: Four Levels of Structure',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'dnaDoubleHelixBasePairingAndGeneticCodeTable': {
    name: 'DNA Double Helix, Base Pairing & Genetic Code Table',
    category: 'Biochemistry',
    description: 'Diagram of DNA double helix structure with base pairing rules and genetic code table',
    dataRequired: [],
    usage: 'Best for DNA structure and genetic code education',
    examples: ['DNA', 'Double helix', 'Base pairing', 'Genetic code', 'Codons'],
    defaultOptions: {
        title: 'DNA Double Helix, Base Pairing & Genetic Code',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'atpStructureAndHydrolysisEnergyReleaseDiagram': {
    name: 'ATP Structure & Hydrolysis Energy Release',
    category: 'Biochemistry',
    description: 'Diagram of ATP molecular structure and energy release during hydrolysis to ADP',
    dataRequired: [],
    usage: 'Best for ATP and bioenergetics education',
    examples: ['ATP', 'ADP', 'Hydrolysis', 'Energy release', 'Phosphate bonds'],
    defaultOptions: {
        title: 'ATP Structure & Hydrolysis',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'fatAndWaterSolubleVitaminRolesAndDeficiencyChart': {
    name: 'Fat & Water-Soluble Vitamin Roles & Deficiency Chart',
    category: 'Biochemistry',
    description: 'Comprehensive chart of fat-soluble and water-soluble vitamins with their roles and deficiency symptoms',
    dataRequired: [],
    usage: 'Best for vitamin biochemistry and nutrition education',
    examples: ['Vitamins', 'Fat-soluble', 'Water-soluble', 'Deficiency', 'Cofactors'],
    defaultOptions: {
        title: 'Vitamins: Roles & Deficiency Chart',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'haemoglobinOxygenDissociationCurveBohrEffectDiagram': {
    name: 'Haemoglobin Oxygen Dissociation Curve & Bohr Effect',
    category: 'Biochemistry',
    description: 'Sigmoidal oxygen dissociation curve for haemoglobin with Bohr effect shifts illustrated',
    dataRequired: [],
    usage: 'Best for haemoglobin and respiratory physiology education',
    examples: ['Haemoglobin', 'Oxygen dissociation curve', 'Bohr effect', 'Cooperative binding', 'Saturation'],
    defaultOptions: {
        title: 'Haemoglobin O2 Dissociation Curve & Bohr Effect',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'bileSynthesisAndLipoproteinTransportPathwayDiagram': {
    name: 'Bile Synthesis & Lipoprotein Transport Pathway',
    category: 'Biochemistry',
    description: 'Pathway diagram of bile acid synthesis and lipoprotein transport in lipid metabolism',
    dataRequired: [],
    usage: 'Best for lipid metabolism and liver biochemistry education',
    examples: ['Bile synthesis', 'Lipoprotein', 'LDL', 'HDL', 'Lipid metabolism', 'Cholesterol'],
    defaultOptions: {
        title: 'Bile Synthesis & Lipoprotein Transport',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'freeEnergyThermodynamicsAnabolismCatabolismDiagram': {
    name: 'Free Energy, Thermodynamics: Anabolism & Catabolism',
    category: 'Biochemistry',
    description: 'Diagram relating free energy and thermodynamics to anabolic and catabolic metabolic pathways',
    dataRequired: [],
    usage: 'Best for metabolic thermodynamics and bioenergetics education',
    examples: ['Free energy', 'Thermodynamics', 'Anabolism', 'Catabolism', 'ΔG', 'Metabolism'],
    defaultOptions: {
        title: 'Free Energy: Anabolism & Catabolism',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== METABOLISM =====
'glycolysisKrebsEtcChemiosmosisIntegratedPathwayMap': {
    name: 'Glycolysis, Krebs, ETC & Chemiosmosis: Integrated Pathway Map',
    category: 'Metabolism',
    description: 'Integrated pathway map linking glycolysis, Krebs cycle, electron transport chain, and chemiosmosis',
    dataRequired: [],
    usage: 'Best for cellular respiration overview education',
    examples: ['Glycolysis', 'Krebs cycle', 'ETC', 'Chemiosmosis', 'Cellular respiration', 'ATP'],
    defaultOptions: {
        title: 'Cellular Respiration: Integrated Pathway Map',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'lightReactionsCalvinCycleChloroplastCompartmentDiagram': {
    name: 'Light Reactions & Calvin Cycle: Chloroplast Compartment',
    category: 'Metabolism',
    description: 'Compartmentalised chloroplast diagram showing light reactions in thylakoid and Calvin cycle in stroma',
    dataRequired: [],
    usage: 'Best for photosynthesis compartmentalisation education',
    examples: ['Light reactions', 'Calvin cycle', 'Thylakoid', 'Stroma', 'Chloroplast compartments'],
    defaultOptions: {
        title: 'Light Reactions & Calvin Cycle: Chloroplast Compartments',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== MOLECULAR BIOLOGY =====
'semiconservativeReplicationForkLeadingLaggingStrandDiagram': {
    name: 'Semiconservative Replication: Fork, Leading & Lagging Strand',
    category: 'Molecular Biology',
    description: 'Diagram of semiconservative DNA replication showing replication fork, leading strand, and lagging strand synthesis',
    dataRequired: [],
    usage: 'Best for DNA replication mechanism education',
    examples: ['DNA replication', 'Replication fork', 'Leading strand', 'Lagging strand', 'Okazaki fragments'],
    defaultOptions: {
        title: 'DNA Replication: Fork, Leading & Lagging Strands',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'eukaryoticTranscriptionPreMrnaProcessingDiagram': {
    name: 'Eukaryotic Transcription & Pre-mRNA Processing',
    category: 'Molecular Biology',
    description: 'Diagram of eukaryotic transcription and pre-mRNA processing including capping, splicing, and polyadenylation',
    dataRequired: [],
    usage: 'Best for transcription and RNA processing education',
    examples: ['Transcription', 'Pre-mRNA', 'Splicing', '5 cap', 'Poly-A tail', 'Intron'],
    defaultOptions: {
        title: 'Eukaryotic Transcription & Pre-mRNA Processing',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'ribosomeABPSitesTranslationElongationCycleDiagram': {
    name: 'Ribosome A/B/P Sites & Translation Elongation Cycle',
    category: 'Molecular Biology',
    description: 'Diagram of ribosome A, P, and E sites during the translation elongation cycle',
    dataRequired: [],
    usage: 'Best for translation and ribosome function education',
    examples: ['Ribosome', 'A site', 'P site', 'E site', 'Translation', 'Elongation'],
    defaultOptions: {
        title: 'Ribosome Sites & Translation Elongation Cycle',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== CELL SIGNALLING =====
'secretoryPathwayERGolgiVesicleDestinationFlowchart': {
    name: 'Secretory Pathway: ER → Golgi → Vesicle Destination Flowchart',
    category: 'Cell Signalling',
    description: 'Flowchart of the secretory pathway from endoplasmic reticulum through Golgi to final vesicle destinations',
    dataRequired: [],
    usage: 'Best for protein trafficking and secretory pathway education',
    examples: ['Secretory pathway', 'ER', 'Golgi', 'Vesicle', 'Protein trafficking', 'Exocytosis'],
    defaultOptions: {
        title: 'Secretory Pathway: ER → Golgi → Vesicle Destinations',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'gpcrRtkSecondMessengerCascadeComparisonDiagram': {
    name: 'GPCR & RTK Second Messenger Cascade Comparison',
    category: 'Cell Signalling',
    description: 'Comparative diagram of GPCR and receptor tyrosine kinase second messenger signalling cascades',
    dataRequired: [],
    usage: 'Best for cell signalling and receptor pharmacology education',
    examples: ['GPCR', 'RTK', 'Second messenger', 'cAMP', 'MAPK', 'Signal transduction'],
    defaultOptions: {
        title: 'GPCR vs RTK: Second Messenger Cascades',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'intrinsicExtrinsicApoptosisPathwayCaspaseCascadeDiagram': {
    name: 'Intrinsic & Extrinsic Apoptosis Pathway: Caspase Cascade',
    category: 'Cell Signalling',
    description: 'Diagram of intrinsic and extrinsic apoptosis pathways converging on caspase cascade activation',
    dataRequired: [],
    usage: 'Best for apoptosis and programmed cell death education',
    examples: ['Apoptosis', 'Intrinsic pathway', 'Extrinsic pathway', 'Caspase', 'Bcl-2', 'Cytochrome c'],
    defaultOptions: {
        title: 'Apoptosis Pathways: Caspase Cascade',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'cellularMetabolismOrganSystemIntegrationSummaryDiagram': {
    name: 'Cellular Metabolism & Organ System Integration Summary',
    category: 'Cell Signalling',
    description: 'Summary diagram integrating cellular metabolic pathways with organ system-level metabolic coordination',
    dataRequired: [],
    usage: 'Best for integrative physiology and metabolism education',
    examples: ['Metabolism integration', 'Organ systems', 'Liver', 'Muscle', 'Adipose', 'Metabolic coordination'],
    defaultOptions: {
        title: 'Cellular Metabolism & Organ System Integration',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'signallingDistanceTypesEndocrineParacrineContactDiagram': {
    name: 'Signalling Distance Types: Endocrine, Paracrine & Contact',
    category: 'Cell Signalling',
    description: 'Diagram comparing endocrine, paracrine, autocrine, and contact-dependent signalling by distance and mechanism',
    dataRequired: [],
    usage: 'Best for cell communication and signalling overview education',
    examples: ['Endocrine signalling', 'Paracrine', 'Autocrine', 'Contact signalling', 'Cell communication'],
    defaultOptions: {
        title: 'Signalling Distance Types: Endocrine to Contact',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'gpcrRtkLigandGatedChannelReceptorClassesDiagram': {
    name: 'GPCR, RTK & Ligand-Gated Channel Receptor Classes',
    category: 'Cell Signalling',
    description: 'Comparative diagram of major receptor classes: GPCRs, receptor tyrosine kinases, and ligand-gated ion channels',
    dataRequired: [],
    usage: 'Best for receptor pharmacology and cell signalling education',
    examples: ['GPCR', 'RTK', 'Ligand-gated channel', 'Receptor classes', 'Pharmacology'],
    defaultOptions: {
        title: 'Receptor Classes: GPCR, RTK & Ligand-Gated Channels',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'nuclearHormoneReceptorDnaBindingTranscriptionActivationDiagram': {
    name: 'Nuclear Hormone Receptor: DNA Binding & Transcription Activation',
    category: 'Cell Signalling',
    description: 'Diagram of nuclear hormone receptor mechanism including ligand binding, DNA binding, and transcription activation',
    dataRequired: [],
    usage: 'Best for nuclear receptor signalling and endocrinology education',
    examples: ['Nuclear receptor', 'Hormone response element', 'Transcription activation', 'Steroid hormone', 'DNA binding'],
    defaultOptions: {
        title: 'Nuclear Hormone Receptor: DNA Binding & Transcription',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'campIp3CalciumDagSecondMessengerNetworkDiagram': {
    name: 'cAMP, IP3, Calcium & DAG Second Messenger Network',
    category: 'Cell Signalling',
    description: 'Network diagram of major second messengers including cAMP, IP3, calcium, and DAG and their downstream targets',
    dataRequired: [],
    usage: 'Best for second messenger systems and signalling education',
    examples: ['cAMP', 'IP3', 'Calcium', 'DAG', 'PKA', 'PKC', 'Second messengers'],
    defaultOptions: {
        title: 'cAMP, IP3, Ca2+ & DAG Second Messenger Network',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'actionPotentialPhasesIonChannelGatingDiagram': {
    name: 'Action Potential Phases & Ion Channel Gating',
    category: 'Cell Signalling',
    description: 'Diagram of action potential phases with corresponding ion channel gating events for Na+ and K+ channels',
    dataRequired: [],
    usage: 'Best for neurophysiology and action potential education',
    examples: ['Action potential', 'Depolarisation', 'Repolarisation', 'Ion channels', 'Na+', 'K+'],
    defaultOptions: {
        title: 'Action Potential Phases & Ion Channel Gating',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'hypothalamicPituitaryAxisNegativeFeedbackLoopDiagram': {
    name: 'Hypothalamic–Pituitary Axis: Negative Feedback Loop',
    category: 'Cell Signalling',
    description: 'Diagram of hypothalamic-pituitary axis with negative feedback loop regulation of hormone secretion',
    dataRequired: [],
    usage: 'Best for endocrinology and neuroendocrine regulation education',
    examples: ['Hypothalamus', 'Pituitary', 'Negative feedback', 'HPA axis', 'Hormone regulation'],
    defaultOptions: {
        title: 'Hypothalamic–Pituitary Axis: Negative Feedback',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'cytokineNetworkTCellActivationTwoSignalDiagram': {
    name: 'Cytokine Network & T Cell Activation: Two-Signal Model',
    category: 'Cell Signalling',
    description: 'Diagram of cytokine network and two-signal model of T cell activation including TCR and co-stimulatory signals',
    dataRequired: [],
    usage: 'Best for T cell immunology and cytokine signalling education',
    examples: ['T cell activation', 'Two-signal model', 'Cytokines', 'TCR', 'Co-stimulation', 'CD28'],
    defaultOptions: {
        title: 'Cytokine Network & T Cell Activation: Two Signals',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'wntNotchHedgehogPathwaysComparisonDiagram': {
    name: 'Wnt, Notch & Hedgehog Pathways Comparison',
    category: 'Cell Signalling',
    description: 'Comparative pathway diagram of Wnt, Notch, and Hedgehog developmental signalling pathways',
    dataRequired: [],
    usage: 'Best for developmental biology and cancer signalling education',
    examples: ['Wnt pathway', 'Notch pathway', 'Hedgehog pathway', 'Developmental signalling', 'β-catenin'],
    defaultOptions: {
        title: 'Wnt, Notch & Hedgehog Pathways Comparison',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'signalConvergenceDivergenceFeedbackLoopNetworkDiagram': {
    name: 'Signal Convergence, Divergence & Feedback Loop Network',
    category: 'Cell Signalling',
    description: 'Network diagram illustrating signal convergence, divergence, and feedback loop organisation in cell signalling',
    dataRequired: [],
    usage: 'Best for systems biology and signalling network education',
    examples: ['Signal convergence', 'Signal divergence', 'Feedback loops', 'Signalling network', 'Systems biology'],
    defaultOptions: {
        title: 'Signal Convergence, Divergence & Feedback Networks',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'raasCardiacConductionGutEntericSystemCommunicationDiagram': {
    name: 'RAAS, Cardiac Conduction & Gut Enteric System Communication',
    category: 'Cell Signalling',
    description: 'Integrative diagram of RAAS, cardiac conduction, and enteric nervous system communication',
    dataRequired: [],
    usage: 'Best for integrative physiology and organ system signalling education',
    examples: ['RAAS', 'Cardiac conduction', 'Enteric system', 'Organ communication', 'Integrative physiology'],
    defaultOptions: {
        title: 'RAAS, Cardiac Conduction & Enteric System Communication',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== MEMBRANE TRANSPORT =====
'electrochemicalGradientNernstEquationIonDrivingForceDiagram': {
    name: 'Electrochemical Gradient, Nernst Equation & Ion Driving Force',
    category: 'Membrane Transport',
    description: 'Diagram of electrochemical gradient components and Nernst equation for calculating ionic driving force',
    dataRequired: [],
    usage: 'Best for membrane potential and ion transport education',
    examples: ['Electrochemical gradient', 'Nernst equation', 'Ion driving force', 'Membrane potential', 'Equilibrium potential'],
    defaultOptions: {
        title: 'Electrochemical Gradient & Nernst Equation',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'simpleDiffusionOsmosisAquaporinFacilitatedDiffusionComparisonDiagram': {
    name: 'Simple Diffusion, Osmosis, Aquaporin & Facilitated Diffusion Comparison',
    category: 'Membrane Transport',
    description: 'Comparative diagram of simple diffusion, osmosis, aquaporin-mediated, and facilitated diffusion across membranes',
    dataRequired: [],
    usage: 'Best for membrane transport mechanisms education',
    examples: ['Simple diffusion', 'Osmosis', 'Aquaporin', 'Facilitated diffusion', 'Membrane transport'],
    defaultOptions: {
        title: 'Membrane Transport: Diffusion, Osmosis & Aquaporins',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'naKAtpaseSymporterAntiporterPrimarySecondaryActiveTransportDiagram': {
    name: 'Na+/K+ ATPase, Symporter & Antiporter: Primary & Secondary Active Transport',
    category: 'Membrane Transport',
    description: 'Diagram of Na+/K+ ATPase as primary active transport and its role in driving symporter and antiporter secondary active transport',
    dataRequired: [],
    usage: 'Best for active transport and ion pump education',
    examples: ['Na/K ATPase', 'Symporter', 'Antiporter', 'Primary active transport', 'Secondary active transport'],
    defaultOptions: {
        title: 'Na+/K+ ATPase, Symporters & Antiporters',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'endocytosisExocytosisSnareVesicleFusionPathwayDiagram': {
    name: 'Endocytosis, Exocytosis & SNARE Vesicle Fusion Pathway',
    category: 'Membrane Transport',
    description: 'Pathway diagram of endocytosis, exocytosis, and SNARE complex-mediated vesicle fusion',
    dataRequired: [],
    usage: 'Best for vesicular transport and membrane trafficking education',
    examples: ['Endocytosis', 'Exocytosis', 'SNARE', 'Vesicle fusion', 'Membrane trafficking'],
    defaultOptions: {
        title: 'Endocytosis, Exocytosis & SNARE Vesicle Fusion',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'polarisedEpithelialCellApicalBasolateralTransportersDiagram': {
    name: 'Polarised Epithelial Cell: Apical & Basolateral Transporters',
    category: 'Membrane Transport',
    description: 'Diagram of polarised epithelial cell showing distinct apical and basolateral transporter distributions',
    dataRequired: [],
    usage: 'Best for epithelial physiology and transepithelial transport education',
    examples: ['Polarised epithelial cell', 'Apical transporters', 'Basolateral transporters', 'Transepithelial transport'],
    defaultOptions: {
        title: 'Polarised Epithelial Cell: Apical & Basolateral Transporters',
        type: 'generic',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},


// ===== ATP / ENERGY METABOLISM =====
'atpAdpEnergyChargeHomeostasisCellularConcentrationDiagram': {
    name: 'ATP/ADP Energy Charge Homeostasis',
    category: 'Energy Metabolism',
    description: 'ATP/ADP/AMP ratios, energy charge calculation, and cellular concentration homeostasis',
    dataRequired: [],
    usage: 'Best for energy metabolism and cellular bioenergetics',
    examples: ['Energy charge', 'ATP homeostasis', 'Adenylate kinase'],
    defaultOptions: {
        title: 'ATP/ADP Energy Charge & Cellular Concentration',
        showLabels: true,
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'cellTypeAtpDemandMitochondrialDensityComparisonDiagram': {
    name: 'Cell Type ATP Demand & Mitochondrial Density',
    category: 'Energy Metabolism',
    description: 'Comparison of ATP demand and mitochondrial density across different cell types',
    dataRequired: [],
    usage: 'Best for comparative cell biology and bioenergetics',
    examples: ['Mitochondrial density', 'ATP demand', 'Cell types'],
    defaultOptions: {
        title: 'Cell Type ATP Demand vs Mitochondrial Density',
        showLabels: true,
        width: 850,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'pfk1AllostericRegulationAmpAtpCitrateSignallingDiagram': {
    name: 'PFK-1 Allosteric Regulation',
    category: 'Glycolysis & Regulation',
    description: 'PFK-1 allosteric regulation by AMP, ATP, and citrate signalling',
    dataRequired: [],
    usage: 'Best for glycolytic regulation and enzyme kinetics',
    examples: ['PFK-1', 'Allosteric regulation', 'Glycolysis control'],
    defaultOptions: {
        title: 'PFK-1 Allosteric Regulation: AMP/ATP/Citrate',
        showLabels: true,
        width: 800,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'cyanideEtcBlockadeAtpDepletionCellDeathCascadeDiagram': {
    name: 'Cyanide ETC Blockade & Cell Death Cascade',
    category: 'Electron Transport Chain',
    description: 'Cyanide-induced ETC blockade, ATP depletion, and downstream cell death cascade',
    dataRequired: [],
    usage: 'Best for toxicology, ETC inhibition, and cell death pathways',
    examples: ['Cyanide toxicity', 'ETC inhibition', 'ATP depletion'],
    defaultOptions: {
        title: 'Cyanide ETC Blockade → ATP Depletion → Cell Death',
        showLabels: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'atpSynthaseFTypeVTypeATypeEvolutionaryConservationDiagram': {
    name: 'ATP Synthase F/V/A-Type Evolutionary Conservation',
    category: 'Electron Transport Chain',
    description: 'Comparison of F-type, V-type, and A-type ATP synthases and their evolutionary conservation',
    dataRequired: [],
    usage: 'Best for evolutionary biochemistry and ATP synthase diversity',
    examples: ['ATP synthase', 'F-type', 'V-type', 'Evolutionary conservation'],
    defaultOptions: {
        title: 'ATP Synthase F/V/A-Type Evolutionary Conservation',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== GLYCOLYSIS =====
'glycolysisOverviewCytosolLocationTwoPhasesFlowchartDiagram': {
    name: 'Glycolysis Overview: Cytosol Location & Two Phases',
    category: 'Glycolysis',
    description: 'Flowchart overview of glycolysis showing cytosol location and investment/payoff phases',
    dataRequired: [],
    usage: 'Best for introductory glycolysis teaching',
    examples: ['Glycolysis overview', 'Investment phase', 'Payoff phase'],
    defaultOptions: {
        title: 'Glycolysis Overview: Location & Two Phases',
        showLabels: true,
        width: 750,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'glycolysisSteps1to5SubstrateProductEnzymeAtpInvestmentDiagram': {
    name: 'Glycolysis Steps 1–5: Investment Phase',
    category: 'Glycolysis',
    description: 'Detailed steps 1–5 of glycolysis showing substrates, products, enzymes, and ATP investment',
    dataRequired: [],
    usage: 'Best for detailed glycolysis step-by-step teaching',
    examples: ['Glycolysis steps 1-5', 'ATP investment', 'Hexokinase', 'PFK-1'],
    defaultOptions: {
        title: 'Glycolysis Steps 1–5: Substrate/Product/Enzyme/ATP Investment',
        showLabels: true,
        width: 800,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'glycolysisSteps6to10NadhAtpYieldSubstrateLevelPhosphorylationDiagram': {
    name: 'Glycolysis Steps 6–10: Payoff Phase',
    category: 'Glycolysis',
    description: 'Detailed steps 6–10 of glycolysis showing NADH/ATP yield and substrate-level phosphorylation',
    dataRequired: [],
    usage: 'Best for glycolysis payoff phase and energy yield teaching',
    examples: ['Glycolysis steps 6-10', 'NADH yield', 'Substrate-level phosphorylation'],
    defaultOptions: {
        title: 'Glycolysis Steps 6–10: NADH/ATP Yield & Substrate-Level Phosphorylation',
        showLabels: true,
        width: 800,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'grossVsNetAtpGlycolysisNadhFateAerobicAnaerobicComparisonDiagram': {
    name: 'Gross vs Net ATP in Glycolysis',
    category: 'Glycolysis',
    description: 'Comparison of gross vs net ATP from glycolysis, NADH fate under aerobic and anaerobic conditions',
    dataRequired: [],
    usage: 'Best for ATP accounting and aerobic/anaerobic comparison',
    examples: ['Net ATP', 'NADH fate', 'Aerobic vs anaerobic'],
    defaultOptions: {
        title: 'Gross vs Net ATP in Glycolysis: Aerobic/Anaerobic NADH Fate',
        showLabels: true,
        width: 850,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'pfk1HexokinasePyruvateKinaseAllostericRegulationSignallingDiagram': {
    name: 'PFK-1, Hexokinase & Pyruvate Kinase Allosteric Regulation',
    category: 'Glycolysis',
    description: 'Combined allosteric regulation of PFK-1, hexokinase, and pyruvate kinase with signalling inputs',
    dataRequired: [],
    usage: 'Best for glycolytic enzyme regulation overview',
    examples: ['Hexokinase', 'Pyruvate kinase', 'Allosteric control'],
    defaultOptions: {
        title: 'PFK-1/Hexokinase/Pyruvate Kinase Allosteric Regulation',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'pyruvateMetabolicBranchpointAerobicLactateEthanolGluconeogenesisDiagram': {
    name: 'Pyruvate Metabolic Branchpoint',
    category: 'Glycolysis',
    description: 'Pyruvate as a metabolic branchpoint leading to aerobic oxidation, lactate, ethanol, or gluconeogenesis',
    dataRequired: [],
    usage: 'Best for metabolic fate of pyruvate teaching',
    examples: ['Pyruvate fate', 'Lactate', 'Gluconeogenesis', 'Acetyl-CoA'],
    defaultOptions: {
        title: 'Pyruvate Metabolic Branchpoint: Aerobic/Lactate/Ethanol/Gluconeogenesis',
        showLabels: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'fructoseGalactoseMannoseGlycolysisEntryPointsLeloirPathwayDiagram': {
    name: 'Fructose, Galactose & Mannose Glycolysis Entry Points',
    category: 'Glycolysis',
    description: 'Entry points of fructose, galactose, and mannose into glycolysis including the Leloir pathway',
    dataRequired: [],
    usage: 'Best for sugar metabolism and alternative glycolytic substrates',
    examples: ['Fructose metabolism', 'Galactose', 'Leloir pathway'],
    defaultOptions: {
        title: 'Fructose/Galactose/Mannose Glycolysis Entry Points & Leloir Pathway',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'glycolyticIntermediatesBranchpointsPppGlycogenLipidAminoAcidDiagram': {
    name: 'Glycolytic Intermediates & Branchpoints',
    category: 'Glycolysis',
    description: 'Glycolytic intermediates as branchpoints feeding PPP, glycogen synthesis, lipid, and amino acid pathways',
    dataRequired: [],
    usage: 'Best for metabolic integration and glycolytic branchpoints',
    examples: ['Pentose phosphate pathway', 'Glycogen synthesis', 'Metabolic integration'],
    defaultOptions: {
        title: 'Glycolytic Intermediates: PPP/Glycogen/Lipid/Amino Acid Branchpoints',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'warburgEffectCancerCellAerobicGlycolysisLdhaHif1aPkm2Diagram': {
    name: 'Warburg Effect: Cancer Cell Aerobic Glycolysis',
    category: 'Glycolysis',
    description: 'Warburg effect showing aerobic glycolysis in cancer cells with LDHA, HIF-1α, and PKM2 roles',
    dataRequired: [],
    usage: 'Best for cancer metabolism and the Warburg effect',
    examples: ['Warburg effect', 'HIF-1α', 'PKM2', 'Cancer metabolism'],
    defaultOptions: {
        title: 'Warburg Effect: Aerobic Glycolysis in Cancer (LDHA/HIF-1α/PKM2)',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'empVsEdVsPhosphoketolasePathwayComparativeMicrobiologyDiagram': {
    name: 'EMP vs ED vs Phosphoketolase Pathway Comparison',
    category: 'Glycolysis',
    description: 'Comparative microbiology of Embden-Meyerhof-Parnas, Entner-Doudoroff, and Phosphoketolase pathways',
    dataRequired: [],
    usage: 'Best for microbial metabolism and alternative glycolytic pathways',
    examples: ['Entner-Doudoroff', 'EMP pathway', 'Phosphoketolase'],
    defaultOptions: {
        title: 'EMP vs ED vs Phosphoketolase Pathway: Comparative Microbiology',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

// ===== KREBS CYCLE =====
'krebsCycleOverviewMitochondrialMatrixLocationOaaAcetylCoaInputDiagram': {
    name: 'Krebs Cycle Overview',
    category: 'Krebs Cycle',
    description: 'Krebs cycle overview showing mitochondrial matrix location, OAA and acetyl-CoA inputs',
    dataRequired: [],
    usage: 'Best for introductory Krebs cycle teaching',
    examples: ['Krebs cycle', 'TCA cycle', 'Acetyl-CoA', 'OAA'],
    defaultOptions: {
        title: 'Krebs Cycle Overview: Mitochondrial Matrix, OAA & Acetyl-CoA Input',
        showLabels: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'pdcE1E2E3SubunitCofactorMechanismPyruvateToAcetylCoaDiagram': {
    name: 'Pyruvate Dehydrogenase Complex Mechanism',
    category: 'Krebs Cycle',
    description: 'PDC E1/E2/E3 subunit structure, cofactors, and step-by-step mechanism for pyruvate → acetyl-CoA',
    dataRequired: [],
    usage: 'Best for PDC mechanism and cofactor roles',
    examples: ['Pyruvate dehydrogenase', 'PDC', 'TPP cofactor', 'Lipoamide'],
    defaultOptions: {
        title: 'PDC E1/E2/E3 Subunit Cofactor Mechanism: Pyruvate → Acetyl-CoA',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'krebsCycleEightStepsEnzymeSubstrateProductCofactorCircularDiagram': {
    name: 'Krebs Cycle: Eight Steps Detail',
    category: 'Krebs Cycle',
    description: 'All eight steps of the Krebs cycle with enzymes, substrates, products, and cofactors in circular format',
    dataRequired: [],
    usage: 'Best for detailed step-by-step Krebs cycle teaching',
    examples: ['Krebs cycle steps', 'Citrate synthase', 'Isocitrate dehydrogenase'],
    defaultOptions: {
        title: 'Krebs Cycle: 8 Steps — Enzyme/Substrate/Product/Cofactor',
        showLabels: true,
        width: 900,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'krebsCyclePerTurnPerGlucoseNadhFadh2GtpCo2YieldAccountingDiagram': {
    name: 'Krebs Cycle Yield Accounting',
    category: 'Krebs Cycle',
    description: 'NADH, FADH2, GTP, and CO2 yield per turn and per glucose molecule through the Krebs cycle',
    dataRequired: [],
    usage: 'Best for Krebs cycle ATP yield and cofactor accounting',
    examples: ['NADH yield', 'FADH2', 'GTP', 'CO2 yield per glucose'],
    defaultOptions: {
        title: 'Krebs Cycle Yield: NADH/FADH2/GTP/CO2 per Turn & per Glucose',
        showLabels: true,
        width: 850,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'krebsCycleAllostericRegulationCitrateSynthaseIdhAlphaKgdhcCalciumAtpNadhDiagram': {
    name: 'Krebs Cycle Allosteric Regulation',
    category: 'Krebs Cycle',
    description: 'Allosteric regulation of citrate synthase, IDH, and α-KGDHC by calcium, ATP, and NADH',
    dataRequired: [],
    usage: 'Best for Krebs cycle regulation and metabolic control',
    examples: ['Citrate synthase', 'Isocitrate dehydrogenase', 'NADH inhibition', 'Calcium activation'],
    defaultOptions: {
        title: 'Krebs Cycle Allosteric Regulation: Citrate Synthase/IDH/α-KGDHC',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'amphibolicKrebsCycleCataplerosisBiosynthesisAnaplerosis_branchpointDiagram': {
    name: 'Amphibolic Krebs Cycle: Cataplerosis & Anaplerosis',
    category: 'Krebs Cycle',
    description: 'Krebs cycle as amphibolic pathway showing cataplerosis, biosynthesis outputs, and anaplerotic branchpoints',
    dataRequired: [],
    usage: 'Best for metabolic integration and the amphibolic nature of the TCA cycle',
    examples: ['Anaplerosis', 'Cataplerosis', 'Amphibolic pathway', 'Biosynthesis'],
    defaultOptions: {
        title: 'Amphibolic Krebs Cycle: Cataplerosis/Biosynthesis/Anaplerosis Branchpoints',
        showLabels: true,
        width: 950,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'krebsCycleCarbohydrateFatProteinNitrogenMetabolismConvergenceDiagram': {
    name: 'Krebs Cycle: Metabolic Convergence Hub',
    category: 'Krebs Cycle',
    description: 'Krebs cycle as convergence point for carbohydrate, fat, protein, and nitrogen metabolism',
    dataRequired: [],
    usage: 'Best for metabolic integration overview',
    examples: ['Metabolic integration', 'Fat catabolism', 'Amino acid catabolism', 'TCA convergence'],
    defaultOptions: {
        title: 'Krebs Cycle: Carbohydrate/Fat/Protein/Nitrogen Metabolism Convergence',
        showLabels: true,
        width: 950,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'oncometaboliteSuccinateFumarate2HgDioxygenaseInhibitionEpigeneticDysregulationDiagram': {
    name: 'Oncometabolites: Succinate, Fumarate & 2-HG',
    category: 'Krebs Cycle',
    description: 'Oncometabolite accumulation of succinate, fumarate, and 2-HG causing dioxygenase inhibition and epigenetic dysregulation',
    dataRequired: [],
    usage: 'Best for cancer metabolism and oncometabolite mechanisms',
    examples: ['Oncometabolites', '2-hydroxyglutarate', 'IDH mutation', 'Epigenetic dysregulation'],
    defaultOptions: {
        title: 'Oncometabolites: Succinate/Fumarate/2-HG → Dioxygenase Inhibition & Epigenetic Dysregulation',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'glyoxylateCycleIsocitrateLyaseMalateSynthaseComparisonTcaDiagram': {
    name: 'Glyoxylate Cycle vs TCA Cycle',
    category: 'Krebs Cycle',
    description: 'Glyoxylate cycle with isocitrate lyase and malate synthase compared to the standard TCA cycle',
    dataRequired: [],
    usage: 'Best for plant/microorganism metabolism and glyoxylate cycle',
    examples: ['Glyoxylate cycle', 'Isocitrate lyase', 'Malate synthase', 'Fat to sugar'],
    defaultOptions: {
        title: 'Glyoxylate Cycle: Isocitrate Lyase/Malate Synthase vs TCA',
        showLabels: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'krebs1937PigeonMuscleSubstrateCatalyticCycleOriginalExperimentReconstructionDiagram': {
    name: 'Krebs 1937 Original Experiment Reconstruction',
    category: 'Krebs Cycle',
    description: 'Reconstruction of Krebs\'s 1937 pigeon muscle substrate catalytic cycle original experiment',
    dataRequired: [],
    usage: 'Best for history of science and Krebs cycle discovery',
    examples: ['Krebs 1937', 'Pigeon muscle', 'History of biochemistry', 'Catalytic cycle discovery'],
    defaultOptions: {
        title: 'Krebs 1937: Pigeon Muscle Substrate Catalytic Cycle — Original Experiment',
        showLabels: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== ELECTRON TRANSPORT CHAIN =====
'reductionPotentialScaleNadhToO2ElectronFlowThermodynamicsDiagram': {
    name: 'Reduction Potential Scale: NADH to O₂',
    category: 'Electron Transport Chain',
    description: 'Reduction potential scale from NADH to O₂ showing electron flow thermodynamics and ΔG',
    dataRequired: [],
    usage: 'Best for ETC thermodynamics and reduction potential teaching',
    examples: ['Reduction potential', 'Electron flow', 'Thermodynamics', 'ΔG'],
    defaultOptions: {
        title: 'Reduction Potential Scale: NADH → O₂ Electron Flow Thermodynamics',
        showLabels: true,
        width: 800,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'nadhFadh2CoenzymeQCytochromeCMobileCarrierEtcPositionDiagram': {
    name: 'Mobile ETC Carriers: CoQ & Cytochrome c',
    category: 'Electron Transport Chain',
    description: 'NADH, FADH2, coenzyme Q, and cytochrome c as mobile carriers and their positions in the ETC',
    dataRequired: [],
    usage: 'Best for ETC mobile carrier roles and positioning',
    examples: ['Coenzyme Q', 'Cytochrome c', 'Mobile carriers', 'Ubiquinone'],
    defaultOptions: {
        title: 'NADH/FADH2/CoQ/Cytochrome c — Mobile Carriers in ETC',
        showLabels: true,
        width: 900,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'etcComplexesItoIVSubunitCofactorProtonPumpingInnerMembraneDiagram': {
    name: 'ETC Complexes I–IV: Subunits, Cofactors & Proton Pumping',
    category: 'Electron Transport Chain',
    description: 'Detailed view of ETC complexes I–IV with subunit composition, cofactors, and proton pumping stoichiometry in the inner mitochondrial membrane',
    dataRequired: [],
    usage: 'Best for detailed ETC complex structure and function',
    examples: ['Complex I', 'Complex III', 'Cytochrome bc1', 'Proton pumping'],
    defaultOptions: {
        title: 'ETC Complexes I–IV: Subunit/Cofactor/Proton Pumping Inner Membrane',
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'atpSynthaseF0F1RotaryMechanismBindingChangeThreeStateDiagram': {
    name: 'ATP Synthase F0F1 Rotary Mechanism',
    category: 'Electron Transport Chain',
    description: 'ATP synthase F0F1 rotary mechanism with binding change three-state model (open, loose, tight)',
    dataRequired: [],
    usage: 'Best for ATP synthase mechanism and rotary catalysis',
    examples: ['ATP synthase', 'Rotary mechanism', 'Binding change model', 'F0F1'],
    defaultOptions: {
        title: 'ATP Synthase F0F1: Rotary Mechanism & Binding Change Three-State Model',
        showLabels: true,
        width: 850,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'mitchellChemiosmosisProtonGradientPmfMembranePotentialPhGradientDiagram': {
    name: 'Mitchell Chemiosmosis & Proton Gradient',
    category: 'Electron Transport Chain',
    description: 'Mitchell\'s chemiosmosis hypothesis showing proton gradient, PMF, membrane potential (ΔΨ), and pH gradient (ΔpH)',
    dataRequired: [],
    usage: 'Best for chemiosmosis and proton motive force teaching',
    examples: ['Chemiosmosis', 'Proton motive force', 'Mitchell hypothesis', 'ΔΨ'],
    defaultOptions: {
        title: 'Mitchell Chemiosmosis: Proton Gradient, PMF, ΔΨ & ΔpH',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'respirasomeSupercomplexCI_CIII2_CIVCristaeOrganisationCardiolipinDiagram': {
    name: 'Respirasome Supercomplex: CI/CIII₂/CIV',
    category: 'Electron Transport Chain',
    description: 'Respirasome supercomplex assembly of CI/CIII₂/CIV, cristae organisation, and cardiolipin stabilisation',
    dataRequired: [],
    usage: 'Best for advanced ETC supercomplex and cristae biology',
    examples: ['Respirasome', 'Supercomplex', 'Cardiolipin', 'Cristae'],
    defaultOptions: {
        title: 'Respirasome Supercomplex CI/CIII₂/CIV: Cristae Organisation & Cardiolipin',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'rosSuperoxideSodSuperoxideH2O2HydroxylFentonAntioxidantDefenceDiagram': {
    name: 'ROS: Superoxide, H₂O₂, Hydroxyl & Antioxidant Defence',
    category: 'Electron Transport Chain',
    description: 'ROS cascade from superoxide through SOD to H₂O₂ and hydroxyl radical via Fenton reaction, with antioxidant defences',
    dataRequired: [],
    usage: 'Best for oxidative stress and antioxidant defence teaching',
    examples: ['Reactive oxygen species', 'Superoxide dismutase', 'Fenton reaction', 'Catalase'],
    defaultOptions: {
        title: 'ROS: Superoxide → SOD → H₂O₂ → Hydroxyl (Fenton) & Antioxidant Defence',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'modernPoRatioNadhFadh2ProtonStoichiometryTransportCostAdjustedYieldDiagram': {
    name: 'Modern P/O Ratio & Transport-Cost Adjusted ATP Yield',
    category: 'Electron Transport Chain',
    description: 'Modern P/O ratios for NADH and FADH2 with proton stoichiometry and transport-cost adjusted ATP yield',
    dataRequired: [],
    usage: 'Best for accurate ATP yield calculations and modern bioenergetics',
    examples: ['P/O ratio', 'ATP yield', 'Transport cost', 'Proton stoichiometry'],
    defaultOptions: {
        title: 'Modern P/O Ratio: NADH/FADH2 Proton Stoichiometry & Transport-Cost Adjusted Yield',
        showLabels: true,
        width: 900,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'mitochondrialDiseaseMtdnaMutationHeteroplasmyEtcComplexDeficiencyTissueDiagram': {
    name: 'Mitochondrial Disease: mtDNA Mutation & ETC Deficiency',
    category: 'Electron Transport Chain',
    description: 'Mitochondrial disease mechanisms including mtDNA mutation, heteroplasmy, ETC complex deficiency, and tissue specificity',
    dataRequired: [],
    usage: 'Best for mitochondrial disease and genetics teaching',
    examples: ['Mitochondrial disease', 'Heteroplasmy', 'mtDNA', 'MELAS'],
    defaultOptions: {
        title: 'Mitochondrial Disease: mtDNA Mutation/Heteroplasmy/ETC Complex Deficiency/Tissue',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'endosymbioticOriginMitochondriaAlphaproteobacteriaEtcEvolutionChloroplastParallelDiagram': {
    name: 'Endosymbiotic Origin of Mitochondria & Chloroplasts',
    category: 'Electron Transport Chain',
    description: 'Endosymbiotic origin of mitochondria from alphaproteobacteria, ETC evolution, and parallel chloroplast endosymbiosis',
    dataRequired: [],
    usage: 'Best for evolutionary biology and endosymbiotic theory',
    examples: ['Endosymbiotic theory', 'Alphaproteobacteria', 'Chloroplast evolution', 'Mitochondrial origin'],
    defaultOptions: {
        title: 'Endosymbiotic Origin: Mitochondria (Alphaproteobacteria), ETC Evolution & Chloroplast Parallel',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

// ===== FERMENTATION =====
'fermentationNadRegenerationGlycolysisBottleneckAerobicAnaerobicBranchpointDiagram': {
    name: 'Fermentation: NAD⁺ Regeneration & Glycolysis Bottleneck',
    category: 'Fermentation',
    description: 'Fermentation as NAD⁺ regeneration mechanism, glycolysis bottleneck, and aerobic/anaerobic branchpoint',
    dataRequired: [],
    usage: 'Best for fermentation rationale and NAD⁺ recycling',
    examples: ['NAD+ regeneration', 'Fermentation', 'Anaerobic glycolysis'],
    defaultOptions: {
        title: 'Fermentation: NAD⁺ Regeneration, Glycolysis Bottleneck & Aerobic/Anaerobic Branchpoint',
        showLabels: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'ldhPyruvateToLactateMechanismIsoformsCoriCycleMuscleLiverDiagram': {
    name: 'LDH: Pyruvate → Lactate, Isoforms & Cori Cycle',
    category: 'Fermentation',
    description: 'LDH mechanism for pyruvate to lactate conversion, tissue isoforms, and Cori cycle between muscle and liver',
    dataRequired: [],
    usage: 'Best for lactate metabolism and the Cori cycle',
    examples: ['LDH isoforms', 'Cori cycle', 'Lactate dehydrogenase', 'Muscle-liver axis'],
    defaultOptions: {
        title: 'LDH: Pyruvate → Lactate, Isoforms & Cori Cycle (Muscle/Liver)',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'alcoholicFermentationPdcAdhTwoStepPyruvateToEthanolCo2TppMechanismDiagram': {
    name: 'Alcoholic Fermentation: PDC & ADH Mechanism',
    category: 'Fermentation',
    description: 'Two-step alcoholic fermentation from pyruvate to ethanol and CO₂ via PDC and ADH with TPP cofactor mechanism',
    dataRequired: [],
    usage: 'Best for yeast fermentation and ethanol production biochemistry',
    examples: ['Pyruvate decarboxylase', 'Alcohol dehydrogenase', 'TPP', 'Ethanol fermentation'],
    defaultOptions: {
        title: 'Alcoholic Fermentation: PDC/ADH Two-Step Pyruvate → Ethanol/CO₂ (TPP Mechanism)',
        showLabels: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'microbialFermentationDiversityMixedAcidButanediolPropionicAbeFermentationProductsDiagram': {
    name: 'Microbial Fermentation Diversity',
    category: 'Fermentation',
    description: 'Diversity of microbial fermentation pathways including mixed acid, butanediol, propionic, and ABE fermentation products',
    dataRequired: [],
    usage: 'Best for microbiology and industrial fermentation diversity',
    examples: ['Mixed acid fermentation', 'ABE fermentation', 'Butanediol', 'Propionic acid bacteria'],
    defaultOptions: {
        title: 'Microbial Fermentation Diversity: Mixed Acid/Butanediol/Propionic/ABE Products',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'pasteurEffectCrabtreeEffectOxygenGlucoseConcentrationFermentationSwitchDiagram': {
    name: 'Pasteur & Crabtree Effects',
    category: 'Fermentation',
    description: 'Pasteur effect (oxygen suppresses fermentation) and Crabtree effect (high glucose triggers fermentation) with concentration-dependent switching',
    dataRequired: [],
    usage: 'Best for fermentation regulation and yeast physiology',
    examples: ['Pasteur effect', 'Crabtree effect', 'Oxygen glucose switch', 'Yeast physiology'],
    defaultOptions: {
        title: 'Pasteur Effect & Crabtree Effect: O₂/Glucose Concentration Fermentation Switch',
        showLabels: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'industrialFermentationBioreactorBatchFedBatchContinuousModeFoodBiofuelDiagram': {
    name: 'Industrial Fermentation Bioreactor Modes',
    category: 'Fermentation',
    description: 'Industrial fermentation bioreactor operation modes: batch, fed-batch, and continuous for food and biofuel production',
    dataRequired: [],
    usage: 'Best for industrial biotechnology and fermentation engineering',
    examples: ['Bioreactor', 'Fed-batch', 'Continuous fermentation', 'Industrial biotechnology'],
    defaultOptions: {
        title: 'Industrial Fermentation: Bioreactor Batch/Fed-Batch/Continuous Modes — Food & Biofuel',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'humanBodyFermentationMuscleRbcGutMicrobiomeScfaWarburgSitesDiagram': {
    name: 'Human Body Fermentation Sites',
    category: 'Fermentation',
    description: 'Sites of fermentation in the human body: muscle, RBCs, gut microbiome SCFA production, and Warburg tumours',
    dataRequired: [],
    usage: 'Best for human physiology and fermentation in health and disease',
    examples: ['Muscle fermentation', 'Gut microbiome', 'Short chain fatty acids', 'Warburg tumours'],
    defaultOptions: {
        title: 'Human Body Fermentation: Muscle/RBC/Gut Microbiome (SCFA)/Warburg Sites',
        showLabels: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'lacticAcidosisTypeATypeBCausesBloodLactateThresholdAcidosisConsequencesDiagram': {
    name: 'Lactic Acidosis: Type A & B',
    category: 'Fermentation',
    description: 'Lactic acidosis types A and B, causes, blood lactate threshold, and acidosis consequences',
    dataRequired: [],
    usage: 'Best for clinical biochemistry and lactic acidosis pathophysiology',
    examples: ['Lactic acidosis', 'Type A', 'Type B', 'Blood lactate'],
    defaultOptions: {
        title: 'Lactic Acidosis: Type A/B Causes, Blood Lactate Threshold & Acidosis Consequences',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'fermentationEvolutionaryTimlinePreoxygentEarthAnoxicNicheObligateVsFacultativeAnaerobeDiagram': {
    name: 'Fermentation Evolutionary Timeline',
    category: 'Fermentation',
    description: 'Evolutionary timeline of fermentation from pre-oxygenated Earth, anoxic niches, to obligate vs facultative anaerobes',
    dataRequired: [],
    usage: 'Best for evolutionary biology and the origin of fermentation',
    examples: ['Pre-oxygenated Earth', 'Anaerobic evolution', 'Obligate anaerobe', 'Facultative anaerobe'],
    defaultOptions: {
        title: 'Fermentation Evolutionary Timeline: Pre-Oxygen Earth → Anoxic Niches → Obligate/Facultative Anaerobes',
        showLabels: true,
        width: 950,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'metabolicEngineeringFermentationStrainImprovementBiofuelPharmaceuticalYieldOptimisationDiagram': {
    name: 'Metabolic Engineering for Fermentation',
    category: 'Fermentation',
    description: 'Metabolic engineering strategies for fermentation strain improvement targeting biofuel and pharmaceutical yield optimisation',
    dataRequired: [],
    usage: 'Best for synthetic biology and metabolic engineering teaching',
    examples: ['Metabolic engineering', 'Strain improvement', 'Biofuel', 'Pharmaceutical yield'],
    defaultOptions: {
        title: 'Metabolic Engineering: Fermentation Strain Improvement — Biofuel/Pharmaceutical Yield',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

// ===== INFECTIOUS DISEASE & PATHOLOGY =====
'pathogenHostInfectionCycleDiagram': {
    name: 'Pathogen-Host Infection Cycle',
    category: 'Infectious Disease',
    description: 'General cycle of pathogen-host interaction from entry through replication to transmission',
    dataRequired: [],
    usage: 'Best for infectious disease and microbiology overview',
    examples: ['Infection cycle', 'Host-pathogen interaction', 'Transmission'],
    defaultOptions: {
        title: 'Pathogen-Host Infection Cycle',
        showLabels: true,
        width: 800,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'pathogenClassificationComparativeChart': {
    name: 'Pathogen Classification Comparative Chart',
    category: 'Infectious Disease',
    description: 'Comparative classification of pathogens: bacteria, viruses, fungi, parasites, prions — size, structure, replication',
    dataRequired: [],
    usage: 'Best for pathogen diversity and classification teaching',
    examples: ['Pathogen types', 'Bacteria vs virus', 'Prions', 'Parasite classification'],
    defaultOptions: {
        title: 'Pathogen Classification: Comparative Chart',
        showLabels: true,
        width: 950,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'bacterialCellVsViralParticleStructureDiagram': {
    name: 'Bacterial Cell vs Viral Particle Structure',
    category: 'Infectious Disease',
    description: 'Side-by-side structural comparison of a bacterial cell and viral particle (bacteriophage/enveloped virus)',
    dataRequired: [],
    usage: 'Best for microbiology and virology structural comparison',
    examples: ['Bacterial structure', 'Viral structure', 'Bacteriophage', 'Enveloped virus'],
    defaultOptions: {
        title: 'Bacterial Cell vs Viral Particle Structure',
        showLabels: true,
        width: 900,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'pathogenTransmissionRouteFlowchart': {
    name: 'Pathogen Transmission Routes Flowchart',
    category: 'Infectious Disease',
    description: 'Flowchart of pathogen transmission routes: droplet, airborne, contact, faecal-oral, vector-borne, vertical',
    dataRequired: [],
    usage: 'Best for epidemiology and infection control teaching',
    examples: ['Airborne transmission', 'Faecal-oral', 'Vector-borne', 'Vertical transmission'],
    defaultOptions: {
        title: 'Pathogen Transmission Routes Flowchart',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'humanBodyPortalsOfEntryAnnotatedDiagram': {
    name: 'Human Body: Portals of Entry',
    category: 'Infectious Disease',
    description: 'Annotated human body diagram showing portals of entry for pathogens: respiratory, GI, urogenital, skin, mucous membranes',
    dataRequired: [],
    usage: 'Best for infection control and anatomical entry point teaching',
    examples: ['Portals of entry', 'Respiratory entry', 'Skin barrier', 'Mucous membranes'],
    defaultOptions: {
        title: 'Human Body: Portals of Entry — Annotated',
        showLabels: true,
        width: 700,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'virulenceFactorMechanismsAnnotatedDiagram': {
    name: 'Virulence Factor Mechanisms',
    category: 'Infectious Disease',
    description: 'Annotated diagram of key virulence factor mechanisms: adhesins, toxins, capsules, immune evasion',
    dataRequired: [],
    usage: 'Best for microbial pathogenesis and virulence factor teaching',
    examples: ['Adhesins', 'Exotoxins', 'Capsule', 'Immune evasion'],
    defaultOptions: {
        title: 'Virulence Factor Mechanisms — Annotated',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'lyticVsLysogenicViralReplicationCycleDiagram': {
    name: 'Lytic vs Lysogenic Viral Replication Cycle',
    category: 'Infectious Disease',
    description: 'Comparison of lytic and lysogenic viral replication cycles with switch triggers and consequences',
    dataRequired: [],
    usage: 'Best for virology and viral replication cycle teaching',
    examples: ['Lytic cycle', 'Lysogenic cycle', 'Prophage', 'Viral replication'],
    defaultOptions: {
        title: 'Lytic vs Lysogenic Viral Replication Cycle',
        showLabels: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'diagnosticMethodsComparisonSensitivitySpecificityChart': {
    name: 'Diagnostic Methods: Sensitivity & Specificity Comparison',
    category: 'Infectious Disease',
    description: 'Comparison of diagnostic methods (PCR, culture, serology, antigen test) by sensitivity and specificity',
    dataRequired: [],
    usage: 'Best for clinical diagnostics and test interpretation teaching',
    examples: ['PCR sensitivity', 'Diagnostic specificity', 'Serology', 'Antigen test'],
    defaultOptions: {
        title: 'Diagnostic Methods: Sensitivity & Specificity Comparison Chart',
        showLabels: true,
        width: 900,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'antibioticResistanceMechanismsAnnotatedDiagram': {
    name: 'Antibiotic Resistance Mechanisms',
    category: 'Infectious Disease',
    description: 'Annotated diagram of antibiotic resistance mechanisms: enzymatic inactivation, efflux pumps, target modification, reduced permeability',
    dataRequired: [],
    usage: 'Best for antimicrobial resistance and pharmacology teaching',
    examples: ['Beta-lactamase', 'Efflux pump', 'Target modification', 'Antibiotic resistance'],
    defaultOptions: {
        title: 'Antibiotic Resistance Mechanisms — Annotated',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'reproductionNumberHerdImmunityThresholdGraph': {
    name: 'Reproduction Number & Herd Immunity Threshold',
    category: 'Infectious Disease',
    description: 'Graph of R₀ values for common pathogens and corresponding herd immunity thresholds',
    dataRequired: [],
    usage: 'Best for epidemiology and herd immunity teaching',
    examples: ['R0 value', 'Herd immunity', 'Measles R0', 'Epidemiology threshold'],
    defaultOptions: {
        title: 'R₀ vs Herd Immunity Threshold Graph',
        showLabels: true,
        width: 850,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

// ===== VACCINES & IMMUNISATION =====
'primaryVsSecondaryImmuneResponseCurvesDiagram': {
    name: 'Primary vs Secondary Immune Response Curves',
    category: 'Vaccines & Immunisation',
    description: 'Antibody titre curves comparing primary and secondary immune responses showing memory cell role',
    dataRequired: [],
    usage: 'Best for immunology and vaccine rationale teaching',
    examples: ['Primary response', 'Secondary response', 'Memory cells', 'Antibody titre'],
    defaultOptions: {
        title: 'Primary vs Secondary Immune Response Curves',
        showLabels: true,
        width: 850,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'vaccinePlatformComparisonAnnotatedDiagram': {
    name: 'Vaccine Platform Comparison',
    category: 'Vaccines & Immunisation',
    description: 'Annotated comparison of vaccine platforms: live attenuated, inactivated, subunit, mRNA, viral vector, VLP',
    dataRequired: [],
    usage: 'Best for vaccine technology and immunisation teaching',
    examples: ['Live attenuated', 'mRNA vaccine', 'Subunit vaccine', 'Viral vector'],
    defaultOptions: {
        title: 'Vaccine Platform Comparison — Annotated',
        showLabels: true,
        width: 1000,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'vaccineFormulationIngredientsBreakdownDiagram': {
    name: 'Vaccine Formulation Ingredients Breakdown',
    category: 'Vaccines & Immunisation',
    description: 'Breakdown of vaccine formulation components: antigen, adjuvant, stabilisers, preservatives, excipients',
    dataRequired: [],
    usage: 'Best for vaccine composition and pharmacology teaching',
    examples: ['Adjuvant', 'Stabilisers', 'Vaccine ingredients', 'Preservatives'],
    defaultOptions: {
        title: 'Vaccine Formulation: Ingredients Breakdown',
        showLabels: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'antigenPresentationToTAndBCellActivationPathwayDiagram': {
    name: 'Antigen Presentation to T & B Cell Activation Pathway',
    category: 'Vaccines & Immunisation',
    description: 'Pathway from antigen presentation by APCs through T cell and B cell activation to effector responses',
    dataRequired: [],
    usage: 'Best for adaptive immunity and vaccine mechanism teaching',
    examples: ['APC', 'MHC class II', 'T cell activation', 'B cell activation'],
    defaultOptions: {
        title: 'Antigen Presentation → T & B Cell Activation Pathway',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'childhoodImmunisationScheduleTimelineDiagram': {
    name: 'Childhood Immunisation Schedule Timeline',
    category: 'Vaccines & Immunisation',
    description: 'Timeline of recommended childhood immunisation schedule from birth through adolescence',
    dataRequired: [],
    usage: 'Best for public health and immunisation programme teaching',
    examples: ['Childhood vaccines', 'Immunisation schedule', 'DTaP', 'MMR'],
    defaultOptions: {
        title: 'Childhood Immunisation Schedule Timeline',
        showLabels: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'herdImmunityThresholdPopulationGridDiagram': {
    name: 'Herd Immunity Threshold: Population Grid',
    category: 'Vaccines & Immunisation',
    description: 'Population grid visualisation of herd immunity threshold showing immune vs susceptible individuals and transmission chains',
    dataRequired: [],
    usage: 'Best for herd immunity concept visualisation',
    examples: ['Herd immunity', 'Population immunity', 'Transmission blocking', 'Coverage threshold'],
    defaultOptions: {
        title: 'Herd Immunity Threshold: Population Grid',
        showLabels: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'vaccineAdverseEventFrequencyRiskComparisonChart': {
    name: 'Vaccine Adverse Event Frequency & Risk Comparison',
    category: 'Vaccines & Immunisation',
    description: 'Chart comparing frequency and severity of vaccine adverse events vs disease risks for key vaccines',
    dataRequired: [],
    usage: 'Best for risk-benefit communication and vaccine safety teaching',
    examples: ['Adverse events', 'Vaccine safety', 'Risk comparison', 'Anaphylaxis frequency'],
    defaultOptions: {
        title: 'Vaccine Adverse Event Frequency & Risk Comparison Chart',
        showLabels: true,
        width: 950,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'mRNAVaccineDeliveryLipidNanoparticleMechanismDiagram': {
    name: 'mRNA Vaccine Delivery: Lipid Nanoparticle Mechanism',
    category: 'Vaccines & Immunisation',
    description: 'Step-by-step mRNA vaccine delivery via lipid nanoparticle from injection to antigen presentation',
    dataRequired: [],
    usage: 'Best for mRNA vaccine technology and mechanism teaching',
    examples: ['mRNA vaccine', 'Lipid nanoparticle', 'LNP', 'Spike protein'],
    defaultOptions: {
        title: 'mRNA Vaccine: LNP Delivery Mechanism',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'clinicalTrialPhasesTimelineFunnelDiagram': {
    name: 'Clinical Trial Phases: Timeline & Funnel',
    category: 'Vaccines & Immunisation',
    description: 'Funnel and timeline diagram of clinical trial phases I–IV showing participant numbers, endpoints, and attrition',
    dataRequired: [],
    usage: 'Best for pharmacology and clinical research methodology teaching',
    examples: ['Phase I trial', 'Phase III trial', 'Clinical trial funnel', 'Drug development'],
    defaultOptions: {
        title: 'Clinical Trial Phases: Timeline & Funnel Diagram',
        showLabels: true,
        width: 950,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'smallpoxEradicationGlobalCoverageMapDiagram': {
    name: 'Smallpox Eradication: Global Coverage Map',
    category: 'Vaccines & Immunisation',
    description: 'Global map tracing the smallpox eradication campaign showing coverage milestones and last recorded cases',
    dataRequired: [],
    usage: 'Best for public health history and eradication programme teaching',
    examples: ['Smallpox eradication', 'WHO campaign', 'Variola', 'Ring vaccination'],
    defaultOptions: {
        title: 'Smallpox Eradication: Global Coverage Map',
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

// ===== ANTIBODIES =====
'plasmaCellAntibodySecretionOverviewDiagram': {
    name: 'Plasma Cell Antibody Secretion Overview',
    category: 'Antibodies',
    description: 'Overview of plasma cell differentiation from B cells and high-rate antibody secretion',
    dataRequired: [],
    usage: 'Best for B cell biology and antibody production teaching',
    examples: ['Plasma cell', 'Antibody secretion', 'B cell differentiation'],
    defaultOptions: {
        title: 'Plasma Cell Antibody Secretion Overview',
        showLabels: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'immunoglobulinYShapeHeavyLightChainFabFcDiagram': {
    name: 'Immunoglobulin Y-Shape: Heavy/Light Chain, Fab & Fc',
    category: 'Antibodies',
    description: 'Classic Y-shaped immunoglobulin structure showing heavy chains, light chains, Fab and Fc regions, disulfide bonds',
    dataRequired: [],
    usage: 'Best for antibody structure teaching',
    examples: ['IgG structure', 'Fab region', 'Fc region', 'Heavy chain'],
    defaultOptions: {
        title: 'Immunoglobulin Y-Shape: Heavy/Light Chain, Fab & Fc Regions',
        showLabels: true,
        width: 750,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'fiveImmunoglobulinIsotypesStructureFunctionComparisonChart': {
    name: 'Five Immunoglobulin Isotypes: Structure & Function',
    category: 'Antibodies',
    description: 'Comparative chart of IgG, IgA, IgM, IgE, and IgD: structure, distribution, and effector functions',
    dataRequired: [],
    usage: 'Best for antibody isotype teaching and comparison',
    examples: ['IgG', 'IgA', 'IgM', 'IgE', 'Isotype switching'],
    defaultOptions: {
        title: 'Five Immunoglobulin Isotypes: Structure & Function Comparison',
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'epitopeParatopeComplementarityBindingForcesDiagram': {
    name: 'Epitope-Paratope Complementarity & Binding Forces',
    category: 'Antibodies',
    description: 'Molecular diagram of epitope-paratope complementarity showing non-covalent binding forces: hydrogen bonds, van der Waals, electrostatic',
    dataRequired: [],
    usage: 'Best for antibody-antigen interaction and molecular immunology',
    examples: ['Epitope', 'Paratope', 'Antibody binding', 'CDR loops'],
    defaultOptions: {
        title: 'Epitope-Paratope Complementarity & Binding Forces',
        showLabels: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'opsonisationComplementADCCAgglutinationEffectorPathwaysDiagram': {
    name: 'Antibody Effector Pathways: Opsonisation, Complement, ADCC & Agglutination',
    category: 'Antibodies',
    description: 'Four antibody effector pathways: opsonisation, complement activation, ADCC, and agglutination with downstream outcomes',
    dataRequired: [],
    usage: 'Best for antibody effector function and humoral immunity teaching',
    examples: ['Opsonisation', 'Complement activation', 'ADCC', 'Agglutination'],
    defaultOptions: {
        title: 'Antibody Effector Pathways: Opsonisation/Complement/ADCC/Agglutination',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'germinalCentreAffinityMaturationClassSwitchingDiagram': {
    name: 'Germinal Centre: Affinity Maturation & Class Switching',
    category: 'Antibodies',
    description: 'Germinal centre reaction showing somatic hypermutation, affinity maturation selection, and class switch recombination',
    dataRequired: [],
    usage: 'Best for advanced B cell biology and antibody diversity',
    examples: ['Germinal centre', 'Affinity maturation', 'Class switching', 'Somatic hypermutation'],
    defaultOptions: {
        title: 'Germinal Centre: Affinity Maturation & Class Switch Recombination',
        showLabels: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'activeVsPassiveImmunityOnsetDurationComparisonDiagram': {
    name: 'Active vs Passive Immunity: Onset & Duration',
    category: 'Antibodies',
    description: 'Comparison of active and passive immunity types by onset time, duration, and memory generation',
    dataRequired: [],
    usage: 'Best for immunology and antibody therapy teaching',
    examples: ['Active immunity', 'Passive immunity', 'Maternal antibodies', 'Antiserum'],
    defaultOptions: {
        title: 'Active vs Passive Immunity: Onset & Duration Comparison',
        showLabels: true,
        width: 850,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'hybridomaTechnologyMyelomaBCellFusionWorkflowDiagram': {
    name: 'Hybridoma Technology: Myeloma-B Cell Fusion Workflow',
    category: 'Antibodies',
    description: 'Step-by-step workflow of hybridoma technology: immunisation, B cell-myeloma fusion, HAT selection, cloning, and monoclonal antibody production',
    dataRequired: [],
    usage: 'Best for monoclonal antibody production technology teaching',
    examples: ['Hybridoma', 'Monoclonal antibody', 'HAT selection', 'Myeloma fusion'],
    defaultOptions: {
        title: 'Hybridoma Technology: Myeloma/B Cell Fusion Workflow',
        showLabels: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'autoantibodyMediatedTissueDAmageMechanismsDiagram': {
    name: 'Autoantibody-Mediated Tissue Damage Mechanisms',
    category: 'Antibodies',
    description: 'Mechanisms by which autoantibodies cause tissue damage: receptor blocking/activation, complement-mediated lysis, ADCC',
    dataRequired: [],
    usage: 'Best for autoimmunity and hypersensitivity teaching',
    examples: ['Autoantibody', 'Type II hypersensitivity', 'Myasthenia gravis', 'Graves disease'],
    defaultOptions: {
        title: 'Autoantibody-Mediated Tissue Damage Mechanisms',
        showLabels: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'indirectElisaDetectionStepByStepDiagram': {
    name: 'Indirect ELISA Detection: Step-by-Step',
    category: 'Antibodies',
    description: 'Step-by-step indirect ELISA procedure from antigen coating through primary antibody, secondary antibody, to colorimetric detection',
    dataRequired: [],
    usage: 'Best for laboratory techniques and antibody detection methods',
    examples: ['ELISA', 'Indirect ELISA', 'Secondary antibody', 'HRP detection'],
    defaultOptions: {
        title: 'Indirect ELISA Detection: Step-by-Step',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== DISEASE & PATHOLOGY =====
'signsVsSymptomsAetiologyPathogenesisConceptMapDiagram': {
    name: 'Signs vs Symptoms, Aetiology & Pathogenesis Concept Map',
    category: 'Disease & Pathology',
    description: 'Concept map distinguishing signs from symptoms and linking aetiology to pathogenesis to clinical presentation',
    dataRequired: [],
    usage: 'Best for medical terminology and disease concept foundations',
    examples: ['Signs vs symptoms', 'Aetiology', 'Pathogenesis', 'Clinical presentation'],
    defaultOptions: {
        title: 'Signs vs Symptoms, Aetiology & Pathogenesis Concept Map',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'diseaseClassificationSpiderDiagramByAetiology': {
    name: 'Disease Classification Spider Diagram by Aetiology',
    category: 'Disease & Pathology',
    description: 'Spider/radar diagram classifying diseases by aetiology: infectious, genetic, environmental, autoimmune, neoplastic, nutritional',
    dataRequired: [],
    usage: 'Best for disease classification and pathology overview',
    examples: ['Disease aetiology', 'Disease classification', 'Infectious disease', 'Genetic disease'],
    defaultOptions: {
        title: 'Disease Classification Spider Diagram by Aetiology',
        showLabels: true,
        width: 800,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'infectiousDiseaseStagesIncubationProdromeAcuteConvalescenceDiagram': {
    name: 'Infectious Disease Stages',
    category: 'Disease & Pathology',
    description: 'Timeline of infectious disease stages: incubation, prodrome, acute illness, decline, and convalescence',
    dataRequired: [],
    usage: 'Best for infectious disease progression and clinical stages',
    examples: ['Incubation period', 'Prodromal stage', 'Convalescence', 'Disease progression'],
    defaultOptions: {
        title: 'Infectious Disease Stages: Incubation → Prodrome → Acute → Convalescence',
        showLabels: true,
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'atherosclerosisPlaqueDevelopmentCrossSectionDiagram': {
    name: 'Atherosclerosis Plaque Development Cross-Section',
    category: 'Disease & Pathology',
    description: 'Cross-sectional diagram of atherosclerosis progression from fatty streak to complex plaque and rupture',
    dataRequired: [],
    usage: 'Best for cardiovascular pathology and atherosclerosis teaching',
    examples: ['Atherosclerosis', 'Plaque development', 'Foam cells', 'Plaque rupture'],
    defaultOptions: {
        title: 'Atherosclerosis Plaque Development Cross-Section',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'mendelianInheritancePedigreePatternsDiagram': {
    name: 'Mendelian Inheritance Pedigree Patterns',
    category: 'Disease & Pathology',
    description: 'Pedigree charts illustrating autosomal dominant, autosomal recessive, X-linked dominant, and X-linked recessive inheritance patterns',
    dataRequired: [],
    usage: 'Best for genetics and inheritance pattern teaching',
    examples: ['Autosomal dominant', 'X-linked recessive', 'Pedigree analysis', 'Mendelian genetics'],
    defaultOptions: {
        title: 'Mendelian Inheritance Pedigree Patterns',
        showLabels: true,
        width: 1000,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'acuteInflammationCardinalSignsMediatorCascadeDiagram': {
    name: 'Acute Inflammation: Cardinal Signs & Mediator Cascade',
    category: 'Disease & Pathology',
    description: 'Acute inflammation cardinal signs (rubor, calor, dolor, tumor, functio laesa) linked to underlying mediator cascade',
    dataRequired: [],
    usage: 'Best for pathology and inflammation teaching',
    examples: ['Cardinal signs', 'Histamine', 'Prostaglandins', 'Acute inflammation'],
    defaultOptions: {
        title: 'Acute Inflammation: Cardinal Signs & Mediator Cascade',
        showLabels: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'incidenceVsPrevalenceChronicVsAcuteDiseaseComparisonGraph': {
    name: 'Incidence vs Prevalence: Chronic vs Acute Disease',
    category: 'Disease & Pathology',
    description: 'Graph comparing incidence and prevalence for chronic and acute disease scenarios with duration effects',
    dataRequired: [],
    usage: 'Best for epidemiology and disease measurement teaching',
    examples: ['Incidence', 'Prevalence', 'Chronic disease', 'Epidemiology measures'],
    defaultOptions: {
        title: 'Incidence vs Prevalence: Chronic vs Acute Disease Comparison',
        showLabels: true,
        width: 900,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'primarySecondaryTertiaryPreventionLevelsDiagram': {
    name: 'Primary, Secondary & Tertiary Prevention Levels',
    category: 'Disease & Pathology',
    description: 'Three levels of disease prevention with examples: primary (vaccination), secondary (screening), tertiary (rehabilitation)',
    dataRequired: [],
    usage: 'Best for public health and preventive medicine teaching',
    examples: ['Primary prevention', 'Secondary screening', 'Tertiary rehabilitation', 'Prevention levels'],
    defaultOptions: {
        title: 'Primary, Secondary & Tertiary Prevention Levels',
        showLabels: true,
        width: 850,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'marmotHealthGradientSocioeconomicStatusDiagram': {
    name: 'Marmot Health Gradient: Socioeconomic Status',
    category: 'Disease & Pathology',
    description: 'Marmot social gradient in health showing dose-response relationship between socioeconomic status and health outcomes',
    dataRequired: [],
    usage: 'Best for social determinants of health and health inequality',
    examples: ['Marmot gradient', 'Social determinants', 'Health inequality', 'SES and health'],
    defaultOptions: {
        title: 'Marmot Health Gradient: Socioeconomic Status',
        showLabels: true,
        width: 850,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'zoonoticSpilloverDriversOneHealthFrameworkDiagram': {
    name: 'Zoonotic Spillover Drivers & One Health Framework',
    category: 'Disease & Pathology',
    description: 'Drivers of zoonotic spillover (deforestation, wildlife trade, agriculture) within the One Health human-animal-environment framework',
    dataRequired: [],
    usage: 'Best for One Health, zoonosis, and emerging infectious disease teaching',
    examples: ['Zoonotic spillover', 'One Health', 'Emerging infectious disease', 'Deforestation'],
    defaultOptions: {
        title: 'Zoonotic Spillover Drivers & One Health Framework',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

// ===== IMMUNOLOGY =====
'innateVsAdaptiveImmunityTwoArmOverviewDiagram': {
    name: 'Innate vs Adaptive Immunity: Two-Arm Overview',
    category: 'Immunology',
    description: 'Overview diagram contrasting innate and adaptive immunity: speed, specificity, memory, and key cell types',
    dataRequired: [],
    usage: 'Best for introductory immunology and immune system overview',
    examples: ['Innate immunity', 'Adaptive immunity', 'Immune overview', 'Specificity vs speed'],
    defaultOptions: {
        title: 'Innate vs Adaptive Immunity: Two-Arm Overview',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'firstLineDefenceBarriersAnnotatedBodyDiagram': {
    name: 'First-Line Defence Barriers: Annotated Body',
    category: 'Immunology',
    description: 'Annotated body diagram of first-line physical and chemical defence barriers: skin, mucus, cilia, stomach acid, lysozyme',
    dataRequired: [],
    usage: 'Best for innate immunity and barrier defence teaching',
    examples: ['Skin barrier', 'Mucus', 'Lysozyme', 'First line of defence'],
    defaultOptions: {
        title: 'First-Line Defence Barriers — Annotated Body Diagram',
        showLabels: true,
        width: 750,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'tlrPampSignallingNFkBCytokineProductionPathwayDiagram': {
    name: 'TLR/PAMP Signalling → NF-κB → Cytokine Production',
    category: 'Immunology',
    description: 'TLR recognition of PAMPs triggering NF-κB signalling cascade and downstream cytokine production pathway',
    dataRequired: [],
    usage: 'Best for innate immune signalling and pattern recognition',
    examples: ['TLR signalling', 'PAMP', 'NF-κB', 'Cytokine production'],
    defaultOptions: {
        title: 'TLR/PAMP → NF-κB → Cytokine Production Signalling Pathway',
        showLabels: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'complementThreePathwaysConvergenceC3ConvertaseMACDiagram': {
    name: 'Complement System: Three Pathways → C3 Convertase → MAC',
    category: 'Immunology',
    description: 'Three complement activation pathways (classical, lectin, alternative) converging at C3 convertase and culminating in MAC formation',
    dataRequired: [],
    usage: 'Best for complement system and innate immunity teaching',
    examples: ['Classical pathway', 'Alternative pathway', 'C3 convertase', 'Membrane attack complex'],
    defaultOptions: {
        title: 'Complement: Three Pathways → C3 Convertase → MAC',
        showLabels: true,
        width: 950,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'tCellSubsetDifferentiationCytokineEnvironmentDiagram': {
    name: 'T Cell Subset Differentiation & Cytokine Environment',
    category: 'Immunology',
    description: 'Naive CD4+ T cell differentiation into Th1, Th2, Th17, Treg, Tfh subsets driven by cytokine environment',
    dataRequired: [],
    usage: 'Best for T cell biology and adaptive immunity teaching',
    examples: ['Th1 Th2', 'Treg', 'Th17', 'T cell differentiation'],
    defaultOptions: {
        title: 'T Cell Subset Differentiation: Cytokine Environment Driving Th1/Th2/Th17/Treg/Tfh',
        showLabels: true,
        width: 950,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'germinalCentreDarkLightZoneSomaticHypermutationDiagram': {
    name: 'Germinal Centre: Dark & Light Zone Somatic Hypermutation',
    category: 'Immunology',
    description: 'Germinal centre dark zone (SHM, proliferation) and light zone (affinity selection, FDC interaction) cycle',
    dataRequired: [],
    usage: 'Best for B cell biology and antibody affinity maturation',
    examples: ['Dark zone', 'Light zone', 'Somatic hypermutation', 'Affinity selection'],
    defaultOptions: {
        title: 'Germinal Centre: Dark/Light Zone & Somatic Hypermutation',
        showLabels: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'majorCytokineSourceTargetFunctionNetworkDiagram': {
    name: 'Major Cytokine: Source, Target & Function Network',
    category: 'Immunology',
    description: 'Network diagram of major cytokines (IL-1, IL-6, TNF-α, IL-10, IFN-γ, TGF-β) with their cellular sources, targets, and functions',
    dataRequired: [],
    usage: 'Best for cytokine biology and immune signalling overview',
    examples: ['IL-6', 'TNF-alpha', 'IFN-gamma', 'Cytokine network'],
    defaultOptions: {
        title: 'Major Cytokine: Source/Target/Function Network',
        showLabels: true,
        width: 950,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'primarySecondaryResponseAntibodyTitreCurvesDiagram': {
    name: 'Primary & Secondary Antibody Titre Response Curves',
    category: 'Immunology',
    description: 'Kinetic curves of primary and secondary antibody titre responses showing IgM to IgG class switch and memory amplification',
    dataRequired: [],
    usage: 'Best for humoral immunity and vaccine response teaching',
    examples: ['IgM kinetics', 'IgG switch', 'Antibody titre', 'Memory response'],
    defaultOptions: {
        title: 'Primary & Secondary Antibody Titre Response Curves',
        showLabels: true,
        width: 850,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'gelCoomhsHypersensitivityTypeIToIVMechanismsDiagram': {
    name: 'Gell & Coombs Hypersensitivity Types I–IV Mechanisms',
    category: 'Immunology',
    description: 'Gell and Coombs classification of hypersensitivity types I (IgE/mast cell), II (cytotoxic), III (immune complex), IV (delayed/T cell) with mechanisms and examples',
    dataRequired: [],
    usage: 'Best for hypersensitivity and allergy immunology teaching',
    examples: ['Type I anaphylaxis', 'Type III immune complex', 'Type IV DTH', 'Hypersensitivity'],
    defaultOptions: {
        title: 'Gell & Coombs Hypersensitivity Types I–IV Mechanisms',
        showLabels: true,
        width: 1000,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'checkpointInhibitorPD1PDL1CancerTCellActivationDiagram': {
    name: 'Checkpoint Inhibitor: PD-1/PD-L1 & Cancer T Cell Activation',
    category: 'Immunology',
    description: 'PD-1/PD-L1 immune checkpoint mechanism in cancer immune evasion and checkpoint inhibitor restoration of T cell activation',
    dataRequired: [],
    usage: 'Best for cancer immunotherapy and checkpoint biology',
    examples: ['PD-1', 'PD-L1', 'Checkpoint inhibitor', 'Cancer immunotherapy'],
    defaultOptions: {
        title: 'Checkpoint Inhibitor: PD-1/PD-L1 Cancer T Cell Activation',
        showLabels: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'haematopoiesisLineageMyeloidLymphoidTreeDiagram': {
    name: 'Haematopoiesis Lineage: Myeloid & Lymphoid Tree',
    category: 'Immunology',
    description: 'Haematopoiesis tree from HSC through myeloid and lymphoid progenitors to mature immune cells',
    dataRequired: [],
    usage: 'Best for haematology and immune cell lineage teaching',
    examples: ['Haematopoiesis', 'HSC', 'Myeloid lineage', 'Lymphoid lineage'],
    defaultOptions: {
        title: 'Haematopoiesis Lineage: Myeloid & Lymphoid Tree',
        showLabels: true,
        width: 1000,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'neutrophilRecruitmentRollingAdhesionDiapedesisChemoaxisDiagram': {
    name: 'Neutrophil Recruitment: Rolling, Adhesion, Diapedesis & Chemotaxis',
    category: 'Immunology',
    description: 'Sequential steps of neutrophil recruitment to infection site: margination, rolling, firm adhesion, diapedesis, and chemotaxis',
    dataRequired: [],
    usage: 'Best for innate immunity and neutrophil migration teaching',
    examples: ['Selectin rolling', 'Integrin adhesion', 'Diapedesis', 'Chemotaxis'],
    defaultOptions: {
        title: 'Neutrophil Recruitment: Rolling/Adhesion/Diapedesis/Chemotaxis',
        showLabels: true,
        width: 950,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'eosinophilGranuleContentsAntiHelminthDegranulationDiagram': {
    name: 'Eosinophil Granule Contents & Anti-Helminth Degranulation',
    category: 'Immunology',
    description: 'Eosinophil granule protein contents (MBP, ECP, EPO) and degranulation mechanism against helminths',
    dataRequired: [],
    usage: 'Best for eosinophil biology and anti-parasitic immunity',
    examples: ['Eosinophil', 'MBP', 'ECP', 'Helminth immunity'],
    defaultOptions: {
        title: 'Eosinophil Granule Contents & Anti-Helminth Degranulation',
        showLabels: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'basophilMastCellFcepsilonRIIgECrossLinkingDegranulationDiagram': {
    name: 'Basophil/Mast Cell: FcεRI IgE Cross-Linking & Degranulation',
    category: 'Immunology',
    description: 'FcεRI receptor IgE cross-linking on basophils and mast cells triggering degranulation and mediator release in type I hypersensitivity',
    dataRequired: [],
    usage: 'Best for allergy and mast cell biology teaching',
    examples: ['FcεRI', 'Mast cell', 'IgE cross-linking', 'Degranulation'],
    defaultOptions: {
        title: 'Basophil/Mast Cell: FcεRI IgE Cross-Linking & Degranulation',
        showLabels: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'macrophageM1M2PolarisationTissueMacrophageTypesAnnotatedDiagram': {
    name: 'Macrophage M1/M2 Polarisation & Tissue Macrophage Types',
    category: 'Immunology',
    description: 'Macrophage M1 (pro-inflammatory) and M2 (anti-inflammatory/repair) polarisation states plus annotated tissue-resident macrophage types',
    dataRequired: [],
    usage: 'Best for macrophage biology and tissue immunity teaching',
    examples: ['M1 macrophage', 'M2 macrophage', 'Kupffer cell', 'Microglia'],
    defaultOptions: {
        title: 'Macrophage M1/M2 Polarisation & Tissue Macrophage Types — Annotated',
        showLabels: true,
        width: 950,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'dendriticCellMaturationMigrationNaiveTCellActivationDiagram': {
    name: 'Dendritic Cell Maturation, Migration & Naïve T Cell Activation',
    category: 'Immunology',
    description: 'Dendritic cell maturation at infection site, CCR7-driven migration to lymph node, and naïve T cell activation via three signals',
    dataRequired: [],
    usage: 'Best for dendritic cell biology and adaptive immune priming',
    examples: ['Dendritic cell', 'CCR7', 'Naïve T cell activation', 'Three signal model'],
    defaultOptions: {
        title: 'Dendritic Cell Maturation → Migration → Naïve T Cell Activation',
        showLabels: true,
        width: 950,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'thymusPositiveNegativeSelectionCD4CD8LinearisationDiagram': {
    name: 'Thymus: Positive & Negative Selection, CD4/CD8 Lineage',
    category: 'Immunology',
    description: 'Thymic T cell development: double-negative to double-positive, positive selection (MHC restriction), negative selection (self-tolerance), CD4/CD8 lineage commitment',
    dataRequired: [],
    usage: 'Best for T cell development and central tolerance teaching',
    examples: ['Positive selection', 'Negative selection', 'CD4 CD8', 'Thymic education'],
    defaultOptions: {
        title: 'Thymus: Positive/Negative Selection & CD4/CD8 Lineage Commitment',
        showLabels: true,
        width: 950,
        height: 850,
        backgroundColor: '#ffffff'
    }
},
'bCellDevelopmentVDJRecombinationBoneMarrowPeripheryDiagram': {
    name: 'B Cell Development: VDJ Recombination, Bone Marrow & Periphery',
    category: 'Immunology',
    description: 'B cell development stages from bone marrow pro-B cell through VDJ recombination, central tolerance, to peripheral maturation',
    dataRequired: [],
    usage: 'Best for B cell development and BCR diversity teaching',
    examples: ['VDJ recombination', 'Pro-B cell', 'Central B cell tolerance', 'BCR diversity'],
    defaultOptions: {
        title: 'B Cell Development: VDJ Recombination → Bone Marrow → Peripheral Maturation',
        showLabels: true,
        width: 1000,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'nkCellMissingSelfKIRInhibitoryActivatingReceptorBalanceDiagram': {
    name: 'NK Cell: Missing Self, KIR Inhibitory/Activating Receptor Balance',
    category: 'Immunology',
    description: 'NK cell missing-self recognition mechanism with KIR inhibitory and activating receptor balance determining cytotoxicity',
    dataRequired: [],
    usage: 'Best for NK cell biology and innate cytotoxicity teaching',
    examples: ['NK cell', 'Missing self', 'KIR receptor', 'Activating receptor'],
    defaultOptions: {
        title: 'NK Cell: Missing Self & KIR Inhibitory/Activating Receptor Balance',
        showLabels: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'leukaemiaClassificationBlastCellMorphologyAuerRodDiagram': {
    name: 'Leukaemia Classification: Blast Cell Morphology & Auer Rods',
    category: 'Immunology',
    description: 'Classification of leukaemias by blast cell morphology including Auer rod identification in AML',
    dataRequired: [],
    usage: 'Best for haematological malignancy and morphology teaching',
    examples: ['AML', 'ALL', 'Auer rods', 'Blast cell morphology'],
    defaultOptions: {
        title: 'Leukaemia Classification: Blast Cell Morphology & Auer Rods',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

// ===== ECOLOGY =====
'biotaAbiotaComponentsLabelledDiagram': {
    name: 'Biota & Abiota Components Labelled',
    category: 'Ecology',
    description: 'Labelled diagram distinguishing biotic and abiotic ecosystem components with examples',
    dataRequired: [],
    usage: 'Best for introductory ecology teaching',
    examples: ['Biotic factors', 'Abiotic factors', 'Ecosystem components'],
    defaultOptions: {
        title: 'Biota & Abiota Components — Labelled',
        showLabels: true,
        width: 850,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'trophicLevelsPyramidAnnotatedDiagram': {
    name: 'Trophic Levels Pyramid — Annotated',
    category: 'Ecology',
    description: 'Annotated ecological pyramid showing producers, primary, secondary, and tertiary consumers with energy values',
    dataRequired: [],
    usage: 'Best for food chain and trophic level teaching',
    examples: ['Trophic pyramid', 'Producers', 'Consumers', 'Energy pyramid'],
    defaultOptions: {
        title: 'Trophic Levels Pyramid — Annotated',
        showLabels: true,
        width: 750,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'gppNppRespirationEnergyFlowDiagram': {
    name: 'GPP, NPP & Respiration Energy Flow',
    category: 'Ecology',
    description: 'Energy flow diagram relating gross primary productivity, plant respiration, and net primary productivity',
    dataRequired: [],
    usage: 'Best for primary productivity and energy flow teaching',
    examples: ['GPP', 'NPP', 'Autotrophic respiration', 'Primary productivity'],
    defaultOptions: {
        title: 'GPP, NPP & Respiration Energy Flow',
        showLabels: true,
        width: 850,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'intermediateDisturbanceHypothesisDiversityCurveDiagram': {
    name: 'Intermediate Disturbance Hypothesis Diversity Curve',
    category: 'Ecology',
    description: 'Unimodal curve showing peak species diversity at intermediate disturbance frequency/intensity',
    dataRequired: [],
    usage: 'Best for community ecology and disturbance ecology teaching',
    examples: ['IDH', 'Species diversity', 'Disturbance frequency', 'Community ecology'],
    defaultOptions: {
        title: 'Intermediate Disturbance Hypothesis: Diversity Curve',
        showLabels: true,
        width: 800,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'fourCategoriesEcosystemServicesClassificationChart': {
    name: 'Four Categories of Ecosystem Services',
    category: 'Ecology',
    description: 'Classification chart of ecosystem services: provisioning, regulating, cultural, and supporting with examples',
    dataRequired: [],
    usage: 'Best for ecosystem services and environmental science teaching',
    examples: ['Provisioning services', 'Regulating services', 'Cultural services', 'Supporting services'],
    defaultOptions: {
        title: 'Four Categories of Ecosystem Services Classification Chart',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'lakeZonationLittoralLimneticProfundalBenthicDiagram': {
    name: 'Lake Zonation: Littoral, Limnetic, Profundal & Benthic',
    category: 'Ecology',
    description: 'Cross-section of lake showing littoral, limnetic, profundal, and benthic zones with characteristic organisms',
    dataRequired: [],
    usage: 'Best for freshwater ecology and lake zonation',
    examples: ['Littoral zone', 'Limnetic zone', 'Profundal zone', 'Benthic zone'],
    defaultOptions: {
        title: 'Lake Zonation: Littoral/Limnetic/Profundal/Benthic',
        showLabels: true,
        width: 900,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'soilHorizonProfileOAbcRLayersDiagram': {
    name: 'Soil Horizon Profile: O, A, B, C & R Layers',
    category: 'Ecology',
    description: 'Vertical soil profile showing O, A, B, C, and R horizons with composition and characteristics',
    dataRequired: [],
    usage: 'Best for soil science and terrestrial ecology',
    examples: ['Soil horizons', 'O horizon', 'Topsoil', 'Parent material'],
    defaultOptions: {
        title: 'Soil Horizon Profile: O/A/B/C/R Layers',
        showLabels: true,
        width: 700,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'eutrophicationStagesAlgalBloomHypoxiaDiagram': {
    name: 'Eutrophication Stages: Algal Bloom & Hypoxia',
    category: 'Ecology',
    description: 'Sequential stages of eutrophication from nutrient input through algal bloom, bacterial decomposition, to hypoxic dead zone',
    dataRequired: [],
    usage: 'Best for eutrophication and water quality ecology',
    examples: ['Eutrophication', 'Algal bloom', 'Dead zone', 'Hypoxia'],
    defaultOptions: {
        title: 'Eutrophication Stages: Algal Bloom → Hypoxia',
        showLabels: true,
        width: 950,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'yellowstoneWolfReintroductionTrophicCascadeFlowDiagram': {
    name: 'Yellowstone Wolf Reintroduction: Trophic Cascade',
    category: 'Ecology',
    description: 'Flow diagram of trophic cascade following wolf reintroduction in Yellowstone: elk behaviour, vegetation recovery, river geomorphology',
    dataRequired: [],
    usage: 'Best for trophic cascades and keystone species case study',
    examples: ['Yellowstone wolves', 'Trophic cascade', 'Elk', 'River geomorphology'],
    defaultOptions: {
        title: 'Yellowstone Wolf Reintroduction: Trophic Cascade Flow',
        showLabels: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'markReleaseRecaptureLincolnPetersenFormulaAnnotatedDiagram': {
    name: 'Mark-Release-Recapture: Lincoln-Petersen Formula',
    category: 'Ecology',
    description: 'Annotated diagram of mark-release-recapture methodology and Lincoln-Petersen population estimate formula',
    dataRequired: [],
    usage: 'Best for population ecology and field sampling methodology',
    examples: ['Mark-recapture', 'Lincoln-Petersen', 'Population estimate', 'Sampling'],
    defaultOptions: {
        title: 'Mark-Release-Recapture: Lincoln-Petersen Formula — Annotated',
        showLabels: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'foodChainArrowDirectionEnergyFlowLabelledDiagram': {
    name: 'Food Chain: Arrow Direction & Energy Flow Labelled',
    category: 'Ecology',
    description: 'Labelled food chain showing correct arrow direction representing energy flow from producer to apex consumer',
    dataRequired: [],
    usage: 'Best for introductory food chain and energy flow teaching',
    examples: ['Food chain', 'Energy flow arrows', 'Producer consumer', 'Apex predator'],
    defaultOptions: {
        title: 'Food Chain: Arrow Direction & Energy Flow — Labelled',
        showLabels: true,
        width: 900,
        height: 500,
        backgroundColor: '#ffffff'
    }
},
'foodWebNodeLinkConnectanceDiagram': {
    name: 'Food Web: Node-Link & Connectance',
    category: 'Ecology',
    description: 'Node-link food web diagram illustrating species connectance, trophic levels, and interaction complexity',
    dataRequired: [],
    usage: 'Best for food web ecology and network analysis',
    examples: ['Food web', 'Connectance', 'Species interactions', 'Trophic network'],
    defaultOptions: {
        title: 'Food Web: Node-Link & Connectance',
        showLabels: true,
        width: 900,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'tenPercentEnergyTransferTrophicLevelCalculationDiagram': {
    name: '10% Energy Transfer: Trophic Level Calculation',
    category: 'Ecology',
    description: 'Diagram and calculation showing ~10% energy transfer efficiency between trophic levels with worked example',
    dataRequired: [],
    usage: 'Best for energy flow and trophic efficiency calculations',
    examples: ['10% rule', 'Energy transfer efficiency', 'Trophic efficiency', 'Energy pyramid calculation'],
    defaultOptions: {
        title: '10% Energy Transfer Between Trophic Levels — Calculation',
        showLabels: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'seaOtterUrchinKelpTopDownCascadeFlowDiagram': {
    name: 'Sea Otter → Urchin → Kelp: Top-Down Cascade',
    category: 'Ecology',
    description: 'Top-down trophic cascade flow from sea otter predation on urchins to kelp forest recovery',
    dataRequired: [],
    usage: 'Best for keystone species and trophic cascade case study',
    examples: ['Sea otter', 'Sea urchin', 'Kelp forest', 'Top-down control'],
    defaultOptions: {
        title: 'Sea Otter → Urchin → Kelp: Top-Down Trophic Cascade',
        showLabels: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'redundancyRobustnessExtinctionCascadeNetworkDiagram': {
    name: 'Redundancy, Robustness & Extinction Cascade Network',
    category: 'Ecology',
    description: 'Food web network diagram illustrating functional redundancy, robustness to species loss, and extinction cascade risk',
    dataRequired: [],
    usage: 'Best for food web stability and extinction risk ecology',
    examples: ['Functional redundancy', 'Extinction cascade', 'Food web robustness', 'Species loss'],
    defaultOptions: {
        title: 'Redundancy, Robustness & Extinction Cascade Network',
        showLabels: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'interactionTypesMatrixPlusMinusZeroDiagram': {
    name: 'Interaction Types Matrix: +/−/0',
    category: 'Ecology',
    description: 'Matrix diagram classifying ecological interaction types (mutualism, commensalism, competition, predation, parasitism, amensalism) using +/−/0 notation',
    dataRequired: [],
    usage: 'Best for ecological interactions and community ecology',
    examples: ['Mutualism', 'Commensalism', 'Competition', 'Predation matrix'],
    defaultOptions: {
        title: 'Ecological Interaction Types Matrix: +/−/0',
        showLabels: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'grazingVsDetritalPathwayEnergyFlowComparisonDiagram': {
    name: 'Grazing vs Detrital Pathway Energy Flow Comparison',
    category: 'Ecology',
    description: 'Comparative energy flow diagram of grazing (living plant) and detrital (dead organic matter) pathways in ecosystems',
    dataRequired: [],
    usage: 'Best for ecosystem energy flow and decomposer ecology',
    examples: ['Grazing pathway', 'Detrital pathway', 'Decomposers', 'Energy flow comparison'],
    defaultOptions: {
        title: 'Grazing vs Detrital Pathway: Energy Flow Comparison',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'lotkaVolterraPredatorPreyOscillationPhaseDiagram': {
    name: 'Lotka-Volterra Predator-Prey Oscillation & Phase',
    category: 'Ecology',
    description: 'Lotka-Volterra predator-prey population oscillations over time and phase-plane diagram',
    dataRequired: [],
    usage: 'Best for population dynamics and mathematical ecology',
    examples: ['Lotka-Volterra', 'Predator-prey oscillation', 'Phase plane', 'Population cycles'],
    defaultOptions: {
        title: 'Lotka-Volterra Predator-Prey Oscillation & Phase Diagram',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'biomagnificationDDTConcentrationTrophicLevelBarChart': {
    name: 'Biomagnification: DDT Concentration by Trophic Level',
    category: 'Ecology',
    description: 'Bar chart of DDT/PCB biomagnification showing increasing contaminant concentration at each trophic level',
    dataRequired: [],
    usage: 'Best for biomagnification and environmental toxicology teaching',
    examples: ['Biomagnification', 'DDT', 'Bioaccumulation', 'Trophic amplification'],
    defaultOptions: {
        title: 'Biomagnification: DDT Concentration by Trophic Level',
        showLabels: true,
        width: 850,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'keystoneSpeciesConservationPriorityFoodWebDiagram': {
    name: 'Keystone Species Conservation Priority Food Web',
    category: 'Ecology',
    description: 'Food web diagram highlighting keystone species and their disproportionate ecological impact relevant to conservation priorities',
    dataRequired: [],
    usage: 'Best for conservation biology and keystone species teaching',
    examples: ['Keystone species', 'Conservation priority', 'Disproportionate impact', 'Food web stability'],
    defaultOptions: {
        title: 'Keystone Species Conservation Priority Food Web',
        showLabels: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'firstSecondLawThermodynamicsEcosystemEnergyFlowDiagram': {
    name: 'First & Second Law Thermodynamics: Ecosystem Energy Flow',
    category: 'Ecology',
    description: 'Application of first law (energy conservation) and second law (entropy/heat loss) to ecosystem energy flow',
    dataRequired: [],
    usage: 'Best for ecological energetics and thermodynamics application',
    examples: ['First law thermodynamics', 'Second law', 'Entropy', 'Ecosystem energy'],
    defaultOptions: {
        title: 'First & Second Law Thermodynamics: Ecosystem Energy Flow',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'gppNppAutotrophicRespirationSubtractionDiagram': {
    name: 'GPP − Autotrophic Respiration = NPP Subtraction',
    category: 'Ecology',
    description: 'Diagram showing the relationship GPP − Ra = NPP with values and proportions for different biomes',
    dataRequired: [],
    usage: 'Best for primary productivity calculations',
    examples: ['GPP NPP calculation', 'Autotrophic respiration', 'Net primary productivity'],
    defaultOptions: {
        title: 'GPP − Autotrophic Respiration = NPP',
        showLabels: true,
        width: 850,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'assimilationNetProductionEcologicalEfficiencyCalculationFlowchart': {
    name: 'Assimilation, Net Production & Ecological Efficiency Flowchart',
    category: 'Ecology',
    description: 'Flowchart of energy partitioning: ingestion → assimilation → respiration → net production, with ecological efficiency calculations',
    dataRequired: [],
    usage: 'Best for secondary productivity and ecological efficiency',
    examples: ['Assimilation efficiency', 'Net production efficiency', 'Ecological efficiency', 'Energy budget'],
    defaultOptions: {
        title: 'Assimilation/Net Production/Ecological Efficiency Calculation Flowchart',
        showLabels: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'organismalEnergyBudgetIPRFPartitioningDiagram': {
    name: 'Organismal Energy Budget: I, P, R, F Partitioning',
    category: 'Ecology',
    description: 'Organismal energy budget showing partitioning of ingested energy into production, respiration, and faeces (I = P + R + F)',
    dataRequired: [],
    usage: 'Best for individual energy budgets and secondary productivity',
    examples: ['Energy budget', 'Ingestion', 'Faeces', 'Production respiration'],
    defaultOptions: {
        title: 'Organismal Energy Budget: I = P + R + F Partitioning',
        showLabels: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'threeTypesEcologicalPyramidsComparisonInvertedExampleDiagram': {
    name: 'Three Types of Ecological Pyramids: Comparison & Inverted Examples',
    category: 'Ecology',
    description: 'Comparison of pyramids of numbers, biomass, and energy including inverted pyramid examples',
    dataRequired: [],
    usage: 'Best for ecological pyramid comparison and inverted pyramid exceptions',
    examples: ['Pyramid of numbers', 'Pyramid of biomass', 'Pyramid of energy', 'Inverted pyramid'],
    defaultOptions: {
        title: 'Three Ecological Pyramid Types: Comparison & Inverted Examples',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'c3Vs_c4VsCamPhotosynthesisPathwayComparisonDiagram': {
    name: 'C3 vs C4 vs CAM Photosynthesis Pathway Comparison',
    category: 'Ecology',
    description: 'Comparison of C3, C4, and CAM photosynthesis pathways: carbon fixation strategy, water use efficiency, and habitat adaptation',
    dataRequired: [],
    usage: 'Best for plant physiology and photosynthesis adaptation teaching',
    examples: ['C3 photosynthesis', 'C4 photosynthesis', 'CAM', 'Water use efficiency'],
    defaultOptions: {
        title: 'C3 vs C4 vs CAM Photosynthesis Pathway Comparison',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'endothermVsEctothermRespiratoryEnergyLossComparisonChart': {
    name: 'Endotherm vs Ectotherm Respiratory Energy Loss Comparison',
    category: 'Ecology',
    description: 'Comparison chart of respiratory energy costs and energy budgets for endotherms and ectotherms',
    dataRequired: [],
    usage: 'Best for comparative physiology and energy allocation ecology',
    examples: ['Endotherm', 'Ectotherm', 'Thermoregulation cost', 'Energy budget comparison'],
    defaultOptions: {
        title: 'Endotherm vs Ectotherm: Respiratory Energy Loss Comparison',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'odumStyleEnergyFlowBoxArrowCompartmentDiagram': {
    name: 'Odum-Style Energy Flow: Box-Arrow Compartment',
    category: 'Ecology',
    description: 'Odum-style box-and-arrow compartment model of ecosystem energy flow with storage, input, output, and heat loss',
    dataRequired: [],
    usage: 'Best for systems ecology and energy flow modelling',
    examples: ['Odum energy flow', 'Compartment model', 'Systems ecology', 'Energy circuit'],
    defaultOptions: {
        title: 'Odum-Style Energy Flow: Box-Arrow Compartment Diagram',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'humanAppropriationNPPLandUseGlobalPieChartDiagram': {
    name: 'Human Appropriation of NPP: Land Use Global Pie Chart',
    category: 'Ecology',
    description: 'Global pie chart of human appropriation of net primary productivity by land use category',
    dataRequired: [],
    usage: 'Best for human impact on ecosystems and HANPP teaching',
    examples: ['HANPP', 'Human appropriation NPP', 'Land use', 'Global NPP'],
    defaultOptions: {
        title: 'Human Appropriation of NPP: Land Use Global Pie Chart',
        showLabels: true,
        width: 800,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'nppComparisonBarChartMajorEcosystemTypesDiagram': {
    name: 'NPP Comparison Bar Chart: Major Ecosystem Types',
    category: 'Ecology',
    description: 'Bar chart comparing net primary productivity values across major ecosystem types: tropical forest, ocean, grassland, desert',
    dataRequired: [],
    usage: 'Best for biome productivity comparison',
    examples: ['Biome productivity', 'NPP comparison', 'Tropical forest NPP', 'Desert productivity'],
    defaultOptions: {
        title: 'NPP Comparison: Major Ecosystem Types Bar Chart',
        showLabels: true,
        width: 900,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

// ===== BIOGEOCHEMICAL CYCLES =====
'reservoirFluxTurnoverTimeGeneralBiogeochemicalCycleDiagram': {
    name: 'Reservoir, Flux & Turnover Time: General Biogeochemical Cycle',
    category: 'Biogeochemical Cycles',
    description: 'General biogeochemical cycle model showing reservoirs, fluxes, and turnover time calculations',
    dataRequired: [],
    usage: 'Best for biogeochemical cycle concepts and quantitative framework',
    examples: ['Reservoir', 'Flux', 'Turnover time', 'Residence time'],
    defaultOptions: {
        title: 'Reservoir/Flux/Turnover Time: General Biogeochemical Cycle Model',
        showLabels: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'globalCarbonCycleReservoirsFluxesAnnotatedDiagram': {
    name: 'Global Carbon Cycle: Reservoirs & Fluxes Annotated',
    category: 'Biogeochemical Cycles',
    description: 'Annotated global carbon cycle showing major reservoirs (atmosphere, ocean, biosphere, lithosphere) and fluxes in GtC/yr',
    dataRequired: [],
    usage: 'Best for global carbon cycle and climate science',
    examples: ['Carbon cycle', 'Atmospheric CO2', 'Ocean carbon', 'Terrestrial carbon'],
    defaultOptions: {
        title: 'Global Carbon Cycle: Reservoirs & Fluxes — Annotated',
        showLabels: true,
        width: 1000,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'nitrogenCycleFixationNitrificationDenitrificationPathwayDiagram': {
    name: 'Nitrogen Cycle: Fixation, Nitrification & Denitrification',
    category: 'Biogeochemical Cycles',
    description: 'Complete nitrogen cycle showing fixation, ammonification, nitrification, and denitrification pathways with key microorganisms',
    dataRequired: [],
    usage: 'Best for nitrogen cycle and nutrient cycling teaching',
    examples: ['Nitrogen fixation', 'Nitrification', 'Denitrification', 'Ammonification'],
    defaultOptions: {
        title: 'Nitrogen Cycle: Fixation/Nitrification/Denitrification Pathway',
        showLabels: true,
        width: 950,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'phosphorusCycleSedimentaryNoAtmosphericPhaseAnnotatedDiagram': {
    name: 'Phosphorus Cycle: Sedimentary (No Atmospheric Phase)',
    category: 'Biogeochemical Cycles',
    description: 'Annotated phosphorus cycle highlighting its sedimentary nature with no significant atmospheric phase',
    dataRequired: [],
    usage: 'Best for phosphorus cycle and sedimentary biogeochemistry',
    examples: ['Phosphorus cycle', 'Sedimentary cycle', 'Weathering', 'Phosphate'],
    defaultOptions: {
        title: 'Phosphorus Cycle: Sedimentary — No Atmospheric Phase',
        showLabels: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'sulfurCycleDMSVolcanicSO2CombustionPathwayDiagram': {
    name: 'Sulfur Cycle: DMS, Volcanic SO₂ & Combustion Pathway',
    category: 'Biogeochemical Cycles',
    description: 'Sulfur cycle showing DMS from marine algae, volcanic SO₂, combustion sources, and atmospheric/terrestrial transformations',
    dataRequired: [],
    usage: 'Best for sulfur cycle and acid rain chemistry',
    examples: ['DMS', 'Sulfur cycle', 'SO2', 'Acid rain'],
    defaultOptions: {
        title: 'Sulfur Cycle: DMS/Volcanic SO₂/Combustion Pathway',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'hydrologicalCycleEvaporationTranspirationPrecipitationInfiltrationDiagram': {
    name: 'Hydrological Cycle: Evaporation, Transpiration, Precipitation & Infiltration',
    category: 'Biogeochemical Cycles',
    description: 'Complete water cycle showing evaporation, transpiration, condensation, precipitation, surface runoff, and infiltration',
    dataRequired: [],
    usage: 'Best for water cycle and hydrology teaching',
    examples: ['Water cycle', 'Evapotranspiration', 'Precipitation', 'Infiltration'],
    defaultOptions: {
        title: 'Hydrological Cycle: Evaporation/Transpiration/Precipitation/Infiltration',
        showLabels: true,
        width: 1000,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'liebigBarrelLawOfMinimumNutrientLimitationDiagram': {
    name: 'Liebig\'s Barrel: Law of the Minimum Nutrient Limitation',
    category: 'Biogeochemical Cycles',
    description: 'Liebig\'s barrel diagram illustrating the law of the minimum — productivity limited by the scarcest essential nutrient',
    dataRequired: [],
    usage: 'Best for nutrient limitation and Liebig\'s law teaching',
    examples: ['Liebig law of minimum', 'Limiting nutrient', 'Liebig barrel', 'Nutrient limitation'],
    defaultOptions: {
        title: "Liebig's Barrel: Law of the Minimum — Nutrient Limitation",
        showLabels: true,
        width: 750,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'eutrophicationStagesNutrientAlgalBloomHypoxiaSequenceDiagram': {
    name: 'Eutrophication Stages: Nutrient → Algal Bloom → Hypoxia Sequence',
    category: 'Biogeochemical Cycles',
    description: 'Sequential eutrophication stages from nutrient loading through algal bloom, decomposition, to hypoxic dead zone formation',
    dataRequired: [],
    usage: 'Best for eutrophication and nutrient cycle impacts',
    examples: ['Eutrophication sequence', 'Nutrient loading', 'Algal bloom', 'Dead zone'],
    defaultOptions: {
        title: 'Eutrophication: Nutrient → Algal Bloom → Hypoxia Sequence',
        showLabels: true,
        width: 950,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'mycorrhizalHyphalNetworkPhosphorusCarbonExchangeDiagram': {
    name: 'Mycorrhizal Hyphal Network: Phosphorus-Carbon Exchange',
    category: 'Biogeochemical Cycles',
    description: 'Mycorrhizal network showing bidirectional phosphorus (fungus→plant) and carbon (plant→fungus) exchange',
    dataRequired: [],
    usage: 'Best for mycorrhizal symbiosis and nutrient cycling',
    examples: ['Mycorrhizae', 'Hyphal network', 'Phosphorus cycling', 'Carbon exchange'],
    defaultOptions: {
        title: 'Mycorrhizal Hyphal Network: P/C Bidirectional Exchange',
        showLabels: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'haberBoschReactiveNitrogenGlobalBudgetAnthropogenicFlowDiagram': {
    name: 'Haber-Bosch: Reactive Nitrogen Global Budget & Anthropogenic Flow',
    category: 'Biogeochemical Cycles',
    description: 'Global reactive nitrogen budget showing the Haber-Bosch contribution and anthropogenic nitrogen flows',
    dataRequired: [],
    usage: 'Best for nitrogen pollution and the human nitrogen cycle',
    examples: ['Haber-Bosch', 'Reactive nitrogen', 'Nitrogen pollution', 'Anthropogenic N'],
    defaultOptions: {
        title: 'Haber-Bosch: Reactive Nitrogen Global Budget & Anthropogenic Flow',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

// ===== SPECIES INTERACTIONS =====
'interactionTypesPlusMinusZeroMatrixClassificationDiagram': {
    name: 'Interaction Types +/−/0 Matrix Classification',
    category: 'Species Interactions',
    description: 'Full matrix classification of all pairwise species interaction types using +/−/0 notation with ecological examples',
    dataRequired: [],
    usage: 'Best for species interaction classification',
    examples: ['Predation', 'Mutualism', 'Parasitism', 'Amensalism'],
    defaultOptions: {
        title: 'Species Interaction Types: +/−/0 Matrix Classification',
        showLabels: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'mycorrhizalFungusCarbonPhosphorusBidirectionalExchangeDiagram': {
    name: 'Mycorrhizal Fungus: Carbon-Phosphorus Bidirectional Exchange',
    category: 'Species Interactions',
    description: 'Detailed bidirectional exchange between plant root and mycorrhizal fungus: carbon from plant, phosphorus and water from fungus',
    dataRequired: [],
    usage: 'Best for mutualism and plant-fungus symbiosis teaching',
    examples: ['Mycorrhizal mutualism', 'Carbon flow', 'Phosphorus uptake', 'Plant symbiosis'],
    defaultOptions: {
        title: 'Mycorrhizal Fungus: Carbon ↔ Phosphorus Bidirectional Exchange',
        showLabels: true,
        width: 850,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'epiphyteHostTreeInquilinismPhoresisExamplesDiagram': {
    name: 'Epiphyte-Host Tree, Inquilinism & Phoresis Examples',
    category: 'Species Interactions',
    description: 'Illustrated examples of commensalism: epiphyte on host tree, inquilinism (e.g. bird in tree hollow), and phoresis (e.g. mites on beetles)',
    dataRequired: [],
    usage: 'Best for commensalism and symbiosis examples',
    examples: ['Epiphyte', 'Inquilinism', 'Phoresis', 'Commensalism examples'],
    defaultOptions: {
        title: 'Commensalism: Epiphyte/Host Tree, Inquilinism & Phoresis',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'macroVsMicroparasiteLifeCycleHostParasiteDiagram': {
    name: 'Macro vs Microparasite Life Cycle & Host-Parasite',
    category: 'Species Interactions',
    description: 'Comparison of macroparasite (helminths, ectoparasites) and microparasite (viruses, bacteria, protozoa) life cycles and host-parasite dynamics',
    dataRequired: [],
    usage: 'Best for parasite ecology and host-parasite coevolution',
    examples: ['Macroparasite', 'Microparasite', 'Parasite life cycle', 'Host-parasite dynamics'],
    defaultOptions: {
        title: 'Macro vs Microparasite Life Cycle & Host-Parasite Dynamics',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'lotkaVolterraCompetitionIsoclineCoexistenceDiagram': {
    name: 'Lotka-Volterra Competition: Isocline & Coexistence',
    category: 'Species Interactions',
    description: 'Lotka-Volterra interspecific competition model showing zero-growth isoclines and four outcomes: coexistence, competitive exclusion, unstable equilibrium',
    dataRequired: [],
    usage: 'Best for interspecific competition and competitive exclusion principle',
    examples: ['Competition isoclines', 'Competitive exclusion', 'Coexistence', 'Lotka-Volterra competition'],
    defaultOptions: {
        title: 'Lotka-Volterra Competition: Isoclines & Coexistence Outcomes',
        showLabels: true,
        width: 950,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'typeIIIFunctionalResponseSigmoidalPredationRateCurveDiagram': {
    name: 'Type I/II/III Functional Response: Sigmoidal Predation Rate Curve',
    category: 'Species Interactions',
    description: 'Three types of predator functional response curves (linear, hyperbolic, sigmoidal) with Type III density-dependent learning effect',
    dataRequired: [],
    usage: 'Best for predation theory and functional response teaching',
    examples: ['Type I functional response', 'Type II', 'Type III sigmoidal', 'Predation rate'],
    defaultOptions: {
        title: 'Functional Responses Type I/II/III: Predation Rate Curves',
        showLabels: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'constitutiveVsInducedPlantDefenceChemicalAlkaloidTanninDiagram': {
    name: 'Constitutive vs Induced Plant Defence: Alkaloids & Tannins',
    category: 'Species Interactions',
    description: 'Comparison of constitutive (always present) and induced (damage-triggered) plant chemical defences including alkaloids and tannins',
    dataRequired: [],
    usage: 'Best for plant defence and herbivory ecology',
    examples: ['Plant defence', 'Alkaloids', 'Tannins', 'Induced defence'],
    defaultOptions: {
        title: 'Constitutive vs Induced Plant Defence: Alkaloids & Tannins',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'allelopathyJugloneBlackWalnutInhibitionZoneDiagram': {
    name: 'Allelopathy: Juglone & Black Walnut Inhibition Zone',
    category: 'Species Interactions',
    description: 'Allelopathy diagram showing juglone production by black walnut and inhibition zone for sensitive plants',
    dataRequired: [],
    usage: 'Best for allelopathy and chemical ecology',
    examples: ['Allelopathy', 'Juglone', 'Black walnut', 'Chemical inhibition'],
    defaultOptions: {
        title: 'Allelopathy: Juglone & Black Walnut Inhibition Zone',
        showLabels: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'endosymbiosisOriginMitochondriaChloroplastEvidenceDiagram': {
    name: 'Endosymbiosis: Origin of Mitochondria & Chloroplasts Evidence',
    category: 'Species Interactions',
    description: 'Evidence-based diagram for endosymbiotic theory: mitochondria from alphaproteobacteria, chloroplasts from cyanobacteria',
    dataRequired: [],
    usage: 'Best for endosymbiosis and evolutionary cell biology',
    examples: ['Endosymbiosis', 'Mitochondria origin', 'Chloroplast origin', 'Cyanobacteria'],
    defaultOptions: {
        title: 'Endosymbiosis: Origin of Mitochondria & Chloroplasts — Evidence',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'humanGutMicrobiomeCompositionDiversityHealthLinkageDiagram': {
    name: 'Human Gut Microbiome: Composition, Diversity & Health Linkage',
    category: 'Species Interactions',
    description: 'Gut microbiome composition (Firmicutes, Bacteroidetes, etc.), diversity indices, and health linkages to immunity, metabolism, mental health',
    dataRequired: [],
    usage: 'Best for microbiome biology and host-microbiome symbiosis',
    examples: ['Gut microbiome', 'Bacteroidetes', 'Dysbiosis', 'Microbiome health'],
    defaultOptions: {
        title: 'Human Gut Microbiome: Composition, Diversity & Health Linkage',
        showLabels: true,
        width: 950,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

// ===== POPULATION ECOLOGY =====
'populationDensityDistributionRandomUniformClumpedPatternDiagram': {
    name: 'Population Density Distribution: Random, Uniform & Clumped',
    category: 'Population Ecology',
    description: 'Spatial distribution patterns of populations: random, uniform (regular), and clumped (aggregated) with ecological causes',
    dataRequired: [],
    usage: 'Best for population ecology and spatial distribution',
    examples: ['Clumped distribution', 'Uniform distribution', 'Random distribution', 'Spatial ecology'],
    defaultOptions: {
        title: 'Population Distribution Patterns: Random/Uniform/Clumped',
        showLabels: true,
        width: 900,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'jCurveVsScurveExponentialVsLogisticGrowthComparisonDiagram': {
    name: 'J-Curve vs S-Curve: Exponential vs Logistic Growth',
    category: 'Population Ecology',
    description: 'Comparison of J-shaped exponential growth and S-shaped logistic growth curves with carrying capacity and limiting factors',
    dataRequired: [],
    usage: 'Best for population growth models teaching',
    examples: ['Exponential growth', 'Logistic growth', 'Carrying capacity', 'J-curve S-curve'],
    defaultOptions: {
        title: 'J-Curve vs S-Curve: Exponential vs Logistic Growth',
        showLabels: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'densityDependentVsIndependentBirthDeathRateCrossoverDiagram': {
    name: 'Density-Dependent vs Independent: Birth/Death Rate Crossover',
    category: 'Population Ecology',
    description: 'Graph showing density-dependent birth and death rate lines crossing at carrying capacity versus density-independent factors',
    dataRequired: [],
    usage: 'Best for population regulation and carrying capacity teaching',
    examples: ['Density dependence', 'Birth rate', 'Death rate', 'Carrying capacity crossover'],
    defaultOptions: {
        title: 'Density-Dependent vs Independent: Birth/Death Rate Crossover',
        showLabels: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'survivorshipCurveTypeIIIIILogScalePlotDiagram': {
    name: 'Survivorship Curves Type I, II & III (Log Scale)',
    category: 'Population Ecology',
    description: 'Log-scale survivorship curves for Type I (late loss), Type II (constant), and Type III (early loss) with examples',
    dataRequired: [],
    usage: 'Best for life history theory and survivorship analysis',
    examples: ['Type I survivorship', 'Type III', 'Survivorship curve', 'Log scale'],
    defaultOptions: {
        title: 'Survivorship Curves: Type I/II/III (Log Scale)',
        showLabels: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'populationAgePyramidGrowingStableDecliningComparisonDiagram': {
    name: 'Population Age Pyramid: Growing, Stable & Declining Comparison',
    category: 'Population Ecology',
    description: 'Three age pyramid shapes comparing growing, stable, and declining population structures with demographic implications',
    dataRequired: [],
    usage: 'Best for demography and population age structure',
    examples: ['Age pyramid', 'Growing population', 'Declining population', 'Demographic transition'],
    defaultOptions: {
        title: 'Population Age Pyramids: Growing/Stable/Declining Comparison',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'lynxHareHudsonBayFurRecordOscillationTimeSeriesDiagram': {
    name: 'Lynx-Hare Hudson Bay Fur Record: Oscillation Time Series',
    category: 'Population Ecology',
    description: 'Historical time-series of lynx and snowshoe hare fur trade records from Hudson Bay Company showing predator-prey oscillations',
    dataRequired: [],
    usage: 'Best for predator-prey population cycles case study',
    examples: ['Lynx hare cycle', 'Hudson Bay', 'Population oscillation', 'Predator-prey time series'],
    defaultOptions: {
        title: 'Lynx-Hare Hudson Bay: Fur Record Oscillation Time Series',
        showLabels: true,
        width: 950,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'levinsPatchOccupancyMetapopulationColonisationExtinctionDiagram': {
    name: 'Levins Patch Occupancy: Metapopulation Colonisation & Extinction',
    category: 'Population Ecology',
    description: 'Levins metapopulation model showing patch occupancy, colonisation, local extinction, and regional persistence dynamics',
    dataRequired: [],
    usage: 'Best for metapopulation ecology and conservation biology',
    examples: ['Metapopulation', 'Levins model', 'Colonisation extinction', 'Patch occupancy'],
    defaultOptions: {
        title: 'Levins Patch Occupancy: Metapopulation Colonisation & Extinction',
        showLabels: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'markReleaseRecaptureLincolnPetersenSamplingProtocolDiagram': {
    name: 'Mark-Release-Recapture: Lincoln-Petersen Sampling Protocol',
    category: 'Population Ecology',
    description: 'Detailed sampling protocol diagram for Lincoln-Petersen mark-release-recapture method with assumptions and formula',
    dataRequired: [],
    usage: 'Best for population sampling methodology',
    examples: ['Lincoln-Petersen formula', 'MRR protocol', 'Population sampling', 'Recapture assumptions'],
    defaultOptions: {
        title: 'Mark-Release-Recapture: Lincoln-Petersen Sampling Protocol',
        showLabels: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'pvaStochasticSimulationExtinctionProbabilityTimeCurveDiagram': {
    name: 'PVA Stochastic Simulation: Extinction Probability-Time Curve',
    category: 'Population Ecology',
    description: 'Population viability analysis stochastic simulation showing cumulative extinction probability curves against time for different population sizes',
    dataRequired: [],
    usage: 'Best for conservation biology and PVA methodology',
    examples: ['PVA', 'Extinction probability', 'Stochastic simulation', 'Minimum viable population'],
    defaultOptions: {
        title: 'PVA Stochastic Simulation: Extinction Probability-Time Curve',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'maximumSustainableYieldLogisticGrowthHarvestRateDiagram': {
    name: 'Maximum Sustainable Yield: Logistic Growth & Harvest Rate',
    category: 'Population Ecology',
    description: 'MSY concept derived from logistic growth model showing harvest rate, population size, and sustainable yield relationship',
    dataRequired: [],
    usage: 'Best for fisheries management and sustainable harvesting',
    examples: ['Maximum sustainable yield', 'MSY', 'Logistic harvesting', 'K/2'],
    defaultOptions: {
        title: 'Maximum Sustainable Yield: Logistic Growth & Harvest Rate',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== BIOMES & HABITATS =====
'whittakerBiomeDiagramTemperaturePrecipitationSpaceDiagram': {
    name: 'Whittaker Biome Diagram: Temperature-Precipitation Space',
    category: 'Biomes & Habitats',
    description: 'Whittaker biome classification in temperature-precipitation climate space showing biome boundaries',
    dataRequired: [],
    usage: 'Best for biome classification and climate envelope teaching',
    examples: ['Whittaker biome', 'Climate space', 'Biome classification', 'Temperature precipitation'],
    defaultOptions: {
        title: 'Whittaker Biome Diagram: Temperature-Precipitation Space',
        showLabels: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'tropicalRainforestVerticalStratificationCanopyLayersDiagram': {
    name: 'Tropical Rainforest Vertical Stratification & Canopy Layers',
    category: 'Biomes & Habitats',
    description: 'Cross-section of tropical rainforest showing emergent, canopy, understorey, shrub, and forest floor layers with characteristic organisms',
    dataRequired: [],
    usage: 'Best for rainforest ecology and vertical zonation',
    examples: ['Canopy layer', 'Emergent layer', 'Forest floor', 'Vertical stratification'],
    defaultOptions: {
        title: 'Tropical Rainforest: Vertical Stratification & Canopy Layers',
        showLabels: true,
        width: 800,
        height: 950,
        backgroundColor: '#ffffff'
    }
},
'savannaWetDrySeasonProductivityFireRegimeAnnotatedDiagram': {
    name: 'Savanna: Wet/Dry Season Productivity & Fire Regime',
    category: 'Biomes & Habitats',
    description: 'Annotated savanna ecosystem showing seasonal productivity variation, fire regime, and grass-tree coexistence',
    dataRequired: [],
    usage: 'Best for savanna ecology and fire ecology teaching',
    examples: ['Savanna', 'Fire regime', 'Seasonal productivity', 'Grass-tree coexistence'],
    defaultOptions: {
        title: 'Savanna: Wet/Dry Season Productivity & Fire Regime',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'deciduousForestPhenologySeasonalLeafBudFlowerFruitTimelineDiagram': {
    name: 'Deciduous Forest Phenology: Seasonal Timeline',
    category: 'Biomes & Habitats',
    description: 'Annual phenology timeline of deciduous forest: leaf flush, bud burst, flowering, fruiting, and leaf fall',
    dataRequired: [],
    usage: 'Best for phenology and temperate forest ecology',
    examples: ['Phenology', 'Leaf flush', 'Deciduous forest', 'Seasonal timeline'],
    defaultOptions: {
        title: 'Deciduous Forest Phenology: Seasonal Leaf/Bud/Flower/Fruit Timeline',
        showLabels: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'podzolSoilProfileHorizonLeachingIlluviationAnnotatedDiagram': {
    name: 'Podzol Soil Profile: Horizon Leaching & Illuviation',
    category: 'Biomes & Habitats',
    description: 'Annotated podzol profile showing eluviation/leaching of the E horizon and illuviation accumulation in the B horizon',
    dataRequired: [],
    usage: 'Best for soil science and coniferous forest pedology',
    examples: ['Podzol', 'Eluviation', 'Illuviation', 'Soil horizon leaching'],
    defaultOptions: {
        title: 'Podzol Soil Profile: Horizon Leaching & Illuviation — Annotated',
        showLabels: true,
        width: 750,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'mollisol_chernozem_dark_organic_horizon_vs_Mediterranean_alfisol_profileDiagram': {
    name: 'Mollisol/Chernozem Dark Organic Horizon vs Mediterranean Alfisol Profile',
    category: 'Biomes & Habitats',
    description: 'Comparative soil profiles: Mollisol/Chernozem (deep dark A horizon, grassland) vs Mediterranean Alfisol (clay-enriched B horizon)',
    dataRequired: [],
    usage: 'Best for comparative pedology and biome soil types',
    examples: ['Mollisol', 'Chernozem', 'Alfisol', 'Soil profile comparison'],
    defaultOptions: {
        title: 'Mollisol/Chernozem vs Mediterranean Alfisol Soil Profile',
        showLabels: true,
        width: 900,
        height: 900,
        backgroundColor: '#ffffff'
    }
},
'xerophyteAdaptationsCACMC4DroughtAvoidanceComparisonDiagram': {
    name: 'Xerophyte Adaptations: CAC, MC4 & Drought Avoidance',
    category: 'Biomes & Habitats',
    description: 'Comparison of xerophyte adaptations: structural (thick cuticle, sunken stomata), CAM, C4, and drought avoidance strategies',
    dataRequired: [],
    usage: 'Best for xerophyte adaptations and arid biome ecology',
    examples: ['Xerophyte', 'CAM adaptation', 'Drought avoidance', 'Sunken stomata'],
    defaultOptions: {
        title: 'Xerophyte Adaptations: CAM/C4/Drought Avoidance Comparison',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'permafrostActiveLayerThawCarbonReleaseFeedbackLoopDiagram': {
    name: 'Permafrost Active Layer Thaw: Carbon Release Feedback Loop',
    category: 'Biomes & Habitats',
    description: 'Permafrost thaw → active layer deepening → soil carbon release → warming → further thaw positive feedback loop',
    dataRequired: [],
    usage: 'Best for tundra ecology and climate change feedback loops',
    examples: ['Permafrost thaw', 'Tundra carbon', 'Climate feedback', 'Active layer'],
    defaultOptions: {
        title: 'Permafrost Active Layer Thaw: Carbon Release Feedback Loop',
        showLabels: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'coralReefZooxanthellaeBlleachingHeatStressResponseDiagram': {
    name: 'Coral Reef: Zooxanthellae Bleaching & Heat Stress Response',
    category: 'Biomes & Habitats',
    description: 'Mechanism of coral bleaching: heat stress → zooxanthellae expulsion → bleaching → starvation/mortality or recovery',
    dataRequired: [],
    usage: 'Best for coral reef ecology and climate change impacts',
    examples: ['Coral bleaching', 'Zooxanthellae', 'Heat stress', 'Symbiodinium'],
    defaultOptions: {
        title: 'Coral Reef: Zooxanthellae Bleaching & Heat Stress Response',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'projectedBiomeShiftPolewardUpslope2100ScenarioDiagram': {
    name: 'Projected Biome Shift: Poleward & Upslope to 2100',
    category: 'Biomes & Habitats',
    description: 'Diagram of projected biome shifts under 2100 warming scenarios showing poleward and upslope range movements',
    dataRequired: [],
    usage: 'Best for climate change ecology and range shift projections',
    examples: ['Biome shift', 'Range shift', 'Poleward migration', 'Climate change ecology'],
    defaultOptions: {
        title: 'Projected Biome Shifts: Poleward & Upslope to 2100',
        showLabels: true,
        width: 1000,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

// ===== SUCCESSION =====
'sereSeralStagesPioneerToClimaxCommunityTimelineArrowDiagram': {
    name: 'Sere & Seral Stages: Pioneer to Climax Community Timeline',
    category: 'Succession',
    description: 'Timeline arrow diagram of primary succession seral stages from pioneer community to climax community',
    dataRequired: [],
    usage: 'Best for succession and community development teaching',
    examples: ['Primary succession', 'Seral stages', 'Pioneer community', 'Climax community'],
    defaultOptions: {
        title: 'Sere & Seral Stages: Pioneer → Climax Community Timeline',
        showLabels: true,
        width: 1000,
        height: 600,
        backgroundColor: '#ffffff'
    }
},
'lithosereBarRockLichenMossHerbShrubWoodlandSevenStagesDiagram': {
    name: 'Lithosere: Bare Rock → Lichen → Moss → Herb → Shrub → Woodland',
    category: 'Succession',
    description: 'Seven-stage lithosere succession from bare rock through lichen, moss, herb, shrub, to woodland climax',
    dataRequired: [],
    usage: 'Best for primary succession on rock and lithosere teaching',
    examples: ['Lithosere', 'Lichen pioneer', 'Rock succession', 'Primary succession stages'],
    defaultOptions: {
        title: 'Lithosere: Bare Rock → Lichen → Moss → Herb → Shrub → Woodland (7 Stages)',
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'abandonedFieldSuccessionAnnualWeedShrubWoodlandTimelineDiagram': {
    name: 'Abandoned Field Succession: Annual Weed → Shrub → Woodland',
    category: 'Succession',
    description: 'Secondary succession timeline on abandoned agricultural field from annual weeds through perennial grass, shrub, to woodland',
    dataRequired: [],
    usage: 'Best for secondary succession and old-field ecology',
    examples: ['Secondary succession', 'Old-field succession', 'Abandoned field', 'Woodland succession'],
    defaultOptions: {
        title: 'Abandoned Field Succession: Annual Weed → Shrub → Woodland Timeline',
        showLabels: true,
        width: 1000,
        height: 650,
        backgroundColor: '#ffffff'
    }
},
'facilitationInhibitionToleranceMechanismComparisonFlowchartDiagram': {
    name: 'Facilitation, Inhibition & Tolerance Mechanisms Comparison',
    category: 'Succession',
    description: 'Flowchart comparing three succession mechanisms: facilitation (Connell & Slatyer), inhibition, and tolerance models',
    dataRequired: [],
    usage: 'Best for succession mechanisms and Connell-Slatyer model teaching',
    examples: ['Facilitation', 'Inhibition', 'Tolerance model', 'Connell Slatyer'],
    defaultOptions: {
        title: 'Facilitation/Inhibition/Tolerance Succession Mechanisms Comparison',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'successionSpeciesDiversityBiomassNPPRatioChangeTimeSeriesDiagram': {
    name: 'Succession: Species Diversity, Biomass & NPP Ratio Time Series',
    category: 'Succession',
    description: 'Time series showing changes in species diversity, standing biomass, NPP, and P/R ratio through succession',
    dataRequired: [],
    usage: 'Best for ecosystem development and Odum succession attributes',
    examples: ['Succession attributes', 'P/R ratio', 'Biomass succession', 'Species diversity succession'],
    defaultOptions: {
        title: 'Succession: Species Diversity/Biomass/NPP/P:R Ratio Time Series',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'sandDuneZonationStrandlineYellowGreyDuneSlackWoodlandDiagram': {
    name: 'Sand Dune Zonation: Strandline → Yellow → Grey Dune → Slack → Woodland',
    category: 'Succession',
    description: 'Cross-section of sand dune succession from strandline through yellow dune, grey dune, dune slack, to scrub/woodland',
    dataRequired: [],
    usage: 'Best for psammosere and coastal succession teaching',
    examples: ['Psammosere', 'Sand dune succession', 'Yellow dune', 'Dune slack'],
    defaultOptions: {
        title: 'Sand Dune Zonation: Strandline → Yellow → Grey → Slack → Woodland',
        showLabels: true,
        width: 1000,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'callunaPioneerBuildingMatureDegenerateHeathlandPhaseCycleDiagram': {
    name: 'Calluna Heathland Phase Cycle: Pioneer → Building → Mature → Degenerate',
    category: 'Succession',
    description: 'Calluna vulgaris heathland cyclic succession through pioneer, building, mature, and degenerate phases',
    dataRequired: [],
    usage: 'Best for heathland ecology and cyclical succession',
    examples: ['Calluna', 'Heathland phases', 'Cyclic succession', 'Ling heather'],
    defaultOptions: {
        title: 'Calluna Heathland: Pioneer → Building → Mature → Degenerate Phase Cycle',
        showLabels: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'intermediateDisturbanceHypothesisBellCurveSpeciesDiversityDiagram': {
    name: 'Intermediate Disturbance Hypothesis: Bell Curve Species Diversity',
    category: 'Succession',
    description: 'Bell-shaped curve showing peak species diversity at intermediate disturbance levels in the IDH model',
    dataRequired: [],
    usage: 'Best for IDH and disturbance ecology teaching',
    examples: ['IDH bell curve', 'Intermediate disturbance', 'Species diversity peak', 'Disturbance ecology'],
    defaultOptions: {
        title: 'Intermediate Disturbance Hypothesis: Bell Curve Species Diversity',
        showLabels: true,
        width: 850,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'odumPRRatioProductionRespirationSuccessionalStageChangeDiagram': {
    name: 'Odum P/R Ratio: Production/Respiration Successional Stage Change',
    category: 'Succession',
    description: 'Odum\'s P/R ratio change through succession stages from P/R > 1 (early) to P/R ≈ 1 (climax) with biomass accumulation',
    dataRequired: [],
    usage: 'Best for ecosystem energetics and succession maturity index',
    examples: ['P/R ratio', 'Odum succession', 'Climax P/R = 1', 'Ecosystem maturity'],
    defaultOptions: {
        title: "Odum P/R Ratio: Production/Respiration Change Through Successional Stages",
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'restorationSuccessionJumpStartNuclearPlantingTrajectoryDiagram': {
    name: 'Restoration Succession: Jump-Start & Nuclear Planting Trajectory',
    category: 'Succession',
    description: 'Applied succession diagram showing restoration techniques (nuclear planting, seed addition) to jump-start and redirect succession trajectories',
    dataRequired: [],
    usage: 'Best for restoration ecology and applied succession',
    examples: ['Restoration ecology', 'Nuclear planting', 'Succession trajectory', 'Ecological restoration'],
    defaultOptions: {
        title: 'Restoration Succession: Jump-Start & Nuclear Planting Trajectory',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},

// ===== INFLAMMATION =====
'cardinalSignsOfInflammationAnnotatedDiagram': {
    name: 'Cardinal Signs of Inflammation — Annotated',
    category: 'Inflammation',
    description: 'Annotated diagram of the five cardinal signs of inflammation: rubor, calor, tumor, dolor, functio laesa with cellular basis',
    dataRequired: [],
    usage: 'Best for inflammation and pathology teaching',
    examples: ['Rubor', 'Calor', 'Tumor', 'Dolor', 'Functio laesa'],
    defaultOptions: {
        title: 'Cardinal Signs of Inflammation — Annotated',
        showLabels: true,
        width: 850,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'pampDampPatternRecognitionReceptorDiagram': {
    name: 'PAMP & DAMP Pattern Recognition Receptor Diagram',
    category: 'Inflammation',
    description: 'Diagram of PAMPs (pathogen-associated) and DAMPs (damage-associated) recognised by PRRs including TLRs, NLRs, and CLRs',
    dataRequired: [],
    usage: 'Best for innate immune recognition and inflammation initiation',
    examples: ['PAMP', 'DAMP', 'Pattern recognition receptor', 'TLR NLR'],
    defaultOptions: {
        title: 'PAMP & DAMP: Pattern Recognition Receptor Diagram',
        showLabels: true,
        width: 900,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'vasodilationPermeabilityExudateTransudateDiagram': {
    name: 'Vasodilation, Permeability, Exudate & Transudate',
    category: 'Inflammation',
    description: 'Vascular changes in acute inflammation: vasodilation, increased permeability, and distinction between exudate and transudate',
    dataRequired: [],
    usage: 'Best for vascular changes in inflammation teaching',
    examples: ['Vasodilation', 'Vascular permeability', 'Exudate', 'Transudate'],
    defaultOptions: {
        title: 'Vasodilation/Permeability: Exudate vs Transudate',
        showLabels: true,
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'leukocyteAdhesionCascadeRollingTransmigrationDiagram': {
    name: 'Leukocyte Adhesion Cascade: Rolling & Transmigration',
    category: 'Inflammation',
    description: 'Step-by-step leukocyte adhesion cascade: margination, rolling (selectins), firm adhesion (integrins), transmigration (PECAM-1)',
    dataRequired: [],
    usage: 'Best for leukocyte recruitment and inflammatory cascade',
    examples: ['Selectin rolling', 'ICAM-1', 'Diapedesis', 'Leukocyte transmigration'],
    defaultOptions: {
        title: 'Leukocyte Adhesion Cascade: Rolling/Firm Adhesion/Transmigration',
        showLabels: true,
        width: 950,
        height: 700,
        backgroundColor: '#ffffff'
    }
},
'arachidonicAcidCoxLoxPathwayMediatorsDiagram': {
    name: 'Arachidonic Acid COX & LOX Pathway Mediators',
    category: 'Inflammation',
    description: 'Arachidonic acid metabolism via COX (prostaglandins, thromboxanes) and LOX (leukotrienes, lipoxins) pathways with NSAID targets',
    dataRequired: [],
    usage: 'Best for lipid mediator biochemistry and NSAID pharmacology',
    examples: ['Arachidonic acid', 'COX pathway', 'Prostaglandins', 'Leukotrienes'],
    defaultOptions: {
        title: 'Arachidonic Acid: COX/LOX Pathway Mediators',
        showLabels: true,
        width: 950,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'phagocytosisOpsonisationRespiratorlyBurstStepsDiagram': {
    name: 'Phagocytosis, Opsonisation & Respiratory Burst Steps',
    category: 'Inflammation',
    description: 'Step-by-step phagocytosis: opsonisation, receptor binding, phagosome formation, lysosome fusion, and NADPH oxidase respiratory burst',
    dataRequired: [],
    usage: 'Best for phagocyte biology and innate killing mechanisms',
    examples: ['Phagocytosis steps', 'Opsonisation', 'Phagolysosome', 'Respiratory burst'],
    defaultOptions: {
        title: 'Phagocytosis/Opsonisation/Respiratory Burst Steps',
        showLabels: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'acutePhaseResponseFeverLeukocytosisDiagram': {
    name: 'Acute Phase Response: Fever & Leukocytosis',
    category: 'Inflammation',
    description: 'Systemic acute phase response: IL-6/IL-1/TNF-α signalling to liver (acute phase proteins), hypothalamus (fever), and bone marrow (leukocytosis)',
    dataRequired: [],
    usage: 'Best for systemic inflammation and acute phase response',
    examples: ['Acute phase proteins', 'CRP', 'Fever mechanism', 'Leukocytosis'],
    defaultOptions: {
        title: 'Acute Phase Response: Fever & Leukocytosis',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'proResolutionMediatorsEfferocytosisOutcomesDiagram': {
    name: 'Pro-Resolution Mediators & Efferocytosis Outcomes',
    category: 'Inflammation',
    description: 'Resolution of inflammation via lipoxins, resolvins, protectins, efferocytosis of apoptotic neutrophils, and anti-inflammatory mediator release',
    dataRequired: [],
    usage: 'Best for inflammation resolution and chronic inflammation prevention',
    examples: ['Inflammation resolution', 'Lipoxins', 'Efferocytosis', 'Resolvins'],
    defaultOptions: {
        title: 'Pro-Resolution Mediators & Efferocytosis: Inflammation Resolution',
        showLabels: true,
        width: 950,
        height: 750,
        backgroundColor: '#ffffff'
    }
},
'granulomaFormationCaseatingNonCaseatingDiagram': {
    name: 'Granuloma Formation: Caseating & Non-Caseating',
    category: 'Inflammation',
    description: 'Granuloma structure and formation: macrophage → epithelioid cells → giant cells, with caseating (TB) vs non-caseating (sarcoidosis) types',
    dataRequired: [],
    usage: 'Best for chronic inflammation and granuloma pathology',
    examples: ['Granuloma', 'Caseating necrosis', 'Giant cells', 'Tuberculosis granuloma'],
    defaultOptions: {
        title: 'Granuloma Formation: Caseating vs Non-Caseating',
        showLabels: true,
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'sepsisProgressionSIRSSepticShockMODSDiagram': {
    name: 'Sepsis Progression: SIRS → Septic Shock → MODS',
    category: 'Inflammation',
    description: 'Clinical progression from infection through SIRS, sepsis, severe sepsis, septic shock, to multi-organ dysfunction syndrome',
    dataRequired: [],
    usage: 'Best for sepsis pathophysiology and clinical staging',
    examples: ['SIRS', 'Septic shock', 'MODS', 'Sepsis progression'],
    defaultOptions: {
        title: 'Sepsis Progression: SIRS → Septic Shock → MODS',
        showLabels: true,
        width: 950,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

// ===== AUTOIMMUNITY =====
'centralPeripheralToleranceThymicSelectionDiagram': {
    name: 'Central & Peripheral Tolerance: Thymic Selection',
    category: 'Autoimmunity',
    description: 'Central tolerance (thymic negative selection, bone marrow deletion) and peripheral tolerance (anergy, Treg suppression, AICD) mechanisms',
    dataRequired: [],
    usage: 'Best for self-tolerance and autoimmunity prevention teaching',
    examples: ['Central tolerance', 'Peripheral tolerance', 'Anergy', 'Treg suppression'],
    defaultOptions: {
        title: 'Central & Peripheral Tolerance: Thymic Selection & Peripheral Mechanisms',
        showLabels: true,
        width: 950,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'molecularMimicryBystanderActivationCrypticEpitopeDiagram': {
    name: 'Molecular Mimicry, Bystander Activation & Cryptic Epitope',
    category: 'Autoimmunity',
    description: 'Three mechanisms of autoimmunity breaking: molecular mimicry, bystander activation, and cryptic epitope exposure',
    dataRequired: [],
    usage: 'Best for autoimmunity mechanisms and trigger teaching',
    examples: ['Molecular mimicry', 'Bystander activation', 'Cryptic epitope', 'Autoimmunity triggers'],
    defaultOptions: {
        title: 'Autoimmunity Mechanisms: Molecular Mimicry/Bystander Activation/Cryptic Epitope',
        showLabels: true,
        width: 950,
        height: 800,
        backgroundColor: '#ffffff'
    }
},
'gellCoombsTypeIIIIIIVHypersensitivityMechanismsDiagram': {
    name: 'Gell-Coombs Hypersensitivity Types I–IV Mechanisms',
    category: 'Autoimmunity',
    description: 'Four-panel mechanism diagram for Gell-Coombs hypersensitivity Types I–IV with clinical disease examples',
    dataRequired: [],
    usage: 'Best for hypersensitivity classification and autoimmune disease mechanisms',
    examples: ['Type I IgE', 'Type II cytotoxic', 'Type III immune complex', 'Type IV DTH'],
    defaultOptions: {
        title: 'Gell-Coombs Hypersensitivity Types I–IV Mechanisms',
        showLabels: true,
        width: 1000,
        height: 850,
        backgroundColor: '#ffffff'
    }
},
'organSpecificAutoimmuneDiseaseTargetAnatomyDiagram': {
    name: 'Organ-Specific Autoimmune Disease: Target Anatomy',
    category: 'Autoimmunity',
    description: 'Annotated body diagram mapping organ-specific autoimmune diseases to their target tissue (thyroid, pancreas, adrenal, joints, CNS)',
    dataRequired: [],
    usage: 'Best for autoimmune disease overview and target organ mapping',
    examples: ['Hashimoto thyroiditis', 'Type 1 diabetes', 'Multiple sclerosis', 'Organ-specific autoimmunity'],
    defaultOptions: {
        title: 'Organ-Specific Autoimmune Disease: Target Anatomy Map',
        showLabels: true,
        width: 800,
        height: 950,
        backgroundColor: '#ffffff'
    }
},
'sleImmuneComplexDepositonLupusNephritisDiagram': {
    name: 'SLE: Immune Complex Deposition & Lupus Nephritis',
    category: 'Autoimmunity',
    description: 'SLE pathogenesis: anti-dsDNA antibody production → immune complex formation → complement activation → glomerular deposition → lupus nephritis',
    dataRequired: [],
    usage: 'Best for SLE pathophysiology and type III hypersensitivity',
    examples: ['SLE', 'Lupus nephritis', 'Immune complex deposition', 'Anti-dsDNA'],
    defaultOptions: {
        title: 'SLE: Immune Complex Deposition & Lupus Nephritis',
        showLabels: true,
        width: 950,
        height: 800,
        backgroundColor: '#ffffff'
    }
},



        // ===== MENDELIAN GENETICS =====
        'mendelPeaPlantSevenTraitsAnnotatedDiagram': {
            name: 'Mendel\'s Pea Plant Seven Traits',
            category: 'Mendelian Genetics',
            description: 'Annotated diagram of all seven pea plant traits studied by Mendel with dominant and recessive phenotypes',
            dataRequired: [],
            usage: 'Best for introducing Mendelian genetics and trait inheritance',
            examples: ['Mendel', 'Pea plant traits', 'Dominant and recessive'],
            defaultOptions: {
                title: 'Mendel\'s Seven Pea Plant Traits',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'segregationAndIndependentAssortmentMeiosisDiagram': {
            name: 'Segregation and Independent Assortment in Meiosis',
            category: 'Mendelian Genetics',
            description: 'Diagram showing Mendel\'s laws of segregation and independent assortment as they occur during meiosis',
            dataRequired: [],
            usage: 'Best for linking Mendelian laws to meiotic divisions',
            examples: ['Law of segregation', 'Independent assortment', 'Meiosis'],
            defaultOptions: {
                title: 'Segregation and Independent Assortment in Meiosis',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'monohybridDihybridTestcrossComparisonDiagram': {
            name: 'Monohybrid, Dihybrid and Testcross Comparison',
            category: 'Mendelian Genetics',
            description: 'Side-by-side comparison of monohybrid, dihybrid and testcross setups and expected offspring ratios',
            dataRequired: [],
            usage: 'Best for comparing cross types and their outcomes',
            examples: ['Monohybrid cross', 'Dihybrid cross', 'Testcross'],
            defaultOptions: {
                title: 'Monohybrid, Dihybrid and Testcross Comparison',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'mendelianOffspringRatioSummaryTableDiagram': {
            name: 'Mendelian Offspring Ratio Summary Table',
            category: 'Mendelian Genetics',
            description: 'Summary table of genotypic and phenotypic ratios for common Mendelian crosses',
            dataRequired: [],
            usage: 'Best for quick reference of expected offspring ratios',
            examples: ['Offspring ratios', 'Genotypic ratio', 'Phenotypic ratio'],
            defaultOptions: {
                title: 'Mendelian Offspring Ratio Summary',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'genotypeToPhenotypeExpressionMappingDiagram': {
            name: 'Genotype to Phenotype Expression Mapping',
            category: 'Mendelian Genetics',
            description: 'Diagram mapping genotypes to their resulting phenotypes including dominance relationships',
            dataRequired: [],
            usage: 'Best for explaining genotype–phenotype relationships',
            examples: ['Genotype', 'Phenotype', 'Gene expression'],
            defaultOptions: {
                title: 'Genotype to Phenotype Expression Mapping',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'incompleteDominanceCodominanceEpistasisComparisonDiagram': {
            name: 'Incomplete Dominance, Codominance and Epistasis Comparison',
            category: 'Mendelian Genetics',
            description: 'Comparative diagram of incomplete dominance, codominance and epistasis with phenotypic outcomes',
            dataRequired: [],
            usage: 'Best for contrasting non-Mendelian inheritance patterns',
            examples: ['Incomplete dominance', 'Codominance', 'Epistasis'],
            defaultOptions: {
                title: 'Incomplete Dominance, Codominance and Epistasis Comparison',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chiSquaredGoodnesOfFitCalculationWorkflowDiagram': {
            name: 'Chi-Squared Goodness of Fit Calculation Workflow',
            category: 'Mendelian Genetics',
            description: 'Step-by-step workflow for performing a chi-squared goodness of fit test on genetic cross data',
            dataRequired: [],
            usage: 'Best for statistical analysis of genetic cross results',
            examples: ['Chi-squared test', 'Goodness of fit', 'Statistical genetics'],
            defaultOptions: {
                title: 'Chi-Squared Goodness of Fit Calculation Workflow',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'controlledCrossPollinationEmasculationStepsDiagram': {
            name: 'Controlled Cross-Pollination and Emasculation Steps',
            category: 'Mendelian Genetics',
            description: 'Step-by-step diagram of controlled cross-pollination and emasculation technique used in plant breeding experiments',
            dataRequired: [],
            usage: 'Best for explaining experimental technique in plant genetics',
            examples: ['Cross-pollination', 'Emasculation', 'Plant breeding'],
            defaultOptions: {
                title: 'Controlled Cross-Pollination and Emasculation Steps',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'humanAutosomalRecessiveDominantCarrierRiskDiagram': {
            name: 'Human Autosomal Recessive, Dominant and Carrier Risk',
            category: 'Mendelian Genetics',
            description: 'Diagram showing inheritance risk for autosomal recessive and dominant conditions including carrier status',
            dataRequired: [],
            usage: 'Best for clinical genetics and inheritance risk counselling',
            examples: ['Autosomal recessive', 'Carrier risk', 'Human genetics'],
            defaultOptions: {
                title: 'Human Autosomal Recessive and Dominant Carrier Risk',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'linkedGenesRecombinationFrequencyDeviationDiagram': {
            name: 'Linked Genes and Recombination Frequency Deviation',
            category: 'Mendelian Genetics',
            description: 'Diagram illustrating how linked genes deviate from independent assortment and how recombination frequency reflects map distance',
            dataRequired: [],
            usage: 'Best for explaining gene linkage and genetic mapping',
            examples: ['Gene linkage', 'Recombination frequency', 'Genetic map'],
            defaultOptions: {
                title: 'Linked Genes and Recombination Frequency Deviation',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== PUNNETT SQUARES =====
        'punnettSquarePurposeAndStructureAnnotatedDiagram': {
            name: 'Punnett Square Purpose and Structure Annotated',
            category: 'Punnett Squares',
            description: 'Annotated diagram explaining the purpose and structural layout of a Punnett square',
            dataRequired: [],
            usage: 'Best for introducing Punnett square methodology',
            examples: ['Punnett square', 'Genetic cross', 'Allele combinations'],
            defaultOptions: {
                title: 'Punnett Square Purpose and Structure',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'twoByTwoAndFourByFourGridConstructionStepsDiagram': {
            name: '2x2 and 4x4 Punnett Grid Construction Steps',
            category: 'Punnett Squares',
            description: 'Step-by-step construction of both 2x2 monohybrid and 4x4 dihybrid Punnett square grids',
            dataRequired: [],
            usage: 'Best for teaching grid construction for mono and dihybrid crosses',
            examples: ['Grid construction', 'Monohybrid grid', 'Dihybrid grid'],
            defaultOptions: {
                title: '2x2 and 4x4 Punnett Grid Construction Steps',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'genotypicPhenotypicRatioExtractionAnnotatedGridDiagram': {
            name: 'Genotypic and Phenotypic Ratio Extraction from Annotated Grid',
            category: 'Punnett Squares',
            description: 'Annotated Punnett grid showing how to extract genotypic and phenotypic ratios from cross results',
            dataRequired: [],
            usage: 'Best for teaching ratio extraction from completed Punnett squares',
            examples: ['Genotypic ratio', 'Phenotypic ratio', 'Ratio extraction'],
            defaultOptions: {
                title: 'Genotypic and Phenotypic Ratio Extraction',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'monohybridDihybridSexLinkedGridTypeComparisonDiagram': {
            name: 'Monohybrid, Dihybrid and Sex-Linked Grid Type Comparison',
            category: 'Punnett Squares',
            description: 'Comparison of Punnett square grid types for monohybrid, dihybrid and sex-linked crosses',
            dataRequired: [],
            usage: 'Best for comparing different Punnett square applications',
            examples: ['Sex-linked cross', 'Grid type comparison', 'Punnett square types'],
            defaultOptions: {
                title: 'Monohybrid, Dihybrid and Sex-Linked Grid Comparison',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'incompleteDominanceCodominanceABOBloodTypeGridDiagram': {
            name: 'Incomplete Dominance, Codominance and ABO Blood Type Grid',
            category: 'Punnett Squares',
            description: 'Punnett square grids demonstrating incomplete dominance, codominance and ABO blood group inheritance',
            dataRequired: [],
            usage: 'Best for non-Mendelian Punnett square applications',
            examples: ['ABO blood type', 'Codominance grid', 'Incomplete dominance grid'],
            defaultOptions: {
                title: 'Incomplete Dominance, Codominance and ABO Blood Type Grids',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'trihybridForkedLineBranchProbabilityDiagram': {
            name: 'Trihybrid Forked-Line Branch Probability',
            category: 'Punnett Squares',
            description: 'Forked-line (branch diagram) method for calculating trihybrid cross offspring probabilities',
            dataRequired: [],
            usage: 'Best for trihybrid cross probability calculation',
            examples: ['Trihybrid cross', 'Forked-line method', 'Branch diagram'],
            defaultOptions: {
                title: 'Trihybrid Forked-Line Branch Probability',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'fractionRatioPercentageConversionFromGridDiagram': {
            name: 'Fraction, Ratio and Percentage Conversion from Grid',
            category: 'Punnett Squares',
            description: 'Diagram showing how to convert Punnett square results between fraction, ratio and percentage formats',
            dataRequired: [],
            usage: 'Best for quantitative interpretation of Punnett square outcomes',
            examples: ['Fraction conversion', 'Ratio to percentage', 'Quantitative genetics'],
            defaultOptions: {
                title: 'Fraction, Ratio and Percentage Conversion from Punnett Grid',
                showLabels: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'asymmetricAndPartiallyHomozygousParentGridLayoutDiagram': {
            name: 'Asymmetric and Partially Homozygous Parent Grid Layout',
            category: 'Punnett Squares',
            description: 'Punnett square grid layouts for crosses involving asymmetric or partially homozygous parental genotypes',
            dataRequired: [],
            usage: 'Best for advanced Punnett square scenarios with non-standard parents',
            examples: ['Asymmetric cross', 'Homozygous parent', 'Grid layout'],
            defaultOptions: {
                title: 'Asymmetric and Partially Homozygous Parent Grid Layout',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'annotatedErroredPunnettSquareCorrectVsIncorrectDiagram': {
            name: 'Annotated Errored Punnett Square: Correct vs Incorrect',
            category: 'Punnett Squares',
            description: 'Side-by-side comparison of correctly and incorrectly constructed Punnett squares with error annotations',
            dataRequired: [],
            usage: 'Best for identifying and correcting common Punnett square mistakes',
            examples: ['Common errors', 'Correct vs incorrect', 'Punnett square mistakes'],
            defaultOptions: {
                title: 'Correct vs Incorrect Punnett Square Comparison',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'humanDiseaseRiskAndBreedingOutcomePunnettApplicationDiagram': {
            name: 'Human Disease Risk and Breeding Outcome Punnett Application',
            category: 'Punnett Squares',
            description: 'Applied Punnett square diagrams for human genetic disease risk and breeding outcome prediction',
            dataRequired: [],
            usage: 'Best for applied human genetics and genetic counselling contexts',
            examples: ['Disease risk', 'Genetic counselling', 'Applied Punnett square'],
            defaultOptions: {
                title: 'Human Disease Risk and Breeding Outcome Punnett Application',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== INHERITANCE PATTERNS & PEDIGREES =====
        'inheritancePatternClassificationFrameworkDiagram': {
            name: 'Inheritance Pattern Classification Framework',
            category: 'Inheritance Patterns and Pedigrees',
            description: 'Classification framework organising inheritance patterns by chromosomal location and dominance',
            dataRequired: [],
            usage: 'Best for systematic classification of inheritance types',
            examples: ['Inheritance classification', 'Autosomal', 'X-linked'],
            defaultOptions: {
                title: 'Inheritance Pattern Classification Framework',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'autosomalDominantRecessivePedigreePatternComparisonDiagram': {
            name: 'Autosomal Dominant and Recessive Pedigree Pattern Comparison',
            category: 'Inheritance Patterns and Pedigrees',
            description: 'Comparative pedigree diagrams showing distinguishing features of autosomal dominant and recessive inheritance',
            dataRequired: [],
            usage: 'Best for pedigree analysis and inheritance pattern identification',
            examples: ['Pedigree analysis', 'Autosomal dominant', 'Autosomal recessive'],
            defaultOptions: {
                title: 'Autosomal Dominant and Recessive Pedigree Patterns',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'xLinkedRecessiveDominantYLinkedPedigreePatternDiagram': {
            name: 'X-Linked Recessive, Dominant and Y-Linked Pedigree Patterns',
            category: 'Inheritance Patterns and Pedigrees',
            description: 'Pedigree diagrams illustrating X-linked recessive, X-linked dominant and Y-linked inheritance patterns',
            dataRequired: [],
            usage: 'Best for sex-linked inheritance pedigree analysis',
            examples: ['X-linked recessive', 'X-linked dominant', 'Y-linked'],
            defaultOptions: {
                title: 'X-Linked and Y-Linked Pedigree Patterns',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pedigreeSymbolsObligateCarrierIdentificationAnnotatedDiagram': {
            name: 'Pedigree Symbols and Obligate Carrier Identification Annotated',
            category: 'Inheritance Patterns and Pedigrees',
            description: 'Annotated guide to standard pedigree symbols and identification of obligate carriers within pedigrees',
            dataRequired: [],
            usage: 'Best for introducing pedigree notation and carrier identification',
            examples: ['Pedigree symbols', 'Obligate carrier', 'Pedigree notation'],
            defaultOptions: {
                title: 'Pedigree Symbols and Obligate Carrier Identification',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'completeDominanceIncompleteDominanceCodominanceHeterozygotePhenotypeComparisonDiagram': {
            name: 'Complete Dominance, Incomplete Dominance, Codominance Heterozygote Phenotype Comparison',
            category: 'Inheritance Patterns and Pedigrees',
            description: 'Comparison of heterozygote phenotypes under complete dominance, incomplete dominance and codominance',
            dataRequired: [],
            usage: 'Best for contrasting dominance relationships at the phenotypic level',
            examples: ['Complete dominance', 'Incomplete dominance', 'Codominance heterozygote'],
            defaultOptions: {
                title: 'Dominance Type Heterozygote Phenotype Comparison',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'polygenicTraitNormalDistributionBellCurveAdditiveLociDiagram': {
            name: 'Polygenic Trait Normal Distribution Bell Curve and Additive Loci',
            category: 'Inheritance Patterns and Pedigrees',
            description: 'Diagram showing how additive loci produce a normal distribution bell curve for polygenic traits',
            dataRequired: [],
            usage: 'Best for explaining quantitative and polygenic inheritance',
            examples: ['Polygenic inheritance', 'Normal distribution', 'Additive loci'],
            defaultOptions: {
                title: 'Polygenic Trait Normal Distribution and Additive Loci',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'mitochondrialMatrilinealTransmissionPedigreePatternDiagram': {
            name: 'Mitochondrial Matrilineal Transmission Pedigree Pattern',
            category: 'Inheritance Patterns and Pedigrees',
            description: 'Pedigree diagram showing matrilineal transmission pattern of mitochondrial inheritance',
            dataRequired: [],
            usage: 'Best for mitochondrial inheritance and maternal lineage tracing',
            examples: ['Mitochondrial inheritance', 'Matrilineal', 'Maternal transmission'],
            defaultOptions: {
                title: 'Mitochondrial Matrilineal Transmission Pedigree',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'praderWilliAngelmanChromosome15ParentalOriginImprintingDiagram': {
            name: 'Prader-Willi and Angelman Chromosome 15 Parental Origin Imprinting',
            category: 'Inheritance Patterns and Pedigrees',
            description: 'Diagram showing genomic imprinting on chromosome 15 and how parental origin determines Prader-Willi or Angelman syndrome',
            dataRequired: [],
            usage: 'Best for genomic imprinting and parent-of-origin effects',
            examples: ['Genomic imprinting', 'Prader-Willi', 'Angelman syndrome'],
            defaultOptions: {
                title: 'Prader-Willi and Angelman Chromosome 15 Imprinting',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'epistasisRatioDeviationTypesComparisonSummaryDiagram': {
            name: 'Epistasis Ratio Deviation Types Comparison Summary',
            category: 'Inheritance Patterns and Pedigrees',
            description: 'Summary diagram comparing how different types of epistasis deviate from the standard 9:3:3:1 dihybrid ratio',
            dataRequired: [],
            usage: 'Best for understanding epistasis types and ratio modifications',
            examples: ['Epistasis types', 'Ratio deviation', 'Modified ratios'],
            defaultOptions: {
                title: 'Epistasis Ratio Deviation Types Comparison',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'crossingOverRecombinantVsParentalOffspringFrequencyMapDiagram': {
            name: 'Crossing Over: Recombinant vs Parental Offspring Frequency Map',
            category: 'Inheritance Patterns and Pedigrees',
            description: 'Diagram mapping crossing over events to recombinant and parental offspring frequencies for genetic linkage mapping',
            dataRequired: [],
            usage: 'Best for genetic linkage mapping and recombination frequency analysis',
            examples: ['Crossing over', 'Recombination frequency', 'Genetic linkage map'],
            defaultOptions: {
                title: 'Crossing Over: Recombinant vs Parental Offspring Frequency',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== CHROMOSOMES & KARYOTYPING =====
        'chromosomeAnatomyCentromereTelomereArmsNucleosomeDiagram': {
            name: 'Chromosome Anatomy: Centromere, Telomere, Arms and Nucleosome',
            category: 'Chromosomes and Karyotyping',
            description: 'Annotated diagram of chromosome anatomy including centromere, telomeres, p and q arms and nucleosome structure',
            dataRequired: [],
            usage: 'Best for chromosome structure and organisation',
            examples: ['Chromosome anatomy', 'Centromere', 'Nucleosome'],
            defaultOptions: {
                title: 'Chromosome Anatomy',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'haploidDiploidPolyploidChromosomeSetComparisonDiagram': {
            name: 'Haploid, Diploid and Polyploid Chromosome Set Comparison',
            category: 'Chromosomes and Karyotyping',
            description: 'Comparison diagram of haploid, diploid and polyploid chromosome sets with examples',
            dataRequired: [],
            usage: 'Best for explaining ploidy levels and chromosome number',
            examples: ['Ploidy', 'Haploid', 'Polyploid'],
            defaultOptions: {
                title: 'Haploid, Diploid and Polyploid Chromosome Set Comparison',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'mitosisMeiosisChromosomeSegregationNondisjunctionComparisonDiagram': {
            name: 'Mitosis, Meiosis, Chromosome Segregation and Nondisjunction Comparison',
            category: 'Chromosomes and Karyotyping',
            description: 'Comparative diagram of chromosome segregation in mitosis and meiosis including nondisjunction errors',
            dataRequired: [],
            usage: 'Best for comparing normal and abnormal chromosome segregation',
            examples: ['Nondisjunction', 'Meiosis errors', 'Chromosome segregation'],
            defaultOptions: {
                title: 'Mitosis, Meiosis and Nondisjunction Comparison',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'karyotypePreprationColchicineHypotonicFixationStepsFlowchartDiagram': {
            name: 'Karyotype Preparation: Colchicine, Hypotonic and Fixation Steps Flowchart',
            category: 'Chromosomes and Karyotyping',
            description: 'Flowchart of the karyotype preparation process including colchicine arrest, hypotonic treatment and fixation steps',
            dataRequired: [],
            usage: 'Best for cytogenetics laboratory procedure explanation',
            examples: ['Karyotype preparation', 'Colchicine', 'Cytogenetics protocol'],
            defaultOptions: {
                title: 'Karyotype Preparation Steps Flowchart',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'gBandingPatternIdeogramHumanChromosomePairAnnotatedDiagram': {
            name: 'G-Banding Pattern Ideogram Human Chromosome Pair Annotated',
            category: 'Chromosomes and Karyotyping',
            description: 'Annotated ideogram showing G-banding patterns for human chromosome pairs',
            dataRequired: [],
            usage: 'Best for chromosome banding and cytogenetic mapping',
            examples: ['G-banding', 'Ideogram', 'Chromosome banding'],
            defaultOptions: {
                title: 'G-Banding Pattern Ideogram',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'normal46XXAnd46XYKaryogramAnnotatedDenverGroupsDiagram': {
            name: 'Normal 46,XX and 46,XY Karyogram Annotated with Denver Groups',
            category: 'Chromosomes and Karyotyping',
            description: 'Annotated karyograms for normal 46,XX and 46,XY genotypes with Denver group classification',
            dataRequired: [],
            usage: 'Best for normal human karyotype interpretation',
            examples: ['Normal karyotype', 'Denver groups', 'Chromosome classification'],
            defaultOptions: {
                title: 'Normal 46,XX and 46,XY Karyogram with Denver Groups',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nondisjunctionMechanismTrisomyMonosomyGameteDiagram': {
            name: 'Nondisjunction Mechanism: Trisomy, Monosomy and Gamete Formation',
            category: 'Chromosomes and Karyotyping',
            description: 'Diagram illustrating nondisjunction mechanism during meiosis leading to trisomy and monosomy in gametes',
            dataRequired: [],
            usage: 'Best for explaining chromosomal aneuploidy origins',
            examples: ['Nondisjunction', 'Trisomy', 'Monosomy'],
            defaultOptions: {
                title: 'Nondisjunction Mechanism and Aneuploidy',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'deletionDuplicationInversionRobertsonianTranslocationStructuralRearrangementDiagram': {
            name: 'Deletion, Duplication, Inversion and Robertsonian Translocation Structural Rearrangement',
            category: 'Chromosomes and Karyotyping',
            description: 'Diagram of chromosomal structural rearrangements including deletion, duplication, inversion and Robertsonian translocation',
            dataRequired: [],
            usage: 'Best for structural chromosomal abnormalities',
            examples: ['Chromosomal deletion', 'Inversion', 'Robertsonian translocation'],
            defaultOptions: {
                title: 'Chromosomal Structural Rearrangements',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'xInactivationBarrBodyLyonHypothesisMosaicismDiagram': {
            name: 'X Inactivation, Barr Body, Lyon Hypothesis and Mosaicism',
            category: 'Chromosomes and Karyotyping',
            description: 'Diagram of X chromosome inactivation, Barr body formation, Lyon hypothesis and resulting mosaicism in females',
            dataRequired: [],
            usage: 'Best for X inactivation and dosage compensation',
            examples: ['X inactivation', 'Barr body', 'Lyon hypothesis'],
            defaultOptions: {
                title: 'X Inactivation, Barr Body and Mosaicism',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fishProbeHybridisationArrayCGHCopyNumberVariantDetectionDiagram': {
            name: 'FISH Probe Hybridisation and Array CGH Copy Number Variant Detection',
            category: 'Chromosomes and Karyotyping',
            description: 'Diagram of FISH probe hybridisation and array comparative genomic hybridisation for copy number variant detection',
            dataRequired: [],
            usage: 'Best for molecular cytogenetics techniques',
            examples: ['FISH', 'Array CGH', 'Copy number variants'],
            defaultOptions: {
                title: 'FISH and Array CGH Copy Number Variant Detection',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'geneticDisorderClassificationByMechanismAndChromosomeLocationDiagram': {
            name: 'Genetic Disorder Classification by Mechanism and Chromosome Location',
            category: 'Chromosomes and Karyotyping',
            description: 'Classification diagram of genetic disorders organised by molecular mechanism and chromosomal location',
            dataRequired: [],
            usage: 'Best for systematic overview of genetic disorder types',
            examples: ['Genetic disorders', 'Disorder classification', 'Chromosomal disorders'],
            defaultOptions: {
                title: 'Genetic Disorder Classification Framework',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pointMutationFrameshiftNonsenseSplicingTripletExpansionConsequencesDiagram': {
            name: 'Point Mutation, Frameshift, Nonsense, Splicing and Triplet Expansion Consequences',
            category: 'Chromosomes and Karyotyping',
            description: 'Diagram comparing consequences of point mutations, frameshifts, nonsense mutations, splicing errors and triplet repeat expansions',
            dataRequired: [],
            usage: 'Best for mutation types and their molecular consequences',
            examples: ['Point mutation', 'Frameshift', 'Triplet repeat expansion'],
            defaultOptions: {
                title: 'Mutation Types and Consequences',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'autosomaldominantPedigreeVerticalTransmissionHuntingtonsMarfanExamplesDiagram': {
            name: 'Autosomal Dominant Pedigree Vertical Transmission: Huntington\'s and Marfan Examples',
            category: 'Chromosomes and Karyotyping',
            description: 'Pedigree diagrams showing vertical transmission pattern for autosomal dominant conditions using Huntington\'s and Marfan syndrome as examples',
            dataRequired: [],
            usage: 'Best for autosomal dominant pedigree interpretation with clinical examples',
            examples: ['Huntington\'s disease', 'Marfan syndrome', 'Vertical transmission'],
            defaultOptions: {
                title: 'Autosomal Dominant Pedigree: Huntington\'s and Marfan Examples',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'autosomalRecessiveCarrierCrossHardyWeinbergCarrierFrequencyDiagram': {
            name: 'Autosomal Recessive Carrier Cross and Hardy-Weinberg Carrier Frequency',
            category: 'Chromosomes and Karyotyping',
            description: 'Diagram of autosomal recessive carrier crosses with Hardy-Weinberg equilibrium carrier frequency calculations',
            dataRequired: [],
            usage: 'Best for population genetics and carrier frequency analysis',
            examples: ['Autosomal recessive', 'Hardy-Weinberg', 'Carrier frequency'],
            defaultOptions: {
                title: 'Autosomal Recessive Carrier Cross and Hardy-Weinberg Frequency',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'xLinkedRecessiveDomDecDMDHaemophiliaFragileXPedigreePatternDiagram': {
            name: 'X-Linked Recessive Pedigree: DMD, Haemophilia and Fragile X Patterns',
            category: 'Chromosomes and Karyotyping',
            description: 'Pedigree patterns for X-linked recessive conditions including Duchenne muscular dystrophy, haemophilia and Fragile X syndrome',
            dataRequired: [],
            usage: 'Best for X-linked recessive pedigree analysis with clinical examples',
            examples: ['DMD', 'Haemophilia pedigree', 'Fragile X syndrome'],
            defaultOptions: {
                title: 'X-Linked Recessive Pedigrees: DMD, Haemophilia and Fragile X',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chromosomalDisorderKaryotypeClinicalFeatureSummaryReferenceDiagram': {
            name: 'Chromosomal Disorder Karyotype and Clinical Feature Summary Reference',
            category: 'Chromosomes and Karyotyping',
            description: 'Reference summary diagram of major chromosomal disorders with karyotype notation and key clinical features',
            dataRequired: [],
            usage: 'Best for clinical reference of chromosomal disorder phenotypes',
            examples: ['Down syndrome', 'Turner syndrome', 'Karyotype clinical features'],
            defaultOptions: {
                title: 'Chromosomal Disorder Karyotype and Clinical Feature Summary',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'metabolicBlockSubstrateAccumulationProductDeficiencyPathwayDiagram': {
            name: 'Metabolic Block, Substrate Accumulation and Product Deficiency Pathway',
            category: 'Chromosomes and Karyotyping',
            description: 'Pathway diagram showing how enzyme deficiency causes substrate accumulation and product deficiency in metabolic disorders',
            dataRequired: [],
            usage: 'Best for inborn errors of metabolism and enzyme deficiency diseases',
            examples: ['Inborn errors of metabolism', 'Enzyme deficiency', 'PKU pathway'],
            defaultOptions: {
                title: 'Metabolic Block and Substrate Accumulation Pathway',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'polygenicRiskScoreGWASManhattanPlotThresholdLiabilityModelDiagram': {
            name: 'Polygenic Risk Score, GWAS Manhattan Plot Threshold and Liability Model',
            category: 'Chromosomes and Karyotyping',
            description: 'Diagram combining GWAS Manhattan plot, significance threshold and polygenic risk score liability model',
            dataRequired: [],
            usage: 'Best for complex trait genetics and GWAS interpretation',
            examples: ['GWAS', 'Manhattan plot', 'Polygenic risk score'],
            defaultOptions: {
                title: 'Polygenic Risk Score and GWAS Manhattan Plot',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'geneticDiagnosticPathwayBiochemicalCytogeneticMolecularDecisionTreeDiagram': {
            name: 'Genetic Diagnostic Pathway: Biochemical, Cytogenetic and Molecular Decision Tree',
            category: 'Chromosomes and Karyotyping',
            description: 'Decision tree flowchart for selecting biochemical, cytogenetic or molecular diagnostic approaches in genetic testing',
            dataRequired: [],
            usage: 'Best for clinical genetics diagnostic pathway selection',
            examples: ['Genetic diagnosis', 'Diagnostic decision tree', 'Molecular diagnostics'],
            defaultOptions: {
                title: 'Genetic Diagnostic Pathway Decision Tree',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'geneTherapyERTSmallMoleculeGeneEditingTreatmentStrategyComparisonDiagram': {
            name: 'Gene Therapy, ERT, Small Molecule and Gene Editing Treatment Strategy Comparison',
            category: 'Chromosomes and Karyotyping',
            description: 'Comparison of treatment strategies for genetic disorders including gene therapy, enzyme replacement therapy, small molecules and gene editing',
            dataRequired: [],
            usage: 'Best for genetic disorder treatment strategy comparison',
            examples: ['Gene therapy', 'Enzyme replacement therapy', 'CRISPR treatment'],
            defaultOptions: {
                title: 'Genetic Disorder Treatment Strategy Comparison',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== MICROBIAL METABOLISM =====
        'catabolicAnabolicEnergyFlowDiagram': {
            name: 'Catabolic and Anabolic Energy Flow',
            category: 'Microbial Metabolism',
            description: 'Overview diagram of energy flow between catabolic and anabolic pathways in microbial metabolism',
            dataRequired: [],
            usage: 'Best for introducing metabolic energy concepts',
            examples: ['Catabolism', 'Anabolism', 'Energy flow'],
            defaultOptions: {
                title: 'Catabolic and Anabolic Energy Flow',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'microbialNutritionalClassificationMatrix': {
            name: 'Microbial Nutritional Classification Matrix',
            category: 'Microbial Metabolism',
            description: 'Matrix diagram classifying microorganisms by energy source and carbon source into nutritional categories',
            dataRequired: [],
            usage: 'Best for microbial nutrition and metabolic diversity',
            examples: ['Autotroph', 'Heterotroph', 'Nutritional classification'],
            defaultOptions: {
                title: 'Microbial Nutritional Classification Matrix',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'glycolysisEnergyInvestmentPayoffStepDiagram': {
            name: 'Glycolysis Energy Investment and Payoff Step Diagram',
            category: 'Microbial Metabolism',
            description: 'Step-by-step diagram of glycolysis divided into energy investment and energy payoff phases with ATP accounting',
            dataRequired: [],
            usage: 'Best for glycolysis pathway and energy accounting',
            examples: ['Glycolysis steps', 'Energy investment phase', 'ATP yield'],
            defaultOptions: {
                title: 'Glycolysis Energy Investment and Payoff Phases',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'tcaCycleIntermediatesAndYieldDiagram': {
            name: 'TCA Cycle Intermediates and Yield',
            category: 'Microbial Metabolism',
            description: 'Diagram of the TCA (Krebs) cycle showing all intermediates, enzymes and energy yield per turn',
            dataRequired: [],
            usage: 'Best for TCA cycle pathway and yield analysis',
            examples: ['TCA cycle', 'Krebs cycle', 'NADH yield'],
            defaultOptions: {
                title: 'TCA Cycle Intermediates and Yield',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'electronTransportChainComplexesProtonPumpingDiagram': {
            name: 'Electron Transport Chain Complexes and Proton Pumping',
            category: 'Microbial Metabolism',
            description: 'Diagram of the electron transport chain showing complexes I–IV, electron carriers and proton pumping',
            dataRequired: [],
            usage: 'Best for oxidative phosphorylation and ETC mechanism',
            examples: ['Electron transport chain', 'Proton pumping', 'Oxidative phosphorylation'],
            defaultOptions: {
                title: 'Electron Transport Chain Complexes and Proton Pumping',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fermentationPathwayProductsComparisonChart': {
            name: 'Fermentation Pathway Products Comparison Chart',
            category: 'Microbial Metabolism',
            description: 'Comparison chart of major fermentation pathways and their end products in different microorganisms',
            dataRequired: [],
            usage: 'Best for fermentation types and industrial microbiology',
            examples: ['Lactic acid fermentation', 'Alcoholic fermentation', 'Mixed acid fermentation'],
            defaultOptions: {
                title: 'Fermentation Pathway Products Comparison',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nitrificationSulfurIronOxidationElectronDonorDiagram': {
            name: 'Nitrification, Sulfur and Iron Oxidation Electron Donor Diagram',
            category: 'Microbial Metabolism',
            description: 'Diagram of chemolithotrophic pathways including nitrification, sulfur oxidation and iron oxidation with electron donors',
            dataRequired: [],
            usage: 'Best for chemolithotrophy and biogeochemical cycles',
            examples: ['Nitrification', 'Sulfur oxidation', 'Chemolithotrophy'],
            defaultOptions: {
                title: 'Nitrification, Sulfur and Iron Oxidation Pathways',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'oxygenicVsAnoxygenicPhotosynthesisElectronFlowDiagram': {
            name: 'Oxygenic vs Anoxygenic Photosynthesis Electron Flow',
            category: 'Microbial Metabolism',
            description: 'Comparative diagram of electron flow in oxygenic and anoxygenic photosynthesis with electron donor differences',
            dataRequired: [],
            usage: 'Best for comparing photosynthetic types in microorganisms',
            examples: ['Oxygenic photosynthesis', 'Anoxygenic photosynthesis', 'Electron flow'],
            defaultOptions: {
                title: 'Oxygenic vs Anoxygenic Photosynthesis Electron Flow',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'aminoAcidFamilyBiosyntheticPrecursorDiagram': {
            name: 'Amino Acid Family Biosynthetic Precursor Diagram',
            category: 'Microbial Metabolism',
            description: 'Diagram showing biosynthetic families of amino acids organised by their metabolic precursors',
            dataRequired: [],
            usage: 'Best for amino acid biosynthesis and metabolic precursors',
            examples: ['Amino acid biosynthesis', 'Biosynthetic families', 'Metabolic precursors'],
            defaultOptions: {
                title: 'Amino Acid Family Biosynthetic Precursors',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'feedbackInhibitionAllostericEnzymePathwayDiagram': {
            name: 'Feedback Inhibition and Allosteric Enzyme Pathway',
            category: 'Microbial Metabolism',
            description: 'Diagram of feedback inhibition and allosteric regulation in metabolic pathways',
            dataRequired: [],
            usage: 'Best for enzyme regulation and metabolic control',
            examples: ['Feedback inhibition', 'Allosteric regulation', 'Enzyme control'],
            defaultOptions: {
                title: 'Feedback Inhibition and Allosteric Enzyme Pathway',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== MICROBIAL CONTROL =====
        'sterilisationDisinfectionAntisepsisSanitisationSpectrumDiagram': {
            name: 'Sterilisation, Disinfection, Antisepsis and Sanitisation Spectrum',
            category: 'Microbial Control',
            description: 'Spectrum diagram comparing sterilisation, disinfection, antisepsis and sanitisation by efficacy and application',
            dataRequired: [],
            usage: 'Best for microbial control terminology and spectrum of activity',
            examples: ['Sterilisation', 'Disinfection', 'Antisepsis'],
            defaultOptions: {
                title: 'Microbial Control Spectrum',
                showLabels: true,
                width: 1000,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'physicalControlAgentsMoistDryHeatRadiationFiltrationDiagram': {
            name: 'Physical Control Agents: Moist Heat, Dry Heat, Radiation and Filtration',
            category: 'Microbial Control',
            description: 'Diagram of physical microbial control agents including moist heat, dry heat, radiation and filtration methods',
            dataRequired: [],
            usage: 'Best for physical methods of microbial control',
            examples: ['Autoclaving', 'UV radiation', 'Filtration sterilisation'],
            defaultOptions: {
                title: 'Physical Microbial Control Agents',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chemicalDisinfectantMechanismsTargetSitesDiagram': {
            name: 'Chemical Disinfectant Mechanisms and Target Sites',
            category: 'Microbial Control',
            description: 'Diagram of chemical disinfectant classes, their mechanisms of action and cellular target sites',
            dataRequired: [],
            usage: 'Best for chemical disinfection mechanisms',
            examples: ['Disinfectant mechanisms', 'Target sites', 'Chemical control'],
            defaultOptions: {
                title: 'Chemical Disinfectant Mechanisms and Target Sites',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'antibioticTargetSitesBacterialCellDiagram': {
            name: 'Antibiotic Target Sites on Bacterial Cell',
            category: 'Microbial Control',
            description: 'Diagram of bacterial cell showing target sites for major antibiotic classes',
            dataRequired: [],
            usage: 'Best for antibiotic mechanisms and target site overview',
            examples: ['Antibiotic targets', 'Cell wall synthesis', 'Protein synthesis inhibitors'],
            defaultOptions: {
                title: 'Antibiotic Target Sites on Bacterial Cell',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'antifungalTargetErgosterolVsCholesterolMembraneDiagram': {
            name: 'Antifungal Target: Ergosterol vs Cholesterol Membrane',
            category: 'Microbial Control',
            description: 'Diagram comparing ergosterol in fungal membranes vs cholesterol in human membranes as antifungal drug targets',
            dataRequired: [],
            usage: 'Best for antifungal selectivity and membrane target differences',
            examples: ['Ergosterol', 'Antifungal targets', 'Membrane selectivity'],
            defaultOptions: {
                title: 'Antifungal Target: Ergosterol vs Cholesterol',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'amrMechanismsEnzymeTargetEffluxPermeabilityDiagram': {
            name: 'AMR Mechanisms: Enzyme, Target, Efflux and Permeability',
            category: 'Microbial Control',
            description: 'Diagram of antimicrobial resistance mechanisms including enzymatic inactivation, target modification, efflux pumps and reduced permeability',
            dataRequired: [],
            usage: 'Best for antimicrobial resistance mechanisms overview',
            examples: ['Antibiotic resistance', 'Efflux pump', 'Beta-lactamase'],
            defaultOptions: {
                title: 'Antimicrobial Resistance Mechanisms',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'spauldingClassificationCriticalSemicriticalNoncriticalDiagram': {
            name: 'Spaulding Classification: Critical, Semicritical and Noncritical',
            category: 'Microbial Control',
            description: 'Diagram of the Spaulding classification system for medical devices and required decontamination level',
            dataRequired: [],
            usage: 'Best for infection control and medical device decontamination',
            examples: ['Spaulding classification', 'Critical items', 'Decontamination levels'],
            defaultOptions: {
                title: 'Spaulding Classification System',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'biofilmFormationStagesEpsMatrixResistanceDiagram': {
            name: 'Biofilm Formation Stages, EPS Matrix and Resistance',
            category: 'Microbial Control',
            description: 'Diagram of biofilm formation stages from attachment to dispersal including EPS matrix structure and resistance mechanisms',
            dataRequired: [],
            usage: 'Best for biofilm biology and antimicrobial resistance',
            examples: ['Biofilm formation', 'EPS matrix', 'Biofilm resistance'],
            defaultOptions: {
                title: 'Biofilm Formation Stages and EPS Matrix',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== HOST-PATHOGEN INTERACTIONS =====
        'hostPathogenRelationshipInfectionDiseaseSpectrumDiagram': {
            name: 'Host-Pathogen Relationship and Infection-Disease Spectrum',
            category: 'Host-Pathogen Interactions',
            description: 'Diagram of host-pathogen relationship spectrum from commensalism through infection to disease',
            dataRequired: [],
            usage: 'Best for introducing host-pathogen dynamics and disease spectrum',
            examples: ['Host-pathogen', 'Infection spectrum', 'Commensalism to pathogenesis'],
            defaultOptions: {
                title: 'Host-Pathogen Relationship and Infection-Disease Spectrum',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'virulenceFactorTypesToxinsCapsuleSecretionSystemsDiagram': {
            name: 'Virulence Factor Types: Toxins, Capsule and Secretion Systems',
            category: 'Host-Pathogen Interactions',
            description: 'Diagram categorising bacterial virulence factors including toxins, capsule and type III/IV secretion systems',
            dataRequired: [],
            usage: 'Best for bacterial pathogenesis and virulence factor classification',
            examples: ['Virulence factors', 'Bacterial toxins', 'Type III secretion'],
            defaultOptions: {
                title: 'Virulence Factor Types',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bacterialPathogenSyndromeOrganSystemTargetsDiagram': {
            name: 'Bacterial Pathogen Syndrome and Organ System Targets',
            category: 'Host-Pathogen Interactions',
            description: 'Reference diagram mapping bacterial pathogens to their target organ systems and associated disease syndromes',
            dataRequired: [],
            usage: 'Best for clinical microbiology pathogen-disease associations',
            examples: ['Bacterial pathogens', 'Organ targets', 'Infection syndromes'],
            defaultOptions: {
                title: 'Bacterial Pathogen and Organ System Targets',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'viralReplicationCycleHostCellDamageMechanismsDiagram': {
            name: 'Viral Replication Cycle and Host Cell Damage Mechanisms',
            category: 'Host-Pathogen Interactions',
            description: 'Diagram of viral replication cycle showing stages at which host cell damage occurs',
            dataRequired: [],
            usage: 'Best for viral pathogenesis and cytopathic effects',
            examples: ['Viral replication', 'Cytopathic effect', 'Host cell damage'],
            defaultOptions: {
                title: 'Viral Replication Cycle and Host Cell Damage',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'dimorphicFungiYeastMouldTemperatureFormSwitchDiagram': {
            name: 'Dimorphic Fungi: Yeast-Mould Temperature Form Switch',
            category: 'Host-Pathogen Interactions',
            description: 'Diagram of dimorphic fungal temperature-dependent switching between yeast and mould forms',
            dataRequired: [],
            usage: 'Best for dimorphic fungal pathogenesis and temperature regulation',
            examples: ['Dimorphic fungi', 'Yeast-mould switch', 'Temperature regulation'],
            defaultOptions: {
                title: 'Dimorphic Fungi Yeast-Mould Temperature Switch',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'plasmodiumLifecycleMosquitoHumanErythrocyticStageDiagram': {
            name: 'Plasmodium Lifecycle: Mosquito, Human and Erythrocytic Stage',
            category: 'Host-Pathogen Interactions',
            description: 'Complete Plasmodium lifecycle diagram across mosquito vector and human host including erythrocytic stage',
            dataRequired: [],
            usage: 'Best for malaria lifecycle and parasite biology',
            examples: ['Plasmodium lifecycle', 'Malaria', 'Erythrocytic stage'],
            defaultOptions: {
                title: 'Plasmodium Lifecycle',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'innateAdaptiveImmunityPRRComplementPhagocytosisDiagram': {
            name: 'Innate and Adaptive Immunity: PRR, Complement and Phagocytosis',
            category: 'Host-Pathogen Interactions',
            description: 'Overview diagram of innate and adaptive immunity including pattern recognition receptors, complement and phagocytosis',
            dataRequired: [],
            usage: 'Best for host immune response overview',
            examples: ['Innate immunity', 'PRR', 'Complement system'],
            defaultOptions: {
                title: 'Innate and Adaptive Immunity Overview',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'reproductionNumberR0HerdImmunityThresholdTransmissionRoutesDiagram': {
            name: 'Reproduction Number R0, Herd Immunity Threshold and Transmission Routes',
            category: 'Host-Pathogen Interactions',
            description: 'Diagram explaining R0, herd immunity threshold calculation and major transmission routes for infectious diseases',
            dataRequired: [],
            usage: 'Best for epidemiology and infectious disease transmission',
            examples: ['R0', 'Herd immunity', 'Transmission routes'],
            defaultOptions: {
                title: 'R0, Herd Immunity and Transmission Routes',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== MICROBIAL ECOLOGY =====
        'microbialAbundanceBiomassGlobalDistributionDiagram': {
            name: 'Microbial Abundance, Biomass and Global Distribution',
            category: 'Microbial Ecology',
            description: 'Diagram of global microbial abundance and biomass distribution across major Earth environments',
            dataRequired: [],
            usage: 'Best for microbial ecology and global distribution overview',
            examples: ['Microbial biomass', 'Global distribution', 'Microbial abundance'],
            defaultOptions: {
                title: 'Microbial Abundance, Biomass and Global Distribution',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nitrogenCarbonSulfurCycleMicrobialTransformationDiagram': {
            name: 'Nitrogen, Carbon and Sulfur Cycle Microbial Transformations',
            category: 'Microbial Ecology',
            description: 'Diagram of microbial transformations in nitrogen, carbon and sulfur biogeochemical cycles',
            dataRequired: [],
            usage: 'Best for biogeochemical cycles and microbial roles',
            examples: ['Nitrogen cycle', 'Carbon cycle', 'Sulfur cycle'],
            defaultOptions: {
                title: 'Nitrogen, Carbon and Sulfur Cycle Microbial Transformations',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'rhizosphereEffectRootExudateMicrobialDensityGradientDiagram': {
            name: 'Rhizosphere Effect, Root Exudate and Microbial Density Gradient',
            category: 'Microbial Ecology',
            description: 'Diagram of the rhizosphere effect showing root exudate gradients and resulting microbial density changes',
            dataRequired: [],
            usage: 'Best for soil microbial ecology and plant-microbe interactions',
            examples: ['Rhizosphere', 'Root exudates', 'Microbial density'],
            defaultOptions: {
                title: 'Rhizosphere Effect and Microbial Density Gradient',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'oceanicZonesMicrobialCommunityLightNutrientGradientDiagram': {
            name: 'Oceanic Zones, Microbial Community and Light-Nutrient Gradient',
            category: 'Microbial Ecology',
            description: 'Diagram of oceanic zones with associated microbial communities and light-nutrient gradients',
            dataRequired: [],
            usage: 'Best for marine microbial ecology and oceanic zonation',
            examples: ['Marine microbiology', 'Oceanic zones', 'Photic zone'],
            defaultOptions: {
                title: 'Oceanic Zones and Microbial Communities',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'extremophileHabitatTemperaturePHSalinityToleranceRangeDiagram': {
            name: 'Extremophile Habitat: Temperature, pH and Salinity Tolerance Range',
            category: 'Microbial Ecology',
            description: 'Diagram of extremophile categories with their temperature, pH and salinity tolerance ranges',
            dataRequired: [],
            usage: 'Best for extremophile biology and environmental limits of life',
            examples: ['Extremophiles', 'Thermophiles', 'Halophiles'],
            defaultOptions: {
                title: 'Extremophile Habitat Tolerance Ranges',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quorumSensingAHLSignalThresholdBiofilmFormationDiagram': {
            name: 'Quorum Sensing, AHL Signal Threshold and Biofilm Formation',
            category: 'Microbial Ecology',
            description: 'Diagram of quorum sensing mechanism with AHL signal accumulation threshold and link to biofilm formation',
            dataRequired: [],
            usage: 'Best for quorum sensing and microbial communication',
            examples: ['Quorum sensing', 'AHL signals', 'Biofilm quorum'],
            defaultOptions: {
                title: 'Quorum Sensing and Biofilm Formation',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gutMicrobiomePhylaCompositionDysbiosisHealthDiagram': {
            name: 'Gut Microbiome Phyla Composition, Dysbiosis and Health',
            category: 'Microbial Ecology',
            description: 'Diagram of gut microbiome phyla composition comparing healthy vs dysbiotic states and health associations',
            dataRequired: [],
            usage: 'Best for gut microbiome and dysbiosis concepts',
            examples: ['Gut microbiome', 'Dysbiosis', 'Firmicutes Bacteroidetes ratio'],
            defaultOptions: {
                title: 'Gut Microbiome Composition, Dysbiosis and Health',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'metagenomicsWorkflowDNAExtractionSequencingAnnotationDiagram': {
            name: 'Metagenomics Workflow: DNA Extraction, Sequencing and Annotation',
            category: 'Microbial Ecology',
            description: 'Workflow diagram for metagenomics from environmental DNA extraction through sequencing to functional annotation',
            dataRequired: [],
            usage: 'Best for metagenomics methods and environmental genomics',
            examples: ['Metagenomics', 'Environmental DNA', 'Sequencing workflow'],
            defaultOptions: {
                title: 'Metagenomics Workflow',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bioremediationAnaerobicDigestionMicrobialConsortiumStageDiagram': {
            name: 'Bioremediation and Anaerobic Digestion Microbial Consortium Stages',
            category: 'Microbial Ecology',
            description: 'Diagram of bioremediation and anaerobic digestion stages with microbial consortium roles at each stage',
            dataRequired: [],
            usage: 'Best for applied microbial ecology and bioremediation',
            examples: ['Bioremediation', 'Anaerobic digestion', 'Microbial consortium'],
            defaultOptions: {
                title: 'Bioremediation and Anaerobic Digestion Microbial Consortium',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== BACTERIAL MOLECULAR BIOLOGY =====
        'bacterialChromosomeNucleoidPlasmidOrganisationDiagram': {
            name: 'Bacterial Chromosome, Nucleoid and Plasmid Organisation',
            category: 'Bacterial Molecular Biology',
            description: 'Diagram of bacterial chromosome organisation, nucleoid structure and plasmid types',
            dataRequired: [],
            usage: 'Best for prokaryotic genome organisation',
            examples: ['Bacterial chromosome', 'Nucleoid', 'Plasmid types'],
            defaultOptions: {
                title: 'Bacterial Chromosome, Nucleoid and Plasmid Organisation',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bacterialReplicationForkOriCLeadingLaggingStrandDiagram': {
            name: 'Bacterial Replication Fork: oriC, Leading and Lagging Strand',
            category: 'Bacterial Molecular Biology',
            description: 'Diagram of bacterial DNA replication fork showing oriC initiation, leading and lagging strand synthesis',
            dataRequired: [],
            usage: 'Best for prokaryotic DNA replication mechanism',
            examples: ['Replication fork', 'oriC', 'Okazaki fragments'],
            defaultOptions: {
                title: 'Bacterial Replication Fork and Strand Synthesis',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rnaPolymeraseSigmaFactorPromoterOpenComplexFormationDiagram': {
            name: 'RNA Polymerase, Sigma Factor, Promoter and Open Complex Formation',
            category: 'Bacterial Molecular Biology',
            description: 'Diagram of bacterial RNA polymerase sigma factor binding, promoter recognition and open complex formation',
            dataRequired: [],
            usage: 'Best for prokaryotic transcription initiation',
            examples: ['Sigma factor', 'Promoter recognition', 'Open complex'],
            defaultOptions: {
                title: 'RNA Polymerase and Open Complex Formation',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'prokaryoticRibosomeShineDalgarnoInitiationElongationTerminationDiagram': {
            name: 'Prokaryotic Ribosome: Shine-Dalgarno, Initiation, Elongation and Termination',
            category: 'Bacterial Molecular Biology',
            description: 'Diagram of prokaryotic translation including Shine-Dalgarno sequence, initiation complex assembly, elongation and termination',
            dataRequired: [],
            usage: 'Best for prokaryotic translation mechanism',
            examples: ['Shine-Dalgarno', 'Translation initiation', '70S ribosome'],
            defaultOptions: {
                title: 'Prokaryotic Ribosome and Translation',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'mutationTypePointFrameshiftSOSRepairPathwaysDiagram': {
            name: 'Mutation Types: Point, Frameshift and SOS Repair Pathways',
            category: 'Bacterial Molecular Biology',
            description: 'Diagram of bacterial mutation types and SOS DNA repair pathway activation and mechanism',
            dataRequired: [],
            usage: 'Best for prokaryotic mutation and DNA repair',
            examples: ['SOS repair', 'Point mutation', 'Frameshift mutation'],
            defaultOptions: {
                title: 'Mutation Types and SOS Repair Pathways',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'transformationConjugationTransductionMobileElementDiagram': {
            name: 'Transformation, Conjugation, Transduction and Mobile Elements',
            category: 'Bacterial Molecular Biology',
            description: 'Diagram of horizontal gene transfer mechanisms: transformation, conjugation, transduction and mobile genetic elements',
            dataRequired: [],
            usage: 'Best for horizontal gene transfer and genetic exchange',
            examples: ['Transformation', 'Conjugation', 'Transduction'],
            defaultOptions: {
                title: 'Horizontal Gene Transfer Mechanisms',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'recAMediatedHollidayJunctionBranchMigrationResolutionDiagram': {
            name: 'RecA-Mediated Holliday Junction, Branch Migration and Resolution',
            category: 'Bacterial Molecular Biology',
            description: 'Diagram of RecA-mediated homologous recombination including Holliday junction formation, branch migration and resolution',
            dataRequired: [],
            usage: 'Best for homologous recombination mechanism in bacteria',
            examples: ['RecA', 'Holliday junction', 'Homologous recombination'],
            defaultOptions: {
                title: 'RecA Holliday Junction and Resolution',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'lacOperonPositiveNegativeControlCataboliteRepressionDiagram': {
            name: 'Lac Operon: Positive, Negative Control and Catabolite Repression',
            category: 'Bacterial Molecular Biology',
            description: 'Diagram of lac operon regulation showing positive control by CAP-cAMP, negative control by lac repressor and catabolite repression',
            dataRequired: [],
            usage: 'Best for operon regulation and gene expression control',
            examples: ['Lac operon', 'Catabolite repression', 'CAP-cAMP'],
            defaultOptions: {
                title: 'Lac Operon Positive and Negative Control',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'lyticLysogenicCycleProphageInductionBurstSizeDiagram': {
            name: 'Lytic and Lysogenic Cycle: Prophage Induction and Burst Size',
            category: 'Bacterial Molecular Biology',
            description: 'Diagram comparing lytic and lysogenic cycles with prophage induction and burst size parameters',
            dataRequired: [],
            usage: 'Best for bacteriophage life cycles and lysogeny',
            examples: ['Lytic cycle', 'Lysogenic cycle', 'Prophage induction'],
            defaultOptions: {
                title: 'Lytic and Lysogenic Cycle Comparison',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'shortReadLongReadSequencingWorkflowGenomeAssemblyAnnotationDiagram': {
            name: 'Short Read and Long Read Sequencing Workflow: Genome Assembly and Annotation',
            category: 'Bacterial Molecular Biology',
            description: 'Workflow diagram comparing short read and long read sequencing approaches for microbial genome assembly and annotation',
            dataRequired: [],
            usage: 'Best for microbial genomics and sequencing technology comparison',
            examples: ['Short read sequencing', 'Long read sequencing', 'Genome assembly'],
            defaultOptions: {
                title: 'Short and Long Read Sequencing Workflow',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== BACTERIOLOGY FUNDAMENTALS =====
        'prokaryoteVsEukaryoteComparisonDiagram': {
            name: 'Prokaryote vs Eukaryote Comparison',
            category: 'Bacteriology Fundamentals',
            description: 'Comprehensive comparison diagram of prokaryotic and eukaryotic cell features and structures',
            dataRequired: [],
            usage: 'Best for fundamental cell biology comparison',
            examples: ['Prokaryote features', 'Eukaryote features', 'Cell comparison'],
            defaultOptions: {
                title: 'Prokaryote vs Eukaryote Comparison',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'annotatedBacterialCellUltrastructureDiagram': {
            name: 'Annotated Bacterial Cell Ultrastructure',
            category: 'Bacteriology Fundamentals',
            description: 'Fully annotated diagram of bacterial cell ultrastructure including all major components',
            dataRequired: [],
            usage: 'Best for detailed bacterial cell anatomy',
            examples: ['Bacterial ultrastructure', 'Cell wall', 'Flagella'],
            defaultOptions: {
                title: 'Annotated Bacterial Cell Ultrastructure',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'bacterialShapesAndCellularArrangementChart': {
            name: 'Bacterial Shapes and Cellular Arrangement Chart',
            category: 'Bacteriology Fundamentals',
            description: 'Chart of bacterial morphologies and cellular arrangements including cocci, bacilli, spirilla and clusters',
            dataRequired: [],
            usage: 'Best for bacterial morphology classification',
            examples: ['Cocci', 'Bacilli', 'Bacterial arrangement'],
            defaultOptions: {
                title: 'Bacterial Shapes and Cellular Arrangements',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gramStainProcedureAndCellWallCrossSection': {
            name: 'Gram Stain Procedure and Cell Wall Cross-Section',
            category: 'Bacteriology Fundamentals',
            description: 'Diagram of Gram staining procedure steps alongside cross-sectional comparison of Gram-positive and Gram-negative cell walls',
            dataRequired: [],
            usage: 'Best for Gram stain technique and cell wall structure',
            examples: ['Gram stain', 'Peptidoglycan', 'Outer membrane'],
            defaultOptions: {
                title: 'Gram Stain Procedure and Cell Wall Cross-Section',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'metabolicCategoryMatrixAerobicAnaerobicAutotrophHeterotrophDiagram': {
            name: 'Metabolic Category Matrix: Aerobic, Anaerobic, Autotroph and Heterotroph',
            category: 'Bacteriology Fundamentals',
            description: 'Matrix diagram classifying organisms by oxygen requirement and carbon/energy source into metabolic categories',
            dataRequired: [],
            usage: 'Best for metabolic classification and microbial diversity',
            examples: ['Aerobe', 'Anaerobe', 'Autotroph heterotroph matrix'],
            defaultOptions: {
                title: 'Metabolic Category Matrix',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'horizontalGeneTransferThreePathwaysDiagram': {
            name: 'Horizontal Gene Transfer Three Pathways',
            category: 'Bacteriology Fundamentals',
            description: 'Diagram illustrating all three horizontal gene transfer pathways: transformation, conjugation and transduction',
            dataRequired: [],
            usage: 'Best for horizontal gene transfer overview',
            examples: ['HGT', 'Transformation', 'Conjugation'],
            defaultOptions: {
                title: 'Horizontal Gene Transfer Three Pathways',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'stagesOfBacterialInfectionVirulenceFactorsDiagram': {
            name: 'Stages of Bacterial Infection and Virulence Factors',
            category: 'Bacteriology Fundamentals',
            description: 'Diagram showing sequential stages of bacterial infection and the virulence factors acting at each stage',
            dataRequired: [],
            usage: 'Best for bacterial pathogenesis stages',
            examples: ['Infection stages', 'Virulence factors', 'Bacterial pathogenesis'],
            defaultOptions: {
                title: 'Stages of Bacterial Infection and Virulence Factors',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fourMechanismsOfAntibioticResistanceDiagram': {
            name: 'Four Mechanisms of Antibiotic Resistance',
            category: 'Bacteriology Fundamentals',
            description: 'Diagram of the four major antibiotic resistance mechanisms: enzymatic inactivation, target modification, efflux pumps and reduced uptake',
            dataRequired: [],
            usage: 'Best for antibiotic resistance mechanisms overview',
            examples: ['Antibiotic resistance', 'Beta-lactamase', 'Target modification'],
            defaultOptions: {
                title: 'Four Mechanisms of Antibiotic Resistance',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bacterialNitrogenCycleStepsAndOrganismsDiagram': {
            name: 'Bacterial Nitrogen Cycle Steps and Organisms',
            category: 'Bacteriology Fundamentals',
            description: 'Diagram of the bacterial nitrogen cycle showing each transformation step and the key organisms responsible',
            dataRequired: [],
            usage: 'Best for nitrogen cycle microbiology',
            examples: ['Nitrogen fixation', 'Nitrification', 'Denitrification'],
            defaultOptions: {
                title: 'Bacterial Nitrogen Cycle Steps and Organisms',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'biofilmFormationFiveStagesDiagram': {
            name: 'Biofilm Formation Five Stages',
            category: 'Bacteriology Fundamentals',
            description: 'Diagram of the five stages of biofilm formation from initial attachment to dispersal',
            dataRequired: [],
            usage: 'Best for biofilm development and structure',
            examples: ['Biofilm stages', 'Attachment', 'Dispersal'],
            defaultOptions: {
                title: 'Biofilm Formation Five Stages',
                showLabels: true,
                width: 1000,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ===== VIROLOGY =====
        'virusSizescaleComparisonToLightMicroscopyResolutionDiagram': {
            name: 'Virus Size Scale Comparison to Light Microscopy Resolution',
            category: 'Virology',
            description: 'Scale diagram comparing virus sizes to light microscopy resolution limits and other biological structures',
            dataRequired: [],
            usage: 'Best for introducing virus size and microscopy scale',
            examples: ['Virus size', 'Microscopy resolution', 'Scale comparison'],
            defaultOptions: {
                title: 'Virus Size Scale Comparison',
                showLabels: true,
                width: 1000,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'envelopedVsNonEnvelopedViralStructureAnnotatedDiagram': {
            name: 'Enveloped vs Non-Enveloped Viral Structure Annotated',
            category: 'Virology',
            description: 'Annotated comparison of enveloped and non-enveloped virus structures with key components labelled',
            dataRequired: [],
            usage: 'Best for viral structure and classification',
            examples: ['Enveloped virus', 'Non-enveloped virus', 'Viral capsid'],
            defaultOptions: {
                title: 'Enveloped vs Non-Enveloped Viral Structure',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'baltimoreSevenClassFlowchartGenomeMrnaStrategyDiagram': {
            name: 'Baltimore Seven Class Flowchart: Genome to mRNA Strategy',
            category: 'Virology',
            description: 'Flowchart of the Baltimore classification system showing genome type and mRNA synthesis strategy for all seven classes',
            dataRequired: [],
            usage: 'Best for viral genome classification and replication strategies',
            examples: ['Baltimore classification', 'Viral genome', 'mRNA strategy'],
            defaultOptions: {
                title: 'Baltimore Classification Flowchart',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'lyticVsLysogenicCycleComparisonDiagram': {
            name: 'Lytic vs Lysogenic Cycle Comparison',
            category: 'Virology',
            description: 'Side-by-side comparison diagram of lytic and lysogenic viral replication cycles with decision points',
            dataRequired: [],
            usage: 'Best for comparing viral replication strategies',
            examples: ['Lytic cycle', 'Lysogenic cycle', 'Viral replication'],
            defaultOptions: {
                title: 'Lytic vs Lysogenic Cycle Comparison',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'viralInfectionOutcomeSpectrumLatencyPersistenceTransformationDiagram': {
            name: 'Viral Infection Outcome Spectrum: Latency, Persistence and Transformation',
            category: 'Virology',
            description: 'Spectrum diagram of possible viral infection outcomes including latency, persistent infection and oncogenic transformation',
            dataRequired: [],
            usage: 'Best for viral infection outcomes and chronic disease',
            examples: ['Viral latency', 'Persistent infection', 'Viral transformation'],
            defaultOptions: {
                title: 'Viral Infection Outcome Spectrum',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'innateAdaptiveAntiviralImmunityTimelineDiagram': {
            name: 'Innate and Adaptive Antiviral Immunity Timeline',
            category: 'Virology',
            description: 'Timeline diagram showing the sequence of innate and adaptive immune responses to viral infection',
            dataRequired: [],
            usage: 'Best for antiviral immunity and immune response kinetics',
            examples: ['Antiviral immunity', 'Interferon response', 'Adaptive immune timeline'],
            defaultOptions: {
                title: 'Innate and Adaptive Antiviral Immunity Timeline',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'antigenicDriftVsShiftInfluenzaSegmentReassortmentDiagram': {
            name: 'Antigenic Drift vs Shift and Influenza Segment Reassortment',
            category: 'Virology',
            description: 'Diagram distinguishing antigenic drift from antigenic shift with influenza genome segment reassortment mechanism',
            dataRequired: [],
            usage: 'Best for influenza evolution and pandemic emergence',
            examples: ['Antigenic drift', 'Antigenic shift', 'Segment reassortment'],
            defaultOptions: {
                title: 'Antigenic Drift vs Shift and Influenza Reassortment',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'antiviralDrugTargetSitesonHivReplicationCycleDiagram': {
            name: 'Antiviral Drug Target Sites on HIV Replication Cycle',
            category: 'Virology',
            description: 'Diagram of HIV replication cycle with antiviral drug target sites annotated for each class',
            dataRequired: [],
            usage: 'Best for HIV antiretroviral therapy and drug mechanism',
            examples: ['HIV replication', 'Antiretroviral targets', 'Reverse transcriptase'],
            defaultOptions: {
                title: 'Antiviral Drug Target Sites on HIV Replication Cycle',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'basicReproductionNumberR0ComparisonVirusBarChartDiagram': {
            name: 'Basic Reproduction Number R0 Comparison Virus Bar Chart',
            category: 'Virology',
            description: 'Bar chart comparing R0 values for major human viruses to illustrate transmissibility differences',
            dataRequired: [],
            usage: 'Best for viral transmissibility comparison and epidemiology',
            examples: ['R0 comparison', 'Virus transmissibility', 'Measles vs COVID R0'],
            defaultOptions: {
                title: 'Basic Reproduction Number R0 Comparison by Virus',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'viralVectorGeneTherapyDeliveryMechanismDiagram': {
            name: 'Viral Vector Gene Therapy Delivery Mechanism',
            category: 'Virology',
            description: 'Diagram of viral vector types and gene delivery mechanisms used in gene therapy',
            dataRequired: [],
            usage: 'Best for gene therapy and viral vector biology',
            examples: ['Viral vector', 'Gene therapy', 'AAV delivery'],
            defaultOptions: {
                title: 'Viral Vector Gene Therapy Delivery Mechanism',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== MYCOLOGY =====
        'fungiVsPlantsBacteriaAnimalsFeatureComparisonTableDiagram': {
            name: 'Fungi vs Plants, Bacteria and Animals Feature Comparison Table',
            category: 'Mycology',
            description: 'Comparison table of key features distinguishing fungi from plants, bacteria and animals',
            dataRequired: [],
            usage: 'Best for fungal kingdom classification and distinguishing features',
            examples: ['Fungi vs plants', 'Chitin cell wall', 'Kingdom comparison'],
            defaultOptions: {
                title: 'Fungi vs Plants, Bacteria and Animals Feature Comparison',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'annotatedFungalHyphaeCrossSectionChitinErgosterolDiagram': {
            name: 'Annotated Fungal Hyphae Cross-Section: Chitin and Ergosterol',
            category: 'Mycology',
            description: 'Annotated cross-section diagram of fungal hyphae highlighting chitin cell wall and ergosterol membrane components',
            dataRequired: [],
            usage: 'Best for fungal cell structure and antifungal targets',
            examples: ['Fungal hyphae', 'Chitin', 'Ergosterol'],
            defaultOptions: {
                title: 'Annotated Fungal Hyphae Cross-Section',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'yeastMouldDimorphicFormTemperatureSwitchDiagram': {
            name: 'Yeast, Mould and Dimorphic Form Temperature Switch',
            category: 'Mycology',
            description: 'Diagram showing morphological forms of yeast, mould and dimorphic fungi with temperature-dependent switching',
            dataRequired: [],
            usage: 'Best for fungal morphology and dimorphism',
            examples: ['Yeast form', 'Mould form', 'Dimorphic switch'],
            defaultOptions: {
                title: 'Yeast, Mould and Dimorphic Temperature Switch',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fungalPhylaSporeTypeCharacteristicsCladogramDiagram': {
            name: 'Fungal Phyla, Spore Type and Characteristics Cladogram',
            category: 'Mycology',
            description: 'Cladogram of major fungal phyla with spore types and distinguishing characteristics',
            dataRequired: [],
            usage: 'Best for fungal phylogeny and classification',
            examples: ['Fungal phyla', 'Ascomycota', 'Basidiomycota'],
            defaultOptions: {
                title: 'Fungal Phyla Cladogram and Characteristics',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'rhizopusSexualAsexualLifecycleZygosporeFormationDiagram': {
            name: 'Rhizopus Sexual and Asexual Lifecycle with Zygospore Formation',
            category: 'Mycology',
            description: 'Lifecycle diagram of Rhizopus showing both sexual zygospore formation and asexual sporangium pathways',
            dataRequired: [],
            usage: 'Best for zygomycete lifecycle and reproductive strategies',
            examples: ['Rhizopus lifecycle', 'Zygospore', 'Sporangium'],
            defaultOptions: {
                title: 'Rhizopus Sexual and Asexual Lifecycle',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'saprotrophicAbsorptiveNutritionExtracellularDigestionDiagram': {
            name: 'Saprotrophic Absorptive Nutrition and Extracellular Digestion',
            category: 'Mycology',
            description: 'Diagram of fungal saprotrophic nutrition showing extracellular enzyme secretion and absorptive nutrient uptake',
            dataRequired: [],
            usage: 'Best for fungal nutrition and decomposition roles',
            examples: ['Saprotrophic nutrition', 'Extracellular digestion', 'Absorptive nutrition'],
            defaultOptions: {
                title: 'Saprotrophic Absorptive Nutrition and Extracellular Digestion',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'mycosesClassificationSuperficialCutaneousSubcutaneousSystemicDiagram': {
            name: 'Mycoses Classification: Superficial, Cutaneous, Subcutaneous and Systemic',
            category: 'Mycology',
            description: 'Classification diagram of fungal infections (mycoses) by tissue depth from superficial to systemic',
            dataRequired: [],
            usage: 'Best for clinical mycology and infection classification',
            examples: ['Superficial mycoses', 'Systemic mycoses', 'Dermatophytosis'],
            defaultOptions: {
                title: 'Mycoses Classification by Tissue Depth',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ectomycorrhizalVsArbuscularMycorrhizalRootStructureDiagram': {
            name: 'Ectomycorrhizal vs Arbuscular Mycorrhizal Root Structure',
            category: 'Mycology',
            description: 'Comparative diagram of ectomycorrhizal and arbuscular mycorrhizal root colonisation structures',
            dataRequired: [],
            usage: 'Best for mycorrhizal ecology and plant-fungus symbiosis',
            examples: ['Ectomycorrhiza', 'Arbuscular mycorrhiza', 'Hartig net'],
            defaultOptions: {
                title: 'Ectomycorrhizal vs Arbuscular Mycorrhizal Root Structure',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'penicillinBiosynthesisPathwayPenicilliumFermentationDiagram': {
            name: 'Penicillin Biosynthesis Pathway and Penicillium Fermentation',
            category: 'Mycology',
            description: 'Diagram of penicillin biosynthesis pathway in Penicillium with industrial fermentation context',
            dataRequired: [],
            usage: 'Best for antibiotic biosynthesis and industrial mycology',
            examples: ['Penicillin biosynthesis', 'Penicillium', 'Industrial fermentation'],
            defaultOptions: {
                title: 'Penicillin Biosynthesis Pathway',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ophiocordycepsZombieAntBehaviourManipulationLifecycleDiagram': {
            name: 'Ophiocordyceps Zombie Ant Behaviour Manipulation Lifecycle',
            category: 'Mycology',
            description: 'Lifecycle diagram of Ophiocordyceps fungus showing ant behaviour manipulation and transmission stages',
            dataRequired: [],
            usage: 'Best for parasitic fungi and host behaviour manipulation',
            examples: ['Ophiocordyceps', 'Zombie ant fungus', 'Parasite manipulation'],
            defaultOptions: {
                title: 'Ophiocordyceps Zombie Ant Lifecycle',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== PROTISTOLOGY =====
        'protistParaphyleticSupergroupsSAR_Excavata_Amoebozoa_OverviewDiagram': {
            name: 'Protist Paraphyletic Supergroups: SAR, Excavata and Amoebozoa Overview',
            category: 'Protistology',
            description: 'Overview diagram of protist supergroups including SAR, Excavata and Amoebozoa with representative examples',
            dataRequired: [],
            usage: 'Best for protist diversity and phylogenetic classification',
            examples: ['Protist supergroups', 'SAR group', 'Excavata'],
            defaultOptions: {
                title: 'Protist Supergroups Overview',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'parameciumAnnotatedUltrastructureContractileVacuoleTrichocystDiagram': {
            name: 'Paramecium Annotated Ultrastructure: Contractile Vacuole and Trichocyst',
            category: 'Protistology',
            description: 'Fully annotated diagram of Paramecium ultrastructure highlighting contractile vacuole and trichocyst organelles',
            dataRequired: [],
            usage: 'Best for ciliate biology and protist cell organisation',
            examples: ['Paramecium', 'Contractile vacuole', 'Trichocyst'],
            defaultOptions: {
                title: 'Paramecium Annotated Ultrastructure',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'protistSuperGroupCladogramSARArchaeplastidaExcavataDiagram': {
            name: 'Protist Supergroup Cladogram: SAR, Archaeplastida and Excavata',
            category: 'Protistology',
            description: 'Cladogram of protist supergroups SAR, Archaeplastida and Excavata with phylogenetic relationships',
            dataRequired: [],
            usage: 'Best for protist phylogeny and evolutionary relationships',
            examples: ['Protist cladogram', 'Archaeplastida', 'Phylogenetics'],
            defaultOptions: {
                title: 'Protist Supergroup Cladogram',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'ciliaPseudopodiaFlagellaAxopodiaLocomotionTypeComparisonDiagram': {
            name: 'Cilia, Pseudopodia, Flagella and Axopodia Locomotion Type Comparison',
            category: 'Protistology',
            description: 'Comparative diagram of protist locomotion types: cilia, pseudopodia, flagella and axopodia with structural details',
            dataRequired: [],
            usage: 'Best for protist movement mechanisms',
            examples: ['Cilia movement', 'Pseudopod', 'Flagella locomotion'],
            defaultOptions: {
                title: 'Protist Locomotion Type Comparison',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'mixotrophyPhagotrophyPhotoautotrophyNutritionSpectrumDiagram': {
            name: 'Mixotrophy, Phagotrophy and Photoautotrophy Nutrition Spectrum',
            category: 'Protistology',
            description: 'Spectrum diagram of protist nutritional strategies from strict photoautotrophy through mixotrophy to phagotrophy',
            dataRequired: [],
            usage: 'Best for protist nutritional diversity and mixotrophy',
            examples: ['Mixotrophy', 'Phagotrophy', 'Nutritional spectrum'],
            defaultOptions: {
                title: 'Protist Nutrition Spectrum',
                showLabels: true,
                width: 1000,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'parameciumConjugationNuclearExchangeMicronucleusMacronucleusDiagram': {
            name: 'Paramecium Conjugation: Nuclear Exchange, Micronucleus and Macronucleus',
            category: 'Protistology',
            description: 'Diagram of Paramecium conjugation showing nuclear exchange between micronucleus and macronucleus',
            dataRequired: [],
            usage: 'Best for ciliate sexual reproduction and nuclear dimorphism',
            examples: ['Paramecium conjugation', 'Micronucleus', 'Macronucleus'],
            defaultOptions: {
                title: 'Paramecium Conjugation and Nuclear Exchange',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'plasmodiumFalciparumCompleteLifecycleHumanAnophelesHostDiagram': {
            name: 'Plasmodium falciparum Complete Lifecycle: Human and Anopheles Host',
            category: 'Protistology',
            description: 'Complete lifecycle diagram of Plasmodium falciparum across human and Anopheles mosquito hosts',
            dataRequired: [],
            usage: 'Best for detailed malaria parasite biology',
            examples: ['P. falciparum lifecycle', 'Malaria parasite', 'Anopheles host'],
            defaultOptions: {
                title: 'Plasmodium falciparum Complete Lifecycle',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'algalPigmentAbsorptionSpectraChlorophyllPhycoerythrinFucoxanthinDiagram': {
            name: 'Algal Pigment Absorption Spectra: Chlorophyll, Phycoerythrin and Fucoxanthin',
            category: 'Protistology',
            description: 'Absorption spectra diagram comparing photosynthetic pigments chlorophyll, phycoerythrin and fucoxanthin in algae',
            dataRequired: [],
            usage: 'Best for algal photosynthesis and pigment diversity',
            examples: ['Algal pigments', 'Phycoerythrin', 'Fucoxanthin absorption'],
            defaultOptions: {
                title: 'Algal Pigment Absorption Spectra',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'microbialLoopDOMBacteriaFlagellatesCiliatesZooplanktonFlowDiagram': {
            name: 'Microbial Loop: DOM, Bacteria, Flagellates, Ciliates and Zooplankton Flow',
            category: 'Protistology',
            description: 'Diagram of the microbial loop showing carbon and energy flow from dissolved organic matter through bacteria, flagellates, ciliates to zooplankton',
            dataRequired: [],
            usage: 'Best for aquatic food web and microbial loop ecology',
            examples: ['Microbial loop', 'Dissolved organic matter', 'Aquatic food web'],
            defaultOptions: {
                title: 'Microbial Loop Carbon Flow',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'dictyosteliumAggregationSlugFruitingBodyDevelopmentalLifecycleDiagram': {
            name: 'Dictyostelium Aggregation, Slug and Fruiting Body Developmental Lifecycle',
            category: 'Protistology',
            description: 'Developmental lifecycle diagram of Dictyostelium from individual amoeba through aggregation, slug and fruiting body stages',
            dataRequired: [],
            usage: 'Best for social amoeba biology and development',
            examples: ['Dictyostelium', 'Social amoeba', 'Fruiting body'],
            defaultOptions: {
                title: 'Dictyostelium Developmental Lifecycle',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== MICROBIAL GROWTH =====
        'binaryFissionFtsZRingDivisomeSeptumFormationDiagram': {
            name: 'Binary Fission: FtsZ Ring, Divisome and Septum Formation',
            category: 'Microbial Growth',
            description: 'Diagram of bacterial binary fission showing FtsZ Z-ring assembly, divisome formation and septum synthesis',
            dataRequired: [],
            usage: 'Best for bacterial cell division mechanism',
            examples: ['Binary fission', 'FtsZ ring', 'Divisome'],
            defaultOptions: {
                title: 'Binary Fission: FtsZ Ring and Septum Formation',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fourPhaseBatchCultureGrowthCurveSemiLogPlotDiagram': {
            name: 'Four Phase Batch Culture Growth Curve Semi-Log Plot',
            category: 'Microbial Growth',
            description: 'Semi-logarithmic growth curve diagram showing all four phases of bacterial batch culture growth',
            dataRequired: [],
            usage: 'Best for bacterial growth kinetics and batch culture',
            examples: ['Growth curve', 'Lag phase', 'Log phase'],
            defaultOptions: {
                title: 'Bacterial Growth Curve Semi-Log Plot',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cardinalTemperaturePHWaterActivityGrowthRangeDiagram': {
            name: 'Cardinal Temperature, pH and Water Activity Growth Range',
            category: 'Microbial Growth',
            description: 'Diagram of cardinal points (minimum, optimum, maximum) for temperature, pH and water activity effects on microbial growth',
            dataRequired: [],
            usage: 'Best for environmental factors affecting microbial growth',
            examples: ['Cardinal temperature', 'Water activity', 'Growth range'],
            defaultOptions: {
                title: 'Cardinal Temperature, pH and Water Activity Growth Ranges',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'macronutrientMicronutrientGrowthFactorHierarchyDiagram': {
            name: 'Macronutrient, Micronutrient and Growth Factor Hierarchy',
            category: 'Microbial Growth',
            description: 'Hierarchy diagram of microbial nutritional requirements from macronutrients through micronutrients to growth factors',
            dataRequired: [],
            usage: 'Best for microbial nutrition requirements',
            examples: ['Macronutrients', 'Growth factors', 'Trace elements'],
            defaultOptions: {
                title: 'Microbial Nutrient Hierarchy',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'selectiveDifferentialEnrichedMediaFunctionComparisonDiagram': {
            name: 'Selective, Differential and Enriched Media Function Comparison',
            category: 'Microbial Growth',
            description: 'Comparison diagram of selective, differential and enriched culture media with functions and examples',
            dataRequired: [],
            usage: 'Best for microbial culture media types and applications',
            examples: ['Selective media', 'Differential media', 'Culture media comparison'],
            defaultOptions: {
                title: 'Selective, Differential and Enriched Media Comparison',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'platecountTurbidimetryFlowCytometryMethodComparisonDiagram': {
            name: 'Plate Count, Turbidimetry and Flow Cytometry Method Comparison',
            category: 'Microbial Growth',
            description: 'Comparison of microbial enumeration methods including plate count, turbidimetry and flow cytometry',
            dataRequired: [],
            usage: 'Best for microbial counting methods and their applications',
            examples: ['Plate count', 'Turbidimetry', 'Flow cytometry'],
            defaultOptions: {
                title: 'Microbial Enumeration Method Comparison',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chemostatSteadyStateDilutionRateSubstrateConcentrationCellDensityDiagram': {
            name: 'Chemostat Steady State: Dilution Rate, Substrate Concentration and Cell Density',
            category: 'Microbial Growth',
            description: 'Diagram of chemostat steady-state relationships between dilution rate, substrate concentration and cell density',
            dataRequired: [],
            usage: 'Best for continuous culture and chemostat theory',
            examples: ['Chemostat', 'Dilution rate', 'Steady state'],
            defaultOptions: {
                title: 'Chemostat Steady State Relationships',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'physicalChemicalControlMethodsSterilisationHierarchyDiagram': {
            name: 'Physical and Chemical Control Methods Sterilisation Hierarchy',
            category: 'Microbial Growth',
            description: 'Hierarchy diagram of physical and chemical microbial control methods ranked by sterilisation efficacy',
            dataRequired: [],
            usage: 'Best for comparing microbial control method efficacy',
            examples: ['Sterilisation hierarchy', 'Physical control', 'Chemical control'],
            defaultOptions: {
                title: 'Physical and Chemical Control Methods Hierarchy',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'biofilmFiveStageFormationEPSMatrixWaterChannelQuorumSensingDiagram': {
            name: 'Biofilm Five Stage Formation: EPS Matrix, Water Channels and Quorum Sensing',
            category: 'Microbial Growth',
            description: 'Detailed five-stage biofilm formation diagram including EPS matrix architecture, water channels and quorum sensing integration',
            dataRequired: [],
            usage: 'Best for detailed biofilm structure and development',
            examples: ['Biofilm EPS', 'Water channels', 'Biofilm quorum sensing'],
            defaultOptions: {
                title: 'Biofilm Formation: EPS, Water Channels and Quorum Sensing',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'batchFedBatchContinuousFermentationProductivityComparisonDiagram': {
            name: 'Batch, Fed-Batch and Continuous Fermentation Productivity Comparison',
            category: 'Microbial Growth',
            description: 'Comparison diagram of batch, fed-batch and continuous fermentation modes with productivity and product profiles',
            dataRequired: [],
            usage: 'Best for industrial fermentation process comparison',
            examples: ['Batch fermentation', 'Fed-batch', 'Continuous fermentation'],
            defaultOptions: {
                title: 'Fermentation Mode Productivity Comparison',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== PHOTOSYNTHESIS (LIGHT REACTIONS) =====
        'chloroplastUltrastructureAnnotatedCrossSection': {
            name: 'Chloroplast Ultrastructure Annotated Cross-Section',
            category: 'Photosynthesis - Light Reactions',
            description: 'Fully annotated cross-section diagram of chloroplast ultrastructure including thylakoid, grana and stroma',
            dataRequired: [],
            usage: 'Best for chloroplast structure and compartmentalisation',
            examples: ['Chloroplast structure', 'Thylakoid', 'Grana'],
            defaultOptions: {
                title: 'Chloroplast Ultrastructure Annotated Cross-Section',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'photosystemIandIIReactionCentreAntennaComplexDiagram': {
            name: 'Photosystem I and II Reaction Centre and Antenna Complex',
            category: 'Photosynthesis - Light Reactions',
            description: 'Diagram of Photosystem I and II showing reaction centre and antenna complex organisation',
            dataRequired: [],
            usage: 'Best for photosystem structure and light harvesting',
            examples: ['Photosystem II', 'Reaction centre', 'Antenna complex'],
            defaultOptions: {
                title: 'Photosystem I and II Reaction Centre and Antenna Complex',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'zSchemeElectronEnergyLevelCarrierSequenceDiagram': {
            name: 'Z-Scheme Electron Energy Level and Carrier Sequence',
            category: 'Photosynthesis - Light Reactions',
            description: 'Z-scheme diagram showing electron energy levels and carrier sequence from water oxidation to NADPH formation',
            dataRequired: [],
            usage: 'Best for non-cyclic photophosphorylation and electron flow',
            examples: ['Z-scheme', 'Electron carriers', 'Non-cyclic photophosphorylation'],
            defaultOptions: {
                title: 'Z-Scheme Electron Energy Level and Carrier Sequence',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'oxygenEvolvingComplexSStateCycleDiagram': {
            name: 'Oxygen Evolving Complex S-State Cycle',
            category: 'Photosynthesis - Light Reactions',
            description: 'Diagram of the oxygen evolving complex S-state cycle (Kok cycle) showing water oxidation steps',
            dataRequired: [],
            usage: 'Best for water splitting and oxygen evolution mechanism',
            examples: ['Oxygen evolving complex', 'S-state cycle', 'Kok cycle'],
            defaultOptions: {
                title: 'Oxygen Evolving Complex S-State Cycle',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'thylakoidProtonGradientCF1CF0AtpSynthaseMechanismDiagram': {
            name: 'Thylakoid Proton Gradient and CF1-CF0 ATP Synthase Mechanism',
            category: 'Photosynthesis - Light Reactions',
            description: 'Diagram of thylakoid proton gradient generation and CF1-CF0 ATP synthase rotary mechanism',
            dataRequired: [],
            usage: 'Best for photophosphorylation and chloroplast ATP synthase',
            examples: ['Thylakoid proton gradient', 'CF1-CF0 ATP synthase', 'Photophosphorylation'],
            defaultOptions: {
                title: 'Thylakoid Proton Gradient and CF1-CF0 ATP Synthase',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'atpNadphOxygenProductStoichiometryFlowDiagram': {
            name: 'ATP, NADPH and Oxygen Product Stoichiometry Flow',
            category: 'Photosynthesis - Light Reactions',
            description: 'Stoichiometry flow diagram of ATP, NADPH and oxygen production in the light reactions of photosynthesis',
            dataRequired: [],
            usage: 'Best for light reaction product accounting',
            examples: ['Light reaction stoichiometry', 'ATP NADPH ratio', 'Oxygen production'],
            defaultOptions: {
                title: 'Light Reaction ATP, NADPH and Oxygen Stoichiometry',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nonPhotochemicalQuenchingXanthophyllCycleStateDiagram': {
            name: 'Non-Photochemical Quenching and Xanthophyll Cycle State',
            category: 'Photosynthesis - Light Reactions',
            description: 'Diagram of non-photochemical quenching mechanism and xanthophyll cycle states in photoprotection',
            dataRequired: [],
            usage: 'Best for photoprotection and excess light energy dissipation',
            examples: ['Non-photochemical quenching', 'Xanthophyll cycle', 'Photoprotection'],
            defaultOptions: {
                title: 'Non-Photochemical Quenching and Xanthophyll Cycle',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'hillReactionDcpipAssaySetupAndColourChangeDiagram': {
            name: 'Hill Reaction DCPIP Assay Setup and Colour Change',
            category: 'Photosynthesis - Light Reactions',
            description: 'Diagram of Hill reaction experimental setup using DCPIP assay with expected colour change results',
            dataRequired: [],
            usage: 'Best for practical photosynthesis experiments and electron acceptor assays',
            examples: ['Hill reaction', 'DCPIP assay', 'Practical photosynthesis'],
            defaultOptions: {
                title: 'Hill Reaction DCPIP Assay',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'primaryEndosymbiosisChloroplastOriginTimelineDiagram': {
            name: 'Primary Endosymbiosis and Chloroplast Origin Timeline',
            category: 'Photosynthesis - Light Reactions',
            description: 'Timeline diagram of primary endosymbiosis leading to chloroplast origin with evidence markers',
            dataRequired: [],
            usage: 'Best for chloroplast evolution and endosymbiotic theory',
            examples: ['Endosymbiosis', 'Chloroplast origin', 'Cyanobacteria ancestor'],
            defaultOptions: {
                title: 'Primary Endosymbiosis and Chloroplast Origin Timeline',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'artificialPhotosynthesisDyeSensitisedSolarCellDesignDiagram': {
            name: 'Artificial Photosynthesis and Dye-Sensitised Solar Cell Design',
            category: 'Photosynthesis - Light Reactions',
            description: 'Diagram of artificial photosynthesis principles and dye-sensitised solar cell design inspired by natural photosystems',
            dataRequired: [],
            usage: 'Best for applied photochemistry and renewable energy applications',
            examples: ['Artificial photosynthesis', 'Dye-sensitised solar cell', 'DSSC design'],
            defaultOptions: {
                title: 'Artificial Photosynthesis and Dye-Sensitised Solar Cell',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== PHOTOSYNTHESIS (CALVIN CYCLE) =====
        'calvinCycleStromaLocationInputOutputOverviewDiagram': {
            name: 'Calvin Cycle Stroma Location, Input and Output Overview',
            category: 'Photosynthesis - Calvin Cycle',
            description: 'Overview diagram of the Calvin cycle in the stroma showing inputs (CO2, ATP, NADPH) and outputs (G3P)',
            dataRequired: [],
            usage: 'Best for Calvin cycle overview and stroma location',
            examples: ['Calvin cycle overview', 'Stroma', 'G3P output'],
            defaultOptions: {
                title: 'Calvin Cycle: Stroma Location, Inputs and Outputs',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rubiscoCarbonFixationRubpTo3PgaReactionDiagram': {
            name: 'RuBisCO Carbon Fixation: RuBP to 3-PGA Reaction',
            category: 'Photosynthesis - Calvin Cycle',
            description: 'Diagram of RuBisCO-catalysed carbon fixation reaction converting RuBP and CO2 to 3-PGA',
            dataRequired: [],
            usage: 'Best for carbon fixation and RuBisCO enzyme mechanism',
            examples: ['RuBisCO', 'Carbon fixation', 'RuBP to 3-PGA'],
            defaultOptions: {
                title: 'RuBisCO Carbon Fixation: RuBP to 3-PGA',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pgaTo13BpgToG3pReductionStepAtpNadphConsumptionDiagram': {
            name: '3-PGA to 1,3-BPG to G3P Reduction Step ATP and NADPH Consumption',
            category: 'Photosynthesis - Calvin Cycle',
            description: 'Diagram of the reduction phase of the Calvin cycle from 3-PGA through 1,3-BPG to G3P with ATP and NADPH consumption',
            dataRequired: [],
            usage: 'Best for Calvin cycle reduction phase and energy consumption',
            examples: ['Calvin cycle reduction', '3-PGA to G3P', 'NADPH consumption'],
            defaultOptions: {
                title: '3-PGA to G3P Reduction: ATP and NADPH Consumption',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rubpRegenerationCarbonShufflePhosphoribulokinaseStepDiagram': {
            name: 'RuBP Regeneration, Carbon Shuffle and Phosphoribulokinase Step',
            category: 'Photosynthesis - Calvin Cycle',
            description: 'Diagram of the RuBP regeneration phase showing carbon shuffling reactions and phosphoribulokinase step',
            dataRequired: [],
            usage: 'Best for Calvin cycle regeneration phase',
            examples: ['RuBP regeneration', 'Phosphoribulokinase', 'Carbon shuffle'],
            defaultOptions: {
                title: 'RuBP Regeneration and Phosphoribulokinase Step',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'calvinCycleThreeTurnCarbonAtpNadphBalanceAccountingDiagram': {
            name: 'Calvin Cycle Three Turn Carbon, ATP and NADPH Balance Accounting',
            category: 'Photosynthesis - Calvin Cycle',
            description: 'Accounting diagram showing carbon, ATP and NADPH balance over three turns of the Calvin cycle to produce one G3P',
            dataRequired: [],
            usage: 'Best for Calvin cycle stoichiometry and energy accounting',
            examples: ['Calvin cycle accounting', 'Three turns', 'ATP NADPH balance'],
            defaultOptions: {
                title: 'Calvin Cycle Three Turn Balance Accounting',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'thioredoxinLightActivationCalvinCycleEnzymesDiagram': {
            name: 'Thioredoxin Light Activation of Calvin Cycle Enzymes',
            category: 'Photosynthesis - Calvin Cycle',
            description: 'Diagram of thioredoxin-mediated light activation of key Calvin cycle enzymes via disulfide bond reduction',
            dataRequired: [],
            usage: 'Best for Calvin cycle enzyme regulation and light activation',
            examples: ['Thioredoxin', 'Light activation', 'Enzyme regulation'],
            defaultOptions: {
                title: 'Thioredoxin Light Activation of Calvin Cycle Enzymes',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== C3, C4 AND CAM PHOTOSYNTHESIS =====
        'c3LeafMesophyllRubiscoOnlyFixationAnatomyDiagram': {
            name: 'C3 Leaf Mesophyll: RuBisCO-Only Fixation Anatomy',
            category: 'C3, C4 and CAM Photosynthesis',
            description: 'Anatomical diagram of C3 leaf mesophyll showing RuBisCO-only carbon fixation distribution',
            dataRequired: [],
            usage: 'Best for C3 photosynthesis leaf anatomy',
            examples: ['C3 photosynthesis', 'Mesophyll anatomy', 'RuBisCO location'],
            defaultOptions: {
                title: 'C3 Leaf Mesophyll RuBisCO-Only Fixation',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'kranzAnatomyMesophyllBundleSheathPepCarbonPumpDiagram': {
            name: 'Kranz Anatomy: Mesophyll, Bundle Sheath and PEP Carbon Pump',
            category: 'C3, C4 and CAM Photosynthesis',
            description: 'Diagram of C4 Kranz anatomy showing mesophyll and bundle sheath compartments and PEP carboxylase carbon pump',
            dataRequired: [],
            usage: 'Best for C4 photosynthesis and Kranz anatomy',
            examples: ['Kranz anatomy', 'Bundle sheath', 'PEP carboxylase'],
            defaultOptions: {
                title: 'Kranz Anatomy and C4 Carbon Pump',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'camDayNightStomataOpenCloseTemporalCarbonFixationDiagram': {
            name: 'CAM Day-Night Stomata Open/Close and Temporal Carbon Fixation',
            category: 'C3, C4 and CAM Photosynthesis',
            description: 'Diagram of CAM photosynthesis showing day-night stomatal regulation and temporal separation of carbon fixation',
            dataRequired: [],
            usage: 'Best for CAM photosynthesis and water conservation',
            examples: ['CAM photosynthesis', 'Stomata day-night', 'Temporal separation'],
            defaultOptions: {
                title: 'CAM Photosynthesis Day-Night Cycle',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'c4RiceProjectYieldImprovementRubiscoEngineeringRoadmapDiagram': {
            name: 'C4 Rice Project: Yield Improvement and RuBisCO Engineering Roadmap',
            category: 'C3, C4 and CAM Photosynthesis',
            description: 'Roadmap diagram of the C4 Rice project for improving yield through RuBisCO engineering and C4 pathway introduction',
            dataRequired: [],
            usage: 'Best for agricultural biotechnology and photosynthesis engineering',
            examples: ['C4 rice', 'Yield improvement', 'RuBisCO engineering'],
            defaultOptions: {
                title: 'C4 Rice Project Yield Improvement Roadmap',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== CELLULAR RESPIRATION =====
        'mitochondrionAnnotatedUltrastructureCristaeMatrixImsDiagram': {
            name: 'Mitochondrion Annotated Ultrastructure: Cristae, Matrix and IMS',
            category: 'Cellular Respiration',
            description: 'Fully annotated mitochondrion ultrastructure diagram including cristae, matrix and intermembrane space',
            dataRequired: [],
            usage: 'Best for mitochondrial structure and compartmentalisation',
            examples: ['Mitochondrion structure', 'Cristae', 'Intermembrane space'],
            defaultOptions: {
                title: 'Mitochondrion Annotated Ultrastructure',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'glycolysisInvestmentPayoffPhaseTenStepEnzymeFlowDiagram': {
            name: 'Glycolysis Investment and Payoff Phase Ten Step Enzyme Flow',
            category: 'Cellular Respiration',
            description: 'Detailed ten-step enzyme flow diagram of glycolysis divided into investment and payoff phases',
            dataRequired: [],
            usage: 'Best for detailed glycolysis pathway and enzyme names',
            examples: ['Glycolysis ten steps', 'Phosphofructokinase', 'Pyruvate kinase'],
            defaultOptions: {
                title: 'Glycolysis Ten Step Enzyme Flow',
                showLabels: true,
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'pyruvateDehydrogenaseComplexThreeEnzymeFiveCoFactorMechanismDiagram': {
            name: 'Pyruvate Dehydrogenase Complex: Three Enzyme, Five CoFactor Mechanism',
            category: 'Cellular Respiration',
            description: 'Mechanistic diagram of the pyruvate dehydrogenase complex showing three enzyme components and five cofactor roles',
            dataRequired: [],
            usage: 'Best for pyruvate oxidation and multienzyme complex mechanism',
            examples: ['Pyruvate dehydrogenase', 'Multienzyme complex', 'Acetyl-CoA formation'],
            defaultOptions: {
                title: 'Pyruvate Dehydrogenase Complex Mechanism',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'krebsCycleEightStepEnzymeIntermediateCoFactorYieldDiagram': {
            name: 'Krebs Cycle Eight Step Enzyme, Intermediate and CoFactor Yield',
            category: 'Cellular Respiration',
            description: 'Eight-step Krebs cycle diagram with enzyme names, intermediates, cofactors and energy yield per turn',
            dataRequired: [],
            usage: 'Best for detailed Krebs cycle pathway',
            examples: ['Krebs cycle steps', 'Isocitrate dehydrogenase', 'NADH yield'],
            defaultOptions: {
                title: 'Krebs Cycle Eight Step Detail',
                showLabels: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'mitochondrialEtcFourComplexesProtonPumpingRedoxPotentialDiagram': {
            name: 'Mitochondrial ETC: Four Complexes, Proton Pumping and Redox Potential',
            category: 'Cellular Respiration',
            description: 'Diagram of the mitochondrial electron transport chain showing four complexes, proton pumping and redox potential ladder',
            dataRequired: [],
            usage: 'Best for ETC complexes and oxidative phosphorylation',
            examples: ['ETC complexes', 'Complex I', 'Cytochrome c'],
            defaultOptions: {
                title: 'Mitochondrial ETC Four Complexes',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'f0f1AtpSynthaseRotaryMotorBindingChangeMechanismDiagram': {
            name: 'F0F1 ATP Synthase Rotary Motor and Binding Change Mechanism',
            category: 'Cellular Respiration',
            description: 'Diagram of F0F1 ATP synthase rotary motor and Boyer binding change mechanism for ATP synthesis',
            dataRequired: [],
            usage: 'Best for ATP synthase mechanism and chemiosmosis',
            examples: ['ATP synthase', 'Binding change mechanism', 'Rotary motor'],
            defaultOptions: {
                title: 'F0F1 ATP Synthase Rotary Motor and Binding Change',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'perGlucoseAtpYieldPathwayBreakdownSummaryTableDiagram': {
            name: 'Per Glucose ATP Yield Pathway Breakdown Summary Table',
            category: 'Cellular Respiration',
            description: 'Summary table diagram of ATP yield per glucose broken down by glycolysis, pyruvate oxidation, Krebs cycle and ETC',
            dataRequired: [],
            usage: 'Best for ATP yield accounting per glucose',
            examples: ['ATP yield', 'Glucose to ATP', 'Respiration accounting'],
            defaultOptions: {
                title: 'Per Glucose ATP Yield Summary Table',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lacticAcidVsAlcoholicFermentationNadPlusRegenerationPathwayDiagram': {
            name: 'Lactic Acid vs Alcoholic Fermentation NAD+ Regeneration Pathway',
            category: 'Cellular Respiration',
            description: 'Comparative pathway diagram of lactic acid and alcoholic fermentation showing NAD+ regeneration mechanisms',
            dataRequired: [],
            usage: 'Best for fermentation pathways and NAD+ recycling',
            examples: ['Lactic acid fermentation', 'Alcoholic fermentation', 'NAD+ regeneration'],
            defaultOptions: {
                title: 'Lactic Acid vs Alcoholic Fermentation NAD+ Regeneration',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'carbohydrateFatProteinCatabolicEntryPointsRespirationDiagram': {
            name: 'Carbohydrate, Fat and Protein Catabolic Entry Points in Respiration',
            category: 'Cellular Respiration',
            description: 'Diagram showing entry points for carbohydrate, fat and protein catabolism into the cellular respiration pathway',
            dataRequired: [],
            usage: 'Best for metabolic fuel integration and catabolism',
            examples: ['Fatty acid oxidation', 'Amino acid catabolism', 'Metabolic entry points'],
            defaultOptions: {
                title: 'Carbohydrate, Fat and Protein Catabolic Entry Points',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'energyChargeAtpAmpAllostericRegulationPfk1CitrateSynthaseDiagram': {
            name: 'Energy Charge, ATP/AMP Allosteric Regulation of PFK1 and Citrate Synthase',
            category: 'Cellular Respiration',
            description: 'Diagram of cellular energy charge and allosteric regulation of phosphofructokinase-1 and citrate synthase by ATP and AMP',
            dataRequired: [],
            usage: 'Best for metabolic regulation and energy charge concept',
            examples: ['Energy charge', 'Allosteric regulation', 'PFK1 regulation'],
            defaultOptions: {
                title: 'Energy Charge and Allosteric Regulation of PFK1 and Citrate Synthase',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== BIOENERGETICS =====
        'gibbsFreeEnergyExergonicEndergonicReactionCoordinateDiagram': {
            name: 'Gibbs Free Energy: Exergonic and Endergonic Reaction Coordinate',
            category: 'Bioenergetics',
            description: 'Reaction coordinate diagram showing Gibbs free energy changes for exergonic and endergonic reactions',
            dataRequired: [],
            usage: 'Best for thermodynamics and reaction spontaneity',
            examples: ['Gibbs free energy', 'Exergonic reaction', 'Activation energy'],
            defaultOptions: {
                title: 'Gibbs Free Energy: Exergonic and Endergonic Reactions',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'atpMolecularStructurePhosphoanhydrideBondHighEnergyAnnotationDiagram': {
            name: 'ATP Molecular Structure: Phosphoanhydride Bond and High Energy Annotation',
            category: 'Bioenergetics',
            description: 'Annotated molecular structure diagram of ATP highlighting phosphoanhydride bonds and high energy sites',
            dataRequired: [],
            usage: 'Best for ATP structure and energy storage',
            examples: ['ATP structure', 'Phosphoanhydride bond', 'High energy bond'],
            defaultOptions: {
                title: 'ATP Molecular Structure and High Energy Bonds',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'phosphorylTransferPotentialHierarchyPepAtpG6pComparisonDiagram': {
            name: 'Phosphoryl Transfer Potential Hierarchy: PEP, ATP and G6P Comparison',
            category: 'Bioenergetics',
            description: 'Hierarchy diagram of phosphoryl transfer potential comparing PEP, ATP and glucose-6-phosphate',
            dataRequired: [],
            usage: 'Best for understanding ATP position in energy currency hierarchy',
            examples: ['Phosphoryl transfer potential', 'PEP', 'Energy currency'],
            defaultOptions: {
                title: 'Phosphoryl Transfer Potential Hierarchy',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'redoxPotentialLadderNadhFadh2CoqCytcO2ElectronFlowDiagram': {
            name: 'Redox Potential Ladder: NADH, FADH2, CoQ, Cytc and O2 Electron Flow',
            category: 'Bioenergetics',
            description: 'Redox potential ladder diagram showing electron flow from NADH and FADH2 through CoQ and cytochrome c to oxygen',
            dataRequired: [],
            usage: 'Best for ETC thermodynamics and electron carrier hierarchy',
            examples: ['Redox potential', 'Electron transport', 'Standard reduction potential'],
            defaultOptions: {
                title: 'Redox Potential Ladder and Electron Flow',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'protonMotiveForceDeltaPsiDeltaPhAcrossInnerMembraneDiagram': {
            name: 'Proton Motive Force: Delta Psi and Delta pH Across Inner Membrane',
            category: 'Bioenergetics',
            description: 'Diagram of proton motive force components showing electrical potential (delta psi) and pH gradient (delta pH) across the inner mitochondrial membrane',
            dataRequired: [],
            usage: 'Best for proton motive force and chemiosmotic theory',
            examples: ['Proton motive force', 'Membrane potential', 'Delta pH'],
            defaultOptions: {
                title: 'Proton Motive Force: Delta Psi and Delta pH',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'aminoacylTrnaAmpIntermediateProteinSynthesisAtpCostDiagram': {
            name: 'Aminoacyl-tRNA AMP Intermediate and Protein Synthesis ATP Cost',
            category: 'Bioenergetics',
            description: 'Diagram of aminoacyl-tRNA synthetase reaction via AMP intermediate and overall ATP cost of protein synthesis',
            dataRequired: [],
            usage: 'Best for translation energetics and tRNA charging',
            examples: ['Aminoacyl-tRNA', 'ATP cost of translation', 'tRNA charging'],
            defaultOptions: {
                title: 'Aminoacyl-tRNA AMP Intermediate and Protein Synthesis Cost',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nakAtpaseE1E2ConformationStoichiometryMembraneTransportDiagram': {
            name: 'Na+/K+ ATPase E1-E2 Conformation, Stoichiometry and Membrane Transport',
            category: 'Bioenergetics',
            description: 'Diagram of Na+/K+ ATPase E1-E2 conformational states, ion stoichiometry and membrane transport mechanism',
            dataRequired: [],
            usage: 'Best for active transport and P-type ATPase mechanism',
            examples: ['Na+/K+ ATPase', 'E1 E2 conformations', 'Active transport'],
            defaultOptions: {
                title: 'Na+/K+ ATPase E1-E2 Conformation and Transport',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'myosinAtpaseCrossbridgePowerStrokeCycleActinFilamentDiagram': {
            name: 'Myosin ATPase Crossbridge Power Stroke Cycle and Actin Filament',
            category: 'Bioenergetics',
            description: 'Diagram of myosin ATPase crossbridge cycle showing power stroke steps and actin filament interaction',
            dataRequired: [],
            usage: 'Best for muscle contraction energetics and crossbridge cycle',
            examples: ['Myosin crossbridge', 'Power stroke', 'Muscle contraction'],
            defaultOptions: {
                title: 'Myosin ATPase Crossbridge Power Stroke Cycle',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'ucp1BrownAdiposeTissueProtonLeakThermogenesisMechanismDiagram': {
            name: 'UCP1 Brown Adipose Tissue Proton Leak and Thermogenesis Mechanism',
            category: 'Bioenergetics',
            description: 'Diagram of UCP1-mediated proton leak in brown adipose tissue and thermogenesis mechanism',
            dataRequired: [],
            usage: 'Best for non-shivering thermogenesis and uncoupling proteins',
            examples: ['UCP1', 'Brown adipose tissue', 'Thermogenesis'],
            defaultOptions: {
                title: 'UCP1 Proton Leak and Thermogenesis Mechanism',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ampkEnergyChargeSignallingCatabolicAnabolicToggleDiagram': {
            name: 'AMPK Energy Charge Signalling and Catabolic-Anabolic Toggle',
            category: 'Bioenergetics',
            description: 'Diagram of AMPK activation by low energy charge and its role in toggling between catabolic and anabolic pathways',
            dataRequired: [],
            usage: 'Best for energy sensing and metabolic regulation by AMPK',
            examples: ['AMPK signalling', 'Energy sensing', 'Metabolic toggle'],
            defaultOptions: {
                title: 'AMPK Energy Charge Signalling and Metabolic Toggle',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'catabolicAnabolicAmphibolicPathwayOrganisationOverviewDiagram': {
            name: 'Catabolic, Anabolic and Amphibolic Pathway Organisation Overview',
            category: 'Bioenergetics',
            description: 'Overview diagram organising catabolic, anabolic and amphibolic metabolic pathways and their interconnections',
            dataRequired: [],
            usage: 'Best for metabolic pathway overview and classification',
            examples: ['Amphibolic pathway', 'Metabolic organisation', 'Catabolic anabolic'],
            defaultOptions: {
                title: 'Catabolic, Anabolic and Amphibolic Pathway Overview',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== ENZYME KINETICS & METABOLIC REGULATION =====
        'michaelisMentenHyperbolicVmaxKmSubstrateVelocityCurveDiagram': {
            name: 'Michaelis-Menten Hyperbolic Vmax, Km Substrate-Velocity Curve',
            category: 'Enzyme Kinetics and Metabolic Regulation',
            description: 'Michaelis-Menten hyperbolic curve diagram annotated with Vmax and Km from substrate-velocity plot',
            dataRequired: [],
            usage: 'Best for enzyme kinetics and Michaelis-Menten analysis',
            examples: ['Michaelis-Menten', 'Vmax', 'Km'],
            defaultOptions: {
                title: 'Michaelis-Menten Substrate-Velocity Curve',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'allostericFeedbackInhibitionSignalCascadePhosphorylationToggleDiagram': {
            name: 'Allosteric Feedback Inhibition, Signal Cascade and Phosphorylation Toggle',
            category: 'Enzyme Kinetics and Metabolic Regulation',
            description: 'Diagram of allosteric feedback inhibition integrated with signal cascade phosphorylation toggle for enzyme regulation',
            dataRequired: [],
            usage: 'Best for enzyme regulation mechanisms',
            examples: ['Allosteric regulation', 'Phosphorylation', 'Signal cascade'],
            defaultOptions: {
                title: 'Allosteric Feedback Inhibition and Phosphorylation Toggle',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'glycolysisGlycogenPentosePhosphateGluconeogenesisCentralHubDiagram': {
            name: 'Glycolysis, Glycogen, Pentose Phosphate and Gluconeogenesis Central Hub',
            category: 'Enzyme Kinetics and Metabolic Regulation',
            description: 'Central hub diagram showing interconnections between glycolysis, glycogen metabolism, pentose phosphate pathway and gluconeogenesis',
            dataRequired: [],
            usage: 'Best for carbohydrate metabolism integration',
            examples: ['Pentose phosphate pathway', 'Gluconeogenesis', 'Metabolic hub'],
            defaultOptions: {
                title: 'Carbohydrate Metabolism Central Hub',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'fattyAcidSynthesisBetaOxidationCompartmentalisationMitochondriaCytosolDiagram': {
            name: 'Fatty Acid Synthesis and Beta-Oxidation Compartmentalisation: Mitochondria and Cytosol',
            category: 'Enzyme Kinetics and Metabolic Regulation',
            description: 'Diagram showing compartmentalisation of fatty acid synthesis (cytosol) and beta-oxidation (mitochondria) with carnitine shuttle',
            dataRequired: [],
            usage: 'Best for lipid metabolism compartmentalisation',
            examples: ['Beta-oxidation', 'Fatty acid synthesis', 'Carnitine shuttle'],
            defaultOptions: {
                title: 'Fatty Acid Synthesis and Beta-Oxidation Compartmentalisation',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'transaminationUreaCycleNitrogenFlowKrebsConnectionDiagram': {
            name: 'Transamination, Urea Cycle Nitrogen Flow and Krebs Connection',
            category: 'Enzyme Kinetics and Metabolic Regulation',
            description: 'Diagram of transamination reactions, urea cycle nitrogen flow and connections to the Krebs cycle',
            dataRequired: [],
            usage: 'Best for amino acid and nitrogen metabolism',
            examples: ['Transamination', 'Urea cycle', 'Nitrogen flow'],
            defaultOptions: {
                title: 'Transamination and Urea Cycle Nitrogen Flow',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'purinePyrimidineDenNovoSalvagePathwayUricAcidEndpointDiagram': {
            name: 'Purine and Pyrimidine De Novo and Salvage Pathway to Uric Acid Endpoint',
            category: 'Enzyme Kinetics and Metabolic Regulation',
            description: 'Diagram of purine and pyrimidine de novo and salvage pathways with uric acid as the endpoint of purine catabolism',
            dataRequired: [],
            usage: 'Best for nucleotide metabolism and gout biochemistry',
            examples: ['Purine synthesis', 'Salvage pathway', 'Uric acid'],
            defaultOptions: {
                title: 'Purine and Pyrimidine De Novo and Salvage Pathways',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'fedFastedStateInsulinGlucagonOrganMetabolicFluxSwitchDiagram': {
            name: 'Fed and Fasted State: Insulin-Glucagon Organ Metabolic Flux Switch',
            category: 'Enzyme Kinetics and Metabolic Regulation',
            description: 'Diagram comparing fed and fasted metabolic states showing insulin-glucagon axis control of organ-level metabolic flux',
            dataRequired: [],
            usage: 'Best for hormonal metabolic regulation and fuel homeostasis',
            examples: ['Insulin glucagon', 'Fed fasted state', 'Metabolic flux'],
            defaultOptions: {
                title: 'Fed and Fasted State Metabolic Flux Switch',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'inbornErrorsEnzymeDeficiencyPathwayBlockageAccumulationDiagram': {
            name: 'Inborn Errors: Enzyme Deficiency, Pathway Blockage and Accumulation',
            category: 'Enzyme Kinetics and Metabolic Regulation',
            description: 'Diagram illustrating how enzyme deficiency causes pathway blockage and substrate accumulation in inborn errors of metabolism',
            dataRequired: [],
            usage: 'Best for inborn errors of metabolism and clinical biochemistry',
            examples: ['Inborn errors of metabolism', 'Enzyme deficiency', 'Substrate accumulation'],
            defaultOptions: {
                title: 'Inborn Errors: Enzyme Deficiency and Pathway Blockage',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'metabolicEngineeringFluxOptimisationBiotechProductionStrainDiagram': {
            name: 'Metabolic Engineering Flux Optimisation and Biotech Production Strain',
            category: 'Enzyme Kinetics and Metabolic Regulation',
            description: 'Diagram of metabolic engineering strategies for flux optimisation in biotechnology production strains',
            dataRequired: [],
            usage: 'Best for industrial biotechnology and metabolic engineering',
            examples: ['Metabolic engineering', 'Flux optimisation', 'Production strain'],
            defaultOptions: {
                title: 'Metabolic Engineering Flux Optimisation',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'atpMolecularStructureAdpAmpComparisonDiagram': {
            name: 'ATP Molecular Structure: ADP and AMP Comparison',
            category: 'Bioenergetics',
            description: 'Comparative molecular structure diagram of ATP, ADP and AMP showing phosphate group differences',
            dataRequired: [],
            usage: 'Best for ATP adenylate system and energy currency',
            examples: ['ATP ADP AMP', 'Phosphate groups', 'Adenylate system'],
            defaultOptions: {
                title: 'ATP, ADP and AMP Molecular Structure Comparison',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'atpHydrolysisPhosphorylTransferCoupledReactionDiagram': {
            name: 'ATP Hydrolysis and Phosphoryl Transfer Coupled Reaction',
            category: 'Bioenergetics',
            description: 'Diagram of ATP hydrolysis coupled to endergonic reactions via phosphoryl transfer',
            dataRequired: [],
            usage: 'Best for ATP coupling and energy transduction',
            examples: ['ATP hydrolysis', 'Coupled reactions', 'Phosphoryl transfer'],
            defaultOptions: {
                title: 'ATP Hydrolysis and Coupled Reactions',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'substrateVsOxidativeVsPhotoPhosphorylationComparisonDiagram': {
            name: 'Substrate-Level vs Oxidative vs Photo-Phosphorylation Comparison',
            category: 'Bioenergetics',
            description: 'Comparison diagram of the three phosphorylation types: substrate-level, oxidative and photo-phosphorylation',
            dataRequired: [],
            usage: 'Best for ATP synthesis mechanism comparison',
            examples: ['Substrate-level phosphorylation', 'Oxidative phosphorylation', 'Photophosphorylation'],
            defaultOptions: {
                title: 'Substrate-Level, Oxidative and Photo-Phosphorylation Comparison',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'myosinAtpaseCrossbridgeCycleMuscleCellDiagram': {
            name: 'Myosin ATPase Crossbridge Cycle in Muscle Cell',
            category: 'Bioenergetics',
            description: 'Diagram of myosin ATPase crossbridge cycle in the context of a muscle cell sarcomere',
            dataRequired: [],
            usage: 'Best for muscle physiology and crossbridge mechanism',
            examples: ['Crossbridge cycle', 'Sarcomere', 'Myosin ATPase'],
            defaultOptions: {
                title: 'Myosin ATPase Crossbridge Cycle in Muscle Cell',
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'aerobicRespirationAtpYieldStageByStageAccountingDiagram': {
            name: 'Aerobic Respiration ATP Yield Stage-by-Stage Accounting',
            category: 'Cellular Respiration',
            description: 'Stage-by-stage ATP yield accounting diagram for aerobic respiration from glucose to maximum ATP',
            dataRequired: [],
            usage: 'Best for complete aerobic respiration ATP accounting',
            examples: ['ATP accounting', 'Aerobic respiration yield', 'Stage by stage ATP'],
            defaultOptions: {
                title: 'Aerobic Respiration ATP Yield Stage-by-Stage Accounting',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },


        // ===== 1. CELL BIOLOGY =====
        'animalCell': {
            name: 'Animal Cell',
            category: 'Cell Biology',
            description: 'Complete animal cell with all organelles',
            dataRequired: [],
            usage: 'Best for cell biology education',
            examples: ['Cell biology', 'Organelles', 'Cellular anatomy'],
            defaultOptions: {
                title: 'Animal Cell Structure',
                type: 'generic',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'plantCell': {
            name: 'Plant Cell',
            category: 'Cell Biology',
            description: 'Plant cell with cell wall, chloroplasts, and large central vacuole',
            dataRequired: [],
            usage: 'Best for plant cell biology education',
            examples: ['Botany', 'Plant biology', 'Cell comparison'],
            defaultOptions: {
                title: 'Plant Cell Structure',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'prokaryoticVsEukaryotic': {
            name: 'Prokaryotic vs Eukaryotic Cell',
            category: 'Cell Biology',
            description: 'Side-by-side comparison of prokaryotic and eukaryotic cells',
            dataRequired: [],
            usage: 'Best for comparing cell types',
            examples: ['Cell types', 'Evolution', 'Microbiology'],
            defaultOptions: {
                title: 'Prokaryotic vs Eukaryotic Cells',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cellMembrane': {
            name: 'Cell Membrane (Phospholipid Bilayer)',
            category: 'Cell Biology',
            description: 'Fluid mosaic model showing phospholipids, proteins, and cholesterol',
            dataRequired: [],
            usage: 'Best for membrane structure education',
            examples: ['Cell membrane', 'Transport', 'Cellular biology'],
            defaultOptions: {
                title: 'Cell Membrane Structure',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'osmosisDiffusion': {
            name: 'Osmosis & Diffusion',
            category: 'Cell Biology',
            description: 'Passive transport mechanisms across membranes',
            dataRequired: [],
            usage: 'Best for transport mechanisms',
            examples: ['Passive transport', 'Osmosis', 'Diffusion'],
            defaultOptions: {
                title: 'Osmosis & Diffusion',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'activePassiveTransport': {
            name: 'Active vs Passive Transport',
            category: 'Cell Biology',
            description: 'Comparison of transport mechanisms requiring and not requiring energy',
            dataRequired: [],
            usage: 'Best for cellular transport education',
            examples: ['Cell transport', 'Membrane function', 'ATP usage'],
            defaultOptions: {
                title: 'Active vs Passive Transport',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'mitosis': {
            name: 'Mitosis',
            category: 'Cell Biology',
            description: 'All stages of mitotic cell division',
            dataRequired: [],
            usage: 'Best for cell division education',
            examples: ['Cell division', 'Growth', 'Reproduction'],
            defaultOptions: {
                title: 'Mitosis - Cell Division',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'meiosis': {
            name: 'Meiosis',
            category: 'Cell Biology',
            description: 'Meiotic division producing four haploid gametes',
            dataRequired: [],
            usage: 'Best for sexual reproduction and genetics',
            examples: ['Gamete formation', 'Sexual reproduction', 'Genetic variation'],
            defaultOptions: {
                title: 'Meiosis',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'organelles': {
            name: 'Cell Organelles',
            category: 'Cell Biology',
            description: 'Individual organelles with detailed structures',
            dataRequired: ['organelleType'],
            usage: 'Best for detailed organelle study',
            examples: ['Organelle function', 'Cell components', 'Cellular biology'],
            organelleTypes: ['nucleus', 'mitochondria', 'ribosome', 'endoplasmicReticulum', 'golgiApparatus', 'lysosome', 'peroxisome'],
            defaultOptions: {
                title: 'Cell Organelles',
                organelleType: 'mitochondria',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cellCycle': {
            name: 'Cell Cycle',
            category: 'Cell Biology',
            description: 'Complete cell cycle with G1, S, G2, and M phases',
            dataRequired: [],
            usage: 'Best for cell division regulation',
            examples: ['Cell growth', 'Cell division', 'Cancer biology'],
            defaultOptions: {
                title: 'Cell Cycle',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'enzymeAction': {
            name: 'Enzyme Action',
            category: 'Cell Biology',
            description: 'Lock-and-key and induced fit models of enzyme action',
            dataRequired: [],
            usage: 'Best for enzyme mechanism education',
            examples: ['Enzyme kinetics', 'Biochemistry', 'Metabolism'],
            defaultOptions: {
                title: 'Enzyme Action Mechanism',
                model: 'both', // 'lockAndKey', 'inducedFit', 'both'
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 2. GENETICS & MOLECULAR BIOLOGY =====
        'dnaStructure': {
            name: 'DNA Double Helix',
            category: 'Genetics & Molecular Biology',
            description: 'DNA structure with base pairs',
            dataRequired: [],
            usage: 'Best for genetics education',
            examples: ['Genetics', 'Molecular biology', 'DNA structure'],
            defaultOptions: {
                title: 'DNA Double Helix',
                showLabels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'rnaStructure': {
            name: 'RNA Structure',
            category: 'Genetics & Molecular Biology',
            description: 'RNA single strand with different types (mRNA, tRNA, rRNA)',
            dataRequired: [],
            usage: 'Best for RNA education',
            examples: ['Molecular biology', 'Gene expression', 'Protein synthesis'],
            defaultOptions: {
                title: 'RNA Structure',
                rnaType: 'mRNA', // 'mRNA', 'tRNA', 'rRNA'
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'dnaReplication': {
            name: 'DNA Replication',
            category: 'Genetics & Molecular Biology',
            description: 'Semi-conservative DNA replication process',
            dataRequired: [],
            usage: 'Best for molecular biology and genetics',
            examples: ['DNA synthesis', 'Cell division prep', 'Molecular biology'],
            defaultOptions: {
                title: 'DNA Replication',
                showLabels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'transcription': {
            name: 'Transcription',
            category: 'Genetics & Molecular Biology',
            description: 'DNA to RNA transcription process',
            dataRequired: [],
            usage: 'Best for gene expression education',
            examples: ['Gene expression', 'RNA synthesis', 'Molecular biology'],
            defaultOptions: {
                title: 'Transcription (DNA → RNA)',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'translation': {
            name: 'Translation',
            category: 'Genetics & Molecular Biology',
            description: 'RNA to protein translation at ribosome',
            dataRequired: [],
            usage: 'Best for protein synthesis education',
            examples: ['Protein synthesis', 'Ribosomes', 'Gene expression'],
            defaultOptions: {
                title: 'Translation (RNA → Protein)',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'codonChart': {
            name: 'Genetic Code (Codon Chart)',
            category: 'Genetics & Molecular Biology',
            description: 'Complete genetic code showing all 64 codons',
            dataRequired: [],
            usage: 'Best for understanding genetic code',
            examples: ['Genetics', 'Protein synthesis', 'Molecular biology'],
            defaultOptions: {
                title: 'Genetic Code - Codon Chart',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'geneExpression': {
            name: 'Gene Expression Pathway',
            category: 'Genetics & Molecular Biology',
            description: 'Complete pathway from DNA to protein',
            dataRequired: [],
            usage: 'Best for central dogma education',
            examples: ['Gene expression', 'Central dogma', 'Molecular biology'],
            defaultOptions: {
                title: 'Gene Expression Pathway',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'punnettSquare': {
            name: 'Punnett Square',
            category: 'Genetics & Molecular Biology',
            description: 'Genetic cross prediction tool',
            dataRequired: ['crossType'],
            usage: 'Best for genetics problems',
            examples: ['Mendelian genetics', 'Inheritance', 'Probability'],
            crossTypes: ['monohybrid', 'dihybrid'],
            defaultOptions: {
                title: 'Punnett Square',
                crossType: 'monohybrid',
                showLabels: true,
                width: 600,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chromosomes': {
            name: 'Chromosome Structure',
            category: 'Genetics & Molecular Biology',
            description: 'Chromosome anatomy and homologous pairs',
            dataRequired: [],
            usage: 'Best for genetics and cell division',
            examples: ['Chromosomes', 'Karyotypes', 'Genetics'],
            defaultOptions: {
                title: 'Chromosome Structure',
                showHomologousPairs: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'crossingOver': {
            name: 'Crossing Over',
            category: 'Genetics & Molecular Biology',
            description: 'Genetic recombination during meiosis',
            dataRequired: [],
            usage: 'Best for genetic variation education',
            examples: ['Meiosis', 'Genetic variation', 'Recombination'],
            defaultOptions: {
                title: 'Crossing Over (Recombination)',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'mutations': {
            name: 'DNA Mutations',
            category: 'Genetics & Molecular Biology',
            description: 'Types of mutations: point, frameshift, etc.',
            dataRequired: [],
            usage: 'Best for mutation education',
            examples: ['Mutations', 'Genetic disorders', 'Evolution'],
            defaultOptions: {
                title: 'DNA Mutations',
                mutationTypes: ['point', 'frameshift', 'insertion', 'deletion'],
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'recombinantDNA': {
            name: 'Recombinant DNA Technology',
            category: 'Genetics & Molecular Biology',
            description: 'Gene splicing and recombinant DNA creation',
            dataRequired: [],
            usage: 'Best for biotechnology education',
            examples: ['Genetic engineering', 'Biotechnology', 'GMOs'],
            defaultOptions: {
                title: 'Recombinant DNA Technology',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pcrCycle': {
            name: 'PCR (Polymerase Chain Reaction)',
            category: 'Genetics & Molecular Biology',
            description: 'DNA amplification cycle',
            dataRequired: [],
            usage: 'Best for molecular biology techniques',
            examples: ['PCR', 'DNA amplification', 'Molecular techniques'],
            defaultOptions: {
                title: 'PCR Cycle',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 3. EVOLUTION & NATURAL SELECTION =====
        'darwinsFinches': {
            name: "Darwin's Finches",
            category: 'Evolution & Natural Selection',
            description: 'Beak adaptations in Galapagos finches',
            dataRequired: [],
            usage: 'Best for natural selection examples',
            examples: ['Natural selection', 'Adaptation', 'Evolution'],
            defaultOptions: {
                title: "Darwin's Finches - Beak Adaptations",
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'naturalSelection': {
            name: 'Natural Selection Process',
            category: 'Evolution & Natural Selection',
            description: 'Step-by-step natural selection mechanism',
            dataRequired: [],
            usage: 'Best for evolution education',
            examples: ['Evolution', 'Selection pressure', 'Adaptation'],
            defaultOptions: {
                title: 'Natural Selection Process',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'phylogeneticTree': {
            name: 'Phylogenetic Tree',
            category: 'Evolution & Natural Selection',
            description: 'Evolutionary relationships between species',
            dataRequired: [],
            usage: 'Best for evolutionary relationships',
            examples: ['Evolution', 'Taxonomy', 'Common ancestry'],
            defaultOptions: {
                title: 'Phylogenetic Tree',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'adaptiveRadiation': {
            name: 'Adaptive Radiation',
            category: 'Evolution & Natural Selection',
            description: 'Divergent evolution from common ancestor',
            dataRequired: [],
            usage: 'Best for speciation education',
            examples: ['Speciation', 'Divergent evolution', 'Biodiversity'],
            defaultOptions: {
                title: 'Adaptive Radiation',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'fossilLayers': {
            name: 'Fossil Layers (Stratigraphy)',
            category: 'Evolution & Natural Selection',
            description: 'Geological time and fossil record',
            dataRequired: [],
            usage: 'Best for fossil evidence of evolution',
            examples: ['Fossils', 'Geological time', 'Evolution evidence'],
            defaultOptions: {
                title: 'Fossil Layers',
                showLabels: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'hardyWeinberg': {
            name: 'Hardy-Weinberg Equilibrium',
            category: 'Evolution & Natural Selection',
            description: 'Population genetics equilibrium graph',
            dataRequired: [],
            usage: 'Best for population genetics',
            examples: ['Population genetics', 'Allele frequency', 'Evolution'],
            defaultOptions: {
                title: 'Hardy-Weinberg Equilibrium',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'speciation': {
            name: 'Speciation',
            category: 'Evolution & Natural Selection',
            description: 'Formation of new species (allopatric, sympatric)',
            dataRequired: [],
            usage: 'Best for speciation mechanisms',
            examples: ['Speciation', 'Reproductive isolation', 'Evolution'],
            defaultOptions: {
                title: 'Speciation Mechanisms',
                speciationType: 'allopatric', // 'allopatric', 'sympatric'
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'comparativeAnatomy': {
            name: 'Comparative Anatomy',
            category: 'Evolution & Natural Selection',
            description: 'Homologous and analogous structures',
            dataRequired: [],
            usage: 'Best for anatomical evidence of evolution',
            examples: ['Homologous structures', 'Analogous structures', 'Evolution'],
            defaultOptions: {
                title: 'Comparative Anatomy',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },
        // ===== 5. HUMAN ANATOMY & PHYSIOLOGY (existing ones) =====
        // Keep all existing cardiovascular, respiratory, etc.

        'skeletalSystem': {
            name: 'Skeletal System',
            category: 'Human Anatomy & Physiology',
            description: 'Complete human skeleton',
            dataRequired: [],
            usage: 'Best for skeletal anatomy overview',
            examples: ['Skeleton', 'Bones', 'Anatomy'],
            defaultOptions: {
                title: 'Human Skeletal System',
                view: 'anterior', // 'anterior', 'posterior'
                showLabels: true,
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'muscularSystem': {
            name: 'Muscular System',
            category: 'Human Anatomy & Physiology',
            description: 'Major muscle groups',
            dataRequired: [],
            usage: 'Best for muscle anatomy',
            examples: ['Muscles', 'Anatomy', 'Movement'],
            defaultOptions: {
                title: 'Human Muscular System',
                view: 'anterior',
                showLabels: true,
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'digestiveSystem': {
            name: 'Digestive System',
            category: 'Human Anatomy & Physiology',
            description: 'Complete digestive tract',
            dataRequired: [],
            usage: 'Best for digestion pathway',
            examples: ['Digestion', 'GI tract', 'Nutrition'],
            defaultOptions: {
                title: 'Digestive System',
                showLabels: true,
                showPath: true,
                width: 600,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'respiratorySystem': {
            name: 'Respiratory System',
            category: 'Human Anatomy & Physiology',
            description: 'Complete respiratory tract with gas exchange',
            dataRequired: [],
            usage: 'Best for breathing anatomy',
            examples: ['Lungs', 'Breathing', 'Gas exchange'],
            defaultOptions: {
                title: 'Respiratory System',
                showLabels: true,
                showGasExchange: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'circulatorySystem': {
            name: 'Circulatory System',
            category: 'Human Anatomy & Physiology',
            description: 'Heart and blood vessels',
            dataRequired: [],
            usage: 'Best for circulation education',
            examples: ['Heart', 'Blood vessels', 'Circulation'],
            defaultOptions: {
                title: 'Circulatory System',
                showLabels: true,
                showOxygenation: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'excretorySystem': {
            name: 'Excretory/Urinary System',
            category: 'Human Anatomy & Physiology',
            description: 'Kidneys and urinary tract',
            dataRequired: [],
            usage: 'Best for waste removal education',
            examples: ['Kidneys', 'Urinary system', 'Excretion'],
            defaultOptions: {
                title: 'Urinary System',
                showLabels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nervousSystem': {
            name: 'Nervous System',
            category: 'Human Anatomy & Physiology',
            description: 'Central and peripheral nervous system',
            dataRequired: [],
            usage: 'Best for nervous system overview',
            examples: ['Brain', 'Spinal cord', 'Nerves'],
            defaultOptions: {
                title: 'Nervous System',
                showLabels: true,
                showSignal: false,
                width: 600,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'neuronStructure': {
            name: 'Neuron Structure',
            category: 'Human Anatomy & Physiology',
            description: 'Detailed neuron anatomy',
            dataRequired: [],
            usage: 'Best for nerve cell structure',
            examples: ['Neurons', 'Synapses', 'Neural transmission'],
            defaultOptions: {
                title: 'Neuron Structure',
                showLabels: true,
                showSignal: false,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'synapse': {
            name: 'Synapse',
            category: 'Human Anatomy & Physiology',
            description: 'Synaptic transmission between neurons',
            dataRequired: [],
            usage: 'Best for neural communication',
            examples: ['Synapse', 'Neurotransmitters', 'Neural signaling'],
            defaultOptions: {
                title: 'Synaptic Transmission',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'endocrineSystem': {
            name: 'Endocrine System',
            category: 'Human Anatomy & Physiology',
            description: 'Hormone-producing glands',
            dataRequired: [],
            usage: 'Best for hormone education',
            examples: ['Hormones', 'Glands', 'Regulation'],
            defaultOptions: {
                title: 'Endocrine System',
                showLabels: true,
                width: 600,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'reproductiveSystem': {
            name: 'Reproductive System',
            category: 'Human Anatomy & Physiology',
            description: 'Male and female reproductive anatomy',
            dataRequired: ['sex'],
            usage: 'Best for reproductive anatomy',
            examples: ['Reproduction', 'Anatomy', 'Development'],
            defaultOptions: {
                title: 'Reproductive System',
                sex: 'both', // 'male', 'female', 'both'
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'immuneSystem': {
            name: 'Immune System',
            category: 'Human Anatomy & Physiology',
            description: 'Immune organs and cells',
            dataRequired: [],
            usage: 'Best for immunity education',
            examples: ['Immunity', 'White blood cells', 'Defense'],
            defaultOptions: {
                title: 'Immune System',
                showLabels: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'skinStructure': {
            name: 'Skin Layers',
            category: 'Human Anatomy & Physiology',
            description: 'Cross-section of skin layers',
            dataRequired: [],
            usage: 'Best for dermatology education',
            examples: ['Skin', 'Integumentary system', 'Dermis'],
            defaultOptions: {
                title: 'Skin Structure',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 6. PLANTS (BOTANY) =====
        'leafCrossSection': {
            name: 'Leaf Cross-Section',
            category: 'Plants (Botany)',
            description: 'Detailed leaf anatomy',
            dataRequired: [],
            usage: 'Best for photosynthesis and plant anatomy',
            examples: ['Leaf structure', 'Gas exchange', 'Photosynthesis'],
            defaultOptions: {
                title: 'Leaf Cross-Section',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'photosynthesis': {
            name: 'Photosynthesis',
            category: 'Plants (Botany)',
            description: 'Photosynthesis process in chloroplast',
            dataRequired: [],
            usage: 'Best for teaching photosynthesis mechanism',
            examples: ['Plant metabolism', 'Energy production', 'Biochemistry'],
            defaultOptions: {
                title: 'Photosynthesis',
                showLabels: true,
                showEquation: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'stomata': {
            name: 'Stomata Structure',
            category: 'Plants (Botany)',
            description: 'Guard cells and stomatal pore',
            dataRequired: [],
            usage: 'Best for gas exchange in plants',
            examples: ['Stomata', 'Transpiration', 'Gas exchange'],
            defaultOptions: {
                title: 'Stomata Structure',
                state: 'both', // 'open', 'closed', 'both'
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'xylemPhloem': {
            name: 'Xylem & Phloem',
            category: 'Plants (Botany)',
            description: 'Vascular tissue structure and function',
            dataRequired: [],
            usage: 'Best for plant transport systems',
            examples: ['Vascular tissue', 'Transport', 'Plant anatomy'],
            defaultOptions: {
                title: 'Xylem & Phloem - Vascular Tissue',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'flowerStructure': {
            name: 'Flower Structure',
            category: 'Plants (Botany)',
            description: 'Reproductive parts of flowering plants',
            dataRequired: [],
            usage: 'Best for plant reproduction',
            examples: ['Flowers', 'Reproduction', 'Pollination'],
            defaultOptions: {
                title: 'Flower Anatomy',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'seedGermination': {
            name: 'Seed Germination',
            category: 'Plants (Botany)',
            description: 'Stages of seed sprouting and growth',
            dataRequired: [],
            usage: 'Best for plant development',
            examples: ['Germination', 'Plant growth', 'Development'],
            defaultOptions: {
                title: 'Seed Germination Stages',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'tropisms': {
            name: 'Plant Tropisms',
            category: 'Plants (Botany)',
            description: 'Phototropism, geotropism, thigmotropism',
            dataRequired: [],
            usage: 'Best for plant responses to stimuli',
            examples: ['Tropisms', 'Plant behavior', 'Growth responses'],
            defaultOptions: {
                title: 'Plant Tropisms',
                tropismTypes: ['phototropism', 'geotropism', 'thigmotropism'],
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 7. MICROBIOLOGY =====
        'bacteriaStructure': {
            name: 'Bacterial Cell',
            category: 'Microbiology',
            description: 'Prokaryotic cell structure',
            dataRequired: [],
            usage: 'Best for microbiology education',
            examples: ['Bacteria', 'Prokaryotes', 'Microbiology'],
            defaultOptions: {
                title: 'Bacterial Cell Structure',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'virusStructure': {
            name: 'Virus Structure',
            category: 'Microbiology',
            description: 'Viral components and structure',
            dataRequired: [],
            usage: 'Best for virology education',
            examples: ['Viruses', 'Virology', 'Infectious disease'],
            defaultOptions: {
                title: 'Virus Structure',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'fungalCell': {
            name: 'Fungal Cell Structure',
            category: 'Microbiology',
            description: 'Fungal cell with chitin wall and hyphae',
            dataRequired: [],
            usage: 'Best for mycology education',
            examples: ['Fungi', 'Mycology', 'Cell structure'],
            defaultOptions: {
                title: 'Fungal Cell Structure',
                showLabels: true,
                showHyphae: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'protists': {
            name: 'Protist Examples',
            category: 'Microbiology',
            description: 'Various protist organisms (amoeba, paramecium, euglena)',
            dataRequired: [],
            usage: 'Best for protist diversity',
            examples: ['Protists', 'Microorganisms', 'Diversity'],
            defaultOptions: {
                title: 'Protist Diversity',
                protistTypes: ['amoeba', 'paramecium', 'euglena'],
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bacterialGrowthCurve': {
            name: 'Bacterial Growth Curve',
            category: 'Microbiology',
            description: 'Lag, log, stationary, death phases',
            dataRequired: [],
            usage: 'Best for microbial growth dynamics',
            examples: ['Bacterial growth', 'Microbiology', 'Population dynamics'],
            defaultOptions: {
                title: 'Bacterial Growth Curve',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'viralReplication': {
            name: 'Viral Replication Cycles',
            category: 'Microbiology',
            description: 'Lytic and lysogenic cycles',
            dataRequired: [],
            usage: 'Best for viral life cycles',
            examples: ['Viral replication', 'Lytic cycle', 'Lysogenic cycle'],
            defaultOptions: {
                title: 'Viral Replication Cycles',
                cycleType: 'both', // 'lytic', 'lysogenic', 'both'
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'microscopy': {
            name: 'Microscopy Types',
            category: 'Microbiology',
            description: 'Light microscope vs electron microscope',
            dataRequired: [],
            usage: 'Best for microscopy education',
            examples: ['Microscopy', 'Lab techniques', 'Visualization'],
            defaultOptions: {
                title: 'Microscopy Comparison',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },
        // ===== 9. REPRODUCTION & DEVELOPMENT =====
        'fertilization': {
            name: 'Fertilization',
            category: 'Reproduction & Development',
            description: 'Sperm-egg fusion process',
            dataRequired: [],
            usage: 'Best for reproduction education',
            examples: ['Fertilization', 'Conception', 'Reproduction'],
            defaultOptions: {
                title: 'Fertilization Process',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'embryoDevelopment': {
            name: 'Embryo Development',
            category: 'Reproduction & Development',
            description: 'Stages from zygote to fetus',
            dataRequired: [],
            usage: 'Best for developmental biology',
            examples: ['Embryology', 'Development', 'Pregnancy'],
            defaultOptions: {
                title: 'Embryo Development Stages',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'menstrualCycle': {
            name: 'Menstrual Cycle',
            category: 'Reproduction & Development',
            description: 'Hormonal cycle and uterine changes',
            dataRequired: [],
            usage: 'Best for reproductive physiology',
            examples: ['Menstrual cycle', 'Hormones', 'Reproduction'],
            defaultOptions: {
                title: 'Menstrual Cycle',
                showLabels: true,
                showHormones: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gametogenesis': {
            name: 'Gametogenesis',
            category: 'Reproduction & Development',
            description: 'Spermatogenesis and oogenesis',
            dataRequired: [],
            usage: 'Best for gamete formation',
            examples: ['Gametogenesis', 'Meiosis', 'Reproduction'],
            defaultOptions: {
                title: 'Gametogenesis',
                showBoth: true, // spermatogenesis and oogenesis
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'placenta': {
            name: 'Placenta & Fetal Development',
            category: 'Reproduction & Development',
            description: 'Placental structure and maternal-fetal exchange',
            dataRequired: [],
            usage: 'Best for pregnancy education',
            examples: ['Placenta', 'Pregnancy', 'Fetal development'],
            defaultOptions: {
                title: 'Placenta Structure',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 10. HEALTH, DISEASE & IMMUNOLOGY =====
        'immuneResponse': {
            name: 'Immune Response',
            category: 'Health, Disease & Immunology',
            description: 'Innate and adaptive immune response flowchart',
            dataRequired: [],
            usage: 'Best for immunology education',
            examples: ['Immunity', 'Immune response', 'Defense'],
            defaultOptions: {
                title: 'Immune Response',
                responseType: 'both', // 'innate', 'adaptive', 'both'
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'antibodyStructure': {
            name: 'Antibody Structure',
            category: 'Health, Disease & Immunology',
            description: 'Y-shaped antibody with binding sites',
            dataRequired: [],
            usage: 'Best for antibody education',
            examples: ['Antibodies', 'Immunity', 'Proteins'],
            defaultOptions: {
                title: 'Antibody (Immunoglobulin) Structure',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pathogenTypes': {
            name: 'Pathogen Types',
            category: 'Health, Disease & Immunology',
            description: 'Bacteria, viruses, fungi, parasites comparison',
            dataRequired: [],
            usage: 'Best for infectious disease education',
            examples: ['Pathogens', 'Infectious disease', 'Microbiology'],
            defaultOptions: {
                title: 'Types of Pathogens',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vaccination': {
            name: 'Vaccination Mechanism',
            category: 'Health, Disease & Immunology',
            description: 'How vaccines create immunity',
            dataRequired: [],
            usage: 'Best for vaccine education',
            examples: ['Vaccination', 'Immunization', 'Prevention'],
            defaultOptions: {
                title: 'How Vaccines Work',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'inflammation': {
            name: 'Inflammation Pathway',
            category: 'Health, Disease & Immunology',
            description: 'Steps in inflammatory response',
            dataRequired: [],
            usage: 'Best for immune response education',
            examples: ['Inflammation', 'Innate immunity', 'Healing'],
            defaultOptions: {
                title: 'Inflammatory Response',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'diseaseTransmission': {
            name: 'Disease Transmission Cycles',
            category: 'Health, Disease & Immunology',
            description: 'Vector-borne disease transmission (e.g., mosquito-human)',
            dataRequired: [],
            usage: 'Best for epidemiology education',
            examples: ['Disease transmission', 'Vectors', 'Epidemiology'],
            defaultOptions: {
                title: 'Disease Transmission Cycle',
                diseaseType: 'malaria', // 'malaria', 'dengue', 'lyme'
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'bloodCells': {
            name: 'Blood Cells',
            category: 'Health, Disease & Immunology',
            description: 'RBCs, WBCs, and platelets',
            dataRequired: [],
            usage: 'Best for hematology education',
            examples: ['Blood cells', 'Hematology', 'Immune cells'],
            defaultOptions: {
                title: 'Blood Cell Types',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 11. CLASSIFICATION & TAXONOMY =====
        'fiveKingdoms': {
            name: 'Five Kingdom System',
            category: 'Classification & Taxonomy',
            description: 'Monera, Protista, Fungi, Plantae, Animalia',
            dataRequired: [],
            usage: 'Best for biological classification',
            examples: ['Classification', 'Taxonomy', 'Kingdoms'],
            defaultOptions: {
                title: 'Five Kingdom Classification',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'threeDomains': {
            name: 'Three Domain System',
            category: 'Classification & Taxonomy',
            description: 'Bacteria, Archaea, Eukarya',
            dataRequired: [],
            usage: 'Best for modern classification',
            examples: ['Domains', 'Taxonomy', 'Evolution'],
            defaultOptions: {
                title: 'Three Domain System',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'taxonomyHierarchy': {
            name: 'Taxonomy Hierarchy',
            category: 'Classification & Taxonomy',
            description: 'Kingdom to species classification levels',
            dataRequired: [],
            usage: 'Best for taxonomic ranks',
            examples: ['Taxonomy', 'Classification', 'Hierarchy'],
            defaultOptions: {
                title: 'Taxonomic Hierarchy',
                showExample: true,
                showLabels: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'dichotomousKey': {
            name: 'Dichotomous Key',
            category: 'Classification & Taxonomy',
            description: 'Branching identification tool',
            dataRequired: [],
            usage: 'Best for species identification',
            examples: ['Identification', 'Classification', 'Keys'],
            defaultOptions: {
                title: 'Dichotomous Key Example',
                keyType: 'leaves', // 'leaves', 'insects', 'general'
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'cladogram': {
            name: 'Cladogram',
            category: 'Classification & Taxonomy',
            description: 'Evolutionary relationships diagram',
            dataRequired: [],
            usage: 'Best for phylogenetic relationships',
            examples: ['Cladistics', 'Evolution', 'Phylogeny'],
            defaultOptions: {
                title: 'Cladogram',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 12. HOMEOSTASIS & REGULATION =====
        'negativeFeedback': {
            name: 'Negative Feedback Loop',
            category: 'Homeostasis & Regulation',
            description: 'Self-regulating homeostatic mechanism',
            dataRequired: [],
            usage: 'Best for homeostasis education',
            examples: ['Homeostasis', 'Regulation', 'Feedback'],
            defaultOptions: {
                title: 'Negative Feedback Loop',
                exampleType: 'general', // 'general', 'temperature', 'glucose'
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'thermoregulation': {
            name: 'Thermoregulation',
            category: 'Homeostasis & Regulation',
            description: 'Body temperature regulation mechanisms',
            dataRequired: [],
            usage: 'Best for temperature regulation',
            examples: ['Temperature control', 'Homeostasis', 'Physiology'],
            defaultOptions: {
                title: 'Thermoregulation',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bloodGlucoseRegulation': {
            name: 'Blood Glucose Regulation',
            category: 'Homeostasis & Regulation',
            description: 'Insulin and glucagon balance',
            dataRequired: [],
            usage: 'Best for diabetes education',
            examples: ['Glucose regulation', 'Diabetes', 'Hormones'],
            defaultOptions: {
                title: 'Blood Glucose Regulation',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'waterBalance': {
            name: 'Water Balance (Osmoregulation)',
            category: 'Homeostasis & Regulation',
            description: 'Kidney regulation of water and salt',
            dataRequired: [],
            usage: 'Best for osmoregulation education',
            examples: ['Osmoregulation', 'Kidneys', 'Water balance'],
            defaultOptions: {
                title: 'Water Balance Regulation',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nephron': {
            name: 'Kidney Nephron',
            category: 'Homeostasis & Regulation',
            description: 'Detailed nephron structure and function',
            dataRequired: [],
            usage: 'Best for kidney function',
            examples: ['Nephron', 'Filtration', 'Kidney function'],
            defaultOptions: {
                title: 'Nephron Structure',
                showLabels: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },
        // ===== 13. ENERGY IN LIVING SYSTEMS =====
        'atpStructure': {
            name: 'ATP Structure',
            category: 'Energy in Living Systems',
            description: 'Adenosine triphosphate molecular structure',
            dataRequired: [],
            usage: 'Best for cellular energy education',
            examples: ['ATP', 'Energy', 'Biochemistry'],
            defaultOptions: {
                title: 'ATP (Adenosine Triphosphate) Structure',
                showLabels: true,
                showHydrolysis: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cellularRespiration': {
            name: 'Cellular Respiration',
            category: 'Energy in Living Systems',
            description: 'Complete aerobic respiration pathway',
            dataRequired: [],
            usage: 'Best for energy metabolism',
            examples: ['Cellular respiration', 'Metabolism', 'Energy production'],
            defaultOptions: {
                title: 'Cellular Respiration',
                showLabels: true,
                showStages: true, // glycolysis, Krebs, ETC
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'mitochondrion': {
            name: 'Mitochondrion Structure',
            category: 'Energy in Living Systems',
            description: 'Detailed mitochondrial anatomy',
            dataRequired: [],
            usage: 'Best for cellular energy organelles',
            examples: ['Mitochondria', 'Cell respiration', 'Organelles'],
            defaultOptions: {
                title: 'Mitochondrion Structure',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'electronTransportChain': {
            name: 'Electron Transport Chain',
            category: 'Energy in Living Systems',
            description: 'ETC and chemiosmosis in mitochondria',
            dataRequired: [],
            usage: 'Best for ATP synthesis education',
            examples: ['ETC', 'Chemiosmosis', 'ATP synthesis'],
            defaultOptions: {
                title: 'Electron Transport Chain',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chloroplastStructure': {
            name: 'Chloroplast Structure',
            category: 'Energy in Living Systems',
            description: 'Chloroplast anatomy with thylakoids',
            dataRequired: [],
            usage: 'Best for photosynthesis organelle',
            examples: ['Chloroplast', 'Photosynthesis', 'Plant cells'],
            defaultOptions: {
                title: 'Chloroplast Structure',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'photosynthesisDetailed': {
            name: 'Photosynthesis (Light & Dark Reactions)',
            category: 'Energy in Living Systems',
            description: 'Complete photosynthesis with both reaction stages',
            dataRequired: [],
            usage: 'Best for detailed photosynthesis',
            examples: ['Light reactions', 'Calvin cycle', 'Photosynthesis'],
            defaultOptions: {
                title: 'Photosynthesis - Complete Process',
                showLabels: true,
                showBothStages: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },
// ===== EXISTING CARDIOVASCULAR, RESPIRATORY, ETC. =====
        // (Keep all the existing heart, circulatory, respiratory, skeletal, etc. diagrams)
        
        'heartAnatomy': {
            name: 'Heart Anatomy',
            category: 'Cardiovascular System',
            description: 'Complete heart structure with chambers and blood flow',
            dataRequired: ['chamber'],
            usage: 'Best for showing heart structure and chamber details',
            examples: ['Medical education', 'Patient briefings', 'Anatomy studies'],
            chamberOptions: ['wholeheart', 'rightAtrium', 'rightVentricle', 'leftAtrium', 'leftVentricle'],
            defaultOptions: {
                title: 'Heart Anatomy',
                chamber: 'wholeheart',
                showLabels: true,
                showBloodFlow: true,
                animate: false,
                width: 600,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'circulatorySystem': {
            name: 'Circulatory System',
            category: 'Cardiovascular System',
            description: 'Complete blood circulation pathway through body',
            dataRequired: [],
            usage: 'Best for showing systemic and pulmonary circulation',
            examples: ['Blood flow education', 'Circulatory teaching', 'Medical diagrams'],
            defaultOptions: {
                title: 'Circulatory System',
                showLabels: true,
                showOxygenation: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'bloodVesselComparison': {
            name: 'Blood Vessel Comparison',
            category: 'Cardiovascular System',
            description: 'Comparison of arteries, veins, and capillaries',
            dataRequired: [],
            usage: 'Best for comparing vessel structures',
            examples: ['Vessel anatomy', 'Blood transport', 'Vascular system'],
            defaultOptions: {
                title: 'Blood Vessel Comparison',
                showLabels: true,
                width: 700,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'heartValves': {
            name: 'Heart Valves',
            category: 'Cardiovascular System',
            description: 'All four heart valves showing structure and function',
            dataRequired: [],
            usage: 'Best for showing valve anatomy and operation',
            examples: ['Valve disorders', 'Cardiac anatomy', 'Heart function'],
            defaultOptions: {
                title: 'Heart Valves',
                showLabels: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'respiratorySystem': {
            name: 'Respiratory System',
            category: 'Respiratory System',
            description: 'Complete respiratory tract with gas exchange',
            dataRequired: [],
            usage: 'Best for showing breathing anatomy',
            examples: ['Lung function', 'Breathing education', 'Respiratory health'],
            defaultOptions: {
                title: 'Respiratory System',
                showLabels: true,
                showGasExchange: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'digestiveOrgans': {
            name: 'Digestive Organs',
            category: 'Digestive System',
            description: 'Individual digestive organs with functions',
            dataRequired: [],
            usage: 'Best for comparing digestive organ structures',
            examples: ['Organ functions', 'Digestive process', 'Anatomy education'],
            defaultOptions: {
                title: 'Digestive Organs',
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'brain': {
            name: 'Brain Structure',
            category: 'Nervous System',
            description: 'Brain anatomy with major regions',
            dataRequired: [],
            usage: 'Best for neuroanatomy',
            examples: ['Brain anatomy', 'Neuroscience', 'CNS'],
            defaultOptions: {
                title: 'Brain Structure',
                section: 'whole',
                showLabels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'liver': {
            name: 'Liver',
            category: 'Digestive System',
            description: 'Liver structure and lobes',
            dataRequired: [],
            usage: 'Best for hepatic anatomy',
            examples: ['Liver anatomy', 'Digestive system', 'Metabolism'],
            defaultOptions: {
                title: 'Liver Anatomy',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'kidney': {
            name: 'Kidney Structure',
            category: 'Urinary System',
            description: 'Kidney anatomy with internal structures',
            dataRequired: [],
            usage: 'Best for renal anatomy',
            examples: ['Kidney structure', 'Urinary system', 'Filtration'],
            defaultOptions: {
                title: 'Kidney Anatomy',
                side: 'left',
                showLabels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'urinarySystem': {
            name: 'Urinary System',
            category: 'Urinary System',
            description: 'Kidneys, bladder, and urinary tract',
            dataRequired: [],
            usage: 'Best for renal anatomy',
            examples: ['Kidney function', 'Urinary health', 'Renal anatomy'],
            defaultOptions: {
                title: 'Urinary System',
                showLabels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'kidneyDetail': {
            name: 'Kidney Internal Structure',
            category: 'Urinary System',
            description: 'Detailed kidney anatomy with nephron',
            dataRequired: [],
            usage: 'Best for renal physiology',
            examples: ['Kidney function', 'Filtration process', 'Nephron anatomy'],
            defaultOptions: {
                title: 'Kidney Internal Structure',
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'eyeAnatomy': {
            name: 'Eye Anatomy',
            category: 'Sensory Organs',
            description: 'Complete eye structure with all components',
            dataRequired: [],
            usage: 'Best for ophthalmology education',
            examples: ['Vision anatomy', 'Eye structure', 'Ophthalmology'],
            defaultOptions: {
                title: 'Human Eye Anatomy',
                showLabels: true,
                pupilDilation: 0.3,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'skull': {
            name: 'Human Skull',
            category: 'Skeletal System',
            description: 'Skull anatomy with cranium and facial bones',
            dataRequired: [],
            usage: 'Best for cranial anatomy education',
            examples: ['Skull anatomy', 'Cranial structure', 'Head bones'],
            defaultOptions: {
                title: 'Human Skull',
                bone: 'skull',
                showLabels: true,
                width: 500,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },
        'boneStructure': {
            name: 'Bone Structure',
            category: 'Skeletal System',
            description: 'Cross-section showing internal bone anatomy',
            dataRequired: [],
            usage: 'Best for showing bone composition',
            examples: ['Bone health', 'Osteoporosis education', 'Bone anatomy'],
            defaultOptions: {
                title: 'Bone Structure (Cross-Section)',
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },
        'cellStructure': {
            name: 'Animal Cell',
            category: 'Cellular & Microscopic',
            description: 'Complete cell with organelles',
            dataRequired: [],
            usage: 'Best for cell biology education',
            examples: ['Cell biology', 'Organelles', 'Cellular anatomy'],
            defaultOptions: {
                title: 'Animal Cell Structure',
                type: 'generic',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        }
    };

    // ===== HELPER METHODS =====
    
    static getDiagram(key) {
        return this.diagrams[key];
    }

    static getAllDiagrams() {
        return Object.keys(this.diagrams);
    }

    static getDiagramsByCategory(category) {
        return Object.entries(this.diagrams)
            .filter(([_, diagram]) => diagram.category === category)
            .reduce((acc, [key, diagram]) => {
                acc[key] = diagram;
                return acc;
            }, {});
    }

    static getAllCategories() {
        return [...new Set(Object.values(this.diagrams).map(d => d.category))];
    }

    static searchDiagrams(query) {
        const lowerQuery = query.toLowerCase();
        return Object.entries(this.diagrams)
            .filter(([key, diagram]) =>
                diagram.name.toLowerCase().includes(lowerQuery) ||
                diagram.description.toLowerCase().includes(lowerQuery) ||
                diagram.category.toLowerCase().includes(lowerQuery) ||
                key.toLowerCase().includes(lowerQuery) ||
                diagram.examples.some(ex => ex.toLowerCase().includes(lowerQuery))
            )
            .reduce((acc, [key, diagram]) => {
                acc[key] = diagram;
                return acc;
            }, {});
    }

    static getDiagramStats() {
        const stats = {};
        this.getAllCategories().forEach(category => {
            const diagrams = this.getDiagramsByCategory(category);
            stats[category] = {
                count: Object.keys(diagrams).length,
                diagrams: Object.keys(diagrams)
            };
        });
        return stats;
    }

    static getTotalDiagramCount() {
        return Object.keys(this.diagrams).length;
    }

    static getDiagramsByTopic(topic) {
        const topicMap = {
            'cellBiology': ['animalCell', 'plantCell', 'prokaryoticVsEukaryotic', 'cellMembrane', 'osmosisDiffusion', 'activePassiveTransport', 'mitosis', 'meiosis', 'organelles', 'cellCycle', 'enzymeAction'],
            'genetics': ['dnaStructure', 'rnaStructure', 'dnaReplication', 'transcription', 'translation', 'codonChart', 'geneExpression', 'punnettSquare', 'chromosomes', 'crossingOver', 'mutations', 'recombinantDNA', 'pcrCycle'],
            'evolution': ['darwinsFinches', 'naturalSelection', 'phylogeneticTree', 'adaptiveRadiation', 'fossilLayers', 'hardyWeinberg', 'speciation', 'comparativeAnatomy'],
            'ecology': ['foodChain', 'foodWeb', 'energyPyramid', 'carbonCycle', 'nitrogenCycle', 'waterCycle', 'populationGrowth', 'ecosystem', 'biomes', 'predatorPrey'],
            'anatomy': ['heartAnatomy', 'circulatorySystem', 'respiratorySystem', 'digestiveSystem', 'nervousSystem', 'skeletalSystem', 'muscularSystem', 'urinarySystem', 'endocrineSystem', 'reproductiveSystem', 'immuneSystem'],
            'botany': ['plantCell', 'leafCrossSection', 'photosynthesis', 'stomata', 'xylemPhloem', 'flowerStructure', 'seedGermination', 'tropisms'],
            'microbiology': ['bacteriaStructure', 'virusStructure', 'fungalCell', 'protists', 'bacterialGrowthCurve', 'viralReplication', 'microscopy'],
            'development': ['fertilization', 'embryoDevelopment', 'menstrualCycle', 'gametogenesis', 'placenta'],
            'immunology': ['immuneResponse', 'antibodyStructure', 'pathogenTypes', 'vaccination', 'inflammation', 'diseaseTransmission', 'bloodCells'],
            'taxonomy': ['fiveKingdoms', 'threeDomains', 'taxonomyHierarchy', 'dichotomousKey', 'cladogram'],
            'homeostasis': ['negativeFeedback', 'thermoregulation', 'bloodGlucoseRegulation', 'waterBalance', 'nephron'],
            'energy': ['atpStructure', 'cellularRespiration', 'mitochondrion', 'electronTransportChain', 'chloroplastStructure', 'photosynthesisDetailed']
        };
        
        return topicMap[topic] || [];
    }

    static printSummary() {
        console.log('=== ANATOMICAL DIAGRAMS REGISTRY SUMMARY ===');
        console.log(`Total Diagrams: ${this.getTotalDiagramCount()}`);
        console.log('\nBy Category:');
        const stats = this.getDiagramStats();
        Object.entries(stats).forEach(([category, data]) => {
            console.log(`  ${category}: ${data.count} diagrams`);
        });
        console.log('\nBy Topic:');
        const topics = ['cellBiology', 'genetics', 'evolution', 'ecology', 'anatomy', 'botany', 'microbiology', 'biotechnology', 'development', 'immunology', 'taxonomy', 'homeostasis', 'energy', 'forensics'];
        topics.forEach(topic => {
            const diagrams = this.getDiagramsByTopic(topic);
            console.log(`  ${topic}: ${diagrams.length} diagrams`);
        });
    }
}

// Export
export { BiologyDiagramsRegistry };

