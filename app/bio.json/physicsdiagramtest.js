// test-mechanics-diagrams.js
// Mechanics Diagram Test - Testing dynamics diagrams

import { EnhancedMechanicsWorkbook } from './mechanics.js';

// Example usage - Demonstrate workbook with dynamics diagrams
async function demonstrateMechanicsWorkbookWithDiagrams() {
    console.log('=== Starting Mechanics Workbook Diagram Test ===\n');
    
    // Create workbook instance with diagrams enabled
    const workbook = new EnhancedMechanicsWorkbook({
        theme: 'mechanics',
        includeDiagrams: true,
        diagramWidth: 800,
        diagramHeight: 600,
        includeExperiments: true,
        metacognitiveSupport: true,
        contextualLearning: true
    });

    console.log('Workbook instance created with diagram support enabled\n');

    // Handle a dynamics topic (which includes the test diagrams)
    console.log('Processing dynamics topic...\n');
    const result = await workbook.handleMechanicsProblem({
        topic: 'dynamics',
        parameters: {},
        context: {},
        requestType: 'content'
    });

    console.log('✓ Workbook generated with diagrams!');
    console.log(`✓ Number of diagrams: ${result.diagrams?.renderedImages?.length || 0}\n`);

    // Wait for diagrams to complete rendering
    console.log('Waiting for all diagrams to render...');
    await result.getDiagrams();
    console.log('✓ All diagrams rendered\n');

    // Access diagram data
    if (result.diagrams && result.diagrams.renderedImages) {
        console.log('=== Diagram Details ===');
        for (const diagram of result.diagrams.renderedImages) {
            if (diagram.type === 'png') {
                console.log(`✓ Diagram: ${diagram.key}`);
                console.log(`  Size: ${diagram.width}x${diagram.height}px`);
                console.log(`  Buffer size: ${diagram.buffer?.length || 0} bytes`);
                console.log('');
            } else if (diagram.type === 'error') {
                console.log(`✗ Failed diagram: ${diagram.key}`);
                console.log(`  Error: ${diagram.error}\n`);
            }
        }
    }

    // Export all diagrams to files
    console.log('=== Exporting Diagrams ===');
    try {
        const exportResults = await workbook.exportAllDiagramsForTopic('./output/mechanics-diagrams');
        console.log('Export results:');
        exportResults.forEach(result => {
            if (result.success) {
                console.log(`✓ ${result.diagramKey} → ${result.filename}`);
            } else {
                console.log(`✗ ${result.diagramKey} - ${result.error}`);
            }
        });
        console.log('');
    } catch (error) {
        console.error('Export error:', error.message);
        console.log('');
    }

    // Get cache statistics
    console.log('=== Cache Statistics ===');
    const cacheStats = workbook.getDiagramCacheStats();
    console.log(`Cached diagrams: ${cacheStats.cachedDiagrams}`);
    console.log(`Cache keys: ${cacheStats.cacheKeys.join(', ')}`);
    console.log(`Diagrams ready: ${cacheStats.diagramsReady}`);
    console.log(`Status: ${cacheStats.status}\n`);

    // Get workbook status
    console.log('=== Workbook Status ===');
    const status = workbook.getWorkbookStatus();
    console.log(`Has problem: ${status.hasProblem}`);
    console.log(`Has content: ${status.hasContent}`);
    console.log(`Has workbook: ${status.hasWorkbook}`);
    console.log(`Has diagrams: ${status.hasDiagrams}`);
    console.log(`Diagram count: ${status.diagramCount}`);
    console.log(`Diagram status: ${status.diagramStatus}\n`);

    return result;
}

// Example: Export a specific dynamics diagram
async function exportSpecificDynamicsDiagram() {
    console.log('=== Exporting Specific Diagram ===\n');
    
    const workbook = new EnhancedMechanicsWorkbook({
        includeDiagrams: true
    });

    // Export free body diagram
    console.log('Exporting freeBodyDiagram...');
    const result = await workbook.exportDiagram(
        'freeBodyDiagram',
        './output/free_body_diagram.png',
        {
            width: 1200,
            height: 800,
            showLabels: true,
            showGrid: true,
            showAxes: true,
            backgroundColor: '#FFFFFF'
        }
    );

    if (result.success) {
        console.log(`✓ Successfully exported to: ${result.filename}\n`);
    } else {
        console.log(`✗ Export failed: ${result.error}\n`);
    }

    return result;
}

// Example: Test all dynamics diagrams individually
async function testAllDynamicsDiagrams() {
    console.log('=== Testing All Dynamics Diagrams ===\n');
    
    const workbook = new EnhancedMechanicsWorkbook({
        includeDiagrams: true,
        diagramWidth: 800,
        diagramHeight: 600
    });

    const dynamicsDiagrams = [
        'freeBodyDiagram',
        'vectorDiagram',
        'motionGraphs',
        'projectileMotion',
        'inclinedPlane'
    ];

    console.log(`Testing ${dynamicsDiagrams.length} dynamics diagrams...\n`);

    for (const diagramKey of dynamicsDiagrams) {
        console.log(`Testing: ${diagramKey}`);
        
        try {
            const buffer = await workbook.getDiagramBuffer(diagramKey, {
                width: 800,
                height: 600,
                showLabels: true,
                showGrid: true,
                showAxes: true
            });

            if (buffer) {
                console.log(`✓ ${diagramKey} rendered successfully (${buffer.length} bytes)`);
            } else {
                console.log(`✗ ${diagramKey} failed to render (null buffer)`);
            }
        } catch (error) {
            console.log(`✗ ${diagramKey} error: ${error.message}`);
        }
        console.log('');
    }
}

// Example: Get diagram buffer for embedding
async function getDiagramBufferExample() {
    console.log('=== Getting Diagram Buffer for Embedding ===\n');
    
    const workbook = new EnhancedMechanicsWorkbook({
        includeDiagrams: true
    });

    console.log('Getting inclinedPlane diagram buffer...');
    const buffer = await workbook.getDiagramBuffer('inclinedPlane', {
        width: 1000,
        height: 700,
        showLabels: true,
        showGrid: false,
        showAxes: true,
        backgroundColor: '#F5F5F5'
    });

    if (buffer) {
        console.log(`✓ Buffer obtained: ${buffer.length} bytes`);
        console.log('  This buffer can be embedded in documents, uploaded, etc.\n');
    } else {
        console.log('✗ Failed to get buffer\n');
    }

    return buffer;
}

// Example: Test diagram caching
async function testDiagramCaching() {
    console.log('=== Testing Diagram Caching ===\n');
    
    const workbook = new EnhancedMechanicsWorkbook({
        includeDiagrams: true
    });

    // First render
    console.log('First render of vectorDiagram...');
    const start1 = Date.now();
    await workbook.getDiagramBuffer('vectorDiagram');
    const time1 = Date.now() - start1;
    console.log(`✓ First render completed in ${time1}ms\n`);

    // Second render (should use cache)
    console.log('Second render of vectorDiagram (from cache)...');
    const start2 = Date.now();
    await workbook.getDiagramBuffer('vectorDiagram');
    const time2 = Date.now() - start2;
    console.log(`✓ Second render completed in ${time2}ms`);
    console.log(`  Cache speedup: ${(time1 / time2).toFixed(2)}x faster\n`);

    // Check cache stats
    const stats = workbook.getDiagramCacheStats();
    console.log('Cache statistics:');
    console.log(`  Cached diagrams: ${stats.cachedDiagrams}`);
    console.log(`  Keys: ${stats.cacheKeys.join(', ')}\n`);

    // Clear cache
    console.log('Clearing cache...');
    workbook.clearDiagramCache();
    const statsAfterClear = workbook.getDiagramCacheStats();
    console.log(`✓ Cache cleared. Cached diagrams: ${statsAfterClear.cachedDiagrams}\n`);
}

// Example: Complete workflow
async function completeWorkflow() {
    console.log('=== Complete Mechanics Diagram Workflow ===\n');
    
    const workbook = new EnhancedMechanicsWorkbook({
        theme: 'dynamics',
        includeDiagrams: true,
        diagramWidth: 1000,
        diagramHeight: 750,
        includeExperiments: true,
        includeCommonMisconceptions: true,
        metacognitiveSupport: true,
        contextualLearning: true,
        explanationLevel: 'intermediate'
    });

    // Step 1: Generate content
    console.log('Step 1: Generating dynamics content...');
    const result = await workbook.handleMechanicsProblem({
        topic: 'dynamics',
        parameters: { difficulty: 'intermediate' },
        context: { focus: 'forces' }
    });
    console.log('✓ Content generated\n');

    // Step 2: Wait for diagrams
    console.log('Step 2: Waiting for diagrams to render...');
    await result.getDiagrams();
    console.log(`✓ ${result.diagrams?.renderedImages?.length || 0} diagrams ready\n`);

    // Step 3: Export diagrams
    console.log('Step 3: Exporting diagrams...');
    const exportResults = await workbook.exportAllDiagramsForTopic('./output/dynamics-complete');
    const successCount = exportResults.filter(r => r.success).length;
    console.log(`✓ Exported ${successCount}/${exportResults.length} diagrams\n`);

    // Step 4: Display summary
    console.log('=== Workflow Summary ===');
    console.log(`Topic: ${result.content.topic}`);
    console.log(`Category: ${result.content.category}`);
    console.log(`Diagrams rendered: ${result.diagrams?.renderedImages?.length || 0}`);
    console.log(`Experiments linked: ${result.experiments?.length || 0}`);
    console.log(`Content completeness: ${workbook.calculateMechanicsContentCompleteness()}%`);
    console.log('');

    return result;
}

// Run examples based on command line argument
const testMode = process.argv[2] || 'full';

console.log('\n╔════════════════════════════════════════════════╗');
console.log('║   MECHANICS WORKBOOK DIAGRAM TEST SUITE      ║');
console.log('╚════════════════════════════════════════════════╝\n');

switch (testMode) {
    case 'full':
        console.log('Running full demonstration...\n');
        demonstrateMechanicsWorkbookWithDiagrams()
            .then(() => console.log('\n✓ Test completed successfully!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
        break;

    case 'specific':
        console.log('Testing specific diagram export...\n');
        exportSpecificDynamicsDiagram()
            .then(() => console.log('\n✓ Test completed successfully!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
        break;

    case 'all':
        console.log('Testing all dynamics diagrams...\n');
        testAllDynamicsDiagrams()
            .then(() => console.log('\n✓ Test completed successfully!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
        break;

    case 'buffer':
        console.log('Testing diagram buffer retrieval...\n');
        getDiagramBufferExample()
            .then(() => console.log('\n✓ Test completed successfully!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
        break;

    case 'cache':
        console.log('Testing diagram caching...\n');
        testDiagramCaching()
            .then(() => console.log('\n✓ Test completed successfully!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
        break;

    case 'workflow':
        console.log('Testing complete workflow...\n');
        completeWorkflow()
            .then(() => console.log('\n✓ Test completed successfully!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
        break;

    default:
        console.error(`Unknown test mode: ${testMode}`);
        console.log('\nAvailable modes:');
        console.log('  full      - Full demonstration (default)');
        console.log('  specific  - Export specific diagram');
        console.log('  all       - Test all dynamics diagrams');
        console.log('  buffer    - Test diagram buffer retrieval');
        console.log('  cache     - Test diagram caching');
        console.log('  workflow  - Complete workflow test');
        console.log('\nUsage: node test-mechanics-diagrams.js [mode]\n');
        process.exit(1);
}
