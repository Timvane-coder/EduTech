import { MathematicsDiagramsRenderer } from './mathsrender.js';
import { MathematicsSvgDiagrams } from './mathsvg.js';
import { MathematicsDiagramsRegistry } from './mathregistry.js';
import fs from 'fs';

async function testMathematicsDiagrams() {
    console.log('📐 Starting Mathematics Diagrams Test...\n');

    // Create renderer instance
    const renderer = new MathematicsDiagramsRenderer();

    // Test diagrams configuration - one from each major category
    const testDiagrams = [
        {
            key: 'functionMachine',
            filename: 'functionMachine.png',
            width: 900,
            height: 200,
            options: {
                showLabels: true,
                showIntegers: true,
                showZero: true
            }
        },
        {
            key: 'mappingDiagram',
            filename: 'mappingDiagram.png',
            width: 700,
            height: 600,
            options: {
                showLabels: true,
                showBranches: true,
                showPrimes: true
            }
        },
        {
            key: 'domainRangeGraph',
            filename: 'domainRangeGraph.png',
            width: 800,
            height: 600,
            options: {
                showLabels: true,
                showBalance: true,
                showSteps: true
            }
        },
        {
            key: 'functionTypes',
            filename: 'functionTypes.png',
            width: 800,
            height: 600,
            options: {
                showLabels: true,
                showGrid: true,
                showVertex: true,
                showRoots: true
            }
        },
        {
            key: 'functionTransformations',
            filename: 'functionTransformations.png',
            width: 800,
            height: 500,
            options: {
                showLabels: true,
                showMachine: true,
                showInputs: true,
                showOutputs: true
            }
        },
        {
            key: 'inverseFunctionGraph',
            filename: 'inverseFunctionGraph.png',
            width: 800,
            height: 800,
            options: {
                showLabels: true,
                showTriangle: true,
                showSquares: true,
                showAreas: true
            }
        },
        {
            key: 'piecewiseFunctionGraph',
            filename: 'piecewiseFunctionGraph.png',
            width: 700,
            height: 700,
            options: {
                showLabels: true,
                showCircle: true,
                showAngles: true,
                showProof: true
            }
        },
        {
            key: 'compositeFunction',
            filename: 'compositeFunction.png',
            width: 800,
            height: 600,
            options: {
                showLabels: true,
                showTriangle: true,
                showRatios: true,
                showSOHCAHTOA: true
            }
        },
        {
            key: 'unitCircle',
            filename: 'unit_circle_test.png',
            width: 800,
            height: 800,
            options: {
                showLabels: true,
                showCircle: true,
                showAngles: true,
                showSpecialAngles: true
            }
        },
        {
            key: 'vectorAddition',
            filename: 'vector_addition_test.png',
            width: 900,
            height: 700,
            options: {
                showLabels: true,
                showVectors: true,
                showTriangleMethod: true,
                showResultant: true
            }
        },
        {
            key: 'matrixMultiplication',
            filename: 'matrix_multiplication_test.png',
            width: 1000,
            height: 600,
            options: {
                showLabels: true,
                showMatrices: true,
                showProcess: true,
                showResult: true
            }
        },
        {
            key: 'arithmeticSequence',
            filename: 'arithmetic_sequence_test.png',
            width: 900,
            height: 600,
            options: {
                showLabels: true,
                showSequence: true,
                showFormula: true,
                showGraph: true
            }
        },
        {
            key: 'pascalTriangle',
            filename: 'pascal_triangle_test.png',
            width: 900,
            height: 700,
            options: {
                showLabels: true,
                showTriangle: true,
                showPatterns: true
            }
        },
        {
            key: 'vennDiagram2Sets',
            filename: 'venn_diagram_test.png',
            width: 800,
            height: 600,
            options: {
                showLabels: true,
                showSets: true,
                showIntersection: true,
                showElements: true
            }
        },
        {
            key: 'histogram',
            filename: 'histogram_test.png',
            width: 900,
            height: 600,
            options: {
                showLabels: true,
                showBars: true,
                showAxes: true,
                showFrequency: true
            }
        },
        {
            key: 'probabilityTreeDiagram',
            filename: 'probability_tree_test.png',
            width: 1000,
            height: 700,
            options: {
                showLabels: true,
                showTree: true,
                showProbabilities: true,
                showOutcomes: true
            }
        },
        {
            key: 'sieveOfEratosthenes',
            filename: 'sieve_eratosthenes_test.png',
            width: 900,
            height: 800,
            options: {
                showLabels: true,
                showProcess: true,
                showGrid: true,
                showSteps: true
            }
        },
        {
            key: 'algebraTilesModel',
            filename: 'algebra_tiles_test.png',
            width: 800,
            height: 600,
            options: {
                showLabels: true,
                showProcess: true,
                showXTiles: true,
                showUnitTiles: true
            }
        }
    ];

    // Create output directory if it doesn't exist
    const outputDir = './test_outputs_mathematics';
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
        console.log(`📁 Created output directory: ${outputDir}\n`);
    }

    // Test each diagram
    let successCount = 0;
    let failCount = 0;

    for (const diagram of testDiagrams) {
        try {
            console.log(`📊 Testing diagram: ${diagram.key}`);

            // Verify diagram exists in registry
            const diagramInfo = MathematicsDiagramsRegistry.getDiagram(diagram.key);
            if (!diagramInfo) {
                throw new Error(`Diagram '${diagram.key}' not found in registry`);
            }
            console.log(`  ✓ Found in registry: ${diagramInfo.name}`);
            console.log(`  ✓ Category: ${diagramInfo.category}`);
            console.log(`  ✓ Type: ${diagramInfo.type}`);

            // Check if it's an apparatus diagram
            if (diagramInfo.type === 'apparatus_diagram') {
                console.log(`  ✓ Apparatus type: ${diagramInfo.apparatusType}`);
                const goldenQ = MathematicsDiagramsRegistry.getGoldenQuestions(diagram.key);
                if (goldenQ) {
                    console.log(`  ✓ Golden Questions available`);
                }
            }

            // Verify SVG exists
            const svgExists = renderer.getSvgForDiagram(diagram.key);
            if (!svgExists) {
                throw new Error(`SVG not found for diagram '${diagram.key}'`);
            }
            console.log(`  ✓ SVG data found in MathematicsSvgDiagrams`);

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

            successCount++;

        } catch (error) {
            console.error(`  ✗ Error testing ${diagram.key}:`, error.message);
            console.error(`  Stack trace:`, error.stack);
            console.log('');
            failCount++;
        }
    }

    // Print summary
    console.log('═'.repeat(60));
    console.log('📊 Test Summary:');
    console.log('═'.repeat(60));
    console.log(`Total diagrams tested: ${testDiagrams.length}`);
    console.log(`✓ Successful: ${successCount}`);
    console.log(`✗ Failed: ${failCount}`);
    console.log('');

    const files = fs.readdirSync(outputDir);
    console.log(`Total files created: ${files.length}`);
    console.log('');
    
    files.forEach(file => {
        const filePath = `${outputDir}/${file}`;
        const stats = fs.statSync(filePath);
        console.log(`  • ${file} - ${(stats.size / 1024).toFixed(2)} KB`);
    });

    console.log('\n✨ Test completed!\n');

    // Display registry stats
    console.log('═'.repeat(60));
    console.log('📚 Registry Statistics:');
    console.log('═'.repeat(60));
    console.log(`Total diagrams available: ${MathematicsDiagramsRegistry.getTotalCount()}`);
    console.log(`  • Solve-as-you-draw diagrams: ${MathematicsDiagramsRegistry.getSolveCount()}`);
    console.log(`  • Process/Apparatus diagrams: ${MathematicsDiagramsRegistry.getApparatusCount()}`);
    
    const categories = MathematicsDiagramsRegistry.getAllCategories();
    console.log(`Total categories: ${categories.length}`);
    
    console.log('\nDiagrams by category:');
    const stats = MathematicsDiagramsRegistry.getCategorySummary();
    Object.entries(stats).forEach(([category, data]) => {
        console.log(`\n  ${category}:`);
        console.log(`    Total: ${data.totalDiagrams}`);
        console.log(`    Solve: ${data.solveDiagrams}`);
        console.log(`    Process: ${data.apparatusDiagrams}`);
        console.log(`    Description: ${data.description}`);
    });

    console.log('\n' + '═'.repeat(60));
    console.log('🎓 Pedagogy Features:');
    console.log('═'.repeat(60));
    
    // Show example of pedagogy information
    const exampleKey = 'sieveOfEratosthenes';
    const pedagogy = MathematicsDiagramsRegistry.getDiagramPedagogy(exampleKey);
    if (pedagogy) {
        console.log(`\nExample: ${pedagogy.name}`);
        console.log(`  Type: ${pedagogy.type}`);
        console.log(`  Approach: ${pedagogy.approach}`);
        if (pedagogy.goldenQuestions) {
            console.log(`  Golden Questions:`);
            console.log(`    - What's changing? ${pedagogy.goldenQuestions.changing}`);
            console.log(`    - What stays constant? ${pedagogy.goldenQuestions.constant}`);
            console.log(`    - What's the rule/pattern? ${pedagogy.goldenQuestions.rule}`);
        }
        if (pedagogy.analogies && pedagogy.analogies.length > 0) {
            console.log(`  Analogies:`);
            pedagogy.analogies.forEach(analogy => {
                console.log(`    - ${analogy}`);
            });
        }
    }

    console.log('\n' + '═'.repeat(60));
    console.log('🔍 Search & Discovery:');
    console.log('═'.repeat(60));
    
    // Test search functionality
    const searchTerm = 'circle';
    const searchResults = MathematicsDiagramsRegistry.searchDiagrams(searchTerm);
    console.log(`\nSearch results for "${searchTerm}":`);
    Object.keys(searchResults).slice(0, 5).forEach(key => {
        const diagram = searchResults[key];
        console.log(`  • ${diagram.name} (${diagram.category})`);
    });

    // Show random diagram suggestion
    const random = MathematicsDiagramsRegistry.getRandomDiagram();
    console.log(`\nRandom diagram suggestion: ${random.diagram.name}`);
    console.log(`  Category: ${random.diagram.category}`);
    console.log(`  Description: ${random.diagram.description}`);

    console.log('\n' + '═'.repeat(60));
    
    // Final message
    if (failCount === 0) {
        console.log('🎉 All tests passed successfully!');
    } else {
        console.log(`⚠️  ${failCount} test(s) failed. Please check the errors above.`);
    }
    console.log('═'.repeat(60) + '\n');
}

// Run the test
testMathematicsDiagrams().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
