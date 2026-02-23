import { ChemistryDiagramsRenderer } from './chemistryrender.js';
import { ChemistrySvgDiagrams } from './chemistrysvg.js';
import { ChemistryDiagramsRegistry } from './chemistryregistry.js';
import fs from 'fs';

async function testChemistryDiagrams() {
    console.log('🧪 Starting Chemistry Diagrams Test...\n');

    // Create renderer instance
    const renderer = new ChemistryDiagramsRenderer();

    // Test diagrams configuration - 7 chemistry apparatus
    const testDiagrams = [
        // ===== LABORATORY GLASSWARE =====
        {
            key: 'buretteApparatus',
            filename: 'chemistry_burette_apparatus.png',
            width: 600,
            height: 1000,
            options: {
                title: 'Burette (Buret)',
                showRealObject: true,
                showBurette: true,
                showGraduations: true,
                showMeniscus: true,
                showTap: true,
                showStand: true,
                showReadingTechnique: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume delivered (V_final - V_initial)',
                    constant: 'Graduation precision (±0.05 mL)',
                    law: 'Read at eye level, bottom of meniscus'
                }
            },
            topic: 'Laboratory Chemistry - Glassware',
            type: 'Read-as-you-draw (Apparatus)'
        },
        {
            key: 'volumetricFlaskDetailedApparatus',
            filename: 'chemistry_volumetric_flask_apparatus.png',
            width: 600,
            height: 900,
            options: {
                title: 'Volumetric Flask',
                showRealObject: true,
                showFlask: true,
                showCalibrationLine: true,
                showStopper: true,
                showFillingProcedure: true,
                showMixingTechnique: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Solution concentration (c=n/V)',
                    constant: 'Flask volume (precisely calibrated)',
                    law: 'Fill to mark at eye level, temperature-dependent volume'
                }
            },
            topic: 'Laboratory Chemistry - Glassware',
            type: 'Read-as-you-draw (Apparatus)'
        },
        {
            key: 'measuringCylinderDetailedApparatus',
            filename: 'chemistry_measuring_cylinder_apparatus.png',
            width: 600,
            height: 1000,
            options: {
                title: 'Measuring Cylinder',
                showRealObject: true,
                showCylinder: true,
                showGraduations: true,
                showMeniscus: true,
                showReadingPosition: true,
                showAccuracy: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume measured',
                    constant: 'Graduation precision (±1 mL for 100 mL)',
                    law: 'Read at bottom of meniscus, more accurate than beaker, less than pipette'
                }
            },
            topic: 'Laboratory Chemistry - Glassware',
            type: 'Read-as-you-draw (Apparatus)'
        },

        // ===== LABORATORY HEATING =====
        {
            key: 'bunsenBurnerApparatus',
            filename: 'chemistry_bunsen_burner_apparatus.png',
            width: 700,
            height: 1000,
            options: {
                title: 'Bunsen Burner',
                showRealObject: true,
                showBurner: true,
                showAirHole: true,
                showGasControl: true,
                showFlameTypes: true,
                showSafetyProcedure: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Flame type (yellow/safety vs blue/roaring)',
                    constant: 'Gas source, burner design',
                    law: 'Open air hole → blue flame (hotter), closed → yellow (safer)'
                }
            },
            topic: 'Laboratory Chemistry - Heating',
            type: 'Read-as-you-draw (Apparatus)'
        },

        // ===== LABORATORY SEPARATION =====
        {
            key: 'distillationApparatus',
            filename: 'chemistry_distillation_apparatus.png',
            width: 1000,
            height: 800,
            options: {
                title: 'Simple Distillation',
                showRealObject: true,
                showRoundBottomFlask: true,
                showThermometer: true,
                showCondenser: true,
                showReceivingFlask: true,
                showWaterFlow: true,
                showHeating: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature (increases), distillate composition',
                    constant: 'Boiling points of components',
                    law: 'Component with lower BP distills first'
                }
            },
            topic: 'Laboratory Chemistry - Separation',
            type: 'Read-as-you-draw (Apparatus)'
        },
        {
            key: 'chromatographyApparatus',
            filename: 'chemistry_chromatography_apparatus.png',
            width: 800,
            height: 900,
            options: {
                title: 'Thin Layer Chromatography',
                showRealObject: true,
                showTLCPlate: true,
                showSolventFront: true,
                showSpots: true,
                showDevelopingChamber: true,
                showRfCalculation: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Spot position (with polarity)',
                    constant: 'Rf value (for given compound/solvent)',
                    law: 'Rf = distance moved by compound / distance moved by solvent'
                }
            },
            topic: 'Laboratory Chemistry - Separation',
            type: 'Read-as-you-draw (Apparatus)'
        },
        {
            key: 'condenserApparatus',
            filename: 'chemistry_condenser_apparatus.png',
            width: 900,
            height: 900,
            options: {
                title: 'Liebig Condenser',
                showRealObject: true,
                showCondenser: true,
                showWaterJacket: true,
                showWaterFlow: true,
                showVaporPath: true,
                showTypes: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Vapor → liquid condensation',
                    constant: 'Water in (bottom), water out (top)',
                    law: 'Cold water in at bottom (countercurrent flow), vapors condense'
                }
            },
            topic: 'Laboratory Chemistry - Separation',
            type: 'Read-as-you-draw (Apparatus)'
        }
    ];

    // Create output directory if it doesn't exist
    const outputDir = './test_outputs_chemistry';
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
        console.log(`📁 Created output directory: ${outputDir}\n`);
    }

    // Test each diagram
    let successCount = 0;
    let failCount = 0;
    const topicStats = {};

    console.log('═'.repeat(70));
    console.log('🧪 TESTING CHEMISTRY DIAGRAMS');
    console.log('═'.repeat(70) + '\n');

    for (const diagram of testDiagrams) {
        try {
            console.log(`🧪 Testing: ${diagram.key}`);
            console.log(`   Topic: ${diagram.topic}`);
            console.log(`   Type: ${diagram.type}`);

            // Initialize topic stats
            if (!topicStats[diagram.topic]) {
                topicStats[diagram.topic] = { total: 0, success: 0, failed: 0 };
            }
            topicStats[diagram.topic].total++;

            // Verify diagram exists in registry
            const diagramInfo = ChemistryDiagramsRegistry.getDiagram(diagram.key);
            if (!diagramInfo) {
                throw new Error(`Diagram '${diagram.key}' not found in registry`);
            }
            console.log(`   ✓ Found in registry: ${diagramInfo.name}`);
            console.log(`   ✓ Category: ${diagramInfo.category}`);
            console.log(`   ✓ Description: ${diagramInfo.description}`);

            // Check if it's an apparatus diagram
            if (diagramInfo.type === 'apparatus_diagram') {
                console.log(`   ✓ Apparatus type: ${diagramInfo.apparatusType}`);
                const goldenQ = ChemistryDiagramsRegistry.getGoldenQuestions(diagram.key);
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
            console.log(`   ✓ SVG data found in ChemistrySvgDiagrams`);

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
    console.log('📚 CHEMISTRY DIAGRAMS REGISTRY STATISTICS');
    console.log('═'.repeat(70));
    console.log(`Total diagrams available: ${ChemistryDiagramsRegistry.getTotalCount()}`);
    console.log(`  • Conceptual diagrams: ${ChemistryDiagramsRegistry.getSolveCount()}`);
    console.log(`  • Apparatus diagrams: ${ChemistryDiagramsRegistry.getApparatusCount()}`);

    const categories = ChemistryDiagramsRegistry.getAllCategories();
    console.log(`Total categories: ${categories.length}`);

    console.log('\nDiagrams by category:');
    const registryStats = ChemistryDiagramsRegistry.getCategorySummary();
    Object.entries(registryStats).forEach(([category, data]) => {
        console.log(`\n  ${category}:`);
        console.log(`    Total: ${data.totalDiagrams}`);
        console.log(`    Conceptual: ${data.solveDiagrams}`);
        console.log(`    Apparatus: ${data.apparatusDiagrams}`);
        console.log(`    Description: ${data.description}`);
    });

    console.log('\n' + '═'.repeat(70));
    console.log('🎓 PEDAGOGY FEATURES');
    console.log('═'.repeat(70));

    // Show example of pedagogy information
    const exampleKey = 'buretteApparatus';
    const pedagogy = ChemistryDiagramsRegistry.getDiagramPedagogy(exampleKey);
    if (pedagogy) {
        console.log(`\nExample: ${pedagogy.name}`);
        console.log(`  Category: ${pedagogy.category}`);
        console.log(`  Type: ${pedagogy.type}`);
        if (pedagogy.goldenQuestions) {
            console.log(`  Golden Questions:`);
            console.log(`    - What's changing? ${pedagogy.goldenQuestions.changing}`);
            console.log(`    - What stays constant? ${pedagogy.goldenQuestions.constant}`);
            console.log(`    - What law connects them? ${pedagogy.goldenQuestions.law}`);
        }
        const analogies = ChemistryDiagramsRegistry.getAnalogies(exampleKey);
        if (analogies && analogies.length > 0) {
            console.log(`  Analogies:`);
            analogies.forEach(analogy => {
                console.log(`    - ${analogy}`);
            });
        }
        const safety = ChemistryDiagramsRegistry.getSafetyConsiderations(exampleKey);
        if (safety && safety.length > 0) {
            console.log(`  Safety Considerations:`);
            safety.forEach(item => {
                console.log(`    - ${item}`);
            });
        }
        const applications = ChemistryDiagramsRegistry.getDiagramApplications(exampleKey);
        if (applications && applications.length > 0) {
            console.log(`  Applications:`);
            applications.slice(0, 3).forEach(app => {
                console.log(`    - ${app}`);
            });
        }
    }

    console.log('\n' + '═'.repeat(70));
    console.log('🔍 SEARCH & DISCOVERY');
    console.log('═'.repeat(70));

    // Test search functionality
    const searchTerm = 'apparatus';
    const searchResults = ChemistryDiagramsRegistry.searchDiagrams(searchTerm);
    console.log(`\nSearch results for "${searchTerm}":`);
    Object.keys(searchResults).slice(0, 5).forEach(key => {
        const diagram = searchResults[key];
        console.log(`  • ${diagram.name} (${diagram.category})`);
    });

    // Show diagrams by type
    console.log('\nApparatus diagrams available:');
    const apparatusDiagrams = ChemistryDiagramsRegistry.getApparatusDiagrams();
    const apparatusKeys = Object.keys(apparatusDiagrams);
    console.log(`Total: ${apparatusKeys.length}`);
    apparatusKeys.slice(0, 5).forEach(key => {
        const diagram = apparatusDiagrams[key];
        console.log(`  • ${diagram.name} - ${diagram.apparatusType}`);
    });

    // Show random diagram suggestion
    const random = ChemistryDiagramsRegistry.getRandomDiagram();
    console.log(`\nRandom diagram suggestion: ${random.diagram.name}`);
    console.log(`  Category: ${random.diagram.category}`);
    console.log(`  Description: ${random.diagram.description}`);

    console.log('\n' + '═'.repeat(70));
    console.log('📋 APPARATUS TYPE BREAKDOWN');
    console.log('═'.repeat(70));

    const testedTopics = [...new Set(testDiagrams.map(d => d.topic))];
    console.log(`\nTopics tested: ${testedTopics.length}`);
    testedTopics.forEach(topic => {
        const topicDiagrams = testDiagrams.filter(d => d.topic === topic);
        console.log(`\n  ${topic}:`);
        console.log(`    Total apparatus: ${topicDiagrams.length}`);
        topicDiagrams.forEach(d => {
            console.log(`      - ${d.key}`);
        });
    });

    console.log('\n' + '═'.repeat(70));
    console.log('💡 CHEMISTRY CONCEPTS COVERED');
    console.log('═'.repeat(70));

    const conceptsCovered = {
        'Laboratory Chemistry - Glassware': [
            'Precise volume measurement',
            'Accurate volume transfer',
            'Solution preparation',
            'Meniscus reading',
            'Calibration techniques'
        ],
        'Laboratory Chemistry - Heating': [
            'Flame types and control',
            'Safe heating practices',
            'Temperature control',
            'Gas regulation'
        ],
        'Laboratory Chemistry - Separation': [
            'Distillation principles',
            'Vapor condensation',
            'Chromatographic separation',
            'Rf values',
            'Phase separation'
        ]
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
        console.log('✨ All 7 chemistry apparatus diagrams rendered correctly!');
        console.log('📊 3 topics covered: Glassware (3), Heating (1), Separation (3)');
    } else {
        console.log(`⚠️  ${failCount} test(s) failed. Please check the errors above.`);
    }
    console.log('═'.repeat(70) + '\n');

    // Additional validation
    console.log('✅ VALIDATION CHECKS:');
    console.log(`   • Expected files: 7`);
    console.log(`   • Generated files: ${files.length}`);
    console.log(`   • Topics covered: ${Object.keys(topicStats).length}/3`);
    console.log(`   • All apparatus diagrams: ${testDiagrams.length}/7`);
    console.log('');

    // Show apparatus types tested
    console.log('🔬 APPARATUS TYPES TESTED:');
    const apparatusTypes = testDiagrams.map(d => d.options.title);
    apparatusTypes.forEach(type => {
        console.log(`   ✓ ${type}`);
    });
    console.log('');
}

// Run the test
testChemistryDiagrams().catch(error => {
    console.error('❌ Fatal error:', error);
    console.error('Stack trace:', error.stack);
    process.exit(1);
});
