import readline from 'readline';
import * as docx from "docx";
import PDFDocument from 'pdfkit';

import fs from 'fs';


import { GraphingCalculator, GraphingCalculatorGame,Theme} from './graphing.js';
import { ExcelChartsRegistry, ChartCanvasRenderer} from './chart.js';
import { AnatomicalDiagramsRegistry, AnatomicalShapes,AnatomicalDiagramRenderer} from './anatomy.js';
import { ChemistryDiagramsRegistry, ChemistryDiagramRenderer } from './chemDiagrams.js';
import { PhysicsDiagramsRegistry, PhysicsDiagramRenderer } from './physics.js';
import { CrossSectionDiagramsRegistry,CrossSectionDiagramRenderer,CrossSectionShapes} from './crossection.js';
import { GeometricShapesRegistry,GeometricShapeRenderer} from './geometry.js';

import { GraphRegistry,  GraphRenderer} from './graph.js';


import { EnhancedCellBiologyWorkbook } from './cellbiology.js';

import { EnhancedHumanAnatomyWorkbook } from './anatomybiology.js';

import { EnhancedTaxonomyClassificationWorkbook } from './taxonomybiology.js';

import {EnhancedReproductionBiologyWorkbook} from './reproductionbiology.js';

import { EnhancedPlantBiologyWorkbook } from './plantbiology.js';

import { EnhancedMicrobiologyWorkbook } from './microbiology.js';

import { EnhancedHealthDiseaseImmunologyWorkbook } from './immunitybiology.js';

import { EnhancedHomeostasisRegulationWorkbook } from './homeostasisbiology.js';

import { EnhancedGeneticsMolecularBiologyWorkbook } from './geneticbiology.js';

import { EnhancedEvolutionBiologyWorkbook } from './evolutionbiology.js';

import { EnhancedEnergyInLivingSystemsWorkbook } from './energybiology.js';

import { EnhancedEcologyBiologyWorkbook } from './ecologybiology.js';


import { EnhancedStoichiometryMathematicalWorkbook } from './stoichiometryworkbook.js';

import { EnhancedRedoxChemistryWorkbook } from './RedOxWorkbook.js';

import { EnhancedOrganicChemistryMathematicalWorkbook } from './OrganicChemistryWorkbook.js';

import { EnhancedMatterParticleTheoryWorkbook } from './MatterParticlesWorkbook.js';

import { EnhancedEquilibriumChemistryWorkbook } from './equilibriumworkbook.js';

import { EnhancedAcidBaseMathematicalWorkbook } from './acidbaseworkbook.js';

import { EnhancedAtomicChemicalWorkbook } from './AtomicBondingWorkbook.js';

import { EnhancedKineticsThermodynamicsWorkbook } from './KineticThermodynamicWorkbook.js';


import { EnhancedMechanicsPhysicsWorkbook } from './mechanicsworkbook.js';
import { EnhancedWaveSoundPhysicsWorkbook } from './soundwavesworkbook.js';
import { EnhancedThermodynamicsMathematicalWorkbook } from './thermoworkbook.js';
import { EnhancedOpticsWorkbook } from './opticsworkbook.js';
import { EnhancedRelativityMathematicalWorkbook } from './relativityworkbook.js';
import { EnhancedPhysicsMathematicalWorkbook } from './modernphysicsworkbook.js';
import { EnhancedElectricityMagnetismWorkbook } from './electroworkbook.js';
import { EnhancedNuclearPhysicsMathematicalWorkbook } from './nuclearphysicsworkbook.js';

import { EnhancedLinearMathematicalWorkbook } from './linearworkbook.js';
import { EnhancedQuadraticMathematicalWorkbook } from './quadraticworkbook.js';
import { EnhancedSimultaneousEquationsWorkbook } from './SimultaneousWorkbook.js';
import { EnhancedPolynomialMathematicalWorkbook } from './polynomialworkbook.js'
import { EnhancedTriangleMathematicalWorkbook } from './TriangleWorkbook.js';
import { EnhancedCircleGeometryWorkbook } from './CircleWorkbook.js';
import { EnhancedQuadrilateralsMathematicalWorkbook } from './QuadrilateralsWorkbook.js';
import { EnhancedAnglesMathematicalWorkbook } from './AnglesWorkbook.js';
import { EnhancedSimilarityCongruenceWorkbook } from './SimilarityCongruenceWorkbook.js';
import { EnhancedAlgebraicExpressionWorkbook } from './AlgebraExpressionWorkbook.js';
import { EnhancedFunctionsGraphsWorkbook } from './FunctionGraphsWorkbook.js';
import { EnhancedTrigonometricWorkbook } from './TrigonometryWorkbook.js';
import { EnhancedSolidGeometryWorkbook } from './SolidGeometryWorkbook.js';
import { EnhancedSurfaceAreaVolumeWorkbook } from './SurfaceAreaVolumeWorkbook.js';
import { EnhancedCoordinateGeometryWorkbook } from './CoordinateGeometryWorkbook.js';
import { EnhancedNumberTheoryWorkbook } from './NumberTheoryWorkbook.js';
import { EnhancedSequenceSeriesWorkbook } from './SequenceSeriesWorkbook.js';
import { EnhancedMatrixMathematicalWorkbook } from './MatrixWorkbook.js';
import { EnhancedVectorMathematicalWorkbook } from './VectorWorkbook.js';
import { EnhancedRationalAlgebraicWorkbook } from './RationalWorkbook.js';
import { EnhancedExponentialMathematicalWorkbook } from './ExponentialWorkbook.js';

import { createCanvas } from '@napi-rs/canvas';
import ExcelJS from 'exceljs';

const { Document, Packer, Paragraph, TextRun, Table, TableCell, TableRow, 
        AlignmentType, HeadingLevel, BorderStyle, WidthType, UnderlineType } = docx;




// === COMPREHENSIVE EXAMINATION PAPER GENERATOR ===
// Integrated with Problem Solver - Multi-Subject Support

class ChemistryExamPaperGenerator {
    constructor() {
        this.initializeRelatedProblemGenerators();
        this.initializeExamSettings();
        this.initializeDatabases();
        this.checkMissingGenerators(); //
    }


    checkMissingGenerators() {
    const missingGenerators = [];
    
    for (const [key, generator] of Object.entries(this.relatedProblemGenerators)) {
        if (!generator || typeof generator !== 'function') {
            missingGenerators.push(key);
        }
    }
    
    if (missingGenerators.length > 0) {
        console.warn('⚠ Missing generator methods:');
        missingGenerators.forEach(gen => console.warn(`   - ${gen}`));
    } else {
        console.log('✓ All generators registered successfully');
    }
    
    return missingGenerators;
}

    // === EXAM CONFIGURATION ===

    initializeExamSettings() {
        this.examSettings = {
            paperFormats: {
                A4: { width: 210, height: 297, unit: 'mm', margins: { top: 25, bottom: 25, left: 20, right: 20 } },
                Letter: { width: 8.5, height: 11, unit: 'inches', margins: { top: 1, bottom: 1, left: 0.75, right: 0.75 } }
            },
            fonts: {
                title: { name: 'Times New Roman', size: 16, bold: true },
                heading: { name: 'Times New Roman', size: 14, bold: true },
                subheading: { name: 'Times New Roman', size: 13, bold: true },
                body: { name: 'Times New Roman', size: 12, bold: false },
                instructions: { name: 'Times New Roman', size: 11, bold: false },
                footer: { name: 'Times New Roman', size: 10, bold: false }
            },
            lineSpacing: {
                normal: 1.0,
                comfortable: 1.15,
                spacious: 1.5,
                double: 2.0
            },
            markingSchemes: {
                easier: { marksRange: [1, 2, 3, 4] },
                similar: { marksRange: [3, 4, 5, 6] },
                harder: { marksRange: [5, 6, 7, 8, 10] }
            }
        };
    }

    initializeDatabases() {
        this.initializeBiologyDatabases();
        this.initializePhysicsDatabases();
        this.initializeMathematicsDatabases();
        this.initializeChemistryDatabases();
    }

    // Database initialization methods (stubs - implement as needed)
    initializeBiologyDatabases() { /* Biology data */ }
    initializePhysicsDatabases() { /* Physics data */ }
    initializeMathematicsDatabases() { /* Mathematics data */ }
    initializeChemistryDatabases() { /* Chemistry data */ }

    // ========================================================================
    // EXAM PAPER GENERATION METHODS
    // ========================================================================

    generateExaminationPaper(config) {
        const {
            examBoard = 'National Examination Board',
            schoolName = 'Excellence High School',
            examType = 'Mid-Term Examination',
            academicYear = '2024/2025',
            term = 'First Term',
            subjectName = 'Chemistry',
            subjectCode = 'CHEM-101',
            gradeLevel = 'Grade 11',
            examDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            duration = '2 hours 30 minutes',
            totalMarks = 100,
            
            topics = ['stoichiometry', 'organic_chemistry', 'acid_base_chemistry'],
            sectionConfiguration = {
                sectionA: { difficulty: 'easier', questionsCount: 7, marksPercentage: 40 },
                sectionB: { difficulty: 'similar', questionsCount: 5, marksPercentage: 35 },
                sectionC: { difficulty: 'harder', questionsCount: 3, marksPercentage: 25 }
            },
            
            paperSize = 'A4',
            orientation = 'Portrait',
            lineSpacing = 'comfortable',
            answerSpaceLines = 5,
            includeLogo = false,
            logoPath = '',
            
            instructions = [
                'Answer ALL questions in the spaces provided',
                'Write your Name, Class, and Index Number clearly',
                'All working must be shown for full credit',
                'Use black or blue pen only (pencil for diagrams)',
                'Scientific calculators are allowed',
                'Non-programmable calculators only',
                'Mobile phones are strictly prohibited'
            ],
            
            examinerName = 'Dr. John Smith',
            examinerTitle = 'Senior Chemistry Teacher',
            moderatorName = 'Prof. Jane Doe',
            copyrightYear = new Date().getFullYear(),
            copyrightHolder = 'National Examination Board',
            
            includeMarkingScheme = true
        } = config;

        try {
            const questions = this.generateQuestionsForExam({
                topics,
                sectionConfiguration,
                totalMarks
            });

            const examPaper = {
                metadata: {
                    examBoard,
                    schoolName,
                    examType,
                    academicYear,
                    term,
                    subjectName,
                    subjectCode,
                    gradeLevel,
                    examDate,
                    duration,
                    totalMarks,
                    paperSize,
                    orientation,
                    generatedAt: new Date().toISOString()
                },
                
                coverPage: this.generateCoverPage({
                    examBoard, schoolName, examType, academicYear, term,
                    subjectName, subjectCode, gradeLevel, examDate,
                    duration, totalMarks, instructions, includeLogo, logoPath
                }),
                
                questionSections: questions.sections,
                
                closingPage: this.generateClosingPage({
                    examinerName, examinerTitle, moderatorName,
                    copyrightYear, copyrightHolder
                }),
                
                markingScheme: includeMarkingScheme ? this.generateMarkingScheme(questions) : null,
                
                formatting: {
                    lineSpacing,
                    answerSpaceLines,
                    fonts: this.examSettings.fonts,
                    margins: this.examSettings.paperFormats[paperSize].margins
                }
            };

            return examPaper;

        } catch (error) {
            throw new Error(`Failed to generate examination paper: ${error.message}`);
        }
    }

    generateQuestionsForExam(config) {
        const { topics, sectionConfiguration, totalMarks } = config;
        const sections = [];
        const sectionLabels = Object.keys(sectionConfiguration);
        const usedQuestionTexts = new Set(); // Track used questions to avoid duplicates

        sectionLabels.forEach(sectionKey => {
            const sectionConfig = sectionConfiguration[sectionKey];
            const sectionLabel = sectionKey.replace('section', '');
            const sectionMarks = Math.round((totalMarks * sectionConfig.marksPercentage) / 100);

            const sectionQuestions = this.generateSectionQuestions({
                sectionLabel,
                topics,
                difficulty: sectionConfig.difficulty,
                questionsCount: sectionConfig.questionsCount,
                targetMarks: sectionMarks,
                usedQuestionTexts // Pass to track duplicates
            });

            sections.push({
                label: sectionLabel,
                title: this.getSectionTitle(sectionLabel, sectionConfig.difficulty),
                instructions: this.getSectionInstructions(sectionLabel, sectionConfig),
                questions: sectionQuestions.questions,
                totalMarks: sectionQuestions.totalMarks
            });
        });

        return { 
            sections, 
            totalQuestions: sections.reduce((sum, sec) => sum + sec.questions.length, 0),
            totalMarks: sections.reduce((sum, sec) => sum + sec.totalMarks, 0)
        };
    }

    generateSectionQuestions(config) {
    const { sectionLabel, topics, difficulty, questionsCount, targetMarks, usedQuestionTexts } = config;
    
    console.log(`\n📋 Generating Section ${sectionLabel}:`);
    console.log(`   Topics: ${topics.join(', ')}`);
    console.log(`   Difficulty: ${difficulty}`);
    console.log(`   Questions needed: ${questionsCount}`);
    
    const questions = [];
    const marksPerQuestion = Math.round(targetMarks / questionsCount);
    let questionNumber = this.getStartingQuestionNumber(sectionLabel);
    
    let attempts = 0;
    const maxAttempts = questionsCount * 10;

    while (questions.length < questionsCount && attempts < maxAttempts) {
        attempts++;
        
        const topicIndex = questions.length % topics.length;
        const topic = topics[topicIndex];
        
        console.log(`\n   🎯 Attempt ${attempts}: Topic "${topic}" (Question ${questions.length + 1}/${questionsCount})`);
        
        const problemTypes = this.selectProblemTypesFromTopic(topic);
        
        for (const problemType of problemTypes) {
            if (questions.length >= questionsCount) break;
            
            console.log(`      Trying problem type: ${problemType}`);
            
            const originalProblem = { type: problemType, parameters: {} };
            const originalSolution = {};
            
            try {
                const relatedProblems = this.generateRelatedProblems(originalProblem, originalSolution, {
                    count: 5,
                    difficultyRange: [difficulty]
                });

                console.log(`      Generated ${relatedProblems.relatedProblems.length} problems`);

                if (relatedProblems.relatedProblems.length > 0) {
                    const suitableProblems = relatedProblems.relatedProblems.filter(p => 
                        p.difficulty === difficulty && !usedQuestionTexts.has(p.problem)
                    );
                    
                    console.log(`      ${suitableProblems.length} suitable for difficulty "${difficulty}"`);
                    
                    if (suitableProblems.length > 0) {
                        const problem = suitableProblems[Math.floor(Math.random() * suitableProblems.length)];
                        const questionMarks = this.assignMarks(difficulty, marksPerQuestion);
                        
                        usedQuestionTexts.add(problem.problem);
                        
                        let diagramInfo = null;
                        if (problem.generateDiagram && typeof problem.generateDiagram === 'function') {
                            console.log(`      📊 Generating diagram...`);
                            try {
                                diagramInfo = problem.generateDiagram();
                                console.log(`      ✓ Diagram result:`, diagramInfo.success ? `✅ ${diagramInfo.filename}` : `❌ ${diagramInfo.error}`);
                            } catch (error) {
                                console.error(`      ❌ Diagram error: ${error.message}`);
                            }
                        }
                        
                        // FIXED: Store the problem type correctly
                        questions.push({
                            number: questionNumber,
                            topic: this.formatTopicName(topic),
                            difficulty: difficulty,
                            problemText: problem.problem,
                            scenario: problem.scenario,
                            marks: questionMarks,
                            parameters: {
                                ...problem.parameters,
                                type: problem.type || problemType // CRITICAL: Ensure type is stored
                            },
                            type: problem.type || problemType, // CRITICAL: Store at top level too
                            realWorldContext: problem.realWorldContext,
                            subparts: problem.subparts || [],
                            helper: problem.helper || '',
                            diagramInfo: diagramInfo,
                            answerSpaceType: this.determineAnswerSpaceType(problem, questionMarks)
                        });

                        console.log(`      ✅ Added question ${questionNumber} (type: ${problem.type || problemType})`);
                        questionNumber++;
                        break;
                    }
                }
            } catch (error) {
                console.error(`      ❌ Error: ${error.message}`);
            }
        }
    }

    console.log(`\n   📊 Section ${sectionLabel} complete: ${questions.length}/${questionsCount} questions generated\n`);

    return { 
        questions, 
        totalMarks: questions.reduce((sum, q) => sum + q.marks, 0)
    };
}


    selectProblemTypesFromTopic(topic) {
        const topicMapping = {
            // Chemistry topics
            'stoichiometry': [
                'mole_calculations', 'mole_calculations_diagram',
                'equation_balancing', 'equation_balancing_diagram',
                'mass_mass_stoichiometry', 'mass_mass_stoichiometry_diagram',
                'limiting_reagent', 'limiting_reagent_diagram',
                'percent_yield', 'percent_yield_diagram',
                'gas_stoichiometry', 'gas_stoichiometry_diagram'
            ],
            'organic_chemistry': [
                'alkanes', 'alkanes_diagram',
                'alkenes', 'alkenes_diagram',
                'functional_groups', 'functional_groups_diagram',
                'isomerism', 'isomerism_diagram',
                'nomenclature', 'nomenclature_diagram'
            ],
            'acid_base_chemistry': [
                'acid_base_neutralization', 'acid_base_neutralization_diagram',
                'ph_calculations', 'ph_calculations_diagram',
                'buffers', 'buffers_diagram',
                'titrations', 'titrations_diagram'
            ],
            'redox_chemistry': [
                'redox_stoichiometry', 'redox_stoichiometry_diagram',
                'oxidation_states', 'oxidation_states_diagram',
                'half_reactions', 'half_reactions_diagram'
            ],
            'electrochemistry': [
                'electrochemistry', 'electrochemistry_diagram',
                'galvanic_cells', 'galvanic_cells_diagram',
                'electrolysis', 'electrolysis_diagram'
            ],
            'equilibrium': [
                'equilibrium_constants', 'equilibrium_constants_diagram',
                'le_chatelier', 'le_chatelier_diagram',
                'solubility_equilibria', 'solubility_equilibria_diagram'
            ],
            'kinetics': [
                'reaction_kinetics', 'reaction_kinetics_diagram',
                'rate_laws', 'rate_laws_diagram',
                'activation_energy', 'activation_energy_diagram'
            ],
            'thermodynamics': [
                'entropy', 'entropy_diagram',
                'gibbs_free_energy', 'gibbs_free_energy_diagram',
                'spontaneity', 'spontaneity_diagram'
            ],
            'atomic_structure': [
                'atomic_structure', 'atomic_structure_diagram',
                'electron_configuration', 'electron_configuration_diagram',
                'periodic_trends', 'periodic_trends_diagram',
                'bonding', 'bonding_diagram'
            ],
            
            // Physics topics
            'mechanics': [
                'kinematics_1d', 'kinematics_1d_diagram',
                'kinematics_2d', 'kinematics_2d_diagram',
                'projectile_motion', 'projectile_motion_diagram',
                'newtons_laws', 'newtons_laws_diagram',
                'work_energy', 'work_energy_diagram',
                'momentum_collisions', 'momentum_collisions_diagram'
            ],
            'electricity': [
                'electrostatics', 'electrostatics_diagram',
                'electric_fields', 'electric_fields_diagram',
                'current_resistance', 'current_resistance_diagram',
                'dc_circuits', 'dc_circuits_diagram'
            ],
            'waves': [
                'wave_properties', 'wave_properties_diagram',
                'sound_waves', 'sound_waves_diagram',
                'doppler_effect', 'doppler_effect_diagram',
                'standing_waves', 'standing_waves_diagram'
            ],
            'optics': [
                'reflection', 'reflection_diagram',
                'refraction', 'refraction_diagram',
                'lenses', 'lenses_diagram',
                'mirrors', 'mirrors_diagram',
                'diffraction', 'diffraction_diagram'
            ],
            'thermodynamics': [
                'temperature_heat', 'temperature_heat_diagram',
                'calorimetry', 'calorimetry_diagram',
                'heat_transfer', 'heat_transfer_diagram',
                'heat_engines', 'heat_engines_diagram',
                'thermodynamic_processes', 'thermodynamic_processes_diagram'
            ],
            
            // Biology topics
            'cell_biology': [
                'cell_structure', 'cell_structure_diagram',
                'cell_membrane', 'cell_membrane_diagram',
                'organelles', 'organelles_diagram',
                'cell_division', 'cell_division_diagram',
                'mitosis_meiosis', 'mitosis_meiosis_diagram'
            ],
            'genetics': [
                'mendelian_genetics', 'mendelian_genetics_diagram',
                'punnett_squares', 'punnett_squares_diagram',
                'dna_structure', 'dna_structure_diagram',
                'dna_replication', 'dna_replication_diagram'
            ],
            'human_anatomy': [
                'circulatory_system', 'circulatory_system_diagram',
                'respiratory_system', 'respiratory_system_diagram',
                'digestive_system', 'digestive_system_diagram',
                'nervous_system', 'nervous_system_diagram',
                'excretory_system', 'excretory_system_diagram'
            ],
            'ecology': [
                'ecosystems', 'ecosystems_diagram',
                'food_webs', 'food_webs_diagram',
                'energy_flow', 'energy_flow_diagram',
                'population_dynamics', 'population_dynamics_diagram'
            ],
            'biotechnology': [
                'genetic_engineering', 'genetic_engineering_diagram',
                'pcr', 'pcr_diagram',
                'gel_electrophoresis', 'gel_electrophoresis_diagram'
            ],
            
            // Mathematics topics
            'algebra': [
                'linear_equations',
                'quadratic_equations',
                'simultaneous_equations',
                'polynomials',
                'exponential_logarithmic'
            ],
            'geometry': [
                'triangles',
                'circles',
                'quadrilaterals',
                'coordinate_geometry',
                'solid_geometry'
            ],
            'calculus': [
                'limits',
                'differentiation',
                'integration',
                'derivative_rules',
                'area_under_curve'
            ],
            'trigonometry': [
                'trig_ratios',
                'trig_identities',
                'sine_cosine_rules',
                'trig_equations'
            ],
            'complex_numbers': [
                'complex_basics',
                'complex_operations',
                'argand_diagram',
                'polar_form'
            ]
        };

        const problemTypes = topicMapping[topic] || ['mole_calculations'];
        // Shuffle to get variety
        return problemTypes.sort(() => Math.random() - 0.5);
    }

    // Helper methods
    getStartingQuestionNumber(sectionLabel) {
        const startNumbers = { 'A': 1, 'B': 1, 'C': 1 }; // All start from 1
        return startNumbers[sectionLabel] || 1;
    }

    formatTopicName(topic) {
        const names = {
            'stoichiometry': 'Stoichiometry',
            'organic_chemistry': 'Organic Chemistry',
            'acid_base_chemistry': 'Acid-Base Chemistry',
            'redox_chemistry': 'Redox Chemistry',
            'electrochemistry': 'Electrochemistry',
            'equilibrium': 'Chemical Equilibrium',
            'kinetics': 'Chemical Kinetics',
            'thermodynamics': 'Thermodynamics',
            'atomic_structure': 'Atomic Structure',
            'mechanics': 'Mechanics',
            'electricity': 'Electricity and Magnetism',
            'waves': 'Waves and Sound',
            'optics': 'Optics',
            'cell_biology': 'Cell Biology',
            'genetics': 'Genetics',
            'human_anatomy': 'Human Anatomy and Physiology',
            'ecology': 'Ecology',
            'biotechnology': 'Biotechnology',
            'algebra': 'Algebra',
            'geometry': 'Geometry',
            'calculus': 'Calculus',
            'trigonometry': 'Trigonometry',
            'complex_numbers': 'Complex Numbers'
        };
        return names[topic] || topic;
    }

    getSectionTitle(label, difficulty) {
        const titles = {
            'easier': 'Section A: Multiple Choice and Short Answer Questions',
            'similar': 'Section B: Structured Questions',
            'harder': 'Section C: Extended Response Questions'
        };
        return titles[difficulty] || 'Questions';
    }

    getSectionInstructions(label, config) {
        return `Answer ALL questions in this section. Each question carries marks as indicated.`;
    }

    assignMarks(difficulty, baseMarks) {
        const marksRange = this.examSettings.markingSchemes[difficulty].marksRange;
        return marksRange.reduce((prev, curr) => 
            Math.abs(curr - baseMarks) < Math.abs(prev - baseMarks) ? curr : prev
        );
    }

    determineAnswerSpaceType(problem, marks) {
        if (marks <= 2) return 'short';
        if (marks <= 5) return 'medium';
        if (marks <= 8) return 'long';
        return 'extended';
    }

    generateCoverPage(config) {
        return {
            header: {
                logo: config.includeLogo ? config.logoPath : null,
                examBoard: config.examBoard.toUpperCase(),
                schoolName: config.schoolName.toUpperCase()
            },
            title: {
                examType: config.examType.toUpperCase(),
                academicYear: config.academicYear,
                term: config.term
            },
            subjectInfo: {
                name: config.subjectName.toUpperCase(),
                code: config.subjectCode,
                gradeLevel: config.gradeLevel
            },
            examDetails: [
                { label: 'Date', value: config.examDate },
                { label: 'Time Allowed', value: config.duration },
                { label: 'Total Marks', value: config.totalMarks }
            ],
            candidateInformation: {
                title: 'CANDIDATE INFORMATION',
                fields: [
                    { label: 'NAME', width: 'full', underline: true },
                    { label: 'INDEX NUMBER', width: 'half', underline: true },
                    { label: 'CLASS/GRADE', width: 'half', underline: true }
                ]
            },
            instructions: {
                title: 'INSTRUCTIONS TO CANDIDATES',
                items: config.instructions,
                warnings: [
                    '⚠ DO NOT OPEN THIS PAPER UNTIL INSTRUCTED',
                    '⚠ READ ALL INSTRUCTIONS CAREFULLY'
                ]
            }
        };
    }

    generateClosingPage(config) {
        return {
            endMessage: { text: 'END OF EXAMINATION', style: 'centered, bold, large' },
            examinerDetails: {
                preparedBy: {
                    label: 'Prepared by',
                    name: config.examinerName,
                    title: config.examinerTitle,
                    signature: '___________________',
                    date: new Date().toLocaleDateString()
                },
                moderatedBy: {
                    label: 'Moderated by',
                    name: config.moderatorName,
                    signature: '___________________',
                    date: 'Date: ___________________'
                }
            },
            copyright: {
                symbol: '©',
                year: config.copyrightYear,
                holder: config.copyrightHolder,
                notice: 'All rights reserved. This paper is confidential.'
            }
        };
    }

    generateMarkingScheme(questions) {
        return {
            metadata: {
                title: 'CONFIDENTIAL MARKING SCHEME',
                subtitle: 'For Examiners Only',
                warning: '⚠ CONFIDENTIAL INFORMATION'
            },
            generalGuidelines: [
                'Award marks according to scheme',
                'Accept equivalent answers',
                'Award method marks for correct approach',
                'Subparts indicate expected solution steps',
                'Helper notes provide context for marking'
            ],
            sections: questions.sections.map(section => ({
                section: section.label,
                title: section.title,
                totalMarks: section.totalMarks,
                questions: section.questions.map(q => ({
                    number: q.number,
                    topic: q.topic,
                    totalMarks: q.marks,
                    helper: q.helper || 'N/A',
                    subparts: q.subparts || [],
                    markingPoints: this.generateMarkingPoints(q)
                }))
            }))
        };
    }

    generateMarkingPoints(question) {
        const marks = question.marks;
        const subparts = question.subparts || [];
        
        if (subparts.length > 0) {
            return [{
                part: 'Complete Answer',
                totalMarks: marks,
                subpartBreakdown: subparts.map((subpart, index) => ({
                    step: index + 1,
                    description: subpart,
                    marks: Math.ceil(marks / subparts.length)
                })),
                helper: question.helper
            }];
        } else {
            return [{
                part: 'Complete Answer',
                totalMarks: marks,
                breakdown: [
                    { component: 'Understanding', marks: Math.ceil(marks * 0.3) },
                    { component: 'Method/Working', marks: Math.ceil(marks * 0.5) },
                    { component: 'Final Answer', marks: Math.floor(marks * 0.2) }
                ]
            }];
        }
    }

    // [Rest of your export methods remain the same - exportToDOCXFile, exportToPDFFile, etc.]
    // I'll continue with the rest if needed

    // ========================================================================
    // DISPLAY METHODS
    // ========================================================================

    displayExamPaperPreview(examPaper) {
        console.log('\n' + '='.repeat(80));
        console.log('EXAMINATION PAPER PREVIEW');
        console.log('='.repeat(80) + '\n');
        
        console.log(`📋 Exam: ${examPaper.metadata.examType}`);
        console.log(`📚 Subject: ${examPaper.metadata.subjectName} (${examPaper.metadata.subjectCode})`);
        console.log(`🎓 Grade: ${examPaper.metadata.gradeLevel}`);
        console.log(`📅 Date: ${examPaper.metadata.examDate}`);
        console.log(`⏱️  Duration: ${examPaper.metadata.duration}`);
        console.log(`💯 Total Marks: ${examPaper.metadata.totalMarks}`);
        
        console.log('\n' + '-'.repeat(80));
        console.log('SECTIONS');
        console.log('-'.repeat(80) + '\n');
        
        examPaper.questionSections.forEach(section => {
            console.log(`Section ${section.label}: ${section.title}`);
            console.log(`  Questions: ${section.questions.length}`);
            console.log(`  Marks: ${section.totalMarks}`);
            
            // Show diagram count
            const diagramCount = section.questions.filter(q => q.diagramInfo && q.diagramInfo.success).length;
            if (diagramCount > 0) {
                console.log(`  📊 Questions with diagrams: ${diagramCount}`);
            }
            console.log();
        });
        
        console.log('='.repeat(80) + '\n');
    }

    displayMarkingSchemePreview(markingScheme) {
        console.log('\n' + '='.repeat(80));
        console.log('MARKING SCHEME PREVIEW - CONFIDENTIAL');
        console.log('='.repeat(80) + '\n');
        
        console.log(`⚠️  ${markingScheme.metadata.warning}`);
        console.log(`📋 ${markingScheme.metadata.title}\n`);
        
        markingScheme.sections.forEach(section => {
            console.log(`Section ${section.section}: ${section.totalMarks} marks`);
            console.log(`  Questions: ${section.questions.length}`);
            
            // Show helper availability
            const helpersCount = section.questions.filter(q => q.helper && q.helper !== 'N/A').length;
            console.log(`  Helpers available: ${helpersCount}`);
            console.log();
        });
        
        console.log('='.repeat(80) + '\n');
    }

    // ========================================================================
    // DOCX EXPORT METHODS (UPDATED)
    // ========================================================================

    async exportToDOCXFile(examPaper, filename = 'exam_paper.docx') {
        const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
                WidthType, HeadingLevel, AlignmentType, UnderlineType, ImageRun } = await import('docx');
        const fs = await import('fs');

        try {
            const doc = new Document({
                sections: [
                    this.createCoverPageSection(examPaper, Document, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, HeadingLevel, AlignmentType, UnderlineType),
                    ...examPaper.questionSections.map(section => 
                        this.createQuestionSection(section, examPaper.formatting, Document, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, HeadingLevel, AlignmentType, UnderlineType, ImageRun)
                    ),
                    this.createClosingPageSection(examPaper.closingPage, Document, Paragraph, TextRun, HeadingLevel, AlignmentType)
                ]
            });

            const buffer = await Packer.toBuffer(doc);
            fs.writeFileSync(filename, buffer);
            
            console.log(`\n✅ Exam paper saved to: ${filename}`);
            return filename;

        } catch (error) {
            console.error(`❌ Error creating DOCX file: ${error.message}`);
            throw error;
        }
    }

    createQuestionSection(section, formatting, Document, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, HeadingLevel, AlignmentType, UnderlineType, ImageRun) {
        
        
        return {
            properties: {
                page: {
                    margin: {
                        top: 1440,
                        right: 1440,
                        bottom: 1440,
                        left: 1440
                    }
                }
            },
            children: [
                new Paragraph({
                    text: `SECTION ${section.label}`,
                    heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 200 }
                }),
                new Paragraph({
                    text: section.title,
                    heading: HeadingLevel.HEADING_2,
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 200 }
                }),
                new Paragraph({
                    text: section.instructions,
                    italics: true,
                    spacing: { after: 400 }
                }),

                ...section.questions.flatMap(question => 
                    this.createQuestionParagraphs(question, formatting, Paragraph, TextRun, ImageRun, fs)
                )
            ]
        };
    }

    createQuestionParagraphs(question, formatting, Paragraph, TextRun, ImageRun, fs) {
        const paragraphs = [];

        // Question header
        paragraphs.push(
            new Paragraph({
                children: [
                    new TextRun({ text: `${question.number}. `, bold: true }),
                    new TextRun({ text: question.problemText }),
                    new TextRun({ text: `\t[${question.marks} marks]`, bold: true })
                ],
                spacing: { after: 200 }
            })
        );

        // Add diagram if available
        if (question.diagramInfo && question.diagramInfo.success && question.diagramInfo.path) {
            try {
                if (fs.existsSync(question.diagramInfo.path)) {
                    const imageData = fs.readFileSync(question.diagramInfo.path);
                    
                    paragraphs.push(
                        new Paragraph({
                            children: [
                                new ImageRun({
                                    data: imageData,
                                    transformation: {
                                        width: 400,
                                        height: 300
                                    }
                                })
                            ],
                            alignment: AlignmentType.CENTER,
                            spacing: { before: 200, after: 200 }
                        })
                    );
                }
            } catch (error) {
                console.warn(`Could not embed diagram for question ${question.number}:`, error.message);
            }
        }

        // Subparts (don't show these to students - they're for marking)
        // Only show the answer space

        // Answer space
        const lines = this.getAnswerLines(question.marks, formatting.answerSpaceLines);
        for (let i = 0; i < lines; i++) {
            paragraphs.push(
                new Paragraph({
                    text: '_'.repeat(100),
                    spacing: { after: 100 }
                })
            );
        }

        paragraphs.push(new Paragraph({ text: '', spacing: { after: 400 } }));

        return paragraphs;
    }

    getAnswerLines(marks, baseLines) {
        if (marks <= 2) return Math.min(3, baseLines);
        if (marks <= 5) return baseLines;
        if (marks <= 8) return baseLines * 2;
        return baseLines * 3;
    }

    createCoverPageSection(examPaper, Document, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, HeadingLevel, AlignmentType, UnderlineType) {
        const { coverPage, metadata } = examPaper;
        
        return {
            properties: {
                page: {
                    margin: {
                        top: 1440,
                        right: 1440,
                        bottom: 1440,
                        left: 1440
                    }
                }
            },
            children: [
                new Paragraph({
                    text: coverPage.header.examBoard,
                    heading: HeadingLevel.TITLE,
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 200 }
                }),
                new Paragraph({
                    text: coverPage.header.schoolName,
                    heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 400 }
                }),

                new Paragraph({
                    text: coverPage.title.examType,
                    heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 200 }
                }),
                new Paragraph({
                    text: `${coverPage.title.academicYear} - ${coverPage.title.term}`,
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 400 }
                }),

                new Paragraph({
                    text: coverPage.subjectInfo.name,
                    heading: HeadingLevel.HEADING_2,
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 100 }
                }),
                new Paragraph({
                    text: `Subject Code: ${coverPage.subjectInfo.code}`,
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 100 }
                }),
                new Paragraph({
                    text: `Grade Level: ${coverPage.subjectInfo.gradeLevel}`,
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 400 }
                }),

                this.createExamDetailsTable(coverPage.examDetails, Table, TableRow, TableCell, Paragraph, WidthType),

                new Paragraph({ text: '', spacing: { after: 400 } }),

                new Paragraph({
                    text: 'CANDIDATE INFORMATION',
                    heading: HeadingLevel.HEADING_2,
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 200 }
                }),
                ...coverPage.candidateInformation.fields.map(field => 
                    new Paragraph({
                        children: [
                            new TextRun({ text: `${field.label}: `, bold: true }),
                            new TextRun({ 
                                text: '_'.repeat(60), 
                                underline: { type: UnderlineType.SINGLE }
                            })
                        ],
                        spacing: { after: 200 }
                    })
                ),

                new Paragraph({ text: '', spacing: { after: 400 } }),

                new Paragraph({
                    text: coverPage.instructions.title,
                    heading: HeadingLevel.HEADING_2,
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 200 }
                }),
                ...coverPage.instructions.items.map((item, index) => 
                    new Paragraph({
                        text: `${index + 1}. ${item}`,
                        spacing: { after: 100 },
                        indent: { left: 720 }
                    })
                ),

                new Paragraph({ text: '', spacing: { after: 200 } }),
                ...coverPage.instructions.warnings.map(warning => 
                    new Paragraph({
                        text: warning,
                        alignment: AlignmentType.CENTER,
                        bold: true,
                        spacing: { after: 100 }
                    })
                )
            ]
        };
    }

    createExamDetailsTable(examDetails, Table, TableRow, TableCell, Paragraph, WidthType) {
        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: examDetails.map(detail => 
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({ 
                                text: detail.label, 
                                bold: true 
                            })],
                            width: { size: 40, type: WidthType.PERCENTAGE }
                        }),
                        new TableCell({
                            children: [new Paragraph({ text: detail.value })],
                            width: { size: 60, type: WidthType.PERCENTAGE }
                        })
                    ]
                })
            )
        });
    }

    createClosingPageSection(closingPage, Document, Paragraph, TextRun, HeadingLevel, AlignmentType) {
        return {
            properties: {
                page: {
                    margin: {
                        top: 1440,
                        right: 1440,
                        bottom: 1440,
                        left: 1440
                    }
                }
            },
            children: [
                new Paragraph({ text: '', spacing: { after: 2000 } }),

                new Paragraph({
                    text: closingPage.endMessage.text,
                    heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 1000 }
                }),

                new Paragraph({
                    text: `${closingPage.examinerDetails.preparedBy.label}:`,
                    bold: true,
                    spacing: { after: 200 }
                }),
                new Paragraph({
                    text: closingPage.examinerDetails.preparedBy.name,
                    spacing: { after: 100 }
                }),
                new Paragraph({
                    text: closingPage.examinerDetails.preparedBy.title,
                    spacing: { after: 100 }
                }),
                new Paragraph({
                    text: `Signature: ${closingPage.examinerDetails.preparedBy.signature}`,
                    spacing: { after: 100 }
                }),
                new Paragraph({
                    text: `Date: ${closingPage.examinerDetails.preparedBy.date}`,
                    spacing: { after: 400 }
                }),

                new Paragraph({
                    text: `${closingPage.examinerDetails.moderatedBy.label}:`,
                    bold: true,
                    spacing: { after: 200 }
                }),
                new Paragraph({
                    text: closingPage.examinerDetails.moderatedBy.name,
                    spacing: { after: 100 }
                }),
                new Paragraph({
                    text: `Signature: ${closingPage.examinerDetails.moderatedBy.signature}`,
                    spacing: { after: 100 }
                }),
                new Paragraph({
                    text: closingPage.examinerDetails.moderatedBy.date,
                    spacing: { after: 600 }
                }),

                new Paragraph({
                    text: `${closingPage.copyright.symbol} ${closingPage.copyright.year} ${closingPage.copyright.holder}`,
                    alignment: AlignmentType.CENTER,
                    bold: true,
                    spacing: { after: 200 }
                }),
                new Paragraph({
                    text: closingPage.copyright.notice,
                    alignment: AlignmentType.CENTER,
                    italics: true,
                    spacing: { after: 200 }
                })
            ]
        };
    }

    async exportMarkingSchemeToDOCXFile(markingScheme, filename = 'marking_scheme.docx') {
        

        try {
            const doc = new Document({
                sections: [{
                    properties: {
                        page: {
                            margin: {
                                top: 1440,
                                right: 1440,
                                bottom: 1440,
                                left: 1440
                            }
                        }
                    },
                    children: [
                        new Paragraph({
                            text: markingScheme.metadata.title,
                            heading: HeadingLevel.TITLE,
                            alignment: AlignmentType.CENTER,
                            spacing: { after: 200 }
                        }),
                        new Paragraph({
                            text: markingScheme.metadata.subtitle,
                            alignment: AlignmentType.CENTER,
                            spacing: { after: 200 }
                        }),
                        new Paragraph({
                            text: markingScheme.metadata.warning,
                            alignment: AlignmentType.CENTER,
                            bold: true,
                            spacing: { after: 400 }
                        }),

                        new Paragraph({
                            text: 'GENERAL MARKING GUIDELINES',
                            heading: HeadingLevel.HEADING_1,
                            spacing: { after: 200 }
                        }),
                        ...markingScheme.generalGuidelines.map((guideline, index) => 
                            new Paragraph({
                                text: `${index + 1}. ${guideline}`,
                                spacing: { after: 100 }
                            })
                        ),

                        new Paragraph({ text: '', spacing: { after: 400 } }),

                        ...markingScheme.sections.flatMap(section => [
                            new Paragraph({
                                text: `SECTION ${section.section}: ${section.title}`,
                                heading: HeadingLevel.HEADING_1,
                                spacing: { after: 200 }
                            }),
                            new Paragraph({
                                text: `Total Marks: ${section.totalMarks}`,
                                bold: true,
                                spacing: { after: 200 }
                            }),
                            ...section.questions.flatMap(q => {
                                const paragraphs = [
                                    new Paragraph({
                                        text: `Question ${q.number} - ${q.topic} [${q.totalMarks} marks]`,
                                        heading: HeadingLevel.HEADING_2,
                                        spacing: { after: 200 }
                                    })
                                ];

                                // Add helper if available
                                if (q.helper && q.helper !== 'N/A') {
                                    paragraphs.push(
                                        new Paragraph({
                                            children: [
                                                new TextRun({ text: 'Helper: ', bold: true }),
                                                new TextRun({ text: q.helper, italics: true })
                                            ],
                                            spacing: { after: 200 }
                                        })
                                    );
                                }

                                // Add subparts if available
                                if (q.subparts && q.subparts.length > 0) {
                                    paragraphs.push(
                                        new Paragraph({
                                            text: 'Expected Solution Steps:',
                                            bold: true,
                                            spacing: { after: 100 }
                                        })
                                    );

                                    q.subparts.forEach((subpart, index) => {
                                        paragraphs.push(
                                            new Paragraph({
                                                text: `${index + 1}. ${subpart}`,
                                                spacing: { after: 50 },
                                                indent: { left: 720 }
                                            })
                                        );
                                    });

                                    paragraphs.push(
                                        new Paragraph({ text: '', spacing: { after: 200 } })
                                    );
                                }

                                // Add marking points
                                q.markingPoints.forEach(point => {
                                    paragraphs.push(
                                        new Paragraph({
                                            text: `${point.part} [${point.totalMarks} marks]`,
                                            bold: true,
                                            spacing: { after: 100 }
                                        })
                                    );

                                    if (point.subpartBreakdown) {
                                        point.subpartBreakdown.forEach(step => {
                                            paragraphs.push(
                                                new Paragraph({
                                                    text: `Step ${step.step}: ${step.description} [${step.marks} mark(s)]`,
                                                    spacing: { after: 50 },
                                                    indent: { left: 720 }
                                                })
                                            );
                                        });
                                    } else if (point.breakdown) {
                                        point.breakdown.forEach(item => {
                                            paragraphs.push(
                                                new Paragraph({
                                                    text: `• ${item.component}: ${item.marks} mark(s)`,
                                                    spacing: { after: 50 },
                                                    indent: { left: 720 }
                                                })
                                            );
                                        });
                                    }
                                });

                                paragraphs.push(
                                    new Paragraph({ text: '', spacing: { after: 400 } })
                                );

                                return paragraphs;
                            })
                        ])
                    ]
                }]
            });

            const buffer = await Packer.toBuffer(doc);
            fs.writeFileSync(filename, buffer);
            
            console.log(`✅ Marking scheme saved to: ${filename}`);
            return filename;

        } catch (error) {
            console.error(`❌ Error creating marking scheme: ${error.message}`);
            throw error;
        }
    }

    // ========================================================================
    // PDF EXPORT METHODS (UPDATED)
    // ========================================================================

    async exportToPDFFile(examPaper, filename = 'exam_paper.pdf') {
        

        return new Promise((resolve, reject) => {
            try {
                const doc = new PDFDocument({
                    size: 'A4',
                    margins: {
                        top: 72,
                        bottom: 72,
                        left: 72,
                        right: 72
                    },
                    info: {
                        Title: `${examPaper.metadata.subjectName} Examination`,
                        Author: examPaper.metadata.examBoard,
                        Subject: examPaper.metadata.subjectName,
                        Keywords: 'exam, education'
                    }
                });

                const stream = fs.createWriteStream(filename);
                doc.pipe(stream);

                this.createPDFCoverPage(doc, examPaper);

                examPaper.questionSections.forEach((section, index) => {
                    doc.addPage();
                    this.createPDFQuestionSection(doc, section, examPaper.formatting);
                });

                doc.addPage();
                this.createPDFClosingPage(doc, examPaper.closingPage);

                doc.end();

                stream.on('finish', () => {
                    console.log(`\n✅ Exam paper PDF saved to: ${filename}`);
                    resolve(filename);
                });

                stream.on('error', reject);

            } catch (error) {
                console.error(`❌ Error creating PDF: ${error.message}`);
                reject(error);
            }
        });
    }

    createPDFCoverPage(doc, examPaper) {
        const { coverPage, metadata } = examPaper;
        const pageWidth = doc.page.width;
        const pageHeight = doc.page.height;
        const margin = 72;

        doc.fontSize(18)
           .font('Helvetica-Bold')
           .text(coverPage.header.examBoard, margin, 100, {
               align: 'center',
               width: pageWidth - (margin * 2)
           });

        doc.moveDown(0.5);
        doc.fontSize(16)
           .text(coverPage.header.schoolName, {
               align: 'center'
           });

        doc.moveDown(2);
        doc.fontSize(16)
           .font('Helvetica-Bold')
           .text(coverPage.title.examType, {
               align: 'center'
           });

        doc.moveDown(0.5);
        doc.fontSize(12)
           .font('Helvetica')
           .text(`${coverPage.title.academicYear} - ${coverPage.title.term}`, {
               align: 'center'
           });

        doc.moveDown(2);
        const boxY = doc.y;
        doc.rect(margin + 50, boxY, pageWidth - (margin * 2) - 100, 100)
           .stroke();

        doc.fontSize(14)
           .font('Helvetica-Bold')
           .text(coverPage.subjectInfo.name, margin + 60, boxY + 20, {
               align: 'center',
               width: pageWidth - (margin * 2) - 120
           });

        doc.fontSize(11)
           .font('Helvetica')
           .text(`Subject Code: ${coverPage.subjectInfo.code}`, {
               align: 'center'
           });

        doc.text(`Grade Level: ${coverPage.subjectInfo.gradeLevel}`, {
            align: 'center'
        });

        doc.moveDown(3);
        const detailsY = doc.y;
        
        coverPage.examDetails.forEach((detail, index) => {
            doc.fontSize(11)
               .font('Helvetica-Bold')
               .text(`${detail.label}:`, margin, detailsY + (index * 25), { continued: true })
               .font('Helvetica')
               .text(`  ${detail.value}`);
        });

        doc.moveDown(3);
        doc.fontSize(12)
           .font('Helvetica-Bold')
           .text('CANDIDATE INFORMATION', {
               align: 'center',
               underline: true
           });

        doc.moveDown(1);
        coverPage.candidateInformation.fields.forEach(field => {
            doc.fontSize(10)
               .font('Helvetica-Bold')
               .text(`${field.label}:`, margin, doc.y, { continued: true })
               .font('Helvetica')
               .text('  ' + '_'.repeat(60));
            doc.moveDown(0.8);
        });

        doc.moveDown(1.5);
        const instructionsY = doc.y;
        const instructionsHeight = 200;
        
        doc.rect(margin, instructionsY, pageWidth - (margin * 2), instructionsHeight)
           .stroke();

        doc.fontSize(12)
           .font('Helvetica-Bold')
           .text(coverPage.instructions.title, margin + 10, instructionsY + 10, {
               align: 'center',
               width: pageWidth - (margin * 2) - 20
           });

        doc.moveDown(0.8);
        doc.fontSize(10)
           .font('Helvetica');

        coverPage.instructions.items.forEach((item, index) => {
            doc.text(`${index + 1}. ${item}`, margin + 15, doc.y, {
                width: pageWidth - (margin * 2) - 30
            });
            doc.moveDown(0.5);
        });

        doc.moveDown(1);
        coverPage.instructions.warnings.forEach(warning => {
            doc.fontSize(10)
               .font('Helvetica-Bold')
               .text(warning, {
                   align: 'center'
               });
            doc.moveDown(0.3);
        });
    }

    createPDFQuestionSection(doc, section, formatting) {
        const pageWidth = doc.page.width;
        const margin = 72;

        doc.fontSize(14)
           .font('Helvetica-Bold')
           .text(`SECTION ${section.label}`, margin, 100, {
               align: 'center',
               underline: true
           });

        doc.moveDown(0.5);
        doc.fontSize(12)
           .text(section.title, {
               align: 'center'
           });

        doc.moveDown(1);
        doc.fontSize(10)
           .font('Helvetica-Oblique')
           .text(section.instructions, margin, doc.y, {
               width: pageWidth - (margin * 2)
           });

        doc.moveDown(1.5);

        section.questions.forEach((question, qIndex) => {
            if (doc.y > doc.page.height - 200) {
                doc.addPage();
            }

            this.createPDFQuestion(doc, question, formatting, margin, pageWidth);
        });
    }

    createPDFQuestion(doc, question, formatting, margin, pageWidth) {
        
        
        doc.fontSize(11)
           .font('Helvetica-Bold')
           .text(`${question.number}. `, margin, doc.y, { continued: true })
           .font('Helvetica')
           .text(question.problemText, { continued: true })
           .font('Helvetica-Bold')
           .text(`  [${question.marks} marks]`, { align: 'right' });

        doc.moveDown(0.8);

        // Add diagram if available
        if (question.diagramInfo && question.diagramInfo.success && question.diagramInfo.path) {
            try {
                if (fs.existsSync(question.diagramInfo.path)) {
                    const currentY = doc.y;
                    
                    // Add some space before diagram
                    doc.moveDown(0.5);
                    
                    // Center the image
                    const imageWidth = 300;
                    const imageHeight = 225;
                    const imageX = (pageWidth - imageWidth) / 2;
                    
                    // Check if we need a new page for the image
                    if (doc.y + imageHeight > doc.page.height - 100) {
                        doc.addPage();
                    }
                    
                    doc.image(question.diagramInfo.path, imageX, doc.y, {
                        width: imageWidth,
                        height: imageHeight,
                        align: 'center'
                    });
                    
                    doc.moveDown(imageHeight / 12 + 1); // Move past the image
                }
            } catch (error) {
                console.warn(`Could not embed diagram for question ${question.number}:`, error.message);
            }
        }

        // Answer lines
        const lines = this.getAnswerLines(question.marks, formatting.answerSpaceLines);
        for (let i = 0; i < lines; i++) {
            if (doc.y > doc.page.height - 100) {
                doc.addPage();
            }
            doc.fontSize(10)
               .font('Helvetica')
               .text('_'.repeat(85), margin, doc.y);
            doc.moveDown(0.6);
        }

        doc.moveDown(1.5);
    }

    createPDFClosingPage(doc, closingPage) {
        const pageWidth = doc.page.width;
        const margin = 72;

        doc.moveDown(10);

        doc.fontSize(16)
           .font('Helvetica-Bold')
           .text(closingPage.endMessage.text, {
               align: 'center'
           });

        doc.moveDown(5);

        doc.fontSize(11)
           .font('Helvetica-Bold')
           .text(`${closingPage.examinerDetails.preparedBy.label}:`, margin, doc.y);

        doc.moveDown(0.5);
        doc.font('Helvetica')
           .text(closingPage.examinerDetails.preparedBy.name, margin);

        doc.moveDown(0.3);
        doc.text(closingPage.examinerDetails.preparedBy.title, margin);

        doc.moveDown(0.5);
        doc.text(`Signature: ${closingPage.examinerDetails.preparedBy.signature}`, margin);

        doc.moveDown(0.3);
        doc.text(`Date: ${closingPage.examinerDetails.preparedBy.date}`, margin);

        doc.moveDown(2);

        doc.fontSize(11)
           .font('Helvetica-Bold')
           .text(`${closingPage.examinerDetails.moderatedBy.label}:`, margin, doc.y);

        doc.moveDown(0.5);
        doc.font('Helvetica')
           .text(closingPage.examinerDetails.moderatedBy.name, margin);

        doc.moveDown(0.5);
        doc.text(`Signature: ${closingPage.examinerDetails.moderatedBy.signature}`, margin);

        doc.moveDown(0.3);
        doc.text(closingPage.examinerDetails.moderatedBy.date, margin);

        doc.moveDown(4);

        doc.fontSize(10)
           .font('Helvetica-Bold')
           .text(`${closingPage.copyright.symbol} ${closingPage.copyright.year} ${closingPage.copyright.holder}`, {
               align: 'center'
           });

        doc.moveDown(0.5);
        doc.fontSize(9)
           .font('Helvetica-Oblique')
           .text(closingPage.copyright.notice, {
               align: 'center',
               width: pageWidth - (margin * 2)
           });
    }

    async exportMarkingSchemeToPDFFile(markingScheme, filename = 'marking_scheme.pdf') {
        

        return new Promise((resolve, reject) => {
            try {
                const doc = new PDFDocument({
                    size: 'A4',
                    margins: { top: 72, bottom: 72, left: 72, right: 72 }
                });

                const stream = fs.createWriteStream(filename);
                doc.pipe(stream);

                const pageWidth = doc.page.width;
                const margin = 72;

                doc.fontSize(18)
                   .font('Helvetica-Bold')
                   .fillColor('red')
                   .text(markingScheme.metadata.title, margin, 150, {
                       align: 'center'
                   });

                doc.moveDown(1);
                doc.fontSize(14)
                   .fillColor('black')
                   .text(markingScheme.metadata.subtitle, {
                       align: 'center'
                   });

                doc.moveDown(2);
                doc.fontSize(12)
                   .font('Helvetica-Bold')
                   .fillColor('red')
                   .text(markingScheme.metadata.warning, {
                       align: 'center'
                   });

                doc.fillColor('black');

                doc.addPage();
                doc.fontSize(14)
                   .font('Helvetica-Bold')
                   .text('GENERAL MARKING GUIDELINES', margin, 100);

                doc.moveDown(1);
                doc.fontSize(10)
                   .font('Helvetica');

                markingScheme.generalGuidelines.forEach((guideline, index) => {
                    doc.text(`${index + 1}. ${guideline}`, margin, doc.y, {
                        width: pageWidth - (margin * 2)
                    });
                    doc.moveDown(0.5);
                });

                markingScheme.sections.forEach(section => {
                    doc.addPage();
                    
                    doc.fontSize(14)
                       .font('Helvetica-Bold')
                       .text(`SECTION ${section.section}: ${section.title}`, margin, 100);

                    doc.moveDown(0.5);
                    doc.fontSize(11)
                       .text(`Total Marks: ${section.totalMarks}`);

                    doc.moveDown(1.5);

                    section.questions.forEach(q => {
                        if (doc.y > doc.page.height - 300) {
                            doc.addPage();
                        }

                        doc.fontSize(12)
                           .font('Helvetica-Bold')
                           .text(`Question ${q.number} - ${q.topic}`, margin, doc.y);

                        doc.fontSize(10)
                           .font('Helvetica')
                           .text(`Total Marks: ${q.totalMarks}`, margin, doc.y);

                        doc.moveDown(0.5);

                        // Add helper if available
                        if (q.helper && q.helper !== 'N/A') {
                            doc.fontSize(10)
                               .font('Helvetica-Bold')
                               .text('Helper: ', margin, doc.y, { continued: true })
                               .font('Helvetica-Oblique')
                               .text(q.helper);
                            
                            doc.moveDown(0.5);
                        }

                        // Add subparts if available
                        if (q.subparts && q.subparts.length > 0) {
                            doc.fontSize(10)
                               .font('Helvetica-Bold')
                               .text('Expected Solution Steps:', margin, doc.y);

                            doc.moveDown(0.3);
                            doc.font('Helvetica');

                            q.subparts.forEach((subpart, index) => {
                                if (doc.y > doc.page.height - 100) {
                                    doc.addPage();
                                }
                                doc.text(`${index + 1}. ${subpart}`, margin + 20, doc.y, {
                                    width: pageWidth - (margin * 2) - 20
                                });
                                doc.moveDown(0.3);
                            });

                            doc.moveDown(0.5);
                        }

                        // Add marking points
                        q.markingPoints.forEach(point => {
                            doc.fontSize(10)
                               .font('Helvetica-Bold')
                               .text(`${point.part} [${point.totalMarks} marks]`, margin + 10, doc.y);

                            doc.moveDown(0.5);
                            doc.font('Helvetica');

                            if (point.subpartBreakdown) {
                                point.subpartBreakdown.forEach(step => {
                                    if (doc.y > doc.page.height - 100) {
                                        doc.addPage();
                                    }
                                    doc.text(`Step ${step.step}: [${step.marks} mark(s)]`, margin + 20, doc.y);
                                    doc.moveDown(0.2);
                                });
                            } else if (point.breakdown) {
                                point.breakdown.forEach(item => {
                                    doc.text(`• ${item.component}: ${item.marks} mark(s)`, margin + 20, doc.y);
                                    doc.moveDown(0.2);
                                });
                            }

                            doc.moveDown(0.5);
                        });

                        doc.moveDown(1);
                    });
                });

                doc.end();

                stream.on('finish', () => {
                    console.log(`✅ Marking scheme PDF saved to: ${filename}`);
                    resolve(filename);
                });

                stream.on('error', reject);

            } catch (error) {
                console.error(`❌ Error creating marking scheme PDF: ${error.message}`);
                reject(error);
            }
        });
    }

    // ========================================================================
    // RELATED PROBLEMS GENERATION (Main method to call generators)
    // ========================================================================

    generateRelatedProblems(originalProblem, originalSolution, options = {}) {
    const {
        count = 5,
        difficultyRange = ['easier', 'similar', 'harder'],
        includeRealWorld = true,
        includeConceptualVariations = true
    } = options;

    try {
        const problemType = originalProblem.type;
        const generator = this.relatedProblemGenerators[problemType];

        if (!generator) {
            throw new Error(`No related problem generator for type: ${problemType}`);
        }

        const relatedProblems = generator.call(this, originalProblem, originalSolution, {
            count,
            difficultyRange,
            includeRealWorld,
            includeConceptualVariations
        });

        // FIXED: Ensure each problem has the type property
        const problemsWithType = relatedProblems.map(problem => ({
            ...problem,
            type: problem.type || problemType // Ensure type is always set
        }));

        return {
            originalProblem: originalProblem,
            relatedProblems: problemsWithType,
            totalProblems: problemsWithType.length,
            category: this.getCategoryFromType(problemType),
            generatedAt: new Date().toISOString()
        };

    } catch (error) {
        throw new Error(`Failed to generate related problems: ${error.message}`);
    }

}



// ========================================================================
    // PROBLEM GENERATOR INTEGRATION (From ChemistryProblemSolver)
    // ========================================================================
// ========================================================================
initializeRelatedProblemGenerators() {
    this.relatedProblemGenerators = {
        // Stoichiometry Generators
        mole_calculations: this.generateRelatedMoleCalculations.bind(this),
        equation_balancing: this.generateRelatedEquationBalancing.bind(this),
        mass_mass_stoichiometry: this.generateRelatedMassMassStoichiometry.bind(this),
        limiting_reagent: this.generateRelatedLimitingReagent.bind(this),
        percent_yield: this.generateRelatedPercentYield.bind(this),
        gas_stoichiometry: this.generateRelatedGasStoichiometry.bind(this),
        solution_stoichiometry: this.generateRelatedSolutionStoichiometry.bind(this),
        thermochemical_stoichiometry: this.generateRelatedThermochemical.bind(this),
        empirical_formula: this.generateRelatedEmpiricalFormula.bind(this),
        
        // Stoichiometry Diagram Generators
        mole_calculations_diagram: this.generateRelatedMoleCalculationsDiagram.bind(this),
        equation_balancing_diagram: this.generateRelatedEquationBalancingDiagram.bind(this),
        mass_mass_stoichiometry_diagram: this.generateRelatedMassMassStoichiometryDiagram.bind(this),
        limiting_reagent_diagram: this.generateRelatedLimitingReagentDiagram.bind(this),
        percent_yield_diagram: this.generateRelatedPercentYieldDiagram.bind(this),
        gas_stoichiometry_diagram: this.generateRelatedGasStoichiometryDiagram.bind(this),
        solution_stoichiometry_diagram: this.generateRelatedSolutionStoichiometryDiagram.bind(this),
        thermochemical_stoichiometry_diagram: this.generateRelatedThermochemicalDiagram.bind(this),
        empirical_formula_diagram: this.generateRelatedEmpiricalFormulaDiagram.bind(this),

        // Organic Chemistry Generators
        alkanes: this.generateRelatedAlkanes.bind(this),
        alkenes: this.generateRelatedAlkenes.bind(this),
        alkynes: this.generateRelatedAlkynes.bind(this),
        aromatic_compounds: this.generateRelatedAromatic.bind(this),
        functional_groups: this.generateRelatedFunctionalGroups.bind(this),
        isomerism: this.generateRelatedIsomerism.bind(this),
        organic_reactions: this.generateRelatedOrganicReactions.bind(this),
        nomenclature: this.generateRelatedNomenclature.bind(this),
        reaction_mechanisms: this.generateRelatedMechanisms.bind(this),
        polymers: this.generateRelatedPolymers.bind(this),
        
        // Organic Chemistry Diagram Generators
        alkanes_diagram: this.generateRelatedAlkanesDiagram.bind(this),
        alkenes_diagram: this.generateRelatedAlkenesDiagram.bind(this),
        alkynes_diagram: this.generateRelatedAlkynesDiagram.bind(this),
        aromatic_compounds_diagram: this.generateRelatedAromaticDiagram.bind(this),
        functional_groups_diagram: this.generateRelatedFunctionalGroupsDiagram.bind(this),
        isomerism_diagram: this.generateRelatedIsomerismDiagram.bind(this),
        organic_reactions_diagram: this.generateRelatedOrganicReactionsDiagram.bind(this),
        nomenclature_diagram: this.generateRelatedNomenclatureDiagram.bind(this),
        reaction_mechanisms_diagram: this.generateRelatedMechanismsDiagram.bind(this),
        polymers_diagram: this.generateRelatedPolymersDiagram.bind(this),

        // Redox Chemistry Generators
        redox_stoichiometry: this.generateRelatedRedoxStoichiometry.bind(this),
        oxidation_states: this.generateRelatedOxidationStates.bind(this),
        half_reactions: this.generateRelatedHalfReactions.bind(this),
        electrochemistry: this.generateRelatedElectrochemistry.bind(this),
        galvanic_cells: this.generateRelatedGalvaniCells.bind(this),
        electrolysis: this.generateRelatedElectrolysis.bind(this),     
        // Redox Chemistry Diagram Generators
        redox_stoichiometry_diagram: this.generateRelatedRedoxStoichiometryDiagram.bind(this),
        oxidation_states_diagram: this.generateRelatedOxidationStatesDiagram.bind(this),
        half_reactions_diagram: this.generateRelatedHalfReactionsDiagram.bind(this),
        electrochemistry_diagram: this.generateRelatedElectrochemistryDiagram.bind(this),
        galvanic_cells_diagram: this.generateRelatedGalvaniCellsDiagram.bind(this),
        electrolysis_diagram: this.generateRelatedElectrolysisDiagram.bind(this),

        // Acid-Base Chemistry Generators
        acid_base_neutralization: this.generateRelatedAcidBase.bind(this),
        ph_calculations: this.generateRelatedpHCalculations.bind(this),
        buffers: this.generateRelatedBuffers.bind(this),
        titrations: this.generateRelatedTitrations.bind(this),
        polyprotic_acids: this.generateRelatedPolyproticAcids.bind(this),
        
        // Acid-Base Chemistry Diagram Generators
        acid_base_neutralization_diagram: this.generateRelatedAcidBaseDiagram.bind(this),
        ph_calculations_diagram: this.generateRelatedpHCalculationsDiagram.bind(this),
        buffers_diagram: this.generateRelatedBuffersDiagram.bind(this),
        titrations_diagram: this.generateRelatedTitrationsDiagram.bind(this),
        

        // Equilibrium Chemistry Generators
        equilibrium_constants: this.generateRelatedEquilibriumConstants.bind(this),
        le_chatelier: this.generateRelatedLeChatelir.bind(this),
        solubility_equilibria: this.generateRelatedSolubilityEquilibria.bind(this),
        complex_ions: this.generateRelatedComplexIons.bind(this),
        gas_equilibrium: this.generateRelatedGasEquilibrium.bind(this),
        
        // Equilibrium Chemistry Diagram Generators
        equilibrium_constants_diagram: this.generateRelatedEquilibriumConstantsDiagram.bind(this),
        le_chatelier_diagram: this.generateRelatedLeChatelirDiagram.bind(this),
        solubility_equilibria_diagram: this.generateRelatedSolubilityEquilibriaDiagram.bind(this),
        complex_ions_diagram: this.generateRelatedComplexIonsDiagram.bind(this),
        gas_equilibrium_diagram: this.generateRelatedGasEquilibriumDiagram.bind(this),

        // Kinetics & Thermodynamics Generators
        
        
        // Kinetics & Thermodynamics Diagram Generators
        reaction_kinetics_diagram: this.generateRelatedReactionKineticsDiagram.bind(this),
        rate_laws_diagram: this.generateRelatedRateLawsDiagram.bind(this),
        activation_energy_diagram: this.generateRelatedActivationEnergyDiagram.bind(this),
        entropy_diagram: this.generateRelatedEntropyDiagram.bind(this),
        gibbs_free_energy_diagram: this.generateRelatedGibbsEnergyDiagram.bind(this),
        spontaneity_diagram: this.generateRelatedSpontaneityDiagram.bind(this),

        
        // Atomic Structure Diagram Generators
        atomic_structure_diagram: this.generateRelatedAtomicStructureDiagram.bind(this),
        quantum_numbers_diagram: this.generateRelatedQuantumNumbersDiagram.bind(this),
        electron_configuration_diagram: this.generateRelatedElectronConfigurationDiagram.bind(this),
        periodic_trends_diagram: this.generateRelatedPeriodicTrendsDiagram.bind(this),
        bonding_diagram: this.generateRelatedBondingDiagram.bind(this),
        molecular_geometry_diagram: this.generateRelatedMolecularGeometryDiagram.bind(this),
        hybridization_diagram: this.generateRelatedHybridizationDiagram.bind(this),

       
        // Chemical Bonding & Lewis Structures Diagram Generators
        lewis_structures_diagram: this.generateRelatedLewisStructuresDiagram.bind(this),
        vsepr_theory_diagram: this.generateRelatedVSEPRDiagram.bind(this),
        bond_polarity_diagram: this.generateRelatedBondPolarityDiagram.bind(this),
        intermolecular_forces_diagram: this.generateRelatedIntermolecularForcesDiagram.bind(this),

        
        // States of Matter & Particle Theory Diagram Generators
        
        // NEW: Nuclear Chemistry
        
        // Nuclear Chemistry Diagram Generators
        radioactive_decay_diagram: this.generateRelatedRadioactiveDecayDiagram.bind(this),
        nuclear_equations_diagram: this.generateRelatedNuclearEquationsDiagram.bind(this),
        half_life_diagram: this.generateRelatedHalfLifeDiagram.bind(this),
        nuclear_reactions_diagram: this.generateRelatedNuclearReactionsDiagram.bind(this),

        // NEW: Laboratory Chemistry
        
        
        // ==================== PHYSICS GENERATORS ====================

        // Mechanics Generators
        kinematics_1d: this.generateRelatedKinematics1D.bind(this),
        kinematics_2d: this.generateRelatedKinematics2D.bind(this),
        projectile_motion: this.generateRelatedProjectileMotion.bind(this),
        newtons_laws: this.generateRelatedNewtonsLaws.bind(this),
        friction: this.generateRelatedFriction.bind(this),
        circular_motion: this.generateRelatedCircularMotion.bind(this),
        work_energy: this.generateRelatedWorkEnergy.bind(this),
        momentum_collisions: this.generateRelatedMomentumCollisions.bind(this),
        rotational_motion: this.generateRelatedRotationalMotion.bind(this),
        gravitation: this.generateRelatedGravitation.bind(this),
        
        // Mechanics Diagram Generators
        kinematics_1d_diagram: this.generateRelatedKinematics1DDiagram.bind(this),
        kinematics_2d_diagram: this.generateRelatedKinematics2DDiagram.bind(this),
        projectile_motion_diagram: this.generateRelatedProjectileMotionDiagram.bind(this),
        newtons_laws_diagram: this.generateRelatedNewtonsLawsDiagram.bind(this),
        friction_diagram: this.generateRelatedFrictionDiagram.bind(this),
        circular_motion_diagram: this.generateRelatedCircularMotionDiagram.bind(this),
        work_energy_diagram: this.generateRelatedWorkEnergyDiagram.bind(this),
        momentum_collisions_diagram: this.generateRelatedMomentumCollisionsDiagram.bind(this),
        rotational_motion_diagram: this.generateRelatedRotationalMotionDiagram.bind(this),
        gravitation_diagram: this.generateRelatedGravitationDiagram.bind(this),

        // Waves and Sound Generators
        wave_properties: this.generateRelatedWaveProperties.bind(this),
        wave_interference: this.generateRelatedWaveInterference.bind(this),
        sound_waves: this.generateRelatedSoundWaves.bind(this),
        doppler_effect: this.generateRelatedDopplerEffect.bind(this),
        standing_waves: this.generateRelatedStandingWaves.bind(this),
        resonance: this.generateRelatedResonance.bind(this),
        
        // Waves and Sound Diagram Generators
        wave_properties_diagram: this.generateRelatedWavePropertiesDiagram.bind(this),
        wave_interference_diagram: this.generateRelatedWaveInterferenceDiagram.bind(this),
        sound_waves_diagram: this.generateRelatedSoundWavesDiagram.bind(this),
        doppler_effect_diagram: this.generateRelatedDopplerEffectDiagram.bind(this),
        standing_waves_diagram: this.generateRelatedStandingWavesDiagram.bind(this),
        resonance_diagram: this.generateRelatedResonanceDiagram.bind(this),

        // Thermodynamics and Heat Generators
        temperature_heat: this.generateRelatedTemperatureHeat.bind(this),
        thermal_expansion: this.generateRelatedThermalExpansion.bind(this),
        calorimetry: this.generateRelatedCalorimetry.bind(this),
        heat_transfer: this.generateRelatedHeatTransfer.bind(this),
        gas_laws_physics: this.generateRelatedGasLawsPhysics.bind(this),
        thermodynamic_processes: this.generateRelatedThermodynamicProcesses.bind(this),
        heat_engines: this.generateRelatedHeatEngines.bind(this),
        
        // Thermodynamics and Heat Diagram Generators
        temperature_heat_diagram: this.generateRelatedTemperatureHeatDiagram.bind(this),
        thermal_expansion_diagram: this.generateRelatedThermalExpansionDiagram.bind(this),
        calorimetry_diagram: this.generateRelatedCalorimetryDiagram.bind(this),
        heat_transfer_diagram: this.generateRelatedHeatTransferDiagram.bind(this),
        gas_laws_physics_diagram: this.generateRelatedGasLawsPhysicsDiagram.bind(this),
        thermodynamic_processes_diagram: this.generateRelatedThermodynamicProcessesDiagram.bind(this),
        heat_engines_diagram: this.generateRelatedHeatEnginesDiagram.bind(this),

        // Electricity and Magnetism Generators
        electrostatics: this.generateRelatedElectrostatics.bind(this),
        electric_fields: this.generateRelatedElectricFields.bind(this),
        electric_potential: this.generateRelatedElectricPotential.bind(this),
        capacitance: this.generateRelatedCapacitance.bind(this),
        current_resistance: this.generateRelatedCurrentResistance.bind(this),
        dc_circuits: this.generateRelatedDCCircuits.bind(this),
        magnetic_fields: this.generateRelatedMagneticFields.bind(this),
        electromagnetic_induction: this.generateRelatedEMInduction.bind(this),
        ac_circuits: this.generateRelatedACCircuits.bind(this),
        
        // Electricity and Magnetism Diagram Generators
        electrostatics_diagram: this.generateRelatedElectrostaticsDiagram.bind(this),
        electric_fields_diagram: this.generateRelatedElectricFieldsDiagram.bind(this),
        electric_potential_diagram: this.generateRelatedElectricPotentialDiagram.bind(this),
        capacitance_diagram: this.generateRelatedCapacitanceDiagram.bind(this),
        current_resistance_diagram: this.generateRelatedCurrentResistanceDiagram.bind(this),
        dc_circuits_diagram: this.generateRelatedDCCircuitsDiagram.bind(this),
        magnetic_fields_diagram: this.generateRelatedMagneticFieldsDiagram.bind(this),
        electromagnetic_induction_diagram: this.generateRelatedEMInductionDiagram.bind(this),
        ac_circuits_diagram: this.generateRelatedACCircuitsDiagram.bind(this),

        // Optics Generators
        reflection: this.generateRelatedReflection.bind(this),
        refraction: this.generateRelatedRefraction.bind(this),
        lenses: this.generateRelatedLenses.bind(this),
        mirrors: this.generateRelatedMirrors.bind(this),
        optical_instruments: this.generateRelatedOpticalInstruments.bind(this),
        wave_optics: this.generateRelatedWaveOptics.bind(this),
        diffraction: this.generateRelatedDiffraction.bind(this),
        
        // Optics Diagram Generators
        reflection_diagram: this.generateRelatedReflectionDiagram.bind(this),
        refraction_diagram: this.generateRelatedRefractionDiagram.bind(this),
        lenses_diagram: this.generateRelatedLensesDiagram.bind(this),
        mirrors_diagram: this.generateRelatedMirrorsDiagram.bind(this),
        optical_instruments_diagram: this.generateRelatedOpticalInstrumentsDiagram.bind(this),
        wave_optics_diagram: this.generateRelatedWaveOpticsDiagram.bind(this),
        diffraction_diagram: this.generateRelatedDiffractionDiagram.bind(this),

        
        // Modern Physics Diagram Generators
        photoelectric_effect_diagram: this.generateRelatedPhotoelectricEffectDiagram.bind(this),
        compton_scattering_diagram: this.generateRelatedComptonScatteringDiagram.bind(this),
        atomic_spectra_diagram: this.generateRelatedAtomicSpectraDiagram.bind(this),
        bohr_model_diagram: this.generateRelatedBohrModelDiagram.bind(this),
        quantum_mechanics_diagram: this.generateRelatedQuantumMechanicsDiagram.bind(this),
        wave_particle_duality_diagram: this.generateRelatedWaveParticleDualityDiagram.bind(this),

        
        // Relativity Diagram Generators
        time_dilation_diagram: this.generateRelatedTimeDilationDiagram.bind(this),
        length_contraction_diagram: this.generateRelatedLengthContractionDiagram.bind(this),
        relativistic_momentum_diagram: this.generateRelatedRelativisticMomentumDiagram.bind(this),
        mass_energy_equivalence_diagram: this.generateRelatedMassEnergyEquivalenceDiagram.bind(this),
        lorentz_transformations_diagram: this.generateRelatedLorentzTransformationsDiagram.bind(this),

        // Nuclear Physics Generators
        
        // Nuclear Physics Diagram Generators
        radioactive_decay_physics_diagram: this.generateRelatedRadioactiveDecayPhysicsDiagram.bind(this),
        nuclear_reactions_physics_diagram: this.generateRelatedNuclearReactionsPhysicsDiagram.bind(this),
        binding_energy_diagram: this.generateRelatedBindingEnergyDiagram.bind(this),
        fission_fusion_diagram: this.generateRelatedFissionFusionDiagram.bind(this),
        radiation_detection_diagram: this.generateRelatedRadiationDetectionDiagram.bind(this),

        // Biology Generators

        // Cell Biology Generators
        cell_structure: this.generateRelatedCellStructure.bind(this),
        cell_membrane: this.generateRelatedCellMembrane.bind(this),
        organelles: this.generateRelatedOrganelles.bind(this),
        cell_division: this.generateRelatedCellDivision.bind(this),
        mitosis_meiosis: this.generateRelatedMitosisMeiosis.bind(this),
        cell_transport: this.generateRelatedCellTransport.bind(this),
        cellular_respiration: this.generateRelatedCellularRespiration.bind(this),
        photosynthesis: this.generateRelatedPhotosynthesis.bind(this),
        
        // Cell Biology Diagram Generators
        cell_structure_diagram: this.generateRelatedCellStructureDiagram.bind(this),
        cell_membrane_diagram: this.generateRelatedCellMembraneDiagram.bind(this),
        organelles_diagram: this.generateRelatedOrganellesDiagram.bind(this),
        cell_division_diagram: this.generateRelatedCellDivisionDiagram.bind(this),
        mitosis_meiosis_diagram: this.generateRelatedMitosisMeiosisDiagram.bind(this),
        cell_transport_diagram: this.generateRelatedCellTransportDiagram.bind(this),
        cellular_respiration_diagram: this.generateRelatedCellularRespirationDiagram.bind(this),
        photosynthesis_diagram: this.generateRelatedPhotosynthesisDiagram.bind(this),

        // Genetics and Molecular Biology Generators
        mendelian_genetics: this.generateRelatedMendelianGenetics.bind(this),
        punnett_squares: this.generateRelatedPunnettSquares.bind(this),
        dna_structure: this.generateRelatedDNAStructure.bind(this),
        dna_replication: this.generateRelatedDNAReplication.bind(this),
        transcription: this.generateRelatedTranscription.bind(this),
        translation: this.generateRelatedTranslation.bind(this),
        mutations: this.generateRelatedMutations.bind(this),
        gene_expression: this.generateRelatedGeneExpression.bind(this),
        inheritance_patterns: this.generateRelatedInheritancePatterns.bind(this),
        
        // Genetics and Molecular Biology Diagram Generators
        mendelian_genetics_diagram: this.generateRelatedMendelianGeneticsDiagram.bind(this),
        punnett_squares_diagram: this.generateRelatedPunnettSquaresDiagram.bind(this),
        dna_structure_diagram: this.generateRelatedDNAStructureDiagram.bind(this),
        dna_replication_diagram: this.generateRelatedDNAReplicationDiagram.bind(this),
        transcription_diagram: this.generateRelatedTranscriptionDiagram.bind(this),
        translation_diagram: this.generateRelatedTranslationDiagram.bind(this),
        mutations_diagram: this.generateRelatedMutationsDiagram.bind(this),
        gene_expression_diagram: this.generateRelatedGeneExpressionDiagram.bind(this),
        inheritance_patterns_diagram: this.generateRelatedInheritancePatternsDiagram.bind(this),

        // Evolution and Natural Selection Generators
        natural_selection: this.generateRelatedNaturalSelection.bind(this),
        evolution_mechanisms: this.generateRelatedEvolutionMechanisms.bind(this),
        hardy_weinberg: this.generateRelatedHardyWeinberg.bind(this),
        speciation: this.generateRelatedSpeciation.bind(this),
        evidence_evolution: this.generateRelatedEvidenceEvolution.bind(this),
        adaptation: this.generateRelatedAdaptation.bind(this),
        
        // Evolution and Natural Selection Diagram Generators
        natural_selection_diagram: this.generateRelatedNaturalSelectionDiagram.bind(this),
        evolution_mechanisms_diagram: this.generateRelatedEvolutionMechanismsDiagram.bind(this),
        hardy_weinberg_diagram: this.generateRelatedHardyWeinbergDiagram.bind(this),
        speciation_diagram: this.generateRelatedSpeciationDiagram.bind(this),
        evidence_evolution_diagram: this.generateRelatedEvidenceEvolutionDiagram.bind(this),
        adaptation_diagram: this.generateRelatedAdaptationDiagram.bind(this),

        // Ecology Generators
        ecosystems: this.generateRelatedEcosystems.bind(this),
        food_webs: this.generateRelatedFoodWebs.bind(this),
        energy_flow: this.generateRelatedEnergyFlow.bind(this),
        nutrient_cycles: this.generateRelatedNutrientCycles.bind(this),
        population_dynamics: this.generateRelatedPopulationDynamics.bind(this),
        biomes: this.generateRelatedBiomes.bind(this),
        symbiosis: this.generateRelatedSymbiosis.bind(this),
        ecological_succession: this.generateRelatedEcologicalSuccession.bind(this),
        
        // Ecology Diagram Generators
        
        // Human Anatomy and Physiology Generators
        circulatory_system: this.generateRelatedCirculatorySystem.bind(this),
        respiratory_system: this.generateRelatedRespiratorySystem.bind(this),
        digestive_system: this.generateRelatedDigestiveSystem.bind(this),
        nervous_system: this.generateRelatedNervousSystem.bind(this),
        endocrine_system: this.generateRelatedEndocrineSystem.bind(this),
        skeletal_system: this.generateRelatedSkeletalSystem.bind(this),
        muscular_system: this.generateRelatedMuscularSystem.bind(this),
        excretory_system: this.generateRelatedExcretorySystem.bind(this),
        
        // Human Anatomy and Physiology Diagram Generators
        circulatory_system_diagram: this.generateRelatedCirculatorySystemDiagram.bind(this),
        respiratory_system_diagram: this.generateRelatedRespiratorySystemDiagram.bind(this),
        digestive_system_diagram: this.generateRelatedDigestiveSystemDiagram.bind(this),
        nervous_system_diagram: this.generateRelatedNervousSystemDiagram.bind(this),
        endocrine_system_diagram: this.generateRelatedEndocrineSystemDiagram.bind(this),
        skeletal_system_diagram: this.generateRelatedSkeletalSystemDiagram.bind(this),
        muscular_system_diagram: this.generateRelatedMuscularSystemDiagram.bind(this),
        excretory_system_diagram: this.generateRelatedExcretorySystemDiagram.bind(this),

       
        // Plants (Botany) Diagram Generators
        plant_structure_diagram: this.generateRelatedPlantStructureDiagram.bind(this),
        plant_transport_diagram: this.generateRelatedPlantTransportDiagram.bind(this),
        plant_reproduction_diagram: this.generateRelatedPlantReproductionDiagram.bind(this),
        plant_hormones_diagram: this.generateRelatedPlantHormonesDiagram.bind(this),
        tropisms_diagram: this.generateRelatedTropismsDiagram.bind(this),
        plant_anatomy_diagram: this.generateRelatedPlantAnatomyDiagram.bind(this),

        // Microbiology Generators
        bacteria: this.generateRelatedBacteria.bind(this),
        viruses: this.generateRelatedViruses.bind(this),
        fungi: this.generateRelatedFungi.bind(this),
        protists: this.generateRelatedProtists.bind(this),
        microbial_growth: this.generateRelatedMicrobialGrowth.bind(this),
        
        // Microbiology Diagram Generators
        bacteria_diagram: this.generateRelatedBacteriaDiagram.bind(this),
        viruses_diagram: this.generateRelatedVirusesDiagram.bind(this),
        fungi_diagram: this.generateRelatedFungiDiagram.bind(this),
        protists_diagram: this.generateRelatedProtistsDiagram.bind(this),
        microbial_growth_diagram: this.generateRelatedMicrobialGrowthDiagram.bind(this),

        // Biotechnology Generators
        
        // Biotechnology Diagram Generators
        
        // Reproduction and Development Generators
        asexual_reproduction: this.generateRelatedAsexualReproduction.bind(this),
        sexual_reproduction: this.generateRelatedSexualReproduction.bind(this),
        embryonic_development: this.generateRelatedEmbryonicDevelopment.bind(this),
        human_reproduction: this.generateRelatedHumanReproduction.bind(this),
        
        // Reproduction and Development Diagram Generators
        asexual_reproduction_diagram: this.generateRelatedAsexualReproductionDiagram.bind(this),
        sexual_reproduction_diagram: this.generateRelatedSexualReproductionDiagram.bind(this),
        embryonic_development_diagram: this.generateRelatedEmbryonicDevelopmentDiagram.bind(this),
        human_reproduction_diagram: this.generateRelatedHumanReproductionDiagram.bind(this),

        // Health, Disease and Immunology Generators
        immune_system: this.generateRelatedImmuneSystem.bind(this),
        pathogens: this.generateRelatedPathogens.bind(this),
        vaccines: this.generateRelatedVaccines.bind(this),
        antibodies: this.generateRelatedAntibodies.bind(this),
        diseases: this.generateRelatedDiseases.bind(this),
        immune_response: this.generateRelatedImmuneResponse.bind(this),
        
        // Health, Disease and Immunology Diagram Generators
        immune_system_diagram: this.generateRelatedImmuneSystemDiagram.bind(this),
        pathogens_diagram: this.generateRelatedPathogensDiagram.bind(this),
        vaccines_diagram: this.generateRelatedVaccinesDiagram.bind(this),
        antibodies_diagram: this.generateRelatedAntibodiesDiagram.bind(this),
        diseases_diagram: this.generateRelatedDiseasesDiagram.bind(this),
        immune_response_diagram: this.generateRelatedImmuneResponseDiagram.bind(this),

        
        // Taxonomy and Classification Diagram Generators
        classification_systems_diagram: this.generateRelatedClassificationSystemsDiagram.bind(this),
        phylogeny_diagram: this.generateRelatedPhylogenyDiagram.bind(this),
        domains_kingdoms_diagram: this.generateRelatedDomainsKingdomsDiagram.bind(this),
        binomial_nomenclature_diagram: this.generateRelatedBinomialNomenclatureDiagram.bind(this),

        // Homeostasis and Regulation Generators
        homeostasis: this.generateRelatedHomeostasis.bind(this),
        thermoregulation: this.generateRelatedThermoregulation.bind(this),
        osmoregulation: this.generateRelatedOsmoregulation.bind(this),
        blood_glucose: this.generateRelatedBloodGlucose.bind(this),
        feedback_mechanisms: this.generateRelatedFeedbackMechanisms.bind(this),
        
        // Homeostasis and Regulation Diagram Generators
        homeostasis_diagram: this.generateRelatedHomeostasisDiagram.bind(this),
        thermoregulation_diagram: this.generateRelatedThermoregulationDiagram.bind(this),
        osmoregulation_diagram: this.generateRelatedOsmoregulationDiagram.bind(this),
        blood_glucose_diagram: this.generateRelatedBloodGlucoseDiagram.bind(this),
        feedback_mechanisms_diagram: this.generateRelatedFeedbackMechanismsDiagram.bind(this),

        // Energy in Living Systems Generators
        
        // Energy in Living Systems Diagram Generators
        atp_diagram: this.generateRelatedATPDiagram.bind(this),
        glycolysis_diagram: this.generateRelatedGlycolysisDiagram.bind(this),
        krebs_cycle_diagram: this.generateRelatedKrebsCycleDiagram.bind(this),
        electron_transport_diagram: this.generateRelatedElectronTransportDiagram.bind(this),
        fermentation_diagram: this.generateRelatedFermentationDiagram.bind(this),
        light_reactions_diagram: this.generateRelatedLightReactionsDiagram.bind(this),
        calvin_cycle_diagram: this.generateRelatedCalvinCycleDiagram.bind(this),

        // DNA Technology and Forensics Generators
        
        // DNA Technology and Forensics Diagram Generators
        dna_fingerprinting_diagram: this.generateRelatedDNAFingerprintingDiagram.bind(this),
        forensic_analysis_diagram: this.generateRelatedForensicAnalysisDiagram.bind(this),
        paternity_testing_diagram: this.generateRelatedPaternityTestingDiagram.bind(this),
        crispr_diagram: this.generateRelatedCRISPRDiagram.bind(this),
        gene_therapy_diagram: this.generateRelatedGeneTherapyDiagram.bind(this),
    

        // ==================== MATHEMATICS GENERATORS ====================

        // Number Theory Generators
        number_properties: this.generateRelatedNumberProperties.bind(this),
        prime_numbers: this.generateRelatedPrimeNumbers.bind(this),
        hcf_lcm: this.generateRelatedHCFLCM.bind(this),
        modular_arithmetic: this.generateRelatedModularArithmetic.bind(this),
        divisibility: this.generateRelatedDivisibility.bind(this),
        rational_irrational: this.generateRelatedRationalIrrational.bind(this),

        // Algebra Generators
        algebraic_expressions: this.generateRelatedAlgebraicExpressions.bind(this),
        linear_equations: this.generateRelatedLinearEquations.bind(this),
        quadratic_equations: this.generateRelatedQuadraticEquations.bind(this),
        simultaneous_equations: this.generateRelatedSimultaneousEquations.bind(this),
        polynomials: this.generateRelatedPolynomials.bind(this),
        rational_expressions: this.generateRelatedRationalExpressions.bind(this),
        exponential_logarithmic: this.generateRelatedExponentialLogarithmic.bind(this),

        // Functions & Graphs Generators
        function_basics: this.generateRelatedFunctionBasics.bind(this),
        domain_range: this.generateRelatedDomainRange.bind(this),
        function_types: this.generateRelatedFunctionTypes.bind(this),
        transformations: this.generateRelatedTransformations.bind(this),
        inverse_functions: this.generateRelatedInverseFunctions.bind(this),
        piecewise_functions: this.generateRelatedPiecewiseFunctions.bind(this),

        // Geometry Generators
        angles: this.generateRelatedAngles.bind(this),
        triangles: this.generateRelatedTriangles.bind(this),
        similarity_congruence: this.generateRelatedSimilarityCongruence.bind(this),
        quadrilaterals: this.generateRelatedQuadrilaterals.bind(this),
        circles: this.generateRelatedCircles.bind(this),
        coordinate_geometry: this.generateRelatedCoordinateGeometry.bind(this),
        solid_geometry: this.generateRelatedSolidGeometry.bind(this),
        surface_area_volume: this.generateRelatedSurfaceAreaVolume.bind(this),


        // Geometry Diagram Generators
        angles: this.generateRelatedAnglesDiagram.bind(this),
        triangles: this.generateRelatedTrianglesDiagram.bind(this),
        quadrilaterals: this.generateRelatedQuadrilateralsDiagram.bind(this),
        circles: this.generateRelatedCirclesDiagram.bind(this),
        
        // Trigonometry Generators
        trig_ratios: this.generateRelatedTrigRatios.bind(this),
        special_angles: this.generateRelatedSpecialAngles.bind(this),
        trig_identities: this.generateRelatedTrigIdentities.bind(this),
        sine_cosine_rules: this.generateRelatedSineCosineRules.bind(this),
        radian_measure: this.generateRelatedRadianMeasure.bind(this),
        trig_equations: this.generateRelatedTrigEquations.bind(this),
        trig_graphs: this.generateRelatedTrigGraphs.bind(this),

        // Calculus Generators
        limits: this.generateRelatedLimits.bind(this),
        differentiation: this.generateRelatedDifferentiation.bind(this),
        derivative_rules: this.generateRelatedDerivativeRules.bind(this),
        tangent_normal: this.generateRelatedTangentNormal.bind(this),
        rate_of_change: this.generateRelatedRateOfChange.bind(this),
        optimization: this.generateRelatedOptimization.bind(this),
        integration: this.generateRelatedIntegration.bind(this),
        definite_integrals: this.generateRelatedDefiniteIntegrals.bind(this),
        area_under_curve: this.generateRelatedAreaUnderCurve.bind(this),

        // Statistics & Probability Generators
        data_analysis: this.generateRelatedDataAnalysis.bind(this),
        measures_central_tendency: this.generateRelatedMeasuresCentralTendency.bind(this),
        measures_spread: this.generateRelatedMeasuresSpread.bind(this),
        data_visualization: this.generateRelatedDataVisualization.bind(this),
        basic_probability: this.generateRelatedBasicProbability.bind(this),
        conditional_probability: this.generateRelatedConditionalProbability.bind(this),
        counting_methods: this.generateRelatedCountingMethods.bind(this),
        probability_distributions: this.generateRelatedProbabilityDistributions.bind(this),

        // Vectors Generators
        vector_basics: this.generateRelatedVectorBasics.bind(this),
        vector_operations: this.generateRelatedVectorOperations.bind(this),
        dot_product: this.generateRelatedDotProduct.bind(this),
        cross_product: this.generateRelatedCrossProduct.bind(this),
        vector_equations: this.generateRelatedVectorEquations.bind(this),

        // Matrices Generators
        
        // Sequences & Series Generators
        arithmetic_sequences: this.generateRelatedArithmeticSequences.bind(this),
        geometric_sequences: this.generateRelatedGeometricSequences.bind(this),
        series_sums: this.generateRelatedSeriesSums.bind(this),
        binomial_theorem: this.generateRelatedBinomialTheorem.bind(this),

        // Complex Numbers Generators
        complex_basics: this.generateRelatedComplexBasics.bind(this),
        complex_operations: this.generateRelatedComplexOperations.bind(this),
        argand_diagram: this.generateRelatedArgandDiagram.bind(this),
        polar_form: this.generateRelatedPolarForm.bind(this),

        // Financial Mathematics Generators
        simple_compound_interest: this.generateRelatedSimpleCompoundInterest.bind(this),
        depreciation: this.generateRelatedDepreciation.bind(this),
        annuities: this.generateRelatedAnnuities.bind(this),
        loans: this.generateRelatedLoans.bind(this)
    


    };
    this.initializeBiologyDatabases();
    this.initializePhysicsDatabases();
    this.initializeMathematicsDatabases();
    this.initializeChemistryDatabases();
}

getCategoryFromType(type) {
    const categories = {
        // Stoichiometry
        'mole_calculations': 'Stoichiometry',
        'equation_balancing': 'Stoichiometry',
        'mass_mass_stoichiometry': 'Stoichiometry',
        'limiting_reagent': 'Stoichiometry',
        'percent_yield': 'Stoichiometry',
        'gas_stoichiometry': 'Stoichiometry',
        'solution_stoichiometry': 'Stoichiometry',
        'thermochemical_stoichiometry': 'Stoichiometry',
        'empirical_formula': 'Stoichiometry',
        
        // Organic Chemistry
        'alkanes': 'Organic Chemistry',
        'alkenes': 'Organic Chemistry',
        'alkynes': 'Organic Chemistry',
        'aromatic_compounds': 'Organic Chemistry',
        'functional_groups': 'Organic Chemistry',
        'isomerism': 'Organic Chemistry',
        'organic_reactions': 'Organic Chemistry',
        'nomenclature': 'Organic Chemistry',
        'reaction_mechanisms': 'Organic Chemistry',
        'polymers': 'Organic Chemistry',
        
        // Redox Chemistry
        'redox_stoichiometry': 'Redox Chemistry',
        'oxidation_states': 'Redox Chemistry',
        'half_reactions': 'Redox Chemistry',
        'electrochemistry': 'Redox Chemistry',
        'galvanic_cells': 'Redox Chemistry',
        'electrolysis': 'Redox Chemistry',
        
        // Acid-Base Chemistry
        'acid_base_neutralization': 'Acid-Base Chemistry',
        'ph_calculations': 'Acid-Base Chemistry',
        'buffers': 'Acid-Base Chemistry',
        'titrations': 'Acid-Base Chemistry',
        'polyprotic_acids': 'Acid-Base Chemistry',
        
        // Equilibrium Chemistry
        'equilibrium_constants': 'Equilibrium Chemistry',
        'le_chatelier': 'Equilibrium Chemistry',
        'solubility_equilibria': 'Equilibrium Chemistry',
        'complex_ions': 'Equilibrium Chemistry',
        'gas_equilibrium': 'Equilibrium Chemistry',
        
        // Kinetics & Thermodynamics
        'reaction_kinetics': 'Kinetics & Thermodynamics',
        'rate_laws': 'Kinetics & Thermodynamics',
        'activation_energy': 'Kinetics & Thermodynamics',
        'entropy': 'Kinetics & Thermodynamics',
        'gibbs_free_energy': 'Kinetics & Thermodynamics',
        'spontaneity': 'Kinetics & Thermodynamics',
        
        // Atomic Structure
        'atomic_structure': 'Atomic Structure',
        'quantum_numbers': 'Atomic Structure',
        'electron_configuration': 'Atomic Structure',
        'periodic_trends': 'Atomic Structure',
        'bonding': 'Atomic Structure',
        'molecular_geometry': 'Atomic Structure',
        'hybridization': 'Atomic Structure',

        // Chemical Bonding & Lewis Structures
        'lewis_structures': 'Chemical Bonding',
        'vsepr_theory': 'Chemical Bonding',
        'bond_polarity': 'Chemical Bonding',
        'intermolecular_forces': 'Chemical Bonding',

        // States of Matter & Particle Theory
        'states_of_matter': 'States of Matter',
        'phase_changes': 'States of Matter',
        'gas_laws': 'States of Matter',
        'kinetic_molecular_theory': 'States of Matter',

        // Nuclear Chemistry
        'radioactive_decay': 'Nuclear Chemistry',
        'nuclear_equations': 'Nuclear Chemistry',
        'half_life': 'Nuclear Chemistry',
        'nuclear_reactions': 'Nuclear Chemistry',

        // Laboratory Chemistry
        'lab_safety': 'Laboratory Chemistry',
        'lab_apparatus': 'Laboratory Chemistry',
        'lab_techniques': 'Laboratory Chemistry',
        'experimental_design': 'Laboratory Chemistry',

        // Mechanics
'kinematics_1d': 'Mechanics',
'kinematics_2d': 'Mechanics',
'projectile_motion': 'Mechanics',
'newtons_laws': 'Mechanics',
'friction': 'Mechanics',
'circular_motion': 'Mechanics',
'work_energy': 'Mechanics',
'momentum_collisions': 'Mechanics',
'rotational_motion': 'Mechanics',
'gravitation': 'Mechanics',

// Waves and Sound
'wave_properties': 'Waves and Sound',
'wave_interference': 'Waves and Sound',
'sound_waves': 'Waves and Sound',
'doppler_effect': 'Waves and Sound',
'standing_waves': 'Waves and Sound',
'resonance': 'Waves and Sound',

// Thermodynamics and Heat
'temperature_heat': 'Thermodynamics and Heat',
'thermal_expansion': 'Thermodynamics and Heat',
'calorimetry': 'Thermodynamics and Heat',
'heat_transfer': 'Thermodynamics and Heat',
'gas_laws_physics': 'Thermodynamics and Heat',
'thermodynamic_processes': 'Thermodynamics and Heat',
'heat_engines': 'Thermodynamics and Heat',

// Electricity and Magnetism
'electrostatics': 'Electricity and Magnetism',
'electric_fields': 'Electricity and Magnetism',
'electric_potential': 'Electricity and Magnetism',
'capacitance': 'Electricity and Magnetism',
'current_resistance': 'Electricity and Magnetism',
'dc_circuits': 'Electricity and Magnetism',
'magnetic_fields': 'Electricity and Magnetism',
'electromagnetic_induction': 'Electricity and Magnetism',
'ac_circuits': 'Electricity and Magnetism',

// Optics
'reflection': 'Optics',
'refraction': 'Optics',
'lenses': 'Optics',
'mirrors': 'Optics',
'optical_instruments': 'Optics',
'wave_optics': 'Optics',
'diffraction': 'Optics',

// Modern Physics
'photoelectric_effect': 'Modern Physics',
'compton_scattering': 'Modern Physics',
'atomic_spectra': 'Modern Physics',
'bohr_model': 'Modern Physics',
'quantum_mechanics': 'Modern Physics',
'wave_particle_duality': 'Modern Physics',

// Relativity
'time_dilation': 'Relativity',
'length_contraction': 'Relativity',
'relativistic_momentum': 'Relativity',
'mass_energy_equivalence': 'Relativity',
'lorentz_transformations': 'Relativity',

// Nuclear Physics
'radioactive_decay_physics': 'Nuclear Physics',
'nuclear_reactions_physics': 'Nuclear Physics',
'binding_energy': 'Nuclear Physics',
'fission_fusion': 'Nuclear Physics',
'radiation_detection': 'Nuclear Physics',

     // Cell Biology
        'cell_structure': 'Cell Biology',
        'cell_membrane': 'Cell Biology',
        'organelles': 'Cell Biology',
        'cell_division': 'Cell Biology',
        'mitosis_meiosis': 'Cell Biology',
        'cell_transport': 'Cell Biology',
        'cellular_respiration': 'Cell Biology',
        'photosynthesis': 'Cell Biology',

        // Genetics and Molecular Biology
        'mendelian_genetics': 'Genetics and Molecular Biology',
        'punnett_squares': 'Genetics and Molecular Biology',
        'dna_structure': 'Genetics and Molecular Biology',
        'dna_replication': 'Genetics and Molecular Biology',
        'transcription': 'Genetics and Molecular Biology',
        'translation': 'Genetics and Molecular Biology',
        'mutations': 'Genetics and Molecular Biology',
        'gene_expression': 'Genetics and Molecular Biology',
        'inheritance_patterns': 'Genetics and Molecular Biology',

        // Evolution and Natural Selection
        'natural_selection': 'Evolution and Natural Selection',
        'evolution_mechanisms': 'Evolution and Natural Selection',
        'hardy_weinberg': 'Evolution and Natural Selection',
        'speciation': 'Evolution and Natural Selection',
        'evidence_evolution': 'Evolution and Natural Selection',
        'adaptation': 'Evolution and Natural Selection',

        // Ecology
        'ecosystems': 'Ecology',
        'food_webs': 'Ecology',
        'energy_flow': 'Ecology',
        'nutrient_cycles': 'Ecology',
        'population_dynamics': 'Ecology',
        'biomes': 'Ecology',
        'symbiosis': 'Ecology',
        'ecological_succession': 'Ecology',

        // Human Anatomy and Physiology
        'circulatory_system': 'Human Anatomy and Physiology',
        'respiratory_system': 'Human Anatomy and Physiology',
        'digestive_system': 'Human Anatomy and Physiology',
        'nervous_system': 'Human Anatomy and Physiology',
        'endocrine_system': 'Human Anatomy and Physiology',
        'skeletal_system': 'Human Anatomy and Physiology',
        'muscular_system': 'Human Anatomy and Physiology',
        'excretory_system': 'Human Anatomy and Physiology',

        // Plants (Botany)
        'plant_structure': 'Plants (Botany)',
        'plant_transport': 'Plants (Botany)',
        'plant_reproduction': 'Plants (Botany)',
        'plant_hormones': 'Plants (Botany)',
        'tropisms': 'Plants (Botany)',
        'plant_anatomy': 'Plants (Botany)',

        // Microbiology
        'bacteria': 'Microbiology',
        'viruses': 'Microbiology',
        'fungi': 'Microbiology',
        'protists': 'Microbiology',
        'microbial_growth': 'Microbiology',

        // Biotechnology
        'genetic_engineering': 'Biotechnology',
        'cloning': 'Biotechnology',
        'pcr': 'Biotechnology',
        'gel_electrophoresis': 'Biotechnology',
        'recombinant_dna': 'Biotechnology',

        // Reproduction and Development
        'asexual_reproduction': 'Reproduction and Development',
        'sexual_reproduction': 'Reproduction and Development',
        'embryonic_development': 'Reproduction and Development',
        'human_reproduction': 'Reproduction and Development',

        // Health, Disease and Immunology
        'immune_system': 'Health, Disease and Immunology',
        'pathogens': 'Health, Disease and Immunology',
        'vaccines': 'Health, Disease and Immunology',
        'antibodies': 'Health, Disease and Immunology',
        'diseases': 'Health, Disease and Immunology',
        'immune_response': 'Health, Disease and Immunology',

        // Taxonomy and Classification
        'classification_systems': 'Taxonomy and Classification',
        'phylogeny': 'Taxonomy and Classification',
        'domains_kingdoms': 'Taxonomy and Classification',
        'binomial_nomenclature': 'Taxonomy and Classification',

        // Homeostasis and Regulation
        'homeostasis': 'Homeostasis and Regulation',
        'thermoregulation': 'Homeostasis and Regulation',
        'osmoregulation': 'Homeostasis and Regulation',
        'blood_glucose': 'Homeostasis and Regulation',
        'feedback_mechanisms': 'Homeostasis and Regulation',

        // Energy in Living Systems
        'atp': 'Energy in Living Systems',
        'glycolysis': 'Energy in Living Systems',
        'krebs_cycle': 'Energy in Living Systems',
        'electron_transport': 'Energy in Living Systems',
        'fermentation': 'Energy in Living Systems',
        'light_reactions': 'Energy in Living Systems',
        'calvin_cycle': 'Energy in Living Systems',

        // DNA Technology and Forensics
        'dna_fingerprinting': 'DNA Technology and Forensics',
        'forensic_analysis': 'DNA Technology and Forensics',
        'paternity_testing': 'DNA Technology and Forensics',
        'crispr': 'DNA Technology and Forensics',
        'gene_therapy': 'DNA Technology and Forensics',



        // Number Theory
        'number_properties': 'Number Theory',
        'prime_numbers': 'Number Theory',
        'hcf_lcm': 'Number Theory',
        'modular_arithmetic': 'Number Theory',
        'divisibility': 'Number Theory',
        'rational_irrational': 'Number Theory',

        // Algebra
        'algebraic_expressions': 'Algebra',
        'linear_equations': 'Algebra',
        'quadratic_equations': 'Algebra',
        'simultaneous_equations': 'Algebra',
        'polynomials': 'Algebra',
        'rational_expressions': 'Algebra',
        'exponential_logarithmic': 'Algebra',

        // Functions & Graphs
        'function_basics': 'Functions and Graphs',
        'domain_range': 'Functions and Graphs',
        'function_types': 'Functions and Graphs',
        'transformations': 'Functions and Graphs',
        'inverse_functions': 'Functions and Graphs',
        'piecewise_functions': 'Functions and Graphs',

        // Geometry
        'angles': 'Geometry',
        'triangles': 'Geometry',
        'similarity_congruence': 'Geometry',
        'quadrilaterals': 'Geometry',
        'circles': 'Geometry',
        'coordinate_geometry': 'Geometry',
        'solid_geometry': 'Geometry',
        'surface_area_volume': 'Geometry',

        // Trigonometry
        'trig_ratios': 'Trigonometry',
        'special_angles': 'Trigonometry',
        'trig_identities': 'Trigonometry',
        'sine_cosine_rules': 'Trigonometry',
        'radian_measure': 'Trigonometry',
        'trig_equations': 'Trigonometry',
        'trig_graphs': 'Trigonometry',

        // Calculus
        'limits': 'Calculus',
        'differentiation': 'Calculus',
        'derivative_rules': 'Calculus',
        'tangent_normal': 'Calculus',
        'rate_of_change': 'Calculus',
        'optimization': 'Calculus',
        'integration': 'Calculus',
        'definite_integrals': 'Calculus',
        'area_under_curve': 'Calculus',

        // Statistics & Probability
        'data_analysis': 'Statistics and Probability',
        'measures_central_tendency': 'Statistics and Probability',
        'measures_spread': 'Statistics and Probability',
        'data_visualization': 'Statistics and Probability',
        'basic_probability': 'Statistics and Probability',
        'conditional_probability': 'Statistics and Probability',
        'counting_methods': 'Statistics and Probability',
        'probability_distributions': 'Statistics and Probability',

        // Vectors
        'vector_basics': 'Vectors',
        'vector_operations': 'Vectors',
        'dot_product': 'Vectors',
        'cross_product': 'Vectors',
        'vector_equations': 'Vectors',

        // Matrices
        'matrix_operations': 'Matrices and Transformations',
        'determinants': 'Matrices and Transformations',
        'inverse_matrices': 'Matrices and Transformations',
        'matrix_transformations': 'Matrices and Transformations',

        // Sequences & Series
        'arithmetic_sequences': 'Sequences and Series',
        'geometric_sequences': 'Sequences and Series',
        'series_sums': 'Sequences and Series',
        'binomial_theorem': 'Sequences and Series',

        // Complex Numbers
        'complex_basics': 'Complex Numbers',
        'complex_operations': 'Complex Numbers',
        'argand_diagram': 'Complex Numbers',
        'polar_form': 'Complex Numbers',

        // Financial Mathematics
        'simple_compound_interest': 'Financial Mathematics',
        'depreciation': 'Financial Mathematics',
        'annuities': 'Financial Mathematics',
        'loans': 'Financial Mathematics'
    };

    return categories[type] || 'General';
}

initializeChemistryDatabases() {
    this.databases = {
        compounds: {
            simple_molecules: [
                { formula: 'H2O', name: 'water', molarMass: 18.02 },
                { formula: 'CO2', name: 'carbon dioxide', molarMass: 44.01 },
                { formula: 'NH3', name: 'ammonia', molarMass: 17.03 },
                { formula: 'CH4', name: 'methane', molarMass: 16.04 },
                { formula: 'H2SO4', name: 'sulfuric acid', molarMass: 98.08 },
                { formula: 'NaOH', name: 'sodium hydroxide', molarMass: 40.00 },
                { formula: 'HCl', name: 'hydrochloric acid', molarMass: 36.46 },
                { formula: 'CaCO3', name: 'calcium carbonate', molarMass: 100.09 }
            ],
            organic_compounds: [
                { formula: 'C6H12O6', name: 'glucose', molarMass: 180.16 },
                { formula: 'C2H5OH', name: 'ethanol', molarMass: 46.07 },
                { formula: 'C8H18', name: 'octane', molarMass: 114.23 },
                { formula: 'C2H4', name: 'ethene', molarMass: 28.05 },
                { formula: 'C6H6', name: 'benzene', molarMass: 78.11 },
                { formula: 'CH3COOH', name: 'acetic acid', molarMass: 60.05 }
            ],
            ionic_compounds: [
                { formula: 'NaCl', name: 'sodium chloride', molarMass: 58.44 },
                { formula: 'MgO', name: 'magnesium oxide', molarMass: 40.30 },
                { formula: 'Al2O3', name: 'aluminum oxide', molarMass: 101.96 },
                { formula: 'CuSO4', name: 'copper(II) sulfate', molarMass: 159.61 },
                { formula: 'Fe2O3', name: 'iron(III) oxide', molarMass: 159.69 },
                { formula: 'AgNO3', name: 'silver nitrate', molarMass: 169.87 }
            ]
        },

        organic: {
            alkanes: [
                { name: 'methane', formula: 'CH4', carbons: 1 },
                { name: 'ethane', formula: 'C2H6', carbons: 2 },
                { name: 'propane', formula: 'C3H8', carbons: 3 },
                { name: 'butane', formula: 'C4H10', carbons: 4 },
                { name: 'pentane', formula: 'C5H12', carbons: 5 },
                { name: 'hexane', formula: 'C6H14', carbons: 6 }
            ],
            alkenes: [
                { name: 'ethene', formula: 'C2H4', carbons: 2 },
                { name: 'propene', formula: 'C3H6', carbons: 3 },
                { name: 'butene', formula: 'C4H8', carbons: 4 },
                { name: 'pentene', formula: 'C5H10', carbons: 5 }
            ],
            alkynes: [
                { name: 'ethyne', formula: 'C2H2', carbons: 2 },
                { name: 'propyne', formula: 'C3H4', carbons: 3 },
                { name: 'butyne', formula: 'C4H6', carbons: 4 }
            ],
            aromatics: [
                { name: 'benzene', formula: 'C6H6' },
                { name: 'toluene', formula: 'C7H8' },
                { name: 'xylene', formula: 'C8H10' },
                { name: 'naphthalene', formula: 'C10H8' }
            ],
            functional_groups: [
                { name: 'alcohol', structure: '-OH', example: 'ethanol' },
                { name: 'aldehyde', structure: '-CHO', example: 'formaldehyde' },
                { name: 'ketone', structure: '-CO-', example: 'acetone' },
                { name: 'carboxylic acid', structure: '-COOH', example: 'acetic acid' },
                { name: 'ester', structure: '-COO-', example: 'ethyl acetate' },
                { name: 'ether', structure: '-O-', example: 'diethyl ether' },
                { name: 'amine', structure: '-NH2', example: 'aniline' },
                { name: 'amide', structure: '-CONH2', example: 'formamide' }
            ]
        },

        redox: {
            oxidation_states: {
                'H': '+1 (usually), -1 (in hydrides)',
                'O': '-2 (usually), -1 (in peroxides)',
                'N': '-3 to +5',
                'S': '-2 to +6',
                'Cl': '-1 to +7',
                'Mn': '+2 to +7',
                'Fe': '+2 to +3'
            },
            common_oxidizing_agents: [
                { formula: 'MnO4-', name: 'permanganate', color: 'purple' },
                { formula: 'Cr2O7^2-', name: 'dichromate', color: 'orange' },
                { formula: 'HNO3', name: 'nitric acid' },
                { formula: 'H2O2', name: 'hydrogen peroxide' },
                { formula: 'Cl2', name: 'chlorine gas', color: 'yellow-green' }
            ],
            common_reducing_agents: [
                { formula: 'Fe2+', name: 'iron(II)' },
                { formula: 'I-', name: 'iodide ion' },
                { formula: 'S2O3^2-', name: 'thiosulfate' },
                { formula: 'H2S', name: 'hydrogen sulfide' },
                { formula: 'Sn2+', name: 'tin(II)' }
            ]
        },

        acidBase: {
            strong_acids: [
                { formula: 'HCl', name: 'hydrochloric acid', Ka: null },
                { formula: 'HBr', name: 'hydrobromic acid', Ka: null },
                { formula: 'HI', name: 'hydroiodic acid', Ka: null },
                { formula: 'HNO3', name: 'nitric acid', Ka: null },
                { formula: 'H2SO4', name: 'sulfuric acid', Ka: null },
                { formula: 'HClO4', name: 'perchloric acid', Ka: null }
            ],
            strong_bases: [
                { formula: 'NaOH', name: 'sodium hydroxide', Kb: null },
                { formula: 'KOH', name: 'potassium hydroxide', Kb: null },
                { formula: 'Ba(OH)2', name: 'barium hydroxide', Kb: null },
                { formula: 'Ca(OH)2', name: 'calcium hydroxide', Kb: null }
            ],
            weak_acids: [
                { formula: 'CH3COOH', name: 'acetic acid', Ka: 1.8e-5 },
                { formula: 'HF', name: 'hydrofluoric acid', Ka: 3.5e-4 },
                { formula: 'HCN', name: 'hydrocyanic acid', Ka: 4.9e-10 },
                { formula: 'H2CO3', name: 'carbonic acid', Ka: 4.3e-7 }
            ],
            weak_bases: [
                { formula: 'NH3', name: 'ammonia', Kb: 1.8e-5 },
                { formula: 'C5H5N', name: 'pyridine', Kb: 1.7e-9 }
            ]
        },

        equilibrium: {
            le_chatelier_examples: [
                { equation: 'N2 + 3H2 ⇌ 2NH3', exothermic: true },
                { equation: 'CO + H2O ⇌ CO2 + H2', exothermic: true },
                { equation: 'SO2 + O2 ⇌ SO3', exothermic: true },
                { equation: 'CaCO3 ⇌ CaO + CO2', exothermic: false }
            ]
        },

        kinetics: {
            reaction_orders: [
                { type: 'zero-order', ratelaw: 'rate = k', halflife: 'linear with concentration' },
                { type: 'first-order', ratelaw: 'rate = k[A]', halflife: 'constant' },
                { type: 'second-order', ratelaw: 'rate = k[A]^2', halflife: 'inversely proportional' }
            ],
            catalyst_examples: [
                { reaction: 'H2O2 decomposition', catalyst: 'MnO2' },
                { reaction: 'N2 + H2 → NH3', catalyst: 'Fe' },
                { reaction: 'SO2 oxidation', catalyst: 'V2O5' }
            ]
        },

        atomicStructure: {
            quantumNumbers: {
                n: { description: 'principal quantum number', range: '1, 2, 3, ...' },
                l: { description: 'angular momentum', range: '0 to n-1' },
                ml: { description: 'magnetic quantum number', range: '-l to +l' },
                ms: { description: 'spin quantum number', values: ['+1/2', '-1/2'] }
            },
            orbitals: [
                { type: 's', shape: 'spherical', maxElectrons: 2 },
                { type: 'p', shape: 'dumbbell', maxElectrons: 6 },
                { type: 'd', shape: 'cloverleaf', maxElectrons: 10 },
                { type: 'f', shape: 'complex', maxElectrons: 14 }
            ]
        },

        // NEW: Chemical Bonding Database
        bonding: {
            bond_types: [
                { type: 'ionic', description: 'Transfer of electrons', example: 'NaCl' },
                { type: 'covalent', description: 'Sharing of electrons', example: 'H2O' },
                { type: 'metallic', description: 'Sea of electrons', example: 'Cu' },
                { type: 'coordinate', description: 'Dative bonding', example: 'NH4+' }
            ],
            intermolecular_forces: [
                { type: 'London dispersion', strength: 'weakest', example: 'CH4' },
                { type: 'dipole-dipole', strength: 'moderate', example: 'HCl' },
                { type: 'hydrogen bonding', strength: 'strongest', example: 'H2O' },
                { type: 'ion-dipole', strength: 'very strong', example: 'NaCl in water' }
            ],
            vsepr_shapes: [
                { electrons: 2, shape: 'linear', angle: 180, example: 'CO2' },
                { electrons: 3, shape: 'trigonal planar', angle: 120, example: 'BF3' },
                { electrons: 4, shape: 'tetrahedral', angle: 109.5, example: 'CH4' },
                { electrons: 5, shape: 'trigonal bipyramidal', angle: '90/120', example: 'PCl5' },
                { electrons: 6, shape: 'octahedral', angle: 90, example: 'SF6' }
            ]
        },

        // NEW: States of Matter Database
        statesOfMatter: {
            phases: [
                { state: 'solid', characteristics: 'fixed shape, fixed volume, vibrating particles' },
                { state: 'liquid', characteristics: 'variable shape, fixed volume, sliding particles' },
                { state: 'gas', characteristics: 'variable shape, variable volume, freely moving particles' },
                { state: 'plasma', characteristics: 'ionized gas, high energy' }
            ],
            phase_changes: [
                { change: 'melting', from: 'solid', to: 'liquid', endothermic: true },
                { change: 'freezing', from: 'liquid', to: 'solid', endothermic: false },
                { change: 'vaporization', from: 'liquid', to: 'gas', endothermic: true },
                { change: 'condensation', from: 'gas', to: 'liquid', endothermic: false },
                { change: 'sublimation', from: 'solid', to: 'gas', endothermic: true },
                { change: 'deposition', from: 'gas', to: 'solid', endothermic: false }
            ],
            gas_laws: [
                { law: 'Boyle\'s Law', equation: 'P₁V₁ = P₂V₂', constant: 'T, n' },
                { law: 'Charles\' Law', equation: 'V₁/T₁ = V₂/T₂', constant: 'P, n' },
                { law: 'Gay-Lussac\'s Law', equation: 'P₁/T₁ = P₂/T₂', constant: 'V, n' },
                { law: 'Combined Gas Law', equation: 'P₁V₁/T₁ = P₂V₂/T₂', constant: 'n' },
                { law: 'Ideal Gas Law', equation: 'PV = nRT', constant: 'none' }
            ]
        },

        // NEW: Nuclear Chemistry Database
        nuclear: {
            decay_types: [
                { type: 'alpha', symbol: 'α', particle: '⁴₂He', mass_change: -4, charge_change: -2 },
                { type: 'beta-minus', symbol: 'β⁻', particle: '⁰₋₁e', mass_change: 0, charge_change: +1 },
                { type: 'beta-plus', symbol: 'β⁺', particle: '⁰₊₁e', mass_change: 0, charge_change: -1 },
                { type: 'gamma', symbol: 'γ', particle: '⁰₀γ', mass_change: 0, charge_change: 0 }
            ],
            common_isotopes: [
                { element: 'Carbon-14', symbol: '¹⁴₆C', halfLife: '5730 years', decayType: 'beta-minus' },
                { element: 'Uranium-238', symbol: '²³⁸₉₂U', halfLife: '4.5 billion years', decayType: 'alpha' },
                { element: 'Iodine-131', symbol: '¹³¹₅₃I', halfLife: '8 days', decayType: 'beta-minus' },
                { element: 'Cobalt-60', symbol: '⁶⁰₂₇Co', halfLife: '5.27 years', decayType: 'beta-minus' }
            ]
        },

        // NEW: Laboratory Chemistry Database
        laboratory: {
            apparatus: [
                { name: 'beaker', use: 'holding and mixing liquids', volume_range: '50-1000 mL' },
                { name: 'volumetric flask', use: 'preparing precise volumes', accuracy: 'high' },
                { name: 'burette', use: 'dispensing precise volumes', accuracy: 'very high' },
                { name: 'pipette', use: 'transferring precise volumes', accuracy: 'very high' },
                { name: 'Erlenmeyer flask', use: 'mixing and heating', shape: 'conical' },
                { name: 'test tube', use: 'small-scale reactions', size: 'small' },
                { name: 'graduated cylinder', use: 'measuring volumes', accuracy: 'moderate' }
            ],
            techniques: [
                { technique: 'filtration', purpose: 'separate solid from liquid' },
                { technique: 'distillation', purpose: 'separate liquids by boiling point' },
                { technique: 'crystallization', purpose: 'purify solid compounds' },
                { technique: 'titration', purpose: 'determine concentration' },
                { technique: 'chromatography', purpose: 'separate mixtures' },
                { technique: 'extraction', purpose: 'separate using solubility' }
            ],
            safety: [
                { hazard: 'corrosive acids/bases', precaution: 'wear goggles, gloves, lab coat' },
                { hazard: 'flammable liquids', precaution: 'no open flames, use fume hood' },
                { hazard: 'toxic gases', precaution: 'use fume hood, proper ventilation' },
                { hazard: 'broken glass', precaution: 'sweep carefully, use dustpan' }
            ]
        }
    };
}


initializePhysicsDatabases() {
    this.physicsDatabases = {
        mechanics: {
            motion_types: [
                { type: 'uniform motion', acceleration: 0, equations: ['v = constant', 's = vt'] },
                { type: 'uniformly accelerated', acceleration: 'constant', equations: ['v = u + at', 's = ut + ½at²', 'v² = u² + 2as'] },
                { type: 'free fall', acceleration: 9.8, equations: ['same as uniformly accelerated with a = g'] },
                { type: 'projectile', components: 'horizontal + vertical', path: 'parabolic' }
            ],
            forces: [
                { name: 'gravitational', formula: 'F = mg', direction: 'downward' },
                { name: 'normal', formula: 'N = mg cosθ', direction: 'perpendicular to surface' },
                { name: 'friction', formula: 'f = μN', types: ['static', 'kinetic'] },
                { name: 'tension', formula: 'T', medium: 'string/rope' },
                { name: 'centripetal', formula: 'F = mv²/r', direction: 'toward center' }
            ],
            newtons_laws: [
                { law: 'First Law', statement: 'Object at rest stays at rest unless acted upon', concept: 'inertia' },
                { law: 'Second Law', statement: 'F = ma', concept: 'acceleration proportional to force' },
                { law: 'Third Law', statement: 'Action-reaction pairs', concept: 'equal and opposite forces' }
            ],
            collision_types: [
                { type: 'elastic', energy_conserved: true, momentum_conserved: true, formula: 'KE before = KE after' },
                { type: 'inelastic', energy_conserved: false, momentum_conserved: true, formula: 'objects stick together' },
                { type: 'perfectly inelastic', energy_loss: 'maximum', objects: 'stick together' }
            ],
            rotational_quantities: [
                { linear: 'displacement (s)', angular: 'angular displacement (θ)', relation: 's = rθ' },
                { linear: 'velocity (v)', angular: 'angular velocity (ω)', relation: 'v = rω' },
                { linear: 'acceleration (a)', angular: 'angular acceleration (α)', relation: 'a = rα' },
                { linear: 'force (F)', angular: 'torque (τ)', relation: 'τ = rF' },
                { linear: 'mass (m)', angular: 'moment of inertia (I)', relation: 'I = Σmr²' }
            ]
        },

        waves: {
            wave_types: [
                { type: 'mechanical', medium: 'required', examples: ['sound', 'water waves', 'seismic'] },
                { type: 'electromagnetic', medium: 'not required', examples: ['light', 'radio', 'X-rays'] },
                { type: 'transverse', oscillation: 'perpendicular to direction', examples: ['light', 'water'] },
                { type: 'longitudinal', oscillation: 'parallel to direction', examples: ['sound', 'compression'] }
            ],
            wave_properties: [
                { property: 'wavelength (λ)', unit: 'meters', definition: 'distance between crests' },
                { property: 'frequency (f)', unit: 'Hz', definition: 'cycles per second' },
                { property: 'period (T)', unit: 'seconds', relation: 'T = 1/f' },
                { property: 'amplitude (A)', unit: 'meters', definition: 'maximum displacement' },
                { property: 'wave speed (v)', formula: 'v = fλ', unit: 'm/s' }
            ],
            sound_characteristics: [
                { property: 'speed in air', value: '343 m/s at 20°C', factors: 'temperature, medium' },
                { property: 'audible range', value: '20 Hz - 20 kHz', human: true },
                { property: 'infrasound', value: '< 20 Hz', examples: 'earthquakes, elephants' },
                { property: 'ultrasound', value: '> 20 kHz', examples: 'bats, medical imaging' }
            ],
            interference: [
                { type: 'constructive', condition: 'Δφ = 2nπ', path_difference: 'nλ', amplitude: 'increases' },
                { type: 'destructive', condition: 'Δφ = (2n+1)π', path_difference: '(n+½)λ', amplitude: 'decreases' }
            ],
            standing_waves: [
                { instrument: 'string fixed both ends', condition: 'L = nλ/2', harmonics: 'f_n = nv/2L' },
                { instrument: 'pipe open both ends', condition: 'L = nλ/2', harmonics: 'f_n = nv/2L' },
                { instrument: 'pipe closed one end', condition: 'L = (2n-1)λ/4', harmonics: 'f_n = (2n-1)v/4L' }
            ]
        },

        thermodynamics: {
            temperature_scales: [
                { scale: 'Celsius', symbol: '°C', freezing: 0, boiling: 100 },
                { scale: 'Fahrenheit', symbol: '°F', freezing: 32, boiling: 212, conversion: 'F = 9/5C + 32' },
                { scale: 'Kelvin', symbol: 'K', freezing: 273.15, boiling: 373.15, conversion: 'K = C + 273.15' }
            ],
            thermal_expansion: [
                { type: 'linear', formula: 'ΔL = αLΔT', coefficient: 'α (linear expansion)' },
                { type: 'area', formula: 'ΔA = 2αAΔT', coefficient: '2α' },
                { type: 'volume', formula: 'ΔV = βVΔT', coefficient: 'β (volume expansion) = 3α' }
            ],
            heat_transfer: [
                { method: 'conduction', formula: 'Q/t = kAΔT/d', medium: 'solids', example: 'metal spoon in hot water' },
                { method: 'convection', mechanism: 'fluid motion', medium: 'liquids/gases', example: 'boiling water' },
                { method: 'radiation', mechanism: 'electromagnetic waves', medium: 'none needed', example: 'sun\'s heat' }
            ],
            specific_heat: [
                { substance: 'water', value: 4186, unit: 'J/(kg·K)', high: true },
                { substance: 'ice', value: 2100, unit: 'J/(kg·K)' },
                { substance: 'aluminum', value: 900, unit: 'J/(kg·K)' },
                { substance: 'copper', value: 387, unit: 'J/(kg·K)' },
                { substance: 'iron', value: 450, unit: 'J/(kg·K)' }
            ],
            thermodynamic_laws: [
                { law: 'Zeroth Law', statement: 'Thermal equilibrium is transitive', concept: 'temperature definition' },
                { law: 'First Law', statement: 'ΔU = Q - W', concept: 'energy conservation' },
                { law: 'Second Law', statement: 'Entropy always increases', concept: 'heat flows hot to cold' },
                { law: 'Third Law', statement: 'Entropy → 0 as T → 0 K', concept: 'absolute zero unattainable' }
            ],
            thermodynamic_processes: [
                { process: 'isothermal', constant: 'temperature', work: 'W = nRT ln(V₂/V₁)', ΔU: 0 },
                { process: 'isobaric', constant: 'pressure', work: 'W = PΔV', ΔU: 'Q - W' },
                { process: 'isochoric', constant: 'volume', work: 0, ΔU: 'Q' },
                { process: 'adiabatic', constant: 'no heat transfer (Q=0)', work: 'W = -ΔU', equation: 'PV^γ = constant' }
            ]
        },

        electricity: {
            charge: [
                { particle: 'electron', charge: '-1.6×10⁻¹⁹ C', mass: '9.11×10⁻³¹ kg' },
                { particle: 'proton', charge: '+1.6×10⁻¹⁹ C', mass: '1.67×10⁻²⁷ kg' },
                { property: 'quantization', statement: 'q = ne', fundamental: true }
            ],
            coulombs_law: {
                formula: 'F = k|q₁q₂|/r²',
                constant: 'k = 8.99×10⁹ N·m²/C²',
                permittivity: 'ε₀ = 8.85×10⁻¹² C²/(N·m²)',
                relation: 'k = 1/(4πε₀)'
            },
            electric_field: [
                { definition: 'E = F/q', unit: 'N/C or V/m' },
                { point_charge: 'E = kq/r²', direction: 'radially outward (positive)' },
                { uniform_field: 'E = V/d', between_plates: true }
            ],
            circuits: [
                { law: 'Ohm\'s Law', formula: 'V = IR', applies: 'resistors' },
                { law: 'Kirchhoff\'s Current Law', statement: 'Σ I_in = Σ I_out', node: true },
                { law: 'Kirchhoff\'s Voltage Law', statement: 'Σ V = 0', loop: true }
            ],
            resistors: [
                { configuration: 'series', resistance: 'R_total = R₁ + R₂ + ...', current: 'same', voltage: 'divides' },
                { configuration: 'parallel', resistance: '1/R_total = 1/R₁ + 1/R₂ + ...', current: 'divides', voltage: 'same' }
            ],
            capacitors: [
                { configuration: 'series', capacitance: '1/C_total = 1/C₁ + 1/C₂ + ...', voltage: 'divides', charge: 'same' },
                { configuration: 'parallel', capacitance: 'C_total = C₁ + C₂ + ...', voltage: 'same', charge: 'adds' }
            ],
            magnetism: [
                { force: 'on moving charge', formula: 'F = qvB sinθ', direction: 'right-hand rule' },
                { force: 'on current', formula: 'F = BIL sinθ', direction: 'right-hand rule' },
                { field: 'straight wire', formula: 'B = μ₀I/(2πr)', direction: 'right-hand rule' },
                { field: 'solenoid', formula: 'B = μ₀nI', uniform: 'inside' }
            ],
            electromagnetic_induction: [
                { law: 'Faraday\'s Law', formula: 'ε = -N(ΔΦ/Δt)', concept: 'induced emf' },
                { law: 'Lenz\'s Law', statement: 'Induced current opposes change', minus_sign: true },
                { flux: 'magnetic flux', formula: 'Φ = BA cosθ', unit: 'Weber (Wb)' }
            ]
        },

        optics: {
            reflection: [
                { law: 'Law of Reflection', statement: 'θ_incident = θ_reflected', plane: 'normal to surface' },
                { mirror: 'plane', image: 'virtual, upright, same size', formula: 'd_object = d_image' },
                { mirror: 'concave', focus: 'converging', real_images: 'possible' },
                { mirror: 'convex', focus: 'diverging', real_images: 'never' }
            ],
            refraction: [
                { law: 'Snell\'s Law', formula: 'n₁ sinθ₁ = n₂ sinθ₂' },
                { index: 'refractive index', formula: 'n = c/v', vacuum: 'n = 1' },
                { phenomenon: 'total internal reflection', condition: 'θ > critical angle, n₁ > n₂' },
                { critical_angle: 'formula', equation: 'sinθ_c = n₂/n₁' }
            ],
            refractive_indices: [
                { medium: 'vacuum', n: 1.0000 },
                { medium: 'air', n: 1.0003 },
                { medium: 'water', n: 1.333 },
                { medium: 'glass (crown)', n: 1.52 },
                { medium: 'glass (flint)', n: 1.66 },
                { medium: 'diamond', n: 2.42 }
            ],
            lenses: [
                { type: 'converging (convex)', focal_length: 'positive', images: 'real or virtual' },
                { type: 'diverging (concave)', focal_length: 'negative', images: 'virtual only' }
            ],
            lens_mirror_equation: {
                formula: '1/f = 1/d_o + 1/d_i',
                magnification: 'M = -d_i/d_o = h_i/h_o',
                sign_conventions: 'real (+), virtual (-)'
            },
            wave_optics: [
                { phenomenon: 'interference', condition: 'coherent sources', examples: 'double-slit' },
                { phenomenon: 'diffraction', definition: 'bending around obstacles', examples: 'single-slit' },
                { phenomenon: 'polarization', applies: 'transverse waves only', examples: 'sunglasses' }
            ],
            double_slit: {
                constructive: 'd sinθ = mλ (m = 0, 1, 2, ...)',
                destructive: 'd sinθ = (m + ½)λ',
                fringe_separation: 'y = mλL/d'
            }
        },

        modern_physics: {
            photoelectric_effect: {
                equation: 'KE_max = hf - φ',
                work_function: 'φ = hf₀ (threshold frequency)',
                stopping_potential: 'eV_s = KE_max',
                planck_constant: 'h = 6.626×10⁻³⁴ J·s'
            },
            photon_energy: [
                { formula: 'E = hf', frequency: 'f in Hz' },
                { formula: 'E = hc/λ', wavelength: 'λ in meters' },
                { relation: 'c = fλ', speed: '3×10⁸ m/s' }
            ],
            compton_scattering: {
                wavelength_shift: 'Δλ = (h/m_e c)(1 - cosθ)',
                compton_wavelength: 'λ_c = h/(m_e c) = 2.43×10⁻¹² m',
                demonstrates: 'particle nature of light'
            },
            bohr_model: [
                { postulate: 'quantized orbits', formula: 'L = nℏ (n = 1, 2, 3, ...)' },
                { energy_levels: 'E_n = -13.6/n² eV', ground_state: 'n = 1' },
                { photon_emission: 'ΔE = hf = E_initial - E_final' },
                { radius: 'r_n = n²r₀', bohr_radius: 'r₀ = 0.529 Å' }
            ],
            de_broglie: {
                wavelength: 'λ = h/p = h/(mv)',
                applies: 'all particles with momentum',
                significance: 'wave-particle duality'
            },
            uncertainty_principle: {
                position_momentum: 'Δx·Δp ≥ ℏ/2',
                energy_time: 'ΔE·Δt ≥ ℏ/2',
                reduced_planck: 'ℏ = h/(2π) = 1.055×10⁻³⁴ J·s'
            }
        },

        relativity: {
            postulates: [
                { postulate: 'First', statement: 'Laws of physics same in all inertial frames' },
                { postulate: 'Second', statement: 'Speed of light constant in all inertial frames', c: '3×10⁸ m/s' }
            ],
            lorentz_factor: {
                gamma: 'γ = 1/√(1 - v²/c²)',
                applies: ['time dilation', 'length contraction', 'mass increase']
            },
            time_dilation: {
                formula: 'Δt = γΔt₀',
                proper_time: 'Δt₀ (moving frame)',
                dilated_time: 'Δt (stationary observer)'
            },
            length_contraction: {
                formula: 'L = L₀/γ',
                proper_length: 'L₀ (rest frame)',
                contracted_length: 'L (moving observer)'
            },
            relativistic_momentum: {
                formula: 'p = γmv',
                classical_limit: 'v << c → p ≈ mv'
            },
            mass_energy: {
                einstein: 'E = mc²',
                total_energy: 'E = γmc²',
                kinetic_energy: 'KE = (γ - 1)mc²',
                rest_energy: 'E₀ = mc²'
            },
            energy_momentum: {
                relation: 'E² = (pc)² + (mc²)²',
                massless_particles: 'E = pc (photons)'
            }
        },

        nuclear_physics: {
            nuclear_notation: {
                format: 'ᴬ_Z X',
                A: 'mass number (protons + neutrons)',
                Z: 'atomic number (protons)',
                N: 'neutron number (A - Z)'
            },
            decay_types_physics: [
                { type: 'alpha (α)', particle: '⁴₂He', change: 'A-4, Z-2', penetration: 'low' },
                { type: 'beta-minus (β⁻)', particle: 'electron', change: 'A same, Z+1', penetration: 'medium' },
                { type: 'beta-plus (β⁺)', particle: 'positron', change: 'A same, Z-1', penetration: 'medium' },
                { type: 'gamma (γ)', particle: 'photon', change: 'no change', penetration: 'high' }
            ],
            decay_law: {
                activity: 'N(t) = N₀ e^(-λt)',
                decay_constant: 'λ = ln(2)/t₁/₂',
                half_life: 't₁/₂ = 0.693/λ',
                activity_formula: 'A = λN (Becquerels)'
            },
            binding_energy: {
                definition: 'Energy to disassemble nucleus',
                formula: 'BE = Δmc²',
                mass_defect: 'Δm = (Zm_p + Nm_n) - m_nucleus',
                per_nucleon: 'BE/A (stability indicator)'
            },
            fission: {
                process: 'Heavy nucleus splits',
                example: '²³⁵U + n → fission products + neutrons + energy',
                chain_reaction: 'neutrons cause more fissions',
                critical_mass: 'minimum for sustained reaction'
            },
            fusion: {
                process: 'Light nuclei combine',
                example: '²H + ³H → ⁴He + n + energy',
                requirement: 'high temperature/pressure',
                stars: 'primary energy source'
            },
            radiation_units: [
                { unit: 'Becquerel (Bq)', measures: 'activity', definition: '1 decay/second' },
                { unit: 'Gray (Gy)', measures: 'absorbed dose', definition: '1 J/kg' },
                { unit: 'Sievert (Sv)', measures: 'effective dose', definition: 'biological effect' },
                { unit: 'Curie (Ci)', measures: 'activity (old)', conversion: '1 Ci = 3.7×10¹⁰ Bq' }
            ]
        }
    };
}



initializeBiologyDatabases() {
    this.biologyDatabases = {
        cell_biology: {
            cell_types: [
                { type: 'prokaryotic', nucleus: false, examples: ['bacteria', 'archaea'], size: '1-10 μm' },
                { type: 'eukaryotic', nucleus: true, examples: ['animal', 'plant', 'fungi', 'protist'], size: '10-100 μm' }
            ],
            organelles: [
                { name: 'nucleus', function: 'stores genetic material (DNA)', membrane: 'double', location: 'eukaryotic cells' },
                { name: 'mitochondria', function: 'cellular respiration, ATP production', membrane: 'double', nickname: 'powerhouse' },
                { name: 'chloroplast', function: 'photosynthesis', membrane: 'double', location: 'plant cells' },
                { name: 'endoplasmic reticulum', function: 'protein and lipid synthesis', types: ['rough (with ribosomes)', 'smooth (no ribosomes)'] },
                { name: 'Golgi apparatus', function: 'modify, package, transport proteins', structure: 'stacked membranes' },
                { name: 'ribosome', function: 'protein synthesis', membrane: false, location: 'all cells' },
                { name: 'lysosome', function: 'digestion, waste removal', membrane: 'single', location: 'animal cells' },
                { name: 'vacuole', function: 'storage, support', size: 'large in plant cells' },
                { name: 'cell wall', function: 'protection, structure', composition: 'cellulose (plants), peptidoglycan (bacteria)' }
            ],
            cell_membrane: [
                { component: 'phospholipid bilayer', structure: 'hydrophilic heads, hydrophobic tails', function: 'selective barrier' },
                { component: 'proteins', types: ['integral', 'peripheral'], function: 'transport, recognition, signaling' },
                { component: 'cholesterol', function: 'membrane fluidity', location: 'animal cells' },
                { component: 'carbohydrates', function: 'cell recognition', location: 'outer surface' }
            ],
            transport_mechanisms: [
                { type: 'passive transport', energy: 'no ATP required', examples: ['diffusion', 'osmosis', 'facilitated diffusion'] },
                { type: 'active transport', energy: 'requires ATP', direction: 'against concentration gradient', examples: ['sodium-potassium pump'] },
                { type: 'endocytosis', process: 'taking in materials', types: ['phagocytosis', 'pinocytosis', 'receptor-mediated'] },
                { type: 'exocytosis', process: 'releasing materials', example: 'secretion of hormones' }
            ],
            cell_division: [
                { type: 'mitosis', purpose: 'growth, repair, asexual reproduction', daughter_cells: '2 identical diploid cells', phases: ['prophase', 'metaphase', 'anaphase', 'telophase'] },
                { type: 'meiosis', purpose: 'gamete formation', daughter_cells: '4 non-identical haploid cells', divisions: 2, phases: ['meiosis I', 'meiosis II'] },
                { type: 'binary fission', purpose: 'prokaryotic reproduction', cells: 'bacteria' }
            ],
            cellular_respiration: [
                { stage: 'glycolysis', location: 'cytoplasm', products: '2 ATP, 2 NADH, 2 pyruvate', oxygen: 'not required' },
                { stage: 'Krebs cycle', location: 'mitochondrial matrix', products: '2 ATP, 6 NADH, 2 FADH2, CO2', oxygen: 'required' },
                { stage: 'electron transport chain', location: 'inner mitochondrial membrane', products: '~32-34 ATP', oxygen: 'final electron acceptor' },
                { total: 'aerobic respiration', equation: 'C6H12O6 + 6O2 → 6CO2 + 6H2O + ~36-38 ATP' }
            ],
            photosynthesis: [
                { stage: 'light reactions', location: 'thylakoid membranes', products: 'ATP, NADPH, O2', requires: 'light' },
                { stage: 'Calvin cycle', location: 'stroma', products: 'glucose (C6H12O6)', requires: 'ATP, NADPH, CO2' },
                { equation: 'overall', formula: '6CO2 + 6H2O + light → C6H12O6 + 6O2' },
                { factors: 'limiting factors', list: ['light intensity', 'CO2 concentration', 'temperature'] }
            ]
        },

        genetics: {
            dna_structure: [
                { component: 'double helix', discovered: 'Watson & Crick (1953)', structure: 'two antiparallel strands' },
                { component: 'nucleotide', parts: ['phosphate group', 'deoxyribose sugar', '5-carbon nitrogenous base'] },
                { bases: 'purines', types: ['adenine (A)', 'guanine (G)'], rings: 2 },
                { bases: 'pyrimidines', types: ['cytosine (C)', 'thymine (T)'], rings: 1 },
                { pairing: 'base pairs', rules: 'A-T (2 hydrogen bonds), G-C (3 hydrogen bonds)', complementary: true }
            ],
            central_dogma: [
                { process: 'replication', template: 'DNA', product: 'DNA', location: 'nucleus', enzyme: 'DNA polymerase' },
                { process: 'transcription', template: 'DNA', product: 'mRNA', location: 'nucleus', enzyme: 'RNA polymerase' },
                { process: 'translation', template: 'mRNA', product: 'protein', location: 'ribosome', reads: 'codons (3 bases)' }
            ],
            rna_types: [
                { type: 'mRNA', function: 'messenger RNA, carries genetic code', location: 'nucleus to ribosome' },
                { type: 'tRNA', function: 'transfer RNA, brings amino acids', structure: 'cloverleaf with anticodon' },
                { type: 'rRNA', function: 'ribosomal RNA, part of ribosome', location: 'ribosome structure' }
            ],
            genetic_code: [
                { feature: 'triplet code', definition: '3 bases = 1 codon = 1 amino acid', total_codons: 64 },
                { feature: 'start codon', codon: 'AUG', amino_acid: 'methionine' },
                { feature: 'stop codons', codons: ['UAA', 'UAG', 'UGA'], amino_acid: 'none (terminate)' },
                { feature: 'degeneracy', definition: 'multiple codons for same amino acid', redundancy: true },
                { feature: 'universal', applies: 'nearly all organisms', exceptions: 'few mitochondrial variations' }
            ],
            mendelian_genetics: [
                { law: 'Law of Segregation', statement: 'allele pairs separate during gamete formation', applies: 'single trait' },
                { law: 'Law of Independent Assortment', statement: 'genes for different traits assort independently', applies: 'multiple traits' },
                { law: 'Law of Dominance', statement: 'dominant allele masks recessive', notation: 'A (dominant), a (recessive)' }
            ],
            inheritance_patterns: [
                { pattern: 'complete dominance', example: 'Aa shows dominant phenotype', ratio: '3:1 (F2)' },
                { pattern: 'incomplete dominance', example: 'red × white = pink', ratio: '1:2:1 (F2)' },
                { pattern: 'codominance', example: 'AB blood type', both_expressed: true },
                { pattern: 'sex-linked', location: 'X or Y chromosome', example: 'hemophilia, color blindness' },
                { pattern: 'polygenic', genes: 'multiple genes', example: 'height, skin color' },
                { pattern: 'multiple alleles', alleles: 'more than 2', example: 'ABO blood types (IA, IB, i)' }
            ],
            mutations: [
                { type: 'point mutation', change: 'single nucleotide', examples: ['silent', 'missense', 'nonsense'] },
                { type: 'frameshift', cause: 'insertion or deletion', effect: 'shifts reading frame', severity: 'usually severe' },
                { type: 'chromosomal', scale: 'large DNA segments', types: ['deletion', 'duplication', 'inversion', 'translocation'] }
            ]
        },

        evolution: {
            natural_selection: [
                { principle: 'variation', statement: 'individuals in population vary', source: 'mutations, sexual reproduction' },
                { principle: 'heritability', statement: 'traits passed to offspring', requires: 'genetic basis' },
                { principle: 'overproduction', statement: 'more offspring than survive', competition: true },
                { principle: 'differential survival', statement: 'better adapted survive and reproduce', result: 'evolution' }
            ],
            mechanisms_of_evolution: [
                { mechanism: 'natural selection', effect: 'increases favorable traits', directional: true },
                { mechanism: 'genetic drift', effect: 'random allele frequency changes', important_in: 'small populations' },
                { mechanism: 'gene flow', effect: 'migration between populations', increases: 'genetic diversity' },
                { mechanism: 'mutation', effect: 'new alleles', source: 'ultimate source of variation' },
                { mechanism: 'sexual selection', effect: 'traits for mating success', example: 'peacock tail' }
            ],
            hardy_weinberg: [
                { equation: 'allele frequencies', formula: 'p + q = 1', variables: 'p (dominant), q (recessive)' },
                { equation: 'genotype frequencies', formula: 'p² + 2pq + q² = 1', genotypes: 'AA, Aa, aa' },
                { conditions: 'equilibrium requires', list: ['no mutation', 'random mating', 'no gene flow', 'large population', 'no selection'] },
                { use: 'predicts equilibrium', interpretation: 'if deviates, evolution occurring' }
            ],
            evidence_for_evolution: [
                { type: 'fossil record', shows: 'species changes over time', examples: 'transitional fossils' },
                { type: 'comparative anatomy', includes: ['homologous structures', 'analogous structures', 'vestigial structures'] },
                { type: 'embryology', observation: 'similar early development', example: 'vertebrate embryos' },
                { type: 'molecular biology', compares: 'DNA/protein sequences', more_similar: 'more closely related' },
                { type: 'biogeography', studies: 'geographic distribution', example: 'island species' }
            ],
            speciation: [
                { type: 'allopatric', mechanism: 'geographic isolation', common: true },
                { type: 'sympatric', mechanism: 'reproductive isolation (same area)', examples: 'polyploidy in plants' },
                { type: 'reproductive barriers', categories: ['prezygotic', 'postzygotic'], prevent: 'interbreeding' }
            ]
        },

        ecology: {
            ecosystem_components: [
                { component: 'producers', trophic_level: 1, organisms: 'autotrophs (plants, algae)', energy: 'sun → chemical' },
                { component: 'primary consumers', trophic_level: 2, organisms: 'herbivores', energy: 'eat producers' },
                { component: 'secondary consumers', trophic_level: 3, organisms: 'carnivores', energy: 'eat herbivores' },
                { component: 'tertiary consumers', trophic_level: 4, organisms: 'top carnivores', energy: 'eat other carnivores' },
                { component: 'decomposers', role: 'break down dead matter', organisms: 'bacteria, fungi', recycling: true }
            ],
            energy_flow: [
                { rule: '10% rule', energy_transfer: 'only ~10% passes to next level', lost_as: 'heat, metabolism' },
                { pyramid: 'energy pyramid', shape: 'always upright', base: 'largest (producers)' },
                { pyramid: 'biomass pyramid', measures: 'total mass of organisms', usually: 'upright' },
                { pyramid: 'numbers pyramid', measures: 'number of individuals', can_be: 'inverted' }
            ],
            nutrient_cycles: [
                { cycle: 'carbon cycle', key_processes: ['photosynthesis', 'respiration', 'combustion', 'decomposition'], reservoirs: 'atmosphere, ocean, fossil fuels' },
                { cycle: 'nitrogen cycle', key_processes: ['nitrogen fixation', 'nitrification', 'denitrification'], importance: 'proteins, nucleic acids' },
                { cycle: 'water cycle', key_processes: ['evaporation', 'condensation', 'precipitation', 'transpiration'], continuous: true },
                { cycle: 'phosphorus cycle', key_processes: ['weathering', 'absorption', 'decomposition'], no_gas_phase: true }
            ],
            population_ecology: [
                { concept: 'carrying capacity (K)', definition: 'maximum population size environment can support', limits: 'resources' },
                { growth: 'exponential', model: 'J-curve', occurs: 'unlimited resources', formula: 'dN/dt = rN' },
                { growth: 'logistic', model: 'S-curve', occurs: 'limited resources', formula: 'dN/dt = rN(K-N)/K' },
                { factors: 'density-dependent', examples: ['competition', 'predation', 'disease'], increase_with: 'population density' },
                { factors: 'density-independent', examples: ['weather', 'natural disasters'], not_affected_by: 'population density' }
            ],
            symbiotic_relationships: [
                { type: 'mutualism', interaction: '+/+', example: 'bees and flowers', both_benefit: true },
                { type: 'commensalism', interaction: '+/0', example: 'barnacles on whale', one_benefits: 'other unaffected' },
                { type: 'parasitism', interaction: '+/-', example: 'tapeworm in host', one_benefits: 'other harmed' },
                { type: 'predation', interaction: '+/-', example: 'lion eating zebra', one_kills: 'other for food' },
                { type: 'competition', interaction: '-/-', example: 'trees for sunlight', both_harmed: true }
            ],
            biomes: [
                { biome: 'tropical rainforest', climate: 'hot, wet year-round', biodiversity: 'highest', location: 'equator' },
                { biome: 'desert', climate: 'hot days, cold nights, very dry', precipitation: '<25 cm/year', adaptations: 'water storage' },
                { biome: 'grassland', climate: 'seasonal rain', vegetation: 'grasses', examples: 'savanna, prairie' },
                { biome: 'temperate forest', climate: 'four seasons', trees: 'deciduous', location: 'mid-latitudes' },
                { biome: 'taiga', climate: 'long cold winters', trees: 'coniferous', location: 'northern regions' },
                { biome: 'tundra', climate: 'extremely cold', vegetation: 'low-growing', permafrost: true }
            ]
        },

        human_anatomy: {
            circulatory_system: [
                { component: 'heart', chambers: 4, function: 'pumps blood', parts: ['2 atria', '2 ventricles'] },
                { component: 'blood vessels', types: ['arteries (away from heart)', 'veins (toward heart)', 'capillaries (exchange)'] },
                { pathway: 'pulmonary circulation', route: 'heart → lungs → heart', oxygenation: true },
                { pathway: 'systemic circulation', route: 'heart → body → heart', delivers: 'oxygen and nutrients' },
                { blood_components: 'plasma', percentage: '~55%', contains: 'water, proteins, nutrients, wastes' },
                { blood_components: 'red blood cells', function: 'carry oxygen', protein: 'hemoglobin' },
                { blood_components: 'white blood cells', function: 'immune defense', types: 'multiple' },
                { blood_components: 'platelets', function: 'blood clotting', fragments: true }
            ],
            respiratory_system: [
                { organ: 'nose/mouth', function: 'air intake, filtering, warming', entry_point: true },
                { organ: 'trachea', function: 'air passage to lungs', structure: 'cartilage rings' },
                { organ: 'bronchi', function: 'branch into lungs', divide_into: 'bronchioles' },
                { organ: 'alveoli', function: 'gas exchange', structure: 'tiny air sacs', surface_area: 'large' },
                { organ: 'diaphragm', function: 'breathing muscle', contracts: 'inhalation' },
                { process: 'inhalation', diaphragm: 'contracts (down)', chest: 'expands', pressure: 'decreases' },
                { process: 'exhalation', diaphragm: 'relaxes (up)', chest: 'contracts', pressure: 'increases' },
                { gas_exchange: 'O2 and CO2', mechanism: 'diffusion', location: 'alveoli-capillary interface' }
            ],
            digestive_system: [
                { organ: 'mouth', processes: 'mechanical (chewing), chemical (saliva)', enzyme: 'amylase (starch)' },
                { organ: 'esophagus', function: 'transport to stomach', movement: 'peristalsis' },
                { organ: 'stomach', processes: 'churning, acid digestion', pH: '~2', enzyme: 'pepsin (protein)' },
                { organ: 'small intestine', parts: ['duodenum', 'jejunum', 'ileum'], function: 'nutrient absorption', length: '~6 meters' },
                { organ: 'large intestine', function: 'water absorption, feces formation', bacteria: 'beneficial microbiome' },
                { organ: 'liver', functions: ['bile production', 'detoxification', 'nutrient storage'], largest_gland: true },
                { organ: 'pancreas', secretes: ['digestive enzymes', 'insulin', 'glucagon'], dual_function: true },
                { organ: 'gallbladder', function: 'stores bile', releases: 'fat digestion' }
            ],
            nervous_system: [
                { division: 'central nervous system (CNS)', parts: ['brain', 'spinal cord'], function: 'control center' },
                { division: 'peripheral nervous system (PNS)', parts: ['nerves throughout body'], connects: 'CNS to body' },
                { subdivision: 'somatic', controls: 'voluntary movements', example: 'skeletal muscles' },
                { subdivision: 'autonomic', controls: 'involuntary functions', divisions: ['sympathetic', 'parasympathetic'] },
                { cell: 'neuron', parts: ['dendrites', 'cell body', 'axon', 'axon terminals'], function: 'transmit signals' },
                { process: 'action potential', type: 'electrical signal', speed: 'up to 120 m/s', all_or_none: true },
                { process: 'synapse', type: 'chemical signal', neurotransmitters: ['acetylcholine', 'dopamine', 'serotonin'] }
            ],
            endocrine_system: [
                { gland: 'pituitary', location: 'brain', role: 'master gland', hormones: 'multiple (growth hormone, etc.)' },
                { gland: 'thyroid', location: 'neck', hormone: 'thyroxine', regulates: 'metabolism' },
                { gland: 'adrenal', location: 'above kidneys', hormones: 'adrenaline, cortisol', response: 'stress' },
                { gland: 'pancreas', hormones: 'insulin, glucagon', regulates: 'blood glucose' },
                { gland: 'ovaries', sex: 'female', hormones: 'estrogen, progesterone', functions: 'reproduction, secondary sex characteristics' },
                { gland: 'testes', sex: 'male', hormone: 'testosterone', functions: 'reproduction, secondary sex characteristics' }
            ],
            excretory_system: [
                { organ: 'kidneys', function: 'filter blood, produce urine', units: 'nephrons (~1 million each)' },
                { organ: 'ureters', function: 'transport urine to bladder', number: 2 },
                { organ: 'bladder', function: 'store urine', capacity: '~400-600 mL' },
                { organ: 'urethra', function: 'eliminate urine', exit_pathway: true },
                { process: 'filtration', location: 'glomerulus', filters: 'blood plasma' },
                { process: 'reabsorption', location: 'tubules', recovers: 'water, glucose, ions' },
                { process: 'secretion', location: 'tubules', removes: 'wastes, excess ions' }
            ]
        },

        plants: {
            plant_structure: [
                { organ: 'roots', functions: ['anchor plant', 'absorb water/minerals', 'store food'], types: ['taproot', 'fibrous'] },
                { organ: 'stem', functions: ['support', 'transport', 'storage'], tissues: ['xylem', 'phloem'] },
                { organ: 'leaves', function: 'photosynthesis', parts: ['blade', 'petiole', 'veins'], openings: 'stomata' },
                { organ: 'flowers', function: 'reproduction', parts: ['sepals', 'petals', 'stamens', 'pistil'] }
            ],
            plant_tissues: [
                { tissue: 'xylem', transports: 'water and minerals', direction: 'roots → leaves', cells: 'dead (hollow tubes)' },
                { tissue: 'phloem', transports: 'sugars (nutrients)', direction: 'leaves → rest of plant', cells: 'living' },
                { tissue: 'meristem', function: 'growth regions', types: ['apical (length)', 'lateral (width)'], cells: 'undifferentiated' },
                { tissue: 'epidermis', function: 'protective outer layer', features: 'cuticle, stomata' },
                { tissue: 'ground tissue', functions: ['photosynthesis', 'storage', 'support'], types: ['parenchyma', 'collenchyma', 'sclerenchyma'] }
            ],
            plant_transport: [
                { process: 'transpiration', definition: 'water loss through stomata', creates: 'pull on water column' },
                { process: 'cohesion-tension', mechanism: 'water molecules stick together', pulls: 'water up xylem' },
                { process: 'root pressure', mechanism: 'active transport into roots', pushes: 'water up' },
                { process: 'translocation', definition: 'movement of sugars in phloem', mechanism: 'pressure flow model' },
                { structure: 'stomata', function: 'gas exchange (CO2 in, O2 out)', regulated_by: 'guard cells' }
            ],
            plant_hormones: [
                { hormone: 'auxin', functions: ['cell elongation', 'apical dominance', 'phototropism'], movement: 'away from light' },
                { hormone: 'gibberellin', functions: ['stem elongation', 'seed germination', 'flowering'], promotes: 'growth' },
                { hormone: 'cytokinin', functions: ['cell division', 'delays aging'], location: 'roots' },
                { hormone: 'abscisic acid (ABA)', functions: ['stomata closure', 'seed dormancy'], stress_hormone: true },
                { hormone: 'ethylene', functions: ['fruit ripening', 'leaf abscission'], gas: true }
            ],
            tropisms: [
                { type: 'phototropism', stimulus: 'light', response: 'grow toward light', mechanism: 'auxin redistribution' },
                { type: 'gravitropism', stimulus: 'gravity', response: 'roots down, shoots up', senses: 'statoliths' },
                { type: 'thigmotropism', stimulus: 'touch', response: 'coiling around support', example: 'vines' },
                { type: 'hydrotropism', stimulus: 'water', response: 'roots grow toward water', survival: true }
            ],
            plant_reproduction: [
                { type: 'sexual', structures: 'flowers', produces: 'seeds', genetic_variation: true },
                { process: 'pollination', agents: ['wind', 'insects', 'birds', 'water'], transfers: 'pollen to stigma' },
                { process: 'fertilization', occurs: 'pollen tube to ovule', forms: 'zygote (embryo)' },
                { process: 'seed formation', parts: ['embryo', 'endosperm (food)', 'seed coat'], develops_into: 'new plant' },
                { type: 'asexual', methods: ['runners', 'bulbs', 'tubers', 'fragmentation'], genetic_variation: false }
            ]
        },

        microbiology: {
            bacteria: [
                { characteristic: 'structure', type: 'prokaryotic', size: '0.5-5 μm', shapes: ['cocci (spherical)', 'bacilli (rod)', 'spirilla (spiral)'] },
                { characteristic: 'cell wall', component: 'peptidoglycan', gram_staining: ['gram-positive (thick)', 'gram-negative (thin)'] },
                { characteristic: 'reproduction', method: 'binary fission', speed: 'rapid (20 min - hours)', asexual: true },
                { characteristic: 'metabolism', types: ['aerobic', 'anaerobic', 'facultative'], energy: 'varied sources' },
                { characteristic: 'beneficial roles', examples: ['gut flora', 'nitrogen fixation', 'food production (yogurt)'], essential: true },
                { characteristic: 'harmful roles', examples: ['pathogens', 'food spoilage', 'infections'], antibiotics: 'treatment' }
            ],
            viruses: [
                { characteristic: 'structure', components: ['protein coat (capsid)', 'genetic material (DNA or RNA)'], envelope: 'some have lipid envelope' },
                { characteristic: 'size', range: '20-300 nm', smaller_than: 'bacteria', visible: 'electron microscope only' },
                { characteristic: 'living status', debate: 'not considered alive', requires: 'host cell to reproduce' },
                { cycle: 'lytic cycle', steps: ['attach', 'inject DNA', 'replicate', 'assemble', 'lyse (burst)'], host_cell: 'destroyed' },
                { cycle: 'lysogenic cycle', process: 'viral DNA integrates into host', latent: true, can_switch: 'to lytic' },
                { examples: 'diseases', list: ['influenza', 'HIV', 'COVID-19', 'common cold', 'measles'] }
            ],
            fungi: [
                { characteristic: 'structure', type: 'eukaryotic', body: 'mycelium (hyphae network)', cell_wall: 'chitin' },
                { characteristic: 'nutrition', mode: 'heterotrophic', method: 'absorption', types: ['saprophytes', 'parasites', 'mutualists'] },
                { characteristic: 'reproduction', methods: ['spores (asexual)', 'sexual reproduction'], dispersal: 'wind, water, animals' },
                { examples: 'beneficial', list: ['decomposers', 'food (mushrooms)', 'antibiotics (penicillin)', 'yeast (baking)'] },
                { examples: 'harmful', list: ['athlete\'s foot', 'ringworm', 'plant diseases', 'food spoilage'] }
            ],
            protists: [
                { group: 'animal-like (protozoa)', examples: ['amoeba', 'paramecium', 'euglena'], nutrition: 'heterotrophic', movement: 'varied' },
                { group: 'plant-like (algae)', examples: ['diatoms', 'kelp', 'seaweed'], nutrition: 'photosynthetic', importance: 'oxygen production' },
                { group: 'fungus-like', examples: ['slime molds', 'water molds'], nutrition: 'absorption', similar_to: 'fungi' },
                { characteristic: 'diversity', note: 'catch-all kingdom', mostly: 'unicellular', some: 'multicellular' }
            ]
        },

        biotechnology: {
            genetic_engineering: [
                { technique: 'recombinant DNA', process: 'combine DNA from different sources', tools: ['restriction enzymes', 'ligase'], creates: 'GMOs' },
                { technique: 'gene cloning', process: 'make copies of gene', uses: 'plasmids in bacteria', produces: 'proteins (insulin)' },
                { technique: 'transformation', process: 'insert foreign DNA into cell', methods: ['heat shock', 'electroporation'] },
                { application: 'medicine', examples: ['insulin production', 'growth hormone', 'vaccines'] },
                { application: 'agriculture', examples: ['pest-resistant crops', 'drought tolerance', 'golden rice (vitamin A)'] }
            ],
            pcr: [
                { full_name: 'Polymerase Chain Reaction', purpose: 'amplify DNA', result: 'millions of copies' },
                { step: '1. Denaturation', temperature: '94-96°C', action: 'separate DNA strands' },
                { step: '2. Annealing', temperature: '50-65°C', action: 'primers bind to DNA' },
                { step: '3. Extension', temperature: '72°C', action: 'DNA polymerase copies strand', enzyme: 'Taq polymerase' },
                { cycles: 'repeat', number: '25-35 cycles', exponential: 'doubling each cycle' },
                { applications: 'uses', list: ['forensics', 'medical diagnosis', 'paternity testing', 'research'] }
            ],
            gel_electrophoresis: [
                { purpose: 'separate DNA fragments', basis: 'size', movement: 'negative DNA to positive electrode' },
                { process: 'setup', components: ['gel (agarose)', 'buffer', 'electric field'], voltage: 'applied' },
                { process: 'migration', pattern: 'smaller fragments travel farther', bands: 'visible under UV light' },
                { application: 'DNA fingerprinting', compares: 'DNA patterns', uses: ['forensics', 'paternity', 'identification'] }
            ],
            crispr: [
                { full_name: 'Clustered Regularly Interspaced Short Palindromic Repeats', discovered: 'bacteria immune system' },
                { components: 'Cas9', function: 'enzyme that cuts DNA', guided_by: 'guide RNA (gRNA)' },
                { process: 'gene editing', steps: ['design gRNA', 'Cas9 cuts target', 'cell repairs DNA'], precision: 'high' },
                { applications: 'potential', list: ['cure genetic diseases', 'cancer treatment', 'agriculture improvement'] },
                { concerns: 'ethical', issues: ['designer babies', 'unintended effects', 'accessibility'] }
            ],
            cloning: [
                { type: 'reproductive cloning', goal: 'create organism', example: 'Dolly the sheep', method: 'SCNT' },
                { type: 'therapeutic cloning', goal: 'create stem cells', purpose: 'medical treatment', not: 'full organism' },
                { process: 'SCNT', full_name: 'Somatic Cell Nuclear Transfer', steps: ['remove egg nucleus', 'insert somatic cell nucleus', 'stimulate division'] }
            ]
        },

        reproduction_development: {
            asexual_reproduction: [
                { type: 'binary fission', organisms: 'bacteria, protists', process: 'cell splits in two', identical: true },
                { type: 'budding', organisms: 'yeast, hydra', process: 'outgrowth forms new individual', attached: 'initially' },
                { type: 'fragmentation', organisms: 'starfish, planaria', process: 'body breaks, each part regenerates', multiple: true },
                { type: 'vegetative propagation', organisms: 'plants', examples: ['runners', 'tubers', 'bulbs'], cuttings: 'possible' },
                { advantage: 'speed', note: 'rapid reproduction', no_mate: 'required' },
                { disadvantage: 'diversity', note: 'no genetic variation', adaptation: 'limited' }
            ],
            sexual_reproduction: [
                { process: 'gametogenesis', male: 'spermatogenesis (4 sperm)', female: 'oogenesis (1 egg)', meiosis: true },
                { process: 'fertilization', union: 'sperm + egg', forms: 'zygote (diploid)', restores: 'chromosome number' },
                { advantage: 'genetic variation', source: ['crossing over', 'independent assortment', 'random fertilization'], evolution: 'beneficial' },
                { disadvantage: 'energy', requires: ['finding mate', 'courtship', 'parental care'], slower: 'than asexual' }
            ],
            embryonic_development: [
                { stage: 'cleavage', process: 'rapid cell division', cells: 'get smaller', no_growth: true },
                { stage: 'blastula', structure: 'hollow ball of cells', cavity: 'blastocoel' },
                { stage: 'gastrulation', process: 'cells migrate inward', forms: 'three germ layers', critical: true },
                { germ_layer: 'ectoderm', develops_into: ['skin', 'nervous system', 'sense organs'], outer: true },
                { germ_layer: 'mesoderm', develops_into: ['muscles', 'bones', 'circulatory system', 'kidneys'], middle: true },
                { germ_layer: 'endoderm', develops_into: ['digestive tract', 'respiratory system', 'liver', 'pancreas'], inner: true },
                { stage: 'organogenesis', process: 'organs form from germ layers', differentiation: true }
            ],
            human_reproduction: [
                { male: 'testes', produces: 'sperm', hormone: 'testosterone', continuous: 'from puberty' },
                { male: 'pathway', route: 'testes → epididymis → vas deferens → urethra', glands: 'seminal vesicles, prostate' },
                { female: 'ovaries', produces: 'eggs (ova)', hormones: 'estrogen, progesterone', cyclic: true },
                { female: 'pathway', route: 'ovary → fallopian tube → uterus', fertilization: 'usually in fallopian tube' },
                { cycle: 'menstrual cycle', length: '~28 days', phases: ['menstruation', 'follicular', 'ovulation', 'luteal'] },
                { pregnancy: 'gestation', duration: '~40 weeks (9 months)', stages: ['1st trimester', '2nd trimester', '3rd trimester'] }
            ]
        },

        immunology: {
            immune_system_components: [
                { component: 'white blood cells', types: ['phagocytes', 'lymphocytes'], function: 'defense against pathogens' },
                { component: 'lymphocytes', types: ['B cells (antibodies)', 'T cells (cell-mediated)'], adaptive: true },
                { component: 'antibodies', structure: 'Y-shaped proteins', function: 'bind to antigens', produced_by: 'B cells' },
                { component: 'antigens', definition: 'foreign substances', trigger: 'immune response', examples: ['proteins', 'toxins', 'pathogens'] }
            ],
            immune_responses: [
                { type: 'innate immunity', response: 'immediate', specificity: 'non-specific', components: ['skin', 'mucus', 'phagocytes', 'inflammation'] },
                { type: 'adaptive immunity', response: 'slower (days)', specificity: 'specific', components: ['B cells', 'T cells'], memory: true },
                { process: 'cell-mediated', cells: 'T cells', targets: 'infected cells, cancer cells', cytotoxic: 'T cells kill' },
                { process: 'humoral', cells: 'B cells', produces: 'antibodies', targets: 'pathogens in body fluids' }
            ],
            immune_memory: [
                { exposure: 'primary response', timeline: '1-2 weeks', antibody_level: 'low initially', memory_cells: 'formed' },
                { exposure: 'secondary response', timeline: '2-7 days', antibody_level: 'much higher', faster: true, reason: 'memory cells' },
                { application: 'vaccination', contains: 'weakened/killed pathogen or parts', creates: 'memory cells', prevents: 'future disease' }
            ],
            vaccines: [
                { type: 'live attenuated', contains: 'weakened pathogen', examples: ['MMR', 'chickenpox'], immune_response: 'strong' },
                { type: 'inactivated', contains: 'killed pathogen', examples: ['polio (IPV)', 'flu shot'], boosters: 'may need' },
                { type: 'subunit', contains: 'pathogen parts', examples: ['HPV', 'hepatitis B'], specific: 'antigens only' },
                { type: 'mRNA', contains: 'genetic instructions', examples: ['COVID-19 (Pfizer, Moderna)'], novel: true },
                { concept: 'herd immunity', definition: 'enough people immune', protects: 'vulnerable individuals', threshold: 'varies by disease' }
            ],
            disorders: [
                { type: 'autoimmune', problem: 'attacks own cells', examples: ['type 1 diabetes', 'rheumatoid arthritis', 'lupus'] },
                { type: 'immunodeficiency', problem: 'weak immune system', examples: ['AIDS (HIV)', 'SCID'], vulnerable: 'infections' },
                { type: 'allergies', problem: 'overreaction to harmless substance', triggers: ['pollen', 'food', 'dust'], response: 'histamine release' }
            ]
        },

        taxonomy: {
            classification_hierarchy: [
                { level: 'Domain', largest: true, groups: ['Bacteria', 'Archaea', 'Eukarya'] },
                { level: 'Kingdom', examples: ['Animalia', 'Plantae', 'Fungi', 'Protista'] },
                { level: 'Phylum', example: 'Chordata (animals with notochord)' },
                { level: 'Class', example: 'Mammalia (mammals)' },
                { level: 'Order', example: 'Primates' },
                { level: 'Family', example: 'Hominidae (great apes)' },
                { level: 'Genus', example: 'Homo', capitalized: true },
                { level: 'Species', example: 'sapiens', smallest: true, lowercase: true },
                { mnemonic: 'Dear King Philip Came Over For Good Soup', helps: 'remember order' }
            ],
            binomial_nomenclature: [
                { system: 'two-part name', format: 'Genus species', example: 'Homo sapiens', developed_by: 'Linnaeus' },
                { rule: 'genus capitalized', example: 'Homo', italicized: true },
                { rule: 'species lowercase', example: 'sapiens', italicized: true },
                { purpose: 'universal naming', avoids: 'common name confusion', language: 'Latin/Greek' }
            ],
            domains: [
                { domain: 'Bacteria', cell_type: 'prokaryotic', examples: ['E. coli', 'Streptococcus'], peptidoglycan: true },
                { domain: 'Archaea', cell_type: 'prokaryotic', examples: ['methanogens', 'halophiles'], extreme_environments: 'often' },
                { domain: 'Eukarya', cell_type: 'eukaryotic', kingdoms: ['Protista', 'Fungi', 'Plantae', 'Animalia'], nucleus: true }
            ]
        },

        homeostasis: {
            definition: [
                { concept: 'homeostasis', definition: 'maintaining stable internal conditions', despite: 'external changes', essential: 'survival' },
                { regulated: 'body temperature', example: 'humans ~37°C (98.6°F)' },
                { regulated: 'blood glucose', range: '70-110 mg/dL', hormones: 'insulin, glucagon' },
                { regulated: 'pH', blood_pH: '~7.4', buffers: 'maintain' },
                { regulated: 'water balance', mechanisms: ['kidneys', 'ADH hormone'], osmosis: true }
            ],
            feedback_mechanisms: [
                { type: 'negative feedback', effect: 'reverses change', common: 'most homeostatic mechanisms', example: 'body temperature' },
                { example: 'temperature regulation', hot: 'sweating, vasodilation', cold: 'shivering, vasoconstriction', goal: 'return to set point' },
                { type: 'positive feedback', effect: 'amplifies change', rare: true, examples: ['childbirth (oxytocin)', 'blood clotting'] }
            ],
            thermoregulation: [
                { when: 'too hot', responses: ['sweating', 'vasodilation', 'decreased metabolism'], cools: 'body' },
                { when: 'too cold', responses: ['shivering', 'vasoconstriction', 'increased metabolism'], warms: 'body' },
                { animals: 'endotherms', regulation: 'internal', examples: ['mammals', 'birds'], constant: 'body temperature' },
                { animals: 'ectotherms', regulation: 'external (behavior)', examples: ['reptiles', 'fish'], variable: 'body temperature' }
            ],
            blood_glucose_regulation: [
                { condition: 'high blood sugar', hormone: 'insulin', source: 'pancreas beta cells', effect: 'cells take up glucose', storage: 'glycogen' },
                { condition: 'low blood sugar', hormone: 'glucagon', source: 'pancreas alpha cells', effect: 'liver releases glucose', breakdown: 'glycogen' },
                { disease: 'diabetes type 1', problem: 'no insulin production', treatment: 'insulin injections', autoimmune: true },
                { disease: 'diabetes type 2', problem: 'insulin resistance', treatment: 'diet, exercise, medication', lifestyle: 'related' }
            ],
            osmoregulation: [
                { organ: 'kidneys', function: 'filter blood, regulate water', units: 'nephrons' },
                { hormone: 'ADH (antidiuretic)', source: 'pituitary', effect: 'kidneys reabsorb more water', urine: 'concentrated' },
                { condition: 'dehydration', response: 'more ADH', result: 'less urine output', conserve: 'water' },
                { condition: 'overhydration', response: 'less ADH', result: 'more urine output', eliminate: 'excess water' }
            ]
        },

        energy_systems: {
            atp_structure: [
                { molecule: 'ATP', full_name: 'Adenosine Triphosphate', components: ['adenine', 'ribose', '3 phosphate groups'] },
                { bond: 'high-energy', location: 'between phosphates', breaks: 'releases energy', formula: 'ATP → ADP + Pi + energy' },
                { use: 'energy currency', powers: ['muscle contraction', 'active transport', 'synthesis reactions'], universal: true }
            ],
            cellular_respiration_detail: [
                { stage: 'glycolysis', location: 'cytoplasm', input: 'glucose', output: '2 pyruvate, 2 ATP, 2 NADH', oxygen: 'not required' },
                { stage: 'pyruvate oxidation', location: 'mitochondrial matrix', input: '2 pyruvate', output: '2 acetyl-CoA, 2 NADH, 2 CO2', transition: true },
                { stage: 'Krebs cycle', location: 'mitochondrial matrix', input: '2 acetyl-CoA', output: '4 CO2, 6 NADH, 2 FADH2, 2 ATP', circular: true },
                { stage: 'electron transport chain', location: 'inner mitochondrial membrane', input: 'NADH, FADH2', output: '~32-34 ATP, H2O', oxygen: 'final electron acceptor' },
                { total: 'complete aerobic', glucose_input: 1, atp_output: '~36-38 ATP', efficiency: '~40%' }
            ],
            fermentation: [
                { type: 'lactic acid fermentation', organisms: ['muscle cells', 'bacteria'], product: 'lactic acid', atp: '2 (from glycolysis only)' },
                { type: 'alcoholic fermentation', organisms: ['yeast', 'some bacteria'], products: 'ethanol + CO2', uses: 'bread, beer, wine' },
                { purpose: 'anaerobic', when: 'no oxygen', regenerates: 'NAD+ for glycolysis', inefficient: 'only 2 ATP' }
            ],
            photosynthesis_detail: [
                { stage: 'light-dependent reactions', location: 'thylakoid membranes', requires: 'light', produces: ['ATP', 'NADPH', 'O2'] },
                { process: 'photosystem II', action: 'splits water', releases: 'O2', energizes: 'electrons' },
                { process: 'photosystem I', action: 'further energizes electrons', produces: 'NADPH' },
                { stage: 'light-independent (Calvin cycle)', location: 'stroma', requires: ['CO2', 'ATP', 'NADPH'], produces: 'glucose (G3P)' },
                { cycle: 'CO2 fixation', enzyme: 'RuBisCO', combines: 'CO2 + RuBP' },
                { cycle: 'reduction', uses: 'ATP and NADPH', forms: 'G3P (3-carbon sugar)' },
                { cycle: 'regeneration', regenerates: 'RuBP', continues: 'cycle', requires: '3 CO2 for 1 G3P output' }
            ]
        },

        dna_technology: {
            dna_fingerprinting: [
                { technique: 'RFLP', full_name: 'Restriction Fragment Length Polymorphism', uses: 'restriction enzymes', older: true },
                { technique: 'STR analysis', full_name: 'Short Tandem Repeats', current_standard: true, regions: 'repetitive DNA' },
                { process: 'collect DNA', sources: ['blood', 'hair', 'saliva', 'skin cells'], crime_scene: 'evidence' },
                { process: 'amplify', method: 'PCR', creates: 'many copies' },
                { process: 'separate', method: 'gel electrophoresis', pattern: 'unique banding' },
                { process: 'compare', matches: 'suspect to evidence', probability: 'statistical analysis' }
            ],
            forensic_applications: [
                { use: 'crime scene investigation', identifies: 'suspects', evidence: 'biological material' },
                { use: 'paternity testing', compares: 'child and alleged father', accuracy: '>99%' },
                { use: 'identification', purposes: ['disaster victims', 'missing persons'], databases: 'CODIS (US)' },
                { use: 'exoneration', frees: 'wrongly convicted', evidence: 'DNA proves innocence' }
            ],
            gene_therapy: [
                { approach: 'gene replacement', replaces: 'defective gene with functional', delivery: 'virus vector' },
                { approach: 'gene augmentation', adds: 'normal gene copy', defective: 'remains but supplemented' },
                { approach: 'gene editing', uses: 'CRISPR', corrects: 'mutation directly' },
                { target: 'somatic cells', affects: 'individual only', not_inherited: true },
                { target: 'germline cells', affects: 'future generations', controversial: 'ethical concerns' },
                { challenges: 'current', issues: ['delivery efficiency', 'immune response', 'off-target effects', 'cost'] }
            ]
        }
    };
}



initializeMathematicsDatabases() {
    this.mathematicsDatabases = {
        number_theory: {
            properties: [
                { property: 'even numbers', definition: 'divisible by 2', form: '2n', examples: [0, 2, 4, 6, 8] },
                { property: 'odd numbers', definition: 'not divisible by 2', form: '2n+1', examples: [1, 3, 5, 7, 9] },
                { property: 'prime numbers', definition: 'only divisible by 1 and itself', note: 'greater than 1', examples: [2, 3, 5, 7, 11] },
                { property: 'composite numbers', definition: 'has more than two factors', examples: [4, 6, 8, 9, 10] },
                { property: 'perfect squares', definition: 'n²', examples: [1, 4, 9, 16, 25] },
                { property: 'perfect cubes', definition: 'n³', examples: [1, 8, 27, 64, 125] }
            ],
            divisibility_rules: [
                { divisor: 2, rule: 'last digit is even', examples: [14, 28, 102] },
                { divisor: 3, rule: 'sum of digits divisible by 3', example: '123 → 1+2+3=6, divisible by 3' },
                { divisor: 4, rule: 'last two digits divisible by 4', examples: [116, 324] },
                { divisor: 5, rule: 'last digit is 0 or 5', examples: [25, 100] },
                { divisor: 6, rule: 'divisible by both 2 and 3', examples: [12, 18, 24] },
                { divisor: 9, rule: 'sum of digits divisible by 9', example: '243 → 2+4+3=9' },
                { divisor: 10, rule: 'last digit is 0', examples: [30, 100, 500] }
            ],
            factorization: [
                { concept: 'prime factorization', definition: 'express as product of primes', example: '12 = 2² × 3' },
                { concept: 'factor tree', method: 'break down into factors repeatedly', visual: true },
                { concept: 'HCF', full_name: 'Highest Common Factor', method: 'largest factor common to numbers' },
                { concept: 'LCM', full_name: 'Lowest Common Multiple', method: 'smallest multiple common to numbers' }
            ]
        },

        algebra: {
            expressions: [
                { type: 'monomial', definition: 'one term', examples: ['3x', '-5y²', '7'] },
                { type: 'binomial', definition: 'two terms', examples: ['x + 5', '3a - 2b'] },
                { type: 'trinomial', definition: 'three terms', examples: ['x² + 3x + 2'] },
                { type: 'polynomial', definition: 'many terms', general_form: 'aₙxⁿ + ... + a₁x + a₀' }
            ],
            linear_equations: [
                { form: 'standard', equation: 'ax + b = c', solution: 'x = (c-b)/a' },
                { form: 'slope-intercept', equation: 'y = mx + b', m: 'slope', b: 'y-intercept' },
                { form: 'point-slope', equation: 'y - y₁ = m(x - x₁)', uses: 'point and slope' },
                { form: 'general', equation: 'Ax + By + C = 0', standard_form: true }
            ],
            quadratic_equations: [
                { form: 'standard', equation: 'ax² + bx + c = 0', a_not_zero: true },
                { method: 'factoring', when: 'can factor easily', example: 'x² - 5x + 6 = (x-2)(x-3)' },
                { method: 'quadratic formula', formula: 'x = [-b ± √(b²-4ac)] / 2a', always_works: true },
                { method: 'completing square', steps: 'make perfect square trinomial', useful: 'vertex form' },
                { discriminant: 'b² - 4ac', positive: '2 real roots', zero: '1 real root', negative: 'no real roots' }
            ],
            exponential_logarithmic: [
                { law: 'product', rule: 'aᵐ × aⁿ = aᵐ⁺ⁿ', example: '2³ × 2² = 2⁵' },
                { law: 'quotient', rule: 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ', example: '3⁵ ÷ 3² = 3³' },
                { law: 'power', rule: '(aᵐ)ⁿ = aᵐⁿ', example: '(2³)² = 2⁶' },
                { log: 'definition', relation: 'log_a(b) = c ↔ aᶜ = b' },
                { log: 'product rule', formula: 'log(xy) = log(x) + log(y)' },
                { log: 'quotient rule', formula: 'log(x/y) = log(x) - log(y)' },
                { log: 'power rule', formula: 'log(xⁿ) = n·log(x)' }
            ]
        },

        functions: {
            basics: [
                { concept: 'definition', statement: 'relation where each input has exactly one output' },
                { notation: 'function', format: 'f(x)', reads: 'f of x' },
                { concept: 'domain', definition: 'set of all possible input values (x)' },
                { concept: 'range', definition: 'set of all possible output values (y)' },
                { test: 'vertical line test', purpose: 'determine if relation is function', rule: 'no vertical line intersects graph twice' }
            ],
            types: [
                { type: 'linear', form: 'f(x) = mx + b', graph: 'straight line', slope: 'm' },
                { type: 'quadratic', form: 'f(x) = ax² + bx + c', graph: 'parabola', vertex_form: 'a(x-h)² + k' },
                { type: 'cubic', form: 'f(x) = ax³ + bx² + cx + d', graph: 'S-curve' },
                { type: 'absolute value', form: 'f(x) = |x|', graph: 'V-shape', always_positive: true },
                { type: 'rational', form: 'f(x) = p(x)/q(x)', restrictions: 'q(x) ≠ 0', asymptotes: true },
                { type: 'exponential', form: 'f(x) = aᵇˣ', growth: 'b > 1', decay: '0 < b < 1' },
                { type: 'logarithmic', form: 'f(x) = log_b(x)', inverse_of: 'exponential' }
            ],
            transformations: [
                { type: 'vertical shift', form: 'f(x) + k', effect: 'up if k>0, down if k<0' },
                { type: 'horizontal shift', form: 'f(x - h)', effect: 'right if h>0, left if h<0' },
                { type: 'vertical stretch/compression', form: 'a·f(x)', effect: 'stretch if |a|>1, compress if |a|<1' },
                { type: 'horizontal stretch/compression', form: 'f(bx)', effect: 'compress if |b|>1, stretch if |b|<1' },
                { type: 'reflection', x_axis: 'y = -f(x)', y_axis: 'y = f(-x)' }
            ]
        },

        geometry: {
            angles: [
                { type: 'acute', range: '0° < angle < 90°', example: '45°' },
                { type: 'right', measure: '90°', symbol: 'square corner' },
                { type: 'obtuse', range: '90° < angle < 180°', example: '120°' },
                { type: 'straight', measure: '180°', forms: 'straight line' },
                { type: 'reflex', range: '180° < angle < 360°', example: '270°' },
                { relationship: 'complementary', sum: '90°', example: '30° and 60°' },
                { relationship: 'supplementary', sum: '180°', example: '110° and 70°' },
                { relationship: 'vertically opposite', property: 'equal', formed_by: 'two intersecting lines' }
            ],
            triangles: [
                { type: 'by sides', equilateral: 'all sides equal', isosceles: 'two sides equal', scalene: 'no sides equal' },
                { type: 'by angles', acute: 'all angles < 90°', right: 'one angle = 90°', obtuse: 'one angle > 90°' },
                { property: 'angle sum', theorem: 'sum of angles = 180°', always: true },
                { property: 'exterior angle', theorem: 'exterior angle = sum of two remote interior angles' },
                { theorem: 'Pythagorean', formula: 'a² + b² = c²', applies: 'right triangles', c: 'hypotenuse' }
            ],
            circles: [
                { part: 'radius', definition: 'center to circumference', symbol: 'r' },
                { part: 'diameter', definition: 'across through center', formula: 'd = 2r' },
                { part: 'circumference', formula: 'C = 2πr = πd', perimeter: true },
                { part: 'area', formula: 'A = πr²' },
                { part: 'chord', definition: 'line segment joining two points on circle' },
                { part: 'tangent', definition: 'line touching circle at one point', perpendicular: 'to radius at point' },
                { part: 'arc', definition: 'part of circumference', types: ['minor', 'major'] },
                { part: 'sector', definition: 'pie slice', area: 'A = (θ/360°) × πr²' }
            ],
            solid_geometry: [
                { solid: 'cube', faces: 6, edges: 12, vertices: 8, volume: 's³', surface_area: '6s²' },
                { solid: 'rectangular prism', volume: 'l × w × h', surface_area: '2(lw + lh + wh)' },
                { solid: 'cylinder', volume: 'πr²h', surface_area: '2πr² + 2πrh', curved_surface: '2πrh' },
                { solid: 'cone', volume: '⅓πr²h', surface_area: 'πr² + πrl', l: 'slant height' },
                { solid: 'sphere', volume: '⁴⁄₃πr³', surface_area: '4πr²' },
                { solid: 'pyramid', volume: '⅓ × base area × height', types: ['square', 'triangular'] }
            ]
        },

        trigonometry: {
            basic_ratios: [
                { ratio: 'sine', definition: 'sin θ = opposite/hypotenuse', abbr: 'sin' },
                { ratio: 'cosine', definition: 'cos θ = adjacent/hypotenuse', abbr: 'cos' },
                { ratio: 'tangent', definition: 'tan θ = opposite/adjacent', also: 'tan = sin/cos' },
                { mnemonic: 'SOH CAH TOA', helps: 'remember ratios', popular: true }
            ],
            special_angles: [
                { angle: '0°', sin: '0', cos: '1', tan: '0' },
                { angle: '30°', sin: '½', cos: '√3/2', tan: '1/√3' },
                { angle: '45°', sin: '√2/2', cos: '√2/2', tan: '1' },
                { angle: '60°', sin: '√3/2', cos: '½', tan: '√3' },
                { angle: '90°', sin: '1', cos: '0', tan: 'undefined' }
            ],
            identities: [
                { identity: 'Pythagorean', formula: 'sin²θ + cos²θ = 1', fundamental: true },
                { identity: 'quotient', formula: 'tan θ = sin θ / cos θ' },
                { identity: 'reciprocal', formulas: ['csc θ = 1/sin θ', 'sec θ = 1/cos θ', 'cot θ = 1/tan θ'] },
                { identity: 'double angle', sin: 'sin(2θ) = 2sin θ cos θ', cos: 'cos(2θ) = cos²θ - sin²θ' }
            ],
            sine_cosine_rules: [
                { rule: 'Sine Rule', formula: 'a/sin A = b/sin B = c/sin C', use: 'non-right triangles', finds: 'sides or angles' },
                { rule: 'Cosine Rule', formula: 'a² = b² + c² - 2bc cos A', use: 'non-right triangles', generalization: 'Pythagorean theorem' }
            ],
            radians: [
                { concept: 'radian measure', definition: 'arc length = radius', natural: true },
                { conversion: 'degrees to radians', formula: 'radians = degrees × π/180' },
                { conversion: 'radians to degrees', formula: 'degrees = radians × 180/π' },
                { common: 'π radians', equals: '180°' },
                { common: '2π radians', equals: '360°' }
            ]
        },

        calculus: {
            limits: [
                { concept: 'definition', meaning: 'value function approaches', notation: 'lim(x→a) f(x)' },
                { property: 'continuity', condition: 'lim(x→a) f(x) = f(a)', no_jump: true },
                { type: 'one-sided', left: 'lim(x→a⁻)', right: 'lim(x→a⁺)' },
                { special: 'limit at infinity', behavior: 'as x → ∞ or x → -∞' }
            ],
            differentiation: [
                { concept: 'derivative', definition: 'rate of change', notation: "f'(x), dy/dx, df/dx" },
                { interpretation: 'geometric', meaning: 'slope of tangent line' },
                { interpretation: 'physical', meaning: 'instantaneous rate of change' },
                { power_rule: 'd/dx(xⁿ) = nxⁿ⁻¹', most_common: true },
                { sum_rule: 'd/dx(f+g) = df/dx + dg/dx' },
                { product_rule: 'd/dx(fg) = f·dg/dx + g·df/dx' },
                { quotient_rule: 'd/dx(f/g) = (g·df/dx - f·dg/dx)/g²' },
                { chain_rule: 'd/dx(f(g(x))) = f\'(g(x))·g\'(x)', composite_functions: true }
            ],
            integration: [
                { concept: 'antiderivative', inverse_of: 'differentiation', notation: '∫f(x)dx' },
                { indefinite: 'general form', includes: 'constant C', formula: '∫f(x)dx = F(x) + C' },
                { definite: 'with limits', notation: '∫[a to b] f(x)dx', result: 'number' },
                { power_rule: '∫xⁿdx = xⁿ⁺¹/(n+1) + C', n_not: '-1' },
                { fundamental_theorem: '∫[a to b] f(x)dx = F(b) - F(a)', F: 'antiderivative' },
                { application: 'area under curve', geometric: true },
                { application: 'volume of revolution', rotate: 'about axis' }
            ],
            optimization: [
                { concept: 'critical points', found_where: 'f\'(x) = 0 or undefined' },
                { test: 'first derivative', f_prime_positive: 'increasing', f_prime_negative: 'decreasing' },
                { test: 'second derivative', f_double_prime_positive: 'concave up (minimum)', f_double_prime_negative: 'concave down (maximum)' },
                { application: 'maximize/minimize', examples: ['profit', 'area', 'volume', 'cost'] }
            ]
        },

        statistics: {
            central_tendency: [
                { measure: 'mean', definition: 'average', formula: 'Σx/n', affected_by: 'outliers' },
                { measure: 'median', definition: 'middle value when ordered', robust: 'not affected by outliers' },
                { measure: 'mode', definition: 'most frequent value', can_have: 'none, one, or multiple' }
            ],
            spread: [
                { measure: 'range', definition: 'max - min', simple: true, affected_by: 'outliers' },
                { measure: 'interquartile range (IQR)', definition: 'Q3 - Q1', robust: true },
                { measure: 'variance', definition: 'average squared deviation', formula: 'Σ(x-μ)²/n' },
                { measure: 'standard deviation', definition: 'square root of variance', formula: 'σ = √variance', units: 'same as data' },
                { concept: 'quartiles', Q1: '25th percentile', Q2: 'median', Q3: '75th percentile' }
            ],
            probability_basic: [
                { concept: 'probability', definition: 'P(event) = favorable/total', range: '0 to 1' },
                { rule: 'complement', formula: 'P(not A) = 1 - P(A)' },
                { rule: 'addition (OR)', mutually_exclusive: 'P(A or B) = P(A) + P(B)', general: 'P(A∪B) = P(A) + P(B) - P(A∩B)' },
                { rule: 'multiplication (AND)', independent: 'P(A and B) = P(A) × P(B)' },
                { concept: 'conditional probability', formula: 'P(A|B) = P(A∩B) / P(B)', given: 'B occurred' }
            ],
            counting: [
                { principle: 'fundamental counting', rule: 'multiply number of choices', example: '3 shirts × 4 pants = 12 outfits' },
                { concept: 'permutation', definition: 'arrangements (order matters)', formula: 'nPr = n!/(n-r)!' },
                { concept: 'combination', definition: 'selections (order doesn\'t matter)', formula: 'nCr = n!/[r!(n-r)!]' },
                { concept: 'factorial', notation: 'n!', definition: 'n × (n-1) × ... × 2 × 1', special: '0! = 1' }
            ]
        },

        vectors: {
            basics: [
                { notation: 'column vector', format: '[x, y] or [x, y, z]', represents: 'displacement' },
                { notation: 'component form', format: 'v = xi + yj + zk', unit_vectors: 'i, j, k' },
                { concept: 'magnitude', formula_2D: '|v| = √(x² + y²)', formula_3D: '|v| = √(x² + y² + z²)' },
                { concept: 'direction', angle: 'θ = tan⁻¹(y/x)', important: '2D' },
                { concept: 'unit vector', definition: 'magnitude = 1', formula: 'û = v/|v|' }
            ],
            operations: [
                { operation: 'addition', component_wise: '[a,b] + [c,d] = [a+c, b+d]', geometric: 'triangle rule' },
                { operation: 'subtraction', formula: '[a,b] - [c,d] = [a-c, b-d]' },
                { operation: 'scalar multiplication', formula: 'k[a,b] = [ka, kb]', effect: 'scales magnitude' },
                { operation: 'dot product', formula_2D: 'a·b = a₁b₁ + a₂b₂', result: 'scalar', angle: 'a·b = |a||b|cos θ' },
                { operation: 'cross product', formula_3D: 'a×b = |i j k; a₁ a₂ a₃; b₁ b₂ b₃|', result: 'vector', perpendicular: true }
            ],
            applications: [
                { application: 'parallel vectors', condition: 'a = kb for some scalar k', cross_product: 'a×b = 0' },
                { application: 'perpendicular vectors', condition: 'a·b = 0', angle: '90°' },
                { application: 'vector equation of line', formula: 'r = a + tb', a: 'position vector', b: 'direction vector' },
                { application: 'angle between vectors', formula: 'cos θ = (a·b)/(|a||b|)' }
            ]
        },

        matrices: {
            basics: [
                { concept: 'matrix', definition: 'rectangular array of numbers', dimension: 'm×n (rows × columns)' },
                { type: 'square matrix', rows_equals_columns: true, example: '2×2, 3×3' },
                { type: 'identity matrix', notation: 'I', property: 'diagonal of 1s, rest 0s', AI_equals: 'A' },
                { type: 'zero matrix', notation: 'O', all_elements: '0' }
            ],
            operations: [
                { operation: 'addition/subtraction', requirement: 'same dimensions', component_wise: true },
                { operation: 'scalar multiplication', effect: 'multiply each element by scalar' },
                { operation: 'matrix multiplication', requirement: 'columns of A = rows of B', result_dimension: 'm×p (if A is m×n, B is n×p)' },
                { property: 'not commutative', note: 'AB ≠ BA generally' },
                { property: 'associative', statement: '(AB)C = A(BC)' },
                { property: 'distributive', statement: 'A(B+C) = AB + AC' }
            ],
            determinant: [
                { for: '2×2 matrix', formula: 'det([a,b;c,d]) = ad - bc' },
                { for: '3×3 matrix', method: 'rule of Sarrus or cofactor expansion', more_complex: true },
                { property: 'invertible', condition: 'det ≠ 0', non_singular: true },
                { property: 'area/volume', interpretation: 'scales area (2D) or volume (3D)' }
            ],
            inverse: [
                { concept: 'inverse matrix', notation: 'A⁻¹', property: 'AA⁻¹ = A⁻¹A = I' },
                { existence: 'exists if', condition: 'det(A) ≠ 0' },
                { formula: '2×2 inverse', formula: 'A⁻¹ = (1/det(A)) × [d,-b;-c,a]' },
                { application: 'solving systems', equation: 'AX = B → X = A⁻¹B' }
            ],
            transformations: [
                { transformation: 'rotation', about_origin: 'θ angle', matrix: '[cos θ, -sin θ; sin θ, cos θ]' },
                { transformation: 'reflection', x_axis: '[1,0;0,-1]', y_axis: '[-1,0;0,1]' },
                { transformation: 'enlargement', scale_factor_k: '[k,0;0,k]', from_origin: true },
                { transformation: 'shear', horizontal: '[1,k;0,1]', vertical: '[1,0;k,1]' }
            ]
        },

        sequences_series: {
            arithmetic: [
                { definition: 'constant difference', notation: 'd', example: '2, 5, 8, 11... (d=3)' },
                { nth_term: 'formula', equation: 'aₙ = a₁ + (n-1)d', a1: 'first term' },
                { sum: 'n terms', formula: 'Sₙ = n/2[2a₁ + (n-1)d]', also: 'Sₙ = n/2(a₁ + aₙ)' }
            ],
            geometric: [
                { definition: 'constant ratio', notation: 'r', example: '3, 6, 12, 24... (r=2)' },
                { nth_term: 'formula', equation: 'aₙ = a₁ × rⁿ⁻¹' },
                { sum: 'n terms', formula: 'Sₙ = a₁(1-rⁿ)/(1-r)', r_not: '1' },
                { sum: 'infinite', formula: 'S∞ = a₁/(1-r)', condition: '|r| < 1', converges: true }
            ],
            binomial: [
                { theorem: 'binomial expansion', formula: '(a+b)ⁿ = Σ(nCr)aⁿ⁻ʳbʳ' },
                { coefficients: 'Pascal\'s triangle', pattern: 'each number sum of two above' },
                { general_term: 'formula', equation: 'Tᵣ₊₁ = (nCr)aⁿ⁻ʳbʳ', r: '0 to n' },
                { examples: '(a+b)²', expansion: 'a² + 2ab + b²', coefficients: '1, 2, 1' },
                { examples: '(a+b)³', expansion: 'a³ + 3a²b + 3ab² + b³', coefficients: '1, 3, 3, 1' }
            ]
        },

        complex_numbers: {
            basics: [
                { concept: 'imaginary unit', definition: 'i² = -1', i: '√(-1)' },
                { form: 'standard', format: 'z = a + bi', a: 'real part', b: 'imaginary part' },
                { concept: 'complex conjugate', notation: 'z̄', formula: 'if z = a+bi, then z̄ = a-bi' },
                { concept: 'modulus', notation: '|z|', formula: '|a+bi| = √(a²+b²)', represents: 'distance from origin' }
            ],
            operations: [
                { operation: 'addition', formula: '(a+bi) + (c+di) = (a+c) + (b+d)i' },
                { operation: 'subtraction', formula: '(a+bi) - (c+di) = (a-c) + (b-d)i' },
                { operation: 'multiplication', formula: '(a+bi)(c+di) = (ac-bd) + (ad+bc)i', use: 'FOIL' },
                { operation: 'division', method: 'multiply by conjugate', formula: '(a+bi)/(c+di) = (a+bi)(c-di)/(c²+d²)' }
            ],
            polar_form: [
                { form: 'polar', notation: 'z = r(cos θ + i sin θ)', r: 'modulus', θ: 'argument' },
                { form: 'exponential', notation: 'z = re^(iθ)', euler: 'e^(iθ) = cos θ + i sin θ' },
                { conversion: 'to polar', r: '√(a²+b²)', θ: 'tan⁻¹(b/a)', from: 'a+bi' },
                { multiplication: 'in polar', rule: 'multiply moduli, add arguments', "r₁r₂e^(i(θ₁+θ₂))": true },
                { division: 'in polar', rule: 'divide moduli, subtract arguments', "(r₁/r₂)e^(i(θ₁-θ₂))": true }
            ],
            roots: [
                { theorem: 'De Moivre\'s', formula: '(r(cos θ + i sin θ))ⁿ = rⁿ(cos nθ + i sin nθ)' },
                { nth_roots: 'number of roots', count: 'n distinct nth roots', distributed: 'evenly around circle' },
                { finding_roots: 'formula', equation: 'z_k = r^(1/n)[cos((θ+2πk)/n) + i sin((θ+2πk)/n)]', k: '0,1,...,n-1' }
            ]
        },

        financial_math: {
            interest: [
                { type: 'simple interest', formula: 'I = Prt', P: 'principal', r: 'rate', t: 'time' },
                { type: 'simple interest', total: 'A = P + I = P(1 + rt)' },
                { type: 'compound interest', formula: 'A = P(1 + r/n)^(nt)', n: 'compounds per year' },
                { type: 'compound interest', continuous: 'A = Pe^(rt)', e: 'Euler\'s number' },
                { comparison: 'compound vs simple', note: 'compound grows faster', interest_on: 'interest' }
            ],
            depreciation: [
                { method: 'straight line', formula: 'Value = Cost - (Cost × rate × time)', constant: 'decrease' },
                { method: 'reducing balance', formula: 'Value = Cost × (1 - r)^t', percentage: 'of current value' },
                { concept: 'book value', definition: 'current value after depreciation' },
                { concept: 'scrap value', definition: 'final value', residual: true }
            ],
            annuities: [
                { type: 'ordinary annuity', payment: 'end of period', future_value: 'FV = PMT × [(1+r)^n - 1]/r' },
                { type: 'annuity due', payment: 'beginning of period', multiply: 'by (1+r)' },
                { present_value: 'formula', equation: 'PV = PMT × [1 - (1+r)^(-n)]/r', today: 'worth' },
                { application: 'retirement savings', regular_deposits: true, grows: 'with interest' }
            ],
            loans: [
                { concept: 'amortization', definition: 'paying off loan gradually', equal_payments: true },
                { payment_formula: 'monthly payment', equation: 'PMT = P × [r(1+r)^n]/[(1+r)^n - 1]', P: 'loan amount' },
                { concept: 'principal', decreases: 'over time', paid_off: 'each payment' },
                { concept: 'interest', decreases: 'over time', based_on: 'remaining balance' }
            ]
        }
    };
}


// ========================================================================
// UPDATED MAIN DEMONSTRATION FUNCTION - ALL FOUR SUBJECTS
// ========================================================================

async function demonstrateExamPaperGenerator() {
    console.log('╔═══════════════════════════════════════════════════════════════════╗');
    console.log('║   MULTI-SUBJECT EXAMINATION GENERATOR - COMPLETE SOLUTION          ║');
    console.log('║   Biology • Chemistry • Physics • Mathematics                      ║');
    console.log('╚═══════════════════════════════════════════════════════════════════╝\n');

    const generator = new ChemistryExamPaperGenerator();
    const results = {
        biology: null,
        chemistry: null,
        physics: null,
        mathematics: null
    };

    // ==================== BIOLOGY EXAM ====================
    console.log('\n' + '='.repeat(80));
    console.log('SUBJECT 1: BIOLOGY EXAMINATION');
    console.log('='.repeat(80) + '\n');

    try {
        const biologyExamConfig = {
            examBoard: 'National Examination Council',
            schoolName: 'Excellence Secondary School',
            examType: 'Final Examination',
            academicYear: '2024/2025',
            term: 'First Term',
            subjectName: 'Biology',
            subjectCode: 'BIO-301',
            gradeLevel: 'Grade 11',
            examDate: 'December 15, 2024',
            duration: '2 hours 30 minutes',
            totalMarks: 100,
            topics: ['cell_biology', 'genetics', 'human_anatomy'],
            sectionConfiguration: {
                sectionA: { difficulty: 'easier', questionsCount: 5, marksPercentage: 35 },
                sectionB: { difficulty: 'similar', questionsCount: 5, marksPercentage: 35 },
                sectionC: { difficulty: 'harder', questionsCount: 5, marksPercentage: 30 }
            },
            paperSize: 'A4',
            lineSpacing: 'comfortable',
            answerSpaceLines: 5,
            instructions: [
                'Answer ALL questions in the spaces provided',
                'Write your Name, Class, and Index Number clearly',
                'All working must be shown for full credit',
                'Use black or blue pen only (pencil for diagrams)',
                'Scientific calculators are allowed'
            ],
            examinerName: 'Dr. Sarah Johnson',
            examinerTitle: 'Head of Biology Department',
            moderatorName: 'Prof. Michael Chen',
            includeMarkingScheme: true
        };

        const biologyExamPaper = generator.generateExaminationPaper(biologyExamConfig);
        const biologyProblemCheck = generator.checkAvailableProblemsInExam(biologyExamPaper);

        if (biologyProblemCheck.canGenerateDocument) {
            await generator.exportToDOCXFile(biologyExamPaper, 'biology_exam_paper.docx');
            await generator.exportToPDFFile(biologyExamPaper, 'biology_exam_paper.pdf');
            
            if (biologyExamPaper.markingScheme) {
                await generator.exportMarkingSchemeToDOCXFile(biologyExamPaper.markingScheme, 'biology_marking_scheme.docx');
                await generator.exportMarkingSchemeToPDFFile(biologyExamPaper.markingScheme, 'biology_marking_scheme.pdf');
            }
            
            await generator.generateComprehensiveDocumentForExam(biologyExamPaper, 'biology_comprehensive_solutions.docx');
            
            results.biology = biologyProblemCheck;
            console.log('\n✅ Biology exam files created successfully!\n');
        }
    } catch (error) {
        console.error('❌ Error creating biology files:', error.message);
    }

    // ==================== CHEMISTRY EXAM ====================
    console.log('\n' + '='.repeat(80));
    console.log('SUBJECT 2: CHEMISTRY EXAMINATION');
    console.log('='.repeat(80) + '\n');

    try {
        const chemistryExamConfig = {
            examBoard: 'National Examination Council',
            schoolName: 'Excellence Secondary School',
            examType: 'Final Examination',
            academicYear: '2024/2025',
            term: 'First Term',
            subjectName: 'Chemistry',
            subjectCode: 'CHEM-301',
            gradeLevel: 'Grade 11',
            examDate: 'December 18, 2024',
            duration: '2 hours 30 minutes',
            totalMarks: 100,
            topics: ['stoichiometry', 'organic_chemistry', 'acid_base_chemistry'],
            sectionConfiguration: {
                sectionA: { difficulty: 'easier', questionsCount: 5, marksPercentage: 35 },
                sectionB: { difficulty: 'similar', questionsCount: 5, marksPercentage: 35 },
                sectionC: { difficulty: 'harder', questionsCount: 5, marksPercentage: 30 }
            },
            paperSize: 'A4',
            lineSpacing: 'comfortable',
            answerSpaceLines: 5,
            instructions: [
                'Answer ALL questions in the spaces provided',
                'Write your Name, Class, and Index Number clearly',
                'All working must be shown for full credit',
                'Use black or blue pen only',
                'Scientific calculators are allowed',
                'Periodic table is provided'
            ],
            examinerName: 'Dr. James Williams',
            examinerTitle: 'Head of Chemistry Department',
            moderatorName: 'Prof. Lisa Anderson',
            includeMarkingScheme: true
        };

        const chemistryExamPaper = generator.generateExaminationPaper(chemistryExamConfig);
        const chemistryProblemCheck = generator.checkAvailableProblemsInExam(chemistryExamPaper);

        if (chemistryProblemCheck.canGenerateDocument) {
            await generator.exportToDOCXFile(chemistryExamPaper, 'chemistry_exam_paper.docx');
            await generator.exportToPDFFile(chemistryExamPaper, 'chemistry_exam_paper.pdf');
            
            if (chemistryExamPaper.markingScheme) {
                await generator.exportMarkingSchemeToDOCXFile(chemistryExamPaper.markingScheme, 'chemistry_marking_scheme.docx');
                await generator.exportMarkingSchemeToPDFFile(chemistryExamPaper.markingScheme, 'chemistry_marking_scheme.pdf');
            }
            
            await generator.generateComprehensiveDocumentForExam(chemistryExamPaper, 'chemistry_comprehensive_solutions.docx');
            
            results.chemistry = chemistryProblemCheck;
            console.log('\n✅ Chemistry exam files created successfully!\n');
        }
    } catch (error) {
        console.error('❌ Error creating chemistry files:', error.message);
    }

    // ==================== PHYSICS EXAM ====================
    console.log('\n' + '='.repeat(80));
    console.log('SUBJECT 3: PHYSICS EXAMINATION');
    console.log('='.repeat(80) + '\n');

    try {
        const physicsExamConfig = {
            examBoard: 'National Examination Council',
            schoolName: 'Excellence Science Academy',
            examType: 'Final Examination',
            academicYear: '2024/2025',
            term: 'First Term',
            subjectName: 'Physics',
            subjectCode: 'PHYS-301',
            gradeLevel: 'Grade 12',
            examDate: 'December 20, 2024',
            duration: '3 hours',
            totalMarks: 120,
            topics: ['mechanics', 'electricity', 'waves', 'optics'],
            sectionConfiguration: {
                sectionA: { difficulty: 'easier', questionsCount: 6, marksPercentage: 30 },
                sectionB: { difficulty: 'similar', questionsCount: 6, marksPercentage: 40 },
                sectionC: { difficulty: 'harder', questionsCount: 4, marksPercentage: 30 }
            },
            paperSize: 'A4',
            lineSpacing: 'comfortable',
            answerSpaceLines: 6,
            instructions: [
                'Answer ALL questions in the spaces provided',
                'Write your Name, Class, and Index Number clearly',
                'All working must be shown for full credit',
                'Use black or blue pen only',
                'Scientific calculators are allowed',
                'Physical constants: g = 10 m/s², c = 3.0 × 10⁸ m/s'
            ],
            examinerName: 'Dr. Robert Harrison',
            examinerTitle: 'Head of Physics Department',
            moderatorName: 'Prof. Emily Chen',
            includeMarkingScheme: true
        };

        const physicsExamPaper = generator.generateExaminationPaper(physicsExamConfig);
        const physicsProblemCheck = generator.checkAvailableProblemsInExam(physicsExamPaper);

        if (physicsProblemCheck.canGenerateDocument) {
            await generator.exportToDOCXFile(physicsExamPaper, 'physics_exam_paper.docx');
            await generator.exportToPDFFile(physicsExamPaper, 'physics_exam_paper.pdf');
            
            if (physicsExamPaper.markingScheme) {
                await generator.exportMarkingSchemeToDOCXFile(physicsExamPaper.markingScheme, 'physics_marking_scheme.docx');
                await generator.exportMarkingSchemeToPDFFile(physicsExamPaper.markingScheme, 'physics_marking_scheme.pdf');
            }
            
            await generator.generateComprehensiveDocumentForExam(physicsExamPaper, 'physics_comprehensive_solutions.docx');
            
            results.physics = physicsProblemCheck;
            console.log('\n✅ Physics exam files created successfully!\n');
        }
    } catch (error) {
        console.error('❌ Error creating physics files:', error.message);
    }

    // ==================== MATHEMATICS EXAM ====================
    console.log('\n' + '='.repeat(80));
    console.log('SUBJECT 4: MATHEMATICS EXAMINATION');
    console.log('='.repeat(80) + '\n');

    try {
        const mathematicsExamConfig = {
            examBoard: 'National Examination Council',
            schoolName: 'Excellence Mathematics Academy',
            examType: 'Final Examination',
            academicYear: '2024/2025',
            term: 'First Term',
            subjectName: 'Mathematics',
            subjectCode: 'MATH-401',
            gradeLevel: 'Grade 12',
            examDate: 'December 22, 2024',
            duration: '3 hours',
            totalMarks: 150,
            topics: ['vectors', 'geometry', 'trigonometry'],
            sectionConfiguration: {
                sectionA: { difficulty: 'easier', questionsCount: 6, marksPercentage: 30 },
                sectionB: { difficulty: 'similar', questionsCount: 6, marksPercentage: 40 },
                sectionC: { difficulty: 'harder', questionsCount: 6, marksPercentage: 30 }
            },
            paperSize: 'A4',
            lineSpacing: 'comfortable',
            answerSpaceLines: 7,
            instructions: [
                'Answer ALL questions in the spaces provided',
                'Write your Name, Class, and Index Number clearly',
                'All working must be shown for full credit',
                'Use black or blue pen only (pencil for graphs)',
                'Scientific calculators are allowed',
                'Show all steps clearly'
            ],
            examinerName: 'Prof. David Martinez',
            examinerTitle: 'Head of Mathematics Department',
            moderatorName: 'Dr. Lisa Wang',
            includeMarkingScheme: true
        };

        const mathematicsExamPaper = generator.generateExaminationPaper(mathematicsExamConfig);
        const mathematicsProblemCheck = generator.checkAvailableProblemsInExam(mathematicsExamPaper);

        if (mathematicsProblemCheck.canGenerateDocument) {
            await generator.exportToDOCXFile(mathematicsExamPaper, 'mathematics_exam_paper.docx');
            await generator.exportToPDFFile(mathematicsExamPaper, 'mathematics_exam_paper.pdf');
            
            if (mathematicsExamPaper.markingScheme) {
                await generator.exportMarkingSchemeToDOCXFile(mathematicsExamPaper.markingScheme, 'mathematics_marking_scheme.docx');
                await generator.exportMarkingSchemeToPDFFile(mathematicsExamPaper.markingScheme, 'mathematics_marking_scheme.pdf');
            }
            
            await generator.generateComprehensiveDocumentForExam(mathematicsExamPaper, 'mathematics_comprehensive_solutions.docx');
            
            results.mathematics = mathematicsProblemCheck;
            console.log('\n✅ Mathematics exam files created successfully!\n');
        }
    } catch (error) {
        console.error('❌ Error creating mathematics files:', error.message);
    }

    // ==================== FINAL SUMMARY ====================
    console.log('\n' + '═'.repeat(80));
    console.log('COMPLETE GENERATION SUMMARY - ALL SUBJECTS');
    console.log('═'.repeat(80) + '\n');

    if (results.biology) {
        console.log('📊 BIOLOGY:');
        console.log(`   • Total Questions: ${results.biology.totalProblems}`);
        console.log(`   • With Solvers: ${results.biology.withSolvers.length}`);
        console.log(`   • Without Solvers: ${results.biology.withoutSolvers.length}\n`);
    }

    if (results.chemistry) {
        console.log('📊 CHEMISTRY:');
        console.log(`   • Total Questions: ${results.chemistry.totalProblems}`);
        console.log(`   • With Solvers: ${results.chemistry.withSolvers.length}`);
        console.log(`   • Without Solvers: ${results.chemistry.withoutSolvers.length}\n`);
    }

    if (results.physics) {
        console.log('📊 PHYSICS:');
        console.log(`   • Total Questions: ${results.physics.totalProblems}`);
        console.log(`   • With Solvers: ${results.physics.withSolvers.length}`);
        console.log(`   • Without Solvers: ${results.physics.withoutSolvers.length}\n`);
    }

    if (results.mathematics) {
        console.log('📊 MATHEMATICS:');
        console.log(`   • Total Questions: ${results.mathematics.totalProblems}`);
        console.log(`   • With Solvers: ${results.mathematics.withSolvers.length}`);
        console.log(`   • Without Solvers: ${results.mathematics.withoutSolvers.length}\n`);
    }

    console.log('📁 Total Files Created: 20 files (4 subjects × 5 files each)');
    console.log('   • Exam papers (DOCX & PDF)');
    console.log('   • Marking schemes (DOCX & PDF)');
    console.log('   • Comprehensive solutions (DOCX)\n');

    console.log('═'.repeat(80) + '\n');
}

// ========================================================================
// RUN THE DEMONSTRATION
// ========================================================================
(async () => {
    try {
        console.log('\n🚀 Starting Complete Multi-Subject Exam Generator...\n');
        console.log('📚 Generating: Biology, Chemistry, Physics, Mathematics\n');
        
        await demonstrateExamPaperGenerator();
        
        console.log('\n✨ All operations completed successfully!\n');
        console.log('💡 Features:');
        console.log('   ✓ 4 subjects fully integrated');
        console.log('   ✓ Comprehensive solution documents');
        console.log('   ✓ Only questions in exam are solved');
        console.log('   ✓ Detailed step-by-step solutions');
        console.log('✓ Professional exam papers and marking schemes\n');
} catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    console.error(error.stack);
    process.exit(1);
}
})();
export { ChemistryExamPaperGenerator };
