import { PhysicsDiagramsRenderer } from './physicsrenderer.js';
import { PhysicsSvgDiagrams } from './physicsvgdiagrams.js';
import { PhysicsDiagramsRegistry } from './physicsregistry.js';
import fs from 'fs';

async function testMechanicsDiagrams() {
    console.log('⚛️  Starting Physics Mechanics Diagrams Test...\n');

    // Create renderer instance
    const renderer = new PhysicsDiagramsRenderer();

    // Test all mechanics diagrams with specific configurations
    const testDiagrams = [
        {
            key: 'freeBodyDiagram',
            filename: 'free_body_diagram.png',
            width: 800,
            height: 600,
            options: {
                showLabels: true,
                showMagnitudes: true,
                showAngles: false
            }
        },
        {
            key: 'vectorDiagram',
            filename: 'vector_diagram.png',
            width: 800,
            height: 600,
            options: {
                showComponents: true,
                showResultant: true,
                showGrid: true
            }
        },
        {
            key: 'motionGraphs',
            filename: 'motion_graphs.png',
            width: 900,
            height: 600,
            options: {
                showArea: true,
                showSlope: true,
                showGrid: true
            }
        },
        {
            key: 'projectileMotion',
            filename: 'projectile_motion.png',
            width: 900,
            height: 600,
            options: {
                showVelocityVectors: true,
                showComponents: true,
                showTrajectory: true,
                showRange: true
            }
        },
        {
            key: 'inclinedPlane',
            filename: 'inclined_plane.png',
            width: 800,
            height: 600,
            options: {
                showForceComponents: true,
                showAngles: true,
                showFriction: true
            }
        },
        {
            key: 'momentumCollision',
            filename: 'momentum_collision.png',
            width: 900,
            height: 600,
            options: {
                showBefore: true,
                showAfter: true,
                showMomentum: true,
                showEnergy: true
            }
        },
        {
            key: 'circularMotion',
            filename: 'circular_motion.png',
            width: 700,
            height: 700,
            options: {
                showCentripetalForce: true,
                showVelocity: true,
                showAcceleration: true
            }
        },
        {
            key: 'workEnergyChart',
            filename: 'work_energy_chart.png',
            width: 800,
            height: 600,
            options: {
                showValues: true,
                showTotal: true
            }
        },
        {
            key: 'springHarmonic',
            filename: 'spring_harmonic.png',
            width: 800,
            height: 600,
            options: {
                showDisplacement: true,
                showForce: true,
                showEnergy: true
            }
        },
        {
            key: 'torqueLever',
            filename: 'torque_lever.png',
            width: 900,
            height: 600,
            options: {
                showMomentArms: true,
                showForces: true,
                showRotation: true
            }
        }
    ];

    // Create output directory if it doesn't exist
    const outputDir = './physics_test_outputs/mechanics';
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
        console.log(`📁 Created output directory: ${outputDir}\n`);
    }

    // Track statistics
    let successCount = 0;
    let failCount = 0;
    const results = [];

    // Test each diagram
    for (const diagram of testDiagrams) {
        try {
            console.log(`🔧 Testing diagram: ${diagram.key}`);

            // Verify diagram exists in registry
            const diagramInfo = PhysicsDiagramsRegistry.getDiagram(diagram.key);
            if (!diagramInfo) {
                throw new Error(`Diagram '${diagram.key}' not found in registry`);
            }
            console.log(`  ✓ Found in registry: ${diagramInfo.name}`);
            console.log(`  ✓ Category: ${diagramInfo.category}`);
            console.log(`  ✓ Type: ${diagramInfo.type}`);

            // Verify SVG method exists
            const svgMethodExists = typeof PhysicsSvgDiagrams[`${diagram.key}Svg`] === 'function' ||
                                   renderer.getSvgForDiagram(diagram.key, diagramInfo, diagram.options);
            if (!svgMethodExists) {
                console.log(`  ⚠ SVG method not implemented yet (will use placeholder)`);
            } else {
                console.log(`  ✓ SVG generation method available`);
            }

            // Render and save
            const outputPath = `${outputDir}/${diagram.filename}`;
            const startTime = Date.now();
            
            await renderer.exportToFile(
                diagram.key,
                outputPath,
                diagram.width,
                diagram.height,
                diagram.options
            );

            const renderTime = Date.now() - startTime;

            // Verify file was created
            const stats = fs.statSync(outputPath);
            console.log(`  ✓ File saved: ${diagram.filename}`);
            console.log(`  ✓ File size: ${(stats.size / 1024).toFixed(2)} KB`);
            console.log(`  ✓ Dimensions: ${diagram.width}x${diagram.height}px`);
            console.log(`  ✓ Render time: ${renderTime}ms\n`);

            successCount++;
            results.push({
                key: diagram.key,
                status: 'success',
                filename: diagram.filename,
                size: stats.size,
                renderTime: renderTime
            });

        } catch (error) {
            console.error(`  ✗ Error testing ${diagram.key}:`, error.message);
            console.error(`  Stack trace:`, error.stack);
            console.log('');
            
            failCount++;
            results.push({
                key: diagram.key,
                status: 'failed',
                error: error.message
            });
        }
    }

    // Print detailed summary
    console.log('\n╔════════════════════════════════════════════════════════════╗');
    console.log('║           MECHANICS DIAGRAMS TEST SUMMARY                 ║');
    console.log('╚════════════════════════════════════════════════════════════╝\n');

    console.log(`📊 Overall Results:`);
    console.log(`   Total diagrams tested: ${testDiagrams.length}`);
    console.log(`   ✅ Successful: ${successCount}`);
    console.log(`   ❌ Failed: ${failCount}`);
    console.log(`   Success rate: ${((successCount / testDiagrams.length) * 100).toFixed(1)}%\n`);

    // List generated files
    if (successCount > 0) {
        console.log(`📁 Generated Files:`);
        console.log(`   Location: ${outputDir}`);
        
        const files = fs.readdirSync(outputDir);
        let totalSize = 0;
        
        files.forEach(file => {
            const filePath = `${outputDir}/${file}`;
            const stats = fs.statSync(filePath);
            totalSize += stats.size;
            console.log(`   • ${file.padEnd(35)} ${(stats.size / 1024).toFixed(2).padStart(8)} KB`);
        });
        
        console.log(`   ${'─'.repeat(47)}`);
        console.log(`   Total size: ${(totalSize / 1024).toFixed(2)} KB\n`);
    }

    // Show failed diagrams if any
    if (failCount > 0) {
        console.log(`❌ Failed Diagrams:`);
        results.filter(r => r.status === 'failed').forEach(r => {
            console.log(`   • ${r.key}: ${r.error}`);
        });
        console.log('');
    }

    // Performance metrics
    const successfulResults = results.filter(r => r.status === 'success' && r.renderTime);
    if (successfulResults.length > 0) {
        const avgRenderTime = successfulResults.reduce((sum, r) => sum + r.renderTime, 0) / successfulResults.length;
        const minRenderTime = Math.min(...successfulResults.map(r => r.renderTime));
        const maxRenderTime = Math.max(...successfulResults.map(r => r.renderTime));
        
        console.log(`⚡ Performance Metrics:`);
        console.log(`   Average render time: ${avgRenderTime.toFixed(2)}ms`);
        console.log(`   Fastest render: ${minRenderTime}ms`);
        console.log(`   Slowest render: ${maxRenderTime}ms\n`);
    }

    // Display registry stats for Mechanics category
    console.log('📚 Mechanics Category Statistics:');
    console.log('═══════════════════════════════════════════════════════════');
    
    const mechanicsDiagrams = PhysicsDiagramsRegistry.getDiagramsByCategory('Mechanics');
    console.log(`Total mechanics diagrams in registry: ${Object.keys(mechanicsDiagrams).length}`);
    console.log(`Tested in this run: ${testDiagrams.length}`);
    
    console.log('\nAll available mechanics diagrams:');
    Object.entries(mechanicsDiagrams).forEach(([key, diagram]) => {
        const tested = testDiagrams.find(t => t.key === key);
        const status = tested ? (results.find(r => r.key === key)?.status === 'success' ? '✅' : '❌') : '⏭️';
        console.log(`  ${status} ${key.padEnd(30)} - ${diagram.name}`);
    });

    console.log('\n✨ Mechanics diagrams test completed!\n');

    // Print helpful next steps
    console.log('📝 Next Steps:');
    console.log('   1. Review generated PNG files in:', outputDir);
    console.log('   2. Verify visual accuracy of each diagram');
    console.log('   3. Check that all force vectors, labels, and components are correct');
    console.log('   4. Test with different options to verify flexibility\n');

    return {
        success: successCount,
        failed: failCount,
        total: testDiagrams.length,
        results: results
    };
}

// Additional test function for specific diagram with various options
async function testDiagramVariations() {
    console.log('🔬 Testing Diagram Variations...\n');
    
    const renderer = new PhysicsDiagramsRenderer();
    const outputDir = './physics_test_outputs/variations';
    
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Test free body diagram with different options
    const variations = [
        {
            filename: 'fbd_no_magnitudes.png',
            options: { showLabels: true, showMagnitudes: false, showAngles: false }
        },
        {
            filename: 'fbd_with_angles.png',
            options: { showLabels: true, showMagnitudes: true, showAngles: true }
        },
        {
            filename: 'fbd_minimal.png',
            options: { showLabels: false, showMagnitudes: false, showAngles: false }
        }
    ];

    for (const variation of variations) {
        try {
            const outputPath = `${outputDir}/${variation.filename}`;
            await renderer.exportToFile('freeBodyDiagram', outputPath, 800, 600, variation.options);
            console.log(`✓ Created variation: ${variation.filename}`);
        } catch (error) {
            console.error(`✗ Failed to create ${variation.filename}:`, error.message);
        }
    }

    console.log('\n✨ Variation testing completed!\n');
}

// Run the tests
async function runAllTests() {
    try {
        const summary = await testMechanicsDiagrams();
        
        // Optionally run variation tests
        console.log('═══════════════════════════════════════════════════════════\n');
        await testDiagramVariations();
        
        // Exit with appropriate code
        process.exit(summary.failed > 0 ? 1 : 0);
        
    } catch (error) {
        console.error('\n💥 Fatal error during testing:', error);
        console.error(error.stack);
        process.exit(1);
    }
}

// Run all tests
runAllTests();
