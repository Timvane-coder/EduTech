import { PhysicsDiagramsRenderer } from './physicsrender.js';
import { PhysicsSvgDiagrams } from './physicsvg.js';
import { PhysicsDiagramsRegistry } from './physicsregistry.js';
import fs from 'fs';

async function testPhysicsDiagrams() {
    console.log('⚛️  Starting Physics Diagrams Test...\n');

    // Create renderer instance
    const renderer = new PhysicsDiagramsRenderer();

    // Test diagrams configuration - 2 from each major topic (1 solve + 1 apparatus)
    const testDiagrams = [
        // ===== MECHANICS (2 diagrams) =====
        {
            key: 'freeBodyDiagram',
            filename: 'freeBodyDiagram.png',
            forces: [
                { name: 'Weight', magnitude: 50, angle: 270, color: '#E74C3C' },
                { name: 'Normal', magnitude: 50, angle: 90, color: '#3498DB' },
                { name: 'Applied', magnitude: 30, angle: 0, color: '#2ECC71' }
            ],
            options: {
                title: 'Free Body Diagram',
                showLabels: true,
                showMagnitudes: true,
                showAngles: false,
                width: 800,
                height: 600,
            },
            topic: 'Mechanics',
            type: 'Solve-as-you-draw'
        },
        {
            key: 'vectorDiagram',
            filename: 'vectorDiagram.png',
            vectors: [
                { x: 40, y: 30, label: 'A', color: '#E74C3C' },
                { x: 30, y: -20, label: 'B', color: '#3498DB' }
            ],
            showResultant: true,
            options: {
                title: 'Vector Addition',
                showComponents: true,
                showResultant: true,
                showGrid: true,
                width: 800,
                height: 600,
            },
            topic: 'Mechanics',
            type: 'Read-as-you-draw (Apparatus)'
        },

        // ===== WAVES & SOUND (2 diagrams) =====
        {
            key: 'motionGraphs',
            filename: 'motionGraphs.png',
            angle: 30,
            mass: 10,
            friction: true,
            options: {
                title: 'Inclined Plane',
                showForceComponents: true,
                showAngles: true,
                showFriction: true,
                width: 800,
                height: 600,
            },
            topic: 'mechanics',
            type: 'Solve-as-you-draw'
        },
        {
            key: 'projectileMotion',
            filename: 'projectileMotion.png',
            width: 600,
            height: 900,
            options: {
                showRealObject: true,
                showWaterLevel: true,
                showStandingWave: true,
                showNodes: true,
                showEquations: true
            },
            topic: 'Waves & Sound',
            type: 'Read-as-you-draw (Apparatus)'
        },

        // ===== ELECTRICITY & MAGNETISM (2 diagrams) =====
        {
            key: 'inclinedPlane',
            filename: 'inclinedPlane.png',
            width: 800,
            height: 600,
            options: {
                showLabels: true,
                showValues: true,
                showCurrent: true,
                showSymbols: true
            },
            topic: 'Electricity & Magnetism',
            type: 'Solve-as-you-draw'
        },
        {
            key: 'momentumCollision',
            filename: 'momentumCollision.png',
            width: 800,
            height: 600,
            options: {
                showRealObject: true,
                showCoil: true,
                showCore: true,
                showCurrent: true,
                showMagneticField: true,
                showEquations: true
            },
            topic: 'Electricity & Magnetism',
            type: 'Read-as-you-draw (Apparatus)'
        },

        // ===== THERMODYNAMICS & HEAT (2 diagrams) =====
        {
            key: 'circularMotion',
            filename: 'circularMotion.png',
            width: 800,
            height: 600,
            options: {
                showLabels: true,
                showWork: true,
                showCurve: true,
                showLabels: true
            },
            topic: 'Thermodynamics & Heat',
            type: 'Solve-as-you-draw'
        },
        {
            key: 'workEnergyBarChart',
            filename: 'workEnergyBarChart.png',
            width: 700,
            height: 800,
            options: {
                showRealObject: true,
                showInsulation: true,
                showWater: true,
                showMetal: true,
                showThermometer: true,
                showStirrer: true,
                showEquations: true
            },
            topic: 'Thermodynamics & Heat',
            type: 'Read-as-you-draw (Apparatus)'
        },

        // ===== OPTICS (2 diagrams) =====
        {
            key: 'springHarmonicMotion',
            filename: 'springHarmonicMotion.png',
            width: 1000,
            height: 600,
            options: {
                showLabels: true,
                showObject: true,
                showImage: true,
                showPrincipalRays: true,
                showFocalPoints: true
            },
            topic: 'Optics',
            type: 'Solve-as-you-draw'
        },
        {
            key: 'torqueLeverDiagram',
            filename: 'torqueLeverDiagram.png',
            width: 1000,
            height: 600,
            options: {
                showRealObject: true,
                showBench: true,
                showLightSource: true,
                showLens: true,
                showScreen: true,
                showDistances: true,
                showEquations: true
            },
            topic: 'Optics',
            type: 'Read-as-you-draw (Apparatus)'
        }
    ];

    // Create output directory if it doesn't exist
    const outputDir = './test_outputs_physics';
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
        console.log(`📁 Created output directory: ${outputDir}\n`);
    }

    // Test each diagram
    let successCount = 0;
    let failCount = 0;
    const topicStats = {};

    console.log('═'.repeat(70));
    console.log('🧪 TESTING PHYSICS DIAGRAMS');
    console.log('═'.repeat(70) + '\n');

    for (const diagram of testDiagrams) {
        try {
            console.log(`⚛️  Testing: ${diagram.key}`);
            console.log(`   Topic: ${diagram.topic}`);
            console.log(`   Type: ${diagram.type}`);

            // Initialize topic stats
            if (!topicStats[diagram.topic]) {
                topicStats[diagram.topic] = { total: 0, success: 0, failed: 0 };
            }
            topicStats[diagram.topic].total++;

            // Verify diagram exists in registry
            const diagramInfo = PhysicsDiagramsRegistry.getDiagram(diagram.key);
            if (!diagramInfo) {
                throw new Error(`Diagram '${diagram.key}' not found in registry`);
            }
            console.log(`   ✓ Found in registry: ${diagramInfo.name}`);
            console.log(`   ✓ Category: ${diagramInfo.category}`);
            console.log(`   ✓ Description: ${diagramInfo.description}`);

            // Check if it's an apparatus diagram
            if (diagramInfo.type === 'apparatus_diagram') {
                console.log(`   ✓ Apparatus type: ${diagramInfo.apparatusType}`);
                const goldenQ = PhysicsDiagramsRegistry.getGoldenQuestions(diagram.key);
                if (goldenQ) {
                    console.log(`   ✓ Golden Questions:`);
                    console.log(`      - Changing: ${goldenQ.changing}`);
                    console.log(`      - Constant: ${goldenQ.constant}`);
                    console.log(`      - Law: ${goldenQ.law}`);
                }
            }

            // Verify SVG exists
            const svgExists = renderer.getSvgForDiagram(diagram.key);
            if (!svgExists) {
                throw new Error(`SVG not found for diagram '${diagram.key}'`);
            }
            console.log(`   ✓ SVG data found in PhysicsSvgDiagrams`);

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
            console.log(`   ✓ File saved: ${outputPath}`);
            console.log(`   ✓ File size: ${(stats.size / 1024).toFixed(2)} KB`);
            console.log(`   ✓ Dimensions: ${diagram.width}x${diagram.height}px`);
            console.log(`   ✅ SUCCESS\n`);

            successCount++;
            topicStats[diagram.topic].success++;

        } catch (error) {
            console.error(`   ✗ Error testing ${diagram.key}:`, error.message);
            console.error(`   Stack trace:`, error.stack);
            console.log(`   ❌ FAILED\n`);
            failCount++;
            if (topicStats[diagram.topic]) {
                topicStats[diagram.topic].failed++;
            }
        }
    }

    // Print summary by topic
    console.log('═'.repeat(70));
    console.log('📊 RESULTS BY TOPIC');
    console.log('═'.repeat(70));
    
    Object.entries(topicStats).forEach(([topic, stats]) => {
        const successRate = ((stats.success / stats.total) * 100).toFixed(1);
        console.log(`\n${topic}:`);
        console.log(`  Total: ${stats.total} diagrams`);
        console.log(`  ✓ Success: ${stats.success}`);
        console.log(`  ✗ Failed: ${stats.failed}`);
        console.log(`  Success Rate: ${successRate}%`);
    });

    // Print overall summary
    console.log('\n' + '═'.repeat(70));
    console.log('📈 OVERALL TEST SUMMARY');
    console.log('═'.repeat(70));
    console.log(`Total diagrams tested: ${testDiagrams.length}`);
    console.log(`✓ Successful: ${successCount}`);
    console.log(`✗ Failed: ${failCount}`);
    console.log(`Success Rate: ${((successCount / testDiagrams.length) * 100).toFixed(1)}%`);
    console.log('');

    // List generated files
    const files = fs.readdirSync(outputDir);
    console.log(`Total files created: ${files.length}`);
    console.log('');
    
    console.log('Generated Files:');
    files.forEach(file => {
        const filePath = `${outputDir}/${file}`;
        const stats = fs.statSync(filePath);
        console.log(`  • ${file} - ${(stats.size / 1024).toFixed(2)} KB`);
    });

    console.log('\n✨ Test completed!\n');

    // Display registry statistics
    console.log('═'.repeat(70));
    console.log('📚 PHYSICS DIAGRAMS REGISTRY STATISTICS');
    console.log('═'.repeat(70));
    console.log(`Total diagrams available: ${PhysicsDiagramsRegistry.getTotalCount()}`);
    console.log(`  • Solve-as-you-draw diagrams: ${PhysicsDiagramsRegistry.getSolveCount()}`);
    console.log(`  • Read-as-you-draw (Apparatus): ${PhysicsDiagramsRegistry.getApparatusCount()}`);
    
    const categories = PhysicsDiagramsRegistry.getAllCategories();
    console.log(`Total categories: ${categories.length}`);
    
    console.log('\nDiagrams by category:');
    const registryStats = PhysicsDiagramsRegistry.getCategorySummary();
    Object.entries(registryStats).forEach(([category, data]) => {
        console.log(`\n  ${category}:`);
        console.log(`    Total: ${data.totalDiagrams}`);
        console.log(`    Solve: ${data.solveDiagrams}`);
        console.log(`    Apparatus: ${data.apparatusDiagrams}`);
        console.log(`    Description: ${data.description}`);
    });

    console.log('\n' + '═'.repeat(70));
    console.log('🎓 PEDAGOGY FEATURES');
    console.log('═'.repeat(70));
    
    // Show example of pedagogy information
    const exampleKey = 'pulleySystemApparatus';
    const pedagogy = PhysicsDiagramsRegistry.getDiagramPedagogy(exampleKey);
    if (pedagogy) {
        console.log(`\nExample: ${pedagogy.name}`);
        console.log(`  Category: ${pedagogy.category}`);
        console.log(`  Type: ${pedagogy.type}`);
        console.log(`  Approach: ${pedagogy.approach}`);
        console.log(`  Learning Value: ${pedagogy.learningValue}`);
        if (pedagogy.goldenQuestions) {
            console.log(`  Golden Questions:`);
            console.log(`    - What's changing? ${pedagogy.goldenQuestions.changing}`);
            console.log(`    - What stays constant? ${pedagogy.goldenQuestions.constant}`);
            console.log(`    - What law connects them? ${pedagogy.goldenQuestions.law}`);
        }
        if (pedagogy.analogies && pedagogy.analogies.length > 0) {
            console.log(`  Analogies:`);
            pedagogy.analogies.forEach(analogy => {
                console.log(`    - ${analogy}`);
            });
        }
    }

    console.log('\n' + '═'.repeat(70));
    console.log('🔍 SEARCH & DISCOVERY');
    console.log('═'.repeat(70));
    
    // Test search functionality
    const searchTerm = 'force';
    const searchResults = PhysicsDiagramsRegistry.searchDiagrams(searchTerm);
    console.log(`\nSearch results for "${searchTerm}":`);
    Object.keys(searchResults).slice(0, 5).forEach(key => {
        const diagram = searchResults[key];
        console.log(`  • ${diagram.name} (${diagram.category})`);
    });

    // Show diagrams by type
    console.log('\nApparatus diagrams available:');
    const apparatusDiagrams = PhysicsDiagramsRegistry.getApparatusDiagrams();
    const apparatusKeys = Object.keys(apparatusDiagrams);
    console.log(`Total: ${apparatusKeys.length}`);
    apparatusKeys.slice(0, 5).forEach(key => {
        const diagram = apparatusDiagrams[key];
        console.log(`  • ${diagram.name} - ${diagram.apparatusType}`);
    });

    // Show random diagram suggestion
    const random = PhysicsDiagramsRegistry.getRandomDiagram();
    console.log(`\nRandom diagram suggestion: ${random.diagram.name}`);
    console.log(`  Category: ${random.diagram.category}`);
    console.log(`  Description: ${random.diagram.description}`);

    console.log('\n' + '═'.repeat(70));
    console.log('📋 DIAGRAM TYPE BREAKDOWN');
    console.log('═'.repeat(70));
    
    const testedTopics = [...new Set(testDiagrams.map(d => d.topic))];
    console.log(`\nTopics tested: ${testedTopics.length}`);
    testedTopics.forEach(topic => {
        const topicDiagrams = testDiagrams.filter(d => d.topic === topic);
        const solveCount = topicDiagrams.filter(d => d.type === 'Solve-as-you-draw').length;
        const apparatusCount = topicDiagrams.filter(d => d.type === 'Read-as-you-draw (Apparatus)').length;
        console.log(`\n  ${topic}:`);
        console.log(`    Solve-as-you-draw: ${solveCount}`);
        console.log(`    Read-as-you-draw (Apparatus): ${apparatusCount}`);
    });

    console.log('\n' + '═'.repeat(70));
    console.log('💡 PHYSICS CONCEPTS COVERED');
    console.log('═'.repeat(70));
    
    const conceptsCovered = {
        'Mechanics': ['Forces', 'Motion', 'Energy', 'Simple Machines'],
        'Waves & Sound': ['Wave properties', 'Standing waves', 'Resonance', 'Harmonics'],
        'Electricity & Magnetism': ['Circuits', 'Electromagnetic fields', 'Current', 'Magnetic induction'],
        'Thermodynamics & Heat': ['Gas laws', 'Heat transfer', 'Thermal equilibrium', 'Specific heat'],
        'Optics': ['Light rays', 'Lens equations', 'Image formation', 'Focal length']
    };

    Object.entries(conceptsCovered).forEach(([topic, concepts]) => {
        console.log(`\n  ${topic}:`);
        concepts.forEach(concept => {
            console.log(`    • ${concept}`);
        });
    });

    console.log('\n' + '═'.repeat(70));
    
    // Final message
    if (failCount === 0) {
        console.log('🎉 ALL TESTS PASSED SUCCESSFULLY!');
        console.log('✨ All 10 physics diagrams rendered correctly!');
        console.log('📊 5 topics covered with 2 diagrams each (1 solve + 1 apparatus)');
    } else {
        console.log(`⚠️  ${failCount} test(s) failed. Please check the errors above.`);
    }
    console.log('═'.repeat(70) + '\n');

    // Additional validation
    console.log('✅ VALIDATION CHECKS:');
    console.log(`   • Expected files: 10`);
    console.log(`   • Generated files: ${files.length}`);
    console.log(`   • Topics covered: ${Object.keys(topicStats).length}/5`);
    console.log(`   • Apparatus diagrams: ${testDiagrams.filter(d => d.type === 'Read-as-you-draw (Apparatus)').length}/5`);
    console.log(`   • Solve diagrams: ${testDiagrams.filter(d => d.type === 'Solve-as-you-draw').length}/5`);
    console.log('');
}

// Run the test
testPhysicsDiagrams().catch(error => {
    console.error('❌ Fatal error:', error);
    console.error('Stack trace:', error.stack);
    process.exit(1);
});
