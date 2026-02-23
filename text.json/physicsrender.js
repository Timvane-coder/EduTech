import { createCanvas, loadImage } from '@napi-rs/canvas';
import { PhysicsSvgDiagrams } from './physicsvg.js';
import { PhysicsDiagramsRegistry } from './physicsregistry.js';

class PhysicsDiagramsRenderer {
    constructor(canvas = null) {
        this.defaultFont = 'Arial, sans-serif';
        this.defaultFontSize = 12;
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
        this.currentFrame = 0;
    }

    async renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = PhysicsDiagramsRegistry.getDiagram(diagramKey);
        
        if (!diagram) {
            throw new Error(`Physics diagram '${diagramKey}' not found`);
        }

        const mergedOptions = { ...diagram.defaultOptions, ...options };

        // Create a new canvas for this diagram
        const diagramCanvas = createCanvas(width, height);
        const ctx = diagramCanvas.getContext('2d');

        // Clear background
        ctx.fillStyle = mergedOptions.backgroundColor;
        ctx.fillRect(0, 0, width, height);

        try {
            // Get the corresponding SVG from PhysicsSvgDiagrams
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
            // ===== MECHANICS =====
            'freeBodyDiagram': PhysicsSvgDiagrams.freeBodyDiagramSvg,
            'vectorDiagram': PhysicsSvgDiagrams.vectorDiagramSvg,
            'motionGraphs': PhysicsSvgDiagrams.motionGraphsSvg,
            'projectileMotion': PhysicsSvgDiagrams.projectileMotionSvg,
            'inclinedPlane': PhysicsSvgDiagrams.inclinedPlaneSvg,
            'momentumCollision': PhysicsSvgDiagrams.momentumCollisionSvg,
            'circularMotion': PhysicsSvgDiagrams.circularMotionSvg,
            'workEnergyBarChart': PhysicsSvgDiagrams.workEnergyBarChartSvg,
            'springHarmonicMotion': PhysicsSvgDiagrams.springHarmonicMotionSvg,
            'torqueLeverDiagram': PhysicsSvgDiagrams.torqueLeverDiagramSvg,

            // Mechanics Apparatus
            'pulleySystemApparatus': PhysicsSvgDiagrams.pulleySystemApparatusSvg,
            'atwoodsMachineApparatus': PhysicsSvgDiagrams.atwoodsMachineApparatusSvg,
            'parachuteApparatus': PhysicsSvgDiagrams.parachuteApparatusSvg,
            'pendulumApparatus': PhysicsSvgDiagrams.pendulumApparatusSvg,
            'hydrostaticBalanceApparatus': PhysicsSvgDiagrams.hydrostaticBalanceApparatusSvg,
            'ballisticPendulumApparatus': PhysicsSvgDiagrams.ballisticPendulumApparatusSvg,

            // ===== WAVES & SOUND =====
            'transverseLongitudinalWaves': PhysicsSvgDiagrams.transverseLongitudinalWavesSvg,
            'wavefrontDiagram': PhysicsSvgDiagrams.wavefrontDiagramSvg,
            'reflectionRefraction': PhysicsSvgDiagrams.reflectionRefractionSvg,
            'waveInterference': PhysicsSvgDiagrams.waveInterferenceSvg,
            'standingWaves': PhysicsSvgDiagrams.standingWavesSvg,
            'dopplerEffect': PhysicsSvgDiagrams.dopplerEffectSvg,
            'soundWavePressure': PhysicsSvgDiagrams.soundWavePressureSvg,
            'diffractionPattern': PhysicsSvgDiagrams.diffractionPatternSvg,

            // Waves Apparatus
            'rippletankApparatus': PhysicsSvgDiagrams.rippletankApparatusSvg,
            'resonanceTubeApparatus': PhysicsSvgDiagrams.resonanceTubeApparatusSvg,
            'sonoMeterApparatus': PhysicsSvgDiagrams.sonoMeterApparatusSvg,

            // ===== STATES OF MATTER =====
            'particleModelSolid': PhysicsSvgDiagrams.particleModelSolidSvg,
            'particleModelLiquid': PhysicsSvgDiagrams.particleModelLiquidSvg,
            'particleModelGas': PhysicsSvgDiagrams.particleModelGasSvg,
            'stateTransitionDiagram': PhysicsSvgDiagrams.stateTransitionDiagramSvg,
            'diffusionDiagram': PhysicsSvgDiagrams.diffusionDiagramSvg,
            'brownianMotionDiagram': PhysicsSvgDiagrams.brownianMotionDiagramSvg,
            'densityComparison': PhysicsSvgDiagrams.densityComparisonSvg,

            // States of Matter Apparatus
            'syringeGasLawApparatus': PhysicsSvgDiagrams.syringeGasLawApparatusSvg,
            'hydraulicPressApparatus': PhysicsSvgDiagrams.hydraulicPressApparatusSvg,
            'uTubeManometerApparatus': PhysicsSvgDiagrams.uTubeManometerApparatusSvg,
            'barometerApparatus': PhysicsSvgDiagrams.barometerApparatusSvg,
            'capillaryTubeApparatus': PhysicsSvgDiagrams.capillaryTubeApparatusSvg,
            'buoyancyBottleApparatus': PhysicsSvgDiagrams.buoyancyBottleApparatusSvg,
            'evaporationCoolingApparatus': PhysicsSvgDiagrams.evaporationCoolingApparatusSvg,
            'pressureCookerApparatus': PhysicsSvgDiagrams.pressureCookerApparatusSvg,

            // ===== THERMODYNAMICS =====
            'heatingCurvePhysics': PhysicsSvgDiagrams.heatingCurvePhysicsSvg,
            'phaseDiagramPhysics': PhysicsSvgDiagrams.phaseDiagramPhysicsSvg,
            'pvDiagram': PhysicsSvgDiagrams.pvDiagramSvg,
            'carnotCycle': PhysicsSvgDiagrams.carnotCycleSvg,
            'heatTransferModes': PhysicsSvgDiagrams.heatTransferModesSvg,
            'kineticTheoryParticles': PhysicsSvgDiagrams.kineticTheoryParticlesSvg,

            // Thermodynamics Apparatus
            'conductionBarApparatus': PhysicsSvgDiagrams.conductionBarApparatusSvg,
            'calorimeterApparatus': PhysicsSvgDiagrams.calorimeterApparatusSvg,
            'steamEngineApparatus': PhysicsSvgDiagrams.steamEngineApparatusSvg,
            'lesliesCubeApparatus': PhysicsSvgDiagrams.lesliesCubeApparatusSvg,
            'vacuumFlaskApparatus': PhysicsSvgDiagrams.vacuumFlaskApparatusSvg,
            'bimetallicStripApparatus': PhysicsSvgDiagrams.bimetallicStripApparatusSvg,

            // ===== ELECTRICITY & MAGNETISM =====
            'electricFieldLines': PhysicsSvgDiagrams.electricFieldLinesSvg,
            'circuitDiagram': PhysicsSvgDiagrams.circuitDiagramSvg,
            'seriesParallelCircuits': PhysicsSvgDiagrams.seriesParallelCircuitsSvg,
            'potentialDistanceGraph': PhysicsSvgDiagrams.potentialDistanceGraphSvg,
            'magneticFieldLines': PhysicsSvgDiagrams.magneticFieldLinesSvg,
            'electromagneticInduction': PhysicsSvgDiagrams.electromagneticInductionSvg,
            'transformer': PhysicsSvgDiagrams.transformerSvg,
            'capacitorChargeCurve': PhysicsSvgDiagrams.capacitorChargeCurveSvg,
            'lorentzForce': PhysicsSvgDiagrams.lorentzForceSvg,

            // Electricity & Magnetism Apparatus
            'goldLeafElectroscopeApparatus': PhysicsSvgDiagrams.goldLeafElectroscopeApparatusSvg,
            'vanDeGraaffGeneratorApparatus': PhysicsSvgDiagrams.vanDeGraaffGeneratorApparatusSvg,
            'rheostatPotentiometerApparatus': PhysicsSvgDiagrams.rheostatPotentiometerApparatusSvg,
            'galvanometerApparatus': PhysicsSvgDiagrams.galvanometerApparatusSvg,
            'cathodeRayTubeApparatus': PhysicsSvgDiagrams.cathodeRayTubeApparatusSvg,
            'electromagnetApparatus': PhysicsSvgDiagrams.electromagnetApparatusSvg,
            'electricMotorApparatus': PhysicsSvgDiagrams.electricMotorApparatusSvg,
            'electricGeneratorApparatus': PhysicsSvgDiagrams.electricGeneratorApparatusSvg,

            // ===== OPTICS =====
            'planeMirrorRayDiagram': PhysicsSvgDiagrams.planeMirrorRayDiagramSvg,
            'concaveMirrorRayDiagram': PhysicsSvgDiagrams.concaveMirrorRayDiagramSvg,
            'convexMirrorRayDiagram': PhysicsSvgDiagrams.convexMirrorRayDiagramSvg,
            'convexLensRayDiagram': PhysicsSvgDiagrams.convexLensRayDiagramSvg,
            'concaveLensRayDiagram': PhysicsSvgDiagrams.concaveLensRayDiagramSvg,
            'snellsLawRefraction': PhysicsSvgDiagrams.snellsLawRefractionSvg,
            'totalInternalReflection': PhysicsSvgDiagrams.totalInternalReflectionSvg,
            'prismDispersion': PhysicsSvgDiagrams.prismDispersionSvg,
            'opticalFiber': PhysicsSvgDiagrams.opticalFiberSvg,
            'diffractionInterferencePattern': PhysicsSvgDiagrams.diffractionInterferencePatternSvg,
            'polarizationDiagram': PhysicsSvgDiagrams.polarizationDiagramSvg,

            // Optics Apparatus
            'opticalBenchApparatus': PhysicsSvgDiagrams.opticalBenchApparatusSvg,
            'periscopeApparatus': PhysicsSvgDiagrams.periscopeApparatusSvg,
            'spectrometerApparatus': PhysicsSvgDiagrams.spectrometerApparatusSvg,
            'microscopeApparatus': PhysicsSvgDiagrams.microscopeApparatusSvg,
            'telescopeApparatus': PhysicsSvgDiagrams.telescopeApparatusSvg,
            'pinholeCameraApparatus': PhysicsSvgDiagrams.pinholeCameraApparatusSvg,

            // ===== MODERN PHYSICS =====
            'photoelectricEffect': PhysicsSvgDiagrams.photoelectricEffectSvg,
            'lineEmissionSpectra': PhysicsSvgDiagrams.lineEmissionSpectraSvg,
            'blackbodyRadiation': PhysicsSvgDiagrams.blackbodyRadiationSvg,
            'quantumTunneling': PhysicsSvgDiagrams.quantumTunnelingSvg,
            'electronProbabilityDistribution': PhysicsSvgDiagrams.electronProbabilityDistributionSvg,
            'waveParticleDuality': PhysicsSvgDiagrams.waveParticleDualitySvg,
            'deBroglieWavelength': PhysicsSvgDiagrams.deBroglieWavelengthSvg,

            // Modern Physics Apparatus
            'millikanOilDropApparatus': PhysicsSvgDiagrams.millikanOilDropApparatusSvg,
            'geigerMarsdenApparatus': PhysicsSvgDiagrams.geigerMarsdenApparatusSvg,
            'photoelectricEffectApparatus': PhysicsSvgDiagrams.photoelectricEffectApparatusSvg,
            'xRayTubeApparatus': PhysicsSvgDiagrams.xRayTubeApparatusSvg,

            // ===== RELATIVITY =====
            'spacetimeDiagram': PhysicsSvgDiagrams.spacetimeDiagramSvg,
            'timeDilation': PhysicsSvgDiagrams.timeDilationSvg,
            'lengthContraction': PhysicsSvgDiagrams.lengthContractionSvg,
            'curvedSpacetime': PhysicsSvgDiagrams.curvedSpacetimeSvg,
            'twinParadox': PhysicsSvgDiagrams.twinParadoxSvg,
            'velocityAddition': PhysicsSvgDiagrams.velocityAdditionSvg,

            // ===== NUCLEAR PHYSICS =====
            'nuclearStructurePhysics': PhysicsSvgDiagrams.nuclearStructurePhysicsSvg,
            'alphaDecayDiagram': PhysicsSvgDiagrams.alphaDecayDiagramSvg,
            'betaDecayDiagram': PhysicsSvgDiagrams.betaDecayDiagramSvg,
            'gammaDecayDiagram': PhysicsSvgDiagrams.gammaDecayDiagramSvg,
            'halfLifeGraph': PhysicsSvgDiagrams.halfLifeGraphSvg,
            'bindingEnergyCurve': PhysicsSvgDiagrams.bindingEnergyCurveSvg,
            'nuclearFissionDiagram': PhysicsSvgDiagrams.nuclearFissionDiagramSvg,
            'nuclearFusionDiagram': PhysicsSvgDiagrams.nuclearFusionDiagramSvg,
            'chainReactionDiagram': PhysicsSvgDiagrams.chainReactionDiagramSvg,
            'nuclearReactorDiagram': PhysicsSvgDiagrams.nuclearReactorDiagramSvg,
            'massDefectChart': PhysicsSvgDiagrams.massDefectChartSvg,
            'radiationPenetration': PhysicsSvgDiagrams.radiationPenetrationSvg,

            // Nuclear Physics Apparatus
            'geigerCounterApparatus': PhysicsSvgDiagrams.geigerCounterApparatusSvg,
            'cloudChamberApparatus': PhysicsSvgDiagrams.cloudChamberApparatusSvg,
            'massSpectrometerApparatus': PhysicsSvgDiagrams.massSpectrometerApparatusSvg,

            // ===== PARTICLE PHYSICS =====
            'standardModelChart': PhysicsSvgDiagrams.standardModelChartSvg,
            'feynmanDiagram': PhysicsSvgDiagrams.feynmanDiagramSvg,
            'quarkStructure': PhysicsSvgDiagrams.quarkStructureSvg,
            'particleAccelerator': PhysicsSvgDiagrams.particleAcceleratorSvg,
            'particleCollisionTracks': PhysicsSvgDiagrams.particleCollisionTracksSvg,

            // Particle Physics Apparatus
            'bubbleChamberApparatus': PhysicsSvgDiagrams.bubbleChamberApparatusSvg,
            'cyclotronApparatus': PhysicsSvgDiagrams.cyclotronApparatusSvg,
            'linearAcceleratorApparatus': PhysicsSvgDiagrams.linearAcceleratorApparatusSvg,
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
        console.log(`✨ Physics diagram '${diagramKey}' saved to ${filename}`);
    }

    // Batch export multiple diagrams
    async exportBatch(diagramKeys, outputDir = './output', width = 800, height = 600, options = {}) {
        const fs = await import('fs');
        const path = await import('path');
        
        // Create output directory if it doesn't exist
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        for (const diagramKey of diagramKeys) {
            try {
                const filename = path.join(outputDir, `${diagramKey}.png`);
                await this.exportToFile(diagramKey, filename, width, height, options);
            } catch (error) {
                console.error(`❌ Failed to export ${diagramKey}:`, error.message);
            }
        }
    }

    // Export all diagrams by category
    async exportByCategory(category, outputDir = './output', width = 800, height = 600, options = {}) {
        const diagrams = PhysicsDiagramsRegistry.getDiagramsByCategory(category);
        const diagramKeys = Object.keys(diagrams);
        
        const categoryDir = outputDir + '/' + category.replace(/\s+/g, '_');
        await this.exportBatch(diagramKeys, categoryDir, width, height, options);
        
        console.log(`✨ Exported ${diagramKeys.length} diagrams from category '${category}'`);
    }

    // Export all diagrams
    async exportAll(outputDir = './output', width = 800, height = 600, options = {}) {
        const categories = PhysicsDiagramsRegistry.getAllCategories();
        
        for (const category of categories) {
            await this.exportByCategory(category, outputDir, width, height, options);
        }
        
        console.log(`✨ Exported all physics diagrams to ${outputDir}`);
    }
}

export { PhysicsDiagramsRenderer };
