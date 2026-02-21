// test-hydrocarbon-content.js
// Testing hydrocarbon content generation and related experiments
// from the EnhancedOrganicChemistryWorkbook

import { EnhancedOrganicChemistryWorkbook } from './chemistry.js';

// ========================================
// TEST 1: LIST ALL HYDROCARBON EXPERIMENTS
// ========================================

async function testAllHydrocarbonExperiments() {
    console.log('=== TEST 1: All Hydrocarbon Experiments ===\n');

    const workbook = new EnhancedOrganicChemistryWorkbook({
        includeExperiments: true
    });

    const allExperiments = workbook.getAllExperiments();

    const hydrocarbonExperiments = allExperiments.filter(exp =>
        exp.relatedTopics.includes('hydrocarbons')
    );

    console.log(`Found ${hydrocarbonExperiments.length} experiment(s) related to hydrocarbons:\n`);

    hydrocarbonExperiments.forEach((exp, idx) => {
        console.log(`${idx + 1}. ${exp.name}`);
        console.log(`   ID:              ${exp.id}`);
        console.log(`   Scientist:       ${exp.scientist || 'N/A'}`);
        console.log(`   Year:            ${exp.year || 'N/A'}`);
        console.log(`   Category:        ${exp.category}`);
        console.log(`   Lab Title:       ${exp.labTitle || 'N/A'}`);
        console.log(`   Related Topics:  ${exp.relatedTopics.join(', ')}`);
        console.log('');
    });

    if (hydrocarbonExperiments.length === 0) {
        console.log('  ℹ No experiments directly tagged to hydrocarbons.');
        console.log('  Checking experiments that involve hydrocarbon reactions...\n');

        // Broader search — experiments that mention hydrocarbons in their name or category
        const broaderMatches = allExperiments.filter(exp =>
            exp.name.toLowerCase().includes('halogenat') ||
            exp.name.toLowerCase().includes('distill') ||
            exp.category === 'reaction_mechanisms' ||
            exp.category === 'separation_techniques'
        );

        console.log(`Found ${broaderMatches.length} experiment(s) involving hydrocarbon chemistry:\n`);
        broaderMatches.forEach((exp, idx) => {
            console.log(`${idx + 1}. ${exp.name}`);
            console.log(`   ID:       ${exp.id}`);
            console.log(`   Category: ${exp.category}`);
            console.log(`   Topics:   ${exp.relatedTopics.join(', ')}`);
            console.log('');
        });
    }

    return hydrocarbonExperiments;
}

// ========================================
// TEST 2: HYDROCARBON CONTENT GENERATION
// ========================================

async function testHydrocarbonContentGeneration() {
    console.log('=== TEST 2: Hydrocarbon Content Generation ===\n');

    const workbook = new EnhancedOrganicChemistryWorkbook({
        includeDiagrams: false,
        includeExperiments: true,
        explanationLevel: 'intermediate',
        includeCommonMisconceptions: true,
        includeExamples: true,
        includeComparisons: true,
        metacognitiveSupport: true,
        contextualLearning: true,
        assessmentFeedback: true
    });

    console.log('Generating hydrocarbon content...\n');

    const result = await workbook.handleOrganicChemistryProblem({
        topic: 'hydrocarbons',
        parameters: {},
        context: {}
    });

    console.log('✓ Content generated successfully\n');

    // Report on main content sections
    console.log('Content sections available:');
    const sections = Object.keys(result.content).filter(key =>
        result.content[key] !== null &&
        result.content[key] !== undefined &&
        typeof result.content[key] !== 'string' ||
        (typeof result.content[key] === 'string' && result.content[key].length > 0)
    );
    sections.forEach(section => {
        const val = result.content[section];
        const type = Array.isArray(val) ? `Array(${val.length})` : typeof val;
        console.log(`  • ${section}: ${type}`);
    });
    console.log('');

    // Verify classification data
    if (result.content.classification) {
        console.log('✓ Classification data present');
        const classKeys = Object.keys(result.content.classification);
        console.log(`  Hydrocarbon classes: ${classKeys.join(', ')}`);

        classKeys.forEach(cls => {
            const clsData = result.content.classification[cls];
            if (clsData) {
                console.log(`\n  ${cls.toUpperCase()}:`);
                if (clsData.definition) {
                    console.log(`    Definition: ${clsData.definition.substring(0, 80)}...`);
                }
                if (clsData.generalFormula) {
                    console.log(`    Formula: ${clsData.generalFormula}`);
                }
                if (clsData.hybridization) {
                    console.log(`    Hybridization: ${clsData.hybridization}`);
                }
            }
        });
    } else {
        console.log('⚠ Warning: No classification data found');
    }

    console.log('');

    // Verify chemical tests
    if (result.content.chemicalTests) {
        console.log('✓ Chemical tests data present');
        const testKeys = Object.keys(result.content.chemicalTests);
        console.log(`  Tests available: ${testKeys.join(', ')}`);
    } else {
        console.log('ℹ No chemical tests section (expected for some topics)');
    }

    console.log('');

    // Verify examples
    if (result.content.examples) {
        console.log(`✓ Examples present: ${result.content.examples.length} compound(s)`);
        result.content.examples.forEach(ex => {
            console.log(`    • ${ex.name} (${ex.type}) — ${ex.formula || 'no formula'}`);
        });
    } else {
        console.log('⚠ Warning: No examples found');
    }

    console.log('');

    // Check related experiments
    if (result.experiments && result.experiments.length > 0) {
        console.log(`✓ Related experiments: ${result.experiments.length}`);
        result.experiments.forEach(exp => {
            console.log(`    • ${exp.name} [${exp.category}]`);
        });
    } else {
        console.log('ℹ No directly linked experiments (normal for hydrocarbons)');
    }

    console.log('');
    return result;
}

// ========================================
// TEST 3: HYDROCARBON CONTENT FILTERING
// ========================================

async function testContentFiltering() {
    console.log('=== TEST 3: Content Filtering ===\n');

    const workbook = new EnhancedOrganicChemistryWorkbook({
        includeDiagrams: false,
        includeExperiments: true
    });

    console.log('Testing filtered content (focusing on alkenes)...\n');

    const result = await workbook.handleOrganicChemistryProblem({
        topic: 'hydrocarbons',
        parameters: {
            specificItems: ['alkene', 'ethene', 'double bond'],
            difficulty: 'intermediate',
            compoundClass: 'alkenes'
        },
        context: {
            focus: 'alkenes and addition reactions'
        }
    });

    console.log('✓ Filtered content generated\n');

    console.log('Content sections available after filtering:');
    const sections = Object.keys(result.content).filter(key => {
        const val = result.content[key];
        return val !== null && val !== undefined;
    });
    sections.forEach(section => {
        console.log(`  • ${section}`);
    });
    console.log('');

    // Check that alkene section exists in classification
    const classification = result.content.classification;
    if (classification) {
        if (classification.alkenes) {
            console.log('✓ Alkene classification data retained after filtering');
            console.log(`  General formula: ${classification.alkenes.generalFormula || 'N/A'}`);
            if (classification.alkenes.reactions) {
                const rxnKeys = Object.keys(classification.alkenes.reactions);
                console.log(`  Reactions: ${rxnKeys.join(', ')}`);
            }
        }

        if (classification.alkanes) {
            console.log('ℹ Alkane data also present (filter is non-destructive for nested objects)');
        }
    }

    console.log('');

    // Test a second filter — aromatic only
    console.log('Testing filtered content (focusing on arenes/benzene)...\n');

    const result2 = await workbook.handleOrganicChemistryProblem({
        topic: 'hydrocarbons',
        parameters: {
            specificItems: ['benzene', 'aromatic', 'arene'],
            difficulty: 'advanced'
        },
        context: {
            focus: 'aromatic chemistry'
        }
    });

    console.log('✓ Arene-filtered content generated');
    if (result2.content.classification?.arenes) {
        const arenes = result2.content.classification.arenes;
        console.log('✓ Arene section present');
        if (arenes.benzeneStructure) {
            console.log(`  Benzene formula: ${arenes.benzeneStructure.formula}`);
            console.log(`  Stability note: ${arenes.benzeneStructure.stability?.substring(0, 80) || 'N/A'}...`);
        }
        if (arenes.reactions?.electrophilicSubstitution) {
            const rxns = Object.keys(arenes.reactions.electrophilicSubstitution);
            console.log(`  EAS reactions: ${rxns.join(', ')}`);
        }
    }

    console.log('');
}

// ========================================
// TEST 4: HALOGENATION EXPERIMENT
// ========================================

async function testHalogenationExperiment() {
    console.log('=== TEST 4: Halogenation Experiment ===\n');

    const workbook = new EnhancedOrganicChemistryWorkbook({
        includeExperiments: true
    });

    console.log('Fetching halogenation of alkanes experiment...\n');

    const result = await workbook.handleOrganicChemistryProblem({
        topic: 'halogenation',
        requestType: 'experiment',
        experimentId: 'halogenation_alkanes'
    });

    const exp = result.experiment;

    if (!exp) {
        console.log('✗ Experiment not found');
        return;
    }

    console.log(`✓ Experiment found: ${exp.name}\n`);

    // Historical background
    if (exp.historicalBackground) {
        const hb = exp.historicalBackground;
        console.log('Historical Background:');
        console.log(`  Scientist:    ${hb.scientist || 'N/A'}`);
        console.log(`  Significance: ${hb.significance || 'N/A'}`);
        console.log(`  Industrial:   ${hb.industrialImportance || 'N/A'}`);
        console.log('');
    }

    // Lab experiment overview
    if (exp.labExperiment) {
        const lab = exp.labExperiment;
        console.log('Lab Experiment Overview:');
        console.log(`  Title:      ${lab.title}`);
        console.log(`  Hypothesis: ${lab.hypothesis?.substring(0, 100)}...`);
        console.log(`  Purpose:    ${lab.purpose?.substring(0, 100)}...`);
        console.log('');

        if (lab.variables) {
            console.log('Variables:');
            console.log(`  Independent: ${lab.variables.independent}`);
            console.log(`  Dependent:   ${lab.variables.dependent}`);
            if (lab.variables.controlled) {
                console.log(`  Controlled:  ${Array.isArray(lab.variables.controlled)
                    ? lab.variables.controlled.join(', ')
                    : lab.variables.controlled}`);
            }
            console.log('');
        }

        if (lab.safetyPrecautions) {
            console.log(`Safety Precautions: ${lab.safetyPrecautions.length} listed`);
            console.log(`  ⚠ First precaution: ${lab.safetyPrecautions[0]}`);
            console.log('');
        }

        if (lab.expectedResults) {
            console.log('Expected Results:');
            Object.entries(lab.expectedResults).forEach(([key, val]) => {
                console.log(`  ${key}: ${val}`);
            });
            console.log('');
        }

        if (lab.reactionEquation) {
            console.log('Reaction Equations:');
            Object.entries(lab.reactionEquation).forEach(([step, eq]) => {
                console.log(`  ${step}: ${eq}`);
            });
            console.log('');
        }

        if (lab.conclusions) {
            console.log(`Conclusions: ${lab.conclusions.length} points`);
            lab.conclusions.slice(0, 3).forEach((c, i) => {
                console.log(`  ${i + 1}. ${c}`);
            });
            console.log('');
        }

        if (lab.realWorldApplications) {
            console.log(`Real-world applications: ${lab.realWorldApplications.length}`);
            lab.realWorldApplications.slice(0, 2).forEach(app => {
                console.log(`  • ${app}`);
            });
            console.log('');
        }
    }

    // Content sections
    console.log(`Workbook content sections generated: ${result.content.sections.length}`);
    result.content.sections.forEach(section => {
        const rowCount = Array.isArray(section.data) ? section.data.length : 0;
        console.log(`  • ${section.title} (${rowCount} rows)`);
    });

    console.log('');
}

// ========================================
// TEST 5: DISTILLATION EXPERIMENT
// ========================================

async function testDistillationExperiment() {
    console.log('=== TEST 5: Distillation Experiment ===\n');

    const workbook = new EnhancedOrganicChemistryWorkbook({
        includeExperiments: true
    });

    console.log('Fetching distillation experiment by topic search...\n');

    const result = await workbook.handleOrganicChemistryProblem({
        topic: 'distillation',
        requestType: 'experiment'
    });

    const exp = result.experiment;

    if (!exp) {
        console.log('✗ Distillation experiment not found');
        return;
    }

    console.log(`✓ Experiment found: ${exp.name}\n`);

    if (exp.historicalBackground) {
        console.log('Historical Background:');
        console.log(`  Scientist:    ${exp.historicalBackground.scientist || 'N/A'}`);
        console.log(`  Significance: ${exp.historicalBackground.significance || 'N/A'}`);
        console.log('');
    }

    if (exp.labExperiment) {
        const lab = exp.labExperiment;
        console.log(`Title:      ${lab.title}`);
        console.log(`Hypothesis: ${lab.hypothesis?.substring(0, 110)}...`);
        console.log('');

        if (lab.materials) {
            console.log(`Materials: ${lab.materials.length} items listed`);
        }

        if (lab.dataTable) {
            console.log('\nData Table:');
            lab.dataTable.forEach((row, i) => {
                console.log(`  ${i === 0 ? '[HEADER]' : '       '} ${row.join(' | ')}`);
            });
        }

        if (lab.analysis) {
            console.log('\nAnalysis points:');
            (Array.isArray(lab.analysis) ? lab.analysis : Object.values(lab.analysis).flat())
                .forEach(point => console.log(`  • ${point}`));
        }
    }

    console.log('');
}

// ========================================
// TEST 6: CONTENT VALIDATION
// ========================================

async function testContentValidation() {
    console.log('=== TEST 6: Content Validation ===\n');

    const workbook = new EnhancedOrganicChemistryWorkbook({
        includeDiagrams: false,
        includeExperiments: true,
        includeCommonMisconceptions: true,
        assessmentFeedback: true
    });

    const result = await workbook.handleOrganicChemistryProblem({
        topic: 'hydrocarbons'
    });

    console.log('Validating hydrocarbon content structure...\n');

    const validation = workbook.validateOrganicChemistryContent(result.content);

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
        console.log('  ✓ No issues found — content is complete');
    }

    console.log('');

    // Content completeness score
    const completeness = workbook.calculateOrganicContentCompleteness();
    console.log(`Content Completeness Score: ${completeness}%`);

    // Quality metrics
    const quality = workbook.getOrganicContentQualityMetrics();
    console.log('\nQuality Metrics:');
    Object.entries(quality).forEach(([key, value]) => {
        const icon = value === true ? '✓' : value === false ? '✗' : 'ℹ';
        console.log(`  ${icon} ${key}: ${value}`);
    });

    console.log('');

    // Content summary
    const summary = workbook.generateOrganicContentSummary();
    if (summary) {
        console.log('Content Summary:');
        console.log(`  Topic:      ${summary.topic}`);
        console.log(`  Category:   ${summary.category}`);
        console.log(`  Difficulty: ${summary.difficulty}`);
        console.log(`  Summary:    ${summary.summary?.substring(0, 100)}...`);
        console.log(`  Key Points: ${summary.keyPoints.join(', ')}`);
        console.log('  Coverage:');
        Object.entries(summary.coverage).forEach(([key, value]) => {
            console.log(`    ${key}: ${value}`);
        });
    }

    console.log('');

    // Difficulty assessment
    const difficulty = workbook.assessOrganicContentDifficulty();
    console.log(`Assessed Difficulty Level: ${difficulty}`);

    console.log('');
}

// ========================================
// TEST 7: LEARNING OBJECTIVES AND STUDY TIPS
// ========================================

async function testLearningSupport() {
    console.log('=== TEST 7: Learning Objectives and Study Tips ===\n');

    const workbook = new EnhancedOrganicChemistryWorkbook({
        includeDiagrams: false,
        metacognitiveSupport: true
    });

    await workbook.handleOrganicChemistryProblem({
        topic: 'hydrocarbons'
    });

    // Learning objectives
    const objectives = workbook.generateOrganicLearningObjectives();
    console.log(`Learning Objectives (${objectives.length}):`);
    objectives.forEach((obj, i) => {
        console.log(`  ${i + 1}. ${obj}`);
    });
    console.log('');

    // Study tips
    const tips = workbook.generateOrganicStudyTips();
    console.log(`Study Tips (${tips.length}):`);
    tips.forEach((tip, i) => {
        console.log(`  ${i + 1}. ${tip}`);
    });
    console.log('');

    // Prerequisites
    const prereqs = workbook.identifyOrganicPrerequisites();
    console.log(`Prerequisites (${prereqs.length}):`);
    prereqs.forEach(p => console.log(`  • ${p}`));
    console.log('');

    // Topic relevance
    const relevance = workbook.getTopicRelevance('hydrocarbons');
    console.log(`Topic Relevance:\n  ${relevance}`);
    console.log('');

    // Suggested related topics
    const related = workbook.suggestRelatedTopics();
    console.log(`Suggested Related Topics (${related.length}):`);
    related.forEach(t => {
        console.log(`  • ${t.name}: ${t.description}`);
    });
    console.log('');

    // Analogies
    console.log('Organic Chemistry Analogies:');
    const analogyConcepts = ['chirality', 'aromaticity', 'markovnikovRule', 'carbocation', 'polymer'];
    analogyConcepts.forEach(concept => {
        console.log(`  ${concept}: ${workbook.generateOrganicAnalogy(concept)}`);
    });
    console.log('');

    // IUPAC process timeline
    const timeline = workbook.generateOrganicProcessTimeline('IUPAC Naming Procedure');
    console.log(`IUPAC Naming Process Timeline (${timeline.length} steps):`);
    timeline.forEach(step => {
        console.log(`  ${step.step}: ${step.action}`);
    });
    console.log('');
}

// ========================================
// TEST 8: MISCONCEPTIONS DATABASE
// ========================================

async function testMisconceptionsDatabase() {
    console.log('=== TEST 8: Hydrocarbon Misconceptions ===\n');

    const workbook = new EnhancedOrganicChemistryWorkbook({
        includeCommonMisconceptions: true
    });

    const misconceptions = workbook.getMisconceptions('hydrocarbons');

    if (!misconceptions || Object.keys(misconceptions).length === 0) {
        console.log('⚠ No misconceptions found for hydrocarbons');
        return;
    }

    console.log(`Misconception areas found: ${Object.keys(misconceptions).length}\n`);

    Object.entries(misconceptions).forEach(([area, items]) => {
        console.log(`  ${area}:`);
        if (Array.isArray(items)) {
            items.forEach(mc => {
                console.log(`    ✗ ${mc}`);
            });
        } else if (typeof items === 'object') {
            Object.entries(items).forEach(([subArea, subList]) => {
                console.log(`    [${subArea}]`);
                if (Array.isArray(subList)) {
                    subList.forEach(mc => console.log(`      ✗ ${mc}`));
                }
            });
        }
        console.log('');
    });

    // Clarification strategies
    console.log('Available Clarification Strategies:');
    Object.entries(workbook.clarificationStrategies).forEach(([strategy, data]) => {
        console.log(`  • ${strategy}: ${data.method} (Effectiveness: ${data.effectiveness})`);
    });
    console.log('');
}

// ========================================
// TEST 9: ASSESSMENT QUESTIONS
// ========================================

async function testAssessmentQuestions() {
    console.log('=== TEST 9: Bloom\'s Taxonomy Assessment Questions ===\n');

    const workbook = new EnhancedOrganicChemistryWorkbook({
        assessmentFeedback: true
    });

    const questions = workbook.getAssessmentQuestions('hydrocarbons');

    if (!questions || Object.keys(questions).length === 0) {
        console.log('⚠ No assessment questions found for hydrocarbons');
        return;
    }

    const bloomLevels = ['remember', 'understand', 'apply', 'analyze', 'evaluate', 'create'];

    bloomLevels.forEach(level => {
        if (questions[level]) {
            const rubric = workbook.assessmentRubrics?.knowledgeLevel?.[level];
            console.log(`  ${level.toUpperCase()} — ${rubric?.description || ''}`);
            console.log(`  Q: ${questions[level]}`);
            console.log('');
        }
    });
}

// ========================================
// TEST 10: WORKBOOK STATUS AND STRUCTURE
// ========================================

async function testWorkbookStatus() {
    console.log('=== TEST 10: Workbook Status and Structure ===\n');

    const workbook = new EnhancedOrganicChemistryWorkbook({
        includeDiagrams: false,
        includeExperiments: true,
        includeCommonMisconceptions: true,
        metacognitiveSupport: true,
        contextualLearning: true,
        assessmentFeedback: true
    });

    await workbook.handleOrganicChemistryProblem({
        topic: 'hydrocarbons'
    });

    // Workbook status
    const status = workbook.getWorkbookStatus();
    console.log('Workbook Status:');
    Object.entries(status).forEach(([key, value]) => {
        const icon = value === true ? '✓'
            : value === false ? '✗'
            : value === null ? '-'
            : 'ℹ';
        console.log(`  ${icon} ${key}: ${value}`);
    });
    console.log('');

    // Content hierarchy
    const hierarchy = workbook.generateOrganicContentHierarchy();
    if (hierarchy) {
        console.log(`Content Hierarchy — Root: ${hierarchy.root}`);
        hierarchy.children.forEach(child => {
            const sub = child.subItems?.length > 0 ? ` [${child.subItems.join(', ')}]` : '';
            const count = child.count ? ` (${child.count} items)` : '';
            console.log(`  • ${child.name}${sub}${count}`);
        });
    }
    console.log('');

    // Workbook sections
    if (workbook.currentWorkbook) {
        console.log(`Workbook Sections Generated: ${workbook.currentWorkbook.sections.length}`);
        workbook.currentWorkbook.sections.forEach(section => {
            const rowCount = Array.isArray(section.data) ? section.data.length : '—';
            console.log(`  • [${section.type}] ${section.title} — ${rowCount} rows`);
        });
    }
    console.log('');

    // Glossary
    const glossary = workbook.generateGlossary();
    const glossaryKeys = Object.keys(glossary);
    console.log(`Glossary Terms Generated: ${glossaryKeys.length}`);
    glossaryKeys.slice(0, 5).forEach(term => {
        console.log(`  • ${term}: ${String(glossary[term]).substring(0, 60)}...`);
    });
    if (glossaryKeys.length > 5) {
        console.log(`  ... and ${glossaryKeys.length - 5} more`);
    }

    console.log('');

    // Diagram data
    const diagramKeys = workbook.getRelevantOrganicDiagrams('hydrocarbons');
    console.log(`Diagram Keys for Hydrocarbons: ${diagramKeys.length}`);
    diagramKeys.forEach(key => {
        const caption = workbook.getDiagramCaption(key);
        console.log(`  • ${key}`);
        console.log(`    Caption: ${caption.substring(0, 80)}...`);
    });

    console.log('');
}

// ========================================
// COMPLETE TEST SUITE
// ========================================

async function runCompleteTestSuite() {
    console.log('\n╔═══════════════════════════════════════════════════════╗');
    console.log('║   ORGANIC CHEMISTRY — HYDROCARBONS TEST SUITE        ║');
    console.log('╚═══════════════════════════════════════════════════════╝\n');

    try {
        // Test 1: List all hydrocarbon experiments
        await testAllHydrocarbonExperiments();
        console.log('─'.repeat(55) + '\n');

        // Test 2: Full content generation
        await testHydrocarbonContentGeneration();
        console.log('─'.repeat(55) + '\n');

        // Test 3: Content filtering
        await testContentFiltering();
        console.log('─'.repeat(55) + '\n');

        // Test 4: Halogenation experiment
        await testHalogenationExperiment();
        console.log('─'.repeat(55) + '\n');

        // Test 5: Distillation experiment
        await testDistillationExperiment();
        console.log('─'.repeat(55) + '\n');

        // Test 6: Content validation
        await testContentValidation();
        console.log('─'.repeat(55) + '\n');

        // Test 7: Learning support
        await testLearningSupport();
        console.log('─'.repeat(55) + '\n');

        // Test 8: Misconceptions
        await testMisconceptionsDatabase();
        console.log('─'.repeat(55) + '\n');

        // Test 9: Assessment questions
        await testAssessmentQuestions();
        console.log('─'.repeat(55) + '\n');

        // Test 10: Workbook status
        await testWorkbookStatus();
        console.log('─'.repeat(55) + '\n');

        console.log('✓ ALL TESTS COMPLETED SUCCESSFULLY!\n');

    } catch (error) {
        console.error('\n✗ TEST SUITE FAILED:', error.message);
        console.error('Stack trace:', error.stack);
        process.exit(1);
    }
}

// ========================================
// COMMAND LINE DISPATCH
// ========================================

const testMode = process.argv[2] || 'all';

switch (testMode) {
    case 'all':
        runCompleteTestSuite();
        break;

    case 'list':
        console.log('\nListing all hydrocarbon-related experiments...\n');
        testAllHydrocarbonExperiments()
            .then(() => console.log('✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error.message);
                process.exit(1);
            });
        break;

    case 'content':
        console.log('\nTesting hydrocarbon content generation...\n');
        testHydrocarbonContentGeneration()
            .then(() => console.log('✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error.message);
                process.exit(1);
            });
        break;

    case 'filter':
        console.log('\nTesting content filtering...\n');
        testContentFiltering()
            .then(() => console.log('✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error.message);
                process.exit(1);
            });
        break;

    case 'halogenation':
        console.log('\nTesting halogenation experiment...\n');
        testHalogenationExperiment()
            .then(() => console.log('✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error.message);
                process.exit(1);
            });
        break;

    case 'distillation':
        console.log('\nTesting distillation experiment...\n');
        testDistillationExperiment()
            .then(() => console.log('✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error.message);
                process.exit(1);
            });
        break;

    case 'validate':
        console.log('\nTesting content validation...\n');
        testContentValidation()
            .then(() => console.log('✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error.message);
                process.exit(1);
            });
        break;

    case 'learning':
        console.log('\nTesting learning support features...\n');
        testLearningSupport()
            .then(() => console.log('✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error.message);
                process.exit(1);
            });
        break;

    case 'misconceptions':
        console.log('\nTesting misconceptions database...\n');
        testMisconceptionsDatabase()
            .then(() => console.log('✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error.message);
                process.exit(1);
            });
        break;

    case 'assessment':
        console.log('\nTesting assessment questions...\n');
        testAssessmentQuestions()
            .then(() => console.log('✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error.message);
                process.exit(1);
            });
        break;

    case 'status':
        console.log('\nTesting workbook status and structure...\n');
        testWorkbookStatus()
            .then(() => console.log('✓ Test completed!'))
            .catch(error => {
                console.error('\n✗ Test failed:', error.message);
                process.exit(1);
            });
        break;

    default:
        console.error(`\nUnknown test mode: ${testMode}`);
        console.log('\nAvailable modes:');
        console.log('  all            - Run complete test suite (default)');
        console.log('  list           - List all hydrocarbon-related experiments');
        console.log('  content        - Test full hydrocarbon content generation');
        console.log('  filter         - Test content filtering (alkenes, arenes)');
        console.log('  halogenation   - Test halogenation of alkanes experiment');
        console.log('  distillation   - Test distillation experiment');
        console.log('  validate       - Test content validation and quality metrics');
        console.log('  learning       - Test learning objectives, tips, analogies');
        console.log('  misconceptions - Test misconceptions database');
        console.log('  assessment     - Test Bloom\'s taxonomy assessment questions');
        console.log('  status         - Test workbook status, sections, and diagrams');
        console.log('\nUsage: node test-hydrocarbon-content.js [mode]\n');
        process.exit(1);
}

/**
 * Usage:
 *
 * # Run complete test suite (all 10 tests)
 * node test-hydrocarbon-content.js all
 *
 * # List all hydrocarbon-related experiments
 * node test-hydrocarbon-content.js list
 *
 * # Test full hydrocarbon content generation
 * node test-hydrocarbon-content.js content
 *
 * # Test content filtering (alkenes focus, arenes focus)
 * node test-hydrocarbon-content.js filter
 *
 * # Test halogenation of alkanes experiment (free radical mechanism)
 * node test-hydrocarbon-content.js halogenation
 *
 * # Test distillation experiment (separation techniques)
 * node test-hydrocarbon-content.js distillation
 *
 * # Test content validation and quality metrics
 * node test-hydrocarbon-content.js validate
 *
 * # Test learning objectives, study tips, analogies, timelines
 * node test-hydrocarbon-content.js learning
 *
 * # Test misconceptions database for hydrocarbons
 * node test-hydrocarbon-content.js misconceptions
 *
 * # Test Bloom's taxonomy assessment questions
 * node test-hydrocarbon-content.js assessment
 *
 * # Test workbook status, sections, hierarchy, and diagram keys
 * node test-hydrocarbon-content.js status
 */
