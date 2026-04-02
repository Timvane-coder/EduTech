import { createCanvas, loadImage } from '@napi-rs/canvas';
import { BiologySvgDiagrams } from './biologysvgdiagrams.js';
import { BiologyDiagramsRegistry} from './bioregistry.js';

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




        // Reproduction & Development
        'fertilization': BiologySvgDiagrams.fertilizationsvg,
        'embryoDevelopment': BiologySvgDiagrams.embryoDevelopmentsvg,
        'menstrualCycle': BiologySvgDiagrams.menstrualCyclesvg,
        'gametogenesis': BiologySvgDiagrams.gematogenesissvg,
        'placenta': BiologySvgDiagrams.placentasvg,

        // Mendelian Genetics
        'mendelPeaPlantSevenTraitsAnnotatedDiagram': BiologySvgDiagrams.mendelPeaPlantSevenTraitsAnnotatedDiagramsvg,
        'segregationAndIndependentAssortmentMeiosisDiagram': BiologySvgDiagrams.segregationAndIndependentAssortmentMeiosisDiagramsvg,
        'monohybridDihybridTestcrossComparisonDiagram': BiologySvgDiagrams.monohybridDihybridTestcrossComparisonDiagramsvg,
        'mendelianOffspringRatioSummaryTableDiagram': BiologySvgDiagrams.mendelianOffspringRatioSummaryTableDiagramsvg,
        'genotypeToPhenotypeExpressionMappingDiagram': BiologySvgDiagrams.genotypeToPhenotypeExpressionMappingDiagramsvg,
        'incompleteDominanceCodominanceEpistasisComparisonDiagram': BiologySvgDiagrams.incompleteDominanceCodominanceEpistasisComparisonDiagramsvg,
        'chiSquaredGoodnesOfFitCalculationWorkflowDiagram': BiologySvgDiagrams.chiSquaredGoodnesOfFitCalculationWorkflowDiagramsvg,
        'controlledCrossPollinationEmasculationStepsDiagram': BiologySvgDiagrams.controlledCrossPollinationEmasculationStepsDiagramsvg,
        'humanAutosomalRecessiveDominantCarrierRiskDiagram': BiologySvgDiagrams.humanAutosomalRecessiveDominantCarrierRiskDiagramsvg,
        'linkedGenesRecombinationFrequencyDeviationDiagram': BiologySvgDiagrams.linkedGenesRecombinationFrequencyDeviationDiagramsvg,

        // Punnett Squares
        'punnettSquarePurposeAndStructureAnnotatedDiagram': BiologySvgDiagrams.punnettSquarePurposeAndStructureAnnotatedDiagramsvg,
        'twoByTwoAndFourByFourGridConstructionStepsDiagram': BiologySvgDiagrams.twoByTwoAndFourByFourGridConstructionStepsDiagramsvg,
        'genotypicPhenotypicRatioExtractionAnnotatedGridDiagram': BiologySvgDiagrams.genotypicPhenotypicRatioExtractionAnnotatedGridDiagramsvg,
        'monohybridDihybridSexLinkedGridTypeComparisonDiagram': BiologySvgDiagrams.monohybridDihybridSexLinkedGridTypeComparisonDiagramsvg,
        'incompleteDominanceCodominanceABOBloodTypeGridDiagram': BiologySvgDiagrams.incompleteDominanceCodominanceABOBloodTypeGridDiagramsvg,
        'trihybridForkedLineBranchProbabilityDiagram': BiologySvgDiagrams.trihybridForkedLineBranchProbabilityDiagramsvg,
        'fractionRatioPercentageConversionFromGridDiagram': BiologySvgDiagrams.fractionRatioPercentageConversionFromGridDiagramsvg,
        'asymmetricAndPartiallyHomozygousParentGridLayoutDiagram': BiologySvgDiagrams.asymmetricAndPartiallyHomozygousParentGridLayoutDiagramsvg,
        'annotatedErroredPunnettSquareCorrectVsIncorrectDiagram': BiologySvgDiagrams.annotatedErroredPunnettSquareCorrectVsIncorrectDiagramsvg,
        'humanDiseaseRiskAndBreedingOutcomePunnettApplicationDiagram': BiologySvgDiagrams.humanDiseaseRiskAndBreedingOutcomePunnettApplicationDiagramsvg,

        // Inheritance Patterns
        'inheritancePatternClassificationFrameworkDiagram': BiologySvgDiagrams.inheritancePatternClassificationFrameworkDiagramsvg,
        'autosomalDominantRecessivePedigreePatternComparisonDiagram': BiologySvgDiagrams.autosomalDominantRecessivePedigreePatternComparisonDiagramsvg,
        'xLinkedRecessiveDominantYLinkedPedigreePatternDiagram': BiologySvgDiagrams.xLinkedRecessiveDominantYLinkedPedigreePatternDiagramsvg,
        'pedigreeSymbolsObligateCarrierIdentificationAnnotatedDiagram': BiologySvgDiagrams.pedigreeSymbolsObligateCarrierIdentificationAnnotatedDiagramsvg,
        'completeDominanceIncompleteDominanceCodominanceHeterozygotePhenotypeComparisonDiagram': BiologySvgDiagrams.completeDominanceIncompleteDominanceCodominanceHeterozygotePhenotypeComparisonDiagramsvg,
        'polygenicTraitNormalDistributionBellCurveAdditiveLociDiagram': BiologySvgDiagrams.polygenicTraitNormalDistributionBellCurveAdditiveLociDiagramsvg,
        'mitochondrialMatrilinealTransmissionPedigreePatternDiagram': BiologySvgDiagrams.mitochondrialMatrilinealTransmissionPedigreePatternDiagramsvg,
        'praderWilliAngelmanChromosome15ParentalOriginImprintingDiagram': BiologySvgDiagrams.praderWilliAngelmanChromosome15ParentalOriginImprintingDiagramsvg,
        'epistasisRatioDeviationTypesComparisonSummaryDiagram': BiologySvgDiagrams.epistasisRatioDeviationTypesComparisonSummaryDiagramsvg,
        'crossingOverRecombinantVsParentalOffspringFrequencyMapDiagram': BiologySvgDiagrams.crossingOverRecombinantVsParentalOffspringFrequencyMapDiagramsvg,

        // Chromosomes
        'chromosomeAnatomyCentromereTelomereArmsNucleosomeDiagram': BiologySvgDiagrams.chromosomeAnatomyCentromereTelomereArmsNucleosomeDiagramsvg,
        'haploidDiploidPolyploidChromosomeSetComparisonDiagram': BiologySvgDiagrams.haploidDiploidPolyploidChromosomeSetComparisonDiagramsvg,
        'mitosisMeiosisChromosomeSegregationNondisjunctionComparisonDiagram': BiologySvgDiagrams.mitosisMeiosisChromosomeSegregationNondisjunctionComparisonDiagramsvg,
        'karyotypePreprationColchicineHypotonicFixationStepsFlowchartDiagram': BiologySvgDiagrams.karyotypePreprationColchicineHypotonicFixationStepsFlowchartDiagramsvg,
        'gBandingPatternIdeogramHumanChromosomePairAnnotatedDiagram': BiologySvgDiagrams.gBandingPatternIdeogramHumanChromosomePairAnnotatedDiagramsvg,
        'normal46XXAnd46XYKaryogramAnnotatedDenverGroupsDiagram': BiologySvgDiagrams.normal46XXAnd46XYKaryogramAnnotatedDenverGroupsDiagramsvg,
        'nondisjunctionMechanismTrisomyMonosomyGameteDiagram': BiologySvgDiagrams.nondisjunctionMechanismTrisomyMonosomyGameteDiagramsvg,
        'deletionDuplicationInversionRobertsonianTranslocationStructuralRearrangementDiagram': BiologySvgDiagrams.deletionDuplicationInversionRobertsonianTranslocationStructuralRearrangementDiagramsvg,
        'xInactivationBarrBodyLyonHypothesisMosaicismDiagram': BiologySvgDiagrams.xInactivationBarrBodyLyonHypothesisMosaicismDiagramsvg,
        'fishProbeHybridisationArrayCGHCopyNumberVariantDetectionDiagram': BiologySvgDiagrams.fishProbeHybridisationArrayCGHCopyNumberVariantDetectionDiagramsvg,
        'geneticDisorderClassificationByMechanismAndChromosomeLocationDiagram': BiologySvgDiagrams.geneticDisorderClassificationByMechanismAndChromosomeLocationDiagramsvg,
        'pointMutationFrameshiftNonsenseSplicingTripletExpansionConsequencesDiagram': BiologySvgDiagrams.pointMutationFrameshiftNonsenseSplicingTripletExpansionConsequencesDiagramsvg,
        'autosomaldominantPedigreeVerticalTransmissionHuntingtonsMarfanExamplesDiagram': BiologySvgDiagrams.autosomaldominantPedigreeVerticalTransmissionHuntingtonsMarfanExamplesDiagramsvg,
        'autosomalRecessiveCarrierCrossHardyWeinbergCarrierFrequencyDiagram': BiologySvgDiagrams.autosomalRecessiveCarrierCrossHardyWeinbergCarrierFrequencyDiagramsvg,
        'xLinkedRecessiveDomDecDMDHaemophiliaFragileXPedigreePatternDiagram': BiologySvgDiagrams.xLinkedRecessiveDomDecDMDHaemophiliaFragileXPedigreePatternDiagramsvg,
        'chromosomalDisorderKaryotypeClinicalFeatureSummaryReferenceDiagram': BiologySvgDiagrams.chromosomalDisorderKaryotypeClinicalFeatureSummaryReferenceDiagramsvg,
        'metabolicBlockSubstrateAccumulationProductDeficiencyPathwayDiagram': BiologySvgDiagrams.metabolicBlockSubstrateAccumulationProductDeficiencyPathwayDiagramsvg,
        'polygenicRiskScoreGWASManhattanPlotThresholdLiabilityModelDiagram': BiologySvgDiagrams.polygenicRiskScoreGWASManhattanPlotThresholdLiabilityModelDiagramsvg,
        'geneticDiagnosticPathwayBiochemicalCytogeneticMolecularDecisionTreeDiagram': BiologySvgDiagrams.geneticDiagnosticPathwayBiochemicalCytogeneticMolecularDecisionTreeDiagramsvg,
        'geneTherapyERTSmallMoleculeGeneEditingTreatmentStrategyComparisonDiagram': BiologySvgDiagrams.geneTherapyERTSmallMoleculeGeneEditingTreatmentStrategyComparisonDiagramsvg,

        // Microbial Metabolism
        'catabolicAnabolicEnergyFlowDiagram': BiologySvgDiagrams.catabolicAnabolicEnergyFlowDiagramsvg,
        'microbialNutritionalClassificationMatrix': BiologySvgDiagrams.microbialNutritionalClassificationMatrixsvg,
        'glycolysisEnergyInvestmentPayoffStepDiagram': BiologySvgDiagrams.glycolysisEnergyInvestmentPayoffStepDiagramsvg,
        'tcaCycleIntermediatesAndYieldDiagram': BiologySvgDiagrams.tcaCycleIntermediatesAndYieldDiagramsvg,
        'electronTransportChainComplexesProtonPumpingDiagram': BiologySvgDiagrams.electronTransportChainComplexesProtonPumpingDiagramsvg,
        'fermentationPathwayProductsComparisonChart': BiologySvgDiagrams.fermentationPathwayProductsComparisonChartsvg,
        'nitrificationSulfurIronOxidationElectronDonorDiagram': BiologySvgDiagrams.nitrificationSulfurIronOxidationElectronDonorDiagramsvg,
        'oxygenicVsAnoxygenicPhotosynthesisElectronFlowDiagram': BiologySvgDiagrams.oxygenicVsAnoxygenicPhotosynthesisElectronFlowDiagramsvg,
        'aminoAcidFamilyBiosyntheticPrecursorDiagram': BiologySvgDiagrams.aminoAcidFamilyBiosyntheticPrecursorDiagramsvg,
        'feedbackInhibitionAllostericEnzymePathwayDiagram': BiologySvgDiagrams.feedbackInhibitionAllostericEnzymePathwayDiagramsvg,

        // Sterilisation & Control
        'sterilisationDisinfectionAntisepsisSanitisationSpectrumDiagram': BiologySvgDiagrams.sterilisationDisinfectionAntisepsisSanitisationSpectrumDiagramsvg,
        'physicalControlAgentsMoistDryHeatRadiationFiltrationDiagram': BiologySvgDiagrams.physicalControlAgentsMoistDryHeatRadiationFiltrationDiagramsvg,
        'chemicalDisinfectantMechanismsTargetSitesDiagram': BiologySvgDiagrams.chemicalDisinfectantMechanismsTargetSitesDiagramsvg,
        'antibioticTargetSitesBacterialCellDiagram': BiologySvgDiagrams.antibioticTargetSitesBacterialCellDiagramsvg,
        'antifungalTargetErgosterolVsCholesterolMembraneDiagram': BiologySvgDiagrams.antifungalTargetErgosterolVsCholesterolMembraneDiagramsvg,
        'amrMechanismsEnzymeTargetEffluxPermeabilityDiagram': BiologySvgDiagrams.amrMechanismsEnzymeTargetEffluxPermeabilityDiagramsvg,
        'spauldingClassificationCriticalSemicriticalNoncriticalDiagram': BiologySvgDiagrams.spauldingClassificationCriticalSemicriticalNoncriticalDiagramsvg,
        'biofilmFormationStagesEpsMatrixResistanceDiagram': BiologySvgDiagrams.biofilmFormationStagesEpsMatrixResistanceDiagramsvg,

        // Host-Pathogen
        'hostPathogenRelationshipInfectionDiseaseSpectrumDiagram': BiologySvgDiagrams.hostPathogenRelationshipInfectionDiseaseSpectrumDiagramsvg,
        'virulenceFactorTypesToxinsCapsuleSecretionSystemsDiagram': BiologySvgDiagrams.virulenceFactorTypesToxinsCapsuleSecretionSystemsDiagramsvg,
        'bacterialPathogenSyndromeOrganSystemTargetsDiagram': BiologySvgDiagrams.bacterialPathogenSyndromeOrganSystemTargetsDiagramsvg,
        'viralReplicationCycleHostCellDamageMechanismsDiagram': BiologySvgDiagrams.viralReplicationCycleHostCellDamageMechanismsDiagramsvg,
        'dimorphicFungiYeastMouldTemperatureFormSwitchDiagram': BiologySvgDiagrams.dimorphicFungiYeastMouldTemperatureFormSwitchDiagramsvg,
        'plasmodiumLifecycleMosquitoHumanErythrocyticStageDiagram': BiologySvgDiagrams.plasmodiumLifecycleMosquitoHumanErythrocyticStageDiagramsvg,
        'innateAdaptiveImmunityPRRComplementPhagocytosisDiagram': BiologySvgDiagrams.innateAdaptiveImmunityPRRComplementPhagocytosisDiagramsvg,
        'reproductionNumberR0HerdImmunityThresholdTransmissionRoutesDiagram': BiologySvgDiagrams.reproductionNumberR0HerdImmunityThresholdTransmissionRoutesDiagramsvg,

        // Microbial Ecology
        'microbialAbundanceBiomassGlobalDistributionDiagram': BiologySvgDiagrams.microbialAbundanceBiomassGlobalDistributionDiagramsvg,
        'nitrogenCarbonSulfurCycleMicrobialTransformationDiagram': BiologySvgDiagrams.nitrogenCarbonSulfurCycleMicrobialTransformationDiagramsvg,
        'rhizosphereEffectRootExudateMicrobialDensityGradientDiagram': BiologySvgDiagrams.rhizosphereEffectRootExudateMicrobialDensityGradientDiagramsvg,
        'oceanicZonesMicrobialCommunityLightNutrientGradientDiagram': BiologySvgDiagrams.oceanicZonesMicrobialCommunityLightNutrientGradientDiagramsvg,
        'extremophileHabitatTemperaturePHSalinityToleranceRangeDiagram': BiologySvgDiagrams.extremophileHabitatTemperaturePHSalinityToleranceRangeDiagramsvg,
        'quorumSensingAHLSignalThresholdBiofilmFormationDiagram': BiologySvgDiagrams.quorumSensingAHLSignalThresholdBiofilmFormationDiagramsvg,
        'gutMicrobiomePhylaCompositionDysbiosisHealthDiagram': BiologySvgDiagrams.gutMicrobiomePhylaCompositionDysbiosisHealthDiagramsvg,
        'metagenomicsWorkflowDNAExtractionSequencingAnnotationDiagram': BiologySvgDiagrams.metagenomicsWorkflowDNAExtractionSequencingAnnotationDiagramsvg,
        'bioremediation_anaerobicDigestionMicrobialConsortiumStageDiagram': BiologySvgDiagrams.bioremediation_anaerobicDigestionMicrobialConsortiumStageDiagramsvg,

        // Bacterial Genetics & Molecular Biology
        'bacterialChromosomeNucleoidPlasmidOrganisationDiagram': BiologySvgDiagrams.bacterialChromosomeNucleoidPlasmidOrganisationDiagramsvg,
        'bacterialReplicationForkOriCLeadingLaggingStrandDiagram': BiologySvgDiagrams.bacterialReplicationForkOriCLeadingLaggingStrandDiagramsvg,
        'rnaPolymeraseSigmaFactorPromoterOpenComplexFormationDiagram': BiologySvgDiagrams.rnaPolymeraseSigmaFactorPromoterOpenComplexFormationDiagramsvg,
        'prokaryoticRibosomeShineDalgarnoInitiationElongationTerminationDiagram': BiologySvgDiagrams.prokaryoticRibosomeShineDalgarnoInitiationElongationTerminationDiagramsvg,
        'mutationTypePointFrameshiftSOSRepairPathwaysDiagram': BiologySvgDiagrams.mutationTypePointFrameshiftSOSRepairPathwaysDiagramsvg,
        'transformationConjugationTransductionMobileElementDiagram': BiologySvgDiagrams.transformationConjugationTransductionMobileElementDiagramsvg,
        'recAMediatedHollidayJunctionBranchMigrationResolutionDiagram': BiologySvgDiagrams.recAMediatedHollidayJunctionBranchMigrationResolutionDiagramsvg,
        'lacOperonPositiveNegativeControlCataboliteRepressionDiagram': BiologySvgDiagrams.lacOperonPositiveNegativeControlCataboliteRepressionDiagramsvg,
        'lyticLysogenicCycleProphageInductionBurstSizeDiagram': BiologySvgDiagrams.lyticLysogenicCycleProphageInductionBurstSizeDiagramsvg,
        'shortReadLongReadSequencingWorkflowGenomeAssemblyAnnotationDiagram': BiologySvgDiagrams.shortReadLongReadSequencingWorkflowGenomeAssemblyAnnotationDiagramsvg,

        // Microbiology Fundamentals
        'prokaryoteVsEukaryoteComparisonDiagram': BiologySvgDiagrams.prokaryoteVsEukaryoteComparisonDiagramsvg,
        'annotatedBacterialCellUltrastructureDiagram': BiologySvgDiagrams.annotatedBacterialCellUltrastructureDiagramsvg,
        'bacterialShapesAndCellularArrangementChart': BiologySvgDiagrams.bacterialShapesAndCellularArrangementChartsvg,
        'gramStainProcedureAndCellWallCrossSection': BiologySvgDiagrams.gramStainProcedureAndCellWallCrossSectionsvg,
        'metabolicCategoryMatrixAerobicAnaerobicAutotrophHeterotrophDiagram': BiologySvgDiagrams.metabolicCategoryMatrixAerobicAnaerobicAutotrophHeterotrophDiagramsvg,
        'horizontalGeneTransferThreePathwaysDiagram': BiologySvgDiagrams.horizontalGeneTransferThreePathwaysDiagramsvg,
        'stagesOfBacterialInfectionVirulenceFactorsDiagram': BiologySvgDiagrams.stagesOfBacterialInfectionVirulenceFactorsDiagramsvg,
        'fourMechanismsOfAntibioticResistanceDiagram': BiologySvgDiagrams.fourMechanismsOfAntibioticResistanceDiagramsvg,
        'bacterialNitrogenCycleStepsAndOrganismsDiagram': BiologySvgDiagrams.bacterialNitrogenCycleStepsAndOrganismsDiagramsvg,
        'biofilmFormationFiveStagesDiagram': BiologySvgDiagrams.biofilmFormationFiveStagesDiagramsvg,

        // Virology
        'virusSizescaleComparisonToLightMicroscopyResolutionDiagram': BiologySvgDiagrams.virusSizescaleComparisonToLightMicroscopyResolutionDiagramsvg,
        'envelopedVsNonEnvelopedViralStructureAnnotatedDiagram': BiologySvgDiagrams.envelopedVsNonEnvelopedViralStructureAnnotatedDiagramsvg,
        'baltimoreSevenClassFlowchartGenomeMrnaStrategyDiagram': BiologySvgDiagrams.baltimoreSevenClassFlowchartGenomeMrnaStrategyDiagramsvg,
        'lyticVsLysogenicCycleComparisonDiagram': BiologySvgDiagrams.lyticVsLysogenicCycleComparisonDiagramsvg,
        'viralInfectionOutcomeSpectrumLatencyPersistenceTransformationDiagram': BiologySvgDiagrams.viralInfectionOutcomeSpectrumLatencyPersistenceTransformationDiagramsvg,
        'innateAdaptiveAntiviralImmunityTimelineDiagram': BiologySvgDiagrams.innateAdaptiveAntiviralImmunityTimelineDiagramsvg,
        'antigenicDriftVsShiftInfluenzaSegmentReassortmentDiagram': BiologySvgDiagrams.antigenicDriftVsShiftInfluenzaSegmentReassortmentDiagramsvg,
        'antiviralDrugTargetSitesonHivReplicationCycleDiagram': BiologySvgDiagrams.antiviralDrugTargetSitesonHivReplicationCycleDiagramsvg,
        'basicReproductionNumberR0ComparisonVirusBarChartDiagram': BiologySvgDiagrams.basicReproductionNumberR0ComparisonVirusBarChartDiagramsvg,
        'viralVectorGeneTherapyDeliveryMechanismDiagram': BiologySvgDiagrams.viralVectorGeneTherapyDeliveryMechanismDiagramsvg,

        // Mycology
        'fungiVsPlantsBacteriaAnimalsFeatureComparisonTableDiagram': BiologySvgDiagrams.fungiVsPlantsBacteriaAnimalsFeatureComparisonTableDiagramsvg,
        'annotatedFungalHyphaeCrossSectionChitinErgosteolDiagram': BiologySvgDiagrams.annotatedFungalHyphaeCrossSectionChitinErgosteolDiagramsvg,
        'yeastMouldDimorphicFormTemperatureSwitchDiagram': BiologySvgDiagrams.yeastMouldDimorphicFormTemperatureSwitchDiagramsvg,
        'fungalPhylaSporeTypeCharacteristicsCladogramDiagram': BiologySvgDiagrams.fungalPhylaSporeTypeCharacteristicsCladogramDiagramsvg,
        'rhizopusSexualAsexualLifecycleZygosporeFormationDiagram': BiologySvgDiagrams.rhizopusSexualAsexualLifecycleZygosporeFormationDiagramsvg,
        'saprotrophicAbsorptiveNutritionExtracellularDigestionDiagram': BiologySvgDiagrams.saprotrophicAbsorptiveNutritionExtracellularDigestionDiagramsvg,
        'mycosesClassificationSuperficialCutaneousSubcutaneousSystemicDiagram': BiologySvgDiagrams.mycosesClassificationSuperficialCutaneousSubcutaneousSystemicDiagramsvg,
        'ectomycorrhizalVsArbuscularMycorrhizalRootStructureDiagram': BiologySvgDiagrams.ectomycorrhizalVsArbuscularMycorrhizalRootStructureDiagramsvg,
        'penicillinBiosynthesisPathwayPenicilliumFermentationDiagram': BiologySvgDiagrams.penicillinBiosynthesisPathwayPenicilliumFermentationDiagramsvg,
        'ophiocordycepsZombieAntBehaviourManipulationLifecycleDiagram': BiologySvgDiagrams.ophiocordycepsZombieAntBehaviourManipulationLifecycleDiagramsvg,

        // Protistology
        'protistParaphyleticSupergroups_SAR_Excavata_Amoebozoa_OverviewDiagram': BiologySvgDiagrams.protistParaphyleticSupergroups_SAR_Excavata_Amoebozoa_OverviewDiagramsvg,
        'parameciumAnnotatedUltrastructureContractileVacuoleTrichocystDiagram': BiologySvgDiagrams.parameciumAnnotatedUltrastructureContractileVacuoleTrichocystDiagramsvg,
        'protistSuperGroupCladogramSARArchaeplastidaExcavataDiagram': BiologySvgDiagrams.protistSuperGroupCladogramSARArchaeplastidaExcavataDiagramsvg,
        'ciliaPseudopodiaFlagellaAxopodiaLocomotiontypeComparisonDiagram': BiologySvgDiagrams.ciliaPseudopodiaFlagellaAxopodiaLocomotiontypeComparisonDiagramsvg,
        'mixotrophyPhagotrophyPhotoautotrophyNutritionSpectrumDiagram': BiologySvgDiagrams.mixotrophyPhagotrophyPhotoautotrophyNutritionSpectrumDiagramsvg,
        'parameciumConjugationNuclearExchangeMicronucleusMacronucleusDiagram': BiologySvgDiagrams.parameciumConjugationNuclearExchangeMicronucleusMacronucleusDiagramsvg,
        'plasmodiumFalciparumCompleteLifecycleHumanAnophelesHostDiagram': BiologySvgDiagrams.plasmodiumFalciparumCompleteLifecycleHumanAnophelesHostDiagramsvg,
        'algalPigmentAbsorptionSpectraChlorophyllPhycoerythrinFucoxanthinDiagram': BiologySvgDiagrams.algalPigmentAbsorptionSpectraChlorophyllPhycoerythrinFucoxanthinDiagramsvg,
        'microbialLoopDOMBacteriaFlagellatesCiliatesmZooplanktonFlowDiagram': BiologySvgDiagrams.microbialLoopDOMBacteriaFlagellatesCiliatesmZooplanktonFlowDiagramsvg,
        'dictyosteliumAggregationSlugFruitingBodyDevelopmentalLifecycleDiagram': BiologySvgDiagrams.dictyosteliumAggregationSlugFruitingBodyDevelopmentalLifecycleDiagramsvg,

        // Microbial Growth
        'binaryFissionFtsZRingDivisomeSeptumFormationDiagram': BiologySvgDiagrams.binaryFissionFtsZRingDivisomeSeptumFormationDiagramsvg,
        'fourPhaseBatchCultureGrowthCurveSemiLogPlotDiagram': BiologySvgDiagrams.fourPhaseBatchCultureGrowthCurveSemiLogPlotDiagramsvg,
        'cardinalTemperaturePHWaterActivityGrowthRangeDiagram': BiologySvgDiagrams.cardinalTemperaturePHWaterActivityGrowthRangeDiagramsvg,
        'macronutrientMicronutrientGrowthFactorHierarchyDiagram': BiologySvgDiagrams.macronutrientMicronutrientGrowthFactorHierarchyDiagramsvg,
        'selectiveDifferentialEnrichedMediaFunctionComparisonDiagram': BiologySvgDiagrams.selectiveDifferentialEnrichedMediaFunctionComparisonDiagramsvg,
        'platecountTurbidimetryFlowCytometryMethodComparisonDiagram': BiologySvgDiagrams.platecountTurbidimetryFlowCytometryMethodComparisonDiagramsvg,
        'chemostatSteadyStateDilutionRateSubstrateConcentrationCellDensityDiagram': BiologySvgDiagrams.chemostatSteadyStateDilutionRateSubstrateConcentrationCellDensityDiagramsvg,
        'physicalChemicalControlMethodsSterilisationHierarchyDiagram': BiologySvgDiagrams.physicalChemicalControlMethodsSterilisationHierarchyDiagramsvg,
        'biofilmFiveStageFormationEPSMatrixWaterChannelQuorumSensingDiagram': BiologySvgDiagrams.biofilmFiveStageFormationEPSMatrixWaterChannelQuorumSensingDiagramsvg,
        'batchFedBatchContinuousFermentationProductivityComparisonDiagram': BiologySvgDiagrams.batchFedBatchContinuousFermentationProductivityComparisonDiagramsvg,

        // Photosynthesis - Light Reactions
        'chloroplastUltrastructureAnnotatedCrossSection': BiologySvgDiagrams.chloroplastUltrastructureAnnotatedCrossSectionsvg,
        'photosystemIandIIReactionCentreAntennaComplexDiagram': BiologySvgDiagrams.photosystemIandIIReactionCentreAntennaComplexDiagramsvg,
        'zSchemeElectronEnergyLevelCarrierSequenceDiagram': BiologySvgDiagrams.zSchemeElectronEnergyLevelCarrierSequenceDiagramsvg,
        'oxygenEvolvingComplexSStateCycleDiagram': BiologySvgDiagrams.oxygenEvolvingComplexSStateCycleDiagramsvg,
        'thylakoidProtonGradientCF1CF0AtpSynthaseMechanismDiagram': BiologySvgDiagrams.thylakoidProtonGradientCF1CF0AtpSynthaseMechanismDiagramsvg,
        'atpNadphOxygenProductStoichiometryFlowDiagram': BiologySvgDiagrams.atpNadphOxygenProductStoichiometryFlowDiagramsvg,
        'nonPhotochemicalQuenchingXanthophyllCycleStateDiagram': BiologySvgDiagrams.nonPhotochemicalQuenchingXanthophyllCycleStateDiagramsvg,
        'hillReactionDcpipAssaySetupAndColourChangeDiagram': BiologySvgDiagrams.hillReactionDcpipAssaySetupAndColourChangeDiagramsvg,
        'primaryEndosymbiosisChloroplastOriginTimelineDiagram': BiologySvgDiagrams.primaryEndosymbiosisChloroplastOriginTimelineDiagramsvg,
        'artificialPhotosynthesisDyeSensitisedSolarCellDesignDiagram': BiologySvgDiagrams.artificialPhotosynthesisDyeSensitisedSolarCellDesignDiagramsvg,

        // Photosynthesis - Calvin Cycle
        'calvinCycleStromaLocationInputOutputOverviewDiagram': BiologySvgDiagrams.calvinCycleStromaLocationInputOutputOverviewDiagramsvg,
        'rubiscoCarbonFixationRubpTo3PgaReactionDiagram': BiologySvgDiagrams.rubiscoCarbonFixationRubpTo3PgaReactionDiagramsvg,
        'pgaTo13BpgToG3pReductionStepAtpNadphConsumptionDiagram': BiologySvgDiagrams.pgaTo13BpgToG3pReductionStepAtpNadphConsumptionDiagramsvg,
        'rubpRegenerationCarbonShufflePhosphoribulokinaseStepDiagram': BiologySvgDiagrams.rubpRegenerationCarbonShufflePhosphoribulokinaseStepDiagramsvg,
        'calvinCycleThreeTurnCarbonAtpNadphBalanceAccountingDiagram': BiologySvgDiagrams.calvinCycleThreeTurnCarbonAtpNadphBalanceAccountingDiagramsvg,
        'thioredoxinLightActivationCalvinCycleEnzymesDiagram': BiologySvgDiagrams.thioredoxinLightActivationCalvinCycleEnzymesDiagramsvg,
        'c3LeafMesophyllRubiscoOnlyFixationAnatomyDiagram': BiologySvgDiagrams.c3LeafMesophyllRubiscoOnlyFixationAnatomyDiagramsvg,
        'kranzAnatomyMesophyllBundleSheathPepCarbonPumpDiagram': BiologySvgDiagrams.kranzAnatomyMesophyllBundleSheathPepCarbonPumpDiagramsvg,
        'camDayNightStomataOpenCloseTemporalCarbonFixationDiagram': BiologySvgDiagrams.camDayNightStomataOpenCloseTemporalCarbonFixationDiagramsvg,
        'c4RiceProjectYieldImprovementRubiscoEngineeringRoadmapDiagram': BiologySvgDiagrams.c4RiceProjectYieldImprovementRubiscoEngineeringRoadmapDiagramsvg,

        // Mitochondria & Respiration
        'mitochondrionAnnotatedUltrastructureCristaeMatrixImsDiagram': BiologySvgDiagrams.mitochondrionAnnotatedUltrastructureCristaeMatrixImsDiagramsvg,
        'glycolysisInvestmentPayoffPhaseTenStepEnzymeFlowDiagram': BiologySvgDiagrams.glycolysisInvestmentPayoffPhaseTenStepEnzymeFlowDiagramsvg,
        'pyruvateDehydrogenaseComplexThreeEnzymeFiveCoFactorMechanismDiagram': BiologySvgDiagrams.pyruvateDehydrogenaseComplexThreeEnzymeFiveCoFactorMechanismDiagramsvg,
        'krebsCycleEightStepEnzymeIntermediateCoFactorYieldDiagram': BiologySvgDiagrams.krebsCycleEightStepEnzymeIntermediateCoFactorYieldDiagramsvg,
        'mitochondrialEtcFourComplexesProtonPumpingRedoxPotentialDiagram': BiologySvgDiagrams.mitochondrialEtcFourComplexesProtonPumpingRedoxPotentialDiagramsvg,
        'f0f1AtpSynthaseRotaryMotorBindingChangeMechanismDiagram': BiologySvgDiagrams.f0f1AtpSynthaseRotaryMotorBindingChangeMechanismDiagramsvg,
        'perGlucoseAtpYieldPathwayBreakdownSummaryTableDiagram': BiologySvgDiagrams.perGlucoseAtpYieldPathwayBreakdownSummaryTableDiagramsvg,
        'lacticAcidVsAlcoholicFermentationNadPlusRegenerationPathwayDiagram': BiologySvgDiagrams.lacticAcidVsAlcoholicFermentationNadPlusRegenerationPathwayDiagramsvg,
        'carbohydrateFatProteinCatabolicEntryPointsRespirationDiagram': BiologySvgDiagrams.carbohydrateFatProteinCatabolicEntryPointsRespirationDiagramsvg,
        'energyChargeAtpAmpAllostericRegulationPfk1CitrateSynthaseDiagram': BiologySvgDiagrams.energyChargeAtpAmpAllostericRegulationPfk1CitrateSynthaseDiagramsvg,

        // Bioenergetics
        'gibbsFreeEnergyExergonicEndergonicReactionCoordinateDiagram': BiologySvgDiagrams.gibbsFreeEnergyExergonicEndergonicReactionCoordinateDiagramsvg,
        'atpMolecularStructurePhosphoanhydrideBondHighEnergyAnnotationDiagram': BiologySvgDiagrams.atpMolecularStructurePhosphoanhydrideBondHighEnergyAnnotationDiagramsvg,
        'phosphorylTransferPotentialHierarchyPepAtpG6pComparisonDiagram': BiologySvgDiagrams.phosphorylTransferPotentialHierarchyPepAtpG6pComparisonDiagramsvg,
        'redoxPotentialLadderNadhFadh2CoqCytcO2ElectronFlowDiagram': BiologySvgDiagrams.redoxPotentialLadderNadhFadh2CoqCytcO2ElectronFlowDiagramsvg,
        'protonMotiveForceDeltaPsiDeltaPhAcrossInnerMembraneDiagram': BiologySvgDiagrams.protonMotiveForceDeltaPsiDeltaPhAcrossInnerMembraneDiagramsvg,
        'aminoacylTrnaAmpIntermediateProteinSynthesisAtpCostDiagram': BiologySvgDiagrams.aminoacylTrnaAmpIntermediateProteinSynthesisAtpCostDiagramsvg,
        'nakAtpaseE1E2ConformationStoichiometryMembraneTransportDiagram': BiologySvgDiagrams.nakAtpaseE1E2ConformationStoichiometryMembraneTransportDiagramsvg,
        'myosinAtpaseCrossbridge_powerStrokeCycleActinFilamentDiagram': BiologySvgDiagrams.myosinAtpaseCrossbridge_powerStrokeCycleActinFilamentDiagramsvg,
        'ucp1BrownAdiposeTissueProtonLeakThermogenesisMechanismDiagram': BiologySvgDiagrams.ucp1BrownAdiposeTissueProtonLeakThermogenesisMechanismDiagramsvg,
        'ampkEnergyChargeSignallingCatabolicAnabolicToggleDiagram': BiologySvgDiagrams.ampkEnergyChargeSignallingCatabolicAnabolicToggleDiagramsvg,
        'catabolicAnabolicAmphibolicPathwayOrganisationOverviewDiagram': BiologySvgDiagrams.catabolicAnabolicAmphibolicPathwayOrganisationOverviewDiagramsvg,

        // Enzyme Kinetics
        'michaelisMentenHyperbolicVmaxKmSubstrateVelocityCurveDiagram': BiologySvgDiagrams.michaelisMentenHyperbolicVmaxKmSubstrateVelocityCurveDiagramsvg,
        'allostericFeedbackInhibitionSignalCascadePhosphorylationToggleDiagram': BiologySvgDiagrams.allostericFeedbackInhibitionSignalCascadePhosphorylationToggleDiagramsvg,
        'glycolysisGlycogenPentosePhosphateGluconeogenesisCentralHubDiagram': BiologySvgDiagrams.glycolysisGlycogenPentosePhosphateGluconeogenesisCentralHubDiagramsvg,
        'fattyAcidSynthesisBetaOxidationCompartmentalisationMitochondriaCytosolDiagram': BiologySvgDiagrams.fattyAcidSynthesisBetaOxidationCompartmentalisationMitochondriaCytosolDiagramsvg,
        'transaminationUreaCycleNitrogenFlowKrebsConnectionDiagram': BiologySvgDiagrams.transaminationUreaCycleNitrogenFlowKrebsConnectionDiagramsvg,
        'purinePyrimidineDenNovoSalvagePathwayUricAcidEndpointDiagram': BiologySvgDiagrams.purinePyrimidineDenNovoSalvagePathwayUricAcidEndpointDiagramsvg,
        'fedFastedStateInsulinGlucagonOrganMetabolicFluxSwitchDiagram': BiologySvgDiagrams.fedFastedStateInsulinGlucagonOrganMetabolicFluxSwitchDiagramsvg,
        'inbornErrorsEnzymeDeficiencyPathwayBlockageAccumulationDiagram': BiologySvgDiagrams.inbornErrorsEnzymeDeficiencyPathwayBlockageAccumulationDiagramsvg,
        'metabolicEngineeringFluxOptimisationBiotechProductionStrainDiagram': BiologySvgDiagrams.metabolicEngineeringFluxOptimisationBiotechProductionStrainDiagramsvg,

        // ATP Metabolism
        'atpMolecularStructureAdpAmpComparisonDiagram': BiologySvgDiagrams.atpMolecularStructureAdpAmpComparisonDiagramsvg,
        'atpHydrolysisPhosphorylTransferCoupledReactionDiagram': BiologySvgDiagrams.atpHydrolysisPhosphorylTransferCoupledReactionDiagramsvg,
        'substrateVsOxidativeVsPhotoPhosphorylationComparisonDiagram': BiologySvgDiagrams.substrateVsOxidativeVsPhotoPhosphorylationComparisonDiagramsvg,
        'myosinAtpaseCrossbridge_CycleMuscleCellDiagram': BiologySvgDiagrams.myosinAtpaseCrossbridge_CycleMuscleCellDiagramsvg,
        'aerobicRespirationAtpYieldStageByStageAccountingDiagram': BiologySvgDiagrams.aerobicRespirationAtpYieldStageByStageAccountingDiagramsvg,
        'atpAdpEnergyChargeHomeostasisCellularConcentrationDiagram': BiologySvgDiagrams.atpAdpEnergyChargeHomeostasisCellularConcentrationDiagramsvg,
        'cellTypeAtpDemandMitochondrialDensityComparisonDiagram': BiologySvgDiagrams.cellTypeAtpDemandMitochondrialDensityComparisonDiagramsvg,
        'pfk1AllostericRegulationAmpAtpCitrateSignallingDiagram': BiologySvgDiagrams.pfk1AllostericRegulationAmpAtpCitrateSignallingDiagramsvg,
        'cyanideEtcBlockadeAtpDepletionCellDeathCascadeDiagram': BiologySvgDiagrams.cyanideEtcBlockadeAtpDepletionCellDeathCascadeDiagramsvg,
        'atpSynthaseFTypeVTypeATypeEvolutionaryConservationDiagram': BiologySvgDiagrams.atpSynthaseFTypeVTypeATypeEvolutionaryConservationDiagramsvg,

        // Glycolysis
        'glycolysisOverviewCytosolLocationTwoPhasesFlowchartDiagram': BiologySvgDiagrams.glycolysisOverviewCytosolLocationTwoPhasesFlowchartDiagramsvg,
        'glycolysisSteps1to5SubstrateProductEnzymeAtpInvestmentDiagram': BiologySvgDiagrams.glycolysisSteps1to5SubstrateProductEnzymeAtpInvestmentDiagramsvg,
        'glycolysisSteps6to10NadhAtpYieldSubstrateLevelPhosphorylationDiagram': BiologySvgDiagrams.glycolysisSteps6to10NadhAtpYieldSubstrateLevelPhosphorylationDiagramsvg,
        'grossVsNetAtpGlycolysisNadhFateAerobicAnaerobicComparisonDiagram': BiologySvgDiagrams.grossVsNetAtpGlycolysisNadhFateAerobicAnaerobicComparisonDiagramsvg,
        'pfk1HexokinasePyruvateKinaseAllostericRegulationSignallingDiagram': BiologySvgDiagrams.pfk1HexokinasePyruvateKinaseAllostericRegulationSignallingDiagramsvg,
        'pyruvateMetabolicBranchpointAerobicLactateEthanolGluconeogenesisDiagram': BiologySvgDiagrams.pyruvateMetabolicBranchpointAerobicLactateEthanolGluconeogenesisDiagramsvg,
        'fructoseGalactoseMannoseGlycolysisEntryPointsLeloirPathwayDiagram': BiologySvgDiagrams.fructoseGalactoseMannoseGlycolysisEntryPointsLeloirPathwayDiagramsvg,
        'glycolyticIntermediatesBranchpointsPppGlycogenLipidAminoAcidDiagram': BiologySvgDiagrams.glycolyticIntermediatesBranchpointsPppGlycogenLipidAminoAcidDiagramsvg,
        'warburgEffectCancerCellAerobicGlycolysisLdhaHif1aPkm2Diagram': BiologySvgDiagrams.warburgEffectCancerCellAerobicGlycolysisLdhaHif1aPkm2Diagramsvg,
        'empVsEdVsPhosphoketolasePathwayComparativeMicrobiologyDiagram': BiologySvgDiagrams.empVsEdVsPhosphoketolasePathwayComparativeMicrobiologyDiagramsvg,

        // Krebs Cycle
        'krebsCycleOverviewMitochondrialMatrixLocationOaaAcetylCoaInputDiagram': BiologySvgDiagrams.krebsCycleOverviewMitochondrialMatrixLocationOaaAcetylCoaInputDiagramsvg,
        'pdcE1E2E3SubunitCofactorMechanismPyruvateToAcetylCoaDiagram': BiologySvgDiagrams.pdcE1E2E3SubunitCofactorMechanismPyruvateToAcetylCoaDiagramsvg,
        'krebsCycleEightStepsEnzymeSubstrateProductCofactorCircularDiagram': BiologySvgDiagrams.krebsCycleEightStepsEnzymeSubstrateProductCofactorCircularDiagramsvg,
        'krebsCyclePerTurnPerGlucoseNadhFadh2GtpCo2YieldAccountingDiagram': BiologySvgDiagrams.krebsCyclePerTurnPerGlucoseNadhFadh2GtpCo2YieldAccountingDiagramsvg,
        'krebsCycleAllostericRegulationCitrateSynthaseIdhAlphaKgdhcCalciumAtpNadhDiagram': BiologySvgDiagrams.krebsCycleAllostericRegulationCitrateSynthaseIdhAlphaKgdhcCalciumAtpNadhDiagramsvg,
        'amphibolicKrebsCycleCataplerosisBiosynthesisAnaplerosis_branchpointDiagram': BiologySvgDiagrams.amphibolicKrebsCycleCataplerosisBiosynthesisAnaplerosis_branchpointDiagramsvg,
        'krebsCycleCarbohydrateFatProteinNitrogenMetabolismConvergenceDiagram': BiologySvgDiagrams.krebsCycleCarbohydrateFatProteinNitrogenMetabolismConvergenceDiagramsvg,
        'oncometaboliteSuccinateFumarate2HgDioxygenaseInhibitionEpigeneticDysregulationDiagram': BiologySvgDiagrams.oncometaboliteSuccinateFumarate2HgDioxygenaseInhibitionEpigeneticDysregulationDiagramsvg,
        'glyoxylateCycleIsocitrateLyaseMalateSynthaseComparisonTcaDiagram': BiologySvgDiagrams.glyoxylateCycleIsocitrateLyaseMalateSynthaseComparisonTcaDiagramsvg,
        'krebs1937PigeonMuscleSubstrateCatalyticCycleOriginalExperimentReconstructionDiagram': BiologySvgDiagrams.krebs1937PigeonMuscleSubstrateCatalyticCycleOriginalExperimentReconstructionDiagramsvg,

        // ETC & Chemiosmosis
        'reductionPotentialScaleNadhToO2ElectronFlowThermodynamicsDiagram': BiologySvgDiagrams.reductionPotentialScaleNadhToO2ElectronFlowThermodynamicsDiagramsvg,
        'nadhFadh2CoenzymeQCytochromeCMobileCarrierEtcPositionDiagram': BiologySvgDiagrams.nadhFadh2CoenzymeQCytochromeCMobileCarrierEtcPositionDiagramsvg,
        'etcComplexesItoIVSubunitCofactorProtonPumpingInnerMembraneDiagram': BiologySvgDiagrams.etcComplexesItoIVSubunitCofactorProtonPumpingInnerMembraneDiagramsvg,
        'atpSynthaseF0F1RotaryMechanismBindingChangeThreeStateDiagram': BiologySvgDiagrams.atpSynthaseF0F1RotaryMechanismBindingChangeThreeStateDiagramsvg,
        'mitchellChemiosmosisProtonGradientPmfMembranePotentialPhGradientDiagram': BiologySvgDiagrams.mitchellChemiosmosisProtonGradientPmfMembranePotentialPhGradientDiagramsvg,
        'respirasomeSupercomplexCI_CIII2_CIVCristaeOrganisationCardiolipinDiagram': BiologySvgDiagrams.respirasomeSupercomplexCI_CIII2_CIVCristaeOrganisationCardiolipinDiagramsvg,
        'rosSuperoxideSodSuperoxideH2O2HydroxylFentonAntioxidantDefenceDiagram': BiologySvgDiagrams.rosSuperoxideSodSuperoxideH2O2HydroxylFentonAntioxidantDefenceDiagramsvg,
        'modernPoRatioNadhFadh2ProtonStoichiometryTransportCostAdjustedYieldDiagram': BiologySvgDiagrams.modernPoRatioNadhFadh2ProtonStoichiometryTransportCostAdjustedYieldDiagramsvg,
        'mitochondrialDiseaseMtdnaMutationHeteroplasmyEtcComplexDeficiencyTissueDiagram': BiologySvgDiagrams.mitochondrialDiseaseMtdnaMutationHeteroplasmyEtcComplexDeficiencyTissueDiagramsvg,
        'endosymbioticOriginMitochondriaAlphaproteobacteriaEtcEvolutionChloroplastParallelDiagram': BiologySvgDiagrams.endosymbioticOriginMitochondriaAlphaproteobacteriaEtcEvolutionChloroplastParallelDiagramsvg,

        // Fermentation
        'fermentationNadRegenerationGlycolysisBottleneckAerobicAnaerobicBranchpointDiagram': BiologySvgDiagrams.fermentationNadRegenerationGlycolysisBottleneckAerobicAnaerobicBranchpointDiagramsvg,
        'ldhPyruvateToLactateMechanismIsoformsCoriCycleMuscleLiverDiagram': BiologySvgDiagrams.ldhPyruvateToLactateMechanismIsoformsCoriCycleMuscleLiverDiagramsvg,
        'alcoholicFermentationPdcAdhTwoStepPyruvateToEthanolCo2TppMechanismDiagram': BiologySvgDiagrams.alcoholicFermentationPdcAdhTwoStepPyruvateToEthanolCo2TppMechanismDiagramsvg,
        'microbialFermentationDiversityMixedAcidButanediolPropionicAbeFermentationProductsDiagram': BiologySvgDiagrams.microbialFermentationDiversityMixedAcidButanediolPropionicAbeFermentationProductsDiagramsvg,
        'pasteurEffectCrabtreeEffectOxygenGlucoseConcentrationFermentationSwitchDiagram': BiologySvgDiagrams.pasteurEffectCrabtreeEffectOxygenGlucoseConcentrationFermentationSwitchDiagramsvg,
        'industrialFermentationBioreactorBatchFedBatchContinuousModeFoodBiofuelDiagram': BiologySvgDiagrams.industrialFermentationBioreactorBatchFedBatchContinuousModeFoodBiofuelDiagramsvg,
        'humanBodyFermentationMuscleRbcGutMicrobiomeScfaWarburgSitesDiagram': BiologySvgDiagrams.humanBodyFermentationMuscleRbcGutMicrobiomeScfaWarburgSitesDiagramsvg,
        'lacticAcidosisTypeATypeBCausesBloodLactateThresholdAcidosisConsequencesDiagram': BiologySvgDiagrams.lacticAcidosisTypeATypeBCausesBloodLactateThresholdAcidosisConsequencesDiagramsvg,
        'fermentationEvolutionaryTimlinePreoxygentEarthAnoxicNicheObligateVsFacultativeAnaerobeDiagram': BiologySvgDiagrams.fermentationEvolutionaryTimlinePreoxygentEarthAnoxicNicheObligateVsFacultativeAnaerobeDiagramsvg,
        'metabolicEngineeringFermentationStrainImprovementBiofuelPharmaceuticalYieldOptimisationDiagram': BiologySvgDiagrams.metabolicEngineeringFermentationStrainImprovementBiofuelPharmaceuticalYieldOptimisationDiagramsvg,

        // Pathogen & Infection
        'pathogenHostInfectionCycleDiagram': BiologySvgDiagrams.pathogenHostInfectionCycleDiagramsvg,
        'pathogenClassificationComparativeChart': BiologySvgDiagrams.pathogenClassificationComparativeChartsvg,
        'bacterialCellVsViralParticleStructureDiagram': BiologySvgDiagrams.bacterialCellVsViralParticleStructureDiagramsvg,
        'pathogenTransmissionRouteFlowchart': BiologySvgDiagrams.pathogenTransmissionRouteFlowchartsvg,
        'humanBodyPortalsOfEntryAnnotatedDiagram': BiologySvgDiagrams.humanBodyPortalsOfEntryAnnotatedDiagramsvg,
        'virulenceFactorMechanismsAnnotatedDiagram': BiologySvgDiagrams.virulenceFactorMechanismsAnnotatedDiagramsvg,
        'lyticVsLysogenicViralReplicationCycleDiagram': BiologySvgDiagrams.lyticVsLysogenicViralReplicationCycleDiagramsvg,
        'diagnosticMethodsComparisonSensitivitySpecificityChart': BiologySvgDiagrams.diagnosticMethodsComparisonSensitivitySpecificityChartsvg,
        'antibioticResistanceMechanismsAnnotatedDiagram': BiologySvgDiagrams.antibioticResistanceMechanismsAnnotatedDiagramsvg,
        'reproductionNumberHerdImmunityThresholdGraph': BiologySvgDiagrams.reproductionNumberHerdImmunityThresholdGraphsvg,

        // Vaccines & Immunity
        'primaryVsSecondaryImmuneResponseCurvesDiagram': BiologySvgDiagrams.primaryVsSecondaryImmuneResponseCurvesDiagramsvg,
        'vaccinePlatformComparisonAnnotatedDiagram': BiologySvgDiagrams.vaccinePlatformComparisonAnnotatedDiagramsvg,
        'vaccineFormulationIngredientsBreakdownDiagram': BiologySvgDiagrams.vaccineFormulationIngredientsBreakdownDiagramsvg,
        'antigenPresentationToTAndBCellActivationPathwayDiagram': BiologySvgDiagrams.antigenPresentationToTAndBCellActivationPathwayDiagramsvg,
        'childhoodImmunisationScheduleTimelineDiagram': BiologySvgDiagrams.childhoodImmunisationScheduleTimelineDiagramsvg,
        'herdImmunityThresholdPopulationGridDiagram': BiologySvgDiagrams.herdImmunityThresholdPopulationGridDiagramsvg,
        'vaccineAdverseEventFrequencyRiskComparisonChart': BiologySvgDiagrams.vaccineAdverseEventFrequencyRiskComparisonChartsvg,
        'mRNAVaccineDeliveryLipidNanoparticleMechanismDiagram': BiologySvgDiagrams.mRNAVaccineDeliveryLipidNanoparticleMechanismDiagramsvg,
        'clinicalTrialPhasesTimelineFunnelDiagram': BiologySvgDiagrams.clinicalTrialPhasesTimelineFunnelDiagramsvg,
        'smallpoxEradicationGlobalCoverageMapDiagram': BiologySvgDiagrams.smallpoxEradicationGlobalCoverageMapDiagramsvg,

        // Antibodies
        'plasmaCellAntibodySecretionOverviewDiagram': BiologySvgDiagrams.plasmaCellAntibodySecretionOverviewDiagramsvg,
        'immunoglobulinYShapeHeavyLightChainFabFcDiagram': BiologySvgDiagrams.immunoglobulinYShapeHeavyLightChainFabFcDiagramsvg,
        'fiveImmunoglobulinIsotypesStructureFunctionComparisonChart': BiologySvgDiagrams.fiveImmunoglobulinIsotypesStructureFunctionComparisonChartsvg,
        'epitopeParatopeComplementarityBindingForcesDiagram': BiologySvgDiagrams.epitopeParatopeComplementarityBindingForcesDiagramsvg,
        'opsonisationComplementADCCAgglutinationEffectorPathwaysDiagram': BiologySvgDiagrams.opsonisationComplementADCCAgglutinationEffectorPathwaysDiagramsvg,
        'germinalCentreAffinityMaturationClassSwitchingDiagram': BiologySvgDiagrams.germinalCentreAffinityMaturationClassSwitchingDiagramsvg,
        'activeVsPassiveImmunityOnsetDurationComparisonDiagram': BiologySvgDiagrams.activeVsPassiveImmunityOnsetDurationComparisonDiagramsvg,
        'hybridomaTechnologyMyelomaBCellFusionWorkflowDiagram': BiologySvgDiagrams.hybridomaTechnologyMyelomaBCellFusionWorkflowDiagramsvg,
        'autoantibodyMediatedTissueDAmageMechanismsDiagram': BiologySvgDiagrams.autoantibodyMediatedTissueDAmageMechanismsDiagramsvg,
        'indirectElisaDetectionStepByStepDiagram': BiologySvgDiagrams.indirectElisaDetectionStepByStepDiagramsvg,

        // Disease & Epidemiology
        'signsVsSymptomsAetiologyPathogenesisConceptMapDiagram': BiologySvgDiagrams.signsVsSymptomsAetiologyPathogenesisConceptMapDiagramsvg,
        'diseaseClassificationSpiderDiagramByAetiology': BiologySvgDiagrams.diseaseClassificationSpiderDiagramByAetiologysvg,
        'infectiousDiseaseStagesIncubationProdromeAcuteConvalescenceDiagram': BiologySvgDiagrams.infectiousDiseaseStagesIncubationProdromeAcuteConvalescenceDiagramsvg,
        'atherosclerosisPlaqueDevelopmentCrossSectionDiagram': BiologySvgDiagrams.atherosclerosisPlaqueDevelopmentCrossSectionDiagramsvg,
        'mendelianInheritancePedigreePatternsDiagram': BiologySvgDiagrams.mendelianInheritancePedigreePatternsDiagramsvg,
        'acuteInflammationCardinalSignsMediatorCascadeDiagram': BiologySvgDiagrams.acuteInflammationCardinalSignsMediatorCascadeDiagramsvg,
        'incidenceVsPrevalenceChronicVsAcuteDiseaseComparisonGraph': BiologySvgDiagrams.incidenceVsPrevalenceChronicVsAcuteDiseaseComparisonGraphsvg,
        'primarySecondaryTertiaryPreventionLevelsDiagram': BiologySvgDiagrams.primarySecondaryTertiaryPreventionLevelsDiagramsvg,
        'marmotHealthGradientSocioeconomicStatusDiagram': BiologySvgDiagrams.marmotHealthGradientSocioeconomicStatusDiagramsvg,
        'zoonoticSpilloverDriversOneHealthFrameworkDiagram': BiologySvgDiagrams.zoonoticSpilloverDriversOneHealthFrameworkDiagramsvg,

        // Innate Immunity
        'innateVsAdaptiveImmunityTwoArmOverviewDiagram': BiologySvgDiagrams.innateVsAdaptiveImmunityTwoArmOverviewDiagramsvg,
        'firstLineDefenceBarriersAnnotatedBodyDiagram': BiologySvgDiagrams.firstLineDefenceBarriersAnnotatedBodyDiagramsvg,
        'tlrPampSignallingNFkBCytokineProductionPathwayDiagram': BiologySvgDiagrams.tlrPampSignallingNFkBCytokineProductionPathwayDiagramsvg,
        'complementThreePathwaysConvergenceC3ConvertaseMACDiagram': BiologySvgDiagrams.complementThreePathwaysConvergenceC3ConvertaseMACDiagramsvg,
        'tCellSubsetDifferentiationCytokineEnvironmentDiagram': BiologySvgDiagrams.tCellSubsetDifferentiationCytokineEnvironmentDiagramsvg,
        'germinalCentreDarkLightZoneSomaticHypermutationDiagram': BiologySvgDiagrams.germinalCentreDarkLightZoneSomaticHypermutationDiagramsvg,
        'majorCytokineSourceTargetFunctionNetworkDiagram': BiologySvgDiagrams.majorCytokineSourceTargetFunctionNetworkDiagramsvg,
        'primarySecondaryResponseAntibodyTitreCurvesDiagram': BiologySvgDiagrams.primarySecondaryResponseAntibodyTitreCurvesDiagramsvg,
        'gelCoomhsHypersensitivityTypeIToIVMechanismsDiagram': BiologySvgDiagrams.gelCoomhsHypersensitivityTypeIToIVMechanismsDiagramsvg,
        'checkpointInhibitorPD1PDL1CancerTCellActivationDiagram': BiologySvgDiagrams.checkpointInhibitorPD1PDL1CancerTCellActivationDiagramsvg,

        // White Blood Cells
        'haematopoiesisLineageMyeloidLymphoidTreeDiagram': BiologySvgDiagrams.haematopoiesisLineageMyeloidLymphoidTreeDiagramsvg,
        'neutrophilRecruitmentRollingAdhesionDiapedesisChemoaxisDiagram': BiologySvgDiagrams.neutrophilRecruitmentRollingAdhesionDiapedesisChemoaxisDiagramsvg,
        'eosinophilGranuleContentsAntiHelminthDegranulationDiagram': BiologySvgDiagrams.eosinophilGranuleContentsAntiHelminthDegranulationDiagramsvg,
        'basophilMastCellFcepsilonRIIgECrossLinkingDegranulationDiagram': BiologySvgDiagrams.basophilMastCellFcepsilonRIIgECrossLinkingDegranulationDiagramsvg,
        'macrophageM1M2PolarisationTissueMacrophageTypesAnnotatedDiagram': BiologySvgDiagrams.macrophageM1M2PolarisationTissueMacrophageTypesAnnotatedDiagramsvg,
        'dendriticCellMaturationMigrationNaiveTCellActivationDiagram': BiologySvgDiagrams.dendriticCellMaturationMigrationNaiveTCellActivationDiagramsvg,
        'thymusPositiveNegativeSelectionCD4CD8LinearisationDiagram': BiologySvgDiagrams.thymusPositiveNegativeSelectionCD4CD8LinearisationDiagramsvg,
        'bCellDevelopmentVDJRecombinationBoneMarrowPeripheryDiagram': BiologySvgDiagrams.bCellDevelopmentVDJRecombinationBoneMarrowPeripheryDiagramsvg,
        'nkCellMissingSelfKIRInhibitoryActivatingReceptorBalanceDiagram': BiologySvgDiagrams.nkCellMissingSelfKIRInhibitoryActivatingReceptorBalanceDiagramsvg,
        'leukaemiaClassificationBlastCellMorphologyAuerRodDiagram': BiologySvgDiagrams.leukaemiaClassificationBlastCellMorphologyAuerRodDiagramsvg,

        // Ecosystems
        'biotaAbiotaComponentsLabelledDiagram': BiologySvgDiagrams.biotaAbiotaComponentsLabelledDiagramsvg,
        'trophicLevelsPyramidAnnotatedDiagram': BiologySvgDiagrams.trophicLevelsPyramidAnnotatedDiagramsvg,
        'gppNppRespirationEnergyFlowDiagram': BiologySvgDiagrams.gppNppRespirationEnergyFlowDiagramsvg,
        'intermediateDisturbanceHypothesisDiversityCurve': BiologySvgDiagrams.intermediateDisturbanceHypothesisDiversityCurvesvg,
        'fourCategoriesEcosystemServicesClassificationChart': BiologySvgDiagrams.fourCategoriesEcosystemServicesClassificationChartsvg,
        'lakeZonationLittoralLimneticProfundalBenthicDiagram': BiologySvgDiagrams.lakeZonationLittoralLimneticProfundalBenthicDiagramsvg,
        'soilHorizonProfileOAbcRLayersDiagram': BiologySvgDiagrams.soilHorizonProfileOAbcRLayersDiagramsvg,
        'eutrophicationStagesAlgalBloomHypoxiaDiagram': BiologySvgDiagrams.eutrophicationStagesAlgalBloomHypoxiaDiagramsvg,
        'yellowstoneWolfReintroductionTrophicCascadeFlowDiagram': BiologySvgDiagrams.yellowstoneWolfReintroductionTrophicCascadeFlowDiagramsvg,
        'markReleaseRecaptureLincolnPetersenFormulaAnnotatedDiagram': BiologySvgDiagrams.markReleaseRecaptureLincolnPetersenFormulaAnnotatedDiagramsvg,

        // Food Webs & Energy
        'foodChainArrowDirectionEnergyFlowLabelledDiagram': BiologySvgDiagrams.foodChainArrowDirectionEnergyFlowLabelledDiagramsvg,
        'foodWebNodeLinkConnectanceDiagram': BiologySvgDiagrams.foodWebNodeLinkConnectanceDiagramsvg,
        'tenPercentEnergyTransferTrophicLevelCalculationDiagram': BiologySvgDiagrams.tenPercentEnergyTransferTrophicLevelCalculationDiagramsvg,
        'seaOtterUrchinKelpTopDownCascadeFlowDiagram': BiologySvgDiagrams.seaOtterUrchinKelpTopDownCascadeFlowDiagramsvg,
        'redundancyRobustnessExtinctionCascadeNetworkDiagram': BiologySvgDiagrams.redundancyRobustnessExtinctionCascadeNetworkDiagramsvg,
        'interactionTypesMatrixPlusMinus_zeroDiagram': BiologySvgDiagrams.interactionTypesMatrixPlusMinus_zeroDiagramsvg,
        'grazingVsDetritalPathwayEnergyFlowComparisonDiagram': BiologySvgDiagrams.grazingVsDetritalPathwayEnergyFlowComparisonDiagramsvg,
        'lotkaVolterraPredatorPreyOscillationPhaseDiagram': BiologySvgDiagrams.lotkaVolterraPredatorPreyOscillationPhaseDiagramsvg,
        'biomagnificationDDTConcentrationTrophicLevelBarChart': BiologySvgDiagrams.biomagnificationDDTConcentrationTrophicLevelBarChartsvg,
        'keystoneSpeciesConservationPriorityFoodWebDiagram': BiologySvgDiagrams.keystoneSpeciesConservationPriorityFoodWebDiagramsvg,

        // Ecosystem Energetics
        'firstSecondLawThermodynamicsEcosystemEnergyFlowDiagram': BiologySvgDiagrams.firstSecondLawThermodynamicsEcosystemEnergyFlowDiagramsvg,
        'gppNppAutotrophicRespirationSubtractionDiagram': BiologySvgDiagrams.gppNppAutotrophicRespirationSubtractionDiagramsvg,
        'assimilationNetProductionEcologicalEfficiencyCalculationFlowchart': BiologySvgDiagrams.assimilationNetProductionEcologicalEfficiencyCalculationFlowchartsvg,
        'organismalEnergyBudgetIPRFPartitioningDiagram': BiologySvgDiagrams.organismalEnergyBudgetIPRFPartitioningDiagramsvg,
        'threeTypesEcologicalPyramidsComparisonInvertedExampleDiagram': BiologySvgDiagrams.threeTypesEcologicalPyramidsComparisonInvertedExampleDiagramsvg,
        'c3Vs_c4VsCamPhotosynthesisPathwayComparisonDiagram': BiologySvgDiagrams.c3Vs_c4VsCamPhotosynthesisPathwayComparisonDiagramsvg,
        'endothermVsEctothermRespiratoryEnergyLossComparisonChart': BiologySvgDiagrams.endothermVsEctothermRespiratoryEnergyLossComparisonChartsvg,
        'odumStyleEnergyFlowBoxArrowCompartmentDiagram': BiologySvgDiagrams.odumStyleEnergyFlowBoxArrowCompartmentDiagramsvg,
        'humanAppropriationNPPLandUseGlobalPieChartDiagram': BiologySvgDiagrams.humanAppropriationNPPLandUseGlobalPieChartDiagramsvg,
        'nppComparisonBarChartMajorEcosystemTypesDiagram': BiologySvgDiagrams.nppComparisonBarChartMajorEcosystemTypesDiagramsvg,

        // Biogeochemical Cycles
        'reservoirFluxTurnoverTimeGeneralBiogeochemicalCycleDiagram': BiologySvgDiagrams.reservoirFluxTurnoverTimeGeneralBiogeochemicalCycleDiagramsvg,
        'globalCarbonCycleReservoirsFluxesAnnotatedDiagram': BiologySvgDiagrams.globalCarbonCycleReservoirsFluxesAnnotatedDiagramsvg,
        'nitrogenCycleFixationNitrificationDenitrificationPathwayDiagram': BiologySvgDiagrams.nitrogenCycleFixationNitrificationDenitrificationPathwayDiagramsvg,
        'phosphorusCycleSedimentaryNoAtmosphericPhaseAnnotatedDiagram': BiologySvgDiagrams.phosphorusCycleSedimentaryNoAtmosphericPhaseAnnotatedDiagramsvg,
        'sulfurCycleDMSVolcanicSO2CombustionPathwayDiagram': BiologySvgDiagrams.sulfurCycleDMSVolcanicSO2CombustionPathwayDiagramsvg,
        'hydrologicalCycleEvaporationTranspirationPrecipitationInfiltrationDiagram': BiologySvgDiagrams.hydrologicalCycleEvaporationTranspirationPrecipitationInfiltrationDiagramsvg,
        'liebigBarrelLawOfMinimumNutrientLimitationDiagram': BiologySvgDiagrams.liebigBarrelLawOfMinimumNutrientLimitationDiagramsvg,
        'eutrophicationStagesNutrientAlgalBloomHypoxiaSequenceDiagram': BiologySvgDiagrams.eutrophicationStagesNutrientAlgalBloomHypoxiaSequenceDiagramsvg,
        'mycorrhizalHyphalNetworkPhosphorusCarbonExchangeDiagram': BiologySvgDiagrams.mycorrhizalHyphalNetworkPhosphorusCarbonExchangeDiagramsvg,
        'haberBoschReactiveNitrogenGlobalBudgetAnthropogenicFlowDiagram': BiologySvgDiagrams.haberBoschReactiveNitrogenGlobalBudgetAnthropogenicFlowDiagramsvg,

        // Species Interactions
        'interactionTypesPlusMinusZeroMatrixClassificationDiagram': BiologySvgDiagrams.interactionTypesPlusMinusZeroMatrixClassificationDiagramsvg,
        'mycorrhizalFungusCarbonPhosphorusBidirectionalExchangeDiagram': BiologySvgDiagrams.mycorrhizalFungusCarbonPhosphorusBidirectionalExchangeDiagramsvg,
        'epiphyteHostTreeInquilinismPhoresisExamplesDiagram': BiologySvgDiagrams.epiphyteHostTreeInquilinismPhoresisExamplesDiagramsvg,
        'macroVsMicroparasiteLifeCycleHostParasiteDiagram': BiologySvgDiagrams.macroVsMicroparasiteLifeCycleHostParasiteDiagramsvg,
        'lotkaVolterraCompetitionIsoclineCoexistenceDiagram': BiologySvgDiagrams.lotkaVolterraCompetitionIsoclineCoexistenceDiagramsvg,
        'constitutiveVsInducedPlantDefenceChemicalAlkaloidTanninDiagram': BiologySvgDiagrams.constitutiveVsInducedPlantDefenceChemicalAlkaloidTanninDiagramsvg,
        'allelopathyJugloneBlackWalnutInhibitionZoneDiagram': BiologySvgDiagrams.allelopathyJugloneBlackWalnutInhibitionZoneDiagramsvg,
        'endosymbiosisOriginMitochondriaChloroplastEvidenceDiagram': BiologySvgDiagrams.endosymbiosisOriginMitochondriaChloroplastEvidenceDiagramsvg,
        'humanGutMicrobiomeCompositionDiversityHealthLinkageDiagram': BiologySvgDiagrams.humanGutMicrobiomeCompositionDiversityHealthLinkageDiagramsvg,

        // Population Ecology
        'populationDensityDistributionRandomUniformClumpedPatternDiagram': BiologySvgDiagrams.populationDensityDistributionRandomUniformClumpedPatternDiagramsvg,
        'jCurveVsScurveExponentialVsLogisticGrowthComparisonDiagram': BiologySvgDiagrams.jCurveVsScurveExponentialVsLogisticGrowthComparisonDiagramsvg,
        'densityDependentVsIndependentBirthDeathRateCrossoverDiagram': BiologySvgDiagrams.densityDependentVsIndependentBirthDeathRateCrossoverDiagramsvg,
        'survivorshipCurveTypeIIIIILogScalePlotDiagram': BiologySvgDiagrams.survivorshipCurveTypeIIIIILogScalePlotDiagramsvg,
        'populationAgePyramidGrowingStableDecliningComparisonDiagram': BiologySvgDiagrams.populationAgePyramidGrowingStableDecliningComparisonDiagramsvg,
        'lynxHareHudsonBayFurRecordOscillationTimeSeriesDiagram': BiologySvgDiagrams.lynxHareHudsonBayFurRecordOscillationTimeSeriesDiagramsvg,
        'levinsPatchOccupancyMetapopulationColonisationExtinctionDiagram': BiologySvgDiagrams.levinsPatchOccupancyMetapopulationColonisationExtinctionDiagramsvg,
        'markReleaseRecaptureLincolnPetersenSamplingProtocolDiagram': BiologySvgDiagrams.markReleaseRecaptureLincolnPetersenSamplingProtocolDiagramsvg,
        'pvaStochasticSimulationExtinctionProbabilityTimeCurveDiagram': BiologySvgDiagrams.pvaStochasticSimulationExtinctionProbabilityTimeCurveDiagramsvg,
        'maximumSustainableYieldLogisticGrowthHarvestRateDiagram': BiologySvgDiagrams.maximumSustainableYieldLogisticGrowthHarvestRateDiagramsvg,

        // Biomes
        'whittakerBiomeDiagramTemperaturePrecipitationSpaceDiagram': BiologySvgDiagrams.whittakerBiomeDiagramTemperaturePrecipitationSpaceDiagramsvg,
        'tropicalRainforestVerticalStratificationCanopyLayersDiagram': BiologySvgDiagrams.tropicalRainforestVerticalStratificationCanopyLayersDiagramsvg,
        'savannaWetDrySeasonProductivityFireRegimeAnnotatedDiagram': BiologySvgDiagrams.savannaWetDrySeasonProductivityFireRegimeAnnotatedDiagramsvg,
        'deciduousForestPhenologySeasonalLeafBudFlowerFruitTimelineDiagram': BiologySvgDiagrams.deciduousForestPhenologySeasonalLeafBudFlowerFruitTimelineDiagramsvg,
        'podzolSoilProfileHorizonLeachingIlluviationAnnotatedDiagram': BiologySvgDiagrams.podzolSoilProfileHorizonLeachingIlluviationAnnotatedDiagramsvg,
        'mollisol_chernozem_dark_organic_horizon_vs_Mediterranean_alfisol_profileDiagram': BiologySvgDiagrams.mollisol_chernozem_dark_organic_horizon_vs_Mediterranean_alfisol_profileDiagramsvg,
        'xerophyteAdaptationsCACMC4DroughtAvoidanceComparisonDiagram': BiologySvgDiagrams.xerophyteAdaptationsCACMC4DroughtAvoidanceComparisonDiagramsvg,
        'permafrostActiveLayerThawCarbonReleaseFeedbackLoopDiagram': BiologySvgDiagrams.permafrostActiveLayerThawCarbonReleaseFeedbackLoopDiagramsvg,
        'coralReefZooxanthellaeBlleachingHeatStressResponseDiagram': BiologySvgDiagrams.coralReefZooxanthellaeBlleachingHeatStressResponseDiagramsvg,
        'projectedBiomeShiftPolewardUpslope2100ScenarioDiagram': BiologySvgDiagrams.projectedBiomeShiftPolewardUpslope2100ScenarioDiagramsvg,

        // Succession
        'sereSeralStagesPioneerToClimaxCommunityTimelineArrowDiagram': BiologySvgDiagrams.sereSeralStagesPioneerToClimaxCommunityTimelineArrowDiagramsvg,
        'lithosereBarRockLichenMossHerbShrubWoodlandSevenStagesDiagram': BiologySvgDiagrams.lithosereBarRockLichenMossHerbShrubWoodlandSevenStagesDiagramsvg,
        'abandonedFieldSuccessionAnnualWeedShrubWoodlandTimelineDiagram': BiologySvgDiagrams.abandonedFieldSuccessionAnnualWeedShrubWoodlandTimelineDiagramsvg,
        'facilitationInhibitionToleranceMechanismComparisonFlowchartDiagram': BiologySvgDiagrams.facilitationInhibitionToleranceMechanismComparisonFlowchartDiagramsvg,
        'successionSpeciesDiversityBiomassNPPRatioChangeTimeSeriesDiagram': BiologySvgDiagrams.successionSpeciesDiversityBiomassNPPRatioChangeTimeSeriesDiagramsvg,
        'sandDuneZonationStrandlineYellowGreyDuneSlackWoodlandDiagram': BiologySvgDiagrams.sandDuneZonationStrandlineYellowGreyDuneSlackWoodlandDiagramsvg,
        'callunaPioneerBuildingMatureDegenerateHeathlandPhaseCycleDiagram': BiologySvgDiagrams.callunaPioneerBuildingMatureDegenerateHeathlandPhaseCycleDiagramsvg,
        'intermediateDisturbanceHypothesisBellCurveSpeciesDiversityDiagram': BiologySvgDiagrams.intermediateDisturbanceHypothesisBellCurveSpeciesDiversityDiagramsvg,
        'odumPRRatioProductionRespirationSuccessionalStageChangeDiagram': BiologySvgDiagrams.odumPRRatioProductionRespirationSuccessionalStageChangeDiagramsvg,
        'restorationSuccessionJumpStartNuclearPlantingTrajectoryDiagram': BiologySvgDiagrams.restorationSuccessionJumpStartNuclearPlantingTrajectoryDiagramsvg,

        // Inflammation
        'cardinalSignsOfInflammationAnnotatedDiagram': BiologySvgDiagrams.cardinalSignsOfInflammationAnnotatedDiagramsvg,
        'pampDampPatternRecognitionReceptorDiagram': BiologySvgDiagrams.pampDampPatternRecognitionReceptorDiagramsvg,
        'vasodilationPermeabilityExudateTransudateDiagram': BiologySvgDiagrams.vasodilationPermeabilityExudateTransudateDiagramsvg,
        'leukocyteAdhesionCascadeRollingTransmigrationDiagram': BiologySvgDiagrams.leukocyteAdhesionCascadeRollingTransmigrationDiagramsvg,
        'arachidonicAcidCoxLoxPathwayMediatorsDiagram': BiologySvgDiagrams.arachidonicAcidCoxLoxPathwayMediatorsDiagramsvg,
        'phagocytosisOpsonisationRespiratorlyBurstStepsDiagram': BiologySvgDiagrams.phagocytosisOpsonisationRespiratorlyBurstStepsDiagramsvg,
        'acutePhaseResponseFeverLeukocytosisDiagram': BiologySvgDiagrams.acutePhaseResponseFeverLeukocytosisDiagramsvg,
        'proResolutionMediatorsEfferocytosisOutcomesDiagram': BiologySvgDiagrams.proResolutionMediatorsEfferocytosisOutcomesDiagramsvg,
        'granulomaFormationCaseatingNonCaseatingDiagram': BiologySvgDiagrams.granulomaFormationCaseatingNonCaseatingDiagramsvg,
        'sepsisProgressionSIRSSepticShockMODSDiagram': BiologySvgDiagrams.sepsisProgressionSIRSSepticShockMODSDiagramsvg,

        // Autoimmunity
        'centralPeripheralToleranceThymicSelectionDiagram': BiologySvgDiagrams.centralPeripheralToleranceThymicSelectionDiagramsvg,
        'molecularMimicryBystanderActivationCrypticEpitopeDiagram': BiologySvgDiagrams.molecularMimicryBystanderActivationCrypticEpitopeDiagramsvg,
        'gellCoombsTypeIIIIIIVHypersensitivityMechanismsDiagram': BiologySvgDiagrams.gellCoombsTypeIIIIIIVHypersensitivityMechanismsDiagramsvg,
        'organSpecificAutoimmuneDiseaseTargetAnatomyDiagram': BiologySvgDiagrams.organSpecificAutoimmuneDiseaseTargetAnatomyDiagramsvg,
        'sleImmuneComplexDepositonLupusNephritisDiagram': BiologySvgDiagrams.sleImmuneComplexDepositonLupusNephritisDiagramsvg,
        'autoantibodySpecificityDiseaseMappingReferenceTable': BiologySvgDiagrams.autoantibodySpecificityDiseaseMappingReferenceTablesvg,
        'autoimmuneDiagnosticAlgorithmSerologyBiopsyDiagram': BiologySvgDiagrams.autoimmuneDiagnosticAlgorithmSerologyBiopsyDiagramsvg,
        'biologicTargetsCytokinePathwayAutoimmunityDiagram': BiologySvgDiagrams.biologicTargetsCytokinePathwayAutoimmunityDiagramsvg,
        'hlaB27SpondyloarthropathySpectrumDiagram': BiologySvgDiagrams.hlaB27SpondyloarthropathySpectrumDiagramsvg,
        'mixedConnectiveTissueOverlapVennDiagram': BiologySvgDiagrams.mixedConnectiveTissueOverlapVennDiagramsvg,

        // Allergy & Hypersensitivity
        'gellCoombsTypeIIIIIIVHypersensitivityOverviewDiagram': BiologySvgDiagrams.gellCoombsTypeIIIIIIVHypersensitivityOverviewDiagramsvg,
        'igeFcepsilonRIMastCellDegranulationCrossLinkingDiagram': BiologySvgDiagrams.igeFcepsilonRIMastCellDegranulationCrossLinkingDiagramsvg,
        'biphasicAllergyEarlyLatePhaseTimeCourseDiagram': BiologySvgDiagrams.biphasicAllergyEarlyLatePhaseTimeCourseDiagramsvg,
        'anaphylaxisSystemicMediatorOrganEffectsDiagram': BiologySvgDiagrams.anaphylaxisSystemicMediatorOrganEffectsDiagramsvg,
        'nasalMucosaMastCellEosinophilInfiltrationDiagram': BiologySvgDiagrams.nasalMucosaMastCellEosinophilInfiltrationDiagramsvg,
        'airwayRemodelingEosinophilicInflammationSpiromteryDiagram': BiologySvgDiagrams.airwayRemodelingEosinophilicInflammationSpiromteryDiagramsvg,
        'igeMediaatedVsNonIgeFoodAllergyClassificationDiagram': BiologySvgDiagrams.igeMediaatedVsNonIgeFoodAllergyClassificationDiagramsvg,
        'filaggrinBarrierDefectTh2ItchScratchCycleDiagram': BiologySvgDiagrams.filaggrinBarrierDefectTh2ItchScratchCycleDiagramsvg,
        'skinPrickTestSptWhealFlareReadingDiagram': BiologySvgDiagrams.skinPrickTestSptWhealFlareReadingDiagramsvg,
        'immunotherapyIgG4ShiftTregInductionMechanismDiagram': BiologySvgDiagrams.immunotherapyIgG4ShiftTregInductionMechanismDiagramsvg,

        // Clinical Immunology
        'pathogenClassificationBacteriaVirusFungiParasitePrionDiagram': BiologySvgDiagrams.pathogenClassificationBacteriaVirusFungiParasitePrionDiagramsvg,
        'transmissionRoutesAirborneDropletContactFaecalOralVectorDiagram': BiologySvgDiagrams.transmissionRoutesAirborneDropletContactFaecalOralVectorDiagramsvg,
        'virulenceFactorsAdhesinsInvasinsExotoxinEndotoxinDiagram': BiologySvgDiagrams.virulenceFactorsAdhesinsInvasinsExotoxinEndotoxinDiagramsvg,
        'innateToAdaptiveImmuneResponseTimelineDiagram': BiologySvgDiagrams.innateToAdaptiveImmuneResponseTimelineDiagramsvg,
        'keyBacterialPathogensMechanismClinicalFeaturesComparisonDiagram': BiologySvgDiagrams.keyBacterialPathogensMechanismClinicalFeaturesComparisonDiagramsvg,
        'hivReplicationCycleReverseTranscriptaseIntegraseDiagram': BiologySvgDiagrams.hivReplicationCycleReverseTranscriptaseIntegraseDiagramsvg,
        'antibioticClassesMolecularTargetsBacterialCellDiagram': BiologySvgDiagrams.antibioticClassesMolecularTargetsBacterialCellDiagramsvg,
        'plasmodiumLifeCycleHumanMosquitoStagesDiagram': BiologySvgDiagrams.plasmodiumLifeCycleHumanMosquitoStagesDiagramsvg,
        'vaccineTypesLiveAttenuatedSubunitMRNAImmunogenicityComparisonDiagram': BiologySvgDiagrams.vaccineTypesLiveAttenuatedSubunitMRNAImmunogenicityComparisonDiagramsvg,
        'who5MomentsHandHygienePrecautionTypesFlowchartDiagram': BiologySvgDiagrams.who5MomentsHandHygienePrecautionTypesFlowchartDiagramsvg,

        // Primary Immunodeficiency
        'infectionPatternComponentDeficiencyDiagnosticFrameworkDiagram': BiologySvgDiagrams.infectionPatternComponentDeficiencyDiagnosticFrameworkDiagramsvg,
        'btkXlaVsCvidHyperIgMBCellDevelopmentBlockDiagram': BiologySvgDiagrams.btkXlaVsCvidHyperIgMBCellDevelopmentBlockDiagramsvg,
        'scidGenotypeImmunophenotypeGammaChainAdaRagIl7rDiagram': BiologySvgDiagrams.scidGenotypeImmunophenotypeGammaChainAdaRagIl7rDiagramsvg,
        'digeorgeCatch22ThymicAplasiaTCellDevelopmentDiagram': BiologySvgDiagrams.digeorgeCatch22ThymicAplasiaTCellDevelopmentDiagramsvg,
        'cgdNadphOxidaseSubunitsRespiratoryBurstLadAdhesionCascadeDiagram': BiologySvgDiagrams.cgdNadphOxidaseSubunitsRespiratoryBurstLadAdhesionCascadeDiagramsvg,
        'complementPathwayDeficiencyNeiSseriaTerminalComponentMacDiagram': BiologySvgDiagrams.complementPathwayDeficiencyNeiSseriaTerminalComponentMacDiagramsvg,
        'secondaryImmunodeficiencyCausesHivMalnutritionAspleniaDrugsDiagram': BiologySvgDiagrams.secondaryImmunodeficiencyCausesHivMalnutritionAspleniaDrugsDiagramsvg,
        'hlhCytotoxicGranuleExocytosisDefectCytokineStormDiagram': BiologySvgDiagrams.hlhCytotoxicGranuleExocytosisDefectCytokineStormDiagramsvg,
        'immunodeficiencyWorkupFlowchartFbcIgLymphocyteSubsetsDiagram': BiologySvgDiagrams.immunodeficiencyWorkupFlowchartFbcIgLymphocyteSubsetsDiagramsvg,
        'igrtHsctGeneTherapyTreatmentLadderPidDiagram': BiologySvgDiagrams.igrtHsctGeneTherapyTreatmentLadderPidDiagramsvg,

        // Plant Photosynthesis
        'chloroplastAnnotatedUltrastructureDiagram': BiologySvgDiagrams.chloroplastAnnotatedUltrastructureDiagramsvg,
        'thylakoidElectronTransportChainAndChemiosmosisdiagram': BiologySvgDiagrams.thylakoidElectronTransportChainAndChemiosmosisdiagramsvg,
        'calvinCycleThreeStageAnnotatedDiagram': BiologySvgDiagrams.calvinCycleThreeStageAnnotatedDiagramsvg,
        'c3VsC4VsCamPathwayComparisonDiagram': BiologySvgDiagrams.c3VsC4VsCamPathwayComparisonDiagramsvg,
        'limitingFactorRateVsIntensityCurvesDiagram': BiologySvgDiagrams.limitingFactorRateVsIntensityCurvesDiagramsvg,
        'leafDiscFloatationAssaySetupDiagram': BiologySvgDiagrams.leafDiscFloatationAssaySetupDiagramsvg,
        'netGrossPhotosynthesisCompensationPointGraph': BiologySvgDiagrams.netGrossPhotosynthesisCompensationPointGraphsvg,
        'primaryProductivityBiomeComparisonMap': BiologySvgDiagrams.primaryProductivityBiomeComparisonMapsvg,
        'artificialPhotosynthesisPhotoelectrochemicalCellDiagram': BiologySvgDiagrams.artificialPhotosynthesisPhotoelectrochemicalCellDiagramsvg,
        'rubiscoOxygenaseCarbonylaseCompetitionDiagram': BiologySvgDiagrams.rubiscoOxygenaseCarbonylaseCompetitionDiagramsvg,

        // Plant Nutrition
        'essentialElementsClassificationAndSoilSourceDiagram': BiologySvgDiagrams.essentialElementsClassificationAndSoilSourceDiagramsvg,
        'macronutrientFunctionAndMolecularRoleSummaryDiagram': BiologySvgDiagrams.macronutrientFunctionAndMolecularRoleSummaryDiagramsvg,
        'micronutrientCofactorEnzymeLocationDiagram': BiologySvgDiagrams.micronutrientCofactorEnzymeLocationDiagramsvg,
        'apoplasticSymplasticPathwayCasparianStripCrossSection': BiologySvgDiagrams.apoplasticSymplasticPathwayCasparianStripCrossSectionsvg,
        'nitrogenCycleBiogeochemicalFlowDiagram': BiologySvgDiagrams.nitrogenCycleBiogeochemicalFlowDiagramsvg,
        'arbuscularVsEctomycorrhizaeRootAnatomyComparisonDiagram': BiologySvgDiagrams.arbuscularVsEctomycorrhizaeRootAnatomyComparisonDiagramsvg,
        'nutrientMobilityDeficiencyPatternLeafDiagram': BiologySvgDiagrams.nutrientMobilityDeficiencyPatternLeafDiagramsvg,
        'eutrophicationRunoffNutrientCycleFlowDiagram': BiologySvgDiagrams.eutrophicationRunoffNutrientCycleFlowDiagramsvg,
        'carnivorousPlantTrapMechanismComparisonDiagram': BiologySvgDiagrams.carnivorousPlantTrapMechanismComparisonDiagramsvg,
        'xylemPhloemNutrientDirectionAndMobilityDiagram': BiologySvgDiagrams.xylemPhloemNutrientDirectionAndMobilityDiagramsvg,

        // Plant Growth & Development
        'primarySecondaryGrowthComparisonDiagram': BiologySvgDiagrams.primarySecondaryGrowthComparisonDiagramsvg,
        'rootApicalMeristemZoneAnnotatedLongitudinalDiagram': BiologySvgDiagrams.rootApicalMeristemZoneAnnotatedLongitudinalDiagramsvg,
        'phytohormoneInteractionNetworkDiagram': BiologySvgDiagrams.phytohormoneInteractionNetworkDiagramsvg,
        'auxinLateralRedistributionPhototropismGravitropismDiagram': BiologySvgDiagrams.auxinLateralRedistributionPhototropismGravitropismDiagramsvg,
        'phytochromeConversionCriticalNightLengthFloweringDiagram': BiologySvgDiagrams.phytochromeConversionCriticalNightLengthFloweringDiagramsvg,
        'seedStructureGibberellinAleuroneCascadeDiagram': BiologySvgDiagrams.seedStructureGibberellinAleuroneCascadeDiagramsvg,
        'leafAbscissionZoneSeparationProtectiveLayerDiagram': BiologySvgDiagrams.leafAbscissionZoneSeparationProtectiveLayerDiagramsvg,
        'etiolationDeEtiolationLightQualityResponseDiagram': BiologySvgDiagrams.etiolationDeEtiolationLightQualityResponseDiagramsvg,
        'micropropagationExplantCallusOrganogenesisFlowDiagram': BiologySvgDiagrams.micropropagationExplantCallusOrganogenesisFlowDiagramsvg,
        'sourceToSinkAssimilateFlowHormoneRatioDiagram': BiologySvgDiagrams.sourceToSinkAssimilateFlowHormoneRatioDiagramsvg,

        // Plant Adaptations
        'adaptationTypesStructuralPhysiologicalBehaviouralClassificationDiagram': BiologySvgDiagrams.adaptationTypesStructuralPhysiologicalBehaviouralClassificationDiagramsvg,
        'xerophyteLeafCrossSectionSunkenStomataRolledLeafDiagram': BiologySvgDiagrams.xerophyteLeafCrossSectionSunkenStomataRolledLeafDiagramsvg,
        'hydrophyteAerenchymaFloatingLeafPneumatophoreAdaptationDiagram': BiologySvgDiagrams.hydrophyteAerenchymaFloatingLeafPneumatophoreAdaptationDiagramsvg,
        'halophyteSaltGlandIonCompartmentalisationVacuoleDiagram': BiologySvgDiagrams.halophyteSaltGlandIonCompartmentalisationVacuoleDiagramsvg,
        'coldAcclimationMembraneLipidAntifreezeProteinResponseDiagram': BiologySvgDiagrams.coldAcclimationMembraneLipidAntifreezeProteinResponseDiagramsvg,
        'sunVsShadeLeafChlorophyllAbsorptionCompensationPointDiagram': BiologySvgDiagrams.sunVsShadeLeafChlorophyllAbsorptionCompensationPointDiagramsvg,
        'proteoidRootClusterRhizosphereAcidificationDiagram': BiologySvgDiagrams.proteoidRootClusterRhizosphereAcidificationDiagramsvg,
        'pollinationSyndromeFlowerMorphologyComparisonDiagram': BiologySvgDiagrams.pollinationSyndromeFlowerMorphologyComparisonDiagramsvg,
        'physicalChemicalDefenceSecondaryMetabolitePathwayDiagram': BiologySvgDiagrams.physicalChemicalDefenceSecondaryMetabolitePathwayDiagramsvg,
        'biomeAdaptationSyndromeWorldMapDiagram': BiologySvgDiagrams.biomeAdaptationSyndromeWorldMapDiagramsvg,

        // Root Anatomy
        'rootVsShootAnatomyComparativeOrganisationDiagram': BiologySvgDiagrams.rootVsShootAnatomyComparativeOrganisationDiagramsvg,
        'tapRootVsFibrousAdventitousRootSystemComparisonDiagram': BiologySvgDiagrams.tapRootVsFibrousAdventitousRootSystemComparisonDiagramsvg,
        'rootLongitudinalZonesCrossSectionAnnotatedDiagram': BiologySvgDiagrams.rootLongitudinalZonesCrossSectionAnnotatedDiagramsvg,
        'apoplasticSymplasticTransmembraneWaterPathwayDiagram': BiologySvgDiagrams.apoplasticSymplasticTransmembraneWaterPathwayDiagramsvg,
        'lateralRootPericycleInitiationAuxinMaximumDiagram': BiologySvgDiagrams.lateralRootPericycleInitiationAuxinMaximumDiagramsvg,
        'rhizosphereExudatesMicrobialCommunityGradientDiagram': BiologySvgDiagrams.rhizosphereExudatesMicrobialCommunityGradientDiagramsvg,
        'rootModificationTypesFunctionComparisonDiagram': BiologySvgDiagrams.rootModificationTypesFunctionComparisonDiagramsvg,
        'statocyteAmyloplastSedimentationAuxinRedistributionDiagram': BiologySvgDiagrams.statocyteAmyloplastSedimentationAuxinRedistributionDiagramsvg,
        'rootSecondaryGrowthVascularCorkCambiumAnnualRingDiagram': BiologySvgDiagrams.rootSecondaryGrowthVascularCorkCambiumAnnualRingDiagramsvg,
        'rootCarbonSequestrationSoilStabilisationEcosystemRoleDiagram': BiologySvgDiagrams.rootCarbonSequestrationSoilStabilisationEcosystemRoleDiagramsvg,

        // Leaf Anatomy
        'leafExternalMorphologyLaminaPetioleVenationLabelledDiagram': BiologySvgDiagrams.leafExternalMorphologyLaminaPetioleVenationLabelledDiagramsvg,
        'leafCrossSectionAllTissueLayersAnnotatedDiagram': BiologySvgDiagrams.leafCrossSectionAllTissueLayersAnnotatedDiagramsvg,
        'guardCellIonFluxStomatalOpeningMechanismDiagram': BiologySvgDiagrams.guardCellIonFluxStomatalOpeningMechanismDiagramsvg,
        'netVsParallelVenationDicotMonocotComparisonDiagram': BiologySvgDiagrams.netVsParallelVenationDicotMonocotComparisonDiagramsvg,
        'co2DiffusionPathwayStomataToChloroplastResistanceModelDiagram': BiologySvgDiagrams.co2DiffusionPathwayStomataToChloroplastResistanceModelDiagramsvg,
        'sunShadeLeafPalisadeLayersThicknessCrossComparisonDiagram': BiologySvgDiagrams.sunShadeLeafPalisadeLayersThicknessCrossComparisonDiagramsvg,
        'leafModificationTypesFunctionEvolutionaryOriginDiagram': BiologySvgDiagrams.leafModificationTypesFunctionEvolutionaryOriginDiagramsvg,
        'abscissionZoneSeparationProtectiveLayerHormonalControlDiagram': BiologySvgDiagrams.abscissionZoneSeparationProtectiveLayerHormonalControlDiagramsvg,
        'phyllotaxisGoldenAngleFibonacciLeafArrangementDiagram': BiologySvgDiagrams.phyllotaxisGoldenAngleFibonacciLeafArrangementDiagramsvg,
        'leafEconomicsSpectrumSlaVsLeafNitrogenBiomePlotDiagram': BiologySvgDiagrams.leafEconomicsSpectrumSlaVsLeafNitrogenBiomePlotDiagramsvg,

        // Plant Cell & Tissue Types
        'plantOrganisationHierarchyCellToOrganismDiagram': BiologySvgDiagrams.plantOrganisationHierarchyCellToOrganismDiagramsvg,
        'parenchymaCollenchymaSclerenchymaComparisonDiagram': BiologySvgDiagrams.parenchymaCollenchymaSclerenchymaComparisonDiagramsvg,
        'rootZonesCrossSection_casparianStripLabelledDiagram': BiologySvgDiagrams.rootZonesCrossSection_casparianStripLabelledDiagramsvg,
        'stemModificationsTypesComparativeDiagram': BiologySvgDiagrams.stemModificationsTypesComparativeDiagramsvg,
        'leafInternalAnatomyPalisadeSpongyMesophyllLabelledDiagram': BiologySvgDiagrams.leafInternalAnatomyPalisadeSpongyMesophyllLabelledDiagramsvg,
        'typeIIIFunctionalResponseSigmoidalPredationRateCurve': BiologySvgDiagrams.typeIIIFunctionalResponseSigmoidalPredationRateCurvesvg,
        'monocotVsDicotWholeBodyComparativeDiagram': BiologySvgDiagrams.monocotVsDicotWholeBodyComparativeDiagramsvg,
        'xerophyteHydrophyteAdaptationComparativeDiagram': BiologySvgDiagrams.xerophyteHydrophyteAdaptationComparativeDiagramsvg,
        'woodAnnualRingsHeartwoodSapwoodCambiumDiagram': BiologySvgDiagrams.woodAnnualRingsHeartwoodSapwoodCambiumDiagramsvg,
        'completeFlowerLabelledWhorlsDiagram': BiologySvgDiagrams.completeFlowerLabelledWhorlsDiagramsvg,
        'seedPartsEmbryoEndospermTestaDiagram': BiologySvgDiagrams.seedPartsEmbryoEndospermTestaDiagramsvg,

        // Transport & Exchange
        'diffusionOsmosisActiveTransportComparisonDiagram': BiologySvgDiagrams.diffusionOsmosisActiveTransportComparisonDiagramsvg,
        'apoplasticSymplasticTransmembranepathwaysCasparianStripDiagram': BiologySvgDiagrams.apoplasticSymplasticTransmembranepathwaysCasparianStripDiagramsvg,
        'cohesionTensionTranspirationPullWaterColumnDiagram': BiologySvgDiagrams.cohesionTensionTranspirationPullWaterColumnDiagramsvg,
        'guardCellTurgorKplusFluxStomatalOpeningClosingDiagram': BiologySvgDiagrams.guardCellTurgorKplusFluxStomatalOpeningClosingDiagramsvg,
        'essentialMineralFunctionDeficiencySymptomSummaryDiagram': BiologySvgDiagrams.essentialMineralFunctionDeficiencySymptomSummaryDiagramsvg,
        'massFlowHypothesisSourceSinkPressureGradientDiagram': BiologySvgDiagrams.massFlowHypothesisSourceSinkPressureGradientDiagramsvg,
        'leafGasExchangeCO2O2GradientsPhotosynthesisRespirationDiagram': BiologySvgDiagrams.leafGasExchangeCO2O2GradientsPhotosynthesisRespirationDiagramsvg,
        'transpirationRateFactorsSummaryDiagram': BiologySvgDiagrams.transpirationRateFactorsSummaryDiagramsvg,
        'soilPlantAtmosphereContinuumWaterPotentialGradientDiagram': BiologySvgDiagrams.soilPlantAtmosphereContinuumWaterPotentialGradientDiagramsvg,
        'xylemPhloemStructureFunctionSideBySideComparisonDiagram': BiologySvgDiagrams.xylemPhloemStructureFunctionSideBySideComparisonDiagramsvg,

        // Plant Reproduction
        'alternationOfGenerationsSporophyteGametophyteCycleDiagram': BiologySvgDiagrams.alternationOfGenerationsSporophyteGametophyteCycleDiagramsvg,
        'vegetativePropagationTypesStolonRhizomeTuberBulbDiagram': BiologySvgDiagrams.vegetativePropagationTypesStolonRhizomeTuberBulbDiagramsvg,
        'angiospermFlowerLabelledEmbryoSacPollenDevelopmentDiagram': BiologySvgDiagrams.angiospermFlowerLabelledEmbryoSacPollenDevelopmentDiagramsvg,
        'windVsInsectPollinationFlowerAdaptationComparisonDiagram': BiologySvgDiagrams.windVsInsectPollinationFlowerAdaptationComparisonDiagramsvg,
        'doubleFertilisationPollenTubeZygoteEndospermDiagram': BiologySvgDiagrams.doubleFertilisationPollenTubeZygoteEndospermDiagramsvg,
        'embryoDevelopmentGlobularHeartTorpedoMatureStageDiagram': BiologySvgDiagrams.embryoDevelopmentGlobularHeartTorpedoMatureStageDiagramsvg,
        'fruitTypesClassificationFleshyDryAggregateMultipleDiagram': BiologySvgDiagrams.fruitTypesClassificationFleshyDryAggregateMultipleDiagramsvg,
        'gibberellinAleuroneLayers_alphaAmylaseStarchMobilisationDiagram': BiologySvgDiagrams.gibberellinAleuroneLayers_alphaAmylaseStarchMobilisationDiagramsvg,
        'mossLifeCycleGametophyteSporophyteDependencyDiagram': BiologySvgDiagrams.mossLifeCycleGametophyteSporophyteDependencyDiagramsvg,
        'annualBiennialPerennialLifeHistoryComparisonDiagram': BiologySvgDiagrams.annualBiennialPerennialLifeHistoryComparisonDiagramsvg,

        // Plant Hormones
        'hormoneReceptorSignalTransductionGeneralPathwayDiagram': BiologySvgDiagrams.hormoneReceptorSignalTransductionGeneralPathwayDiagramsvg,
        'auxinPolarTransportPINProteinApicalDominanceDiagram': BiologySvgDiagrams.auxinPolarTransportPINProteinApicalDominanceDiagramsvg,
        'gibberellinDELLARepressorDegradationStemElongationDiagram': BiologySvgDiagrams.gibberellinDELLARepressorDegradationStemElongationDiagramsvg,
        'cytokininAuxinRatioShootRootOrganogenesisTissueCultureDiagram': BiologySvgDiagrams.cytokininAuxinRatioShootRootOrganogenesisTissueCultureDiagramsvg,
        'abaGuardCellSignallingPYRPYLSnRK2StomatalClosureDiagram': BiologySvgDiagrams.abaGuardCellSignallingPYRPYLSnRK2StomatalClosureDiagramsvg,
        'ethyleneYangCycleClimactericFruitRipeningTripleResponseDiagram': BiologySvgDiagrams.ethyleneYangCycleClimactericFruitRipeningTripleResponseDiagramsvg,
        'brassinosteroidBRI1ReceptorBES1BZR1SignallingCellElongationDiagram': BiologySvgDiagrams.brassinosteroidBRI1ReceptorBES1BZR1SignallingCellElongationDiagramsvg,
        'jasmonateCOI1JAZRepressorWoundingDefenceGeneActivationDiagram': BiologySvgDiagrams.jasmonateCOI1JAZRepressorWoundingDefenceGeneActivationDiagramsvg,
        'strigolactoneShootBranchingMycorrhizalSignallingRootExudateDiagram': BiologySvgDiagrams.strigolactoneShootBranchingMycorrhizalSignallingRootExudateDiagramsvg,
        'plantHormoneInteractionNetworkSummaryTableDiagram': BiologySvgDiagrams.plantHormoneInteractionNetworkSummaryTableDiagramsvg,

        // Plant Movements & Tropisms
        'tropismVsNasticMovementDirectionalVsNonDirectionalDiagram': BiologySvgDiagrams.tropismVsNasticMovementDirectionalVsNonDirectionalDiagramsvg,
        'darwinBoysenJensenWentColeoptileExperimentSequenceDiagram': BiologySvgDiagrams.darwinBoysenJensenWentColeoptileExperimentSequenceDiagramsvg,
        'statolythColumellaCellAuxinRedistributionRootShootGravitropismDiagram': BiologySvgDiagrams.statolythColumellaCellAuxinRedistributionRootShootGravitropismDiagramsvg,
        'tendrilContactCoilingMechanosensitiveCalciumSignallingDiagram': BiologySvgDiagrams.tendrilContactCoilingMechanosensitiveCalciumSignallingDiagramsvg,
        'rootHydrotropismMoisureGradientABASignallingElongationZoneDiagram': BiologySvgDiagrams.rootHydrotropismMoisureGradientABASignallingElongationZoneDiagramsvg,
        'pollenTubeLUREPeptideCalciumGradientMicropyleGuidanceDiagram': BiologySvgDiagrams.pollenTubeLUREPeptideCalciumGradientMicropyleGuidanceDiagramsvg,
        'thermotropismElectrotropismSkototropismComparisonDiagram': BiologySvgDiagrams.thermotropismElectrotropismSkototropismComparisonDiagramsvg,
        'phytochromePrPfrRedFarRedInterconversionShadeAvoidanceDiagram': BiologySvgDiagrams.phytochromePrPfrRedFarRedInterconversionShadeAvoidanceDiagramsvg,
        'mimosaPudicaPulvinusThigmonastyVenusFlytrapActionPotentialDiagram': BiologySvgDiagrams.mimosaPudicaPulvinusThigmonastyVenusFlytrapActionPotentialDiagramsvg,
        'competingTropismsGravitropismHydrotropismIntegrationDiagram': BiologySvgDiagrams.competingTropismsGravitropismHydrotropismIntegrationDiagramsvg,

        // Plant Histology
        'transverseLongitudinalSectionPlanePrimarySecondaryBodyDiagram': BiologySvgDiagrams.transverseLongitudinalSectionPlanePrimarySecondaryBodyDiagramsvg,
        'epidermisStomataGuardCellTrichomeCorkLenticellDiagram': BiologySvgDiagrams.epidermisStomataGuardCellTrichomeCorkLenticellDiagramsvg,
        'xylemVesselTracheidsPhloeSieveTubeCompanionCellUltrastructureDiagram': BiologySvgDiagrams.xylemVesselTracheidsPhloeSieveTubeCompanionCellUltrastructureDiagramsvg,
        'parenchymaCollenchymaSclerenchymaSecretoryStructuresComparativeDiagram': BiologySvgDiagrams.parenchymaCollenchymaSclerenchymaSecretoryStructuresComparativeDiagramsvg,
        'dicotMonocotRootCrossSectionEpidermisCortexEndodermisVascularDiagram': BiologySvgDiagrams.dicotMonocotRootCrossSectionEpidermisCortexEndodermisVascularDiagramsvg,
        'dicotVsMonocotStemCrossSectionEusteeleVsAtactosteleComparisonDiagram': BiologySvgDiagrams.dicotVsMonocotStemCrossSectionEusteeleVsAtactosteleComparisonDiagramsvg,
        'vascularCambiumSecondaryXylemPhloemBarkAnnualRingsDiagram': BiologySvgDiagrams.vascularCambiumSecondaryXylemPhloemBarkAnnualRingsDiagramsvg,
        'c3VsC4LeafKranzAnatomyBundleSheathPalisadeSpongyDiagram': BiologySvgDiagrams.c3VsC4LeafKranzAnatomyBundleSheathPalisadeSpongyDiagramsvg,
        'monocotDicotGymnospermAnatomicalFeaturesComparisonTableDiagram': BiologySvgDiagrams.monocotDicotGymnospermAnatomicalFeaturesComparisonTableDiagramsvg,
        'xerophyteHydrophyteTransferCellStructureFunctionAdaptationDiagram': BiologySvgDiagrams.xerophyteHydrophyteTransferCellStructureFunctionAdaptationDiagramsvg,

        // Cell Biology Fundamentals
        'cellTheoryHistoricalTimelineDiagram': BiologySvgDiagrams.cellTheoryHistoricalTimelineDiagramsvg,
        'fluidMosaicModelLabelledCrossSection': BiologySvgDiagrams.fluidMosaicModelLabelledCrossSectionsvg,
        'prokaryoticCellAnnotatedStructureDiagram': BiologySvgDiagrams.prokaryoticCellAnnotatedStructureDiagramsvg,
        'nuclearEnvelopeAndPoreComplexCrossSection': BiologySvgDiagrams.nuclearEnvelopeAndPoreComplexCrossSectionsvg,
        'eukaryoticOrganelleMapAndFunctionSummary': BiologySvgDiagrams.eukaryoticOrganelleMapAndFunctionSummarysvg,
        'chloroplastInternalMembraneSystemDiagram': BiologySvgDiagrams.chloroplastInternalMembraneSystemDiagramsvg,
        'cytoskeletalFilamentsComparativeStructureChart': BiologySvgDiagrams.cytoskeletalFilamentsComparativeStructureChartsvg,
        'plantCellWallLayersAndCompositionDiagram': BiologySvgDiagrams.plantCellWallLayersAndCompositionDiagramsvg,
        'epithelialCellJunctionTypesAnnotatedDiagram': BiologySvgDiagrams.epithelialCellJunctionTypesAnnotatedDiagramsvg,
        'animalVsPlantVsProkaryoteCellComparisonChart': BiologySvgDiagrams.animalVsPlantVsProkaryoteCellComparisonChartsvg,

        // Biochemistry
        'biologicalFunctionalGroupsAndBondTypesSummary': BiologySvgDiagrams.biologicalFunctionalGroupsAndBondTypesSummarysvg,
        'waterHydrogenBondNetworkAndPropertiesDiagram': BiologySvgDiagrams.waterHydrogenBondNetworkAndPropertiesDiagramsvg,
        'monosaccharideToPolysaccharidePolymerisationDiagram': BiologySvgDiagrams.monosaccharideToPolysaccharidePolymerisationDiagramsvg,
        'lipidClassesStructuralComparisonChart': BiologySvgDiagrams.lipidClassesStructuralComparisonChartsvg,
        'proteinFourLevelsOfStructureDiagram': BiologySvgDiagrams.proteinFourLevelsOfStructureDiagramsvg,
        'dnaDoubleHelixBasePairingAndGeneticCodeTable': BiologySvgDiagrams.dnaDoubleHelixBasePairingAndGeneticCodeTablesvg,
        'atpStructureAndHydrolysisEnergyReleaseDiagram': BiologySvgDiagrams.atpStructureAndHydrolysisEnergyReleaseDiagramsvg,
        'fatAndWaterSolubleVitaminRolesAndDeficiencyChart': BiologySvgDiagrams.fatAndWaterSolubleVitaminRolesAndDeficiencyChartsvg,
        'haemoglobinOxygenDissociationCurveBohrEffectDiagram': BiologySvgDiagrams.haemoglobinOxygenDissociationCurveBohrEffectDiagramsvg,
        'bileSynthesisAndLipoproteinTransportPathwayDiagram': BiologySvgDiagrams.bileSynthesisAndLipoproteinTransportPathwayDiagramsvg,

        // Metabolism Overview
        'freeEnergyThermodynamicsAnabolismCatabolismDiagram': BiologySvgDiagrams.freeEnergyThermodynamicsAnabolismCatabolismDiagramsvg,
        'glycolysisKrebsEtcChemiosmosisIntegratedPathwayMap': BiologySvgDiagrams.glycolysisKrebsEtcChemiosmosisIntegratedPathwayMapsvg,
        'lightReactionsCalvinCycleChloroplastCompartmentDiagram': BiologySvgDiagrams.lightReactionsCalvinCycleChloroplastCompartmentDiagramsvg,
        'semiconservativeReplicationForkLeadingLaggingStrandDiagram': BiologySvgDiagrams.semiconservativeReplicationForkLeadingLaggingStrandDiagramsvg,
        'eukaryoticTranscriptionPreMrnaProcessingDiagram': BiologySvgDiagrams.eukaryoticTranscriptionPreMrnaProcessingDiagramsvg,
        'ribosomeABPSitesTranslationElongationCycleDiagram': BiologySvgDiagrams.ribosomeABPSitesTranslationElongationCycleDiagramsvg,
        'secretoryPathwayERGolgiVesicleDestinationFlowchart': BiologySvgDiagrams.secretoryPathwayERGolgiVesicleDestinationFlowchartsvg,
        'gpcrRtkSecondMessengerCascadeComparisonDiagram': BiologySvgDiagrams.gpcrRtkSecondMessengerCascadeComparisonDiagramsvg,
        'intrinsicExtrinsicApoptosisPathwayCaspaseCascadeDiagram': BiologySvgDiagrams.intrinsicExtrinsicApoptosisPathwayCaspaseCascadeDiagramsvg,
        'cellularMetabolismOrganSystemIntegrationSummaryDiagram': BiologySvgDiagrams.cellularMetabolismOrganSystemIntegrationSummaryDiagramsvg,

        // Cell Signalling
        'signallingDistanceTypesEndocrineParacrineContactDiagram': BiologySvgDiagrams.signallingDistanceTypesEndocrineParacrineContactDiagramsvg,
        'gpcrRtkLigandGatedChannelReceptorClassesDiagram': BiologySvgDiagrams.gpcrRtkLigandGatedChannelReceptorClassesDiagramsvg,
        'nuclearHormoneReceptorDnaBindingTranscriptionActivationDiagram': BiologySvgDiagrams.nuclearHormoneReceptorDnaBindingTranscriptionActivationDiagramsvg,
        'campIp3CalciumDagSecondMessengerNetworkDiagram': BiologySvgDiagrams.campIp3CalciumDagSecondMessengerNetworkDiagramsvg,
        'actionPotentialPhasesIonChannelGatingDiagram': BiologySvgDiagrams.actionPotentialPhasesIonChannelGatingDiagramsvg,
        'hypothalamicPituitaryAxisNegativeFeedbackLoopDiagram': BiologySvgDiagrams.hypothalamicPituitaryAxisNegativeFeedbackLoopDiagramsvg,
        'cytokineNetworkTCellActivationTwoSignalDiagram': BiologySvgDiagrams.cytokineNetworkTCellActivationTwoSignalDiagramsvg,
        'wntNotchHedgehogPathwaysComparisonDiagram': BiologySvgDiagrams.wntNotchHedgehogPathwaysComparisonDiagramsvg,
        'signalConvergenceDivergenceFeedbackLoopNetworkDiagram': BiologySvgDiagrams.signalConvergenceDivergenceFeedbackLoopNetworkDiagramsvg,
        'raasCardiacConductionGutEntericSystemCommunicationDiagram': BiologySvgDiagrams.raasCardiacConductionGutEntericSystemCommunicationDiagramsvg,

        // Membrane Transport
        'electrochemicalGradientNernstEquationIonDrivingForceDiagram': BiologySvgDiagrams.electrochemicalGradientNernstEquationIonDrivingForceDiagramsvg,
        'simpleDiffusionOsmosisAquaporinFacilitatedDiffusionComparisonDiagram': BiologySvgDiagrams.simpleDiffusionOsmosisAquaporinFacilitatedDiffusionComparisonDiagramsvg,
        'naKAtpaseSymporterAntiporterPrimarySecondaryActiveTransportDiagram': BiologySvgDiagrams.naKAtpaseSymporterAntiporterPrimarySecondaryActiveTransportDiagramsvg,
        'endocytosisExocytosisSnareVesicleFusionPathwayDiagram': BiologySvgDiagrams.endocytosisExocytosisSnareVesicleFusionPathwayDiagramsvg,
        'polarisedEpithelialCellApicalBasolateralTransportersDiagram': BiologySvgDiagrams.polarisedEpithelialCellApicalBasolateralTransportersDiagramsvg,
        'haemoglobinOxygenCO2TransportChlorideShiftDiagram': BiologySvgDiagrams.haemoglobinOxygenCO2TransportChlorideShiftDiagramsvg,
        'restingMembranePotentialActionPotentialIonFluxPhaseDiagram': BiologySvgDiagrams.restingMembranePotentialActionPotentialIonFluxPhaseDiagramsvg,
        'mitochondrialDoubleMembraneCarrierProteinNetworkDiagram': BiologySvgDiagrams.mitochondrialDoubleMembraneCarrierProteinNetworkDiagramsvg,
        'channelopathyTransporterDiseaseGeneProteinConsequenceTable': BiologySvgDiagrams.channelopathyTransporterDiseaseGeneProteinConsequenceTablesvg,
        'starlingForcesFiltrationReabsorptionCapillaryExchangeDiagram': BiologySvgDiagrams.starlingForcesFiltrationReabsorptionCapillaryExchangeDiagramsvg,

        // Cell Division
        'ploidyKaryotypeChromosomeMorphologyDiagram': BiologySvgDiagrams.ploidyKaryotypeChromosomeMorphologyDiagramsvg,
        'cellCyclePhasesCyclinCdkCheckpointSummaryDiagram': BiologySvgDiagrams.cellCyclePhasesCyclinCdkCheckpointSummaryDiagramsvg,
        'mitosisStageByStageChromosomeBehaviourAnnotatedDiagram': BiologySvgDiagrams.mitosisStageByStageChromosomeBehaviourAnnotatedDiagramsvg,
        'meiosisIAndIIChrosomeSynapsisCrossingOverSegregationDiagram': BiologySvgDiagrams.meiosisIAndIIChrosomeSynapsisCrossingOverSegregationDiagramsvg,
        'nondisjunctionMeiosisIVsMeiosisIIAneuploidyOutcomeDiagram': BiologySvgDiagrams.nondisjunctionMeiosisIVsMeiosisIIAneuploidyOutcomeDiagramsvg,
        'oncogeneGainOfFunctionTumourSuppressorLossHallmarksDiagram': BiologySvgDiagrams.oncogeneGainOfFunctionTumourSuppressorLossHallmarksDiagramsvg,
        'atmAtrCheckpointKinaseP53P21GammaH2axSignallingDiagram': BiologySvgDiagrams.atmAtrCheckpointKinaseP53P21GammaH2axSignallingDiagramsvg,
        'haematopoieticStemCellDifferentiationHierarchyDiagram': BiologySvgDiagrams.haematopoieticStemCellDifferentiationHierarchyDiagramsvg,
        'dnaAndHistoneModificationInheritanceReplicationForkDiagram': BiologySvgDiagrams.dnaAndHistoneModificationInheritanceReplicationForkDiagramsvg,
        'tissueRenewalRatesAndCancerOriginBySystemDiagram': BiologySvgDiagrams.tissueRenewalRatesAndCancerOriginBySystemDiagramsvg,

        // Nervous System
        'neuronAnatomyLabelledDiagram': BiologySvgDiagrams.neuronAnatomyLabelledDiagramsvg,
        'cnsVsPnsDivisionOverviewDiagram': BiologySvgDiagrams.cnsVsPnsDivisionOverviewDiagramsvg,
        'somaticVsAutonomicNervousSystemComparisonDiagram': BiologySvgDiagrams.somaticVsAutonomicNervousSystemComparisonDiagramsvg,
        'actionPotentialPhasesMembranePotentialGraph': BiologySvgDiagrams.actionPotentialPhasesMembranePotentialGraphsvg,
        'chemicalSynapseVesicleReleaseStepsDiagram': BiologySvgDiagrams.chemicalSynapseVesicleReleaseStepsDiagramsvg,
        'spinalReflexArcFiveComponentPathwayDiagram': BiologySvgDiagrams.spinalReflexArcFiveComponentPathwayDiagramsvg,
        'somatosensoryPathwaySpineCortexAscendingTractsDiagram': BiologySvgDiagrams.somatosensoryPathwaySpineCortexAscendingTractsDiagramsvg,
        'corticospinalTractUpperLowerMotorNeuronDiagram': BiologySvgDiagrams.corticospinalTractUpperLowerMotorNeuronDiagramsvg,
        'cerebrallLobesFunctionalMapDiagram': BiologySvgDiagrams.cerebrallLobesFunctionalMapDiagramsvg,
        'synapticPruningAndLtpNeuroplasticityDiagram': BiologySvgDiagrams.synapticPruningAndLtpNeuroplasticityDiagramsvg,
        'multipleSclerosisVsParkinsonsDemyelinationPathologyDiagram': BiologySvgDiagrams.multipleSclerosisVsParkinsonsDemyelinationPathologyDiagramsvg,

        // Skeletal System
        'fiveBoneTypesMorphologyComparisonDiagram': BiologySvgDiagrams.fiveBoneTypesMorphologyComparisonDiagramsvg,
        'osteonHaversianSystemCrossSectionDiagram': BiologySvgDiagrams.osteonHaversianSystemCrossSectionDiagramsvg,
        'endochondralVsIntramembranousOssificationStepsDiagram': BiologySvgDiagrams.endochondralVsIntramembranousOssificationStepsDiagramsvg,
        'pthCalcitoninVitaminDCalciumFeedbackLoopDiagram': BiologySvgDiagrams.pthCalcitoninVitaminDCalciumFeedbackLoopDiagramsvg,
        'axialVsAppendicular206BonesAnnotatedSkeletonDiagram': BiologySvgDiagrams.axialVsAppendicular206BonesAnnotatedSkeletonDiagramsvg,
        'synovialJointStructureAndSixTypesDiagram': BiologySvgDiagrams.synovialJointStructureAndSixTypesDiagramsvg,
        'fractureFourStageHealingTimelineDiagram': BiologySvgDiagrams.fractureFourStageHealingTimelineDiagramsvg,
        'boneSurfaceMarkingsProcessesFossaeForaminaDiagram': BiologySvgDiagrams.boneSurfaceMarkingsProcessesFossaeForaminaDiagramsvg,
        'firstSecondThirdClassLeverSystemsInBodyDiagram': BiologySvgDiagrams.firstSecondThirdClassLeverSystemsInBodyDiagramsvg,
        'osteoporosisVsOsteoarthritisVsRheumatoidBonePathologyDiagram': BiologySvgDiagrams.osteoporosisVsOsteoarthritisVsRheumatoidBonePathologyDiagramsvg,
        'peakBoneMassLifespanDeclineCurveByAgeDiagram': BiologySvgDiagrams.peakBoneMassLifespanDeclineCurveByAgeDiagramsvg,

        // Reproductive System
        'meiosisVsMitosisChromosomeDivisionComparisonDiagram': BiologySvgDiagrams.meiosisVsMitosisChromosomeDivisionComparisonDiagramsvg,
        'maleReproductiveTractLabelledPathwayDiagram': BiologySvgDiagrams.maleReproductiveTractLabelledPathwayDiagramsvg,
        'femaleReproductiveTractSagittalSectionLabelledDiagram': BiologySvgDiagrams.femaleReproductiveTractSagittalSectionLabelledDiagramsvg,
        'spermatogenesisVsOogenesisParallelTimelineDiagram': BiologySvgDiagrams.spermatogenesisVsOogenesisParallelTimelineDiagramsvg,
        'hpgAxisFeedbackLoopMaleAndFemaleDiagram': BiologySvgDiagrams.hpgAxisFeedbackLoopMaleAndFemaleDiagramsvg,
        'ovarianAndEndometrialCycleHormoneSynchronisationDiagram': BiologySvgDiagrams.ovarianAndEndometrialCycleHormoneSynchronisationDiagramsvg,
        'acrosomeReactionZonaPellucidaPenetrationCorticalReactionDiagram': BiologySvgDiagrams.acrosomeReactionZonaPellucidaPenetrationCorticalReactionDiagramsvg,
        'trimesterDevelopmentMilestonesAndPlacentaStructureDiagram': BiologySvgDiagrams.trimesterDevelopmentMilestonesAndPlacentaStructureDiagramsvg,
        'oxytocinPositiveFeedbackLabourStagesAndMilkEjectionDiagram': BiologySvgDiagrams.oxytocinPositiveFeedbackLabourStagesAndMilkEjectionDiagramsvg,
        'pubertalSequenceAndMenopauseHormoneChangesTimelineDiagram': BiologySvgDiagrams.pubertalSequenceAndMenopauseHormoneChangesTimelineDiagramsvg,
        'pcosEndometriosisInfertilityPathophysiologyDiagram': BiologySvgDiagrams.pcosEndometriosisInfertilityPathophysiologyDiagramsvg,

        // Lymphatic System
        'lymphaticSystemOverviewVesselsNodesOrgansDiagram': BiologySvgDiagrams.lymphaticSystemOverviewVesselsNodesOrgansDiagramsvg,
        'lymphCapillaryFlap_valveThoracicDuctDrainageDiagram': BiologySvgDiagrams.lymphCapillaryFlap_valveThoracicDuctDrainageDiagramsvg,
        'primaryVsSecondaryLymphoidOrgansLocationDiagram': BiologySvgDiagrams.primaryVsSecondaryLymphoidOrgansLocationDiagramsvg,
        'bCellTCellNkCellDifferentiationAndFunctionDiagram': BiologySvgDiagrams.bCellTCellNkCellDifferentiationAndFunctionDiagramsvg,
        'innateImmunityBarriersInflammationComplementCascadeDiagram': BiologySvgDiagrams.innateImmunityBarriersInflammationComplementCascadeDiagramsvg,
        'primaryVsSecondaryImmuneResponseAntibodyTitreCurveDiagram': BiologySvgDiagrams.primaryVsSecondaryImmuneResponseAntibodyTitreCurveDiagramsvg,
        'vaccineTypesAndMemoryCellSecondaryResponseDiagram': BiologySvgDiagrams.vaccineTypesAndMemoryCellSecondaryResponseDiagramsvg,
        'gellCoombsFourHypersensitivityTypesComparisonDiagram': BiologySvgDiagrams.gellCoombsFourHypersensitivityTypesComparisonDiagramsvg,
        'starlingForcesFiltrationReabsorptionOedemaFormationDiagram': BiologySvgDiagrams.starlingForcesFiltrationReabsorptionOedemaFormationDiagramsvg,
        'mhcHlaMatchingTransplantRejectionTypesDiagram': BiologySvgDiagrams.mhcHlaMatchingTransplantRejectionTypesDiagramsvg,
        'hodgkinVsNonHodgkinReedSternbergCellHistologyDiagram': BiologySvgDiagrams.hodgkinVsNonHodgkinReedSternbergCellHistologyDiagramsvg,

        // Endocrine System
        'hormoneChemistryClassificationReceptorMechanismDiagram': BiologySvgDiagrams.hormoneChemistryClassificationReceptorMechanismDiagramsvg,
        'hypothalamusPortalSystemAnteriorPosteriorPituitaryHormonesDiagram': BiologySvgDiagrams.hypothalamusPortalSystemAnteriorPosteriorPituitaryHormonesDiagramsvg,
        'thyroidHormoneSynthesisIodineOrganificationStepsDiagram': BiologySvgDiagrams.thyroidHormoneSynthesisIodineOrganificationStepsDiagramsvg,
        'pthCalciumBonesKidneysIntestineFeedbackDiagram': BiologySvgDiagrams.pthCalciumBonesKidneysIntestineFeedbackDiagramsvg,
        'adrenalCortexThreeZonesAndMedullaHormonesAnnotatedDiagram': BiologySvgDiagrams.adrenalCortexThreeZonesAndMedullaHormonesAnnotatedDiagramsvg,
        'isletsOfLangerhansCellTypesInsulinGlucagonFeedbackDiagram': BiologySvgDiagrams.isletsOfLangerhansCellTypesInsulinGlucagonFeedbackDiagramsvg,
        'melatoninCircadianRhythmLightDarkCycleScnDiagram': BiologySvgDiagrams.melatoninCircadianRhythmLightDarkCycleScnDiagramsvg,
        'testosteroneOestrogenSynthesisAndTargetEffectsDiagram': BiologySvgDiagrams.testosteroneOestrogenSynthesisAndTargetEffectsDiagramsvg,
        'heartKidneyAdiposeGiEndocrineFunctionsSummaryDiagram': BiologySvgDiagrams.heartKidneyAdiposeGiEndocrineFunctionsSummaryDiagramsvg,
        'sympathoadrenalVsHpaAxisAcuteChronicStressTimelineDiagram': BiologySvgDiagrams.sympathoadrenalVsHpaAxisAcuteChronicStressTimelineDiagramsvg,
        'endocrineDisruptorChemicalInterferenceHormoneAxisDiagram': BiologySvgDiagrams.endocrineDisruptorChemicalInterferenceHormoneAxisDiagramsvg,

        // Muscle System
        'threeMusclTypesMorphologyControlComparisonDiagram': BiologySvgDiagrams.threeMusclTypesMorphologyControlComparisonDiagramsvg,
        'sarcomereZDiscABandIBandHZoneLabelledDiagram': BiologySvgDiagrams.sarcomereZDiscABandIBandHZoneLabelledDiagramsvg,
        'nmjAchVesicleReleaseMotorEndPlateStepsDiagram': BiologySvgDiagrams.nmjAchVesicleReleaseMotorEndPlateStepsDiagramsvg,
        'tTubuleDhprRyr1SrCalciumReleaseCouplingDiagram': BiologySvgDiagrams.tTubuleDhprRyr1SrCalciumReleaseCouplingDiagramsvg,
        'myosinActinATPaseCrossBridgeFiveStepCycleDiagram': BiologySvgDiagrams.myosinActinATPaseCrossBridgeFiveStepCycleDiagramsvg,
        'motorUnitRecruitmentSizePrincipleFrequencyCodingDiagram': BiologySvgDiagrams.motorUnitRecruitmentSizePrincipleFrequencyCodingDiagramsvg,
        'typeITypeIIaTypeIIxFibrePropertiesComparisonDiagram': BiologySvgDiagrams.typeITypeIIaTypeIIxFibrePropertiesComparisonDiagramsvg,
        'threeEnergySystemsATPPcGlycolysisOxidativePhosphorilationDiagram': BiologySvgDiagrams.threeEnergySystemsATPPcGlycolysisOxidativePhosphorilationDiagramsvg,
        'concentric_eccentricIsometricForceVelocityRelationshipDiagram': BiologySvgDiagrams.concentric_eccentricIsometricForceVelocityRelationshipDiagramsvg,
        'centralVsPeripheralFatigueDomsAdaptationTimelineDiagram': BiologySvgDiagrams.centralVsPeripheralFatigueDomsAdaptationTimelineDiagramsvg,
        'cardiacActionPotentialPlateauPhaseAndStarlingLawDiagram': BiologySvgDiagrams.cardiacActionPotentialPlateauPhaseAndStarlingLawDiagramsvg,
        'duchenneMusularDystrophyDystrophinDeficitPathologyDiagram': BiologySvgDiagrams.duchenneMusularDystrophyDystrophinDeficitPathologyDiagramsvg,

        // Cardiovascular System
        'doubleCirculationPathwayDiagram': BiologySvgDiagrams.doubleCirculationPathwayDiagramsvg,
        'heartChambersValvesLabelledDiagram': BiologySvgDiagrams.heartChambersValvesLabelledDiagramsvg,
        'cardiacCycleAndECGWaveformDiagram': BiologySvgDiagrams.cardiacCycleAndECGWaveformDiagramsvg,
        'arteryVeinCapillaryWallStructureDiagram': BiologySvgDiagrams.arteryVeinCapillaryWallStructureDiagramsvg,
        'bloodComponentsAndHaematocritDiagram': BiologySvgDiagrams.bloodComponentsAndHaematocritDiagramsvg,
        'coagulationCascadeFlowchart': BiologySvgDiagrams.coagulationCascadeFlowchartsvg,
        'bloodPressureGradientAcrossVascularSystemGraph': BiologySvgDiagrams.bloodPressureGradientAcrossVascularSystemGraphsvg,
        'starlingForcesFiltrationReabsorptionDiagram': BiologySvgDiagrams.starlingForcesFiltrationReabsorptionDiagramsvg,
        'baroreceptorReflexNeuralControlDiagram': BiologySvgDiagrams.baroreceptorReflexNeuralControlDiagramsvg,
        'foetalCirculationShuntsDiagram': BiologySvgDiagrams.foetalCirculationShuntsDiagramsvg,
        'atherosclerosisProgressionCrossSection': BiologySvgDiagrams.atherosclerosisProgressionCrossSectionsvg,

        // Respiratory System
        'conductingZoneVsRespiratoryZoneDiagram': BiologySvgDiagrams.conductingZoneVsRespiratoryZoneDiagramsvg,
        'labelledRespiratoryTractAnatomyDiagram': BiologySvgDiagrams.labelledRespiratoryTractAnatomyDiagramsvg,
        'diaphragmIntercostalPressureVolumeDiagram': BiologySvgDiagrams.diaphragmIntercostalPressureVolumeDiagramsvg,
        'spirogramLungVolumesAndCapacitiesDiagram': BiologySvgDiagrams.spirogramLungVolumesAndCapacitiesDiagramsvg,
        'partialPressureGradientsAlveoliToTissueDiagram': BiologySvgDiagrams.partialPressureGradientsAlveoliToTissueDiagramsvg,
        'oxyhaemoglobinDissociationCurveBohrEffectDiagram': BiologySvgDiagrams.oxyhaemoglobinDissociationCurveBohrEffectDiagramsvg,
        'medullaryRespiratoryControlCentreChemoreceptorDiagram': BiologySvgDiagrams.medullaryRespiratoryControlCentreChemoreceptorDiagramsvg,
        'respiratoryAcidosisAlkalosisABGDiagram': BiologySvgDiagrams.respiratoryAcidosisAlkalosisABGDiagramsvg,
        'mucociliaryClearanceEscalatorDiagram': BiologySvgDiagrams.mucociliaryClearanceEscalatorDiagramsvg,
        'altitudeVsAtmosphericPO2AcclimatisationGraph': BiologySvgDiagrams.altitudeVsAtmosphericPO2AcclimatisationGraphsvg,
        'obstructiveVsRestrictiveSpirometryComparisonChart': BiologySvgDiagrams.obstructiveVsRestrictiveSpirometryComparisonChartsvg,

        // Digestive System
        'alimentaryCanalOverviewLabelledDiagram': BiologySvgDiagrams.alimentaryCanalOverviewLabelledDiagramsvg,
        'salivaryGlandsAndDentitionLabelledDiagram': BiologySvgDiagrams.salivaryGlandsAndDentitionLabelledDiagramsvg,
        'swallowingPhasesAndOesophagealPeristalsisdiagram': BiologySvgDiagrams.swallowingPhasesAndOesophagealPeristalsisdiagramsvg,
        'stomachRegionsGastricGlandCellTypesDiagram': BiologySvgDiagrams.stomachRegionsGastricGlandCellTypesDiagramsvg,
        'villiMicrovilliSurfaceAreaAmplificationDiagram': BiologySvgDiagrams.villiMicrovilliSurfaceAreaAmplificationDiagramsvg,
        'liverLobulesPortalTriadBileFlowDiagram': BiologySvgDiagrams.liverLobulesPortalTriadBileFlowDiagramsvg,
        'pancreaticAcinarCellsIsletsDualFunctionDiagram': BiologySvgDiagrams.pancreaticAcinarCellsIsletsDualFunctionDiagramsvg,
        'largeIntestineRegionsHaustraWaterAbsorptionDiagram': BiologySvgDiagrams.largeIntestineRegionsHaustraWaterAbsorptionDiagramsvg,
        'gastrinSecretinCCKHormoneActionSummaryTable': BiologySvgDiagrams.gastrinSecretinCCKHormoneActionSummaryTablesvg,
        'macronutrientDigestionAbsorptionSummaryDiagram': BiologySvgDiagrams.macronutrientDigestionAbsorptionSummaryDiagramsvg,
        'pepticUlcerVsIBDPathologyComparisonDiagram': BiologySvgDiagrams.pepticUlcerVsIBDPathologyComparisonDiagramsvg,

        // Renal System
        'excretoryOrgansAndWasteProductsOverviewDiagram': BiologySvgDiagrams.excretoryOrgansAndWasteProductsOverviewDiagramsvg,
        'kidneyExternalInternalStructureLabelledDiagram': BiologySvgDiagrams.kidneyExternalInternalStructureLabelledDiagramsvg,
        'nephronComponentsLabelledFlowDiagram': BiologySvgDiagrams.nephronComponentsLabelledFlowDiagramsvg,
        'filtrationReabsorptionSecretionAlongNephronDiagram': BiologySvgDiagrams.filtrationReabsorptionSecretionAlongNephronDiagramsvg,
        'countercurrentMultiplierMedullaryGradientDiagram': BiologySvgDiagrams.countercurrentMultiplierMedullaryGradientDiagramsvg,
        'renalHPlus_HCO3_handlingAlongNephronDiagram': BiologySvgDiagrams.renalHPlus_HCO3_handlingAlongNephronDiagramsvg,
        'kidneyEndocrineFunctionsEPOVitaminDRAASdiagram': BiologySvgDiagrams.kidneyEndocrineFunctionsEPOVitaminDRAASdiagramsvg,
        'GFR_creatinine_clearance_calculation_diagram': BiologySvgDiagrams.GFR_creatinine_clearance_calculation_diagramsvg,
        'sodiumPotassiumCalciumRenalHandlingSummaryDiagram': BiologySvgDiagrams.sodiumPotassiumCalciumRenalHandlingSummaryDiagramsvg,
        'juxtaglomerularApparatusGranularCellsMaculaDensaDiagram': BiologySvgDiagrams.juxtaglomerularApparatusGranularCellsMaculaDensaDiagramsvg,
        'CKD_staging_GFR_decline_graph': BiologySvgDiagrams.CKD_staging_GFR_decline_graphsvg,

        // Adaptive Immunity
        'innateVsAdaptiveImmunityComparisonDiagram': BiologySvgDiagrams.innateVsAdaptiveImmunityComparisonDiagramsvg,
        'primarySecondaryLymphoidOrgansBodyMapDiagram': BiologySvgDiagrams.primarySecondaryLymphoidOrgansBodyMapDiagramsvg,
        'physicalAndChemicalBarriersOfInnateImmunityDiagram': BiologySvgDiagrams.physicalAndChemicalBarriersOfInnateImmunityDiagramsvg,
        'phagocytosisComplementInflammationCascadeDiagram': BiologySvgDiagrams.phagocytosisComplementInflammationCascadeDiagramsvg,
        'antibodyStructureAndFiveClassesDiagram': BiologySvgDiagrams.antibodyStructureAndFiveClassesDiagramsvg,
        'ThelperCTL_CD4_CD8_MHC_activationPathwayDiagram': BiologySvgDiagrams.ThelperCTL_CD4_CD8_MHC_activationPathwayDiagramsvg,
        'endogenousExogenousAntigenPresentationMHC1_MHC2_Diagram': BiologySvgDiagrams.endogenousExogenousAntigenPresentationMHC1_MHC2_Diagramsvg,
        'primaryVsSecondaryImmuneResponseAntibodyTitreDiagram': BiologySvgDiagrams.primaryVsSecondaryImmuneResponseAntibodyTitreDiagramsvg,
        'gellAndCoombsTypeI_II_III_IV_HypersensitivityDiagram': BiologySvgDiagrams.gellAndCoombsTypeI_II_III_IV_HypersensitivityDiagramsvg,
        'autoimmunityMechanismsAndExamplesDiseasesDiagram': BiologySvgDiagrams.autoimmunityMechanismsAndExamplesDiseasesDiagramsvg,
        'tumourImmuneEvasionCheckpointInhibitorDiagram': BiologySvgDiagrams.tumourImmuneEvasionCheckpointInhibitorDiagramsvg,

        // Integumentary System
        'skinFunctionsSummaryAndColourDeterminantsDiagram': BiologySvgDiagrams.skinFunctionsSummaryAndColourDeterminantsDiagramsvg,
        'fiveLayersOfEpidermisLabelledCrossSection': BiologySvgDiagrams.fiveLayersOfEpidermisLabelledCrossSectionsvg,
        'papillaryReticularyDermisSensoryReceptorsDiagram': BiologySvgDiagrams.papillaryReticularyDermisSensoryReceptorsDiagramsvg,
        'hypodermisFatLayerInsulationPaddingDiagram': BiologySvgDiagrams.hypodermisFatLayerInsulationPaddingDiagramsvg,
        'hairFollicleShaftGrowthCycleAnagen_Catagen_TelogenDiagram': BiologySvgDiagrams.hairFollicleShaftGrowthCycleAnagen_Catagen_TelogenDiagramsvg,
        'nailStructurePlateMatrixBedLunulaDiagram': BiologySvgDiagrams.nailStructurePlateMatrixBedLunulaDiagramsvg,
        'eccrineApocrineSeabaceousGlandsComparisonDiagram': BiologySvgDiagrams.eccrineApocrineSeabaceousGlandsComparisonDiagramsvg,
        'skinVasodilationVasoconstrictionHeatLossMechanismsDiagram': BiologySvgDiagrams.skinVasodilationVasoconstrictionHeatLossMechanismsDiagramsvg,
        'vitaminD3_synthesis_activation_pathway_skin_liver_kidney_diagram': BiologySvgDiagrams.vitaminD3_synthesis_activation_pathway_skin_liver_kidney_diagramsvg,
        'woundHealingFourPhasesDiagram': BiologySvgDiagrams.woundHealingFourPhasesDiagramsvg,
        'ABCDE_melanoma_detection_skinCancerTypesDiagram': BiologySvgDiagrams.ABCDE_melanoma_detection_skinCancerTypesDiagramsvg,

        // Carbohydrates
        'carbohydrateGeneralFormulaDiagram': BiologySvgDiagrams.carbohydrateGeneralFormulaDiagramsvg,
        'glucoseHaworthProjectionDiagram': BiologySvgDiagrams.glucoseHaworthProjectionDiagramsvg,
        'glycosidicBondFormationDiagram': BiologySvgDiagrams.glycosidicBondFormationDiagramsvg,
        'starchGlycogenCelluloseComparisonDiagram': BiologySvgDiagrams.starchGlycogenCelluloseComparisonDiagramsvg,
        'condensationHydrolysisReactionDiagram': BiologySvgDiagrams.condensationHydrolysisReactionDiagramsvg,
        'benedictIodineTestResultsChart': BiologySvgDiagrams.benedictIodineTestResultsChartsvg,
        'glycocalyxMembraneDiagram': BiologySvgDiagrams.glycocalyxMembraneDiagramsvg,
        'glycolysisGlycogenesisPathwayDiagram': BiologySvgDiagrams.glycolysisGlycogenesisPathwayDiagramsvg,
        'carbohydrateDigestionTractDiagram': BiologySvgDiagrams.carbohydrateDigestionTractDiagramsvg,
        'selectinLigandBindingDiagram': BiologySvgDiagrams.selectinLigandBindingDiagramsvg,
        'diabetesBloodGlucoseRegulationDiagram': BiologySvgDiagrams.diabetesBloodGlucoseRegulationDiagramsvg,

        // Lipids
        'fattyAcidStructureDiagram': BiologySvgDiagrams.fattyAcidStructureDiagramsvg,
        'triacylglycerolEsterBondDiagram': BiologySvgDiagrams.triacylglycerolEsterBondDiagramsvg,
        'phospholipidBilayerDiagram': BiologySvgDiagrams.phospholipidBilayerDiagramsvg,
        'cholesterolSteraneSkeleton': BiologySvgDiagrams.cholesterolSteraneSkeletonsvg,
        'waxEsterStructureDiagram': BiologySvgDiagrams.waxEsterStructureDiagramsvg,
        'fatSolubleVitaminAbsorptionDiagram': BiologySvgDiagrams.fatSolubleVitaminAbsorptionDiagramsvg,
        'arachidonicAcidCascadeDiagram': BiologySvgDiagrams.arachidonicAcidCascadeDiagramsvg,
        'betaOxidationPathwayDiagram': BiologySvgDiagrams.betaOxidationPathwayDiagramsvg,
        'fluidMosaicModelDiagram': BiologySvgDiagrams.fluidMosaicModelDiagramsvg,
        'emulsionTestResultsDiagram': BiologySvgDiagrams.emulsionTestResultsDiagramsvg,
        'atherosclerosisPlaqueDiagram': BiologySvgDiagrams.atherosclerosisPlaqueDiagramsvg,

        // Proteins
        'aminoAcidGeneralStructureDiagram': BiologySvgDiagrams.aminoAcidGeneralStructureDiagramsvg,
        'peptideBondCondensationDiagram': BiologySvgDiagrams.peptideBondCondensationDiagramsvg,
        'fourLevelsProteinStructureDiagram': BiologySvgDiagrams.fourLevelsProteinStructureDiagramsvg,
        'proteinFoldingEnergyLandscapeDiagram': BiologySvgDiagrams.proteinFoldingEnergyLandscapeDiagramsvg,
        'collagenTripleHelixDiagram': BiologySvgDiagrams.collagenTripleHelixDiagramsvg,
        'haemoglobinOxygenDissociationCurve': BiologySvgDiagrams.haemoglobinOxygenDissociationCurvesvg,
        'immunoglobulinYShapeDiagram': BiologySvgDiagrams.immunoglobulinYShapeDiagramsvg,
        'integralPeripheralProteinDiagram': BiologySvgDiagrams.integralPeripheralProteinDiagramsvg,
        'proteinFunctionClassificationChart': BiologySvgDiagrams.proteinFunctionClassificationChartsvg,
        'biuretTestColourResultsDiagram': BiologySvgDiagrams.biuretTestColourResultsDiagramsvg,
        'sickleCellHaemoglobinPolymerisation': BiologySvgDiagrams.sickleCellHaemoglobinPolymerisationsvg,

        // Nucleic Acids & Gene Expression
        'nucleotideStructureDiagram': BiologySvgDiagrams.nucleotideStructureDiagramsvg,
        'dnaStructure': BiologySvgDiagrams.dnaStructuresvg,
        'rnaStructure': BiologySvgDiagrams.rnaStructuresvg,
        'dnaReplication': BiologySvgDiagrams.dnaReplicationsvg,
        'transcription': BiologySvgDiagrams.transcriptionsvg,
        'codonChart': BiologySvgDiagrams.codonChartsvg,
        'translation': BiologySvgDiagrams.translationsvg,
        'chromosomes': BiologySvgDiagrams.chromosomessvg,
        'mutationTypesClassificationDiagram': BiologySvgDiagrams.mutationTypesClassificationDiagramsvg,

        // Thermodynamics & Energy
        'gibbsFreeEnergyReactionDiagram': BiologySvgDiagrams.gibbsFreeEnergyReactionDiagramsvg,
        'atpStructureHydrolysisDiagram': BiologySvgDiagrams.atpStructureHydrolysisDiagramsvg,
        'cellularRespirationOverviewDiagram': BiologySvgDiagrams.cellularRespirationOverviewDiagramsvg,
        'glycolysisPathwayDiagram': BiologySvgDiagrams.glycolysisPathwayDiagramsvg,
        'pyruvateDehydrogenaseComplexDiagram': BiologySvgDiagrams.pyruvateDehydrogenaseComplexDiagramsvg,
        'krebsCycleCircularDiagram': BiologySvgDiagrams.krebsCycleCircularDiagramsvg,
        'electronTransportChainDiagram': BiologySvgDiagrams.electronTransportChainDiagramsvg,
        'lightDependentCalvinCycleDiagram': BiologySvgDiagrams.lightDependentCalvinCycleDiagramsvg,
        'metabolicPathwayIntegrationDiagram': BiologySvgDiagrams.metabolicPathwayIntegrationDiagramsvg,
        'warburgEffectCancerMetabolismDiagram': BiologySvgDiagrams.warburgEffectCancerMetabolismDiagramsvg,
        'respiratoryQuotientCalculationDiagram': BiologySvgDiagrams.respiratoryQuotientCalculationDiagramsvg,

        // Enzymes
        'activationEnergyReactionCoordinateDiagram': BiologySvgDiagrams.activationEnergyReactionCoordinateDiagramsvg,
        'activeSiteInducedFitDiagram': BiologySvgDiagrams.activeSiteInducedFitDiagramsvg,
        'stereospecificitySubstrateDiagram': BiologySvgDiagrams.stereospecificitySubstrateDiagramsvg,
        'michaelisMentenLineweaverBurkDiagram': BiologySvgDiagrams.michaelisMentenLineweaverBurkDiagramsvg,
        'serineProteaseCatalyticTriadDiagram': BiologySvgDiagrams.serineProteaseCatalyticTriadDiagramsvg,
        'inhibitionTypesLineweaverBurkComparison': BiologySvgDiagrams.inhibitionTypesLineweaverBurkComparisonsvg,
        'allostericSigmoidalCurveDiagram': BiologySvgDiagrams.allostericSigmoidalCurveDiagramsvg,
        'temperaturePHOptimumCurveDiagram': BiologySvgDiagrams.temperaturePHOptimumCurveDiagramsvg,
        'digestiveEnzymeGITractDiagram': BiologySvgDiagrams.digestiveEnzymeGITractDiagramsvg,
        'cardiacEnzymeBiomarkerTimingChart': BiologySvgDiagrams.cardiacEnzymeBiomarkerTimingChartsvg,
        'immobilisedEnzymeBiosensorDiagram': BiologySvgDiagrams.immobilisedEnzymeBiosensorDiagramsvg,
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
