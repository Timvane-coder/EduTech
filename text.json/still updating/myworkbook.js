// ========================================
// CONSOLIDATED WORKBOOK TEST  — v2  (Interactive Lesson Mode)
//
// Subjects:
//   1. Molecular Biology
//   2. Organic Chemistry
//   3. Classical Mechanics
//   4. Geometric Measurement
//
// Two generation modes:
//   A) SECTION mode   — original behaviour: pick a workbook → generate
//                       the fully-configured section DOCX at once.
//   B) LESSON mode    — new interactive flow:
//                         pick workbook → pick lesson → mandatory fields
//                         are added automatically (title, concepts, theory,
//                         keyDefinitions) → user is prompted to optionally
//                         add diagrams / experiments / domain items /
//                         concept-links / introduction / summary /
//                         applications → generate DOCX.
//
// All shared utilities, section configs, WORKBOOK_REGISTRY and the DOCX
// builder are untouched except where noted with  ★ NEW / ★ UPDATED.
// ========================================

import { EnhancedMolecularBiologyWorkbook }    from './biology.js';
import { EnhancedOrganicChemistryWorkbook }     from './chemistry.js';
import { EnhancedMechanicsWorkbook }            from './physics.js';
import { EnhancedGeometricMeasurementWorkbook } from './mathematics.js';

import {
    Document, Packer, Paragraph, TextRun, HeadingLevel,
    AlignmentType, ImageRun, LevelFormat
} from 'docx';
import * as fs       from 'fs';
import * as path     from 'path';
import * as readline from 'readline';


// ════════════════════════════════════════════════════════════════════════════
// SECTION CONFIGURATIONS  (unchanged)
// ════════════════════════════════════════════════════════════════════════════

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
// WORKBOOK REGISTRY  (unchanged from original, lessons added inside ★)
// ════════════════════════════════════════════════════════════════════════════

const WORKBOOK_REGISTRY = {

    '1': {
        label: 'Molecular Biology — Nucleic Acids',
        WorkbookClass: EnhancedMolecularBiologyWorkbook,
        constructorOpts: { theme: 'molecular' },
        sections: NUCLEIC_ACID_SECTIONS,
        topic: 'molecular',
        experimentsKey: 'molecularExperiments',
        itemLabelKeys: [],
        diagramOptions: { showLabels: true, backgroundColor: '#FFFFFF' },
        handleProblem: (wb, req) => wb.handleMolecularProblem(req),
        buildHistFields: (hist) => [
            ['Scientist', hist.scientist], ['Year', hist.year],
            ['Hypothesis', hist.hypothesis], ['Proposal', hist.proposal],
            ['Context', hist.context], ['Significance', hist.significance],
        ],
        buildLabSections: null,
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
        topic: null,
        experimentsKey: 'organicExperiments',
        itemLabelKeys: ['hydrocarbon'],
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
        itemLabelKeys: ['law'],
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
        topic: null,
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
// UTILITY FUNCTIONS  (unchanged)
// ════════════════════════════════════════════════════════════════════════════

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

function ensureOutputDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`  ✓ Created output directory: ${dir}`);
    }
}

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
                width: 1200, height: 900, ...diagramOptions
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

/** readline helper — returns a Promise<string> */
function ask(rl, question) {
    return new Promise(resolve => rl.question(question, ans => resolve(ans.trim())));
}


// ════════════════════════════════════════════════════════════════════════════
// ★ NEW — LESSON REGISTRY HELPERS
//
// These helpers extract lesson-aware metadata from a freshly-instantiated
// workbook so the interactive menu can present real data to the user.
// ════════════════════════════════════════════════════════════════════════════

/**
 * Return an array of all lesson keys registered in the workbook's
 * lessonFieldRegistry that actually appear in workbook.lessons.
 *
 * @param {object} workbook  — instantiated workbook class
 * @returns {string[]}
 */
function getWorkbookLessonKeys(workbook) {
    if (typeof workbook.getAvailableLessons === 'function') {
        return workbook.getAvailableLessons();
    }
    // Fallback: inspect lessons directly
    return workbook.lessons ? Object.keys(workbook.lessons) : [];
}

/**
 * Return registry entries for a specific lesson key, separated by category.
 * Categories: domain | diagram | experiment
 *
 * @param {object} workbook
 * @param {string} lessonKey
 * @returns {{ domain: string[], diagrams: string[], experiments: string[] }}
 */
function getLessonRegistryEntries(workbook, lessonKey) {
    const registry = workbook.lessonFieldRegistry || {};
    const domain      = [];
    const diagrams    = [];
    const experiments = [];

    for (const [fieldKey, meta] of Object.entries(registry)) {
        if (!meta.lesson || meta.lesson !== lessonKey) continue;
        if (meta.category === 'diagram')     diagrams.push(fieldKey);
        else if (meta.category === 'experiment') experiments.push(fieldKey);
        else if (meta.category === 'domain') domain.push(fieldKey);
    }

    // Also check domainFieldsByLesson convenience map
    if (workbook.domainFieldsByLesson && workbook.domainFieldsByLesson[lessonKey]) {
        for (const f of workbook.domainFieldsByLesson[lessonKey]) {
            if (!domain.includes(f)) domain.push(f);
        }
    }

    return { domain, diagrams, experiments };
}

/**
 * Find a section config that matches a given diagramId or experimentId
 * across all four section arrays.  Returns { sectionConfig, allSections }
 * or null if not found.
 */
function findSectionByDiagramId(diagramId) {
    const allArrays = [
        NUCLEIC_ACID_SECTIONS,
        ORGANIC_CHEMISTRY_SECTIONS,
        MECHANICS_SECTIONS,
        GEOMETRIC_MEASUREMENT_SECTIONS,
    ];
    for (const arr of allArrays) {
        const found = arr.find(s => s.diagramId === diagramId);
        if (found) return found;
    }
    return null;
}

function findSectionByExperimentId(experimentId) {
    const allArrays = [
        NUCLEIC_ACID_SECTIONS,
        ORGANIC_CHEMISTRY_SECTIONS,
        MECHANICS_SECTIONS,
        GEOMETRIC_MEASUREMENT_SECTIONS,
    ];
    for (const arr of allArrays) {
        const found = arr.find(s => s.experimentId === experimentId);
        if (found) return found;
    }
    return null;
}

function findSectionBySpecificItem(specificItem) {
    const allArrays = [
        NUCLEIC_ACID_SECTIONS,
        ORGANIC_CHEMISTRY_SECTIONS,
        MECHANICS_SECTIONS,
        GEOMETRIC_MEASUREMENT_SECTIONS,
    ];
    for (const arr of allArrays) {
        const found = arr.find(s => s.specificItems && s.specificItems.includes(specificItem));
        if (found) return found;
    }
    return null;
}


// ════════════════════════════════════════════════════════════════════════════
// GENERIC RECURSIVE CONTENT RENDERER  (unchanged)
// ════════════════════════════════════════════════════════════════════════════

const SKIP_KEYS = new Set([
    'detailLevel', 'contextualScenarios', 'relatedExperiments', 'relatedPracticals',
    'metacognitivePrompts', 'difficulty', 'focusArea',
    'topic', 'category', 'summary',
    // lesson-system internal fields
    '_lessonKey', '_requestedFields', '_sourceType', '_learnerProfile', '_metacognitivePrompts',
]);

function renderContentNode(key, value, depth, helpers) {
    const { boldLabel, bullet, subBullet, sectionHeader, paras, itemLabelKeys } = helpers;

    if (SKIP_KEYS.has(key)) return;

    const displayKey = key
        .replace(/_/g, ' ')
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, c => c.toUpperCase())
        .trim();

    if (typeof value === 'string' || typeof value === 'number') {
        paras.push(boldLabel(displayKey, String(value)));
        return;
    }

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
                const extraKeys   = itemLabelKeys || [];
                const allLabelKeys = ['name', 'title', 'type', ...extraKeys];
                const itemLabel   = allLabelKeys.reduce((found, k) => found || item[k] || null, null);
                if (itemLabel) {
                    paras.push(new Paragraph({
                        children: [new TextRun({ text: String(itemLabel), bold: true, italics: true })],
                        spacing: { before: 80, after: 40 }
                    }));
                }
                Object.entries(item).forEach(([k, v]) => {
                    if (allLabelKeys.includes(k)) return;
                    renderContentNode(k, v, depth + 1, helpers);
                });
            }
        });
        return;
    }

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
// ★ UPDATED — createWorkbookDocx
//
// Now handles two source shapes:
//   • `processedSections`  — original section array (section mode)
//   • `lessonSections`     — array built by the interactive lesson builder
//     Each lessonSection has the shape:
//       { id, label, type: 'lesson'|'diagram'|'experiment'|'domain'|'intro'|
//                          'summary'|'applications'|'conceptLinks',
//         snapshotContent, diagramId?, experimentId?, contentKey? }
// ════════════════════════════════════════════════════════════════════════════

async function createWorkbookDocx(workbook, processedSections, diagramResults, config) {

    const { docxTheme, experimentsKey, buildHistFields, itemLabelKeys } = config;

    // ── Numbering config ───────────────────────────────────────────────────
    const numberingConfig = {
        config: [
            { reference: 'bullets',     levels: [{ level: 0, format: LevelFormat.BULLET,  text: '\u2022', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720,  hanging: 360 } } } }] },
            { reference: 'sub-bullets', levels: [{ level: 0, format: LevelFormat.BULLET,  text: '\u2013', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1080, hanging: 360 } } } }] },
            { reference: 'numbers',     levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.',    alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720,  hanging: 360 } } } }] },
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

    // ── Experiment / Practical section builder  (unchanged) ───────────────
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

        const hist = experiment.historicalBackground;
        if (hist) {
            paras.push(new Paragraph({ text: 'Historical Background', heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 } }));
            buildHistFields(hist).forEach(([label, val]) => {
                if (val) paras.push(boldLabel(label, String(val)));
            });
            if (hist.quote) {
                paras.push(new Paragraph({
                    children: [new TextRun({ text: `"${hist.quote}"`, italics: true })],
                    alignment: AlignmentType.CENTER, spacing: { before: 200, after: 200 }
                }));
            }
            if (hist.nobelPrize)         paras.push(boldLabel('Nobel Prize', hist.nobelPrize));
            if (hist.modernUpdate)       paras.push(boldLabelItalic('Modern Update', hist.modernUpdate, { after: 200 }));
            if (hist.modernSignificance) paras.push(boldLabel('Modern Significance', hist.modernSignificance));
        }

        const lab = experiment.labExperiment || experiment.practicalMathematics;
        if (lab) {
            const sectionTitle = experiment.practicalMathematics
                ? 'Practical Mathematics Investigation' : 'Laboratory Experiment';
            paras.push(
                new Paragraph({ text: sectionTitle, heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 } }),
                boldLabel('Title',      lab.title),
                boldLabel('Hypothesis', lab.hypothesis),
                boldLabel('Purpose',    lab.purpose, { after: 200 })
            );
            if (lab.background && typeof lab.background === 'object') {
                paras.push(sectionHeader('Background', { before: 200, after: 100 }));
                Object.entries(lab.background).forEach(([k, v]) => {
                    paras.push(boldLabel(k.charAt(0).toUpperCase() + k.slice(1), v, { after: 80 }));
                });
            }
            if (lab.variables && typeof lab.variables === 'object') {
                paras.push(sectionHeader('Variables', { before: 200, after: 100 }));
                if (lab.variables.independent) paras.push(boldLabel('Independent', lab.variables.independent, { after: 60 }));
                if (lab.variables.dependent)   paras.push(boldLabel('Dependent',   lab.variables.dependent,   { after: 60 }));
                if (Array.isArray(lab.variables.controlled) && lab.variables.controlled.length) {
                    paras.push(sectionHeader('Controlled Variables', { before: 100, after: 60 }));
                    lab.variables.controlled.slice(0, 6).forEach(v => paras.push(bullet(v, { after: 40 })));
                }
            }
            if (Array.isArray(lab.safetyPrecautions) && lab.safetyPrecautions.length) {
                paras.push(sectionHeader('⚠ Safety Precautions', { before: 300, after: 100 }));
                lab.safetyPrecautions.slice(0, 8).forEach(s => paras.push(bullet(s, { after: 60 })));
            }
            if (Array.isArray(lab.materials) && lab.materials.length) {
                paras.push(sectionHeader('Materials Required', { before: 300, after: 100 }));
                lab.materials.slice(0, 15).forEach(m => paras.push(bullet(m, { after: 60 })));
            }
            if (Array.isArray(lab.procedure) && lab.procedure.length) {
                paras.push(sectionHeader('Procedure', { before: 300, after: 100 }));
                lab.procedure.slice(0, 20).forEach(step => {
                    if (!step || !step.trim()) paras.push(spacer(0, 60));
                    else if (step === step.toUpperCase() && step.includes(':'))
                        paras.push(new Paragraph({ children: [new TextRun({ text: step, bold: true })], spacing: { before: 120, after: 60 } }));
                    else paras.push(bullet(step, { after: 60 }));
                });
            }
            if (Array.isArray(lab.dataTable) && lab.dataTable.length) {
                paras.push(sectionHeader('Data Recording Table', { before: 300, after: 100 }));
                lab.dataTable.forEach(row => {
                    if (Array.isArray(row)) paras.push(new Paragraph({ children: [new TextRun({ text: row.join(' | ') })], spacing: { after: 60 } }));
                });
            }
            if (lab.results && typeof lab.results === 'string') {
                paras.push(sectionHeader('Results', { before: 300, after: 100 }));
                paras.push(new Paragraph({ children: [new TextRun({ text: lab.results })], spacing: { after: 200 } }));
            }
            if (lab.expectedResults && typeof lab.expectedResults === 'object') {
                paras.push(sectionHeader('Expected Results', { before: 300, after: 100 }));
                Object.entries(lab.expectedResults).forEach(([k, v]) => {
                    if (typeof v === 'string') paras.push(boldLabel(k.charAt(0).toUpperCase() + k.slice(1), v, { after: 60 }));
                });
            }
            if (lab.dataAnalysis && typeof lab.dataAnalysis === 'object') {
                paras.push(sectionHeader('Data Analysis', { before: 300, after: 100 }));
                Object.entries(lab.dataAnalysis).forEach(([k, v]) => {
                    if (typeof v === 'string') paras.push(boldLabel(k.charAt(0).toUpperCase() + k.slice(1), v, { after: 60 }));
                });
            }
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
            if (Array.isArray(lab.analysis) && lab.analysis.length) {
                paras.push(sectionHeader('Analysis', { before: 300, after: 100 }));
                lab.analysis.slice(0, 8).forEach(a => paras.push(bullet(a, { after: 80 })));
            }
            if (Array.isArray(lab.conclusions) && lab.conclusions.length) {
                paras.push(sectionHeader('Conclusions', { before: 300, after: 100 }));
                lab.conclusions.slice(0, 8).forEach(c => paras.push(bullet(c, { after: 80 })));
            }
            const rwItems = lab.realWorldConnections || lab.realWorldApplications;
            if (Array.isArray(rwItems) && rwItems.length) {
                paras.push(sectionHeader('Real-World Connections', { before: 300, after: 100 }));
                rwItems.slice(0, 8).forEach(r => paras.push(bullet(r, { after: 60 })));
            }
            if (Array.isArray(lab.extensions) && lab.extensions.length) {
                paras.push(sectionHeader('Extension Activities', { before: 300, after: 100 }));
                lab.extensions.slice(0, 6).forEach(e => paras.push(bullet(e, { after: 60 })));
            }
        }
        return paras;
    };

    // ── ★ NEW — lesson field renderers ────────────────────────────────────
    //
    // These render the structured objects returned by handleLessonRequest()
    // into DOCX paragraph arrays.

    /** Render topicIntroduction object */
    const renderLessonIntroduction = (intro) => {
        const paras = [];
        if (!intro) return paras;
        if (intro.overview)       paras.push(boldLabel('Overview',       intro.overview));
        if (intro.whyItMatters)   paras.push(boldLabel('Why It Matters', intro.whyItMatters));
        if (intro.bigPicture)     paras.push(boldLabel('Big Picture',    intro.bigPicture));
        if (Array.isArray(intro.priorKnowledge) && intro.priorKnowledge.length) {
            paras.push(sectionHeader('Prior Knowledge', { before: 160, after: 80 }));
            intro.priorKnowledge.forEach(p => paras.push(bullet(p)));
        }
        if (Array.isArray(intro.topicRoadmap) && intro.topicRoadmap.length) {
            paras.push(sectionHeader('Topic Roadmap', { before: 160, after: 80 }));
            intro.topicRoadmap.forEach((step, i) => paras.push(bullet(`${i + 1}. ${step}`)));
        }
        return paras;
    };

    /** Render topicSummary object */
    const renderLessonSummary = (s) => {
        const paras = [];
        if (!s) return paras;
        if (Array.isArray(s.coreInsights) && s.coreInsights.length) {
            paras.push(sectionHeader('Core Insights', { before: 160, after: 80 }));
            s.coreInsights.forEach((ins, i) => paras.push(bullet(`${i + 1}. ${ins}`)));
        }
        const equations = s.keyEquations || s.keyFormulas || s.keyFormulae;
        if (equations && typeof equations === 'object') {
            paras.push(sectionHeader('Key Equations / Formulas', { before: 160, after: 80 }));
            Object.entries(equations).forEach(([k, v]) => paras.push(boldLabel(k, v)));
        }
        if (Array.isArray(s.commonMistakesToAvoid) && s.commonMistakesToAvoid.length) {
            paras.push(sectionHeader('Common Mistakes to Avoid', { before: 160, after: 80 }));
            s.commonMistakesToAvoid.forEach(m => paras.push(bullet(`✗ ${m}`)));
        }
        if (Array.isArray(s.connections) && s.connections.length) {
            paras.push(sectionHeader('Connections to Other Topics', { before: 160, after: 80 }));
            s.connections.forEach(c => paras.push(bullet(`↔ ${c}`)));
        }
        if (Array.isArray(s.examReadinessChecklist) && s.examReadinessChecklist.length) {
            paras.push(sectionHeader('Exam Readiness Checklist', { before: 160, after: 80 }));
            s.examReadinessChecklist.forEach(q => paras.push(bullet(`☐ ${q}`)));
        }
        return paras;
    };

    /** Render resolved conceptLinks (misconceptions, studyTips, scenarios, etc.) */
    const renderConceptLinks = (conceptLinks) => {
        const paras = [];
        if (!conceptLinks) return paras;
        for (const [concept, resolved] of Object.entries(conceptLinks)) {
            paras.push(new Paragraph({
                children: [new TextRun({ text: concept, bold: true, italics: true })],
                spacing: { before: 200, after: 80 }
            }));
            for (const [category, data] of Object.entries(resolved)) {
                const catLabel = category.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase()).trim();
                paras.push(sectionHeader(catLabel, { before: 120, after: 60 }));
                const renderedParas = [];
                renderContentNode(category, data, 1, {
                    boldLabel, bullet, subBullet, sectionHeader,
                    paras: renderedParas, itemLabelKeys: itemLabelKeys || []
                });
                paras.push(...renderedParas);
            }
        }
        return paras;
    };

    // ── Build document children ────────────────────────────────────────────
    const children = [];
    const isLessonMode = processedSections.some(s => s._lessonMode === true);

    // Determine cover-line text based on mode
    const activeCoverLine = isLessonMode
        ? `Lesson Workbook — ${processedSections.map(s => s.label).join(' · ')}`
        : docxTheme.coverLine;

    // ── Title page ─────────────────────────────────────────────────────────
    children.push(
        new Paragraph({ text: docxTheme.title, heading: HeadingLevel.TITLE, alignment: AlignmentType.CENTER, spacing: { after: 200 } }),
        new Paragraph({ text: docxTheme.subtitle, heading: HeadingLevel.HEADING_1, alignment: AlignmentType.CENTER, spacing: { after: 400 } }),
        new Paragraph({ children: [new TextRun({ text: activeCoverLine, italics: true })], alignment: AlignmentType.CENTER, spacing: { after: 200 } }),
        new Paragraph({
            children: [new TextRun({ text: `Generated: ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`, italics: true })],
            alignment: AlignmentType.CENTER, spacing: { after: 600 }
        }),
        new Paragraph({ text: '', spacing: { before: 0, after: 400 } })
    );

    // ── Table of contents ──────────────────────────────────────────────────
    children.push(new Paragraph({ text: 'Contents', heading: HeadingLevel.HEADING_1, spacing: { before: 400, after: 200 } }));

    if (isLessonMode) {
        // Lesson-mode TOC: one entry per section block
        processedSections.forEach((s, i) => {
            children.push(new Paragraph({ text: `${i + 1}. ${s.label}`, spacing: { after: 80 } }));
        });
    } else {
        // Section-mode TOC (unchanged)
        config.sections.forEach((s, i) => {
            children.push(
                new Paragraph({ text: `${i + 1}. ${s.label}`, spacing: { after: 80 } }),
                new Paragraph({ text: `   ${i + 1}.1 ${s.label} Content`, spacing: { after: 60 } }),
                new Paragraph({ text: `   ${i + 1}.2 ${s.label} Diagram`, spacing: { after: 60 } }),
                new Paragraph({ text: `   ${i + 1}.3 ${docxTheme.tocEntryLabel}`, spacing: { after: 100 } }),
            );
        });
    }
    children.push(new Paragraph({ text: '', spacing: { before: 0, after: 400 } }));

    // ── Iterate sections ───────────────────────────────────────────────────
    for (let idx = 0; idx < processedSections.length; idx++) {
        const section       = processedSections[idx];
        const diagramResult = diagramResults[section.id];
        const sectionNum    = idx + 1;
        const isLast        = idx === processedSections.length - 1;

        console.log(`  Building DOCX section ${sectionNum}: ${section.label}`);

        // ──────────────────────────────────────────────────────────────────
        // ★ LESSON-MODE section rendering
        // ──────────────────────────────────────────────────────────────────
        if (section._lessonMode) {
            children.push(new Paragraph({
                text: `${sectionNum}. ${section.label}`,
                heading: HeadingLevel.HEADING_1,
                spacing: { before: 600, after: 200 },
                pageBreakBefore: sectionNum > 1
            }));

            const content = section.snapshotContent;

            switch (section.type) {

                // ── mandatory core fields ──────────────────────────────────
                case 'mandatory': {
                    // title
                    if (content.title) {
                        children.push(boldLabel('Lesson', content.title));
                        children.push(new Paragraph({ text: '', spacing: { after: 120 } }));
                    }
                    // concepts
                    if (Array.isArray(content.concepts) && content.concepts.length) {
                        children.push(new Paragraph({ text: 'Core Concepts', heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 } }));
                        content.concepts.forEach((c, i) => children.push(bullet(`${i + 1}. ${c}`)));
                    }
                    // theory
                    if (content.theory) {
                        children.push(new Paragraph({ text: 'Theory', heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 } }));
                        children.push(new Paragraph({ children: [new TextRun({ text: content.theory })], spacing: { after: 200 } }));
                    }
                    // keyDefinitions
                    if (content.keyDefinitions && typeof content.keyDefinitions === 'object') {
                        children.push(new Paragraph({ text: 'Key Definitions', heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 } }));
                        Object.entries(content.keyDefinitions).forEach(([term, def]) => {
                            children.push(boldLabel(term, def));
                        });
                    }
                    break;
                }

                // ── topicIntroduction ──────────────────────────────────────
                case 'introduction': {
                    children.push(new Paragraph({ text: 'Introduction', heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 } }));
                    children.push(...renderLessonIntroduction(content.topicIntroduction));
                    break;
                }

                // ── topicSummary ───────────────────────────────────────────
                case 'summary': {
                    children.push(new Paragraph({ text: 'Topic Summary', heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 } }));
                    children.push(...renderLessonSummary(content.topicSummary));
                    break;
                }

                // ── applications ───────────────────────────────────────────
                case 'applications': {
                    children.push(new Paragraph({ text: 'Real-World Applications', heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 } }));
                    if (Array.isArray(content.applications)) {
                        content.applications.forEach((a, i) => children.push(bullet(`${i + 1}. ${a}`)));
                    }
                    break;
                }

                // ── domain / specific item ─────────────────────────────────
                case 'domain': {
                    children.push(new Paragraph({ text: section.label, heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 } }));
                    const sectionContent = section.contentKey
                        ? content[section.contentKey]
                        : content;
                    if (sectionContent && typeof sectionContent === 'object') {
                        const renderedParas = [];
                        Object.entries(sectionContent).forEach(([key, value]) => {
                            renderContentNode(key, value, 0, {
                                boldLabel, bullet, subBullet, sectionHeader,
                                paras: renderedParas, itemLabelKeys: itemLabelKeys || []
                            });
                        });
                        children.push(...renderedParas);
                    }
                    break;
                }

                // ── diagram (singular, no experiment) ─────────────────────
                case 'diagram': {
                    children.push(new Paragraph({ text: `Diagram: ${section.label}`, heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 } }));
                    children.push(
                        new Paragraph({ children: [new TextRun({ text: `Diagram illustrating: ${section.label}` })], spacing: { after: 200 } }),
                        buildImageParagraph(diagramResult, section.label),
                        new Paragraph({ children: [new TextRun({ text: `Figure: ${section.label}`, bold: true })], alignment: AlignmentType.CENTER, spacing: { after: 100 } }),
                        new Paragraph({ children: [new TextRun({ text: section.caption || '', italics: true })], alignment: AlignmentType.CENTER, spacing: { after: 300 } })
                    );
                    break;
                }

                // ── experiment (singular, no diagram or domain) ───────────
                case 'experiment': {
                    children.push(new Paragraph({ text: `Experiment: ${section.label}`, heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 } }));
                    children.push(...buildExperimentSection(section.experimentId));
                    break;
                }

                // ── conceptLinks (supporting databases) ────────────────────
                case 'conceptLinks': {
                    children.push(new Paragraph({ text: 'Concept Links', heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 } }));
                    children.push(...renderConceptLinks(content.conceptLinks));
                    break;
                }

                default: {
                    // Generic fallback
                    children.push(new Paragraph({ text: section.label, heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 } }));
                    const renderedParas = [];
                    Object.entries(content).forEach(([key, value]) => {
                        renderContentNode(key, value, 0, {
                            boldLabel, bullet, subBullet, sectionHeader,
                            paras: renderedParas, itemLabelKeys: itemLabelKeys || []
                        });
                    });
                    children.push(...renderedParas);
                }
            }

            if (!isLast) children.push(new Paragraph({ text: '', spacing: { before: 400, after: 100 } }));
            continue; // skip the section-mode block below
        }

        // ──────────────────────────────────────────────────────────────────
        // Original SECTION-MODE rendering (unchanged)
        // ──────────────────────────────────────────────────────────────────
        children.push(new Paragraph({
            text: `${sectionNum}. ${section.label}`,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 600, after: 200 },
            pageBreakBefore: true
        }));

        children.push(new Paragraph({ text: `${sectionNum}.1 ${section.label} Content`, heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 200 } }));

        const sectionContent = section.contentKey
            ? section.snapshotContent[section.contentKey]
            : section.snapshotContent;

        if (sectionContent && typeof sectionContent === 'object') {
            const renderedParas = [];
            Object.entries(sectionContent).forEach(([key, value]) => {
                renderContentNode(key, value, 0, {
                    boldLabel, bullet, subBullet, sectionHeader,
                    paras: renderedParas, itemLabelKeys: itemLabelKeys || []
                });
            });
            if (renderedParas.length > 0) {
                children.push(...renderedParas);
            } else {
                children.push(new Paragraph({ children: [new TextRun({ text: `[No renderable content returned for ${section.contentKey ?? section.label}]`, italics: true })], spacing: { after: 200 } }));
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

        children.push(
            new Paragraph({ text: `${sectionNum}.2 ${section.label} Diagram`, heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 }, pageBreakBefore: true }),
            new Paragraph({ children: [new TextRun({ text: `The following diagram illustrates key concepts from ${section.label}.` })], spacing: { after: 300 } }),
            buildImageParagraph(diagramResult, section.label),
            new Paragraph({ children: [new TextRun({ text: `Figure ${sectionNum}: ${section.label} Diagram`, bold: true })], alignment: AlignmentType.CENTER, spacing: { after: 100 } }),
            new Paragraph({ children: [new TextRun({ text: `Diagram showing key concepts and features of ${section.label.toLowerCase()}.`, italics: true })], alignment: AlignmentType.CENTER, spacing: { after: 400 } })
        );

        const store          = workbook[experimentsKey];
        const experimentName = store?.[section.experimentId]?.name || section.experimentId;

        children.push(
            new Paragraph({ text: `${sectionNum}.3 ${docxTheme.tocEntryLabel}: ${experimentName}`, heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 }, pageBreakBefore: true }),
            ...buildExperimentSection(section.experimentId)
        );

        if (!isLast) children.push(new Paragraph({ text: '', spacing: { before: 400, after: 100 } }));
    }

    // ── Footer ─────────────────────────────────────────────────────────────
    children.push(
        new Paragraph({ text: '', spacing: { before: 600, after: 0 } }),
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
                { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, font: 'Arial', color: colors.h3 }, paragraph: { spacing: { before: 160, after: 80 }, outlineLevel: 2 } },
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
// MAIN TEST PIPELINE — section mode  (unchanged from original)
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

        console.log('[3/8] Processing all section contents...');
        const processedSections = [];
        for (const section of sectionRequests) {
            console.log(`  Processing: ${section.label}...`);
            const result         = handleProblem(workbook, section.request);
            const validSteps     = (result.steps || []).filter(s => s !== null && s !== undefined);
            const snapshotContent = result.content
                ? { ...result.content }
                : (workbook.currentContent ? { ...workbook.currentContent } : {});
            console.log(`  ✓ ${section.label}: ${validSteps.length} steps — content keys: [${Object.keys(snapshotContent).join(', ')}]`);
            processedSections.push({ ...section, result, validSteps, snapshotContent });
        }
        console.log(`✓ All ${processedSections.length} sections processed\n`);

        console.log('[4/8] Waiting for diagram renderers...');
        for (const section of processedSections) {
            try {
                const diagrams = await section.result.getDiagrams();
                section.diagrams = diagrams;
                console.log(`  ✓ ${section.label}: ${diagrams?.renderedImages?.length || 0} diagram(s)`);
            } catch (err) {
                console.log(`  ⚠ ${section.label}: getDiagrams() failed (${err.message})`);
                section.diagrams = null;
            }
        }
        console.log('');

        console.log('[5/8] Extracting and validating diagrams...');
        const diagramResults = {};
        for (const section of processedSections) {
            console.log(`  Diagram [${section.diagramId}] for: ${section.label}`);
            const result = await fetchDiagramBuffer(workbook, section.diagramId, outputDir, diagramOptions);
            diagramResults[section.id] = result || null;
            console.log(result ? `  ✓ ${section.label} diagram ready` : `  ⚠ ${section.label} — placeholder`);
        }
        console.log('');

        console.log('[6/8] Diagram summary:');
        sections.forEach(s => {
            const r = diagramResults[s.id];
            console.log(`  ${r ? '✓' : '✗'} ${s.label.padEnd(30)} → ${s.diagramId}.png ` + (r ? `(${(r.buffer.length / 1024).toFixed(2)} KB)` : '(placeholder)'));
        });
        console.log('');

        console.log('[7/8] Creating DOCX document...');
        const doc = await createWorkbookDocx(workbook, processedSections, diagramResults, config);
        console.log('✓ Document structure created\n');

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
        console.error(error.stack);
        return { success: false, error: error.message };
    }
}


// ════════════════════════════════════════════════════════════════════════════
// ★ NEW — INTERACTIVE LESSON WORKBOOK PIPELINE
//
// Flow:
//   1. Instantiate chosen workbook class
//   2. Show available lesson keys → user picks one
//   3. Process mandatory fields (title, concepts, theory, keyDefinitions)
//   4. Loop: offer optional additions → diagram | experiment | domain item |
//            introduction | summary | applications | conceptLinks | done
//   5. Fetch diagram buffers for every selected diagram
//   6. Build DOCX and export
// ════════════════════════════════════════════════════════════════════════════

async function runLessonWorkbook(choiceKey) {
    const config = WORKBOOK_REGISTRY[choiceKey];
    if (!config) {
        console.error(`Unknown choice: ${choiceKey}`);
        return { success: false, error: 'Unknown workbook choice' };
    }

    const { label, WorkbookClass, constructorOpts, diagramOptions, docxTheme } = config;
    const outputDir = './output';
    ensureOutputDir(outputDir);

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    console.log(`\n╔══ LESSON WORKBOOK — ${label.toUpperCase()} ══╗\n`);

    try {
        // ── Step 1: Initialise workbook ────────────────────────────────────
        console.log('Initializing workbook...');
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

        // ── Step 2: Choose a lesson ────────────────────────────────────────
        const lessonKeys = getWorkbookLessonKeys(workbook);
        if (!lessonKeys.length) {
            rl.close();
            return { success: false, error: 'No lessons found in this workbook.' };
        }

        console.log('Available lessons:');
        lessonKeys.forEach((k, i) => console.log(`  ${i + 1}. ${k}`));
        console.log('');

        let lessonKey = null;
        while (!lessonKey) {
            const ans = await ask(rl, 'Enter lesson number or lesson key: ');
            const num = parseInt(ans, 10);
            if (!isNaN(num) && num >= 1 && num <= lessonKeys.length) {
                lessonKey = lessonKeys[num - 1];
            } else if (lessonKeys.includes(ans)) {
                lessonKey = ans;
            } else if (typeof workbook.resolveLessonKey === 'function') {
                lessonKey = workbook.resolveLessonKey(ans);
            }
            if (!lessonKey) console.log('  ⚠ Not recognised — try again.');
        }
        console.log(`\n✓ Selected lesson: ${lessonKey}\n`);

        // ── Step 3: Process mandatory fields ──────────────────────────────
        console.log('Processing mandatory fields (title, concepts, theory, keyDefinitions)...');
        const mandatoryResult = workbook.handleLessonRequest({
            topic:           lessonKey,
            fields:          ['title', 'concepts', 'theory', 'keyDefinitions'],
            resolveDatabase: false,
        });
        const mandatoryContent = mandatoryResult.content || {};
        console.log(`✓ Mandatory fields loaded — lesson title: "${mandatoryContent.title || lessonKey}"\n`);

        // Collect all lesson sections to be written into DOCX
        const lessonSections = [];
        const diagramResults = {};

        // Mandatory block always first
        lessonSections.push({
            _lessonMode: true,
            id:    'mandatory',
            label: `${mandatoryContent.title || lessonKey} — Core Content`,
            type:  'mandatory',
            snapshotContent: mandatoryContent,
        });

        // ── Step 4: Interactive optional additions ─────────────────────────
        const { domain, diagrams, experiments } = getLessonRegistryEntries(workbook, lessonKey);
        const selectedDiagramIds    = new Set();
        const selectedExperimentIds = new Set();
        const selectedDomainItems   = new Set();
        let   introAdded            = false;
        let   summaryAdded          = false;
        let   applicationsAdded     = false;
        let   conceptLinksAdded     = false;

        const OPTION_LABELS = [
            '1 — Add a Diagram',
            '2 — Add an Experiment',
            '3 — Add a Domain / Specific Item',
            '4 — Add Topic Introduction',
            '5 — Add Topic Summary',
            '6 — Add Applications',
            '7 — Add Concept Links (scenarios, tips, rubrics, misconceptions)',
            '8 — Done — generate DOCX',
        ];

        let done = false;
        while (!done) {
            console.log('\nWhat would you like to add next?');
            OPTION_LABELS.forEach(l => console.log(`  ${l}`));
            const opt = await ask(rl, '\nYour choice: ');

            switch (opt.trim()) {

                // ── Diagrams ───────────────────────────────────────────────
                case '1': {
                    if (!diagrams.length) { console.log('  No diagrams registered for this lesson.'); break; }
                    console.log('\nDiagrams available for this lesson:');
                    diagrams.forEach((d, i) => {
                        const meta = workbook.lessonFieldRegistry[d] || {};
                        console.log(`  ${i + 1}. ${d}${meta.caption ? ' — ' + meta.caption : ''}`);
                    });
                    const dAns = await ask(rl, 'Enter diagram number(s) separated by commas (or "all"): ');
                    const picks = dAns.toLowerCase() === 'all'
                        ? diagrams.map((_, i) => i + 1)
                        : dAns.split(',').map(x => parseInt(x.trim(), 10)).filter(n => !isNaN(n) && n >= 1 && n <= diagrams.length);

                    for (const n of picks) {
                        const diagramFieldKey = diagrams[n - 1];
                        if (selectedDiagramIds.has(diagramFieldKey)) { console.log(`  ⚠ ${diagramFieldKey} already added — skipping.`); continue; }

                        const meta       = workbook.lessonFieldRegistry[diagramFieldKey] || {};
                        // The diagramId used by getDiagramBuffer may differ from the registry field key.
                        // Prefer the matching section's diagramId; fall back to the registry key itself.
                        const sectionCfg = findSectionByDiagramId(diagramFieldKey);
                        const diagramId  = sectionCfg ? sectionCfg.diagramId : diagramFieldKey;

                        console.log(`  Fetching diagram: ${diagramId}...`);
                        const buf = await fetchDiagramBuffer(workbook, diagramId, outputDir, diagramOptions);
                        const sectionId = `diagram_${diagramFieldKey}`;
                        diagramResults[sectionId] = buf || null;
                        selectedDiagramIds.add(diagramFieldKey);

                        lessonSections.push({
                            _lessonMode: true,
                            id:       sectionId,
                            label:    meta.caption || diagramFieldKey,
                            type:     'diagram',
                            caption:  meta.caption || '',
                            diagramId,
                            snapshotContent: {},
                        });
                        console.log(`  ✓ Added diagram: ${diagramFieldKey}`);
                    }
                    break;
                }

                // ── Experiments ────────────────────────────────────────────
                case '2': {
                    if (!experiments.length) { console.log('  No experiments registered for this lesson.'); break; }
                    console.log('\nExperiments available for this lesson:');
                    experiments.forEach((e, i) => {
                        const meta = workbook.lessonFieldRegistry[e] || {};
                        console.log(`  ${i + 1}. ${e}${meta.description ? ' — ' + meta.description : ''}`);
                    });
                    const eAns = await ask(rl, 'Enter experiment number(s) separated by commas (or "all"): ');
                    const picks = eAns.toLowerCase() === 'all'
                        ? experiments.map((_, i) => i + 1)
                        : eAns.split(',').map(x => parseInt(x.trim(), 10)).filter(n => !isNaN(n) && n >= 1 && n <= experiments.length);

                    for (const n of picks) {
                        const expFieldKey = experiments[n - 1];
                        if (selectedExperimentIds.has(expFieldKey)) { console.log(`  ⚠ ${expFieldKey} already added — skipping.`); continue; }

                        // Map registry field key → actual experimentId used in the store.
                        // The registry field key IS the experimentId for experiments.
                        selectedExperimentIds.add(expFieldKey);
                        const meta    = workbook.lessonFieldRegistry[expFieldKey] || {};
                        const sectionId = `experiment_${expFieldKey}`;

                        lessonSections.push({
                            _lessonMode:  true,
                            id:           sectionId,
                            label:        meta.description || expFieldKey,
                            type:         'experiment',
                            experimentId: expFieldKey,
                            snapshotContent: {},
                        });
                        console.log(`  ✓ Added experiment: ${expFieldKey}`);
                    }
                    break;
                }

                // ── Domain / specific item ─────────────────────────────────
                case '3': {
                    if (!domain.length) { console.log('  No domain items registered for this lesson.'); break; }
                    console.log('\nDomain items available for this lesson:');
                    domain.forEach((d, i) => {
                        const meta = workbook.lessonFieldRegistry[d] || {};
                        console.log(`  ${i + 1}. ${d}${meta.description ? ' — ' + meta.description.slice(0, 80) : ''}`);
                    });
                    const domAns = await ask(rl, 'Enter item number(s) separated by commas (or "all"): ');
                    const picks = domAns.toLowerCase() === 'all'
                        ? domain.map((_, i) => i + 1)
                        : domAns.split(',').map(x => parseInt(x.trim(), 10)).filter(n => !isNaN(n) && n >= 1 && n <= domain.length);

                    for (const n of picks) {
                        const itemKey = domain[n - 1];
                        if (selectedDomainItems.has(itemKey)) { console.log(`  ⚠ ${itemKey} already added — skipping.`); continue; }

                        // Find the section config that carries this specificItem
                        const sectionCfg = findSectionBySpecificItem(itemKey);
                        if (!sectionCfg) {
                            console.log(`  ⚠ No section config found for ${itemKey} — skipping.`);
                            continue;
                        }

                        console.log(`  Processing domain item: ${itemKey}...`);
                        const req = {
                            topic:      sectionCfg.subTopic || lessonKey,
                            subTopic:   sectionCfg.subTopic,
                            parameters: { specificItems: [itemKey], difficulty: 'detailed', focusArea: 'structure' },
                            requestType: 'content',
                            context:    { purpose: `Understanding ${itemKey}`, targetAudience: 'university students' }
                        };
                        const result         = config.handleProblem(workbook, req);
                        const snapshotContent = result.content
                            ? { ...result.content }
                            : (workbook.currentContent ? { ...workbook.currentContent } : {});

                        const meta      = workbook.lessonFieldRegistry[itemKey] || {};
                        const sectionId = `domain_${itemKey}`;
                        selectedDomainItems.add(itemKey);

                        lessonSections.push({
                            _lessonMode:  true,
                            id:           sectionId,
                            label:        itemKey.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase()).trim(),
                            type:         'domain',
                            contentKey:   sectionCfg.contentKey || null,
                            snapshotContent,
                        });
                        console.log(`  ✓ Added domain item: ${itemKey}`);

                        // Also fetch the associated diagram from this section
                        if (sectionCfg.diagramId) {
                            const diagSectionId = `domain_diag_${itemKey}`;
                            if (!diagramResults[diagSectionId]) {
                                console.log(`    Fetching associated diagram: ${sectionCfg.diagramId}...`);
                                const buf = await fetchDiagramBuffer(workbook, sectionCfg.diagramId, outputDir, diagramOptions);
                                diagramResults[diagSectionId] = buf || null;
                                lessonSections.push({
                                    _lessonMode: true,
                                    id:       diagSectionId,
                                    label:    `${sectionCfg.diagramId} — diagram`,
                                    type:     'diagram',
                                    caption:  `Diagram for ${itemKey}`,
                                    diagramId: sectionCfg.diagramId,
                                    snapshotContent: {},
                                });
                            }
                        }

                        // Also include the associated experiment
                        if (sectionCfg.experimentId && !selectedExperimentIds.has(sectionCfg.experimentId)) {
                            const expSectionId = `domain_exp_${itemKey}`;
                            selectedExperimentIds.add(sectionCfg.experimentId);
                            lessonSections.push({
                                _lessonMode:  true,
                                id:           expSectionId,
                                label:        sectionCfg.experimentId,
                                type:         'experiment',
                                experimentId: sectionCfg.experimentId,
                                snapshotContent: {},
                            });
                        }
                    }
                    break;
                }

                // ── Introduction ───────────────────────────────────────────
                case '4': {
                    if (introAdded) { console.log('  Introduction already added.'); break; }
                    const introResult = workbook.handleLessonRequest({
                        topic:  lessonKey,
                        fields: ['topicIntroduction'],
                        resolveDatabase: false,
                    });
                    lessonSections.push({
                        _lessonMode: true,
                        id:    'intro',
                        label: 'Topic Introduction',
                        type:  'introduction',
                        snapshotContent: introResult.content || {},
                    });
                    introAdded = true;
                    console.log('  ✓ Topic introduction added.');
                    break;
                }

                // ── Summary ────────────────────────────────────────────────
                case '5': {
                    if (summaryAdded) { console.log('  Summary already added.'); break; }
                    const sumResult = workbook.handleLessonRequest({
                        topic:  lessonKey,
                        fields: ['topicSummary'],
                        resolveDatabase: false,
                    });
                    lessonSections.push({
                        _lessonMode: true,
                        id:    'summary',
                        label: 'Topic Summary',
                        type:  'summary',
                        snapshotContent: sumResult.content || {},
                    });
                    summaryAdded = true;
                    console.log('  ✓ Topic summary added.');
                    break;
                }

                // ── Applications ───────────────────────────────────────────
                case '6': {
                    if (applicationsAdded) { console.log('  Applications already added.'); break; }
                    const appResult = workbook.handleLessonRequest({
                        topic:  lessonKey,
                        fields: ['applications'],
                        resolveDatabase: false,
                    });
                    lessonSections.push({
                        _lessonMode: true,
                        id:    'applications',
                        label: 'Real-World Applications',
                        type:  'applications',
                        snapshotContent: appResult.content || {},
                    });
                    applicationsAdded = true;
                    console.log('  ✓ Applications added.');
                    break;
                }

                // ── Concept Links ──────────────────────────────────────────
                case '7': {
                    if (conceptLinksAdded) { console.log('  Concept links already added.'); break; }

                    const dbOptions = ['misconceptions', 'contextualScenarios', 'studyTips', 'assessmentRubrics', 'assessmentQuestions'];
                    console.log('\nAvailable database categories:');
                    dbOptions.forEach((d, i) => console.log(`  ${i + 1}. ${d}`));
                    const dbAns = await ask(rl, 'Enter category number(s) separated by commas (or "all"): ');
                    const dbPicks = dbAns.toLowerCase() === 'all'
                        ? dbOptions
                        : dbAns.split(',').map(x => parseInt(x.trim(), 10))
                            .filter(n => !isNaN(n) && n >= 1 && n <= dbOptions.length)
                            .map(n => dbOptions[n - 1]);

                    if (!dbPicks.length) { console.log('  No valid categories selected.'); break; }

                    const clResult = workbook.handleLessonRequest({
                        topic:        lessonKey,
                        fields:       ['conceptLinks'],
                        dbCategories: dbPicks,
                        resolveDatabase: true,
                    });
                    lessonSections.push({
                        _lessonMode: true,
                        id:    'conceptLinks',
                        label: `Concept Links (${dbPicks.join(', ')})`,
                        type:  'conceptLinks',
                        snapshotContent: clResult.content || {},
                    });
                    conceptLinksAdded = true;
                    console.log(`  ✓ Concept links added for: ${dbPicks.join(', ')}`);
                    break;
                }

                // ── Done ───────────────────────────────────────────────────
                case '8': {
                    done = true;
                    break;
                }

                default:
                    console.log('  ⚠ Invalid option — enter 1–8.');
            }
        }

        rl.close();

        // ── Step 5: Build DOCX ─────────────────────────────────────────────
        console.log('\nBuilding lesson DOCX...');
        const lessonTitle    = mandatoryContent.title || lessonKey;
        const lessonDocxTheme = {
            ...docxTheme,
            title:       lessonTitle,
            subtitle:    `${config.label} — Lesson Workbook`,
            coverLine:   `Lesson: ${lessonTitle}`,
            footerLine1: `${config.label} — Lesson: ${lessonTitle}`,
            footerLine2: `Fields: ${lessonSections.map(s => s.label).join(' · ')}`,
            outputFile:  `Lesson_${lessonKey}_Workbook.docx`,
        };

        const lessonConfig = { ...config, sections: lessonSections, docxTheme: lessonDocxTheme };
        const doc = await createWorkbookDocx(workbook, lessonSections, diagramResults, lessonConfig);

        console.log('✓ Document structure created\n');
        console.log('Exporting to file...');
        const filename = path.join(outputDir, lessonDocxTheme.outputFile);
        const buffer   = await Packer.toBuffer(doc);
        fs.writeFileSync(filename, buffer);

        console.log(`✓ File exported: ${filename}`);
        console.log(`✓ File size: ${(buffer.length / 1024).toFixed(2)} KB\n`);

        // Summary
        console.log('════════════════════════════════════════');
        console.log(`LESSON WORKBOOK SUMMARY — ${lessonTitle}`);
        console.log('════════════════════════════════════════');
        console.log('Sections included:');
        lessonSections.forEach((s, i) => console.log(`  ${i + 1}. [${s.type.padEnd(12)}] ${s.label}`));
        console.log(`\nDiagrams fetched: ${Object.keys(diagramResults).filter(k => diagramResults[k]).length}`);
        console.log(`Output: ${filename}`);
        console.log('════════════════════════════════════════\n');

        return { success: true, filename, fileSize: buffer.length, lessonSections, diagramResults };

    } catch (error) {
        rl.close();
        console.error('\n✗ ERROR in Lesson Workbook:');
        console.error(error.message);
        console.error(error.stack);
        return { success: false, error: error.message };
    }
}


// ════════════════════════════════════════════════════════════════════════════
// SUMMARY PRINTER  (unchanged)
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
// ★ UPDATED — USER PROMPT  (two-level menu: workbook then mode)
// ════════════════════════════════════════════════════════════════════════════

async function promptUser() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    // ── Workbook choice ────────────────────────────────────────────────────
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

    let workbookChoice = '';
    while (!WORKBOOK_REGISTRY[workbookChoice]) {
        workbookChoice = await ask(rl, 'Enter workbook choice (1–4): ');
        if (!WORKBOOK_REGISTRY[workbookChoice]) console.log('  ⚠ Invalid — enter 1, 2, 3 or 4.');
    }

    // ── Mode choice ────────────────────────────────────────────────────────
    console.log('');
    console.log('╔══════════════════════════════════════════╗');
    console.log('║  Select generation mode:                 ║');
    console.log('║                                          ║');
    console.log('║  S — Section mode  (full configured DOCX)║');
    console.log('║  L — Lesson mode   (interactive lesson)  ║');
    console.log('╚══════════════════════════════════════════╝');
    console.log('');

    let mode = '';
    while (!['s', 'l'].includes(mode.toLowerCase())) {
        mode = await ask(rl, 'Enter mode (S / L): ');
        if (!['s', 'l'].includes(mode.toLowerCase())) console.log('  ⚠ Enter S or L.');
    }

    rl.close();
    return { workbookChoice, mode: mode.toLowerCase() };
}


// ════════════════════════════════════════════════════════════════════════════
// ENTRY POINT
// ════════════════════════════════════════════════════════════════════════════

(async () => {
    // Non-interactive: node consolidatedWorkbookTest.js 2 [s|l]
    let workbookChoice = process.argv[2];
    let mode           = (process.argv[3] || '').toLowerCase();

    if (!WORKBOOK_REGISTRY[workbookChoice] || !['s', 'l'].includes(mode)) {
        const picked = await promptUser();
        workbookChoice = picked.workbookChoice;
        mode           = picked.mode;
    }

    if (!WORKBOOK_REGISTRY[workbookChoice]) {
        console.error(`\n✗ Invalid workbook choice "${workbookChoice}". Please enter 1–4.\n`);
        process.exit(1);
    }

    const registryEntry = WORKBOOK_REGISTRY[workbookChoice];
    console.log(`\nStarting: ${registryEntry.label} [${mode === 'l' ? 'LESSON' : 'SECTION'} mode]\n`);

    const result = mode === 'l'
        ? await runLessonWorkbook(workbookChoice)
        : await runWorkbook(workbookChoice);

    if (result.success) {
        console.log('════════════════════════════════════════');
        console.log('✓✓✓ WORKBOOK GENERATED SUCCESSFULLY ✓✓✓');
        console.log('════════════════════════════════════════');
        console.log(`\nOutput : ${result.filename}`);
        console.log(`Size   : ${(result.fileSize / 1024).toFixed(2)} KB\n`);
    } else {
        console.log('════════════════════════════════════════');
        console.log('✗✗✗ WORKBOOK GENERATION FAILED ✗✗✗');
        console.log('════════════════════════════════════════');
        console.log(`\nError: ${result.error}\n`);
        process.exit(1);
    }
})();


// ════════════════════════════════════════════════════════════════════════════
// NAMED EXPORTS
// ════════════════════════════════════════════════════════════════════════════

export const testNucleicAcidWorkbook          = () => runWorkbook('1');
export const testOrganicChemistryWorkbook     = () => runWorkbook('2');
export const testMechanicsWorkbook            = () => runWorkbook('3');
export const testGeometricMeasurementWorkbook = () => runWorkbook('4');

export const runNucleicAcidLesson          = () => runLessonWorkbook('1');
export const runOrganicChemistryLesson     = () => runLessonWorkbook('2');
export const runMechanicsLesson            = () => runLessonWorkbook('3');
export const runGeometricMeasurementLesson = () => runLessonWorkbook('4');

export const createNucleicAcidDocx = (wb, sections, diagrams) =>
    createWorkbookDocx(wb, sections, diagrams, WORKBOOK_REGISTRY['1']);
export const createOrganicChemistryDocx = (wb, sections, diagrams) =>
    createWorkbookDocx(wb, sections, diagrams, WORKBOOK_REGISTRY['2']);
export const createMechanicsDocx = (wb, sections, diagrams) =>
    createWorkbookDocx(wb, sections, diagrams, WORKBOOK_REGISTRY['3']);
export const createGeometricMeasurementDocx = (wb, sections, diagrams) =>
    createWorkbookDocx(wb, sections, diagrams, WORKBOOK_REGISTRY['4']);
