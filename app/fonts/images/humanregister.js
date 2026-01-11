

// ============================================================================
// ANATOMICAL DIAGRAMS REGISTRY - Comprehensive Anatomy Configuration System
// ============================================================================

class AnatomicalDiagramsRegistry {
    static diagrams = {
        // ===== 1. CELL BIOLOGY =====

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

        'femur': {
            name: 'Femur',
            category: 'Skeletal System',
            description: 'Thigh bone structure and features',
            dataRequired: [],
            usage: 'Best for long bone anatomy',
            examples: ['Bone structure', 'Orthopedics', 'Skeletal anatomy'],
            defaultOptions: {
                title: 'Femur (Thigh Bone)',
                bone: 'femur',
                showLabels: true,
                width: 400,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'ribcage': {
            name: 'Ribcage',
            category: 'Skeletal System',
            description: 'Thoracic cage with ribs and sternum',
            dataRequired: [],
            usage: 'Best for thoracic anatomy',
            examples: ['Chest structure', 'Rib anatomy', 'Thoracic cage'],
            defaultOptions: {
                title: 'Ribcage',
                bone: 'ribcage',
                showLabels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'spine': {
            name: 'Vertebral Column',
            category: 'Skeletal System',
            description: 'Spine with vertebrae and spinal cord',
            dataRequired: [],
            usage: 'Best for spinal anatomy',
            examples: ['Back pain education', 'Spinal structure', 'Vertebrae'],
            defaultOptions: {
                title: 'Vertebral Column',
                bone: 'spine',
                showLabels: true,
                width: 400,
                height: 800,
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

        'skeletalMuscle': {
            name: 'Skeletal Muscle',
            category: 'Muscular System',
            description: 'Voluntary muscle structure with fibers',
            dataRequired: [],
            usage: 'Best for muscle anatomy education',
            examples: ['Muscle structure', 'Exercise physiology', 'Athletic training'],
            defaultOptions: {
                title: 'Skeletal Muscle',
                type: 'skeletal',
                showLabels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'muscleContraction': {
            name: 'Muscle Contraction',
            category: 'Muscular System',
            description: 'Sliding filament model of muscle contraction',
            dataRequired: [],
            usage: 'Best for showing muscle mechanics',
            examples: ['Exercise science', 'Physiology', 'Muscle function'],
            defaultOptions: {
                title: 'Muscle Contraction (Sliding Filament)',
                width: 800,
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
                   'anatomy': ['heartAnatomy', 'circulatorySystem', 'respiratorySystem', 'digestiveSystem', 'nervousSystem', 'skeletalSystem', 'muscularSystem', 'urinarySystem', 'endocrineSystem', 'reproductiveSystem', 'immuneSystem']
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
        const topics = ['anatomy'];
        topics.forEach(topic => {
            const diagrams = this.getDiagramsByTopic(topic);
            console.log(`  ${topic}: ${diagrams.length} diagrams`);
        });
    }
}



export { AnatomicalDiagramsRegistry,AnatomicalShapes,AnatomicalDiagramRenderer};




