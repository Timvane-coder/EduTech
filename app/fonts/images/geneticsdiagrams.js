// ============================================================================
// GENETICS DIAGRAMS REGISTRY - Comprehensive Genetics Configuration System
// ============================================================================

class GeneticsDiagramsRegistry {
    static diagrams = {
        // ===== 1. MOLECULAR GENETICS =====
        
        'dnaStructure': {
            name: 'DNA Double Helix',
            category: 'Molecular Genetics',
            description: 'DNA double helix structure with base pairs',
            dataRequired: [],
            usage: 'Best for DNA structure education',
            examples: ['DNA', 'Double helix', 'Nucleotides'],
            defaultOptions: {
                title: 'DNA Structure',
                showLabels: true,
                showBasePairs: true,
                rotationAngle: 0,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'dnaReplication': {
            name: 'DNA Replication',
            category: 'Molecular Genetics',
            description: 'DNA replication process showing leading and lagging strands',
            dataRequired: [],
            usage: 'Best for replication mechanism',
            examples: ['DNA replication', 'Cell division', 'Semi-conservative'],
            defaultOptions: {
                title: 'DNA Replication',
                showLabels: true,
                showEnzymes: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'transcription': {
            name: 'Transcription',
            category: 'Molecular Genetics',
            description: 'DNA to RNA transcription process',
            dataRequired: [],
            usage: 'Best for gene expression',
            examples: ['Transcription', 'mRNA synthesis', 'RNA polymerase'],
            defaultOptions: {
                title: 'Transcription Process',
                showLabels: true,
                showRNAPolymerase: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'translation': {
            name: 'Translation',
            category: 'Molecular Genetics',
            description: 'mRNA to protein translation at ribosome',
            dataRequired: [],
            usage: 'Best for protein synthesis',
            examples: ['Translation', 'Protein synthesis', 'Ribosome'],
            defaultOptions: {
                title: 'Translation Process',
                showLabels: true,
                showTRNA: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'centralDogma': {
            name: 'Central Dogma',
            category: 'Molecular Genetics',
            description: 'DNA → RNA → Protein flow of genetic information',
            dataRequired: [],
            usage: 'Best for genetic information flow',
            examples: ['Central dogma', 'Gene expression', 'Information flow'],
            defaultOptions: {
                title: 'Central Dogma of Molecular Biology',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'geneticCode': {
            name: 'Genetic Code Table',
            category: 'Molecular Genetics',
            description: 'Codon table showing amino acid assignments',
            dataRequired: [],
            usage: 'Best for codon-amino acid relationships',
            examples: ['Genetic code', 'Codons', 'Amino acids'],
            defaultOptions: {
                title: 'The Genetic Code',
                showLabels: true,
                colorByProperty: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'rnaTypes': {
            name: 'RNA Types',
            category: 'Molecular Genetics',
            description: 'Comparison of mRNA, tRNA, and rRNA structures',
            dataRequired: [],
            usage: 'Best for RNA structure comparison',
            examples: ['RNA types', 'mRNA', 'tRNA', 'rRNA'],
            defaultOptions: {
                title: 'Types of RNA',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'geneMutation': {
            name: 'Gene Mutations',
            category: 'Molecular Genetics',
            description: 'Types of point mutations and their effects',
            dataRequired: [],
            usage: 'Best for mutation types',
            examples: ['Mutations', 'Point mutations', 'Frameshift'],
            defaultOptions: {
                title: 'Types of Gene Mutations',
                showLabels: true,
                mutationType: 'all',
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 2. CHROMOSOMAL GENETICS =====

        'chromosome': {
            name: 'Chromosome Structure',
            category: 'Chromosomal Genetics',
            description: 'Detailed chromosome structure with centromere and telomeres',
            dataRequired: [],
            usage: 'Best for chromosome anatomy',
            examples: ['Chromosome', 'Chromatin', 'Centromere'],
            defaultOptions: {
                title: 'Chromosome Structure',
                showLabels: true,
                condensationLevel: 'metaphase',
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'karyotype': {
            name: 'Human Karyotype',
            category: 'Chromosomal Genetics',
            description: 'Complete set of human chromosomes',
            dataRequired: [],
            usage: 'Best for chromosome number and structure',
            examples: ['Karyotype', 'Chromosomes', 'Genetics'],
            defaultOptions: {
                title: 'Human Karyotype (46 Chromosomes)',
                showLabels: true,
                sex: 'XX',
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'meiosis': {
            name: 'Meiosis',
            category: 'Chromosomal Genetics',
            description: 'Meiosis I and II stages',
            dataRequired: [],
            usage: 'Best for gamete formation',
            examples: ['Meiosis', 'Cell division', 'Gametes'],
            defaultOptions: {
                title: 'Meiosis: Formation of Gametes',
                showLabels: true,
                showCrossover: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'mitosis': {
            name: 'Mitosis',
            category: 'Chromosomal Genetics',
            description: 'Mitotic cell division stages',
            dataRequired: [],
            usage: 'Best for cell division',
            examples: ['Mitosis', 'Cell cycle', 'Division'],
            defaultOptions: {
                title: 'Mitosis: Cell Division',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chromosomalAberrations': {
            name: 'Chromosomal Aberrations',
            category: 'Chromosomal Genetics',
            description: 'Types of chromosomal mutations',
            dataRequired: [],
            usage: 'Best for chromosomal disorders',
            examples: ['Deletion', 'Duplication', 'Inversion', 'Translocation'],
            defaultOptions: {
                title: 'Chromosomal Aberrations',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'crossingOver': {
            name: 'Crossing Over',
            category: 'Chromosomal Genetics',
            description: 'Homologous recombination during meiosis',
            dataRequired: [],
            usage: 'Best for genetic recombination',
            examples: ['Crossing over', 'Recombination', 'Chiasma'],
            defaultOptions: {
                title: 'Crossing Over and Recombination',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 3. MENDELIAN GENETICS =====

        'punnettSquare': {
            name: 'Punnett Square',
            category: 'Mendelian Genetics',
            description: 'Genetic cross prediction tool',
            dataRequired: ['cross'],
            usage: 'Best for predicting offspring',
            examples: ['Punnett square', 'Genetic cross', 'Inheritance'],
            defaultOptions: {
                title: 'Punnett Square',
                showLabels: true,
                cross: 'monohybrid',
                parents: ['Aa', 'Aa'],
                width: 600,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'monohybridCross': {
            name: 'Monohybrid Cross',
            category: 'Mendelian Genetics',
            description: 'Single trait inheritance pattern',
            dataRequired: [],
            usage: 'Best for single gene inheritance',
            examples: ['Monohybrid', 'Single trait', 'Mendel'],
            defaultOptions: {
                title: 'Monohybrid Cross',
                showLabels: true,
                showPhenotypes: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dihybridCross': {
            name: 'Dihybrid Cross',
            category: 'Mendelian Genetics',
            description: 'Two trait inheritance pattern',
            dataRequired: [],
            usage: 'Best for two gene inheritance',
            examples: ['Dihybrid', 'Two traits', 'Independent assortment'],
            defaultOptions: {
                title: 'Dihybrid Cross',
                showLabels: true,
                showPhenotypes: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'pedigree': {
            name: 'Pedigree Chart',
            category: 'Mendelian Genetics',
            description: 'Family tree showing trait inheritance',
            dataRequired: ['generations'],
            usage: 'Best for tracking inheritance patterns',
            examples: ['Pedigree', 'Family tree', 'Inheritance'],
            defaultOptions: {
                title: 'Pedigree Chart',
                showLabels: true,
                inheritancePattern: 'autosomal_dominant',
                generations: 3,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dominancePatterns': {
            name: 'Dominance Patterns',
            category: 'Mendelian Genetics',
            description: 'Complete, incomplete, and codominance',
            dataRequired: [],
            usage: 'Best for dominance relationships',
            examples: ['Dominance', 'Incomplete dominance', 'Codominance'],
            defaultOptions: {
                title: 'Patterns of Dominance',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 4. POPULATION GENETICS =====

        'hardyWeinberg': {
            name: 'Hardy-Weinberg Equilibrium',
            category: 'Population Genetics',
            description: 'Allele frequency equilibrium model',
            dataRequired: [],
            usage: 'Best for population genetics',
            examples: ['Hardy-Weinberg', 'Allele frequency', 'Evolution'],
            defaultOptions: {
                title: 'Hardy-Weinberg Equilibrium',
                showLabels: true,
                p: 0.6,
                q: 0.4,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'geneticDrift': {
            name: 'Genetic Drift',
            category: 'Population Genetics',
            description: 'Random changes in allele frequency',
            dataRequired: [],
            usage: 'Best for evolutionary processes',
            examples: ['Genetic drift', 'Bottleneck', 'Founder effect'],
            defaultOptions: {
                title: 'Genetic Drift',
                showLabels: true,
                driftType: 'bottleneck',
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'naturalSelection': {
            name: 'Natural Selection',
            category: 'Population Genetics',
            description: 'Selection types and effects on populations',
            dataRequired: [],
            usage: 'Best for selection mechanisms',
            examples: ['Natural selection', 'Directional', 'Stabilizing'],
            defaultOptions: {
                title: 'Types of Natural Selection',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 5. MOLECULAR TECHNIQUES =====

        'pcrProcess': {
            name: 'PCR Process',
            category: 'Molecular Techniques',
            description: 'Polymerase Chain Reaction steps',
            dataRequired: [],
            usage: 'Best for DNA amplification',
            examples: ['PCR', 'DNA amplification', 'Molecular biology'],
            defaultOptions: {
                title: 'Polymerase Chain Reaction (PCR)',
                showLabels: true,
                showCycles: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'gelElectrophoresis': {
            name: 'Gel Electrophoresis',
            category: 'Molecular Techniques',
            description: 'DNA/protein separation technique',
            dataRequired: [],
            usage: 'Best for DNA analysis',
            examples: ['Gel electrophoresis', 'DNA fingerprinting', 'Separation'],
            defaultOptions: {
                title: 'Gel Electrophoresis',
                showLabels: true,
                showLadder: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cloningVector': {
            name: 'Cloning Vector',
            category: 'Molecular Techniques',
            description: 'Plasmid structure for gene cloning',
            dataRequired: [],
            usage: 'Best for genetic engineering',
            examples: ['Plasmid', 'Vector', 'Cloning'],
            defaultOptions: {
                title: 'Cloning Vector (Plasmid)',
                showLabels: true,
                showInsert: true,
                width: 600,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'crisprCas9': {
            name: 'CRISPR-Cas9',
            category: 'Molecular Techniques',
            description: 'Gene editing mechanism',
            dataRequired: [],
            usage: 'Best for gene editing education',
            examples: ['CRISPR', 'Gene editing', 'Cas9'],
            defaultOptions: {
                title: 'CRISPR-Cas9 Gene Editing',
                showLabels: true,
                showGuideRNA: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'dnaSequencing': {
            name: 'DNA Sequencing',
            category: 'Molecular Techniques',
            description: 'Sanger sequencing method',
            dataRequired: [],
            usage: 'Best for sequencing technology',
            examples: ['DNA sequencing', 'Sanger method', 'Genomics'],
            defaultOptions: {
                title: 'DNA Sequencing (Sanger Method)',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 6. GENE REGULATION =====

        'geneExpression': {
            name: 'Gene Expression Regulation',
            category: 'Gene Regulation',
            description: 'Transcriptional control mechanisms',
            dataRequired: [],
            usage: 'Best for gene regulation',
            examples: ['Gene regulation', 'Transcription factors', 'Expression'],
            defaultOptions: {
                title: 'Gene Expression Regulation',
                showLabels: true,
                showEnhancers: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lacOperon': {
            name: 'Lac Operon',
            category: 'Gene Regulation',
            description: 'Bacterial gene regulation model',
            dataRequired: [],
            usage: 'Best for prokaryotic regulation',
            examples: ['Lac operon', 'Gene regulation', 'Bacteria'],
            defaultOptions: {
                title: 'Lac Operon',
                showLabels: true,
                state: 'induced',
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'epigenetics': {
            name: 'Epigenetic Modifications',
            category: 'Gene Regulation',
            description: 'DNA methylation and histone modifications',
            dataRequired: [],
            usage: 'Best for epigenetic mechanisms',
            examples: ['Epigenetics', 'DNA methylation', 'Histones'],
            defaultOptions: {
                title: 'Epigenetic Modifications',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 7. GENOMICS =====

        'genomeStructure': {
            name: 'Genome Organization',
            category: 'Genomics',
            description: 'Structure of eukaryotic genome',
            dataRequired: [],
            usage: 'Best for genome organization',
            examples: ['Genome', 'Gene structure', 'Introns', 'Exons'],
            defaultOptions: {
                title: 'Eukaryotic Genome Structure',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'geneStructure': {
            name: 'Gene Structure',
            category: 'Genomics',
            description: 'Detailed gene anatomy with regulatory regions',
            dataRequired: [],
            usage: 'Best for gene anatomy',
            examples: ['Gene', 'Promoter', 'Exons', 'Introns'],
            defaultOptions: {
                title: 'Eukaryotic Gene Structure',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'splicing': {
            name: 'RNA Splicing',
            category: 'Genomics',
            description: 'Alternative splicing mechanisms',
            dataRequired: [],
            usage: 'Best for post-transcriptional modification',
            examples: ['Splicing', 'Alternative splicing', 'mRNA processing'],
            defaultOptions: {
                title: 'RNA Splicing',
                showLabels: true,
                showAlternative: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        }
    };

    // Helper methods
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
        console.log('=== GENETICS DIAGRAMS REGISTRY SUMMARY ===');
        console.log(`Total Diagrams: ${this.getTotalDiagramCount()}`);
        console.log('\nBy Category:');
        const stats = this.getDiagramStats();
        Object.entries(stats).forEach(([category, data]) => {
            console.log(`  ${category}: ${data.count} diagrams`);
        });
    }
}

// ============================================================================
// GENETICS SHAPES LIBRARY
// ============================================================================

class GeneticsShapes {
    
    // ===== DNA & RNA STRUCTURES =====
    
    static drawDNAHelix(ctx, x, y, width, height, rotationAngle = 0) {
        ctx.save();
        ctx.translate(x, y);
        
        const turns = 3;
        const pointsPerTurn = 20;
        
        // Base pair colors
        const basePairs = [
            { pair: ['A', 'T'], colors: ['#FF6B6B', '#4ECDC4'] },
            { pair: ['T', 'A'], colors: ['#4ECDC4', '#FF6B6B'] },
            { pair: ['G', 'C'], colors: ['#FFD93D', '#95E1D3'] },
            { pair: ['C', 'G'], colors: ['#95E1D3', '#FFD93D'] }
        ];
        
        // Draw base pairs
        for(let i = 0; i < turns * pointsPerTurn; i++) {
            const t = i / pointsPerTurn;
            const angle = t * Math.PI * 2 + rotationAngle;
            const yPos = (i / (turns * pointsPerTurn)) * height;
            
            const x1 = width * 0.3 + Math.cos(angle) * width * 0.15;
            const x2 = width * 0.7 + Math.cos(angle + Math.PI) * width * 0.15;
            
            // Base pair line
            const bp = basePairs[i % basePairs.length];
            ctx.strokeStyle = '#808080';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x1, yPos);
            ctx.lineTo(x2, yPos);
            ctx.stroke();
            
            // Bases
            ctx.fillStyle = bp.colors[0];
            ctx.beginPath();
            ctx.arc(x1, yPos, 4, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = bp.colors[1];
            ctx.beginPath();
            ctx.arc(x2, yPos, 4, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Sugar-phosphate backbones
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 4;
        
        // Left strand
        ctx.beginPath();
        for(let i = 0; i <= turns * pointsPerTurn; i++) {
            const t = i / pointsPerTurn;
            const angle = t * Math.PI * 2 + rotationAngle;
            const xPos = width * 0.3 + Math.cos(angle) * width * 0.15;
            const yPos = (i / (turns * pointsPerTurn)) * height;
            
            if(i === 0) ctx.moveTo(xPos, yPos);
            else ctx.lineTo(xPos, yPos);
        }
        ctx.stroke();
        
        // Right strand
        ctx.beginPath();
        for(let i = 0; i <= turns * pointsPerTurn; i++) {
            const t = i / pointsPerTurn;
            const angle = t * Math.PI * 2 + Math.PI + rotationAngle;
            const xPos = width * 0.7 + Math.cos(angle) * width * 0.15;
            const yPos = (i / (turns * pointsPerTurn)) * height;
            
            if(i === 0) ctx.moveTo(xPos, yPos);
            else ctx.lineTo(xPos, yPos);
        }
        ctx.stroke();
        
        ctx.restore();
    }

    static drawChromosome(ctx, x, y, width, height, condensationLevel = 'metaphase') {
        ctx.save();
        ctx.translate(x, y);
        
        const color = { base: '#4A69BD', light: '#6A89CC', dark: '#2A49AD' };
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, color.light);
        gradient.addColorStop(0.5, color.base);
        gradient.addColorStop(1, color.dark);
        
        ctx.fillStyle = gradient;
        
        if(condensationLevel === 'metaphase') {
            // X-shaped chromosome (condensed)
            const armLength = height * 0.45;
            
            // Left chromatid
            ctx.beginPath();
            // Top arm
            ctx.moveTo(width * 0.35, height * 0.5);
            ctx.quadraticCurveTo(width * 0.3, height * 0.3, width * 0.25, height * 0.05);
            ctx.lineTo(width * 0.35, height * 0.05);
            ctx.quadraticCurveTo(width * 0.4, height * 0.3, width * 0.45, height * 0.5);
            // Bottom arm
            ctx.quadraticCurveTo(width * 0.4, height * 0.7, width * 0.35, height * 0.95);
            ctx.lineTo(width * 0.25, height * 0.95);
            ctx.quadraticCurveTo(width * 0.3, height * 0.7, width * 0.35, height * 0.5);
            ctx.closePath();
            ctx.fill();
            
            // Right chromatid
            ctx.beginPath();
            // Top arm
            ctx.moveTo(width * 0.65, height * 0.5);
            ctx.quadraticCurveTo(width * 0.7, height * 0.3, width * 0.75, height * 0.05);
            ctx.lineTo(width * 0.65, height * 0.05);
            ctx.quadraticCurveTo(width * 0.6, height * 0.3, width * 0.55, height * 0.5);
            // Bottom arm
            ctx.quadraticCurveTo(width * 0.6, height * 0.7, width * 0.65, height * 0.95);
            ctx.lineTo(width * 0.75, height * 0.95);
            ctx.quadraticCurveTo(width * 0.7, height * 0.7, width * 0.65, height * 0.5);
            ctx.closePath();
            ctx.fill();
            
            // Centromere
            ctx.fillStyle = '#DC143C';
            ctx.beginPath();
            ctx.ellipse(width * 0.5, height * 0.5, width * 0.15, height * 0.08, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Banding pattern
            ctx.strokeStyle = color.dark;
            ctx.lineWidth = 2;
            for(let i = 0; i < 5; i++) {
                const yTop = height * (0.1 + i * 0.08);
                ctx.beginPath();
                ctx.moveTo(width * 0.25, yTop);
                ctx.lineTo(width * 0.45, yTop);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(width * 0.55, yTop);
                ctx.lineTo(width * 0.75, yTop);
                ctx.stroke();
                
                const yBottom = height * (0.6 + i * 0.08);
                ctx.beginPath();
                ctx.moveTo(width * 0.25, yBottom);
                ctx.lineTo(width * 0.45, yBottom);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(width * 0.55, yBottom);
                ctx.lineTo(width * 0.75, yBottom);
                ctx.stroke();
            }
        }
        
        ctx.restore();
    }

    static drawPunnettSquare(ctx, x, y, size, cross = 'monohybrid', parents = ['Aa', 'Aa']) {
        ctx.save();
        ctx.translate(x, y);
        
        if(cross === 'monohybrid') {
            const cellSize = size / 3;
            
            // Draw grid
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 2;
            for(let i = 0; i <= 3; i++) {
                ctx.beginPath();
                ctx.moveTo(0, i * cellSize);
                ctx.lineTo(size, i * cellSize);
                ctx.stroke();
                
                ctx.beginPath();
                ctx.moveTo(i * cellSize, 0);
                ctx.lineTo(i * cellSize, size);
                ctx.stroke();
            }
            
            // Parent 1 gametes (top)
            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = '#3498DB';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(parents[0][0], cellSize * 1.5, cellSize * 0.5);
            ctx.fillText(parents[0][1], cellSize * 2.5, cellSize * 0.5);
            
            // Parent 2 gametes (left)
            ctx.fillText(parents[1][0], cellSize * 0.5, cellSize * 1.5);
            ctx.fillText(parents[1][1], cellSize * 0.5, cellSize * 2.5);
            
            // Offspring genotypes
            const offspring = [
                [parents[0][0] + parents[1][0], parents[0][1] + parents[1][0]],
                [parents[0][0] + parents[1][1], parents[0][1] + parents[1][1]]
            ];
            
            ctx.font = '20px Arial';
            ctx.fillStyle = '#2C3E50';
            for(let row = 0; row < 2; row++) {
                for(let col = 0; col < 2; col++) {
                    const genotype = offspring[row][col];
                    const cellX = cellSize * (col + 1.5);
                    const cellY = cellSize * (row + 1.5);
                    
                    // Determine phenotype color
                    const isDominant = genotype.includes('A') || genotype.includes('a').length === 2;
                    ctx.fillStyle = isDominant && genotype.includes('A') ? '#27AE60' : '#E74C3C';
                    ctx.fillRect(cellSize * (col + 1) + 5, cellSize * (row + 1) + 5, 
                                cellSize - 10, cellSize - 10);
                    
                    // Genotype text
                    ctx.fillStyle = '#FFFFFF';
                    ctx.fillText(genotype, cellX, cellY);
                }
            }
        } else if(cross === 'dihybrid') {
            const cellSize = size / 5;
            
            // Draw grid
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 2;
            for(let i = 0; i <= 5; i++) {
                ctx.beginPath();
                ctx.moveTo(0, i * cellSize);
                ctx.lineTo(size, i * cellSize);
                ctx.stroke();
                
                ctx.beginPath();
                ctx.moveTo(i * cellSize, 0);
                ctx.lineTo(i * cellSize, size);
                ctx.stroke();
            }
            
            // Gametes
            const gametes = ['AB', 'Ab', 'aB', 'ab'];
            
            ctx.font = 'bold 18px Arial';
            ctx.fillStyle = '#3498DB';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            // Top gametes
            for(let i = 0; i < 4; i++) {
                ctx.fillText(gametes[i], cellSize * (i + 1.5), cellSize * 0.5);
            }
            
            // Left gametes
            for(let i = 0; i < 4; i++) {
                ctx.fillText(gametes[i], cellSize * 0.5, cellSize * (i + 1.5));
            }
            
            // Offspring (simplified)
            ctx.font = '14px Arial';
            for(let row = 0; row < 4; row++) {
                for(let col = 0; col < 4; col++) {
                    const cellX = cellSize * (col + 1.5);
                    const cellY = cellSize * (row + 1.5);
                    
                    ctx.fillStyle = '#ECF0F1';
                    ctx.fillRect(cellSize * (col + 1) + 2, cellSize * (row + 1) + 2, 
                                cellSize - 4, cellSize - 4);
                    
                    ctx.fillStyle = '#2C3E50';
                    const genotype = gametes[col][0] + gametes[row][0] + 
                                   gametes[col][1] + gametes[row][1];
                    ctx.fillText(genotype, cellX, cellY);
                }
            }
        }
        
        ctx.restore();
    }

    static drawRibosome(ctx, x, y, width, height, showTRNA = false) {
        ctx.save();
        ctx.translate(x, y);
        
        // Large subunit
        ctx.fillStyle = '#95A5A6';
        ctx.beginPath();
        ctx.ellipse(width * 0.5, height * 0.35, width * 0.4, height * 0.25, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#7F8C8D';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Small subunit
        ctx.fillStyle = '#BDC3C7';
        ctx.beginPath();
        ctx.ellipse(width * 0.5, height * 0.7, width * 0.35, height * 0.2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#95A5A6';
        ctx.stroke();
        
        // mRNA passing through
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(0, height * 0.6);
        ctx.lineTo(width, height * 0.6);
        ctx.stroke();
        
        // Codons on mRNA
        ctx.font = 'bold 10px monospace';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        const codons = ['AUG', 'GCU', 'AAA'];
        for(let i = 0; i < 3; i++) {
            ctx.fillText(codons[i], width * (0.25 + i * 0.25), height * 0.6 + 3);
        }
        
        if(showTRNA) {
            // tRNA in A site
            this.drawTRNA(ctx, width * 0.6, height * 0.45, width * 0.15, height * 0.3, 'GCU', 'Ala');
        }
        
        // Growing polypeptide chain
        ctx.strokeStyle = '#9B59B6';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(width * 0.2, height * 0.3);
        for(let i = 0; i < 5; i++) {
            const xx = width * (0.2 - i * 0.04);
            const yy = height * (0.3 - i * 0.05);
            ctx.lineTo(xx, yy);
        }
        ctx.stroke();
        
        // Amino acids
        ctx.fillStyle = '#8E44AD';
        for(let i = 0; i < 5; i++) {
            const xx = width * (0.2 - i * 0.04);
            const yy = height * (0.3 - i * 0.05);
            ctx.beginPath();
            ctx.arc(xx, yy, 4, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.restore();
    }

    static drawTRNA(ctx, x, y, width, height, anticodon = 'UAC', aminoAcid = 'Met') {
        ctx.save();
        ctx.translate(x, y);
        
        // Cloverleaf structure simplified
        ctx.strokeStyle = '#F39C12';
        ctx.fillStyle = 'rgba(243, 156, 18, 0.3)';
        ctx.lineWidth = 3;
        
        // Main stem
        ctx.beginPath();
        ctx.moveTo(width * 0.5, height * 0.7);
        ctx.lineTo(width * 0.5, height * 0.3);
        ctx.stroke();
        
        // Acceptor stem (top)
        ctx.beginPath();
        ctx.arc(width * 0.5, height * 0.15, width * 0.15, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Amino acid attachment site
        ctx.fillStyle = '#8E44AD';
        ctx.beginPath();
        ctx.arc(width * 0.5, height * 0.05, width * 0.08, 0, Math.PI * 2);
        ctx.fill();
        
        // Amino acid label
        ctx.font = 'bold 10px Arial';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.fillText(aminoAcid, width * 0.5, height * 0.07);
        
        // Anticodon loop (bottom)
        ctx.fillStyle = 'rgba(243, 156, 18, 0.3)';
        ctx.strokeStyle = '#F39C12';
        ctx.beginPath();
        ctx.arc(width * 0.5, height * 0.85, width * 0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Anticodon sequence
        ctx.font = 'bold 12px monospace';
        ctx.fillStyle = '#2C3E50';
        ctx.fillText(anticodon, width * 0.5, height * 0.87);
        
        ctx.restore();
    }

    static drawGeneStructure(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        const geneHeight = height * 0.3;
        const geneY = height * 0.4;
        
        // Promoter
        ctx.fillStyle = '#E74C3C';
        ctx.fillRect(width * 0.05, geneY, width * 0.1, geneHeight);
        
        // 5' UTR
        ctx.fillStyle = '#95A5A6';
        ctx.fillRect(width * 0.16, geneY, width * 0.08, geneHeight);
        
        // Exons and Introns
        const exons = [
            { start: 0.25, width: 0.12 },
            { start: 0.47, width: 0.15 },
            { start: 0.71, width: 0.1 }
        ];
        
        // Exons
        ctx.fillStyle = '#3498DB';
        exons.forEach(exon => {
            ctx.fillRect(width * exon.start, geneY, width * exon.width, geneHeight);
        });
        
        // Introns
        ctx.fillStyle = '#ECF0F1';
        ctx.fillRect(width * 0.38, geneY, width * 0.08, geneHeight);
        ctx.fillRect(width * 0.63, geneY, width * 0.07, geneHeight);
        
        // 3' UTR
        ctx.fillStyle = '#95A5A6';
        ctx.fillRect(width * 0.82, geneY, width * 0.08, geneHeight);
        
        // Terminator
        ctx.fillStyle = '#E74C3C';
        ctx.fillRect(width * 0.91, geneY, width * 0.07, geneHeight);
        
        // Base line (DNA)
        ctx.strokeStyle = '#34495E';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, geneY + geneHeight / 2);
        ctx.lineTo(width, geneY + geneHeight / 2);
        ctx.stroke();
        
        // Transcription start site arrow
        ctx.fillStyle = '#27AE60';
        ctx.beginPath();
        ctx.moveTo(width * 0.24, geneY - 10);
        ctx.lineTo(width * 0.24, geneY);
        ctx.lineTo(width * 0.22, geneY - 5);
        ctx.moveTo(width * 0.24, geneY);
        ctx.lineTo(width * 0.26, geneY - 5);
        ctx.stroke();
        
        ctx.restore();
    }

    static drawMutationType(ctx, x, y, width, height, type = 'substitution') {
        ctx.save();
        ctx.translate(x, y);
        
        const sequenceY = height * 0.3;
        const boxSize = width / 12;
        
        // Normal sequence
        ctx.font = 'bold 16px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        const normalSeq = ['T', 'H', 'E', ' ', 'C', 'A', 'T', ' ', 'S', 'A', 'T'];
        
        // Draw normal
        ctx.fillStyle = '#ECF0F1';
        for(let i = 0; i < normalSeq.length; i++) {
            ctx.fillRect(i * boxSize, 0, boxSize - 2, height * 0.25);
        }
        
        ctx.fillStyle = '#2C3E50';
        for(let i = 0; i < normalSeq.length; i++) {
            ctx.fillText(normalSeq[i], i * boxSize + boxSize / 2, height * 0.125);
        }
        
        // Mutated sequence
        let mutatedSeq = [...normalSeq];
        let mutationIndex = -1;
        
        switch(type) {
            case 'substitution':
                mutatedSeq[4] = 'A'; // CAT -> AAT
                mutationIndex = 4;
                break;
            case 'insertion':
                mutatedSeq.splice(4, 0, 'X');
                mutationIndex = 4;
                break;
            case 'deletion':
                mutatedSeq.splice(4, 1);
                mutationIndex = 4;
                break;
            case 'frameshift':
                mutatedSeq.splice(4, 1);
                mutationIndex = 4;
                break;
        }
        
        // Draw mutated
        for(let i = 0; i < mutatedSeq.length; i++) {
            ctx.fillStyle = i === mutationIndex ? '#E74C3C' : '#ECF0F1';
            ctx.fillRect(i * boxSize, sequenceY, boxSize - 2, height * 0.25);
        }
        
        ctx.fillStyle = '#2C3E50';
        for(let i = 0; i < mutatedSeq.length; i++) {
            if(i === mutationIndex) ctx.fillStyle = '#FFFFFF';
            ctx.fillText(mutatedSeq[i], i * boxSize + boxSize / 2, sequenceY + height * 0.125);
            if(i === mutationIndex) ctx.fillStyle = '#2C3E50';
        }
        
        // Arrow showing change
        ctx.strokeStyle = '#E74C3C';
        ctx.fillStyle = '#E74C3C';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(width * 0.5, height * 0.28);
        ctx.lineTo(width * 0.5, sequenceY - 2);
        ctx.stroke();
        
        // Arrowhead
        ctx.beginPath();
        ctx.moveTo(width * 0.5, sequenceY - 2);
        ctx.lineTo(width * 0.48, sequenceY - 8);
        ctx.lineTo(width * 0.52, sequenceY - 8);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
    }

    static drawPlasmid(ctx, x, y, radius) {
        ctx.save();
        ctx.translate(x, y);
        
        // Circular plasmid
        ctx.strokeStyle = '#4A69BD';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Restriction sites
        const sites = [
            { angle: 0, name: 'EcoRI', color: '#E74C3C' },
            { angle: Math.PI / 2, name: 'BamHI', color: '#3498DB' },
            { angle: Math.PI, name: 'HindIII', color: '#27AE60' },
            { angle: 3 * Math.PI / 2, name: 'PstI', color: '#F39C12' }
        ];
        
        sites.forEach(site => {
            const sx = Math.cos(site.angle) * radius;
            const sy = Math.sin(site.angle) * radius;
            
            ctx.fillStyle = site.color;
            ctx.beginPath();
            ctx.arc(sx, sy, 6, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 1;
            ctx.stroke();
        });
        
        // Origin of replication
        ctx.fillStyle = '#9B59B6';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('ori', 0, 0);
        
        // Antibiotic resistance gene
        ctx.fillStyle = '#E67E22';
        ctx.save();
        ctx.rotate(Math.PI / 4);
        ctx.fillText('AmpR', radius * 0.6, 0);
        ctx.restore();
        
        ctx.restore();
    }

    static drawPedigreeSymbol(ctx, x, y, size, sex, affected, carrier = false) {
        ctx.save();
        ctx.translate(x, y);
        
        if(sex === 'male') {
            // Square
            if(affected) {
                ctx.fillStyle = '#2C3E50';
            } else if(carrier) {
                ctx.fillStyle = '#FFFFFF';
            } else {
                ctx.fillStyle = '#FFFFFF';
            }
            ctx.fillRect(-size / 2, -size / 2, size, size);
            
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 2;
            ctx.strokeRect(-size / 2, -size / 2, size, size);
            
            if(carrier) {
                ctx.fillStyle = '#2C3E50';
                ctx.beginPath();
                ctx.arc(0, 0, size * 0.15, 0, Math.PI * 2);
                ctx.fill();
            }
        } else {
            // Circle
            if(affected) {
                ctx.fillStyle = '#2C3E50';
            } else if(carrier) {
                ctx.fillStyle = '#FFFFFF';
            } else {
                ctx.fillStyle = '#FFFFFF';
            }
            ctx.beginPath();
            ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            if(carrier) {
                ctx.fillStyle = '#2C3E50';
                ctx.beginPath();
                ctx.arc(0, 0, size * 0.15, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        ctx.restore();
    }

    static drawGelLane(ctx, x, y, width, height, bands = []) {
        ctx.save();
        ctx.translate(x, y);
        
        // Lane background
        ctx.fillStyle = '#34495E';
        ctx.fillRect(0, 0, width, height);
        
        // Well at top
        ctx.fillStyle = '#2C3E50';
        ctx.fillRect(width * 0.2, 0, width * 0.6, height * 0.05);
        
        // DNA bands
        bands.forEach(band => {
            const bandY = height * band.position;
            const bandHeight = height * 0.03;
            
            // Glow effect
            const gradient = ctx.createLinearGradient(0, bandY, 0, bandY + bandHeight);
            gradient.addColorStop(0, 'rgba(255, 100, 100, 0.2)');
            gradient.addColorStop(0.5, '#FF6464');
            gradient.addColorStop(1, 'rgba(255, 100, 100, 0.2)');
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, bandY, width, bandHeight);
            
            // Bright center
            ctx.fillStyle = '#FF8888';
            ctx.fillRect(width * 0.1, bandY + bandHeight * 0.3, 
                        width * 0.8, bandHeight * 0.4);
        });
        
        ctx.restore();
    }

    static drawCRISPRComplex(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Target DNA
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(0, height * 0.7);
        ctx.lineTo(width, height * 0.7);
        ctx.stroke();
        
        // Target sequence
        ctx.font = 'bold 14px monospace';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        const targetSeq = 'ATCGATCGATCG';
        for(let i = 0; i < targetSeq.length; i++) {
            ctx.fillText(targetSeq[i], width * (0.1 + i * 0.07), height * 0.7 + 4);
        }
        
        // Cas9 protein
        ctx.fillStyle = '#95A5A6';
        ctx.strokeStyle = '#7F8C8D';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(width * 0.5, height * 0.4, width * 0.25, height * 0.2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('Cas9', width * 0.5, height * 0.4);
        
        // Guide RNA
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(width * 0.5, height * 0.55);
        ctx.quadraticCurveTo(width * 0.6, height * 0.6, width * 0.5, height * 0.68);
        ctx.stroke();
        
        // RNA sequence
        ctx.font = 'bold 12px monospace';
        ctx.fillStyle = '#E74C3C';
        ctx.fillText('gRNA', width * 0.6, height * 0.6);
        
        // Cut site indicators
        ctx.strokeStyle = '#F39C12';
        ctx.lineWidth = 3;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(width * 0.45, height * 0.65);
        ctx.lineTo(width * 0.45, height * 0.75);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(width * 0.55, height * 0.65);
        ctx.lineTo(width * 0.55, height * 0.75);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // PAM sequence
        ctx.fillStyle = '#27AE60';
        ctx.font = 'bold 14px monospace';
        ctx.fillText('NGG', width * 0.7, height * 0.7 + 4);
        
        ctx.restore();
    }

    static drawMeiosisStage(ctx, x, y, width, height, stage) {
        ctx.save();
        ctx.translate(x, y);
        
        const cellRadius = Math.min(width, height) * 0.4;
        
        // Cell membrane
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, cellRadius, 0, Math.PI * 2);
        ctx.stroke();
        
        switch(stage) {
            case 'prophase1':
                // Homologous chromosomes pairing
                this.drawChromosome(ctx, width * 0.35, height * 0.3, width * 0.1, height * 0.4);
                this.drawChromosome(ctx, width * 0.55, height * 0.3, width * 0.1, height * 0.4);
                
                // Crossing over
                ctx.strokeStyle = '#E74C3C';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(width * 0.45, height * 0.5);
                ctx.lineTo(width * 0.55, height * 0.5);
                ctx.stroke();
                break;
                
            case 'metaphase1':
                // Chromosomes at equator
                this.drawChromosome(ctx, width * 0.3, height * 0.45, width * 0.08, height * 0.3);
                this.drawChromosome(ctx, width * 0.42, height * 0.45, width * 0.08, height * 0.3);
                this.drawChromosome(ctx, width * 0.54, height * 0.45, width * 0.08, height * 0.3);
                this.drawChromosome(ctx, width * 0.66, height * 0.45, width * 0.08, height * 0.3);
                
                // Spindle fibers
                ctx.strokeStyle = '#27AE60';
                ctx.lineWidth = 1;
                ctx.setLineDash([3, 3]);
                for(let i = 0; i < 4; i++) {
                    const chrX = width * (0.34 + i * 0.12);
                    ctx.beginPath();
                    ctx.moveTo(chrX, height * 0.2);
                    ctx.lineTo(chrX, height * 0.5);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(chrX, height * 0.8);
                    ctx.lineTo(chrX, height * 0.6);
                    ctx.stroke();
                }
                ctx.setLineDash([]);
                break;
                
            case 'telophase1':
                // Two cells forming
                ctx.strokeStyle = '#2C3E50';
                ctx.lineWidth = 2;
                ctx.setLineDash([5, 5]);
                ctx.beginPath();
                ctx.moveTo(width * 0.5, height * 0.15);
                ctx.lineTo(width * 0.5, height * 0.85);
                ctx.stroke();
                ctx.setLineDash([]);
                
                // Chromosomes in each cell
                this.drawChromosome(ctx, width * 0.25, height * 0.4, width * 0.08, height * 0.3);
                this.drawChromosome(ctx, width * 0.75, height * 0.4, width * 0.08, height * 0.3);
                break;
        }
        
        ctx.restore();
    }

    static drawAlleleFrequency(ctx, x, y, width, height, p, q) {
        ctx.save();
        ctx.translate(x, y);
        
        // Population circle
        const radius = Math.min(width, height) * 0.4;
        
        // Genotype frequencies
        const AA = p * p;
        const Aa = 2 * p * q;
        const aa = q * q;
        
        // Draw pie chart
        let startAngle = 0;
        
        // AA (homozygous dominant)
        ctx.fillStyle = '#27AE60';
        ctx.beginPath();
        ctx.moveTo(width / 2, height / 2);
        ctx.arc(width / 2, height / 2, radius, startAngle, startAngle + AA * Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        startAngle += AA * Math.PI * 2;
        
        // Aa (heterozygous)
        ctx.fillStyle = '#F39C12';
        ctx.beginPath();
        ctx.moveTo(width / 2, height / 2);
        ctx.arc(width / 2, height / 2, radius, startAngle, startAngle + Aa * Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        startAngle += Aa * Math.PI * 2;
        
        // aa (homozygous recessive)
        ctx.fillStyle = '#E74C3C';
        ctx.beginPath();
        ctx.moveTo(width / 2, height / 2);
        ctx.arc(width / 2, height / 2, radius, startAngle, startAngle + aa * Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        
        // Border
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Labels
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.fillText(`AA: ${(AA * 100).toFixed(1)}%`, width / 2, height * 0.25);
        ctx.fillText(`Aa: ${(Aa * 100).toFixed(1)}%`, width * 0.7, height / 2);
        ctx.fillText(`aa: ${(aa * 100).toFixed(1)}%`, width / 2, height * 0.75);
        
        ctx.restore();
    }
}

// ============================================================================
// GENETICS DIAGRAM RENDERER CLASS
// ============================================================================

class GeneticsDiagramRenderer {
    constructor(canvas = null) {
        this.defaultFont = 'Arial, sans-serif';
        this.defaultFontSize = 12;
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
        this.currentFrame = 0;
    }

    renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = GeneticsDiagramsRegistry.getDiagram(diagramKey);
        if (!diagram) {
            throw new Error(`Genetics diagram '${diagramKey}' not found`);
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
                // Molecular Genetics
                case 'dnaStructure':
                    this.renderDNAStructureDiagram(centerX, centerY, width * 0.5, height * 0.7, mergedOptions);
                    break;
                case 'dnaReplication':
                    this.renderDNAReplicationDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'transcription':
                    this.renderTranscriptionDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'translation':
                    this.renderTranslationDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'centralDogma':
                    this.renderCentralDogmaDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'geneticCode':
                    this.renderGeneticCodeDiagram(centerX, centerY, width * 0.7, height * 0.7, mergedOptions);
                    break;
                case 'rnaTypes':
                    this.renderRNATypesDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'geneMutation':
                    this.renderGeneMutationDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                    
                // Chromosomal Genetics
                case 'chromosome':
                    this.renderChromosomeDiagram(centerX, centerY, width * 0.4, height * 0.7, mergedOptions);
                    break;
                case 'karyotype':
                    this.renderKaryotypeDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'meiosis':
                    this.renderMeiosisDiagram(centerX, centerY, width * 0.9, height * 0.7, mergedOptions);
                    break;
                case 'mitosis':
                    this.renderMitosisDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'chromosomalAberrations':
                    this.renderChromosomalAberrationsDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'crossingOver':
                    this.renderCrossingOverDiagram(centerX, centerY, width * 0.7, height * 0.6, mergedOptions);
                    break;
                    
                // Mendelian Genetics
                case 'punnettSquare':
                    this.renderPunnettSquareDiagram(centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;
                case 'monohybridCross':
                    this.renderMonohybridCrossDiagram(centerX, centerY, width * 0.7, height * 0.6, mergedOptions);
                    break;
                case 'dihybridCross':
                    this.renderDihybridCrossDiagram(centerX, centerY, width * 0.8, height * 0.8, mergedOptions);
                    break;
                case 'pedigree':
                    this.renderPedigreeDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'dominancePatterns':
                    this.renderDominancePatternsDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                    
                // Population Genetics
                case 'hardyWeinberg':
                    this.renderHardyWeinbergDiagram(centerX, centerY, width * 0.7, height * 0.6, mergedOptions);
                    break;
                case 'geneticDrift':
                    this.renderGeneticDriftDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'naturalSelection':
                    this.renderNaturalSelectionDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                    
                // Molecular Techniques
                case 'pcrProcess':
                    this.renderPCRDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'gelElectrophoresis':
                    this.renderGelElectrophoresisDiagram(centerX, centerY, width * 0.7, height * 0.6, mergedOptions);
                    break;
                case 'cloningVector':
                    this.renderCloningVectorDiagram(centerX, centerY, Math.min(width, height) * 0.5, mergedOptions);
                    break;
                case 'crisprCas9':
                    this.renderCRISPRDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'dnaSequencing':
                    this.renderDNASequencingDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                    
                // Gene Regulation
                case 'geneExpression':
                    this.renderGeneExpressionDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'lacOperon':
                    this.renderLacOperonDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'epigenetics':
                    this.renderEpigeneticsDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                    
                // Genomics
                case 'genomeStructure':
                    this.renderGenomeStructureDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'geneStructure':
                    this.renderGeneStructureDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'splicing':
                    this.renderSplicingDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
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

    // ========== MOLECULAR GENETICS RENDERERS ==========

    renderDNAStructureDiagram(x, y, width, height, options) {
        const { showLabels, showBasePairs } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        GeneticsShapes.drawDNAHelix(this.ctx, 0, 0, width, height, 0);

        if (showLabels) {
            this.addLabel('Sugar-Phosphate\nBackbone', width * 0.1, height * 0.2, '#4169E1', 'left');
            this.addLabel('Base Pairs', width * 0.9, height * 0.5, '#808080', 'right');
            this.addLabel('3\'', width * 0.2, height * 0.95, '#4169E1', 'center');
            this.addLabel('5\'', width * 0.2, height * 0.05, '#4169E1', 'center');
            this.addLabel('5\'', width * 0.8, height * 0.95, '#4169E1', 'center');
            this.addLabel('3\'', width * 0.8, height * 0.05, '#4169E1', 'center');

            // Legend
            this.drawLegend(width * 0.85, height * 0.1, [
                { color: '#FF6B6B', label: 'Adenine (A)' },
                { color: '#4ECDC4', label: 'Thymine (T)' },
                { color: '#FFD93D', label: 'Guanine (G)' },
                { color: '#95E1D3', label: 'Cytosine (C)' }
            ]);
        }

        this.ctx.restore();
    }

    renderDNAReplicationDiagram(x, y, width, height, options) {
        const { showLabels, showEnzymes } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        // Replication fork
        const forkY = height * 0.3;

        // Parent DNA strands
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 6;
        
        // Leading strand template
        ctx.beginPath();
        ctx.moveTo(width * 0.5, 0);
        ctx.lineTo(width * 0.3, forkY);
        ctx.lineTo(width * 0.1, height);
        ctx.stroke();

        // Lagging strand template
        ctx.beginPath();
        ctx.moveTo(width * 0.5, 0);
        ctx.lineTo(width * 0.7, forkY);
        ctx.lineTo(width * 0.9, height);
        ctx.stroke();

        // New strands
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 4;

        // Leading strand (continuous)
        ctx.beginPath();
        ctx.moveTo(width * 0.35, forkY);
        ctx.lineTo(width * 0.15, height);
        ctx.stroke();

        // Lagging strand (Okazaki fragments)
        const fragments = [
            { start: 0.4, end: 0.5 },
            { start: 0.52, end: 0.62 },
            { start: 0.64, end: 0.74 },
            { start: 0.76, end: 0.86 }
        ];

        fragments.forEach(frag => {
            ctx.beginPath();
            ctx.moveTo(width * 0.65, height * frag.start);
            ctx.lineTo(width * 0.85, height * frag.end);
            ctx.stroke();
        });

        if (showEnzymes) {
            // Helicase at fork
            ctx.fillStyle = '#F39C12';
            ctx.beginPath();
            ctx.arc(width * 0.5, forkY, 15, 0, Math.PI * 2);
            ctx.fill();

            // DNA polymerase
            ctx.fillStyle = '#27AE60';
            ctx.beginPath();
            ctx.arc(width * 0.25, height * 0.7, 12, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(width * 0.75, height * 0.6, 12, 0, Math.PI * 2);
            ctx.fill();

            if (showLabels) {
                this.addLabel('Helicase', width * 0.55, forkY, '#F39C12', 'left');
                this.addLabel('DNA Polymerase', width * 0.15, height * 0.65, '#27AE60', 'left');
                this.addLabel('Leading Strand', width * 0.02, height * 0.85, '#E74C3C', 'left');
                this.addLabel('Lagging Strand\n(Okazaki Fragments)', width * 0.92, height * 0.7, '#E74C3C', 'right');
            }
        }

        // Direction arrows
        this.drawArrow(width * 0.12, height * 0.95, width * 0.12, height * 0.75, '#2C3E50', '3\' → 5\'');
        this.drawArrow(width * 0.88, height * 0.95, width * 0.88, height * 0.75, '#2C3E50', '5\' → 3\'');

        this.ctx.restore();
    }

    renderTranscriptionDiagram(x, y, width, height, options) {
        const { showLabels, showRNAPolymerase } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        // DNA template strand
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(0, height * 0.6);
        ctx.lineTo(width, height * 0.6);
        ctx.stroke();

        // DNA coding strand
        ctx.beginPath();
        ctx.moveTo(0, height * 0.5);
        ctx.lineTo(width, height * 0.5);
        ctx.stroke();

        // mRNA being synthesized
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(width * 0.5, height * 0.45);
        for (let i = 0; i < 8; i++) {
            const xPos = width * (0.5 + i * 0.06);
            const yPos = height * (0.45 - i * 0.04);
            ctx.lineTo(xPos, yPos);
        }
        ctx.stroke();

        if (showRNAPolymerase) {
            // RNA Polymerase
            ctx.fillStyle = '#95A5A6';
            ctx.strokeStyle = '#7F8C8D';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.ellipse(width * 0.5, height * 0.55, width * 0.12, height * 0.15, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.font = 'bold 14px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'center';
            ctx.fillText('RNA Pol II', width * 0.5, height * 0.56);
        }

        if (showLabels) {
            this.addLabel('DNA Template\nStrand (3\' → 5\')', width * 0.85, height * 0.62, '#4169E1', 'left');
            this.addLabel('mRNA\n(5\' → 3\')', width * 0.75, height * 0.2, '#E74C3C', 'left');
            this.addLabel('Promoter', width * 0.1, height * 0.45, '#27AE60', 'center');

            // Direction arrow
            this.drawArrow(width * 0.25, height * 0.7, width * 0.75, height * 0.7, '#F39C12', 'Direction of Transcription');
        }

        this.ctx.restore();
    }

    renderTranslationDiagram(x, y, width, height, options) {
        const { showLabels, showTRNA } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        // Draw ribosome
        GeneticsShapes.drawRibosome(this.ctx, width * 0.5, height * 0.5, width * 0.4, height * 0.5, showTRNA);

        if (showLabels) {
            this.addLabel('Large\nSubunit', width * 0.2, height * 0.35, '#95A5A6', 'left');
            this.addLabel('Small\nSubunit', width * 0.2, height * 0.7, '#BDC3C7', 'left');
            this.addLabel('mRNA', width * 0.85, height * 0.6, '#E74C3C', 'left');
            this.addLabel('Growing\nPolypeptide', width * 0.05, height * 0.15, '#9B59B6', 'left');

            if (showTRNA) {
                this.addLabel('tRNA', width * 0.75, height * 0.35, '#F39C12', 'left');
            }

            // Site labels
            ctx.font = 'bold 11px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'center';
            ctx.fillText('E', width * 0.35, height * 0.52);
            ctx.fillText('P', width * 0.5, height * 0.52);
            ctx.fillText('A', width * 0.65, height * 0.52);
        }

        this.ctx.restore();
    }

    renderCentralDogmaDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        const boxWidth = width * 0.25;
        const boxHeight = height * 0.2;
        const boxY = height * 0.4;

        // DNA box
        ctx.fillStyle = '#3498DB';
        ctx.fillRect(width * 0.05, boxY, boxWidth, boxHeight);
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 3;
        ctx.strokeRect(width * 0.05, boxY, boxWidth, boxHeight);

        ctx.font = 'bold 20px Arial';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('DNA', width * 0.175, boxY + boxHeight / 2);

        // RNA box
        ctx.fillStyle = '#E74C3C';
        ctx.fillRect(width * 0.375, boxY, boxWidth, boxHeight);
        ctx.strokeStyle = '#2C3E50';
        ctx.strokeRect(width * 0.375, boxY, boxWidth, boxHeight);

        ctx.fillStyle = '#FFFFFF';
        ctx.fillText('RNA', width * 0.5, boxY + boxHeight / 2);

        // Protein box
        ctx.fillStyle = '#27AE60';
        ctx.fillRect(width * 0.7, boxY, boxWidth, boxHeight);
        ctx.strokeStyle = '#2C3E50';
        ctx.strokeRect(width * 0.7, boxY, boxWidth, boxHeight);

        ctx.fillStyle = '#FFFFFF';
        ctx.fillText('Protein', width * 0.825, boxY + boxHeight / 2);

        // Arrows
        // Replication (DNA to DNA)
        ctx.strokeStyle = '#3498DB';
        ctx.fillStyle = '#3498DB';
        ctx.lineWidth = 4;
        const arcRadius = width * 0.1;
        ctx.beginPath();
        ctx.arc(width * 0.175, boxY - arcRadius, arcRadius, -Math.PI / 4, -3 * Math.PI / 4, true);
        ctx.stroke();
        // Arrowhead
        ctx.beginPath();
        ctx.moveTo(width * 0.11, boxY - arcRadius * 1.3);
        ctx.lineTo(width * 0.09, boxY - arcRadius * 1.4);
        ctx.lineTo(width * 0.13, boxY - arcRadius * 1.4);
        ctx.closePath();
        ctx.fill();

        // Transcription (DNA to RNA)
        this.drawArrow(width * 0.3, boxY + boxHeight / 2, width * 0.375, boxY + boxHeight / 2, '#F39C12', '');

        // Translation (RNA to Protein)
        this.drawArrow(width * 0.625, boxY + boxHeight / 2, width * 0.7, boxY + boxHeight / 2, '#9B59B6', '');

        if (showLabels) {
            ctx.font = 'bold 16px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'center';
            ctx.fillText('Replication', width * 0.175, boxY - arcRadius * 1.7);
            ctx.fillText('Transcription', width * 0.3375, boxY + boxHeight + 30);
            ctx.fillText('Translation', width * 0.6625, boxY + boxHeight + 30);
        }

        this.ctx.restore();
    }

    renderGeneticCodeDiagram(x, y, width, height, options) {
        const { showLabels, colorByProperty } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        // Simplified codon table (4x4x4 = 64 codons)
        const bases = ['U', 'C', 'A', 'G'];
        const cellSize = width / 17;

        // Amino acid colors by property
        const aaColors = {
            'Phe': '#FF6B6B', 'Leu': '#FF6B6B', 'Ile': '#FF6B6B', 'Met': '#FF6B6B', 'Val': '#FF6B6B',
            'Ser': '#4ECDC4', 'Pro': '#4ECDC4', 'Thr': '#4ECDC4', 'Ala': '#4ECDC4',
            'Tyr': '#FFD93D', 'His': '#FFD93D', 'Gln': '#FFD93D', 'Asn': '#FFD93D', 'Lys': '#FFD93D', 'Asp': '#FFD93D', 'Glu': '#FFD93D',
            'Cys': '#95E1D3', 'Trp': '#95E1D3', 'Arg': '#95E1D3', 'Gly': '#95E1D3',
            'STOP': '#2C3E50'
        };

        // Simple codon to amino acid mapping (abbreviated)
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

        // Draw grid
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        let row = 0;
        for (let first of bases) {
            for (let second of bases) {
                let col = 0;
                for (let third of bases) {
                    const codon = first + second + third;
                    const aa = codonTable[codon] || '?';

                    const xPos = col * cellSize + cellSize * 2;
                    const yPos = row * cellSize + cellSize * 2;

                    // Color by property if enabled
                    ctx.fillStyle = colorByProperty ? (aaColors[aa] || '#ECF0F1') : '#ECF0F1';
                    ctx.fillRect(xPos, yPos, cellSize, cellSize);

                    ctx.strokeStyle = '#BDC3C7';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(xPos, yPos, cellSize, cellSize);

                    // Codon text
                    ctx.fillStyle = '#2C3E50';
                    ctx.font = 'bold 8px monospace';
                    ctx.fillText(codon, xPos + cellSize / 2, yPos + cellSize / 3);

                    // AA text
                    ctx.font = '9px Arial';
                    ctx.fillText(aa, xPos + cellSize / 2, yPos + cellSize * 0.65);

                    col++;
                }
                row++;
            }
        }

        if (showLabels) {
            this.addLabel('First\nBase', cellSize * 0.5, height * 0.5, '#2C3E50', 'center');
            this.addLabel('Second Base', width * 0.5, cellSize * 0.5, '#2C3E50', 'center');
            this.addLabel('Third\nBase', width - cellSize * 1.5, height * 0.5, '#2C3E50', 'center');

            if (colorByProperty) {
                this.drawLegend(width * 0.02, height * 0.85, [
                    { color: '#FF6B6B', label: 'Hydrophobic' },
                    { color: '#4ECDC4', label: 'Polar' },
                    { color: '#FFD93D', label: 'Charged' },
                    { color: '#95E1D3', label: 'Special' },
                    { color: '#2C3E50', label: 'Stop' }
                ]);
            }
        }

        this.ctx.restore();
    }

    renderRNATypesDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        const spacing = width / 3;

        // mRNA
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(spacing * 0.2, height * 0.5);
        ctx.lineTo(spacing * 0.9, height * 0.5);
        ctx.stroke();

        // 5' cap
        ctx.fillStyle = '#F39C12';
        ctx.beginPath();
        ctx.arc(spacing * 0.2, height * 0.5, 8, 0, Math.PI * 2);
        ctx.fill();

        // Poly-A tail
        ctx.fillStyle = '#27AE60';
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.arc(spacing * (0.85 + i * 0.02), height * 0.5, 4, 0, Math.PI * 2);
            ctx.fill();
        }

        if (showLabels) {
            this.addLabel('mRNA', spacing * 0.5, height * 0.3, '#E74C3C', 'center');
            this.addLabel('5\' cap', spacing * 0.2, height * 0.6, '#F39C12', 'center');
            this.addLabel('Poly-A tail', spacing * 0.9, height * 0.6, '#27AE60', 'center');
        }

        // tRNA
        GeneticsShapes.drawTRNA(this.ctx, spacing * 1.5, height * 0.15, spacing * 0.3, height * 0.7, 'UAC', 'Met');

        if (showLabels) {
            this.addLabel('tRNA', spacing * 1.5, height * 0.95, '#F39C12', 'center');
        }

        // rRNA (simplified ribosomal structure)
        ctx.fillStyle = '#95A5A6';
        ctx.strokeStyle = '#7F8C8D';
        ctx.lineWidth = 2;

        // Large subunit
        ctx.beginPath();
        ctx.ellipse(spacing * 2.5, height * 0.35, spacing * 0.25, height * 0.15, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Small subunit
        ctx.fillStyle = '#BDC3C7';
        ctx.beginPath();
        ctx.ellipse(spacing * 2.5, height * 0.6, spacing * 0.2, height * 0.12, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        if (showLabels) {
            this.addLabel('rRNA\n(in ribosome)', spacing * 2.5, height * 0.85, '#95A5A6', 'center');
        }

        this.ctx.restore();
    }

    renderGeneMutationDiagram(x, y, width, height, options) {
        const { showLabels, mutationType } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        const types = mutationType === 'all' ? 
            ['substitution', 'insertion', 'deletion', 'frameshift'] : 
            [mutationType];

        const sectionHeight = height / types.length;

        types.forEach((type, index) => {
            const sectionY = index * sectionHeight;
            
            this.ctx.save();
            this.ctx.translate(0, sectionY);

            // Type title
            ctx.font = 'bold 16px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'left';
            const typeNames = {
                'substitution': 'Point Mutation (Substitution)',
                'insertion': 'Insertion',
                'deletion': 'Deletion',
                'frameshift': 'Frameshift Mutation'
            };
            ctx.fillText(typeNames[type], width * 0.05, sectionHeight * 0.1);

            // Draw mutation
            GeneticsShapes.drawMutationType(this.ctx, width * 0.1, sectionHeight * 0.2, 
                                          width * 0.8, sectionHeight * 0.6, type);

            this.ctx.restore();
        });

        this.ctx.restore();
    }

    // ========== CHROMOSOMAL GENETICS RENDERERS ==========

    renderChromosomeDiagram(x, y, width, height, options) {
        const { showLabels, condensationLevel } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        GeneticsShapes.drawChromosome(this.ctx, 0, 0, width, height, condensationLevel);

        if (showLabels) {
            this.addLabel('Chromatid', width * 0.2, height * 0.3, '#4A69BD', 'right');
            this.addLabel('Centromere', width * 0.65, height * 0.5, '#DC143C', 'left');
            this.addLabel('Sister\nChromatids', width * 0.85, height * 0.25, '#4A69BD', 'left');
            
            // P and Q arms
            this.addLabel('p arm\n(short)', width * 0.15, height * 0.2, '#2C3E50', 'center');
            this.addLabel('q arm\n(long)', width * 0.15, height * 0.75, '#2C3E50', 'center');
        }

        this.ctx.restore();
    }

    renderKaryotypeDiagram(x, y, width, height, options) {
        const { showLabels, sex } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        const chrWidth = width * 0.04;
        const chrHeight = height * 0.15;
        const rows = 4;
        const colsPerRow = [7, 7, 7, 3]; // 22 autosomes + 2 sex chromosomes

        let chrNumber = 1;

        for (let row = 0; row < rows; row++) {
            const cols = colsPerRow[row];
            const rowY = row * (height / rows) + height * 0.1;
            const startX = (width - cols * chrWidth * 1.5) / 2;

            for (let col = 0; col < cols; col++) {
                const chrX = startX + col * chrWidth * 1.5;

                // Draw chromosome pair
                GeneticsShapes.drawChromosome(this.ctx, chrX, rowY, chrWidth * 0.45, chrHeight, 'metaphase');
                GeneticsShapes.drawChromosome(this.ctx, chrX + chrWidth * 0.5, rowY, chrWidth * 0.45, chrHeight, 'metaphase');

                // Chromosome number
                if (showLabels && row < 3) {
                    ctx.font = 'bold 10px Arial';
                    ctx.fillStyle = '#2C3E50';
                    ctx.textAlign = 'center';
                    ctx.fillText(chrNumber.toString(), chrX + chrWidth * 0.25, rowY + chrHeight + 15);
                    chrNumber++;
                }
            }
        }

        // Sex chromosomes (last row)
        const sexY = 3 * (height / rows) + height * 0.1;
        const sexStartX = (width - 2 * chrWidth * 1.5) / 2;

        if (sex === 'XX') {
            GeneticsShapes.drawChromosome(this.ctx, sexStartX, sexY, chrWidth * 0.45, chrHeight, 'metaphase');
            GeneticsShapes.drawChromosome(this.ctx, sexStartX + chrWidth * 0.5, sexY, chrWidth * 0.45, chrHeight, 'metaphase');
            if (showLabels) {
                ctx.fillText('X', sexStartX + chrWidth * 0.25, sexY + chrHeight + 15);
            }
        } else {
            // X chromosome
            GeneticsShapes.drawChromosome(this.ctx, sexStartX, sexY, chrWidth * 0.45, chrHeight, 'metaphase');
            // Y chromosome (smaller)
            GeneticsShapes.drawChromosome(this.ctx, sexStartX + chrWidth * 0.5, sexY + chrHeight * 0.2, 
                                        chrWidth * 0.45, chrHeight * 0.6, 'metaphase');
            if (showLabels) {
                ctx.fillText('X', sexStartX + chrWidth * 0.25, sexY + chrHeight + 15);
                ctx.fillText('Y', sexStartX + chrWidth * 0.75, sexY + chrHeight + 15);
            }
        }

        if (showLabels) {
            this.addLabel(`Human Karyotype: ${sex}`, width / 2, 20, '#2C3E50', 'center');
        }

        this.ctx.restore();
    }

    renderMeiosisDiagram(x, y, width, height, options) {
        const { showLabels, showCrossover } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        const stageWidth = width / 5;
        const stages = [
            { name: 'Interphase', key: 'interphase' },
            { name: 'Prophase I', key: 'prophase1' },
            { name: 'Metaphase I', key: 'metaphase1' },
            { name: 'Anaphase I', key: 'anaphase1' },
            { name: 'Telophase I', key: 'telophase1' }
        ];

        // Meiosis I
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('MEIOSIS I', width / 2, 20);

        stages.forEach((stage, index) => {
            const stageX = index * stageWidth + stageWidth / 2;
            const stageY = height * 0.35;

            GeneticsShapes.drawMeiosisStage(this.ctx, stageX - stageWidth * 0.4, height * 0.1, 
                                           stageWidth * 0.8, height * 0.35, stage.key);

            if (showLabels) {
                ctx.font = 'bold 11px Arial';
                ctx.fillStyle = '#2C3E50';
                ctx.textAlign = 'center';
                ctx.fillText(stage.name, stageX, height * 0.5);
            }
        });

        // Meiosis II (simplified)
        ctx.font = 'bold 16px Arial';
        ctx.fillText('MEIOSIS II', width / 2, height * 0.58);

        const meiosis2Stages = ['Prophase II', 'Metaphase II', 'Anaphase II', 'Telophase II'];
        const cellSize = width / 6;

        meiosis2Stages.forEach((stage, index) => {
            const cellX = (index + 0.5) * (width / 4);
            const cellY = height * 0.8;

            // Simple cell representation
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(cellX, cellY, cellSize * 0.3, 0, Math.PI * 2);
            ctx.stroke();

            // Simplified chromosomes
            ctx.strokeStyle = '#4A69BD';
            ctx.lineWidth = 3;
            if (index < 2) {
                ctx.beginPath();
                ctx.moveTo(cellX - 10, cellY);
                ctx.lineTo(cellX + 10, cellY);
                ctx.stroke();
            }

            if (showLabels) {
                ctx.font = 'bold 10px Arial';
                ctx.fillStyle = '#2C3E50';
                ctx.fillText(stage, cellX, cellY + cellSize * 0.5);
            }
        });

        // Final gametes
        ctx.font = 'bold 12px Arial';
        ctx.fillText('4 Haploid Gametes', width / 2, height * 0.95);

        this.ctx.restore();
    }

    renderMitosisDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        const stages = ['Interphase', 'Prophase', 'Metaphase', 'Anaphase', 'Telophase'];
        const stageWidth = width / 5;

        stages.forEach((stage, index) => {
            const stageX = index * stageWidth + stageWidth / 2;
            const stageY = height * 0.5;
            const cellRadius = stageWidth * 0.35;

            // Cell
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(stageX, stageY, cellRadius, 0, Math.PI * 2);
            ctx.stroke();

            // Simplified chromosome representation for each stage
            ctx.strokeStyle = '#4A69BD';
            ctx.lineWidth = 4;

            switch(stage) {
                case 'Interphase':
                    // Nucleus
                    ctx.strokeStyle = '#95A5A6';
                    ctx.beginPath();
                    ctx.arc(stageX, stageY, cellRadius * 0.5, 0, Math.PI * 2);
                    ctx.stroke();
                    break;

                case 'Prophase':
                    // Condensing chromosomes
                    ctx.strokeStyle = '#4A69BD';
                    for (let i = 0; i < 4; i++) {
                        const angle = (i / 4) * Math.PI * 2;
                        const cx = stageX + Math.cos(angle) * cellRadius * 0.3;
                        const cy = stageY + Math.sin(angle) * cellRadius * 0.3;
                        ctx.beginPath();
                        ctx.moveTo(cx - 5, cy - 8);
                        ctx.lineTo(cx + 5, cy + 8);
                        ctx.stroke();
                    }
                    break;

                case 'Metaphase':
                    // Aligned at center
                    for (let i = 0; i < 4; i++) {
                        ctx.beginPath();
                        ctx.moveTo(stageX - 25 + i * 15, stageY - 10);
                        ctx.lineTo(stageX - 25 + i * 15, stageY + 10);
                        ctx.stroke();
                    }
                    break;

                case 'Anaphase':
                    // Separating
                    for (let i = 0; i < 2; i++) {
                        ctx.beginPath();
                        ctx.moveTo(stageX - 20 - i * 8, stageY - 10);
                        ctx.lineTo(stageX - 20 - i * 8, stageY + 10);
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.moveTo(stageX + 20 + i * 8, stageY - 10);
                        ctx.lineTo(stageX + 20 + i * 8, stageY + 10);
                        ctx.stroke();
                    }
                    break;

                case 'Telophase':
                    // Two nuclei forming
                    ctx.strokeStyle = '#2C3E50';
                    ctx.setLineDash([3, 3]);
                    ctx.beginPath();
                    ctx.moveTo(stageX, stageY - cellRadius);
                    ctx.lineTo(stageX, stageY + cellRadius);
                    ctx.stroke();
                    ctx.setLineDash([]);
                    break;
            }

            if (showLabels) {
                ctx.font = 'bold 12px Arial';
                ctx.fillStyle = '#2C3E50';
                ctx.textAlign = 'center';
                ctx.fillText(stage, stageX, height * 0.85);
            }
        });

        this.ctx.restore();
    }

    renderChromosomalAberrationsDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        const types = [
            { name: 'Normal', segments: ['A', 'B', 'C', 'D', 'E'], color: '#3498DB' },
            { name: 'Deletion', segments: ['A', 'B', 'D', 'E'], color: '#E74C3C' },
            { name: 'Duplication', segments: ['A', 'B', 'C', 'C', 'D', 'E'], color: '#F39C12' },
            { name: 'Inversion', segments: ['A', 'B', 'D', 'C', 'E'], color: '#9B59B6' },
            { name: 'Translocation', segments: ['A', 'B', 'F', 'G'], color: '#27AE60' }
        ];

        const rowHeight = height / types.length;

        types.forEach((type, index) => {
            const rowY = index * rowHeight + rowHeight / 2;

            // Type label
            ctx.font = 'bold 14px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'left';
            ctx.fillText(type.name, width * 0.05, rowY);

            // Draw chromosome with segments
            const segmentWidth = (width * 0.5) / type.segments.length;
            const startX = width * 0.3;

            type.segments.forEach((segment, segIndex) => {
                const segX = startX + segIndex * segmentWidth;

                // Segment color variations
                const isAbnormal = (type.name === 'Deletion' && segment === 'C') ||
                                 (type.name === 'Duplication' && segIndex === 3) ||
                                 (type.name === 'Inversion' && (segment === 'C' || segment === 'D')) ||
                                 (type.name === 'Translocation' && (segment === 'F' || segment === 'G'));

                ctx.fillStyle = isAbnormal ? type.color : '#ECF0F1';
                ctx.fillRect(segX, rowY - rowHeight * 0.15, segmentWidth - 2, rowHeight * 0.3);

                ctx.strokeStyle = '#2C3E50';
                ctx.lineWidth = 2;
                ctx.strokeRect(segX, rowY - rowHeight * 0.15, segmentWidth - 2, rowHeight * 0.3);

                // Segment label
                ctx.font = 'bold 12px Arial';
                ctx.fillStyle = '#2C3E50';
                ctx.textAlign = 'center';
                ctx.fillText(segment, segX + segmentWidth / 2, rowY);
            });
        });

        this.ctx.restore();
    }

    renderCrossingOverDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        const stageWidth = width / 3;

        // Stage 1: Homologous chromosomes
        ctx.font = 'bold 14px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('Before', stageWidth * 0.5, height * 0.1);

        // Blue chromosome (paternal)
        ctx.strokeStyle = '#3498DB';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(stageWidth * 0.3, height * 0.2);
        ctx.lineTo(stageWidth * 0.3, height * 0.7);
        ctx.stroke();

        // Red chromosome (maternal)
        ctx.strokeStyle = '#E74C3C';
        ctx.beginPath();
        ctx.moveTo(stageWidth * 0.5, height * 0.2);
        ctx.lineTo(stageWidth * 0.5, height * 0.7);
        ctx.stroke();

        // Stage 2: Crossing over
        ctx.fillText('Crossing Over', stageWidth * 1.5, height * 0.1);

        // Chromosomes close together
        ctx.strokeStyle = '#3498DB';
        ctx.beginPath();
        ctx.moveTo(stageWidth * 1.3, height * 0.2);
        ctx.lineTo(stageWidth * 1.3, height * 0.45);
        ctx.stroke();

        ctx.strokeStyle = '#E74C3C';
        ctx.beginPath();
        ctx.moveTo(stageWidth * 1.5, height * 0.2);
        ctx.lineTo(stageWidth * 1.5, height * 0.45);
        ctx.stroke();

        // Chiasma (crossover point)
        ctx.strokeStyle = '#3498DB';
        ctx.beginPath();
        ctx.moveTo(stageWidth * 1.3, height * 0.45);
        ctx.lineTo(stageWidth * 1.5, height * 0.55);
        ctx.stroke();

        ctx.strokeStyle = '#E74C3C';
        ctx.beginPath();
        ctx.moveTo(stageWidth * 1.5, height * 0.45);
        ctx.lineTo(stageWidth * 1.3, height * 0.55);
        ctx.stroke();

        ctx.strokeStyle = '#3498DB';
        ctx.beginPath();
        ctx.moveTo(stageWidth * 1.5, height * 0.55);
        ctx.lineTo(stageWidth * 1.5, height * 0.7);
        ctx.stroke();

        ctx.strokeStyle = '#E74C3C';
        ctx.beginPath();
        ctx.moveTo(stageWidth * 1.3, height * 0.55);
        ctx.lineTo(stageWidth * 1.3, height * 0.7);
        ctx.stroke();

        // Chiasma marker
        ctx.fillStyle = '#F39C12';
        ctx.beginPath();
        ctx.arc(stageWidth * 1.4, height * 0.5, 8, 0, Math.PI * 2);
        ctx.fill();

        // Stage 3: After
        ctx.fillStyle = '#2C3E50';
        ctx.fillText('After', stageWidth * 2.5, height * 0.1);

        // Recombinant chromosomes
        ctx.strokeStyle = '#3498DB';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(stageWidth * 2.3, height * 0.2);
        ctx.lineTo(stageWidth * 2.3, height * 0.45);
        ctx.stroke();

        ctx.strokeStyle = '#E74C3C';
        ctx.beginPath();
        ctx.moveTo(stageWidth * 2.3, height * 0.45);
        ctx.lineTo(stageWidth * 2.3, height * 0.7);
        ctx.stroke();

        ctx.strokeStyle = '#E74C3C';
        ctx.beginPath();
        ctx.moveTo(stageWidth * 2.5, height * 0.2);
        ctx.lineTo(stageWidth * 2.5, height * 0.45);
        ctx.stroke();

        ctx.strokeStyle = '#3498DB';
        ctx.beginPath();
        ctx.moveTo(stageWidth * 2.5, height * 0.45);
        ctx.lineTo(stageWidth * 2.5, height * 0.7);
        ctx.stroke();

        if (showLabels) {
            this.addLabel('Homologous\nChromosomes', stageWidth * 0.5, height * 0.85, '#2C3E50', 'center');
            this.addLabel('Chiasma', stageWidth * 1.5, height * 0.5 - 15, '#F39C12', 'center');
            this.addLabel('Recombinant\nChromosomes', stageWidth * 2.5, height * 0.85, '#2C3E50', 'center');
        }

        this.ctx.restore();
    }

    // ========== MENDELIAN GENETICS RENDERERS ==========

    renderPunnettSquareDiagram(x, y, size, options) {
        const { showLabels, cross, parents } = options;

        this.ctx.save();
        this.ctx.translate(x - size / 2, y - size / 2);

        GeneticsShapes.drawPunnettSquare(this.ctx, 0, 0, size, cross, parents);

        if (showLabels) {
            // Parent labels
            ctx.font = 'bold 14px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'center';
            ctx.fillText(`Parent 1: ${parents[0]}`, size / 2, -10);
            ctx.fillText(`Parent 2: ${parents[1]}`, -20, size / 2);

            // Ratio (for monohybrid)
            if (cross === 'monohybrid') {
                ctx.fillText('Genotypic Ratio: 1:2:1', size / 2, size + 25);
                ctx.fillText('Phenotypic Ratio: 3:1', size / 2, size + 45);
            }
        }

        this.ctx.restore();
    }

    renderMonohybridCrossDiagram(x, y, width, height, options) {
        const { showLabels, showPhenotypes } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        // Parents
        ctx.font = 'bold 18px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('P Generation', width / 2, height * 0.05);

        // Parent organisms
        ctx.fillStyle = '#27AE60';
        ctx.fillRect(width * 0.2, height * 0.1, width * 0.2, height * 0.15);
        ctx.fillStyle = '#E74C3C';
        ctx.fillRect(width * 0.6, height * 0.1, width * 0.2, height * 0.15);

        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText('AA', width * 0.3, height * 0.19);
        ctx.fillText('aa', width * 0.7, height * 0.19);

        // F1 Generation
        ctx.fillStyle = '#2C3E50';
        ctx.fillText('F1 Generation', width / 2, height * 0.35);

        ctx.fillStyle = '#F39C12';
        ctx.fillRect(width * 0.4, height * 0.4, width * 0.2, height * 0.15);

        ctx.fillStyle = '#FFFFFF';
        ctx.fillText('Aa', width * 0.5, height * 0.49);

        // F2 Generation (Punnett Square)
        ctx.fillStyle = '#2C3E50';
        ctx.fillText('F2 Generation', width / 2, height * 0.65);

        const punnettSize = width * 0.4;
        GeneticsShapes.drawPunnettSquare(this.ctx, width / 2, height * 0.85, punnettSize, 'monohybrid', ['Aa', 'Aa']);

        this.ctx.restore();
    }

    renderDihybridCrossDiagram(x, y, width, height, options) {
        const { showLabels, showPhenotypes } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        ctx.font = 'bold 18px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('Dihybrid Cross: AaBb × AaBb', width / 2, height * 0.05);

        // Draw 4x4 Punnett square
        const punnettSize = Math.min(width, height) * 0.85;
        GeneticsShapes.drawPunnettSquare(this.ctx, width / 2, height * 0.55, punnettSize, 'dihybrid', ['AaBb', 'AaBb']);

        if (showLabels) {
            ctx.font = 'bold 14px Arial';
            ctx.fillText('Phenotypic Ratio: 9:3:3:1', width / 2, height * 0.95);
        }

        this.ctx.restore();
    }

    renderPedigreeDiagram(x, y, width, height, options) {
        const { showLabels, inheritancePattern, generations } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        const symbolSize = 30;
        const levelHeight = height / (generations + 1);

        // Generation I
        let gen1X = width / 2;
        GeneticsShapes.drawPedigreeSymbol(this.ctx, gen1X - 40, levelHeight, symbolSize, 'male', false);
        GeneticsShapes.drawPedigreeSymbol(this.ctx, gen1X + 40, levelHeight, symbolSize, 'female', true);

        // Marriage line
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(gen1X - 40 + symbolSize / 2, levelHeight);
        ctx.lineTo(gen1X + 40 - symbolSize / 2, levelHeight);
        ctx.stroke();

        // Descent line
        ctx.beginPath();
        ctx.moveTo(gen1X, levelHeight);
        ctx.lineTo(gen1X, levelHeight * 1.5);
        ctx.stroke();

        // Generation II
        const gen2Positions = [gen1X - 60, gen1X, gen1X + 60];
        const gen2 = [
            { sex: 'female', affected: true },
            { sex: 'male', affected: false, carrier: true },
            { sex: 'female', affected: false }
        ];

        // Sibling line
        ctx.beginPath();
        ctx.moveTo(gen2Positions[0], levelHeight * 1.5);
        ctx.lineTo(gen2Positions[gen2Positions.length - 1], levelHeight * 1.5);
        ctx.stroke();

        gen2.forEach((individual, index) => {
            const xPos = gen2Positions[index];
            
            // Drop line
            ctx.beginPath();
            ctx.moveTo(xPos, levelHeight * 1.5);
            ctx.lineTo(xPos, levelHeight * 2);
            ctx.stroke();

            GeneticsShapes.drawPedigreeSymbol(this.ctx, xPos, levelHeight * 2, symbolSize,
                                            individual.sex, individual.affected, individual.carrier);
        });

        if (generations >= 3) {
            // Generation III (from middle person of Gen II)
            const gen3X = gen1X;
            
            // Marriage
            GeneticsShapes.drawPedigreeSymbol(this.ctx, gen3X + 40, levelHeight * 2, symbolSize, 'male', false);
            
            ctx.beginPath();
            ctx.moveTo(gen3X + symbolSize / 2, levelHeight * 2);
            ctx.lineTo(gen3X + 40 - symbolSize / 2, levelHeight * 2);
            ctx.stroke();

            // Descent
            ctx.beginPath();
            ctx.moveTo(gen3X + 20, levelHeight * 2);
            ctx.lineTo(gen3X + 20, levelHeight * 2.5);
            ctx.stroke();

            // Gen III children
            const gen3Positions = [gen3X - 20, gen3X + 60];
            
            ctx.beginPath();
            ctx.moveTo(gen3Positions[0], levelHeight * 2.5);
            ctx.lineTo(gen3Positions[1], levelHeight * 2.5);
            ctx.stroke();

            [
                { sex: 'male', affected: true },
                { sex: 'female', affected: false, carrier: true }
            ].forEach((individual, index) => {
                const xPos = gen3Positions[index];
                
                ctx.beginPath();
                ctx.moveTo(xPos, levelHeight * 2.5);
                ctx.lineTo(xPos, levelHeight * 3);
                ctx.stroke();

                GeneticsShapes.drawPedigreeSymbol(this.ctx, xPos, levelHeight * 3, symbolSize,
                                                individual.sex, individual.affected, individual.carrier);
            });
        }

        if (showLabels) {
            // Generation labels
            ctx.font = 'bold 14px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'left';
            for (let i = 0; i < generations; i++) {
                ctx.fillText(`${['I', 'II', 'III', 'IV'][i]}`, width * 0.02, levelHeight * (i + 1));
            }

            // Legend
            this.drawLegend(width * 0.7, height * 0.15, [
                { color: '#FFFFFF', label: 'Unaffected' },
                { color: '#2C3E50', label: 'Affected' },
                { color: '#2C3E50', label: '• Carrier' }
            ]);

            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(`Pattern: ${inheritancePattern.replace('_', ' ')}`, width / 2, height * 0.95);
        }

        this.ctx.restore();
    }

    renderDominancePatternsDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        const sectionWidth = width / 3;

        // Complete Dominance
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('Complete Dominance', sectionWidth * 0.5, height * 0.1);

        // AA (Red)
        ctx.fillStyle = '#E74C3C';
        ctx.fillRect(sectionWidth * 0.15, height * 0.2, sectionWidth * 0.2, height * 0.3);
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 14px Arial';
        ctx.fillText('AA', sectionWidth * 0.25, height * 0.36);
        ctx.fillStyle = '#2C3E50';
        ctx.font = '12px Arial';
        ctx.fillText('Red', sectionWidth * 0.25, height * 0.55);

        // Aa (Red)
        ctx.fillStyle = '#E74C3C';
        ctx.fillRect(sectionWidth * 0.4, height * 0.2, sectionWidth * 0.2, height * 0.3);
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 14px Arial';
        ctx.fillText('Aa', sectionWidth * 0.5, height * 0.36);
        ctx.fillStyle = '#2C3E50';
        ctx.font = '12px Arial';
        ctx.fillText('Red', sectionWidth * 0.5, height * 0.55);

        // aa (White)
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(sectionWidth * 0.65, height * 0.2, sectionWidth * 0.2, height * 0.3);
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 2;
        ctx.strokeRect(sectionWidth * 0.65, height * 0.2, sectionWidth * 0.2, height * 0.3);
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 14px Arial';
        ctx.fillText('aa', sectionWidth * 0.75, height * 0.36);
        ctx.font = '12px Arial';
        ctx.fillText('White', sectionWidth * 0.75, height * 0.55);

        // Incomplete Dominance
        ctx.font = 'bold 16px Arial';
        ctx.fillText('Incomplete Dominance', sectionWidth * 1.5, height * 0.1);

        // RR (Red)
        ctx.fillStyle = '#E74C3C';
        ctx.fillRect(sectionWidth * 1.15, height * 0.2, sectionWidth * 0.2, height * 0.3);
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 14px Arial';
        ctx.fillText('RR', sectionWidth * 1.25, height * 0.36);
        ctx.fillStyle = '#2C3E50';
        ctx.font = '12px Arial';
        ctx.fillText('Red', sectionWidth * 1.25, height * 0.55);

        // RW (Pink)
        ctx.fillStyle = '#FF69B4';
        ctx.fillRect(sectionWidth * 1.4, height * 0.2, sectionWidth * 0.2, height * 0.3);
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 14px Arial';
        ctx.fillText('RW', sectionWidth * 1.5, height * 0.36);
        ctx.fillStyle = '#2C3E50';
        ctx.font = '12px Arial';
        ctx.fillText('Pink', sectionWidth * 1.5, height * 0.55);

        // WW (White)
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(sectionWidth * 1.65, height * 0.2, sectionWidth * 0.2, height * 0.3);
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 2;
        ctx.strokeRect(sectionWidth * 1.65, height * 0.2, sectionWidth * 0.2, height * 0.3);
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 14px Arial';
        ctx.fillText('WW', sectionWidth * 1.75, height * 0.36);
        ctx.font = '12px Arial';
        ctx.fillText('White', sectionWidth * 1.75, height * 0.55);

        // Codominance
        ctx.font = 'bold 16px Arial';
        ctx.fillText('Codominance', sectionWidth * 2.5, height * 0.1);

        // RR (Red)
        ctx.fillStyle = '#E74C3C';
        ctx.fillRect(sectionWidth * 2.15, height * 0.2, sectionWidth * 0.2, height * 0.3);
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 14px Arial';
        ctx.fillText('RR', sectionWidth * 2.25, height * 0.36);
        ctx.fillStyle = '#2C3E50';
        ctx.font = '12px Arial';
        ctx.fillText('Red', sectionWidth * 2.25, height * 0.55);

        // RW (Roan - both colors)
        const gradient = ctx.createLinearGradient(sectionWidth * 2.4, 0, sectionWidth * 2.6, 0);
        gradient.addColorStop(0, '#E74C3C');
        gradient.addColorStop(0.5, '#FFFFFF');
        gradient.addColorStop(1, '#E74C3C');
        ctx.fillStyle = gradient;
        ctx.fillRect(sectionWidth * 2.4, height * 0.2, sectionWidth * 0.2, height * 0.3);
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 14px Arial';
        ctx.fillText('RW', sectionWidth * 2.5, height * 0.36);
        ctx.font = '12px Arial';
        ctx.fillText('Roan', sectionWidth * 2.5, height * 0.55);

        // WW (White)
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(sectionWidth * 2.65, height * 0.2, sectionWidth * 0.2, height * 0.3);
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 2;
        ctx.strokeRect(sectionWidth * 2.65, height * 0.2, sectionWidth * 0.2, height * 0.3);
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 14px Arial';
        ctx.fillText('WW', sectionWidth * 2.75, height * 0.36);
        ctx.font = '12px Arial';
        ctx.fillText('White', sectionWidth * 2.75, height * 0.55);

        // Explanations
        if (showLabels) {
            ctx.font = '11px Arial';
            ctx.fillStyle = '#7F8C8D';
            ctx.textAlign = 'center';
            
            ctx.fillText('Dominant allele masks', sectionWidth * 0.5, height * 0.65);
            ctx.fillText('recessive allele', sectionWidth * 0.5, height * 0.68);
            
            ctx.fillText('Heterozygote shows', sectionWidth * 1.5, height * 0.65);
            ctx.fillText('intermediate phenotype', sectionWidth * 1.5, height * 0.68);
            
            ctx.fillText('Both alleles fully', sectionWidth * 2.5, height * 0.65);
            ctx.fillText('expressed together', sectionWidth * 2.5, height * 0.68);
        }

        this.ctx.restore();
    }

    // ========== POPULATION GENETICS RENDERERS ==========

    renderHardyWeinbergDiagram(x, y, width, height, options) {
        const { showLabels, p, q } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        // Population frequency diagram
        GeneticsShapes.drawAlleleFrequency(this.ctx, 0, 0, width, height * 0.6, p, q);

        // Equations
        ctx.font = 'bold 18px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';

        const eqY = height * 0.7;
        ctx.fillText(`p + q = 1`, width * 0.5, eqY);
        ctx.fillText(`p² + 2pq + q² = 1`, width * 0.5, eqY + 30);

        // Values
        ctx.font = '14px Arial';
        ctx.fillStyle = '#7F8C8D';
        ctx.fillText(`p (freq of A) = ${p.toFixed(2)}`, width * 0.3, eqY + 60);
        ctx.fillText(`q (freq of a) = ${q.toFixed(2)}`, width * 0.7, eqY + 60);

        if (showLabels) {
            // Conditions
            ctx.font = 'bold 14px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'left';
            ctx.fillText('Conditions for Equilibrium:', width * 0.05, eqY + 90);

            ctx.font = '12px Arial';
            ctx.fillStyle = '#7F8C8D';
            const conditions = [
                '• No mutations',
                '• Random mating',
                '• No gene flow',
                '• Large population',
                '• No selection'
            ];

            conditions.forEach((condition, index) => {
                ctx.fillText(condition, width * 0.05, eqY + 110 + index * 18);
            });
        }

        this.ctx.restore();
    }

    renderGeneticDriftDiagram(x, y, width, height, options) {
        const { showLabels, driftType } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        if (driftType === 'bottleneck') {
            // Original population
            ctx.font = 'bold 14px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'center';
            ctx.fillText('Original Population', width * 0.25, height * 0.1);

            // Large diverse population
            const colors = ['#3498DB', '#E74C3C', '#27AE60', '#F39C12', '#9B59B6'];
            for (let i = 0; i < 30; i++) {
                const px = width * 0.15 + (i % 6) * 15;
                const py = height * 0.15 + Math.floor(i / 6) * 15;
                ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
                ctx.beginPath();
                ctx.arc(px, py, 6, 0, Math.PI * 2);
                ctx.fill();
            }

            // Bottleneck event
            ctx.fillStyle = '#E74C3C';
            ctx.font = 'bold 16px Arial';
            ctx.fillText('⚡ Bottleneck Event', width * 0.5, height * 0.45);

            // Arrow through bottleneck
            ctx.strokeStyle = '#E74C3C';
            ctx.fillStyle = '#E74C3C';
            ctx.lineWidth = 3;
            this.drawArrow(width * 0.25, height * 0.35, width * 0.5, height * 0.5, '#E74C3C', '');

            // Survived population (reduced diversity)
            ctx.fillStyle = '#2C3E50';
            ctx.font = 'bold 14px Arial';
            ctx.fillText('Survived Population', width * 0.75, height * 0.55);

            // Small population with reduced diversity
            const survivedColors = ['#3498DB', '#3498DB', '#E74C3C'];
            for (let i = 0; i < 8; i++) {
                const px = width * 0.7 + (i % 4) * 15;
                const py = height * 0.6 + Math.floor(i / 4) * 15;
                ctx.fillStyle = survivedColors[i % survivedColors.length];
                ctx.beginPath();
                ctx.arc(px, py, 6, 0, Math.PI * 2);
                ctx.fill();
            }

            // Recovery population (reduced diversity maintained)
            ctx.fillStyle = '#2C3E50';
            ctx.font = 'bold 14px Arial';
            ctx.fillText('Recovery Population', width * 0.75, height * 0.8);

            for (let i = 0; i < 25; i++) {
                const px = width * 0.65 + (i % 5) * 15;
                const py = height * 0.85 + Math.floor(i / 5) * 15;
                ctx.fillStyle = survivedColors[i % survivedColors.length];
                ctx.beginPath();
                ctx.arc(px, py, 6, 0, Math.PI * 2);
                ctx.fill();
            }

            this.drawArrow(width * 0.75, height * 0.68, width * 0.75, height * 0.78, '#27AE60', '');

        } else if (driftType === 'founder') {
            // Similar structure for founder effect
            ctx.font = 'bold 14px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'center';
            ctx.fillText('Original Population', width * 0.25, height * 0.2);

            // Large diverse population
            const colors = ['#3498DB', '#E74C3C', '#27AE60', '#F39C12', '#9B59B6'];
            for (let i = 0; i < 30; i++) {
                const px = width * 0.15 + (i % 6) * 15;
                const py = height * 0.25 + Math.floor(i / 6) * 15;
                ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
                ctx.beginPath();
                ctx.arc(px, py, 6, 0, Math.PI * 2);
                ctx.fill();
            }

            // Founders migrate
            ctx.fillStyle = '#9B59B6';
            ctx.font = 'bold 16px Arial';
            ctx.fillText('→ Founders Migrate →', width * 0.5, height * 0.45);

            // New population
            ctx.fillStyle = '#2C3E50';
            ctx.font = 'bold 14px Arial';
            ctx.fillText('New Population', width * 0.75, height * 0.2);

            // Small founder group
            const founderColors = ['#E74C3C', '#F39C12'];
            for (let i = 0; i < 20; i++) {
                const px = width * 0.7 + (i % 5) * 15;
                const py = height * 0.25 + Math.floor(i / 5) * 15;
                ctx.fillStyle = founderColors[i % founderColors.length];
                ctx.beginPath();
                ctx.arc(px, py, 6, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        if (showLabels) {
            ctx.font = '11px Arial';
            ctx.fillStyle = '#7F8C8D';
            ctx.textAlign = 'center';
            ctx.fillText('Random changes in allele frequency', width / 2, height * 0.95);
            ctx.fillText('due to chance events in small populations', width / 2, height * 0.98);
        }

        this.ctx.restore();
    }

    renderNaturalSelectionDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        const types = [
            { name: 'Directional', distribution: 'left' },
            { name: 'Stabilizing', distribution: 'center' },
            { name: 'Disruptive', distribution: 'edges' }
        ];

        const sectionWidth = width / 3;

        types.forEach((type, index) => {
            const sectionX = index * sectionWidth;

            // Title
            ctx.font = 'bold 14px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'center';
            ctx.fillText(type.name, sectionX + sectionWidth / 2, height * 0.1);

            // Before selection (normal distribution)
            ctx.strokeStyle = '#BDC3C7';
            ctx.lineWidth = 2;
            ctx.beginPath();
            const beforeY = height * 0.25;
            for (let x = 0; x <= 100; x++) {
                const normalX = sectionX + sectionWidth * 0.1 + (x / 100) * sectionWidth * 0.8;
                const normalY = beforeY - Math.exp(-Math.pow((x - 50) / 20, 2)) * height * 0.1;
                if (x === 0) ctx.moveTo(normalX, normalY);
                else ctx.lineTo(normalX, normalY);
            }
            ctx.stroke();

            // After selection (different distributions)
            ctx.strokeStyle = '#E74C3C';
            ctx.lineWidth = 3;
            ctx.beginPath();
            const afterY = height * 0.6;

            if (type.distribution === 'left') {
                // Directional - shift left
                for (let x = 0; x <= 100; x++) {
                    const normalX = sectionX + sectionWidth * 0.1 + (x / 100) * sectionWidth * 0.8;
                    const normalY = afterY - Math.exp(-Math.pow((x - 30) / 18, 2)) * height * 0.15;
                    if (x === 0) ctx.moveTo(normalX, normalY);
                    else ctx.lineTo(normalX, normalY);
                }
            } else if (type.distribution === 'center') {
                // Stabilizing - narrower peak
                for (let x = 0; x <= 100; x++) {
                    const normalX = sectionX + sectionWidth * 0.1 + (x / 100) * sectionWidth * 0.8;
                    const normalY = afterY - Math.exp(-Math.pow((x - 50) / 12, 2)) * height * 0.15;
                    if (x === 0) ctx.moveTo(normalX, normalY);
                    else ctx.lineTo(normalX, normalY);
                }
            } else if (type.distribution === 'edges') {
                // Disruptive - two peaks
                for (let x = 0; x <= 100; x++) {
                    const normalX = sectionX + sectionWidth * 0.1 + (x / 100) * sectionWidth * 0.8;
                    const peak1 = Math.exp(-Math.pow((x - 25) / 12, 2)) * height * 0.12;
                    const peak2 = Math.exp(-Math.pow((x - 75) / 12, 2)) * height * 0.12;
                    const normalY = afterY - (peak1 + peak2);
                    if (x === 0) ctx.moveTo(normalX, normalY);
                    else ctx.lineTo(normalX, normalY);
                }
            }
            ctx.stroke();

            // Labels
            if (showLabels) {
                ctx.font = '11px Arial';
                ctx.fillStyle = '#7F8C8D';
                ctx.fillText('Before', sectionX + sectionWidth / 2, beforeY + 20);
                ctx.fillText('After', sectionX + sectionWidth / 2, afterY + 20);

                // Trait axis
                ctx.fillText('Trait Value', sectionX + sectionWidth / 2, height * 0.75);
                this.drawArrow(sectionX + sectionWidth * 0.1, height * 0.78, 
                             sectionX + sectionWidth * 0.9, height * 0.78, '#7F8C8D', '');
            }
        });

        this.ctx.restore();
    }

    // ========== MOLECULAR TECHNIQUES RENDERERS ==========

    renderPCRDiagram(x, y, width, height, options) {
        const { showLabels, showCycles } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        const steps = [
            { name: 'Denaturation', temp: '94-96°C', color: '#E74C3C' },
            { name: 'Annealing', temp: '50-65°C', color: '#3498DB' },
            { name: 'Extension', temp: '72°C', color: '#27AE60' }
        ];

        const stepWidth = width / 3;
        const cycleHeight = height * 0.25;

        // Cycle 1
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('PCR Cycle', width / 2, height * 0.05);

        steps.forEach((step, index) => {
            const stepX = index * stepWidth + stepWidth / 2;
            const stepY = height * 0.2;

            // Step box
            ctx.fillStyle = step.color;
            ctx.fillRect(index * stepWidth + stepWidth * 0.1, stepY, 
                        stepWidth * 0.8, cycleHeight);

            // Step name and temp
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 14px Arial';
            ctx.fillText(step.name, stepX, stepY + cycleHeight * 0.35);
            ctx.font = '12px Arial';
            ctx.fillText(step.temp, stepX, stepY + cycleHeight * 0.55);

            // DNA visualization
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 3;

            if (step.name === 'Denaturation') {
                // Separated strands
                ctx.beginPath();
                ctx.moveTo(stepX - 30, stepY + cycleHeight * 0.75);
                ctx.lineTo(stepX + 30, stepY + cycleHeight * 0.75);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(stepX - 30, stepY + cycleHeight * 0.85);
                ctx.lineTo(stepX + 30, stepY + cycleHeight * 0.85);
                ctx.stroke();
            } else if (step.name === 'Annealing') {
                // Primers binding
                ctx.beginPath();
                ctx.moveTo(stepX - 30, stepY + cycleHeight * 0.75);
                ctx.lineTo(stepX + 30, stepY + cycleHeight * 0.75);
                ctx.stroke();

                ctx.strokeStyle = '#F39C12';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.moveTo(stepX - 30, stepY + cycleHeight * 0.85);
                ctx.lineTo(stepX - 10, stepY + cycleHeight * 0.85);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(stepX + 10, stepY + cycleHeight * 0.85);
                ctx.lineTo(stepX + 30, stepY + cycleHeight * 0.85);
                ctx.stroke();
            } else if (step.name === 'Extension') {
                // DNA synthesis
                ctx.strokeStyle = '#FFFFFF';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(stepX - 30, stepY + cycleHeight * 0.75);
                ctx.lineTo(stepX + 30, stepY + cycleHeight * 0.75);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(stepX - 30, stepY + cycleHeight * 0.85);
                ctx.lineTo(stepX + 30, stepY + cycleHeight * 0.85);
                ctx.stroke();
            }
        });

        if (showCycles) {
            // Show exponential amplification
            ctx.font = 'bold 14px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'center';
            ctx.fillText('DNA Amplification', width / 2, height * 0.55);

            const cycleData = [
                { cycle: 1, copies: 2 },
                { cycle: 2, copies: 4 },
                { cycle: 3, copies: 8 },
                { cycle: 4, copies: 16 },
                { cycle: 5, copies: 32 }
            ];

            ctx.font = '12px Arial';
            ctx.fillStyle = '#7F8C8D';
            cycleData.forEach((data, index) => {
                const barX = width * 0.15 + index * (width * 0.7 / 5);
                const barHeight = (data.copies / 32) * height * 0.25;
                const barY = height * 0.88 - barHeight;

                ctx.fillStyle = '#3498DB';
                ctx.fillRect(barX, barY, width * 0.1, barHeight);

                ctx.fillStyle = '#2C3E50';
                ctx.textAlign = 'center';
                ctx.fillText(`Cycle ${data.cycle}`, barX + width * 0.05, height * 0.92);
                ctx.fillText(`${data.copies}`, barX + width * 0.05, barY - 5);
            });
        }

        this.ctx.restore();
    }

    renderGelElectrophoresisDiagram(x, y, width, height, options) {
        const { showLabels, showLadder } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        // Gel apparatus
        ctx.fillStyle = '#2C3E50';
        ctx.fillRect(width * 0.1, height * 0.1, width * 0.8, height * 0.75);

        // Wells
        const numLanes = showLadder ? 6 : 5;
        const laneWidth = (width * 0.8) / numLanes;

        for (let i = 0; i < numLanes; i++) {
            const laneX = width * 0.1 + i * laneWidth + laneWidth * 0.25;
            ctx.fillStyle = '#34495E';
            ctx.fillRect(laneX, height * 0.1, laneWidth * 0.5, height * 0.05);
        }

        // DNA bands in lanes
        const samples = [
            { bands: [0.2, 0.4, 0.6] },
            { bands: [0.15, 0.35, 0.55, 0.7] },
            { bands: [0.3, 0.5] },
            { bands: [0.2, 0.45, 0.65] },
            { bands: [0.25, 0.4, 0.6, 0.75] }
        ];

        if (showLadder) {
            // DNA ladder (first lane)
            const ladderBands = [0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75];
            ladderBands.forEach(pos => {
                GeneticsShapes.drawGelLane(this.ctx, width * 0.1 + laneWidth * 0.25, height * 0.1,
                                         laneWidth * 0.5, height * 0.75, [{ position: pos }]);
            });

            if (showLabels) {
                ctx.font = '10px Arial';
                ctx.fillStyle = '#FFFFFF';
                ctx.textAlign = 'right';
                ctx.fillText('Ladder', width * 0.09, height * 0.9);
            }
        }

        samples.forEach((sample, index) => {
            const laneIndex = showLadder ? index + 1 : index;
            const laneX = width * 0.1 + laneIndex * laneWidth + laneWidth * 0.25;
            GeneticsShapes.drawGelLane(this.ctx, laneX, height * 0.1, laneWidth * 0.5, height * 0.75,
                                      sample.bands.map(pos => ({ position: pos })));

            if (showLabels) {
                ctx.font = '10px Arial';
                ctx.fillStyle = '#FFFFFF';
                ctx.textAlign = 'center';
                ctx.fillText(`Sample ${index + 1}`, laneX + laneWidth * 0.25, height * 0.9);
            }
        });

        // Electrodes
        ctx.fillStyle = '#E74C3C';
        ctx.fillRect(width * 0.05, height * 0.08, width * 0.9, height * 0.02);
        ctx.fillText('−', width * 0.05, height * 0.05);

        ctx.fillStyle = '#3498DB';
        ctx.fillRect(width * 0.05, height * 0.87, width * 0.9, height * 0.02);
        ctx.fillText('+', width * 0.05, height * 0.95);

        if (showLabels) {
            // Direction arrow
            this.drawArrow(width * 0.02, height * 0.3, width * 0.02, height * 0.7, '#F39C12', '');
            ctx.font = '11px Arial';
            ctx.fillStyle = '#F39C12';
            ctx.textAlign = 'left';
            ctx.fillText('DNA\nmigration', width * 0.03, height * 0.5);
        }

        this.ctx.restore();
    }

    renderCloningVectorDiagram(x, y, size, options) {
        const { showLabels, showInsert } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        const radius = size * 0.4;

        // Draw plasmid
        GeneticsShapes.drawPlasmid(this.ctx, 0, 0, radius);

        if (showInsert) {
            // Insert gene (shown as different colored segment)
            ctx.strokeStyle = '#27AE60';
            ctx.lineWidth = 12;
            ctx.beginPath();
            ctx.arc(0, 0, radius, Math.PI / 6, Math.PI / 2);
            ctx.stroke();

            if (showLabels) {
                ctx.font = 'bold 12px Arial';
                ctx.fillStyle = '#27AE60';
                ctx.textAlign = 'center';
                ctx.fillText('Insert Gene', radius * 0.7, -radius * 0.7);
            }
        }

        if (showLabels) {
            // Restriction site labels
            const sites = [
                { angle: 0, name: 'EcoRI', distance: radius * 1.3 },
                { angle: Math.PI / 2, name: 'BamHI', distance: radius * 1.3 },
                { angle: Math.PI, name: 'HindIII', distance: radius * 1.3 },
                { angle: 3 * Math.PI / 2, name: 'PstI', distance: radius * 1.3 }
            ];

            ctx.font = '11px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'center';
            sites.forEach(site => {
                const labelX = Math.cos(site.angle) * site.distance;
                const labelY = Math.sin(site.angle) * site.distance;
                ctx.fillText(site.name, labelX, labelY);
            });

            // Additional labels
            ctx.font = 'bold 12px Arial';
            ctx.fillText('Ampicillin\nResistance', radius * 0.9, radius * 0.3);
            ctx.fillText('Origin of\nReplication', -5, 5);
        }

        this.ctx.restore();
    }

    renderCRISPRDiagram(x, y, width, height, options) {
        const { showLabels, showGuideRNA } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        // Draw CRISPR complex
        GeneticsShapes.drawCRISPRComplex(this.ctx, 0, 0, width, height);

        if (showLabels) {
            this.addLabel('Target DNA', width * 0.1, height * 0.65, '#4169E1', 'left');
            this.addLabel('Cas9 Protein', width * 0.3, height * 0.35, '#95A5A6', 'left');
            
            if (showGuideRNA) {
                this.addLabel('Guide RNA', width * 0.65, height * 0.58, '#E74C3C', 'left');
            }
            
            this.addLabel('PAM Sequence', width * 0.75, height * 0.65, '#27AE60', 'left');
            this.addLabel('Cut Sites', width * 0.85, height * 0.7, '#F39C12', 'left');

            // Process steps
            ctx.font = 'bold 14px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'left';
            
            const steps = [
                '1. gRNA guides Cas9 to target',
                '2. PAM sequence recognized',
                '3. DNA double-strand break',
                '4. DNA repair mechanisms'
            ];

            steps.forEach((step, index) => {
                ctx.font = index === 0 ? 'bold 12px Arial' : '11px Arial';
                ctx.fillStyle = index === 0 ? '#2C3E50' : '#7F8C8D';
                ctx.fillText(step, width * 0.05, height * 0.82 + index * 15);
            });
        }

        this.ctx.restore();
    }

    renderDNASequencingDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        // Template DNA strand
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(width * 0.1, height * 0.2);
        ctx.lineTo(width * 0.9, height * 0.2);
        ctx.stroke();

        // Primer
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(width * 0.1, height * 0.25);
        ctx.lineTo(width * 0.3, height * 0.25);
        ctx.stroke();

        // DNA synthesis with ddNTPs
        const fragments = [
            { length: 0.4, base: 'A', color: '#27AE60' },
            { length: 0.5, base: 'T', color: '#E74C3C' },
            { length: 0.6, base: 'G', color: '#F39C12' },
            { length: 0.7, base: 'C', color: '#3498DB' },
            { length: 0.8, base: 'A', color: '#27AE60' }
        ];

        fragments.forEach((frag, index) => {
            const fragmentY = height * 0.35 + index * 20;
            
            ctx.strokeStyle = frag.color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(width * 0.1, fragmentY);
            ctx.lineTo(width * 0.1 + width * frag.length, fragmentY);
            ctx.stroke();

            // Terminating ddNTP
            ctx.fillStyle = frag.color;
            ctx.beginPath();
            ctx.arc(width * 0.1 + width * frag.length, fragmentY, 5, 0, Math.PI * 2);
            ctx.fill();

            if (showLabels) {
                ctx.font = 'bold 11px Arial';
                ctx.fillStyle = '#2C3E50';
                ctx.textAlign = 'left';
                ctx.fillText(frag.base, width * 0.1 + width * frag.length + 10, fragmentY + 4);
            }
        });

        // Sequencing result (chromatogram representation)
        ctx.font = 'bold 14px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('Sequencing Output', width / 2, height * 0.65);

        // Simplified chromatogram peaks
        const sequence = ['A', 'T', 'G', 'C', 'A', 'G', 'T', 'C'];
        const peakColors = {
            'A': '#27AE60',
            'T': '#E74C3C',
            'G': '#F39C12',
            'C': '#3498DB'
        };

        const peakWidth = (width * 0.8) / sequence.length;
        const baselineY = height * 0.85;

        sequence.forEach((base, index) => {
            const peakX = width * 0.1 + index * peakWidth + peakWidth / 2;
            const peakHeight = height * 0.1 + Math.random() * height * 0.05;

            // Peak
            ctx.strokeStyle = peakColors[base];
            ctx.fillStyle = peakColors[base];
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(peakX - peakWidth * 0.3, baselineY);
            ctx.lineTo(peakX, baselineY - peakHeight);
            ctx.lineTo(peakX + peakWidth * 0.3, baselineY);
            ctx.closePath();
            ctx.stroke();
            ctx.globalAlpha = 0.3;
            ctx.fill();
            ctx.globalAlpha = 1.0;

            // Base letter
            ctx.font = 'bold 12px monospace';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'center';
            ctx.fillText(base, peakX, baselineY + 15);
        });

        // Baseline
        ctx.strokeStyle = '#BDC3C7';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(width * 0.1, baselineY);
        ctx.lineTo(width * 0.9, baselineY);
        ctx.stroke();

        if (showLabels) {
            this.addLabel('Template DNA', width * 0.1, height * 0.15, '#4169E1', 'left');
            this.addLabel('Primer', width * 0.1, height * 0.3, '#E74C3C', 'left');
            this.addLabel('Fragments\n(ddNTP terminated)', width * 0.92, height * 0.45, '#2C3E50', 'left');
        }

        this.ctx.restore();
    }

    // ========== GENE REGULATION RENDERERS ==========

    renderGeneExpressionDiagram(x, y, width, height, options) {
        const { showLabels, showEnhancers } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        // Gene structure
        GeneticsShapes.drawGeneStructure(this.ctx, 0, 0, width, height * 0.4);

        // Transcription factors
        const tfPositions = [
            { x: 0.08, name: 'TF1', color: '#E74C3C' },
            { x: 0.12, name: 'TF2', color: '#3498DB' }
        ];

        tfPositions.forEach(tf => {
            ctx.fillStyle = tf.color;
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(width * tf.x, height * 0.3, 15, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.font = 'bold 10px Arial';
            ctx.fillStyle = '#FFFFFF';
            ctx.textAlign = 'center';
            ctx.fillText(tf.name, width * tf.x, height * 0.305);
        });

        // RNA Polymerase
        ctx.fillStyle = '#95A5A6';
        ctx.strokeStyle = '#7F8C8D';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(width * 0.25, height * 0.35, 25, 15, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 11px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('Pol II', width * 0.25, height * 0.36);

        if (showEnhancers) {
            // Enhancer region
            ctx.fillStyle = '#9B59B6';
            ctx.fillRect(width * 0.7, height * 0.15, width * 0.15, height * 0.05);

            ctx.font = 'bold 11px Arial';
            ctx.fillStyle = '#FFFFFF';
            ctx.textAlign = 'center';
            ctx.fillText('Enhancer', width * 0.775, height * 0.185);

            // Activator protein
            ctx.fillStyle = '#F39C12';
            ctx.strokeStyle = '#E67E22';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(width * 0.775, height * 0.25, 12, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // DNA looping
            ctx.strokeStyle = '#7F8C8D';
            ctx.lineWidth = 2;
            ctx.setLineDash([3, 3]);
            ctx.beginPath();
            ctx.arc(width * 0.5, height * 0.22, width * 0.25, 0, Math.PI);
            ctx.stroke();
            ctx.setLineDash([]);
        }

        if (showLabels) {
            this.addLabel('Promoter', width * 0.075, height * 0.5, '#E74C3C', 'center');
            this.addLabel('Coding\nSequence', width * 0.5, height * 0.5, '#3498DB', 'center');
            this.addLabel('Transcription\nFactors', width * 0.1, height * 0.22, '#2C3E50', 'center');
            
            if (showEnhancers) {
                this.addLabel('Distant\nRegulation', width * 0.775, height * 0.1, '#9B59B6', 'center');
            }
        }

        this.ctx.restore();
    }

    renderLacOperonDiagram(x, y, width, height, options) {
        const { showLabels, state } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        // Operon structure
        const operonY = height * 0.4;

        // Promoter
        ctx.fillStyle = '#E74C3C';
        ctx.fillRect(width * 0.1, operonY, width * 0.08, height * 0.15);
        
        // Operator
        ctx.fillStyle = '#F39C12';
        ctx.fillRect(width * 0.19, operonY, width * 0.08, height * 0.15);
        
        // Structural genes (lacZ, lacY, lacA)
        const genes = ['lacZ', 'lacY', 'lacA'];
        genes.forEach((gene, index) => {
            ctx.fillStyle = '#3498DB';
            ctx.fillRect(width * (0.28 + index * 0.18), operonY, width * 0.15, height * 0.15);
            
            ctx.font = 'bold 12px Arial';
            ctx.fillStyle = '#FFFFFF';
            ctx.textAlign = 'center';
            ctx.fillText(gene, width * (0.355 + index * 0.18), operonY + height * 0.09);
        });

        // DNA baseline
        ctx.strokeStyle = '#34495E';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(width * 0.05, operonY + height * 0.075);
        ctx.lineTo(width * 0.95, operonY + height * 0.075);
        ctx.stroke();

        if (state === 'repressed') {
            // Repressor bound to operator
            ctx.fillStyle = '#8E44AD';
            ctx.strokeStyle = '#6C3483';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(width * 0.23, operonY - 20, 18, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.font = 'bold 10px Arial';
            ctx.fillStyle = '#FFFFFF';
            ctx.textAlign = 'center';
            ctx.fillText('Rep', width * 0.23, operonY - 16);

            // Binding line
            ctx.strokeStyle = '#8E44AD';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(width * 0.23, operonY - 2);
            ctx.lineTo(width * 0.23, operonY + height * 0.075);
            ctx.stroke();

            if (showLabels) {
                ctx.font = 'bold 16px Arial';
                ctx.fillStyle = '#E74C3C';
                ctx.fillText('REPRESSED (No Lactose)', width / 2, height * 0.15);
                
                ctx.font = '12px Arial';
                ctx.fillStyle = '#7F8C8D';
                ctx.fillText('No transcription - repressor blocks RNA polymerase', width / 2, height * 0.75);
            }

        } else if (state === 'induced') {
            // Lactose present - repressor not bound
            ctx.fillStyle = '#8E44AD';
            ctx.strokeStyle = '#6C3483';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(width * 0.85, operonY - 30, 18, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.font = 'bold 10px Arial';
            ctx.fillStyle = '#FFFFFF';
            ctx.textAlign = 'center';
            ctx.fillText('Rep', width * 0.85, operonY - 26);

            // Lactose molecule bound to repressor
            ctx.fillStyle = '#27AE60';
            ctx.beginPath();
            ctx.arc(width * 0.88, operonY - 20, 8, 0, Math.PI * 2);
            ctx.fill();

            // CAP-cAMP complex
            ctx.fillStyle = '#16A085';
            ctx.strokeStyle = '#0E6655';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(width * 0.08, operonY - 20, 15, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.font = 'bold 9px Arial';
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText('CAP', width * 0.08, operonY - 16);

            // RNA Polymerase transcribing
            ctx.fillStyle = '#95A5A6';
            ctx.strokeStyle = '#7F8C8D';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.ellipse(width * 0.35, operonY - 20, 25, 15, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.font = 'bold 11px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.fillText('Pol', width * 0.35, operonY - 16);

            // mRNA being transcribed
            ctx.strokeStyle = '#E74C3C';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(width * 0.35, operonY);
            for (let i = 0; i < 6; i++) {
                const xPos = width * (0.35 + i * 0.08);
                const yPos = operonY - 5 + (i % 2) * 10;
                ctx.lineTo(xPos, yPos);
            }
            ctx.stroke();

            if (showLabels) {
                ctx.font = 'bold 16px Arial';
                ctx.fillStyle = '#27AE60';
                ctx.textAlign = 'center';
                ctx.fillText('INDUCED (Lactose Present)', width / 2, height * 0.15);
                
                ctx.font = '12px Arial';
                ctx.fillStyle = '#7F8C8D';
                ctx.fillText('Active transcription - lactose inactivates repressor', width / 2, height * 0.75);
            }
        }

        if (showLabels) {
            // Component labels
            ctx.font = '11px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'center';
            ctx.fillText('Promoter', width * 0.14, operonY + height * 0.2);
            ctx.fillText('Operator', width * 0.23, operonY + height * 0.2);
        }

        this.ctx.restore();
    }

    renderEpigeneticsDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        const sectionWidth = width / 2;

        // DNA Methylation section
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('DNA Methylation', sectionWidth * 0.5, height * 0.1);

        // DNA strand
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(sectionWidth * 0.1, height * 0.25);
        ctx.lineTo(sectionWidth * 0.9, height * 0.25);
        ctx.stroke();

        // CpG sites with methyl groups
        const methylPositions = [0.2, 0.4, 0.6, 0.8];
        methylPositions.forEach(pos => {
            // Cytosine
            ctx.fillStyle = '#95E1D3';
            ctx.beginPath();
            ctx.arc(sectionWidth * pos, height * 0.25, 6, 0, Math.PI * 2);
            ctx.fill();

            ctx.font = 'bold 10px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.textAlign = 'center';
            ctx.fillText('C', sectionWidth * pos, height * 0.28);

            // Methyl group (CH3)
            ctx.fillStyle = '#E74C3C';
            ctx.beginPath();
            ctx.arc(sectionWidth * pos, height * 0.15, 8, 0, Math.PI * 2);
            ctx.fill();

            ctx.font = 'bold 9px Arial';
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText('CH₃', sectionWidth * pos, height * 0.17);

            // Connection line
            ctx.strokeStyle = '#E74C3C';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(sectionWidth * pos, height * 0.19);
            ctx.lineTo(sectionWidth * pos, height * 0.23);
            ctx.stroke();
        });

        if (showLabels) {
            ctx.font = '11px Arial';
            ctx.fillStyle = '#7F8C8D';
            ctx.textAlign = 'center';
            ctx.fillText('Gene silencing', sectionWidth * 0.5, height * 0.38);
        }

        // Histone Modification section
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.fillText('Histone Modification', sectionWidth * 1.5, height * 0.1);

        // Nucleosome
        const histoneX = sectionWidth * 1.5;
        const histoneY = height * 0.25;

        // Histone octamer (circle)
        ctx.fillStyle = '#9B59B6';
        ctx.strokeStyle = '#8E44AD';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(histoneX, histoneY, 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 11px Arial';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.fillText('H2A', histoneX - 8, histoneY - 8);
        ctx.fillText('H2B', histoneX + 8, histoneY - 8);
        ctx.fillText('H3', histoneX - 8, histoneY + 8);
        ctx.fillText('H4', histoneX + 8, histoneY + 8);

        // DNA wrapped around histone
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(histoneX, histoneY, 38, -Math.PI * 0.7, Math.PI * 0.7);
        ctx.stroke();

        // Histone tails with modifications
        const tails = [
            { angle: -Math.PI / 4, mod: 'Ac', color: '#27AE60', label: 'Acetylation' },
            { angle: Math.PI / 4, mod: 'Me', color: '#E74C3C', label: 'Methylation' },
            { angle: 3 * Math.PI / 4, mod: 'P', color: '#F39C12', label: 'Phosphorylation' }
        ];

        tails.forEach(tail => {
            const tailLength = 40;
            const tailEndX = histoneX + Math.cos(tail.angle) * (30 + tailLength);
            const tailEndY = histoneY + Math.sin(tail.angle) * (30 + tailLength);

            // Tail
            ctx.strokeStyle = '#BDC3C7';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(histoneX + Math.cos(tail.angle) * 30, histoneY + Math.sin(tail.angle) * 30);
            ctx.lineTo(tailEndX, tailEndY);
            ctx.stroke();

            // Modification
            ctx.fillStyle = tail.color;
            ctx.beginPath();
            ctx.arc(tailEndX, tailEndY, 8, 0, Math.PI * 2);
            ctx.fill();

            ctx.font = 'bold 9px Arial';
            ctx.fillStyle = '#FFFFFF';
            ctx.textAlign = 'center';
            ctx.fillText(tail.mod, tailEndX, tailEndY + 3);
        });

        if (showLabels) {
            ctx.font = '11px Arial';
            ctx.fillStyle = '#7F8C8D';
            ctx.textAlign = 'center';
            ctx.fillText('Regulates chromatin structure', sectionWidth * 1.5, height * 0.45);

            // Legend
            this.drawLegend(width * 0.35, height * 0.55, [
                { color: '#27AE60', label: 'Acetyl (Ac) - Active' },
                { color: '#E74C3C', label: 'Methyl (Me) - Variable' },
                { color: '#F39C12', label: 'Phosphate (P) - Signaling' }
            ]);
        }

        this.ctx.restore();
    }

    // ========== GENOMICS RENDERERS ==========

    renderGenomeStructureDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        // Chromosome representation
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('Eukaryotic Genome Organization', width / 2, height * 0.08);

        // Chromosome
        const chrY = height * 0.2;
        GeneticsShapes.drawChromosome(this.ctx, width * 0.35, chrY, width * 0.3, height * 0.15, 'metaphase');

        // Zoom into chromatin
        this.drawArrow(width * 0.5, chrY + height * 0.18, width * 0.5, height * 0.35, '#F39C12', '');

        // Chromatin fiber
        ctx.font = 'bold 14px Arial';
        ctx.fillText('Chromatin Fiber', width / 2, height * 0.38);

        // Nucleosomes
        for (let i = 0; i < 5; i++) {
            const nucX = width * (0.3 + i * 0.1);
            const nucY = height * 0.45;

            // Histone
            ctx.fillStyle = '#9B59B6';
            ctx.beginPath();
            ctx.arc(nucX, nucY, 12, 0, Math.PI * 2);
            ctx.fill();

            // DNA wrapped
            ctx.strokeStyle = '#4169E1';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(nucX, nucY, 15, -Math.PI * 0.6, Math.PI * 0.6);
            ctx.stroke();

            // Linker DNA
            if (i < 4) {
                ctx.beginPath();
                ctx.moveTo(nucX + 15, nucY);
                ctx.lineTo(nucX + width * 0.1 - 15, nucY);
                ctx.stroke();
            }
        }

        // Zoom into gene
        this.drawArrow(width * 0.5, height * 0.5, width * 0.5, height * 0.6, '#F39C12', '');

        // Gene structure
        ctx.fillText('Gene Structure', width / 2, height * 0.63);
        GeneticsShapes.drawGeneStructure(this.ctx, 0, height * 0.65, width, height * 0.25);

        if (showLabels) {
            this.addLabel('Condensed\nChromosome', width * 0.15, chrY + height * 0.075, '#4A69BD', 'center');
            this.addLabel('Nucleosome', width * 0.15, height * 0.45, '#9B59B6', 'center');
            this.addLabel('DNA', width * 0.85, height * 0.45, '#4169E1', 'center');
        }

        this.ctx.restore();
    }

    renderGeneStructureDiagram(x, y, width, height, options) {
        const { showLabels } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        // Draw gene structure
        GeneticsShapes.drawGeneStructure(this.ctx, 0, height * 0.2, width, height * 0.3);

        if (showLabels) {
            // Detailed labels
            const labelY = height * 0.55;
            
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 1;

            // Promoter
            ctx.beginPath();
            ctx.moveTo(width * 0.1, height * 0.35);
            ctx.lineTo(width * 0.1, labelY);
            ctx.stroke();
            this.addLabel('Promoter\n(TATA box)', width * 0.1, labelY + 10, '#E74C3C', 'center');

            // 5' UTR
            ctx.beginPath();
            ctx.moveTo(width * 0.2, height * 0.35);
            ctx.lineTo(width * 0.2, labelY);
            ctx.stroke();
            this.addLabel('5\' UTR', width * 0.2, labelY + 10, '#95A5A6', 'center');

            // Exon
            ctx.beginPath();
            ctx.moveTo(width * 0.3, height * 0.35);
            ctx.lineTo(width * 0.3, labelY);
            ctx.stroke();
            this.addLabel('Exon\n(coding)', width * 0.3, labelY + 10, '#3498DB', 'center');

            // Intron
            ctx.beginPath();
            ctx.moveTo(width * 0.43, height * 0.35);
            ctx.lineTo(width * 0.43, labelY);
            ctx.stroke();
            this.addLabel('Intron\n(non-coding)', width * 0.43, labelY + 10, '#ECF0F1', 'center');

            // 3' UTR
            ctx.beginPath();
            ctx.moveTo(width * 0.85, height * 0.35);
            ctx.lineTo(width * 0.85, labelY);
            ctx.stroke();
            this.addLabel('3\' UTR', width * 0.85, labelY + 10, '#95A5A6', 'center');

            // Terminator
            ctx.beginPath();
            ctx.moveTo(width * 0.95, height * 0.35);
            ctx.lineTo(width * 0.95, labelY);
            ctx.stroke();
            this.addLabel('Terminator', width * 0.95, labelY + 10, '#E74C3C', 'center');

            // Additional annotations
            ctx.font = '11px Arial';
            ctx.fillStyle = '#7F8C8D';
            ctx.textAlign = 'left';
            
            const annotations = [
                'Transcription Start Site (TSS) →',
                'Translation Start (ATG) →',
                'Translation Stop (TAA/TAG/TGA) →',
                'Polyadenylation Signal (AATAAA)'
            ];

            annotations.forEach((annotation, index) => {
                ctx.fillText(annotation, width * 0.05, height * 0.75 + index * 15);
            });
        }

        this.ctx.restore();
    }

    renderSplicingDiagram(x, y, width, height, options) {
        const { showLabels, showAlternative } = options;

        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);

        // Pre-mRNA
        ctx.font = 'bold 14px Arial';
        ctx.fillStyle = '#2C3E50';
        ctx.textAlign = 'center';
        ctx.fillText('Pre-mRNA (Primary Transcript)', width / 2, height * 0.08);

        const preMrnaY = height * 0.15;
        const exonHeight = height * 0.06;

        // Draw pre-mRNA with exons and introns
        const structure = [
            { type: 'exon', width: 0.12, color: '#3498DB', label: 'Exon 1' },
            { type: 'intron', width: 0.12, color: '#ECF0F1', label: 'Intron 1' },
            { type: 'exon', width: 0.12, color: '#3498DB', label: 'Exon 2' },
            { type: 'intron', width: 0.12, color: '#ECF0F1', label: 'Intron 2' },
            { type: 'exon', width: 0.12, color: '#3498DB', label: 'Exon 3' },
            { type: 'intron', width: 0.12, color: '#ECF0F1', label: 'Intron 3' },
            { type: 'exon', width: 0.12, color: '#3498DB', label: 'Exon 4' }
        ];

        let currentX = width * 0.05;
        structure.forEach(segment => {
            ctx.fillStyle = segment.color;
            ctx.fillRect(currentX, preMrnaY, width * segment.width, exonHeight);
            
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 2;
            ctx.strokeRect(currentX, preMrnaY, width * segment.width, exonHeight);

            if (showLabels) {
                ctx.font = '9px Arial';
                ctx.fillStyle = segment.type === 'exon' ? '#FFFFFF' : '#7F8C8D';
                ctx.textAlign = 'center';
                ctx.fillText(segment.label, currentX + width * segment.width / 2, preMrnaY + exonHeight / 2 + 3);
            }

            currentX += width * segment.width;
        });

        // Splicing process
        ctx.font = 'bold 14px Arial';
        ctx.fillStyle = '#E74C3C';
        ctx.textAlign = 'center';
        ctx.fillText('⬇ Splicing', width / 2, height * 0.28);

        // Spliceosome (simplified)
        ctx.fillStyle = '#F39C12';
        ctx.strokeStyle = '#E67E22';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(width * 0.3, height * 0.23, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 10px Arial';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText('snRNP', width * 0.3, height * 0.235);

        if (!showAlternative) {
            // Standard splicing - all exons joined
            ctx.font = 'bold 14px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.fillText('Mature mRNA', width / 2, height * 0.38);

            const matureY = height * 0.45;
            const exons = ['Exon 1', 'Exon 2', 'Exon 3', 'Exon 4'];
            
            currentX = width * 0.15;
            exons.forEach((exon, index) => {
                ctx.fillStyle = '#3498DB';
                ctx.fillRect(currentX, matureY, width * 0.15, exonHeight);
                
                ctx.strokeStyle = '#2C3E50';
                ctx.lineWidth = 2;
                ctx.strokeRect(currentX, matureY, width * 0.15, exonHeight);

                ctx.font = '10px Arial';
                ctx.fillStyle = '#FFFFFF';
                ctx.textAlign = 'center';
                ctx.fillText(exon, currentX + width * 0.075, matureY + exonHeight / 2 + 3);

                currentX += width * 0.15;
            });

        } else {
            // Alternative splicing - multiple variants
            ctx.font = 'bold 14px Arial';
            ctx.fillStyle = '#2C3E50';
            ctx.fillText('Alternative Splicing Products', width / 2, height * 0.38);

            const variants = [
                { name: 'Isoform 1', exons: ['Exon 1', 'Exon 2', 'Exon 3', 'Exon 4'], y: 0.45 },
                { name: 'Isoform 2', exons: ['Exon 1', 'Exon 2', 'Exon 4'], y: 0.58 },
                { name: 'Isoform 3', exons: ['Exon 1', 'Exon 3', 'Exon 4'], y: 0.71 }
            ];

            variants.forEach(variant => {
                const variantY = height * variant.y;
                
                // Variant label
                ctx.font = 'bold 11px Arial';
                ctx.fillStyle = '#7F8C8D';
                ctx.textAlign = 'left';
                ctx.fillText(variant.name, width * 0.02, variantY + exonHeight / 2);

                currentX = width * 0.18;
                variant.exons.forEach((exon, index) => {
                    ctx.fillStyle = '#3498DB';
                    ctx.fillRect(currentX, variantY, width * 0.15, exonHeight);
                    
                    ctx.strokeStyle = '#2C3E50';
                    ctx.lineWidth = 2;
                    ctx.strokeRect(currentX, variantY, width * 0.15, exonHeight);

                    ctx.font = '9px Arial';
                    ctx.fillStyle = '#FFFFFF';
                    ctx.textAlign = 'center';
                    ctx.fillText(exon, currentX + width * 0.075, variantY + exonHeight / 2 + 3);

                    currentX += width * 0.15;
                });
            });

            if (showLabels) {
                ctx.font = '11px Arial';
                ctx.fillStyle = '#7F8C8D';
                ctx.textAlign = 'center';
                ctx.fillText('Different proteins from same gene', width / 2, height * 0.88);
            }
        }

        // Excised introns
        if (showLabels) {
            ctx.font = '11px Arial';
            ctx.fillStyle = '#E74C3C';
            ctx.textAlign = 'right';
            ctx.fillText('Introns removed ✕', width * 0.98, height * 0.23);
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

    animate() {
        this.currentFrame++;
        requestAnimationFrame(() => this.animate());
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    saveAsPNG(filename = 'genetics-diagram.png') {
        const link = document.createElement('a');
        link.download = filename;
        link.href = this.canvas.toDataURL();
        link.click();
    }
}

// ============================================================================
// EXPORT
// ============================================================================

export { GeneticsDiagramsRegistry, GeneticsShapes, GeneticsDiagramRenderer };
