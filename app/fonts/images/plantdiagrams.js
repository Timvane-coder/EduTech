// ============================================================================
// PLANT BIOLOGY DIAGRAMS REGISTRY - Comprehensive Plant Configuration System
// ============================================================================

class PlantBiologyRegistry {
    static diagrams = {
        // ===== 1. PLANT CELL BIOLOGY =====
        
        'plantCell': {
            name: 'Plant Cell',
            category: 'Cellular Biology',
            description: 'Complete plant cell with organelles',
            dataRequired: [],
            usage: 'Best for cellular structure education',
            examples: ['Plant cell', 'Cell organelles', 'Cell wall'],
            defaultOptions: {
                title: 'Plant Cell Structure',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'chloroplast': {
            name: 'Chloroplast',
            category: 'Cellular Biology',
            description: 'Detailed chloroplast structure',
            dataRequired: [],
            usage: 'Best for photosynthesis education',
            examples: ['Chloroplast', 'Photosynthesis', 'Thylakoid'],
            defaultOptions: {
                title: 'Chloroplast Structure',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'mitochondria': {
            name: 'Plant Mitochondria',
            category: 'Cellular Biology',
            description: 'Mitochondrial structure in plants',
            dataRequired: [],
            usage: 'Best for cellular respiration',
            examples: ['Mitochondria', 'Respiration', 'ATP'],
            defaultOptions: {
                title: 'Plant Mitochondria',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 2. PLANT ANATOMY =====

        'flowerAnatomy': {
            name: 'Flower Anatomy',
            category: 'Plant Anatomy',
            description: 'Complete flower structure',
            dataRequired: [],
            usage: 'Best for reproduction education',
            examples: ['Flower parts', 'Pollination', 'Reproduction'],
            defaultOptions: {
                title: 'Flower Anatomy',
                flowerType: 'complete', // 'complete', 'simple'
                showLabels: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'leafAnatomy': {
            name: 'Leaf Anatomy',
            category: 'Plant Anatomy',
            description: 'Leaf structure and cross-section',
            dataRequired: [],
            usage: 'Best for photosynthesis and transpiration',
            examples: ['Leaf structure', 'Stomata', 'Veins'],
            defaultOptions: {
                title: 'Leaf Anatomy',
                view: 'cross-section', // 'cross-section', 'surface', 'both'
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rootSystem': {
            name: 'Root System',
            category: 'Plant Anatomy',
            description: 'Root structure and types',
            dataRequired: [],
            usage: 'Best for nutrient absorption education',
            examples: ['Root system', 'Taproot', 'Fibrous roots'],
            defaultOptions: {
                title: 'Root System',
                type: 'taproot', // 'taproot', 'fibrous', 'both'
                showLabels: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'stemAnatomy': {
            name: 'Stem Anatomy',
            category: 'Plant Anatomy',
            description: 'Stem cross-section structure',
            dataRequired: [],
            usage: 'Best for vascular tissue education',
            examples: ['Stem', 'Vascular bundles', 'Xylem', 'Phloem'],
            defaultOptions: {
                title: 'Stem Anatomy',
                plantType: 'dicot', // 'dicot', 'monocot'
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'completePlant': {
            name: 'Complete Plant',
            category: 'Plant Anatomy',
            description: 'Whole plant with all parts',
            dataRequired: [],
            usage: 'Best for general plant structure',
            examples: ['Plant parts', 'Plant anatomy', 'Botany'],
            defaultOptions: {
                title: 'Complete Plant Structure',
                showLabels: true,
                showRoots: true,
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 3. PLANT PROCESSES =====

        'photosynthesis': {
            name: 'Photosynthesis Process',
            category: 'Plant Processes',
            description: 'Light and dark reactions',
            dataRequired: [],
            usage: 'Best for photosynthesis education',
            examples: ['Photosynthesis', 'Light reaction', 'Calvin cycle'],
            defaultOptions: {
                title: 'Photosynthesis',
                showReactions: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'transpiration': {
            name: 'Transpiration',
            category: 'Plant Processes',
            description: 'Water movement through plant',
            dataRequired: [],
            usage: 'Best for water transport education',
            examples: ['Transpiration', 'Water transport', 'Stomata'],
            defaultOptions: {
                title: 'Transpiration Process',
                showLabels: true,
                animate: false,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'pollinationProcess': {
            name: 'Pollination',
            category: 'Plant Processes',
            description: 'Pollination mechanisms',
            dataRequired: [],
            usage: 'Best for reproduction education',
            examples: ['Pollination', 'Fertilization', 'Seeds'],
            defaultOptions: {
                title: 'Pollination Process',
                pollinationType: 'insect', // 'insect', 'wind', 'both'
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'germinationProcess': {
            name: 'Seed Germination',
            category: 'Plant Processes',
            description: 'Stages of seed germination',
            dataRequired: [],
            usage: 'Best for plant development',
            examples: ['Germination', 'Seedling', 'Growth'],
            defaultOptions: {
                title: 'Seed Germination',
                showStages: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 4. SPECIALIZED STRUCTURES =====

        'stomate': {
            name: 'Stomata Structure',
            category: 'Specialized Structures',
            description: 'Guard cells and stomatal pore',
            dataRequired: [],
            usage: 'Best for gas exchange education',
            examples: ['Stomata', 'Guard cells', 'Gas exchange'],
            defaultOptions: {
                title: 'Stomata',
                state: 'open', // 'open', 'closed', 'both'
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'trichome': {
            name: 'Trichomes',
            category: 'Specialized Structures',
            description: 'Plant hair structures',
            dataRequired: [],
            usage: 'Best for plant defense education',
            examples: ['Trichomes', 'Plant hairs', 'Defense'],
            defaultOptions: {
                title: 'Trichomes',
                types: 'all', // 'all', 'glandular', 'non-glandular'
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vascularBundle': {
            name: 'Vascular Bundle',
            category: 'Specialized Structures',
            description: 'Xylem and phloem arrangement',
            dataRequired: [],
            usage: 'Best for transport tissue education',
            examples: ['Vascular tissue', 'Xylem', 'Phloem'],
            defaultOptions: {
                title: 'Vascular Bundle',
                arrangement: 'dicot', // 'dicot', 'monocot'
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 5. PLANT REPRODUCTION =====

        'ovule': {
            name: 'Ovule Structure',
            category: 'Plant Reproduction',
            description: 'Female reproductive structure',
            dataRequired: [],
            usage: 'Best for plant reproduction',
            examples: ['Ovule', 'Embryo sac', 'Megaspore'],
            defaultOptions: {
                title: 'Ovule Structure',
                showLabels: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'pollenGrain': {
            name: 'Pollen Grain',
            category: 'Plant Reproduction',
            description: 'Male gametophyte structure',
            dataRequired: [],
            usage: 'Best for reproduction education',
            examples: ['Pollen', 'Microspore', 'Pollination'],
            defaultOptions: {
                title: 'Pollen Grain',
                showLabels: true,
                showGermination: false,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'seedStructure': {
            name: 'Seed Structure',
            category: 'Plant Reproduction',
            description: 'Seed anatomy with embryo',
            dataRequired: [],
            usage: 'Best for seed anatomy',
            examples: ['Seed', 'Embryo', 'Cotyledon'],
            defaultOptions: {
                title: 'Seed Structure',
                type: 'dicot', // 'dicot', 'monocot'
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fruitTypes': {
            name: 'Fruit Types',
            category: 'Plant Reproduction',
            description: 'Various fruit classifications',
            dataRequired: [],
            usage: 'Best for fruit classification',
            examples: ['Fruits', 'Fruit types', 'Seed dispersal'],
            defaultOptions: {
                title: 'Fruit Types',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 6. PLANT TISSUES =====

        'meristemTissue': {
            name: 'Meristematic Tissue',
            category: 'Plant Tissues',
            description: 'Growth tissue types',
            dataRequired: [],
            usage: 'Best for growth and development',
            examples: ['Meristem', 'Apical meristem', 'Growth'],
            defaultOptions: {
                title: 'Meristematic Tissue',
                type: 'apical', // 'apical', 'lateral', 'intercalary'
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'parenchymaTissue': {
            name: 'Parenchyma Tissue',
            category: 'Plant Tissues',
            description: 'Ground tissue structure',
            dataRequired: [],
            usage: 'Best for tissue education',
            examples: ['Parenchyma', 'Ground tissue', 'Storage'],
            defaultOptions: {
                title: 'Parenchyma Tissue',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 7. SPECIAL ADAPTATIONS =====

        'cactusAdaptation': {
            name: 'Cactus Adaptations',
            category: 'Adaptations',
            description: 'Desert plant adaptations',
            dataRequired: [],
            usage: 'Best for adaptation education',
            examples: ['Cactus', 'Desert plants', 'CAM photosynthesis'],
            defaultOptions: {
                title: 'Cactus Adaptations',
                showLabels: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'carnivorousPlant': {
            name: 'Carnivorous Plant',
            category: 'Adaptations',
            description: 'Insect-trapping mechanisms',
            dataRequired: [],
            usage: 'Best for specialized adaptations',
            examples: ['Venus flytrap', 'Pitcher plant', 'Carnivorous'],
            defaultOptions: {
                title: 'Carnivorous Plant',
                type: 'venus-flytrap', // 'venus-flytrap', 'pitcher', 'sundew'
                showLabels: true,
                width: 700,
                height: 800,
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
        console.log('=== PLANT BIOLOGY DIAGRAMS REGISTRY SUMMARY ===');
        console.log(`Total Diagrams: ${this.getTotalDiagramCount()}`);
        console.log('\nBy Category:');
        const stats = this.getDiagramStats();
        Object.entries(stats).forEach(([category, data]) => {
            console.log(`  ${category}: ${data.count} diagrams`);
        });
    }
}
2. Plant Biology Shapes
// ============================================================================
// PLANT BIOLOGY SHAPES LIBRARY
// ============================================================================

class PlantBiologyShapes {

    // ===== CELLULAR STRUCTURES =====

    static drawPlantCell(ctx, x, y, size) {
        ctx.save();
        ctx.translate(x, y);

        // Cell wall (rigid outer boundary)
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#F5F5DC';
        ctx.beginPath();
        ctx.rect(-size/2, -size/2, size, size);
        ctx.fill();
        ctx.stroke();

        // Cell membrane (inside cell wall)
        ctx.strokeStyle = '#CD853F';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.rect(-size/2 + 8, -size/2 + 8, size - 16, size - 16);
        ctx.stroke();
        ctx.setLineDash([]);

        // Cytoplasm
        ctx.fillStyle = 'rgba(200, 230, 201, 0.3)';
        ctx.fillRect(-size/2 + 10, -size/2 + 10, size - 20, size - 20);

        // Central vacuole (large in plant cells)
        ctx.fillStyle = 'rgba(173, 216, 230, 0.4)';
        ctx.strokeStyle = '#4682B4';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(0, 0, size * 0.25, size * 0.25, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Nucleus
        ctx.fillStyle = '#DDA0DD';
        ctx.strokeStyle = '#9370DB';
        ctx.beginPath();
        ctx.arc(-size * 0.15, -size * 0.15, size * 0.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Nucleolus
        ctx.fillStyle = '#8B008B';
        ctx.beginPath();
        ctx.arc(-size * 0.15, -size * 0.15, size * 0.04, 0, Math.PI * 2);
        ctx.fill();

        // Chloroplasts (multiple, green)
        const chloroplastPositions = [
            [-size * 0.25, size * 0.15],
            [size * 0.2, -size * 0.2],
            [size * 0.15, size * 0.25],
            [-size * 0.3, -size * 0.25],
            [size * 0.25, size * 0.1]
        ];

        chloroplastPositions.forEach(([cx, cy]) => {
            this.drawChloroplast(ctx, cx, cy, size * 0.08, size * 0.05, false);
        });

        // Mitochondria
        const mitoPositions = [
            [size * 0.3, -size * 0.1],
            [-size * 0.2, size * 0.25]
        ];

        mitoPositions.forEach(([mx, my]) => {
            this.drawMitochondria(ctx, mx, my, size * 0.08, size * 0.04, false);
        });

        // Endoplasmic reticulum
        ctx.strokeStyle = '#DAA520';
        ctx.lineWidth = 2;
        for(let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.moveTo(-size * 0.1, -size * 0.05 + i * size * 0.05);
            ctx.quadraticCurveTo(
                0, -size * 0.03 + i * size * 0.05,
                size * 0.1, -size * 0.05 + i * size * 0.05
            );
            ctx.stroke();
        }

        // Golgi apparatus
        ctx.strokeStyle = '#CD853F';
        ctx.lineWidth = 1.5;
        for(let i = 0; i < 4; i++) {
            ctx.beginPath();
            ctx.arc(size * 0.1, size * 0.15, size * 0.04 + i * size * 0.01, Math.PI, 0);
            ctx.stroke();
        }

        // Plasmodesmata (connections through cell wall)
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 2;
        const plasmPositions = [
            [size/2, 0],
            [-size/2, 0],
            [0, size/2],
            [0, -size/2]
        ];
        
        plasmPositions.forEach(([px, py]) => {
            ctx.beginPath();
            ctx.moveTo(px - 10, py);
            ctx.lineTo(px + 10, py);
            ctx.stroke();
        });

        ctx.restore();
    }

    static drawChloroplast(ctx, x, y, width, height, detailed = true) {
        ctx.save();
        ctx.translate(x, y);

        // Outer membrane
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, width);
        gradient.addColorStop(0, '#90EE90');
        gradient.addColorStop(0.5, '#228B22');
        gradient.addColorStop(1, '#006400');

        ctx.fillStyle = gradient;
        ctx.strokeStyle = '#006400';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(0, 0, width, height, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        if(detailed) {
            // Thylakoid membranes (stacked grana)
            ctx.strokeStyle = '#FFD700';
            ctx.fillStyle = '#FFFF00';
            ctx.lineWidth = 1.5;

            // Draw several grana stacks
            for(let g = 0; g < 3; g++) {
                const gx = -width * 0.4 + g * width * 0.4;
                // Each granum has multiple thylakoids
                for(let t = 0; t < 5; t++) {
                    const ty = -height * 0.4 + t * height * 0.2;
                    ctx.beginPath();
                    ctx.ellipse(gx, ty, width * 0.15, height * 0.08, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                }
            }

            // Stroma (fluid-filled space)
            ctx.fillStyle = 'rgba(144, 238, 144, 0.3)';
            ctx.beginPath();
            ctx.ellipse(0, 0, width * 0.7, height * 0.7, 0, 0, Math.PI * 2);
            ctx.fill();

            // DNA (small circle)
            ctx.fillStyle = '#FF69B4';
            ctx.beginPath();
            ctx.arc(width * 0.3, height * 0.3, width * 0.1, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    static drawMitochondria(ctx, x, y, width, height, detailed = true) {
        ctx.save();
        ctx.translate(x, y);

        // Outer membrane
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, width);
        gradient.addColorStop(0, '#FFB6C1');
        gradient.addColorStop(0.5, '#FF69B4');
        gradient.addColorStop(1, '#C71585');

        ctx.fillStyle = gradient;
        ctx.strokeStyle = '#8B008B';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(0, 0, width, height, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        if(detailed) {
            // Cristae (inner membrane folds)
            ctx.strokeStyle = '#FF1493';
            ctx.lineWidth = 2;
            for(let i = 0; i < 5; i++) {
                const cx = -width * 0.6 + i * width * 0.3;
                ctx.beginPath();
                ctx.moveTo(cx, height * 0.6);
                ctx.quadraticCurveTo(cx, 0, cx, -height * 0.6);
                ctx.stroke();
            }

            // Matrix
            ctx.fillStyle = 'rgba(255, 182, 193, 0.3)';
            ctx.beginPath();
            ctx.ellipse(0, 0, width * 0.6, height * 0.6, 0, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    // ===== PLANT ORGANS =====

    static drawFlower(ctx, x, y, width, height, type = 'complete') {
        ctx.save();
        ctx.translate(x, y);

        // Receptacle (base)
        ctx.fillStyle = '#90EE90';
        ctx.beginPath();
        ctx.ellipse(0, height * 0.4, width * 0.08, height * 0.06, 0, 0, Math.PI * 2);
        ctx.fill();

        // Sepals (green, below petals)
        ctx.fillStyle = '#228B22';
        for(let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
            ctx.save();
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.ellipse(0, -height * 0.25, width * 0.08, height * 0.15, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        // Petals (colorful)
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, width * 0.2);
        gradient.addColorStop(0, '#FFB6C1');
        gradient.addColorStop(0.5, '#FF69B4');
        gradient.addColorStop(1, '#FF1493');

        for(let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
            ctx.save();
            ctx.rotate(angle);
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.ellipse(0, -height * 0.3, width * 0.12, height * 0.18, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#C71585';
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.restore();
        }

        if(type === 'complete') {
            // Stamens (male parts - yellow)
            ctx.fillStyle = '#FFD700';
            ctx.strokeStyle = '#FFA500';
            ctx.lineWidth = 2;
            for(let i = 0; i < 6; i++) {
                const angle = (i / 6) * Math.PI * 2;
                const sx = Math.cos(angle) * width * 0.08;
                const sy = Math.sin(angle) * height * 0.08;
                
                // Filament
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(sx, sy);
                ctx.stroke();
                
                // Anther
                ctx.fillStyle = '#FFD700';
                ctx.beginPath();
                ctx.arc(sx, sy, width * 0.02, 0, Math.PI * 2);
                ctx.fill();
            }

            // Pistil (female part - center)
            // Style
            ctx.strokeStyle = '#90EE90';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -height * 0.08);
            ctx.stroke();

            // Stigma (sticky top)
            ctx.fillStyle = '#32CD32';
            ctx.beginPath();
            ctx.arc(0, -height * 0.08, width * 0.03, 0, Math.PI * 2);
            ctx.fill();

            // Ovary (base with ovules)
            ctx.fillStyle = '#98FB98';
            ctx.strokeStyle = '#228B22';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.ellipse(0, height * 0.05, width * 0.06, height * 0.08, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Ovules inside
            ctx.fillStyle = '#FFFFFF';
            for(let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.arc(-width * 0.02 + i * width * 0.02, height * 0.05, width * 0.01, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        ctx.restore();
    }

    static drawLeaf(ctx, x, y, width, height, showVeins = true) {
        ctx.save();
        ctx.translate(x, y);

        // Leaf blade (lamina)
        const gradient = ctx.createLinearGradient(-width/2, 0, width/2, 0);
        gradient.addColorStop(0, '#228B22');
        gradient.addColorStop(0.5, '#32CD32');
        gradient.addColorStop(1, '#228B22');

        ctx.fillStyle = gradient;
        ctx.strokeStyle = '#006400';
        ctx.lineWidth = 2;

        // Leaf shape
        ctx.beginPath();
        ctx.moveTo(0, -height/2);
        ctx.bezierCurveTo(
            width/2, -height/3,
            width/2, height/3,
            0, height/2
        );
        ctx.bezierCurveTo(
            -width/2, height/3,
            -width/2, -height/3,
            0, -height/2
        );
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        if(showVeins) {
            // Midrib (main vein)
            ctx.strokeStyle = '#9ACD32';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(0, -height/2);
            ctx.lineTo(0, height/2);
            ctx.stroke();

            // Secondary veins
            ctx.lineWidth = 1.5;
            for(let i = -3; i <= 3; i++) {
                if(i !== 0) {
                    const startY = (i / 7) * height;
                    const endX = Math.sign(i) * width * 0.4;
                    const endY = startY + height * 0.1;
                    
                    ctx.beginPath();
                    ctx.moveTo(0, startY);
                    ctx.quadraticCurveTo(endX * 0.5, startY, endX, endY);
                    ctx.stroke();
                    
                    // Tertiary veins
                    ctx.lineWidth = 0.8;
                    for(let j = 1; j <= 2; j++) {
                        ctx.beginPath();
                        const branchX = endX * 0.3 * j;
                        const branchY = startY + (endY - startY) * 0.3 * j;
                        ctx.moveTo(branchX, branchY);
                        ctx.lineTo(branchX + Math.sign(i) * width * 0.1, branchY + height * 0.05);
                        ctx.stroke();
                    }
                }
            }
        }

        // Petiole (leaf stalk)
        ctx.strokeStyle = '#228B22';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(0, height/2);
        ctx.lineTo(0, height/2 + height * 0.15);
        ctx.stroke();

        ctx.restore();
    }

    static drawLeafCrossSection(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        // Upper epidermis
        ctx.fillStyle = '#98FB98';
        ctx.strokeStyle = '#228B22';
        ctx.lineWidth = 2;
        ctx.fillRect(-width/2, -height/2, width, height * 0.1);
        ctx.strokeRect(-width/2, -height/2, width, height * 0.1);

        // Cuticle (waxy layer)
        ctx.fillStyle = '#E0FFE0';
        ctx.fillRect(-width/2, -height/2, width, height * 0.03);

        // Palisade mesophyll (column-like cells)
        ctx.fillStyle = '#228B22';
        ctx.strokeStyle = '#006400';
        ctx.lineWidth = 1;
        for(let i = 0; i < 12; i++) {
            const px = -width/2 + (i * width / 12);
            ctx.fillRect(px + 2, -height * 0.4, width/15, height * 0.25);
            ctx.strokeRect(px + 2, -height * 0.4, width/15, height * 0.25);
            
            // Chloroplasts in palisade cells
            ctx.fillStyle = '#006400';
            for(let j = 0; j < 3; j++) {
                ctx.beginPath();
                ctx.arc(px + width/30, -height * 0.35 + j * height * 0.08, 2, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.fillStyle = '#228B22';
        }

        // Spongy mesophyll (irregular cells with air spaces)
        ctx.fillStyle = '#90EE90';
        ctx.strokeStyle = '#228B22';
        const spongyCells = [
            [-width * 0.35, -height * 0.05, 0.15, 0.12],
            [-width * 0.15, 0, 0.12, 0.15],
            [width * 0.05, -height * 0.03, 0.14, 0.13],
            [width * 0.25, 0.02, 0.13, 0.14],
            [-width * 0.25, height * 0.15, 0.16, 0.12],
            [0, height * 0.12, 0.15, 0.15],
            [width * 0.2, height * 0.18, 0.12, 0.13]
        ];

        spongyCells.forEach(([cx, cy, w, h]) => {
            ctx.beginPath();
            ctx.ellipse(cx, cy, width * w, height * h, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Chloroplasts in spongy cells (fewer than palisade)
            ctx.fillStyle = '#006400';
            ctx.beginPath();
            ctx.arc(cx, cy, 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#90EE90';
        });

        // Vascular bundle (vein)
        // Xylem (water transport - bottom)
        ctx.fillStyle = '#8B4513';
        ctx.beginPath();
        ctx.ellipse(0, height * 0.05, width * 0.08, height * 0.08, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Xylem vessels
        ctx.fillStyle = '#D2691E';
        for(let i = 0; i < 4; i++) {
            const angle = (i / 4) * Math.PI * 2;
            const vx = Math.cos(angle) * width * 0.04;
            const vy = height * 0.05 + Math.sin(angle) * height * 0.04;
            ctx.beginPath();
            ctx.arc(vx, vy, width * 0.015, 0, Math.PI * 2);
            ctx.fill();
        }

        // Phloem (sugar transport - top)
        ctx.fillStyle = '#90EE90';
        ctx.strokeStyle = '#228B22';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(0, -height * 0.05, width * 0.06, height * 0.06, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Lower epidermis
        ctx.fillStyle = '#98FB98';
        ctx.strokeStyle = '#228B22';
        ctx.lineWidth = 2;
        ctx.fillRect(-width/2, height/2 - height * 0.1, width, height * 0.1);
        ctx.strokeRect(-width/2, height/2 - height * 0.1, width, height * 0.1);

        // Stomata (pores) in lower epidermis
        for(let i = 0; i < 3; i++) {
            const sx = -width/2 + (i + 1) * width / 4;
            this.drawStoma(ctx, sx, height/2 - height * 0.05, width * 0.08, height * 0.06, 'open');
        }

        ctx.restore();
    }

    static drawStoma(ctx, x, y, width, height, state = 'open') {
        ctx.save();
        ctx.translate(x, y);

        if(state === 'open') {
            // Guard cells (kidney-shaped)
            ctx.fillStyle = '#228B22';
            ctx.strokeStyle = '#006400';
            ctx.lineWidth = 1.5;

            // Left guard cell
            ctx.beginPath();
            ctx.ellipse(-width * 0.15, 0, width * 0.2, height * 0.4, Math.PI * 0.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Right guard cell
            ctx.beginPath();
            ctx.ellipse(width * 0.15, 0, width * 0.2, height * 0.4, -Math.PI * 0.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Stomatal pore (opening)
            ctx.fillStyle = '#000000';
            ctx.beginPath();
            ctx.ellipse(0, 0, width * 0.1, height * 0.25, 0, 0, Math.PI * 2);
            ctx.fill();

            // Chloroplasts in guard cells
            ctx.fillStyle = '#006400';
            for(let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.arc(-width * 0.15, -height * 0.2 + i * height * 0.2, 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(width * 0.15, -height * 0.2 + i * height * 0.2, 2, 0, Math.PI * 2);
                ctx.fill();
            }
        } else {
            // Closed state - guard cells less curved, no pore
            ctx.fillStyle = '#228B22';
            ctx.strokeStyle = '#006400';
            ctx.lineWidth = 1.5;

            // Guard cells touching
            ctx.beginPath();
            ctx.ellipse(-width * 0.08, 0, width * 0.15, height * 0.35, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.ellipse(width * 0.08, 0, width * 0.15, height * 0.35, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }

        ctx.restore();
    }

    static drawRootSystem(ctx, x, y, width, height, type = 'taproot') {
        ctx.save();
        ctx.translate(x, y);

        if(type === 'taproot') {
            // Main taproot
            ctx.fillStyle = '#8B4513';
            ctx.strokeStyle = '#654321';
            ctx.lineWidth = 2;

            const rootGradient = ctx.createLinearGradient(0, 0, 0, height);
            rootGradient.addColorStop(0, '#D2691E');
            rootGradient.addColorStop(1, '#654321');
            
            ctx.fillStyle = rootGradient;
            ctx.beginPath();
            ctx.moveTo(-width * 0.05, 0);
            ctx.lineTo(-width * 0.03, height * 0.9);
            ctx.lineTo(width * 0.03, height * 0.9);
            ctx.lineTo(width * 0.05, 0);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Lateral roots
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 3;
            for(let i = 0; i < 8; i++) {
                const ry = height * (0.2 + i * 0.1);
                const direction = i % 2 === 0 ? -1 : 1;
                const rx = direction * width * (0.15 + Math.random() * 0.1);
                
                ctx.beginPath();
                ctx.moveTo(0, ry);
                ctx.quadraticCurveTo(
                    direction * width * 0.1, ry + height * 0.05,
                    rx, ry + height * 0.08
                );
                ctx.stroke();

                // Root hairs (tiny)
                ctx.lineWidth = 1;
                for(let j = 0; j < 5; j++) {
                    const t = j / 5;
                    const hairX = t * rx;
                    const hairY = ry + t * height * 0.08;
                    ctx.beginPath();
                    ctx.moveTo(hairX, hairY);
                    ctx.lineTo(hairX + direction * width * 0.03, hairY + height * 0.02);
                    ctx.stroke();
                }
                ctx.lineWidth = 3;
            }
        } else if(type === 'fibrous') {
            // Multiple roots of similar size
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 4;

            for(let i = 0; i < 12; i++) {
                const startX = -width * 0.3 + i * (width * 0.6 / 11);
                const endX = startX + (Math.random() - 0.5) * width * 0.15;
                
                ctx.beginPath();
                ctx.moveTo(startX, 0);
                ctx.quadraticCurveTo(
                    startX + (endX - startX) * 0.5, height * 0.4,
                    endX, height * 0.8
                );
                ctx.stroke();

                // Root hairs
                ctx.lineWidth = 1;
                for(let j = 0; j < 8; j++) {
                    const t = j / 8;
                    const hairX = startX + t * (endX - startX);
                    const hairY = t * height * 0.8;
                    const hairDir = Math.random() < 0.5 ? -1 : 1;
                    
                    ctx.beginPath();
                    ctx.moveTo(hairX, hairY);
                    ctx.lineTo(hairX + hairDir * width * 0.03, hairY + height * 0.02);
                    ctx.stroke();
                }
                ctx.lineWidth = 4;
            }
        }

        // Root cap (at tip)
        ctx.fillStyle = '#A0522D';
        ctx.beginPath();
        ctx.arc(0, height * 0.9, width * 0.04, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    static drawRootCrossSection(ctx, x, y, size) {
        ctx.save();
        ctx.translate(x, y);

        // Epidermis
        ctx.fillStyle = '#D2691E';
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.45, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Cortex
        ctx.fillStyle = '#F5DEB3';
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.38, 0, Math.PI * 2);
        ctx.fill();

        // Endodermis (with Casparian strip)
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.28, 0, Math.PI * 2);
        ctx.stroke();

        // Pericycle
        ctx.fillStyle = '#DEB887';
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.25, 0, Math.PI * 2);
        ctx.fill();

        // Vascular cylinder
        // Xylem (star-shaped in center)
        ctx.fillStyle = '#8B4513';
        ctx.strokeStyle = '#654321';
        ctx.lineWidth = 1;
        
        for(let i = 0; i < 4; i++) {
            const angle = (i / 4) * Math.PI * 2;
            ctx.save();
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(size * 0.08, -size * 0.03);
            ctx.lineTo(size * 0.2, 0);
            ctx.lineTo(size * 0.08, size * 0.03);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }

        // Phloem (between xylem arms)
        ctx.fillStyle = '#90EE90';
        ctx.strokeStyle = '#228B22';
        for(let i = 0; i < 4; i++) {
            const angle = (i / 4) * Math.PI * 2 + Math.PI / 4;
            const px = Math.cos(angle) * size * 0.15;
            const py = Math.sin(angle) * size * 0.15;
            
            ctx.beginPath();
            ctx.arc(px, py, size * 0.04, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }

        ctx.restore();
    }

    static drawStem(ctx, x, y, width, height, plantType = 'dicot') {
        ctx.save();
        ctx.translate(x, y);

        // Epidermis
        ctx.fillStyle = '#90EE90';
        ctx.strokeStyle = '#228B22';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(0, 0, width/2, height/2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Cortex
        ctx.fillStyle = '#98FB98';
        ctx.beginPath();
        ctx.ellipse(0, 0, width * 0.42, height * 0.42, 0, 0, Math.PI * 2);
        ctx.fill();

        if(plantType === 'dicot') {
            // Vascular bundles in a ring
            const numBundles = 8;
            for(let i = 0; i < numBundles; i++) {
                const angle = (i / numBundles) * Math.PI * 2;
                const bx = Math.cos(angle) * width * 0.3;
                const by = Math.sin(angle) * height * 0.3;
                this.drawVascularBundle(ctx, bx, by, width * 0.08, height * 0.12, 'dicot');
            }

            // Pith (center)
            ctx.fillStyle = '#F0FFF0';
            ctx.beginPath();
            ctx.ellipse(0, 0, width * 0.15, height * 0.15, 0, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // Monocot - scattered vascular bundles
            const bundlePositions = [
                [0, 0],
                [-width * 0.2, -height * 0.15],
                [width * 0.15, -height * 0.2],
                [-width * 0.15, height * 0.18],
                [width * 0.22, height * 0.1],
                [-width * 0.25, 0],
                [width * 0.1, 0],
                [0, -height * 0.25],
                [0, height * 0.22]
            ];

            bundlePositions.forEach(([bx, by]) => {
                this.drawVascularBundle(ctx, bx, by, width * 0.06, height * 0.09, 'monocot');
            });
        }

        ctx.restore();
    }

    static drawVascularBundle(ctx, x, y, width, height, type = 'dicot') {
        ctx.save();
        ctx.translate(x, y);

        if(type === 'dicot') {
            // Bundle sheath
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.ellipse(0, 0, width, height, 0, 0, Math.PI * 2);
            ctx.stroke();

            // Phloem (outer)
            ctx.fillStyle = '#90EE90';
            ctx.strokeStyle = '#228B22';
            ctx.beginPath();
            ctx.ellipse(0, -height * 0.4, width * 0.6, height * 0.3, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Cambium (thin layer)
            ctx.strokeStyle = '#FFFF00';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.ellipse(0, 0, width * 0.7, height * 0.5, 0, 0, Math.PI);
            ctx.stroke();

            // Xylem (inner)
            ctx.fillStyle = '#8B4513';
            ctx.strokeStyle = '#654321';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.ellipse(0, height * 0.3, width * 0.7, height * 0.4, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Xylem vessels
            ctx.fillStyle = '#D2691E';
            for(let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.arc(-width * 0.3 + i * width * 0.3, height * 0.3, width * 0.1, 0, Math.PI * 2);
                ctx.fill();
            }
        } else {
            // Monocot - no cambium, scattered arrangement
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.ellipse(0, 0, width, height, 0, 0, Math.PI * 2);
            ctx.stroke();

            // Phloem
            ctx.fillStyle = '#90EE90';
            ctx.beginPath();
            ctx.arc(-width * 0.3, 0, width * 0.3, 0, Math.PI * 2);
            ctx.fill();

            // Xylem
            ctx.fillStyle = '#8B4513';
            ctx.beginPath();
            ctx.arc(width * 0.3, 0, width * 0.4, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    static drawCompletePlant(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        // Roots (underground)
        const rootY = height * 0.6;
        this.drawRootSystem(ctx, 0, rootY, width * 0.5, height * 0.38, 'taproot');

        // Soil line
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 2;
        ctx.setLineDash([10, 5]);
        ctx.beginPath();
        ctx.moveTo(-width * 0.6, rootY);
        ctx.lineTo(width * 0.6, rootY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Main stem
        ctx.strokeStyle = '#228B22';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(0, rootY);
        ctx.lineTo(0, height * 0.1);
        ctx.stroke();

        // Leaves at different heights
        const leafHeights = [0.5, 0.4, 0.3, 0.2];
        leafHeights.forEach((h, i) => {
            const leafY = height * h;
            const direction = i % 2 === 0 ? 1 : -1;
            const leafX = direction * width * 0.15;
            
            ctx.save();
            ctx.translate(leafX, leafY);
            ctx.rotate(direction * Math.PI / 6);
            this.drawLeaf(ctx, 0, 0, width * 0.2, height * 0.12, false);
            ctx.restore();
        });

        // Flower at top
        this.drawFlower(ctx, 0, height * 0.05, width * 0.25, height * 0.15, 'complete');

        ctx.restore();
    }

    // ===== PLANT PROCESSES =====

    static drawPhotosynthesisProcess(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        // Chloroplast (main structure)
        this.drawChloroplast(ctx, 0, 0, width * 0.4, height * 0.3, true);

        // Light reactions (in thylakoids)
        // Sunlight coming in
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 3;
        for(let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.moveTo(-width * 0.5, -height * 0.4 + i * height * 0.05);
            ctx.lineTo(-width * 0.2, -height * 0.15 + i * height * 0.03);
            ctx.stroke();
        }

        // Light reaction equation
        ctx.font = 'bold 14px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'left';
        ctx.fillText('Light Reactions (Thylakoid)', width * 0.1, -height * 0.35);

        // Water input
        ctx.strokeStyle = '#1E90FF';
        ctx.lineWidth = 2;
        this.drawArrow(ctx, -width * 0.45, -height * 0.1, -width * 0.25, -height * 0.05, '#1E90FF');
        ctx.font = '12px Arial';
        ctx.fillStyle = '#1E90FF';
        ctx.fillText('H₂O', -width * 0.48, -height * 0.12);

        // Oxygen output
        this.drawArrow(ctx, -width * 0.25, -height * 0.05, -width * 0.45, 0.05, '#FF6347');
        ctx.fillStyle = '#FF6347';
        ctx.fillText('O₂', -width * 0.48, 0.05);

        // ATP and NADPH produced
        ctx.strokeStyle = '#FF4500';
        ctx.setLineDash([5, 5]);
        this.drawArrow(ctx, -width * 0.1, 0, 0.1, 0.1, '#FF4500');
        ctx.fillStyle = '#FF4500';
        ctx.fillText('ATP + NADPH', -width * 0.05, -0.02);
        ctx.setLineDash([]);

        // Calvin Cycle (in stroma)
        ctx.font = 'bold 14px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.fillText('Calvin Cycle (Stroma)', width * 0.1, height * 0.25);

        // CO2 input
        ctx.strokeStyle = '#808080';
        this.drawArrow(ctx, -width * 0.45, height * 0.3, -width * 0.2, height * 0.25, '#808080');
        ctx.font = '12px Arial';
        ctx.fillStyle = '#808080';
        ctx.fillText('CO₂', -width * 0.48, height * 0.3);

        // Glucose output
        this.drawArrow(ctx, width * 0.2, height * 0.3, width * 0.45, height * 0.35, '#32CD32');
        ctx.fillStyle = '#32CD32';
        ctx.fillText('C₆H₁₂O₆ (Glucose)', width * 0.25, height * 0.38);

        // Overall equation
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂', 0, height * 0.48);

        ctx.restore();
    }

    static drawArrow(ctx, x1, y1, x2, y2, color) {
        ctx.save();
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 2;

        // Line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        // Arrowhead
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

        ctx.restore();
    }

    static drawTranspiration(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        // Simplified plant outline
        // Root
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(0, height * 0.9);
        ctx.lineTo(0, height * 0.7);
        ctx.stroke();

        // Stem
        ctx.strokeStyle = '#228B22';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(0, height * 0.7);
        ctx.lineTo(0, height * 0.2);
        ctx.stroke();

        // Leaf
        this.drawLeaf(ctx, width * 0.15, height * 0.3, width * 0.2, height * 0.15, false);

        // Water uptake from soil
        ctx.strokeStyle = '#1E90FF';
        ctx.lineWidth = 3;
        for(let i = 0; i < 3; i++) {
            const angle = (i - 1) * Math.PI / 6;
            const startX = Math.sin(angle) * width * 0.1;
            const startY = height * 0.95;
            
            this.drawArrow(ctx, startX, startY, 0, height * 0.9, '#1E90FF');
        }
        ctx.font = '12px Arial';
        ctx.fillStyle = '#1E90FF';
        ctx.textAlign = 'center';
        ctx.fillText('H₂O uptake (roots)', 0, height * 0.98);

        // Water movement up through xylem
        ctx.strokeStyle = '#1E90FF';
        ctx.lineWidth = 4;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(-width * 0.02, height * 0.85);
        ctx.lineTo(-width * 0.02, height * 0.25);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#1E90FF';
        ctx.textAlign = 'left';
        ctx.fillText('Xylem', -width * 0.12, height * 0.5);

        // Water droplets moving up
        ctx.fillStyle = '#1E90FF';
        for(let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.arc(-width * 0.02, height * (0.8 - i * 0.12), 3, 0, Math.PI * 2);
            ctx.fill();
        }

        // Evaporation from leaves (stomata)
        ctx.strokeStyle = '#87CEEB';
        ctx.lineWidth = 2;
        for(let i = 0; i < 6; i++) {
            const vx = width * (0.2 + i * 0.03);
            const vy = height * (0.25 - i * 0.02);
            
            ctx.beginPath();
            ctx.moveTo(width * 0.2, height * 0.3);
            ctx.quadraticCurveTo(
                width * 0.22, height * 0.25,
                vx, vy
            );
            ctx.stroke();
            
            // Water vapor molecule
            ctx.fillStyle = '#87CEEB';
            ctx.beginPath();
            ctx.arc(vx, vy, 2, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.font = '12px Arial';
        ctx.fillStyle = '#87CEEB';
        ctx.textAlign = 'left';
        ctx.fillText('H₂O evaporation', width * 0.25, height * 0.15);
        ctx.fillText('(transpiration)', width * 0.25, height * 0.18);

        // Stomata detail inset
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 2;
        ctx.fillStyle = '#F0FFF0';
        ctx.beginPath();
        ctx.rect(width * 0.3, height * 0.5, width * 0.35, height * 0.25);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 11px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('Stomata (magnified)', width * 0.475, height * 0.53);

        this.drawStoma(ctx, width * 0.475, height * 0.625, width * 0.12, height * 0.08, 'open');

        ctx.restore();
    }

    static drawPollinationProcess(ctx, x, y, width, height, type = 'insect') {
        ctx.save();
        ctx.translate(x, y);

        // Two flowers
        this.drawFlower(ctx, -width * 0.3, 0, width * 0.25, height * 0.35, 'complete');
        this.drawFlower(ctx, width * 0.3, 0, width * 0.25, height * 0.35, 'complete');

        if(type === 'insect' || type === 'both') {
            // Bee/insect pollinator
            this.drawBee(ctx, 0, -height * 0.15, width * 0.12, height * 0.08);

            // Flight path with pollen transfer
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(-width * 0.3, -height * 0.1);
            ctx.quadraticCurveTo(0, -height * 0.25, width * 0.3, -height * 0.1);
            ctx.stroke();
            ctx.setLineDash([]);

            // Pollen grains
            ctx.fillStyle = '#FFD700';
            for(let i = 0; i < 5; i++) {
                const t = i / 5;
                const px = -width * 0.3 + t * width * 0.6;
                const py = -height * 0.1 - Math.sin(t * Math.PI) * height * 0.15;
                ctx.beginPath();
                ctx.arc(px, py, 3, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.font = '12px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'center';
            ctx.fillText('Insect Pollination', 0, height * 0.35);
        }

        if(type === 'wind' || type === 'both') {
            // Wind lines
            ctx.strokeStyle = '#B0C4DE';
            ctx.lineWidth = 2;
            for(let i = 0; i < 4; i++) {
                ctx.beginPath();
                ctx.moveTo(-width * 0.45, -height * 0.3 + i * height * 0.05);
                ctx.lineTo(width * 0.45, -height * 0.3 + i * height * 0.05);
                ctx.stroke();
            }

            // Pollen in wind
            ctx.fillStyle = '#FFD700';
            for(let i = 0; i < 10; i++) {
                const px = -width * 0.4 + Math.random() * width * 0.8;
                const py = -height * 0.35 + Math.random() * height * 0.2;
                ctx.beginPath();
                ctx.arc(px, py, 2, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.font = '12px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'center';
            ctx.fillText('Wind Pollination', 0, type === 'both' ? height * 0.4 : height * 0.35);
        }

        // Labels
        ctx.font = '11px Arial';
        ctx.fillStyle = '#FF69B4';
        ctx.textAlign = 'center';
        ctx.fillText('Male (Anther)', -width * 0.3, height * 0.25);
        ctx.fillText('Female (Stigma)', width * 0.3, height * 0.25);

        ctx.restore();
    }

    static drawBee(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        // Body
        ctx.fillStyle = '#FFD700';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(0, 0, width * 0.4, height * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Stripes
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        for(let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.arc(0, -height * 0.3 + i * height * 0.3, width * 0.4, 0, Math.PI);
            ctx.stroke();
        }

        // Head
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(-width * 0.35, 0, width * 0.25, 0, Math.PI * 2);
        ctx.fill();

        // Eyes
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(-width * 0.45, -height * 0.1, width * 0.08, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(-width * 0.45, height * 0.1, width * 0.08, 0, Math.PI * 2);
        ctx.fill();

        // Wings
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1;
        
        // Upper wings
        ctx.beginPath();
        ctx.ellipse(-width * 0.1, -height * 0.5, width * 0.3, height * 0.4, -Math.PI / 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.ellipse(-width * 0.1, height * 0.5, width * 0.3, height * 0.4, Math.PI / 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Legs
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1.5;
        for(let i = -1; i <= 1; i++) {
            ctx.beginPath();
            ctx.moveTo(width * 0.1 + i * width * 0.15, height * 0.5);
            ctx.lineTo(width * 0.2 + i * width * 0.15, height * 0.8);
            ctx.stroke();
        }

        // Antennae
        ctx.beginPath();
        ctx.moveTo(-width * 0.35, -height * 0.2);
        ctx.lineTo(-width * 0.5, -height * 0.5);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-width * 0.35, -height * 0.2);
        ctx.lineTo(-width * 0.45, -height * 0.5);
        ctx.stroke();

        ctx.restore();
    }

    static drawGerminationStages(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        const stageWidth = width / 4;
        const stages = [
            { name: 'Dry Seed', progress: 0 },
            { name: 'Imbibition', progress: 0.3 },
            { name: 'Radicle Emergence', progress: 0.6 },
            { name: 'Seedling', progress: 1 }
        ];

        stages.forEach((stage, i) => {
            const sx = -width * 0.4 + i * stageWidth;
            
            // Soil line
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(sx - stageWidth * 0.4, 0);
            ctx.lineTo(sx + stageWidth * 0.4, 0);
            ctx.stroke();
            ctx.setLineDash([]);

            // Draw stage
            if(stage.progress === 0) {
                // Dry seed
                this.drawSeed(ctx, sx, -height * 0.1, stageWidth * 0.3, height * 0.2, 'dicot', false);
            } else if(stage.progress === 0.3) {
                // Swollen seed
                this.drawSeed(ctx, sx, -height * 0.15, stageWidth * 0.35, height * 0.25, 'dicot', false);
                // Water droplets
                ctx.fillStyle = '#1E90FF';
                for(let j = 0; j < 3; j++) {
                    ctx.beginPath();
                    ctx.arc(sx + stageWidth * (0.2 - j * 0.2), height * 0.05 + j * height * 0.05, 3, 0, Math.PI * 2);
                    ctx.fill();
                }
            } else if(stage.progress === 0.6) {
                // Seed with radicle
                this.drawSeed(ctx, sx, -height * 0.1, stageWidth * 0.3, height * 0.2, 'dicot', true);
                // Radicle (first root)
                ctx.strokeStyle = '#8B4513';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(sx, height * 0.1);
                ctx.lineTo(sx, height * 0.3);
                ctx.stroke();
            } else {
                // Seedling
                // Root
                ctx.strokeStyle = '#8B4513';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(sx, 0);
                ctx.lineTo(sx, height * 0.35);
                ctx.stroke();
                
                // Shoot
                ctx.strokeStyle = '#228B22';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(sx, 0);
                ctx.lineTo(sx, -height * 0.25);
                ctx.stroke();
                
                // Cotyledons (seed leaves)
                ctx.fillStyle = '#90EE90';
                ctx.strokeStyle = '#228B22';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.ellipse(sx - stageWidth * 0.15, -height * 0.15, stageWidth * 0.12, height * 0.08, -Math.PI / 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.ellipse(sx + stageWidth * 0.15, -height * 0.15, stageWidth * 0.12, height * 0.08, Math.PI / 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                
                // True leaves
                this.drawLeaf(ctx, sx, -height * 0.3, stageWidth * 0.15, height * 0.1, false);
            }

            // Stage label
            ctx.font = 'bold 11px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'center';
            ctx.fillText(stage.name, sx, height * 0.45);
        });

        ctx.restore();
    }

    static drawSeed(ctx, x, y, width, height, type = 'dicot', showParts = false) {
        ctx.save();
        ctx.translate(x, y);

        // Seed coat
        ctx.fillStyle = '#8B4513';
        ctx.strokeStyle = '#654321';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(0, 0, width/2, height/2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        if(showParts) {
            // Embryo
            ctx.fillStyle = '#F5DEB3';
            ctx.beginPath();
            ctx.ellipse(0, 0, width * 0.35, height * 0.35, 0, 0, Math.PI * 2);
            ctx.fill();

            if(type === 'dicot') {
                // Two cotyledons
                ctx.fillStyle = '#FFE4B5';
                ctx.strokeStyle = '#D2691E';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.ellipse(-width * 0.15, 0, width * 0.2, height * 0.3, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.ellipse(width * 0.15, 0, width * 0.2, height * 0.3, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            } else {
                // One cotyledon
                ctx.fillStyle = '#FFE4B5';
                ctx.strokeStyle = '#D2691E';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.ellipse(0, 0, width * 0.25, height * 0.32, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            }

            // Radicle (embryonic root)
            ctx.strokeStyle = '#A0522D';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, height * 0.35);
            ctx.lineTo(0, height * 0.5);
            ctx.stroke();

            // Plumule (embryonic shoot)
            ctx.strokeStyle = '#90EE90';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, -height * 0.35);
            ctx.lineTo(0, -height * 0.45);
            ctx.stroke();

            // Hilum (scar)
            ctx.fillStyle = '#654321';
            ctx.beginPath();
            ctx.ellipse(width * 0.4, 0, width * 0.08, height * 0.05, 0, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    static drawPollenGrain(ctx, x, y, size, showGermination = false) {
        ctx.save();
        ctx.translate(x, y);

        // Pollen wall (exine)
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 3;
        ctx.fillStyle = '#FFFF00';
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Spiny surface
        for(let i = 0; i < 12; i++) {
            const angle = (i / 12) * Math.PI * 2;
            const sx = Math.cos(angle) * size * 0.4;
            const sy = Math.sin(angle) * size * 0.4;
            const ex = Math.cos(angle) * size * 0.5;
            const ey = Math.sin(angle) * size * 0.5;
            
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(ex, ey);
            ctx.stroke();
        }

        // Germination pores
        ctx.fillStyle = '#FFA500';
        for(let i = 0; i < 3; i++) {
            const angle = (i / 3) * Math.PI * 2;
            const px = Math.cos(angle) * size * 0.35;
            const py = Math.sin(angle) * size * 0.35;
            ctx.beginPath();
            ctx.arc(px, py, size * 0.05, 0, Math.PI * 2);
            ctx.fill();
        }

        // Generative cell (nucleus)
        ctx.fillStyle = '#FF69B4';
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.15, 0, Math.PI * 2);
        ctx.fill();

        // Vegetative cell (larger nucleus)
        ctx.fillStyle = '#DDA0DD';
        ctx.beginPath();
        ctx.arc(size * 0.15, -size * 0.1, size * 0.12, 0, Math.PI * 2);
        ctx.fill();

        if(showGermination) {
            // Pollen tube growing
            ctx.strokeStyle = '#90EE90';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(0, size * 0.4);
            ctx.quadraticCurveTo(size * 0.2, size * 0.7, size * 0.1, size);
            ctx.stroke();

            // Sperm cells moving down tube
            ctx.fillStyle = '#FF1493';
            ctx.beginPath();
            ctx.arc(size * 0.05, size * 0.6, size * 0.08, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(size * 0.08, size * 0.8, size * 0.08, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    static drawOvule(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        // Ovule wall (integuments)
        ctx.fillStyle = '#FFE4E1';
        ctx.strokeStyle = '#CD853F';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(0, 0, width/2, height/2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Micropyle (opening)
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.ellipse(0, -height * 0.45, width * 0.08, height * 0.06, 0, 0, Math.PI * 2);
        ctx.fill();

        // Nucellus
        ctx.fillStyle = '#FFF5EE';
        ctx.strokeStyle = '#D2691E';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(0, 0, width * 0.35, height * 0.35, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Embryo sac
        ctx.fillStyle = '#FFB6C1';
        ctx.strokeStyle = '#FF69B4';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(0, 0, width * 0.25, height * 0.25, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Egg cell
        ctx.fillStyle = '#FF1493';
        ctx.beginPath();
        ctx.arc(0, -height * 0.12, width * 0.08, 0, Math.PI * 2);
        ctx.fill();

        // Synergids (helper cells)
        ctx.fillStyle = '#FFB6C1';
        ctx.beginPath();
        ctx.arc(-width * 0.08, -height * 0.18, width * 0.05, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(width * 0.08, -height * 0.18, width * 0.05, 0, Math.PI * 2);
        ctx.fill();

        // Central cell (with polar nuclei)
        ctx.fillStyle = '#DDA0DD';
        ctx.beginPath();
        ctx.arc(0, 0, width * 0.06, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(width * 0.05, height * 0.05, width * 0.06, 0, Math.PI * 2);
        ctx.fill();

        // Antipodal cells
        ctx.fillStyle = '#F0E68C';
        for(let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.arc(-width * 0.08 + i * width * 0.08, height * 0.18, width * 0.04, 0, Math.PI * 2);
            ctx.fill();
        }

        // Funiculus (stalk)
        ctx.strokeStyle = '#90EE90';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, height/2);
        ctx.lineTo(0, height * 0.7);
        ctx.stroke();

        ctx.restore();
    }

    static drawFruitTypes(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        const fruitTypes = [
            { name: 'Berry', type: 'berry' },
            { name: 'Drupe', type: 'drupe' },
            { name: 'Pome', type: 'pome' },
            { name: 'Legume', type: 'legume' }
        ];

        const fruitWidth = width / 4;

        fruitTypes.forEach((fruit, i) => {
            const fx = -width * 0.4 + i * fruitWidth;
            
            // Draw fruit
            this.drawFruit(ctx, fx, 0, fruitWidth * 0.6, height * 0.5, fruit.type);
            
            // Label
            ctx.font = 'bold 12px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'center';
            ctx.fillText(fruit.name, fx, height * 0.35);
        });

        ctx.restore();
    }

    static drawFruit(ctx, x, y, width, height, type) {
        ctx.save();
        ctx.translate(x, y);

        switch(type) {
            case 'berry':
                // Tomato/grape-like
                ctx.fillStyle = '#FF6347';
                ctx.strokeStyle = '#8B0000';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(0, 0, width/2, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                
                // Seeds
                ctx.fillStyle = '#FFFF00';
                for(let i = 0; i < 8; i++) {
                    const angle = (i / 8) * Math.PI * 2;
                    const sx = Math.cos(angle) * width * 0.25;
                    const sy = Math.sin(angle) * width * 0.25;
                    ctx.beginPath();
                    ctx.ellipse(sx, sy, width * 0.05, width * 0.08, angle, 0, Math.PI * 2);
                    ctx.fill();
                }
                break;

            case 'drupe':
                // Peach/cherry-like
                // Fleshy mesocarp
                ctx.fillStyle = '#FFDAB9';
                ctx.strokeStyle = '#CD853F';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.ellipse(0, 0, width/2, height * 0.4, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                
                // Hard endocarp (pit)
                ctx.fillStyle = '#8B4513';
                ctx.strokeStyle = '#654321';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.ellipse(0, 0, width * 0.25, height * 0.2, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                
                // Single seed
                ctx.fillStyle = '#F5DEB3';
                ctx.beginPath();
                ctx.ellipse(0, 0, width * 0.15, height * 0.12, 0, 0, Math.PI * 2);
                ctx.fill();
                break;

            case 'pome':
                // Apple-like
                ctx.fillStyle = '#FF6347';
                ctx.strokeStyle = '#8B0000';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(-width * 0.4, -height * 0.1);
                ctx.bezierCurveTo(-width * 0.5, -height * 0.3, -width * 0.5, height * 0.3, 0, height * 0.4);
                ctx.bezierCurveTo(width * 0.5, height * 0.3, width * 0.5, -height * 0.3, width * 0.4, -height * 0.1);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                
                // Core with seeds
                ctx.fillStyle = '#FFFACD';
                ctx.strokeStyle = '#DAA520';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.ellipse(0, 0, width * 0.15, height * 0.2, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                
                // Seeds in core
                ctx.fillStyle = '#8B4513';
                for(let i = 0; i < 4; i++) {
                    const sy = -height * 0.1 + i * height * 0.07;
                    ctx.beginPath();
                    ctx.ellipse(0, sy, width * 0.04, width * 0.06, 0, 0, Math.PI * 2);
                    ctx.fill();
                }
                
                // Stem
                ctx.strokeStyle = '#8B4513';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(0, -height * 0.4);
                ctx.lineTo(0, -height * 0.5);
                ctx.stroke();
                break;

            case 'legume':
                // Pea pod
                ctx.fillStyle = '#90EE90';
                ctx.strokeStyle = '#228B22';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.ellipse(0, 0, width/2, height * 0.15, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                
                // Suture line
                ctx.strokeStyle = '#006400';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(-width * 0.45, 0);
                ctx.lineTo(width * 0.45, 0);
                ctx.stroke();
                
                // Seeds (peas)
                ctx.fillStyle = '#32CD32';
                for(let i = 0; i < 5; i++) {
                    const sx = -width * 0.3 + i * width * 0.15;
                    ctx.beginPath();
                    ctx.arc(sx, 0, width * 0.08, 0, Math.PI * 2);
                    ctx.fill();
                }
                break;
        }

        ctx.restore();
    }

    static drawTrichome(ctx, x, y, width, height, type = 'glandular') {
        ctx.save();
        ctx.translate(x, y);

        if(type === 'glandular') {
            // Glandular trichome (secretes substances)
            // Stalk
            ctx.strokeStyle = '#90EE90';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -height * 0.7);
            ctx.stroke();
            
            // Glandular head
            ctx.fillStyle = '#FFD700';
            ctx.strokeStyle = '#FFA500';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(0, -height * 0.85, width * 0.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Secretory vesicles
            ctx.fillStyle = '#FF8C00';
            for(let i = 0; i < 4; i++) {
                const angle = (i / 4) * Math.PI * 2;
                const vx = Math.cos(angle) * width * 0.15;
                const vy = -height * 0.85 + Math.sin(angle) * width * 0.15;
                ctx.beginPath();
                ctx.arc(vx, vy, width * 0.08, 0, Math.PI * 2);
                ctx.fill();
            }
        } else {
            // Non-glandular trichome (hair-like)
            ctx.strokeStyle = '#90EE90';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(
                width * 0.2, -height * 0.5,
                width * 0.15, -height * 0.95
            );
            ctx.stroke();
            
            // Pointed tip
            ctx.strokeStyle = '#228B22';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(width * 0.15, -height * 0.95);
            ctx.lineTo(width * 0.17, -height);
            ctx.stroke();
        }

        // Base (epidermal cell)
        ctx.fillStyle = '#98FB98';
        ctx.strokeStyle = '#228B22';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.rect(-width * 0.2, -height * 0.05, width * 0.4, height * 0.05);
        ctx.fill();
        ctx.stroke();

        ctx.restore();
    }

    static drawCactus(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        // Main body (stem)
        const gradient = ctx.createLinearGradient(-width/2, 0, width/2, 0);
        gradient.addColorStop(0, '#2E8B57');
        gradient.addColorStop(0.5, '#3CB371');
        gradient.addColorStop(1, '#2E8B57');

        ctx.fillStyle = gradient;
        ctx.strokeStyle = '#228B22';
        ctx.lineWidth = 3;

        // Central column
        ctx.beginPath();
        ctx.moveTo(-width * 0.15, -height * 0.45);
        ctx.lineTo(-width * 0.15, height * 0.45);
        ctx.quadraticCurveTo(-width * 0.15, height * 0.48, 0, height * 0.48);
        ctx.quadraticCurveTo(width * 0.15, height * 0.48, width * 0.15, height * 0.45);
        ctx.lineTo(width * 0.15, -height * 0.45);
        ctx.quadraticCurveTo(width * 0.15, -height * 0.48, 0, -height * 0.48);
        ctx.quadraticCurveTo(-width * 0.15, -height * 0.48, -width * 0.15, -height * 0.45);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Ribs (vertical ridges)
        ctx.strokeStyle = '#006400';
        ctx.lineWidth = 2;
        for(let i = -2; i <= 2; i++) {
            ctx.beginPath();
            ctx.moveTo(i * width * 0.06, -height * 0.45);
            ctx.lineTo(i * width * 0.06, height * 0.45);
            ctx.stroke();
        }

        // Spines (modified leaves)
        ctx.strokeStyle = '#F5DEB3';
        ctx.lineWidth = 2;
        
        for(let row = 0; row < 10; row++) {
            const sy = -height * 0.4 + row * height * 0.08;
            for(let col = -2; col <= 2; col++) {
                const sx = col * width * 0.06;
                
                // Areole (spine cluster point)
                ctx.fillStyle = '#FFFACD';
                ctx.beginPath();
                ctx.arc(sx, sy, width * 0.02, 0, Math.PI * 2);
                ctx.fill();
                
                // Multiple spines
                for(let spine = 0; spine < 5; spine++) {
                    const angle = (spine / 5) * Math.PI * 2;
                    const spineLength = width * 0.08;
                    
                    ctx.beginPath();
                    ctx.moveTo(sx, sy);
                    ctx.lineTo(
                        sx + Math.cos(angle) * spineLength,
                        sy + Math.sin(angle) * spineLength
                    );
                    ctx.stroke();
                }
            }
        }

        // Flower (if present)
        ctx.fillStyle = '#FF69B4';
        ctx.strokeStyle = '#FF1493';
        ctx.lineWidth = 1.5;
        
        for(let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            ctx.save();
            ctx.translate(width * 0.2, -height * 0.3);
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.ellipse(0, -width * 0.08, width * 0.05, width * 0.08, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }

        // Flower center
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(width * 0.2, -height * 0.3, width * 0.03, 0, Math.PI * 2);
        ctx.fill();

        // Reduced roots (adapted for water storage)
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, height * 0.48);
        ctx.lineTo(0, height * 0.52);
        ctx.stroke();

        ctx.restore();
    }

    static drawVenusFlytrap(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        // Base/petiole
        ctx.strokeStyle = '#228B22';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(0, height * 0.3);
        ctx.quadraticCurveTo(-width * 0.1, height * 0.15, -width * 0.15, 0);
        ctx.stroke();

        // Trap lobes (open position)
        const lobeGradient = ctx.createRadialGradient(-width * 0.15, 0, 0, -width * 0.15, 0, width * 0.3);
        lobeGradient.addColorStop(0, '#90EE90');
        lobeGradient.addColorStop(0.6, '#32CD32');
        lobeGradient.addColorStop(1, '#228B22');

        // Left lobe
        ctx.fillStyle = lobeGradient;
        ctx.strokeStyle = '#006400';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(-width * 0.3, -height * 0.05, width * 0.2, height * 0.15, -Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Right lobe
        ctx.beginPath();
        ctx.ellipse(-width * 0.05, -height * 0.1, width * 0.2, height * 0.15, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Inner red/pink coloration
        ctx.fillStyle = 'rgba(255, 105, 180, 0.4)';
        ctx.beginPath();
        ctx.ellipse(-width * 0.3, -height * 0.05, width * 0.12, height * 0.08, -Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(-width * 0.05, -height * 0.1, width * 0.12, height * 0.08, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();

        // Trigger hairs (sensitive)
        ctx.strokeStyle = '#FF69B4';
        ctx.lineWidth = 2;
        
        // Left lobe triggers
        for(let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.moveTo(-width * 0.32 + i * width * 0.05, -height * 0.05);
            ctx.lineTo(-width * 0.32 + i * width * 0.05, -height * 0.1);
            ctx.stroke();
        }
        
        // Right lobe triggers
        for(let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.moveTo(-width * 0.07 + i * width * 0.05, -height * 0.1);
            ctx.lineTo(-width * 0.07 + i * width * 0.05, -height * 0.15);
            ctx.stroke();
        }

        // Marginal teeth (interlocking)
        ctx.strokeStyle = '#006400';
        ctx.lineWidth = 2;
        
        // Left lobe teeth
        for(let i = 0; i < 8; i++) {
            const angle = Math.PI * 0.7 + (i / 8) * Math.PI * 1.6;
            const tx = -width * 0.3 + Math.cos(angle) * width * 0.2;
            const ty = -height * 0.05 + Math.sin(angle) * height * 0.15;
            const endX = tx + Math.cos(angle) * width * 0.08;
            const endY = ty + Math.sin(angle) * width * 0.08;
            
            ctx.beginPath();
            ctx.moveTo(tx, ty);
            ctx.lineTo(endX, endY);
            ctx.stroke();
        }

        // Right lobe teeth
        for(let i = 0; i < 8; i++) {
            const angle = Math.PI * 0.2 - (i / 8) * Math.PI * 1.6;
            const tx = -width * 0.05 + Math.cos(angle) * width * 0.2;
            const ty = -height * 0.1 + Math.sin(angle) * height * 0.15;
            const endX = tx + Math.cos(angle) * width * 0.08;
            const endY = ty + Math.sin(angle) * width * 0.08;
            
            ctx.beginPath();
            ctx.moveTo(tx, ty);
            ctx.lineTo(endX, endY);
            ctx.stroke();
        }

        // Digestive glands (tiny dots)
        ctx.fillStyle = '#8B0000';
        for(let i = 0; i < 15; i++) {
            const gx = -width * 0.35 + Math.random() * width * 0.3;
            const gy = -height * 0.12 + Math.random() * height * 0.15;
            ctx.beginPath();
            ctx.arc(gx, gy, 1.5, 0, Math.PI * 2);
            ctx.fill();
        }

        // Captured insect (optional)
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.ellipse(-width * 0.17, -height * 0.08, width * 0.03, width * 0.02, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Insect legs
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1;
        for(let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.moveTo(-width * 0.17, -height * 0.08);
            ctx.lineTo(-width * 0.17 - width * 0.02, -height * 0.08 - height * 0.02 * i);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(-width * 0.17, -height * 0.08);
            ctx.lineTo(-width * 0.17 + width * 0.02, -height * 0.08 - height * 0.02 * i);
            ctx.stroke();
        }

        ctx.restore();
    }

    static drawMeristem(ctx, x, y, width, height, type = 'apical') {
        ctx.save();
        ctx.translate(x, y);

        if(type === 'apical') {
            // Shoot apical meristem
            // Dome-shaped
            ctx.fillStyle = '#FFE4B5';
            ctx.strokeStyle = '#D2691E';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 0, width * 0.3, Math.PI, 0);
            ctx.lineTo(width * 0.3, height * 0.2);
            ctx.lineTo(-width * 0.3, height * 0.2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Actively dividing cells
            ctx.fillStyle = '#FF69B4';
            ctx.strokeStyle = '#C71585';
            ctx.lineWidth = 1;
            
            for(let row = 0; row < 3; row++) {
                for(let col = 0; col < 4; col++) {
                    const cx = -width * 0.15 + col * width * 0.1;
                    const cy = -height * 0.1 + row * height * 0.1;
                    
                    if(Math.sqrt(cx * cx + cy * cy) < width * 0.25) {
                        ctx.beginPath();
                        ctx.rect(cx - width * 0.04, cy - height * 0.04, width * 0.08, height * 0.08);
                        ctx.fill();
                        ctx.stroke();
                        
                        // Nucleus
                        ctx.fillStyle = '#8B008B';
                        ctx.beginPath();
                        ctx.arc(cx, cy, width * 0.02, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.fillStyle = '#FF69B4';
                    }
                }
            }

            // Leaf primordia (young leaves forming)
            ctx.fillStyle = '#90EE90';
            ctx.strokeStyle = '#228B22';
            ctx.lineWidth = 1.5;
            
            const primordiaAngles = [-Math.PI * 0.7, -Math.PI * 0.3, Math.PI * 0.3, Math.PI * 0.7];
            primordiaAngles.forEach(angle => {
                const px = Math.cos(angle) * width * 0.35;
                const py = Math.sin(angle) * width * 0.2;
                
                ctx.save();
                ctx.translate(px, py);
                ctx.rotate(angle);
                ctx.beginPath();
                ctx.ellipse(0, 0, width * 0.08, width * 0.12, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                ctx.restore();
            });

        } else if(type === 'lateral') {
            // Lateral meristem (cambium) - cylindrical
            // Shown as ring in cross-section
            ctx.strokeStyle = '#FFFF00';
            ctx.fillStyle = 'rgba(255, 255, 0, 0.3)';
            ctx.lineWidth = 8;
            ctx.beginPath();
            ctx.arc(0, 0, width * 0.35, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fill();

            // Dividing cells in cambium
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 1;
            for(let i = 0; i < 20; i++) {
                const angle = (i / 20) * Math.PI * 2;
                const cx = Math.cos(angle) * width * 0.35;
                const cy = Math.sin(angle) * width * 0.35;
                
                ctx.save();
                ctx.translate(cx, cy);
                ctx.rotate(angle);
                ctx.fillStyle = '#FFA500';
                ctx.fillRect(-width * 0.03, -width * 0.05, width * 0.06, width * 0.1);
                ctx.strokeRect(-width * 0.03, -width * 0.05, width * 0.06, width * 0.1);
                ctx.restore();
            }

            // Secondary xylem forming inward
            ctx.fillStyle = '#8B4513';
            ctx.beginPath();
            ctx.arc(0, 0, width * 0.28, 0, Math.PI * 2);
            ctx.fill();

            // Secondary phloem forming outward
            ctx.fillStyle = 'rgba(144, 238, 144, 0.5)';
            ctx.beginPath();
            ctx.arc(0, 0, width * 0.42, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }
}

export { PlantBiologyRegistry, PlantBiologyShapes };
3. Plant Biology Renderer
// ============================================================================
// PLANT BIOLOGY DIAGRAM RENDERER
// ============================================================================

class PlantBiologyRenderer {
    constructor(canvas = null) {
        this.defaultFont = 'Arial, sans-serif';
        this.defaultFontSize = 12;
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
        this.currentFrame = 0;
    }

    renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = PlantBiologyRegistry.getDiagram(diagramKey);
        if (!diagram) {
            throw new Error(`Plant biology diagram '${diagramKey}' not found`);
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
                // CELLULAR BIOLOGY
                case 'plantCell':
                    this.renderPlantCellDiagram(centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;
                case 'chloroplast':
                    this.renderChloroplastDiagram(centerX, centerY, width * 0.6, height * 0.5, mergedOptions);
                    break;
                case 'mitochondria':
                    this.renderMitochondriaDiagram(centerX, centerY, width * 0.6, height * 0.5, mergedOptions);
                    break;

                // PLANT ANATOMY
                case 'flowerAnatomy':
                    this.renderFlowerAnatomyDiagram(centerX, centerY, width * 0.5, height * 0.7, mergedOptions);
                    break;
                case 'leafAnatomy':
                    this.renderLeafAnatomyDiagram(centerX, centerY, width * 0.7, height * 0.5, mergedOptions);
                    break;
                case 'rootSystem':
                    this.renderRootSystemDiagram(centerX, centerY, width * 0.5, height * 0.7, mergedOptions);
                    break;
                case 'stemAnatomy':
                    this.renderStemAnatomyDiagram(centerX, centerY, width * 0.6, height * 0.6, mergedOptions);
                    break;
                case 'completePlant':
                    this.renderCompletePlantDiagram(centerX, centerY, width * 0.5, height * 0.8, mergedOptions);
                    break;

                // PLANT PROCESSES
                case 'photosynthesis':
                    this.renderPhotosynthesisDiagram(centerX, centerY, width * 0.7, height * 0.6, mergedOptions);
                    break;
                case 'transpiration':
                    this.renderTranspirationDiagram(centerX, centerY, width * 0.6, height * 0.7, mergedOptions);
                    break;
                case 'pollinationProcess':
                    this.renderPollinationDiagram(centerX, centerY, width * 0.7, height * 0.6, mergedOptions);
                    break;
                case 'germinationProcess':
                    this.renderGerminationDiagram(centerX, centerY, width * 0.85, height * 0.5, mergedOptions);
                    break;

                // SPECIALIZED STRUCTURES
                case 'stomate':
                    this.renderStomataDiagram(centerX, centerY, width * 0.7, height * 0.5, mergedOptions);
                    break;
                case 'trichome':
                    this.renderTrichomeDiagram(centerX, centerY, width * 0.6, height * 0.6, mergedOptions);
                    break;
                case 'vascularBundle':
                    this.renderVascularBundleDiagram(centerX, centerY, width * 0.6, height * 0.6, mergedOptions);
                    break;

                // PLANT REPRODUCTION
                case 'ovule':
                    this.renderOvuleDiagram(centerX, centerY, width * 0.6, height * 0.7, mergedOptions);
                    break;
                case 'pollenGrain':
                    this.renderPollenGrainDiagram(centerX, centerY, width * 0.6, height * 0.6, mergedOptions);
                    break;
                case 'seedStructure':
                    this.renderSeedStructureDiagram(centerX, centerY, width * 0.6, height * 0.5, mergedOptions);
                    break;
                case 'fruitTypes':
                    this.renderFruitTypesDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;

                // PLANT TISSUES
                case 'meristemTissue':
                    this.renderMeristemDiagram(centerX, centerY, width * 0.6, height * 0.5, mergedOptions);
                    break;
                case 'parenchymaTissue':
                    this.renderParenchymaDiagram(centerX, centerY, width * 0.6, height * 0.5, mergedOptions);
                    break;

                // ADAPTATIONS
                case 'cactusAdaptation':
                    this.renderCactusAdaptationDiagram(centerX, centerY, width * 0.5, height * 0.7, mergedOptions);
                    break;
                case 'carnivorousPlant':
                    this.renderCarnivorousPlantDiagram(centerX, centerY, width * 0.6, height * 0.7, mergedOptions);
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

    // ========== CELLULAR BIOLOGY RENDERERS ==========

    renderPlantCellDiagram(x, y, size, options) {
        const { showLabels = true } = options;

        PlantBiologyShapes.drawPlantCell(this.ctx, x, y, size);

        if(showLabels) {
            this.addLabel('Cell Wall', x + size * 0.55, y - size * 0.4, '#8B4513', 'left');
            this.addLabel('Cell Membrane', x + size * 0.55, y - size * 0.3, '#CD853F', 'left');
            this.addLabel('Central Vacuole', x, y, '#4682B4');
            this.addLabel('Nucleus', x - size * 0.35, y - size * 0.15, '#9370DB', 'left');
            this.addLabel('Chloroplasts', x - size * 0.45, y + size * 0.15, '#228B22', 'left');
            this.addLabel('Mitochondria', x + size * 0.45, y - size * 0.1, '#FF69B4', 'left');
            this.addLabel('Golgi Apparatus', x + size * 0.4, y + size * 0.15, '#CD853F', 'left');
        }
    }

    renderChloroplastDiagram(x, y, width, height, options) {
        const { showLabels = true } = options;

        PlantBiologyShapes.drawChloroplast(this.ctx, x, y, width, height, true);

        if(showLabels) {
            this.addLabel('Outer Membrane', x - width * 0.7, y, '#006400', 'left');
            this.addLabel('Thylakoid\n(Grana Stack)', x + width * 0.6, y - height * 0.3, '#FFD700', 'left');
            this.addLabel('Stroma', x + width * 0.6, y + height * 0.2, '#90EE90', 'left');
            this.addLabel('DNA', x + width * 0.5, y + height * 0.5, '#FF69B4', 'left');
        }
    }

    renderMitochondriaDiagram(x, y, width, height, options) {
        const { showLabels = true } = options;

        PlantBiologyShapes.drawMitochondria(this.ctx, x, y, width, height, true);

        if(showLabels) {
            this.addLabel('Outer Membrane', x - width * 0.8, y, '#8B008B', 'left');
            this.addLabel('Cristae\n(Inner Membrane)', x + width * 0.7, y, '#FF1493', 'left');
            this.addLabel('Matrix', x, y + height * 0.7, '#FFB6C1');
        }
    }

    // ========== PLANT ANATOMY RENDERERS ==========

    renderFlowerAnatomyDiagram(x, y, width, height, options) {
        const { showLabels = true, flowerType = 'complete' } = options;

        PlantBiologyShapes.drawFlower(this.ctx, x, y, width, height, flowerType);

        if(showLabels) {
            this.addLabel('Petals', x - width * 0.5, y - height * 0.3, '#FF69B4', 'left');
            this.addLabel('Sepals', x - width * 0.5, y - height * 0.2, '#228B22', 'left');
            
            if(flowerType === 'complete') {
                this.addLabel('Stigma', x + width * 0.3, y - height * 0.08, '#32CD32', 'left');
                this.addLabel('Style', x + width * 0.3, y, '#32CD32', 'left');
                this.addLabel('Ovary', x + width * 0.3, y + height * 0.1, '#98FB98', 'left');
                this.addLabel('Stamens\n(Anther)', x + width * 0.3, y + height * 0.25, '#FFD700', 'left');
                this.addLabel('Receptacle', x + width * 0.3, y + height * 0.4, '#90EE90', 'left');
            }
        }
    }

    renderLeafAnatomyDiagram(x, y, width, height, options) {
        const { showLabels = true, view = 'cross-section' } = options;

        if(view === 'cross-section') {
            PlantBiologyShapes.drawLeafCrossSection(this.ctx, x, y, width, height);

            if(showLabels) {
                this.addLabel('Upper Epidermis', x - width * 0.6, y - height * 0.45, '#98FB98', 'left');
                this.addLabel('Cuticle', x - width * 0.6, y - height * 0.48, '#E0FFE0', 'left');
                this.addLabel('Palisade Mesophyll', x - width * 0.6, y - height * 0.27, '#228B22', 'left');
                this.addLabel('Spongy Mesophyll', x - width * 0.6, y + height * 0.05, '#90EE90', 'left');
                this.addLabel('Vascular Bundle\n(Xylem & Phloem)', x + width * 0.55, y, '#8B4513', 'left');
                this.addLabel('Lower Epidermis', x - width * 0.6, y + height * 0.45, '#98FB98', 'left');
                this.addLabel('Stoma', x + width * 0.55, y + height * 0.45, '#228B22', 'left');
            }
        } else {
            PlantBiologyShapes.drawLeaf(this.ctx, x, y, width, height, true);

            if(showLabels) {
                this.addLabel('Blade (Lamina)', x, y - height * 0.6, '#32CD32');
                this.addLabel('Midrib', x + width * 0.3, y, '#9ACD32', 'left');
                this.addLabel('Veins', x + width * 0.4, y + height * 0.2, '#9ACD32', 'left');
                this.addLabel('Petiole', x + width * 0.3, y + height * 0.6, '#228B22', 'left');
            }
        }
    }

    renderRootSystemDiagram(x, y, width, height, options) {
        const { showLabels = true, type = 'taproot' } = options;

        PlantBiologyShapes.drawRootSystem(this.ctx, x, y, width, height, type);

        if(showLabels) {
            if(type === 'taproot') {
                this.addLabel('Primary Root\n(Taproot)', x + width * 0.3, y + height * 0.3, '#8B4513', 'left');
                this.addLabel('Lateral Roots', x + width * 0.4, y + height * 0.5, '#8B4513', 'left');
            } else {
                this.addLabel('Fibrous Roots', x + width * 0.4, y + height * 0.4, '#8B4513', 'left');
            }
            this.addLabel('Root Hairs', x + width * 0.4, y + height * 0.7, '#A0522D', 'left');
            this.addLabel('Root Cap', x + width * 0.3, y + height * 0.95, '#A0522D', 'left');
        }
    }

    renderStemAnatomyDiagram(x, y, width, height, options) {
        const { showLabels = true, plantType = 'dicot' } = options;

        PlantBiologyShapes.drawStem(this.ctx, x, y, width, height, plantType);

        if(showLabels) {
            this.addLabel('Epidermis', x - width * 0.6, y,'#228B22', 'left');
            this.addLabel('Cortex', x - width * 0.6, y + height * 0.2, '#98FB98', 'left');
            this.addLabel('Vascular Bundles', x + width * 0.55, y - height * 0.2, '#8B4513', 'left');
            
            if(plantType === 'dicot') {
                this.addLabel('Pith', x, y, '#F0FFF0');
                this.addLabel('(Ring Pattern)', x, y + height * 0.5, '#7F8C8D');
            } else {
                this.addLabel('(Scattered Pattern)', x, y + height * 0.5, '#7F8C8D');
            }
        }
    }

    renderCompletePlantDiagram(x, y, width, height, options) {
        const { showLabels = true, showRoots = true } = options;

        PlantBiologyShapes.drawCompletePlant(this.ctx, x, y, width, height);

        if(showLabels) {
            this.addLabel('Flower', x + width * 0.3, y + height * 0.05, '#FF69B4', 'left');
            this.addLabel('Leaves', x + width * 0.35, y + height * 0.3, '#32CD32', 'left');
            this.addLabel('Stem', x + width * 0.2, y + height * 0.5, '#228B22', 'left');
            
            if(showRoots) {
                this.addLabel('Soil Line', x + width * 0.65, y + height * 0.6, '#8B4513', 'left');
                this.addLabel('Roots', x + width * 0.3, y + height * 0.75, '#8B4513', 'left');
            }
        }
    }

    // ========== PLANT PROCESSES RENDERERS ==========

    renderPhotosynthesisDiagram(x, y, width, height, options) {
        const { showLabels = true, showReactions = true } = options;

        PlantBiologyShapes.drawPhotosynthesisProcess(this.ctx, x, y, width, height);

        if(showLabels) {
            // Labels are drawn within the shape method
            
            // Add additional notes
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Light energy converts H₂O → O₂ + ATP', x - width * 0.45, y + height * 0.15);
            this.ctx.fillText('ATP powers CO₂ → Glucose conversion', x - width * 0.45, y + height * 0.4);
        }
    }

    renderTranspirationDiagram(x, y, width, height, options) {
        const { showLabels = true, animate = false } = options;

        PlantBiologyShapes.drawTranspiration(this.ctx, x, y, width, height);

        if(showLabels) {
            // Additional information
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Functions of Transpiration:', x - width * 0.45, y - height * 0.45);
            
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('• Nutrient transport', x - width * 0.45, y - height * 0.4);
            this.ctx.fillText('• Temperature regulation', x - width * 0.45, y - height * 0.37);
            this.ctx.fillText('• Maintains water pressure', x - width * 0.45, y - height * 0.34);
        }
    }

    renderPollinationDiagram(x, y, width, height, options) {
        const { showLabels = true, pollinationType = 'insect' } = options;

        PlantBiologyShapes.drawPollinationProcess(this.ctx, x, y, width, height, pollinationType);

        if(showLabels) {
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            
            if(pollinationType === 'insect' || pollinationType === 'both') {
                this.ctx.fillText('Insects transfer pollen between flowers', x, y + height * 0.42);
            }
            if(pollinationType === 'wind' || pollinationType === 'both') {
                const yOffset = pollinationType === 'both' ? 0.45 : 0.42;
                this.ctx.fillText('Wind carries pollen to other plants', x, y + height * yOffset);
            }
        }
    }

    renderGerminationDiagram(x, y, width, height, options) {
        const { showLabels = true, showStages = true } = options;

        PlantBiologyShapes.drawGerminationStages(this.ctx, x, y, width, height);

        if(showLabels) {
            // Timeline arrow
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            
            this.ctx.beginPath();
            this.ctx.moveTo(x - width * 0.45, y + height * 0.52);
            this.ctx.lineTo(x + width * 0.45, y + height * 0.52);
            this.ctx.stroke();
            
            // Arrow head
            this.ctx.beginPath();
            this.ctx.moveTo(x + width * 0.45, y + height * 0.52);
            this.ctx.lineTo(x + width * 0.42, y + height * 0.5);
            this.ctx.lineTo(x + width * 0.42, y + height * 0.54);
            this.ctx.closePath();
            this.ctx.fill();

            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('TIME', x + width * 0.48, y + height * 0.57);
        }
    }

    // ========== SPECIALIZED STRUCTURES RENDERERS ==========

    renderStomataDiagram(x, y, width, height, options) {
        const { showLabels = true, state = 'open' } = options;

        if(state === 'both') {
            // Show both open and closed
            PlantBiologyShapes.drawStoma(this.ctx, x - width * 0.25, y, width * 0.35, height * 0.6, 'open');
            PlantBiologyShapes.drawStoma(this.ctx, x + width * 0.25, y, width * 0.35, height * 0.6, 'closed');

            if(showLabels) {
                this.addLabel('Open Stoma', x - width * 0.25, y - height * 0.4, '#228B22');
                this.addLabel('Closed Stoma', x + width * 0.25, y - height * 0.4, '#228B22');
                this.addLabel('Guard Cells', x - width * 0.25, y + height * 0.4, '#228B22');
                this.addLabel('Stomatal Pore', x - width * 0.25, y + height * 0.45, '#000000');
            }
        } else {
            PlantBiologyShapes.drawStoma(this.ctx, x, y, width, height, state);

            if(showLabels) {
                this.addLabel('Guard Cells', x - width * 0.5, y, '#228B22', 'left');
                if(state === 'open') {
                    this.addLabel('Stomatal Pore\n(Open)', x + width * 0.5, y, '#000000', 'left');
                    this.addLabel('Chloroplasts', x + width * 0.5, y + height * 0.2, '#006400', 'left');
                } else {
                    this.addLabel('Pore Closed', x + width * 0.5, y, '#000000', 'left');
                }
            }
        }

        // Function note
        this.ctx.font = '11px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Stomata regulate gas exchange (O₂, CO₂) and water loss', x, y + height * 0.55);
    }

    renderTrichomeDiagram(x, y, width, height, options) {
        const { showLabels = true, types = 'all' } = options;

        if(types === 'all') {
            PlantBiologyShapes.drawTrichome(this.ctx, x - width * 0.25, y, width * 0.3, height, 'glandular');
            PlantBiologyShapes.drawTrichome(this.ctx, x + width * 0.25, y, width * 0.3, height, 'non-glandular');

            if(showLabels) {
                this.addLabel('Glandular\nTrichome', x - width * 0.25, y + height * 0.3, '#FFD700');
                this.addLabel('Non-Glandular\nTrichome', x + width * 0.25, y + height * 0.3, '#90EE90');
                this.addLabel('Secretory Head', x - width * 0.45, y - height * 0.85, '#FFA500', 'left');
                this.addLabel('Hair-like', x + width * 0.45, y - height * 0.5, '#228B22', 'left');
            }
        } else {
            PlantBiologyShapes.drawTrichome(this.ctx, x, y, width, height, types);

            if(showLabels) {
                if(types === 'glandular') {
                    this.addLabel('Glandular Head', x + width * 0.4, y - height * 0.85, '#FFA500', 'left');
                    this.addLabel('Stalk', x + width * 0.4, y - height * 0.5, '#90EE90', 'left');
                    this.addLabel('Epidermal Cell', x + width * 0.4, y, '#98FB98', 'left');
                } else {
                    this.addLabel('Non-Glandular Hair', x + width * 0.4, y - height * 0.7, '#90EE90', 'left');
                }
            }
        }

        // Function note
        this.ctx.font = '11px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Functions: Protection, secretion, reducing water loss', x, y + height * 0.35);
    }

    renderVascularBundleDiagram(x, y, width, height, options) {
        const { showLabels = true, arrangement = 'dicot' } = options;

        PlantBiologyShapes.drawVascularBundle(this.ctx, x, y, width, height, arrangement);

        if(showLabels) {
            if(arrangement === 'dicot') {
                this.addLabel('Phloem\n(Sugar transport)', x - width * 0.8, y - height * 0.4, '#90EE90', 'left');
                this.addLabel('Cambium\n(Growth tissue)', x - width * 0.8, y, '#FFFF00', 'left');
                this.addLabel('Xylem\n(Water transport)', x - width * 0.8, y + height * 0.4, '#8B4513', 'left');
                this.addLabel('Bundle Sheath', x + width * 0.6, y, '#8B4513', 'left');
            } else {
                this.addLabel('Phloem', x - width * 0.7, y, '#90EE90', 'left');
                this.addLabel('Xylem', x + width * 0.6, y, '#8B4513', 'left');
                this.addLabel('No Cambium\n(Monocot)', x, y + height * 0.6, '#7F8C8D');
            }
        }
    }

    // ========== PLANT REPRODUCTION RENDERERS ==========

    renderOvuleDiagram(x, y, width, height, options) {
        const { showLabels = true } = options;

        PlantBiologyShapes.drawOvule(this.ctx, x, y, width, height);

        if(showLabels) {
            this.addLabel('Micropyle', x - width * 0.6, y - height * 0.45, '#000000', 'left');
            this.addLabel('Integuments', x - width * 0.65, y - height * 0.2, '#CD853F', 'left');
            this.addLabel('Nucellus', x - width * 0.65, y, '#D2691E', 'left');
            this.addLabel('Embryo Sac', x + width * 0.55, y - height * 0.15, '#FF69B4', 'left');
            this.addLabel('Egg Cell', x + width * 0.55, y - height * 0.05, '#FF1493', 'left');
            this.addLabel('Central Cell', x + width * 0.55, y + height * 0.1, '#DDA0DD', 'left');
            this.addLabel('Antipodal Cells', x + width * 0.55, y + height * 0.25, '#F0E68C', 'left');
            this.addLabel('Funiculus', x + width * 0.55, y + height * 0.7, '#90EE90', 'left');
        }
    }

    renderPollenGrainDiagram(x, y, width, height, options) {
        const { showLabels = true, showGermination = false } = options;

        const size = Math.min(width, height) * 0.35;
        PlantBiologyShapes.drawPollenGrain(this.ctx, x, y, size, showGermination);

        if(showLabels) {
            this.addLabel('Exine\n(Outer Wall)', x - width * 0.5, y - height * 0.2, '#FFD700', 'left');
            this.addLabel('Spines', x - width * 0.5, y, '#FFD700', 'left');
            this.addLabel('Generative Cell', x + width * 0.4, y - height * 0.1, '#FF69B4', 'left');
            this.addLabel('Vegetative Cell', x + width * 0.4, y + height * 0.05, '#DDA0DD', 'left');
            this.addLabel('Germination Pore', x + width * 0.4, y + height * 0.2, '#FFA500', 'left');

            if(showGermination) {
                this.addLabel('Pollen Tube', x + width * 0.4, y + height * 0.4, '#90EE90', 'left');
                this.addLabel('Sperm Cells', x + width * 0.4, y + height * 0.5, '#FF1493', 'left');
            }
        }
    }

    renderSeedStructureDiagram(x, y, width, height, options) {
        const { showLabels = true, type = 'dicot' } = options;

        const seedWidth = width * 0.5;
        const seedHeight = height * 0.4;
        PlantBiologyShapes.drawSeed(this.ctx, x, y, seedWidth, seedHeight, type, true);

        if(showLabels) {
            this.addLabel('Seed Coat', x - width * 0.5, y - height * 0.25, '#8B4513', 'left');
            this.addLabel('Hilum\n(Scar)', x + width * 0.4, y, '#654321', 'left');
            
            if(type === 'dicot') {
                this.addLabel('Cotyledons (2)\n(Seed Leaves)', x - width * 0.5, y + height * 0.05, '#FFE4B5', 'left');
            } else {
                this.addLabel('Cotyledon (1)\n(Seed Leaf)', x - width * 0.5, y + height * 0.05, '#FFE4B5', 'left');
            }
            
            this.addLabel('Radicle\n(Embryonic Root)', x + width * 0.4, y + height * 0.25, '#A0522D', 'left');
            this.addLabel('Plumule\n(Embryonic Shoot)', x + width * 0.4, y - height * 0.4, '#90EE90', 'left');
        }
    }

    renderFruitTypesDiagram(x, y, width, height, options) {
        const { showLabels = true } = options;

        PlantBiologyShapes.drawFruitTypes(this.ctx, x, y, width, height);

        if(showLabels) {
            // Additional classification info
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            
            this.ctx.fillText('Fleshy pericarp', x - width * 0.375, y + height * 0.42);
            this.ctx.fillText('Multiple seeds', x - width * 0.375, y + height * 0.45);
            
            this.ctx.fillText('Fleshy mesocarp', x - width * 0.125, y + height * 0.42);
            this.ctx.fillText('Single hard seed', x - width * 0.125, y + height * 0.45);
            
            this.ctx.fillText('Core with seeds', x + width * 0.125, y + height * 0.42);
            this.ctx.fillText('Fleshy hypanthium', x + width * 0.125, y + height * 0.45);
            
            this.ctx.fillText('Dry dehiscent', x + width * 0.375, y + height * 0.42);
            this.ctx.fillText('Multiple seeds', x + width * 0.375, y + height * 0.45);
        }
    }

    // ========== PLANT TISSUES RENDERERS ==========

    renderMeristemDiagram(x, y, width, height, options) {
        const { showLabels = true, type = 'apical' } = options;

        PlantBiologyShapes.drawMeristem(this.ctx, x, y, width, height, type);

        if(showLabels) {
            if(type === 'apical') {
                this.addLabel('Apical Meristem\n(Shoot Tip)', x, y - height * 0.5, '#2C3E50');
                this.addLabel('Dividing Cells', x - width * 0.5, y, '#FF69B4', 'left');
                this.addLabel('Leaf Primordia', x + width * 0.5, y - height * 0.2, '#90EE90', 'left');
            } else if(type === 'lateral') {
                this.addLabel('Lateral Meristem\n(Cambium)', x, y - height * 0.6, '#2C3E50');
                this.addLabel('Vascular Cambium', x - width * 0.6, y, '#FFFF00', 'left');
                this.addLabel('Secondary Xylem\n(Wood)', x, y, '#8B4513');
                this.addLabel('Secondary Phloem', x + width * 0.55, y, '#90EE90', 'left');
            }
        }

        // Function note
        this.ctx.font = '11px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        if(type === 'apical') {
            this.ctx.fillText('Primary growth: increases length', x, y + height * 0.55);
        } else {
            this.ctx.fillText('Secondary growth: increases girth', x, y + height * 0.55);
        }
    }

    renderParenchymaDiagram(x, y, width, height, options) {
        const { showLabels = true } = options;

        // Draw parenchyma tissue
        this.ctx.save();
        this.ctx.translate(x, y);

        // Multiple parenchyma cells
        const cellSize = width * 0.15;
        const cells = [
            [-width * 0.25, -height * 0.2],
            [0, -height * 0.2],
            [width * 0.25, -height * 0.2],
            [-width * 0.25, height * 0.1],
            [0, height * 0.1],
            [width * 0.25, height * 0.1]
        ];

        cells.forEach(([cx, cy]) => {
            // Cell wall
            this.ctx.strokeStyle = '#228B22';
            this.ctx.fillStyle = '#F0FFF0';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.rect(cx - cellSize/2, cy - cellSize/2, cellSize, cellSize);
            this.ctx.fill();
            this.ctx.stroke();

            // Nucleus
            this.ctx.fillStyle = '#DDA0DD';
            this.ctx.beginPath();
            this.ctx.arc(cx, cy, cellSize * 0.15, 0, Math.PI * 2);
            this.ctx.fill();

            // Chloroplasts
            this.ctx.fillStyle = '#90EE90';
            for(let i = 0; i < 3; i++) {
                const angle = (i / 3) * Math.PI * 2;
                const px = cx + Math.cos(angle) * cellSize * 0.25;
                const py = cy + Math.sin(angle) * cellSize * 0.25;
                this.ctx.beginPath();
                this.ctx.arc(px, py, cellSize * 0.08, 0, Math.PI * 2);
                this.ctx.fill();
            }

            // Vacuole
            this.ctx.strokeStyle = '#4682B4';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.arc(cx, cy, cellSize * 0.3, 0, Math.PI * 2);
            this.ctx.stroke();
        });

        // Intercellular spaces
        this.ctx.fillStyle = 'rgba(173, 216, 230, 0.3)';
        this.ctx.fillRect(-width * 0.1, -height * 0.05, cellSize * 0.8, cellSize * 0.8);

        this.ctx.restore();

        if(showLabels) {
            this.addLabel('Thin Cell Walls', x - width * 0.5, y - height * 0.25, '#228B22', 'left');
            this.addLabel('Large Vacuole', x - width * 0.5, y - height * 0.15, '#4682B4', 'left');
            this.addLabel('Chloroplasts\n(in some)', x + width * 0.45, y - height * 0.15, '#90EE90', 'left');
            this.addLabel('Intercellular\nSpaces', x + width * 0.45, y + height * 0.1, '#87CEEB', 'left');
        }

        // Function note
        this.ctx.font = '11px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Functions: Photosynthesis, storage, gas exchange', x, y + height * 0.45);
    }

    // ========== ADAPTATIONS RENDERERS ==========

    renderCactusAdaptationDiagram(x, y, width, height, options) {
        const { showLabels = true } = options;

        PlantBiologyShapes.drawCactus(this.ctx, x, y, width, height);

        if(showLabels) {
            this.addLabel('Spines\n(Modified Leaves)', x - width * 0.5, y - height * 0.3, '#F5DEB3', 'left');
            this.addLabel('Thick Cuticle', x + width * 0.35, y - height * 0.4, '#2E8B57', 'left');
            this.addLabel('Water Storage\nTissue', x + width * 0.35, y, '#3CB371', 'left');
            this.addLabel('Shallow Roots', x + width * 0.35, y + height * 0.45, '#8B4513', 'left');
            this.addLabel('Ribbed Surface', x - width * 0.5, y + height * 0.1, '#006400', 'left');

            // Adaptations list
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Desert Adaptations:', x - width * 0.45, y - height * 0.55);
            
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('• CAM photosynthesis (night CO₂ uptake)', x - width * 0.45, y - height * 0.5);
            this.ctx.fillText('• Reduced leaf surface (less water loss)', x - width * 0.45, y - height * 0.47);
            this.ctx.fillText('• Succulent stem stores water', x - width * 0.45, y - height * 0.44);
        }
    }

    renderCarnivorousPlantDiagram(x, y, width, height, options) {
        const { showLabels = true, type = 'venus-flytrap' } = options;

        if(type === 'venus-flytrap') {
            PlantBiologyShapes.drawVenusFlytrap(this.ctx, x, y, width, height);

            if(showLabels) {
                this.addLabel('Trigger Hairs\n(Sensitive)', x - width * 0.5, y - height * 0.15, '#FF69B4', 'left');
                this.addLabel('Trap Lobes', x - width * 0.5, y - height * 0.05, '#32CD32', 'left');
                this.addLabel('Marginal Teeth\n(Interlock)', x + width * 0.35, y - height * 0.2, '#006400', 'left');
                this.addLabel('Digestive Glands', x + width * 0.35, y - height * 0.05, '#8B0000', 'left');
                this.addLabel('Petiole', x + width * 0.35, y + height * 0.2, '#228B22', 'left');

                // Mechanism explanation
                this.ctx.font = 'bold 12px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'left';
                this.ctx.fillText('Trapping Mechanism:', x - width * 0.45, y + height * 0.35);
                
                this.ctx.font = '11px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.fillText('1. Insect touches trigger hairs (2x in 20 sec)', x - width * 0.45, y + height * 0.4);
                this.ctx.fillText('2. Trap snaps shut in 0.1 seconds', x - width * 0.45, y + height * 0.43);
                this.ctx.fillText('3. Digestive enzymes break down prey', x - width * 0.45, y + height * 0.46);
                this.ctx.fillText('4. Absorbs nitrogen and nutrients', x - width * 0.45, y + height * 0.49);
            }
        }
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

    addLabel(text, x, y, color = '#2C3E50', align = 'center') {
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = color;
        this.ctx.textAlign = align;
        
        const lines = text.split('\n');
        lines.forEach((line, index) => {
            this.ctx.fillText(line, x, y + index * 15);
        });
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
        this.ctx.fillText('Error Rendering Diagram', x, y -10);
        this.ctx.font = '14px Arial';
        this.ctx.fillText(errorMessage, x, y + 15);
    }

    animate() {
        this.currentFrame++;
        requestAnimationFrame(() => this.animate());
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    saveAsPNG(filename = 'plant-biology-diagram.png') {
        const link = document.createElement('a');
        link.download = filename;
        link.href = this.canvas.toDataURL();
        link.click();
    }
}

export { PlantBiologyRegistry, PlantBiologyShapes, PlantBiologyRenderer };
