import { createCanvas, loadImage } from '@napi-rs/canvas';
import { BiologySvgDiagrams } from './svg-data.js';
import { BiologyDiagramsRegistry} from './registry.js';

class BiologyDiagramsRenderer {
    constructor(canvas = null) {
        this.defaultFont = 'Arial, sans-serif';
        this.defaultFontSize = 12;
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
        this.currentFrame = 0;
    }

    async renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = BiologyDiagramsRegistry.getDiagram(diagramKey);
        if (!diagram) {
            throw new Error(`Biology diagram '${diagramKey}' not found`);
        }

        const mergedOptions = { ...diagram.defaultOptions, ...options };
        
        // Create a new canvas for this diagram
        const diagramCanvas = createCanvas(width, height);
        const ctx = diagramCanvas.getContext('2d');

        // Clear background
        ctx.fillStyle = mergedOptions.backgroundColor;
        ctx.fillRect(0, 0, width, height);

        try {
            // Get the corresponding SVG from BiologySvgDiagrams
            const svgString = this.getSvgForDiagram(diagramKey);
            
            if (!svgString) {
                throw new Error(`SVG not found for diagram: ${diagramKey}`);
            }

            // Convert SVG to image and draw on canvas
            await this.drawSvgToCanvas(ctx, svgString, x, y, width, height);

            // Add category and info if needed
            if (mergedOptions.showLabels) {
                this.drawDiagramInfo(ctx, diagram, 20, height - 60, mergedOptions);
            }

        } catch (error) {
            console.error(`Error rendering ${diagramKey}:`, error);
            this.renderError(ctx, diagram, width / 2, height / 2, width * 0.7, height * 0.5, error.message);
        }

        return diagramCanvas;
    }

    async drawSvgToCanvas(ctx, svgString, x, y, width, height) {
        // Convert SVG string to Base64 Data URI
        const svgBase64 = Buffer.from(svgString).toString('base64');
        const svgUrl = `data:image/svg+xml;base64,${svgBase64}`;

        // Load the SVG as an image
        const image = await loadImage(svgUrl);

        // Draw the SVG onto the canvas
        ctx.drawImage(image, x, y, width, height);
    }

    getSvgForDiagram(diagramKey) {
        // Map diagram keys to their corresponding SVG static properties
        const svgMap = {
            // Cell Biology
            'animalCell': BiologySvgDiagrams.animalcellsvg,
            'plantCell': BiologySvgDiagrams.plantcellsvg,
            'prokaryoticVsEukaryotic': BiologySvgDiagrams.eukaryoticsvg, // Assuming this combines both
            'cellMembrane': BiologySvgDiagrams.cellstructuresvg,
            'osmosisDiffusion': BiologySvgDiagrams.activepassivetransportsvg,
            'activePassiveTransport': BiologySvgDiagrams.activepassivetransportsvg,
            'mitosis': BiologySvgDiagrams.mitosissvg,
            'meiosis': BiologySvgDiagrams.meiosissvg,
            'organelles': BiologySvgDiagrams.cellstructuresvg,
            'cellCycle': BiologySvgDiagrams.cellcyclesvg,
            'enzymeAction': BiologySvgDiagrams.enzymeactionsvg,

            // Genetics & Molecular Biology
            'dnaStructure': BiologySvgDiagrams.dnastructuresvg,
            'rnaStructure': BiologySvgDiagrams.rnastructuresvg,
            'dnaReplication': BiologySvgDiagrams.dnareplicationsvg,
            'transcription': BiologySvgDiagrams.transcriptionsvg,
            'translation': BiologySvgDiagrams.translationsvg,
            'codonChart': BiologySvgDiagrams.codonchartsvg,
            'geneExpression': BiologySvgDiagrams.geneexpressionsvg,
            'punnettSquare': BiologySvgDiagrams.punnetsquaresvg,
            'chromosomes': BiologySvgDiagrams.chromosomessvg,
            'crossingOver': BiologySvgDiagrams.crossingoversvg,
            'mutations': BiologySvgDiagrams.mutationssvg,
            'recombinantDNA': BiologySvgDiagrams.recombinantdnasvg,
            'pcrCycle': BiologySvgDiagrams.pcrcyclesvg,

            // Evolution & Natural Selection
            'darwinsFinches': BiologySvgDiagrams.darwinfinchessvg,
            'naturalSelection': BiologySvgDiagrams.naturalselectionsvg,
            'phylogeneticTree': BiologySvgDiagrams.phylogenetictreesvg,
            'adaptiveRadiation': BiologySvgDiagrams.adaptiveradiationsvg,
            'fossilLayers': BiologySvgDiagrams.fosillayerssvg,
            'hardyWeinberg': BiologySvgDiagrams.hardyweinbergsvg,
            'speciation': BiologySvgDiagrams.speciationsvg,
            'comparativeAnatomy': BiologySvgDiagrams.comparativeanatomysvg,

            // Ecology
            'foodChain': BiologySvgDiagrams.foodchainsvg,
            'foodWeb': BiologySvgDiagrams.foodwebsvg,
            'energyPyramid': BiologySvgDiagrams.energypyramidsvg,
            'carbonCycle': BiologySvgDiagrams.carboncyclesvg,
            'nitrogenCycle': BiologySvgDiagrams.nitrogencyclesvg,
            'waterCycle': BiologySvgDiagrams.watercyclesvg,
            'populationGrowth': BiologySvgDiagrams.populationgrowthsvg,
            'ecosystem': BiologySvgDiagrams.ecosystemsvg,
            'biomes': BiologySvgDiagrams.biomessvg,
            'predatorPrey': BiologySvgDiagrams.predatorpreysvg,

            // Human Anatomy & Physiology
            'skeletalSystem': BiologySvgDiagrams.skeletalsystemsvg,
            'muscularSystem': BiologySvgDiagrams.cellstructuresvg, // Assuming you'll add this
            'digestiveSystem': BiologySvgDiagrams.digestivesystemsvg,
            'respiratorySystem': BiologySvgDiagrams.respiratorysystemsvg,
            'circulatorySystem': BiologySvgDiagrams.circulatorysystemsvg,
            'excretorySystem': BiologySvgDiagrams.urinarysytemsvg,
            'nervousSystem': BiologySvgDiagrams.nervoussystemsvg,
            'neuronStructure': BiologySvgDiagrams.neuronstructuresvg,
            'synapse': BiologySvgDiagrams.neuronstructuresvg,
            'endocrineSystem': BiologySvgDiagrams.endocrinesystemsvg,
            'reproductiveSystem': BiologySvgDiagrams.reproductivesystemsvg,
            'immuneSystem': BiologySvgDiagrams.immunesystemsvg,
            'skinStructure': BiologySvgDiagrams.skinstructuresvg,

            // Plants (Botany)
            'leafCrossSection': BiologySvgDiagrams.leafcrosssectionsvg,
            'photosynthesis': BiologySvgDiagrams.photosynthesisdetailedsvg,
            'stomata': BiologySvgDiagrams.stomatasvg,
            'xylemPhloem': BiologySvgDiagrams.xylemphloemsvg,
            'flowerStructure': BiologySvgDiagrams.flowerstructuresvg,
            'seedGermination': BiologySvgDiagrams.seedgerminationsvg,
            'tropisms': BiologySvgDiagrams.tropismssvg,

            // Microbiology
            'bacteriaStructure': BiologySvgDiagrams.bacteriastructuresvg,
            'virusStructure': BiologySvgDiagrams.virusstructuresvg,
            'fungalCell': BiologySvgDiagrams.fungalcellsvg,
            'protists': BiologySvgDiagrams.protistssvg,
            'bacterialGrowthCurve': BiologySvgDiagrams.bacterialgrowthcurvesvg,
            'viralReplication': BiologySvgDiagrams.viralreplicationsvg,
            'microscopy': BiologySvgDiagrams.microscopysvg,

            // Reproduction & Development
            'fertilization': BiologySvgDiagrams.fertilizationsvg,
            'embryoDevelopment': BiologySvgDiagrams.embryodevelopmentsvg,
            'menstrualCycle': BiologySvgDiagrams.menstrualcyclesvg,
            'gametogenesis': BiologySvgDiagrams.gematogenesissvg,
            'placenta': BiologySvgDiagrams.placentasvg,

            // Health, Disease & Immunology
            'immuneResponse': BiologySvgDiagrams.immuneresponsesvg,
            'antibodyStructure': BiologySvgDiagrams.antbodystructuresvg,
            'pathogenTypes': BiologySvgDiagrams.pathogentypessvg,
            'vaccination': BiologySvgDiagrams.vaccinationsvg,
            'inflammation': BiologySvgDiagrams.inflammationsvg,
            'diseaseTransmission': BiologySvgDiagrams.diseasetransmisionsvg,
            'bloodCells': BiologySvgDiagrams.bloodcellssvg,

            // Classification & Taxonomy
            'fiveKingdoms': BiologySvgDiagrams.fivekingdomssvg,
            'threeDomains': BiologySvgDiagrams.threedomainsvg,
            'taxonomyHierarchy': BiologySvgDiagrams.taxonomyhierachysvg,
            'dichotomousKey': BiologySvgDiagrams.dichotomouskeysvg,
            'cladogram': BiologySvgDiagrams.cladogramsvg,

            // Homeostasis & Regulation
            'negativeFeedback': BiologySvgDiagrams.negativefeedbacksvg,
            'thermoregulation': BiologySvgDiagrams.thermoregulationsvg,
            'bloodGlucoseRegulation': BiologySvgDiagrams.bloodglucoseregulationsvg,
            'waterBalance': BiologySvgDiagrams.waterbalancesvg,
            'nephron': BiologySvgDiagrams.nephronsvg,

            // Energy in Living Systems
            'atpStructure': BiologySvgDiagrams.atpstructuresvg,
            'cellularRespiration': BiologySvgDiagrams.cellularrespirationsvg,
            'mitochondrion': BiologySvgDiagrams.mitochondrionsvg,
            'electronTransportChain': BiologySvgDiagrams.electrotransportchainsvg,
            'chloroplastStructure': BiologySvgDiagrams.chroloplaststructuresvg,
            'photosynthesisDetailed': BiologySvgDiagrams.photosynthesisdetailedsvg,

            // Existing Cardiovascular, etc.
            'heartAnatomy': BiologySvgDiagrams.heartanatomysvg,
            'bloodVesselComparison': BiologySvgDiagrams.circulatorysystemsvg,
            'heartValves': BiologySvgDiagrams.heartanatomysvg,
            'digestiveOrgans': BiologySvgDiagrams.digestivesystemsvg,
            'brain': BiologySvgDiagrams.brainsvg,
            'liver': BiologySvgDiagrams.liversvg,
            'kidney': BiologySvgDiagrams.kidneysvg,
            'eyeAnatomy': BiologySvgDiagrams.eyeanatomysvg,
            'skull': BiologySvgDiagrams.skullsvg,
            'boneStructure': BiologySvgDiagrams.bonestructuresvg,
            'cellStructure': BiologySvgDiagrams.cellstructuresvg,
        };

        return svgMap[diagramKey] || null;
    }

    drawDiagramInfo(ctx, diagram, x, y, options) {
        ctx.font = '12px Arial';
        ctx.fillStyle = '#7F8C8D';
        ctx.textAlign = 'left';
        ctx.fillText(`Category: ${diagram.category}`, x, y);
        ctx.fillText(`Description: ${diagram.description}`, x, y + 15);
    }

    renderError(ctx, diagram, x, y, width, height, errorMessage) {
        ctx.fillStyle = '#FADBD8';
        ctx.fillRect(x - width/2, y - height/2, width, height);
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 2;
        ctx.strokeRect(x - width/2, y - height/2, width, height);
        
        ctx.font = 'bold 18px Arial';
        ctx.fillStyle = '#C0392B';
        ctx.textAlign = 'center';
        ctx.fillText('Error Rendering Diagram', x, y - 10);
        ctx.font = '14px Arial';
        ctx.fillText(errorMessage, x, y + 15);
    }

    // Export diagram to PNG buffer
    async exportToPng(diagramKey, width = 800, height = 600, options = {}) {
        const canvas = await this.renderDiagram(diagramKey, 0, 0, width, height, options);
        return await canvas.encode('png');
    }

    // Export diagram to file
    async exportToFile(diagramKey, filename, width = 800, height = 600, options = {}) {
        const fs = await import('fs');
        const pngData = await this.exportToPng(diagramKey, width, height, options);
        fs.writeFileSync(filename, pngData);
        console.log(`✨ Diagram '${diagramKey}' saved to ${filename}`);
    }
}

export { BiologyDiagramsRenderer };
