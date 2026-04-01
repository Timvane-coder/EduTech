
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { ChemistrySvgDiagrams } from './chemistrysvg.js';
import { ChemistryDiagramsRegistry } from './chemistryregistry.js';

class ChemistryDiagramRenderer {
    constructor(canvas = null) {
        this.defaultFont = 'Arial, sans-serif';
        this.defaultFontSize = 12;
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
        this.currentFrame = 0;
    }

    async renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = ChemistryDiagramsRegistry.getDiagram(diagramKey);
        
        if (!diagram) {
            throw new Error(`Chemistry diagram '${diagramKey}' not found`);
        }

        const mergedOptions = { ...diagram.defaultOptions, ...options };

        // Create a new canvas for this diagram
        const diagramCanvas = createCanvas(width, height);
        const ctx = diagramCanvas.getContext('2d');

        // Clear background
        ctx.fillStyle = mergedOptions.backgroundColor;
        ctx.fillRect(0, 0, width, height);

        try {
            // Get the corresponding SVG from ChemistrySvgDiagrams
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


            // ===== ORGANIC CHEMISTRY =====
            'organicStructuralFormula': ChemistrySvgDiagrams.organicStructuralFormulaSvg,
            'skeletalFormula': ChemistrySvgDiagrams.skeletalFormulaSvg,
            'balancingEquations': ChemistrySvgDiagrams.balancingEquationsSvg,
            'isomers': ChemistrySvgDiagrams.isomersSvg,
            'reactionMechanism': ChemistrySvgDiagrams.reactionMechanismSvg,
            'polymerization': ChemistrySvgDiagrams.polymerizationSvg,
            'sigmaPiBonds': ChemistrySvgDiagrams.sigmaPiBondsSvg,
            'aromaticRing': ChemistrySvgDiagrams.aromaticRingSvg,
            'energyProfile': ChemistrySvgDiagrams.energyProfileSvg,
            'functionalGroups': ChemistrySvgDiagrams.functionalGroupsSvg,
            'resonanceStructures': ChemistrySvgDiagrams.resonanceStructuresSvg,



            // ===== LABORATORY CHEMISTRY - GLASSWARE =====
            'buretteApparatus': ChemistrySvgDiagrams.buretteApparatusSvg,
            'pipetteApparatus': ChemistrySvgDiagrams.pipetteApparatusSvg,
            'volumetricFlaskDetailedApparatus': ChemistrySvgDiagrams.volumetricFlaskDetailedApparatusSvg,
            'beakerApparatus': ChemistrySvgDiagrams.beakerApparatusSvg,
            'conicalFlaskApparatus': ChemistrySvgDiagrams.conicalFlaskApparatusSvg,
            'measuringCylinderDetailedApparatus': ChemistrySvgDiagrams.measuringCylinderDetailedApparatusSvg,
            'roundBottomFlaskApparatus': ChemistrySvgDiagrams.roundBottomFlaskApparatusSvg,
            'testTubeApparatus': ChemistrySvgDiagrams.testTubeApparatusSvg,
            'boilingTubeApparatus': ChemistrySvgDiagrams.boilingTubeApparatusSvg,
            'watchGlassApparatus': ChemistrySvgDiagrams.watchGlassApparatusSvg,
            'crucibleApparatus': ChemistrySvgDiagrams.crucibleApparatusSvg,
            'evaporatingDishApparatus': ChemistrySvgDiagrams.evaporatingDishApparatusSvg,
            'funnelApparatus': ChemistrySvgDiagrams.funnelApparatusSvg,
            'buchnerFunnelApparatus': ChemistrySvgDiagrams.buchnerFunnelApparatusSvg,
            'separatoryFunnelApparatus': ChemistrySvgDiagrams.separatoryFunnelApparatusSvg,
            'mortarPestleApparatus': ChemistrySvgDiagrams.mortarPestleApparatusSvg,
            'spatulaApparatus': ChemistrySvgDiagrams.spatulaApparatusSvg,
            'stirringRodApparatus': ChemistrySvgDiagrams.stirringRodApparatusSvg,
            'thermometerApparatus': ChemistrySvgDiagrams.thermometerApparatusSvg,
            'dropperApparatus': ChemistrySvgDiagrams.dropperApparatusSvg,

            // ===== LABORATORY CHEMISTRY - HEATING =====
            'bunsenBurnerApparatus': ChemistrySvgDiagrams.bunsenBurnerApparatusSvg,
            'hotPlateApparatus': ChemistrySvgDiagrams.hotPlateApparatusSvg,
            'waterBathApparatus': ChemistrySvgDiagrams.waterBathApparatusSvg,
            'oilBathApparatus': ChemistrySvgDiagrams.oilBathApparatusSvg,
            'heatingMantleApparatus': ChemistrySvgDiagrams.heatingMantleApparatusSvg,
            'condenserApparatus': ChemistrySvgDiagrams.condenserApparatusSvg,

            // ===== LABORATORY CHEMISTRY - SEPARATION =====
            'distillationApparatus': ChemistrySvgDiagrams.distillationApparatusSvg,
            'fractionalDistillationApparatus': ChemistrySvgDiagrams.fractionalDistillationApparatusSvg,
            'refluxApparatus': ChemistrySvgDiagrams.refluxApparatusSvg,
            'separatingFunnelApparatus': ChemistrySvgDiagrams.separatingFunnelApparatusSvg,
            'recrystallizationApparatus': ChemistrySvgDiagrams.recrystallizationApparatusSvg,
            'chromatographyApparatus': ChemistrySvgDiagrams.chromatographyApparatusSvg,
            'soxhletExtractorApparatus': ChemistrySvgDiagrams.soxhletExtractorApparatusSvg,

            // ===== LABORATORY CHEMISTRY - MEASUREMENT =====
            'analyticalBalanceApparatus': ChemistrySvgDiagrams.analyticalBalanceApparatusSvg,
            'pHMeterApparatus': ChemistrySvgDiagrams.pHMeterApparatusSvg,
            'microPipetteApparatus': ChemistrySvgDiagrams.microPipetteApparatusSvg,
            'conductivityCellApparatus': ChemistrySvgDiagrams.conductivityCellApparatusSvg,

            // ===== LABORATORY CHEMISTRY - MIXING =====
            'magneticStirrerApparatus': ChemistrySvgDiagrams.magneticStirrerApparatusSvg,
            'vortexMixerApparatus': ChemistrySvgDiagrams.vortexMixerApparatusSvg,

            // ===== LABORATORY CHEMISTRY - SAFETY =====
            'fumeHoodApparatus': ChemistrySvgDiagrams.fumeHoodApparatusSvg,
            'safetyShowerApparatus': ChemistrySvgDiagrams.safetyShowerApparatusSvg,
            'fireExtinguisherApparatus': ChemistrySvgDiagrams.fireExtinguisherApparatusSvg,
            'ppeKitApparatus': ChemistrySvgDiagrams.ppeKitApparatusSvg,
            'spillKitApparatus': ChemistrySvgDiagrams.spillKitApparatusSvg,

            // ===== LABORATORY CHEMISTRY - SPECIALIZED =====
            'centrifugeApparatus': ChemistrySvgDiagrams.centrifugeApparatusSvg,
            'autoclaveApparatus': ChemistrySvgDiagrams.autoclaveApparatusSvg,
            'vacuumPumpApparatus': ChemistrySvgDiagrams.vacuumPumpApparatusSvg,
            'aspiratorApparatus': ChemistrySvgDiagrams.aspiratorApparatusSvg,
            'rotaryEvaporatorApparatus': ChemistrySvgDiagrams.rotaryEvaporatorApparatusSvg,
            'desiccatorApparatus': ChemistrySvgDiagrams.desiccatorApparatusSvg,
            'labNotebookApparatus': ChemistrySvgDiagrams.labNotebookApparatusSvg,
            'glassElectrodeApparatus': ChemistrySvgDiagrams.glassElectrodeApparatusSvg,

            // ===== ATOMIC STRUCTURE =====
            'atomicStructureDiagram': ChemistrySvgDiagrams.atomicStructureDiagramSvg,
            'electronConfigurationDiagram': ChemistrySvgDiagrams.electronConfigurationDiagramSvg,
            'orbitalShapesDiagram': ChemistrySvgDiagrams.orbitalShapesDiagramSvg,
            'isotopeDiagram': ChemistrySvgDiagrams.isotopeDiagramSvg,
            'ionFormationDiagram': ChemistrySvgDiagrams.ionFormationDiagramSvg,
            'ionizationEnergyGraph': ChemistrySvgDiagrams.ionizationEnergyGraphSvg,
            'atomicRadiusTrends': ChemistrySvgDiagrams.atomicRadiusTrendsSvg,
            'electronAffinityDiagram': ChemistrySvgDiagrams.electronAffinityDiagramSvg,
            'massSpectrometerChemistry': ChemistrySvgDiagrams.massSpectrometerChemistrySvg,
            'flameTestApparatus': ChemistrySvgDiagrams.flameTestApparatusSvg,
            'emissionSpectroscopyApparatus': ChemistrySvgDiagrams.emissionSpectroscopyApparatusSvg,
            'photoelectronSpectroscopyApparatus': ChemistrySvgDiagrams.photoelectronSpectroscopyApparatusSvg,

            // ===== CHEMICAL BONDING =====
            'ionicBondingDiagram': ChemistrySvgDiagrams.ionicBondingDiagramSvg,
            'covalentBondingDiagram': ChemistrySvgDiagrams.covalentBondingDiagramSvg,
            'lewisStructureDiagram': ChemistrySvgDiagrams.lewisStructureDiagramSvg,
            'vseprTheoryDiagram': ChemistrySvgDiagrams.vseprTheoryDiagramSvg,
            'polarityDiagram': ChemistrySvgDiagrams.polarityDiagramSvg,
            'hybridizationDiagram': ChemistrySvgDiagrams.hybridizationDiagramSvg,
            'molecularOrbitalDiagram': ChemistrySvgDiagrams.molecularOrbitalDiagramSvg,
            'hydrogenBondingDiagram': ChemistrySvgDiagrams.hydrogenBondingDiagramSvg,
            'intermolecularForcesDiagram': ChemistrySvgDiagrams.intermolecularForcesDiagramSvg,
            'crystalLatticeDiagram': ChemistrySvgDiagrams.crystalLatticeDiagramSvg,
            'metallicBondingDiagram': ChemistrySvgDiagrams.metallicBondingDiagramSvg,
            'electrolysisCellApparatus': ChemistrySvgDiagrams.electrolysisCellApparatusSvg,
            'conductivityTesterApparatus': ChemistrySvgDiagrams.conductivityTesterApparatusSvg,

            // ===== STOICHIOMETRY =====
            'moleDiagram': ChemistrySvgDiagrams.moleDiagramSvg,
            'stoichiometryMapDiagram': ChemistrySvgDiagrams.stoichiometryMapDiagramSvg,
            'limitingReagentDiagram': ChemistrySvgDiagrams.limitingReagentDiagramSvg,
            'percentYieldDiagram': ChemistrySvgDiagrams.percentYieldDiagramSvg,
            'empiricalFormulaDerivation': ChemistrySvgDiagrams.empiricalFormulaDerivationSvg,
            'molecularFormulaVsEmpirical': ChemistrySvgDiagrams.molecularFormulaVsEmpiricalSvg,
            'volumetricFlaskApparatus': ChemistrySvgDiagrams.volumetricFlaskApparatusSvg,
            'measuringCylinderApparatus': ChemistrySvgDiagrams.measuringCylinderApparatusSvg,

            // ===== CHEMICAL REACTIONS =====
            'balancedEquationDiagram': ChemistrySvgDiagrams.balancedEquationDiagramSvg,
            'reactionTypesDiagram': ChemistrySvgDiagrams.reactionTypesDiagramSvg,
            'oxidationNumbersDiagram': ChemistrySvgDiagrams.oxidationNumbersDiagramSvg,
            'redoxReactionDiagram': ChemistrySvgDiagrams.redoxReactionDiagramSvg,
            'combustionReactionDiagram': ChemistrySvgDiagrams.combustionReactionDiagramSvg,
            'precipitationReactionDiagram': ChemistrySvgDiagrams.precipitationReactionDiagramSvg,
            'acidBaseNeutralizationDiagram': ChemistrySvgDiagrams.acidBaseNeutralizationDiagramSvg,
            'collisionTheoryDiagram': ChemistrySvgDiagrams.collisionTheoryDiagramSvg,
            'testTubeReactionApparatus': ChemistrySvgDiagrams.testTubeReactionApparatusSvg,
            'eudiometerApparatus': ChemistrySvgDiagrams.eudiometerApparatusSvg,
            'gasCollectionApparatus': ChemistrySvgDiagrams.gasCollectionApparatusSvg,

            // ===== ENERGETICS =====
            'enthalpyProfileDiagram': ChemistrySvgDiagrams.enthalpyProfileDiagramSvg,
            'bornHaberCycleDiagram': ChemistrySvgDiagrams.bornHaberCycleDiagramSvg,
            'hesssLawDiagram': ChemistrySvgDiagrams.hesssLawDiagramSvg,
            'bondEnthalpyDiagram': ChemistrySvgDiagrams.bondEnthalpyDiagramSvg,
            'latticeEnthalpyDiagram': ChemistrySvgDiagrams.latticeEnthalpyDiagramSvg,
            'enthalpyOfSolutionDiagram': ChemistrySvgDiagrams.enthalpyOfSolutionDiagramSvg,
            'entropyDiagram': ChemistrySvgDiagrams.entropyDiagramSvg,
            'gibbsFreeEnergyDiagram': ChemistrySvgDiagrams.gibbsFreeEnergyDiagramSvg,
            'calorimetryApparatus': ChemistrySvgDiagrams.calorimetryApparatusSvg,
            'bombCalorimeterApparatus': ChemistrySvgDiagrams.bombCalorimeterApparatusSvg,
            'heatOfNeutralizationApparatus': ChemistrySvgDiagrams.heatOfNeutralizationApparatusSvg,
            'flameCalorimeterApparatus': ChemistrySvgDiagrams.flameCalorimeterApparatusSvg,

            // ===== KINETICS =====
            'reactionRateGraphDiagram': ChemistrySvgDiagrams.reactionRateGraphDiagramSvg,
            'rateEquationDiagram': ChemistrySvgDiagrams.rateEquationDiagramSvg,
            'reactionOrderGraphs': ChemistrySvgDiagrams.reactionOrderGraphsSvg,
            'arrheniusEquationDiagram': ChemistrySvgDiagrams.arrheniusEquationDiagramSvg,
            'maxwellBoltzmannDistribution': ChemistrySvgDiagrams.maxwellBoltzmannDistributionSvg,
            'catalystEffectDiagram': ChemistrySvgDiagrams.catalystEffectDiagramSvg,
            'reactionMechanismDiagram': ChemistrySvgDiagrams.reactionMechanismDiagramSvg,
            'halfLifeDiagram': ChemistrySvgDiagrams.halfLifeDiagramSvg,
            'clockReactionApparatus': ChemistrySvgDiagrams.clockReactionApparatusSvg,
            'gasSyringeApparatus': ChemistrySvgDiagrams.gasSyringeApparatusSvg,
            'colorimeterApparatus': ChemistrySvgDiagrams.colorimeterApparatusSvg,
            'continuousMonitoringApparatus': ChemistrySvgDiagrams.continuousMonitoringApparatusSvg,

            // ===== EQUILIBRIUM =====
            'equilibriumDiagram': ChemistrySvgDiagrams.equilibriumDiagramSvg,
            'equilibriumConstantDiagram': ChemistrySvgDiagrams.equilibriumConstantDiagramSvg,
            'leChatellierPrincipleDiagram': ChemistrySvgDiagrams.leChatellierPrincipleDiagramSvg,
            'pressureEquilibriumDiagram': ChemistrySvgDiagrams.pressureEquilibriumDiagramSvg,
            'temperatureEquilibriumDiagram': ChemistrySvgDiagrams.temperatureEquilibriumDiagramSvg,
            'equilibriumPositionGraph': ChemistrySvgDiagrams.equilibriumPositionGraphSvg,
            'heterogeneousEquilibriumDiagram': ChemistrySvgDiagrams.heterogeneousEquilibriumDiagramSvg,
            'equilibriumTubeApparatus': ChemistrySvgDiagrams.equilibriumTubeApparatusSvg,
            'haberProcessApparatus': ChemistrySvgDiagrams.haberProcessApparatusSvg,

            // ===== ACIDS & BASES =====
            'phScaleDiagram': ChemistrySvgDiagrams.phScaleDiagramSvg,
            'acidBaseTheoriesDiagram': ChemistrySvgDiagrams.acidBaseTheoriesDiagramSvg,
            'conjugateAcidBasePairs': ChemistrySvgDiagrams.conjugateAcidBasePairsSvg,
            'strongWeakAcidsDiagram': ChemistrySvgDiagrams.strongWeakAcidsDiagramSvg,
            'bufferSolutionDiagram': ChemistrySvgDiagrams.bufferSolutionDiagramSvg,
            'titrationCurveDiagram': ChemistrySvgDiagrams.titrationCurveDiagramSvg,
            'indicatorDiagram': ChemistrySvgDiagrams.indicatorDiagramSvg,
            'kaKbRelationship': ChemistrySvgDiagrams.kaKbRelationshipSvg,
            'saltHydrolysisDiagram': ChemistrySvgDiagrams.saltHydrolysisDiagramSvg,
            'titrationApparatus': ChemistrySvgDiagrams.titrationApparatusSvg,
            'universalIndicatorApparatus': ChemistrySvgDiagrams.universalIndicatorApparatusSvg,
            'bufferPreparationApparatus': ChemistrySvgDiagrams.bufferPreparationApparatusSvg,

            // ===== REDOX & ELECTROCHEMISTRY =====
            'oxidationStatesDiagram': ChemistrySvgDiagrams.oxidationStatesDiagramSvg,
            'halfReactionDiagram': ChemistrySvgDiagrams.halfReactionDiagramSvg,
            'electrochemicalSeriesDiagram': ChemistrySvgDiagrams.electrochemicalSeriesDiagramSvg,
            'galvanicCellDiagram': ChemistrySvgDiagrams.galvanicCellDiagramSvg,
            'electrolyticCellDiagram': ChemistrySvgDiagrams.electrolyticCellDiagramSvg,
            'cellPotentialDiagram': ChemistrySvgDiagrams.cellPotentialDiagramSvg,
            'nernstEquationDiagram': ChemistrySvgDiagrams.nernstEquationDiagramSvg,
            'faradaysLawDiagram': ChemistrySvgDiagrams.faradaysLawDiagramSvg,
            'corrosionDiagram': ChemistrySvgDiagrams.corrosionDiagramSvg,
            'fuelCellDiagram': ChemistrySvgDiagrams.fuelCellDiagramSvg,
            'batteryDiagram': ChemistrySvgDiagrams.batteryDiagramSvg,
            'daniellCellApparatus': ChemistrySvgDiagrams.daniellCellApparatusSvg,
            'copperElectroplatingApparatus': ChemistrySvgDiagrams.copperElectroplatingApparatusSvg,
            'chlorAlkaliCellApparatus': ChemistrySvgDiagrams.chlorAlkaliCellApparatusSvg,
            'redoxTitrationApparatus': ChemistrySvgDiagrams.redoxTitrationApparatusSvg,

            // ===== ORGANIC CHEMISTRY =====
            'homologousSeriesDiagram': ChemistrySvgDiagrams.homologousSeriesDiagramSvg,
            'structuralIsomersDiagram': ChemistrySvgDiagrams.structuralIsomersDiagramSvg,
            'stereoisomersDiagram': ChemistrySvgDiagrams.stereoisomersDiagramSvg,
            'functionalGroupsDiagram': ChemistrySvgDiagrams.functionalGroupsDiagramSvg,
            'reactionMechanismOrganic': ChemistrySvgDiagrams.reactionMechanismOrganicSvg,
            'additionReactionDiagram': ChemistrySvgDiagrams.additionReactionDiagramSvg,
            'substitutionReactionDiagram': ChemistrySvgDiagrams.substitutionReactionDiagramSvg,
            'eliminationReactionDiagram': ChemistrySvgDiagrams.eliminationReactionDiagramSvg,
            'polymerizationDiagram': ChemistrySvgDiagrams.polymerizationDiagramSvg,
            'aromaticStructureDiagram': ChemistrySvgDiagrams.aromaticStructureDiagramSvg,
            'esterificationDiagram': ChemistrySvgDiagrams.esterificationDiagramSvg,
            'chiralityDiagram': ChemistrySvgDiagrams.chiralityDiagramSvg,
            'meltingPointApparatus': ChemistrySvgDiagrams.meltingPointApparatusSvg,

            // ===== ANALYTICAL CHEMISTRY =====
            'massSpectrumDiagram': ChemistrySvgDiagrams.massSpectrumDiagramSvg,
            'infraredSpectrumDiagram': ChemistrySvgDiagrams.infraredSpectrumDiagramSvg,
            'nmrSpectrumDiagram': ChemistrySvgDiagrams.nmrSpectrumDiagramSvg,
            'uvVisSpectrumDiagram': ChemistrySvgDiagrams.uvVisSpectrumDiagramSvg,
            'chromatogramDiagram': ChemistrySvgDiagrams.chromatogramDiagramSvg,
            'emissionSpectrumAnalytical': ChemistrySvgDiagrams.emissionSpectrumAnalyticalSvg,
            'absorptionSpectrumDiagram': ChemistrySvgDiagrams.absorptionSpectrumDiagramSvg,
            'spectrophotometerApparatus': ChemistrySvgDiagrams.spectrophotometerApparatusSvg,
            'gcmsApparatus': ChemistrySvgDiagrams.gcmsApparatusSvg,
            'hplcApparatus': ChemistrySvgDiagrams.hplcApparatusSvg,
            'atomicAbsorptionApparatus': ChemistrySvgDiagrams.atomicAbsorptionApparatusSvg,
            'irSpectrometerApparatus': ChemistrySvgDiagrams.irSpectrometerApparatusSvg,
            'nmrSpectrometerApparatus': ChemistrySvgDiagrams.nmrSpectrometerApparatusSvg,

            // ===== INORGANIC CHEMISTRY =====
            'periodicTrendsDiagram': ChemistrySvgDiagrams.periodicTrendsDiagramSvg,
            'transitionMetalComplexDiagram': ChemistrySvgDiagrams.transitionMetalComplexDiagramSvg,
            'crystalFieldTheoryDiagram': ChemistrySvgDiagrams.crystalFieldTheoryDiagramSvg,
            'ligandFieldColorDiagram': ChemistrySvgDiagrams.ligandFieldColorDiagramSvg,
            'isomerismComplexesDiagram': ChemistrySvgDiagrams.isomerismComplexesDiagramSvg,
            'hardSoftAcidBaseDiagram': ChemistrySvgDiagrams.hardSoftAcidBaseDiagramSvg,
            'solubilityProductDiagram': ChemistrySvgDiagrams.solubilityProductDiagramSvg,
            'commonIonEffectDiagram': ChemistrySvgDiagrams.commonIonEffectDiagramSvg,
            'bornHaberInorganicDiagram': ChemistrySvgDiagrams.bornHaberInorganicDiagramSvg,
            'qualitativeAnalysisApparatus': ChemistrySvgDiagrams.qualitativeAnalysisApparatusSvg,
            'anionTestsApparatus': ChemistrySvgDiagrams.anionTestsApparatusSvg,
            'contactProcessApparatus': ChemistrySvgDiagrams.contactProcessApparatusSvg,

            // ===== PHYSICAL CHEMISTRY =====
            'rateTemperatureDiagram': ChemistrySvgDiagrams.rateTemperatureDiagramSvg,
            'partitionCoefficientDiagram': ChemistrySvgDiagrams.partitionCoefficientDiagramSvg,
            'colligativePropertiesDiagram': ChemistrySvgDiagrams.colligativePropertiesDiagramSvg,
            'osmosisDiagram': ChemistrySvgDiagrams.osmosisDiagramSvg,
            'phaseDiagramWater': ChemistrySvgDiagrams.phaseDiagramWaterSvg,
            'adsorptionIsothermDiagram': ChemistrySvgDiagrams.adsorptionIsothermDiagramSvg,
            'osmometerApparatus': ChemistrySvgDiagrams.osmometerApparatusSvg,
            'adsorptionColumnApparatus': ChemistrySvgDiagrams.adsorptionColumnApparatusSvg,

            // ===== ENVIRONMENTAL CHEMISTRY =====
            'greenhouseEffectDiagram': ChemistrySvgDiagrams.greenhouseEffectDiagramSvg,
            'ozoneDepletionDiagram': ChemistrySvgDiagrams.ozoneDepletionDiagramSvg,
            'acidRainDiagram': ChemistrySvgDiagrams.acidRainDiagramSvg,
            'carbonCycleDiagram': ChemistrySvgDiagrams.carbonCycleDiagramSvg,
            'nitrogenCycleDiagram': ChemistrySvgDiagrams.nitrogenCycleDiagramSvg,
            'waterPollutionDiagram': ChemistrySvgDiagrams.waterPollutionDiagramSvg,

            // ===== BIOCHEMISTRY =====
            'aminoAcidStructureDiagram': ChemistrySvgDiagrams.aminoAcidStructureDiagramSvg,
            'peptideBondDiagram': ChemistrySvgDiagrams.peptideBondDiagramSvg,
            'proteinStructureLevelsDiagram': ChemistrySvgDiagrams.proteinStructureLevelsDiagramSvg,
            'enzymeActionDiagram': ChemistrySvgDiagrams.enzymeActionDiagramSvg,
            'dnaStructureDiagram': ChemistrySvgDiagrams.dnaStructureDiagramSvg,
            'carbohydrateStructureDiagram': ChemistrySvgDiagrams.carbohydrateStructureDiagramSvg,
            'lipidStructureDiagram': ChemistrySvgDiagrams.lipidStructureDiagramSvg,

            // ===== LABORATORY TECHNIQUES =====
            'laboratoryGlasswareDiagram': ChemistrySvgDiagrams.laboratoryGlasswareDiagramSvg,
            'dilutionCalculationDiagram': ChemistrySvgDiagrams.dilutionCalculationDiagramSvg,
            'standardSolutionPreparation': ChemistrySvgDiagrams.standardSolutionPreparationSvg,
            'serialDilutionDiagram': ChemistrySvgDiagrams.serialDilutionDiagramSvg,
            'pipetteTechniqueDiagram': ChemistrySvgDiagrams.pipetteTechniqueDiagramSvg,

             // ===== ATOMIC STRUCTURE =====
'atomicStructure': ChemistrySvgDiagrams.atomicStructureSvg,
'electronConfiguration': ChemistrySvgDiagrams.electronConfigurationSvg,
'orbitalShapes': ChemistrySvgDiagrams.orbitalShapesSvg,
'isotope': ChemistrySvgDiagrams.isotopeSvg,
'ionFormation': ChemistrySvgDiagrams.ionFormationSvg,
'ionizationEnergyGraph': ChemistrySvgDiagrams.ionizationEnergyGraphSvg,
'atomicRadiusTrends': ChemistrySvgDiagrams.atomicRadiusTrendsSvg,
'bohrModelCarbon': ChemistrySvgDiagrams.bohrModelCarbonSvg,
'nuclearStructure': ChemistrySvgDiagrams.nuclearStructureSvg,
'periodicTrends': ChemistrySvgDiagrams.periodicTrendsSvg,

// ===== MOLES & STOICHIOMETRY =====
'moleTriangle': ChemistrySvgDiagrams.moleTriangleSvg,
'particleTriangle': ChemistrySvgDiagrams.particleTriangleSvg,
'unitConversionMap': ChemistrySvgDiagrams.unitConversionMapSvg,
'stoichiometryRoadmap': ChemistrySvgDiagrams.stoichiometryRoadmapSvg,
'stoichiometricRatio': ChemistrySvgDiagrams.stoichiometricRatioSvg,
'molarMass': ChemistrySvgDiagrams.molarMassSvg,
'limitingReagent': ChemistrySvgDiagrams.limitingReagentSvg,
'limitingReagentBar': ChemistrySvgDiagrams.limitingReagentBarSvg,
'yieldDiagram': ChemistrySvgDiagrams.yieldDiagramSvg,
'empiricalFormula': ChemistrySvgDiagrams.empiricalFormulaSvg,
'compositionPieChart': ChemistrySvgDiagrams.compositionPieChartSvg,

// ===== GASES =====
'gasTriangle': ChemistrySvgDiagrams.gasTriangleSvg,
'gasLawsDiagram': ChemistrySvgDiagrams.gasLawsDiagramSvg,
'particleStates': ChemistrySvgDiagrams.particleStatesSvg,
'diffusion': ChemistrySvgDiagrams.diffusionSvg,
'brownianMotion': ChemistrySvgDiagrams.brownianMotionSvg,
'maxwellBoltzmann': ChemistrySvgDiagrams.maxwellBoltzmannSvg,

// ===== SOLUTIONS & CONCENTRATION =====
'molarity': ChemistrySvgDiagrams.molaritySvg,
'dilution': ChemistrySvgDiagrams.dilutionSvg,
'solubilityCurve': ChemistrySvgDiagrams.solubilityCurveSvg,
'concentrationVsTime': ChemistrySvgDiagrams.concentrationVsTimeSvg,

// ===== ACIDS, BASES & TITRATION =====
'phScale': ChemistrySvgDiagrams.phScaleSvg,
'titrationCurve': ChemistrySvgDiagrams.titrationCurveSvg,
'titrationSetup': ChemistrySvgDiagrams.titrationSetupSvg,
'titrationStoichiometry': ChemistrySvgDiagrams.titrationStoichiometrySvg,
'indicatorChart': ChemistrySvgDiagrams.indicatorChartSvg,
'dissociationDiagram': ChemistrySvgDiagrams.dissociationDiagramSvg,

// ===== ENERGETICS & THERMOCHEMISTRY =====
'enthalpyChange': ChemistrySvgDiagrams.enthalpyChangeSvg,
'hessLawCycle': ChemistrySvgDiagrams.hessLawCycleSvg,
'calorimeter': ChemistrySvgDiagrams.calorimeterSvg,
'heatingCurve': ChemistrySvgDiagrams.heatingCurveSvg,
'coolingCurve': ChemistrySvgDiagrams.coolingCurveSvg,
'energyBarChart': ChemistrySvgDiagrams.energyBarChartSvg,

// ===== EQUILIBRIUM =====
'iceTable': ChemistrySvgDiagrams.iceTableSvg,
'equilibriumGraph': ChemistrySvgDiagrams.equilibriumGraphSvg,
'leChatelierShift': ChemistrySvgDiagrams.leChatelierShiftSvg,

// ===== BONDING & MOLECULAR STRUCTURE =====
'lewisStructureWater': ChemistrySvgDiagrams.lewisStructureWaterSvg,
'polarBonds': ChemistrySvgDiagrams.polarBondsSvg,
'vsepGeometry': ChemistrySvgDiagrams.vsepGeometrySvg,
'hybridization': ChemistrySvgDiagrams.hybridizationSvg,
'intermolecularForces': ChemistrySvgDiagrams.intermolecularForcesSvg,

// ===== ELECTROCHEMISTRY =====
'galvanicCell': ChemistrySvgDiagrams.galvanicCellSvg,
'electrodeProcesses': ChemistrySvgDiagrams.electrodeProcessesSvg,
'electrochemicalSeries': ChemistrySvgDiagrams.electrochemicalSeriesSvg,
'concentrationCellDiagram': ChemistrySvgDiagrams.concentrationCellDiagramSvg,
'electrolysisSetup': ChemistrySvgDiagrams.electrolysisSetupSvg,
'moltenElectrolysis': ChemistrySvgDiagrams.moltenElectrolysisSvg,

// ===== KINETICS =====
'concentrationVsRate': ChemistrySvgDiagrams.concentrationVsRateSvg,
'surfaceAreaEffect': ChemistrySvgDiagrams.surfaceAreaEffectSvg,
'collisionTheory': ChemistrySvgDiagrams.collisionTheorySvg,
'temperatureVsRate': ChemistrySvgDiagrams.temperatureVsRateSvg,

// ===== LABORATORY & SAFETY =====
'hazardSymbols': ChemistrySvgDiagrams.hazardSymbolsSvg,
'safetyEquipment': ChemistrySvgDiagrams.safetyEquipmentSvg,
'laboratoryGlassware': ChemistrySvgDiagrams.laboratoryGlasswareSvg,
'distillationApparatus': ChemistrySvgDiagrams.distillationApparatusSvg,
'filtrationSetup': ChemistrySvgDiagrams.filtrationSetupSvg,
'gasCollection': ChemistrySvgDiagrams.gasCollectionSvg,

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
        console.log(`✨ Chemistry diagram '${diagramKey}' saved to ${filename}`);
    }
}

export { ChemistryDiagramRenderer };
