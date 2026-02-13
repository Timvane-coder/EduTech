// Example usage
import { EnhancedMolecularBiologyWorkbook } from './molecularbiology.js';

async function demonstrateWorkbookWithDiagrams() {
    // Create workbook instance with diagrams enabled
    const workbook = new EnhancedMolecularBiologyWorkbook({
        theme: 'molecular',
        includeDiagrams: true,
        diagramWidth: 800,
        diagramHeight: 600,
        includeExperiments: true,
        metacognitiveSupport: true,
        contextualLearning: true
    });

    // Handle a molecular biology topic
    const result = await workbook.handleMolecularProblem({
        topic: 'nucleic_acids',
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
    const workbook = new EnhancedMolecularBiologyWorkbook();
    
    const result = await workbook.exportDiagram(
        'dnaStructure',
        './dna_structure.png',
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
