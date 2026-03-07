
class AnatomicalDiagramsRegistry {
    static diagrams = {

        'circulatorySystem': {
            name: 'Circulatory System',
            category: 'Cardiovascular System',
            description: 'Complete blood circulation pathway through body',
            dataRequired: ['circuit', 'component'],
            usage: 'Best for showing systemic and pulmonary circulation',
            examples: ['Blood flow education', 'Circulatory teaching', 'Medical diagrams'],
            circuitOptions: ['complete', 'systemic', 'pulmonary', 'coronary', 'portal'],
            componentOptions: ['overview', 'heart', 'arteries', 'veins', 'capillaries'],
            insets: ['capillary-exchange', 'blood-pressure-flow', 'valve-function', 'vascular-resistance'],
            // Step-by-step drawing steps for circulatory system
            drawingSteps: [
                { step: 1, id: 'lungs',              label: 'Step 1 – Lungs'                          },
                { step: 2, id: 'heart',               label: 'Step 2 – Heart'                          },
                { step: 3, id: 'pulmonaryCirculation', label: 'Step 3 – Pulmonary Circulation'         },
                { step: 4, id: 'systemicCirculation',  label: 'Step 4 – Systemic Circulation'          },
                { step: 5, id: 'complete',             label: 'Step 5 – Complete with Labels & Arrows' },
            ],
            defaultOptions: {
                title: 'Circulatory System',
                circuit: 'complete',
                component: 'overview',
                drawingStep: 5,
                showLabels: true,
                showOxygenation: true,
                showInset: false,
                insetType: 'capillary-exchange',
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'bloodVesselComparison': {
            name: 'Blood Vessel Comparison',
            category: 'Cardiovascular System',
            description: 'Comparison of arteries, veins, and capillaries',
            dataRequired: ['vesselType', 'layer'],
            usage: 'Best for comparing vessel structures',
            examples: ['Vessel anatomy', 'Blood transport', 'Vascular system'],
            vesselTypeOptions: ['all', 'artery', 'vein', 'capillary', 'arteriole', 'venule'],
            layerOptions: ['complete', 'tunica-intima', 'tunica-media', 'tunica-externa', 'endothelium'],
            insets: ['pressure-gradient', 'elastic-recoil', 'venous-return', 'capillary-bed'],
            defaultOptions: {
                title: 'Blood Vessel Comparison',
                vesselType: 'all',
                layer: 'complete',
                showLabels: true,
                showInset: false,
                insetType: 'pressure-gradient',
                width: 700,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'heartValves': {
            name: 'Heart Valves',
            category: 'Cardiovascular System',
            description: 'All four heart valves showing structure and function',
            dataRequired: ['valve', 'state'],
            usage: 'Best for showing valve anatomy and operation',
            examples: ['Valve disorders', 'Cardiac anatomy', 'Heart function'],
            valveOptions: ['all', 'tricuspid', 'pulmonary', 'mitral', 'aortic'],
            stateOptions: ['both', 'open', 'closed', 'dysfunction'],
            insets: ['valve-mechanism', 'chordae-tendineae', 'papillary-muscles', 'stenosis-regurgitation'],
            defaultOptions: {
                title: 'Heart Valves',
                valve: 'all',
                state: 'both',
                showLabels: true,
                showInset: false,
                insetType: 'valve-mechanism',
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'heartAnatomy': {
            name: 'Heart Anatomy',
            category: 'Cardiovascular System',
            description: 'Complete heart structure with chambers and blood flow',
            dataRequired: ['chamber'],
            usage: 'Best for showing heart structure and chamber details',
            examples: ['Medical education', 'Patient briefings', 'Anatomy studies'],
            chamberOptions: ['wholeheart', 'rightAtrium', 'rightVentricle', 'leftAtrium', 'leftVentricle'],
            // Step-by-step drawing steps for the whole heart
            drawingSteps: [
                { step: 1, id: 'outline',      label: 'Step 1 – Overall Heart Shape'           },
                { step: 2, id: 'divider',      label: 'Step 2 – Center Dividing Curve'         },
                { step: 3, id: 'chambers',     label: 'Step 3 – Atria & Ventricles'            },
                { step: 4, id: 'vessels',      label: 'Step 4 – Major Blood Vessels & Valves'  },
                { step: 5, id: 'final',        label: 'Step 5 – Final Outline & Labels'        },
            ],
            defaultOptions: {
                title: 'Heart Anatomy',
                chamber: 'wholeheart',
                drawingStep: 5,
                showLabels: true,
                showBloodFlow: true,
                animate: false,
                width: 600,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },
        'respiratorySystem': {
            name: 'Respiratory System',
            category: 'Respiratory System',
            description: 'Complete respiratory tract from nasal cavity to alveoli',
            dataRequired: ['component', 'process'],
            usage: 'Best for showing airway anatomy and gas exchange',
            examples: ['Breathing mechanics', 'Gas exchange', 'Lung anatomy'],
            componentOptions: ['complete', 'trachea', 'bronchi', 'bronchioles', 'leftLung', 'rightLung', 'alveoli', 'diaphragm'],
            processOptions: ['structure', 'inspiration', 'expiration', 'gas-exchange'],
            insets: ['gas-exchange', 'alveolar-structure', 'surfactant-function', 'oxygen-hemoglobin'],
            drawingSteps: [
                { step: 1, id: 'trachea',     label: 'Step 1 – Nasal Cavity & Trachea'          },
                { step: 2, id: 'bronchi',     label: 'Step 2 – Primary Bronchi'                  },
                { step: 3, id: 'lungs',       label: 'Step 3 – Lungs (Left 2 lobes, Right 3 lobes)' },
                { step: 4, id: 'bronchioles', label: 'Step 4 – Bronchioles & Alveoli'            },
                { step: 5, id: 'complete',    label: 'Step 5 – Diaphragm & Complete Labels'      },
            ],
            defaultOptions: {
                title: 'Respiratory System',
                component: 'complete',
                drawingStep: 5,
                showLabels: true,
                showInset: false,
                insetType: 'gas-exchange',
                width: 560,
                height: 680,
                backgroundColor: '#ffffff'
            }
        },
        'digestiveSystem': {
            name: 'Digestive System',
            category: 'Digestive System',
            description: 'Complete digestive tract from mouth to anus',
            dataRequired: ['component', 'process'],
            usage: 'Best for showing digestion pathway and organ functions',
            examples: ['Digestion education', 'GI tract teaching', 'Nutrition studies'],
            componentOptions: ['complete', 'mouth', 'esophagus', 'stomach', 'small-intestine', 'large-intestine', 'liver', 'pancreas', 'gallbladder'],
            drawingSteps: [
                { step: 1, id: 'mouthEsophagus',   label: 'Step 1 – Mouth & Esophagus'             },
                { step: 2, id: 'stomach',           label: 'Step 2 – Stomach'                       },
                { step: 3, id: 'accessoryOrgans',   label: 'Step 3 – Liver, Pancreas & Gallbladder' },
                { step: 4, id: 'intestines',        label: 'Step 4 – Small & Large Intestines'      },
                { step: 5, id: 'complete',          label: 'Step 5 – Complete with Labels'          },
            ],
            insets: ['villi-structure', 'enzyme-action', 'peristalsis', 'bile-production'],
            defaultOptions: {
                title: 'Digestive System',
                component: 'complete',
                drawingStep: 5,
                showLabels: true,
                showInset: false,
                insetType: 'villi-structure',
                width: 560,
                height: 720,
                backgroundColor: '#ffffff'
            }
        },
        'nervousSystem': {
           name: 'Nervous System',
           category: 'Nervous System',
           description: 'Central and peripheral nervous system overview',
           dataRequired: ['component', 'division'],
           usage: 'Best for showing CNS and PNS structure',
           examples: ['Neuroscience education', 'Nerve pathway teaching', 'Brain anatomy'],
           componentOptions: ['complete', 'brain', 'spinal-cord', 'cranial-nerves', 'spinal-nerves', 'autonomic'],
           drawingSteps: [
               { step: 1, id: 'brain',         label: 'Step 1 – Brain'                       },
               { step: 2, id: 'spinalCord',    label: 'Step 2 – Spinal Cord'                 },
               { step: 3, id: 'cranialNerves', label: 'Step 3 – Cranial Nerves'              },
               { step: 4, id: 'spinalNerves',  label: 'Step 4 – Spinal Nerves & Branches'   },
               { step: 5, id: 'complete',      label: 'Step 5 – Complete with Labels'        },
           ],
           insets: ['action-potential', 'neurotransmitter-release', 'saltatory-conduction', 'synapse-detail'],
           defaultOptions: {
               title: 'Nervous System',
               component: 'complete',
               division: 'both',
               drawingStep: 5,
               showLabels: true,
               showInset: false,
               insetType: 'action-potential',
               width: 500,
               height: 720,
               backgroundColor: '#ffffff'
          }


},

'dnaStructure': {
    name: 'DNA Structure',
    category: 'Molecular Biology',
    description: 'DNA double helix structure with base pairs, backbone, and grooves',
    dataRequired: ['view', 'componentFocus'],
    usage: 'Best for showing DNA molecular structure and components',
    examples: ['DNA education', 'Molecular biology', 'Genetics teaching'],
    viewOptions: ['complete', 'doubleHelix', 'basePairs', 'sugarPhosphate', 'nucleotide', 'major-minor-grooves'],
    componentFocusOptions: ['complete', 'backbone', 'bases', 'hydrogen-bonds', 'antiparallel'],
    drawingSteps: [
        { step: 1, id: 'backbone',        label: 'Step 1 – Sugar-Phosphate Backbone' },
        { step: 2, id: 'bases',           label: 'Step 2 – Nitrogenous Bases'        },
        { step: 3, id: 'hydrogen-bonds',  label: 'Step 3 – Hydrogen Bonds'           },
        { step: 4, id: 'antiparallel',    label: 'Step 4 – Antiparallel Strands'     },
        { step: 5, id: 'complete',        label: 'Step 5 – Complete Double Helix'    },
    ],
    insets: ['base-pair-detail', 'nucleotide-structure', 'major-minor-groove-detail', 'dna-dimensions'],
    defaultOptions: {
        title: 'DNA Structure',
        view: 'doubleHelix',
        componentFocus: 'complete',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'base-pair-detail',
        width: 500,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'dnaReplication': {
    name: 'DNA Replication',
    category: 'Molecular Biology',
    description: 'Semi-conservative DNA replication from initiation through termination',
    dataRequired: ['stage', 'enzymeHighlight'],
    usage: 'Best for showing replication stages and enzyme functions',
    examples: ['Replication teaching', 'Enzyme function', 'Cell division prep'],
    stageOptions: ['complete', 'initiation', 'elongation', 'termination', 'lagging-strand', 'leading-strand'],
    enzymeHighlightOptions: ['all', 'helicase', 'primase', 'dna-polymerase', 'ligase', 'topoisomerase', 'none'],
    drawingSteps: [
        { step: 1, id: 'initiation',    label: 'Step 1 – Initiation & Origin'          },
        { step: 2, id: 'leading-strand',label: 'Step 2 – Leading Strand Synthesis'     },
        { step: 3, id: 'lagging-strand',label: 'Step 3 – Lagging Strand & Okazaki'     },
        { step: 4, id: 'elongation',    label: 'Step 4 – Full Elongation Fork'         },
        { step: 5, id: 'termination',   label: 'Step 5 – Termination & Daughter Cells' },
    ],
    insets: ['okazaki-fragments', 'replication-fork-detail', 'helicase-mechanism', 'proofreading'],
    defaultOptions: {
        title: 'DNA Replication',
        stage: 'elongation',
        enzymeHighlight: 'all',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'replication-fork-detail',
        width: 700,
        height: 500,
        backgroundColor: '#ffffff'
    }
},

'transcription': {
    name: 'Transcription',
    category: 'Molecular Biology',
    description: 'DNA to RNA transcription including initiation, elongation, termination and RNA processing',
    dataRequired: ['stage', 'detail'],
    usage: 'Best for showing gene expression from DNA to mRNA',
    examples: ['Gene expression', 'RNA synthesis', 'Central dogma'],
    stageOptions: ['complete', 'initiation', 'elongation', 'termination', 'rna-processing'],
    detailOptions: ['overview', 'promoter', 'rna-polymerase', 'transcription-factors', 'enhancers', 'transcription-bubble', 'rna-splicing'],
    drawingSteps: [
        { step: 1, id: 'initiation',    label: 'Step 1 – Promoter & Initiation'    },
        { step: 2, id: 'elongation',    label: 'Step 2 – Elongation & Bubble'      },
        { step: 3, id: 'termination',   label: 'Step 3 – Termination'              },
        { step: 4, id: 'rna-processing',label: 'Step 4 – RNA Processing & Splicing'},
        { step: 5, id: 'complete',      label: 'Step 5 – Complete Overview'        },
    ],
    insets: ['rna-polymerase-detail', 'splicing-mechanism', 'cap-tail-addition', 'promoter-elements'],
    defaultOptions: {
        title: 'Transcription',
        stage: 'elongation',
        detail: 'overview',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'rna-polymerase-detail',
        width: 650,
        height: 550,
        backgroundColor: '#ffffff'
    }
},

'translation': {
    name: 'Translation',
    category: 'Molecular Biology',
    description: 'mRNA to protein translation at the ribosome through all stages',
    dataRequired: ['stage', 'componentFocus'],
    usage: 'Best for showing protein synthesis and ribosome function',
    examples: ['Protein synthesis', 'Ribosome function', 'Genetic code application'],
    stageOptions: ['complete', 'initiation', 'elongation', 'termination', 'ribosome-binding'],
    componentFocusOptions: ['complete', 'ribosome', 'trna', 'amino-acids', 'peptide-bond', 'elongation-factors'],
    drawingSteps: [
        { step: 1, id: 'ribosome-binding', label: 'Step 1 – Ribosome Assembly'          },
        { step: 2, id: 'initiation',       label: 'Step 2 – Initiation Complex'         },
        { step: 3, id: 'elongation',       label: 'Step 3 – Elongation & Peptide Bond'  },
        { step: 4, id: 'termination',      label: 'Step 4 – Termination & Release'      },
        { step: 5, id: 'complete',         label: 'Step 5 – Complete with All Labels'   },
    ],
    insets: ['peptide-bond-formation', 'trna-charging', 'ribosome-sites', 'polysome'],
    defaultOptions: {
        title: 'Translation',
        stage: 'elongation',
        componentFocus: 'complete',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'ribosome-sites',
        width: 700,
        height: 550,
        backgroundColor: '#ffffff'
    }
},

'rnaStructure': {
    name: 'RNA Structure',
    category: 'Molecular Biology',
    description: 'mRNA, tRNA, and rRNA structures and functions',
    dataRequired: ['rnaType', 'feature'],
    usage: 'Best for comparing RNA types and showing structural features',
    examples: ['RNA biology', 'tRNA structure', 'Ribosome components'],
    rnaTypeOptions: ['mRNA', 'tRNA', 'rRNA', 'comparison'],
    featureOptions: ['structure', 'function', 'modifications', 'processing'],
    drawingSteps: [
        { step: 1, id: 'mRNA',      label: 'Step 1 – mRNA Structure'       },
        { step: 2, id: 'tRNA',      label: 'Step 2 – tRNA Cloverleaf'      },
        { step: 3, id: 'rRNA',      label: 'Step 3 – rRNA & Ribosome'      },
        { step: 4, id: 'comparison',label: 'Step 4 – RNA Type Comparison'  },
    ],
    insets: ['trna-3d-structure', 'mrna-features', 'rrna-domains', 'rna-modifications'],
    defaultOptions: {
        title: 'RNA Structure',
        rnaType: 'comparison',
        feature: 'structure',
        drawingStep: 4,
        showLabels: true,
        showInset: false,
        insetType: 'trna-3d-structure',
        width: 650,
        height: 550,
        backgroundColor: '#ffffff'
    }
},

'codonChart': {
    name: 'Codon Chart',
    category: 'Molecular Biology',
    description: 'Complete genetic code showing all 64 codons and amino acids',
    dataRequired: ['display', 'feature'],
    usage: 'Best for teaching the genetic code, degeneracy, and wobble hypothesis',
    examples: ['Genetic code', 'Codon-anticodon', 'Amino acid table'],
    displayOptions: ['circular', 'table', 'wheel'],
    featureOptions: ['standard', 'start-codons', 'stop-codons', 'degeneracy', 'wobble'],
    insets: ['wobble-base-pairing', 'codon-degeneracy', 'reading-frame', 'start-stop-summary'],
    defaultOptions: {
        title: 'Genetic Code – Codon Chart',
        display: 'table',
        feature: 'standard',
        showLabels: true,
        showInset: false,
        insetType: 'wobble-base-pairing',
        width: 750,
        height: 600,
        backgroundColor: '#ffffff'
    }
},


'foodWeb': {
    name: 'Food Web',
    category: 'Ecology',
    description: 'Interconnected feeding relationships across trophic levels',
    dataRequired: ['trophicLevel', 'ecosystem'],
    usage: 'Best for showing complex feeding networks and energy flow',
    examples: ['Ecosystem relationships', 'Trophic levels', 'Predator-prey networks'],
    trophicLevelOptions: ['complete', 'producers', 'primary-consumers', 'secondary-consumers', 'tertiary-consumers', 'decomposers'],
    ecosystemOptions: ['terrestrial', 'aquatic'],
    insets: ['energy-flow', 'trophic-efficiency', 'biomagnification'],
    drawingSteps: [
        { step: 1, id: 'producers',           label: 'Step 1 – Producers'            },
        { step: 2, id: 'primary-consumers',    label: 'Step 2 – Primary Consumers'    },
        { step: 3, id: 'secondary-consumers',  label: 'Step 3 – Secondary Consumers'  },
        { step: 4, id: 'tertiary-consumers',   label: 'Step 4 – Tertiary Consumers'   },
        { step: 5, id: 'complete',             label: 'Step 5 – Complete Food Web'    },
    ],
    defaultOptions: {
        title: 'Food Web',
        trophicLevel: 'complete',
        ecosystem: 'terrestrial',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'energy-flow',
        width: 700,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'carbonCycle': {
    name: 'Carbon Cycle',
    category: 'Ecology',
    description: 'Global carbon cycle including photosynthesis, respiration, decomposition and combustion',
    dataRequired: ['process', 'reservoir'],
    usage: 'Best for showing carbon movement through biotic and abiotic reservoirs',
    examples: ['Climate change education', 'Biogeochemical cycles', 'Carbon sequestration'],
    processOptions: ['complete', 'photosynthesis', 'respiration', 'decomposition', 'combustion', 'ocean-absorption'],
    reservoirOptions: ['atmosphere', 'biosphere', 'lithosphere', 'hydrosphere'],
    insets: ['co2-molecule', 'greenhouse-effect', 'carbon-reservoirs'],
    drawingSteps: [
        { step: 1, id: 'photosynthesis',    label: 'Step 1 – Photosynthesis'       },
        { step: 2, id: 'respiration',       label: 'Step 2 – Respiration'          },
        { step: 3, id: 'decomposition',     label: 'Step 3 – Decomposition'        },
        { step: 4, id: 'combustion',        label: 'Step 4 – Combustion'           },
        { step: 5, id: 'complete',          label: 'Step 5 – Complete Carbon Cycle' },
    ],
    defaultOptions: {
        title: 'Carbon Cycle',
        process: 'complete',
        reservoir: 'atmosphere',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'co2-molecule',
        width: 700,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'foodChain': {
    name: 'Food Chain',
    category: 'Ecology',
    description: 'Linear sequence of feeding relationships from producer to apex predator',
    dataRequired: ['ecosystem', 'length'],
    usage: 'Best for showing linear energy transfer and the 10% rule',
    examples: ['Trophic levels', '10% energy rule', 'Feeding sequences'],
    ecosystemOptions: ['terrestrial', 'aquatic', 'marine'],
    lengthOptions: ['simple', 'extended', 'detrital'],
    insets: ['ten-percent-rule', 'energy-loss', 'trophic-pyramid'],
    drawingSteps: [
        { step: 1, id: 'simple',    label: 'Step 1 – Simple Chain (4 levels)'   },
        { step: 2, id: 'extended',  label: 'Step 2 – Extended Chain (6 levels)'  },
        { step: 3, id: 'detrital',  label: 'Step 3 – Detrital Chain'             },
    ],
    defaultOptions: {
        title: 'Food Chain',
        ecosystem: 'terrestrial',
        length: 'simple',
        drawingStep: 1,
        showLabels: true,
        showInset: false,
        insetType: 'ten-percent-rule',
        width: 500,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'energyPyramid': {
    name: 'Energy Pyramid',
    category: 'Ecology',
    description: 'Ecological pyramid showing energy, biomass or numbers across trophic levels',
    dataRequired: ['type', 'ecosystem'],
    usage: 'Best for visualising energy loss between trophic levels',
    examples: ['Energy transfer', 'Biomass distribution', 'Population numbers'],
    typeOptions: ['energy', 'biomass', 'numbers'],
    ecosystemOptions: ['terrestrial', 'aquatic'],
    insets: ['energy-loss-heat', 'lindeman-efficiency', 'inverted-pyramid'],
    drawingSteps: [
        { step: 1, id: 'energy',   label: 'Step 1 – Energy Pyramid'   },
        { step: 2, id: 'biomass',  label: 'Step 2 – Biomass Pyramid'  },
        { step: 3, id: 'numbers',  label: 'Step 3 – Numbers Pyramid'  },
    ],
    defaultOptions: {
        title: 'Energy Pyramid',
        type: 'energy',
        ecosystem: 'terrestrial',
        drawingStep: 1,
        showLabels: true,
        showInset: false,
        insetType: 'energy-loss-heat',
        width: 600,
        height: 550,
        backgroundColor: '#ffffff'
    }
},

'nitrogenCycle': {
    name: 'Nitrogen Cycle',
    category: 'Ecology',
    description: 'Complete nitrogen cycle: fixation, nitrification, assimilation and denitrification',
    dataRequired: ['process', 'organism'],
    usage: 'Best for showing nitrogen transformation by microorganisms',
    examples: ['Soil biology', 'Nutrient cycling', 'Bacterial nitrogen fixation'],
    processOptions: ['complete', 'fixation', 'nitrification', 'assimilation', 'denitrification'],
    organismOptions: ['bacteria', 'plants', 'animals', 'all'],
    insets: ['n2-molecule', 'rhizobium-nodule', 'nitrogen-forms'],
    drawingSteps: [
        { step: 1, id: 'fixation',        label: 'Step 1 – Nitrogen Fixation'    },
        { step: 2, id: 'nitrification',   label: 'Step 2 – Nitrification'        },
        { step: 3, id: 'assimilation',    label: 'Step 3 – Assimilation'         },
        { step: 4, id: 'denitrification', label: 'Step 4 – Denitrification'      },
        { step: 5, id: 'complete',        label: 'Step 5 – Complete Cycle'       },
    ],
    defaultOptions: {
        title: 'Nitrogen Cycle',
        process: 'complete',
        organism: 'all',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'n2-molecule',
        width: 700,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'waterCycle': {
    name: 'Water Cycle',
    category: 'Ecology',
    description: 'Hydrological cycle: evaporation, condensation, precipitation, infiltration and runoff',
    dataRequired: ['process', 'scale'],
    usage: 'Best for showing water movement through the environment',
    examples: ['Hydrology education', 'Climate systems', 'Watershed management'],
    processOptions: ['complete', 'evaporation', 'condensation', 'precipitation', 'infiltration', 'runoff'],
    scaleOptions: ['global', 'regional', 'local'],
    insets: ['water-molecule', 'transpiration-detail', 'groundwater-flow'],
    drawingSteps: [
        { step: 1, id: 'evaporation',   label: 'Step 1 – Evaporation & Transpiration' },
        { step: 2, id: 'condensation',  label: 'Step 2 – Condensation'                },
        { step: 3, id: 'precipitation', label: 'Step 3 – Precipitation'               },
        { step: 4, id: 'infiltration',  label: 'Step 4 – Infiltration'                },
        { step: 5, id: 'complete',      label: 'Step 5 – Complete Water Cycle'        },
    ],
    defaultOptions: {
        title: 'Water Cycle',
        process: 'complete',
        scale: 'global',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'water-molecule',
        width: 750,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'populationGrowth': {
    name: 'Population Growth',
    category: 'Ecology',
    description: 'Exponential and logistic population growth models with carrying capacity',
    dataRequired: ['curveType', 'phase'],
    usage: 'Best for illustrating J-curve vs S-curve and carrying capacity concepts',
    examples: ['Population ecology', 'Carrying capacity', 'Logistic growth', 'r/K selection'],
    curveTypeOptions: ['both', 'exponential', 'logistic'],
    phaseOptions: ['complete', 'lag', 'exponential', 'transition', 'plateau'],
    insets: ['growth-equation', 'density-dependence', 'limiting-factors'],
    drawingSteps: [
        { step: 1, id: 'exponential', label: 'Step 1 – Exponential Growth (J-curve)' },
        { step: 2, id: 'logistic',    label: 'Step 2 – Logistic Growth (S-curve)'    },
        { step: 3, id: 'both',        label: 'Step 3 – Both Curves Compared'         },
    ],
    defaultOptions: {
        title: 'Population Growth',
        curveType: 'both',
        phase: 'complete',
        drawingStep: 3,
        showLabels: true,
        showInset: false,
        insetType: 'growth-equation',
        width: 650,
        height: 550,
        backgroundColor: '#ffffff'
    }
},

'ecosystem': {
    name: 'Ecosystem Components',
    category: 'Ecology',
    description: 'Complete ecosystem showing biotic and abiotic factors and their interactions',
    dataRequired: ['ecosystemType', 'component'],
    usage: 'Best for showing ecosystem structure and component interactions',
    examples: ['Ecosystem overview', 'Biotic vs abiotic', 'Energy and nutrient flow'],
    ecosystemTypeOptions: ['forest', 'aquatic', 'grassland', 'desert'],
    componentOptions: ['complete', 'biotic', 'abiotic', 'producers', 'consumers', 'decomposers'],
    insets: ['energy-nutrient-flow', 'symbiosis', 'niche-concept'],
    drawingSteps: [
        { step: 1, id: 'abiotic',      label: 'Step 1 – Abiotic Factors'        },
        { step: 2, id: 'producers',    label: 'Step 2 – Producers'               },
        { step: 3, id: 'consumers',    label: 'Step 3 – Consumers'               },
        { step: 4, id: 'decomposers',  label: 'Step 4 – Decomposers'             },
        { step: 5, id: 'complete',     label: 'Step 5 – Complete Ecosystem'      },
    ],
    defaultOptions: {
        title: 'Ecosystem',
        ecosystemType: 'forest',
        component: 'complete',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'energy-nutrient-flow',
        width: 700,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'biomes': {
    name: 'World Biomes',
    category: 'Ecology',
    description: 'Major world biomes classified by climate and characteristic organisms',
    dataRequired: ['biome', 'characteristic'],
    usage: 'Best for comparing biome climates and biodiversity',
    examples: ['Biome classification', 'Climate zones', 'Biodiversity patterns'],
    biomeOptions: ['all', 'tropical-rainforest', 'desert', 'tundra', 'taiga', 'temperate-forest', 'grassland', 'savanna', 'marine'],
    characteristicOptions: ['climate', 'organisms', 'adaptations', 'productivity'],
    insets: ['climate-graph', 'whittaker-diagram', 'species-richness'],
    drawingSteps: [
        { step: 1, id: 'all', label: 'Step 1 – All Biomes Overview' },
    ],
    defaultOptions: {
        title: 'World Biomes',
        biome: 'all',
        characteristic: 'climate',
        drawingStep: 1,
        showLabels: true,
        showInset: false,
        insetType: 'climate-graph',
        width: 750,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'predatorPrey': {
    name: 'Predator-Prey Dynamics',
    category: 'Ecology',
    description: 'Lotka-Volterra predator-prey oscillations shown as time series and phase plot',
    dataRequired: ['display', 'phase'],
    usage: 'Best for showing oscillating population cycles and ecological equilibrium',
    examples: ['Population dynamics', 'Lotka-Volterra', 'Ecological cycles', 'Lynx-hare cycle'],
    displayOptions: ['time-series', 'phase-plot', 'both'],
    phaseOptions: ['complete', 'rise', 'peak', 'decline', 'trough'],
    insets: ['lotka-volterra-equations', 'lag-explanation', 'equilibrium-point'],
    drawingSteps: [
        { step: 1, id: 'time-series', label: 'Step 1 – Time Series Graph'       },
        { step: 2, id: 'phase-plot',  label: 'Step 2 – Phase Plot'              },
        { step: 3, id: 'both',        label: 'Step 3 – Time Series & Phase Plot' },
    ],
    defaultOptions: {
        title: 'Predator-Prey Dynamics',
        display: 'both',
        phase: 'complete',
        drawingStep: 3,
        showLabels: true,
        showInset: false,
        insetType: 'lotka-volterra-equations',
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},

'cellularRespiration': {
    name: 'Cellular Respiration',
    category: 'Energy Systems',
    description: 'Complete aerobic respiration from glycolysis to oxidative phosphorylation',
    dataRequired: ['stage', 'location'],
    usage: 'Best for showing ATP production pathways and metabolic stages',
    examples: ['Glycolysis teaching', 'Krebs cycle', 'ATP yield comparison'],
    stageOptions: ['complete', 'glycolysis', 'krebs-cycle', 'electron-transport', 'oxidative-phosphorylation'],
    locationOptions: ['cytoplasm', 'mitochondria', 'inner-membrane', 'matrix'],
    drawingSteps: [
        { step: 1, id: 'glycolysis',              label: 'Step 1 – Glycolysis (Cytoplasm)'           },
        { step: 2, id: 'pyruvate-decarboxylation', label: 'Step 2 – Pyruvate → Acetyl-CoA'           },
        { step: 3, id: 'krebs-cycle',              label: 'Step 3 – Krebs Cycle (Matrix)'            },
        { step: 4, id: 'electron-transport',       label: 'Step 4 – Electron Transport Chain'        },
        { step: 5, id: 'complete',                 label: 'Step 5 – Complete with ATP Totals'        },
    ],
    insets: ['atp-yield-summary', 'nadh-fadh2-roles', 'proton-gradient', 'substrate-level-vs-oxidative'],
    defaultOptions: {
        title: 'Cellular Respiration',
        stage: 'complete',
        location: 'mitochondria',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'atp-yield-summary',
        width: 900,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'electronTransportChain': {
    name: 'Electron Transport Chain',
    category: 'Energy Systems',
    description: 'Inner mitochondrial membrane complexes I–IV and ATP synthase',
    dataRequired: ['complex', 'process'],
    usage: 'Best for showing electron flow, proton pumping and chemiosmosis',
    examples: ['ETC complexes', 'ATP synthase mechanism', 'Oxidative phosphorylation'],
    complexOptions: ['complete', 'complex-I', 'complex-II', 'complex-III', 'complex-IV', 'atp-synthase'],
    processOptions: ['overview', 'electron-flow', 'proton-pumping', 'atp-synthesis', 'q-cycle'],
    insets: ['q-cycle-detail', 'atp-synthase-rotation', 'proton-motive-force', 'inhibitors'],
    defaultOptions: {
        title: 'Electron Transport Chain',
        complex: 'complete',
        process: 'overview',
        showLabels: true,
        showInset: false,
        insetType: 'q-cycle-detail',
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'photosynthesisDetailed': {
    name: 'Photosynthesis',
    category: 'Energy Systems',
    description: 'Light-dependent and light-independent reactions in the chloroplast',
    dataRequired: ['reaction', 'detail'],
    usage: 'Best for showing Z-scheme, Calvin cycle and photosystem function',
    examples: ['Light reactions', 'Calvin cycle', 'Carbon fixation', 'Photosystems'],
    reactionOptions: ['both', 'light-dependent', 'light-independent', 'electron-transport', 'carbon-fixation'],
    detailOptions: ['overview', 'photosystem-II', 'photosystem-I', 'cytb6f', 'atp-synthase', 'rubisco'],
    drawingSteps: [
        { step: 1, id: 'light-dependent',   label: 'Step 1 – Light-Dependent Reactions'        },
        { step: 2, id: 'carbon-fixation',   label: 'Step 2 – Calvin Cycle (Carbon Fixation)'   },
        { step: 3, id: 'both',              label: 'Step 3 – Both Reactions Combined'           },
    ],
    insets: ['z-scheme', 'calvin-cycle-phases', 'rubisco-mechanism', 'photorespiration-comparison'],
    defaultOptions: {
        title: 'Photosynthesis',
        reaction: 'both',
        detail: 'overview',
        drawingStep: 3,
        showLabels: true,
        showInset: false,
        insetType: 'z-scheme',
        width: 900,
        height: 800,
        backgroundColor: '#ffffff'
    }
},

'atpStructure': {
    name: 'ATP Structure & Cycle',
    category: 'Energy Systems',
    description: 'Adenosine triphosphate molecular structure, hydrolysis, synthesis and ADP cycle',
    dataRequired: ['view', 'process'],
    usage: 'Best for showing ATP as energy currency and phosphate bond energy',
    examples: ['ATP hydrolysis', 'Energy storage', 'Phosphorylation', 'ADP-ATP cycle'],
    viewOptions: ['structure', 'hydrolysis', 'synthesis', 'cycle'],
    processOptions: ['overview', 'phosphate-bonds', 'free-energy', 'cellular-uses'],
    insets: ['high-energy-bonds', 'delta-g-values', 'atp-uses-in-cell', 'phosphorylation-types'],
    defaultOptions: {
        title: 'ATP Structure & Cycle',
        view: 'structure',
        process: 'overview',
        showLabels: true,
        showInset: false,
        insetType: 'high-energy-bonds',
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'mitochondrion': {
    name: 'Mitochondrion',
    category: 'Energy Systems',
    description: 'Mitochondrial ultrastructure: membranes, cristae, matrix and functional compartments',
    dataRequired: ['view', 'component'],
    usage: 'Best for showing organelle structure and relationship to cellular respiration',
    examples: ['Organelle anatomy', 'Cristae function', 'Endosymbiotic theory'],
    viewOptions: ['complete', 'outer-membrane', 'inner-membrane', 'matrix', 'cristae'],
    componentOptions: ['overview', 'porins', 'cardiolipin', 'atp-synthase', 'etc-complexes', 'mtdna'],
    insets: ['membrane-permeability', 'cristae-surface-area', 'import-machinery', 'endosymbiosis'],
    defaultOptions: {
        title: 'Mitochondrion',
        view: 'complete',
        component: 'overview',
        showLabels: true,
        showInset: false,
        insetType: 'cristae-surface-area',
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'chloroplastStructure': {
    name: 'Chloroplast Structure',
    category: 'Energy Systems',
    description: 'Chloroplast ultrastructure: envelope, thylakoids, grana, stroma and photosystems',
    dataRequired: ['view', 'component'],
    usage: 'Best for showing plastid anatomy and its link to photosynthesis',
    examples: ['Chloroplast anatomy', 'Thylakoid membrane', 'Grana stacking'],
    viewOptions: ['complete', 'outer-membrane', 'thylakoid', 'stroma', 'grana'],
    componentOptions: ['overview', 'psii', 'psi', 'atp-synthase', 'cytb6f', 'rubisco', 'cpdna'],
    insets: ['thylakoid-membrane-proteins', 'grana-stacking-reason', 'stroma-vs-thylakoid', 'cp-vs-mito'],
    defaultOptions: {
        title: 'Chloroplast Structure',
        view: 'complete',
        component: 'overview',
        showLabels: true,
        showInset: false,
        insetType: 'thylakoid-membrane-proteins',
        width: 800,
        height: 650,
        backgroundColor: '#ffffff'
    }
},



'immuneResponse': {
    name: 'Immune Response',
    category: 'Immunology',
    description: 'Complete immune response from recognition through memory formation',
    dataRequired: ['responseType', 'stage'],
    usage: 'Best for showing innate vs adaptive immunity pathways',
    examples: ['Immunity education', 'Immunology teaching', 'Medical training'],
    responseTypeOptions: ['both', 'innate', 'adaptive'],
    stageOptions: ['complete', 'recognition', 'activation', 'effector', 'memory'],
    insets: ['toll-like-receptors', 'cytokine-signaling', 'mhc-presentation', 'clonal-selection'],
    drawingSteps: [
        { step: 1, id: 'recognition', label: 'Step 1 – Pathogen Recognition'        },
        { step: 2, id: 'activation',  label: 'Step 2 – Immune Cell Activation'      },
        { step: 3, id: 'effector',    label: 'Step 3 – Effector Response'           },
        { step: 4, id: 'memory',      label: 'Step 4 – Memory Cell Formation'       },
        { step: 5, id: 'complete',    label: 'Step 5 – Complete Response Overview'  },
    ],
    defaultOptions: {
        title: 'Immune Response',
        responseType: 'both',
        stage: 'complete',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'mhc-presentation',
        width: 700,
        height: 500,
        backgroundColor: '#ffffff'
    }
},

'vaccination': {
    name: 'Vaccination',
    category: 'Immunology',
    description: 'Vaccine administration through primary response to long-term memory and secondary response',
    dataRequired: ['vaccineType', 'stage'],
    usage: 'Best for explaining how vaccines generate protective immunity',
    examples: ['Vaccine education', 'Public health teaching', 'Immunology'],
    vaccineTypeOptions: ['live-attenuated', 'inactivated', 'mrna'],
    stageOptions: ['complete', 'administration', 'recognition', 'primary-response', 'memory-formation', 'secondary-response'],
    insets: ['antibody-titer', 'b-cell-activation', 'memory-longevity', 'herd-immunity-threshold'],
    drawingSteps: [
        { step: 1, id: 'administration',    label: 'Step 1 – Vaccine Administration'     },
        { step: 2, id: 'recognition',       label: 'Step 2 – Antigen Recognition'        },
        { step: 3, id: 'primary-response',  label: 'Step 3 – Primary Immune Response'    },
        { step: 4, id: 'memory-formation',  label: 'Step 4 – Memory Cell Formation'      },
        { step: 5, id: 'secondary-response',label: 'Step 5 – Secondary Response (Rapid)' },
    ],
    defaultOptions: {
        title: 'Vaccination',
        vaccineType: 'mrna',
        stage: 'complete',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'antibody-titer',
        width: 700,
        height: 520,
        backgroundColor: '#ffffff'
    }
},

'bloodCells': {
    name: 'Blood Cells',
    category: 'Hematology',
    description: 'All blood cell types — erythrocytes, leukocytes and platelets — with structure and function',
    dataRequired: ['cellType', 'func'],
    usage: 'Best for comparing blood cell morphology and roles',
    examples: ['Hematology teaching', 'Blood cell identification', 'Pathology education'],
    cellTypeOptions: ['all', 'erythrocytes', 'leukocytes', 'platelets', 'neutrophils', 'lymphocytes', 'monocytes', 'eosinophils', 'basophils'],
    funcOptions: ['structure', 'immune-defense', 'oxygen-transport', 'clotting'],
    insets: ['blood-composition', 'hematopoiesis', 'rbc-lifespan', 'wbc-differential'],
    drawingSteps: [
        { step: 1, id: 'erythrocytes', label: 'Step 1 – Red Blood Cells (Erythrocytes)' },
        { step: 2, id: 'platelets',    label: 'Step 2 – Platelets (Thrombocytes)'       },
        { step: 3, id: 'leukocytes',   label: 'Step 3 – White Blood Cells (Leukocytes)' },
        { step: 4, id: 'neutrophils',  label: 'Step 4 – Neutrophil Detail'              },
        { step: 5, id: 'all',          label: 'Step 5 – All Cell Types Together'        },
    ],
    defaultOptions: {
        title: 'Blood Cells',
        cellType: 'all',
        func: 'structure',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'wbc-differential',
        width: 700,
        height: 520,
        backgroundColor: '#ffffff'
    }
},

'antibodyStructure': {
    name: 'Antibody Structure',
    category: 'Immunology',
    description: 'Y-shaped immunoglobulin with variable/constant regions, isotype variants and antigen binding',
    dataRequired: ['region', 'type'],
    usage: 'Best for explaining antibody anatomy and isotype differences',
    examples: ['Immunology teaching', 'Antibody therapy education', 'Vaccine science'],
    regionOptions: ['complete', 'fab', 'fc', 'variable-region', 'constant-region', 'antigen-binding', 'hinge'],
    typeOptions: ['IgG', 'IgM', 'IgA', 'IgE', 'IgD'],
    insets: ['disulfide-bonds', 'fab-detail', 'fc-effector-functions', 'isotype-comparison'],
    drawingSteps: [
        { step: 1, id: 'heavy-chains',    label: 'Step 1 – Heavy Chains & Fc Stem'      },
        { step: 2, id: 'light-chains',    label: 'Step 2 – Light Chains'                 },
        { step: 3, id: 'variable-region', label: 'Step 3 – Variable Regions (CDRs)'     },
        { step: 4, id: 'fab',             label: 'Step 4 – Fab Fragments'               },
        { step: 5, id: 'complete',        label: 'Step 5 – Complete with Antigen Binding'},
    ],
    defaultOptions: {
        title: 'Antibody Structure',
        region: 'complete',
        type: 'IgG',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'isotype-comparison',
        width: 600,
        height: 560,
        backgroundColor: '#ffffff'
    }
},

'pathogenTypes': {
    name: 'Pathogen Types',
    category: 'Microbiology',
    description: 'All major pathogen categories — bacteria, viruses, fungi, protozoa, helminths and prions',
    dataRequired: ['pathogen', 'characteristic'],
    usage: 'Best for comparing pathogen structure, reproduction and size',
    examples: ['Microbiology overview', 'Infection teaching', 'Pathology education'],
    pathogenOptions: ['all', 'bacteria', 'viruses', 'fungi', 'protozoa', 'helminths', 'prions'],
    characteristicOptions: ['structure', 'reproduction', 'size'],
    insets: ['size-comparison', 'gram-stain', 'viral-replication-cycle', 'antibiotic-targets'],
    drawingSteps: [
        { step: 1, id: 'bacteria',  label: 'Step 1 – Bacteria'         },
        { step: 2, id: 'viruses',   label: 'Step 2 – Viruses'          },
        { step: 3, id: 'fungi',     label: 'Step 3 – Fungi'            },
        { step: 4, id: 'protozoa',  label: 'Step 4 – Protozoa'         },
        { step: 5, id: 'all',       label: 'Step 5 – All Pathogens'    },
    ],
    defaultOptions: {
        title: 'Pathogen Types',
        pathogen: 'all',
        characteristic: 'structure',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'size-comparison',
        width: 700,
        height: 520,
        backgroundColor: '#ffffff'
    }
},

'inflammation': {
    name: 'Inflammation',
    category: 'Immunology',
    description: 'Acute inflammation cascade — tissue damage through phagocyte recruitment to tissue repair',
    dataRequired: ['stage', 'type'],
    usage: 'Best for showing the 5 cardinal signs and cellular events of inflammation',
    examples: ['Pathology teaching', 'Wound healing', 'Immunology education'],
    stageOptions: ['complete', 'tissue-damage', 'chemical-signals', 'vasodilation', 'phagocyte-recruitment', 'tissue-repair'],
    typeOptions: ['acute', 'chronic'],
    insets: ['cardinal-signs', 'eicosanoid-pathway', 'neutrophil-extravasation', 'resolution-signals'],
    drawingSteps: [
        { step: 1, id: 'tissue-damage',          label: 'Step 1 – Tissue Damage & DAMPs'          },
        { step: 2, id: 'chemical-signals',        label: 'Step 2 – Chemical Mediator Release'      },
        { step: 3, id: 'vasodilation',            label: 'Step 3 – Vasodilation & Permeability'    },
        { step: 4, id: 'phagocyte-recruitment',   label: 'Step 4 – Phagocyte Recruitment'          },
        { step: 5, id: 'complete',                label: 'Step 5 – Complete Inflammation Overview' },
    ],
    defaultOptions: {
        title: 'Inflammation',
        stage: 'complete',
        type: 'acute',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'cardinal-signs',
        width: 700,
        height: 520,
        backgroundColor: '#ffffff'
    }
},

'diseaseTransmission': {
    name: 'Disease Transmission',
    category: 'Epidemiology',
    description: 'Vector-borne disease transmission cycle from infected host through vector to new host',
    dataRequired: ['diseaseType', 'stage'],
    usage: 'Best for showing vector-borne pathogen lifecycle and epidemiological cycles',
    examples: ['Epidemiology teaching', 'Public health', 'Tropical medicine'],
    diseaseTypeOptions: ['malaria', 'dengue', 'lyme', 'zika', 'plague', 'typhus'],
    stageOptions: ['complete', 'infection', 'incubation', 'transmission', 'vector-acquisition'],
    insets: ['r-naught', 'incubation-periods', 'geographic-distribution', 'prevention-methods'],
    drawingSteps: [
        { step: 1, id: 'infection',          label: 'Step 1 – Initial Infection'               },
        { step: 2, id: 'incubation',         label: 'Step 2 – Incubation Period'               },
        { step: 3, id: 'transmission',       label: 'Step 3 – Vector Acquisition & Spread'     },
        { step: 4, id: 'vector-acquisition', label: 'Step 4 – Pathogen Development in Vector'  },
        { step: 5, id: 'complete',           label: 'Step 5 – Complete Transmission Cycle'     },
    ],
    defaultOptions: {
        title: 'Disease Transmission',
        diseaseType: 'malaria',
        stage: 'complete',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'r-naught',
        width: 700,
        height: 520,
        backgroundColor: '#ffffff'
    }
},


'bacteriaStructure': {
    name: 'Bacteria Structure',
    category: 'Microbiology',
    description: 'Bacterial cell anatomy including gram-positive, gram-negative, and archaea types',
    dataRequired: ['type', 'structure'],
    usage: 'Best for showing prokaryotic cell organization and surface structures',
    examples: ['Microbiology education', 'Gram stain teaching', 'Bacterial anatomy'],
    typeOptions: ['gram-positive', 'gram-negative', 'archaea'],
    structureOptions: ['complete', 'cell-wall', 'membrane', 'nucleoid', 'plasmids', 'flagella', 'pili'],
    insets: ['gram-stain-comparison', 'peptidoglycan-detail', 'flagella-basal-body', 'pili-conjugation'],
    drawingSteps: [
        { step: 1, id: 'membrane',  label: 'Step 1 – Cell Membrane'                     },
        { step: 2, id: 'cell-wall', label: 'Step 2 – Cell Wall (Peptidoglycan Layer)'   },
        { step: 3, id: 'nucleoid',  label: 'Step 3 – Nucleoid & Plasmids'               },
        { step: 4, id: 'flagella',  label: 'Step 4 – Flagella & Pili'                   },
        { step: 5, id: 'complete',  label: 'Step 5 – Complete with Labels'              },
    ],
    defaultOptions: {
        title: 'Bacteria Structure',
        type: 'gram-negative',
        structure: 'complete',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'gram-stain-comparison',
        width: 700,
        height: 500,
        backgroundColor: '#ffffff'
    }
},

'virusStructure': {
    name: 'Virus Structure',
    category: 'Microbiology',
    description: 'Viral particle anatomy including bacteriophage, enveloped, non-enveloped, and retrovirus types',
    dataRequired: ['type', 'component'],
    usage: 'Best for showing viral morphology and replication components',
    examples: ['Virology education', 'Pathogen anatomy', 'Vaccine target teaching'],
    typeOptions: ['bacteriophage', 'enveloped', 'non-enveloped', 'retrovirus'],
    componentOptions: ['complete', 'capsid', 'envelope', 'spike-proteins', 'nucleic-acid', 'enzymes'],
    insets: ['lytic-vs-lysogenic', 'receptor-binding', 'capsid-symmetry', 'genome-types'],
    drawingSteps: [
        { step: 1, id: 'nucleic-acid',   label: 'Step 1 – Nucleic Acid (Genome)'        },
        { step: 2, id: 'capsid',         label: 'Step 2 – Capsid / Protein Coat'        },
        { step: 3, id: 'envelope',       label: 'Step 3 – Viral Envelope (if present)'  },
        { step: 4, id: 'spike-proteins', label: 'Step 4 – Spike / Surface Proteins'     },
        { step: 5, id: 'complete',       label: 'Step 5 – Complete with Labels'         },
    ],
    defaultOptions: {
        title: 'Virus Structure',
        type: 'bacteriophage',
        component: 'complete',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'lytic-vs-lysogenic',
        width: 600,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'fungalCell': {
    name: 'Fungal Cell',
    category: 'Microbiology',
    description: 'Fungal cell structures including yeast, hyphae, mycelium, and fruiting body',
    dataRequired: ['structure', 'form'],
    usage: 'Best for showing eukaryotic fungal organization and reproductive structures',
    examples: ['Mycology education', 'Fungal pathogen teaching', 'Spore formation'],
    structureOptions: ['cell', 'hyphae', 'mycelium', 'fruiting-body'],
    formOptions: ['yeast', 'mold'],
    insets: ['chitin-wall-detail', 'septum-pore', 'spore-types', 'dimorphism'],
    drawingSteps: [
        { step: 1, id: 'cell-wall',     label: 'Step 1 – Chitin Cell Wall & Membrane'  },
        { step: 2, id: 'nucleus',       label: 'Step 2 – Nucleus & Organelles'         },
        { step: 3, id: 'hyphae',        label: 'Step 3 – Hyphal Filaments'             },
        { step: 4, id: 'mycelium',      label: 'Step 4 – Mycelium Network'             },
        { step: 5, id: 'fruiting-body', label: 'Step 5 – Fruiting Body (Complete)'     },
    ],
    defaultOptions: {
        title: 'Fungal Cell',
        structure: 'cell',
        form: 'yeast',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'chitin-wall-detail',
        width: 650,
        height: 550,
        backgroundColor: '#ffffff'
    }
},

'protists': {
    name: 'Protists',
    category: 'Microbiology',
    description: 'Diverse protist organisms including amoeba, paramecium, euglena, volvox, diatom, and plasmodium',
    dataRequired: ['protistType', 'feature'],
    usage: 'Best for showing protist diversity and organelle-level detail',
    examples: ['Protist diversity', 'Unicellular eukaryotes', 'Malaria life cycle'],
    protistTypeOptions: ['all', 'amoeba', 'paramecium', 'euglena', 'volvox', 'diatom', 'plasmodium'],
    featureOptions: ['structure', 'locomotion', 'feeding', 'reproduction'],
    insets: ['contractile-vacuole', 'axoneme-9plus2', 'apical-complex', 'frustule-detail'],
    drawingSteps: [
        { step: 1, id: 'amoeba',      label: 'Step 1 – Amoeba (Pseudopodia)'           },
        { step: 2, id: 'paramecium',  label: 'Step 2 – Paramecium (Cilia)'             },
        { step: 3, id: 'euglena',     label: 'Step 3 – Euglena (Flagellum & Eyespot)'  },
        { step: 4, id: 'diatom',      label: 'Step 4 – Diatom (Silica Frustule)'       },
        { step: 5, id: 'all',         label: 'Step 5 – Protist Diversity Overview'     },
    ],
    defaultOptions: {
        title: 'Protists',
        protistType: 'all',
        feature: 'structure',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'axoneme-9plus2',
        width: 700,
        height: 600,
        backgroundColor: '#ffffff'
    }
},


// ── Animal Cell ──────────────────────────────────────────────────────
        'animalCell': {
            name: 'Animal Cell',
            category: 'Cell Biology',
            description: 'Complete animal cell with all major organelles and ultrastructure',
            dataRequired: ['view', 'organelleHighlight'],
            usage: 'Best for showing eukaryotic cell anatomy and organelle function',
            examples: ['Cell biology education', 'Organelle function', 'Eukaryote structure'],
            viewOptions: [
                'complete', 'nucleus', 'mitochondria', 'endoplasmicReticulum',
                'golgiApparatus', 'lysosome', 'ribosome', 'centriole',
                'cytoskeleton', 'peroxisome', 'vesicle', 'actinFilament',
                'microtubule', 'cytoplasm', 'nuclearPore', 'chromatinFiber',
                'nuclearLamina'
            ],
            organelleHighlightOptions: [
                'none', 'all', 'nucleus', 'mitochondria', 'endoplasmicReticulum',
                'golgiApparatus', 'lysosome', 'ribosome', 'centriole',
                'cytoskeleton', 'peroxisome', 'vesicle', 'membrane'
            ],
            insets: [
                'nucleus-detail',
                'mitochondria-detail',
                'er-detail',
                'golgi-detail',
                'ribosome-detail',
                'centriole-detail',
            ],
            drawingSteps: [
                { step: 1, id: 'membrane',       label: 'Step 1 – Cell Membrane & Cytoplasm'   },
                { step: 2, id: 'nucleus',         label: 'Step 2 – Nucleus & Nucleolus'         },
                { step: 3, id: 'mitochondria',    label: 'Step 3 – Mitochondria'                },
                { step: 4, id: 'er-golgi',        label: 'Step 4 – ER, Golgi & Vesicles'        },
                { step: 5, id: 'complete',        label: 'Step 5 – All Organelles & Labels'     },
            ],
            defaultOptions: {
                title: 'Animal Cell',
                view: 'complete',
                organelleHighlight: null,
                drawingStep: 5,
                showLabels: true,
                showInset: false,
                insetType: 'nucleus-detail',
                width: 600,
                height: 560,
                backgroundColor: '#ffffff'
            }
        },

        // ── Plant Cell ───────────────────────────────────────────────────────
        'plantCell': {
            name: 'Plant Cell',
            category: 'Cell Biology',
            description: 'Complete plant cell with cell wall, chloroplasts and central vacuole',
            dataRequired: ['view', 'processHighlight'],
            usage: 'Best for comparing plant vs animal cells and photosynthesis context',
            examples: ['Plant biology', 'Photosynthesis teaching', 'Cell wall structure'],
            viewOptions: [
                'complete', 'cellWall', 'chloroplast', 'vacuole',
                'plasmodesmata', 'chloroplastGranum', 'middleLamella',
                'primaryPit', 'secondaryWall', 'amyloplast', 'chromoplast',
                'leucoplast', 'cytoplasmicStreaming'
            ],
            processHighlightOptions: [
                'none', 'all', 'photosynthesis', 'turgorPressure',
                'cytoplasmicStreaming', 'cellWallFormation', 'plasmodesmata',
                'nucleus', 'chloroplast', 'vacuole', 'mitochondria', 'ribosome'
            ],
            insets: [
                'chloroplast-detail',
                'cell-wall-layers',
                'plasmodesmata-detail',
                'vacuole-function',
                'granum-thylakoid',
                'turgor-pressure',
            ],
            drawingSteps: [
                { step: 1, id: 'wall',        label: 'Step 1 – Cell Wall & Membrane'         },
                { step: 2, id: 'vacuole',     label: 'Step 2 – Central Vacuole'              },
                { step: 3, id: 'nucleus',     label: 'Step 3 – Nucleus'                      },
                { step: 4, id: 'chloroplasts',label: 'Step 4 – Chloroplasts & Plastids'      },
                { step: 5, id: 'complete',    label: 'Step 5 – All Structures & Labels'      },
            ],
            defaultOptions: {
                title: 'Plant Cell',
                view: 'complete',
                processHighlight: null,
                drawingStep: 5,
                showLabels: true,
                showInset: false,
                insetType: 'chloroplast-detail',
                width: 620,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ── Cell Membrane ────────────────────────────────────────────────────
        'cellMembrane': {
            name: 'Cell Membrane',
            category: 'Cell Biology',
            description: 'Fluid mosaic model with phospholipid bilayer, proteins and transport mechanisms',
            dataRequired: ['view'],
            usage: 'Best for showing membrane structure and transport across membranes',
            examples: ['Membrane transport', 'Fluid mosaic model', 'Osmosis teaching'],
            viewOptions: [
                'fluidMosaicModel', 'phospholipidBilayer', 'membraneProteins',
                'transportMechanisms', 'endocytosis', 'exocytosis',
                'osmosis', 'facilitatedDiffusion', 'ionChannel',
                'atpase', 'cotransporter', 'aquaporin',
                'junctionProteins', 'receptorProtein', 'enzymeProtein'
            ],
            insets: [
                'phospholipid-structure',
                'protein-types',
                'active-vs-passive',
                'osmosis-diagram',
                'ion-channel-gating',
                'membrane-fluidity',
            ],
            drawingSteps: [
                { step: 1, id: 'bilayer',   label: 'Step 1 – Phospholipid Bilayer'          },
                { step: 2, id: 'proteins',  label: 'Step 2 – Integral & Peripheral Proteins' },
                { step: 3, id: 'transport', label: 'Step 3 – Transport Mechanisms'           },
                { step: 4, id: 'carbo',     label: 'Step 4 – Carbohydrate Chains & Receptors'},
                { step: 5, id: 'complete',  label: 'Step 5 – Complete Fluid Mosaic Model'    },
            ],
            defaultOptions: {
                title: 'Cell Membrane',
                view: 'fluidMosaicModel',
                drawingStep: 5,
                showLabels: true,
                showInset: false,
                insetType: 'phospholipid-structure',
                width: 700,
                height: 420,
                backgroundColor: '#ffffff'
            }
        },

        // ── Cell Division ────────────────────────────────────────────────────
        'cellDivision': {
            name: 'Cell Division',
            category: 'Cell Biology',
            description: 'Mitosis and meiosis phases with chromosome dynamics and spindle apparatus',
            dataRequired: ['view'],
            usage: 'Best for teaching mitosis, meiosis, and the cell cycle',
            examples: ['Mitosis phases', 'Meiosis teaching', 'Cell cycle regulation'],
            viewOptions: [
                'complete', 'cellCycle',
                'chromosome', 'spindleFiber', 'centrosome',
                'cleavageFurrow', 'cellPlate',
                'prophase', 'metaphase', 'anaphase', 'telophase',
                'meiosisProphase1', 'meiosisMetaphase1', 'meiosisAnaphase1', 'meiosis2'
            ],
            processOptions: ['mitosis', 'meiosis', 'cytokinesis', 'cell-cycle'],
            insets: [
                'cell-cycle-checkpoints',
                'chromosome-structure',
                'spindle-assembly',
                'cytokinesis-detail',
                'crossing-over',
                'independent-assortment',
            ],
            drawingSteps: [
                { step: 1, id: 'interphase', label: 'Step 1 – Interphase (DNA replication)'  },
                { step: 2, id: 'prophase',   label: 'Step 2 – Prophase (Chromosomes condense)'},
                { step: 3, id: 'metaphase',  label: 'Step 3 – Metaphase (Alignment)'         },
                { step: 4, id: 'anaphase',   label: 'Step 4 – Anaphase (Separation)'         },
                { step: 5, id: 'complete',   label: 'Step 5 – Telophase & Cytokinesis'       },
            ],
            defaultOptions: {
                title: 'Cell Division',
                view: 'complete',
                drawingStep: 5,
                showLabels: true,
                showInset: false,
                insetType: 'cell-cycle-checkpoints',
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ── Cellular Respiration ─────────────────────────────────────────────
        'cellularRespiration': {
            name: 'Cellular Respiration',
            category: 'Cell Biology',
            description: 'Glycolysis, Krebs cycle and electron transport chain with ATP yield',
            dataRequired: ['view'],
            usage: 'Best for teaching ATP production and metabolic pathways',
            examples: ['Glycolysis teaching', 'Krebs cycle', 'ATP synthesis', 'Mitochondria function'],
            viewOptions: [
                'complete', 'glycolysis', 'krebsCycle',
                'electronTransportChain', 'atpSynthase'
            ],
            processOptions: ['aerobic', 'anaerobic', 'fermentation'],
            insets: [
                'atp-structure',
                'nadh-fadh2-role',
                'proton-gradient',
                'fermentation-pathway',
                'net-atp-yield',
                'substrate-level-phosphorylation',
            ],
            drawingSteps: [
                { step: 1, id: 'glycolysis', label: 'Step 1 – Glycolysis (Cytoplasm)'              },
                { step: 2, id: 'pyruvate',   label: 'Step 2 – Pyruvate Oxidation'                  },
                { step: 3, id: 'krebs',      label: 'Step 3 – Krebs Cycle (Matrix)'                },
                { step: 4, id: 'etc',        label: 'Step 4 – Electron Transport Chain'            },
                { step: 5, id: 'complete',   label: 'Step 5 – Complete Pathway & ATP Yield'        },
            ],
            defaultOptions: {
                title: 'Cellular Respiration',
                view: 'complete',
                drawingStep: 5,
                showLabels: true,
                showInset: false,
                insetType: 'net-atp-yield',
                width: 800,
                height: 560,
                backgroundColor: '#ffffff'
            }
        },

'neuronStructure': {
    name: 'Neuron Structure',
    category: 'Nervous System',
    description: 'Complete neuron anatomy with dendrites, soma, axon and terminals',
    dataRequired: ['component', 'state'],
    usage: 'Best for showing nerve cell structure and signal transmission',
    examples: ['Neuron anatomy', 'Action potential', 'Synapse teaching'],
    componentOptions: ['complete', 'dendrites', 'soma', 'axon', 'myelin', 'terminals', 'nodes-of-ranvier'],
    stateOptions: ['resting', 'action-potential', 'refractory'],
    drawingSteps: [
        { step: 1, id: 'soma',        label: 'Step 1 – Cell Body (Soma)'              },
        { step: 2, id: 'dendrites',   label: 'Step 2 – Dendrites'                     },
        { step: 3, id: 'axon',        label: 'Step 3 – Axon & Myelin Sheath'          },
        { step: 4, id: 'terminals',   label: 'Step 4 – Axon Terminals & Synapse'      },
        { step: 5, id: 'complete',    label: 'Step 5 – Complete with Labels & Signal' },
    ],
    insets: ['action-potential', 'neurotransmitter-release', 'saltatory-conduction', 'synapse-detail'],
    defaultOptions: {
        title: 'Neuron Structure',
        component: 'complete',
        state: 'resting',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'action-potential',
        width: 800,
        height: 420,
        backgroundColor: '#ffffff'
    }
},

'skeletalSystem': {
    name: 'Skeletal System',
    category: 'Skeletal System',
    description: 'Complete human skeleton with axial and appendicular divisions',
    dataRequired: ['region', 'view'],
    usage: 'Best for showing bone structure and skeletal anatomy',
    examples: ['Bone anatomy', 'Fracture education', 'Orthopaedic teaching'],
    regionOptions: ['complete', 'axial', 'appendicular', 'skull', 'ribcage', 'spine', 'pelvis', 'upper-limb', 'lower-limb'],
    viewOptions: ['anterior', 'posterior', 'lateral'],
    drawingSteps: [
        { step: 1, id: 'axial',          label: 'Step 1 – Axial Skeleton (Skull, Spine, Ribcage)' },
        { step: 2, id: 'pectoral',       label: 'Step 2 – Pectoral Girdle & Upper Limbs'          },
        { step: 3, id: 'pelvic',         label: 'Step 3 – Pelvic Girdle & Lower Limbs'            },
        { step: 4, id: 'hands',          label: 'Step 4 – Hands & Feet'                           },
        { step: 5, id: 'complete',       label: 'Step 5 – Complete with Labels'                   },
    ],
    insets: ['bone-structure', 'joint-types', 'osteon', 'cartilage'],
    defaultOptions: {
        title: 'Skeletal System',
        region: 'complete',
        view: 'anterior',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'bone-structure',
        width: 480,
        height: 720,
        backgroundColor: '#ffffff'
    }
},

'urinarySystem': {
    name: 'Urinary System',
    category: 'Urinary System',
    description: 'Complete urinary tract from kidneys to urethra',
    dataRequired: ['component'],
    usage: 'Best for showing kidney function and urine production',
    examples: ['Kidney anatomy', 'Renal physiology', 'Urology education'],
    componentOptions: ['complete', 'kidney', 'nephron', 'ureter', 'bladder', 'urethra', 'glomerulus'],
    drawingSteps: [
        { step: 1, id: 'kidneys',    label: 'Step 1 – Kidneys'                         },
        { step: 2, id: 'ureters',    label: 'Step 2 – Ureters'                         },
        { step: 3, id: 'bladder',    label: 'Step 3 – Urinary Bladder'                 },
        { step: 4, id: 'urethra',    label: 'Step 4 – Urethra'                         },
        { step: 5, id: 'complete',   label: 'Step 5 – Complete with Labels & Nephron'  },
    ],
    insets: ['nephron-detail', 'glomerular-filtration', 'countercurrent', 'urine-formation'],
    defaultOptions: {
        title: 'Urinary System',
        component: 'complete',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'nephron-detail',
        width: 500,
        height: 680,
        backgroundColor: '#ffffff'
    }
},

'eyeAnatomy': {
    name: 'Eye Anatomy',
    category: 'Sensory Organs',
    description: 'Complete eye cross-section showing all layers and structures',
    dataRequired: ['component', 'process'],
    usage: 'Best for showing eye structure, layers, and light refraction',
    examples: ['Eye anatomy', 'Vision physiology', 'Ophthalmology teaching'],
    componentOptions: ['complete', 'cornea', 'lens', 'retina', 'optic-nerve', 'iris', 'ciliary-body'],
    processOptions: ['structure', 'light-refraction', 'accommodation'],
    drawingSteps: [
        { step: 1, id: 'sclera',         label: 'Step 1 – Outer Coat (Sclera & Cornea)'           },
        { step: 2, id: 'uvea',           label: 'Step 2 – Middle Coat (Choroid, Ciliary, Iris)'    },
        { step: 3, id: 'innerLayers',    label: 'Step 3 – Inner Coat (Retina & Optic Disc)'        },
        { step: 4, id: 'lens',           label: 'Step 4 – Lens, Chambers & Humours'               },
        { step: 5, id: 'complete',       label: 'Step 5 – Complete with Labels & Light Path'       },
    ],
    insets: ['retinal-layers', 'accommodation', 'visual-pathway', 'photoreceptors'],
    defaultOptions: {
        title: 'Eye Anatomy',
        component: 'complete',
        process: 'structure',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'retinal-layers',
        width: 620,
        height: 560,
        backgroundColor: '#ffffff'
    }
},

'leafCrossSection': {
    name: 'Leaf Cross-Section',
    category: 'Plant Biology',
    description: 'Leaf tissue layers from cuticle to vascular bundle',
    dataRequired: ['layer', 'process'],
    usage: 'Best for showing photosynthesis sites and leaf anatomy',
    examples: ['Leaf anatomy', 'Photosynthesis teaching', 'Gas exchange'],
    layerOptions: ['complete', 'cuticle', 'epidermis', 'palisade', 'spongy', 'vascular'],
    processOptions: ['structure', 'photosynthesis', 'transpiration', 'gas-exchange'],
    drawingSteps: [
        { step: 1, id: 'cuticle',    label: 'Step 1 – Cuticle Layer'           },
        { step: 2, id: 'epidermis',  label: 'Step 2 – Epidermis & Stomata'     },
        { step: 3, id: 'palisade',   label: 'Step 3 – Palisade Mesophyll'      },
        { step: 4, id: 'spongy',     label: 'Step 4 – Spongy Mesophyll'        },
        { step: 5, id: 'complete',   label: 'Step 5 – Complete with Vascular'  },
    ],
    insets: ['stomata-mechanism', 'chloroplast-detail', 'gas-exchange-detail', 'transpiration-stream'],
    defaultOptions: {
        title: 'Leaf Cross-Section',
        layer: 'complete',
        process: 'structure',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'stomata-mechanism',
        width: 700,
        height: 480,
        backgroundColor: '#ffffff'
    }
},

'photosynthesis': {
    name: 'Photosynthesis',
    category: 'Plant Biology',
    description: 'Light reactions, Calvin cycle, and electron transport chain',
    dataRequired: ['stage', 'detail'],
    usage: 'Best for teaching photosynthesis pathways and energy conversion',
    examples: ['Photosynthesis overview', 'Light reactions', 'Calvin cycle', 'Biochemistry'],
    stageOptions: ['complete', 'light-reactions', 'calvin-cycle', 'electron-transport'],
    detailOptions: ['overview', 'z-scheme', 'atp-synthesis', 'carbon-fixation', 'reduction', 'regeneration'],
    drawingSteps: [
        { step: 1, id: 'chloroplast',      label: 'Step 1 – Chloroplast Overview'        },
        { step: 2, id: 'light-reactions',  label: 'Step 2 – Light-Dependent Reactions'   },
        { step: 3, id: 'atp-nadph',        label: 'Step 3 – ATP & NADPH Production'      },
        { step: 4, id: 'calvin-cycle',     label: 'Step 4 – Calvin Cycle'                },
        { step: 5, id: 'complete',         label: 'Step 5 – Complete with Equation'      },
    ],
    insets: ['chloroplast-ultrastructure', 'atp-synthase', 'rubisco-enzyme', 'photorespiration'],
    defaultOptions: {
        title: 'Photosynthesis',
        stage: 'complete',
        detail: 'overview',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'chloroplast-ultrastructure',
        width: 750,
        height: 560,
        backgroundColor: '#ffffff'
    }
},

'flowerStructure': {
    name: 'Flower Structure',
    category: 'Plant Biology',
    description: 'Complete flower anatomy including reproductive organs and pollination',
    dataRequired: ['component', 'stage'],
    usage: 'Best for teaching plant reproduction and flower anatomy',
    examples: ['Flower anatomy', 'Pollination', 'Fertilization', 'Seed development'],
    componentOptions: ['complete', 'petals', 'sepals', 'stamen', 'pistil', 'ovary', 'anther'],
    stageOptions: ['mature', 'pollination', 'fertilization', 'seed-development'],
    drawingSteps: [
        { step: 1, id: 'receptacle',  label: 'Step 1 – Receptacle & Sepals'         },
        { step: 2, id: 'petals',      label: 'Step 2 – Petals'                       },
        { step: 3, id: 'stamen',      label: 'Step 3 – Stamens (Male organs)'        },
        { step: 4, id: 'pistil',      label: 'Step 4 – Pistil (Female organ)'        },
        { step: 5, id: 'complete',    label: 'Step 5 – Complete with Labels'         },
    ],
    insets: ['pollen-grain-detail', 'ovule-structure', 'double-fertilization', 'seed-coat-layers'],
    defaultOptions: {
        title: 'Flower Structure',
        component: 'complete',
        stage: 'mature',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'pollen-grain-detail',
        width: 640,
        height: 700,
        backgroundColor: '#ffffff'
    }
},

'stomataStructure': {
    name: 'Stomata Structure',
    category: 'Plant Biology',
    description: 'Guard cells and stomatal pore in open and closed states',
    dataRequired: ['state', 'view'],
    usage: 'Best for teaching transpiration control and gas exchange regulation',
    examples: ['Stomata teaching', 'Transpiration', 'Guard cell mechanism'],
    stateOptions: ['open', 'closed', 'both'],
    viewOptions: ['surface', 'cross-section', 'mechanism'],
    drawingSteps: [
        { step: 1, id: 'epidermis',      label: 'Step 1 – Epidermal Cells'          },
        { step: 2, id: 'guard-cells',    label: 'Step 2 – Guard Cells'              },
        { step: 3, id: 'pore',           label: 'Step 3 – Stomatal Pore'            },
        { step: 4, id: 'chloroplasts',   label: 'Step 4 – Chloroplasts in Guard Cells' },
        { step: 5, id: 'complete',       label: 'Step 5 – Complete with Mechanism'  },
    ],
    insets: ['turgor-pressure', 'ion-transport', 'abscisic-acid', 'circadian-rhythm'],
    defaultOptions: {
        title: 'Stomata Structure',
        state: 'both',
        view: 'surface',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'turgor-pressure',
        width: 700,
        height: 500,
        backgroundColor: '#ffffff'
    }
},

'xylemPhloem': {
    name: 'Xylem & Phloem',
    category: 'Plant Biology',
    description: 'Vascular tissue structure and transport mechanisms',
    dataRequired: ['tissue', 'transport'],
    usage: 'Best for teaching water and sugar transport in plants',
    examples: ['Vascular tissue', 'Water transport', 'Translocation', 'Pressure flow'],
    tissueOptions: ['both', 'xylem', 'phloem'],
    transportOptions: ['structure', 'water-movement', 'sugar-movement', 'pressure-flow', 'cohesion-tension'],
    drawingSteps: [
        { step: 1, id: 'bundle-sheath',  label: 'Step 1 – Bundle Sheath'            },
        { step: 2, id: 'xylem',          label: 'Step 2 – Xylem Vessels'             },
        { step: 3, id: 'phloem',         label: 'Step 3 – Phloem Sieve Tubes'        },
        { step: 4, id: 'companion',      label: 'Step 4 – Companion Cells'           },
        { step: 5, id: 'complete',       label: 'Step 5 – Complete with Transport'   },
    ],
    insets: ['cohesion-tension-theory', 'sieve-plate-detail', 'companion-cell-function', 'loading-unloading'],
    defaultOptions: {
        title: 'Xylem & Phloem',
        tissue: 'both',
        transport: 'structure',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'cohesion-tension-theory',
        width: 700,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'seedGermination': {
    name: 'Seed Germination',
    category: 'Plant Biology',
    description: 'Germination stages from dry seed to seedling',
    dataRequired: ['stage', 'seedType'],
    usage: 'Best for teaching plant life cycle and embryo development',
    examples: ['Germination stages', 'Dicot vs monocot', 'Plant embryology'],
    stageOptions: ['complete', 'imbibition', 'activation', 'radicle-emergence', 'shoot-emergence', 'seedling'],
    seedTypeOptions: ['dicot', 'monocot'],
    drawingSteps: [
        { step: 1, id: 'dry-seed',        label: 'Step 1 – Dry Seed'               },
        { step: 2, id: 'imbibition',      label: 'Step 2 – Imbibition'             },
        { step: 3, id: 'radicle',         label: 'Step 3 – Radicle Emergence'      },
        { step: 4, id: 'shoot',           label: 'Step 4 – Shoot Emergence'        },
        { step: 5, id: 'seedling',        label: 'Step 5 – Young Seedling'         },
    ],
    insets: ['seed-internal-anatomy', 'cotyledon-role', 'hormone-activation', 'root-cap-detail'],
    defaultOptions: {
        title: 'Seed Germination',
        stage: 'complete',
        seedType: 'dicot',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'seed-internal-anatomy',
        width: 900,
        height: 560,
        backgroundColor: '#ffffff'
    }
},

'plantTropisms': {
    name: 'Plant Tropisms',
    category: 'Plant Biology',
    description: 'Plant growth responses to light, gravity, touch, and water',
    dataRequired: ['tropismType', 'mechanism'],
    usage: 'Best for teaching directional growth responses and auxin action',
    examples: ['Phototropism', 'Gravitropism', 'Thigmotropism', 'Hydrotropism'],
    tropismTypeOptions: ['all', 'phototropism', 'gravitropism', 'thigmotropism', 'hydrotropism'],
    mechanismOptions: ['overview', 'auxin-distribution', 'cell-elongation', 'statoliths', 'differential-growth', 'response'],
    drawingSteps: [
        { step: 1, id: 'stimulus',       label: 'Step 1 – Stimulus Source'                  },
        { step: 2, id: 'perception',     label: 'Step 2 – Stimulus Perception'              },
        { step: 3, id: 'auxin-shift',    label: 'Step 3 – Auxin Redistribution'             },
        { step: 4, id: 'cell-response',  label: 'Step 4 – Differential Cell Elongation'     },
        { step: 5, id: 'complete',       label: 'Step 5 – Complete Growth Response'         },
    ],
    insets: ['auxin-action', 'statoliths-detail', 'cell-wall-loosening', 'signal-transduction'],
    defaultOptions: {
        title: 'Plant Tropisms',
        tropismType: 'all',
        mechanism: 'overview',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'auxin-action',
        width: 800,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'rootSystem': {
    name: 'Root System',
    category: 'Plant Biology',
    description: 'Taproot and fibrous root systems with absorption structures',
    dataRequired: ['type', 'process'],
    usage: 'Best for comparing root architectures and teaching water uptake',
    examples: ['Root anatomy', 'Water absorption', 'Taproot vs fibrous', 'Root hairs'],
    typeOptions: ['complete', 'taproot', 'fibrous'],
    processOptions: ['structure', 'water-uptake', 'mineral-absorption', 'anchorage'],
    drawingSteps: [
        { step: 1, id: 'primary-root',   label: 'Step 1 – Primary Root'            },
        { step: 2, id: 'lateral-roots',  label: 'Step 2 – Lateral Roots'           },
        { step: 3, id: 'root-hairs',     label: 'Step 3 – Root Hairs'              },
        { step: 4, id: 'root-cap',       label: 'Step 4 – Root Cap & Meristem'     },
        { step: 5, id: 'complete',       label: 'Step 5 – Complete with Labels'    },
    ],
    insets: ['root-hair-cell', 'osmosis-uptake', 'endodermis-casparian', 'mycorrhizae'],
    defaultOptions: {
        title: 'Root System',
        type: 'complete',
        process: 'structure',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'root-hair-cell',
        width: 700,
        height: 650,
        backgroundColor: '#ffffff'
    }
},

'stemSystem': {
    name: 'Stem System',
    category: 'Plant Biology',
    description: 'Stem anatomy including shoot system and longitudinal section',
    dataRequired: ['type', 'process'],
    usage: 'Best for teaching shoot anatomy, node/internode structure, transport',
    examples: ['Stem anatomy', 'Shoot system', 'Node structure', 'Stem transport'],
    typeOptions: ['complete', 'longitudinal', 'shoot'],
    processOptions: ['structure', 'transport', 'growth', 'support'],
    drawingSteps: [
        { step: 1, id: 'epidermis',    label: 'Step 1 – Epidermis'                  },
        { step: 2, id: 'cortex',       label: 'Step 2 – Cortex'                     },
        { step: 3, id: 'vascular',     label: 'Step 3 – Vascular Bundles'           },
        { step: 4, id: 'nodes',        label: 'Step 4 – Nodes, Buds & Leaves'       },
        { step: 5, id: 'complete',     label: 'Step 5 – Complete Shoot System'      },
    ],
    insets: ['node-detail', 'axillary-bud', 'lenticel-structure', 'pith-function'],
    defaultOptions: {
        title: 'Stem System',
        type: 'complete',
        process: 'structure',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'node-detail',
        width: 620,
        height: 720,
        backgroundColor: '#ffffff'
    }
},

'leafArrangement': {
    name: 'Leaf Arrangement (Phyllotaxis)',
    category: 'Plant Biology',
    description: 'Patterns of leaf arrangement: alternate, opposite, whorled, spiral',
    dataRequired: ['pattern'],
    usage: 'Best for teaching phyllotaxis, light capture optimization, plant identification',
    examples: ['Phyllotaxis', 'Leaf patterns', 'Plant identification', 'Fibonacci in nature'],
    patternOptions: ['complete', 'alternate', 'opposite', 'whorled', 'spiral'],
    drawingSteps: [
        { step: 1, id: 'stem',         label: 'Step 1 – Central Stem'              },
        { step: 2, id: 'nodes',        label: 'Step 2 – Nodes'                     },
        { step: 3, id: 'leaves',       label: 'Step 3 – Leaf Blades'               },
        { step: 4, id: 'veins',        label: 'Step 4 – Leaf Venation'             },
        { step: 5, id: 'complete',     label: 'Step 5 – All Patterns Labeled'      },
    ],
    insets: ['golden-angle', 'light-interception', 'fibonacci-sequence', 'leaf-mosaic'],
    defaultOptions: {
        title: 'Leaf Arrangement (Phyllotaxis)',
        pattern: 'complete',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'golden-angle',
        width: 900,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'respirationComplete': {
    name: 'Cellular Respiration',
    category: 'Plant Biology',
    description: 'Aerobic respiration: glycolysis, Krebs cycle and electron transport chain',
    dataRequired: ['stage', 'process'],
    usage: 'Best for teaching all stages of aerobic respiration',
    examples: ['Glycolysis', 'Krebs cycle', 'ATP yield', 'Electron transport'],
    stageOptions: ['overview', 'glycolysis', 'krebs', 'etc'],
    processOptions: ['structure', 'energy-yield', 'molecules'],
    drawingSteps: [
        { step: 1, id: 'glucose',      label: 'Step 1 – Glucose Input'               },
        { step: 2, id: 'glycolysis',   label: 'Step 2 – Glycolysis (Cytoplasm)'      },
        { step: 3, id: 'krebs',        label: 'Step 3 – Krebs Cycle (Matrix)'        },
        { step: 4, id: 'etc',          label: 'Step 4 – Electron Transport Chain'    },
        { step: 5, id: 'complete',     label: 'Step 5 – ATP Totals & Overall Equation'},
    ],
    insets: ['mitochondria-structure', 'atp-yield-table', 'nad-fad-reduction', 'chemiosmosis'],
    defaultOptions: {
        title: 'Cellular Respiration',
        stage: 'overview',
        process: 'structure',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'atp-yield-table',
        width: 700,
        height: 520,
        backgroundColor: '#ffffff'
    }
},

'transpirationStream': {
    name: 'Transpiration Stream',
    category: 'Plant Biology',
    description: 'Cohesion-tension mechanism driving water from roots to leaves',
    dataRequired: ['detail', 'process'],
    usage: 'Best for teaching the TACT mechanism and water transport',
    examples: ['Cohesion-tension', 'Root pressure', 'Transpiration pull', 'Xylem loading'],
    detailOptions: ['complete', 'water-uptake', 'cohesion'],
    processOptions: ['structure', 'tact', 'factors'],
    drawingSteps: [
        { step: 1, id: 'roots',       label: 'Step 1 – Root Water Uptake'           },
        { step: 2, id: 'xylem',       label: 'Step 2 – Xylem Vessel Column'         },
        { step: 3, id: 'cohesion',    label: 'Step 3 – Cohesion of Water Column'    },
        { step: 4, id: 'leaf',        label: 'Step 4 – Leaf & Stomata'              },
        { step: 5, id: 'complete',    label: 'Step 5 – Complete Stream & Labels'    },
    ],
    insets: ['water-potential', 'cohesion-adhesion', 'transpiration-factors', 'xylem-vessel'],
    defaultOptions: {
        title: 'Transpiration Stream',
        detail: 'complete',
        process: 'tact',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'cohesion-adhesion',
        width: 560,
        height: 680,
        backgroundColor: '#ffffff'
    }
},

'nutrientUptake': {
    name: 'Nutrient Uptake',
    category: 'Plant Biology',
    description: 'Mineral ion and water absorption by root cells',
    dataRequired: ['type', 'process'],
    usage: 'Best for teaching active and passive ion uptake',
    examples: ['Active transport', 'Ion channels', 'Proton pump', 'Macronutrients'],
    typeOptions: ['complete', 'active', 'passive'],
    processOptions: ['structure', 'active-transport', 'passive-diffusion'],
    drawingSteps: [
        { step: 1, id: 'soil-ions',   label: 'Step 1 – Mineral Ions in Soil'        },
        { step: 2, id: 'root-hair',   label: 'Step 2 – Root Hair Cell'              },
        { step: 3, id: 'proton-pump', label: 'Step 3 – H⁺-ATPase Proton Pump'      },
        { step: 4, id: 'channels',    label: 'Step 4 – Ion Channels & Carriers'     },
        { step: 5, id: 'complete',    label: 'Step 5 – Complete with Nutrient Table' },
    ],
    insets: ['ion-pump-detail', 'apoplast-symplast', 'casparian-strip', 'nutrient-deficiency'],
    defaultOptions: {
        title: 'Nutrient Uptake',
        type: 'complete',
        process: 'active-transport',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'apoplast-symplast',
        width: 700,
        height: 520,
        backgroundColor: '#ffffff'
    }
},

'pressureFlowComplete': {
    name: 'Pressure Flow / Translocation',
    category: 'Plant Biology',
    description: 'Mass flow hypothesis for phloem sugar transport source to sink',
    dataRequired: ['detail', 'process'],
    usage: 'Best for teaching phloem translocation and pressure-flow hypothesis',
    examples: ['Source-sink concept', 'Phloem loading', 'Mass flow', 'Sucrose transport'],
    detailOptions: ['complete', 'loading', 'unloading'],
    processOptions: ['structure', 'pressure-flow', 'loading-mechanism'],
    drawingSteps: [
        { step: 1, id: 'source',      label: 'Step 1 – Source (Leaf)'               },
        { step: 2, id: 'phloem',      label: 'Step 2 – Phloem Sieve Tubes'         },
        { step: 3, id: 'pressure',    label: 'Step 3 – Pressure Gradient'           },
        { step: 4, id: 'sink',        label: 'Step 4 – Sink (Root/Fruit)'           },
        { step: 5, id: 'complete',    label: 'Step 5 – Complete Flow & Xylem Cycle' },
    ],
    insets: ['sieve-plate-detail', 'sucrose-loading', 'aphid-experiment', 'source-sink-diagram'],
    defaultOptions: {
        title: 'Pressure Flow / Translocation',
        detail: 'complete',
        process: 'pressure-flow',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'sucrose-loading',
        width: 600,
        height: 680,
        backgroundColor: '#ffffff'
    }
},

'flowerToFruitSequence': {
    name: 'Flower to Fruit Sequence',
    category: 'Plant Biology',
    description: 'Sequential development from open flower through pollination to fruit',
    dataRequired: ['stage', 'process'],
    usage: 'Best for teaching sexual reproduction in flowering plants',
    examples: ['Pollination', 'Double fertilisation', 'Seed development', 'Fruit formation'],
    stageOptions: ['complete', 'pollination', 'fertilization', 'fruit-development'],
    processOptions: ['overview', 'double-fertilisation', 'seed-coat'],
    drawingSteps: [
        { step: 1, id: 'flower',       label: 'Step 1 – Open Flower'                 },
        { step: 2, id: 'pollination',  label: 'Step 2 – Pollination'                 },
        { step: 3, id: 'fertilisation',label: 'Step 3 – Fertilisation (Pollen Tube)' },
        { step: 4, id: 'fruit',        label: 'Step 4 – Fruit/Seed Development'      },
        { step: 5, id: 'complete',     label: 'Step 5 – Complete Sequence & Labels'  },
    ],
    insets: ['double-fertilisation', 'pollen-tube-growth', 'embryo-sac', 'seed-anatomy'],
    defaultOptions: {
        title: 'Flower to Fruit Sequence',
        stage: 'complete',
        process: 'overview',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'double-fertilisation',
        width: 800,
        height: 480,
        backgroundColor: '#ffffff'
    }
},

'fruitTypes': {
    name: 'Fruit Types',
    category: 'Plant Biology',
    description: 'Comparison of drupe, berry, achene and capsule fruit types',
    dataRequired: ['type', 'process'],
    usage: 'Best for classifying fruit types and dispersal adaptations',
    examples: ['Drupe anatomy', 'Berry seeds', 'Achene pappus', 'Capsule dehiscence'],
    typeOptions: ['complete', 'drupe', 'berry', 'achene', 'capsule'],
    processOptions: ['structure', 'dispersal-link'],
    drawingSteps: [
        { step: 1, id: 'background',   label: 'Step 1 – Panel Backgrounds'           },
        { step: 2, id: 'drupe-berry',  label: 'Step 2 – Drupe & Berry'              },
        { step: 3, id: 'achene',       label: 'Step 3 – Achene'                     },
        { step: 4, id: 'capsule',      label: 'Step 4 – Capsule'                    },
        { step: 5, id: 'complete',     label: 'Step 5 – Labels & Examples'          },
    ],
    insets: ['pericarp-layers', 'seed-coat-detail', 'dispersal-adaptation'],
    defaultOptions: {
        title: 'Fruit Types',
        type: 'complete',
        process: 'structure',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'pericarp-layers',
        width: 800,
        height: 480,
        backgroundColor: '#ffffff'
    }
},

'seedDispersal': {
    name: 'Seed Dispersal',
    category: 'Plant Biology',
    description: 'Four mechanisms of seed dispersal: wind, water, animal, explosive',
    dataRequired: ['mechanism', 'process'],
    usage: 'Best for teaching seed dispersal adaptations',
    examples: ['Dandelion wind', 'Coconut water', 'Burdock hooks', 'Poppy explosion'],
    mechanismOptions: ['complete', 'wind', 'water', 'animal', 'explosive'],
    processOptions: ['structure', 'adaptation'],
    drawingSteps: [
        { step: 1, id: 'panels',    label: 'Step 1 – Panel Layout'                  },
        { step: 2, id: 'wind',      label: 'Step 2 – Wind Dispersal'               },
        { step: 3, id: 'water',     label: 'Step 3 – Water Dispersal'              },
        { step: 4, id: 'animal',    label: 'Step 4 – Animal Dispersal'             },
        { step: 5, id: 'complete',  label: 'Step 5 – Explosive & Labels'           },
    ],
    insets: ['samara-aerodynamics', 'coconut-buoyancy', 'hook-anatomy', 'tension-mechanism'],
    defaultOptions: {
        title: 'Seed Dispersal',
        mechanism: 'complete',
        process: 'adaptation',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'samara-aerodynamics',
        width: 800,
        height: 480,
        backgroundColor: '#ffffff'
    }
},

'asexualReproduction': {
    name: 'Asexual / Vegetative Reproduction',
    category: 'Plant Biology',
    description: 'Vegetative propagation methods: stolons, bulbs, rhizomes, cuttings',
    dataRequired: ['method', 'process'],
    usage: 'Best for teaching vegetative propagation and clonal reproduction',
    examples: ['Strawberry runners', 'Onion bulb', 'Ginger rhizome', 'Stem cuttings'],
    methodOptions: ['complete', 'runners', 'bulbs', 'rhizomes', 'cuttings'],
    processOptions: ['structure', 'clonal-advantage'],
    drawingSteps: [
        { step: 1, id: 'soil',      label: 'Step 1 – Soil Environment'              },
        { step: 2, id: 'stolons',   label: 'Step 2 – Stolons / Runners'            },
        { step: 3, id: 'bulbs',     label: 'Step 3 – Bulbs'                        },
        { step: 4, id: 'rhizomes',  label: 'Step 4 – Rhizomes'                    },
        { step: 5, id: 'complete',  label: 'Step 5 – Labels & Examples'            },
    ],
    insets: ['bulb-cross-section', 'runner-rooting', 'rhizome-nodes', 'cutting-callus'],
    defaultOptions: {
        title: 'Vegetative Propagation',
        method: 'complete',
        process: 'structure',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'bulb-cross-section',
        width: 800,
        height: 480,
        backgroundColor: '#ffffff'
    }
},

'flowerStructure': {
    name: 'Flower Structure',
    category: 'Plant Biology',
    description: 'Complete flower anatomy with all reproductive and accessory parts',
    dataRequired: ['component', 'stage'],
    usage: 'Best for teaching floral anatomy and reproductive stages',
    examples: ['Stamen/pistil anatomy', 'Pollen production', 'Pollination stages'],
    componentOptions: ['complete', 'sepal', 'petal', 'stamen', 'pistil', 'ovary', 'anther'],
    stageOptions: ['mature', 'pollination', 'fertilization', 'seed-development'],
    drawingSteps: [
        { step: 1, id: 'receptacle',  label: 'Step 1 – Receptacle & Stem'           },
        { step: 2, id: 'sepals',      label: 'Step 2 – Sepals (Calyx)'             },
        { step: 3, id: 'petals',      label: 'Step 3 – Petals (Corolla)'           },
        { step: 4, id: 'stamens',     label: 'Step 4 – Stamens (Anther + Filament)'},
        { step: 5, id: 'complete',    label: 'Step 5 – Pistil, Labels & Stage'     },
    ],
    insets: ['anther-cross-section', 'ovule-detail', 'pollen-grain', 'nectary'],
    defaultOptions: {
        title: 'Flower Structure',
        component: 'complete',
        stage: 'mature',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'anther-cross-section',
        width: 600,
        height: 600,
        backgroundColor: '#ffffff'
    }
},

'seedGermination': {
    name: 'Seed Germination',
    category: 'Plant Biology',
    description: 'Stages of seed germination from imbibition to seedling establishment',
    dataRequired: ['stage', 'seedType'],
    usage: 'Best for teaching germination conditions and stages',
    examples: ['Imbibition', 'Radicle emergence', 'Epigeal vs hypogeal', 'Seedling growth'],
    stageOptions: ['complete', 'imbibition', 'activation', 'radicle-emergence', 'shoot-emergence', 'seedling'],
    seedTypeOptions: ['dicot', 'monocot'],
    drawingSteps: [
        { step: 1, id: 'dry-seed',    label: 'Step 1 – Dry Seed Structure'           },
        { step: 2, id: 'imbibition',  label: 'Step 2 – Imbibition (Water Uptake)'   },
        { step: 3, id: 'radicle',     label: 'Step 3 – Radicle Emergence'           },
        { step: 4, id: 'shoot',       label: 'Step 4 – Shoot Emergence'             },
        { step: 5, id: 'complete',    label: 'Step 5 – Seedling & Timeline'         },
    ],
    insets: ['seed-anatomy', 'hormone-germination', 'imbibition-detail', 'conditions-table'],
    defaultOptions: {
        title: 'Seed Germination',
        stage: 'complete',
        seedType: 'dicot',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'seed-anatomy',
        width: 800,
        height: 480,
        backgroundColor: '#ffffff'
    }
},

'photoperiodism': {
    name: 'Photoperiodism',
    category: 'Plant Biology',
    description: 'Flowering response to day/night length — short-day, long-day, day-neutral',
    dataRequired: ['type', 'process'],
    usage: 'Best for teaching critical night length and phytochrome system',
    examples: ['Short-day plants', 'Long-day plants', 'Phytochrome Pr/Pfr', 'Critical night length'],
    typeOptions: ['complete', 'short-day', 'long-day', 'day-neutral'],
    processOptions: ['overview', 'phytochrome', 'night-break'],
    drawingSteps: [
        { step: 1, id: 'day-bars',    label: 'Step 1 – Light/Dark Period Bars'      },
        { step: 2, id: 'short-day',   label: 'Step 2 – Short-Day Plant Response'    },
        { step: 3, id: 'long-day',    label: 'Step 3 – Long-Day Plant Response'     },
        { step: 4, id: 'day-neutral', label: 'Step 4 – Day-Neutral Plant'           },
        { step: 5, id: 'complete',    label: 'Step 5 – Critical Night Line & Legend'},
    ],
    insets: ['phytochrome-cycle', 'night-break-effect', 'florigen-concept', 'critical-length'],
    defaultOptions: {
        title: 'Photoperiodism',
        type: 'complete',
        process: 'overview',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'phytochrome-cycle',
        width: 800,
        height: 500,
        backgroundColor: '#ffffff'
    }
},

'gibberellin': {
    name: 'Gibberellin (GA)',
    category: 'Plant Biology',
    description: 'Gibberellin effects on stem elongation, germination and fruit growth',
    dataRequired: ['detail', 'process'],
    usage: 'Best for teaching gibberellin synthesis and physiological effects',
    examples: ['Dwarf vs normal stem', 'GA in germination', 'Amylase activation', 'Bolting'],
    detailOptions: ['overview', 'elongation', 'germination'],
    processOptions: ['overview', 'aleurone-response', 'stem-elongation'],
    drawingSteps: [
        { step: 1, id: 'dwarf-plant',  label: 'Step 1 – Dwarf Plant (no GA)'        },
        { step: 2, id: 'arrow',        label: 'Step 2 – GA Application Arrow'        },
        { step: 3, id: 'normal-plant', label: 'Step 3 – Normal-Height Plant (+GA)'   },
        { step: 4, id: 'effects',      label: 'Step 4 – Effect List'                 },
        { step: 5, id: 'complete',     label: 'Step 5 – Complete with Mechanism'     },
    ],
    insets: ['aleurone-amylase', 'ga-receptor', 'della-proteins', 'ga-germination-pathway'],
    defaultOptions: {
        title: 'Gibberellin (GA)',
        detail: 'overview',
        process: 'overview',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'aleurone-amylase',
        width: 700,
        height: 500,
        backgroundColor: '#ffffff'
    }
},

'c4Photosynthesis': {
    name: 'C4 Photosynthesis',
    category: 'Plant Biology',
    description: 'C4 carbon fixation pathway and Kranz anatomy',
    dataRequired: ['detail', 'process'],
    usage: 'Best for comparing C3, C4 and CAM photosynthesis strategies',
    examples: ['Bundle sheath', 'Mesophyll cell', 'PEP carboxylase', 'Photorespiration avoidance'],
    detailOptions: ['complete', 'anatomy', 'pathway'],
    processOptions: ['overview', 'co2-concentration', 'rubisco-protection'],
    drawingSteps: [
        { step: 1, id: 'mesophyll',   label: 'Step 1 – Mesophyll Cell'              },
        { step: 2, id: 'bundle',      label: 'Step 2 – Bundle Sheath Cell'          },
        { step: 3, id: 'c4-steps',    label: 'Step 3 – C4 Fixation Steps'          },
        { step: 4, id: 'transfer',    label: 'Step 4 – 4C/3C Transfer'             },
        { step: 5, id: 'complete',    label: 'Step 5 – Complete with Advantage Note'},
    ],
    insets: ['kranz-anatomy', 'pep-carboxylase', 'c3-vs-c4-comparison', 'photorespiration'],
    defaultOptions: {
        title: 'C4 Photosynthesis',
        detail: 'complete',
        process: 'overview',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'c3-vs-c4-comparison',
        width: 700,
        height: 500,
        backgroundColor: '#ffffff'
    }
},

'camPhotosynthesis': {
    name: 'CAM Photosynthesis',
    category: 'Plant Biology',
    description: 'Crassulacean Acid Metabolism — temporal CO₂ separation for arid plants',
    dataRequired: ['detail', 'process'],
    usage: 'Best for comparing CAM with C3/C4 and teaching arid plant adaptations',
    examples: ['Night CO₂ uptake', 'Malate storage', 'Closed stomata by day', 'Succulents'],
    detailOptions: ['complete', 'night', 'day', 'graph'],
    processOptions: ['overview', 'night-fixation', 'day-calvin'],
    drawingSteps: [
        { step: 1, id: 'night-panel',  label: 'Step 1 – Night Panel (Stomata Open)' },
        { step: 2, id: 'night-rxn',    label: 'Step 2 – Night CO₂ Fixation'         },
        { step: 3, id: 'day-panel',    label: 'Step 3 – Day Panel (Stomata Closed)' },
        { step: 4, id: 'day-rxn',      label: 'Step 4 – Day Calvin Cycle'           },
        { step: 5, id: 'complete',     label: 'Step 5 – Advantage Note & Labels'    },
    ],
    insets: ['cam-acid-graph', 'vacuole-storage', 'cam-vs-c4', 'water-use-efficiency'],
    defaultOptions: {
        title: 'CAM Photosynthesis',
        detail: 'complete',
        process: 'overview',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'cam-acid-graph',
        width: 700,
        height: 500,
        backgroundColor: '#ffffff'
    }
},

'nitrogenCycle': {
    name: 'Nitrogen Cycle',
    category: 'Plant Biology',
    description: 'Nitrogen fixation, nitrification, assimilation and denitrification',
    dataRequired: ['stage', 'process'],
    usage: 'Best for teaching the biogeochemical nitrogen cycle in plants',
    examples: ['Rhizobium fixation', 'Nitrosomonas', 'Nitrobacter', 'Denitrification'],
    stageOptions: ['complete', 'fixation'],
    processOptions: ['overview', 'bacteria-roles', 'plant-assimilation'],
    drawingSteps: [
        { step: 1, id: 'atmosphere',   label: 'Step 1 – Atmospheric N₂'             },
        { step: 2, id: 'fixation',     label: 'Step 2 – Nitrogen Fixation'          },
        { step: 3, id: 'nitrification',label: 'Step 3 – Nitrification'              },
        { step: 4, id: 'plant-uptake', label: 'Step 4 – Plant Uptake & Protein'     },
        { step: 5, id: 'complete',     label: 'Step 5 – Denitrification & Full Cycle'},
    ],
    insets: ['rhizobium-nodule', 'nitrification-bacteria', 'denitrification-detail', 'haber-process'],
    defaultOptions: {
        title: 'Nitrogen Cycle',
        stage: 'complete',
        process: 'overview',
        drawingStep: 5,
        showLabels: true,
        showInset: false,
        insetType: 'rhizobium-nodule',
        width: 700,
        height: 540,
        backgroundColor: '#ffffff'
    }
}    

};

    static getDiagram(key) { return this.diagrams[key]; }
    static getAllDiagrams() { return Object.keys(this.diagrams); }
    static getDiagramsByCategory(category) {
        return Object.entries(this.diagrams)
            .filter(([_, diagram]) => diagram.category === category)
            .reduce((acc, [key, diagram]) => { acc[key] = diagram; return acc; }, {});
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
            .reduce((acc, [key, diagram]) => { acc[key] = diagram; return acc; }, {});
    }
    static getDiagramStats() {
        const stats = {};
        this.getAllCategories().forEach(category => {
            const diagrams = this.getDiagramsByCategory(category);
            stats[category] = { count: Object.keys(diagrams).length, diagrams: Object.keys(diagrams) };
        });
        return stats;
    }
    static getTotalDiagramCount() { return Object.keys(this.diagrams).length; }
    static getInsetTypes() {
        const insets = new Set();
        Object.values(this.diagrams).forEach(diagram => {
            if (diagram.insets) diagram.insets.forEach(inset => insets.add(inset));
        });
        return Array.from(insets);
    }
    static getDiagramsByInset(insetType) {
        return Object.entries(this.diagrams)
            .filter(([_, diagram]) => diagram.insets && diagram.insets.includes(insetType))
            .map(([key, _]) => key);
    }
    static printSummary() {
        console.log('=== ANATOMICAL DIAGRAMS REGISTRY SUMMARY ===');
        console.log(`Total Diagrams: ${this.getTotalDiagramCount()}`);
        console.log(`Total Inset Types: ${this.getInsetTypes().length}`);
        console.log('\nBy Category:');
        const stats = this.getDiagramStats();
        Object.entries(stats).forEach(([category, data]) => {
            console.log(`  ${category}: ${data.count} diagrams`);
        });
    }
}

export {AnatomicalDiagramsRegistry};
