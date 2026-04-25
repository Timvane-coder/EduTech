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

import { EnhancedGeometricMeasurementWorkbook } from './mat.js';
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

    /**    // ── Sector Area (sections 1–10) ──────────────────────────────────────────
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
    },                          // ← COMMA WAS MISSING HERE
    */
    // ── Trigonometry Ratios (sections 11–20) ─────────────────────────────────
    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 11,
        subTopic: 'trigonometry_ratios',
        specificItems: ['foundations'],
        diagramId: 'rightTriangleTrigRatios',
        experimentId: 'perimeter_optimisation_investigation',
        contentKey: 'components'
    },
    {                           // ← COMMA WAS MISSING BEFORE THIS
        id: 'primaryRatios',
        label: 'Primary Ratios',
        sectionNumber: 12,
        subTopic: 'trigonometry_ratios',
        specificItems: ['primaryRatios'],
        diagramId: 'unitCircle',
        experimentId: 'pythagorean_theorem_discovery',
        contentKey: 'components'
    },
    {
        id: 'reciprocalRatios',
        label: 'Reciprocal Ratios',
        sectionNumber: 13,
        subTopic: 'trigonometry_ratios',
        specificItems: ['reciprocalRatios'],
        diagramId: 'specialAnglesTriangle',
        experimentId: 'bearings_navigation_investigation',
        contentKey: 'components'
    },
    {
        id: 'specialAngles',
        label: 'Special Angles',
        sectionNumber: 14,
        subTopic: 'trigonometry_ratios',
        specificItems: ['specialAngles'],
        diagramId: 'trigIdentitiesVisual',
        experimentId: 'pythagorean_theorem_discovery',
        contentKey: 'components'
    },
    {
        id: 'unitCircleAndExtendedAngles',
        label: 'Unit Circle and Extended Angles',
        sectionNumber: 15,
        subTopic: 'trigonometry_ratios',
        specificItems: ['unitCircleAndExtendedAngles'],
        diagramId: 'radianMeasure',
        experimentId: 'bearings_navigation_investigation',
        contentKey: 'components'
    },
    {
        id: 'calculatingWithRatios',
        label: 'Calculating With Ratios',
        sectionNumber: 16,
        subTopic: 'trigonometry_ratios',
        specificItems: ['calculatingWithRatios'],
        diagramId: 'sineRuleDiagram',
        experimentId: 'pythagorean_theorem_discovery',
        contentKey: 'components'
    },
    {
        id: 'trigonometricIdentities',
        label: 'Trigonometric Identities',
        sectionNumber: 17,
        subTopic: 'trigonometry_ratios',
        specificItems: ['trigonometricIdentities'],
        diagramId: 'trigIdentitiesVisual',
        experimentId: 'pythagorean_theorem_discovery',
        contentKey: 'components'
    },
    {
        id: 'graphsOfTrigFunctions',
        label: 'Graphs of Trig Functions',
        sectionNumber: 18,
        subTopic: 'trigonometry_ratios',
        specificItems: ['graphsOfTrigFunctions'],
        diagramId: 'cosineRuleDiagram',
        experimentId: 'bearings_navigation_investigation',
        contentKey: 'components'
    },
    {
        id: 'solvingTrigEquations',
        label: 'Solving Trig Equations',
        sectionNumber: 19,
        subTopic: 'trigonometry_ratios',
        specificItems: ['solvingTrigEquations'],
        diagramId: 'unitCircle',
        experimentId: 'pythagorean_theorem_discovery',
        contentKey: 'components'
    },
    {
        id: 'realWorldApplications',
        label: 'Real-World Applications',
        sectionNumber: 20,
        subTopic: 'trigonometry_ratios',
        specificItems: ['realWorldApplications'],
        diagramId: 'triangleAreaFormula',
        experimentId: 'bearings_navigation_investigation',
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
            includeExperiments: true,
            includeDiagrams: true,
            diagramWidth: 1200,
            diagramHeight: 900,
            detailLevel: 'detailed'
        });
        console.log('✓ Workbook initialized\n');


        // ── DEBUG: verify constructor initialisation ──────────────────────────────
console.log('\n[DEBUG] Constructor initialisation check:');

// 1. mathematicsTopics
if (workbook.mathematicsTopics) {
    console.log(`  ✓ mathematicsTopics — keys: [${Object.keys(workbook.mathematicsTopics).join(', ')}]`);
} else {
    console.error('  ✗ mathematicsTopics is UNDEFINED — initializeGeometricTopics() failed or threw');
}

// 2. Each expected topic handler
const expectedTopics = [
    'perimeter', 'area', 'surface_area', 'volume',
    'arc_length', 'sector_area', 'trigonometry_ratios',
    'pythagorean_theorem', 'bearings'
];
expectedTopics.forEach(key => {
    const entry = workbook.mathematicsTopics?.[key];
    if (!entry) {
        console.error(`  ✗ Topic missing: ${key}`);
    } else if (typeof entry.handler !== 'function') {
        console.error(`  ✗ Topic '${key}' exists but handler is ${typeof entry.handler} — not a function`);
    } else {
        console.log(`  ✓ Topic '${key}' — handler: ${entry.handler.name || 'anonymous'}`);
    }
});

// 3. Handler methods directly on the instance
const expectedHandlers = [
    'handlePerimeter', 'handleArea', 'handleSurfaceArea', 'handleVolume',
    'handleArcLength', 'handleSectorArea', 'handleTrigonometryRatios',
    'handlePythagoreanTheorem', 'handleBearings'
];
console.log('\n[DEBUG] Handler method existence check:');
expectedHandlers.forEach(name => {
    if (typeof workbook[name] === 'function') {
        console.log(`  ✓ workbook.${name}()`);
    } else {
        console.error(`  ✗ workbook.${name} is ${typeof workbook[name]} — METHOD MISSING OR UNPARSED`);
    }
});

// 4. Supporting databases
const expectedDatabases = [
    'mathematicsExperiments', 'misconceptionDatabase',
    'metacognitivePrompts', 'contextualScenarios', 'assessmentRubrics'
];
console.log('\n[DEBUG] Supporting database check:');
expectedDatabases.forEach(db => {
    const val = workbook[db];
    if (!val) {
        console.error(`  ✗ ${db} is UNDEFINED`);
    } else {
        const keys = Object.keys(val);
        console.log(`  ✓ ${db} — ${keys.length} entries: [${keys.slice(0, 4).join(', ')}${keys.length > 4 ? ', …' : ''}]`);
    }
});

// 5. Dry-run each handler directly to catch internal content errors
console.log('\n[DEBUG] Handler dry-run check:');
const dummyProblem = { type: null, parameters: {}, subTopic: null, context: {} };
expectedHandlers.forEach((name, i) => {
    const topicKey = expectedTopics[i];
    if (typeof workbook[name] !== 'function') {
        console.error(`  ✗ Skipping ${name} — not a function`);
        return;
    }
    try {
        const result = workbook[name]({ ...dummyProblem, type: topicKey });
        const topLevelKeys = result ? Object.keys(result) : [];
        const hasComponents = !!result?.components;
        console.log(`  ✓ ${name}() returned — keys: [${topLevelKeys.join(', ')}]${hasComponents ? ' | has components: [' + Object.keys(result.components).join(', ') + ']' : ''}`);
    } catch (err) {
        console.error(`  ✗ ${name}() THREW: ${err.message}`);
        console.error(`      at: ${err.stack?.split('\n')[1]?.trim() ?? 'unknown'}`);
    }
});

console.log('\n[DEBUG] End of initialisation check\n');
// ── END DEBUG ──
        // ── Step 2: Define all filtered requests ──────────────────────────────
        console.log('[2/8] Preparing geometric measurement section requests...');
        const sectionRequests = GEOMETRIC_MEASUREMENT_SECTIONS.map(section => ({
            ...section,
            request: {
                topic: section.subTopic,
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
    // Reads directly from workbook.mathematicsExperiments[experimentId].
    // No practical/experiment or investigation data is re-defined here.
    const buildExperimentSection = (experimentId) => {
        const paras = [];
        const experiment = workbook.mathematicsExperiments[experimentId];

        if (!experiment) {
            paras.push(new Paragraph({
                children: [new TextRun({
                    text: `[Practical data not available: ${experimentId}]`,
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
        const practMath = experiment.practicalMathematics;
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
        // PRACTICAL/Experiment BLOCK
        // Reads directly from workbook.mathematicsPracticals[experimentId].
        // No practical data is re-defined here.
        // ════════════════════════════════════════
        const experimentName =
            workbook.mathematicsExperiments[section.experimentId]?.name || section.experimentId;

        children.push(
            new Paragraph({
                text: `${sectionNum}.3 Related Practical: ${experimentName}`,
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
        const exp = workbook.mathematicsExperiments[s.experimentId];
        const name = exp?.name || s.experimentId;
        console.log(`  ${exp ? '✓' : '✗'} ${s.experimentId.padEnd(42)} → ${name}`);
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
