// ====================================================================
// CELL DIFFERENTIATION VISUALIZATION - MODULAR OOP ARCHITECTURE
// ====================================================================

// ==================== CONFIGURATION ====================
const CONFIG = {
    canvas: {
        width: 1400,
        height: 900,
        backgroundColor: 'transparent'
    },
    stem: {
        centerX: 700,
        centerY: 450,
        size: 30,
        nucleusRatio: 0.4
    },
    differentiation: {
        particleCount: 150,
        signalMolecules: 50,
        transcriptionRate: 0.05,
        morphologyChangeSpeed: 0.02
    },
    animation: {
        divisionInterval: 3000,
        differentiationDuration: 2000,
        signalUpdateInterval: 16
    },
    cellTypes: {
        stem: {
            color: '#4ecdc4',
            size: 30,
            shape: 'round'
        },
        neuron: {
            color: '#f72585',
            size: 25,
            shape: 'star',
            dendrites: 5
        },
        redBloodCell: {
            color: '#ff6b6b',
            size: 18,
            shape: 'biconcave'
        },
        whiteBloodCell: {
            color: '#ffd93d',
            size: 22,
            shape: 'irregular'
        },
        muscleCell: {
            color: '#a8dadc',
            size: 40,
            shape: 'elongated'
        },
        epithelial: {
            color: '#b5a6d6',
            size: 28,
            shape: 'cuboidal'
        },
        osteoblast: {
            color: '#95d5b2',
            size: 24,
            shape: 'round'
        },
        adipocyte: {
            color: '#ffb703',
            size: 35,
            shape: 'fat'
        }
    }
};

// ==================== UTILITY CLASSES ====================
class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    add(v) {
        return new Vector2D(this.x + v.x, this.y + v.y);
    }
    
    subtract(v) {
        return new Vector2D(this.x - v.x, this.y - v.y);
    }
    
    multiply(scalar) {
        return new Vector2D(this.x * scalar, this.y * scalar);
    }
    
    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    
    normalize() {
        const mag = this.magnitude();
        return mag > 0 ? new Vector2D(this.x / mag, this.y / mag) : new Vector2D(0, 0);
    }
    
    distance(v) {
        return Math.sqrt((this.x - v.x) ** 2 + (this.y - v.y) ** 2);
    }
    
    rotate(angle) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return new Vector2D(
            this.x * cos - this.y * sin,
            this.x * sin + this.y * cos
        );
    }
}

class Color {
    constructor(r, g, b, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    
    toString() {
        return `rgba(${Math.floor(this.r)}, ${Math.floor(this.g)}, ${Math.floor(this.b)}, ${this.a})`;
    }
    
    static fromHex(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? new Color(
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ) : null;
    }
    
    lerp(targetColor, t) {
        return new Color(
            this.r + (targetColor.r - this.r) * t,
            this.g + (targetColor.g - this.g) * t,
            this.b + (targetColor.b - this.b) * t,
            this.a + (targetColor.a - this.a) * t
        );
    }
}

// ==================== CANVAS RENDERER ====================
class CanvasRenderer {
    constructor(canvasId, width, height) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.width = width;
        this.height = height;
        this.canvas.width = width;
        this.canvas.height = height;
        this.scale = 1;
        this.offset = new Vector2D(0, 0);
    }
    
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
    
    setTransform(scale, offsetX, offsetY) {
        this.scale = scale;
        this.offset = new Vector2D(offsetX, offsetY);
        this.ctx.setTransform(scale, 0, 0, scale, offsetX, offsetY);
    }
    
    resetTransform() {
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    
    drawCircle(x, y, radius, fillColor, strokeColor = null, lineWidth = 1) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        if (fillColor) {
            this.ctx.fillStyle = fillColor;
            this.ctx.fill();
        }
        if (strokeColor) {
            this.ctx.strokeStyle = strokeColor;
            this.ctx.lineWidth = lineWidth;
            this.ctx.stroke();
        }
    }
    
    drawPath(points, strokeColor, lineWidth = 2, closed = false) {
        if (points.length < 2) return;
        
        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            this.ctx.lineTo(points[i].x, points[i].y);
        }
        if (closed) this.ctx.closePath();
        
        this.ctx.strokeStyle = strokeColor;
        this.ctx.lineWidth = lineWidth;
        this.ctx.stroke();
    }
    
    fillPolygon(points, fillColor) {
        if (points.length < 3) return;
        
        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            this.ctx.lineTo(points[i].x, points[i].y);
        }
        this.ctx.closePath();
        this.ctx.fillStyle = fillColor;
        this.ctx.fill();
    }
    
    drawText(text, x, y, font = '14px Arial', color = '#ffffff', align = 'center') {
        this.ctx.font = font;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = align;
        this.ctx.fillText(text, x, y);
    }
    
    drawGradientCircle(x, y, radius, colorStops) {
        const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, radius);
        colorStops.forEach(stop => gradient.addColorStop(stop.offset, stop.color));
        
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fillStyle = gradient;
        this.ctx.fill();
    }
    
    drawEllipse(x, y, radiusX, radiusY, rotation, fillColor, strokeColor = null, lineWidth = 1) {
        this.ctx.beginPath();
        this.ctx.ellipse(x, y, radiusX, radiusY, rotation, 0, Math.PI * 2);
        if (fillColor) {
            this.ctx.fillStyle = fillColor;
            this.ctx.fill();
        }
        if (strokeColor) {
            this.ctx.strokeStyle = strokeColor;
            this.ctx.lineWidth = lineWidth;
            this.ctx.stroke();
        }
    }
}

// ==================== GENETIC COMPONENTS ====================
class Chromosome {
    constructor(id, geneCount = 20) {
        this.id = id;
        this.genes = this.generateGenes(geneCount);
        this.condensation = 0; // 0 = relaxed, 1 = condensed
    }
    
    generateGenes(count) {
        const genes = [];
        for (let i = 0; i < count; i++) {
            genes.push({
                id: `gene_${this.id}_${i}`,
                active: Math.random() < 0.3,
                expressionLevel: Math.random(),
                function: this.getRandomGeneFunction()
            });
        }
        return genes;
    }
    
    getRandomGeneFunction() {
        const functions = [
            'structural', 'enzymatic', 'regulatory', 
            'signaling', 'adhesion', 'differentiation'
        ];
        return functions[Math.floor(Math.random() * functions.length)];
    }
    
    express(geneId) {
        const gene = this.genes.find(g => g.id === geneId);
        if (gene) {
            gene.active = true;
            gene.expressionLevel = Math.min(1, gene.expressionLevel + 0.1);
        }
    }
    
    silence(geneId) {
        const gene = this.genes.find(g => g.id === geneId);
        if (gene) {
            gene.active = false;
            gene.expressionLevel = Math.max(0, gene.expressionLevel - 0.1);
        }
    }
    
    draw(renderer, position, size) {
        const condensedSize = size * (1 - this.condensation * 0.5);
        
        // Draw chromosome shape
        const color = new Color(100, 100, 255, 0.6);
        renderer.ctx.save();
        renderer.ctx.translate(position.x, position.y);
        
        // X-shaped chromosome when condensed
        if (this.condensation > 0.5) {
            renderer.ctx.rotate(Math.PI / 4);
            renderer.drawEllipse(0, 0, condensedSize * 0.3, condensedSize, 0, color.toString(), null, 2);
            renderer.ctx.rotate(Math.PI / 2);
            renderer.drawEllipse(0, 0, condensedSize * 0.3, condensedSize, 0, color.toString(), null, 2);
        } else {
            // Relaxed chromatin
            const points = [];
            for (let i = 0; i < 20; i++) {
                const angle = (i / 20) * Math.PI * 2;
                const noise = Math.sin(i * 0.5) * 5;
                const r = condensedSize + noise;
                points.push(new Vector2D(
                    Math.cos(angle) * r,
                    Math.sin(angle) * r
                ));
            }
            renderer.drawPath(points, color.toString(), 2, true);
        }
        
        renderer.ctx.restore();
        
        // Draw active genes as bright spots
        this.genes.forEach((gene, index) => {
            if (gene.active) {
                const angle = (index / this.genes.length) * Math.PI * 2;
                const genePos = new Vector2D(
                    position.x + Math.cos(angle) * condensedSize * 0.7,
                    position.y + Math.sin(angle) * condensedSize * 0.7
                );
                renderer.drawCircle(
                    genePos.x,
                    genePos.y,
                    2,
                    `rgba(255, 255, 0, ${gene.expressionLevel})`,
                    null
                );
            }
        });
    }
}

class Nucleus {
    constructor(cellType = 'stem') {
        this.chromosomes = this.generateChromosomes(23); // Human has 23 pairs
        this.nucleolus = { size: 5, active: true };
        this.nuclearEnvelope = { intact: true, pores: 100 };
        this.chromatinState = 'euchromatin'; // or 'heterochromatin'
        this.transcriptionFactors = [];
    }
    
    generateChromosomes(pairs) {
        const chromosomes = [];
        for (let i = 0; i < pairs * 2; i++) {
            chromosomes.push(new Chromosome(i, 15));
        }
        return chromosomes;
    }
    
    activateGene(cellType) {
        // Activate genes specific to cell type
        const genePatterns = {
            neuron: ['Pax6', 'NeuroD1', 'Tubb3'],
            redBloodCell: ['GATA1', 'Hbb', 'Epo'],
            muscleCell: ['MyoD', 'Myogenin', 'Actin'],
            epithelial: ['E-cadherin', 'Keratin']
        };
        
        const patterns = genePatterns[cellType] || [];
        patterns.forEach(geneName => {
            const randomChromosome = this.chromosomes[Math.floor(Math.random() * this.chromosomes.length)];
            randomChromosome.express(randomChromosome.genes[0].id);
        });
    }
    
    draw(renderer, position, size, opacity = 1) {
        // Nuclear envelope
        const envelopeColor = new Color(150, 150, 200, opacity * 0.3);
        renderer.drawCircle(position.x, position.y, size, envelopeColor.toString(), 
                          new Color(100, 100, 180, opacity * 0.6).toString(), 2);
        
        // Nucleolus
        if (this.nucleolus.active) {
            renderer.drawCircle(
                position.x + size * 0.3,
                position.y - size * 0.2,
                this.nucleolus.size,
                new Color(80, 80, 150, opacity * 0.8).toString()
            );
        }
        
        // Chromosomes (simplified - show a few)
        const visibleChromosomes = 5;
        for (let i = 0; i < visibleChromosomes; i++) {
            const angle = (i / visibleChromosomes) * Math.PI * 2;
            const chrPos = new Vector2D(
                position.x + Math.cos(angle) * size * 0.4,
                position.y + Math.sin(angle) * size * 0.4
            );
            this.chromosomes[i].draw(renderer, chrPos, size * 0.2);
        }
        
        // Nuclear pores (simplified representation)
        if (opacity > 0.5) {
            for (let i = 0; i < 8; i++) {
                const angle = (i / 8) * Math.PI * 2;
                const porePos = new Vector2D(
                    position.x + Math.cos(angle) * size,
                    position.y + Math.sin(angle) * size
                );
                renderer.drawCircle(porePos.x, porePos.y, 1.5, 
                                  new Color(200, 200, 255, opacity * 0.6).toString());
            }
        }
    }
}

class Organelle {
    constructor(type, position, size) {
        this.type = type; // mitochondria, ribosome, golgi, ER, etc.
        this.position = position;
        this.size = size;
        this.opacity = 1;
        this.activity = 0;
    }
    
    draw(renderer, cellPosition) {
        const pos = new Vector2D(
            cellPosition.x + this.position.x,
            cellPosition.y + this.position.y
        );
        
        switch(this.type) {
            case 'mitochondria':
                this.drawMitochondria(renderer, pos);
                break;
            case 'ribosome':
                this.drawRibosome(renderer, pos);
                break;
            case 'golgi':
                this.drawGolgi(renderer, pos);
                break;
            case 'er':
                this.drawER(renderer, pos);
                break;
            case 'lysosome':
                this.drawLysosome(renderer, pos);
                break;
        }
    }
    
    drawMitochondria(renderer, pos) {
        const color = new Color(255, 150, 100, this.opacity * 0.7);
        
        // Outer membrane
        renderer.drawEllipse(pos.x, pos.y, this.size * 1.2, this.size * 0.6, 0, 
                           color.toString(), 
                           new Color(200, 100, 50, this.opacity).toString(), 1);
        
        // Cristae (inner membrane folds)
        renderer.ctx.save();
        renderer.ctx.translate(pos.x, pos.y);
        for (let i = 0; i < 4; i++) {
            const x = -this.size + i * (this.size * 0.5);
            renderer.ctx.beginPath();
            renderer.ctx.moveTo(x, -this.size * 0.3);
            renderer.ctx.quadraticCurveTo(x, 0, x, this.size * 0.3);
            renderer.ctx.strokeStyle = new Color(180, 80, 30, this.opacity * 0.6).toString();
            renderer.ctx.lineWidth = 1;
            renderer.ctx.stroke();
        }
        renderer.ctx.restore();
    }
    
    drawRibosome(renderer, pos) {
        const color = new Color(150, 150, 200, this.opacity);
        // Small and large subunit
        renderer.drawCircle(pos.x, pos.y - 1, this.size * 0.6, color.toString());
        renderer.drawCircle(pos.x, pos.y + 1, this.size * 0.8, color.toString());
    }
    
    drawGolgi(renderer, pos) {
        const color = new Color(200, 180, 100, this.opacity * 0.6);
        
        // Stacked cisternae
        renderer.ctx.save();
        renderer.ctx.translate(pos.x, pos.y);
        for (let i = 0; i < 5; i++) {
            const y = -this.size * 0.5 + i * (this.size * 0.25);
            renderer.drawEllipse(0, y, this.size, this.size * 0.2, 0, 
                               color.toString(), 
                               new Color(180, 160, 80, this.opacity).toString(), 1);
        }
        renderer.ctx.restore();
    }
    
    drawER(renderer, pos) {
        const color = new Color(150, 200, 150, this.opacity * 0.5);
        
        // Tubular network
        renderer.ctx.save();
        renderer.ctx.translate(pos.x, pos.y);
        renderer.ctx.beginPath();
        renderer.ctx.moveTo(-this.size, 0);
        for (let i = 0; i < 5; i++) {
            const x = -this.size + i * (this.size * 0.5);
            const y = Math.sin(i) * this.size * 0.3;
            renderer.ctx.lineTo(x, y);
        }
        renderer.ctx.strokeStyle = color.toString();
        renderer.ctx.lineWidth = 2;
        renderer.ctx.stroke();
        renderer.ctx.restore();
    }
    
    drawLysosome(renderer, pos) {
        const color = new Color(200, 100, 200, this.opacity * 0.7);
        renderer.drawCircle(pos.x, pos.y, this.size, color.toString(), 
                          new Color(150, 50, 150, this.opacity).toString(), 1);
        
        // Enzymes inside
        for (let i = 0; i < 3; i++) {
            const angle = (i / 3) * Math.PI * 2;
            const ex = pos.x + Math.cos(angle) * this.size * 0.4;
            const ey = pos.y + Math.sin(angle) * this.size * 0.4;
            renderer.drawCircle(ex, ey, 1, new Color(255, 150, 255, this.opacity).toString());
        }
    }
}

// ==================== CELL CLASSES ====================
class Cell {
    constructor(position, cellType = 'stem', generation = 0) {
        this.position = position;
        this.cellType = cellType;
        this.generation = generation;
        this.config = CONFIG.cellTypes[cellType] || CONFIG.cellTypes.stem;
        this.size = this.config.size;
        this.color = Color.fromHex(this.config.color);
        this.nucleus = new Nucleus(cellType);
        this.organelles = this.generateOrganelles();
        this.membrane = { integrity: 1.0, receptors: [] };
        this.cytoplasm = { density: 0.7, pH: 7.2 };
        this.differentiationProgress = 0;
        this.isDividing = false;
        this.isApoptotic = false;
        this.age = 0;
        this.velocity = new Vector2D(0, 0);
        this.opacity = 1;
        this.rotation = 0;
        this.metabolicRate = 1.0;
        this.signalResponse = [];
        this.morphology = {
            extensions: [], // dendrites, axons, etc.
            specializations: []
        };
    }
    
    generateOrganelles() {
        const organelles = [];
        
        // Mitochondria
        const mitoCount = 5 + Math.floor(Math.random() * 5);
        for (let i = 0; i < mitoCount; i++) {
            const angle = (i / mitoCount) * Math.PI * 2;
            const dist = this.size * 0.5;
            organelles.push(new Organelle(
                'mitochondria',
                new Vector2D(Math.cos(angle) * dist, Math.sin(angle) * dist),
                4
            ));
        }
        
        // Ribosomes
        const riboCount = 20;
        for (let i = 0; i < riboCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * this.size * 0.7;
            organelles.push(new Organelle(
                'ribosome',
                new Vector2D(Math.cos(angle) * dist, Math.sin(angle) * dist),
                1.5
            ));
        }
        
        // Golgi apparatus
        organelles.push(new Organelle(
            'golgi',
            new Vector2D(this.size * 0.4, -this.size * 0.3),
            8
        ));
        
        // Endoplasmic Reticulum
        organelles.push(new Organelle(
            'er',
            new Vector2D(-this.size * 0.3, this.size * 0.2),
            10
        ));
        
        // Lysosomes
        for (let i = 0; i < 3; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * this.size * 0.6;
            organelles.push(new Organelle(
                'lysosome',
                new Vector2D(Math.cos(angle) * dist, Math.sin(angle) * dist),
                3
            ));
        }
        
        return organelles;
    }
    
    differentiate(targetType, progress) {
        this.differentiationProgress = progress;
        
        // Gradually change to target cell type
        const targetConfig = CONFIG.cellTypes[targetType];
        if (!targetConfig) return;
        
        const targetColor = Color.fromHex(targetConfig.color);
        const targetSize = targetConfig.size;
        
        // Morph color
        this.color = this.color.lerp(targetColor, progress);
        
        // Morph size
        this.size = this.config.size + (targetSize - this.config.size) * progress;
        
        // Activate specific genes
        this.nucleus.activateGene(targetType);
        
        // Develop specialized structures
        if (progress > 0.7) {
            this.developSpecializations(targetType);
        }
        
        // Complete differentiation
        if (progress >= 1.0) {
            this.cellType = targetType;
            this.config = targetConfig;
            this.differentiationProgress = 0;
        }
    }
    
    developSpecializations(targetType) {
        switch(targetType) {
            case 'neuron':
                this.developDendrites();
                this.developAxon();
                break;
            case 'muscleCell':
                this.developMyofibrils();
                break;
            case 'epithelial':
                this.developMicrovilli();
                break;
        }
    }
    
    developDendrites() {
        if (this.morphology.extensions.length < 5) {
            const dendriteCount = 5;
            for (let i = 0; i < dendriteCount; i++) {
                const angle = (i / dendriteCount) * Math.PI * 2;
                const length = 30 + Math.random() * 20;
                this.morphology.extensions.push({
                    type: 'dendrite',
                    angle: angle,
                    length: length,
                    branches: Math.floor(Math.random() * 3)
                });
            }
        }
    }
    
    developAxon() {
        if (!this.morphology.extensions.find(e => e.type === 'axon')) {
            this.morphology.extensions.push({
                type: 'axon',
                angle: Math.PI,
                length: 80,
                myelinated: true
            });
        }
    }
    
    developMyofibrils() {
        this.morphology.specializations.push({
            type: 'myofibril',
            count: 10,
            striation: true
        });
    }
    
    developMicrovilli() {
        this.morphology.specializations.push({
            type: 'microvilli',
            count: 50,
            length: 5
        });
    }
    
    divide() {
        this.isDividing = true;
        const daughter1 = new Cell(
            this.position.add(new Vector2D(-10, 0)),
            this.cellType,
            this.generation + 1
        );
        const daughter2 = new Cell(
            this.position.add(new Vector2D(10, 0)),
            this.cellType,
            this.generation + 1
        );
        
        setTimeout(() => {
            this.isDividing = false;
        }, 1000);
        
        return [daughter1, daughter2];
    }
    
    receiveSignal(signal) {
        this.signalResponse.push(signal);
        // Process signal and potentially trigger differentiation
        if (signal.type === 'growth_factor' && this.cellType === 'stem') {
            // Begin differentiation pathway
        }
    }
    
    update(deltaTime) {
        this.age += deltaTime;
        
        // Update position based on velocity
        this.position = this.position.add(this.velocity.multiply(deltaTime * 0.001));
        
        // Dampen velocity
        this.velocity = this.velocity.multiply(0.95);
        
        // Update organelles
        this.organelles.forEach(org => {
            org.activity = Math.sin(this.age * 0.001) * 0.5 + 0.5;
        });
        
        // Process signals
        this.signalResponse = this.signalResponse.filter(signal => {
            signal.lifetime -= deltaTime;
            return signal.lifetime > 0;
        });
    }
    
    draw(renderer) {
        if (this.opacity <= 0) return;
        
        renderer.ctx.save();
        renderer.ctx.globalAlpha = this.opacity;
        renderer.ctx.translate(this.position.x, this.position.y);
        renderer.ctx.rotate(this.rotation);
        
        // Draw cell based on type
        switch(this.config.shape) {
            case 'round':
                this.drawRoundCell(renderer);
                break;
            case 'star':
                this.drawStarCell(renderer);
                break;
            case 'elongated':
                this.drawElongatedCell(renderer);
                break;
            case 'biconcave':
                this.drawBiconcaveCell(renderer);
                break;
            case 'irregular':
                this.drawIrregularCell(renderer);
                break;
            case 'cuboidal':
                this.drawCuboidalCell(renderer);
                break;
            case 'fat':
                this.drawFatCell(renderer);
                break;
            default:
                this.drawRoundCell(renderer);
        }
        
        renderer.ctx.restore();
        
        // Draw label if enabled
        if (window.showLabels && this.opacity > 0.5) {
            renderer.drawText(
                this.cellType,
                this.position.x,
                this.position.y - this.size - 10,
                '11px Arial',
                this.color.toString(),
                'center'
            );
        }
    }
    
    drawRoundCell(renderer) {
        // Cell membrane
        renderer.drawGradientCircle(0, 0, this.size, [
            { offset: 0, color: this.color.lerp(new Color(255, 255, 255), 0.3).toString() },
            { offset: 0.7, color: this.color.toString() },
            { offset: 1, color: this.color.lerp(new Color(0, 0, 0), 0.3).toString() }
        ]);
        
        // Cytoplasm texture
        for (let i = 0; i < 5; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * this.size * 0.7;
            renderer.drawCircle(
                Math.cos(angle) * dist,
                Math.sin(angle) * dist,
                1,
                `rgba(255, 255, 255, ${0.2 * this.opacity})`
            );
        }
        
        // Organelles
        this.organelles.forEach(org => {
            org.opacity = this.opacity;
            org.draw(renderer, new Vector2D(0, 0));
        });
        
        // Nucleus
        this.nucleus.draw(renderer, new Vector2D(0, 0), this.size * 0.4, this.opacity);
        
        // Cell membrane outline
        renderer.drawCircle(0, 0, this.size, null, 
                          this.color.lerp(new Color(255, 255, 255), 0.5).toString(), 2);
    }
    
    drawStarCell(renderer) {
        // Neuron shape
        this.drawRoundCell(renderer);
        
        // Draw dendrites
        this.morphology.extensions.forEach(ext => {
            if (ext.type === 'dendrite') {
                this.drawDendrite(renderer, ext);
            } else if (ext.type === 'axon') {
                this.drawAxon(renderer, ext);
            }
        });
    }
    
    drawDendrite(renderer, dendrite) {
        renderer.ctx.save();
        renderer.ctx.rotate(dendrite.angle);
        
        // Main dendrite
        renderer.ctx.beginPath();
        renderer.ctx.moveTo(this.size, 0);
        renderer.ctx.lineTo(this.size + dendrite.length, 0);
        renderer.ctx.strokeStyle = this.color.toString();
        renderer.ctx.lineWidth = 2;
        renderer.ctx.stroke();
        
        // Branches
        for (let i = 0; i < dendrite.branches; i++) {
            const branchDist = dendrite.length * (i + 1) / (dendrite.branches + 1);
            const branchAngle = (i % 2 === 0 ? 1 : -1) * Math.PI / 6;
            const branchLength = dendrite.length * 0.4;
            
            renderer.ctx.beginPath();
            renderer.ctx.moveTo(this.size + branchDist, 0);
            renderer.ctx.lineTo(
                this.size + branchDist + Math.cos(branchAngle) * branchLength,
                Math.sin(branchAngle) * branchLength
            );
            renderer.ctx.strokeStyle = this.color.toString();
            renderer.ctx.lineWidth = 1.5;
            renderer.ctx.stroke();
        }
        
        renderer.ctx.restore();
    }
    
    drawAxon(renderer, axon) {
        renderer.ctx.save();
        renderer.ctx.rotate(axon.angle);
        
        // Axon shaft
        renderer.ctx.beginPath();
        renderer.ctx.moveTo(this.size, 0);
        renderer.ctx.lineTo(this.size + axon.length, 0);
        renderer.ctx.strokeStyle = this.color.toString();
        renderer.ctx.lineWidth = 3;
        renderer.ctx.stroke();
        
        // Myelin sheaths
        if (axon.myelinated) {
            for (let i = 0; i < 5; i++) {
                const segmentStart = this.size + i * (axon.length / 5);
                const segmentLength = axon.length / 5 * 0.7;
                
                renderer.ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
                renderer.ctx.fillRect(segmentStart, -2, segmentLength, 4);
            }
        }
        
        // Axon terminal
        renderer.drawCircle(this.size + axon.length, 0, 4, this.color.toString());
        
        renderer.ctx.restore();
    }
    
    drawElongatedCell(renderer) {
        // Muscle cell
        const length = this.size * 1.5;
        const width = this.size * 0.6;
        
        renderer.drawEllipse(0, 0, length, width, 0, this.color.toString(), 
                           this.color.lerp(new Color(255, 255, 255), 0.5).toString(), 2);
        
        // Myofibrils (striations)
        const myofibrils = this.morphology.specializations.find(s => s.type === 'myofibril');
        if (myofibrils && myofibrils.striation) {
            for (let i = 0; i < 10; i++) {
                const x = -length + i * (length * 2 / 10);
                renderer.ctx.beginPath();
                renderer.ctx.moveTo(x, -width);
                renderer.ctx.lineTo(x, width);
                renderer.ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
                renderer.ctx.lineWidth = 1;
                renderer.ctx.stroke();
            }
        }
        
        // Multiple nuclei
        for (let i = 0; i < 3; i++) {
            const nx = -length * 0.5 + i * (length * 0.5);
            this.nucleus.draw(renderer, new Vector2D(nx, 0), width * 0.3, this.opacity);
        }
    }
    
    drawBiconcaveCell(renderer) {
        // Red blood cell - biconcave disk
        const color = this.color;
        
        // Top curve
        renderer.ctx.beginPath();
        renderer.ctx.ellipse(0, -2, this.size, this.size * 0.3, 0, 0, Math.PI * 2);
        renderer.ctx.fillStyle = color.toString();
        renderer.ctx.fill();
        
        // Bottom curve
        renderer.ctx.beginPath();
        renderer.ctx.ellipse(0, 2, this.size, this.size * 0.3, 0, 0, Math.PI * 2);
        renderer.ctx.fillStyle = color.lerp(new Color(0, 0, 0), 0.2).toString();
        renderer.ctx.fill();
        
        // Central depression
        renderer.ctx.beginPath();
        renderer.ctx.ellipse(0, 0, this.size * 0.5, this.size * 0.2, 0, 0, Math.PI * 2);
        renderer.ctx.fillStyle = color.lerp(new Color(0, 0, 0), 0.4).toString();
        renderer.ctx.fill();
        
        // Outline
        renderer.drawCircle(0, 0, this.size, null, 
                          color.lerp(new Color(255, 255, 255), 0.3).toString(), 1.5);
    }
    
    drawIrregularCell(renderer) {
        // White blood cell - irregular shape with pseudopods
        const points = [];
        const segments = 16;
        
        for (let i = 0; i < segments; i++) {
            const angle = (i / segments) * Math.PI * 2;
            const noise = Math.random() * this.size * 0.3;
            const r = this.size + noise;
            points.push(new Vector2D(Math.cos(angle) * r, Math.sin(angle) * r));
        }
        
        renderer.fillPolygon(points, this.color.toString());
        renderer.drawPath(points, this.color.lerp(new Color(255, 255, 255), 0.5).toString(), 2, true);
        
        // Lobed nucleus
        for (let i = 0; i < 3; i++) {
            const angle = (i / 3) * Math.PI * 2;
            const nx = Math.cos(angle) * this.size * 0.3;
            const ny = Math.sin(angle) * this.size * 0.3;
            renderer.drawCircle(nx, ny, this.size * 0.25, 
                              'rgba(100, 100, 180, 0.6)', 
                              'rgba(80, 80, 150, 0.8)', 1);
        }
        
        // Granules
        for (let i = 0; i < 10; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * this.size * 0.6;
            renderer.drawCircle(
                Math.cos(angle) * dist,
                Math.sin(angle) * dist,
                2,
                'rgba(255, 200, 100, 0.7)'
            );
        }
    }
    
    drawCuboidalCell(renderer) {
        // Epithelial cell - cuboidal shape
        const sideLength = this.size * 0.8;
        
        const points = [
            new Vector2D(-sideLength, -sideLength),
            new Vector2D(sideLength, -sideLength),
            new Vector2D(sideLength, sideLength),
            new Vector2D(-sideLength, sideLength)
        ];
        
        renderer.fillPolygon(points, this.color.toString());
        renderer.drawPath(points, this.color.lerp(new Color(255, 255, 255), 0.5).toString(), 2, true);
        
        // Microvilli on apical surface
        const microvilli = this.morphology.specializations.find(s => s.type === 'microvilli');
        if (microvilli) {
            for (let i = 0; i < 10; i++) {
                const x = -sideLength + i * (sideLength * 2 / 10);
                renderer.ctx.beginPath();
                renderer.ctx.moveTo(x, -sideLength);
                renderer.ctx.lineTo(x, -sideLength - microvilli.length);
                renderer.ctx.strokeStyle = this.color.toString();
                renderer.ctx.lineWidth = 1;
                renderer.ctx.stroke();
            }
        }
        
        // Nucleus
        this.nucleus.draw(renderer, new Vector2D(0, sideLength * 0.3), sideLength * 0.4, this.opacity);
        
        // Tight junctions (cell adhesion)
        renderer.ctx.beginPath();
        renderer.ctx.moveTo(sideLength, -sideLength);
        renderer.ctx.lineTo(sideLength + 5, -sideLength);
        renderer.ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        renderer.ctx.lineWidth = 2;
        renderer.ctx.stroke();
    }
    
    drawFatCell(renderer) {
        // Adipocyte - large lipid droplet
        
        // Large lipid droplet
        renderer.drawGradientCircle(0, 0, this.size, [
            { offset: 0, color: this.color.lerp(new Color(255, 255, 255), 0.5).toString() },
            { offset: 0.5, color: this.color.toString() },
            { offset: 1, color: this.color.lerp(new Color(200, 150, 0), 0.3).toString() }
        ]);
        
        // Thin rim of cytoplasm
        renderer.drawCircle(0, 0, this.size, null, 
                          this.color.lerp(new Color(0, 0, 0), 0.3).toString(), 3);
        
        // Peripheral nucleus
        this.nucleus.draw(renderer, new Vector2D(this.size * 0.7, 0), this.size * 0.2, this.opacity);
        
        // Small organelles at periphery
        for (let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2;
            const ox = Math.cos(angle) * this.size * 0.75;
            const oy = Math.sin(angle) * this.size * 0.75;
            renderer.drawCircle(ox, oy, 2, 'rgba(200, 150, 100, 0.6)');
        }
    }
}

// ==================== SIGNALING MOLECULES ====================
class SignalMolecule {
    constructor(position, type, target = null) {
        this.position = position;
        this.type = type; // 'growth_factor', 'cytokine', 'hormone', 'transcription_factor'
        this.target = target;
        this.velocity = new Vector2D(
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
        );
        this.lifetime = 5000 + Math.random() * 3000;
        this.isActive = true;
        this.size = 3;
        this.opacity = 1;
    }
    
    getColor() {
        switch(this.type) {
            case 'growth_factor':
                return new Color(247, 37, 133, this.opacity);
            case 'cytokine':
                return new Color(58, 134, 255, this.opacity);
            case 'hormone':
                return new Color(138, 201, 38, this.opacity);
            case 'transcription_factor':
                return new Color(114, 9, 183, this.opacity);
            default:
                return new Color(255, 255, 255, this.opacity);
        }
    }
    
    update(deltaTime, cells) {
        if (!this.isActive) return;
        
        this.lifetime -= deltaTime;
        if (this.lifetime <= 0) {
            this.isActive = false;
            return;
        }
        
        // Move toward target cell if exists
        if (this.target && cells.includes(this.target)) {
            const direction = this.target.position.subtract(this.position).normalize();
            this.velocity = this.velocity.add(direction.multiply(0.5));
            
            // Check collision with target
            if (this.position.distance(this.target.position) < this.target.size) {
                this.target.receiveSignal(this);
                this.isActive = false;
                return;
            }
        }
        
        // Update position
        this.position = this.position.add(this.velocity.multiply(deltaTime * 0.001));
        
        // Dampen velocity
        this.velocity = this.velocity.multiply(0.98);
        
        // Fade out near end of lifetime
        if (this.lifetime < 1000) {
            this.opacity = this.lifetime / 1000;
        }
    }
    
    draw(renderer) {
        if (!this.isActive || this.opacity <= 0) return;
        
        const color = this.getColor();
        
        // Draw signal molecule with glow
        renderer.drawGradientCircle(
            this.position.x,
            this.position.y,
            this.size * 2,
            [
                { offset: 0, color: color.lerp(new Color(255, 255, 255), 0.5).toString() },
                { offset: 0.5, color: color.toString() },
                { offset: 1, color: `rgba(${color.r}, ${color.g}, ${color.b}, 0)` }
            ]
        );
        
        // Core
        renderer.drawCircle(
            this.position.x,
            this.position.y,
            this.size,
            color.toString()
        );
        
        // Trail effect
        const trailLength = 3;
        for (let i = 1; i <= trailLength; i++) {
            const trailPos = this.position.subtract(this.velocity.multiply(i * 2));
            const trailOpacity = this.opacity * (1 - i / trailLength);
            const trailColor = new Color(color.r, color.g, color.b, trailOpacity);
            renderer.drawCircle(
                trailPos.x,
                trailPos.y,
                this.size * (1 - i / trailLength * 0.5),
                trailColor.toString()
            );
        }
    }
}

// ==================== DIFFERENTIATION PATHWAYS ====================
class DifferentiationPathway {
    constructor(name, startType, endType, intermediateStages = []) {
        this.name = name;
        this.startType = startType;
        this.endType = endType;
        this.intermediateStages = intermediateStages;
        this.requiredSignals = this.defineRequiredSignals();
        this.timeRequired = 5000; // ms
        this.isActive = false;
    }
    
    defineRequiredSignals() {
        const pathwaySignals = {
            'stem_to_neuron': ['growth_factor', 'transcription_factor'],
            'stem_to_blood': ['cytokine', 'growth_factor'],
            'stem_to_muscle': ['growth_factor', 'hormone'],
            'stem_to_epithelial': ['growth_factor']
        };
        
        return pathwaySignals[`${this.startType}_to_${this.endType}`] || ['growth_factor'];
    }
    
    canInitiate(cell, receivedSignals) {
        if (cell.cellType !== this.startType) return false;
        
        // Check if all required signals are present
        return this.requiredSignals.every(required =>
            receivedSignals.some(signal => signal.type === required)
        );
    }
}

// ==================== DIFFERENTIATION SYSTEM ====================
class DifferentiationSystem {
    constructor() {
        this.cells = [];
        this.signals = [];
        this.pathways = this.createPathways();
        this.activeDifferentiations = new Map();
    }
    
    createPathways() {
        return [
            new DifferentiationPathway('neurogenesis', 'stem', 'neuron', ['progenitor']),
            new DifferentiationPathway('hematopoiesis_red', 'stem', 'redBloodCell', ['myeloid_progenitor']),
            new DifferentiationPathway('hematopoiesis_white', 'stem', 'whiteBloodCell', ['myeloid_progenitor']),
            new DifferentiationPathway('myogenesis', 'stem', 'muscleCell', ['myoblast']),
            new DifferentiationPathway('epitheliogenesis', 'stem', 'epithelial'),
            new DifferentiationPathway('osteogenesis', 'stem', 'osteoblast', ['mesenchymal']),
            new DifferentiationPathway('adipogenesis', 'stem', 'adipocyte', ['preadipocyte'])
        ];
    }
    
    addCell(cell) {
        this.cells.push(cell);
    }
    
    removeCell(cell) {
        const index = this.cells.indexOf(cell);
        if (index > -1) {
            this.cells.splice(index, 1);
        }
    }
    
    addSignal(signal) {
        this.signals.push(signal);
    }
    
    initiateRandomDifferentiations() {
        const stemCells = this.cells.filter(c => c.cellType === 'stem');
        
        stemCells.forEach(cell => {
            if (Math.random() < 0.01 && !this.activeDifferentiations.has(cell)) {
                const availablePathways = this.pathways.filter(p => p.startType === cell.cellType);
                if (availablePathways.length > 0) {
                    const pathway = availablePathways[Math.floor(Math.random() * availablePathways.length)];
                    
                    this.activeDifferentiations.set(cell, {
                        pathway: pathway,
                        progress: 0,
                        startTime: performance.now()
                    });
                }
            }
        });
    }
    
    update(deltaTime) {
        // Update cells
        this.cells.forEach(cell => cell.update(deltaTime));
        
        // Update signals
        this.signals.forEach(signal => signal.update(deltaTime, this.cells));
        this.signals = this.signals.filter(s => s.isActive);
        
        // Update active differentiations
        this.activeDifferentiations.forEach((diff, cell) => {
            diff.progress += deltaTime / diff.pathway.timeRequired;
            
            if (diff.progress >= 1.0) {
                cell.differentiate(diff.pathway.endType, 1.0);
                this.activeDifferentiations.delete(cell);
            } else {
                cell.differentiate(diff.pathway.endType, diff.progress);
            }
        });
        
        // Randomly initiate new differentiations
        if (Math.random() < 0.1) {
            this.initiateRandomDifferentiations();
        }
    }
    
    draw(mainRenderer, particleRenderer) {
        // Draw cells on main canvas
        this.cells.forEach(cell => cell.draw(mainRenderer));
        
        // Draw signals on particle canvas
        this.signals.forEach(signal => signal.draw(particleRenderer));
    }
    
    spawnStemCells(count, centerPosition, radius) {
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const dist = Math.random() * radius;
            const pos = new Vector2D(
                centerPosition.x + Math.cos(angle) * dist,
                centerPosition.y + Math.sin(angle) * dist
            );
            
            const cell = new Cell(pos, 'stem', 0);
            this.addCell(cell);
        }
    }
    
    spawnSignals(count, type = null) {
        for (let i = 0; i < count; i++) {
            const randomCell = this.cells[Math.floor(Math.random() * this.cells.length)];
            if (randomCell) {
                const signalType = type || ['growth_factor', 'cytokine', 'hormone'][Math.floor(Math.random() * 3)];
                const signal = new SignalMolecule(
                    randomCell.position.add(new Vector2D(
                        (Math.random() - 0.5) * 100,
                        (Math.random() - 0.5) * 100
                    )),
                    signalType,
                    randomCell
                );
                this.addSignal(signal);
            }
        }
    }
    
    getCellTypeCounts() {
        const counts = {};
        this.cells.forEach(cell => {
            counts[cell.cellType] = (counts[cell.cellType] || 0) + 1;
        });
        return counts;
    }
    
    getDifferentiationRate() {
        return (this.activeDifferentiations.size / Math.max(1, this.cells.length)) * 100;
    }
}

// ==================== SCENE MANAGER ====================
class SceneManager {
    constructor(differentiationSystem) {
        this.system = differentiationSystem;
        this.currentScene = 0;
        this.scenes = this.defineScenes();
    }
    
    defineScenes() {
        return [
            {
                name: 'Introduction',
                scrollStart: 0,
                scrollEnd: 400,
                onEnter: () => this.sceneIntro(),
                onUpdate: (progress) => this.updateIntro(progress)
            },
            {
                name: 'Stem Cell Appears',
                scrollStart: 400,
                scrollEnd: 900,
                onEnter: () => this.sceneStemCellAppears(),
                onUpdate: (progress) => this.updateStemCellAppears(progress)
            },
            {
                name: 'Cell Structure',
                scrollStart: 900,
                scrollEnd: 1400,
                onEnter: () => this.sceneCellStructure(),
                onUpdate: (progress) => this.updateCellStructure(progress)
            },
            {
                name: 'Nucleus and DNA',
                scrollStart: 1400,
                scrollEnd: 1900,
                onEnter: () => this.sceneNucleusAndDNA(),
                onUpdate: (progress) => this.updateNucleusAndDNA(progress)
            },
            {
                name: 'Signaling Molecules',
                scrollStart: 1900,
                scrollEnd: 2400,
                onEnter: () => this.sceneSignalingMolecules(),
                onUpdate: (progress) => this.updateSignalingMolecules(progress)
            },
            {
                name: 'Gene Expression',
                scrollStart: 2400,
                scrollEnd: 2900,
                onEnter: () => this.sceneGeneExpression(),
                onUpdate: (progress) => this.updateGeneExpression(progress)
            },
            {
                name: 'Blood Cell Lineage',
                scrollStart: 2900,
                scrollEnd: 3500,
                onEnter: () => this.sceneBloodCells(),
                onUpdate: (progress) => this.updateBloodCells(progress)
            },
            {
                name: 'Neural Differentiation',
                scrollStart: 3500,
                scrollEnd: 4100,
                onEnter: () => this.sceneNeuralDiff(),
                onUpdate: (progress) => this.updateNeuralDiff(progress)
            },
            {
                name: 'Muscle Development',
                scrollStart: 4100,
                scrollEnd: 4700,
                onEnter: () => this.sceneMuscleDiff(),
                onUpdate: (progress) => this.updateMuscleDiff(progress)
            },
            {
                name: 'Epithelial Formation',
                scrollStart: 4700,
                scrollEnd: 5300,
                onEnter: () => this.sceneEpithelialDiff(),
                onUpdate: (progress) => this.updateEpithelialDiff(progress)
            },
            {
                name: 'Specialized Cells',
                scrollStart: 5300,
                scrollEnd: 5900,
                onEnter: () => this.sceneSpecializedCells(),
                onUpdate: (progress) => this.updateSpecializedCells(progress)
            },
            {
                name: 'Tissue Formation',
                scrollStart: 5900,
                scrollEnd: 6500,
                onEnter: () => this.sceneTissueFormation(),
                onUpdate: (progress) => this.updateTissueFormation(progress)
            },
            {
                name: 'Cell Communication',
                scrollStart: 6500,
                scrollEnd: 7100,
                onEnter: () => this.sceneCellCommunication(),
                onUpdate: (progress) => this.updateCellCommunication(progress)
            },
            {
                name: 'Complete System',
                scrollStart: 7100,
                scrollEnd: 8000,
                onEnter: () => this.sceneCompleteSystem(),
                onUpdate: (progress) => this.updateCompleteSystem(progress)
            }
        ];
    }
    
    // Scene implementations
    sceneIntro() {
        document.getElementById('text').innerHTML = "Journey through cell differentiation - from one cell to many types...";
    }
    
    updateIntro(progress) {
        // Fade in effect
    }
    
    sceneStemCellAppears() {
        document.getElementById('text').innerHTML = "The Stem Cell - Unlimited Potential 🧬";
        document.getElementById('info-stem').classList.add('visible');
        
        // Spawn initial stem cell
        if (this.system.cells.length === 0) {
            this.system.spawnStemCells(1, new Vector2D(CONFIG.stem.centerX, CONFIG.stem.centerY), 0);
        }
    }
    
    updateStemCellAppears(progress) {
        if (this.system.cells.length > 0) {
            this.system.cells[0].opacity = progress;
        }
    }
    
    sceneCellStructure() {
        document.getElementById('text').innerHTML = "Inside the cell: Organelles working together";
    }
    
    updateCellStructure(progress) {
        // Highlight organelles
        if (this.system.cells.length > 0) {
            const cell = this.system.cells[0];
            cell.organelles.forEach((org, index) => {
                const orgProgress = Math.max(0, (progress - index * 0.1) * 2);
                org.opacity = orgProgress;
            });
        }
    }
    
    sceneNucleusAndDNA() {
        document.getElementById('text').innerHTML = "The Nucleus - Control center with DNA blueprints";
    }
    
    updateNucleusAndDNA(progress) {
        // Zoom into nucleus, show chromosomes
        if (this.system.cells.length > 0) {
            const cell = this.system.cells[0];
            // Animate chromosome condensation
            cell.nucleus.chromosomes.forEach(chr => {
                chr.condensation = Math.sin(progress * Math.PI) * 0.5;
            });
        }
    }
    
    sceneSignalingMolecules() {
        document.getElementById('text').innerHTML = "Signaling molecules trigger differentiation";
        document.getElementById('info-signals').classList.add('visible');
        
        // Spawn signaling molecules
        if (this.system.signals.length < 10) {
            this.system.spawnSignals(10);
        }
    }
    
    updateSignalingMolecules(progress) {
        // Continue spawning signals
        if (progress > 0.3 && Math.random() < 0.1) {
            this.system.spawnSignals(2);
        }
    }
    
    sceneGeneExpression() {
        document.getElementById('text').innerHTML = "Gene expression activates - the cell's fate is determined";
        document.getElementById('info-stats').classList.add('visible');
    }
    
    updateGeneExpression(progress) {
        if (this.system.cells.length > 0) {
            const cell = this.system.cells[0];
            // Activate genes progressively
            cell.nucleus.chromosomes.forEach(chr => {
                chr.genes.forEach((gene, index) => {
                    if (progress > index / chr.genes.length) {
                        gene.active = true;
                        gene.expressionLevel = Math.min(1, gene.expressionLevel + 0.05);
                    }
                });
            });
        }
    }
    
    sceneBloodCells() {
        document.getElementById('text').innerHTML = "Hematopoiesis - Formation of blood cells";
        document.getElementById('info-cell-types').classList.add('visible');
        
        // Create blood cell lineage
        if (!this.bloodLineageCreated) {
            this.system.spawnStemCells(3, new Vector2D(CONFIG.stem.centerX - 100, CONFIG.stem.centerY), 50);
            this.bloodLineageCreated = true;
        }
    }
    
    updateBloodCells(progress) {
        // Differentiate into red and white blood cells
        const stemCells = this.system.cells.filter(c => c.cellType === 'stem');
        stemCells.forEach((cell, index) => {
            if (index === 0) {
                cell.differentiate('redBloodCell', progress);
            } else if (index === 1) {
                cell.differentiate('whiteBloodCell', progress);
            }
        });
    }
    
    sceneNeuralDiff() {
        document.getElementById('text').innerHTML = "Neurogenesis - Neural cells developing dendrites and axons";
        
        if (!this.neuralLineageCreated) {
            this.system.spawnStemCells(2, new Vector2D(CONFIG.stem.centerX + 100, CONFIG.stem.centerY - 100), 30);
            this.neuralLineageCreated = true;
        }
    }
    
    updateNeuralDiff(progress) {
        const recentCells = this.system.cells.slice(-2);
        recentCells.forEach(cell => {
            if (cell.cellType === 'stem' || cell.cellType === 'neuron') {
                cell.differentiate('neuron', progress);
            }
        });
    }
    
    sceneMuscleDiff() {
        document.getElementById('text').innerHTML = "Myogenesis - Muscle fibers with contractile proteins";
        
        if (!this.muscleLineageCreated) {
            this.system.spawnStemCells(2, new Vector2D(CONFIG.stem.centerX - 100, CONFIG.stem.centerY + 100), 30);
            this.muscleLineageCreated = true;
        }
    }
    
    updateMuscleDiff(progress) {
        const recentCells = this.system.cells.slice(-2);
        recentCells.forEach(cell => {
            if (cell.cellType === 'stem' || cell.cellType === 'muscleCell') {
                cell.differentiate('muscleCell', progress);
            }
        });
    }
    
    sceneEpithelialDiff() {
        document.getElementById('text').innerHTML = "Epithelial cells forming protective barriers";
        
        if (!this.epithelialLineageCreated) {
            this.system.spawnStemCells(3, new Vector2D(CONFIG.stem.centerX + 100, CONFIG.stem.centerY + 100), 40);
            this.epithelialLineageCreated = true;
        }
    }
    
    updateEpithelialDiff(progress) {
        const recentCells = this.system.cells.slice(-3);
        recentCells.forEach(cell => {
            if (cell.cellType === 'stem' || cell.cellType === 'epithelial') {
                cell.differentiate('epithelial', progress);
            }
        });
    }
    
    sceneSpecializedCells() {
        document.getElementById('text').innerHTML = "Specialized cells: Bone builders and fat storage";
        
        if (!this.specializedCreated) {
            this.system.spawnStemCells(2, new Vector2D(CONFIG.stem.centerX - 150, CONFIG.stem.centerY - 50), 20);
            this.specializedCreated = true;
        }
    }
    
    updateSpecializedCells(progress) {
        const recentCells = this.system.cells.slice(-2);
        if (recentCells[0]) {
            recentCells[0].differentiate('osteoblast', progress);
        }
        if (recentCells[1]) {
            recentCells[1].differentiate('adipocyte', progress);
        }
    }
    
    sceneTissueFormation() {
        document.getElementById('text').innerHTML = "Cells organize into functional tissues";
    }
    
    updateTissueFormation(progress) {
        // Arrange cells into tissue-like patterns
        const epithelialCells = this.system.cells.filter(c => c.cellType === 'epithelial');
        epithelialCells.forEach((cell, index) => {
            const targetX = CONFIG.stem.centerX + index * 40 - 60;
            const targetY = CONFIG.stem.centerY + 150;
            const targetPos = new Vector2D(targetX, targetY);
            const direction = targetPos.subtract(cell.position).multiply(progress * 0.1);
            cell.velocity = direction;
        });
    }
    
    sceneCellCommunication() {
        document.getElementById('text').innerHTML = "Cells communicate through chemical signals";
        
        // Increase signal density
        if (Math.random() < 0.3) {
            this.system.spawnSignals(5);
        }
    }
    
    updateCellCommunication(progress) {
        // Create signal network
        this.system.cells.forEach(cell => {
            if (Math.random() < 0.05) {
                const nearestCell = this.findNearestCell(cell);
                if (nearestCell) {
                    const signal = new SignalMolecule(
                        cell.position,
                        'cytokine',
                        nearestCell
                    );
                    this.system.addSignal(signal);
                }
            }
        });
    }
    
    findNearestCell(cell) {
        let nearest = null;
        let minDist = Infinity;
        
        this.system.cells.forEach(other => {
            if (other !== cell) {
                const dist = cell.position.distance(other.position);
                if (dist < minDist) {
                    minDist = dist;
                    nearest = other;
                }
            }
        });
        
        return nearest;
    }
    
    sceneCompleteSystem() {
        document.getElementById('text').innerHTML = "Complete Cell Differentiation System 🧬";
        document.getElementById('text').style.fontSize = "22px";
        document.getElementById('text').style.background = "rgba(78, 205, 196, 0.3)";
        
        // Show all controls
        document.getElementById('control-panel').style.display = 'block';
        document.getElementById('path-selector').style.display = 'block';
        document.getElementById('info-panels').style.display = 'block';
        
        // Enable continuous differentiation
        this.system.initiateRandomDifferentiations();
    }
    
    updateCompleteSystem(progress) {
        // Continue spawning signals
        if (Math.random() < 0.15) {
            this.system.spawnSignals(3);
        }
        
        // Occasional cell division
        if (Math.random() < 0.01) {
            const randomCell = this.system.cells[Math.floor(Math.random() * this.system.cells.length)];
            if (randomCell && randomCell.cellType === 'stem' && !randomCell.isDividing) {
                const daughters = randomCell.divide();
                daughters.forEach(d => this.system.addCell(d));
            }
        }
    }
    
    update(scrollPosition) {
        const activeScene = this.scenes.find(scene =>
            scrollPosition >= scene.scrollStart && scrollPosition < scene.scrollEnd
        );
        
        if (!activeScene) return;
        
        if (this.currentScene !== activeScene) {
            if (activeScene.onEnter) {
                activeScene.onEnter();
            }
            this.currentScene = activeScene;
        }
        
        if (activeScene.onUpdate) {
            const progress = (scrollPosition - activeScene.scrollStart) /
                           (activeScene.scrollEnd - activeScene.scrollStart);
            activeScene.onUpdate(Math.max(0, Math.min(1, progress)));
        }
    }
    
    cleanup() {
        // Clean up any intervals or timeouts
        this.bloodLineageCreated = false;
        this.neuralLineageCreated = false;
        this.muscleLineageCreated = false;
        this.epithelialLineageCreated = false;
        this.specializedCreated = false;
    }
}

// ==================== MAIN APPLICATION ====================
class CellDifferentiationApp {
    constructor() {
        this.mainRenderer = null;
        this.particleRenderer = null;
        this.system = null;
        this.sceneManager = null;
        this.lastTime = 0;
        this.isRunning = false;
        this.isPaused = false;
        this.showLabels = true;
        
        window.showLabels = this.showLabels;
    }
    
    initialize() {
        // Setup canvases
        this.mainRenderer = new CanvasRenderer('mainCanvas', CONFIG.canvas.width, CONFIG.canvas.height);
        this.particleRenderer = new CanvasRenderer('particleCanvas', CONFIG.canvas.width, CONFIG.canvas.height);
        
        // Create differentiation system
        this.system = new DifferentiationSystem();
        
        // Create scene manager
        this.sceneManager = new SceneManager(this.system);
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Start animation loop
        this.isRunning = true;
        this.lastTime = performance.now();
        this.animate();
        
        console.log('Cell Differentiation System initialized successfully!');
    }
    
    setupEventListeners() {
        // Toggle labels
        const toggleLabelsBtn = document.getElementById('toggle-labels');
        if (toggleLabelsBtn) {
            toggleLabelsBtn.addEventListener('click', () => {
                this.showLabels = !this.showLabels;
                window.showLabels = this.showLabels;
                toggleLabelsBtn.textContent = this.showLabels ? 'Hide Labels' : 'Show Labels';
            });
        }
        
        // Toggle animation
        const toggleAnimBtn = document.getElementById('toggle-animation');
        if (toggleAnimBtn) {
            toggleAnimBtn.addEventListener('click', () => {
                this.isPaused = !this.isPaused;
                toggleAnimBtn.textContent = this.isPaused ? 'Resume Animation' : 'Pause Animation';
            });
        }
        
        // Differentiation path selector
        const pathSelect = document.getElementById('diff-path');
        if (pathSelect) {
            pathSelect.addEventListener('change', (e) => {
                this.handlePathSelection(e.target.value);
            });
        }
    }
    
    handlePathSelection(path) {
        const text = document.getElementById('text');
        
        switch(path) {
            case 'blood':
                text.innerHTML = "📍 Focused on Blood Cell Development (Hematopoiesis)";
                break;
            case 'neural':
                text.innerHTML = "📍 Focused on Neural Cell Development (Neurogenesis)";
                break;
            case 'muscle':
                text.innerHTML = "📍 Focused on Muscle Cell Development (Myogenesis)";
                break;
            case 'epithelial':
                text.innerHTML = "📍 Focused on Epithelial Cell Development";
                break;
            default:
                text.innerHTML = "📍 Showing All Cell Lineages";
        }
    }
    
    animate() {
        if (!this.isRunning) return;
        
        const currentTime = performance.now();
        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;
        
        // Clear canvases
        this.mainRenderer.clear();
        this.particleRenderer.clear();
        
        // Update system
        if (!this.isPaused) {
            this.system.update(deltaTime);
        }
        
        // Draw system
        this.system.draw(this.mainRenderer, this.particleRenderer);
        
        // Update stats display
        this.updateStats();
        
        // Continue animation
        requestAnimationFrame(() => this.animate());
    }
    
    updateStats() {
        const cellCountEl = document.getElementById('cell-count-value');
        if (cellCountEl) {
            cellCountEl.textContent = this.system.cells.length;
        }
        
        const diffRateEl = document.getElementById('diff-rate');
        if (diffRateEl) {
            diffRateEl.textContent = this.system.getDifferentiationRate().toFixed(1);
        }
        
        const geneExprEl = document.getElementById('gene-expr');
        if (geneExprEl) {
            const activeGenes = this.system.cells.reduce((sum, cell) => {
                const active = cell.nucleus.chromosomes.reduce((geneSum, chr) => {
                    return geneSum + chr.genes.filter(g => g.active).length;
                }, 0);
                return sum + active;
            }, 0);
            geneExprEl.textContent = activeGenes > 0 ? 'Active' : 'Baseline';
        }
        
        const signalStrengthEl = document.getElementById('signal-strength');
        if (signalStrengthEl) {
            signalStrengthEl.textContent = this.system.signals.length;
        }
        
        const stageEl = document.getElementById('stage-value');
        if (stageEl && this.sceneManager.currentScene) {
            stageEl.textContent = this.sceneManager.currentScene.name;
        }
        
        // Update cell type list
        this.updateCellTypeList();
    }
    
    updateCellTypeList() {
        const listEl = document.getElementById('cell-type-list');
        if (!listEl) return;
        
        const counts = this.system.getCellTypeCounts();
        listEl.innerHTML = '';
        
        Object.entries(counts).forEach(([type, count]) => {
            const config = CONFIG.cellTypes[type];
            if (config) {
                const item = document.createElement('div');
                item.className = 'cell-type-item';
                item.innerHTML = `
                    <div class="cell-type-color" style="background-color: ${config.color}"></div>
                    <span>${type}: ${count}</span>
                `;
                listEl.appendChild(item);
            }
        });
    }
    
    handleScroll(scrollPosition) {
        this.sceneManager.update(scrollPosition);
    }
    
    destroy() {
        this.isRunning = false;
        this.sceneManager.cleanup();
        this.system.cells = [];
        this.system.signals = [];
    }
}

// ==================== INITIALIZATION ====================
let app = null;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (scroll == 0) {
        document.getElementById("scroll").style.display = "block";
        document.getElementById("arrow").style.display = "block";
    }
    
    if (scroll > 10) {
        document.getElementById("main").style.opacity = "1";
        document.getElementById("scroll").style.display = "none";
        document.getElementById("arrow").style.display = "none";
    }
    
    if (scroll > 50 && !app) {
        app = new CellDifferentiationApp();
        app.initialize();
    }
    
    if (app) {
        app.handleScroll(scroll);
    }
    
    if (scroll > 7000) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// Welcome message
alert('Welcome to Cell Differentiation Visualization!\n\n' +
      'This is a scientifically accurate, interactive journey.\n\n' +
      'Features:\n' +
      '✓ Stem cells with detailed organelles\n' +
      '✓ DNA and gene expression\n' +
      '✓ Multiple differentiation pathways\n' +
      '✓ Signaling molecules and cell communication\n' +
      '✓ 8+ specialized cell types\n' +
      '✓ Tissue formation\n\n' +
      'Scroll slowly to explore cellular development! 🧬');

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (app) {
        app.destroy();
    }
});
