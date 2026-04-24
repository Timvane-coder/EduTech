// ========================================
// Nucleic Acid Workbook Test
// Handles all filtered nucleic acid contents:
//   1. Nucleotides     → chromosomes diagram       + overton_lipid_experiment
//   2. DNA Structure   → dnaStructure diagram      + fischer_lock_and_key
//   3. RNA Structure   → rnaStructure diagram      + prouts_classification
//   4. Central Dogma   → dnaReplication diagram    + sangers_insulin_sequencing
//   5. Genetic Code    → codonChart diagram        + chevreuls_fatty_acids
//   6. Chloroplasts    → chloroplastDiagram diagram + priestley_photosynthesis
//
// Content rendering: generic recursive walk of workbook output.
// No content is re-defined here — data is sourced entirely from
// handleMolecularProblem → getMolecularContent → filterContentByParameters.
// ========================================

import { EnhancedMolecularBiologyWorkbook } from './molecularbiology.js';
import {
    Document, Packer, Paragraph, TextRun, HeadingLevel,
    AlignmentType, ImageRun, LevelFormat
} from 'docx';
import * as fs from 'fs';
import * as path from 'path';

// ========================================
// SECTION CONFIGURATION
// specificItems drives filterContentByParameters inside the workbook.
// contentKey is the top-level key on workbook.currentContent to read from.
// ========================================
import { assignSectionNumbers } from './sectionNumberGenerator.js';

const rawSections = [ /* your objects without sectionNumber */ ];


const NUCLEIC_ACID_SECTIONS = [

assignSectionNumbers(rawSections, 131);


    /**
    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'mendelianGenetics',
        specificItems: ['foundations'],
        diagramId: 'mendelPeaPlantSevenTraitsAnnotatedDiagram',
        experimentId: 'pea_plant_true_breeding_observable_trait_classification_activity',
        contentKey: 'components'
    },
    {
        id: 'lawsOfInheritance',
        label: 'Laws of Inheritance',
        sectionNumber: 2,
        subTopic: 'mendelianGenetics',
        specificItems: ['lawsOfInheritance'],
        diagramId: 'segregationAndIndependentAssortmentMeiosisDiagram',
        experimentId: 'coin_toss_gamete_segregation_probability_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'typesOfCrosses',
        label: 'Types of Crosses',
        sectionNumber: 3,
        subTopic: 'mendelianGenetics',
        specificItems: ['typesOfCrosses'],
        diagramId: 'monohybridDihybridTestcrossComparisonDiagram',
        experimentId: 'corn_kernel_colour_monohybrid_cross_ratio_counting_experiment',
        contentKey: 'components'
    },
    {
        id: 'ratiosAndPredictions',
        label: 'Ratios and Predictions',
        sectionNumber: 4,
        subTopic: 'mendelianGenetics',
        specificItems: ['ratiosAndPredictions'],
        diagramId: 'mendelianOffspringRatioSummaryTableDiagram',
        experimentId: 'random_bead_sampling_genotypic_ratio_prediction_experiment',
        contentKey: 'components'
    },
    {
        id: 'genotypePhenotypeRelationships',
        label: 'Genotype–Phenotype Relationships',
        sectionNumber: 5,
        subTopic: 'mendelianGenetics',
        specificItems: ['genotypePhenotypeRelationships'],
        diagramId: 'genotypeToPhenotypeExpressionMappingDiagram',
        experimentId: 'tongue_rolling_earlobe_attachment_human_phenotype_survey_experiment',
        contentKey: 'components'
    },
    {
        id: 'extensionsToMendelsLaws',
        label: 'Extensions to Mendel\'s Laws',
        sectionNumber: 6,
        subTopic: 'mendelianGenetics',
        specificItems: ['extensionsToMendelsLaws'],
        diagramId: 'incompleteDominanceCodominanceEpistasisComparisonDiagram',
        experimentId: 'four_oclock_flower_incomplete_dominance_cross_phenotype_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'probabilityAndStatistics',
        label: 'Probability and Statistics in Genetics',
        sectionNumber: 7,
        subTopic: 'mendelianGenetics',
        specificItems: ['probabilityAndStatistics'],
        diagramId: 'chiSquaredGoodnesOfFitCalculationWorkflowDiagram',
        experimentId: 'chi_squared_test_drosophila_offspring_ratio_goodness_of_fit_experiment',
        contentKey: 'components'
    },
    {
        id: 'experimentalMethods',
        label: 'Experimental Methods',
        sectionNumber: 8,
        subTopic: 'mendelianGenetics',
        specificItems: ['experimentalMethods'],
        diagramId: 'controlledCrossPollinationEmasculationStepsDiagram',
        experimentId: 'rapid_cycling_brassica_controlled_cross_pollination_f1_f2_generation_experiment',
        contentKey: 'components'
    },
    {
        id: 'mendelianGeneticsInHumans',
        label: 'Mendelian Genetics in Humans',
        sectionNumber: 9,
        subTopic: 'mendelianGenetics',
        specificItems: ['mendelianGeneticsInHumans'],
        diagramId: 'humanAutosomalRecessiveDominantCarrierRiskDiagram',
        experimentId: 'abo_blood_type_carrier_risk_calculation_family_pedigree_activity',
        contentKey: 'components'
    },
    {
        id: 'limitationsOfMendelianGenetics',
        label: 'Limitations of Mendelian Genetics',
        sectionNumber: 10,
        subTopic: 'mendelianGenetics',
        specificItems: ['limitationsOfMendelianGenetics'],
        diagramId: 'linkedGenesRecombinationFrequencyDeviationDiagram',
        experimentId: 'drosophila_linked_gene_testcross_ratio_deviation_detection_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 11,
        subTopic: 'punnettSquares',
        specificItems: ['foundations'],
        diagramId: 'punnettSquarePurposeAndStructureAnnotatedDiagram',
        experimentId: 'coin_flip_gamete_combination_grid_construction_introduction_experiment',
        contentKey: 'components'
    },
    {
        id: 'constructingPunnettSquares',
        label: 'Constructing Punnett Squares',
        sectionNumber: 12,
        subTopic: 'punnettSquares',
        specificItems: ['constructingPunnettSquares'],
        diagramId: 'twoByTwoAndFourByFourGridConstructionStepsDiagram',
        experimentId: 'monohybrid_dihybrid_punnett_square_stepwise_construction_worksheet_experiment',
        contentKey: 'components'
    },
    {
        id: 'readingAndInterpreting',
        label: 'Reading and Interpreting Punnett Squares',
        sectionNumber: 13,
        subTopic: 'punnettSquares',
        specificItems: ['readingAndInterpreting'],
        diagramId: 'genotypicPhenotypicRatioExtractionAnnotatedGridDiagram',
        experimentId: 'completed_punnett_square_ratio_extraction_and_probability_calculation_activity',
        contentKey: 'components'
    },
    {
        id: 'typesOfCrosses',
        label: 'Types of Punnett Square Crosses',
        sectionNumber: 14,
        subTopic: 'punnettSquares',
        specificItems: ['typesOfCrosses'],
        diagramId: 'monohybridDihybridSexLinkedGridTypeComparisonDiagram',
        experimentId: 'x_linked_colour_blindness_punnett_square_carrier_affected_offspring_prediction_experiment',
        contentKey: 'components'
    },
    {
        id: 'nonMendelianApplications',
        label: 'Non-Mendelian Applications',
        sectionNumber: 15,
        subTopic: 'punnettSquares',
        specificItems: ['nonMendelianApplications'],
        diagramId: 'incompleteDominanceCodominanceABOBloodTypeGridDiagram',
        experimentId: 'abo_blood_type_cross_punnett_square_offspring_blood_group_prediction_experiment',
        contentKey: 'components'
    },
    {
        id: 'forkedLineMethod',
        label: 'Forked-Line (Branch Diagram) Method',
        sectionNumber: 16,
        subTopic: 'punnettSquares',
        specificItems: ['forkedLineMethod'],
        diagramId: 'trihybridForkedLineBranchProbabilityDiagram',
        experimentId: 'three_gene_forked_line_versus_64_cell_grid_efficiency_comparison_activity',
        contentKey: 'components'
    },
    {
        id: 'calculatingRatiosAndProbabilities',
        label: 'Calculating Ratios and Probabilities',
        sectionNumber: 17,
        subTopic: 'punnettSquares',
        specificItems: ['calculatingRatiosAndProbabilities'],
        diagramId: 'fractionRatioPercentageConversionFromGridDiagram',
        experimentId: 'dihybrid_cross_probability_fraction_ratio_percentage_extraction_drill_experiment',
        contentKey: 'components'
    },
    {
        id: 'specialGridConfigurations',
        label: 'Special Grid Configurations',
        sectionNumber: 18,
        subTopic: 'punnettSquares',
        specificItems: ['specialGridConfigurations'],
        diagramId: 'asymmetricAndPartiallyHomozygousParentGridLayoutDiagram',
        experimentId: 'reduced_grid_size_partially_homozygous_parent_cross_construction_activity',
        contentKey: 'components'
    },
    {
        id: 'commonErrorsAndMisconceptions',
        label: 'Common Errors and Misconceptions',
        sectionNumber: 19,
        subTopic: 'punnettSquares',
        specificItems: ['commonErrorsAndMisconceptions'],
        diagramId: 'annotatedErroredPunnettSquareCorrectVsIncorrectDiagram',
        experimentId: 'punnett_square_error_identification_and_correction_peer_review_activity',
        contentKey: 'components'
    },
    {
        id: 'applicationsAndExtensions',
        label: 'Applications and Extensions',
        sectionNumber: 20,
        subTopic: 'punnettSquares',
        specificItems: ['applicationsAndExtensions'],
        diagramId: 'humanDiseaseRiskAndBreedingOutcomePunnettApplicationDiagram',
        experimentId: 'labrador_coat_colour_dihybrid_punnett_square_litter_prediction_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 21,
        subTopic: 'inheritancePatterns',
        specificItems: ['foundations'],
        diagramId: 'inheritancePatternClassificationFrameworkDiagram',
        experimentId: 'human_trait_autosomal_versus_sex_linked_classification_survey_experiment',
        contentKey: 'components'
    },
    {
        id: 'autosomalInheritance',
        label: 'Autosomal Inheritance Patterns',
        sectionNumber: 22,
        subTopic: 'inheritancePatterns',
        specificItems: ['autosomalInheritance'],
        diagramId: 'autosomalDominantRecessivePedigreePatternComparisonDiagram',
        experimentId: 'autosomal_dominant_recessive_simulated_pedigree_construction_and_ratio_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'sexLinkedInheritance',
        label: 'Sex-Linked Inheritance Patterns',
        sectionNumber: 23,
        subTopic: 'inheritancePatterns',
        specificItems: ['sexLinkedInheritance'],
        diagramId: 'xLinkedRecessiveDominantYLinkedPedigreePatternDiagram',
        experimentId: 'colour_blindness_ishihara_plate_sex_linked_inheritance_class_frequency_experiment',
        contentKey: 'components'
    },
    {
        id: 'pedigreeAnalysis',
        label: 'Pedigree Analysis',
        sectionNumber: 24,
        subTopic: 'inheritancePatterns',
        specificItems: ['pedigreeAnalysis'],
        diagramId: 'pedigreeSymbolsObligateCarrierIdentificationAnnotatedDiagram',
        experimentId: 'multi_generation_mystery_pedigree_inheritance_pattern_deduction_experiment',
        contentKey: 'components'
    },
    {
        id: 'dominanceVariationPatterns',
        label: 'Dominance Variation Patterns',
        sectionNumber: 25,
        subTopic: 'inheritancePatterns',
        specificItems: ['dominanceVariationPatterns'],
        diagramId: 'completeDominanceIncompleteDominanceCodominanceHeterozygotePhenotypeComparisonDiagram',
        experimentId: 'snapdragon_flower_colour_incomplete_dominance_f1_f2_cross_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'polygenicAndMultifactorial',
        label: 'Polygenic and Multifactorial Inheritance',
        sectionNumber: 26,
        subTopic: 'inheritancePatterns',
        specificItems: ['polygenicAndMultifactorial'],
        diagramId: 'polygenicTraitNormalDistributionBellCurveAdditiveLociDiagram',
        experimentId: 'class_height_measurement_normal_distribution_polygenic_trait_plotting_experiment',
        contentKey: 'components'
    },
    {
        id: 'maternalAndCytoplasmicInheritance',
        label: 'Maternal and Cytoplasmic Inheritance',
        sectionNumber: 27,
        subTopic: 'inheritancePatterns',
        specificItems: ['maternalAndCytoplasmicInheritance'],
        diagramId: 'mitochondrialMatrilinealTransmissionPedigreePatternDiagram',
        experimentId: 'mitochondrial_inheritance_pedigree_pattern_maternal_versus_autosomal_distinction_activity',
        contentKey: 'components'
    },
    {
        id: 'genomicImprinting',
        label: 'Genomic Imprinting',
        sectionNumber: 28,
        subTopic: 'inheritancePatterns',
        specificItems: ['genomicImprinting'],
        diagramId: 'praderWilliAngelmanChromosome15ParentalOriginImprintingDiagram',
        experimentId: 'uniparental_disomy_imprinting_case_study_parent_of_origin_deduction_activity',
        contentKey: 'components'
    },
    {
        id: 'epistasisPatterns',
        label: 'Epistasis Patterns',
        sectionNumber: 29,
        subTopic: 'inheritancePatterns',
        specificItems: ['epistasisPatterns'],
        diagramId: 'epistasisRatioDeviationTypesComparisonSummaryDiagram',
        experimentId: 'labrador_coat_colour_recessive_epistasis_9to3to4_ratio_cross_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'linkageAndRecombination',
        label: 'Linkage and Recombination',
        sectionNumber: 30,
        subTopic: 'inheritancePatterns',
        specificItems: ['linkageAndRecombination'],
        diagramId: 'crossingOverRecombinantVsParentalOffspringFrequencyMapDiagram',
        experimentId: 'drosophila_two_point_testcross_recombination_frequency_genetic_map_construction_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 31,
        subTopic: 'chromosomesKaryotypes',
        specificItems: ['foundations'],
        diagramId: 'chromosomeAnatomyCentromereTelomereArmsNucleosomeDiagram',
        experimentId: 'onion_root_tip_squash_chromosome_structure_microscopy_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'chromosomeNumbersAndPloidy',
        label: 'Chromosome Numbers and Ploidy',
        sectionNumber: 32,
        subTopic: 'chromosomesKaryotypes',
        specificItems: ['chromosomeNumbersAndPloidy'],
        diagramId: 'haploidDiploidPolyploidChromosomeSetComparisonDiagram',
        experimentId: 'species_chromosome_number_comparison_table_ploidy_level_classification_activity',
        contentKey: 'components'
    },
    {
        id: 'cellCycleAndChromosomeBehaviour',
        label: 'The Cell Cycle and Chromosome Behaviour',
        sectionNumber: 33,
        subTopic: 'chromosomesKaryotypes',
        specificItems: ['cellCycleAndChromosomeBehaviour'],
        diagramId: 'mitosisMeiosisChromosomeSegregationNondisjunctionComparisonDiagram',
        experimentId: 'onion_root_tip_mitosis_phase_identification_chromosome_counting_experiment',
        contentKey: 'components'
    },
    {
        id: 'karyotypeDefinitionAndPreparation',
        label: 'Karyotype — Definition and Preparation',
        sectionNumber: 34,
        subTopic: 'chromosomesKaryotypes',
        specificItems: ['karyotypeDefinitionAndPreparation'],
        diagramId: 'karyotypePreprationColchicineHypotonicFixationStepsFlowchartDiagram',
        experimentId: 'simulated_karyotype_chromosome_cutting_sorting_pairing_from_photomicrograph_experiment',
        contentKey: 'components'
    },
    {
        id: 'chromosomeBanding',
        label: 'Chromosome Banding and Analysis',
        sectionNumber: 35,
        subTopic: 'chromosomesKaryotypes',
        specificItems: ['chromosomeBanding'],
        diagramId: 'gBandingPatternIdeogramHumanChromosomePairAnnotatedDiagram',
        experimentId: 'g_banded_karyogram_chromosome_pair_identification_and_iscn_notation_exercise_experiment',
        contentKey: 'components'
    },
    {
        id: 'humanKaryotype',
        label: 'Human Karyotype',
        sectionNumber: 36,
        subTopic: 'chromosomesKaryotypes',
        specificItems: ['humanKaryotype'],
        diagramId: 'normal46XXAnd46XYKaryogramAnnotatedDenverGroupsDiagram',
        experimentId: 'normal_male_female_karyogram_comparison_autosome_sex_chromosome_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'numericalChromosomalAbnormalities',
        label: 'Numerical Chromosomal Abnormalities',
        sectionNumber: 37,
        subTopic: 'chromosomesKaryotypes',
        specificItems: ['numericalChromosomalAbnormalities'],
        diagramId: 'nondisjunctionMechanismTrisomyMonosomyGameteDiagram',
        experimentId: 'trisomy_21_karyogram_chromosome_count_and_clinical_feature_correlation_activity',
        contentKey: 'components'
    },
    {
        id: 'structuralChromosomalAbnormalities',
        label: 'Structural Chromosomal Abnormalities',
        sectionNumber: 38,
        subTopic: 'chromosomesKaryotypes',
        specificItems: ['structuralChromosomalAbnormalities'],
        diagramId: 'deletionDuplicationInversionRobertsonianTranslocationStructuralRearrangementDiagram',
        experimentId: 'chromosome_rearrangement_paper_model_balanced_unbalanced_offspring_segregation_experiment',
        contentKey: 'components'
    },
    {
        id: 'sexChromosomeBiology',
        label: 'Sex Chromosome Biology',
        sectionNumber: 39,
        subTopic: 'chromosomesKaryotypes',
        specificItems: ['sexChromosomeBiology'],
        diagramId: 'xInactivationBarrBodyLyonHypothesisMosaicismDiagram',
        experimentId: 'barr_body_buccal_smear_microscopy_sex_chromatin_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'molecularCytogeneticsAndClinicalApplications',
        label: 'Molecular Cytogenetics and Clinical Applications',
        sectionNumber: 40,
        subTopic: 'chromosomesKaryotypes',
        specificItems: ['molecularCytogeneticsAndClinicalApplications'],
        diagramId: 'fishProbeHybridisationArrayCGHCopyNumberVariantDetectionDiagram',
        experimentId: 'simulated_fish_signal_pattern_microdeletion_diagnosis_interpretation_activity',
        contentKey: 'components'
    },

   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 41,
        subTopic: 'geneticDisorders',
        specificItems: ['foundations'],
        diagramId: 'geneticDisorderClassificationByMechanismAndChromosomeLocationDiagram',
        experimentId: 'genetic_disorder_classification_sorting_single_gene_chromosomal_multifactorial_activity',
        contentKey: 'components'
    },
    {
        id: 'typesOfMutations',
        label: 'Types of Mutations',
        sectionNumber: 42,
        subTopic: 'geneticDisorders',
        specificItems: ['typesOfMutations'],
        diagramId: 'pointMutationFrameshiftNonsenseSplicingTripletExpansionConsequencesDiagram',
        experimentId: 'dna_codon_mutation_type_simulation_amino_acid_change_consequence_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'autosomaldominantDisorders',
        label: 'Autosomal Dominant Disorders',
        sectionNumber: 43,
        subTopic: 'geneticDisorders',
        specificItems: ['autosomaldominantDisorders'],
        diagramId: 'autosomaldominantPedigreeVerticalTransmissionHuntingtonsMarfanExamplesDiagram',
        experimentId: 'huntingtons_disease_cag_repeat_length_penetrance_onset_age_correlation_case_study_experiment',
        contentKey: 'components'
    },
    {
        id: 'autosomalRecessiveDisorders',
        label: 'Autosomal Recessive Disorders',
        sectionNumber: 44,
        subTopic: 'geneticDisorders',
        specificItems: ['autosomalRecessiveDisorders'],
        diagramId: 'autosomalRecessiveCarrierCrossHardyWeinbergCarrierFrequencyDiagram',
        experimentId: 'cystic_fibrosis_cftr_mutation_carrier_frequency_hardy_weinberg_calculation_experiment',
        contentKey: 'components'
    },
    {
        id: 'xLinkedDisorders',
        label: 'X-Linked Disorders',
        sectionNumber: 45,
        subTopic: 'geneticDisorders',
        specificItems: ['xLinkedDisorders'],
        diagramId: 'xLinkedRecessiveDomDecDMDHaemophiliaFragileXPedigreePatternDiagram',
        experimentId: 'haemophilia_a_x_linked_carrier_mother_affected_son_risk_punnett_pedigree_experiment',
        contentKey: 'components'
    },
    {
        id: 'chromosomalDisorders',
        label: 'Chromosomal Disorders',
        sectionNumber: 46,
        subTopic: 'geneticDisorders',
        specificItems: ['chromosomalDisorders'],
        diagramId: 'chromosomalDisorderKaryotypeClinicalFeatureSummaryReferenceDiagram',
        experimentId: 'trisomy_turner_klinefelter_karyotype_clinical_feature_matching_case_study_activity',
        contentKey: 'components'
    },
    {
        id: 'inbornErrorsOfMetabolism',
        label: 'Inborn Errors of Metabolism',
        sectionNumber: 47,
        subTopic: 'geneticDisorders',
        specificItems: ['inbornErrorsOfMetabolism'],
        diagramId: 'metabolicBlockSubstrateAccumulationProductDeficiencyPathwayDiagram',
        experimentId: 'pku_phenylalanine_hydroxylase_deficiency_metabolic_block_dietary_treatment_modelling_experiment',
        contentKey: 'components'
    },
    {
        id: 'multifactorialGeneticDisorders',
        label: 'Multifactorial Genetic Disorders',
        sectionNumber: 48,
        subTopic: 'geneticDisorders',
        specificItems: ['multifactorialGeneticDisorders'],
        diagramId: 'polygenicRiskScoreGWASManhattanPlotThresholdLiabilityModelDiagram',
        experimentId: 'type2_diabetes_genetic_versus_environmental_risk_factor_twin_study_heritability_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'diagnosisOfGeneticDisorders',
        label: 'Diagnosis of Genetic Disorders',
        sectionNumber: 49,
        subTopic: 'geneticDisorders',
        specificItems: ['diagnosisOfGeneticDisorders'],
        diagramId: 'geneticDiagnosticPathwayBiochemicalCytogeneticMolecularDecisionTreeDiagram',
        experimentId: 'newborn_screening_guthrie_heel_prick_pku_tandem_mass_spectrometry_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'treatmentCounsellingAndEthics',
        label: 'Treatment, Counselling, and Ethics',
        sectionNumber: 50,
        subTopic: 'geneticDisorders',
        specificItems: ['treatmentCounsellingAndEthics'],
        diagramId: 'geneTherapyERTSmallMoleculeGeneEditingTreatmentStrategyComparisonDiagram',
        experimentId: 'crispr_cas9_gene_editing_sickle_cell_disease_ethical_implications_structured_debate_experiment',
        contentKey: 'components'
    },



   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 51,
        subTopic: 'microbialMetabolism',
        specificItems: ['foundations'],
        diagramId: 'catabolicAnabolicEnergyFlowDiagram',
        experimentId: 'atp_production_yeast_fermentation_co2_balloon_experiment',
        contentKey: 'components'
    },
    {
        id: 'energyAcquisitionStrategies',
        label: 'Energy Acquisition Strategies',
        sectionNumber: 52,
        subTopic: 'microbialMetabolism',
        specificItems: ['energyAcquisitionStrategies'],
        diagramId: 'microbialNutritionalClassificationMatrix',
        experimentId: 'chemolithotroph_vs_heterotroph_growth_media_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'glycolysisAndSLP',
        label: 'Glycolysis and Substrate-Level Phosphorylation',
        sectionNumber: 53,
        subTopic: 'microbialMetabolism',
        specificItems: ['glycolysisAndSLP'],
        diagramId: 'glycolysisEnergyInvestmentPayoffStepDiagram',
        experimentId: 'glycolysis_rate_glucose_concentration_spectrophotometry_experiment',
        contentKey: 'components'
    },
    {
        id: 'pyruvateAndTCA',
        label: 'Pyruvate Fate and the TCA Cycle',
        sectionNumber: 54,
        subTopic: 'microbialMetabolism',
        specificItems: ['pyruvateAndTCA'],
        diagramId: 'tcaCycleIntermediatesAndYieldDiagram',
        experimentId: 'tca_cycle_intermediate_detection_succinate_dehydrogenase_inhibition_experiment',
        contentKey: 'components'
    },
    {
        id: 'electronTransportAndOxPhos',
        label: 'Electron Transport Chain and Oxidative Phosphorylation',
        sectionNumber: 55,
        subTopic: 'microbialMetabolism',
        specificItems: ['electronTransportAndOxPhos'],
        diagramId: 'electronTransportChainComplexesProtonPumpingDiagram',
        experimentId: 'etc_inhibitor_dnp_uncoupler_atp_yield_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'fermentation',
        label: 'Fermentation',
        sectionNumber: 56,
        subTopic: 'microbialMetabolism',
        specificItems: ['fermentation'],
        diagramId: 'fermentationPathwayProductsComparisonChart',
        experimentId: 'mixed_acid_vs_butanediol_fermentation_methyl_red_voges_proskauer_experiment',
        contentKey: 'components'
    },
    {
        id: 'chemolithotrophy',
        label: 'Chemolithotrophy',
        sectionNumber: 57,
        subTopic: 'microbialMetabolism',
        specificItems: ['chemolithotrophy'],
        diagramId: 'nitrificationSulfurIronOxidationElectronDonorDiagram',
        experimentId: 'nitrification_ammonia_to_nitrate_soil_column_incubation_experiment',
        contentKey: 'components'
    },
    {
        id: 'microbialPhotosynthesis',
        label: 'Photosynthesis in Microbes',
        sectionNumber: 58,
        subTopic: 'microbialMetabolism',
        specificItems: ['microbialPhotosynthesis'],
        diagramId: 'oxygenicVsAnoxygenicPhotosynthesisElectronFlowDiagram',
        experimentId: 'cyanobacteria_oxygen_evolution_light_wavelength_experiment',
        contentKey: 'components'
    },
    {
        id: 'biosyntheticPathways',
        label: 'Biosynthetic (Anabolic) Pathways',
        sectionNumber: 59,
        subTopic: 'microbialMetabolism',
        specificItems: ['biosyntheticPathways'],
        diagramId: 'aminoAcidFamilyBiosyntheticPrecursorDiagram',
        experimentId: 'auxotroph_complementation_minimal_media_growth_requirement_experiment',
        contentKey: 'components'
    },
    {
        id: 'metabolicRegulation',
        label: 'Metabolic Regulation',
        sectionNumber: 60,
        subTopic: 'microbialMetabolism',
        specificItems: ['metabolicRegulation'],
        diagramId: 'feedbackInhibitionAllostericEnzymePathwayDiagram',
        experimentId: 'lac_operon_induction_repression_beta_galactosidase_assay_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 61,
        subTopic: 'microbialControl',
        specificItems: ['foundations'],
        diagramId: 'sterilisationDisinfectionAntisepsisSanitisationSpectrumDiagram',
        experimentId: 'microbial_death_kinetics_d_value_determination_autoclave_experiment',
        contentKey: 'components'
    },
    {
        id: 'physicalControlMethods',
        label: 'Physical Control Methods',
        sectionNumber: 62,
        subTopic: 'microbialControl',
        specificItems: ['physicalControlMethods'],
        diagramId: 'physicalControlAgentsMoistDryHeatRadiationFiltrationDiagram',
        experimentId: 'autoclave_vs_dry_oven_vs_uv_sporicidal_efficacy_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'chemicalControlMethods',
        label: 'Chemical Control Methods',
        sectionNumber: 63,
        subTopic: 'microbialControl',
        specificItems: ['chemicalControlMethods'],
        diagramId: 'chemicalDisinfectantMechanismsTargetSitesDiagram',
        experimentId: 'phenol_coefficient_test_disinfectant_efficacy_zone_inhibition_experiment',
        contentKey: 'components'
    },
    {
        id: 'antibiotics',
        label: 'Antimicrobial Drugs — Antibiotics',
        sectionNumber: 64,
        subTopic: 'microbialControl',
        specificItems: ['antibiotics'],
        diagramId: 'antibioticTargetSitesBacterialCellDiagram',
        experimentId: 'kirby_bauer_disk_diffusion_antibiotic_susceptibility_experiment',
        contentKey: 'components'
    },
    {
        id: 'antifungalAntiviralAntiparasitic',
        label: 'Antifungal, Antiviral, and Antiparasitic Agents',
        sectionNumber: 65,
        subTopic: 'microbialControl',
        specificItems: ['antifungalAntiviralAntiparasitic'],
        diagramId: 'antifungalTargetErgosterolVsCholesterolMembraneDiagram',
        experimentId: 'antifungal_mic_broth_microdilution_candida_susceptibility_experiment',
        contentKey: 'components'
    },
    {
        id: 'antimicrobialResistance',
        label: 'Antimicrobial Resistance',
        sectionNumber: 66,
        subTopic: 'microbialControl',
        specificItems: ['antimicrobialResistance'],
        diagramId: 'amrMechanismsEnzymeTargetEffluxPermeabilityDiagram',
        experimentId: 'beta_lactamase_detection_nitrocefin_hydrolysis_mrsa_screening_experiment',
        contentKey: 'components'
    },
    {
        id: 'practicalApplications',
        label: 'Disinfection in Healthcare and Food Settings',
        sectionNumber: 67,
        subTopic: 'microbialControl',
        specificItems: ['practicalApplications'],
        diagramId: 'spauldingClassificationCriticalSemicriticalNoncriticalDiagram',
        experimentId: 'hand_hygiene_glo_germ_uv_light_compliance_visualisation_experiment',
        contentKey: 'components'
    },
    {
        id: 'biofilmResistance',
        label: 'Biofilm Resistance to Control Measures',
        sectionNumber: 68,
        subTopic: 'microbialControl',
        specificItems: ['biofilmResistance'],
        diagramId: 'biofilmFormationStagesEpsMatrixResistanceDiagram',
        experimentId: 'crystal_violet_biofilm_quantification_antibiotic_tolerance_comparison_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 71,
        subTopic: 'pathogenicMicrobes',
        specificItems: ['foundations'],
        diagramId: 'hostPathogenRelationshipInfectionDiseaseSpectrumDiagram',
        experimentId: 'kochs_postulates_fulfilment_mouse_inoculation_reisolation_experiment',
        contentKey: 'components'
    },
    {
        id: 'bacterialVirulenceFactors',
        label: 'Bacterial Virulence Factors',
        sectionNumber: 72,
        subTopic: 'pathogenicMicrobes',
        specificItems: ['bacterialVirulenceFactors'],
        diagramId: 'virulenceFactorTypesToxinsCapsuleSecretionSystemsDiagram',
        experimentId: 'exotoxin_vs_endotoxin_limulus_amoebocyte_lysate_assay_experiment',
        contentKey: 'components'
    },
    {
        id: 'importantBacterialPathogens',
        label: 'Important Bacterial Pathogens',
        sectionNumber: 73,
        subTopic: 'pathogenicMicrobes',
        specificItems: ['importantBacterialPathogens'],
        diagramId: 'bacterialPathogenSyndromeOrganSystemTargetsDiagram',
        experimentId: 'selective_differential_media_bacterial_pathogen_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'viralPathogenesis',
        label: 'Viral Pathogenesis',
        sectionNumber: 74,
        subTopic: 'pathogenicMicrobes',
        specificItems: ['viralPathogenesis'],
        diagramId: 'viralReplicationCycleHostCellDamageMechanismsDiagram',
        experimentId: 'plaque_assay_viral_titre_cytopathic_effect_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'fungalPathogens',
        label: 'Fungal Pathogens',
        sectionNumber: 75,
        subTopic: 'pathogenicMicrobes',
        specificItems: ['fungalPathogens'],
        diagramId: 'dimorphicFungiYeastMouldTemperatureFormSwitchDiagram',
        experimentId: 'candida_germ_tube_test_dimorphism_serum_induction_experiment',
        contentKey: 'components'
    },
    {
        id: 'parasiticPathogens',
        label: 'Parasitic Pathogens',
        sectionNumber: 76,
        subTopic: 'pathogenicMicrobes',
        specificItems: ['parasiticPathogens'],
        diagramId: 'plasmodiumLifecycleMosquitoHumanErythrocyticStageDiagram',
        experimentId: 'thin_blood_smear_plasmodium_species_morphology_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'hostDefences',
        label: 'Host Defences and Innate Immunity',
        sectionNumber: 77,
        subTopic: 'pathogenicMicrobes',
        specificItems: ['hostDefences'],
        diagramId: 'innateAdaptiveImmunityPRRComplementPhagocytosisDiagram',
        experimentId: 'neutrophil_phagocytosis_respiratory_burst_nbt_reduction_experiment',
        contentKey: 'components'
    },
    {
        id: 'epidemiology',
        label: 'Epidemiology of Infectious Disease',
        sectionNumber: 78,
        subTopic: 'pathogenicMicrobes',
        specificItems: ['epidemiology'],
        diagramId: 'reproductionNumberR0HerdImmunityThresholdTransmissionRoutesDiagram',
        experimentId: 'simulated_disease_outbreak_transmission_chain_contact_tracing_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 81,
        subTopic: 'microbialEcology',
        specificItems: ['foundations'],
        diagramId: 'microbialAbundanceBiomassGlobalDistributionDiagram',
        experimentId: 'soil_dilution_plating_viable_count_culturable_diversity_experiment',
        contentKey: 'components'
    },
    {
        id: 'biogeochemicalCycles',
        label: 'Biogeochemical Cycles',
        sectionNumber: 82,
        subTopic: 'microbialEcology',
        specificItems: ['biogeochemicalCycles'],
        diagramId: 'nitrogenCarbonSulfurCycleMicrobialTransformationDiagram',
        experimentId: 'denitrification_anoxic_incubation_nitrate_loss_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'soilMicrobiology',
        label: 'Soil Microbiology',
        sectionNumber: 83,
        subTopic: 'microbialEcology',
        specificItems: ['soilMicrobiology'],
        diagramId: 'rhizosphereEffectRootExudateMicrobialDensityGradientDiagram',
        experimentId: 'rhizosphere_vs_bulk_soil_cfu_comparison_dilution_plating_experiment',
        contentKey: 'components'
    },
    {
        id: 'aquaticMicrobiology',
        label: 'Aquatic Microbiology',
        sectionNumber: 84,
        subTopic: 'microbialEcology',
        specificItems: ['aquaticMicrobiology'],
        diagramId: 'oceanicZonesMicrobialCommunityLightNutrientGradientDiagram',
        experimentId: 'water_sample_coliform_membrane_filtration_most_probable_number_experiment',
        contentKey: 'components'
    },
    {
        id: 'extremophiles',
        label: 'Extreme Environments (Extremophiles)',
        sectionNumber: 85,
        subTopic: 'microbialEcology',
        specificItems: ['extremophiles'],
        diagramId: 'extremophileHabitatTemperaturePHSalinityToleranceRangeDiagram',
        experimentId: 'thermophile_isolation_hot_spring_enrichment_culture_temperature_gradient_experiment',
        contentKey: 'components'
    },
    {
        id: 'microbialCommunities',
        label: 'Microbial Communities and Ecological Interactions',
        sectionNumber: 86,
        subTopic: 'microbialEcology',
        specificItems: ['microbialCommunities'],
        diagramId: 'quorumSensingAHLSignalThresholdBiofilmFormationDiagram',
        experimentId: 'quorum_sensing_violacein_chromobacterium_cell_density_induction_experiment',
        contentKey: 'components'
    },
    {
        id: 'humanMicrobiome',
        label: 'The Human Microbiome',
        sectionNumber: 87,
        subTopic: 'microbialEcology',
        specificItems: ['humanMicrobiome'],
        diagramId: 'gutMicrobiomePhylaCompositionDysbiosis HealthDiagram',
        experimentId: 'gut_microbiome_16s_amplicon_sequencing_healthy_vs_dysbiotic_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'methodsInMicrobialEcology',
        label: 'Methods in Microbial Ecology',
        sectionNumber: 88,
        subTopic: 'microbialEcology',
        specificItems: ['methodsInMicrobialEcology'],
        diagramId: 'metagenomicsWorkflowDNAExtractionSequencingAnnotationDiagram',
        experimentId: 'environmental_dna_16s_rrna_amplification_otu_diversity_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'appliedMicrobialEcology',
        label: 'Applied Microbial Ecology',
        sectionNumber: 89,
        subTopic: 'microbialEcology',
        specificItems: ['appliedMicrobialEcology'],
        diagramId: 'bioremediation_anaerobicDigestionMicrobialConsortiumStageDiagram',
        experimentId: 'petroleum_hydrocarbon_bioremediation_respirometry_co2_evolution_experiment',
        contentKey: 'components'
    },

   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 91,
        subTopic: 'microbialGenetics',
        specificItems: ['foundations'],
        diagramId: 'bacterialChromosomeNucleoidPlasmidOrganisationDiagram',
        experimentId: 'plasmid_isolation_agarose_gel_electrophoresis_size_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'dnaReplication',
        label: 'DNA Replication',
        sectionNumber: 92,
        subTopic: 'microbialGenetics',
        specificItems: ['dnaReplication'],
        diagramId: 'bacterialReplicationForkOriCLeadingLaggingStrandDiagram',
        experimentId: 'meselson_stahl_density_gradient_semiconservative_replication_experiment',
        contentKey: 'components'
    },
    {
        id: 'transcription',
        label: 'Transcription',
        sectionNumber: 93,
        subTopic: 'microbialGenetics',
        specificItems: ['transcription'],
        diagramId: 'rnaPolymeraseSigmaFactorPromoterOpenComplexFormationDiagram',
        experimentId: 'sigma_factor_competition_heat_shock_gene_induction_northern_blot_experiment',
        contentKey: 'components'
    },
    {
        id: 'translation',
        label: 'Translation',
        sectionNumber: 94,
        subTopic: 'microbialGenetics',
        specificItems: ['translation'],
        diagramId: 'prokaryoticRibosomeShineDalgarnoInitiationElongationTerminationDiagram',
        experimentId: 'polysome_gradient_centrifugation_coupled_transcription_translation_experiment',
        contentKey: 'components'
    },
    {
        id: 'mutation',
        label: 'Mutation',
        sectionNumber: 95,
        subTopic: 'microbialGenetics',
        specificItems: ['mutation'],
        diagramId: 'mutationTypePointFrameshiftSOSRepairPathwaysDiagram',
        experimentId: 'ames_test_salmonella_his_reversion_mutagen_screening_experiment',
        contentKey: 'components'
    },
    {
        id: 'horizontalGeneTransfer',
        label: 'Horizontal Gene Transfer',
        sectionNumber: 96,
        subTopic: 'microbialGenetics',
        specificItems: ['horizontalGeneTransfer'],
        diagramId: 'transformationConjugationTransductionMobileElementDiagram',
        experimentId: 'griffith_transformation_r_s_pneumococcus_virulence_restoration_experiment',
        contentKey: 'components'
    },
    {
        id: 'recombination',
        label: 'Recombination',
        sectionNumber: 97,
        subTopic: 'microbialGenetics',
        specificItems: ['recombination'],
        diagramId: 'recAMediatedHollidayJunctionBranchMigrationResolutionDiagram',
        experimentId: 'lambda_phage_integration_excision_lysogeny_lytic_switch_experiment',
        contentKey: 'components'
    },
    {
        id: 'geneExpressionRegulation',
        label: 'Gene Expression Regulation',
        sectionNumber: 98,
        subTopic: 'microbialGenetics',
        specificItems: ['geneExpressionRegulation'],
        diagramId: 'lacOperonPositiveNegativeControlCataboliteRepression Diagram',
        experimentId: 'lac_operon_iptg_induction_catabolite_repression_miller_assay_experiment',
        contentKey: 'components'
    },
    {
        id: 'phageBiology',
        label: 'Phage Biology and Genetics',
        sectionNumber: 99,
        subTopic: 'microbialGenetics',
        specificItems: ['phageBiology'],
        diagramId: 'lyticLysogenicCycleProphageInductionBurstSizeDiagram',
        experimentId: 'bacteriophage_plaque_assay_titre_determination_one_step_growth_experiment',
        contentKey: 'components'
    },
    {
        id: 'microbialGenomicsAndTools',
        label: 'Microbial Genomics and Molecular Tools',
        sectionNumber: 100,
        subTopic: 'microbialGenetics',
        specificItems: ['microbialGenomicsAndTools'],
        diagramId: 'shortReadLongReadSequencingWorkflowGenomeAssemblyAnnotationDiagram',
        experimentId: 'crispr_cas9_gene_knockout_colony_pcr_verification_sequencing_experiment',
        contentKey: 'components'
    },



   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 101,
        subTopic: 'bacteria',
        specificItems: ['foundations'],
        diagramId: 'prokaryoteVsEukaryoteComparisonDiagram',
        experimentId: 'leeuwenhoek_wet_mount_pond_water_microscopy_experiment',
        contentKey: 'components'
    },
    {
        id: 'cellStructure',
        label: 'Cell Structure',
        sectionNumber: 102,
        subTopic: 'bacteria',
        specificItems: ['cellStructure'],
        diagramId: 'annotatedBacterialCellUltrastructureDiagram',
        experimentId: 'india_ink_negative_stain_capsule_detection_experiment',
        contentKey: 'components'
    },
    {
        id: 'morphologyAndArrangement',
        label: 'Morphology and Arrangement',
        sectionNumber: 103,
        subTopic: 'bacteria',
        specificItems: ['morphologyAndArrangement'],
        diagramId: 'bacterialShapesAndCellularArrangementChart',
        experimentId: 'bacterial_morphology_identification_from_prepared_slides_experiment',
        contentKey: 'components'
    },
    {
        id: 'gramStaining',
        label: 'Gram Staining',
        sectionNumber: 104,
        subTopic: 'bacteria',
        specificItems: ['gramStaining'],
        diagramId: 'gramStainProcedureAndCellWallCrossSection',
        experimentId: 'gram_stain_procedure_mixed_culture_classification_experiment',
        contentKey: 'components'
    },
    {
        id: 'bacterialMetabolism',
        label: 'Bacterial Metabolism',
        sectionNumber: 105,
        subTopic: 'bacteria',
        specificItems: ['bacterialMetabolism'],
        diagramId: 'metabolicCategoryMatrixAerobicAnaerobicAutotrophHeterotrophDiagram',
        experimentId: 'thioglycollate_broth_oxygen_requirement_gradient_experiment',
        contentKey: 'components'
    },
    {
        id: 'bacterialGenetics',
        label: 'Bacterial Genetics',
        sectionNumber: 106,
        subTopic: 'bacteria',
        specificItems: ['bacterialGenetics'],
        diagramId: 'horizontalGeneTransferThreePathwaysDiagram',
        experimentId: 'griffith_transformation_experiment_virulent_nonvirulent_pneumococcus_recreation',
        contentKey: 'components'
    },
    {
        id: 'bacterialPathogenesis',
        label: 'Bacterial Pathogenesis',
        sectionNumber: 107,
        subTopic: 'bacteria',
        specificItems: ['bacterialPathogenesis'],
        diagramId: 'stagesOfBacterialInfectionVirulenceFactorsDiagram',
        experimentId: 'kochs_postulates_demonstration_murine_salmonella_model_experiment',
        contentKey: 'components'
    },
    {
        id: 'antibioticResistance',
        label: 'Antibiotic Resistance',
        sectionNumber: 108,
        subTopic: 'bacteria',
        specificItems: ['antibioticResistance'],
        diagramId: 'fourMechanismsOfAntibioticResistanceDiagram',
        experimentId: 'kirby_bauer_disc_diffusion_antibiotic_sensitivity_experiment',
        contentKey: 'components'
    },
    {
        id: 'ecologyAndBeneficialRoles',
        label: 'Ecology and Beneficial Roles',
        sectionNumber: 109,
        subTopic: 'bacteria',
        specificItems: ['ecologyAndBeneficialRoles'],
        diagramId: 'bacterialNitrogenCycleStepsAndOrganismsDiagram',
        experimentId: 'rhizobium_root_nodule_nitrogen_fixation_legume_inoculation_experiment',
        contentKey: 'components'
    },
    {
        id: 'specialTopics',
        label: 'Special Topics',
        sectionNumber: 110,
        subTopic: 'bacteria',
        specificItems: ['specialTopics'],
        diagramId: 'biofilmFormationFiveStagesDiagram',
        experimentId: 'crystal_violet_biofilm_quantification_microtitre_plate_experiment',
        contentKey: 'components'
    },

   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 111,
        subTopic: 'viruses',
        specificItems: ['foundations'],
        diagramId: 'virusSizescaleComparisonToLightMicroscopyResolutionDiagram',
        experimentId: 'tobacco_mosaic_virus_filtration_historical_discovery_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'viralStructure',
        label: 'Viral Structure',
        sectionNumber: 112,
        subTopic: 'viruses',
        specificItems: ['viralStructure'],
        diagramId: 'envelopedVsNonEnvelopedViralStructureAnnotatedDiagram',
        experimentId: 'electron_micrograph_interpretation_icosahedral_helical_complex_classification_experiment',
        contentKey: 'components'
    },
    {
        id: 'viralClassification',
        label: 'Viral Classification',
        sectionNumber: 113,
        subTopic: 'viruses',
        specificItems: ['viralClassification'],
        diagramId: 'baltimoreSevenClassFlowchartGenomeMrnaStrategyDiagram',
        experimentId: 'baltimore_classification_sorting_card_activity_genome_type_experiment',
        contentKey: 'components'
    },
    {
        id: 'viralReplicationCycle',
        label: 'Viral Replication Cycle',
        sectionNumber: 114,
        subTopic: 'viruses',
        specificItems: ['viralReplicationCycle'],
        diagramId: 'lyticVsLysogenicCycleComparisonDiagram',
        experimentId: 'bacteriophage_t4_plaque_assay_one_step_growth_curve_experiment',
        contentKey: 'components'
    },
    {
        id: 'hostVirusInteractions',
        label: 'Host–Virus Interactions',
        sectionNumber: 115,
        subTopic: 'viruses',
        specificItems: ['hostVirusInteractions'],
        diagramId: 'viralInfectionOutcomeSpectrumLatencyPersistenceTransformationDiagram',
        experimentId: 'interferon_antiviral_state_induction_cell_culture_model_experiment',
        contentKey: 'components'
    },
    {
        id: 'immuneResponseToViruses',
        label: 'Immune Response to Viruses',
        sectionNumber: 116,
        subTopic: 'viruses',
        specificItems: ['immuneResponseToViruses'],
        diagramId: 'innateAdaptiveAntiviralImmunityTimelineDiagram',
        experimentId: 'haemagglutination_inhibition_test_antibody_neutralisation_experiment',
        contentKey: 'components'
    },
    {
        id: 'viralGeneticsAndEvolution',
        label: 'Viral Genetics and Evolution',
        sectionNumber: 117,
        subTopic: 'viruses',
        specificItems: ['viralGeneticsAndEvolution'],
        diagramId: 'antigenicDriftVsShiftInfluenzaSegmentReassortmentDiagram',
        experimentId: 'influenza_hemagglutinin_phylogenetic_sequence_drift_tracking_experiment',
        contentKey: 'components'
    },
    {
        id: 'antiviralStrategies',
        label: 'Antiviral Strategies',
        sectionNumber: 118,
        subTopic: 'viruses',
        specificItems: ['antiviralStrategies'],
        diagramId: 'antiviralDrugTargetSitesonHivReplicationCycleDiagram',
        experimentId: 'plaque_reduction_neutralisation_test_antiviral_drug_efficacy_experiment',
        contentKey: 'components'
    },
    {
        id: 'viralDiseasesAndEpidemiology',
        label: 'Viral Diseases and Epidemiology',
        sectionNumber: 119,
        subTopic: 'viruses',
        specificItems: ['viralDiseasesAndEpidemiology'],
        diagramId: 'basicReproductionNumberR0ComparisonVirusBarChartDiagram',
        experimentId: 'sir_model_epidemic_curve_simulation_r0_herd_immunity_threshold_experiment',
        contentKey: 'components'
    },
    {
        id: 'biotechnologicalApplications',
        label: 'Biotechnological Applications',
        sectionNumber: 120,
        subTopic: 'viruses',
        specificItems: ['biotechnologicalApplications'],
        diagramId: 'viralVectorGeneTherapyDeliveryMechanismDiagram',
        experimentId: 'aav_reporter_gene_gfp_transduction_cell_culture_experiment',
        contentKey: 'components'
    },

   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 121,
        subTopic: 'fungi',
        specificItems: ['foundations'],
        diagramId: 'fungiVsPlantsBacteriaAnimalsFeatureComparisonTableDiagram',
        experimentId: 'kingdom_fungi_macroscopic_identification_mushroom_mould_yeast_survey_experiment',
        contentKey: 'components'
    },
    {
        id: 'cellStructure',
        label: 'Cell Structure',
        sectionNumber: 122,
        subTopic: 'fungi',
        specificItems: ['cellStructure'],
        diagramId: 'annotatedFungalHyphaeCrossSectionChitinErgosteolDiagram',
        experimentId: 'calcofluor_white_chitin_staining_fluorescence_microscopy_experiment',
        contentKey: 'components'
    },
    {
        id: 'morphologicalForms',
        label: 'Morphological Forms',
        sectionNumber: 123,
        subTopic: 'fungi',
        specificItems: ['morphologicalForms'],
        diagramId: 'yeastMouldDimorphicFormTemperatureSwitchDiagram',
        experimentId: 'candida_albicans_yeast_to_hyphal_switch_temperature_37c_experiment',
        contentKey: 'components'
    },
    {
        id: 'classificationAndTaxonomy',
        label: 'Classification and Taxonomy',
        sectionNumber: 124,
        subTopic: 'fungi',
        specificItems: ['classificationAndTaxonomy'],
        diagramId: 'fungalPhylaSporeTypeCharacteristicsCladogramDiagram',
        experimentId: 'rhizopus_ascomycete_basidiomycete_spore_structure_comparison_microscopy_experiment',
        contentKey: 'components'
    },
    {
        id: 'fungalReproduction',
        label: 'Fungal Reproduction',
        sectionNumber: 125,
        subTopic: 'fungi',
        specificItems: ['fungalReproduction'],
        diagramId: 'rhizopusSexualAsexualLifecycleZygosporeFormationDiagram',
        experimentId: 'rhizopus_spore_germination_sporulation_time_lapse_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'fungalMetabolismAndNutrition',
        label: 'Fungal Metabolism and Nutrition',
        sectionNumber: 126,
        subTopic: 'fungi',
        specificItems: ['fungalMetabolismAndNutrition'],
        diagramId: 'saprotrophicAbsorptiveNutritionExtracellularDigestionDiagram',
        experimentId: 'saccharomyces_anaerobic_fermentation_glucose_co2_ethanol_production_experiment',
        contentKey: 'components'
    },
    {
        id: 'fungalPathogenesis',
        label: 'Fungal Pathogenesis',
        sectionNumber: 127,
        subTopic: 'fungi',
        specificItems: ['fungalPathogenesis'],
        diagramId: 'mycosesClassificationSuperficialCutaneousSubcutaneousSystemicDiagram',
        experimentId: 'dermatophyte_keratin_degradation_hair_perforation_test_experiment',
        contentKey: 'components'
    },
    {
        id: 'ecologyAndEnvironmentalRoles',
        label: 'Ecology and Environmental Roles',
        sectionNumber: 128,
        subTopic: 'fungi',
        specificItems: ['ecologyAndEnvironmentalRoles'],
        diagramId: 'ectomycorrhizalVsArbuscularMycorrhizalRootStructureDiagram',
        experimentId: 'mycorrhizal_inoculation_plant_phosphorus_uptake_growth_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'biotechnologicalApplications',
        label: 'Biotechnological Applications',
        sectionNumber: 129,
        subTopic: 'fungi',
        specificItems: ['biotechnologicalApplications'],
        diagramId: 'penicillinBiosynthesisPathwayPenicilliumFermentationDiagram',
        experimentId: 'penicillium_antibiotic_zone_of_inhibition_production_experiment',
        contentKey: 'components'
    },
    {
        id: 'specialTopics',
        label: 'Special Topics',
        sectionNumber: 130,
        subTopic: 'fungi',
        specificItems: ['specialTopics'],
        diagramId: 'ophiocordycepsZombieAntBehaviourManipulationLifecycleDiagram',
        experimentId: 'beauveria_bassiana_entomopathogenic_insect_infection_bioassay_experiment',
        contentKey: 'components'
    },

   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 131,
        subTopic: 'protists',
        specificItems: ['foundations'],
        diagramId: 'protistParaphyleticSupergroups_SAR_Excavata_Amoebozoa_OverviewDiagram',
        experimentId: 'pond_water_protist_diversity_wet_mount_survey_experiment',
        contentKey: 'components'
    },
    {
        id: 'cellStructure',
        label: 'Cell Structure',
        sectionNumber: 2,
        subTopic: 'protists',
        specificItems: ['cellStructure'],
        diagramId: 'parameciumAnnotatedUltrastructureContractileVacuoleTrichocystDiagram',
        experimentId: 'contractile_vacuole_pulsation_rate_freshwater_vs_saltwater_paramecium_experiment',
        contentKey: 'components'
    },
    {
        id: 'classificationAndMajorGroups',
        label: 'Classification and Major Groups',
        sectionNumber: 3,
        subTopic: 'protists',
        specificItems: ['classificationAndMajorGroups'],
        diagramId: 'protistSuperGroupCladogramSARArchaeplastidaExcavataDiagram',
        experimentId: 'protist_group_identification_key_morphological_features_microscopy_experiment',
        contentKey: 'components'
    },
    {
        id: 'locomotion',
        label: 'Locomotion',
        sectionNumber: 4,
        subTopic: 'protists',
        specificItems: ['locomotion'],
        diagramId: 'ciliaPseudopodiaFlagellaAxopodiaLocomotiontypeComparisonDiagram',
        experimentId: 'amoeba_pseudopod_chemotaxis_movement_tracking_time_lapse_experiment',
        contentKey: 'components'
    },
    {
        id: 'nutrition',
        label: 'Nutrition',
        sectionNumber: 5,
        subTopic: 'protists',
        specificItems: ['nutrition'],
        diagramId: 'mixotrophyPhagotrophyPhotoautotrophyNutritionSpectrumDiagram',
        experimentId: 'euglena_phototaxis_light_dark_chlorophyll_mixotrophy_experiment',
        contentKey: 'components'
    },
    {
        id: 'reproduction',
        label: 'Reproduction',
        sectionNumber: 6,
        subTopic: 'protists',
        specificItems: ['reproduction'],
        diagramId: 'parameciumConjugationNuclearExchangeMicronucleusMacronucleusDiagram',
        experimentId: 'paramecium_conjugation_mating_type_mixing_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'pathogenicProtists',
        label: 'Pathogenic Protists',
        sectionNumber: 7,
        subTopic: 'protists',
        specificItems: ['pathogenicProtists'],
        diagramId: 'plasmodiumFalciparumCompleteLifecycleHumanAnophelesHostDiagram',
        experimentId: 'giemsa_stained_blood_smear_malaria_ring_stage_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'algaeAndPhotosyntheticProtists',
        label: 'Algae and Photosynthetic Protists',
        sectionNumber: 8,
        subTopic: 'protists',
        specificItems: ['algaeAndPhotosyntheticProtists'],
        diagramId: 'algalPigmentAbsorptionSpectraChlorophyllPhycoerythrinFucoxanthinDiagram',
        experimentId: 'paper_chromatography_algal_photosynthetic_pigment_separation_experiment',
        contentKey: 'components'
    },
    {
        id: 'ecologyAndEnvironmentalRoles',
        label: 'Ecology and Environmental Roles',
        sectionNumber: 9,
        subTopic: 'protists',
        specificItems: ['ecologyAndEnvironmentalRoles'],
        diagramId: 'microbialLoopDOMBacteriaFlagellatesCiliatesmZooplanktonFlowDiagram',
        experimentId: 'phytoplankton_chlorophyll_a_fluorometry_primary_productivity_estimation_experiment',
        contentKey: 'components'
    },
    {
        id: 'specialTopicsAndApplications',
        label: 'Special Topics and Applications',
        sectionNumber: 10,
        subTopic: 'protists',
        specificItems: ['specialTopicsAndApplications'],
        diagramId: 'dictyosteliumAggregationSlugFruitingBodyDevelopmentalLifecycleDiagram',
        experimentId: 'dictyostelium_starvation_induced_aggregation_cAMP_chemotaxis_experiment',
        contentKey: 'components'
    },

   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'microbialGrowth',
        specificItems: ['foundations'],
        diagramId: 'binaryFissionFtsZRingDivisomeSeptumFormationDiagram',
        experimentId: 'generation_time_calculation_exponential_growth_e_coli_culture_experiment',
        contentKey: 'components'
    },
    {
        id: 'bacterialGrowthCurve',
        label: 'Bacterial Growth Curve',
        sectionNumber: 2,
        subTopic: 'microbialGrowth',
        specificItems: ['bacterialGrowthCurve'],
        diagramId: 'fourPhaseBatchCultureGrowthCurveSemiLogPlotDiagram',
        experimentId: 'e_coli_batch_culture_od600_viable_count_four_phase_growth_curve_experiment',
        contentKey: 'components'
    },
    {
        id: 'environmentalFactors',
        label: 'Environmental Factors Affecting Growth',
        sectionNumber: 3,
        subTopic: 'microbialGrowth',
        specificItems: ['environmentalFactors'],
        diagramId: 'cardinalTemperaturePHWaterActivityGrowthRangeDiagram',
        experimentId: 'temperature_gradient_incubator_psychrophile_mesophile_thermophile_growth_rate_experiment',
        contentKey: 'components'
    },
    {
        id: 'nutritionalRequirements',
        label: 'Nutritional Requirements',
        sectionNumber: 4,
        subTopic: 'microbialGrowth',
        specificItems: ['nutritionalRequirements'],
        diagramId: 'macronutrientMicronutrientGrowthFactorHierarchyDiagram',
        experimentId: 'auxotroph_minimal_medium_growth_factor_supplementation_experiment',
        contentKey: 'components'
    },
    {
        id: 'cultureMedia',
        label: 'Culture Media',
        sectionNumber: 5,
        subTopic: 'microbialGrowth',
        specificItems: ['cultureMedia'],
        diagramId: 'selectiveDifferentialEnrichedMediaFunctionComparisonDiagram',
        experimentId: 'macckonkey_mannitol_salt_blood_agar_selective_differential_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'measurementOfGrowth',
        label: 'Measurement of Microbial Growth',
        sectionNumber: 6,
        subTopic: 'microbialGrowth',
        specificItems: ['measurementOfGrowth'],
        diagramId: 'platecountTurbidimetryFlowCytometryMethodComparisonDiagram',
        experimentId: 'serial_dilution_spread_plate_cfu_ml_viable_count_od600_correlation_experiment',
        contentKey: 'components'
    },
    {
        id: 'continuousCulture',
        label: 'Continuous Culture',
        sectionNumber: 7,
        subTopic: 'microbialGrowth',
        specificItems: ['continuousCulture'],
        diagramId: 'chemostatSteadyStateDilutionRateSubstrateConcentrationCellDensityDiagram',
        experimentId: 'chemostat_dilution_rate_mu_monod_steady_state_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'controlOfMicrobialGrowth',
        label: 'Control of Microbial Growth',
        sectionNumber: 8,
        subTopic: 'microbialGrowth',
        specificItems: ['controlOfMicrobialGrowth'],
        diagramId: 'physicalChemicalControlMethodsSterilisationHierarchyDiagram',
        experimentId: 'use_dilution_test_disinfectant_efficacy_phenol_coefficient_determination_experiment',
        contentKey: 'components'
    },
    {
        id: 'biofilmGrowth',
        label: 'Biofilm Growth',
        sectionNumber: 9,
        subTopic: 'microbialGrowth',
        specificItems: ['biofilmGrowth'],
        diagramId: 'biofilmFiveStageFormationEPSMatrixWaterChannelQuorumSensingDiagram',
        experimentId: 'crystal_violet_microtitre_plate_biofilm_quantification_quorum_sensing_inhibitor_experiment',
        contentKey: 'components'
    },
    {
        id: 'growthInBiotechnologyAndIndustry',
        label: 'Growth in Biotechnology and Industry',
        sectionNumber: 10,
        subTopic: 'microbialGrowth',
        specificItems: ['growthInBiotechnologyAndIndustry'],
        diagramId: 'batchFedBatchContinuousFermentationProductivityComparisonDiagram',
        experimentId: 'saccharomyces_fed_batch_ethanol_fermentation_glucose_feeding_strategy_experiment',
        contentKey: 'components'
    },






   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'lightReactions',
        specificItems: ['foundations'],
        diagramId: 'chloroplastUltrastructureAnnotatedCrossSection',
        experimentId: 'chloroplast_pigment_separation_paper_chromatography_experiment',
        contentKey: 'components'
    },
    {
        id: 'photosystems',
        label: 'Photosystems',
        sectionNumber: 2,
        subTopic: 'lightReactions',
        specificItems: ['photosystems'],
        diagramId: 'photosystemIandIIReactionCentreAntennaComplexDiagram',
        experimentId: 'absorption_spectrum_vs_action_spectrum_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'electronTransportChain',
        label: 'Electron Transport Chain',
        sectionNumber: 3,
        subTopic: 'lightReactions',
        specificItems: ['electronTransportChain'],
        diagramId: 'zSchemeElectronEnergyLevelCarrierSequenceDiagram',
        experimentId: 'dcpip_hill_reaction_light_intensity_decolourisation_experiment',
        contentKey: 'components'
    },
    {
        id: 'waterSplitting',
        label: 'Water Splitting (Photolysis)',
        sectionNumber: 4,
        subTopic: 'lightReactions',
        specificItems: ['waterSplitting'],
        diagramId: 'oxygenEvolvingComplexSStateCycleDiagram',
        experimentId: 'oxygen_18_isotope_labelling_water_splitting_origin_experiment',
        contentKey: 'components'
    },
    {
        id: 'chemiosmosisAndATPSynthesis',
        label: 'Chemiosmosis and ATP Synthesis',
        sectionNumber: 5,
        subTopic: 'lightReactions',
        specificItems: ['chemiosmosisAndATPSynthesis'],
        diagramId: 'thylakoidProtonGradientCF1CF0AtpSynthaseMechanismDiagram',
        experimentId: 'uncoupler_effect_on_atp_synthesis_chloroplast_suspension_experiment',
        contentKey: 'components'
    },
    {
        id: 'productsOfLightReactions',
        label: 'Products of the Light Reactions',
        sectionNumber: 6,
        subTopic: 'lightReactions',
        specificItems: ['productsOfLightReactions'],
        diagramId: 'atpNadphOxygenProductStoichiometryFlowDiagram',
        experimentId: 'oxygen_evolution_rate_vs_light_intensity_clark_electrode_experiment',
        contentKey: 'components'
    },
    {
        id: 'regulationOfLightReactions',
        label: 'Regulation of Light Reactions',
        sectionNumber: 7,
        subTopic: 'lightReactions',
        specificItems: ['regulationOfLightReactions'],
        diagramId: 'nonPhotochemicalQuenchingXanthophyllCycleStateDiagram',
        experimentId: 'fv_fm_pam_fluorometry_photoinhibition_high_light_stress_experiment',
        contentKey: 'components'
    },
    {
        id: 'experimentalMethods',
        label: 'Measurement and Experimental Methods',
        sectionNumber: 8,
        subTopic: 'lightReactions',
        specificItems: ['experimentalMethods'],
        diagramId: 'hillReactionDcpipAssaySetupAndColourChangeDiagram',
        experimentId: 'hill_reaction_dcpip_reduction_isolated_chloroplasts_experiment',
        contentKey: 'components'
    },
    {
        id: 'evolutionaryContext',
        label: 'Evolutionary Context',
        sectionNumber: 9,
        subTopic: 'lightReactions',
        specificItems: ['evolutionaryContext'],
        diagramId: 'primaryEndosymbiosisChloroplastOriginTimelineDiagram',
        experimentId: 'cyanobacteria_vs_chloroplast_thylakoid_membrane_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'realLifeApplications',
        label: 'Real-Life Applications',
        sectionNumber: 10,
        subTopic: 'lightReactions',
        specificItems: ['realLifeApplications'],
        diagramId: 'artificialPhotosynthesisDyeSensitisedSolarCellDesignDiagram',
        experimentId: 'leaf_disc_floating_assay_photosynthesis_rate_bicarbonate_experiment',
        contentKey: 'components'
    },

   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'calvinCycle',
        specificItems: ['foundations'],
        diagramId: 'calvinCycleStromaLocationInputOutputOverviewDiagram',
        experimentId: 'carbon_14_co2_radiotracer_algae_chromatography_calvin_experiment',
        contentKey: 'components'
    },
    {
        id: 'stage1CarbonFixation',
        label: 'Stage 1 — Carbon Fixation',
        sectionNumber: 2,
        subTopic: 'calvinCycle',
        specificItems: ['stage1CarbonFixation'],
        diagramId: 'rubiscoCarbonFixationRubpTo3PgaReactionDiagram',
        experimentId: 'rubisco_oxygenase_photorespiration_rate_temperature_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'stage2Reduction',
        label: 'Stage 2 — Reduction',
        sectionNumber: 3,
        subTopic: 'calvinCycle',
        specificItems: ['stage2Reduction'],
        diagramId: 'pgaTo13BpgToG3pReductionStepAtpNadphConsumptionDiagram',
        experimentId: 'isolated_stroma_atp_nadph_co2_fixation_g3p_detection_experiment',
        contentKey: 'components'
    },
    {
        id: 'stage3RegenerationOfRuBP',
        label: 'Stage 3 — Regeneration of RuBP',
        sectionNumber: 4,
        subTopic: 'calvinCycle',
        specificItems: ['stage3RegenerationOfRuBP'],
        diagramId: 'rubpRegenerationCarbonShufflePhosphoribulokinaseStepDiagram',
        experimentId: 'dark_to_light_transition_rubp_g3p_intermediate_level_tracing_experiment',
        contentKey: 'components'
    },
    {
        id: 'stoichiometry',
        label: 'Stoichiometry of the Calvin Cycle',
        sectionNumber: 5,
        subTopic: 'calvinCycle',
        specificItems: ['stoichiometry'],
        diagramId: 'calvinCycleThreeTurnCarbonAtpNadphBalanceAccountingDiagram',
        experimentId: 'photosynthesis_stoichiometry_gas_exchange_co2_o2_ratio_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'regulation',
        label: 'Regulation of the Calvin Cycle',
        sectionNumber: 6,
        subTopic: 'calvinCycle',
        specificItems: ['regulation'],
        diagramId: 'thioredoxinLightActivationCalvinCycleEnzymesDiagram',
        experimentId: 'light_dark_stromal_enzyme_activity_switching_thioredoxin_experiment',
        contentKey: 'components'
    },
    {
        id: 'c3Plants',
        label: 'C3 Plants',
        sectionNumber: 7,
        subTopic: 'calvinCycle',
        specificItems: ['c3Plants'],
        diagramId: 'c3LeafMesophyllRubiscoOnlyFixationAnatomyDiagram',
        experimentId: 'c3_plant_photosynthesis_rate_elevated_co2_temperature_response_experiment',
        contentKey: 'components'
    },
    {
        id: 'c4Pathway',
        label: 'C4 Carbon-Fixation Pathway',
        sectionNumber: 8,
        subTopic: 'calvinCycle',
        specificItems: ['c4Pathway'],
        diagramId: 'kranzAnatomyMesophyllBundleSheathPepCarbonPumpDiagram',
        experimentId: 'c3_vs_c4_plant_water_use_efficiency_high_temperature_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'camPathway',
        label: 'CAM Pathway',
        sectionNumber: 9,
        subTopic: 'calvinCycle',
        specificItems: ['camPathway'],
        diagramId: 'camDayNightStomataOpenCloseTemporalCarbonFixationDiagram',
        experimentId: 'cactus_succulent_nocturnal_co2_uptake_titration_malic_acid_experiment',
        contentKey: 'components'
    },
    {
        id: 'realLifeApplications',
        label: 'Real-Life Applications',
        sectionNumber: 10,
        subTopic: 'calvinCycle',
        specificItems: ['realLifeApplications'],
        diagramId: 'c4RiceProjectYieldImprovementRubiscoEngineeringRoadmapDiagram',
        experimentId: 'elevated_co2_growth_chamber_c3_c4_biomass_yield_comparison_experiment',
        contentKey: 'components'
    },

   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'cellularRespiration',
        specificItems: ['foundations'],
        diagramId: 'mitochondrionAnnotatedUltrastructureCristaeMatrixImsDiagram',
        experimentId: 'redox_indicator_colour_change_methylene_blue_yeast_respiration_experiment',
        contentKey: 'components'
    },
    {
        id: 'glycolysis',
        label: 'Glycolysis',
        sectionNumber: 2,
        subTopic: 'cellularRespiration',
        specificItems: ['glycolysis'],
        diagramId: 'glycolysisInvestmentPayoffPhaseTenStepEnzymeFlowDiagram',
        experimentId: 'yeast_glucose_anaerobic_co2_production_rate_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'pyruvateOxidation',
        label: 'Pyruvate Oxidation',
        sectionNumber: 3,
        subTopic: 'cellularRespiration',
        specificItems: ['pyruvateOxidation'],
        diagramId: 'pyruvateDehydrogenaseComplexThreeEnzymeFiveCoFactorMechanismDiagram',
        experimentId: 'arsenite_pdh_inhibition_pyruvate_accumulation_detection_experiment',
        contentKey: 'components'
    },
    {
        id: 'krebsCycle',
        label: 'Krebs Cycle',
        sectionNumber: 4,
        subTopic: 'cellularRespiration',
        specificItems: ['krebsCycle'],
        diagramId: 'krebsCycleEightStepEnzymeIntermediateCoFactorYieldDiagram',
        experimentId: 'succinate_dehydrogenase_activity_malonate_inhibition_colorimetric_experiment',
        contentKey: 'components'
    },
    {
        id: 'electronTransportChain',
        label: 'Electron Transport Chain',
        sectionNumber: 5,
        subTopic: 'cellularRespiration',
        specificItems: ['electronTransportChain'],
        diagramId: 'mitochondrialEtcFourComplexesProtonPumpingRedoxPotentialDiagram',
        experimentId: 'cyanide_rotenone_etc_inhibitor_oxygen_consumption_oxygraph_experiment',
        contentKey: 'components'
    },
    {
        id: 'oxidativePhosphorylation',
        label: 'Oxidative Phosphorylation and Chemiosmosis',
        sectionNumber: 6,
        subTopic: 'cellularRespiration',
        specificItems: ['oxidativePhosphorylation'],
        diagramId: 'f0f1AtpSynthaseRotaryMotorBindingChangeMechanismDiagram',
        experimentId: 'dnp_uncoupler_heat_production_atp_yield_reduction_mitochondria_experiment',
        contentKey: 'components'
    },
    {
        id: 'atpYieldAndAccounting',
        label: 'ATP Yield and Accounting',
        sectionNumber: 7,
        subTopic: 'cellularRespiration',
        specificItems: ['atpYieldAndAccounting'],
        diagramId: 'perGlucoseAtpYieldPathwayBreakdownSummaryTableDiagram',
        experimentId: 'malate_aspartate_vs_glycerol_phosphate_shuttle_atp_yield_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'anaerobicRespirationAndFermentation',
        label: 'Anaerobic Respiration and Fermentation',
        sectionNumber: 8,
        subTopic: 'cellularRespiration',
        specificItems: ['anaerobicRespirationAndFermentation'],
        diagramId: 'lacticAcidVsAlcoholicFermentationNadPlusRegenerationPathwayDiagram',
        experimentId: 'yeast_glucose_ethanol_co2_anaerobic_fermentation_durham_tube_experiment',
        contentKey: 'components'
    },
    {
        id: 'metabolicIntegration',
        label: 'Integration with Other Metabolic Pathways',
        sectionNumber: 9,
        subTopic: 'cellularRespiration',
        specificItems: ['metabolicIntegration'],
        diagramId: 'carbohydrateFatProteinCatabolicEntryPointsRespirationDiagram',
        experimentId: 'respiratory_quotient_rq_carbohydrate_vs_fat_combustion_experiment',
        contentKey: 'components'
    },
    {
        id: 'regulationOfRespiration',
        label: 'Regulation of Cellular Respiration',
        sectionNumber: 10,
        subTopic: 'cellularRespiration',
        specificItems: ['regulationOfRespiration'],
        diagramId: 'energyChargeAtpAmpAllostericRegulationPfk1CitrateSynthaseDiagram',
        experimentId: 'ampk_activation_exercise_muscle_biopsy_atp_amp_ratio_measurement_experiment',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'energyCoupling',
        specificItems: ['foundations'],
        diagramId: 'gibbsFreeEnergyExergonicEndergonicReactionCoordinateDiagram',
        experimentId: 'exergonic_endergonic_coupled_reaction_atp_glucose_phosphorylation_experiment',
        contentKey: 'components'
    },
    {
        id: 'atpStructureAndEnergy',
        label: 'ATP: Structure, Hydrolysis, and Energy',
        sectionNumber: 2,
        subTopic: 'energyCoupling',
        specificItems: ['atpStructureAndEnergy'],
        diagramId: 'atpMolecularStructurePhosphoanhydrideBondHighEnergyAnnotationDiagram',
        experimentId: 'luciferase_bioluminescence_atp_concentration_quantification_experiment',
        contentKey: 'components'
    },
    {
        id: 'phosphorylGroupTransfer',
        label: 'Phosphoryl Group Transfer and Substrate-Level Coupling',
        sectionNumber: 3,
        subTopic: 'energyCoupling',
        specificItems: ['phosphorylGroupTransfer'],
        diagramId: 'phosphorylTransferPotentialHierarchyPepAtpG6pComparisonDiagram',
        experimentId: 'substrate_level_phosphorylation_pyruvate_kinase_pep_atp_production_experiment',
        contentKey: 'components'
    },
    {
        id: 'redoxCoupling',
        label: 'Redox Coupling',
        sectionNumber: 4,
        subTopic: 'energyCoupling',
        specificItems: ['redoxCoupling'],
        diagramId: 'redoxPotentialLadderNadhFadh2CoqCytcO2ElectronFlowDiagram',
        experimentId: 'nadh_oxidation_etc_electron_flow_oxygen_consumption_coupling_experiment',
        contentKey: 'components'
    },
    {
        id: 'ionGradientCoupling',
        label: 'Ion Gradient Coupling (Chemiosmosis)',
        sectionNumber: 5,
        subTopic: 'energyCoupling',
        specificItems: ['ionGradientCoupling'],
        diagramId: 'protonMotiveForceDeltaPsiDeltaPhAcrossInnerMembraneDiagram',
        experimentId: 'reconstituted_vesicle_proton_gradient_atp_synthesis_mitchell_experiment',
        contentKey: 'components'
    },
    {
        id: 'energyCouplingInBiosynthesis',
        label: 'Energy Coupling in Biosynthesis',
        sectionNumber: 6,
        subTopic: 'energyCoupling',
        specificItems: ['energyCouplingInBiosynthesis'],
        diagramId: 'aminoacylTrnaAmpIntermediateProteinSynthesisAtpCostDiagram',
        experimentId: 'cell_free_translation_atp_gtp_depletion_protein_synthesis_arrest_experiment',
        contentKey: 'components'
    },
    {
        id: 'energyCouplingInTransport',
        label: 'Energy Coupling in Membrane Transport',
        sectionNumber: 7,
        subTopic: 'energyCoupling',
        specificItems: ['energyCouplingInTransport'],
        diagramId: 'nakAtpaseE1E2ConformationStoichiometryMembraneTransportDiagram',
        experimentId: 'ouabain_nak_atpase_inhibition_membrane_potential_cell_swelling_experiment',
        contentKey: 'components'
    },
    {
        id: 'energyCouplingInMotion',
        label: 'Energy Coupling in Muscle Contraction',
        sectionNumber: 8,
        subTopic: 'energyCoupling',
        specificItems: ['energyCouplingInMotion'],
        diagramId: 'myosinAtpaseCrossbridge_powerStrokeCycleActinFilamentDiagram',
        experimentId: 'rigor_mortis_atp_depletion_muscle_stiffness_time_course_experiment',
        contentKey: 'components'
    },
    {
        id: 'uncouplingAndThermogenesis',
        label: 'Uncoupling and Thermogenesis',
        sectionNumber: 9,
        subTopic: 'energyCoupling',
        specificItems: ['uncouplingAndThermogenesis'],
        diagramId: 'ucp1BrownAdiposeTissueProtonLeakThermogenesisMechanismDiagram',
        experimentId: 'brown_adipose_tissue_noradrenaline_heat_production_thermistor_experiment',
        contentKey: 'components'
    },
    {
        id: 'integrationAndRegulation',
        label: 'Integration and Regulation of Energy Coupling',
        sectionNumber: 10,
        subTopic: 'energyCoupling',
        specificItems: ['integrationAndRegulation'],
        diagramId: 'ampkEnergyChargeSignallingCatabolicAnabolicToggleDiagram',
        experimentId: 'metformin_ampk_activation_glucose_uptake_atp_amp_ratio_cell_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'metabolicPathways',
        specificItems: ['foundations'],
        diagramId: 'catabolicAnabolicAmphibolicPathwayOrganisationOverviewDiagram',
        experimentId: 'metabolite_compartmentalisation_cell_fractionation_organelle_isolation_experiment',
        contentKey: 'components'
    },
    {
        id: 'enzymeKinetics',
        label: 'Enzyme Kinetics and Catalysis',
        sectionNumber: 2,
        subTopic: 'metabolicPathways',
        specificItems: ['enzymeKinetics'],
        diagramId: 'michaelisMentenHyperbolicVmaxKmSubstrateVelocityCurveDiagram',
        experimentId: 'catalase_hydrogen_peroxide_substrate_concentration_km_vmax_determination_experiment',
        contentKey: 'components'
    },
    {
        id: 'regulationOfPathways',
        label: 'Regulation of Metabolic Pathways',
        sectionNumber: 3,
        subTopic: 'metabolicPathways',
        specificItems: ['regulationOfPathways'],
        diagramId: 'allostericFeedbackInhibitionSignalCascadePhosphorylationToggleDiagram',
        experimentId: 'pfk1_atp_amp_allosteric_inhibition_activation_sigmoidal_kinetics_experiment',
        contentKey: 'components'
    },
    {
        id: 'carbohydrateMetabolism',
        label: 'Carbohydrate Metabolism',
        sectionNumber: 4,
        subTopic: 'metabolicPathways',
        specificItems: ['carbohydrateMetabolism'],
        diagramId: 'glycolysisGlycogenPentosePhosphateGluconeogenesisCentralHubDiagram',
        experimentId: 'benedict_test_reducing_sugar_glucose_fructose_starch_glycogen_hydrolysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'lipidMetabolism',
        label: 'Lipid Metabolism',
        sectionNumber: 5,
        subTopic: 'metabolicPathways',
        specificItems: ['lipidMetabolism'],
        diagramId: 'fattyAcidSynthesisBetaOxidationCompartmentalisationMitochondriaCytosolDiagram',
        experimentId: 'lipase_bile_salts_fat_emulsification_ph_indicator_hydrolysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'aminoAcidMetabolism',
        label: 'Amino Acid Metabolism',
        sectionNumber: 6,
        subTopic: 'metabolicPathways',
        specificItems: ['aminoAcidMetabolism'],
        diagramId: 'transaminationUreaCycleNitrogenFlowKrebsConnectionDiagram',
        experimentId: 'ninhydrin_amino_acid_detection_urine_plasma_chromatography_experiment',
        contentKey: 'components'
    },
    {
        id: 'nucleotideMetabolism',
        label: 'Nucleotide Metabolism',
        sectionNumber: 7,
        subTopic: 'metabolicPathways',
        specificItems: ['nucleotideMetabolism'],
        diagramId: 'purinePyrimidineDenNovoSalvagePathwayUricAcidEndpointDiagram',
        experimentId: 'allopurinol_xanthine_oxidase_uric_acid_gout_treatment_serum_level_experiment',
        contentKey: 'components'
    },
    {
        id: 'integrationOfPathways',
        label: 'Integration of Metabolic Pathways',
        sectionNumber: 8,
        subTopic: 'metabolicPathways',
        specificItems: ['integrationOfPathways'],
        diagramId: 'fedFastedStateInsulinGlucagonOrganMetabolicFluxSwitchDiagram',
        experimentId: 'cori_cycle_lactate_gluconeogenesis_tracer_fed_fasted_liver_muscle_experiment',
        contentKey: 'components'
    },
    {
        id: 'metabolicDisorders',
        label: 'Metabolic Disorders',
        sectionNumber: 9,
        subTopic: 'metabolicPathways',
        specificItems: ['metabolicDisorders'],
        diagramId: 'inbornErrorsEnzymeDeficiencyPathwayBlockageAccumulationDiagram',
        experimentId: 'newborn_heel_prick_pku_tandem_mass_spectrometry_phenylalanine_screening_experiment',
        contentKey: 'components'
    },
    {
        id: 'realLifeApplications',
        label: 'Real-Life Applications',
        sectionNumber: 10,
        subTopic: 'metabolicPathways',
        specificItems: ['realLifeApplications'],
        diagramId: 'metabolicEngineeringFluxOptimisationBiotechProductionStrainDiagram',
        experimentId: 'metformin_ampk_blood_glucose_lowering_type2_diabetes_cell_culture_experiment',
        contentKey: 'components'
    },




    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'atp',
        specificItems: ['foundations'],
        diagramId: 'atpMolecularStructureAdpAmpComparisonDiagram',
        experimentId: 'atp_molecular_model_building_phosphoanhydride_bond_energy_investigation',
        contentKey: 'components'
    },
    {
        id: 'atpHydrolysis',
        label: 'ATP Hydrolysis',
        sectionNumber: 2,
        subTopic: 'atp',
        specificItems: ['atpHydrolysis'],
        diagramId: 'atpHydrolysisPhosphorylTransferCoupledReactionDiagram',
        experimentId: 'coupled_reaction_glucose_phosphorylation_hexokinase_colorimetric_assay',
        contentKey: 'components'
    },
    {
        id: 'atpSynthesis',
        label: 'ATP Synthesis',
        sectionNumber: 3,
        subTopic: 'atp',
        specificItems: ['atpSynthesis'],
        diagramId: 'substrateVsOxidativeVsPhotoPhosphorylationComparisonDiagram',
        experimentId: 'spinach_chloroplast_atp_synthesis_light_driven_chemiosmosis_experiment',
        contentKey: 'components'
    },
    {
        id: 'atpInCellularWork',
        label: 'ATP in Cellular Work',
        sectionNumber: 4,
        subTopic: 'atp',
        specificItems: ['atpInCellularWork'],
        diagramId: 'myosinAtpaseCrossbridge_CycleMuscleCellDiagram',
        experimentId: 'muscle_fatigue_atp_depletion_grip_strength_repeated_contraction_experiment',
        contentKey: 'components'
    },
    {
        id: 'atpYieldAndAccounting',
        label: 'ATP Yield and Accounting',
        sectionNumber: 5,
        subTopic: 'atp',
        specificItems: ['atpYieldAndAccounting'],
        diagramId: 'aerobicRespirationAtpYieldStageByStageAccountingDiagram',
        experimentId: 'yeast_respirometer_glucose_vs_fatty_acid_co2_production_rate_experiment',
        contentKey: 'components'
    },
    {
        id: 'atpPoolAndTurnover',
        label: 'ATP Pool and Turnover',
        sectionNumber: 6,
        subTopic: 'atp',
        specificItems: ['atpPoolAndTurnover'],
        diagramId: 'atpAdpEnergyChargeHomeostasisCellularConcentrationDiagram',
        experimentId: 'creatine_phosphate_buffer_sprint_recovery_blood_lactate_atp_proxy_experiment',
        contentKey: 'components'
    },
    {
        id: 'atpInDifferentCellTypes',
        label: 'ATP in Different Cell Types',
        sectionNumber: 7,
        subTopic: 'atp',
        specificItems: ['atpInDifferentCellTypes'],
        diagramId: 'cellTypeAtpDemandMitochondrialDensityComparisonDiagram',
        experimentId: 'mitochondrial_density_skeletal_vs_cardiac_muscle_methylene_blue_staining_experiment',
        contentKey: 'components'
    },
    {
        id: 'regulationOfATPProduction',
        label: 'Regulation of ATP Production',
        sectionNumber: 8,
        subTopic: 'atp',
        specificItems: ['regulationOfATPProduction'],
        diagramId: 'pfk1AllostericRegulationAmpAtpCitrateSignallingDiagram',
        experimentId: 'allosteric_inhibition_pfk1_atp_concentration_effect_on_yeast_glycolysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'atpAndDisease',
        label: 'ATP and Disease',
        sectionNumber: 9,
        subTopic: 'atp',
        specificItems: ['atpAndDisease'],
        diagramId: 'cyanideEtcBlockadeAtpDepletionCellDeathCascadeDiagram',
        experimentId: 'cyanide_effect_on_yeast_oxygen_consumption_rate_clark_electrode_experiment',
        contentKey: 'components'
    },
    {
        id: 'evolutionaryAndComparativeContext',
        label: 'Evolutionary and Comparative Context',
        sectionNumber: 10,
        subTopic: 'atp',
        specificItems: ['evolutionaryAndComparativeContext'],
        diagramId: 'atpSynthaseFTypeVTypeATypeEvolutionaryConservationDiagram',
        experimentId: 'comparative_atp_synthase_inhibitor_oligomycin_prokaryote_vs_eukaryote_respiration_experiment',
        contentKey: 'components'
    },

   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'glycolysis',
        specificItems: ['foundations'],
        diagramId: 'glycolysisOverviewCytosolLocationTwoPhasesFlowchartDiagram',
        experimentId: 'glucose_identification_benedicts_test_before_after_glycolysis_extract_experiment',
        contentKey: 'components'
    },
    {
        id: 'investmentPhase',
        label: 'Investment Phase (Steps 1–5)',
        sectionNumber: 2,
        subTopic: 'glycolysis',
        specificItems: ['investmentPhase'],
        diagramId: 'glycolysisSteps1to5SubstrateProductEnzymeAtpInvestmentDiagram',
        experimentId: 'hexokinase_glucose6phosphate_product_inhibition_colorimetric_coupled_assay_experiment',
        contentKey: 'components'
    },
    {
        id: 'payoffPhase',
        label: 'Payoff Phase (Steps 6–10)',
        sectionNumber: 3,
        subTopic: 'glycolysis',
        specificItems: ['payoffPhase'],
        diagramId: 'glycolysisSteps6to10NadhAtpYieldSubstrateLevelPhosphorylationDiagram',
        experimentId: 'gapdh_nad_requirement_iodoacetate_inhibition_yeast_extract_fermentation_experiment',
        contentKey: 'components'
    },
    {
        id: 'energyBalance',
        label: 'Energy Balance',
        sectionNumber: 4,
        subTopic: 'glycolysis',
        specificItems: ['energyBalance'],
        diagramId: 'grossVsNetAtpGlycolysisNadhFateAerobicAnaerobicComparisonDiagram',
        experimentId: 'yeast_atp_yield_measurement_glucose_concentration_vs_co2_production_respirometer_experiment',
        contentKey: 'components'
    },
    {
        id: 'regulationOfGlycolysis',
        label: 'Regulation of Glycolysis',
        sectionNumber: 5,
        subTopic: 'glycolysis',
        specificItems: ['regulationOfGlycolysis'],
        diagramId: 'pfk1HexokinasePyruvateKinaseAllostericRegulationSignallingDiagram',
        experimentId: 'fructose26bisphosphate_insulin_glucagon_effect_on_yeast_glycolytic_flux_experiment',
        contentKey: 'components'
    },
    {
        id: 'fateOfPyruvate',
        label: 'Fate of Pyruvate',
        sectionNumber: 6,
        subTopic: 'glycolysis',
        specificItems: ['fateOfPyruvate'],
        diagramId: 'pyruvateMetabolicBranchpointAerobicLactateEthanolGluconeogenesisDiagram',
        experimentId: 'yeast_aerobic_vs_anaerobic_pyruvate_fate_ethanol_co2_lactate_detection_experiment',
        contentKey: 'components'
    },
    {
        id: 'alternativeSubstrates',
        label: 'Alternative Carbohydrate Entry Points',
        sectionNumber: 7,
        subTopic: 'glycolysis',
        specificItems: ['alternativeSubstrates'],
        diagramId: 'fructoseGalactoseMannoseGlycolysisEntryPointsLeloirPathwayDiagram',
        experimentId: 'yeast_fermentation_rate_glucose_vs_fructose_vs_galactose_co2_bubble_count_experiment',
        contentKey: 'components'
    },
    {
        id: 'connectionsToOtherPathways',
        label: 'Connections to Other Pathways',
        sectionNumber: 8,
        subTopic: 'glycolysis',
        specificItems: ['connectionsToOtherPathways'],
        diagramId: 'glycolyticIntermediatesBranchpointsPppGlycogenLipidAminoAcidDiagram',
        experimentId: 'glucose6phosphate_ppp_vs_glycolysis_partition_nadph_ribose_detection_experiment',
        contentKey: 'components'
    },
    {
        id: 'glycolysisInDisease',
        label: 'Glycolysis in Disease',
        sectionNumber: 9,
        subTopic: 'glycolysis',
        specificItems: ['glycolysisInDisease'],
        diagramId: 'warburgEffectCancerCellAerobicGlycolysisLdhaHif1aPkm2Diagram',
        experimentId: 'cancer_cell_vs_normal_cell_glucose_uptake_lactate_secretion_seahorse_analogue_experiment',
        contentKey: 'components'
    },
    {
        id: 'evolutionaryPerspectives',
        label: 'Evolutionary Perspectives',
        sectionNumber: 10,
        subTopic: 'glycolysis',
        specificItems: ['evolutionaryPerspectives'],
        diagramId: 'empVsEdVsPhosphoketolasePathwayComparativeMicrobiologyDiagram',
        experimentId: 'comparative_glycolytic_enzyme_activity_aerobe_vs_anaerobe_spectrophotometric_experiment',
        contentKey: 'components'
    },

   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'krebsCycle',
        specificItems: ['foundations'],
        diagramId: 'krebsCycleOverviewMitochondrialMatrixLocationOaaAcetylCoaInputDiagram',
        experimentId: 'krebs_citrate_catalytic_cycle_demonstration_minced_muscle_tissue_substrate_addition_experiment',
        contentKey: 'components'
    },
    {
        id: 'pyruvateDehydrogenaseComplex',
        label: 'Pyruvate Dehydrogenase Complex',
        sectionNumber: 2,
        subTopic: 'krebsCycle',
        specificItems: ['pyruvateDehydrogenaseComplex'],
        diagramId: 'pdcE1E2E3SubunitCofactorMechanismPyruvateToAcetylCoaDiagram',
        experimentId: 'thiamine_deficiency_pyruvate_accumulation_lactate_elevation_rat_tissue_extract_experiment',
        contentKey: 'components'
    },
    {
        id: 'eightSteps',
        label: 'The Eight Steps of the Krebs Cycle',
        sectionNumber: 3,
        subTopic: 'krebsCycle',
        specificItems: ['eightSteps'],
        diagramId: 'krebsCycleEightStepsEnzymeSubstrateProductCofactorCircularDiagram',
        experimentId: 'malonate_succinate_dehydrogenase_competitive_inhibition_dcpip_decolorisation_experiment',
        contentKey: 'components'
    },
    {
        id: 'stoichiometryAndEnergyYield',
        label: 'Stoichiometry and Energy Yield',
        sectionNumber: 4,
        subTopic: 'krebsCycle',
        specificItems: ['stoichiometryAndEnergyYield'],
        diagramId: 'krebsCyclePerTurnPerGlucoseNadhFadh2GtpCo2YieldAccountingDiagram',
        experimentId: 'co2_production_rate_krebs_intermediates_vs_glucose_isolated_mitochondria_manometry_experiment',
        contentKey: 'components'
    },
    {
        id: 'regulation',
        label: 'Regulation of the Krebs Cycle',
        sectionNumber: 5,
        subTopic: 'krebsCycle',
        specificItems: ['regulation'],
        diagramId: 'krebsCycleAllostericRegulationCitrateSynthaseIdhAlphaKgdhcCalciumAtpNadhDiagram',
        experimentId: 'calcium_ion_effect_on_isocitrate_dehydrogenase_activity_spectrophotometric_nadh_assay_experiment',
        contentKey: 'components'
    },
    {
        id: 'amphibolicNature',
        label: 'Amphibolic Nature of the Krebs Cycle',
        sectionNumber: 6,
        subTopic: 'krebsCycle',
        specificItems: ['amphibolicNature'],
        diagramId: 'amphibolicKrebsCycleCataplerosisBiosynthesisAnaplerosis_branchpointDiagram',
        experimentId: 'pyruvate_carboxylase_anaplerosis_oxaloacetate_replenishment_isolated_liver_mitochondria_experiment',
        contentKey: 'components'
    },
    {
        id: 'integrationWithOtherPathways',
        label: 'Integration with Other Pathways',
        sectionNumber: 7,
        subTopic: 'krebsCycle',
        specificItems: ['integrationWithOtherPathways'],
        diagramId: 'krebsCycleCarbohydrateFatProteinNitrogenMetabolismConvergenceDiagram',
        experimentId: 'fatty_acid_vs_glucose_krebs_cycle_entry_labelled_carbon_tracing_isolated_hepatocyte_experiment',
        contentKey: 'components'
    },
    {
        id: 'krebsCycleInDisease',
        label: 'Krebs Cycle in Disease',
        sectionNumber: 8,
        subTopic: 'krebsCycle',
        specificItems: ['krebsCycleInDisease'],
        diagramId: 'oncometaboliteSuccinateFumarate2HgDioxygenaseInhibitionEpigeneticDysregulationDiagram',
        experimentId: 'idh_mutation_2hydroxyglutarate_detection_glioma_cell_extract_metabolomics_experiment',
        contentKey: 'components'
    },
    {
        id: 'variationsInMicroorganisms',
        label: 'Variations in Microorganisms',
        sectionNumber: 9,
        subTopic: 'krebsCycle',
        specificItems: ['variationsInMicroorganisms'],
        diagramId: 'glyoxylateCycleIsocitrateLyaseMalateSynthaseComparisonTcaDiagram',
        experimentId: 'glyoxylate_cycle_fatty_acid_to_carbohydrate_conversion_germinating_seed_extract_experiment',
        contentKey: 'components'
    },
    {
        id: 'historicalAndMethodological',
        label: 'Historical Experiments and Methodology',
        sectionNumber: 10,
        subTopic: 'krebsCycle',
        specificItems: ['historicalAndMethodological'],
        diagramId: 'krebs1937PigeonMuscleSubstrateCatalyticCycleOriginalExperimentReconstructionDiagram',
        experimentId: 'krebs_catalytic_cycle_demonstration_dicarboxylate_addition_minced_muscle_oxygen_uptake_experiment',
        contentKey: 'components'
    },

   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'electronTransport',
        specificItems: ['foundations'],
        diagramId: 'reductionPotentialScaleNadhToO2ElectronFlowThermodynamicsDiagram',
        experimentId: 'redox_potential_demonstration_methylene_blue_reduction_yeast_cell_suspension_experiment',
        contentKey: 'components'
    },
    {
        id: 'electronDonorsAndCarriers',
        label: 'Electron Donors and Carriers',
        sectionNumber: 2,
        subTopic: 'electronTransport',
        specificItems: ['electronDonorsAndCarriers'],
        diagramId: 'nadhFadh2CoenzymeQCytochromeCMobileCarrierEtcPositionDiagram',
        experimentId: 'coenzyme_q_ubiquinone_reduction_dcpip_spectrophotometric_isolated_mitochondria_experiment',
        contentKey: 'components'
    },
    {
        id: 'etcComplexes',
        label: 'The Four ETC Complexes',
        sectionNumber: 3,
        subTopic: 'electronTransport',
        specificItems: ['etcComplexes'],
        diagramId: 'etcComplexesItoIVSubunitCofactorProtonPumpingInnerMembraneDiagram',
        experimentId: 'rotenone_antimycin_cyanide_sequential_complex_inhibition_oxygen_electrode_experiment',
        contentKey: 'components'
    },
    {
        id: 'atpSynthase',
        label: 'ATP Synthase (Complex V)',
        sectionNumber: 4,
        subTopic: 'electronTransport',
        specificItems: ['atpSynthase'],
        diagramId: 'atpSynthaseF0F1RotaryMechanismBindingChangeThreeStateDiagram',
        experimentId: 'oligomycin_atp_synthase_inhibition_proton_gradient_buildup_mitochondrial_swelling_experiment',
        contentKey: 'components'
    },
    {
        id: 'chemiosmosis',
        label: 'Chemiosmosis and Proton Motive Force',
        sectionNumber: 5,
        subTopic: 'electronTransport',
        specificItems: ['chemiosmosis'],
        diagramId: 'mitchellChemiosmosisProtonGradientPmfMembranePotentialPhGradientDiagram',
        experimentId: 'artificial_proton_gradient_atp_synthesis_chloroplast_acid_base_transition_jagendorf_experiment',
        contentKey: 'components'
    },
    {
        id: 'supercomplexes',
        label: 'Supercomplexes and Organisation',
        sectionNumber: 6,
        subTopic: 'electronTransport',
        specificItems: ['supercomplexes'],
        diagramId: 'respirasomeSupercomplexCI_CIII2_CIVCristaeOrganisationCardiolipinDiagram',
        experimentId: 'blue_native_page_supercomplex_detection_mitochondrial_membrane_protein_isolation_experiment',
        contentKey: 'components'
    },
    {
        id: 'reactiveOxygenSpecies',
        label: 'Reactive Oxygen Species (ROS)',
        sectionNumber: 7,
        subTopic: 'electronTransport',
        specificItems: ['reactiveOxygenSpecies'],
        diagramId: 'rosSuperoxideSodSuperoxideH2O2HydroxylFentonAntioxidantDefenceDiagram',
        experimentId: 'mitochondrial_superoxide_detection_mito_sox_fluorescent_probe_flow_cytometry_experiment',
        contentKey: 'components'
    },
    {
        id: 'atpYieldAndPORatios',
        label: 'ATP Yield and P/O Ratios',
        sectionNumber: 8,
        subTopic: 'electronTransport',
        specificItems: ['atpYieldAndPORatios'],
        diagramId: 'modernPoRatioNadhFadh2ProtonStoichiometryTransportCostAdjustedYieldDiagram',
        experimentId: 'oxygen_consumption_atp_production_ratio_clark_electrode_isolated_mitochondria_substrate_experiment',
        contentKey: 'components'
    },
    {
        id: 'etcInDiseaseAndPharmacology',
        label: 'ETC in Disease and Pharmacology',
        sectionNumber: 9,
        subTopic: 'electronTransport',
        specificItems: ['etcInDiseaseAndPharmacology'],
        diagramId: 'mitochondrialDiseaseMtdnaMutationHeteroplasmyEtcComplexDeficiencyTissueDiagram',
        experimentId: 'cyanide_poisoning_reversal_hydroxocobalamin_treatment_cytochrome_c_oxidase_activity_assay_experiment',
        contentKey: 'components'
    },
    {
        id: 'comparativeAndEvolutionary',
        label: 'Comparative and Evolutionary Perspectives',
        sectionNumber: 10,
        subTopic: 'electronTransport',
        specificItems: ['comparativeAndEvolutionary'],
        diagramId: 'endosymbioticOriginMitochondriaAlphaproteobacteriaEtcEvolutionChloroplastParallelDiagram',
        experimentId: 'prokaryote_vs_eukaryote_electron_acceptor_diversity_anaerobic_nitrate_respiration_comparison_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'fermentation',
        specificItems: ['foundations'],
        diagramId: 'fermentationNadRegenerationGlycolysisBottleneckAerobicAnaerobicBranchpointDiagram',
        experimentId: 'nad_regeneration_necessity_iodoacetate_blocked_glycolysis_yeast_fermentation_halting_experiment',
        contentKey: 'components'
    },
    {
        id: 'lacticAcidFermentation',
        label: 'Lactic Acid Fermentation',
        sectionNumber: 2,
        subTopic: 'fermentation',
        specificItems: ['lacticAcidFermentation'],
        diagramId: 'ldhPyruvateToLactateMechanismIsoformsCoriCycleMuscleLiverDiagram',
        experimentId: 'muscle_lactate_accumulation_intense_exercise_blood_lactate_strip_test_threshold_experiment',
        contentKey: 'components'
    },
    {
        id: 'alcoholicFermentation',
        label: 'Alcoholic Fermentation',
        sectionNumber: 3,
        subTopic: 'fermentation',
        specificItems: ['alcoholicFermentation'],
        diagramId: 'alcoholicFermentationPdcAdhTwoStepPyruvateToEthanolCo2TppMechanismDiagram',
        experimentId: 'yeast_alcoholic_fermentation_glucose_co2_production_delivery_tube_limewater_ethanol_test_experiment',
        contentKey: 'components'
    },
    {
        id: 'otherFermentationTypes',
        label: 'Other Types of Fermentation',
        sectionNumber: 4,
        subTopic: 'fermentation',
        specificItems: ['otherFermentationTypes'],
        diagramId: 'microbialFermentationDiversityMixedAcidButanediolPropionicAbeFermentationProductsDiagram',
        experimentId: 'imvic_test_mixed_acid_vs_butanediol_fermentation_e_coli_klebsiella_differentiation_experiment',
        contentKey: 'components'
    },
    {
        id: 'regulationOfFermentation',
        label: 'Regulation of Fermentation',
        sectionNumber: 5,
        subTopic: 'fermentation',
        specificItems: ['regulationOfFermentation'],
        diagramId: 'pasteurEffectCrabtreeEffectOxygenGlucoseConcentrationFermentationSwitchDiagram',
        experimentId: 'pasteur_effect_yeast_aerobic_anaerobic_ethanol_production_oxygen_introduction_experiment',
        contentKey: 'components'
    },
    {
        id: 'industrialFermentation',
        label: 'Industrial Fermentation',
        sectionNumber: 6,
        subTopic: 'fermentation',
        specificItems: ['industrialFermentation'],
        diagramId: 'industrialFermentationBioreactorBatchFedBatchContinuousModeFoodBiofuelDiagram',
        experimentId: 'bread_dough_leavening_yeast_sugar_concentration_co2_volume_produced_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'fermentationInHumanBody',
        label: 'Fermentation in the Human Body',
        sectionNumber: 7,
        subTopic: 'fermentation',
        specificItems: ['fermentationInHumanBody'],
        diagramId: 'humanBodyFermentationMuscleRbcGutMicrobiomeScfaWarburgSitesDiagram',
        experimentId: 'gut_microbiome_short_chain_fatty_acid_production_resistant_starch_fermentation_ph_indicator_experiment',
        contentKey: 'components'
    },
    {
        id: 'lacticAcidosis',
        label: 'Lactic Acidosis',
        sectionNumber: 8,
        subTopic: 'fermentation',
        specificItems: ['lacticAcidosis'],
        diagramId: 'lacticAcidosisTypeATypeBCausesBloodLactateThresholdAcidosisConsequencesDiagram',
        experimentId: 'simulated_type_a_lactic_acidosis_hypoxia_tissue_lactate_accumulation_ph_change_model_experiment',
        contentKey: 'components'
    },
    {
        id: 'evolutionAndEcology',
        label: 'Evolution and Ecology of Fermentation',
        sectionNumber: 9,
        subTopic: 'fermentation',
        specificItems: ['evolutionAndEcology'],
        diagramId: 'fermentationEvolutionaryTimlinePreoxygentEarthAnoxicNicheObligateVsFacultativeAnaerobeDiagram',
        experimentId: 'anaerobic_sediment_microbial_community_fermentation_product_diversity_gas_chromatography_experiment',
        contentKey: 'components'
    },
    {
        id: 'fermentationTechnologyAndBiotechnology',
        label: 'Fermentation Technology and Biotechnology',
        sectionNumber: 10,
        subTopic: 'fermentation',
        specificItems: ['fermentationTechnologyAndBiotechnology'],
        diagramId: 'metabolicEngineeringFermentationStrainImprovementBiofuelPharmaceuticalYieldOptimisationDiagram',
        experimentId: 'engineered_yeast_xylose_fermentation_pentose_sugar_lignocellulosic_biomass_ethanol_yield_experiment',
        contentKey: 'components'
    },



    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'pathogens',
        specificItems: ['foundations'],
        diagramId: 'pathogenHostInfectionCycleDiagram',
        experimentId: 'microscopy_observation_of_microorganism_types_experiment',
        contentKey: 'components'
    },
    {
        id: 'classificationOfPathogens',
        label: 'Classification of Pathogens',
        sectionNumber: 2,
        subTopic: 'pathogens',
        specificItems: ['classificationOfPathogens'],
        diagramId: 'pathogenClassificationComparativeChart',
        experimentId: 'gram_staining_bacterial_classification_experiment',
        contentKey: 'components'
    },
    {
        id: 'pathogenStructure',
        label: 'Pathogen Structure',
        sectionNumber: 3,
        subTopic: 'pathogens',
        specificItems: ['pathogenStructure'],
        diagramId: 'bacterialCellVsViralParticleStructureDiagram',
        experimentId: 'electron_micrograph_analysis_viral_and_bacterial_ultrastructure_experiment',
        contentKey: 'components'
    },
    {
        id: 'transmissionRoutes',
        label: 'Transmission Routes',
        sectionNumber: 4,
        subTopic: 'pathogens',
        specificItems: ['transmissionRoutes'],
        diagramId: 'pathogenTransmissionRouteFlowchart',
        experimentId: 'glitter_handwashing_contact_transmission_modelling_experiment',
        contentKey: 'components'
    },
    {
        id: 'entryPoints',
        label: 'Entry Points and Portals',
        sectionNumber: 5,
        subTopic: 'pathogens',
        specificItems: ['entryPoints'],
        diagramId: 'humanBodyPortalsOfEntryAnnotatedDiagram',
        experimentId: 'barrier_effectiveness_lysozyme_and_skin_pH_investigation_experiment',
        contentKey: 'components'
    },
    {
        id: 'virulenceFactors',
        label: 'Virulence Factors',
        sectionNumber: 6,
        subTopic: 'pathogens',
        specificItems: ['virulenceFactors'],
        diagramId: 'virulenceFactorMechanismsAnnotatedDiagram',
        experimentId: 'capsule_vs_non_capsule_bacteria_phagocytosis_resistance_experiment',
        contentKey: 'components'
    },
    {
        id: 'replicationMechanisms',
        label: 'Mechanisms of Pathogen Replication',
        sectionNumber: 7,
        subTopic: 'pathogens',
        specificItems: ['replicationMechanisms'],
        diagramId: 'lyticVsLysogenicViralReplicationCycleDiagram',
        experimentId: 'bacterial_binary_fission_growth_curve_broth_turbidity_experiment',
        contentKey: 'components'
    },
    {
        id: 'detectionAndDiagnosis',
        label: 'Pathogen Detection and Diagnosis',
        sectionNumber: 8,
        subTopic: 'pathogens',
        specificItems: ['detectionAndDiagnosis'],
        diagramId: 'diagnosticMethodsComparisonSensitivitySpecificityChart',
        experimentId: 'pcr_gel_electrophoresis_pathogen_detection_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'antimicrobialAgents',
        label: 'Antimicrobial Agents and Resistance',
        sectionNumber: 9,
        subTopic: 'pathogens',
        specificItems: ['antimicrobialAgents'],
        diagramId: 'antibioticResistanceMechanismsAnnotatedDiagram',
        experimentId: 'antibiotic_disc_diffusion_kirby_bauer_zone_of_inhibition_experiment',
        contentKey: 'components'
    },
    {
        id: 'epidemiology',
        label: 'Epidemiology of Pathogens',
        sectionNumber: 10,
        subTopic: 'pathogens',
        specificItems: ['epidemiology'],
        diagramId: 'reproductionNumberHerdImmunityThresholdGraph',
        experimentId: 'disease_spread_simulation_r0_modelling_beads_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'vaccines',
        specificItems: ['foundations'],
        diagramId: 'primaryVsSecondaryImmuneResponseCurvesDiagram',
        experimentId: 'immunological_memory_antibody_titre_data_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'typesOfVaccines',
        label: 'Types of Vaccines',
        sectionNumber: 2,
        subTopic: 'vaccines',
        specificItems: ['typesOfVaccines'],
        diagramId: 'vaccinePlatformComparisonAnnotatedDiagram',
        experimentId: 'live_vs_inactivated_vaccine_stability_heat_inactivation_experiment',
        contentKey: 'components'
    },
    {
        id: 'vaccineComponents',
        label: 'Vaccine Components',
        sectionNumber: 3,
        subTopic: 'vaccines',
        specificItems: ['vaccineComponents'],
        diagramId: 'vaccineFormulationIngredientsBreakdownDiagram',
        experimentId: 'adjuvant_effect_on_immune_response_aluminium_salt_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'mechanismsOfVaccineInducedImmunity',
        label: 'Mechanisms of Vaccine-Induced Immunity',
        sectionNumber: 4,
        subTopic: 'vaccines',
        specificItems: ['mechanismsOfVaccineInducedImmunity'],
        diagramId: 'antigenPresentationToTAndBCellActivationPathwayDiagram',
        experimentId: 'elisa_antibody_detection_post_vaccination_serum_titration_experiment',
        contentKey: 'components'
    },
    {
        id: 'vaccineSchedules',
        label: 'Vaccine Schedules and Administration',
        sectionNumber: 5,
        subTopic: 'vaccines',
        specificItems: ['vaccineSchedules'],
        diagramId: 'childhoodImmunisationScheduleTimelineDiagram',
        experimentId: 'cold_chain_temperature_monitoring_vaccine_potency_experiment',
        contentKey: 'components'
    },
    {
        id: 'herdImmunity',
        label: 'Herd Immunity',
        sectionNumber: 6,
        subTopic: 'vaccines',
        specificItems: ['herdImmunity'],
        diagramId: 'herdImmunityThresholdPopulationGridDiagram',
        experimentId: 'network_transmission_simulation_herd_immunity_threshold_experiment',
        contentKey: 'components'
    },
    {
        id: 'adverseEffectsAndContraindications',
        label: 'Adverse Effects and Contraindications',
        sectionNumber: 7,
        subTopic: 'vaccines',
        specificItems: ['adverseEffectsAndContraindications'],
        diagramId: 'vaccineAdverseEventFrequencyRiskComparisonChart',
        experimentId: 'vaccine_safety_data_vaers_case_study_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'specificVaccineExamples',
        label: 'Specific Vaccine Examples',
        sectionNumber: 8,
        subTopic: 'vaccines',
        specificItems: ['specificVaccineExamples'],
        diagramId: 'mRNAVaccineDeliveryLipidNanoparticleMechanismDiagram',
        experimentId: 'vlp_assembly_model_hpv_vaccine_antigen_structure_experiment',
        contentKey: 'components'
    },
    {
        id: 'vaccineDevlopmentProcess',
        label: 'Vaccine Development Process',
        sectionNumber: 9,
        subTopic: 'vaccines',
        specificItems: ['vaccineDevlopmentProcess'],
        diagramId: 'clinicalTrialPhasesTimelineFunnelDiagram',
        experimentId: 'phase_trial_design_randomisation_placebo_control_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'globalVaccineProgrammes',
        label: 'Global Vaccine Programmes',
        sectionNumber: 10,
        subTopic: 'vaccines',
        specificItems: ['globalVaccineProgrammes'],
        diagramId: 'smallpoxEradicationGlobalCoverageMapDiagram',
        experimentId: 'disease_incidence_pre_post_vaccination_historical_data_analysis_experiment',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'antibodies',
        specificItems: ['foundations'],
        diagramId: 'plasmaCellAntibodySecretionOverviewDiagram',
        experimentId: 'antigen_antibody_specificity_lock_and_key_card_sort_experiment',
        contentKey: 'components'
    },
    {
        id: 'antibodyStructure',
        label: 'Antibody Structure',
        sectionNumber: 2,
        subTopic: 'antibodies',
        specificItems: ['antibodyStructure'],
        diagramId: 'immunoglobulinYShapeHeavyLightChainFabFcDiagram',
        experimentId: 'paper_model_antibody_fab_fc_region_assembly_experiment',
        contentKey: 'components'
    },
    {
        id: 'antibodyClasses',
        label: 'Antibody Classes (Isotypes)',
        sectionNumber: 3,
        subTopic: 'antibodies',
        specificItems: ['antibodyClasses'],
        diagramId: 'fiveImmunoglobulinIsotypesStructureFunctionComparisonChart',
        experimentId: 'igm_vs_igg_serology_acute_vs_past_infection_case_study_experiment',
        contentKey: 'components'
    },
    {
        id: 'antibodyAntigenInteraction',
        label: 'Antibody–Antigen Interaction',
        sectionNumber: 4,
        subTopic: 'antibodies',
        specificItems: ['antibodyAntigenInteraction'],
        diagramId: 'epitopeParatopeComplementarityBindingForcesDiagram',
        experimentId: 'ouchterlony_double_immunodiffusion_precipitation_lines_experiment',
        contentKey: 'components'
    },
    {
        id: 'effectorFunctions',
        label: 'Effector Functions of Antibodies',
        sectionNumber: 5,
        subTopic: 'antibodies',
        specificItems: ['effectorFunctions'],
        diagramId: 'opsonisationComplementADCCAgglutinationEffectorPathwaysDiagram',
        experimentId: 'abo_blood_group_agglutination_antibody_reaction_experiment',
        contentKey: 'components'
    },
    {
        id: 'bCellActivationAndProduction',
        label: 'B Cell Activation and Antibody Production',
        sectionNumber: 6,
        subTopic: 'antibodies',
        specificItems: ['bCellActivationAndProduction'],
        diagramId: 'germinalCentreAffinityMaturationClassSwitchingDiagram',
        experimentId: 'clonal_selection_simulation_coloured_bead_population_modelling_experiment',
        contentKey: 'components'
    },
    {
        id: 'passiveAndActiveImmunity',
        label: 'Passive and Active Immunity',
        sectionNumber: 7,
        subTopic: 'antibodies',
        specificItems: ['passiveAndActiveImmunity'],
        diagramId: 'activeVsPassiveImmunityOnsetDurationComparisonDiagram',
        experimentId: 'maternal_antibody_transfer_neonatal_protection_case_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'monoclonalAntibodies',
        label: 'Monoclonal Antibodies',
        sectionNumber: 8,
        subTopic: 'antibodies',
        specificItems: ['monoclonalAntibodies'],
        diagramId: 'hybridomaTechnologyMyelomaBCellFusionWorkflowDiagram',
        experimentId: 'elisa_lateral_flow_monoclonal_antibody_detection_experiment',
        contentKey: 'components'
    },
    {
        id: 'antibodiesInDisease',
        label: 'Antibodies in Disease',
        sectionNumber: 9,
        subTopic: 'antibodies',
        specificItems: ['antibodiesInDisease'],
        diagramId: 'autoantibodyMediatedTissueDAmageMechanismsDiagram',
        experimentId: 'rhesus_incompatibility_haemolytic_disease_newborn_case_study_experiment',
        contentKey: 'components'
    },
    {
        id: 'measurementAndDetection',
        label: 'Measurement and Detection of Antibodies',
        sectionNumber: 10,
        subTopic: 'antibodies',
        specificItems: ['measurementAndDetection'],
        diagramId: 'indirectElisaDetectionStepByStepDiagram',
        experimentId: 'sandwich_elisa_antibody_titre_serial_dilution_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'diseases',
        specificItems: ['foundations'],
        diagramId: 'signsVsSymptomsAetiologyPathogenesisConceptMapDiagram',
        experimentId: 'disease_signs_vs_symptoms_case_history_classification_experiment',
        contentKey: 'components'
    },
    {
        id: 'classificationOfDiseases',
        label: 'Classification of Diseases',
        sectionNumber: 2,
        subTopic: 'diseases',
        specificItems: ['classificationOfDiseases'],
        diagramId: 'diseaseClassificationSpiderDiagramByAetiology',
        experimentId: 'disease_category_sorting_communicable_vs_noncommunicable_experiment',
        contentKey: 'components'
    },
    {
        id: 'infectiousDiseases',
        label: 'Infectious Diseases',
        sectionNumber: 3,
        subTopic: 'diseases',
        specificItems: ['infectiousDiseases'],
        diagramId: 'infectiousDiseaseStagesIncubationProdromeAcuteConvalescenceDiagram',
        experimentId: 'tuberculosis_malaria_hiv_case_study_pathogenesis_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'nonCommunicableDiseases',
        label: 'Non-Communicable Diseases',
        sectionNumber: 4,
        subTopic: 'diseases',
        specificItems: ['nonCommunicableDiseases'],
        diagramId: 'atherosclerosisPlaqueDevelopmentCrossSection Diagram',
        experimentId: 'cardiovascular_disease_risk_factor_epidemiological_data_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'geneticDiseases',
        label: 'Genetic Diseases',
        sectionNumber: 5,
        subTopic: 'diseases',
        specificItems: ['geneticDiseases'],
        diagramId: 'mendelianInheritancePedigreePatternsDiagram',
        experimentId: 'cystic_fibrosis_punnett_square_carrier_probability_modelling_experiment',
        contentKey: 'components'
    },
    {
        id: 'inflammation',
        label: 'Disease Mechanisms — Inflammation',
        sectionNumber: 6,
        subTopic: 'diseases',
        specificItems: ['inflammation'],
        diagramId: 'acuteInflammationCardinalSignsMediatorCascadeDiagram',
        experimentId: 'onion_skin_inflammation_mediator_histamine_effect_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'epidemiologyOfDisease',
        label: 'Epidemiology of Disease',
        sectionNumber: 7,
        subTopic: 'diseases',
        specificItems: ['epidemiologyOfDisease'],
        diagramId: 'incidenceVsPrevalenceChronicVsAcuteDiseaseComparisonGraph',
        experimentId: 'cohort_vs_case_control_study_design_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'preventionAndControl',
        label: 'Prevention and Control',
        sectionNumber: 8,
        subTopic: 'diseases',
        specificItems: ['preventionAndControl'],
        diagramId: 'primarySecondaryTertiaryPreventionLevelsDiagram',
        experimentId: 'bowel_cancer_screening_wilson_jungner_criteria_evaluation_experiment',
        contentKey: 'components'
    },
    {
        id: 'socialDeterminantsOfHealth',
        label: 'Disease and Social Determinants',
        sectionNumber: 9,
        subTopic: 'diseases',
        specificItems: ['socialDeterminantsOfHealth'],
        diagramId: 'marmotHealthGradientSocioeconomicStatusDiagram',
        experimentId: 'local_disease_rate_socioeconomic_deprivation_index_correlation_experiment',
        contentKey: 'components'
    },
    {
        id: 'emergingAndReemergingDiseases',
        label: 'Emerging and Re-emerging Diseases',
        sectionNumber: 10,
        subTopic: 'diseases',
        specificItems: ['emergingAndReemergingDiseases'],
        diagramId: 'zoonoticSpilloverDriversOneHealthFrameworkDiagram',
        experimentId: 'emerging_disease_outbreak_epicurve_contact_tracing_simulation_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'immuneResponse',
        specificItems: ['foundations'],
        diagramId: 'innateVsAdaptiveImmunityTwoArmOverviewDiagram',
        experimentId: 'self_vs_nonself_recognition_mhc_matching_card_activity_experiment',
        contentKey: 'components'
    },
    {
        id: 'physicalAndChemicalBarriers',
        label: 'Physical and Chemical Barriers',
        sectionNumber: 2,
        subTopic: 'immuneResponse',
        specificItems: ['physicalAndChemicalBarriers'],
        diagramId: 'firstLineDefenceBarriersAnnotatedBodyDiagram',
        experimentId: 'lysozyme_antibacterial_activity_egg_white_bacteria_clearance_experiment',
        contentKey: 'components'
    },
    {
        id: 'innateImmuneResponse',
        label: 'Innate Immune Response',
        sectionNumber: 3,
        subTopic: 'immuneResponse',
        specificItems: ['innateImmuneResponse'],
        diagramId: 'tlrPampSignallingNFkBCytokineProductionPathwayDiagram',
        experimentId: 'neutrophil_phagocytosis_oxidative_burst_chemiluminescence_experiment',
        contentKey: 'components'
    },
    {
        id: 'complementSystem',
        label: 'Complement System',
        sectionNumber: 4,
        subTopic: 'immuneResponse',
        specificItems: ['complementSystem'],
        diagramId: 'complementThreePathwaysConvergenceC3ConvertaseMACDiagram',
        experimentId: 'complement_haemolysis_sheep_rbc_lysis_titration_experiment',
        contentKey: 'components'
    },
    {
        id: 'adaptiveImmuneResponseTCells',
        label: 'Adaptive Immune Response — T Cells',
        sectionNumber: 5,
        subTopic: 'immuneResponse',
        specificItems: ['adaptiveImmuneResponseTCells'],
        diagramId: 'tCellSubsetDifferentiationCytokineEnvironmentDiagram',
        experimentId: 'cd4_cd8_tcell_flow_cytometry_subset_enumeration_experiment',
        contentKey: 'components'
    },
    {
        id: 'adaptiveImmuneResponseBCells',
        label: 'Adaptive Immune Response — B Cells and Humoral',
        sectionNumber: 6,
        subTopic: 'immuneResponse',
        specificItems: ['adaptiveImmuneResponseBCells'],
        diagramId: 'germinalCentreDarkLightZoneSomaticHypermutationDiagram',
        experimentId: 'b_cell_activation_t_dependent_vs_independent_antigen_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'cytokines',
        label: 'Cytokines',
        sectionNumber: 7,
        subTopic: 'immuneResponse',
        specificItems: ['cytokines'],
        diagramId: 'majorCytokineSourceTargetFunctionNetworkDiagram',
        experimentId: 'cytokine_elisa_tnf_alpha_il6_lipopolysaccharide_stimulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'immunologicalMemory',
        label: 'Immunological Memory',
        sectionNumber: 8,
        subTopic: 'immuneResponse',
        specificItems: ['immunologicalMemory'],
        diagramId: 'primarySecondaryResponseAntibodyTitreCurvesDiagram',
        experimentId: 'memory_b_cell_rapid_antibody_recall_response_booster_dose_experiment',
        contentKey: 'components'
    },
    {
        id: 'immuneDysregulation',
        label: 'Immune Dysregulation',
        sectionNumber: 9,
        subTopic: 'immuneResponse',
        specificItems: ['immuneDysregulation'],
        diagramId: 'gelCoomhsHypersensitivityTypeIToIVMechanismsDiagram',
        experimentId: 'type_i_hypersensitivity_ige_mast_cell_degranulation_skin_prick_test_experiment',
        contentKey: 'components'
    },
    {
        id: 'immunotherapy',
        label: 'Immunotherapy',
        sectionNumber: 10,
        subTopic: 'immuneResponse',
        specificItems: ['immunotherapy'],
        diagramId: 'checkpointInhibitorPD1PDL1CancerTCellActivationDiagram',
        experimentId: 'car_t_cell_scfv_chimeric_receptor_design_tumour_targeting_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'whiteBloodCells',
        specificItems: ['foundations'],
        diagramId: 'haematopoiesisLineageMyeloidLymphoidTreeDiagram',
        experimentId: 'differential_white_blood_cell_count_blood_film_examination_experiment',
        contentKey: 'components'
    },
    {
        id: 'neutrophils',
        label: 'Neutrophils',
        sectionNumber: 2,
        subTopic: 'whiteBloodCells',
        specificItems: ['neutrophils'],
        diagramId: 'neutrophilRecruitmentRollingAdhesionDiapedesisChemoaxisDiagram',
        experimentId: 'oxidative_burst_neutrophil_nadph_oxidase_chemiluminescence_experiment',
        contentKey: 'components'
    },
    {
        id: 'eosinophils',
        label: 'Eosinophils',
        sectionNumber: 3,
        subTopic: 'whiteBloodCells',
        specificItems: ['eosinophils'],
        diagramId: 'eosinophilGranuleContentsAntiHelminthDegranulationDiagram',
        experimentId: 'eosinophil_count_allergic_disease_helminth_infection_blood_film_experiment',
        contentKey: 'components'
    },
    {
        id: 'basophils',
        label: 'Basophils',
        sectionNumber: 4,
        subTopic: 'whiteBloodCells',
        specificItems: ['basophils'],
        diagramId: 'basophilMastCellFcepsilonRIIgECrossLinkingDegranulationDiagram',
        experimentId: 'basophil_activation_test_cd63_upregulation_allergen_challenge_experiment',
        contentKey: 'components'
    },
    {
        id: 'monocytesAndMacrophages',
        label: 'Monocytes and Macrophages',
        sectionNumber: 5,
        subTopic: 'whiteBloodCells',
        specificItems: ['monocytesAndMacrophages'],
        diagramId: 'macrophageM1M2PolarisationTissueMacrophageTypesAnnotatedDiagram',
        experimentId: 'macrophage_phagocytosis_fluorescent_bead_uptake_microscopy_experiment',
        contentKey: 'components'
    },
    {
        id: 'dendriticCells',
        label: 'Dendritic Cells',
        sectionNumber: 6,
        subTopic: 'whiteBloodCells',
        specificItems: ['dendriticCells'],
        diagramId: 'dendriticCellMaturationMigrationNaiveTCellActivationDiagram',
        experimentId: 'cross_presentation_mhc_class_i_exogenous_antigen_loading_experiment',
        contentKey: 'components'
    },
    {
        id: 'tLymphocytes',
        label: 'T Lymphocytes',
        sectionNumber: 7,
        subTopic: 'whiteBloodCells',
        specificItems: ['tLymphocytes'],
        diagramId: 'thymusPositiveNegativeSelectionCD4CD8LinearisationDiagram',
        experimentId: 'tcell_subset_flow_cytometry_cd4_cd8_treg_enumeration_experiment',
        contentKey: 'components'
    },
    {
        id: 'bLymphocytes',
        label: 'B Lymphocytes',
        sectionNumber: 8,
        subTopic: 'whiteBloodCells',
        specificItems: ['bLymphocytes'],
        diagramId: 'bCellDevelopmentVDJRecombinationBoneMarrowPeripheryDiagram',
        experimentId: 'plasma_cell_immunoglobulin_secretion_elispot_assay_experiment',
        contentKey: 'components'
    },
    {
        id: 'naturalKillerCells',
        label: 'Natural Killer Cells',
        sectionNumber: 9,
        subTopic: 'whiteBloodCells',
        specificItems: ['naturalKillerCells'],
        diagramId: 'nkCellMissingSelfKIRInhibitoryActivatingReceptorBalanceDiagram',
        experimentId: 'nk_cell_cytotoxicity_calcein_am_target_cell_lysis_assay_experiment',
        contentKey: 'components'
    },
    {
        id: 'wbcDisordersAndClinicalApplications',
        label: 'WBC Disorders and Clinical Applications',
        sectionNumber: 10,
        subTopic: 'whiteBloodCells',
        specificItems: ['wbcDisordersAndClinicalApplications'],
        diagramId: 'leukaemiaClassificationBlastCellMorphologyAuerRodDiagram',
        experimentId: 'full_blood_count_differential_leukaemia_case_interpretation_experiment',
        contentKey: 'components'
    },






    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'ecosystems',
        specificItems: ['foundations'],
        diagramId: 'biotaAbiotaComponentsLabelledDiagram',
        experimentId: 'local_ecosystem_biotic_abiotic_survey_field_investigation',
        contentKey: 'components'
    },
    {
        id: 'ecosystemStructure',
        label: 'Ecosystem Structure',
        sectionNumber: 2,
        subTopic: 'ecosystems',
        specificItems: ['ecosystemStructure'],
        diagramId: 'trophicLevelsPyramidAnnotatedDiagram',
        experimentId: 'constructing_food_web_from_gut_content_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'ecosystemFunction',
        label: 'Ecosystem Function',
        sectionNumber: 3,
        subTopic: 'ecosystems',
        specificItems: ['ecosystemFunction'],
        diagramId: 'gppNppRespirationEnergyFlowDiagram',
        experimentId: 'leaf_litter_decomposition_rate_temperature_moisture_experiment',
        contentKey: 'components'
    },
    {
        id: 'ecosystemStabilityAndResilience',
        label: 'Ecosystem Stability and Resilience',
        sectionNumber: 4,
        subTopic: 'ecosystems',
        specificItems: ['ecosystemStabilityAndResilience'],
        diagramId: 'intermediateDisturbanceHypothesisDiversityCurve',
        experimentId: 'simulated_species_removal_food_web_stability_modelling_activity',
        contentKey: 'components'
    },
    {
        id: 'ecosystemServices',
        label: 'Ecosystem Services',
        sectionNumber: 5,
        subTopic: 'ecosystems',
        specificItems: ['ecosystemServices'],
        diagramId: 'fourCategoriesEcosystemServicesClassificationChart',
        experimentId: 'wetland_water_purification_nitrate_removal_microcosm_experiment',
        contentKey: 'components'
    },
    {
        id: 'aquaticEcosystems',
        label: 'Aquatic Ecosystems',
        sectionNumber: 6,
        subTopic: 'ecosystems',
        specificItems: ['aquaticEcosystems'],
        diagramId: 'lakeZonationLittoralLimneticProfundalBenthicDiagram',
        experimentId: 'freshwater_invertebrate_kick_sampling_water_quality_assessment',
        contentKey: 'components'
    },
    {
        id: 'terrestrialEcosystems',
        label: 'Terrestrial Ecosystems',
        sectionNumber: 7,
        subTopic: 'ecosystems',
        specificItems: ['terrestrialEcosystems'],
        diagramId: 'soilHorizonProfileOAbcRLayersDiagram',
        experimentId: 'soil_texture_organic_matter_content_loss_on_ignition_experiment',
        contentKey: 'components'
    },
    {
        id: 'humanImpacts',
        label: 'Human Impacts on Ecosystems',
        sectionNumber: 8,
        subTopic: 'ecosystems',
        specificItems: ['humanImpacts'],
        diagramId: 'eutrophicationStagesAlgalBloomHypoxiaDiagram',
        experimentId: 'eutrophication_fertiliser_concentration_algal_growth_microcosm_experiment',
        contentKey: 'components'
    },
    {
        id: 'conservationAndRestoration',
        label: 'Conservation and Restoration',
        sectionNumber: 9,
        subTopic: 'ecosystems',
        specificItems: ['conservationAndRestoration'],
        diagramId: 'yellowstoneWolfReintroductionTrophicCascadeFlowDiagram',
        experimentId: 'habitat_corridor_connectivity_effect_on_colonisation_simulation',
        contentKey: 'components'
    },
    {
        id: 'measurementAndMonitoring',
        label: 'Measurement and Monitoring',
        sectionNumber: 10,
        subTopic: 'ecosystems',
        specificItems: ['measurementAndMonitoring'],
        diagramId: 'markReleaseRecaptureLincolnPetersenFormulaAnnotatedDiagram',
        experimentId: 'mark_release_recapture_woodlice_population_estimate_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'foodWebs',
        specificItems: ['foundations'],
        diagramId: 'foodChainArrowDirectionEnergyFlowLabelledDiagram',
        experimentId: 'constructing_food_chain_from_local_habitat_field_identification',
        contentKey: 'components'
    },
    {
        id: 'foodWebStructure',
        label: 'Food Web Structure',
        sectionNumber: 2,
        subTopic: 'foodWebs',
        specificItems: ['foodWebStructure'],
        diagramId: 'foodWebNodeLinkConnectanceDiagram',
        experimentId: 'food_web_connectance_calculation_from_published_species_data',
        contentKey: 'components'
    },
    {
        id: 'energyFlowInFoodWebs',
        label: 'Energy Flow in Food Webs',
        sectionNumber: 3,
        subTopic: 'foodWebs',
        specificItems: ['energyFlowInFoodWebs'],
        diagramId: 'tenPercentEnergyTransferTrophicLevelCalculationDiagram',
        experimentId: 'energy_loss_between_trophic_levels_calorimetry_food_sample_experiment',
        contentKey: 'components'
    },
    {
        id: 'trophicCascades',
        label: 'Trophic Cascades',
        sectionNumber: 4,
        subTopic: 'foodWebs',
        specificItems: ['trophicCascades'],
        diagramId: 'seaOtterUrchinKelpTopDownCascadeFlowDiagram',
        experimentId: 'simulated_apex_predator_removal_cascade_effects_modelling_activity',
        contentKey: 'components'
    },
    {
        id: 'foodWebStability',
        label: 'Food Web Stability',
        sectionNumber: 5,
        subTopic: 'foodWebs',
        specificItems: ['foodWebStability'],
        diagramId: 'redundancyRobustnessExtinctionCascadeNetworkDiagram',
        experimentId: 'species_removal_secondary_extinction_food_web_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'interspecificInteractions',
        label: 'Interspecific Interactions',
        sectionNumber: 6,
        subTopic: 'foodWebs',
        specificItems: ['interspecificInteractions'],
        diagramId: 'interactionTypesMatrixPlusMinus_zeroDiagram',
        experimentId: 'aphid_ladybird_predation_rate_density_dependent_field_count',
        contentKey: 'components'
    },
    {
        id: 'foodWebTypes',
        label: 'Food Web Types',
        sectionNumber: 7,
        subTopic: 'foodWebs',
        specificItems: ['foodWebTypes'],
        diagramId: 'grazingVsDetritalPathwayEnergyFlowComparisonDiagram',
        experimentId: 'detrital_vs_grazing_pathway_leaf_litter_decomposition_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'foodWebModelling',
        label: 'Food Web Modelling',
        sectionNumber: 8,
        subTopic: 'foodWebs',
        specificItems: ['foodWebModelling'],
        diagramId: 'lotkaVolterraPredatorPreyOscillationPhaseDiagram',
        experimentId: 'predator_prey_population_oscillation_lotka_volterra_spreadsheet_model',
        contentKey: 'components'
    },
    {
        id: 'foodWebsAndHumanImpacts',
        label: 'Food Webs and Human Impacts',
        sectionNumber: 9,
        subTopic: 'foodWebs',
        specificItems: ['foodWebsAndHumanImpacts'],
        diagramId: 'biomagnificationDDTConcentrationTrophicLevelBarChart',
        experimentId: 'simulated_biomagnification_dye_concentration_food_chain_model_experiment',
        contentKey: 'components'
    },
    {
        id: 'foodWebsInConservation',
        label: 'Food Webs in Conservation',
        sectionNumber: 10,
        subTopic: 'foodWebs',
        specificItems: ['foodWebsInConservation'],
        diagramId: 'keystoneSpeciesConservationPriorityFoodWebDiagram',
        experimentId: 'fisheries_msy_trophic_level_catch_data_analysis_investigation',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'energyFlow',
        specificItems: ['foundations'],
        diagramId: 'firstSecondLawThermodynamicsEcosystemEnergyFlowDiagram',
        experimentId: 'photosynthesis_respiration_oxygen_production_elodea_light_experiment',
        contentKey: 'components'
    },
    {
        id: 'primaryProductivity',
        label: 'Primary Productivity',
        sectionNumber: 2,
        subTopic: 'energyFlow',
        specificItems: ['primaryProductivity'],
        diagramId: 'gppNppAutotrophicRespirationSubtractionDiagram',
        experimentId: 'light_dark_bottle_dissolved_oxygen_aquatic_gpp_npp_measurement',
        contentKey: 'components'
    },
    {
        id: 'energyTransferEfficiencies',
        label: 'Energy Transfer Efficiencies',
        sectionNumber: 3,
        subTopic: 'energyFlow',
        specificItems: ['energyTransferEfficiencies'],
        diagramId: 'assimilationNetProductionEcologicalEfficiencyCalculationFlowchart',
        experimentId: 'woodlouse_energy_budget_ingestion_faeces_respiration_measurement',
        contentKey: 'components'
    },
    {
        id: 'energyBudgets',
        label: 'Energy Budgets',
        sectionNumber: 4,
        subTopic: 'energyFlow',
        specificItems: ['energyBudgets'],
        diagramId: 'organismalEnergyBudgetIPRFPartitioningDiagram',
        experimentId: 'caterpillar_energy_budget_food_intake_frass_mass_growth_experiment',
        contentKey: 'components'
    },
    {
        id: 'ecologicalPyramids',
        label: 'Ecological Pyramids',
        sectionNumber: 5,
        subTopic: 'energyFlow',
        specificItems: ['ecologicalPyramids'],
        diagramId: 'threeTypesEcologicalPyramidsComparisonInvertedExampleDiagram',
        experimentId: 'constructing_pyramid_of_numbers_biomass_from_quadrat_harvest_data',
        contentKey: 'components'
    },
    {
        id: 'solarEnergyAndPhotosyntheticEfficiency',
        label: 'Solar Energy and Photosynthetic Efficiency',
        sectionNumber: 6,
        subTopic: 'energyFlow',
        specificItems: ['solarEnergyAndPhotosyntehticEfficiency'],
        diagramId: 'c3Vs_c4VsCamPhotosynthesisPathwayComparisonDiagram',
        experimentId: 'c3_vs_c4_grass_photosynthesis_efficiency_chlorophyll_extraction_comparison',
        contentKey: 'components'
    },
    {
        id: 'respirationAndEnergyLoss',
        label: 'Respiration and Energy Loss',
        sectionNumber: 7,
        subTopic: 'energyFlow',
        specificItems: ['respirationAndEnergyLoss'],
        diagramId: 'endothermVsEctothermRespiratoryEnergyLossComparisonChart',
        experimentId: 'respirometer_woodlouse_vs_mealworm_oxygen_consumption_rate_comparison',
        contentKey: 'components'
    },
    {
        id: 'energyFlowModelsAndMeasurements',
        label: 'Energy Flow Models and Measurements',
        sectionNumber: 8,
        subTopic: 'energyFlow',
        specificItems: ['energyFlowModelsAndMeasurements'],
        diagramId: 'odumStyleEnergyFlowBoxArrowCompartmentDiagram',
        experimentId: 'terrestrial_npp_estimation_repeated_quadrat_harvest_biomass_method',
        contentKey: 'components'
    },
    {
        id: 'humanInfluencesOnEnergyFlow',
        label: 'Human Influences on Energy Flow',
        sectionNumber: 9,
        subTopic: 'energyFlow',
        specificItems: ['humanInfluencesOnEnergyFlow'],
        diagramId: 'humanAppropriationNPPLandUseGlobalPieChartDiagram',
        experimentId: 'trophic_level_food_choice_energy_efficiency_dietary_comparison_investigation',
        contentKey: 'components'
    },
    {
        id: 'energyFlowInSpecificEcosystems',
        label: 'Energy Flow in Specific Ecosystems',
        sectionNumber: 10,
        subTopic: 'energyFlow',
        specificItems: ['energyFlowInSpecificEcosystems'],
        diagramId: 'nppComparisonBarChartMajorEcosystemTypesDiagram',
        experimentId: 'comparing_productivity_shaded_vs_unshaded_plant_growth_chamber_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'nutrientCycles',
        specificItems: ['foundations'],
        diagramId: 'reservoirFluxTurnoverTimeGeneralBiogeochemicalCycleDiagram',
        experimentId: 'decomposition_rate_leaf_litter_bags_mesh_size_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'carbonCycle',
        label: 'Carbon Cycle',
        sectionNumber: 2,
        subTopic: 'nutrientCycles',
        specificItems: ['carbonCycle'],
        diagramId: 'globalCarbonCycleReservoirsFluxesAnnotatedDiagram',
        experimentId: 'soil_respiration_co2_evolution_soda_lime_mass_loss_experiment',
        contentKey: 'components'
    },
    {
        id: 'nitrogenCycle',
        label: 'Nitrogen Cycle',
        sectionNumber: 3,
        subTopic: 'nutrientCycles',
        specificItems: ['nitrogenCycle'],
        diagramId: 'nitrogenCycleFixationNitrificationDenitrificationPathwayDiagram',
        experimentId: 'rhizobium_root_nodule_legume_inoculation_nitrogen_fixation_experiment',
        contentKey: 'components'
    },
    {
        id: 'phosphorusCycle',
        label: 'Phosphorus Cycle',
        sectionNumber: 4,
        subTopic: 'nutrientCycles',
        specificItems: ['phosphorusCycle'],
        diagramId: 'phosphorusCycleSedimentaryNoAtmosphericPhaseAnnotatedDiagram',
        experimentId: 'phosphate_soil_adsorption_ph_effect_colorimetric_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'sulfurCycle',
        label: 'Sulfur Cycle',
        sectionNumber: 5,
        subTopic: 'nutrientCycles',
        specificItems: ['sulfurCycle'],
        diagramId: 'sulfurCycleDMSVolcanicSO2CombustionPathwayDiagram',
        experimentId: 'acid_rain_simulation_so2_effect_on_plant_germination_experiment',
        contentKey: 'components'
    },
    {
        id: 'waterCycle',
        label: 'Water (Hydrological) Cycle',
        sectionNumber: 6,
        subTopic: 'nutrientCycles',
        specificItems: ['waterCycle'],
        diagramId: 'hydrologicalCycleEvaporationTranspirationPrecipitationInfiltrationDiagram',
        experimentId: 'transpiration_rate_potometer_wind_humidity_temperature_variable_experiment',
        contentKey: 'components'
    },
    {
        id: 'nutrientLimitationAndStoichiometry',
        label: 'Nutrient Limitation and Stoichiometry',
        sectionNumber: 7,
        subTopic: 'nutrientCycles',
        specificItems: ['nutrientLimitationAndStoichiometry'],
        diagramId: 'liebigBarrelLawOfMinimumNutrientLimitationDiagram',
        experimentId: 'algal_growth_liebig_minimum_single_nutrient_limitation_flask_experiment',
        contentKey: 'components'
    },
    {
        id: 'eutrophication',
        label: 'Eutrophication',
        sectionNumber: 8,
        subTopic: 'nutrientCycles',
        specificItems: ['eutrophication'],
        diagramId: 'eutrophicationStagesNutrientAlgalBloomHypoxiaSequenceDiagram',
        experimentId: 'fertiliser_concentration_algal_growth_dissolved_oxygen_microcosm_experiment',
        contentKey: 'components'
    },
    {
        id: 'nutrientCyclingInSoils',
        label: 'Nutrient Cycling in Soils',
        sectionNumber: 9,
        subTopic: 'nutrientCycles',
        specificItems: ['nutrientCyclingInSoils'],
        diagramId: 'mycorrhizalHyphalNetworkPhosphorusCarbonExchangeDiagram',
        experimentId: 'mycorrhizal_inoculation_plant_phosphorus_uptake_growth_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'humanImpactsAndSustainableManagement',
        label: 'Human Impacts and Sustainable Management',
        sectionNumber: 10,
        subTopic: 'nutrientCycles',
        specificItems: ['humanImpactsAndSustainableManagement'],
        diagramId: 'haberBoschReactiveNitrogenGlobalBudgetAnthropogenicFlowDiagram',
        experimentId: 'nitrate_leaching_soil_type_drainage_column_percolation_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'symbiosis',
        specificItems: ['foundations'],
        diagramId: 'interactionTypesPlusMinusZeroMatrixClassificationDiagram',
        experimentId: 'local_species_interaction_type_identification_field_observation_survey',
        contentKey: 'components'
    },
    {
        id: 'mutualism',
        label: 'Mutualism',
        sectionNumber: 2,
        subTopic: 'symbiosis',
        specificItems: ['mutualism'],
        diagramId: 'mycorrhizalFungusCarbonPhosphorusBidirectionalExchangeDiagram',
        experimentId: 'bee_flower_visitation_pollination_success_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'commensalism',
        label: 'Commensalism',
        sectionNumber: 3,
        subTopic: 'symbiosis',
        specificItems: ['commensalism'],
        diagramId: 'epiphyteHostTreeInquilinismPhoresisExamplesDiagram',
        experimentId: 'remora_shark_attachment_commensal_benefit_neutral_host_review_analysis',
        contentKey: 'components'
    },
    {
        id: 'parasitism',
        label: 'Parasitism',
        sectionNumber: 4,
        subTopic: 'symbiosis',
        specificItems: ['parasitism'],
        diagramId: 'macroVsMicroparasiteLifeCycleHostParasiteDiagram',
        experimentId: 'cuckoo_egg_mimicry_host_rejection_behaviour_colour_pattern_analysis',
        contentKey: 'components'
    },
    {
        id: 'competition',
        label: 'Competition',
        sectionNumber: 5,
        subTopic: 'symbiosis',
        specificItems: ['competition'],
        diagramId: 'lotkaVolterraCompetitionIsoclineCoexistenceDiagram',
        experimentId: 'interspecific_competition_radish_cress_mixed_monoculture_yield_experiment',
        contentKey: 'components'
    },
    {
        id: 'predation',
        label: 'Predation',
        sectionNumber: 6,
        subTopic: 'symbiosis',
        specificItems: ['predation'],
        diagramId: 'typeIIIFunctionalResponseSigmoidalPredationRateCurve',
        experimentId: 'predator_prey_cryptic_vs_aposematic_prey_selection_choice_experiment',
        contentKey: 'components'
    },
    {
        id: 'herbivory',
        label: 'Herbivory',
        sectionNumber: 7,
        subTopic: 'symbiosis',
        specificItems: ['herbivory'],
        diagramId: 'constitutiveVsInducedPlantDefenceChemicalAlkaloidTanninDiagram',
        experimentId: 'caterpillar_feeding_preference_tannin_treated_vs_untreated_leaf_experiment',
        contentKey: 'components'
    },
    {
        id: 'amensalism',
        label: 'Amensalism',
        sectionNumber: 8,
        subTopic: 'symbiosis',
        specificItems: ['amensalism'],
        diagramId: 'allelopathyJugloneBlackWalnutInhibitionZoneDiagram',
        experimentId: 'allelopathy_garlic_mustard_leachate_seed_germination_inhibition_experiment',
        contentKey: 'components'
    },
    {
        id: 'symbiosisAndEvolution',
        label: 'Symbiosis and Evolution',
        sectionNumber: 9,
        subTopic: 'symbiosis',
        specificItems: ['symbiosisAndEvolution'],
        diagramId: 'endosymbiosisOriginMitochondriaChloroplastEvidenceDiagram',
        experimentId: 'mitochondrial_ribosome_size_70s_vs_80s_comparison_evidence_analysis',
        contentKey: 'components'
    },
    {
        id: 'appliedSymbiosis',
        label: 'Applied Symbiosis',
        sectionNumber: 10,
        subTopic: 'symbiosis',
        specificItems: ['appliedSymbiosis'],
        diagramId: 'humanGutMicrobiomeCompositionDiversityHealthLinkageDiagram',
        experimentId: 'rhizobium_legume_inoculation_plant_growth_nitrogen_fixation_pot_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'populationDynamics',
        specificItems: ['foundations'],
        diagramId: 'populationDensityDistributionRandomUniformClumpedPatternDiagram',
        experimentId: 'quadrat_population_density_estimation_clover_lawn_sampling_investigation',
        contentKey: 'components'
    },
    {
        id: 'populationGrowthModels',
        label: 'Population Growth Models',
        sectionNumber: 2,
        subTopic: 'populationDynamics',
        specificItems: ['populationGrowthModels'],
        diagramId: 'jCurveVsScurveExponentialVsLogisticGrowthComparisonDiagram',
        experimentId: 'yeast_population_logistic_growth_haemocytometer_count_time_series_experiment',
        contentKey: 'components'
    },
    {
        id: 'regulatoryFactors',
        label: 'Regulatory Factors',
        sectionNumber: 3,
        subTopic: 'populationDynamics',
        specificItems: ['regulatoryFactors'],
        diagramId: 'densityDependentVsIndependentBirthDeathRateCrossoverDiagram',
        experimentId: 'flour_beetle_density_dependent_reproduction_crowding_experiment',
        contentKey: 'components'
    },
    {
        id: 'lifeHistoryTheory',
        label: 'Life History Theory',
        sectionNumber: 4,
        subTopic: 'populationDynamics',
        specificItems: ['lifeHistoryTheory'],
        diagramId: 'survivorshipCurveTypeIIIIILogScalePlotDiagram',
        experimentId: 'cohort_survivorship_curve_construction_published_life_table_data_analysis',
        contentKey: 'components'
    },
    {
        id: 'ageAndStageStructure',
        label: 'Age and Stage Structure',
        sectionNumber: 5,
        subTopic: 'populationDynamics',
        specificItems: ['ageAndStageStructure'],
        diagramId: 'populationAgePyramidGrowingStableDecliningComparisonDiagram',
        experimentId: 'human_population_age_pyramid_census_data_construction_analysis_investigation',
        contentKey: 'components'
    },
    {
        id: 'populationFluctuationsAndCycles',
        label: 'Population Fluctuations and Cycles',
        sectionNumber: 6,
        subTopic: 'populationDynamics',
        specificItems: ['populationFluctuationsAndCycles'],
        diagramId: 'lynxHareHudsonBayFurRecordOscillationTimeSeriesDiagram',
        experimentId: 'predator_prey_oscillation_lotka_volterra_model_spreadsheet_simulation',
        contentKey: 'components'
    },
    {
        id: 'metapopulationDynamics',
        label: 'Metapopulation Dynamics',
        sectionNumber: 7,
        subTopic: 'populationDynamics',
        specificItems: ['metapopulationDynamics'],
        diagramId: 'levinsPatchOccupancyMetapopulationColonisationExtinctionDiagram',
        experimentId: 'habitat_fragmentation_patch_size_isolation_colonisation_simulation_activity',
        contentKey: 'components'
    },
    {
        id: 'populationEstimationMethods',
        label: 'Population Estimation Methods',
        sectionNumber: 8,
        subTopic: 'populationDynamics',
        specificItems: ['populationEstimationMethods'],
        diagramId: 'markReleaseRecaptureLincolnPetersenSamplingProtocolDiagram',
        experimentId: 'mark_release_recapture_woodlice_population_size_estimate_field_experiment',
        contentKey: 'components'
    },
    {
        id: 'populationViabilityAnalysis',
        label: 'Population Viability Analysis',
        sectionNumber: 9,
        subTopic: 'populationDynamics',
        specificItems: ['populationViabilityAnalysis'],
        diagramId: 'pvaStochasticSimulationExtinctionProbabilityTimeCurveDiagram',
        experimentId: 'minimum_viable_population_inbreeding_depression_simulation_modelling_activity',
        contentKey: 'components'
    },
    {
        id: 'appliedPopulationEcology',
        label: 'Applied Population Ecology',
        sectionNumber: 10,
        subTopic: 'populationDynamics',
        specificItems: ['appliedPopulationEcology'],
        diagramId: 'maximumSustainableYieldLogisticGrowthHarvestRateDiagram',
        experimentId: 'fisheries_msy_population_model_harvest_rate_spreadsheet_investigation',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'biomes',
        specificItems: ['foundations'],
        diagramId: 'whittakerBiomeDiagramTemperaturePrecipitationSpaceDiagram',
        experimentId: 'climate_data_biome_prediction_whittaker_diagram_mapping_investigation',
        contentKey: 'components'
    },
    {
        id: 'tropicalRainforest',
        label: 'Tropical Rainforest',
        sectionNumber: 2,
        subTopic: 'biomes',
        specificItems: ['tropicalRainforest'],
        diagramId: 'tropicalRainforestVerticalStratificationCanopyLayersDiagram',
        experimentId: 'rainforest_soil_vs_temperate_soil_nutrient_content_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'tropicalSavannaAndGrassland',
        label: 'Tropical Savanna and Grassland',
        sectionNumber: 3,
        subTopic: 'biomes',
        specificItems: ['tropicalSavannaAndGrassland'],
        diagramId: 'savannaWetDrySeasonProductivityFireRegimeAnnotatedDiagram',
        experimentId: 'c4_grass_vs_c3_grass_growth_rate_high_temperature_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'temperateDeciduousForest',
        label: 'Temperate Deciduous Forest',
        sectionNumber: 4,
        subTopic: 'biomes',
        specificItems: ['temperateDeciduousForest'],
        diagramId: 'deciduousForestPhenologySeasonalLeafBudFlowerFruitTimelineDiagram',
        experimentId: 'leaf_litter_decomposition_rate_temperate_forest_field_bag_experiment',
        contentKey: 'components'
    },
    {
        id: 'borealForest',
        label: 'Boreal Forest (Taiga)',
        sectionNumber: 5,
        subTopic: 'biomes',
        specificItems: ['borealForest'],
        diagramId: 'podzolSoilProfileHorizonLeachingIlluviationAnnotatedDiagram',
        experimentId: 'conifer_vs_broadleaf_needle_litter_decomposition_acidification_comparison',
        contentKey: 'components'
    },
    {
        id: 'temperateGrasslandAndMediterranean',
        label: 'Temperate Grassland and Mediterranean Shrubland',
        sectionNumber: 6,
        subTopic: 'biomes',
        specificItems: ['temperateGrasslandAndMediterranean'],
        diagramId: 'mollisol_chernozem_dark_organic_horizon_vs_Mediterranean_alfisol_profileDiagram',
        experimentId: 'sclerophyllous_leaf_wax_cuticle_water_loss_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'desert',
        label: 'Desert',
        sectionNumber: 7,
        subTopic: 'biomes',
        specificItems: ['desert'],
        diagramId: 'xerophyteAdaptationsCACMC4DroughtAvoidanceComparisonDiagram',
        experimentId: 'succulent_vs_non_succulent_water_loss_desiccation_rate_experiment',
        contentKey: 'components'
    },
    {
        id: 'tundra',
        label: 'Tundra',
        sectionNumber: 8,
        subTopic: 'biomes',
        specificItems: ['tundra'],
        diagramId: 'permafrostActiveLayerThawCarbonReleaseFeedbackLoopDiagram',
        experimentId: 'permafrost_soil_core_carbon_content_depth_profile_comparison_analysis',
        contentKey: 'components'
    },
    {
        id: 'aquaticBiomes',
        label: 'Aquatic Biomes',
        sectionNumber: 9,
        subTopic: 'biomes',
        specificItems: ['aquaticBiomes'],
        diagramId: 'coralReefZooxanthellaeBlleachingHeatStressResponseDiagram',
        experimentId: 'salinity_gradient_estuary_species_zonation_transect_survey_experiment',
        contentKey: 'components'
    },
    {
        id: 'biomesAndClimateChange',
        label: 'Biomes and Climate Change',
        sectionNumber: 10,
        subTopic: 'biomes',
        specificItems: ['biomesAndClimateChange'],
        diagramId: 'projectedBiomeShiftPolewardUpslope2100ScenarioDiagram',
        experimentId: 'phenological_mismatch_flowering_date_temperature_correlation_analysis',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'ecologicalSuccession',
        specificItems: ['foundations'],
        diagramId: 'sereSeralStagesPioneerToClimaxCommunityTimelineArrowDiagram',
        experimentId: 'bare_soil_microbial_pioneer_colonisation_observation_plate_experiment',
        contentKey: 'components'
    },
    {
        id: 'primarySuccession',
        label: 'Primary Succession',
        sectionNumber: 2,
        subTopic: 'ecologicalSuccession',
        specificItems: ['primarySuccession'],
        diagramId: 'lithosereBarRockLichenMossHerbShrubWoodlandSevenStagesDiagram',
        experimentId: 'glacial_bay_chronosequence_soil_nitrogen_depth_age_correlation_analysis',
        contentKey: 'components'
    },
    {
        id: 'secondarySuccession',
        label: 'Secondary Succession',
        sectionNumber: 3,
        subTopic: 'ecologicalSuccession',
        specificItems: ['secondarySuccession'],
        diagramId: 'abandonedFieldSuccessionAnnualWeedShrubWoodlandTimelineDiagram',
        experimentId: 'seed_bank_viability_soil_core_germination_trial_disturbed_vs_undisturbed',
        contentKey: 'components'
    },
    {
        id: 'mechanismsOfSuccession',
        label: 'Mechanisms of Succession',
        sectionNumber: 4,
        subTopic: 'ecologicalSuccession',
        specificItems: ['mechanismsOfSuccession'],
        diagramId: 'facilitationInhibitionToleranceMechanismComparisonFlowchartDiagram',
        experimentId: 'nitrogen_fixing_alder_soil_nitrogen_accumulation_facilitation_experiment',
        contentKey: 'components'
    },
    {
        id: 'changesDuringSuccession',
        label: 'Changes During Succession',
        sectionNumber: 5,
        subTopic: 'ecologicalSuccession',
        specificItems: ['changesDuringSuccession'],
        diagramId: 'successionSpeciesDiversityBiomassNPPRatioChangeTimeSeriesDiagram',
        experimentId: 'comparing_species_richness_biomass_early_vs_late_successional_grassland',
        contentKey: 'components'
    },
    {
        id: 'successionInSpecificEcosystems',
        label: 'Succession in Specific Ecosystems',
        sectionNumber: 6,
        subTopic: 'ecologicalSuccession',
        specificItems: ['successionInSpecificEcosystems'],
        diagramId: 'sandDuneZonationStrandlineYellowGreyDuneSlackWoodlandDiagram',
        experimentId: 'sand_dune_transect_belt_zonation_marram_grass_species_change_field_experiment',
        contentKey: 'components'
    },
    {
        id: 'cyclicalSuccession',
        label: 'Cyclical Succession',
        sectionNumber: 7,
        subTopic: 'ecologicalSuccession',
        specificItems: ['cyclicalSuccession'],
        diagramId: 'callunaPioneerBuildingMatureDegenerateHeathlandPhaseCycleDiagram',
        experimentId: 'heathland_calluna_age_phase_mapping_quadrat_percentage_cover_survey',
        contentKey: 'components'
    },
    {
        id: 'disturbanceAndSuccession',
        label: 'Disturbance and Succession',
        sectionNumber: 8,
        subTopic: 'ecologicalSuccession',
        specificItems: ['disturbanceAndSuccession'],
        diagramId: 'intermediateDisturbanceHypothesisBellCurveSpeciesDiversityDiagram',
        experimentId: 'fire_frequency_grass_forb_diversity_burned_vs_unburned_plot_comparison',
        contentKey: 'components'
    },
    {
        id: 'successionAndEcosystemFunction',
        label: 'Succession and Ecosystem Function',
        sectionNumber: 9,
        subTopic: 'ecologicalSuccession',
        specificItems: ['successionAndEcosystemFunction'],
        diagramId: 'odumPRRatioProductionRespirationSuccessionalStageChangeDiagram',
        experimentId: 'net_ecosystem_co2_flux_early_vs_mature_successional_soil_chamber_experiment',
        contentKey: 'components'
    },
    {
        id: 'appliedSuccessionRestorationEcology',
        label: 'Applied Succession: Restoration Ecology',
        sectionNumber: 10,
        subTopic: 'ecologicalSuccession',
        specificItems: ['appliedSuccessionRestorationEcology'],
        diagramId: 'restorationSuccessionJumpStartNuclearPlantingTrajectoryDiagram',
        experimentId: 'chalk_grassland_yellow_rattle_seeding_forb_diversity_restoration_experiment',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'inflammation',
        specificItems: ['foundations'],
        diagramId: 'cardinalSignsOfInflammationAnnotatedDiagram',
        experimentId: 'skin_scratch_test_cardinal_signs_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'triggersAndRecognition',
        label: 'Triggers and Recognition',
        sectionNumber: 2,
        subTopic: 'inflammation',
        specificItems: ['triggersAndRecognition'],
        diagramId: 'pampDampPatternRecognitionReceptorDiagram',
        experimentId: 'lps_tlr4_macrophage_activation_cytokine_elisa_experiment',
        contentKey: 'components'
    },
    {
        id: 'vascularEvents',
        label: 'Vascular Events',
        sectionNumber: 3,
        subTopic: 'inflammation',
        specificItems: ['vascularEvents'],
        diagramId: 'vasodilationPermeabilityExudateTransudateDiagram',
        experimentId: 'histamine_intradermal_injection_wheal_flare_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'cellularEventsAndRecruitment',
        label: 'Cellular Events and Leukocyte Recruitment',
        sectionNumber: 4,
        subTopic: 'inflammation',
        specificItems: ['cellularEventsAndRecruitment'],
        diagramId: 'leukocyteAdhesionCascadeRollingTransmigrationDiagram',
        experimentId: 'neutrophil_migration_under_agarose_chemotaxis_experiment',
        contentKey: 'components'
    },
    {
        id: 'inflammatoryMediators',
        label: 'Inflammatory Mediators',
        sectionNumber: 5,
        subTopic: 'inflammation',
        specificItems: ['inflammatoryMediators'],
        diagramId: 'arachidonicAcidCoxLoxPathwayMediatorsDiagram',
        experimentId: 'aspirin_cox_inhibition_prostaglandin_fever_reduction_experiment',
        contentKey: 'components'
    },
    {
        id: 'phagocytosis',
        label: 'Phagocytosis',
        sectionNumber: 6,
        subTopic: 'inflammation',
        specificItems: ['phagocytosis'],
        diagramId: 'phagocytosisOpsonisationRespiratorlyBurstStepsDiagram',
        experimentId: 'macrophage_latex_bead_phagocytosis_light_microscopy_experiment',
        contentKey: 'components'
    },
    {
        id: 'systemicEffects',
        label: 'Systemic Effects',
        sectionNumber: 7,
        subTopic: 'inflammation',
        specificItems: ['systemicEffects'],
        diagramId: 'acutePhaseResponseFeverLeukocytosisDiagram',
        experimentId: 'crp_esr_comparison_infected_vs_healthy_serum_experiment',
        contentKey: 'components'
    },
    {
        id: 'resolutionOfInflammation',
        label: 'Resolution of Inflammation',
        sectionNumber: 8,
        subTopic: 'inflammation',
        specificItems: ['resolutionOfInflammation'],
        diagramId: 'proResolutionMediatorsEfferocytosisOutcomesDiagram',
        experimentId: 'wound_healing_time_lapse_efferocytosis_microscopy_experiment',
        contentKey: 'components'
    },
    {
        id: 'chronicInflammation',
        label: 'Chronic Inflammation',
        sectionNumber: 9,
        subTopic: 'inflammation',
        specificItems: ['chronicInflammation'],
        diagramId: 'granulomaFormationCaseatingNonCaseatingDiagram',
        experimentId: 'tb_granuloma_ziehl_neelsen_stain_histology_experiment',
        contentKey: 'components'
    },
    {
        id: 'pathologicalInflammation',
        label: 'Pathological Inflammation',
        sectionNumber: 10,
        subTopic: 'inflammation',
        specificItems: ['pathologicalInflammation'],
        diagramId: 'sepsisProgressionSIRSSepticShockMODSDiagram',
        experimentId: 'lps_endotoxin_dose_response_cytokine_storm_model_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'autoimmuneDiseases',
        specificItems: ['foundations'],
        diagramId: 'centralPeripheralToleranceThymicSelectionDiagram',
        experimentId: 'aire_knockout_mouse_multi_organ_autoimmunity_model_experiment',
        contentKey: 'components'
    },
    {
        id: 'mechanismsOfToleranceFailure',
        label: 'Mechanisms of Tolerance Failure',
        sectionNumber: 2,
        subTopic: 'autoimmuneDiseases',
        specificItems: ['mechanismsOfToleranceFailure'],
        diagramId: 'molecularMimicryBystanderActivationCrypticEpitopeDiagram',
        experimentId: 'streptococcal_m_protein_cardiac_myosin_cross_reactivity_elisa_experiment',
        contentKey: 'components'
    },
    {
        id: 'effectorMechanisms',
        label: 'Effector Mechanisms',
        sectionNumber: 3,
        subTopic: 'autoimmuneDiseases',
        specificItems: ['effectorMechanisms'],
        diagramId: 'gellCoombsTypeIIIIIIVHypersensitivityMechanismsDiagram',
        experimentId: 'coombs_test_autoimmune_haemolytic_anaemia_red_cell_agglutination_experiment',
        contentKey: 'components'
    },
    {
        id: 'organSpecificDiseases',
        label: 'Organ-Specific Autoimmune Diseases',
        sectionNumber: 4,
        subTopic: 'autoimmuneDiseases',
        specificItems: ['organSpecificDiseases'],
        diagramId: 'organSpecificAutoimmuneDiseaseTargetAnatomyDiagram',
        experimentId: 'thyroid_peroxidase_antibody_elisa_hashimotos_patient_serum_experiment',
        contentKey: 'components'
    },
    {
        id: 'systemicDiseases',
        label: 'Systemic Autoimmune Diseases',
        sectionNumber: 5,
        subTopic: 'autoimmuneDiseases',
        specificItems: ['systemicDiseases'],
        diagramId: 'sleImmuneComplexDepositonLupusNephritisDiagram',
        experimentId: 'ana_indirect_immunofluorescence_hep2_cell_pattern_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'autoantibodies',
        label: 'Autoantibodies',
        sectionNumber: 6,
        subTopic: 'autoimmuneDiseases',
        specificItems: ['autoantibodies'],
        diagramId: 'autoantibodySpecificityDiseaseMappingReferenceTable',
        experimentId: 'anti_ccp_rf_elisa_ra_vs_healthy_control_serum_experiment',
        contentKey: 'components'
    },
    {
        id: 'diagnosis',
        label: 'Diagnosis',
        sectionNumber: 7,
        subTopic: 'autoimmuneDiseases',
        specificItems: ['diagnosis'],
        diagramId: 'autoimmuneDiagnosticAlgorithmSerologyBiopsyDiagram',
        experimentId: 'complement_c3_c4_consumption_sle_activity_correlation_experiment',
        contentKey: 'components'
    },
    {
        id: 'treatmentPrinciples',
        label: 'Treatment Principles',
        sectionNumber: 8,
        subTopic: 'autoimmuneDiseases',
        specificItems: ['treatmentPrinciples'],
        diagramId: 'biologicTargetsCytokinePathwayAutoimmunityDiagram',
        experimentId: 'tnf_alpha_inhibition_synovial_cytokine_reduction_cell_culture_experiment',
        contentKey: 'components'
    },
    {
        id: 'seronegativeAutoimmunity',
        label: 'Seronegative Autoimmunity',
        sectionNumber: 9,
        subTopic: 'autoimmuneDiseases',
        specificItems: ['seronegativeAutoimmunity'],
        diagramId: 'hlaB27SpondyloarthropathySpectrumDiagram',
        experimentId: 'hla_b27_pcr_based_genotyping_ankylosing_spondylitis_cohort_experiment',
        contentKey: 'components'
    },
    {
        id: 'overlapSyndromes',
        label: 'Overlap and Mixed Connective Tissue Disease',
        sectionNumber: 10,
        subTopic: 'autoimmuneDiseases',
        specificItems: ['overlapSyndromes'],
        diagramId: 'mixedConnectiveTissueOverlapVennDiagram',
        experimentId: 'anti_u1_rnp_antibody_detection_mctd_vs_sle_vs_ssa_panel_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'allergies',
        specificItems: ['foundations'],
        diagramId: 'gellCoombsTypeIIIIIIVHypersensitivityOverviewDiagram',
        experimentId: 'atopy_questionnaire_prevalence_survey_allergy_march_mapping_experiment',
        contentKey: 'components'
    },
    {
        id: 'immunologyOfIgEAndMastCells',
        label: 'Immunology of IgE and Mast Cells',
        sectionNumber: 2,
        subTopic: 'allergies',
        specificItems: ['immunologyOfIgEAndMastCells'],
        diagramId: 'igeFcepsilonRIMastCellDegranulationCrossLinkingDiagram',
        experimentId: 'mast_cell_histamine_release_allergen_stimulation_fluorometric_assay_experiment',
        contentKey: 'components'
    },
    {
        id: 'allergicResponse',
        label: 'The Allergic Response',
        sectionNumber: 3,
        subTopic: 'allergies',
        specificItems: ['allergicResponse'],
        diagramId: 'biphasicAllergyEarlyLatePhaseTimeCourseDiagram',
        experimentId: 'early_vs_late_phase_eosinophil_recruitment_bronchoalveolar_lavage_experiment',
        contentKey: 'components'
    },
    {
        id: 'anaphylaxis',
        label: 'Anaphylaxis',
        sectionNumber: 4,
        subTopic: 'allergies',
        specificItems: ['anaphylaxis'],
        diagramId: 'anaphylaxisSystemicMediatorOrganEffectsDiagram',
        experimentId: 'adrenaline_autoinjector_technique_simulation_mannequin_experiment',
        contentKey: 'components'
    },
    {
        id: 'allergicRhinitis',
        label: 'Allergic Rhinitis',
        sectionNumber: 5,
        subTopic: 'allergies',
        specificItems: ['allergicRhinitis'],
        diagramId: 'nasalMucosaMastCellEosinophilInfiltrationDiagram',
        experimentId: 'nasal_lavage_eosinophil_count_pollen_season_vs_off_season_experiment',
        contentKey: 'components'
    },
    {
        id: 'allergicAsthma',
        label: 'Allergic Asthma',
        sectionNumber: 6,
        subTopic: 'allergies',
        specificItems: ['allergicAsthma'],
        diagramId: 'airwayRemodelingEosinophilicInflammationSpiromteryDiagram',
        experimentId: 'methacholine_bronchial_provocation_airway_hyperresponsiveness_spirometry_experiment',
        contentKey: 'components'
    },
    {
        id: 'foodAllergy',
        label: 'Food Allergy',
        sectionNumber: 7,
        subTopic: 'allergies',
        specificItems: ['foodAllergy'],
        diagramId: 'igeMediaatedVsNonIgeFoodAllergyClassificationDiagram',
        experimentId: 'double_blind_placebo_controlled_peanut_oral_food_challenge_experiment',
        contentKey: 'components'
    },
    {
        id: 'atopicEczema',
        label: 'Atopic Eczema',
        sectionNumber: 8,
        subTopic: 'allergies',
        specificItems: ['atopicEczema'],
        diagramId: 'filaggrinBarrierDefectTh2ItchScratchCycleDiagram',
        experimentId: 'transepidermal_water_loss_tewl_filaggrin_mutation_vs_wildtype_experiment',
        contentKey: 'components'
    },
    {
        id: 'diagnosisOfAllergicDisease',
        label: 'Diagnosis of Allergic Disease',
        sectionNumber: 9,
        subTopic: 'allergies',
        specificItems: ['diagnosisOfAllergicDisease'],
        diagramId: 'skinPrickTestSptWhealFlareReadingDiagram',
        experimentId: 'skin_prick_test_panel_histamine_saline_control_wheal_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'allergenImmunotherapy',
        label: 'Allergen Immunotherapy',
        sectionNumber: 10,
        subTopic: 'allergies',
        specificItems: ['allergenImmunotherapy'],
        diagramId: 'immunotherapyIgG4ShiftTregInductionMechanismDiagram',
        experimentId: 'scit_updosing_schedule_allergen_specific_igg4_rise_serology_experiment',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'infectiousDiseases',
        specificItems: ['foundations'],
        diagramId: 'pathogenClassificationBacteriaVirusFungiParasitePrionDiagram',
        experimentId: 'gram_stain_technique_gram_positive_vs_negative_bacterial_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'transmissionAndEpidemiology',
        label: 'Transmission and Epidemiology',
        sectionNumber: 2,
        subTopic: 'infectiousDiseases',
        specificItems: ['transmissionAndEpidemiology'],
        diagramId: 'transmissionRoutesAirborneDropletContactFaecalOralVectorDiagram',
        experimentId: 'r0_herd_immunity_threshold_simulation_disease_spread_modelling_experiment',
        contentKey: 'components'
    },
    {
        id: 'hostPathogenInteractions',
        label: 'Host-Pathogen Interactions',
        sectionNumber: 3,
        subTopic: 'infectiousDiseases',
        specificItems: ['hostPathogenInteractions'],
        diagramId: 'virulenceFactorsAdhesinsInvasinsExotoxinEndotoxinDiagram',
        experimentId: 'staphylococcal_exotoxin_superantigen_t_cell_activation_proliferation_experiment',
        contentKey: 'components'
    },
    {
        id: 'immuneResponseToInfection',
        label: 'Immune Response to Infection',
        sectionNumber: 4,
        subTopic: 'infectiousDiseases',
        specificItems: ['immuneResponseToInfection'],
        diagramId: 'innateToAdaptiveImmuneResponseTimelineDiagram',
        experimentId: 'primary_vs_secondary_antibody_response_immunisation_serial_bleed_elisa_experiment',
        contentKey: 'components'
    },
    {
        id: 'bacterialInfections',
        label: 'Bacterial Infections',
        sectionNumber: 5,
        subTopic: 'infectiousDiseases',
        specificItems: ['bacterialInfections'],
        diagramId: 'keyBacterialPathogensMechanismClinicalFeaturesComparisonDiagram',
        experimentId: 'tb_ziehl_neelsen_acid_fast_stain_sputum_smear_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'viralInfections',
        label: 'Viral Infections',
        sectionNumber: 6,
        subTopic: 'infectiousDiseases',
        specificItems: ['viralInfections'],
        diagramId: 'hivReplicationCycleReverseTranscriptaseIntegraseDiagram',
        experimentId: 'plaque_assay_viral_titration_dose_response_cell_monolayer_experiment',
        contentKey: 'components'
    },
    {
        id: 'antimicrobials',
        label: 'Antimicrobials',
        sectionNumber: 7,
        subTopic: 'infectiousDiseases',
        specificItems: ['antimicrobials'],
        diagramId: 'antibioticClassesMolecularTargetsBacterialCellDiagram',
        experimentId: 'kirby_bauer_disc_diffusion_antibiotic_sensitivity_mic_experiment',
        contentKey: 'components'
    },
    {
        id: 'parasiticInfections',
        label: 'Parasitic Infections',
        sectionNumber: 8,
        subTopic: 'infectiousDiseases',
        specificItems: ['parasiticInfections'],
        diagramId: 'plasmodiumLifeCycleHumanMosquitoStagesDiagram',
        experimentId: 'giemsa_stain_thick_thin_blood_film_malaria_species_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'vaccination',
        label: 'Vaccination',
        sectionNumber: 9,
        subTopic: 'infectiousDiseases',
        specificItems: ['vaccination'],
        diagramId: 'vaccineTypesLiveAttenuatedSubunitMRNAImmunogenicityComparisonDiagram',
        experimentId: 'mrna_vaccine_lipid_nanoparticle_protein_expression_cell_transfection_experiment',
        contentKey: 'components'
    },
    {
        id: 'infectionControl',
        label: 'Infection Control and Prevention',
        sectionNumber: 10,
        subTopic: 'infectiousDiseases',
        specificItems: ['infectionControl'],
        diagramId: 'who5MomentsHandHygienePrecautionTypesFlowchartDiagram',
        experimentId: 'glo_germ_uv_light_hand_hygiene_technique_compliance_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'immunodeficiency',
        specificItems: ['foundations'],
        diagramId: 'infectionPatternComponentDeficiencyDiagnosticFrameworkDiagram',
        experimentId: 'infection_history_scoring_rspu_criteria_pid_screening_questionnaire_experiment',
        contentKey: 'components'
    },
    {
        id: 'antibodyDeficiencies',
        label: 'Antibody Deficiencies',
        sectionNumber: 2,
        subTopic: 'immunodeficiency',
        specificItems: ['antibodyDeficiencies'],
        diagramId: 'btkXlaVsCvidHyperIgMBCellDevelopmentBlockDiagram',
        experimentId: 'serum_immunoglobulin_quantification_elisa_xla_cvid_vs_healthy_control_experiment',
        contentKey: 'components'
    },
    {
        id: 'severeCombinedImmunodeficiency',
        label: 'Severe Combined Immunodeficiency',
        sectionNumber: 3,
        subTopic: 'immunodeficiency',
        specificItems: ['severeCombinedImmunodeficiency'],
        diagramId: 'scidGenotypeImmunophenotypeGammaChainAdaRagIl7rDiagram',
        experimentId: 'trec_krec_dried_blood_spot_newborn_scid_screening_qpcr_experiment',
        contentKey: 'components'
    },
    {
        id: 'TCellDeficiencies',
        label: 'T Cell Deficiencies',
        sectionNumber: 4,
        subTopic: 'immunodeficiency',
        specificItems: ['TCellDeficiencies'],
        diagramId: 'digeorgeCatch22ThymicAplasiaTCellDevelopmentDiagram',
        experimentId: 'lymphocyte_proliferation_pha_mitogen_stimulation_t_cell_function_assay_experiment',
        contentKey: 'components'
    },
    {
        id: 'phagocyteDeficiencies',
        label: 'Phagocyte Deficiencies',
        sectionNumber: 5,
        subTopic: 'immunodeficiency',
        specificItems: ['phagocyteDeficiencies'],
        diagramId: 'cgdNadphOxidaseSubunitsRespiratoryBurstLadAdhesionCascadeDiagram',
        experimentId: 'dhr_flow_cytometry_nadph_oxidase_respiratory_burst_cgd_diagnosis_experiment',
        contentKey: 'components'
    },
    {
        id: 'complementDeficiencies',
        label: 'Complement Deficiencies',
        sectionNumber: 6,
        subTopic: 'immunodeficiency',
        specificItems: ['complementDeficiencies'],
        diagramId: 'complementPathwayDeficiencyNeiSseriaTerminalComponentMacDiagram',
        experimentId: 'ch50_ap50_haemolytic_complement_assay_deficiency_screening_experiment',
        contentKey: 'components'
    },
    {
        id: 'secondaryImmunodeficiencies',
        label: 'Secondary Immunodeficiencies',
        sectionNumber: 7,
        subTopic: 'immunodeficiency',
        specificItems: ['secondaryImmunodeficiencies'],
        diagramId: 'secondaryImmunodeficiencyCausesHivMalnutritionAspleniaDrugsDiagram',
        experimentId: 'post_splenectomy_pneumococcal_opsonisation_phagocytosis_impairment_experiment',
        contentKey: 'components'
    },
    {
        id: 'immuneDysregulationSyndromes',
        label: 'Immune Dysregulation Syndromes',
        sectionNumber: 8,
        subTopic: 'immunodeficiency',
        specificItems: ['immuneDysregulationSyndromes'],
        diagramId: 'hlhCytotoxicGranuleExocytosisDefectCytokineStormDiagram',
        experimentId: 'nk_cell_cytotoxicity_k562_target_killing_hlh_vs_normal_function_experiment',
        contentKey: 'components'
    },
    {
        id: 'diagnosisOfImmunodeficiency',
        label: 'Diagnosis of Immunodeficiency',
        sectionNumber: 9,
        subTopic: 'immunodeficiency',
        specificItems: ['diagnosisOfImmunodeficiency'],
        diagramId: 'immunodeficiencyWorkupFlowchartFbcIgLymphocyteSubsetsDiagram',
        experimentId: 'flow_cytometry_lymphocyte_subset_panel_cd3_cd4_cd19_nk_enumeration_experiment',
        contentKey: 'components'
    },
    {
        id: 'treatmentPrinciples',
        label: 'Treatment Principles',
        sectionNumber: 10,
        subTopic: 'immunodeficiency',
        specificItems: ['treatmentPrinciples'],
        diagramId: 'igrtHsctGeneTherapyTreatmentLadderPidDiagram',
        experimentId: 'lentiviral_vector_cd34_haematopoietic_stem_cell_transduction_gene_correction_experiment',
        contentKey: 'components'
    },





    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'photosynthesis',
        specificItems: ['foundations'],
        diagramId: 'chloroplastAnnotatedUltrastructureDiagram',
        experimentId: 'chlorophyll_pigment_separation_paper_chromatography_experiment',
        contentKey: 'components'
    },
    {
        id: 'lightDependentReactions',
        label: 'Light-Dependent Reactions',
        sectionNumber: 2,
        subTopic: 'photosynthesis',
        specificItems: ['lightDependentReactions'],
        diagramId: 'thylakoidElectronTransportChainAndChemiosmosisdiagram',
        experimentId: 'hill_reaction_dcpip_decolourisation_light_intensity_experiment',
        contentKey: 'components'
    },
    {
        id: 'lightIndependentReactions',
        label: 'Light-Independent Reactions (Calvin Cycle)',
        sectionNumber: 3,
        subTopic: 'photosynthesis',
        specificItems: ['lightIndependentReactions'],
        diagramId: 'calvinCycleThreeStageAnnotatedDiagram',
        experimentId: 'radioactive_carbon14_fixation_calvin_cycle_tracing_experiment',
        contentKey: 'components'
    },
    {
        id: 'photosyntheticPathways',
        label: 'Photosynthetic Pathways',
        sectionNumber: 4,
        subTopic: 'photosynthesis',
        specificItems: ['photosyntheticPathways'],
        diagramId: 'c3VsC4VsCamPathwayComparisonDiagram',
        experimentId: 'c3_c4_cam_stomatal_opening_timing_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'limitingFactors',
        label: 'Limiting Factors',
        sectionNumber: 5,
        subTopic: 'photosynthesis',
        specificItems: ['limitingFactors'],
        diagramId: 'limitingFactorRateVsIntensityCurvesDiagram',
        experimentId: 'elodea_bubble_counting_light_intensity_co2_temperature_experiment',
        contentKey: 'components'
    },
    {
        id: 'measuringPhotosynthesis',
        label: 'Measuring Photosynthesis',
        sectionNumber: 6,
        subTopic: 'photosynthesis',
        specificItems: ['measuringPhotosynthesis'],
        diagramId: 'leafDiscFloatationAssaySetupDiagram',
        experimentId: 'floating_leaf_disc_sodium_bicarbonate_photosynthesis_rate_experiment',
        contentKey: 'components'
    },
    {
        id: 'photosynthesisRespirationRelationship',
        label: 'Photosynthesis & Respiration Relationship',
        sectionNumber: 7,
        subTopic: 'photosynthesis',
        specificItems: ['photosynthesisRespirationRelationship'],
        diagramId: 'netGrossPhotosynthesisCompensationPointGraph',
        experimentId: 'co2_gas_exchange_light_dark_compensation_point_experiment',
        contentKey: 'components'
    },
    {
        id: 'ecologicalContext',
        label: 'Ecological Context',
        sectionNumber: 8,
        subTopic: 'photosynthesis',
        specificItems: ['ecologicalContext'],
        diagramId: 'primaryProductivityBiomeComparisonMap',
        experimentId: 'canopy_gap_fraction_light_interception_ecosystem_survey_experiment',
        contentKey: 'components'
    },
    {
        id: 'applications',
        label: 'Applications & Biotechnology',
        sectionNumber: 9,
        subTopic: 'photosynthesis',
        specificItems: ['applications'],
        diagramId: 'artificialPhotosynthesisPhotoelectrochemicalCellDiagram',
        experimentId: 'co2_enrichment_greenhouse_plant_growth_yield_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'photorespiration',
        label: 'Photorespiration & Efficiency',
        sectionNumber: 10,
        subTopic: 'photosynthesis',
        specificItems: ['photorespiration'],
        diagramId: 'rubiscoOxygenaseCarbonylaseCompetitionDiagram',
        experimentId: 'photorespiration_oxygen_concentration_photosynthesis_rate_effect_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'plantNutrition',
        specificItems: ['foundations'],
        diagramId: 'essentialElementsClassificationAndSoilSourceDiagram',
        experimentId: 'soil_ph_nutrient_availability_indicator_solution_experiment',
        contentKey: 'components'
    },
    {
        id: 'macronutrients',
        label: 'Macronutrients',
        sectionNumber: 2,
        subTopic: 'plantNutrition',
        specificItems: ['macronutrients'],
        diagramId: 'macronutrientFunctionAndMolecularRoleSummaryDiagram',
        experimentId: 'hydroponic_single_macronutrient_omission_deficiency_experiment',
        contentKey: 'components'
    },
    {
        id: 'micronutrients',
        label: 'Micronutrients (Trace Elements)',
        sectionNumber: 3,
        subTopic: 'plantNutrition',
        specificItems: ['micronutrients'],
        diagramId: 'micronutrientCofactorEnzymeLocationDiagram',
        experimentId: 'iron_deficiency_chlorosis_ph_manipulation_hydroponic_experiment',
        contentKey: 'components'
    },
    {
        id: 'ionUptakeMechanisms',
        label: 'Ion Uptake Mechanisms',
        sectionNumber: 4,
        subTopic: 'plantNutrition',
        specificItems: ['ionUptakeMechanisms'],
        diagramId: 'apoplasticSymplasticPathwayCasparianStripCrossSection',
        experimentId: 'potassium_uptake_metabolic_inhibitor_temperature_dependence_experiment',
        contentKey: 'components'
    },
    {
        id: 'nitrogenCycleAndFixation',
        label: 'Nitrogen Cycle & Fixation',
        sectionNumber: 5,
        subTopic: 'plantNutrition',
        specificItems: ['nitrogenCycleAndFixation'],
        diagramId: 'nitrogenCycleBiogeochemicalFlowDiagram',
        experimentId: 'legume_rhizobium_nodule_dissection_leghemoglobin_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'mycorrhizalAssociations',
        label: 'Mycorrhizal Associations',
        sectionNumber: 6,
        subTopic: 'plantNutrition',
        specificItems: ['mycorrhizalAssociations'],
        diagramId: 'arbuscularVsEctomycorrhizaeRootAnatomyComparisonDiagram',
        experimentId: 'mycorrhizal_inoculation_plant_growth_phosphorus_uptake_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'deficiencySymptoms',
        label: 'Deficiency Symptoms & Diagnosis',
        sectionNumber: 7,
        subTopic: 'plantNutrition',
        specificItems: ['deficiencySymptoms'],
        diagramId: 'nutrientMobilityDeficiencyPatternLeafDiagram',
        experimentId: 'hydroponic_nutrient_omission_deficiency_symptom_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'fertilisers',
        label: 'Fertilisers',
        sectionNumber: 8,
        subTopic: 'plantNutrition',
        specificItems: ['fertilisers'],
        diagramId: 'eutrophicationRunoffNutrientCycleFlowDiagram',
        experimentId: 'organic_vs_inorganic_fertiliser_plant_growth_rate_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'carnivorousPlants',
        label: 'Carnivorous Plants',
        sectionNumber: 9,
        subTopic: 'plantNutrition',
        specificItems: ['carnivorousPlants'],
        diagramId: 'carnivorousPlantTrapMechanismComparisonDiagram',
        experimentId: 'venus_flytrap_trigger_hair_stimulation_closure_response_experiment',
        contentKey: 'components'
    },
    {
        id: 'nutrientTransport',
        label: 'Transport of Nutrients in Plants',
        sectionNumber: 10,
        subTopic: 'plantNutrition',
        specificItems: ['nutrientTransport'],
        diagramId: 'xylemPhloemNutrientDirectionAndMobilityDiagram',
        experimentId: 'ringing_experiment_phloem_xylem_nutrient_transport_direction_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'plantGrowth',
        specificItems: ['foundations'],
        diagramId: 'primarySecondaryGrowthComparisonDiagram',
        experimentId: 'seedling_height_fresh_dry_mass_growth_rate_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'meristems',
        label: 'Meristems',
        sectionNumber: 2,
        subTopic: 'plantGrowth',
        specificItems: ['meristems'],
        diagramId: 'rootApicalMeristemZoneAnnotatedLongitudinalDiagram',
        experimentId: 'onion_root_tip_squash_mitosis_meristematic_zone_microscopy_experiment',
        contentKey: 'components'
    },
    {
        id: 'plantHormones',
        label: 'Plant Hormones (Phytohormones)',
        sectionNumber: 3,
        subTopic: 'plantGrowth',
        specificItems: ['plantHormones'],
        diagramId: 'phytohormoneInteractionNetworkDiagram',
        experimentId: 'auxin_apical_dominance_decapitation_lateral_bud_growth_experiment',
        contentKey: 'components'
    },
    {
        id: 'tropisms',
        label: 'Tropisms',
        sectionNumber: 4,
        subTopic: 'plantGrowth',
        specificItems: ['tropisms'],
        diagramId: 'auxinLateralRedistributionPhototropismGravitropismDiagram',
        experimentId: 'coleoptile_unilateral_light_phototropic_curvature_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'photoperiodism',
        label: 'Photoperiodism & Flowering',
        sectionNumber: 5,
        subTopic: 'plantGrowth',
        specificItems: ['photoperiodism'],
        diagramId: 'phytochromeConversionCriticalNightLengthFloweringDiagram',
        experimentId: 'dark_period_interruption_short_day_plant_flowering_response_experiment',
        contentKey: 'components'
    },
    {
        id: 'germination',
        label: 'Germination',
        sectionNumber: 6,
        subTopic: 'plantGrowth',
        specificItems: ['germination'],
        diagramId: 'seedStructureGibberellinAleuroneCascadeDiagram',
        experimentId: 'seed_germination_temperature_water_oxygen_conditions_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'senescenceAndAbscission',
        label: 'Senescence & Abscission',
        sectionNumber: 7,
        subTopic: 'plantGrowth',
        specificItems: ['senescenceAndAbscission'],
        diagramId: 'leafAbscissionZoneSeparationProtectiveLayerDiagram',
        experimentId: 'ethylene_banana_ripening_fruit_abscission_acceleration_experiment',
        contentKey: 'components'
    },
    {
        id: 'environmentalEffectsOnGrowth',
        label: 'Environmental Effects on Growth',
        sectionNumber: 8,
        subTopic: 'plantGrowth',
        specificItems: ['environmentalEffectsOnGrowth'],
        diagramId: 'etiolationDeEtiolationLightQualityResponseDiagram',
        experimentId: 'light_quality_red_far_red_seedling_etiolation_de_etiolation_experiment',
        contentKey: 'components'
    },
    {
        id: 'tissueCulture',
        label: 'Tissue Culture & Biotechnology',
        sectionNumber: 9,
        subTopic: 'plantGrowth',
        specificItems: ['tissueCulture'],
        diagramId: 'micropropagationExplantCallusOrganogenesisFlowDiagram',
        experimentId: 'auxin_cytokinin_ratio_callus_shoot_root_organogenesis_tissue_culture_experiment',
        contentKey: 'components'
    },
    {
        id: 'growthCoordination',
        label: 'Growth Coordination & Integration',
        sectionNumber: 10,
        subTopic: 'plantGrowth',
        specificItems: ['growthCoordination'],
        diagramId: 'sourceToSinkAssimilateFlowHormoneRatioDiagram',
        experimentId: 'fruit_thinning_source_sink_resource_partitioning_yield_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'plantAdaptations',
        specificItems: ['foundations'],
        diagramId: 'adaptationTypesStructuralPhysiologicalBehaviouralClassificationDiagram',
        experimentId: 'convergent_evolution_cactus_euphorb_morphology_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'xerophyteAdaptations',
        label: 'Xerophyte Adaptations',
        sectionNumber: 2,
        subTopic: 'plantAdaptations',
        specificItems: ['xerophyteAdaptations'],
        diagramId: 'xerophyteLeafCrossSectionSunkenStomataRolledLeafDiagram',
        experimentId: 'marram_grass_rolled_leaf_stomata_humidity_transpiration_rate_experiment',
        contentKey: 'components'
    },
    {
        id: 'hydrophyteAdaptations',
        label: 'Hydrophyte Adaptations',
        sectionNumber: 3,
        subTopic: 'plantAdaptations',
        specificItems: ['hydrophyteAdaptations'],
        diagramId: 'hydrophyteAerenchymaFloatingLeafPneumatophoreAdaptationDiagram',
        experimentId: 'aerenchyma_cross_section_waterlogged_vs_aerated_root_microscopy_experiment',
        contentKey: 'components'
    },
    {
        id: 'halophyteAdaptations',
        label: 'Halophyte Adaptations',
        sectionNumber: 4,
        subTopic: 'plantAdaptations',
        specificItems: ['halophyteAdaptations'],
        diagramId: 'halophyteSaltGlandIonCompartmentalisationVacuoleDiagram',
        experimentId: 'halophyte_salt_gland_sodium_flame_test_secretion_detection_experiment',
        contentKey: 'components'
    },
    {
        id: 'cryophyteAdaptations',
        label: 'Cryophyte Adaptations',
        sectionNumber: 5,
        subTopic: 'plantAdaptations',
        specificItems: ['cryophyteAdaptations'],
        diagramId: 'coldAcclimationMembraneLipidAntifreezeProteinResponseDiagram',
        experimentId: 'cold_hardening_electrolyte_leakage_membrane_integrity_frost_experiment',
        contentKey: 'components'
    },
    {
        id: 'shadeAdaptations',
        label: 'Shade Adaptations',
        sectionNumber: 6,
        subTopic: 'plantAdaptations',
        specificItems: ['shadeAdaptations'],
        diagramId: 'sunVsShadeLeafChlorophyllAbsorptionCompensationPointDiagram',
        experimentId: 'sun_shade_leaf_chlorophyll_ab_ratio_spectrophotometry_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'nutrientPoorAdaptations',
        label: 'Nutrient-Poor Environment Adaptations',
        sectionNumber: 7,
        subTopic: 'plantAdaptations',
        specificItems: ['nutrientPoorAdaptations'],
        diagramId: 'proteoidRootClusterRhizosphereAcidificationDiagram',
        experimentId: 'lupin_proteoid_root_citric_acid_exudate_phosphate_solubilisation_experiment',
        contentKey: 'components'
    },
    {
        id: 'reproductiveAdaptations',
        label: 'Reproductive Adaptations',
        sectionNumber: 8,
        subTopic: 'plantAdaptations',
        specificItems: ['reproductiveAdaptations'],
        diagramId: 'pollinationSyndromeFlowerMorphologyComparisonDiagram',
        experimentId: 'wind_vs_insect_pollinated_pollen_grain_surface_microscopy_experiment',
        contentKey: 'components'
    },
    {
        id: 'defenceAdaptations',
        label: 'Defence Adaptations',
        sectionNumber: 9,
        subTopic: 'plantAdaptations',
        specificItems: ['defenceAdaptations'],
        diagramId: 'physicalChemicalDefenceSecondaryMetabolitePathwayDiagram',
        experimentId: 'glucosinolate_myrosinase_tissue_damage_isothiocyanate_detection_experiment',
        contentKey: 'components'
    },
    {
        id: 'biomeSummaries',
        label: 'Biome-Specific Adaptation Summaries',
        sectionNumber: 10,
        subTopic: 'plantAdaptations',
        specificItems: ['biomeSummaries'],
        diagramId: 'biomeAdaptationSyndromeWorldMapDiagram',
        experimentId: 'biome_plant_trait_database_leaf_economics_spectrum_analysis_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'rootSystems',
        specificItems: ['foundations'],
        diagramId: 'rootVsShootAnatomyComparativeOrganisationDiagram',
        experimentId: 'root_function_anchorage_absorption_measurement_seedling_experiment',
        contentKey: 'components'
    },
    {
        id: 'rootSystemTypes',
        label: 'Root System Types',
        sectionNumber: 2,
        subTopic: 'rootSystems',
        specificItems: ['rootSystemTypes'],
        diagramId: 'tapRootVsFibrousAdventitousRootSystemComparisonDiagram',
        experimentId: 'monocot_dicot_root_system_excavation_architecture_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'rootAnatomy',
        label: 'Root Anatomy',
        sectionNumber: 3,
        subTopic: 'rootSystems',
        specificItems: ['rootAnatomy'],
        diagramId: 'rootLongitudinalZonesCrossSectionAnnotatedDiagram',
        experimentId: 'root_tip_longitudinal_section_zone_identification_microscopy_experiment',
        contentKey: 'components'
    },
    {
        id: 'waterUptakeAndTransport',
        label: 'Water Uptake & Transport',
        sectionNumber: 4,
        subTopic: 'rootSystems',
        specificItems: ['waterUptakeAndTransport'],
        diagramId: 'apoplasticSymplasticTransmembraneWaterPathwayDiagram',
        experimentId: 'osmosis_potato_cylinder_water_potential_sucrose_concentration_experiment',
        contentKey: 'components'
    },
    {
        id: 'lateralRootDevelopment',
        label: 'Lateral Root Development',
        sectionNumber: 5,
        subTopic: 'rootSystems',
        specificItems: ['lateralRootDevelopment'],
        diagramId: 'lateralRootPericycleInitiationAuxinMaximumDiagram',
        experimentId: 'lateral_root_density_auxin_cytokinin_treatment_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'rhizosphere',
        label: 'The Rhizosphere',
        sectionNumber: 6,
        subTopic: 'rootSystems',
        specificItems: ['rhizosphere'],
        diagramId: 'rhizosphereExudatesMicrobialCommunityGradientDiagram',
        experimentId: 'rhizosphere_vs_bulk_soil_microbial_plate_count_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'rootModifications',
        label: 'Root Modifications',
        sectionNumber: 7,
        subTopic: 'rootSystems',
        specificItems: ['rootModifications'],
        diagramId: 'rootModificationTypesFunctionComparisonDiagram',
        experimentId: 'storage_root_starch_iodine_test_modified_root_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'gravitropism',
        label: 'Gravitropism in Roots',
        sectionNumber: 8,
        subTopic: 'rootSystems',
        specificItems: ['gravitropism'],
        diagramId: 'statocyteAmyloplastSedimentationAuxinRedistributionDiagram',
        experimentId: 'clinostat_rotation_root_gravitropic_response_elimination_experiment',
        contentKey: 'components'
    },
    {
        id: 'secondaryGrowthInRoots',
        label: 'Secondary Growth in Roots',
        sectionNumber: 9,
        subTopic: 'rootSystems',
        specificItems: ['secondaryGrowthInRoots'],
        diagramId: 'rootSecondaryGrowthVascularCorkCambiumAnnualRingDiagram',
        experimentId: 'woody_root_cross_section_annual_ring_counting_microscopy_experiment',
        contentKey: 'components'
    },
    {
        id: 'ecologicalAndAgriculturalRoles',
        label: 'Roots in Ecosystems & Agriculture',
        sectionNumber: 10,
        subTopic: 'rootSystems',
        specificItems: ['ecologicalAndAgriculturalRoles'],
        diagramId: 'rootCarbonSequestrationSoilStabilisationEcosystemRoleDiagram',
        experimentId: 'root_turnover_minirhizotron_imaging_fine_root_lifespan_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'leafStructure',
        specificItems: ['foundations'],
        diagramId: 'leafExternalMorphologyLaminaPetioleVenationLabelledDiagram',
        experimentId: 'simple_vs_compound_leaf_classification_herbarium_collection_experiment',
        contentKey: 'components'
    },
    {
        id: 'leafAnatomy',
        label: 'Leaf Anatomy — Tissues',
        sectionNumber: 2,
        subTopic: 'leafStructure',
        specificItems: ['leafAnatomy'],
        diagramId: 'leafCrossSectionAllTissueLayersAnnotatedDiagram',
        experimentId: 'leaf_transverse_section_staining_tissue_layer_microscopy_experiment',
        contentKey: 'components'
    },
    {
        id: 'stomata',
        label: 'Stomata',
        sectionNumber: 3,
        subTopic: 'leafStructure',
        specificItems: ['stomata'],
        diagramId: 'guardCellIonFluxStomatalOpeningMechanismDiagram',
        experimentId: 'stomatal_aperture_aba_blue_light_potassium_treatment_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'venation',
        label: 'Venation Patterns',
        sectionNumber: 4,
        subTopic: 'leafStructure',
        specificItems: ['venation'],
        diagramId: 'netVsParallelVenationDicotMonocotComparisonDiagram',
        experimentId: 'leaf_clearing_glycerin_vein_network_skeleton_preparation_experiment',
        contentKey: 'components'
    },
    {
        id: 'gasExchangeAndTranspiration',
        label: 'Gas Exchange & Transpiration',
        sectionNumber: 5,
        subTopic: 'leafStructure',
        specificItems: ['gasExchangeAndTranspiration'],
        diagramId: 'co2DiffusionPathwayStomataToChloroplastResistanceModelDiagram',
        experimentId: 'potometer_transpiration_rate_humidity_wind_temperature_variable_experiment',
        contentKey: 'components'
    },
    {
        id: 'sunVsShadeLeaves',
        label: 'Sun & Shade Leaf Anatomy',
        sectionNumber: 6,
        subTopic: 'leafStructure',
        specificItems: ['sunVsShadeLeaves'],
        diagramId: 'sunShadeLeafPalisadeLayersThicknessCrossComparisonDiagram',
        experimentId: 'sun_shade_leaf_cross_section_palisade_layer_count_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'leafModifications',
        label: 'Leaf Modifications',
        sectionNumber: 7,
        subTopic: 'leafStructure',
        specificItems: ['leafModifications'],
        diagramId: 'leafModificationTypesFunctionEvolutionaryOriginDiagram',
        experimentId: 'cactus_spine_vs_pea_tendril_vs_aloe_succulent_modification_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'leafAbscission',
        label: 'Leaf Abscission',
        sectionNumber: 8,
        subTopic: 'leafStructure',
        specificItems: ['leafAbscission'],
        diagramId: 'abscissionZoneSeparationProtectiveLayerHormonalControlDiagram',
        experimentId: 'ethylene_auxin_petiole_abscission_zone_explant_hormone_treatment_experiment',
        contentKey: 'components'
    },
    {
        id: 'leafDevelopment',
        label: 'Leaf Development',
        sectionNumber: 9,
        subTopic: 'leafStructure',
        specificItems: ['leafDevelopment'],
        diagramId: 'phyllotaxisGoldenAngleFibonacciLeafArrangementDiagram',
        experimentId: 'phyllotaxis_angle_measurement_spiral_leaf_arrangement_counting_experiment',
        contentKey: 'components'
    },
    {
        id: 'leafEcologyAndGlobalPatterns',
        label: 'Leaf Ecology & Global Patterns',
        sectionNumber: 10,
        subTopic: 'leafStructure',
        specificItems: ['leafEcologyAndGlobalPatterns'],
        diagramId: 'leafEconomicsSpectrumSlaVsLeafNitrogenBiomePlotDiagram',
        experimentId: 'specific_leaf_area_leaf_mass_area_biome_transect_comparison_experiment',
        contentKey: 'components'
    },



    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'plantStructure',
        specificItems: ['foundations'],
        diagramId: 'plantOrganisationHierarchyCellToOrganismDiagram',
        experimentId: 'plant_cell_observation_microscopy_onion_epidermis_experiment',
        contentKey: 'components'
    },
    {
        id: 'plantCellTypes',
        label: 'Plant Cell Types',
        sectionNumber: 2,
        subTopic: 'plantStructure',
        specificItems: ['plantCellTypes'],
        diagramId: 'parenchymaCollenchymaSclerenchymaComparisonDiagram',
        experimentId: 'celery_cross_section_collenchyma_sclerenchyma_staining_experiment',
        contentKey: 'components'
    },
    {
        id: 'rootSystem',
        label: 'Root System',
        sectionNumber: 3,
        subTopic: 'plantStructure',
        specificItems: ['rootSystem'],
        diagramId: 'rootZonesCrossSection_casparianStripLabelledDiagram',
        experimentId: 'root_tip_squash_mitosis_zones_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'stemSystem',
        label: 'Stem System',
        sectionNumber: 4,
        subTopic: 'plantStructure',
        specificItems: ['stemSystem'],
        diagramId: 'stemModificationsTypesComparativeDiagram',
        experimentId: 'stem_cross_section_vascular_bundle_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'leafStructure',
        label: 'Leaf Structure',
        sectionNumber: 5,
        subTopic: 'plantStructure',
        specificItems: ['leafStructure'],
        diagramId: 'leafInternalAnatomyPalisadeSpongyMesophyllLabelledDiagram',
        experimentId: 'leaf_peel_stomata_distribution_upper_lower_surface_experiment',
        contentKey: 'components'
    },
    {
        id: 'wholePlantArchitecture',
        label: 'Whole Plant Architecture',
        sectionNumber: 6,
        subTopic: 'plantStructure',
        specificItems: ['wholePlantArchitecture'],
        diagramId: 'monocotVsDicotWholeBodyComparativeDiagram',
        experimentId: 'monocot_vs_dicot_seed_dissection_cotyledon_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'structuralAdaptations',
        label: 'Structural Adaptations',
        sectionNumber: 7,
        subTopic: 'plantStructure',
        specificItems: ['structuralAdaptations'],
        diagramId: 'xerophyteHydrophyteAdaptationComparativeDiagram',
        experimentId: 'xerophyte_leaf_cuticle_thickness_water_loss_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'secondaryGrowthAndWood',
        label: 'Secondary Growth and Wood',
        sectionNumber: 8,
        subTopic: 'plantStructure',
        specificItems: ['secondaryGrowthAndWood'],
        diagramId: 'woodAnnualRingsHeartwoodSapwoodCambiumDiagram',
        experimentId: 'tree_ring_cross_section_dendrochronology_age_estimation_experiment',
        contentKey: 'components'
    },
    {
        id: 'flowerStructure',
        label: 'Flower Structure',
        sectionNumber: 9,
        subTopic: 'plantStructure',
        specificItems: ['flowerStructure'],
        diagramId: 'completeFlowerLabelledWhorlsDiagram',
        experimentId: 'flower_dissection_identification_floral_parts_experiment',
        contentKey: 'components'
    },
    {
        id: 'seedAndFruitStructure',
        label: 'Seed and Fruit Structure',
        sectionNumber: 10,
        subTopic: 'plantStructure',
        specificItems: ['seedAndFruitStructure'],
        diagramId: 'seedPartsEmbryoEndospermTestaDiagram',
        experimentId: 'fruit_type_classification_fleshy_dry_seed_dissection_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'plantTransport',
        specificItems: ['foundations'],
        diagramId: 'diffusionOsmosisActiveTransportComparisonDiagram',
        experimentId: 'osmosis_potato_cylinders_sucrose_solution_mass_change_experiment',
        contentKey: 'components'
    },
    {
        id: 'waterUptakeByRoots',
        label: 'Water Uptake by Roots',
        sectionNumber: 2,
        subTopic: 'plantTransport',
        specificItems: ['waterUptakeByRoots'],
        diagramId: 'apoplasticSymplasticTransmembranepathwaysCasparianStripDiagram',
        experimentId: 'root_hair_water_uptake_osmosis_observation_dye_tracking_experiment',
        contentKey: 'components'
    },
    {
        id: 'xylemTransport',
        label: 'Xylem Transport',
        sectionNumber: 3,
        subTopic: 'plantTransport',
        specificItems: ['xylemTransport'],
        diagramId: 'cohesionTensionTranspirationPullWaterColumnDiagram',
        experimentId: 'coloured_water_celery_stalk_xylem_staining_transpiration_experiment',
        contentKey: 'components'
    },
    {
        id: 'stomatalMechanism',
        label: 'Stomatal Mechanism',
        sectionNumber: 4,
        subTopic: 'plantTransport',
        specificItems: ['stomatalMechanism'],
        diagramId: 'guardCellTurgorKplusFluxStomatalOpeningClosingDiagram',
        experimentId: 'stomatal_aperture_light_dark_epidermal_peel_microscopy_experiment',
        contentKey: 'components'
    },
    {
        id: 'mineralTransport',
        label: 'Mineral Transport',
        sectionNumber: 5,
        subTopic: 'plantTransport',
        specificItems: ['mineralTransport'],
        diagramId: 'essentialMineralFunctionDeficiencySymptomSummaryDiagram',
        experimentId: 'hydroponics_mineral_deficiency_symptom_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'phloemTransport',
        label: 'Phloem Transport',
        sectionNumber: 6,
        subTopic: 'plantTransport',
        specificItems: ['phloemTransport'],
        diagramId: 'massFlowHypothesisSourceSinkPressureGradientDiagram',
        experimentId: 'aphid_stylet_phloem_sap_exudation_radioactive_tracer_experiment',
        contentKey: 'components'
    },
    {
        id: 'gasExchange',
        label: 'Gas Exchange',
        sectionNumber: 7,
        subTopic: 'plantTransport',
        specificItems: ['gasExchange'],
        diagramId: 'leafGasExchangeCO2O2GradientsPhotosynthesisRespirationDiagram',
        experimentId: 'aquatic_plant_oxygen_bubble_counting_light_intensity_experiment',
        contentKey: 'components'
    },
    {
        id: 'transpirationSignificance',
        label: 'Transpiration Significance',
        sectionNumber: 8,
        subTopic: 'plantTransport',
        specificItems: ['transpirationSignificance'],
        diagramId: 'transpirationRateFactorsSummaryDiagram',
        experimentId: 'potometer_transpiration_rate_wind_humidity_temperature_experiment',
        contentKey: 'components'
    },
    {
        id: 'wholePlantWaterRelations',
        label: 'Whole-Plant Water Relations',
        sectionNumber: 9,
        subTopic: 'plantTransport',
        specificItems: ['wholePlantWaterRelations'],
        diagramId: 'soilPlantAtmosphereContinuumWaterPotentialGradientDiagram',
        experimentId: 'wilting_and_recovery_water_stress_turgor_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'xylemVsPhloemComparison',
        label: 'Xylem vs Phloem Comparison',
        sectionNumber: 10,
        subTopic: 'plantTransport',
        specificItems: ['xylemVsPhloemComparison'],
        diagramId: 'xylemPhloemStructureFunctionSideBySideComparisonDiagram',
        experimentId: 'ringing_experiment_phloem_xylem_transport_direction_confirmation_experiment',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'plantReproduction',
        specificItems: ['foundations'],
        diagramId: 'alternationOfGenerationsSporophyteGametophyteCycleDiagram',
        experimentId: 'fern_prothallus_sporophyte_life_cycle_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'asexualReproduction',
        label: 'Asexual Reproduction',
        sectionNumber: 2,
        subTopic: 'plantReproduction',
        specificItems: ['asexualReproduction'],
        diagramId: 'vegetativePropagationTypesStolonRhizomeTuberBulbDiagram',
        experimentId: 'strawberry_stolon_vegetative_propagation_rooting_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'flowerStructureAndFunction',
        label: 'Flower Structure and Function',
        sectionNumber: 3,
        subTopic: 'plantReproduction',
        specificItems: ['flowerStructureAndFunction'],
        diagramId: 'angiospermFlowerLabelledEmbryoSacPollenDevelopmentDiagram',
        experimentId: 'flower_dissection_anther_stigma_ovule_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'pollination',
        label: 'Pollination',
        sectionNumber: 4,
        subTopic: 'plantReproduction',
        specificItems: ['pollination'],
        diagramId: 'windVsInsectPollinationFlowerAdaptationComparisonDiagram',
        experimentId: 'pollen_grain_morphology_wind_insect_pollinated_species_microscopy_experiment',
        contentKey: 'components'
    },
    {
        id: 'fertilisation',
        label: 'Fertilisation',
        sectionNumber: 5,
        subTopic: 'plantReproduction',
        specificItems: ['fertilisation'],
        diagramId: 'doubleFertilisationPollenTubeZygoteEndospermDiagram',
        experimentId: 'pollen_tube_germination_sucrose_agar_in_vitro_experiment',
        contentKey: 'components'
    },
    {
        id: 'seedDevelopment',
        label: 'Seed Development',
        sectionNumber: 6,
        subTopic: 'plantReproduction',
        specificItems: ['seedDevelopment'],
        diagramId: 'embryoDevelopmentGlobularHeartTorpedoMatureStageDiagram',
        experimentId: 'bean_seed_dissection_embryo_cotyledon_endosperm_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'fruitDevelopment',
        label: 'Fruit Development',
        sectionNumber: 7,
        subTopic: 'plantReproduction',
        specificItems: ['fruitDevelopment'],
        diagramId: 'fruitTypesClassificationFleshyDryAggregateMultipleDiagram',
        experimentId: 'fruit_type_classification_pericarp_layers_dissection_experiment',
        contentKey: 'components'
    },
    {
        id: 'seedDormancyAndGermination',
        label: 'Seed Dormancy and Germination',
        sectionNumber: 8,
        subTopic: 'plantReproduction',
        specificItems: ['seedDormancyAndGermination'],
        diagramId: 'gibberellinAleuroneLayers_alphaAmylaseStarchMobilisationDiagram',
        experimentId: 'seed_germination_temperature_light_water_conditions_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'nonFloweringPlantReproduction',
        label: 'Non-Flowering Plant Reproduction',
        sectionNumber: 9,
        subTopic: 'plantReproduction',
        specificItems: ['nonFloweringPlantReproduction'],
        diagramId: 'mossLifeCycleGametophyteSporophyteDependencyDiagram',
        experimentId: 'fern_sorus_spore_collection_germination_prothallus_growth_experiment',
        contentKey: 'components'
    },
    {
        id: 'reproductiveStrategiesAndEcology',
        label: 'Reproductive Strategies and Ecology',
        sectionNumber: 10,
        subTopic: 'plantReproduction',
        specificItems: ['reproductiveStrategiesAndEcology'],
        diagramId: 'annualBiennialPerennialLifeHistoryComparisonDiagram',
        experimentId: 'seed_size_number_trade_off_r_vs_k_strategy_field_survey_experiment',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'plantHormones',
        specificItems: ['foundations'],
        diagramId: 'hormoneReceptorSignalTransductionGeneralPathwayDiagram',
        experimentId: 'hormone_synergism_antagonism_concept_mapping_activity_experiment',
        contentKey: 'components'
    },
    {
        id: 'auxins',
        label: 'Auxins',
        sectionNumber: 2,
        subTopic: 'plantHormones',
        specificItems: ['auxins'],
        diagramId: 'auxinPolarTransportPINProteinApicalDominanceDiagram',
        experimentId: 'auxin_rooting_powder_cutting_adventitious_root_formation_experiment',
        contentKey: 'components'
    },
    {
        id: 'gibberellins',
        label: 'Gibberellins',
        sectionNumber: 3,
        subTopic: 'plantHormones',
        specificItems: ['gibberellins'],
        diagramId: 'gibberellinDELLARepressorDegradationStemElongationDiagram',
        experimentId: 'gibberellin_dwarf_pea_stem_elongation_dose_response_experiment',
        contentKey: 'components'
    },
    {
        id: 'cytokinins',
        label: 'Cytokinins',
        sectionNumber: 4,
        subTopic: 'plantHormones',
        specificItems: ['cytokinins'],
        diagramId: 'cytokininAuxinRatioShootRootOrganogenesisTissueCultureDiagram',
        experimentId: 'detached_leaf_senescence_cytokinin_green_island_retention_experiment',
        contentKey: 'components'
    },
    {
        id: 'abscisicAcid',
        label: 'Abscisic Acid',
        sectionNumber: 5,
        subTopic: 'plantHormones',
        specificItems: ['abscisicAcid'],
        diagramId: 'abaGuardCellSignallingPYRPYLSnRK2StomatalClosureDiagram',
        experimentId: 'aba_stomatal_closure_drought_stress_epidermal_peel_experiment',
        contentKey: 'components'
    },
    {
        id: 'ethylene',
        label: 'Ethylene',
        sectionNumber: 6,
        subTopic: 'plantHormones',
        specificItems: ['ethylene'],
        diagramId: 'ethyleneYangCycleClimactericFruitRipeningTripleResponseDiagram',
        experimentId: 'ripe_banana_sealed_bag_ethylene_unripe_fruit_ripening_experiment',
        contentKey: 'components'
    },
    {
        id: 'brassinosteroids',
        label: 'Brassinosteroids',
        sectionNumber: 7,
        subTopic: 'plantHormones',
        specificItems: ['brassinosteroids'],
        diagramId: 'brassinosteroidBRI1ReceptorBES1BZR1SignallingCellElongationDiagram',
        experimentId: 'bri1_dwarf_mutant_brassinosteroid_rescue_elongation_experiment',
        contentKey: 'components'
    },
    {
        id: 'jasmonates',
        label: 'Jasmonates',
        sectionNumber: 8,
        subTopic: 'plantHormones',
        specificItems: ['jasmonates'],
        diagramId: 'jasmonateCOI1JAZRepressorWoundingDefenceGeneActivationDiagram',
        experimentId: 'leaf_wounding_protease_inhibitor_induction_wound_response_experiment',
        contentKey: 'components'
    },
    {
        id: 'strigolactones',
        label: 'Strigolactones',
        sectionNumber: 9,
        subTopic: 'plantHormones',
        specificItems: ['strigolactones'],
        diagramId: 'strigolactoneShootBranchingMycorrhizalSignallingRootExudateDiagram',
        experimentId: 'max_mutant_branching_phenotype_strigolactone_rescue_experiment',
        contentKey: 'components'
    },
    {
        id: 'hormoneInteractionsAndApplications',
        label: 'Hormone Interactions and Applications',
        sectionNumber: 10,
        subTopic: 'plantHormones',
        specificItems: ['hormoneInteractionsAndApplications'],
        diagramId: 'plantHormoneInteractionNetworkSummaryTableDiagram',
        experimentId: 'commercial_hormone_application_fruit_ripening_rooting_comparison_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'tropisms',
        specificItems: ['foundations'],
        diagramId: 'tropismVsNasticMovementDirectionalVsNonDirectionalDiagram',
        experimentId: 'differential_cell_elongation_curvature_demonstration_experiment',
        contentKey: 'components'
    },
    {
        id: 'phototropism',
        label: 'Phototropism',
        sectionNumber: 2,
        subTopic: 'tropisms',
        specificItems: ['phototropism'],
        diagramId: 'darwinBoysenJensenWentColeoptileExperimentSequenceDiagram',
        experimentId: 'oat_coleoptile_unilateral_light_bending_tip_removal_experiment',
        contentKey: 'components'
    },
    {
        id: 'gravitropism',
        label: 'Gravitropism',
        sectionNumber: 3,
        subTopic: 'tropisms',
        specificItems: ['gravitropism'],
        diagramId: 'statolythColumellaCellAuxinRedistributionRootShootGravitropismDiagram',
        experimentId: 'clinostat_vs_stationary_seedling_gravitropism_orientation_experiment',
        contentKey: 'components'
    },
    {
        id: 'thigmotropism',
        label: 'Thigmotropism',
        sectionNumber: 4,
        subTopic: 'tropisms',
        specificItems: ['thigmotropism'],
        diagramId: 'tendrilContactCoilingMechanosensitiveCalciumSignallingDiagram',
        experimentId: 'pea_tendril_contact_coiling_time_lapse_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'hydrotropism',
        label: 'Hydrotropism',
        sectionNumber: 5,
        subTopic: 'tropisms',
        specificItems: ['hydrotropism'],
        diagramId: 'rootHydrotropismMoisureGradientABASignallingElongationZoneDiagram',
        experimentId: 'root_moisture_gradient_clinostat_hydrotropism_isolation_experiment',
        contentKey: 'components'
    },
    {
        id: 'chemotropism',
        label: 'Chemotropism',
        sectionNumber: 6,
        subTopic: 'tropisms',
        specificItems: ['chemotropism'],
        diagramId: 'pollenTubeLUREPeptideCalciumGradientMicropyleGuidanceDiagram',
        experimentId: 'pollen_tube_in_vitro_chemotropism_ovule_extract_guidance_experiment',
        contentKey: 'components'
    },
    {
        id: 'otherTropisms',
        label: 'Other Tropisms',
        sectionNumber: 7,
        subTopic: 'tropisms',
        specificItems: ['otherTropisms'],
        diagramId: 'thermotropismElectrotropismSkototropismComparisonDiagram',
        experimentId: 'monstera_skototropism_dark_object_directed_growth_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'photomorphogenesisAndPhytochrome',
        label: 'Photomorphogenesis and Phytochrome',
        sectionNumber: 8,
        subTopic: 'tropisms',
        specificItems: ['photomorphogenesisAndPhytochrome'],
        diagramId: 'phytochromePrPfrRedFarRedInterconversionShadeAvoidanceDiagram',
        experimentId: 'lettuce_seed_red_far_red_light_germination_phytochrome_experiment',
        contentKey: 'components'
    },
    {
        id: 'nasticMovements',
        label: 'Nastic Movements',
        sectionNumber: 9,
        subTopic: 'tropisms',
        specificItems: ['nasticMovements'],
        diagramId: 'mimosaPudicaPulvinusThigmonastyVenusFlytrapActionPotentialDiagram',
        experimentId: 'mimosa_pudica_touch_response_recovery_time_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'integrationAndAdaptiveSignificance',
        label: 'Integration and Adaptive Significance',
        sectionNumber: 10,
        subTopic: 'tropisms',
        specificItems: ['integrationAndAdaptiveSignificance'],
        diagramId: 'competingTropismsGravitropismHydrotropismIntegrationDiagram',
        experimentId: 'seedling_competing_tropisms_gravity_light_directional_growth_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'plantAnatomy',
        specificItems: ['foundations'],
        diagramId: 'transverseLongitudinalSectionPlanePrimarySecondaryBodyDiagram',
        experimentId: 'hand_sectioning_staining_safranin_fast_green_plant_tissue_experiment',
        contentKey: 'components'
    },
    {
        id: 'dermalTissueSystem',
        label: 'Dermal Tissue System',
        sectionNumber: 2,
        subTopic: 'plantAnatomy',
        specificItems: ['dermalTissueSystem'],
        diagramId: 'epidermisStomataGuardCellTrichomeCorkLenticellDiagram',
        experimentId: 'epidermal_peel_stomata_trichome_microscopy_nail_varnish_experiment',
        contentKey: 'components'
    },
    {
        id: 'vascularTissueSystem',
        label: 'Vascular Tissue System',
        sectionNumber: 3,
        subTopic: 'plantAnatomy',
        specificItems: ['vascularTissueSystem'],
        diagramId: 'xylemVesselTracheidsPhloeSieveTubeCompanionCellUltrastructureDiagram',
        experimentId: 'xylem_vessel_element_macerationHCl_isolated_cell_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'groundTissueSystem',
        label: 'Ground Tissue System',
        sectionNumber: 4,
        subTopic: 'plantAnatomy',
        specificItems: ['groundTissueSystem'],
        diagramId: 'parenchymaCollenchymaSclerenchymaSecretoryStructuresComparativeDiagram',
        experimentId: 'pear_stone_cell_sclereid_maceration_microscopy_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'primaryRootAnatomy',
        label: 'Primary Root Anatomy',
        sectionNumber: 5,
        subTopic: 'plantAnatomy',
        specificItems: ['primaryRootAnatomy'],
        diagramId: 'dicotMonocotRootCrossSectionEpidermisCortexEndodermisVascularDiagram',
        experimentId: 'root_cross_section_berberine_casparian_strip_fluorescence_experiment',
        contentKey: 'components'
    },
    {
        id: 'primaryStemAnatomy',
        label: 'Primary Stem Anatomy',
        sectionNumber: 6,
        subTopic: 'plantAnatomy',
        specificItems: ['primaryStemAnatomy'],
        diagramId: 'dicotVsMonocotStemCrossSectionEusteeleVsAtactosteleComparisonDiagram',
        experimentId: 'monocot_dicot_stem_cross_section_toluidine_blue_bundle_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'secondaryStemAnatomy',
        label: 'Secondary Stem Anatomy',
        sectionNumber: 7,
        subTopic: 'plantAnatomy',
        specificItems: ['secondaryStemAnatomy'],
        diagramId: 'vascularCambiumSecondaryXylemPhloemBarkAnnualRingsDiagram',
        experimentId: 'woody_stem_cross_section_annual_ring_age_estimation_experiment',
        contentKey: 'components'
    },
    {
        id: 'leafAnatomyDetail',
        label: 'Leaf Anatomy in Detail',
        sectionNumber: 8,
        subTopic: 'plantAnatomy',
        specificItems: ['leafAnatomyDetail'],
        diagramId: 'c3VsC4LeafKranzAnatomyBundleSheathPalisadeSpongyDiagram',
        experimentId: 'c3_vs_c4_leaf_cross_section_bundle_sheath_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'comparativeAnatomyMonocotDicot',
        label: 'Comparative Anatomy: Monocots vs Dicots',
        sectionNumber: 9,
        subTopic: 'plantAnatomy',
        specificItems: ['comparativeAnatomyMonocotDicot'],
        diagramId: 'monocotDicotGymnospermAnatomicalFeaturesComparisonTableDiagram',
        experimentId: 'monocot_dicot_root_stem_leaf_cross_section_feature_mapping_experiment',
        contentKey: 'components'
    },
    {
        id: 'functionalAnatomyAndAdaptations',
        label: 'Functional Anatomy and Adaptations',
        sectionNumber: 10,
        subTopic: 'plantAnatomy',
        specificItems: ['functionalAnatomyAndAdaptations'],
        diagramId: 'xerophyteHydrophyteTransferCellStructureFunctionAdaptationDiagram',
        experimentId: 'aerenchyma_waterlogged_root_cross_section_hydrophyte_identification_experiment',
        contentKey: 'components'
    },



    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'cellStructure',
        specificItems: ['foundations'],
        diagramId: 'cellTheoryHistoricalTimelineDiagram',
        experimentId: 'light_microscopy_onion_cheek_cell_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'plasmaMembrane',
        label: 'Plasma Membrane',
        sectionNumber: 2,
        subTopic: 'cellStructure',
        specificItems: ['plasmaMembrane'],
        diagramId: 'fluidMosaicModelLabelledCrossSection',
        experimentId: 'beetroot_membrane_permeability_temperature_experiment',
        contentKey: 'components'
    },
    {
        id: 'prokaryoticCellStructure',
        label: 'Prokaryotic Cell Structure',
        sectionNumber: 3,
        subTopic: 'cellStructure',
        specificItems: ['prokaryoticCellStructure'],
        diagramId: 'prokaryoticCellAnnotatedStructureDiagram',
        experimentId: 'gram_staining_bacterial_cell_wall_classification_experiment',
        contentKey: 'components'
    },
    {
        id: 'nucleus',
        label: 'Nucleus',
        sectionNumber: 4,
        subTopic: 'cellStructure',
        specificItems: ['nucleus'],
        diagramId: 'nuclearEnvelopeAndPoreComplexCrossSection',
        experimentId: 'feulgen_staining_dna_localisation_nucleus_experiment',
        contentKey: 'components'
    },
    {
        id: 'membraneBoundOrganelles',
        label: 'Membrane-Bound Organelles',
        sectionNumber: 5,
        subTopic: 'cellStructure',
        specificItems: ['membraneBoundOrganelles'],
        diagramId: 'eukaryoticOrganelleMapAndFunctionSummary',
        experimentId: 'differential_centrifugation_organelle_isolation_experiment',
        contentKey: 'components'
    },
    {
        id: 'plastids',
        label: 'Plastids',
        sectionNumber: 6,
        subTopic: 'cellStructure',
        specificItems: ['plastids'],
        diagramId: 'chloroplastInternalMembraneSystemDiagram',
        experimentId: 'leaf_disc_chromatography_pigment_separation_experiment',
        contentKey: 'components'
    },
    {
        id: 'cytoskeleton',
        label: 'Cytoskeleton',
        sectionNumber: 7,
        subTopic: 'cellStructure',
        specificItems: ['cytoskeleton'],
        diagramId: 'cytoskeletalFilamentsComparativeStructureChart',
        experimentId: 'fluorescence_phalloidin_actin_visualisation_experiment',
        contentKey: 'components'
    },
    {
        id: 'cellSurfaceStructures',
        label: 'Cell Surface Structures',
        sectionNumber: 8,
        subTopic: 'cellStructure',
        specificItems: ['cellSurfaceStructures'],
        diagramId: 'plantCellWallLayersAndCompositionDiagram',
        experimentId: 'plasmolysis_deplasmolysis_onion_cell_wall_experiment',
        contentKey: 'components'
    },
    {
        id: 'cellJunctions',
        label: 'Cell Junctions',
        sectionNumber: 9,
        subTopic: 'cellStructure',
        specificItems: ['cellJunctions'],
        diagramId: 'epithelialCellJunctionTypesAnnotatedDiagram',
        experimentId: 'freeze_fracture_tem_junction_strand_visualisation_experiment',
        contentKey: 'components'
    },
    {
        id: 'comparativeCellBiology',
        label: 'Comparative Cell Biology',
        sectionNumber: 10,
        subTopic: 'cellStructure',
        specificItems: ['comparativeCellBiology'],
        diagramId: 'animalVsPlantVsProkaryoteCellComparisonChart',
        experimentId: 'microscopy_comparison_animal_plant_bacterial_cells_experiment',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'cellularMolecules',
        specificItems: ['foundations'],
        diagramId: 'biologicalFunctionalGroupsAndBondTypesSummary',
        experimentId: 'condensation_hydrolysis_modelling_with_molecular_models_experiment',
        contentKey: 'components'
    },
    {
        id: 'water',
        label: 'Water',
        sectionNumber: 2,
        subTopic: 'cellularMolecules',
        specificItems: ['water'],
        diagramId: 'waterHydrogenBondNetworkAndPropertiesDiagram',
        experimentId: 'water_cohesion_surface_tension_capillary_action_experiment',
        contentKey: 'components'
    },
    {
        id: 'carbohydrates',
        label: 'Carbohydrates',
        sectionNumber: 3,
        subTopic: 'cellularMolecules',
        specificItems: ['carbohydrates'],
        diagramId: 'monosaccharideToPolysaccharidePolymerisationDiagram',
        experimentId: 'benedicts_iodine_test_carbohydrate_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'lipids',
        label: 'Lipids',
        sectionNumber: 4,
        subTopic: 'cellularMolecules',
        specificItems: ['lipids'],
        diagramId: 'lipidClassesStructuralComparisonChart',
        experimentId: 'emulsion_test_lipid_chromatography_fatty_acid_saturation_experiment',
        contentKey: 'components'
    },
    {
        id: 'proteins',
        label: 'Proteins',
        sectionNumber: 5,
        subTopic: 'cellularMolecules',
        specificItems: ['proteins'],
        diagramId: 'proteinFourLevelsOfStructureDiagram',
        experimentId: 'biuret_test_enzyme_denaturation_temperature_pH_experiment',
        contentKey: 'components'
    },
    {
        id: 'nucleicAcids',
        label: 'Nucleic Acids',
        sectionNumber: 6,
        subTopic: 'cellularMolecules',
        specificItems: ['nucleicAcids'],
        diagramId: 'dnaDoubleHelixBasePairingAndGeneticCodeTable',
        experimentId: 'dna_extraction_strawberry_spooling_precipitation_experiment',
        contentKey: 'components'
    },
    {
        id: 'ATPandEnergyMolecules',
        label: 'ATP and Energy Molecules',
        sectionNumber: 7,
        subTopic: 'cellularMolecules',
        specificItems: ['ATPandEnergyMolecules'],
        diagramId: 'atpStructureAndHydrolysisEnergyReleaseDiagram',
        experimentId: 'luciferase_bioluminescence_atp_concentration_assay_experiment',
        contentKey: 'components'
    },
    {
        id: 'vitaminsAndCofactors',
        label: 'Vitamins and Cofactors',
        sectionNumber: 8,
        subTopic: 'cellularMolecules',
        specificItems: ['vitaminsAndCofactors'],
        diagramId: 'fatAndWaterSolubleVitaminRolesAndDeficiencyChart',
        experimentId: 'vitamin_c_dcpip_titration_fruit_juice_content_experiment',
        contentKey: 'components'
    },
    {
        id: 'haemoglobinAndRespiratoryProteins',
        label: 'Haemoglobin and Respiratory Proteins',
        sectionNumber: 9,
        subTopic: 'cellularMolecules',
        specificItems: ['haemoglobinAndRespiratoryProteins'],
        diagramId: 'haemoglobinOxygenDissociationCurveBohrEffectDiagram',
        experimentId: 'oxygen_dissociation_curve_simulation_pH_temperature_shift_experiment',
        contentKey: 'components'
    },
    {
        id: 'systemSpecificMolecules',
        label: 'System-Specific Molecules',
        sectionNumber: 10,
        subTopic: 'cellularMolecules',
        specificItems: ['systemSpecificMolecules'],
        diagramId: 'bileSynthesisAndLipoproteinTransportPathwayDiagram',
        experimentId: 'bile_salts_fat_emulsification_lipase_digestion_rate_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'cellularProcesses',
        specificItems: ['foundations'],
        diagramId: 'freeEnergyThermodynamicsAnabolismCatabolismDiagram',
        experimentId: 'exergonic_endergonic_coupling_atp_modelling_experiment',
        contentKey: 'components'
    },
    {
        id: 'cellularRespiration',
        label: 'Cellular Respiration',
        sectionNumber: 2,
        subTopic: 'cellularProcesses',
        specificItems: ['cellularRespiration'],
        diagramId: 'glycolysisKrebsEtcChemiosmosisIntegratedPathwayMap',
        experimentId: 'respirometer_oxygen_consumption_germinating_seeds_experiment',
        contentKey: 'components'
    },
    {
        id: 'photosynthesis',
        label: 'Photosynthesis',
        sectionNumber: 3,
        subTopic: 'cellularProcesses',
        specificItems: ['photosynthesis'],
        diagramId: 'lightReactionsCalvinCycleChloroplastCompartmentDiagram',
        experimentId: 'leaf_disc_floating_photosynthesis_rate_light_intensity_experiment',
        contentKey: 'components'
    },
    {
        id: 'DNAReplication',
        label: 'DNA Replication',
        sectionNumber: 4,
        subTopic: 'cellularProcesses',
        specificItems: ['DNAReplication'],
        diagramId: 'semiconservativeReplicationForkLeadingLaggingStrandDiagram',
        experimentId: 'meselson_stahl_nitrogen_isotope_density_gradient_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'transcription',
        label: 'Transcription',
        sectionNumber: 5,
        subTopic: 'cellularProcesses',
        specificItems: ['transcription'],
        diagramId: 'eukaryoticTranscriptionPreMrnaProcessingDiagram',
        experimentId: 'lac_operon_induction_repression_beta_galactosidase_assay_experiment',
        contentKey: 'components'
    },
    {
        id: 'translation',
        label: 'Translation',
        sectionNumber: 6,
        subTopic: 'cellularProcesses',
        specificItems: ['translation'],
        diagramId: 'ribosomeABPSitesTranslationElongationCycleDiagram',
        experimentId: 'cell_free_translation_system_luciferase_reporter_experiment',
        contentKey: 'components'
    },
    {
        id: 'proteinSortingAndSecretoryPathway',
        label: 'Protein Sorting and Secretory Pathway',
        sectionNumber: 7,
        subTopic: 'cellularProcesses',
        specificItems: ['proteinSortingAndSecretoryPathway'],
        diagramId: 'secretoryPathwayERGolgiVesicleDestinationFlowchart',
        experimentId: 'gfp_tagged_protein_live_cell_secretory_pathway_tracking_experiment',
        contentKey: 'components'
    },
    {
        id: 'cellSignalling',
        label: 'Cell Signalling',
        sectionNumber: 8,
        subTopic: 'cellularProcesses',
        specificItems: ['cellSignalling'],
        diagramId: 'gpcrRtkSecondMessengerCascadeComparisonDiagram',
        experimentId: 'camp_second_messenger_forskolin_glycogen_phosphorylase_assay_experiment',
        contentKey: 'components'
    },
    {
        id: 'apoptosis',
        label: 'Apoptosis',
        sectionNumber: 9,
        subTopic: 'cellularProcesses',
        specificItems: ['apoptosis'],
        diagramId: 'intrinsicExtrinsicApoptosisPathwayCaspaseCascadeDiagram',
        experimentId: 'annexin_v_propidium_iodide_flow_cytometry_apoptosis_detection_experiment',
        contentKey: 'components'
    },
    {
        id: 'systemLevelProcesses',
        label: 'System-Level Processes',
        sectionNumber: 10,
        subTopic: 'cellularProcesses',
        specificItems: ['systemLevelProcesses'],
        diagramId: 'cellularMetabolismOrganSystemIntegrationSummaryDiagram',
        experimentId: 'exercise_lactate_threshold_blood_glucose_monitoring_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'cellCommunication',
        specificItems: ['foundations'],
        diagramId: 'signallingDistanceTypesEndocrineParacrineContactDiagram',
        experimentId: 'diffusion_gradient_agar_dye_signalling_range_experiment',
        contentKey: 'components'
    },
    {
        id: 'cellSurfaceReceptors',
        label: 'Cell-Surface Receptors',
        sectionNumber: 2,
        subTopic: 'cellCommunication',
        specificItems: ['cellSurfaceReceptors'],
        diagramId: 'gpcrRtkLigandGatedChannelReceptorClassesDiagram',
        experimentId: 'radioligand_binding_assay_receptor_saturation_kd_experiment',
        contentKey: 'components'
    },
    {
        id: 'intracellularReceptors',
        label: 'Intracellular Receptors',
        sectionNumber: 3,
        subTopic: 'cellCommunication',
        specificItems: ['intracellularReceptors'],
        diagramId: 'nuclearHormoneReceptorDnaBindingTranscriptionActivationDiagram',
        experimentId: 'cortisol_glucocorticoid_receptor_reporter_gene_transcription_experiment',
        contentKey: 'components'
    },
    {
        id: 'secondMessengerSystems',
        label: 'Second Messenger Systems',
        sectionNumber: 4,
        subTopic: 'cellCommunication',
        specificItems: ['secondMessengerSystems'],
        diagramId: 'campIp3CalciumDagSecondMessengerNetworkDiagram',
        experimentId: 'camp_elisa_adrenaline_dose_response_hepatocyte_experiment',
        contentKey: 'components'
    },
    {
        id: 'neuronalSignalling',
        label: 'Neuronal Signalling',
        sectionNumber: 5,
        subTopic: 'cellCommunication',
        specificItems: ['neuronalSignalling'],
        diagramId: 'actionPotentialPhasesIonChannelGatingDiagram',
        experimentId: 'squid_giant_axon_patch_clamp_action_potential_recording_experiment',
        contentKey: 'components'
    },
    {
        id: 'hormonalSignalling',
        label: 'Hormonal Signalling',
        sectionNumber: 6,
        subTopic: 'cellCommunication',
        specificItems: ['hormonalSignalling'],
        diagramId: 'hypothalamicPituitaryAxisNegativeFeedbackLoopDiagram',
        experimentId: 'insulin_glucose_clamp_beta_cell_secretion_dose_response_experiment',
        contentKey: 'components'
    },
    {
        id: 'immuneCellCommunication',
        label: 'Immune Cell Communication',
        sectionNumber: 7,
        subTopic: 'cellCommunication',
        specificItems: ['immuneCellCommunication'],
        diagramId: 'cytokineNetworkTCellActivationTwoSignalDiagram',
        experimentId: 'elisa_cytokine_quantification_lps_stimulated_macrophage_experiment',
        contentKey: 'components'
    },
    {
        id: 'developmentalSignalling',
        label: 'Developmental Signalling',
        sectionNumber: 8,
        subTopic: 'cellCommunication',
        specificItems: ['developmentalSignalling'],
        diagramId: 'wntNotchHedgehogPathwaysComparisonDiagram',
        experimentId: 'zebrafish_notch_delta_lateral_inhibition_cell_fate_experiment',
        contentKey: 'components'
    },
    {
        id: 'signalIntegrationAndCrosstalk',
        label: 'Signal Integration and Crosstalk',
        sectionNumber: 9,
        subTopic: 'cellCommunication',
        specificItems: ['signalIntegrationAndCrosstalk'],
        diagramId: 'signalConvergenceDivergenceFeedbackLoopNetworkDiagram',
        experimentId: 'mapk_erk_phosphorylation_multiplexed_ligand_combination_experiment',
        contentKey: 'components'
    },
    {
        id: 'systemLevelCommunication',
        label: 'System-Level Communication',
        sectionNumber: 10,
        subTopic: 'cellCommunication',
        specificItems: ['systemLevelCommunication'],
        diagramId: 'raasCardiacConductionGutEntericSystemCommunicationDiagram',
        experimentId: 'ecg_heart_rate_autonomic_nervous_system_pharmacology_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'transportMechanisms',
        specificItems: ['foundations'],
        diagramId: 'electrochemicalGradientNernstEquationIonDrivingForceDiagram',
        experimentId: 'electrochemical_gradient_modelling_concentration_voltage_cells_experiment',
        contentKey: 'components'
    },
    {
        id: 'passiveTransport',
        label: 'Passive Transport',
        sectionNumber: 2,
        subTopic: 'transportMechanisms',
        specificItems: ['passiveTransport'],
        diagramId: 'simpleDiffusionOsmosisAquaporinFacilitatedDiffusionComparisonDiagram',
        experimentId: 'dialysis_tubing_osmosis_sucrose_concentration_experiment',
        contentKey: 'components'
    },
    {
        id: 'activeTransport',
        label: 'Active Transport',
        sectionNumber: 3,
        subTopic: 'transportMechanisms',
        specificItems: ['activeTransport'],
        diagramId: 'naKAtpaseSymporterAntiporterPrimarySecondaryActiveTransportDiagram',
        experimentId: 'ouabain_inhibition_na_k_atpase_cell_volume_swelling_experiment',
        contentKey: 'components'
    },
    {
        id: 'vesicularTransport',
        label: 'Vesicular Transport',
        sectionNumber: 4,
        subTopic: 'transportMechanisms',
        specificItems: ['vesicularTransport'],
        diagramId: 'endocytosisExocytosisSnareVesicleFusionPathwayDiagram',
        experimentId: 'fluorescent_transferrin_receptor_mediated_endocytosis_tracking_experiment',
        contentKey: 'components'
    },
    {
        id: 'epithelialTransport',
        label: 'Epithelial Transport',
        sectionNumber: 5,
        subTopic: 'transportMechanisms',
        specificItems: ['epithelialTransport'],
        diagramId: 'polarisedEpithelialCellApicalBasolateralTransportersDiagram',
        experimentId: 'ussing_chamber_transepithelial_current_intestinal_glucose_absorption_experiment',
        contentKey: 'components'
    },
    {
        id: 'gasTransport',
        label: 'Gas Transport',
        sectionNumber: 6,
        subTopic: 'transportMechanisms',
        specificItems: ['gasTransport'],
        diagramId: 'haemoglobinOxygenCO2TransportChlorideShiftDiagram',
        experimentId: 'carbonic_anhydrase_co2_hydration_ph_indicator_rbc_experiment',
        contentKey: 'components'
    },
    {
        id: 'membranePotentialAndIonTransport',
        label: 'Membrane Potential and Ion Transport',
        sectionNumber: 7,
        subTopic: 'transportMechanisms',
        specificItems: ['membranePotentialAndIonTransport'],
        diagramId: 'restingMembranePotentialActionPotentialIonFluxPhaseDiagram',
        experimentId: 'patch_clamp_single_ion_channel_conductance_recording_experiment',
        contentKey: 'components'
    },
    {
        id: 'mitochondrialTransport',
        label: 'Mitochondrial Transport',
        sectionNumber: 8,
        subTopic: 'transportMechanisms',
        specificItems: ['mitochondrialTransport'],
        diagramId: 'mitochondrialDoubleMembraneCarrierProteinNetworkDiagram',
        experimentId: 'mitochondrial_membrane_potential_jc1_dye_uncoupler_dnp_experiment',
        contentKey: 'components'
    },
    {
        id: 'transportPathology',
        label: 'Transport Pathology',
        sectionNumber: 9,
        subTopic: 'transportMechanisms',
        specificItems: ['transportPathology'],
        diagramId: 'channelopathyTransporterDiseaseGeneProteinConsequenceTable',
        experimentId: 'cftr_chloride_channel_sweat_chloride_test_cystic_fibrosis_experiment',
        contentKey: 'components'
    },
    {
        id: 'systemLevelTransport',
        label: 'System-Level Transport',
        sectionNumber: 10,
        subTopic: 'transportMechanisms',
        specificItems: ['systemLevelTransport'],
        diagramId: 'starlingForcesFiltrationReabsorptionCapillaryExchangeDiagram',
        experimentId: 'renal_clearance_inulin_creatinine_tubular_reabsorption_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'cellDivision',
        specificItems: ['foundations'],
        diagramId: 'ploidyKaryotypeChromosomeMorphologyDiagram',
        experimentId: 'human_karyotype_construction_chromosomal_disorder_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'cellCycle',
        label: 'Cell Cycle',
        sectionNumber: 2,
        subTopic: 'cellDivision',
        specificItems: ['cellCycle'],
        diagramId: 'cellCyclePhasesCyclinCdkCheckpointSummaryDiagram',
        experimentId: 'flow_cytometry_dna_content_cell_cycle_phase_distribution_experiment',
        contentKey: 'components'
    },
    {
        id: 'mitosis',
        label: 'Mitosis',
        sectionNumber: 3,
        subTopic: 'cellDivision',
        specificItems: ['mitosis'],
        diagramId: 'mitosisStageByStageChromosomeBehaviourAnnotatedDiagram',
        experimentId: 'onion_root_tip_mitosis_stages_light_microscopy_experiment',
        contentKey: 'components'
    },
    {
        id: 'meiosis',
        label: 'Meiosis',
        sectionNumber: 4,
        subTopic: 'cellDivision',
        specificItems: ['meiosis'],
        diagramId: 'meiosisIAndIIChrosomeSynapsisCrossingOverSegregationDiagram',
        experimentId: 'locust_testis_squash_meiotic_stages_microscopy_experiment',
        contentKey: 'components'
    },
    {
        id: 'chromosomeSegregationErrors',
        label: 'Chromosome Segregation Errors',
        sectionNumber: 5,
        subTopic: 'cellDivision',
        specificItems: ['chromosomeSegregationErrors'],
        diagramId: 'nondisjunctionMeiosisIVsMeiosisIIAneuploidyOutcomeDiagram',
        experimentId: 'fluorescence_fish_trisomy_21_prenatal_diagnosis_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'tumourSuppressorsAndOncogenes',
        label: 'Tumour Suppressors and Oncogenes',
        sectionNumber: 6,
        subTopic: 'cellDivision',
        specificItems: ['tumourSuppressorsAndOncogenes'],
        diagramId: 'oncogeneGainOfFunctionTumourSuppressorLossHallmarksDiagram',
        experimentId: 'colony_formation_ras_oncogene_transfection_soft_agar_assay_experiment',
        contentKey: 'components'
    },
    {
        id: 'DNAdamageResponseAndSenescence',
        label: 'DNA Damage Response and Senescence',
        sectionNumber: 7,
        subTopic: 'cellDivision',
        specificItems: ['DNAdamageResponseAndSenescence'],
        diagramId: 'atmAtrCheckpointKinaseP53P21GammaH2axSignallingDiagram',
        experimentId: 'gamma_h2ax_foci_immunofluorescence_ionising_radiation_dna_damage_experiment',
        contentKey: 'components'
    },
    {
        id: 'stemCellsAndTissueRenewal',
        label: 'Stem Cells and Tissue Renewal',
        sectionNumber: 8,
        subTopic: 'cellDivision',
        specificItems: ['stemCellsAndTissueRenewal'],
        diagramId: 'haematopoieticStemCellDifferentiationHierarchyDiagram',
        experimentId: 'colony_forming_unit_assay_haematopoietic_stem_cell_potency_experiment',
        contentKey: 'components'
    },
    {
        id: 'epigeneticInheritance',
        label: 'Epigenetic Inheritance',
        sectionNumber: 9,
        subTopic: 'cellDivision',
        specificItems: ['epigeneticInheritance'],
        diagramId: 'dnaAndHistoneModificationInheritanceReplicationForkDiagram',
        experimentId: 'bisulfite_sequencing_cpg_methylation_inheritance_cell_division_experiment',
        contentKey: 'components'
    },
    {
        id: 'cellDivisionInBodySystems',
        label: 'Cell Division in Body Systems',
        sectionNumber: 10,
        subTopic: 'cellDivision',
        specificItems: ['cellDivisionInBodySystems'],
        diagramId: 'tissueRenewalRatesAndCancerOriginBySystemDiagram',
        experimentId: 'intestinal_organoid_lgr5_stem_cell_crypt_villus_growth_experiment',
        contentKey: 'components'
    },




    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'nervousSystem',
        specificItems: ['foundations'],
        diagramId: 'neuronAnatomyLabelledDiagram',
        experimentId: 'neuron_model_clay_build_and_label_activity',
        contentKey: 'components'
    },
    {
        id: 'structuralDivisions',
        label: 'Structural Divisions',
        sectionNumber: 2,
        subTopic: 'nervousSystem',
        specificItems: ['structuralDivisions'],
        diagramId: 'cnsVsPnsDivisionOverviewDiagram',
        experimentId: 'sheep_brain_dissection_and_lobe_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'functionalDivisions',
        label: 'Functional Divisions',
        sectionNumber: 3,
        subTopic: 'nervousSystem',
        specificItems: ['functionalDivisions'],
        diagramId: 'somaticVsAutonomicNervousSystemComparisonDiagram',
        experimentId: 'fight_or_flight_vs_rest_and_digest_response_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'nerveImpulseAndActionPotential',
        label: 'Nerve Impulse and Action Potential',
        sectionNumber: 4,
        subTopic: 'nervousSystem',
        specificItems: ['nerveImpulseAndActionPotential'],
        diagramId: 'actionPotentialPhasesMembranePotentialGraph',
        experimentId: 'oscilloscope_action_potential_recording_in_frog_nerve_experiment',
        contentKey: 'components'
    },
    {
        id: 'synapticTransmission',
        label: 'Synaptic Transmission',
        sectionNumber: 5,
        subTopic: 'nervousSystem',
        specificItems: ['synapticTransmission'],
        diagramId: 'chemicalSynapseVesicleReleaseStepsDiagram',
        experimentId: 'acetylcholine_muscle_twitch_pharmacology_virtual_experiment',
        contentKey: 'components'
    },
    {
        id: 'reflexArcs',
        label: 'Reflex Arcs',
        sectionNumber: 6,
        subTopic: 'nervousSystem',
        specificItems: ['reflexArcs'],
        diagramId: 'spinalReflexArcFiveComponentPathwayDiagram',
        experimentId: 'patellar_knee_jerk_reflex_testing_and_reaction_time_experiment',
        contentKey: 'components'
    },
    {
        id: 'sensoryPathwaysAndReceptors',
        label: 'Sensory Pathways and Receptors',
        sectionNumber: 7,
        subTopic: 'nervousSystem',
        specificItems: ['sensoryPathwaysAndReceptors'],
        diagramId: 'somatosensoryPathwaySpineCortexAscendingTractsDiagram',
        experimentId: 'two_point_discrimination_tactile_receptor_density_skin_experiment',
        contentKey: 'components'
    },
    {
        id: 'motorPathways',
        label: 'Motor Pathways',
        sectionNumber: 8,
        subTopic: 'nervousSystem',
        specificItems: ['motorPathways'],
        diagramId: 'corticospinalTractUpperLowerMotorNeuronDiagram',
        experimentId: 'emg_electromyography_voluntary_movement_recording_experiment',
        contentKey: 'components'
    },
    {
        id: 'higherBrainFunctions',
        label: 'Higher Brain Functions',
        sectionNumber: 9,
        subTopic: 'nervousSystem',
        specificItems: ['higherBrainFunctions'],
        diagramId: 'cerebrallLobesFunctionalMapDiagram',
        experimentId: 'stroop_task_cognitive_interference_and_reaction_time_experiment',
        contentKey: 'components'
    },
    {
        id: 'developmentAndNeuroplasticity',
        label: 'Development and Neuroplasticity',
        sectionNumber: 10,
        subTopic: 'nervousSystem',
        specificItems: ['developmentAndNeuroplasticity'],
        diagramId: 'synapticPruningAndLtpNeuroplasticityDiagram',
        experimentId: 'non_dominant_hand_mirror_tracing_neuroplasticity_learning_experiment',
        contentKey: 'components'
    },
    {
        id: 'clinicalConditions',
        label: 'Clinical Conditions',
        sectionNumber: 11,
        subTopic: 'nervousSystem',
        specificItems: ['clinicalConditions'],
        diagramId: 'multipleSclerosisVsParkinsonsDemyelinationPathologyDiagram',
        experimentId: 'case_study_neurological_deficit_localisation_diagnostic_exercise',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'skeletalSystem',
        specificItems: ['foundations'],
        diagramId: 'fiveBoneTypesMorphologyComparisonDiagram',
        experimentId: 'bone_type_classification_using_real_or_model_specimens_activity',
        contentKey: 'components'
    },
    {
        id: 'boneTissueCompositionAndHistology',
        label: 'Bone Tissue Composition and Histology',
        sectionNumber: 2,
        subTopic: 'skeletalSystem',
        specificItems: ['boneTissueCompositionAndHistology'],
        diagramId: 'osteonHaversianSystemCrossSection Diagram',
        experimentId: 'decalcified_vs_deproteinised_bone_flexibility_brittleness_experiment',
        contentKey: 'components'
    },
    {
        id: 'boneDevelopment',
        label: 'Bone Development',
        sectionNumber: 3,
        subTopic: 'skeletalSystem',
        specificItems: ['boneDevelopment'],
        diagramId: 'endochondralVsIntramembranousOssificationStepsDiagram',
        experimentId: 'chicken_bone_growth_plate_histology_slide_examination_experiment',
        contentKey: 'components'
    },
    {
        id: 'boneRemodellingAndCalciumHomeostasis',
        label: 'Bone Remodelling and Calcium Homeostasis',
        sectionNumber: 4,
        subTopic: 'skeletalSystem',
        specificItems: ['boneRemodellingAndCalciumHomeostasis'],
        diagramId: 'pthCalcitoninVitaminDCalciumFeedbackLoopDiagram',
        experimentId: 'dietary_calcium_serum_levels_and_pth_response_case_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'skeletalDivisions',
        label: 'Skeletal Divisions',
        sectionNumber: 5,
        subTopic: 'skeletalSystem',
        specificItems: ['skeletalDivisions'],
        diagramId: 'axialVsAppendicular206BonesAnnotatedSkeletonDiagram',
        experimentId: 'full_skeleton_assembly_and_axial_appendicular_sorting_activity',
        contentKey: 'components'
    },
    {
        id: 'joints',
        label: 'Joints',
        sectionNumber: 6,
        subTopic: 'skeletalSystem',
        specificItems: ['joints'],
        diagramId: 'synovialJointStructureAndSixTypesDiagram',
        experimentId: 'joint_range_of_motion_goniometer_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'fracturesAndRepair',
        label: 'Fractures and Repair',
        sectionNumber: 7,
        subTopic: 'skeletalSystem',
        specificItems: ['fracturesAndRepair'],
        diagramId: 'fractureFourStageHealingTimelineDiagram',
        experimentId: 'fracture_type_identification_using_x_ray_image_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'importantBoneLandmarks',
        label: 'Important Bone Landmarks',
        sectionNumber: 8,
        subTopic: 'skeletalSystem',
        specificItems: ['importantBoneLandmarks'],
        diagramId: 'boneSurfaceMarkingsProcessesFossaeForaminaDiagram',
        experimentId: 'palpation_map_of_surface_bone_landmarks_on_living_body_experiment',
        contentKey: 'components'
    },
    {
        id: 'biomechanicsOfTheSkeleton',
        label: 'Biomechanics of the Skeleton',
        sectionNumber: 9,
        subTopic: 'skeletalSystem',
        specificItems: ['biomechanicsOfTheSkeleton'],
        diagramId: 'firstSecondThirdClassLeverSystemsInBodyDiagram',
        experimentId: 'elbow_third_class_lever_mechanical_advantage_weight_experiment',
        contentKey: 'components'
    },
    {
        id: 'clinicalConditions',
        label: 'Clinical Conditions',
        sectionNumber: 10,
        subTopic: 'skeletalSystem',
        specificItems: ['clinicalConditions'],
        diagramId: 'osteoporosisVsOsteoarthritisVsRheumatoidBonePathologyDiagram',
        experimentId: 'dexa_scan_bone_mineral_density_t_score_interpretation_case_study_experiment',
        contentKey: 'components'
    },
    {
        id: 'boneAgeing',
        label: 'Bone Ageing',
        sectionNumber: 11,
        subTopic: 'skeletalSystem',
        specificItems: ['boneAgeing'],
        diagramId: 'peakBoneMassLifespanDeclineCurveByAgeDiagram',
        experimentId: 'dietary_calcium_exercise_and_bone_density_longitudinal_data_analysis_experiment',
        contentKey: 'components'
    },

   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'reproductiveSystem',
        specificItems: ['foundations'],
        diagramId: 'meiosisVsMitosisChromosomeDivisionComparisonDiagram',
        experimentId: 'meiosis_chromosome_bead_model_crossing_over_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'maleReproductiveAnatomy',
        label: 'Male Reproductive Anatomy',
        sectionNumber: 2,
        subTopic: 'reproductiveSystem',
        specificItems: ['maleReproductiveAnatomy'],
        diagramId: 'maleReproductiveTractLabelledPathwayDiagram',
        experimentId: 'accessory_gland_secretion_composition_and_semen_analysis_case_study_experiment',
        contentKey: 'components'
    },
    {
        id: 'femaleReproductiveAnatomy',
        label: 'Female Reproductive Anatomy',
        sectionNumber: 3,
        subTopic: 'reproductiveSystem',
        specificItems: ['femaleReproductiveAnatomy'],
        diagramId: 'femaleReproductiveTractSagittalSectionLabelledDiagram',
        experimentId: 'uterine_wall_layer_histology_slide_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'gametogenesis',
        label: 'Gametogenesis',
        sectionNumber: 4,
        subTopic: 'reproductiveSystem',
        specificItems: ['gametogenesis'],
        diagramId: 'spermatogenesisVsOogenesisParallelTimelineDiagram',
        experimentId: 'sperm_morphology_and_motility_microscopy_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'hormonalRegulation',
        label: 'Hormonal Regulation',
        sectionNumber: 5,
        subTopic: 'reproductiveSystem',
        specificItems: ['hormonalRegulation'],
        diagramId: 'hpgAxisFeedbackLoopMaleAndFemaleDiagram',
        experimentId: 'hormone_level_blood_test_interpretation_across_menstrual_cycle_experiment',
        contentKey: 'components'
    },
    {
        id: 'menstrualAndOvarianCycles',
        label: 'Menstrual and Ovarian Cycles',
        sectionNumber: 6,
        subTopic: 'reproductiveSystem',
        specificItems: ['menstrualAndOvarianCycles'],
        diagramId: 'ovarianAndEndometrialCycleHormoneSynchronisationDiagram',
        experimentId: 'basal_body_temperature_ovulation_tracking_28_day_cycle_experiment',
        contentKey: 'components'
    },
    {
        id: 'fertilisationAndImplantation',
        label: 'Fertilisation and Implantation',
        sectionNumber: 7,
        subTopic: 'reproductiveSystem',
        specificItems: ['fertilisationAndImplantation'],
        diagramId: 'acrosomeReactionZonaPellucidaPenetrationCorticalReactionDiagram',
        experimentId: 'sea_urchin_fertilisation_polyspermy_block_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'pregnancyAndEmbryonicDevelopment',
        label: 'Pregnancy and Embryonic Development',
        sectionNumber: 8,
        subTopic: 'reproductiveSystem',
        specificItems: ['pregnancyAndEmbryonicDevelopment'],
        diagramId: 'trimesterDevelopmentMilestonesAndPlacentaStructureDiagram',
        experimentId: 'pregnancy_hormone_hcg_urine_immunoassay_test_strip_experiment',
        contentKey: 'components'
    },
    {
        id: 'parturitionAndLactation',
        label: 'Parturition and Lactation',
        sectionNumber: 9,
        subTopic: 'reproductiveSystem',
        specificItems: ['parturitionAndLactation'],
        diagramId: 'oxytocinPositiveFeedbackLabourStagesAndMilkEjectionDiagram',
        experimentId: 'oxytocin_positive_feedback_model_simulation_labour_progression_experiment',
        contentKey: 'components'
    },
    {
        id: 'pubertyAndMenopause',
        label: 'Puberty and Menopause',
        sectionNumber: 10,
        subTopic: 'reproductiveSystem',
        specificItems: ['pubertyAndMenopause'],
        diagramId: 'pubertalSequenceAndMenopauseHormoneChangesTimelineDiagram',
        experimentId: 'fsh_lh_oestrogen_level_comparison_premenopausal_vs_postmenopausal_data_experiment',
        contentKey: 'components'
    },
    {
        id: 'clinicalConditions',
        label: 'Clinical Conditions',
        sectionNumber: 11,
        subTopic: 'reproductiveSystem',
        specificItems: ['clinicalConditions'],
        diagramId: 'pcosEndometriosisInfertilityPathophysiologyDiagram',
        experimentId: 'sti_case_study_diagnosis_and_treatment_pathway_analysis_experiment',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'lymphaticSystem',
        specificItems: ['foundations'],
        diagramId: 'lymphaticSystemOverviewVesselsNodesOrgansDiagram',
        experimentId: 'dye_injection_lymphatic_drainage_pathway_dissection_experiment',
        contentKey: 'components'
    },
    {
        id: 'lymphaticVesselsAndCirculation',
        label: 'Lymphatic Vessels and Circulation',
        sectionNumber: 2,
        subTopic: 'lymphaticSystem',
        specificItems: ['lymphaticVesselsAndCirculation'],
        diagramId: 'lymphCapillaryFlap_valveThoracicDuctDrainageDiagram',
        experimentId: 'starling_forces_filtration_reabsorption_capillary_model_experiment',
        contentKey: 'components'
    },
    {
        id: 'lymphoidTissuesAndOrgans',
        label: 'Lymphoid Tissues and Organs',
        sectionNumber: 3,
        subTopic: 'lymphaticSystem',
        specificItems: ['lymphoidTissuesAndOrgans'],
        diagramId: 'primaryVsSecondaryLymphoidOrgansLocationDiagram',
        experimentId: 'lymph_node_spleen_histology_germinal_centre_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'lymphocytesAndImmuneCells',
        label: 'Lymphocytes and Immune Cells',
        sectionNumber: 4,
        subTopic: 'lymphaticSystem',
        specificItems: ['lymphocytesAndImmuneCells'],
        diagramId: 'bCellTCellNkCellDifferentiationAndFunctionDiagram',
        experimentId: 'blood_smear_differential_white_cell_count_microscopy_experiment',
        contentKey: 'components'
    },
    {
        id: 'innateImmunity',
        label: 'Innate Immunity',
        sectionNumber: 5,
        subTopic: 'lymphaticSystem',
        specificItems: ['innateImmunity'],
        diagramId: 'innateImmunityBarriersInflammationComplementCascadeDiagram',
        experimentId: 'skin_wound_inflammatory_response_observation_redness_swelling_experiment',
        contentKey: 'components'
    },
    {
        id: 'adaptiveImmunity',
        label: 'Adaptive Immunity',
        sectionNumber: 6,
        subTopic: 'lymphaticSystem',
        specificItems: ['adaptiveImmunity'],
        diagramId: 'primaryVsSecondaryImmuneResponseAntibodyTitreCurveDiagram',
        experimentId: 'elisa_antibody_detection_antigen_binding_well_plate_experiment',
        contentKey: 'components'
    },
    {
        id: 'vaccinationAndImmunisation',
        label: 'Vaccination and Immunisation',
        sectionNumber: 7,
        subTopic: 'lymphaticSystem',
        specificItems: ['vaccinationAndImmunisation'],
        diagramId: 'vaccineTypesAndMemoryCellSecondaryResponseDiagram',
        experimentId: 'herd_immunity_threshold_simulation_population_infection_spread_experiment',
        contentKey: 'components'
    },
    {
        id: 'immuneDisorders',
        label: 'Immune Disorders',
        sectionNumber: 8,
        subTopic: 'lymphaticSystem',
        specificItems: ['immuneDisorders'],
        diagramId: 'gellCoombsFourHypersensitivityTypesComparisonDiagram',
        experimentId: 'type_1_allergy_skin_prick_test_wheal_and_flare_reaction_experiment',
        contentKey: 'components'
    },
    {
        id: 'oedemaAndFluidBalance',
        label: 'Oedema and Fluid Balance',
        sectionNumber: 9,
        subTopic: 'lymphaticSystem',
        specificItems: ['oedemaAndFluidBalance'],
        diagramId: 'starlingForcesFiltrationReabsorptionOedemaFormationDiagram',
        experimentId: 'osmosis_dialysis_tubing_oedema_hydrostatic_osmotic_pressure_experiment',
        contentKey: 'components'
    },
    {
        id: 'transplantationAndTolerance',
        label: 'Transplantation and Tolerance',
        sectionNumber: 10,
        subTopic: 'lymphaticSystem',
        specificItems: ['transplantationAndTolerance'],
        diagramId: 'mhcHlaMatchingTransplantRejectionTypesDiagram',
        experimentId: 'hla_tissue_typing_compatibility_matching_case_study_experiment',
        contentKey: 'components'
    },
    {
        id: 'lymphomaAndHaematologicalMalignancies',
        label: 'Lymphoma and Haematological Malignancies',
        sectionNumber: 11,
        subTopic: 'lymphaticSystem',
        specificItems: ['lymphomaAndHaematologicalMalignancies'],
        diagramId: 'hodgkinVsNonHodgkinReedSternbergCellHistologyDiagram',
        experimentId: 'lymphoma_staging_ct_scan_lymphadenopathy_case_study_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'endocrineSystem',
        specificItems: ['foundations'],
        diagramId: 'hormoneChemistryClassificationReceptorMechanismDiagram',
        experimentId: 'hormone_vs_neurotransmitter_response_speed_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'hypothalamusAndPituitaryGland',
        label: 'Hypothalamus and Pituitary Gland',
        sectionNumber: 2,
        subTopic: 'endocrineSystem',
        specificItems: ['hypothalamusAndPituitaryGland'],
        diagramId: 'hypothalamusPortalSystemAnteriorPosteriorPituitaryHormonesDiagram',
        experimentId: 'hpa_axis_negative_feedback_dexamethasone_suppression_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'thyroidGland',
        label: 'Thyroid Gland',
        sectionNumber: 3,
        subTopic: 'endocrineSystem',
        specificItems: ['thyroidGland'],
        diagramId: 'thyroidHormoneSynthesisIodineOrganificationStepsDiagram',
        experimentId: 'thyroid_function_test_tsh_t4_interpretation_hypothyroid_hyperthyroid_case_experiment',
        contentKey: 'components'
    },
    {
        id: 'parathyroidGlands',
        label: 'Parathyroid Glands',
        sectionNumber: 4,
        subTopic: 'endocrineSystem',
        specificItems: ['parathyroidGlands'],
        diagramId: 'pthCalciumBonesKidneysIntestineFeedbackDiagram',
        experimentId: 'serum_calcium_phosphate_pth_levels_hyper_hypoparathyroidism_diagnosis_experiment',
        contentKey: 'components'
    },
    {
        id: 'adrenalGlands',
        label: 'Adrenal Glands',
        sectionNumber: 5,
        subTopic: 'endocrineSystem',
        specificItems: ['adrenalGlands'],
        diagramId: 'adrenalCortexThreeZonesAndMedullaHormonesAnnotatedDiagram',
        experimentId: 'cortisol_diurnal_rhythm_salivary_sampling_stress_response_experiment',
        contentKey: 'components'
    },
    {
        id: 'pancreaticEndocrineFunction',
        label: 'Pancreatic Endocrine Function',
        sectionNumber: 6,
        subTopic: 'endocrineSystem',
        specificItems: ['pancreaticEndocrineFunction'],
        diagramId: 'isletsOfLangerhansCellTypesInsulinGlucagonFeedbackDiagram',
        experimentId: 'glucose_tolerance_test_blood_glucose_insulin_response_curve_experiment',
        contentKey: 'components'
    },
    {
        id: 'pinealGlandAndMelatonin',
        label: 'Pineal Gland and Melatonin',
        sectionNumber: 7,
        subTopic: 'endocrineSystem',
        specificItems: ['pinealGlandAndMelatonin'],
        diagramId: 'melatoninCircadianRhythmLightDarkCycleScnDiagram',
        experimentId: 'light_exposure_melatonin_suppression_sleep_latency_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'gonadsAsEndocrineOrgans',
        label: 'Gonads as Endocrine Organs',
        sectionNumber: 8,
        subTopic: 'endocrineSystem',
        specificItems: ['gonadsAsEndocrineOrgans'],
        diagramId: 'testosteroneOestrogenSynthesisAndTargetEffectsDiagram',
        experimentId: 'salivary_testosterone_exercise_response_before_after_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'otherEndocrineTissues',
        label: 'Other Endocrine Tissues',
        sectionNumber: 9,
        subTopic: 'endocrineSystem',
        specificItems: ['otherEndocrineTissues'],
        diagramId: 'heartKidneyAdiposeGiEndocrineFunctionsSummaryDiagram',
        experimentId: 'bnp_heart_failure_marker_and_epo_anaemia_case_study_data_interpretation_experiment',
        contentKey: 'components'
    },
    {
        id: 'stressResponse',
        label: 'Stress Response',
        sectionNumber: 10,
        subTopic: 'endocrineSystem',
        specificItems: ['stressResponse'],
        diagramId: 'sympathoadrenalVsHpaAxisAcuteChronicStressTimelineDiagram',
        experimentId: 'cold_pressor_test_heart_rate_cortisol_acute_stress_response_experiment',
        contentKey: 'components'
    },
    {
        id: 'endocrineDisruptionAndClinicalAssessment',
        label: 'Endocrine Disruption and Clinical Assessment',
        sectionNumber: 11,
        subTopic: 'endocrineSystem',
        specificItems: ['endocrineDisruptionAndClinicalAssessment'],
        diagramId: 'endocrineDisruptorChemicalInterferenceHormoneAxisDiagram',
        experimentId: 'bpa_xenoestrogen_endocrine_disruption_aquatic_organism_case_study_experiment',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'muscularSystem',
        specificItems: ['foundations'],
        diagramId: 'threeMusclTypesMorphologyControlComparisonDiagram',
        experimentId: 'voluntary_vs_involuntary_muscle_control_comparison_activity',
        contentKey: 'components'
    },
    {
        id: 'skeletalMuscleMicrostructure',
        label: 'Skeletal Muscle Microstructure',
        sectionNumber: 2,
        subTopic: 'muscularSystem',
        specificItems: ['skeletalMuscleMicrostructure'],
        diagramId: 'sarcomereZDiscABandIBandHZoneLabelledDiagram',
        experimentId: 'skeletal_muscle_histology_slide_sarcomere_band_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'neuromuscularJunction',
        label: 'Neuromuscular Junction',
        sectionNumber: 3,
        subTopic: 'muscularSystem',
        specificItems: ['neuromuscularJunction'],
        diagramId: 'nmjAchVesicleReleaseMotorEndPlateStepsDiagram',
        experimentId: 'curare_neostigmine_nmj_blockade_frog_gastrocnemius_muscle_experiment',
        contentKey: 'components'
    },
    {
        id: 'excitationContractionCoupling',
        label: 'Excitation-Contraction Coupling',
        sectionNumber: 4,
        subTopic: 'muscularSystem',
        specificItems: ['excitationContractionCoupling'],
        diagramId: 'tTubuleDhprRyr1SrCalciumReleaseCouplingDiagram',
        experimentId: 'calcium_ionophore_induced_muscle_contraction_skinned_fibre_experiment',
        contentKey: 'components'
    },
    {
        id: 'crossBridgeCycle',
        label: 'Cross-Bridge Cycle',
        sectionNumber: 5,
        subTopic: 'muscularSystem',
        specificItems: ['crossBridgeCycle'],
        diagramId: 'myosinActinATPaseCrossBridgeFiveStepCycleDiagram',
        experimentId: 'rigor_mortis_atp_depletion_cross_bridge_locking_time_course_experiment',
        contentKey: 'components'
    },
    {
        id: 'motorUnitsAndGradationOfForce',
        label: 'Motor Units and Gradation of Force',
        sectionNumber: 6,
        subTopic: 'muscularSystem',
        specificItems: ['motorUnitsAndGradationOfForce'],
        diagramId: 'motorUnitRecruitmentSizePrincipleFrequencyCodingDiagram',
        experimentId: 'emg_graded_contraction_recruitment_twitch_summation_tetanus_experiment',
        contentKey: 'components'
    },
    {
        id: 'muscleFibreTypes',
        label: 'Muscle Fibre Types',
        sectionNumber: 7,
        subTopic: 'muscularSystem',
        specificItems: ['muscleFibreTypes'],
        diagramId: 'typeITypeIIaTypeIIxFibrePropertiesComparisonDiagram',
        experimentId: 'atpase_histochemistry_slow_fast_fibre_type_identification_biopsy_experiment',
        contentKey: 'components'
    },
    {
        id: 'muscleMetabolismAndEnergySystems',
        label: 'Muscle Metabolism and Energy Systems',
        sectionNumber: 8,
        subTopic: 'muscularSystem',
        specificItems: ['muscleMetabolismAndEnergySystems'],
        diagramId: 'threeEnergySystemsATPPcGlycolysisOxidativePhosphorilationDiagram',
        experimentId: 'wingate_test_anaerobic_power_sprint_fatigue_energy_system_experiment',
        contentKey: 'components'
    },
    {
        id: 'muscleContractionMechanics',
        label: 'Muscle Contraction Mechanics',
        sectionNumber: 9,
        subTopic: 'muscularSystem',
        specificItems: ['muscleContractionMechanics'],
        diagramId: 'concentric_eccentricIsometricForceVelocityRelationshipDiagram',
        experimentId: 'force_length_relationship_isolated_muscle_stimulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'muscleFatigueRecoveryAndAdaptation',
        label: 'Muscle Fatigue, Recovery and Adaptation',
        sectionNumber: 10,
        subTopic: 'muscularSystem',
        specificItems: ['muscleFatigueRecoveryAndAdaptation'],
        diagramId: 'centralVsPeripheralFatigueDomsAdaptationTimelineDiagram',
        experimentId: 'handgrip_dynamometer_fatigue_recovery_repeated_maximal_contraction_experiment',
        contentKey: 'components'
    },
    {
        id: 'smoothAndCardiacMuscle',
        label: 'Smooth and Cardiac Muscle',
        sectionNumber: 11,
        subTopic: 'muscularSystem',
        specificItems: ['smoothAndCardiacMuscle'],
        diagramId: 'cardiacActionPotentialPlateauPhaseAndStarlingLawDiagram',
        experimentId: 'frog_heart_starling_law_filling_pressure_stroke_volume_experiment',
        contentKey: 'components'
    },
    {
        id: 'clinicalConditions',
        label: 'Clinical Conditions',
        sectionNumber: 12,
        subTopic: 'muscularSystem',
        specificItems: ['clinicalConditions'],
        diagramId: 'duchenneMusularDystrophyDystrophinDeficitPathologyDiagram',
        experimentId: 'creatine_kinase_serum_level_rhabdomyolysis_case_diagnosis_experiment',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'circulatorySystem',
        specificItems: ['foundations'],
        diagramId: 'doubleCirculationPathwayDiagram',
        experimentId: 'mapping_pulmonary_vs_systemic_circulation_activity',
        contentKey: 'components'
    },
    {
        id: 'heartAnatomy',
        label: 'Heart Anatomy',
        sectionNumber: 2,
        subTopic: 'circulatorySystem',
        specificItems: ['heartAnatomy'],
        diagramId: 'heartChambersValvesLabelledDiagram',
        experimentId: 'sheep_heart_dissection_investigation',
        contentKey: 'components'
    },
    {
        id: 'cardiacPhysiology',
        label: 'Cardiac Physiology',
        sectionNumber: 3,
        subTopic: 'circulatorySystem',
        specificItems: ['cardiacPhysiology'],
        diagramId: 'cardiacCycleAndECGWaveformDiagram',
        experimentId: 'resting_and_exercise_heart_rate_ECG_investigation',
        contentKey: 'components'
    },
    {
        id: 'bloodVessels',
        label: 'Blood Vessels',
        sectionNumber: 4,
        subTopic: 'circulatorySystem',
        specificItems: ['bloodVessels'],
        diagramId: 'arteryVeinCapillaryWallStructureDiagram',
        experimentId: 'comparing_artery_vein_capillary_histology_slides',
        contentKey: 'components'
    },
    {
        id: 'bloodComposition',
        label: 'Blood Composition',
        sectionNumber: 5,
        subTopic: 'circulatorySystem',
        specificItems: ['bloodComposition'],
        diagramId: 'bloodComponentsAndHaematocritDiagram',
        experimentId: 'blood_smear_microscopy_and_cell_identification',
        contentKey: 'components'
    },
    {
        id: 'haemostasisAndCoagulation',
        label: 'Haemostasis and Coagulation',
        sectionNumber: 6,
        subTopic: 'circulatorySystem',
        specificItems: ['haemostasisAndCoagulation'],
        diagramId: 'coagulationCascadeFlowchart',
        experimentId: 'observing_clot_formation_and_bleeding_time_investigation',
        contentKey: 'components'
    },
    {
        id: 'bloodPressureAndFlow',
        label: 'Blood Pressure and Flow',
        sectionNumber: 7,
        subTopic: 'circulatorySystem',
        specificItems: ['bloodPressureAndFlow'],
        diagramId: 'bloodPressureGradientAcrossVascularSystemGraph',
        experimentId: 'sphygmomanometer_blood_pressure_measurement_activity',
        contentKey: 'components'
    },
    {
        id: 'capillaryExchange',
        label: 'Capillary Exchange',
        sectionNumber: 8,
        subTopic: 'circulatorySystem',
        specificItems: ['capillaryExchange'],
        diagramId: 'starlingForcesFiltrationReabsorptionDiagram',
        experimentId: 'dialysis_tubing_osmosis_model_of_capillary_exchange',
        contentKey: 'components'
    },
    {
        id: 'cardiovascularRegulation',
        label: 'Cardiovascular Regulation',
        sectionNumber: 9,
        subTopic: 'circulatorySystem',
        specificItems: ['cardiovascularRegulation'],
        diagramId: 'baroreceptorReflexNeuralControlDiagram',
        experimentId: 'exercise_and_recovery_heart_rate_blood_pressure_study',
        contentKey: 'components'
    },
    {
        id: 'foetal',
        label: 'Foetal Circulation',
        sectionNumber: 10,
        subTopic: 'circulatorySystem',
        specificItems: ['foetal'],
        diagramId: 'foetalCirculationShuntsDiagram',
        experimentId: 'comparing_foetal_and_adult_circulation_model_activity',
        contentKey: 'components'
    },
    {
        id: 'disordersAndDisease',
        label: 'Disorders and Disease',
        sectionNumber: 11,
        subTopic: 'circulatorySystem',
        specificItems: ['disordersAndDisease'],
        diagramId: 'atherosclerosisProgressionCrossSection',
        experimentId: 'cardiovascular_disease_risk_factor_case_study_analysis',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'respiratorySystem',
        specificItems: ['foundations'],
        diagramId: 'conductingZoneVsRespiratoryZoneDiagram',
        experimentId: 'tracing_air_pathway_from_nose_to_alveolus_mapping_activity',
        contentKey: 'components'
    },
    {
        id: 'anatomyOfRespiratoryTract',
        label: 'Anatomy of the Respiratory Tract',
        sectionNumber: 2,
        subTopic: 'respiratorySystem',
        specificItems: ['anatomyOfRespiratoryTract'],
        diagramId: 'labelledRespiratoryTractAnatomyDiagram',
        experimentId: 'sheep_lung_inflation_dissection_investigation',
        contentKey: 'components'
    },
    {
        id: 'mechanicsOfBreathing',
        label: 'Mechanics of Breathing',
        sectionNumber: 3,
        subTopic: 'respiratorySystem',
        specificItems: ['mechanicsOfBreathing'],
        diagramId: 'diaphragmIntercostalPressureVolumeDiagram',
        experimentId: 'bell_jar_model_lung_ventilation_mechanics_experiment',
        contentKey: 'components'
    },
    {
        id: 'pulmonaryVolumes',
        label: 'Pulmonary Volumes and Capacities',
        sectionNumber: 4,
        subTopic: 'respiratorySystem',
        specificItems: ['pulmonaryVolumes'],
        diagramId: 'spirogramLungVolumesAndCapacitiesDiagram',
        experimentId: 'spirometry_tidal_and_vital_capacity_measurement',
        contentKey: 'components'
    },
    {
        id: 'gasExchange',
        label: 'Gas Exchange',
        sectionNumber: 5,
        subTopic: 'respiratorySystem',
        specificItems: ['gasExchange'],
        diagramId: 'partialPressureGradientsAlveoliToTissueDiagram',
        experimentId: 'limewater_CO2_detection_exhaled_vs_inhaled_air_experiment',
        contentKey: 'components'
    },
    {
        id: 'gasTransport',
        label: 'Gas Transport',
        sectionNumber: 6,
        subTopic: 'respiratorySystem',
        specificItems: ['gasTransport'],
        diagramId: 'oxyhaemoglobinDissociationCurveBohrEffectDiagram',
        experimentId: 'effect_of_exercise_on_blood_oxygen_saturation_pulse_oximetry',
        contentKey: 'components'
    },
    {
        id: 'neuralControlOfBreathing',
        label: 'Neural Control of Breathing',
        sectionNumber: 7,
        subTopic: 'respiratorySystem',
        specificItems: ['neuralControlOfBreathing'],
        diagramId: 'medullaryRespiratoryControlCentreChemoreceptorDiagram',
        experimentId: 'breath_holding_hyperventilation_CO2_effect_investigation',
        contentKey: 'components'
    },
    {
        id: 'acidBaseBalance',
        label: 'Acid-Base Balance',
        sectionNumber: 8,
        subTopic: 'respiratorySystem',
        specificItems: ['acidBaseBalance'],
        diagramId: 'respiratoryAcidosisAlkalosisABGDiagram',
        experimentId: 'pH_change_during_hyperventilation_breathe_into_bag_experiment',
        contentKey: 'components'
    },
    {
        id: 'defenceMechanisms',
        label: 'Defence Mechanisms',
        sectionNumber: 9,
        subTopic: 'respiratorySystem',
        specificItems: ['defenceMechanisms'],
        diagramId: 'mucociliaryClearanceEscalatorDiagram',
        experimentId: 'modelling_mucociliary_escalator_with_cilia_and_mucus_strips',
        contentKey: 'components'
    },
    {
        id: 'specialTopics',
        label: 'Special Topics: High Altitude and Diving',
        sectionNumber: 10,
        subTopic: 'respiratorySystem',
        specificItems: ['specialTopics'],
        diagramId: 'altitudeVsAtmosphericPO2AcclimatisationGraph',
        experimentId: 'simulating_high_altitude_hypoxia_response_case_study',
        contentKey: 'components'
    },
    {
        id: 'respiratoryDisorders',
        label: 'Respiratory Disorders',
        sectionNumber: 11,
        subTopic: 'respiratorySystem',
        specificItems: ['respiratoryDisorders'],
        diagramId: 'obstructiveVsRestrictiveSpirometryComparisonChart',
        experimentId: 'peak_flow_meter_asthma_vs_normal_comparison_investigation',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'digestiveSystem',
        specificItems: ['foundations'],
        diagramId: 'alimentaryCanalOverviewLabelledDiagram',
        experimentId: 'food_journey_sequencing_and_gi_wall_layers_model_activity',
        contentKey: 'components'
    },
    {
        id: 'mouthAndSalivaryGlands',
        label: 'Mouth and Salivary Glands',
        sectionNumber: 2,
        subTopic: 'digestiveSystem',
        specificItems: ['mouthAndSalivaryGlands'],
        diagramId: 'salivaryGlandsAndDentitionLabelledDiagram',
        experimentId: 'salivary_amylase_starch_digestion_iodine_test_experiment',
        contentKey: 'components'
    },
    {
        id: 'pharynxAndOesophagus',
        label: 'Pharynx and Oesophagus',
        sectionNumber: 3,
        subTopic: 'digestiveSystem',
        specificItems: ['pharynxAndOesophagus'],
        diagramId: 'swallowingPhasesAndOesophagealPeristalsisdiagram',
        experimentId: 'modelling_peristalsis_with_tubing_and_ball_bearing_activity',
        contentKey: 'components'
    },
    {
        id: 'stomach',
        label: 'Stomach',
        sectionNumber: 4,
        subTopic: 'digestiveSystem',
        specificItems: ['stomach'],
        diagramId: 'stomachRegionsGastricGlandCellTypesDiagram',
        experimentId: 'pepsin_activity_at_different_pH_levels_experiment',
        contentKey: 'components'
    },
    {
        id: 'smallIntestine',
        label: 'Small Intestine',
        sectionNumber: 5,
        subTopic: 'digestiveSystem',
        specificItems: ['smallIntestine'],
        diagramId: 'villiMicrovilliSurfaceAreaAmplificationDiagram',
        experimentId: 'dialysis_tubing_model_of_nutrient_absorption_investigation',
        contentKey: 'components'
    },
    {
        id: 'liverAndBile',
        label: 'Liver and Bile',
        sectionNumber: 6,
        subTopic: 'digestiveSystem',
        specificItems: ['liverAndBile'],
        diagramId: 'liverLobulesPortalTriadBileFlowDiagram',
        experimentId: 'bile_emulsification_of_fat_oil_and_water_experiment',
        contentKey: 'components'
    },
    {
        id: 'pancreas',
        label: 'Pancreas',
        sectionNumber: 7,
        subTopic: 'digestiveSystem',
        specificItems: ['pancreas'],
        diagramId: 'pancreaticAcinarCellsIsletsDualFunctionDiagram',
        experimentId: 'pancreatic_enzyme_lipase_activity_pH_investigation',
        contentKey: 'components'
    },
    {
        id: 'largeIntestine',
        label: 'Large Intestine',
        sectionNumber: 8,
        subTopic: 'digestiveSystem',
        specificItems: ['largeIntestine'],
        diagramId: 'largeIntestineRegionsHaustraWaterAbsorptionDiagram',
        experimentId: 'water_absorption_in_large_intestine_model_osmosis_bag_activity',
        contentKey: 'components'
    },
    {
        id: 'digestiveHormones',
        label: 'Digestive Hormones',
        sectionNumber: 9,
        subTopic: 'digestiveSystem',
        specificItems: ['digestiveHormones'],
        diagramId: 'gastrinSecretinCCKHormoneActionSummaryTable',
        experimentId: 'digestive_hormone_feedback_loop_role_play_simulation',
        contentKey: 'components'
    },
    {
        id: 'nutritionalOverview',
        label: 'Nutritional Overview',
        sectionNumber: 10,
        subTopic: 'digestiveSystem',
        specificItems: ['nutritionalOverview'],
        diagramId: 'macronutrientDigestionAbsorptionSummaryDiagram',
        experimentId: 'food_testing_for_starch_protein_fat_glucose_investigation',
        contentKey: 'components'
    },
    {
        id: 'digestiveDisorders',
        label: 'Digestive Disorders',
        sectionNumber: 11,
        subTopic: 'digestiveSystem',
        specificItems: ['digestiveDisorders'],
        diagramId: 'pepticUlcerVsIBDPathologyComparisonDiagram',
        experimentId: 'gi_disorder_case_study_diagnosis_and_treatment_analysis',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'excretorySystem',
        specificItems: ['foundations'],
        diagramId: 'excretoryOrgansAndWasteProductsOverviewDiagram',
        experimentId: 'identifying_excretory_products_from_different_organs_activity',
        contentKey: 'components'
    },
    {
        id: 'anatomyOfUrinarySystem',
        label: 'Anatomy of the Urinary System',
        sectionNumber: 2,
        subTopic: 'excretorySystem',
        specificItems: ['anatomyOfUrinarySystem'],
        diagramId: 'kidneyExternalInternalStructureLabelledDiagram',
        experimentId: 'sheep_kidney_dissection_cortex_medulla_pelvis_identification',
        contentKey: 'components'
    },
    {
        id: 'nephronStructure',
        label: 'Nephron Structure',
        sectionNumber: 3,
        subTopic: 'excretorySystem',
        specificItems: ['nephronStructure'],
        diagramId: 'nephronComponentsLabelledFlowDiagram',
        experimentId: 'modelling_the_nephron_with_tubing_and_dialysis_membrane_activity',
        contentKey: 'components'
    },
    {
        id: 'nephronPhysiology',
        label: 'Nephron Physiology',
        sectionNumber: 4,
        subTopic: 'excretorySystem',
        specificItems: ['nephronPhysiology'],
        diagramId: 'filtrationReabsorptionSecretionAlongNephronDiagram',
        experimentId: 'dialysis_tubing_selective_reabsorption_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'urineConcentration',
        label: 'Urine Concentration',
        sectionNumber: 5,
        subTopic: 'excretorySystem',
        specificItems: ['urineConcentration'],
        diagramId: 'countercurrentMultiplierMedullaryGradientDiagram',
        experimentId: 'testing_urine_concentration_with_dehydration_and_hydration_comparison',
        contentKey: 'components'
    },
    {
        id: 'acidBaseRegulation',
        label: 'Acid-Base Regulation',
        sectionNumber: 6,
        subTopic: 'excretorySystem',
        specificItems: ['acidBaseRegulation'],
        diagramId: 'renalHPlus_HCO3_handlingAlongNephronDiagram',
        experimentId: 'urine_pH_testing_under_different_dietary_conditions_investigation',
        contentKey: 'components'
    },
    {
        id: 'otherRenalFunctions',
        label: 'Other Renal Functions',
        sectionNumber: 7,
        subTopic: 'excretorySystem',
        specificItems: ['otherRenalFunctions'],
        diagramId: 'kidneyEndocrineFunctionsEPOVitaminDRAASdiagram',
        experimentId: 'EPO_altitude_training_red_blood_cell_production_case_study',
        contentKey: 'components'
    },
    {
        id: 'renalClearance',
        label: 'Renal Clearance',
        sectionNumber: 8,
        subTopic: 'excretorySystem',
        specificItems: ['renalClearance'],
        diagramId: 'GFR_creatinine_clearance_calculation_diagram',
        experimentId: 'calculating_GFR_from_serum_and_urine_creatinine_data_activity',
        contentKey: 'components'
    },
    {
        id: 'electrolyteRegulation',
        label: 'Electrolyte Regulation',
        sectionNumber: 9,
        subTopic: 'excretorySystem',
        specificItems: ['electrolyteRegulation'],
        diagramId: 'sodiumPotassiumCalciumRenalHandlingSummaryDiagram',
        experimentId: 'dietary_sodium_intake_and_urine_output_recording_investigation',
        contentKey: 'components'
    },
    {
        id: 'juxtaglomerularApparatus',
        label: 'Juxtaglomerular Apparatus',
        sectionNumber: 10,
        subTopic: 'excretorySystem',
        specificItems: ['juxtaglomerularApparatus'],
        diagramId: 'juxtaglomerularApparatusGranularCellsMaculaDensaDiagram',
        experimentId: 'RAAS_cascade_hormonal_chain_role_play_simulation',
        contentKey: 'components'
    },
    {
        id: 'disorders',
        label: 'Disorders of the Excretory System',
        sectionNumber: 11,
        subTopic: 'excretorySystem',
        specificItems: ['disorders'],
        diagramId: 'CKD_staging_GFR_decline_graph',
        experimentId: 'renal_failure_case_study_diagnosis_and_dialysis_decision_analysis',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'immuneSystem',
        specificItems: ['foundations'],
        diagramId: 'innateVsAdaptiveImmunityComparisonDiagram',
        experimentId: 'self_vs_nonself_antigen_recognition_card_sorting_activity',
        contentKey: 'components'
    },
    {
        id: 'immuneOrgans',
        label: 'Organs and Tissues of the Immune System',
        sectionNumber: 2,
        subTopic: 'immuneSystem',
        specificItems: ['immuneOrgans'],
        diagramId: 'primarySecondaryLymphoidOrgansBodyMapDiagram',
        experimentId: 'lymph_node_histology_slide_germinal_centre_identification',
        contentKey: 'components'
    },
    {
        id: 'innateBounaries',
        label: 'Innate Immunity — First Line Barriers',
        sectionNumber: 3,
        subTopic: 'immuneSystem',
        specificItems: ['innateBounaries'],
        diagramId: 'physicalAndChemicalBarriersOfInnateImmunityDiagram',
        experimentId: 'lysozyme_antibacterial_activity_on_agar_plates_experiment',
        contentKey: 'components'
    },
    {
        id: 'innateImmunity',
        label: 'Innate Immunity — Cellular Components',
        sectionNumber: 4,
        subTopic: 'immuneSystem',
        specificItems: ['innateImmunity'],
        diagramId: 'phagocytosisComplementInflammationCascadeDiagram',
        experimentId: 'neutrophil_phagocytosis_microscopy_and_oxidative_burst_demonstration',
        contentKey: 'components'
    },
    {
        id: 'humoralImmunity',
        label: 'Humoral Immunity',
        sectionNumber: 5,
        subTopic: 'immuneSystem',
        specificItems: ['humoralImmunity'],
        diagramId: 'antibodyStructureAndFiveClassesDiagram',
        experimentId: 'ELISA_antibody_antigen_detection_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'cellMediatedImmunity',
        label: 'Cell-Mediated Immunity',
        sectionNumber: 6,
        subTopic: 'immuneSystem',
        specificItems: ['cellMediatedImmunity'],
        diagramId: 'ThelperCTL_CD4_CD8_MHC_activationPathwayDiagram',
        experimentId: 'T_cell_activation_and_cytotoxic_killing_role_play_simulation',
        contentKey: 'components'
    },
    {
        id: 'antigenPresentation',
        label: 'Antigen Presentation',
        sectionNumber: 7,
        subTopic: 'immuneSystem',
        specificItems: ['antigenPresentation'],
        diagramId: 'endogenousExogenousAntigenPresentationMHC1_MHC2_Diagram',
        experimentId: 'MHC_class_I_vs_II_pathway_card_sequencing_activity',
        contentKey: 'components'
    },
    {
        id: 'immunologicalMemory',
        label: 'Immunological Memory',
        sectionNumber: 8,
        subTopic: 'immuneSystem',
        specificItems: ['immunologicalMemory'],
        diagramId: 'primaryVsSecondaryImmuneResponseAntibodyTitreDiagram',
        experimentId: 'modelling_vaccination_and_herd_immunity_population_simulation',
        contentKey: 'components'
    },
    {
        id: 'hypersensitivity',
        label: 'Hypersensitivity Reactions',
        sectionNumber: 9,
        subTopic: 'immuneSystem',
        specificItems: ['hypersensitivity'],
        diagramId: 'gellAndCoombsTypeI_II_III_IV_HypersensitivityDiagram',
        experimentId: 'allergy_skin_prick_test_type_I_hypersensitivity_case_study',
        contentKey: 'components'
    },
    {
        id: 'autoimmunityAndImmundeficiency',
        label: 'Autoimmunity and Immunodeficiency',
        sectionNumber: 10,
        subTopic: 'immuneSystem',
        specificItems: ['autoimmunityAndImmundeficiency'],
        diagramId: 'autoimmunityMechanismsAndExamplesDiseasesDiagram',
        experimentId: 'HIV_CD4_count_decline_and_AIDS_progression_data_analysis',
        contentKey: 'components'
    },
    {
        id: 'transplantationAndTumour',
        label: 'Transplantation and Tumour Immunology',
        sectionNumber: 11,
        subTopic: 'immuneSystem',
        specificItems: ['transplantationAndTumour'],
        diagramId: 'tumourImmuneEvasionCheckpointInhibitorDiagram',
        experimentId: 'checkpoint_inhibitor_immunotherapy_melanoma_case_study_analysis',
        contentKey: 'components'
    },

   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'integumentarySystem',
        specificItems: ['foundations'],
        diagramId: 'skinFunctionsSummaryAndColourDeterminantsDiagram',
        experimentId: 'skin_colour_melanin_UV_response_observation_activity',
        contentKey: 'components'
    },
    {
        id: 'epidermis',
        label: 'Epidermis',
        sectionNumber: 2,
        subTopic: 'integumentarySystem',
        specificItems: ['epidermis'],
        diagramId: 'fiveLayersOfEpidermisLabelledCrossSection',
        experimentId: 'skin_cell_turnover_rate_modelling_and_histology_slide_activity',
        contentKey: 'components'
    },
    {
        id: 'dermis',
        label: 'Dermis',
        sectionNumber: 3,
        subTopic: 'integumentarySystem',
        specificItems: ['dermis'],
        diagramId: 'papillaryReticularyDermisSensoryReceptorsDiagram',
        experimentId: 'two_point_discrimination_skin_receptor_density_mapping_experiment',
        contentKey: 'components'
    },
    {
        id: 'hypodermis',
        label: 'Hypodermis',
        sectionNumber: 4,
        subTopic: 'integumentarySystem',
        specificItems: ['hypodermis'],
        diagramId: 'hypodermisFatLayerInsulationPaddingDiagram',
        experimentId: 'blubber_glove_insulation_model_heat_loss_experiment',
        contentKey: 'components'
    },
    {
        id: 'hair',
        label: 'Hair',
        sectionNumber: 5,
        subTopic: 'integumentarySystem',
        specificItems: ['hair'],
        diagramId: 'hairFollicleShaftGrowthCycleAnagen_Catagen_TelogenDiagram',
        experimentId: 'microscopy_of_hair_shaft_medulla_cortex_cuticle_investigation',
        contentKey: 'components'
    },
    {
        id: 'nails',
        label: 'Nails',
        sectionNumber: 6,
        subTopic: 'integumentarySystem',
        specificItems: ['nails'],
        diagramId: 'nailStructurePlateMatrixBedLunulaDiagram',
        experimentId: 'nail_growth_rate_measurement_over_4_weeks_investigation',
        contentKey: 'components'
    },
    {
        id: 'skinGlands',
        label: 'Skin Glands',
        sectionNumber: 7,
        subTopic: 'integumentarySystem',
        specificItems: ['skinGlands'],
        diagramId: 'eccrineApocrineSeabaceousGlandsComparisonDiagram',
        experimentId: 'sweat_gland_activity_starch_iodine_palm_print_experiment',
        contentKey: 'components'
    },
    {
        id: 'thermoregulation',
        label: 'Thermoregulation',
        sectionNumber: 8,
        subTopic: 'integumentarySystem',
        specificItems: ['thermoregulation'],
        diagramId: 'skinVasodilationVasoconstrictionHeatLossMechanismsDiagram',
        experimentId: 'hand_temperature_cold_warm_water_vasomotor_response_experiment',
        contentKey: 'components'
    },
    {
        id: 'vitaminDSynthesis',
        label: 'Vitamin D Synthesis',
        sectionNumber: 9,
        subTopic: 'integumentarySystem',
        specificItems: ['vitaminDSynthesis'],
        diagramId: 'vitaminD3_synthesis_activation_pathway_skin_liver_kidney_diagram',
        experimentId: 'UV_exposure_vitamin_D_latitude_season_case_study_analysis',
        contentKey: 'components'
    },
    {
        id: 'woundHealing',
        label: 'Wound Healing',
        sectionNumber: 10,
        subTopic: 'integumentarySystem',
        specificItems: ['woundHealing'],
        diagramId: 'woundHealingFourPhasesDiagram',
        experimentId: 'time_lapse_wound_healing_observation_and_phase_identification_activity',
        contentKey: 'components'
    },
    {
        id: 'disorders',
        label: 'Disorders of the Integumentary System',
        sectionNumber: 11,
        subTopic: 'integumentarySystem',
        specificItems: ['disorders'],
        diagramId: 'ABCDE_melanoma_detection_skinCancerTypesDiagram',
        experimentId: 'skin_lesion_clinical_photo_diagnosis_and_classification_case_study',
        contentKey: 'components'
    },





    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'carbohydrates',
        specificItems: ['foundations'],
        diagramId: 'carbohydrateGeneralFormulaDiagram',
        experimentId: 'fehlings_reducing_sugar_test',
        contentKey: 'components'
    },
    {
        id: 'monosaccharides',
        label: 'Monosaccharides',
        sectionNumber: 2,
        subTopic: 'carbohydrates',
        specificItems: ['monosaccharides'],
        diagramId: 'glucoseHaworthProjectionDiagram',
        experimentId: 'fischer_glucose_stereochemistry',
        contentKey: 'components'
    },
    {
        id: 'disaccharides',
        label: 'Disaccharides',
        sectionNumber: 3,
        subTopic: 'carbohydrates',
        specificItems: ['disaccharides'],
        diagramId: 'glycosidicBondFormationDiagram',
        experimentId: 'benedict_disaccharide_hydrolysis',
        contentKey: 'components'
    },
    {
        id: 'polysaccharides',
        label: 'Polysaccharides',
        sectionNumber: 4,
        subTopic: 'carbohydrates',
        specificItems: ['polysaccharides'],
        diagramId: 'starchGlycogenCelluloseComparisonDiagram',
        experimentId: 'iodine_starch_detection_activity',
        contentKey: 'components'
    },
    {
        id: 'glycosidicBondChemistry',
        label: 'Glycosidic Bond Chemistry',
        sectionNumber: 5,
        subTopic: 'carbohydrates',
        specificItems: ['glycosidicBondChemistry'],
        diagramId: 'condensationHydrolysisReactionDiagram',
        experimentId: 'acid_hydrolysis_sucrose_experiment',
        contentKey: 'components'
    },
    {
        id: 'carbohydrateTests',
        label: 'Carbohydrate Tests & Identification',
        sectionNumber: 6,
        subTopic: 'carbohydrates',
        specificItems: ['carbohydrateTests'],
        diagramId: 'benedictIodineTestResultsChart',
        experimentId: 'benedicts_test_food_samples',
        contentKey: 'components'
    },
    {
        id: 'carbohydratesInMembranes',
        label: 'Carbohydrates in Cell Membranes',
        sectionNumber: 7,
        subTopic: 'carbohydrates',
        specificItems: ['carbohydratesInMembranes'],
        diagramId: 'glycocalyxMembraneDiagram',
        experimentId: 'landsteiner_blood_group_discovery',
        contentKey: 'components'
    },
    {
        id: 'carbohydrateMetabolism',
        label: 'Carbohydrate Metabolism',
        sectionNumber: 8,
        subTopic: 'carbohydrates',
        specificItems: ['carbohydrateMetabolism'],
        diagramId: 'glycolysisGlycogenesisPathwayDiagram',
        experimentId: 'pasteur_fermentation_experiment',
        contentKey: 'components'
    },
    {
        id: 'digestionAndAbsorption',
        label: 'Digestion and Absorption',
        sectionNumber: 9,
        subTopic: 'carbohydrates',
        specificItems: ['digestionAndAbsorption'],
        diagramId: 'carbohydrateDigestionTractDiagram',
        experimentId: 'beaumont_gastric_digestion_study',
        contentKey: 'components'
    },
    {
        id: 'carbohydratesInSignalling',
        label: 'Carbohydrates in Signalling',
        sectionNumber: 10,
        subTopic: 'carbohydrates',
        specificItems: ['carbohydratesInSignalling'],
        diagramId: 'selectinLigandBindingDiagram',
        experimentId: 'landsteiner_blood_group_discovery',
        contentKey: 'components'
    },
    {
        id: 'carbohydratesInDisease',
        label: 'Carbohydrates in Disease',
        sectionNumber: 11,
        subTopic: 'carbohydrates',
        specificItems: ['carbohydratesInDisease'],
        diagramId: 'diabetesBloodGlucoseRegulationDiagram',
        experimentId: 'banting_best_insulin_discovery',
        contentKey: 'components'
    },



    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'lipids',
        specificItems: ['foundations'],
        diagramId: 'fattyAcidStructureDiagram',
        experimentId: 'chevreuls_fatty_acids',
        contentKey: 'components'
    },
    {
        id: 'triacylglycerols',
        label: 'Triacylglycerols',
        sectionNumber: 2,
        subTopic: 'lipids',
        specificItems: ['triacylglycerols'],
        diagramId: 'triacylglycerolEsterBondDiagram',
        experimentId: 'mege_mouries_margarine_hydrogenation',
        contentKey: 'components'
    },
    {
        id: 'phospholipids',
        label: 'Phospholipids',
        sectionNumber: 3,
        subTopic: 'lipids',
        specificItems: ['phospholipids'],
        diagramId: 'phospholipidBilayerDiagram',
        experimentId: 'overton_lipid_experiment',
        contentKey: 'components'
    },
    {
        id: 'steroids',
        label: 'Steroids',
        sectionNumber: 4,
        subTopic: 'lipids',
        specificItems: ['steroids'],
        diagramId: 'cholesterolSteraneSkeleton',
        experimentId: 'windaus_cholesterol_structure_determination',
        contentKey: 'components'
    },
    {
        id: 'waxes',
        label: 'Waxes',
        sectionNumber: 5,
        subTopic: 'lipids',
        specificItems: ['waxes'],
        diagramId: 'waxEsterStructureDiagram',
        experimentId: 'cuticle_water_loss_investigation',
        contentKey: 'components'
    },
    {
        id: 'fatSolubleVitamins',
        label: 'Fat-Soluble Vitamins',
        sectionNumber: 6,
        subTopic: 'lipids',
        specificItems: ['fatSolubleVitamins'],
        diagramId: 'fatSolubleVitaminAbsorptionDiagram',
        experimentId: 'mccollum_vitamin_a_discovery',
        contentKey: 'components'
    },
    {
        id: 'eicosanoids',
        label: 'Eicosanoids',
        sectionNumber: 7,
        subTopic: 'lipids',
        specificItems: ['eicosanoids'],
        diagramId: 'arachidonicAcidCascadeDiagram',
        experimentId: 'vane_prostaglandin_aspirin_discovery',
        contentKey: 'components'
    },
    {
        id: 'lipidMetabolism',
        label: 'Lipid Metabolism',
        sectionNumber: 8,
        subTopic: 'lipids',
        specificItems: ['lipidMetabolism'],
        diagramId: 'betaOxidationPathwayDiagram',
        experimentId: 'knoop_beta_oxidation_experiment',
        contentKey: 'components'
    },
    {
        id: 'membraneStructure',
        label: 'Membrane Structure',
        sectionNumber: 9,
        subTopic: 'lipids',
        specificItems: ['membraneStructure'],
        diagramId: 'fluidMosaicModelDiagram',
        experimentId: 'singer_nicolson_fluid_mosaic_model',
        contentKey: 'components'
    },
    {
        id: 'lipidTests',
        label: 'Lipid Tests & Identification',
        sectionNumber: 10,
        subTopic: 'lipids',
        specificItems: ['lipidTests'],
        diagramId: 'emulsionTestResultsDiagram',
        experimentId: 'emulsion_test_food_lipids',
        contentKey: 'components'
    },
    {
        id: 'lipidsInDisease',
        label: 'Lipids in Disease',
        sectionNumber: 11,
        subTopic: 'lipids',
        specificItems: ['lipidsInDisease'],
        diagramId: 'atherosclerosisPlaqueDiagram',
        experimentId: 'goldstein_brown_ldl_receptor_discovery',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'proteins',
        specificItems: ['foundations'],
        diagramId: 'aminoAcidGeneralStructureDiagram',
        experimentId: 'mulder_protein_elemental_analysis',
        contentKey: 'components'
    },
    {
        id: 'peptideBonds',
        label: 'Peptide Bonds',
        sectionNumber: 2,
        subTopic: 'proteins',
        specificItems: ['peptideBonds'],
        diagramId: 'peptideBondCondensationDiagram',
        experimentId: 'fischer_peptide_synthesis',
        contentKey: 'components'
    },
    {
        id: 'proteinStructure',
        label: 'Levels of Protein Structure',
        sectionNumber: 3,
        subTopic: 'proteins',
        specificItems: ['proteinStructure'],
        diagramId: 'fourLevelsProteinStructureDiagram',
        experimentId: 'sangers_insulin_sequencing',
        contentKey: 'components'
    },
    {
        id: 'proteinFolding',
        label: 'Protein Folding & Denaturation',
        sectionNumber: 4,
        subTopic: 'proteins',
        specificItems: ['proteinFolding'],
        diagramId: 'proteinFoldingEnergyLandscapeDiagram',
        experimentId: 'anfinsen_ribonuclease_refolding',
        contentKey: 'components'
    },
    {
        id: 'fibrousProteins',
        label: 'Fibrous Proteins',
        sectionNumber: 5,
        subTopic: 'proteins',
        specificItems: ['fibrousProteins'],
        diagramId: 'collagenTripleHelixDiagram',
        experimentId: 'astbury_keratin_xray_diffraction',
        contentKey: 'components'
    },
    {
        id: 'globularProteins',
        label: 'Globular Proteins & Haemoglobin',
        sectionNumber: 6,
        subTopic: 'proteins',
        specificItems: ['globularProteins'],
        diagramId: 'haemoglobinOxygenDissociationCurve',
        experimentId: 'perutz_haemoglobin_xray_crystallography',
        contentKey: 'components'
    },
    {
        id: 'antibodies',
        label: 'Antibodies',
        sectionNumber: 7,
        subTopic: 'proteins',
        specificItems: ['antibodies'],
        diagramId: 'immunoglobulinYShapeDiagram',
        experimentId: 'porter_edelman_antibody_structure',
        contentKey: 'components'
    },
    {
        id: 'membraneProteins',
        label: 'Membrane Proteins',
        sectionNumber: 8,
        subTopic: 'proteins',
        specificItems: ['membraneProteins'],
        diagramId: 'integralPeripheralProteinDiagram',
        experimentId: 'frye_edidin_membrane_fusion_experiment',
        contentKey: 'components'
    },
    {
        id: 'proteinFunctionDiversity',
        label: 'Protein Function Diversity',
        sectionNumber: 9,
        subTopic: 'proteins',
        specificItems: ['proteinFunctionDiversity'],
        diagramId: 'proteinFunctionClassificationChart',
        experimentId: 'sumner_urease_crystallisation',
        contentKey: 'components'
    },
    {
        id: 'proteinTests',
        label: 'Protein Tests & Identification',
        sectionNumber: 10,
        subTopic: 'proteins',
        specificItems: ['proteinTests'],
        diagramId: 'biuretTestColourResultsDiagram',
        experimentId: 'biuret_protein_detection_activity',
        contentKey: 'components'
    },
    {
        id: 'proteinsInDisease',
        label: 'Proteins in Disease',
        sectionNumber: 11,
        subTopic: 'proteins',
        specificItems: ['proteinsInDisease'],
        diagramId: 'sickleCellHaemoglobinPolymerisation',
        experimentId: 'pauling_sickle_cell_molecular_disease',
        contentKey: 'components'
    },
    */
    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'nucleicAcids',
        specificItems: ['foundations'],
        diagramId: 'nucleotideStructureDiagram',
        experimentId: 'hooke_cell_discovery',
        contentKey: 'components'
    },
    {
        id: 'DNAStructure',
        label: 'DNA Structure',
        sectionNumber: 2,
        subTopic: 'nucleicAcids',
        specificItems: ['DNAStructure'],
        diagramId: 'dnaStructure',
        experimentId: 'chevreuls_fatty_acids',
        contentKey: 'components'
    },
    {
        id: 'RNAStructure',
        label: 'RNA Structure and Types',
        sectionNumber: 3,
        subTopic: 'nucleicAcids',
        specificItems: ['RNAStructure'],
        diagramId: 'rnaStructure',
        experimentId: 'sangers_insulin_sequencing',
        contentKey: 'components'
    },
    {
        id: 'DNAReplication',
        label: 'DNA Replication',
        sectionNumber: 4,
        subTopic: 'nucleicAcids',
        specificItems: ['DNAReplication'],
        diagramId: 'dnaReplication',
        experimentId: 'overton_lipid_experiment',
        contentKey: 'components'
    },
    {
        id: 'transcription',
        label: 'Transcription',
        sectionNumber: 5,
        subTopic: 'nucleicAcids',
        specificItems: ['transcription'],
        diagramId: 'transcription',
        experimentId: 'fischer_lock_and_key',
        contentKey: 'components'
    },
    {
        id: 'geneticCode',
        label: 'The Genetic Code',
        sectionNumber: 6,
        subTopic: 'nucleicAcids',
        specificItems: ['geneticCode'],
        diagramId: 'codonChart',
        experimentId: 'overton_lipid_experiment',
        contentKey: 'components'
    },
    {
        id: 'translation',
        label: 'Translation',
        sectionNumber: 7,
        subTopic: 'nucleicAcids',
        specificItems: ['translation'],
        diagramId: 'translation',
        experimentId: 'hooke_cell_discovery',
        contentKey: 'components'
    },
    {
        id: 'geneRegulation',
        label: 'Gene Regulation',
        sectionNumber: 8,
        subTopic: 'nucleicAcids',
        specificItems: ['geneRegulation'],
        diagramId: 'chromosomes',
        experimentId: 'chevreuls_fatty_acids',
        contentKey: 'components'
    },
    {
        id: 'mutations',
        label: 'Mutations',
        sectionNumber: 9,
        subTopic: 'nucleicAcids',
        specificItems: ['mutations'],
        diagramId: 'mutationTypesClassificationDiagram',
        experimentId: 'sangers_insulin_sequencing',
        contentKey: 'components'
    },
    {
        id: 'biotechnologyApplications',
        label: 'Biotechnology Applications',
        sectionNumber: 10,
        subTopic: 'nucleicAcids',
        specificItems: ['biotechnologyApplications'],
        diagramId: 'dnaReplication',
        experimentId: 'overton_lipid_experiment',
        contentKey: 'components'
    },
    {
        id: 'nucleicAcidsInDisease',
        label: 'Nucleic Acids in Disease',
        sectionNumber: 11,
        subTopic: 'nucleicAcids',
        specificItems: ['nucleicAcidsInDisease'],
        diagramId: 'chromosomes',
        experimentId: 'fischer_lock_and_key',
        contentKey: 'components'
    }

    /**
    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'bioenergetics',
        specificItems: ['foundations'],
        diagramId: 'gibbsFreeEnergyReactionDiagram',
        experimentId: 'lavoisier_respiration_calorimetry',
        contentKey: 'components'
    },
    {
        id: 'ATP',
        label: 'ATP — The Energy Currency',
        sectionNumber: 2,
        subTopic: 'bioenergetics',
        specificItems: ['ATP'],
        diagramId: 'atpStructureHydrolysisDiagram',
        experimentId: 'lipmann_atp_energy_currency_proposal',
        contentKey: 'components'
    },
    {
        id: 'cellularRespiration',
        label: 'Cellular Respiration Overview',
        sectionNumber: 3,
        subTopic: 'bioenergetics',
        specificItems: ['cellularRespiration'],
        diagramId: 'cellularRespirationOverviewDiagram',
        experimentId: 'pasteur_fermentation_experiment',
        contentKey: 'components'
    },
    {
        id: 'glycolysis',
        label: 'Glycolysis',
        sectionNumber: 4,
        subTopic: 'bioenergetics',
        specificItems: ['glycolysis'],
        diagramId: 'glycolysisPathwayDiagram',
        experimentId: 'buchner_cell_free_fermentation',
        contentKey: 'components'
    },
    {
        id: 'pyruvateDecarboxylation',
        label: 'Pyruvate Decarboxylation',
        sectionNumber: 5,
        subTopic: 'bioenergetics',
        specificItems: ['pyruvateDecarboxylation'],
        diagramId: 'pyruvateDehydrogenaseComplexDiagram',
        experimentId: 'reed_pyruvate_dehydrogenase_complex',
        contentKey: 'components'
    },
    {
        id: 'krebsCycle',
        label: 'Krebs Cycle',
        sectionNumber: 6,
        subTopic: 'bioenergetics',
        specificItems: ['krebsCycle'],
        diagramId: 'krebsCycleCircularDiagram',
        experimentId: 'krebs_citric_acid_cycle_discovery',
        contentKey: 'components'
    },
    {
        id: 'oxidativePhosphorylation',
        label: 'Oxidative Phosphorylation',
        sectionNumber: 7,
        subTopic: 'bioenergetics',
        specificItems: ['oxidativePhosphorylation'],
        diagramId: 'electronTransportChainDiagram',
        experimentId: 'mitchell_chemiosmosis_hypothesis',
        contentKey: 'components'
    },
    {
        id: 'photosynthesis',
        label: 'Photosynthesis',
        sectionNumber: 8,
        subTopic: 'bioenergetics',
        specificItems: ['photosynthesis'],
        diagramId: 'lightDependentCalvinCycleDiagram',
        experimentId: 'calvin_radiocarbon_carbon_fixation',
        contentKey: 'components'
    },
    {
        id: 'metabolicIntegration',
        label: 'Metabolic Integration',
        sectionNumber: 9,
        subTopic: 'bioenergetics',
        specificItems: ['metabolicIntegration'],
        diagramId: 'metabolicPathwayIntegrationDiagram',
        experimentId: 'cori_cycle_glucose_lactate_experiment',
        contentKey: 'components'
    },
    {
        id: 'bioenergeticsInDisease',
        label: 'Bioenergetics in Disease',
        sectionNumber: 10,
        subTopic: 'bioenergetics',
        specificItems: ['bioenergeticsInDisease'],
        diagramId: 'warburgEffectCancerMetabolismDiagram',
        experimentId: 'warburg_aerobic_glycolysis_cancer',
        contentKey: 'components'
    },
    {
        id: 'bioenergeticsCalculations',
        label: 'Bioenergetics Calculations',
        sectionNumber: 11,
        subTopic: 'bioenergetics',
        specificItems: ['bioenergeticsCalculations'],
        diagramId: 'respiratoryQuotientCalculationDiagram',
        experimentId: 'lavoisier_respiration_calorimetry',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'enzymes',
        specificItems: ['foundations'],
        diagramId: 'activationEnergyReactionCoordinateDiagram',
        experimentId: 'sumner_urease_crystallisation',
        contentKey: 'components'
    },
    {
        id: 'enzymeStructureAndClassification',
        label: 'Enzyme Structure and Classification',
        sectionNumber: 2,
        subTopic: 'enzymes',
        specificItems: ['enzymeStructureAndClassification'],
        diagramId: 'activeSiteInducedFitDiagram',
        experimentId: 'fischer_lock_and_key',
        contentKey: 'components'
    },
    {
        id: 'enzymeSpecificity',
        label: 'Enzyme Specificity',
        sectionNumber: 3,
        subTopic: 'enzymes',
        specificItems: ['enzymeSpecificity'],
        diagramId: 'stereospecificitySubstrateDiagram',
        experimentId: 'pasteur_tartrate_stereoselectivity',
        contentKey: 'components'
    },
    {
        id: 'enzymeKinetics',
        label: 'Enzyme Kinetics',
        sectionNumber: 4,
        subTopic: 'enzymes',
        specificItems: ['enzymeKinetics'],
        diagramId: 'michaelisMentenLineweaverBurkDiagram',
        experimentId: 'michaelis_menten_invertase_kinetics',
        contentKey: 'components'
    },
    {
        id: 'catalyticMechanisms',
        label: 'Catalytic Mechanisms',
        sectionNumber: 5,
        subTopic: 'enzymes',
        specificItems: ['catalyticMechanisms'],
        diagramId: 'serineProteaseCatalyticTriadDiagram',
        experimentId: 'blow_chymotrypsin_xray_mechanism',
        contentKey: 'components'
    },
    {
        id: 'enzymeInhibition',
        label: 'Enzyme Inhibition',
        sectionNumber: 6,
        subTopic: 'enzymes',
        specificItems: ['enzymeInhibition'],
        diagramId: 'inhibitionTypesLineweaverBurkComparison',
        experimentId: 'krebs_malonate_succinate_dehydrogenase',
        contentKey: 'components'
    },
    {
        id: 'enzymeRegulation',
        label: 'Enzyme Regulation',
        sectionNumber: 7,
        subTopic: 'enzymes',
        specificItems: ['enzymeRegulation'],
        diagramId: 'allostericSigmoidalCurveDiagram',
        experimentId: 'monod_wyman_changeux_allostery',
        contentKey: 'components'
    },
    {
        id: 'factorsAffectingActivity',
        label: 'Factors Affecting Enzyme Activity',
        sectionNumber: 8,
        subTopic: 'enzymes',
        specificItems: ['factorsAffectingActivity'],
        diagramId: 'temperaturePHOptimumCurveDiagram',
        experimentId: 'enzyme_activity_temperature_ph_investigation',
        contentKey: 'components'
    },
    {
        id: 'digestiveEnzymes',
        label: 'Digestive Enzymes',
        sectionNumber: 9,
        subTopic: 'enzymes',
        specificItems: ['digestiveEnzymes'],
        diagramId: 'digestiveEnzymeGITractDiagram',
        experimentId: 'beaumont_gastric_digestion_study',
        contentKey: 'components'
    },
    {
        id: 'clinicallyImportantEnzymes',
        label: 'Clinically Important Enzymes',
        sectionNumber: 10,
        subTopic: 'enzymes',
        specificItems: ['clinicallyImportantEnzymes'],
        diagramId: 'cardiacEnzymeBiomarkerTimingChart',
        experimentId: 'chain_florey_penicillin_enzyme_inhibition',
        contentKey: 'components'
    },
    {
        id: 'enzymeTechnology',
        label: 'Enzyme Technology and Applications',
        sectionNumber: 11,
        subTopic: 'enzymes',
        specificItems: ['enzymeTechnology'],
        diagramId: 'immobilisedEnzymeBiosensorDiagram',
        experimentId: 'mullis_pcr_invention',
        contentKey: 'components'
    }
    */
];






// ========================================
// UTILITY: Validate PNG magic bytes
// ========================================

function isValidPNGBuffer(buffer) {
    if (!buffer || !Buffer.isBuffer(buffer)) return false;
    if (buffer.length < 1024) return false;
    return (
        buffer[0] === 0x89 && buffer[1] === 0x50 &&
        buffer[2] === 0x4E && buffer[3] === 0x47 &&
        buffer[4] === 0x0D && buffer[5] === 0x0A &&
        buffer[6] === 0x1A && buffer[7] === 0x0A
    );
}

// ========================================
// UTILITY: Ensure output directory exists
// ========================================

function ensureOutputDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`  ✓ Created output directory: ${dir}`);
    }
}

// ========================================
// UTILITY: Fetch + validate diagram buffer
//          with retry and disk round-trip
// ========================================

async function fetchDiagramBuffer(workbook, diagramId, outputDir, maxAttempts = 3) {
    let buffer = null;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        console.log(`    Attempt ${attempt}/${maxAttempts} for diagram: ${diagramId}`);
        try {
            if (attempt > 1) {
                const delay = 1000 * attempt;
                console.log(`    Waiting ${delay}ms for renderer...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }

            const raw = await workbook.getDiagramBuffer(diagramId, {
                width: 1200,
                height: 900,
                showLabels: true,
                backgroundColor: '#FFFFFF'
            });

            if (isValidPNGBuffer(raw)) {
                buffer = raw;
                console.log(`    ✓ Valid PNG confirmed (${(raw.length / 1024).toFixed(2)} KB)`);
                break;
            } else {
                const firstBytes = raw
                    ? Array.from(raw.slice(0, 8)).map(b => b.toString(16).padStart(2, '0')).join(' ')
                    : 'null';
                console.log(`    ⚠ Invalid buffer — size: ${raw?.length || 0}, bytes: [${firstBytes}]`);
            }
        } catch (err) {
            console.log(`    ⚠ Attempt ${attempt} error: ${err.message}`);
        }
    }

    if (!buffer) return null;

    // Save to disk then re-read — guarantees fully-flushed buffer for embedding
    const filePath = path.join(outputDir, `${diagramId}_diagram.png`);
    fs.writeFileSync(filePath, buffer);
    const verified = fs.readFileSync(filePath);

    if (!isValidPNGBuffer(verified)) {
        console.warn(`    ⚠ Buffer failed validation after disk round-trip: ${filePath}`);
        return null;
    }

    console.log(`    ✓ Saved & re-read: ${filePath} (${(verified.length / 1024).toFixed(2)} KB)`);
    return { buffer: verified, filePath };
}

// ========================================
// MAIN TEST FUNCTION
// ========================================

async function testNucleicAcidWorkbook() {
    console.log('========================================');
    console.log('NUCLEIC ACID WORKBOOK TEST');
    console.log('All Filtered Contents — Diagrams — Experiments');
    console.log('========================================\n');

    const outputDir = './output';
    ensureOutputDir(outputDir);

    try {
        // ── Step 1: Initialize workbook ───────────────────────────────────────
        console.log('[1/8] Initializing workbook...');
        const workbook = new EnhancedMolecularBiologyWorkbook({
            width: 1400,
            height: 2000,
            theme: 'molecular',
            explanationLevel: 'advanced',
            includeVisualizations: true,
            includeExperiments: true,
            includeDiagrams: true,
            diagramWidth: 1200,
            diagramHeight: 900,
            detailLevel: 'detailed'
        });
        console.log('✓ Workbook initialized\n');

        // ── Step 2: Define all filtered requests ──────────────────────────────
        console.log('[2/8] Preparing nucleic acid section requests...');
        const sectionRequests = NUCLEIC_ACID_SECTIONS.map(section => ({
            ...section,
            request: {
                topic: 'molecular',
                subTopic: section.subTopic,
                parameters: {
                    specificItems: section.specificItems,
                    difficulty: 'detailed',
                    focusArea: 'structure'
                },
                experimentId: section.experimentId,
                requestType: 'content',
                context: {
                    purpose: `Understanding ${section.label}`,
                    targetAudience: 'university students',
                    includeHistorical: true
                }
            }
        }));
        console.log(`✓ ${sectionRequests.length} section requests configured\n`);

        // ── Step 3: Process all requests ──────────────────────────────────────
        // Each call to handleMolecularProblem runs the topic handler then
        // filterContentByParameters, so workbook.currentContent is already
        // scoped to exactly the specificItems listed in the section config.
        // We snapshot content immediately after each call because
        // workbook.currentContent is overwritten on the next call.
        console.log('[3/8] Processing all nucleic acid contents...');
        const processedSections = [];

        for (const section of sectionRequests) {
            console.log(`  Processing: ${section.label}...`);
            const result = workbook.handleMolecularProblem(section.request);
            const validSteps = (result.steps || []).filter(s => s !== null && s !== undefined);

            // result.content is the filtered content object returned by the handler.
            // Fall back to workbook.currentContent if result.content is not present.
            const snapshotContent = result.content
                ? { ...result.content }
                : (workbook.currentContent ? { ...workbook.currentContent } : {});

            console.log(`  ✓ ${section.label}: ${validSteps.length} steps — content keys: [${Object.keys(snapshotContent).join(', ')}]`);
            processedSections.push({ ...section, result, validSteps, snapshotContent });
        }
        console.log(`✓ All ${processedSections.length} sections processed\n`);

        // ── Step 4: Wait for diagrams to render ───────────────────────────────
        console.log('[4/8] Waiting for diagram renderers...');
        for (const section of processedSections) {
            try {
                const diagrams = await section.result.getDiagrams();
                section.diagrams = diagrams;
                console.log(`  ✓ ${section.label}: ${diagrams?.renderedImages?.length || 0} diagram(s) — status: ${diagrams?.status || 'unknown'}`);
            } catch (err) {
                console.log(`  ⚠ ${section.label}: getDiagrams() failed (${err.message}), will use direct buffer`);
                section.diagrams = null;
            }
        }
        console.log('');

        // ── Step 5: Fetch specific diagram buffer for each section ────────────
        console.log('[5/8] Extracting and validating diagrams...');
        const diagramResults = {};

        for (const section of processedSections) {
            console.log(`  Diagram [${section.diagramId}] for: ${section.label}`);
            const result = await fetchDiagramBuffer(workbook, section.diagramId, outputDir);

            if (result) {
                diagramResults[section.id] = result;
                console.log(`  ✓ ${section.label} diagram ready`);
            } else {
                console.warn(`  ⚠ ${section.label} diagram could not be validated — will use placeholder`);
                diagramResults[section.id] = null;
            }
        }
        console.log('');

        // ── Step 6: Print diagram summary ─────────────────────────────────────
        console.log('[6/8] Diagram summary:');
        NUCLEIC_ACID_SECTIONS.forEach(s => {
            const r = diagramResults[s.id];
            console.log(
                `  ${r ? '✓' : '✗'} ${s.label.padEnd(18)} → ${s.diagramId}.png ` +
                (r ? `(${(r.buffer.length / 1024).toFixed(2)} KB)` : '(placeholder)')
            );
        });
        console.log('');

        // ── Step 7: Create DOCX document ─────────────────────────────────────
        console.log('[7/8] Creating DOCX document...');
        const doc = await createNucleicAcidDocx(workbook, processedSections, diagramResults);
        console.log('✓ Document structure created\n');

        // ── Step 8: Export to file ────────────────────────────────────────────
        console.log('[8/8] Exporting to file...');
        const filename = path.join(outputDir, 'Nucleic_Acid_Workbook.docx');
        const buffer = await Packer.toBuffer(doc);
        fs.writeFileSync(filename, buffer);

        console.log(`✓ File exported: ${filename}`);
        console.log(`✓ File size: ${(buffer.length / 1024).toFixed(2)} KB\n`);

        printDetailedSummary(workbook, processedSections, diagramResults, filename, buffer.length);

        return {
            success: true,
            filename,
            fileSize: buffer.length,
            diagramResults,
            workbook,
            processedSections
        };

    } catch (error) {
        console.error('\n✗ ERROR in Nucleic Acid Workbook Test:');
        console.error(error.message);
        console.error('\nStack trace:');
        console.error(error.stack);
        return { success: false, error: error.message };
    }
}

// ========================================
// GENERIC RECURSIVE CONTENT RENDERER
//
// Walks the filtered workbook content tree and converts every node into
// docx paragraphs without any knowledge of the specific topic shape.
//
// Type rules:
//   string / number → boldLabel paragraph  (Key: value)
//   array           → bullet list; nested objects inside arrays recurse
//   object          → sub-header (HEADING_3 at depth 0, bold-underline deeper)
//                     then recurse into children
//
// Keys in SKIP_KEYS are workbook-internal and are never rendered.
// ========================================

const SKIP_KEYS = new Set([
    // workbook-internal keys
    'detailLevel', 'contextualScenarios', 'relatedExperiments',
    'metacognitivePrompts', 'difficulty', 'focusArea',
    // chloroplast handler metadata fields (flat, non-content)
    'topic', 'category', 'summary'
]);

function renderContentNode(key, value, depth, helpers) {
    const { boldLabel, bullet, subBullet, sectionHeader, paras } = helpers;

    if (SKIP_KEYS.has(key)) return;

    // camelCase → Title Case with spaces for display
    const displayKey = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, c => c.toUpperCase())
        .trim();

    // ── Primitive ────────────────────────────────────────────────────────────
    if (typeof value === 'string' || typeof value === 'number') {
        paras.push(boldLabel(displayKey, String(value)));
        return;
    }

    // ── Array ─────────────────────────────────────────────────────────────────
    if (Array.isArray(value)) {
        if (value.length === 0) return;

        // Array label
        paras.push(
            new Paragraph({
                children: [new TextRun({ text: displayKey + ':', bold: true })],
                spacing: { before: 120, after: 60 }
            })
        );

        value.forEach(item => {
            if (typeof item === 'string' || typeof item === 'number') {
                paras.push(depth <= 1 ? bullet(String(item)) : subBullet(String(item)));
            } else if (typeof item === 'object' && item !== null) {
                // Object inside array: show name/title first then recurse rest
                const itemLabel = item.name || item.title || item.type || null;
                if (itemLabel) {
                    paras.push(
                        new Paragraph({
                            children: [new TextRun({ text: itemLabel, bold: true, italics: true })],
                            spacing: { before: 80, after: 40 }
                        })
                    );
                }
                Object.entries(item).forEach(([k, v]) => {
                    if (k === 'name' || k === 'title' || k === 'type') return;
                    renderContentNode(k, v, depth + 1, helpers);
                });
            }
        });
        return;
    }

    // ── Nested object ─────────────────────────────────────────────────────────
    if (typeof value === 'object' && value !== null) {
        // depth 0 → HEADING_3 (top-level sub-sections like "components", "doubleHelix")
        // depth 1+ → bold underline sub-header
        if (depth === 0) {
            paras.push(
                new Paragraph({
                    text: displayKey,
                    heading: HeadingLevel.HEADING_3,
                    spacing: { before: 240, after: 120 }
                })
            );
        } else {
            paras.push(sectionHeader(displayKey, { before: 180, after: 80 }));
        }

        Object.entries(value).forEach(([childKey, childVal]) => {
            renderContentNode(childKey, childVal, depth + 1, helpers);
        });
    }
}

// ========================================
// DOCX CREATION — all nucleic acid sections
// ========================================

async function createNucleicAcidDocx(workbook, processedSections, diagramResults) {

    // ── Numbering config (proper docx bullets — no unicode hacks) ────────────
    const numberingConfig = {
        config: [
            {
                reference: 'bullets',
                levels: [{
                    level: 0, format: LevelFormat.BULLET, text: '\u2022',
                    alignment: AlignmentType.LEFT,
                    style: { paragraph: { indent: { left: 720, hanging: 360 } } }
                }]
            },
            {
                reference: 'sub-bullets',
                levels: [{
                    level: 0, format: LevelFormat.BULLET, text: '\u2013',
                    alignment: AlignmentType.LEFT,
                    style: { paragraph: { indent: { left: 1080, hanging: 360 } } }
                }]
            },
            {
                reference: 'numbers',
                levels: [{
                    level: 0, format: LevelFormat.DECIMAL, text: '%1.',
                    alignment: AlignmentType.LEFT,
                    style: { paragraph: { indent: { left: 720, hanging: 360 } } }
                }]
            }
        ]
    };

    // ── Paragraph helpers ─────────────────────────────────────────────────────
    const bullet = (text, spacing = { after: 80 }) =>
        new Paragraph({
            numbering: { reference: 'bullets', level: 0 },
            children: [new TextRun({ text: text || '' })],
            spacing
        });

    const subBullet = (text, spacing = { after: 60 }) =>
        new Paragraph({
            numbering: { reference: 'sub-bullets', level: 0 },
            children: [new TextRun({ text: text || '' })],
            spacing
        });

    const boldLabel = (label, value, spacing = { after: 100 }) =>
        new Paragraph({
            children: [
                new TextRun({ text: `${label}: `, bold: true }),
                new TextRun({ text: value || '' })
            ],
            spacing
        });

    const boldLabelItalic = (label, value, spacing = { after: 100 }) =>
        new Paragraph({
            children: [
                new TextRun({ text: `${label}: `, bold: true }),
                new TextRun({ text: value || '', italics: true })
            ],
            spacing
        });

    const sectionHeader = (text, spacing = { before: 200, after: 100 }) =>
        new Paragraph({
            children: [new TextRun({ text, bold: true, underline: {} })],
            spacing
        });

    const spacer = (before = 0, after = 200) =>
        new Paragraph({ text: '', spacing: { before, after } });

    // ── Image paragraph builder ───────────────────────────────────────────────
    const buildImageParagraph = (diagramResult, sectionLabel) => {
        if (diagramResult && isValidPNGBuffer(diagramResult.buffer)) {
            const imageBuffer = Buffer.from(diagramResult.buffer);
            console.log(`    ✓ Embedding diagram for ${sectionLabel} (${(imageBuffer.length / 1024).toFixed(2)} KB)`);
            return new Paragraph({
                children: [
                    new ImageRun({
                        data: imageBuffer,
                        transformation: { width: 600, height: 450 },
                        type: 'png'   // explicit type — prevents blank rendering
                    })
                ],
                alignment: AlignmentType.CENTER,
                spacing: { before: 200, after: 200 }
            });
        } else {
            console.warn(`    ⚠ No valid diagram for ${sectionLabel} — using placeholder`);
            return new Paragraph({
                children: [new TextRun({
                    text: `[${sectionLabel} Diagram — See output folder for PNG file]`,
                    bold: true
                })],
                alignment: AlignmentType.CENTER,
                spacing: { before: 200, after: 200 }
            });
        }
    };

    // ── Experiment section builder ────────────────────────────────────────────
    // Reads directly from workbook.molecularExperiments[experimentId].
    // No experiment data is re-defined here.
    const buildExperimentSection = (experimentId) => {
        const paras = [];
        const experiment = workbook.molecularExperiments[experimentId];

        if (!experiment) {
            paras.push(new Paragraph({
                children: [new TextRun({
                    text: `[Experiment data not available: ${experimentId}]`,
                    italics: true
                })],
                spacing: { after: 200 }
            }));
            return paras;
        }

        // Historical Background
        const hist = experiment.historicalBackground;
        if (hist) {
            paras.push(
                new Paragraph({
                    text: 'Historical Background',
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 300, after: 200 }
                })
            );
            const histFields = [
                ['Scientist', hist.scientist], ['Year', hist.year],
                ['Hypothesis', hist.hypothesis], ['Proposal', hist.proposal],
                ['Context', hist.context], ['Significance', hist.significance]
            ];
            histFields.forEach(([label, val]) => {
                if (val) paras.push(boldLabel(label, val));
            });
            if (hist.quote) {
                paras.push(new Paragraph({
                    children: [new TextRun({ text: `"${hist.quote}"`, italics: true })],
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 200, after: 200 }
                }));
            }
            if (hist.nobelPrize)   paras.push(boldLabel('Nobel Prize', hist.nobelPrize));
            if (hist.modernUpdate) paras.push(boldLabelItalic('Modern Update', hist.modernUpdate, { after: 200 }));
        }

        // Lab Experiment
        const lab = experiment.labExperiment;
        if (lab) {
            paras.push(
                new Paragraph({
                    text: 'Laboratory Experiment',
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 400, after: 200 }
                }),
                boldLabel('Title', lab.title),
                boldLabel('Hypothesis', lab.hypothesis),
                boldLabel('Purpose', lab.purpose, { after: 200 })
            );
            if (lab.background) {
                paras.push(sectionHeader('Background', { before: 200, after: 100 }));
                Object.entries(lab.background).forEach(([k, v]) => {
                    paras.push(boldLabel(k.charAt(0).toUpperCase() + k.slice(1), v, { after: 80 }));
                });
            }
            if (Array.isArray(lab.materials) && lab.materials.length) {
                paras.push(sectionHeader('Materials Required', { before: 300, after: 100 }));
                lab.materials.slice(0, 15).forEach(m => paras.push(bullet(m, { after: 60 })));
            }
            if (lab.results) {
                paras.push(
                    sectionHeader('Results', { before: 300, after: 100 }),
                    new Paragraph({
                        children: [new TextRun({ text: lab.results })],
                        spacing: { after: 200 }
                    })
                );
            }
            if (Array.isArray(lab.conclusions) && lab.conclusions.length) {
                paras.push(sectionHeader('Conclusions', { before: 300, after: 100 }));
                lab.conclusions.slice(0, 8).forEach(c => paras.push(bullet(c, { after: 80 })));
            }
        }

        return paras;
    };

    // ══════════════════════════════════════════════════════════════════════════
    // BUILD ALL DOCUMENT PARAGRAPHS
    // ══════════════════════════════════════════════════════════════════════════
    const children = [];

    // ── Title Page ────────────────────────────────────────────────────────────
    children.push(
        new Paragraph({
            text: 'Nucleic Acids',
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
        }),
        new Paragraph({
            text: 'Molecular Biology Workbook',
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 }
        }),
        new Paragraph({
            children: [new TextRun({
                text: 'Covering: Nucleotides · DNA Structure · RNA Structure · Central Dogma · Genetic Code · Chloroplasts',
                italics: true
            })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
        }),
        new Paragraph({
            children: [new TextRun({
                text: `Generated: ${new Date().toLocaleDateString('en-US', {
                    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                })}`,
                italics: true
            })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 600 }
        }),
        spacer(0, 400)
    );

    // ── Table of Contents ─────────────────────────────────────────────────────
    children.push(
        new Paragraph({
            text: 'Contents',
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
        })
    );
    NUCLEIC_ACID_SECTIONS.forEach((s, i) => {
        children.push(
            new Paragraph({ text: `${i + 1}. ${s.label}`, spacing: { after: 80 } }),
            new Paragraph({ text: `   ${i + 1}.1 ${s.label} Content`, spacing: { after: 60 } }),
            new Paragraph({ text: `   ${i + 1}.2 ${s.label} Diagram`, spacing: { after: 60 } }),
            new Paragraph({ text: `   ${i + 1}.3 Related Experiment`, spacing: { after: 100 } })
        );
    });
    children.push(spacer(0, 400));

    // ══════════════════════════════════════════════════════════════════════════
    // ITERATE EACH SECTION: Content → Diagram → Experiment
    //
    // Content block:
    //   - reads section.snapshotContent[section.contentKey]
    //     which is the already-filtered output of:
    //     handleMolecularProblem → getMolecularContent → filterContentByParameters
    //   - passes it to renderContentNode() which recursively walks the
    //     hierarchy and emits docx paragraphs — no topic-specific branching
    //
    // Diagram block:  unchanged from working version
    // Experiment block: unchanged from working version
    // ══════════════════════════════════════════════════════════════════════════
    for (let idx = 0; idx < processedSections.length; idx++) {
        const section = processedSections[idx];
        const diagramResult = diagramResults[section.id];
        const sectionNum = idx + 1;
        const isLast = idx === processedSections.length - 1;

        console.log(`  Building DOCX section ${sectionNum}: ${section.label}`);

        // ── Major section heading (page break before each topic) ──────────────
        children.push(
            new Paragraph({
                text: `${sectionNum}. ${section.label}`,
                heading: HeadingLevel.HEADING_1,
                spacing: { before: 600, after: 200 },
                pageBreakBefore: true
            })
        );

        // ════════════════════════════════════════
        // CONTENT BLOCK
        // Source: snapshotContent[contentKey]   — for sections with a wrapper key
        //                                          e.g. DNAStructure, nucleotideStructure
        //         snapshotContent directly        — when contentKey is null (chloroplasts),
        //                                          because handleChloroplasts returns a flat
        //                                          object, not a nested wrapper key
        // Rendered: generic recursive walk via renderContentNode()
        // ════════════════════════════════════════
        children.push(
            new Paragraph({
                text: `${sectionNum}.1 ${section.label} Content`,
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 300, after: 200 }
            })
        );

        // Resolve the content object to walk:
        // - contentKey present → drill into that key  (e.g. snapshotContent.DNAStructure)
        // - contentKey null    → walk the snapshot itself (chloroplasts flat return)
        const sectionContent = section.contentKey
            ? section.snapshotContent[section.contentKey]
            : section.snapshotContent;

        if (sectionContent && typeof sectionContent === 'object') {
            const renderedParas = [];
            const renderHelpers = {
                boldLabel,
                bullet,
                subBullet,
                sectionHeader,
                paras: renderedParas  // renderContentNode pushes into this array
            };

            // Walk each top-level key returned by the workbook handler.
            // For keyed sections:  DNAStructure    → { doubleHelix, basePairing, forms }
            //                      nucleotideStructure → { components, nomenclature }
            // For flat sections:   chloroplasts    → { chroloplastStructure, photosynthesis,
            //                                          adaptations, endosymbioticTheory, … }
            //                      (topic/category/summary are silently skipped by SKIP_KEYS)
            Object.entries(sectionContent).forEach(([key, value]) => {
                renderContentNode(key, value, 0, renderHelpers);
            });

            if (renderedParas.length > 0) {
                children.push(...renderedParas);
            } else {
                children.push(new Paragraph({
                    children: [new TextRun({
                        text: `[No renderable content returned for ${section.contentKey ?? section.label}]`,
                        italics: true
                    })],
                    spacing: { after: 200 }
                }));
            }
        } else {
            // Content not found — show available keys to aid debugging
            const availableKeys = Object.keys(section.snapshotContent).join(', ') || 'none';
            children.push(new Paragraph({
                children: [new TextRun({
                    text: section.contentKey
                        ? `[Content key "${section.contentKey}" not found. Available keys: ${availableKeys}]`
                        : `[Snapshot content empty for "${section.label}". Available keys: ${availableKeys}]`,
                    italics: true
                })],
                spacing: { after: 200 }
            }));
        }

        // ════════════════════════════════════════
        // DIAGRAM BLOCK — unchanged from working version
        // ════════════════════════════════════════
        children.push(
            new Paragraph({
                text: `${sectionNum}.2 ${section.label} Diagram`,
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 200 },
                pageBreakBefore: true
            }),
            new Paragraph({
                children: [new TextRun({
                    text: `The following diagram illustrates key concepts from ${section.label}.`
                })],
                spacing: { after: 300 }
            }),
            buildImageParagraph(diagramResult, section.label),
            new Paragraph({
                children: [new TextRun({
                    text: `Figure ${sectionNum}: ${section.label} Diagram`,
                    bold: true
                })],
                alignment: AlignmentType.CENTER,
                spacing: { after: 100 }
            }),
            new Paragraph({
                children: [new TextRun({
                    text: `Diagram showing the molecular structure and key features of ${section.label.toLowerCase()}.`,
                    italics: true
                })],
                alignment: AlignmentType.CENTER,
                spacing: { after: 400 }
            })
        );

        // ════════════════════════════════════════
        // EXPERIMENT BLOCK — unchanged from working version
        // ════════════════════════════════════════
        const experimentName =
            workbook.molecularExperiments[section.experimentId]?.name || section.experimentId;

        children.push(
            new Paragraph({
                text: `${sectionNum}.3 Related Experiment: ${experimentName}`,
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 200 },
                pageBreakBefore: true
            }),
            ...buildExperimentSection(section.experimentId)
        );

        // Section spacer between topics (not after the last one)
        if (!isLast) {
            children.push(spacer(400, 100));
        }
    }

    // ══════════════════════════════════════════════════════════════════════════
    // FOOTER
    // ══════════════════════════════════════════════════════════════════════════
    children.push(
        spacer(600, 0),
        new Paragraph({
            children: [new TextRun({ text: '_______________________________________________' })],
            alignment: AlignmentType.CENTER,
            spacing: { before: 400, after: 100 }
        }),
        new Paragraph({
            children: [new TextRun({
                text: 'Enhanced Molecular Biology Workbook — Nucleic Acids',
                italics: true
            })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 50 }
        }),
        new Paragraph({
            children: [new TextRun({
                text: 'Nucleotides · DNA Structure · RNA Structure · Central Dogma · Genetic Code · Chloroplasts',
                italics: true
            })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
        })
    );

    // ══════════════════════════════════════════════════════════════════════════
    // BUILD DOCUMENT
    // ══════════════════════════════════════════════════════════════════════════
    const doc = new Document({
        numbering: numberingConfig,
        styles: {
            default: {
                document: { run: { font: 'Arial', size: 24 } }
            },
            paragraphStyles: [
                {
                    id: 'Title', name: 'Title', basedOn: 'Normal',
                    run: { size: 52, bold: true, font: 'Arial', color: '1F4E79' },
                    paragraph: { spacing: { before: 0, after: 240 }, alignment: AlignmentType.CENTER }
                },
                {
                    id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
                    run: { size: 36, bold: true, font: 'Arial', color: '1F4E79' },
                    paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 0 }
                },
                {
                    id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
                    run: { size: 28, bold: true, font: 'Arial', color: '2E75B6' },
                    paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 1 }
                },
                {
                    id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
                    run: { size: 24, bold: true, font: 'Arial', color: '404040' },
                    paragraph: { spacing: { before: 160, after: 80 }, outlineLevel: 2 }
                }
            ]
        },
        sections: [{
            properties: {
                page: {
                    size: { width: 12240, height: 15840 },  // US Letter
                    margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
                }
            },
            children
        }]
    });

    return doc;
}

// ========================================
// SUMMARY PRINTING FUNCTION
// ========================================

function printDetailedSummary(workbook, processedSections, diagramResults, filename, fileSize) {
    console.log('\n========================================');
    console.log('NUCLEIC ACID WORKBOOK — DETAILED SUMMARY');
    console.log('========================================\n');

    console.log('SECTIONS PROCESSED:');
    console.log('─────────────────────────────────────');
    processedSections.forEach((s, i) => {
        const contentKeys = Object.keys(s.snapshotContent).join(', ');
        console.log(`  ${i + 1}. ${s.label.padEnd(20)} → ${s.validSteps.length} steps | keys: [${contentKeys}]`);
    });

    console.log('\nDIAGRAMS:');
    console.log('─────────────────────────────────────');
    NUCLEIC_ACID_SECTIONS.forEach(s => {
        const r = diagramResults[s.id];
        const status = r ? `✓ ${(r.buffer.length / 1024).toFixed(2)} KB` : '✗ placeholder';
        console.log(`  [${s.diagramId.padEnd(18)}] ${status}`);
    });

    console.log('\nEXPERIMENTS:');
    console.log('─────────────────────────────────────');
    NUCLEIC_ACID_SECTIONS.forEach(s => {
        const exp = workbook.molecularExperiments[s.experimentId];
        const name = exp?.name || s.experimentId;
        console.log(`  ${exp ? '✓' : '✗'} ${s.experimentId.padEnd(34)} → ${name}`);
    });

    console.log('\nCONTENT RENDERING APPROACH:');
    console.log('─────────────────────────────────────');
    console.log('  ✓ renderContentNode() — generic recursive tree walk');
    console.log('  ✓ Zero topic-specific branching in createNucleicAcidDocx');
    console.log('  ✓ Data sourced: handleMolecularProblem → filterContentByParameters → snapshotContent');
    console.log('  ✓ contentKey present → snapshotContent[contentKey] (nucleotides, DNA, RNA, etc.)');
    console.log('  ✓ contentKey null    → snapshotContent directly (chloroplasts flat return)');
    console.log('  ✓ Primitives  → bold-labelled paragraphs');
    console.log('  ✓ Arrays      → bullet / sub-bullet lists');
    console.log('  ✓ Objects     → HEADING_3 (depth 0) or bold-underline sub-header (depth 1+)');
    console.log('  ✓ SKIP_KEYS   → topic/category/summary + workbook-internal keys silently omitted');

    console.log('\nDIAGRAM FIXES MAINTAINED:');
    console.log('─────────────────────────────────────');
    console.log('  ✓ PNG magic-byte validation on every diagram');
    console.log('  ✓ Per-diagram retry loop with progressive delays');
    console.log('  ✓ Disk write + re-read for guaranteed buffer integrity');
    console.log('  ✓ Buffer.from() copy before each ImageRun');
    console.log('  ✓ Explicit type:"png" on all ImageRun instances');
    console.log('  ✓ Proper LevelFormat numbering (no unicode hacks)');
    console.log('  ✓ US Letter page size (12240 × 15840 DXA)');

    console.log('\nOUTPUT FILES:');
    console.log('─────────────────────────────────────');
    console.log(`  DOCX : ${filename}`);
    console.log(`  Size : ${(fileSize / 1024).toFixed(2)} KB`);
    NUCLEIC_ACID_SECTIONS.forEach(s => {
        const r = diagramResults[s.id];
        if (r) console.log(`  PNG  : output/${s.diagramId}_diagram.png`);
    });

    console.log('\n========================================\n');
}

// ========================================
// RUN THE TEST
// ========================================

console.log('Initiating Nucleic Acid Workbook Test...\n');

testNucleicAcidWorkbook()
    .then(result => {
        if (result.success) {
            console.log('════════════════════════════════════════');
            console.log('✓✓✓ TEST COMPLETED SUCCESSFULLY ✓✓✓');
            console.log('════════════════════════════════════════');
            console.log(`\nMain output  : ${result.filename}`);
            console.log(`Size         : ${(result.fileSize / 1024).toFixed(2)} KB`);
            console.log('\nDiagram PNGs saved to ./output/');
            console.log('\nSections covered:');
            NUCLEIC_ACID_SECTIONS.forEach((s, i) => console.log(`  ${i + 1}. ${s.label}`));
            console.log('');
        } else {
            console.log('════════════════════════════════════════');
            console.log('✗✗✗ TEST FAILED ✗✗✗');
            console.log('════════════════════════════════════════');
            console.log(`\nError: ${result.error}\n`);
        }
    })
    .catch(error => {
        console.error('\n════════════════════════════════════════');
        console.error('✗✗✗ UNEXPECTED ERROR ✗✗✗');
        console.error('════════════════════════════════════════');
        console.error('\nDetails:', error);
        console.error('\nStack:', error.stack);
    });

// Export for module usage
export { testNucleicAcidWorkbook, createNucleicAcidDocx };
