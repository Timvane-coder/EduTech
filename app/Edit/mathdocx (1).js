// ========================================
// Geometric Measurement Workbook Test
// Handles all filtered trigonometric ratio contents:
//   1. Foundations              → rightTriangleTrigRatios diagram  + perimeter_optimisation_investigation
//   2. Primary Ratios           → unitCircle diagram               + pythagorean_theorem_discovery
//   3. Reciprocal Ratios        → specialAnglesTriangle diagram     + bearings_navigation_investigation
//   4. Special Angles           → trigIdentitiesVisual diagram      + pythagorean_theorem_discovery
//   5. Unit Circle & Extended   → radianMeasure diagram            + bearings_navigation_investigation
//   6. Calculating With Ratios  → sineRuleDiagram diagram          + pythagorean_theorem_discovery
//   7. Trig Identities          → trigIdentitiesVisual diagram     + pythagorean_theorem_discovery
//   8. Graphs of Trig Functions → cosineRuleDiagram diagram        + bearings_navigation_investigation
//   9. Solving Trig Equations   → unitCircle diagram               + pythagorean_theorem_discovery
//  10. Real-World Applications  → triangleAreaFormula diagram      + bearings_navigation_investigation
//
// Content rendering: generic recursive walk of workbook output.
// No content is re-defined here — data is sourced entirely from
// handleGeometricProblem → getGeometricContent → filterContentByParameters.
// ========================================

import { EnhancedGeometricMeasurementWorkbook } from './measurement.js';
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

// ============================================================
// SECTION CONFIGURATION UPDATE
// Replace GEOMETRIC_MEASUREMENT_SECTIONS in testGeometricMeasurementWorkbook.js
//
// Change from contentKey: null  →  contentKey: 'components'
//
// Why:
//   handlers  returns
//     { topic, category, summary, components: { primaryRatios, foundations, … }, … }
//   After filterContentByParameters runs, filtered.components contains
//   ONLY the requested section(s).
//   The DOCX content block resolves:
//     sectionContent = section.contentKey
//         ? section.snapshotContent[section.contentKey]   // ← 'components'
//         : section.snapshotContent
//   With contentKey: 'components' it drills into the already-filtered
//   components object and walks only the requested keys.
// ============================================================

// ========================================
// GEOMETRIC_MEASUREMENT_SECTIONS
// Section configuration for all five measurement-geometry handlers:
//   handlePerimeter, handleArea, handleSectorArea,
//   handleSurfaceArea, handleVolume
//
// Each entry drives filterContentByParameters inside the workbook.
//   specificItems  → keys inside handler.components to include
//   contentKey     → top-level key on workbook.currentContent ('components')
//   diagramId      → diagram relevant to that specific section
//   practicalId    → investigation / activity relevant to that section
// ========================================

// ─────────────────────────────────────────────────────────────
// 1.  PERIMETER  (sectionNumber 1–10)
// ─────────────────────────────────────────────────────────────
// ============================================================
// GEOMETRIC_MEASUREMENT_SECTIONS
//
// Section configuration for four topic handlers:
//   1. handleTrigonometricRatios   (sections 1–10)
//   2. handleArcLength             (sections 11–20)
//   3. handlePythagoreanTheorem    (sections 21–31)
//   4. handleBearings              (sections 32–42)
//
// Rules:
//   • id           — exact key inside handler's components object
//   • label        — human-readable display name
//   • sectionNumber — global sequential number across all four handlers
//   • subTopic     — topic family for filtering/grouping
//   • specificItems — array wrapping the id (drives filterContentByParameters)
//   • diagramId    — name of a diagram relevant to that section's content
//   • practicalId  — name of a practical/investigation relevant to that section
//   • contentKey   — always 'components' (drills into filtered components object)
// ============================================================

const GEOMETRIC_MEASUREMENT_SECTIONS = [



    // ══════════════════════════════════════════════════════
    // PART 1 — handleLinearRearranging  (sections 1–8)
    // ══════════════════════════════════════════════════════

    {
        id: 'linearFoundations',
        label: 'Foundations of Rearranging',
        sectionNumber: 1,
        subTopic: 'linear_rearranging',
        specificItems: ['foundations'],
        diagramId: 'balanceScalesEquation',
        practicalId: 'inverse_operations_discovery_investigation',
        contentKey: 'components'
    },
    {
        id: 'additionAndSubtraction',
        label: 'Addition and Subtraction',
        sectionNumber: 2,
        subTopic: 'linear_rearranging',
        specificItems: ['additionAndSubtraction'],
        diagramId: 'addSubtractInverseNumberLine',
        practicalId: 'kinematics_velocity_formula_rearranging',
        contentKey: 'components'
    },
    {
        id: 'multiplicationAndDivision',
        label: 'Multiplication and Division',
        sectionNumber: 3,
        subTopic: 'linear_rearranging',
        specificItems: ['multiplicationAndDivision'],
        diagramId: 'multiplyDivideInverseDiagram',
        practicalId: 'ohms_law_rearranging_investigation',
        contentKey: 'components'
    },
    {
        id: 'twoStepLinearRearranging',
        label: 'Two-Step Linear Rearranging',
        sectionNumber: 4,
        subTopic: 'linear_rearranging',
        specificItems: ['twoStepLinearRearranging'],
        diagramId: 'slopeInterceptFormDiagram',
        practicalId: 'temperature_conversion_formula_activity',
        contentKey: 'components'
    },
    {
        id: 'multiStepLinearRearranging',
        label: 'Multi-Step Linear Rearranging',
        sectionNumber: 5,
        subTopic: 'linear_rearranging',
        specificItems: ['multiStepLinearRearranging'],
        diagramId: 'multiStepInverseOperationsChain',
        practicalId: 'energy_formula_multi_step_investigation',
        contentKey: 'components'
    },
    {
        id: 'rearrangingWithBrackets',
        label: 'Rearranging With Brackets',
        sectionNumber: 6,
        subTopic: 'linear_rearranging',
        specificItems: ['rearrangingWithBrackets'],
        diagramId: 'distributiveLawBracketDiagram',
        practicalId: 'perimeter_formula_brackets_investigation',
        contentKey: 'components'
    },
    {
        id: 'negativeSubjects',
        label: 'Negative Subjects',
        sectionNumber: 7,
        subTopic: 'linear_rearranging',
        specificItems: ['negativeSubjects'],
        diagramId: 'negativeVariableNumberLine',
        practicalId: 'profit_loss_formula_rearranging_activity',
        contentKey: 'components'
    },
    {
        id: 'linearCurriculumApplications',
        label: 'Linear Formula Applications',
        sectionNumber: 8,
        subTopic: 'linear_rearranging',
        specificItems: ['curriculumApplications'],
        diagramId: 'scienceFormulasReferenceChart',
        practicalId: 'newtons_second_law_practical_investigation',
        contentKey: 'components'
    },

    // ══════════════════════════════════════════════════════
    // PART 2 — handleRearrangingWithFractions  (sections 9–16)
    // ══════════════════════════════════════════════════════

    {
        id: 'fractionFoundations',
        label: 'Foundations With Fractions',
        sectionNumber: 9,
        subTopic: 'fractions_rearranging',
        specificItems: ['foundations'],
        diagramId: 'fractionNumeratorDenominatorDiagram',
        practicalId: 'clearing_denominators_discovery_activity',
        contentKey: 'components'
    },
    {
        id: 'targetInNumerator',
        label: 'Target Variable in the Numerator',
        sectionNumber: 10,
        subTopic: 'fractions_rearranging',
        specificItems: ['targetInNumerator'],
        diagramId: 'numeratorIsolationDiagram',
        practicalId: 'simple_interest_formula_rearranging',
        contentKey: 'components'
    },
    {
        id: 'targetInDenominator',
        label: 'Target Variable in the Denominator',
        sectionNumber: 11,
        subTopic: 'fractions_rearranging',
        specificItems: ['targetInDenominator'],
        diagramId: 'denominatorCrossMultiplyDiagram',
        practicalId: 'speed_distance_time_denominator_activity',
        contentKey: 'components'
    },
    {
        id: 'crossMultiplication',
        label: 'Cross-Multiplication',
        sectionNumber: 12,
        subTopic: 'fractions_rearranging',
        specificItems: ['crossMultiplication'],
        diagramId: 'crossMultiplicationRatioDiagram',
        practicalId: 'similar_triangles_ratio_investigation',
        contentKey: 'components'
    },
    {
        id: 'multipleFractions',
        label: 'Multiple Fractions',
        sectionNumber: 13,
        subTopic: 'fractions_rearranging',
        specificItems: ['multipleFractions'],
        diagramId: 'parallelResistorCircuitDiagram',
        practicalId: 'parallel_resistance_lcm_investigation',
        contentKey: 'components'
    },
    {
        id: 'compoundFractions',
        label: 'Compound Fractions',
        sectionNumber: 14,
        subTopic: 'fractions_rearranging',
        specificItems: ['compoundFractions'],
        diagramId: 'compoundFractionSimplificationDiagram',
        practicalId: 'complex_fraction_simplification_activity',
        contentKey: 'components'
    },
    {
        id: 'proportionalReasoning',
        label: 'Proportional Reasoning',
        sectionNumber: 15,
        subTopic: 'fractions_rearranging',
        specificItems: ['proportionalReasoning'],
        diagramId: 'directInverseProportionGraph',
        practicalId: 'boyles_law_proportion_investigation',
        contentKey: 'components'
    },
    {
        id: 'fractionsCurriculumApplications',
        label: 'Fraction Formula Applications',
        sectionNumber: 16,
        subTopic: 'fractions_rearranging',
        specificItems: ['curriculumApplications'],
        diagramId: 'lensFormulaOpticsDiagram',
        practicalId: 'lens_formula_optics_practical',
        contentKey: 'components'
    },

    // ══════════════════════════════════════════════════════
    // PART 3 — handleRearrangingWithRootsPowers  (sections 17–24)
    // ══════════════════════════════════════════════════════

    {
        id: 'rootsPowersFoundations',
        label: 'Foundations — Roots and Powers',
        sectionNumber: 17,
        subTopic: 'roots_powers_rearranging',
        specificItems: ['foundations'],
        diagramId: 'inverseOperationPowerRootPairs',
        practicalId: 'square_root_inverse_discovery_activity',
        contentKey: 'components'
    },
    {
        id: 'targetVariableSquared',
        label: 'Target Variable is Squared',
        sectionNumber: 18,
        subTopic: 'roots_powers_rearranging',
        specificItems: ['targetVariableSquared'],
        diagramId: 'circleAreaRadiusDiagram',
        practicalId: 'circle_area_radius_investigation',
        contentKey: 'components'
    },
    {
        id: 'targetVariableUnderSquareRoot',
        label: 'Target Variable Under a Square Root',
        sectionNumber: 19,
        subTopic: 'roots_powers_rearranging',
        specificItems: ['targetVariableUnderSquareRoot'],
        diagramId: 'pendulumLengthDiagram',
        practicalId: 'simple_pendulum_period_investigation',
        contentKey: 'components'
    },
    {
        id: 'cubesAndCubeRoots',
        label: 'Cubes and Cube Roots',
        sectionNumber: 20,
        subTopic: 'roots_powers_rearranging',
        specificItems: ['cubesAndCubeRoots'],
        diagramId: 'sphereVolumeFormulaDiagram',
        practicalId: 'sphere_volume_radius_investigation',
        contentKey: 'components'
    },
    {
        id: 'higherPowersAndNthRoots',
        label: 'Higher Powers and nth Roots',
        sectionNumber: 21,
        subTopic: 'roots_powers_rearranging',
        specificItems: ['higherPowersAndNthRoots'],
        diagramId: 'nthRootFractionalExponentDiagram',
        practicalId: 'nth_root_fractional_exponent_activity',
        contentKey: 'components'
    },
    {
        id: 'combinedRootsAndLinear',
        label: 'Combined Roots and Linear Operations',
        sectionNumber: 22,
        subTopic: 'roots_powers_rearranging',
        specificItems: ['combinedRootsAndLinear'],
        diagramId: 'kinematicEquationsDiagram',
        practicalId: 'kinematics_v_squared_investigation',
        contentKey: 'components'
    },
    {
        id: 'squaredBrackets',
        label: 'Squared Bracket Expressions',
        sectionNumber: 23,
        subTopic: 'roots_powers_rearranging',
        specificItems: ['squaredBrackets'],
        diagramId: 'circleEquationCoordinateDiagram',
        practicalId: 'circle_equation_vertex_form_activity',
        contentKey: 'components'
    },
    {
        id: 'rootsPowersCurriculumApplications',
        label: 'Roots and Powers Formula Applications',
        sectionNumber: 24,
        subTopic: 'roots_powers_rearranging',
        specificItems: ['curriculumApplications'],
        diagramId: 'pythagoreanTheoremDiagram',
        practicalId: 'pythagorean_theorem_rearranging_investigation',
        contentKey: 'components'
    },

    // ══════════════════════════════════════════════════════
    // PART 4 — handleSubjectAppearsTwice  (sections 25–32)
    // ══════════════════════════════════════════════════════

    {
        id: 'subjectTwiceFoundations',
        label: 'Foundations — Subject Appears Twice',
        sectionNumber: 25,
        subTopic: 'subject_appears_twice',
        specificItems: ['foundations'],
        diagramId: 'collectFactoriseDivideFlowchart',
        practicalId: 'subject_twice_discovery_investigation',
        contentKey: 'components'
    },
    {
        id: 'linearCaseBothSides',
        label: 'Linear Case — Subject on Both Sides',
        sectionNumber: 26,
        subTopic: 'subject_appears_twice',
        specificItems: ['linearCaseBothSides'],
        diagramId: 'collectingLikeTermsDiagram',
        practicalId: 'linear_both_sides_collecting_activity',
        contentKey: 'components'
    },
    {
        id: 'fractionForms',
        label: 'Fractional Forms — Subject in Both Numerator and Denominator',
        sectionNumber: 27,
        subTopic: 'subject_appears_twice',
        specificItems: ['fractionForms'],
        diagramId: 'fractionSubjectTwiceDiagram',
        practicalId: 'rational_expression_subject_investigation',
        contentKey: 'components'
    },
    {
        id: 'subjectInBracketsOnBothSides',
        label: 'Subject in Brackets on Both Sides',
        sectionNumber: 28,
        subTopic: 'subject_appears_twice',
        specificItems: ['subjectInBracketsOnBothSides'],
        diagramId: 'expandCollectBracketsFlowchart',
        practicalId: 'expanding_brackets_collection_activity',
        contentKey: 'components'
    },
    {
        id: 'subjectInFractionsOnBothSides',
        label: 'Subject in Fractions on Both Sides',
        sectionNumber: 29,
        subTopic: 'subject_appears_twice',
        specificItems: ['subjectInFractionsOnBothSides'],
        diagramId: 'lcmClearingMultipleFractionsDiagram',
        practicalId: 'multi_fraction_subject_twice_activity',
        contentKey: 'components'
    },
    {
        id: 'subjectTwiceRealWorldContexts',
        label: 'Real-World Contexts — Subject Appears Twice',
        sectionNumber: 30,
        subTopic: 'subject_appears_twice',
        specificItems: ['realWorldContexts'],
        diagramId: 'sellingPriceMarkupDiagram',
        practicalId: 'markup_selling_price_financial_investigation',
        contentKey: 'components'
    },
    {
        id: 'whenFactorisationFails',
        label: 'When Factorisation Fails',
        sectionNumber: 31,
        subTopic: 'subject_appears_twice',
        specificItems: ['whenFactorisationFails'],
        diagramId: 'nonLinearOccurrenceDiagram',
        practicalId: 'recognising_quadratic_from_rearranging_activity',
        contentKey: 'components'
    },
    {
        id: 'classificationGuide',
        label: 'Classification Guide',
        sectionNumber: 32,
        subTopic: 'subject_appears_twice',
        specificItems: ['classificationGuide'],
        diagramId: 'subjectTwiceClassificationFlowchart',
        practicalId: 'formula_classification_sorting_activity',
        contentKey: 'components'
    },

    // ══════════════════════════════════════════════════════
    // PART 5 — handleCombinedOperationsRearranging  (sections 33–38)
    // ══════════════════════════════════════════════════════

    {
        id: 'sequencingInverseOperations',
        label: 'Sequencing Inverse Operations',
        sectionNumber: 33,
        subTopic: 'combined_operations_rearranging',
        specificItems: ['sequencingInverseOperations'],
        diagramId: 'inverseOperationSequenceChainDiagram',
        practicalId: 'operation_ordering_chain_investigation',
        contentKey: 'components'
    },
    {
        id: 'fractionsWithRoots',
        label: 'Fractions With Roots',
        sectionNumber: 34,
        subTopic: 'combined_operations_rearranging',
        specificItems: ['fractionsWithRoots'],
        diagramId: 'resonantFrequencyLCCircuitDiagram',
        practicalId: 'lc_resonant_frequency_investigation',
        contentKey: 'components'
    },
    {
        id: 'powersWithFractions',
        label: 'Powers With Fractions',
        sectionNumber: 35,
        subTopic: 'combined_operations_rearranging',
        specificItems: ['powersWithFractions'],
        diagramId: 'gravitationalForceDiagram',
        practicalId: 'gravitational_force_rearranging_investigation',
        contentKey: 'components'
    },
    {
        id: 'compoundMultiStepChains',
        label: 'Compound Multi-Step Chains',
        sectionNumber: 36,
        subTopic: 'combined_operations_rearranging',
        specificItems: ['compoundMultiStepChains'],
        diagramId: 'multiStepFormulaChainDiagram',
        practicalId: 'multi_step_formula_unwrapping_activity',
        contentKey: 'components'
    },
    {
        id: 'quadraticFormRearranging',
        label: 'Quadratic Form Rearranging',
        sectionNumber: 37,
        subTopic: 'combined_operations_rearranging',
        specificItems: ['quadraticFormRearranging'],
        diagramId: 'completingTheSquareVertexFormDiagram',
        practicalId: 'completing_the_square_rearranging_activity',
        contentKey: 'components'
    },
    {
        id: 'rearrangingInSimultaneousContext',
        label: 'Rearranging in Simultaneous Equation Context',
        sectionNumber: 38,
        subTopic: 'combined_operations_rearranging',
        specificItems: ['rearrangingInSimultaneousContext'],
        diagramId: 'substitutionMethodSimultaneousDiagram',
        practicalId: 'substitution_method_simultaneous_investigation',
        contentKey: 'components'
    },

    // ══════════════════════════════════════════════════════
    // PART 6 — handleInverseFunctionsRearranging  (sections 39–44)
    // ══════════════════════════════════════════════════════

    {
        id: 'inverseFunctionConcept',
        label: 'Inverse Function Concept',
        sectionNumber: 39,
        subTopic: 'inverse_functions_rearranging',
        specificItems: ['inverseFunctionConcept'],
        diagramId: 'inverseFunctionReflectionDiagram',
        practicalId: 'inverse_function_graphing_investigation',
        contentKey: 'components'
    },
    {
        id: 'logarithmsAsInverseOfExponentials',
        label: 'Logarithms as Inverses of Exponentials',
        sectionNumber: 40,
        subTopic: 'inverse_functions_rearranging',
        specificItems: ['logarithmsAsInverseOfExponentials'],
        diagramId: 'exponentialLogInversePairGraph',
        practicalId: 'compound_interest_time_log_investigation',
        contentKey: 'components'
    },
    {
        id: 'exponentialsAsInverseOfLogarithms',
        label: 'Exponentials as Inverses of Logarithms',
        sectionNumber: 41,
        subTopic: 'inverse_functions_rearranging',
        specificItems: ['exponentialsAsInverseOfLogarithms'],
        diagramId: 'naturalLogExponentialGraphDiagram',
        practicalId: 'ph_scale_exponential_inverse_activity',
        contentKey: 'components'
    },
    {
        id: 'inverseTrigonometricFunctions',
        label: 'Inverse Trigonometric Functions',
        sectionNumber: 42,
        subTopic: 'inverse_functions_rearranging',
        specificItems: ['inverseTrigonometricFunctions'],
        diagramId: 'arcsinArccosTanPrincipalValueDiagram',
        practicalId: 'angle_isolation_inverse_trig_investigation',
        contentKey: 'components'
    },
    {
        id: 'piecewiseInverses',
        label: 'Piecewise and Conditional Inverses',
        sectionNumber: 43,
        subTopic: 'inverse_functions_rearranging',
        specificItems: ['piecewiseInverses'],
        diagramId: 'piecewiseFunctionInverseDiagram',
        practicalId: 'piecewise_inverse_domain_restriction_activity',
        contentKey: 'components'
    },
    {
        id: 'inverseFunctionsInCalculus',
        label: 'Inverse Functions in Calculus',
        sectionNumber: 44,
        subTopic: 'inverse_functions_rearranging',
        specificItems: ['inverseFunctionsInCalculus'],
        diagramId: 'derivativeInverseTrigFunctionsDiagram',
        practicalId: 'inverse_function_derivative_investigation',
        contentKey: 'components'
    },

    // ══════════════════════════════════════════════════════
    // PART 7 — handleCompleteRearrangingStrategy  (sections 45–52)
    // ══════════════════════════════════════════════════════

    {
        id: 'masterDecisionFramework',
        label: 'Master Decision Framework',
        sectionNumber: 45,
        subTopic: 'complete_rearranging_strategy',
        specificItems: ['masterDecisionFramework'],
        diagramId: 'masterRearrangingDecisionFlowchart',
        practicalId: 'formula_classification_decision_tree_activity',
        contentKey: 'components'
    },
    {
        id: 'completeFormulaTaxonomy',
        label: 'Complete Formula Taxonomy',
        sectionNumber: 46,
        subTopic: 'complete_rearranging_strategy',
        specificItems: ['completeFormulaTaxonomy'],
        diagramId: 'formulaTaxonomyTierDiagram',
        practicalId: 'taxonomy_sorting_classification_activity',
        contentKey: 'components'
    },
    {
        id: 'difficultyLadder',
        label: 'Difficulty Ladder',
        sectionNumber: 47,
        subTopic: 'complete_rearranging_strategy',
        specificItems: ['difficultyLadder'],
        diagramId: 'progressiveDifficultyLadderDiagram',
        practicalId: 'levelled_rearranging_challenge_activity',
        contentKey: 'components'
    },
    {
        id: 'universalTechniqueReference',
        label: 'Universal Technique Reference',
        sectionNumber: 48,
        subTopic: 'complete_rearranging_strategy',
        specificItems: ['universalTechniqueReference'],
        diagramId: 'techniqueReferenceTableDiagram',
        practicalId: 'technique_lookup_matching_activity',
        contentKey: 'components'
    },
    {
        id: 'errorCatalogue',
        label: 'Error Catalogue',
        sectionNumber: 49,
        subTopic: 'complete_rearranging_strategy',
        specificItems: ['errorCatalogue'],
        diagramId: 'commonRearrangingErrorsDiagram',
        practicalId: 'error_spotting_correction_investigation',
        contentKey: 'components'
    },
    {
        id: 'crossTopicConnections',
        label: 'Cross-Topic Connections',
        sectionNumber: 50,
        subTopic: 'complete_rearranging_strategy',
        specificItems: ['crossTopicConnections'],
        diagramId: 'mathTopicConnectionWebDiagram',
        practicalId: 'cross_topic_connection_mapping_activity',
        contentKey: 'components'
    },
    {
        id: 'curriculumDesignGuidance',
        label: 'Curriculum Design Guidance',
        sectionNumber: 51,
        subTopic: 'complete_rearranging_strategy',
        specificItems: ['curriculumDesignGuidance'],
        diagramId: 'curriculumProgressionSequenceDiagram',
        practicalId: 'curriculum_sequencing_design_activity',
        contentKey: 'components'
    },
    {
        id: 'masterWorkedExamples',
        label: 'Master Worked Examples',
        sectionNumber: 52,
        subTopic: 'complete_rearranging_strategy',
        specificItems: ['masterWorkedExamples'],
        diagramId: 'sixTierWorkedExamplesDiagram',
        practicalId: 'full_tier_worked_examples_activity',
        contentKey: 'components'
    },



    // ─────────────────────────────────────────────
    // handleCommonFactor
    // ─────────────────────────────────────────────
    {
        id: 'hcf_foundations',
        label: 'HCF — Foundations',
        sectionNumber: 1,
        subTopic: 'common_factor',
        specificItems: ['foundations'],
        diagramId: 'factorTreeDiagram',
        practicalId: 'prime_factorization_investigation',
        contentKey: 'components'
    },
    {
        id: 'hcf_findingTheHCF',
        label: 'Finding the HCF',
        sectionNumber: 2,
        subTopic: 'common_factor',
        specificItems: ['findingTheHCF'],
        diagramId: 'hcfVennDiagram',
        practicalId: 'hcf_listing_method_activity',
        contentKey: 'components'
    },
    {
        id: 'hcf_extractingTheCommonFactor',
        label: 'Extracting the Common Factor',
        sectionNumber: 3,
        subTopic: 'common_factor',
        specificItems: ['extractingTheCommonFactor'],
        diagramId: 'distributiveLawReversal',
        practicalId: 'common_factor_expansion_check',
        contentKey: 'components'
    },
    {
        id: 'hcf_typesOfExpressions',
        label: 'Types of Expressions — HCF',
        sectionNumber: 4,
        subTopic: 'common_factor',
        specificItems: ['typesOfExpressions'],
        diagramId: 'binomialTrinomialStructure',
        practicalId: 'algebraic_terms_sorting_activity',
        contentKey: 'components'
    },
    {
        id: 'hcf_verificationAndChecking',
        label: 'Verification and Checking — HCF',
        sectionNumber: 5,
        subTopic: 'common_factor',
        specificItems: ['verificationAndChecking'],
        diagramId: 'expansionVerificationModel',
        practicalId: 'factorize_and_expand_check_activity',
        contentKey: 'components'
    },
    {
        id: 'hcf_specialCases',
        label: 'Special Cases — HCF',
        sectionNumber: 6,
        subTopic: 'common_factor',
        specificItems: ['specialCases'],
        diagramId: 'negativeHCFSignFlowDiagram',
        practicalId: 'negative_hcf_sign_investigation',
        contentKey: 'components'
    },
    {
        id: 'hcf_commonErrors',
        label: 'Common Errors — HCF',
        sectionNumber: 7,
        subTopic: 'common_factor',
        specificItems: ['commonErrors'],
        diagramId: 'hcfErrorAnnotationDiagram',
        practicalId: 'spot_the_hcf_error_activity',
        contentKey: 'components'
    },
    {
        id: 'hcf_applicationsAndConnections',
        label: 'Applications and Connections — HCF',
        sectionNumber: 8,
        subTopic: 'common_factor',
        specificItems: ['applicationsAndConnections'],
        diagramId: 'zeroProductPropertyDiagram',
        practicalId: 'solve_by_hcf_factorization_activity',
        contentKey: 'components'
    },

    // ─────────────────────────────────────────────
    // handleGrouping
    // ─────────────────────────────────────────────
    {
        id: 'grouping_foundations',
        label: 'Grouping — Foundations',
        sectionNumber: 9,
        subTopic: 'grouping',
        specificItems: ['foundations'],
        diagramId: 'fourTermGroupingModel',
        practicalId: 'grouping_prerequisite_review_activity',
        contentKey: 'components'
    },
    {
        id: 'grouping_fourTermMethod',
        label: 'Four-Term Grouping Method',
        sectionNumber: 10,
        subTopic: 'grouping',
        specificItems: ['fourTermMethod'],
        diagramId: 'fourTermPairingDiagram',
        practicalId: 'four_term_grouping_step_activity',
        contentKey: 'components'
    },
    {
        id: 'grouping_choosingTheRightGrouping',
        label: 'Choosing the Right Grouping',
        sectionNumber: 11,
        subTopic: 'grouping',
        specificItems: ['choosingTheRightGrouping'],
        diagramId: 'termReorderingFlowchart',
        practicalId: 'reorder_and_group_investigation',
        contentKey: 'components'
    },
    {
        id: 'grouping_variationsAndExtensions',
        label: 'Grouping — Variations and Extensions',
        sectionNumber: 12,
        subTopic: 'grouping',
        specificItems: ['variationsAndExtensions'],
        diagramId: 'sixTermGroupingDiagram',
        practicalId: 'six_term_grouping_challenge',
        contentKey: 'components'
    },
    {
        id: 'grouping_patternRecognition',
        label: 'Grouping — Pattern Recognition',
        sectionNumber: 13,
        subTopic: 'grouping',
        specificItems: ['patternRecognition'],
        diagramId: 'groupingSignPatternTable',
        practicalId: 'pattern_matching_grouping_activity',
        contentKey: 'components'
    },
    {
        id: 'grouping_verificationAndCompleteness',
        label: 'Grouping — Verification and Completeness',
        sectionNumber: 14,
        subTopic: 'grouping',
        specificItems: ['verificationAndCompleteness'],
        diagramId: 'groupingExpansionCheckDiagram',
        practicalId: 'grouping_verify_and_extend_activity',
        contentKey: 'components'
    },
    {
        id: 'grouping_commonErrors',
        label: 'Common Errors — Grouping',
        sectionNumber: 15,
        subTopic: 'grouping',
        specificItems: ['commonErrors'],
        diagramId: 'mismatchedBinomialDiagram',
        practicalId: 'spot_the_grouping_error_activity',
        contentKey: 'components'
    },
    {
        id: 'grouping_connectionsAndApplications',
        label: 'Connections and Applications — Grouping',
        sectionNumber: 16,
        subTopic: 'grouping',
        specificItems: ['connectionsAndApplications'],
        diagramId: 'groupingToTrinomialBridgeDiagram',
        practicalId: 'grouping_equation_solving_activity',
        contentKey: 'components'
    },

    // ─────────────────────────────────────────────
    // handleDifferenceOfSquares
    // ─────────────────────────────────────────────
    {
        id: 'dos_foundations',
        label: 'Difference of Squares — Foundations',
        sectionNumber: 17,
        subTopic: 'difference_of_squares',
        specificItems: ['foundations'],
        diagramId: 'differenceOfSquaresGeometricProof',
        practicalId: 'conjugate_pair_expansion_investigation',
        contentKey: 'components'
    },
    {
        id: 'dos_recognizingThePattern',
        label: 'Recognizing the Difference of Squares Pattern',
        sectionNumber: 18,
        subTopic: 'difference_of_squares',
        specificItems: ['recognizingThePattern'],
        diagramId: 'perfectSquareChecklist',
        practicalId: 'identify_difference_of_squares_activity',
        contentKey: 'components'
    },
    {
        id: 'dos_applyingTheIdentity',
        label: 'Applying the Difference of Squares Identity',
        sectionNumber: 19,
        subTopic: 'difference_of_squares',
        specificItems: ['applyingTheIdentity'],
        diagramId: 'dosFactorizationStepDiagram',
        practicalId: 'dos_factorization_drill_activity',
        contentKey: 'components'
    },
    {
        id: 'dos_extensionsAndVariations',
        label: 'Difference of Squares — Extensions and Variations',
        sectionNumber: 20,
        subTopic: 'difference_of_squares',
        specificItems: ['extensionsAndVariations'],
        diagramId: 'repeatedDosTree',
        practicalId: 'nested_difference_of_squares_investigation',
        contentKey: 'components'
    },
    {
        id: 'dos_mentalArithmeticApplications',
        label: 'Mental Arithmetic via Difference of Squares',
        sectionNumber: 21,
        subTopic: 'difference_of_squares',
        specificItems: ['mentalArithmeticApplications'],
        diagramId: 'conjugateProductNumberLine',
        practicalId: 'mental_arithmetic_dos_activity',
        contentKey: 'components'
    },
    {
        id: 'dos_solvingEquations',
        label: 'Solving Equations — Difference of Squares',
        sectionNumber: 22,
        subTopic: 'difference_of_squares',
        specificItems: ['solvingEquations'],
        diagramId: 'dosParabolaRootsDiagram',
        practicalId: 'dos_equation_solving_activity',
        contentKey: 'components'
    },
    {
        id: 'dos_commonErrors',
        label: 'Common Errors — Difference of Squares',
        sectionNumber: 23,
        subTopic: 'difference_of_squares',
        specificItems: ['commonErrors'],
        diagramId: 'sumVsDifferenceSquaresAnnotated',
        practicalId: 'spot_the_dos_error_activity',
        contentKey: 'components'
    },
    {
        id: 'dos_connectionsAndApplications',
        label: 'Connections and Applications — Difference of Squares',
        sectionNumber: 24,
        subTopic: 'difference_of_squares',
        specificItems: ['connectionsAndApplications'],
        diagramId: 'algebraicFractionSimplificationDiagram',
        practicalId: 'dos_rational_expression_activity',
        contentKey: 'components'
    },

    // ─────────────────────────────────────────────
    // handlePerfectSquareTrinomial
    // ─────────────────────────────────────────────
    {
        id: 'pst_foundations',
        label: 'Perfect Square Trinomial — Foundations',
        sectionNumber: 25,
        subTopic: 'perfect_square_trinomial',
        specificItems: ['foundations'],
        diagramId: 'squaredBinomialGeometricArea',
        practicalId: 'binomial_square_expansion_investigation',
        contentKey: 'components'
    },
    {
        id: 'pst_recognizingThePerfectSquareTrinomial',
        label: 'Recognizing Perfect Square Trinomials',
        sectionNumber: 26,
        subTopic: 'perfect_square_trinomial',
        specificItems: ['recognizingThePerfectSquareTrinomial'],
        diagramId: 'pstThreeConditionChecklist',
        practicalId: 'pst_recognition_sorting_activity',
        contentKey: 'components'
    },
    {
        id: 'pst_factorizingPerfectSquareTrinomials',
        label: 'Factorizing Perfect Square Trinomials',
        sectionNumber: 27,
        subTopic: 'perfect_square_trinomial',
        specificItems: ['factorizingPerfectSquareTrinomials'],
        diagramId: 'pstFactoredFormDiagram',
        practicalId: 'pst_factorization_drill_activity',
        contentKey: 'components'
    },
    {
        id: 'pst_distinguishingFromGeneralTrinomials',
        label: 'Distinguishing PST from General Trinomials',
        sectionNumber: 28,
        subTopic: 'perfect_square_trinomial',
        specificItems: ['distinguishingFromGeneralTrinomials'],
        diagramId: 'pstVsGeneralTrinomialComparisonTable',
        practicalId: 'pst_vs_general_classification_activity',
        contentKey: 'components'
    },
    {
        id: 'pst_completingTheSquare',
        label: 'Completing the Square',
        sectionNumber: 29,
        subTopic: 'perfect_square_trinomial',
        specificItems: ['completingTheSquare'],
        diagramId: 'completingTheSquareGeometricModel',
        practicalId: 'completing_the_square_investigation',
        contentKey: 'components'
    },
    {
        id: 'pst_solvingEquations',
        label: 'Solving Equations — Perfect Square Trinomials',
        sectionNumber: 30,
        subTopic: 'perfect_square_trinomial',
        specificItems: ['solvingEquations'],
        diagramId: 'doubleRootParabolaDiagram',
        practicalId: 'pst_equation_solving_activity',
        contentKey: 'components'
    },
    {
        id: 'pst_commonErrors',
        label: 'Common Errors — Perfect Square Trinomials',
        sectionNumber: 31,
        subTopic: 'perfect_square_trinomial',
        specificItems: ['commonErrors'],
        diagramId: 'pstSignErrorAnnotation',
        practicalId: 'spot_the_pst_error_activity',
        contentKey: 'components'
    },
    {
        id: 'pst_connectionsAndApplications',
        label: 'Connections and Applications — PST',
        sectionNumber: 32,
        subTopic: 'perfect_square_trinomial',
        specificItems: ['connectionsAndApplications'],
        diagramId: 'vertexFormParabolaDiagram',
        practicalId: 'vertex_form_conversion_activity',
        contentKey: 'components'
    },

    // ─────────────────────────────────────────────
    // handleTrinomialACMethod
    // ─────────────────────────────────────────────
    {
        id: 'ac_foundations',
        label: 'AC Method — Foundations',
        sectionNumber: 33,
        subTopic: 'trinomial_ac_method',
        specificItems: ['foundations'],
        diagramId: 'trinomialStructureDiagram',
        practicalId: 'monic_vs_nonmonic_classification_activity',
        contentKey: 'components'
    },
    {
        id: 'ac_monicTrinomials',
        label: 'Monic Trinomials (a = 1)',
        sectionNumber: 34,
        subTopic: 'trinomial_ac_method',
        specificItems: ['monicTrinomials'],
        diagramId: 'monicTrinomialFactorPairTable',
        practicalId: 'monic_trinomial_factor_search_activity',
        contentKey: 'components'
    },
    {
        id: 'ac_nonMonicTrinomials',
        label: 'Non-Monic Trinomials — AC Method',
        sectionNumber: 35,
        subTopic: 'trinomial_ac_method',
        specificItems: ['nonMonicTrinomials'],
        diagramId: 'acMethodStepByStepDiagram',
        practicalId: 'ac_method_worked_examples_activity',
        contentKey: 'components'
    },
    {
        id: 'ac_strategiesForFindingPQ',
        label: 'Strategies for Finding the Number Pair',
        sectionNumber: 36,
        subTopic: 'trinomial_ac_method',
        specificItems: ['strategiesForFindingPQ'],
        diagramId: 'signAnalysisACFlowchart',
        practicalId: 'factor_pair_sign_strategy_activity',
        contentKey: 'components'
    },
    {
        id: 'ac_variationsAndExtensions',
        label: 'AC Method — Variations and Extensions',
        sectionNumber: 37,
        subTopic: 'trinomial_ac_method',
        specificItems: ['variationsAndExtensions'],
        diagramId: 'substitutionTrinomialDiagram',
        practicalId: 'hidden_trinomial_substitution_activity',
        contentKey: 'components'
    },
    {
        id: 'ac_alternativeInspectionMethod',
        label: 'Alternative Inspection Method',
        sectionNumber: 38,
        subTopic: 'trinomial_ac_method',
        specificItems: ['alternativeInspectionMethod'],
        diagramId: 'trialAndErrorBracketDiagram',
        practicalId: 'inspection_vs_ac_comparison_activity',
        contentKey: 'components'
    },
    {
        id: 'ac_solvingQuadraticEquations',
        label: 'Solving Quadratic Equations — AC Method',
        sectionNumber: 39,
        subTopic: 'trinomial_ac_method',
        specificItems: ['solvingQuadraticEquations'],
        diagramId: 'quadraticRootsParabolaDiagram',
        practicalId: 'solve_quadratic_by_factorization_activity',
        contentKey: 'components'
    },
    {
        id: 'ac_commonErrors',
        label: 'Common Errors — AC Method',
        sectionNumber: 40,
        subTopic: 'trinomial_ac_method',
        specificItems: ['commonErrors'],
        diagramId: 'acProductSumErrorAnnotation',
        practicalId: 'spot_the_ac_error_activity',
        contentKey: 'components'
    },

    // ─────────────────────────────────────────────
    // handleSumDifferenceCubes
    // ─────────────────────────────────────────────
    {
        id: 'cubes_foundations',
        label: 'Sum and Difference of Cubes — Foundations',
        sectionNumber: 41,
        subTopic: 'sum_difference_cubes',
        specificItems: ['foundations'],
        diagramId: 'cubeIdentityVerificationDiagram',
        practicalId: 'soap_mnemonic_introduction_activity',
        contentKey: 'components'
    },
    {
        id: 'cubes_recognizingCubeExpressions',
        label: 'Recognizing Perfect Cube Expressions',
        sectionNumber: 42,
        subTopic: 'sum_difference_cubes',
        specificItems: ['recognizingCubeExpressions'],
        diagramId: 'perfectCubeReferenceTable',
        practicalId: 'identify_perfect_cubes_activity',
        contentKey: 'components'
    },
    {
        id: 'cubes_applyingTheIdentities',
        label: 'Applying the Sum and Difference of Cubes Identities',
        sectionNumber: 43,
        subTopic: 'sum_difference_cubes',
        specificItems: ['applyingTheIdentities'],
        diagramId: 'cubeIdentityStepDiagram',
        practicalId: 'sum_difference_cubes_drill_activity',
        contentKey: 'components'
    },
    {
        id: 'cubes_trinomialFactorIsIrreducible',
        label: 'Why the Trinomial Factor Is Irreducible',
        sectionNumber: 44,
        subTopic: 'sum_difference_cubes',
        specificItems: ['trinomialFactorIsIrreducible'],
        diagramId: 'discriminantTestCubesTrinomial',
        practicalId: 'irreducibility_discriminant_activity',
        contentKey: 'components'
    },
    {
        id: 'cubes_extensionsAndConnections',
        label: 'Cubes — Extensions and Connections',
        sectionNumber: 45,
        subTopic: 'sum_difference_cubes',
        specificItems: ['extensionsAndConnections'],
        diagramId: 'sixthPowerFactorizationTree',
        practicalId: 'sixth_power_full_factorization_activity',
        contentKey: 'components'
    },
    {
        id: 'cubes_commonErrors',
        label: 'Common Errors — Sum and Difference of Cubes',
        sectionNumber: 46,
        subTopic: 'sum_difference_cubes',
        specificItems: ['commonErrors'],
        diagramId: 'soapSignErrorAnnotation',
        practicalId: 'spot_the_cubes_error_activity',
        contentKey: 'components'
    },
    {
        id: 'cubes_applicationsAndConnections',
        label: 'Applications and Connections — Cubes',
        sectionNumber: 47,
        subTopic: 'sum_difference_cubes',
        specificItems: ['applicationsAndConnections'],
        diagramId: 'cubicEquationRootsDiagram',
        practicalId: 'cubic_equation_solving_activity',
        contentKey: 'components'
    },

    // ─────────────────────────────────────────────
    // handleCompleteFactorization
    // ─────────────────────────────────────────────
    {
        id: 'complete_completenessDefinition',
        label: 'What Complete Factorization Means',
        sectionNumber: 48,
        subTopic: 'complete_factorization',
        specificItems: ['completenessDefinition'],
        diagramId: 'irreducibleFactorDefinitionDiagram',
        practicalId: 'fully_factored_or_not_sorting_activity',
        contentKey: 'components'
    },
    {
        id: 'complete_masterDecisionFlowchart',
        label: 'Master Decision Flowchart',
        sectionNumber: 49,
        subTopic: 'complete_factorization',
        specificItems: ['masterDecisionFlowchart'],
        diagramId: 'factorizationDecisionFlowchart',
        practicalId: 'flowchart_guided_factorization_activity',
        contentKey: 'components'
    },
    {
        id: 'complete_techniquePriorityOrder',
        label: 'Technique Priority Order',
        sectionNumber: 50,
        subTopic: 'complete_factorization',
        specificItems: ['techniquePriorityOrder'],
        diagramId: 'factorizationPriorityLadder',
        practicalId: 'technique_selection_activity',
        contentKey: 'components'
    },
    {
        id: 'complete_multiStepFactorization',
        label: 'Multi-Step Factorization',
        sectionNumber: 51,
        subTopic: 'complete_factorization',
        specificItems: ['multiStepFactorization'],
        diagramId: 'multiStepFactorizationTree',
        practicalId: 'multi_step_factorization_challenge',
        contentKey: 'components'
    },
    {
        id: 'complete_specialSituations',
        label: 'Special Situations in Complete Factorization',
        sectionNumber: 52,
        subTopic: 'complete_factorization',
        specificItems: ['specialSituations'],
        diagramId: 'rationalRootTheoremDiagram',
        practicalId: 'rational_root_theorem_investigation',
        contentKey: 'components'
    },
    {
        id: 'complete_factorizationOverDifferentSets',
        label: 'Factorization Over Different Number Sets',
        sectionNumber: 53,
        subTopic: 'complete_factorization',
        specificItems: ['factorizationOverDifferentSets'],
        diagramId: 'numberSetsFactorizationComparisonTable',
        practicalId: 'real_vs_integer_factorization_activity',
        contentKey: 'components'
    },
    {
        id: 'complete_verificationFramework',
        label: 'Verification Framework',
        sectionNumber: 54,
        subTopic: 'complete_factorization',
        specificItems: ['verificationFramework'],
        diagramId: 'degreeAndCoefficientCheckDiagram',
        practicalId: 'completeness_verification_checklist_activity',
        contentKey: 'components'
    },
    {
        id: 'complete_commonErrors',
        label: 'Common Errors — Complete Factorization',
        sectionNumber: 55,
        subTopic: 'complete_factorization',
        specificItems: ['commonErrors'],
        diagramId: 'prematureStopErrorDiagram',
        practicalId: 'spot_the_incomplete_factorization_activity',
        contentKey: 'components'
    },
    {
        id: 'complete_applicationsOfCompleteFactorization',
        label: 'Applications of Complete Factorization',
        sectionNumber: 56,
        subTopic: 'complete_factorization',
        specificItems: ['applicationsOfCompleteFactorization'],
        diagramId: 'polynomialGraphZerosDiagram',
        practicalId: 'complete_factorization_real_world_activity',
        contentKey: 'components'
    },



    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'linear_equations',
        specificItems: ['foundations'],
        diagramId: 'algebraicVocabularyDiagram',
        practicalId: 'balance_scales_equality_investigation',
        contentKey: 'components'
    },
    {
        id: 'oneStepEquations',
        label: 'One-Step Equations',
        sectionNumber: 2,
        subTopic: 'linear_equations',
        specificItems: ['oneStepEquations'],
        diagramId: 'inverseOperationsDiagram',
        practicalId: 'one_step_balance_activity',
        contentKey: 'components'
    },
    {
        id: 'twoStepEquations',
        label: 'Two-Step Equations',
        sectionNumber: 3,
        subTopic: 'linear_equations',
        specificItems: ['twoStepEquations'],
        diagramId: 'twoStepSolvingFlowchart',
        practicalId: 'two_step_algebra_tiles_activity',
        contentKey: 'components'
    },
    {
        id: 'multiStepEquations',
        label: 'Multi-Step Equations',
        sectionNumber: 4,
        subTopic: 'linear_equations',
        specificItems: ['multiStepEquations'],
        diagramId: 'distributivePropertyDiagram',
        practicalId: 'variables_both_sides_investigation',
        contentKey: 'components'
    },
    {
        id: 'equationsWithFractions',
        label: 'Equations with Fractions',
        sectionNumber: 5,
        subTopic: 'linear_equations',
        specificItems: ['equationsWithFractions'],
        diagramId: 'lcdFractionsDiagram',
        practicalId: 'clearing_fractions_lcd_activity',
        contentKey: 'components'
    },
    {
        id: 'equationsWithDecimals',
        label: 'Equations with Decimals',
        sectionNumber: 6,
        subTopic: 'linear_equations',
        specificItems: ['equationsWithDecimals'],
        diagramId: 'decimalPlaceValueDiagram',
        practicalId: 'clearing_decimals_investigation',
        contentKey: 'components'
    },
    {
        id: 'literalEquations',
        label: 'Literal Equations and Formulas',
        sectionNumber: 7,
        subTopic: 'linear_equations',
        specificItems: ['literalEquations'],
        diagramId: 'formulaRearrangementDiagram',
        practicalId: 'science_formula_rearrangement_activity',
        contentKey: 'components'
    },
    {
        id: 'linearInequalities',
        label: 'Linear Inequalities',
        sectionNumber: 8,
        subTopic: 'linear_equations',
        specificItems: ['linearInequalities'],
        diagramId: 'numberLineInequalityDiagram',
        practicalId: 'compound_inequality_number_line_investigation',
        contentKey: 'components'
    },
    {
        id: 'absoluteValue',
        label: 'Absolute Value Equations and Inequalities',
        sectionNumber: 9,
        subTopic: 'linear_equations',
        specificItems: ['absoluteValue'],
        diagramId: 'absoluteValueNumberLineDiagram',
        practicalId: 'absolute_value_distance_investigation',
        contentKey: 'components'
    },
    {
        id: 'systemsOfLinearEquations',
        label: 'Systems of Linear Equations',
        sectionNumber: 10,
        subTopic: 'linear_equations',
        specificItems: ['systemsOfLinearEquations'],
        diagramId: 'systemsIntersectionGraph',
        practicalId: 'substitution_elimination_comparison_activity',
        contentKey: 'components'
    },
    {
        id: 'graphingLinearEquations',
        label: 'Graphing Linear Equations',
        sectionNumber: 11,
        subTopic: 'linear_equations',
        specificItems: ['graphingLinearEquations'],
        diagramId: 'slopeInterceptGraph',
        practicalId: 'gradient_intercept_graphing_investigation',
        contentKey: 'components'
    },
    {
        id: 'wordProblems',
        label: 'Word Problems and Applications',
        sectionNumber: 12,
        subTopic: 'linear_equations',
        specificItems: ['wordProblems'],
        diagramId: 'rateDistanceTimeDiagram',
        practicalId: 'mixture_rate_word_problem_investigation',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'quadratic_equations',
        specificItems: ['foundations'],
        diagramId: 'parabolaAnatomyDiagram',
        practicalId: 'parabola_exploration_investigation',
        contentKey: 'components'
    },
    {
        id: 'factoringMethods',
        label: 'Factoring Methods',
        sectionNumber: 2,
        subTopic: 'quadratic_equations',
        specificItems: ['factoringMethods'],
        diagramId: 'factorTreeDiagram',
        practicalId: 'algebra_tiles_factoring_activity',
        contentKey: 'components'
    },
    {
        id: 'completingTheSquare',
        label: 'Completing the Square',
        sectionNumber: 3,
        subTopic: 'quadratic_equations',
        specificItems: ['completingTheSquare'],
        diagramId: 'completingSquareAreaModel',
        practicalId: 'completing_square_geometric_investigation',
        contentKey: 'components'
    },
    {
        id: 'quadraticFormula',
        label: 'The Quadratic Formula',
        sectionNumber: 4,
        subTopic: 'quadratic_equations',
        specificItems: ['quadraticFormula'],
        diagramId: 'quadraticFormulaDerivationDiagram',
        practicalId: 'quadratic_formula_discovery_activity',
        contentKey: 'components'
    },
    {
        id: 'discriminant',
        label: 'The Discriminant',
        sectionNumber: 5,
        subTopic: 'quadratic_equations',
        specificItems: ['discriminant'],
        diagramId: 'discriminantNatureOfRootsDiagram',
        practicalId: 'discriminant_graph_investigation',
        contentKey: 'components'
    },
    {
        id: 'complexRoots',
        label: 'Complex and Imaginary Roots',
        sectionNumber: 6,
        subTopic: 'quadratic_equations',
        specificItems: ['complexRoots'],
        diagramId: 'complexPlaneDiagram',
        practicalId: 'imaginary_numbers_introduction_activity',
        contentKey: 'components'
    },
    {
        id: 'vietasFormulas',
        label: "Vieta's Formulas",
        sectionNumber: 7,
        subTopic: 'quadratic_equations',
        specificItems: ['vietasFormulas'],
        diagramId: 'sumProductRootsDiagram',
        practicalId: 'sum_product_roots_investigation',
        contentKey: 'components'
    },
    {
        id: 'graphingQuadratics',
        label: 'Graphing Quadratic Functions',
        sectionNumber: 8,
        subTopic: 'quadratic_equations',
        specificItems: ['graphingQuadratics'],
        diagramId: 'parabolaTransformationsDiagram',
        practicalId: 'vertex_form_graphing_investigation',
        contentKey: 'components'
    },
    {
        id: 'quadraticInequalities',
        label: 'Quadratic Inequalities',
        sectionNumber: 9,
        subTopic: 'quadratic_equations',
        specificItems: ['quadraticInequalities'],
        diagramId: 'parabolaSignChartDiagram',
        practicalId: 'quadratic_inequality_sign_analysis_activity',
        contentKey: 'components'
    },
    {
        id: 'specialSolutionMethods',
        label: 'Special Solution Methods',
        sectionNumber: 10,
        subTopic: 'quadratic_equations',
        specificItems: ['specialSolutionMethods'],
        diagramId: 'uSubstitutionDiagram',
        practicalId: 'biquadratic_substitution_investigation',
        contentKey: 'components'
    },
    {
        id: 'simultaneousLinearAndQuadratic',
        label: 'Simultaneous Linear and Quadratic Equations',
        sectionNumber: 11,
        subTopic: 'quadratic_equations',
        specificItems: ['simultaneousLinearAndQuadratic'],
        diagramId: 'lineParabolaIntersectionDiagram',
        practicalId: 'line_meets_parabola_investigation',
        contentKey: 'components'
    },
    {
        id: 'realLifeApplications',
        label: 'Real-Life Applications',
        sectionNumber: 12,
        subTopic: 'quadratic_equations',
        specificItems: ['realLifeApplications'],
        diagramId: 'projectileMotionDiagram',
        practicalId: 'projectile_motion_optimisation_investigation',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'polynomial_equations',
        specificItems: ['foundations'],
        diagramId: 'polynomialAnatomyDiagram',
        practicalId: 'polynomial_degree_classification_activity',
        contentKey: 'components'
    },
    {
        id: 'polynomialOperations',
        label: 'Polynomial Operations',
        sectionNumber: 2,
        subTopic: 'polynomial_equations',
        specificItems: ['polynomialOperations'],
        diagramId: 'longDivisionAlgorithmDiagram',
        practicalId: 'synthetic_vs_long_division_investigation',
        contentKey: 'components'
    },
    {
        id: 'remainderAndFactorTheorems',
        label: 'Remainder and Factor Theorems',
        sectionNumber: 3,
        subTopic: 'polynomial_equations',
        specificItems: ['remainderAndFactorTheorems'],
        diagramId: 'remainderTheoremDiagram',
        practicalId: 'factor_theorem_root_testing_activity',
        contentKey: 'components'
    },
    {
        id: 'findingRoots',
        label: 'Finding Roots',
        sectionNumber: 4,
        subTopic: 'polynomial_equations',
        specificItems: ['findingRoots'],
        diagramId: 'rationalRootCandidatesDiagram',
        practicalId: 'rational_root_theorem_investigation',
        contentKey: 'components'
    },
    {
        id: 'factoringPolynomials',
        label: 'Factoring Polynomials',
        sectionNumber: 5,
        subTopic: 'polynomial_equations',
        specificItems: ['factoringPolynomials'],
        diagramId: 'sumDifferenceOfCubesDiagram',
        practicalId: 'complete_factoring_strategy_activity',
        contentKey: 'components'
    },
    {
        id: 'graphingPolynomials',
        label: 'Graphing Polynomial Functions',
        sectionNumber: 6,
        subTopic: 'polynomial_equations',
        specificItems: ['graphingPolynomials'],
        diagramId: 'polynomialEndBehaviourDiagram',
        practicalId: 'multiplicity_and_graph_behaviour_investigation',
        contentKey: 'components'
    },
    {
        id: 'solvingPolynomialEquations',
        label: 'Solving Polynomial Equations',
        sectionNumber: 7,
        subTopic: 'polynomial_equations',
        specificItems: ['solvingPolynomialEquations'],
        diagramId: 'cubicQuarticSolutionFlowchart',
        practicalId: 'cubic_roots_graphical_numerical_investigation',
        contentKey: 'components'
    },
    {
        id: 'polynomialIdentities',
        label: 'Polynomial Identities and Special Forms',
        sectionNumber: 8,
        subTopic: 'polynomial_equations',
        specificItems: ['polynomialIdentities'],
        diagramId: 'binomialTheoremPascalTriangle',
        practicalId: 'binomial_expansion_pascals_triangle_activity',
        contentKey: 'components'
    },
    {
        id: 'polynomialFunctionProperties',
        label: 'Polynomial Function Properties',
        sectionNumber: 9,
        subTopic: 'polynomial_equations',
        specificItems: ['polynomialFunctionProperties'],
        diagramId: 'evenOddFunctionSymmetryDiagram',
        practicalId: 'even_odd_function_symmetry_investigation',
        contentKey: 'components'
    },
    {
        id: 'systemsInvolvingPolynomials',
        label: 'Systems Involving Polynomials',
        sectionNumber: 10,
        subTopic: 'polynomial_equations',
        specificItems: ['systemsInvolvingPolynomials'],
        diagramId: 'polynomialIntersectionDiagram',
        practicalId: 'polynomial_intersection_graphical_activity',
        contentKey: 'components'
    },
    {
        id: 'realLifeApplications',
        label: 'Real-Life Applications',
        sectionNumber: 11,
        subTopic: 'polynomial_equations',
        specificItems: ['realLifeApplications'],
        diagramId: 'openBoxVolumeDiagram',
        practicalId: 'open_box_volume_optimisation_investigation',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'rational_equations',
        specificItems: ['foundations'],
        diagramId: 'rationalExpressionAnatomyDiagram',
        practicalId: 'excluded_values_domain_activity',
        contentKey: 'components'
    },
    {
        id: 'simplifyingRationalExpressions',
        label: 'Simplifying Rational Expressions',
        sectionNumber: 2,
        subTopic: 'rational_equations',
        specificItems: ['simplifyingRationalExpressions'],
        diagramId: 'factorCancelDiagram',
        practicalId: 'rational_expression_simplification_investigation',
        contentKey: 'components'
    },
    {
        id: 'solvingRationalEquations',
        label: 'Solving Rational Equations',
        sectionNumber: 3,
        subTopic: 'rational_equations',
        specificItems: ['solvingRationalEquations'],
        diagramId: 'clearingDenominatorsFlowchart',
        practicalId: 'extraneous_solutions_checking_activity',
        contentKey: 'components'
    },
    {
        id: 'proportionsAndVariation',
        label: 'Proportions and Variation',
        sectionNumber: 4,
        subTopic: 'rational_equations',
        specificItems: ['proportionsAndVariation'],
        diagramId: 'directInverseVariationGraph',
        practicalId: 'direct_inverse_variation_investigation',
        contentKey: 'components'
    },
    {
        id: 'graphingRationalFunctions',
        label: 'Graphing Rational Functions',
        sectionNumber: 5,
        subTopic: 'rational_equations',
        specificItems: ['graphingRationalFunctions'],
        diagramId: 'asymptolesAndHolesDiagram',
        practicalId: 'asymptote_hole_graphing_investigation',
        contentKey: 'components'
    },
    {
        id: 'partialFractions',
        label: 'Partial Fractions',
        sectionNumber: 6,
        subTopic: 'rational_equations',
        specificItems: ['partialFractions'],
        diagramId: 'partialFractionDecompositionDiagram',
        practicalId: 'partial_fraction_decomposition_activity',
        contentKey: 'components'
    },
    {
        id: 'rationalInequalities',
        label: 'Rational Inequalities',
        sectionNumber: 7,
        subTopic: 'rational_equations',
        specificItems: ['rationalInequalities'],
        diagramId: 'rationalInequalitySignChart',
        practicalId: 'sign_chart_rational_inequality_investigation',
        contentKey: 'components'
    },
    {
        id: 'specialTypes',
        label: 'Special Rational Equation Types',
        sectionNumber: 8,
        subTopic: 'rational_equations',
        specificItems: ['specialTypes'],
        diagramId: 'complexFractionSimplificationDiagram',
        practicalId: 'complex_fraction_equation_activity',
        contentKey: 'components'
    },
    {
        id: 'realLifeApplications',
        label: 'Real-Life Applications',
        sectionNumber: 9,
        subTopic: 'rational_equations',
        specificItems: ['realLifeApplications'],
        diagramId: 'workRatePipesDiagram',
        practicalId: 'work_rate_mixture_investigation',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'radical_equations',
        specificItems: ['foundations'],
        diagramId: 'radicalNotationAnatomyDiagram',
        practicalId: 'nth_root_exploration_activity',
        contentKey: 'components'
    },
    {
        id: 'simplifyingRadicals',
        label: 'Simplifying Radicals',
        sectionNumber: 2,
        subTopic: 'radical_equations',
        specificItems: ['simplifyingRadicals'],
        diagramId: 'productQuotientPropertyDiagram',
        practicalId: 'simplest_radical_form_investigation',
        contentKey: 'components'
    },
    {
        id: 'operationsWithRadicals',
        label: 'Operations with Radicals',
        sectionNumber: 3,
        subTopic: 'radical_equations',
        specificItems: ['operationsWithRadicals'],
        diagramId: 'likeRadicalsCombiningDiagram',
        practicalId: 'rationalising_conjugates_activity',
        contentKey: 'components'
    },
    {
        id: 'solvingSquareRootEquations',
        label: 'Solving Square Root Equations',
        sectionNumber: 4,
        subTopic: 'radical_equations',
        specificItems: ['solvingSquareRootEquations'],
        diagramId: 'isolateAndSquareDiagram',
        practicalId: 'square_root_equation_check_investigation',
        contentKey: 'components'
    },
    {
        id: 'solvingHigherRootEquations',
        label: 'Solving Higher Root Equations',
        sectionNumber: 5,
        subTopic: 'radical_equations',
        specificItems: ['solvingHigherRootEquations'],
        diagramId: 'cubeRootEquationDiagram',
        practicalId: 'fractional_exponent_equation_activity',
        contentKey: 'components'
    },
    {
        id: 'equationsWithMultipleRadicals',
        label: 'Equations with Multiple Radicals',
        sectionNumber: 6,
        subTopic: 'radical_equations',
        specificItems: ['equationsWithMultipleRadicals'],
        diagramId: 'doubleRadicalIsolationDiagram',
        practicalId: 'two_radical_equation_investigation',
        contentKey: 'components'
    },
    {
        id: 'radicalInequalities',
        label: 'Radical Inequalities',
        sectionNumber: 7,
        subTopic: 'radical_equations',
        specificItems: ['radicalInequalities'],
        diagramId: 'radicalInequalityDomainDiagram',
        practicalId: 'radical_inequality_domain_investigation',
        contentKey: 'components'
    },
    {
        id: 'graphingRadicalFunctions',
        label: 'Graphing Radical Functions',
        sectionNumber: 8,
        subTopic: 'radical_equations',
        specificItems: ['graphingRadicalFunctions'],
        diagramId: 'squareRootTransformationsDiagram',
        practicalId: 'radical_function_transformations_investigation',
        contentKey: 'components'
    },
    {
        id: 'specialTypesAndTechniques',
        label: 'Special Types and Techniques',
        sectionNumber: 9,
        subTopic: 'radical_equations',
        specificItems: ['specialTypesAndTechniques'],
        diagramId: 'uSubstitutionRadicalDiagram',
        practicalId: 'radical_substitution_hidden_quadratic_activity',
        contentKey: 'components'
    },
    {
        id: 'extraneousSolutionAnalysis',
        label: 'Extraneous Solution Analysis',
        sectionNumber: 10,
        subTopic: 'radical_equations',
        specificItems: ['extraneousSolutionAnalysis'],
        diagramId: 'extraneousSolutionGraphDiagram',
        practicalId: 'extraneous_solution_graphical_investigation',
        contentKey: 'components'
    },
    {
        id: 'realLifeApplications',
        label: 'Real-Life Applications',
        sectionNumber: 11,
        subTopic: 'radical_equations',
        specificItems: ['realLifeApplications'],
        diagramId: 'pythagoreanDistanceDiagram',
        practicalId: 'pendulum_physics_radical_investigation',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'translation',
        specificItems: ['foundations'],
        diagramId: 'translationVectorDiagram',
        practicalId: 'coordinate_plane_slide_investigation',
        contentKey: 'components'
    },
    {
        id: 'coordinateRules',
        label: 'Coordinate Rules',
        sectionNumber: 2,
        subTopic: 'translation',
        specificItems: ['coordinateRules'],
        diagramId: 'translationCoordinateGrid',
        practicalId: 'translation_rule_discovery',
        contentKey: 'components'
    },
    {
        id: 'translatingGeometricFigures',
        label: 'Translating Geometric Figures',
        sectionNumber: 3,
        subTopic: 'translation',
        specificItems: ['translatingGeometricFigures'],
        diagramId: 'translatedPolygonDiagram',
        practicalId: 'shape_slide_mapping_activity',
        contentKey: 'components'
    },
    {
        id: 'preservedProperties',
        label: 'Properties Preserved Under Translation',
        sectionNumber: 4,
        subTopic: 'translation',
        specificItems: ['preservedProperties'],
        diagramId: 'translationCongruenceDiagram',
        practicalId: 'isometry_properties_investigation',
        contentKey: 'components'
    },
    {
        id: 'translationVectors',
        label: 'Translation Vectors in Depth',
        sectionNumber: 5,
        subTopic: 'translation',
        specificItems: ['translationVectors'],
        diagramId: 'columnVectorRepresentation',
        practicalId: 'vector_magnitude_direction_activity',
        contentKey: 'components'
    },
    {
        id: 'translationsOnGrid',
        label: 'Translations on the Coordinate Grid',
        sectionNumber: 6,
        subTopic: 'translation',
        specificItems: ['translationsOnGrid'],
        diagramId: 'translationGridPlot',
        practicalId: 'graphing_translations_activity',
        contentKey: 'components'
    },
    {
        id: 'translationsAndFunctions',
        label: 'Translations and Functions',
        sectionNumber: 7,
        subTopic: 'translation',
        specificItems: ['translationsAndFunctions'],
        diagramId: 'functionHorizontalVerticalShiftDiagram',
        practicalId: 'parent_function_shift_investigation',
        contentKey: 'components'
    },
    {
        id: 'compositionOfTranslations',
        label: 'Composition of Translations',
        sectionNumber: 8,
        subTopic: 'translation',
        specificItems: ['compositionOfTranslations'],
        diagramId: 'composedTranslationVectorDiagram',
        practicalId: 'translation_composition_activity',
        contentKey: 'components'
    },
    {
        id: 'translationsInContexts',
        label: 'Translations in Different Contexts',
        sectionNumber: 9,
        subTopic: 'translation',
        specificItems: ['translationsInContexts'],
        diagramId: 'tessellationTranslationPattern',
        practicalId: 'tessellation_design_investigation',
        contentKey: 'components'
    },
    {
        id: 'specialCasesAndExtensions',
        label: 'Special Cases and Extensions',
        sectionNumber: 10,
        subTopic: 'translation',
        specificItems: ['specialCasesAndExtensions'],
        diagramId: 'translationalSymmetryPattern',
        practicalId: 'zero_vector_identity_exploration',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'reflection',
        specificItems: ['foundations'],
        diagramId: 'mirrorLineDiagram',
        practicalId: 'fold_symmetry_investigation',
        contentKey: 'components'
    },
    {
        id: 'standardLinesOfReflection',
        label: 'Standard Lines of Reflection',
        sectionNumber: 2,
        subTopic: 'reflection',
        specificItems: ['standardLinesOfReflection'],
        diagramId: 'standardMirrorLinesDiagram',
        practicalId: 'coordinate_reflection_rules_activity',
        contentKey: 'components'
    },
    {
        id: 'reflectingGeometricFigures',
        label: 'Reflecting Geometric Figures',
        sectionNumber: 3,
        subTopic: 'reflection',
        specificItems: ['reflectingGeometricFigures'],
        diagramId: 'reflectedPolygonDiagram',
        practicalId: 'shape_flip_mapping_activity',
        contentKey: 'components'
    },
    {
        id: 'properties',
        label: 'Properties Preserved and Reversed',
        sectionNumber: 4,
        subTopic: 'reflection',
        specificItems: ['properties'],
        diagramId: 'orientationReversalDiagram',
        practicalId: 'chirality_and_handedness_investigation',
        contentKey: 'components'
    },
    {
        id: 'lineSymmetryInShapes',
        label: 'Line Symmetry in Shapes',
        sectionNumber: 5,
        subTopic: 'reflection',
        specificItems: ['lineSymmetryInShapes'],
        diagramId: 'linesOfSymmetryByShapeDiagram',
        practicalId: 'symmetry_fold_test_activity',
        contentKey: 'components'
    },
    {
        id: 'obliqueReflections',
        label: 'Oblique Lines of Reflection',
        sectionNumber: 6,
        subTopic: 'reflection',
        specificItems: ['obliqueReflections'],
        diagramId: 'obliqueReflectionConstruction',
        practicalId: 'perpendicular_bisector_construction_activity',
        contentKey: 'components'
    },
    {
        id: 'compositionOfReflections',
        label: 'Composition of Reflections',
        sectionNumber: 7,
        subTopic: 'reflection',
        specificItems: ['compositionOfReflections'],
        diagramId: 'doubleReflectionTranslationDiagram',
        practicalId: 'double_reflection_exploration',
        contentKey: 'components'
    },
    {
        id: 'connectionsToOtherTransformations',
        label: 'Connections to Other Transformations',
        sectionNumber: 8,
        subTopic: 'reflection',
        specificItems: ['connectionsToOtherTransformations'],
        diagramId: 'inverseFunctionReflectionGraph',
        practicalId: 'even_odd_function_symmetry_investigation',
        contentKey: 'components'
    },
    {
        id: 'findingTheLineOfReflection',
        label: 'Finding the Line of Reflection',
        sectionNumber: 9,
        subTopic: 'reflection',
        specificItems: ['findingTheLineOfReflection'],
        diagramId: 'midpointMirrorLineDiagram',
        practicalId: 'mirror_line_construction_activity',
        contentKey: 'components'
    },
    {
        id: 'specialCasesAndApplications',
        label: 'Special Cases and Applications',
        sectionNumber: 10,
        subTopic: 'reflection',
        specificItems: ['specialCasesAndApplications'],
        diagramId: 'reflectionMatrixDiagram',
        practicalId: 'real_world_mirror_optics_investigation',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'rotation',
        specificItems: ['foundations'],
        diagramId: 'rotationCenterAngleDiagram',
        practicalId: 'rotation_vocabulary_exploration',
        contentKey: 'components'
    },
    {
        id: 'rotationsAboutOrigin',
        label: 'Rotations About the Origin',
        sectionNumber: 2,
        subTopic: 'rotation',
        specificItems: ['rotationsAboutOrigin'],
        diagramId: 'standardRotationRulesDiagram',
        practicalId: 'ninety_degree_rotation_coordinate_activity',
        contentKey: 'components'
    },
    {
        id: 'rotationsAboutGeneralCenter',
        label: 'Rotations About a Non-Origin Center',
        sectionNumber: 3,
        subTopic: 'rotation',
        specificItems: ['rotationsAboutGeneralCenter'],
        diagramId: 'nonOriginRotationDiagram',
        practicalId: 'translate_rotate_translate_investigation',
        contentKey: 'components'
    },
    {
        id: 'rotatingGeometricFigures',
        label: 'Rotating Geometric Figures',
        sectionNumber: 4,
        subTopic: 'rotation',
        specificItems: ['rotatingGeometricFigures'],
        diagramId: 'rotatedPolygonDiagram',
        practicalId: 'shape_turn_mapping_activity',
        contentKey: 'components'
    },
    {
        id: 'rotationalSymmetry',
        label: 'Rotational Symmetry',
        sectionNumber: 5,
        subTopic: 'rotation',
        specificItems: ['rotationalSymmetry'],
        diagramId: 'rotationalSymmetryOrderDiagram',
        practicalId: 'symmetry_order_investigation',
        contentKey: 'components'
    },
    {
        id: 'preservedProperties',
        label: 'Properties Preserved Under Rotation',
        sectionNumber: 6,
        subTopic: 'rotation',
        specificItems: ['preservedProperties'],
        diagramId: 'rotationIsometryDiagram',
        practicalId: 'rotation_congruence_verification_activity',
        contentKey: 'components'
    },
    {
        id: 'compositionOfRotations',
        label: 'Composition of Rotations',
        sectionNumber: 7,
        subTopic: 'rotation',
        specificItems: ['compositionOfRotations'],
        diagramId: 'composedRotationDiagram',
        practicalId: 'double_rotation_exploration',
        contentKey: 'components'
    },
    {
        id: 'rotationsAndComplexNumbers',
        label: 'Rotations and Complex Numbers',
        sectionNumber: 8,
        subTopic: 'rotation',
        specificItems: ['rotationsAndComplexNumbers'],
        diagramId: 'complexPlaneRotationDiagram',
        practicalId: 'multiplication_by_i_rotation_investigation',
        contentKey: 'components'
    },
    {
        id: 'rotationMatrices',
        label: 'Rotation Matrices',
        sectionNumber: 9,
        subTopic: 'rotation',
        specificItems: ['rotationMatrices'],
        diagramId: 'rotationMatrixDiagram',
        practicalId: 'matrix_multiplication_rotation_activity',
        contentKey: 'components'
    },
    {
        id: 'specialCasesAndApplications',
        label: 'Special Cases and Applications',
        sectionNumber: 10,
        subTopic: 'rotation',
        specificItems: ['specialCasesAndApplications'],
        diagramId: 'clockBearingRotationDiagram',
        practicalId: 'real_world_rotation_engineering_investigation',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'dilation',
        specificItems: ['foundations'],
        diagramId: 'dilationCenterScaleFactorDiagram',
        practicalId: 'enlargement_reduction_exploration',
        contentKey: 'components'
    },
    {
        id: 'coordinateRules',
        label: 'Coordinate Rules',
        sectionNumber: 2,
        subTopic: 'dilation',
        specificItems: ['coordinateRules'],
        diagramId: 'dilationCoordinateRuleDiagram',
        practicalId: 'scale_factor_coordinate_activity',
        contentKey: 'components'
    },
    {
        id: 'dilatingGeometricFigures',
        label: 'Dilating Geometric Figures',
        sectionNumber: 3,
        subTopic: 'dilation',
        specificItems: ['dilatingGeometricFigures'],
        diagramId: 'dilatedPolygonDiagram',
        practicalId: 'shape_resize_mapping_activity',
        contentKey: 'components'
    },
    {
        id: 'properties',
        label: 'Properties Preserved and Changed',
        sectionNumber: 4,
        subTopic: 'dilation',
        specificItems: ['properties'],
        diagramId: 'dilationNonIsometryDiagram',
        practicalId: 'similarity_vs_congruence_investigation',
        contentKey: 'components'
    },
    {
        id: 'scaleFactor',
        label: 'Scale Factor and Similarity',
        sectionNumber: 5,
        subTopic: 'dilation',
        specificItems: ['scaleFactor'],
        diagramId: 'similarFiguresScaleFactorDiagram',
        practicalId: 'perimeter_area_scale_factor_investigation',
        contentKey: 'components'
    },
    {
        id: 'dilationsOfFunctions',
        label: 'Dilations of Functions',
        sectionNumber: 6,
        subTopic: 'dilation',
        specificItems: ['dilationsOfFunctions'],
        diagramId: 'verticalHorizontalDilationFunctionGraph',
        practicalId: 'function_stretch_compression_activity',
        contentKey: 'components'
    },
    {
        id: 'dilationAndSimilarity',
        label: 'Dilation and Similarity',
        sectionNumber: 7,
        subTopic: 'dilation',
        specificItems: ['dilationAndSimilarity'],
        diagramId: 'triangleSimilarityCriteriaDiagram',
        practicalId: 'similar_triangle_dilation_investigation',
        contentKey: 'components'
    },
    {
        id: 'compositionWithDilations',
        label: 'Composition with Dilations',
        sectionNumber: 8,
        subTopic: 'dilation',
        specificItems: ['compositionWithDilations'],
        diagramId: 'spiralSimilarityDiagram',
        practicalId: 'dilation_composition_exploration',
        contentKey: 'components'
    },
    {
        id: 'findingCenterOfDilation',
        label: 'Finding the Center of Dilation',
        sectionNumber: 9,
        subTopic: 'dilation',
        specificItems: ['findingCenterOfDilation'],
        diagramId: 'centerOfDilationConstructionDiagram',
        practicalId: 'corresponding_rays_center_activity',
        contentKey: 'components'
    },
    {
        id: 'applicationsOfDilation',
        label: 'Applications of Dilation',
        sectionNumber: 10,
        subTopic: 'dilation',
        specificItems: ['applicationsOfDilation'],
        diagramId: 'mapScaleAndBlueprintDiagram',
        practicalId: 'map_scale_real_world_investigation',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'composition',
        specificItems: ['foundations'],
        diagramId: 'compositionNotationDiagram',
        practicalId: 'sequential_transformation_exploration',
        contentKey: 'components'
    },
    {
        id: 'specificCompositions',
        label: 'Composition of Specific Transformation Pairs',
        sectionNumber: 2,
        subTopic: 'composition',
        specificItems: ['specificCompositions'],
        diagramId: 'compositionPairsResultsDiagram',
        practicalId: 'double_reflection_parallel_intersecting_investigation',
        contentKey: 'components'
    },
    {
        id: 'glideReflections',
        label: 'Glide Reflections',
        sectionNumber: 3,
        subTopic: 'composition',
        specificItems: ['glideReflections'],
        diagramId: 'glideReflectionFootprintDiagram',
        practicalId: 'footprint_pattern_glide_reflection_activity',
        contentKey: 'components'
    },
    {
        id: 'fourIsometriesTheorem',
        label: 'The Four Isometries Theorem',
        sectionNumber: 4,
        subTopic: 'composition',
        specificItems: ['fourIsometriesTheorem'],
        diagramId: 'fourIsometriesClassificationDiagram',
        practicalId: 'isometry_classification_investigation',
        contentKey: 'components'
    },
    {
        id: 'performingCompositionsOnCoordinates',
        label: 'Performing Compositions on Coordinates',
        sectionNumber: 5,
        subTopic: 'composition',
        specificItems: ['performingCompositionsOnCoordinates'],
        diagramId: 'stepByStepCompositionCoordinateDiagram',
        practicalId: 'composition_coordinate_calculation_activity',
        contentKey: 'components'
    },
    {
        id: 'inverseTransformations',
        label: 'Inverse Transformations',
        sectionNumber: 6,
        subTopic: 'composition',
        specificItems: ['inverseTransformations'],
        diagramId: 'inverseTransformationUndoDiagram',
        practicalId: 'undo_transformation_sequence_activity',
        contentKey: 'components'
    },
    {
        id: 'symmetryGroups',
        label: 'Symmetry Groups',
        sectionNumber: 7,
        subTopic: 'composition',
        specificItems: ['symmetryGroups'],
        diagramId: 'dihedralCyclicGroupDiagram',
        practicalId: 'regular_polygon_symmetry_group_investigation',
        contentKey: 'components'
    },
    {
        id: 'matrixRepresentations',
        label: 'Matrix Representations of Compositions',
        sectionNumber: 8,
        subTopic: 'composition',
        specificItems: ['matrixRepresentations'],
        diagramId: 'homogeneousCoordinateMatrixDiagram',
        practicalId: 'matrix_composition_multiplication_activity',
        contentKey: 'components'
    },
    {
        id: 'identifyingEquivalentTransformation',
        label: 'Identifying a Single Equivalent Transformation',
        sectionNumber: 9,
        subTopic: 'composition',
        specificItems: ['identifyingEquivalentTransformation'],
        diagramId: 'equivalentSingleTransformationDiagram',
        practicalId: 'composition_simplification_investigation',
        contentKey: 'components'
    },
    {
        id: 'applicationsOfComposition',
        label: 'Applications of Composition',
        sectionNumber: 10,
        subTopic: 'composition',
        specificItems: ['applicationsOfComposition'],
        diagramId: 'computerGraphicsTransformationPipelineDiagram',
        practicalId: 'robotics_kinematics_composition_investigation',
        contentKey: 'components'
    },




    {
        id: 'cv_foundations',
        label: 'Column Vector Foundations',
        sectionNumber: 1,
        subTopic: 'column_vectors',
        specificItems: ['foundations'],
        diagramId: 'columnVectorComponentDiagram',       // labelled arrow showing x and y components on a grid
        practicalId: 'vector_notation_introduction',     // students write column vectors for physical displacements
        contentKey: 'components'
    },
    {
        id: 'cv_readingAndWriting',
        label: 'Reading and Writing Column Vectors',
        sectionNumber: 2,
        subTopic: 'column_vectors',
        specificItems: ['readingAndWriting'],
        diagramId: 'gridArrowToColumnVector',            // grid showing arrows with start/end points labelled
        practicalId: 'reading_vectors_from_grid_activity', // students read and write vectors from printed grids
        contentKey: 'components'
    },
    {
        id: 'cv_translationVectors',
        label: 'Translation Vectors',
        sectionNumber: 3,
        subTopic: 'column_vectors',
        specificItems: ['translationVectors'],
        diagramId: 'translationShapeDiagram',            // shape and its image under a translation with vector shown
        practicalId: 'translation_mapping_investigation', // students apply and find translation vectors for shapes
        contentKey: 'components'
    },
    {
        id: 'cv_equalityOfVectors',
        label: 'Equality of Vectors',
        sectionNumber: 4,
        subTopic: 'column_vectors',
        specificItems: ['equalityOfVectors'],
        diagramId: 'equalVectorsParallelArrows',         // multiple equal vectors drawn in different positions
        practicalId: 'vector_equality_matching_task',    // students match equal vectors drawn at different positions
        contentKey: 'components'
    },
    {
        id: 'cv_negativeVector',
        label: 'Negative of a Vector',
        sectionNumber: 5,
        subTopic: 'column_vectors',
        specificItems: ['negativeVector'],
        diagramId: 'negativeVectorReversalDiagram',      // a and -a shown as opposing arrows of equal length
        practicalId: 'reverse_journey_investigation',    // students find return displacement vectors for journeys
        contentKey: 'components'
    },
    {
        id: 'cv_columnVectors3D',
        label: 'Column Vectors in 3D',
        sectionNumber: 6,
        subTopic: 'column_vectors',
        specificItems: ['columnVectors3D'],
        diagramId: 'threeDCoordinateAxesDiagram',        // 3D axes with a vector (x;y;z) plotted
        practicalId: '3d_vector_coordinate_exploration', // students plot and read 3D vectors using physical axes model
        contentKey: 'components'
    },
    {
        id: 'cv_unitVectors',
        label: 'Unit Vectors and Basis Vectors',
        sectionNumber: 7,
        subTopic: 'column_vectors',
        specificItems: ['unitVectors'],
        diagramId: 'ijBasisVectorsDiagram',              // i and j drawn on unit grid showing decomposition
        practicalId: 'unit_vector_decomposition_task',   // students express vectors using i and j notation
        contentKey: 'components'
    },
    {
        id: 'cv_expressingVectors',
        label: 'Expressing Vectors in Terms of Given Vectors',
        sectionNumber: 8,
        subTopic: 'column_vectors',
        specificItems: ['expressingVectors'],
        diagramId: 'vectorPathTracingDiagram',           // geometric figure with labelled vectors a and b, unknown paths
        practicalId: 'expressing_vectors_proof_task',    // students trace routes through figures to express unknowns
        contentKey: 'components'
    },


    {
        id: 'pv_foundations',
        label: 'Position Vector Foundations',
        sectionNumber: 1,
        subTopic: 'position_vectors',
        specificItems: ['foundations'],
        diagramId: 'originToPointArrowDiagram',          // coordinate plane showing O, point P, and arrow →OP
        practicalId: 'position_vector_coordinate_activity', // students write position vectors for given coordinates
        contentKey: 'components'
    },
    {
        id: 'pv_notationAndConventions',
        label: 'Notation and Conventions',
        sectionNumber: 2,
        subTopic: 'position_vectors',
        specificItems: ['notationAndConventions'],
        diagramId: 'positionVectorNotationChart',        // reference chart showing point A vs vector a conventions
        practicalId: 'notation_conversion_drill',        // students convert between point and position vector notation
        contentKey: 'components'
    },
    {
        id: 'pv_vectorBetweenTwoPoints',
        label: 'Vector Between Two Points',
        sectionNumber: 3,
        subTopic: 'position_vectors',
        specificItems: ['vectorBetweenTwoPoints'],
        diagramId: 'abVectorFromPositionVectorsDiagram', // diagram showing →OA, →OB, and derived →AB = b − a
        practicalId: 'displacement_between_points_investigation', // students compute →AB for coordinate pairs
        contentKey: 'components'
    },
    {
        id: 'pv_midpointFormula',
        label: 'Midpoint Formula',
        sectionNumber: 4,
        subTopic: 'position_vectors',
        specificItems: ['midpointFormula'],
        diagramId: 'midpointPositionVectorDiagram',      // line segment AB with midpoint M labelled; vectors a, b, m shown
        practicalId: 'midpoint_construction_investigation', // students find midpoints using vector formula and verify on grid
        contentKey: 'components'
    },
    {
        id: 'pv_sectionFormula',
        label: 'Section Formula',
        sectionNumber: 5,
        subTopic: 'position_vectors',
        specificItems: ['sectionFormula'],
        diagramId: 'sectionFormulaDivisionDiagram',      // line AB with point P dividing it in ratio m:n labelled
        practicalId: 'ratio_division_coordinates_task',  // students locate division points for given ratios
        contentKey: 'components'
    },
    {
        id: 'pv_centroid',
        label: 'Centroid of a Triangle',
        sectionNumber: 6,
        subTopic: 'position_vectors',
        specificItems: ['centroid'],
        diagramId: 'triangleCentroidMediansDiagram',     // triangle ABC with all three medians drawn and G labelled
        practicalId: 'centroid_balance_point_investigation', // students find centroid of triangles on coordinate grids
        contentKey: 'components'
    },
    {
        id: 'pv_geometricProofs',
        label: 'Geometric Proofs Using Position Vectors',
        sectionNumber: 7,
        subTopic: 'position_vectors',
        specificItems: ['geometricProofs'],
        diagramId: 'parallelogramVectorProofDiagram',    // parallelogram OABC with position vectors and diagonals labelled
        practicalId: 'vector_proof_collinearity_task',   // students prove collinearity and parallelogram properties
        contentKey: 'components'
    },
    {
        id: 'pv_positionVectors3D',
        label: 'Position Vectors in 3D',
        sectionNumber: 8,
        subTopic: 'position_vectors',
        specificItems: ['positionVectors3D'],
        diagramId: 'threeDPositionVectorDiagram',        // 3D axes with points and →OP vectors plotted
        practicalId: '3d_midpoint_distance_task',        // students compute midpoints and distances in 3D
        contentKey: 'components'
    },
    {
        id: 'pv_applications',
        label: 'Applications of Position Vectors',
        sectionNumber: 9,
        subTopic: 'position_vectors',
        specificItems: ['applications'],
        diagramId: 'navigationPositionVectorDiagram',    // map-based diagram showing ships/objects with position vectors
        practicalId: 'navigation_position_vector_investigation', // students solve navigation problems using position vectors
        contentKey: 'components'
    },


    {
        id: 'vas_additionFoundations',
        label: 'Vector Addition Foundations',
        sectionNumber: 1,
        subTopic: 'vector_addition_subtraction',
        specificItems: ['additionFoundations'],
        diagramId: 'componentWiseAdditionDiagram',       // two column vectors side by side with sum shown component by component
        practicalId: 'vector_addition_component_drill',  // students add column vectors numerically
        contentKey: 'components'
    },
    {
        id: 'vas_geometricAddition',
        label: 'Geometric Methods for Addition',
        sectionNumber: 2,
        subTopic: 'vector_addition_subtraction',
        specificItems: ['geometricAddition'],
        diagramId: 'triangleAndParallelogramRuleDiagram', // side-by-side diagrams of triangle rule and parallelogram rule
        practicalId: 'head_to_tail_drawing_investigation', // students draw vector additions using head-to-tail method on grids
        contentKey: 'components'
    },
    {
        id: 'vas_propertiesOfAddition',
        label: 'Properties of Vector Addition',
        sectionNumber: 3,
        subTopic: 'vector_addition_subtraction',
        specificItems: ['propertiesOfAddition'],
        diagramId: 'commutativityParallelogramDiagram',  // parallelogram showing a+b = b+a via both diagonals
        practicalId: 'vector_addition_properties_verification', // students verify commutativity and associativity with examples
        contentKey: 'components'
    },
    {
        id: 'vas_subtractionFoundations',
        label: 'Vector Subtraction Foundations',
        sectionNumber: 4,
        subTopic: 'vector_addition_subtraction',
        specificItems: ['subtractionFoundations'],
        diagramId: 'componentWiseSubtractionDiagram',    // column vector subtraction shown component by component
        practicalId: 'vector_subtraction_component_drill', // students subtract column vectors numerically
        contentKey: 'components'
    },
    {
        id: 'vas_geometricSubtraction',
        label: 'Geometric Interpretation of Subtraction',
        sectionNumber: 5,
        subTopic: 'vector_addition_subtraction',
        specificItems: ['geometricSubtraction'],
        diagramId: 'tailToTailSubtractionDiagram',       // two vectors from same tail; a−b shown as arrow from tip of b to tip of a
        practicalId: 'vector_subtraction_drawing_task',  // students draw a−b using tail-to-tail and negative vector methods
        contentKey: 'components'
    },
    {
        id: 'vas_propertiesOfSubtraction',
        label: 'Properties of Vector Subtraction',
        sectionNumber: 6,
        subTopic: 'vector_addition_subtraction',
        specificItems: ['propertiesOfSubtraction'],
        diagramId: 'nonCommutativitySubtractionDiagram', // a−b and b−a shown as opposite arrows illustrating non-commutativity
        practicalId: 'subtraction_non_commutativity_investigation', // students explore why a−b ≠ b−a
        contentKey: 'components'
    },
    {
        id: 'vas_resultantVector',
        label: 'Resultant Vector',
        sectionNumber: 7,
        subTopic: 'vector_addition_subtraction',
        specificItems: ['resultantVector'],
        diagramId: 'resultantForceDiagram',              // polygon of forces with resultant as closing arrow
        practicalId: 'resultant_force_investigation',    // students find resultant of two and three forces using components
        contentKey: 'components'
    },
    {
        id: 'vas_geometricProblems',
        label: 'Addition and Subtraction in Geometric Problems',
        sectionNumber: 8,
        subTopic: 'vector_addition_subtraction',
        specificItems: ['geometricProblems'],
        diagramId: 'vectorPathGeometricFigureDiagram',   // quadrilateral/triangle with labelled vectors and unknown paths
        practicalId: 'geometric_vector_path_task',       // students express unknown vectors by tracing routes in figures
        contentKey: 'components'
    },
    {
        id: 'vas_combinedOperations',
        label: 'Combined Vector Operations',
        sectionNumber: 9,
        subTopic: 'vector_addition_subtraction',
        specificItems: ['combinedOperations'],
        diagramId: 'linearCombinationDiagram',           // diagram showing αa + βb as a combined displacement
        practicalId: 'linear_combination_simplification_task', // students simplify expressions like 3a+2b−a+b
        contentKey: 'components'
    },
    {
        id: 'vas_applications',
        label: 'Applications of Vector Addition and Subtraction',
        sectionNumber: 10,
        subTopic: 'vector_addition_subtraction',
        specificItems: ['applications'],
        diagramId: 'navigationDisplacementDiagram',      // boat/aircraft path showing two displacement legs and resultant
        practicalId: 'navigation_resultant_investigation', // students solve journey and force-balance real-world problems
        contentKey: 'components'
    },


    {
        id: 'sm_foundations',
        label: 'Scalar Multiplication Foundations',
        sectionNumber: 1,
        subTopic: 'scalar_multiplication',
        specificItems: ['foundations'],
        diagramId: 'scalarStretchDiagram',               // vector a alongside 2a and (1/2)a showing stretch/compress
        practicalId: 'scalar_stretch_visualisation_task', // students draw scalar multiples on grid and compare lengths
        contentKey: 'components'
    },
    {
        id: 'sm_computation',
        label: 'Computing Scalar Multiples',
        sectionNumber: 2,
        subTopic: 'scalar_multiplication',
        specificItems: ['computation'],
        diagramId: 'scalarMultipleColumnVectorDiagram',  // integer, fraction, and negative scalar cases shown in column form
        practicalId: 'scalar_multiplication_drill',      // students compute k·a for integer, fractional, and negative k
        contentKey: 'components'
    },
    {
        id: 'sm_magnitudeOfScalarMultiple',
        label: 'Magnitude of a Scalar Multiple',
        sectionNumber: 3,
        subTopic: 'scalar_multiplication',
        specificItems: ['magnitudeOfScalarMultiple'],
        diagramId: 'scaledMagnitudeComparisonDiagram',   // |a|, |2a|, |−3a| shown on number line alongside arrows
        practicalId: 'magnitude_scaling_investigation',  // students compute |ka| for various k and verify |ka|=|k||a|
        contentKey: 'components'
    },
    {
        id: 'sm_properties',
        label: 'Properties of Scalar Multiplication',
        sectionNumber: 4,
        subTopic: 'scalar_multiplication',
        specificItems: ['properties'],
        diagramId: 'distributiveScalarDiagram',          // k(a+b) vs ka+kb shown geometrically
        practicalId: 'scalar_properties_verification_task', // students verify distributive and associative laws numerically
        contentKey: 'components'
    },
    {
        id: 'sm_parallelVectors',
        label: 'Parallel Vectors via Scalar Multiplication',
        sectionNumber: 5,
        subTopic: 'scalar_multiplication',
        specificItems: ['parallelVectors'],
        diagramId: 'parallelVectorsScalarDiagram',       // vectors ka for k=2, k=−1, k=0.5 drawn from same origin
        practicalId: 'parallel_vector_identification_task', // students identify scalar k for parallel pairs and classify direction
        contentKey: 'components'
    },
    {
        id: 'sm_unitVectors',
        label: 'Unit Vectors and Normalisation',
        sectionNumber: 6,
        subTopic: 'scalar_multiplication',
        specificItems: ['unitVectors'],
        diagramId: 'normalisationUnitCircleDiagram',     // vector a and unit vector â both drawn; â touches unit circle
        practicalId: 'unit_vector_construction_task',    // students normalise given vectors and verify magnitude = 1
        contentKey: 'components'
    },
    {
        id: 'sm_dividingLineSegments',
        label: 'Dividing Line Segments',
        sectionNumber: 7,
        subTopic: 'scalar_multiplication',
        specificItems: ['dividingLineSegments'],
        diagramId: 'scalarDivisionSegmentDiagram',       // segment AB with points at t=1/3, t=1/2, t=2/3 marked
        practicalId: 'segment_division_scalar_investigation', // students locate division points using P = A + t·→AB
        contentKey: 'components'
    },
    {
        id: 'sm_proofsUsingScalarMultiplication',
        label: 'Proofs Using Scalar Multiplication',
        sectionNumber: 8,
        subTopic: 'scalar_multiplication',
        specificItems: ['proofsUsingScalarMultiplication'],
        diagramId: 'scalarProofGeometricFigureDiagram',  // triangle or quadrilateral with scalar multiple vectors labelled
        practicalId: 'scalar_vector_proof_task',         // students prove collinearity and bisection using scalar multiples
        contentKey: 'components'
    },
    {
        id: 'sm_applications',
        label: 'Applications of Scalar Multiplication',
        sectionNumber: 9,
        subTopic: 'scalar_multiplication',
        specificItems: ['applications'],
        diagramId: 'forceScalingDiagram',                // force vector F and 3F drawn with magnitudes labelled
        practicalId: 'physics_scalar_multiplication_investigation', // students scale velocity/force vectors using F=ma and d=tv
        contentKey: 'components'
    },


    {
        id: 'dir_foundations',
        label: 'Direction Foundations',
        sectionNumber: 1,
        subTopic: 'vector_direction',
        specificItems: ['foundations'],
        diagramId: 'sameOppositeDirectionDiagram',       // pairs of arrows: same direction (k>0) and opposite (k<0)
        practicalId: 'direction_identification_activity', // students classify vector pairs as same, opposite, or neither direction
        contentKey: 'components'
    },
    {
        id: 'dir_angleWithXAxis',
        label: 'Angle with Positive X-Axis',
        sectionNumber: 2,
        subTopic: 'vector_direction',
        specificItems: ['angleWithXAxis'],
        diagramId: 'fourQuadrantDirectionAngleDiagram',  // unit circle divided into 4 quadrants with θ and arctan adjustment shown
        practicalId: 'direction_angle_quadrant_investigation', // students compute θ for vectors in all four quadrants
        contentKey: 'components'
    },
    {
        id: 'dir_bearings',
        label: 'Bearings',
        sectionNumber: 3,
        subTopic: 'vector_direction',
        specificItems: ['bearings'],
        diagramId: 'compassBearingsDiagram',             // compass rose with N/S/E/W and example bearings 030°, 120°, 225°
        practicalId: 'bearings_navigation_investigation', // students convert bearings to column vectors and vice versa
        contentKey: 'components'
    },
    {
        id: 'dir_directionAsUnitVector',
        label: 'Direction as a Unit Vector',
        sectionNumber: 4,
        subTopic: 'vector_direction',
        specificItems: ['directionAsUnitVector'],
        diagramId: 'unitVectorDirectionDiagram',         // vector a and â drawn; â lies on unit circle at same angle
        practicalId: 'unit_direction_vector_task',       // students express direction of given vectors as unit vectors
        contentKey: 'components'
    },
    {
        id: 'dir_directionRatios',
        label: 'Direction Ratios',
        sectionNumber: 5,
        subTopic: 'vector_direction',
        specificItems: ['directionRatios'],
        diagramId: 'directionRatioSimplificationDiagram', // vector (6;4) with ratio 3:2 shown alongside gradient triangle
        practicalId: 'direction_ratio_simplification_task', // students simplify direction ratios and link to gradient
        contentKey: 'components'
    },
    {
        id: 'dir_angleBetweenVectors',
        label: 'Angle Between Two Vectors',
        sectionNumber: 6,
        subTopic: 'vector_direction',
        specificItems: ['angleBetweenVectors'],
        diagramId: 'dotProductAngleDiagram',             // two vectors from same origin with angle θ labelled between them
        practicalId: 'dot_product_angle_investigation',  // students compute angles between vector pairs using dot product formula
        contentKey: 'components'
    },
    {
        id: 'dir_directionCosines',
        label: 'Direction Cosines (3D)',
        sectionNumber: 7,
        subTopic: 'vector_direction',
        specificItems: ['directionCosines'],
        diagramId: 'directionCosines3DDiagram',          // 3D axes with vector a and angles α, β, γ to each axis labelled
        practicalId: 'direction_cosines_3d_task',        // students compute direction cosines and verify cos²α+cos²β+cos²γ=1
        contentKey: 'components'
    },
    {
        id: 'dir_directionAndGradient',
        label: 'Direction and Gradient',
        sectionNumber: 8,
        subTopic: 'vector_direction',
        specificItems: ['directionAndGradient'],
        diagramId: 'gradientVectorConnectionDiagram',    // coordinate grid showing vector (a;b) alongside gradient triangle m=b/a
        practicalId: 'gradient_direction_link_investigation', // students connect vector direction to line gradient and find perpendiculars
        contentKey: 'components'
    },
    {
        id: 'dir_applications',
        label: 'Applications of Vector Direction',
        sectionNumber: 9,
        subTopic: 'vector_direction',
        specificItems: ['applications'],
        diagramId: 'velocityBearingApplicationDiagram',  // boat/aircraft with velocity vector, bearing, and speed labelled
        practicalId: 'navigation_bearing_direction_investigation', // students solve bearing and velocity direction problems
        contentKey: 'components'
    },

    {
        id: 'mag_foundations',
        label: 'Magnitude Foundations',
        sectionNumber: 1,
        subTopic: 'vector_magnitude',
        specificItems: ['foundations'],
        diagramId: 'vectorLengthArrowDiagram',           // arrow with its length dimension labelled; scalar vs vector contrast
        practicalId: 'magnitude_vs_direction_activity',  // students identify magnitude and direction of given vectors separately
        contentKey: 'components'
    },
    {
        id: 'mag_magnitudeIn2D',
        label: 'Calculating Magnitude in 2D',
        sectionNumber: 2,
        subTopic: 'vector_magnitude',
        specificItems: ['magnitudeIn2D'],
        diagramId: 'pythagoreanMagnitudeDiagram',        // right triangle formed by vector components with hypotenuse labelled |a|
        practicalId: 'magnitude_calculation_2d_investigation', // students calculate |a| for various vectors using Pythagorean formula
        contentKey: 'components'
    },
    {
        id: 'mag_magnitudeIn3D',
        label: 'Calculating Magnitude in 3D',
        sectionNumber: 3,
        subTopic: 'vector_magnitude',
        specificItems: ['magnitudeIn3D'],
        diagramId: 'pythagorean3DMagnitudeDiagram',      // 3D box diagram with space diagonal as vector magnitude
        practicalId: 'magnitude_calculation_3d_task',    // students compute |a| for 3D vectors and verify with exact values
        contentKey: 'components'
    },
    {
        id: 'mag_properties',
        label: 'Properties of Magnitude',
        sectionNumber: 4,
        subTopic: 'vector_magnitude',
        specificItems: ['properties'],
        diagramId: 'triangleInequalityDiagram',          // triangle with sides |a|, |b|, |a+b| illustrating triangle inequality
        practicalId: 'magnitude_properties_verification_task', // students verify |ka|=|k||a| and triangle inequality numerically
        contentKey: 'components'
    },
    {
        id: 'mag_distanceBetweenPoints',
        label: 'Distance Between Two Points',
        sectionNumber: 5,
        subTopic: 'vector_magnitude',
        specificItems: ['distanceBetweenPoints'],
        diagramId: 'distanceFormulaCoordinateDiagram',   // coordinate plane with A and B labelled and |→AB| dimension shown
        practicalId: 'distance_formula_investigation',   // students find distances between coordinate pairs using vector magnitude
        contentKey: 'components'
    },
    {
        id: 'mag_unitVectors',
        label: 'Unit Vectors from Magnitude',
        sectionNumber: 6,
        subTopic: 'vector_magnitude',
        specificItems: ['unitVectors'],
        diagramId: 'unitVectorNormalisationDiagram',     // a and â side by side with |a|=5 and |â|=1 labelled
        practicalId: 'unit_vector_normalisation_task',   // students normalise vectors and verify â has magnitude 1
        contentKey: 'components'
    },
    {
        id: 'mag_magnitudeInEquationsAndProofs',
        label: 'Magnitude in Equations and Proofs',
        sectionNumber: 7,
        subTopic: 'vector_magnitude',
        specificItems: ['magnitudeInEquationsAndProofs'],
        diagramId: 'missingComponentMagnitudeDiagram',   // right triangle labelled with known component, unknown component, and |a|
        practicalId: 'missing_component_from_magnitude_task', // students solve |a|=k equations to find missing components
        contentKey: 'components'
    },
    {
        id: 'mag_applications',
        label: 'Applications of Magnitude',
        sectionNumber: 8,
        subTopic: 'vector_magnitude',
        specificItems: ['applications'],
        diagramId: 'speedForceMagnitudeDiagram',         // velocity vector with speed (magnitude) and circle equation labelled
        practicalId: 'speed_and_force_magnitude_investigation', // students find speeds and force sizes from velocity/force vectors
        contentKey: 'components'
    },

    {
        id: 'par_foundations',
        label: 'Parallel Vectors Foundations',
        sectionNumber: 1,
        subTopic: 'parallel_vectors',
        specificItems: ['foundations'],
        diagramId: 'parallelVectorsDefinitionDiagram',   // b = ka shown for k=2 (same) and k=−1 (opposite) alongside a
        practicalId: 'parallel_vector_classification_activity', // students classify vector pairs as parallel, anti-parallel, or neither
        contentKey: 'components'
    },
    {
        id: 'par_algebraicTests',
        label: 'Algebraic Tests for Parallelism',
        sectionNumber: 2,
        subTopic: 'parallel_vectors',
        specificItems: ['algebraicTests'],
        diagramId: 'ratioTestParallelDiagram',           // two column vectors with ratio b₁/a₁ = b₂/a₂ shown step by step
        practicalId: 'parallel_vector_ratio_test_drill', // students apply ratio test and cross-product test to vector pairs
        contentKey: 'components'
    },
    {
        id: 'par_geometricInterpretation',
        label: 'Geometric Interpretation of Parallel Vectors',
        sectionNumber: 3,
        subTopic: 'parallel_vectors',
        specificItems: ['geometricInterpretation'],
        diagramId: 'parallelArrowsOnGridDiagram',        // multiple parallel arrows at different positions on a coordinate grid
        practicalId: 'parallel_vector_drawing_investigation', // students draw families of parallel vectors and observe direction
        contentKey: 'components'
    },
    {
        id: 'par_collinearPoints',
        label: 'Collinear Points',
        sectionNumber: 4,
        subTopic: 'parallel_vectors',
        specificItems: ['collinearPoints'],
        diagramId: 'collinearPointsVectorDiagram',       // three points A, B, C on a line with →AB and →AC labelled
        practicalId: 'collinearity_proof_task',          // students prove or disprove collinearity for sets of three points
        contentKey: 'components'
    },
    {
        id: 'par_parallelLinesInCoordinateGeometry',
        label: 'Parallel Lines in Coordinate Geometry',
        sectionNumber: 5,
        subTopic: 'parallel_vectors',
        specificItems: ['parallelLinesInCoordinateGeometry'],
        diagramId: 'parallelogramSidesVectorDiagram',    // parallelogram ABCD with direction vectors on opposite sides labelled
        practicalId: 'parallelogram_parallel_sides_investigation', // students verify parallel sides and identify parallelograms/trapeziums
        contentKey: 'components'
    },
    {
        id: 'par_solvingProblems',
        label: 'Solving Problems Using Parallel Vectors',
        sectionNumber: 6,
        subTopic: 'parallel_vectors',
        specificItems: ['solvingProblems'],
        diagramId: 'unknownComponentParallelDiagram',    // column vector with unknown t and parallel vector with known components
        practicalId: 'parallel_vector_unknown_component_task', // students find unknown components that make two vectors parallel
        contentKey: 'components'
    },
    {
        id: 'par_geometricProofs',
        label: 'Geometric Proofs Using Parallel Vectors',
        sectionNumber: 7,
        subTopic: 'parallel_vectors',
        specificItems: ['geometricProofs'],
        diagramId: 'midpointTheoremProofDiagram',        // triangle ABC with midpoints M and N; MN and BC labelled
        practicalId: 'midpoint_theorem_vector_proof_task', // students prove MN ∥ BC and |MN|=(1/2)|BC| using position vectors
        contentKey: 'components'
    },
    {
        id: 'par_parallelAndDotProduct',
        label: 'Parallel Vectors and the Dot Product',
        sectionNumber: 8,
        subTopic: 'parallel_vectors',
        specificItems: ['parallelAndDotProduct'],
        diagramId: 'dotProductParallelTestDiagram',      // two parallel vectors with |a·b|=|a||b| equation annotated
        practicalId: 'dot_product_parallelism_investigation', // students test parallelism using both dot product and cross product conditions
        contentKey: 'components'
    },
    {
        id: 'par_physicsApplications',
        label: 'Parallel Vectors in Physics',
        sectionNumber: 9,
        subTopic: 'parallel_vectors',
        specificItems: ['physicsApplications'],
        diagramId: 'forceAccelerationParallelDiagram',   // F = ma diagram with F and a shown as parallel vectors, scalar m labelled
        practicalId: 'force_acceleration_parallel_investigation', // students verify F ∥ a in Newton's second law problems
        contentKey: 'components'
    },
    {
        id: 'par_commonErrors',
        label: 'Common Errors in Parallel Vectors',
        sectionNumber: 10,
        subTopic: 'parallel_vectors',
        specificItems: ['commonErrors'],
        diagramId: 'parallelErrorCounterExampleDiagram', // counter-examples showing non-parallel vectors with equal single ratio
        practicalId: 'parallel_vector_error_analysis_task', // students identify and correct errors in parallel vector reasoning
        contentKey: 'components'
    },



    {
        id: 'rightTriangleTrigonometry',
        label: 'Right Triangle Trigonometry',
        sectionNumber: 1,
        subTopic: 'trigonometry',
        specificItems: ['rightTriangleTrigonometry'],
        diagramId: 'rightTriangleLabelledSides',
        practicalId: 'sohcahtoa_sides_and_angles_investigation',
        contentKey: 'components'
    },
    {
        id: 'exactValues',
        label: 'Exact Trigonometric Values',
        sectionNumber: 2,
        subTopic: 'trigonometry',
        specificItems: ['exactValues'],
        diagramId: 'specialAnglesTriangle_30_60_90_and_45_45_90',
        practicalId: 'exact_values_derivation_from_special_triangles',
        contentKey: 'components'
    },
    {
        id: 'unitCircleAndGeneralAngles',
        label: 'Unit Circle and General Angles',
        sectionNumber: 3,
        subTopic: 'trigonometry',
        specificItems: ['unitCircleAndGeneralAngles'],
        diagramId: 'unitCircleCASTDiagram',
        practicalId: 'unit_circle_quadrant_signs_investigation',
        contentKey: 'components'
    },
    {
        id: 'graphsOfTrigFunctions',
        label: 'Graphs of Trigonometric Functions',
        sectionNumber: 4,
        subTopic: 'trigonometry',
        specificItems: ['graphsOfTrigFunctions'],
        diagramId: 'sineCosineAndTangentGraphs',
        practicalId: 'trig_graph_transformations_geogebra_activity',
        contentKey: 'components'
    },
    {
        id: 'trigonometricIdentities',
        label: 'Trigonometric Identities',
        sectionNumber: 5,
        subTopic: 'trigonometry',
        specificItems: ['trigonometricIdentities'],
        diagramId: 'pythagoreanIdentityUnitCircleProof',
        practicalId: 'trig_identity_proof_practice_investigation',
        contentKey: 'components'
    },
    {
        id: 'solvingTrigEquations',
        label: 'Solving Trigonometric Equations',
        sectionNumber: 6,
        subTopic: 'trigonometry',
        specificItems: ['solvingTrigEquations'],
        diagramId: 'unitCircleWithSolutionAngles',
        practicalId: 'solving_trig_equations_cast_method_activity',
        contentKey: 'components'
    },
    {
        id: 'sineAndCosineRules',
        label: 'Sine and Cosine Rules',
        sectionNumber: 7,
        subTopic: 'trigonometry',
        specificItems: ['sineAndCosineRules'],
        diagramId: 'sineRuleAndCosineRuleTriangleDiagram',
        practicalId: 'non_right_triangle_surveying_investigation',
        contentKey: 'components'
    },
    {
        id: 'elevationAndDepression',
        label: 'Angles of Elevation and Depression',
        sectionNumber: 8,
        subTopic: 'trigonometry',
        specificItems: ['elevationAndDepression'],
        diagramId: 'elevationDepressionAngleDiagram',
        practicalId: 'clinometer_height_measurement_practical',
        contentKey: 'components'
    },
    {
        id: 'radiansAndArcMeasures',
        label: 'Radians and Arc Measures',
        sectionNumber: 9,
        subTopic: 'trigonometry',
        specificItems: ['radiansAndArcMeasures'],
        diagramId: 'radianDefinitionArcLengthDiagram',
        practicalId: 'radian_vs_degree_conversion_activity',
        contentKey: 'components'
    },
    {
        id: 'threeDimensionalTrigonometry',
        label: '3D Trigonometry',
        sectionNumber: 10,
        subTopic: 'trigonometry',
        specificItems: ['threeDimensionalTrigonometry'],
        diagramId: 'rectangularPrismSpaceDiagonalDiagram',
        practicalId: 'three_d_angle_in_prism_and_pyramid_investigation',
        contentKey: 'components'
    },


    // ══════════════════════════════════════════════════════
    // HANDLER 2 — handleAnglesInCoordinateGeometry
    // Component keys (8):
    //   foundations | angleOfInclination | anglesBetweenLines
    //   parallelAndPerpendicularConditions | coordinateGeometryProofs
    //   anglesAndUnitCircle | bearingsAndDirectionalAngles
    //   anglesInPolygonsFromCoordinates
    // ══════════════════════════════════════════════════════

    {
        id: 'coordinateFoundations',
        label: 'Coordinate Plane Foundations',
        sectionNumber: 11,
        subTopic: 'coordinate_geometry',
        specificItems: ['foundations'],
        diagramId: 'cartesianPlaneWithQuadrants',
        practicalId: 'plotting_points_and_gradient_exploration',
        contentKey: 'components'
    },
    {
        id: 'angleOfInclination',
        label: 'Angle of Inclination',
        sectionNumber: 12,
        subTopic: 'coordinate_geometry',
        specificItems: ['angleOfInclination'],
        diagramId: 'lineInclinationAngleDiagram',
        practicalId: 'gradient_to_angle_geogebra_investigation',
        contentKey: 'components'
    },
    {
        id: 'anglesBetweenLines',
        label: 'Angles Between Lines',
        sectionNumber: 13,
        subTopic: 'coordinate_geometry',
        specificItems: ['anglesBetweenLines'],
        diagramId: 'angleBetweenTwoLinesGradientDiagram',
        practicalId: 'intersection_angle_calculation_activity',
        contentKey: 'components'
    },
    {
        id: 'parallelAndPerpendicularConditions',
        label: 'Parallel and Perpendicular Conditions',
        sectionNumber: 14,
        subTopic: 'coordinate_geometry',
        specificItems: ['parallelAndPerpendicularConditions'],
        diagramId: 'parallelAndPerpendicularLinesGradientDiagram',
        practicalId: 'proving_shapes_using_gradient_conditions',
        contentKey: 'components'
    },
    {
        id: 'coordinateGeometryProofs',
        label: 'Coordinate Geometry Proofs',
        sectionNumber: 15,
        subTopic: 'coordinate_geometry',
        specificItems: ['coordinateGeometryProofs'],
        diagramId: 'coordinateProofShapeVerificationDiagram',
        practicalId: 'prove_quadrilateral_type_from_vertices_activity',
        contentKey: 'components'
    },
    {
        id: 'anglesAndUnitCircle',
        label: 'Angles and the Unit Circle',
        sectionNumber: 16,
        subTopic: 'coordinate_geometry',
        specificItems: ['anglesAndUnitCircle'],
        diagramId: 'unitCircleCoordinateRepresentation',
        practicalId: 'unit_circle_point_to_angle_mapping_activity',
        contentKey: 'components'
    },
    {
        id: 'bearingsAndDirectionalAngles',
        label: 'Bearings and Directional Angles',
        sectionNumber: 17,
        subTopic: 'coordinate_geometry',
        specificItems: ['bearingsAndDirectionalAngles'],
        diagramId: 'compassBearingsDiagram',
        practicalId: 'bearings_navigation_map_investigation',
        contentKey: 'components'
    },
    {
        id: 'anglesInPolygonsFromCoordinates',
        label: 'Angles in Polygons from Coordinates',
        sectionNumber: 18,
        subTopic: 'coordinate_geometry',
        specificItems: ['anglesInPolygonsFromCoordinates'],
        diagramId: 'polygonVerticesCoordinatePlaneDiagram',
        practicalId: 'interior_angle_calculation_from_vertices_activity',
        contentKey: 'components'
    },


    // ══════════════════════════════════════════════════════
    // HANDLER 3 — handleAnglesInTriangles
    // Component keys (10):
    //   foundations | angleSumTheorem | exteriorAngleTheorem
    //   isoscelesTriangleProperties | equilateralTriangleProperties
    //   rightTriangleProperties | triangleCongruence | triangleSimilarity
    //   specialLinesAndCentres | triangleInequalitiesAndAngles
    // ══════════════════════════════════════════════════════

    {
        id: 'triangleFoundations',
        label: 'Triangle Foundations and Classification',
        sectionNumber: 19,
        subTopic: 'triangles',
        specificItems: ['foundations'],
        diagramId: 'triangleClassificationByAnglesAndSides',
        practicalId: 'classifying_triangles_from_measurements_activity',
        contentKey: 'components'
    },
    {
        id: 'angleSumTheorem',
        label: 'Angle Sum Theorem',
        sectionNumber: 20,
        subTopic: 'triangles',
        specificItems: ['angleSumTheorem'],
        diagramId: 'triangleAngleSumParallelLineProof',
        practicalId: 'paper_folding_angle_sum_180_discovery',
        contentKey: 'components'
    },
    {
        id: 'exteriorAngleTheorem',
        label: 'Exterior Angle Theorem',
        sectionNumber: 21,
        subTopic: 'triangles',
        specificItems: ['exteriorAngleTheorem'],
        diagramId: 'triangleExteriorAngleDiagram',
        practicalId: 'exterior_angle_vs_remote_interior_investigation',
        contentKey: 'components'
    },
    {
        id: 'isoscelesTriangleProperties',
        label: 'Isosceles Triangle Properties',
        sectionNumber: 22,
        subTopic: 'triangles',
        specificItems: ['isoscelesTriangleProperties'],
        diagramId: 'isoscelesTriangleBaseAnglesAndAxisDiagram',
        practicalId: 'isosceles_base_angle_equality_investigation',
        contentKey: 'components'
    },
    {
        id: 'equilateralTriangleProperties',
        label: 'Equilateral Triangle Properties',
        sectionNumber: 23,
        subTopic: 'triangles',
        specificItems: ['equilateralTriangleProperties'],
        diagramId: 'equilateralTriangleSymmetryDiagram',
        practicalId: 'equilateral_triangle_construction_and_proof',
        contentKey: 'components'
    },
    {
        id: 'rightTriangleProperties',
        label: 'Right Triangle Angle Properties',
        sectionNumber: 24,
        subTopic: 'triangles',
        specificItems: ['rightTriangleProperties'],
        diagramId: 'rightTriangleSpecialCases_30_60_90_45_45_90',
        practicalId: 'pythagorean_theorem_and_special_right_triangles_discovery',
        contentKey: 'components'
    },
    {
        id: 'triangleCongruence',
        label: 'Triangle Congruence',
        sectionNumber: 25,
        subTopic: 'triangles',
        specificItems: ['triangleCongruence'],
        diagramId: 'congruenceConditionsSSS_SAS_ASA_AAS_RHS',
        practicalId: 'congruence_conditions_testing_activity',
        contentKey: 'components'
    },
    {
        id: 'triangleSimilarity',
        label: 'Triangle Similarity',
        sectionNumber: 26,
        subTopic: 'triangles',
        specificItems: ['triangleSimilarity'],
        diagramId: 'similarTrianglesAA_scaleFactor',
        practicalId: 'shadow_and_mirror_indirect_measurement_investigation',
        contentKey: 'components'
    },
    {
        id: 'specialLinesAndCentres',
        label: 'Special Lines and Triangle Centres',
        sectionNumber: 27,
        subTopic: 'triangles',
        specificItems: ['specialLinesAndCentres'],
        diagramId: 'triangleCentresOrthocentre_Incentre_Centroid_Circumcentre',
        practicalId: 'constructing_triangle_centres_with_compass_activity',
        contentKey: 'components'
    },
    {
        id: 'triangleInequalitiesAndAngles',
        label: 'Triangle Inequalities and Angles',
        sectionNumber: 28,
        subTopic: 'triangles',
        specificItems: ['triangleInequalitiesAndAngles'],
        diagramId: 'triangleAngleSideInequalityDiagram',
        practicalId: 'triangle_inequality_validity_testing_activity',
        contentKey: 'components'
    },


    // ══════════════════════════════════════════════════════
    // HANDLER 4 — handleAnglesInCircles
    // Component keys (8):
    //   foundations | centralAngles | inscribedAngles | tangentTheorems
    //   cyclicQuadrilaterals | chordProperties | specialCasesAndResults | proofs
    // ══════════════════════════════════════════════════════

    {
        id: 'circleFoundations',
        label: 'Circle Parts and Vocabulary',
        sectionNumber: 29,
        subTopic: 'circles',
        specificItems: ['foundations'],
        diagramId: 'circlePartsLabelledDiagram',
        practicalId: 'identifying_circle_parts_and_arc_measures_activity',
        contentKey: 'components'
    },
    {
        id: 'centralAngles',
        label: 'Central Angles',
        sectionNumber: 30,
        subTopic: 'circles',
        specificItems: ['centralAngles'],
        diagramId: 'centralAngleArcRelationshipDiagram',
        practicalId: 'central_angle_and_arc_measure_exploration',
        contentKey: 'components'
    },
    {
        id: 'inscribedAngles',
        label: 'Inscribed Angles',
        sectionNumber: 31,
        subTopic: 'circles',
        specificItems: ['inscribedAngles'],
        diagramId: 'inscribedAngleTheoremDiagram',
        practicalId: 'inscribed_angle_vs_central_angle_geogebra_investigation',
        contentKey: 'components'
    },
    {
        id: 'tangentTheorems',
        label: 'Tangent Theorems',
        sectionNumber: 32,
        subTopic: 'circles',
        specificItems: ['tangentTheorems'],
        diagramId: 'tangentRadiusAndAlternateSegmentDiagram',
        practicalId: 'tangent_construction_and_alternate_segment_activity',
        contentKey: 'components'
    },
    {
        id: 'cyclicQuadrilaterals',
        label: 'Cyclic Quadrilaterals',
        sectionNumber: 33,
        subTopic: 'circles',
        specificItems: ['cyclicQuadrilaterals'],
        diagramId: 'cyclicQuadrilateralOppositeAnglesDiagram',
        practicalId: 'cyclic_quad_opposite_angles_measurement_investigation',
        contentKey: 'components'
    },
    {
        id: 'chordProperties',
        label: 'Chord Properties and Angles',
        sectionNumber: 34,
        subTopic: 'circles',
        specificItems: ['chordProperties'],
        diagramId: 'intersectingChordsAndPerpendicularBisectorDiagram',
        practicalId: 'chord_perpendicular_bisector_centre_finding_activity',
        contentKey: 'components'
    },
    {
        id: 'specialCasesAndResults',
        label: 'Special Circle Results',
        sectionNumber: 35,
        subTopic: 'circles',
        specificItems: ['specialCasesAndResults'],
        diagramId: 'thalesTheoremAndPowerOfAPointDiagram',
        practicalId: 'thales_theorem_right_angle_in_semicircle_verification',
        contentKey: 'components'
    },
    {
        id: 'circleProofs',
        label: 'Proofs of Circle Theorems',
        sectionNumber: 36,
        subTopic: 'circles',
        specificItems: ['proofs'],
        diagramId: 'circleTheoremProofStructureDiagram',
        practicalId: 'structured_circle_theorem_proof_writing_activity',
        contentKey: 'components'
    },


    // ══════════════════════════════════════════════════════
    // HANDLER 5 — handleAnglesInPolygons
    // Component keys (7):
    //   foundations | interiorAngleProperties | exteriorAngleProperties
    //   quadrilateralAngleProperties | regularPolygonProperties
    //   polygonAngleProofs | tessellationsAndAngleSums
    // ══════════════════════════════════════════════════════

    {
        id: 'polygonFoundations',
        label: 'Polygon Classification and Foundations',
        sectionNumber: 37,
        subTopic: 'polygons',
        specificItems: ['foundations'],
        diagramId: 'polygonClassificationConvexConcaveRegular',
        practicalId: 'classifying_polygons_by_sides_and_regularity_activity',
        contentKey: 'components'
    },
    {
        id: 'interiorAngleProperties',
        label: 'Interior Angle Properties',
        sectionNumber: 38,
        subTopic: 'polygons',
        specificItems: ['interiorAngleProperties'],
        diagramId: 'polygonTriangulationInteriorAngleSumDiagram',
        practicalId: 'interior_angle_sum_triangulation_discovery_activity',
        contentKey: 'components'
    },
    {
        id: 'exteriorAngleProperties',
        label: 'Exterior Angle Properties',
        sectionNumber: 39,
        subTopic: 'polygons',
        specificItems: ['exteriorAngleProperties'],
        diagramId: 'polygonExteriorAngleWalkingArgumentDiagram',
        practicalId: 'exterior_angle_sum_360_walking_demonstration',
        contentKey: 'components'
    },
    {
        id: 'quadrilateralAngleProperties',
        label: 'Quadrilateral Angle Properties',
        sectionNumber: 40,
        subTopic: 'polygons',
        specificItems: ['quadrilateralAngleProperties'],
        diagramId: 'quadrilateralFamilyAnglesDiagram',
        practicalId: 'quadrilateral_angle_properties_comparison_investigation',
        contentKey: 'components'
    },
    {
        id: 'regularPolygonProperties',
        label: 'Regular Polygon Properties',
        sectionNumber: 41,
        subTopic: 'polygons',
        specificItems: ['regularPolygonProperties'],
        diagramId: 'regularPolygonSymmetryAndCentralAngleDiagram',
        practicalId: 'regular_polygon_construction_and_symmetry_investigation',
        contentKey: 'components'
    },
    {
        id: 'polygonAngleProofs',
        label: 'Polygon Angle Proofs',
        sectionNumber: 42,
        subTopic: 'polygons',
        specificItems: ['polygonAngleProofs'],
        diagramId: 'polygonInteriorSumProofDiagram',
        practicalId: 'formal_proof_interior_and_exterior_angle_sum_activity',
        contentKey: 'components'
    },
    {
        id: 'tessellationsAndAngleSums',
        label: 'Tessellations and Angle Sums',
        sectionNumber: 43,
        subTopic: 'polygons',
        specificItems: ['tessellationsAndAngleSums'],
        diagramId: 'regularAndSemiRegularTessellationPatterns',
        practicalId: 'tessellation_design_angle_condition_investigation',
        contentKey: 'components'
    },


    // ══════════════════════════════════════════════════════
    // HANDLER 6 — handleParallelLinesTransversals
    // Component keys (7):
    //   foundations | anglePairs | propertiesAndTheorems
    //   identifyingAngleRelationships | proofs
    //   multipleParallelLines | realWorldApplications
    // ══════════════════════════════════════════════════════

    {
        id: 'transversalFoundations',
        label: 'Lines and Angles Foundations',
        sectionNumber: 44,
        subTopic: 'parallel_lines',
        specificItems: ['foundations'],
        diagramId: 'parallelLinesTransversalLabelledDiagram',
        practicalId: 'classifying_lines_and_angle_types_activity',
        contentKey: 'components'
    },
    {
        id: 'anglePairs',
        label: 'Transversal Angle Pairs',
        sectionNumber: 45,
        subTopic: 'parallel_lines',
        specificItems: ['anglePairs'],
        diagramId: 'correspondingAlternateCoInteriorAnglesDiagram',
        practicalId: 'fzc_shape_angle_pair_identification_activity',
        contentKey: 'components'
    },
    {
        id: 'propertiesAndTheorems',
        label: 'Parallel Line Theorems',
        sectionNumber: 46,
        subTopic: 'parallel_lines',
        specificItems: ['propertiesAndTheorems'],
        diagramId: 'parallelLineTheoremConversesDiagram',
        practicalId: 'verifying_parallel_line_theorems_with_protractor',
        contentKey: 'components'
    },
    {
        id: 'identifyingAngleRelationships',
        label: 'Identifying and Calculating Angle Relationships',
        sectionNumber: 47,
        subTopic: 'parallel_lines',
        specificItems: ['identifyingAngleRelationships'],
        diagramId: 'algebraicAnglesParallelLinesDiagram',
        practicalId: 'algebraic_angle_solving_parallel_lines_activity',
        contentKey: 'components'
    },
    {
        id: 'parallelLineProofs',
        label: 'Proofs Involving Parallel Lines',
        sectionNumber: 48,
        subTopic: 'parallel_lines',
        specificItems: ['proofs'],
        diagramId: 'twoColumnProofParallelLinesDiagram',
        practicalId: 'structured_parallel_line_proof_writing_activity',
        contentKey: 'components'
    },
    {
        id: 'multipleParallelLines',
        label: 'Multiple Parallel Lines and Intercepts',
        sectionNumber: 49,
        subTopic: 'parallel_lines',
        specificItems: ['multipleParallelLines'],
        diagramId: 'interceptTheoremThreeParallelLinesDiagram',
        practicalId: 'dividing_segment_proportionally_with_parallel_lines',
        contentKey: 'components'
    },
    {
        id: 'parallelLinesRealWorld',
        label: 'Real-World Applications of Parallel Lines',
        sectionNumber: 50,
        subTopic: 'parallel_lines',
        specificItems: ['realWorldApplications'],
        diagramId: 'architectureAndNavigationParallelLinesDiagram',
        practicalId: 'real_world_parallel_lines_angles_field_investigation',
        contentKey: 'components'
    },




   {
        id: 'foundations',
        label: 'Foundations of Simplification',
        sectionNumber: 1,
        subTopic: 'complete_simplification',
        specificItems: ['foundations'],
        diagramId: 'simplificationDecisionFlowchart',
        practicalId: 'equivalent_expressions_matching_investigation',
        contentKey: 'components'
    },
    {
        id: 'collectingLikeTerms',
        label: 'Collecting Like Terms',
        sectionNumber: 2,
        subTopic: 'complete_simplification',
        specificItems: ['collectingLikeTerms'],
        diagramId: 'likeTermsGroupingDiagram',
        practicalId: 'algebra_tile_collecting_terms_activity',
        contentKey: 'components'
    },
    {
        id: 'expandingBrackets',
        label: 'Expanding Brackets',
        sectionNumber: 3,
        subTopic: 'complete_simplification',
        specificItems: ['expandingBrackets'],
        diagramId: 'foilExpansionDiagram',
        practicalId: 'rectangle_area_expansion_investigation',
        contentKey: 'components'
    },
    {
        id: 'factorisationAsSimplificationTool',
        label: 'Factorisation as a Simplification Tool',
        sectionNumber: 4,
        subTopic: 'complete_simplification',
        specificItems: ['factorisationAsSimplificationTool'],
        diagramId: 'factorisationTypesDiagram',
        practicalId: 'factorisation_methods_comparison_investigation',
        contentKey: 'components'
    },
    {
        id: 'simplificationUsingIndexLaws',
        label: 'Simplification Using Index Laws',
        sectionNumber: 5,
        subTopic: 'complete_simplification',
        specificItems: ['simplificationUsingIndexLaws'],
        diagramId: 'indexLawsSummaryDiagram',
        practicalId: 'index_laws_pattern_discovery_investigation',
        contentKey: 'components'
    },
    {
        id: 'simplificationOfAlgebraicFractions',
        label: 'Simplification of Algebraic Fractions',
        sectionNumber: 6,
        subTopic: 'complete_simplification',
        specificItems: ['simplificationOfAlgebraicFractions'],
        diagramId: 'algebraicFractionCancellationDiagram',
        practicalId: 'fraction_cancellation_error_analysis_activity',
        contentKey: 'components'
    },
    {
        id: 'simplificationInvolvingSurds',
        label: 'Simplification Involving Surds',
        sectionNumber: 7,
        subTopic: 'complete_simplification',
        specificItems: ['simplificationInvolvingSurds'],
        diagramId: 'surdSimplificationFlowchart',
        practicalId: 'surd_exact_form_investigation',
        contentKey: 'components'
    },
    {
        id: 'multiStepAndCombinedSimplification',
        label: 'Multi-Step and Combined Simplification',
        sectionNumber: 8,
        subTopic: 'complete_simplification',
        specificItems: ['multiStepAndCombinedSimplification'],
        diagramId: 'multiStepSimplificationFlowchart',
        practicalId: 'expand_collect_factorise_challenge_activity',
        contentKey: 'components'
    },
    {
        id: 'simplificationStrategiesByExpressionType',
        label: 'Simplification Strategies by Expression Type',
        sectionNumber: 9,
        subTopic: 'complete_simplification',
        specificItems: ['simplificationStrategiesByExpressionType'],
        diagramId: 'expressionTypeDecisionTree',
        practicalId: 'expression_classification_sorting_activity',
        contentKey: 'components'
    },
    {
        id: 'commonErrorsAndErrorAnalysis',
        label: 'Common Errors and Error Analysis',
        sectionNumber: 10,
        subTopic: 'complete_simplification',
        specificItems: ['commonErrorsAndErrorAnalysis'],
        diagramId: 'commonAlgebraErrorsDiagram',
        practicalId: 'find_the_mistake_peer_review_activity',
        contentKey: 'components'
    },
    {
        id: 'simplificationInContext',
        label: 'Simplification in Exam and Problem Contexts',
        sectionNumber: 11,
        subTopic: 'complete_simplification',
        specificItems: ['simplificationInContext'],
        diagramId: 'differenceQuotientDiagram',
        practicalId: 'proving_algebraic_identities_investigation',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations of Surds',
        sectionNumber: 1,
        subTopic: 'surds_and_rationalising',
        specificItems: ['foundations'],
        diagramId: 'rationalVsIrrationalNumberLineDiagram',
        practicalId: 'identifying_surds_sorting_investigation',
        contentKey: 'components'
    },
    {
        id: 'simplificationOfSurds',
        label: 'Simplification of Surds',
        sectionNumber: 2,
        subTopic: 'surds_and_rationalising',
        specificItems: ['simplificationOfSurds'],
        diagramId: 'perfectSquareFactorTreeDiagram',
        practicalId: 'prime_factorisation_surd_simplification_investigation',
        contentKey: 'components'
    },
    {
        id: 'operationsOnSurds',
        label: 'Operations on Surds',
        sectionNumber: 3,
        subTopic: 'surds_and_rationalising',
        specificItems: ['operationsOnSurds'],
        diagramId: 'surdMultiplicationGridDiagram',
        practicalId: 'surd_operations_discovery_activity',
        contentKey: 'components'
    },
    {
        id: 'rationalisingTheDenominator',
        label: 'Rationalising the Denominator',
        sectionNumber: 4,
        subTopic: 'surds_and_rationalising',
        specificItems: ['rationalisingTheDenominator'],
        diagramId: 'conjugatePairsDiagram',
        practicalId: 'rationalising_conjugate_verification_investigation',
        contentKey: 'components'
    },
    {
        id: 'equationsWithSurds',
        label: 'Equations with Surds',
        sectionNumber: 5,
        subTopic: 'surds_and_rationalising',
        specificItems: ['equationsWithSurds'],
        diagramId: 'squaringBothSidesFlowchart',
        practicalId: 'extraneous_roots_surd_equations_investigation',
        contentKey: 'components'
    },
    {
        id: 'advancedSurdTopics',
        label: 'Advanced Surd Topics',
        sectionNumber: 6,
        subTopic: 'surds_and_rationalising',
        specificItems: ['advancedSurdTopics'],
        diagramId: 'nestedRadicalsDiagram',
        practicalId: 'surd_proof_and_irrationality_investigation',
        contentKey: 'components'
    },
    {
        id: 'realLifeApplications',
        label: 'Real-Life Applications of Surds',
        sectionNumber: 7,
        subTopic: 'surds_and_rationalising',
        specificItems: ['realLifeApplications'],
        diagramId: 'pythagoreanSurdTriangleDiagram',
        practicalId: 'exact_values_trigonometry_surds_investigation',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations of Algebraic Fractions',
        sectionNumber: 1,
        subTopic: 'algebraic_fractions',
        specificItems: ['foundations'],
        diagramId: 'algebraicFractionAnatomyDiagram',
        practicalId: 'restrictions_domain_exploration_investigation',
        contentKey: 'components'
    },
    {
        id: 'simplification',
        label: 'Simplification of Algebraic Fractions',
        sectionNumber: 2,
        subTopic: 'algebraic_fractions',
        specificItems: ['simplification'],
        diagramId: 'cancellingCommonFactorsDiagram',
        practicalId: 'factorisation_and_cancellation_investigation',
        contentKey: 'components'
    },
    {
        id: 'multiplicationAndDivision',
        label: 'Multiplication and Division',
        sectionNumber: 3,
        subTopic: 'algebraic_fractions',
        specificItems: ['multiplicationAndDivision'],
        diagramId: 'algebraicFractionMultiplicationDiagram',
        practicalId: 'cross_cancellation_efficiency_investigation',
        contentKey: 'components'
    },
    {
        id: 'additionAndSubtraction',
        label: 'Addition and Subtraction',
        sectionNumber: 4,
        subTopic: 'algebraic_fractions',
        specificItems: ['additionAndSubtraction'],
        diagramId: 'lowestCommonDenominatorDiagram',
        practicalId: 'lcd_building_fractions_investigation',
        contentKey: 'components'
    },
    {
        id: 'complexAndCompoundFractions',
        label: 'Complex and Compound Fractions',
        sectionNumber: 5,
        subTopic: 'algebraic_fractions',
        specificItems: ['complexAndCompoundFractions'],
        diagramId: 'compoundFractionStructureDiagram',
        practicalId: 'lcd_method_vs_divide_method_comparison_activity',
        contentKey: 'components'
    },
    {
        id: 'equationsWithAlgebraicFractions',
        label: 'Equations with Algebraic Fractions',
        sectionNumber: 6,
        subTopic: 'algebraic_fractions',
        specificItems: ['equationsWithAlgebraicFractions'],
        diagramId: 'clearingDenominatorsFlowchart',
        practicalId: 'extraneous_solutions_verification_investigation',
        contentKey: 'components'
    },
    {
        id: 'partialFractions',
        label: 'Partial Fractions',
        sectionNumber: 7,
        subTopic: 'algebraic_fractions',
        specificItems: ['partialFractions'],
        diagramId: 'partialFractionDecompositionDiagram',
        practicalId: 'partial_fractions_recombination_verification_activity',
        contentKey: 'components'
    },
    {
        id: 'realLifeApplications',
        label: 'Real-Life Applications of Algebraic Fractions',
        sectionNumber: 8,
        subTopic: 'algebraic_fractions',
        specificItems: ['realLifeApplications'],
        diagramId: 'workRateProblemDiagram',
        practicalId: 'parallel_resistance_circuit_investigation',
        contentKey: 'components'
    },



    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'indices',
        specificItems: ['foundations'],
        diagramId: 'baseExponentNotationDiagram',
        practicalId: 'repeated_multiplication_exploration',
        contentKey: 'components'
    },
    {
        id: 'basicExponents',
        label: 'Basic Exponents',
        sectionNumber: 2,
        subTopic: 'indices',
        specificItems: ['basicExponents'],
        diagramId: 'positiveNegativeZeroExponentChart',
        practicalId: 'zero_and_negative_exponent_discovery',
        contentKey: 'components'
    },
    {
        id: 'lawsOfIndices',
        label: 'Laws of Indices',
        sectionNumber: 3,
        subTopic: 'indices',
        specificItems: ['lawsOfIndices'],
        diagramId: 'indexLawsSummaryTable',
        practicalId: 'index_laws_pattern_investigation',
        contentKey: 'components'
    },
    {
        id: 'fractionalIndices',
        label: 'Fractional Indices',
        sectionNumber: 4,
        subTopic: 'indices',
        specificItems: ['fractionalIndices'],
        diagramId: 'fractionalExponentRootDiagram',
        practicalId: 'roots_and_fractional_exponents_activity',
        contentKey: 'components'
    },
    {
        id: 'simplificationOfExpressions',
        label: 'Simplification of Expressions',
        sectionNumber: 5,
        subTopic: 'indices',
        specificItems: ['simplificationOfExpressions'],
        diagramId: 'algebraicSimplificationFlowchart',
        practicalId: 'simplifying_index_expressions_challenge',
        contentKey: 'components'
    },
    {
        id: 'specialExponentCases',
        label: 'Special Exponent Cases',
        sectionNumber: 6,
        subTopic: 'indices',
        specificItems: ['specialExponentCases'],
        diagramId: 'powersOfTenNumberLine',
        practicalId: 'exponential_pattern_sequences_activity',
        contentKey: 'components'
    },
    {
        id: 'exponentialEquations',
        label: 'Exponential Equations',
        sectionNumber: 7,
        subTopic: 'indices',
        specificItems: ['exponentialEquations'],
        diagramId: 'sameBaseSolvingDiagram',
        practicalId: 'solving_exponential_equations_investigation',
        contentKey: 'components'
    },
    {
        id: 'scientificNotation',
        label: 'Scientific Notation',
        sectionNumber: 8,
        subTopic: 'indices',
        specificItems: ['scientificNotation'],
        diagramId: 'scientificNotationPlaceValueChart',
        practicalId: 'large_and_small_numbers_real_world_activity',
        contentKey: 'components'
    },
    {
        id: 'graphsOfExponentialFunctions',
        label: 'Graphs of Exponential Functions',
        sectionNumber: 9,
        subTopic: 'indices',
        specificItems: ['graphsOfExponentialFunctions'],
        diagramId: 'exponentialGrowthDecayCurves',
        practicalId: 'graphing_exponential_functions_investigation',
        contentKey: 'components'
    },
    {
        id: 'realLifeApplications',
        label: 'Real-Life Applications',
        sectionNumber: 10,
        subTopic: 'indices',
        specificItems: ['realLifeApplications'],
        diagramId: 'compoundInterestGrowthGraph',
        practicalId: 'radioactive_decay_compound_interest_modelling',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'collecting_like_terms',
        specificItems: ['foundations'],
        diagramId: 'termCoefficientVariablePartDiagram',
        practicalId: 'algebra_tile_grouping_activity',
        contentKey: 'components'
    },
    {
        id: 'identifyingLikeTerms',
        label: 'Identifying Like Terms',
        sectionNumber: 2,
        subTopic: 'collecting_like_terms',
        specificItems: ['identifyingLikeTerms'],
        diagramId: 'likeVsUnlikeTermsSortingChart',
        practicalId: 'card_sort_like_terms_investigation',
        contentKey: 'components'
    },
    {
        id: 'collectingSingleVariable',
        label: 'Collecting: Single Variable',
        sectionNumber: 3,
        subTopic: 'collecting_like_terms',
        specificItems: ['collectingSingleVariable'],
        diagramId: 'singleVariableCollectionNumberLine',
        practicalId: 'single_variable_simplification_activity',
        contentKey: 'components'
    },
    {
        id: 'collectingMultipleVariables',
        label: 'Collecting: Multiple Variables',
        sectionNumber: 4,
        subTopic: 'collecting_like_terms',
        specificItems: ['collectingMultipleVariables'],
        diagramId: 'multiVariableGroupingDiagram',
        practicalId: 'multi_variable_expression_simplification',
        contentKey: 'components'
    },
    {
        id: 'collectingWithDifferentPowers',
        label: 'Collecting with Different Powers',
        sectionNumber: 5,
        subTopic: 'collecting_like_terms',
        specificItems: ['collectingWithDifferentPowers'],
        diagramId: 'polynomialDescendingOrderDiagram',
        practicalId: 'quadratic_expression_collecting_activity',
        contentKey: 'components'
    },
    {
        id: 'collectingWithFractionsAndDecimals',
        label: 'Collecting with Fractions and Decimals',
        sectionNumber: 6,
        subTopic: 'collecting_like_terms',
        specificItems: ['collectingWithFractionsAndDecimals'],
        diagramId: 'fractionalCoefficientNumberLine',
        practicalId: 'fraction_decimal_coefficient_collecting_task',
        contentKey: 'components'
    },
    {
        id: 'collectingWithBrackets',
        label: 'Collecting with Brackets',
        sectionNumber: 7,
        subTopic: 'collecting_like_terms',
        specificItems: ['collectingWithBrackets'],
        diagramId: 'bracketSignExpansionDiagram',
        practicalId: 'negative_bracket_sign_flip_investigation',
        contentKey: 'components'
    },
    {
        id: 'collectingInPolynomials',
        label: 'Collecting in Polynomials',
        sectionNumber: 8,
        subTopic: 'collecting_like_terms',
        specificItems: ['collectingInPolynomials'],
        diagramId: 'polynomialAdditionSubtractionLayout',
        practicalId: 'polynomial_addition_subtraction_activity',
        contentKey: 'components'
    },
    {
        id: 'specialCasesAndEdgeCases',
        label: 'Special Cases and Edge Cases',
        sectionNumber: 9,
        subTopic: 'collecting_like_terms',
        specificItems: ['specialCasesAndEdgeCases'],
        diagramId: 'zeroResultCancellationDiagram',
        practicalId: 'edge_case_spotting_challenge',
        contentKey: 'components'
    },
    {
        id: 'realWorldApplications',
        label: 'Real-World Applications',
        sectionNumber: 10,
        subTopic: 'collecting_like_terms',
        specificItems: ['realWorldApplications'],
        diagramId: 'perimeterAlgebraicExpressionDiagram',
        practicalId: 'perimeter_and_cost_algebraic_modelling',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'expanding_brackets',
        specificItems: ['foundations'],
        diagramId: 'distributiveLawAreaModel',
        practicalId: 'area_model_distributive_law_activity',
        contentKey: 'components'
    },
    {
        id: 'singleBracketsNumericMultiplier',
        label: 'Single Brackets: Numeric Multiplier',
        sectionNumber: 2,
        subTopic: 'expanding_brackets',
        specificItems: ['singleBracketsNumericMultiplier'],
        diagramId: 'numericDistributionArrowDiagram',
        practicalId: 'numeric_multiplier_bracket_expansion_task',
        contentKey: 'components'
    },
    {
        id: 'singleBracketsVariableMultiplier',
        label: 'Single Brackets: Variable Multiplier',
        sectionNumber: 3,
        subTopic: 'expanding_brackets',
        specificItems: ['singleBracketsVariableMultiplier'],
        diagramId: 'variableMultiplierIndexLawLink',
        practicalId: 'variable_multiplier_expansion_investigation',
        contentKey: 'components'
    },
    {
        id: 'expandingTwoBrackets',
        label: 'Expanding Two Brackets',
        sectionNumber: 4,
        subTopic: 'expanding_brackets',
        specificItems: ['expandingTwoBrackets'],
        diagramId: 'FOILGridMethodDiagram',
        practicalId: 'foil_and_grid_method_comparison_activity',
        contentKey: 'components'
    },
    {
        id: 'specialExpansions',
        label: 'Special Expansions',
        sectionNumber: 5,
        subTopic: 'expanding_brackets',
        specificItems: ['specialExpansions'],
        diagramId: 'perfectSquareDifferenceOfSquaresDiagram',
        practicalId: 'algebraic_identities_geometric_proof_activity',
        contentKey: 'components'
    },
    {
        id: 'expandingThreeOrMoreBrackets',
        label: 'Expanding Three or More Brackets',
        sectionNumber: 6,
        subTopic: 'expanding_brackets',
        specificItems: ['expandingThreeOrMoreBrackets'],
        diagramId: 'pascalsTriangleBinomialExpansion',
        practicalId: 'three_bracket_step_by_step_investigation',
        contentKey: 'components'
    },
    {
        id: 'expandingWithNegativeSigns',
        label: 'Expanding with Negative Signs',
        sectionNumber: 7,
        subTopic: 'expanding_brackets',
        specificItems: ['expandingWithNegativeSigns'],
        diagramId: 'negativeMultiplierSignFlipDiagram',
        practicalId: 'negative_bracket_expansion_error_analysis',
        contentKey: 'components'
    },
    {
        id: 'expandingThenCollecting',
        label: 'Expanding then Collecting',
        sectionNumber: 8,
        subTopic: 'expanding_brackets',
        specificItems: ['expandingThenCollecting'],
        diagramId: 'expandCollectSimplifyFlowchart',
        practicalId: 'expand_and_collect_full_simplification_task',
        contentKey: 'components'
    },
    {
        id: 'expandingInEquationsAndFormulae',
        label: 'Expanding in Equations and Formulae',
        sectionNumber: 9,
        subTopic: 'expanding_brackets',
        specificItems: ['expandingInEquationsAndFormulae'],
        diagramId: 'bracketEquationSolvingStepsDiagram',
        practicalId: 'solving_equations_with_brackets_activity',
        contentKey: 'components'
    },
    {
        id: 'realWorldApplications',
        label: 'Real-World Applications',
        sectionNumber: 10,
        subTopic: 'expanding_brackets',
        specificItems: ['realWorldApplications'],
        diagramId: 'algebraicAreaVolumeModel',
        practicalId: 'area_volume_revenue_expansion_modelling',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'substitution_and_evaluation',
        specificItems: ['foundations'],
        diagramId: 'variableReplacementDiagram',
        practicalId: 'bidmas_substitution_order_activity',
        contentKey: 'components'
    },
    {
        id: 'substitutingIntoSimpleExpressions',
        label: 'Substituting into Simple Expressions',
        sectionNumber: 2,
        subTopic: 'substitution_and_evaluation',
        specificItems: ['substitutingIntoSimpleExpressions'],
        diagramId: 'linearExpressionSubstitutionTable',
        practicalId: 'substitution_positive_negative_values_task',
        contentKey: 'components'
    },
    {
        id: 'substitutingWithPowersAndRoots',
        label: 'Substituting with Powers and Roots',
        sectionNumber: 3,
        subTopic: 'substitution_and_evaluation',
        specificItems: ['substitutingWithPowersAndRoots'],
        diagramId: 'negativeBaseEvenOddPowerDiagram',
        practicalId: 'powers_roots_substitution_investigation',
        contentKey: 'components'
    },
    {
        id: 'substitutingTwoVariables',
        label: 'Substituting Two Variables',
        sectionNumber: 4,
        subTopic: 'substitution_and_evaluation',
        specificItems: ['substitutingTwoVariables'],
        diagramId: 'twoVariableSubstitutionGrid',
        practicalId: 'two_variable_expression_evaluation_activity',
        contentKey: 'components'
    },
    {
        id: 'substitutingIntoFormulae',
        label: 'Substituting into Formulae',
        sectionNumber: 5,
        subTopic: 'substitution_and_evaluation',
        specificItems: ['substitutingIntoFormulae'],
        diagramId: 'formulaSubstitutionReferenceSheet',
        practicalId: 'geometry_kinematics_formula_substitution_task',
        contentKey: 'components'
    },
    {
        id: 'substitutingIntoQuadraticExpressions',
        label: 'Substituting into Quadratic Expressions',
        sectionNumber: 6,
        subTopic: 'substitution_and_evaluation',
        specificItems: ['substitutingIntoQuadraticExpressions'],
        diagramId: 'quadraticRootCheckDiagram',
        practicalId: 'quadratic_root_verification_activity',
        contentKey: 'components'
    },
    {
        id: 'substitutingToCheckSolutions',
        label: 'Substituting to Check Solutions',
        sectionNumber: 7,
        subTopic: 'substitution_and_evaluation',
        specificItems: ['substitutingToCheckSolutions'],
        diagramId: 'lhsRhsVerificationDiagram',
        practicalId: 'equation_solution_verification_investigation',
        contentKey: 'components'
    },
    {
        id: 'functionNotationAndEvaluation',
        label: 'Function Notation and Evaluation',
        sectionNumber: 8,
        subTopic: 'substitution_and_evaluation',
        specificItems: ['functionNotationAndEvaluation'],
        diagramId: 'functionMachineInputOutputDiagram',
        practicalId: 'function_notation_composite_functions_activity',
        contentKey: 'components'
    },
    {
        id: 'substitutingIntoComplexExpressions',
        label: 'Substituting into Complex Expressions',
        sectionNumber: 9,
        subTopic: 'substitution_and_evaluation',
        specificItems: ['substitutingIntoComplexExpressions'],
        diagramId: 'bidmasMultiStepExpressionDiagram',
        practicalId: 'complex_expression_evaluation_challenge',
        contentKey: 'components'
    },
    {
        id: 'realWorldApplications',
        label: 'Real-World Applications',
        sectionNumber: 10,
        subTopic: 'substitution_and_evaluation',
        specificItems: ['realWorldApplications'],
        diagramId: 'scienceFormulaSubstitutionExamples',
        practicalId: 'cross_curricular_formula_substitution_task',
        contentKey: 'components'
    },
    // ══════════════════════════════════════════════════════
    // HANDLER 2 — handleArcLength  (sections 11–20)
    // ══════════════════════════════════════════════════════

    {
        id: 'foundations',
        label: 'Circle Vocabulary Foundations',
        sectionNumber: 11,
        subTopic: 'arc_length',
        specificItems: ['foundations'],
        diagramId: 'circlePartsLabelledDiagram',
        practicalId: 'circle_vocabulary_identification_activity',
        contentKey: 'components'
    },
    {
        id: 'angleMeasurementSystems',
        label: 'Angle Measurement Systems',
        sectionNumber: 12,
        subTopic: 'arc_length',
        specificItems: ['angleMeasurementSystems'],
        diagramId: 'degreesVsRadiansCircle',
        practicalId: 'degrees_to_radians_conversion_activity',
        contentKey: 'components'
    },
    {
        id: 'arcLengthFormulas',
        label: 'Arc Length Formulas',
        sectionNumber: 13,
        subTopic: 'arc_length',
        specificItems: ['arcLengthFormulas'],
        diagramId: 'arcLengthSectorDiagram',
        practicalId: 'arc_length_formula_derivation_investigation',
        contentKey: 'components'
    },
    {
        id: 'calculatingArcLength',
        label: 'Calculating Arc Length',
        sectionNumber: 14,
        subTopic: 'arc_length',
        specificItems: ['calculatingArcLength'],
        diagramId: 'sectorWithLabelledArcAndRadii',
        practicalId: 'arc_length_calculation_practice',
        contentKey: 'components'
    },
    {
        id: 'radianMeasureInDepth',
        label: 'Radian Measure In Depth',
        sectionNumber: 15,
        subTopic: 'arc_length',
        specificItems: ['radianMeasureInDepth'],
        diagramId: 'unitCircleRadianDefinition',
        practicalId: 'radian_measure_and_angular_velocity_activity',
        contentKey: 'components'
    },
    {
        id: 'sectorArea',
        label: 'Sector Area',
        sectionNumber: 16,
        subTopic: 'arc_length',
        specificItems: ['sectorArea'],
        diagramId: 'sectorAndSegmentAreaDiagram',
        practicalId: 'sector_and_segment_area_investigation',
        contentKey: 'components'
    },
    {
        id: 'arcLengthInCoordinateGeometry',
        label: 'Arc Length in Coordinate Geometry',
        sectionNumber: 17,
        subTopic: 'arc_length',
        specificItems: ['arcLengthInCoordinateGeometry'],
        diagramId: 'circleOnCoordinatePlane',
        practicalId: 'arc_length_from_circle_equation_activity',
        contentKey: 'components'
    },
    {
        id: 'calculusArcLength',
        label: 'Calculus-Based Arc Length',
        sectionNumber: 18,
        subTopic: 'arc_length',
        specificItems: ['calculusArcLength'],
        diagramId: 'integralArcLengthInfinitesimalDs',
        practicalId: 'calculus_arc_length_integral_workshop',
        contentKey: 'components'
    },
    {
        id: 'specialCasesAndPatterns',
        label: 'Special Cases and Patterns',
        sectionNumber: 19,
        subTopic: 'arc_length',
        specificItems: ['specialCasesAndPatterns'],
        diagramId: 'concentricCirclesArcComparison',
        practicalId: 'arc_vs_chord_comparison_investigation',
        contentKey: 'components'
    },
    {
        id: 'realWorldApplications',
        label: 'Real-World Applications',
        sectionNumber: 20,
        subTopic: 'arc_length',
        specificItems: ['realWorldApplications'],
        diagramId: 'roadCurveArcLengthDiagram',
        practicalId: 'arc_length_in_engineering_and_design',
        contentKey: 'components'
    },

    // ══════════════════════════════════════════════════════
    // HANDLER 3 — handlePythagoreanTheorem  (sections 21–31)
    // ══════════════════════════════════════════════════════

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 21,
        subTopic: 'pythagorean_theorem',
        specificItems: ['foundations'],
        diagramId: 'rightTriangleLegsHypotenuse',
        practicalId: 'squares_and_square_roots_review',
        contentKey: 'components'
    },
    {
        id: 'theTheorem',
        label: 'The Theorem',
        sectionNumber: 22,
        subTopic: 'pythagorean_theorem',
        specificItems: ['theTheorem'],
        diagramId: 'pythagoreanTheoremSquaresOnSides',
        practicalId: 'theorem_geometric_area_demonstration',
        contentKey: 'components'
    },
    {
        id: 'proofsOfTheTheorem',
        label: 'Proofs of the Theorem',
        sectionNumber: 23,
        subTopic: 'pythagorean_theorem',
        specificItems: ['proofsOfTheTheorem'],
        diagramId: 'rearrangementProofFourTriangles',
        practicalId: 'algebraic_and_dissection_proof_workshop',
        contentKey: 'components'
    },
    {
        id: 'pythagoreanTriples',
        label: 'Pythagorean Triples',
        sectionNumber: 24,
        subTopic: 'pythagorean_theorem',
        specificItems: ['pythagoreanTriples'],
        diagramId: 'pythagoreanTriplesFamilyTree',
        practicalId: 'generating_and_verifying_pythagorean_triples',
        contentKey: 'components'
    },
    {
        id: 'converseOfTheTheorem',
        label: 'Converse of the Theorem',
        sectionNumber: 25,
        subTopic: 'pythagorean_theorem',
        specificItems: ['converseOfTheTheorem'],
        diagramId: 'triangleClassificationByConverse',
        practicalId: 'classifying_triangles_from_side_lengths',
        contentKey: 'components'
    },
    {
        id: 'applications2D',
        label: '2D Applications',
        sectionNumber: 26,
        subTopic: 'pythagorean_theorem',
        specificItems: ['applications2D'],
        diagramId: 'rectangleDiagonalPythagorean',
        practicalId: 'pythagorean_theorem_2d_problem_solving',
        contentKey: 'components'
    },
    {
        id: 'applications3D',
        label: '3D Applications',
        sectionNumber: 27,
        subTopic: 'pythagorean_theorem',
        specificItems: ['applications3D'],
        diagramId: 'rectangularBoxSpaceDiagonal',
        practicalId: 'pythagorean_theorem_3d_investigation',
        contentKey: 'components'
    },
    {
        id: 'coordinateGeometryConnections',
        label: 'Coordinate Geometry Connections',
        sectionNumber: 28,
        subTopic: 'pythagorean_theorem',
        specificItems: ['coordinateGeometryConnections'],
        diagramId: 'distanceFormulaCoordinatePlane',
        practicalId: 'distance_formula_derivation_activity',
        contentKey: 'components'
    },
    {
        id: 'connectionToTrigonometry',
        label: 'Connection to Trigonometry',
        sectionNumber: 29,
        subTopic: 'pythagorean_theorem',
        specificItems: ['connectionToTrigonometry'],
        diagramId: 'pythagoreanIdentityUnitCircle',
        practicalId: 'sin_squared_plus_cos_squared_verification',
        contentKey: 'components'
    },
    {
        id: 'generalisationsAndExtensions',
        label: 'Generalisations and Extensions',
        sectionNumber: 30,
        subTopic: 'pythagorean_theorem',
        specificItems: ['generalisationsAndExtensions'],
        diagramId: 'nDimensionalDistanceDiagram',
        practicalId: 'law_of_cosines_as_generalisation_activity',
        contentKey: 'components'
    },
    {
        id: 'realWorldApplications',
        label: 'Real-World Applications',
        sectionNumber: 31,
        subTopic: 'pythagorean_theorem',
        specificItems: ['realWorldApplications'],
        diagramId: 'constructionSquaringCornersDiagram',
        practicalId: 'pythagorean_theorem_real_world_fieldwork',
        contentKey: 'components'
    },

    // ══════════════════════════════════════════════════════
    // HANDLER 4 — handleBearings  (sections 32–42)
    // ══════════════════════════════════════════════════════

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 32,
        subTopic: 'bearings',
        specificItems: ['foundations'],
        diagramId: 'northReferenceDirectionArrow',
        practicalId: 'compass_direction_and_clockwise_angle_activity',
        contentKey: 'components'
    },
    {
        id: 'compassPoints',
        label: 'Compass Points',
        sectionNumber: 33,
        subTopic: 'bearings',
        specificItems: ['compassPoints'],
        diagramId: 'eightPointCompassRose',
        practicalId: 'compass_rose_reading_and_labelling',
        contentKey: 'components'
    },
    {
        id: 'threeFigureBearings',
        label: 'Three-Figure Bearings',
        sectionNumber: 34,
        subTopic: 'bearings',
        specificItems: ['threeFigureBearings'],
        diagramId: 'threeFigureBearingProtractorDiagram',
        practicalId: 'measuring_and_writing_three_figure_bearings',
        contentKey: 'components'
    },
    {
        id: 'backBearings',
        label: 'Back Bearings',
        sectionNumber: 35,
        subTopic: 'bearings',
        specificItems: ['backBearings'],
        diagramId: 'backBearingParallelNorthLines',
        practicalId: 'back_bearing_calculation_activity',
        contentKey: 'components'
    },
    {
        id: 'measuringAndDrawing',
        label: 'Measuring and Drawing Bearings',
        sectionNumber: 36,
        subTopic: 'bearings',
        specificItems: ['measuringAndDrawing'],
        diagramId: 'protractorBearingConstructionDiagram',
        practicalId: 'drawing_bearings_to_scale_investigation',
        contentKey: 'components'
    },
    {
        id: 'bearingsWithTrigonometry',
        label: 'Bearings with Trigonometry',
        sectionNumber: 37,
        subTopic: 'bearings',
        specificItems: ['bearingsWithTrigonometry'],
        diagramId: 'northingEastingComponentsDiagram',
        practicalId: 'sine_cosine_rule_applied_to_bearings',
        contentKey: 'components'
    },
    {
        id: 'multiLegJourneys',
        label: 'Multi-Leg Journeys',
        sectionNumber: 38,
        subTopic: 'bearings',
        specificItems: ['multiLegJourneys'],
        diagramId: 'twoLegJourneyResultantVector',
        practicalId: 'multi_leg_journey_component_method_activity',
        contentKey: 'components'
    },
    {
        id: 'anglesBetweenBearings',
        label: 'Angles Between Bearings',
        sectionNumber: 39,
        subTopic: 'bearings',
        specificItems: ['anglesBetweenBearings'],
        diagramId: 'interiorAngleFromBearingsDiagram',
        practicalId: 'extracting_triangle_angles_from_bearings',
        contentKey: 'components'
    },
    {
        id: 'specialBearingCases',
        label: 'Special Bearing Cases',
        sectionNumber: 40,
        subTopic: 'bearings',
        specificItems: ['specialBearingCases'],
        diagramId: 'bearingLociAndIntersectionDiagram',
        practicalId: 'cardinal_bearings_and_3d_bearing_extension',
        contentKey: 'components'
    },
    {
        id: 'realWorldApplications',
        label: 'Real-World Applications',
        sectionNumber: 41,
        subTopic: 'bearings',
        specificItems: ['realWorldApplications'],
        diagramId: 'maritimeNavigationBearingFix',
        practicalId: 'bearings_navigation_fieldwork_investigation',
        contentKey: 'components'
    },
    {
        id: 'problemSolvingStrategies',
        label: 'Problem-Solving Strategies',
        sectionNumber: 42,
        subTopic: 'bearings',
        specificItems: ['problemSolvingStrategies'],
        diagramId: 'bearingDiagramAnnotatedStepByStep',
        practicalId: 'bearings_exam_problem_solving_workshop',
        contentKey: 'components'
    },




    {
        id: 'perimeter_foundations',
        label: 'Foundations of Perimeter',
        sectionNumber: 1,
        subTopic: 'perimeter',
        specificItems: ['foundations'],
        diagramId: 'perimeterBoundaryDiagram',
        practicalId: 'grid_perimeter_counting_investigation',
        contentKey: 'components'
    },
    {
        id: 'perimeterOfTriangles',
        label: 'Perimeter of Triangles',
        sectionNumber: 2,
        subTopic: 'perimeter',
        specificItems: ['perimeterOfTriangles'],
        diagramId: 'triangleTypesPerimeterDiagram',
        practicalId: 'triangle_perimeter_missing_side_activity',
        contentKey: 'components'
    },
    {
        id: 'perimeterOfQuadrilaterals',
        label: 'Perimeter of Quadrilaterals',
        sectionNumber: 3,
        subTopic: 'perimeter',
        specificItems: ['perimeterOfQuadrilaterals'],
        diagramId: 'quadrilateralFamilyDiagram',
        practicalId: 'fencing_optimisation_investigation',
        contentKey: 'components'
    },
    {
        id: 'perimeterOfPolygons',
        label: 'Perimeter of Polygons',
        sectionNumber: 4,
        subTopic: 'perimeter',
        specificItems: ['perimeterOfPolygons'],
        diagramId: 'regularPolygonsDiagram',
        practicalId: 'regular_polygon_perimeter_activity',
        contentKey: 'components'
    },
    {
        id: 'circumferenceOfACircle',
        label: 'Circumference of a Circle',
        sectionNumber: 5,
        subTopic: 'perimeter',
        specificItems: ['circumferenceOfACircle'],
        diagramId: 'circleRadiusDiameterDiagram',
        practicalId: 'pi_discovery_rolling_circle_investigation',
        contentKey: 'components'
    },
    {
        id: 'perimeter_compositeShapes',
        label: 'Composite Shapes — Perimeter',
        sectionNumber: 6,
        subTopic: 'perimeter',
        specificItems: ['compositeShapes'],
        diagramId: 'compositeShapeBoundaryDiagram',
        practicalId: 'composite_perimeter_floor_plan_activity',
        contentKey: 'components'
    },
    {
        id: 'perimeterInCoordinateGeometry',
        label: 'Perimeter in Coordinate Geometry',
        sectionNumber: 7,
        subTopic: 'perimeter',
        specificItems: ['perimeterInCoordinateGeometry'],
        diagramId: 'coordinateGridDistanceDiagram',
        practicalId: 'coordinate_perimeter_mapping_investigation',
        contentKey: 'components'
    },
    {
        id: 'perimeter_arcLength',
        label: 'Arc Length',
        sectionNumber: 8,
        subTopic: 'perimeter',
        specificItems: ['arcLength'],
        diagramId: 'arcAndSectorDiagram',
        practicalId: 'arc_length_track_design_activity',
        contentKey: 'components'
    },
    {
        id: 'perimeterWithAlgebra',
        label: 'Perimeter with Algebra',
        sectionNumber: 9,
        subTopic: 'perimeter',
        specificItems: ['perimeterWithAlgebra'],
        diagramId: 'algebraicSidesDiagram',
        practicalId: 'algebraic_perimeter_equation_investigation',
        contentKey: 'components'
    },
    {
        id: 'perimeter_realLifeApplications',
        label: 'Real-Life Applications — Perimeter',
        sectionNumber: 10,
        subTopic: 'perimeter',
        specificItems: ['realLifeApplications'],
        diagramId: 'fencingAndFramingDiagram',
        practicalId: 'perimeter_optimisation_investigation',
        contentKey: 'components'
    },

// ─────────────────────────────────────────────────────────────
// 2.  AREA  (sectionNumber 1–10)
// ─────────────────────────────────────────────────────────────

    {
        id: 'area_foundations',
        label: 'Foundations of Area',
        sectionNumber: 1,
        subTopic: 'area',
        specificItems: ['foundations'],
        diagramId: 'squareUnitGridDiagram',
        practicalId: 'grid_area_counting_investigation',
        contentKey: 'components'
    },
    {
        id: 'areaOfTriangles',
        label: 'Area of Triangles',
        sectionNumber: 2,
        subTopic: 'area',
        specificItems: ['areaOfTriangles'],
        diagramId: 'triangleBaseHeightDiagram',
        practicalId: 'triangle_area_geoboard_investigation',
        contentKey: 'components'
    },
    {
        id: 'areaOfQuadrilaterals',
        label: 'Area of Quadrilaterals',
        sectionNumber: 3,
        subTopic: 'area',
        specificItems: ['areaOfQuadrilaterals'],
        diagramId: 'quadrilateralAreaDecompositionDiagram',
        practicalId: 'parallelogram_shear_activity',
        contentKey: 'components'
    },
    {
        id: 'areaOfCircles',
        label: 'Area of Circles',
        sectionNumber: 4,
        subTopic: 'area',
        specificItems: ['areaOfCircles'],
        diagramId: 'circleAreaSectorsDiagram',
        practicalId: 'circle_area_sector_rearrangement_investigation',
        contentKey: 'components'
    },
    {
        id: 'areaOfPolygons',
        label: 'Area of Polygons',
        sectionNumber: 5,
        subTopic: 'area',
        specificItems: ['areaOfPolygons'],
        diagramId: 'regularPolygonApothemDiagram',
        practicalId: 'shoelace_formula_coordinate_activity',
        contentKey: 'components'
    },
    {
        id: 'area_compositeShapes',
        label: 'Composite Shapes — Area',
        sectionNumber: 6,
        subTopic: 'area',
        specificItems: ['compositeShapes'],
        diagramId: 'compositeAreaAddSubtractDiagram',
        practicalId: 'composite_area_room_design_investigation',
        contentKey: 'components'
    },
    {
        id: 'areaInCoordinateGeometry',
        label: 'Area in Coordinate Geometry',
        sectionNumber: 7,
        subTopic: 'area',
        specificItems: ['areaInCoordinateGeometry'],
        diagramId: 'coordinateTriangleAreaDiagram',
        practicalId: 'shoelace_polygon_area_investigation',
        contentKey: 'components'
    },
    {
        id: 'areaWithAlgebra',
        label: 'Area with Algebra',
        sectionNumber: 8,
        subTopic: 'area',
        specificItems: ['areaWithAlgebra'],
        diagramId: 'algebraicExpansionGeometricDiagram',
        practicalId: 'algebraic_area_equation_investigation',
        contentKey: 'components'
    },
    {
        id: 'specialAreaConcepts',
        label: 'Special Area Concepts',
        sectionNumber: 9,
        subTopic: 'area',
        specificItems: ['specialAreaConcepts'],
        diagramId: 'similarShapesScaleFactorDiagram',
        practicalId: 'similar_shapes_area_ratio_investigation',
        contentKey: 'components'
    },
    {
        id: 'area_realLifeApplications',
        label: 'Real-Life Applications — Area',
        sectionNumber: 10,
        subTopic: 'area',
        specificItems: ['realLifeApplications'],
        diagramId: 'flooringAndPaintingDiagram',
        practicalId: 'land_measurement_area_investigation',
        contentKey: 'components'
    },

// ─────────────────────────────────────────────────────────────
// 3.  SECTOR AREA  (sectionNumber 1–10)
// ─────────────────────────────────────────────────────────────

    {
        id: 'sectorArea_foundations',
        label: 'Foundations — Circles and Angles',
        sectionNumber: 1,
        subTopic: 'sector_area',
        specificItems: ['foundations'],
        diagramId: 'circlePartsLabelledDiagram',
        practicalId: 'circle_vocabulary_identification_activity',
        contentKey: 'components'
    },
    {
        id: 'sectorAreaDegrees',
        label: 'Sector Area — Degrees',
        sectionNumber: 2,
        subTopic: 'sector_area',
        specificItems: ['sectorAreaDegrees'],
        diagramId: 'sectorAngleFractionDiagram',
        practicalId: 'sector_area_degrees_pie_chart_investigation',
        contentKey: 'components'
    },
    {
        id: 'sectorAreaRadians',
        label: 'Sector Area — Radians',
        sectionNumber: 3,
        subTopic: 'sector_area',
        specificItems: ['sectorAreaRadians'],
        diagramId: 'radianMeasureDiagram',
        practicalId: 'radian_sector_area_comparison_activity',
        contentKey: 'components'
    },
    {
        id: 'sectorArea_arcLength',
        label: 'Arc Length',
        sectionNumber: 4,
        subTopic: 'sector_area',
        specificItems: ['arcLength'],
        diagramId: 'arcLengthCentralAngleDiagram',
        practicalId: 'arc_length_clock_hand_investigation',
        contentKey: 'components'
    },
    {
        id: 'perimeterOfSector',
        label: 'Perimeter of a Sector',
        sectionNumber: 5,
        subTopic: 'sector_area',
        specificItems: ['perimeterOfSector'],
        diagramId: 'sectorPerimeterDiagram',
        practicalId: 'sector_perimeter_calculation_activity',
        contentKey: 'components'
    },
    {
        id: 'segmentArea',
        label: 'Segment Area',
        sectionNumber: 6,
        subTopic: 'sector_area',
        specificItems: ['segmentArea'],
        diagramId: 'circularSegmentDiagram',
        practicalId: 'segment_area_subtraction_investigation',
        contentKey: 'components'
    },
    {
        id: 'compositeShapesWithSectors',
        label: 'Composite Shapes with Sectors',
        sectionNumber: 7,
        subTopic: 'sector_area',
        specificItems: ['compositeShapesWithSectors'],
        diagramId: 'compositeSectorShapesDiagram',
        practicalId: 'sprinkler_coverage_sector_investigation',
        contentKey: 'components'
    },
    {
        id: 'sectorAreaWithAlgebra',
        label: 'Sector Area with Algebra',
        sectionNumber: 8,
        subTopic: 'sector_area',
        specificItems: ['sectorAreaWithAlgebra'],
        diagramId: 'algebraicSectorDiagram',
        practicalId: 'algebraic_sector_equation_activity',
        contentKey: 'components'
    },
    {
        id: 'radianMeasureInDepth',
        label: 'Radian Measure in Depth',
        sectionNumber: 9,
        subTopic: 'sector_area',
        specificItems: ['radianMeasureInDepth'],
        diagramId: 'radianDefinitionUnitCircleDiagram',
        practicalId: 'radian_conversion_table_investigation',
        contentKey: 'components'
    },
    {
        id: 'sectorArea_realLifeApplications',
        label: 'Real-Life Applications — Sector Area',
        sectionNumber: 10,
        subTopic: 'sector_area',
        specificItems: ['realLifeApplications'],
        diagramId: 'pieChartAndSprinklerDiagram',
        practicalId: 'irrigation_sector_coverage_investigation',
        contentKey: 'components'
    },

// ─────────────────────────────────────────────────────────────
// 4.  SURFACE AREA  (sectionNumber 1–10)
// ─────────────────────────────────────────────────────────────

    {
        id: 'surfaceArea_foundations',
        label: 'Foundations — Nets and Faces',
        sectionNumber: 1,
        subTopic: 'surface_area',
        specificItems: ['foundations'],
        diagramId: 'cuboidNetDiagram',
        practicalId: 'net_folding_3d_shape_activity',
        contentKey: 'components'
    },
    {
        id: 'surfaceAreaOfPrisms',
        label: 'Surface Area of Prisms',
        sectionNumber: 2,
        subTopic: 'surface_area',
        specificItems: ['surfaceAreaOfPrisms'],
        diagramId: 'prismNetFacesDiagram',
        practicalId: 'prism_net_surface_area_investigation',
        contentKey: 'components'
    },
    {
        id: 'surfaceAreaOfPyramids',
        label: 'Surface Area of Pyramids',
        sectionNumber: 3,
        subTopic: 'surface_area',
        specificItems: ['surfaceAreaOfPyramids'],
        diagramId: 'pyramidSlantHeightDiagram',
        practicalId: 'pyramid_net_construction_activity',
        contentKey: 'components'
    },
    {
        id: 'surfaceAreaOfCylinders',
        label: 'Surface Area of Cylinders',
        sectionNumber: 4,
        subTopic: 'surface_area',
        specificItems: ['surfaceAreaOfCylinders'],
        diagramId: 'cylinderNetDiagram',
        practicalId: 'can_label_surface_area_investigation',
        contentKey: 'components'
    },
    {
        id: 'surfaceAreaOfCones',
        label: 'Surface Area of Cones',
        sectionNumber: 5,
        subTopic: 'surface_area',
        specificItems: ['surfaceAreaOfCones'],
        diagramId: 'coneSlantHeightNetDiagram',
        practicalId: 'cone_net_sector_investigation',
        contentKey: 'components'
    },
    {
        id: 'surfaceAreaOfSpheres',
        label: 'Surface Area of Spheres',
        sectionNumber: 6,
        subTopic: 'surface_area',
        specificItems: ['surfaceAreaOfSpheres'],
        diagramId: 'sphereGreatCircleDiagram',
        practicalId: 'sphere_surface_area_orange_peel_activity',
        contentKey: 'components'
    },
    {
        id: 'surfaceArea_compositeSolids',
        label: 'Composite Solids — Surface Area',
        sectionNumber: 7,
        subTopic: 'surface_area',
        specificItems: ['compositeSolids'],
        diagramId: 'compositeSolidHiddenFacesDiagram',
        practicalId: 'composite_solid_packaging_investigation',
        contentKey: 'components'
    },
    {
        id: 'surfaceAreaWithAlgebra',
        label: 'Surface Area with Algebra',
        sectionNumber: 8,
        subTopic: 'surface_area',
        specificItems: ['surfaceAreaWithAlgebra'],
        diagramId: 'algebraicSolidDimensionsDiagram',
        practicalId: 'algebraic_surface_area_equation_activity',
        contentKey: 'components'
    },
    {
        id: 'surfaceArea_specialCasesAndAdvanced',
        label: 'Special Cases and Advanced Concepts',
        sectionNumber: 9,
        subTopic: 'surface_area',
        specificItems: ['specialCasesAndAdvanced'],
        diagramId: 'optimisationSurfaceAreaDiagram',
        practicalId: 'minimum_surface_area_can_design_investigation',
        contentKey: 'components'
    },
    {
        id: 'surfaceArea_realLifeApplications',
        label: 'Real-Life Applications — Surface Area',
        sectionNumber: 10,
        subTopic: 'surface_area',
        specificItems: ['realLifeApplications'],
        diagramId: 'packagingAndPaintingDiagram',
        practicalId: 'packaging_material_minimisation_investigation',
        contentKey: 'components'
    },

// ─────────────────────────────────────────────────────────────
// 5.  VOLUME  (sectionNumber 1–10)
// ─────────────────────────────────────────────────────────────

    {
        id: 'volume_foundations',
        label: 'Foundations of Volume',
        sectionNumber: 1,
        subTopic: 'volume',
        specificItems: ['foundations'],
        diagramId: 'cubicUnitStackingDiagram',
        practicalId: 'unit_cube_counting_activity',
        contentKey: 'components'
    },
    {
        id: 'volumeOfPrisms',
        label: 'Volume of Prisms',
        sectionNumber: 2,
        subTopic: 'volume',
        specificItems: ['volumeOfPrisms'],
        diagramId: 'prismCrossSectionLayerDiagram',
        practicalId: 'prism_volume_layer_stacking_investigation',
        contentKey: 'components'
    },
    {
        id: 'volumeOfPyramids',
        label: 'Volume of Pyramids',
        sectionNumber: 3,
        subTopic: 'volume',
        specificItems: ['volumeOfPyramids'],
        diagramId: 'pyramidVsPrismOneThirdDiagram',
        practicalId: 'pyramid_prism_water_displacement_investigation',
        contentKey: 'components'
    },
    {
        id: 'volumeOfCylinders',
        label: 'Volume of Cylinders',
        sectionNumber: 4,
        subTopic: 'volume',
        specificItems: ['volumeOfCylinders'],
        diagramId: 'cylinderCapacityDiagram',
        practicalId: 'cylindrical_tank_capacity_investigation',
        contentKey: 'components'
    },
    {
        id: 'volumeOfCones',
        label: 'Volume of Cones',
        sectionNumber: 5,
        subTopic: 'volume',
        specificItems: ['volumeOfCones'],
        diagramId: 'coneVsCylinderOneThirdDiagram',
        practicalId: 'cone_cylinder_water_comparison_activity',
        contentKey: 'components'
    },
    {
        id: 'volumeOfSpheres',
        label: 'Volume of Spheres',
        sectionNumber: 6,
        subTopic: 'volume',
        specificItems: ['volumeOfSpheres'],
        diagramId: 'archimedesSphereInCylinderDiagram',
        practicalId: 'sphere_water_displacement_archimedes_activity',
        contentKey: 'components'
    },
    {
        id: 'volume_compositeSolids',
        label: 'Composite Solids — Volume',
        sectionNumber: 7,
        subTopic: 'volume',
        specificItems: ['compositeSolids'],
        diagramId: 'compositeSolidDecompositionDiagram',
        practicalId: 'composite_volume_real_object_investigation',
        contentKey: 'components'
    },
    {
        id: 'volumeWithAlgebra',
        label: 'Volume with Algebra',
        sectionNumber: 8,
        subTopic: 'volume',
        specificItems: ['volumeWithAlgebra'],
        diagramId: 'algebraicVolumeSolidDiagram',
        practicalId: 'algebraic_volume_equation_investigation',
        contentKey: 'components'
    },
    {
        id: 'crossSectionAndCavalieri',
        label: "Cross-Section and Cavalieri's Principle",
        sectionNumber: 9,
        subTopic: 'volume',
        specificItems: ['crossSectionAndCavalieri'],
        diagramId: 'cavalieriStackedSlicesDiagram',
        practicalId: 'cavalieri_coin_stack_volume_activity',
        contentKey: 'components'
    },
    {
        id: 'volume_realLifeApplications',
        label: 'Real-Life Applications — Volume',
        sectionNumber: 10,
        subTopic: 'volume',
        specificItems: ['realLifeApplications'],
        diagramId: 'tankAndContainerVolumeDiagram',
        practicalId: 'container_capacity_optimisation_investigation',
        contentKey: 'components'
    },


// ─────────────────────────────────────────────────────────────
// COMBINED EXPORT
// Flat array ordered by handler then section number.
// Alternatively, use the named arrays individually if the
// workbook loads one handler at a time.
// ─────────────────────────────────────────────────────────────
/**const GEOMETRIC_MEASUREMENT_SECTIONS = [
    ...PERIMETER_SECTIONS,
    ...AREA_SECTIONS,
    ...SECTOR_AREA_SECTIONS,
    ...SURFACE_AREA_SECTIONS,
    ...VOLUME_SECTIONS
];
*/


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'geometry',
        specificItems: ['foundations'],
        diagramId: 'rightTriangleTrigRatios',
        practicalId: 'perimeter_optimisation_investigation',
        contentKey: 'components'          // ← changed from null
    },
    {
        id: 'primaryRatios',
        label: 'Primary Ratios',
        sectionNumber: 2,
        subTopic: 'trigonometry',
        specificItems: ['primaryRatios'],
        diagramId: 'unitCircle',
        practicalId: 'pythagorean_theorem_discovery',
        contentKey: 'components'          // ← changed from null
    }
    
    {
        id: 'reciprocalRatios',
        label: 'Reciprocal Ratios',
        sectionNumber: 3,
        subTopic: 'trigonometry_ratios',
        specificItems: ['reciprocalRatios'],
        diagramId: 'specialAnglesTriangle',
        practicalId: 'bearings_navigation_investigation',
        contentKey: 'components'
    },
    {
        id: 'specialAngles',
        label: 'Special Angles',
        sectionNumber: 4,
        subTopic: 'trigonometry_ratios',
        specificItems: ['specialAngles'],
        diagramId: 'trigIdentitiesVisual',
        practicalId: 'pythagorean_theorem_discovery',
        contentKey: 'components'
    },
    {
        id: 'unitCircleAndExtendedAngles',
        label: 'Unit Circle and Extended Angles',
        sectionNumber: 5,
        subTopic: 'trigonometry_ratios',
        specificItems: ['unitCircleAndExtendedAngles'],
        diagramId: 'radianMeasure',
        practicalId: 'bearings_navigation_investigation',
        contentKey: 'components'
    },
    {
        id: 'calculatingWithRatios',
        label: 'Calculating With Ratios',
        sectionNumber: 6,
        subTopic: 'trigonometry_ratios',
        specificItems: ['calculatingWithRatios'],
        diagramId: 'sineRuleDiagram',
        practicalId: 'pythagorean_theorem_discovery',
        contentKey: 'components'
    },
    {
        id: 'trigonometricIdentities',
        label: 'Trigonometric Identities',
        sectionNumber: 7,
        subTopic: 'trigonometry_ratios',
        specificItems: ['trigonometricIdentities'],
        diagramId: 'trigIdentitiesVisual',
        practicalId: 'pythagorean_theorem_discovery',
        contentKey: 'components'
    },
    {
        id: 'graphsOfTrigFunctions',
        label: 'Graphs of Trig Functions',
        sectionNumber: 8,
        subTopic: 'trigonometry_ratios',
        specificItems: ['graphsOfTrigFunctions'],
        diagramId: 'cosineRuleDiagram',
        practicalId: 'bearings_navigation_investigation',
        contentKey: 'components'
    },
    {
        id: 'solvingTrigEquations',
        label: 'Solving Trig Equations',
        sectionNumber: 9,
        subTopic: 'trigonometry_ratios',
        specificItems: ['solvingTrigEquations'],
        diagramId: 'unitCircle',
        practicalId: 'pythagorean_theorem_discovery',
        contentKey: 'components'
    },
    {
        id: 'realWorldApplications',
        label: 'Real-World Applications',
        sectionNumber: 10,
        subTopic: 'trigonometry_ratios',
        specificItems: ['realWorldApplications'],
        diagramId: 'triangleAreaFormula',
        practicalId: 'bearings_navigation_investigation',
        contentKey: 'components'
    }
    
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

async function testGeometricMeasurementWorkbook() {
    console.log('========================================');
    console.log('GEOMETRIC MEASUREMENT WORKBOOK TEST');
    console.log('All Filtered Contents — Diagrams — Practicals');
    console.log('========================================\n');

    const outputDir = './output';
    ensureOutputDir(outputDir);

    try {
        // ── Step 1: Initialize workbook ───────────────────────────────────────
        console.log('[1/8] Initializing workbook...');
        const workbook = new EnhancedGeometricMeasurementWorkbook({
            width: 1400,
            height: 2000,
            theme: 'geometric',
            explanationLevel: 'advanced',
            includeVisualizations: true,
            includePracticals: true,
            includeDiagrams: true,
            diagramWidth: 1200,
            diagramHeight: 900,
            detailLevel: 'detailed'
        });
        console.log('✓ Workbook initialized\n');

        // ── Step 2: Define all filtered requests ──────────────────────────────
        console.log('[2/8] Preparing geometric measurement section requests...');
        const sectionRequests = GEOMETRIC_MEASUREMENT_SECTIONS.map(section => ({
            ...section,
            request: {
                topic: 'trigonometry',
                subTopic: section.subTopic,
                parameters: {
                    specificItems: section.specificItems,
                    difficulty: 'detailed',
                    focusArea: 'structure'
                },
                practicalId: section.practicalId,
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
        // Each call to handleGeometricProblem runs the topic handler then
        // filterContentByParameters, so workbook.currentContent is already
        // scoped to exactly the specificItems listed in the section config.
        // We snapshot content immediately after each call because
        // workbook.currentContent is overwritten on the next call.
        console.log('[3/8] Processing all geometric measurement contents...');
        const processedSections = [];

        for (const section of sectionRequests) {
            console.log(`  Processing: ${section.label}...`);
            const result = workbook.handleGeometricProblem(section.request);
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
        GEOMETRIC_MEASUREMENT_SECTIONS.forEach(s => {
            const r = diagramResults[s.id];
            console.log(
                `  ${r ? '✓' : '✗'} ${s.label.padEnd(30)} → ${s.diagramId}.png ` +
                (r ? `(${(r.buffer.length / 1024).toFixed(2)} KB)` : '(placeholder)')
            );
        });
        console.log('');

        // ── Step 7: Create DOCX document ─────────────────────────────────────
        console.log('[7/8] Creating DOCX document...');
        const doc = await createGeometricMeasurementDocx(workbook, processedSections, diagramResults);
        console.log('✓ Document structure created\n');

        // ── Step 8: Export to file ────────────────────────────────────────────
        console.log('[8/8] Exporting to file...');
        const filename = path.join(outputDir, 'Geometric_Measurement_Workbook.docx');
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
        console.error('\n✗ ERROR in Geometric Measurement Workbook Test:');
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
    'detailLevel', 'contextualScenarios', 'relatedPracticals',
    'metacognitivePrompts', 'difficulty', 'focusArea',
    // handler metadata fields (flat, non-content)
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
        // depth 0 → HEADING_3 (top-level sub-sections)
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
// DOCX CREATION — all geometric measurement sections
// ========================================

async function createGeometricMeasurementDocx(workbook, processedSections, diagramResults) {

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

    // ── Practical section builder ─────────────────────────────────────────────
    // Reads directly from workbook.mathematicsPracticals[practicalId].
    // No practical data is re-defined here.
    const buildPracticalSection = (practicalId) => {
        const paras = [];
        const practical = workbook.mathematicsPracticals[practicalId];

        if (!practical) {
            paras.push(new Paragraph({
                children: [new TextRun({
                    text: `[Practical data not available: ${practicalId}]`,
                    italics: true
                })],
                spacing: { after: 200 }
            }));
            return paras;
        }

        // Historical Background
        const hist = practical.historicalBackground;
        if (hist) {
            paras.push(
                new Paragraph({
                    text: 'Historical Background',
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 300, after: 200 }
                })
            );
            const histFields = [
                ['Legend', hist.legend], ['Origin', hist.origin],
                ['Story', hist.story], ['Mathematician', hist.mathematician],
                ['Modern Significance', hist.modernSignificance],
                ['Biological Connection', hist.biologicalConnection],
                ['Pythagoras', hist.pythagoras], ['Proof370', hist.proof370],
                ['Garfield Proof', hist.garlieldProof], ['Babylonian', hist.babylonian],
                ['Significance', hist.significance], ['Compass Rose', hist.compassRose],
                ['Transition', hist.transition], ['Modern Bearings', hist.modernBearings],
                ['GPS', hist.gps]
            ];
            histFields.forEach(([label, val]) => {
                if (val) paras.push(boldLabel(label, val));
            });
        }

        // Practical Mathematics
        const practMath = practical.practicalMathematics;
        if (practMath) {
            paras.push(
                new Paragraph({
                    text: 'Practical Mathematics Investigation',
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 400, after: 200 }
                }),
                boldLabel('Title', practMath.title),
                boldLabel('Hypothesis', practMath.hypothesis),
                boldLabel('Purpose', practMath.purpose, { after: 200 })
            );

            if (Array.isArray(practMath.materials) && practMath.materials.length) {
                paras.push(sectionHeader('Materials Required', { before: 300, after: 100 }));
                practMath.materials.slice(0, 15).forEach(m => paras.push(bullet(m, { after: 60 })));
            }

            if (Array.isArray(practMath.procedure) && practMath.procedure.length) {
                paras.push(sectionHeader('Procedure', { before: 300, after: 100 }));
                practMath.procedure.forEach((step, index) => {
                    if (!step || step.trim() === '') {
                        paras.push(spacer(0, 60));
                    } else if (step === step.toUpperCase() && step.includes(':')) {
                        paras.push(
                            new Paragraph({
                                children: [new TextRun({ text: step, bold: true })],
                                spacing: { before: 120, after: 60 }
                            })
                        );
                    } else {
                        paras.push(bullet(step, { after: 60 }));
                    }
                });
            }

            if (Array.isArray(practMath.dataTable) && practMath.dataTable.length) {
                paras.push(sectionHeader('Data Recording Table', { before: 300, after: 100 }));
                practMath.dataTable.forEach(row => {
                    if (Array.isArray(row)) {
                        paras.push(new Paragraph({
                            children: [new TextRun({ text: row.join(' | ') })],
                            spacing: { after: 60 }
                        }));
                    }
                });
            }

            if (Array.isArray(practMath.conclusions) && practMath.conclusions.length) {
                paras.push(sectionHeader('Conclusions', { before: 300, after: 100 }));
                practMath.conclusions.slice(0, 8).forEach(c => paras.push(bullet(c, { after: 80 })));
            }

            if (Array.isArray(practMath.realWorldConnections) && practMath.realWorldConnections.length) {
                paras.push(sectionHeader('Real-World Connections', { before: 300, after: 100 }));
                practMath.realWorldConnections.forEach(conn => paras.push(bullet(conn, { after: 60 })));
            }

            if (Array.isArray(practMath.extensions) && practMath.extensions.length) {
                paras.push(sectionHeader('Extension Activities', { before: 300, after: 100 }));
                practMath.extensions.forEach(ext => paras.push(bullet(ext, { after: 60 })));
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
            text: 'Trigonometric Ratios',
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
        }),
        new Paragraph({
            text: 'Geometric Measurement Workbook',
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 }
        }),
        new Paragraph({
            children: [new TextRun({
                text: 'Covering: Foundations · Primary Ratios · Reciprocal Ratios · Special Angles · Unit Circle · Calculating With Ratios · Identities · Graphs · Solving Equations · Real-World Applications',
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
    GEOMETRIC_MEASUREMENT_SECTIONS.forEach((s, i) => {
        children.push(
            new Paragraph({ text: `${i + 1}. ${s.label}`, spacing: { after: 80 } }),
            new Paragraph({ text: `   ${i + 1}.1 ${s.label} Content`, spacing: { after: 60 } }),
            new Paragraph({ text: `   ${i + 1}.2 ${s.label} Diagram`, spacing: { after: 60 } }),
            new Paragraph({ text: `   ${i + 1}.3 Related Practical`, spacing: { after: 100 } })
        );
    });
    children.push(spacer(0, 400));

    // ══════════════════════════════════════════════════════════════════════════
    // ITERATE EACH SECTION: Content → Diagram → Practical
    //
    // Content block:
    //   - reads section.snapshotContent[section.contentKey]
    //     which is the already-filtered output of:
    //     handleGeometricProblem → getGeometricContent → filterContentByParameters
    //   - passes it to renderContentNode() which recursively walks the
    //     hierarchy and emits docx paragraphs — no topic-specific branching
    //
    // Diagram block:  unchanged from working version
    // Practical block: reads directly from workbook.mathematicsPracticals[practicalId]
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
        //         snapshotContent directly        — when contentKey is null,
        //                                          because handleTrigonometricRatios returns a flat
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
        // - contentKey present → drill into that key
        // - contentKey null    → walk the snapshot itself (flat handler return)
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
            // For flat sections: handleTrigonometricRatios → { foundations, primaryRatios,
            //                    reciprocalRatios, specialAngles, unitCircleAndExtendedAngles,
            //                    calculatingWithRatios, trigonometricIdentities,
            //                    graphsOfTrigFunctions, solvingTrigEquations,
            //                    realWorldApplications }
            //                    (topic/category/summary are silently skipped by SKIP_KEYS)
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
                    text: `Diagram showing the key concepts and visual structure of ${section.label.toLowerCase()}.`,
                    italics: true
                })],
                alignment: AlignmentType.CENTER,
                spacing: { after: 400 }
            })
        );

        // ════════════════════════════════════════
        // PRACTICAL BLOCK
        // Reads directly from workbook.mathematicsPracticals[practicalId].
        // No practical data is re-defined here.
        // ════════════════════════════════════════
        const practicalName =
            workbook.mathematicsPracticals[section.practicalId]?.name || section.practicalId;

        children.push(
            new Paragraph({
                text: `${sectionNum}.3 Related Practical: ${practicalName}`,
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 200 },
                pageBreakBefore: true
            }),
            ...buildPracticalSection(section.practicalId)
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
                text: 'Enhanced Geometric Measurement Workbook — Trigonometric Ratios',
                italics: true
            })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 50 }
        }),
        new Paragraph({
            children: [new TextRun({
                text: 'Foundations · Primary Ratios · Reciprocal Ratios · Special Angles · Unit Circle · Identities · Graphs · Applications',
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
                    run: { size: 52, bold: true, font: 'Arial', color: '0d47a1' },
                    paragraph: { spacing: { before: 0, after: 240 }, alignment: AlignmentType.CENTER }
                },
                {
                    id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
                    run: { size: 36, bold: true, font: 'Arial', color: '0d47a1' },
                    paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 0 }
                },
                {
                    id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
                    run: { size: 28, bold: true, font: 'Arial', color: '1565c0' },
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
    console.log('GEOMETRIC MEASUREMENT WORKBOOK — DETAILED SUMMARY');
    console.log('========================================\n');

    console.log('SECTIONS PROCESSED:');
    console.log('─────────────────────────────────────');
    processedSections.forEach((s, i) => {
        const contentKeys = Object.keys(s.snapshotContent).join(', ');
        console.log(`  ${i + 1}. ${s.label.padEnd(30)} → ${s.validSteps.length} steps | keys: [${contentKeys}]`);
    });

    console.log('\nDIAGRAMS:');
    console.log('─────────────────────────────────────');
    GEOMETRIC_MEASUREMENT_SECTIONS.forEach(s => {
        const r = diagramResults[s.id];
        const status = r ? `✓ ${(r.buffer.length / 1024).toFixed(2)} KB` : '✗ placeholder';
        console.log(`  [${s.diagramId.padEnd(28)}] ${status}`);
    });

    console.log('\nPRACTICALS:');
    console.log('─────────────────────────────────────');
    GEOMETRIC_MEASUREMENT_SECTIONS.forEach(s => {
        const practical = workbook.mathematicsPracticals[s.practicalId];
        const name = practical?.name || s.practicalId;
        console.log(`  ${practical ? '✓' : '✗'} ${s.practicalId.padEnd(42)} → ${name}`);
    });

    console.log('\nCONTENT RENDERING APPROACH:');
    console.log('─────────────────────────────────────');
    console.log('  ✓ renderContentNode() — generic recursive tree walk');
    console.log('  ✓ Zero topic-specific branching in createGeometricMeasurementDocx');
    console.log('  ✓ Data sourced: handleGeometricProblem → filterContentByParameters → snapshotContent');
    console.log('  ✓ contentKey null → snapshotContent directly (trigonometric ratios flat return)');
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
    GEOMETRIC_MEASUREMENT_SECTIONS.forEach(s => {
        const r = diagramResults[s.id];
        if (r) console.log(`  PNG  : output/${s.diagramId}_diagram.png`);
    });

    console.log('\n========================================\n');
}

// ========================================
// RUN THE TEST
// ========================================

console.log('Initiating Geometric Measurement Workbook Test...\n');

testGeometricMeasurementWorkbook()
    .then(result => {
        if (result.success) {
            console.log('════════════════════════════════════════');
            console.log('✓✓✓ TEST COMPLETED SUCCESSFULLY ✓✓✓');
            console.log('════════════════════════════════════════');
            console.log(`\nMain output  : ${result.filename}`);
            console.log(`Size         : ${(result.fileSize / 1024).toFixed(2)} KB`);
            console.log('\nDiagram PNGs saved to ./output/');
            console.log('\nSections covered:');
            GEOMETRIC_MEASUREMENT_SECTIONS.forEach((s, i) => console.log(`  ${i + 1}. ${s.label}`));
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
export { testGeometricMeasurementWorkbook, createGeometricMeasurementDocx };
