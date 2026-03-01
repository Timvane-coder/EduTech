
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
