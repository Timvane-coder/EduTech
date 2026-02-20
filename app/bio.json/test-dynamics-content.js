// test-dynamics-content.js
// Testing dynamics content generation and related experiments

import { EnhancedMechanicsWorkbook } from './mechanics.js';

// Test 1: Get complete dynamics content
async function testDynamicsContent() {
    console.log('=== TEST 1: Dynamics Content Generation ===\n');
    
    const workbook = new EnhancedMechanicsWorkbook({
        theme: 'mechanics',
        includeDiagrams: false, // Disable diagrams for faster content testing
        includeExperiments: true,
        includeCommonMisconceptions: true,
        includeExamples: true,
        includeComparisons: true,
        metacognitiveSupport: true,
        contextualLearning: true,
        explanationLevel: 'intermediate'
    });

    console.log('Processing dynamics topic...\n');
    
    const result = await workbook.handleMechanicsProblem({
        topic: 'dynamics',
        parameters: {},
        context: {}
    });

    console.log('✓ Content generated successfully!\n');

    // Display content overview
    console.log('=== Content Overview ===');
    console.log(`Topic: ${result.content.topic}`);
    console.log(`Category: ${result.content.category}`);
    console.log(`Summary: ${result.content.summary}\n`);

    // Display core quantities
    if (result.content.coreQuantities) {
        console.log('=== Core Quantities ===');
        Object.entries(result.content.coreQuantities).forEach(([name, quantity]) => {
            console.log(`\n${name.toUpperCase()}:`);
            console.log(`  Symbol: ${quantity.symbol}`);
            console.log(`  Unit: ${quantity.unit}`);
            console.log(`  Type: ${quantity.type}`);
            console.log(`  Definition: ${quantity.definition}`);
        });
        console.log('');
    }

    // Display Newton's Laws
    if (result.content.newtonLaws) {
        console.log('=== Newton\'s Laws of Motion ===');
        Object.entries(result.content.newtonLaws).forEach(([law, details]) => {
            console.log(`\n${law.toUpperCase()}:`);
            console.log(`  Statement: ${details.fullStatement || details.statement}`);
            if (details.equation) {
                console.log(`  Equation: ${details.equation}`);
            }
            if (details.examples) {
                console.log('  Examples:');
                details.examples.slice(0, 2).forEach(ex => {
                    console.log(`    - ${ex}`);
                });
            }
        });
        console.log('');
    }

    // Display Free Body Diagrams info
    if (result.content.freeBodyDiagrams) {
        console.log('=== Free Body Diagrams ===');
        console.log(`Purpose: ${result.content.freeBodyDiagrams.purpose}\n`);
        console.log('Steps:');
        result.content.freeBodyDiagrams.steps.forEach((step, idx) => {
            console.log(`  ${idx + 1}. ${step}`);
        });
        console.log('\nCommon Forces:');
        Object.entries(result.content.freeBodyDiagrams.commonForces).forEach(([force, details]) => {
            console.log(`  ${force}: ${details.direction} - ${details.note || details.formula}`);
        });
        console.log('');
    }

    // Display friction information
    if (result.content.friction) {
        console.log('=== Friction ===');
        console.log(`Nature: ${result.content.friction.nature}\n`);
        console.log('Types:');
        Object.entries(result.content.friction.types).forEach(([type, details]) => {
            console.log(`  ${type.toUpperCase()}:`);
            console.log(`    Definition: ${details.definition}`);
            console.log(`    Equation: ${details.equation}`);
        });
        console.log('');
    }

    // Display worked examples
    if (result.content.workedExamples) {
        console.log('=== Worked Examples ===');
        result.content.workedExamples.forEach((example, idx) => {
            console.log(`\nExample ${idx + 1}: ${example.title}`);
            console.log(`Problem: ${example.problem}`);
            if (example.solution) {
                console.log('Solution:');
                Object.entries(example.solution).forEach(([step, value]) => {
                    console.log(`  ${step}: ${value}`);
                });
            }
        });
        console.log('');
    }

    // Display applications
    if (result.content.applications) {
        console.log('=== Real-World Applications ===');
        result.content.applications.forEach(app => {
            console.log(`  • ${app}`);
        });
        console.log('');
    }

    // Display related experiments
    if (result.content.relatedExperiments) {
        console.log('=== Related Experiments ===');
        result.content.relatedExperiments.forEach(exp => {
            console.log(`  • ${exp.name}`);
            console.log(`    Scientist: ${exp.historicalScientist || 'N/A'}`);
            console.log(`    Category: ${exp.category}`);
        });
        console.log('');
    }

    // Display contextual scenarios
    if (result.content.contextualScenarios) {
        console.log('=== Contextual Scenarios ===');
        result.content.contextualScenarios.slice(0, 2).forEach(scenario => {
            console.log(`\nScenario: ${scenario.scenario}`);
            console.log(`Context: ${scenario.context}`);
            console.log(`Application: ${scenario.application}`);
            console.log(`Question: ${scenario.question}`);
        });
        console.log('');
    }

    // Display content quality metrics
    console.log('=== Content Quality Metrics ===');
    const metrics = workbook.getMechanicsContentQualityMetrics();
    console.log(`Completeness: ${metrics.completeness}%`);
    console.log(`Has Examples: ${metrics.hasExamples}`);
    console.log(`Has Applications: ${metrics.hasApplications}`);
    console.log(`Has Contextual Scenarios: ${metrics.hasContextualScenarios}`);
    console.log(`Detail Level: ${metrics.detailLevel}`);
    console.log('');

    return result;
}

// Test 2: Get specific dynamics experiment (Newton's Second Law)
async function testNewtonSecondLawExperiment() {
    console.log('=== TEST 2: Newton\'s Second Law Experiment ===\n');
    
    const workbook = new EnhancedMechanicsWorkbook({
        includeExperiments: true
    });

    console.log('Fetching Newton\'s Second Law experiment...\n');
    
    const result = await workbook.handleMechanicsProblem({
        topic: 'dynamics',
        parameters: {},
        context: {},
        requestType: 'experiment',
        experimentId: 'newton_second_law'
    });

    console.log('✓ Experiment content generated!\n');

    // Display experiment details
    console.log('=== Experiment Details ===');
    console.log(`Name: ${result.experiment.name}`);
    console.log(`Category: ${result.experiment.category}`);
    console.log(`Related Topics: ${result.experiment.relatedTopics.join(', ')}\n`);

    // Display historical background
    if (result.experiment.historicalBackground) {
        console.log('=== Historical Background ===');
        const bg = result.experiment.historicalBackground;
        console.log(`Scientist: ${bg.scientist}`);
        console.log(`Year: ${bg.year}`);
        console.log(`Publication: ${bg.publication}`);
        console.log(`Law: ${bg.law}`);
        console.log(`Equation: ${bg.equation}`);
        console.log(`Significance: ${bg.significance}`);
        console.log(`Quote: "${bg.quote}"\n`);
    }

    // Display lab experiment
    if (result.experiment.labExperiment) {
        const lab = result.experiment.labExperiment;
        console.log('=== Laboratory Experiment ===');
        console.log(`Title: ${lab.title}`);
        console.log(`Hypothesis: ${lab.hypothesis}`);
        console.log(`Purpose: ${lab.purpose}\n`);

        // Variables
        console.log('Variables:');
        console.log(`  Independent: ${lab.variables.independent}`);
        console.log(`  Dependent: ${lab.variables.dependent}`);
        console.log(`  Controlled: ${lab.variables.controlled.join(', ')}\n`);

        // Materials
        console.log('Materials Required:');
        lab.materials.slice(0, 10).forEach(material => {
            console.log(`  • ${material}`);
        });
        if (lab.materials.length > 10) {
            console.log(`  ... and ${lab.materials.length - 10} more items`);
        }
        console.log('');

        // Safety precautions
        console.log('Safety Precautions:');
        lab.safetyPrecautions.forEach(safety => {
            console.log(`  ⚠ ${safety}`);
        });
        console.log('');

        // Procedure (first few steps)
        console.log('Procedure (first 10 steps):');
        lab.procedure.slice(0, 10).forEach((step, idx) => {
            if (step.trim() === '') {
                console.log('');
            } else if (step.includes(':') && step === step.toUpperCase()) {
                console.log(`\n${step}`);
            } else {
                console.log(`  ${idx + 1}. ${step}`);
            }
        });
        if (lab.procedure.length > 10) {
            console.log(`  ... ${lab.procedure.length - 10} more steps`);
        }
        console.log('');

        // Data analysis
        if (lab.dataAnalysis) {
            console.log('Data Analysis:');
            Object.entries(lab.dataAnalysis).forEach(([section, content]) => {
                if (typeof content === 'object') {
                    console.log(`\n  ${section}:`);
                    Object.entries(content).forEach(([key, value]) => {
                        console.log(`    ${key}: ${value}`);
                    });
                } else {
                    console.log(`  ${section}: ${content}`);
                }
            });
            console.log('');
        }

        // Expected results
        if (lab.expectedResults) {
            console.log('Expected Results:');
            Object.entries(lab.expectedResults).forEach(([key, value]) => {
                console.log(`  ${key}: ${value}`);
            });
            console.log('');
        }

        // Conclusions
        if (lab.conclusions) {
            console.log('Conclusions:');
            lab.conclusions.forEach(conclusion => {
                console.log(`  • ${conclusion}`);
            });
            console.log('');
        }

        // Real-world applications
        if (lab.realWorldApplications) {
            console.log('Real-World Applications:');
            lab.realWorldApplications.forEach(app => {
                console.log(`  • ${app}`);
            });
            console.log('');
        }
    }

    return result;
}

// Test 3: Get all available dynamics experiments
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

// Test 4: Test content with different explanation levels
async function testExplanationLevels() {
    console.log('=== TEST 4: Different Explanation Levels ===\n');
    
    const levels = ['beginner', 'intermediate', 'advanced'];
    
    for (const level of levels) {
        console.log(`\n--- Testing ${level.toUpperCase()} Level ---`);
        
        const workbook = new EnhancedMechanicsWorkbook({
            explanationLevel: level,
            includeDiagrams: false
        });

        const result = await workbook.handleMechanicsProblem({
            topic: 'dynamics',
            parameters: { difficulty: level }
        });

        console.log(`Topic: ${result.content.topic}`);
        console.log(`Vocabulary: ${result.content.vocabulary || 'standard'}`);
        console.log(`Depth: ${result.content.depth || 'moderate'}`);
        console.log(`Examples count: ${result.content.workedExamples?.length || 0}`);
        
        if (result.content.workedExamples && result.content.workedExamples.length > 0) {
            console.log(`First example: ${result.content.workedExamples[0].title}`);
        }
    }
    console.log('');
}

// Test 5: Test content filtering by parameters
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
        // Test 1: Full dynamics content
        await testDynamicsContent();
        console.log('─'.repeat(50) + '\n');

        // Test 2: Newton's Second Law experiment
        await testNewtonSecondLawExperiment();
        console.log('─'.repeat(50) + '\n');

        // Test 3: All dynamics experiments
        await testAllDynamicsExperiments();
        console.log('─'.repeat(50) + '\n');

        // Test 4: Different explanation levels
        await testExplanationLevels();
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

    case 'content':
        console.log('\nTesting dynamics content generation...\n');
        testDynamicsContent()
            .then(() => console.log('\n✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
        break;

    case 'experiment':
        console.log('\nTesting Newton\'s Second Law experiment...\n');
        testNewtonSecondLawExperiment()
            .then(() => console.log('\n✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error);
                process.exit(1);
            });
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

    case 'levels':
        console.log('\nTesting explanation levels...\n');
        testExplanationLevels()
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
        console.log('  content    - Test dynamics content generation');
        console.log('  experiment - Test Newton\'s Second Law experiment');
        console.log('  list       - List all dynamics experiments');
        console.log('  levels     - Test different explanation levels');
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

