// ============================================================================
// EVOLUTION BIOLOGY DIAGRAMS REGISTRY - Comprehensive Evolution Configuration System
// ============================================================================

class EvolutionDiagramsRegistry {
    static diagrams = {
        // ===== 1. EVOLUTIONARY TREES & PHYLOGENY =====
        
        'phylogeneticTree': {
            name: 'Phylogenetic Tree',
            category: 'Evolutionary Trees & Phylogeny',
            description: 'Evolutionary relationships between species',
            dataRequired: [],
            usage: 'Best for showing evolutionary relationships',
            examples: ['Evolution', 'Species relationships', 'Common ancestors'],
            defaultOptions: {
                title: 'Phylogenetic Tree',
                treeType: 'cladogram', // 'cladogram', 'phylogram'
                showLabels: true,
                showTimeScale: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'treeOfLife': {
            name: 'Tree of Life',
            category: 'Evolutionary Trees & Phylogeny',
            description: 'Three domains of life evolutionary tree',
            dataRequired: [],
            usage: 'Best for showing all life domains',
            examples: ['Bacteria', 'Archaea', 'Eukarya', 'Life evolution'],
            defaultOptions: {
                title: 'Tree of Life',
                showLabels: true,
                showBranches: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'humanEvolution': {
            name: 'Human Evolution',
            category: 'Evolutionary Trees & Phylogeny',
            description: 'Human evolutionary lineage from primates',
            dataRequired: [],
            usage: 'Best for human evolution education',
            examples: ['Hominid evolution', 'Human ancestry', 'Primate evolution'],
            defaultOptions: {
                title: 'Human Evolution',
                showLabels: true,
                showTimeline: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 2. NATURAL SELECTION & ADAPTATION =====

        'naturalSelection': {
            name: 'Natural Selection',
            category: 'Natural Selection & Adaptation',
            description: 'Process of natural selection over generations',
            dataRequired: [],
            usage: 'Best for explaining natural selection',
            examples: ['Survival of the fittest', 'Selection pressure', 'Adaptation'],
            defaultOptions: {
                title: 'Natural Selection',
                showGenerations: 3,
                showLabels: true,
                traitType: 'color', // 'color', 'size', 'shape'
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pepperMothEvolution': {
            name: 'Peppered Moth Evolution',
            category: 'Natural Selection & Adaptation',
            description: 'Industrial melanism case study',
            dataRequired: [],
            usage: 'Best for natural selection example',
            examples: ['Industrial revolution', 'Camouflage', 'Selection'],
            defaultOptions: {
                title: 'Peppered Moth Evolution',
                showBefore: true,
                showAfter: true,
                showLabels: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'finchBeaks': {
            name: 'Darwin\'s Finches',
            category: 'Natural Selection & Adaptation',
            description: 'Adaptive radiation of finch beaks',
            dataRequired: [],
            usage: 'Best for adaptive radiation example',
            examples: ['Galapagos', 'Beak adaptation', 'Food sources'],
            defaultOptions: {
                title: 'Darwin\'s Finches - Beak Adaptation',
                showLabels: true,
                showFoodSources: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'adaptiveRadiation': {
            name: 'Adaptive Radiation',
            category: 'Natural Selection & Adaptation',
            description: 'Diversification from common ancestor',
            dataRequired: [],
            usage: 'Best for showing rapid speciation',
            examples: ['Island evolution', 'Niche filling', 'Speciation'],
            defaultOptions: {
                title: 'Adaptive Radiation',
                showLabels: true,
                showNiches: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 3. SPECIATION & MECHANISMS =====

        'allopatricSpeciation': {
            name: 'Allopatric Speciation',
            category: 'Speciation & Mechanisms',
            description: 'Speciation by geographic isolation',
            dataRequired: [],
            usage: 'Best for geographic speciation',
            examples: ['Geographic isolation', 'Barrier', 'New species'],
            defaultOptions: {
                title: 'Allopatric Speciation',
                showLabels: true,
                showBarrier: true,
                showTimeSteps: 4,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'sympatricSpeciation': {
            name: 'Sympatric Speciation',
            category: 'Speciation & Mechanisms',
            description: 'Speciation without geographic isolation',
            dataRequired: [],
            usage: 'Best for showing speciation in same location',
            examples: ['Polyploidy', 'Sexual selection', 'Resource partitioning'],
            defaultOptions: {
                title: 'Sympatric Speciation',
                showLabels: true,
                mechanism: 'polyploidy', // 'polyploidy', 'sexual_selection', 'resource'
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'speciationModes': {
            name: 'Modes of Speciation',
            category: 'Speciation & Mechanisms',
            description: 'Comparison of speciation types',
            dataRequired: [],
            usage: 'Best for comparing speciation mechanisms',
            examples: ['Allopatric', 'Sympatric', 'Parapatric', 'Peripatric'],
            defaultOptions: {
                title: 'Modes of Speciation',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 4. GENETIC VARIATION & DRIFT =====

        'geneticDrift': {
            name: 'Genetic Drift',
            category: 'Genetic Variation & Drift',
            description: 'Random changes in allele frequencies',
            dataRequired: [],
            usage: 'Best for showing random evolution',
            examples: ['Small populations', 'Random sampling', 'Allele frequency'],
            defaultOptions: {
                title: 'Genetic Drift',
                showLabels: true,
                generations: 5,
                populationSize: 'small', // 'small', 'large'
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bottleneckEffect': {
            name: 'Bottleneck Effect',
            category: 'Genetic Variation & Drift',
            description: 'Population size reduction and genetic loss',
            dataRequired: [],
            usage: 'Best for showing genetic drift in disasters',
            examples: ['Population crash', 'Genetic diversity loss', 'Founder effect'],
            defaultOptions: {
                title: 'Bottleneck Effect',
                showLabels: true,
                showDiversity: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'founderEffect': {
            name: 'Founder Effect',
            category: 'Genetic Variation & Drift',
            description: 'New population from small group',
            dataRequired: [],
            usage: 'Best for colonization events',
            examples: ['Island colonization', 'New population', 'Genetic drift'],
            defaultOptions: {
                title: 'Founder Effect',
                showLabels: true,
                showMigration: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'geneFlow': {
            name: 'Gene Flow',
            category: 'Genetic Variation & Drift',
            description: 'Movement of genes between populations',
            dataRequired: [],
            usage: 'Best for showing population mixing',
            examples: ['Migration', 'Interbreeding', 'Allele transfer'],
            defaultOptions: {
                title: 'Gene Flow',
                showLabels: true,
                showDirection: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 5. EVOLUTIONARY EVIDENCE =====

        'fossilRecord': {
            name: 'Fossil Record',
            category: 'Evolutionary Evidence',
            description: 'Geological strata and fossil progression',
            dataRequired: [],
            usage: 'Best for showing fossil evidence',
            examples: ['Paleontology', 'Geological time', 'Extinct species'],
            defaultOptions: {
                title: 'Fossil Record',
                showLabels: true,
                showLayers: true,
                showTimeScale: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'transitionalFossils': {
            name: 'Transitional Fossils',
            category: 'Evolutionary Evidence',
            description: 'Intermediate forms between species',
            dataRequired: [],
            usage: 'Best for showing evolutionary transitions',
            examples: ['Archaeopteryx', 'Tiktaalik', 'Whale evolution'],
            defaultOptions: {
                title: 'Transitional Fossils',
                example: 'archaeopteryx', // 'archaeopteryx', 'tiktaalik', 'whale'
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'homologousStructures': {
            name: 'Homologous Structures',
            category: 'Evolutionary Evidence',
            description: 'Similar structures, different functions',
            dataRequired: [],
            usage: 'Best for comparative anatomy',
            examples: ['Vertebrate limbs', 'Common ancestry', 'Divergent evolution'],
            defaultOptions: {
                title: 'Homologous Structures',
                showLabels: true,
                structureType: 'limbs', // 'limbs', 'wings', 'skulls'
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'analogousStructures': {
            name: 'Analogous Structures',
            category: 'Evolutionary Evidence',
            description: 'Similar functions, different origins',
            dataRequired: [],
            usage: 'Best for convergent evolution',
            examples: ['Wings', 'Eyes', 'Streamlined bodies'],
            defaultOptions: {
                title: 'Analogous Structures',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vestigialStructures': {
            name: 'Vestigial Structures',
            category: 'Evolutionary Evidence',
            description: 'Reduced or functionless structures',
            dataRequired: [],
            usage: 'Best for showing evolutionary remnants',
            examples: ['Human tailbone', 'Whale pelvis', 'Snake legs'],
            defaultOptions: {
                title: 'Vestigial Structures',
                showLabels: true,
                showComparison: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'embryologicalEvidence': {
            name: 'Embryological Evidence',
            category: 'Evolutionary Evidence',
            description: 'Similar early development in related species',
            dataRequired: [],
            usage: 'Best for developmental evolution',
            examples: ['Vertebrate embryos', 'Pharyngeal pouches', 'Development'],
            defaultOptions: {
                title: 'Embryological Evidence',
                showLabels: true,
                showStages: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'molecularEvidence': {
            name: 'Molecular Evidence',
            category: 'Evolutionary Evidence',
            description: 'DNA and protein similarities',
            dataRequired: [],
            usage: 'Best for genetic comparison',
            examples: ['DNA comparison', 'Protein sequences', 'Molecular clock'],
            defaultOptions: {
                title: 'Molecular Evidence',
                showLabels: true,
                compareType: 'dna', // 'dna', 'protein'
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 6. COEVOLUTION =====

        'coevolution': {
            name: 'Coevolution',
            category: 'Coevolution',
            description: 'Reciprocal evolutionary changes',
            dataRequired: [],
            usage: 'Best for showing species interactions',
            examples: ['Predator-prey', 'Pollination', 'Mutualism'],
            defaultOptions: {
                title: 'Coevolution',
                showLabels: true,
                interactionType: 'pollination', // 'pollination', 'predator_prey', 'parasite'
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pollinatorCoevolution': {
            name: 'Pollinator Coevolution',
            category: 'Coevolution',
            description: 'Plant-pollinator evolutionary relationship',
            dataRequired: [],
            usage: 'Best for mutualistic coevolution',
            examples: ['Flower shape', 'Pollinator behavior', 'Adaptation'],
            defaultOptions: {
                title: 'Pollinator Coevolution',
                showLabels: true,
                showAdaptations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 7. MACROEVOLUTION =====

        'punctuatedEquilibrium': {
            name: 'Punctuated Equilibrium',
            category: 'Macroevolution',
            description: 'Rapid evolution vs stasis',
            dataRequired: [],
            usage: 'Best for showing evolutionary tempo',
            examples: ['Rapid change', 'Stasis', 'Fossil gaps'],
            defaultOptions: {
                title: 'Punctuated Equilibrium vs Gradualism',
                showLabels: true,
                showComparison: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'massExtinction': {
            name: 'Mass Extinction Events',
            category: 'Macroevolution',
            description: 'Major extinction events through time',
            dataRequired: [],
            usage: 'Best for showing extinction patterns',
            examples: ['KT extinction', 'Permian extinction', 'Biodiversity'],
            defaultOptions: {
                title: 'Mass Extinction Events',
                showLabels: true,
                showTimeline: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'convergentEvolution': {
            name: 'Convergent Evolution',
            category: 'Macroevolution',
            description: 'Similar traits in unrelated species',
            dataRequired: [],
            usage: 'Best for showing similar adaptations',
            examples: ['Wings', 'Streamlining', 'Echolocation'],
            defaultOptions: {
                title: 'Convergent Evolution',
                showLabels: true,
                example: 'flight', // 'flight', 'streamlining', 'eyes'
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'divergentEvolution': {
            name: 'Divergent Evolution',
            category: 'Macroevolution',
            description: 'Different traits from common ancestor',
            dataRequired: [],
            usage: 'Best for showing diversification',
            examples: ['Mammal diversification', 'Adaptive radiation'],
            defaultOptions: {
                title: 'Divergent Evolution',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 8. GEOLOGICAL TIME =====

        'geologicalTimeScale': {
            name: 'Geological Time Scale',
            category: 'Geological Time',
            description: 'Earth history timeline',
            dataRequired: [],
            usage: 'Best for showing Earth history',
            examples: ['Eras', 'Periods', 'Major events'],
            defaultOptions: {
                title: 'Geological Time Scale',
                showLabels: true,
                showEvents: true,
                orientation: 'vertical', // 'vertical', 'horizontal'
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'evolutionTimeline': {
            name: 'Evolution Timeline',
            category: 'Geological Time',
            description: 'Major evolutionary milestones',
            dataRequired: [],
            usage: 'Best for evolutionary history',
            examples: ['First life', 'Cambrian explosion', 'Human evolution'],
            defaultOptions: {
                title: 'Evolution Timeline',
                showLabels: true,
                showMilestones: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 9. POPULATION GENETICS =====

        'hardyWeinberg': {
            name: 'Hardy-Weinberg Equilibrium',
            category: 'Population Genetics',
            description: 'Allele frequency stability',
            dataRequired: [],
            usage: 'Best for population genetics',
            examples: ['Allele frequency', 'Genetic equilibrium', 'Evolution factors'],
            defaultOptions: {
                title: 'Hardy-Weinberg Equilibrium',
                showLabels: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'alleleFrequencyChange': {
            name: 'Allele Frequency Change',
            category: 'Population Genetics',
            description: 'Changes in allele frequencies over time',
            dataRequired: [],
            usage: 'Best for showing evolutionary change',
            examples: ['Selection', 'Drift', 'Mutation'],
            defaultOptions: {
                title: 'Allele Frequency Change',
                showLabels: true,
                showGraph: true,
                generations: 10,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 10. SEXUAL SELECTION =====

        'sexualSelection': {
            name: 'Sexual Selection',
            category: 'Sexual Selection',
            description: 'Traits favored for mating success',
            dataRequired: [],
            usage: 'Best for showing mate choice evolution',
            examples: ['Peacock tail', 'Antlers', 'Bright colors'],
            defaultOptions: {
                title: 'Sexual Selection',
                showLabels: true,
                selectionType: 'intersexual', // 'intersexual', 'intrasexual'
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
        console.log('=== EVOLUTION BIOLOGY DIAGRAMS REGISTRY SUMMARY ===');
        console.log(`Total Diagrams: ${this.getTotalDiagramCount()}`);
        console.log('\nBy Category:');
        const stats = this.getDiagramStats();
        Object.entries(stats).forEach(([category, data]) => {
            console.log(`  ${category}: ${data.count} diagrams`);
        });
    }
}

// ============================================================================
// EVOLUTION SHAPES LIBRARY
// ============================================================================

class EvolutionShapes {
    
    // ===== PHYLOGENETIC TREE SHAPES =====
    
    static drawPhylogeneticTree(ctx, x, y, width, height, type = 'cladogram') {
        ctx.save();
        ctx.translate(x, y);
        
        const species = [
            { name: 'Species A', x: 0.1, color: '#E74C3C' },
            { name: 'Species B', x: 0.3, color: '#3498DB' },
            { name: 'Species C', x: 0.5, color: '#2ECC71' },
            { name: 'Species D', x: 0.7, color: '#F39C12' },
            { name: 'Species E', x: 0.9, color: '#9B59B6' }
        ];
        
        // Draw branches
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 3;
        
        // Main trunk
        ctx.beginPath();
        ctx.moveTo(width * 0.05, height * 0.95);
        ctx.lineTo(width * 0.05, height * 0.5);
        ctx.stroke();
        
        // First split
        ctx.beginPath();
        ctx.moveTo(width * 0.05, height * 0.5);
        ctx.lineTo(width * 0.15, height * 0.3);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(width * 0.05, height * 0.5);
        ctx.lineTo(width * 0.5, height * 0.4);
        ctx.stroke();
        
        // Terminal branches
        species.forEach(sp => {
            ctx.strokeStyle = sp.color;
            ctx.lineWidth = 2;
            
            const startY = height * 0.4;
            const endX = width * sp.x;
            const endY = height * 0.05;
            
            ctx.beginPath();
            ctx.moveTo(width * 0.5, startY);
            ctx.lineTo(endX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
            
            // Terminal node
            ctx.fillStyle = sp.color;
            ctx.beginPath();
            ctx.arc(endX, endY, 6, 0, Math.PI * 2);
            ctx.fill();
        });
        
        // Nodes (common ancestors)
        ctx.fillStyle = '#34495E';
        const nodes = [
            [0.05, 0.95], [0.05, 0.5], [0.15, 0.3], [0.5, 0.4]
        ];
        
        nodes.forEach(([nx, ny]) => {
            ctx.beginPath();
            ctx.arc(width * nx, height * ny, 5, 0, Math.PI * 2);
            ctx.fill();
        });
        
        ctx.restore();
    }
    
    static drawTreeOfLife(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        const centerX = width * 0.5;
        const centerY = height * 0.9;
        
        // Trunk
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX, height * 0.6);
        ctx.stroke();
        
        // Three main branches (domains)
        const domains = [
            { name: 'Bacteria', angle: -0.7, color: '#E74C3C', x: 0.2, y: 0.15 },
            { name: 'Archaea', angle: 0, color: '#F39C12', x: 0.5, y: 0.05 },
            { name: 'Eukarya', angle: 0.7, color: '#3498DB', x: 0.8, y: 0.15 }
        ];
        
        domains.forEach(domain => {
            ctx.strokeStyle = domain.color;
            ctx.lineWidth = 15;
            
            ctx.beginPath();
            ctx.moveTo(centerX, height * 0.6);
            ctx.quadraticCurveTo(
                centerX + Math.sin(domain.angle) * width * 0.2,
                height * 0.4,
                width * domain.x,
                height * domain.y
            );
            ctx.stroke();
            
            // Sub-branches
            for(let i = 0; i < 5; i++) {
                ctx.lineWidth = 3;
                const subAngle = domain.angle + (Math.random() - 0.5) * 0.4;
                const subLength = 50 + Math.random() * 50;
                
                ctx.beginPath();
                ctx.moveTo(width * domain.x, height * domain.y);
                ctx.lineTo(
                    width * domain.x + Math.sin(subAngle) * subLength,
                    height * domain.y - Math.cos(subAngle) * subLength
                );
                ctx.stroke();
            }
        });
        
        // LUCA (Last Universal Common Ancestor)
        ctx.fillStyle = '#2C3E50';
        ctx.beginPath();
        ctx.arc(centerX, height * 0.6, 10, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
    }
    
    static drawHumanEvolutionSequence(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        const stages = [
            { name: 'Australopithecus', posture: 0.3, height: 0.6, color: '#8B4513' },
            { name: 'Homo habilis', posture: 0.5, height: 0.65, color: '#A0522D' },
            { name: 'Homo erectus', posture: 0.7, height: 0.75, color: '#CD853F' },
            { name: 'Homo neanderthalensis', posture: 0.85, height: 0.85, color: '#DEB887' },
            { name: 'Homo sapiens', posture: 1.0, height: 0.9, color: '#F5DEB3' }
        ];
        
        const spacing = width / (stages.length + 1);
        
        stages.forEach((stage, i) => {
            const stageX = spacing * (i + 1);
            const stageHeight = height * stage.height;
            const headSize = 20;
            
            // Body
            ctx.fillStyle = stage.color;
            ctx.strokeStyle = '#654321';
            ctx.lineWidth = 2;
            
            // Head
            ctx.beginPath();
            ctx.arc(stageX, height * 0.9 - stageHeight, headSize, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Spine/body
            const spineAngle = (1 - stage.posture) * Math.PI / 6;
            const bodyLength = stageHeight * 0.6;
            
            ctx.beginPath();
            ctx.moveTo(stageX, height * 0.9 - stageHeight + headSize);
            ctx.lineTo(
                stageX + Math.sin(spineAngle) * bodyLength,
                height * 0.9 - stageHeight + headSize + Math.cos(spineAngle) * bodyLength
            );
            ctx.stroke();
            
            // Arms
            const armLength = bodyLength * 0.5;
            ctx.beginPath();
            ctx.moveTo(stageX, height * 0.9 - stageHeight + headSize + 20);
            ctx.lineTo(
                stageX + Math.sin(spineAngle - 0.3) * armLength,
                height * 0.9 - stageHeight + headSize + 20 + Math.cos(spineAngle - 0.3) * armLength
            );
            ctx.stroke();
            
            // Legs
            const legLength = stageHeight * 0.4;
            const legX = stageX + Math.sin(spineAngle) * bodyLength;
            const legY = height * 0.9 - stageHeight + headSize + Math.cos(spineAngle) * bodyLength;
            
            ctx.beginPath();
            ctx.moveTo(legX, legY);
            ctx.lineTo(legX, height * 0.9);
            ctx.stroke();
        });
        
        ctx.restore();
    }
    
    // ===== NATURAL SELECTION SHAPES =====
    
    static drawNaturalSelectionSequence(ctx, x, y, width, height, generation = 0) {
        ctx.save();
        ctx.translate(x, y);
        
        const colors = ['#3498DB', '#E74C3C', '#2ECC71', '#F39C12'];
        const survivalRates = [0.3, 0.8, 0.5, 0.4]; // Blue survives best
        
        const individuals = 20;
        const spacing = width / individuals;
        
        for(let i = 0; i < individuals; i++) {
            const colorIndex = Math.floor(Math.random() * colors.length);
            const survivalChance = survivalRates[colorIndex];
            
            // Apply selection pressure over generations
            if(Math.random() < survivalChance || generation === 0) {
                ctx.fillStyle = colors[colorIndex];
                const organismX = spacing * (i + 0.5);
                const organismY = height * 0.5;
                
                // Draw organism (simplified bird/moth)
                ctx.beginPath();
                ctx.arc(organismX, organismY, 15, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.strokeStyle = '#2C3E50';
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
        
        ctx.restore();
    }
    
    static drawPepperedMoths(ctx, x, y, width, height, environment = 'light') {
        ctx.save();
        ctx.translate(x, y);
        
        // Background tree bark
        if(environment === 'light') {
            ctx.fillStyle = '#D3D3D3';
        } else {
            ctx.fillStyle = '#2C3E50';
        }
        
        ctx.fillRect(0, 0, width, height);
        
        // Bark texture
        ctx.strokeStyle = environment === 'light' ? '#A9A9A9' : '#1C1C1C';
        ctx.lineWidth = 2;
        for(let i = 0; i < 20; i++) {
            ctx.beginPath();
            ctx.moveTo(Math.random() * width, Math.random() * height);
            ctx.lineTo(Math.random() * width, Math.random() * height);
            ctx.stroke();
        }
        
        // Moths
        const mothCount = 10;
        const lightMothRatio = environment === 'light' ? 0.7 : 0.3;
        
        for(let i = 0; i < mothCount; i++) {
            const isLight = Math.random() < lightMothRatio;
            const mothX = Math.random() * width * 0.8 + width * 0.1;
            const mothY = Math.random() * height * 0.8 + height * 0.1;
            
            this.drawMoth(ctx, mothX, mothY, 25, isLight);
        }
        
        ctx.restore();
    }
    
    static drawMoth(ctx, x, y, size, isLight) {
        // Body
        ctx.fillStyle = isLight ? '#F5F5F5' : '#1C1C1C';
        ctx.beginPath();
        ctx.ellipse(x, y, size * 0.3, size * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Wings
        ctx.beginPath();
        ctx.ellipse(x - size * 0.4, y, size * 0.6, size * 0.4, -0.3, 0, Math.PI * 2);
        ctx.ellipse(x + size * 0.4, y, size * 0.6, size * 0.4, 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        // Wing patterns (spots)
        if(isLight) {
            ctx.fillStyle = '#D3D3D3';
        } else {
            ctx.fillStyle = '#000000';
        }
        
        for(let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.arc(x - size * 0.4 + i * 5, y, 2, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(x + size * 0.4 - i * 5, y, 2, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Outline
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(x - size * 0.4, y, size * 0.6, size * 0.4, -0.3, 0, Math.PI * 2);
        ctx.ellipse(x + size * 0.4, y, size * 0.6, size * 0.4, 0.3, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    static drawFinchBeaks(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        const beakTypes = [
            { name: 'Seed-eating', beakShape: 'thick', food: 'seeds', color: '#8B4513' },
            { name: 'Insect-eating', beakShape: 'thin', food: 'insects', color: '#A0522D' },
            { name: 'Cactus-eating', beakShape: 'long', food: 'cactus', color: '#CD853F' },
            { name: 'Grub-eating', beakShape: 'curved', food: 'grubs', color: '#DEB887' }
        ];
        
        const spacing = width / beakTypes.length;
        
        beakTypes.forEach((type, i) => {
            const finchX = spacing * (i + 0.5);
            const finchY = height * 0.3;
            
            // Finch head
            ctx.fillStyle = '#654321';
            ctx.beginPath();
            ctx.arc(finchX, finchY, 30, 0, Math.PI * 2);
            ctx.fill();
            
            // Eye
            ctx.fillStyle = '#000000';
            ctx.beginPath();
            ctx.arc(finchX + 10, finchY - 5, 4, 0, Math.PI * 2);
            ctx.fill();
            
            // Beak based on type
            ctx.fillStyle = type.color;
            ctx.beginPath();
            
            switch(type.beakShape) {
                case 'thick':
                    // Short, thick beak
                    ctx.moveTo(finchX + 30, finchY);
                    ctx.lineTo(finchX + 50, finchY - 5);
                    ctx.lineTo(finchX + 50, finchY + 5);
                    ctx.closePath();
                    break;
                case 'thin':
                    // Long, thin beak
                    ctx.moveTo(finchX + 30, finchY);
                    ctx.lineTo(finchX + 60, finchY - 2);
                    ctx.lineTo(finchX + 60, finchY + 2);
                    ctx.closePath();
                    break;
                case 'long':
                    // Very long, pointed beak
                    ctx.moveTo(finchX + 30, finchY);
                    ctx.lineTo(finchX + 70, finchY);
                    ctx.lineTo(finchX + 30, finchY + 5);
                    ctx.closePath();
                    break;
                case 'curved':
                    // Curved beak
                    ctx.moveTo(finchX + 30, finchY);
                    ctx.quadraticCurveTo(finchX + 50, finchY - 15, finchX + 55, finchY - 5);
                    ctx.lineTo(finchX + 52, finchY);
                    ctx.closePath();
                    break;
            }
            
            ctx.fill();
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Food source
            const foodY = height * 0.7;
            this.drawFoodSource(ctx, finchX, foodY, type.food);
        });
        
        ctx.restore();
    }
    
    static drawFoodSource(ctx, x, y, foodType) {
        ctx.save();
        
        switch(foodType) {
            case 'seeds':
                ctx.fillStyle = '#F39C12';
                for(let i = 0; i < 5; i++) {
                    ctx.beginPath();
                    ctx.arc(x + (i - 2) * 8, y, 4, 0, Math.PI * 2);
                    ctx.fill();
                }
                break;
            case 'insects':
                ctx.fillStyle = '#2ECC71';
                ctx.beginPath();
                ctx.ellipse(x, y, 6, 10, 0, 0, Math.PI * 2);
                ctx.fill();
                // Legs
                ctx.strokeStyle = '#27AE60';
                ctx.lineWidth = 1;
                for(let i = 0; i < 3; i++) {
                    ctx.beginPath();
                    ctx.moveTo(x - 6, y - 5 + i * 5);
                    ctx.lineTo(x - 12, y - 5 + i * 5);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(x + 6, y - 5 + i * 5);
                    ctx.lineTo(x + 12, y - 5 + i * 5);
                    ctx.stroke();
                }
                break;
            case 'cactus':
                ctx.fillStyle = '#2ECC71';
                ctx.fillRect(x - 5, y - 20, 10, 25);
                ctx.fillRect(x - 12, y - 10, 7, 10);
                ctx.fillRect(x + 5, y - 5, 7, 10);
                // Spines
                ctx.strokeStyle = '#27AE60';
                ctx.lineWidth = 1;
                for(let i = 0; i < 8; i++) {
                    ctx.beginPath();
                    ctx.moveTo(x - 5, y - 18 + i * 3);
                    ctx.lineTo(x - 8, y - 18 + i * 3);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(x + 5, y - 18 + i * 3);
                    ctx.lineTo(x + 8, y - 18 + i * 3);
                    ctx.stroke();
                }
                break;
            case 'grubs':
                ctx.strokeStyle = '#E8E8E8';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(x - 10, y);
                ctx.quadraticCurveTo(x - 5, y - 8, x, y - 5);
                ctx.quadraticCurveTo(x + 5, y - 2, x + 10, y);
                ctx.stroke();
                break;
        }
        
        ctx.restore();
    }
    
    // ===== SPECIATION SHAPES =====
    
    static drawAllopatricSpeciation(ctx, x, y, width, height, stage = 0) {
        ctx.save();
        ctx.translate(x, y);
        
        const stageHeight = height / 4;
        
        // Stage 0: Original population
        if(stage >= 0) {
            ctx.fillStyle = '#3498DB';
            for(let i = 0; i < 20; i++) {
                const orgX = width * 0.3 + Math.random() * width * 0.4;
                const orgY = stageHeight * 0.5 + Math.random() * 30;
                ctx.beginPath();
                ctx.arc(orgX, orgY, 5, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        // Stage 1: Geographic barrier appears
        if(stage >= 1) {
            // Barrier (mountain or river)
            ctx.fillStyle = '#95A5A6';
            ctx.fillRect(width * 0.48, stageHeight * 1.2, width * 0.04, stageHeight * 0.6);
            
            // Populations separated
            ctx.fillStyle = '#3498DB';
            for(let i = 0; i < 10; i++) {
                const orgX = width * 0.2 + Math.random() * width * 0.2;
                const orgY = stageHeight * 1.5 + Math.random() * 30;
                ctx.beginPath();
                ctx.arc(orgX, orgY, 5, 0, Math.PI * 2);
                ctx.fill();
            }
            
            for(let i = 0; i < 10; i++) {
                const orgX = width * 0.6 + Math.random() * width * 0.2;
                const orgY = stageHeight * 1.5 + Math.random() * 30;
                ctx.beginPath();
                ctx.arc(orgX, orgY, 5, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        // Stage 2: Populations diverge
        if(stage >= 2) {
            ctx.fillStyle = '#3498DB';
            for(let i = 0; i < 10; i++) {
                const orgX = width * 0.2 + Math.random() * width * 0.2;
                const orgY = stageHeight * 2.5 + Math.random() * 30;
                ctx.beginPath();
                ctx.arc(orgX, orgY, 5, 0, Math.PI * 2);
                ctx.fill();
            }
            
            ctx.fillStyle = '#E74C3C';
            for(let i = 0; i < 10; i++) {
                const orgX = width * 0.6 + Math.random() * width * 0.2;
                const orgY = stageHeight * 2.5 + Math.random() * 30;
                ctx.beginPath();
                ctx.arc(orgX, orgY, 5, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        // Stage 3: Two distinct species
        if(stage >= 3) {
            ctx.fillStyle = '#3498DB';
            for(let i = 0; i < 10; i++) {
                const orgX = width * 0.2 + Math.random() * width * 0.2;
                const orgY = stageHeight * 3.5 + Math.random() * 30;
                ctx.beginPath();
                ctx.arc(orgX, orgY, 6, 0, Math.PI * 2);
                ctx.fill();
            }
            
            ctx.fillStyle = '#E74C3C';
            for(let i = 0; i < 10; i++) {
                const orgX = width * 0.6 + Math.random() * width * 0.2;
                const orgY = stageHeight * 3.5 + Math.random() * 30;
                ctx.beginPath();
                ctx.arc(orgX, orgY, 6, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        ctx.restore();
    }
    
    static drawGeneticDrift(ctx, x, y, width, height, generation = 0) {
        ctx.save();
        ctx.translate(x, y);
        
        const populationSize = 20;
        let redCount = 10;
        let blueCount = 10;
        
        // Simulate drift
        for(let g = 0; g < generation; g++) {
            const newRed = Math.floor(Math.random() * populationSize);
            redCount = newRed;
            blueCount = populationSize - newRed;
        }
        
        // Draw population
        for(let i = 0; i < populationSize; i++) {
            const isRed = i < redCount;
            ctx.fillStyle = isRed ? '#E74C3C' : '#3498DB';
            
            const row = Math.floor(i / 5);
            const col = i % 5;
            
            ctx.beginPath();
            ctx.arc(
                width * 0.2 + col * 40,
                height * 0.3 + row * 40,
                15,
                0,
                Math.PI * 2
            );
            ctx.fill();
            
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 1;
            ctx.stroke();
        }
        
        ctx.restore();
    }
    
    static drawBottleneckEffect(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Before bottleneck - diverse population
        ctx.font = 'bold 14px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('Before', width * 0.2, 20);
        
        const colors = ['#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#9B59B6'];
        
        for(let i = 0; i < 30; i++) {
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            const orgX = width * 0.1 + Math.random() * width * 0.2;
            const orgY = 40 + Math.random() * (height * 0.3);
            ctx.beginPath();
            ctx.arc(orgX, orgY, 5, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Bottleneck (narrow passage)
        ctx.fillStyle = '#95A5A6';
        ctx.beginPath();
        ctx.moveTo(width * 0.35, height * 0.2);
        ctx.lineTo(width * 0.45, height * 0.4);
        ctx.lineTo(width * 0.45, height * 0.6);
        ctx.lineTo(width * 0.35, height * 0.8);
        ctx.closePath();
        ctx.fill();
        
        // After bottleneck - reduced diversity
        ctx.fillStyle = '#2C3E50';
        ctx.fillText('After', width * 0.7, 20);
        
        const survivingColor = colors[0];
        for(let i = 0; i < 30; i++) {
            ctx.fillStyle = survivingColor;
            const orgX = width * 0.6 + Math.random() * width * 0.2;
            const orgY = 40 + Math.random() * (height * 0.3);
            ctx.beginPath();
            ctx.arc(orgX, orgY, 5, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.restore();
    }
    
    // ===== FOSSIL & EVIDENCE SHAPES =====
    
    static drawFossilLayers(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        const layers = [
            { name: 'Cenozoic', color: '#FFE4B5', age: '66 Mya', fossils: '🦴' },
            { name: 'Mesozoic', color: '#F4A460', age: '252 Mya', fossils: '🦕' },
            { name: 'Paleozoic', color: '#DEB887', age: '541 Mya', fossils: '🐚' },
            { name: 'Precambrian', color: '#BC8F8F', age: '4600 Mya', fossils: '🦠' }
        ];
        
        const layerHeight = height / layers.length;
        
        layers.forEach((layer, i) => {
            const layerY = i * layerHeight;
            
            // Layer
            ctx.fillStyle = layer.color;
            ctx.fillRect(0, layerY, width, layerHeight);
            
            // Layer lines
            ctx.strokeStyle = '#654321';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, layerY);
            ctx.lineTo(width, layerY);
            ctx.stroke();
            
            // Texture
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.lineWidth = 1;
            for(let j = 0; j < 10; j++) {
                ctx.beginPath();
                ctx.moveTo(Math.random() * width, layerY + Math.random() * layerHeight);
                ctx.lineTo(Math.random() * width, layerY + Math.random() * layerHeight);
                ctx.stroke();
            }
            
            // Fossils
            for(let f = 0; f < 3; f++) {
                const fossilX = width * (0.2 + f * 0.3);
                const fossilY = layerY + layerHeight * 0.5;
                this.drawFossil(ctx, fossilX, fossilY, 20);
            }
        });
        
        ctx.restore();
    }
    
    static drawFossil(ctx, x, y, size) {
        ctx.save();
        
        ctx.fillStyle = '#8B7355';
        ctx.strokeStyle = '#654321';
        ctx.lineWidth = 1;
        
        // Simple bone shape
        ctx.beginPath();
        ctx.arc(x - size * 0.3, y, size * 0.3, 0, Math.PI * 2);
        ctx.arc(x + size * 0.3, y, size * 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillRect(x - size * 0.3, y - size * 0.15, size * 0.6, size * 0.3);
        ctx.strokeRect(x - size * 0.3, y - size * 0.15, size * 0.6, size * 0.3);
        
        ctx.restore();
    }
    
    static drawTransitionalFossil(ctx, x, y, width, height, type = 'archaeopteryx') {
        ctx.save();
        ctx.translate(x, y);
        
        if(type === 'archaeopteryx') {
            // Reptilian features
            ctx.fillStyle = '#8B7355';
            
            // Body
            ctx.beginPath();
            ctx.ellipse(width * 0.3, height * 0.5, 40, 60, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Tail (long, reptilian)
            ctx.beginPath();
            ctx.moveTo(width * 0.3, height * 0.5 + 60);
            ctx.quadraticCurveTo(width * 0.25, height * 0.7, width * 0.2, height * 0.85);
            ctx.lineWidth = 15;
            ctx.strokeStyle = '#8B7355';
            ctx.stroke();
            
            // Head (reptilian with teeth)
            ctx.beginPath();
            ctx.ellipse(width * 0.3, height * 0.35, 20, 25, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Teeth
            ctx.fillStyle = '#FFFFFF';
            for(let i = 0; i < 5; i++) {
                ctx.beginPath();
                ctx.moveTo(width * 0.3 + 15, height * 0.35 + i * 4 - 8);
                ctx.lineTo(width * 0.3 + 20, height * 0.35 + i * 4 - 8);
                ctx.lineTo(width * 0.3 + 18, height * 0.35 + i * 4 - 5);
                ctx.closePath();
                ctx.fill();
            }
            
            // Avian features - Feathers/wings
            ctx.strokeStyle = '#654321';
            ctx.lineWidth = 2;
            
            // Wing
            ctx.fillStyle = '#A0522D';
            ctx.beginPath();
            ctx.ellipse(width * 0.45, height * 0.45, 60, 30, 0.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Feather details
            ctx.strokeStyle = '#654321';
            ctx.lineWidth = 1;
            for(let i = 0; i < 8; i++) {
                ctx.beginPath();
                ctx.moveTo(width * 0.45, height * 0.45);
                ctx.lineTo(width * 0.45 + 50 - i * 5, height * 0.45 + 15 - i * 3);
                ctx.stroke();
            }
            
            // Claws on wings
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(width * 0.55, height * 0.42);
            ctx.lineTo(width * 0.58, height * 0.38);
            ctx.stroke();
        }
        
        ctx.restore();
    }
    
    static drawHomologousLimbs(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        const limbs = [
            { name: 'Human', type: 'arm' },
            { name: 'Cat', type: 'foreleg' },
            { name: 'Whale', type: 'flipper' },
            { name: 'Bat', type: 'wing' }
        ];
        
        const spacing = width / limbs.length;
        
        limbs.forEach((limb, i) => {
            const limbX = spacing * (i + 0.5);
            const limbY = height * 0.5;
            
            // Bone structure colors
            const humerusColor = '#FFE4B5';
            const radiusUlnaColor = '#F4A460';
            const carpalsColor = '#DEB887';
            const phalangesColor = '#D2B48C';
            
            // Humerus (upper arm)
            ctx.fillStyle = humerusColor;
            ctx.fillRect(limbX - 10, limbY - 60, 20, 50);
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 2;
            ctx.strokeRect(limbX - 10, limbY - 60, 20, 50);
            
            // Radius and Ulna (forearm)
            ctx.fillStyle = radiusUlnaColor;
            
            switch(limb.type) {
                case 'arm':
                    ctx.fillRect(limbX - 12, limbY - 10, 8, 50);
                    ctx.fillRect(limbX + 4, limbY - 10, 8, 50);
                    ctx.strokeRect(limbX - 12, limbY - 10, 8, 50);
                    ctx.strokeRect(limbX + 4, limbY - 10, 8, 50);
                    
                    // Hand
                    ctx.fillStyle = carpalsColor;
                    ctx.fillRect(limbX - 15, limbY + 40, 30, 15);
                    ctx.strokeRect(limbX - 15, limbY + 40, 30, 15);
                    
                    // Fingers
                    ctx.fillStyle = phalangesColor;
                    for(let f = 0; f < 5; f++) {
                        ctx.fillRect(limbX - 12 + f * 6, limbY + 55, 4, 20);
                        ctx.strokeRect(limbX - 12 + f * 6, limbY + 55, 4, 20);
                    }
                    break;
                    
                case 'wing':
                    ctx.fillRect(limbX - 10, limbY - 10, 6, 60);
                    ctx.fillRect(limbX + 4, limbY - 10, 6, 60);
                    ctx.strokeRect(limbX - 10, limbY - 10, 6, 60);
                    ctx.strokeRect(limbX + 4, limbY - 10, 6, 60);
                    
                    // Extended fingers for wing
                    ctx.fillStyle = phalangesColor;
                    for(let f = 0; f < 4; f++) {
                        ctx.fillRect(limbX, limbY + 50 + f * 5, 40 - f * 5, 3);
                        ctx.strokeRect(limbX, limbY + 50 + f * 5, 40 - f * 5, 3);
                    }
                    break;
                    
                case 'flipper':
                    ctx.fillRect(limbX - 10, limbY - 10, 20, 40);
                    ctx.strokeRect(limbX - 10, limbY - 10, 20, 40);
                    
                    // Compact flipper structure
                    ctx.fillStyle = carpalsColor;
                    ctx.fillRect(limbX - 12, limbY + 30, 24, 25);
                    ctx.strokeRect(limbX - 12, limbY + 30, 24, 25);
                    break;
                    
                case 'foreleg':
                    ctx.fillRect(limbX - 8, limbY - 10, 6, 45);
                    ctx.fillRect(limbX + 2, limbY - 10, 6, 45);
                    ctx.strokeRect(limbX - 8, limbY - 10, 6, 45);
                    ctx.strokeRect(limbX + 2, limbY - 10, 6, 45);
                    
                    // Paw
                    ctx.fillStyle = carpalsColor;
                    ctx.fillRect(limbX - 10, limbY + 35, 20, 12);
                    ctx.strokeRect(limbX - 10, limbY + 35, 20, 12);
                    
                    // Toes
                    ctx.fillStyle = phalangesColor;
                    for(let f = 0; f < 4; f++) {
                        ctx.fillRect(limbX - 8 + f * 5, limbY + 47, 3, 8);
                        ctx.strokeRect(limbX - 8 + f * 5, limbY + 47, 3, 8);
                    }
                    break;
            }
        });
        
        ctx.restore();
    }
    
    // ===== GEOLOGICAL TIME SHAPES =====
    
    static drawGeologicalTimeline(ctx, x, y, width, height, orientation = 'vertical') {
        ctx.save();
        ctx.translate(x, y);
        
        const eras = [
            { name: 'Cenozoic', duration: 66, color: '#FFE4B5', events: ['Mammals', 'Humans'] },
            { name: 'Mesozoic', duration: 186, color: '#F4A460', events: ['Dinosaurs', 'Birds'] },
            { name: 'Paleozoic', duration: 289, color: '#DEB887', events: ['Fish', 'Amphibians', 'Reptiles'] },
            { name: 'Precambrian', duration: 4000, color: '#BC8F8F', events: ['First Life', 'Bacteria'] }
        ];
        
        const totalDuration = eras.reduce((sum, era) => sum + era.duration, 0);
        
        if(orientation === 'vertical') {
            let currentY = 0;
            
            eras.forEach(era => {
            const eraHeight = (era.duration / totalDuration) * height;
                
                // Draw era block
                ctx.fillStyle = era.color;
                ctx.fillRect(0, currentY, width, eraHeight);
                
                // Border
                ctx.strokeStyle = '#654321';
                ctx.lineWidth = 2;
                ctx.strokeRect(0, currentY, width, eraHeight);
                
                // Era name
                ctx.fillStyle = '#2C3E50';
                ctx.font = 'bold 16px Arial';
                ctx.textAlign = 'center';
                ctx.save();
                ctx.translate(width * 0.5, currentY + eraHeight * 0.5);
                ctx.fillText(era.name, 0, 0);
                ctx.restore();
                
                // Duration
                ctx.font = '12px Arial';
                ctx.fillText(`${era.duration} Mya`, width * 0.5, currentY + eraHeight * 0.5 + 20);
                
                // Events
                ctx.font = '10px Arial';
                ctx.fillStyle = '#555555';
                era.events.forEach((event, i) => {
                    ctx.fillText(event, width * 0.5, currentY + eraHeight * 0.5 + 35 + i * 15);
                });
                
                currentY += eraHeight;
            });
        } else {
            // Horizontal orientation
            let currentX = 0;
            
            eras.forEach(era => {
                const eraWidth = (era.duration / totalDuration) * width;
                
                ctx.fillStyle = era.color;
                ctx.fillRect(currentX, 0, eraWidth, height);
                
                ctx.strokeStyle = '#654321';
                ctx.lineWidth = 2;
                ctx.strokeRect(currentX, 0, eraWidth, height);
                
                ctx.fillStyle = '#2C3E50';
                ctx.font = 'bold 14px Arial';
                ctx.textAlign = 'center';
                ctx.save();
                ctx.translate(currentX + eraWidth * 0.5, height * 0.3);
                ctx.rotate(-Math.PI / 2);
                ctx.fillText(era.name, 0, 0);
                ctx.restore();
                
                currentX += eraWidth;
            });
        }
        
        ctx.restore();
    }
    
    // ===== COEVOLUTION SHAPES =====
    
    static drawPollinatorCoevolution(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Flower
        const flowerX = width * 0.3;
        const flowerY = height * 0.5;
        
        // Petals
        ctx.fillStyle = '#FF69B4';
        for(let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            const petalX = flowerX + Math.cos(angle) * 30;
            const petalY = flowerY + Math.sin(angle) * 30;
            
            ctx.beginPath();
            ctx.ellipse(petalX, petalY, 20, 12, angle, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#C71585';
            ctx.lineWidth = 1;
            ctx.stroke();
        }
        
        // Center
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(flowerX, flowerY, 15, 0, Math.PI * 2);
        ctx.fill();
        
        // Long tubular flower structure
        ctx.fillStyle = '#FF1493';
        ctx.beginPath();
        ctx.ellipse(flowerX, flowerY + 40, 8, 35, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#C71585';
        ctx.stroke();
        
        // Hummingbird with long beak
        const birdX = width * 0.7;
        const birdY = height * 0.5;
        
        // Body
        ctx.fillStyle = '#2ECC71';
        ctx.beginPath();
        ctx.ellipse(birdX, birdY, 25, 35, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Head
        ctx.beginPath();
        ctx.arc(birdX - 20, birdY - 25, 15, 0, Math.PI * 2);
        ctx.fill();
        
        // Long beak (adapted to flower)
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(birdX - 28, birdY - 25);
        ctx.lineTo(birdX - 65, birdY - 25);
        ctx.stroke();
        
        // Wing
        ctx.fillStyle = '#27AE60';
        ctx.beginPath();
        ctx.ellipse(birdX + 10, birdY, 40, 20, 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Arrow showing coevolution
        ctx.strokeStyle = '#E74C3C';
        ctx.fillStyle = '#E74C3C';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        
        // Curved arrow
        ctx.beginPath();
        ctx.arc(width * 0.5, height * 0.5, width * 0.15, Math.PI, 0);
        ctx.stroke();
        
        // Arrowhead
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(birdX - 50, birdY);
        ctx.lineTo(birdX - 45, birdY - 5);
        ctx.lineTo(birdX - 45, birdY + 5);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
    }
    
    // ===== CONVERGENT EVOLUTION SHAPES =====
    
    static drawConvergentEvolution(ctx, x, y, width, height, example = 'flight') {
        ctx.save();
        ctx.translate(x, y);
        
        if(example === 'flight') {
            const organisms = [
                { name: 'Bird', x: 0.2, type: 'bird' },
                { name: 'Bat', x: 0.5, type: 'bat' },
                { name: 'Insect', x: 0.8, type: 'insect' }
            ];
            
            organisms.forEach(org => {
                const orgX = width * org.x;
                const orgY = height * 0.4;
                
                // Body
                ctx.fillStyle = '#654321';
                ctx.beginPath();
                ctx.ellipse(orgX, orgY, 20, 30, 0, 0, Math.PI * 2);
                ctx.fill();
                
                // Wings
                ctx.fillStyle = 'rgba(100, 150, 200, 0.7)';
                ctx.strokeStyle = '#2C3E50';
                ctx.lineWidth = 1;
                
                if(org.type === 'bird') {
                    // Feathered wings
                    ctx.beginPath();
                    ctx.ellipse(orgX - 35, orgY, 40, 20, -0.3, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    
                    ctx.beginPath();
                    ctx.ellipse(orgX + 35, orgY, 40, 20, 0.3, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    
                    // Feather details
                    for(let i = 0; i < 5; i++) {
                        ctx.beginPath();
                        ctx.moveTo(orgX - 35, orgY);
                        ctx.lineTo(orgX - 50 - i * 5, orgY + 10 - i * 3);
                        ctx.stroke();
                    }
                } else if(org.type === 'bat') {
                    // Membrane wings
                    ctx.beginPath();
                    ctx.moveTo(orgX - 10, orgY);
                    ctx.lineTo(orgX - 50, orgY - 20);
                    ctx.lineTo(orgX - 45, orgY + 30);
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();
                    
                    ctx.beginPath();
                    ctx.moveTo(orgX + 10, orgY);
                    ctx.lineTo(orgX + 50, orgY - 20);
                    ctx.lineTo(orgX + 45, orgY + 30);
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();
                    
                    // Wing bones
                    ctx.beginPath();
                    ctx.moveTo(orgX - 10, orgY);
                    ctx.lineTo(orgX - 50, orgY - 20);
                    ctx.moveTo(orgX - 10, orgY);
                    ctx.lineTo(orgX - 45, orgY + 30);
                    ctx.stroke();
                } else if(org.type === 'insect') {
                    // Chitinous wings
                    ctx.beginPath();
                    ctx.ellipse(orgX - 25, orgY - 10, 30, 15, -0.5, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    
                    ctx.beginPath();
                    ctx.ellipse(orgX + 25, orgY - 10, 30, 15, 0.5, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    
                    // Wing veins
                    ctx.lineWidth = 0.5;
                    for(let i = 0; i < 6; i++) {
                        ctx.beginPath();
                        ctx.moveTo(orgX - 25, orgY - 10);
                        ctx.lineTo(orgX - 40 + i * 3, orgY - 20);
                        ctx.stroke();
                    }
                }
            });
        }
        
        ctx.restore();
    }
    
    // ===== SEXUAL SELECTION SHAPES =====
    
    static drawSexualSelection(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Male with elaborate display (peacock-like)
        const maleX = width * 0.3;
        const maleY = height * 0.5;
        
        // Body
        ctx.fillStyle = '#3498DB';
        ctx.beginPath();
        ctx.ellipse(maleX, maleY, 30, 40, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Elaborate tail feathers
        for(let i = 0; i < 12; i++) {
            const angle = (i / 12) * Math.PI - Math.PI / 2;
            const featherLength = 80;
            
            // Gradient for feather
            const gradient = ctx.createRadialGradient(
                maleX, maleY,
                0,
                maleX + Math.cos(angle) * featherLength,
                maleY + Math.sin(angle) * featherLength,
                featherLength
            );
            gradient.addColorStop(0, '#1ABC9C');
            gradient.addColorStop(0.5, '#3498DB');
            gradient.addColorStop(1, '#9B59B6');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.moveTo(maleX, maleY);
            ctx.lineTo(
                maleX + Math.cos(angle - 0.15) * featherLength,
                maleY + Math.sin(angle - 0.15) * featherLength
            );
            ctx.lineTo(
                maleX + Math.cos(angle + 0.15) * featherLength,
                maleY + Math.sin(angle + 0.15) * featherLength
            );
            ctx.closePath();
            ctx.fill();
            
            // Eye spot on feather
            ctx.fillStyle = '#F39C12';
            ctx.beginPath();
            ctx.arc(
                maleX + Math.cos(angle) * (featherLength * 0.8),
                maleY + Math.sin(angle) * (featherLength * 0.8),
                8,
                0,
                Math.PI * 2
            );
            ctx.fill();
            
            ctx.fillStyle = '#2C3E50';
            ctx.beginPath();
            ctx.arc(
                maleX + Math.cos(angle) * (featherLength * 0.8),
                maleY + Math.sin(angle) * (featherLength * 0.8),
                4,
                0,
                Math.PI * 2
            );
            ctx.fill();
        }
        
        // Female (plain)
        const femaleX = width * 0.7;
        const femaleY = height * 0.5;
        
        ctx.fillStyle = '#95A5A6';
        ctx.beginPath();
        ctx.ellipse(femaleX, femaleY, 25, 35, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Simple tail
        ctx.fillStyle = '#7F8C8D';
        ctx.beginPath();
        ctx.moveTo(femaleX, femaleY + 35);
        ctx.lineTo(femaleX - 10, femaleY + 55);
        ctx.lineTo(femaleX + 10, femaleY + 55);
        ctx.closePath();
        ctx.fill();
        
        // Arrow showing selection
        ctx.strokeStyle = '#E74C3C';
        ctx.fillStyle = '#E74C3C';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(femaleX - 40, femaleY - 20);
        ctx.lineTo(maleX + 40, maleY - 20);
        ctx.stroke();
        
        // Arrowhead
        ctx.beginPath();
        ctx.moveTo(maleX + 40, maleY - 20);
        ctx.lineTo(maleX + 35, maleY - 25);
        ctx.lineTo(maleX + 35, maleY - 15);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
    }
    
    // ===== HARDY-WEINBERG EQUILIBRIUM =====
    
    static drawHardyWeinbergDiagram(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Punnett square
        const squareSize = Math.min(width, height) * 0.6;
        const startX = (width - squareSize) / 2;
        const startY = (height - squareSize) / 2;
        
        // Grid
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 2;
        
        for(let i = 0; i <= 2; i++) {
            // Vertical lines
            ctx.beginPath();
            ctx.moveTo(startX + (squareSize / 2) * i, startY);
            ctx.lineTo(startX + (squareSize / 2) * i, startY + squareSize);
            ctx.stroke();
            
            // Horizontal lines
            ctx.beginPath();
            ctx.moveTo(startX, startY + (squareSize / 2) * i);
            ctx.lineTo(startX + squareSize, startY + (squareSize / 2) * i);
            ctx.stroke();
        }
        
        // Labels
        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = '#3498DB';
        ctx.textAlign = 'center';
        
        // Top labels (p and q)
        ctx.fillText('p (A)', startX + squareSize / 4, startY - 20);
        ctx.fillStyle = '#E74C3C';
        ctx.fillText('q (a)', startX + 3 * squareSize / 4, startY - 20);
        
        // Side labels
        ctx.fillStyle = '#3498DB';
        ctx.fillText('p (A)', startX - 30, startY + squareSize / 4);
        ctx.fillStyle = '#E74C3C';
        ctx.fillText('q (a)', startX - 30, startY + 3 * squareSize / 4);
        
        // Genotypes in squares
        ctx.font = 'bold 20px Arial';
        
        // AA (top-left)
        ctx.fillStyle = '#3498DB';
        ctx.fillText('AA', startX + squareSize / 4, startY + squareSize / 4);
        ctx.font = '14px Arial';
        ctx.fillStyle = '#7F8C8D';
        ctx.fillText('p²', startX + squareSize / 4, startY + squareSize / 4 + 20);
        
        // Aa (top-right and bottom-left)
        ctx.font = 'bold 20px Arial';
        ctx.fillStyle = '#9B59B6';
        ctx.fillText('Aa', startX + 3 * squareSize / 4, startY + squareSize / 4);
        ctx.fillText('Aa', startX + squareSize / 4, startY + 3 * squareSize / 4);
        ctx.font = '14px Arial';
        ctx.fillStyle = '#7F8C8D';
        ctx.fillText('pq', startX + 3 * squareSize / 4, startY + squareSize / 4 + 20);
        ctx.fillText('pq', startX + squareSize / 4, startY + 3 * squareSize / 4 + 20);
        
        // aa (bottom-right)
        ctx.font = 'bold 20px Arial';
        ctx.fillStyle = '#E74C3C';
        ctx.fillText('aa', startX + 3 * squareSize / 4, startY + 3 * squareSize / 4);
        ctx.font = '14px Arial';
        ctx.fillStyle = '#7F8C8D';
        ctx.fillText('q²', startX + 3 * squareSize / 4, startY + 3 * squareSize / 4 + 20);
        
        ctx.restore();
    }
}

// ============================================================================
// EVOLUTION DIAGRAM RENDERER CLASS
// ============================================================================

class EvolutionDiagramRenderer {
    constructor(canvas = null) {
        this.defaultFont = 'Arial, sans-serif';
        this.defaultFontSize = 12;
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
        this.currentFrame = 0;
    }

    renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = EvolutionDiagramsRegistry.getDiagram(diagramKey);
        if (!diagram) {
            throw new Error(`Evolution diagram '${diagramKey}' not found`);
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
                // ===== PHYLOGENY =====
                case 'phylogeneticTree':
                    this.renderPhylogeneticTreeDiagram(20, 60, width - 40, height - 100, mergedOptions);
                    break;
                case 'treeOfLife':
                    this.renderTreeOfLifeDiagram(centerX, 80, width * 0.8, height * 0.8, mergedOptions);
                    break;
                case 'humanEvolution':
                    this.renderHumanEvolutionDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;

                // ===== NATURAL SELECTION =====
                case 'naturalSelection':
                    this.renderNaturalSelectionDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;
                case 'pepperMothEvolution':
                    this.renderPepperMothDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;
                case 'finchBeaks':
                    this.renderFinchBeaksDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;
                case 'adaptiveRadiation':
                    this.renderAdaptiveRadiationDiagram(centerX, 80, width * 0.8, height * 0.8, mergedOptions);
                    break;

                // ===== SPECIATION =====
                case 'allopatricSpeciation':
                    this.renderAllopatricSpeciationDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;
                case 'sympatricSpeciation':
                    this.renderSympatricSpeciationDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;
                case 'speciationModes':
                    this.renderSpeciationModesDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;

                // ===== GENETIC VARIATION =====
                case 'geneticDrift':
                    this.renderGeneticDriftDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;
                case 'bottleneckEffect':
                    this.renderBottleneckEffectDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;
                case 'founderEffect':
                    this.renderFounderEffectDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;
                case 'geneFlow':
                    this.renderGeneFlowDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;

                // ===== EVIDENCE =====
                case 'fossilRecord':
                    this.renderFossilRecordDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;
                case 'transitionalFossils':
                    this.renderTransitionalFossilsDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;
                case 'homologousStructures':
                    this.renderHomologousStructuresDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;
                case 'analogousStructures':
                    this.renderAnalogousStructuresDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;
                case 'vestigialStructures':
                    this.renderVestigialStructuresDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;
                case 'embryologicalEvidence':
                    this.renderEmbryologicalEvidenceDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;
                case 'molecularEvidence':
                    this.renderMolecularEvidenceDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;

                // ===== COEVOLUTION =====
                case 'coevolution':
                case 'pollinatorCoevolution':
                    this.renderPollinatorCoevolutionDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;

                // ===== MACROEVOLUTION =====
                case 'punctuatedEquilibrium':
                    this.renderPunctuatedEquilibriumDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;
                case 'massExtinction':
                    this.renderMassExtinctionDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;
                case 'convergentEvolution':
                    this.renderConvergentEvolutionDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;
                case 'divergentEvolution':
                    this.renderDivergentEvolutionDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;

                // ===== GEOLOGICAL TIME =====
                case 'geologicalTimeScale':
                    this.renderGeologicalTimeScaleDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;
                case 'evolutionTimeline':
                    this.renderEvolutionTimelineDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;

                // ===== POPULATION GENETICS =====
                case 'hardyWeinberg':
                    this.renderHardyWeinbergDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;
                case 'alleleFrequencyChange':
                    this.renderAlleleFrequencyChangeDiagram(50, 80, width - 100, height - 120, mergedOptions);
                    break;

                // ===== SEXUAL SELECTION =====
                case 'sexualSelection':
                    this.renderSexualSelectionDiagram(50, 80, width - 100, height - 120, mergedOptions);
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

    // ========== RENDER IMPLEMENTATIONS ==========

    renderPhylogeneticTreeDiagram(x, y, width, height, options) {
        const { showLabels, treeType, showTimeScale } = options;
        
        EvolutionShapes.drawPhylogeneticTree(this.ctx, x, y, width, height, treeType);
        
        if(showLabels) {
            const species = ['Species A', 'Species B', 'Species C', 'Species D', 'Species E'];
            const colors = ['#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#9B59B6'];
            
            species.forEach((name, i) => {
                this.addLabel(name, x + width * (0.1 + i * 0.2), y + 10, colors[i]);
            });
            
            this.addLabel('Common Ancestor', x + width * 0.05, y + height - 10, '#34495E');
        }
        
        if(showTimeScale) {
            this.ctx.strokeStyle = '#7F8C8D';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);
            
            for(let i = 0; i <= 4; i++) {
                const timeY = y + (height / 4) * i;
                this.ctx.beginPath();
                this.ctx.moveTo(x, timeY);
                this.ctx.lineTo(x + width, timeY);
                this.ctx.stroke();
                
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.font = '10px Arial';
                this.ctx.fillText(`${i * 25} Mya`, x - 40, timeY + 5);
            }
            
            this.ctx.setLineDash([]);
        }
    }

    renderTreeOfLifeDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        EvolutionShapes.drawTreeOfLife(this.ctx, x - width / 2, y, width, height);
        
        if(showLabels) {
            this.addLabel('Bacteria', x - width * 0.3, y + 20, '#E74C3C');
            this.addLabel('Archaea', x, y, '#F39C12');
            this.addLabel('Eukarya', x + width * 0.3, y + 20, '#3498DB');
            this.addLabel('LUCA\n(Last Universal\nCommon Ancestor)', x, y + height * 0.6 + 30, '#2C3E50');
        }
    }

    renderHumanEvolutionDiagram(x, y, width, height, options) {
        const { showLabels, showTimeline } = options;
        
        EvolutionShapes.drawHumanEvolutionSequence(this.ctx, x, y, width, height);
        
        if(showLabels) {
            const stages = [
                'Australopithecus\n(4-2 Mya)',
                'Homo habilis\n(2.4-1.4 Mya)',
                'Homo erectus\n(1.9 Mya-143 Kya)',
                'Homo neanderthalensis\n(400-40 Kya)',
                'Homo sapiens\n(300 Kya-Present)'
            ];
            
            const spacing = width / (stages.length + 1);
            
            stages.forEach((stage, i) => {
                this.addLabel(stage, x + spacing * (i + 1), y + height - 20, '#2C3E50');
            });
        }
        
        if(showTimeline) {
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(x, y + height + 10);
            this.ctx.lineTo(x + width, y + height + 10);
            this.ctx.stroke();
            
            // Arrow
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.beginPath();
            this.ctx.moveTo(x + width, y + height + 10);
            this.ctx.lineTo(x + width - 10, y + height + 5);
            this.ctx.lineTo(x + width - 10, y + height + 15);
            this.closePath();
            this.ctx.fill();
            
            this.addLabel('Time →', x + width / 2, y + height + 35, '#7F8C8D');
        }
    }

    renderNaturalSelectionDiagram(x, y, width, height, options) {
        const { showGenerations, showLabels, traitType } = options;
        
        const genHeight = height / (showGenerations + 1);
        
        for(let gen = 0; gen <= showGenerations; gen++) {
            const genY = y + gen * genHeight;
            
            EvolutionShapes.drawNaturalSelectionSequence(
                this.ctx,
                x,
                genY,
                width,
                genHeight * 0.8,
                gen
            );
            
            if(showLabels) {
                this.ctx.font = 'bold 14px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'left';
                this.ctx.fillText(`Generation ${gen}`, x - 100, genY + genHeight * 0.4);
            }
        }
        
        if(showLabels) {
            // Selection pressure indicator
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(
                '← Selection Pressure (Blue survives best)',
                x + width / 2,
                y + height + 40
            );
            
            // Legend
            this.drawLegend(x + width - 150, y, [
                { color: '#3498DB', label: 'Best adapted' },
                { color: '#E74C3C', label: 'Poorly adapted' },
                { color: '#2ECC71', label: 'Moderately adapted' },
                { color: '#F39C12', label: 'Poorly adapted' }
            ]);
        }
    }

    renderPepperMothDiagram(x, y, width, height, options) {
        const { showBefore, showAfter, showLabels } = options;
        
        if(showBefore && showAfter) {
            // Split view
            const halfWidth = width / 2;
            
            // Before industrial revolution
            EvolutionShapes.drawPepperedMoths(this.ctx, x, y, halfWidth - 20, height, 'light');
            
            if(showLabels) {
                this.ctx.font = 'bold 16px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Before Industrial Revolution', x + halfWidth / 2, y - 10);
                this.ctx.font = '12px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.fillText('Light tree bark', x + halfWidth / 2, y + height + 15);
                this.ctx.fillText('Light moths survive better', x + halfWidth / 2, y + height + 30);
            }
            
            // After industrial revolution
            EvolutionShapes.drawPepperedMoths(
                this.ctx,
                x + halfWidth + 20,
                y,
                halfWidth - 20,
                height,
                'dark'
            );
            
            if(showLabels) {
                this.ctx.font = 'bold 16px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(
                    'After Industrial Revolution',
                    x + halfWidth + 20 + halfWidth / 2,
                    y - 10
                );
                this.ctx.font = '12px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.fillText(
                    'Dark tree bark (pollution)',
                    x + halfWidth + 20 + halfWidth / 2,
                    y + height + 15
                );
                this.ctx.fillText(
                    'Dark moths survive better',
                    x + halfWidth + 20 + halfWidth / 2,
                    y + height + 30
                );
            }
        } else {
            const environment = showBefore ? 'light' : 'dark';
            EvolutionShapes.drawPepperedMoths(this.ctx, x, y, width, height, environment);
        }
    }

    renderFinchBeaksDiagram(x, y, width, height, options) {
        const { showLabels, showFoodSources } = options;
        
        EvolutionShapes.drawFinchBeaks(this.ctx, x, y, width, height);
        
        if(showLabels) {
            const beakTypes = [
                { name: 'Seed-eating\n(Ground Finch)', x: 0.13 },
                { name: 'Insect-eating\n(Warbler Finch)', x: 0.38 },
                { name: 'Cactus-eating\n(Cactus Finch)', x: 0.63 },
                { name: 'Grub-eating\n(Woodpecker Finch)', x: 0.88 }
            ];
            
            beakTypes.forEach(type => {
                this.addLabel(type.name, x + width * type.x, y + height + 30, '#2C3E50');
            });
            
            this.ctx.font = 'italic 14px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(
                'Adaptive Radiation - Different beak shapes evolved for different food sources',
                x + width / 2,
                y - 20
            );
        }
    }

    renderAdaptiveRadiationDiagram(x, y, width, height, options) {
        const { showLabels, showNiches } = options;
        
        // Central ancestor
        this.ctx.fillStyle = '#95A5A6';
        this.ctx.beginPath();
        this.ctx.arc(x, y + height * 0.7, 30, 0, Math.PI * 2);
        this.ctx.fill();
        
        if(showLabels) {
            this.addLabel('Ancestral\nSpecies', x, y + height * 0.7 + 50, '#7F8C8D');
        }
        
        // Radiating lineages
        const niches = [
            { name: 'Aquatic', angle: -2.5, color: '#3498DB', icon: '🐠' },
            { name: 'Aerial', angle: -1.8, color: '#E74C3C', icon: '🦅' },
            { name: 'Arboreal', angle: -1.1, color: '#2ECC71', icon: '🐒' },
            { name: 'Terrestrial', angle: -0.4, color: '#F39C12', icon: '🦁' },
            { name: 'Fossorial', angle: 0.3, color: '#9B59B6', icon: '🦫' }
        ];
        
        niches.forEach(niche => {
            const endX = x + Math.cos(niche.angle) * (width * 0.4);
            const endY = y + height * 0.7 + Math.sin(niche.angle) * (height * 0.4);
            
            // Branch
            this.ctx.strokeStyle = niche.color;
            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            this.ctx.moveTo(x, y + height * 0.7);
            this.ctx.lineTo(endX, endY);
            this.ctx.stroke();
            
            // Endpoint species
            this.ctx.fillStyle = niche.color;
            this.ctx.beginPath();
            this.ctx.arc(endX, endY, 25, 0, Math.PI * 2);
            this.ctx.fill();
            
            if(showLabels) {
                this.addLabel(niche.name + '\n' + niche.icon, endX, endY + 40, niche.color);
            }
        });
        
        if(showNiches) {
            this.ctx.font = 'italic 13px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(
                'Multiple species evolve from common ancestor to fill different ecological niches',
                x,
                y + height - 10
            );
        }
    }

    renderAllopatricSpeciationDiagram(x, y, width, height, options) {
        const { showLabels, showBarrier, showTimeSteps } = options;
        
        for(let stage = 0; stage < showTimeSteps; stage++) {
            EvolutionShapes.drawAllopatricSpeciation(
                this.ctx,
                x,
                y,
                width,
                height,
                stage
            );
        }
        
        if(showLabels) {
            const stageHeight = height / 4;
            const labels = [
                'Original Population\n(One species)',
                'Geographic Barrier\n(Mountain/River)',
                'Populations Diverge\n(Different environments)',
                'Two Distinct Species\n(Reproductive isolation)'
            ];
            
            labels.forEach((label, i) => {
                this.ctx.font = 'bold 13px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'right';
                this.ctx.fillText(label.split('\n')[0], x - 20, y + stageHeight * (i + 0.4));
                this.ctx.font = '11px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.fillText(label.split('\n')[1], x - 20, y + stageHeight * (i + 0.4) + 15);
            });
        }
    }

    renderSympatricSpeciationDiagram(x, y, width, height, options) {
        const { showLabels, mechanism } = options;
        
        if(mechanism === 'polyploidy') {
            // Show chromosome doubling
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Sympatric Speciation via Polyploidy', x + width / 2, y - 10);
            
            // Normal diploid
            this.ctx.fillStyle = '#3498DB';
            this.ctx.font = '14px Arial';
            this.ctx.fillText('2n (Diploid)', x + width * 0.25, y + 30);
            
            for(let i = 0; i < 4; i++) {
                this.ctx.fillStyle = i < 2 ? '#E74C3C' : '#F39C12';
                this.ctx.fillRect(x + width * 0.15 + i * 25, y + 50, 20, 60);
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 2;
                this.ctx.strokeRect(x + width * 0.15 + i * 25, y + 50, 20, 60);
            }
            
            // Arrow
            this.drawArrow(
                x + width * 0.35,
                y + 80,
                x + width * 0.5,
                y + 80,
                '#2C3E50',
                'Chromosome\ndoubling'
            );
            
            // Polyploid
            this.ctx.fillStyle = '#3498DB';
            this.ctx.font = '14px Arial';
            this.ctx.fillText('4n (Tetraploid)', x + width * 0.75, y + 30);
            
            for(let i = 0; i < 8; i++) {
                this.ctx.fillStyle = i < 4 ? '#E74C3C' : '#F39C12';
                this.ctx.fillRect(x + width * 0.55 + i * 22, y + 50, 20, 60);
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 2;
                this.ctx.strokeRect(x + width * 0.55 + i * 22, y + 50, 20, 60);
            }
            
            if(showLabels) {
                this.ctx.font = '12px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.fillText(
                    'Cannot interbreed with parent species',
                    x + width * 0.75,
                    y + 130
                );
            }
        }
    }

    renderSpeciationModesDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        const modes = [
            { name: 'Allopatric', desc: 'Geographic\nseparation' },
            { name: 'Sympatric', desc: 'Same\nlocation' },
            { name: 'Parapatric', desc: 'Adjacent\npopulations' },
            { name: 'Peripatric', desc: 'Small isolated\ngroup' }
        ];
        
        const cols = 2;
        const rows = 2;
        const cellWidth = width / cols;
        const cellHeight = height / rows;
        
        modes.forEach((mode, i) => {
            const col = i % cols;
            const row = Math.floor(i / cols);
            const cellX = x + col * cellWidth;
            const cellY = y + row * cellHeight;
            
            // Border
            this.ctx.strokeStyle = '#BDC3C7';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(cellX + 10, cellY + 10, cellWidth - 20, cellHeight - 20);
            
            // Title
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(mode.name, cellX + cellWidth / 2, cellY + 35);
            
            if(showLabels) {
                this.ctx.font = '12px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                const lines = mode.desc.split('\n');
                lines.forEach((line, li) => {
                    this.ctx.fillText(line, cellX + cellWidth / 2, cellY + 55 + li * 15);
                });
            }
            
            // Simple visualization
            const vizY = cellY + 100;
            
            if(mode.name === 'Allopatric') {
                // Two separated populations
                this.ctx.fillStyle = '#3498DB';
                this.ctx.fillRect(cellX + 30, vizY, 40, 40);
                
                this.ctx.fillStyle = '#95A5A6';
                this.ctx.fillRect(cellX + cellWidth / 2 - 5, vizY, 10, 40);
                
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.fillRect(cellX + cellWidth - 70, vizY, 40, 40);
            } else if(mode.name === 'Sympatric') {
                // Overlapping populations
                this.ctx.fillStyle = 'rgba(52, 152, 219, 0.6)';
                this.ctx.beginPath();
                this.ctx.arc(cellX + cellWidth / 2 - 15, vizY + 20, 30, 0, Math.PI * 2);
                this.ctx.fill();
                
                this.ctx.fillStyle = 'rgba(231, 76, 60, 0.6)';
                this.ctx.beginPath();
                this.ctx.arc(cellX + cellWidth / 2 + 15, vizY + 20, 30, 0, Math.PI * 2);
                this.ctx.fill();
            }
        });
    }

    renderGeneticDriftDiagram(x, y, width, height, options) {
        const { showLabels, generations, populationSize } = options;
        
        const genWidth = width / (generations + 1);
        
        for(let gen = 0; gen <= generations; gen++) {
            const genX = x + gen * genWidth;
            
            EvolutionShapes.drawGeneticDrift(
                this.ctx,
                genX,
                y + height * 0.2,
                genWidth * 0.8,
                height * 0.6,
                gen
            );
            
            if(showLabels) {
                this.ctx.font = '11px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(`Gen ${gen}`, genX + genWidth * 0.4, y + height - 10);
            }
        }
        
        if(showLabels) {
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(
                'Random changes in allele frequencies over time',
                x + width / 2,
                y - 10
            );
            
            this.drawLegend(x + width - 150, y, [
                { color: '#E74C3C', label: 'Allele A' },
                { color: '#3498DB', label: 'Allele B' }
            ]);
        }
    }

    renderBottleneckEffectDiagram(x, y, width, height, options) {
        const { showLabels, showDiversity } = options;
        
        EvolutionShapes.drawBottleneckEffect(this.ctx, x, y, width, height);
        
        if(showLabels) {
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Bottleneck Effect', x + width / 2, y - 30);
            
            this.ctx.font = '13px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText(
                'Severe reduction in population size leads to loss of genetic diversity',
                x + width / 2,
                y - 10
            );
        }
        
        if(showDiversity) {
            // Diversity indicators
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#2ECC71';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('High Diversity', x + width * 0.2, y + height * 0.4);
            
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.fillText('Low Diversity', x + width * 0.7, y + height * 0.4);
        }
    }

    renderFounderEffectDiagram(x, y, width, height, options) {
        const { showLabels, showMigration } = options;
        
        // Original population
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Original Population', x + width * 0.25, y);
        
        const colors = ['#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#9B59B6'];
        
        for(let i = 0; i < 30; i++) {
            this.ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            const orgX = x + width * 0.15 + Math.random() * width * 0.2;
            const orgY = y + 30 + Math.random() * (height * 0.4);
            this.ctx.beginPath();
            this.ctx.arc(orgX, orgY, 6, 0, Math.PI * 2);
            this.ctx.fill();
        }
        
        if(showMigration) {
            // Migration arrow
            this.drawArrow(
                x + width * 0.4,
                y + height * 0.3,
                x + width * 0.55,
                y + height * 0.3,
                '#E74C3C',
                'Migration\n(few individuals)'
            );
        }
        
        // New population
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('New Population', x + width * 0.75, y);
        
        // Limited genetic diversity
        const founderColor = colors[0];
        for(let i = 0; i < 30; i++) {
            this.ctx.fillStyle = founderColor;
            const orgX = x + width * 0.65 + Math.random() * width * 0.2;
            const orgY = y + 30 + Math.random() * (height * 0.4);
            this.ctx.beginPath();
            this.ctx.arc(orgX, orgY, 6, 0, Math.PI * 2);
            this.ctx.fill();
        }
        
        if(showLabels) {
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('High genetic diversity', x + width * 0.25, y + height * 0.5);
            this.ctx.fillText('Reduced genetic diversity', x + width * 0.75, y + height * 0.5);
        }
    }

    renderGeneFlowDiagram(x, y, width, height, options) {
        const { showLabels, showDirection } = options;
        
        // Population A
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Population A', x + width * 0.2, y);
        
        for(let i = 0; i < 20; i++) {
            this.ctx.fillStyle = '#3498DB';
            const orgX = x + width * 0.1 + Math.random() * width * 0.2;
            const orgY = y + 30 + Math.random() * (height * 0.6);
            this.ctx.beginPath();
            this.ctx.arc(orgX, orgY, 6, 0, Math.PI * 2);
            this.ctx.fill();
        }
        
        // Population B
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.fillText('Population B', x + width * 0.8, y);
        
        for(let i = 0; i < 20; i++) {
            this.ctx.fillStyle = '#E74C3C';
            const orgX = x + width * 0.7 + Math.random() * width * 0.2;
            const orgY = y + 30 + Math.random() * (height * 0.6);
            this.ctx.beginPath();
            this.ctx.arc(orgX, orgY, 6, 0, Math.PI * 2);
            this.ctx.fill();
        }
        
        if(showDirection) {
            // Gene flow arrows
            this.drawArrow(
                x + width * 0.35,
                y + height * 0.3,
                x + width * 0.65,
                y + height * 0.3,
                '#9B59B6',
                'Gene Flow'
            );
            
            this.drawArrow(
                x + width * 0.65,
                y + height * 0.5,
                x + width * 0.35,
                y + height * 0.5,
                '#9B59B6',
                ''
            );
            
            // Migrants
            this.ctx.fillStyle = '#3498DB';
            this.ctx.beginPath();
            this.ctx.arc(x + width * 0.75, y + height * 0.4, 6, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.beginPath();
            this.ctx.arc(x + width * 0.25, y + height * 0.6, 6, 0, Math.PI * 2);
            this.ctx.fill();
        }
        
        if(showLabels) {
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText(
                'Migration introduces new alleles and increases genetic diversity',
                x + width / 2,
                y + height + 20
            );
        }
    }

    renderFossilRecordDiagram(x, y, width, height, options) {
        const { showLabels, showLayers, showTimeScale } = options;
        
        EvolutionShapes.drawFossilLayers(this.ctx, x, y, width, height);
        
        if(showLabels) {
            const layers = [
                { name: 'Cenozoic Era', age: '66 Mya - Present', x: width + 50 },
                { name: 'Mesozoic Era', age: '252 - 66 Mya', x: width + 50 },
                { name: 'Paleozoic Era', age: '541 - 252 Mya', x: width + 50 },
                { name: 'Precambrian', age: '4600 - 541 Mya', x: width + 50 }
            ];
            
            const layerHeight = height / layers.length;
            
            layers.forEach((layer, i) => {
                this.ctx.font = 'bold 13px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'left';
                this.ctx.fillText(layer.name, x + layer.x, y + (i + 0.4) * layerHeight);
                
                this.ctx.font = '11px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.fillText(layer.age, x + layer.x, y + (i + 0.6) * layerHeight);
            });
        }
        
        if(showTimeScale) {
            // Time arrow
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(x - 30, y);
            this.ctx.lineTo(x - 30, y + height);
            this.ctx.stroke();
            
            // Arrowhead
            this.ctx.beginPath();
            this.ctx.moveTo(x - 30, y + height);
            this.ctx.lineTo(x - 35, y + height - 10);
            this.ctx.lineTo(x - 25, y + height - 10);
            this.ctx.closePath();
            this.ctx.fill();
            
            this.ctx.save();
            this.ctx.translate(x - 45, y + height / 2);
            this.ctx.rotate(-Math.PI / 2);
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Time →', 0, 0);
            this.ctx.restore();
        }
    }

    renderTransitionalFossilsDiagram(x, y, width, height, options) {
        const { showLabels, example } = options;
        
        if(example === 'archaeopteryx') {
            // Reptilian ancestor
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Reptilian Ancestor', x + width * 0.15, y);
            
            this.ctx.fillStyle = '#8B7355';
            this.ctx.beginPath();
            this.ctx.ellipse(x + width * 0.15, y + 60, 30, 40, 0, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Archaeopteryx (transitional)
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.fillText('Archaeopteryx', x + width * 0.5, y);
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.fillText('(Transitional Fossil)', x + width * 0.5, y + 15);
            
            EvolutionShapes.drawTransitionalFossil(
                this.ctx,
                x + width * 0.28,
                y + 30,
                width * 0.44,
                height * 0.8,
                'archaeopteryx'
            );
            
            // Modern bird
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.fillText('Modern Bird', x + width * 0.85, y);
            
            this.ctx.fillStyle = '#3498DB';
            this.ctx.beginPath();
            this.ctx.ellipse(x + width * 0.85, y + 60, 25, 35, 0, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Wings
            this.ctx.beginPath();
            this.ctx.ellipse(x + width * 0.85 - 35, y + 60, 30, 15, -0.3, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.ellipse(x + width * 0.85 + 35, y + 60, 30, 15, 0.3, 0, Math.PI * 2);
            this.ctx.fill();
            
            if(showLabels) {
                // Feature labels
                this.ctx.font = '11px Arial';
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.textAlign = 'left';
                
                const features = [
                    'Reptilian features:',
                    '• Teeth',
                    '• Long bony tail',
                    '• Claws on wings',
                    '',
                    'Avian features:',
                    '• Feathers',
                    '• Wings',
                    '• Wishbone'
                ];
                
                features.forEach((feature, i) => {
                    this.ctx.fillText(feature, x + 20, y + height * 0.5 + i * 15);
                });
            }
        }
    }

    renderHomologousStructuresDiagram(x, y, width, height, options) {
        const { showLabels, structureType } = options;
        
        EvolutionShapes.drawHomologousLimbs(this.ctx, x, y, width, height);
        
        if(showLabels) {
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(
                'Homologous Structures - Same Structure, Different Function',
                x + width / 2,
                y - 30
            );
            
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText(
                'Evidence of common ancestry - similar bone structure adapted for different purposes',
                x + width / 2,
                y - 10
            );
            
            const spacing = width / 4;
            const labels = [
                { name: 'Human Arm', function: 'Grasping' },
                { name: 'Cat Leg', function: 'Walking' },
                { name: 'Whale Flipper', function: 'Swimming' },
                { name: 'Bat Wing', function: 'Flying' }
            ];
            
            labels.forEach((label, i) => {
                this.ctx.font = 'bold 13px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.fillText(label.name, x + spacing * (i + 0.5), y + height + 20);
                
                this.ctx.font = '11px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.fillText(`(${label.function})`, x + spacing * (i + 0.5), y + height + 35);
            });
            
            // Color legend for bones
            this.drawLegend(x + width + 20, y + height * 0.3, [
                { color: '#FFE4B5', label: 'Humerus (upper)' },
                { color: '#F4A460', label: 'Radius/Ulna (forearm)' },
                { color: '#DEB887', label: 'Carpals (wrist)' },
                { color: '#D2B48C', label: 'Phalanges (digits)' }
            ]);
        }
    }

    renderAnalogousStructuresDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(
            'Analogous Structures - Different Structure, Similar Function',
            x + width / 2,
            y - 10
        );
        
        const examples = [
            { name: 'Bird Wing', type: 'bird', x: 0.2 },
            { name: 'Insect Wing', type: 'insect', x: 0.5 },
            { name: 'Bat Wing', type: 'bat', x: 0.8 }
        ];
        
        examples.forEach(example => {
            const exX = x + width * example.x;
            const exY = y + height * 0.4;
            
            // Draw organism with wing
            if(example.type === 'bird') {
                // Bird body
                this.ctx.fillStyle = '#3498DB';
                this.ctx.beginPath();
                this.ctx.ellipse(exX, exY, 25, 35, 0, 0, Math.PI * 2);
                this.ctx.fill();
                
                // Feathered wing
                this.ctx.fillStyle = 'rgba(52, 152, 219, 0.7)';
                this.ctx.beginPath();
                this.ctx.ellipse(exX - 40, exY, 45, 20, -0.3, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 1;
                this.ctx.stroke();
                
                // Feather details
                for(let i = 0; i < 5; i++) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(exX - 40, exY);
                    this.ctx.lineTo(exX - 60 - i * 5, exY + 10 - i * 3);
                    this.ctx.stroke();
                }
            } else if(example.type === 'insect') {
                // Insect body
                this.ctx.fillStyle = '#F39C12';
                this.ctx.fillRect(exX - 8, exY - 15, 16, 30);
                
                // Chitinous wing
                this.ctx.fillStyle = 'rgba(243, 156, 18, 0.5)';
                this.ctx.beginPath();
                this.ctx.ellipse(exX - 30, exY, 35, 15, -0.4, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 1;
                this.ctx.stroke();
                
                // Wing veins
                this.ctx.lineWidth = 0.5;
                for(let i = 0; i < 6; i++) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(exX - 8, exY);
                    this.ctx.lineTo(exX - 45 + i * 3, exY - 12);
                    this.ctx.stroke();
                }
            } else if(example.type === 'bat') {
                // Bat body
                this.ctx.fillStyle = '#8B4513';
                this.ctx.beginPath();
                this.ctx.ellipse(exX, exY, 20, 25, 0, 0, Math.PI * 2);
                this.ctx.fill();
                
                // Membrane wing
                this.ctx.fillStyle = 'rgba(139, 69, 19, 0.6)';
                this.ctx.beginPath();
                this.ctx.moveTo(exX - 10, exY);
                this.ctx.lineTo(exX - 50, exY - 25);
                this.ctx.lineTo(exX - 45, exY + 20);
                this.ctx.closePath();
                this.ctx.fill();
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 1;
                this.ctx.stroke();
                
                // Wing bones
                this.ctx.beginPath();
                this.ctx.moveTo(exX - 10, exY);
                this.ctx.lineTo(exX - 50, exY - 25);
                this.ctx.moveTo(exX - 10, exY);
                this.ctx.lineTo(exX - 45, exY + 20);
                this.ctx.stroke();
            }
            
            if(showLabels) {
                this.ctx.font = 'bold 13px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(example.name, exX, exY + 60);
                
                this.ctx.font = '11px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                const structures = {
                    'bird': 'Bones + Feathers',
                    'insect': 'Chitin exoskeleton',
                    'bat': 'Bones + Skin membrane'
                };
                this.ctx.fillText(structures[example.type], exX, exY + 75);
            }
        });
        
        if(showLabels) {
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(
                'All adapted for flight but evolved independently (convergent evolution)',
                x + width / 2,
                y + height - 20
            );
        }
    }

    renderVestigialStructuresDiagram(x, y, width, height, options) {
        const { showLabels, showComparison } = options;
        
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Vestigial Structures - Evidence of Evolution', x + width / 2, y - 10);
        
        const examples = [
            { name: 'Human Tailbone', organism: 'human' },
            { name: 'Whale Pelvis', organism: 'whale' },
            { name: 'Snake Leg Bones', organism: 'snake' }
        ];
        
        const spacing = width / examples.length;
        
        examples.forEach((example, i) => {
            const exX = x + spacing * (i + 0.5);
            const exY = y + height * 0.3;
            
            // Draw organism
            if(example.organism === 'human') {
                // Human silhouette
                this.ctx.fillStyle = '#DEB887';
                this.ctx.beginPath();
                this.ctx.arc(exX, exY - 60, 15, 0, Math.PI * 2);
                this.ctx.fill();
                
                this.ctx.fillRect(exX - 10, exY - 45, 20, 60);
                
                // Highlight tailbone
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.beginPath();
                this.ctx.arc(exX, exY, 8, 0, Math.PI * 2);
                this.ctx.fill();
                
                // Arrow
                this.ctx.strokeStyle = '#E74C3C';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(exX + 15, exY);
                this.ctx.lineTo(exX + 40, exY);
                this.ctx.stroke();
                
            } else if(example.organism === 'whale') {
                // Whale body
                this.ctx.fillStyle = '#3498DB';
                this.ctx.beginPath();
                this.ctx.ellipse(exX, exY, 60, 30, 0, 0, Math.PI * 2);
                this.ctx.fill();
                
                // Tail
                this.ctx.beginPath();
                this.ctx.moveTo(exX + 60, exY);
                this.ctx.lineTo(exX + 75, exY - 15);
                this.ctx.lineTo(exX + 75, exY + 15);
                this.ctx.closePath();
                this.ctx.fill();
                
                // Highlight vestigial pelvis
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.fillRect(exX - 10, exY - 5, 12, 10);
                
                // Arrow
                this.ctx.strokeStyle = '#E74C3C';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(exX - 4, exY + 10);
                this.ctx.lineTo(exX - 4, exY + 30);
                this.ctx.stroke();
                
            } else if(example.organism === 'snake') {
                // Snake body
                this.ctx.strokeStyle = '#2ECC71';
                this.ctx.lineWidth = 15;
                this.ctx.beginPath();
                this.ctx.moveTo(exX - 50, exY);
                this.ctx.quadraticCurveTo(exX - 20, exY - 20, exX, exY);
                this.ctx.quadraticCurveTo(exX + 20, exY + 20, exX + 50, exY);
                this.ctx.stroke();
                
                // Head
                this.ctx.fillStyle = '#27AE60';
                this.ctx.beginPath();
                this.ctx.arc(exX + 50, exY, 10, 0, Math.PI * 2);
                this.ctx.fill();
                
                // Highlight vestigial leg bones (internal)
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.fillRect(exX - 3, exY - 3, 6, 6);
                
                // Arrow
                this.ctx.strokeStyle = '#E74C3C';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(exX, exY + 15);
                this.ctx.lineTo(exX, exY + 35);
                this.ctx.stroke();
            }
            
            if(showLabels) {
                this.ctx.font = 'bold 13px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(example.name, exX, exY + 60);
                
                this.ctx.font = '10px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                const descriptions = {
                    'human': 'Remnant of tail\nfrom ancestors',
                    'whale': 'Remnant pelvis\nfrom land ancestors',
                    'snake': 'Tiny leg bones\nfrom legged ancestors'
                };
                const lines = descriptions[example.organism].split('\n');
                lines.forEach((line, li) => {
                    this.ctx.fillText(line, exX, exY + 75 + li * 12);
                });
            }
        });
        
        if(showComparison) {
            this.ctx.font = 'italic 12px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(
                'These structures had functions in ancestors but are now reduced or non-functional',
                x + width / 2,
                y + height - 10
            );
        }
    }

    renderEmbryologicalEvidenceDiagram(x, y, width, height, options) {
        const { showLabels, showStages } = options;
        
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Embryological Evidence - Similar Early Development', x + width / 2, y - 10);
        
        const organisms = ['Fish', 'Chicken', 'Rabbit', 'Human'];
        const stages = ['Early', 'Middle', 'Late'];
        
        const cellWidth = width / organisms.length;
        const cellHeight = height / stages.length;
        
        organisms.forEach((organism, col) => {
            stages.forEach((stage, row) => {
                const cellX = x + col * cellWidth;
                const cellY = y + row * cellHeight;
                const centerX = cellX + cellWidth / 2;
                const centerY = cellY + cellHeight / 2;
                
                // Draw embryo
                this.ctx.fillStyle = '#F5DEB3';
                this.ctx.strokeStyle = '#8B7355';
                this.ctx.lineWidth = 2;
                
                if(row === 0) {
                    // Early stage - all very similar
                    this.ctx.beginPath();
                    this.ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
                    this.ctx.fill();
                    this.ctx.stroke();
                    
                    // Pharyngeal pouches (gill slits)
                    this.ctx.strokeStyle = '#E74C3C';
                    this.ctx.lineWidth = 1;
                    for(let i = 0; i < 4; i++) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(centerX - 15, centerY - 10 + i * 7);
                        this.ctx.lineTo(centerX - 20, centerY - 10 + i * 7);
                        this.ctx.stroke();
                    }
                    
                    // Tail
                    this.ctx.strokeStyle = '#8B7355';
                    this.ctx.lineWidth = 2;
                    this.ctx.beginPath();
                    this.ctx.moveTo(centerX, centerY + 20);
                    this.ctx.quadraticCurveTo(centerX + 10, centerY + 30, centerX + 15, centerY + 40);
                    this.ctx.stroke();
                    
                } else if(row === 1) {
                    // Middle stage - starting to differentiate
                    this.ctx.beginPath();
                    this.ctx.ellipse(centerX, centerY, 25, 30, 0, 0, Math.PI * 2);
                    this.ctx.fill();
                    this.ctx.stroke();
                    
                    // Limb buds
                    this.ctx.fillStyle = '#DEB887';
                    this.ctx.fillRect(centerX - 28, centerY - 5, 8, 15);
                    this.ctx.fillRect(centerX - 28, centerY + 10, 8, 15);
                    
                    // Tail (still present)
                    this.ctx.strokeStyle = '#8B7355';
                    this.ctx.lineWidth = 2;
                    this.ctx.beginPath();
                    this.ctx.moveTo(centerX, centerY + 30);
                    const tailLength = col === 0 ? 25 : col === 3 ? 10 : 20;
                    this.ctx.quadraticCurveTo(centerX + 10, centerY + 35, centerX + 15, centerY + 30 + tailLength);
                    this.ctx.stroke();
                    
                } else {
                    // Late stage - more differentiated
                    this.ctx.beginPath();
                    this.ctx.ellipse(centerX, centerY - 5, 22, 32, 0, 0, Math.PI * 2);
                    this.ctx.fill();
                    this.ctx.stroke();
                    
                    // Limbs (more developed)
                    this.ctx.fillStyle = '#DEB887';
                    if(col === 0) {
                        // Fish - fins
                        this.ctx.fillRect(centerX - 30, centerY, 10, 8);
                    } else {
                        // Tetrapods - legs
                        this.ctx.fillRect(centerX - 30, centerY - 5, 8, 18);
                        this.ctx.fillRect(centerX - 30, centerY + 10, 8, 18);
                    }
                    
                    // Tail differentiation
                    this.ctx.strokeStyle = '#8B7355';
                    this.ctx.lineWidth = col === 0 ? 4 : col === 3 ? 0 : 2;
                    if(col !== 3 || row < 2) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(centerX, centerY + 27);
                        const tailLength = col === 0 ? 30 : col === 1 ? 20 : 5;
                        this.ctx.quadraticCurveTo(centerX + 10, centerY + 32, centerX + 15, centerY + 27 + tailLength);
                        this.ctx.stroke();
                    }
                }
            });
            
            if(showLabels) {
                // Organism labels
                this.ctx.font = 'bold 12px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(organism, x + cellWidth * (col + 0.5), y - 30);
            }
        });
        
        if(showStages && showLabels) {
            // Stage labels
            stages.forEach((stage, row) => {
                this.ctx.font = 'bold 11px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'right';
                this.ctx.fillText(stage + ' Stage', x - 10, y + cellHeight * (row + 0.5));
            });
            
            this.ctx.font = 'italic 11px Arial';
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(
                'Note: All embryos show pharyngeal pouches (gill slits) and tails in early stages',
                x + width / 2,
                y + height + 20
            );
        }
    }

    renderMolecularEvidenceDiagram(x, y, width, height, options) {
        const { showLabels, compareType } = options;
        
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Molecular Evidence - DNA Similarity', x + width / 2, y - 10);
        
        const species = [
            { name: 'Human', similarity: 100, color: '#3498DB' },
            { name: 'Chimpanzee', similarity: 98.8, color: '#2ECC71' },
            { name: 'Dog', similarity: 85, color: '#F39C12' },
            { name: 'Mouse', similarity: 80, color: '#9B59B6' },
            { name: 'Chicken', similarity: 65, color: '#E74C3C' }
        ];
        
        const barWidth = width * 0.15;
        const maxHeight = height * 0.6;
        const spacing = (width - barWidth * species.length) / (species.length + 1);
        
        species.forEach((sp, i) => {
            const barX = x + spacing * (i + 1) + barWidth * i;
            const barHeight = (sp.similarity / 100) * maxHeight;
            const barY = y + height * 0.8 - barHeight;
            
            // Bar
            const gradient = this.ctx.createLinearGradient(barX, barY, barX, barY + barHeight);
            gradient.addColorStop(0, sp.color);
            gradient.addColorStop(1, this.adjustColor(sp.color, -30));
            
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(barX, barY, barWidth, barHeight);
            
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(barX, barY, barWidth, barHeight);
            
            // Percentage label
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(
                sp.similarity + '%',
                barX + barWidth / 2,
                barY + barHeight / 2
            );
            
            if(showLabels) {
                // Species name
                this.ctx.font = 'bold 12px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.save();
                this.ctx.translate(barX + barWidth / 2, y + height * 0.85);
                this.ctx.rotate(-Math.PI / 4);
                this.ctx.fillText(sp.name, 0, 0);
                this.ctx.restore();
            }
        });
        
        // Y-axis
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(x + 20, y + height * 0.2);
        this.ctx.lineTo(x + 20, y + height * 0.8);
        this.ctx.stroke();
        
        // Y-axis label
        this.ctx.save();
        this.ctx.translate(x + 5, y + height * 0.5);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('DNA Similarity to Humans (%)', 0, 0);
        this.ctx.restore();
        
        if(showLabels) {
            this.ctx.font = 'italic 12px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(
                'Greater DNA similarity indicates more recent common ancestor',
                x + width / 2,
                y + height - 10
            );
        }
    }

    renderPollinatorCoevolutionDiagram(x, y, width, height, options) {
        const { showLabels, showAdaptations } = options;
        
        EvolutionShapes.drawPollinatorCoevolution(this.ctx, x, y, width, height);
        
        if(showLabels) {
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Coevolution: Plant-Pollinator Relationship', x + width / 2, y - 20);
            
            // Adaptations
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'left';
            
            this.ctx.fillText('Flower adaptations:', x + 20, y + height * 0.6);
            this.ctx.fillText('• Long tubular shape', x + 30, y + height * 0.6 + 15);
            this.ctx.fillText('• Nectar at bottom', x + 30, y + height * 0.6 + 30);
            this.ctx.fillText('• Bright colors', x + 30, y + height * 0.6 + 45);
            
            this.ctx.fillText('Hummingbird adaptations:', x + width * 0.55, y + height * 0.6);
            this.ctx.fillText('• Long beak', x + width * 0.55 + 10, y + height * 0.6 + 15);
            this.ctx.fillText('• Long tongue', x + width * 0.55 + 10, y + height * 0.6 + 30);
            this.ctx.fillText('• Hovering ability', x + width * 0.55 + 10, y + height * 0.6 + 45);
        }
    }

    renderPunctuatedEquilibriumDiagram(x, y, width, height, options) {
        const { showLabels, showComparison } = options;
        
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Models of Evolutionary Change', x + width / 2, y - 10);
        
        const modelHeight = height / 2;
        
        // Gradualism
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText('Gradualism', x + width / 2, y + 20);
        
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(x + 50, y + 40);
        
        for(let i = 0; i <= 100; i++) {
            const gradX = x + 50 + (width - 100) * (i / 100);
            const gradY = y + 40 + modelHeight * 0.8 - (modelHeight * 0.8) * (i / 100);
            if(i === 0) {
                this.ctx.moveTo(gradX, gradY);
            } else {
                this.ctx.lineTo(gradX, gradY);
            }
        }
        this.ctx.stroke();
        
        if(showLabels) {
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Slow, steady change over time', x + width / 2, y + modelHeight - 10);
        }
        
        // Punctuated Equilibrium
        const peY = y + modelHeight + 40;
        
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Punctuated Equilibrium', x + width / 2, peY);
        
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 3;
        
        // Stasis periods with rapid bursts
        const segments = [
            { start: 0, end: 25, change: 0 },
            { start: 25, end: 30, change: 0.3 },
            { start: 30, end: 60, change: 0.3 },
            { start: 60, end: 65, change: 0.6 },
            { start: 65, end: 90, change: 0.6 },
            { start: 90, end: 95, change: 1.0 }
        ];
        
        segments.forEach(seg => {
            const startX = x + 50 + (width - 100) * (seg.start / 100);
            const endX = x + 50 + (width - 100) * (seg.end / 100);
            const startY = peY + 20 + modelHeight * 0.8 - (modelHeight * 0.8) * seg.change;
            const endY = peY + 20 + modelHeight * 0.8 - (modelHeight * 0.8) * segments.find(s => s.start === seg.end)?.change || seg.change;
            
            this.ctx.beginPath();
            this.ctx.moveTo(startX, startY);
            this.ctx.lineTo(endX, endY);
            this.ctx.stroke();
        });
        
        if(showLabels) {
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Long periods of stasis with rapid bursts of change', x + width / 2, peY + modelHeight - 10);
            
            // Annotations
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.fillText('Rapid change', x + 50 + (width - 100) * 0.275, peY + 50);
            this.ctx.fillText('Stasis', x + 50 + (width - 100) * 0.45, peY + 150);
        }
        
        // Axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        
        // Y-axis labels
        this.ctx.font = '11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'right';
        this.ctx.fillText('Morphological Change', x + 40, y + modelHeight * 0.5);
        this.ctx.fillText('Morphological Change', x + 40, peY + modelHeight * 0.5);
        
        // X-axis label
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Time →', x + width / 2, y + modelHeight + 5);
        this.ctx.fillText('Time →', x + width / 2, peY + modelHeight + 5);
    }

    renderMassExtinctionDiagram(x, y, width, height, options) {
        const { showLabels, showTimeline } = options;
        
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Mass Extinction Events', x + width / 2, y - 10);
        
        const extinctions = [
            { name: 'Ordovician-Silurian', time: 444, loss: 85, x: 0.1 },
            { name: 'Late Devonian', time: 375, loss: 75, x: 0.25 },
            { name: 'Permian-Triassic', time: 252, loss: 96, x: 0.45 },
            { name: 'Triassic-Jurassic', time: 201, loss: 80, x: 0.65 },
            { name: 'Cretaceous-Paleogene', time: 66, loss: 76, x: 0.85 }
        ];
        
        // Biodiversity line
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        
        let currentY = y + height * 0.3;
        this.ctx.moveTo(x, currentY);
        
        extinctions.forEach(ext => {
            const extX = x + width * ext.x;
            
            // Before extinction
            this.ctx.lineTo(extX - 20, currentY);
            
            // Sharp drop
            const dropAmount = (ext.loss / 100) * (height * 0.4);
            currentY += dropAmount;
            this.ctx.lineTo(extX, currentY);
            
            // Recovery
            const recoveryY = currentY - dropAmount * 0.5;
            this.ctx.lineTo(extX + 40, recoveryY);
            currentY = recoveryY;
        });
        
        this.ctx.lineTo(x + width, currentY - 50);
        this.ctx.stroke();
        
        // Extinction markers
        extinctions.forEach(ext => {
            const extX = x + width * ext.x;
            
            // Vertical line
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.moveTo(extX, y + 20);
            this.ctx.lineTo(extX, y + height * 0.8);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            
            if(showLabels) {
                // Event name
                this.ctx.save();
                this.ctx.translate(extX, y + height * 0.85);
                this.ctx.rotate(-Math.PI / 4);
                this.ctx.font = 'bold 11px Arial';
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.textAlign = 'left';
                this.ctx.fillText(ext.name, 0, 0);
                this.ctx.restore();
                
                // Stats
                this.ctx.font = '9px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(`${ext.time} Mya`, extX, y + 15);
                this.ctx.fillText(`${ext.loss}% loss`, extX, y + height * 0.82);
            }
        });
        
        // Y-axis label
        this.ctx.save();
        this.ctx.translate(x - 30, y + height * 0.5);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Biodiversity', 0, 0);
        this.ctx.restore();
        
        if(showTimeline) {
            // Timeline axis
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(x, y + height);
            this.ctx.lineTo(x + width, y + height);
            this.ctx.stroke();
            
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('500 Mya', x, y + height + 15);
            this.ctx.fillText('Present', x + width, y + height + 15);
        }
    }

    renderConvergentEvolutionDiagram(x, y, width, height, options) {
        const { showLabels, example } = options;
        
        EvolutionShapes.drawConvergentEvolution(this.ctx, x, y, width, height, example);
        
        if(showLabels) {
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Convergent Evolution - Similar Adaptations in Unrelated Species', x + width / 2, y - 20);
            
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText(
                'Different evolutionary paths lead to similar solutions for flight',
                x + width / 2,
                y + height + 20
            );
        }
    }

    renderDivergentEvolutionDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        // Common ancestor
        this.ctx.fillStyle = '#95A5A6';
        this.ctx.beginPath();
        this.ctx.arc(x + width / 2, y + height * 0.8, 30, 0, Math.PI * 2);
        this.ctx.fill();
        
        if(showLabels) {
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Divergent Evolution - Different Traits from Common Ancestor', x + width / 2, y - 10);
            
            this.addLabel('Common\nAncestor', x + width / 2, y + height * 0.8 + 50, '#7F8C8D');
        }
        
        // Diverging lineages
        const lineages = [
            { name: 'Mammals', angle: -2.2, color: '#E74C3C', traits: ['Hair', 'Milk'] },
            { name: 'Birds', angle: -1.5, color: '#3498DB', traits: ['Feathers', 'Flight'] },
            { name: 'Reptiles', angle: -0.8, color: '#2ECC71', traits: ['Scales', 'Eggs'] },
            { name: 'Amphibians', angle: -0.1, color: '#F39C12', traits: ['Moist skin', 'Metamorphosis'] }
        ];
        
        lineages.forEach(lineage => {
            const endX = x + width / 2 + Math.cos(lineage.angle) * (width * 0.4);
            const endY = y + height * 0.8 + Math.sin(lineage.angle) * (height * 0.6);
            
            // Branch
            this.ctx.strokeStyle = lineage.color;
            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            this.ctx.moveTo(x + width / 2, y + height * 0.8);
            this.ctx.lineTo(endX, endY);
            this.ctx.stroke();
            
            // Endpoint
            this.ctx.fillStyle = lineage.color;
            this.ctx.beginPath();
            this.ctx.arc(endX, endY, 25, 0, Math.PI * 2);
            this.ctx.fill();
            
            if(showLabels) {
                this.ctx.font = 'bold 13px Arial';
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(lineage.name, endX, endY);
                
                // Traits
                this.ctx.font = '10px Arial';
                this.ctx.fillStyle = lineage.color;
                lineage.traits.forEach((trait, i) => {
                    this.ctx.fillText(trait, endX, endY + 35 + i * 12);
                });
            }
        });
    }

    renderGeologicalTimeScaleDiagram(x, y, width, height, options) {
        const { showLabels, showEvents, orientation } = options;
        
        EvolutionShapes.drawGeologicalTimeline(this.ctx, x, y, width, height, orientation);
        
        if(showLabels && showEvents) {
            const events = [
                'Mammals diversify',
                'Dinosaurs extinct',
                'First flowers',
                'First birds',
                'First dinosaurs',
                'First reptiles',
                'First land plants',
                'Cambrian explosion',
                'First multicellular life'
            ];
            
            // Add event markers
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.textAlign = orientation === 'vertical' ? 'left' : 'center';
            
            events.forEach((event, i) => {
                if(orientation === 'vertical') {
                    const eventY = y + (i / events.length) * height * 0.9;
                    this.ctx.fillText(`• ${event}`, x + width + 10, eventY);
                } else {
                    const eventX = x + (i / events.length) * width * 0.9;
                    this.ctx.save();
                    this.ctx.translate(eventX, y + height + 30);
                    this.ctx.rotate(-Math.PI / 4);
                    this.ctx.fillText(event, 0, 0);
                    this.ctx.restore();
                }
            });
        }
    }

    renderEvolutionTimelineDiagram(x, y, width, height, options) {
        const { showLabels, showMilestones } = options;
        
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Timeline of Life on Earth', x + width / 2, y - 10);
        
        const milestones = [
            { time: 3800, name: 'First Life', icon: '🦠', color: '#9B59B6' },
            { time: 2500, name: 'Photosynthesis', icon: '🌱', color: '#2ECC71' },
            { time: 1500, name: 'Eukaryotic Cells', icon: '🔬', color: '#3498DB' },
            { time: 600, name: 'Multicellular Life', icon: '🐛', color: '#E67E22' },
            { time: 540, name: 'Cambrian Explosion', icon: '🦐', color: '#E74C3C' },
            { time: 400, name: 'Plants on Land', icon: '🌿', color: '#27AE60' },
            { time: 230, name: 'Dinosaurs', icon: '🦕', color: '#F39C12' },
            { time: 66, name: 'Mammals Diversify', icon: '🦁', color: '#D35400' },
            { time: 0.3, name: 'Homo sapiens', icon: '👤', color: '#C0392B' }
        ];
        
        // Timeline
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y + height / 2);
        this.ctx.lineTo(x + width, y + height / 2);
        this.ctx.stroke();
        
        if(showMilestones) {
            milestones.forEach((milestone, i) => {
                const progress = 1 - (milestone.time / 4000);
                const mX = x + width * progress;
                const mY = y + height / 2;
                
                // Marker
                this.ctx.fillStyle = milestone.color;
                this.ctx.beginPath();
                this.ctx.arc(mX, mY, 8, 0, Math.PI * 2);
                this.ctx.fill();
                
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
                
                // Line to label
                const labelY = i % 2 === 0 ? mY - 60 : mY + 60;
                this.ctx.strokeStyle = milestone.color;
                this.ctx.lineWidth = 1;
                this.ctx.setLineDash([2, 2]);
                this.ctx.beginPath();
                this.ctx.moveTo(mX, mY + 10);
                this.ctx.lineTo(mX, labelY);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
                
                if(showLabels) {
                    // Name and icon
                    this.ctx.font = 'bold 12px Arial';
                    this.ctx.fillStyle = milestone.color;
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText(milestone.icon, mX, labelY + (i % 2 === 0 ? -15 : 20));
                    
                    this.ctx.font = '11px Arial';
                    this.ctx.fillStyle = '#2C3E50';
                    this.ctx.fillText(milestone.name, mX, labelY + (i % 2 === 0 ? 0 : 35));
                    
                    // Time
                    this.ctx.font = '9px Arial';
                    this.ctx.fillStyle = '#7F8C8D';
                    this.ctx.fillText(`${milestone.time} Mya`, mX, labelY + (i % 2 === 0 ? 12 : 47));
                }
            });
        }
        
        // Scale labels
        this.ctx.font = '11px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('4000 Mya', x, y + height / 2 + 30);
        this.ctx.fillText('Present', x + width, y + height / 2 + 30);
    }

    renderHardyWeinbergDiagram(x, y, width, height, options) {
        const { showLabels, showFormula } = options;
        
        EvolutionShapes.drawHardyWeinbergDiagram(this.ctx, x, y, width, height);
        
        if(showFormula) {
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Hardy-Weinberg Equilibrium', x + width / 2, y + height + 40);
            
            this.ctx.font = 'bold 18px Arial';
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.fillText('p² + 2pq + q² = 1', x + width / 2, y + height + 65);
            
            this.ctx.font = '13px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('p + q = 1', x + width / 2, y + height + 85);
        }
        
        if(showLabels) {
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'left';
            
            const conditions = [
                'Conditions for equilibrium:',
                '1. No mutations',
                '2. Random mating',
                '3. No gene flow',
                '4. Large population',
                '5. No selection'
            ];
            
            conditions.forEach((cond, i) => {
                this.ctx.fillText(cond, x + width + 50, y + 50 + i * 18);
            });
        }
    }

    renderAlleleFrequencyChangeDiagram(x, y, width, height, options) {
        const { showLabels, showGraph, generations } = options;
        
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Allele Frequency Change Over Time', x + width / 2, y - 10);
        
        if(showGraph) {
            // Axes
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(x + 50, y + 20);
            this.ctx.lineTo(x + 50, y + height - 40);
            this.ctx.lineTo(x + width - 20, y + height - 40);
            this.ctx.stroke();
            
            // Simulate allele frequency change
            let freqA = 0.5;
            let freqB = 0.5;
            const dataPoints = [];
            
            for(let gen = 0; gen <= generations; gen++) {
                dataPoints.push({ gen, freqA, freqB });
                
                // Simulate selection favoring A
                freqA += (1 - freqA) * 0.05;
                freqB = 1 - freqA;
            }
            
            // Plot lines
            const genWidth = (width - 70) / generations;
            const maxHeight = height - 60;
            
            // Allele A
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            dataPoints.forEach((point, i) => {
                const plotX = x + 50 + genWidth * point.gen;
                const plotY = y + height - 40 - maxHeight * point.freqA;
                if(i === 0) {
                    this.ctx.moveTo(plotX, plotY);
                } else {
                    this.ctx.lineTo(plotX, plotY);
                }
            });
            this.ctx.stroke();
            
            // Allele B
            this.ctx.strokeStyle = '#3498DB';
            this.ctx.beginPath();
            dataPoints.forEach((point, i) => {
                const plotX = x + 50 + genWidth * point.gen;
                const plotY = y + height - 40 - maxHeight * point.freqB;
                if(i === 0) {
                    this.ctx.moveTo(plotX, plotY);
                } else {
                    this.ctx.lineTo(plotX, plotY);
                }
            });
            this.ctx.stroke();
            
            if(showLabels) {
                // Axis labels
                this.ctx.font = '11px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Generation', x + width / 2, y + height - 15);
                
                this.ctx.save();
                this.ctx.translate(x + 20, y + height / 2);
                this.ctx.rotate(-Math.PI / 2);
                this.ctx.fillText('Allele Frequency', 0, 0);
                this.ctx.restore();
                
                // Legend
                this.drawLegend(x + width - 150, y + 30, [
                    { color: '#E74C3C', label: 'Allele A (favored)' },
                    { color: '#3498DB', label: 'Allele B' }
                ]);
            }
        }
    }

    renderSexualSelectionDiagram(x, y, width, height, options) {
        const { showLabels, selectionType } = options;
        
        EvolutionShapes.drawSexualSelection(this.ctx, x, y, width, height);
        
        if(showLabels) {
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Sexual Selection', x + width / 2, y - 30);
            
            this.ctx.font = '13px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            const typeText = selectionType === 'intersexual' ? 
                'Intersexual Selection: Mate choice by females' :
                'Intrasexual Selection: Competition between males';
            this.ctx.fillText(typeText, x + width / 2, y - 10);
            
            // Labels
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#3498DB';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Male', x + width * 0.3, y + height * 0.7);
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('Elaborate display', x + width * 0.3, y + height * 0.72 + 15);
            this.ctx.fillText('Costly traits', x + width * 0.3, y + height * 0.72 + 28);
            
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#95A5A6';
            this.ctx.fillText('Female', x + width * 0.7, y + height * 0.7);
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('Chooses mate', x + width * 0.7, y + height * 0.72 + 15);
            this.ctx.fillText('Based on traits', x + width * 0.7, y + height * 0.72 + 28);
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
            const lines = label.split('\n');
            lines.forEach((line, i) => {
                this.ctx.fillText(line, midX, midY - 10 + i * 12);
            });
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
            this.ctx.lineWidth= 1;
            this.ctx.strokeRect(0, yPos, boxSize, boxSize);

            // Label
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(item.label, boxSize + 5, yPos + boxSize - 2);
        });

        this.ctx.restore();
    }

    adjustColor(color, amount) {
        // Simple color adjustment for gradients
        const hex = color.replace('#', '');
        const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount));
        const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount));
        const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount));
        
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }

    // ========== ANIMATION & RENDERING ==========

    animate() {
        this.currentFrame++;
        requestAnimationFrame(() => this.animate());
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    saveAsPNG(filename = 'evolution-diagram.png') {
        const link = document.createElement('a');
        link.download = filename;
        link.href = this.canvas.toDataURL();
        link.click();
    }
}

// ============================================================================
// EXPORT
// ============================================================================

export { EvolutionDiagramsRegistry, EvolutionShapes, EvolutionDiagramRenderer };

