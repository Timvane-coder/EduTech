import { BiologyDiagramsRenderer } from './renderer.js';
import { BiologySvgDiagrams } from './svg-data.js';
import { BiologyDiagramsRegistry } from './registry.js';
import fs from 'fs';

async function testBiologyDiagrams() {
    console.log('🧬 Starting Biology Diagrams Test...\n');

    // Create renderer instance
    const renderer = new BiologyDiagramsRenderer();

    // Test diagrams configuration
    const testDiagrams = [
        {
            key: 'chloroplastStructure',
            filename: 'chloroplastStructure.png',
            width: 800,
            height: 600,
            options: {
                showLabels: true,
                showBloodFlow: true,
                chamber: 'wholeheart'
            }
        },
        {
            key: 'atpStructure',
            filename: 'atpStructure.png',
            width: 700,
            height: 700,
            options: {
                showLabels: true,
                type: 'generic'
            }
        },
        {
            key: 'cellularRespiration',
            filename: 'cellularRespiration.png',
            width: 800,
            height: 600,
            options: {
                showLabels: true,
                state: 'both'
            }
        }
    ];

    // Create output directory if it doesn't exist
    const outputDir = './test_outputs';
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
        console.log(`📁 Created output directory: ${outputDir}\n`);
    }

    // Test each diagram
    for (const diagram of testDiagrams) {
        try {
            console.log(`🔬 Testing diagram: ${diagram.key}`);
            
            // Verify diagram exists in registry
            const diagramInfo = BiologyDiagramsRegistry.getDiagram(diagram.key);
            if (!diagramInfo) {
                throw new Error(`Diagram '${diagram.key}' not found in registry`);
            }
            console.log(`  ✓ Found in registry: ${diagramInfo.name}`);
            console.log(`  ✓ Category: ${diagramInfo.category}`);
            
            // Verify SVG exists
            const svgExists = renderer.getSvgForDiagram(diagram.key);
            if (!svgExists) {
                throw new Error(`SVG not found for diagram '${diagram.key}'`);
            }
            console.log(`  ✓ SVG data found in BiologySvgDiagrams`);
            
            // Render and save
            const outputPath = `${outputDir}/${diagram.filename}`;
            await renderer.exportToFile(
                diagram.key,
                outputPath,
                diagram.width,
                diagram.height,
                diagram.options
            );
            
            // Verify file was created
            const stats = fs.statSync(outputPath);
            console.log(`  ✓ File saved: ${outputPath}`);
            console.log(`  ✓ File size: ${(stats.size / 1024).toFixed(2)} KB`);
            console.log(`  ✓ Dimensions: ${diagram.width}x${diagram.height}px\n`);
            
        } catch (error) {
            console.error(`  ✗ Error testing ${diagram.key}:`, error.message);
            console.error(`  Stack trace:`, error.stack);
            console.log('');
        }
    }

    // Print summary
    console.log('📊 Test Summary:');
    console.log('═══════════════════════════════════════');
    
    const files = fs.readdirSync(outputDir);
    console.log(`Total files created: ${files.length}`);
    
    files.forEach(file => {
        const filePath = `${outputDir}/${file}`;
        const stats = fs.statSync(filePath);
        console.log(`  • ${file} - ${(stats.size / 1024).toFixed(2)} KB`);
    });
    
    console.log('\n✨ Test completed!\n');
    
    // Display registry stats
    console.log('📚 Registry Statistics:');
    console.log('═══════════════════════════════════════');
    console.log(`Total diagrams available: ${BiologyDiagramsRegistry.getTotalDiagramCount()}`);
    
    const categories = BiologyDiagramsRegistry.getAllCategories();
    console.log(`Total categories: ${categories.length}`);
    
    console.log('\nDiagrams by category:');
    const stats = BiologyDiagramsRegistry.getDiagramStats();
    Object.entries(stats).forEach(([category, data]) => {
        console.log(`  • ${category}: ${data.count} diagrams`);
    });
}

// Run the test
testBiologyDiagrams().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
