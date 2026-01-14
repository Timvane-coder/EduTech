// ============================================================================
// TAXONOMY/CLASSIFICATION BIOLOGY REGISTRY - Comprehensive Configuration System
// ============================================================================

class TaxonomyBiologyRegistry {
    static diagrams = {
        // ===== 1. PHYLOGENETIC TREES =====
        
        'phylogeneticTree': {
            name: 'Phylogenetic Tree',
            category: 'Phylogenetics',
            description: 'Evolutionary relationships between species',
            dataRequired: ['species'],
            usage: 'Best for showing evolutionary relationships',
            examples: ['Evolution', 'Species relationships', 'Common ancestors'],
            defaultOptions: {
                title: 'Phylogenetic Tree',
                species: [
                    { name: 'Bacteria', branch: 'left', color: '#FF6B6B' },
                    { name: 'Archaea', branch: 'left', color: '#4ECDC4' },
                    { name: 'Eukarya', branch: 'right', color: '#45B7D1' }
                ],
                showTimeScale: true,
                showCommonAncestor: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cladogram': {
            name: 'Cladogram',
            category: 'Phylogenetics',
            description: 'Branching diagram showing evolutionary relationships',
            dataRequired: ['clades'],
            usage: 'Best for classification based on shared characteristics',
            examples: ['Vertebrate evolution', 'Plant classification', 'Animal groups'],
            defaultOptions: {
                title: 'Cladogram',
                clades: ['Mammals', 'Birds', 'Reptiles', 'Amphibians', 'Fish'],
                showDerivedCharacters: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dendrogramTree': {
            name: 'Dendrogram',
            category: 'Phylogenetics',
            description: 'Tree diagram for hierarchical clustering',
            dataRequired: [],
            usage: 'Best for showing genetic distance',
            examples: ['DNA analysis', 'Protein sequences', 'Population genetics'],
            defaultOptions: {
                title: 'Dendrogram',
                showDistanceScale: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 2. TAXONOMIC HIERARCHY =====

        'taxonomicHierarchy': {
            name: 'Taxonomic Hierarchy',
            category: 'Classification',
            description: 'Linnaean classification system levels',
            dataRequired: [],
            usage: 'Best for teaching classification levels',
            examples: ['Kingdom to Species', 'Biological classification', 'Taxonomy basics'],
            defaultOptions: {
                title: 'Taxonomic Hierarchy',
                example: 'human', // 'human', 'dog', 'oak', 'eagle'
                showAllLevels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'kingdomComparison': {
            name: 'Five Kingdom System',
            category: 'Classification',
            description: 'Comparison of five biological kingdoms',
            dataRequired: [],
            usage: 'Best for kingdom-level classification',
            examples: ['Monera', 'Protista', 'Fungi', 'Plantae', 'Animalia'],
            defaultOptions: {
                title: 'Five Kingdom Classification',
                showCharacteristics: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'threeDomainSystem': {
            name: 'Three Domain System',
            category: 'Classification',
            description: 'Modern classification: Bacteria, Archaea, Eukarya',
            dataRequired: [],
            usage: 'Best for modern taxonomy overview',
            examples: ['Domain classification', 'Prokaryotes vs Eukaryotes'],
            defaultOptions: {
                title: 'Three Domain System',
                showKingdoms: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 3. SPECIES & CLASSIFICATION =====

        'binomialNomenclature': {
            name: 'Binomial Nomenclature',
            category: 'Nomenclature',
            description: 'Scientific naming system explanation',
            dataRequired: [],
            usage: 'Best for teaching scientific names',
            examples: ['Genus species format', 'Homo sapiens', 'Naming rules'],
            defaultOptions: {
                title: 'Binomial Nomenclature',
                examples: [
                    { common: 'Human', scientific: 'Homo sapiens' },
                    { common: 'Dog', scientific: 'Canis familiaris' },
                    { common: 'Lion', scientific: 'Panthera leo' }
                ],
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'speciesClassification': {
            name: 'Species Classification',
            category: 'Classification',
            description: 'Complete classification of a species',
            dataRequired: ['species'],
            usage: 'Best for detailed species taxonomy',
            examples: ['Full classification path', 'Taxonomic placement'],
            defaultOptions: {
                title: 'Species Classification',
                species: 'human',
                showAllLevels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 4. VERTEBRATE CLASSIFICATION =====

        'vertebrateClassification': {
            name: 'Vertebrate Classification',
            category: 'Animal Classification',
            description: 'Classification of vertebrate animals',
            dataRequired: [],
            usage: 'Best for vertebrate taxonomy',
            examples: ['Fish', 'Amphibians', 'Reptiles', 'Birds', 'Mammals'],
            defaultOptions: {
                title: 'Vertebrate Classification',
                showCharacteristics: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'mammalOrders': {
            name: 'Mammal Orders',
            category: 'Animal Classification',
            description: 'Major orders of mammals',
            dataRequired: [],
            usage: 'Best for mammalian diversity',
            examples: ['Primates', 'Carnivora', 'Rodentia', 'Cetacea'],
            defaultOptions: {
                title: 'Major Mammal Orders',
                showExamples: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'insectOrders': {
            name: 'Insect Orders',
            category: 'Animal Classification',
            description: 'Major orders of insects',
            dataRequired: [],
            usage: 'Best for insect classification',
            examples: ['Coleoptera', 'Lepidoptera', 'Diptera', 'Hymenoptera'],
            defaultOptions: {
                title: 'Major Insect Orders',
                showExamples: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 5. PLANT CLASSIFICATION =====

        'plantKingdom': {
            name: 'Plant Kingdom Classification',
            category: 'Plant Classification',
            description: 'Major divisions of plant kingdom',
            dataRequired: [],
            usage: 'Best for plant taxonomy overview',
            examples: ['Bryophytes', 'Pteridophytes', 'Gymnosperms', 'Angiosperms'],
            defaultOptions: {
                title: 'Plant Kingdom',
                showCharacteristics: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'floweringPlantFamilies': {
            name: 'Flowering Plant Families',
            category: 'Plant Classification',
            description: 'Major angiosperm families',
            dataRequired: [],
            usage: 'Best for plant family identification',
            examples: ['Rosaceae', 'Fabaceae', 'Asteraceae', 'Poaceae'],
            defaultOptions: {
                title: 'Major Flowering Plant Families',
                showExamples: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 6. MICROBIAL CLASSIFICATION =====

        'bacterialClassification': {
            name: 'Bacterial Classification',
            category: 'Microbial Classification',
            description: 'Classification of bacteria',
            dataRequired: [],
            usage: 'Best for bacterial taxonomy',
            examples: ['Gram positive', 'Gram negative', 'Shape classification'],
            defaultOptions: {
                title: 'Bacterial Classification',
                showShapes: true,
                showGramStain: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'virusClassification': {
            name: 'Virus Classification',
            category: 'Microbial Classification',
            description: 'Baltimore classification of viruses',
            dataRequired: [],
            usage: 'Best for virus taxonomy',
            examples: ['DNA viruses', 'RNA viruses', 'Retrovirus'],
            defaultOptions: {
                title: 'Virus Classification (Baltimore)',
                showStructure: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'fungiClassification': {
            name: 'Fungi Classification',
            category: 'Microbial Classification',
            description: 'Major phyla of fungi',
            dataRequired: [],
            usage: 'Best for fungal taxonomy',
            examples: ['Ascomycota', 'Basidiomycota', 'Zygomycota'],
            defaultOptions: {
                title: 'Fungi Classification',
                showExamples: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 7. EVOLUTIONARY CONCEPTS =====

        'convergentEvolution': {
            name: 'Convergent Evolution',
            category: 'Evolutionary Concepts',
            description: 'Similar traits in unrelated species',
            dataRequired: [],
            usage: 'Best for showing analogous structures',
            examples: ['Wings in birds and insects', 'Streamlined bodies'],
            defaultOptions: {
                title: 'Convergent Evolution',
                showExamples: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'divergentEvolution': {
            name: 'Divergent Evolution',
            category: 'Evolutionary Concepts',
            description: 'Different traits from common ancestor',
            dataRequired: [],
            usage: 'Best for showing homologous structures',
            examples: ['Vertebrate limbs', 'Darwin\'s finches'],
            defaultOptions: {
                title: 'Divergent Evolution',
                showExamples: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'adaptiveRadiation': {
            name: 'Adaptive Radiation',
            category: 'Evolutionary Concepts',
            description: 'Rapid evolution into multiple forms',
            dataRequired: [],
            usage: 'Best for showing speciation events',
            examples: ['Darwin\'s finches', 'Marsupials in Australia'],
            defaultOptions: {
                title: 'Adaptive Radiation',
                showTimeScale: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 8. COMPARATIVE BIOLOGY =====

        'homologousStructures': {
            name: 'Homologous Structures',
            category: 'Comparative Biology',
            description: 'Similar structures from common ancestry',
            dataRequired: [],
            usage: 'Best for comparative anatomy',
            examples: ['Vertebrate forelimbs', 'Common origin'],
            defaultOptions: {
                title: 'Homologous Structures',
                structures: ['Human arm', 'Bat wing', 'Whale flipper', 'Bird wing'],
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'analogousStructures': {
            name: 'Analogous Structures',
            category: 'Comparative Biology',
            description: 'Similar function, different origin',
            dataRequired: [],
            usage: 'Best for showing convergent evolution',
            examples: ['Bird wing vs insect wing', 'Similar function'],
            defaultOptions: {
                title: 'Analogous Structures',
                structures: ['Bird wing', 'Insect wing', 'Bat wing'],
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vestigialStructures': {
            name: 'Vestigial Structures',
            category: 'Comparative Biology',
            description: 'Reduced or non-functional remnants',
            dataRequired: [],
            usage: 'Best for evolutionary evidence',
            examples: ['Human appendix', 'Snake pelvic bones', 'Whale leg bones'],
            defaultOptions: {
                title: 'Vestigial Structures',
                showExamples: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 9. BIODIVERSITY CONCEPTS =====

        'speciesDiversity': {
            name: 'Species Diversity',
            category: 'Biodiversity',
            description: 'Variety of species in ecosystem',
            dataRequired: [],
            usage: 'Best for biodiversity education',
            examples: ['Richness', 'Evenness', 'Ecosystem diversity'],
            defaultOptions: {
                title: 'Species Diversity',
                showMetrics: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'biogeographicRealms': {
            name: 'Biogeographic Realms',
            category: 'Biodiversity',
            description: 'Major biogeographic regions',
            dataRequired: [],
            usage: 'Best for global biodiversity patterns',
            examples: ['Nearctic', 'Palearctic', 'Neotropical', 'Afrotropical'],
            defaultOptions: {
                title: 'Biogeographic Realms',
                showMap: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 10. DICHOTOMOUS KEYS =====

        'dichotomousKey': {
            name: 'Dichotomous Key',
            category: 'Identification Tools',
            description: 'Binary identification key',
            dataRequired: [],
            usage: 'Best for species identification',
            examples: ['Leaf identification', 'Insect key', 'Tree key'],
            defaultOptions: {
                title: 'Dichotomous Key',
                type: 'leaf', // 'leaf', 'insect', 'bird'
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
        console.log('=== TAXONOMY/CLASSIFICATION BIOLOGY REGISTRY SUMMARY ===');
        console.log(`Total Diagrams: ${this.getTotalDiagramCount()}`);
        console.log('\nBy Category:');
        const stats = this.getDiagramStats();
        Object.entries(stats).forEach(([category, data]) => {
            console.log(`  ${category}: ${data.count} diagrams`);
        });
    }
}

// ============================================================================
// TAXONOMY SHAPES LIBRARY
// ============================================================================

class TaxonomyShapes {
    
    // ===== PHYLOGENETIC TREE SHAPES =====
    
    static drawPhylogeneticBranch(ctx, x, y, width, height, angle, label, color) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        
        // Branch
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(width, 0);
        ctx.stroke();
        
        // Terminal node
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(width, 0, 6, 0, Math.PI * 2);
        ctx.fill();
        
        // Label
        if (label) {
            ctx.fillStyle = '#2C3E50';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'left';
            ctx.fillText(label, width + 10, 5);
        }
        
        ctx.restore();
    }
    
    static drawCladogramNode(ctx, x, y, size, hasDescendants = true) {
        ctx.fillStyle = '#34495E';
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        
        if (hasDescendants) {
            ctx.strokeStyle = '#34495E';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }
    
    static drawTreeOfLife(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Trunk (common ancestor)
        const trunkWidth = width * 0.1;
        const trunkHeight = height * 0.3;
        
        const gradient = ctx.createLinearGradient(0, height - trunkHeight, 0, height);
        gradient.addColorStop(0, '#8B4513');
        gradient.addColorStop(1, '#654321');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(width / 2 - trunkWidth / 2, height - trunkHeight, trunkWidth, trunkHeight);
        
        // Main branches (3 domains)
        const branchY = height - trunkHeight;
        
        // Bacteria branch (left)
        ctx.strokeStyle = '#FF6B6B';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(width / 2, branchY);
        ctx.quadraticCurveTo(width * 0.2, branchY - height * 0.2, width * 0.15, branchY - height * 0.4);
        ctx.stroke();
        
        // Archaea branch (middle-left)
        ctx.strokeStyle = '#4ECDC4';
        ctx.beginPath();
        ctx.moveTo(width / 2, branchY);
        ctx.quadraticCurveTo(width * 0.35, branchY - height * 0.25, width * 0.4, branchY - height * 0.5);
        ctx.stroke();
        
        // Eukarya branch (right)
        ctx.strokeStyle = '#45B7D1';
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(width / 2, branchY);
        ctx.quadraticCurveTo(width * 0.7, branchY - height * 0.3, width * 0.75, branchY - height * 0.6);
        ctx.stroke();
        
        // Sub-branches for Eukarya
        const eukStartX = width * 0.75;
        const eukStartY = branchY - height * 0.6;
        
        ctx.lineWidth = 5;
        
        // Protists
        ctx.strokeStyle = '#95E1D3';
        ctx.beginPath();
        ctx.moveTo(eukStartX, eukStartY);
        ctx.lineTo(width * 0.65, eukStartY - height * 0.15);
        ctx.stroke();
        
        // Fungi
        ctx.strokeStyle = '#DDA0DD';
        ctx.beginPath();
        ctx.moveTo(eukStartX, eukStartY);
        ctx.lineTo(width * 0.75, eukStartY - height * 0.2);
        ctx.stroke();
        
        // Plants
        ctx.strokeStyle = '#90EE90';
        ctx.beginPath();
        ctx.moveTo(eukStartX, eukStartY);
        ctx.lineTo(width * 0.85, eukStartY - height * 0.18);
        ctx.stroke();
        
        // Animals
        ctx.strokeStyle = '#FFB6C1';
        ctx.beginPath();
        ctx.moveTo(eukStartX, eukStartY);
        ctx.lineTo(width * 0.95, eukStartY - height * 0.15);
        ctx.stroke();
        
        ctx.restore();
    }
    
    // ===== TAXONOMIC HIERARCHY SHAPES =====
    
    static drawHierarchyLevel(ctx, x, y, width, height, level, text, color, indent = 0) {
        ctx.save();
        ctx.translate(x + indent, y);
        
        // Box
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, this.lightenColor(color, 20));
        
        ctx.fillStyle = gradient;
        ctx.strokeStyle = this.darkenColor(color, 30);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(0, 0, width, height, 8);
        ctx.fill();
        ctx.stroke();
        
        // Level label
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(level, 10, height * 0.35);
        
        // Text
        ctx.font = 'bold 16px Arial';
        ctx.fillText(text, 10, height * 0.7);
        
        ctx.restore();
    }
    
    static drawKingdomSymbol(ctx, x, y, size, kingdom) {
        ctx.save();
        ctx.translate(x, y);
        
        switch(kingdom.toLowerCase()) {
            case 'monera':
            case 'bacteria':
                // Simple rod shape
                ctx.fillStyle = '#FF6B6B';
                ctx.fillRect(-size/2, -size/4, size, size/2);
                ctx.strokeStyle = '#C0392B';
                ctx.lineWidth = 2;
                ctx.strokeRect(-size/2, -size/4, size, size/2);
                break;
                
            case 'protista':
                // Amoeba-like
                ctx.fillStyle = '#4ECDC4';
                ctx.beginPath();
                ctx.arc(0, 0, size/2, 0, Math.PI * 2);
                for(let i = 0; i < 5; i++) {
                    const angle = (i / 5) * Math.PI * 2;
                    ctx.lineTo(
                        Math.cos(angle) * size * 0.7,
                        Math.sin(angle) * size * 0.7
                    );
                }
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = '#16A085';
                ctx.lineWidth = 2;
                ctx.stroke();
                break;
                
            case 'fungi':
                // Mushroom shape
                ctx.fillStyle = '#DDA0DD';
                // Cap
                ctx.beginPath();
                ctx.arc(0, -size/4, size/2, Math.PI, 0);
                ctx.fill();
                // Stem
                ctx.fillRect(-size/8, -size/4, size/4, size/2);
                ctx.strokeStyle = '#9B59B6';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(0, -size/4, size/2, Math.PI, 0);
                ctx.stroke();
                ctx.strokeRect(-size/8, -size/4, size/4, size/2);
                break;
                
            case 'plantae':
                // Leaf shape
                ctx.fillStyle = '#90EE90';
                ctx.beginPath();
                ctx.moveTo(0, -size/2);
                ctx.quadraticCurveTo(size/2, -size/4, size/3, 0);
                ctx.quadraticCurveTo(size/4, size/2, 0, size/2);
                ctx.quadraticCurveTo(-size/4, size/2, -size/3, 0);
                ctx.quadraticCurveTo(-size/2, -size/4, 0, -size/2);
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = '#27AE60';
                ctx.lineWidth = 2;
                ctx.stroke();
                // Vein
                ctx.beginPath();
                ctx.moveTo(0, -size/2);
                ctx.lineTo(0, size/2);
                ctx.stroke();
                break;
                
            case 'animalia':
                // Simplified animal silhouette
                ctx.fillStyle = '#FFB6C1';
                // Body
                ctx.beginPath();
                ctx.ellipse(0, 0, size/2, size/3, 0, 0, Math.PI * 2);
                ctx.fill();
                // Head
                ctx.beginPath();
                ctx.arc(-size/3, -size/4, size/5, 0, Math.PI * 2);
                ctx.fill();
                // Legs
                ctx.strokeStyle = '#E74C3C';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(-size/4, size/3);
                ctx.lineTo(-size/3, size/2);
                ctx.moveTo(size/4, size/3);
                ctx.lineTo(size/3, size/2);
                ctx.stroke();
                break;
        }
        
        ctx.restore();
    }
    
    // ===== CLASSIFICATION DIAGRAM SHAPES =====
    
    static drawClassificationBox(ctx, x, y, width, height, level, name, color) {
        ctx.save();
        
        // Shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(x + 4, y + 4, width, height);
        
        // Main box
        const gradient = ctx.createLinearGradient(x, y, x, y + height);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, this.darkenColor(color, 15));
        
        ctx.fillStyle = gradient;
        ctx.strokeStyle = this.darkenColor(color, 30);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(x, y, width, height, 6);
        ctx.fill();
        ctx.stroke();
        
        // Level label (top)
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(x, y, width, 25);
        
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(level.toUpperCase(), x + width/2, y + 17);
        
        // Name (center)
        ctx.font = 'bold 16px Arial';
        ctx.fillText(name, x + width/2, y + height/2 + 5);
        
        ctx.restore();
    }
    
    static drawConnector(ctx, x1, y1, x2, y2, color = '#7F8C8D') {
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        
        // Curved connector
        const midY = (y1 + y2) / 2;
        ctx.bezierCurveTo(x1, midY, x2, midY, x2, y2);
        
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Arrow
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 - 5, y2 - 8);
        ctx.lineTo(x2 + 5, y2 - 8);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
    }
    
    // ===== COMPARATIVE STRUCTURES =====
    
    static drawHomologousLimb(ctx, x, y, width, height, type) {
        ctx.save();
        ctx.translate(x, y);
        
        const colors = {
            humerus: '#FFB6C1',
            radiusUlna: '#87CEEB',
            carpals: '#90EE90',
            metacarpals: '#FFD700',
            phalanges: '#DDA0DD'
        };
        
        switch(type) {
            case 'human':
                // Arm
                ctx.fillStyle = colors.humerus;
                ctx.fillRect(width * 0.4, 0, width * 0.2, height * 0.35);
                
                ctx.fillStyle = colors.radiusUlna;
                ctx.fillRect(width * 0.35, height * 0.35, width * 0.15, height * 0.35);
                ctx.fillRect(width * 0.52, height * 0.35, width * 0.13, height * 0.35);
                
                ctx.fillStyle = colors.carpals;
                ctx.fillRect(width * 0.35, height * 0.7, width * 0.3, height * 0.1);
                
                ctx.fillStyle = colors.phalanges;
                for(let i = 0; i < 5; i++) {
                    const fingerX = width * (0.35 + i * 0.065);
                    ctx.fillRect(fingerX, height * 0.8, width * 0.05, height * 0.2);
                }
                break;
                
            case 'bat':
                // Wing
                ctx.fillStyle = colors.humerus;
                ctx.fillRect(width * 0.4, 0, width * 0.2, height * 0.25);
                
                ctx.fillStyle = colors.radiusUlna;
                ctx.fillRect(width * 0.35, height * 0.25, width * 0.15, height * 0.25);
                
                ctx.fillStyle = colors.carpals;
                ctx.fillRect(width * 0.35, height * 0.5, width * 0.3, height * 0.08);
                
                // Elongated fingers with membrane
                ctx.fillStyle = 'rgba(139, 69, 19, 0.3)';
                ctx.beginPath();
                ctx.moveTo(width * 0.35, height * 0.58);
                for(let i = 0; i < 5; i++) {
                    const angle = (i / 4) * Math.PI * 0.6;
                    const fingerLength = height * 0.4;
                    ctx.lineTo(
                        width * 0.5 + Math.cos(angle - Math.PI * 0.3) * fingerLength,
                        height * 0.58 + Math.sin(angle - Math.PI * 0.3) * fingerLength
                    );
                }
                ctx.lineTo(width * 0.65, height * 0.58);
                ctx.closePath();
                ctx.fill();
                
                ctx.fillStyle = colors.phalanges;
                for(let i = 0; i < 5; i++) {
                    const angle = (i / 4) * Math.PI * 0.6;
                    const fingerLength = height * 0.4;
                    const startX = width * 0.5;
                    const startY = height * 0.58;
                    const endX = startX + Math.cos(angle - Math.PI * 0.3) * fingerLength;
                    const endY = startY + Math.sin(angle - Math.PI * 0.3) * fingerLength;
                    
                    ctx.beginPath();
                    ctx.moveTo(startX, startY);
                    ctx.lineTo(endX, endY);
                    ctx.lineWidth = 3;
                    ctx.strokeStyle = colors.phalanges;
                    ctx.stroke();
                }
                break;
                
            case 'whale':
                // Flipper
                ctx.fillStyle = colors.humerus;
                ctx.fillRect(width * 0.4, 0, width * 0.2, height * 0.3);
                
                ctx.fillStyle = colors.radiusUlna;
                ctx.fillRect(width * 0.38, height * 0.3, width * 0.24, height * 0.25);
                
                ctx.fillStyle = colors.carpals;
                ctx.fillRect(width * 0.35, height * 0.55, width * 0.3, height * 0.12);
                
                // Flipper outline
                ctx.fillStyle = 'rgba(70, 130, 180, 0.5)';
                ctx.beginPath();
                ctx.ellipse(width * 0.5, height * 0.5, width * 0.4, height * 0.45, 0, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.fillStyle = colors.phalanges;
                for(let i = 0; i < 5; i++) {
                    const fingerX = width * (0.36 + i * 0.06);
                    ctx.fillRect(fingerX, height * 0.67, width * 0.045, height * 0.25);
                }
                break;
                
            case 'bird':
                // Wing
                ctx.fillStyle = colors.humerus;
                ctx.fillRect(width * 0.4, 0, width * 0.2, height * 0.25);
                
                ctx.fillStyle = colors.radiusUlna;
                ctx.save();
                ctx.translate(width * 0.5, height * 0.25);
                ctx.rotate(Math.PI / 6);
                ctx.fillRect(0, 0, width * 0.15, height * 0.3);
                ctx.restore();
                
                // Wing feathers
                ctx.fillStyle = 'rgba(139, 69, 19, 0.4)';
                for(let i = 0; i < 8; i++) {
                    ctx.save();
                    ctx.translate(width * 0.65, height * 0.5);
                    ctx.rotate((i / 8) * Math.PI * 0.4 - Math.PI * 0.2);
                    ctx.fillRect(0, 0, width * 0.4, height * 0.08);
                    ctx.restore();
                }
                
                ctx.fillStyle = colors.carpals;
                ctx.fillRect(width * 0.58, height * 0.48, width * 0.12, height * 0.08);
                break;
        }
        
        ctx.restore();
    }
    
    static drawBacterialShape(ctx, x, y, size, shape, gramStain) {
        ctx.save();
        ctx.translate(x, y);
        
        const color = gramStain === 'positive' ? '#6B3FA0' : '#E91E63';
        
        ctx.fillStyle = color;
        ctx.strokeStyle = this.darkenColor(color, 30);
        ctx.lineWidth = 2;
        
        switch(shape) {
            case 'cocci':
                // Spherical
                ctx.beginPath();
                ctx.arc(0, 0, size/2, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                break;
                
            case 'bacilli':
                // Rod-shaped
                ctx.beginPath();
                ctx.roundRect(-size/2, -size/4, size, size/2, size/8);
                ctx.fill();
                ctx.stroke();
                break;
                
            case 'spirilla':
                // Spiral
                ctx.beginPath();
                for(let i = 0; i < 20; i++) {
                    const t = i / 20;
                    const angle = t * Math.PI * 4;
                    const radius = size * 0.2 * Math.sin(t * Math.PI * 6);
                    const px = (t - 0.5) * size;
                    const py = radius;
                    
                    if(i === 0) ctx.moveTo(px, py);
                    else ctx.lineTo(px, py);
                }
                ctx.lineWidth = size * 0.15;
                ctx.stroke();
                break;
                
            case 'vibrio':
                // Comma-shaped
                ctx.beginPath();
                ctx.arc(0, 0, size/2, Math.PI * 0.7, Math.PI * 1.8);
                ctx.lineWidth = size * 0.2;
                ctx.lineCap = 'round';
                ctx.stroke();
                break;
        }
        
        ctx.restore();
    }
    
    static drawVirusStructure(ctx, x, y, size, type) {
        ctx.save();
        ctx.translate(x, y);
        
        switch(type) {
            case 'helical':
                // Helical structure
                ctx.strokeStyle = '#FF6B6B';
                ctx.lineWidth = 4;
                
                for(let layer = 0; layer < 3; layer++) {
                    ctx.beginPath();
                    for(let i = 0; i < 50; i++) {
                        const t = i / 50;
                        const angle = t * Math.PI * 6 + layer * Math.PI * 2 / 3;
                        const radius = size * 0.2;
                        const px = (t - 0.5) * size * 0.8;
                        const py = radius * Math.sin(angle);
                        
                        if(i === 0) ctx.moveTo(px, py);
                        else ctx.lineTo(px, py);
                    }
                    ctx.stroke();
                }
                break;
                
            case 'icosahedral':
                // 20-sided structure
                ctx.fillStyle = '#4ECDC4';
                ctx.strokeStyle = '#16A085';
                ctx.lineWidth = 2;
                
                ctx.beginPath();
                for(let i = 0; i < 6; i++) {
                    const angle = (i / 6) * Math.PI * 2;
                    const px = Math.cos(angle) * size/2;
                    const py = Math.sin(angle) * size/2;
                    
                    if(i === 0) ctx.moveTo(px, py);
                    else ctx.lineTo(px, py);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                
                // Inner triangles
                for(let i = 0; i < 6; i++) {
                    const angle = (i / 6) * Math.PI * 2;
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.lineTo(Math.cos(angle) * size/2, Math.sin(angle) * size/2);
                    ctx.lineTo(Math.cos(angle + Math.PI/3) * size/2, Math.sin(angle + Math.PI/3) * size/2);
                    ctx.closePath();
                    ctx.stroke();
                }
                break;
                
            case 'complex':
                // Bacteriophage-like
                // Head
                ctx.fillStyle = '#9B59B6';
                ctx.strokeStyle = '#6C3483';
                ctx.lineWidth = 2;
                ctx.beginPath();
                for(let i = 0; i < 6; i++) {
                    const angle = (i / 6) * Math.PI * 2;
                    const px = Math.cos(angle) * size/3;
                    const py = Math.sin(angle) * size/3 - size * 0.3;
                    
                    if(i === 0) ctx.moveTo(px, py);
                    else ctx.lineTo(px, py);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                
                // Tail
                ctx.fillRect(-size * 0.05, 0, size * 0.1, size * 0.3);
                
                // Tail fibers
                for(let i = 0; i < 6; i++) {
                    const angle = (i / 6) * Math.PI * 2;
                    ctx.beginPath();
                    ctx.moveTo(0, size * 0.3);
                    ctx.lineTo(Math.cos(angle) * size/3, size * 0.3 + Math.sin(angle) * size/3);
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }
                break;
        }
        
        ctx.restore();
    }
    
    // ===== UTILITY FUNCTIONS =====
    
    static lightenColor(color, percent) {
        const num = parseInt(color.replace("#",""), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + 
                     (G<255?G<1?0:G:255)*0x100 + 
                     (B<255?B<1?0:B:255)).toString(16).slice(1);
    }
    
    static darkenColor(color, percent) {
        const num = parseInt(color.replace("#",""), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) - amt;
        const G = (num >> 8 & 0x00FF) - amt;
        const B = (num & 0x0000FF) - amt;
        return "#" + (0x1000000 + (R>0?R:0)*0x10000 + 
                     (G>0?G:0)*0x100 + 
                     (B>0?B:0)).toString(16).slice(1);
    }
}

// ============================================================================
// TAXONOMY DIAGRAM RENDERER CLASS
// ============================================================================

class TaxonomyDiagramRenderer {
    constructor(canvas = null) {
        this.defaultFont = 'Arial, sans-serif';
        this.defaultFontSize = 12;
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
        this.currentFrame = 0;
    }

    renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = TaxonomyBiologyRegistry.getDiagram(diagramKey);
        if (!diagram) {
            throw new Error(`Taxonomy diagram '${diagramKey}' not found`);
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
                // ===== PHYLOGENETIC TREES =====
                case 'phylogeneticTree':
                    this.renderPhylogeneticTree(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'cladogram':
                    this.renderCladogram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'dendrogramTree':
                    this.renderDendrogram(centerX, centerY, width * 0.7, height * 0.7, mergedOptions);
                    break;
                
                // ===== TAXONOMIC HIERARCHY =====
                case 'taxonomicHierarchy':
                    this.renderTaxonomicHierarchy(centerX, centerY, width * 0.7, height * 0.8, mergedOptions);
                    break;
                case 'kingdomComparison':
                    this.renderKingdomComparison(centerX, centerY, width * 0.9, height * 0.7, mergedOptions);
                    break;
                case 'threeDomainSystem':
                    this.renderThreeDomainSystem(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                
                // ===== NOMENCLATURE =====
                case 'binomialNomenclature':
                    this.renderBinomialNomenclature(centerX, centerY, width * 0.7, height * 0.6, mergedOptions);
                    break;
                case 'speciesClassification':
                    this.renderSpeciesClassification(centerX, centerY, width * 0.6, height * 0.7, mergedOptions);
                    break;
                
                // ===== ANIMAL CLASSIFICATION =====
                case 'vertebrateClassification':
                    this.renderVertebrateClassification(centerX, centerY, width * 0.9, height * 0.7, mergedOptions);
                    break;
                case 'mammalOrders':
                    this.renderMammalOrders(centerX, centerY, width * 0.85, height * 0.75, mergedOptions);
                    break;
                case 'insectOrders':
                    this.renderInsectOrders(centerX, centerY, width * 0.9, height * 0.75, mergedOptions);
                    break;
                
                // ===== PLANT CLASSIFICATION =====
                case 'plantKingdom':
                    this.renderPlantKingdom(centerX, centerY, width * 0.8, height * 0.75, mergedOptions);
                    break;
                case 'floweringPlantFamilies':
                    this.renderFloweringPlantFamilies(centerX, centerY, width * 0.9, height * 0.75, mergedOptions);
                    break;
                
                // ===== MICROBIAL CLASSIFICATION =====
                case 'bacterialClassification':
                    this.renderBacterialClassification(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'virusClassification':
                    this.renderVirusClassification(centerX, centerY, width * 0.8, height * 0.75, mergedOptions);
                    break;
                case 'fungiClassification':
                    this.renderFungiClassification(centerX, centerY, width * 0.8, height * 0.75, mergedOptions);
                    break;
                
                // ===== EVOLUTIONARY CONCEPTS =====
                case 'convergentEvolution':
                    this.renderConvergentEvolution(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'divergentEvolution':
                    this.renderDivergentEvolution(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'adaptiveRadiation':
                    this.renderAdaptiveRadiation(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                
                // ===== COMPARATIVE BIOLOGY =====
                case 'homologousStructures':
                    this.renderHomologousStructures(centerX, centerY, width * 0.9, height * 0.7, mergedOptions);
                    break;
                case 'analogousStructures':
                    this.renderAnalogousStructures(centerX, centerY, width * 0.9, height * 0.7, mergedOptions);
                    break;
                case 'vestigialStructures':
                    this.renderVestigialStructures(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                
                // ===== BIODIVERSITY =====
                case 'speciesDiversity':
                    this.renderSpeciesDiversity(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'biogeographicRealms':
                    this.renderBiogeographicRealms(centerX, centerY, width * 0.9, height * 0.7, mergedOptions);
                    break;
                
                // ===== IDENTIFICATION TOOLS =====
                case 'dichotomousKey':
                    this.renderDichotomousKey(centerX, centerY, width * 0.7, height * 0.8, mergedOptions);
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

    // ========== PHYLOGENETIC TREE RENDERERS ==========

    renderPhylogeneticTree(x, y, width, height, options) {
        const { showTimeScale, showCommonAncestor, species } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        // Time scale
        if (showTimeScale) {
            this.ctx.strokeStyle = '#7F8C8D';
            this.ctx.lineWidth = 1;
            this.ctx.setLineDash([2, 2]);
            
            for (let i = 0; i <= 4; i++) {
                const yPos = height * 0.8 - (i / 4) * height * 0.7;
                this.ctx.beginPath();
                this.ctx.moveTo(0, yPos);
                this.ctx.lineTo(width, yPos);
                this.ctx.stroke();
                
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.font = '11px Arial';
                this.ctx.textAlign = 'right';
                this.ctx.fillText(`${i * 1000} MYA`, -5, yPos + 4);
            }
            this.ctx.setLineDash([]);
        }

        // Draw tree
        TaxonomyShapes.drawTreeOfLife(this.ctx, 0, 0, width, height);

        // Labels
        this.addLabel('BACTERIA', width * 0.15, height * 0.25, '#FF6B6B');
        this.addLabel('ARCHAEA', width * 0.4, height * 0.15, '#4ECDC4');
        this.addLabel('EUKARYA', width * 0.75, height * 0.05, '#45B7D1');
        
        this.addLabel('Protists', width * 0.65, height * 0.2, '#95E1D3', 'center', '12px');
        this.addLabel('Fungi', width * 0.75, height * 0.15, '#DDA0DD', 'center', '12px');
        this.addLabel('Plants', width * 0.85, height * 0.17, '#90EE90', 'center', '12px');
        this.addLabel('Animals', width * 0.95, height * 0.2, '#FFB6C1', 'center', '12px');

        if (showCommonAncestor) {
            this.ctx.fillStyle = '#34495E';
            this.ctx.beginPath();
            this.ctx.arc(width / 2, height * 0.95, 8, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.addLabel('LUCA\n(Last Universal\nCommon Ancestor)', width / 2, height * 0.98, '#2C3E50');
        }

        this.ctx.restore();
    }

    renderCladogram(x, y, width, height, options) {
        const { clades, showDerivedCharacters } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        // Root
        const rootX = width * 0.1;
        const rootY = height * 0.9;

        this.ctx.strokeStyle = '#34495E';
        this.ctx.lineWidth = 3;

        // Main vertical line
        this.ctx.beginPath();
        this.ctx.moveTo(rootX, rootY);
        this.ctx.lineTo(rootX, height * 0.1);
        this.ctx.stroke();

        // Branching points
        const numClades = clades.length;
        const branchSpacing = height * 0.7 / (numClades - 1);

        for (let i = 0; i < numClades; i++) {
            const branchY = height * 0.2 + i * branchSpacing;
            const endX = width * 0.85;

            // Horizontal branch
            this.ctx.beginPath();
            this.ctx.moveTo(rootX, branchY);
            this.ctx.lineTo(endX, branchY);
            this.ctx.stroke();

            // Node
            TaxonomyShapes.drawCladogramNode(this.ctx, rootX, branchY, 6);

            // Terminal node
            TaxonomyShapes.drawCladogramNode(this.ctx, endX, branchY, 8, false);

            // Label
            this.addLabel(clades[i], endX + 15, branchY + 5, '#2C3E50', 'left');
        }

        if (showDerivedCharacters) {
            const characters = [
                'Vertebral column',
                'Four limbs',
                'Amniotic egg',
                'Hair/Fur',
                'Mammary glands'
            ];

            for (let i = 0; i < Math.min(characters.length, numClades); i++) {
                const charY = height * 0.2 + i * branchSpacing;
                
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.font = 'italic 11px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.fillText(characters[i], rootX + 20, charY - 10);
            }
        }

        this.ctx.restore();
    }

    renderDendrogram(x, y, width, height, options) {
        const { showDistanceScale } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        const species = ['Species A', 'Species B', 'Species C', 'Species D', 'Species E'];
        const spacing = height * 0.8 / (species.length - 1);

        // Draw dendrogram
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;

        // Species lines
        for (let i = 0; i < species.length; i++) {
            const yPos = height * 0.1 + i * spacing;
            
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.7, yPos);
            this.ctx.lineTo(width * 0.9, yPos);
            this.ctx.stroke();

            this.addLabel(species[i], width * 0.92, yPos + 4, '#2C3E50', 'left');
        }

        // Clustering branches
        // Cluster 1: Species A & B
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.65, height * 0.1);
        this.ctx.lineTo(width * 0.7, height * 0.1);
        this.ctx.moveTo(width * 0.7, height * 0.1 + spacing);
        this.ctx.lineTo(width * 0.65, height * 0.1 + spacing);
        this.ctx.moveTo(width * 0.65, height * 0.1);
        this.ctx.lineTo(width * 0.65, height * 0.1 + spacing);
        this.ctx.stroke();

        // Cluster 2: Species C & D
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.55, height * 0.1 + spacing * 2);
        this.ctx.lineTo(width * 0.7, height * 0.1 + spacing * 2);
        this.ctx.moveTo(width * 0.7, height * 0.1 + spacing * 3);
        this.ctx.lineTo(width * 0.55, height * 0.1 + spacing * 3);
        this.ctx.moveTo(width * 0.55, height * 0.1 + spacing * 2);
        this.ctx.lineTo(width * 0.55, height * 0.1 + spacing * 3);
        this.ctx.stroke();

        // Higher level clusters
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.45, height * 0.1 + spacing * 0.5);
        this.ctx.lineTo(width * 0.65, height * 0.1 + spacing * 0.5);
        this.ctx.moveTo(width * 0.45, height * 0.1 + spacing * 2.5);
        this.ctx.lineTo(width * 0.55, height * 0.1 + spacing * 2.5);
        this.ctx.moveTo(width * 0.45, height * 0.1 + spacing * 0.5);
        this.ctx.lineTo(width * 0.45, height * 0.1 + spacing * 2.5);
        this.ctx.stroke();

        // Connect to species E
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.35, height * 0.1 + spacing * 2);
        this.ctx.lineTo(width * 0.45, height * 0.1 + spacing * 2);
        this.ctx.moveTo(width * 0.35, height * 0.1 + spacing * 4);
        this.ctx.lineTo(width * 0.7, height * 0.1 + spacing * 4);
        this.ctx.moveTo(width * 0.35, height * 0.1 + spacing * 2);
        this.ctx.lineTo(width * 0.35, height * 0.1 + spacing * 4);
        this.ctx.stroke();

        if (showDistanceScale) {
            // Distance scale
            this.ctx.strokeStyle = '#7F8C8D';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.1, height * 0.95);
            this.ctx.lineTo(width * 0.3, height * 0.95);
            this.ctx.stroke();

            // Tick marks
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.1, height * 0.93);
            this.ctx.lineTo(width * 0.1, height * 0.97);
            this.ctx.moveTo(width * 0.3, height * 0.93);
            this.ctx.lineTo(width * 0.3, height * 0.97);
            this.ctx.stroke();

            this.addLabel('Genetic Distance', width * 0.2, height * 0.99, '#7F8C8D');
        }

        this.ctx.restore();
    }

    // ========== TAXONOMIC HIERARCHY RENDERERS ==========

    renderTaxonomicHierarchy(x, y, width, height, options) {
        const { example, showAllLevels } = options;

        const hierarchyData = {
            human: [
                { level: 'Domain', name: 'Eukarya', color: '#E74C3C' },
                { level: 'Kingdom', name:'Animalia', color: '#E67E22' },
                { level: 'Phylum', name: 'Chordata', color: '#F39C12' },
                { level: 'Class', name: 'Mammalia', color: '#F1C40F' },
                { level: 'Order', name: 'Primates', color: '#2ECC71' },
                { level: 'Family', name: 'Hominidae', color: '#3498DB' },
                { level: 'Genus', name: 'Homo', color: '#9B59B6' },
                { level: 'Species', name: 'sapiens', color: '#E91E63' }
            ],
            dog: [
                { level: 'Domain', name: 'Eukarya', color: '#E74C3C' },
                { level: 'Kingdom', name: 'Animalia', color: '#E67E22' },
                { level: 'Phylum', name: 'Chordata', color: '#F39C12' },
                { level: 'Class', name: 'Mammalia', color: '#F1C40F' },
                { level: 'Order', name: 'Carnivora', color: '#2ECC71' },
                { level: 'Family', name: 'Canidae', color: '#3498DB' },
                { level: 'Genus', name: 'Canis', color: '#9B59B6' },
                { level: 'Species', name: 'familiaris', color: '#E91E63' }
            ],
            oak: [
                { level: 'Domain', name: 'Eukarya', color: '#E74C3C' },
                { level: 'Kingdom', name: 'Plantae', color: '#E67E22' },
                { level: 'Phylum', name: 'Anthophyta', color: '#F39C12' },
                { level: 'Class', name: 'Magnoliopsida', color: '#F1C40F' },
                { level: 'Order', name: 'Fagales', color: '#2ECC71' },
                { level: 'Family', name: 'Fagaceae', color: '#3498DB' },
                { level: 'Genus', name: 'Quercus', color: '#9B59B6' },
                { level: 'Species', name: 'alba', color: '#E91E63' }
            ],
            eagle: [
                { level: 'Domain', name: 'Eukarya', color: '#E74C3C' },
                { level: 'Kingdom', name: 'Animalia', color: '#E67E22' },
                { level: 'Phylum', name: 'Chordata', color: '#F39C12' },
                { level: 'Class', name: 'Aves', color: '#F1C40F' },
                { level: 'Order', name: 'Accipitriformes', color: '#2ECC71' },
                { level: 'Family', name: 'Accipitridae', color: '#3498DB' },
                { level: 'Genus', name: 'Aquila', color: '#9B59B6' },
                { level: 'Species', name: 'chrysaetos', color: '#E91E63' }
            ]
        };

        const data = hierarchyData[example] || hierarchyData.human;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        const boxHeight = 60;
        const spacing = 15;
        const totalLevels = showAllLevels ? data.length : 5;
        const startY = (height - (totalLevels * boxHeight + (totalLevels - 1) * spacing)) / 2;

        for (let i = 0; i < totalLevels; i++) {
            const level = data[i];
            const boxY = startY + i * (boxHeight + spacing);
            const indent = i * 20;

            TaxonomyShapes.drawHierarchyLevel(
                this.ctx,
                0,
                boxY,
                width - indent,
                boxHeight,
                level.level,
                level.name,
                level.color,
                indent
            );

            // Connector to next level
            if (i < totalLevels - 1) {
                TaxonomyShapes.drawConnector(
                    indent + (width - indent) / 2,
                    boxY + boxHeight,
                    indent + 20 + (width - indent - 20) / 2,
                    boxY + boxHeight + spacing,
                    level.color
                );
            }
        }

        this.ctx.restore();
    }

    renderKingdomComparison(x, y, width, height, options) {
        const { showCharacteristics } = options;

        const kingdoms = [
            { 
                name: 'Monera', 
                color: '#FF6B6B',
                chars: ['Prokaryotic', 'Unicellular', 'No nucleus']
            },
            { 
                name: 'Protista', 
                color: '#4ECDC4',
                chars: ['Eukaryotic', 'Mostly unicellular', 'Diverse']
            },
            { 
                name: 'Fungi', 
                color: '#DDA0DD',
                chars: ['Eukaryotic', 'Heterotrophic', 'Decomposers']
            },
            { 
                name: 'Plantae', 
                color: '#90EE90',
                chars: ['Eukaryotic', 'Autotrophic', 'Cell walls']
            },
            { 
                name: 'Animalia', 
                color: '#FFB6C1',
                chars: ['Eukaryotic', 'Heterotrophic', 'Multicellular']
            }
        ];

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        const boxWidth = width / kingdoms.length - 10;
        const boxHeight = height * 0.6;
        const symbolSize = 60;

        for (let i = 0; i < kingdoms.length; i++) {
            const kingdom = kingdoms[i];
            const boxX = i * (boxWidth + 10);

            // Box
            TaxonomyShapes.drawClassificationBox(
                this.ctx,
                boxX,
                height * 0.15,
                boxWidth,
                boxHeight,
                'Kingdom',
                kingdom.name,
                kingdom.color
            );

            // Symbol
            TaxonomyShapes.drawKingdomSymbol(
                this.ctx,
                boxX + boxWidth / 2,
                height * 0.05,
                symbolSize,
                kingdom.name
            );

            if (showCharacteristics) {
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = '11px Arial';
                this.ctx.textAlign = 'center';

                kingdom.chars.forEach((char, idx) => {
                    this.ctx.fillText(
                        char,
                        boxX + boxWidth / 2,
                        height * 0.8 + idx * 18
                    );
                });
            }
        }

        this.ctx.restore();
    }

    renderThreeDomainSystem(x, y, width, height, options) {
        const { showKingdoms } = options;

        const domains = [
            {
                name: 'BACTERIA',
                color: '#FF6B6B',
                kingdoms: ['Eubacteria']
            },
            {
                name: 'ARCHAEA',
                color: '#4ECDC4',
                kingdoms: ['Archaebacteria']
            },
            {
                name: 'EUKARYA',
                color: '#45B7D1',
                kingdoms: ['Protista', 'Fungi', 'Plantae', 'Animalia']
            }
        ];

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        const domainWidth = width / 3 - 20;
        const domainHeight = height * 0.4;

        for (let i = 0; i < domains.length; i++) {
            const domain = domains[i];
            const domainX = i * (width / 3);

            // Domain box
            TaxonomyShapes.drawClassificationBox(
                this.ctx,
                domainX + 10,
                height * 0.1,
                domainWidth,
                domainHeight,
                'Domain',
                domain.name,
                domain.color
            );

            if (showKingdoms) {
                const kingdomHeight = 50;
                const kingdomSpacing = 10;
                const startY = height * 0.55;

                domain.kingdoms.forEach((kingdom, kidx) => {
                    const kingdomY = startY + kidx * (kingdomHeight + kingdomSpacing);

                    this.ctx.fillStyle = TaxonomyShapes.lightenColor(domain.color, 20);
                    this.ctx.strokeStyle = domain.color;
                    this.ctx.lineWidth = 2;
                    this.ctx.beginPath();
                    this.ctx.roundRect(
                        domainX + 15,
                        kingdomY,
                        domainWidth - 10,
                        kingdomHeight,
                        5
                    );
                    this.ctx.fill();
                    this.ctx.stroke();

                    this.ctx.fillStyle = '#2C3E50';
                    this.ctx.font = 'bold 13px Arial';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText(
                        kingdom,
                        domainX + domainWidth / 2 + 10,
                        kingdomY + kingdomHeight / 2 + 5
                    );
                });

                // Connector
                TaxonomyShapes.drawConnector(
                    domainX + domainWidth / 2 + 10,
                    height * 0.1 + domainHeight,
                    domainX + domainWidth / 2 + 10,
                    startY,
                    domain.color
                );
            }
        }

        this.ctx.restore();
    }

    // ========== NOMENCLATURE RENDERERS ==========

    renderBinomialNomenclature(x, y, width, height, options) {
        const { examples } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        // Explanation box
        this.ctx.fillStyle = '#ECF0F1';
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.05, height * 0.05, width * 0.9, height * 0.25, 10);
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Binomial Nomenclature = Genus + species', width / 2, height * 0.12);

        this.ctx.font = '13px Arial';
        this.ctx.fillText('Format: Genus species (italicized or underlined)', width / 2, height * 0.19);
        this.ctx.fillText('Genus is capitalized, species is lowercase', width / 2, height * 0.24);

        // Examples
        const exampleHeight = 70;
        const startY = height * 0.38;

        examples.forEach((example, idx) => {
            const exY = startY + idx * (exampleHeight + 15);

            // Common name box
            this.ctx.fillStyle = '#3498DB';
            this.ctx.strokeStyle = '#2980B9';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.roundRect(width * 0.05, exY, width * 0.35, exampleHeight, 8);
            this.ctx.fill();
            this.ctx.stroke();

            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Common Name', width * 0.225, exY + 25);
            this.ctx.font = 'bold 18px Arial';
            this.ctx.fillText(example.common, width * 0.225, exY + 50);

            // Scientific name box
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.strokeStyle = '#C0392B';
            this.ctx.beginPath();
            this.ctx.roundRect(width * 0.55, exY, width * 0.4, exampleHeight, 8);
            this.ctx.fill();
            this.ctx.stroke();

            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillText('Scientific Name', width * 0.75, exY + 25);
            this.ctx.font = 'italic bold 18px Arial';
            this.ctx.fillText(example.scientific, width * 0.75, exY + 50);

            // Arrow
            this.drawArrow(
                width * 0.42,
                exY + exampleHeight / 2,
                width * 0.53,
                exY + exampleHeight / 2,
                '#95A5A6'
            );
        });

        this.ctx.restore();
    }

    renderSpeciesClassification(x, y, width, height, options) {
        const { species, showAllLevels } = options;

        // Reuse taxonomicHierarchy renderer
        this.renderTaxonomicHierarchy(x, y, width, height, {
            example: species,
            showAllLevels
        });
    }

    // ========== ANIMAL CLASSIFICATION RENDERERS ==========

    renderVertebrateClassification(x, y, width, height, options) {
        const { showCharacteristics } = options;

        const vertebrates = [
            {
                name: 'Fish',
                color: '#3498DB',
                chars: ['Gills', 'Scales', 'Fins'],
                examples: ['Salmon', 'Shark', 'Tuna']
            },
            {
                name: 'Amphibians',
                color: '#2ECC71',
                chars: ['Moist skin', 'Metamorphosis', 'Aquatic larvae'],
                examples: ['Frog', 'Salamander', 'Newt']
            },
            {
                name: 'Reptiles',
                color: '#E67E22',
                chars: ['Dry scales', 'Amniotic egg', 'Cold-blooded'],
                examples: ['Snake', 'Lizard', 'Turtle']
            },
            {
                name: 'Birds',
                color: '#9B59B6',
                chars: ['Feathers', 'Wings', 'Beak'],
                examples: ['Eagle', 'Parrot', 'Penguin']
            },
            {
                name: 'Mammals',
                color: '#E74C3C',
                chars: ['Hair/fur', 'Mammary glands', 'Warm-blooded'],
                examples: ['Human', 'Dog', 'Whale']
            }
        ];

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        const boxWidth = width / vertebrates.length - 8;
        const boxHeight = height * 0.5;

        for (let i = 0; i < vertebrates.length; i++) {
            const vert = vertebrates[i];
            const boxX = i * (boxWidth + 8);

            TaxonomyShapes.drawClassificationBox(
                this.ctx,
                boxX,
                height * 0.1,
                boxWidth,
                boxHeight,
                'Class',
                vert.name,
                vert.color
            );

            if (showCharacteristics) {
                const charStartY = height * 0.65;

                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 11px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Characteristics:', boxX + boxWidth / 2, charStartY);

                this.ctx.font = '10px Arial';
                vert.chars.forEach((char, cidx) => {
                    this.ctx.fillText(
                        '• ' + char,
                        boxX + boxWidth / 2,
                        charStartY + 15 + cidx * 13
                    );
                });

                const exStartY = height * 0.85;
                this.ctx.font = 'bold 10px Arial';
                this.ctx.fillText('Examples:', boxX + boxWidth / 2, exStartY);

                this.ctx.font = '9px Arial';
                this.ctx.fillText(
                    vert.examples.join(', '),
                    boxX + boxWidth / 2,
                    exStartY + 12
                );
            }
        }

        this.ctx.restore();
    }

    renderMammalOrders(x, y, width, height, options) {
        const { showExamples } = options;

        const orders = [
            { name: 'Primates', examples: ['Humans', 'Monkeys', 'Lemurs'], color: '#E74C3C' },
            { name: 'Carnivora', examples: ['Lions', 'Bears', 'Seals'], color: '#E67E22' },
            { name: 'Rodentia', examples: ['Mice', 'Squirrels', 'Beavers'], color: '#F39C12' },
            { name: 'Chiroptera', examples: ['Bats'], color: '#F1C40F' },
            { name: 'Cetacea', examples: ['Whales', 'Dolphins'], color: '#3498DB' },
            { name: 'Artiodactyla', examples: ['Deer', 'Pigs', 'Cattle'], color: '#2ECC71' },
            { name: 'Perissodactyla', examples: ['Horses', 'Rhinos'], color: '#1ABC9C' },
            { name: 'Proboscidea', examples: ['Elephants'], color: '#9B59B6' }
        ];

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        const cols = 4;
        const rows = Math.ceil(orders.length / cols);
        const boxWidth = width / cols - 15;
        const boxHeight = height / rows - 15;

        orders.forEach((order, idx) => {
            const col = idx % cols;
            const row = Math.floor(idx / cols);
            const boxX = col * (boxWidth + 15) + 10;
            const boxY = row * (boxHeight + 15) + 10;

            TaxonomyShapes.drawClassificationBox(
                this.ctx,
                boxX,
                boxY,
                boxWidth,
                boxHeight,
                'Order',
                order.name,
                order.color
            );

            if (showExamples) {
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.font = '10px Arial';
                this.ctx.textAlign = 'center';

                const exampleText = order.examples.join(', ');
                const maxWidth = boxWidth - 20;
                const words = exampleText.split(' ');
                let line = '';
                let lineY = boxY + boxHeight - 25;

                words.forEach(word => {
                    const testLine = line + word + ' ';
                    const metrics = this.ctx.measureText(testLine);
                    
                    if (metrics.width > maxWidth && line !== '') {
                        this.ctx.fillText(line, boxX + boxWidth / 2, lineY);
                        line = word + ' ';
                        lineY += 12;
                    } else {
                        line = testLine;
                    }
                });
                this.ctx.fillText(line, boxX + boxWidth / 2, lineY);
            }
        });

        this.ctx.restore();
    }

    renderInsectOrders(x, y, width, height, options) {
        const { showExamples } = options;

        const orders = [
            { name: 'Coleoptera', common: 'Beetles', examples: ['Ladybugs', 'Fireflies'], color: '#8B4513' },
            { name: 'Lepidoptera', common: 'Butterflies/Moths', examples: ['Monarch', 'Luna Moth'], color: '#FF69B4' },
            { name: 'Hymenoptera', common: 'Ants/Bees/Wasps', examples: ['Honeybee', 'Fire Ant'], color: '#FFD700' },
            { name: 'Diptera', common: 'Flies', examples: ['Housefly', 'Mosquito'], color: '#696969' },
            { name: 'Hemiptera', common: 'True Bugs', examples: ['Aphids', 'Stink bugs'], color: '#90EE90' },
            { name: 'Orthoptera', common: 'Grasshoppers', examples: ['Cricket', 'Locust'], color: '#9ACD32' },
            { name: 'Odonata', common: 'Dragonflies', examples: ['Damselfly', 'Dragonfly'], color: '#1E90FF' },
            { name: 'Blattodea', common: 'Cockroaches', examples: ['Termites', 'Roaches'], color: '#A0522D' }
        ];

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        const cols = 4;
        const rows = 2;
        const boxWidth = width / cols - 12;
        const boxHeight = height / rows - 12;

        orders.forEach((order, idx) => {
            const col = idx % cols;
            const row = Math.floor(idx / cols);
            const boxX = col * (boxWidth + 12) + 5;
            const boxY = row * (boxHeight + 12) + 5;

            TaxonomyShapes.drawClassificationBox(
                this.ctx,
                boxX,
                boxY,
                boxWidth,
                boxHeight,
                'Order',
                order.name,
                order.color
            );

            // Common name
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(order.common, boxX + boxWidth / 2, boxY + boxHeight / 2 + 15);

            if (showExamples) {
                this.ctx.fillStyle = '#ECF0F1';
                this.ctx.font = '9px Arial';
                this.ctx.fillText(
                    order.examples.join(', '),
                    boxX + boxWidth / 2,
                    boxY + boxHeight - 15
                );
            }
        });

        this.ctx.restore();
    }

    // ========== PLANT CLASSIFICATION RENDERERS ==========

    renderPlantKingdom(x, y, width, height, options) {
        const { showCharacteristics } = options;

        const divisions = [
            {
                name: 'Bryophytes',
                common: 'Mosses',
                chars: ['No vascular tissue', 'Require water', 'Small'],
                color: '#27AE60'
            },
            {
                name: 'Pteridophytes',
                common: 'Ferns',
                chars: ['Vascular tissue', 'Spores', 'No seeds'],
                color: '#2ECC71'
            },
            {
                name: 'Gymnosperms',
                common: 'Conifers',
                chars: ['Naked seeds', 'Cones', 'Needle leaves'],
                color: '#16A085'
            },
            {
                name: 'Angiosperms',
                common: 'Flowering Plants',
                chars: ['Flowers', 'Fruits', 'Seeds in ovary'],
                color: '#FF69B4'
            }
        ];

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        const boxWidth = width / divisions.length - 15;
        const boxHeight = height * 0.5;

        divisions.forEach((div, idx) => {
            const boxX = idx * (boxWidth + 15) + 5;

            TaxonomyShapes.drawClassificationBox(
                this.ctx,
                boxX,
                height * 0.1,
                boxWidth,
                boxHeight,
                'Division',
                div.name,
                div.color
            );

            // Common name
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'italic 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(div.common, boxX + boxWidth / 2, height * 0.1 + boxHeight - 15);

            if (showCharacteristics) {
                const charStartY = height * 0.67;

                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 11px Arial';
                this.ctx.fillText('Key Features:', boxX + boxWidth / 2, charStartY);

                this.ctx.font = '10px Arial';
                div.chars.forEach((char, cidx) => {
                    this.ctx.fillText(
                        '• ' + char,
                        boxX + boxWidth / 2,
                        charStartY + 15 + cidx * 14
                    );
                });
            }
        });

        this.ctx.restore();
    }

    renderFloweringPlantFamilies(x, y, width, height, options) {
        const { showExamples } = options;

        const families = [
            { name: 'Rosaceae', common: 'Rose Family', examples: ['Roses', 'Apples', 'Strawberries'], color: '#FF1493' },
            { name: 'Fabaceae', common: 'Legume Family', examples: ['Beans', 'Peas', 'Peanuts'], color: '#32CD32' },
            { name: 'Asteraceae', common: 'Daisy Family', examples: ['Sunflowers', 'Daisies', 'Lettuce'], color: '#FFD700' },
            { name: 'Poaceae', common: 'Grass Family', examples: ['Wheat', 'Rice', 'Corn'], color: '#9ACD32' },
            { name: 'Solanaceae', common: 'Nightshade Family', examples: ['Tomatoes', 'Potatoes', 'Peppers'], color: '#8B4513' },
            { name: 'Brassicaceae', common: 'Mustard Family', examples: ['Cabbage', 'Broccoli', 'Radish'], color: '#ADFF2F' }
        ];

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        const cols = 3;
        const rows = 2;
        const boxWidth = width / cols - 15;
        const boxHeight = height / rows - 15;

        families.forEach((family, idx) => {
            const col = idx % cols;
            const row = Math.floor(idx / cols);
            const boxX = col * (boxWidth + 15) + 5;
            const boxY = row * (boxHeight + 15) + 5;

            TaxonomyShapes.drawClassificationBox(
                this.ctx,
                boxX,
                boxY,
                boxWidth,
                boxHeight,
                'Family',
                family.name,
                family.color
            );

            // Common name
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'italic bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(family.common, boxX + boxWidth / 2, boxY + boxHeight / 2 + 15);

            if (showExamples) {
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                this.ctx.font = '10px Arial';
                this.ctx.fillText(
                    family.examples.join(', '),
                    boxX + boxWidth / 2,
                    boxY + boxHeight - 15
                );
            }
        });

        this.ctx.restore();
    }

    // ========== MICROBIAL CLASSIFICATION RENDERERS ==========

    renderBacterialClassification(x, y, width, height, options) {
        const { showShapes, showGramStain } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        // Title sections
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';

        if (showShapes) {
            this.ctx.fillText('Classification by Shape', width * 0.25, height * 0.05);
        }

        if (showGramStain) {
            this.ctx.fillText('Classification by Gram Stain', width * 0.75, height * 0.05);
        }

        // Shapes section
        if (showShapes) {
            const shapes = [
                { name: 'Cocci', type: 'cocci', description: '(Spherical)' },
                { name: 'Bacilli', type: 'bacilli', description: '(Rod-shaped)' },
                { name: 'Spirilla', type: 'spirilla', description: '(Spiral)' },
                { name: 'Vibrio', type: 'vibrio', description: '(Comma-shaped)' }
            ];

            shapes.forEach((shape, idx) => {
                const shapeY = height * (0.15 + idx * 0.2);

                TaxonomyShapes.drawBacterialShape(
                    this.ctx,
                    width * 0.15,
                    shapeY,
                    60,
                    shape.type,
                    'positive'
                );

                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.fillText(shape.name, width * 0.22, shapeY + 5);

                this.ctx.font = '12px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.fillText(shape.description, width * 0.22, shapeY + 22);
            });
        }

        // Gram stain section
        if (showGramStain) {
            const gramTypes = [
                {
                    name: 'Gram Positive',
                    stain: 'positive',
                    color: '#6B3FA0',
                    chars: ['Thick peptidoglycan', 'Retains crystal violet', 'Purple color']
                },
                {
                    name:'Gram Negative',
                    stain: 'negative',
                    color: '#E91E63',
                    chars: ['Thin peptidoglycan', 'Does not retain stain', 'Pink/red color']
                }
            ];

            gramTypes.forEach((gram, idx) => {
                const gramY = height * (0.25 + idx * 0.35);

                // Box
                this.ctx.fillStyle = TaxonomyShapes.lightenColor(gram.color, 40);
                this.ctx.strokeStyle = gram.color;
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.roundRect(width * 0.55, gramY, width * 0.4, height * 0.25, 10);
                this.ctx.fill();
                this.ctx.stroke();

                // Title
                this.ctx.fillStyle = gram.color;
                this.ctx.font = 'bold 15px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(gram.name, width * 0.75, gramY + 25);

                // Example bacteria
                TaxonomyShapes.drawBacterialShape(
                    this.ctx,
                    width * 0.65,
                    gramY + 60,
                    50,
                    'bacilli',
                    gram.stain
                );

                // Characteristics
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = '11px Arial';
                this.ctx.textAlign = 'left';

                gram.chars.forEach((char, cidx) => {
                    this.ctx.fillText(
                        '• ' + char,
                        width * 0.58,
                        gramY + 100 + cidx * 15
                    );
                });
            });
        }

        this.ctx.restore();
    }

    renderVirusClassification(x, y, width, height, options) {
        const { showStructure } = options;

        const virusTypes = [
            {
                name: 'Class I',
                description: 'dsDNA viruses',
                structure: 'icosahedral',
                examples: ['Adenovirus', 'Herpesvirus'],
                color: '#E74C3C'
            },
            {
                name: 'Class II',
                description: 'ssDNA viruses',
                structure: 'icosahedral',
                examples: ['Parvovirus'],
                color: '#E67E22'
            },
            {
                name: 'Class III',
                description: 'dsRNA viruses',
                structure: 'icosahedral',
                examples: ['Reovirus'],
                color: '#F39C12'
            },
            {
                name: 'Class IV',
                description: '(+)ssRNA viruses',
                structure: 'helical',
                examples: ['Coronavirus', 'Poliovirus'],
                color: '#F1C40F'
            },
            {
                name: 'Class V',
                description: '(-)ssRNA viruses',
                structure: 'helical',
                examples: ['Influenza', 'Ebola'],
                color: '#2ECC71'
            },
            {
                name: 'Class VI',
                description: 'ssRNA-RT viruses',
                structure: 'complex',
                examples: ['HIV', 'HTLV'],
                color: '#3498DB'
            },
            {
                name: 'Class VII',
                description: 'dsDNA-RT viruses',
                structure: 'complex',
                examples: ['Hepatitis B'],
                color: '#9B59B6'
            }
        ];

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Baltimore Classification System', width / 2, height * 0.05);

        const cols = 4;
        const rows = 2;
        const boxWidth = width / cols - 12;
        const boxHeight = height / rows - 40;

        virusTypes.forEach((virus, idx) => {
            const col = idx % cols;
            const row = Math.floor(idx / cols);
            const boxX = col * (boxWidth + 12) + 5;
            const boxY = height * 0.1 + row * (boxHeight + 40);

            TaxonomyShapes.drawClassificationBox(
                this.ctx,
                boxX,
                boxY,
                boxWidth,
                boxHeight,
                virus.name,
                virus.description,
                virus.color
            );

            if (showStructure) {
                // Virus structure illustration
                TaxonomyShapes.drawVirusStructure(
                    this.ctx,
                    boxX + boxWidth / 2,
                    boxY + boxHeight + 30,
                    50,
                    virus.structure
                );
            }

            // Examples
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.font = '9px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(
                virus.examples.join(', '),
                boxX + boxWidth / 2,
                boxY + boxHeight + 65
            );
        });

        this.ctx.restore();
    }

    renderFungiClassification(x, y, width, height, options) {
        const { showExamples } = options;

        const phyla = [
            {
                name: 'Chytridiomycota',
                common: 'Chytrids',
                chars: ['Aquatic', 'Flagellated spores', 'Primitive'],
                examples: ['Batrachochytrium'],
                color: '#16A085'
            },
            {
                name: 'Zygomycota',
                common: 'Zygomycetes',
                chars: ['Sexual zygospores', 'Fast growing', 'No septa'],
                examples: ['Bread mold', 'Rhizopus'],
                color: '#27AE60'
            },
            {
                name: 'Ascomycota',
                common: 'Sac Fungi',
                chars: ['Ascus (sac)', 'Sexual ascospores', 'Septate hyphae'],
                examples: ['Yeasts', 'Morels', 'Truffles'],
                color: '#9B59B6'
            },
            {
                name: 'Basidiomycota',
                common: 'Club Fungi',
                chars: ['Basidium (club)', 'Mushrooms', 'Septate hyphae'],
                examples: ['Mushrooms', 'Puffballs', 'Rusts'],
                color: '#8B4513'
            }
        ];

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        const boxWidth = width / 2 - 20;
        const boxHeight = height / 2 - 20;

        phyla.forEach((phylum, idx) => {
            const col = idx % 2;
            const row = Math.floor(idx / 2);
            const boxX = col * (boxWidth + 20) + 10;
            const boxY = row * (boxHeight + 20) + 10;

            TaxonomyShapes.drawClassificationBox(
                this.ctx,
                boxX,
                boxY,
                boxWidth,
                boxHeight,
                'Phylum',
                phylum.name,
                phylum.color
            );

            // Common name
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'italic bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(phylum.common, boxX + boxWidth / 2, boxY + 65);

            // Characteristics
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '11px Arial';
            const charStartY = boxY + 90;

            phylum.chars.forEach((char, cidx) => {
                this.ctx.fillText(
                    '• ' + char,
                    boxX + boxWidth / 2,
                    charStartY + cidx * 15
                );
            });

            if (showExamples) {
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.font = 'italic 10px Arial';
                this.ctx.fillText(
                    'Examples: ' + phylum.examples.join(', '),
                    boxX + boxWidth / 2,
                    boxY + boxHeight - 15
                );
            }
        });

        this.ctx.restore();
    }

    // ========== EVOLUTIONARY CONCEPTS RENDERERS ==========

    renderConvergentEvolution(x, y, width, height, options) {
        const { showExamples } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        // Title and explanation
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Similar traits evolve independently in unrelated species', width / 2, height * 0.08);

        // Two separate lineages converging to similar form
        const startY = height * 0.2;
        const endY = height * 0.6;
        const middleX = width / 2;

        // Left lineage (birds)
        this.ctx.strokeStyle = '#9B59B6';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.2, startY);
        this.ctx.quadraticCurveTo(width * 0.3, height * 0.4, width * 0.4, endY);
        this.ctx.stroke();

        // Right lineage (insects)
        this.ctx.strokeStyle = '#E67E22';
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.8, startY);
        this.ctx.quadraticCurveTo(width * 0.7, height * 0.4, width * 0.6, endY);
        this.ctx.stroke();

        // Labels
        this.addLabel('Birds\n(Vertebrates)', width * 0.2, startY - 20, '#9B59B6');
        this.addLabel('Insects\n(Arthropods)', width * 0.8, startY - 20, '#E67E22');

        // Convergent trait
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.strokeStyle = '#C0392B';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(middleX, endY + 40, 50, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillText('WINGS', middleX, endY + 35);
        this.ctx.font = '12px Arial';
        this.ctx.fillText('(for flight)', middleX, endY + 50);

        if (showExamples) {
            const examplesY = height * 0.85;
            
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.fillText('Other Examples:', width / 2, examplesY);

            this.ctx.font = '12px Arial';
            this.ctx.fillText('• Streamlined bodies in sharks (fish) and dolphins (mammals)', width / 2, examplesY + 20);
            this.ctx.fillText('• Eyes in vertebrates and cephalopods (octopus)', width / 2, examplesY + 38);
        }

        this.ctx.restore();
    }

    renderDivergentEvolution(x, y, width, height, options) {
        const { showExamples } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        // Title and explanation
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Different traits evolve from a common ancestor', width / 2, height * 0.08);

        // Common ancestor
        const ancestorY = height * 0.25;
        this.ctx.fillStyle = '#3498DB';
        this.ctx.strokeStyle = '#2980B9';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(width / 2, ancestorY, 40, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText('Common', width / 2, ancestorY - 5);
        this.ctx.fillText('Ancestor', width / 2, ancestorY + 10);

        // Diverging lineages
        const branches = [
            { x: 0.15, name: 'Human\nArm', color: '#E74C3C' },
            { x: 0.35, name: 'Bat\nWing', color: '#E67E22' },
            { x: 0.65, name: 'Whale\nFlipper', color: '#F39C12' },
            { x: 0.85, name: 'Bird\nWing', color: '#9B59B6' }
        ];

        branches.forEach((branch) => {
            const branchX = width * branch.x;
            const branchY = height * 0.7;

            // Branch line
            this.ctx.strokeStyle = branch.color;
            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            this.ctx.moveTo(width / 2, ancestorY + 40);
            this.ctx.quadraticCurveTo(
                width / 2,
                height * 0.45,
                branchX,
                branchY
            );
            this.ctx.stroke();

            // End node
            this.ctx.fillStyle = branch.color;
            this.ctx.beginPath();
            this.ctx.arc(branchX, branchY, 30, 0, Math.PI * 2);
            this.ctx.fill();

            // Label
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 11px Arial';
            const lines = branch.name.split('\n');
            lines.forEach((line, idx) => {
                this.ctx.fillText(line, branchX, branchY - 5 + idx * 13);
            });
        });

        if (showExamples) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '12px Arial';
            this.ctx.fillText(
                'Homologous structures: Same origin, different functions',
                width / 2,
                height * 0.92
            );
        }

        this.ctx.restore();
    }

    renderAdaptiveRadiation(x, y, width, height, options) {
        const { showTimeScale } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        // Title
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Rapid diversification into multiple new forms', width / 2, height * 0.08);

        // Time scale
        if (showTimeScale) {
            this.ctx.strokeStyle = '#BDC3C7';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.1, height * 0.2);
            this.ctx.lineTo(width * 0.1, height * 0.8);
            this.ctx.stroke();

            // Time markers
            const timePoints = ['Present', '1 MYA', '2 MYA', '3 MYA'];
            timePoints.forEach((time, idx) => {
                const markerY = height * (0.2 + idx * 0.2);
                
                this.ctx.beginPath();
                this.ctx.moveTo(width * 0.08, markerY);
                this.ctx.lineTo(width * 0.12, markerY);
                this.ctx.stroke();

                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.font = '10px Arial';
                this.ctx.textAlign = 'right';
                this.ctx.fillText(time, width * 0.07, markerY + 4);
            });
        }

        // Ancestral population
        const ancestorX = width * 0.2;
        const ancestorY = height * 0.7;

        this.ctx.fillStyle = '#3498DB';
        this.ctx.beginPath();
        this.ctx.arc(ancestorX, ancestorY, 35, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Ancestral', ancestorX, ancestorY - 5);
        this.ctx.fillText('Species', ancestorX, ancestorY + 10);

        // Radiation event (burst)
        const radiationY = height * 0.5;
        
        this.ctx.strokeStyle = '#F39C12';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(ancestorX, ancestorY);
        this.ctx.lineTo(ancestorX, radiationY);
        this.ctx.stroke();

        // Radiation burst symbol
        this.ctx.fillStyle = '#F39C12';
        this.ctx.beginPath();
        ctx.moveTo(ancestorX, radiationY - 15);
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const r = i % 2 === 0 ? 15 : 8;
            this.ctx.lineTo(
                ancestorX + Math.cos(angle - Math.PI / 2) * r,
                radiationY - 15 + Math.sin(angle - Math.PI / 2) * r
            );
        }
        this.ctx.closePath();
        this.ctx.fill();

        // Diversified species
        const species = [
            { name: 'Species A\n(ground)', color: '#E74C3C', x: 0.35, y: 0.2 },
            { name: 'Species B\n(tree)', color: '#E67E22', x: 0.5, y: 0.15 },
            { name: 'Species C\n(cactus)', color: '#F1C40F', x: 0.65, y: 0.18 },
            { name: 'Species D\n(insect)', color: '#2ECC71', x: 0.8, y: 0.22 },
            { name: 'Species E\n(seed)', color: '#9B59B6', x: 0.9, y: 0.28 }
        ];

        species.forEach((sp) => {
            const spX = width * sp.x;
            const spY = height * sp.y;

            // Branch
            this.ctx.strokeStyle = sp.color;
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(ancestorX, radiationY - 15);
            this.ctx.quadraticCurveTo(
                ancestorX + (spX - ancestorX) * 0.3,
                radiationY - 50,
                spX,
                spY
            );
            this.ctx.stroke();

            // Species node
            this.ctx.fillStyle = sp.color;
            this.ctx.beginPath();
            this.ctx.arc(spX, spY, 25, 0, Math.PI * 2);
            this.ctx.fill();

            // Label
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 9px Arial';
            this.ctx.textAlign = 'center';
            const lines = sp.name.split('\n');
            lines.forEach((line, idx) => {
                this.ctx.fillText(line, spX, spY - 5 + idx * 11);
            });
        });

        // Example label
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'italic 12px Arial';
        this.ctx.fillText(
            'Example: Darwin\'s Finches on Galápagos Islands',
            width / 2,
            height * 0.92
        );

        this.ctx.restore();
    }

    // ========== COMPARATIVE BIOLOGY RENDERERS ==========

    renderHomologousStructures(x, y, width, height, options) {
        const { structures } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        // Title
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Homologous Structures: Same Origin, Different Functions', width / 2, height * 0.05);

        const limbWidth = width / structures.length - 20;
        const limbHeight = height * 0.7;

        structures.forEach((structure, idx) => {
            const limbX = idx * (limbWidth + 20) + 10;
            const limbY = height * 0.15;

            // Draw limb
            const limbType = structure.toLowerCase().includes('human') ? 'human' :
                            structure.toLowerCase().includes('bat') ? 'bat' :
                            structure.toLowerCase().includes('whale') ? 'whale' : 'bird';

            TaxonomyShapes.drawHomologousLimb(
                this.ctx,
                limbX,
                limbY,
                limbWidth,
                limbHeight,
                limbType
            );

            // Label
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(structure, limbX + limbWidth / 2, limbY - 10);
        });

        // Legend
        this.drawLegend(width * 0.05, height * 0.9, [
            { color: '#FFB6C1', label: 'Humerus' },
            { color: '#87CEEB', label: 'Radius/Ulna' },
            { color: '#90EE90', label: 'Carpals' },
            { color: '#DDA0DD', label: 'Phalanges' }
        ]);

        // Conclusion
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.font = 'italic 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(
            'Evidence of common ancestry through similar bone structures',
            width / 2,
            height * 0.98
        );

        this.ctx.restore();
    }

    renderAnalogousStructures(x, y, width, height, options) {
        const { structures } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        // Title
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Analogous Structures: Similar Function, Different Origin', width / 2, height * 0.05);

        const examples = [
            {
                name: 'Bird Wing',
                description: 'Bones covered\nwith feathers',
                color: '#9B59B6',
                origin: 'Vertebrate forelimb'
            },
            {
                name: 'Insect Wing',
                description: 'Chitinous\nmembrane',
                color: '#E67E22',
                origin: 'Outgrowth of exoskeleton'
            },
            {
                name: 'Bat Wing',
                description: 'Membrane between\nelongated fingers',
                color: '#8B4513',
                origin: 'Modified mammal limb'
            }
        ];

        const boxWidth = width / 3 - 20;
        const boxHeight = height * 0.35;

        examples.forEach((ex, idx) => {
            const boxX = idx * (boxWidth + 20) + 10;
            const boxY = height * 0.15;

            // Box
            this.ctx.fillStyle = TaxonomyShapes.lightenColor(ex.color, 40);
            this.ctx.strokeStyle = ex.color;
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.roundRect(boxX, boxY, boxWidth, boxHeight, 10);
            this.ctx.fill();
            this.ctx.stroke();

            // Name
            this.ctx.fillStyle = ex.color;
            this.ctx.font = 'bold 15px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(ex.name, boxX + boxWidth / 2, boxY + 30);

            // Description
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '12px Arial';
            const lines = ex.description.split('\n');
            lines.forEach((line, lidx) => {
                this.ctx.fillText(line, boxX + boxWidth / 2, boxY + 55 + lidx * 16);
            });

            // Origin box
            const originY = boxY + boxHeight + 20;
            this.ctx.fillStyle = '#ECF0F1';
            this.ctx.strokeStyle = '#BDC3C7';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.roundRect(boxX, originY, boxWidth, 60, 8);
            this.ctx.fill();
            this.ctx.stroke();

            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.font = 'bold 11px Arial';
            this.ctx.fillText('Origin:', boxX + boxWidth / 2, originY + 20);
            
            this.ctx.font = '11px Arial';
            this.ctx.fillText(ex.origin, boxX + boxWidth / 2, originY + 40);
        });

        // Common function
        const functionY = height * 0.78;
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.strokeStyle = '#C0392B';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.25, functionY, width * 0.5, 70, 12);
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillText('COMMON FUNCTION', width / 2, functionY + 30);
        this.ctx.font = '14px Arial';
        this.ctx.fillText('Flight / Powered Movement in Air', width / 2, functionY + 52);

        this.ctx.restore();
    }

    renderVestigialStructures(x, y, width, height, options) {
        const { showExamples } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        // Title
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Vestigial Structures: Reduced or Non-Functional Remnants', width / 2, height * 0.05);

        const examples = [
            {
                organism: 'Humans',
                structure: 'Appendix',
                function: 'Reduced digestive organ',
                ancestral: 'Used for digesting cellulose',
                color: '#E74C3C'
            },
            {
                organism: 'Whales',
                structure: 'Pelvic bones',
                function: 'No longer support limbs',
                ancestral: 'Supported hind legs',
                color: '#3498DB'
            },
            {
                organism: 'Snakes',
                structure: 'Leg bones',
                function: 'Tiny remnants inside body',
                ancestral: 'Functional limbs',
                color: '#2ECC71'
            },
            {
                organism: 'Flightless Birds',
                structure: 'Wings',
                function: 'Too small for flight',
                ancestral: 'Used for flying',
                color: '#F39C12'
            }
        ];

        const boxWidth = width / 2 - 25;
        const boxHeight = height * 0.35;

        examples.forEach((ex, idx) => {
            const col = idx % 2;
            const row = Math.floor(idx / 2);
            const boxX = col * (boxWidth + 25) + 15;
            const boxY = height * 0.15 + row * (boxHeight + 30);

            // Main box
            this.ctx.fillStyle = TaxonomyShapes.lightenColor(ex.color, 45);
            this.ctx.strokeStyle = ex.color;
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.roundRect(boxX, boxY, boxWidth, boxHeight, 10);
            this.ctx.fill();
            this.ctx.stroke();

            // Header
            this.ctx.fillStyle = ex.color;
            this.ctx.fillRect(boxX, boxY, boxWidth, 35);

            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 15px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(ex.organism, boxX + boxWidth / 2, boxY + 23);

            // Structure name
            this.ctx.fillStyle = ex.color;
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillText(ex.structure, boxX + boxWidth / 2, boxY + 60);

            // Current function
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '12px Arial';
            this.ctx.fillText('Current: ' + ex.function, boxX + boxWidth / 2, boxY + 85);

            // Ancestral function
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.font = 'italic 11px Arial';
            this.ctx.fillText('Ancestral: ' + ex.ancestral, boxX + boxWidth / 2, boxY + 105);
        });

        // Conclusion
        const conclusionY = height * 0.88;
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.strokeStyle = '#C0392B';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.1, conclusionY, width * 0.8, 50, 10);
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Evidence of Evolution', width / 2, conclusionY + 20);
        this.ctx.font = '11px Arial';
        this.ctx.fillText('Structures retained from ancestors that no longer serve original purpose', width / 2, conclusionY + 38);

        this.ctx.restore();
    }

    // ========== BIODIVERSITY RENDERERS ==========

    renderSpeciesDiversity(x, y, width, height, options) {
        const { showMetrics } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        // Title
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Components of Species Diversity', width / 2, height * 0.05);

        // Three components
        const components = [
            {
                name: 'Species Richness',
                definition: 'Number of different species',
                example: 'Forest A: 50 species\nForest B: 30 species',
                color: '#E74C3C'
            },
            {
                name: 'Species Evenness',
                definition: 'Relative abundance of species',
                example: 'Even: 10 of each species\nUneven: 90 of one, 1 of others',
                color: '#3498DB'
            },
            {
                name: 'Species Diversity',
                definition: 'Richness + Evenness combined',
                example: 'High: Many species, evenly distributed\nLow: Few species or dominated by one',
                color: '#2ECC71'
            }
        ];

        const boxWidth = width / 3 - 20;
        const boxHeight = height * 0.5;

        components.forEach((comp, idx) => {
            const boxX = idx * (boxWidth + 20) + 10;
            const boxY = height * 0.15;

            // Box
            TaxonomyShapes.drawClassificationBox(
                this.ctx,
                boxX,
                boxY,
                boxWidth,
                boxHeight,
                'Component ' + (idx + 1),
                comp.name,
                comp.color
            );

            // Definition
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(comp.definition, boxX + boxWidth / 2, boxY + boxHeight - 80);

            // Example
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.font = '10px Arial';
            const exLines = comp.example.split('\n');
            exLines.forEach((line, lidx) => {
                this.ctx.fillText(line, boxX + boxWidth / 2, boxY + boxHeight - 50 + lidx * 13);
            });
        });

        if (showMetrics) {
            // Diversity indices
            const metricsY = height * 0.7;

            this.ctx.fillStyle = '#ECF0F1';
            this.ctx.strokeStyle = '#BDC3C7';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.roundRect(width * 0.1, metricsY, width * 0.8, height * 0.22, 10);
            this.ctx.fill();
            this.ctx.stroke();

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Common Diversity Indices', width / 2, metricsY + 25);

            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('• Shannon Index (H\') - accounts for richness and evenness', width * 0.15, metricsY + 50);
            this.ctx.fillText('• Simpson Index (D) - probability two random individuals are same species', width * 0.15, metricsY + 70);
            this.ctx.fillText('• Species Richness (S) - simple count of species present', width * 0.15, metricsY + 90);
        }

        this.ctx.restore();
    }

    renderBiogeographicRealms(x, y, width, height, options) {
        const { showMap } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        // Title
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Biogeographic Realms (Major Biotic Regions)', width / 2, height * 0.05);

        const realms = [
            { name: 'Nearctic', region: 'North America', color: '#E74C3C', examples: ['Grizzly bear', 'Bald eagle'] },
            { name: 'Palearctic', region: 'Europe & N. Asia', color: '#E67E22', examples: ['Red fox', 'Brown bear'] },
            { name: 'Neotropical', region: 'Central & S. America', color: '#F39C12', examples: ['Jaguar', 'Toucan'] },
            { name: 'Afrotropical', region: 'Sub-Saharan Africa', color: '#2ECC71', examples: ['Lion', 'Elephant'] },
            { name: 'Indomalayan', region: 'S. & SE Asia', color: '#3498DB', examples: ['Tiger', 'Orangutan'] },
            { name: 'Australasian', region: 'Australia & nearby', color: '#9B59B6', examples: ['Kangaroo', 'Koala'] },
            { name: 'Antarctic', region: 'Antarctica', color: '#95A5A6', examples: ['Penguin', 'Seal'] },
            { name: 'Oceanic', region: 'Pacific Islands', color: '#16A085', examples: ['Unique island species'] }
        ];

        if (showMap) {
            // Simplified world map representation
            const mapY = height * 0.15;
            const mapHeight = height * 0.45;

            // Background
            this.ctx.fillStyle = '#D6EAF8';
            this.ctx.fillRect(width * 0.05, mapY, width * 0.9, mapHeight);

            // Simplified continents with realm colors
            // North America (Nearctic)
            this.ctx.fillStyle = realms[0].color;
            this.ctx.globalAlpha = 0.6;
            this.ctx.fillRect(width * 0.1, mapY + mapHeight * 0.1, width * 0.2, mapHeight * 0.4);

            // Eurasia (Palearctic)
            this.ctx.fillStyle = realms[1].color;
            this.ctx.fillRect(width * 0.35, mapY + mapHeight * 0.1, width * 0.45, mapHeight * 0.3);

            // South America (Neotropical)
            this.ctx.fillStyle = realms[2].color;
            this.ctx.fillRect(width * 0.15, mapY + mapHeight * 0.52, width * 0.15, mapHeight * 0.38);

            // Africa (Afrotropical)
            this.ctx.fillStyle = realms[3].color;
            this.ctx.fillRect(width * 0.42, mapY + mapHeight * 0.45, width * 0.15, mapHeight * 0.45);

            // Asia (Indomalayan)
            this.ctx.fillStyle = realms[4].color;
            this.ctx.fillRect(width * 0.6, mapY + mapHeight * 0.45, width * 0.15, mapHeight * 0.35);

            // Australia (Australasian)
            this.ctx.fillStyle = realms[5].color;
            this.ctx.fillRect(width * 0.75, mapY + mapHeight * 0.6, width * 0.12, mapHeight * 0.25);

            this.ctx.globalAlpha = 1.0;
        }

        // Legend with realm details
        const legendY = height * 0.65;
        const itemsPerRow = 4;
        const itemWidth = width / itemsPerRow;

        realms.forEach((realm, idx) => {
            const col = idx % itemsPerRow;
            const row = Math.floor(idx / itemsPerRow);
            const itemX = col * itemWidth + width * 0.05;
            const itemY = legendY + row * 70;

            // Color box
            this.ctx.fillStyle = realm.color;
            this.ctx.fillRect(itemX, itemY, 20, 20);
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(itemX, itemY, 20, 20);

            // Text
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(realm.name, itemX + 25, itemY + 12);

            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText(realm.region, itemX + 25, itemY + 26);

            this.ctx.font = 'italic 9px Arial';
            this.ctx.fillText(realm.examples.join(', '), itemX + 25, itemY + 40);
        });

        this.ctx.restore();
    }

    // ========== IDENTIFICATION TOOLS RENDERERS ==========

    renderDichotomousKey(x, y, width, height, options) {
        const { type } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        // Title
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`Dichotomous Key: ${type.charAt(0).toUpperCase() + type.slice(1)} Identification`, width / 2, height * 0.05);

        // Key structure
        const nodeWidth = width * 0.35;
        const nodeHeight = 60;
        const spacing = 40;

        let keyData;
        if (type === 'leaf') {
            keyData = [
                { level: 0, text: '1. Leaf arrangement', choices: ['Opposite', 'Alternate'] },
                { level: 1, text: '2a. Leaf shape', choices: ['Simple', 'Compound'], parent: 0 },
                { level: 1, text: '2b. Leaf margin', choices: ['Smooth', 'Toothed'], parent: 1 },
                { level: 2, text: '3a. Oak', result: true, parent: 0 },
                { level: 2, text: '3b. Maple', result: true, parent: 1 },
                { level: 2, text: '3c. Ash', result: true, parent: 2 },
                { level: 2, text: '3d. Elm', result: true, parent: 3 }
            ];
        } else if (type === 'insect') {
            keyData = [
                { level: 0, text: '1. Number of wings', choices: ['2 wings', '4 wings'] },
                { level: 1, text: '2a. Wing type', choices: ['Membranous', 'Hardened'], parent: 0 },
                { level: 1, text: '2b. Wing position', choices: ['Held flat', 'Held upright'], parent: 1 },
                { level: 2, text: '3a. Fly (Diptera)', result: true, parent: 0 },
                { level: 2, text: '3b. Beetle (Coleoptera)', result: true, parent: 1 },
                { level: 2, text: '3c. Dragonfly (Odonata)', result: true, parent: 2 },
                { level: 2, text: '3d. Butterfly (Lepidoptera)', result: true, parent: 3 }
            ];
        } else {
            keyData = [
                { level: 0, text: '1. Habitat type', choices: ['Aquatic', 'Terrestrial'] },
                { level: 1, text: '2a. Bill shape', choices: ['Hooked', 'Straight'], parent: 0 },
                { level: 1, text: '2b. Feet type', choices: ['Webbed', 'Talons'], parent: 1 },
                { level: 2, text: '3a. Duck', result: true, parent: 0 },
                { level: 2, text: '3b. Heron', result: true, parent: 1 },
                { level: 2, text: '3c. Eagle', result: true, parent: 2 },
                { level: 2, text: '3d. Sparrow', result: true, parent: 3 }
            ];
        }

        // Draw decision tree
        const startY = height * 0.15;
        const levelSpacing = 120;

        // Question nodes
        const questions = keyData.filter(item => !item.result);
        questions.forEach((node, idx) => {
            const nodeY = startY + node.level * levelSpacing;
            const nodeX = width / 2 - nodeWidth / 2;

            // Node box
            this.ctx.fillStyle = node.level === 0 ? '#3498DB' : 
                               node.level === 1 ? '#E67E22' : '#9B59B6';
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.roundRect(nodeX, nodeY, nodeWidth, nodeHeight, 8);
            this.ctx.fill();
            this.ctx.stroke();

            // Text
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(node.text, nodeX + nodeWidth / 2, nodeY + 25);

            // Choices
            if (node.choices) {
                const choiceSpacing = nodeWidth / (node.choices.length + 1);
                node.choices.forEach((choice, cidx) => {
                    const choiceX = nodeX + choiceSpacing * (cidx + 1);
                    const choiceY = nodeY + nodeHeight;

                    // Arrow down
                    this.ctx.strokeStyle = '#2C3E50';
                    this.ctx.lineWidth = 2;
                    this.ctx.beginPath();
                    this.ctx.moveTo(choiceX, choiceY);
                    this.ctx.lineTo(choiceX, choiceY + 30);
                    this.ctx.stroke();

                    // Arrow head
                    this.ctx.fillStyle = '#2C3E50';
                    this.ctx.beginPath();
                    this.ctx.moveTo(choiceX, choiceY + 30);
                    this.ctx.lineTo(choiceX - 5, choiceY + 22);
                    this.ctx.lineTo(choiceX + 5, choiceY + 22);
                    this.ctx.closePath();
                    this.ctx.fill();

                    // Choice label
                    this.ctx.fillStyle = '#E74C3C';
                    this.ctx.font = 'bold 11px Arial';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText(choice, choiceX + 40, choiceY + 15);
                });
            }
        });

        // Result nodes
        const results = keyData.filter(item => item.result);
        results.forEach((node, idx) => {
            const resultY = startY + node.level * levelSpacing;
            const numResults = results.filter(r => r.level === node.level).length;
            const resultIdx = results.filter(r => r.level === node.level).indexOf(node);
            const resultX = width * (0.15 + (resultIdx / (numResults - 1)) * 0.7) - nodeWidth * 0.3;

            // Result box
            this.ctx.fillStyle = '#2ECC71';
            this.ctx.strokeStyle = '#27AE60';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.roundRect(resultX, resultY, nodeWidth * 0.6, 50, 8);
            this.ctx.fill();
            this.ctx.stroke();

            // Result text
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(node.text, resultX + nodeWidth * 0.3, resultY + 32);
        });

        // Instructions
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.font = 'italic 11px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Follow the branches based on observed characteristics to identify the specimen', width / 2, height * 0.98);

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

    addLabel(text, x, y, color = '#2C3E50', align = 'center', font = 'bold 13px Arial') {
        this.ctx.font = font;
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

    // ========== ANIMATION & UTILITY ==========

    animate() {
        this.currentFrame++;
        requestAnimationFrame(() => this.animate());
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    saveAsPNG(filename = 'taxonomy-diagram.png') {
        const link = document.createElement('a');
        link.download = filename;
        link.href = this.canvas.toDataURL();
        link.click();
    }
}

// ============================================================================
// EXPORT
// ============================================================================

export { TaxonomyBiologyRegistry, TaxonomyShapes, TaxonomyDiagramRenderer };
