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
        // ===== MECHANICS =====
        'freeBodyDiagram':          PhysicsSvgDiagrams.freeBodyDiagramSvg,
        'vectorDiagram':            PhysicsSvgDiagrams.vectorDiagramSvg,
        'motionGraphs':             PhysicsSvgDiagrams.motionGraphsSvg,
        'projectileMotion':         PhysicsSvgDiagrams.projectileMotionSvg,
        'inclinedPlane':            PhysicsSvgDiagrams.inclinedPlaneSvg,
        'momentumCollision':        PhysicsSvgDiagrams.momentumCollisionSvg,
        'circularMotion':           PhysicsSvgDiagrams.circularMotionSvg,
        'workEnergyBarChart':       PhysicsSvgDiagrams.workEnergyBarChartSvg,
        'springHarmonicMotion':     PhysicsSvgDiagrams.springHarmonicMotionSvg,
        'torqueLeverDiagram':       PhysicsSvgDiagrams.torqueLeverDiagramSvg,

        // ===== ELECTRICITY & MAGNETISM =====
        'electricFieldLines':       PhysicsSvgDiagrams.electricFieldLinesSvg,
        'potentialDistanceGraph':   PhysicsSvgDiagrams.potentialDistanceGraphSvg,
        'equipotentialLinesDiagram': PhysicsSvgDiagrams.equipotentialLinesDiagramSvg,
        'capacitorChargeCurve':     PhysicsSvgDiagrams.capacitorChargeCurveSvg,
        'circuitDiagram':           PhysicsSvgDiagrams.circuitDiagramSvg,
        'seriesParallelCircuits':   PhysicsSvgDiagrams.seriesParallelCircuitsSvg,
        'acVoltageWaveform':        PhysicsSvgDiagrams.acVoltageWaveformSvg,
        'rlcCircuitDiagram':        PhysicsSvgDiagrams.rlcCircuitDiagramSvg,
        'acResonanceCurve':         PhysicsSvgDiagrams.acResonanceCurveSvg,
        'magneticFieldLines':       PhysicsSvgDiagrams.magneticFieldLinesSvg,
        'lorentzForce':             PhysicsSvgDiagrams.lorentzForceSvg,
        'electromagneticInduction': PhysicsSvgDiagrams.electromagneticInductionSvg,
        'transformer':              PhysicsSvgDiagrams.transformerSvg,

        // ===== WAVES & SOUND =====
        'transverseLongitudinalWaves': PhysicsSvgDiagrams.transverseLongitudinalWavesSvg,
        'waveInterference':         PhysicsSvgDiagrams.waveInterferenceSvg,
        'soundWavePressure':        PhysicsSvgDiagrams.soundWavePressureSvg,
        'dopplerEffect':            PhysicsSvgDiagrams.dopplerEffectSvg,
        'standingWaves':            PhysicsSvgDiagrams.standingWavesSvg,
        'wavefrontDiagram':         PhysicsSvgDiagrams.wavefrontDiagramSvg,

        // ===== OPTICS =====
        'planeMirrorRayDiagram':    PhysicsSvgDiagrams.planeMirrorRayDiagramSvg,
        'snellsLawRefraction':      PhysicsSvgDiagrams.snellsLawRefractionSvg,
        'totalInternalReflection':  PhysicsSvgDiagrams.totalInternalReflectionSvg,
        'convexLensRayDiagram':     PhysicsSvgDiagrams.convexLensRayDiagramSvg,
        'concaveLensRayDiagram':    PhysicsSvgDiagrams.concaveLensRayDiagramSvg,
        'concaveMirrorRayDiagram':  PhysicsSvgDiagrams.concaveMirrorRayDiagramSvg,
        'convexMirrorRayDiagram':   PhysicsSvgDiagrams.convexMirrorRayDiagramSvg,
        'prismDispersion':          PhysicsSvgDiagrams.prismDispersionSvg,
        'opticalFiber':             PhysicsSvgDiagrams.opticalFiberSvg,
        'polarizationDiagram':      PhysicsSvgDiagrams.polarizationDiagramSvg,
        'diffractionPattern':       PhysicsSvgDiagrams.diffractionPatternSvg,

        // ===== THERMAL PHYSICS =====
        'heatingCurvePhysics':      PhysicsSvgDiagrams.heatingCurvePhysicsSvg,
        'heatTransferModes':        PhysicsSvgDiagrams.heatTransferModesSvg,
        'phaseDiagramPhysics':      PhysicsSvgDiagrams.phaseDiagramPhysicsSvg,
        'kineticTheoryParticles':   PhysicsSvgDiagrams.kineticTheoryParticlesSvg,
        'pvDiagram':                PhysicsSvgDiagrams.pvDiagramSvg,
        'carnotCycle':              PhysicsSvgDiagrams.carnotCycleSvg,
        'heatEngineDiagram':        PhysicsSvgDiagrams.heatEngineDiagramSvg,
        'refrigeratorDiagram':      PhysicsSvgDiagrams.refrigeratorDiagramSvg,

        // ===== SPECIAL RELATIVITY =====
        'timeDilation':             PhysicsSvgDiagrams.timeDilationSvg,
        'lengthContraction':        PhysicsSvgDiagrams.lengthContractionSvg,
        'spacetimeDiagram':         PhysicsSvgDiagrams.spacetimeDiagramSvg,
        'massEnergyEquivalence':    PhysicsSvgDiagrams.massEnergyEquivalenceSvg,
        'lorentzTransformationDiagram': PhysicsSvgDiagrams.lorentzTransformationDiagramSvg,
        'velocityAddition':         PhysicsSvgDiagrams.velocityAdditionSvg,

        // ===== NUCLEAR PHYSICS =====
        'alphaDecayDiagram':        PhysicsSvgDiagrams.alphaDecayDiagramSvg,
        'betaDecayDiagram':         PhysicsSvgDiagrams.betaDecayDiagramSvg,
        'halfLifeGraph':            PhysicsSvgDiagrams.halfLifeGraphSvg,
        'nuclearStructurePhysics':  PhysicsSvgDiagrams.nuclearStructurePhysicsSvg,
        'bindingEnergyCurve':       PhysicsSvgDiagrams.bindingEnergyCurveSvg,
        'nuclearFissionDiagram':    PhysicsSvgDiagrams.nuclearFissionDiagramSvg,
        'nuclearFusionDiagram':     PhysicsSvgDiagrams.nuclearFusionDiagramSvg,
        'chainReactionDiagram':     PhysicsSvgDiagrams.chainReactionDiagramSvg,
        'radiationPenetration':     PhysicsSvgDiagrams.radiationPenetrationSvg,

        // ===== GRAVITATIONAL FIELDS =====
        'gravitationalForceDiagram':    PhysicsSvgDiagrams.gravitationalForceDiagramSvg,
        'gravitationalFieldDiagram':    PhysicsSvgDiagrams.gravitationalFieldDiagramSvg,
        'orbitalMotionDiagram':         PhysicsSvgDiagrams.orbitalMotionDiagramSvg,
        'keplerThirdLawDiagram':        PhysicsSvgDiagrams.keplerThirdLawDiagramSvg,
        'gravitationalPotentialDiagram': PhysicsSvgDiagrams.gravitationalPotentialDiagramSvg,
        'escapeVelocityDiagram':        PhysicsSvgDiagrams.escapeVelocityDiagramSvg,
        'geostationaryOrbitDiagram':    PhysicsSvgDiagrams.geostationaryOrbitDiagramSvg,
        'weightlessnessOrbitDiagram':   PhysicsSvgDiagrams.weightlessnessOrbitDiagramSvg,

        // ===== QUANTUM PHYSICS =====
        'photoelectricEffect':      PhysicsSvgDiagrams.photoelectricEffectSvg,
        'lineEmissionSpectra':      PhysicsSvgDiagrams.lineEmissionSpectraSvg,
        'bohrEnergyLevelDiagram':   PhysicsSvgDiagrams.bohrEnergyLevelDiagramSvg,
        'bohrTransitionDiagram':    PhysicsSvgDiagrams.bohrTransitionDiagramSvg,
        'comptonScatteringDiagram': PhysicsSvgDiagrams.comptonScatteringDiagramSvg,
        'comptonEnergyDiagram':     PhysicsSvgDiagrams.comptonEnergyDiagramSvg,
        'quantumTunneling':         PhysicsSvgDiagrams.quantumTunnelingSvg,
        'deBroglieWavelength':      PhysicsSvgDiagrams.deBroglieWavelengthSvg,

/** new svg diagrams for physics pamphlets */
// ================================================ //


// ===== THERMAL PHYSICS =====
            'thermalEnergyVsTemperatureVsHeatConceptMap': PhysicsSvgDiagrams.thermalEnergyVsTemperatureVsHeatConceptMapsvg,
            'celsiusFahrenheitKelvinTripleScaleComparisonDiagram': PhysicsSvgDiagrams.celsiusFahrenheitKelvinTripleScaleComparisonDiagramsvg,
            'specificHeatCapacityMaterialsComparisonBarChart': PhysicsSvgDiagrams.specificHeatCapacityMaterialsComparisonBarChartsvg,
            'heatingCoolingCurveWaterAllPhasesAnnotatedDiagram': PhysicsSvgDiagrams.heatingCoolingCurveWaterAllPhasesAnnotatedDiagramsvg,
            'coffeeCupCalorimeterSetupCrossSectionDiagram': PhysicsSvgDiagrams.coffeeCupCalorimeterSetupCrossSectionDiagramsvg,
            'linearAreaVolumeExpansionCoefficientsAnnotatedDiagram': PhysicsSvgDiagrams.linearAreaVolumeExpansionCoefficientsAnnotatedDiagramsvg,
            'threeModesHeatTransferConductionConvectionRadiationSideBySideDiagram': PhysicsSvgDiagrams.threeModesHeatTransferConductionConvectionRadiationSideBySideDiagramsvg,
            'thermalEnergyApplicationsCookingClimateEngineeringInfographic': PhysicsSvgDiagrams.thermalEnergyApplicationsCookingClimateEngineeringInfographicsvg,
            'gasStateVariablesPVnTRelationshipConceptDiagram': PhysicsSvgDiagrams.gasStateVariablesPVnTRelationshipConceptDiagramsvg,
            'boylesLawPVHyperbolaAndLinearisedGraphs': PhysicsSvgDiagrams.boylesLawPVHyperbolaAndLinearisedGraphssvg,
            'charlesLawVolumeTemperatureLinearGraphAbsoluteZeroExtrapolationDiagram': PhysicsSvgDiagrams.charlesLawVolumeTemperatureLinearGraphAbsoluteZeroExtrapolationDiagramsvg,
            'gayLussacsLawPressureTemperatureLinearGraphConstantVolumeDiagram': PhysicsSvgDiagrams.gayLussacsLawPressureTemperatureLinearGraphConstantVolumeDiagramsvg,
            'avogadrosLawVolumeVsMolesEqualVolumesEqualMoleculesDiagram': PhysicsSvgDiagrams.avogadrosLawVolumeVsMolesEqualVolumesEqualMoleculesDiagramsvg,
            'combinedGasLawThreeVariableVennDiagramSpecialCases': PhysicsSvgDiagrams.combinedGasLawThreeVariableVennDiagramSpecialCasessvg,
            'idealGasLawPVnRTVariableRelationshipAnnotatedDiagram': PhysicsSvgDiagrams.idealGasLawPVnRTVariableRelationshipAnnotatedDiagramsvg,
            'daltonsLawPartialPressureMoleFractionMixtureStackedBarDiagram': PhysicsSvgDiagrams.daltonsLawPartialPressureMoleFractionMixtureStackedBarDiagramsvg,
            'compressibilityFactorZVsPressureRealVsIdealGasDeviationGraph': PhysicsSvgDiagrams.compressibilityFactorZVsPressureRealVsIdealGasDeviationGraphsvg,
            'gasLawsApplicationsBreathingTyreHotAirBalloonIndustrialInfographic': PhysicsSvgDiagrams.gasLawsApplicationsBreathingTyreHotAirBalloonIndustrialInfographicsvg,
            'kineticTheoryPostulatesGasMoleculeRandomMotionAnnotatedDiagram': PhysicsSvgDiagrams.kineticTheoryPostulatesGasMoleculeRandomMotionAnnotatedDiagramsvg,
            'moleculeCollisionCubicBoxMomentumTransferPressureDerivationDiagram': PhysicsSvgDiagrams.moleculeCollisionCubicBoxMomentumTransferPressureDerivationDiagramsvg,
            'averageKineticEnergyTemperatureProportionalityGraphWithBoltzmannAnnotation': PhysicsSvgDiagrams.averageKineticEnergyTemperatureProportionalityGraphWithBoltzmannAnnotationsvg,
            'maxwellBoltzmannDistributionVmpVmeanVrmsAnnotatedCurveTemperatureEffect': PhysicsSvgDiagrams.maxwellBoltzmannDistributionVmpVmeanVrmsAnnotatedCurveTemperatureEffectsvg,
            'degreesOfFreedomMonatomicDiatomicNonlinearMoleculeRotationalTranslationalVibrationalDiagram': PhysicsSvgDiagrams.degreesOfFreedomMonatomicDiatomicNonlinearMoleculeRotationalTranslationalVibrationalDiagramsvg,
            'internalEnergyTemperatureOnlyDependenceIdealGasJouleExpansionDiagram': PhysicsSvgDiagrams.internalEnergyTemperatureOnlyDependenceIdealGasJouleExpansionDiagramsvg,
            'meanFreePathCollisionCrossSectionMolecularDiameterZigzagPathDiagram': PhysicsSvgDiagrams.meanFreePathCollisionCrossSectionMolecularDiameterZigzagPathDiagramsvg,
            'diffusionViscosityThermalConductivityMolecularTransportComparisonDiagram': PhysicsSvgDiagrams.diffusionViscosityThermalConductivityMolecularTransportComparisonDiagramsvg,
            'kineticTheoryDerivationGasLawsFamilyTreeFlowchartDiagram': PhysicsSvgDiagrams.kineticTheoryDerivationGasLawsFamilyTreeFlowchartDiagramsvg,
            'grahamsLawEffusionAtmosphericEscapeSpeedOfSoundKineticTheoryApplicationsInfographic': PhysicsSvgDiagrams.grahamsLawEffusionAtmosphericEscapeSpeedOfSoundKineticTheoryApplicationsInfographicsvg,
            'openClosedIsolatedSystemBoundaryHeatWorkMassFlowDiagram': PhysicsSvgDiagrams.openClosedIsolatedSystemBoundaryHeatWorkMassFlowDiagramsvg,
            'zerothLawThermalEquilibriumTransitivityABCThermometerDiagram': PhysicsSvgDiagrams.zerothLawThermalEquilibriumTransitivityABCThermometerDiagramsvg,
            'firstLawDeltaUQMinusWEnergyFlowSystemSurroundingsDiagram': PhysicsSvgDiagrams.firstLawDeltaUQMinusWEnergyFlowSystemSurroundingsDiagramsvg,
            'entropyUniverseIncreaseIrreversibleProcessesArrowOfTimeDiagram': PhysicsSvgDiagrams.entropyUniverseIncreaseIrreversibleProcessesArrowOfTimeDiagramsvg,
            'carnotCycleFourProcessPVDiagramWithEfficiencyAnnotation': PhysicsSvgDiagrams.carnotCycleFourProcessPVDiagramWithEfficiencyAnnotationsvg,
            'refrigeratorHeatPumpEnergyFlowQcQhWorkCOPComparisonDiagram': PhysicsSvgDiagrams.refrigeratorHeatPumpEnergyFlowQcQhWorkCOPComparisonDiagramsvg,
            'thirdLawEntropyApproachingZeroAbsoluteZeroTemperatureCurveDiagram': PhysicsSvgDiagrams.thirdLawEntropyApproachingZeroAbsoluteZeroTemperatureCurveDiagramsvg,
            'thermodynamicPotentialsUFGHNaturalVariablesLegendreTransformationDiagram': PhysicsSvgDiagrams.thermodynamicPotentialsUFGHNaturalVariablesLegendreTransformationDiagramsvg,
            'pvDiagramIsothermalIsobaricIsochoricAdiabaticProcessPathsAnnotatedDiagram': PhysicsSvgDiagrams.pvDiagramIsothermalIsobaricIsochoricAdiabaticProcessPathsAnnotatedDiagramsvg,
            'thermodynamicsApplicationsPowerPlantRefrigerationBiologyInformationInfographic': PhysicsSvgDiagrams.thermodynamicsApplicationsPowerPlantRefrigerationBiologyInformationInfographicsvg,
            'heatFluxThermalResistanceElectricalAnalogyDeltaTCurrentVoltageDiagram': PhysicsSvgDiagrams.heatFluxThermalResistanceElectricalAnalogyDeltaTCurrentVoltageDiagramsvg,
            'fouriersLawTemperatureGradientSlabCrossSectionHeatFlowAnnotatedDiagram': PhysicsSvgDiagrams.fouriersLawTemperatureGradientSlabCrossSectionHeatFlowAnnotatedDiagramsvg,
            'naturalForcedConvectionBoundaryLayerVelocityTemperatureProfileDiagram': PhysicsSvgDiagrams.naturalForcedConvectionBoundaryLayerVelocityTemperatureProfileDiagramsvg,
            'blackbodySpectralEmissivePowerPlancksLawWiensDisplacementAnnotatedCurveDiagram': PhysicsSvgDiagrams.blackbodySpectralEmissivePowerPlancksLawWiensDisplacementAnnotatedCurveDiagramsvg,
            'thermalResistanceNetworkSeriesParallelConvectionConductionRadiationWallDiagram': PhysicsSvgDiagrams.thermalResistanceNetworkSeriesParallelConvectionConductionRadiationWallDiagramsvg,
            'lumpedCapacitanceExponentialCoolingCurveTimeConstantBiotNumberDiagram': PhysicsSvgDiagrams.lumpedCapacitanceExponentialCoolingCurveTimeConstantBiotNumberDiagramsvg,
            'heatPipeEvaporatorCondensorWickCapillaryActionOperationCrossSectionDiagram': PhysicsSvgDiagrams.heatPipeEvaporatorCondensorWickCapillaryActionOperationCrossSectionDiagramsvg,
            'heatTransferApplicationsBuildingElectronicsAerospaceClimateInfographic': PhysicsSvgDiagrams.heatTransferApplicationsBuildingElectronicsAerospaceClimateInfographicsvg,

// ===== WAVES =====
            'progressiveWaveEnergyTransferNotMatterDiagram': PhysicsSvgDiagrams.progressiveWaveEnergyTransferNotMatterDiagramsvg,
            'waveAnatomyAmplitudeWavelengthPeriodLabelledDiagram': PhysicsSvgDiagrams.waveAnatomyAmplitudeWavelengthPeriodLabelledDiagramsvg,
            'transverseVsLongitudinalParticleMotionDiagram': PhysicsSvgDiagrams.transverseVsLongitudinalParticleMotionDiagramsvg,
            'displacementTimeAndDisplacementPositionGraphComparison': PhysicsSvgDiagrams.displacementTimeAndDisplacementPositionGraphComparisonsvg,
            'waveSpeedTensionDensityStringDiagram': PhysicsSvgDiagrams.waveSpeedTensionDensityStringDiagramsvg,
            'inverseSquareLawPointSourceIntensityDiagram': PhysicsSvgDiagrams.inverseSquareLawPointSourceIntensityDiagramsvg,
            'malussLawPolaroidAnalyserOrientationDiagram': PhysicsSvgDiagrams.malussLawPolaroidAnalyserOrientationDiagramsvg,
            'reflectionRefractionDiffractionBoundaryComparisonDiagram': PhysicsSvgDiagrams.reflectionRefractionDiffractionBoundaryComparisonDiagramsvg,
            'dopplerWavefrontCompressionRecessionDiagram': PhysicsSvgDiagrams.dopplerWavefrontCompressionRecessionDiagramsvg,
            'phaseDifferencePathDifferenceWavelengthFractionDiagram': PhysicsSvgDiagrams.phaseDifferencePathDifferenceWavelengthFractionDiagramsvg,
            'diffractionGratingSetupAngleMeasurementDiagram': PhysicsSvgDiagrams.diffractionGratingSetupAngleMeasurementDiagramsvg,
            'ultrasoundEchoSonarDistanceCalculationDiagram': PhysicsSvgDiagrams.ultrasoundEchoSonarDistanceCalculationDiagramsvg,
            'twoOppositeProgressiveWavesSuperposingToFormStationaryDiagram': PhysicsSvgDiagrams.twoOppositeProgressiveWavesSuperposingToFormStationaryDiagramsvg,
            'nodeAntinodeLambdaHalfSpacingLabelledDiagram': PhysicsSvgDiagrams.nodeAntinodeLambdaHalfSpacingLabelledDiagramsvg,
            'firstSecondThirdHarmonicStringPatternDiagram': PhysicsSvgDiagrams.firstSecondThirdHarmonicStringPatternDiagramsvg,
            'mersennesLawsTensionLengthFrequencyRelationshipDiagram': PhysicsSvgDiagrams.mersennesLawsTensionLengthFrequencyRelationshipDiagramsvg,
            'openClosedPipeHarmonicDisplacementPressureNodeDiagram': PhysicsSvgDiagrams.openClosedPipeHarmonicDisplacementPressureNodeDiagramsvg,
            'resonanceCurveDrivingFrequencyAmplitudeQFactorDiagram': PhysicsSvgDiagrams.resonanceCurveDrivingFrequencyAmplitudeQFactorDiagramsvg,
            'stationaryWaveKineticPotentialEnergyDistributionDiagram': PhysicsSvgDiagrams.stationaryWaveKineticPotentialEnergyDistributionDiagramsvg,
            'stationaryWaveEquationSpatialTemporalFactorDiagram': PhysicsSvgDiagrams.stationaryWaveEquationSpatialTemporalFactorDiagramsvg,
            'chladniPatternSandNodal2DPlatesDiagram': PhysicsSvgDiagrams.chladniPatternSandNodal2DPlatesDiagramsvg,
            'harmonicSpectrumTimbreComparisonFluteViolinDiagram': PhysicsSvgDiagrams.harmonicSpectrumTimbreComparisonFluteViolinDiagramsvg,
            'rectangularMembrane2DModePatternDiagram': PhysicsSvgDiagrams.rectangularMembrane2DModePatternDiagramsvg,
            'laserCavityStandingEMWaveMirrorResonatorDiagram': PhysicsSvgDiagrams.laserCavityStandingEMWaveMirrorResonatorDiagramsvg,
            'constructiveDestructiveInterferencePathDifferenceConditionDiagram': PhysicsSvgDiagrams.constructiveDestructiveInterferencePathDifferenceConditionDiagramsvg,
            'youngDoubleSlitFringePatternGeometricDerivationDiagram': PhysicsSvgDiagrams.youngDoubleSlitFringePatternGeometricDerivationDiagramsvg,
            'singleSlitDiffractionIntensityProfileCentralMaximumDiagram': PhysicsSvgDiagrams.singleSlitDiffractionIntensityProfileCentralMaximumDiagramsvg,
            'diffractionGratingPrincipalMaximaOrderAngleDiagram': PhysicsSvgDiagrams.diffractionGratingPrincipalMaximaOrderAngleDiagramsvg,
            'thinFilmPhaseChangeReflectionOpticalPathDifferenceDiagram': PhysicsSvgDiagrams.thinFilmPhaseChangeReflectionOpticalPathDifferenceDiagramsvg,
            'twoSpeakerSoundInterferenceConstructiveDestructiveRegionDiagram': PhysicsSvgDiagrams.twoSpeakerSoundInterferenceConstructiveDestructiveRegionDiagramsvg,
            'phasorPolygonNSlitsResultantAmplitudeDiagram': PhysicsSvgDiagrams.phasorPolygonNSlitsResultantAmplitudeDiagramsvg,
            'beatPatternAmplitudeModulationTwoFrequencyDiagram': PhysicsSvgDiagrams.beatPatternAmplitudeModulationTwoFrequencyDiagramsvg,
            'michelsonInterferometerBeamSplitterMirrorPathDiagram': PhysicsSvgDiagrams.michelsonInterferometerBeamSplitterMirrorPathDiagramsvg,
            'braggLawCrystalPlaneXRayReflectionPathDifferenceDiagram': PhysicsSvgDiagrams.braggLawCrystalPlaneXRayReflectionPathDifferenceDiagramsvg,
            'noiseCancellingHeadphoneAntiphaseDestructiveInterferenceDiagram': PhysicsSvgDiagrams.noiseCancellingHeadphoneAntiphaseDestructiveInterferenceDiagramsvg,
            'youngExperimentMeasurementFringeWidthSlitSeparationSetupDiagram': PhysicsSvgDiagrams.youngExperimentMeasurementFringeWidthSlitSeparationSetupDiagramsvg,
            'soundWaveCompressionRarefactionPressureDisplacementDiagram': PhysicsSvgDiagrams.soundWaveCompressionRarefactionPressureDisplacementDiagramsvg,
            'soundFrequencyAmplitudePitchLoudnessRelationshipDiagram': PhysicsSvgDiagrams.soundFrequencyAmplitudePitchLoudnessRelationshipDiagramsvg,
            'speedOfSoundTemperatureDependenceAdiabaticCorrectionDiagram': PhysicsSvgDiagrams.speedOfSoundTemperatureDependenceAdiabaticCorrectionDiagramsvg,
            'decibelScaleIntensityLevelCommonSourcesTableDiagram': PhysicsSvgDiagrams.decibelScaleIntensityLevelCommonSourcesTableDiagramsvg,
            'humanEarAnatomyCochleaOssiclesLabelledCrossSectionDiagram': PhysicsSvgDiagrams.humanEarAnatomyCochleaOssiclesLabelledCrossSectionDiagramsvg,
            'openClosedPipeFundamentalHarmonicNodeAntiNodeComparisonDiagram': PhysicsSvgDiagrams.openClosedPipeFundamentalHarmonicNodeAntiNodeComparisonDiagramsvg,
            'dopplerSoundWavefrontCompressionApproachingRecedingDiagram': PhysicsSvgDiagrams.dopplerSoundWavefrontCompressionApproachingRecedingDiagramsvg,
            'ultrasoundAScanBScanAcousticImpedancePiezoelectricDiagram': PhysicsSvgDiagrams.ultrasoundAScanBScanAcousticImpedancePiezoelectricDiagramsvg,
            'infrasoundFrequencyRangeLongWavelengthLowAttenuationDiagram': PhysicsSvgDiagrams.infrasoundFrequencyRangeLongWavelengthLowAttenuationDiagramsvg,
            'reverberationTimeSabineFormulaRoomVolumeAbsorptionDiagram': PhysicsSvgDiagrams.reverberationTimeSabineFormulaRoomVolumeAbsorptionDiagramsvg,
            'fourierHarmonicSeriesTimbreWaveformComparisonDiagram': PhysicsSvgDiagrams.fourierHarmonicSeriesTimbreWaveformComparisonDiagramsvg,
            'resonanceTubeExperimentSetupEndCorrectionMeasurementDiagram': PhysicsSvgDiagrams.resonanceTubeExperimentSetupEndCorrectionMeasurementDiagramsvg,
            'emWaveMutuallyPerpendicularEBFieldPropagationDiagram': PhysicsSvgDiagrams.emWaveMutuallyPerpendicularEBFieldPropagationDiagramsvg,
            'emSpectrumFrequencyWavelengthPhotonEnergyBandsDiagram': PhysicsSvgDiagrams.emSpectrumFrequencyWavelengthPhotonEnergyBandsDiagramsvg,
            'concaveMirrorRayDiagramFocalPointImageFormationDiagram': PhysicsSvgDiagrams.concaveMirrorRayDiagramFocalPointImageFormationDiagramsvg,
            'snellsLawAngleIncidenceRefractionRefractiveIndexDiagram': PhysicsSvgDiagrams.snellsLawAngleIncidenceRefractionRefractiveIndexDiagramsvg,
            'prismWhiteLightDispersionVioletRedDeviationAngleDiagram': PhysicsSvgDiagrams.prismWhiteLightDispersionVioletRedDeviationAngleDiagramsvg,
            'thinLensRayDiagramConvergingDivergingImageTypesDiagram': PhysicsSvgDiagrams.thinLensRayDiagramConvergingDivergingImageTypesDiagramsvg,
            'compoundMicroscopeObjectiveEyepieceIntermediateImageDiagram': PhysicsSvgDiagrams.compoundMicroscopeObjectiveEyepieceIntermediateImageDiagramsvg,
            'rayleighCriterionAiryDiskCircularApertureResolutionDiagram': PhysicsSvgDiagrams.rayleighCriterionAiryDiskCircularApertureResolutionDiagramsvg,
            'brewstersAngleReflectedPolarisedLightOrientationDiagram': PhysicsSvgDiagrams.brewstersAngleReflectedPolarisedLightOrientationDiagramsvg,
            'laserStimulatedEmissionPopulationInversionCavityDiagram': PhysicsSvgDiagrams.laserStimulatedEmissionPopulationInversionCavityDiagramsvg,
            'opticalFibreCoreCladdingTotalInternalReflectionCriticalAngleDiagram': PhysicsSvgDiagrams.opticalFibreCoreCladdingTotalInternalReflectionCriticalAngleDiagramsvg,
            'luminousFluxIlluminanceLuxInverseSquareLawDiagram': PhysicsSvgDiagrams.luminousFluxIlluminanceLuxInverseSquareLawDiagramsvg,

// ===== NUCLEAR PHYSICS =====
            'atomicModelHistoricalProgressionDiagram': PhysicsSvgDiagrams.atomicModelHistoricalProgressionDiagramsvg,
            'isotopesIsobarsIsotonesNuclideComparisonChart': PhysicsSvgDiagrams.isotopesIsobarsIsotonesNuclideComparisonChartsvg,
            'nuclearRadiusMassNumberCubicRootScalingGraph': PhysicsSvgDiagrams.nuclearRadiusMassNumberCubicRootScalingGraphsvg,
            'strongWeakElectromagneticGravityForceRangeStrengthComparisonChart': PhysicsSvgDiagrams.strongWeakElectromagneticGravityForceRangeStrengthComparisonChartsvg,
            'bindingEnergyPerNucleonVsMassNumberCurve': PhysicsSvgDiagrams.bindingEnergyPerNucleonVsMassNumberCurvesvg,
            'chartOfNuclidesNeutronProtonStabilityValleyDiagram': PhysicsSvgDiagrams.chartOfNuclidesNeutronProtonStabilityValleyDiagramsvg,
            'liquidDropModelVsShellModelComparisonDiagram': PhysicsSvgDiagrams.liquidDropModelVsShellModelComparisonDiagramsvg,
            'nuclearGroundStateExcitedStateGammaTransitionLevelDiagram': PhysicsSvgDiagrams.nuclearGroundStateExcitedStateGammaTransitionLevelDiagramsvg,
            'protonNeutronUudUddQuarkCompositionDiagram': PhysicsSvgDiagrams.protonNeutronUudUddQuarkCompositionDiagramsvg,
            'energyUnitConversionJoulesToMeVToAtomicMassUnitChart': PhysicsSvgDiagrams.energyUnitConversionJoulesToMeVToAtomicMassUnitChartsvg,
            'becquerелDiscoveryBackgroundRadiationSourcesInfographic': PhysicsSvgDiagrams.becquerелDiscoveryBackgroundRadiationSourcesInfographicsvg,
            'alphaBetaGammaPenetrationAbsorbersComparisonDiagram': PhysicsSvgDiagrams.alphaBetaGammaPenetrationAbsorbersComparisonDiagramsvg,
            'exponentialDecayCurveNVsTimeWithHalfLifeMarkings': PhysicsSvgDiagrams.exponentialDecayCurveNVsTimeWithHalfLifeMarkingssvg,
            'uranium238DecaySeriesNZChartPathDiagram': PhysicsSvgDiagrams.uranium238DecaySeriesNZChartPathDiagramsvg,
            'geigerMullerTubeInternalStructureCrossSectionDiagram': PhysicsSvgDiagrams.geigerMullerTubeInternalStructureCrossSectionDiagramsvg,
            'deterministicVsStochasticRadiationDoseEffectCurvesDiagram': PhysicsSvgDiagrams.deterministicVsStochasticRadiationDoseEffectCurvesDiagramsvg,
            'carbon14AtmosphericProductionDecayEquilibriumCycleDiagram': PhysicsSvgDiagrams.carbon14AtmosphericProductionDecayEquilibriumCycleDiagramsvg,
            'petScanTechnetiumSpectGammaCameraImagingDiagram': PhysicsSvgDiagrams.petScanTechnetiumSpectGammaCameraImagingDiagramsvg,
            'betaThicknessGaugingSourceDetectorProductionLineDiagram': PhysicsSvgDiagrams.betaThicknessGaugingSourceDetectorProductionLineDiagramsvg,
            'lowIntermediateHighLevelWasteClassificationMultiBarrierDisposalDiagram': PhysicsSvgDiagrams.lowIntermediateHighLevelWasteClassificationMultiBarrierDisposalDiagramsvg,
            'nuclearReactionGeneralFormXAYBQValueConservationDiagram': PhysicsSvgDiagrams.nuclearReactionGeneralFormXAYBQValueConservationDiagramsvg,
            'elasticInelasticCaptureSpallationReactionTypeClassificationChart': PhysicsSvgDiagrams.elasticInelasticCaptureSpallationReactionTypeClassificationChartsvg,
            'reactionCrossSectionEnergyDependenceResonancePeaksDiagram': PhysicsSvgDiagrams.reactionCrossSectionEnergyDependenceResonancePeaksDiagramsvg,
            'bohrCompoundNucleusTwoStageFormationDecayDiagram': PhysicsSvgDiagrams.bohrCompoundNucleusTwoStageFormationDecayDiagramsvg,
            'strippingPickupReactionDeuteronProtonTransferAngularDistributionDiagram': PhysicsSvgDiagrams.strippingPickupReactionDeuteronProtonTransferAngularDistributionDiagramsvg,
            'neutronEnergyClassificationThermalEpithermalFastSpectrumDiagram': PhysicsSvgDiagrams.neutronEnergyClassificationThermalEpithermalFastSpectrumDiagramsvg,
            'rutherfordFirstTransmutationNitrogenAlphaOxygenProtonReactionDiagram': PhysicsSvgDiagrams.rutherfordFirstTransmutationNitrogenAlphaOxygenProtonReactionDiagramsvg,
            'stellarNucleosynthesisProtonProtonChainCNOCycleTripleAlphaPathwayDiagram': PhysicsSvgDiagrams.stellarNucleosynthesisProtonProtonChainCNOCycleTripleAlphaPathwayDiagramsvg,
            'cyclotronSynchrotronLinacAcceleratorTypesComparisonDiagram': PhysicsSvgDiagrams.cyclotronSynchrotronLinacAcceleratorTypesComparisonDiagramsvg,
            'labFrameVersusCentreOfMassFrameKinematicReactionDiagram': PhysicsSvgDiagrams.labFrameVersusCentreOfMassFrameKinematicReactionDiagramsvg,
            'bindingEnergyPerNucleonFissionFusionEnergyReleaseAnnotatedCurve': PhysicsSvgDiagrams.bindingEnergyPerNucleonFissionFusionEnergyReleaseAnnotatedCurvesvg,
            'liquidDropFissionMechanismSaddlePointDeformationSequenceDiagram': PhysicsSvgDiagrams.liquidDropFissionMechanismSaddlePointDeformationSequenceDiagramsvg,
            'subcriticalCriticalSupercriticalChainReactionNeutronMultiplicationDiagram': PhysicsSvgDiagrams.subcriticalCriticalSupercriticalChainReactionNeutronMultiplicationDiagramsvg,
            'pressurizedWaterReactorCoreCoolantSteamGeneratorSchematicDiagram': PhysicsSvgDiagrams.pressurizedWaterReactorCoreCoolantSteamGeneratorSchematicDiagramsvg,
            'gunTypeVsImplosionFissionWeaponDesignSchematicDiagram': PhysicsSvgDiagrams.gunTypeVsImplosionFissionWeaponDesignSchematicDiagramsvg,
            'coulombBarrierQuantumTunnellingGamowPeakFusionCrossSectionDiagram': PhysicsSvgDiagrams.coulombBarrierQuantumTunnellingGamowPeakFusionCrossSectionDiagramsvg,
            'tokamakToroidalPoloidalMagneticFieldPlasmaConfinementCrossSectionDiagram': PhysicsSvgDiagrams.tokamakToroidalPoloidalMagneticFieldPlasmaConfinementCrossSectionDiagramsvg,
            'tellerUlamFissionPrimaryFusionSecondaryTwoStageThermonuclearDiagram': PhysicsSvgDiagrams.tellerUlamFissionPrimaryFusionSecondaryTwoStageThermonuclearDiagramsvg,
            'fissionVsFusionFuelWasteProliferationRiskSafetyComparisonTable': PhysicsSvgDiagrams.fissionVsFusionFuelWasteProliferationRiskSafetyComparisonTablesvg,
            'nuclearElectricityCarbonFootprintLifecycleComparisonCoalGasWindDiagram': PhysicsSvgDiagrams.nuclearElectricityCarbonFootprintLifecycleComparisonCoalGasWindDiagramsvg,
            'particlePhysicsHistoricalTimelineDiscoveryMilestoneDiagram': PhysicsSvgDiagrams.particlePhysicsHistoricalTimelineDiscoveryMilestoneDiagramsvg,
            'standardModelThreeGenerationsFermionBosonPeriodicTableDiagram': PhysicsSvgDiagrams.standardModelThreeGenerationsFermionBosonPeriodicTableDiagramsvg,
            'quarkColourChargeConfinementFluxTubeBaryonMesonFormationDiagram': PhysicsSvgDiagrams.quarkColourChargeConfinementFluxTubeBaryonMesonFormationDiagramsvg,
            'leptonFamilyChargedLeptonNeutrinoMassChargeGenerationDiagram': PhysicsSvgDiagrams.leptonFamilyChargedLeptonNeutrinoMassChargeGenerationDiagramsvg,
            'photonWZGluonHiggsGaugeBosonForceRangeMassSpinComparisonChart': PhysicsSvgDiagrams.photonWZGluonHiggsGaugeBosonForceRangeMassSpinComparisonChartsvg,
            'fourFundamentalForcesStrengthRangeMediatorUnificationEnergyScaleDiagram': PhysicsSvgDiagrams.fourFundamentalForcesStrengthRangeMediatorUnificationEnergyScaleDiagramsvg,
            'absoluteVsPartialConservationLawForceApplicabilityComparisonTable': PhysicsSvgDiagrams.absoluteVsPartialConservationLawForceApplicabilityComparisonTablesvg,
            'feynmanDiagramBetaDecayElectronScatteringPairAnnihilationVertexDiagram': PhysicsSvgDiagrams.feynmanDiagramBetaDecayElectronScatteringPairAnnihilationVertexDiagramsvg,
            'particleAntimatterPairProductionAnnihilationTwoPhotonDiagram': PhysicsSvgDiagrams.particleAntimatterPairProductionAnnihilationTwoPhotonDiagramsvg,
            'supersymmetryDarkMatterCandidateGUTCouplingUnificationEnergyScaleDiagram': PhysicsSvgDiagrams.supersymmetryDarkMatterCandidateGUTCouplingUnificationEnergyScaleDiagramsvg,

// ===== ELECTRICITY =====
            'atomicStructureChargeOriginDiagram': PhysicsSvgDiagrams.atomicStructureChargeOriginDiagramsvg,
            'conventionalCurrentVsElectronFlowDiagram': PhysicsSvgDiagrams.conventionalCurrentVsElectronFlowDiagramsvg,
            'driftVelocityCarrierSweptVolumeDiagram': PhysicsSvgDiagrams.driftVelocityCarrierSweptVolumeDiagramsvg,
            'ammeterSeriesConnectionCircuitDiagram': PhysicsSvgDiagrams.ammeterSeriesConnectionCircuitDiagramsvg,
            'chargeCurrentTimeTriangleFormulaDiagram': PhysicsSvgDiagrams.chargeCurrentTimeTriangleFormulaDiagramsvg,
            'kclJunctionCurrentArrowsDiagram': PhysicsSvgDiagrams.kclJunctionCurrentArrowsDiagramsvg,
            'currentTimeGraphAreaAsChargeDiagram': PhysicsSvgDiagrams.currentTimeGraphAreaAsChargeDiagramsvg,
            'currentDensityVectorFieldCrossSectionDiagram': PhysicsSvgDiagrams.currentDensityVectorFieldCrossSectionDiagramsvg,
            'electroplatingElectrolysisCurrentMassDiagram': PhysicsSvgDiagrams.electroplatingElectrolysisCurrentMassDiagramsvg,
            'electricPotentialEnergyGravitationalAnalogyDiagram': PhysicsSvgDiagrams.electricPotentialEnergyGravitationalAnalogyDiagramsvg,
            'voltmeterParallelConnectionPotentialDividerDiagram': PhysicsSvgDiagrams.voltmeterParallelConnectionPotentialDividerDiagramsvg,
            'emfVsTerminalVoltageBatteryCircuitDiagram': PhysicsSvgDiagrams.emfVsTerminalVoltageBatteryCircuitDiagramsvg,
            'terminalVoltageVsCurrentVIGraphInternalResistanceDiagram': PhysicsSvgDiagrams.terminalVoltageVsCurrentVIGraphInternalResistanceDiagramsvg,
            'powerEnergyFormulaeSourceEfficiencyDiagram': PhysicsSvgDiagrams.powerEnergyFormulaeSourceEfficiencyDiagramsvg,
            'kvlClosedLoopPotentialRisesDropsDiagram': PhysicsSvgDiagrams.kvlClosedLoopPotentialRisesDropsDiagramsvg,
            'chargedParticleAccelerationThroughPotentialDifferenceDiagram': PhysicsSvgDiagrams.chargedParticleAccelerationThroughPotentialDifferenceDiagramsvg,
            'ohmsLawVIProportionalityGraphDiagram': PhysicsSvgDiagrams.ohmsLawVIProportionalityGraphDiagramsvg,
            'ivCharacteristicsCurvesResistorLampDiodeDiagram': PhysicsSvgDiagrams.ivCharacteristicsCurvesResistorLampDiodeDiagramsvg,
            'resistanceLengthAreaTemperatureMaterialFactorsDiagram': PhysicsSvgDiagrams.resistanceLengthAreaTemperatureMaterialFactorsDiagramsvg,
            'resistivityGeometryDerivationCubeDiagram': PhysicsSvgDiagrams.resistivityGeometryDerivationCubeDiagramsvg,
            'resistanceTemperatureGraphMetalSemiconductorSuperconductorDiagram': PhysicsSvgDiagrams.resistanceTemperatureGraphMetalSemiconductorSuperconductorDiagramsvg,
            'seriesParallelResistorNetworkEquivalentDiagram': PhysicsSvgDiagrams.seriesParallelResistorNetworkEquivalentDiagramsvg,
            'conductivityResistivityReciprocalRelationshipDiagram': PhysicsSvgDiagrams.conductivityResistivityReciprocalRelationshipDiagramsvg,
            'wheatstoneBalanceBridgeCircuitDiagram': PhysicsSvgDiagrams.wheatstoneBalanceBridgeCircuitDiagramsvg,
            'circuitTopologyNodesBranchesLoopsDiagram': PhysicsSvgDiagrams.circuitTopologyNodesBranchesLoopsDiagramsvg,
            'seriesCircuitCurrentVoltageSharingDiagram': PhysicsSvgDiagrams.seriesCircuitCurrentVoltageSharingDiagramsvg,
            'parallelCircuitCurrentDivisionBranchesDiagram': PhysicsSvgDiagrams.parallelCircuitCurrentDivisionBranchesDiagramsvg,
            'kirchhoffKclKvlTwoLoopLabelledCircuitDiagram': PhysicsSvgDiagrams.kirchhoffKclKvlTwoLoopLabelledCircuitDiagramsvg,
            'potentialDividerLoadedUnloadedOutputVoltageDiagram': PhysicsSvgDiagrams.potentialDividerLoadedUnloadedOutputVoltageDiagramsvg,
            'wheatstoneBridgeDiamondLayoutBalanceConditionDiagram': PhysicsSvgDiagrams.wheatstoneBridgeDiamondLayoutBalanceConditionDiagramsvg,
            'ammeterVoltmeterLoadingEffectCircuitDiagram': PhysicsSvgDiagrams.ammeterVoltmeterLoadingEffectCircuitDiagramsvg,
            'maximumPowerTransferPvsRCurveDiagram': PhysicsSvgDiagrams.maximumPowerTransferPvsRCurveDiagramsvg,
            'theveninNortonEquivalentCircuitTransformationDiagram': PhysicsSvgDiagrams.theveninNortonEquivalentCircuitTransformationDiagramsvg,
            'workDoneByChargePotentialDifferenceEnergyDiagram': PhysicsSvgDiagrams.workDoneByChargePotentialDifferenceEnergyDiagramsvg,
            'powerFormulaTriangleIVRI2RV2RDiagram': PhysicsSvgDiagrams.powerFormulaTriangleIVRI2RV2RDiagramsvg,
            'jouleHeatingElectronLatticeCollisionMechanismDiagram': PhysicsSvgDiagrams.jouleHeatingElectronLatticeCollisionMechanismDiagramsvg,
            'sankeyDiagramUsefulWastedEnergyFlowDiagram': PhysicsSvgDiagrams.sankeyDiagramUsefulWastedEnergyFlowDiagramsvg,
            'kilowattHourElectricityMeterReadingCostDiagram': PhysicsSvgDiagrams.kilowattHourElectricityMeterReadingCostDiagramsvg,
            'nationalGridStepUpStepDownTransformerVoltageDiagram': PhysicsSvgDiagrams.nationalGridStepUpStepDownTransformerVoltageDiagramsvg,
            'acPeakRmsVoltageSinusoidalWaveformDiagram': PhysicsSvgDiagrams.acPeakRmsVoltageSinusoidalWaveformDiagramsvg,
            'renewableVsFossilFuelEfficiencyComparisonSankeyDiagram': PhysicsSvgDiagrams.renewableVsFossilFuelEfficiencyComparisonSankeyDiagramsvg,
            'capacitorPlatesDielectricElectricFieldChargeSeparationDiagram': PhysicsSvgDiagrams.capacitorPlatesDielectricElectricFieldChargeSeparationDiagramsvg,
            'chargeVoltageQVGraphGradientAsCapacitanceDiagram': PhysicsSvgDiagrams.chargeVoltageQVGraphGradientAsCapacitanceDiagramsvg,
            'parallelPlateCapacitorPermittivityAreaSeparationDiagram': PhysicsSvgDiagrams.parallelPlateCapacitorPermittivityAreaSeparationDiagramsvg,
            'capacitorEnergyTriangleAreaUnderQVGraphDiagram': PhysicsSvgDiagrams.capacitorEnergyTriangleAreaUnderQVGraphDiagramsvg,
            'seriesParallelCapacitorCombinationEquivalentDiagram': PhysicsSvgDiagrams.seriesParallelCapacitorCombinationEquivalentDiagramsvg,
            'rcCircuitChargingDischargingExponentialCurveTimeConstantDiagram': PhysicsSvgDiagrams.rcCircuitChargingDischargingExponentialCurveTimeConstantDiagramsvg,
            'lnVvsTimeLinearGraphGradientTimeConstantDiagram': PhysicsSvgDiagrams.lnVvsTimeLinearGraphGradientTimeConstantDiagramsvg,
            'capacitorApplicationsFlashSmoothingTimingFilterDiagram': PhysicsSvgDiagrams.capacitorApplicationsFlashSmoothingTimingFilterDiagramsvg,
            'incidentReflectedRayNormalLabelledDiagram': PhysicsSvgDiagrams.incidentReflectedRayNormalLabelledDiagramsvg,
            'angleOfIncidenceEqualsAngleOfReflectionProofDiagram': PhysicsSvgDiagrams.angleOfIncidenceEqualsAngleOfReflectionProofDiagramsvg,
            'planeMirrorVirtualImageLocationRayDiagram': PhysicsSvgDiagrams.planeMirrorVirtualImageLocationRayDiagramsvg,
            'concaveMirrorFocalPointCentreOfCurvatureRayDiagram': PhysicsSvgDiagrams.concaveMirrorFocalPointCentreOfCurvatureRayDiagramsvg,
            'convexMirrorVirtualDiminishedImageFieldOfViewDiagram': PhysicsSvgDiagrams.convexMirrorVirtualDiminishedImageFieldOfViewDiagramsvg,
            'criticalAngleTotalInternalReflectionGlassAirDiagram': PhysicsSvgDiagrams.criticalAngleTotalInternalReflectionGlassAirDiagramsvg,
            'threeStandardRaysMirrorConstructionStepDiagram': PhysicsSvgDiagrams.threeStandardRaysMirrorConstructionStepDiagramsvg,
            'sphericalAberrationParaxialMarginalRayFocusDiagram': PhysicsSvgDiagrams.sphericalAberrationParaxialMarginalRayFocusDiagramsvg,
            'newtonianReflectingTelescopeMirrorLayoutDiagram': PhysicsSvgDiagrams.newtonianReflectingTelescopeMirrorLayoutDiagramsvg,
            'selectiveReflectionObjectColourAbsorptionSpectrumDiagram': PhysicsSvgDiagrams.selectiveReflectionObjectColourAbsorptionSpectrumDiagramsvg,
            'refractionBendingTowardNormalAirGlassBoundaryDiagram': PhysicsSvgDiagrams.refractionBendingTowardNormalAirGlassBoundaryDiagramsvg,
            'refractiveIndexSpeedOfLightMediumComparisonChart': PhysicsSvgDiagrams.refractiveIndexSpeedOfLightMediumComparisonChartsvg,
            'snellsLawSinRatioAngleBoundaryProofDiagram': PhysicsSvgDiagrams.snellsLawSinRatioAngleBoundaryProofDiagramsvg,
            'opticalFibreCoreCladdingTotalInternalReflectionPathDiagram': PhysicsSvgDiagrams.opticalFibreCoreCladdingTotalInternalReflectionPathDiagramsvg,
            'realApparentDepthObserverRayTracingPoolDiagram': PhysicsSvgDiagrams.realApparentDepthObserverRayTracingPoolDiagramsvg,
            'prismMinimumDeviationSymmetricRayPathDiagram': PhysicsSvgDiagrams.prismMinimumDeviationSymmetricRayPathDiagramsvg,
            'atmosphericLayersGradualRayBendingSunrisePositionDiagram': PhysicsSvgDiagrams.atmosphericLayersGradualRayBendingSunrisePositionDiagramsvg,
            'frequencyWavelengthSpeedChangeBoundaryComparisonDiagram': PhysicsSvgDiagrams.frequencyWavelengthSpeedChangeBoundaryComparisonDiagramsvg,
            'myopiaHyperopiaCornetingLensRayDiagramCorrections': PhysicsSvgDiagrams.myopiaHyperopiaCornetingLensRayDiagramCorrectionssvg,
            'glassBlockExperimentTracingPinsNormalIncidentRefractedRaySetupDiagram': PhysicsSvgDiagrams.glassBlockExperimentTracingPinsNormalIncidentRefractedRaySetupDiagramsvg,
            'convexConcaveLensShapeFocalPointPrincipalAxisLabelledDiagram': PhysicsSvgDiagrams.convexConcaveLensShapeFocalPointPrincipalAxisLabelledDiagramsvg,
            'thinLensFormulaSignConventionObjectImageDistanceDiagram': PhysicsSvgDiagrams.thinLensFormulaSignConventionObjectImageDistanceDiagramsvg,
            'linearMagnificationImageHeightObjectHeightRatioDiagram': PhysicsSvgDiagrams.linearMagnificationImageHeightObjectHeightRatioDiagramsvg,
            'threeStandardRaysConvexLensAllObjectPositionsImageTableDiagram': PhysicsSvgDiagrams.threeStandardRaysConvexLensAllObjectPositionsImageTableDiagramsvg,
            'lensesInContactCombinedPowerDioptresAdditionDiagram': PhysicsSvgDiagrams.lensesInContactCombinedPowerDioptresAdditionDiagramsvg,
            'chromaticAberrationAchromaticDoubletCrownFlintGlassDiagram': PhysicsSvgDiagrams.chromaticAberrationAchromaticDoubletCrownFlintGlassDiagramsvg,
            'compoundMicroscopeObjectiveEyepieceMagnificationRayPathDiagram': PhysicsSvgDiagrams.compoundMicroscopeObjectiveEyepieceMagnificationRayPathDiagramsvg,
            'twoLensSeparatedSystemIntermediateImageRayTracingDiagram': PhysicsSvgDiagrams.twoLensSeparatedSystemIntermediateImageRayTracingDiagramsvg,
            'fresnelLensConcentriRingsEquivalentConvexLensComparisonDiagram': PhysicsSvgDiagrams.fresnelLensConcentriRingsEquivalentConvexLensComparisonDiagramsvg,
            'besselMethodDisplacementTwoPositionsFocalLengthSetupDiagram': PhysicsSvgDiagrams.besselMethodDisplacementTwoPositionsFocalLengthSetupDiagramsvg,
            'huygensWaveletSecondarySourcesNewWavefrontConstructionDiagram': PhysicsSvgDiagrams.huygensWaveletSecondarySourcesNewWavefrontConstructionDiagramsvg,
            'youngDoubleSlit PathDifferenceConstructiveDestructiveFringeDiagram': PhysicsSvgDiagrams['youngDoubleSlit PathDifferenceConstructiveDestructiveFringeDiagram'+'svg'],
            'singleSlitCentralMaximaSecondaryMaximaDarkFringesDiffractionPatternDiagram': PhysicsSvgDiagrams.singleSlitCentralMaximaSecondaryMaximaDarkFringesDiffractionPatternDiagramsvg,
            'malussLawPolariserAnalyserAngleIntensityCosineDiagram': PhysicsSvgDiagrams.malussLawPolariserAnalyserAngleIntensityCosineDiagramsvg,
            'laserCoherentVsIncoherentSourceWavefrontComparisonDiagram': PhysicsSvgDiagrams.laserCoherentVsIncoherentSourceWavefrontComparisonDiagramsvg,
            'rayleighCriterionTwoPointSourcesDiffractionPatternOverlapDiagram': PhysicsSvgDiagrams.rayleighCriterionTwoPointSourcesDiffractionPatternOverlapDiagramsvg,
            'hologramRecordingReconstructionObjectReferenceBeamInterferenceDiagram': PhysicsSvgDiagrams.hologramRecordingReconstructionObjectReferenceBeamInterferenceDiagramsvg,
            'electromagneticSpectrumWavelengthFrequencyEnergyScaleDiagram': PhysicsSvgDiagrams.electromagneticSpectrumWavelengthFrequencyEnergyScaleDiagramsvg,
            'xrayDiffractionBraggPlanesCrystalLatticeSpacingDiagram': PhysicsSvgDiagrams.xrayDiffractionBraggPlanesCrystalLatticeSpacingDiagramsvg,
            'photoelectricEffectThresholdFrequencyMaxKineticEnergyGraphDiagram': PhysicsSvgDiagrams.photoelectricEffectThresholdFrequencyMaxKineticEnergyGraphDiagramsvg,
            'cauchyEquationRefractiveIndexWavelengthNormalDispersionCurveDiagram': PhysicsSvgDiagrams.cauchyEquationRefractiveIndexWavelengthNormalDispersionCurveDiagramsvg,
            'prismWhiteLightDispersionAngularSpreadVioletRedDiagram': PhysicsSvgDiagrams.prismWhiteLightDispersionAngularSpreadVioletRedDiagramsvg,
            'primaryRainbowRaindropRefractionInternalReflectionAngles42DegreeDiagram': PhysicsSvgDiagrams.primaryRainbowRaindropRefractionInternalReflectionAngles42DegreeDiagramsvg,
            'continuousEmissionAbsorptionBlackbodySpectraComparisonDiagram': PhysicsSvgDiagrams.continuousEmissionAbsorptionBlackbodySpectraComparisonDiagramsvg,
            'hydrogenBohrModelEnergyLevelTransitionsBalmerSeriesDiagram': PhysicsSvgDiagrams.hydrogenBohrModelEnergyLevelTransitionsBalmerSeriesDiagramsvg,
            'obafgkmSpectralClassTemperatureColourAbsorptionLineSummaryDiagram': PhysicsSvgDiagrams.obafgkmSpectralClassTemperatureColourAbsorptionLineSummaryDiagramsvg,
            'diffractionGratingOrdersSpectrumAngularPositionWavelengthDiagram': PhysicsSvgDiagrams.diffractionGratingOrdersSpectrumAngularPositionWavelengthDiagramsvg,
            'additiveSubtractiveColourMixingRGBCMYPrimarysDiagram': PhysicsSvgDiagrams.additiveSubtractiveColourMixingRGBCMYPrimarysDiagramsvg,
            'beerLambertLawAbsorbanceConcentrationPathLengthSetupDiagram': PhysicsSvgDiagrams.beerLambertLawAbsorbanceConcentrationPathLengthSetupDiagramsvg,
            'redshiftBlueshiftSpectralLineDisplacementRecessingApproachingSourceDiagram': PhysicsSvgDiagrams.redshiftBlueshiftSpectralLineDisplacementRecessingApproachingSourceDiagramsvg,

// ===== MECHANICS =====
            'displacementVsDistanceVectorScalarDiagram': PhysicsSvgDiagrams.displacementVsDistanceVectorScalarDiagramsvg,
            'averageVsInstantaneousVelocityTangentDiagram': PhysicsSvgDiagrams.averageVsInstantaneousVelocityTangentDiagramsvg,
            'uniformNonUniformAccelerationVelocityTimeGraph': PhysicsSvgDiagrams.uniformNonUniformAccelerationVelocityTimeGraphsvg,
            'suvatEquationSelectionFlowchart': PhysicsSvgDiagrams.suvatEquationSelectionFlowchartsvg,
            'freeFallTerminalVelocityVelocityTimeGraph': PhysicsSvgDiagrams.freeFallTerminalVelocityVelocityTimeGraphsvg,
            'projectileParabolicTrajectoryComponentsDiagram': PhysicsSvgDiagrams.projectileParabolicTrajectoryComponentsDiagramsvg,
            'displacementVelocityAccelerationTimeGraphsTrioDiagram': PhysicsSvgDiagrams.displacementVelocityAccelerationTimeGraphsTrioDiagramsvg,
            'relativeVelocityVectorSubtractionRiverCrossingDiagram': PhysicsSvgDiagrams.relativeVelocityVectorSubtractionRiverCrossingDiagramsvg,
            'twoDimensionalVectorComponentsResolutionDiagram': PhysicsSvgDiagrams.twoDimensionalVectorComponentsResolutionDiagramsvg,
            'differentiationIntegrationKinematicLinksDiagram': PhysicsSvgDiagrams.differentiationIntegrationKinematicLinksDiagramsvg,
            'uniformUniformlyAcceleratedNonUniformGraphComparisonDiagram': PhysicsSvgDiagrams.uniformUniformlyAcceleratedNonUniformGraphComparisonDiagramsvg,
            'freeBodyDiagramForceLabellingTemplate': PhysicsSvgDiagrams.freeBodyDiagramForceLabellingTemplatesvg,
            'newtonThreeLawsActionReactionPairsDiagram': PhysicsSvgDiagrams.newtonThreeLawsActionReactionPairsDiagramsvg,
            'contactNonContactForcesClassificationDiagram': PhysicsSvgDiagrams.contactNonContactForcesClassificationDiagramsvg,
            'atwoodMachineConnectedBodyFreeBodyDiagram': PhysicsSvgDiagrams.atwoodMachineConnectedBodyFreeBodyDiagramsvg,
            'inverseSquearedGravitationalFieldLinesDistanceDiagram': PhysicsSvgDiagrams.inverseSquearedGravitationalFieldLinesDistanceDiagramsvg,
            'staticEquilibriumForceTriangleConcurrentForcesDiagram': PhysicsSvgDiagrams.staticEquilibriumForceTriangleConcurrentForcesDiagramsvg,
            'staticKineticFrictionForceAppliedForceComparisonGraph': PhysicsSvgDiagrams.staticKineticFrictionForceAppliedForceComparisonGraphsvg,
            'pseudoForceCentrifugalCoriolisRotatingFrameDiagram': PhysicsSvgDiagrams.pseudoForceCentrifugalCoriolisRotatingFrameDiagramsvg,
            'forceTimeGraphImpulseAreaVariableForceDiagram': PhysicsSvgDiagrams.forceTimeGraphImpulseAreaVariableForceDiagramsvg,
            'tensionVariationAlongMassiveStringDiagram': PhysicsSvgDiagrams.tensionVariationAlongMassiveStringDiagramsvg,
            'energyFormsTransformationFlowDiagram': PhysicsSvgDiagrams.energyFormsTransformationFlowDiagramsvg,
            'workDoneForceDisplacementAngleDiagram': PhysicsSvgDiagrams.workDoneForceDisplacementAngleDiagramsvg,
            'kineticEnergyVelocitySquaredProportionalityGraph': PhysicsSvgDiagrams.kineticEnergyVelocitySquaredProportionalityGraphsvg,
            'netWorkKineticEnergyChangeRelationshipDiagram': PhysicsSvgDiagrams.netWorkKineticEnergyChangeRelationshipDiagramsvg,
            'gravitationalElasticPotentialEnergyComparisonDiagram': PhysicsSvgDiagrams.gravitationalElasticPotentialEnergyComparisonDiagramsvg,
            'pendulumKineticPotentialEnergyExchangeDiagram': PhysicsSvgDiagrams.pendulumKineticPotentialEnergyExchangeDiagramsvg,
            'mechanicalEnergyLossFrictionThermalDissipationDiagram': PhysicsSvgDiagrams.mechanicalEnergyLossFrictionThermalDissipationDiagramsvg,
            'powerVelocityRelationshipEngineOutputDiagram': PhysicsSvgDiagrams.powerVelocityRelationshipEngineOutputDiagramsvg,
            'springMassKineticElasticPotentialEnergyPositionGraph': PhysicsSvgDiagrams.springMassKineticElasticPotentialEnergyPositionGraphsvg,
            'renewableEnergyConversionChainHydroWindSolarDiagram': PhysicsSvgDiagrams.renewableEnergyConversionChainHydroWindSolarDiagramsvg,
            'linearMomentumMassVelocityVectorDiagram': PhysicsSvgDiagrams.linearMomentumMassVelocityVectorDiagramsvg,
            'forceTimeGraphImpulseAreaAverageForceDiagram': PhysicsSvgDiagrams.forceTimeGraphImpulseAreaAverageForceDiagramsvg,
            'beforeAfterCollisionMomentumVectorsDiagram': PhysicsSvgDiagrams.beforeAfterCollisionMomentumVectorsDiagramsvg,
            'elasticInelasticPerfectlyInelasticKineticEnergyComparisonDiagram': PhysicsSvgDiagrams.elasticInelasticPerfectlyInelasticKineticEnergyComparisonDiagramsvg,
            'bouncingBallDropHeightRestitutionCoefficientDiagram': PhysicsSvgDiagrams.bouncingBallDropHeightRestitutionCoefficientDiagramsvg,
            'explosionRecoilMomentumConservationVectorDiagram': PhysicsSvgDiagrams.explosionRecoilMomentumConservationVectorDiagramsvg,
            'centreOfMassDiscreteAndContinuousSystemsDiagram': PhysicsSvgDiagrams.centreOfMassDiscreteAndContinuousSystemsDiagramsvg,
            'twoDimensionalGlancingCollisionComponentVectorsDiagram': PhysicsSvgDiagrams.twoDimensionalGlancingCollisionComponentVectorsDiagramsvg,
            'angularMomentumConservationSpinnerArmExtensionDiagram': PhysicsSvgDiagrams.angularMomentumConservationSpinnerArmExtensionDiagramsvg,
            'ballisticPendulumMomentumEnergyTwoStageDiagram': PhysicsSvgDiagrams.ballisticPendulumMomentumEnergyTwoStageDiagramsvg,
            'angularDisplacementRadiansDegreesRevolutionsDiagram': PhysicsSvgDiagrams.angularDisplacementRadiansDegreesRevolutionsDiagramsvg,
            'angularLinearVelocityRelationshipRotatingDiscDiagram': PhysicsSvgDiagrams.angularLinearVelocityRelationshipRotatingDiscDiagramsvg,
            'centripetalAccelerationInwardVelocityTangentDiagram': PhysicsSvgDiagrams.centripetalAccelerationInwardVelocityTangentDiagramsvg,
            'conicalPendulumBankedRoadSatelliteOrbitForcesDiagram': PhysicsSvgDiagrams.conicalPendulumBankedRoadSatelliteOrbitForcesDiagramsvg,
            'verticalCircleTopBottomTensionWeightForcesDiagram': PhysicsSvgDiagrams.verticalCircleTopBottomTensionWeightForcesDiagramsvg,
            'torqueLeverArmPerpendicularForceDistanceDiagram': PhysicsSvgDiagrams.torqueLeverArmPerpendicularForceDistanceDiagramsvg,
            'momentOfInertiaMassDistributionAxisComparisonDiagram': PhysicsSvgDiagrams.momentOfInertiaMassDistributionAxisComparisonDiagramsvg,
            'rollingObjectTranslationalRotationalKineticEnergySplitDiagram': PhysicsSvgDiagrams.rollingObjectTranslationalRotationalKineticEnergySplitDiagramsvg,
            'angularMomentumConservationMomentOfInertiaOmegaProductDiagram': PhysicsSvgDiagrams.angularMomentumConservationMomentOfInertiaOmegaProductDiagramsvg,
            'gyroscopePrecessionTorqueAngularMomentumVectorDiagram': PhysicsSvgDiagrams.gyroscopePrecessionTorqueAngularMomentumVectorDiagramsvg,
            'oscillationAmplitudePeriodFrequencyPhaseLabelledDiagram': PhysicsSvgDiagrams.oscillationAmplitudePeriodFrequencyPhaseLabelledDiagramsvg,
            'shmDisplacementVelocityAccelerationPhaseRelationshipGraph': PhysicsSvgDiagrams.shmDisplacementVelocityAccelerationPhaseRelationshipGraphsvg,
            'shmKineticPotentialTotalEnergyVsDisplacementGraph': PhysicsSvgDiagrams.shmKineticPotentialTotalEnergyVsDisplacementGraphsvg,
            'springMassHorizontalVerticalEquilibriumOscillationDiagram': PhysicsSvgDiagrams.springMassHorizontalVerticalEquilibriumOscillationDiagramsvg,
            'simplePendulumLengthAngleRestoringForceDiagram': PhysicsSvgDiagrams.simplePendulumLengthAngleRestoringForceDiagramsvg,
            'compoundTorsionalPendulumLCCircuitSHMAnalogiesDiagram': PhysicsSvgDiagrams.compoundTorsionalPendulumLCCircuitSHMAnalogiesDiagramsvg,
            'underdampedCriticallyDampedOverdampedDisplacementTimeComparison': PhysicsSvgDiagrams.underdampedCriticallyDampedOverdampedDisplacementTimeComparisonsvg,
            'resonanceFrequencyResponseAmplitudeCurveQFactorDiagram': PhysicsSvgDiagrams.resonanceFrequencyResponseAmplitudeCurveQFactorDiagramsvg,
            'coupledPendulumNormalModesSymmetricAntisymmetricDiagram': PhysicsSvgDiagrams.coupledPendulumNormalModesSymmetricAntisymmetricDiagramsvg,
            'standingWaveNodesAntinodesParticlesSHMDiagram': PhysicsSvgDiagrams.standingWaveNodesAntinodesParticlesSHMDiagramsvg,

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
