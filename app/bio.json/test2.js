// Complete Enhanced Molecular Biology Workbook with Diagram Generation
import { EnhancedMolecularBiologyWorkbook } from './molecularbiology.js';
import fs from 'fs';
import path from 'path';

// ========================================
// EXAMPLE 1: Simple Topic with Single Diagram
// ========================================
function generateSimpleNucleicAcidWorkbook() {
    console.log('\n========== EXAMPLE 1: Simple Nucleic Acid Workbook ==========\n');
    
    const workbook = new EnhancedMolecularBiologyWorkbook({
        theme: 'molecular',
        includeDiagrams: true,
        diagramWidth: 800,
        diagramHeight: 600,
        includeExperiments: false, // Disable experiments for simple version
        explanationLevel: 'intermediate',
        includeCommonMisconceptions: false,
        includePedagogicalNotes: false
    });

    // Generate with minimal content
    const result = workbook.handleMolecularProblem({
        topic: 'nucleic_acids',
        parameters: {
            specificItems: ['DNA structure'], // Focus on DNA structure only
            limit: 1, // Limit to 1 main item
            difficulty: 'intermediate'
        },
        context: {
            purpose: 'quick_reference',
            audience: 'undergraduate'
        }
    });

    console.log('✅ Simple Workbook Generated');
    console.log(`   Topic: ${result.content.topic}`);
    console.log(`   Diagram status: ${result.diagrams?.status || 'rendering'}`);
    
    // Wait for single diagram
    result.getDiagrams().then(diagrams => {
        console.log(`   ✨ Diagram ready: ${diagrams.renderedImages[0]?.key}`);
        
        // Save workbook
        saveWorkbookToFile(result, './output/simple_nucleic_acids_workbook.json');
        
        // Export single diagram
        if (diagrams.renderedImages.length > 0) {
            const diagram = diagrams.renderedImages[0];
            fs.writeFileSync(
                `./output/diagrams/${diagram.key}.png`,
                diagram.buffer
            );
            console.log(`   💾 Diagram saved: ${diagram.key}.png`);
        }
    });

    return result;
}

// ========================================
// EXAMPLE 2: Topic with Historical Experiment
// ========================================
function generateNucleicAcidWithHistoricalExperiment() {
    console.log('\n========== EXAMPLE 2: Nucleic Acids with Historical Experiment ==========\n');
    
    const workbook = new EnhancedMolecularBiologyWorkbook({
        theme: 'molecular',
        includeDiagrams: true,
        diagramWidth: 900,
        diagramHeight: 700,
        includeExperiments: true,
        includeCommonMisconceptions: true,
        contextualLearning: true,
        explanationLevel: 'detailed'
    });

    // Generate with historical experiment focus
    const result = workbook.handleMolecularProblem({
        topic: 'nucleic_acids',
        parameters: {
            includeHistory: true,
            experimentFocus: 'historical',
            specificItems: ['DNA structure', 'base pairing']
        },
        subTopic: 'DNA discovery',
        context: {
            purpose: 'educational',
            audience: 'high_school',
            includeHistoricalContext: true
        }
    });

    console.log('✅ Workbook with Historical Experiment Generated');
    console.log(`   Topic: ${result.content.topic}`);
    console.log(`   Related Experiments: ${result.experiments?.length || 0}`);
    
    // Find Watson-Crick related experiment
    const watsonCrickExp = result.experiments?.find(exp => 
        exp.name.toLowerCase().includes('watson') || 
        exp.name.toLowerCase().includes('dna')
    );
    
    if (watsonCrickExp) {
        console.log(`   🔬 Historical Experiment: ${watsonCrickExp.historicalScientist}`);
        console.log(`   📅 Year: ${watsonCrickExp.year || 'Not specified'}`);
    }

    // Wait for diagrams and save
    result.getDiagrams().then(async diagrams => {
        console.log(`   ✨ ${diagrams.renderedImages.length} diagrams ready`);
        
        // Save complete workbook
        const workbookData = {
            metadata: {
                title: 'Nucleic Acids - Historical Perspective',
                generated: new Date().toISOString(),
                topic: result.content.topic,
                experimentCount: result.experiments?.length || 0,
                diagramCount: diagrams.renderedImages.length
            },
            content: result.content,
            workbook: result.workbook,
            experiments: result.experiments,
            diagrams: diagrams.renderedImages.map(d => ({
                key: d.key,
                width: d.width,
                height: d.height,
                filename: `${d.key}.png`
            }))
        };
        
        saveWorkbookToFile(workbookData, './output/nucleic_acids_historical_workbook.json');
        
        // Export all diagrams
        await exportDiagramsToFolder(diagrams.renderedImages, './output/diagrams/historical');
        console.log('   💾 All content saved');
    });

    return result;
}

// ========================================
// EXAMPLE 3: Topic with Lab Experiment
// ========================================
function generateNucleicAcidWithLabExperiment() {
    console.log('\n========== EXAMPLE 3: Nucleic Acids with Lab Experiment ==========\n');
    
    const workbook = new EnhancedMolecularBiologyWorkbook({
        theme: 'molecular',
        includeDiagrams: true,
        diagramWidth: 1000,
        diagramHeight: 750,
        includeExperiments: true,
        includePedagogicalNotes: true,
        assessmentFeedback: true,
        metacognitiveSupport: true,
        explanationLevel: 'advanced'
    });

    // Generate with lab experiment focus
    const result = workbook.handleMolecularProblem({
        topic: 'nucleic_acids',
        parameters: {
            experimentFocus: 'lab',
            includeProtocols: true,
            includeSafetyNotes: true,
            specificItems: ['DNA extraction', 'gel electrophoresis']
        },
        subTopic: 'DNA analysis techniques',
        context: {
            purpose: 'laboratory_manual',
            audience: 'university',
            includeProtocols: true
        }
    });

    console.log('✅ Workbook with Lab Experiment Generated');
    console.log(`   Topic: ${result.content.topic}`);
    console.log(`   Lab Experiments Available: ${result.experiments?.filter(e => e.labTitle).length || 0}`);
    
    // Find lab experiment
    const labExp = result.experiments?.find(exp => exp.labTitle);
    
    if (labExp) {
        console.log(`   🧪 Lab Experiment: ${labExp.labTitle}`);
        console.log(`   📋 Historical Context: ${labExp.historicalScientist || 'Various'}`);
    }

    // Wait for diagrams and create complete lab manual
    result.getDiagrams().then(async diagrams => {
        console.log(`   ✨ ${diagrams.renderedImages.length} diagrams ready`);
        
        // Create comprehensive lab manual
        const labManual = {
            metadata: {
                title: 'Nucleic Acids Laboratory Manual',
                generated: new Date().toISOString(),
                topic: result.content.topic,
                level: 'university',
                safetyRating: 'BSL-1'
            },
            theoreticalBackground: result.content,
            experiments: result.experiments,
            protocols: extractProtocols(result.experiments),
            diagrams: diagrams.renderedImages.map(d => ({
                key: d.key,
                purpose: getDiagramPurpose(d.key),
                filename: `${d.key}.png`
            })),
            assessmentQuestions: result.workbook.sections.find(s => s.type === 'assessment'),
            metacognitivePrompts: result.workbook.sections.find(s => s.type === 'metacognitive')
        };
        
        saveWorkbookToFile(labManual, './output/nucleic_acids_lab_manual.json');
        
        // Export all diagrams
        await exportDiagramsToFolder(diagrams.renderedImages, './output/diagrams/lab');
        console.log('   💾 Complete lab manual saved');
    });

    return result;
}

// ========================================
// EXAMPLE 4: Complete Comprehensive Workbook
// ========================================
async function generateCompleteNucleicAcidWorkbook() {
    console.log('\n========== EXAMPLE 4: Complete Comprehensive Nucleic Acids Workbook ==========\n');
    
    const workbook = new EnhancedMolecularBiologyWorkbook({
        theme: 'molecular',
        includeDiagrams: true,
        diagramWidth: 1200,
        diagramHeight: 900,
        includeExperiments: true,
        includeVisualizations: true,
        includeConceptualConnections: true,
        includeExamples: true,
        includeComparisons: true,
        includeCommonMisconceptions: true,
        includePedagogicalNotes: true,
        contextualLearning: true,
        metacognitiveSupport: true,
        assessmentFeedback: true,
        adaptiveDifficulty: true,
        explanationLevel: 'detailed',
        detailLevel: 'comprehensive'
    });

    console.log('🚀 Generating comprehensive workbook...');
    
    // Generate complete content with all features
    const result = workbook.handleMolecularProblem({
        topic: 'nucleic_acids',
        parameters: {
            includeAll: true,
            depth: 'comprehensive',
            includeHistory: true,
            includeModern: true,
            includeApplications: true,
            includeTechniques: true
        },
        context: {
            purpose: 'complete_reference',
            audience: 'graduate_level',
            includeResearch: true,
            includeApplications: true
        }
    });

    console.log('✅ Complete Workbook Generated');
    console.log(`   Topic: ${result.content.topic}`);
    console.log(`   Content Sections: ${result.workbook.sections.length}`);
    console.log(`   Related Experiments: ${result.experiments?.length || 0}`);
    console.log(`   Diagram Status: ${result.diagrams?.status || 'rendering'}`);
    
    // Display experiment details
    if (result.experiments && result.experiments.length > 0) {
        console.log('\n   📚 Experiments Included:');
        result.experiments.forEach((exp, idx) => {
            console.log(`      ${idx + 1}. ${exp.name}`);
            console.log(`         - Historical: ${exp.historicalScientist || 'N/A'}`);
            console.log(`         - Lab: ${exp.labTitle || 'N/A'}`);
        });
    }

    // Wait for all diagrams to render
    console.log('\n⏳ Waiting for all diagrams to render...');
    const diagrams = await result.getDiagrams();
    
    console.log(`✨ ${diagrams.renderedImages.length} diagrams rendered successfully`);
    console.log('\n   🎨 Diagrams:');
    diagrams.renderedImages.forEach((diagram, idx) => {
        if (diagram.type === 'image') {
            console.log(`      ${idx + 1}. ${diagram.key} (${diagram.width}x${diagram.height})`);
        } else if (diagram.type === 'error') {
            console.log(`      ${idx + 1}. ${diagram.key} - ERROR: ${diagram.error}`);
        }
    });

    // Create complete workbook package
    const completeWorkbook = {
        metadata: {
            title: 'Complete Nucleic Acids Workbook',
            subtitle: 'Comprehensive Guide to DNA, RNA, and Molecular Genetics',
            version: '1.0',
            generated: new Date().toISOString(),
            author: 'Enhanced Molecular Biology Workbook System',
            level: 'graduate',
            estimatedStudyTime: '8-10 hours'
        },
        
        overview: {
            topic: result.content.topic,
            category: result.content.category,
            summary: result.content.summary,
            learningObjectives: workbook.generateMolecularLearningObjectives(),
            prerequisites: workbook.identifyMolecularPrerequisites(),
            difficulty: workbook.assessMolecularContentDifficulty()
        },
        
        content: {
            theoreticalContent: result.content,
            workbookSections: result.workbook.sections,
            contentSteps: result.steps,
            conceptualConnections: result.content.conceptualConnections,
            comparisons: result.content.comparison,
            examples: result.content.examples,
            applications: result.content.applications,
            contextualScenarios: result.content.contextualScenarios
        },
        
        experiments: {
            all: result.experiments,
            historical: result.experiments?.filter(e => e.historicalScientist) || [],
            laboratory: result.experiments?.filter(e => e.labTitle) || [],
            count: result.experiments?.length || 0
        },
        
        diagrams: {
            all: diagrams.renderedImages.map(d => ({
                key: d.key,
                type: d.type,
                width: d.width,
                height: d.height,
                filename: `${d.key}.png`,
                purpose: getDiagramPurpose(d.key),
                relatedTopics: getRelatedTopicsForDiagram(d.key)
            })),
            count: diagrams.renderedImages.length,
            categories: categorizeDiagrams(diagrams.renderedImages)
        },
        
        pedagogy: {
            misconceptions: result.workbook.sections.find(s => s.type === 'misconceptions'),
            metacognitivePrompts: result.workbook.sections.find(s => s.type === 'metacognitive'),
            studyTips: workbook.generateMolecularStudyTips(),
            assessmentQuestions: result.workbook.sections.find(s => s.type === 'assessment')
        },
        
        references: {
            relatedTopics: workbook.suggestRelatedTopics(),
            glossary: workbook.generateGlossary(),
            timeline: workbook.generateMolecularProcessTimeline('DNA Replication')
        },
        
        statistics: {
            contentCompleteness: workbook.calculateMolecularContentCompleteness(),
            qualityMetrics: workbook.getMolecularContentQualityMetrics(),
            cacheStats: workbook.getDiagramCacheStats()
        }
    };

    // Save complete workbook
    console.log('\n💾 Saving complete workbook package...');
    
    // Create output directory structure
    const outputDir = './output/complete_nucleic_acids';
    createDirectoryStructure(outputDir);
    
    // Save main workbook JSON
    saveWorkbookToFile(completeWorkbook, `${outputDir}/workbook.json`);
    
    // Save individual sections
    saveWorkbookToFile(completeWorkbook.content, `${outputDir}/content.json`);
    saveWorkbookToFile(completeWorkbook.experiments, `${outputDir}/experiments.json`);
    saveWorkbookToFile(completeWorkbook.pedagogy, `${outputDir}/pedagogy.json`);
    
    // Export all diagrams with metadata
    await exportDiagramsWithMetadata(
        diagrams.renderedImages,
        `${outputDir}/diagrams`,
        completeWorkbook.diagrams.all
    );
    
    // Generate HTML summary
    generateHTMLSummary(completeWorkbook, `${outputDir}/summary.html`);
    
    // Generate README
    generateREADME(completeWorkbook, `${outputDir}/README.md`);
    
    console.log('✅ Complete workbook package saved!');
    console.log(`   📁 Location: ${outputDir}/`);
    console.log(`   📊 Total files: ${diagrams.renderedImages.length + 6}`);
    console.log(`   📈 Content completeness: ${completeWorkbook.statistics.contentCompleteness}%`);
    
    return completeWorkbook;
}

// ========================================
// HELPER FUNCTIONS
// ========================================

function saveWorkbookToFile(data, filepath) {
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    
    // Remove buffer data for JSON (too large)
    const jsonData = JSON.parse(JSON.stringify(data, (key, value) => {
        if (key === 'buffer' && value && value.type === 'Buffer') {
            return '[Binary PNG Data]';
        }
        return value;
    }));
    
    fs.writeFileSync(filepath, JSON.stringify(jsonData, null, 2));
}

async function exportDiagramsToFolder(diagrams, folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
    
    for (const diagram of diagrams) {
        if (diagram.type === 'image' && diagram.buffer) {
            const filepath = path.join(folderPath, `${diagram.key}.png`);
            fs.writeFileSync(filepath, diagram.buffer);
        }
    }
}

async function exportDiagramsWithMetadata(diagrams, folderPath, metadata) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
    
    // Export images
    for (const diagram of diagrams) {
        if (diagram.type === 'image' && diagram.buffer) {
            const filepath = path.join(folderPath, `${diagram.key}.png`);
            fs.writeFileSync(filepath, diagram.buffer);
        }
    }
    
    // Export metadata
    const metadataPath = path.join(folderPath, 'diagram_metadata.json');
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
}

function extractProtocols(experiments) {
    if (!experiments) return [];
    
    return experiments
        .filter(exp => exp.labTitle)
        .map(exp => ({
            title: exp.labTitle,
            hypothesis: exp.hypothesis,
            materials: exp.materials,
            procedure: exp.procedure,
            safety: exp.safetyNotes || exp.safetyPrecautions
        }));
}

function getDiagramPurpose(diagramKey) {
    const purposes = {
        'dnaStructure': 'Illustrate the double helix structure of DNA',
        'rnaStructure': 'Show RNA structure and differences from DNA',
        'dnaReplication': 'Explain semiconservative DNA replication',
        'transcription': 'Demonstrate DNA to RNA transcription',
        'translation': 'Show protein synthesis from mRNA',
        'codonChart': 'Reference for genetic code translation',
        'chromosomes': 'Display chromosome organization'
    };
    
    return purposes[diagramKey] || 'Visual reference';
}

function getRelatedTopicsForDiagram(diagramKey) {
    const relations = {
        'dnaStructure': ['nucleic_acids', 'molecular_genetics', 'biochemistry'],
        'dnaReplication': ['nucleic_acids', 'cell_division', 'molecular_biology'],
        'transcription': ['nucleic_acids', 'gene_expression', 'molecular_biology'],
        'translation': ['proteins', 'gene_expression', 'molecular_biology']
    };
    
    return relations[diagramKey] || [];
}

function categorizeDiagrams(diagrams) {
    const categories = {
        structure: [],
        process: [],
        technique: [],
        other: []
    };
    
    diagrams.forEach(diagram => {
        if (diagram.key.includes('Structure')) {
            categories.structure.push(diagram.key);
        } else if (diagram.key.includes('Replication') || diagram.key.includes('transcription') || diagram.key.includes('translation')) {
            categories.process.push(diagram.key);
        } else {
            categories.other.push(diagram.key);
        }
    });
    
    return categories;
}

function createDirectoryStructure(baseDir) {
    const dirs = [
        baseDir,
        `${baseDir}/diagrams`,
        `${baseDir}/content`,
        `${baseDir}/experiments`
    ];
    
    dirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    });
}

function generateHTMLSummary(workbook, filepath) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${workbook.metadata.title}</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; }
        h1 { color: #1976d2; }
        h2 { color: #0d47a1; border-bottom: 2px solid #bbdefb; padding-bottom: 5px; }
        .stat { background: #e3f2fd; padding: 10px; margin: 10px 0; border-radius: 5px; }
        .diagram { display: inline-block; margin: 10px; text-align: center; }
        .diagram img { max-width: 300px; border: 1px solid #ccc; }
        .experiment { background: #f3e5f5; padding: 15px; margin: 10px 0; border-radius: 5px; }
    </style>
</head>
<body>
    <h1>${workbook.metadata.title}</h1>
    <p><strong>Generated:</strong> ${new Date(workbook.metadata.generated).toLocaleString()}</p>
    <p><strong>Level:</strong> ${workbook.metadata.level}</p>
    <p><strong>Estimated Study Time:</strong> ${workbook.metadata.estimatedStudyTime}</p>
    
    <h2>Overview</h2>
    <p>${workbook.overview.summary}</p>
    
    <div class="stat">
        <strong>Content Completeness:</strong> ${workbook.statistics.contentCompleteness}%<br>
        <strong>Diagrams:</strong> ${workbook.diagrams.count}<br>
        <strong>Experiments:</strong> ${workbook.experiments.count}<br>
        <strong>Difficulty:</strong> ${workbook.overview.difficulty}
    </div>
    
    <h2>Experiments (${workbook.experiments.count})</h2>
    ${workbook.experiments.all.map(exp => `
        <div class="experiment">
            <h3>${exp.name}</h3>
            <p><strong>Scientist:</strong> ${exp.historicalScientist || 'Various'}</p>
            ${exp.labTitle ? `<p><strong>Lab:</strong> ${exp.labTitle}</p>` : ''}
        </div>
    `).join('')}
    
    <h2>Diagrams (${workbook.diagrams.count})</h2>
    <div>
        ${workbook.diagrams.all.map(d => `
            <div class="diagram">
                <img src="diagrams/${d.filename}" alt="${d.key}">
                <p><strong>${d.key}</strong></p>
            </div>
        `).join('')}
    </div>
</body>
</html>
    `;
    
    fs.writeFileSync(filepath, html);
}

function generateREADME(workbook, filepath) {
    const readme = `# ${workbook.metadata.title}

${workbook.metadata.subtitle}

## Overview

${workbook.overview.summary}

**Level:** ${workbook.metadata.level}  
**Estimated Study Time:** ${workbook.metadata.estimatedStudyTime}  
**Generated:** ${new Date(workbook.metadata.generated).toLocaleString()}

## Contents

- **Diagrams:** ${workbook.diagrams.count} high-quality molecular diagrams
- **Experiments:** ${workbook.experiments.count} (${workbook.experiments.historical.length} historical, ${workbook.experiments.laboratory.length} lab)
- **Content Completeness:** ${workbook.statistics.contentCompleteness}%

## Learning Objectives

${workbook.overview.learningObjectives.map(obj => `- ${obj}`).join('\n')}

## Prerequisites

${workbook.overview.prerequisites.map(prereq => `- ${prereq}`).join('\n')}

## Experiments

${workbook.experiments.all.map(exp => `
### ${exp.name}
- **Scientist:** ${exp.historicalScientist || 'Various'}
${exp.labTitle ? `- **Lab Experiment:** ${exp.labTitle}` : ''}
`).join('\n')}

## Diagrams

${workbook.diagrams.all.map(d => `- ${d.key} - ${d.purpose}`).join('\n')}

## File Structure

\`\`\`
complete_nucleic_acids/
├── workbook.json           # Complete workbook data
├── content.json            # Theoretical content
├── experiments.json        # All experiments
├── pedagogy.json          # Teaching materials
├── summary.html           # HTML summary
├── README.md              # This file
└── diagrams/              # All diagram images
    ├── diagram_metadata.json
    └── *.png
\`\`\`

## Usage

1. Review the HTML summary for an overview
2. Study the content.json for theoretical background
3. Explore experiments.json for historical and lab procedures
4. Reference diagrams/ for visual aids
5. Use pedagogy.json for teaching strategies

---

Generated by Enhanced Molecular Biology Workbook System
`;
    
    fs.writeFileSync(filepath, readme);
}

// ========================================
// RUN ALL EXAMPLES
// ========================================

async function runAllExamples() {
    console.log('\n' + '='.repeat(80));
    console.log('ENHANCED MOLECULAR BIOLOGY WORKBOOK - DEMONSTRATION');
    console.log('='.repeat(80));
    
    try {
        // Example 1: Simple
        generateSimpleNucleicAcidWorkbook();
        
        // Wait a bit
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Example 2: Historical
        generateNucleicAcidWithHistoricalExperiment();
        
        // Wait a bit
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Example 3: Lab
        generateNucleicAcidWithLabExperiment();
        
        // Wait a bit
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Example 4: Complete (this one waits for everything)
        await generateCompleteNucleicAcidWorkbook();
        
        console.log('\n' + '='.repeat(80));
        console.log('✅ ALL EXAMPLES COMPLETED SUCCESSFULLY!');
        console.log('='.repeat(80));
        console.log('\nCheck the ./output/ directory for all generated files.');
        
    } catch (error) {
        console.error('\n❌ Error running examples:', error);
    }
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    runAllExamples().catch(console.error);
}

// Export for use as module
export {
    generateSimpleNucleicAcidWorkbook,
    generateNucleicAcidWithHistoricalExperiment,
    generateNucleicAcidWithLabExperiment,
    generateCompleteNucleicAcidWorkbook,
    runAllExamples
};
