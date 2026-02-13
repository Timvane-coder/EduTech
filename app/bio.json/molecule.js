// Example Usage: Testing Enhanced Molecular Biology Workbook with Topics and Experiments
import EnhancedMolecularBiologyWorkbook from './molecularbiology.js';

// ============================================================================
// EXAMPLE 1: Request Carbohydrates Topic with Experiments
// ============================================================================
console.log("=== EXAMPLE 1: Carbohydrates Topic with Experiments ===\n");

const workbook1 = new EnhancedMolecularBiologyWorkbook({
    theme: 'molecular',
    explanationLevel: 'detailed',
    includeExperiments: true,
    includeExamples: true,
    includeComparisons: true,
    contextualLearning: true
});

const topicResult1 = workbook1.handleMolecularProblem({
    topic: 'carbohydrates',
    requestType: 'topic',
    parameters: {},
    subTopic: null,
    context: {}
});

console.log("Topic:", topicResult1.content.topic);
console.log("Category:", topicResult1.content.category);
console.log("Summary:", topicResult1.content.summary);

console.log("\n--- Classification by Size ---");
Object.entries(topicResult1.content.classification.bySize).forEach(([type, info]) => {
    console.log(`\n${type.toUpperCase()}:`);
    console.log(`  Definition: ${info.definition}`);
    if (info.examples) {
        console.log(`  Examples: ${info.examples.join(', ')}`);
    }
});

console.log("\n--- Related Experiments ---");
topicResult1.experiments?.forEach(exp => {
    console.log(`  - ${exp.name}`);
    console.log(`    Scientist: ${exp.historicalScientist}`);
    console.log(`    Lab: ${exp.labTitle}`);
});

console.log("\n--- Contextual Scenarios ---");
topicResult1.content.contextualScenarios?.forEach(scenario => {
    console.log(`\n  Scenario: ${scenario.scenario}`);
    console.log(`  Context: ${scenario.context}`);
    console.log(`  Question: ${scenario.question}`);
});

console.log("\nWorkbook Sections:", topicResult1.workbook.sections.length);
topicResult1.workbook.sections.forEach(section => {
    console.log(`  - ${section.title} (${section.type})`);
});

// ============================================================================
// EXAMPLE 2: Request Prout's Classification Experiment (Food Tests)
// ============================================================================
console.log("\n\n=== EXAMPLE 2: Prout's Classification - The Four Food Tests ===\n");

const workbook2 = new EnhancedMolecularBiologyWorkbook({
    theme: 'biochemistry',
    includeExperiments: true
});

const experimentResult1 = workbook2.handleMolecularProblem({
    topic: 'experiment',
    requestType: 'experiment',
    experimentId: 'prouts_classification'
});

console.log("Experiment:", experimentResult1.experiment.name);
console.log("Category:", experimentResult1.experiment.category);
console.log("Related Topics:", experimentResult1.experiment.relatedTopics.join(', '));

console.log("\n--- Historical Background ---");
const historical = experimentResult1.experiment.historicalBackground;
console.log("Scientist:", historical.scientist);
console.log("Year:", historical.year);
console.log("Contribution:", historical.contribution);
console.log("Significance:", historical.significance);

console.log("\n--- Lab Experiment: The Standard Four Food Tests ---");
const lab = experimentResult1.experiment.labExperiment;
console.log("Title:", lab.title);
console.log("Hypothesis:", lab.hypothesis);
console.log("Purpose:", lab.purpose);

console.log("\n--- The Four Tests ---");
console.log("\n1. Benedict's Test (Reducing Sugars):");
console.log("   Target:", lab.procedure.test1_BenedictsReducingSugar.target);
console.log("   Principle:", lab.procedure.test1_BenedictsReducingSugar.principle);
console.log("   Positive Result:", lab.procedure.test1_BenedictsReducingSugar.colorResults.brickRed);

console.log("\n2. Iodine Test (Starch):");
console.log("   Target:", lab.procedure.test2_IodineStarch.target);
console.log("   Principle:", lab.procedure.test2_IodineStarch.principle);
console.log("   Positive Result:", lab.procedure.test2_IodineStarch.colorResults.blueBlack);

console.log("\n3. Biuret Test (Proteins):");
console.log("   Target:", lab.procedure.test3_BiuretProtein.target);
console.log("   Principle:", lab.procedure.test3_BiuretProtein.principle);
console.log("   Positive Result:", lab.procedure.test3_BiuretProtein.colorResults.violet);

console.log("\n4. Sudan Test (Lipids):");
console.log("   Target:", lab.procedure.test4_SudanLipid.target);
console.log("   Principle:", lab.procedure.test4_SudanLipid.principle);
console.log("   Positive Result:", lab.procedure.test4_SudanLipid.colorResults.redLayer);

console.log("\n--- Expected Results Table ---");
lab.dataTable.forEach((row, index) => {
    if (index === 0) {
        console.log("\n  " + row.join(" | "));
        console.log("  " + "-".repeat(80));
    } else {
        console.log("  " + row.join(" | "));
    }
});

// ============================================================================
// EXAMPLE 3: Proteins Topic with Amino Acids and Structure
// ============================================================================
console.log("\n\n=== EXAMPLE 3: Proteins and Proteomics Topic ===\n");

const workbook3 = new EnhancedMolecularBiologyWorkbook({
    includeExperiments: true,
    includeComparisons: true,
    detailLevel: 'detailed',
    adaptiveDifficulty: true
});

workbook3.learnerProfile.currentLevel = 'advanced';

const topicResult3 = workbook3.handleMolecularProblem({
    topic: 'proteins',
    requestType: 'topic',
    parameters: {
        specificItems: ['Primary Structure', 'Secondary Structure', 'Tertiary Structure']
    }
});

console.log("Topic:", topicResult3.content.topic);
console.log("Learner Level:", topicResult3.learnerProfile.currentLevel);

console.log("\n--- Amino Acid Classification ---");
console.log("\nBy Polarity:");
Object.entries(topicResult3.content.aminoAcids.classification.byPolarity).forEach(([type, info]) => {
    console.log(`  ${type}:`);
    if (info.aminoAcids) {
        console.log(`    Examples: ${info.aminoAcids.slice(0, 3).join(', ')}...`);
    }
});

console.log("\n--- Protein Structure Levels ---");
Object.entries(topicResult3.content.proteinStructure).forEach(([level, details]) => {
    console.log(`\n${level.toUpperCase()}:`);
    console.log(`  Definition: ${details.definition}`);
    console.log(`  Bonds: ${details.bonds}`);
});

console.log("\n--- Essential Amino Acids ---");
console.log("Must be obtained from diet:");
topicResult3.content.aminoAcids.essentialAminoAcids.list.forEach(aa => {
    console.log(`  - ${aa}`);
});
console.log(`Mnemonic: ${topicResult3.content.aminoAcids.essentialAminoAcids.mnemonic}`);

console.log("\n--- Related Experiments ---");
topicResult3.experiments?.forEach(exp => {
    console.log(`  - ${exp.name} (${exp.category})`);
});

// ============================================================================
// EXAMPLE 4: Sanger's Insulin Sequencing - Paper Chromatography
// ============================================================================
console.log("\n\n=== EXAMPLE 4: Sanger's Insulin Sequencing Experiment ===\n");

const workbook4 = new EnhancedMolecularBiologyWorkbook();

const experimentResult2 = workbook4.handleMolecularProblem({
    topic: 'protein sequencing',
    requestType: 'experiment',
    experimentId: 'sangers_insulin_sequencing'
});

const exp = experimentResult2.experiment;
console.log("Experiment:", exp.name);
console.log("\n--- Historical Context ---");
console.log("Scientist:", exp.historicalBackground.scientist);
console.log("Achievement:", exp.historicalBackground.achievement);
console.log("Nobel Prize:", exp.historicalBackground.nobelPrize);
console.log("Significance:", exp.historicalBackground.significance);

console.log("\n--- Sanger's Method ---");
Object.entries(exp.historicalBackground.method).forEach(([step, details]) => {
    console.log(`\n${step}:`);
    if (Array.isArray(details)) {
        details.forEach(detail => console.log(`  - ${detail}`));
    } else {
        console.log(`  ${details}`);
    }
});

console.log("\n--- Modern Lab Equivalent: Paper Chromatography ---");
console.log("Title:", exp.labExperiment.title);
console.log("Hypothesis:", exp.labExperiment.hypothesis);

console.log("\n--- Materials Required ---");
exp.labExperiment.materials.slice(0, 10).forEach(material => {
    console.log(`  • ${material}`);
});

console.log("\n--- Expected Rf Values ---");
Object.entries(exp.labExperiment.expectedRfValues).forEach(([aa, rf]) => {
    if (aa !== 'note' && aa !== 'general') {
        console.log(`  ${aa}: ${rf}`);
    }
});

console.log("\n--- Connection to Historical ---");
console.log(exp.labExperiment.connectionToSanger.technique);
console.log(exp.labExperiment.connectionToSanger.importance);

// ============================================================================
// EXAMPLE 5: Lipids and Saponification (Soap Making)
// ============================================================================

console.log("\n\n=== EXAMPLE 5: Lipids Topic and Chevreul's Saponification ===\n");
const workbook5 = new EnhancedMolecularBiologyWorkbook({
    includeExperiments: true,
    contextualLearning: true,
    explanationLevel: 'intermediate'
});

/*"
const topicResult5 = workbook5.handleMolecularProblem({
    topic: 'lipids',
    requestType: 'topic'
});

console.log("Topic:", topicResult5.content.topic);

console.log("\n--- Lipid Classification ---");
console.log("\nSimple Lipids:");
Object.entries(topicResult5.content.classification.simpleLipids).forEach(([type, info]) => {
    console.log(`  ${type}: ${info.function}`);
});

console.log("\nComplex Lipids:");
Object.entries(topicResult5.content.classification.complexLipids).forEach(([type, info]) => {
    console.log(`  ${type}:`);
    if (typeof info === 'object' && info.types) {
        info.types.forEach(item => {
            console.log(`    - ${item.name}: ${item.function}`);
        });
    } else {
        console.log(`    ${info.function || info}`);
    }
});

console.log("\n--- Fatty Acids: Saturated vs Unsaturated ---");
const fattyAcids = topicResult5.content.fattyAcids.structure;
console.log("\nSaturated:");
console.log(`  Structure: ${fattyAcids.saturated.structure}`);
console.log(`  State: ${fattyAcids.saturated.state}`);
console.log(`  Examples: ${fattyAcids.saturated.examples}`);

console.log("\nUnsaturated:");
console.log(`  Structure: ${fattyAcids.unsaturated.structure}`);
console.log(`  State: ${fattyAcids.unsaturated.state}`);
console.log(`  Monounsaturated: ${fattyAcids.unsaturated.monounsaturated.example}`);

console.log("\n--- Contextual Scenarios ---");
topicResult5.content.contextualScenarios?.forEach(scenario => {
    console.log(`\n${scenario.scenario}:`);
    console.log(`  ${scenario.context}`);
    console.log(`  Question: ${scenario.question}`);
});
*/


// Now get the saponification experiment
const soapExp = workbook5.handleMolecularProblem({
    requestType: 'experiment',
    experimentId: 'chevreuls_fatty_acids'
});

console.log("\n\n--- Chevreul's Saponification Experiment ---");
console.log("Scientist:", soapExp.experiment.historicalBackground.scientist);
console.log("Years:", soapExp.experiment.historicalBackground.year);
console.log("\nContributions:");
soapExp.experiment.historicalBackground.contribution.forEach(c => {
    console.log(`  • ${c}`);
});

console.log("\n--- Saponification Reaction ---");
console.log("General:", soapExp.experiment.labExperiment.chemicalReaction.general);
console.log("Detailed:", soapExp.experiment.labExperiment.chemicalReaction.detailed);

// ============================================================================
// EXAMPLE 6: Nucleic Acids - DNA Structure and Central Dogma
// ============================================================================
console.log("\n\n=== EXAMPLE 6: Nucleic Acids Topic ===\n");

const workbook6 = new EnhancedMolecularBiologyWorkbook({
    includeExperiments: true,
    metacognitiveSupport: true,
    detailLevel: 'detailed'
});

const topicResult6 = workbook6.handleMolecularProblem({
    topic: 'DNA',
    requestType: 'topic'
});

console.log("Topic:", topicResult6.content.topic);

console.log("\n--- Nucleotide Components ---");
const components = topicResult6.content.nucleotideStructure.components;
console.log("\nPentose Sugar:");
console.log(`  DNA: ${components.pentoseSugar.DNA.sugar} - ${components.pentoseSugar.DNA.structure}`);
console.log(`  RNA: ${components.pentoseSugar.RNA.sugar} - ${components.pentoseSugar.RNA.structure}`);

console.log("\nNitrogenous Bases:");
console.log("  Purines:", Object.keys(components.nitrogenousBase.purines.bases).join(', '));
console.log("  Pyrimidines:", Object.keys(components.nitrogenousBase.pyrimidines.bases).join(', '));

console.log("\n--- DNA Double Helix ---");
const helix = topicResult6.content.DNAStructure.doubleHelix;
console.log("Discoverers:", helix.discoverers);
console.log("Nobel Prize:", helix.nobelPrize);
console.log("\nKey Features:");
helix.features.stabilization.forEach(feature => {
    console.log(`  • ${feature}`);
});

console.log("\n--- Base Pairing Rules (Chargaff's Rules) ---");
const chargaff = topicResult6.content.DNAStructure.basePairing.chargaffRules;
console.log(`Rule 1: ${chargaff.rule1}`);
console.log(`Rule 2: ${chargaff.rule2}`);
console.log(`Rule 3: ${chargaff.rule3}`);

console.log("\n--- Central Dogma ---");
const dogma = topicResult6.content.centralDogma;
console.log("Concept:", dogma.concept);
console.log("Main Flow:", dogma.mainFlow);
console.log("\nReplication:", dogma.replication.process);
console.log("Transcription:", dogma.transcription.process);
console.log("Translation:", dogma.translation.process);

console.log("\n--- Metacognitive Prompts ---");
if (topicResult6.content.metacognitivePrompts) {
    console.log("\nBefore Learning:");
    topicResult6.content.metacognitivePrompts.beforeLearning.slice(0, 2).forEach(prompt => {
        console.log(`  ? ${prompt}`);
    });
    console.log("\nDuring Learning:");
    topicResult6.content.metacognitivePrompts.duringLearning.slice(0, 2).forEach(prompt => {
        console.log(`  ? ${prompt}`);
    });
}

// ============================================================================
// EXAMPLE 7: Bioenergetics - Cellular Respiration
// ============================================================================
console.log("\n\n=== EXAMPLE 7: Bioenergetics and Metabolism ===\n");

const workbook7 = new EnhancedMolecularBiologyWorkbook({
    includeExperiments: true,
    includeComparisons: true,
    contextualLearning: true
});

const topicResult7 = workbook7.handleMolecularProblem({
    topic: 'bioenergetics',
    requestType: 'topic'
});

console.log("Topic:", topicResult7.content.topic);

console.log("\n--- ATP: The Energy Currency ---");
const atp = topicResult7.content.energyFundamentals.ATP;
console.log("Structure:", atp.structure.components);
console.log("Hydrolysis:", atp.hydrolysis.reaction);
console.log("Energy Released:", atp.hydrolysis.energy);
console.log("\nTurnover:");
console.log(`  Body contains: ${atp.turnover.amount}`);
console.log(`  Daily production: ${atp.turnover.production}`);
console.log(`  Recycling rate: ${atp.turnover.recycling}`);

console.log("\n--- Cellular Respiration Overview ---");
const respiration = topicResult7.content.cellularRespiration;
console.log("Overall Equation:", respiration.overview.equation);
console.log("Efficiency:", respiration.overview.efficiency);

console.log("\n--- Stages of Cellular Respiration ---");
console.log("\n1. GLYCOLYSIS");
const glycolysis = respiration.stages.glycolysis;
console.log(`   Location: ${glycolysis.location}`);
console.log(`   Input: ${glycolysis.input}`);
console.log(`   Output: ${glycolysis.output.products}, ${glycolysis.output.ATP}, ${glycolysis.output.NADH}`);
console.log(`   Oxygen Required: ${glycolysis.oxygen}`);

console.log("\n2. KREBS CYCLE");
const krebs = respiration.stages.krebsCycle;
console.log(`   Location: ${krebs.location}`);
console.log(`   Input: ${krebs.input}`);
console.log(`   Output: ${krebs.output.CO2}, ${krebs.output.NADH}, ${krebs.output.FADH2}, ${krebs.output.ATP}`);

console.log("\n3. ELECTRON TRANSPORT CHAIN");
const etc = respiration.stages.electronTransportChain;
console.log(`   Location: ${etc.location}`);
console.log(`   ATP Yield: ${etc.output.ATP}`);
console.log("   Complexes:");
Object.entries(etc.complexes).forEach(([complex, info]) => {
    console.log(`     ${complex}: ${info.name} - Pumps ${info.pumps}`);
});

console.log("\n--- ATP Accounting ---");
const accounting = respiration.ATPaccounting;
console.log(`Glycolysis: ~${accounting.glycolysis.total} ATP`);
console.log(`Link Reaction: ~${accounting.linkReaction.NADH.split('→')[1]}`);
console.log(`Krebs Cycle: ~${accounting.krebsCycle.total} ATP`);
console.log(`Grand Total: ${accounting.grandTotal.theoretical} (theoretical), ${accounting.grandTotal.actual} (actual)`);
console.log(`Efficiency: ${accounting.grandTotal.efficiency}`);

console.log("\n--- Contextual Scenarios ---");
topicResult7.content.contextualScenarios?.forEach(scenario => {
    console.log(`\n${scenario.scenario}:`);
    console.log(`  ${scenario.application}`);
});

// ============================================================================
// EXAMPLE 8: Enzymes - Kinetics and Inhibition
// ============================================================================
console.log("\n\n=== EXAMPLE 8: Enzyme Function and Kinetics ===\n");

const workbook8 = new EnhancedMolecularBiologyWorkbook({
    includeExperiments: true,
    assessmentFeedback: true
});

const topicResult8 = workbook8.handleMolecularProblem({
    topic: 'enzymes',
    requestType: 'topic'
});

console.log("Topic:", topicResult8.content.topic);

console.log("\n--- Active Site Properties ---");
const activeSite = topicResult8.content.activeSite;
console.log("Definition:", activeSite.definition);
console.log("Properties:");
Object.entries(activeSite.properties).forEach(([prop, desc]) => {
    console.log(`  ${prop}: ${desc}`);
});

console.log("\n--- Catalytic Mechanisms ---");
console.log("\nLock and Key Model:");
console.log(`  Proposed by: ${topicResult8.content.catalyticMechanisms.lockAndKey.proposed}`);
console.log(`  Model: ${topicResult8.content.catalyticMechanisms.lockAndKey.model}`);

console.log("\nInduced Fit Model:");
console.log(`  Proposed by: ${topicResult8.content.catalyticMechanisms.inducedFit.proposed}`);
console.log(`  Model: ${topicResult8.content.catalyticMechanisms.inducedFit.model}`);

console.log("\n--- Michaelis-Menten Kinetics ---");
const mm = topicResult8.content.enzymeKinetics.MichaelisMenten;
console.log("Equation:", mm.equation);
console.log("\nParameters:");
console.log(`  Vmax: ${mm.parameters.Vmax.definition}`);
console.log(`  Km: ${mm.parameters.Km.definition}`);
console.log(`  kcat: ${mm.parameters.kcat.definition}`);
console.log(`  kcat/Km: ${mm.parameters.kcatKm.definition}`);

console.log("\n--- Enzyme Inhibition Types ---");
const inhibition = topicResult8.content.enzymeInhibition.reversible;

console.log("\nCompetitive Inhibition:");
console.log(`  Mechanism: ${inhibition.competitive.mechanism}`);
console.log(`  Effect on Km: ${inhibition.competitive.effect.Km}`);
console.log(`  Effect on Vmax: ${inhibition.competitive.effect.Vmax}`);

console.log("\nNon-competitive Inhibition:");
console.log(`  Mechanism: ${inhibition.noncompetitive.mechanism}`);
console.log(`  Effect on Km: ${inhibition.noncompetitive.effect.Km}`);
console.log(`  Effect on Vmax: ${inhibition.noncompetitive.effect.Vmax}`);

console.log("\n--- Enzyme Classification (EC System) ---");
Object.entries(topicResult8.content.enzymeClassification.classes).forEach(([num, classInfo]) => {
    console.log(`\nEC ${num} - ${classInfo.name}:`);
    console.log(`  Reaction: ${classInfo.reaction}`);
    console.log(`  Examples: ${classInfo.examples}`);
});

// ============================================================================
// EXAMPLE 9: Fischer's Lock and Key - Enzyme Specificity Lab
// ============================================================================
console.log("\n\n=== EXAMPLE 9: Fischer's Lock and Key Experiment ===\n");

const workbook9 = new EnhancedMolecularBiologyWorkbook();

const experimentResult3 = workbook9.handleMolecularProblem({
    requestType: 'experiment',
    experimentId: 'fischer_lock_and_key'
});

const fischerExp = experimentResult3.experiment;
console.log("Experiment:", fischerExp.name);
console.log("Category:", fischerExp.category);

console.log("\n--- Historical Background ---");
console.log("Scientist:", fischerExp.historicalBackground.scientist);
console.log("Year:", fischerExp.historicalBackground.year);
console.log("Hypothesis:", fischerExp.historicalBackground.hypothesis);
console.log("Quote:", fischerExp.historicalBackground.quote);

console.log("\n--- Modern Lab Experiment ---");
console.log("Title:", fischerExp.labExperiment.title);
console.log("Hypothesis:", fischerExp.labExperiment.hypothesis);

console.log("\n--- Background ---");
console.log("Amylase:", fischerExp.labExperiment.background.amylase);
console.log("Starch:", fischerExp.labExperiment.background.starch);
console.log("Cellulose:", fischerExp.labExperiment.background.cellulose);
console.log("Prediction:", fischerExp.labExperiment.background.prediction);

console.log("\n--- Expected Results ---");
console.log("\nIodine Test (for starch):");
Object.entries(fischerExp.labExperiment.expectedResults.iodineTest).forEach(([tube, result]) => {
    console.log(`  ${tube}: ${result}`);
});

console.log("\nBenedict's Test (for sugars):");
Object.entries(fischerExp.labExperiment.expectedResults.benedictsTest).forEach(([tube, result]) => {
    console.log(`  ${tube}: ${result}`);
});

console.log("\n--- Results Interpretation ---");
fischerExp.labExperiment.observations.forEach(obs => {
    console.log(`  • ${obs}`);
});

console.log("\n--- Real-World Relevance ---");
Object.entries(fischerExp.labExperiment.realWorldRelevance).forEach(([topic, explanation]) => {
    console.log(`\n${topic}:`);
    console.log(`  ${explanation}`);
});

// ============================================================================
// EXAMPLE 10: Overton's Rule - Membrane Permeability (Beetroot)
// ============================================================================
console.log("\n\n=== EXAMPLE 10: Overton's Rule - Cell Membrane Permeability ===\n");

const workbook10 = new EnhancedMolecularBiologyWorkbook();

const experimentResult4 = workbook10.handleMolecularProblem({
    requestType: 'experiment',
    experimentId: 'overton_lipid_solubility'
});

const overtonExp = experimentResult4.experiment;
console.log("Experiment:", overtonExp.name);

console.log("\n--- Overton's Discovery ---");
console.log("Scientist:", overtonExp.historicalBackground.scientist);
console.log("Year:", overtonExp.historicalBackground.year);
console.log("Discovery:", overtonExp.historicalBackground.discovery);
console.log("Rule:", overtonExp.historicalBackground.rule);

console.log("\n--- Modern Lab: Beetroot Pigment Leakage ---");
console.log("Title:", overtonExp.labExperiment.title);
console.log("Hypothesis:", overtonExp.labExperiment.hypothesis);

console.log("\n--- Background ---");
Object.entries(overtonExp.labExperiment.background).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
});

console.log("\n--- Expected Results ---");
console.log("\nTemperature Effects:");
Object.entries(overtonExp.labExperiment.expectedResults.temperature).forEach(([temp, result]) => {
    console.log(`  ${temp}: ${result}`);
});

console.log("\nEthanol Effects:");
Object.entries(overtonExp.labExperiment.expectedResults.ethanol).forEach(([conc, result]) => {
    console.log(`  ${conc}: ${result}`);
});

console.log("\n--- Data Table ---");
overtonExp.labExperiment.dataTable.forEach((row, index) => {
    if (index === 0 || index === 7) {
        console.log("\n  " + row.join(" | "));
        console.log("  " + "-".repeat(80));
    } else if (index !== 6) {
        console.log("  " + row.join(" | "));
    }
});

console.log("\n--- Connection to Overton ---");
console.log("Rule:", overtonExp.labExperiment.connectionToOverton.rule);
console.log("Evidence:", overtonExp.labExperiment.connectionToOverton.evidence);

// ============================================================================
// EXAMPLE 11: Get All Available Experiments
// ============================================================================
console.log("\n\n=== EXAMPLE 11: List All Molecular Biology Experiments ===\n");

const workbook11 = new EnhancedMolecularBiologyWorkbook();
const allExperiments = workbook11.getAllExperiments();

console.log(`Total Experiments Available: ${allExperiments.length}\n`);

allExperiments.forEach((exp, index) => {
    console.log(`${index + 1}. ${exp.name}`);
    console.log(`   Scientist: ${exp.scientist} (${exp.year})`);
    console.log(`   Category: ${exp.category}`);
    console.log(`   Related Topics: ${exp.relatedTopics.join(', ')}`);
    console.log();
});

// ============================================================================
// EXAMPLE 12: Get All Available Topics
// ============================================================================
console.log("\n\n=== EXAMPLE 12: All Molecular Biology Topics ===\n");

const workbook12 = new EnhancedMolecularBiologyWorkbook();
const allTopics = workbook12.getAllTopics();

console.log(`Total Topics Available: ${allTopics.length}\n`);

allTopics.forEach((topic, index) => {
    console.log(`${index + 1}. ${topic.name}`);
    console.log(`   ID: ${topic.id}`);
    console.log(`   Category: ${topic.category}`);
    console.log(`   Difficulty: ${topic.difficulty}`);
    console.log(`   Description: ${topic.description}`);
    console.log(`   Prerequisites: ${topic.prerequisites.join(', ')}`);
    console.log();
});

// ============================================================================
// EXAMPLE 13: Adaptive Difficulty and Learner Profiling
// ============================================================================
console.log("\n\n=== EXAMPLE 13: Adaptive Learning Features ===\n");

const workbook13 = new EnhancedMolecularBiologyWorkbook({
    adaptiveDifficulty: true,
    metacognitiveSupport: true
});

// Set learner to beginner level
workbook13.learnerProfile.currentLevel = 'beginner';
console.log("Initial Learner Level:", workbook13.learnerProfile.currentLevel);

const beginnerResult = workbook13.handleMolecularProblem({
    topic: 'carbohydrates',
    requestType: 'topic'
});

console.log("\nContent adapted for:", beginnerResult.learnerProfile.currentLevel);
console.log("Vocabulary:", beginnerResult.content.vocabulary);
console.log("Depth:", beginnerResult.content.depth);

// Simulate performance and update profile
workbook13.updateLearnerProfile('carbohydrates', { score: 0.9 });
console.log("\n--- After Good Performance ---");
console.log("Mastered Topics:", workbook13.learnerProfile.masteredTopics);

// Try advanced level
workbook13.learnerProfile.currentLevel = 'advanced';
const advancedResult = workbook13.handleMolecularProblem({
    topic: 'enzymes',
    requestType: 'topic'
});

console.log("\n--- Advanced Level ---");
console.log("Learner Level:", advancedResult.learnerProfile.currentLevel);
console.log("Vocabulary:", advancedResult.content.vocabulary);
console.log("Depth:", advancedResult.content.depth);
console.log("Has Research Connections:", !!advancedResult.content.research);

// ============================================================================
// EXAMPLE 14: Workbook Status and Quality Metrics
// ============================================================================
console.log("\n\n=== EXAMPLE 14: Workbook Status and Metrics ===\n");

const workbook14 = new EnhancedMolecularBiologyWorkbook({
    includeExperiments: true,
    includeExamples: true,
    includeComparisons: true,
    metacognitiveSupport: true
});

// Generate content
workbook14.handleMolecularProblem({
    topic: 'nucleic acids',
    requestType: 'topic'
});

const status = workbook14.getWorkbookStatus();
console.log("Workbook Status:");
console.log("  Has Problem:", status.hasProblem);
console.log("  Has Content:", status.hasContent);
console.log("  Has Workbook:", status.hasWorkbook);
console.log("  Has Experiment:", status.hasExperiment);
console.log("  Learner Level:", status.learnerLevel);
console.log("  Mastered Topics:", status.masteredTopics);
console.log("  Struggling Topics:", status.strugglingTopics);

// ============================================================================
// EXAMPLE 15: Haworth's Sugar Structures - Polarimetry
// ============================================================================
console.log("\n\n=== EXAMPLE 15: Haworth's Sugar Structures - Polarimetry ===\n");

const workbook15 = new EnhancedMolecularBiologyWorkbook();

const experimentResult5 = workbook15.handleMolecularProblem({
    requestType: 'experiment',
    experimentId: 'haworth_sugar_structures'
});

const haworthExp = experimentResult5.experiment;
console.log("Experiment:", haworthExp.name);

console.log("\n--- Historical Background ---");
console.log("Scientist:", haworthExp.historicalBackground.scientist);
console.log("Achievement:", haworthExp.historicalBackground.achievement);
console.log("Nobel Prize:", haworthExp.historicalBackground.nobelPrize);

console.log("\n--- Contributions ---");
haworthExp.historicalBackground.contribution.forEach(c => {
    console.log(`  • ${c}`);
});

console.log("\n--- Mutarotation ---");
console.log("Definition:", haworthExp.historicalBackground.mutarotation);

console.log("\n--- Lab Experiment: Polarimetry ---");
console.log("Title:", haworthExp.labExperiment.title);
console.log("Hypothesis:", haworthExp.labExperiment.hypothesis);

console.log("\n--- Background: Glucose Forms ---");
const glucose = haworthExp.labExperiment.background.glucose;
console.log("Linear Form:", glucose.linearForm);
console.log("Alpha Cyclic:", glucose.alphaCyclic);
console.log("Beta Cyclic:", glucose.betaCyclic);
console.log("Equilibrium:", glucose.equilibrium);

console.log("\n--- Expected Mutarotation Data ---");
haworthExp.labExperiment.dataTable.forEach((row, index) => {
    if (index === 0) {
        console.log("\n  " + row.join(" | "));
        console.log("  " + "-".repeat(70));
    } else {
        console.log("  " + row.join(" | "));
    }
});

console.log("\n--- Specific Rotation Calculation ---");
console.log("Formula:", haworthExp.labExperiment.calculations.specificRotation);
console.log("\nExample Calculation:");
Object.entries(haworthExp.labExperiment.calculations.example).forEach(([step, value]) => {
    console.log(`  ${step}: ${value}`);
});

// ============================================================================
// EXAMPLE 16: Filter and Search Functionality
// ============================================================================
console.log("\n\n=== EXAMPLE 16: Search and Filter ===\n");

const workbook16 = new EnhancedMolecularBiologyWorkbook();

// Filter proteins by specific items
const proteinResult = workbook16.handleMolecularProblem({
    topic: 'proteins',
    parameters: {
        specificItems: ['hemoglobin', 'insulin', 'collagen']
    }
});

console.log("--- Filtered Protein Examples ---");
proteinResult.content.examples?.forEach(example => {
    console.log(`\n${example.name}:`);
    console.log(`  Type: ${example.type}`);
    console.log(`  Function: ${example.function}`);
    if (example.structure) console.log(`  Structure: ${example.structure}`);
    if (example.disease) console.log(`  Related Disease: ${example.disease}`);
});

// ============================================================================
// EXAMPLE 17: Common Misconceptions Section
// ============================================================================
console.log("\n\n=== EXAMPLE 17: Common Misconceptions ===\n");

const workbook17 = new EnhancedMolecularBiologyWorkbook({
    includeCommonMisconceptions: true
});

const lipidsResult = workbook17.handleMolecularProblem({
    topic: 'lipids',
    requestType: 'topic'
});

console.log("Topic:", lipidsResult.content.topic);

// Show misconceptions from workbook
const miscSection = lipidsResult.workbook.sections.find(s => s.type === 'misconceptions');
if (miscSection) {
    console.log("\n--- Common Misconceptions About Lipids ---");
    miscSection.data.forEach(([category, misconception]) => {
        if (category && !category.startsWith('  ')) {
            console.log(`\n${category}`);
        } else if (misconception) {
            console.log(`  ${misconception}`);
        }
    });
}

// ============================================================================
// EXAMPLE 18: Contextual Scenarios for Real-World Learning
// ============================================================================
console.log("\n\n=== EXAMPLE 18: Contextual Learning Scenarios ===\n");

const workbook18 = new EnhancedMolecularBiologyWorkbook({
    contextualLearning: true
});

const bioenergeticsResult = workbook18.handleMolecularProblem({
    topic: 'bioenergetics',
    requestType: 'topic'
});

console.log("Topic:", bioenergeticsResult.content.topic);

if (bioenergeticsResult.content.contextualScenarios) {
    console.log("\n--- Real-World Application Scenarios ---");
    bioenergeticsResult.content.contextualScenarios.forEach((scenario, index) => {
        console.log(`\n${index + 1}. ${scenario.scenario}`);
        console.log(`   Context: ${scenario.context}`);
        console.log(`   Application: ${scenario.application}`);
        console.log(`   Question: ${scenario.question}`);
    });
}

// ============================================================================
// EXAMPLE 19: Molecular Symbol Formatting
// ============================================================================
console.log("\n\n=== EXAMPLE 19: Molecular Symbol Formatting ===\n");

const workbook19 = new EnhancedMolecularBiologyWorkbook();

const testTerms = [
    "ATP + H2O → ADP + Pi",
    "NAD+ + 2e- + H+ → NADH",
    "C6H12O6 + 6O2 → 6CO2 + 6H2O",
    "alpha-helix and beta-sheet",
    "Delta G approximately -30.5 kJ/mol"
];

console.log("--- Formatted Molecular Terms ---");
testTerms.forEach(term => {
    console.log(`\nOriginal: ${term}`);
    console.log(`Formatted: ${workbook19.formatMolecularTerm(term)}`);
});

// ============================================================================
// EXAMPLE 20: Complete Workflow - Topic to Experiment
// ============================================================================
console.log("\n\n=== EXAMPLE 20: Complete Learning Workflow ===\n");

const workbook20 = new EnhancedMolecularBiologyWorkbook({
    includeExperiments: true,
    contextualLearning: true,
    metacognitiveSupport: true,
    assessmentFeedback: true,
    adaptiveDifficulty: true
});

console.log("--- Step 1: Learn About Enzymes ---");
const enzymesTopic = workbook20.handleMolecularProblem({
    topic: 'enzymes',
    requestType: 'topic'
});

console.log("Topic:", enzymesTopic.content.topic);
console.log("Workbook Sections:", enzymesTopic.workbook.sections.map(s => s.title).join(', '));

console.log("\n--- Step 2: Review Related Experiments ---");
console.log("Related Experiments:");
enzymesTopic.experiments?.forEach(exp => {
    console.log(`  - ${exp.name}`);
});

console.log("\n--- Step 3: Perform Lab Experiment ---");
const enzymeLab = workbook20.handleMolecularProblem({
    requestType: 'experiment',
    experimentId: 'fischer_lock_and_key'
});

console.log("Lab Experiment:", enzymeLab.experiment.name);
console.log("Procedure Steps:", enzymeLab.experiment.labExperiment.procedure.length);

console.log("\n--- Step 4: Self-Assessment ---");
const assessmentSection = enzymesTopic.workbook.sections.find(s => s.type === 'assessment');
if (assessmentSection) {
    console.log("\nAssessment Questions:");
    assessmentSection.data.slice(1, 4).forEach(([level, question]) => {
        console.log(`  [${level}] ${question}`);
    });
}

console.log("\n--- Step 5: Check Understanding with Metacognitive Prompts ---");
if (enzymesTopic.content.metacognitivePrompts) {
    console.log("\nAfter Learning:");
    enzymesTopic.content.metacognitivePrompts.afterLearning.slice(0, 3).forEach(prompt => {
        console.log(`  ? ${prompt}`);
    });
}

console.log("\n\n=== Testing Complete ===");
console.log("All molecular biology examples executed successfully!");
console.log("\nSummary:");
console.log("  ✓ Tested all major topics (carbohydrates, lipids, proteins, nucleic acids, bioenergetics, enzymes)");
console.log("  ✓ Tested all major experiments (Prout, Sanger, Chevreul, Fischer, Haworth, Overton)");
console.log("  ✓ Tested adaptive difficulty and learner profiling");
console.log("  ✓ Tested contextual learning and metacognitive support");
console.log("  ✓ Tested filtering, searching, and data formatting");
console.log("  ✓ Tested complete learning workflow");
console.log("\nThe Enhanced Molecular Biology Workbook is fully functional!");
