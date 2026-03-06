// demonstrate-geometric-measurement-diagrams.js
import { EnhancedGeometricMeasurementWorkbook } from './measurement.js';

async function demonstrateWorkbookWithDiagrams() {
    // Create workbook instance with diagrams enabled
    const workbook = new EnhancedGeometricMeasurementWorkbook({
        theme: 'geometric',
        includeDiagrams: true,
        diagramWidth: 800,
        diagramHeight: 600,
        includePracticals: true,
        metacognitiveSupport: true,
        contextualLearning: true
    });

    // Handle a trigonometric ratios topic
    const result = await workbook.handleGeometricProblem({
        topic: 'trigonometry_ratios',
        parameters: {},
        context: {}
    });

    console.log('Workbook generated with diagrams!');
    console.log(`Number of diagrams: ${result.diagrams?.renderedImages?.length || 0}`);

    // Access diagram data
    if (result.diagrams && result.diagrams.renderedImages) {
        for (const diagram of result.diagrams.renderedImages) {
            if (diagram.type === 'image') {
                console.log(`Diagram: ${diagram.key} (${diagram.width}x${diagram.height})`);
                // diagram.buffer contains the PNG data
            } else if (diagram.type === 'error') {
                console.log(`Failed diagram: ${diagram.key} - ${diagram.error}`);
            }
        }
    }

    // Export all diagrams to files
    const exportResults = await workbook.exportAllDiagramsForTopic('./output/diagrams');
    console.log('Export results:', exportResults);

    // Get cache statistics
    console.log('Cache stats:', workbook.getDiagramCacheStats());

    return result;
}

// Example: Export a specific diagram
async function exportSpecificDiagram() {
    const workbook = new EnhancedGeometricMeasurementWorkbook();

    const result = await workbook.exportDiagram(
        'rightTriangleTrigRatios',
        './right_triangle_trig_ratios.png',
        {
            width: 1200,
            height: 800,
            showLabels: true,
            backgroundColor: '#FFFFFF'
        }
    );

    console.log('Export result:', result);
}

// Run examples
demonstrateWorkbookWithDiagrams().catch(console.error);
