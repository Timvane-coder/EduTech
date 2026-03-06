// test-geometric-measurement-content.js
// Testing geometric measurement content generation and related practicals

import { EnhancedGeometricMeasurementWorkbook } from './measurement.js';


async function testAllPythagoreanPracticals() {
    console.log('=== TEST 1: All Pythagorean Theorem Practicals ===\n');

    const workbook = new EnhancedGeometricMeasurementWorkbook({
        includePracticals: true
    });

    // Get all practicals
    const allPracticals = workbook.getAllPracticals();

    // Filter pythagorean theorem practicals
    const pythagoreanPracticals = allPracticals.filter(practical =>
        practical.relatedTopics.includes('pythagorean_theorem')
    );

    console.log(`Found ${pythagoreanPracticals.length} practicals related to Pythagorean Theorem:\n`);

    pythagoreanPracticals.forEach((practical, idx) => {
        console.log(`${idx + 1}. ${practical.name}`);
        console.log(`   ID: ${practical.id}`);
        console.log(`   Historical Figure: ${practical.historicalFigure || 'N/A'}`);
        console.log(`   Year: ${practical.year || 'N/A'}`);
        console.log(`   Category: ${practical.category}`);
        console.log(`   Related Topics: ${practical.relatedTopics.join(', ')}`);
        console.log('');
    });

    return pythagoreanPracticals;
}


// Test 2: Test content filtering by parameters
async function testContentFiltering() {
    console.log('=== TEST 2: Content Filtering ===\n');

    const workbook = new EnhancedGeometricMeasurementWorkbook({
        includeDiagrams: false,
        includePracticals: true
    });

    console.log('Testing filtered content (focusing on perpendicular height and base)...\n');

    const result = await workbook.handleGeometricProblem({
        topic: 'area',
        parameters: {
            specificItems: ['perpendicular height', 'base'],
            difficulty: 'intermediate'
        },
        context: {
            focus: 'triangle and parallelogram area'
        }
    });

    console.log('✓ Filtered content generated\n');
    console.log('Content sections available:');

    const sections = Object.keys(result.content).filter(key =>
        result.content[key] && typeof result.content[key] === 'object'
    );

    sections.forEach(section => {
        console.log(`  • ${section}`);
    });
    console.log('');

    // Check if formulas content is present
    if (result.content.formulas) {
        console.log('✓ Formula content included');
        console.log(`  Shapes: ${Object.keys(result.content.formulas).join(', ')}`);
    }
    console.log('');
}


// Test 3: Validate content structure
async function testContentValidation() {
    console.log('=== TEST 3: Content Validation ===\n');

    const workbook = new EnhancedGeometricMeasurementWorkbook({
        includeDiagrams: false
    });

    const result = await workbook.handleGeometricProblem({
        topic: 'area'
    });

    console.log('Validating content structure...\n');

    const validation = workbook.validateGeometricContent(result.content);

    console.log(`Is Valid: ${validation.isValid}`);

    if (validation.warnings.length > 0) {
        console.log('\nWarnings:');
        validation.warnings.forEach(warning => {
            console.log(`  ⚠ ${warning}`);
        });
    }

    if (validation.suggestions.length > 0) {
        console.log('\nSuggestions:');
        validation.suggestions.forEach(suggestion => {
            console.log(`  💡 ${suggestion}`);
        });
    }

    if (validation.warnings.length === 0 && validation.suggestions.length === 0) {
        console.log('  ✓ No issues found');
    }
    console.log('');

    // Display content summary
    const summary = workbook.generateGeometricContentSummary();
    console.log('Content Summary:');
    console.log(`  Topic: ${summary.topic}`);
    console.log(`  Category: ${summary.category}`);
    console.log(`  Difficulty: ${summary.difficulty}`);
    console.log(`  Key Points: ${summary.keyPoints.join(', ')}`);
    console.log('  Coverage:');
    Object.entries(summary.coverage).forEach(([key, value]) => {
        console.log(`    ${key}: ${value}`);
    });
    console.log('');
}


// Test 4: Test practical mathematics request directly
async function testPracticalMathematicsRequest() {
    console.log('=== TEST 4: Practical Mathematics Request ===\n');

    const workbook = new EnhancedGeometricMeasurementWorkbook({
        includePracticals: true,
        includeDiagrams: false
    });

    console.log('Testing direct practical mathematics request (Pythagorean Theorem Discovery)...\n');

    const result = await workbook.handleGeometricProblem({
        topic: 'pythagorean_theorem',
        requestType: 'practical'
    });

    console.log('✓ Practical mathematics content generated\n');

    if (result.practical) {
        console.log('Practical Details:');
        console.log(`  Name: ${result.practical.name}`);
        console.log(`  Category: ${result.practical.category}`);
        console.log(`  Related Topics: ${result.practical.relatedTopics.join(', ')}`);
        console.log('');
    }

    if (result.content && result.content.sections) {
        console.log(`Content Sections (${result.content.sections.length} total):`);
        result.content.sections.forEach(section => {
            console.log(`  • ${section.title} [${section.type}]`);
        });
    }
    console.log('');
}


// Test 5: Test all topics content generation
async function testAllTopicsContentGeneration() {
    console.log('=== TEST 5: All Topics Content Generation ===\n');

    const workbook = new EnhancedGeometricMeasurementWorkbook({
        includeDiagrams: false,
        includePracticals: true
    });

    const topics = [
        'perimeter',
        'area',
        'surface_area',
        'volume',
        'arc_length',
        'sector_area',
        'trigonometry_ratios',
        'pythagorean_theorem',
        'bearings'
    ];

    console.log(`Testing content generation for all ${topics.length} topics...\n`);

    for (const topic of topics) {
        try {
            const result = await workbook.handleGeometricProblem({ topic });

            const completeness = workbook.calculateGeometricContentCompleteness();
            const difficulty = workbook.assessGeometricContentDifficulty();
            const relevance = workbook.getTopicRelevance(topic);

            console.log(`✓ ${topic.toUpperCase().replace(/_/g, ' ')}`);
            console.log(`  Completeness: ${completeness}%`);
            console.log(`  Difficulty:   ${difficulty}`);
            console.log(`  Relevance:    ${relevance.substring(0, 80)}...`);

            if (result.practicals && result.practicals.length > 0) {
                console.log(`  Practicals:   ${result.practicals.length} related investigation(s)`);
                result.practicals.forEach(p => {
                    console.log(`    - ${p.name}`);
                });
            } else {
                console.log(`  Practicals:   None linked`);
            }
            console.log('');

        } catch (error) {
            console.error(`✗ FAILED for topic: ${topic}`);
            console.error(`  Error: ${error.message}`);
            console.log('');
        }
    }
}


// Test 6: Test learning objectives and study tips
async function testLearningSupport() {
    console.log('=== TEST 6: Learning Objectives and Study Tips ===\n');

    const workbook = new EnhancedGeometricMeasurementWorkbook({
        includeDiagrams: false
    });

    const testTopics = ['trigonometry_ratios', 'bearings', 'volume'];

    for (const topic of testTopics) {
        await workbook.handleGeometricProblem({ topic });

        console.log(`─── ${topic.toUpperCase().replace(/_/g, ' ')} ───\n`);

        // Learning objectives
        const objectives = workbook.generateGeometricLearningObjectives();
        console.log('Learning Objectives:');
        objectives.forEach((obj, idx) => {
            console.log(`  ${idx + 1}. ${obj}`);
        });
        console.log('');

        // Prerequisites
        const prerequisites = workbook.identifyGeometricPrerequisites();
        console.log('Prerequisites:');
        prerequisites.forEach(prereq => {
            console.log(`  • ${prereq}`);
        });
        console.log('');

        // Study tips
        const tips = workbook.generateGeometricStudyTips();
        console.log('Study Tips:');
        tips.forEach((tip, idx) => {
            console.log(`  ${idx + 1}. ${tip}`);
        });
        console.log('');
    }
}


// Test 7: Test process timelines
async function testProcessTimelines() {
    console.log('=== TEST 7: Process Timelines ===\n');

    const workbook = new EnhancedGeometricMeasurementWorkbook({
        includeDiagrams: false
    });

    const timelines = [
        'Problem Solving Strategy',
        'Trigonometry Strategy',
        'Bearings Strategy',
        'Surface Area Strategy'
    ];

    timelines.forEach(timelineName => {
        console.log(`─── ${timelineName} ───\n`);

        const timeline = workbook.generateGeometricProcessTimeline(timelineName);

        if (timeline.length === 0) {
            console.log('  (No timeline found for this process)\n');
            return;
        }

        timeline.forEach(entry => {
            console.log(`  ${entry.step}`);
            console.log(`    → ${entry.action}`);
        });
        console.log('');
    });
}


// Test 8: Test related topics and conceptual connections
async function testRelatedTopicsAndConnections() {
    console.log('=== TEST 8: Related Topics and Conceptual Connections ===\n');

    const workbook = new EnhancedGeometricMeasurementWorkbook({
        includeDiagrams: false,
        includeConceptualConnections: true
    });

    const testTopics = ['arc_length', 'pythagorean_theorem', 'bearings'];

    for (const topic of testTopics) {
        await workbook.handleGeometricProblem({ topic });

        console.log(`─── ${topic.toUpperCase().replace(/_/g, ' ')} ───\n`);

        // Suggested related topics
        const related = workbook.suggestRelatedTopics();
        console.log('Suggested Related Topics:');
        if (related.length === 0) {
            console.log('  (None found)');
        } else {
            related.forEach(r => {
                console.log(`  • ${r.name}`);
                console.log(`    ${r.description}`);
            });
        }
        console.log('');

        // Conceptual connections
        const enriched = workbook.addGeometricConceptualConnections(
            workbook.currentContent
        );
        if (enriched.conceptualConnections) {
            console.log('Conceptual Connections:');
            console.log(`  ${enriched.conceptualConnections}`);
        }
        console.log('');
    }
}


// Test 9: Test glossary and analogy generation
async function testGlossaryAndAnalogies() {
    console.log('=== TEST 9: Glossary and Analogies ===\n');

    const workbook = new EnhancedGeometricMeasurementWorkbook({
        includeDiagrams: false
    });

    await workbook.handleGeometricProblem({ topic: 'trigonometry_ratios' });

    // Glossary
    const glossary = workbook.generateGlossary();
    console.log('Generated Glossary (Trigonometry Ratios):');
    Object.entries(glossary).forEach(([term, definition]) => {
        const trimmedDef = typeof definition === 'string'
            ? definition.substring(0, 80) + (definition.length > 80 ? '...' : '')
            : JSON.stringify(definition).substring(0, 80);
        console.log(`  ${term}:`);
        console.log(`    ${trimmedDef}`);
    });
    console.log('');

    // Analogies
    const geometricConcepts = [
        'perimeter', 'area', 'hypotenuse', 'sector_area',
        'radian', 'bearing', 'pythagorean_theorem', 'sine', 'tangent'
    ];

    console.log('Generated Analogies:');
    geometricConcepts.forEach(concept => {
        const analogy = workbook.generateGeometricAnalogy(concept);
        console.log(`  ${concept}:`);
        console.log(`    "${analogy}"`);
    });
    console.log('');
}


// Test 10: Test workbook status and quality metrics
async function testWorkbookStatusAndMetrics() {
    console.log('=== TEST 10: Workbook Status and Quality Metrics ===\n');

    const workbook = new EnhancedGeometricMeasurementWorkbook({
        includeDiagrams: false,
        includePracticals: true,
        metacognitiveSupport: true,
        contextualLearning: true
    });

    await workbook.handleGeometricProblem({ topic: 'surface_area' });

    // Workbook status
    const status = workbook.getWorkbookStatus();
    console.log('Workbook Status:');
    Object.entries(status).forEach(([key, value]) => {
        console.log(`  ${workbook.formatKey(key)}: ${value}`);
    });
    console.log('');

    // Quality metrics
    const metrics = workbook.getGeometricContentQualityMetrics();
    console.log('Content Quality Metrics:');
    Object.entries(metrics).forEach(([key, value]) => {
        console.log(`  ${workbook.formatKey(key)}: ${value}`);
    });
    console.log('');

    // Content hierarchy
    const hierarchy = workbook.generateGeometricContentHierarchy();
    if (hierarchy) {
        console.log('Content Hierarchy:');
        console.log(`  Root: ${hierarchy.root}`);
        console.log('  Sections:');
        hierarchy.children.forEach(child => {
            const countStr = child.count !== undefined ? ` (${child.count} items)` : '';
            console.log(`    • ${child.name}${countStr}`);
        });
    }
    console.log('');

    // Diagram cache stats
    const cacheStats = workbook.getDiagramCacheStats();
    console.log('Diagram Cache Stats:');
    console.log(`  Cached Diagrams: ${cacheStats.cachedDiagrams}`);
    console.log(`  Diagrams Ready:  ${cacheStats.diagramsReady}`);
    console.log(`  Status:          ${cacheStats.status}`);
    console.log('');
}


// Test 11: Test comparative context and language adaptation
async function testComparativeContextAndLanguage() {
    console.log('=== TEST 11: Comparative Context and Language Adaptation ===\n');

    const workbook = new EnhancedGeometricMeasurementWorkbook({
        includeDiagrams: false,
        includeComparisons: true
    });

    const testTopics = ['area', 'surface_area', 'trigonometry_ratios'];

    for (const topic of testTopics) {
        const result = await workbook.handleGeometricProblem({ topic });

        console.log(`─── ${topic.toUpperCase().replace(/_/g, ' ')} ───\n`);

        // Comparative context
        const enrichedContent = workbook.addGeometricComparativeContext(result.content);
        if (enrichedContent.comparativeContext) {
            console.log('Comparative Context:');
            Object.entries(enrichedContent.comparativeContext).forEach(([key, value]) => {
                console.log(`  ${workbook.formatKey(key)}:`);
                console.log(`    ${value}`);
            });
        }
        console.log('');

        // Language adaptation at each level
        const sampleText = result.content.summary || '';
        if (sampleText) {
            console.log('Language Adaptation of Summary:');
            ['basic', 'intermediate', 'advanced'].forEach(level => {
                const adapted = workbook.adaptGeometricLanguage(sampleText, level);
                console.log(`  [${level.toUpperCase()}]:`);
                console.log(`    ${adapted.substring(0, 120)}...`);
            });
        }
        console.log('');
    }
}


// Test 12: Test all practicals listing and finding by topic
async function testPracticalsListing() {
    console.log('=== TEST 12: All Practicals Listing ===\n');

    const workbook = new EnhancedGeometricMeasurementWorkbook({
        includePracticals: true
    });

    const allPracticals = workbook.getAllPracticals();

    console.log(`Total Practicals Available: ${allPracticals.length}\n`);

    allPracticals.forEach((practical, idx) => {
        console.log(`${idx + 1}. ${practical.name}`);
        console.log(`   ID:               ${practical.id}`);
        console.log(`   Category:         ${practical.category}`);
        console.log(`   Historical Figure: ${practical.historicalFigure || 'N/A'}`);
        console.log(`   Year:             ${practical.year || 'N/A'}`);
        console.log(`   Related Topics:   ${practical.relatedTopics.join(', ')}`);
        console.log('');
    });

    // Test findPracticalByTopic
    console.log('Finding practicals by topic keyword...\n');

    const searchTerms = ['algebra tiles', 'pythagoras', 'archimedes', 'bearings', 'trigonometry'];

    searchTerms.forEach(term => {
        const found = workbook.findPracticalByTopic(term);
        if (found) {
            console.log(`  "${term}" → Found: ${found.name}`);
        } else {
            console.log(`  "${term}" → Not found`);
        }
    });
    console.log('');
}


// Complete test suite
async function runCompleteTestSuite() {
    console.log('\n╔═════════════════════════════════════════════════════════╗');
    console.log('║   GEOMETRIC MEASUREMENT CONTENT TEST SUITE             ║');
    console.log('╚═════════════════════════════════════════════════════════╝\n');

    try {

        // Test 1: All pythagorean theorem practicals
        await testAllPythagoreanPracticals();
        console.log('─'.repeat(60) + '\n');

        // Test 2: Content filtering
        await testContentFiltering();
        console.log('─'.repeat(60) + '\n');

        // Test 3: Content validation
        await testContentValidation();
        console.log('─'.repeat(60) + '\n');

        // Test 4: Practical mathematics request
        await testPracticalMathematicsRequest();
        console.log('─'.repeat(60) + '\n');

        // Test 5: All topics content generation
        await testAllTopicsContentGeneration();
        console.log('─'.repeat(60) + '\n');

        // Test 6: Learning objectives and study tips
        await testLearningSupport();
        console.log('─'.repeat(60) + '\n');

        // Test 7: Process timelines
        await testProcessTimelines();
        console.log('─'.repeat(60) + '\n');

        // Test 8: Related topics and conceptual connections
        await testRelatedTopicsAndConnections();
        console.log('─'.repeat(60) + '\n');

        // Test 9: Glossary and analogies
        await testGlossaryAndAnalogies();
        console.log('─'.repeat(60) + '\n');

        // Test 10: Workbook status and quality metrics
        await testWorkbookStatusAndMetrics();
        console.log('─'.repeat(60) + '\n');

        // Test 11: Comparative context and language adaptation
        await testComparativeContextAndLanguage();
        console.log('─'.repeat(60) + '\n');

        // Test 12: All practicals listing
        await testPracticalsListing();
        console.log('─'.repeat(60) + '\n');

        console.log('✓ ALL TESTS COMPLETED SUCCESSFULLY!\n');

    } catch (error) {
        console.error('\n✗ TEST SUITE FAILED:', error);
        console.error('Stack trace:', error.stack);
        process.exit(1);
    }
}


// Run tests based on command line argument
const testMode = process.argv[2] || 'all';

switch (testMode) {
    case 'all':
        runCompleteTestSuite();
        break;

    case 'list':
        console.log('\nListing all Pythagorean Theorem practicals...\n');
        testAllPythagoreanPracticals()
            .then(() => console.log('\n✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
        break;

    case 'filter':
        console.log('\nTesting content filtering...\n');
        testContentFiltering()
            .then(() => console.log('\n✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
        break;

    case 'validate':
        console.log('\nTesting content validation...\n');
        testContentValidation()
            .then(() => console.log('\n✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
        break;

    case 'practical':
        console.log('\nTesting practical mathematics request...\n');
        testPracticalMathematicsRequest()
            .then(() => console.log('\n✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
        break;

    case 'topics':
        console.log('\nTesting all topics content generation...\n');
        testAllTopicsContentGeneration()
            .then(() => console.log('\n✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
        break;

    case 'learning':
        console.log('\nTesting learning objectives and study tips...\n');
        testLearningSupport()
            .then(() => console.log('\n✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
        break;

    case 'timelines':
        console.log('\nTesting process timelines...\n');
        testProcessTimelines()
            .then(() => console.log('\n✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
        break;

    case 'connections':
        console.log('\nTesting related topics and conceptual connections...\n');
        testRelatedTopicsAndConnections()
            .then(() => console.log('\n✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
        break;

    case 'glossary':
        console.log('\nTesting glossary and analogies...\n');
        testGlossaryAndAnalogies()
            .then(() => console.log('\n✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
        break;

    case 'status':
        console.log('\nTesting workbook status and quality metrics...\n');
        testWorkbookStatusAndMetrics()
            .then(() => console.log('\n✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
        break;

    case 'compare':
        console.log('\nTesting comparative context and language adaptation...\n');
        testComparativeContextAndLanguage()
            .then(() => console.log('\n✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
        break;

    case 'practicals':
        console.log('\nTesting all practicals listing...\n');
        testPracticalsListing()
            .then(() => console.log('\n✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
        break;

    default:
        console.error(`\nUnknown test mode: ${testMode}`);
        console.log('\nAvailable modes:');
        console.log('  all          - Run complete test suite (default)');
        console.log('  list         - List all Pythagorean Theorem practicals');
        console.log('  filter       - Test content filtering');
        console.log('  validate     - Test content validation');
        console.log('  practical    - Test practical mathematics request');
        console.log('  topics       - Test all topics content generation');
        console.log('  learning     - Test learning objectives and study tips');
        console.log('  timelines    - Test process timelines');
        console.log('  connections  - Test related topics and conceptual connections');
        console.log('  glossary     - Test glossary and analogies');
        console.log('  status       - Test workbook status and quality metrics');
        console.log('  compare      - Test comparative context and language adaptation');
        console.log('  practicals   - Test all practicals listing');
        console.log('\nUsage: node test-geometric-measurement-content.js [mode]\n');
        process.exit(1);
}
