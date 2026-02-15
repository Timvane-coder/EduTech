// Enhanced Molecular Biology Workbook Data Access Utilities

import { EnhancedMolecularBiologyWorkbook } from './molecularbiology.js';
import fs from 'fs';   
import path from 'path';

class MolecularBiologyWorkbookInspector {
    constructor() {
        this.workbook = new EnhancedMolecularBiologyWorkbook({
            theme: 'molecular',
            includeDiagrams: true,
            includeExperiments: true
        });
    }

    // ========================================
    // EXPERIMENTS
    // ========================================

    /**
     * Get all experiment IDs
     */
    getAllExperimentIds() {
        const experiments = this.workbook.molecularExperiments;
        return Object.keys(experiments);
    }

    /**
     * Get all experiments with detailed information
     */
    getAllExperiments() {
        const experiments = this.workbook.molecularExperiments;
        return Object.entries(experiments).map(([id, exp]) => ({
            id: id,
            name: exp.name,
            category: exp.category,
            relatedTopics: exp.relatedTopics,
            historicalScientist: exp.historicalBackground?.scientist,
            year: exp.historicalBackground?.year,
            labTitle: exp.labExperiment?.title,
            hasHistoricalBackground: !!exp.historicalBackground,
            hasLabExperiment: !!exp.labExperiment
        }));
    }

    /**
     * Get experiments by category
     */
    getExperimentsByCategory() {
        const experiments = this.workbook.molecularExperiments;
        const categorized = {};

        Object.entries(experiments).forEach(([id, exp]) => {
            const category = exp.category;
            if (!categorized[category]) {
                categorized[category] = [];
            }
            categorized[category].push({
                id: id,
                name: exp.name,
                scientist: exp.historicalBackground?.scientist
            });
        });

        return categorized;
    }

    /**
     * Get experiments by topic
     */
    getExperimentsByTopic(topicId) {
        return this.workbook.getExperimentsByTopic(topicId);
    }

    /**
     * Get experiment details by ID
     */
    getExperimentById(experimentId) {
        const exp = this.workbook.molecularExperiments[experimentId];
        if (!exp) return null;

        return {
            id: experimentId,
            name: exp.name,
            category: exp.category,
            relatedTopics: exp.relatedTopics,
            historicalBackground: exp.historicalBackground,
            labExperiment: exp.labExperiment
        };
    }

    // ========================================
    // TOPICS
    // ========================================

    /**
     * Get all topic IDs
     */
    getAllTopicIds() {
        const topics = this.workbook.molecularTopics;
        return Object.keys(topics);
    }

    /**
     * Get all topics with detailed information
     */
    getAllTopics() {
        const topics = this.workbook.molecularTopics;
        return Object.entries(topics).map(([id, topic]) => ({
            id: id,
            name: topic.name,
            category: topic.category,
            description: topic.description,
            difficulty: topic.difficulty,
            prerequisites: topic.prerequisites,
            hasRelatedExperiments: !!topic.relatedExperiments,
            experimentCount: topic.relatedExperiments?.length || 0
        }));
    }

    /**
     * Get topics by category
     */
    getTopicsByCategory() {
        const topics = this.workbook.molecularTopics;
        const categorized = {};

        Object.entries(topics).forEach(([id, topic]) => {
            const category = topic.category;
            if (!categorized[category]) {
                categorized[category] = [];
            }
            categorized[category].push({
                id: id,
                name: topic.name,
                description: topic.description,
                difficulty: topic.difficulty
            });
        });

        return categorized;
    }

    /**
     * Get topics by difficulty level
     */
    getTopicsByDifficulty() {
        const topics = this.workbook.molecularTopics;
        const byDifficulty = {
            beginner: [],
            intermediate: [],
            advanced: []
        };

        Object.entries(topics).forEach(([id, topic]) => {
            const difficulty = topic.difficulty || 'intermediate';
            if (byDifficulty[difficulty]) {
                byDifficulty[difficulty].push({
                    id: id,
                    name: topic.name,
                    category: topic.category
                });
            }
        });

        return byDifficulty;
    }

    /**
     * Get topic details by ID
     */
    getTopicById(topicId) {
        const topic = this.workbook.molecularTopics[topicId];
        if (!topic) return null;

        return {
            id: topicId,
            name: topic.name,
            category: topic.category,
            description: topic.description,
            difficulty: topic.difficulty,
            prerequisites: topic.prerequisites,
            relatedExperiments: topic.relatedExperiments || [],
            patterns: topic.patterns.map(p => p.source)
        };
    }

    // ========================================
    // SPECIFIC ITEMS IN EACH TOPIC
    // ========================================

    /**
     * Get all specific items/subtopics for each topic
     */
    getAllSpecificItems() {
        const items = {};

        items.carbohydrates = {
            bySize: ['monosaccharides', 'disaccharides', 'polysaccharides'],
            byFunction: ['energy', 'structural', 'recognition'],
            specific: [
                'glucose', 'fructose', 'galactose',
                'sucrose', 'maltose', 'lactose',
                'starch', 'glycogen', 'cellulose', 'chitin'
            ]
        };

        items.lipids = {
            types: ['simple lipids', 'complex lipids', 'derived lipids'],
            simpleLipids: ['fats', 'waxes'],
            complexLipids: ['phospholipids', 'glycolipids', 'lipoproteins'],
            derivedLipids: ['steroids', 'fat-soluble vitamins', 'eicosanoids'],
            specific: [
                'triglycerides', 'phosphatidylcholine', 'cholesterol',
                'saturated fatty acids', 'unsaturated fatty acids'
            ]
        };

        items.proteins = {
            structures: ['primary', 'secondary', 'tertiary', 'quaternary'],
            aminoAcids: [
                'nonpolar', 'polar', 'charged (acidic)', 'charged (basic)'
            ],
            functions: [
                'catalytic', 'structural', 'transport', 'storage',
                'signaling', 'movement', 'defense', 'regulation'
            ],
            specific: [
                'alpha helix', 'beta sheet', 'disulfide bonds',
                'peptide bonds', 'protein folding', 'denaturation'
            ]
        };

        items.nucleic_acids = {
            types: ['DNA', 'RNA'],
            components: ['nucleotides', 'pentose sugars', 'nitrogenous bases', 'phosphate groups'],
            DNAstructure: ['double helix', 'base pairing', 'antiparallel strands'],
            RNAtypes: ['mRNA', 'tRNA', 'rRNA', 'miRNA', 'siRNA', 'lncRNA'],
            processes: ['replication', 'transcription', 'translation'],
            specific: [
                'purines (A, G)', 'pyrimidines (C, T, U)',
                'complementary base pairing', 'genetic code', 'codons'
            ]
        };

        items.bioenergetics = {
            molecules: ['ATP', 'NAD+/NADH', 'FAD/FADH2'],
            pathways: ['glycolysis', 'link reaction', 'Krebs cycle', 'electron transport chain'],
            types: ['aerobic respiration', 'anaerobic respiration', 'fermentation'],
            specific: [
                'substrate-level phosphorylation', 'oxidative phosphorylation',
                'chemiosmosis', 'proton gradient', 'ATP synthase'
            ]
        };

        items.enzymes = {
            concepts: ['active site', 'substrate', 'product', 'cofactor', 'coenzyme'],
            models: ['lock and key', 'induced fit'],
            kinetics: ['Michaelis-Menten', 'Vmax', 'Km', 'kcat', 'Lineweaver-Burk'],
            inhibition: ['competitive', 'noncompetitive', 'uncompetitive', 'irreversible'],
            regulation: ['allosteric', 'feedback inhibition', 'covalent modification'],
            specific: [
                'activation energy', 'transition state', 'catalytic strategies',
                'enzyme classification (EC numbers)'
            ]
        };

        items.molecular_signaling = {
            components: ['ligand', 'receptor', 'signal transduction', 'second messengers'],
            receptorTypes: ['GPCRs', 'RTKs', 'ion channel receptors', 'nuclear receptors'],
            secondMessengers: ['cAMP', 'Ca2+', 'IP3', 'DAG'],
            pathways: ['cAMP-PKA', 'Ras-MAPK', 'PI3K-Akt'],
            specific: ['signal amplification', 'cascades', 'crosstalk']
        };

        items.glycobiology = {
            molecules: ['glycoproteins', 'glycolipids', 'proteoglycans'],
            types: ['N-linked glycosylation', 'O-linked glycosylation'],
            functions: ['cell recognition', 'immune response', 'blood types'],
            specific: ['lectins', 'glycocalyx', 'sialic acid']
        };

        items.molecular_techniques = {
            separation: ['electrophoresis', 'chromatography'],
            amplification: ['PCR', 'RT-PCR', 'qPCR'],
            detection: ['Western blot', 'Southern blot', 'Northern blot'],
            analysis: ['mass spectrometry', 'spectroscopy'],
            specific: [
                'gel electrophoresis', 'HPLC', 'TLC',
                'DNA sequencing', 'protein purification'
            ]
        };

        return items;
    }

    /**
     * Get specific items for a single topic
     */
    getSpecificItemsForTopic(topicId) {
        const allItems = this.getAllSpecificItems();
        return allItems[topicId] || null;
    }

    // ========================================
    // LESSONS
    // ========================================

    /**
     * Get all lesson IDs
     */
    getAllLessonIds() {
        const lessons = this.workbook.lessons;
        return Object.keys(lessons);
    }

    /**
     * Get all lessons with summary
     */
    getAllLessons() {
        const lessons = this.workbook.lessons;
        return Object.entries(lessons).map(([id, lesson]) => ({
            id: id,
            title: lesson.title,
            conceptCount: lesson.concepts?.length || 0,
            definitionCount: Object.keys(lesson.keyDefinitions || {}).length,
            applicationCount: lesson.applications?.length || 0,
            hasTheory: !!lesson.theory
        }));
    }

    /**
     * Get lesson details by ID
     */
    getLessonById(lessonId) {
        const lesson = this.workbook.lessons[lessonId];
        if (!lesson) return null;

        return {
            id: lessonId,
            title: lesson.title,
            concepts: lesson.concepts,
            theory: lesson.theory,
            keyDefinitions: lesson.keyDefinitions,
            keyComponents: lesson.keyComponents,
            keyProcesses: lesson.keyProcesses,
            classification: lesson.classification,
            applications: lesson.applications,
            stages: lesson.stages
        };
    }

    /**
     * Get all key definitions from all lessons
     */
    getAllKeyDefinitions() {
        const lessons = this.workbook.lessons;
        const definitions = {};

        Object.entries(lessons).forEach(([topicId, lesson]) => {
            if (lesson.keyDefinitions) {
                definitions[topicId] = lesson.keyDefinitions;
            }
        });

        return definitions;
    }

    // ========================================
    // DIAGRAMS
    // ========================================

    /**
     * Get all diagram names for all topics
     */
    getAllDiagramNames() {
        const topics = this.getAllTopicIds();
        const diagrams = {};

        topics.forEach(topicId => {
            diagrams[topicId] = this.workbook.getRelevantMolecularDiagrams(topicId);
        });

        return diagrams;
    }

    /**
     * Get diagram names for a specific topic
     */
    getDiagramNamesForTopic(topicId) {
        return this.workbook.getRelevantMolecularDiagrams(topicId);
    }

    /**
     * Get all unique diagram names across all topics
     */
    getAllUniqueDiagramNames() {
        const allDiagrams = this.getAllDiagramNames();
        const uniqueDiagrams = new Set();

        Object.values(allDiagrams).forEach(topicDiagrams => {
            topicDiagrams.forEach(diagram => uniqueDiagrams.add(diagram));
        });

        return Array.from(uniqueDiagrams).sort();
    }

    /**
     * Get diagram count by topic
     */
    getDiagramCountByTopic() {
        const allDiagrams = this.getAllDiagramNames();
        const counts = {};

        Object.entries(allDiagrams).forEach(([topicId, diagrams]) => {
            counts[topicId] = diagrams.length;
        });

        return counts;
    }

    /**
     * Find which topics use a specific diagram
     */
    findTopicsUsingDiagram(diagramName) {
        const allDiagrams = this.getAllDiagramNames();
        const topics = [];

        Object.entries(allDiagrams).forEach(([topicId, diagrams]) => {
            if (diagrams.includes(diagramName)) {
                topics.push({
                    id: topicId,
                    name: this.workbook.molecularTopics[topicId]?.name
                });
            }
        });

        return topics;
    }

    // ========================================
    // WORKBOOK SECTIONS
    // ========================================

    /**
     * Get all available workbook section types
     */
    getAllWorkbookSectionTypes() {
        return [
            'problem',
            'overview',
            'detailed_content',
            'diagrams',
            'comparisons',
            'examples_applications',
            'contextual',
            'experiments',
            'misconceptions',
            'metacognitive',
            'assessment',
            'related_topics'
        ];
    }

    /**
     * Get description of each workbook section
     */
    getWorkbookSectionDescriptions() {
        return {
            problem: 'Topic information and metadata',
            overview: 'High-level content overview and summary',
            detailed_content: 'Comprehensive topic content with all details',
            diagrams: 'Visual diagrams and molecular structures',
            comparisons: 'Comparison tables and contrasts',
            examples_applications: 'Real-world examples and applications',
            contextual: 'Contextual scenarios and case studies',
            experiments: 'Related historical and laboratory experiments',
            misconceptions: 'Common misconceptions and clarifications',
            metacognitive: 'Learning strategies and self-reflection prompts',
            assessment: 'Assessment questions at different difficulty levels',
            related_topics: 'Links to related topics and concepts'
        };
    }

    // ========================================
    // COMPREHENSIVE SUMMARY
    // ========================================

    /**
     * Get complete workbook inventory
     */
    getCompleteInventory() {
        return {
            experiments: {
                total: this.getAllExperimentIds().length,
                ids: this.getAllExperimentIds(),
                byCategory: this.getExperimentsByCategory()
            },
            topics: {
                total: this.getAllTopicIds().length,
                ids: this.getAllTopicIds(),
                byCategory: this.getTopicsByCategory(),
                byDifficulty: this.getTopicsByDifficulty()
            },
            specificItems: this.getAllSpecificItems(),
            lessons: {
                total: this.getAllLessonIds().length,
                ids: this.getAllLessonIds(),
                allDefinitions: this.getAllKeyDefinitions()
            },
            diagrams: {
                byTopic: this.getAllDiagramNames(),
                unique: this.getAllUniqueDiagramNames(),
                totalUnique: this.getAllUniqueDiagramNames().length,
                countByTopic: this.getDiagramCountByTopic()
            },
            sections: {
                types: this.getAllWorkbookSectionTypes(),
                descriptions: this.getWorkbookSectionDescriptions()
            }
        };
    }

    /**
     * Generate comprehensive report
     */
    generateComprehensiveReport() {
        const inventory = this.getCompleteInventory();

        const report = `
╔════════════════════════════════════════════════════════════════╗
║     ENHANCED MOLECULAR BIOLOGY WORKBOOK - COMPLETE INVENTORY    ║
╚════════════════════════════════════════════════════════════════╝

📊 STATISTICS
═══════════════════════════════════════════════════════════════
  Total Topics:           ${inventory.topics.total}
  Total Experiments:      ${inventory.experiments.total}
  Total Lessons:          ${inventory.lessons.total}
  Total Unique Diagrams:  ${inventory.diagrams.totalUnique}
  Workbook Section Types: ${inventory.sections.types.length}

📚 TOPICS (${inventory.topics.total})
═══════════════════════════════════════════════════════════════
${inventory.topics.ids.map((id, idx) => {
    const topic = this.workbook.molecularTopics[id];
    return `  ${idx + 1}. ${id.padEnd(25)} - ${topic.name}`;
}).join('\n')}

🧪 EXPERIMENTS (${inventory.experiments.total})
═══════════════════════════════════════════════════════════════
${this.getAllExperiments().map((exp, idx) => {
    return `  ${idx + 1}. ${exp.id.padEnd(35)} - ${exp.name}`;
}).join('\n')}

📖 LESSONS (${inventory.lessons.total})
═══════════════════════════════════════════════════════════════
${inventory.lessons.ids.map((id, idx) => {
    const lesson = this.workbook.lessons[id];
    return `  ${idx + 1}. ${id.padEnd(25)} - ${lesson.title}`;
}).join('\n')}

🎨 DIAGRAMS BY TOPIC
═══════════════════════════════════════════════════════════════
${Object.entries(inventory.diagrams.byTopic).map(([topic, diagrams]) => {
    return `  ${topic} (${diagrams.length}):\n    - ${diagrams.join('\n    - ')}`;
}).join('\n\n')}

📑 WORKBOOK SECTIONS
═══════════════════════════════════════════════════════════════
${inventory.sections.types.map((type, idx) => {
    return `  ${idx + 1}. ${type.padEnd(25)} - ${inventory.sections.descriptions[type]}`;
}).join('\n')}

═══════════════════════════════════════════════════════════════
Generated: ${new Date().toLocaleString()}
═══════════════════════════════════════════════════════════════
        `;

        return report;
    }

    /**
     * Export inventory to JSON file
     */
    exportInventoryToJSON(filepath = './workbook_inventory.json') {
        
        
        const inventory = this.getCompleteInventory();
        
        const dir = path.dirname(filepath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        
        fs.writeFileSync(filepath, JSON.stringify(inventory, null, 2));
        console.log(`✅ Inventory exported to: ${filepath}`);
        
        return filepath;
    }
}

// ========================================
// USAGE EXAMPLES
// ========================================

function demonstrateInspector() {
    const inspector = new MolecularBiologyWorkbookInspector();

    console.log('\n' + '='.repeat(70));
    console.log('MOLECULAR BIOLOGY WORKBOOK INSPECTOR - DEMONSTRATION');
    console.log('='.repeat(70));

    // 1. Get all experiment IDs
    console.log('\n📋 ALL EXPERIMENT IDs:');
    const expIds = inspector.getAllExperimentIds();
    console.log(`   Total: ${expIds.length}`);
    expIds.forEach((id, idx) => {
        console.log(`   ${idx + 1}. ${id}`);
    });

    // 2. Get all topics
    console.log('\n📚 ALL TOPICS:');
    const topics = inspector.getAllTopics();
    topics.forEach((topic, idx) => {
        console.log(`   ${idx + 1}. ${topic.id} (${topic.difficulty}) - ${topic.name}`);
    });

    // 3. Get specific items for proteins
    console.log('\n🧬 SPECIFIC ITEMS FOR PROTEINS:');
    const proteinItems = inspector.getSpecificItemsForTopic('proteins');
    console.log(JSON.stringify(proteinItems, null, 2));

    // 4. Get all diagram names
    console.log('\n🎨 ALL UNIQUE DIAGRAMS:');
    const diagrams = inspector.getAllUniqueDiagramNames();
    console.log(`   Total: ${diagrams.length}`);
    diagrams.forEach((diagram, idx) => {
        console.log(`   ${idx + 1}. ${diagram}`);
    });

    // 5. Get diagrams for nucleic acids
    console.log('\n🧬 DIAGRAMS FOR NUCLEIC ACIDS:');
    const nucleicDiagrams = inspector.getDiagramNamesForTopic('nucleic_acids');
    nucleicDiagrams.forEach((diagram, idx) => {
        console.log(`   ${idx + 1}. ${diagram}`);
    });

    // 6. Get all lessons
    console.log('\n📖 ALL LESSONS:');
    const lessons = inspector.getAllLessons();
    lessons.forEach((lesson, idx) => {
        console.log(`   ${idx + 1}. ${lesson.id} - ${lesson.title}`);
        console.log(`       Concepts: ${lesson.conceptCount}, Definitions: ${lesson.definitionCount}`);
    });

    // 7. Get experiments by category
    console.log('\n🔬 EXPERIMENTS BY CATEGORY:');
    const expByCategory = inspector.getExperimentsByCategory();
    Object.entries(expByCategory).forEach(([category, exps]) => {
        console.log(`   ${category} (${exps.length}):`);
        exps.forEach(exp => {
            console.log(`     - ${exp.name}`);
        });
    });

    // 8. Get topics by difficulty
    console.log('\n📊 TOPICS BY DIFFICULTY:');
    const topicsByDifficulty = inspector.getTopicsByDifficulty();
    Object.entries(topicsByDifficulty).forEach(([difficulty, topics]) => {
        console.log(`   ${difficulty.toUpperCase()} (${topics.length}):`);
        topics.forEach(topic => {
            console.log(`     - ${topic.name}`);
        });
    });

    // 9. Find topics using a specific diagram
    console.log('\n🔍 TOPICS USING "dnaStructure" DIAGRAM:');
    const topicsUsingDNA = inspector.findTopicsUsingDiagram('dnaStructure');
    topicsUsingDNA.forEach(topic => {
        console.log(`   - ${topic.name}`);
    });

    // 10. Get workbook section types
    console.log('\n📑 WORKBOOK SECTION TYPES:');
    const sectionTypes = inspector.getAllWorkbookSectionTypes();
    const sectionDescs = inspector.getWorkbookSectionDescriptions();
    sectionTypes.forEach((type, idx) => {
        console.log(`   ${idx + 1}. ${type} - ${sectionDescs[type]}`);
    });

    // 11. Generate comprehensive report
    console.log('\n' + '='.repeat(70));
    console.log(inspector.generateComprehensiveReport());

    // 12. Export to JSON
    inspector.exportInventoryToJSON('./output/workbook_inventory.json');
}

// Export the inspector class and demo function
export { MolecularBiologyWorkbookInspector, demonstrateInspector };

// Run demo if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    demonstrateInspector();
}
