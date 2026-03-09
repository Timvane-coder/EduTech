// ============================================================
// SECTION CONFIGURATION
// Covers chemistry thermodynamics handlers:
//   handleEntropy
//   handleEnthalpy
//   handleGibbsFreeEnergy
//   handleCalorimetry
//
// Each section maps one top-level key from handler.components.
// contentKey: 'components' drills into the filtered components
// object, matching the established pattern.
//
// diagramId   → descriptive camelCase name of a visual relevant to that section
// experimentId → snake_case name of a concrete investigation relevant to that section
// ============================================================


// ────────────────────────────────────────────────────────────
// HANDLER: handleEntropy
// Top-level component keys (in order):
//   foundations | lawsOfThermodynamics | entropyCalculations |
//   entropyAndSpontaneity | entropyAndPhaseChanges |
//   entropyAndMolecularProperties | statisticalMechanicsAndEntropy |
//   entropyInChemicalReactions | entropyInInformationTheory |
//   realWorldApplications
// ────────────────────────────────────────────────────────────

const CHEMISTRY_SECTIONS = [


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'acidBaseTheories',
        specificItems: ['foundations'],
        diagramId: 'acidBaseVocabularyConceptMap',
        experimentId: 'identifying_acids_and_bases_by_properties_experiment',
        contentKey: 'components'
    },
    {
        id: 'arrheniusTheory',
        label: 'Arrhenius Theory',
        sectionNumber: 2,
        subTopic: 'acidBaseTheories',
        specificItems: ['arrheniusTheory'],
        diagramId: 'arrheniusIonDissociationInWaterDiagram',
        experimentId: 'arrhenius_acid_base_ion_production_conductivity_experiment',
        contentKey: 'components'
    },
    {
        id: 'bronstedLowryTheory',
        label: 'Brønsted-Lowry Theory',
        sectionNumber: 3,
        subTopic: 'acidBaseTheories',
        specificItems: ['bronstedLowryTheory'],
        diagramId: 'protonTransferConjugatePairArrowDiagram',
        experimentId: 'bronsted_lowry_proton_transfer_reaction_mapping_experiment',
        contentKey: 'components'
    },
    {
        id: 'lewisTheory',
        label: 'Lewis Theory',
        sectionNumber: 4,
        subTopic: 'acidBaseTheories',
        specificItems: ['lewisTheory'],
        diagramId: 'lewisAcidBaseElectronPairDonationDiagram',
        experimentId: 'lewis_acid_base_coordinate_bond_molecular_model_experiment',
        contentKey: 'components'
    },
    {
        id: 'acidBaseStrength',
        label: 'Acid and Base Strength',
        sectionNumber: 5,
        subTopic: 'acidBaseTheories',
        specificItems: ['acidBaseStrength'],
        diagramId: 'strongWeakAcidDissociationComparisonDiagram',
        experimentId: 'comparing_acid_strength_conductivity_and_ph_experiment',
        contentKey: 'components'
    },
    {
        id: 'waterAsAcidAndBase',
        label: 'Water as an Acid and Base',
        sectionNumber: 6,
        subTopic: 'acidBaseTheories',
        specificItems: ['waterAsAcidAndBase'],
        diagramId: 'waterAutoionisationEquilibriumDiagram',
        experimentId: 'water_autoionisation_kw_temperature_dependence_experiment',
        contentKey: 'components'
    },
    {
        id: 'polyproticAcids',
        label: 'Polyprotic Acids',
        sectionNumber: 7,
        subTopic: 'acidBaseTheories',
        specificItems: ['polyproticAcids'],
        diagramId: 'polyproticAcidStepwiseIonisationDiagram',
        experimentId: 'phosphoric_acid_stepwise_neutralisation_titration_experiment',
        contentKey: 'components'
    },
    {
        id: 'acidBaseReactionsAndEquations',
        label: 'Acid-Base Reactions and Ion Equations',
        sectionNumber: 8,
        subTopic: 'acidBaseTheories',
        specificItems: ['acidBaseReactionsAndEquations'],
        diagramId: 'molecularCompleteNetIonicEquationComparisonDiagram',
        experimentId: 'acid_metal_carbonate_oxide_reaction_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'saltHydrolysis',
        label: 'Salt Hydrolysis',
        sectionNumber: 9,
        subTopic: 'acidBaseTheories',
        specificItems: ['saltHydrolysis'],
        diagramId: 'saltHydrolysisPhOutcomeSummaryTable',
        experimentId: 'dissolved_salt_ph_measurement_prediction_experiment',
        contentKey: 'components'
    },
    {
        id: 'acidBaseIndicators',
        label: 'Acid-Base Indicators',
        sectionNumber: 10,
        subTopic: 'acidBaseTheories',
        specificItems: ['acidBaseIndicators'],
        diagramId: 'indicatorColorChangePhRangeChart',
        experimentId: 'natural_indicator_extraction_red_cabbage_ph_experiment',
        contentKey: 'components'
    },
    {
        id: 'environmentalAndBiologicalApplications',
        label: 'Environmental and Biological Applications',
        sectionNumber: 11,
        subTopic: 'acidBaseTheories',
        specificItems: ['environmentalAndBiologicalApplications'],
        diagramId: 'acidRainFormationAndOceanAcidificationDiagram',
        experimentId: 'acid_rain_simulation_limestone_dissolution_experiment',
        contentKey: 'components'
    },

   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'pHCalculations',
        specificItems: ['foundations'],
        diagramId: 'logarithmBaseConceptAndAntilogDiagram',
        experimentId: 'logarithm_base_ten_pattern_discovery_experiment',
        contentKey: 'components'
    },
    {
        id: 'pHScale',
        label: 'The pH Scale',
        sectionNumber: 2,
        subTopic: 'pHCalculations',
        specificItems: ['pHScale'],
        diagramId: 'phScaleCommonSubstancesNumberLineDiagram',
        experimentId: 'ph_meter_calibration_and_common_substance_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'pHOfStrongAcids',
        label: 'pH of Strong Acids',
        sectionNumber: 3,
        subTopic: 'pHCalculations',
        specificItems: ['pHOfStrongAcids'],
        diagramId: 'strongAcidFullDissociationPhCalculationFlowchart',
        experimentId: 'strong_acid_serial_dilution_ph_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'pHOfStrongBases',
        label: 'pH of Strong Bases',
        sectionNumber: 4,
        subTopic: 'pHCalculations',
        specificItems: ['pHOfStrongBases'],
        diagramId: 'strongBasePoHToPhConversionDiagram',
        experimentId: 'naoh_concentration_ph_poh_determination_experiment',
        contentKey: 'components'
    },
    {
        id: 'pHOfWeakAcids',
        label: 'pH of Weak Acids',
        sectionNumber: 5,
        subTopic: 'pHCalculations',
        specificItems: ['pHOfWeakAcids'],
        diagramId: 'weakAcidICETableEquilibriumDiagram',
        experimentId: 'acetic_acid_ph_ka_determination_ice_table_experiment',
        contentKey: 'components'
    },
    {
        id: 'pHOfWeakBases',
        label: 'pH of Weak Bases',
        sectionNumber: 6,
        subTopic: 'pHCalculations',
        specificItems: ['pHOfWeakBases'],
        diagramId: 'weakBaseICETableOHMinusToPhDiagram',
        experimentId: 'ammonia_solution_ph_kb_calculation_experiment',
        contentKey: 'components'
    },
    {
        id: 'interconversions',
        label: 'Interconverting pH, pOH, [H⁺], [OH⁻]',
        sectionNumber: 7,
        subTopic: 'pHCalculations',
        specificItems: ['interconversions'],
        diagramId: 'phPohHConcentrationInterconversionCycleDiagram',
        experimentId: 'ph_poh_interconversion_calculation_circuit_experiment',
        contentKey: 'components'
    },
    {
        id: 'pHOfSaltSolutions',
        label: 'pH of Salt Solutions',
        sectionNumber: 8,
        subTopic: 'pHCalculations',
        specificItems: ['pHOfSaltSolutions'],
        diagramId: 'saltHydrolysisPhPredictionDecisionTree',
        experimentId: 'dissolved_salt_ph_prediction_and_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'pHChangesWithDilution',
        label: 'pH Changes with Dilution',
        sectionNumber: 9,
        subTopic: 'pHCalculations',
        specificItems: ['pHChangesWithDilution'],
        diagramId: 'phVsDilutionCurveStrongWeakAcidComparisonGraph',
        experimentId: 'serial_dilution_ph_tracking_strong_vs_weak_acid_experiment',
        contentKey: 'components'
    },
    {
        id: 'mixingAcidAndBase',
        label: 'Mixing Acid and Base Solutions',
        sectionNumber: 10,
        subTopic: 'pHCalculations',
        specificItems: ['mixingAcidAndBase'],
        diagramId: 'excessReagentMixingPhCalculationFlowchart',
        experimentId: 'acid_base_mixing_excess_reagent_ph_prediction_experiment',
        contentKey: 'components'
    },
    {
        id: 'applicationsAndContext',
        label: 'Applications and Real-World Context',
        sectionNumber: 11,
        subTopic: 'pHCalculations',
        specificItems: ['applicationsAndContext'],
        diagramId: 'physiologicalPhRangesOrganSystemsDiagram',
        experimentId: 'soil_water_blood_ph_measurement_comparison_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'weakAcidsBases',
        specificItems: ['foundations'],
        diagramId: 'partialIonisationEquilibriumArrowDiagram',
        experimentId: 'strong_vs_weak_acid_conductivity_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'acidDissociationConstant',
        label: 'Acid Dissociation Constant (Ka)',
        sectionNumber: 2,
        subTopic: 'weakAcidsBases',
        specificItems: ['acidDissociationConstant'],
        diagramId: 'kaExpressionEquilibriumPositionDiagram',
        experimentId: 'ka_determination_from_ph_measurement_weak_acid_experiment',
        contentKey: 'components'
    },
    {
        id: 'baseDissociationConstant',
        label: 'Base Dissociation Constant (Kb)',
        sectionNumber: 3,
        subTopic: 'weakAcidsBases',
        specificItems: ['baseDissociationConstant'],
        diagramId: 'kbExpressionKaKbKwRelationshipDiagram',
        experimentId: 'ammonia_kb_determination_poh_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'equilibriumCalculations',
        label: 'Equilibrium Calculations',
        sectionNumber: 4,
        subTopic: 'weakAcidsBases',
        specificItems: ['equilibriumCalculations'],
        diagramId: 'iceTableWeakAcidSolvedStepByStepDiagram',
        experimentId: 'weak_acid_percent_ionisation_vs_concentration_experiment',
        contentKey: 'components'
    },
    {
        id: 'structureAndStrength',
        label: 'Structure and Acid/Base Strength',
        sectionNumber: 5,
        subTopic: 'weakAcidsBases',
        specificItems: ['structureAndStrength'],
        diagramId: 'periodicTrendsAcidStrengthBondPolarityDiagram',
        experimentId: 'oxyacid_strength_ranking_by_formula_and_ph_experiment',
        contentKey: 'components'
    },
    {
        id: 'hendersonHasselbalchEquation',
        label: 'Henderson-Hasselbalch Equation',
        sectionNumber: 6,
        subTopic: 'weakAcidsBases',
        specificItems: ['hendersonHasselbalchEquation'],
        diagramId: 'hendersonHasselbalchDerivationAndRatioInterpretationDiagram',
        experimentId: 'henderson_hasselbalch_ph_ratio_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'polyproticWeakAcids',
        label: 'Polyprotic Weak Acids',
        sectionNumber: 7,
        subTopic: 'weakAcidsBases',
        specificItems: ['polyproticWeakAcids'],
        diagramId: 'polyproticAcidKaStepwiseLadderDiagram',
        experimentId: 'phosphoric_acid_stepwise_ionisation_ph_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'commonIonEffect',
        label: 'Common Ion Effect',
        sectionNumber: 8,
        subTopic: 'weakAcidsBases',
        specificItems: ['commonIonEffect'],
        diagramId: 'commonIonEquilibriumShiftLeChatelierDiagram',
        experimentId: 'common_ion_suppression_acetic_acid_acetate_experiment',
        contentKey: 'components'
    },
    {
        id: 'biologicalApplications',
        label: 'Biological Applications',
        sectionNumber: 9,
        subTopic: 'weakAcidsBases',
        specificItems: ['biologicalApplications'],
        diagramId: 'aminoAcidZwitterionIsoelectricPointDiagram',
        experimentId: 'amino_acid_titration_curve_isoelectric_point_experiment',
        contentKey: 'components'
    },
    {
        id: 'industrialApplications',
        label: 'Industrial Applications',
        sectionNumber: 10,
        subTopic: 'weakAcidsBases',
        specificItems: ['industrialApplications'],
        diagramId: 'drugIonisationPhAbsorptionDiagram',
        experimentId: 'aspirin_ionisation_ph_solubility_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'relativeStrengthComparisons',
        label: 'Relative Strength Comparisons',
        sectionNumber: 11,
        subTopic: 'weakAcidsBases',
        specificItems: ['relativeStrengthComparisons'],
        diagramId: 'acidStrengthRankingKaScaleDiagram',
        experimentId: 'acid_strength_ranking_displacement_reaction_experiment',
        contentKey: 'components'
    },


  {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'buffers',
        specificItems: ['foundations'],
        diagramId: 'bufferConceptShockAbsorberAnalogyDiagram',
        experimentId: 'buffer_vs_unbuffered_solution_ph_resistance_experiment',
        contentKey: 'components'
    },
    {
        id: 'bufferComposition',
        label: 'Composition of Buffers',
        sectionNumber: 2,
        subTopic: 'buffers',
        specificItems: ['bufferComposition'],
        diagramId: 'acidBaseBufferPairComponentsDiagram',
        experimentId: 'identifying_buffer_components_from_solutions_experiment',
        contentKey: 'components'
    },
    {
        id: 'bufferMechanism',
        label: 'Mechanism of Buffer Action',
        sectionNumber: 3,
        subTopic: 'buffers',
        specificItems: ['bufferMechanism'],
        diagramId: 'bufferResponseToAcidBaseAdditionMolecularDiagram',
        experimentId: 'acetate_buffer_acid_base_addition_ph_tracking_experiment',
        contentKey: 'components'
    },
    {
        id: 'hendersonHasselbalchForBuffers',
        label: 'Henderson-Hasselbalch for Buffers',
        sectionNumber: 4,
        subTopic: 'buffers',
        specificItems: ['hendersonHasselbalchForBuffers'],
        diagramId: 'hhEquationRatioPhRelationshipBufferDiagram',
        experimentId: 'henderson_hasselbalch_buffer_ph_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'bufferCapacity',
        label: 'Buffer Capacity',
        sectionNumber: 5,
        subTopic: 'buffers',
        specificItems: ['bufferCapacity'],
        diagramId: 'bufferCapacityVsPhBellCurveDiagram',
        experimentId: 'buffer_capacity_titration_high_vs_low_concentration_experiment',
        contentKey: 'components'
    },
    {
        id: 'bufferPreparation',
        label: 'Preparation of Buffers',
        sectionNumber: 6,
        subTopic: 'buffers',
        specificItems: ['bufferPreparation'],
        diagramId: 'bufferPreparationDirectMixingFlowchart',
        experimentId: 'preparing_acetate_buffer_target_ph_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'biologicalBuffers',
        label: 'Biological Buffers',
        sectionNumber: 7,
        subTopic: 'buffers',
        specificItems: ['biologicalBuffers'],
        diagramId: 'bloodBicarbonateCO2BufferSystemDiagram',
        experimentId: 'simulated_blood_buffer_co2_breathing_rate_ph_experiment',
        contentKey: 'components'
    },
    {
        id: 'bufferRangeAndSelection',
        label: 'Buffer Range and Selection',
        sectionNumber: 8,
        subTopic: 'buffers',
        specificItems: ['bufferRangeAndSelection'],
        diagramId: 'bufferEffectiveRangePkaTargetPhMatchingChart',
        experimentId: 'selecting_buffer_pair_by_pka_and_target_ph_experiment',
        contentKey: 'components'
    },
    {
        id: 'advancedBufferCalculations',
        label: 'Advanced Buffer Calculations',
        sectionNumber: 9,
        subTopic: 'buffers',
        specificItems: ['advancedBufferCalculations'],
        diagramId: 'bufferMolesShiftAfterAcidBaseAdditionDiagram',
        experimentId: 'buffer_exhaustion_incremental_acid_addition_experiment',
        contentKey: 'components'
    },
    {
        id: 'buffersInAnalyticalChemistry',
        label: 'Buffers in Analytical Chemistry',
        sectionNumber: 10,
        subTopic: 'buffers',
        specificItems: ['buffersInAnalyticalChemistry'],
        diagramId: 'phMeterCalibrationStandardBuffersDiagram',
        experimentId: 'ph_meter_two_point_calibration_buffer_standards_experiment',
        contentKey: 'components'
    },
    {
        id: 'pharmaceuticalAndIndustrialBuffers',
        label: 'Pharmaceutical and Industrial Buffers',
        sectionNumber: 11,
        subTopic: 'buffers',
        specificItems: ['pharmaceuticalAndIndustrialBuffers'],
        diagramId: 'pharmaceuticalBufferPhStabilityShelfLifeDiagram',
        experimentId: 'eye_drop_buffer_ph_compatibility_tear_fluid_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'titrations',
        specificItems: ['foundations'],
        diagramId: 'titrationApparatusLabelledSetupDiagram',
        experimentId: 'titration_technique_burette_pipette_familiarisation_experiment',
        contentKey: 'components'
    },
    {
        id: 'titrationCurves',
        label: 'Titration Curves',
        sectionNumber: 2,
        subTopic: 'titrations',
        specificItems: ['titrationCurves'],
        diagramId: 'fourTitrationCurveTypesComparisonDiagram',
        experimentId: 'plotting_titration_curve_strong_acid_strong_base_experiment',
        contentKey: 'components'
    },
    {
        id: 'indicatorSelection',
        label: 'Indicator Selection',
        sectionNumber: 3,
        subTopic: 'titrations',
        specificItems: ['indicatorSelection'],
        diagramId: 'indicatorTransitionRangeEquivalencePointOverlapDiagram',
        experimentId: 'indicator_suitability_comparison_different_titration_types_experiment',
        contentKey: 'components'
    },
    {
        id: 'phThroughoutTitration',
        label: 'pH Throughout the Titration',
        sectionNumber: 4,
        subTopic: 'titrations',
        specificItems: ['phThroughoutTitration'],
        diagramId: 'phCalculationRegionsByTitrationStageDiagram',
        experimentId: 'ph_measurement_every_1ml_weak_acid_strong_base_titration_experiment',
        contentKey: 'components'
    },
    {
        id: 'polyproticAcidTitrations',
        label: 'Polyprotic Acid Titrations',
        sectionNumber: 5,
        subTopic: 'titrations',
        specificItems: ['polyproticAcidTitrations'],
        diagramId: 'polyproticAcidMultipleEquivalencePointsCurveDiagram',
        experimentId: 'phosphoric_acid_two_equivalence_point_titration_experiment',
        contentKey: 'components'
    },
    {
        id: 'backTitrations',
        label: 'Back Titrations',
        sectionNumber: 6,
        subTopic: 'titrations',
        specificItems: ['backTitrations'],
        diagramId: 'backTitrationExcessReagentSubtractionFlowchart',
        experimentId: 'back_titration_calcium_carbonate_purity_antacid_experiment',
        contentKey: 'components'
    },
    {
        id: 'redoxTitrations',
        label: 'Redox Titrations',
        sectionNumber: 7,
        subTopic: 'titrations',
        specificItems: ['redoxTitrations'],
        diagramId: 'redoxTitrationElectronTransferEndpointDiagram',
        experimentId: 'potassium_permanganate_iron_ii_redox_titration_experiment',
        contentKey: 'components'
    },
    {
        id: 'complexometricTitrations',
        label: 'Complexometric Titrations',
        sectionNumber: 8,
        subTopic: 'titrations',
        specificItems: ['complexometricTitrations'],
        diagramId: 'edtaMetalIonChelationComplexDiagram',
        experimentId: 'edta_water_hardness_calcium_magnesium_determination_experiment',
        contentKey: 'components'
    },
    {
        id: 'techniqueAndErrors',
        label: 'Technique and Errors',
        sectionNumber: 9,
        subTopic: 'titrations',
        specificItems: ['techniqueAndErrors'],
        diagramId: 'titrationsSystematicRandomErrorSourcesDiagram',
        experimentId: 'concordant_titres_precision_accuracy_burette_reading_experiment',
        contentKey: 'components'
    },
    {
        id: 'applicationsAndRealWorld',
        label: 'Applications and Real-World Context',
        sectionNumber: 10,
        subTopic: 'titrations',
        specificItems: ['applicationsAndRealWorld'],
        diagramId: 'industrialPharmaceuticalTitrationUseCasesDiagram',
        experimentId: 'vitamin_c_content_fruit_juice_iodometric_titration_experiment',
        contentKey: 'components'
    },





   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'ionicBonding',
        specificItems: ['foundations'],
        diagramId: 'atomicStructureShellConfigurationDiagram',
        experimentId: 'flame_test_identifying_metal_ions_by_colour_experiment',
        contentKey: 'components'
    },
    {
        id: 'ionFormation',
        label: 'Ion Formation',
        sectionNumber: 2,
        subTopic: 'ionicBonding',
        specificItems: ['ionFormation'],
        diagramId: 'electronTransferCationAnionFormationDiagram',
        experimentId: 'sodium_chlorine_direct_combination_ion_formation_experiment',
        contentKey: 'components'
    },
    {
        id: 'ionicBond',
        label: 'The Ionic Bond',
        sectionNumber: 3,
        subTopic: 'ionicBonding',
        specificItems: ['ionicBond'],
        diagramId: 'dotAndCrossElectronTransferNaClDiagram',
        experimentId: 'dot_cross_diagram_drawing_ionic_compounds_activity',
        contentKey: 'components'
    },
    {
        id: 'ionicCompoundFormulae',
        label: 'Ionic Compound Formulae',
        sectionNumber: 4,
        subTopic: 'ionicBonding',
        specificItems: ['ionicCompoundFormulae'],
        diagramId: 'chargeBalanceCrossoverMethodDiagram',
        experimentId: 'ionic_formula_writing_charge_balance_card_sort_experiment',
        contentKey: 'components'
    },
    {
        id: 'ionicLatticeStructure',
        label: 'Ionic Lattice Structure',
        sectionNumber: 5,
        subTopic: 'ionicBonding',
        specificItems: ['ionicLatticeStructure'],
        diagramId: 'naClFccRockSaltLatticeUnitCellDiagram',
        experimentId: 'ionic_lattice_model_building_polystyrene_spheres_experiment',
        contentKey: 'components'
    },
    {
        id: 'bornHaberCycle',
        label: 'Born–Haber Cycle',
        sectionNumber: 6,
        subTopic: 'ionicBonding',
        specificItems: ['bornHaberCycle'],
        diagramId: 'bornHaberCycleEnthalpyLadderNaClDiagram',
        experimentId: 'hess_law_enthalpy_cycle_lattice_energy_calculation_experiment',
        contentKey: 'components'
    },
    {
        id: 'propertiesOfIonicCompounds',
        label: 'Properties of Ionic Compounds',
        sectionNumber: 7,
        subTopic: 'ionicBonding',
        specificItems: ['propertiesOfIonicCompounds'],
        diagramId: 'ionicCompoundPropertiesStructureExplanationChart',
        experimentId: 'ionic_compound_conductivity_solubility_melting_point_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'polarisationAndCovalentCharacter',
        label: 'Polarisation and Covalent Character',
        sectionNumber: 8,
        subTopic: 'ionicBonding',
        specificItems: ['polarisationAndCovalentCharacter'],
        diagramId: 'fajansRulesCationPolarisationAnionDistortionDiagram',
        experimentId: 'comparing_ionic_covalent_character_silver_halides_solubility_experiment',
        contentKey: 'components'
    },
    {
        id: 'electrolysis',
        label: 'Electrolysis',
        sectionNumber: 9,
        subTopic: 'ionicBonding',
        specificItems: ['electrolysis'],
        diagramId: 'electrolysisAnodeCathodeIonMigrationDiagram',
        experimentId: 'electrolysis_molten_lead_bromide_copper_sulfate_solution_experiment',
        contentKey: 'components'
    },
    {
        id: 'realWorldApplications',
        label: 'Real-World Applications',
        sectionNumber: 10,
        subTopic: 'ionicBonding',
        specificItems: ['realWorldApplications'],
        diagramId: 'ionicCompoundsIndustryBiologyApplicationsInfographic',
        experimentId: 'sodium_chloride_industrial_uses_chlor_alkali_process_research_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'covalentBonding',
        specificItems: ['foundations'],
        diagramId: 'electronSharingBondingPairLonePairFoundationDiagram',
        experimentId: 'valence_electron_counting_and_octet_rule_card_activity_experiment',
        contentKey: 'components'
    },
    {
        id: 'typesOfCovalentBonds',
        label: 'Types of Covalent Bonds',
        sectionNumber: 2,
        subTopic: 'covalentBonding',
        specificItems: ['typesOfCovalentBonds'],
        diagramId: 'singleDoubleTripleBondOrderLengthStrengthComparisonDiagram',
        experimentId: 'molecular_model_kit_single_double_triple_bond_construction_experiment',
        contentKey: 'components'
    },
    {
        id: 'bondPolarity',
        label: 'Bond Polarity',
        sectionNumber: 3,
        subTopic: 'covalentBonding',
        specificItems: ['bondPolarity'],
        diagramId: 'electronegativityDifferencePolaritySpectrumDiagram',
        experimentId: 'water_stream_deflection_polar_molecule_electric_field_experiment',
        contentKey: 'components'
    },
    {
        id: 'dotAndCrossDiagrams',
        label: 'Dot-and-Cross Diagrams',
        sectionNumber: 4,
        subTopic: 'covalentBonding',
        specificItems: ['dotAndCrossDiagrams'],
        diagramId: 'dotCrossDiagramH2ONH3CO2StepByStepDiagram',
        experimentId: 'dot_cross_diagram_covalent_molecules_systematic_drawing_experiment',
        contentKey: 'components'
    },
    {
        id: 'sigmaAndPiBonds',
        label: 'Sigma and Pi Bonds',
        sectionNumber: 5,
        subTopic: 'covalentBonding',
        specificItems: ['sigmaAndPiBonds'],
        diagramId: 'sigmaHeadOnPiLateralOrbitalOverlapHybridisationDiagram',
        experimentId: 'molecular_model_sp3_sp2_sp_hybridisation_geometry_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'resonance',
        label: 'Resonance',
        sectionNumber: 6,
        subTopic: 'covalentBonding',
        specificItems: ['resonance'],
        diagramId: 'resonanceStructuresBenzeneNitrateCarbonateHybridDiagram',
        experimentId: 'benzene_equal_bond_length_resonance_evidence_spectroscopy_experiment',
        contentKey: 'components'
    },
    {
        id: 'bondEnthalpy',
        label: 'Bond Enthalpy',
        sectionNumber: 7,
        subTopic: 'covalentBonding',
        specificItems: ['bondEnthalpy'],
        diagramId: 'bondEnthalpyBreakingFormingEnergyProfileDiagram',
        experimentId: 'enthalpy_combustion_measurement_calorimetry_bond_enthalpy_calculation_experiment',
        contentKey: 'components'
    },
    {
        id: 'molecularCovalentStructures',
        label: 'Molecular Covalent Structures',
        sectionNumber: 8,
        subTopic: 'covalentBonding',
        specificItems: ['molecularCovalentStructures'],
        diagramId: 'simpleDiscretesMoleculeVsGiantLatticeStructureComparisonDiagram',
        experimentId: 'simple_molecular_substance_low_melting_point_conductivity_test_experiment',
        contentKey: 'components'
    },
    {
        id: 'giantCovalentStructures',
        label: 'Giant Covalent Structures',
        sectionNumber: 9,
        subTopic: 'covalentBonding',
        specificItems: ['giantCovalentStructures'],
        diagramId: 'diamondGraphiteGrapheneSiliconDioxideStructureComparisonDiagram',
        experimentId: 'diamond_graphite_hardness_conductivity_property_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'covalentBondingInContext',
        label: 'Covalent Bonding in Context',
        sectionNumber: 10,
        subTopic: 'covalentBonding',
        specificItems: ['covalentBondingInContext'],
        diagramId: 'covalentBondingOrganicBiochemistryMaterialsApplicationsInfographic',
        experimentId: 'identifying_functional_groups_organic_molecules_model_building_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'lewisStructures',
        specificItems: ['foundations'],
        diagramId: 'valenceElectronGroupPeriodicTableBondingPairLonePairLegendDiagram',
        experimentId: 'valence_electron_counting_periodic_table_group_rules_activity_experiment',
        contentKey: 'components'
    },
    {
        id: 'systematicDrawingProcedure',
        label: 'Systematic Drawing Procedure',
        sectionNumber: 2,
        subTopic: 'lewisStructures',
        specificItems: ['systematicDrawingProcedure'],
        diagramId: 'lewisStructureSixStepFlowchartDrawingProcedureDiagram',
        experimentId: 'lewis_structure_stepwise_drawing_simple_molecules_guided_worksheet_experiment',
        contentKey: 'components'
    },
    {
        id: 'formalCharge',
        label: 'Formal Charge',
        sectionNumber: 3,
        subTopic: 'lewisStructures',
        specificItems: ['formalCharge'],
        diagramId: 'formalChargeCalculationElectronAllocationDiagram',
        experimentId: 'formal_charge_calculation_best_structure_selection_so4_co_experiment',
        contentKey: 'components'
    },
    {
        id: 'resonanceStructures',
        label: 'Resonance Structures',
        sectionNumber: 4,
        subTopic: 'lewisStructures',
        specificItems: ['resonanceStructures'],
        diagramId: 'resonanceHybridCurvedArrowElectronMovementOzoneBenzeneDiagram',
        experimentId: 'ozone_carbonate_nitrate_resonance_structure_drawing_bond_order_calculation_experiment',
        contentKey: 'components'
    },
    {
        id: 'exceptionsToOctetRule',
        label: 'Exceptions to the Octet Rule',
        sectionNumber: 5,
        subTopic: 'lewisStructures',
        specificItems: ['exceptionsToOctetRule'],
        diagramId: 'octetExceptionsElectronDeficientRadicalExpandedOctetComparisonDiagram',
        experimentId: 'boron_trifluoride_phosphorus_pentachloride_expanded_octet_drawing_experiment',
        contentKey: 'components'
    },
    {
        id: 'lewisStructuresForIons',
        label: 'Lewis Structures for Ions',
        sectionNumber: 6,
        subTopic: 'lewisStructures',
        specificItems: ['lewisStructuresForIons'],
        diagramId: 'polyatomicIonBracketChargeNotationNH4SO4CO3Diagram',
        experimentId: 'polyatomic_ion_lewis_structure_charge_adjustment_drawing_experiment',
        contentKey: 'components'
    },
    {
        id: 'lewisAcidsAndBases',
        label: 'Lewis Acids and Bases',
        sectionNumber: 7,
        subTopic: 'lewisStructures',
        specificItems: ['lewisAcidsAndBases'],
        diagramId: 'lewisAcidBaseCoordinateBondAdductFormationDiagram',
        experimentId: 'bf3_nh3_lewis_acid_base_adduct_formation_demonstration_experiment',
        contentKey: 'components'
    },
    {
        id: 'bondOrderAndLength',
        label: 'Bond Order and Bond Length',
        sectionNumber: 8,
        subTopic: 'lewisStructures',
        specificItems: ['bondOrderAndLength'],
        diagramId: 'bondOrderLengthStrengthInverseTrendComparisonTableDiagram',
        experimentId: 'bond_length_ir_spectroscopy_order_comparison_data_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'advancedCases',
        label: 'Advanced Lewis Structure Cases',
        sectionNumber: 9,
        subTopic: 'lewisStructures',
        specificItems: ['advancedCases'],
        diagramId: 'hypervalentXeF4SF4OrganicMoleculeAdvancedLewisStructuresDiagram',
        experimentId: 'organic_molecule_lewis_structure_ethanol_acetic_acid_drawing_experiment',
        contentKey: 'components'
    },
    {
        id: 'connectionToVSEPR',
        label: 'Connection to VSEPR',
        sectionNumber: 10,
        subTopic: 'lewisStructures',
        specificItems: ['connectionToVSEPR'],
        diagramId: 'electronDomainCountToVSEPRGeometryBridgingFlowchartDiagram',
        experimentId: 'lewis_structure_to_vsepr_shape_prediction_stepwise_bridging_experiment',
        contentKey: 'components'
    },

   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'molecularGeometry',
        specificItems: ['foundations'],
        diagramId: 'electronDomainVsMolecularGeometryDistinctionFoundationDiagram',
        experimentId: 'electron_domain_counting_lewis_structure_3d_shape_introduction_experiment',
        contentKey: 'components'
    },
    {
        id: 'vsepRTheory',
        label: 'VSEPR Theory',
        sectionNumber: 2,
        subTopic: 'molecularGeometry',
        specificItems: ['vsepRTheory'],
        diagramId: 'vsepRRepulsionHierarchyElectronPairArrangementDiagram',
        experimentId: 'balloon_electron_pair_repulsion_vsepr_geometry_modelling_experiment',
        contentKey: 'components'
    },
    {
        id: 'molecularShapes',
        label: 'Molecular Shapes',
        sectionNumber: 3,
        subTopic: 'molecularGeometry',
        specificItems: ['molecularShapes'],
        diagramId: 'allThirteenVSEPRShapesElectronBondingGeometryCompleteCatalogueDiagram',
        experimentId: 'molecular_model_kit_all_vsepr_shapes_construction_angle_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'bondAngleDeviations',
        label: 'Bond Angle Deviations',
        sectionNumber: 4,
        subTopic: 'molecularGeometry',
        specificItems: ['bondAngleDeviations'],
        diagramId: 'lonePairCompressionBondAngleCH4NH3H2ODeviationComparisonDiagram',
        experimentId: 'bond_angle_lone_pair_effect_comparison_ch4_nh3_h2o_modelling_experiment',
        contentKey: 'components'
    },
    {
        id: 'molecularPolarity',
        label: 'Molecular Polarity',
        sectionNumber: 5,
        subTopic: 'molecularGeometry',
        specificItems: ['molecularPolarity'],
        diagramId: 'dipoleMomentVectorSumCancellationPolarNonpolarMoleculesDiagram',
        experimentId: 'water_stream_deflection_polar_vs_nonpolar_molecule_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'vsepRAndMultipleBonds',
        label: 'VSEPR and Multiple Bonds',
        sectionNumber: 6,
        subTopic: 'molecularGeometry',
        specificItems: ['vsepRAndMultipleBonds'],
        diagramId: 'multipleBondSingleDomainCO2H2COVSEPRTreatmentDiagram',
        experimentId: 'double_bond_vsepr_domain_counting_geometry_prediction_co2_so2_experiment',
        contentKey: 'components'
    },
    {
        id: 'threeDimensionalRepresentation',
        label: 'Three-Dimensional Representation',
        sectionNumber: 7,
        subTopic: 'molecularGeometry',
        specificItems: ['threeDimensionalRepresentation'],
        diagramId: 'wedgeDashSolidDashedBondNotation3dStructureDiagram',
        experimentId: 'wedge_dash_3d_structure_drawing_tetrahedral_chiral_molecule_experiment',
        contentKey: 'components'
    },
    {
        id: 'vsepRAndProperties',
        label: 'VSEPR and Molecular Properties',
        sectionNumber: 8,
        subTopic: 'molecularGeometry',
        specificItems: ['vsepRAndProperties'],
        diagramId: 'geometryPolarityBoilingPointSolubilityPropertyLinksDiagram',
        experimentId: 'molecular_polarity_boiling_point_solubility_correlation_data_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'valenceBondTheory',
        label: 'Valence Bond Theory',
        sectionNumber: 9,
        subTopic: 'molecularGeometry',
        specificItems: ['valenceBondTheory'],
        diagramId: 'hybridisationSp3Sp2SpOrbitalGeometryBondAngleSummaryDiagram',
        experimentId: 'hybridisation_orbital_geometry_model_sp3_sp2_sp_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'molecularOrbitalIntroduction',
        label: 'Molecular Orbital Theory — Introduction',
        sectionNumber: 10,
        subTopic: 'molecularGeometry',
        specificItems: ['molecularOrbitalIntroduction'],
        diagramId: 'bondingAntibondingMOEnergyDiagramH2O2N2DiatomicsDiagram',
        experimentId: 'liquid_oxygen_paramagnetism_demonstration_mo_theory_evidence_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'metallicBonding',
        specificItems: ['foundations'],
        diagramId: 'metalLocationPeriodicTableLowIELowENCharacteristicsDiagram',
        experimentId: 'metal_properties_observation_conductivity_malleability_lustre_screening_experiment',
        contentKey: 'components'
    },
    {
        id: 'seaOfElectronsModel',
        label: 'Sea of Electrons Model',
        sectionNumber: 2,
        subTopic: 'metallicBonding',
        specificItems: ['seaOfElectronsModel'],
        diagramId: 'metalCationLatticeDelocalizedElectronSeaModelDiagram',
        experimentId: 'metal_cation_charge_electron_count_bond_strength_comparison_activity_experiment',
        contentKey: 'components'
    },
    {
        id: 'metallicLatticeStructures',
        label: 'Metallic Lattice Structures',
        sectionNumber: 3,
        subTopic: 'metallicBonding',
        specificItems: ['metallicLatticeStructures'],
        diagramId: 'fccHcpBccUnitCellPackingEfficiencyComparisonDiagram',
        experimentId: 'close_packing_sphere_fcc_hcp_bcc_crystal_structure_model_building_experiment',
        contentKey: 'components'
    },
    {
        id: 'bandTheory',
        label: 'Band Theory',
        sectionNumber: 4,
        subTopic: 'metallicBonding',
        specificItems: ['bandTheory'],
        diagramId: 'conductorSemiconductorInsulatorBandGapEnergyDiagram',
        experimentId: 'semiconductor_conductivity_temperature_dependence_comparison_metal_experiment',
        contentKey: 'components'
    },
    {
        id: 'propertiesOfMetals',
        label: 'Properties of Metals',
        sectionNumber: 5,
        subTopic: 'metallicBonding',
        specificItems: ['propertiesOfMetals'],
        diagramId: 'metalPropertiesSeaOfElectronsStructuralExplanationSummaryDiagram',
        experimentId: 'metal_properties_conductivity_ductility_melting_point_systematic_testing_experiment',
        contentKey: 'components'
    },
    {
        id: 'alloys',
        label: 'Alloys',
        sectionNumber: 6,
        subTopic: 'metallicBonding',
        specificItems: ['alloys'],
        diagramId: 'substitutionalInterstitialAlloyLatticeDistortionDislocationPinningDiagram',
        experimentId: 'alloy_hardness_comparison_pure_copper_brass_bronze_vickers_test_experiment',
        contentKey: 'components'
    },
    {
        id: 'transitionMetalsAndBonding',
        label: 'Transition Metals and Bonding',
        sectionNumber: 7,
        subTopic: 'metallicBonding',
        specificItems: ['transitionMetalsAndBonding'],
        diagramId: 'dBlockMeltingPointTrendPeriod4dElectronBondingContributionDiagram',
        experimentId: 'transition_metal_melting_point_trend_d_block_data_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'corrosion',
        label: 'Corrosion',
        sectionNumber: 8,
        subTopic: 'metallicBonding',
        specificItems: ['corrosion'],
        diagramId: 'ironRustingElectrochemicalCellAnodeCathodeCorrosionMechanismDiagram',
        experimentId: 'iron_nail_rusting_rate_saltwater_sacrificial_zinc_protection_experiment',
        contentKey: 'components'
    },
    {
        id: 'nanotechnologyAndMetals',
        label: 'Nanotechnology and Metals',
        sectionNumber: 9,
        subTopic: 'metallicBonding',
        specificItems: ['nanotechnologyAndMetals'],
        diagramId: 'goldNanoparticleSurfacePlasmonResonanceColourSizeRelationshipDiagram',
        experimentId: 'gold_nanoparticle_synthesis_colour_size_surface_plasmon_resonance_experiment',
        contentKey: 'components'
    },
    {
        id: 'realWorldApplications',
        label: 'Real-World Applications',
        sectionNumber: 10,
        subTopic: 'metallicBonding',
        specificItems: ['realWorldApplications'],
        diagramId: 'metallicBondingIndustrialBiologicalTechnologyApplicationsInfographic',
        experimentId: 'superalloy_steel_aluminium_alloy_structural_application_case_study_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'intermolecularForces',
        specificItems: ['foundations'],
        diagramId: 'intramolecularVsIntermolecularForceStrengthScaleComparisonDiagram',
        experimentId: 'boiling_water_covalent_bond_vs_imf_breaking_distinction_demonstration_experiment',
        contentKey: 'components'
    },
    {
        id: 'londonDispersionForces',
        label: 'London Dispersion Forces',
        sectionNumber: 2,
        subTopic: 'intermolecularForces',
        specificItems: ['londonDispersionForces'],
        diagramId: 'instantaneousInducedDipolePolarisabilityElectronFluctuationLDFDiagram',
        experimentId: 'noble_gas_halogen_boiling_point_vs_molar_mass_ldf_trend_data_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'dipoleDipoleInteractions',
        label: 'Dipole–Dipole Interactions',
        sectionNumber: 3,
        subTopic: 'intermolecularForces',
        specificItems: ['dipoleDipoleInteractions'],
        diagramId: 'permanentDipoleDeltaPlusDeltaMinusOrientationAttractionDiagram',
        experimentId: 'polar_nonpolar_boiling_point_comparison_same_molar_mass_data_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'hydrogenBonding',
        label: 'Hydrogen Bonding',
        sectionNumber: 4,
        subTopic: 'intermolecularForces',
        specificItems: ['hydrogenBonding'],
        diagramId: 'hydrogenBondDonorAcceptorNOFAnomalousBoilingPointGroupTrendDiagram',
        experimentId: 'water_anomalous_boiling_point_group_hydride_trend_evidence_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'ionDipoleForces',
        label: 'Ion–Dipole Forces',
        sectionNumber: 5,
        subTopic: 'intermolecularForces',
        specificItems: ['ionDipoleForces'],
        diagramId: 'ionHydrationShellWaterOrientationCationAnionSolvationDiagram',
        experimentId: 'ionic_compound_dissolution_hydration_enthalpy_nacl_licl_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'comparingIMFStrength',
        label: 'Comparing IMF Strength',
        sectionNumber: 6,
        subTopic: 'intermolecularForces',
        specificItems: ['comparingIMFStrength'],
        diagramId: 'imfTypeStrengthRankingDecisionFlowchartBoilingPointPredictionDiagram',
        experimentId: 'boiling_point_prediction_ranking_unknown_molecules_imf_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'imfsAndPhysicalProperties',
        label: 'IMFs and Physical Properties',
        sectionNumber: 7,
        subTopic: 'intermolecularForces',
        specificItems: ['imfsAndPhysicalProperties'],
        diagramId: 'imfStrengthBoilingPointViscositySurfaceTensionSolubilityCorrelationDiagram',
        experimentId: 'surface_tension_viscosity_capillary_rise_water_ethanol_hexane_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'biologicalRoles',
        label: 'IMFs in Biological Systems',
        sectionNumber: 8,
        subTopic: 'intermolecularForces',
        specificItems: ['biologicalRoles'],
        diagramId: 'proteinFoldingHydrogenBondingDNABaseStackingLipidBilayerIMFDiagram',
        experimentId: 'protein_denaturation_temperature_urea_disrupting_hydrogen_bonds_experiment',
        contentKey: 'components'
    },
    {
        id: 'advancedIMFTypes',
        label: 'Advanced IMF Types',
        sectionNumber: 9,
        subTopic: 'intermolecularForces',
        specificItems: ['advancedIMFTypes'],
        diagramId: 'piPiStackingHalogenBondingCationPiMetallophilicInteractionsDiagram',
        experimentId: 'aromatic_pi_stacking_evidence_crystal_structure_dna_base_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'phaseChangesAndIMFs',
        label: 'Phase Changes and IMFs',
        sectionNumber: 10,
        subTopic: 'intermolecularForces',
        specificItems: ['phaseChangesAndIMFs'],
        diagramId: 'heatingCurvePhaseChangePlateauEnthalpyFusionVapourisationIMFDiagram',
        experimentId: 'heating_cooling_curve_water_enthalpy_fusion_vaporisation_measurement_experiment',
        contentKey: 'components'
    },




  {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'oxidationStates',
        specificItems: ['foundations'],
        diagramId: 'electronBookkeepingBondPolarityDiagram',
        experimentId: 'electronegativity_electron_assignment_bond_modelling_activity',
        contentKey: 'components'
    },
    {
        id: 'assignmentRules',
        label: 'Rules for Assigning Oxidation States',
        sectionNumber: 2,
        subTopic: 'oxidationStates',
        specificItems: ['assignmentRules'],
        diagramId: 'oxidationStateRulePriorityFlowchart',
        experimentId: 'oxidation_state_rule_application_card_sort_activity',
        contentKey: 'components'
    },
    {
        id: 'calculatingOxidationStates',
        label: 'Calculating Oxidation States',
        sectionNumber: 3,
        subTopic: 'oxidationStates',
        specificItems: ['calculatingOxidationStates'],
        diagramId: 'oxidationStateAlgebraicWorkingDiagram',
        experimentId: 'polyatomic_ion_oxidation_state_calculation_worksheet_experiment',
        contentKey: 'components'
    },
    {
        id: 'variableOxidationStates',
        label: 'Variable Oxidation States',
        sectionNumber: 4,
        subTopic: 'oxidationStates',
        specificItems: ['variableOxidationStates'],
        diagramId: 'transitionMetalVariableOxidationStatesPeriodicTable',
        experimentId: 'transition_metal_colour_change_oxidation_state_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'oxidationStateChanges',
        label: 'Oxidation State Changes in Reactions',
        sectionNumber: 5,
        subTopic: 'oxidationStates',
        specificItems: ['oxidationStateChanges'],
        diagramId: 'oxidationStateChangeArrowTrackingDiagram',
        experimentId: 'identifying_oxidation_reduction_from_state_change_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'oxidisingAndReducingAgents',
        label: 'Oxidising and Reducing Agents',
        sectionNumber: 6,
        subTopic: 'oxidationStates',
        specificItems: ['oxidisingAndReducingAgents'],
        diagramId: 'oxidisingReducingAgentElectronTransferDiagram',
        experimentId: 'potassium_permanganate_iron_ii_oxidising_agent_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'disproportionation',
        label: 'Disproportionation',
        sectionNumber: 7,
        subTopic: 'oxidationStates',
        specificItems: ['disproportionation'],
        diagramId: 'disproportionationSingleSpeciesSplitOxidationDiagram',
        experimentId: 'hydrogen_peroxide_catalase_disproportionation_oxygen_evolution_experiment',
        contentKey: 'components'
    },
    {
        id: 'periodicTrends',
        label: 'Periodic Trends in Oxidation States',
        sectionNumber: 8,
        subTopic: 'oxidationStates',
        specificItems: ['periodicTrends'],
        diagramId: 'maxOxidationStatePeriod3PeriodicTrendChart',
        experimentId: 'period_3_element_oxide_oxidation_state_trend_investigation_experiment',
        contentKey: 'components'
    },
    {
        id: 'namingAndFormulas',
        label: 'Naming and Formulas',
        sectionNumber: 9,
        subTopic: 'oxidationStates',
        specificItems: ['namingAndFormulas'],
        diagramId: 'stockNomenclatureRomanNumeralNamingFlowchart',
        experimentId: 'iron_ii_iron_iii_compound_identification_naming_experiment',
        contentKey: 'components'
    },
    {
        id: 'applications',
        label: 'Applications and Analytical Methods',
        sectionNumber: 10,
        subTopic: 'oxidationStates',
        specificItems: ['applications'],
        diagramId: 'permanganateDichromateTitrationOxidationStateApplicationDiagram',
        experimentId: 'potassium_permanganate_iron_ii_titration_oxidation_state_application_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'redoxReactions',
        specificItems: ['foundations'],
        diagramId: 'oilRigElectronTransferRedoxDefinitionDiagram',
        experimentId: 'magnesium_oxygen_combustion_oxidation_reduction_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'halfEquations',
        label: 'Half-Equations',
        sectionNumber: 2,
        subTopic: 'redoxReactions',
        specificItems: ['halfEquations'],
        diagramId: 'halfEquationAcidicBasicBalancingStepsDiagram',
        experimentId: 'constructing_half_equations_from_ionic_species_balancing_exercise_experiment',
        contentKey: 'components'
    },
    {
        id: 'balancingRedoxEquations',
        label: 'Balancing Redox Equations',
        sectionNumber: 3,
        subTopic: 'redoxReactions',
        specificItems: ['balancingRedoxEquations'],
        diagramId: 'halfEquationCombinationElectronCancellationDiagram',
        experimentId: 'permanganate_iron_ii_electron_balancing_half_equation_method_experiment',
        contentKey: 'components'
    },
    {
        id: 'typesOfRedoxReactions',
        label: 'Types of Redox Reactions',
        sectionNumber: 4,
        subTopic: 'redoxReactions',
        specificItems: ['typesOfRedoxReactions'],
        diagramId: 'redoxReactionTypesClassificationTreeDiagram',
        experimentId: 'halogen_displacement_series_chlorine_bromine_iodine_test_experiment',
        contentKey: 'components'
    },
    {
        id: 'reactivityAndPrediction',
        label: 'Reactivity Series and Reaction Prediction',
        sectionNumber: 5,
        subTopic: 'redoxReactions',
        specificItems: ['reactivityAndPrediction'],
        diagramId: 'metalActivitySeriesDisplacementReactionDiagram',
        experimentId: 'metal_displacement_reactivity_series_zinc_copper_iron_experiment',
        contentKey: 'components'
    },
    {
        id: 'redoxTitrations',
        label: 'Redox Titrations',
        sectionNumber: 6,
        subTopic: 'redoxReactions',
        specificItems: ['redoxTitrations'],
        diagramId: 'manganateDichromateTitrationEndpointColourChangeDiagram',
        experimentId: 'potassium_permanganate_iron_ii_sulfate_redox_titration_experiment',
        contentKey: 'components'
    },
    {
        id: 'redoxInDifferentMedia',
        label: 'Redox in Different Media',
        sectionNumber: 7,
        subTopic: 'redoxReactions',
        specificItems: ['redoxInDifferentMedia'],
        diagramId: 'permanganateProductsAcidicNeutralAlkalineMediumComparisonDiagram',
        experimentId: 'permanganate_reduction_products_acidic_vs_alkaline_medium_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'industrialRedoxProcesses',
        label: 'Industrial Redox Processes',
        sectionNumber: 8,
        subTopic: 'redoxReactions',
        specificItems: ['industrialRedoxProcesses'],
        diagramId: 'blastFurnaceIronReductionOxidationStateFlowDiagram',
        experimentId: 'iron_oxide_reduction_by_carbon_monoxide_laboratory_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'biologicalRedox',
        label: 'Biological Redox',
        sectionNumber: 9,
        subTopic: 'redoxReactions',
        specificItems: ['biologicalRedox'],
        diagramId: 'cellularRespirationElectronTransportChainRedoxDiagram',
        experimentId: 'dcpip_decolourisation_vitamin_c_biological_reducing_agent_experiment',
        contentKey: 'components'
    },
    {
        id: 'testingAndIdentification',
        label: 'Testing for Redox Changes',
        sectionNumber: 10,
        subTopic: 'redoxReactions',
        specificItems: ['testingAndIdentification'],
        diagramId: 'redoxIndicatorColourChangeTestSummaryDiagram',
        experimentId: 'starch_iodine_dichromate_permanganate_colorimetric_redox_test_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'electrochemistry',
        specificItems: ['foundations'],
        diagramId: 'electrochemicalCellAnodeCathodeElectronFlowDiagram',
        experimentId: 'electrolyte_conductivity_comparison_strong_weak_non_electrolyte_experiment',
        contentKey: 'components'
    },
    {
        id: 'galvanicCells',
        label: 'Galvanic (Voltaic) Cells',
        sectionNumber: 2,
        subTopic: 'electrochemistry',
        specificItems: ['galvanicCells'],
        diagramId: 'daniellCellSaltBridgeElectronIonFlowDiagram',
        experimentId: 'daniell_cell_zinc_copper_emf_measurement_salt_bridge_experiment',
        contentKey: 'components'
    },
    {
        id: 'electrodePotentials',
        label: 'Electrode Potentials and Electrochemical Series',
        sectionNumber: 3,
        subTopic: 'electrochemistry',
        specificItems: ['electrodePotentials'],
        diagramId: 'electrochemicalSeriesStandardReductionPotentialLadderDiagram',
        experimentId: 'standard_hydrogen_electrode_half_cell_emf_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'nernstEquation',
        label: 'The Nernst Equation',
        sectionNumber: 4,
        subTopic: 'electrochemistry',
        specificItems: ['nernstEquation'],
        diagramId: 'nernstEquationConcentrationVsEmfGraphDiagram',
        experimentId: 'concentration_cell_varying_copper_sulfate_emf_nernst_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'electrolyticCells',
        label: 'Electrolytic Cells',
        sectionNumber: 5,
        subTopic: 'electrochemistry',
        specificItems: ['electrolyticCells'],
        diagramId: 'electrolyticCellProductSelectionAnodeCathodeComparisonDiagram',
        experimentId: 'electrolysis_aqueous_sodium_chloride_copper_sulfate_product_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'faradaysLaws',
        label: "Faraday's Laws of Electrolysis",
        sectionNumber: 6,
        subTopic: 'electrochemistry',
        specificItems: ['faradaysLaws'],
        diagramId: 'faradayChargeToMassQuantitativeRelationshipDiagram',
        experimentId: 'copper_electrodeposition_mass_vs_charge_faraday_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'batteriesAndCells',
        label: 'Batteries and Commercial Cells',
        sectionNumber: 7,
        subTopic: 'electrochemistry',
        specificItems: ['batteriesAndCells'],
        diagramId: 'primarySecondaryFuelCellComparativeStructureDiagram',
        experimentId: 'lemon_fruit_electrochemical_cell_voltage_electrolyte_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'industrialElectrolysis',
        label: 'Industrial Electrolysis',
        sectionNumber: 8,
        subTopic: 'electrochemistry',
        specificItems: ['industrialElectrolysis'],
        diagramId: 'hallHeroultChlorAlkaliIndustrialElectrolysisCellDiagram',
        experimentId: 'electroplating_copper_nickel_thickness_control_faraday_law_experiment',
        contentKey: 'components'
    },
    {
        id: 'concentrationCellsAndApplications',
        label: 'Concentration Cells and pH Measurement',
        sectionNumber: 9,
        subTopic: 'electrochemistry',
        specificItems: ['concentrationCellsAndApplications'],
        diagramId: 'concentrationCellGlassElectrodePHMeasurementDiagram',
        experimentId: 'concentration_cell_emf_vs_log_concentration_ratio_nernst_plot_experiment',
        contentKey: 'components'
    },
    {
        id: 'thermodynamics',
        label: 'Thermodynamics of Electrochemical Cells',
        sectionNumber: 10,
        subTopic: 'electrochemistry',
        specificItems: ['thermodynamics'],
        diagramId: 'gibbsEnergyEmfEquilibriumConstantTriangleRelationshipDiagram',
        experimentId: 'cell_emf_temperature_dependence_gibbs_entropy_determination_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'corrosion',
        specificItems: ['foundations'],
        diagramId: 'corrosionElectrochemicalCellAnodeCathodeSurfaceDiagram',
        experimentId: 'four_component_corrosion_cell_electrolyte_electron_path_demonstration_experiment',
        contentKey: 'components'
    },
    {
        id: 'typesOfCorrosion',
        label: 'Types of Corrosion',
        sectionNumber: 2,
        subTopic: 'corrosion',
        specificItems: ['typesOfCorrosion'],
        diagramId: 'corrosionTypesClassificationMorphologyComparisonDiagram',
        experimentId: 'galvanic_corrosion_dissimilar_metal_couples_salt_bridge_mass_loss_experiment',
        contentKey: 'components'
    },
    {
        id: 'rustingOfIron',
        label: 'Rusting of Iron',
        sectionNumber: 3,
        subTopic: 'corrosion',
        specificItems: ['rustingOfIron'],
        diagramId: 'ironRustingElectrochemicalMechanismAnodeCathodeHalfReactionDiagram',
        experimentId: 'iron_nail_rusting_oxygen_water_salt_variable_control_experiment',
        contentKey: 'components'
    },
    {
        id: 'factorsAffectingCorrosionRate',
        label: 'Factors Affecting Corrosion Rate',
        sectionNumber: 4,
        subTopic: 'corrosion',
        specificItems: ['factorsAffectingCorrosionRate'],
        diagramId: 'corrosionRateEnvironmentalFactorsInfluenceChart',
        experimentId: 'iron_corrosion_rate_salt_concentration_ph_temperature_variable_experiment',
        contentKey: 'components'
    },
    {
        id: 'specificMetals',
        label: 'Corrosion of Specific Metals and Alloys',
        sectionNumber: 5,
        subTopic: 'corrosion',
        specificItems: ['specificMetals'],
        diagramId: 'metalPassivationActiveCorrosionComparisonGalvanicSeriesDiagram',
        experimentId: 'aluminium_stainless_steel_copper_corrosion_resistance_acid_salt_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'protectiveCoatings',
        label: 'Protective Coatings',
        sectionNumber: 6,
        subTopic: 'corrosion',
        specificItems: ['protectiveCoatings'],
        diagramId: 'protectiveCoatingTypesBarrierGalvanicConversionLayerDiagram',
        experimentId: 'painted_vs_galvanised_vs_uncoated_steel_salt_spray_corrosion_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'cathodicProtection',
        label: 'Cathodic Protection',
        sectionNumber: 7,
        subTopic: 'corrosion',
        specificItems: ['cathodicProtection'],
        diagramId: 'sacrificialAnodeImpressedCurrentCathodicProtectionComparisonDiagram',
        experimentId: 'zinc_magnesium_sacrificial_anode_iron_protection_saltwater_mass_loss_experiment',
        contentKey: 'components'
    },
    {
        id: 'corrosionInhibitors',
        label: 'Corrosion Inhibitors',
        sectionNumber: 8,
        subTopic: 'corrosion',
        specificItems: ['corrosionInhibitors'],
        diagramId: 'anodicCathodicMixedInhibitorAdsorptionMechanismDiagram',
        experimentId: 'corrosion_inhibitor_concentration_effect_iron_acid_mass_loss_experiment',
        contentKey: 'components'
    },
    {
        id: 'designAndMaterialSelection',
        label: 'Design and Material Selection',
        sectionNumber: 9,
        subTopic: 'corrosion',
        specificItems: ['designAndMaterialSelection'],
        diagramId: 'corrosionControlDesignPrinciplesCreviceDissimilarMetalDiagram',
        experimentId: 'crevice_vs_open_surface_corrosion_rate_differential_aeration_experiment',
        contentKey: 'components'
    },
    {
        id: 'economicAndEnvironmentalImpact',
        label: 'Economic and Environmental Impact',
        sectionNumber: 10,
        subTopic: 'corrosion',
        specificItems: ['economicAndEnvironmentalImpact'],
        diagramId: 'globalCorrosionCostBreakdownDirectIndirectPieChartDiagram',
        experimentId: 'weight_loss_coupon_corrosion_rate_calculation_economic_cost_estimation_experiment',
        contentKey: 'components'
    },




    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'dynamicEquilibrium',
        specificItems: ['foundations'],
        diagramId: 'reversibleVsIrreversibleReactionArrowDiagram',
        experimentId: 'reversible_reaction_cobalt_chloride_heating_cooling_experiment',
        contentKey: 'components'
    },
    {
        id: 'characteristicsOfDynamicEquilibrium',
        label: 'Characteristics of Dynamic Equilibrium',
        sectionNumber: 2,
        subTopic: 'dynamicEquilibrium',
        specificItems: ['characteristicsOfDynamicEquilibrium'],
        diagramId: 'equalForwardReverseRateEquilibriumDiagram',
        experimentId: 'nitrogen_dioxide_dinitrogen_tetroxide_sealed_tube_colour_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'equilibriumPosition',
        label: 'Equilibrium Position',
        sectionNumber: 3,
        subTopic: 'dynamicEquilibrium',
        specificItems: ['equilibriumPosition'],
        diagramId: 'equilibriumPositionReactantsProductsSpectrumDiagram',
        experimentId: 'iron_thiocyanate_equilibrium_position_shift_concentration_experiment',
        contentKey: 'components'
    },
    {
        id: 'graphicalRepresentations',
        label: 'Graphical Representations',
        sectionNumber: 4,
        subTopic: 'dynamicEquilibrium',
        specificItems: ['graphicalRepresentations'],
        diagramId: 'rateTimeAndConcentrationTimeEquilibriumGraphs',
        experimentId: 'data_logging_rate_convergence_to_equilibrium_graphing_experiment',
        contentKey: 'components'
    },
    {
        id: 'typesOfEquilibrium',
        label: 'Types of Equilibrium',
        sectionNumber: 5,
        subTopic: 'dynamicEquilibrium',
        specificItems: ['typesOfEquilibrium'],
        diagramId: 'homogeneousVsHeterogeneousEquilibriumPhasesDiagram',
        experimentId: 'calcium_carbonate_decomposition_heterogeneous_equilibrium_experiment',
        contentKey: 'components'
    },
    {
        id: 'establishingEquilibrium',
        label: 'Establishing Equilibrium',
        sectionNumber: 6,
        subTopic: 'dynamicEquilibrium',
        specificItems: ['establishingEquilibrium'],
        diagramId: 'reactionQuotientQVersusKEquilibriumApproachDiagram',
        experimentId: 'hydrogen_iodide_equilibrium_from_different_starting_conditions_experiment',
        contentKey: 'components'
    },
    {
        id: 'energyAndEquilibrium',
        label: 'Energy and Equilibrium',
        sectionNumber: 7,
        subTopic: 'dynamicEquilibrium',
        specificItems: ['energyAndEquilibrium'],
        diagramId: 'activationEnergyProfileForwardReverseReactionDiagram',
        experimentId: 'exothermic_endothermic_equilibrium_temperature_effect_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'industrialApplications',
        label: 'Industrial Applications',
        sectionNumber: 8,
        subTopic: 'dynamicEquilibrium',
        specificItems: ['industrialApplications'],
        diagramId: 'haberProcessFlowDiagramEquilibriumConditions',
        experimentId: 'contact_process_vanadium_catalyst_sulfur_trioxide_yield_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'commonExperimentalSystems',
        label: 'Common Experimental Systems',
        sectionNumber: 9,
        subTopic: 'dynamicEquilibrium',
        specificItems: ['commonExperimentalSystems'],
        diagramId: 'no2N2o4ColourChangeEquilibriumTubeDiagram',
        experimentId: 'chromate_dichromate_acid_base_colour_equilibrium_experiment',
        contentKey: 'components'
    },
    {
        id: 'misconceptionsAndErrors',
        label: 'Misconceptions and Errors',
        sectionNumber: 10,
        subTopic: 'dynamicEquilibrium',
        specificItems: ['misconceptionsAndErrors'],
        diagramId: 'dynamicEquilibriumCommonMisconceptionsAnnotatedDiagram',
        experimentId: 'catalyst_effect_on_equilibrium_rate_vs_position_verification_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'equilibriumConstant',
        specificItems: ['foundations'],
        diagramId: 'lawOfMassActionExpressionAnnotatedDiagram',
        experimentId: 'writing_kc_expressions_from_balanced_equations_worksheet_experiment',
        contentKey: 'components'
    },
    {
        id: 'Kc',
        label: 'K_c — Concentration Equilibrium Constant',
        sectionNumber: 2,
        subTopic: 'equilibriumConstant',
        specificItems: ['Kc'],
        diagramId: 'kcExpressionNumeratorDenominatorStoichiometryDiagram',
        experimentId: 'ethanoic_acid_equilibrium_kc_calculation_from_titration_experiment',
        contentKey: 'components'
    },
    {
        id: 'Kp',
        label: 'K_p — Pressure Equilibrium Constant',
        sectionNumber: 3,
        subTopic: 'equilibriumConstant',
        specificItems: ['Kp'],
        diagramId: 'partialPressureMoleFractionKpDiagram',
        experimentId: 'gas_syringe_partial_pressure_mole_fraction_kp_calculation_experiment',
        contentKey: 'components'
    },
    {
        id: 'iceTableMethodology',
        label: 'ICE Table Methodology',
        sectionNumber: 4,
        subTopic: 'equilibriumConstant',
        specificItems: ['iceTableMethodology'],
        diagramId: 'iceTableInitialChangeEquilibriumRowsDiagram',
        experimentId: 'hydrogen_iodide_ice_table_equilibrium_concentration_calculation_experiment',
        contentKey: 'components'
    },
    {
        id: 'reactionQuotientQ',
        label: 'Reaction Quotient Q',
        sectionNumber: 5,
        subTopic: 'equilibriumConstant',
        specificItems: ['reactionQuotientQ'],
        diagramId: 'qVersusKDirectionOfShiftNumberLineDiagram',
        experimentId: 'q_vs_k_direction_prediction_non_equilibrium_mixture_experiment',
        contentKey: 'components'
    },
    {
        id: 'temperatureDependenceOfK',
        label: 'Temperature Dependence of K',
        sectionNumber: 6,
        subTopic: 'equilibriumConstant',
        specificItems: ['temperatureDependenceOfK'],
        diagramId: 'vanTHoffPlotLnKVersusOneOverTDiagram',
        experimentId: 'measuring_kc_at_multiple_temperatures_van_t_hoff_graph_experiment',
        contentKey: 'components'
    },
    {
        id: 'manipulatingKExpressions',
        label: 'Manipulating K Expressions',
        sectionNumber: 7,
        subTopic: 'equilibriumConstant',
        specificItems: ['manipulatingKExpressions'],
        diagramId: 'reversalMultiplicationAdditionKRulesSummaryDiagram',
        experimentId: 'hess_law_style_k_combination_stepwise_reaction_exercise_experiment',
        contentKey: 'components'
    },
    {
        id: 'degreeOfDissociationAndYield',
        label: 'Degree of Dissociation and Yield',
        sectionNumber: 8,
        subTopic: 'equilibriumConstant',
        specificItems: ['degreeOfDissociationAndYield'],
        diagramId: 'degreeOfDissociationAlphaKspRelationshipDiagram',
        experimentId: 'n2o4_dissociation_alpha_calculation_from_density_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'numericalProblemTypes',
        label: 'Numerical Problem Types',
        sectionNumber: 9,
        subTopic: 'equilibriumConstant',
        specificItems: ['numericalProblemTypes'],
        diagramId: 'equilibriumCalculationProblemTypeDecisionTreeDiagram',
        experimentId: 'kc_kp_ice_table_multi_type_problem_classification_exercise_experiment',
        contentKey: 'components'
    },
    {
        id: 'limitationsAndAdvancedNotes',
        label: 'Limitations and Advanced Notes',
        sectionNumber: 10,
        subTopic: 'equilibriumConstant',
        specificItems: ['limitationsAndAdvancedNotes'],
        diagramId: 'activityVsConcentrationIdealRealBehaviourDiagram',
        experimentId: 'high_concentration_activity_deviation_from_ideal_k_investigation_experiment',
        contentKey: 'components'
    },


  {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'leChatelier',
        specificItems: ['foundations'],
        diagramId: 'leChatelierStressResponseEquilibriumShiftDiagram',
        experimentId: 'iron_thiocyanate_stress_response_qualitative_le_chatelier_experiment',
        contentKey: 'components'
    },
    {
        id: 'effectOfConcentrationChanges',
        label: 'Effect of Concentration Changes',
        sectionNumber: 2,
        subTopic: 'leChatelier',
        specificItems: ['effectOfConcentrationChanges'],
        diagramId: 'concentrationAddRemoveEquilibriumShiftArrowDiagram',
        experimentId: 'chromate_dichromate_acid_alkali_concentration_shift_experiment',
        contentKey: 'components'
    },
    {
        id: 'effectOfPressureChanges',
        label: 'Effect of Pressure Changes',
        sectionNumber: 3,
        subTopic: 'leChatelier',
        specificItems: ['effectOfPressureChanges'],
        diagramId: 'gasMolesEitherSidePressureShiftDeltaNDiagram',
        experimentId: 'no2_n2o4_sealed_syringe_compression_pressure_colour_change_experiment',
        contentKey: 'components'
    },
    {
        id: 'effectOfTemperatureChanges',
        label: 'Effect of Temperature Changes',
        sectionNumber: 4,
        subTopic: 'leChatelier',
        specificItems: ['effectOfTemperatureChanges'],
        diagramId: 'exothermicEndothermicTemperatureKShiftSummaryDiagram',
        experimentId: 'cobalt_chloride_complex_hot_cold_water_temperature_equilibrium_shift_experiment',
        contentKey: 'components'
    },
    {
        id: 'effectOfCatalyst',
        label: 'Effect of a Catalyst',
        sectionNumber: 5,
        subTopic: 'leChatelier',
        specificItems: ['effectOfCatalyst'],
        diagramId: 'catalystLowersActivationEnergyBothDirectionsEnergyProfileDiagram',
        experimentId: 'manganese_dioxide_hydrogen_peroxide_catalyst_rate_vs_position_experiment',
        contentKey: 'components'
    },
    {
        id: 'quantitativeApplication',
        label: 'Quantitative Application',
        sectionNumber: 6,
        subTopic: 'leChatelier',
        specificItems: ['quantitativeApplication'],
        diagramId: 'qVersusKPostPerturbationShiftCalculationDiagram',
        experimentId: 'le_chatelier_q_vs_k_numerical_confirmation_equilibrium_shift_experiment',
        contentKey: 'components'
    },
    {
        id: 'industrialApplications',
        label: 'Industrial Applications',
        sectionNumber: 7,
        subTopic: 'leChatelier',
        specificItems: ['industrialApplications'],
        diagramId: 'haberContactProcessConditionsCompromiseSummaryDiagram',
        experimentId: 'haber_process_yield_vs_temperature_pressure_trade_off_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'acidBaseEquilibriaAndLeChatelier',
        label: 'Acid–Base Equilibria and Le Chatelier',
        sectionNumber: 8,
        subTopic: 'leChatelier',
        specificItems: ['acidBaseEquilibriaAndLeChatelier'],
        diagramId: 'bufferSystemLeChatelierAcidBaseShiftDiagram',
        experimentId: 'acetic_acid_sodium_acetate_common_ion_ph_measurement_buffer_experiment',
        contentKey: 'components'
    },
    {
        id: 'graphicalAndExperimentalEvidence',
        label: 'Graphical and Experimental Evidence',
        sectionNumber: 9,
        subTopic: 'leChatelier',
        specificItems: ['graphicalAndExperimentalEvidence'],
        diagramId: 'concentrationTimeGraphPerturbationNewEquilibriumDiagram',
        experimentId: 'no2_n2o4_heating_cooling_colour_change_graphical_recording_experiment',
        contentKey: 'components'
    },
    {
        id: 'commonErrorsAndMisconceptions',
        label: 'Common Errors and Misconceptions',
        sectionNumber: 10,
        subTopic: 'leChatelier',
        specificItems: ['commonErrorsAndMisconceptions'],
        diagramId: 'leChatelierMisconceptionAnnotatedCorrectionsDiagram',
        experimentId: 'inert_gas_constant_volume_no_shift_verification_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'solubilityEquilibrium',
        specificItems: ['foundations'],
        diagramId: 'dissolutionSolidIonsAqueousHeterogeneousEquilibriumDiagram',
        experimentId: 'saturated_solution_preparation_observation_crystallisation_experiment',
        contentKey: 'components'
    },
    {
        id: 'solubilityProductConstant',
        label: 'Solubility Product Constant (K_sp)',
        sectionNumber: 2,
        subTopic: 'solubilityEquilibrium',
        specificItems: ['solubilityProductConstant'],
        diagramId: 'kspExpressionStoichiometricPowersSilverChlorideAnnotatedDiagram',
        experimentId: 'silver_nitrate_potassium_chloride_ksp_expression_writing_experiment',
        contentKey: 'components'
    },
    {
        id: 'molarSolubilityCalculations',
        label: 'Molar Solubility Calculations',
        sectionNumber: 3,
        subTopic: 'solubilityEquilibrium',
        specificItems: ['molarSolubilityCalculations'],
        diagramId: 'kspToMolarSolubilityStoichiometryTypeComparisonDiagram',
        experimentId: 'calcium_fluoride_molar_solubility_ksp_calculation_ice_table_experiment',
        contentKey: 'components'
    },
    {
        id: 'ionProductAndPrecipitation',
        label: 'Ion Product and Precipitation',
        sectionNumber: 4,
        subTopic: 'solubilityEquilibrium',
        specificItems: ['ionProductAndPrecipitation'],
        diagramId: 'qspVersusKspPrecipitationNoPrecipitationDecisionDiagram',
        experimentId: 'lead_nitrate_potassium_iodide_mixing_qsp_precipitation_prediction_experiment',
        contentKey: 'components'
    },
    {
        id: 'commonIonEffect',
        label: 'Common Ion Effect',
        sectionNumber: 5,
        subTopic: 'solubilityEquilibrium',
        specificItems: ['commonIonEffect'],
        diagramId: 'commonIonSolubilitySuppressionLeChatelierShiftDiagram',
        experimentId: 'agcl_solubility_in_nacl_solution_common_ion_suppression_experiment',
        contentKey: 'components'
    },
    {
        id: 'pHAndSolubility',
        label: 'pH and Solubility',
        sectionNumber: 6,
        subTopic: 'solubilityEquilibrium',
        specificItems: ['pHAndSolubility'],
        diagramId: 'hydroxideSolubilityVspHAcidicBasicConditionsDiagram',
        experimentId: 'magnesium_hydroxide_solubility_across_ph_range_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'complexIonFormationAndSolubility',
        label: 'Complex Ion Formation and Solubility',
        sectionNumber: 7,
        subTopic: 'solubilityEquilibrium',
        specificItems: ['complexIonFormationAndSolubility'],
        diagramId: 'complexIonFormationMetalLigandKfSolubilityEnhancementDiagram',
        experimentId: 'agcl_dissolution_in_excess_ammonia_complex_ion_formation_experiment',
        contentKey: 'components'
    },
    {
        id: 'temperatureDependenceOfKsp',
        label: 'Temperature Dependence of K_sp',
        sectionNumber: 8,
        subTopic: 'solubilityEquilibrium',
        specificItems: ['temperatureDependenceOfKsp'],
        diagramId: 'kspVsTemperatureSolubilityCurveEndothermicExothermicDiagram',
        experimentId: 'potassium_nitrate_solubility_curve_temperature_dependence_experiment',
        contentKey: 'components'
    },
    {
        id: 'realWorldApplications',
        label: 'Real-World Applications',
        sectionNumber: 9,
        subTopic: 'solubilityEquilibrium',
        specificItems: ['realWorldApplications'],
        diagramId: 'kidneyStoneCalciumOxalatePrecipitationFormationDiagram',
        experimentId: 'water_hardness_carbonate_precipitation_water_treatment_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'commonErrorsAndMisconceptions',
        label: 'Common Errors and Misconceptions',
        sectionNumber: 10,
        subTopic: 'solubilityEquilibrium',
        specificItems: ['commonErrorsAndMisconceptions'],
        diagramId: 'kspSolubilityComparisonStoichiometryTypePitfallsDiagram',
        experimentId: 'ksp_vs_molar_solubility_ranking_cross_stoichiometry_type_exercise_experiment',
        contentKey: 'components'
    },






  {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'subatomicParticles',
        specificItems: ['foundations'],
        diagramId: 'atomNucleusElectronCloudScaleDiagram',
        experimentId: 'atomic_scale_size_comparison_modelling_activity',
        contentKey: 'components'
    },
    {
        id: 'mainSubatomicParticles',
        label: 'The Three Main Subatomic Particles',
        sectionNumber: 2,
        subTopic: 'subatomicParticles',
        specificItems: ['mainSubatomicParticles'],
        diagramId: 'protonNeutronElectronPropertiesComparisonChart',
        experimentId: 'cathode_ray_tube_electron_deflection_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'atomicComposition',
        label: 'Atomic Number, Mass Number & Notation',
        sectionNumber: 3,
        subTopic: 'subatomicParticles',
        specificItems: ['atomicComposition'],
        diagramId: 'nuclearSymbolNotationAnnotatedDiagram',
        experimentId: 'nuclear_symbol_decoding_composition_worksheet_experiment',
        contentKey: 'components'
    },
    {
        id: 'isotopes',
        label: 'Isotopes',
        sectionNumber: 4,
        subTopic: 'subatomicParticles',
        specificItems: ['isotopes'],
        diagramId: 'hydrogenIsotopeStructureComparisonDiagram',
        experimentId: 'relative_atomic_mass_isotopic_abundance_calculation_experiment',
        contentKey: 'components'
    },
    {
        id: 'ions',
        label: 'Ions',
        sectionNumber: 5,
        subTopic: 'subatomicParticles',
        specificItems: ['ions'],
        diagramId: 'cationAnionElectronLossGainDiagram',
        experimentId: 'ion_formation_electron_counting_classification_experiment',
        contentKey: 'components'
    },
    {
        id: 'nuclearForcesAndStability',
        label: 'Nuclear Forces & Stability',
        sectionNumber: 6,
        subTopic: 'subatomicParticles',
        specificItems: ['nuclearForcesAndStability'],
        diagramId: 'bindingEnergyPerNucleonCurveGraph',
        experimentId: 'nuclear_stability_band_neutron_proton_ratio_plotting_experiment',
        contentKey: 'components'
    },
    {
        id: 'quarksAndStandardModel',
        label: 'Quarks and the Standard Model',
        sectionNumber: 7,
        subTopic: 'subatomicParticles',
        specificItems: ['quarksAndStandardModel'],
        diagramId: 'standardModelParticleClassificationChart',
        experimentId: 'quark_composition_charge_calculation_proton_neutron_experiment',
        contentKey: 'components'
    },
    {
        id: 'propertiesComparison',
        label: 'Properties Comparison',
        sectionNumber: 8,
        subTopic: 'subatomicParticles',
        specificItems: ['propertiesComparison'],
        diagramId: 'subatomicParticlePropertySummaryTable',
        experimentId: 'subatomic_particle_properties_sorting_card_experiment',
        contentKey: 'components'
    },
    {
        id: 'practicalSkills',
        label: 'Practical Skills & Calculations',
        sectionNumber: 9,
        subTopic: 'subatomicParticles',
        specificItems: ['practicalSkills'],
        diagramId: 'relativeAtomicMassWeightedAverageCalculationDiagram',
        experimentId: 'mass_spectrometry_isotopic_abundance_data_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'commonErrorsAndMisconceptions',
        label: 'Common Errors & Misconceptions',
        sectionNumber: 10,
        subTopic: 'subatomicParticles',
        specificItems: ['commonErrorsAndMisconceptions'],
        diagramId: 'subatomicParticleConceptualErrorAnnotationDiagram',
        experimentId: 'error_spotting_nuclear_notation_correction_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'atomicModels',
        specificItems: ['foundations'],
        diagramId: 'hydrogenEmissionAbsorptionSpectrumDiagram',
        experimentId: 'flame_test_emission_spectra_colour_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'daltonModel',
        label: "Dalton's Atomic Model",
        sectionNumber: 2,
        subTopic: 'atomicModels',
        specificItems: ['daltonModel'],
        diagramId: 'daltonSolidSphereAtomDiagram',
        experimentId: 'law_of_definite_proportions_copper_sulfate_experiment',
        contentKey: 'components'
    },
    {
        id: 'thomsonModel',
        label: "Thomson's Plum Pudding Model",
        sectionNumber: 3,
        subTopic: 'atomicModels',
        specificItems: ['thomsonModel'],
        diagramId: 'thomsonPlumPuddingModelAnnotatedDiagram',
        experimentId: 'cathode_ray_tube_electric_field_deflection_experiment',
        contentKey: 'components'
    },
    {
        id: 'rutherfordModel',
        label: "Rutherford's Nuclear Model",
        sectionNumber: 4,
        subTopic: 'atomicModels',
        specificItems: ['rutherfordModel'],
        diagramId: 'goldFoilExperimentScatteringResultsDiagram',
        experimentId: 'rutherford_scattering_analogy_ball_bearing_deflection_experiment',
        contentKey: 'components'
    },
    {
        id: 'bohrModel',
        label: "Bohr's Model",
        sectionNumber: 5,
        subTopic: 'atomicModels',
        specificItems: ['bohrModel'],
        diagramId: 'bohrEnergyLevelTransitionDiagram',
        experimentId: 'hydrogen_spectral_lines_diffraction_grating_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'sommerfeldModel',
        label: "Sommerfeld's Extension",
        sectionNumber: 6,
        subTopic: 'atomicModels',
        specificItems: ['sommerfeldModel'],
        diagramId: 'sommerfeldEllipticalOrbitSubshellDiagram',
        experimentId: 'fine_structure_spectral_line_splitting_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'quantumMechanicalModel',
        label: 'Quantum Mechanical Model',
        sectionNumber: 7,
        subTopic: 'atomicModels',
        specificItems: ['quantumMechanicalModel'],
        diagramId: 'electronProbabilityCloudOrbitalShapesDiagram',
        experimentId: 'electron_diffraction_wave_nature_davisson_germer_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'modelComparison',
        label: 'Comparison of Atomic Models',
        sectionNumber: 8,
        subTopic: 'atomicModels',
        specificItems: ['modelComparison'],
        diagramId: 'atomicModelEvolutionTimelineDiagram',
        experimentId: 'atomic_model_historical_evidence_matching_card_sort_experiment',
        contentKey: 'components'
    },
    {
        id: 'keyExperiments',
        label: 'Key Experiments in Atomic Model Development',
        sectionNumber: 9,
        subTopic: 'atomicModels',
        specificItems: ['keyExperiments'],
        diagramId: 'milliканOilDropExperimentSetupDiagram',
        experimentId: 'franck_hertz_mercury_vapour_energy_quantisation_experiment',
        contentKey: 'components'
    },
    {
        id: 'commonErrorsAndMisconceptions',
        label: 'Common Errors & Misconceptions',
        sectionNumber: 10,
        subTopic: 'atomicModels',
        specificItems: ['commonErrorsAndMisconceptions'],
        diagramId: 'orbitVsOrbitalConceptualDifferenceDiagram',
        experimentId: 'atomic_model_misconception_true_false_card_experiment',
        contentKey: 'components'
    },

   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'electronConfiguration',
        specificItems: ['foundations'],
        diagramId: 'subshellEnergyOrderingDiagonalRuleDiagram',
        experimentId: 'orbital_energy_ordering_aufbau_sequence_building_experiment',
        contentKey: 'components'
    },
    {
        id: 'fillingRules',
        label: 'Rules for Electron Configuration',
        sectionNumber: 2,
        subTopic: 'electronConfiguration',
        specificItems: ['fillingRules'],
        diagramId: 'aufbauPauliHundRuleOrbitalBoxDiagram',
        experimentId: 'hunds_rule_orbital_box_diagram_filling_experiment',
        contentKey: 'components'
    },
    {
        id: 'writingConfigurations',
        label: 'Writing Electron Configurations',
        sectionNumber: 3,
        subTopic: 'electronConfiguration',
        specificItems: ['writingConfigurations'],
        diagramId: 'spdfNotationNobleGasShorthandComparisonDiagram',
        experimentId: 'writing_full_and_shorthand_electron_configuration_drill_experiment',
        contentKey: 'components'
    },
    {
        id: 'ionicConfigurations',
        label: 'Electron Configuration of Ions',
        sectionNumber: 4,
        subTopic: 'electronConfiguration',
        specificItems: ['ionicConfigurations'],
        diagramId: 'cationAnionElectronRemovalAdditionConfigDiagram',
        experimentId: 'transition_metal_cation_electron_removal_order_experiment',
        contentKey: 'components'
    },
    {
        id: 'anomalousConfigurations',
        label: 'Anomalous Electron Configurations',
        sectionNumber: 5,
        subTopic: 'electronConfiguration',
        specificItems: ['anomalousConfigurations'],
        diagramId: 'chromiumCopperAnomalousConfigurationStabilityDiagram',
        experimentId: 'half_filled_full_d_subshell_stability_anomaly_investigation_experiment',
        contentKey: 'components'
    },
    {
        id: 'periodicTableConnection',
        label: 'Electron Configuration and the Periodic Table',
        sectionNumber: 6,
        subTopic: 'electronConfiguration',
        specificItems: ['periodicTableConnection'],
        diagramId: 'periodicTableSPDFBlockAnnotatedDiagram',
        experimentId: 'periodic_table_block_identification_configuration_mapping_experiment',
        contentKey: 'components'
    },
    {
        id: 'valenceAndCoreElectrons',
        label: 'Valence Electrons and Core Electrons',
        sectionNumber: 7,
        subTopic: 'electronConfiguration',
        specificItems: ['valenceAndCoreElectrons'],
        diagramId: 'valenceCoreElectronShieldingZeffDiagram',
        experimentId: 'valence_electron_counting_reactivity_prediction_experiment',
        contentKey: 'components'
    },
    {
        id: 'magneticProperties',
        label: 'Magnetic Properties',
        sectionNumber: 8,
        subTopic: 'electronConfiguration',
        specificItems: ['magneticProperties'],
        diagramId: 'paramagneticDiamagneticUnpairedElectronDiagram',
        experimentId: 'liquid_oxygen_paramagnetism_magnet_attraction_demonstration_experiment',
        contentKey: 'components'
    },
    {
        id: 'spectroscopicEvidence',
        label: 'Spectroscopic Evidence for Configuration',
        sectionNumber: 9,
        subTopic: 'electronConfiguration',
        specificItems: ['spectroscopicEvidence'],
        diagramId: 'successiveIonisationEnergyBarGraphDiagram',
        experimentId: 'successive_ionisation_energy_graph_group_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'commonErrorsAndMisconceptions',
        label: 'Common Errors & Misconceptions',
        sectionNumber: 10,
        subTopic: 'electronConfiguration',
        specificItems: ['commonErrorsAndMisconceptions'],
        diagramId: 'electronConfigurationCommonMistakesAnnotatedDiagram',
        experimentId: 'electron_configuration_error_spotting_correction_card_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'quantumNumbers',
        specificItems: ['foundations'],
        diagramId: 'schrodingerEquationWaveFunctionAnnotatedDiagram',
        experimentId: 'quantum_vs_classical_angular_momentum_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'principalQuantumNumber',
        label: 'Principal Quantum Number (n)',
        sectionNumber: 2,
        subTopic: 'quantumNumbers',
        specificItems: ['principalQuantumNumber'],
        diagramId: 'shellEnergyLevelRadialProbabilityDiagram',
        experimentId: 'bohr_radius_shell_size_n_squared_relationship_experiment',
        contentKey: 'components'
    },
    {
        id: 'azimuthalQuantumNumber',
        label: 'Azimuthal Quantum Number (ℓ)',
        sectionNumber: 3,
        subTopic: 'quantumNumbers',
        specificItems: ['azimuthalQuantumNumber'],
        diagramId: 'subshellAngularMomentumOrbitalShapesDiagram',
        experimentId: 'azimuthal_quantum_number_subshell_letter_mapping_experiment',
        contentKey: 'components'
    },
    {
        id: 'magneticQuantumNumber',
        label: 'Magnetic Quantum Number (mₗ)',
        sectionNumber: 4,
        subTopic: 'quantumNumbers',
        specificItems: ['magneticQuantumNumber'],
        diagramId: 'pOrbitalThreeOrientationsMagneticQuantumDiagram',
        experimentId: 'zeeman_effect_spectral_line_splitting_magnetic_field_experiment',
        contentKey: 'components'
    },
    {
        id: 'spinQuantumNumber',
        label: 'Spin Quantum Number (mₛ)',
        sectionNumber: 5,
        subTopic: 'quantumNumbers',
        specificItems: ['spinQuantumNumber'],
        diagramId: 'sternGerlachBeamSplittingSpinDiagram',
        experimentId: 'stern_gerlach_silver_atom_magnetic_deflection_experiment',
        contentKey: 'components'
    },
    {
        id: 'pauliExclusionPrinciple',
        label: 'Pauli Exclusion Principle',
        sectionNumber: 6,
        subTopic: 'quantumNumbers',
        specificItems: ['pauliExclusionPrinciple'],
        diagramId: 'pauliExclusionOrbitalOccupancyForbiddenStatesDiagram',
        experimentId: 'pauli_exclusion_orbital_capacity_quantum_number_uniqueness_experiment',
        contentKey: 'components'
    },
    {
        id: 'orbitalShapes',
        label: 'Orbital Shapes and Quantum Numbers',
        sectionNumber: 7,
        subTopic: 'quantumNumbers',
        specificItems: ['orbitalShapes'],
        diagramId: 'spdfOrbitalThreeDimensionalShapesDiagram',
        experimentId: 'orbital_shape_modelling_clay_3d_construction_experiment',
        contentKey: 'components'
    },
    {
        id: 'allowedCombinations',
        label: 'Allowed Quantum Number Combinations',
        sectionNumber: 8,
        subTopic: 'quantumNumbers',
        specificItems: ['allowedCombinations'],
        diagramId: 'quantumNumberAllowedRangesValidationFlowchartDiagram',
        experimentId: 'quantum_number_valid_invalid_set_classification_experiment',
        contentKey: 'components'
    },
    {
        id: 'periodicTableRelationship',
        label: 'Quantum Numbers and the Periodic Table',
        sectionNumber: 9,
        subTopic: 'quantumNumbers',
        specificItems: ['periodicTableRelationship'],
        diagramId: 'periodicTableQuantumNumberBlockWidthDiagram',
        experimentId: 'periodic_table_block_width_orbital_count_derivation_experiment',
        contentKey: 'components'
    },
    {
        id: 'specialTopics',
        label: 'Special Topics and Extensions',
        sectionNumber: 10,
        subTopic: 'quantumNumbers',
        specificItems: ['specialTopics'],
        diagramId: 'nmrNuclearSpinEnergyLevelSplittingDiagram',
        experimentId: 'proton_nmr_spin_state_energy_level_analysis_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'periodicTrends',
        specificItems: ['foundations'],
        diagramId: 'effectiveNuclearChargeShieldingPenetrationDiagram',
        experimentId: 'slater_rules_zeff_calculation_period_3_elements_experiment',
        contentKey: 'components'
    },
    {
        id: 'atomicRadius',
        label: 'Atomic Radius',
        sectionNumber: 2,
        subTopic: 'periodicTrends',
        specificItems: ['atomicRadius'],
        diagramId: 'atomicRadiusPeriodGroupTrendAnnotatedDiagram',
        experimentId: 'atomic_radius_periodic_table_trend_data_plotting_experiment',
        contentKey: 'components'
    },
    {
        id: 'ionicRadius',
        label: 'Ionic Radius',
        sectionNumber: 3,
        subTopic: 'periodicTrends',
        specificItems: ['ionicRadius'],
        diagramId: 'isoelectronicSeriesIonicRadiusComparisonDiagram',
        experimentId: 'cation_anion_radius_comparison_isoelectronic_series_experiment',
        contentKey: 'components'
    },
    {
        id: 'ionisationEnergy',
        label: 'Ionisation Energy',
        sectionNumber: 4,
        subTopic: 'periodicTrends',
        specificItems: ['ionisationEnergy'],
        diagramId: 'firstIonisationEnergyPeriod2AnomaliesBarGraphDiagram',
        experimentId: 'successive_ionisation_energy_unknown_element_group_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'electronAffinity',
        label: 'Electron Affinity',
        sectionNumber: 5,
        subTopic: 'periodicTrends',
        specificItems: ['electronAffinity'],
        diagramId: 'electronAffinityPeriodTrendWithAnomaliesDiagram',
        experimentId: 'halogen_electron_affinity_reactivity_trend_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'electronegativity',
        label: 'Electronegativity',
        sectionNumber: 6,
        subTopic: 'periodicTrends',
        specificItems: ['electronegativity'],
        diagramId: 'paulingElectronegativityScalePeriodicTableHeatmapDiagram',
        experimentId: 'electronegativity_difference_bond_polarity_classification_experiment',
        contentKey: 'components'
    },
    {
        id: 'metallicCharacter',
        label: 'Metallic Character',
        sectionNumber: 7,
        subTopic: 'periodicTrends',
        specificItems: ['metallicCharacter'],
        diagramId: 'metalNonmetalMetalloidPeriodicTableBoundaryDiagram',
        experimentId: 'electrical_conductivity_metallic_character_period_3_elements_experiment',
        contentKey: 'components'
    },
    {
        id: 'reactivityTrends',
        label: 'Reactivity Trends',
        sectionNumber: 8,
        subTopic: 'periodicTrends',
        specificItems: ['reactivityTrends'],
        diagramId: 'group1Group17ReactivityOpposingTrendsDiagram',
        experimentId: 'halogen_displacement_reactions_chlorine_bromine_iodine_experiment',
        contentKey: 'components'
    },
    {
        id: 'oxidesAndHydroxides',
        label: 'Oxides and Hydroxides',
        sectionNumber: 9,
        subTopic: 'periodicTrends',
        specificItems: ['oxidesAndHydroxides'],
        diagramId: 'period3OxideAcidBaseCharacterTrendDiagram',
        experimentId: 'period_3_oxide_ph_universal_indicator_acid_base_character_experiment',
        contentKey: 'components'
    },
    {
        id: 'commonErrorsAndMisconceptions',
        label: 'Common Errors & Misconceptions',
        sectionNumber: 10,
        subTopic: 'periodicTrends',
        specificItems: ['commonErrorsAndMisconceptions'],
        diagramId: 'periodicTrendCommonMistakeAnnotationDiagram',
        experimentId: 'periodic_trend_true_false_misconception_correction_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'radioactivity',
        specificItems: ['foundations'],
        diagramId: 'bandOfStabilityNeutronProtonPlotDiagram',
        experimentId: 'geiger_counter_background_radiation_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'typesOfDecay',
        label: 'Types of Radioactive Decay',
        sectionNumber: 2,
        subTopic: 'radioactivity',
        specificItems: ['typesOfDecay'],
        diagramId: 'alphaBetagammaDecayNuclearChangeAnnotatedDiagram',
        experimentId: 'alpha_beta_gamma_penetration_paper_aluminium_lead_experiment',
        contentKey: 'components'
    },
    {
        id: 'radiationProperties',
        label: 'Properties of Radiation',
        sectionNumber: 3,
        subTopic: 'radioactivity',
        specificItems: ['radiationProperties'],
        diagramId: 'radiationElectricMagneticFieldDeflectionDiagram',
        experimentId: 'radiation_deflection_electric_field_charge_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'nuclearEquations',
        label: 'Nuclear Equations',
        sectionNumber: 4,
        subTopic: 'radioactivity',
        specificItems: ['nuclearEquations'],
        diagramId: 'uraniumDecaySeriesChainDiagram',
        experimentId: 'nuclear_equation_balancing_mass_atomic_number_conservation_experiment',
        contentKey: 'components'
    },
    {
        id: 'halfLife',
        label: 'Half-Life',
        sectionNumber: 5,
        subTopic: 'radioactivity',
        specificItems: ['halfLife'],
        diagramId: 'exponentialDecayCurveHalfLifeAnnotatedGraph',
        experimentId: 'dice_radioactive_decay_half_life_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'radioactiveDating',
        label: 'Radioactive Dating',
        sectionNumber: 6,
        subTopic: 'radioactivity',
        specificItems: ['radioactiveDating'],
        diagramId: 'carbon14RadiocarbonDatingDecayCurveDiagram',
        experimentId: 'carbon_14_dating_fraction_remaining_age_calculation_experiment',
        contentKey: 'components'
    },
    {
        id: 'nuclearFission',
        label: 'Nuclear Fission',
        sectionNumber: 7,
        subTopic: 'radioactivity',
        specificItems: ['nuclearFission'],
        diagramId: 'uranium235NeutronInducedFissionChainReactionDiagram',
        experimentId: 'chain_reaction_domino_neutron_multiplication_modelling_experiment',
        contentKey: 'components'
    },
    {
        id: 'nuclearFusion',
        label: 'Nuclear Fusion',
        sectionNumber: 8,
        subTopic: 'radioactivity',
        specificItems: ['nuclearFusion'],
        diagramId: 'deuteriumTritiumFusionEnergyReleaseDiagram',
        experimentId: 'fusion_vs_fission_mass_defect_energy_release_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'applications',
        label: 'Applications of Radioactivity',
        sectionNumber: 9,
        subTopic: 'radioactivity',
        specificItems: ['applications'],
        diagramId: 'medicalRadioisotopePetScanTechnetiumDiagram',
        experimentId: 'radioisotope_application_half_life_suitability_matching_experiment',
        contentKey: 'components'
    },
    {
        id: 'radiationSafety',
        label: 'Radiation Safety and Units',
        sectionNumber: 10,
        subTopic: 'radioactivity',
        specificItems: ['radiationSafety'],
        diagramId: 'radiationDoseUnitsBecquerelGraySievertDiagram',
        experimentId: 'background_radiation_sources_dose_comparison_risk_assessment_experiment',
        contentKey: 'components'
    },





   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'moleConcept',
        specificItems: ['foundations'],
        diagramId: 'atomicScaleToMacroScaleBridgeDiagram',
        experimentId: 'dozen_analogy_mole_counting_estimation_experiment',
        contentKey: 'components'
    },
    {
        id: 'avogadrosNumber',
        label: "Avogadro's Number",
        sectionNumber: 2,
        subTopic: 'moleConcept',
        specificItems: ['avogadrosNumber'],
        diagramId: 'avogadrosNumberParticleScalingDiagram',
        experimentId: 'mole_of_substances_comparative_mass_experiment',
        contentKey: 'components'
    },
    {
        id: 'molarMass',
        label: 'Molar Mass',
        sectionNumber: 3,
        subTopic: 'moleConcept',
        specificItems: ['molarMass'],
        diagramId: 'periodicTableMolarMassReadingDiagram',
        experimentId: 'molar_mass_determination_from_periodic_table_worksheet_experiment',
        contentKey: 'components'
    },
    {
        id: 'interconversions',
        label: 'Mole–Particle–Mass Interconversions',
        sectionNumber: 4,
        subTopic: 'moleConcept',
        specificItems: ['interconversions'],
        diagramId: 'moleTriangleInterconversionDiagram',
        experimentId: 'mass_to_moles_to_particles_multi_step_conversion_experiment',
        contentKey: 'components'
    },
    {
        id: 'percentageComposition',
        label: 'Percentage Composition',
        sectionNumber: 5,
        subTopic: 'moleConcept',
        specificItems: ['percentageComposition'],
        diagramId: 'elementalPercentageCompositionPieChartDiagram',
        experimentId: 'percentage_copper_in_copper_oxide_reduction_experiment',
        contentKey: 'components'
    },
    {
        id: 'empiricalAndMolecularFormulae',
        label: 'Empirical and Molecular Formulae',
        sectionNumber: 6,
        subTopic: 'moleConcept',
        specificItems: ['empiricalAndMolecularFormulae'],
        diagramId: 'empiricalToMolecularFormulaScalingDiagram',
        experimentId: 'combustion_analysis_empirical_formula_magnesium_oxide_experiment',
        contentKey: 'components'
    },
    {
        id: 'molarVolumeOfGases',
        label: 'Molar Volume of Gases',
        sectionNumber: 7,
        subTopic: 'moleConcept',
        specificItems: ['molarVolumeOfGases'],
        diagramId: 'molarVolumeStandardConditionsComparisonDiagram',
        experimentId: 'molar_volume_of_hydrogen_gas_collection_experiment',
        contentKey: 'components'
    },
    {
        id: 'molarConcentration',
        label: 'Molar Concentration',
        sectionNumber: 8,
        subTopic: 'moleConcept',
        specificItems: ['molarConcentration'],
        diagramId: 'concentrationVolumeTriangleDiagram',
        experimentId: 'preparing_standard_nacl_solution_serial_dilution_experiment',
        contentKey: 'components'
    },
    {
        id: 'hydratedSalts',
        label: 'Hydrated Salts and Water of Crystallisation',
        sectionNumber: 9,
        subTopic: 'moleConcept',
        specificItems: ['hydratedSalts'],
        diagramId: 'hydratedSaltCrystalLatticeWaterDiagram',
        experimentId: 'water_of_crystallisation_copper_sulfate_heating_experiment',
        contentKey: 'components'
    },
    {
        id: 'extensions',
        label: 'Special Topics and Extensions',
        sectionNumber: 10,
        subTopic: 'moleConcept',
        specificItems: ['extensions'],
        diagramId: 'isotopeAbundanceWeightedAverageMassDiagram',
        experimentId: 'mass_spectrometry_isotope_pattern_simulation_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'limitingReagents',
        specificItems: ['foundations'],
        diagramId: 'stoichiometricRatioReactantProductDiagram',
        experimentId: 'sandwich_analogy_limiting_ingredient_model_experiment',
        contentKey: 'components'
    },
    {
        id: 'identifyingLimitingReagent',
        label: 'Identifying the Limiting Reagent',
        sectionNumber: 2,
        subTopic: 'limitingReagents',
        specificItems: ['identifyingLimitingReagent'],
        diagramId: 'divideByCoefficientsLimitingReagentDecisionDiagram',
        experimentId: 'copper_chloride_iron_reaction_limiting_reagent_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'theoreticalYield',
        label: 'Theoretical Yield Calculations',
        sectionNumber: 3,
        subTopic: 'limitingReagents',
        specificItems: ['theoreticalYield'],
        diagramId: 'theoreticalYieldCalculationFlowchartDiagram',
        experimentId: 'magnesium_combustion_theoretical_yield_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'actualAndPercentYield',
        label: 'Actual Yield and Percent Yield',
        sectionNumber: 4,
        subTopic: 'limitingReagents',
        specificItems: ['actualAndPercentYield'],
        diagramId: 'theoreticalVsActualYieldBarComparisonDiagram',
        experimentId: 'aspirin_synthesis_percent_yield_determination_experiment',
        contentKey: 'components'
    },
    {
        id: 'excessReagentCalculations',
        label: 'Excess Reagent Calculations',
        sectionNumber: 5,
        subTopic: 'limitingReagents',
        specificItems: ['excessReagentCalculations'],
        diagramId: 'excessReagentRemainingMassCalculationDiagram',
        experimentId: 'zinc_hydrochloric_acid_excess_zinc_determination_experiment',
        contentKey: 'components'
    },
    {
        id: 'reactionsInSolution',
        label: 'Reactions in Solution',
        sectionNumber: 6,
        subTopic: 'limitingReagents',
        specificItems: ['reactionsInSolution'],
        diagramId: 'concentrationVolumeToMolesPrecipitationDiagram',
        experimentId: 'silver_nitrate_sodium_chloride_precipitation_limiting_ion_experiment',
        contentKey: 'components'
    },
    {
        id: 'combustionReactions',
        label: 'Combustion Reactions',
        sectionNumber: 7,
        subTopic: 'limitingReagents',
        specificItems: ['combustionReactions'],
        diagramId: 'completeVsIncompleteCombustionProductsDiagram',
        experimentId: 'candle_sealed_jar_oxygen_limiting_reagent_experiment',
        contentKey: 'components'
    },
    {
        id: 'realWorldContext',
        label: 'Real-World and Industrial Context',
        sectionNumber: 8,
        subTopic: 'limitingReagents',
        specificItems: ['realWorldContext'],
        diagramId: 'haberProcessFeedRatioOptimisationDiagram',
        experimentId: 'industrial_ammonia_synthesis_feed_ratio_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'multiStepReactions',
        label: 'Multi-Step Reaction Sequences',
        sectionNumber: 9,
        subTopic: 'limitingReagents',
        specificItems: ['multiStepReactions'],
        diagramId: 'cascadingYieldMultiStepSynthesisDiagram',
        experimentId: 'three_step_synthesis_cumulative_yield_tracking_experiment',
        contentKey: 'components'
    },
    {
        id: 'specialCasesAndExtensions',
        label: 'Special Cases and Extensions',
        sectionNumber: 10,
        subTopic: 'limitingReagents',
        specificItems: ['specialCasesAndExtensions'],
        diagramId: 'impureReagentPurityCorrectionFlowchartDiagram',
        experimentId: 'impure_calcium_carbonate_limestone_acid_reaction_purity_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'balancingEquations',
        specificItems: ['foundations'],
        diagramId: 'conservationOfMassAtomCountingDiagram',
        experimentId: 'conservation_of_mass_burning_steel_wool_before_after_weighing_experiment',
        contentKey: 'components'
    },
    {
        id: 'typesOfChemicalEquations',
        label: 'Types of Chemical Equations',
        sectionNumber: 2,
        subTopic: 'balancingEquations',
        specificItems: ['typesOfChemicalEquations'],
        diagramId: 'equationTypeProgressionWordToNetIonicDiagram',
        experimentId: 'word_to_symbol_equation_translation_classification_experiment',
        contentKey: 'components'
    },
    {
        id: 'inspectionMethod',
        label: 'Inspection Method',
        sectionNumber: 3,
        subTopic: 'balancingEquations',
        specificItems: ['inspectionMethod'],
        diagramId: 'inspectionBalancingOrderMetalsNonmetalsHydrogenOxygenDiagram',
        experimentId: 'combustion_equation_balancing_hydrocarbon_series_experiment',
        contentKey: 'components'
    },
    {
        id: 'algebraicMethod',
        label: 'Algebraic / Systematic Method',
        sectionNumber: 4,
        subTopic: 'balancingEquations',
        specificItems: ['algebraicMethod'],
        diagramId: 'algebraicCoefficientSimultaneousEquationsDiagram',
        experimentId: 'simultaneous_equations_balancing_complex_redox_worksheet_experiment',
        contentKey: 'components'
    },
    {
        id: 'balancingIonicEquations',
        label: 'Balancing Ionic Equations',
        sectionNumber: 5,
        subTopic: 'balancingEquations',
        specificItems: ['balancingIonicEquations'],
        diagramId: 'molecularToFullIonicToNetIonicProgressionDiagram',
        experimentId: 'precipitation_reaction_net_ionic_equation_spectator_ion_experiment',
        contentKey: 'components'
    },
    {
        id: 'balancingRedoxEquations',
        label: 'Balancing Redox Equations',
        sectionNumber: 6,
        subTopic: 'balancingEquations',
        specificItems: ['balancingRedoxEquations'],
        diagramId: 'halfEquationElectronTransferOxidationReductionDiagram',
        experimentId: 'permanganate_iron_sulfate_redox_half_equation_balancing_experiment',
        contentKey: 'components'
    },
    {
        id: 'reactionTypes',
        label: 'Types of Reactions and Their Balancing Patterns',
        sectionNumber: 7,
        subTopic: 'balancingEquations',
        specificItems: ['reactionTypes'],
        diagramId: 'sixReactionTypesPatternClassificationDiagram',
        experimentId: 'reaction_type_identification_and_balancing_card_sort_experiment',
        contentKey: 'components'
    },
    {
        id: 'polyatomicIons',
        label: 'Polyatomic Ions',
        sectionNumber: 8,
        subTopic: 'balancingEquations',
        specificItems: ['polyatomicIons'],
        diagramId: 'polyatomicIonBracketExpansionUnitBalancingDiagram',
        experimentId: 'polyatomic_ion_bracket_expansion_coefficient_counting_worksheet_experiment',
        contentKey: 'components'
    },
    {
        id: 'readingStoichiometricInformation',
        label: 'Reading Stoichiometric Information',
        sectionNumber: 9,
        subTopic: 'balancingEquations',
        specificItems: ['readingStoichiometricInformation'],
        diagramId: 'coefficientMoleRatioMassVolumeInterpretationDiagram',
        experimentId: 'mole_ratio_mass_calculation_from_balanced_equation_experiment',
        contentKey: 'components'
    },
    {
        id: 'errorsAndVerification',
        label: 'Common Errors and Verification',
        sectionNumber: 10,
        subTopic: 'balancingEquations',
        specificItems: ['errorsAndVerification'],
        diagramId: 'balancingVerificationAtomCountChecklist Diagram',
        experimentId: 'deliberate_error_equation_identification_and_correction_experiment',
        contentKey: 'components'
    },

   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'solutionStoichiometry',
        specificItems: ['foundations'],
        diagramId: 'molarConcentrationSoluteVolumeTriangleDiagram',
        experimentId: 'preparing_nacl_solution_dilution_series_concentration_experiment',
        contentKey: 'components'
    },
    {
        id: 'standardSolutions',
        label: 'Standard Solutions',
        sectionNumber: 2,
        subTopic: 'solutionStoichiometry',
        specificItems: ['standardSolutions'],
        diagramId: 'primaryStandardVolumetricFlaskPreparationDiagram',
        experimentId: 'sodium_carbonate_primary_standard_solution_preparation_experiment',
        contentKey: 'components'
    },
    {
        id: 'titrationTheory',
        label: 'Titration Theory',
        sectionNumber: 3,
        subTopic: 'solutionStoichiometry',
        specificItems: ['titrationTheory'],
        diagramId: 'titrationApparatusSetupBurettePipetteFlaskDiagram',
        experimentId: 'burette_reading_technique_water_practice_titration_experiment',
        contentKey: 'components'
    },
    {
        id: 'acidBaseTitrations',
        label: 'Acid-Base Titrations',
        sectionNumber: 4,
        subTopic: 'solutionStoichiometry',
        specificItems: ['acidBaseTitrations'],
        diagramId: 'acidBaseTitrationCurveIndicatorRangeDiagram',
        experimentId: 'naoh_hcl_acid_base_titration_phenolphthalein_indicator_experiment',
        contentKey: 'components'
    },
    {
        id: 'redoxTitrations',
        label: 'Redox Titrations',
        sectionNumber: 5,
        subTopic: 'solutionStoichiometry',
        specificItems: ['redoxTitrations'],
        diagramId: 'permanganateSelfIndicatingRedoxTitrationColorChangeDiagram',
        experimentId: 'kmno4_iron_sulfate_redox_titration_acidic_solution_experiment',
        contentKey: 'components'
    },
    {
        id: 'backTitration',
        label: 'Back Titration',
        sectionNumber: 6,
        subTopic: 'solutionStoichiometry',
        specificItems: ['backTitration'],
        diagramId: 'backTitrationTwoStageReactionFlowchartDiagram',
        experimentId: 'calcium_carbonate_limestone_back_titration_hcl_naoh_experiment',
        contentKey: 'components'
    },
    {
        id: 'ionConcentrations',
        label: 'Ion Concentrations in Solution',
        sectionNumber: 7,
        subTopic: 'solutionStoichiometry',
        specificItems: ['ionConcentrations'],
        diagramId: 'ionicDissociationSubscriptMultiplierConcentrationDiagram',
        experimentId: 'mixed_solution_ion_concentration_conductivity_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'gravimetricAnalysis',
        label: 'Gravimetric Analysis',
        sectionNumber: 8,
        subTopic: 'solutionStoichiometry',
        specificItems: ['gravimetricAnalysis'],
        diagramId: 'precipitationFiltrationDryingWeighingGravimetricDiagram',
        experimentId: 'barium_sulfate_precipitation_gravimetric_sulfate_determination_experiment',
        contentKey: 'components'
    },
    {
        id: 'complexometricTitrations',
        label: 'Complexometric Titrations',
        sectionNumber: 9,
        subTopic: 'solutionStoichiometry',
        specificItems: ['complexometricTitrations'],
        diagramId: 'edtaMetalComplexOneToOneBindingDiagram',
        experimentId: 'edta_water_hardness_calcium_magnesium_titration_ebt_indicator_experiment',
        contentKey: 'components'
    },
    {
        id: 'extendedApplications',
        label: 'Extended Applications',
        sectionNumber: 10,
        subTopic: 'solutionStoichiometry',
        specificItems: ['extendedApplications'],
        diagramId: 'commercialProductAnalysisTitrationWorkflowDiagram',
        experimentId: 'vinegar_acetic_acid_content_naoh_titration_commercial_analysis_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'gasStoichiometry',
        specificItems: ['foundations'],
        diagramId: 'gasVariablesPressureVolumeTemperatureMolsDiagram',
        experimentId: 'gas_syringe_pressure_volume_temperature_variable_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'idealGasLaw',
        label: 'Ideal Gas Law',
        sectionNumber: 2,
        subTopic: 'gasStoichiometry',
        specificItems: ['idealGasLaw'],
        diagramId: 'idealGasLawPVnRTVariableRelationshipDiagram',
        experimentId: 'ideal_gas_law_verification_syringe_pressure_sensor_experiment',
        contentKey: 'components'
    },
    {
        id: 'componentGasLaws',
        label: 'Component Gas Laws',
        sectionNumber: 3,
        subTopic: 'gasStoichiometry',
        specificItems: ['componentGasLaws'],
        diagramId: 'boylesCharlesGayLussacCombinedLawGraphsDiagram',
        experimentId: 'boyles_law_syringe_pressure_volume_inverse_relationship_experiment',
        contentKey: 'components'
    },
    {
        id: 'daltonsLaw',
        label: "Dalton's Law of Partial Pressures",
        sectionNumber: 4,
        subTopic: 'gasStoichiometry',
        specificItems: ['daltonsLaw'],
        diagramId: 'partialPressureMoleFractionGasMixtureDiagram',
        experimentId: 'gas_collection_over_water_vapour_pressure_correction_experiment',
        contentKey: 'components'
    },
    {
        id: 'molarVolumeAndVolumeRatios',
        label: 'Molar Volume and Volume–Volume Stoichiometry',
        sectionNumber: 5,
        subTopic: 'gasStoichiometry',
        specificItems: ['molarVolumeAndVolumeRatios'],
        diagramId: 'avogadrosLawEqualVolumesEqualMolesSTPDiagram',
        experimentId: 'hydrogen_oxygen_volume_ratio_electrolysis_water_experiment',
        contentKey: 'components'
    },
    {
        id: 'mixedPhaseStoichiometry',
        label: 'Mixed Phase Stoichiometry',
        sectionNumber: 6,
        subTopic: 'gasStoichiometry',
        specificItems: ['mixedPhaseStoichiometry'],
        diagramId: 'solidLiquidGasPhaseConversionMoleHubDiagram',
        experimentId: 'calcium_carbonate_hcl_co2_volume_collection_mixed_phase_experiment',
        contentKey: 'components'
    },
    {
        id: 'limitingReagentWithGases',
        label: 'Gas Stoichiometry with Limiting Reagents',
        sectionNumber: 7,
        subTopic: 'gasStoichiometry',
        specificItems: ['limitingReagentWithGases'],
        diagramId: 'gasVolumeLimitingReagentDivideByCoefficientsComparisonDiagram',
        experimentId: 'hydrogen_oxygen_limiting_gas_electrolysis_volume_ratio_experiment',
        contentKey: 'components'
    },
    {
        id: 'realGases',
        label: 'Real Gases',
        sectionNumber: 8,
        subTopic: 'gasStoichiometry',
        specificItems: ['realGases'],
        diagramId: 'vanDerWaalsCompressibilityFactorZDeviationDiagram',
        experimentId: 'co2_high_pressure_deviation_from_ideal_gas_law_experiment',
        contentKey: 'components'
    },
    {
        id: 'effusionAndDiffusion',
        label: 'Effusion and Diffusion',
        sectionNumber: 9,
        subTopic: 'gasStoichiometry',
        specificItems: ['effusionAndDiffusion'],
        diagramId: 'grahamsLawEffusionRateInverseSqrtMassDiagram',
        experimentId: 'ammonia_hcl_diffusion_tube_white_ring_position_experiment',
        contentKey: 'components'
    },
    {
        id: 'industrialApplications',
        label: 'Industrial and Environmental Applications',
        sectionNumber: 10,
        subTopic: 'gasStoichiometry',
        specificItems: ['industrialApplications'],
        diagramId: 'haberProcessGasVolumeRatioFeedStreamDiagram',
        experimentId: 'stoichiometric_air_fuel_ratio_combustion_analysis_simulation_experiment',
        contentKey: 'components'
    },




     {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'hydrocarbons',
        specificItems: ['foundations'],
        diagramId: 'carbonHybridisationOrbitalGeometryDiagram',
        experimentId: 'sp3_sp2_sp_model_building_molecular_geometry_experiment',
        contentKey: 'components'
    },
    {
        id: 'alkanes',
        label: 'Alkanes',
        sectionNumber: 2,
        subTopic: 'hydrocarbons',
        specificItems: ['alkanes'],
        diagramId: 'alkaneHomologousSeriesBoilingPointTrendChart',
        experimentId: 'free_radical_halogenation_of_methane_uv_light_experiment',
        contentKey: 'components'
    },
    {
        id: 'alkenes',
        label: 'Alkenes',
        sectionNumber: 3,
        subTopic: 'hydrocarbons',
        specificItems: ['alkenes'],
        diagramId: 'electrophilicAdditionBromoniumIonMechanism',
        experimentId: 'bromine_water_decolourisation_alkene_addition_experiment',
        contentKey: 'components'
    },
    {
        id: 'alkynes',
        label: 'Alkynes',
        sectionNumber: 4,
        subTopic: 'hydrocarbons',
        specificItems: ['alkynes'],
        diagramId: 'alkyneSPHybridisationLinearGeometryDiagram',
        experimentId: 'silver_nitrate_terminal_alkyne_precipitate_experiment',
        contentKey: 'components'
    },
    {
        id: 'aromaticHydrocarbons',
        label: 'Aromatic Hydrocarbons',
        sectionNumber: 5,
        subTopic: 'hydrocarbons',
        specificItems: ['aromaticHydrocarbons'],
        diagramId: 'benzeneResonanceDelocalisation',
        experimentId: 'nitration_of_benzene_nitrating_mixture_eas_experiment',
        contentKey: 'components'
    },
    {
        id: 'petroleumAndFuels',
        label: 'Petroleum and Fuels',
        sectionNumber: 6,
        subTopic: 'hydrocarbons',
        specificItems: ['petroleumAndFuels'],
        diagramId: 'fractionalDistillationColumnFractionsBpDiagram',
        experimentId: 'fractional_distillation_crude_oil_model_fractions_experiment',
        contentKey: 'components'
    },
    {
        id: 'structuralAnalysis',
        label: 'Structural Analysis and Identification',
        sectionNumber: 7,
        subTopic: 'hydrocarbons',
        specificItems: ['structuralAnalysis'],
        diagramId: 'chemicalTestsHydrocarbonIdentificationFlowchart',
        experimentId: 'bromine_water_kmno4_combustion_hydrocarbon_test_experiment',
        contentKey: 'components'
    },
    {
        id: 'isomerismInHydrocarbons',
        label: 'Isomerism in Hydrocarbons',
        sectionNumber: 8,
        subTopic: 'hydrocarbons',
        specificItems: ['isomerismInHydrocarbons'],
        diagramId: 'chainPositionGeometricIsomerismComparisonDiagram',
        experimentId: 'cis_trans_but2ene_boiling_point_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'reactionsSummary',
        label: 'Reactions Summary',
        sectionNumber: 9,
        subTopic: 'hydrocarbons',
        specificItems: ['reactionsSummary'],
        diagramId: 'hydrocarbonReactionTypesCrossReferenceTable',
        experimentId: 'hydrocarbon_reaction_classification_card_sort_experiment',
        contentKey: 'components'
    },
    {
        id: 'realWorldApplications',
        label: 'Real-World Applications',
        sectionNumber: 10,
        subTopic: 'hydrocarbons',
        specificItems: ['realWorldApplications'],
        diagramId: 'petrochemicalFeedstockProductsFlowDiagram',
        experimentId: 'combustion_enthalpy_candle_calorimetry_hydrocarbons_experiment',
        contentKey: 'components'
    },


  {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'functionalGroups',
        specificItems: ['foundations'],
        diagramId: 'functionalGroupClassificationAndPolarityOverviewDiagram',
        experimentId: 'intermolecular_forces_boiling_point_functional_group_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'haloalkanes',
        label: 'Halogenoalkanes',
        sectionNumber: 2,
        subTopic: 'functionalGroups',
        specificItems: ['haloalkanes'],
        diagramId: 'sn1SN2MechanismComparisonEnergyProfileDiagram',
        experimentId: 'nucleophilic_substitution_haloalkane_naoh_hydrolysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'alcohols',
        label: 'Alcohols',
        sectionNumber: 3,
        subTopic: 'functionalGroups',
        specificItems: ['alcohols'],
        diagramId: 'primarySecondaryTertiaryAlcoholOxidationProductsDiagram',
        experimentId: 'acidified_dichromate_oxidation_primary_secondary_tertiary_alcohol_experiment',
        contentKey: 'components'
    },
    {
        id: 'ethers',
        label: 'Ethers',
        sectionNumber: 4,
        subTopic: 'functionalGroups',
        specificItems: ['ethers'],
        diagramId: 'williamsonEtherSynthesisReactionSchemeDiagram',
        experimentId: 'diethyl_ether_synthesis_intermolecular_dehydration_alcohol_experiment',
        contentKey: 'components'
    },
    {
        id: 'carbonylCompounds',
        label: 'Aldehydes and Ketones',
        sectionNumber: 5,
        subTopic: 'functionalGroups',
        specificItems: ['carbonylCompounds'],
        diagramId: 'nucleophilicAdditionCarbonylMechanismDiagram',
        experimentId: 'tollens_fehlings_2_4dnp_aldehyde_ketone_distinction_experiment',
        contentKey: 'components'
    },
    {
        id: 'carboxylicAcids',
        label: 'Carboxylic Acids',
        sectionNumber: 6,
        subTopic: 'functionalGroups',
        specificItems: ['carboxylicAcids'],
        diagramId: 'carboxylateResonanceStabilisationAcidityDiagram',
        experimentId: 'carboxylic_acid_nahco3_co2_effervescence_phenol_distinction_experiment',
        contentKey: 'components'
    },
    {
        id: 'esters',
        label: 'Esters',
        sectionNumber: 7,
        subTopic: 'functionalGroups',
        specificItems: ['esters'],
        diagramId: 'fischerEsterificationEquilibriumReactionSchemeDiagram',
        experimentId: 'ester_synthesis_fruity_aroma_fischer_esterification_experiment',
        contentKey: 'components'
    },
    {
        id: 'amines',
        label: 'Amines',
        sectionNumber: 8,
        subTopic: 'functionalGroups',
        specificItems: ['amines'],
        diagramId: 'amineBasicityComparisonAlkylArylAmidePKbDiagram',
        experimentId: 'amine_basicity_indicator_hcl_salt_formation_experiment',
        contentKey: 'components'
    },
    {
        id: 'amides',
        label: 'Amides',
        sectionNumber: 9,
        subTopic: 'functionalGroups',
        specificItems: ['amides'],
        diagramId: 'amidePlanarResonanceBondRotationRestrictionDiagram',
        experimentId: 'amide_hydrolysis_acid_base_conditions_ethanamide_experiment',
        contentKey: 'components'
    },
    {
        id: 'acylChlorides',
        label: 'Acyl Chlorides and Anhydrides',
        sectionNumber: 10,
        subTopic: 'functionalGroups',
        specificItems: ['acylChlorides'],
        diagramId: 'carboxylicAcidDerivativesReactivityOrderDiagram',
        experimentId: 'ethanoyl_chloride_water_alcohol_amine_reactivity_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'nitriles',
        label: 'Nitriles',
        sectionNumber: 11,
        subTopic: 'functionalGroups',
        specificItems: ['nitriles'],
        diagramId: 'nitrileHydrolysisReductionTransformationFlowDiagram',
        experimentId: 'nitrile_hydrolysis_to_amide_and_acid_chain_extension_experiment',
        contentKey: 'components'
    },
    {
        id: 'phenols',
        label: 'Phenols',
        sectionNumber: 12,
        subTopic: 'functionalGroups',
        specificItems: ['phenols'],
        diagramId: 'phenolPhenoxideResonanceAcidityComparisonDiagram',
        experimentId: 'phenol_bromine_water_tribromophenol_precipitate_eas_experiment',
        contentKey: 'components'
    },
    {
        id: 'reactionsSummaryTable',
        label: 'Reactions Summary Table',
        sectionNumber: 13,
        subTopic: 'functionalGroups',
        specificItems: ['reactionsSummaryTable'],
        diagramId: 'functionalGroupInterconversionNetworkDiagram',
        experimentId: 'multi_functional_group_identification_unknown_organic_compound_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'organicReactions',
        specificItems: ['foundations'],
        diagramId: 'curvedArrowElectronFlowNucleophileElectrophileDiagram',
        experimentId: 'arrow_pushing_electron_flow_coloured_model_tracing_experiment',
        contentKey: 'components'
    },
    {
        id: 'substitutionReactions',
        label: 'Substitution Reactions',
        sectionNumber: 2,
        subTopic: 'organicReactions',
        specificItems: ['substitutionReactions'],
        diagramId: 'sn1SN2EASFreeRadicalSubstitutionMechanismComparisonDiagram',
        experimentId: 'sn1_sn2_competition_substrate_solvent_effect_haloalkane_experiment',
        contentKey: 'components'
    },
    {
        id: 'eliminationReactions',
        label: 'Elimination Reactions',
        sectionNumber: 3,
        subTopic: 'organicReactions',
        specificItems: ['eliminationReactions'],
        diagramId: 'e2AntiPeriplanarGeometryZaitsevHofmannRegioselectivityDiagram',
        experimentId: 'e2_elimination_bromobutane_ethanolic_koh_zaitsev_product_experiment',
        contentKey: 'components'
    },
    {
        id: 'additionReactions',
        label: 'Addition Reactions',
        sectionNumber: 4,
        subTopic: 'organicReactions',
        specificItems: ['additionReactions'],
        diagramId: 'electrophilicNucleophilicRadicalAdditionComparisonDiagram',
        experimentId: 'hydroboration_oxidation_vs_acid_catalysed_hydration_regiochemistry_experiment',
        contentKey: 'components'
    },
    {
        id: 'oxidationAndReduction',
        label: 'Oxidation and Reduction',
        sectionNumber: 5,
        subTopic: 'organicReactions',
        specificItems: ['oxidationAndReduction'],
        diagramId: 'organicOxidationLadderAlkaneToCarboxylicAcidDiagram',
        experimentId: 'nabh4_vs_lialh4_selectivity_carbonyl_reduction_experiment',
        contentKey: 'components'
    },
    {
        id: 'condensationReactions',
        label: 'Condensation Reactions',
        sectionNumber: 6,
        subTopic: 'organicReactions',
        specificItems: ['condensationReactions'],
        diagramId: 'aldolCondensationClaisenEsterMechanismSchemeDiagram',
        experimentId: 'aldol_condensation_acetaldehyde_dilute_naoh_enone_product_experiment',
        contentKey: 'components'
    },
    {
        id: 'rearrangementReactions',
        label: 'Rearrangement Reactions',
        sectionNumber: 7,
        subTopic: 'organicReactions',
        specificItems: ['rearrangementReactions'],
        diagramId: 'carbocationRearrangementHydrideAlkylShiftEnergyDiagram',
        experimentId: 'pinacol_rearrangement_diol_acid_catalysed_ketone_formation_experiment',
        contentKey: 'components'
    },
    {
        id: 'pericyclicReactions',
        label: 'Pericyclic Reactions',
        sectionNumber: 8,
        subTopic: 'organicReactions',
        specificItems: ['pericyclicReactions'],
        diagramId: 'dielsAlderHOMOLUMOOrbitalSymmetryFrontierDiagram',
        experimentId: 'diels_alder_cycloaddition_butadiene_maleic_anhydride_cyclohexene_experiment',
        contentKey: 'components'
    },
    {
        id: 'namedReactions',
        label: 'Named Reactions',
        sectionNumber: 9,
        subTopic: 'organicReactions',
        specificItems: ['namedReactions'],
        diagramId: 'namedReactionsMechanismClassificationSummaryTable',
        experimentId: 'grignard_reaction_aldehyde_secondary_alcohol_synthesis_experiment',
        contentKey: 'components'
    },
    {
        id: 'retrosynthesis',
        label: 'Retrosynthetic Analysis',
        sectionNumber: 10,
        subTopic: 'organicReactions',
        specificItems: ['retrosynthesis'],
        diagramId: 'retrosynthesisDisconnectionSynthonArrowNotationDiagram',
        experimentId: 'multi_step_target_molecule_retrosynthesis_planning_exercise_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'stereochemistry',
        specificItems: ['foundations'],
        diagramId: 'wedgeDashFischerNewmanProjectionComparisonDiagram',
        experimentId: 'molecular_model_kit_3d_representation_constitutional_vs_stereo_experiment',
        contentKey: 'components'
    },
    {
        id: 'chirality',
        label: 'Chirality',
        sectionNumber: 2,
        subTopic: 'stereochemistry',
        specificItems: ['chirality'],
        diagramId: 'chiralCentreTetrahedralFourDifferentGroupsHandednessDiagram',
        experimentId: 'glove_hand_superimposability_chiral_achiral_object_classification_experiment',
        contentKey: 'components'
    },
    {
        id: 'enantiomersAndOpticalActivity',
        label: 'Enantiomers and Optical Activity',
        sectionNumber: 3,
        subTopic: 'stereochemistry',
        specificItems: ['enantiomersAndOpticalActivity'],
        diagramId: 'polarimeterPlaneOfPolarisedLightRotationDiagram',
        experimentId: 'polarimetry_glucose_fructose_specific_rotation_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'diastereomers',
        label: 'Diastereomers',
        sectionNumber: 4,
        subTopic: 'stereochemistry',
        specificItems: ['diastereomers'],
        diagramId: 'diastereomerEprimerAnomarMesoRelationshipDiagram',
        experimentId: 'tartaric_acid_meso_vs_chiral_melting_point_optical_rotation_experiment',
        contentKey: 'components'
    },
    {
        id: 'conformationalAnalysis',
        label: 'Conformational Analysis',
        sectionNumber: 5,
        subTopic: 'stereochemistry',
        specificItems: ['conformationalAnalysis'],
        diagramId: 'cyclohexaneChairBoatAxialEquatorialNewmanDiagram',
        experimentId: 'molecular_model_cyclohexane_chair_flip_axial_equatorial_strain_experiment',
        contentKey: 'components'
    },
    {
        id: 'reactionsAndStereochemistry',
        label: 'Reactions and Stereochemistry',
        sectionNumber: 6,
        subTopic: 'stereochemistry',
        specificItems: ['reactionsAndStereochemistry'],
        diagramId: 'sn2InversionSn1RacemisationE2AntiPeriplanarStereoDiagram',
        experimentId: 'sn2_walden_inversion_chiral_haloalkane_configuration_tracking_experiment',
        contentKey: 'components'
    },
    {
        id: 'prochirality',
        label: 'Prochirality',
        sectionNumber: 7,
        subTopic: 'stereochemistry',
        specificItems: ['prochirality'],
        diagramId: 'prochirality',
        experimentId: 'pro_r_pro_s_face_labelling_carbonyl_prochiral_centre_exercise_experiment',
        contentKey: 'components'
    },
    {
        id: 'resolutionOfEnantiomers',
        label: 'Resolution of Enantiomers',
        sectionNumber: 8,
        subTopic: 'stereochemistry',
        specificItems: ['resolutionOfEnantiomers'],
        diagramId: 'classicalResolutionDiastereomericSaltCrystallisationFlowDiagram',
        experimentId: 'chiral_hplc_racemic_ibuprofen_enantiomer_separation_ee_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'stereochemistryInBiology',
        label: 'Stereochemistry in Biology',
        sectionNumber: 9,
        subTopic: 'stereochemistry',
        specificItems: ['stereochemistryInBiology'],
        diagramId: 'laminoAcidDGlucoseNaturalConfigurationFischerProjectionDiagram',
        experimentId: 'enzyme_stereospecificity_l_vs_d_amino_acid_substrate_activity_experiment',
        contentKey: 'components'
    },
    {
        id: 'advancedConcepts',
        label: 'Advanced Stereochemical Concepts',
        sectionNumber: 10,
        subTopic: 'stereochemistry',
        specificItems: ['advancedConcepts'],
        diagramId: 'homotopicEnantiotopicDiastereotopicGroupsNMRDistinctionDiagram',
        experimentId: 'diastereotopic_proton_nmr_chemical_shift_nonequivalence_ch2_experiment',
        contentKey: 'components'
    },

   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'spectroscopy',
        specificItems: ['foundations'],
        diagramId: 'electromagneticSpectrumEnergyFrequencyWavelengthDiagram',
        experimentId: 'beers_lambert_law_concentration_absorbance_coloured_dye_experiment',
        contentKey: 'components'
    },
    {
        id: 'massSpectrometry',
        label: 'Mass Spectrometry',
        sectionNumber: 2,
        subTopic: 'spectroscopy',
        specificItems: ['massSpectrometry'],
        diagramId: 'massSpectrumMolecularIonFragmentIsotopePatternAnnotatedDiagram',
        experimentId: 'gc_ms_volatile_organic_mixture_fragmentation_pattern_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'infraredSpectroscopy',
        label: 'Infrared Spectroscopy',
        sectionNumber: 3,
        subTopic: 'spectroscopy',
        specificItems: ['infraredSpectroscopy'],
        diagramId: 'irAbsorptionBandsFunctionalGroupWavenumberReferenceChart',
        experimentId: 'ftir_atr_functional_group_identification_unknown_organic_compound_experiment',
        contentKey: 'components'
    },
    {
        id: 'uvVisSpectroscopy',
        label: 'UV-Vis Spectroscopy',
        sectionNumber: 4,
        subTopic: 'spectroscopy',
        specificItems: ['uvVisSpectroscopy'],
        diagramId: 'uvVisElectronicTransitionConjugationBathochromicShiftDiagram',
        experimentId: 'uv_vis_conjugated_dye_lambda_max_conjugation_length_correlation_experiment',
        contentKey: 'components'
    },
    {
        id: 'protonNMR',
        label: '¹H NMR Spectroscopy',
        sectionNumber: 5,
        subTopic: 'spectroscopy',
        specificItems: ['protonNMR'],
        diagramId: 'protonNMRChemicalShiftCouplingMultiplicityIntegrationAnnotatedSpectrum',
        experimentId: 'proton_nmr_ethyl_ethanoate_spectrum_interpretation_splitting_pattern_experiment',
        contentKey: 'components'
    },
    {
        id: 'carbon13NMR',
        label: '¹³C NMR Spectroscopy',
        sectionNumber: 6,
        subTopic: 'spectroscopy',
        specificItems: ['carbon13NMR'],
        diagramId: 'carbon13ChemicalShiftRangeDEPT135PhaseComparisonDiagram',
        experimentId: 'dept_135_ch3_ch2_ch_quaternary_carbon_classification_unknown_spectrum_experiment',
        contentKey: 'components'
    },
    {
        id: 'twoDimensionalNMR',
        label: '2D NMR Techniques',
        sectionNumber: 7,
        subTopic: 'spectroscopy',
        specificItems: ['twoDimensionalNMR'],
        diagramId: 'cosy_hsqc_hmbc_noesy_2dNMRCrosspeakConnectivityMapDiagram',
        experimentId: 'cosy_hmbc_connectivity_tracing_unknown_natural_product_structure_experiment',
        contentKey: 'components'
    },
    {
        id: 'structureElucidation',
        label: 'Structure Elucidation Strategy',
        sectionNumber: 8,
        subTopic: 'spectroscopy',
        specificItems: ['structureElucidation'],
        diagramId: 'structureElucidationStepwiseDecisionTreeFlowchart',
        experimentId: 'combined_ms_ir_nmr_unknown_organic_structure_determination_experiment',
        contentKey: 'components'
    },
    {
        id: 'advancedTechniques',
        label: 'Advanced Techniques',
        sectionNumber: 9,
        subTopic: 'spectroscopy',
        specificItems: ['advancedTechniques'],
        diagramId: 'xrayCrystallographyFluorescenceRamanCircularDichroismTechniqueOverviewDiagram',
        experimentId: 'fluorescence_emission_quinine_tonic_water_uv_lamp_stokes_shift_experiment',
        contentKey: 'components'
    },
    {
        id: 'diagnosticSummary',
        label: 'Diagnostic Summary Table',
        sectionNumber: 10,
        subTopic: 'spectroscopy',
        specificItems: ['diagnosticSummary'],
        diagramId: 'spectroscopicFingerprintFunctionalGroupCrossReferenceTable',
        experimentId: 'spectroscopic_data_set_unknown_compound_multi_technique_identification_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'polymers',
        specificItems: ['foundations'],
        diagramId: 'polymerClassificationMolecularWeightDistributionDispersityDiagram',
        experimentId: 'monomer_polymer_chain_length_paper_clip_model_mw_distribution_experiment',
        contentKey: 'components'
    },
    {
        id: 'additionPolymerisation',
        label: 'Addition Polymerisation',
        sectionNumber: 2,
        subTopic: 'polymers',
        specificItems: ['additionPolymerisation'],
        diagramId: 'freeRadicalChainGrowthInitiationPropagationTerminationDiagram',
        experimentId: 'polystyrene_free_radical_polymerisation_styrene_aibn_initiator_experiment',
        contentKey: 'components'
    },
    {
        id: 'condensationPolymerisation',
        label: 'Condensation Polymerisation',
        sectionNumber: 3,
        subTopic: 'polymers',
        specificItems: ['condensationPolymerisation'],
        diagramId: 'carothersEquationConversionVsMolecularWeightStepGrowthDiagram',
        experimentId: 'nylon_66_interfacial_polymerisation_rope_pulling_diamine_diacid_experiment',
        contentKey: 'components'
    },
    {
        id: 'structureAndProperties',
        label: 'Structure and Properties',
        sectionNumber: 4,
        subTopic: 'polymers',
        specificItems: ['structureAndProperties'],
        diagramId: 'tgTmCrystallinityAmorphousMechanicalPropertyRelationshipDiagram',
        experimentId: 'dsc_glass_transition_melting_temperature_polymer_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'rubberAndElastomers',
        label: 'Rubber and Elastomers',
        sectionNumber: 5,
        subTopic: 'polymers',
        specificItems: ['rubberAndElastomers'],
        diagramId: 'vulcanisationSulfurCrosslinkingNaturalRubberNetworkDiagram',
        experimentId: 'vulcanisation_rubber_crosslinking_sulfur_mechanical_property_change_experiment',
        contentKey: 'components'
    },
    {
        id: 'naturalPolymers',
        label: 'Natural Polymers',
        sectionNumber: 6,
        subTopic: 'polymers',
        specificItems: ['naturalPolymers'],
        diagramId: 'celluloseStarchAlpha_betaGlycosidicLinkageComparisonDiagram',
        experimentId: 'iodine_starch_amylose_helix_inclusion_complex_colour_test_experiment',
        contentKey: 'components'
    },
    {
        id: 'biodegradablePolymers',
        label: 'Biodegradable Polymers',
        sectionNumber: 7,
        subTopic: 'polymers',
        specificItems: ['biodegradablePolymers'],
        diagramId: 'pla_phaDegradationPathwayCompostingConditionsDiagram',
        experimentId: 'pla_vs_conventional_plastic_composting_soil_burial_degradation_experiment',
        contentKey: 'components'
    },
    {
        id: 'polymerCharacterisation',
        label: 'Polymer Characterisation',
        sectionNumber: 8,
        subTopic: 'polymers',
        specificItems: ['polymerCharacterisation'],
        diagramId: 'gpcMolecularWeightDistributionChromatogramDispersityDiagram',
        experimentId: 'viscometry_mark_houwink_intrinsic_viscosity_polymer_mw_estimation_experiment',
        contentKey: 'components'
    },
    {
        id: 'environmentalImpactAndRecycling',
        label: 'Environmental Impact and Recycling',
        sectionNumber: 9,
        subTopic: 'polymers',
        specificItems: ['environmentalImpactAndRecycling'],
        diagramId: 'plasticRecyclingHierarchyMechanicalChemicalLifecycleDiagram',
        experimentId: 'plastic_resin_code_density_separation_float_sink_recycling_sort_experiment',
        contentKey: 'components'
    },
    {
        id: 'advancedMaterials',
        label: 'Advanced and Emerging Polymer Materials',
        sectionNumber: 10,
        subTopic: 'polymers',
        specificItems: ['advancedMaterials'],
        diagramId: 'conductingPolymerBlockCopolymerSelfAssemblyHydrogelSmartMaterialOverviewDiagram',
        experimentId: 'pnipam_thermoresponsive_polymer_lcst_phase_transition_temperature_experiment',
        contentKey: 'components'
    },




  {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'reactionRates',
        specificItems: ['foundations'],
        diagramId: 'reactionRateConcentrationTimeAnnotatedCurveDiagram',
        experimentId: 'average_vs_instantaneous_rate_tangent_drawing_experiment',
        contentKey: 'components'
    },
    {
        id: 'collisionTheory',
        label: 'Collision Theory',
        sectionNumber: 2,
        subTopic: 'reactionRates',
        specificItems: ['collisionTheory'],
        diagramId: 'maxwellBoltzmannDistributionActivationEnergyShadeAreaDiagram',
        experimentId: 'molecular_collision_orientation_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'factorsAffectingRate',
        label: 'Factors Affecting Rate',
        sectionNumber: 3,
        subTopic: 'reactionRates',
        specificItems: ['factorsAffectingRate'],
        diagramId: 'fiveFactorsRateSummaryComparisonDiagram',
        experimentId: 'marble_chips_hydrochloric_acid_concentration_temperature_surface_area_experiment',
        contentKey: 'components'
    },
    {
        id: 'measuringReactionRates',
        label: 'Measuring Reaction Rates',
        sectionNumber: 4,
        subTopic: 'reactionRates',
        specificItems: ['measuringReactionRates'],
        diagramId: 'gasCollectionSyringeColorimetrySetupDiagram',
        experimentId: 'iodine_clock_reaction_time_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'rateExpressionsAndConstant',
        label: 'Rate Expressions and Rate Constant',
        sectionNumber: 5,
        subTopic: 'reactionRates',
        specificItems: ['rateExpressionsAndConstant'],
        diagramId: 'reactionOrderRateLawComparisonTable',
        experimentId: 'initial_rates_method_varying_concentration_experiment',
        contentKey: 'components'
    },
    {
        id: 'halfLife',
        label: 'Half-Life',
        sectionNumber: 6,
        subTopic: 'reactionRates',
        specificItems: ['halfLife'],
        diagramId: 'firstOrderConstantHalfLifeConcentrationTimeDiagram',
        experimentId: 'hydrogen_peroxide_decomposition_half_life_determination_experiment',
        contentKey: 'components'
    },
    {
        id: 'integratedRateLaws',
        label: 'Integrated Rate Laws',
        sectionNumber: 7,
        subTopic: 'reactionRates',
        specificItems: ['integratedRateLaws'],
        diagramId: 'zeroFirstSecondOrderLinearisedPlotComparisonDiagram',
        experimentId: 'graphical_linearisation_order_determination_experiment',
        contentKey: 'components'
    },
    {
        id: 'temperatureAndArrhenius',
        label: 'Temperature and the Arrhenius Equation',
        sectionNumber: 8,
        subTopic: 'reactionRates',
        specificItems: ['temperatureAndArrhenius'],
        diagramId: 'arrheniusLnKVsOneOverTLinearPlotDiagram',
        experimentId: 'sodium_thiosulfate_hydrochloric_acid_temperature_rate_arrhenius_experiment',
        contentKey: 'components'
    },
    {
        id: 'reactionMechanisms',
        label: 'Reaction Mechanisms and Rate',
        sectionNumber: 9,
        subTopic: 'reactionRates',
        specificItems: ['reactionMechanisms'],
        diagramId: 'rateDeterminingStepMultiStepEnergyProfileDiagram',
        experimentId: 'mechanism_consistency_rate_law_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'realLifeApplications',
        label: 'Real-Life Applications',
        sectionNumber: 10,
        subTopic: 'reactionRates',
        specificItems: ['realLifeApplications'],
        diagramId: 'industrialBiologicalEnvironmentalRateApplicationsInfographic',
        experimentId: 'enzyme_temperature_optimum_rate_vs_temperature_curve_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'rateLaws',
        specificItems: ['foundations'],
        diagramId: 'rateLawComponentsAnnotatedExpressionDiagram',
        experimentId: 'rate_law_vs_equilibrium_expression_comparison_activity_experiment',
        contentKey: 'components'
    },
    {
        id: 'zeroOrderRateLaw',
        label: 'Zero-Order Rate Law',
        sectionNumber: 2,
        subTopic: 'rateLaws',
        specificItems: ['zeroOrderRateLaw'],
        diagramId: 'zeroOrderConcentrationTimeLinearDecayDiagram',
        experimentId: 'enzyme_saturated_substrate_zero_order_kinetics_experiment',
        contentKey: 'components'
    },
    {
        id: 'firstOrderRateLaw',
        label: 'First-Order Rate Law',
        sectionNumber: 3,
        subTopic: 'rateLaws',
        specificItems: ['firstOrderRateLaw'],
        diagramId: 'firstOrderExponentialDecayAndLnLinearisationDiagram',
        experimentId: 'n2o5_decomposition_first_order_confirmation_ln_plot_experiment',
        contentKey: 'components'
    },
    {
        id: 'secondOrderRateLaw',
        label: 'Second-Order Rate Law',
        sectionNumber: 4,
        subTopic: 'rateLaws',
        specificItems: ['secondOrderRateLaw'],
        diagramId: 'secondOrderOneOverConcentrationLinearisationDiagram',
        experimentId: 'no2_decomposition_second_order_1_over_concentration_plot_experiment',
        contentKey: 'components'
    },
    {
        id: 'determiningRateLawsExperimentally',
        label: 'Determining Rate Laws Experimentally',
        sectionNumber: 5,
        subTopic: 'rateLaws',
        specificItems: ['determiningRateLawsExperimentally'],
        diagramId: 'initialRatesMethodDataTableOrderDeterminationDiagram',
        experimentId: 'iodine_clock_initial_rates_log_log_order_determination_experiment',
        contentKey: 'components'
    },
    {
        id: 'rateConstantAndTemperature',
        label: 'Rate Constant and Temperature',
        sectionNumber: 6,
        subTopic: 'rateLaws',
        specificItems: ['rateConstantAndTemperature'],
        diagramId: 'arrheniusTwoPointCalculationAnnotatedWorkingDiagram',
        experimentId: 'rate_constant_multiple_temperatures_arrhenius_plot_experiment',
        contentKey: 'components'
    },
    {
        id: 'rateLawsAndMechanisms',
        label: 'Rate Laws and Reaction Mechanisms',
        sectionNumber: 7,
        subTopic: 'rateLaws',
        specificItems: ['rateLawsAndMechanisms'],
        diagramId: 'rateDeterminingStepMechanismRateLawDerivationFlowchart',
        experimentId: 'proposed_mechanism_rate_law_consistency_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'complexAndSpecialRateLaws',
        label: 'Complex and Special Rate Laws',
        sectionNumber: 8,
        subTopic: 'rateLaws',
        specificItems: ['complexAndSpecialRateLaws'],
        diagramId: 'michaelisMentenHyperbolicCurveAndLineweaverBurkDiagram',
        experimentId: 'pseudo_first_order_ester_hydrolysis_excess_water_experiment',
        contentKey: 'components'
    },
    {
        id: 'integratedRateLawsAdvanced',
        label: 'Integrated Rate Laws — Advanced Applications',
        sectionNumber: 9,
        subTopic: 'rateLaws',
        specificItems: ['integratedRateLawsAdvanced'],
        diagramId: 'integratedRateLawFormulaApplicationDecisionTreeDiagram',
        experimentId: 'multi_half_life_concentration_prediction_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'realLifeApplications',
        label: 'Real-Life Applications',
        sectionNumber: 10,
        subTopic: 'rateLaws',
        specificItems: ['realLifeApplications'],
        diagramId: 'pharmacokineticsDrugPlasmaConcentrationTimeProfileDiagram',
        experimentId: 'radioactive_decay_carbon_14_half_life_dating_calculation_experiment',
        contentKey: 'components'
    },

   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'activationEnergy',
        specificItems: ['foundations'],
        diagramId: 'activatedComplexReactionCoordinateAnnotatedDiagram',
        experimentId: 'activation_energy_concept_ball_and_hill_analogy_experiment',
        contentKey: 'components'
    },
    {
        id: 'energyProfileDiagrams',
        label: 'Energy Profile Diagrams',
        sectionNumber: 2,
        subTopic: 'activationEnergy',
        specificItems: ['energyProfileDiagrams'],
        diagramId: 'exothermicEndothermicMultiStepEnergyProfileComparisonDiagram',
        experimentId: 'drawing_and_interpreting_energy_profile_diagrams_experiment',
        contentKey: 'components'
    },
    {
        id: 'maxwellBoltzmannAndEa',
        label: 'Maxwell-Boltzmann Distribution and Eₐ',
        sectionNumber: 3,
        subTopic: 'activationEnergy',
        specificItems: ['maxwellBoltzmannAndEa'],
        diagramId: 'maxwellBoltzmannTemperatureShiftEaThresholdShadedAreaDiagram',
        experimentId: 'temperature_effect_rate_maxwell_boltzmann_shaded_fraction_experiment',
        contentKey: 'components'
    },
    {
        id: 'arrheniusEquation',
        label: 'Arrhenius Equation',
        sectionNumber: 4,
        subTopic: 'activationEnergy',
        specificItems: ['arrheniusEquation'],
        diagramId: 'arrheniusEquationComponentsAnnotatedFormulaAndLinearPlotDiagram',
        experimentId: 'sodium_thiosulfate_acid_five_temperature_arrhenius_ea_determination_experiment',
        contentKey: 'components'
    },
    {
        id: 'transitionStateTheory',
        label: 'Transition State Theory',
        sectionNumber: 5,
        subTopic: 'activationEnergy',
        specificItems: ['transitionStateTheory'],
        diagramId: 'eyringEquationPotentialEnergySaddlePointSurfaceDiagram',
        experimentId: 'activation_enthalpy_entropy_eyring_plot_ln_k_over_T_experiment',
        contentKey: 'components'
    },
    {
        id: 'experimentalDetermination',
        label: 'Experimental Determination of Eₐ',
        sectionNumber: 6,
        subTopic: 'activationEnergy',
        specificItems: ['experimentalDetermination'],
        diagramId: 'arrheniusPlotDataTableAndBestFitLineDiagram',
        experimentId: 'clock_reaction_multiple_temperature_ea_graphical_determination_experiment',
        contentKey: 'components'
    },
    {
        id: 'activationEnergyAndCatalysis',
        label: 'Activation Energy and Catalysis',
        sectionNumber: 7,
        subTopic: 'activationEnergy',
        specificItems: ['activationEnergyAndCatalysis'],
        diagramId: 'catalysedUncatalysedEnergyProfileOverlayDiagram',
        experimentId: 'hydrogen_peroxide_manganese_dioxide_catalase_ea_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'photochemistry',
        label: 'Photochemistry',
        sectionNumber: 8,
        subTopic: 'activationEnergy',
        specificItems: ['photochemistry'],
        diagramId: 'photonAbsorptionExcitedStateReactionPathwayDiagram',
        experimentId: 'photochemical_vs_thermal_reaction_light_initiated_rate_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'biologicalSystems',
        label: 'Activation Energy in Biological Systems',
        sectionNumber: 9,
        subTopic: 'activationEnergy',
        specificItems: ['biologicalSystems'],
        diagramId: 'enzymeTemperatureOptimumRateVsTemperatureBellCurveDiagram',
        experimentId: 'catalase_liver_temperature_optimum_ea_biological_context_experiment',
        contentKey: 'components'
    },
    {
        id: 'realLifeApplications',
        label: 'Real-Life Applications',
        sectionNumber: 10,
        subTopic: 'activationEnergy',
        specificItems: ['realLifeApplications'],
        diagramId: 'industrialActivationEnergyTradeoffTemperatureYieldRateDiagram',
        experimentId: 'food_spoilage_refrigeration_temperature_rate_arrhenius_modelling_experiment',
        contentKey: 'components'
    },


  {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'catalysis',
        specificItems: ['foundations'],
        diagramId: 'catalyticCycleTurnoverNumberRegenerationAnnotatedDiagram',
        experimentId: 'manganese_dioxide_hydrogen_peroxide_catalyst_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'homogeneousCatalysis',
        label: 'Homogeneous Catalysis',
        sectionNumber: 2,
        subTopic: 'catalysis',
        specificItems: ['homogeneousCatalysis'],
        diagramId: 'homogeneousCatalyticCycleIntermediateFormationDiagram',
        experimentId: 'iron_two_three_catalysis_persulfate_iodide_reaction_experiment',
        contentKey: 'components'
    },
    {
        id: 'heterogeneousCatalysis',
        label: 'Heterogeneous Catalysis',
        sectionNumber: 3,
        subTopic: 'catalysis',
        specificItems: ['heterogeneousCatalysis'],
        diagramId: 'adsorptionActiveSiteChemisorptionSurfaceReactionDesorptionDiagram',
        experimentId: 'platinum_wire_methanol_vapour_catalytic_oxidation_surface_experiment',
        contentKey: 'components'
    },
    {
        id: 'enzymeCatalysis',
        label: 'Enzyme Catalysis',
        sectionNumber: 4,
        subTopic: 'catalysis',
        specificItems: ['enzymeCatalysis'],
        diagramId: 'michaelisMentenMechanismLineweaverBurkInhibitionComparisonDiagram',
        experimentId: 'amylase_starch_ph_temperature_michaelis_menten_kinetics_experiment',
        contentKey: 'components'
    },
    {
        id: 'industrialCatalysis',
        label: 'Industrial Catalysis',
        sectionNumber: 5,
        subTopic: 'catalysis',
        specificItems: ['industrialCatalysis'],
        diagramId: 'haberProcessContactProcessCatalyticConverterConditionsDiagram',
        experimentId: 'vanadium_oxide_sulfur_dioxide_oxidation_contact_process_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'photocatalysis',
        label: 'Photocatalysis',
        sectionNumber: 6,
        subTopic: 'catalysis',
        specificItems: ['photocatalysis'],
        diagramId: 'tio2BandGapElectronHolePairOhRadicalFormationDiagram',
        experimentId: 'tio2_uv_light_methylene_blue_dye_decolorisation_photocatalysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'organocatalysis',
        label: 'Organocatalysis',
        sectionNumber: 7,
        subTopic: 'catalysis',
        specificItems: ['organocatalysis'],
        diagramId: 'prolineEnamineIntermediateCovalentOrganocatalysisDiagram',
        experimentId: 'proline_asymmetric_aldol_reaction_enantioselectivity_tlc_experiment',
        contentKey: 'components'
    },
    {
        id: 'greenCatalysisAndSustainability',
        label: 'Green Catalysis and Sustainability',
        sectionNumber: 8,
        subTopic: 'catalysis',
        specificItems: ['greenCatalysisAndSustainability'],
        diagramId: 'atomEconomyEFactorGreenCatalysisBiocatalysisComparisonDiagram',
        experimentId: 'lipase_biodiesel_transesterification_green_biocatalysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'comparingTypesOfCatalysis',
        label: 'Comparing Types of Catalysis',
        sectionNumber: 9,
        subTopic: 'catalysis',
        specificItems: ['comparingTypesOfCatalysis'],
        diagramId: 'homogeneousHeterogeneousEnzymeOrganocatalysisComparisonTableDiagram',
        experimentId: 'four_catalyst_types_parallel_h2o2_decomposition_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'realLifeApplications',
        label: 'Real-Life Applications',
        sectionNumber: 10,
        subTopic: 'catalysis',
        specificItems: ['realLifeApplications'],
        diagramId: 'catalyticConverterFuelCellHaberEnzymeDrugRealWorldApplicationsDiagram',
        experimentId: 'catalytic_converter_co_oxidation_temperature_light_off_threshold_experiment',
        contentKey: 'components'
    },



    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'entropy',
        specificItems: ['foundations'],
        diagramId: 'microsateMacrostateEnergyDispersalDiagram',
        experimentId: 'ink_drop_diffusion_microstate_visualisation_experiment',
        contentKey: 'components'
    },
    {
        id: 'lawsOfThermodynamics',
        label: 'Laws of Thermodynamics',
        sectionNumber: 2,
        subTopic: 'entropy',
        specificItems: ['lawsOfThermodynamics'],
        diagramId: 'threeThermodynamicLawsEntropyRelationshipChart',
        experimentId: 'heat_flow_direction_hot_cold_block_contact_experiment',
        contentKey: 'components'
    },
    {
        id: 'entropyCalculations',
        label: 'Entropy Calculations',
        sectionNumber: 3,
        subTopic: 'entropy',
        specificItems: ['entropyCalculations'],
        diagramId: 'standardMolarEntropyComparisonBarChart',
        experimentId: 'isothermal_gas_expansion_syringe_pressure_entropy_experiment',
        contentKey: 'components'
    },
    {
        id: 'entropyAndSpontaneity',
        label: 'Entropy and Spontaneity',
        sectionNumber: 4,
        subTopic: 'entropy',
        specificItems: ['entropyAndSpontaneity'],
        diagramId: 'spontaneityUniverseEntropyDecisionFlowchart',
        experimentId: 'ammonium_nitrate_dissolution_spontaneous_endothermic_experiment',
        contentKey: 'components'
    },
    {
        id: 'entropyAndPhaseChanges',
        label: 'Entropy and Phase Changes',
        sectionNumber: 5,
        subTopic: 'entropy',
        specificItems: ['entropyAndPhaseChanges'],
        diagramId: 'solidLiquidGasEntropyOrderingDiagram',
        experimentId: 'troutons_rule_vaporisation_entropy_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'entropyAndMolecularProperties',
        label: 'Entropy and Molecular Properties',
        sectionNumber: 6,
        subTopic: 'entropy',
        specificItems: ['entropyAndMolecularProperties'],
        diagramId: 'molecularComplexityMolarMassEntropyTrendChart',
        experimentId: 'noble_gas_molar_mass_entropy_correlation_data_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'statisticalMechanicsAndEntropy',
        label: 'Statistical Mechanics and Entropy',
        sectionNumber: 7,
        subTopic: 'entropy',
        specificItems: ['statisticalMechanicsAndEntropy'],
        diagramId: 'boltzmannEquationMicrostateCountingDiagram',
        experimentId: 'coin_toss_microstate_probability_entropy_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'entropyInChemicalReactions',
        label: 'Entropy in Chemical Reactions',
        sectionNumber: 8,
        subTopic: 'entropy',
        specificItems: ['entropyInChemicalReactions'],
        diagramId: 'deltaGasMolesEntropyChangeReactionDiagram',
        experimentId: 'calcium_carbonate_decomposition_gas_production_entropy_experiment',
        contentKey: 'components'
    },
    {
        id: 'entropyInInformationTheory',
        label: 'Entropy in Information Theory',
        sectionNumber: 9,
        subTopic: 'entropy',
        specificItems: ['entropyInInformationTheory'],
        diagramId: 'shannonBoltzmannEntropyAnalogyComparisonDiagram',
        experimentId: 'maxwells_demon_information_erasure_thought_experiment_simulation',
        contentKey: 'components'
    },
    {
        id: 'realWorldApplications',
        label: 'Real-World Applications',
        sectionNumber: 10,
        subTopic: 'entropy',
        specificItems: ['realWorldApplications'],
        diagramId: 'biologicalSystemsEntropyExportOpenSystemDiagram',
        experimentId: 'heat_engine_carnot_efficiency_irreversibility_entropy_experiment',
        contentKey: 'components'
    },



   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'enthalpy',
        specificItems: ['foundations'],
        diagramId: 'enthalpyInternalEnergyPVTermRelationshipDiagram',
        experimentId: 'constant_pressure_vs_constant_volume_heat_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'exothermicAndEndothermic',
        label: 'Exothermic and Endothermic Reactions',
        sectionNumber: 2,
        subTopic: 'enthalpy',
        specificItems: ['exothermicAndEndothermic'],
        diagramId: 'exothermicEndothermicEnergyProfileDiagram',
        experimentId: 'hand_warmer_cold_pack_temperature_change_classification_experiment',
        contentKey: 'components'
    },
    {
        id: 'standardEnthalpies',
        label: 'Standard Enthalpies',
        sectionNumber: 3,
        subTopic: 'enthalpy',
        specificItems: ['standardEnthalpies'],
        diagramId: 'standardEnthalpyTypesComparisonTable',
        experimentId: 'standard_enthalpy_of_neutralisation_strong_weak_acid_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'hessLaw',
        label: "Hess's Law",
        sectionNumber: 4,
        subTopic: 'enthalpy',
        specificItems: ['hessLaw'],
        diagramId: 'hessLawEnergyLevelCycleRouteDiagram',
        experimentId: 'hess_law_naoh_hcl_three_route_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'bondEnthalpy',
        label: 'Bond Enthalpy',
        sectionNumber: 5,
        subTopic: 'enthalpy',
        specificItems: ['bondEnthalpy'],
        diagramId: 'bondBreakingFormingEnergyBudgetDiagram',
        experimentId: 'bond_enthalpy_estimation_combustion_hydrocarbons_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'latticeEnthalpyAndBornHaberCycles',
        label: 'Lattice Enthalpy and Born-Haber Cycles',
        sectionNumber: 6,
        subTopic: 'enthalpy',
        specificItems: ['latticeEnthalpyAndBornHaberCycles'],
        diagramId: 'bornHaberCycleNaClEnergyLevelDiagram',
        experimentId: 'ionic_dissolution_enthalpy_lattice_hydration_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'enthalpyAndTemperatureDependence',
        label: 'Enthalpy and Temperature Dependence',
        sectionNumber: 7,
        subTopic: 'enthalpy',
        specificItems: ['enthalpyAndTemperatureDependence'],
        diagramId: 'kirchhoffHeatCapacityDeltaHTemperatureCorrectionDiagram',
        experimentId: 'specific_heat_capacity_metals_water_mixing_calorimetry_experiment',
        contentKey: 'components'
    },
    {
        id: 'enthalpyOfSpecialReactionTypes',
        label: 'Enthalpy of Special Reaction Types',
        sectionNumber: 8,
        subTopic: 'enthalpy',
        specificItems: ['enthalpyOfSpecialReactionTypes'],
        diagramId: 'hydrogenationResonanceEnergyBenzeneDelocaliastionDiagram',
        experimentId: 'enthalpy_of_precipitation_silver_chloride_formation_experiment',
        contentKey: 'components'
    },
    {
        id: 'enthalpyInBiologicalAndFoodChemistry',
        label: 'Enthalpy in Biological and Food Chemistry',
        sectionNumber: 9,
        subTopic: 'enthalpy',
        specificItems: ['enthalpyInBiologicalAndFoodChemistry'],
        diagramId: 'atwaterFuelValueMacronutrientComparisonChart',
        experimentId: 'food_calorimetry_burning_crisp_nut_flame_calorimeter_experiment',
        contentKey: 'components'
    },
    {
        id: 'industrialAndEnvironmentalApplications',
        label: 'Industrial and Environmental Applications',
        sectionNumber: 10,
        subTopic: 'enthalpy',
        specificItems: ['industrialAndEnvironmentalApplications'],
        diagramId: 'haberProcessTemperaturePressureEquilibriumYieldDiagram',
        experimentId: 'enthalpy_combustion_fuels_spirit_lamp_calorimeter_comparison_experiment',
        contentKey: 'components'
    },



   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'gibbsFreeEnergy',
        specificItems: ['foundations'],
        diagramId: 'gibbsEnergyEnthalpyEntropyRelationshipTriangleDiagram',
        experimentId: 'spontaneity_prediction_deltaH_deltaS_sign_sorting_experiment',
        contentKey: 'components'
    },
    {
        id: 'gibbsEquationAndTemperatureAnalysis',
        label: 'Gibbs Equation and Temperature Analysis',
        sectionNumber: 2,
        subTopic: 'gibbsFreeEnergy',
        specificItems: ['gibbsEquationAndTemperatureAnalysis'],
        diagramId: 'deltaGvsTemperatureFourSignCombinationsGraph',
        experimentId: 'crossover_temperature_calcium_carbonate_decomposition_threshold_experiment',
        contentKey: 'components'
    },
    {
        id: 'standardGibbsFreeEnergies',
        label: 'Standard Gibbs Free Energies',
        sectionNumber: 3,
        subTopic: 'gibbsFreeEnergy',
        specificItems: ['standardGibbsFreeEnergies'],
        diagramId: 'standardGibbsFormationEnergyStabilityLadderDiagram',
        experimentId: 'standard_gibbs_energy_formation_reaction_calculation_data_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'gibbsEnergyAndEquilibrium',
        label: 'Gibbs Energy and Equilibrium',
        sectionNumber: 4,
        subTopic: 'gibbsFreeEnergy',
        specificItems: ['gibbsEnergyAndEquilibrium'],
        diagramId: 'gibbsEnergyReactionProgressMinimumEquilibriumCurve',
        experimentId: 'equilibrium_constant_temperature_dependence_vant_hoff_plot_experiment',
        contentKey: 'components'
    },
    {
        id: 'gibbsEnergyAndElectrochemistry',
        label: 'Gibbs Energy and Electrochemistry',
        sectionNumber: 5,
        subTopic: 'gibbsFreeEnergy',
        specificItems: ['gibbsEnergyAndElectrochemistry'],
        diagramId: 'nernstEquationCellPotentialConcentrationDependenceDiagram',
        experimentId: 'zinc_copper_galvanic_cell_potential_gibbs_energy_calculation_experiment',
        contentKey: 'components'
    },
    {
        id: 'gibbsEnergyInChemicalReactions',
        label: 'Gibbs Energy in Chemical Reactions',
        sectionNumber: 6,
        subTopic: 'gibbsFreeEnergy',
        specificItems: ['gibbsEnergyInChemicalReactions'],
        diagramId: 'coupledReactionGibbsEnergyTransferDiagram',
        experimentId: 'atp_coupled_unfavourable_reaction_biological_energy_transduction_experiment',
        contentKey: 'components'
    },
    {
        id: 'pressureAndActivityDependence',
        label: 'Pressure and Activity Dependence',
        sectionNumber: 7,
        subTopic: 'gibbsFreeEnergy',
        specificItems: ['pressureAndActivityDependence'],
        diagramId: 'reactionQuotientQvsKGibbsEnergyDirectionDiagram',
        experimentId: 'le_chatelier_pressure_concentration_gibbs_energy_shift_experiment',
        contentKey: 'components'
    },
    {
        id: 'gibbsEnergyAndPhaseEquilibria',
        label: 'Gibbs Energy and Phase Equilibria',
        sectionNumber: 8,
        subTopic: 'gibbsFreeEnergy',
        specificItems: ['gibbsEnergyAndPhaseEquilibria'],
        diagramId: 'clausiusClapeyronSlopePhaseTransitionPressureTemperatureDiagram',
        experimentId: 'boiling_point_elevation_pressure_gibbs_phase_equilibrium_experiment',
        contentKey: 'components'
    },
    {
        id: 'gibbsEnergyInBiologicalSystems',
        label: 'Gibbs Energy in Biological Systems',
        sectionNumber: 9,
        subTopic: 'gibbsFreeEnergy',
        specificItems: ['gibbsEnergyInBiologicalSystems'],
        diagramId: 'atpHydrolysisGibbsEnergyBiologicalCouplingDiagram',
        experimentId: 'membrane_transport_electrochemical_gradient_gibbs_energy_calculation_experiment',
        contentKey: 'components'
    },
    {
        id: 'industrialAndEnvironmentalApplications',
        label: 'Industrial and Environmental Applications',
        sectionNumber: 10,
        subTopic: 'gibbsFreeEnergy',
        specificItems: ['industrialAndEnvironmentalApplications'],
        diagramId: 'ellinghamDiagramMetalOxideReductionTemperaturePlot',
        experimentId: 'haber_process_temperature_pressure_gibbs_equilibrium_optimisation_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'calorimetry',
        specificItems: ['foundations'],
        diagramId: 'specificHeatCapacityMassTemperatureHeatTriangleDiagram',
        experimentId: 'specific_heat_capacity_water_vs_metal_block_heating_experiment',
        contentKey: 'components'
    },
    {
        id: 'fundamentalCalorimetryEquation',
        label: 'Fundamental Calorimetry Equation',
        sectionNumber: 2,
        subTopic: 'calorimetry',
        specificItems: ['fundamentalCalorimetryEquation'],
        diagramId: 'qMcDeltaTVariableRelationshipDiagram',
        experimentId: 'heat_conservation_hot_metal_cold_water_final_temperature_experiment',
        contentKey: 'components'
    },
    {
        id: 'typesOfCalorimeters',
        label: 'Types of Calorimeters',
        sectionNumber: 3,
        subTopic: 'calorimetry',
        specificItems: ['typesOfCalorimeters'],
        diagramId: 'calorimetryTypesDesignComparisonAnnotatedDiagram',
        experimentId: 'polystyrene_cup_vs_bomb_calorimeter_accuracy_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'constantPressureCalorimetry',
        label: 'Constant Pressure Calorimetry',
        sectionNumber: 4,
        subTopic: 'calorimetry',
        specificItems: ['constantPressureCalorimetry'],
        diagramId: 'constantPressurePolystyreneCupSetupAnnotatedDiagram',
        experimentId: 'enthalpy_of_neutralisation_hcl_naoh_polystyrene_cup_experiment',
        contentKey: 'components'
    },
    {
        id: 'constantVolumeCalorimetry',
        label: 'Constant Volume Calorimetry',
        sectionNumber: 5,
        subTopic: 'calorimetry',
        specificItems: ['constantVolumeCalorimetry'],
        diagramId: 'bombCalorimeterCrossSectionAnnotatedDiagram',
        experimentId: 'bomb_calorimeter_benzoic_acid_calibration_octane_combustion_experiment',
        contentKey: 'components'
    },
    {
        id: 'hessLawAndIndirectCalorimetry',
        label: "Hess's Law and Indirect Calorimetry",
        sectionNumber: 6,
        subTopic: 'calorimetry',
        specificItems: ['hessLawAndIndirectCalorimetry'],
        diagramId: 'hessLawIndirectRouteEnergyLevelCycleCalorimetryDiagram',
        experimentId: 'hess_law_indirect_enthalpy_co_formation_three_step_calorimetry_experiment',
        contentKey: 'components'
    },
    {
        id: 'graphicalAndDataAnalysis',
        label: 'Graphical and Data Analysis',
        sectionNumber: 7,
        subTopic: 'calorimetry',
        specificItems: ['graphicalAndDataAnalysis'],
        diagramId: 'temperatureTimeExtrapolationHeatLossCorrectionGraph',
        experimentId: 'temperature_time_graph_extrapolation_heat_loss_correction_experiment',
        contentKey: 'components'
    },
    {
        id: 'sourcesOfErrorAndUncertainty',
        label: 'Sources of Error and Uncertainty',
        sectionNumber: 8,
        subTopic: 'calorimetry',
        specificItems: ['sourcesOfErrorAndUncertainty'],
        diagramId: 'calorimetryErrorSourcesSystematicRandomComparisonChart',
        experimentId: 'incomplete_combustion_heat_loss_error_analysis_spirit_lamp_experiment',
        contentKey: 'components'
    },
    {
        id: 'calorimetryInFoodAndNutritionScience',
        label: 'Calorimetry in Food and Nutrition Science',
        sectionNumber: 9,
        subTopic: 'calorimetry',
        specificItems: ['calorimetryInFoodAndNutritionScience'],
        diagramId: 'atwaterFactorMacronutrientCaloricDensityComparisonChart',
        experimentId: 'food_calorimetry_crisp_burning_energy_per_gram_calculation_experiment',
        contentKey: 'components'
    },
    {
        id: 'advancedAndIndustrialApplications',
        label: 'Advanced and Industrial Applications',
        sectionNumber: 10,
        subTopic: 'calorimetry',
        specificItems: ['advancedAndIndustrialApplications'],
        diagramId: 'differentialScanningCalorimeterHeatFlowPeakAnnotatedDiagram',
        experimentId: 'dsc_melting_point_polymorph_identification_pharmaceutical_experiment',
        contentKey: 'components'
    }
];
