
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


/** new svg diagrams for pamphlets */
//=======================================================//


// ===== ATOMIC STRUCTURE =====
        'atomicStructureDiagram': ChemistrySvgDiagrams.atomicStructureDiagramsvg,
        'electronConfigurationDiagram': ChemistrySvgDiagrams.electronConfigurationDiagramsvg,
        'orbitalShapesDiagram': ChemistrySvgDiagrams.orbitalShapesDiagramsvg,
        'isotopeDiagram': ChemistrySvgDiagrams.isotopeDiagramsvg,
        'ionFormationDiagram': ChemistrySvgDiagrams.ionFormationDiagramsvg,
        'ionizationEnergyGraph': ChemistrySvgDiagrams.ionizationEnergyGraphsvg,
        'atomicRadiusTrends': ChemistrySvgDiagrams.atomicRadiusTrendssvg,
        'electronAffinityDiagram': ChemistrySvgDiagrams.electronAffinityDiagramsvg,
        'massSpectrometerChemistry': ChemistrySvgDiagrams.massSpectrometerChemistrysvg,

// ===== ACID-BASE VOCABULARY =====
        'acidBaseVocabularyConceptMap': ChemistrySvgDiagrams.acidBaseVocabularyConceptMapsvg,
        'arrheniusIonDissociationInWaterDiagram': ChemistrySvgDiagrams.arrheniusIonDissociationInWaterDiagramsvg,
        'protonTransferConjugatePairArrowDiagram': ChemistrySvgDiagrams.protonTransferConjugatePairArrowDiagramsvg,
        'lewisAcidBaseElectronPairDonationDiagram': ChemistrySvgDiagrams.lewisAcidBaseElectronPairDonationDiagramsvg,
        'strongWeakAcidDissociationComparisonDiagram': ChemistrySvgDiagrams.strongWeakAcidDissociationComparisonDiagramsvg,
        'waterAutoionisationEquilibriumDiagram': ChemistrySvgDiagrams.waterAutoionisationEquilibriumDiagramsvg,
        'polyproticAcidStepwiseIonisationDiagram': ChemistrySvgDiagrams.polyproticAcidStepwiseIonisationDiagramsvg,
        'molecularCompleteNetIonicEquationComparisonDiagram': ChemistrySvgDiagrams.molecularCompleteNetIonicEquationComparisonDiagramsvg,
        'saltHydrolysisPhOutcomeSummaryTable': ChemistrySvgDiagrams.saltHydrolysisPhOutcomeSummaryTablesvg,
        'indicatorColorChangePhRangeChart': ChemistrySvgDiagrams.indicatorColorChangePhRangeChartsvg,
        'acidRainFormationAndOceanAcidificationDiagram': ChemistrySvgDiagrams.acidRainFormationAndOceanAcidificationDiagramsvg,
        'logarithmBaseConceptAndAntilogDiagram': ChemistrySvgDiagrams.logarithmBaseConceptAndAntilogDiagramsvg,
        'phScaleCommonSubstancesNumberLineDiagram': ChemistrySvgDiagrams.phScaleCommonSubstancesNumberLineDiagramsvg,
        'strongAcidFullDissociationPhCalculationFlowchart': ChemistrySvgDiagrams.strongAcidFullDissociationPhCalculationFlowchartsvg,
        'strongBasePoHToPhConversionDiagram': ChemistrySvgDiagrams.strongBasePoHToPhConversionDiagramsvg,
        'weakAcidICETableEquilibriumDiagram': ChemistrySvgDiagrams.weakAcidICETableEquilibriumDiagramsvg,
        'weakBaseICETableOHMinusToPhDiagram': ChemistrySvgDiagrams.weakBaseICETableOHMinusToPhDiagramsvg,
        'phPohHConcentrationInterconversionCycleDiagram': ChemistrySvgDiagrams.phPohHConcentrationInterconversionCycleDiagramsvg,
        'saltHydrolysisPhPredictionDecisionTree': ChemistrySvgDiagrams.saltHydrolysisPhPredictionDecisionTreesvg,
        'phVsDilutionCurveStrongWeakAcidComparisonGraph': ChemistrySvgDiagrams.phVsDilutionCurveStrongWeakAcidComparisonGraphsvg,
        'excessReagentMixingPhCalculationFlowchart': ChemistrySvgDiagrams.excessReagentMixingPhCalculationFlowchartsvg,
        'physiologicalPhRangesOrganSystemsDiagram': ChemistrySvgDiagrams.physiologicalPhRangesOrganSystemsDiagramsvg,
        'partialIonisationEquilibriumArrowDiagram': ChemistrySvgDiagrams.partialIonisationEquilibriumArrowDiagramsvg,
        'kaExpressionEquilibriumPositionDiagram': ChemistrySvgDiagrams.kaExpressionEquilibriumPositionDiagramsvg,
        'kbExpressionKaKbKwRelationshipDiagram': ChemistrySvgDiagrams.kbExpressionKaKbKwRelationshipDiagramsvg,
        'iceTableWeakAcidSolvedStepByStepDiagram': ChemistrySvgDiagrams.iceTableWeakAcidSolvedStepByStepDiagramsvg,
        'periodicTrendsAcidStrengthBondPolarityDiagram': ChemistrySvgDiagrams.periodicTrendsAcidStrengthBondPolarityDiagramsvg,
        'hendersonHasselbalchDerivationAndRatioInterpretationDiagram': ChemistrySvgDiagrams.hendersonHasselbalchDerivationAndRatioInterpretationDiagramsvg,
        'polyproticAcidKaStepwiseLadderDiagram': ChemistrySvgDiagrams.polyproticAcidKaStepwiseLadderDiagramsvg,
        'commonIonEquilibriumShiftLeChatelierDiagram': ChemistrySvgDiagrams.commonIonEquilibriumShiftLeChatelierDiagramsvg,
        'aminoAcidZwitterionIsoelectricPointDiagram': ChemistrySvgDiagrams.aminoAcidZwitterionIsoelectricPointDiagramsvg,
        'drugIonisationPhAbsorptionDiagram': ChemistrySvgDiagrams.drugIonisationPhAbsorptionDiagramsvg,
        'acidStrengthRankingKaScaleDiagram': ChemistrySvgDiagrams.acidStrengthRankingKaScaleDiagramsvg,
        'bufferConceptShockAbsorberAnalogyDiagram': ChemistrySvgDiagrams.bufferConceptShockAbsorberAnalogyDiagramsvg,
        'acidBaseBufferPairComponentsDiagram': ChemistrySvgDiagrams.acidBaseBufferPairComponentsDiagramsvg,
        'bufferResponseToAcidBaseAdditionMolecularDiagram': ChemistrySvgDiagrams.bufferResponseToAcidBaseAdditionMolecularDiagramsvg,
        'hhEquationRatioPhRelationshipBufferDiagram': ChemistrySvgDiagrams.hhEquationRatioPhRelationshipBufferDiagramsvg,
        'bufferCapacityVsPhBellCurveDiagram': ChemistrySvgDiagrams.bufferCapacityVsPhBellCurveDiagramsvg,
        'bufferPreparationDirectMixingFlowchart': ChemistrySvgDiagrams.bufferPreparationDirectMixingFlowchartsvg,
        'bloodBicarbonateCO2BufferSystemDiagram': ChemistrySvgDiagrams.bloodBicarbonateCO2BufferSystemDiagramsvg,
        'bufferEffectiveRangePkaTargetPhMatchingChart': ChemistrySvgDiagrams.bufferEffectiveRangePkaTargetPhMatchingChartsvg,
        'bufferMolesShiftAfterAcidBaseAdditionDiagram': ChemistrySvgDiagrams.bufferMolesShiftAfterAcidBaseAdditionDiagramsvg,
        'phMeterCalibrationStandardBuffersDiagram': ChemistrySvgDiagrams.phMeterCalibrationStandardBuffersDiagramsvg,
        'pharmaceuticalBufferPhStabilityShelfLifeDiagram': ChemistrySvgDiagrams.pharmaceuticalBufferPhStabilityShelfLifeDiagramsvg,
        'titrationApparatusLabelledSetupDiagram': ChemistrySvgDiagrams.titrationApparatusLabelledSetupDiagramsvg,
        'fourTitrationCurveTypesComparisonDiagram': ChemistrySvgDiagrams.fourTitrationCurveTypesComparisonDiagramsvg,
        'indicatorTransitionRangeEquivalencePointOverlapDiagram': ChemistrySvgDiagrams.indicatorTransitionRangeEquivalencePointOverlapDiagramsvg,
        'phCalculationRegionsByTitrationStageDiagram': ChemistrySvgDiagrams.phCalculationRegionsByTitrationStageDiagramsvg,
        'polyproticAcidMultipleEquivalencePointsCurveDiagram': ChemistrySvgDiagrams.polyproticAcidMultipleEquivalencePointsCurveDiagramsvg,
        'backTitrationExcessReagentSubtractionFlowchart': ChemistrySvgDiagrams.backTitrationExcessReagentSubtractionFlowchartsvg,
        'redoxTitrationElectronTransferEndpointDiagram': ChemistrySvgDiagrams.redoxTitrationElectronTransferEndpointDiagramsvg,
        'edtaMetalIonChelationComplexDiagram': ChemistrySvgDiagrams.edtaMetalIonChelationComplexDiagramsvg,
        'titrationsSystematicRandomErrorSourcesDiagram': ChemistrySvgDiagrams.titrationsSystematicRandomErrorSourcesDiagramsvg,
        'industrialPharmaceuticalTitrationUseCasesDiagram': ChemistrySvgDiagrams.industrialPharmaceuticalTitrationUseCasesDiagramsvg,

// ===== IONIC BONDING =====
        'atomicStructureShellConfigurationDiagram': ChemistrySvgDiagrams.atomicStructureShellConfigurationDiagramsvg,
        'electronTransferCationAnionFormationDiagram': ChemistrySvgDiagrams.electronTransferCationAnionFormationDiagramsvg,
        'dotAndCrossElectronTransferNaClDiagram': ChemistrySvgDiagrams.dotAndCrossElectronTransferNaClDiagramsvg,
        'chargeBalanceCrossoverMethodDiagram': ChemistrySvgDiagrams.chargeBalanceCrossoverMethodDiagramsvg,
        'naClFccRockSaltLatticeUnitCellDiagram': ChemistrySvgDiagrams.naClFccRockSaltLatticeUnitCellDiagramsvg,
        'bornHaberCycleEnthalpyLadderNaClDiagram': ChemistrySvgDiagrams.bornHaberCycleEnthalpyLadderNaClDiagramsvg,
        'ionicCompoundPropertiesStructureExplanationChart': ChemistrySvgDiagrams.ionicCompoundPropertiesStructureExplanationChartsvg,
        'fajansRulesCationPolarisationAnionDistortionDiagram': ChemistrySvgDiagrams.fajansRulesCationPolarisationAnionDistortionDiagramsvg,
        'electrolysisAnodeCathodeIonMigrationDiagram': ChemistrySvgDiagrams.electrolysisAnodeCathodeIonMigrationDiagramsvg,
        'ionicCompoundsIndustryBiologyApplicationsInfographic': ChemistrySvgDiagrams.ionicCompoundsIndustryBiologyApplicationsInfographicsvg,

// ===== COVALENT BONDING =====
        'electronSharingBondingPairLonePairFoundationDiagram': ChemistrySvgDiagrams.electronSharingBondingPairLonePairFoundationDiagramsvg,
        'singleDoubleTripleBondOrderLengthStrengthComparisonDiagram': ChemistrySvgDiagrams.singleDoubleTripleBondOrderLengthStrengthComparisonDiagramsvg,
        'electronegativityDifferencePolaritySpectrumDiagram': ChemistrySvgDiagrams.electronegativityDifferencePolaritySpectrumDiagramsvg,
        'dotCrossDiagramH2ONH3CO2StepByStepDiagram': ChemistrySvgDiagrams.dotCrossDiagramH2ONH3CO2StepByStepDiagramsvg,
        'sigmaHeadOnPiLateralOrbitalOverlapHybridisationDiagram': ChemistrySvgDiagrams.sigmaHeadOnPiLateralOrbitalOverlapHybridisationDiagramsvg,
        'resonanceStructuresBenzeneNitrateCarbonateHybridDiagram': ChemistrySvgDiagrams.resonanceStructuresBenzeneNitrateCarbonateHybridDiagramsvg,
        'bondEnthalpyBreakingFormingEnergyProfileDiagram': ChemistrySvgDiagrams.bondEnthalpyBreakingFormingEnergyProfileDiagramsvg,
        'simpleDiscretesMoleculeVsGiantLatticeStructureComparisonDiagram': ChemistrySvgDiagrams.simpleDiscretesMoleculeVsGiantLatticeStructureComparisonDiagramsvg,
        'diamondGraphiteGrapheneSiliconDioxideStructureComparisonDiagram': ChemistrySvgDiagrams.diamondGraphiteGrapheneSiliconDioxideStructureComparisonDiagramsvg,
        'covalentBondingOrganicBiochemistryMaterialsApplicationsInfographic': ChemistrySvgDiagrams.covalentBondingOrganicBiochemistryMaterialsApplicationsInfographicsvg,

// ===== LEWIS STRUCTURES =====
        'valenceElectronGroupPeriodicTableBondingPairLonePairLegendDiagram': ChemistrySvgDiagrams.valenceElectronGroupPeriodicTableBondingPairLonePairLegendDiagramsvg,
        'lewisStructureSixStepFlowchartDrawingProcedureDiagram': ChemistrySvgDiagrams.lewisStructureSixStepFlowchartDrawingProcedureDiagramsvg,
        'formalChargeCalculationElectronAllocationDiagram': ChemistrySvgDiagrams.formalChargeCalculationElectronAllocationDiagramsvg,
        'resonanceHybridCurvedArrowElectronMovementOzoneBenzeneDiagram': ChemistrySvgDiagrams.resonanceHybridCurvedArrowElectronMovementOzoneBenzeneDiagramsvg,
        'octetExceptionsElectronDeficientRadicalExpandedOctetComparisonDiagram': ChemistrySvgDiagrams.octetExceptionsElectronDeficientRadicalExpandedOctetComparisonDiagramsvg,
        'polyatomicIonBracketChargeNotationNH4SO4CO3Diagram': ChemistrySvgDiagrams.polyatomicIonBracketChargeNotationNH4SO4CO3Diagramsvg,
        'lewisAcidBaseCoordinateBondAdductFormationDiagram': ChemistrySvgDiagrams.lewisAcidBaseCoordinateBondAdductFormationDiagramsvg,
        'bondOrderLengthStrengthInverseTrendComparisonTableDiagram': ChemistrySvgDiagrams.bondOrderLengthStrengthInverseTrendComparisonTableDiagramsvg,
        'hypervalentXeF4SF4OrganicMoleculeAdvancedLewisStructuresDiagram': ChemistrySvgDiagrams.hypervalentXeF4SF4OrganicMoleculeAdvancedLewisStructuresDiagramsvg,

// ===== VSEPR =====
        'electronDomainCountToVSEPRGeometryBridgingFlowchartDiagram': ChemistrySvgDiagrams.electronDomainCountToVSEPRGeometryBridgingFlowchartDiagramsvg,
        'electronDomainVsMolecularGeometryDistinctionFoundationDiagram': ChemistrySvgDiagrams.electronDomainVsMolecularGeometryDistinctionFoundationDiagramsvg,
        'vsepRRepulsionHierarchyElectronPairArrangementDiagram': ChemistrySvgDiagrams.vsepRRepulsionHierarchyElectronPairArrangementDiagramsvg,
        'allThirteenVSEPRShapesElectronBondingGeometryCompleteCatalogueDiagram': ChemistrySvgDiagrams.allThirteenVSEPRShapesElectronBondingGeometryCompleteCatalogueDiagramsvg,
        'lonePairCompressionBondAngleCH4NH3H2ODeviationComparisonDiagram': ChemistrySvgDiagrams.lonePairCompressionBondAngleCH4NH3H2ODeviationComparisonDiagramsvg,
        'dipoleMomentVectorSumCancellationPolarNonpolarMoleculesDiagram': ChemistrySvgDiagrams.dipoleMomentVectorSumCancellationPolarNonpolarMoleculesDiagramsvg,
        'multipleBondSingleDomainCO2H2COVSEPRTreatmentDiagram': ChemistrySvgDiagrams.multipleBondSingleDomainCO2H2COVSEPRTreatmentDiagramsvg,
        'wedgeDashSolidDashedBondNotation3dStructureDiagram': ChemistrySvgDiagrams.wedgeDashSolidDashedBondNotation3dStructureDiagramsvg,
        'geometryPolarityBoilingPointSolubilityPropertyLinksDiagram': ChemistrySvgDiagrams.geometryPolarityBoilingPointSolubilityPropertyLinksDiagramsvg,
        'hybridisationSp3Sp2SpOrbitalGeometryBondAngleSummaryDiagram': ChemistrySvgDiagrams.hybridisationSp3Sp2SpOrbitalGeometryBondAngleSummaryDiagramsvg,
        'bondingAntibondingMOEnergyDiagramH2O2N2DiatomicsDiagram': ChemistrySvgDiagrams.bondingAntibondingMOEnergyDiagramH2O2N2DiatomicsDiagramsvg,

// ===== METALLIC BONDING =====
        'metalLocationPeriodicTableLowIELowENCharacteristicsDiagram': ChemistrySvgDiagrams.metalLocationPeriodicTableLowIELowENCharacteristicsDiagramsvg,
        'metalCationLatticeDelocalizedElectronSeaModelDiagram': ChemistrySvgDiagrams.metalCationLatticeDelocalizedElectronSeaModelDiagramsvg,
        'fccHcpBccUnitCellPackingEfficiencyComparisonDiagram': ChemistrySvgDiagrams.fccHcpBccUnitCellPackingEfficiencyComparisonDiagramsvg,
        'conductorSemiconductorInsulatorBandGapEnergyDiagram': ChemistrySvgDiagrams.conductorSemiconductorInsulatorBandGapEnergyDiagramsvg,
        'metalPropertiesSeaOfElectronsStructuralExplanationSummaryDiagram': ChemistrySvgDiagrams.metalPropertiesSeaOfElectronsStructuralExplanationSummaryDiagramsvg,
        'substitutionalInterstitialAlloyLatticeDistortionDislocationPinningDiagram': ChemistrySvgDiagrams.substitutionalInterstitialAlloyLatticeDistortionDislocationPinningDiagramsvg,
        'dBlockMeltingPointTrendPeriod4dElectronBondingContributionDiagram': ChemistrySvgDiagrams.dBlockMeltingPointTrendPeriod4dElectronBondingContributionDiagramsvg,
        'ironRustingElectrochemicalCellAnodeCathodeCorrosionMechanismDiagram': ChemistrySvgDiagrams.ironRustingElectrochemicalCellAnodeCathodeCorrosionMechanismDiagramsvg,
        'goldNanoparticleSurfacePlasmonResonanceColourSizeRelationshipDiagram': ChemistrySvgDiagrams.goldNanoparticleSurfacePlasmonResonanceColourSizeRelationshipDiagramsvg,
        'metallicBondingIndustrialBiologicalTechnologyApplicationsInfographic': ChemistrySvgDiagrams.metallicBondingIndustrialBiologicalTechnologyApplicationsInfographicsvg,

// ===== INTERMOLECULAR FORCES =====
        'intramolecularVsIntermolecularForceStrengthScaleComparisonDiagram': ChemistrySvgDiagrams.intramolecularVsIntermolecularForceStrengthScaleComparisonDiagramsvg,
        'instantaneousInducedDipolePolarisabilityElectronFluctuationLDFDiagram': ChemistrySvgDiagrams.instantaneousInducedDipolePolarisabilityElectronFluctuationLDFDiagramsvg,
        'permanentDipoleDeltaPlusDeltaMinusOrientationAttractionDiagram': ChemistrySvgDiagrams.permanentDipoleDeltaPlusDeltaMinusOrientationAttractionDiagramsvg,
        'hydrogenBondDonorAcceptorNOFAnomalousBoilingPointGroupTrendDiagram': ChemistrySvgDiagrams.hydrogenBondDonorAcceptorNOFAnomalousBoilingPointGroupTrendDiagramsvg,
        'ionHydrationShellWaterOrientationCationAnionSolvationDiagram': ChemistrySvgDiagrams.ionHydrationShellWaterOrientationCationAnionSolvationDiagramsvg,
        'imfTypeStrengthRankingDecisionFlowchartBoilingPointPredictionDiagram': ChemistrySvgDiagrams.imfTypeStrengthRankingDecisionFlowchartBoilingPointPredictionDiagramsvg,
        'imfStrengthBoilingPointViscositySurfaceTensionSolubilityCorrelationDiagram': ChemistrySvgDiagrams.imfStrengthBoilingPointViscositySurfaceTensionSolubilityCorrelationDiagramsvg,
        'proteinFoldingHydrogenBondingDNABaseStackingLipidBilayerIMFDiagram': ChemistrySvgDiagrams.proteinFoldingHydrogenBondingDNABaseStackingLipidBilayerIMFDiagramsvg,
        'piPiStackingHalogenBondingCationPiMetallophilicInteractionsDiagram': ChemistrySvgDiagrams.piPiStackingHalogenBondingCationPiMetallophilicInteractionsDiagramsvg,
        'heatingCurvePhaseChangePlateauEnthalpyFusionVapourisationIMFDiagram': ChemistrySvgDiagrams.heatingCurvePhaseChangePlateauEnthalpyFusionVapourisationIMFDiagramsvg,

// ===== OXIDATION STATES =====
        'electronBookkeepingBondPolarityDiagram': ChemistrySvgDiagrams.electronBookkeepingBondPolarityDiagramsvg,
        'oxidationStateRulePriorityFlowchart': ChemistrySvgDiagrams.oxidationStateRulePriorityFlowchartsvg,
        'oxidationStateAlgebraicWorkingDiagram': ChemistrySvgDiagrams.oxidationStateAlgebraicWorkingDiagramsvg,
        'transitionMetalVariableOxidationStatesPeriodicTable': ChemistrySvgDiagrams.transitionMetalVariableOxidationStatesPeriodicTablesvg,
        'oxidationStateChangeArrowTrackingDiagram': ChemistrySvgDiagrams.oxidationStateChangeArrowTrackingDiagramsvg,
        'oxidisingReducingAgentElectronTransferDiagram': ChemistrySvgDiagrams.oxidisingReducingAgentElectronTransferDiagramsvg,
        'disproportionationSingleSpeciesSplitOxidationDiagram': ChemistrySvgDiagrams.disproportionationSingleSpeciesSplitOxidationDiagramsvg,
        'maxOxidationStatePeriod3PeriodicTrendChart': ChemistrySvgDiagrams.maxOxidationStatePeriod3PeriodicTrendChartsvg,
        'stockNomenclatureRomanNumeralNamingFlowchart': ChemistrySvgDiagrams.stockNomenclatureRomanNumeralNamingFlowchartsvg,
        'permanganateDichromateTitrationOxidationStateApplicationDiagram': ChemistrySvgDiagrams.permanganateDichromateTitrationOxidationStateApplicationDiagramsvg,

// ===== REDOX =====
        'oilRigElectronTransferRedoxDefinitionDiagram': ChemistrySvgDiagrams.oilRigElectronTransferRedoxDefinitionDiagramsvg,
        'halfEquationAcidicBasicBalancingStepsDiagram': ChemistrySvgDiagrams.halfEquationAcidicBasicBalancingStepsDiagramsvg,
        'halfEquationCombinationElectronCancellationDiagram': ChemistrySvgDiagrams.halfEquationCombinationElectronCancellationDiagramsvg,
        'redoxReactionTypesClassificationTreeDiagram': ChemistrySvgDiagrams.redoxReactionTypesClassificationTreeDiagramsvg,
        'metalActivitySeriesDisplacementReactionDiagram': ChemistrySvgDiagrams.metalActivitySeriesDisplacementReactionDiagramsvg,
        'manganateDichromateTitrationEndpointColourChangeDiagram': ChemistrySvgDiagrams.manganateDichromateTitrationEndpointColourChangeDiagramsvg,
        'permanganateProductsAcidicNeutralAlkalineMediumComparisonDiagram': ChemistrySvgDiagrams.permanganateProductsAcidicNeutralAlkalineMediumComparisonDiagramsvg,
        'blastFurnaceIronReductionOxidationStateFlowDiagram': ChemistrySvgDiagrams.blastFurnaceIronReductionOxidationStateFlowDiagramsvg,
        'cellularRespirationElectronTransportChainRedoxDiagram': ChemistrySvgDiagrams.cellularRespirationElectronTransportChainRedoxDiagramsvg,
        'redoxIndicatorColourChangeTestSummaryDiagram': ChemistrySvgDiagrams.redoxIndicatorColourChangeTestSummaryDiagramsvg,

// ===== ELECTROCHEMISTRY =====
        'electrochemicalCellAnodeCathodeElectronFlowDiagram': ChemistrySvgDiagrams.electrochemicalCellAnodeCathodeElectronFlowDiagramsvg,
        'daniellCellSaltBridgeElectronIonFlowDiagram': ChemistrySvgDiagrams.daniellCellSaltBridgeElectronIonFlowDiagramsvg,
        'electrochemicalSeriesStandardReductionPotentialLadderDiagram': ChemistrySvgDiagrams.electrochemicalSeriesStandardReductionPotentialLadderDiagramsvg,
        'nernstEquationConcentrationVsEmfGraphDiagram': ChemistrySvgDiagrams.nernstEquationConcentrationVsEmfGraphDiagramsvg,
        'electrolyticCellProductSelectionAnodeCathodeComparisonDiagram': ChemistrySvgDiagrams.electrolyticCellProductSelectionAnodeCathodeComparisonDiagramsvg,
        'faradayChargeToMassQuantitativeRelationshipDiagram': ChemistrySvgDiagrams.faradayChargeToMassQuantitativeRelationshipDiagramsvg,
        'primarySecondaryFuelCellComparativeStructureDiagram': ChemistrySvgDiagrams.primarySecondaryFuelCellComparativeStructureDiagramsvg,
        'hallHeroultChlorAlkaliIndustrialElectrolysisCellDiagram': ChemistrySvgDiagrams.hallHeroultChlorAlkaliIndustrialElectrolysisCellDiagramsvg,
        'concentrationCellGlassElectrodePHMeasurementDiagram': ChemistrySvgDiagrams.concentrationCellGlassElectrodePHMeasurementDiagramsvg,
        'gibbsEnergyEmfEquilibriumConstantTriangleRelationshipDiagram': ChemistrySvgDiagrams.gibbsEnergyEmfEquilibriumConstantTriangleRelationshipDiagramsvg,

// ===== CORROSION =====
        'corrosionElectrochemicalCellAnodeCathodeSurfaceDiagram': ChemistrySvgDiagrams.corrosionElectrochemicalCellAnodeCathodeSurfaceDiagramsvg,
        'corrosionTypesClassificationMorphologyComparisonDiagram': ChemistrySvgDiagrams.corrosionTypesClassificationMorphologyComparisonDiagramsvg,
        'ironRustingElectrochemicalMechanismAnodeCathodeHalfReactionDiagram': ChemistrySvgDiagrams.ironRustingElectrochemicalMechanismAnodeCathodeHalfReactionDiagramsvg,
        'corrosionRateEnvironmentalFactorsInfluenceChart': ChemistrySvgDiagrams.corrosionRateEnvironmentalFactorsInfluenceChartsvg,
        'metalPassivationActiveCorrosionComparisonGalvanicSeriesDiagram': ChemistrySvgDiagrams.metalPassivationActiveCorrosionComparisonGalvanicSeriesDiagramsvg,
        'protectiveCoatingTypesBarrierGalvanicConversionLayerDiagram': ChemistrySvgDiagrams.protectiveCoatingTypesBarrierGalvanicConversionLayerDiagramsvg,
        'sacrificialAnodeImpressedCurrentCathodicProtectionComparisonDiagram': ChemistrySvgDiagrams.sacrificialAnodeImpressedCurrentCathodicProtectionComparisonDiagramsvg,
        'anodicCathodicMixedInhibitorAdsorptionMechanismDiagram': ChemistrySvgDiagrams.anodicCathodicMixedInhibitorAdsorptionMechanismDiagramsvg,
        'corrosionControlDesignPrinciplesCreviceDissimilarMetalDiagram': ChemistrySvgDiagrams.corrosionControlDesignPrinciplesCreviceDissimilarMetalDiagramsvg,
        'globalCorrosionCostBreakdownDirectIndirectPieChartDiagram': ChemistrySvgDiagrams.globalCorrosionCostBreakdownDirectIndirectPieChartDiagramsvg,

// ===== EQUILIBRIUM =====
        'reversibleVsIrreversibleReactionArrowDiagram': ChemistrySvgDiagrams.reversibleVsIrreversibleReactionArrowDiagramsvg,
        'equalForwardReverseRateEquilibriumDiagram': ChemistrySvgDiagrams.equalForwardReverseRateEquilibriumDiagramsvg,
        'equilibriumPositionReactantsProductsSpectrumDiagram': ChemistrySvgDiagrams.equilibriumPositionReactantsProductsSpectrumDiagramsvg,
        'rateTimeAndConcentrationTimeEquilibriumGraphs': ChemistrySvgDiagrams.rateTimeAndConcentrationTimeEquilibriumGraphssvg,
        'homogeneousVsHeterogeneousEquilibriumPhasesDiagram': ChemistrySvgDiagrams.homogeneousVsHeterogeneousEquilibriumPhasesDiagramsvg,
        'reactionQuotientQVersusKEquilibriumApproachDiagram': ChemistrySvgDiagrams.reactionQuotientQVersusKEquilibriumApproachDiagramsvg,
        'activationEnergyProfileForwardReverseReactionDiagram': ChemistrySvgDiagrams.activationEnergyProfileForwardReverseReactionDiagramsvg,
        'haberProcessFlowDiagramEquilibriumConditions': ChemistrySvgDiagrams.haberProcessFlowDiagramEquilibriumConditionssvg,
        'no2N2o4ColourChangeEquilibriumTubeDiagram': ChemistrySvgDiagrams.no2N2o4ColourChangeEquilibriumTubeDiagramsvg,
        'dynamicEquilibriumCommonMisconceptionsAnnotatedDiagram': ChemistrySvgDiagrams.dynamicEquilibriumCommonMisconceptionsAnnotatedDiagramsvg,

// ===== EQUILIBRIUM CONSTANTS =====
        'lawOfMassActionExpressionAnnotatedDiagram': ChemistrySvgDiagrams.lawOfMassActionExpressionAnnotatedDiagramsvg,
        'kcExpressionNumeratorDenominatorStoichiometryDiagram': ChemistrySvgDiagrams.kcExpressionNumeratorDenominatorStoichiometryDiagramsvg,
        'partialPressureMoleFractionKpDiagram': ChemistrySvgDiagrams.partialPressureMoleFractionKpDiagramsvg,
        'iceTableInitialChangeEquilibriumRowsDiagram': ChemistrySvgDiagrams.iceTableInitialChangeEquilibriumRowsDiagramsvg,
        'qVersusKDirectionOfShiftNumberLineDiagram': ChemistrySvgDiagrams.qVersusKDirectionOfShiftNumberLineDiagramsvg,
        'vanTHoffPlotLnKVersusOneOverTDiagram': ChemistrySvgDiagrams.vanTHoffPlotLnKVersusOneOverTDiagramsvg,
        'reversalMultiplicationAdditionKRulesSummaryDiagram': ChemistrySvgDiagrams.reversalMultiplicationAdditionKRulesSummaryDiagramsvg,
        'degreeOfDissociationAlphaKspRelationshipDiagram': ChemistrySvgDiagrams.degreeOfDissociationAlphaKspRelationshipDiagramsvg,
        'equilibriumCalculationProblemTypeDecisionTreeDiagram': ChemistrySvgDiagrams.equilibriumCalculationProblemTypeDecisionTreeDiagramsvg,
        'activityVsConcentrationIdealRealBehaviourDiagram': ChemistrySvgDiagrams.activityVsConcentrationIdealRealBehaviourDiagramsvg,

// ===== LE CHATELIER =====
        'leChatelierStressResponseEquilibriumShiftDiagram': ChemistrySvgDiagrams.leChatelierStressResponseEquilibriumShiftDiagramsvg,
        'concentrationAddRemoveEquilibriumShiftArrowDiagram': ChemistrySvgDiagrams.concentrationAddRemoveEquilibriumShiftArrowDiagramsvg,
        'gasMolesEitherSidePressureShiftDeltaNDiagram': ChemistrySvgDiagrams.gasMolesEitherSidePressureShiftDeltaNDiagramsvg,
        'exothermicEndothermicTemperatureKShiftSummaryDiagram': ChemistrySvgDiagrams.exothermicEndothermicTemperatureKShiftSummaryDiagramsvg,
        'catalystLowersActivationEnergyBothDirectionsEnergyProfileDiagram': ChemistrySvgDiagrams.catalystLowersActivationEnergyBothDirectionsEnergyProfileDiagramsvg,
        'qVersusKPostPerturbationShiftCalculationDiagram': ChemistrySvgDiagrams.qVersusKPostPerturbationShiftCalculationDiagramsvg,
        'haberContactProcessConditionsCompromiseSummaryDiagram': ChemistrySvgDiagrams.haberContactProcessConditionsCompromiseSummaryDiagramsvg,
        'bufferSystemLeChatelierAcidBaseShiftDiagram': ChemistrySvgDiagrams.bufferSystemLeChatelierAcidBaseShiftDiagramsvg,
        'concentrationTimeGraphPerturbationNewEquilibriumDiagram': ChemistrySvgDiagrams.concentrationTimeGraphPerturbationNewEquilibriumDiagramsvg,
        'leChatelierMisconceptionAnnotatedCorrectionsDiagram': ChemistrySvgDiagrams.leChatelierMisconceptionAnnotatedCorrectionsDiagramsvg,

// ===== SOLUBILITY EQUILIBRIUM =====
        'dissolutionSolidIonsAqueousHeterogeneousEquilibriumDiagram': ChemistrySvgDiagrams.dissolutionSolidIonsAqueousHeterogeneousEquilibriumDiagramsvg,
        'kspExpressionStoichiometricPowersSilverChlorideAnnotatedDiagram': ChemistrySvgDiagrams.kspExpressionStoichiometricPowersSilverChlorideAnnotatedDiagramsvg,
        'kspToMolarSolubilityStoichiometryTypeComparisonDiagram': ChemistrySvgDiagrams.kspToMolarSolubilityStoichiometryTypeComparisonDiagramsvg,
        'qspVersusKspPrecipitationNoPrecipitationDecisionDiagram': ChemistrySvgDiagrams.qspVersusKspPrecipitationNoPrecipitationDecisionDiagramsvg,
        'commonIonSolubilitySuppressionLeChatelierShiftDiagram': ChemistrySvgDiagrams.commonIonSolubilitySuppressionLeChatelierShiftDiagramsvg,
        'hydroxideSolubilityVspHAcidicBasicConditionsDiagram': ChemistrySvgDiagrams.hydroxideSolubilityVspHAcidicBasicConditionsDiagramsvg,
        'complexIonFormationMetalLigandKfSolubilityEnhancementDiagram': ChemistrySvgDiagrams.complexIonFormationMetalLigandKfSolubilityEnhancementDiagramsvg,
        'kspVsTemperatureSolubilityCurveEndothermicExothermicDiagram': ChemistrySvgDiagrams.kspVsTemperatureSolubilityCurveEndothermicExothermicDiagramsvg,
        'kidneyStoneCalciumOxalatePrecipitationFormationDiagram': ChemistrySvgDiagrams.kidneyStoneCalciumOxalatePrecipitationFormationDiagramsvg,
        'kspSolubilityComparisonStoichiometryTypePitfallsDiagram': ChemistrySvgDiagrams.kspSolubilityComparisonStoichiometryTypePitfallsDiagramsvg,

// ===== SUBATOMIC PARTICLES =====
        'atomNucleusElectronCloudScaleDiagram': ChemistrySvgDiagrams.atomNucleusElectronCloudScaleDiagramsvg,
        'protonNeutronElectronPropertiesComparisonChart': ChemistrySvgDiagrams.protonNeutronElectronPropertiesComparisonChartsvg,
        'nuclearSymbolNotationAnnotatedDiagram': ChemistrySvgDiagrams.nuclearSymbolNotationAnnotatedDiagramsvg,
        'hydrogenIsotopeStructureComparisonDiagram': ChemistrySvgDiagrams.hydrogenIsotopeStructureComparisonDiagramsvg,
        'cationAnionElectronLossGainDiagram': ChemistrySvgDiagrams.cationAnionElectronLossGainDiagramsvg,
        'bindingEnergyPerNucleonCurveGraph': ChemistrySvgDiagrams.bindingEnergyPerNucleonCurveGraphsvg,
        'standardModelParticleClassificationChart': ChemistrySvgDiagrams.standardModelParticleClassificationChartsvg,
        'subatomicParticlePropertySummaryTable': ChemistrySvgDiagrams.subatomicParticlePropertySummaryTablesvg,
        'relativeAtomicMassWeightedAverageCalculationDiagram': ChemistrySvgDiagrams.relativeAtomicMassWeightedAverageCalculationDiagramsvg,
        'subatomicParticleConceptualErrorAnnotationDiagram': ChemistrySvgDiagrams.subatomicParticleConceptualErrorAnnotationDiagramsvg,

// ===== ATOMIC MODELS =====
        'hydrogenEmissionAbsorptionSpectrumDiagram': ChemistrySvgDiagrams.hydrogenEmissionAbsorptionSpectrumDiagramsvg,
        'daltonSolidSphereAtomDiagram': ChemistrySvgDiagrams.daltonSolidSphereAtomDiagramsvg,
        'thomsonPlumPuddingModelAnnotatedDiagram': ChemistrySvgDiagrams.thomsonPlumPuddingModelAnnotatedDiagramsvg,
        'goldFoilExperimentScatteringResultsDiagram': ChemistrySvgDiagrams.goldFoilExperimentScatteringResultsDiagramsvg,
        'bohrEnergyLevelTransitionDiagram': ChemistrySvgDiagrams.bohrEnergyLevelTransitionDiagramsvg,
        'sommerfeldEllipticalOrbitSubshellDiagram': ChemistrySvgDiagrams.sommerfeldEllipticalOrbitSubshellDiagramsvg,
        'electronProbabilityCloudOrbitalShapesDiagram': ChemistrySvgDiagrams.electronProbabilityCloudOrbitalShapesDiagramsvg,
        'atomicModelEvolutionTimelineDiagram': ChemistrySvgDiagrams.atomicModelEvolutionTimelineDiagramsvg,
        'milliканOilDropExperimentSetupDiagram': ChemistrySvgDiagrams.milliканOilDropExperimentSetupDiagramsvg,
        'orbitVsOrbitalConceptualDifferenceDiagram': ChemistrySvgDiagrams.orbitVsOrbitalConceptualDifferenceDiagramsvg,

// ===== ELECTRON CONFIGURATION =====
        'subshellEnergyOrderingDiagonalRuleDiagram': ChemistrySvgDiagrams.subshellEnergyOrderingDiagonalRuleDiagramsvg,
        'aufbauPauliHundRuleOrbitalBoxDiagram': ChemistrySvgDiagrams.aufbauPauliHundRuleOrbitalBoxDiagramsvg,
        'spdfNotationNobleGasShorthandComparisonDiagram': ChemistrySvgDiagrams.spdfNotationNobleGasShorthandComparisonDiagramsvg,
        'cationAnionElectronRemovalAdditionConfigDiagram': ChemistrySvgDiagrams.cationAnionElectronRemovalAdditionConfigDiagramsvg,
        'chromiumCopperAnomalousConfigurationStabilityDiagram': ChemistrySvgDiagrams.chromiumCopperAnomalousConfigurationStabilityDiagramsvg,
        'periodicTableSPDFBlockAnnotatedDiagram': ChemistrySvgDiagrams.periodicTableSPDFBlockAnnotatedDiagramsvg,
        'valenceCoreElectronShieldingZeffDiagram': ChemistrySvgDiagrams.valenceCoreElectronShieldingZeffDiagramsvg,
        'paramagneticDiamagneticUnpairedElectronDiagram': ChemistrySvgDiagrams.paramagneticDiamagneticUnpairedElectronDiagramsvg,
        'successiveIonisationEnergyBarGraphDiagram': ChemistrySvgDiagrams.successiveIonisationEnergyBarGraphDiagramsvg,
        'electronConfigurationCommonMistakesAnnotatedDiagram': ChemistrySvgDiagrams.electronConfigurationCommonMistakesAnnotatedDiagramsvg,

// ===== QUANTUM MECHANICS =====
        'schrodingerEquationWaveFunctionAnnotatedDiagram': ChemistrySvgDiagrams.schrodingerEquationWaveFunctionAnnotatedDiagramsvg,
        'shellEnergyLevelRadialProbabilityDiagram': ChemistrySvgDiagrams.shellEnergyLevelRadialProbabilityDiagramsvg,
        'subshellAngularMomentumOrbitalShapesDiagram': ChemistrySvgDiagrams.subshellAngularMomentumOrbitalShapesDiagramsvg,
        'pOrbitalThreeOrientationsMagneticQuantumDiagram': ChemistrySvgDiagrams.pOrbitalThreeOrientationsMagneticQuantumDiagramsvg,
        'sternGerlachBeamSplittingSpinDiagram': ChemistrySvgDiagrams.sternGerlachBeamSplittingSpinDiagramsvg,
        'pauliExclusionOrbitalOccupancyForbiddenStatesDiagram': ChemistrySvgDiagrams.pauliExclusionOrbitalOccupancyForbiddenStatesDiagramsvg,
        'spdfOrbitalThreeDimensionalShapesDiagram': ChemistrySvgDiagrams.spdfOrbitalThreeDimensionalShapesDiagramsvg,
        'quantumNumberAllowedRangesValidationFlowchartDiagram': ChemistrySvgDiagrams.quantumNumberAllowedRangesValidationFlowchartDiagramsvg,
        'periodicTableQuantumNumberBlockWidthDiagram': ChemistrySvgDiagrams.periodicTableQuantumNumberBlockWidthDiagramsvg,
        'nmrNuclearSpinEnergyLevelSplittingDiagram': ChemistrySvgDiagrams.nmrNuclearSpinEnergyLevelSplittingDiagramsvg,

// ===== PERIODIC TRENDS =====
        'effectiveNuclearChargeShieldingPenetrationDiagram': ChemistrySvgDiagrams.effectiveNuclearChargeShieldingPenetrationDiagramsvg,
        'atomicRadiusPeriodGroupTrendAnnotatedDiagram': ChemistrySvgDiagrams.atomicRadiusPeriodGroupTrendAnnotatedDiagramsvg,
        'isoelectronicSeriesIonicRadiusComparisonDiagram': ChemistrySvgDiagrams.isoelectronicSeriesIonicRadiusComparisonDiagramsvg,
        'firstIonisationEnergyPeriod2AnomaliesBarGraphDiagram': ChemistrySvgDiagrams.firstIonisationEnergyPeriod2AnomaliesBarGraphDiagramsvg,
        'electronAffinityPeriodTrendWithAnomaliesDiagram': ChemistrySvgDiagrams.electronAffinityPeriodTrendWithAnomaliesDiagramsvg,
        'paulingElectronegativityScalePeriodicTableHeatmapDiagram': ChemistrySvgDiagrams.paulingElectronegativityScalePeriodicTableHeatmapDiagramsvg,
        'metalNonmetalMetalloidPeriodicTableBoundaryDiagram': ChemistrySvgDiagrams.metalNonmetalMetalloidPeriodicTableBoundaryDiagramsvg,
        'group1Group17ReactivityOpposingTrendsDiagram': ChemistrySvgDiagrams.group1Group17ReactivityOpposingTrendsDiagramsvg,
        'period3OxideAcidBaseCharacterTrendDiagram': ChemistrySvgDiagrams.period3OxideAcidBaseCharacterTrendDiagramsvg,
        'periodicTrendCommonMistakeAnnotationDiagram': ChemistrySvgDiagrams.periodicTrendCommonMistakeAnnotationDiagramsvg,

// ===== NUCLEAR CHEMISTRY =====
        'bandOfStabilityNeutronProtonPlotDiagram': ChemistrySvgDiagrams.bandOfStabilityNeutronProtonPlotDiagramsvg,
        'alphaBetagammaDecayNuclearChangeAnnotatedDiagram': ChemistrySvgDiagrams.alphaBetagammaDecayNuclearChangeAnnotatedDiagramsvg,
        'radiationElectricMagneticFieldDeflectionDiagram': ChemistrySvgDiagrams.radiationElectricMagneticFieldDeflectionDiagramsvg,
        'uraniumDecaySeriesChainDiagram': ChemistrySvgDiagrams.uraniumDecaySeriesChainDiagramsvg,
        'exponentialDecayCurveHalfLifeAnnotatedGraph': ChemistrySvgDiagrams.exponentialDecayCurveHalfLifeAnnotatedGraphsvg,
        'carbon14RadiocarbonDatingDecayCurveDiagram': ChemistrySvgDiagrams.carbon14RadiocarbonDatingDecayCurveDiagramsvg,
        'uranium235NeutronInducedFissionChainReactionDiagram': ChemistrySvgDiagrams.uranium235NeutronInducedFissionChainReactionDiagramsvg,
        'deuteriumTritiumFusionEnergyReleaseDiagram': ChemistrySvgDiagrams.deuteriumTritiumFusionEnergyReleaseDiagramsvg,
        'medicalRadioisotopePetScanTechnetiumDiagram': ChemistrySvgDiagrams.medicalRadioisotopePetScanTechnetiumDiagramsvg,
        'radiationDoseUnitsBecquerelGraySievertDiagram': ChemistrySvgDiagrams.radiationDoseUnitsBecquerelGraySievertDiagramsvg,

// ===== MOLES AND STOICHIOMETRY =====
        'atomicScaleToMacroScaleBridgeDiagram': ChemistrySvgDiagrams.atomicScaleToMacroScaleBridgeDiagramsvg,
        'avogadrosNumberParticleScalingDiagram': ChemistrySvgDiagrams.avogadrosNumberParticleScalingDiagramsvg,
        'periodicTableMolarMassReadingDiagram': ChemistrySvgDiagrams.periodicTableMolarMassReadingDiagramsvg,
        'moleTriangleInterconversionDiagram': ChemistrySvgDiagrams.moleTriangleInterconversionDiagramsvg,
        'elementalPercentageCompositionPieChartDiagram': ChemistrySvgDiagrams.elementalPercentageCompositionPieChartDiagramsvg,
        'empiricalToMolecularFormulaScalingDiagram': ChemistrySvgDiagrams.empiricalToMolecularFormulaScalingDiagramsvg,
        'molarVolumeStandardConditionsComparisonDiagram': ChemistrySvgDiagrams.molarVolumeStandardConditionsComparisonDiagramsvg,
        'concentrationVolumeTriangleDiagram': ChemistrySvgDiagrams.concentrationVolumeTriangleDiagramsvg,
        'hydratedSaltCrystalLatticeWaterDiagram': ChemistrySvgDiagrams.hydratedSaltCrystalLatticeWaterDiagramsvg,
        'isotopeAbundanceWeightedAverageMassDiagram': ChemistrySvgDiagrams.isotopeAbundanceWeightedAverageMassDiagramsvg,

// ===== STOICHIOMETRIC CALCULATIONS =====
        'stoichiometricRatioReactantProductDiagram': ChemistrySvgDiagrams.stoichiometricRatioReactantProductDiagramsvg,
        'divideByCoefficientsLimitingReagentDecisionDiagram': ChemistrySvgDiagrams.divideByCoefficientsLimitingReagentDecisionDiagramsvg,
        'theoreticalYieldCalculationFlowchartDiagram': ChemistrySvgDiagrams.theoreticalYieldCalculationFlowchartDiagramsvg,
        'theoreticalVsActualYieldBarComparisonDiagram': ChemistrySvgDiagrams.theoreticalVsActualYieldBarComparisonDiagramsvg,
        'excessReagentRemainingMassCalculationDiagram': ChemistrySvgDiagrams.excessReagentRemainingMassCalculationDiagramsvg,
        'concentrationVolumeToMolesPrecipitationDiagram': ChemistrySvgDiagrams.concentrationVolumeToMolesPrecipitationDiagramsvg,
        'completeVsIncompleteCombustionProductsDiagram': ChemistrySvgDiagrams.completeVsIncompleteCombustionProductsDiagramsvg,
        'haberProcessFeedRatioOptimisationDiagram': ChemistrySvgDiagrams.haberProcessFeedRatioOptimisationDiagramsvg,
        'cascadingYieldMultiStepSynthesisDiagram': ChemistrySvgDiagrams.cascadingYieldMultiStepSynthesisDiagramsvg,
        'impureReagentPurityCorrectionFlowchartDiagram': ChemistrySvgDiagrams.impureReagentPurityCorrectionFlowchartDiagramsvg,

// ===== CHEMICAL EQUATIONS =====
        'conservationOfMassAtomCountingDiagram': ChemistrySvgDiagrams.conservationOfMassAtomCountingDiagramsvg,
        'equationTypeProgressionWordToNetIonicDiagram': ChemistrySvgDiagrams.equationTypeProgressionWordToNetIonicDiagramsvg,
        'inspectionBalancingOrderMetalsNonmetalsHydrogenOxygenDiagram': ChemistrySvgDiagrams.inspectionBalancingOrderMetalsNonmetalsHydrogenOxygenDiagramsvg,
        'algebraicCoefficientSimultaneousEquationsDiagram': ChemistrySvgDiagrams.algebraicCoefficientSimultaneousEquationsDiagramsvg,
        'molecularToFullIonicToNetIonicProgressionDiagram': ChemistrySvgDiagrams.molecularToFullIonicToNetIonicProgressionDiagramsvg,
        'halfEquationElectronTransferOxidationReductionDiagram': ChemistrySvgDiagrams.halfEquationElectronTransferOxidationReductionDiagramsvg,
        'sixReactionTypesPatternClassificationDiagram': ChemistrySvgDiagrams.sixReactionTypesPatternClassificationDiagramsvg,
        'polyatomicIonBracketExpansionUnitBalancingDiagram': ChemistrySvgDiagrams.polyatomicIonBracketExpansionUnitBalancingDiagramsvg,
        'coefficientMoleRatioMassVolumeInterpretationDiagram': ChemistrySvgDiagrams.coefficientMoleRatioMassVolumeInterpretationDiagramsvg,
        'balancingVerificationAtomCountChecklistDiagram': ChemistrySvgDiagrams.balancingVerificationAtomCountChecklistDiagramsvg,

// ===== VOLUMETRIC ANALYSIS =====
        'molarConcentrationSoluteVolumeTriangleDiagram': ChemistrySvgDiagrams.molarConcentrationSoluteVolumeTriangleDiagramsvg,
        'primaryStandardVolumetricFlaskPreparationDiagram': ChemistrySvgDiagrams.primaryStandardVolumetricFlaskPreparationDiagramsvg,
        'titrationApparatusSetupBurettePipetteFlaskDiagram': ChemistrySvgDiagrams.titrationApparatusSetupBurettePipetteFlaskDiagramsvg,
        'acidBaseTitrationCurveIndicatorRangeDiagram': ChemistrySvgDiagrams.acidBaseTitrationCurveIndicatorRangeDiagramsvg,
        'permanganateSelfIndicatingRedoxTitrationColorChangeDiagram': ChemistrySvgDiagrams.permanganateSelfIndicatingRedoxTitrationColorChangeDiagramsvg,
        'backTitrationTwoStageReactionFlowchartDiagram': ChemistrySvgDiagrams.backTitrationTwoStageReactionFlowchartDiagramsvg,
        'ionicDissociationSubscriptMultiplierConcentrationDiagram': ChemistrySvgDiagrams.ionicDissociationSubscriptMultiplierConcentrationDiagramsvg,
        'precipitationFiltrationDryingWeighingGravimetricDiagram': ChemistrySvgDiagrams.precipitationFiltrationDryingWeighingGravimetricDiagramsvg,
        'edtaMetalComplexOneToOneBindingDiagram': ChemistrySvgDiagrams.edtaMetalComplexOneToOneBindingDiagramsvg,
        'commercialProductAnalysisTitrationWorkflowDiagram': ChemistrySvgDiagrams.commercialProductAnalysisTitrationWorkflowDiagramsvg,

// ===== GAS LAWS =====
        'gasVariablesPressureVolumeTemperatureMolsDiagram': ChemistrySvgDiagrams.gasVariablesPressureVolumeTemperatureMolsDiagramsvg,
        'idealGasLawPVnRTVariableRelationshipDiagram': ChemistrySvgDiagrams.idealGasLawPVnRTVariableRelationshipDiagramsvg,
        'boylesCharlesGayLussacCombinedLawGraphsDiagram': ChemistrySvgDiagrams.boylesCharlesGayLussacCombinedLawGraphsDiagramsvg,
        'partialPressureMoleFractionGasMixtureDiagram': ChemistrySvgDiagrams.partialPressureMoleFractionGasMixtureDiagramsvg,
        'avogadrosLawEqualVolumesEqualMolesSTPDiagram': ChemistrySvgDiagrams.avogadrosLawEqualVolumesEqualMolesSTPDiagramsvg,
        'solidLiquidGasPhaseConversionMoleHubDiagram': ChemistrySvgDiagrams.solidLiquidGasPhaseConversionMoleHubDiagramsvg,
        'gasVolumeLimitingReagentDivideByCoefficientsComparisonDiagram': ChemistrySvgDiagrams.gasVolumeLimitingReagentDivideByCoefficientsComparisonDiagramsvg,
        'vanDerWaalsCompressibilityFactorZDeviationDiagram': ChemistrySvgDiagrams.vanDerWaalsCompressibilityFactorZDeviationDiagramsvg,
        'grahamsLawEffusionRateInverseSqrtMassDiagram': ChemistrySvgDiagrams.grahamsLawEffusionRateInverseSqrtMassDiagramsvg,
        'haberProcessGasVolumeRatioFeedStreamDiagram': ChemistrySvgDiagrams.haberProcessGasVolumeRatioFeedStreamDiagramsvg,

// ===== ORGANIC CHEMISTRY - HYDROCARBONS =====
        'carbonHybridisationOrbitalGeometryDiagram': ChemistrySvgDiagrams.carbonHybridisationOrbitalGeometryDiagramsvg,
        'alkaneHomologousSeriesBoilingPointTrendChart': ChemistrySvgDiagrams.alkaneHomologousSeriesBoilingPointTrendChartsvg,
        'electrophilicAdditionBromoniumIonMechanism': ChemistrySvgDiagrams.electrophilicAdditionBromoniumIonMechanismsvg,
        'alkyneSPHybridisationLinearGeometryDiagram': ChemistrySvgDiagrams.alkyneSPHybridisationLinearGeometryDiagramsvg,
        'benzeneResonanceDelocalisation': ChemistrySvgDiagrams.benzeneResonanceDelocalisationsvg,
        'fractionalDistillationColumnFractionsBpDiagram': ChemistrySvgDiagrams.fractionalDistillationColumnFractionsBpDiagramsvg,
        'chemicalTestsHydrocarbonIdentificationFlowchart': ChemistrySvgDiagrams.chemicalTestsHydrocarbonIdentificationFlowchartsvg,
        'chainPositionGeometricIsomerismComparisonDiagram': ChemistrySvgDiagrams.chainPositionGeometricIsomerismComparisonDiagramsvg,
        'hydrocarbonReactionTypesCrossReferenceTable': ChemistrySvgDiagrams.hydrocarbonReactionTypesCrossReferenceTablesvg,
        'petrochemicalFeedstockProductsFlowDiagram': ChemistrySvgDiagrams.petrochemicalFeedstockProductsFlowDiagramsvg,

// ===== ORGANIC CHEMISTRY - FUNCTIONAL GROUPS =====
        'functionalGroupClassificationAndPolarityOverviewDiagram': ChemistrySvgDiagrams.functionalGroupClassificationAndPolarityOverviewDiagramsvg,
        'sn1SN2MechanismComparisonEnergyProfileDiagram': ChemistrySvgDiagrams.sn1SN2MechanismComparisonEnergyProfileDiagramsvg,
        'primarySecondaryTertiaryAlcoholOxidationProductsDiagram': ChemistrySvgDiagrams.primarySecondaryTertiaryAlcoholOxidationProductsDiagramsvg,
        'williamsonEtherSynthesisReactionSchemeDiagram': ChemistrySvgDiagrams.williamsonEtherSynthesisReactionSchemeDiagramsvg,
        'nucleophilicAdditionCarbonylMechanismDiagram': ChemistrySvgDiagrams.nucleophilicAdditionCarbonylMechanismDiagramsvg,
        'carboxylateResonanceStabilisationAcidityDiagram': ChemistrySvgDiagrams.carboxylateResonanceStabilisationAcidityDiagramsvg,
        'fischerEsterificationEquilibriumReactionSchemeDiagram': ChemistrySvgDiagrams.fischerEsterificationEquilibriumReactionSchemeDiagramsvg,
        'amineBasicityComparisonAlkylArylAmidePKbDiagram': ChemistrySvgDiagrams.amineBasicityComparisonAlkylArylAmidePKbDiagramsvg,
        'amidePlanarResonanceBondRotationRestrictionDiagram': ChemistrySvgDiagrams.amidePlanarResonanceBondRotationRestrictionDiagramsvg,
        'carboxylicAcidDerivativesReactivityOrderDiagram': ChemistrySvgDiagrams.carboxylicAcidDerivativesReactivityOrderDiagramsvg,
        'nitrileHydrolysisReductionTransformationFlowDiagram': ChemistrySvgDiagrams.nitrileHydrolysisReductionTransformationFlowDiagramsvg,
        'phenolPhenoxideResonanceAcidityComparisonDiagram': ChemistrySvgDiagrams.phenolPhenoxideResonanceAcidityComparisonDiagramsvg,
        'functionalGroupInterconversionNetworkDiagram': ChemistrySvgDiagrams.functionalGroupInterconversionNetworkDiagramsvg,

// ===== ORGANIC CHEMISTRY - MECHANISMS =====
        'curvedArrowElectronFlowNucleophileElectrophileDiagram': ChemistrySvgDiagrams.curvedArrowElectronFlowNucleophileElectrophileDiagramsvg,
        'sn1SN2EASFreeRadicalSubstitutionMechanismComparisonDiagram': ChemistrySvgDiagrams.sn1SN2EASFreeRadicalSubstitutionMechanismComparisonDiagramsvg,
        'e2AntiPeriplanarGeometryZaitsevHofmannRegioselectivityDiagram': ChemistrySvgDiagrams.e2AntiPeriplanarGeometryZaitsevHofmannRegioselectivityDiagramsvg,
        'electrophilicNucleophilicRadicalAdditionComparisonDiagram': ChemistrySvgDiagrams.electrophilicNucleophilicRadicalAdditionComparisonDiagramsvg,
        'organicOxidationLadderAlkaneToCarboxylicAcidDiagram': ChemistrySvgDiagrams.organicOxidationLadderAlkaneToCarboxylicAcidDiagramsvg,
        'aldolCondensationClaisenEsterMechanismSchemeDiagram': ChemistrySvgDiagrams.aldolCondensationClaisenEsterMechanismSchemeDiagramsvg,
        'carbocationRearrangementHydrideAlkylShiftEnergyDiagram': ChemistrySvgDiagrams.carbocationRearrangementHydrideAlkylShiftEnergyDiagramsvg,
        'dielsAlderHOMOLUMOOrbitalSymmetryFrontierDiagram': ChemistrySvgDiagrams.dielsAlderHOMOLUMOOrbitalSymmetryFrontierDiagramsvg,
        'namedReactionsMechanismClassificationSummaryTable': ChemistrySvgDiagrams.namedReactionsMechanismClassificationSummaryTablesvg,
        'retrosynthesisDisconnectionSynthonArrowNotationDiagram': ChemistrySvgDiagrams.retrosynthesisDisconnectionSynthonArrowNotationDiagramsvg,

// ===== STEREOCHEMISTRY =====
        'wedgeDashFischerNewmanProjectionComparisonDiagram': ChemistrySvgDiagrams.wedgeDashFischerNewmanProjectionComparisonDiagramsvg,
        'chiralCentreTetrahedralFourDifferentGroupsHandednessDiagram': ChemistrySvgDiagrams.chiralCentreTetrahedralFourDifferentGroupsHandednessDiagramsvg,
        'polarimeterPlaneOfPolarisedLightRotationDiagram': ChemistrySvgDiagrams.polarimeterPlaneOfPolarisedLightRotationDiagramsvg,
        'diastereomerEprimerAnomarMesoRelationshipDiagram': ChemistrySvgDiagrams.diastereomerEprimerAnomarMesoRelationshipDiagramsvg,
        'cyclohexaneChairBoatAxialEquatorialNewmanDiagram': ChemistrySvgDiagrams.cyclohexaneChairBoatAxialEquatorialNewmanDiagramsvg,
        'sn2InversionSn1RacemisationE2AntiPeriplanarStereoDiagram': ChemistrySvgDiagrams.sn2InversionSn1RacemisationE2AntiPeriplanarStereoDiagramsvg,
        'prochirality': ChemistrySvgDiagrams.prochiralitysvg,
        'classicalResolutionDiastereomericSaltCrystallisationFlowDiagram': ChemistrySvgDiagrams.classicalResolutionDiastereomericSaltCrystallisationFlowDiagramsvg,
        'laminoAcidDGlucoseNaturalConfigurationFischerProjectionDiagram': ChemistrySvgDiagrams.laminoAcidDGlucoseNaturalConfigurationFischerProjectionDiagramsvg,
        'homotopicEnantiotopicDiastereotopicGroupsNMRDistinctionDiagram': ChemistrySvgDiagrams.homotopicEnantiotopicDiastereotopicGroupsNMRDistinctionDiagramsvg,

// ===== SPECTROSCOPY =====
        'electromagneticSpectrumEnergyFrequencyWavelengthDiagram': ChemistrySvgDiagrams.electromagneticSpectrumEnergyFrequencyWavelengthDiagramsvg,
        'massSpectrumMolecularIonFragmentIsotopePatternAnnotatedDiagram': ChemistrySvgDiagrams.massSpectrumMolecularIonFragmentIsotopePatternAnnotatedDiagramsvg,
        'irAbsorptionBandsFunctionalGroupWavenumberReferenceChart': ChemistrySvgDiagrams.irAbsorptionBandsFunctionalGroupWavenumberReferenceChartsvg,
        'uvVisElectronicTransitionConjugationBathochromicShiftDiagram': ChemistrySvgDiagrams.uvVisElectronicTransitionConjugationBathochromicShiftDiagramsvg,
        'protonNMRChemicalShiftCouplingMultiplicityIntegrationAnnotatedSpectrum': ChemistrySvgDiagrams.protonNMRChemicalShiftCouplingMultiplicityIntegrationAnnotatedSpectrumsvg,
        'carbon13ChemicalShiftRangeDEPT135PhaseComparisonDiagram': ChemistrySvgDiagrams.carbon13ChemicalShiftRangeDEPT135PhaseComparisonDiagramsvg,
        'cosy_hsqc_hmbc_noesy_2dNMRCrosspeakConnectivityMapDiagram': ChemistrySvgDiagrams.cosy_hsqc_hmbc_noesy_2dNMRCrosspeakConnectivityMapDiagramsvg,
        'structureElucidationStepwiseDecisionTreeFlowchart': ChemistrySvgDiagrams.structureElucidationStepwiseDecisionTreeFlowchartsvg,
        'xrayCrystallographyFluorescenceRamanCircularDichroismTechniqueOverviewDiagram': ChemistrySvgDiagrams.xrayCrystallographyFluorescenceRamanCircularDichroismTechniqueOverviewDiagramsvg,
        'spectroscopicFingerprintFunctionalGroupCrossReferenceTable': ChemistrySvgDiagrams.spectroscopicFingerprintFunctionalGroupCrossReferenceTablesvg,

// ===== POLYMERS =====
        'polymerClassificationMolecularWeightDistributionDispersityDiagram': ChemistrySvgDiagrams.polymerClassificationMolecularWeightDistributionDispersityDiagramsvg,
        'freeRadicalChainGrowthInitiationPropagationTerminationDiagram': ChemistrySvgDiagrams.freeRadicalChainGrowthInitiationPropagationTerminationDiagramsvg,
        'carothersEquationConversionVsMolecularWeightStepGrowthDiagram': ChemistrySvgDiagrams.carothersEquationConversionVsMolecularWeightStepGrowthDiagramsvg,
        'tgTmCrystallinityAmorphousMechanicalPropertyRelationshipDiagram': ChemistrySvgDiagrams.tgTmCrystallinityAmorphousMechanicalPropertyRelationshipDiagramsvg,
        'vulcanisationSulfurCrosslinkingNaturalRubberNetworkDiagram': ChemistrySvgDiagrams.vulcanisationSulfurCrosslinkingNaturalRubberNetworkDiagramsvg,
        'celluloseStarchAlpha_betaGlycosidicLinkageComparisonDiagram': ChemistrySvgDiagrams.celluloseStarchAlpha_betaGlycosidicLinkageComparisonDiagramsvg,
        'pla_phaDegradationPathwayCompostingConditionsDiagram': ChemistrySvgDiagrams.pla_phaDegradationPathwayCompostingConditionsDiagramsvg,
        'gpcMolecularWeightDistributionChromatogramDispersityDiagram': ChemistrySvgDiagrams.gpcMolecularWeightDistributionChromatogramDispersityDiagramsvg,
        'plasticRecyclingHierarchyMechanicalChemicalLifecycleDiagram': ChemistrySvgDiagrams.plasticRecyclingHierarchyMechanicalChemicalLifecycleDiagramsvg,
        'conductingPolymerBlockCopolymerSelfAssemblyHydrogelSmartMaterialOverviewDiagram': ChemistrySvgDiagrams.conductingPolymerBlockCopolymerSelfAssemblyHydrogelSmartMaterialOverviewDiagramsvg,

// ===== REACTION KINETICS =====
        'reactionRateConcentrationTimeAnnotatedCurveDiagram': ChemistrySvgDiagrams.reactionRateConcentrationTimeAnnotatedCurveDiagramsvg,
        'maxwellBoltzmannDistributionActivationEnergyShadeAreaDiagram': ChemistrySvgDiagrams.maxwellBoltzmannDistributionActivationEnergyShadeAreaDiagramsvg,
        'fiveFactorsRateSummaryComparisonDiagram': ChemistrySvgDiagrams.fiveFactorsRateSummaryComparisonDiagramsvg,
        'gasCollectionSyringeColorimetrySetupDiagram': ChemistrySvgDiagrams.gasCollectionSyringeColorimetrySetupDiagramsvg,
        'reactionOrderRateLawComparisonTable': ChemistrySvgDiagrams.reactionOrderRateLawComparisonTablesvg,
        'firstOrderConstantHalfLifeConcentrationTimeDiagram': ChemistrySvgDiagrams.firstOrderConstantHalfLifeConcentrationTimeDiagramsvg,
        'zeroFirstSecondOrderLinearisedPlotComparisonDiagram': ChemistrySvgDiagrams.zeroFirstSecondOrderLinearisedPlotComparisonDiagramsvg,
        'arrheniusLnKVsOneOverTLinearPlotDiagram': ChemistrySvgDiagrams.arrheniusLnKVsOneOverTLinearPlotDiagramsvg,
        'rateDeterminingStepMultiStepEnergyProfileDiagram': ChemistrySvgDiagrams.rateDeterminingStepMultiStepEnergyProfileDiagramsvg,
        'industrialBiologicalEnvironmentalRateApplicationsInfographic': ChemistrySvgDiagrams.industrialBiologicalEnvironmentalRateApplicationsInfographicsvg,

// ===== RATE LAWS =====
        'rateLawComponentsAnnotatedExpressionDiagram': ChemistrySvgDiagrams.rateLawComponentsAnnotatedExpressionDiagramsvg,
        'zeroOrderConcentrationTimeLinearDecayDiagram': ChemistrySvgDiagrams.zeroOrderConcentrationTimeLinearDecayDiagramsvg,
        'firstOrderExponentialDecayAndLnLinearisationDiagram': ChemistrySvgDiagrams.firstOrderExponentialDecayAndLnLinearisationDiagramsvg,
        'secondOrderOneOverConcentrationLinearisationDiagram': ChemistrySvgDiagrams.secondOrderOneOverConcentrationLinearisationDiagramsvg,
        'initialRatesMethodDataTableOrderDeterminationDiagram': ChemistrySvgDiagrams.initialRatesMethodDataTableOrderDeterminationDiagramsvg,
        'arrheniusTwoPointCalculationAnnotatedWorkingDiagram': ChemistrySvgDiagrams.arrheniusTwoPointCalculationAnnotatedWorkingDiagramsvg,
        'rateDeterminingStepMechanismRateLawDerivationFlowchart': ChemistrySvgDiagrams.rateDeterminingStepMechanismRateLawDerivationFlowchartsvg,
        'michaelisMentenHyperbolicCurveAndLineweaverBurkDiagram': ChemistrySvgDiagrams.michaelisMentenHyperbolicCurveAndLineweaverBurkDiagramsvg,
        'integratedRateLawFormulaApplicationDecisionTreeDiagram': ChemistrySvgDiagrams.integratedRateLawFormulaApplicationDecisionTreeDiagramsvg,
        'pharmacokineticsDrugPlasmaConcentrationTimeProfileDiagram': ChemistrySvgDiagrams.pharmacokineticsDrugPlasmaConcentrationTimeProfileDiagramsvg,

// ===== ACTIVATION ENERGY =====
        'activatedComplexReactionCoordinateAnnotatedDiagram': ChemistrySvgDiagrams.activatedComplexReactionCoordinateAnnotatedDiagramsvg,
        'exothermicEndothermicMultiStepEnergyProfileComparisonDiagram': ChemistrySvgDiagrams.exothermicEndothermicMultiStepEnergyProfileComparisonDiagramsvg,
        'maxwellBoltzmannTemperatureShiftEaThresholdShadedAreaDiagram': ChemistrySvgDiagrams.maxwellBoltzmannTemperatureShiftEaThresholdShadedAreaDiagramsvg,
        'arrheniusEquationComponentsAnnotatedFormulaAndLinearPlotDiagram': ChemistrySvgDiagrams.arrheniusEquationComponentsAnnotatedFormulaAndLinearPlotDiagramsvg,
        'eyringEquationPotentialEnergySaddlePointSurfaceDiagram': ChemistrySvgDiagrams.eyringEquationPotentialEnergySaddlePointSurfaceDiagramsvg,
        'arrheniusPlotDataTableAndBestFitLineDiagram': ChemistrySvgDiagrams.arrheniusPlotDataTableAndBestFitLineDiagramsvg,
        'catalysedUncatalysedEnergyProfileOverlayDiagram': ChemistrySvgDiagrams.catalysedUncatalysedEnergyProfileOverlayDiagramsvg,
        'photonAbsorptionExcitedStateReactionPathwayDiagram': ChemistrySvgDiagrams.photonAbsorptionExcitedStateReactionPathwayDiagramsvg,
        'enzymeTemperatureOptimumRateVsTemperatureBellCurveDiagram': ChemistrySvgDiagrams.enzymeTemperatureOptimumRateVsTemperatureBellCurveDiagramsvg,
        'industrialActivationEnergyTradeoffTemperatureYieldRateDiagram': ChemistrySvgDiagrams.industrialActivationEnergyTradeoffTemperatureYieldRateDiagramsvg,

// ===== CATALYSIS =====
        'catalyticCycleTurnoverNumberRegenerationAnnotatedDiagram': ChemistrySvgDiagrams.catalyticCycleTurnoverNumberRegenerationAnnotatedDiagramsvg,
        'homogeneousCatalyticCycleIntermediateFormationDiagram': ChemistrySvgDiagrams.homogeneousCatalyticCycleIntermediateFormationDiagramsvg,
        'adsorptionActiveSiteChemisorptionSurfaceReactionDesorptionDiagram': ChemistrySvgDiagrams.adsorptionActiveSiteChemisorptionSurfaceReactionDesorptionDiagramsvg,
        'michaelisMentenMechanismLineweaverBurkInhibitionComparisonDiagram': ChemistrySvgDiagrams.michaelisMentenMechanismLineweaverBurkInhibitionComparisonDiagramsvg,
        'haberProcessContactProcessCatalyticConverterConditionsDiagram': ChemistrySvgDiagrams.haberProcessContactProcessCatalyticConverterConditionsDiagramsvg,
        'tio2BandGapElectronHolePairOhRadicalFormationDiagram': ChemistrySvgDiagrams.tio2BandGapElectronHolePairOhRadicalFormationDiagramsvg,
        'prolineEnamineIntermediateCovalentOrganocatalysisDiagram': ChemistrySvgDiagrams.prolineEnamineIntermediateCovalentOrganocatalysisDiagramsvg,
        'atomEconomyEFactorGreenCatalysisBiocatalysisComparisonDiagram': ChemistrySvgDiagrams.atomEconomyEFactorGreenCatalysisBiocatalysisComparisonDiagramsvg,
        'homogeneousHeterogeneousEnzymeOrganocatalysisComparisonTableDiagram': ChemistrySvgDiagrams.homogeneousHeterogeneousEnzymeOrganocatalysisComparisonTableDiagramsvg,
        'catalyticConverterFuelCellHaberEnzymeDrugRealWorldApplicationsDiagram': ChemistrySvgDiagrams.catalyticConverterFuelCellHaberEnzymeDrugRealWorldApplicationsDiagramsvg,

// ===== ENTROPY =====
        'microsateMacrostateEnergyDispersalDiagram': ChemistrySvgDiagrams.microsateMacrostateEnergyDispersalDiagramsvg,
        'threeThermodynamicLawsEntropyRelationshipChart': ChemistrySvgDiagrams.threeThermodynamicLawsEntropyRelationshipChartsvg,
        'standardMolarEntropyComparisonBarChart': ChemistrySvgDiagrams.standardMolarEntropyComparisonBarChartsvg,
        'spontaneityUniverseEntropyDecisionFlowchart': ChemistrySvgDiagrams.spontaneityUniverseEntropyDecisionFlowchartsvg,
        'solidLiquidGasEntropyOrderingDiagram': ChemistrySvgDiagrams.solidLiquidGasEntropyOrderingDiagramsvg,
        'molecularComplexityMolarMassEntropyTrendChart': ChemistrySvgDiagrams.molecularComplexityMolarMassEntropyTrendChartsvg,
        'boltzmannEquationMicrostateCountingDiagram': ChemistrySvgDiagrams.boltzmannEquationMicrostateCountingDiagramsvg,
        'deltaGasMolesEntropyChangeReactionDiagram': ChemistrySvgDiagrams.deltaGasMolesEntropyChangeReactionDiagramsvg,
        'shannonBoltzmannEntropyAnalogyComparisonDiagram': ChemistrySvgDiagrams.shannonBoltzmannEntropyAnalogyComparisonDiagramsvg,
        'biologicalSystemsEntropyExportOpenSystemDiagram': ChemistrySvgDiagrams.biologicalSystemsEntropyExportOpenSystemDiagramsvg,

// ===== ENTHALPY =====
        'enthalpyInternalEnergyPVTermRelationshipDiagram': ChemistrySvgDiagrams.enthalpyInternalEnergyPVTermRelationshipDiagramsvg,
        'exothermicEndothermicEnergyProfileDiagram': ChemistrySvgDiagrams.exothermicEndothermicEnergyProfileDiagramsvg,
        'standardEnthalpyTypesComparisonTable': ChemistrySvgDiagrams.standardEnthalpyTypesComparisonTablesvg,
        'hessLawEnergyLevelCycleRouteDiagram': ChemistrySvgDiagrams.hessLawEnergyLevelCycleRouteDiagramsvg,
        'bondBreakingFormingEnergyBudgetDiagram': ChemistrySvgDiagrams.bondBreakingFormingEnergyBudgetDiagramsvg,
        'bornHaberCycleNaClEnergyLevelDiagram': ChemistrySvgDiagrams.bornHaberCycleNaClEnergyLevelDiagramsvg,
        'kirchhoffHeatCapacityDeltaHTemperatureCorrectionDiagram': ChemistrySvgDiagrams.kirchhoffHeatCapacityDeltaHTemperatureCorrectionDiagramsvg,
        'hydrogenationResonanceEnergyBenzeneDelocaliastionDiagram': ChemistrySvgDiagrams.hydrogenationResonanceEnergyBenzeneDelocaliastionDiagramsvg,
        'atwaterFuelValueMacronutrientComparisonChart': ChemistrySvgDiagrams.atwaterFuelValueMacronutrientComparisonChartsvg,
        'haberProcessTemperaturePressureEquilibriumYieldDiagram': ChemistrySvgDiagrams.haberProcessTemperaturePressureEquilibriumYieldDiagramsvg,

// ===== GIBBS ENERGY =====
        'gibbsEnergyEnthalpyEntropyRelationshipTriangleDiagram': ChemistrySvgDiagrams.gibbsEnergyEnthalpyEntropyRelationshipTriangleDiagramsvg,
        'deltaGvsTemperatureFourSignCombinationsGraph': ChemistrySvgDiagrams.deltaGvsTemperatureFourSignCombinationsGraphsvg,
        'standardGibbsFormationEnergyStabilityLadderDiagram': ChemistrySvgDiagrams.standardGibbsFormationEnergyStabilityLadderDiagramsvg,
        'gibbsEnergyReactionProgressMinimumEquilibriumCurve': ChemistrySvgDiagrams.gibbsEnergyReactionProgressMinimumEquilibriumCurvesvg,
        'nernstEquationCellPotentialConcentrationDependenceDiagram': ChemistrySvgDiagrams.nernstEquationCellPotentialConcentrationDependenceDiagramsvg,
        'coupledReactionGibbsEnergyTransferDiagram': ChemistrySvgDiagrams.coupledReactionGibbsEnergyTransferDiagramsvg,
        'reactionQuotientQvsKGibbsEnergyDirectionDiagram': ChemistrySvgDiagrams.reactionQuotientQvsKGibbsEnergyDirectionDiagramsvg,
        'clausiusClapeyronSlopePhaseTransitionPressureTemperatureDiagram': ChemistrySvgDiagrams.clausiusClapeyronSlopePhaseTransitionPressureTemperatureDiagramsvg,
        'atpHydrolysisGibbsEnergyBiologicalCouplingDiagram': ChemistrySvgDiagrams.atpHydrolysisGibbsEnergyBiologicalCouplingDiagramsvg,
        'ellinghamDiagramMetalOxideReductionTemperaturePlot': ChemistrySvgDiagrams.ellinghamDiagramMetalOxideReductionTemperaturePlotsvg,

// ===== CALORIMETRY =====
        'specificHeatCapacityMassTemperatureHeatTriangleDiagram': ChemistrySvgDiagrams.specificHeatCapacityMassTemperatureHeatTriangleDiagramsvg,
        'qMcDeltaTVariableRelationshipDiagram': ChemistrySvgDiagrams.qMcDeltaTVariableRelationshipDiagramsvg,
        'calorimetryTypesDesignComparisonAnnotatedDiagram': ChemistrySvgDiagrams.calorimetryTypesDesignComparisonAnnotatedDiagramsvg,
        'constantPressurePolystyreneCupSetupAnnotatedDiagram': ChemistrySvgDiagrams.constantPressurePolystyreneCupSetupAnnotatedDiagramsvg,
        'bombCalorimeterCrossSectionAnnotatedDiagram': ChemistrySvgDiagrams.bombCalorimeterCrossSectionAnnotatedDiagramsvg,
        'hessLawIndirectRouteEnergyLevelCycleCalorimetryDiagram': ChemistrySvgDiagrams.hessLawIndirectRouteEnergyLevelCycleCalorimetryDiagramsvg,
        'temperatureTimeExtrapolationHeatLossCorrectionGraph': ChemistrySvgDiagrams.temperatureTimeExtrapolationHeatLossCorrectionGraphsvg,
        'calorimetryErrorSourcesSystematicRandomComparisonChart': ChemistrySvgDiagrams.calorimetryErrorSourcesSystematicRandomComparisonChartsvg,
        'atwaterFactorMacronutrientCaloricDensityComparisonChart': ChemistrySvgDiagrams.atwaterFactorMacronutrientCaloricDensityComparisonChartsvg,
        'differentialScanningCalorimeterHeatFlowPeakAnnotatedDiagram': ChemistrySvgDiagrams.differentialScanningCalorimeterHeatFlowPeakAnnotatedDiagramsvg,

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
