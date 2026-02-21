// test-dynamics-content.js
// Testing dynamics content generation and related experiments

import { EnhancedMechanicsWorkbook } from './mechanics.js';


async function testAllDynamicsExperiments() {
    console.log('=== TEST 3: All Dynamics Experiments ===\n');
    
    const workbook = new EnhancedMechanicsWorkbook({
        includeExperiments: true
    });

    // Get all experiments
    const allExperiments = workbook.getAllExperiments();
    
    // Filter dynamics experiments
    const dynamicsExperiments = allExperiments.filter(exp => 
        exp.relatedTopics.includes('dynamics')
    );

    console.log(`Found ${dynamicsExperiments.length} experiments related to dynamics:\n`);

    dynamicsExperiments.forEach((exp, idx) => {
        console.log(`${idx + 1}. ${exp.name}`);
        console.log(`   ID: ${exp.id}`);
        console.log(`   Scientist: ${exp.scientist || 'N/A'}`);
        console.log(`   Year: ${exp.year || 'N/A'}`);
        console.log(`   Category: ${exp.category}`);
        console.log(`   Related Topics: ${exp.relatedTopics.join(', ')}`);
        console.log('');
    });

    return dynamicsExperiments;
}


// Test 2: Test content filtering by parameters
async function testContentFiltering() {
    console.log('=== TEST 5: Content Filtering ===\n');
    
    const workbook = new EnhancedMechanicsWorkbook({
        includeDiagrams: false,
        includeExperiments: true
    });

    console.log('Testing filtered content (focusing on friction)...\n');
    
    const result = await workbook.handleMechanicsProblem({
        topic: 'dynamics',
        parameters: {
            specificItems: ['friction', 'normal force'],
            difficulty: 'intermediate'
        },
        context: {
            focus: 'friction'
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

    // Check if friction content is present
    if (result.content.friction) {
        console.log('✓ Friction content included');
        console.log(`  Types: ${Object.keys(result.content.friction.types).join(', ')}`);
    }
    console.log('');
}

// Test 6: Validate content structure
async function testContentValidation() {
    console.log('=== TEST 6: Content Validation ===\n');
    
    const workbook = new EnhancedMechanicsWorkbook({
        includeDiagrams: false
    });

    const result = await workbook.handleMechanicsProblem({
        topic: 'dynamics'
    });

    console.log('Validating content structure...\n');
    
    const validation = workbook.validateMechanicsContent(result.content);
    
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
    const summary = workbook.generateMechanicsContentSummary();
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

// Complete test suite
async function runCompleteTestSuite() {
    console.log('\n╔════════════════════════════════════════════════╗');
    console.log('║   MECHANICS DYNAMICS CONTENT TEST SUITE       ║');
    console.log('╚════════════════════════════════════════════════╝\n');

    try {

        // Test 1: All dynamics experiments
        await testAllDynamicsExperiments();
        console.log('─'.repeat(50) + '\n');

        // Test 5: Content filtering
        await testContentFiltering();
        console.log('─'.repeat(50) + '\n');

        // Test 6: Content validation
        await testContentValidation();
        console.log('─'.repeat(50) + '\n');

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
        console.log('\nListing all dynamics experiments...\n');
        testAllDynamicsExperiments()
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

    default:
        console.error(`\nUnknown test mode: ${testMode}`);
        console.log('\nAvailable modes:');
        console.log('  all        - Run complete test suite (default)');
        console.log('  list       - List all dynamics experiments');
        console.log('  filter     - Test content filtering');
        console.log('  validate   - Test content validation');
        console.log('\nUsage: node test-dynamics-content.js [mode]\n');
        process.exit(1);
}
/**
Usage:
# Run complete test suite (all tests)
node test-dynamics-content.js all

# Test only dynamics content generation
node test-dynamics-content.js content

# Test Newton's Second Law experiment
node test-dynamics-content.js experiment

# List all dynamics-related experiments
node test-dynamics-content.js list

# Test different explanation levels
node test-dynamics-content.js levels

# Test content filtering by parameters
node test-dynamics-content.js filter

# Test content validation
node test-dynamics-content.js validate
*/

