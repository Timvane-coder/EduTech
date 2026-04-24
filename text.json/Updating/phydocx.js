// Mechanics Workbook Test
// Handles all filtered mechanics contents:
//   1. Foundations              → linearMomentumMassVelocityVectorDiagram       + momentum_mass_velocity_trolley_comparison_experiment
//   2. Impulse                  → forceTimeGraphImpulseAreaAverageForceDiagram   + impulse_force_sensor_ball_impact_collision_time_experiment
//   3. Conservation of Momentum → beforeAfterCollisionMomentumVectorsDiagram     + conservation_of_momentum_air_track_glider_collision_experiment
//   4. Types of Collisions      → elasticInelasticPerfectlyInelasticKineticEnergyComparisonDiagram + elastic_vs_inelastic_collision_energy_loss_trolleys_experiment
//   5. Coefficient of Restitution → bouncingBallDropHeightRestitutionCoefficientDiagram + coefficient_of_restitution_ball_drop_bounce_height_experiment
//   6. Explosions and Recoil    → explosionRecoilMomentumConservationVectorDiagram + recoil_spring_loaded_trolley_separation_velocity_experiment
//   7. Centre of Mass           → centreOfMassDiscreteAndContinuousSystemsDiagram + centre_of_mass_irregular_lamina_plumb_line_experiment
//   8. 2D Collisions            → twoDimensionalGlancingCollisionComponentVectorsDiagram + two_dimensional_collision_ball_bearings_carbon_paper_experiment
//   9. Angular Momentum         → angularMomentumConservationSpinnerArmExtensionDiagram + angular_momentum_conservation_rotating_stool_mass_extension_experiment
//  10. Momentum in Advanced Contexts → ballisticPendulumMomentumEnergyTwoStageDiagram + ballistic_pendulum_bullet_speed_momentum_energy_experiment
//
// Content rendering: generic recursive walk of workbook output.
// No content is re-defined here — data is sourced entirely from
// handleMechanicsProblem → getMechanicsContent → filterContentByParameters.
// ========================================

import { EnhancedMechanicsWorkbook } from './physics.js';
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

const MECHANICS_SECTIONS = [

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'momentumCollisions',
        specificItems: ['foundations'],
        diagramId: 'linearMomentumMassVelocityVectorDiagram',
        experimentId: 'momentum_mass_velocity_trolley_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'impulse',
        label: 'Impulse',
        sectionNumber: 2,
        subTopic: 'momentumCollisions',
        specificItems: ['impulse'],
        diagramId: 'forceTimeGraphImpulseAreaAverageForceDiagram',
        experimentId: 'impulse_force_sensor_ball_impact_collision_time_experiment',
        contentKey: 'components'
    },
    {
        id: 'conservation_of_momentum',
        label: 'Conservation of Momentum',
        sectionNumber: 3,
        subTopic: 'momentumCollisions',
        specificItems: ['conservation_of_momentum'],
        diagramId: 'beforeAfterCollisionMomentumVectorsDiagram',
        experimentId: 'conservation_of_momentum_air_track_glider_collision_experiment',
        contentKey: 'components'
    },
    {
        id: 'types_of_collisions',
        label: 'Types of Collisions',
        sectionNumber: 4,
        subTopic: 'momentumCollisions',
        specificItems: ['types_of_collisions'],
        diagramId: 'elasticInelasticPerfectlyInelasticKineticEnergyComparisonDiagram',
        experimentId: 'elastic_vs_inelastic_collision_energy_loss_trolleys_experiment',
        contentKey: 'components'
    },
    {
        id: 'coefficient_of_restitution',
        label: 'Coefficient of Restitution',
        sectionNumber: 5,
        subTopic: 'momentumCollisions',
        specificItems: ['coefficient_of_restitution'],
        diagramId: 'bouncingBallDropHeightRestitutionCoefficientDiagram',
        experimentId: 'coefficient_of_restitution_ball_drop_bounce_height_experiment',
        contentKey: 'components'
    },
    {
        id: 'explosions_and_recoil',
        label: 'Explosions and Recoil',
        sectionNumber: 6,
        subTopic: 'momentumCollisions',
        specificItems: ['explosions_and_recoil'],
        diagramId: 'explosionRecoilMomentumConservationVectorDiagram',
        experimentId: 'recoil_spring_loaded_trolley_separation_velocity_experiment',
        contentKey: 'components'
    },
    {
        id: 'centre_of_mass',
        label: 'Centre of Mass',
        sectionNumber: 7,
        subTopic: 'momentumCollisions',
        specificItems: ['centre_of_mass'],
        diagramId: 'centreOfMassDiscreteAndContinuousSystemsDiagram',
        experimentId: 'centre_of_mass_irregular_lamina_plumb_line_experiment',
        contentKey: 'components'
    },
    {
        id: 'collisions_2D',
        label: '2D Collisions',
        sectionNumber: 8,
        subTopic: 'momentumCollisions',
        specificItems: ['collisions_2D'],
        diagramId: 'twoDimensionalGlancingCollisionComponentVectorsDiagram',
        experimentId: 'two_dimensional_collision_ball_bearings_carbon_paper_experiment',
        contentKey: 'components'
    },
    {
        id: 'angular_momentum',
        label: 'Angular Momentum',
        sectionNumber: 9,
        subTopic: 'momentumCollisions',
        specificItems: ['angular_momentum'],
        diagramId: 'angularMomentumConservationSpinnerArmExtensionDiagram',
        experimentId: 'angular_momentum_conservation_rotating_stool_mass_extension_experiment',
        contentKey: 'components'
    },
    {
        id: 'advanced_contexts',
        label: 'Momentum in Advanced Contexts',
        sectionNumber: 10,
        subTopic: 'momentumCollisions',
        specificItems: ['advanced_contexts'],
        diagramId: 'ballisticPendulumMomentumEnergyTwoStageDiagram',
        experimentId: 'ballistic_pendulum_bullet_speed_momentum_energy_experiment',
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
                showGrid: true,
                showAxes: true,
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
async function testMechanicsWorkbook() {
    console.log('========================================');
    console.log('MECHANICS WORKBOOK TEST');
    console.log('All Filtered Contents — Diagrams — Experiments');
    console.log('========================================\n');

    const outputDir = './output';
    ensureOutputDir(outputDir);

    try {
        // ── Step 1: Initialize workbook ───────────────────────────────────────
        console.log('[1/8] Initializing workbook...');
        const workbook = new EnhancedMechanicsWorkbook({
            width: 1400,
            height: 2000,
            theme: 'mechanics',
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
        console.log('[2/8] Preparing mechanics section requests...');

        const sectionRequests = MECHANICS_SECTIONS.map(section => ({
            ...section,
            request: {
                topic: 'momentum_collisions',
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
        // Each call to handleMechanicsProblem runs the topic handler then
        // filterContentByParameters, so workbook.currentContent is already
        // scoped to exactly the specificItems listed in the section config.
        // We snapshot content immediately after each call because
        // workbook.currentContent is overwritten on the next call.
        console.log('[3/8] Processing all mechanics contents...');
        const processedSections = [];

        for (const section of sectionRequests) {
            console.log(`  Processing: ${section.label}...`);
            const result = workbook.handleMechanicsProblem(section.request);
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
        MECHANICS_SECTIONS.forEach(s => {
            const r = diagramResults[s.id];
            console.log(
                `  ${r ? '✓' : '✗'} ${s.label.padEnd(30)} → ${s.diagramId}.png ` +
                (r ? `(${(r.buffer.length / 1024).toFixed(2)} KB)` : '(placeholder)')
            );
        });
        console.log('');

        // ── Step 7: Create DOCX document ─────────────────────────────────────
        console.log('[7/8] Creating DOCX document...');
        const doc = await createMechanicsDocx(workbook, processedSections, diagramResults);
        console.log('✓ Document structure created\n');

        // ── Step 8: Export to file ────────────────────────────────────────────
        console.log('[8/8] Exporting to file...');
        const filename = path.join(outputDir, 'Mechanics_Workbook.docx');
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
        console.error('\n✗ ERROR in Mechanics Workbook Test:');
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
    // mechanics handler metadata fields (flat, non-content)
    'topic', 'category', 'summary'
]);

function renderContentNode(key, value, depth, helpers) {
    const { boldLabel, bullet, subBullet, sectionHeader, paras } = helpers;

    if (SKIP_KEYS.has(key)) return;

    // camelCase / snake_case → Title Case with spaces for display
    const displayKey = key
        .replace(/_/g, ' ')
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
                // Object inside array: show name/title/type first then recurse rest
                const itemLabel = item.name || item.title || item.type || item.law || null;
                if (itemLabel) {
                    paras.push(
                        new Paragraph({
                            children: [new TextRun({ text: itemLabel, bold: true, italics: true })],
                            spacing: { before: 80, after: 40 }
                        })
                    );
                }

                Object.entries(item).forEach(([k, v]) => {
                    if (k === 'name' || k === 'title' || k === 'type' || k === 'law') return;
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
// DOCX CREATION — all mechanics sections
// ========================================
async function createMechanicsDocx(workbook, processedSections, diagramResults) {

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
    // Reads directly from workbook.mechanicsExperiments[experimentId].
    // No experiment data is re-defined here.
    const buildExperimentSection = (experimentId) => {
        const paras = [];
        const experiment = workbook.mechanicsExperiments[experimentId];

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
                ['Scientist', hist.scientist],
                ['Year', hist.year],
                ['Location', hist.location],
                ['Discovery', hist.discovery],
                ['Observation', hist.observation],
                ['Method', hist.method],
                ['Context', hist.context],
                ['Significance', hist.significance],
                ['Contribution', hist.contribution]
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

            if (lab.variables) {
                paras.push(sectionHeader('Variables', { before: 200, after: 100 }));
                if (lab.variables.independent) paras.push(boldLabel('Independent', lab.variables.independent, { after: 60 }));
                if (lab.variables.dependent)   paras.push(boldLabel('Dependent', lab.variables.dependent, { after: 60 }));
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
                    if (step && step.trim()) paras.push(bullet(step, { after: 60 }));
                });
            }

            if (lab.dataAnalysis && typeof lab.dataAnalysis === 'object') {
                paras.push(sectionHeader('Data Analysis', { before: 300, after: 100 }));
                Object.entries(lab.dataAnalysis).forEach(([k, v]) => {
                    if (typeof v === 'string') {
                        paras.push(boldLabel(k.charAt(0).toUpperCase() + k.slice(1), v, { after: 60 }));
                    }
                });
            }

            if (lab.expectedResults && typeof lab.expectedResults === 'object') {
                paras.push(sectionHeader('Expected Results', { before: 300, after: 100 }));
                Object.entries(lab.expectedResults).forEach(([k, v]) => {
                    if (typeof v === 'string') {
                        paras.push(boldLabel(k.charAt(0).toUpperCase() + k.slice(1), v, { after: 60 }));
                    }
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

            if (Array.isArray(lab.conclusions) && lab.conclusions.length) {
                paras.push(sectionHeader('Conclusions', { before: 300, after: 100 }));
                lab.conclusions.slice(0, 8).forEach(c => paras.push(bullet(c, { after: 80 })));
            }

            if (Array.isArray(lab.realWorldApplications) && lab.realWorldApplications.length) {
                paras.push(sectionHeader('Real-World Applications', { before: 300, after: 100 }));
                lab.realWorldApplications.slice(0, 8).forEach(a => paras.push(bullet(a, { after: 60 })));
            }

            if (Array.isArray(lab.extensions) && lab.extensions.length) {
                paras.push(sectionHeader('Extension Activities', { before: 300, after: 100 }));
                lab.extensions.slice(0, 6).forEach(e => paras.push(bullet(e, { after: 60 })));
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
            text: 'Mechanics',
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
        }),
        new Paragraph({
            text: 'Classical Mechanics Workbook',
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 }
        }),
        new Paragraph({
            children: [new TextRun({
                text: 'Covering: Momentum · Impulse · Collisions · Restitution · Explosions · Centre of Mass · Angular Momentum',
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

    MECHANICS_SECTIONS.forEach((s, i) => {
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
    //     handleMechanicsProblem → getMechanicsContent → filterContentByParameters
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
        //                                         e.g. snapshotContent.components
        //         snapshotContent directly        — when contentKey is null (flat handler return)
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
        // - contentKey present → drill into that key (e.g. snapshotContent.components)
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
            // For keyed sections: momentumCollisions → { foundations, impulse, conservation_of_momentum, … }
            // Keys like topic/category/summary are silently skipped by SKIP_KEYS
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
                    text: `Diagram showing the physical relationships and key features of ${section.label.toLowerCase()}.`,
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
            workbook.mechanicsExperiments[section.experimentId]?.name || section.experimentId;

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
                text: 'Enhanced Mechanics Workbook — Momentum and Collisions',
                italics: true
            })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 50 }
        }),
        new Paragraph({
            children: [new TextRun({
                text: 'Momentum · Impulse · Collisions · Restitution · Explosions · Centre of Mass · Angular Momentum',
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
                    run: { size: 52, bold: true, font: 'Arial', color: '7B241C' },
                    paragraph: { spacing: { before: 0, after: 240 }, alignment: AlignmentType.CENTER }
                },
                {
                    id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
                    run: { size: 36, bold: true, font: 'Arial', color: '7B241C' },
                    paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 0 }
                },
                {
                    id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
                    run: { size: 28, bold: true, font: 'Arial', color: '922B21' },
                    paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 1 }
                },
                {
                    id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
                    run: { size: 24, bold: true, font: 'Arial', color: 'CB4335' },
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
    console.log('MECHANICS WORKBOOK — DETAILED SUMMARY');
    console.log('========================================\n');

    console.log('SECTIONS PROCESSED:');
    console.log('─────────────────────────────────────');
    processedSections.forEach((s, i) => {
        const contentKeys = Object.keys(s.snapshotContent).join(', ');
        console.log(`  ${i + 1}. ${s.label.padEnd(30)} → ${s.validSteps.length} steps | keys: [${contentKeys}]`);
    });

    console.log('\nDIAGRAMS:');
    console.log('─────────────────────────────────────');
    MECHANICS_SECTIONS.forEach(s => {
        const r = diagramResults[s.id];
        const status = r ? `✓ ${(r.buffer.length / 1024).toFixed(2)} KB` : '✗ placeholder';
        console.log(`  [${s.diagramId.padEnd(52)}] ${status}`);
    });

    console.log('\nEXPERIMENTS:');
    console.log('─────────────────────────────────────');
    MECHANICS_SECTIONS.forEach(s => {
        const exp = workbook.mechanicsExperiments[s.experimentId];
        const name = exp?.name || s.experimentId;
        console.log(`  ${exp ? '✓' : '✗'} ${s.experimentId.padEnd(60)} → ${name}`);
    });

    console.log('\nCONTENT RENDERING APPROACH:');
    console.log('─────────────────────────────────────');
    console.log('  ✓ renderContentNode() — generic recursive tree walk');
    console.log('  ✓ Zero topic-specific branching in createMechanicsDocx');
    console.log('  ✓ Data sourced: handleMechanicsProblem → filterContentByParameters → snapshotContent');
    console.log('  ✓ contentKey present → snapshotContent[contentKey] (momentum, collisions, etc.)');
    console.log('  ✓ contentKey null    → snapshotContent directly (flat handler return)');
    console.log('  ✓ Primitives  → bold-labelled paragraphs');
    console.log('  ✓ Arrays      → bullet / sub-bullet lists');
    console.log('  ✓ Objects     → HEADING_3 (depth 0) or bold-underline sub-header (depth 1+)');
    console.log('  ✓ snake_case keys decoded → Title Case with spaces for display');
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
    console.log('  ✓ showGrid: true / showAxes: true for physics diagrams');

    console.log('\nOUTPUT FILES:');
    console.log('─────────────────────────────────────');
    console.log(`  DOCX : ${filename}`);
    console.log(`  Size : ${(fileSize / 1024).toFixed(2)} KB`);
    MECHANICS_SECTIONS.forEach(s => {
        const r = diagramResults[s.id];
        if (r) console.log(`  PNG  : output/${s.diagramId}_diagram.png`);
    });

    console.log('\n========================================\n');
}

// ========================================
// RUN THE TEST
// ========================================
console.log('Initiating Mechanics Workbook Test...\n');

testMechanicsWorkbook()
    .then(result => {
        if (result.success) {
            console.log('════════════════════════════════════════');
            console.log('✓✓✓ TEST COMPLETED SUCCESSFULLY ✓✓✓');
            console.log('════════════════════════════════════════');
            console.log(`\nMain output  : ${result.filename}`);
            console.log(`Size         : ${(result.fileSize / 1024).toFixed(2)} KB`);
            console.log('\nDiagram PNGs saved to ./output/');
            console.log('\nSections covered:');
            MECHANICS_SECTIONS.forEach((s, i) => console.log(`  ${i + 1}. ${s.label}`));
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
export { testMechanicsWorkbook, createMechanicsDocx };
