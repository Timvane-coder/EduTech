// ============================================================================
// MICROBIOLOGY DIAGRAMS REGISTRY - Comprehensive Microbiology Configuration System
// ============================================================================

class MicrobiologyDiagramsRegistry {
    static diagrams = {
        // ===== 1. BACTERIAL STRUCTURES =====
        
        'bacterialCell': {
            name: 'Bacterial Cell Structure',
            category: 'Bacterial Structures',
            description: 'Complete prokaryotic cell anatomy',
            dataRequired: [],
            usage: 'Best for bacterial cell biology education',
            examples: ['Bacteria', 'Prokaryote', 'Cell structure'],
            defaultOptions: {
                title: 'Bacterial Cell Structure',
                type: 'bacillus', // 'bacillus', 'coccus', 'spirillum'
                showLabels: true,
                showFlagella: true,
                showPili: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bacterialShapes': {
            name: 'Bacterial Morphology',
            category: 'Bacterial Structures',
            description: 'Common bacterial shapes and arrangements',
            dataRequired: [],
            usage: 'Best for bacterial classification',
            examples: ['Cocci', 'Bacilli', 'Spirilla'],
            defaultOptions: {
                title: 'Bacterial Shapes',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gramStaining': {
            name: 'Gram Staining',
            category: 'Bacterial Structures',
            description: 'Gram-positive vs Gram-negative cell walls',
            dataRequired: [],
            usage: 'Best for microbiology lab techniques',
            examples: ['Gram stain', 'Cell wall', 'Bacterial identification'],
            defaultOptions: {
                title: 'Gram Staining Comparison',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'endospore': {
            name: 'Bacterial Endospore',
            category: 'Bacterial Structures',
            description: 'Endospore structure and formation',
            dataRequired: [],
            usage: 'Best for bacterial survival mechanisms',
            examples: ['Spore', 'Dormancy', 'Bacterial resistance'],
            defaultOptions: {
                title: 'Bacterial Endospore',
                showLabels: true,
                showFormation: false,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'biofilm': {
            name: 'Bacterial Biofilm',
            category: 'Bacterial Structures',
            description: 'Biofilm formation and structure',
            dataRequired: [],
            usage: 'Best for microbial ecology',
            examples: ['Biofilm', 'Bacterial communities', 'EPS matrix'],
            defaultOptions: {
                title: 'Bacterial Biofilm',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 2. VIRAL STRUCTURES =====

        'virusStructure': {
            name: 'Virus Structure',
            category: 'Viral Structures',
            description: 'Basic virus anatomy',
            dataRequired: [],
            usage: 'Best for virology education',
            examples: ['Virus', 'Virion', 'Capsid'],
            defaultOptions: {
                title: 'Virus Structure',
                type: 'bacteriophage', // 'bacteriophage', 'enveloped', 'naked', 'influenza', 'coronavirus'
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'viralReplication': {
            name: 'Viral Replication Cycle',
            category: 'Viral Structures',
            description: 'Lytic and lysogenic cycles',
            dataRequired: [],
            usage: 'Best for viral life cycle education',
            examples: ['Viral replication', 'Lytic cycle', 'Lysogenic cycle'],
            defaultOptions: {
                title: 'Viral Replication Cycle',
                cycle: 'lytic', // 'lytic', 'lysogenic', 'both'
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'bacteriophage': {
            name: 'Bacteriophage',
            category: 'Viral Structures',
            description: 'Detailed bacteriophage structure',
            dataRequired: [],
            usage: 'Best for phage biology',
            examples: ['Phage', 'T4 phage', 'Viral structure'],
            defaultOptions: {
                title: 'Bacteriophage Structure',
                showLabels: true,
                width: 600,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 3. FUNGAL STRUCTURES =====

        'fungalCell': {
            name: 'Fungal Cell',
            category: 'Fungal Structures',
            description: 'Yeast and hyphal cells',
            dataRequired: [],
            usage: 'Best for mycology',
            examples: ['Yeast', 'Hyphae', 'Fungi'],
            defaultOptions: {
                title: 'Fungal Cell Structure',
                type: 'yeast', // 'yeast', 'hyphae'
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fungalStructures': {
            name: 'Fungal Morphology',
            category: 'Fungal Structures',
            description: 'Mycelium, spores, and fruiting bodies',
            dataRequired: [],
            usage: 'Best for fungal biology',
            examples: ['Mycelium', 'Spores', 'Mushroom'],
            defaultOptions: {
                title: 'Fungal Structures',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 4. PROTIST STRUCTURES =====

        'amoeba': {
            name: 'Amoeba',
            category: 'Protist Structures',
            description: 'Amoeba structure and movement',
            dataRequired: [],
            usage: 'Best for protozoology',
            examples: ['Amoeba', 'Pseudopods', 'Protozoa'],
            defaultOptions: {
                title: 'Amoeba Structure',
                showLabels: true,
                showMovement: false,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'paramecium': {
            name: 'Paramecium',
            category: 'Protist Structures',
            description: 'Ciliated protozoan structure',
            dataRequired: [],
            usage: 'Best for protist biology',
            examples: ['Paramecium', 'Cilia', 'Ciliate'],
            defaultOptions: {
                title: 'Paramecium Structure',
                showLabels: true,
                width: 600,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'euglena': {
            name: 'Euglena',
            category: 'Protist Structures',
            description: 'Flagellated protist with chloroplasts',
            dataRequired: [],
            usage: 'Best for protist diversity',
            examples: ['Euglena', 'Flagellate', 'Photosynthetic protist'],
            defaultOptions: {
                title: 'Euglena Structure',
                showLabels: true,
                width: 600,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 5. MICROBIAL PROCESSES =====

        'bacterialConjugation': {
            name: 'Bacterial Conjugation',
            category: 'Microbial Processes',
            description: 'Horizontal gene transfer via conjugation',
            dataRequired: [],
            usage: 'Best for bacterial genetics',
            examples: ['Conjugation', 'Gene transfer', 'Pili'],
            defaultOptions: {
                title: 'Bacterial Conjugation',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'binaryFission': {
            name: 'Binary Fission',
            category: 'Microbial Processes',
            description: 'Bacterial cell division',
            dataRequired: [],
            usage: 'Best for bacterial reproduction',
            examples: ['Binary fission', 'Cell division', 'Reproduction'],
            defaultOptions: {
                title: 'Binary Fission',
                showLabels: true,
                showStages: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nitrogenCycle': {
            name: 'Nitrogen Cycle',
            category: 'Microbial Processes',
            description: 'Microbial nitrogen transformations',
            dataRequired: [],
            usage: 'Best for microbial ecology',
            examples: ['Nitrogen cycle', 'Nitrification', 'Denitrification'],
            defaultOptions: {
                title: 'Microbial Nitrogen Cycle',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'antibioticMechanism': {
            name: 'Antibiotic Mechanisms',
            category: 'Microbial Processes',
            description: 'How antibiotics work',
            dataRequired: [],
            usage: 'Best for antimicrobial education',
            examples: ['Antibiotics', 'Drug resistance', 'Antimicrobial'],
            defaultOptions: {
                title: 'Antibiotic Mechanisms of Action',
                mechanism: 'cell_wall', // 'cell_wall', 'protein_synthesis', 'dna_replication', 'cell_membrane'
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 6. LABORATORY TECHNIQUES =====

        'streakPlate': {
            name: 'Streak Plate Technique',
            category: 'Laboratory Techniques',
            description: 'Bacterial isolation method',
            dataRequired: [],
            usage: 'Best for microbiology lab skills',
            examples: ['Streak plate', 'Isolation', 'Pure culture'],
            defaultOptions: {
                title: 'Streak Plate Technique',
                showLabels: true,
                pattern: 'quadrant', // 'quadrant', 'continuous'
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'microscopeSetup': {
            name: 'Microscope Setup',
            category: 'Laboratory Techniques',
            description: 'Compound light microscope',
            dataRequired: [],
            usage: 'Best for microscopy education',
            examples: ['Microscope', 'Magnification', 'Lab equipment'],
            defaultOptions: {
                title: 'Compound Light Microscope',
                showLabels: true,
                width: 600,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'cultureMethods': {
            name: 'Culture Methods',
            category: 'Laboratory Techniques',
            description: 'Broth and agar culture techniques',
            dataRequired: [],
            usage: 'Best for microbiology techniques',
            examples: ['Culture', 'Growth media', 'Agar plate'],
            defaultOptions: {
                title: 'Microbial Culture Methods',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 7. MICROBIAL GROWTH =====

        'growthCurve': {
            name: 'Bacterial Growth Curve',
            category: 'Microbial Growth',
            description: 'Phases of bacterial growth',
            dataRequired: [],
            usage: 'Best for microbial physiology',
            examples: ['Growth curve', 'Log phase', 'Stationary phase'],
            defaultOptions: {
                title: 'Bacterial Growth Curve',
                showLabels: true,
                showPhases: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'colonyMorphology': {
            name: 'Colony Morphology',
            category: 'Microbial Growth',
            description: 'Bacterial colony characteristics',
            dataRequired: [],
            usage: 'Best for bacterial identification',
            examples: ['Colony', 'Morphology', 'Agar plate'],
            defaultOptions: {
                title: 'Colony Morphology',
                showLabels: true,
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
        console.log('=== MICROBIOLOGY DIAGRAMS REGISTRY SUMMARY ===');
        console.log(`Total Diagrams: ${this.getTotalDiagramCount()}`);
        console.log('\nBy Category:');
        const stats = this.getDiagramStats();
        Object.entries(stats).forEach(([category, data]) => {
            console.log(`  ${category}: ${data.count} diagrams`);
        });
    }
}

// ============================================================================
// MICROBIOLOGY SHAPES LIBRARY
// ============================================================================

class MicrobiologyShapes {
    
    // ===== BACTERIAL SHAPES =====
    
    static drawBacterialCell(ctx, x, y, width, height, type = 'bacillus', options = {}) {
        const { showFlagella = true, showPili = true, showCapsule = true } = options;
        
        ctx.save();
        ctx.translate(x, y);
        
        // Capsule (outermost layer)
        if(showCapsule) {
            ctx.fillStyle = 'rgba(200, 220, 255, 0.3)';
            ctx.strokeStyle = 'rgba(100, 150, 255, 0.5)';
            ctx.lineWidth = 2;
            
            if(type === 'bacillus') {
                ctx.beginPath();
                ctx.roundRect(-width * 0.55, -height * 0.3, width * 1.1, height * 0.6, height * 0.3);
                ctx.fill();
                ctx.stroke();
            } else if(type === 'coccus') {
                ctx.beginPath();
                ctx.arc(0, 0, width * 0.55, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            }
        }
        
        // Cell wall and membrane
        ctx.fillStyle = '#B8E6B8';
        ctx.strokeStyle = '#2E7D32';
        ctx.lineWidth = 3;
        
        if(type === 'bacillus') {
            // Rod-shaped
            ctx.beginPath();
            ctx.roundRect(-width * 0.5, -height * 0.25, width, height * 0.5, height * 0.25);
            ctx.fill();
            ctx.stroke();
        } else if(type === 'coccus') {
            // Spherical
            ctx.beginPath();
            ctx.arc(0, 0, width * 0.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        } else if(type === 'spirillum') {
            // Spiral
            ctx.beginPath();
            ctx.moveTo(-width * 0.5, 0);
            for(let i = 0; i <= 10; i++) {
                const xPos = -width * 0.5 + (i / 10) * width;
                const yPos = Math.sin(i * Math.PI / 2) * height * 0.25;
                ctx.lineTo(xPos, yPos);
            }
            ctx.strokeStyle = '#2E7D32';
            ctx.lineWidth = height * 0.4;
            ctx.lineCap = 'round';
            ctx.stroke();
        }
        
        // Cytoplasm
        ctx.fillStyle = 'rgba(180, 230, 180, 0.5)';
        if(type === 'bacillus') {
            ctx.beginPath();
            ctx.roundRect(-width * 0.45, -height * 0.2, width * 0.9, height * 0.4, height * 0.2);
            ctx.fill();
        } else if(type === 'coccus') {
            ctx.beginPath();
            ctx.arc(0, 0, width * 0.45, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Nucleoid (DNA region)
        ctx.fillStyle = '#FFD700';
        ctx.strokeStyle = '#FFA500';
        ctx.lineWidth = 1;
        
        for(let i = 0; i < 3; i++) {
            ctx.beginPath();
            const angle = (i / 3) * Math.PI * 2;
            const radius = width * 0.15;
            const nx = Math.cos(angle) * radius * 0.3;
            const ny = Math.sin(angle) * radius * 0.3;
            ctx.arc(nx, ny, radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        
        // Ribosomes (small dots)
        ctx.fillStyle = '#8B4513';
        for(let i = 0; i < 20; i++) {
            const rx = (Math.random() - 0.5) * width * 0.7;
            const ry = (Math.random() - 0.5) * height * 0.3;
            ctx.beginPath();
            ctx.arc(rx, ry, 2, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Plasmids
        ctx.strokeStyle = '#FF69B4';
        ctx.lineWidth = 2;
        ctx.fillStyle = 'rgba(255, 105, 180, 0.2)';
        for(let i = 0; i < 2; i++) {
            const px = (Math.random() - 0.5) * width * 0.5;
            const py = (Math.random() - 0.5) * height * 0.2;
            ctx.beginPath();
            ctx.arc(px, py, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        
        // Flagella
        if(showFlagella) {
            ctx.strokeStyle = '#A0522D';
            ctx.lineWidth = 2;
            
            const flagellaCount = type === 'bacillus' ? 2 : 1;
            for(let i = 0; i < flagellaCount; i++) {
                ctx.beginPath();
                const startX = width * 0.5;
                const startY = (i - 0.5) * height * 0.3;
                ctx.moveTo(startX, startY);
                
                for(let j = 0; j < 8; j++) {
                    const xPos = startX + (j + 1) * 15;
                    const yPos = startY + Math.sin(j * Math.PI / 2) * 20;
                    ctx.lineTo(xPos, yPos);
                }
                ctx.stroke();
            }
        }
        
        // Pili (hair-like structures)
        if(showPili) {
            ctx.strokeStyle = '#CD853F';
            ctx.lineWidth = 1;
            
            for(let i = 0; i < 12; i++) {
                const angle = (i / 12) * Math.PI * 2;
                const startRadius = type === 'coccus' ? width * 0.5 : width * 0.4;
                const sx = Math.cos(angle) * startRadius;
                const sy = Math.sin(angle) * startRadius;
                const ex = Math.cos(angle) * (startRadius + 30);
                const ey = Math.sin(angle) * (startRadius + 30);
                
                ctx.beginPath();
                ctx.moveTo(sx, sy);
                ctx.lineTo(ex, ey);
                ctx.stroke();
            }
        }
        
        ctx.restore();
    }
    
    static drawBacterialShapes(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        const cellSize = 40;
        const spacing = width * 0.2;
        
        // Cocci arrangements
        ctx.font = 'bold 14px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('Cocci', width * 0.15, 20);
        
        // Single coccus
        this.drawBacterialCell(ctx, width * 0.15, height * 0.15, cellSize, cellSize, 'coccus', { showFlagella: false, showPili: false });
        ctx.font = '11px Arial';
        ctx.fillText('Coccus', width * 0.15, height * 0.22);
        
        // Diplococcus
        this.drawBacterialCell(ctx, width * 0.12, height * 0.32, cellSize * 0.8, cellSize * 0.8, 'coccus', { showFlagella: false, showPili: false });
        this.drawBacterialCell(ctx, width * 0.18, height * 0.32, cellSize * 0.8, cellSize * 0.8, 'coccus', { showFlagella: false, showPili: false });
        ctx.fillText('Diplococcus', width * 0.15, height * 0.39);
        
        // Streptococcus (chain)
        for(let i = 0; i < 4; i++) {
            this.drawBacterialCell(ctx, width * 0.1 + i * 25, height * 0.5, cellSize * 0.7, cellSize * 0.7, 'coccus', { showFlagella: false, showPili: false });
        }
        ctx.fillText('Streptococcus', width * 0.15, height * 0.57);
        
        // Staphylococcus (cluster)
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 2; j++) {
                this.drawBacterialCell(ctx, width * 0.1 + i * 20, height * 0.67 + j * 20, cellSize * 0.6, cellSize * 0.6, 'coccus', { showFlagella: false, showPili: false });
            }
        }
        ctx.fillText('Staphylococcus', width * 0.15, height * 0.78);
        
        // Bacilli
        ctx.font = 'bold 14px Arial';
        ctx.fillText('Bacilli', width * 0.5, 20);
        
        // Single bacillus
        this.drawBacterialCell(ctx, width * 0.5, height * 0.15, cellSize * 2, cellSize, 'bacillus', { showFlagella: false, showPili: false });
        ctx.font = '11px Arial';
        ctx.fillText('Bacillus', width * 0.5, height * 0.22);
        
        // Diplobacilli
        this.drawBacterialCell(ctx, width * 0.45, height * 0.32, cellSize * 1.5, cellSize * 0.8, 'bacillus', { showFlagella: false, showPili: false });
        this.drawBacterialCell(ctx, width * 0.55, height * 0.32, cellSize * 1.5, cellSize * 0.8, 'bacillus', { showFlagella: false, showPili: false });
        ctx.fillText('Diplobacilli', width * 0.5, height * 0.39);
        
        // Streptobacilli (chain)
        for(let i = 0; i < 3; i++) {
            this.drawBacterialCell(ctx, width * 0.42 + i * 50, height * 0.5, cellSize * 1.3, cellSize * 0.7, 'bacillus', { showFlagella: false, showPili: false });
        }
        ctx.fillText('Streptobacilli', width * 0.5, height * 0.57);
        
        // Spiral forms
        ctx.font = 'bold 14px Arial';
        ctx.fillText('Spiral', width * 0.85, 20);
        
        // Spirillum
        this.drawBacterialCell(ctx, width * 0.85, height * 0.15, cellSize * 2.5, cellSize * 1.2, 'spirillum', { showFlagella: true, showPili: false });
        ctx.font = '11px Arial';
        ctx.fillText('Spirillum', width * 0.85, height * 0.25);
        
        // Spirochete (tighter spiral)
        ctx.strokeStyle = '#2E7D32';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(width * 0.78, height * 0.35);
        for(let i = 0; i <= 20; i++) {
            const xPos = width * 0.78 + (i / 20) * 80;
            const yPos = height * 0.35 + Math.sin(i * Math.PI / 3) * 15;
            ctx.lineTo(xPos, yPos);
        }
        ctx.stroke();
        ctx.fillText('Spirochete', width * 0.85, height * 0.42);
        
        ctx.restore();
    }
    
    static drawGramStaining(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        const halfWidth = width / 2;
        
        // Gram-positive
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('Gram-Positive', halfWidth * 0.5, 30);
        
        // Thick peptidoglycan layer
        ctx.fillStyle = '#9C27B0'; // Purple stain
        ctx.strokeStyle = '#6A1B9A';
        ctx.lineWidth = 3;
        
        ctx.beginPath();
        ctx.arc(halfWidth * 0.5, height * 0.5, 80, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Thick cell wall
        ctx.strokeStyle = '#4A148C';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(halfWidth * 0.5, height * 0.5, 80, 0, Math.PI * 2);
        ctx.stroke();
        
        // Cell membrane
        ctx.strokeStyle = '#1565C0';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(halfWidth * 0.5, height * 0.5, 65, 0, Math.PI * 2);
        ctx.stroke();
        
        // Labels
        ctx.font = '12px Arial';
        ctx.fillStyle = '#7F8C8D';
        ctx.fillText('Thick', halfWidth * 0.5, height * 0.75);
        ctx.fillText('Peptidoglycan', halfWidth * 0.5, height * 0.78);
        
        // Gram-negative
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.fillText('Gram-Negative', halfWidth * 1.5, 30);
        
        // Thin peptidoglycan, outer membrane
        ctx.fillStyle = '#E91E63'; // Pink/red counterstain
        ctx.strokeStyle = '#C2185B';
        ctx.lineWidth = 3;
        
        ctx.beginPath();
        ctx.arc(halfWidth * 1.5, height * 0.5, 80, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Outer membrane
        ctx.strokeStyle = '#D84315';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(halfWidth * 1.5, height * 0.5, 85, 0, Math.PI * 2);
        ctx.stroke();
        
        // Periplasmic space
        ctx.fillStyle = 'rgba(255, 235, 238, 0.5)';
        ctx.beginPath();
        ctx.arc(halfWidth * 1.5, height * 0.5, 75, 0, Math.PI * 2);
        ctx.fill();
        
        // Thin peptidoglycan
              ctx.strokeStyle = '#7B1FA2';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(halfWidth * 1.5, height * 0.5, 70, 0, Math.PI * 2);
        ctx.stroke();
        
        // Cell membrane
        ctx.strokeStyle = '#1565C0';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(halfWidth * 1.5, height * 0.5, 65, 0, Math.PI * 2);
        ctx.stroke();
        
        // Labels
        ctx.font = '12px Arial';
        ctx.fillStyle = '#7F8C8D';
        ctx.fillText('Thin', halfWidth * 1.5, height * 0.75);
        ctx.fillText('Peptidoglycan', halfWidth * 1.5, height * 0.78);
        ctx.fillText('Outer Membrane', halfWidth * 1.5, height * 0.82);
        
        ctx.restore();
    }
    
    static drawEndospore(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Vegetative cell (partially shown)
        ctx.fillStyle = '#B8E6B8';
        ctx.strokeStyle = '#2E7D32';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(-width * 0.3, -height * 0.15, width * 0.6, height * 0.3, height * 0.15);
        ctx.fill();
        ctx.stroke();
        
        // Spore inside
        const sporeX = width * 0.1;
        const sporeY = 0;
        const sporeWidth = width * 0.3;
        const sporeHeight = height * 0.25;
        
        // Exosporium (outermost)
        ctx.fillStyle = 'rgba(139, 69, 19, 0.3)';
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(sporeX, sporeY, sporeWidth * 0.6, sporeHeight * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Spore coat (thick protective layer)
        ctx.fillStyle = '#D2691E';
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.ellipse(sporeX, sporeY, sporeWidth * 0.5, sporeHeight * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Cortex
        ctx.fillStyle = '#DEB887';
        ctx.beginPath();
        ctx.ellipse(sporeX, sporeY, sporeWidth * 0.4, sporeHeight * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Core (DNA and ribosomes)
        ctx.fillStyle = '#FFD700';
        ctx.strokeStyle = '#FFA500';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(sporeX, sporeY, sporeWidth * 0.25, sporeHeight * 0.25, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // DNA coils in core
        ctx.strokeStyle = '#FF8C00';
        ctx.lineWidth = 2;
        for(let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.arc(sporeX, sporeY, sporeWidth * 0.15 - i * 5, 0, Math.PI * 2);
            ctx.stroke();
        }
        
        ctx.restore();
    }
    
    static drawBiofilm(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Surface
        ctx.fillStyle = '#7F8C8D';
        ctx.fillRect(0, height * 0.9, width, height * 0.1);
        
        // EPS matrix (extracellular polymeric substances)
        ctx.fillStyle = 'rgba(100, 200, 100, 0.3)';
        ctx.strokeStyle = 'rgba(50, 150, 50, 0.5)';
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.moveTo(0, height * 0.9);
        ctx.quadraticCurveTo(width * 0.2, height * 0.4, width * 0.4, height * 0.6);
        ctx.quadraticCurveTo(width * 0.6, height * 0.8, width * 0.8, height * 0.5);
        ctx.lineTo(width, height * 0.7);
        ctx.lineTo(width, height * 0.9);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // EPS strands
        ctx.strokeStyle = 'rgba(100, 200, 100, 0.5)';
        ctx.lineWidth = 1;
        for(let i = 0; i < 30; i++) {
            ctx.beginPath();
            const startX = Math.random() * width;
            const startY = height * 0.5 + Math.random() * height * 0.4;
            ctx.moveTo(startX, startY);
            ctx.lineTo(startX + (Math.random() - 0.5) * 30, startY + (Math.random() - 0.5) * 30);
            ctx.stroke();
        }
        
        // Bacteria embedded in biofilm
        for(let i = 0; i < 15; i++) {
            const bx = Math.random() * width;
            const by = height * 0.5 + Math.random() * height * 0.4;
            const bType = Math.random() > 0.5 ? 'bacillus' : 'coccus';
            
            ctx.save();
            ctx.translate(bx, by);
            ctx.scale(0.3, 0.3);
            this.drawBacterialCell(ctx, 0, 0, 40, 40, bType, { showFlagella: false, showPili: false, showCapsule: false });
            ctx.restore();
        }
        
        // Water channels
        ctx.fillStyle = 'rgba(100, 150, 255, 0.4)';
        for(let i = 0; i < 4; i++) {
            const channelX = width * (0.2 + i * 0.2);
            ctx.beginPath();
            ctx.moveTo(channelX, height * 0.9);
            ctx.lineTo(channelX - 10, height * 0.3);
            ctx.lineTo(channelX + 10, height * 0.3);
            ctx.closePath();
            ctx.fill();
        }
        
        // Nutrients (small particles)
        ctx.fillStyle = '#FFA500';
        for(let i = 0; i < 20; i++) {
            const nx = Math.random() * width;
            const ny = Math.random() * height * 0.6;
            ctx.beginPath();
            ctx.arc(nx, ny, 2, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.restore();
    }
    
    // ===== VIRAL SHAPES =====
    
    static drawVirus(ctx, x, y, size, type = 'bacteriophage') {
        ctx.save();
        ctx.translate(x, y);
        
        if(type === 'bacteriophage') {
            // T4 Bacteriophage
            // Head (icosahedral capsid)
            ctx.fillStyle = '#4A90E2';
            ctx.strokeStyle = '#2E5C8A';
            ctx.lineWidth = 2;
            
            // Hexagonal head
            ctx.beginPath();
            for(let i = 0; i < 6; i++) {
                const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
                const px = Math.cos(angle) * size * 0.4;
                const py = Math.sin(angle) * size * 0.3;
                if(i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            
            // DNA inside head
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 2;
            for(let i = 0; i < 4; i++) {
                ctx.beginPath();
                ctx.moveTo(-size * 0.3, -size * 0.2 + i * 10);
                ctx.quadraticCurveTo(0, -size * 0.2 + i * 10 + 5, size * 0.3, -size * 0.2 + i * 10);
                ctx.stroke();
            }
            
            // Collar
            ctx.fillStyle = '#5AA9E6';
            ctx.fillRect(-size * 0.15, size * 0.25, size * 0.3, size * 0.1);
            ctx.strokeRect(-size * 0.15, size * 0.25, size * 0.3, size * 0.1);
            
            // Tail sheath
            ctx.fillStyle = '#7FC8F8';
            ctx.strokeStyle = '#2E5C8A';
            ctx.lineWidth = 2;
            ctx.fillRect(-size * 0.1, size * 0.35, size * 0.2, size * 0.5);
            ctx.strokeRect(-size * 0.1, size * 0.35, size * 0.2, size * 0.5);
            
            // Tail tube (inside sheath)
            ctx.fillStyle = '#4A90E2';
            ctx.fillRect(-size * 0.05, size * 0.35, size * 0.1, size * 0.5);
            
            // Base plate
            ctx.fillStyle = '#5AA9E6';
            ctx.beginPath();
            for(let i = 0; i < 6; i++) {
                const angle = (i / 6) * Math.PI * 2;
                const px = Math.cos(angle) * size * 0.15;
                const py = size * 0.85 + Math.sin(angle) * size * 0.08;
                if(i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            
            // Tail fibers
            ctx.strokeStyle = '#2E5C8A';
            ctx.lineWidth = 2;
            for(let i = 0; i < 6; i++) {
                const angle = (i / 6) * Math.PI * 2;
                const startX = Math.cos(angle) * size * 0.15;
                const startY = size * 0.85;
                const endX = Math.cos(angle) * size * 0.5;
                const endY = size * 0.85 + size * 0.4;
                
                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();
            }
            
        } else if(type === 'enveloped') {
            // Enveloped virus (like influenza)
            // Envelope with spikes
            ctx.fillStyle = 'rgba(255, 160, 160, 0.6)';
            ctx.strokeStyle = '#E74C3C';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 0, size * 0.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Spikes (glycoproteins)
            ctx.fillStyle = '#C0392B';
            ctx.strokeStyle = '#922B21';
            ctx.lineWidth = 1;
            for(let i = 0; i < 16; i++) {
                const angle = (i / 16) * Math.PI * 2;
                const baseX = Math.cos(angle) * size * 0.5;
                const baseY = Math.sin(angle) * size * 0.5;
                const tipX = Math.cos(angle) * size * 0.65;
                const tipY = Math.sin(angle) * size * 0.65;
                
                ctx.beginPath();
                ctx.moveTo(baseX, baseY);
                ctx.lineTo(tipX, tipY);
                ctx.lineTo(tipX - Math.sin(angle) * 3, tipY + Math.cos(angle) * 3);
                ctx.lineTo(tipX + Math.sin(angle) * 3, tipY - Math.cos(angle) * 3);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            
            // Capsid
            ctx.fillStyle = '#4A90E2';
            ctx.strokeStyle = '#2E5C8A';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 0, size * 0.4, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // RNA/DNA segments
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 3;
            for(let i = 0; i < 8; i++) {
                const angle = (i / 8) * Math.PI * 2;
                const startX = Math.cos(angle) * size * 0.1;
                const startY = Math.sin(angle) * size * 0.1;
                const endX = Math.cos(angle) * size * 0.35;
                const endY = Math.sin(angle) * size * 0.35;
                
                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();
            }
            
        } else if(type === 'naked') {
            // Naked icosahedral virus
            ctx.fillStyle = '#4A90E2';
            ctx.strokeStyle = '#2E5C8A';
            ctx.lineWidth = 2;
            
            // Icosahedral capsid
            const vertices = [];
            const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio
            
            // Draw as polygon approximation
            ctx.beginPath();
            for(let i = 0; i < 20; i++) {
                const angle = (i / 20) * Math.PI * 2;
                const px = Math.cos(angle) * size * 0.45;
                const py = Math.sin(angle) * size * 0.45;
                if(i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            
            // Capsomeres (protein subunits)
            ctx.fillStyle = '#5AA9E6';
            for(let i = 0; i < 12; i++) {
                const angle = (i / 12) * Math.PI * 2;
                const px = Math.cos(angle) * size * 0.3;
                const py = Math.sin(angle) * size * 0.3;
                
                ctx.beginPath();
                for(let j = 0; j < 5; j++) {
                    const subAngle = (j / 5) * Math.PI * 2;
                    const sx = px + Math.cos(subAngle) * size * 0.08;
                    const sy = py + Math.sin(subAngle) * size * 0.08;
                    if(j === 0) ctx.moveTo(sx, sy);
                    else ctx.lineTo(sx, sy);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            
            // DNA/RNA core
            ctx.fillStyle = 'rgba(255, 215, 0, 0.5)';
            ctx.beginPath();
            ctx.arc(0, 0, size * 0.2, 0, Math.PI * 2);
            ctx.fill();
            
        } else if(type === 'coronavirus') {
            // Coronavirus structure
            // Envelope
            ctx.fillStyle = 'rgba(255, 200, 200, 0.6)';
            ctx.strokeStyle = '#E74C3C';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 0, size * 0.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Crown-like spike proteins
            ctx.fillStyle = '#C0392B';
            ctx.strokeStyle = '#922B21';
            ctx.lineWidth = 1;
            for(let i = 0; i < 20; i++) {
                const angle = (i / 20) * Math.PI * 2;
                const baseX = Math.cos(angle) * size * 0.5;
                const baseY = Math.sin(angle) * size * 0.5;
                
                // Draw club-shaped spike
                ctx.beginPath();
                ctx.moveTo(baseX, baseY);
                const midX = Math.cos(angle) * size * 0.65;
                const midY = Math.sin(angle) * size * 0.65;
                ctx.lineTo(midX, midY);
                
                // Bulbous tip
                ctx.arc(Math.cos(angle) * size * 0.7, Math.sin(angle) * size * 0.7, size * 0.08, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            }
            
            // Nucleocapsid with RNA
            ctx.fillStyle = '#4A90E2';
            ctx.beginPath();
            ctx.arc(0, 0, size * 0.35, 0, Math.PI * 2);
            ctx.fill();
            
            // RNA strands
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 3;
            for(let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.arc(0, 0, size * (0.1 + i * 0.08), 0, Math.PI * 2);
                ctx.stroke();
            }
        }
        
        ctx.restore();
    }
    
    static drawViralReplication(ctx, x, y, width, height, cycle = 'lytic') {
        ctx.save();
        ctx.translate(x, y);
        
        const stageWidth = width / 6;
        const centerY = height / 2;
        
        if(cycle === 'lytic' || cycle === 'both') {
            // Lytic Cycle
            ctx.font = 'bold 14px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'center';
            ctx.fillText('Lytic Cycle', width / 2, 20);
            
            // Stage 1: Attachment
            const stage1X = stageWidth * 0.5;
            this.drawBacterialCell(ctx, stage1X, centerY, 60, 60, 'bacillus', { showFlagella: false, showPili: false });
            this.drawVirus(ctx, stage1X - 40, centerY - 40, 30, 'bacteriophage');
            ctx.font = '11px Arial';
            ctx.fillStyle = '#7F8C8D';
            ctx.fillText('1. Attachment', stage1X, centerY + 60);
            
            // Arrow
            this.drawArrow(ctx, stage1X + 40, centerY, stage1X + 60, centerY);
            
            // Stage 2: Injection
            const stage2X = stageWidth * 1.5;
            this.drawBacterialCell(ctx, stage2X, centerY, 60, 60, 'bacillus', { showFlagella: false, showPili: false });
            // Phage attached, injecting DNA
            ctx.save();
            ctx.translate(stage2X, centerY - 35);
            ctx.scale(0.8, 0.8);
            this.drawVirus(ctx, 0, 0, 30, 'bacteriophage');
            ctx.restore();
            // DNA entering
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(stage2X, centerY - 30);
            ctx.lineTo(stage2X, centerY);
            ctx.stroke();
            ctx.fillText('2. Injection', stage2X, centerY + 60);
            
            this.drawArrow(ctx, stage2X + 40, centerY, stage2X + 60, centerY);
            
            // Stage 3: Replication
            const stage3X = stageWidth * 2.5;
            this.drawBacterialCell(ctx, stage3X, centerY, 60, 60, 'bacillus', { showFlagella: false, showPili: false });
            // Multiple DNA strands
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 2;
            for(let i = 0; i < 5; i++) {
                const dx = (Math.random() - 0.5) * 40;
                const dy = (Math.random() - 0.5) * 30;
                ctx.beginPath();
                ctx.arc(stage3X + dx, centerY + dy, 8, 0, Math.PI * 2);
                ctx.stroke();
            }
            ctx.fillText('3. Replication', stage3X, centerY + 60);
            
            this.drawArrow(ctx, stage3X + 40, centerY, stage3X + 60, centerY);
            
            // Stage 4: Assembly
            const stage4X = stageWidth * 3.5;
            this.drawBacterialCell(ctx, stage4X, centerY, 60, 60, 'bacillus', { showFlagella: false, showPili: false });
            // Multiple assembled viruses
            for(let i = 0; i < 4; i++) {
                const vx = stage4X + (Math.random() - 0.5) * 40;
                const vy = centerY + (Math.random() - 0.5) * 30;
                ctx.save();
                ctx.translate(vx, vy);
                ctx.scale(0.4, 0.4);
                this.drawVirus(ctx, 0, 0, 30, 'bacteriophage');
                ctx.restore();
            }
            ctx.fillText('4. Assembly', stage4X, centerY + 60);
            
            this.drawArrow(ctx, stage4X + 40, centerY, stage4X + 60, centerY);
            
            // Stage 5: Lysis
            const stage5X = stageWidth * 4.5;
            // Bursting cell
            ctx.strokeStyle = '#2E7D32';
            ctx.lineWidth = 3;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.roundRect(stage5X - 30, centerY - 30, 60, 60, 30);
            ctx.stroke();
            ctx.setLineDash([]);
            
            // Released viruses
            for(let i = 0; i < 8; i++) {
                const angle = (i / 8) * Math.PI * 2;
                const vx = stage5X + Math.cos(angle) * 50;
                const vy = centerY + Math.sin(angle) * 50;
                ctx.save();
                ctx.translate(vx, vy);
                ctx.scale(0.35, 0.35);
                this.drawVirus(ctx, 0, 0, 30, 'bacteriophage');
                ctx.restore();
            }
            ctx.fillText('5. Lysis', stage5X, centerY + 60);
        }
        
        ctx.restore();
    }
    
    // ===== FUNGAL SHAPES =====
    
    static drawFungalCell(ctx, x, y, width, height, type = 'yeast') {
        ctx.save();
        ctx.translate(x, y);
        
        if(type === 'yeast') {
            // Yeast cell (oval)
            ctx.fillStyle = '#E8D5B7';
            ctx.strokeStyle = '#8B7355';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.ellipse(0, 0, width * 0.4, height * 0.5, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Cell wall
            ctx.strokeStyle = '#A0826D';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.ellipse(0, 0, width * 0.38, height * 0.48, 0, 0, Math.PI * 2);
            ctx.stroke();
            
            // Nucleus
            ctx.fillStyle = '#8B4789';
            ctx.strokeStyle = '#6B3569';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(-5, -5, width * 0.15, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Vacuole
            ctx.fillStyle = 'rgba(173, 216, 230, 0.5)';
            ctx.strokeStyle = '#4682B4';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(10, 10, width * 0.18, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Mitochondria
            for(let i = 0; i < 3; i++) {
                const mx = (Math.random() - 0.5) * width * 0.4;
                const my = (Math.random() - 0.5) * height * 0.5;
                ctx.fillStyle = '#FF6B6B';
                ctx.strokeStyle = '#C44569';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.ellipse(mx, my, 8, 5, Math.random() * Math.PI, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            }
            
            // Budding yeast (if showing reproduction)
            ctx.fillStyle = '#E8D5B7';
            ctx.strokeStyle = '#8B7355';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(width * 0.35, 0, width * 0.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
        } else if(type === 'hyphae') {
            // Hyphal strand
            ctx.strokeStyle = '#8B7355';
            ctx.lineWidth = height * 0.3;
            ctx.lineCap = 'round';
            
            // Main hypha
            ctx.beginPath();
            ctx.moveTo(-width * 0.5, 0);
            ctx.lineTo(width * 0.5, 0);
            ctx.stroke();
            
            // Fill with cytoplasm
            ctx.fillStyle = '#E8D5B7';
            ctx.beginPath();
            ctx.moveTo(-width * 0.5, -height * 0.12);
            ctx.lineTo(width * 0.5, -height * 0.12);
            ctx.lineTo(width * 0.5, height * 0.12);
            ctx.lineTo(-width * 0.5, height * 0.12);
            ctx.closePath();
            ctx.fill();
            
            // Septa (cross-walls)
            ctx.strokeStyle = '#A0826D';
            ctx.lineWidth = 2;
            for(let i = 1; i < 5; i++) {
                const septumX = -width * 0.5 + (i / 5) * width;
                ctx.beginPath();
                ctx.moveTo(septumX, -height * 0.15);
                ctx.lineTo(septumX, height * 0.15);
                ctx.stroke();
                
                // Septal pore
                ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                ctx.beginPath();
                ctx.arc(septumX, 0, 3, 0, Math.PI * 2);
                ctx.fill();
            }
            
            // Nuclei
            ctx.fillStyle = '#8B4789';
            for(let i = 0; i < 4; i++) {
                const nx = -width * 0.4 + (i / 3) * width * 0.8;
                ctx.beginPath();
                ctx.arc(nx, 0, 5, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        ctx.restore();
    }
    
    static drawFungalStructures(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Substrate
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(0, height * 0.85, width, height * 0.15);
        
        // Mycelium (network of hyphae)
        ctx.strokeStyle = '#E8D5B7';
        ctx.lineWidth = 3;
        
        // Vegetative hyphae
        for(let i = 0; i < 20; i++) {
            ctx.beginPath();
            const startX = Math.random() * width;
            const startY = height * 0.85;
            ctx.moveTo(startX, startY);
            
            for(let j = 0; j < 5; j++) {
                const endX = startX + (Math.random() - 0.5) * 40;
                const endY = startY - j * 30 - Math.random() * 20;
                ctx.lineTo(endX, endY);
            }
            ctx.stroke();
        }
        
        // Aerial hyphae with spores
        for(let i = 0; i < 5; i++) {
            const baseX = width * (0.2 + i * 0.15);
            ctx.strokeStyle = '#D4C5A9';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(baseX, height * 0.85);
            ctx.lineTo(baseX, height * 0.3);
            ctx.stroke();
            
            // Spore head
            ctx.fillStyle = '#8FBC8F';
            ctx.strokeStyle = '#556B2F';
            ctx.lineWidth = 1;
                       for(let j = 0; j < 12; j++) {
                const angle = (j / 12) * Math.PI * 2;
                const sporeX = baseX + Math.cos(angle) * 20;
                const sporeY = height * 0.3 + Math.sin(angle) * 20;
                ctx.beginPath();
                ctx.arc(sporeX, sporeY, 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            }
        }
        
        // Fruiting body (mushroom)
        const mushroomX = width * 0.7;
        
        // Stipe (stem)
        ctx.fillStyle = '#F5DEB3';
        ctx.strokeStyle = '#D2B48C';
        ctx.lineWidth = 2;
        ctx.fillRect(mushroomX - 15, height * 0.4, 30, height * 0.45);
        ctx.strokeRect(mushroomX - 15, height * 0.4, 30, height * 0.45);
        
        // Pileus (cap)
        ctx.fillStyle = '#CD853F';
        ctx.strokeStyle = '#8B4513';
        ctx.beginPath();
        ctx.ellipse(mushroomX, height * 0.4, 60, 30, 0, 0, Math.PI, true);
        ctx.fill();
        ctx.stroke();
        
        // Gills (underneath cap)
        ctx.strokeStyle = '#A0826D';
        ctx.lineWidth = 1;
        for(let i = 0; i < 20; i++) {
            const gillX = mushroomX - 50 + i * 5;
            ctx.beginPath();
            ctx.moveTo(gillX, height * 0.4);
            ctx.lineTo(gillX, height * 0.45);
            ctx.stroke();
        }
        
        // Spores falling from gills
        ctx.fillStyle = 'rgba(139, 69, 19, 0.5)';
        for(let i = 0; i < 15; i++) {
            const sporeX = mushroomX - 40 + Math.random() * 80;
            const sporeY = height * 0.45 + Math.random() * 150;
            ctx.beginPath();
            ctx.arc(sporeX, sporeY, 1.5, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.restore();
    }
    
    // ===== PROTIST SHAPES =====
    
    static drawAmoeba(ctx, x, y, size, showMovement = false) {
        ctx.save();
        ctx.translate(x, y);
        
        // Cell membrane (irregular shape with pseudopods)
        ctx.fillStyle = 'rgba(200, 230, 255, 0.7)';
        ctx.strokeStyle = '#4682B4';
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.moveTo(size * 0.3, 0);
        
        // Irregular outline with pseudopods
        const points = [
            [0.4, -0.2], [0.5, -0.3], [0.6, -0.25], [0.7, -0.1],
            [0.65, 0.1], [0.5, 0.2], [0.3, 0.3], [0.1, 0.35],
            [-0.1, 0.3], [-0.3, 0.25], [-0.45, 0.15], [-0.5, 0],
            [-0.45, -0.15], [-0.3, -0.25], [-0.1, -0.3], [0.1, -0.25]
        ];
        
        for(let i = 0; i < points.length; i++) {
            const [px, py] = points[i];
            const nextIdx = (i + 1) % points.length;
            const [nx, ny] = points[nextIdx];
            
            ctx.quadraticCurveTo(
                size * px, size * py,
                size * (px + nx) / 2, size * (py + ny) / 2
            );
        }
        
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Pseudopods extending
        if(showMovement) {
            ctx.strokeStyle = '#4682B4';
            ctx.lineWidth = size * 0.15;
            ctx.lineCap = 'round';
            
            // Leading pseudopod
            ctx.beginPath();
            ctx.moveTo(size * 0.6, size * -0.25);
            ctx.lineTo(size * 0.85, size * -0.4);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(size * 0.5, size * 0.2);
            ctx.lineTo(size * 0.7, size * 0.4);
            ctx.stroke();
        }
        
        // Nucleus
        ctx.fillStyle = '#8B4789';
        ctx.strokeStyle = '#6B3569';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.15, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Food vacuoles
        for(let i = 0; i < 4; i++) {
            const vx = (Math.random() - 0.5) * size * 0.6;
            const vy = (Math.random() - 0.5) * size * 0.5;
            ctx.fillStyle = 'rgba(139, 69, 19, 0.4)';
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(vx, vy, size * 0.08, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        
        // Contractile vacuole
        ctx.fillStyle = 'rgba(100, 150, 255, 0.3)';
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(size * 0.3, size * 0.15, size * 0.12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.restore();
    }
    
    static drawParamecium(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Cell body (slipper-shaped)
        ctx.fillStyle = 'rgba(200, 230, 200, 0.7)';
        ctx.strokeStyle = '#2E7D32';
        ctx.lineWidth = 3;
        
        ctx.beginPath();
        ctx.ellipse(0, 0, width * 0.3, height * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Oral groove
        ctx.strokeStyle = '#1B5E20';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(-width * 0.15, -height * 0.2);
        ctx.quadraticCurveTo(-width * 0.05, 0, -width * 0.15, height * 0.2);
        ctx.stroke();
        
        // Cilia (hair-like structures)
        ctx.strokeStyle = '#4CAF50';
        ctx.lineWidth = 1;
        
        for(let i = 0; i < 40; i++) {
            const angle = (i / 40) * Math.PI * 2;
            const baseX = Math.cos(angle) * width * 0.3;
            const baseY = Math.sin(angle) * height * 0.45;
            const tipX = Math.cos(angle) * (width * 0.3 + 15);
            const tipY = Math.sin(angle) * (height * 0.45 + 15);
            
            ctx.beginPath();
            ctx.moveTo(baseX, baseY);
            ctx.lineTo(tipX, tipY);
            ctx.stroke();
        }
        
        // Macronucleus (large, kidney-shaped)
        ctx.fillStyle = '#8B4789';
        ctx.strokeStyle = '#6B3569';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(-width * 0.05, -height * 0.1, width * 0.15, height * 0.08, -0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Micronucleus (small)
        ctx.beginPath();
        ctx.arc(width * 0.08, -height * 0.1, width * 0.05, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Contractile vacuoles (2)
        ctx.fillStyle = 'rgba(100, 150, 255, 0.5)';
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.arc(-width * 0.15, height * 0.25, width * 0.08, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(-width * 0.15, -height * 0.25, width * 0.08, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Food vacuoles
        ctx.fillStyle = 'rgba(139, 69, 19, 0.4)';
        for(let i = 0; i < 6; i++) {
            const vy = -height * 0.3 + (i / 5) * height * 0.6;
            ctx.beginPath();
            ctx.arc(width * 0.1, vy, width * 0.04, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Trichocysts (defense organelles)
        ctx.strokeStyle = '#FF6347';
        ctx.lineWidth = 2;
        for(let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const tx = Math.cos(angle) * width * 0.25;
            const ty = Math.sin(angle) * height * 0.4;
            ctx.beginPath();
            ctx.moveTo(tx, ty);
            ctx.lineTo(tx * 0.9, ty * 0.9);
            ctx.stroke();
        }
        
        ctx.restore();
    }
    
    static drawEuglena(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Cell body (elongated, flexible)
        ctx.fillStyle = 'rgba(150, 220, 150, 0.7)';
        ctx.strokeStyle = '#2E7D32';
        ctx.lineWidth = 3;
        
        ctx.beginPath();
        ctx.moveTo(0, -height * 0.45);
        ctx.bezierCurveTo(
            width * 0.25, -height * 0.3,
            width * 0.3, height * 0.1,
            width * 0.15, height * 0.35
        );
        ctx.bezierCurveTo(
            width * 0.1, height * 0.42,
            -width * 0.1, height * 0.42,
            -width * 0.15, height * 0.35
        );
        ctx.bezierCurveTo(
            -width * 0.3, height * 0.1,
            -width * 0.25, -height * 0.3,
            0, -height * 0.45
        );
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Pellicle (ridged surface)
        ctx.strokeStyle = '#1B5E20';
        ctx.lineWidth = 1;
        for(let i = 0; i < 15; i++) {
            const y1 = -height * 0.4 + (i / 14) * height * 0.8;
            ctx.beginPath();
            ctx.moveTo(-width * 0.2, y1);
            ctx.lineTo(width * 0.2, y1);
            ctx.stroke();
        }
        
        // Flagellum (long whip-like)
        ctx.strokeStyle = '#4CAF50';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, -height * 0.45);
        
        for(let i = 0; i <= 10; i++) {
            const t = i / 10;
            const fx = Math.sin(t * Math.PI * 3) * 20;
            const fy = -height * 0.45 - t * height * 0.8;
            ctx.lineTo(fx, fy);
        }
        ctx.stroke();
        
        // Reservoir (at anterior end)
        ctx.fillStyle = 'rgba(100, 150, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(0, -height * 0.35, width * 0.08, 0, Math.PI * 2);
        ctx.fill();
        
        // Eyespot (photoreceptor)
        ctx.fillStyle = '#FF4500';
        ctx.strokeStyle = '#8B0000';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(-width * 0.1, -height * 0.3, width * 0.06, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Nucleus
        ctx.fillStyle = '#8B4789';
        ctx.strokeStyle = '#6B3569';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, width * 0.12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Chloroplasts (many small green organelles)
        ctx.fillStyle = '#228B22';
        ctx.strokeStyle = '#006400';
        ctx.lineWidth = 1;
        
        for(let i = 0; i < 20; i++) {
            const cx = (Math.random() - 0.5) * width * 0.4;
            const cy = (Math.random() - 0.5) * height * 0.7;
            ctx.beginPath();
            ctx.ellipse(cx, cy, 6, 4, Math.random() * Math.PI, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        
        // Paramylon granules (storage)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        for(let i = 0; i < 8; i++) {
            const gx = (Math.random() - 0.5) * width * 0.3;
            const gy = (Math.random() - 0.5) * height * 0.6;
            ctx.beginPath();
            ctx.arc(gx, gy, 4, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Contractile vacuole
        ctx.fillStyle = 'rgba(100, 150, 255, 0.5)';
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(width * 0.15, height * 0.2, width * 0.08, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.restore();
    }
    
    // ===== MICROBIAL PROCESSES =====
    
    static drawBacterialConjugation(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        const cellWidth = width * 0.3;
        const cellHeight = height * 0.3;
        
        // Donor cell (F+ with plasmid)
        const donorX = width * 0.25;
        const donorY = height * 0.5;
        
        this.drawBacterialCell(ctx, donorX, donorY, cellWidth, cellHeight, 'bacillus', {
            showFlagella: false,
            showPili: false,
            showCapsule: false
        });
        
        // Plasmid in donor (F plasmid)
        ctx.fillStyle = '#FF69B4';
        ctx.strokeStyle = '#C71585';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(donorX - 20, donorY, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // F+ label
        ctx.font = 'bold 14px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('F+ (Donor)', donorX, donorY - cellHeight * 0.7);
        
        // Recipient cell (F-)
        const recipientX = width * 0.75;
        const recipientY = height * 0.5;
        
        this.drawBacterialCell(ctx, recipientX, recipientY, cellWidth, cellHeight, 'bacillus', {
            showFlagella: false,
            showPili: false,
            showCapsule: false
        });
        
        // F- label
        ctx.fillText('F- (Recipient)', recipientX, recipientY - cellHeight * 0.7);
        
        // Pilus connecting the cells
        ctx.strokeStyle = '#CD853F';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(donorX + cellWidth * 0.6, donorY);
        ctx.quadraticCurveTo(
            width * 0.5, donorY - 30,
            recipientX - cellWidth * 0.6, recipientY
        );
        ctx.stroke();
        
        // Pilus label
        ctx.font = '12px Arial';
        ctx.fillStyle = '#7F8C8D';
        ctx.fillText('Sex Pilus', width * 0.5, donorY - 40);
        
        // DNA transfer (plasmid being copied and transferred)
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 3;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(donorX + 20, donorY);
        ctx.quadraticCurveTo(
            width * 0.5, donorY,
            recipientX - 20, recipientY
        );
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Arrow showing direction
        const arrowX = width * 0.5;
        const arrowY = donorY;
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(arrowX + 10, arrowY);
        ctx.lineTo(arrowX, arrowY - 5);
        ctx.lineTo(arrowX, arrowY + 5);
        ctx.closePath();
        ctx.fill();
        
        // Label for DNA transfer
        ctx.font = '12px Arial';
        ctx.fillStyle = '#7F8C8D';
        ctx.fillText('Plasmid DNA', width * 0.5, donorY + 20);
        
        // Replicated plasmid in recipient (after transfer)
        ctx.fillStyle = 'rgba(255, 105, 180, 0.5)';
        ctx.strokeStyle = '#C71585';
        ctx.lineWidth = 2;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.arc(recipientX + 20, recipientY, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.setLineDash([]);
        
        ctx.restore();
    }
    
    static drawBinaryFission(ctx, x, y, width, height, showStages = true) {
        ctx.save();
        ctx.translate(x, y);
        
        if(showStages) {
            const stageWidth = width / 4.5;
            
            // Stage 1: Parent cell
            const stage1X = stageWidth * 0.5;
            const stage1Y = height * 0.5;
            
            this.drawBacterialCell(ctx, stage1X, stage1Y, 60, 60, 'bacillus', {
                showFlagella: false,
                showPili: false,
                showCapsule: false
            });
            
            ctx.font = '12px Arial';
            ctx.fillStyle = '#7F8C8D';
            ctx.textAlign = 'center';
            ctx.fillText('1. Parent Cell', stage1X, stage1Y + 60);
            
            // Arrow
            ctx.strokeStyle = '#2C3E50';
            ctx.fillStyle = '#2C3E50';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(stage1X + 40, stage1Y);
            ctx.lineTo(stage1X + 70, stage1Y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(stage1X + 70, stage1Y);
            ctx.lineTo(stage1X + 65, stage1Y - 5);
            ctx.lineTo(stage1X + 65, stage1Y + 5);
            ctx.closePath();
            ctx.fill();
            
            // Stage 2: DNA replication
            const stage2X = stageWidth * 1.7;
            
            this.drawBacterialCell(ctx, stage2X, stage1Y, 60, 60, 'bacillus', {
                showFlagella: false,
                showPili: false,
                showCapsule: false
            });
            
            // Two nucleoids
            ctx.fillStyle = '#FFD700';
            ctx.strokeStyle = '#FFA500';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(stage2X - 15, stage1Y, 12, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(stage2X + 15, stage1Y, 12, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            ctx.fillStyle = '#7F8C8D';
            ctx.fillText('2. DNA Replication', stage2X, stage1Y + 60);
            
            // Arrow
            ctx.strokeStyle = '#2C3E50';
            ctx.fillStyle = '#2C3E50';
            ctx.beginPath();
            ctx.moveTo(stage2X + 40, stage1Y);
            ctx.lineTo(stage2X + 70, stage1Y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(stage2X + 70, stage1Y);
            ctx.lineTo(stage2X + 65, stage1Y - 5);
            ctx.lineTo(stage2X + 65, stage1Y + 5);
            ctx.closePath();
            ctx.fill();
            
            // Stage 3: Cell elongation and septum formation
            const stage3X = stageWidth * 2.9;
            
            // Elongated cell
            ctx.fillStyle = '#B8E6B8';
            ctx.strokeStyle = '#2E7D32';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.roundRect(stage3X - 40, stage1Y - 15, 80, 30, 15);
            ctx.fill();
            ctx.stroke();
            
            // Septum forming
            ctx.strokeStyle = '#1B5E20';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(stage3X, stage1Y - 18);
            ctx.lineTo(stage3X, stage1Y + 18);
            ctx.stroke();
            
            // Nucleoids separated
            ctx.fillStyle = '#FFD700';
            ctx.strokeStyle = '#FFA500';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(stage3X - 20, stage1Y, 10, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(stage3X + 20, stage1Y, 10, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            ctx.fillStyle = '#7F8C8D';
            ctx.fillText('3. Septum Formation', stage3X, stage1Y + 60);
            
            // Arrow
            ctx.strokeStyle = '#2C3E50';
            ctx.fillStyle = '#2C3E50';
            ctx.beginPath();
            ctx.moveTo(stage3X + 50, stage1Y);
            ctx.lineTo(stage3X + 80, stage1Y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(stage3X + 80, stage1Y);
            ctx.lineTo(stage3X + 75, stage1Y - 5);
            ctx.lineTo(stage3X + 75, stage1Y + 5);
            ctx.closePath();
            ctx.fill();
            
            // Stage 4: Daughter cells
            const stage4X = stageWidth * 4.1;
            
            this.drawBacterialCell(ctx, stage4X - 25, stage1Y - 25, 50, 50, 'bacillus', {
                showFlagella: false,
                showPili: false,
                showCapsule: false
            });
            
            this.drawBacterialCell(ctx, stage4X - 25, stage1Y + 25, 50, 50, 'bacillus', {
                showFlagella: false,
                showPili: false,
                showCapsule: false
            });
            
            ctx.fillStyle = '#7F8C8D';
            ctx.fillText('4. Two Daughter Cells', stage4X, stage1Y + 60);
        }
        
        ctx.restore();
    }
    
    static drawNitrogenCycle(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) * 0.35;
        
        // Central N2 atmosphere
        ctx.fillStyle = 'rgba(135, 206, 250, 0.3)';
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(centerX, centerY * 0.3, 60, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('N₂ (Atmospheric', centerX, centerY * 0.28);
        ctx.fillText('Nitrogen)', centerX, centerY * 0.32);
        
        // Nitrogen fixation (N2 → NH3/NH4+)
        ctx.font = '14px Arial';
        ctx.fillStyle = '#228B22';
        ctx.fillText('Nitrogen Fixation', centerX - radius * 0.8, centerY * 0.6);
        ctx.font = '11px Arial';
        ctx.fillStyle = '#7F8C8D';
        ctx.fillText('(Rhizobium, Azotobacter)', centerX - radius * 0.8, centerY * 0.65);
        
        // Arrow for nitrogen fixation
        ctx.strokeStyle = '#228B22';
        ctx.fillStyle = '#228B22';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(centerX - 20, centerY * 0.4);
        ctx.lineTo(centerX - radius * 0.7, centerY * 0.7);
        ctx.stroke();
        this.drawArrowHead(ctx, centerX - radius * 0.7, centerY * 0.7, Math.PI / 4);
        
        // Ammonia/Ammonium (NH3/NH4+)
        ctx.fillStyle = 'rgba(255, 228, 181, 0.5)';
        ctx.strokeStyle = '#DAA520';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(centerX - radius * 0.7, centerY, 50, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.font = 'bold 14px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.fillText('NH₃/NH₄⁺', centerX - radius * 0.7, centerY);
        ctx.font = '11px Arial';
        ctx.fillText('(Ammonia)', centerX - radius * 0.7, centerY + 15);
        
        // Nitrification (NH4+ → NO2- → NO3-)
        ctx.font = '14px Arial';
        ctx.fillStyle = '#FF8C00';
        ctx.fillText('Nitrification', centerX, centerY + radius * 0.6);
        ctx.font = '11px Arial';
        ctx.fillStyle = '#7F8C8D';
        ctx.fillText('(Nitrosomonas,', centerX, centerY + radius * 0.65);
        ctx.fillText('Nitrobacter)', centerX, centerY + radius * 0.7);
        
        // Arrow for nitrification
        ctx.strokeStyle = '#FF8C00';
        ctx.fillStyle = '#FF8C00';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(centerX - radius * 0.5, centerY + 30);
        ctx.lineTo(centerX + radius * 0.5, centerY + 30);
        ctx.stroke();
        this.drawArrowHead(ctx, centerX + radius * 0.5, centerY + 30, 0);
        
        // Nitrate (NO3-)
        ctx.fillStyle = 'rgba(152, 251, 152, 0.5)';
        ctx.strokeStyle = '#32CD32';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(centerX + radius * 0.7, centerY, 50, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.font = 'bold 14px Arial';
        ctx.fillStyle = '#2C3E50';
               ctx.fillText('NO₃⁻', centerX + radius * 0.7, centerY);
        ctx.font = '11px Arial';
        ctx.fillText('(Nitrate)', centerX + radius * 0.7, centerY + 15);
        
        // Denitrification (NO3- → N2)
        ctx.font = '14px Arial';
        ctx.fillStyle = '#9370DB';
        ctx.fillText('Denitrification', centerX + radius * 0.8, centerY * 0.6);
        ctx.font = '11px Arial';
        ctx.fillStyle = '#7F8C8D';
        ctx.fillText('(Pseudomonas,', centerX + radius * 0.8, centerY * 0.65);
        ctx.fillText('Thiobacillus)', centerX + radius * 0.8, centerY * 0.7);
        
        // Arrow for denitrification
        ctx.strokeStyle = '#9370DB';
        ctx.fillStyle = '#9370DB';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(centerX + radius * 0.7, centerY - 40);
        ctx.lineTo(centerX + 20, centerY * 0.4);
        ctx.stroke();
        this.drawArrowHead(ctx, centerX + 20, centerY * 0.4, -Math.PI * 0.7);
        
        // Assimilation by plants
        ctx.font = '12px Arial';
        ctx.fillStyle = '#228B22';
        ctx.fillText('Plant/Microbial', centerX + radius * 0.5, centerY - 20);
        ctx.fillText('Assimilation', centerX + radius * 0.5, centerY - 5);
        
        // Ammonification (Decomposition)
        ctx.font = '14px Arial';
        ctx.fillStyle = '#8B4513';
        ctx.fillText('Ammonification', centerX - radius * 0.8, centerY + radius * 0.6);
        ctx.font = '11px Arial';
        ctx.fillStyle = '#7F8C8D';
        ctx.fillText('(Decomposers)', centerX - radius * 0.8, centerY + radius * 0.65);
        
        // Arrow for ammonification
        ctx.strokeStyle = '#8B4513';
        ctx.fillStyle = '#8B4513';
        ctx.lineWidth = 3;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(centerX - radius * 0.3, centerY + radius * 0.5);
        ctx.lineTo(centerX - radius * 0.5, centerY + 30);
        ctx.stroke();
        ctx.setLineDash([]);
        this.drawArrowHead(ctx, centerX - radius * 0.5, centerY + 30, Math.PI * 0.6);
        
        // Organic matter
        ctx.fillStyle = 'rgba(139, 69, 19, 0.3)';
        ctx.strokeStyle = '#654321';
        ctx.lineWidth = 2;
        ctx.fillRect(centerX - 40, centerY + radius * 0.5, 80, 40);
        ctx.strokeRect(centerX - 40, centerY + radius * 0.5, 80, 40);
        
        ctx.font = '12px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.fillText('Organic Matter', centerX, centerY + radius * 0.6);
        ctx.fillText('(Dead organisms)', centerX, centerY + radius * 0.65);
        
        ctx.restore();
    }
    
    static drawArrowHead(ctx, x, y, angle) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-10, -5);
        ctx.lineTo(-10, 5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
    
    static drawAntibioticMechanism(ctx, x, y, width, height, mechanism = 'cell_wall') {
        ctx.save();
        ctx.translate(x, y);
        
        const halfWidth = width / 2;
        
        // Left side: Normal bacterial cell
        ctx.font = 'bold 14px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('Normal Cell', halfWidth * 0.5, 30);
        
        this.drawBacterialCell(ctx, halfWidth * 0.5, height * 0.5, 80, 80, 'bacillus', {
            showFlagella: false,
            showPili: false,
            showCapsule: false
        });
        
        // Right side: Cell affected by antibiotic
        ctx.fillText('Antibiotic Effect', halfWidth * 1.5, 30);
        
        if(mechanism === 'cell_wall') {
            // Cell wall synthesis inhibition (e.g., Penicillin)
            ctx.fillStyle = 'rgba(184, 230, 184, 0.5)';
            ctx.strokeStyle = '#2E7D32';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.roundRect(halfWidth * 1.5 - 50, height * 0.5 - 30, 100, 60, 30);
            ctx.fill();
            ctx.stroke();
            ctx.setLineDash([]);
            
            // Weakened/broken cell wall
            ctx.strokeStyle = '#E74C3C';
            ctx.lineWidth = 3;
            ctx.setLineDash([10, 10]);
            ctx.beginPath();
            ctx.roundRect(halfWidth * 1.5 - 45, height * 0.5 - 25, 90, 50, 25);
            ctx.stroke();
            ctx.setLineDash([]);
            
            // Lysing cell
            ctx.fillStyle = 'rgba(231, 76, 60, 0.2)';
            ctx.beginPath();
            ctx.arc(halfWidth * 1.5, height * 0.5, 55, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.font = '12px Arial';
            ctx.fillStyle = '#7F8C8D';
            ctx.fillText('Cell wall synthesis', halfWidth * 1.5, height * 0.75);
            ctx.fillText('inhibited → Lysis', halfWidth * 1.5, height * 0.78);
            
        } else if(mechanism === 'protein_synthesis') {
            // Protein synthesis inhibition (e.g., Tetracycline)
            this.drawBacterialCell(ctx, halfWidth * 1.5, height * 0.5, 80, 80, 'bacillus', {
                showFlagella: false,
                showPili: false,
                showCapsule: false
            });
            
            // Ribosomes blocked
            ctx.strokeStyle = '#E74C3C';
            ctx.lineWidth = 3;
            for(let i = 0; i < 8; i++) {
                const rx = halfWidth * 1.5 + (Math.random() - 0.5) * 60;
                const ry = height * 0.5 + (Math.random() - 0.5) * 40;
                ctx.beginPath();
                ctx.moveTo(rx - 5, ry - 5);
                ctx.lineTo(rx + 5, ry + 5);
                ctx.moveTo(rx + 5, ry - 5);
                ctx.lineTo(rx - 5, ry + 5);
                ctx.stroke();
            }
            
            ctx.font = '12px Arial';
            ctx.fillStyle = '#7F8C8D';
            ctx.fillText('Ribosome blocked', halfWidth * 1.5, height * 0.75);
            ctx.fillText('No protein synthesis', halfWidth * 1.5, height * 0.78);
            
        } else if(mechanism === 'dna_replication') {
            // DNA replication inhibition (e.g., Quinolones)
            this.drawBacterialCell(ctx, halfWidth * 1.5, height * 0.5, 80, 80, 'bacillus', {
                showFlagella: false,
                showPili: false,
                showCapsule: false
            });
            
            // DNA damaged/tangled
            ctx.strokeStyle = '#E74C3C';
            ctx.lineWidth = 2;
            ctx.beginPath();
            for(let i = 0; i < 5; i++) {
                const angle = (i / 5) * Math.PI * 2;
                ctx.arc(
                    halfWidth * 1.5 + Math.cos(angle) * 10,
                    height * 0.5 + Math.sin(angle) * 10,
                    15,
                    0,
                    Math.PI * 2
                );
            }
            ctx.stroke();
            
            ctx.font = '12px Arial';
            ctx.fillStyle = '#7F8C8D';
            ctx.fillText('DNA gyrase inhibited', halfWidth * 1.5, height * 0.75);
            ctx.fillText('DNA cannot replicate', halfWidth * 1.5, height * 0.78);
            
        } else if(mechanism === 'cell_membrane') {
            // Cell membrane disruption (e.g., Polymyxins)
            ctx.fillStyle = 'rgba(184, 230, 184, 0.5)';
            ctx.strokeStyle = '#2E7D32';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.roundRect(halfWidth * 1.5 - 40, height * 0.5 - 30, 80, 60, 30);
            ctx.fill();
            
            // Disrupted membrane
            ctx.strokeStyle = '#E74C3C';
            ctx.lineWidth = 3;
            for(let i = 0; i < 12; i++) {
                const angle = (i / 12) * Math.PI * 2;
                const r = 35 + Math.random() * 10;
                ctx.beginPath();
                ctx.arc(
                    halfWidth * 1.5 + Math.cos(angle) * r,
                    height * 0.5 + Math.sin(angle) * r,
                    3,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
            }
            
            // Leaking contents
            ctx.fillStyle = 'rgba(180, 230, 180, 0.3)';
            for(let i = 0; i < 10; i++) {
                const px = halfWidth * 1.5 + (Math.random() - 0.5) * 80;
                const py = height * 0.5 + 40 + Math.random() * 40;
                ctx.beginPath();
                ctx.arc(px, py, 3, 0, Math.PI * 2);
                ctx.fill();
            }
            
            ctx.font = '12px Arial';
            ctx.fillStyle = '#7F8C8D';
            ctx.fillText('Membrane disrupted', halfWidth * 1.5, height * 0.8);
            ctx.fillText('Cell contents leak', halfWidth * 1.5, height * 0.83);
        }
        
        // Antibiotic molecule
        ctx.fillStyle = '#FF6347';
        ctx.strokeStyle = '#DC143C';
        ctx.lineWidth = 2;
        for(let i = 0; i < 5; i++) {
            const ax = halfWidth * 1.5 + (Math.random() - 0.5) * 100;
            const ay = height * 0.3 + Math.random() * 20;
            ctx.beginPath();
            ctx.arc(ax, ay, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        
        ctx.font = '11px Arial';
        ctx.fillStyle = '#DC143C';
        ctx.fillText('Antibiotic molecules', halfWidth * 1.5, height * 0.25);
        
        ctx.restore();
    }
    
    // ===== LABORATORY TECHNIQUES =====
    
    static drawStreakPlate(ctx, x, y, diameter, pattern = 'quadrant') {
        ctx.save();
        ctx.translate(x, y);
        
        const radius = diameter / 2;
        
        // Petri dish
        ctx.fillStyle = '#F5F5DC';
        ctx.strokeStyle = '#A0A0A0';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Agar (slightly different color)
        ctx.fillStyle = '#FFF8DC';
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.95, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 2;
        
        if(pattern === 'quadrant') {
            // Quadrant streak pattern
            // Quadrant 1
            ctx.beginPath();
            ctx.moveTo(-radius * 0.8, -radius * 0.5);
            for(let i = 0; i < 8; i++) {
                ctx.lineTo(-radius * 0.8 + i * 10, -radius * 0.5 + (i % 2) * 5);
            }
            ctx.stroke();
            
            // Quadrant 2
            ctx.beginPath();
            ctx.moveTo(radius * 0.2, -radius * 0.7);
            for(let i = 0; i < 8; i++) {
                ctx.lineTo(radius * 0.2 + (i % 2) * 5, -radius * 0.7 + i * 8);
            }
            ctx.stroke();
            
            // Quadrant 3
            ctx.beginPath();
            ctx.moveTo(radius * 0.6, -radius * 0.2);
            for(let i = 0; i < 8; i++) {
                ctx.lineTo(radius * 0.6 - i * 8, -radius * 0.2 + (i % 2) * 5);
            }
            ctx.stroke();
            
            // Quadrant 4
            ctx.beginPath();
            ctx.moveTo(-radius * 0.1, radius * 0.3);
            for(let i = 0; i < 8; i++) {
                ctx.lineTo(-radius * 0.1 + (i % 2) * 5, radius * 0.3 + i * 6);
            }
            ctx.stroke();
            
            // Bacterial colonies (more isolated in later quadrants)
            ctx.fillStyle = '#FFE4B5';
            ctx.strokeStyle = '#DEB887';
            ctx.lineWidth = 1;
            
            // Quadrant 1 - many colonies
            for(let i = 0; i < 30; i++) {
                const cx = -radius * 0.5 + Math.random() * radius * 0.4;
                const cy = -radius * 0.5 + Math.random() * radius * 0.3;
                ctx.beginPath();
                ctx.arc(cx, cy, 2 + Math.random() * 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            }
            
            // Quadrant 2 - fewer colonies
            for(let i = 0; i < 15; i++) {
                const cx = radius * 0.3 + Math.random() * radius * 0.3;
                const cy = -radius * 0.5 + Math.random() * radius * 0.4;
                ctx.beginPath();
                ctx.arc(cx, cy, 2 + Math.random() * 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            }
            
            // Quadrant 3 - isolated colonies
            for(let i = 0; i < 8; i++) {
                const cx = radius * 0.1 + Math.random() * radius * 0.4;
                const cy = Math.random() * radius * 0.4;
                ctx.beginPath();
                ctx.arc(cx, cy, 3 + Math.random() * 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            }
            
            // Quadrant 4 - well isolated
            for(let i = 0; i < 5; i++) {
                const cx = -radius * 0.3 + Math.random() * radius * 0.4;
                const cy = radius * 0.4 + Math.random() * radius * 0.3;
                ctx.beginPath();
                ctx.arc(cx, cy, 4 + Math.random() * 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            }
        }
        
        // Dish edge highlight
        ctx.strokeStyle = '#E0E0E0';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.98, Math.PI * 0.7, Math.PI * 1.3);
        ctx.stroke();
        
        ctx.restore();
    }
    
    static drawMicroscope(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Base
        ctx.fillStyle = '#4A4A4A';
        ctx.strokeStyle = '#2C2C2C';
        ctx.lineWidth = 2;
        ctx.fillRect(-width * 0.4, height * 0.85, width * 0.8, height * 0.15);
        ctx.strokeRect(-width * 0.4, height * 0.85, width * 0.8, height * 0.15);
        
        // Arm
        ctx.fillStyle = '#5A5A5A';
        ctx.strokeStyle = '#2C2C2C';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-width * 0.1, height * 0.85);
        ctx.lineTo(-width * 0.15, height * 0.3);
        ctx.lineTo(width * 0.15, height * 0.1);
        ctx.lineTo(width * 0.2, height * 0.1);
        ctx.lineTo(width * 0.2, height * 0.15);
        ctx.lineTo(width * 0.1, height * 0.15);
        ctx.lineTo(-width * 0.05, height * 0.35);
        ctx.lineTo(0, height * 0.85);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Stage
        ctx.fillStyle = '#6A6A6A';
        ctx.fillRect(-width * 0.3, height * 0.5, width * 0.6, height * 0.08);
        ctx.strokeRect(-width * 0.3, height * 0.5, width * 0.6, height * 0.08);
        
        // Stage clips
        ctx.fillStyle = '#3A3A3A';
        ctx.fillRect(-width * 0.25, height * 0.52, width * 0.08, height * 0.04);
        ctx.fillRect(width * 0.17, height * 0.52, width * 0.08, height * 0.04);
        
        // Slide on stage
        ctx.fillStyle = 'rgba(173, 216, 230, 0.6)';
        ctx.strokeStyle = '#87CEEB';
        ctx.lineWidth = 1;
        ctx.fillRect(-width * 0.15, height * 0.515, width * 0.3, height * 0.05);
        ctx.strokeRect(-width * 0.15, height * 0.515, width * 0.3, height * 0.05);
        
        // Objective lenses
        const lensY = height * 0.6;
        ctx.fillStyle = '#7A7A7A';
        ctx.strokeStyle = '#2C2C2C';
        
        // Revolving nosepiece
        ctx.beginPath();
        ctx.arc(0, lensY, width * 0.12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Individual objectives
        for(let i = 0; i < 3; i++) {
            const angle = (i / 3) * Math.PI * 2 + Math.PI / 2;
            const lx = Math.cos(angle) * width * 0.12;
            const ly = lensY + Math.sin(angle) * width * 0.12;
            
            ctx.fillStyle = '#4A4A4A';
            ctx.beginPath();
            ctx.moveTo(lx, ly);
            ctx.lineTo(lx - 8, ly + 25);
            ctx.lineTo(lx + 8, ly + 25);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            
            // Lens
            ctx.fillStyle = '#000080';
            ctx.beginPath();
            ctx.arc(lx, ly + 28, 6, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Illuminator/Light source
        ctx.fillStyle = '#FFD700';
        ctx.strokeStyle = '#FFA500';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, height * 0.46, width * 0.08, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Light rays
        ctx.strokeStyle = 'rgba(255, 255, 0, 0.4)';
        ctx.lineWidth = 2;
        for(let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(Math.cos(angle) * width * 0.08, height * 0.46 + Math.sin(angle) * width * 0.08);
            ctx.lineTo(Math.cos(angle) * width * 0.15, height * 0.46 + Math.sin(angle) * width * 0.15);
            ctx.stroke();
        }
        
        // Eyepiece
        ctx.fillStyle = '#5A5A5A';
        ctx.strokeStyle = '#2C2C2C';
        ctx.lineWidth = 2;
        ctx.fillRect(width * 0.12, height * 0.05, width * 0.12, height * 0.1);
        ctx.strokeRect(width * 0.12, height * 0.05, width * 0.12, height * 0.1);
        
        // Eyepiece lens
        ctx.fillStyle = '#000080';
        ctx.beginPath();
        ctx.arc(width * 0.18, height * 0.05, width * 0.04, 0, Math.PI * 2);
        ctx.fill();
        
        // Coarse/Fine adjustment knobs
        ctx.fillStyle = '#6A6A6A';
        ctx.strokeStyle = '#3A3A3A';
        
        // Coarse knob
        ctx.beginPath();
        ctx.arc(-width * 0.18, height * 0.4, width * 0.06, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Fine knob
        ctx.beginPath();
        ctx.arc(-width * 0.18, height * 0.5, width * 0.045, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.restore();
    }
    
    static drawGrowthCurve(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Axes
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(50, height - 50);
        ctx.lineTo(width - 20, height - 50);
        ctx.moveTo(50, height - 50);
        ctx.lineTo(50, 30);
        ctx.stroke();
        
        // Axis labels
        ctx.font = 'bold 14px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('Time', width / 2, height - 10);
        
        ctx.save();
        ctx.translate(15, height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('Log (Number of Cells)', 0, 0);
        ctx.restore();
        
        // Growth curve
        const phases = [
            { name: 'Lag', start: 0.05, end: 0.2, growth: 0 },
            { name: 'Log/Exponential', start: 0.2, end: 0.5, growth: 1 },
            { name: 'Stationary', start: 0.5, end: 0.75, growth: 0 },
            { name: 'Death', start: 0.75, end: 0.95, growth: -0.5 }
        ];
        
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        let currentY = height - 150;
        ctx.moveTo(50 + phases[0].start * (width - 70), currentY);
        
        for(let phase of phases) {
            const startX = 50 + phase.start * (width - 70);
            const endX = 50 + phase.end * (width - 70);
            const points = 50;
            
            for(let i = 0; i <= points; i++) {
                const t = i / points;
                const x = startX + t * (endX - startX);
                
                if(phase.growth > 0) {
                    // Exponential growth
                    currentY = (height - 150) - (t * 150 * phase.growth);
                } else if(phase.growth < 0) {
                    // Death phase
                    currentY = (height - 300) + (t * 100);
                }
                // Stationary stays at currentY
                
                ctx.lineTo(x, currentY);
            }
        }
        ctx.stroke();
        
        // Phase labels and dividing lines
        ctx.font = '12px Arial';
        ctx.fillStyle = '#7F8C8D';
        ctx.strokeStyle = '#BDC3C7';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        
        for(let phase of phases) {
            const midX = 50 + (phase.start + phase.end) / 2 * (width - 70);
            
            // Vertical dividing line
            if(phase.start > 0.05) {
                const divX = 50 + phase.start * (width - 70);
                ctx.beginPath();
                ctx.moveTo(divX, 30);
                ctx.lineTo(divX, height - 50);
                ctx.stroke();
            }
            
            // Phase label
            ctx.fillText(phase.name, midX, height - 60);
            ctx.fillText('Phase', midX, height - 45);
        }
        
        ctx.setLineDash([]);
        
        // Y-axis tick marks and labels
        ctx.font = '10px Arial';
        ctx.textAlign = 'right';
        for(let i = 0; i <= 5; i++) {
            const y = height - 50 - (i / 5) * 250;
            ctx.beginPath();
            ctx.moveTo(45, y);
            ctx.lineTo(50, y);
            ctx.stroke();
            ctx.fillText(`10^${i}`, 40, y + 3);
        }
        
        ctx.restore();
    }
}

// ============================================================================
// MICROBIOLOGY DIAGRAM RENDERER CLASS
// ============================================================================

class MicrobiologyDiagramRenderer {
    constructor(canvas = null) {
        this.defaultFont = 'Arial, sans-serif';
        this.defaultFontSize = 12;
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
        this.currentFrame = 0;
    }

    renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = MicrobiologyDiagramsRegistry.getDiagram(diagramKey);
        if (!diagram) {
            throw new Error(`Microbiology diagram '${diagramKey}' not found`);
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
                // ===== BACTERIAL STRUCTURES =====
                case 'bacterialCell':
                    this.renderBacterialCellDiagram(centerX, centerY, width * 0.4, height * 0.6, mergedOptions);
                    break;
                case 'bacterialShapes':
                    this.renderBacterialShapesDiagram(centerX, centerY, width * 0.9, height * 0.8, mergedOptions);
                    break;
                case 'gramStaining':
                    this.renderGramStainingDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'endospore':
                    this.renderEndosporeDiagram(centerX, centerY, width * 0.5, height * 0.6, mergedOptions);
                    break;
                case 'biofilm':
                    this.renderBiofilmDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;

                // ===== VIRAL STRUCTURES =====
                case 'virusStructure':
                    this.renderVirusStructureDiagram(centerX, centerY, Math.min(width, height) * 0.5, mergedOptions);
                    break;
                case 'viralReplication':
                    this.renderViralReplicationDiagram(centerX, centerY, width * 0.9, height * 0.7, mergedOptions);
                    break;
                                case 'bacteriophage':
                    this.renderBacteriophageDiagram(centerX, centerY, width * 0.4, height * 0.7, mergedOptions);
                    break;

                // ===== FUNGAL STRUCTURES =====
                case 'fungalCell':
                    this.renderFungalCellDiagram(centerX, centerY, width * 0.5, height * 0.6, mergedOptions);
                    break;
                case 'fungalStructures':
                    this.renderFungalStructuresDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;

                // ===== PROTIST STRUCTURES =====
                case 'amoeba':
                    this.renderAmoebaDiagram(centerX, centerY, Math.min(width, height) * 0.5, mergedOptions);
                    break;
                case 'paramecium':
                    this.renderParameciumDiagram(centerX, centerY, width * 0.4, height * 0.7, mergedOptions);
                    break;
                case 'euglena':
                    this.renderEuglenaDiagram(centerX, centerY, width * 0.4, height * 0.7, mergedOptions);
                    break;

                // ===== MICROBIAL PROCESSES =====
                case 'bacterialConjugation':
                    this.renderBacterialConjugationDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'binaryFission':
                    this.renderBinaryFissionDiagram(centerX, centerY, width * 0.9, height * 0.6, mergedOptions);
                    break;
                case 'nitrogenCycle':
                    this.renderNitrogenCycleDiagram(centerX, centerY, width * 0.8, height * 0.8, mergedOptions);
                    break;
                case 'antibioticMechanism':
                    this.renderAntibioticMechanismDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;

                // ===== LABORATORY TECHNIQUES =====
                case 'streakPlate':
                    this.renderStreakPlateDiagram(centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;
                case 'microscopeSetup':
                    this.renderMicroscopeDiagram(centerX, centerY, width * 0.5, height * 0.8, mergedOptions);
                    break;
                case 'cultureMethods':
                    this.renderCultureMethodsDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;

                // ===== MICROBIAL GROWTH =====
                case 'growthCurve':
                    this.renderGrowthCurveDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'colonyMorphology':
                    this.renderColonyMorphologyDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
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

    // ========== RENDERING METHODS ==========

    renderBacterialCellDiagram(x, y, width, height, options) {
        const { showLabels, type, showFlagella, showPili } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        MicrobiologyShapes.drawBacterialCell(this.ctx, width / 2, height / 2, width * 0.4, height * 0.4, type, {
            showFlagella,
            showPili,
            showCapsule: true
        });

        if (showLabels) {
            this.addLabel('Capsule', width * 0.8, height * 0.1, '#4169E1');
            this.addLabel('Cell Wall', width * 0.8, height * 0.25, '#2E7D32');
            this.addLabel('Cell Membrane', width * 0.8, height * 0.35, '#1B5E20');
            this.addLabel('Cytoplasm', width * 0.8, height * 0.45, '#B8E6B8');
            this.addLabel('Nucleoid\n(DNA)', width * 0.15, height * 0.5, '#FFD700');
            this.addLabel('Ribosomes', width * 0.15, height * 0.65, '#8B4513');
            this.addLabel('Plasmid', width * 0.75, height * 0.6, '#FF69B4');
            if (showFlagella) {
                this.addLabel('Flagellum', width * 0.85, height * 0.5, '#A0522D');
            }
            if (showPili) {
                this.addLabel('Pili', width * 0.2, height * 0.15, '#CD853F');
            }
        }

        this.ctx.restore();
    }

    renderBacterialShapesDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        MicrobiologyShapes.drawBacterialShapes(this.ctx, 0, 0, width, height);

        this.ctx.restore();
    }

    renderGramStainingDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        MicrobiologyShapes.drawGramStaining(this.ctx, 0, 0, width, height);

        if (showLabels) {
            // Additional explanatory labels
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            
            this.ctx.fillText('Retains crystal violet', width * 0.25, height * 0.88);
            this.ctx.fillText('(appears purple)', width * 0.25, height * 0.91);
            
            this.ctx.fillText('Loses crystal violet,', width * 0.75, height * 0.88);
            this.ctx.fillText('takes up safranin (pink/red)', width * 0.75, height * 0.91);
        }

        this.ctx.restore();
    }

    renderEndosporeDiagram(x, y, width, height, options) {
        const { showLabels, showFormation } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        if (showFormation) {
            // Show stages of sporulation
            const stageWidth = width / 5;
            
            for (let i = 0; i < 5; i++) {
                const stageX = stageWidth * (i + 0.5);
                const stageY = height / 2;
                
                this.ctx.save();
                this.ctx.translate(stageX, stageY);
                this.ctx.scale(0.6, 0.6);
                MicrobiologyShapes.drawEndospore(this.ctx, 0, 0, 80, 80);
                this.ctx.restore();
                
                this.ctx.font = '10px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'center';
                const stages = ['Vegetative', 'DNA replication', 'Septum forms', 'Coat develops', 'Mature spore'];
                this.ctx.fillText(stages[i], stageX, stageY + 50);
            }
        } else {
            MicrobiologyShapes.drawEndospore(this.ctx, width / 2, height / 2, width * 0.6, height * 0.6);
            
            if (showLabels) {
                this.addLabel('Exosporium', width * 0.8, height * 0.3, '#8B4513');
                this.addLabel('Spore Coat', width * 0.8, height * 0.45, '#D2691E');
                this.addLabel('Cortex', width * 0.8, height * 0.6, '#DEB887');
                this.addLabel('Core\n(DNA)', width * 0.15, height * 0.5, '#FFD700');
            }
        }

        this.ctx.restore();
    }

    renderBiofilmDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        MicrobiologyShapes.drawBiofilm(this.ctx, 0, 0, width, height);

        if (showLabels) {
            this.addLabel('EPS Matrix', width * 0.3, height * 0.3, '#50C878');
            this.addLabel('Bacteria', width * 0.6, height * 0.6, '#2E7D32');
            this.addLabel('Water\nChannels', width * 0.8, height * 0.5, '#4169E1');
            this.addLabel('Surface', width * 0.5, height * 0.95, '#7F8C8D');
            this.addLabel('Nutrients', width * 0.15, height * 0.2, '#FFA500');
        }

        this.ctx.restore();
    }

    renderVirusStructureDiagram(x, y, size, options) {
        const { showLabels, type } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        MicrobiologyShapes.drawVirus(this.ctx, 0, 0, size, type);

        if (showLabels) {
            if (type === 'bacteriophage') {
                this.addLabel('Head\n(Capsid)', -size * 0.7, -size * 0.2, '#4A90E2');
                this.addLabel('DNA', -size * 0.7, 0, '#FFD700');
                this.addLabel('Collar', size * 0.6, size * 0.3, '#5AA9E6');
                this.addLabel('Tail\nSheath', size * 0.6, size * 0.6, '#7FC8F8');
                this.addLabel('Base\nPlate', size * 0.6, size * 0.9, '#5AA9E6');
                this.addLabel('Tail\nFibers', size * 0.8, size * 1.2, '#2E5C8A');
            } else if (type === 'enveloped' || type === 'coronavirus') {
                this.addLabel('Envelope', -size * 0.8, size * 0.5, '#E74C3C');
                this.addLabel('Spike\nProteins', size * 0.7, -size * 0.5, '#C0392B');
                this.addLabel('Capsid', size * 0.7, size * 0.2, '#4A90E2');
                this.addLabel('RNA/DNA', size * 0.7, size * 0.5, '#FFD700');
            } else if (type === 'naked') {
                this.addLabel('Capsid', -size * 0.7, size * 0.3, '#4A90E2');
                this.addLabel('Capsomeres', size * 0.6, -size * 0.4, '#5AA9E6');
                this.addLabel('Nucleic\nAcid', size * 0.6, size * 0.4, '#FFD700');
            }
        }

        this.ctx.restore();
    }

    renderViralReplicationDiagram(x, y, width, height, options) {
        const { showLabels, cycle } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        MicrobiologyShapes.drawViralReplication(this.ctx, 0, 0, width, height, cycle);

        this.ctx.restore();
    }

    renderBacteriophageDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        const size = Math.min(width, height) * 0.8;
        MicrobiologyShapes.drawVirus(this.ctx, width / 2, height / 2, size, 'bacteriophage');

        if (showLabels) {
            // Detailed labels for T4 phage
            this.addLabel('Icosahedral\nHead', width * 0.15, height * 0.2, '#4A90E2');
            this.addLabel('Packaged\nDNA', width * 0.15, height * 0.35, '#FFD700');
            this.addLabel('Collar', width * 0.8, height * 0.42, '#5AA9E6');
            this.addLabel('Contractile\nTail Sheath', width * 0.8, height * 0.6, '#7FC8F8');
            this.addLabel('Tail Tube', width * 0.2, height * 0.6, '#4A90E2');
            this.addLabel('Base Plate', width * 0.8, height * 0.78, '#5AA9E6');
            this.addLabel('Tail Fibers\n(recognize host)', width * 0.2, height * 0.92, '#2E5C8A');
        }

        this.ctx.restore();
    }

    renderFungalCellDiagram(x, y, width, height, options) {
        const { showLabels, type } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        MicrobiologyShapes.drawFungalCell(this.ctx, width / 2, height / 2, width * 0.6, height * 0.6, type);

        if (showLabels) {
            if (type === 'yeast') {
                this.addLabel('Cell Wall', width * 0.8, height * 0.25, '#8B7355');
                this.addLabel('Nucleus', width * 0.2, height * 0.35, '#8B4789');
                this.addLabel('Vacuole', width * 0.8, height * 0.6, '#4682B4');
                this.addLabel('Mitochondria', width * 0.2, height * 0.65, '#FF6B6B');
                this.addLabel('Bud', width * 0.8, height * 0.45, '#E8D5B7');
            } else if (type === 'hyphae') {
                this.addLabel('Hypha', width * 0.5, height * 0.15, '#8B7355');
                this.addLabel('Septum', width * 0.8, height * 0.5, '#A0826D');
                this.addLabel('Nuclei', width * 0.2, height * 0.5, '#8B4789');
                this.addLabel('Septal\nPore', width * 0.8, height * 0.7, '#7F8C8D');
            }
        }

        this.ctx.restore();
    }

    renderFungalStructuresDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        MicrobiologyShapes.drawFungalStructures(this.ctx, 0, 0, width, height);

        if (showLabels) {
            this.addLabel('Mycelium\n(vegetative hyphae)', width * 0.3, height * 0.7, '#E8D5B7');
            this.addLabel('Aerial\nHyphae', width * 0.5, height * 0.5, '#D4C5A9');
            this.addLabel('Spores', width * 0.3, height * 0.25, '#8FBC8F');
            this.addLabel('Fruiting Body\n(Mushroom)', width * 0.85, height * 0.3, '#CD853F');
            this.addLabel('Pileus\n(Cap)', width * 0.85, height * 0.35, '#CD853F');
            this.addLabel('Gills', width * 0.85, height * 0.48, '#A0826D');
            this.addLabel('Stipe\n(Stem)', width * 0.85, height * 0.65, '#F5DEB3');
        }

        this.ctx.restore();
    }

    renderAmoebaDiagram(x, y, size, options) {
        const { showLabels, showMovement } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        MicrobiologyShapes.drawAmoeba(this.ctx, 0, 0, size, showMovement);

        if (showLabels) {
            this.addLabel('Cell\nMembrane', -size * 0.6, -size * 0.4, '#4682B4');
            this.addLabel('Nucleus', size * 0.5, 0, '#8B4789');
            this.addLabel('Food\nVacuole', -size * 0.4, size * 0.3, '#8B4513');
            this.addLabel('Contractile\nVacuole', size * 0.5, size * 0.4, '#4169E1');
            if (showMovement) {
                this.addLabel('Pseudopod', size * 0.8, -size * 0.5, '#4682B4');
            }
        }

        this.ctx.restore();
    }

    renderParameciumDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        MicrobiologyShapes.drawParamecium(this.ctx, width / 2, height / 2, width * 0.5, height * 0.7);

        if (showLabels) {
            this.addLabel('Cilia', width * 0.8, height * 0.3, '#4CAF50');
            this.addLabel('Oral\nGroove', width * 0.2, height * 0.5, '#1B5E20');
            this.addLabel('Macronucleus', width * 0.75, height * 0.4, '#8B4789');
            this.addLabel('Micronucleus', width * 0.75, height * 0.48, '#8B4789');
            this.addLabel('Contractile\nVacuole', width * 0.2, height * 0.25, '#4169E1');
            this.addLabel('Food\nVacuoles', width * 0.75, height * 0.65, '#8B4513');
        }

        this.ctx.restore();
    }

    renderEuglenaDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        MicrobiologyShapes.drawEuglena(this.ctx, width / 2, height / 2, width * 0.5, height * 0.7);

        if (showLabels) {
            this.addLabel('Flagellum', width * 0.3, height * 0.05, '#4CAF50');
            this.addLabel('Reservoir', width * 0.75, height * 0.15, '#4169E1');
            this.addLabel('Eyespot', width * 0.2, height * 0.2, '#FF4500');
            this.addLabel('Nucleus', width * 0.75, height * 0.48, '#8B4789');
            this.addLabel('Chloroplasts', width * 0.2, height * 0.5, '#228B22');
            this.addLabel('Pellicle', width * 0.8, height * 0.65, '#2E7D32');
            this.addLabel('Contractile\nVacuole', width * 0.75, height * 0.72, '#4169E1');
        }

        this.ctx.restore();
    }

    renderBacterialConjugationDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        MicrobiologyShapes.drawBacterialConjugation(this.ctx, 0, 0, width, height);

        this.ctx.restore();
    }

    renderBinaryFissionDiagram(x, y, width, height, options) {
        const { showLabels, showStages } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        MicrobiologyShapes.drawBinaryFission(this.ctx, 0, 0, width, height, showStages);

        this.ctx.restore();
    }

    renderNitrogenCycleDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        MicrobiologyShapes.drawNitrogenCycle(this.ctx, 0, 0, width, height);

        this.ctx.restore();
    }

    renderAntibioticMechanismDiagram(x, y, width, height, options) {
        const { showLabels, mechanism } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        MicrobiologyShapes.drawAntibioticMechanism(this.ctx, 0, 0, width, height, mechanism);

        this.ctx.restore();
    }

    renderStreakPlateDiagram(x, y, diameter, options) {
        const { showLabels, pattern } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        MicrobiologyShapes.drawStreakPlate(this.ctx, 0, 0, diameter, pattern);

        if (showLabels) {
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Purpose: Isolate pure bacterial colonies', 0, diameter * 0.65);
        }

        this.ctx.restore();
    }

    renderMicroscopeDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        MicrobiologyShapes.drawMicroscope(this.ctx, 0, 0, width, height);

        if (showLabels) {
            this.addLabel('Eyepiece', width * 0.35, height * 0.03, '#5A5A5A', 'left');
            this.addLabel('Arm', width * 0.05, height * 0.5, '#5A5A5A', 'left');
            this.addLabel('Stage', width * 0.7, height * 0.54, '#6A6A6A', 'left');
            this.addLabel('Objective\nLenses', width * 0.7, height * 0.65, '#4A4A4A', 'left');
            this.addLabel('Illuminator', width * 0.7, height * 0.45, '#FFD700', 'left');
            this.addLabel('Coarse\nAdjustment', width * 0.05, height * 0.38, '#6A6A6A', 'left');
            this.addLabel('Fine\nAdjustment', width * 0.05, height * 0.48, '#6A6A6A', 'left');
            this.addLabel('Base', width * 0.7, height * 0.92, '#4A4A4A', 'left');
        }

        this.ctx.restore();
    }

    renderCultureMethodsDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        const methodWidth = width / 3;

        // Agar plate
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Agar Plate', methodWidth * 0.5, 30);

        MicrobiologyShapes.drawStreakPlate(this.ctx, methodWidth * 0.5, height * 0.5, methodWidth * 0.8, 'quadrant');

        // Broth culture
        this.ctx.fillText('Broth Culture', methodWidth * 1.5, 30);

        // Test tube
        ctx.fillStyle = 'rgba(173, 216, 230, 0.3)';
        this.ctx.strokeStyle = '#87CEEB';
        this.ctx.lineWidth = 3;
        this.ctx.fillRect(methodWidth * 1.3, height * 0.25, methodWidth * 0.4, height * 0.6);
        this.ctx.strokeRect(methodWidth * 1.3, height * 0.25, methodWidth * 0.4, height * 0.6);

        // Broth (liquid medium)
        this.ctx.fillStyle = 'rgba(255, 228, 181, 0.6)';
        this.ctx.fillRect(methodWidth * 1.3, height * 0.5, methodWidth * 0.4, height * 0.35);

        // Turbidity (bacterial growth)
        this.ctx.fillStyle = 'rgba(139, 69, 19, 0.3)';
        for (let i = 0; i < 50; i++) {
            const bx = methodWidth * 1.3 + Math.random() * methodWidth * 0.4;
            const by = height * 0.5 + Math.random() * height * 0.35;
            this.ctx.fillRect(bx, by, 2, 2);
        }

        // Agar slant
        this.ctx.fillText('Agar Slant', methodWidth * 2.5, 30);

        // Slant tube
        this.ctx.strokeStyle = '#87CEEB';
        this.ctx.lineWidth = 3;
        this.ctx.strokeRect(methodWidth * 2.3, height * 0.25, methodWidth * 0.4, height * 0.6);

        // Slanted agar
        this.ctx.fillStyle = '#FFF8DC';
        this.ctx.strokeStyle = '#DEB887';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(methodWidth * 2.3, height * 0.6);
        this.ctx.lineTo(methodWidth * 2.3, height * 0.85);
        this.ctx.lineTo(methodWidth * 2.7, height * 0.85);
        this.ctx.lineTo(methodWidth * 2.7, height * 0.4);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        // Bacterial growth on slant
        this.ctx.fillStyle = '#FFE4B5';
        this.ctx.fillRect(methodWidth * 2.35, height * 0.65, methodWidth * 0.3, height * 0.05);

        this.ctx.restore();
    }

    renderGrowthCurveDiagram(x, y, width, height, options) {
        const { showLabels, showPhases } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        MicrobiologyShapes.drawGrowthCurve(this.ctx, 0, 0, width, height);

        this.ctx.restore();
    }

    renderColonyMorphologyDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        // Draw different colony types
        const colonyTypes = [
            { name: 'Circular', x: 0.15, y: 0.3, shape: 'circular' },
            { name: 'Irregular', x: 0.4, y: 0.3, shape: 'irregular' },
            { name: 'Filamentous', x: 0.65, y: 0.3, shape: 'filamentous' },
            { name: 'Punctiform', x: 0.9, y: 0.3, shape: 'punctiform' }
        ];

        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Colony Morphology', width / 2, 25);

        colonyTypes.forEach(colony => {
            const cx = width * colony.x;
            const cy = height * colony.y;

            // Draw colony based on shape
            this.ctx.fillStyle = '#FFE4B5';
            this.ctx.strokeStyle = '#DEB887';
            this.ctx.lineWidth = 2;

            if (colony.shape === 'circular') {
                this.ctx.beginPath();
                this.ctx.arc(cx, cy, 30, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.stroke();
            } else if (colony.shape === 'irregular') {
                this.ctx.beginPath();
                for (let i = 0; i < 8; i++) {
                    const angle = (i / 8) * Math.PI * 2;
                    const r = 25 + Math.random() * 15;
                    const px = cx + Math.cos(angle) * r;
                    const py = cy + Math.sin(angle) * r;
                    if (i === 0) this.ctx.moveTo(px, py);
                    else this.ctx.lineTo(px, py);
                }
                this.ctx.closePath();
                this.ctx.fill();
                this.ctx.stroke();
            } else if (colony.shape === 'filamentous') {
                this.ctx.beginPath();
                for (let i = 0; i < 12; i++) {
                    const angle = (i / 12) * Math.PI * 2;
                    this.ctx.moveTo(cx, cy);
                    this.ctx.lineTo(cx + Math.cos(angle) * 35, cy + Math.sin(angle) * 35);
                }
                this.ctx.stroke();
            } else if (colony.shape === 'punctiform') {
                this.ctx.beginPath();
                this.ctx.arc(cx, cy, 5, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.stroke();
            }

            // Label
            if (showLabels) {
                this.ctx.font = '12px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.fillText(colony.name, cx, cy + 60);
            }
        });

        // Elevation types
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.fillText('Elevation (Side View)', width / 2, height * 0.55);

        const elevationTypes = [
            { name: 'Flat', x: 0.15, y: 0.75 },
            { name: 'Raised', x: 0.4, y: 0.75 },
            { name: 'Convex', x: 0.65, y: 0.75 },
            { name: 'Umbonate', x: 0.9, y: 0.75 }
        ];

        elevationTypes.forEach((elev, index) => {
            const cx = width * elev.x;
            const cy = height * elev.y;

            // Draw elevation profile
            this.ctx.strokeStyle = '#8B4513';
            this.ctx.fillStyle = '#FFE4B5';
            this.ctx.lineWidth = 2;

            if (index === 0) { // Flat
                this.ctx.fillRect(cx - 25, cy - 5, 50, 5);
                this.ctx.strokeRect(cx - 25, cy - 5, 50, 5);
            } else if (index === 1) { // Raised
                this.ctx.fillRect(cx - 25, cy - 10, 50, 10);
                this.ctx.strokeRect(cx - 25, cy - 10, 50, 10);
            } else if (index === 2) { // Convex
                this.ctx.beginPath();
                this.ctx.moveTo(cx - 25, cy);
                this.ctx.quadraticCurveTo(cx, cy - 15, cx + 25, cy);
                this.ctx.lineTo(cx - 25, cy);
                this.ctx.fill();
                this.ctx.stroke();
            } else if (index === 3) { // Umbonate
                this.ctx.beginPath();
                this.ctx.moveTo(cx - 25, cy);
                this.ctx.quadraticCurveTo(cx - 10, cy - 8, cx - 5, cy - 8);
                this.ctx.lineTo(cx - 5, cy - 20);
                this.ctx.lineTo(cx + 5, cy - 20);
                this.ctx.lineTo(cx + 5, cy - 8);
                this.ctx.quadraticCurveTo(cx + 10, cy - 8, cx + 25, cy);
                this.ctx.lineTo(cx - 25, cy);
                this.ctx.fill();
                this.ctx.stroke();
            }

            // Base line
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(cx - 30, cy);
            this.ctx.lineTo(cx + 30, cy);
            this.ctx.stroke();

            // Label
            if (showLabels) {
                this.ctx.font = '12px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.fillText(elev.name, cx, cy + 25);
            }
        });

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

    drawArrow(x1, y1, x2, y2, color = '#2C3E50', label = '', arrowSize = 8) {
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

    clear() {
        if (this.ctx && this.canvas) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    saveAsPNG(filename = 'microbiology-diagram.png') {
        if (this.canvas) {
            const link = document.createElement('a');
            link.download = filename;
            link.href = this.canvas.toDataURL();
            link.click();
        }
    }
}

// ============================================================================
// EXPORT CLASSES
// ============================================================================

export { 
    MicrobiologyDiagramsRegistry, 
    MicrobiologyShapes, 
    MicrobiologyDiagramRenderer 
};

// ============================================================================
// USAGE EXAMPLE
// ============================================================================

/*
// Example usage in a Node.js environment with node-canvas:

import { createCanvas } from '@napi-rs/canvas';
import { 
    MicrobiologyDiagramsRegistry, 
    MicrobiologyShapes, 
    MicrobiologyDiagramRenderer 
} from './microbiology-diagrams.js';

// Create canvas
const canvas = createCanvas(800, 600);
const renderer = new MicrobiologyDiagramRenderer(canvas);

// Print summary of available diagrams
MicrobiologyDiagramsRegistry.printSummary();

// Render a specific diagram
renderer.renderDiagram('bacterialCell', 0, 0, 800, 600, {
    type: 'bacillus',
    showLabels: true,
    showFlagella: true,
    showPili: true
});

// Save the diagram
renderer.saveAsPNG('bacterial-cell.png');

// Search for diagrams
const virusDiagrams = MicrobiologyDiagramsRegistry.searchDiagrams('virus');
console.log('Virus diagrams:', Object.keys(virusDiagrams));

// Get diagrams by category
const bacterialDiagrams = MicrobiologyDiagramsRegistry.getDiagramsByCategory('Bacterial Structures');
console.log('Bacterial diagrams:', Object.keys(bacterialDiagrams));

// Render multiple diagrams
const diagramKeys = [
    'bacterialCell',
    'virusStructure',
    'fungalCell',
    'amoeba',
    'gramStaining',
    'growthCurve'
];

diagramKeys.forEach(key => {
    const canvas = createCanvas(800, 600);
    const renderer = new MicrobiologyDiagramRenderer(canvas);
    renderer.renderDiagram(key, 0, 0, 800, 600);
    renderer.saveAsPNG(`${key}.png`);
});

// Total diagram count
console.log(`Total microbiology diagrams: ${MicrobiologyDiagramsRegistry.getTotalDiagramCount()}`);

// Get all categories
console.log('Categories:', MicrobiologyDiagramsRegistry.getAllCategories());
*/
