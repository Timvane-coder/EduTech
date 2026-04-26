// ========================================
// CONSOLIDATED WORKBOOK TEST
// Combines all four subject workbooks into a single file:
//   1. Molecular Biology  (Nucleic Acids)
//   2. Organic Chemistry  (Hydrocarbons)
//   3. Classical Mechanics (Momentum & Collisions)
//   4. Geometric Measurement (Trigonometric Ratios)
//
// On launch the user is prompted to choose which workbook to generate.
// All four share:
//   • The same utility functions (PNG validation, dir creation, diagram fetch)
//   • The same main test pipeline (8 steps)
//   • The same generic recursive content renderer
//   • The same DOCX paragraph helpers and numbering config
//   • The same image-paragraph and experiment-section builders (per-workbook
//     field names are resolved via a thin adapter passed at call-time)
// ========================================

import { EnhancedMolecularBiologyWorkbook }    from './biology.js';
import { EnhancedOrganicChemistryWorkbook }     from './chemistry.js';
import { EnhancedMechanicsWorkbook }            from './physics.js';
import { EnhancedGeometricMeasurementWorkbook } from './mathswithexperiments.js';

import {
    Document, Packer, Paragraph, TextRun, HeadingLevel,
    AlignmentType, ImageRun, LevelFormat
} from 'docx';
import * as fs   from 'fs';
import * as path from 'path';
import * as readline from 'readline';


// ════════════════════════════════════════════════════════════════════════════
// SECTION CONFIGURATIONS
// Each array is exactly as it appears in the individual test files.
// ════════════════════════════════════════════════════════════════════════════

// ── 1. Molecular Biology — Nucleic Acids ─────────────────────────────────
const NUCLEIC_ACID_SECTIONS = [
    { id: 'foundations',               label: 'Foundations',                    sectionNumber: 782, subTopic: 'nucleicAcids', specificItems: ['foundations'],               diagramId: 'nucleotideStructureDiagram',                      experimentId: 'hooke_cell_discovery',                    contentKey: 'components' },
    { id: 'DNAStructure',              label: 'DNA Structure',                  sectionNumber: 783, subTopic: 'nucleicAcids', specificItems: ['DNAStructure'],              diagramId: 'dnaStructure',                                    experimentId: 'chevreuls_fatty_acids',                   contentKey: 'components' },
    { id: 'RNAStructure',              label: 'RNA Structure and Types',         sectionNumber: 784, subTopic: 'nucleicAcids', specificItems: ['RNAStructure'],              diagramId: 'rnaStructure',                                    experimentId: 'sangers_insulin_sequencing',              contentKey: 'components' },
    { id: 'DNAReplication',            label: 'DNA Replication',                sectionNumber: 785, subTopic: 'nucleicAcids', specificItems: ['DNAReplication'],            diagramId: 'dnaReplication',                                  experimentId: 'overton_lipid_experiment',                contentKey: 'components' },
    { id: 'transcription',             label: 'Transcription',                  sectionNumber: 786, subTopic: 'nucleicAcids', specificItems: ['transcription'],             diagramId: 'transcription',                                   experimentId: 'fischer_lock_and_key',                    contentKey: 'components' },
    { id: 'geneticCode',               label: 'The Genetic Code',               sectionNumber: 787, subTopic: 'nucleicAcids', specificItems: ['geneticCode'],               diagramId: 'codonChart',                                      experimentId: 'overton_lipid_experiment',                contentKey: 'components' },
    { id: 'translation',               label: 'Translation',                    sectionNumber: 788, subTopic: 'nucleicAcids', specificItems: ['translation'],               diagramId: 'translation',                                     experimentId: 'hooke_cell_discovery',                    contentKey: 'components' },
    { id: 'geneRegulation',            label: 'Gene Regulation',                sectionNumber: 789, subTopic: 'nucleicAcids', specificItems: ['geneRegulation'],            diagramId: 'chromosomes',                                     experimentId: 'chevreuls_fatty_acids',                   contentKey: 'components' },
    { id: 'mutations',                 label: 'Mutations',                      sectionNumber: 790, subTopic: 'nucleicAcids', specificItems: ['mutations'],                 diagramId: 'mutationTypesClassificationDiagram',              experimentId: 'sangers_insulin_sequencing',              contentKey: 'components' },
    { id: 'biotechnologyApplications', label: 'Biotechnology Applications',     sectionNumber: 791, subTopic: 'nucleicAcids', specificItems: ['biotechnologyApplications'],  diagramId: 'dnaReplication',                                  experimentId: 'overton_lipid_experiment',                contentKey: 'components' },
    { id: 'nucleicAcidsInDisease',     label: 'Nucleic Acids in Disease',       sectionNumber: 792, subTopic: 'nucleicAcids', specificItems: ['nucleicAcidsInDisease'],      diagramId: 'chromosomes',                                     experimentId: 'fischer_lock_and_key',                    contentKey: 'components' },
];

// ── 2. Organic Chemistry — Hydrocarbons ──────────────────────────────────
const ORGANIC_CHEMISTRY_SECTIONS = [
    { id: 'foundations',              label: 'Foundations',                          sectionNumber: 1,  subTopic: 'hydrocarbons', specificItems: ['foundations'],              diagramId: 'carbonHybridisationOrbitalGeometryDiagram',                 experimentId: 'sp3_sp2_sp_model_building_molecular_geometry_experiment',          contentKey: 'components' },
    { id: 'alkanes',                  label: 'Alkanes',                              sectionNumber: 2,  subTopic: 'hydrocarbons', specificItems: ['alkanes'],                  diagramId: 'alkaneHomologousSeriesBoilingPointTrendChart',               experimentId: 'free_radical_halogenation_of_methane_uv_light_experiment',         contentKey: 'components' },
    { id: 'alkenes',                  label: 'Alkenes',                              sectionNumber: 3,  subTopic: 'hydrocarbons', specificItems: ['alkenes'],                  diagramId: 'electrophilicAdditionBromoniumIonMechanism',                 experimentId: 'bromine_water_decolourisation_alkene_addition_experiment',         contentKey: 'components' },
    { id: 'alkynes',                  label: 'Alkynes',                              sectionNumber: 4,  subTopic: 'hydrocarbons', specificItems: ['alkynes'],                  diagramId: 'alkyneSPHybridisationLinearGeometryDiagram',                 experimentId: 'silver_nitrate_terminal_alkyne_precipitate_experiment',            contentKey: 'components' },
    { id: 'aromaticHydrocarbons',     label: 'Aromatic Hydrocarbons',               sectionNumber: 5,  subTopic: 'hydrocarbons', specificItems: ['aromaticHydrocarbons'],     diagramId: 'benzeneResonanceDelocalisation',                            experimentId: 'nitration_of_benzene_nitrating_mixture_eas_experiment',           contentKey: 'components' },
    { id: 'petroleumAndFuels',        label: 'Petroleum and Fuels',                 sectionNumber: 6,  subTopic: 'hydrocarbons', specificItems: ['petroleumAndFuels'],        diagramId: 'fractionalDistillationColumnFractionsBpDiagram',            experimentId: 'fractional_distillation_crude_oil_model_fractions_experiment',    contentKey: 'components' },
    { id: 'structuralAnalysis',       label: 'Structural Analysis and Identification', sectionNumber: 7, subTopic: 'hydrocarbons', specificItems: ['structuralAnalysis'],      diagramId: 'chemicalTestsHydrocarbonIdentificationFlowchart',           experimentId: 'bromine_water_kmno4_combustion_hydrocarbon_test_experiment',       contentKey: 'components' },
    { id: 'isomerismInHydrocarbons',  label: 'Isomerism in Hydrocarbons',           sectionNumber: 8,  subTopic: 'hydrocarbons', specificItems: ['isomerismInHydrocarbons'],  diagramId: 'chainPositionGeometricIsomerismComparisonDiagram',          experimentId: 'cis_trans_but2ene_boiling_point_comparison_experiment',           contentKey: 'components' },
    { id: 'reactionsSummary',         label: 'Reactions Summary',                   sectionNumber: 9,  subTopic: 'hydrocarbons', specificItems: ['reactionsSummary'],         diagramId: 'hydrocarbonReactionTypesCrossReferenceTable',               experimentId: 'hydrocarbon_reaction_classification_card_sort_experiment',        contentKey: 'components' },
    { id: 'realWorldApplications',    label: 'Real-World Applications',             sectionNumber: 10, subTopic: 'hydrocarbons', specificItems: ['realWorldApplications'],    diagramId: 'petrochemicalFeedstockProductsFlowDiagram',                 experimentId: 'combustion_enthalpy_candle_calorimetry_hydrocarbons_experiment',  contentKey: 'components' },
];

// ── 3. Classical Mechanics — Momentum & Collisions ───────────────────────
const MECHANICS_SECTIONS = [
    { id: 'foundations',              label: 'Foundations',                       sectionNumber: 1,  subTopic: 'momentumCollisions', specificItems: ['foundations'],              diagramId: 'linearMomentumMassVelocityVectorDiagram',                          experimentId: 'momentum_mass_velocity_trolley_comparison_experiment',                   contentKey: 'components' },
    { id: 'impulse',                  label: 'Impulse',                           sectionNumber: 2,  subTopic: 'momentumCollisions', specificItems: ['impulse'],                  diagramId: 'forceTimeGraphImpulseAreaAverageForceDiagram',                     experimentId: 'impulse_force_sensor_ball_impact_collision_time_experiment',             contentKey: 'components' },
    { id: 'conservation_of_momentum', label: 'Conservation of Momentum',         sectionNumber: 3,  subTopic: 'momentumCollisions', specificItems: ['conservation_of_momentum'], diagramId: 'beforeAfterCollisionMomentumVectorsDiagram',                       experimentId: 'conservation_of_momentum_air_track_glider_collision_experiment',        contentKey: 'components' },
    { id: 'types_of_collisions',      label: 'Types of Collisions',              sectionNumber: 4,  subTopic: 'momentumCollisions', specificItems: ['types_of_collisions'],       diagramId: 'elasticInelasticPerfectlyInelasticKineticEnergyComparisonDiagram', experimentId: 'elastic_vs_inelastic_collision_energy_loss_trolleys_experiment',         contentKey: 'components' },
    { id: 'coefficient_of_restitution', label: 'Coefficient of Restitution',     sectionNumber: 5,  subTopic: 'momentumCollisions', specificItems: ['coefficient_of_restitution'], diagramId: 'bouncingBallDropHeightRestitutionCoefficientDiagram',             experimentId: 'coefficient_of_restitution_ball_drop_bounce_height_experiment',         contentKey: 'components' },
    { id: 'explosions_and_recoil',    label: 'Explosions and Recoil',            sectionNumber: 6,  subTopic: 'momentumCollisions', specificItems: ['explosions_and_recoil'],     diagramId: 'explosionRecoilMomentumConservationVectorDiagram',                 experimentId: 'recoil_spring_loaded_trolley_separation_velocity_experiment',            contentKey: 'components' },
    { id: 'centre_of_mass',           label: 'Centre of Mass',                   sectionNumber: 7,  subTopic: 'momentumCollisions', specificItems: ['centre_of_mass'],           diagramId: 'centreOfMassDiscreteAndContinuousSystemsDiagram',                  experimentId: 'centre_of_mass_irregular_lamina_plumb_line_experiment',                 contentKey: 'components' },
    { id: 'collisions_2D',            label: '2D Collisions',                    sectionNumber: 8,  subTopic: 'momentumCollisions', specificItems: ['collisions_2D'],            diagramId: 'twoDimensionalGlancingCollisionComponentVectorsDiagram',           experimentId: 'two_dimensional_collision_ball_bearings_carbon_paper_experiment',       contentKey: 'components' },
    { id: 'angular_momentum',         label: 'Angular Momentum',                 sectionNumber: 9,  subTopic: 'momentumCollisions', specificItems: ['angular_momentum'],         diagramId: 'angularMomentumConservationSpinnerArmExtensionDiagram',            experimentId: 'angular_momentum_conservation_rotating_stool_mass_extension_experiment', contentKey: 'components' },
    { id: 'advanced_contexts',        label: 'Momentum in Advanced Contexts',    sectionNumber: 10, subTopic: 'momentumCollisions', specificItems: ['advanced_contexts'],        diagramId: 'ballisticPendulumMomentumEnergyTwoStageDiagram',                   experimentId: 'ballistic_pendulum_bullet_speed_momentum_energy_experiment',             contentKey: 'components' },
];

// ── 4. Geometric Measurement — Trigonometric Ratios ──────────────────────
const GEOMETRIC_MEASUREMENT_SECTIONS = [
    { id: 'foundations',               label: 'Foundations',                      sectionNumber: 11, subTopic: 'trigonometry_ratios', specificItems: ['foundations'],               diagramId: 'rightTriangleTrigRatios',  experimentId: 'perimeter_optimisation_investigation',  contentKey: 'components' },
    { id: 'primaryRatios',             label: 'Primary Ratios',                   sectionNumber: 12, subTopic: 'trigonometry_ratios', specificItems: ['primaryRatios'],             diagramId: 'unitCircle',               experimentId: 'pythagorean_theorem_discovery',         contentKey: 'components' },
    { id: 'reciprocalRatios',          label: 'Reciprocal Ratios',                sectionNumber: 13, subTopic: 'trigonometry_ratios', specificItems: ['reciprocalRatios'],          diagramId: 'specialAnglesTriangle',    experimentId: 'bearings_navigation_investigation',    contentKey: 'components' },
    { id: 'specialAngles',             label: 'Special Angles',                   sectionNumber: 14, subTopic: 'trigonometry_ratios', specificItems: ['specialAngles'],             diagramId: 'trigIdentitiesVisual',     experimentId: 'pythagorean_theorem_discovery',         contentKey: 'components' },
    { id: 'unitCircleAndExtendedAngles', label: 'Unit Circle and Extended Angles', sectionNumber: 15, subTopic: 'trigonometry_ratios', specificItems: ['unitCircleAndExtendedAngles'], diagramId: 'radianMeasure',          experimentId: 'bearings_navigation_investigation',    contentKey: 'components' },
    { id: 'calculatingWithRatios',     label: 'Calculating With Ratios',          sectionNumber: 16, subTopic: 'trigonometry_ratios', specificItems: ['calculatingWithRatios'],     diagramId: 'sineRuleDiagram',          experimentId: 'pythagorean_theorem_discovery',         contentKey: 'components' },
    { id: 'trigonometricIdentities',   label: 'Trigonometric Identities',         sectionNumber: 17, subTopic: 'trigonometry_ratios', specificItems: ['trigonometricIdentities'],   diagramId: 'trigIdentitiesVisual',     experimentId: 'pythagorean_theorem_discovery',         contentKey: 'components' },
    { id: 'graphsOfTrigFunctions',     label: 'Graphs of Trig Functions',         sectionNumber: 18, subTopic: 'trigonometry_ratios', specificItems: ['graphsOfTrigFunctions'],     diagramId: 'cosineRuleDiagram',        experimentId: 'bearings_navigation_investigation',    contentKey: 'components' },
    { id: 'solvingTrigEquations',      label: 'Solving Trig Equations',           sectionNumber: 19, subTopic: 'trigonometry_ratios', specificItems: ['solvingTrigEquations'],      diagramId: 'unitCircle',               experimentId: 'pythagorean_theorem_discovery',         contentKey: 'components' },
    { id: 'realWorldApplications',     label: 'Real-World Applications',          sectionNumber: 20, subTopic: 'trigonometry_ratios', specificItems: ['realWorldApplications'],     diagramId: 'triangleAreaFormula',      experimentId: 'bearings_navigation_investigation',    contentKey: 'components' },
];


// ════════════════════════════════════════════════════════════════════════════
// WORKBOOK REGISTRY
// Maps a numeric menu choice to everything needed to run a workbook:
//   WorkbookClass    — the constructor to instantiate
//   sections         — the section-config array
//   topic            — value for request.topic
//   experimentsKey   — workbook property that holds experiment data
//   experimentsStore — function(wb) → the experiment store object
//   itemLabelKeys    — extra array-item label keys beyond name/title/type
//   diagramOptions   — extra options passed to getDiagramBuffer
//   docxTheme        — { title, subtitle, coverLine, footerLine1, footerLine2,
//                        colors: { title, h1, h2, h3 }, outputFile }
//   handleProblem    — function(wb, req) → result
// ════════════════════════════════════════════════════════════════════════════

const WORKBOOK_REGISTRY = {

    '1': {
        label: 'Molecular Biology — Nucleic Acids',
        WorkbookClass: EnhancedMolecularBiologyWorkbook,
        constructorOpts: { theme: 'molecular' },
        sections: NUCLEIC_ACID_SECTIONS,
        topic: 'molecular',
        experimentsKey: 'molecularExperiments',
        itemLabelKeys: [],                  // beyond name/title/type
        diagramOptions: { showLabels: true, backgroundColor: '#FFFFFF' },
        handleProblem: (wb, req) => wb.handleMolecularProblem(req),
        buildHistFields: (hist) => [
            ['Scientist', hist.scientist], ['Year', hist.year],
            ['Hypothesis', hist.hypothesis], ['Proposal', hist.proposal],
            ['Context', hist.context], ['Significance', hist.significance],
        ],
        buildLabSections: null,             // uses generic lab builder
        docxTheme: {
            title: 'Nucleic Acids',
            subtitle: 'Molecular Biology Workbook',
            coverLine: 'Covering: Nucleotides · DNA Structure · RNA Structure · Central Dogma · Genetic Code · Chloroplasts',
            footerLine1: 'Enhanced Molecular Biology Workbook — Nucleic Acids',
            footerLine2: 'Nucleotides · DNA Structure · RNA Structure · Central Dogma · Genetic Code · Chloroplasts',
            colors: { title: '1F4E79', h1: '1F4E79', h2: '2E75B6', h3: '404040' },
            outputFile: 'Nucleic_Acid_Workbook.docx',
            tocEntryLabel: 'Related Experiment',
        },
    },

    '2': {
        label: 'Organic Chemistry — Hydrocarbons',
        WorkbookClass: EnhancedOrganicChemistryWorkbook,
        constructorOpts: { theme: 'organic' },
        sections: ORGANIC_CHEMISTRY_SECTIONS,
        topic: null,                        // uses section.subTopic as topic
        experimentsKey: 'organicExperiments',
        itemLabelKeys: ['hydrocarbon'],     // extra label key for organic arrays
        diagramOptions: { showLabels: true, backgroundColor: '#FFFFFF' },
        handleProblem: (wb, req) => wb.handleOrganicChemistryProblem(req),
        buildHistFields: (hist) => [
            ['Scientist', hist.scientist], ['Year', hist.year],
            ['Modern Development', hist.modernDevelopment],
            ['Hypothesis', hist.hypothesis], ['Proposal', hist.proposal],
            ['Context', hist.context], ['Industrial Context', hist.industrialContext],
            ['Significance', hist.significance],
        ],
        docxTheme: {
            title: 'Organic Chemistry',
            subtitle: 'Enhanced Organic Chemistry Workbook',
            coverLine: 'Covering: Hydrocarbons · Functional Groups · Organic Reactions · Stereochemistry · Spectroscopy · Polymers',
            footerLine1: 'Enhanced Organic Chemistry Workbook',
            footerLine2: 'Hydrocarbons · Functional Groups · Organic Reactions · Stereochemistry · Spectroscopy · Polymers',
            colors: { title: '1B4F72', h1: '1B4F72', h2: '1A5276', h3: '2E86C1' },
            outputFile: 'Organic_Chemistry_Workbook.docx',
            tocEntryLabel: 'Related Experiment',
        },
    },

    '3': {
        label: 'Classical Mechanics — Momentum & Collisions',
        WorkbookClass: EnhancedMechanicsWorkbook,
        constructorOpts: { theme: 'mechanics' },
        sections: MECHANICS_SECTIONS,
        topic: 'momentum_collisions',
        experimentsKey: 'mechanicsExperiments',
        itemLabelKeys: ['law'],             // extra label key for mechanics arrays
        diagramOptions: { showLabels: true, showGrid: true, showAxes: true, backgroundColor: '#FFFFFF' },
        handleProblem: (wb, req) => wb.handleMechanicsProblem(req),
        buildHistFields: (hist) => [
            ['Scientist', hist.scientist], ['Year', hist.year],
            ['Location', hist.location], ['Discovery', hist.discovery],
            ['Observation', hist.observation], ['Method', hist.method],
            ['Context', hist.context], ['Significance', hist.significance],
            ['Contribution', hist.contribution],
        ],
        docxTheme: {
            title: 'Mechanics',
            subtitle: 'Classical Mechanics Workbook',
            coverLine: 'Covering: Momentum · Impulse · Collisions · Restitution · Explosions · Centre of Mass · Angular Momentum',
            footerLine1: 'Enhanced Mechanics Workbook — Momentum and Collisions',
            footerLine2: 'Momentum · Impulse · Collisions · Restitution · Explosions · Centre of Mass · Angular Momentum',
            colors: { title: '7B241C', h1: '7B241C', h2: '922B21', h3: 'CB4335' },
            outputFile: 'Mechanics_Workbook.docx',
            tocEntryLabel: 'Related Experiment',
        },
    },

    '4': {
        label: 'Geometric Measurement — Trigonometric Ratios',
        WorkbookClass: EnhancedGeometricMeasurementWorkbook,
        constructorOpts: { theme: 'geometric' },
        sections: GEOMETRIC_MEASUREMENT_SECTIONS,
        topic: null,                        // uses section.subTopic as topic
        experimentsKey: 'mathematicsExperiments',
        itemLabelKeys: [],
        diagramOptions: { showLabels: true, backgroundColor: '#FFFFFF' },
        handleProblem: (wb, req) => wb.handleGeometricProblem(req),
        buildHistFields: (hist) => [
            ['Legend', hist.legend], ['Origin', hist.origin],
            ['Story', hist.story], ['Mathematician', hist.mathematician],
            ['Modern Significance', hist.modernSignificance],
            ['Biological Connection', hist.biologicalConnection],
            ['Pythagoras', hist.pythagoras], ['Proof370', hist.proof370],
            ['Garfield Proof', hist.garlieldProof], ['Babylonian', hist.babylonian],
            ['Significance', hist.significance], ['Compass Rose', hist.compassRose],
            ['Transition', hist.transition], ['Modern Bearings', hist.modernBearings],
            ['GPS', hist.gps],
        ],
        docxTheme: {
            title: 'Trigonometric Ratios',
            subtitle: 'Geometric Measurement Workbook',
            coverLine: 'Covering: Foundations · Primary Ratios · Reciprocal Ratios · Special Angles · Unit Circle · Calculating With Ratios · Identities · Graphs · Solving Equations · Real-World Applications',
            footerLine1: 'Enhanced Geometric Measurement Workbook — Trigonometric Ratios',
            footerLine2: 'Foundations · Primary Ratios · Reciprocal Ratios · Special Angles · Unit Circle · Identities · Graphs · Applications',
            colors: { title: '0d47a1', h1: '0d47a1', h2: '1565c0', h3: '404040' },
            outputFile: 'Geometric_Measurement_Workbook.docx',
            tocEntryLabel: 'Related Practical',
        },
    },
};


// ════════════════════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS  (shared across all workbooks — unchanged from originals)
// ════════════════════════════════════════════════════════════════════════════

/** Validate PNG magic bytes */
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

/** Ensure output directory exists */
function ensureOutputDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`  ✓ Created output directory: ${dir}`);
    }
}

/**
 * Fetch + validate diagram buffer with retry and disk round-trip.
 * Identical logic to all four originals; diagramOptions passed from registry.
 */
async function fetchDiagramBuffer(workbook, diagramId, outputDir, diagramOptions, maxAttempts = 3) {
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
                ...diagramOptions
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

    // Disk write + re-read — guarantees fully-flushed buffer for embedding
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


// ════════════════════════════════════════════════════════════════════════════
// GENERIC RECURSIVE CONTENT RENDERER
// Identical behaviour across all four workbooks.
// snake_case and camelCase keys are both decoded to Title Case.
// ════════════════════════════════════════════════════════════════════════════

const SKIP_KEYS = new Set([
    'detailLevel', 'contextualScenarios', 'relatedExperiments', 'relatedPracticals',
    'metacognitivePrompts', 'difficulty', 'focusArea',
    'topic', 'category', 'summary',
]);

/**
 * @param {string}   key
 * @param {*}        value
 * @param {number}   depth
 * @param {object}   helpers  — { boldLabel, bullet, subBullet, sectionHeader, paras, itemLabelKeys }
 */
function renderContentNode(key, value, depth, helpers) {
    const { boldLabel, bullet, subBullet, sectionHeader, paras, itemLabelKeys } = helpers;

    if (SKIP_KEYS.has(key)) return;

    // snake_case + camelCase → Title Case with spaces
    const displayKey = key
        .replace(/_/g, ' ')
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, c => c.toUpperCase())
        .trim();

    // ── Primitive ─────────────────────────────────────────────────────────
    if (typeof value === 'string' || typeof value === 'number') {
        paras.push(boldLabel(displayKey, String(value)));
        return;
    }

    // ── Array ──────────────────────────────────────────────────────────────
    if (Array.isArray(value)) {
        if (value.length === 0) return;

        paras.push(new Paragraph({
            children: [new TextRun({ text: displayKey + ':', bold: true })],
            spacing: { before: 120, after: 60 }
        }));

        value.forEach(item => {
            if (typeof item === 'string' || typeof item === 'number') {
                paras.push(depth <= 1 ? bullet(String(item)) : subBullet(String(item)));
            } else if (typeof item === 'object' && item !== null) {
                // Resolve the best display label from the item
                const extraKeys = itemLabelKeys || [];
                const allLabelKeys = ['name', 'title', 'type', ...extraKeys];
                const itemLabel = allLabelKeys.reduce((found, k) => found || item[k] || null, null);

                if (itemLabel) {
                    paras.push(new Paragraph({
                        children: [new TextRun({ text: String(itemLabel), bold: true, italics: true })],
                        spacing: { before: 80, after: 40 }
                    }));
                }

                Object.entries(item).forEach(([k, v]) => {
                    if (allLabelKeys.includes(k)) return;   // already shown as label
                    renderContentNode(k, v, depth + 1, helpers);
                });
            }
        });
        return;
    }

    // ── Nested object ──────────────────────────────────────────────────────
    if (typeof value === 'object' && value !== null) {
        if (depth === 0) {
            paras.push(new Paragraph({
                text: displayKey,
                heading: HeadingLevel.HEADING_3,
                spacing: { before: 240, after: 120 }
            }));
        } else {
            paras.push(sectionHeader(displayKey, { before: 180, after: 80 }));
        }

        Object.entries(value).forEach(([childKey, childVal]) => {
            renderContentNode(childKey, childVal, depth + 1, helpers);
        });
    }
}


// ════════════════════════════════════════════════════════════════════════════
// DOCX CREATION
// Single function used for every workbook.
// Visual theme (colours, titles) and experiment-field mapping come from
// the registry entry passed as `config`.
// ════════════════════════════════════════════════════════════════════════════

async function createWorkbookDocx(workbook, processedSections, diagramResults, config) {

    const { docxTheme, experimentsKey, buildHistFields, itemLabelKeys } = config;

    // ── Numbering config ───────────────────────────────────────────────────
    const numberingConfig = {
        config: [
            {
                reference: 'bullets',
                levels: [{ level: 0, format: LevelFormat.BULLET, text: '\u2022', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }]
            },
            {
                reference: 'sub-bullets',
                levels: [{ level: 0, format: LevelFormat.BULLET, text: '\u2013', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1080, hanging: 360 } } } }]
            },
            {
                reference: 'numbers',
                levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }]
            },
        ]
    };

    // ── Paragraph helpers ──────────────────────────────────────────────────
    const bullet = (text, spacing = { after: 80 }) =>
        new Paragraph({ numbering: { reference: 'bullets', level: 0 }, children: [new TextRun({ text: text || '' })], spacing });

    const subBullet = (text, spacing = { after: 60 }) =>
        new Paragraph({ numbering: { reference: 'sub-bullets', level: 0 }, children: [new TextRun({ text: text || '' })], spacing });

    const boldLabel = (label, value, spacing = { after: 100 }) =>
        new Paragraph({ children: [new TextRun({ text: `${label}: `, bold: true }), new TextRun({ text: value || '' })], spacing });

    const boldLabelItalic = (label, value, spacing = { after: 100 }) =>
        new Paragraph({ children: [new TextRun({ text: `${label}: `, bold: true }), new TextRun({ text: value || '', italics: true })], spacing });

    const sectionHeader = (text, spacing = { before: 200, after: 100 }) =>
        new Paragraph({ children: [new TextRun({ text, bold: true, underline: {} })], spacing });

    const spacer = (before = 0, after = 200) =>
        new Paragraph({ text: '', spacing: { before, after } });

    // ── Image paragraph builder ────────────────────────────────────────────
    const buildImageParagraph = (diagramResult, sectionLabel) => {
        if (diagramResult && isValidPNGBuffer(diagramResult.buffer)) {
            const imageBuffer = Buffer.from(diagramResult.buffer);
            console.log(`    ✓ Embedding diagram for ${sectionLabel} (${(imageBuffer.length / 1024).toFixed(2)} KB)`);
            return new Paragraph({
                children: [new ImageRun({ data: imageBuffer, transformation: { width: 600, height: 450 }, type: 'png' })],
                alignment: AlignmentType.CENTER,
                spacing: { before: 200, after: 200 }
            });
        }
        console.warn(`    ⚠ No valid diagram for ${sectionLabel} — using placeholder`);
        return new Paragraph({
            children: [new TextRun({ text: `[${sectionLabel} Diagram — See output folder for PNG file]`, bold: true })],
            alignment: AlignmentType.CENTER,
            spacing: { before: 200, after: 200 }
        });
    };

    // ── Experiment / Practical section builder ─────────────────────────────
    // Reads from workbook[experimentsKey][experimentId].
    // Historical fields are resolved via config.buildHistFields.
    // Lab/practical body uses a unified field-aware builder below.
    const buildExperimentSection = (experimentId) => {
        const paras  = [];
        const store  = workbook[experimentsKey];
        const experiment = store?.[experimentId];

        if (!experiment) {
            paras.push(new Paragraph({
                children: [new TextRun({ text: `[Experiment data not available: ${experimentId}]`, italics: true })],
                spacing: { after: 200 }
            }));
            return paras;
        }

        // ── Historical Background ──────────────────────────────────────────
        const hist = experiment.historicalBackground;
        if (hist) {
            paras.push(new Paragraph({ text: 'Historical Background', heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 } }));

            // Per-workbook field list from registry
            buildHistFields(hist).forEach(([label, val]) => {
                if (val) paras.push(boldLabel(label, String(val)));
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
            if (hist.modernSignificance) paras.push(boldLabel('Modern Significance', hist.modernSignificance));
        }

        // ── Lab Experiment body ────────────────────────────────────────────
        // Geometric workbook uses experiment.practicalMathematics; all others use experiment.labExperiment.
        const lab = experiment.labExperiment || experiment.practicalMathematics;
        if (lab) {
            const sectionTitle = experiment.practicalMathematics
                ? 'Practical Mathematics Investigation'
                : 'Laboratory Experiment';

            paras.push(
                new Paragraph({ text: sectionTitle, heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 } }),
                boldLabel('Title',      lab.title),
                boldLabel('Hypothesis', lab.hypothesis),
                boldLabel('Purpose',    lab.purpose, { after: 200 })
            );

            // Background (molecular / chemistry)
            if (lab.background && typeof lab.background === 'object') {
                paras.push(sectionHeader('Background', { before: 200, after: 100 }));
                Object.entries(lab.background).forEach(([k, v]) => {
                    paras.push(boldLabel(k.charAt(0).toUpperCase() + k.slice(1), v, { after: 80 }));
                });
            }

            // Variables (organic chemistry / mechanics)
            if (lab.variables && typeof lab.variables === 'object') {
                paras.push(sectionHeader('Variables', { before: 200, after: 100 }));
                if (lab.variables.independent) paras.push(boldLabel('Independent', lab.variables.independent, { after: 60 }));
                if (lab.variables.dependent)   paras.push(boldLabel('Dependent',   lab.variables.dependent,   { after: 60 }));
                if (Array.isArray(lab.variables.controlled) && lab.variables.controlled.length) {
                    paras.push(sectionHeader('Controlled Variables', { before: 100, after: 60 }));
                    lab.variables.controlled.slice(0, 6).forEach(v => paras.push(bullet(v, { after: 40 })));
                }
            }

            // Safety precautions
            if (Array.isArray(lab.safetyPrecautions) && lab.safetyPrecautions.length) {
                paras.push(sectionHeader('⚠ Safety Precautions', { before: 300, after: 100 }));
                lab.safetyPrecautions.slice(0, 8).forEach(s => paras.push(bullet(s, { after: 60 })));
            }

            // Materials
            if (Array.isArray(lab.materials) && lab.materials.length) {
                paras.push(sectionHeader('Materials Required', { before: 300, after: 100 }));
                lab.materials.slice(0, 15).forEach(m => paras.push(bullet(m, { after: 60 })));
            }

            // Procedure (molecular biology uses lab.procedure as array; geometry uses practicalMathematics.procedure)
            if (Array.isArray(lab.procedure) && lab.procedure.length) {
                paras.push(sectionHeader('Procedure', { before: 300, after: 100 }));
                lab.procedure.slice(0, 20).forEach(step => {
                    if (!step || !step.trim()) {
                        paras.push(spacer(0, 60));
                    } else if (step === step.toUpperCase() && step.includes(':')) {
                        paras.push(new Paragraph({ children: [new TextRun({ text: step, bold: true })], spacing: { before: 120, after: 60 } }));
                    } else {
                        paras.push(bullet(step, { after: 60 }));
                    }
                });
            }

            // Data table (geometry practicals)
            if (Array.isArray(lab.dataTable) && lab.dataTable.length) {
                paras.push(sectionHeader('Data Recording Table', { before: 300, after: 100 }));
                lab.dataTable.forEach(row => {
                    if (Array.isArray(row)) {
                        paras.push(new Paragraph({ children: [new TextRun({ text: row.join(' | ') })], spacing: { after: 60 } }));
                    }
                });
            }

            // Results (molecular / chemistry — string)
            if (lab.results && typeof lab.results === 'string') {
                paras.push(
                    sectionHeader('Results', { before: 300, after: 100 }),
                    new Paragraph({ children: [new TextRun({ text: lab.results })], spacing: { after: 200 } })
                );
            }

            // Expected results (object)
            if (lab.expectedResults && typeof lab.expectedResults === 'object') {
                paras.push(sectionHeader('Expected Results', { before: 300, after: 100 }));
                Object.entries(lab.expectedResults).forEach(([k, v]) => {
                    if (typeof v === 'string') paras.push(boldLabel(k.charAt(0).toUpperCase() + k.slice(1), v, { after: 60 }));
                });
            }

            // Data analysis (mechanics)
            if (lab.dataAnalysis && typeof lab.dataAnalysis === 'object') {
                paras.push(sectionHeader('Data Analysis', { before: 300, after: 100 }));
                Object.entries(lab.dataAnalysis).forEach(([k, v]) => {
                    if (typeof v === 'string') paras.push(boldLabel(k.charAt(0).toUpperCase() + k.slice(1), v, { after: 60 }));
                });
            }

            // Error analysis (mechanics)
            if (lab.errorAnalysis && typeof lab.errorAnalysis === 'object') {
                paras.push(sectionHeader('Error Analysis', { before: 300, after: 100 }));
                Object.entries(lab.errorAnalysis).forEach(([k, v]) => {
                    if (Array.isArray(v) && v.length) {
                        paras.push(boldLabel(k.charAt(0).toUpperCase() + k.slice(1), '', { after: 40 }));
                        v.slice(0, 6).forEach(item => paras.push(subBullet(item, { after: 40 })));
                    } else if (typeof v === 'string') {
                        paras.push(boldLabel(k.charAt(0).toUpperCase() + k.slice(1), v, { after: 60 }));
                    }
                });
            }

            // Analysis (organic chemistry)
            if (Array.isArray(lab.analysis) && lab.analysis.length) {
                paras.push(sectionHeader('Analysis', { before: 300, after: 100 }));
                lab.analysis.slice(0, 8).forEach(a => paras.push(bullet(a, { after: 80 })));
            }

            // Conclusions
            if (Array.isArray(lab.conclusions) && lab.conclusions.length) {
                paras.push(sectionHeader('Conclusions', { before: 300, after: 100 }));
                lab.conclusions.slice(0, 8).forEach(c => paras.push(bullet(c, { after: 80 })));
            }

            // Real-world connections / applications
            const rwItems = lab.realWorldConnections || lab.realWorldApplications;
            if (Array.isArray(rwItems) && rwItems.length) {
                paras.push(sectionHeader('Real-World Connections', { before: 300, after: 100 }));
                rwItems.slice(0, 8).forEach(r => paras.push(bullet(r, { after: 60 })));
            }

            // Extensions
            if (Array.isArray(lab.extensions) && lab.extensions.length) {
                paras.push(sectionHeader('Extension Activities', { before: 300, after: 100 }));
                lab.extensions.slice(0, 6).forEach(e => paras.push(bullet(e, { after: 60 })));
            }
        }

        return paras;
    };

    // ══════════════════════════════════════════════════════════════════════
    // BUILD DOCUMENT CHILDREN
    // ══════════════════════════════════════════════════════════════════════
    const children = [];
    const { sections } = config;

    // ── Title page ─────────────────────────────────────────────────────────
    children.push(
        new Paragraph({ text: docxTheme.title, heading: HeadingLevel.TITLE, alignment: AlignmentType.CENTER, spacing: { after: 200 } }),
        new Paragraph({ text: docxTheme.subtitle, heading: HeadingLevel.HEADING_1, alignment: AlignmentType.CENTER, spacing: { after: 400 } }),
        new Paragraph({ children: [new TextRun({ text: docxTheme.coverLine, italics: true })], alignment: AlignmentType.CENTER, spacing: { after: 200 } }),
        new Paragraph({
            children: [new TextRun({ text: `Generated: ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`, italics: true })],
            alignment: AlignmentType.CENTER, spacing: { after: 600 }
        }),
        spacer(0, 400)
    );

    // ── Table of contents ──────────────────────────────────────────────────
    children.push(new Paragraph({ text: 'Contents', heading: HeadingLevel.HEADING_1, spacing: { before: 400, after: 200 } }));
    sections.forEach((s, i) => {
        children.push(
            new Paragraph({ text: `${i + 1}. ${s.label}`, spacing: { after: 80 } }),
            new Paragraph({ text: `   ${i + 1}.1 ${s.label} Content`, spacing: { after: 60 } }),
            new Paragraph({ text: `   ${i + 1}.2 ${s.label} Diagram`, spacing: { after: 60 } }),
            new Paragraph({ text: `   ${i + 1}.3 ${docxTheme.tocEntryLabel}`, spacing: { after: 100 } }),
        );
    });
    children.push(spacer(0, 400));

    // ── Iterate sections ───────────────────────────────────────────────────
    for (let idx = 0; idx < processedSections.length; idx++) {
        const section      = processedSections[idx];
        const diagramResult = diagramResults[section.id];
        const sectionNum   = idx + 1;
        const isLast       = idx === processedSections.length - 1;

        console.log(`  Building DOCX section ${sectionNum}: ${section.label}`);

        // Major heading
        children.push(new Paragraph({
            text: `${sectionNum}. ${section.label}`,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 600, after: 200 },
            pageBreakBefore: true
        }));

        // ── Content block ──────────────────────────────────────────────────
        children.push(new Paragraph({ text: `${sectionNum}.1 ${section.label} Content`, heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 } }));

        const sectionContent = section.contentKey
            ? section.snapshotContent[section.contentKey]
            : section.snapshotContent;

        if (sectionContent && typeof sectionContent === 'object') {
            const renderedParas = [];
            const renderHelpers = { boldLabel, bullet, subBullet, sectionHeader, paras: renderedParas, itemLabelKeys: itemLabelKeys || [] };

            Object.entries(sectionContent).forEach(([key, value]) => {
                renderContentNode(key, value, 0, renderHelpers);
            });

            if (renderedParas.length > 0) {
                children.push(...renderedParas);
            } else {
                children.push(new Paragraph({
                    children: [new TextRun({ text: `[No renderable content returned for ${section.contentKey ?? section.label}]`, italics: true })],
                    spacing: { after: 200 }
                }));
            }
        } else {
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

        // ── Diagram block ──────────────────────────────────────────────────
        children.push(
            new Paragraph({ text: `${sectionNum}.2 ${section.label} Diagram`, heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 }, pageBreakBefore: true }),
            new Paragraph({ children: [new TextRun({ text: `The following diagram illustrates key concepts from ${section.label}.` })], spacing: { after: 300 } }),
            buildImageParagraph(diagramResult, section.label),
            new Paragraph({ children: [new TextRun({ text: `Figure ${sectionNum}: ${section.label} Diagram`, bold: true })], alignment: AlignmentType.CENTER, spacing: { after: 100 } }),
            new Paragraph({ children: [new TextRun({ text: `Diagram showing key concepts and features of ${section.label.toLowerCase()}.`, italics: true })], alignment: AlignmentType.CENTER, spacing: { after: 400 } })
        );

        // ── Experiment / Practical block ───────────────────────────────────
        const store          = workbook[experimentsKey];
        const experimentName = store?.[section.experimentId]?.name || section.experimentId;

        children.push(
            new Paragraph({ text: `${sectionNum}.3 ${docxTheme.tocEntryLabel}: ${experimentName}`, heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 }, pageBreakBefore: true }),
            ...buildExperimentSection(section.experimentId)
        );

        if (!isLast) children.push(spacer(400, 100));
    }

    // ── Footer ─────────────────────────────────────────────────────────────
    children.push(
        spacer(600, 0),
        new Paragraph({ children: [new TextRun({ text: '_______________________________________________' })], alignment: AlignmentType.CENTER, spacing: { before: 400, after: 100 } }),
        new Paragraph({ children: [new TextRun({ text: docxTheme.footerLine1, italics: true })], alignment: AlignmentType.CENTER, spacing: { after: 50 } }),
        new Paragraph({ children: [new TextRun({ text: docxTheme.footerLine2, italics: true })], alignment: AlignmentType.CENTER, spacing: { after: 200 } })
    );

    // ── Build Document ─────────────────────────────────────────────────────
    const { colors } = docxTheme;
    const doc = new Document({
        numbering: numberingConfig,
        styles: {
            default: { document: { run: { font: 'Arial', size: 24 } } },
            paragraphStyles: [
                { id: 'Title',    name: 'Title',    basedOn: 'Normal', run: { size: 52, bold: true, font: 'Arial', color: colors.title }, paragraph: { spacing: { before: 0, after: 240 }, alignment: AlignmentType.CENTER } },
                { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 36, bold: true, font: 'Arial', color: colors.h1 }, paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 0 } },
                { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 28, bold: true, font: 'Arial', color: colors.h2 }, paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 1 } },
                { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, font: 'Arial', color: colors.h3 }, paragraph: { spacing: { before: 160, after:  80 }, outlineLevel: 2 } },
            ]
        },
        sections: [{
            properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
            children
        }]
    });

    return doc;
}


// ════════════════════════════════════════════════════════════════════════════
// MAIN TEST PIPELINE  (runs once for the chosen workbook)
// 8-step process identical to all four original files.
// ════════════════════════════════════════════════════════════════════════════

async function runWorkbook(choiceKey) {
    const config = WORKBOOK_REGISTRY[choiceKey];
    if (!config) {
        console.error(`Unknown choice: ${choiceKey}`);
        return { success: false, error: 'Unknown workbook choice' };
    }

    const { label, WorkbookClass, constructorOpts, sections, topic,
            experimentsKey, diagramOptions, handleProblem, docxTheme } = config;

    console.log('\n========================================');
    console.log(`${label.toUpperCase()} WORKBOOK`);
    console.log('All Filtered Contents — Diagrams — Experiments');
    console.log('========================================\n');

    const outputDir = './output';
    ensureOutputDir(outputDir);

    try {
        // ── Step 1: Initialize workbook ──────────────────────────────────
        console.log('[1/8] Initializing workbook...');
        const workbook = new WorkbookClass({
            width: 1400, height: 2000,
            ...constructorOpts,
            explanationLevel: 'advanced',
            includeVisualizations: true,
            includeExperiments: true,
            includeDiagrams: true,
            diagramWidth: 1200, diagramHeight: 900,
            detailLevel: 'detailed'
        });
        console.log('✓ Workbook initialized\n');

        // ── Step 2: Build section requests ──────────────────────────────
        console.log('[2/8] Preparing section requests...');
        const sectionRequests = sections.map(section => ({
            ...section,
            request: {
                topic: topic || section.subTopic,
                subTopic: section.subTopic,
                parameters: { specificItems: section.specificItems, difficulty: 'detailed', focusArea: 'structure' },
                experimentId: section.experimentId,
                requestType: 'content',
                context: { purpose: `Understanding ${section.label}`, targetAudience: 'university students', includeHistorical: true }
            }
        }));
        console.log(`✓ ${sectionRequests.length} section requests configured\n`);

        // ── Step 3: Process all requests ────────────────────────────────
        console.log('[3/8] Processing all section contents...');
        const processedSections = [];

        for (const section of sectionRequests) {
            console.log(`  Processing: ${section.label}...`);
            const result      = handleProblem(workbook, section.request);
            const validSteps  = (result.steps || []).filter(s => s !== null && s !== undefined);
            const snapshotContent = result.content
                ? { ...result.content }
                : (workbook.currentContent ? { ...workbook.currentContent } : {});

            console.log(`  ✓ ${section.label}: ${validSteps.length} steps — content keys: [${Object.keys(snapshotContent).join(', ')}]`);
            processedSections.push({ ...section, result, validSteps, snapshotContent });
        }
        console.log(`✓ All ${processedSections.length} sections processed\n`);

        // ── Step 4: Wait for diagram renderers ──────────────────────────
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

        // ── Step 5: Fetch and validate diagram buffers ───────────────────
        console.log('[5/8] Extracting and validating diagrams...');
        const diagramResults = {};

        for (const section of processedSections) {
            console.log(`  Diagram [${section.diagramId}] for: ${section.label}`);
            const result = await fetchDiagramBuffer(workbook, section.diagramId, outputDir, diagramOptions);

            if (result) {
                diagramResults[section.id] = result;
                console.log(`  ✓ ${section.label} diagram ready`);
            } else {
                console.warn(`  ⚠ ${section.label} diagram could not be validated — will use placeholder`);
                diagramResults[section.id] = null;
            }
        }
        console.log('');

        // ── Step 6: Diagram summary ──────────────────────────────────────
        console.log('[6/8] Diagram summary:');
        sections.forEach(s => {
            const r = diagramResults[s.id];
            console.log(
                `  ${r ? '✓' : '✗'} ${s.label.padEnd(30)} → ${s.diagramId}.png ` +
                (r ? `(${(r.buffer.length / 1024).toFixed(2)} KB)` : '(placeholder)')
            );
        });
        console.log('');

        // ── Step 7: Create DOCX ──────────────────────────────────────────
        console.log('[7/8] Creating DOCX document...');
        const doc = await createWorkbookDocx(workbook, processedSections, diagramResults, config);
        console.log('✓ Document structure created\n');

        // ── Step 8: Export ───────────────────────────────────────────────
        console.log('[8/8] Exporting to file...');
        const filename = path.join(outputDir, docxTheme.outputFile);
        const buffer   = await Packer.toBuffer(doc);
        fs.writeFileSync(filename, buffer);

        console.log(`✓ File exported: ${filename}`);
        console.log(`✓ File size: ${(buffer.length / 1024).toFixed(2)} KB\n`);

        printSummary(workbook, processedSections, diagramResults, filename, buffer.length, config);

        return { success: true, filename, fileSize: buffer.length, diagramResults, workbook, processedSections };

    } catch (error) {
        console.error(`\n✗ ERROR in ${label} Workbook:`);
        console.error(error.message);
        console.error('\nStack trace:');
        console.error(error.stack);
        return { success: false, error: error.message };
    }
}


// ════════════════════════════════════════════════════════════════════════════
// SUMMARY PRINTER
// ════════════════════════════════════════════════════════════════════════════

function printSummary(workbook, processedSections, diagramResults, filename, fileSize, config) {
    const { sections, experimentsKey, docxTheme } = config;

    console.log('\n========================================');
    console.log(`${docxTheme.title.toUpperCase()} WORKBOOK — DETAILED SUMMARY`);
    console.log('========================================\n');

    console.log('SECTIONS PROCESSED:');
    console.log('─────────────────────────────────────');
    processedSections.forEach((s, i) => {
        const contentKeys = Object.keys(s.snapshotContent).join(', ');
        console.log(`  ${i + 1}. ${s.label.padEnd(30)} → ${s.validSteps.length} steps | keys: [${contentKeys}]`);
    });

    console.log('\nDIAGRAMS:');
    console.log('─────────────────────────────────────');
    sections.forEach(s => {
        const r      = diagramResults[s.id];
        const status = r ? `✓ ${(r.buffer.length / 1024).toFixed(2)} KB` : '✗ placeholder';
        console.log(`  [${s.diagramId.padEnd(52)}] ${status}`);
    });

    console.log('\nEXPERIMENTS:');
    console.log('─────────────────────────────────────');
    sections.forEach(s => {
        const store = workbook[experimentsKey];
        const exp   = store?.[s.experimentId];
        const name  = exp?.name || s.experimentId;
        console.log(`  ${exp ? '✓' : '✗'} ${s.experimentId.padEnd(60)} → ${name}`);
    });

    console.log('\nCONTENT RENDERING APPROACH:');
    console.log('─────────────────────────────────────');
    console.log('  ✓ renderContentNode() — generic recursive tree walk');
    console.log('  ✓ Zero topic-specific branching in createWorkbookDocx');
    console.log('  ✓ Primitives  → bold-labelled paragraphs');
    console.log('  ✓ Arrays      → bullet / sub-bullet lists');
    console.log('  ✓ Objects     → HEADING_3 (depth 0) or bold-underline sub-header (depth 1+)');
    console.log('  ✓ snake_case + camelCase keys decoded to Title Case');
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
    sections.forEach(s => {
        const r = diagramResults[s.id];
        if (r) console.log(`  PNG  : output/${s.diagramId}_diagram.png`);
    });

    console.log('\n========================================\n');
}


// ════════════════════════════════════════════════════════════════════════════
// USER PROMPT  — interactive menu at startup
// ════════════════════════════════════════════════════════════════════════════

function promptUser() {
    return new Promise(resolve => {
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

        console.log('╔══════════════════════════════════════════╗');
        console.log('║        STEM WORKBOOK GENERATOR           ║');
        console.log('╠══════════════════════════════════════════╣');
        console.log('║  Select a workbook to generate:          ║');
        console.log('║                                          ║');
        console.log('║  1 — Molecular Biology  (Nucleic Acids)  ║');
        console.log('║  2 — Organic Chemistry  (Hydrocarbons)   ║');
        console.log('║  3 — Classical Mechanics (Momentum)      ║');
        console.log('║  4 — Geometric Measurement (Trig Ratios) ║');
        console.log('╚══════════════════════════════════════════╝');
        console.log('');

        rl.question('Enter your choice (1–4): ', answer => {
            rl.close();
            resolve(answer.trim());
        });
    });
}


// ════════════════════════════════════════════════════════════════════════════
// ENTRY POINT
// ════════════════════════════════════════════════════════════════════════════

(async () => {
    // Support non-interactive invocation: node consolidatedWorkbookTest.js 2
    let choice = process.argv[2];

    if (!choice || !WORKBOOK_REGISTRY[choice]) {
        choice = await promptUser();
    }

    if (!WORKBOOK_REGISTRY[choice]) {
        console.error(`\n✗ Invalid choice "${choice}". Please enter 1, 2, 3 or 4.\n`);
        process.exit(1);
    }

    console.log(`\nStarting: ${WORKBOOK_REGISTRY[choice].label}\n`);

    const result = await runWorkbook(choice);

    if (result.success) {
        console.log('════════════════════════════════════════');
        console.log('✓✓✓ WORKBOOK GENERATED SUCCESSFULLY ✓✓✓');
        console.log('════════════════════════════════════════');
        console.log(`\nOutput : ${result.filename}`);
        console.log(`Size   : ${(result.fileSize / 1024).toFixed(2)} KB`);
        console.log('\nDiagram PNGs saved to ./output/');
        console.log('\nSections covered:');
        WORKBOOK_REGISTRY[choice].sections.forEach((s, i) => console.log(`  ${i + 1}. ${s.label}`));
        console.log('');
    } else {
        console.log('════════════════════════════════════════');
        console.log('✗✗✗ WORKBOOK GENERATION FAILED ✗✗✗');
        console.log('════════════════════════════════════════');
        console.log(`\nError: ${result.error}\n`);
        process.exit(1);
    }
})();


// ════════════════════════════════════════════════════════════════════════════
// NAMED EXPORTS  (for direct import / programmatic use)
// Each mirrors the export from the original file it replaces.
// ════════════════════════════════════════════════════════════════════════════

export const testNucleicAcidWorkbook       = () => runWorkbook('1');
export const testOrganicChemistryWorkbook  = () => runWorkbook('2');
export const testMechanicsWorkbook         = () => runWorkbook('3');
export const testGeometricMeasurementWorkbook = () => runWorkbook('4');

// createXxxDocx exports — each calls the unified builder with its config
export const createNucleicAcidDocx = (wb, sections, diagrams) =>
    createWorkbookDocx(wb, sections, diagrams, WORKBOOK_REGISTRY['1']);
export const createOrganicChemistryDocx = (wb, sections, diagrams) =>
    createWorkbookDocx(wb, sections, diagrams, WORKBOOK_REGISTRY['2']);
export const createMechanicsDocx = (wb, sections, diagrams) =>
    createWorkbookDocx(wb, sections, diagrams, WORKBOOK_REGISTRY['3']);
export const createGeometricMeasurementDocx = (wb, sections, diagrams) =>
    createWorkbookDocx(wb, sections, diagrams, WORKBOOK_REGISTRY['4']);
