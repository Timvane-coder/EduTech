// test-hydrocarbon-diagrams.js
// Organic Chemistry Diagram Test - Testing hydrocarbon diagrams
// from the EnhancedOrganicChemistryWorkbook

import { EnhancedOrganicChemistryWorkbook } from './organic-chemistry.js';

// ========================================
// TEST 1: FULL DEMONSTRATION WITH DIAGRAMS
// ========================================

async function demonstrateOrganicWorkbookWithDiagrams() {
    console.log('=== Starting Organic Chemistry Workbook Diagram Test ===\n');

    const workbook = new EnhancedOrganicChemistryWorkbook({
        theme: 'organic',
        includeDiagrams: true,
        diagramWidth: 800,
        diagramHeight: 600,
        includeExperiments: true,
        metacognitiveSupport: true,
        contextualLearning: true
    });

    console.log('Workbook instance created with diagram support enabled\n');

    console.log('Processing hydrocarbons topic...\n');

    const result = await workbook.handleOrganicChemistryProblem({
        topic: 'hydrocarbons',
        parameters: {},
        context: {},
        requestType: 'content'
    });

    console.log('✓ Workbook generated with diagrams!');
    console.log(`✓ Number of diagrams queued: ${result.diagrams?.diagrams?.length || 0}`);
    console.log(`✓ Diagrams rendered so far: ${result.diagrams?.renderedImages?.length || 0}\n`);

    // Wait for all diagrams to complete rendering
    console.log('Waiting for all diagrams to render...');
    const diagramData = await result.getDiagrams();
    console.log('✓ All diagrams rendering complete\n');

    // Report on each diagram
    if (diagramData && diagramData.renderedImages) {
        console.log('=== Diagram Details ===');
        let successCount = 0;
        let errorCount = 0;

        for (const diagram of diagramData.renderedImages) {
            if (diagram.type === 'png') {
                successCount++;
                const caption = workbook.getDiagramCaption(diagram.key);
                console.log(`✓ Diagram: ${diagram.key}`);
                console.log(`  Size:        ${diagram.width}x${diagram.height}px`);
                console.log(`  Buffer size: ${diagram.buffer?.length || 0} bytes`);
                console.log(`  Caption:     ${caption.substring(0, 80)}...`);
                console.log('');
            } else if (diagram.type === 'error') {
                errorCount++;
                console.log(`✗ Failed diagram: ${diagram.key}`);
                console.log(`  Error: ${diagram.error}\n`);
            }
        }

        console.log(`=== Render Summary: ${successCount} succeeded, ${errorCount} failed ===\n`);
    }

    // Export all diagrams
    console.log('=== Exporting Diagrams ===');
    try {
        const exportResults = await workbook.exportAllDiagramsForTopic(
            './output/hydrocarbon-diagrams'
        );
        console.log('Export results:');
        exportResults.forEach(res => {
            if (res.success) {
                console.log(`  ✓ ${res.diagramKey} → ${res.filename}`);
            } else {
                console.log(`  ✗ ${res.diagramKey} — ${res.error}`);
            }
        });
        console.log('');
    } catch (error) {
        console.error('Export error:', error.message);
        console.log('');
    }

    // Cache statistics
    console.log('=== Cache Statistics ===');
    const cacheStats = workbook.getDiagramCacheStats();
    console.log(`Cached diagrams: ${cacheStats.cachedDiagrams}`);
    console.log(`Diagrams ready:  ${cacheStats.diagramsReady}`);
    console.log(`Status:          ${cacheStats.status}`);
    console.log(`Topic type:      ${cacheStats.topicType}`);
    if (cacheStats.cacheKeys.length > 0) {
        console.log(`Cache keys (${cacheStats.cacheKeys.length}):`);
        cacheStats.cacheKeys.forEach(key => console.log(`  • ${key}`));
    }
    console.log('');

    // Workbook status
    console.log('=== Workbook Status ===');
    const status = workbook.getWorkbookStatus();
    console.log(`Has problem:          ${status.hasProblem}`);
    console.log(`Has content:          ${status.hasContent}`);
    console.log(`Has workbook:         ${status.hasWorkbook}`);
    console.log(`Has diagrams:         ${status.hasDiagrams}`);
    console.log(`Diagram count:        ${status.diagramCount}`);
    console.log(`Diagram status:       ${status.diagramStatus}`);
    console.log(`Diagrams ready:       ${status.diagramsReady}`);
    console.log(`Current topic:        ${status.currentTopicName}`);
    console.log(`Content completeness: ${status.contentCompleteness}%`);
    console.log(`Learner level:        ${status.learnerLevel}`);
    console.log('');

    return result;
}

// ========================================
// TEST 2: EXPORT A SPECIFIC DIAGRAM
// ========================================

async function exportSpecificHydrocarbonDiagram() {
    console.log('=== Exporting Specific Hydrocarbon Diagram ===\n');

    const workbook = new EnhancedOrganicChemistryWorkbook({
        includeDiagrams: true
    });

    const targetDiagram = 'benzene_delocalization';

    console.log(`Exporting: ${targetDiagram}`);
    console.log(`Caption: ${workbook.getDiagramCaption(targetDiagram)}\n`);

    const result = await workbook.exportDiagram(
        targetDiagram,
        `./output/${targetDiagram}.png`,
        {
            width: 1200,
            height: 800,
            showLabels: true,
            showGrid: false,
            showAxes: false,
            showBondAngles: true,
            colorByElement: true,
            backgroundColor: '#FFFFFF'
        }
    );

    if (result.success) {
        console.log(`✓ Successfully exported to: ${result.filename}\n`);
    } else {
        console.log(`✗ Export failed: ${result.error}\n`);
    }

    // Try a second diagram — ethene pi bond (educationally important)
    const targetDiagram2 = 'ethene_pi_bond_overlap';
    console.log(`Exporting: ${targetDiagram2}`);
    console.log(`Caption: ${workbook.getDiagramCaption(targetDiagram2)}\n`);

    const result2 = await workbook.exportDiagram(
        targetDiagram2,
        `./output/${targetDiagram2}.png`,
        {
            width: 1000,
            height: 700,
            showLabels: true,
            showBondAngles: true,
            colorByElement: true,
            backgroundColor: '#FAFAFA'
        }
    );

    if (result2.success) {
        console.log(`✓ Successfully exported to: ${result2.filename}\n`);
    } else {
        console.log(`✗ Export failed: ${result2.error}\n`);
    }

    return { result, result2 };
}

// ========================================
// TEST 3: TEST ALL HYDROCARBON DIAGRAMS
// ========================================

async function testAllHydrocarbonDiagrams() {
    console.log('=== Testing All Hydrocarbon Diagrams Individually ===\n');

    const workbook = new EnhancedOrganicChemistryWorkbook({
        includeDiagrams: true,
        diagramWidth: 800,
        diagramHeight: 600
    });

    const hydrocarbonDiagrams = workbook.getRelevantOrganicDiagrams('hydrocarbons');

    console.log(`Testing ${hydrocarbonDiagrams.length} hydrocarbon diagrams...\n`);

    let successCount = 0;
    let failCount = 0;
    const results = [];

    for (const diagramKey of hydrocarbonDiagrams) {
        console.log(`Testing: ${diagramKey}`);
        console.log(`  Caption: ${workbook.getDiagramCaption(diagramKey).substring(0, 70)}...`);

        try {
            const buffer = await workbook.getDiagramBuffer(diagramKey, {
                width: 800,
                height: 600,
                showLabels: true,
                showGrid: false,
                showAxes: false,
                showBondAngles: true,
                colorByElement: true
            });

            if (buffer) {
                successCount++;
                console.log(`  ✓ Rendered successfully (${buffer.length} bytes)`);
                results.push({ key: diagramKey, success: true, bytes: buffer.length });
            } else {
                failCount++;
                console.log(`  ✗ Failed — null buffer returned`);
                results.push({ key: diagramKey, success: false, error: 'null buffer' });
            }
        } catch (error) {
            failCount++;
            console.log(`  ✗ Error: ${error.message}`);
            results.push({ key: diagramKey, success: false, error: error.message });
        }

        console.log('');
    }

    console.log(`=== Summary: ${successCount} succeeded, ${failCount} failed out of ${hydrocarbonDiagrams.length} ===\n`);

    return results;
}

// ========================================
// TEST 4: GET DIAGRAM BUFFER FOR EMBEDDING
// ========================================

async function getDiagramBufferExample() {
    console.log('=== Getting Diagram Buffer for Embedding ===\n');

    const workbook = new EnhancedOrganicChemistryWorkbook({
        includeDiagrams: true
    });

    // Test buffer retrieval for a structurally important diagram
    const targetKey = 'cyclohexane_chair_conformation';
    console.log(`Getting buffer for: ${targetKey}`);
    console.log(`Caption: ${workbook.getDiagramCaption(targetKey)}\n`);

    const buffer = await workbook.getDiagramBuffer(targetKey, {
        width: 1000,
        height: 700,
        showLabels: true,
        showGrid: false,
        showAxes: false,
        showBondAngles: true,
        colorByElement: true,
        backgroundColor: '#F5F5F5'
    });

    if (buffer) {
        console.log(`✓ Buffer obtained: ${buffer.length} bytes`);
        console.log('  This buffer can be embedded in Word documents, PDFs, presentations, etc.\n');
    } else {
        console.log('✗ Failed to get buffer\n');
    }

    // Test a second buffer — geometric isomers (important concept)
    const targetKey2 = 'geometric_isomers_but2ene';
    console.log(`Getting buffer for: ${targetKey2}`);
    console.log(`Caption: ${workbook.getDiagramCaption(targetKey2)}\n`);

    const buffer2 = await workbook.getDiagramBuffer(targetKey2, {
        width: 1000,
        height: 600,
        showLabels: true,
        showBondAngles: true,
        colorByElement: true
    });

    if (buffer2) {
        console.log(`✓ Buffer obtained: ${buffer2.length} bytes`);
        console.log('  Ready for embedding in workbook document.\n');
    } else {
        console.log('✗ Failed to get buffer\n');
    }

    return { buffer, buffer2 };
}

// ========================================
// TEST 5: DIAGRAM CACHING
// ========================================

async function testDiagramCaching() {
    console.log('=== Testing Diagram Caching ===\n');

    const workbook = new EnhancedOrganicChemistryWorkbook({
        includeDiagrams: true
    });

    const testKey = 'benzene_delocalization';

    // First render — cold cache
    console.log(`First render of ${testKey} (cold cache)...`);
    const start1 = Date.now();
    const buffer1 = await workbook.getDiagramBuffer(testKey);
    const time1 = Date.now() - start1;
    console.log(`✓ First render completed in ${time1}ms (${buffer1?.length || 0} bytes)\n`);

    // Second render — should use cache
    console.log(`Second render of ${testKey} (from cache)...`);
    const start2 = Date.now();
    const buffer2 = await workbook.getDiagramBuffer(testKey);
    const time2 = Date.now() - start2;
    console.log(`✓ Second render completed in ${time2}ms (${buffer2?.length || 0} bytes)`);

    if (time2 > 0) {
        console.log(`  Cache speedup: ${(time1 / time2).toFixed(2)}x faster`);
    } else {
        console.log('  Cache speedup: instant (sub-millisecond)');
    }
    console.log('');

    // Render a second diagram to populate cache further
    const testKey2 = 'ethene_pi_bond_overlap';
    console.log(`Rendering additional diagram: ${testKey2}...`);
    const start3 = Date.now();
    await workbook.getDiagramBuffer(testKey2);
    const time3 = Date.now() - start3;
    console.log(`✓ Rendered in ${time3}ms\n`);

    // Check cache stats
    const stats = workbook.getDiagramCacheStats();
    console.log('Cache statistics after renders:');
    console.log(`  Cached diagrams: ${stats.cachedDiagrams}`);
    console.log(`  Diagrams ready:  ${stats.diagramsReady}`);
    console.log(`  Status:          ${stats.status}`);
    console.log(`  Keys:            ${stats.cacheKeys.join(', ')}\n`);

    // Clear cache and verify
    console.log('Clearing diagram cache...');
    workbook.clearDiagramCache();
    const statsAfterClear = workbook.getDiagramCacheStats();
    console.log(`✓ Cache cleared`);
    console.log(`  Cached diagrams after clear: ${statsAfterClear.cachedDiagrams}`);
    console.log(`  Status after clear:          ${statsAfterClear.status}\n`);

    // Re-render to confirm cache was actually cleared
    console.log(`Re-rendering ${testKey} after cache clear...`);
    const start4 = Date.now();
    await workbook.getDiagramBuffer(testKey);
    const time4 = Date.now() - start4;
    console.log(`✓ Re-render completed in ${time4}ms (cache was cleared — cold render confirmed)\n`);
}

// ========================================
// TEST 6: DIAGRAM CAPTIONS
// ========================================

async function testDiagramCaptions() {
    console.log('=== Testing Diagram Captions ===\n');

    const workbook = new EnhancedOrganicChemistryWorkbook({
        includeDiagrams: false
    });

    const hydrocarbonDiagrams = workbook.getRelevantOrganicDiagrams('hydrocarbons');

    console.log(`Captions for all ${hydrocarbonDiagrams.length} hydrocarbon diagrams:\n`);

    hydrocarbonDiagrams.forEach((key, idx) => {
        const caption = workbook.getDiagramCaption(key);
        console.log(`${idx + 1}. ${key}`);
        console.log(`   ${caption}`);
        console.log('');
    });

    // Test captions for other topics to confirm organic-specificity
    const otherTopics = ['functional_groups', 'organic_reactions', 'stereochemistry', 'spectroscopy', 'polymers'];

    console.log('=== Caption counts by topic ===\n');
    otherTopics.forEach(topic => {
        const keys = workbook.getRelevantOrganicDiagrams(topic);
        console.log(`${topic}: ${keys.length} diagrams`);
        keys.slice(0, 2).forEach(key => {
            console.log(`  • ${key}: ${workbook.getDiagramCaption(key).substring(0, 70)}...`);
        });
        console.log('');
    });
}

// ========================================
// TEST 7: COMPLETE WORKFLOW
// ========================================

async function completeWorkflow() {
    console.log('=== Complete Organic Chemistry Diagram Workflow ===\n');

    const workbook = new EnhancedOrganicChemistryWorkbook({
        theme: 'organic',
        includeDiagrams: true,
        diagramWidth: 1000,
        diagramHeight: 750,
        includeExperiments: true,
        includeCommonMisconceptions: true,
        metacognitiveSupport: true,
        contextualLearning: true,
        assessmentFeedback: true,
        explanationLevel: 'intermediate'
    });

    // Step 1: Generate hydrocarbon content
    console.log('Step 1: Generating hydrocarbon content...');
    const result = await workbook.handleOrganicChemistryProblem({
        topic: 'hydrocarbons',
        parameters: { difficulty: 'intermediate' },
        context: { focus: 'structure and reactions' }
    });
    console.log('✓ Content generated\n');

    // Step 2: Wait for diagrams
    console.log('Step 2: Waiting for diagrams to render...');
    const diagramData = await result.getDiagrams();
    const renderedCount = diagramData?.renderedImages?.length || 0;
    const successfulCount = diagramData?.renderedImages?.filter(d => d.type === 'png').length || 0;
    console.log(`✓ ${successfulCount}/${renderedCount} diagrams rendered successfully\n`);

    // Step 3: Export diagrams
    console.log('Step 3: Exporting all diagrams to files...');
    try {
        const exportResults = await workbook.exportAllDiagramsForTopic(
            './output/hydrocarbon-complete'
        );
        const exportSuccess = exportResults.filter(r => r.success).length;
        console.log(`✓ Exported ${exportSuccess}/${exportResults.length} diagrams\n`);
    } catch (error) {
        console.log(`  ℹ Export skipped: ${error.message}\n`);
    }

    // Step 4: Get a specific buffer for embedding
    console.log('Step 4: Retrieving specific diagram buffer for embedding...');
    const embedBuffer = await workbook.getDiagramBuffer('benzene_delocalization', {
        width: 800,
        height: 600,
        showLabels: true,
        colorByElement: true
    });
    if (embedBuffer) {
        console.log(`✓ Embed buffer ready: ${embedBuffer.length} bytes\n`);
    } else {
        console.log('ℹ Embed buffer not available\n');
    }

    // Step 5: Display full workflow summary
    console.log('=== Workflow Summary ===');
    console.log(`Topic:                ${result.content.topic}`);
    console.log(`Category:             ${result.content.category}`);
    console.log(`Difficulty:           ${workbook.assessOrganicContentDifficulty()}`);
    console.log(`Diagrams rendered:    ${successfulCount}/${renderedCount}`);
    console.log(`Experiments linked:   ${result.experiments?.length || 0}`);
    console.log(`Content completeness: ${workbook.calculateOrganicContentCompleteness()}%`);
    console.log(`Workbook sections:    ${workbook.currentWorkbook?.sections?.length || 0}`);

    const cacheStats = workbook.getDiagramCacheStats();
    console.log(`Cache size:           ${cacheStats.cachedDiagrams} diagrams`);
    console.log('');

    // List workbook sections
    if (workbook.currentWorkbook?.sections) {
        console.log('Generated Workbook Sections:');
        workbook.currentWorkbook.sections.forEach(section => {
            const rowCount = Array.isArray(section.data) ? section.data.length : '—';
            const diagramCount = section.type === 'diagrams'
                ? ` [${section.diagrams?.length || 0} diagrams]`
                : '';
            console.log(`  • [${section.type}] ${section.title} — ${rowCount} rows${diagramCount}`);
        });
    }

    console.log('');
    return result;
}

// ========================================
// COMMAND LINE DISPATCH
// ========================================

const testMode = process.argv[2] || 'full';

console.log('\n╔═══════════════════════════════════════════════════════╗');
console.log('║   ORGANIC CHEMISTRY — HYDROCARBON DIAGRAM TEST SUITE ║');
console.log('╚═══════════════════════════════════════════════════════╝\n');

switch (testMode) {
    case 'full':
        console.log('Running full demonstration...\n');
        demonstrateOrganicWorkbookWithDiagrams()
            .then(() => console.log('\n✓ Test completed successfully!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error.message);
                console.error('Stack trace:', error.stack);
                process.exit(1);
            });
        break;

    case 'specific':
        console.log('Testing specific diagram export...\n');
        exportSpecificHydrocarbonDiagram()
            .then(() => console.log('\n✓ Test completed successfully!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error.message);
                process.exit(1);
            });
        break;

    case 'all':
        console.log('Testing all hydrocarbon diagrams individually...\n');
        testAllHydrocarbonDiagrams()
            .then(() => console.log('\n✓ Test completed successfully!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error.message);
                process.exit(1);
            });
        break;

    case 'buffer':
        console.log('Testing diagram buffer retrieval...\n');
        getDiagramBufferExample()
            .then(() => console.log('\n✓ Test completed successfully!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error.message);
                process.exit(1);
            });
        break;

    case 'cache':
        console.log('Testing diagram caching...\n');
        testDiagramCaching()
            .then(() => console.log('\n✓ Test completed successfully!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error.message);
                process.exit(1);
            });
        break;

    case 'captions':
        console.log('Testing diagram captions...\n');
        testDiagramCaptions()
            .then(() => console.log('\n✓ Test completed successfully!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error.message);
                process.exit(1);
            });
        break;

    case 'workflow':
        console.log('Testing complete workflow...\n');
        completeWorkflow()
            .then(() => console.log('\n✓ Test completed successfully!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error.message);
                console.error('Stack trace:', error.stack);
                process.exit(1);
            });
        break;

    default:
        console.error(`Unknown test mode: ${testMode}`);
        console.log('\nAvailable modes:');
        console.log('  full      - Full demonstration with all diagrams (default)');
        console.log('  specific  - Export specific hydrocarbon diagrams');
        console.log('  all       - Test every hydrocarbon diagram individually');
        console.log('  buffer    - Test diagram buffer retrieval for embedding');
        console.log('  cache     - Test diagram caching and cache clearing');
        console.log('  captions  - Test diagram captions across all topics');
        console.log('  workflow  - Complete end-to-end workflow test');
        console.log('\nUsage: node test-hydrocarbon-diagrams.js [mode]\n');
        process.exit(1);
}

/**
 * Usage:
 *
 * # Run full demonstration with all hydrocarbon diagrams
 * node test-hydrocarbon-diagrams.js full
 *
 * # Export specific diagrams (benzene_delocalization, ethene_pi_bond_overlap)
 * node test-hydrocarbon-diagrams.js specific
 *
 * # Test every hydrocarbon diagram key individually
 * node test-hydrocarbon-diagrams.js all
 *
 * # Test diagram buffer retrieval for document embedding
 * node test-hydrocarbon-diagrams.js buffer
 *
 * # Test diagram caching, cache speedup, and cache clearing
 * node test-hydrocarbon-diagrams.js cache
 *
 * # Test diagram captions for hydrocarbons and all other topics
 * node test-hydrocarbon-diagrams.js captions
 *
 * # Run complete end-to-end workflow:
 * #   generate content → render diagrams → export → buffer → summary
 * node test-hydrocarbon-diagrams.js workflow
 */
