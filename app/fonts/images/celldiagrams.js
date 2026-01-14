// ============================================================================
// CELL BIOLOGY DIAGRAMS REGISTRY - Comprehensive Configuration System
// ============================================================================

class CellBiologyDiagramsRegistry {
    static diagrams = {
        // ===== 1. CELL STRUCTURE & TYPES =====
        
        'animalCell': {
            name: 'Animal Cell',
            category: 'Cell Structure & Types',
            description: 'Complete animal cell with all organelles',
            dataRequired: [],
            usage: 'Best for general cell biology education',
            examples: ['Cell structure', 'Eukaryotic cell', 'Organelles'],
            defaultOptions: {
                title: 'Animal Cell Structure',
                showLabels: true,
                showNucleus: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'plantCell': {
            name: 'Plant Cell',
            category: 'Cell Structure & Types',
            description: 'Plant cell with cell wall, chloroplasts, and large vacuole',
            dataRequired: [],
            usage: 'Best for plant biology education',
            examples: ['Plant cell', 'Chloroplasts', 'Cell wall'],
            defaultOptions: {
                title: 'Plant Cell Structure',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'prokaryoticCell': {
            name: 'Prokaryotic Cell (Bacteria)',
            category: 'Cell Structure & Types',
            description: 'Bacterial cell structure',
            dataRequired: [],
            usage: 'Best for microbiology education',
            examples: ['Bacteria', 'Prokaryote', 'Microbiology'],
            defaultOptions: {
                title: 'Prokaryotic Cell (Bacterial Cell)',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cellComparison': {
            name: 'Cell Type Comparison',
            category: 'Cell Structure & Types',
            description: 'Side-by-side comparison of animal, plant, and bacterial cells',
            dataRequired: [],
            usage: 'Best for comparing cell types',
            examples: ['Cell comparison', 'Cell types', 'Evolution'],
            defaultOptions: {
                title: 'Cell Type Comparison',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 2. ORGANELLES =====

        'mitochondrion': {
            name: 'Mitochondrion',
            category: 'Organelles',
            description: 'Detailed mitochondrial structure',
            dataRequired: [],
            usage: 'Best for cellular respiration education',
            examples: ['Powerhouse of cell', 'ATP production', 'Cellular respiration'],
            defaultOptions: {
                title: 'Mitochondrion Structure',
                showLabels: true,
                showCristae: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chloroplast': {
            name: 'Chloroplast',
            category: 'Organelles',
            description: 'Chloroplast with thylakoids and grana',
            dataRequired: [],
            usage: 'Best for photosynthesis education',
            examples: ['Photosynthesis', 'Plant organelles', 'Light reactions'],
            defaultOptions: {
                title: 'Chloroplast Structure',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nucleus': {
            name: 'Cell Nucleus',
            category: 'Organelles',
            description: 'Nuclear structure with envelope, pores, and nucleolus',
            dataRequired: [],
            usage: 'Best for genetics and transcription education',
            examples: ['DNA storage', 'Nuclear envelope', 'Nucleolus'],
            defaultOptions: {
                title: 'Cell Nucleus',
                showLabels: true,
                showChromatin: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'endoplasmicReticulum': {
            name: 'Endoplasmic Reticulum',
            category: 'Organelles',
            description: 'Rough and smooth ER structure',
            dataRequired: [],
            usage: 'Best for protein synthesis education',
            examples: ['ER', 'Protein synthesis', 'Lipid synthesis'],
            defaultOptions: {
                title: 'Endoplasmic Reticulum',
                type: 'both', // 'rough', 'smooth', 'both'
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'golgiApparatus': {
            name: 'Golgi Apparatus',
            category: 'Organelles',
            description: 'Golgi body with cisternae and vesicles',
            dataRequired: [],
            usage: 'Best for protein processing education',
            examples: ['Golgi body', 'Protein modification', 'Vesicle transport'],
            defaultOptions: {
                title: 'Golgi Apparatus',
                showLabels: true,
                showVesicles: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ribosome': {
            name: 'Ribosome',
            category: 'Organelles',
            description: 'Ribosome structure with subunits',
            dataRequired: [],
            usage: 'Best for translation education',
            examples: ['Protein synthesis', 'Translation', 'rRNA'],
            defaultOptions: {
                title: 'Ribosome Structure',
                showLabels: true,
                showmRNA: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lysosome': {
            name: 'Lysosome',
            category: 'Organelles',
            description: 'Lysosome with digestive enzymes',
            dataRequired: [],
            usage: 'Best for cellular digestion education',
            examples: ['Cell digestion', 'Enzymes', 'Waste breakdown'],
            defaultOptions: {
                title: 'Lysosome',
                showLabels: true,
                width: 600,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'peroxisome': {
            name: 'Peroxisome',
            category: 'Organelles',
            description: 'Peroxisome structure',
            dataRequired: [],
            usage: 'Best for oxidation reactions',
            examples: ['Oxidation', 'Fatty acid breakdown', 'Detoxification'],
            defaultOptions: {
                title: 'Peroxisome',
                showLabels: true,
                width: 600,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vacuole': {
            name: 'Vacuole',
            category: 'Organelles',
            description: 'Plant cell vacuole',
            dataRequired: [],
            usage: 'Best for plant cell biology',
            examples: ['Storage', 'Turgor pressure', 'Plant cells'],
            defaultOptions: {
                title: 'Central Vacuole',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'centriole': {
            name: 'Centriole',
            category: 'Organelles',
            description: 'Centriole structure with microtubules',
            dataRequired: [],
            usage: 'Best for cell division education',
            examples: ['Cell division', 'Spindle fibers', 'Microtubules'],
            defaultOptions: {
                title: 'Centriole Structure',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 3. CELL MEMBRANE & TRANSPORT =====

        'cellMembrane': {
            name: 'Cell Membrane (Fluid Mosaic Model)',
            category: 'Cell Membrane & Transport',
            description: 'Phospholipid bilayer with proteins',
            dataRequired: [],
            usage: 'Best for membrane structure education',
            examples: ['Plasma membrane', 'Phospholipid bilayer', 'Membrane proteins'],
            defaultOptions: {
                title: 'Cell Membrane Structure',
                showLabels: true,
                showProteins: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'passiveTransport': {
            name: 'Passive Transport',
            category: 'Cell Membrane & Transport',
            description: 'Diffusion, osmosis, and facilitated diffusion',
            dataRequired: [],
            usage: 'Best for transport mechanisms',
            examples: ['Diffusion', 'Osmosis', 'No ATP required'],
            defaultOptions: {
                title: 'Passive Transport Mechanisms',
                showLabels: true,
                type: 'all', // 'diffusion', 'osmosis', 'facilitated', 'all'
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'activeTransport': {
            name: 'Active Transport',
            category: 'Cell Membrane & Transport',
            description: 'Sodium-potassium pump and other active transport',
            dataRequired: [],
            usage: 'Best for ATP-dependent transport',
            examples: ['Na+/K+ pump', 'ATP required', 'Against gradient'],
            defaultOptions: {
                title: 'Active Transport',
                showLabels: true,
                showATP: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'endocytosis': {
            name: 'Endocytosis',
            category: 'Cell Membrane & Transport',
            description: 'Phagocytosis, pinocytosis, and receptor-mediated',
            dataRequired: [],
            usage: 'Best for bulk transport education',
            examples: ['Cell eating', 'Vesicle formation', 'Bulk transport'],
            defaultOptions: {
                title: 'Endocytosis',
                type: 'all', // 'phagocytosis', 'pinocytosis', 'receptor', 'all'
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'exocytosis': {
            name: 'Exocytosis',
            category: 'Cell Membrane & Transport',
            description: 'Vesicle fusion and secretion',
            dataRequired: [],
            usage: 'Best for secretion education',
            examples: ['Secretion', 'Vesicle fusion', 'Neurotransmitter release'],
            defaultOptions: {
                title: 'Exocytosis',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 4. CELLULAR RESPIRATION =====

        'cellularRespiration': {
            name: 'Cellular Respiration Overview',
            category: 'Cellular Respiration',
            description: 'Complete cellular respiration pathway',
            dataRequired: [],
            usage: 'Best for energy production overview',
            examples: ['ATP production', 'Glucose breakdown', 'Aerobic respiration'],
            defaultOptions: {
                title: 'Cellular Respiration',
                showLabels: true,
                showATPCount: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'glycolysis': {
            name: 'Glycolysis',
            category: 'Cellular Respiration',
            description: 'Glucose to pyruvate pathway',
            dataRequired: [],
            usage: 'Best for glycolysis education',
            examples: ['Glucose breakdown', 'Cytoplasm', '2 ATP net'],
            defaultOptions: {
                title: 'Glycolysis',
                showLabels: true,
                showSteps: true,
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'krebs': {
            name: 'Krebs Cycle (Citric Acid Cycle)',
            category: 'Cellular Respiration',
            description: 'Complete Krebs cycle',
            dataRequired: [],
            usage: 'Best for Krebs cycle education',
            examples: ['Citric acid cycle', 'Acetyl-CoA', 'NADH production'],
            defaultOptions: {
                title: 'Krebs Cycle',
                showLabels: true,
                showEnzymes: false,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'electronTransportChain': {
            name: 'Electron Transport Chain',
            category: 'Cellular Respiration',
            description: 'ETC and ATP synthase',
            dataRequired: [],
            usage: 'Best for oxidative phosphorylation',
            examples: ['ETC', 'ATP synthase', 'Chemiosmosis'],
            defaultOptions: {
                title: 'Electron Transport Chain',
                showLabels: true,
                showProtonGradient: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 5. PHOTOSYNTHESIS =====

        'photosynthesisOverview': {
            name: 'Photosynthesis Overview',
            category: 'Photosynthesis',
            description: 'Complete photosynthesis process',
            dataRequired: [],
            usage: 'Best for photosynthesis overview',
            examples: ['Light and dark reactions', 'Glucose production', 'Chloroplast'],
            defaultOptions: {
                title: 'Photosynthesis Overview',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'lightReactions': {
            name: 'Light Reactions',
            category: 'Photosynthesis',
            description: 'Light-dependent reactions in thylakoid',
            dataRequired: [],
            usage: 'Best for light reactions education',
            examples: ['Photosystem I and II', 'Electron transport', 'ATP production'],
            defaultOptions: {
                title: 'Light Reactions',
                showLabels: true,
                showElectronFlow: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'calvinCycle': {
            name: 'Calvin Cycle',
            category: 'Photosynthesis',
            description: 'Light-independent reactions (Calvin cycle)',
            dataRequired: [],
            usage: 'Best for carbon fixation education',
            examples: ['Dark reactions', 'Carbon fixation', 'G3P production'],
            defaultOptions: {
                title: 'Calvin Cycle',
                showLabels: true,
                showSteps: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 6. CELL DIVISION =====

        'mitosis': {
            name: 'Mitosis',
            category: 'Cell Division',
            description: 'Complete mitosis phases',
            dataRequired: [],
            usage: 'Best for cell division education',
            examples: ['Cell division', 'PMAT', 'Diploid cells'],
            defaultOptions: {
                title: 'Mitosis',
                showLabels: true,
                phase: 'all', // 'prophase', 'metaphase', 'anaphase', 'telophase', 'all'
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'meiosis': {
            name: 'Meiosis',
            category: 'Cell Division',
            description: 'Meiosis I and II',
            dataRequired: [],
            usage: 'Best for sexual reproduction education',
            examples: ['Gamete formation', 'Haploid cells', 'Genetic variation'],
            defaultOptions: {
                title: 'Meiosis',
                showLabels: true,
                division: 'both', // 'I', 'II', 'both'
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'cellCycle': {
            name: 'Cell Cycle',
            category: 'Cell Division',
            description: 'Complete cell cycle with checkpoints',
            dataRequired: [],
            usage: 'Best for cell cycle regulation',
            examples: ['Interphase', 'G1 S G2', 'Mitosis', 'Cytokinesis'],
            defaultOptions: {
                title: 'Cell Cycle',
                showLabels: true,
                showCheckpoints: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 7. DNA & PROTEIN SYNTHESIS =====

        'dnaStructure': {
            name: 'DNA Structure',
            category: 'DNA & Protein Synthesis',
            description: 'Double helix structure',
            dataRequired: [],
            usage: 'Best for DNA structure education',
            examples: ['Double helix', 'Base pairs', 'Sugar-phosphate backbone'],
            defaultOptions: {
                title: 'DNA Double Helix',
                showLabels: true,
                showBasePairs: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'dnaReplication': {
            name: 'DNA Replication',
            category: 'DNA & Protein Synthesis',
            description: 'Semi-conservative replication',
            dataRequired: [],
            usage: 'Best for DNA replication education',
            examples: ['DNA copying', 'Leading strand', 'Lagging strand'],
            defaultOptions: {
                title: 'DNA Replication',
                showLabels: true,
                showEnzymes: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'transcription': {
            name: 'Transcription',
            category: 'DNA & Protein Synthesis',
            description: 'DNA to RNA synthesis',
            dataRequired: [],
            usage: 'Best for transcription education',
            examples: ['mRNA synthesis', 'RNA polymerase', 'Gene expression'],
            defaultOptions: {
                title: 'Transcription',
                showLabels: true,
                showRNAPolymerase: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'translation': {
            name: 'Translation',
            category: 'DNA & Protein Synthesis',
            description: 'Protein synthesis at ribosome',
            dataRequired: [],
            usage: 'Best for translation education',
            examples: ['Protein synthesis', 'Ribosome', 'tRNA', 'Amino acids'],
            defaultOptions: {
                title: 'Translation',
                showLabels: true,
                showAnticodon: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'centralDogma': {
            name: 'Central Dogma',
            category: 'DNA & Protein Synthesis',
            description: 'DNA → RNA → Protein',
            dataRequired: [],
            usage: 'Best for molecular biology overview',
            examples: ['Gene expression', 'Information flow', 'Molecular biology'],
            defaultOptions: {
                title: 'Central Dogma of Molecular Biology',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'geneticCode': {
            name: 'Genetic Code Table',
            category: 'DNA & Protein Synthesis',
            description: 'Codon-amino acid table',
            dataRequired: [],
            usage: 'Best for understanding codons',
            examples: ['Codon table', 'Amino acids', 'Translation'],
            defaultOptions: {
                title: 'Genetic Code',
                showLabels: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 8. CELL SIGNALING =====

        'cellSignaling': {
            name: 'Cell Signaling Overview',
            category: 'Cell Signaling',
            description: 'Signal transduction pathway',
            dataRequired: [],
            usage: 'Best for cell communication',
            examples: ['Signal transduction', 'Receptors', 'Second messengers'],
            defaultOptions: {
                title: 'Cell Signaling',
                showLabels: true,
                type: 'overview', // 'overview', 'gpcr', 'rtk'
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'receptorTypes': {
            name: 'Receptor Types',
            category: 'Cell Signaling',
            description: 'Different receptor mechanisms',
            dataRequired: [],
            usage: 'Best for receptor biology',
            examples: ['GPCR', 'RTK', 'Ion channels', 'Intracellular receptors'],
            defaultOptions: {
                title: 'Cell Surface Receptors',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 9. CYTOSKELETON =====

        'cytoskeleton': {
            name: 'Cytoskeleton',
            category: 'Cytoskeleton',
            description: 'Microfilaments, intermediate filaments, microtubules',
            dataRequired: [],
            usage: 'Best for cell structure and movement',
            examples: ['Cell shape', 'Movement', 'Structural support'],
            defaultOptions: {
                title: 'Cytoskeleton',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'microfilaments': {
            name: 'Microfilaments (Actin)',
            category: 'Cytoskeleton',
            description: 'Actin filament structure',
            dataRequired: [],
            usage: 'Best for muscle contraction and cell movement',
            examples: ['Actin', 'Cell crawling', 'Muscle'],
            defaultOptions: {
                title: 'Microfilaments',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'microtubules': {
            name: 'Microtubules',
            category: 'Cytoskeleton',
            description: 'Tubulin structure and function',
            dataRequired: [],
            usage: 'Best for cell division and transport',
            examples: ['Tubulin', 'Spindle fibers', 'Cilia'],
            defaultOptions: {
                title: 'Microtubules',
                showLabels: true,
                showDynamics: false,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 10. SPECIALIZED CELLS =====

        'neuron': {
            name: 'Neuron (Nerve Cell)',
            category: 'Specialized Cells',
            description: 'Neuron structure with axon and dendrites',
            dataRequired: [],
            usage: 'Best for nervous system',
            examples: ['Nerve cell', 'Action potential', 'Synapses'],
            defaultOptions: {
                title: 'Neuron Structure',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'muscleCell': {
            name: 'Muscle Cell',
            category: 'Specialized Cells',
            description: 'Muscle fiber structure',
            dataRequired: [],
            usage: 'Best for muscle physiology',
            examples: ['Muscle fiber', 'Sarcomere', 'Contraction'],
            defaultOptions: {
                title: 'Muscle Cell (Myocyte)',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'redBloodCell': {
            name: 'Red Blood Cell',
            category: 'Specialized Cells',
            description: 'Erythrocyte structure',
            dataRequired: [],
            usage: 'Best for blood physiology',
            examples: ['Erythrocyte', 'Hemoglobin', 'Oxygen transport'],
            defaultOptions: {
                title: 'Red Blood Cell',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'whiteBloodCell': {
            name: 'White Blood Cell',
            category: 'Specialized Cells',
            description: 'Leukocyte structure',
            dataRequired: [],
            usage: 'Best for immune system',
            examples: ['Leukocyte', 'Immune cell', 'Phagocyte'],
            defaultOptions: {
                title: 'White Blood Cell',
                type: 'neutrophil', // 'neutrophil', 'lymphocyte', 'monocyte'
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'spermCell': {
            name: 'Sperm Cell',
            category: 'Specialized Cells',
            description: 'Spermatozoon structure',
            dataRequired: [],
            usage: 'Best for reproduction',
            examples: ['Gamete', 'Reproduction', 'Fertilization'],
            defaultOptions: {
                title: 'Sperm Cell',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'eggCell': {
            name: 'Egg Cell (Ovum)',
            category: 'Specialized Cells',
            description: 'Oocyte structure',
            dataRequired: [],
            usage: 'Best for reproduction',
            examples: ['Gamete', 'Ovum', 'Fertilization'],
            defaultOptions: {
                title: 'Egg Cell (Ovum)',
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

    static printSummary() {
        console.log('=== CELL BIOLOGY DIAGRAMS REGISTRY SUMMARY ===');
        console.log(`Total Diagrams: ${this.getTotalDiagramCount()}`);
        console.log('\nBy Category:');
        const stats = this.getDiagramStats();
        Object.entries(stats).forEach(([category, data]) => {
            console.log(`  ${category}: ${data.count} diagrams`);
        });
    }
}

// ============================================================================
// CELL BIOLOGY SHAPES LIBRARY
// ============================================================================
class CellBiologyShapes {
    
    // ===== CELL TYPES =====
    
    static drawAnimalCell(ctx, x, y, size) {
        ctx.save();
        ctx.translate(x, y);
        
        // Cell membrane (plasma membrane)
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size / 2);
        gradient.addColorStop(0, '#FFF5E6');
        gradient.addColorStop(0.7, '#FFE6CC');
        gradient.addColorStop(1, '#FFD9B3');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Cell membrane outline
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Cytoplasm texture
        ctx.fillStyle = 'rgba(255, 230, 204, 0.3)';
        for(let i = 0; i < 30; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * size * 0.4;
            const cx = Math.cos(angle) * radius;
            const cy = Math.sin(angle) * radius;
            ctx.beginPath();
            ctx.arc(cx, cy, 2, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Nucleus (large central organelle)
        this.drawNucleus(ctx, 0, 0, size * 0.3);
        
        // Mitochondria (multiple)
        this.drawMitochondrion(ctx, -size * 0.25, -size * 0.15, size * 0.15, size * 0.08);
        this.drawMitochondrion(ctx, size * 0.2, -size * 0.2, size * 0.15, size * 0.08);
        this.drawMitochondrion(ctx, -size * 0.15, size * 0.25, size * 0.15, size * 0.08);
        
        // Endoplasmic Reticulum (rough)
        // Endoplasmic Reticulum (rough)
        this.drawEndoplasmicReticulum(ctx, size * 0.15, 0, size * 0.25, size * 0.15, 'rough');
        
        // Golgi Apparatus
        this.drawGolgiApparatus(ctx, -size * 0.3, size * 0.05, size * 0.18, size * 0.12);
        
        // Lysosomes (small circles)
        this.drawLysosome(ctx, size * 0.3, size * 0.15, size * 0.05);
        this.drawLysosome(ctx, -size * 0.35, -size * 0.25, size * 0.05);
        this.drawLysosome(ctx, size * 0.15, size * 0.3, size * 0.05);
        
        // Ribosomes (tiny dots)
        ctx.fillStyle = '#8B4513';
        for(let i = 0; i < 40; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * size * 0.45;
            const rx = Math.cos(angle) * radius;
            const ry = Math.sin(angle) * radius;
            // Avoid nucleus area
            if(Math.sqrt(rx*rx + ry*ry) > size * 0.18) {
                ctx.beginPath();
                ctx.arc(rx, ry, 1.5, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        // Centrioles (near nucleus)
        this.drawCentriole(ctx, size * 0.2, size * 0.08, size * 0.04);
        
        ctx.restore();
    }
    
    static drawPlantCell(ctx, x, y, size) {
        ctx.save();
        ctx.translate(x, y);
        
        // Cell wall (rigid outer layer)
        ctx.strokeStyle = '#654321';
        ctx.lineWidth = 5;
        ctx.fillStyle = '#F5F5DC';
        ctx.fillRect(-size / 2, -size / 2, size, size);
        ctx.strokeRect(-size / 2, -size / 2, size, size);
        
        // Cell membrane (inside cell wall)
        ctx.strokeStyle = '#8B7355';
        ctx.lineWidth = 2;
        ctx.strokeRect(-size / 2 + 5, -size / 2 + 5, size - 10, size - 10);
        
        // Cytoplasm
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size / 2);
        gradient.addColorStop(0, '#E8F5E9');
        gradient.addColorStop(1, '#C8E6C9');
        ctx.fillStyle = gradient;
        ctx.fillRect(-size / 2 + 7, -size / 2 + 7, size - 14, size - 14);
        
        // Central Vacuole (large)
        this.drawVacuole(ctx, 0, size * 0.1, size * 0.5, size * 0.5);
        
        // Nucleus (pushed to side by vacuole)
        this.drawNucleus(ctx, -size * 0.25, -size * 0.2, size * 0.18);
        
        // Chloroplasts (multiple, green)
        this.drawChloroplast(ctx, -size * 0.3, size * 0.05, size * 0.12, size * 0.08);
        this.drawChloroplast(ctx, size * 0.25, -size * 0.15, size * 0.12, size * 0.08);
        this.drawChloroplast(ctx, size * 0.15, size * 0.25, size * 0.12, size * 0.08);
        this.drawChloroplast(ctx, -size * 0.15, size * 0.3, size * 0.12, size * 0.08);
        
        // Mitochondria (fewer than animal cells)
        this.drawMitochondrion(ctx, size * 0.3, 0, size * 0.12, size * 0.06);
        this.drawMitochondrion(ctx, -size * 0.35, -size * 0.35, size * 0.12, size * 0.06);
        
        // Golgi Apparatus
        this.drawGolgiApparatus(ctx, size * 0.1, -size * 0.3, size * 0.15, size * 0.1);
        
        // Endoplasmic Reticulum
        this.drawEndoplasmicReticulum(ctx, -size * 0.15, -size * 0.35, size * 0.2, size * 0.12, 'rough');
        
        // Plasmodesmata (connections through cell wall)
        ctx.strokeStyle = '#8B7355';
        ctx.lineWidth = 2;
        for(let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const x1 = Math.cos(angle) * (size / 2 - 5);
            const y1 = Math.sin(angle) * (size / 2 - 5);
            const x2 = Math.cos(angle) * (size / 2 + 5);
            const y2 = Math.sin(angle) * (size / 2 + 5);
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
        
        ctx.restore();
    }
    
    static drawProkaryoticCell(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Cell shape (rod-shaped bacteria)
        const gradient = ctx.createLinearGradient(-width / 2, 0, width / 2, 0);
        gradient.addColorStop(0, '#E1F5FE');
        gradient.addColorStop(0.5, '#B3E5FC');
        gradient.addColorStop(1, '#81D4FA');
        ctx.fillStyle = gradient;
        
        ctx.beginPath();
        ctx.moveTo(-width / 2 + height / 2, -height / 2);
        ctx.lineTo(width / 2 - height / 2, -height / 2);
        ctx.arc(width / 2 - height / 2, 0, height / 2, -Math.PI / 2, Math.PI / 2);
        ctx.lineTo(-width / 2 + height / 2, height / 2);
        ctx.arc(-width / 2 + height / 2, 0, height / 2, Math.PI / 2, -Math.PI / 2);
        ctx.closePath();
        ctx.fill();
        
        // Cell wall (thick outer layer)
        ctx.strokeStyle = '#1976D2';
        ctx.lineWidth = 4;
        ctx.stroke();
        
        // Capsule (outermost layer)
        ctx.strokeStyle = 'rgba(25, 118, 210, 0.3)';
        ctx.lineWidth = 8;
        ctx.stroke();
        
        // Cytoplasm texture
        ctx.fillStyle = 'rgba(129, 212, 250, 0.3)';
        for(let i = 0; i < 30; i++) {
            const cx = (Math.random() - 0.5) * width * 0.8;
            const cy = (Math.random() - 0.5) * height * 0.6;
            ctx.beginPath();
            ctx.arc(cx, cy, 1, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Nucleoid region (DNA, not membrane-bound)
        ctx.fillStyle = 'rgba(255, 193, 7, 0.4)';
        ctx.strokeStyle = '#FFA000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(0, 0, width * 0.25, height * 0.35, 0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // DNA strands in nucleoid
        ctx.strokeStyle = '#F57C00';
        ctx.lineWidth = 1.5;
        for(let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.arc(Math.random() * width * 0.2 - width * 0.1, 
                   Math.random() * height * 0.3 - height * 0.15, 
                   width * 0.08, 0, Math.PI * 2);
            ctx.stroke();
        }
        
        // Ribosomes (70S, smaller than eukaryotic)
        ctx.fillStyle = '#6D4C41';
        for(let i = 0; i < 60; i++) {
            const rx = (Math.random() - 0.5) * width * 0.7;
            const ry = (Math.random() - 0.5) * height * 0.5;
            ctx.beginPath();
            ctx.arc(rx, ry, 1, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Plasmids (small circular DNA)
        ctx.strokeStyle = '#FF6F00';
        ctx.lineWidth = 1.5;
        for(let i = 0; i < 3; i++) {
            const px = (Math.random() - 0.5) * width * 0.4;
            const py = (Math.random() - 0.5) * height * 0.4;
            ctx.beginPath();
            ctx.arc(px, py, 8, 0, Math.PI * 2);
            ctx.stroke();
        }
        
        // Flagellum (tail for movement)
        ctx.strokeStyle = '#0D47A1';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(width / 2, 0);
        let fx = width / 2;
        let fy = 0;
        for(let i = 0; i < 10; i++) {
            fx += width * 0.15;
            fy = Math.sin(i * 0.8) * height * 0.3;
            ctx.lineTo(fx, fy);
        }
        ctx.stroke();
        
        // Pili (hair-like structures)
        ctx.strokeStyle = '#1565C0';
        ctx.lineWidth = 1;
        for(let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const startX = Math.cos(angle) * width * 0.35;
            const startY = Math.sin(angle) * height * 0.45;
            const endX = Math.cos(angle) * (width * 0.35 + 30);
            const endY = Math.sin(angle) * (height * 0.45 + 20);
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
        }
        
        ctx.restore();
    }
    
    // ===== ORGANELLES =====
    
    static drawNucleus(ctx, x, y, size) {
        ctx.save();
        ctx.translate(x, y);
        
        // Nuclear envelope (double membrane)
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
        gradient.addColorStop(0, '#E1BEE7');
        gradient.addColorStop(0.7, '#CE93D8');
        gradient.addColorStop(1, '#BA68C8');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Nuclear envelope outline
        ctx.strokeStyle = '#7B1FA2';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Inner membrane
        ctx.strokeStyle = '#8E24AA';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.95, 0, Math.PI * 2);
        ctx.stroke();
        
        // Nuclear pores
        ctx.fillStyle = '#4A148C';
        const poreCount = 12;
        for(let i = 0; i < poreCount; i++) {
            const angle = (i / poreCount) * Math.PI * 2;
            const px = Math.cos(angle) * size * 0.9;
            const py = Math.sin(angle) * size * 0.9;
            ctx.beginPath();
            ctx.arc(px, py, 3, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Chromatin (DNA + proteins)
        ctx.strokeStyle = '#6A1B9A';
        ctx.lineWidth = 2;
        for(let i = 0; i < 8; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * size * 0.6;
            const cx = Math.cos(angle) * radius;
            const cy = Math.sin(angle) * radius;
            ctx.beginPath();
            ctx.arc(cx, cy, size * 0.15, 0, Math.PI * 2);
            ctx.stroke();
        }
        
        // Nucleolus (dark spot)
        ctx.fillStyle = '#4A148C';
        ctx.beginPath();
        ctx.arc(size * 0.2, -size * 0.2, size * 0.25, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
    }
    
    static drawMitochondrion(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Outer membrane
        const gradient = ctx.createLinearGradient(-width / 2, 0, width / 2, 0);
        gradient.addColorStop(0, '#FFCCBC');
        gradient.addColorStop(0.5, '#FF8A65');
        gradient.addColorStop(1, '#FF7043');
        ctx.fillStyle = gradient;
        
        ctx.beginPath();
        ctx.ellipse(0, 0, width / 2, height / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = '#D84315';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Inner membrane (cristae - folded)
        ctx.strokeStyle = '#BF360C';
        ctx.lineWidth = 1.5;
        const cristeCount = 7;
        for(let i = 0; i < cristeCount; i++) {
            const yPos = -height * 0.35 + (i / (cristeCount - 1)) * height * 0.7;
            ctx.beginPath();
            ctx.moveTo(-width * 0.4, yPos);
            ctx.quadraticCurveTo(-width * 0.2, yPos + height * 0.08, 0, yPos);
            ctx.stroke();
        }
        
        // Matrix (inner space)
        ctx.fillStyle = 'rgba(191, 54, 12, 0.2)';
        for(let i = 0; i < 15; i++) {
            const mx = (Math.random() - 0.5) * width * 0.6;
            const my = (Math.random() - 0.5) * height * 0.6;
            ctx.beginPath();
            ctx.arc(mx, my, 1, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Mitochondrial DNA
        ctx.strokeStyle = '#FF6F00';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(width * 0.15, 0, 6, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.restore();
    }
    
    static drawChloroplast(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Outer membrane
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, width / 2);
        gradient.addColorStop(0, '#C5E1A5');
        gradient.addColorStop(0.5, '#9CCC65');
        gradient.addColorStop(1, '#7CB342');
        ctx.fillStyle = gradient;
        
        ctx.beginPath();
        ctx.ellipse(0, 0, width / 2, height / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = '#558B2F';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Stroma (fluid inside)
        ctx.fillStyle = 'rgba(85, 139, 47, 0.2)';
        ctx.beginPath();
        ctx.ellipse(0, 0, width * 0.45, height * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Thylakoids (stacked discs - grana)
        ctx.fillStyle = '#33691E';
        ctx.strokeStyle = '#1B5E20';
        ctx.lineWidth = 1;
        
        // Draw grana stacks
        const granaCount = 5;
        for(let g = 0; g < granaCount; g++) {
            const gx = (Math.random() - 0.5) * width * 0.6;
            const gy = (Math.random() - 0.5) * height * 0.6;
            const stackHeight = 5 + Math.floor(Math.random() * 4);
            
            for(let i = 0; i < stackHeight; i++) {
                ctx.beginPath();
                ctx.ellipse(gx, gy - i * 3, 12, 3, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            }
        }
        
        // DNA
        ctx.strokeStyle = '#FF6F00';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(0, height * 0.25, 5, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.restore();
    }
    
    static drawEndoplasmicReticulum(ctx, x, y, width, height, type = 'rough') {
        ctx.save();
        ctx.translate(x, y);
        
        // Membrane system (folded sheets)
        ctx.strokeStyle = type === 'rough' ? '#8D6E63' : '#BCAAA4';
        ctx.fillStyle = type === 'rough' ? 'rgba(141, 110, 99, 0.3)' : 'rgba(188, 170, 164, 0.3)';
        ctx.lineWidth = 2;
        
        // Draw interconnected tubules
        const layers = 6;
        for(let i = 0; i < layers; i++) {
            const yPos = -height / 2 + (i / (layers - 1)) * height;
            ctx.beginPath();
            ctx.moveTo(-width / 2, yPos);
            
            for(let j = 0; j < 5; j++) {
                const xPos = -width / 2 + (j / 4) * width;
                const yOffset = Math.sin(j * 1.2 + i * 0.5) * 8;
                ctx.lineTo(xPos, yPos + yOffset);
            }
            ctx.stroke();
            
            // Fill between layers
            if(i < layers - 1) {
                ctx.beginPath();
                ctx.moveTo(-width / 2, yPos);
                const nextY = -height / 2 + ((i + 1) / (layers - 1)) * height;
                ctx.lineTo(-width / 2, nextY);
                ctx.lineTo(width / 2, nextY);
                ctx.lineTo(width / 2, yPos);
                ctx.closePath();
                ctx.fill();
            }
        }
        
        // If rough ER, add ribosomes
        if(type === 'rough') {
            ctx.fillStyle = '#4E342E';
            for(let i = 0; i < 40; i++) {
                const rx = (Math.random() - 0.5) * width * 0.9;
                const ry = (Math.random() - 0.5) * height * 0.9;
                ctx.beginPath();
                ctx.arc(rx, ry, 1.5, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        ctx.restore();
    }
    
    static drawGolgiApparatus(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Stacked cisternae (flattened sacs)
        const stackCount = 6;
        const gradient = ctx.createLinearGradient(0, -height / 2, 0, height / 2);
        gradient.addColorStop(0, '#FFE082');
        gradient.addColorStop(0.5, '#FFD54F');
        gradient.addColorStop(1, '#FFCA28');
        
        for(let i = 0; i < stackCount; i++) {
            const yPos = -height / 2 + (i / (stackCount - 1)) * height;
            const curveAmount = (i - stackCount / 2) * 5;
            
            // Cisterna
            ctx.fillStyle = gradient;
            ctx.strokeStyle = '#F57F17';
            ctx.lineWidth = 1.5;
            
            ctx.beginPath();
            ctx.moveTo(-width / 2, yPos);
            ctx.quadraticCurveTo(0, yPos + curveAmount, width / 2, yPos);
            ctx.quadraticCurveTo(0, yPos + curveAmount + 4, -width / 2, yPos);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
        
        // Vesicles (transport vesicles)
        ctx.fillStyle = '#FFF59D';
        ctx.strokeStyle = '#F9A825';
        ctx.lineWidth = 1;
        
        // Cis face vesicles (receiving)
        for(let i = 0; i < 3; i++) {
            const vx = -width / 2 - 10 - i * 8;
            const vy = -height / 2 + Math.random() * height * 0.3;
            ctx.beginPath();
            ctx.arc(vx, vy, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        
        // Trans face vesicles (shipping)
        for(let i = 0; i < 4; i++) {
            const vx = width / 2 + 10 + i * 8;
            const vy = height / 2 - Math.random() * height * 0.3;
            ctx.beginPath();
            ctx.arc(vx, vy, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        
        ctx.restore();
    }
    
    static drawRibosome(ctx, x, y, size) {
        ctx.save();
        ctx.translate(x, y);
        
        // Large subunit (60S in eukaryotes)
        ctx.fillStyle = '#8D6E63';
        ctx.strokeStyle = '#5D4037';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(0, -size * 0.15, size * 0.6, size * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Small subunit (40S in eukaryotes)
        ctx.fillStyle = '#A1887F';
        ctx.beginPath();
        ctx.ellipse(0, size * 0.25, size * 0.5, size * 0.35, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // mRNA thread (if showing translation)
        ctx.strokeStyle = '#FF6F00';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-size * 0.8, 0);
        ctx.lineTo(size * 0.8, 0);
        ctx.stroke();
        
        // tRNA in A and P sites
        ctx.fillStyle = '#4CAF50';
        ctx.strokeStyle = '#2E7D32';
        ctx.lineWidth = 1;
        
        // P site tRNA
        ctx.beginPath();
        ctx.moveTo(-size * 0.2, 0);
        ctx.lineTo(-size * 0.2, -size * 0.4);
        ctx.lineTo(-size * 0.3, -size * 0.5);
        ctx.moveTo(-size * 0.2, -size * 0.4);
        ctx.lineTo(-size * 0.1, -size * 0.5);
        ctx.stroke();
        
        // A site tRNA
        ctx.beginPath();
        ctx.moveTo(size * 0.2, 0);
        ctx.lineTo(size * 0.2, -size * 0.35);
        ctx.lineTo(size * 0.1, -size * 0.45);
        ctx.moveTo(size * 0.2, -size * 0.35);
        ctx.lineTo(size * 0.3, -size * 0.45);
        ctx.stroke();
        
        ctx.restore();
    }
    
    static drawLysosome(ctx, x, y, size) {
        ctx.save();
        ctx.translate(x, y);
        
        // Membrane
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
        gradient.addColorStop(0, '#FFE0B2');
        gradient.addColorStop(0.7, '#FFCC80');
        gradient.addColorStop(1, '#FFB74D');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = '#F57C00';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Digestive enzymes (represented as smaller circles)
        ctx.fillStyle = '#E65100';
        for(let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const radius = size * 0.4;
            const ex = Math.cos(angle) * radius;
            const ey = Math.sin(angle) * radius;
            ctx.beginPath();
            ctx.arc(ex, ey, size * 0.15, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.restore();
    }
    
    static drawVacuole(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Tonoplast (vacuole membrane)
        ctx.strokeStyle = '#7CB342';
        ctx.lineWidth = 2;
        ctx.fillStyle = 'rgba(200, 230, 201, 0.6)';
        
        ctx.beginPath();
        ctx.ellipse(0, 0, width / 2, height / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Central sap (water + dissolved substances)
        ctx.fillStyle = 'rgba(165, 214, 167, 0.4)';
        for(let i = 0; i < 20; i++) {
            const vx = (Math.random() - 0.5) * width * 0.8;
            const vy = (Math.random() - 0.5) * height * 0.8;
            ctx.beginPath();
            ctx.arc(vx, vy, 2, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.restore();
    }
    
    static drawCentriole(ctx, x, y, size) {
        ctx.save();
        ctx.translate(x, y);
        
        // Two centrioles perpendicular to each other
        ctx.strokeStyle = '#6A1B9A';
        ctx.fillStyle = 'rgba(106, 27, 154, 0.3)';
        ctx.lineWidth = 1.5;
        
        // First centriole (horizontal view)
        ctx.beginPath();
        ctx.ellipse(0, 0, size, size * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Microtubule triplets (9 triplets)
        ctx.strokeStyle = '#4A148C';
        ctx.lineWidth = 2;
        for(let i = 0; i < 9; i++) {
            const angle = (i / 9) * Math.PI * 2;
            const x1 = Math.cos(angle) * size * 0.7;
            const y1 = Math.sin(angle) * size * 0.3;
            const x2 = Math.cos(angle) * size * 0.9;
            const y2 = Math.sin(angle) * size * 0.38;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            
            // Draw triplet structure
            for(let j = 0; j < 3; j++) {
                ctx.beginPath();
                ctx.arc(x2 + Math.cos(angle) * j * 2, y2 + Math.sin(angle) * j * 2, 1, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        ctx.restore();
    }
    
    // ===== CELL MEMBRANE =====
    
    static drawCellMembrane(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Phospholipid bilayer
        const headSize = 8;
        const tailLength = height * 0.4;
        const phospholipidSpacing = 20;
        
        // Draw both layers of phospholipids
        for(let layer = 0; layer < 2; layer++) {
            const yBase = layer === 0 ? -height / 4 : height / 4;
            const direction = layer === 0 ? 1 : -1;
            for(let i = 0; i < width / phospholipidSpacing; i++) {
                const xPos = -width / 2 + i * phospholipidSpacing;
                
                // Phospholipid head (hydrophilic)
                ctx.fillStyle = layer === 0 ? '#FF6B6B' : '#4ECDC4';
                ctx.beginPath();
                ctx.arc(xPos, yBase, headSize, 0, Math.PI * 2);
                ctx.fill();
                
                // Fatty acid tails (hydrophobic)
                ctx.strokeStyle = '#F4A261';
                ctx.lineWidth = 3;
                
                // Two tails per phospholipid
                for(let tail = 0; tail < 2; tail++) {
                    const tailOffset = tail === 0 ? -4 : 4;
                    ctx.beginPath();
                    ctx.moveTo(xPos + tailOffset, yBase + direction * headSize);
                    
                    // Wavy tail
                    for(let t = 0; t < 5; t++) {
                        const ty = yBase + direction * (headSize + (t / 4) * tailLength);
                        const tx = xPos + tailOffset + Math.sin(t * 1.5) * 3;
                        ctx.lineTo(tx, ty);
                    }
                    ctx.stroke();
                }
            }
        }
        
        // Cholesterol molecules (scattered)
        ctx.fillStyle = '#E76F51';
        for(let i = 0; i < 8; i++) {
            const cx = (Math.random() - 0.5) * width * 0.9;
            ctx.beginPath();
            ctx.ellipse(cx, 0, 6, 20, Math.random() * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Integral proteins (transmembrane)
        ctx.fillStyle = '#2A9D8F';
        for(let i = 0; i < 4; i++) {
            const px = -width / 2 + (i + 1) * (width / 5);
            
            // Protein spans both layers
            ctx.beginPath();
            ctx.roundRect(px - 15, -height * 0.35, 30, height * 0.7, 8);
            ctx.fill();
            
            // Alpha helix texture
            ctx.strokeStyle = '#1A6B5F';
            ctx.lineWidth = 1;
            for(let j = 0; j < 7; j++) {
                const py = -height * 0.3 + j * 10;
                ctx.beginPath();
                ctx.moveTo(px - 10, py);
                ctx.lineTo(px + 10, py);
                ctx.stroke();
            }
        }
        
        // Peripheral proteins (surface)
        ctx.fillStyle = '#90BE6D';
        // Top surface
        ctx.beginPath();
        ctx.ellipse(-width * 0.3, -height * 0.4, 25, 15, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Bottom surface
        ctx.beginPath();
        ctx.ellipse(width * 0.3, height * 0.4, 25, 15, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Glycoproteins (carbohydrate chains on outside)
        ctx.strokeStyle = '#F94144';
        ctx.lineWidth = 2;
        for(let i = 0; i < 3; i++) {
            const gx = -width / 2 + (i + 1) * (width / 4);
            
            // Chain extending outward
            ctx.beginPath();
            ctx.moveTo(gx, -height * 0.35);
            ctx.lineTo(gx - 10, -height * 0.5);
            ctx.lineTo(gx + 5, -height * 0.6);
            ctx.lineTo(gx - 5, -height * 0.7);
            ctx.stroke();
            
            // Carbohydrate groups (circles)
            ctx.fillStyle = '#F94144';
            ctx.beginPath();
            ctx.arc(gx, -height * 0.35, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(gx - 10, -height * 0.5, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(gx + 5, -height * 0.6, 4, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Channel proteins (pores)
        ctx.fillStyle = 'rgba(42, 157, 143, 0.7)';
        for(let i = 0; i < 2; i++) {
            const chx = -width / 4 + i * (width / 2);
            ctx.beginPath();
            ctx.ellipse(chx, 0, 8, height * 0.3, 0, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.restore();
    }
    
    // ===== TRANSPORT MECHANISMS =====
    
    static drawDiffusion(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Membrane
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(0, -height / 2);
        ctx.lineTo(0, height / 2);
        ctx.stroke();
        
        // High concentration side (left)
        ctx.fillStyle = '#E74C3C';
        for(let i = 0; i < 30; i++) {
            const px = -width / 2 + Math.random() * (width / 2 - 20);
            const py = (Math.random() - 0.5) * height * 0.8;
            ctx.beginPath();
            ctx.arc(px, py, 6, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Low concentration side (right)
        for(let i = 0; i < 10; i++) {
            const px = 20 + Math.random() * (width / 2 - 20);
            const py = (Math.random() - 0.5) * height * 0.8;
            ctx.beginPath();
            ctx.arc(px, py, 6, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Arrows showing movement
        ctx.strokeStyle = '#E74C3C';
        ctx.fillStyle = '#E74C3C';
        ctx.lineWidth = 2;
        for(let i = 0; i < 5; i++) {
            const ay = (i - 2) * (height / 6);
            this.drawArrow(ctx, -30, ay, 30, ay, 10);
        }
        
        ctx.restore();
    }
    
    static drawSodiumPotassiumPump(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Membrane
        ctx.fillStyle = '#D7CCC8';
        ctx.fillRect(-width / 2, -height * 0.15, width, height * 0.3);
        
        // Pump protein (changes shape)
        ctx.fillStyle = '#5C6BC0';
        ctx.strokeStyle = '#3F51B5';
        ctx.lineWidth = 2;
        
        // Left conformation (3 Na+ binding)
        ctx.beginPath();
        ctx.moveTo(-width * 0.3, -height * 0.15);
        ctx.lineTo(-width * 0.3, -height * 0.4);
        ctx.quadraticCurveTo(-width * 0.15, -height * 0.5, 0, -height * 0.4);
        ctx.lineTo(0, -height * 0.15);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Right conformation (2 K+ binding)
        ctx.beginPath();
        ctx.moveTo(0, height * 0.15);
        ctx.lineTo(0, height * 0.4);
        ctx.quadraticCurveTo(width * 0.15, height * 0.5, width * 0.3, height * 0.4);
        ctx.lineTo(width * 0.3, height * 0.15);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // 3 Na+ ions (blue)
        ctx.fillStyle = '#2196F3';
        for(let i = 0; i < 3; i++) {
            const nx = -width * 0.2 + i * 15;
            ctx.beginPath();
            ctx.arc(nx, -height * 0.3, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 10px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Na+', nx, -height * 0.3 + 3);
            ctx.fillStyle = '#2196F3';
        }
        
        // 2 K+ ions (purple)
        ctx.fillStyle = '#9C27B0';
        for(let i = 0; i < 2; i++) {
            const kx = width * 0.1 + i * 20;
            ctx.beginPath();
            ctx.arc(kx, height * 0.3, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 10px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('K+', kx, height * 0.3 + 3);
            ctx.fillStyle = '#9C27B0';
        }
        
        // ATP molecule
        ctx.fillStyle = '#FF9800';
        ctx.strokeStyle = '#F57C00';
        ctx.lineWidth = 2;
        
        // Adenosine
        ctx.beginPath();
        ctx.arc(-width * 0.4, 0, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Phosphate groups
        for(let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.arc(-width * 0.4 + 15 + i * 12, 0, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        
        // ATP → ADP + Pi arrow
        this.drawArrow(ctx, -width * 0.25, 0, -width * 0.15, 0, 8);
        
        ctx.restore();
    }
    
    static drawEndocytosis(ctx, x, y, width, height, type = 'phagocytosis') {
        ctx.save();
        ctx.translate(x, y);
        
        // Cell membrane
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 3;
        ctx.fillStyle = '#FFF3E0';
        
        if(type === 'phagocytosis') {
            // Large particle being engulfed
            ctx.fillStyle = '#4CAF50';
            ctx.strokeStyle = '#2E7D32';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, -height * 0.3, 30, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Pseudopodia (cell extensions)
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 4;
            ctx.fillStyle = 'rgba(255, 243, 224, 0.7)';
            
            ctx.beginPath();
            ctx.moveTo(-width * 0.2, 0);
            ctx.quadraticCurveTo(-width * 0.25, -height * 0.2, -35, -height * 0.3);
            ctx.lineTo(-35, -height * 0.1);
            ctx.quadraticCurveTo(-width * 0.15, 0, -width * 0.2, 0);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(width * 0.2, 0);
            ctx.quadraticCurveTo(width * 0.25, -height * 0.2, 35, -height * 0.3);
            ctx.lineTo(35, -height * 0.1);
            ctx.quadraticCurveTo(width * 0.15, 0, width * 0.2, 0);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            
        } else if(type === 'pinocytosis') {
            // Small vesicle forming
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 3;
            
            // Membrane invagination
            ctx.beginPath();
            ctx.moveTo(-width * 0.3, 0);
            ctx.lineTo(-20, 0);
            ctx.quadraticCurveTo(0, 20, 20, 0);
            ctx.lineTo(width * 0.3, 0);
            ctx.stroke();
            
            // Small vesicle
            ctx.fillStyle = 'rgba(33, 150, 243, 0.5)';
            ctx.strokeStyle = '#1976D2';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 40, 15, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Fluid droplets inside
            ctx.fillStyle = '#2196F3';
            for(let i = 0; i < 5; i++) {
                const dx = (Math.random() - 0.5) * 15;
                const dy = 40 + (Math.random() - 0.5) * 15;
                ctx.beginPath();
                ctx.arc(dx, dy, 2, 0, Math.PI * 2);
                ctx.fill();
            }
            
        } else if(type === 'receptor') {
            // Receptor-mediated endocytosis
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 3;
            
            // Coated pit
            ctx.beginPath();
            ctx.moveTo(-width * 0.3, 0);
            ctx.lineTo(-30, 0);
            ctx.quadraticCurveTo(0, 30, 30, 0);
            ctx.lineTo(width * 0.3, 0);
            ctx.stroke();
            
            // Clathrin coat (hexagonal pattern)
            ctx.strokeStyle = '#6A1B9A';
            ctx.lineWidth = 2;
            for(let i = -1; i <= 1; i++) {
                for(let j = 0; j < 2; j++) {
                    const hx = i * 15;
                    const hy = 15 + j * 12;
                    this.drawHexagon(ctx, hx, hy, 6);
                }
            }
            
            // Ligands (specific molecules)
            ctx.fillStyle = '#E91E63';
            for(let i = 0; i < 4; i++) {
                const lx = -25 + i * 17;
                ctx.beginPath();
                ctx.arc(lx, -5, 5, 0, Math.PI * 2);
                ctx.fill();
            }
            
            // Receptors
            ctx.fillStyle = '#9C27B0';
            for(let i = 0; i < 4; i++) {
                const rx = -25 + i * 17;
                ctx.fillRect(rx - 2, 0, 4, 10);
            }
        }
        
        ctx.restore();
    }
    
    // ===== CELLULAR RESPIRATION =====
    
    static drawGlycolysisPathway(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        const steps = [
            { name: 'Glucose', y: 0, color: '#4CAF50' },
            { name: 'Glucose-6-P', y: 0.15, color: '#8BC34A' },
            { name: 'Fructose-6-P', y: 0.25, color: '#9CCC65' },
            { name: 'Fructose-1,6-BP', y: 0.35, color: '#AED581' },
            { name: 'DHAP + G3P', y: 0.5, color: '#C5E1A5', split: true },
            { name: '1,3-BPG (x2)', y: 0.6, color: '#DCEDC8' },
            { name: '3-PG (x2)', y: 0.7, color: '#F1F8E9' },
            { name: '2-PG (x2)', y: 0.8, color: '#FFF9C4' },
            { name: 'PEP (x2)', y: 0.9, color: '#FFEB3B' },
            { name: 'Pyruvate (x2)', y: 1.0, color: '#FDD835' }
        ];
        
        // Draw pathway steps
        steps.forEach((step, index) => {
            const yPos = -height / 2 + step.y * height;
            
            // Molecule circle
            ctx.fillStyle = step.color;
            ctx.strokeStyle = '#558B2F';
            ctx.lineWidth = 2;
            
            if(step.split) {
                // Two molecules
                ctx.beginPath();
                ctx.arc(-width * 0.15, yPos, 40, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                
                ctx.beginPath();
                ctx.arc(width * 0.15, yPos, 40, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                
                // Labels
                ctx.fillStyle = '#33691E';
                ctx.font = 'bold 11px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('DHAP', -width * 0.15, yPos);
                ctx.fillText('G3P', width * 0.15, yPos);
            } else {
                ctx.beginPath();
                ctx.arc(0, yPos, 40, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                
                // Label
                ctx.fillStyle = '#33691E';
                ctx.font = 'bold 11px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(step.name, 0, yPos + 4);
            }
            
            // Arrow to next step
            if(index < steps.length - 1) {
                const nextY = -height / 2 + steps[index + 1].y * height;
                this.drawArrow(ctx, 0, yPos + 40, 0, nextY - 40, 8);
            }
            
            // ATP/ADP annotations
            if(index === 0 || index === 3) {
                ctx.fillStyle = '#FF5722';
                ctx.font = 'bold 10px Arial';
                ctx.textAlign = 'left';
                ctx.fillText('ATP → ADP', width * 0.25, yPos);
            }
            if(index === 6 || index === 9) {
                ctx.fillStyle = '#4CAF50';
                ctx.fillText('ADP → ATP', width * 0.25, yPos);
            }
            if(index === 5) {
                ctx.fillStyle = '#2196F3';
                ctx.fillText('NAD+ → NADH', width * 0.25, yPos);
            }
        });
        
        // Net yield
        ctx.fillStyle = '#1B5E20';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Net: 2 ATP + 2 NADH + 2 Pyruvate', 0, height / 2 + 25);
        
        ctx.restore();
    }
    
    static drawKrebsCycle(ctx, x, y, radius) {
        ctx.save();
        ctx.translate(x, y);
        
        const compounds = [
            { name: 'Acetyl-CoA', angle: 0, color: '#FF6B6B' },
            { name: 'Citrate', angle: Math.PI / 4, color: '#4ECDC4' },
            { name: 'Isocitrate', angle: Math.PI / 2, color: '#45B7D1' },
            { name: 'α-Ketoglutarate', angle: 3 * Math.PI / 4, color: '#96CEB4' },
            { name: 'Succinyl-CoA', angle: Math.PI, color: '#FFEAA7' },
            { name: 'Succinate', angle: 5 * Math.PI / 4, color: '#DFE6E9' },
            { name: 'Fumarate', angle: 3 * Math.PI / 2, color: '#74B9FF' },
            { name: 'Malate', angle: 7 * Math.PI / 4, color: '#A29BFE' },
            { name: 'Oxaloacetate', angle: 0, color: '#FD79A8', isStart: true }
        ];
        
        // Draw cycle circle
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Draw compounds
        compounds.forEach((compound, index) => {
            const x = Math.cos(compound.angle - Math.PI / 2) * radius;
            const y = Math.sin(compound.angle - Math.PI / 2) * radius;
            
            // Compound circle
            ctx.fillStyle = compound.color;
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(x, y, 35, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Label
            ctx.fillStyle = '#2C3E50';
            ctx.font = 'bold 10px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(compound.name, x, y + 3);
            
            // Arrows between compounds
            if(index < compounds.length - 1) {
                const nextCompound = compounds[index + 1];
                const x2 = Math.cos(nextCompound.angle - Math.PI / 2) * radius;
                const y2 = Math.sin(nextCompound.angle - Math.PI / 2) * radius;
                
                const arrowAngle = Math.atan2(y2 - y, x2 - x);
                const startX = x + Math.cos(arrowAngle) * 35;
                const startY = y + Math.sin(arrowAngle) * 35;
                const endX = x2 - Math.cos(arrowAngle) * 35;
                const endY = y2 - Math.sin(arrowAngle) * 35;
                
                this.drawArrow(ctx, startX, startY, endX, endY, 8);
            }
        });
        
        // Products annotations
        ctx.font = 'bold 11px Arial';
        ctx.fillStyle = '#E74C3C';
        ctx.textAlign = 'left';
        
        // CO2 releases
        ctx.fillText('CO₂', radius * 0.7, -radius * 0.3);
        ctx.fillText('CO₂', -radius * 0.3, radius * 0.7);
        
        // NADH productions
        ctx.fillStyle = '#3498DB';
        ctx.fillText('NADH', radius * 0.8, radius * 0.2);
        ctx.fillText('NADH', -radius * 0.8, radius * 0.5);
        ctx.fillText('NADH', -radius * 0.7, -radius * 0.7);
        
        // FADH2 production
        ctx.fillStyle = '#9B59B6';
        ctx.fillText('FADH₂', 0, radius * 0.95);
        
        // GTP/ATP production
        ctx.fillStyle = '#2ECC71';
        ctx.fillText('GTP', -radius * 0.85, radius * 0.1);
        
        // Center label
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Krebs', 0, -10);
        ctx.fillText('Cycle', 0, 10);
        
        ctx.restore();
    }
    
    static drawElectronTransportChain(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Mitochondrial inner membrane
        ctx.fillStyle = '#FFE0B2';
        ctx.fillRect(-width / 2, -height * 0.1, width, height * 0.2);
        ctx.strokeStyle = '#FF6F00';
        ctx.lineWidth = 2;
        ctx.strokeRect(-width / 2, -height * 0.1, width, height * 0.2);
        
        // Intermembrane space (top)
        ctx.fillStyle = 'rgba(255, 152, 0, 0.2)';
        ctx.fillRect(-width / 2, -height * 0.5, width, height * 0.4);
        
        // Matrix (bottom)
        ctx.fillStyle = 'rgba(255, 224, 178, 0.3)';
        ctx.fillRect(-width / 2, height * 0.1, width, height * 0.4);
        
        // Complex I
        this.drawProteinComplex(ctx, -width * 0.35, 0, 60, height * 0.4, 'I', '#E91E63');
        
        // Complex II
        this.drawProteinComplex(ctx, -width * 0.15, height * 0.05, 50, height * 0.25, 'II', '#9C27B0');
        
        // Ubiquinone (Q) - mobile carrier
        ctx.fillStyle = '#FF9800';
        ctx.strokeStyle = '#F57C00';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(-width * 0.25, 0, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Q', -width * 0.25, 3);
        
        // Complex III
        this.drawProteinComplex(ctx, 0, 0, 60, height * 0.4, 'III', '#3F51B5');
        
        // Cytochrome c - mobile carrier
        ctx.fillStyle = '#00BCD4';
        ctx.strokeStyle = '#0097A7';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(width * 0.15, -height * 0.15, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('c', width * 0.15, -height * 0.15 + 3);
        
        // Complex IV
        this.drawProteinComplex(ctx, width * 0.25, 0, 60, height * 0.4, 'IV', '#4CAF50');
        
        // ATP Synthase
        ctx.fillStyle = '#FFC107';
        ctx.strokeStyle = '#FFA000';
        ctx.lineWidth = 2;
        
        // F0 portion (in membrane)
        ctx.beginPath();
        ctx.arc(width * 0.4, 0, 25, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // F1 portion (in matrix)
        ctx.beginPath();
        ctx.arc(width * 0.4, height * 0.2, 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#F57C00';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('ATP', width * 0.4, height * 0.2 + 4);
        ctx.fillText('Synthase', width * 0.4, height * 0.2 + 16);
        
        // Electron flow arrows
        ctx.strokeStyle = '#E74C3C';
        ctx.fillStyle = '#E74C3C';
        ctx.lineWidth = 3;
        
        const electronPath = [
            [-width * 0.35, -height * 0.2],
            [-width * 0.25, -height * 0.1],
            [0, -height * 0.2],
            [width * 0.15, -height * 0.3],
            [width * 0.25, -height * 0.2]
        ];
        
        for(let i = 0; i < electronPath.length - 1; i++) {
            this.drawArrow(ctx, electronPath[i][0], electronPath[i][1], 
                          electronPath[i + 1][0], electronPath[i + 1][1], 8);
        }
        
        // Proton pumping arrows (into intermembrane space)
        ctx.strokeStyle = '#FF5722';
        ctx.fillStyle = '#FF5722';
        for(let i = 0; i < 3; i++) {
            const px = -width * 0.35 + i * width * 0.3;
            this.drawArrow(ctx, px, height * 0.05, px, -height * 0.25, 6);
            
            // H+ label
            ctx.font = 'bold 11px Arial';
            ctx.fillText('H⁺', px, -height * 0.3);
        }
        
        // Proton flow through ATP synthase
        this.drawArrow(ctx, width * 0.4, -height * 0.2, width * 0.4, height * 0.05, 6);
        ctx.fillText('H⁺', width * 0.4, -height * 0.25);
        
        // ATP production
        ctx.fillStyle = '#4CAF50';
        ctx.font = 'bold 12px Arial';
        ctx.fillText('ADP + Pi → ATP', width * 0.4, height * 0.4);
        
        // O2 at end
        ctx.fillStyle = '#2196F3';
        ctx.strokeStyle = '#1976D2';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(width * 0.38, -height * 0.15, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 10px Arial';
        ctx.fillText('O₂', width * 0.38, -height * 0.15 + 3);
        
        // H2O product
        ctx.fillStyle = '#03A9F4';
        ctx.font = 'bold 11px Arial';
        ctx.fillText('H₂O', width * 0.38, height * 0.15);
        
        ctx.restore();
    }
    
    static drawProteinComplex(ctx, x, y, width, height, label, color) {
        ctx.save();
        ctx.translate(x, y);
        
        // Complex shape
        ctx.fillStyle = color;
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.roundRect(-width / 2, -height / 2, width, height, 8);
        ctx.fill();
        ctx.stroke();
        
        // Label
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(label, 0, 5);
        
        ctx.restore();
    }
    
    // ===== PHOTOSYNTHESIS =====
    
    static drawLightReactions(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Thylakoid membrane
        ctx.fillStyle = '#C8E6C9';
        ctx.fillRect(-width / 2, -height * 0.1, width, height * 0.2);
        ctx.strokeStyle = '#4CAF50';
        ctx.lineWidth = 2;
        ctx.strokeRect(-width / 2, -height * 0.1, width, height * 0.2);
        
        // Thylakoid lumen (inside)
        ctx.fillStyle = 'rgba(76, 175, 80, 0.2)';
        ctx.fillRect(-width / 2, -height * 0.5, width, height * 0.4);
        
        // Stroma (outside)
        ctx.fillStyle = 'rgba(200, 230, 201, 0.3)';
        ctx.fillRect(-width / 2, height * 0.1, width, height * 0.4);
        
        // Photosystem II
        ctx.fillStyle = '#7CB342';
        ctx.strokeStyle = '#558B2F';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(-width * 0.3, -height * 0.1, width * 0.15, height * 0.35, 8);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('PS II', -width * 0.225, 0.05);
        ctx.font = 'bold 10px Arial';
        ctx.fillText('P680', -width * 0.225, 0.15);
        
        // Light arrows to PS II
        ctx.strokeStyle = '#FFEB3B';
        ctx.fillStyle = '#FFEB3B';
        ctx.lineWidth = 3;
        for(let i = 0; i < 3; i++) {
            const lx = -width * 0.3 + i * 0.025 * width;
            this.drawArrow(ctx, lx, -height * 0.45, lx, -height * 0.25, 8);
        }
        ctx.font = 'bold 11px Arial';
        ctx.fillText('Light', -width * 0.225, -height * 0.48);
        
        // Water splitting
        ctx.fillStyle = '#2196F3';
        ctx.font = 'bold 11px Arial';
        ctx.fillText('H₂O', -width * 0.35, -height * 0.35);
        this.drawArrow(ctx, -width * 0.32, -height * 0.33, -width * 0.25, -height * 0.15, 6);
        
        // O2 release
        ctx.fillStyle = '#03A9F4';
        ctx.fillText('O₂', -width * 0.38, -height * 0.2);
        
        // Electron transport chain
        ctx.strokeStyle = '#E91E63';
        ctx.fillStyle = '#E91E63';
        ctx.lineWidth = 2;
        
        const etcPath = [
            [-width * 0.225, -height * 0.15],
            [-width * 0.15, -height * 0.25],
            [-width * 0.05, -height * 0.2],
            [0, -height * 0.25],
            [width * 0.1, -height * 0.15]
        ];
        
        for(let i = 0; i < etcPath.length - 1; i++) {
            this.drawArrow(ctx, etcPath[i][0], etcPath[i][1], 
                          etcPath[i + 1][0], etcPath[i + 1][1], 6);
        }
        
        // Cytochrome b6f complex
        ctx.fillStyle = '#9C27B0';
        ctx.strokeStyle = '#7B1FA2';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(-width * 0.08, -height * 0.1, width * 0.12, height * 0.25, 8);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Cyt b₆f', -width * 0.02, 0.05);
        
        // H+ pumping
        ctx.strokeStyle = '#FF5722';
        ctx.fillStyle = '#FF5722';
        for(let i = 0; i < 2; i++) {
            const hx = -width * 0.22 + i * 0.2;
            this.drawArrow(ctx, hx, height * 0.05, hx, -height * 0.25, 6);
            ctx.font = 'bold 10px Arial';
            ctx.fillText('H⁺', hx, -height * 0.3);
        }
        
        // Photosystem I
        ctx.fillStyle = '#4CAF50';
        ctx.strokeStyle = '#2E7D32';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(width * 0.15, -height * 0.1, width * 0.15, height * 0.35, 8);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('PS I', width * 0.225, 0.05);
        ctx.font = 'bold 10px Arial';
        ctx.fillText('P700', width * 0.225, 0.15);
        
        // Light arrows to PS I
        ctx.strokeStyle = '#FFEB3B';
        ctx.fillStyle = '#FFEB3B';
        ctx.lineWidth = 3;
        for(let i = 0; i < 3; i++) {
            const lx = width * 0.15 + i * 0.025 * width;
            this.drawArrow(ctx, lx, -height * 0.45, lx, -height * 0.25, 8);
        }
        
        // NADP+ to NADPH
        ctx.fillStyle = '#FF9800';
        ctx.font = 'bold 11px Arial';
        ctx.fillText('NADP⁺', width * 0.35, height * 0.25);
        this.drawArrow(ctx, width * 0.3, height * 0.15, width * 0.35, height * 0.22, 6);
        ctx.fillStyle = '#FFA726';
        ctx.fillText('NADPH', width * 0.35, height * 0.35);
        
        // ATP Synthase
        ctx.fillStyle = '#FFC107';
        ctx.strokeStyle = '#FFA000';
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.arc(width * 0.35, 0, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(width * 0.35, height * 0.15, 25, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#F57C00';
        ctx.font = 'bold 10px Arial';
        ctx.fillText('ATP', width * 0.35, height * 0.15);
        ctx.fillText('Synthase', width * 0.35, height * 0.15 + 10);
        
        // H+ flow through synthase
        ctx.strokeStyle = '#FF5722';
        ctx.fillStyle = '#FF5722';
        this.drawArrow(ctx, width * 0.35, -height * 0.15, width * 0.35, -height * 0.02, 6);
        ctx.font = 'bold 10px Arial';
        ctx.fillText('H⁺', width * 0.35, -height * 0.18);
        
        // ATP production
        ctx.fillStyle = '#4CAF50';
        ctx.font = 'bold 11px Arial';
        ctx.fillText('ADP + Pi → ATP', width * 0.35, height * 0.4);
        
        ctx.restore();
    }
    
    static drawCalvinCycle(ctx, x, y, radius) {
        ctx.save();
        ctx.translate(x, y);
        
        // Draw cycle outline
        ctx.strokeStyle = '#2E7D32';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Carbon Fixation (top)
        ctx.fillStyle = '#66BB6A';
        ctx.strokeStyle = '#2E7D32';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, -radius, 50, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#1B5E20';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Carbon', 0, -radius - 5);
        ctx.fillText('Fixation', 0, -radius + 8);
        
        // CO2 input
        ctx.fillStyle = '#E74C3C';
        ctx.font = 'bold 12px Arial';
        ctx.fillText('CO₂', 0, -radius - 60);
        this.drawArrow(ctx, 0, -radius - 55, 0, -radius - 50, 8);
        
        // RuBP (5C)
        ctx.fillStyle = '#81C784';
        ctx.font = 'bold 10px Arial';
        ctx.fillText('RuBP (5C)', -radius * 0.3, -radius * 0.9);
        
        // 3-PGA (3C) x2
        ctx.fillStyle = '#66BB6A';
        ctx.fillText('3-PGA (3C) x2', radius * 0.5, -radius * 0.7);
        
        // Reduction (right)
        ctx.fillStyle = '#8BC34A';
        ctx.strokeStyle = '#2E7D32';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(radius * 0.85, 0, 50, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#1B5E20';
        ctx.font = 'bold 11px Arial';
        ctx.fillText('Reduction', radius * 0.85, -5);
        
        // ATP and NADPH input
        ctx.fillStyle = '#FF9800';
        ctx.font = 'bold 10px Arial';
        ctx.fillText('ATP', radius * 1.1, -20);
        ctx.fillText('NADPH', radius * 1.1, 20);
        this.drawArrow(ctx, radius * 1.05, -15, radius * 0.9, -10, 6);
        this.drawArrow(ctx, radius * 1.05, 15, radius * 0.9, 10, 6);
        
        // G3P (3C)
        ctx.fillStyle = '#9CCC65';
        ctx.font = 'bold 10px Arial';
        ctx.fillText('G3P (3C)', radius * 0.85, radius * 0.5);
        
        // G3P output (glucose synthesis)
        ctx.fillStyle = '#4CAF50';
        ctx.font = 'bold 11px Arial';
        ctx.fillText('G3P', radius * 0.85, radius * 0.9);
        ctx.font = 'bold 9px Arial';
        ctx.fillText('(1 of 6 exits)', radius * 0.85, radius * 0.95 + 10);
        this.drawArrow(ctx, radius * 0.85, radius * 0.7, radius * 0.85, radius * 0.85, 8);
        
        // Regeneration (bottom)
        ctx.fillStyle = '#AED581';
        ctx.strokeStyle = '#2E7D32';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, radius, 50, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#1B5E20';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Regeneration', 0, radius - 5);
        ctx.fillText('of RuBP', 0, radius + 8);
        
        // ATP input for regeneration
        ctx.fillStyle = '#FF9800';
        ctx.font = 'bold 10px Arial';
        ctx.fillText('ATP', 0, radius + 60);
        this.drawArrow(ctx, 0, radius + 55, 0, radius + 50, 8);
        
        // 5C sugar intermediates
        ctx.fillStyle = '#C5E1A5';
        ctx.font = 'bold 9px Arial';
        ctx.fillText('5C sugars', -radius * 0.6, radius * 0.7);
        
        // Cycle arrows
        ctx.strokeStyle = '#2E7D32';
        ctx.fillStyle = '#2E7D32';
        ctx.lineWidth = 3;
        
        // Top to right
        this.drawCurvedArrowArc(ctx, 0, -radius + 50, radius * 0.85 - 50, 0, 10);
        
        // Right to bottom
        this.drawCurvedArrowArc(ctx, radius * 0.85, 50, 0, radius - 50, 10);
        
        // Bottom to top
        this.drawCurvedArrowArc(ctx, -50, radius, -50, -radius + 50, 10);
        
        // Center label
        ctx.fillStyle = '#1B5E20';
        ctx.font = 'bold 18px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Calvin', 0, -15);
        ctx.fillText('Cycle', 0, 5);
        
        // Turn count
        ctx.font = 'bold 12px Arial';
        ctx.fillText('(6 turns = 1 glucose)', 0, 25);
        
        ctx.restore();
    }
    
    // ===== CELL DIVISION =====
    
    static drawMitosisPhase(ctx, x, y, size, phase) {
        ctx.save();
        ctx.translate(x, y);
        
        // Cell membrane
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 3;
        ctx.fillStyle = 'rgba(255, 243, 224, 0.3)';
        ctx.beginPath();
        ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        switch(phase) {
            case 'prophase':
                // Chromosomes condensing
                ctx.strokeStyle = '#E91E63';
                ctx.lineWidth = 4;
                for(let i = 0; i < 8; i++) {
                    const angle = (i / 8) * Math.PI * 2;
                    const r = size * 0.15;
                    const cx = Math.cos(angle) * r;
                    const cy = Math.sin(angle) * r;
                    
                    // Sister chromatids
                    ctx.beginPath();
                    ctx.moveTo(cx - 10, cy - 15);
                    ctx.lineTo(cx - 10, cy + 15);
                    ctx.stroke();
                    
                    ctx.beginPath();
                    ctx.moveTo(cx + 10, cy - 15);
                    ctx.lineTo(cx + 10, cy + 15);
                    ctx.stroke();
                    
                    // Centromere
                    ctx.fillStyle = '#C2185B';
                    ctx.fillRect(cx - 12, cy - 3, 24, 6);
                }
                
                // Nuclear envelope breaking down
                ctx.strokeStyle = 'rgba(123, 31, 162, 0.4)';
                ctx.lineWidth = 2;
                ctx.setLineDash([5, 5]);
                ctx.beginPath();
                ctx.arc(0, 0, size * 0.25, 0, Math.PI * 2);
                ctx.stroke();
                ctx.setLineDash([]);
                
                // Centrioles moving
                ctx.fillStyle = '#7B1FA2';
                ctx.beginPath();
                ctx.arc(-size * 0.25, -size * 0.25, 8, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(size * 0.25, -size * 0.25, 8, 0, Math.PI * 2);
                ctx.fill();
                break;
                
            case 'metaphase':
                // Chromosomes aligned at metaphase plate
                ctx.strokeStyle = '#E91E63';
                ctx.lineWidth = 4;
                const chromosomeCount = 8;
                const spacing = (size * 0.6) / chromosomeCount;
                
                for(let i = 0; i < chromosomeCount; i++) {
                    const cx = -size * 0.3 + i * spacing;
                    
                    // Sister chromatids
                    ctx.beginPath();
                    ctx.moveTo(cx - 8, -20);
                    ctx.lineTo(cx - 8, 20);
                    ctx.stroke();
                    
                    ctx.beginPath();
                    ctx.moveTo(cx + 8, -20);
                    ctx.lineTo(cx + 8, 20);
                    ctx.stroke();
                    
                    // Centromere
                    ctx.fillStyle = '#C2185B';
                    ctx.fillRect(cx - 10, -3, 20, 6);
                }
                
                // Metaphase plate line
                ctx.strokeStyle = '#9C27B0';
                ctx.lineWidth = 2;
                ctx.setLineDash([5, 5]);
                ctx.beginPath();
                ctx.moveTo(-size * 0.4, 0);
                ctx.lineTo(size * 0.4, 0);
                ctx.stroke();
                ctx.setLineDash([]);
                
                // Spindle fibers
                ctx.strokeStyle = '#4CAF50';
                ctx.lineWidth = 1.5;
                for(let i = 0; i < chromosomeCount; i++) {
                    const cx = -size * 0.3 + i * spacing;
                    
                    // To top centriole
                    ctx.beginPath();
                    ctx.moveTo(cx, 0);
                    ctx.lineTo(0, -size * 0.4);
                    ctx.stroke();
                    
                    // To bottom centriole
                    ctx.beginPath();
                    ctx.moveTo(cx, 0);
                    ctx.lineTo(0, size * 0.4);
                    ctx.stroke();
                }
                
                // Centrioles at poles
                ctx.fillStyle = '#7B1FA2';
                ctx.beginPath();
                ctx.arc(0, -size * 0.4, 10, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(0, size * 0.4, 10, 0, Math.PI * 2);
                ctx.fill();
                break;
                
            case 'anaphase':
                // Sister chromatids separating
                ctx.strokeStyle = '#E91E63';
                ctx.lineWidth = 4;
                
                for(let i = 0; i < 8; i++) {
                    const cx = -size * 0.3 + i * (size * 0.6 / 8);
                    
                    // Moving to top
                    ctx.beginPath();
                    ctx.moveTo(cx, -size * 0.15 - 15);
                    ctx.lineTo(cx, -size * 0.15 + 15);
                    ctx.stroke();
                    
                    // Moving to bottom
                    ctx.beginPath();
                    ctx.moveTo(cx, size * 0.15 - 15);
                    ctx.lineTo(cx, size * 0.15 + 15);
                    ctx.stroke();
                }
                
                // Spindle fibers pulling
                ctx.strokeStyle = '#4CAF50';
                ctx.lineWidth = 2;
                for(let i = 0; i < 8; i++) {
                    const cx = -size * 0.3 + i * (size * 0.6 / 8);
                    
                    ctx.beginPath();
                    ctx.moveTo(cx, -size * 0.15);
                    ctx.lineTo(0, -size * 0.4);
                    ctx.stroke();
                    
                    ctx.beginPath();
                    ctx.moveTo(cx, size * 0.15);
                    ctx.lineTo(0, size * 0.4);
                    ctx.stroke();
                }
                
                // Centrioles
                ctx.fillStyle = '#7B1FA2';
                ctx.beginPath();
                ctx.arc(0, -size * 0.4, 10, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(0, size * 0.4, 10, 0, Math.PI * 2);
                ctx.fill();
                break;
                
            case 'telophase':
                // Two nuclei reforming
                ctx.strokeStyle = '#9C27B0';
                ctx.lineWidth = 2;
                ctx.fillStyle = 'rgba(156, 39, 176, 0.1)';
                
                // Top nucleus
                ctx.beginPath();
                ctx.arc(0, -size * 0.2, size * 0.15, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                
                // Bottom nucleus
                ctx.beginPath();
                ctx.arc(0, size * 0.2, size * 0.15, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                
                // Chromosomes decondensing
                ctx.strokeStyle = '#E91E63';
                ctx.lineWidth = 2;
                for(let nucleus = 0; nucleus < 2; nucleus++) {
                    const ny = nucleus === 0 ? -size * 0.2 : size * 0.2;
                    for(let i = 0; i < 6; i++) {
                        const angle = (i / 6) * Math.PI * 2;
                        const r = size * 0.08;
                        const cx = Math.cos(angle) * r;
                        const cy = ny + Math.sin(angle) * r;
                        
                        ctx.beginPath();
                        ctx.arc(cx, cy, 8, 0, Math.PI * 2);
                        ctx.stroke();
                    }
                }
                
                // Cleavage furrow
                ctx.strokeStyle = '#FF5722';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.moveTo(-size * 0.45, 0);
                ctx.quadraticCurveTo(-size * 0.35, 0, -size * 0.3, 0);
                ctx.stroke();
                
                ctx.beginPath();
                ctx.moveTo(size * 0.45, 0);
                ctx.quadraticCurveTo(size * 0.35, 0, size * 0.3, 0);
                ctx.stroke();
                break;
        }
        
        ctx.restore();
    }
    
    static drawCellCycle(ctx, x, y, radius) {
        ctx.save();
        ctx.translate(x, y);
        
        // Main cycle circle
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.stroke();
        
        // G1 phase (Growth 1)
        const g1Start = -Math.PI / 2;
        const g1End = 0;
        ctx.strokeStyle = '#3498DB';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(0, 0, radius, g1Start, g1End);
        ctx.stroke();
        
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('G1', radius * 0.7 * Math.cos(-Math.PI / 4), radius * 0.7 * Math.sin(-Math.PI / 4));
        ctx.font = '11px Arial';
        ctx.fillText('Cell Growth', radius * 0.85 * Math.cos(-Math.PI / 4), radius * 0.85 * Math.sin(-Math.PI / 4) + 12);
        
        // S phase (Synthesis)
        const sStart = 0;
        const sEnd = Math.PI / 3;
        ctx.strokeStyle = '#9B59B6';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(0, 0, radius, sStart, sEnd);
        ctx.stroke();
        
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 16px Arial';
        ctx.fillText('S', radius * 0.7 * Math.cos(Math.PI / 6), radius * 0.7 * Math.sin(Math.PI / 6));
        ctx.font = '11px Arial';
        ctx.fillText('DNA Replication', radius * 0.85 * Math.cos(Math.PI / 6), radius * 0.85 * Math.sin(Math.PI / 6) + 12);
        
        // G2 phase (Growth 2)
        const g2Start = Math.PI / 3;
        const g2End = 2 * Math.PI / 3;
        ctx.strokeStyle = '#1ABC9C';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(0, 0, radius, g2Start, g2End);
        ctx.stroke();
        
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 16px Arial';
        ctx.fillText('G2', radius * 0.7 * Math.cos(Math.PI / 2), radius * 0.7 * Math.sin(Math.PI / 2));
        ctx.font = '11px Arial';
        ctx.fillText('Prepare for', radius * 0.85 * Math.cos(Math.PI / 2), radius * 0.85 * Math.sin(Math.PI / 2) + 12);
        ctx.fillText('Mitosis', radius * 0.85 * Math.cos(Math.PI / 2), radius * 0.85 * Math.sin(Math.PI / 2) + 24);
        
        // M phase (Mitosis)
        const mStart = 2 * Math.PI / 3;
        const mEnd = -Math.PI / 2;
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(0, 0, radius, mStart, mEnd);
        ctx.stroke();
        
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 16px Arial';
        ctx.fillText('M', radius * 0.7 * Math.cos(Math.PI), radius * 0.7 * Math.sin(Math.PI));
        ctx.font = '11px Arial';
        ctx.fillText('Mitosis &', radius * 0.85 * Math.cos(7 * Math.PI / 6), radius * 0.85 * Math.sin(7 * Math.PI / 6) + 12);
        ctx.fillText('Cytokinesis', radius * 0.85 * Math.cos(7 * Math.PI / 6), radius * 0.85 * Math.sin(7 * Math.PI / 6) + 24);
        
        // Checkpoints
        ctx.fillStyle = '#F39C12';
        ctx.strokeStyle = '#E67E22';
        ctx.lineWidth = 2;
        
        // G1/S checkpoint
        ctx.beginPath();
        ctx.arc(radius * Math.cos(0), radius * Math.sin(0), 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('CP', radius * Math.cos(0), radius * Math.sin(0) + 3);
        
        // G2/M checkpoint
        ctx.fillStyle = '#F39C12';
        ctx.beginPath();
        ctx.arc(radius * Math.cos(2 * Math.PI / 3), radius * Math.sin(2 * Math.PI / 3), 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText('CP', radius * Math.cos(2 * Math.PI / 3), radius * Math.sin(2 * Math.PI / 3) + 3);
        
        // M checkpoint (spindle checkpoint)
        ctx.fillStyle = '#F39C12';
        ctx.beginPath();
        ctx.arc(radius * Math.cos(Math.PI), radius * Math.sin(Math.PI), 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText('CP', radius * Math.cos(Math.PI), radius * Math.sin(Math.PI) + 3);
        
        // Center label
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Cell', 0, -10);
        ctx.fillText('Cycle', 0, 10);
        
        // G0 phase (exit from cycle)
        ctx.strokeStyle = '#95A5A6';
        ctx.fillStyle = '#95A5A6';
        ctx.lineWidth = 3;
        this.drawArrow(ctx, radius * 1.1 * Math.cos(-Math.PI / 6), radius * 1.1 * Math.sin(-Math.PI / 6),
                      radius * 1.4 * Math.cos(-Math.PI / 6), radius * 1.4 * Math.sin(-Math.PI / 6), 10);
        
        ctx.font = 'bold 14px Arial';
        ctx.fillText('G0', radius * 1.5 * Math.cos(-Math.PI / 6), radius * 1.5 * Math.sin(-Math.PI / 6));
        ctx.font = '10px Arial';
        ctx.fillText('(Quiescent)', radius * 1.5 * Math.cos(-Math.PI / 6), radius * 1.5 * Math.sin(-Math.PI / 6) + 12);
        
        ctx.restore();
    }
    
    // ===== DNA & PROTEIN SYNTHESIS =====
    
    static drawDNAStructure(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        const turns = 3;
        const segments = 50;
        
        // Draw double helix
        for(let i = 0; i < segments; i++) {
            const t = i / segments;
            const yPos = -height / 2 + t * height;
            const angle = t * turns * Math.PI * 2;
            
            // Left strand
            const x1 = Math.cos(angle) * width * 0.2;
            const y1 = yPos;
            
            // Right strand
            const x2 = Math.cos(angle + Math.PI) * width * 0.2;
            const y2 = yPos;
            
            // Sugar-phosphate backbone
            if(i < segments - 1) {
                const nextAngle = ((i + 1) / segments) * turns * Math.PI * 2;
                const x1Next = Math.cos(nextAngle) * width * 0.2;
                const y1Next = -height / 2 + ((i + 1) / segments) * height;
                const x2Next = Math.cos(nextAngle + Math.PI) * width * 0.2;
                const y2Next = y1Next;
                
                // Left strand backbone
                ctx.strokeStyle = '#4169E1';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x1Next, y1Next);
                ctx.stroke();
                
                // Right strand backbone
                ctx.beginPath();
                ctx.moveTo(x2, y2);
                ctx.lineTo(x2Next, y2Next);
                ctx.stroke();
            }
            
            // Base pairs (every 5th segment for clarity)
            if(i % 5 === 0) {
                // Choose base pair
                const basePairs = ['AT', 'TA', 'GC', 'CG'];
                const pair = basePairs[Math.floor(Math.random() * basePairs.length)];
                
                // Base pair connecting line
                ctx.strokeStyle = '#808080';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
                
                // Left base
                const leftColor = pair[0] === 'A' ? '#FF6B6B' : pair[0] === 'T' ? '#4ECDC4' : 
                                 pair[0] === 'G' ? '#FFD93D' : '#95E1D3';
                ctx.fillStyle = leftColor;
                ctx.beginPath();
                ctx.arc(x1, y1, 6, 0, Math.PI * 2);
                ctx.fill();
                
                // Right base
                const rightColor = pair[1] === 'A' ? '#FF6B6B' : pair[1] === 'T' ? '#4ECDC4' : 
                                  pair[1] === 'G' ? '#FFD93D' : '#95E1D3';
                ctx.fillStyle = rightColor;
                ctx.beginPath();
                ctx.arc(x2, y2, 6, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        ctx.restore();
    }
    
    static drawDNAReplication(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Original DNA (being unwound)
        const unwindY = -height * 0.3;
        
        // Helicase (unwinding enzyme)
        ctx.fillStyle = '#FF9800';
        ctx.strokeStyle = '#F57C00';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, unwindY, 25, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Helicase', 0, unwindY + 3);
        
        // DNA strands separating
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 4;
        
        // Left strand (3' to 5')
        ctx.beginPath();
        ctx.moveTo(-50, unwindY);
        ctx.quadraticCurveTo(-80, unwindY - 50, -100, unwindY - 100);
        ctx.stroke();
        
        // Right strand (5' to 3')
        ctx.beginPath();
        ctx.moveTo(50, unwindY);
        ctx.quadraticCurveTo(80, unwindY - 50, 100, unwindY - 100);
        ctx.stroke();
        
        // Replication fork label
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 11px Arial';
        ctx.fillText('Replication Fork', 0, unwindY - 40);
        
        // Leading strand synthesis
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-100, unwindY - 100);
        ctx.lineTo(-100, height * 0.3);
        ctx.stroke();
        
        // DNA Polymerase on leading strand
        ctx.fillStyle = '#9C27B0';
        ctx.strokeStyle = '#7B1FA2';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(-100, unwindY + 50, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 9px Arial';
        ctx.fillText('DNA Pol', -100, unwindY + 53);
        
        // Leading strand label
        ctx.fillStyle = '#E74C3C';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('Leading Strand', -width * 0.45, unwindY + 80);
        ctx.font = '9px Arial';
        ctx.fillText('(continuous)', -width * 0.45, unwindY + 92);
        
        // Lagging strand synthesis (Okazaki fragments)
        const fragmentCount = 4;
        for(let i = 0; i < fragmentCount; i++) {
            const fragY = unwindY - 80 + i * 80;
            ctx.strokeStyle = '#4CAF50';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(100, fragY);
            ctx.lineTo(100, fragY + 60);
            ctx.stroke();
            
            // Primer (RNA)
            ctx.strokeStyle = '#FF5722';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(100, fragY);
            ctx.lineTo(100, fragY + 10);
            ctx.stroke();
        }
        
        // DNA Polymerase on lagging strand
        ctx.fillStyle = '#9C27B0';
        ctx.strokeStyle = '#7B1FA2';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(100, unwindY + 20, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('DNA Pol', 100, unwindY + 23);
        
        // Primase
        ctx.fillStyle = '#FF5722';
        ctx.strokeStyle = '#D84315';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(100, unwindY - 30, 18, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 8px Arial';
        ctx.fillText('Primase', 100, unwindY - 27);
        
        // Lagging strand label
        ctx.fillStyle = '#4CAF50';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('Lagging Strand', width * 0.25, unwindY + 80);
        ctx.font = '9px Arial';
        ctx.fillText('(Okazaki fragments)', width * 0.25, unwindY + 92);
        
        // Direction arrows
        ctx.strokeStyle = '#2C3E50';
        ctx.fillStyle = '#2C3E50';
        ctx.lineWidth = 2;
        
        // 3' to 5' labels
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText("3'", -100, unwindY - 110);
        ctx.fillText("5'", -100, height * 0.35);
        
        ctx.fillText("5'", 100, unwindY - 110);
        ctx.fillText("3'", 100, height * 0.35);
        
        ctx.restore();
    }
    
    static drawTranscription(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // DNA double helix (template)
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 4;
        
        // Top strand (non-template)
        ctx.beginPath();
        ctx.moveTo(-width * 0.4, -height * 0.2);
        ctx.lineTo(width * 0.4, -height * 0.2);
        ctx.stroke();
        
        // Bottom strand (template)
        ctx.beginPath();
        ctx.moveTo(-width * 0.4, height * 0.2);
        ctx.lineTo(width * 0.4, height * 0.2);
        ctx.stroke();
        
        // Base pairs
        for(let i = 0; i < 10; i++) {
            const xPos = -width * 0.35 + i * (width * 0.7 / 10);
            
            if(i < 3 || i > 6) {
                // Paired regions
                ctx.strokeStyle = '#808080';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(xPos, -height * 0.2);
                ctx.lineTo(xPos, height * 0.2);
                ctx.stroke();
            }
        }
        
        // RNA Polymerase
        ctx.fillStyle = '#E91E63';
        ctx.strokeStyle = '#C2185B';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(0, 0, 60, 40, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('RNA', 0, -5);
        ctx.fillText('Polymerase', 0, 8);
        
        // Transcription bubble (DNA unwound)
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 3;
        ctx.setLineDash([5, 5]);
        
        // Top strand unwound
        ctx.beginPath();
        ctx.moveTo(-80, -height * 0.2);
        ctx.quadraticCurveTo(-40, -height * 0.35, 0, -height * 0.3);
        ctx.quadraticCurveTo(40, -height * 0.25, 80, -height * 0.2);
        ctx.stroke();
        
        // Bottom strand unwound
        ctx.beginPath();
        ctx.moveTo(-80, height * 0.2);
        ctx.quadraticCurveTo(-40, height * 0.35, 0, height * 0.3);
        ctx.quadraticCurveTo(40, height * 0.25, 80, height * 0.2);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // mRNA being synthesized
        ctx.strokeStyle = '#FF6F00';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        
        for(let i = 0; i < 8; i++) {
            const xPos = i * 20;
            const yPos = -50 - i * 8;
            ctx.lineTo(xPos, yPos);
        }
        ctx.stroke();
        
        // mRNA nucleotides
        ctx.fillStyle = '#FF9800';
        for(let i = 0; i < 8; i++) {
            const xPos = i * 20;
            const yPos = -50 - i * 8;
            ctx.beginPath();
            ctx.arc(xPos, yPos, 5, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // mRNA label
        ctx.fillStyle = '#FF6F00';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('mRNA', 160, -100);
        
        // Direction of transcription
        ctx.strokeStyle = '#E91E63';
        ctx.fillStyle = '#E91E63';
        ctx.lineWidth = 3;
        this.drawArrow(ctx, -width * 0.45, -height * 0.35, width * 0.45, -height * 0.35, 12);
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Direction of Transcription', 0, -height * 0.4);
        
        // Template strand label
        ctx.fillStyle = '#4169E1';
        ctx.font = '10px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('Template Strand (3\' → 5\')', -width * 0.45, height * 0.3);
        ctx.fillText('Non-template Strand (5\' → 3\')', -width * 0.45, -height * 0.3);
        
        ctx.restore();
    }
    
    static drawTranslation(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Ribosome (large structure)
        this.drawRibosome(ctx, 0, 0, 80);
        
        // mRNA strand
        ctx.strokeStyle = '#FF6F00';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(-width * 0.4, 0);
        ctx.lineTo(width * 0.4, 0);
        ctx.stroke();
        
        // mRNA codons
        const codons = ['AUG', 'UUU', 'CAG', 'GGC', 'UAA'];
        ctx.fillStyle = '#FF9800';
        ctx.strokeStyle = '#F57C00';
        ctx.lineWidth = 1;
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        
        for(let i = 0; i < codons.length; i++) {
            const xPos = -width * 0.3 + i * 60;
            
            // Codon box
            ctx.fillStyle = '#FFCC80';
            ctx.fillRect(xPos - 15, -10, 30, 20);
            ctx.strokeRect(xPos - 15, -10, 30, 20);
            
            // Codon text
            ctx.fillStyle = '#E65100';
            ctx.fillText(codons[i], xPos, 3);
        }
        
        // tRNA molecules
        // In P site
        this.drawtRNA(ctx, -40, -60, 'Phe', 'AAA');
        
        // In A site
        this.drawtRNA(ctx, 20, -60, 'Gln', 'GUC');
        
        // Growing polypeptide chain
        ctx.strokeStyle = '#9C27B0';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-100, -80);
        ctx.lineTo(-70, -70);
        ctx.lineTo(-55, -65);
        ctx.stroke();
        
        // Amino acids in chain
        const aminoAcids = ['Met', 'Phe'];
        ctx.fillStyle = '#BA68C8';
        ctx.strokeStyle = '#7B1FA2';
        ctx.lineWidth = 2;
        ctx.font = 'bold 9px Arial';
        
        for(let i = 0; i < aminoAcids.length; i++) {
            const xPos = -100 + i * 30;
            const yPos = -80 + i * 10;
            
            ctx.beginPath();
            ctx.arc(xPos, yPos, 12, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            ctx.fillStyle = '#FFFFFF';
            ctx.textAlign = 'center';
            ctx.fillText(aminoAcids[i], xPos, yPos + 3);
            ctx.fillStyle = '#BA68C8';
        }
        
        // Exiting tRNA
        ctx.fillStyle = 'rgba(76, 175, 80, 0.4)';
        ctx.strokeStyle = '#4CAF50';
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.moveTo(-100, 30);
        ctx.lineTo(-100, 10);
        ctx.lineTo(-110, 0);
        ctx.moveTo(-100, 10);
        ctx.lineTo(-90, 0);
        ctx.stroke();
        
        // Labels
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'left';
        
        ctx.fillText('E site', -width * 0.45, 50);
        ctx.fillText('P site', -width * 0.25, 50);
        ctx.fillText('A site', -width * 0.05, 50);
        
        // Direction arrow
        ctx.strokeStyle = '#FF6F00';
        ctx.fillStyle = '#FF6F00';
        ctx.lineWidth = 2;
        this.drawArrow(ctx, -width * 0.45, -height * 0.4, width * 0.45, -height * 0.4, 10);
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Direction of Translation (5\' → 3\')', 0, -height * 0.45);
        
        ctx.restore();
    }
    
    static drawtRNA(ctx, x, y, aminoAcid, anticodon) {
        ctx.save();
        ctx.translate(x, y);
        
        // tRNA structure (cloverleaf simplified)
        ctx.fillStyle = '#4CAF50';
        ctx.strokeStyle = '#2E7D32';
        ctx.lineWidth = 2;
        
        // Stem
        ctx.beginPath();
        ctx.moveTo(-8, 0);
        ctx.lineTo(-8, 40);
        ctx.lineTo(8, 40);
        ctx.lineTo(8, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Top loops
        ctx.beginPath();
        ctx.arc(-10, -5, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(10, -5, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Anticodon loop (bottom)
        ctx.beginPath();
        ctx.arc(0, 50, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Anticodon text
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 8px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(anticodon, 0, 52);
        
        // Amino acid attached (top)
        ctx.fillStyle = '#BA68C8';
        ctx.strokeStyle = '#7B1FA2';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, -20, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 9px Arial';
        ctx.fillText(aminoAcid, 0, -17);
        
        ctx.restore();
    }
    
    // ===== HELPER METHODS =====
    
    static drawArrow(ctx, x1, y1, x2, y2, headSize = 10) {
        const angle = Math.atan2(y2 - y1, x2 - x1);
        
        // Line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        
        // Arrowhead
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(
            x2 - headSize * Math.cos(angle - Math.PI / 6),
            y2 - headSize * Math.sin(angle - Math.PI / 6)
        );
        ctx.lineTo(
            x2 - headSize * Math.cos(angle + Math.PI / 6),
            y2 - headSize * Math.sin(angle + Math.PI / 6)
        );
        ctx.closePath();
        ctx.fill();
    }
    
    static drawCurvedArrowArc(ctx, x1, y1, x2, y2, headSize = 10) {
        // Simple curved arrow - can be enhanced
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(midX * 0.8, midY * 0.8, x2, y2);
        ctx.stroke();
        
        // Arrowhead
        const angle = Math.atan2(y2 - midY, x2 - midX);
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(
            x2 - headSize * Math.cos(angle - Math.PI / 6),
            y2 - headSize * Math.sin(angle - Math.PI / 6)
        );
        ctx.lineTo(
            x2 - headSize * Math.cos(angle + Math.PI / 6),
            y2 - headSize * Math.sin(angle + Math.PI / 6)
        );
        ctx.closePath();
        ctx.fill();
    }
    
    static drawHexagon(ctx, x, y, radius) {
        ctx.beginPath();
        for(let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            const hx = x + radius * Math.cos(angle);
            const hy = y + radius * Math.sin(angle);
            if(i === 0) ctx.moveTo(hx, hy);
            else ctx.lineTo(hx, hy);
        }
        ctx.closePath();
        ctx.stroke();
    }
}


// ============================================================================
// CELL BIOLOGY DIAGRAM RENDERER CLASS
// ============================================================================

class CellBiologyDiagramRenderer {
    constructor(canvas = null) {
        this.defaultFont = 'Arial, sans-serif';
        this.defaultFontSize = 12;
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
        this.currentFrame = 0;
    }

    renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = CellBiologyDiagramsRegistry.getDiagram(diagramKey);
        if (!diagram) {
            throw new Error(`Cell biology diagram '${diagramKey}' not found`);
        }

        const mergedOptions = { ...diagram.defaultOptions, ...options };
        
        this.ctx.save();
        this.ctx.translate(x, y);

        // Clear background
        this.ctx.fillStyle = mergedOptions.backgroundColor;
        this.ctx.fillRect(0, 0, width, height);

        // Title
        this.drawTitle(mergedOptions.title, width / 2, 30);

        const centerX = width / 2;
        const centerY = height / 2 + 30;

        try {
            switch (diagramKey) {
                // ===== CELL STRUCTURE & TYPES =====
                case 'animalCell':
                    this.renderAnimalCellDiagram(centerX, centerY, Math.min(width, height) * 0.7, mergedOptions);
                    break;
                case 'plantCell':
                    this.renderPlantCellDiagram(centerX, centerY, Math.min(width, height) * 0.7, mergedOptions);
                    break;
                case 'prokaryoticCell':
                    this.renderProkaryoticCellDiagram(centerX, centerY, width * 0.7, height * 0.5, mergedOptions);
                    break;
                case 'cellComparison':
                    this.renderCellComparisonDiagram(centerX, centerY, width * 0.9, height * 0.7, mergedOptions);
                    break;

                // ===== ORGANELLES =====
                case 'mitochondrion':
                    this.renderMitochondrionDiagram(centerX, centerY, width * 0.7, height * 0.5, mergedOptions);
                    break;
                case 'chloroplast':
                    this.renderChloroplastDiagram(centerX, centerY, width * 0.7, height * 0.5, mergedOptions);
                    break;
                case 'nucleus':
                    this.renderNucleusDiagram(centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;
                case 'endoplasmicReticulum':
                    this.renderEndoplasmicReticulumDiagram(centerX, centerY, width * 0.7, height * 0.5, mergedOptions);
                    break;
                case 'golgiApparatus':
                    this.renderGolgiApparatusDiagram(centerX, centerY, width * 0.7, height * 0.5, mergedOptions);
                    break;
                case 'ribosome':
                    this.renderRibosomeDiagram(centerX, centerY, width * 0.6, height * 0.5, mergedOptions);
                    break;
                case 'lysosome':
                    this.renderLysosomeDiagram(centerX, centerY, Math.min(width, height) * 0.5, mergedOptions);
                    break;
                case 'peroxisome':
                    this.renderPeroxisomeDiagram(centerX, centerY, Math.min(width, height) * 0.5, mergedOptions);
                    break;
                case 'vacuole':
                    this.renderVacuoleDiagram(centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;
                case 'centriole':
                    this.renderCentrioleDiagram(centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;

                // ===== CELL MEMBRANE & TRANSPORT =====
                case 'cellMembrane':
                    this.renderCellMembraneDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'passiveTransport':
                    this.renderPassiveTransportDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'activeTransport':
                    this.renderActiveTransportDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'endocytosis':
                    this.renderEndocytosisDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'exocytosis':
                    this.renderExocytosisDiagram(centerX, centerY, width * 0.7, height * 0.5, mergedOptions);
                    break;

                // ===== CELLULAR RESPIRATION =====
                case 'cellularRespiration':
                    this.renderCellularRespirationOverview(centerX, centerY, width * 0.85, height * 0.75, mergedOptions);
                    break;
                case 'glycolysis':
                    this.renderGlycolysisDiagram(centerX, centerY, width * 0.6, height * 0.8, mergedOptions);
                    break;
                case 'krebs':
                    this.renderKrebsCycleDiagram(centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;
                case 'electronTransportChain':
                    this.renderElectronTransportChainDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;

                // ===== PHOTOSYNTHESIS =====
                case 'photosynthesisOverview':
                    this.renderPhotosynthesisOverview(centerX, centerY, width * 0.85, height * 0.75, mergedOptions);
                    break;
                case 'lightReactions':
                    this.renderLightReactionsDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'calvinCycle':
                    this.renderCalvinCycleDiagram(centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;

                // ===== CELL DIVISION =====
                case 'mitosis':
                    this.renderMitosisDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'meiosis':
                    this.renderMeiosisDiagram(centerX, centerY, width * 0.85, height * 0.75, mergedOptions);
                    break;
                case 'cellCycle':
                    this.renderCellCycleDiagram(centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;

                // ===== DNA & PROTEIN SYNTHESIS =====
                case 'dnaStructure':
                    this.renderDNAStructureDiagram(centerX, centerY, width * 0.5, height * 0.75, mergedOptions);
                    break;
                case 'dnaReplication':
                    this.renderDNAReplicationDiagram(centerX, centerY, width * 0.85, height * 0.75, mergedOptions);
                    break;
                case 'transcription':
                    this.renderTranscriptionDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'translation':
                    this.renderTranslationDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'centralDogma':
                    this.renderCentralDogmaDiagram(centerX, centerY, width * 0.85, height * 0.5, mergedOptions);
                    break;
                case 'geneticCode':
                    this.renderGeneticCodeDiagram(centerX, centerY, Math.min(width, height) * 0.7, mergedOptions);
                    break;

                // ===== CELL SIGNALING =====
                case 'cellSignaling':
                    this.renderCellSignalingDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'receptorTypes':
                    this.renderReceptorTypesDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;

                // ===== CYTOSKELETON =====
                case 'cytoskeleton':
                    this.renderCytoskeletonDiagram(centerX, centerY, width * 0.7, height * 0.7, mergedOptions);
                    break;
                case 'microfilaments':
                    this.renderMicrofilamentsDiagram(centerX, centerY, width * 0.7, height * 0.5, mergedOptions);
                    break;
                case 'microtubules':
                    this.renderMicrotubulesDiagram(centerX, centerY, width * 0.7, height * 0.5, mergedOptions);
                    break;

                // ===== SPECIALIZED CELLS =====
                case 'neuron':
                    this.renderNeuronDiagram(centerX, centerY, width * 0.85, height * 0.5, mergedOptions);
                    break;
                case 'muscleCell':
                    this.renderMuscleCellDiagram(centerX, centerY, width * 0.85, height * 0.5, mergedOptions);
                    break;
                case 'redBloodCell':
                    this.renderRedBloodCellDiagram(centerX, centerY, width * 0.6, height * 0.5, mergedOptions);
                    break;
                case 'whiteBloodCell':
                    this.renderWhiteBloodCellDiagram(centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;
                case 'spermCell':
                    this.renderSpermCellDiagram(centerX, centerY, width * 0.7, height * 0.5, mergedOptions);
                    break;
                case 'eggCell':
                    this.renderEggCellDiagram(centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;

                default:
                    this.renderPlaceholder(diagram, centerX, centerY, width * 0.7, height * 0.5);
            }

            // Add category and info
            this.drawDiagramInfo(diagram, 20, height - 60, mergedOptions);

        } catch (error) {
            console.error(`Error rendering ${diagramKey}:`, error);
            this.renderError(diagram, centerX, centerY, width * 0.7, height * 0.5, error.message);
        }

        this.ctx.restore();
    }

    // ========== CELL STRUCTURE & TYPES ==========

    renderAnimalCellDiagram(x, y, size, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawAnimalCell(this.ctx, 0, 0, size);

        if (showLabels) {
            this.addLabel('Nucleus', 0, size * 0.15, '#7B1FA2', 'center');
            this.addLabel('Mitochondrion', -size * 0.25, -size * 0.15, '#D84315', 'right');
            this.addLabel('ER', size * 0.3, 0, '#8D6E63', 'left');
            this.addLabel('Golgi', -size * 0.3, size * 0.05, '#F57C00', 'right');
            this.addLabel('Lysosome', size * 0.3, size * 0.15, '#F57C00', 'left');
            this.addLabel('Ribosome', size * 0.15, -size * 0.3, '#8B4513', 'center');
            this.addLabel('Cell Membrane', 0, -size * 0.55, '#8B4513', 'center');
            this.addLabel('Cytoplasm', -size * 0.35, -size * 0.35, '#7F8C8D', 'center');
        }

        this.ctx.restore();
    }

    renderPlantCellDiagram(x, y, size, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawPlantCell(this.ctx, 0, 0, size);

        if (showLabels) {
            this.addLabel('Cell Wall', 0, -size * 0.55, '#654321', 'center');
            this.addLabel('Cell Membrane', 0, -size * 0.48, '#8B7355', 'center');
            this.addLabel('Central Vacuole', 0, size * 0.25, '#7CB342', 'center');
            this.addLabel('Nucleus', -size * 0.25, -size * 0.2, '#7B1FA2', 'right');
            this.addLabel('Chloroplast', -size * 0.3, size * 0.05, '#4CAF50', 'right');
            this.addLabel('Mitochondrion', size * 0.3, 0, '#D84315', 'left');
            this.addLabel('Golgi', size * 0.1, -size * 0.3, '#F57C00', 'center');
        }

        this.ctx.restore();
    }

    renderProkaryoticCellDiagram(x, y, width, height, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawProkaryoticCell(this.ctx, 0, 0, width, height);

        if (showLabels) {
            this.addLabel('Capsule', 0, -height * 0.6, '#1976D2', 'center');
            this.addLabel('Cell Wall', -width * 0.4, -height * 0.35, '#1976D2', 'left');
            this.addLabel('Cell Membrane', width * 0.4, -height * 0.15, '#1976D2', 'left');
            this.addLabel('Nucleoid\n(DNA)', 0, 0, '#FFA000', 'center');
            this.addLabel('Ribosomes', width * 0.25, height * 0.2, '#6D4C41', 'left');
            this.addLabel('Plasmid', -width * 0.2, -height * 0.2, '#FF6F00', 'right');
            this.addLabel('Flagellum', width * 0.45, height * 0.3, '#0D47A1', 'left');
            this.addLabel('Pili', -width * 0.35, height * 0.35, '#1565C0', 'right');
        }

        this.ctx.restore();
    }

    renderCellComparisonDiagram(x, y, width, height, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        const cellSize = height * 0.8;
        const spacing = width / 3;

        // Animal Cell
        CellBiologyShapes.drawAnimalCell(this.ctx, -spacing, 0, cellSize);
        this.addLabel('Animal Cell', -spacing, -cellSize * 0.6, '#2C3E50', 'center');

        // Plant Cell
        CellBiologyShapes.drawPlantCell(this.ctx, 0, 0, cellSize);
        this.addLabel('Plant Cell', 0, -cellSize * 0.6, '#2C3E50', 'center');

        // Prokaryotic Cell
        CellBiologyShapes.drawProkaryoticCell(this.ctx, spacing, 0, cellSize * 0.6, cellSize * 0.4);
        this.addLabel('Prokaryotic Cell', spacing, -cellSize * 0.6, '#2C3E50', 'center');

        // Comparison notes
        if (showLabels) {
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            
            this.ctx.fillText('No cell wall', -spacing, cellSize * 0.55);
            this.ctx.fillText('Membrane-bound', -spacing, cellSize * 0.6);
            this.ctx.fillText('organelles', -spacing, cellSize * 0.65);
            
            this.ctx.fillText('Cell wall', 0, cellSize * 0.55);
            this.ctx.fillText('Chloroplasts', 0, cellSize * 0.6);
            this.ctx.fillText('Large vacuole', 0, cellSize * 0.65);
            
            this.ctx.fillText('No nucleus', spacing, cellSize * 0.55);
            this.ctx.fillText('No organelles', spacing, cellSize * 0.6);
            this.ctx.fillText('Smaller & simpler', spacing, cellSize * 0.65);
        }

        this.ctx.restore();
    }

    // ========== ORGANELLES ==========

    renderMitochondrionDiagram(x, y, width, height, options) {
        const { showLabels = true, showCristae = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawMitochondrion(this.ctx, 0, 0, width, height);

        if (showLabels) {
            this.addLabel('Outer Membrane', -width * 0.35, -height * 0.6, '#D84315', 'center');
            this.addLabel('Inner Membrane', width * 0.35, -height * 0.3, '#BF360C', 'left');
            this.addLabel('Cristae\n(folds)', width * 0.35, 0, '#BF360C', 'left');
            this.addLabel('Matrix', 0, height * 0.3, '#BF360C', 'center');
            this.addLabel('Mitochondrial\nDNA', width * 0.25, height * 0.15, '#FF6F00', 'left');

            // Function note
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Powerhouse of the Cell', 0, height * 0.6);
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('ATP Production via Cellular Respiration', 0, height * 0.65);
        }

        this.ctx.restore();
    }

    renderChloroplastDiagram(x, y, width, height, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawChloroplast(this.ctx, 0, 0, width, height);

        if (showLabels) {
            this.addLabel('Outer Membrane', -width * 0.35, -height * 0.6, '#558B2F', 'center');
            this.addLabel('Inner Membrane', width * 0.35, -height * 0.5, '#558B2F', 'left');
            this.addLabel('Stroma', -width * 0.3, height * 0.35, '#558B2F', 'right');
            this.addLabel('Thylakoid', width * 0.35, -height * 0.15, '#33691E', 'left');
            this.addLabel('Granum\n(stack)', width * 0.35, 0.05, '#33691E', 'left');
            this.addLabel('DNA', -width * 0.15, height * 0.5, '#FF6F00', 'right');

            // Function note
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Site of Photosynthesis', 0, height * 0.6);
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('Converts Light Energy to Chemical Energy', 0, height * 0.65);
        }

        this.ctx.restore();
    }

    renderNucleusDiagram(x, y, size, options) {
        const { showLabels = true, showChromatin = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawNucleus(this.ctx, 0, 0, size);

        if (showLabels) {
            this.addLabel('Nuclear\nEnvelope', -size * 1.2, -size * 0.5, '#7B1FA2', 'left');
            this.addLabel('Nuclear Pore', size * 1.2, 0, '#4A148C', 'left');
            this.addLabel('Nucleolus', size * 0.5, -size * 0.5, '#4A148C', 'left');
            this.addLabel('Chromatin\n(DNA)', -size * 0.7, size * 0.3, '#6A1B9A', 'right');

            // Function note
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Control Center of the Cell', 0, size * 1.3);
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('Contains DNA • Controls Gene Expression', 0, size * 1.35);
        }

        this.ctx.restore();
    }

    renderEndoplasmicReticulumDiagram(x, y, width, height, options) {
        const { showLabels = true, type = 'both' } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        if (type === 'both') {
            // Rough ER
            CellBiologyShapes.drawEndoplasmicReticulum(this.ctx, -width * 0.25, 0, width * 0.4, height * 0.7, 'rough');
            this.addLabel('Rough ER', -width * 0.25, -height * 0.5, '#8D6E63', 'center');
            this.addLabel('(with ribosomes)', -width * 0.25, -height * 0.45, '#7F8C8D', 'center');

            // Smooth ER
            CellBiologyShapes.drawEndoplasmicReticulum(this.ctx, width * 0.25, 0, width * 0.4, height * 0.7, 'smooth');
            this.addLabel('Smooth ER', width * 0.25, -height * 0.5, '#BCAAA4', 'center');
            this.addLabel('(no ribosomes)', width * 0.25, -height * 0.45, '#7F8C8D', 'center');

            if (showLabels) {
                // Functions
                this.ctx.font = '10px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Protein synthesis', -width * 0.25, height * 0.5);
                this.ctx.fillText('& processing', -width * 0.25, height * 0.55);

                this.ctx.fillText('Lipid synthesis', width * 0.25, height * 0.5);
                this.ctx.fillText('& detoxification', width * 0.25, height * 0.55);
            }
        } else {
            CellBiologyShapes.drawEndoplasmicReticulum(this.ctx, 0, 0, width, height, type);
            
            if (showLabels) {
                this.addLabel(type === 'rough' ? 'Rough ER' : 'Smooth ER', 0, -height * 0.6, '#8D6E63', 'center');
                this.addLabel('Cisternae', width * 0.55, 0, '#8D6E63', 'left');
                this.addLabel('Lumen', -width * 0.55, height * 0.2, '#8D6E63', 'right');
                
                if (type === 'rough') {
                    this.addLabel('Ribosomes', width * 0.55, -height * 0.2, '#4E342E', 'left');
                }
            }
        }

        this.ctx.restore();
    }

    renderGolgiApparatusDiagram(x, y, width, height, options) {
        const { showLabels = true, showVesicles = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawGolgiApparatus(this.ctx, 0, 0, width, height);

        if (showLabels) {
            this.addLabel('Cis Face\n(receiving)', -width * 0.6, 0, '#F57F17', 'right');
            this.addLabel('Medial', 0, -height * 0.5, '#F57F17', 'center');
            this.addLabel('Trans Face\n(shipping)', width * 0.6, 0, '#F57F17', 'left');
            this.addLabel('Cisternae', width * 0.6, -height * 0.3, '#FFD54F', 'left');
            
            if (showVesicles) {
                this.addLabel('Transport\nVesicles', -width * 0.7, -height * 0.3, '#FFF59D', 'right');
                this.addLabel('Secretory\nVesicles', width * 0.7, height * 0.3, '#FFF59D', 'left');
            }

            // Function
            this.ctx.font = 'bold 11px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Modifies, Packages & Ships Proteins', 0, height * 0.6);
        }

        this.ctx.restore();
    }

    renderRibosomeDiagram(x, y, width, height, options) {
        const { showLabels = true, showmRNA = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawRibosome(this.ctx, 0, 0, Math.min(width, height) * 0.4);

        if (showLabels) {
            this.addLabel('Large Subunit\n(60S)', -width * 0.3, -height * 0.2, '#8D6E63', 'right');
            this.addLabel('Small Subunit\n(40S)', width * 0.3, height * 0.1, '#A1887F', 'left');
            
            if (showmRNA) {
                this.addLabel('mRNA', -width * 0.4, height * 0.02, '#FF6F00', 'right');
                this.addLabel('tRNA\n(P site)', -width * 0.15, -height * 0.35, '#4CAF50', 'center');
                this.addLabel('tRNA\n(A site)', width * 0.25, -height * 0.3, '#4CAF50', 'center');
            }

            // Function
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Protein Synthesis', 0, height * 0.4);
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('Translates mRNA into Proteins', 0, height * 0.45);
        }

        this.ctx.restore();
    }

    renderLysosomeDiagram(x, y, size, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawLysosome(this.ctx, 0, 0, size);

        if (showLabels) {
            this.addLabel('Membrane', -size * 1.3, -size * 0.5, '#F57C00', 'right');
            this.addLabel('Digestive\nEnzymes', size * 1.3, 0, '#E65100', 'left');

            // Function
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Cellular Digestion', 0, size * 1.4);
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('Breaks down waste • Recycles materials', 0, size * 1.45);
        }

        this.ctx.restore();
    }

    renderPeroxisomeDiagram(x, y, size, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        // Similar to lysosome but different color
        const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, size);
        gradient.addColorStop(0, '#E1F5FE');
        gradient.addColorStop(0.7, '#B3E5FC');
        gradient.addColorStop(1, '#81D4FA');
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, size, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.strokeStyle = '#0277BD';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        
        // Oxidative enzymes
        this.ctx.fillStyle = '#01579B';
        for(let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const radius = size * 0.4;
            const ex = Math.cos(angle) * radius;
            const ey = Math.sin(angle) * radius;
            this.ctx.beginPath();
            this.ctx.arc(ex, ey, size * 0.15, 0, Math.PI * 2);
            this.ctx.fill();
        }

        if (showLabels) {
            this.addLabel('Membrane', -size * 1.3, -size * 0.5, '#0277BD', 'right');
            this.addLabel('Oxidative\nEnzymes', size * 1.3, 0, '#01579B', 'left');

            // Function
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Oxidation Reactions', 0, size * 1.4);
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('Breaks down fatty acids • Detoxifies', 0, size * 1.45);
        }

        this.ctx.restore();
    }

    renderVacuoleDiagram(x, y, size, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawVacuole(this.ctx, 0, 0, size, size * 0.8);

        if (showLabels) {
            this.addLabel('Tonoplast\n(membrane)', -size * 0.6, -size * 0.5, '#7CB342', 'right');
            this.addLabel('Cell Sap\n(water + dissolved\nsubstances)', size * 0.6, 0, '#558B2F', 'left');

            // Function
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Storage & Turgor Pressure', 0, size * 0.7);
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('Stores water, nutrients, waste • Maintains cell rigidity', 0, size * 0.75);
        }

        this.ctx.restore();
    }

    renderCentrioleDiagram(x, y, size, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawCentriole(this.ctx, 0, 0, size);

        if (showLabels) {
            this.addLabel('Microtubule\nTriplets', size * 1.3, -size * 0.3, '#4A148C', 'left');
            this.addLabel('9 + 0 Structure', -size * 1.3, size * 0.3, '#6A1B9A', 'right');

            // Function
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Organizes Spindle Fibers', 0, size * 1.4);
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('Forms centrosome • Important in cell division', 0, size * 1.45);
        }

        this.ctx.restore();
    }

    // ========== CELL MEMBRANE & TRANSPORT ==========

    renderCellMembraneDiagram(x, y, width, height, options) {
        const { showLabels = true, showProteins = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawCellMembrane(this.ctx, 0, 0, width, height);

        if (showLabels) {
            this.addLabel('Phospholipid\nHead', -width * 0.4, -height * 0.35, '#FF6B6B', 'center');
            this.addLabel('Fatty Acid\nTails', -width * 0.4, 0, '#F4A261', 'center');
            this.addLabel('Cholesterol', width * 0.35, 0, '#E76F51', 'left');
            
            if (showProteins) {
                this.addLabel('Integral\nProtein', -width * 0.15, -height * 0.5, '#2A9D8F', 'center');
                this.addLabel('Peripheral\nProtein', -width * 0.4, -height * 0.55, '#90BE6D', 'right');
                this.addLabel('Channel\nProtein', width * 0.15, -height * 0.5, '#2A9D8F', 'center');
                this.addLabel('Glycoprotein', width * 0, -height * 0.8, '#F94144', 'center');
            }

            // Model name
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Fluid Mosaic Model', 0, height * 0.6);
        }

        this.ctx.restore();
    }

    renderPassiveTransportDiagram(x, y, width, height, options) {
        const { showLabels = true, type = 'all' } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        const spacing = width / 3;

        if (type === 'all' || type === 'diffusion') {
            // Simple diffusion
            CellBiologyShapes.drawDiffusion(this.ctx, type === 'all' ? -spacing : 0, 0, 
                                           type === 'all' ? width * 0.25 : width * 0.4, height * 0.6);
            this.addLabel('Simple\nDiffusion', type === 'all' ? -spacing : 0, -height * 0.45, '#E74C3C', 'center');
        }

        if (type === 'all' || type === 'osmosis') {
            // Osmosis (water movement)
            this.ctx.strokeStyle = '#8B4513';
            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            this.ctx.moveTo(0, -height * 0.3);
            this.ctx.lineTo(0, height * 0.3);
            this.ctx.stroke();

            // Water molecules (left - high concentration)
            this.ctx.fillStyle = '#2196F3';
            for(let i = 0; i < 25; i++) {
                const px = -width * 0.15 + Math.random() * (width * 0.12);
                const py = (Math.random() - 0.5) * height * 0.5;
                this.ctx.beginPath();
                this.ctx.arc(px, py, 4, 0, Math.PI * 2);
                this.ctx.fill();
            }

            // Water molecules (right - low concentration)
            for(let i = 0; i < 10; i++) {
                const px = width * 0.03 + Math.random() * (width * 0.12);
                const py = (Math.random() - 0.5) * height * 0.5;
                this.ctx.beginPath();
                this.ctx.arc(px, py, 4, 0, Math.PI * 2);
                this.ctx.fill();
            }

            // Arrows
            this.ctx.strokeStyle = '#2196F3';
            this.ctx.fillStyle = '#2196F3';
            this.ctx.lineWidth = 2;
            for(let i = 0; i < 5; i++) {
                const ay = (i - 2) * (height / 8);
                this.drawArrow(-width * 0.08, ay, width * 0.08, ay, 8);
            }

            this.addLabel('Osmosis', 0, -height * 0.45, '#2196F3', 'center');
        }

        if (type === 'all' || type === 'facilitated') {
            // Facilitated diffusion
            const fx = type === 'all' ? spacing : 0;
            
            // Membrane
            this.ctx.strokeStyle = '#8B4513';
            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            this.ctx.moveTo(fx, -height * 0.3);
            this.ctx.lineTo(fx, height * 0.3);
            this.ctx.stroke();

            // Channel protein
            this.ctx.fillStyle = '#2A9D8F';
            this.ctx.strokeStyle = '#1A6B5F';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.ellipse(fx, 0, 12, height * 0.25, 0, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();

            // Molecules moving through
            this.ctx.fillStyle = '#9C27B0';
            for(let i = 0; i < 8; i++) {
                const py = -height * 0.25 + (i / 7) * height * 0.5;
                this.ctx.beginPath();
                this.ctx.arc(fx, py, 5, 0, Math.PI * 2);
                this.ctx.fill();
            }

            // Arrow through channel
            this.ctx.strokeStyle = '#9C27B0';
            this.ctx.fillStyle = '#9C27B0';
            this.ctx.lineWidth = 2;
            this.drawArrow(fx, -height * 0.35, fx, height * 0.35, 8);

            this.addLabel('Facilitated\nDiffusion', fx, -height * 0.45, '#2A9D8F', 'center');
        }

        // Main label
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Passive Transport (No ATP Required)', 0, height * 0.5);

        this.ctx.restore();
    }

    renderActiveTransportDiagram(x, y, width, height, options) {
        const { showLabels = true, showATP = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawSodiumPotassiumPump(this.ctx, 0, 0, width, height);

        if (showLabels) {
            this.addLabel('Sodium-Potassium Pump', 0, -height * 0.5, '#2C3E50', 'center');
            this.addLabel('3 Na⁺ out', -width * 0.25, -height * 0.45, '#2196F3', 'center');
            this.addLabel('2 K⁺ in', width * 0.25, height * 0.45, '#9C27B0', 'center');
            
            if (showATP) {
                this.addLabel('ATP → ADP + Pi', -width * 0.45, -height * 0.05, '#FF9800', 'right');
            }

            this.addLabel('Pump Protein', -width * 0.45, -height * 0.3, '#5C6BC0', 'right');

            // Function note
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Active Transport (ATP Required)', 0, height * 0.55);
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('Moves substances against concentration gradient', 0, height * 0.6);
        }

        this.ctx.restore();
    }

    renderEndocytosisDiagram(x, y, width, height, options) {
        const { showLabels = true, type = 'all' } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        if (type === 'all') {
            const spacing = width / 3;

            // Phagocytosis
            CellBiologyShapes.drawEndocytosis(this.ctx, -spacing, 0, width * 0.25, height * 0.6, 'phagocytosis');
            this.addLabel('Phagocytosis', -spacing, -height * 0.4, '#2C3E50', 'center');
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('"Cell Eating"', -spacing, -height * 0.35);
            this.ctx.fillText('Large particles', -spacing, height * 0.35);

            // Pinocytosis
            CellBiologyShapes.drawEndocytosis(this.ctx, 0, 0, width * 0.25, height * 0.6, 'pinocytosis');
            this.addLabel('Pinocytosis', 0, -height * 0.4, '#2C3E50', 'center');
            this.ctx.fillText('"Cell Drinking"', 0, -height * 0.35);
            this.ctx.fillText('Fluids & solutes', 0, height * 0.35);

            // Receptor-mediated
            CellBiologyShapes.drawEndocytosis(this.ctx, spacing, 0, width * 0.25, height * 0.6, 'receptor');
            this.addLabel('Receptor-Mediated', spacing, -height * 0.4, '#2C3E50', 'center');
            this.ctx.fillText('Specific ligands', spacing, -height * 0.35);
            this.ctx.fillText('Clathrin-coated', spacing, height * 0.35);

            // Main title
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.fillText('Endocytosis (Substances INTO Cell)', 0, height * 0.5);

        } else {
            CellBiologyShapes.drawEndocytosis(this.ctx, 0, 0, width, height, type);
            
            if (showLabels) {
                const typeNames = {
                    'phagocytosis': 'Phagocytosis ("Cell Eating")',
                    'pinocytosis': 'Pinocytosis ("Cell Drinking")',
                    'receptor': 'Receptor-Mediated Endocytosis'
                };
                this.addLabel(typeNames[type], 0, -height * 0.5, '#2C3E50', 'center');
            }
        }

        this.ctx.restore();
    }

    renderExocytosisDiagram(x, y, width, height, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        // Cell membrane
        this.ctx.strokeStyle = '#8B4513';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo(-width * 0.4, 0);
        this.ctx.lineTo(width * 0.4, 0);
        this.ctx.stroke();

        // Vesicle approaching membrane
        this.ctx.fillStyle = 'rgba(156, 39, 176, 0.5)';
        this.ctx.strokeStyle = '#7B1FA2';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(0, height * 0.25, 40, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Contents in vesicle
        this.ctx.fillStyle = '#9C27B0';
        for(let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const vx = Math.cos(angle) * 15;
            const vy = height * 0.25 + Math.sin(angle) * 15;
            this.ctx.beginPath();
            this.ctx.arc(vx, vy, 5, 0, Math.PI * 2);
            this.ctx.fill();
        }

        // Fusion with membrane
        this.ctx.strokeStyle = '#9C27B0';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 30, Math.PI / 4, 3 * Math.PI / 4);
        this.ctx.stroke();

        // Released contents
        this.ctx.fillStyle = '#9C27B0';
        for(let i = 0; i < 6; i++) {
            const rx = (Math.random() - 0.5) * width * 0.3;
            const ry = -height * 0.15 - Math.random() * height * 0.2;
            this.ctx.beginPath();
            this.ctx.arc(rx, ry, 5, 0, Math.PI * 2);
            this.ctx.fill();
        }

        // Arrows showing movement
        this.ctx.strokeStyle = '#E91E63';
        this.ctx.fillStyle = '#E91E63';
        this.ctx.lineWidth = 2;
        this.drawArrow(0, height * 0.4, 0, height * 0.1, 10);
        this.drawArrow(0, 0, 0, -height * 0.2, 10);

        if (showLabels) {
            this.addLabel('Vesicle', 0, height * 0.45, '#7B1FA2', 'center');
            this.addLabel('Cell\nMembrane', -width * 0.45, 0, '#8B4513', 'right');
            this.addLabel('Fusion', width * 0.45, 0, '#9C27B0', 'left');
            this.addLabel('Released\nContents', width * 0.35, -height * 0.25, '#9C27B0', 'left');

            // Main title
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Exocytosis (Substances OUT of Cell)', 0, -height * 0.45);
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('Secretion of proteins, neurotransmitters, waste', 0, -height * 0.4);
        }

        this.ctx.restore();
    }

    // ========== CELLULAR RESPIRATION ==========

    renderCellularRespirationOverview(x, y, width, height, options) {
        const { showLabels = true, showATPCount = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        const boxWidth = width * 0.25;
        const boxHeight = height * 0.2;
        const spacing = width * 0.35;

        // Glycolysis box
        this.ctx.fillStyle = '#C8E6C9';
        this.ctx.strokeStyle = '#4CAF50';
        this.ctx.lineWidth = 3;
        this.ctx.fillRect(-spacing - boxWidth / 2, -height * 0.3, boxWidth, boxHeight);
        this.ctx.strokeRect(-spacing - boxWidth / 2, -height * 0.3, boxWidth, boxHeight);

        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Glycolysis', -spacing, -height * 0.25);
        this.ctx.font = '11px Arial';
        this.ctx.fillText('(Cytoplasm)', -spacing, -height * 0.2);
        if (showATPCount) {
            this.ctx.fillStyle = '#4CAF50';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillText('2 ATP', -spacing, -height * 0.15);
        }

        // Krebs Cycle box
        this.ctx.fillStyle = '#FFE0B2';
        this.ctx.strokeStyle = '#FF9800';
        this.ctx.lineWidth = 3;
        this.ctx.fillRect(-boxWidth / 2, -height * 0.3, boxWidth, boxHeight);
        this.ctx.strokeRect(-boxWidth / 2, -height * 0.3, boxWidth, boxHeight);

        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText('Krebs Cycle', 0, -height * 0.25);
        this.ctx.font = '11px Arial';
        this.ctx.fillText('(Mitochondrial', 0, -height * 0.2);
        this.ctx.fillText('Matrix)', 0, -height * 0.16);
        if (showATPCount) {
            this.ctx.fillStyle = '#FF9800';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillText('2 ATP', 0, -height * 0.11);
        }

        // Electron Transport Chain box
        this.ctx.fillStyle = '#FFCDD2';
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 3;
        this.ctx.fillRect(spacing - boxWidth / 2, -height * 0.3, boxWidth, boxHeight);
        this.ctx.strokeRect(spacing - boxWidth / 2, -height * 0.3, boxWidth, boxHeight);

        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText('Electron', spacing, -height * 0.26);
        this.ctx.fillText('Transport Chain', spacing, -height * 0.21);
        this.ctx.font = '11px Arial';
        this.ctx.fillText('(Inner Membrane)', spacing, -height * 0.16);
        if (showATPCount) {
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillText('~34 ATP', spacing, -height * 0.11);
        }

        // Arrows between stages
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.lineWidth = 3;
        this.drawArrow(-spacing + boxWidth / 2, -height * 0.2, -boxWidth / 2, -height * 0.2, 12);
        this.drawArrow(boxWidth / 2, -height * 0.2, spacing - boxWidth / 2, -height * 0.2, 12);

        // Input and output
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        
        // Glucose input
        this.ctx.fillText('C₆H₁₂O₆', -spacing, -height * 0.42);
        this.ctx.fillText('(Glucose)', -spacing, -height * 0.37);
        this.drawArrow(-spacing, -height * 0.35, -spacing, -height * 0.3, 10);

        // O2 input
        this.ctx.fillText('6 O₂', spacing, -height * 0.42);
        this.ctx.fillText('(Oxygen)', spacing, -height * 0.37);
        this.drawArrow(spacing, -height * 0.35, spacing, -height * 0.3, 10);

        // CO2 and H2O output
        this.ctx.fillText('6 CO₂', 0, height * 0.15);
        this.ctx.fillText('6 H₂O', 0, height * 0.2);

        // Net ATP
        if (showATPCount) {
            this.ctx.fillStyle = '#4CAF50';
            this.ctx.font = 'bold 18px Arial';
            this.ctx.fillText('Net: ~38 ATP', 0, height * 0.35);
        }

        // Overall equation
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + ATP', 0, height * 0.45);

        this.ctx.restore();
    }

    renderGlycolysisDiagram(x, y, width, height, options) {
        const { showLabels = true, showSteps = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawGlycolysisPathway(this.ctx, 0, 0, width, height);

        this.ctx.restore();
    }

    renderKrebsCycleDiagram(x, y, radius, options) {
        const { showLabels = true, showEnzymes = false } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawKrebsCycle(this.ctx, 0, 0, radius);

        this.ctx.restore();
    }

    renderElectronTransportChainDiagram(x, y, width, height, options) {
        const { showLabels = true, showProtonGradient = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawElectronTransportChain(this.ctx, 0, 0, width, height);

        if (showProtonGradient) {
            // Additional labels for proton gradient
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#FF5722';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('High H⁺ concentration', 0, -height * 0.35);
            this.ctx.fillText('(Intermembrane Space)', 0, -height * 0.3);

            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('Low H⁺ concentration', 0, height * 0.45);
            this.ctx.fillText('(Matrix)', 0, height * 0.5);
        }

        this.ctx.restore();
    }

    // ========== PHOTOSYNTHESIS ==========

    renderPhotosynthesisOverview(x, y, width, height, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        const boxWidth = width * 0.35;
        const boxHeight = height * 0.25;
        const spacing = width * 0.45;

        // Light reactions box
        this.ctx.fillStyle = '#FFF9C4';
        this.ctx.strokeStyle = '#FBC02D';
        this.ctx.lineWidth = 3;
        this.ctx.fillRect(-spacing - boxWidth / 2, -height * 0.25, boxWidth, boxHeight);
        this.ctx.strokeRect(-spacing - boxWidth / 2, -height * 0.25, boxWidth, boxHeight);

        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Light Reactions', -spacing, -height * 0.2);
        this.ctx.font = '11px Arial';
        this.ctx.fillText('(Thylakoid)', -spacing, -height * 0.15);
        this.ctx.fillStyle = '#4CAF50';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillText('ATP + NADPH', -spacing, -height * 0.08);

        // Calvin Cycle box
        this.ctx.fillStyle = '#C8E6C9';
        this.ctx.strokeStyle = '#4CAF50';
        this.ctx.lineWidth = 3;
        this.ctx.fillRect(spacing - boxWidth / 2, -height * 0.25, boxWidth, boxHeight);
        this.ctx.strokeRect(spacing - boxWidth / 2, -height * 0.25, boxWidth, boxHeight);

        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText('Calvin Cycle', spacing, -height * 0.2);
        this.ctx.font = '11px Arial';
        this.ctx.fillText('(Stroma)', spacing, -height * 0.15);
        this.ctx.fillStyle = '#8BC34A';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillText('Glucose (C₆H₁₂O₆)', spacing, -height * 0.08);

        // Arrow between stages
        this.ctx.strokeStyle = '#FF9800';
        this.ctx.fillStyle = '#FF9800';
        this.ctx.lineWidth = 3;
        this.drawArrow(-spacing + boxWidth / 2, -height * 0.125, spacing - boxWidth / 2, -height * 0.125, 12);
        this.ctx.font = 'bold 11px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('ATP', 0, -height * 0.18);
        this.ctx.fillText('NADPH', 0, -height * 0.14);

        // Inputs and outputs
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#2C3E50';
        
        // Light input
        this.ctx.fillStyle = '#FFEB3B';
        this.ctx.strokeStyle = '#FBC02D';
        this.ctx.lineWidth = 3;
        for(let i = 0; i < 5; i++) {
            const lx = -spacing - 20 + i * 10;
            this.drawArrow(lx, -height * 0.42, lx, -height * 0.35, 8);
        }
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Light Energy', -spacing, -height * 0.45);

        // H2O input
        this.ctx.fillText('H₂O', -spacing - boxWidth * 0.6, -height * 0.05);
        this.drawArrow(-spacing - boxWidth * 0.5, -height * 0.05, -spacing - boxWidth * 0.3, -height * 0.05, 10);

        // O2 output
        this.ctx.fillStyle = '#2196F3';
        this.ctx.fillText('O₂', -spacing + boxWidth * 0.6, -height * 0.05);
        this.drawArrow(-spacing + boxWidth * 0.3, -height * 0.05, -spacing + boxWidth * 0.5, -height * 0.05, 10);

        // CO2 input
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.fillText('CO₂', spacing - boxWidth * 0.6, -height * 0.05);
        this.drawArrow(spacing - boxWidth * 0.5, -height * 0.05, spacing - boxWidth * 0.3, -height * 0.05, 10);

        // Glucose output
        this.ctx.fillStyle = '#4CAF50';
        this.ctx.fillText('C₆H₁₂O₆', spacing + boxWidth * 0.6, -height * 0.05);
        this.drawArrow(spacing + boxWidth * 0.3, -height * 0.05, spacing + boxWidth * 0.5, -height * 0.05, 10);

        // Overall equation
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('6 CO₂ + 6 H₂O + Light Energy → C₆H₁₂O₆ + 6 O₂', 0, height * 0.25);

        // Chloroplast diagram (background)
        this.ctx.strokeStyle = '#4CAF50';
        this.ctx.lineWidth = 3;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.ellipse(0, 0, width * 0.45, height * 0.4, 0, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#4CAF50';
        this.ctx.fillText('Chloroplast', 0, height * 0.4);

        this.ctx.restore();
    }

    renderLightReactionsDiagram(x, y, width, height, options) {
        const { showLabels = true, showElectronFlow = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawLightReactions(this.ctx, 0, 0, width, height);

        if (showLabels && showElectronFlow) {
            this.ctx.font = 'bold 11px Arial';
            this.ctx.fillStyle = '#E91E63';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Electron Flow', 0, -height * 0.52);
        }

        this.ctx.restore();
    }

    renderCalvinCycleDiagram(x, y, radius, options) {
        const { showLabels = true, showSteps = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawCalvinCycle(this.ctx, 0, 0, radius);

        this.ctx.restore();
    }

    // ========== CELL DIVISION ==========

    renderMitosisDiagram(x, y, width, height, options) {
        const { showLabels = true, phase = 'all' } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        if (phase === 'all') {
            const cellSize = height * 0.6;
            const spacing = width / 5;

            const phases = [
                { name: 'Interphase', phase: null },
                { name: 'Prophase', phase: 'prophase' },
                { name: 'Metaphase', phase: 'metaphase' },
                { name: 'Anaphase', phase: 'anaphase' },
                { name: 'Telophase', phase: 'telophase' }
            ];

            phases.forEach((p, index) => {
                const xPos = -width * 0.4 + index * spacing;
                
                if (p.phase === null) {
                    // Interphase - just show normal cell
                    this.ctx.strokeStyle = '#8B4513';
                    this.ctx.lineWidth = 3;
                    this.ctx.fillStyle = 'rgba(255, 243, 224, 0.3)';
                    this.ctx.beginPath();
                    this.ctx.arc(xPos, 0, cellSize / 2, 0, Math.PI * 2);
                    this.ctx.fill();
                    this.ctx.stroke();
                    
                    // Nucleus
                    this.ctx.strokeStyle = '#9C27B0';
                    this.ctx.fillStyle = 'rgba(156, 39, 176, 0.2)';
                    this.ctx.beginPath();
                    this.ctx.arc(xPos, 0, cellSize * 0.2, 0, Math.PI * 2);
                    this.ctx.fill();
                    this.ctx.stroke();
                } else {
                    CellBiologyShapes.drawMitosisPhase(this.ctx, xPos, 0, cellSize, p.phase);
                }

                if (showLabels) {
                    this.ctx.font = 'bold 12px Arial';
                    this.ctx.fillStyle = '#2C3E50';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText(p.name, xPos, cellSize * 0.5 + 20);
                }
            });

            // Arrows between phases
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            for (let i = 0; i < phases.length - 1; i++) {
                const x1 = -width * 0.4 + i * spacing + cellSize * 0.25;
                const x2 = -width * 0.4 + (i + 1) * spacing - cellSize * 0.25;
                this.drawArrow(x1, cellSize * 0.5 + 40, x2, cellSize * 0.5 + 40, 8);
            }

            // Title
            this.ctx.font = 'bold 18px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Mitosis - Stages', 0, -cellSize * 0.5 - 20);

        } else {
            CellBiologyShapes.drawMitosisPhase(this.ctx, 0, 0, Math.min(width, height) * 0.8, phase);
            
            if (showLabels) {
                const phaseNames = {
                    'prophase': 'Prophase',
                    'metaphase': 'Metaphase',
                    'anaphase': 'Anaphase',
                    'telophase': 'Telophase'
                };
                this.ctx.font = 'bold 16px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(phaseNames[phase], 0, -height * 0.5);
            }
        }

        this.ctx.restore();
    }

    renderMeiosisDiagram(x, y, width, height, options) {
        const { showLabels = true, division = 'both' } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        // Title
        this.ctx.font = 'bold 18px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Meiosis', 0, -height * 0.48);

        const cellSize = height * 0.25;
        const verticalSpacing = height * 0.35;

        if (division === 'both' || division === 'I') {
            // Meiosis I label
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#E91E63';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Meiosis I (Reduction Division)', -width * 0.45, -height * 0.4);

            // Starting cell (diploid, 2n)
            this.ctx.strokeStyle = '#8B4513';
            this.ctx.lineWidth = 2;
            this.ctx.fillStyle = 'rgba(255, 243, 224, 0.3)';
            this.ctx.beginPath();
            this.ctx.arc(-width * 0.3, -height * 0.25, cellSize * 0.5, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();

            // Homologous chromosomes (paired)
            this.ctx.strokeStyle = '#E91E63';
            this.ctx.lineWidth = 3;
            // Pair 1
            this.ctx.beginPath();
            this.ctx.moveTo(-width * 0.32, -height * 0.3);
            this.ctx.lineTo(-width * 0.32, -height * 0.2);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(-width * 0.28, -height * 0.3);
            this.ctx.lineTo(-width * 0.28, -height * 0.2);
            this.ctx.stroke();

            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('2n', -width * 0.3, -height * 0.1);

            // Arrow
            this.drawArrow(-width * 0.15, -height * 0.25, -width * 0.05, -height * 0.25, 8);

            // After Meiosis I - two haploid cells
            for (let i = 0; i < 2; i++) {
                const yPos = -height * 0.3 + i * 0.1;
                this.ctx.strokeStyle = '#8B4513';
                this.ctx.lineWidth = 2;
                this.ctx.fillStyle = 'rgba(255, 243, 224, 0.3)';
                this.ctx.beginPath();
                this.ctx.arc(width * 0.1, yPos, cellSize * 0.4, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.stroke();

                // One chromosome
                this.ctx.strokeStyle = '#E91E63';
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(width * 0.1, yPos - cellSize * 0.15);
                this.ctx.lineTo(width * 0.1, yPos + cellSize * 0.15);
                this.ctx.stroke();

                this.ctx.font = '9px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('n', width * 0.1 + cellSize * 0.3, yPos);
            }
        }

        if (division === 'both' || division === 'II') {
            const startY = division === 'both' ? 0 : -height * 0.25;

            // Meiosis II label
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#3F51B5';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Meiosis II (Similar to Mitosis)', -width * 0.45, startY);

            // Two cells entering Meiosis II
            for (let i = 0; i < 2; i++) {
                const yPos = startY + height * 0.05 + i * 0.15;
                this.ctx.strokeStyle = '#8B4513';
                this.ctx.lineWidth = 2;
                this.ctx.fillStyle = 'rgba(255, 243, 224, 0.3)';
                this.ctx.beginPath();
                this.ctx.arc(-width * 0.3, yPos, cellSize * 0.4, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.stroke();

                // Chromosome
                this.ctx.strokeStyle = '#3F51B5';
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(-width * 0.3, yPos - cellSize * 0.15);
                this.ctx.lineTo(-width * 0.3, yPos + cellSize * 0.15);
                this.ctx.stroke();
            }

            // Arrows
            this.drawArrow(-width * 0.15, startY + height * 0.125, -width * 0.05, startY + height * 0.125, 8);

            // Four haploid cells (gametes)
            for (let i = 0; i < 4; i++) {
                const xPos = width * 0.05 + (i % 2) * 0.15;
                const yPos = startY + height * 0.05 + Math.floor(i / 2) * 0.15;
                
                this.ctx.strokeStyle = '#8B4513';
                this.ctx.lineWidth = 2;
                this.ctx.fillStyle = 'rgba(255, 243, 224, 0.3)';
                this.ctx.beginPath();
                this.ctx.arc(xPos, yPos, cellSize * 0.35, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.stroke();

                // Single chromatid
                this.ctx.strokeStyle = '#3F51B5';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(xPos, yPos - cellSize * 0.12);
                this.ctx.lineTo(xPos, yPos + cellSize * 0.12);
                this.ctx.stroke();

                this.ctx.font = '9px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('n', xPos + cellSize * 0.25, yPos);
            }

            this.ctx.font = 'bold 11px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Four Haploid Gametes', width * 0.125, startY + height * 0.25);
        }

        if (showLabels) {
            // Key differences note
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'left';
            const noteY = division === 'both' ? height * 0.4 : height * 0.3;
            this.ctx.fillText('• Meiosis I: Homologous chromosomes separate', -width * 0.45, noteY);
            this.ctx.fillText('• Meiosis II: Sister chromatids separate', -width * 0.45, noteY + 15);
            this.ctx.fillText('• Result: 4 genetically unique haploid cells', -width * 0.45, noteY + 30);
        }

        this.ctx.restore();
    }

    renderCellCycleDiagram(x, y, radius, options) {
        const { showLabels = true, showCheckpoints = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawCellCycle(this.ctx, 0, 0, radius);

        if (showCheckpoints && showLabels) {
            this.ctx.font = 'bold 10px Arial';
            this.ctx.fillStyle = '#E67E22';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Checkpoint', radius * 1.3 * Math.cos(0), radius * 1.3 * Math.sin(0));
        }

        this.ctx.restore();
    }

    // ========== DNA & PROTEIN SYNTHESIS ==========

    renderDNAStructureDiagram(x, y, width, height, options) {
        const { showLabels = true, showBasePairs = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawDNAStructure(this.ctx, 0, 0, width, height);

        if (showLabels) {
            this.addLabel('Sugar-Phosphate\nBackbone', -width * 0.45, 0, '#4169E1', 'right');
            this.addLabel('Base Pairs', width * 0.45, 0, '#808080', 'left');

            if (showBasePairs) {
                // Base pair legend
                this.ctx.font = '11px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'left';
                const legendX = width * 0.35;
                const legendY = -height * 0.4;

                this.ctx.fillText('Base Pairing:', legendX, legendY);
                
                this.ctx.fillStyle = '#FF6B6B';
                this.ctx.fillRect(legendX, legendY + 5, 12, 12);
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.fillText('Adenine (A)', legendX + 15, legendY + 15);

                this.ctx.fillStyle = '#4ECDC4';
                this.ctx.fillRect(legendX, legendY + 20, 12, 12);
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.fillText('Thymine (T)', legendX + 15, legendY + 30);

                this.ctx.fillStyle = '#FFD93D';
                this.ctx.fillRect(legendX, legendY + 35, 12, 12);
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.fillText('Guanine (G)', legendX + 15, legendY + 45);

                this.ctx.fillStyle = '#95E1D3';
                this.ctx.fillRect(legendX, legendY + 50, 12, 12);
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.fillText('Cytosine (C)', legendX + 15, legendY + 60);

                this.ctx.font = 'bold 10px Arial';
                this.ctx.fillText('A pairs with T', legendX, legendY + 75);
                this.ctx.fillText('G pairs with C', legendX, legendY + 88);
            }

            // Title
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('DNA Double Helix', 0, height * 0.55);
        }

        this.ctx.restore();
    }

    renderDNAReplicationDiagram(x, y, width, height, options) {
        const { showLabels = true, showEnzymes = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawDNAReplication(this.ctx, 0, 0, width, height);

        if (showLabels && showEnzymes) {
            // Additional enzyme labels
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'left';
            const noteY = height * 0.35;
            this.ctx.fillText('Enzymes:', -width * 0.45, noteY);
            this.ctx.fillText('• Helicase: Unwinds DNA', -width * 0.45, noteY + 15);
            this.ctx.fillText('• Primase: Adds RNA primers', -width * 0.45, noteY + 30);
            this.ctx.fillText('• DNA Polymerase: Synthesizes DNA', -width * 0.45, noteY + 45);
            this.ctx.fillText('• Ligase: Joins Okazaki fragments', -width * 0.45, noteY + 60);
        }

        this.ctx.restore();
    }

    renderTranscriptionDiagram(x, y, width, height, options) {
        const { showLabels = true, showRNAPolymerase = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawTranscription(this.ctx, 0, 0, width, height);

        if (showLabels) {
            // Process steps
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'left';
            const noteY = height * 0.35;
            this.ctx.fillText('Steps:', width * 0.25, noteY);
            this.ctx.fillText('1. RNA Polymerase binds to promoter', width * 0.25, noteY + 15);
            this.ctx.fillText('2. DNA unwinds at transcription bubble', width * 0.25, noteY + 30);
            this.ctx.fillText('3. RNA nucleotides pair with template', width * 0.25, noteY + 45);
            this.ctx.fillText('4. mRNA strand synthesized 5\' → 3\'', width * 0.25, noteY + 60);
        }

        this.ctx.restore();
    }

    renderTranslationDiagram(x, y, width, height, options) {
        const { showLabels = true, showAnticodon = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        CellBiologyShapes.drawTranslation(this.ctx, 0, 0, width, height);

        if (showLabels) {
            // Process steps
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'left';
            const noteY = height * 0.3;
            this.ctx.fillText('Steps:', -width * 0.45, noteY);
            this.ctx.fillText('1. mRNA binds to ribosome', -width * 0.45, noteY + 15);
            this.ctx.fillText('2. tRNA brings amino acids', -width * 0.45, noteY + 30);
            this.ctx.fillText('3. Anticodon pairs with codon', -width * 0.45, noteY + 45);
            this.ctx.fillText('4. Peptide bonds form', -width * 0.45, noteY + 60);
            this.ctx.fillText('5. Ribosome moves along mRNA', -width * 0.45, noteY + 75);
        }

        this.ctx.restore();
    }

    renderCentralDogmaDiagram(x, y, width, height, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        const boxWidth = width * 0.22;
        const boxHeight = height * 0.4;
        const spacing = width * 0.35;

        // DNA box
        this.ctx.fillStyle = '#E1BEE7';
        this.ctx.strokeStyle = '#7B1FA2';
        this.ctx.lineWidth = 3;
        this.ctx.fillRect(-spacing - boxWidth / 2, -boxHeight / 2, boxWidth, boxHeight);
        this.ctx.strokeRect(-spacing - boxWidth / 2, -boxHeight / 2, boxWidth, boxHeight);

        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 18px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('DNA', -spacing, 5);

        // RNA box
        this.ctx.fillStyle = '#FFE0B2';
        this.ctx.strokeStyle = '#FF9800';
        this.ctx.lineWidth = 3;
        this.ctx.fillRect(-boxWidth / 2, -boxHeight / 2, boxWidth, boxHeight);
        this.ctx.strokeRect(-boxWidth / 2, -boxHeight / 2, boxWidth, boxHeight);

        this.ctx.fillStyle = '#2C3E50';
        this.ctx.fillText('RNA', 0, 5);

        // Protein box
        this.ctx.fillStyle = '#C8E6C9';
        this.ctx.strokeStyle = '#4CAF50';
        this.ctx.lineWidth = 3;
        this.ctx.fillRect(spacing - boxWidth / 2, -boxHeight / 2, boxWidth, boxHeight);
        this.ctx.strokeRect(spacing - boxWidth / 2, -boxHeight / 2, boxWidth, boxHeight);

        this.ctx.fillStyle = '#2C3E50';
        this.ctx.fillText('Protein', spacing, 5);

        // Transcription arrow
        this.ctx.strokeStyle = '#E91E63';
        this.ctx.fillStyle = '#E91E63';
        this.ctx.lineWidth = 4;
        this.drawArrow(-spacing + boxWidth / 2, -boxHeight * 0.15, -boxWidth / 2, -boxHeight * 0.15, 15);
        
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Transcription', -spacing / 2, -boxHeight * 0.15 - 10);

        // Translation arrow
        this.ctx.strokeStyle = '#3F51B5';
        this.ctx.fillStyle = '#3F51B5';
        this.drawArrow(boxWidth / 2, -boxHeight * 0.15, spacing - boxWidth / 2, -boxHeight * 0.15, 15);
        
        this.ctx.fillText('Translation', spacing / 2, -boxHeight * 0.15 - 10);

        // Replication arrow (DNA to DNA)
        this.ctx.strokeStyle = '#7B1FA2';
        this.ctx.fillStyle = '#7B1FA2';
        this.ctx.lineWidth = 3;
        
        // Curved arrow
        this.ctx.beginPath();
        this.ctx.arc(-spacing, -boxHeight / 2 - 40, 40, Math.PI * 0.7, Math.PI * 2.3);
        this.ctx.stroke();
        
        // Arrowhead
        const arrowAngle = Math.PI * 2.3;
        const arrowX = -spacing + 40 * Math.cos(arrowAngle);
        const arrowY = -boxHeight / 2 - 40 + 40 * Math.sin(arrowAngle);
        this.ctx.beginPath();
        this.ctx.moveTo(arrowX, arrowY);
        this.ctx.lineTo(arrowX - 10, arrowY - 5);
        this.ctx.lineTo(arrowX - 5, arrowY + 5);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillText('Replication', -spacing, -boxHeight / 2 - 60);

        // Title
        this.ctx.font = 'bold 20px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Central Dogma of Molecular Biology', 0, boxHeight / 2 + 40);

        this.ctx.restore();
    }

    renderGeneticCodeDiagram(x, y, size, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        // Simplified codon table
        const bases = ['U', 'C', 'A', 'G'];
        const cellSize = size / 5;

        // Draw grid
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 1;
        
        for (let i = 0; i <= 4; i++) {
            // Vertical lines
            this.ctx.beginPath();
            this.ctx.moveTo(-size / 2 + i * cellSize, -size / 2);
            this.ctx.lineTo(-size / 2 + i * cellSize, size / 2);
            this.ctx.stroke();
            
            // Horizontal lines
            this.ctx.beginPath();
            this.ctx.moveTo(-size / 2, -size / 2 + i * cellSize);
            this.ctx.lineTo(size / 2, -size / 2 + i * cellSize);
            this.ctx.stroke();
        }

        // Headers
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        
        // Top header (second position)
        for (let i = 0; i < 4; i++) {
            this.ctx.fillText(bases[i], -size / 2 + (i + 0.5) * cellSize, -size / 2 - 10);
        }

        // Left header (first position)
        this.ctx.textAlign = 'right';
        for (let i = 0; i < 4; i++) {
            this.ctx.fillText(bases[i], -size / 2 - 10, -size / 2 + (i + 0.6) * cellSize);
        }

        // Sample codons and amino acids (simplified representation)
        const codonTable = {
            'UUU': 'Phe', 'UUC': 'Phe', 'UUA': 'Leu', 'UUG': 'Leu',
            'UCU': 'Ser', 'UCC': 'Ser', 'UCA': 'Ser', 'UCG': 'Ser',
            'UAU': 'Tyr', 'UAC': 'Tyr', 'UAA': 'STOP', 'UAG': 'STOP',
            'UGU': 'Cys', 'UGC': 'Cys', 'UGA': 'STOP', 'UGG': 'Trp',
            'CUU': 'Leu', 'CUC': 'Leu', 'CUA': 'Leu', 'CUG': 'Leu',
            'CCU': 'Pro', 'CCC': 'Pro', 'CCA': 'Pro', 'CCG': 'Pro',
            'CAU': 'His', 'CAC': 'His', 'CAA': 'Gln', 'CAG': 'Gln',
            'CGU': 'Arg', 'CGC': 'Arg', 'CGA': 'Arg', 'CGG': 'Arg',
            'AUU': 'Ile', 'AUC': 'Ile', 'AUA': 'Ile', 'AUG': 'Met',
            'ACU': 'Thr', 'ACC': 'Thr', 'ACA': 'Thr', 'ACG': 'Thr',
            'AAU': 'Asn', 'AAC': 'Asn', 'AAA': 'Lys', 'AAG': 'Lys',
            'AGU': 'Ser', 'AGC': 'Ser', 'AGA': 'Arg', 'AGG': 'Arg',
            'GUU': 'Val', 'GUC': 'Val', 'GUA': 'Val', 'GUG': 'Val',
            'GCU': 'Ala', 'GCC': 'Ala', 'GCA': 'Ala', 'GCG': 'Ala',
            'GAU': 'Asp', 'GAC': 'Asp', 'GAA': 'Glu', 'GAG': 'Glu',
            'GGU': 'Gly', 'GGC': 'Gly', 'GGA': 'Gly', 'GGG': 'Gly'
        };

        // Fill in cells with amino acids
        this.ctx.font = '10px Arial';
        this.ctx.textAlign = 'center';
        
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                const firstBase = bases[i];
                const secondBase = bases[j];
                
                // Show representative codon for each combination
                const codon = firstBase + secondBase + 'U'; // Using U as third base
                const aminoAcid = codonTable[codon];
                
                if (aminoAcid) {
                    const cellX = -size / 2 + (j + 0.5) * cellSize;
                    const cellY = -size / 2 + (i + 0.5) * cellSize;
                    
                    // Color code STOP codons
                    if (aminoAcid === 'STOP') {
                        this.ctx.fillStyle = '#E74C3C';
                    } else if (codon === 'AUG') {
                        this.ctx.fillStyle = '#4CAF50'; // Start codon
                    } else {
                        this.ctx.fillStyle = '#2C3E50';
                    }
                    
                    this.ctx.fillText(aminoAcid, cellX, cellY - 5);
                    this.ctx.font = '8px Arial';
                    this.ctx.fillStyle = '#7F8C8D';
                    this.ctx.fillText(codon + '...', cellX, cellY + 5);
                    this.ctx.font = '10px Arial';
                }
            }
        }

        if (showLabels) {
            // Title
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Genetic Code Table (Simplified)', 0, -size / 2 - 40);

            // Legend
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'left';
            const legendY = size / 2 + 20;
            
            this.ctx.fillStyle = '#4CAF50';
            this.ctx.fillText('● AUG = Start (Methionine)', -size / 2, legendY);
            
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.fillText('● UAA, UAG, UGA = Stop', -size / 2, legendY + 15);
            
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('64 codons code for 20 amino acids', -size / 2, legendY + 35);
        }

        this.ctx.restore();
    }

    // ========== CELL SIGNALING ==========

    renderCellSignalingDiagram(x, y, width, height, options) {
        const { showLabels = true, type = 'overview' } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        // Cell membrane
        this.ctx.fillStyle = '#D7CCC8';
        this.ctx.fillRect(-width * 0.4, -height * 0.05, width * 0.8, height * 0.1);
        this.ctx.strokeStyle = '#8B4513';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(-width * 0.4, -height * 0.05, width * 0.8, height * 0.1);

        // Signal molecule (ligand)
        this.ctx.fillStyle = '#E91E63';
        this.ctx.strokeStyle = '#C2185B';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(-width * 0.3, -height * 0.3, 15, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        if (showLabels) {
            this.addLabel('Signal\nMolecule', -width * 0.3, -height * 0.42, '#E91E63', 'center');
        }

        // Receptor protein
        this.ctx.fillStyle = '#2A9D8F';
        this.ctx.strokeStyle = '#1A6B5F';
        this.ctx.lineWidth = 2;
        
        // Extracellular domain
        this.ctx.beginPath();
        this.ctx.roundRect(-width * 0.15, -height * 0.25, 60, 40, 8);
        this.ctx.fill();
        this.ctx.stroke();
        
        // Transmembrane domain
        this.ctx.fillRect(-width * 0.1, -height * 0.05, 50, height * 0.1);
        this.ctx.strokeRect(-width * 0.1, -height * 0.05, 50, height * 0.1);
        
        // Intracellular domain
        this.ctx.beginPath();
        this.ctx.roundRect(-width * 0.15, height * 0.05, 60, 40, 8);
        this.ctx.fill();
        this.ctx.stroke();

        if (showLabels) {
            this.addLabel('Receptor', -width * 0.12, -height * 0.35, '#2A9D8F', 'center');
        }

        // Binding arrow
        this.ctx.strokeStyle = '#E91E63';
        this.ctx.fillStyle = '#E91E63';
        this.ctx.lineWidth = 2;
        this.drawArrow(-width * 0.2, -height * 0.25, -width * 0.15, -height * 0.2, 8);

        // Signal transduction cascade
        const cascadeX = width * 0.1;
        const proteins = [
            { y: height * 0.15, name: 'Protein 1', active: true },
            { y: height * 0.28, name: 'Protein 2', active: true },
            { y: height * 0.41, name: 'Protein 3', active: true }
        ];

        proteins.forEach((protein, index) => {
            this.ctx.fillStyle = protein.active ? '#FF9800' : '#BCAAA4';
            this.ctx.strokeStyle = protein.active ? '#F57C00' : '#8D6E63';
            this.ctx.lineWidth = 2;
            
            this.ctx.beginPath();
            this.ctx.roundRect(cascadeX - 30, protein.y - 15, 60, 30, 5);
            this.ctx.fill();
            this.ctx.stroke();

            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 10px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(protein.name, cascadeX, protein.y + 3);

            // Arrow to next protein
            if (index < proteins.length - 1) {
                this.ctx.strokeStyle = '#FF5722';
                this.ctx.fillStyle = '#FF5722';
                this.ctx.lineWidth = 2;
                this.drawArrow(cascadeX, protein.y + 15, cascadeX, proteins[index + 1].y - 15, 8);
            }
        });

        // Signal from receptor to cascade
        this.ctx.strokeStyle = '#FF5722';
        this.ctx.fillStyle = '#FF5722';
        this.ctx.lineWidth = 2;
        this.drawArrow(-width * 0.08, height * 0.08, cascadeX, proteins[0].y - 15, 8);

        // Cellular response
        this.ctx.fillStyle = '#4CAF50';
        this.ctx.strokeStyle = '#2E7D32';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.roundRect(cascadeX - 40, height * 0.52, 80, 35, 8);
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 11px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Cellular', cascadeX, height * 0.58);
        this.ctx.fillText('Response', cascadeX, height * 0.7);

        // Arrow to response
        this.ctx.strokeStyle = '#4CAF50';
        this.ctx.fillStyle = '#4CAF50';
        this.drawArrow(cascadeX, proteins[proteins.length - 1].y + 15, cascadeX, height * 0.52, 8);

        if (showLabels) {
            this.addLabel('Signal\nTransduction', cascadeX + 60, height * 0.3, '#FF5722', 'left');
            
            // Steps
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('1. Reception', -width * 0.45, -height * 0.2);
            this.ctx.fillText('2. Transduction', -width * 0.45, height * 0.3);
            this.ctx.fillText('3. Response', -width * 0.45, height * 0.65);
        }

        // Title
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Cell Signaling Pathway', 0, -height * 0.48);

        this.ctx.restore();
    }

    renderReceptorTypesDiagram(x, y, width, height, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        const spacing = width / 3;

        // G-Protein Coupled Receptor (GPCR)
        this.drawGPCR(-spacing, 0, width * 0.25, height * 0.7);
        this.addLabel('G-Protein\nCoupled Receptor', -spacing, -height * 0.45, '#2C3E50', 'center');

        // Receptor Tyrosine Kinase (RTK)
        this.drawRTK(0, 0, width * 0.25, height * 0.7);
        this.addLabel('Receptor\nTyrosine Kinase', 0, -height * 0.45, '#2C3E50', 'center');

        // Ion Channel Receptor
        this.drawIonChannel(spacing, 0, width * 0.25, height * 0.7);
        this.addLabel('Ion Channel\nReceptor', spacing, -height * 0.45, '#2C3E50', 'center');

        // Title
        this.ctx.font = 'bold 18px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Cell Surface Receptor Types', 0, height * 0.5);

        this.ctx.restore();
    }

    drawGPCR(x, y, width, height) {
        this.ctx.save();
        this.ctx.translate(x, y);

        // Membrane
        this.ctx.fillStyle = '#D7CCC8';
        this.ctx.fillRect(-width * 0.4, -height * 0.05, width * 0.8, height * 0.1);

        // 7 transmembrane helices
        this.ctx.fillStyle = '#5C6BC0';
        this.ctx.strokeStyle = '#3F51B5';
        this.ctx.lineWidth = 1;
        
        for (let i = 0; i < 7; i++) {
            const hx = -width * 0.35 + i * (width * 0.7 / 7);
            this.ctx.fillRect(hx, -height * 0.3, 8, height * 0.6);
            this.ctx.strokeRect(hx, -height * 0.3, 8, height * 0.6);
        }

        // Ligand
        this.ctx.fillStyle = '#E91E63';
        this.ctx.strokeStyle = '#C2185B';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(0, -height * 0.4, 12, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // G-protein
        this.ctx.fillStyle = '#FF9800';
        this.ctx.strokeStyle = '#F57C00';
        this.ctx.beginPath();
        this.ctx.arc(0, height * 0.35, 20, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 10px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('G', 0, height * 0.38);

        this.ctx.restore();
    }

    drawRTK(x, y, width, height) {
        this.ctx.save();
        this.ctx.translate(x, y);

        // Membrane
        this.ctx.fillStyle = '#D7CCC8';
        this.ctx.fillRect(-width * 0.4, -height * 0.05, width * 0.8, height * 0.1);

        // Receptor protein (dimer)
        this.ctx.fillStyle = '#2A9D8F';
        this.ctx.strokeStyle = '#1A6B5F';
        this.ctx.lineWidth = 2;
        
        // Left monomer
        this.ctx.fillRect(-width * 0.2, -height * 0.3, 25, height * 0.55);
        this.ctx.strokeRect(-width * 0.2, -height * 0.3, 25, height * 0.55);
        
        // Right monomer
        this.ctx.fillRect(width * 0.05, -height * 0.3, 25, height * 0.55);
        this.ctx.strokeRect(width * 0.05, -height * 0.3, 25, height * 0.55);

        // Ligands binding
        this.ctx.fillStyle = '#E91E63';
        this.ctx.strokeStyle = '#C2185B';
        this.ctx.lineWidth = 2;
        
        this.ctx.beginPath();
        this.ctx.arc(-width * 0.08, -height * 0.38, 12, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.beginPath();
        this.ctx.arc(width * 0.17, -height * 0.38, 12, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Tyrosine kinase domains (intracellular)
        this.ctx.fillStyle = '#FF9800';
        this.ctx.strokeStyle = '#F57C00';
        
        this.ctx.beginPath();
        this.ctx.arc(-width * 0.08, height * 0.32, 15, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.beginPath();
        this.ctx.arc(width * 0.17, height * 0.32, 15, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 8px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('TK', -width * 0.08, height * 0.34);
        this.ctx.fillText('TK', width * 0.17, height * 0.34);

        this.ctx.restore();
    }

    drawIonChannel(x, y, width, height) {
        this.ctx.save();
        this.ctx.translate(x, y);

        // Membrane
        this.ctx.fillStyle = '#D7CCC8';
        this.ctx.fillRect(-width * 0.4, -height * 0.05, width * 0.8, height * 0.1);

        // Channel protein
        this.ctx.fillStyle = '#9C27B0';
        this.ctx.strokeStyle = '#7B1FA2';
        this.ctx.lineWidth = 2;
        
        // Left subunit
        this.ctx.fillRect(-width * 0.15, -height * 0.3, 20, height * 0.6);
        this.ctx.strokeRect(-width * 0.15, -height * 0.3, 20, height * 0.6);
        
        // Right subunit
        this.ctx.fillRect(width * 0.05, -height * 0.3, 20, height * 0.6);
        this.ctx.strokeRect(width * 0.05, -height * 0.3, 20, height * 0.6);

        // Pore
        this.ctx.fillStyle = 'rgba(33, 150, 243, 0.3)';
        this.ctx.fillRect(-width * 0.05, -height * 0.25, 20, height * 0.5);

        // Ligand
        this.ctx.fillStyle = '#E91E63';
        this.ctx.strokeStyle = '#C2185B';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(0, -height * 0.38, 12, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Ions flowing through
        this.ctx.fillStyle = '#2196F3';
        for (let i = 0; i < 5; i++) {
            const iy = -height * 0.2 + i * (height * 0.4 / 5);
            this.ctx.beginPath();
            this.ctx.arc(width * 0.05, iy, 4, 0, Math.PI * 2);
            this.ctx.fill();
        }

        // Arrow showing ion flow
        this.ctx.strokeStyle = '#2196F3';
        this.ctx.fillStyle = '#2196F3';
        this.ctx.lineWidth = 2;
        this.drawArrow(width * 0.05, -height * 0.3, width * 0.05, height * 0.35, 8);

        this.ctx.restore();
    }

    // ========== CYTOSKELETON ==========

    renderCytoskeletonDiagram(x, y, width, height, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        const spacing = width / 3;

        // Microfilaments (actin)
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 3;
        for (let i = 0; i < 8; i++) {
            const mx = -spacing + (Math.random() - 0.5) * 20;
            const my = -height * 0.3 + (i / 7) * height * 0.6;
            this.ctx.beginPath();
            this.ctx.moveTo(mx - 30, my);
            this.ctx.lineTo(mx + 30, my);
            this.ctx.stroke();
        }
        this.addLabel('Microfilaments\n(Actin)\n7 nm', -spacing, -height * 0.45, '#E74C3C', 'center');

        // Intermediate filaments
        this.ctx.strokeStyle = '#F39C12';
        this.ctx.lineWidth = 4;
        for (let i = 0; i < 6; i++) {
            const ix = (Math.random() - 0.5) * 20;
            const iy = -height * 0.3 + (i / 5) * height * 0.6;
            this.ctx.beginPath();
            this.ctx.moveTo(ix - 30, iy);
            this.ctx.lineTo(ix + 30, iy);
            this.ctx.stroke();
        }
        this.addLabel('Intermediate\nFilaments\n10 nm', 0, -height * 0.45, '#F39C12', 'center');

        // Microtubules
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.lineWidth = 6;
        for (let i = 0; i < 5; i++) {
            const mx = spacing + (Math.random() - 0.5) * 20;
            const my = -height * 0.3 + (i / 4) * height * 0.6;
            this.ctx.beginPath();
            this.ctx.moveTo(mx - 30, my);
            this.ctx.lineTo(mx + 30, my);
            this.ctx.stroke();
        }
        this.addLabel('Microtubules\n(Tubulin)\n25 nm', spacing, -height * 0.45, '#3498DB', 'center');

        // Functions
        this.ctx.font = '10px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        
        this.ctx.fillText('Cell shape', -spacing, height * 0.38);
        this.ctx.fillText('Movement', -spacing, height * 0.43);
        
        this.ctx.fillText('Structural', 0, height * 0.38);
        this.ctx.fillText('support', 0, height * 0.43);
        
        this.ctx.fillText('Chromosome', spacing, height * 0.38);
        this.ctx.fillText('movement', spacing, height * 0.43);

        // Title
        this.ctx.font = 'bold 18px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.fillText('Cytoskeleton Components', 0, height * 0.5);

        this.ctx.restore();
    }

    renderMicrofilamentsDiagram(x, y, width, height, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        // Actin monomers forming filament
        const monomers = 15;
        const monomerRadius = 12;
        const spacing = width / monomers;

        for (let i = 0; i < monomers; i++) {
            const mx = -width * 0.45 + i * spacing;
            
            // Monomer
            this.ctx.fillStyle = i % 2 === 0 ? '#E74C3C' : '#C0392B';
            this.ctx.strokeStyle = '#A93226';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(mx, 0, monomerRadius, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
        }

        if (showLabels) {
            this.addLabel('(-) End\n(pointed)', -width * 0.5, -height * 0.3, '#E74C3C', 'center');
            this.addLabel('(+) End\n(barbed)', width * 0.5, -height * 0.3, '#E74C3C', 'center');
            this.addLabel('Actin Monomers', 0, -height * 0.4, '#2C3E50', 'center');

            // Function
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Functions: Cell shape, muscle contraction, cell movement', 0, height * 0.35);
            this.ctx.fillText('Dynamic assembly/disassembly', 0, height * 0.42);
        }

        this.ctx.restore();
    }

    renderMicrotubulesDiagram(x, y, width, height, options) {
        const { showLabels = true, showDynamics = false } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        // Microtubule structure (13 protofilaments)
        const radius = 40;
        const protofilaments = 13;

        // Draw hollow tube structure
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.lineWidth = 8;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, radius, 0, Math.PI * 2);
        this.ctx.stroke();

        // Inner circle (hollow)
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([3, 3]);
        this.ctx.beginPath();
        this.ctx.arc(0, 0, radius - 10, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Tubulin dimers
        for (let i = 0; i < protofilaments; i++) {
            const angle = (i / protofilaments) * Math.PI * 2;
            const tx = Math.cos(angle) * radius;
            const ty = Math.sin(angle) * radius;
            
            // Alpha tubulin
            this.ctx.fillStyle = '#5DADE2';
            this.ctx.strokeStyle = '#21618C';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.arc(tx, ty, 6, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
        }

        if (showLabels) {
            this.addLabel('α/β Tubulin\nDimers', width * 0.3, -height * 0.1, '#3498DB', 'left');
            this.addLabel('13 Protofilaments', -width * 0.4, 0, '#3498DB', 'right');
            this.addLabel('Hollow tube', 0, radius + 20, '#2C3E50', 'center');

            // Function
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Functions: Cell division, intracellular transport, cell shape', 0, height * 0.35);
            
            if (showDynamics) {
                this.ctx.fillText('Dynamic instability: rapid growth and shrinkage', 0, height * 0.42);
            }
        }

        this.ctx.restore();
    }

    // ========== SPECIALIZED CELLS ==========

    renderNeuronDiagram(x, y, width, height, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        // Dendrites (left)
        this.ctx.strokeStyle = '#9C27B0';
        this.ctx.lineWidth = 3;
        for (let i = 0; i < 5; i++) {
            const angle = -Math.PI / 3 + (i / 4) * (2 * Math.PI / 3);
            const length = 60 + Math.random() * 40;
            const endX = -width * 0.25 + Math.cos(angle) * length;
            const endY = Math.sin(angle) * length;
            
            this.ctx.beginPath();
            this.ctx.moveTo(-width * 0.25, 0);
            this.ctx.lineTo(endX, endY);
            this.ctx.stroke();
        }

        // Cell body (soma)
        this.ctx.fillStyle = '#BA68C8';
        this.ctx.strokeStyle = '#7B1FA2';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(-width * 0.25, 0, 40, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Nucleus
        this.ctx.fillStyle = '#4A148C';
        this.ctx.strokeStyle = '#311B92';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(-width * 0.25, 0, 20, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Axon hillock
        this.ctx.fillStyle = '#BA68C8';
        this.ctx.beginPath();
        this.ctx.moveTo(-width * 0.25 + 40, 0);
        this.ctx.lineTo(-width * 0.15, 0);
        this.ctx.lineTo(-width * 0.15, -15);
        this.ctx.lineTo(-width * 0.25 + 40, -10);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        // Axon
        this.ctx.strokeStyle = '#E1BEE7';
        this.ctx.lineWidth = 8;
        this.ctx.beginPath();
        this.ctx.moveTo(-width * 0.15, 0);
        this.ctx.lineTo(width * 0.35, 0);
        this.ctx.stroke();

        // Myelin sheath (segments)
        const myelinSegments = 5;
        const segmentLength = (width * 0.5) / (myelinSegments * 2 - 1);
        
        for (let i = 0; i < myelinSegments; i++) {
            const segmentX = -width * 0.15 + i * segmentLength * 2;
            
            // Myelin
            this.ctx.fillStyle = '#FFF9C4';
            this.ctx.strokeStyle = '#F57F17';
            this.ctx.lineWidth = 2;
            this.ctx.fillRect(segmentX, -15, segmentLength * 1.5, 30);
            this.ctx.strokeRect(segmentX, -15, segmentLength * 1.5, 30);
            
            // Multiple layers
            for (let j = 1; j <= 3; j++) {
                this.ctx.strokeStyle = '#FBC02D';
                this.ctx.lineWidth = 1;
                this.ctx.strokeRect(segmentX + j * 2, -15 + j * 2, segmentLength * 1.5 - j * 4, 30 - j * 4);
            }
        }

        // Nodes of Ranvier (gaps)
        for (let i = 1; i < myelinSegments; i++) {
            const nodeX = -width * 0.15 + i * segmentLength * 2 - segmentLength * 0.25;
            this.ctx.fillStyle = '#E1BEE7';
            this.ctx.fillRect(nodeX, -4, segmentLength * 0.5, 8);
        }

        // Axon terminals (synaptic boutons)
        const terminalCount = 4;
        for (let i = 0; i < terminalCount; i++) {
            const ty = -30 + i * 20;
            
            // Terminal branch
            this.ctx.strokeStyle = '#E1BEE7';
            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.35, 0);
            this.ctx.lineTo(width * 0.42, ty);
            this.ctx.stroke();
            
            // Terminal bulb
            this.ctx.fillStyle = '#9C27B0';
            this.ctx.strokeStyle = '#7B1FA2';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(width * 0.42, ty, 12, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            
            // Synaptic vesicles
            this.ctx.fillStyle = '#FF6B6B';
            for (let j = 0; j < 3; j++) {
                const angle = (j / 3) * Math.PI * 2;
                const vx = width * 0.42 + Math.cos(angle) * 5;
                const vy = ty + Math.sin(angle) * 5;
                this.ctx.beginPath();
                this.ctx.arc(vx, vy, 2, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }

        if (showLabels) {
            this.addLabel('Dendrites', -width * 0.4, -height * 0.25, '#9C27B0', 'center');
            this.addLabel('Cell Body\n(Soma)', -width * 0.25, -height * 0.2, '#7B1FA2', 'center');
            this.addLabel('Nucleus', -width * 0.25, height * 0.15, '#4A148C', 'center');
            this.addLabel('Axon Hillock', -width * 0.15, height * 0.15, '#BA68C8', 'center');
            this.addLabel('Myelin Sheath', 0, -height * 0.25, '#F57F17', 'center');
            this.addLabel('Node of\nRanvier', width * 0.05, height * 0.15, '#E1BEE7', 'center');
            this.addLabel('Axon', width * 0.15, height * 0.15, '#E1BEE7', 'center');
            this.addLabel('Axon\nTerminals', width * 0.45, 0, '#9C27B0', 'left');

            // Function
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Transmits electrical signals throughout the nervous system', 0, height * 0.35);
        }

        this.ctx.restore();
    }

    renderMuscleCellDiagram(x, y, width, height, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        // Muscle fiber (cell)
        this.ctx.fillStyle = '#FFCCBC';
        this.ctx.strokeStyle = '#BF360C';
        this.ctx.lineWidth = 3;
        this.ctx.fillRect(-width * 0.4, -height * 0.3, width * 0.8, height * 0.6);
        this.ctx.strokeRect(-width * 0.4, -height * 0.3, width * 0.8, height * 0.6);

        // Myofibrils
        const myofibrilCount = 5;
        for (let i = 0; i < myofibrilCount; i++) {
            const my = -height * 0.2 + (i / (myofibrilCount - 1)) * height * 0.4;
            
            // Sarcomeres (repeating units)
            const sarcomereCount = 8;
            for (let j = 0; j < sarcomereCount; j++) {
                const sx = -width * 0.35 + (j / sarcomereCount) * width * 0.7;
                const sarcomereWidth = (width * 0.7) / sarcomereCount;
                
                // Z-line
                this.ctx.strokeStyle = '#8D6E63';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(sx, my - 8);
                this.ctx.lineTo(sx, my + 8);
                this.ctx.stroke();
                
                // A-band (thick filaments)
                this.ctx.fillStyle = '#D84315';
                this.ctx.fillRect(sx + sarcomereWidth * 0.2, my - 6, sarcomereWidth * 0.6, 12);
                
                // I-band (thin filaments)
                this.ctx.fillStyle = '#FF8A65';
                this.ctx.fillRect(sx, my - 4, sarcomereWidth * 0.2, 8);
                this.ctx.fillRect(sx + sarcomereWidth * 0.8, my - 4, sarcomereWidth * 0.2, 8);
                
                // H-zone
                this.ctx.fillStyle = '#FFAB91';
                this.ctx.fillRect(sx + sarcomereWidth * 0.45, my - 3, sarcomereWidth * 0.1, 6);
            }
        }

        // Nuclei (multiple, peripheral)
        this.ctx.fillStyle = '#7B1FA2';
        this.ctx.strokeStyle = '#4A148C';
        this.ctx.lineWidth = 1;
        const nucleiPositions = [
            [-width * 0.3, -height * 0.25],
            [-width * 0.1, height * 0.2],
            [width * 0.15, -height * 0.2],
            [width * 0.3, height * 0.15]
        ];
        
        nucleiPositions.forEach(([nx, ny]) => {
            this.ctx.beginPath();
            this.ctx.ellipse(nx, ny, 15, 8, 0, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
        });

        // Sarcoplasmic reticulum
        this.ctx.strokeStyle = '#FFA726';
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([3, 3]);
        this.ctx.strokeRect(-width * 0.38, -height * 0.28, width * 0.76, height * 0.56);
        this.ctx.setLineDash([]);

        if (showLabels) {
            this.addLabel('Sarcomere', -width * 0.35, -height * 0.35, '#2C3E50', 'left');
            this.addLabel('Z-line', -width * 0.42, 0, '#8D6E63', 'right');
            this.addLabel('A-band', -width * 0.05, -height * 0.35, '#D84315', 'center');
            this.addLabel('I-band', width * 0.35, -height * 0.35, '#FF8A65', 'center');
            this.addLabel('Nuclei\n(peripheral)', width * 0.42, height * 0.2, '#7B1FA2', 'left');
            this.addLabel('Myofibril', width * 0.42, -height * 0.1, '#2C3E50', 'left');

            // Function
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Skeletal Muscle Cell - Contracts to produce movement', 0, height * 0.4);
        }

        this.ctx.restore();
    }

    renderRedBloodCellDiagram(x, y, width, height, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        // RBC biconcave shape (side view)
        const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, width * 0.3);
        gradient.addColorStop(0, '#E74C3C');
        gradient.addColorStop(0.5, '#C0392B');
        gradient.addColorStop(1, '#A93226');
        
        this.ctx.fillStyle = gradient;
        this.ctx.strokeStyle = '#7F1D1D';
        this.ctx.lineWidth = 2;
        
        // Top curve
        this.ctx.beginPath();
        this.ctx.ellipse(0, -height * 0.1, width * 0.3, height * 0.15, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
        
        // Bottom curve (biconcave)
        this.ctx.beginPath();
        this.ctx.ellipse(0, height * 0.1, width * 0.3, height * 0.15, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
        
        // Central depression
        this.ctx.fillStyle = 'rgba(192, 57, 43, 0.5)';
        this.ctx.beginPath();
        this.ctx.ellipse(0, 0, width * 0.15, height * 0.08, 0, 0, Math.PI * 2);
        this.ctx.fill();

        // Hemoglobin molecules (simplified)
        this.ctx.fillStyle = '#8B0000';
        for (let i = 0; i < 20; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * width * 0.25;
            const hx = Math.cos(angle) * radius;
            const hy = Math.sin(angle) * radius * 0.3;
            
            if (Math.abs(hy) > height * 0.05) {
                this.ctx.beginPath();
                this.ctx.arc(hx, hy, 3, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }

        if (showLabels) {
            this.addLabel('Biconcave\nDisc Shape', -width * 0.4, 0, '#E74C3C', 'right');
            this.addLabel('No Nucleus', width * 0.4, -height * 0.15, '#7F8C8D', 'left');
            this.addLabel('Hemoglobin\nMolecules', width * 0.4, height * 0.15, '#8B0000', 'left');

            // Function
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Red Blood Cell (Erythrocyte)', 0, -height * 0.4);
            
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('Transports oxygen (O₂) and carbon dioxide (CO₂)', 0, height * 0.4);
            this.ctx.fillText('Biconcave shape increases surface area', 0, height * 0.45);
        }

        this.ctx.restore();
    }

    renderWhiteBloodCellDiagram(x, y, size, options) {
        const { showLabels = true, type = 'neutrophil' } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        // Cell membrane
        const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, size / 2);
        gradient.addColorStop(0, '#E8EAF6');
        gradient.addColorStop(0.7, '#C5CAE9');
        gradient.addColorStop(1, '#9FA8DA');
        
        this.ctx.fillStyle = gradient;
        this.ctx.strokeStyle = '#5C6BC0';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        if (type === 'neutrophil') {
            // Multi-lobed nucleus
            const lobes = 3;
            for (let i = 0; i < lobes; i++) {
                const angle = (i / lobes) * Math.PI * 2 - Math.PI / 2;
                const lx = Math.cos(angle) * size * 0.15;
                const ly = Math.sin(angle) * size * 0.15;
                
                this.ctx.fillStyle = '#673AB7';
                this.ctx.strokeStyle = '#4527A0';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.arc(lx, ly, size * 0.12, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.stroke();
            }
            
            // Granules
            this.ctx.fillStyle = '#FF6F00';
            for (let i = 0; i < 15; i++) {
                const angle = Math.random() * Math.PI * 2;
                const radius = size * 0.25 + Math.random() * size * 0.15;
                const gx = Math.cos(angle) * radius;
                const gy = Math.sin(angle) * radius;
                this.ctx.beginPath();
                this.ctx.arc(gx, gy, 3, 0, Math.PI * 2);
                this.ctx.fill();
            }

            if (showLabels) {
                this.addLabel('Multi-lobed\nNucleus', 0, -size * 0.7, '#673AB7', 'center');
                this.addLabel('Granules', size * 0.6, 0, '#FF6F00', 'left');
            }
            
        } else if (type === 'lymphocyte') {
            // Large round nucleus
            this.ctx.fillStyle = '#5E35B1';
            this.ctx.strokeStyle = '#4527A0';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            
            if (showLabels) {
                this.addLabel('Large Round\nNucleus', 0, -size * 0.7, '#5E35B1', 'center');
            }
            
        } else if (type === 'monocyte') {
            // Kidney-shaped nucleus
            this.ctx.fillStyle = '#512DA8';
            this.ctx.strokeStyle = '#4527A0';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.ellipse(-size * 0.05, 0, size * 0.25, size * 0.18, -0.3, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            
            if (showLabels) {
                this.addLabel('Kidney-shaped\nNucleus', 0, -size * 0.7, '#512DA8', 'center');
            }
        }

        if (showLabels) {
            // Type label
            const typeNames = {
                'neutrophil': 'Neutrophil',
                'lymphocyte': 'Lymphocyte',
                'monocyte': 'Monocyte'
            };
            
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`White Blood Cell (${typeNames[type]})`, 0, size * 0.7);
            
            // Function
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            const functions = {
                'neutrophil': 'Fights bacterial infections • Phagocytosis',
                'lymphocyte': 'Immune response • Produces antibodies',
                'monocyte': 'Becomes macrophage • Phagocytosis'
            };
            this.ctx.fillText(functions[type], 0, size * 0.8);
        }

        this.ctx.restore();
    }

    renderSpermCellDiagram(x, y, width, height, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        // Head (contains nucleus)
        this.ctx.fillStyle = '#3498DB';
        this.ctx.strokeStyle = '#2874A6';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.ellipse(-width * 0.35, 0, 30, 40, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Acrosome (tip of head)
        this.ctx.fillStyle = '#1ABC9C';
        this.ctx.beginPath();
        this.ctx.ellipse(-width * 0.35, -25, 25, 15, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Nucleus
        this.ctx.fillStyle = '#21618C';
        this.ctx.beginPath();
        this.ctx.ellipse(-width * 0.35, 5, 20, 30, 0, 0, Math.PI * 2);
        this.ctx.fill();

        // Midpiece (contains mitochondria)
        this.ctx.fillStyle = '#E67E22';
        this.ctx.strokeStyle = '#CA6F1E';
        this.ctx.lineWidth = 2;
        this.ctx.fillRect(-width * 0.35 + 30, -8, width * 0.15, 16);
        this.ctx.strokeRect(-width * 0.35 + 30, -8, width * 0.15, 16);

        // Mitochondria (spiral)
        this.ctx.strokeStyle = '#D35400';
        this.ctx.lineWidth = 2;
        for (let i = 0; i < 8; i++) {
            const mx = -width * 0.35 + 35 + i * (width * 0.15 / 8);
            this.ctx.beginPath();
            this.ctx.moveTo(mx, -6);
            this.ctx.lineTo(mx, 6);
            this.ctx.stroke();
        }

        // Flagellum (tail)
        this.ctx.strokeStyle = '#5DADE2';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(-width * 0.35 + 30 + width * 0.15, 0);
        
        // Wavy tail
        for (let i = 0; i <= 20; i++) {
            const tx = -width * 0.35 + 30 + width * 0.15 + (i / 20) * width * 0.55;
            const ty = Math.sin(i * 0.8) * 12;
            this.ctx.lineTo(tx, ty);
        }
        this.ctx.stroke();

        if (showLabels) {
            this.addLabel('Acrosome', -width * 0.35, -height * 0.3, '#1ABC9C', 'center');
            this.addLabel('Head\n(Nucleus)', -width * 0.45, 0, '#3498DB', 'right');
            this.addLabel('Midpiece\n(Mitochondria)', -width * 0.15, -height * 0.15, '#E67E22', 'center');
            this.addLabel('Flagellum\n(Tail)', width * 0.15, height * 0.15, '#5DADE2', 'center');

            // Function
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Sperm Cell', 0, -height * 0.4);
            
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('Male gamete • Delivers DNA to egg • Highly motile', 0, height * 0.35);
        }

        this.ctx.restore();
    }

    renderEggCellDiagram(x, y, size, options) {
        const { showLabels = true } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        // Corona radiata (outer layer of cells)
        this.ctx.fillStyle = '#FFF9C4';
        this.ctx.strokeStyle = '#F57F17';
        this.ctx.lineWidth = 2;
        
        for (let i = 0; i < 24; i++) {
            const angle = (i / 24) * Math.PI * 2;
            const radius = size * 0.55;
            const cx = Math.cos(angle) * radius;
            const cy = Math.sin(angle) * radius;
            
            this.ctx.beginPath();
            this.ctx.arc(cx, cy, 15, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
        }

        // Zona pellucida (glycoprotein layer)
        const zonaGradient = this.ctx.createRadialGradient(0, 0, size * 0.35, 0, 0, size * 0.5);
        zonaGradient.addColorStop(0, 'rgba(255, 235, 59, 0.3)');
        zonaGradient.addColorStop(1, 'rgba(255, 193, 7, 0.6)');
        
        this.ctx.fillStyle = zonaGradient;
        this.ctx.strokeStyle = '#FFA000';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, size * 0.5, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Cell membrane
        const cellGradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, size * 0.35);
        cellGradient.addColorStop(0, '#FFF3E0');
        cellGradient.addColorStop(0.7, '#FFE0B2');
        cellGradient.addColorStop(1, '#FFCC80');
        
        this.ctx.fillStyle = cellGradient;
        this.ctx.strokeStyle = '#FF9800';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, size * 0.35, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Nucleus
        this.ctx.fillStyle = '#BA68C8';
        this.ctx.strokeStyle = '#7B1FA2';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(-size * 0.1, -size * 0.1, size * 0.15, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Polar body
        this.ctx.fillStyle = '#E1BEE7';
        this.ctx.strokeStyle = '#9C27B0';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(size * 0.22, -size * 0.22, size * 0.08, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Cortical granules
        this.ctx.fillStyle = '#FF6F00';
        for (let i = 0; i < 12; i++) {
            const angle = (i / 12) * Math.PI * 2;
            const radius = size * 0.28;
            const gx = Math.cos(angle) * radius;
            const gy = Math.sin(angle) * radius;
            this.ctx.beginPath();
            this.ctx.arc(gx, gy, 4, 0, Math.PI * 2);
            this.ctx.fill();
        }

        if (showLabels) {
            this.addLabel('Corona\nRadiata', size * 0.65, -size * 0.4, '#F57F17', 'left');
            this.addLabel('Zona\nPellucida', size * 0.55, size * 0.3, '#FFA000', 'left');
            this.addLabel('Cytoplasm', -size * 0.55, 0, '#FF9800', 'right');
            this.addLabel('Nucleus', -size * 0.55, -size * 0.25, '#7B1FA2', 'right');
            this.addLabel('Polar\nBody', size * 0.4, -size * 0.4, '#9C27B0', 'left');

            // Function
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Egg Cell (Ovum)', 0, size * 0.75);
            
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('Female gamete • Largest human cell • Contains nutrients', 0, size * 0.82);
        }

        this.ctx.restore();
    }

    // ========== HELPER METHODS ==========

    drawTitle(title, x, y) {
        this.ctx.font = 'bold 24px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(title, x, y);
    }

    drawDiagramInfo(diagram, x, y, options) {
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(`Category: ${diagram.category}`, x, y);
        this.ctx.fillText(`Description: ${diagram.description}`, x, y + 15);
    }

    renderPlaceholder(diagram, x, y, width, height) {
        this.ctx.fillStyle = '#ECF0F1';
        this.ctx.fillRect(x - width/2, y - height/2, width, height);
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x - width/2, y - height/2, width, height);
        
        this.ctx.font = 'bold 18px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`${diagram.name}`, x, y - 10);
        this.ctx.font = '14px Arial';
        this.ctx.fillText('(Renderer not yet implemented)', x, y + 15);
    }

    renderError(diagram, x, y, width, height, errorMessage) {
        this.ctx.fillStyle = '#FADBD8';
        this.ctx.fillRect(x - width/2, y - height/2, width, height);
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x - width/2, y - height/2, width, height);
        
        this.ctx.font = 'bold 18px Arial';
        this.ctx.fillStyle = '#C0392B';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Error Rendering Diagram', x, y - 10);
        this.ctx.font = '14px Arial';
        this.ctx.fillText(errorMessage, x, y + 15);
    }

    addLabel(text, x, y, color = '#2C3E50', align = 'center') {
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = color;
        this.ctx.textAlign = align;
        
        const lines = text.split('\n');
        lines.forEach((line, index) => {
            this.ctx.fillText(line, x, y + index * 15);
        });
    }

    drawArrow(x1, y1, x2, y2, headSize = 10) {
        const angle = Math.atan2(y2 - y1, x2 - x1);
        
        // Line
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
        
        // Arrowhead
        this.ctx.beginPath();
        this.ctx.moveTo(x2, y2);
        this.ctx.lineTo(
            x2 - headSize * Math.cos(angle - Math.PI / 6),
            y2 - headSize * Math.sin(angle - Math.PI / 6)
        );
        this.ctx.lineTo(
            x2 - headSize * Math.cos(angle + Math.PI / 6),
            y2 - headSize * Math.sin(angle + Math.PI / 6)
        );
        this.ctx.closePath();
        this.ctx.fill();
    }

    clear() {
        if (this.canvas) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    animate() {
        this.currentFrame++;
        requestAnimationFrame(() => this.animate());
    }

    saveAsPNG(filename = 'cell-biology-diagram.png') {
        if (this.canvas) {
            const link = document.createElement('a');
            link.download = filename;
            link.href = this.canvas.toDataURL();
            link.click();
        }
    }
}

// Export the renderer

// Export classes
export { CellBiologyDiagramsRegistry, CellBiologyShapes,CellBiologyDiagramRenderer };
