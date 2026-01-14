// ============================================================================
// ENERGY SYSTEMS REGISTRY - Comprehensive Energy Biology Configuration
// ============================================================================

class EnergySystemsRegistry {
    static diagrams = {
        // ===== CELLULAR ENERGY =====
        
        'mitochondrion': {
            name: 'Mitochondrion Structure',
            category: 'Cellular Energy',
            description: 'Powerhouse of the cell with cristae and matrix',
            dataRequired: [],
            usage: 'Best for cellular respiration education',
            examples: ['ATP production', 'Cell energy', 'Organelles'],
            defaultOptions: {
                title: 'Mitochondrion - The Powerhouse',
                showLabels: true,
                showATP: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'atp': {
            name: 'ATP Molecule',
            category: 'Cellular Energy',
            description: 'Adenosine triphosphate structure and energy release',
            dataRequired: [],
            usage: 'Best for energy currency explanation',
            examples: ['ATP', 'Energy molecule', 'Cellular energy'],
            defaultOptions: {
                title: 'ATP - Energy Currency',
                showLabels: true,
                showHydrolysis: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cellularRespiration': {
            name: 'Cellular Respiration Overview',
            category: 'Cellular Energy',
            description: 'Complete pathway from glucose to ATP',
            dataRequired: [],
            usage: 'Best for metabolism overview',
            examples: ['Respiration', 'ATP synthesis', 'Metabolism'],
            defaultOptions: {
                title: 'Cellular Respiration',
                showLabels: true,
                showStages: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'glycolysis': {
            name: 'Glycolysis Pathway',
            category: 'Cellular Energy',
            description: 'Glucose breakdown to pyruvate',
            dataRequired: [],
            usage: 'Best for glycolysis teaching',
            examples: ['Glycolysis', 'Glucose breakdown', 'Anaerobic'],
            defaultOptions: {
                title: 'Glycolysis',
                showLabels: true,
                showEnergy: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'krebs': {
            name: 'Krebs Cycle (Citric Acid Cycle)',
            category: 'Cellular Energy',
            description: 'Citric acid cycle in mitochondrial matrix',
            dataRequired: [],
            usage: 'Best for aerobic respiration',
            examples: ['Krebs cycle', 'TCA cycle', 'Citric acid'],
            defaultOptions: {
                title: 'Krebs Cycle',
                showLabels: true,
                showProducts: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'electronTransport': {
            name: 'Electron Transport Chain',
            category: 'Cellular Energy',
            description: 'ETC and oxidative phosphorylation',
            dataRequired: [],
            usage: 'Best for ATP synthesis mechanism',
            examples: ['ETC', 'Oxidative phosphorylation', 'Chemiosmosis'],
            defaultOptions: {
                title: 'Electron Transport Chain',
                showLabels: true,
                showGradient: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chemiosmosis': {
            name: 'Chemiosmotic Theory',
            category: 'Cellular Energy',
            description: 'Proton gradient and ATP synthase',
            dataRequired: [],
            usage: 'Best for ATP synthesis detail',
            examples: ['Chemiosmosis', 'ATP synthase', 'Proton gradient'],
            defaultOptions: {
                title: 'Chemiosmosis',
                showLabels: true,
                showFlow: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fermentation': {
            name: 'Fermentation Pathways',
            category: 'Cellular Energy',
            description: 'Lactic acid and alcoholic fermentation',
            dataRequired: [],
            usage: 'Best for anaerobic respiration',
            examples: ['Fermentation', 'Anaerobic', 'Lactate'],
            defaultOptions: {
                title: 'Fermentation',
                type: 'both', // 'lactic', 'alcoholic', 'both'
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== PHOTOSYNTHESIS =====

        'chloroplast': {
            name: 'Chloroplast Structure',
            category: 'Photosynthesis',
            description: 'Chloroplast with thylakoids and stroma',
            dataRequired: [],
            usage: 'Best for photosynthesis organelle',
            examples: ['Chloroplast', 'Photosynthesis', 'Plant cell'],
            defaultOptions: {
                title: 'Chloroplast Structure',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'photosynthesisOverview': {
            name: 'Photosynthesis Overview',
            category: 'Photosynthesis',
            description: 'Light and dark reactions',
            dataRequired: [],
            usage: 'Best for photosynthesis teaching',
            examples: ['Photosynthesis', 'Light reactions', 'Calvin cycle'],
            defaultOptions: {
                title: 'Photosynthesis Overview',
                showLabels: true,
                showReactions: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'lightReactions': {
            name: 'Light-Dependent Reactions',
            category: 'Photosynthesis',
            description: 'Photosystems and electron transport',
            dataRequired: [],
            usage: 'Best for light reactions detail',
            examples: ['Light reactions', 'Photosystem', 'Thylakoid'],
            defaultOptions: {
                title: 'Light Reactions',
                showLabels: true,
                showElectrons: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'calvinCycle': {
            name: 'Calvin Cycle',
            category: 'Photosynthesis',
            description: 'Carbon fixation and glucose synthesis',
            dataRequired: [],
            usage: 'Best for dark reactions',
            examples: ['Calvin cycle', 'Carbon fixation', 'RuBisCO'],
            defaultOptions: {
                title: 'Calvin Cycle',
                showLabels: true,
                showCarbon: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'c4Pathway': {
            name: 'C4 Photosynthesis',
            category: 'Photosynthesis',
            description: 'C4 carbon fixation pathway',
            dataRequired: [],
            usage: 'Best for alternative photosynthesis',
            examples: ['C4 plants', 'Tropical plants', 'Carbon fixation'],
            defaultOptions: {
                title: 'C4 Photosynthesis',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'camPathway': {
            name: 'CAM Photosynthesis',
            category: 'Photosynthesis',
            description: 'Crassulacean acid metabolism',
            dataRequired: [],
            usage: 'Best for desert plant adaptation',
            examples: ['CAM plants', 'Succulents', 'Water conservation'],
            defaultOptions: {
                title: 'CAM Photosynthesis',
                showLabels: true,
                showTime: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== METABOLIC PATHWAYS =====

        'metabolism': {
            name: 'Metabolism Overview',
            category: 'Metabolic Pathways',
            description: 'Anabolism and catabolism',
            dataRequired: [],
            usage: 'Best for metabolism introduction',
            examples: ['Metabolism', 'Anabolism', 'Catabolism'],
            defaultOptions: {
                title: 'Metabolism Overview',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gluconeogenesis': {
            name: 'Gluconeogenesis',
            category: 'Metabolic Pathways',
            description: 'Glucose synthesis from non-carbohydrates',
            dataRequired: [],
            usage: 'Best for glucose metabolism',
            examples: ['Gluconeogenesis', 'Glucose synthesis', 'Fasting'],
            defaultOptions: {
                title: 'Gluconeogenesis',
                showLabels: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'fattyAcidOxidation': {
            name: 'Beta-Oxidation',
            category: 'Metabolic Pathways',
            description: 'Fatty acid breakdown for energy',
            dataRequired: [],
            usage: 'Best for lipid metabolism',
            examples: ['Beta-oxidation', 'Fat burning', 'Lipid metabolism'],
            defaultOptions: {
                title: 'Fatty Acid Oxidation',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'fattyAcidSynthesis': {
            name: 'Fatty Acid Synthesis',
            category: 'Metabolic Pathways',
            description: 'Fat creation from acetyl-CoA',
            dataRequired: [],
            usage: 'Best for lipogenesis',
            examples: ['Lipogenesis', 'Fat storage', 'Synthesis'],
            defaultOptions: {
                title: 'Fatty Acid Synthesis',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'aminoAcidMetabolism': {
            name: 'Amino Acid Metabolism',
            category: 'Metabolic Pathways',
            description: 'Protein breakdown and synthesis',
            dataRequired: [],
            usage: 'Best for protein metabolism',
            examples: ['Protein metabolism', 'Amino acids', 'Transamination'],
            defaultOptions: {
                title: 'Amino Acid Metabolism',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== ENERGY TRANSFORMATION =====

        'energyPyramid': {
            name: 'Energy Pyramid',
            category: 'Ecological Energy',
            description: 'Energy flow through trophic levels',
            dataRequired: [],
            usage: 'Best for ecology teaching',
            examples: ['Food chain', 'Trophic levels', 'Energy flow'],
            defaultOptions: {
                title: 'Energy Pyramid',
                showLabels: true,
                showPercentages: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'foodWeb': {
            name: 'Food Web Energy Flow',
            category: 'Ecological Energy',
            description: 'Complex energy relationships',
            dataRequired: [],
            usage: 'Best for ecosystem energy',
            examples: ['Food web', 'Ecosystem', 'Energy transfer'],
            defaultOptions: {
                title: 'Food Web',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'carbonCycle': {
            name: 'Carbon Cycle',
            category: 'Biogeochemical Cycles',
            description: 'Carbon movement through ecosystems',
            dataRequired: [],
            usage: 'Best for nutrient cycling',
            examples: ['Carbon cycle', 'Photosynthesis', 'Respiration'],
            defaultOptions: {
                title: 'Carbon Cycle',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nitrogenCycle': {
            name: 'Nitrogen Cycle',
            category: 'Biogeochemical Cycles',
            description: 'Nitrogen transformation and flow',
            dataRequired: [],
            usage: 'Best for nitrogen cycling',
            examples: ['Nitrogen cycle', 'Nitrogen fixation', 'Denitrification'],
            defaultOptions: {
                title: 'Nitrogen Cycle',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== MUSCLE ENERGY =====

        'muscleEnergyMetabolism': {
            name: 'Muscle Energy Systems',
            category: 'Muscle Energy',
            description: 'ATP-PC, glycolytic, and oxidative systems',
            dataRequired: [],
            usage: 'Best for exercise physiology',
            examples: ['Muscle energy', 'Exercise', 'ATP systems'],
            defaultOptions: {
                title: 'Muscle Energy Systems',
                showLabels: true,
                showTimeline: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'creatinePhosphate': {
            name: 'Creatine Phosphate System',
            category: 'Muscle Energy',
            description: 'Immediate energy system',
            dataRequired: [],
            usage: 'Best for short-term energy',
            examples: ['Creatine phosphate', 'Immediate energy', 'Sprint'],
            defaultOptions: {
                title: 'Creatine Phosphate System',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== THERMOREGULATION =====

        'thermoregulation': {
            name: 'Body Temperature Regulation',
            category: 'Energy Homeostasis',
            description: 'Heat production and dissipation',
            dataRequired: [],
            usage: 'Best for homeostasis teaching',
            examples: ['Thermoregulation', 'Temperature', 'Homeostasis'],
            defaultOptions: {
                title: 'Thermoregulation',
                showLabels: true,
                showMechanisms: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'bmr': {
            name: 'Basal Metabolic Rate',
            category: 'Energy Homeostasis',
            description: 'Resting energy expenditure',
            dataRequired: [],
            usage: 'Best for metabolism overview',
            examples: ['BMR', 'Metabolism', 'Energy expenditure'],
            defaultOptions: {
                title: 'Basal Metabolic Rate',
                showLabels: true,
                showFactors: true,
                width: 800,
                height: 600,
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
        console.log('=== ENERGY SYSTEMS REGISTRY SUMMARY ===');
        console.log(`Total Diagrams: ${this.getTotalDiagramCount()}`);
        console.log('\nBy Category:');
        const stats = this.getDiagramStats();
        Object.entries(stats).forEach(([category, data]) => {
            console.log(`  ${category}: ${data.count} diagrams`);
        });
    }
}

export { EnergySystemsRegistry };
2. Energy Shapes Library
// ============================================================================
// ENERGY SHAPES LIBRARY
// ============================================================================

class EnergyShapes {

    // ===== MITOCHONDRION =====
    
    static drawMitochondrion(ctx, x, y, width, height, showATP = false) {
        ctx.save();
        ctx.translate(x, y);
        
        // Outer membrane
        const gradient = ctx.createRadialGradient(width * 0.5, height * 0.5, 0, width * 0.5, height * 0.5, width * 0.6);
        gradient.addColorStop(0, '#FFE5CC');
        gradient.addColorStop(0.5, '#FFD699');
        gradient.addColorStop(1, '#FFC266');
        
        ctx.fillStyle = gradient;
        ctx.strokeStyle = '#CC8800';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(width * 0.5, height * 0.5, width * 0.45, height * 0.35, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Inner membrane (cristae)
        ctx.strokeStyle = '#FF9933';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#FFF5E6';
        
        // Matrix space
        ctx.beginPath();
        ctx.ellipse(width * 0.5, height * 0.5, width * 0.4, height * 0.28, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Cristae (folded inner membrane)
        for(let i = 0; i < 6; i++) {
            const cx = width * (0.2 + i * 0.12);
            const cy = height * 0.5;
            
            ctx.strokeStyle = '#FF9933';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(cx, cy - height * 0.25);
            ctx.quadraticCurveTo(cx + width * 0.04, cy - height * 0.15, cx, cy);
            ctx.quadraticCurveTo(cx + width * 0.04, cy + height * 0.15, cx, cy + height * 0.25);
            ctx.stroke();
        }
        
        // DNA (mitochondrial)
        ctx.strokeStyle = '#0066CC';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(width * 0.3, height * 0.5, width * 0.05, 0, Math.PI * 2);
        ctx.stroke();
        
        // Ribosomes
        ctx.fillStyle = '#CC00CC';
        for(let i = 0; i < 8; i++) {
            const rx = width * (0.25 + Math.random() * 0.5);
            const ry = height * (0.35 + Math.random() * 0.3);
            ctx.beginPath();
            ctx.arc(rx, ry, 2, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // ATP molecules if requested
        if(showATP) {
            this.drawATPMolecule(ctx, width * 0.7, height * 0.3, 15);
            this.drawATPMolecule(ctx, width * 0.75, height * 0.6, 15);
            this.drawATPMolecule(ctx, width * 0.65, height * 0.7, 15);
        }
        
        ctx.restore();
    }

    // ===== ATP MOLECULE =====
    
    static drawATPMolecule(ctx, x, y, size) {
        ctx.save();
        ctx.translate(x, y);
        
        // Adenine (base)
        ctx.fillStyle = '#4169E1';
        ctx.strokeStyle = '#00008B';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, -size * 0.8);
        ctx.lineTo(-size * 0.4, -size * 0.4);
        ctx.lineTo(-size * 0.4, size * 0.2);
        ctx.lineTo(0, size * 0.6);
        ctx.lineTo(size * 0.4, size * 0.2);
        ctx.lineTo(size * 0.4, -size * 0.4);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Ribose (sugar)
        ctx.fillStyle = '#32CD32';
        ctx.beginPath();
        ctx.arc(0, size * 1.2, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Phosphate groups
        const phosphates = [
            { x: -size * 0.8, y: size * 1.5, color: '#FF6347' },
            { x: 0, y: size * 1.8, color: '#FF4500' },
            { x: size * 0.8, y: size * 1.5, color: '#DC143C' }
        ];
        
        phosphates.forEach(p => {
            ctx.fillStyle = p.color;
            ctx.strokeStyle = '#8B0000';
            ctx.beginPath();
            ctx.arc(p.x, p.y, size * 0.35, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // P label
            ctx.fillStyle = '#FFFFFF';
            ctx.font = `bold ${size * 0.4}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('P', p.x, p.y);
        });
        
        // High-energy bonds (wavy lines)
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2;
        ctx.setLineDash([2, 2]);
        
        ctx.beginPath();
        ctx.moveTo(-size * 0.5, size * 1.5);
        ctx.lineTo(-size * 0.3, size * 1.5);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(size * 0.3, size * 1.65);
        ctx.lineTo(size * 0.5, size * 1.5);
        ctx.stroke();
        
        ctx.setLineDash([]);
        
        ctx.restore();
    }

    // ===== CHLOROPLAST =====
    
    static drawChloroplast(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Outer membrane
        const gradient = ctx.createRadialGradient(width * 0.5, height * 0.5, 0, width * 0.5, height * 0.5, width * 0.6);
        gradient.addColorStop(0, '#CCFFCC');
        gradient.addColorStop(0.5, '#99FF99');
        gradient.addColorStop(1, '#66CC66');
        
        ctx.fillStyle = gradient;
        ctx.strokeStyle = '#228B22';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(width * 0.5, height * 0.5, width * 0.45, height * 0.35, 0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Stroma (inner fluid)
        ctx.fillStyle = '#E6FFE6';
        ctx.beginPath();
        ctx.ellipse(width * 0.5, height * 0.5, width * 0.4, height * 0.28, 0.2, 0, Math.PI * 2);
        ctx.fill();
        
        // Grana (stacks of thylakoids)
        for(let i = 0; i < 5; i++) {
            const gx = width * (0.2 + i * 0.15);
            const gy = height * (0.4 + Math.random() * 0.2);
            this.drawGranum(ctx, gx, gy, width * 0.12, height * 0.08);
        }
        
        // Stroma lamellae (connecting thylakoids)
        ctx.strokeStyle = '#4CAF50';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 3]);
        for(let i = 0; i < 4; i++) {
            const sy = height * (0.35 + i * 0.1);
            ctx.beginPath();
            ctx.moveTo(width * 0.15, sy);
            ctx.quadraticCurveTo(width * 0.5, sy + height * 0.05, width * 0.85, sy);
            ctx.stroke();
        }
        ctx.setLineDash([]);
        
        // DNA
        ctx.strokeStyle = '#0066CC';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(width * 0.3, height * 0.65, width * 0.06, 0, Math.PI * 2);
        ctx.stroke();
        
        // Starch granules
        ctx.fillStyle = '#FFFFFF';
        ctx.strokeStyle = '#999999';
        ctx.lineWidth = 1;
        for(let i = 0; i < 3; i++) {
            const sx = width * (0.6 + Math.random() * 0.2);
            const sy = height * (0.6 + Math.random() * 0.2);
            ctx.beginPath();
            ctx.arc(sx, sy, width * 0.04, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        
        ctx.restore();
    }
    
    static drawGranum(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Stack of thylakoid discs
        const diskCount = 5;
        for(let i = 0; i < diskCount; i++) {
            const dy = i * (height / diskCount);
            
            // Thylakoid disc
            ctx.fillStyle = i % 2 === 0 ? '#2E7D32' : '#388E3C';
            ctx.strokeStyle = '#1B5E20';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.ellipse(width * 0.5, dy, width * 0.45, height * 0.08, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        
        ctx.restore();
    }

    // ===== CELLULAR RESPIRATION STAGES =====
    
    static drawGlycolysis(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Glucose
        ctx.fillStyle = '#FFE4B5';
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(width * 0.5, height * 0.1, width * 0.12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Glucose', width * 0.5, height * 0.1);
        ctx.font = '12px Arial';
        ctx.fillText('(C₆H₁₂O₆)', width * 0.5, height * 0.14);
        
        // Energy investment arrow
        this.drawMetabolicArrow(ctx, width * 0.5, height * 0.2, width * 0.5, height * 0.35, '#DC143C', '2 ATP', true);
        
        // Intermediate steps
        const intermediates = [
            { y: 0.35, name: 'G6P', color: '#FFD700' },
            { y: 0.45, name: 'F6P', color: '#FFA500' },
            { y: 0.55, name: 'F1,6BP', color: '#FF8C00' }
        ];
        
        intermediates.forEach(inter => {
            ctx.fillStyle = inter.color;
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.roundRect(width * 0.4, height * inter.y - 15, width * 0.2, 30, 5);
            ctx.fill();
            ctx.stroke();
            
            ctx.fillStyle = '#000000';
            ctx.font = 'bold 13px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(inter.name, width * 0.5, height * inter.y + 5);
        });
        
        // Split arrow
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 3;
        ctx.fillStyle = '#4169E1';
        ctx.beginPath();
        ctx.moveTo(width * 0.5, height * 0.62);
        ctx.lineTo(width * 0.35,height * 0.72);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(width * 0.5, height * 0.62);
        ctx.lineTo(width * 0.65, height * 0.72);
        ctx.stroke();
        
        // Two pyruvate molecules
        for(let i = 0; i < 2; i++) {
            const px = width * (0.35 + i * 0.3);
            ctx.fillStyle = '#32CD32';
            ctx.strokeStyle = '#228B22';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(px, height * 0.85, width * 0.1, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            ctx.fillStyle = '#000000';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Pyruvate', px, height * 0.85);
        }
        
        // Energy payoff
        ctx.fillStyle = '#00FF00';
        ctx.font = 'bold 14px Arial';
        ctx.fillText('+ 4 ATP', width * 0.85, height * 0.75);
        ctx.fillText('+ 2 NADH', width * 0.85, height * 0.8);
        
        // Net gain box
        ctx.strokeStyle = '#00AA00';
        ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(width * 0.75, height * 0.88, width * 0.2, height * 0.1, 5);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 13px Arial';
        ctx.fillText('Net: 2 ATP', width * 0.85, height * 0.94);
        
        ctx.restore();
    }

    static drawKrebsCycle(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        const centerX = width * 0.5;
        const centerY = height * 0.5;
        const radius = Math.min(width, height) * 0.35;
        
        // Cycle circle
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 5;
        ctx.setLineDash([10, 5]);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Cycle steps (8 major compounds)
        const compounds = [
            { angle: 0, name: 'Acetyl-CoA', color: '#FF6347', entry: true },
            { angle: Math.PI / 4, name: 'Citrate', color: '#FFD700' },
            { angle: Math.PI / 2, name: 'Isocitrate', color: '#FFA500' },
            { angle: 3 * Math.PI / 4, name: 'α-Ketoglutarate', color: '#FF8C00' },
            { angle: Math.PI, name: 'Succinyl-CoA', color: '#FF7F50' },
            { angle: 5 * Math.PI / 4, name: 'Succinate', color: '#FFA07A' },
            { angle: 3 * Math.PI / 2, name: 'Fumarate', color: '#FFB6C1' },
            { angle: 7 * Math.PI / 4, name: 'Malate', color: '#FFC0CB' }
        ];
        
        compounds.forEach((comp, index) => {
            const cx = centerX + radius * Math.cos(comp.angle);
            const cy = centerY + radius * Math.sin(comp.angle);
            
            ctx.fillStyle = comp.color;
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(cx, cy, width * 0.08, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Label
            ctx.fillStyle = '#000000';
            ctx.font = 'bold 11px Arial';
            ctx.textAlign = 'center';
            const lines = comp.name.split('-');
            lines.forEach((line, i) => {
                ctx.fillText(line, cx, cy + i * 12);
            });
            
            // Entry point marker
            if(comp.entry) {
                ctx.strokeStyle = '#DC143C';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(cx - width * 0.15, cy);
                ctx.lineTo(cx - width * 0.09, cy);
                ctx.stroke();
                
                // Arrow head
                ctx.fillStyle = '#DC143C';
                ctx.beginPath();
                ctx.moveTo(cx - width * 0.09, cy);
                ctx.lineTo(cx - width * 0.12, cy - 5);
                ctx.lineTo(cx - width * 0.12, cy + 5);
                ctx.closePath();
                ctx.fill();
            }
        });
        
        // Products in center
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Per Turn:', centerX, centerY - 30);
        
        const products = ['3 NADH', '1 FADH₂', '1 ATP', '2 CO₂'];
        products.forEach((product, i) => {
            const color = product.includes('NADH') ? '#00AA00' : 
                         product.includes('FADH') ? '#0088FF' :
                         product.includes('ATP') ? '#FF00FF' : '#999999';
            ctx.fillStyle = color;
            ctx.font = 'bold 14px Arial';
            ctx.fillText(product, centerX, centerY - 5 + i * 18);
        });
        
        // CO2 release markers
        ctx.fillStyle = '#666666';
        ctx.beginPath();
        ctx.arc(centerX + radius * 0.7, centerY - radius * 0.7, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 10px Arial';
        ctx.fillText('CO₂', centerX + radius * 0.7, centerY - radius * 0.7 + 3);
        
        ctx.restore();
    }

    static drawElectronTransportChain(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Mitochondrial membrane (top and bottom)
        ctx.fillStyle = '#FFE5CC';
        ctx.fillRect(0, 0, width, height * 0.15);
        ctx.fillRect(0, height * 0.85, width, height * 0.15);
        
        ctx.strokeStyle = '#CC8800';
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 0, width, height * 0.15);
        ctx.strokeRect(0, height * 0.85, width, height * 0.15);
        
        // Intermembrane space label
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Intermembrane Space', width * 0.5, height * 0.08);
        ctx.fillText('Matrix', width * 0.5, height * 0.93);
        
        // Protein complexes
        const complexes = [
            { x: 0.15, name: 'Complex I', color: '#FF6B6B', height: 0.4 },
            { x: 0.35, name: 'Complex II', color: '#4ECDC4', height: 0.3 },
            { x: 0.55, name: 'Complex III', color: '#45B7D1', height: 0.4 },
            { x: 0.75, name: 'Complex IV', color: '#96CEB4', height: 0.4 }
        ];
        
        complexes.forEach(complex => {
            const cx = width * complex.x;
            const ch = height * complex.height;
            
            // Protein complex
            ctx.fillStyle = complex.color;
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.roundRect(cx - width * 0.05, height * 0.15, width * 0.1, ch, 5);
            ctx.fill();
            ctx.stroke();
            
            // Label
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 10px Arial';
            ctx.textAlign = 'center';
            const lines = complex.name.split(' ');
            lines.forEach((line, i) => {
                ctx.fillText(line, cx, height * 0.15 + ch / 2 + i * 12);
            });
        });
        
        // Ubiquinone (Q)
        ctx.fillStyle = '#FFD93D';
        ctx.strokeStyle = '#8B7500';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(width * 0.45, height * 0.5, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 11px Arial';
        ctx.fillText('Q', width * 0.45, height * 0.5 + 4);
        
        // Cytochrome c
        ctx.fillStyle = '#FF1744';
        ctx.beginPath();
        ctx.arc(width * 0.65, height * 0.35, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 10px Arial';
        ctx.fillText('c', width * 0.65, height * 0.35 + 3);
        
        // Electron flow arrows
        ctx.strokeStyle = '#FFD700';
        ctx.fillStyle = '#FFD700';
        ctx.lineWidth = 3;
        
        const electronPath = [
            { x1: 0.2, y1: 0.6, x2: 0.3, y2: 0.5 },
            { x1: 0.4, y1: 0.5, x2: 0.5, y2: 0.5 },
            { x1: 0.6, y1: 0.45, x2: 0.7, y2: 0.5 },
            { x1: 0.8, y1: 0.5, x2: 0.85, y2: 0.6 }
        ];
        
        electronPath.forEach(path => {
            this.drawMetabolicArrow(
                ctx,
                width * path.x1, height * path.y1,
                width * path.x2, height * path.y2,
                '#FFD700', 'e⁻'
            );
        });
        
        // Proton pumping
        for(let i = 0; i < 3; i++) {
            const complexX = [0.15, 0.55, 0.75][i];
            this.drawProtonPump(ctx, width * complexX, height * 0.15, height * 0.4);
        }
        
        // ATP Synthase
        this.drawATPSynthase(ctx, width * 0.9, height * 0.15, width * 0.08, height * 0.7);
        
        // O2 and H2O
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('½ O₂ + 2H⁺', width * 0.75, height * 0.75);
        ctx.fillText('→ H₂O', width * 0.75, height * 0.8);
        
        ctx.restore();
    }
    
    static drawProtonPump(ctx, x, y, height) {
        // Proton (H+) being pumped up
        ctx.fillStyle = '#FF6B6B';
        ctx.strokeStyle = '#C0392B';
        ctx.lineWidth = 1.5;
        
        for(let i = 0; i < 3; i++) {
            const py = y + height * (0.3 + i * 0.2);
            ctx.beginPath();
            ctx.arc(x, py, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 9px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('H⁺', x, py + 3);
            ctx.fillStyle = '#FF6B6B';
        }
        
        // Upward arrow
        ctx.strokeStyle = '#E74C3C';
        ctx.fillStyle = '#E74C3C';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x + 10, y + height * 0.7);
        ctx.lineTo(x + 10, y + height * 0.2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(x + 10, y + height * 0.2);
        ctx.lineTo(x + 7, y + height * 0.25);
        ctx.lineTo(x + 13, y + height * 0.25);
        ctx.closePath();
        ctx.fill();
    }
    
    static drawATPSynthase(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // F0 portion (in membrane)
        ctx.fillStyle = '#9B59B6';
        ctx.strokeStyle = '#6C3483';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(width / 2, height * 0.7, width * 0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Rotor
        ctx.strokeStyle = '#8E44AD';
        ctx.lineWidth = 3;
        for(let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(width / 2, height * 0.7);
            ctx.lineTo(
                width / 2 + Math.cos(angle) * width * 0.35,
                height * 0.7 + Math.sin(angle) * width * 0.35
            );
            ctx.stroke();
        }
        
        // F1 portion (head)
        ctx.fillStyle = '#3498DB';
        ctx.strokeStyle = '#2874A6';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(width / 2, height * 0.3, width * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Catalytic sites
        for(let i = 0; i < 3; i++) {
            const angle = (i / 3) * Math.PI * 2 - Math.PI / 2;
            const cx = width / 2 + Math.cos(angle) * width * 0.3;
            const cy = height * 0.3 + Math.sin(angle) * width * 0.3;
            
            ctx.fillStyle = '#E8F8F5';
            ctx.beginPath();
            ctx.arc(cx, cy, width * 0.12, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        
        // Stalk
        ctx.fillStyle = '#16A085';
        ctx.fillRect(width * 0.4, height * 0.45, width * 0.2, height * 0.25);
        
        // H+ flow and ATP production
        ctx.fillStyle = '#FF6B6B';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('H⁺', width * 0.15, height * 0.7);
        
        ctx.fillStyle = '#00FF00';
        ctx.fillText('ATP', width * 0.85, height * 0.3);
        
        ctx.restore();
    }

    // ===== PHOTOSYNTHESIS =====
    
    static drawLightReactions(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Thylakoid membrane
        ctx.fillStyle = '#2E7D32';
        ctx.strokeStyle = '#1B5E20';
        ctx.lineWidth = 3;
        ctx.fillRect(0, height * 0.4, width, height * 0.2);
        ctx.strokeRect(0, height * 0.4, width, height * 0.2);
        
        // Lumen label
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Thylakoid Lumen', width * 0.5, height * 0.48);
        
        // Stroma label
        ctx.fillStyle = '#000000';
        ctx.fillText('Stroma', width * 0.5, height * 0.2);
        
        // Photosystem II
        this.drawPhotosystem(ctx, width * 0.2, height * 0.4, width * 0.12, height * 0.2, 'II', '#E74C3C');
        
        // Light arrow to PSII
        ctx.strokeStyle = '#FFD700';
        ctx.fillStyle = '#FFD700';
        ctx.lineWidth = 4;
        for(let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.moveTo(width * (0.18 + i * 0.015), height * 0.25);
            ctx.lineTo(width * (0.18 + i * 0.015), height * 0.38);
            ctx.stroke();
        }
        // Arrow head
        ctx.beginPath();
        ctx.moveTo(width * 0.2, height * 0.38);
        ctx.lineTo(width * 0.18, height * 0.35);
        ctx.lineTo(width * 0.22, height * 0.35);
        ctx.closePath();
        ctx.fill();
        
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 11px Arial';
        ctx.fillText('Light', width * 0.2, height * 0.23);
        
        // Water splitting
        ctx.fillStyle = '#4169E1';
        ctx.font = 'bold 12px Arial';
        ctx.fillText('2 H₂O', width * 0.1, height * 0.5);
        ctx.fillText('→ O₂ + 4H⁺', width * 0.1, height * 0.54);
        
        // Electron transport chain
        const etcX = width * 0.45;
        ctx.fillStyle = '#FF6B6B';
        ctx.strokeStyle = '#C0392B';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(etcX - width * 0.05, height * 0.42, width * 0.1, height * 0.16, 5);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Cyt b₆f', etcX, height * 0.5);
        
        // Photosystem I
        this.drawPhotosystem(ctx, width * 0.7, height * 0.4, width * 0.12, height * 0.2, 'I', '#3498DB');
        
        // Light arrow to PSI
        ctx.strokeStyle = '#FFD700';
        ctx.fillStyle = '#FFD700';
        ctx.lineWidth = 4;
        for(let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.moveTo(width * (0.68 + i * 0.015), height * 0.25);
            ctx.lineTo(width * (0.68 + i * 0.015), height * 0.38);
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.moveTo(width * 0.7, height * 0.38);
        ctx.lineTo(width * 0.68, height * 0.35);
        ctx.lineTo(width * 0.72, height * 0.35);
        ctx.closePath();
        ctx.fill();
        
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 11px Arial';
        ctx.fillText('Light', width * 0.7, height * 0.23);
        
        // Electron flow
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 3;
        this.drawMetabolicArrow(ctx, width * 0.26, height * 0.35, etcX - width * 0.06, height * 0.35, '#FFD700', 'e⁻');
        this.drawMetabolicArrow(ctx, etcX + width * 0.06, height * 0.35, width * 0.64, height * 0.35, '#FFD700', 'e⁻');
        
        // NADP+ reduction
        ctx.fillStyle = '#00AA00';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('NADP⁺ + H⁺', width * 0.85, height * 0.35);
        ctx.fillText('→ NADPH', width * 0.85, height * 0.39);
        
        // ATP synthase
        this.drawATPSynthase(ctx, width * 0.5, height * 0.6, width * 0.06, height * 0.35);
        
        // Products box
        ctx.strokeStyle = '#00AA00';
        ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(width * 0.02, height * 0.88, width * 0.3, height * 0.1, 5);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 13px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('Products: ATP + NADPH + O₂', width * 0.04, height * 0.94);
        
        ctx.restore();
    }
    
    static drawPhotosystem(ctx, x, y, width, height, type, color) {
        ctx.save();
        ctx.translate(x, y);
        
        // Protein complex
        ctx.fillStyle = color;
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(-width / 2, 0, width, height, 5);
        ctx.fill();
        ctx.stroke();
        
        // Reaction center
        ctx.fillStyle = '#FFD700';
        ctx.strokeStyle = '#B8860B';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, height / 2, width * 0.25, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Antenna pigments
        for(let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            const px = Math.cos(angle) * width * 0.4;
            const py = height / 2 + Math.sin(angle) * width * 0.4;
            
            ctx.fillStyle = '#32CD32';
            ctx.beginPath();
            ctx.arc(px, py, 4, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Label
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`PS${type}`, 0, height / 2 + 5);
        
        ctx.restore();
    }

    static drawCalvinCycle(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        const centerX = width * 0.5;
        const centerY = height * 0.5;
        const radius = Math.min(width, height) * 0.3;
        
        // Cycle outline
        ctx.strokeStyle = '#228B22';
        ctx.lineWidth = 5;
        ctx.setLineDash([10, 5]);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Three phases
        const phases = [
            { angle: -Math.PI / 2, name: 'Carbon\nFixation', compound: '3-PGA', color: '#FF6B6B' },
            { angle: Math.PI / 6, name: 'Reduction', compound: 'G3P', color: '#4ECDC4' },
            { angle: 5 * Math.PI / 6, name: 'Regeneration', compound: 'RuBP', color: '#95E1D3' }
        ];
        
        phases.forEach((phase, index) => {
            const px = centerX + radius * Math.cos(phase.angle);
            const py = centerY + radius * Math.sin(phase.angle);
            
            // Compound circle
            ctx.fillStyle = phase.color;
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(px, py, width * 0.1, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Compound label
            ctx.fillStyle = '#000000';
            ctx.font = 'bold 13px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(phase.compound, px, py + 5);
            
            // Phase label outside
            const labelX = centerX + radius * 1.5 * Math.cos(phase.angle);
            const labelY = centerY + radius * 1.5 * Math.sin(phase.angle);
            ctx.font = 'bold 12px Arial';
            const lines = phase.name.split('\n');
            lines.forEach((line, i) => {
                ctx.fillText(line, labelX, labelY + i * 14);
            });
        });
        
        // CO2 input
        ctx.strokeStyle = '#DC143C';
        ctx.fillStyle = '#DC143C';
        ctx.lineWidth = 3;
        this.drawMetabolicArrow(
            ctx,
            centerX, centerY - radius * 1.8,
            centerX, centerY - radius * 1.1,
            '#DC143C', 'CO₂'
        );
        
        // ATP and NADPH input
        ctx.fillStyle = '#00AA00';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('ATP', centerX + radius * 1.2, centerY - radius * 0.3);
        ctx.fillText('NADPH', centerX + radius * 1.2, centerY - radius * 0.1);
        
        // G3P output (sugar)
        ctx.strokeStyle = '#FFD700';
        ctx.fillStyle = '#FFD700';
        this.drawMetabolicArrow(
            ctx,
            centerX + radius * 0.7, centerY + radius * 0.7,
            centerX + radius * 1.2, centerY + radius * 1.2,
            '#FFD700', 'Glucose'
        );
        
        // Center label
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 16px Arial';
        ctx.fillText('Calvin', centerX, centerY - 10);
        ctx.fillText('Cycle', centerX, centerY + 10);
        
        ctx.restore();
    }

    // ===== ENERGY PYRAMIDS AND CYCLES =====
    
    static drawEnergyPyramid(ctx, x, y, width, height, showPercentages = true) {
        ctx.save();
        ctx.translate(x, y);
        
        const levels = [
            { name: 'Tertiary Consumers', color: '#E74C3C', energy: '0.1%', examples: 'Hawks, Owls' },
            { name: 'Secondary Consumers', color: '#E67E22', energy: '1%', examples: 'Snakes, Frogs' },
            { name: 'Primary Consumers', color: '#F39C12', energy: '10%', examples: 'Insects, Rabbits' },
            { name: 'Producers', color: '#27AE60', energy: '100%', examples: 'Plants, Algae' }
        ];
        
        const levelHeight = height / levels.length;
        
        levels.forEach((level, index) => {
            const levelY = height - (index + 1) * levelHeight;
            const levelWidth = width * (0.2 + (index + 1) * 0.2);
            const levelX = (width - levelWidth) / 2;
            
            // Draw level
            const gradient = ctx.createLinearGradient(0, levelY, 0, levelY + levelHeight);
            gradient.addColorStop(0, level.color);
            gradient.addColorStop(1, this.darkenColor(level.color, 0.3));
            
            ctx.fillStyle = gradient;
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(levelX, levelY);
            ctx.lineTo(levelX + levelWidth, levelY);
            ctx.lineTo(levelX + levelWidth, levelY + levelHeight);
            ctx.lineTo(levelX, levelY + levelHeight);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            
            // Label
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(level.name, width / 2, levelY + levelHeight * 0.35);
            
            if(showPercentages) {
                ctx.font = 'bold 12px Arial';
                ctx.fillText(level.energy, width / 2, levelY + levelHeight * 0.55);
                ctx.font = '11px Arial';
                ctx.fillText(level.examples, width / 2, levelY + levelHeight * 0.75);
            }
        });
        
        // Energy loss arrows
        ctx.strokeStyle = '#E74C3C';
        ctx.fillStyle = '#E74C3C';
        ctx.lineWidth = 2;
        
        for(let i = 0; i < 3; i++) {
            const arrowY = height - (i + 1.5) * levelHeight;
            const arrowX = width * 0.85;
            
            ctx.beginPath();
            ctx.moveTo(arrowX, arrowY);
            ctx.lineTo(arrowX + width * 0.1, arrowY + levelHeight * 0.3);
            ctx.stroke();
            
            // Arrow head
            ctx.beginPath();
            ctx.moveTo(arrowX + width * 0.1, arrowY + levelHeight * 0.3);
            ctx.lineTo(arrowX + width * 0.08, arrowY + levelHeight * 0.25);
            ctx.lineTo(arrowX + width * 0.12, arrowY + levelHeight * 0.27);
            ctx.closePath();
            ctx.fill();
            
            ctx.fillStyle = '#E74C3C';
            ctx.font = 'bold 10px Arial';
            ctx.textAlign = 'left';
            ctx.fillText('Heat loss', arrowX + width * 0.12, arrowY + levelHeight * 0.32);
            ctx.fillStyle = '#E74C3C';
        }
        
        ctx.restore();
    }

    static drawCarbonCycle(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Components
        const components = {
            atmosphere: { x: 0.5, y: 0.15, r: 0.1, color: '#87CEEB', label: 'Atmospheric\nCO₂' },
            plants: { x: 0.25, y: 0.45, r: 0.08, color: '#2ECC71', label: 'Plants' },
            animals: { x: 0.75, y: 0.45, r: 0.08, color: '#E67E22', label: 'Animals' },
            soil: { x: 0.35, y: 0.75, r: 0.07, color: '#8B4513', label: 'Soil\nOrganisms' },
            ocean: { x: 0.65, y: 0.75, r: 0.08, color: '#3498DB', label: 'Ocean' },
            fossil: { x: 0.5, y: 0.9, r: 0.06, color: '#34495E', label: 'Fossil Fuels' }
        };
        
        // Draw components
        Object.entries(components).forEach(([key, comp]) => {
            ctx.fillStyle = comp.color;
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(width * comp.x, height * comp.y, width * comp.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 11px Arial';
            ctx.textAlign = 'center';
            const lines = comp.label.split('\n');
            lines.forEach((line, i) => {
                ctx.fillText(line, width * comp.x, height * comp.y + i * 12 - (lines.length - 1) * 6);
            });
        });
        
        // Carbon flows
        const flows = [
            { from: 'atmosphere', to: 'plants', label: 'Photosynthesis', color: '#27AE60' },
            { from: 'plants', to: 'animals', label: 'Consumption', color: '#E67E22' },
            { from: 'plants', to: 'atmosphere', label: 'Respiration', color: '#E74C3C' },
            { from: 'animals', to: 'atmosphere', label: 'Respiration', color: '#E74C3C' },
            { from: 'animals', to: 'soil', label: 'Death/Waste', color: '#8B4513' },
            { from: 'plants', to: 'soil', label: 'Death/Decay', color: '#8B4513' },
            { from: 'soil', to: 'atmosphere', label: 'Decomposition', color: '#E74C3C' },
            { from: 'atmosphere', to: 'ocean', label: 'Dissolution', color: '#3498DB' },
            { from: 'ocean', to: 'atmosphere', label: 'Outgassing', color: '#87CEEB' },
            { from: 'fossil', to: 'atmosphere', label: 'Combustion', color: '#E74C3C' }
        ];
        
        flows.forEach(flow => {
            const from = components[flow.from];
            const to = components[flow.to];
            
            const x1 = width * from.x;
            const y1 = height * from.y;
            const x2 = width * to.x;
            const y2 = height * to.y;
            
            // Calculate angle for offset
            const angle = Math.atan2(y2 - y1, x2 - x1);
            const fromX = x1 + Math.cos(angle) * width * from.r;
            const fromY = y1 + Math.sin(angle) * height * from.r;
            const toX = x2 - Math.cos(angle) * width * to.r;
            const toY = y2 - Math.sin(angle) * height * to.r;
            
            // Curved arrow
            ctx.strokeStyle = flow.color;
            ctx.fillStyle = flow.color;
            ctx.lineWidth = 2;
            
            const midX = (fromX + toX) / 2;
            const midY = (fromY + toY) / 2;
            const ctrlX = midX + (toY - fromY) * 0.2;
            const ctrlY = midY - (toX - fromX) * 0.2;
            
            ctx.beginPath();
            ctx.moveTo(fromX, fromY);
            ctx.quadraticCurveTo(ctrlX, ctrlY, toX, toY);
            ctx.stroke();
            
            // Arrow head
            const headAngle = Math.atan2(toY - ctrlY, toX - ctrlX);
            ctx.beginPath();
            ctx.moveTo(toX, toY);
            ctx.lineTo(
                toX - 8 * Math.cos(headAngle - Math.PI / 6),
                toY - 8 * Math.sin(headAngle - Math.PI / 6)
            );
            ctx.lineTo(
                toX - 8 * Math.cos(headAngle + Math.PI / 6),
                toY - 8 * Math.sin(headAngle + Math.PI / 6)
            );
            ctx.closePath();
            ctx.fill();
            
            // Label
            ctx.fillStyle = '#000000';
            ctx.font = '9px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(flow.label, ctrlX, ctrlY);
        });
        
        ctx.restore();
    }

    // ===== MUSCLE ENERGY SYSTEMS =====
    
    static drawMuscleEnergySystem(ctx, x, y, width, height, showTimeline = true) {
        ctx.save();
        ctx.translate(x, y);
        
        const systems = [
            { name: 'ATP-PC\nSystem', duration: '0-10s', color: '#E74C3C', intensity: 'Maximum', y: 0.2 },
            { name: 'Glycolytic\nSystem', duration: '10s-2min', color: '#F39C12', intensity: 'High', y: 0.5 },
            { name: 'Oxidative\nSystem', duration: '2min+', color: '#27AE60', intensity: 'Low-Moderate', y: 0.8 }
        ];
        
        systems.forEach(system => {
            const boxY = height * system.y - height * 0.12;
            const boxHeight = height * 0.2;
            
            // System box
            const gradient = ctx.createLinearGradient(0, boxY, 0, boxY + boxHeight);
            gradient.addColorStop(0, system.color);
            gradient.addColorStop(1, this.darkenColor(system.color, 0.3));
            
            ctx.fillStyle = gradient;
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.roundRect(width * 0.05, boxY, width * 0.3, boxHeight, 10);
            ctx.fill();
            ctx.stroke();
            
            // Label
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            const lines = system.name.split('\n');
            lines.forEach((line, i) => {
                ctx.fillText(line, width * 0.2, boxY + boxHeight * 0.3 + i * 16);
            });
            
            // Duration
            ctx.font = 'bold 12px Arial';
            ctx.fillText(system.duration, width * 0.2, boxY + boxHeight * 0.7);
            
            // Intensity
            ctx.fillStyle = '#000000';
            ctx.font = 'bold 11px Arial';
            ctx.textAlign = 'left';
            ctx.fillText(`Intensity: ${system.intensity}`, width * 0.4, boxY + boxHeight * 0.5);
        });
        
        // Timeline if requested
        if(showTimeline) {
            const timelineY = height * 0.95;
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(width * 0.1, timelineY);
            ctx.lineTo(width * 0.9, timelineY);
            ctx.stroke();
            
            const timeMarks = [
                { time: '0s', x: 0.1 },
                { time: '10s', x: 0.3 },
                { time: '2min', x: 0.6 },
                { time: '10min+', x: 0.9 }
            ];
            
            timeMarks.forEach(mark => {
                ctx.beginPath();
                ctx.moveTo(width * mark.x, timelineY - 5);
                ctx.lineTo(width * mark.x, timelineY + 5);
                ctx.stroke();
                
                ctx.fillStyle = '#000000';
                ctx.font = '10px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(mark.time, width * mark.x, timelineY + 15);
            });
        }
        
        // ATP production rates
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('ATP Production Rate:', width * 0.55, height * 0.15);
        
        const rates = [
            { system: 'ATP-PC:', rate: 'Very Fast', x: 0.55, y: 0.25, color: '#E74C3C' },
            { system: 'Glycolytic:', rate: 'Fast', x: 0.55, y: 0.35, color: '#F39C12' },
            { system: 'Oxidative:', rate: 'Slow but Sustained', x: 0.55, y: 0.45, color: '#27AE60' }
        ];
        
        rates.forEach(rate => {
            ctx.fillStyle = rate.color;
            ctx.fillText(rate.system, width * rate.x, height * rate.y);
            ctx.fillStyle = '#000000';
            ctx.font = '11px Arial';
            ctx.fillText(rate.rate, width * (rate.x + 0.15), height * rate.y);
            ctx.font = 'bold 12px Arial';
        });
        
        ctx.restore();
    }

    // ===== UTILITY FUNCTIONS =====
    
    static drawMetabolicArrow(ctx, x1, y1, x2, y2, color, label = '', curved = false) {
        ctx.save();
        
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 2.5;
        
        if(curved) {
            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2;
            const dx = x2 - x1;
            const dy = y2 - y1;
            const ctrlX = midX - dy * 0.2;
            const ctrlY = midY + dx * 0.2;
            
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.quadraticCurveTo(ctrlX, ctrlY, x2, y2);
            ctx.stroke();
            
            const angle = Math.atan2(y2 - ctrlY, x2 - ctrlX);
            ctx.beginPath();
            ctx.moveTo(x2, y2);
            ctx.lineTo(
                x2 - 10 * Math.cos(angle - Math.PI / 6),
                y2 - 10 * Math.sin(angle - Math.PI / 6)
            );
            ctx.lineTo(
                x2 - 10 * Math.cos(angle + Math.PI / 6),
                y2 - 10 * Math.sin(angle + Math.PI / 6)
            );
            ctx.closePath();
            ctx.fill();
            
            if(label) {
                ctx.fillStyle = '#000000';
                ctx.font = 'bold 11px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(label, ctrlX, ctrlY - 5);
            }
        } else {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            
            const angle = Math.atan2(y2 - y1, x2 - x1);
            ctx.beginPath();
            ctx.moveTo(x2, y2);
            ctx.lineTo(
                x2 - 10 * Math.cos(angle - Math.PI / 6),
                y2 - 10 * Math.sin(angle - Math.PI / 6)
            );
            ctx.lineTo(
                x2 - 10 * Math.cos(angle + Math.PI / 6),
                y2 - 10 * Math.sin(angle + Math.PI / 6)
            );
            ctx.closePath();
            ctx.fill();
            
            if(label) {
                const midX = (x1 + x2) / 2;
                const midY = (y1 + y2) / 2;
                ctx.fillStyle = '#000000';
                ctx.font = 'bold 11px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(label, midX, midY - 5);
            }
        }
        
        ctx.restore();
    }
    
    static darkenColor(color, amount) {
        const hex = color.replace('#', '');
        const r = Math.max(0, parseInt(hex.substr(0, 2), 16) - amount * 255);
        const g = Math.max(0, parseInt(hex.substr(2, 2), 16) - amount * 255);
        const b = Math.max(0, parseInt(hex.substr(4, 2), 16) - amount * 255);
        return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
    }
}

export { EnergyShapes };
3. Energy Diagram Renderer
// ============================================================================
// ENERGY DIAGRAM RENDERER
// ============================================================================

class EnergyDiagramRenderer {
    constructor(canvas = null) {
        this.defaultFont = 'Arial, sans-serif';
        this.defaultFontSize = 12;
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
        this.currentFrame = 0;
    }

    renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = EnergySystemsRegistry.getDiagram(diagramKey);
        if (!diagram) {
            throw new Error(`Energy diagram '${diagramKey}' not found`);
        }

        const mergedOptions = { ...diagram.defaultOptions, ...options };
        
        this.ctx.save();
        this.ctx.translate(x, y);

        // Clear background
        this.ctx.fillStyle = mergedOptions.backgroundColor;
        this.ctx.fillRect(0, 0, width, height);

        // Title
        this.drawTitle(mergedOptions.title, width / 2, 30);

        // Route to specific renderer
        const centerX = width / 2;
        const centerY = height / 2 + 30;

        try {
            switch (diagramKey) {
                // ===== CELLULAR ENERGY =====
                case 'mitochondrion':
                    this.renderMitochondrionDiagram(centerX, centerY, width * 0.7, height * 0.6, mergedOptions);
                    break;
                case 'atp':
                    this.renderATPDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'cellularRespiration':
                    this.renderCellularRespirationDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'glycolysis':
                    this.renderGlycolysisDiagram(centerX, centerY, width * 0.6, height * 0.75, mergedOptions);
                    break;
                case 'krebs':
                    this.renderKrebsDiagram(centerX, centerY, width * 0.75, height * 0.75, mergedOptions);
                    break;
                case 'electronTransport':
                    this.renderElectronTransportDiagram(centerX, centerY, width * 0.85, height * 0.55, mergedOptions);
                    break;
                case 'chemiosmosis':
                    this.renderChemiosmosisDiagram(centerX, centerY, width * 0.75, height * 0.55, mergedOptions);
                    break;
                case 'fermentation':
                    this.renderFermentationDiagram(centerX, centerY, width * 0.75, height * 0.55, mergedOptions);
                    break;
                    
                // ===== PHOTOSYNTHESIS =====
                case 'chloroplast':
                    this.renderChloroplastDiagram(centerX, centerY, width * 0.7, height * 0.6, mergedOptions);
                    break;
                case 'photosynthesisOverview':
                    this.renderPhotosynthesisOverviewDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'lightReactions':
                    this.renderLightReactionsDiagram(centerX, centerY, width * 0.85, height * 0.55, mergedOptions);
                    break;
                case 'calvinCycle':
                    this.renderCalvinCycleDiagram(centerX, centerY, width * 0.75, height * 0.75, mergedOptions);
                    break;
                case 'c4Pathway':
                    this.renderC4PathwayDiagram(centerX, centerY, width * 0.75, height * 0.65, mergedOptions);
                    break;
                case 'camPathway':
                    this.renderCAMPathwayDiagram(centerX, centerY, width * 0.75, height * 0.55, mergedOptions);
                    break;
                    
                // ===== METABOLIC PATHWAYS =====
                case 'metabolism':
                    this.renderMetabolismOverviewDiagram(centerX, centerY, width * 0.75, height * 0.55, mergedOptions);
                    break;
                case 'gluconeogenesis':
                    this.renderGluconeogenesisDiagram(centerX, centerY, width * 0.6, height * 0.75, mergedOptions);
                    break;
                case 'fattyAcidOxidation':
                    this.renderBetaOxidationDiagram(centerX, centerY, width * 0.75, height * 0.65, mergedOptions);
                    break;
                case 'fattyAcidSynthesis':
                    this.renderFattyAcidSynthesisDiagram(centerX, centerY, width * 0.75, height * 0.65, mergedOptions);
                    break;
                case 'aminoAcidMetabolism':
                    this.renderAminoAcidMetabolismDiagram(centerX, centerY, width * 0.75, height * 0.65, mergedOptions);
                    break;
                    
                // ===== ECOLOGICAL ENERGY =====
                case 'energyPyramid':
                    this.renderEnergyPyramidDiagram(centerX, centerY, width * 0.6, height * 0.6, mergedOptions);
                    break;
                case 'foodWeb':
                    this.renderFoodWebDiagram(centerX, centerY, width * 0.85, height * 0.65, mergedOptions);
                    break;
                case 'carbonCycle':
                    this.renderCarbonCycleDiagram(centerX, centerY, width * 0.85, height * 0.65, mergedOptions);
                    break;
                case 'nitrogenCycle':
                    this.renderNitrogenCycleDiagram(centerX, centerY, width * 0.85, height * 0.65, mergedOptions);
                    break;
                    
                // ===== MUSCLE ENERGY =====
                case 'muscleEnergyMetabolism':
                    this.renderMuscleEnergyDiagram(centerX, centerY, width * 0.85, height * 0.55, mergedOptions);
                    break;
                case 'creatinePhosphate':
                    this.renderCreatinePhosphateDiagram(centerX, centerY, width * 0.65, height * 0.55, mergedOptions);
                    break;
                    
                // ===== ENERGY HOMEOSTASIS =====
                case 'thermoregulation':
                    this.renderThermoregulationDiagram(centerX, centerY, width * 0.75, height * 0.65, mergedOptions);
                    break;
                case 'bmr':
                    this.renderBMRDiagram(centerX, centerY, width * 0.75, height * 0.55, mergedOptions);
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

    // ===== RENDERING METHODS =====

    renderMitochondrionDiagram(x, y, width, height, options) {
        const { showLabels, showATP } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        EnergyShapes.drawMitochondrion(this.ctx, 0, 0, width, height, showATP);
        
        if(showLabels) {
            this.addLabel('Outer Membrane', width * 0.05, height * 0.15, '#CC8800', 'left');
            this.addLabel('Inner Membrane\n(Cristae)', width * 0.05, height * 0.5, '#FF9933', 'left');
            this.addLabel('Matrix', width * 0.5, height * 0.5, '#8B4513');
            this.addLabel('mtDNA', width * 0.3, height * 0.35, '#0066CC');
            
            if(showATP) {
                this.addLabel('ATP Production', width * 0.85, height * 0.2, '#00AA00', 'left');
            }
        }
        
        this.ctx.restore();
    }

    renderATPDiagram(x, y, width, height, options) {
        const { showLabels, showHydrolysis } = options;
        
        this.ctx.save();
        this.ctx.translate(x, y);
        
        // ATP molecule
        EnergyShapes.drawATPMolecule(this.ctx, -width * 0.25, -height * 0.2, 40);
        
        if(showHydrolysis) {
            // Hydrolysis arrow
            EnergyShapes.drawMetabolicArrow(
                this.ctx,
                -width * 0.05, 0,
                width * 0.15, 0,
                '#E74C3C', 'H₂O'
            );
            
            // ADP + Pi
            this.ctx.fillStyle = '#4169E1';
            this.ctx.strokeStyle = '#00008B';
            this.ctx.lineWidth = 1.5;
            ctx.beginPath();
            this.ctx.arc(width * 0.3, -height * 0.15, 35, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('ADP + Pi', width * 0.3, -height * 0.15 + 5);
            
            // Energy release
            this.ctx.fillStyle = '#FFD700';
            this.ctx.font = 'bold 18px Arial';
            this.ctx.fillText('+ ENERGY', width * 0.3, height * 0.15);
            
            // Energy burst
            for(let i = 0; i < 8; i++) {
                const angle = (i / 8) * Math.PI * 2;
                ctx.strokeStyle = '#FFD700';
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(width * 0.3, height * 0.15);
                this.ctx.lineTo(
                    width * 0.3 + Math.cos(angle) * 30,
                    height * 0.15 + Math.sin(angle) * 30
                );
                this.ctx.stroke();
            }
        }
        
        if(showLabels) {
            this.addLabel('Adenine', -width * 0.25, -height * 0.35, '#4169E1');
            this.addLabel('Ribose', -width * 0.25, -height * 0.05, '#32CD32');
            this.addLabel('Phosphate Groups', -width * 0.25, height * 0.25, '#FF6347');
            this.addLabel('High-Energy\nBonds', -width * 0.42, height * 0.15, '#FFD700', 'right');
        }
        
        this.ctx.restore();
    }

    renderCellularRespirationDiagram(x, y, width, height, options) {
        const { showLabels, showStages } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Overall equation at top
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP', width / 2, 20);
        
        if(showStages) {
            const stageHeight = height * 0.25;
            const stages = [
                { name: 'Glycolysis', y: 0.15, color: '#E74C3C', atp: '2 ATP', location: 'Cytoplasm' },
                { name: 'Krebs Cycle', y: 0.42, color: '#F39C12', atp: '2 ATP', location: 'Matrix' },
                { name: 'Electron Transport', y: 0.69, color: '#27AE60', atp: '~32 ATP', location: 'Inner Membrane' }
            ];
            
            stages.forEach((stage, index) => {
                const stageY = height * stage.y;
                
                // Stage box
                const gradient = this.ctx.createLinearGradient(0, stageY, 0, stageY + stageHeight);
                gradient.addColorStop(0, stage.color);
                gradient.addColorStop(1, EnergyShapes.darkenColor(stage.color, 0.3));
                
                this.ctx.fillStyle = gradient;
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.roundRect(width * 0.1, stageY, width * 0.8, stageHeight, 10);
                this.ctx.fill();
                this.ctx.stroke();
                
                // Labels
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.font = 'bold 18px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(stage.name, width * 0.3, stageY + stageHeight * 0.35);
                
                this.ctx.font = 'bold 16px Arial';
                this.ctx.fillText(stage.atp, width * 0.7, stageY + stageHeight * 0.35);
                
                this.ctx.font = '13px Arial';
                this.ctx.fillText(stage.location, width * 0.5, stageY + stageHeight * 0.7);
                
                // Arrow to next stage
                if(index < stages.length - 1) {
                    this.ctx.strokeStyle = '#2C3E50';
                    this.ctx.fillStyle = '#2C3E50';
                    this.ctx.lineWidth = 3;
                    
                    const arrowStartY = stageY + stageHeight + 5;
                    const arrowEndY = height * stages[index + 1].y - 5;
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(width * 0.5, arrowStartY);
                    this.ctx.lineTo(width * 0.5, arrowEndY);
                    this.ctx.stroke();
                    
                    // Arrow head
                    this.ctx.beginPath();
                    this.ctx.moveTo(width * 0.5, arrowEndY);
                    this.ctx.lineTo(width * 0.47, arrowEndY - 8);
                    this.ctx.lineTo(width * 0.53, arrowEndY - 8);
                    this.ctx.closePath();
                    this.ctx.fill();
                }
            });
            
            // Total ATP
            this.ctx.strokeStyle = '#00AA00';
            this.ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.roundRect(width * 0.1, height * 0.92, width * 0.8, height * 0.06, 5);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Total: ~36-38 ATP per glucose', width * 0.5, height * 0.96);
        }
        
        this.ctx.restore();
    }

    renderGlycolysisDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        EnergyShapes.drawGlycolysis(this.ctx, 0, 0, width, height);
        
        if(showLabels) {
            this.addLabel('Energy Investment\nPhase', width * 0.08, height * 0.28, '#DC143C', 'left');
            this.addLabel('Energy Payoff\nPhase', width * 0.08, height * 0.72, '#00AA00', 'left');
        }
        
        this.ctx.restore();
    }

    renderKrebsDiagram(x, y, width, height, options) {
        const { showLabels, showProducts } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        EnergyShapes.drawKrebsCycle(this.ctx, 0, 0, width, height);
        
        if(showLabels && showProducts) {
            // Total output box
            this.ctx.strokeStyle = '#4169E1';
            this.ctx.fillStyle = 'rgba(65, 105, 225, 0.1)';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.roundRect(width * 0.05, height * 0.85, width * 0.35, height * 0.12, 5);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Per Glucose (2 turns):', width * 0.08, height * 0.89);
            this.ctx.font = '11px Arial';
            this.ctx.fillText('6 NADH, 2 FADH₂', width * 0.08, height * 0.92);
            this.ctx.fillText('2 ATP, 4 CO₂', width * 0.08, height * 0.95);
        }
        
        this.ctx.restore();
    }

    renderElectronTransportDiagram(x, y, width, height, options) {
        const { showLabels, showGradient } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        EnergyShapes.drawElectronTransportChain(this.ctx, 0, 0, width, height);
        
        if(showLabels && showGradient) {
            // Proton gradient visualization
            this.ctx.fillStyle = 'rgba(255, 107, 107, 0.3)';
            this.ctx.fillRect(0, 0, width, height * 0.15);
            
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('High H⁺ concentration', width * 0.5, height * 0.1);
            
            this.ctx.fillStyle = 'rgba(52, 152, 219, 0.3)';
            this.ctx.fillRect(0, height * 0.85, width, height * 0.15);
            
            this.ctx.fillStyle = '#000000';
            this.ctx.fillText('Low H⁺ concentration', width * 0.5, height * 0.92);
        }
        
        this.ctx.restore();
    }

    renderChemiosmosisDiagram(x, y, width, height, options) {
        const { showLabels, showFlow } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Membrane
        this.ctx.fillStyle = '#FFE5CC';
        this.ctx.fillRect(0, height * 0.4, width, height * 0.2);
        this.ctx.strokeStyle = '#CC8800';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(0, height * 0.4, width, height * 0.2);
        
        // Large ATP synthase
        EnergyShapes.drawATPSynthase(this.ctx, width * 0.4, height * 0.4, width * 0.15, height * 0.45);
        
        if(showFlow) {
            // Proton gradient arrows
            for(let i = 0; i < 8; i++) {
                const px = width * (0.1 + i * 0.08);
                const py = height * 0.2;
                
                this.ctx.fillStyle = '#FF6B6B';
                this.ctx.strokeStyle = '#C0392B';
                this.ctx.lineWidth = 1.5;
                this.ctx.beginPath();
                this.ctx.arc(px, py, 8, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.stroke();
                
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.font = 'bold 10px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('H⁺', px, py + 3);
            }
            
            // Flow through ATP synthase
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.lineWidth = 3;
            
            EnergyShapes.drawMetabolicArrow(
                this.ctx,
                width * 0.35, height * 0.25,
                width * 0.4, height * 0.42,
                '#E74C3C', 'H⁺ flow'
            );
            
            // ATP production
            EnergyShapes.drawMetabolicArrow(
                this.ctx,
                width * 0.55, height * 0.5,
                width * 0.7, height * 0.5,
                '#00FF00', 'ATP'
            );
        }
        
        if(showLabels) {
            this.addLabel('High H⁺\nconcentration', width * 0.05, height * 0.1, '#E74C3C', 'left');
            this.addLabel('Low H⁺\nconcentration', width * 0.05, height * 0.75, '#3498DB', 'left');
            this.addLabel('ATP Synthase', width * 0.75, height * 0.62, '#9B59B6', 'left');
            this.addLabel('Proton-Motive\nForce', width * 0.85, height * 0.25, '#E74C3C', 'left');
        }
        
        this.ctx.restore();
    }

    renderFermentationDiagram(x, y, width, height, options) {
        const { showLabels, type } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Title based on type
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        
        if(type === 'both') {
            this.ctx.fillText('Fermentation Pathways', width / 2, 20);
            
            // Lactic acid (left side)
            this.drawFermentationPath(this.ctx, width * 0.25, height * 0.3, width * 0.35, height * 0.5, 'lactic');
            
            // Alcoholic (right side)
            this.drawFermentationPath(this.ctx, width * 0.75, height * 0.3, width * 0.35, height * 0.5, 'alcoholic');
            
            if(showLabels) {
                this.addLabel('Lactic Acid\nFermentation', width * 0.25, height * 0.15, '#E74C3C');
                this.addLabel('Alcoholic\nFermentation', width * 0.75, height * 0.15, '#9B59B6');
                this.addLabel('(Muscle cells,\nbacteria)', width * 0.25, height * 0.25, '#7F8C8D', 'center');
                this.addLabel('(Yeast)', width * 0.75, height * 0.25, '#7F8C8D', 'center');
            }
        } else if(type === 'lactic') {
            this.ctx.fillText('Lactic Acid Fermentation', width / 2, 20);
            this.drawFermentationPath(this.ctx, width * 0.5, height * 0.3, width * 0.5, height * 0.6, 'lactic');
        } else {
            this.ctx.fillText('Alcoholic Fermentation', width / 2, 20);
            this.drawFermentationPath(this.ctx, width * 0.5, height * 0.3, width * 0.5, height * 0.6, 'alcoholic');
        }
        
        // Common starting point
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        if(type === 'both') {
            this.ctx.fillText('Pyruvate (from Glycolysis)', width * 0.5, height * 0.88);
            this.ctx.font = '12px Arial';
            this.ctx.fillText('No oxygen required', width * 0.5, height * 0.92);
            this.ctx.fillText('Net: 2 ATP per glucose', width * 0.5, height * 0.96);
        }
        
        this.ctx.restore();
    }

    drawFermentationPath(ctx, x, y, width, height, type) {
        // Pyruvate
        ctx.fillStyle = '#32CD32';
        ctx.strokeStyle = '#228B22';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, width * 0.12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 13px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Pyruvate', x, y + 4);
        
        // Arrow down
        EnergyShapes.drawMetabolicArrow(ctx, x, y + width * 0.15, x, y + height * 0.4, '#2C3E50', 'NADH → NAD⁺');
        
        if(type === 'lactic') {
            // Lactate
            ctx.fillStyle = '#E74C3C';
            ctx.strokeStyle = '#C0392B';
            ctx.beginPath();
            ctx.arc(x, y + height * 0.6, width * 0.12, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 13px Arial';
            ctx.fillText('Lactate', x, y + height * 0.6 + 4);
        } else {
            // Ethanol + CO2
            ctx.fillStyle = '#9B59B6';
            ctx.strokeStyle = '#7D3C98';
            ctx.beginPath();
            ctx.arc(x - width * 0.1, y + height * 0.6, width * 0.1, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 12px Arial';
            ctx.fillText('Ethanol', x - width * 0.1, y + height * 0.6 + 4);
            
            // CO2
            ctx.fillStyle = '#95A5A6';
            ctx.strokeStyle = '#7F8C8D';
            ctx.beginPath();
            ctx.arc(x + width * 0.1, y + height * 0.6, width * 0.08, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            ctx.fillStyle = '#000000';
            ctx.font = 'bold 11px Arial';
            ctx.fillText('CO₂', x + width * 0.1, y + height * 0.6 + 4);
        }
    }

    renderChloroplastDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        EnergyShapes.drawChloroplast(this.ctx, 0, 0, width, height);
        
        if(showLabels) {
            this.addLabel('Outer Membrane', width * 0.05, height * 0.2, '#228B22', 'left');
            this.addLabel('Grana\n(Thylakoid stacks)', width * 0.05, height * 0.5, '#2E7D32', 'left');
            this.addLabel('Stroma', width * 0.5, height * 0.3, '#7F8C8D');
            this.addLabel('Stroma Lamellae', width * 0.85, height * 0.6, '#4CAF50', 'left');
        }
        
        this.ctx.restore();
    }

    renderPhotosynthesisOverviewDiagram(x, y, width, height, options) {
        const { showLabels, showReactions } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Overall equation
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂', width / 2, 20);
        
        if(showReactions) {
            // Light reactions (left)
            const lightBox = { x: width * 0.05, y: height * 0.15, w: width * 0.4, h: height * 0.7 };
            
            const gradient1 = this.ctx.createLinearGradient(0, lightBox.y, 0, lightBox.y + lightBox.h);
            gradient1.addColorStop(0, '#FFD700');
            gradient1.addColorStop(1, '#FFA500');
            
            this.ctx.fillStyle = gradient1;
            this.ctx.strokeStyle = '#CC8800';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.roundRect(lightBox.x, lightBox.y, lightBox.w, lightBox.h, 10);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 18px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Light Reactions', lightBox.x + lightBox.w / 2, lightBox.y + 30);
            
            this.ctx.font = '13px Arial';
            this.ctx.fillText('(Thylakoid)', lightBox.x + lightBox.w / 2, lightBox.y + 50);
            
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillText('Input:', lightBox.x + lightBox.w / 2, lightBox.y + lightBox.h * 0.35);
            this.ctx.font = '12px Arial';
            this.ctx.fillText('H₂O + Light', lightBox.x + lightBox.w / 2, lightBox.y + lightBox.h * 0.42);
            
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillText('Output:', lightBox.x + lightBox.w / 2, lightBox.y + lightBox.h * 0.6);
            this.ctx.font = '12px Arial';
            this.ctx.fillText('O₂ + ATP + NADPH', lightBox.x + lightBox.w / 2, lightBox.y + lightBox.h * 0.67);
            
            // Calvin Cycle (right)
            const calvinBox = { x: width * 0.55, y: height * 0.15, w: width * 0.4, h: height * 0.7 };
            
            const gradient2 = this.ctx.createLinearGradient(0, calvinBox.y, 0, calvinBox.y + calvinBox.h);
            gradient2.addColorStop(0, '#2ECC71');
            gradient2.addColorStop(1, '#27AE60');
            
            this.ctx.fillStyle = gradient2;
            this.ctx.strokeStyle = '#229954';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.roundRect(calvinBox.x, calvinBox.y, calvinBox.w, calvinBox.h, 10);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 18px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Calvin Cycle', calvinBox.x + calvinBox.w / 2, calvinBox.y + 30);
            
            this.ctx.font = '13px Arial';
            this.ctx.fillText('(Stroma)', calvinBox.x + calvinBox.w / 2, calvinBox.y + 50);
            
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillText('Input:', calvinBox.x + calvinBox.w / 2, calvinBox.y + calvinBox.h * 0.35);
            this.ctx.font = '12px Arial';
            this.ctx.fillText('CO₂ + ATP + NADPH', calvinBox.x + calvinBox.w / 2, calvinBox.y + calvinBox.h * 0.42);
            
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillText('Output:', calvinBox.x + calvinBox.w / 2, calvinBox.y + calvinBox.h * 0.6);
            this.ctx.font = '12px Arial';
            this.ctx.fillText('Glucose (C₆H₁₂O₆)', calvinBox.x + calvinBox.w / 2, calvinBox.y + calvinBox.h * 0.67);
            
            // Connection arrows
            EnergyShapes.drawMetabolicArrow(
                this.ctx,
                lightBox.x + lightBox.w, lightBox.y + lightBox.h * 0.5,
                calvinBox.x, calvinBox.y + calvinBox.h * 0.4,
                '#00AA00', 'ATP\nNADPH', true
            );
            
            EnergyShapes.drawMetabolicArrow(
                this.ctx,
                calvinBox.x, calvinBox.y + calvinBox.h * 0.6,
                lightBox.x + lightBox.w, lightBox.y + lightBox.h * 0.7,
                '#E74C3C', 'ADP\nNADP⁺', true
            );
        }
        
        this.ctx.restore();
    }

    renderLightReactionsDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        EnergyShapes.drawLightReactions(this.ctx, 0, 0, width, height);
        
        this.ctx.restore();
    }

    renderCalvinCycleDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        EnergyShapes.drawCalvinCycle(this.ctx, 0, 0, width, height);
        
        if(showLabels) {
            this.addLabel('Requires:\n3 CO₂\n9 ATP\n6 NADPH', width * 0.05, height * 0.5, '#7F8C8D', 'left');
            this.addLabel('Produces:\n1 G3P\n(½ Glucose)', width * 0.85, height * 0.88, '#FFD700', 'left');
        }
        
        this.ctx.restore();
    }

    renderC4PathwayDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Mesophyll cell (left)
        this.ctx.fillStyle = '#A8E6CF';
        this.ctx.strokeStyle = '#2ECC71';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.05, height * 0.2, width * 0.35, height * 0.6, 10);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Mesophyll Cell', width * 0.225, height * 0.25);
        
        // CO2 fixation
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText('CO₂', width * 0.15, height * 0.4);
        this.ctx.fillText('+', width * 0.225, height * 0.4);
        this.ctx.fillText('PEP', width * 0.3, height * 0.4);
        
        EnergyShapes.drawMetabolicArrow(
            this.ctx,
            width * 0.225, height * 0.45,
            width * 0.225, height * 0.55,
            '#E74C3C', 'PEP carboxylase'
        );
        
        this.ctx.fillText('Oxaloacetate', width * 0.225, height * 0.65);
        this.ctx.font = '12px Arial';
        this.ctx.fillText('(4-carbon)', width * 0.225, height * 0.69);
        
        // Bundle sheath cell (right)
        this.ctx.fillStyle = '#FFD9A6';
        this.ctx.strokeStyle = '#F39C12';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.6, height * 0.2, width * 0.35, height * 0.6, 10);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Bundle Sheath Cell', width * 0.775, height * 0.25);
        
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText('CO₂ release', width * 0.775, height * 0.45);
        
        EnergyShapes.drawMetabolicArrow(
            this.ctx,
            width * 0.775, height * 0.5,
            width * 0.775, height * 0.6,
            '#27AE60', ''
        );
        
        this.ctx.fillText('Calvin Cycle', width * 0.775, height * 0.7);
        
        // Transfer arrow
        EnergyShapes.drawMetabolicArrow(
            this.ctx,
            width * 0.42, height * 0.5,
            width * 0.58, height * 0.5,
            '#9B59B6', '4-C compound', true
        );
        
        if(showLabels) {
            this.addLabel('Advantages:\n• Reduces photorespiration\n• Efficient in hot climates\n• Examples: Corn, sugarcane', 
                width * 0.5, height * 0.88, '#7F8C8D');
        }
        
        this.ctx.restore();
    }

    renderCAMPathwayDiagram(x, y, width, height, options) {
        const { showLabels, showTime } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        if(showTime) {
            // Night phase (left)
            this.ctx.fillStyle = '#34495E';
            this.ctx.fillRect(0, 0, width / 2, height);
            
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 18px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('NIGHT', width * 0.25, height * 0.1);
            
            // Stomata open
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillText('Stomata OPEN', width * 0.25, height * 0.2);
            
            this.ctx.font = '13px Arial';
            this.ctx.fillText('CO₂ enters', width * 0.25, height * 0.3);
            
            EnergyShapes.drawMetabolicArrow(
                this.ctx,
                width * 0.25, height * 0.35,
                width * 0.25, height * 0.45,
                '#FFD700', ''
            );
            
            this.ctx.fillText('Stored as', width * 0.25, height * 0.5);
            this.ctx.fillText('Malic Acid', width * 0.25, height * 0.54);
            this.ctx.fillText('(4-carbon)', width * 0.25, height * 0.58);
            
            // Vacuole
            this.ctx.strokeStyle = '#ECF0F1';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(width * 0.25, height * 0.7, width * 0.1, 0, Math.PI * 2);
            this.ctx.stroke();
            this.ctx.fillText('Vacuole', width * 0.25, height * 0.7);
            
            // Day phase (right)
            this.ctx.fillStyle = '#3498DB';
            this.ctx.fillRect(width / 2, 0, width / 2, height);
            
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 18px Arial';
            this.ctx.fillText('DAY', width * 0.75, height * 0.1);
            
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillText('Stomata CLOSED', width * 0.75, height * 0.2);
            this.ctx.font = '12px Arial';
            this.ctx.fillText('(prevents water loss)', width * 0.75, height * 0.24);
            
            this.ctx.font = '13px Arial';
            this.ctx.fillText('Malic acid', width * 0.75, height * 0.35);
            this.ctx.fillText('breaks down', width * 0.75, height * 0.39);
            
            EnergyShapes.drawMetabolicArrow(
                this.ctx,
                width * 0.75, height * 0.43,
                width * 0.75, height * 0.53,
                '#FFD700', ''
            );
            
            this.ctx.fillText('CO₂ released', width * 0.75, height * 0.58);
            
            EnergyShapes.drawMetabolicArrow(
                this.ctx,
                width * 0.75, height * 0.62,
                width * 0.75, height * 0.72,
                '#27AE60', ''
            );
            
            this.ctx.fillText('Calvin Cycle', width * 0.75, height * 0.77);
        }
        
        if(showLabels) {
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('CAM = Crassulacean Acid Metabolism', width * 0.5, height * 0.92);
            this.ctx.font = '11px Arial';
            this.ctx.fillText('Examples: Cacti, Pineapple, Agave', width * 0.5, height * 0.96);
        }
        
        this.ctx.restore();
    }

    renderMetabolismOverviewDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Catabolism (left side - breaking down)
        const cataBox = { x: width * 0.05, y: height * 0.15, w: width * 0.4, h: height * 0.7 };
        
        const gradient1 = this.ctx.createLinearGradient(0, cataBox.y, 0, cataBox.y + cataBox.h);
        gradient1.addColorStop(0, '#E74C3C');
        gradient1.addColorStop(1, '#C0392B');
        
        this.ctx.fillStyle = gradient1;
        this.ctx.strokeStyle = '#922B21';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.roundRect(cataBox.x, cataBox.y, cataBox.w, cataBox.h, 10);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 20px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('CATABOLISM', cataBox.x + cataBox.w / 2, cataBox.y + 30);
        
        this.ctx.font = '14px Arial';
        this.ctx.fillText('Breaking Down', cataBox.x + cataBox.w / 2, cataBox.y + 50);
        
        // Catabolic processes
        const cataProcesses = [
            'Carbohydrates → Glucose',
            'Proteins → Amino Acids',
            'Fats → Fatty Acids'
        ];
        
        this.ctx.font = 'bold 13px Arial';
        cataProcesses.forEach((process, i) => {
            const py = cataBox.y + 80 + i * 60;
            this.ctx.fillText(process, cataBox.x + cataBox.w / 2, py);
            
            // Downward arrow
            this.ctx.strokeStyle = '#FFFFFF';
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(cataBox.x + cataBox.w / 2, py + 10);
            this.ctx.lineTo(cataBox.x + cataBox.w / 2, py + 30);
            this.ctx.stroke();
            
            // Arrow head
            this.ctx.beginPath();
            this.ctx.moveTo(cataBox.x + cataBox.w / 2, py + 30);
            this.ctx.lineTo(cataBox.x + cataBox.w / 2 - 5, py + 25);
            this.ctx.lineTo(cataBox.x + cataBox.w / 2 + 5, py + 25);
            this.ctx.closePath();
            this.ctx.fill();
        });
        
        // Energy release
        this.ctx.fillStyle = '#FFD700';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillText('→ ENERGY (ATP)', cataBox.x + cataBox.w / 2, cataBox.y + cataBox.h - 20);
        
        // Anabolism (right side - building up)
        const anaBox = { x: width * 0.55, y: height * 0.15, w: width * 0.4, h: height * 0.7 };
        
        const gradient2 = this.ctx.createLinearGradient(0, anaBox.y, 0, anaBox.y + anaBox.h);
        gradient2.addColorStop(0, '#2ECC71');
        gradient2.addColorStop(1, '#27AE60');
        
        this.ctx.fillStyle = gradient2;
        this.ctx.strokeStyle = '#1E8449';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.roundRect(anaBox.x, anaBox.y, anaBox.w, anaBox.h, 10);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 20px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('ANABOLISM', anaBox.x + anaBox.w / 2, anaBox.y + 30);
        
        this.ctx.font = '14px Arial';
        this.ctx.fillText('Building Up', anaBox.x + anaBox.w / 2, anaBox.y + 50);
        
        // Anabolic processes
        const anaProcesses = [
            'Glucose → Glycogen',
            'Amino Acids → Proteins',
            'Fatty Acids → Fats'
        ];
        
        this.ctx.font = 'bold 13px Arial';
        anaProcesses.forEach((process, i) => {
            const py = anaBox.y + 80 + i * 60;
            this.ctx.fillText(process, anaBox.x + anaBox.w / 2, py);
            
            // Upward arrow
            this.ctx.strokeStyle = '#FFFFFF';
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(anaBox.x + anaBox.w / 2, py + 30);
            this.ctx.lineTo(anaBox.x + anaBox.w / 2, py + 10);
            this.ctx.stroke();
            
            // Arrow head
            this.ctx.beginPath();
            this.ctx.moveTo(anaBox.x + anaBox.w / 2, py + 10);
            this.ctx.lineTo(anaBox.x + anaBox.w / 2 - 5, py + 15);
            this.ctx.lineTo(anaBox.x + anaBox.w / 2 + 5, py + 15);
            this.ctx.closePath();
            this.ctx.fill();
        });
        
        // Energy requirement
        this.ctx.fillStyle = '#FFD700';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillText('REQUIRES ENERGY', anaBox.x + anaBox.w / 2, anaBox.y + anaBox.h - 20);
        
        // Central connection
        this.ctx.strokeStyle = '#F39C12';
        this.ctx.fillStyle = '#F39C12';
        this.ctx.lineWidth = 4;
        
        // Curved arrows between boxes
        EnergyShapes.drawMetabolicArrow(
            this.ctx,
            cataBox.x + cataBox.w, height * 0.4,
            anaBox.x, height * 0.35,
            '#FFD700', 'ATP', true
        );
        
        EnergyShapes.drawMetabolicArrow(
            this.ctx,
            anaBox.x, height * 0.65,
            cataBox.x + cataBox.w, height * 0.6,
            '#95A5A6', 'ADP + Pi', true
        );
        
        this.ctx.restore();
    }

    renderGluconeogenesisDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Starting materials at bottom
        const sources = [
            { name: 'Lactate', x: 0.2, color: '#E74C3C' },
            { name: 'Amino\nAcids', x: 0.5, color: '#9B59B6' },
            { name: 'Glycerol', x: 0.8, color: '#3498DB' }
        ];
        
        sources.forEach(source => {
            this.ctx.fillStyle = source.color;
            this.ctx.strokeStyle = EnergyShapes.darkenColor(source.color, 0.3);
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(width * source.x, height * 0.85, width * 0.08, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            const lines = source.name.split('\n');
            lines.forEach((line, i) => {
                this.ctx.fillText(line, width * source.x, height * 0.85 + i * 12 - (lines.length - 1) * 6);
            });
            
            // Upward arrows
            EnergyShapes.drawMetabolicArrow(
                this.ctx,
                width * source.x, height * 0.77,
                width * 0.5, height * 0.6,
                '#2C3E50', ''
            );
        });
        
        // Intermediate steps
        const steps = [
            { y: 0.6, name: 'Pyruvate', color: '#F39C12' },
            { y: 0.45, name: 'Oxaloacetate', color: '#E67E22' },
            { y: 0.3, name: 'Phosphoenolpyruvate', color: '#D68910' }
        ];
        
        steps.forEach((step, index) => {
            this.ctx.fillStyle = step.color;
            this.ctx.strokeStyle = '#8B4513';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.roundRect(width * 0.35, height * step.y - 20, width * 0.3, 40, 5);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(step.name, width * 0.5, height * step.y + 5);
            
            if(index < steps.length - 1) {
                EnergyShapes.drawMetabolicArrow(
                    this.ctx,
                    width * 0.5, height * step.y - 25,
                    width * 0.5, height * steps[index + 1].y + 25,
                    '#2C3E50', ''
                );
            }
        });
        
        // Final product - Glucose
        this.ctx.fillStyle = '#FFE4B5';
        this.ctx.strokeStyle = '#8B4513';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(width * 0.5, height * 0.12, width * 0.12, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Glucose', width * 0.5, height * 0.12);
        
        // Arrow to glucose
        EnergyShapes.drawMetabolicArrow(
            this.ctx,
            width * 0.5, height * 0.25,
            width * 0.5, height * 0.18,
            '#27AE60', ''
        );
        
        if(showLabels) {
            this.ctx.fillStyle = '#DC143C';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Requires: 6 ATP, 2 GTP', width * 0.7, height * 0.5);
            
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.font = '11px Arial';
            this.ctx.fillText('Location: Liver & Kidneys', width * 0.05, height * 0.05);
            this.ctx.fillText('Function: Maintain blood glucose', width * 0.05, height * 0.08);
        }
        
        this.ctx.restore();
    }

    renderBetaOxidationDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Fatty acid chain
        this.ctx.fillStyle = '#F39C12';
        this.ctx.strokeStyle = '#D68910';
        this.ctx.lineWidth = 2;
        
        const chainLength = 8;
        const chainY = height * 0.15;
        
        for(let i = 0; i < chainLength; i++) {
            const cx = width * (0.15 + i * 0.08);
            this.ctx.beginPath();
            this.ctx.arc(cx, chainY, 15, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('C', cx, chainY + 4);
            this.ctx.fillStyle = '#F39C12';
            
            if(i < chainLength - 1) {
                this.ctx.strokeStyle = '#8B4513';
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(cx + 15, chainY);
                this.ctx.lineTo(cx + width * 0.08 - 15, chainY);
                this.ctx.stroke();
                this.ctx.strokeStyle = '#D68910';
                this.ctx.lineWidth = 2;
            }
        }
        
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Fatty Acid Chain', width * 0.5, chainY - 25);
        
        // Beta oxidation cycle
        const cycleY = height * 0.4;
        
        // Cycle steps in a spiral
        const steps = [
            { name: 'Oxidation', color: '#E74C3C', product: 'FADH₂' },
            { name: 'Hydration', color: '#9B59B6', product: 'H₂O' },
            { name: 'Oxidation', color: '#E67E22', product: 'NADH' },
            { name: 'Cleavage', color: '#27AE60', product: 'Acetyl-CoA' }
        ];
        
        const cycleRadius = width * 0.2;
        
        steps.forEach((step, index) => {
            const angle = (index / steps.length) * Math.PI * 2 - Math.PI / 2;
            const sx = width * 0.5 + Math.cos(angle) * cycleRadius;
            const sy = cycleY + Math.sin(angle) * cycleRadius;
            
            this.ctx.fillStyle = step.color;
            this.ctx.strokeStyle = EnergyShapes.darkenColor(step.color, 0.3);
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(sx, sy, width * 0.08, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(step.name, sx, sy + 3);
            
            // Product
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 10px Arial';
            const labelAngle = angle;
            const labelX = sx + Math.cos(labelAngle) * width * 0.15;
            const labelY = sy + Math.sin(labelAngle) * width * 0.15;
            this.ctx.fillText(step.product, labelX, labelY);
        });
        
        // Cycle arrow
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 3;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.arc(width * 0.5, cycleY, cycleRadius * 1.1, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        
        // Arrow to show repetition
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.5 + cycleRadius * 1.1, cycleY);
        this.ctx.lineTo(width * 0.5 + cycleRadius * 1.1 - 8, cycleY - 5);
        this.ctx.lineTo(width * 0.5 + cycleRadius * 1.1 - 8, cycleY + 5);
        this.ctx.closePath();
        this.ctx.fill();
        
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('β-Oxidation Cycle', width * 0.5, cycleY);
        
        // Acetyl-CoA output
        EnergyShapes.drawMetabolicArrow(
            this.ctx,
            width * 0.5, cycleY + cycleRadius * 1.2,
            width * 0.5, height * 0.75,
            '#27AE60', ''
        );
        
        this.ctx.fillStyle = '#27AE60';
        this.ctx.strokeStyle = '#1E8449';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(width * 0.5, height * 0.82, width * 0.1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillText('Acetyl-CoA', width * 0.5, height * 0.82 + 4);
        
        // Arrow to Krebs
        EnergyShapes.drawMetabolicArrow(
            this.ctx,
            width * 0.6, height * 0.82,
            width * 0.8, height * 0.82,
            '#4169E1', 'to Krebs Cycle'
        );
        
        if(showLabels) {
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Each cycle:', width * 0.05, height * 0.92);
            this.ctx.fillText('• Shortens chain by 2 carbons', width * 0.05, height * 0.95);
            this.ctx.fillText('• Produces 1 FADH₂, 1 NADH, 1 Acetyl-CoA', width * 0.05, height * 0.98);
        }
        
        this.ctx.restore();
    }

    renderFattyAcidSynthesisDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Acetyl-CoA starting material
        this.ctx.fillStyle = '#27AE60';
        this.ctx.strokeStyle = '#1E8449';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(width * 0.5, height * 0.15, width * 0.1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Acetyl-CoA', width * 0.5, height * 0.15 + 4);
        
        // Synthesis cycle
        const cycleY = height * 0.45;
        const cycleRadius = width * 0.2;
        
        const synthSteps = [
            { name: 'Condensation', color: '#E74C3C' },
            { name: 'Reduction', color: '#9B59B6' },
            { name: 'Dehydration', color: '#E67E22' },
            { name: 'Reduction', color: '#3498DB' }
        ];
        
        synthSteps.forEach((step, index) => {
            const angle = (index / synthSteps.length) * Math.PI * 2 - Math.PI / 2;
            const sx = width * 0.5 + Math.cos(angle) * cycleRadius;
            const sy = cycleY + Math.sin(angle) * cycleRadius;
            
            this.ctx.fillStyle = step.color;
            this.ctx.strokeStyle = EnergyShapes.darkenColor(step.color, 0.3);
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(sx, sy, width * 0.08, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(step.name, sx, sy + 3);
        });
        
        // Cycle indication
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 3;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.arc(width * 0.5, cycleY, cycleRadius * 1.1, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText('Adds 2 carbons', width * 0.5, cycleY);
        this.ctx.font = '12px Arial';
        this.ctx.fillText('per cycle', width * 0.5, cycleY + 15);
        
        // Growing fatty acid chain
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText('Growing Fatty Acid Chain', width * 0.5, height * 0.75);
        
        const growingChain = 6;
        const chainY = height * 0.82;
        
        for(let i = 0; i < growingChain; i++) {
            const cx = width * (0.5 - growingChain * 0.04 + i * 0.08);
            this.ctx.fillStyle = '#F39C12';
            this.ctx.strokeStyle = '#D68910';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(cx, chainY, 12, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            
            if(i < growingChain - 1) {
                this.ctx.strokeStyle = '#8B4513';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(cx + 12, chainY);
                this.ctx.lineTo(cx + width * 0.08 - 12, chainY);
                this.ctx.stroke();
            }
        }
        
        if(showLabels) {
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Requirements per cycle:', width * 0.65, height * 0.45);
            this.ctx.fillText('• 1 Acetyl-CoA', width * 0.65, height * 0.48);
            this.ctx.fillText('• 2 NADPH', width * 0.65, height * 0.51);
            this.ctx.fillText('• 1 ATP', width * 0.65, height * 0.54);
            
            this.ctx.fillText('Location: Cytoplasm', width * 0.05, height * 0.05);
            this.ctx.fillText('Product: Palmitate (16:0)', width * 0.05, height * 0.95);
        }
        
        this.ctx.restore();
    }

    renderAminoAcidMetabolismDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Protein at top
        this.ctx.fillStyle = '#9B59B6';
        this.ctx.strokeStyle = '#7D3C98';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.35, height * 0.05, width * 0.3, height * 0.08, 5);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Protein', width * 0.5, height * 0.1);
        
        // Breakdown arrow
        EnergyShapes.drawMetabolicArrow(
            this.ctx,
            width * 0.5, height * 0.15,
            width * 0.5, height * 0.25,
            '#E74C3C', 'Proteolysis'
        );
        
        // Amino acids
        for(let i = 0; i < 5; i++) {
            const ax = width * (0.2 + i * 0.15);
            this.ctx.fillStyle = '#3498DB';
            this.ctx.strokeStyle = '#2874A6';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(ax, height * 0.32, width * 0.05, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 10px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('AA', ax, height * 0.32 + 3);
        }
        
        // Deamination
        EnergyShapes.drawMetabolicArrow(
            this.ctx,
            width * 0.5, height * 0.4,
            width * 0.5, height * 0.5,
            '#E67E22', 'Deamination'
        );
        
        // Split into two paths
        // Left path - Amino group
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.5, height * 0.52);
        this.ctx.lineTo(width * 0.25, height * 0.62);
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#FF6B6B';
        this.ctx.strokeStyle = '#C0392B';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.08, height * 0.65, width * 0.3, height * 0.08, 5);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('NH₃ (Ammonia)', width * 0.23, height * 0.70);
        
        EnergyShapes.drawMetabolicArrow(
            this.ctx,
            width * 0.23, height * 0.75,
            width * 0.23, height * 0.85,
            '#95A5A6', ''
        );
        
        this.ctx.fillStyle = '#95A5A6';
        this.ctx.strokeStyle = '#7F8C8D';
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.08, height * 0.88, width * 0.3, height * 0.08, 5);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#000000';
        this.ctx.fillText('Urea (Excretion)', width * 0.23, height * 0.93);
        
        // Right path - Carbon skeleton
        this.ctx.strokeStyle = '#27AE60';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.5, height * 0.52);
        this.ctx.lineTo(width * 0.75, height * 0.62);
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#52BE80';
        this.ctx.strokeStyle = '#1E8449';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.58, height * 0.65, width * 0.3, height * 0.08, 5);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#000000';
        this.ctx.fillText('Carbon Skeleton', width * 0.73, height * 0.70);
        
        // Multiple fates
        const fates = [
            { y: 0.80, name: 'Glucose', color: '#FFE4B5' },
            { y: 0.88, name: 'Acetyl-CoA', color: '#27AE60' },
            { y: 0.96, name: 'Krebs Cycle', color: '#F39C12' }
        ];
        
        fates.forEach((fate, index) => {
            EnergyShapes.drawMetabolicArrow(
                this.ctx,
                width * 0.73, height * 0.75,
                width * (0.85 - index * 0.05), height * fate.y,
                '#2C3E50', ''
            );
            
            this.ctx.fillStyle = fate.color;
            this.ctx.strokeStyle = EnergyShapes.darkenColor(fate.color, 0.3);
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.arc(width * (0.85 - index * 0.05), height * fate.y, width * 0.04, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 10px Arial';
            this.ctx.textAlign = 'center';
            ctx.fillText(fate.name, width * (0.85 - index * 0.05), height * fate.y + 3);
        });
        
        if(showLabels) {
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Functions:', width * 0.05, height * 0.02);
            this.ctx.fillText('• Energy production', width * 0.05, height * 0.05);
            this.ctx.fillText('• Glucose synthesis', width * 0.05, height * 0.08);
            this.ctx.fillText('• Fat synthesis', width * 0.05, height * 0.11);
        }
        
        this.ctx.restore();
    }

    renderEnergyPyramidDiagram(x, y, width, height, options) {
        const { showLabels, showPercentages } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        EnergyShapes.drawEnergyPyramid(this.ctx, 0, 0, width, height, showPercentages);
        
        if(showLabels) {
            // 10% rule explanation
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.fillStyle = 'rgba(231, 76, 60, 0.1)';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.roundRect(width * 0.05, height * 0.02, width * 0.5, height * 0.08, 5);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('10% Rule: Only ~10% of energy', width * 0.08, height * 0.05);
            this.ctx.fillText('transfers to next trophic level', width * 0.08, height * 0.08);
        }
        
        this.ctx.restore();
    }

    renderFoodWebDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Organisms at different trophic levels
        const organisms = {
            // Producers (bottom)
            grass: { x: 0.2, y: 0.85, color: '#27AE60', label: 'Grass' },
            shrub: { x: 0.5, y: 0.85, color: '#2ECC71', label: 'Shrubs' },
            tree: { x: 0.8, y: 0.85, color: '#229954', label: 'Trees' },
            
            // Primary consumers
            grasshopper: { x: 0.15, y: 0.65, color: '#F39C12', label: 'Grasshopper' },
            rabbit: { x: 0.45, y: 0.65, color: '#E67E22', label: 'Rabbit' },
            deer: { x: 0.75, y: 0.65, color: '#D68910', label: 'Deer' },
            
            // Secondary consumers
            mouse: { x: 0.3, y: 0.45, color: '#E74C3C', label: 'Mouse' },
            bird: { x: 0.6, y: 0.45, color: '#CB4335', label: 'Bird' },
            
            // Tertiary consumers
            snake: { x: 0.35, y: 0.25, color: '#943126', label: 'Snake' },
            hawk: { x: 0.65, y: 0.25, color: '#7B241C', label: 'Hawk' },
            
            // Decomposers
            fungi: { x: 0.1, y: 0.05, color: '#8B4513', label: 'Fungi' },
            bacteria: { x: 0.9, y: 0.05, color: '#654321', label: 'Bacteria' }
        };
        
        // Draw organisms
        Object.entries(organisms).forEach(([key, org]) => {
            this.ctx.fillStyle = org.color;
            this.ctx.strokeStyle = EnergyShapes.darkenColor(org.color, 0.3);
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(width * org.x, height * org.y, width * 0.05, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            
            if(showLabels) {
                this.ctx.fillStyle = '#000000';
                this.ctx.font = 'bold 10px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(org.label, width * org.x, height * org.y + width * 0.08);
            }
        });
        
        // Energy flow connections (arrows)
        const connections = [
            // Producers to primary consumers
            ['grass', 'grasshopper'], ['grass', 'rabbit'], ['shrub', 'rabbit'],
            ['shrub', 'deer'], ['tree', 'deer'],
            
            // Primary to secondary
            ['grasshopper', 'bird'], ['rabbit', 'mouse'], ['rabbit', 'bird'],
            ['deer', 'bird'],
            
            // Secondary to tertiary
            ['mouse', 'snake'], ['bird', 'hawk'], ['bird', 'snake'],
            
            // All to decomposers
            ['grass', 'fungi'], ['rabbit', 'bacteria'], ['hawk', 'bacteria']
        ];
        
        connections.forEach(([from, to]) => {
            const fromOrg = organisms[from];
            const toOrg = organisms[to];
            
            const x1 = width * fromOrg.x;
            const y1 = height * fromOrg.y;
            const x2 = width * toOrg.x;
            const y2 = height * toOrg.y;
            
            // Calculate offset for circle radius
            const angle = Math.atan2(y2 - y1, x2 - x1);
            const startX = x1 + Math.cos(angle) * width * 0.05;
            const startY = y1 + Math.sin(angle) * width * 0.05;
            const endX = x2 - Math.cos(angle) * width * 0.05;
            const endY = y2 - Math.sin(angle) * width * 0.05;
            
            this.ctx.strokeStyle = '#95A5A6';
            this.ctx.fillStyle = '#95A5A6';
            this.ctx.lineWidth = 1.5;
            this.ctx.setLineDash([3, 3]);
            
            this.ctx.beginPath();
            this.ctx.moveTo(startX, startY);
            this.ctx.lineTo(endX, endY);
            this.ctx.stroke();
            
            // Arrow head
            this.ctx.setLineDash([]);
            this.ctx.beginPath();
            this.ctx.moveTo(endX, endY);
            this.ctx.lineTo(
                endX - 6 * Math.cos(angle - Math.PI / 6),
                endY - 6 * Math.sin(angle - Math.PI / 6)
            );
            this.ctx.lineTo(
                endX - 6 * Math.cos(angle + Math.PI / 6),
                endY - 6 * Math.sin(angle + Math.PI / 6)
            );
            this.ctx.closePath();
            this.ctx.fill();
        });
        
        // Trophic level labels
        if(showLabels) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'right';
            this.ctx.fillText('Decomposers', width * 0.02, height * 0.05);
            this.ctx.fillText('Tertiary Consumers', width * 0.02, height * 0.25);
            this.ctx.fillText('Secondary Consumers', width * 0.02, height * 0.45);
            this.ctx.fillText('Primary Consumers', width * 0.02, height * 0.65);
            this.ctx.fillText('Producers', width * 0.02, height * 0.85);
        }
        
        this.ctx.restore();
    }

    renderCarbonCycleDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        EnergyShapes.drawCarbonCycle(this.ctx, 0, 0, width, height);
        
        if(showLabels) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Carbon moves through ecosystems as CO₂ and organic compounds', width * 0.5, height * 0.98);
        }
        
        this.ctx.restore();
    }

    renderNitrogenCycleDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Components
        const components = {
            atmosphere: { x: 0.5, y: 0.1, r: 0.12, color: '#87CEEB', label: 'Atmospheric\nN₂' },
            plants: { x: 0.3, y: 0.45, r: 0.08, color: '#2ECC71', label: 'Plants\n(NO₃⁻)' },
            animals: { x: 0.7, y: 0.45, r: 0.08, color: '#E67E22', label: 'Animals\n(Proteins)' },
            soil: { x: 0.5, y: 0.75, r: 0.1, color: '#8B4513', label: 'Soil\n(NH₄⁺, NO₃⁻)' }
        };
        
        // Draw components
        Object.entries(components).forEach(([key, comp]) => {
            this.ctx.fillStyle = comp.color;
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(width * comp.x, height * comp.y, width * comp.r, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            const lines = comp.label.split('\n');
            lines.forEach((line, i) => {
                this.ctx.fillText(line, width * comp.x, height * comp.y + i * 14 - (lines.length - 1) * 7);
            });
        });
        
        // Nitrogen fixation
        EnergyShapes.drawMetabolicArrow(
            this.ctx,
            width * 0.5, height * 0.22,
            width * 0.5, height * 0.65,
            '#3498DB', 'N₂ Fixation\n(Bacteria)', true
        );
        
        // Assimilation
        EnergyShapes.drawMetabolicArrow(
            this.ctx,
            width * 0.5, height * 0.67,
            width * 0.35, height * 0.52,
            '#27AE60', 'Assimilation', true
        );
        
        // Consumption
        EnergyShapes.drawMetabolicArrow(
            this.ctx,
            width * 0.38, height * 0.45,
            width * 0.62, height * 0.45,
            '#E67E22', 'Consumption'
        );
        
        // Decomposition
        EnergyShapes.drawMetabolicArrow(
            this.ctx,
            width * 0.68, height * 0.52,
            width * 0.55, height * 0.67,
            '#8B4513', 'Death/Waste', true
        );
        
        // Nitrification
        this.ctx.strokeStyle = '#9B59B6';
        this.ctx.fillStyle = '#9B59B6';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.arc(width * 0.5, height * 0.75, width * 0.08, 0, Math.PI);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        
        this.ctx.font = 'bold 10px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Nitrification', width * 0.5, height * 0.82);
        this.ctx.font = '9px Arial';
        this.ctx.fillText('(NH₄⁺ → NO₃⁻)', width * 0.5, height * 0.85);
        
        // Denitrification
        EnergyShapes.drawMetabolicArrow(
            this.ctx,
            width * 0.58, height * 0.7,
            width * 0.58, height * 0.25,
            '#E74C3C', 'Denitrification\n(NO₃⁻ → N₂)', true
        );
        
        if(showLabels) {
            // Nitrogen-fixing bacteria
            this.ctx.fillStyle = '#3498DB';
            this.ctx.strokeStyle = '#2874A6';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.arc(width * 0.42, height * 0.42, width * 0.03, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#000000';
            this.ctx.font = '9px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('N-fixing\nbacteria', width * 0.36, height * 0.38);
            
            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Essential for protein synthesis', width * 0.5, height * 0.95);
        }
        
        this.ctx.restore();
    }

    renderMuscleEnergyDiagram(x, y, width, height, options) {
        const { showLabels, showTimeline } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        EnergyShapes.drawMuscleEnergySystem(this.ctx, 0, 0, width, height, showTimeline);
        
        this.ctx.restore();
    }

    renderCreatinePhosphateDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Title
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 18px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('ATP-PC (Phosphagen) System', width * 0.5, height * 0.1);
        
        // Creatine phosphate molecule
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.strokeStyle = '#C0392B';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.15, height * 0.25, width * 0.25, height * 0.15, 10);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillText('Creatine', width * 0.275, height * 0.32);
        this.ctx.fillText('Phosphate', width * 0.275, height * 0.36);
        
        // Plus sign
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 24px Arial';
        this.ctx.fillText('+', width * 0.43, height * 0.33);
        
        // ADP
        this.ctx.fillStyle = '#3498DB';
        this.ctx.strokeStyle = '#2874A6';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.48, height * 0.25, width * 0.15, height * 0.15, 10);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillText('ADP', width * 0.555, height * 0.33);
        
        // Arrow down (reaction)
        EnergyShapes.drawMetabolicArrow(
            this.ctx,
            width * 0.5, height * 0.45,
            width * 0.5, height * 0.55,
            '#F39C12', 'Creatine Kinase'
        );
        
        // Products
        // Creatine
        this.ctx.fillStyle = '#95A5A6';
        this.ctx.strokeStyle = '#7F8C8D';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.15, height * 0.62, width * 0.25, height * 0.15, 10);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillText('Creatine', width * 0.275, height * 0.7);
        
        // Plus sign
        this.ctx.font = 'bold 24px Arial';
        this.ctx.fillText('+', width * 0.43, height * 0.7);
        
        // ATP
        this.ctx.fillStyle = '#27AE60';
        this.ctx.strokeStyle = '#1E8449';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.48, height * 0.62, width * 0.15, height * 0.15, 10);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillText('ATP', width * 0.555, height * 0.7);
        
        if(showLabels) {
            // Characteristics box
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.fillStyle = 'rgba(231, 76, 60, 0.1)';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.roundRect(width * 0.65, height * 0.25, width * 0.3, height * 0.25, 5);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Characteristics:', width * 0.67, height * 0.29);
            
            this.ctx.font = '12px Arial';
            const chars = [
                '• Fastest ATP source',
                '• Lasts 10 seconds',
                '• No oxygen needed',
                '• Maximum power'
            ];
            
            chars.forEach((char, i) => {
                this.ctx.fillText(char, width * 0.67, height * (0.32 + i * 0.04));
            });
            
            // Usage examples
            this.ctx.strokeStyle = '#3498DB';
            this.ctx.fillStyle = 'rgba(52, 152, 219, 0.1)';
            this.ctx.beginPath();
            this.ctx.roundRect(width * 0.65, height * 0.55, width * 0.3, height * 0.22, 5);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.fillText('Used in:', width * 0.67, height * 0.59);
            
            this.ctx.font = '12px Arial';
            const uses = [
                '• 100m sprint',
                '• Powerlifting',
                '• Jump/throw events',
                '• Explosive movements'
            ];
            
            uses.forEach((use, i) => {
                this.ctx.fillText(use, width * 0.67, height * (0.62 + i * 0.04));
            });
        }
        
        this.ctx.restore();
    }

    renderThermoregulationDiagram(x, y, width, height, options) {
        const { showLabels, showMechanisms } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Central body temperature
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.strokeStyle = '#C0392B';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(width * 0.5, height * 0.5, width * 0.15, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 20px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('37°C', width * 0.5, height * 0.48);
        this.ctx.font = '14px Arial';
        this.ctx.fillText('Normal', width * 0.5, height * 0.53);
        
        if(showMechanisms) {
            // Cooling mechanisms (top left)
            this.ctx.fillStyle = '#3498DB';
            this.ctx.strokeStyle = '#2874A6';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.roundRect(width * 0.05, height * 0.05, width * 0.35, height * 0.25, 10);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('COOLING', width * 0.225, height * 0.12);
            
            this.ctx.font = '13px Arial';
            this.ctx.textAlign = 'left';
            const cooling = [
                '• Sweating',
                '• Vasodilation',
                '• Decreased metabolism',
                '• Behavioral (seek shade)'
            ];
            
            cooling.forEach((mech, i) => {
                this.ctx.fillText(mech, width * 0.08, height * (0.16 + i * 0.04));
            });
            
            // Arrow from cooling to center
            EnergyShapes.drawMetabolicArrow(
                this.ctx,
                width * 0.3, height * 0.32,
                width * 0.4, height * 0.42,
                '#3498DB', 'Heat loss', true
            );
            
            // Heating mechanisms (top right)
            this.ctx.fillStyle = '#E67E22';
            this.ctx.strokeStyle = '#CA6F1E';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.roundRect(width * 0.6, height * 0.05, width * 0.35, height * 0.25, 10);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('HEATING', width * 0.775, height * 0.12);
            
            this.ctx.font = '13px Arial';
            this.ctx.textAlign = 'left';
            const heating = [
                '• Shivering',
                '• Vasoconstriction',
                '• Increased metabolism',
                '• Behavioral (seek warmth)'
            ];
            
            heating.forEach((mech, i) => {
                this.ctx.fillText(mech, width * 0.63, height * (0.16 + i * 0.04));
            });
            
            // Arrow from heating to center
            EnergyShapes.drawMetabolicArrow(
                this.ctx,
                width * 0.7, height * 0.32,
                width * 0.6, height * 0.42,
                '#E67E22', 'Heat gain', true
            );
            
            // Hypothalamus control center
            this.ctx.fillStyle = '#9B59B6';
            this.ctx.strokeStyle = '#7D3C98';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.roundRect(width * 0.35, height * 0.72, width * 0.3, height * 0.12, 10);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Hypothalamus', width * 0.5, height * 0.77);
            this.ctx.font = '12px Arial';
            this.ctx.fillText('(Thermostat)', width * 0.5, height * 0.81);
            
            // Arrow from center to hypothalamus
            EnergyShapes.drawMetabolicArrow(
                this.ctx,
                width * 0.5, height * 0.65,
                width * 0.5, height * 0.71,
                '#9B59B6', 'Feedback'
            );
        }
        
        if(showLabels) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Negative Feedback Loop maintains homeostasis', width * 0.5, height * 0.95);
        }
        
        this.ctx.restore();
    }

    renderBMRDiagram(x, y, width, height, options) {
        const { showLabels, showFactors } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Central BMR circle
        this.ctx.fillStyle = '#F39C12';
        this.ctx.strokeStyle = '#CA6F1E';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(width * 0.5, height * 0.4, width * 0.18, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 20px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('BMR', width * 0.5, height * 0.38);
        this.ctx.font = '14px Arial';
        this.ctx.fillText('Basal Metabolic', width * 0.5, height * 0.42);
        this.ctx.fillText('Rate', width * 0.5, height * 0.46);
        
        if(showFactors) {
            // Factors affecting BMR
            const factors = [
                { angle: 0, name: 'Age', icon: '↓', color: '#E74C3C' },
                { angle: Math.PI / 3, name: 'Sex', icon: '♂♀', color: '#9B59B6' },
                { angle: 2 * Math.PI / 3, name: 'Body\nSize', icon: '📏', color: '#3498DB' },
                { angle: Math.PI, name: 'Muscle\nMass', icon: '💪', color: '#27AE60' },
                { angle: 4 * Math.PI / 3, name: 'Hormones', icon: 'T₃/T₄', color: '#E67E22' },
                { angle: 5 * Math.PI / 3, name: 'Genetics', icon: 'DNA', color: '#16A085' }
            ];
            
            const radius = width * 0.35;
            
            factors.forEach(factor => {
                const fx = width * 0.5 + Math.cos(factor.angle) * radius;
                const fy = height * 0.4 + Math.sin(factor.angle) * radius;
                
                // Factor circle
                this.ctx.fillStyle = factor.color;
                this.ctx.strokeStyle = EnergyShapes.darkenColor(factor.color, 0.3);
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.arc(fx, fy, width * 0.08, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.stroke();
                
                // Label
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.textAlign = 'center';
                const lines = factor.name.split('\n');
                lines.forEach((line, i) => {
                    this.ctx.fillText(line, fx, fy + i * 13 - (lines.length - 1) * 6.5);
                });
                
                // Connection line to center
                this.ctx.strokeStyle = '#95A5A6';
                this.ctx.lineWidth = 1.5;
                this.ctx.setLineDash([3, 3]);
                this.ctx.beginPath();
                this.ctx.moveTo(
                    width * 0.5 + Math.cos(factor.angle) * width * 0.18,
                    height * 0.4 + Math.sin(factor.angle) * width * 0.18
                );
                this.ctx.lineTo(
                    fx - Math.cos(factor.angle) * width * 0.08,
                    fy - Math.sin(factor.angle) * width * 0.08
                );
                this.ctx.stroke();
                this.ctx.setLineDash([]);
            });
        }
        
        if(showLabels) {
            // Energy expenditure breakdown
            this.ctx.strokeStyle = '#3498DB';
            this.ctx.fillStyle = 'rgba(52, 152, 219, 0.1)';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.roundRect(width * 0.05, height * 0.75, width * 0.9, height * 0.2, 5);
            this.ctx.fill();
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Total Daily Energy Expenditure (TDEE)', width * 0.5, height * 0.79);
            
            // Bar chart showing breakdown
            const breakdown = [
                { label: 'BMR\n60-70%', x: 0.15, color: '#F39C12' },
                { label: 'Activity\n20-30%', x: 0.4, color: '#E74C3C' },
                { label: 'Thermic Effect\n10%', x: 0.65, color: '#9B59B6' }
            ];
            
            breakdown.forEach(item => {
                this.ctx.fillStyle = item.color;
                this.ctx.strokeStyle = EnergyShapes.darkenColor(item.color, 0.3);
                this.ctx.lineWidth = 1.5;
                this.ctx.beginPath();
                this.ctx.roundRect(width * (item.x - 0.08), height * 0.83, width * 0.16, height * 0.08, 3);
                this.ctx.fill();
                this.ctx.stroke();
                
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.font = 'bold 10px Arial';
                this.ctx.textAlign = 'center';
                const lines = item.label.split('\n');
                lines.forEach((line, i) => {
                    this.ctx.fillText(line, width * item.x, height * 0.86 + i * 11);
                });
            });
        }
        
        this.ctx.restore();
    }

    // ===== HELPER METHODS =====

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

    drawArrow(x1, y1, x2, y2, color, label = '', arrowSize = 8) {
        this.ctx.save();
        
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = color;
        this.ctx.lineWidth = 2;

        // Draw line
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();

        // Draw arrowhead
        const angle = Math.atan2(y2 - y1, x2 - x1);
        this.ctx.beginPath();
        this.ctx.moveTo(x2, y2);
        this.ctx.lineTo(
            x2 - arrowSize * Math.cos(angle - Math.PI / 6),
            y2 - arrowSize * Math.sin(angle - Math.PI / 6)
        );
        this.ctx.lineTo(
            x2 - arrowSize * Math.cos(angle + Math.PI / 6),
            y2 - arrowSize * Math.sin(angle + Math.PI / 6)
        );
        this.ctx.closePath();
        this.ctx.fill();

        // Label
        if(label) {
            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2;
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = color;
            this.ctx.textAlign = 'center';
            this.ctx.fillText(label, midX, midY - 5);
        }

        this.ctx.restore();
    }

    drawLegend(x, y, items) {
        this.ctx.save();
        this.ctx.translate(x, y);

        const boxSize = 12;
        const spacing = 20;

        items.forEach((item, index) => {
            const yPos = index * spacing;

            // Color box
            this.ctx.fillStyle = item.color;
            this.ctx.fillRect(0, yPos, boxSize, boxSize);
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(0, yPos, boxSize, boxSize);

            // Label
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(item.label, boxSize + 5, yPos + boxSize - 2);
        });

        this.ctx.restore();
    }

    // ===== ANIMATION =====

    animate() {
        this.currentFrame++;
        requestAnimationFrame(() => this.animate());
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    saveAsPNG(filename = 'energy-diagram.png') {
        const link = document.createElement('a');
        link.download = filename;
        link.href = this.canvas.toDataURL();
        link.click();
    }
}


// ============================================================================
// EXPORTS
// ============================================================================

export { 
    EnergySystemsRegistry, 
    EnergyShapes, 
    EnergyDiagramRenderer 
};
