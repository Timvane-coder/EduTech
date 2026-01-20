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
        this.initializeGradeLevelMappings(); // NEW
        this.checkMissingGenerators();
    }

    // ========================================================================
    // NEW: INITIALIZE GRADE LEVEL MAPPINGS FOR ALL SUBJECTS
    // ========================================================================

    initializeGradeLevelMappings() {
        this.gradeLevelMappings = {
            // ==================== BIOLOGY GRADE LEVELS ====================
            biology: {
                beginner: {
                    topics: ['cell_biology', 'plant_biology', 'human_anatomy'],
                    problemTypes: [
                        // Cell Biology - Beginner
                        'cell_structure', 'cell_membrane', 'organelles',
                        
                        // Plant Biology - Beginner
                        'plant_structure', 'plant_transport',
                        
                        // Human Anatomy - Beginner
                        'circulatory_system', 'respiratory_system', 'digestive_system',
                        'skeletal_system', 'muscular_system'
                    ]
                },
                intermediate: {
                    topics: ['cell_biology', 'genetics', 'ecology', 'microbiology', 'human_anatomy'],
                    problemTypes: [
                        // Cell Biology - Intermediate
                        'cell_division', 'cell_cycle', 'mitosis_meiosis', 'cell_transport',
                        'cellular_respiration', 'photosynthesis',
                        
                        // Genetics - Intermediate
                        'mendelian_genetics', 'punnett_squares', 'dna_structure',
                        'inheritance_patterns',
                        
                        // Ecology - Intermediate
                        'ecosystems', 'food_webs', 'energy_flow', 'biomes',
                        
                        // Microbiology - Intermediate
                        'bacteria', 'viruses', 'fungi', 'protists',
                        
                        // Human Anatomy - Intermediate
                        'nervous_system', 'endocrine_system', 'excretory_system'
                    ]
                },
                advanced: {
                    topics: ['genetics', 'evolution', 'ecology', 'homeostasis', 'immunity', 'energy_biology'],
                    problemTypes: [
                        // Genetics - Advanced
                        'dna_replication', 'transcription', 'translation', 'mutations',
                        'gene_expression',
                        
                        // Evolution - Advanced
                        'natural_selection', 'evolution_mechanisms', 'hardy_weinberg',
                        'speciation', 'adaptation',
                        
                        // Ecology - Advanced
                        'nutrient_cycles', 'population_dynamics', 'ecological_succession',
                        
                        // Homeostasis - Advanced
                        'homeostasis', 'thermoregulation', 'osmoregulation',
                        'blood_glucose', 'feedback_mechanisms',
                        
                        // Immunology - Advanced
                        'immune_system', 'pathogens', 'vaccines', 'antibodies',
                        'immune_response',
                        
                        // Energy - Advanced
                        'atp', 'glycolysis', 'krebs_cycle', 'electron_transport',
                        'fermentation', 'light_reactions', 'calvin_cycle'
                    ]
                },
                professional: {
                    topics: ['genetics', 'evolution', 'taxonomy', 'reproduction', 'biotechnology'],
                    problemTypes: [
                        // Genetics - Professional
                        'gene_expression', 'mutations', 'genetic_engineering',
                        
                        // Evolution - Professional
                        'hardy_weinberg', 'speciation', 'evidence_evolution',
                        
                        // Taxonomy - Professional
                        'classification_systems', 'phylogeny', 'domains_kingdoms',
                        'binomial_nomenclature',
                        
                        // Reproduction - Professional
                        'sexual_reproduction', 'embryonic_development',
                        'human_reproduction',
                        
                        // Microbiology - Professional
                        'microbial_growth'
                    ]
                }
            },

            // ==================== CHEMISTRY GRADE LEVELS ====================
            chemistry: {
                beginner: {
                    topics: ['stoichiometry', 'atomic_structure', 'states_of_matter'],
                    problemTypes: [
                        // Stoichiometry - Beginner
                        'mole_calculations', 'equation_balancing',
                        
                        // Atomic Structure - Beginner
                        'atomic_structure', 'electron_configuration', 'periodic_trends',
                        
                        // States of Matter - Beginner
                        'states_of_matter', 'phase_changes', 'gas_laws'
                    ]
                },
                intermediate: {
                    topics: ['stoichiometry', 'organic_chemistry', 'acid_base_chemistry', 'bonding'],
                    problemTypes: [
                        // Stoichiometry - Intermediate
                        'mass_mass_stoichiometry', 'limiting_reagent', 'percent_yield',
                        'gas_stoichiometry', 'solution_stoichiometry',
                        
                        // Organic Chemistry - Intermediate
                        'alkanes', 'alkenes', 'alkynes', 'functional_groups',
                        'nomenclature', 'isomerism',
                        
                        // Acid-Base - Intermediate
                        'acid_base_neutralization', 'ph_calculations', 'titrations',
                        
                        // Bonding - Intermediate
                        'bonding', 'lewis_structures', 'vsepr_theory',
                        'molecular_geometry', 'bond_polarity'
                    ]
                },
                advanced: {
                    topics: ['redox_chemistry', 'equilibrium', 'organic_chemistry', 'thermodynamics'],
                    problemTypes: [
                        // Redox - Advanced
                        'redox_stoichiometry', 'oxidation_states', 'half_reactions',
                        'electrochemistry', 'galvanic_cells', 'electrolysis',
                        
                        // Equilibrium - Advanced
                        'equilibrium_constants', 'le_chatelier', 'solubility_equilibria',
                        'gas_equilibrium',
                        
                        // Organic - Advanced
                        'aromatic_compounds', 'organic_reactions', 'reaction_mechanisms',
                        'polymers',
                        
                        // Thermodynamics - Advanced
                        'thermochemical_stoichiometry', 'entropy', 'gibbs_free_energy',
                        'spontaneity'
                    ]
                },
                professional: {
                    topics: ['kinetics', 'equilibrium', 'organic_chemistry', 'nuclear_chemistry'],
                    problemTypes: [
                        // Kinetics - Professional
                        'reaction_kinetics', 'rate_laws', 'activation_energy',
                        
                        // Equilibrium - Professional
                        'complex_ions', 'polyprotic_acids', 'buffers',
                        
                        // Organic - Professional
                        'reaction_mechanisms', 'polymers',
                        
                        // Nuclear - Professional
                        'radioactive_decay', 'nuclear_equations', 'half_life',
                        'nuclear_reactions',
                        
                        // Advanced Bonding
                        'hybridization', 'intermolecular_forces'
                    ]
                }
            },

            // ==================== PHYSICS GRADE LEVELS ====================
            physics: {
                beginner: {
                    topics: ['mechanics', 'waves', 'thermodynamics'],
                    problemTypes: [
                        // Mechanics - Beginner
                        'kinematics_1d', 'newtons_laws', 'work_energy',
                        
                        // Waves - Beginner
                        'wave_properties', 'sound_waves',
                        
                        // Thermodynamics - Beginner
                        'temperature_heat', 'thermal_expansion'
                    ]
                },
                intermediate: {
                    topics: ['mechanics', 'electricity', 'waves', 'optics', 'thermodynamics'],
                    problemTypes: [
                        // Mechanics - Intermediate
                        'kinematics_2d', 'projectile_motion', 'friction',
                        'circular_motion', 'momentum_collisions',
                        
                        // Electricity - Intermediate
                        'electrostatics', 'electric_fields', 'current_resistance',
                        'dc_circuits',
                        
                        // Waves - Intermediate
                        'wave_interference', 'standing_waves', 'resonance',
                        
                        // Optics - Intermediate
                        'reflection', 'refraction', 'lenses', 'mirrors',
                        
                        // Thermodynamics - Intermediate
                        'calorimetry', 'heat_transfer', 'gas_laws_physics'
                    ]
                },
                advanced: {
                    topics: ['mechanics', 'electricity', 'optics', 'thermodynamics', 'waves'],
                    problemTypes: [
                        // Mechanics - Advanced
                        'rotational_motion', 'gravitation',
                        
                        // Electricity - Advanced
                        'electric_potential', 'capacitance', 'magnetic_fields',
                        'electromagnetic_induction', 'ac_circuits',
                        
                        // Optics - Advanced
                        'optical_instruments', 'wave_optics', 'diffraction',
                        
                        // Thermodynamics - Advanced
                        'thermodynamic_processes', 'heat_engines',
                        
                        // Waves - Advanced
                        'doppler_effect'
                    ]
                },
                professional: {
                    topics: ['modern_physics', 'relativity', 'nuclear_physics'],
                    problemTypes: [
                        // Modern Physics - Professional
                        'photoelectric_effect', 'compton_scattering', 'atomic_spectra',
                        'bohr_model', 'quantum_mechanics', 'wave_particle_duality',
                        
                        // Relativity - Professional
                        'time_dilation', 'length_contraction', 'relativistic_momentum',
                        'mass_energy_equivalence', 'lorentz_transformations',
                        
                        // Nuclear Physics - Professional
                        'radioactive_decay_physics', 'nuclear_reactions_physics',
                        'binding_energy', 'fission_fusion', 'radiation_detection'
                    ]
                }
            },

            // ==================== MATHEMATICS GRADE LEVELS ====================
            mathematics: {
                beginner: {
                    topics: ['number_theory', 'algebra', 'geometry'],
                    problemTypes: [
                        // Number Theory - Beginner
                        'number_properties', 'prime_numbers', 'hcf_lcm', 'divisibility',
                        
                        // Algebra - Beginner
                        'algebraic_expressions', 'linear_equations',
                        
                        // Geometry - Beginner
                        'angles', 'triangles', 'quadrilaterals', 'circles'
                    ]
                },
                intermediate: {
                    topics: ['algebra', 'geometry', 'trigonometry', 'functions'],
                    problemTypes: [
                        // Algebra - Intermediate
                        'quadratic_equations', 'simultaneous_equations', 'polynomials',
                        'rational_expressions',
                        
                        // Geometry - Intermediate
                        'similarity_congruence', 'coordinate_geometry',
                        'surface_area_volume',
                        
                        // Trigonometry - Intermediate
                        'trig_ratios', 'special_angles', 'sine_cosine_rules',
                        
                        // Functions - Intermediate
                        'function_basics', 'domain_range', 'function_types'
                    ]
                },
                advanced: {
                    topics: ['algebra', 'trigonometry', 'geometry', 'functions', 'sequences'],
                    problemTypes: [
                        // Algebra - Advanced
                        'exponential_logarithmic',
                        
                        // Trigonometry - Advanced
                        'trig_identities', 'radian_measure', 'trig_equations',
                        'trig_graphs',
                        
                        // Geometry - Advanced
                        'solid_geometry',
                        
                        // Functions - Advanced
                        'transformations', 'inverse_functions', 'piecewise_functions',
                        
                        // Sequences - Advanced
                        'arithmetic_sequences', 'geometric_sequences', 'series_sums'
                    ]
                },
                professional: {
                    topics: ['vectors', 'matrices', 'sequences', 'calculus'],
                    problemTypes: [
                        // Vectors - Professional
                        'vector_basics', 'vector_operations', 'dot_product',
                        'cross_product', 'vector_equations',
                        
                        // Matrices - Professional
                        'matrix_operations', 'determinants', 'inverse_matrices',
                        'matrix_transformations',
                        
                        // Sequences - Professional
                        'binomial_theorem',
                        
                        // Advanced Number Theory
                        'modular_arithmetic', 'rational_irrational'
                    ]
                }
            }
        };
    }

    // ========================================================================
    // NEW: GET APPROPRIATE PROBLEM TYPES FOR GRADE LEVEL
    // ========================================================================

    getGradeLevelInfo(gradeLevel) {
        // Map common grade level formats to our system
        const gradeLevelMap = {
            // Beginner levels
            'Grade 6': 'beginner',
            'Grade 7': 'beginner',
            'Grade 8': 'beginner',
            'Year 6': 'beginner',
            'Year 7': 'beginner',
            'Year 8': 'beginner',
            'Form 1': 'beginner',
            'Form 2': 'beginner',
            'beginner': 'beginner',
            'Beginner': 'beginner',
            
            // Intermediate levels
            'Grade 9': 'intermediate',
            'Grade 10': 'intermediate',
            'Year 9': 'intermediate',
            'Year 10': 'intermediate',
            'Form 3': 'intermediate',
            'Form 4': 'intermediate',
            'O-Level': 'intermediate',
            'intermediate': 'intermediate',
            'Intermediate': 'intermediate',
            
            // Advanced levels
            'Grade 11': 'advanced',
            'Grade 12': 'advanced',
            'Year 11': 'advanced',
            'Year 12': 'advanced',
            'Form 5': 'advanced',
            'Form 6': 'advanced',
            'A-Level': 'advanced',
            'AS-Level': 'advanced',
            'advanced': 'advanced',
            'Advanced': 'advanced',
            
            // Professional levels
            'College': 'professional',
            'University': 'professional',
            'Undergraduate': 'professional',
            'AP': 'professional',
            'IB': 'professional',
            'professional': 'professional',
            'Professional': 'professional'
        };

        return gradeLevelMap[gradeLevel] || 'intermediate'; // Default to intermediate
    }

    getAppropriateProblemTypesForGrade(subject, gradeLevel) {
        const level = this.getGradeLevelInfo(gradeLevel);
        const subjectKey = subject.toLowerCase();
        
        console.log(`\n📚 Grade Level Filtering:`);
        console.log(`   Subject: ${subject}`);
        console.log(`   Input Grade: ${gradeLevel}`);
        console.log(`   Mapped Level: ${level}`);
        
        if (!this.gradeLevelMappings[subjectKey]) {
            console.warn(`   ⚠ No grade mappings for subject: ${subject}`);
            return null;
        }

        const levelMapping = this.gradeLevelMappings[subjectKey][level];
        
        if (!levelMapping) {
            console.warn(`   ⚠ No mappings for level: ${level}`);
            return null;
        }

        console.log(`   ✓ Topics available: ${levelMapping.topics.length}`);
        console.log(`   ✓ Problem types available: ${levelMapping.problemTypes.length}`);
        
        return {
            level: level,
            topics: levelMapping.topics,
            problemTypes: levelMapping.problemTypes
        };
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

// ========================================================================
    // UPDATED: generateSectionQuestions with Grade Level Support
    // ========================================================================

    generateSectionQuestions(config) {
        const { sectionLabel, topics, difficulty, questionsCount, targetMarks, usedQuestionTexts, gradeLevel, subject } = config;
        
        console.log(`\n📋 Generating Section ${sectionLabel}:`);
        console.log(`   Subject: ${subject || 'Unknown'}`);
        console.log(`   Grade Level: ${gradeLevel || 'Not specified'}`);
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
            
            // Pass grade level and subject to problem type selection
            const problemTypes = this.selectProblemTypesFromTopic(topic, gradeLevel, subject);
            
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
                            
                            questions.push({
                                number: questionNumber,
                                topic: this.formatTopicName(topic),
                                difficulty: difficulty,
                                problemText: problem.problem,
                                scenario: problem.scenario,
                                marks: questionMarks,
                                parameters: {
                                    ...problem.parameters,
                                    type: problem.type || problemType
                                },
                                type: problem.type || problemType,
                                realWorldContext: problem.realWorldContext,
                                subparts: problem.subparts || [],
                                helper: problem.helper || '',
                                diagramInfo: diagramInfo,
                                answerSpaceType: this.determineAnswerSpaceType(problem, questionMarks),
                                gradeLevel: gradeLevel // Store grade level with question
                            });

                            console.log(`      ✅ Added question ${questionNumber} (type: ${problem.type || problemType}, grade: ${gradeLevel})`);
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

    // ========================================================================
    // UPDATED: generateQuestionsForExam with Grade Level Support
    // ========================================================================

    generateQuestionsForExam(config) {
        const { topics, sectionConfiguration, totalMarks, gradeLevel, subjectName } = config;
        const sections = [];
        const sectionLabels = Object.keys(sectionConfiguration);
        const usedQuestionTexts = new Set();

        // Determine subject from subject name
        let subject = 'biology'; // default
        if (subjectName.toLowerCase().includes('chemistry')) subject = 'chemistry';
        else if (subjectName.toLowerCase().includes('physics')) subject = 'physics';
        else if (subjectName.toLowerCase().includes('math')) subject = 'mathematics';
        else if (subjectName.toLowerCase().includes('biology')) subject = 'biology';

        console.log(`\n${'='.repeat(80)}`);
        console.log(`GENERATING EXAM FOR: ${subjectName.toUpperCase()}`);
        console.log(`GRADE LEVEL: ${gradeLevel}`);
        console.log(`DIFFICULTY LEVEL: ${this.getGradeLevelInfo(gradeLevel)}`);
        console.log(`${'='.repeat(80)}\n`);

        // Filter topics based on grade level
        const gradeInfo = this.getAppropriateProblemTypesForGrade(subject, gradeLevel);
        let filteredTopics = topics;
        
        if (gradeInfo) {
            console.log(`📚 Grade-appropriate topics for ${gradeLevel}:`);
            console.log(`   Available: ${gradeInfo.topics.join(', ')}`);
            
            // Filter topics to only include those appropriate for the grade
            filteredTopics = topics.filter(topic => gradeInfo.topics.includes(topic));
            
            if (filteredTopics.length === 0) {
                console.warn(`   ⚠ No topics match grade ${gradeLevel}, using all requested topics`);
                filteredTopics = topics;
            } else {
                console.log(`   ✓ Using: ${filteredTopics.join(', ')}\n`);
            }
        }

        sectionLabels.forEach(sectionKey => {
            const sectionConfig = sectionConfiguration[sectionKey];
            const sectionLabel = sectionKey.replace('section', '');
            const sectionMarks = Math.round((totalMarks * sectionConfig.marksPercentage) / 100);

            const sectionQuestions = this.generateSectionQuestions({
                sectionLabel,
                topics: filteredTopics,
                difficulty: sectionConfig.difficulty,
                questionsCount: sectionConfig.questionsCount,
                targetMarks: sectionMarks,
                usedQuestionTexts,
                gradeLevel: gradeLevel, // Pass grade level
                subject: subject // Pass subject
            });

            sections.push({
                label: sectionLabel,
                title: this.getSectionTitle(sectionLabel, sectionConfig.difficulty),
                instructions: this.getSectionInstructions(sectionLabel, sectionConfig),
                questions: sectionQuestions.questions,
                totalMarks: sectionQuestions.totalMarks,
                gradeLevel: gradeLevel // Store grade level
            });
        });

        return { 
            sections, 
            totalQuestions: sections.reduce((sum, sec) => sum + sec.questions.length, 0),
            totalMarks: sections.reduce((sum, sec) => sum + sec.totalMarks, 0),
            gradeLevel: gradeLevel,
            gradeDifficulty: this.getGradeLevelInfo(gradeLevel)
        };
    }

    // ========================================================================
    // UPDATED: generateExaminationPaper to pass grade level
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
            gradeLevel = 'Grade 11', // NOW USED
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
                totalMarks,
                gradeLevel, // Pass grade level
                subjectName // Pass subject name
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
                    gradeDifficulty: questions.gradeDifficulty, // Include difficulty level
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


    selectProblemTypesFromTopic(topic, gradeLevel = null, subject = null) {
    const topicMapping = {
        // ==================== BIOLOGY TOPICS ====================
        'cell_biology': [
            'cell_structure', 'cell_structure_diagram',
            'cell_membrane', 'cell_membrane_diagram',
            'membrane_structure', 'membrane_structure_diagram',
            'organelles', 'organelles_diagram',
            'cell_division', 'cell_division_diagram',
            'cell_cycle', 'cell_cycle_diagram',
            'mitosis_meiosis', 'mitosis_meiosis_diagram',
            'cell_transport', 'cell_transport_diagram',
            'cellular_respiration', 'cellular_respiration_diagram',
            'photosynthesis', 'photosynthesis_diagram'
        ],
        'genetics': [
            'mendelian_genetics', 'mendelian_genetics_diagram',
            'punnett_squares', 'punnett_squares_diagram',
            'dna_structure', 'dna_structure_diagram',
            'dna_replication', 'dna_replication_diagram',
            'transcription', 'transcription_diagram',
            'translation', 'translation_diagram',
            'mutations', 'mutations_diagram',
            'gene_expression', 'gene_expression_diagram',
            'inheritance_patterns', 'inheritance_patterns_diagram'
        ],
        'plant_biology': [
            'plant_structure', 'plant_structure_diagram',
            'plant_transport', 'plant_transport_diagram',
            'plant_reproduction', 'plant_reproduction_diagram',
            'plant_hormones', 'plant_hormones_diagram',
            'tropisms', 'tropisms_diagram',
            'plant_anatomy', 'plant_anatomy_diagram'
        ],
        'ecology': [
            'ecosystems', 'ecosystems_diagram',
            'food_webs', 'food_webs_diagram',
            'energy_flow', 'energy_flow_diagram',
            'nutrient_cycles', 'nutrient_cycles_diagram',
            'population_dynamics', 'population_dynamics_diagram',
            'biomes', 'biomes_diagram',
            'symbiosis', 'symbiosis_diagram',
            'ecological_succession', 'ecological_succession_diagram'
        ],
        'human_anatomy': [
            'circulatory_system', 'circulatory_system_diagram',
            'respiratory_system', 'respiratory_system_diagram',
            'digestive_system', 'digestive_system_diagram',
            'nervous_system', 'nervous_system_diagram',
            'endocrine_system', 'endocrine_system_diagram',
            'skeletal_system', 'skeletal_system_diagram',
            'muscular_system', 'muscular_system_diagram',
            'excretory_system', 'excretory_system_diagram'
        ],
        'microbiology': [
            'bacteria', 'bacteria_diagram',
            'viruses', 'viruses_diagram',
            'fungi', 'fungi_diagram',
            'protists', 'protists_diagram',
            'microbial_growth', 'microbial_growth_diagram'
        ],
        'immunity': [
            'immune_system', 'immune_system_diagram',
            'pathogens', 'pathogens_diagram',
            'vaccines', 'vaccines_diagram',
            'antibodies', 'antibodies_diagram',
            'diseases', 'diseases_diagram',
            'immune_response', 'immune_response_diagram'
        ],
        'homeostasis': [
            'homeostasis', 'homeostasis_diagram',
            'thermoregulation', 'thermoregulation_diagram',
            'osmoregulation', 'osmoregulation_diagram',
            'blood_glucose', 'blood_glucose_diagram',
            'feedback_mechanisms', 'feedback_mechanisms_diagram'
        ],
        'evolution': [
            'natural_selection', 'natural_selection_diagram',
            'evolution_mechanisms', 'evolution_mechanisms_diagram',
            'hardy_weinberg', 'hardy_weinberg_diagram',
            'speciation', 'speciation_diagram',
            'evidence_evolution', 'evidence_evolution_diagram',
            'adaptation', 'adaptation_diagram'
        ],
        'taxonomy': [
            'classification_systems', 'classification_systems_diagram',
            'phylogeny', 'phylogeny_diagram',
            'domains_kingdoms', 'domains_kingdoms_diagram',
            'binomial_nomenclature', 'binomial_nomenclature_diagram'
        ],
        'reproduction': [
            'asexual_reproduction', 'asexual_reproduction_diagram',
            'sexual_reproduction', 'sexual_reproduction_diagram',
            'embryonic_development', 'embryonic_development_diagram',
            'human_reproduction', 'human_reproduction_diagram'
        ],
        'energy_biology': [
            'atp', 'atp_diagram',
            'glycolysis', 'glycolysis_diagram',
            'krebs_cycle', 'krebs_cycle_diagram',
            'electron_transport', 'electron_transport_diagram',
            'fermentation', 'fermentation_diagram',
            'light_reactions', 'light_reactions_diagram',
            'calvin_cycle', 'calvin_cycle_diagram'
        ],

        // ==================== CHEMISTRY TOPICS ====================
        'stoichiometry': [
            'mole_calculations', 'mole_calculations_diagram',
            'equation_balancing', 'equation_balancing_diagram',
            'mass_mass_stoichiometry', 'mass_mass_stoichiometry_diagram',
            'limiting_reagent', 'limiting_reagent_diagram',
            'percent_yield', 'percent_yield_diagram',
            'gas_stoichiometry', 'gas_stoichiometry_diagram',
            'solution_stoichiometry', 'solution_stoichiometry_diagram',
            'thermochemical_stoichiometry', 'thermochemical_stoichiometry_diagram',
            'empirical_formula', 'empirical_formula_diagram'
        ],
        'organic_chemistry': [
            'alkanes', 'alkanes_diagram',
            'alkenes', 'alkenes_diagram',
            'alkynes', 'alkynes_diagram',
            'aromatic_compounds', 'aromatic_compounds_diagram',
            'functional_groups', 'functional_groups_diagram',
            'isomerism', 'isomerism_diagram',
            'organic_reactions', 'organic_reactions_diagram',
            'nomenclature', 'nomenclature_diagram',
            'reaction_mechanisms', 'reaction_mechanisms_diagram',
            'polymers', 'polymers_diagram'
        ],
        'redox_chemistry': [
            'redox_stoichiometry', 'redox_stoichiometry_diagram',
            'oxidation_states', 'oxidation_states_diagram',
            'half_reactions', 'half_reactions_diagram',
            'electrochemistry', 'electrochemistry_diagram',
            'galvanic_cells', 'galvanic_cells_diagram',
            'electrolysis', 'electrolysis_diagram'
        ],
        'acid_base_chemistry': [
            'acid_base_neutralization', 'acid_base_neutralization_diagram',
            'ph_calculations', 'ph_calculations_diagram',
            'buffers', 'buffers_diagram',
            'titrations', 'titrations_diagram',
            'polyprotic_acids', 'polyprotic_acids_diagram'
        ],
        'equilibrium': [
            'equilibrium_constants', 'equilibrium_constants_diagram',
            'le_chatelier', 'le_chatelier_diagram',
            'solubility_equilibria', 'solubility_equilibria_diagram',
            'complex_ions', 'complex_ions_diagram',
            'gas_equilibrium', 'gas_equilibrium_diagram'
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
            'periodic_trends', 'periodic_trends_diagram'
        ],
        'bonding': [
            'bonding', 'bonding_diagram',
            'lewis_structures', 'lewis_structures_diagram',
            'vsepr_theory', 'vsepr_theory_diagram',
            'molecular_geometry', 'molecular_geometry_diagram',
            'bond_polarity', 'bond_polarity_diagram',
            'hybridization', 'hybridization_diagram',
            'intermolecular_forces', 'intermolecular_forces_diagram'
        ],
        'states_of_matter': [
            'states_of_matter', 'states_of_matter_diagram',
            'phase_changes', 'phase_changes_diagram',
            'gas_laws', 'gas_laws_diagram',
            'kinetic_molecular_theory', 'kinetic_molecular_theory_diagram'
        ],

        // ==================== PHYSICS TOPICS ====================
        'mechanics': [
            'kinematics_1d', 'kinematics_1d_diagram',
            'kinematics_2d', 'kinematics_2d_diagram',
            'projectile_motion', 'projectile_motion_diagram',
            'newtons_laws', 'newtons_laws_diagram',
            'friction', 'friction_diagram',
            'circular_motion', 'circular_motion_diagram',
            'work_energy', 'work_energy_diagram',
            'momentum_collisions', 'momentum_collisions_diagram',
            'rotational_motion', 'rotational_motion_diagram',
            'gravitation', 'gravitation_diagram'
        ],
        'waves': [
            'wave_properties', 'wave_properties_diagram',
            'wave_interference', 'wave_interference_diagram',
            'sound_waves', 'sound_waves_diagram',
            'doppler_effect', 'doppler_effect_diagram',
            'standing_waves', 'standing_waves_diagram',
            'resonance', 'resonance_diagram'
        ],
        'thermodynamics': [
            'temperature_heat', 'temperature_heat_diagram',
            'thermal_expansion', 'thermal_expansion_diagram',
            'calorimetry', 'calorimetry_diagram',
            'heat_transfer', 'heat_transfer_diagram',
            'gas_laws_physics', 'gas_laws_physics_diagram',
            'thermodynamic_processes', 'thermodynamic_processes_diagram',
            'heat_engines', 'heat_engines_diagram'
        ],
        'electricity': [
            'electrostatics', 'electrostatics_diagram',
            'electric_fields', 'electric_fields_diagram',
            'electric_potential', 'electric_potential_diagram',
            'capacitance', 'capacitance_diagram',
            'current_resistance', 'current_resistance_diagram',
            'dc_circuits', 'dc_circuits_diagram',
            'magnetic_fields', 'magnetic_fields_diagram',
            'electromagnetic_induction', 'electromagnetic_induction_diagram',
            'ac_circuits', 'ac_circuits_diagram'
        ],
        'optics': [
            'reflection', 'reflection_diagram',
            'refraction', 'refraction_diagram',
            'lenses', 'lenses_diagram',
            'mirrors', 'mirrors_diagram',
            'optical_instruments', 'optical_instruments_diagram',
            'wave_optics', 'wave_optics_diagram',
            'diffraction', 'diffraction_diagram'
        ],
        'modern_physics': [
            'photoelectric_effect', 'photoelectric_effect_diagram',
            'compton_scattering', 'compton_scattering_diagram',
            'atomic_spectra', 'atomic_spectra_diagram',
            'bohr_model', 'bohr_model_diagram',
            'quantum_mechanics', 'quantum_mechanics_diagram',
            'wave_particle_duality', 'wave_particle_duality_diagram'
        ],
        'relativity': [
            'time_dilation', 'time_dilation_diagram',
            'length_contraction', 'length_contraction_diagram',
            'relativistic_momentum', 'relativistic_momentum_diagram',
            'mass_energy_equivalence', 'mass_energy_equivalence_diagram',
            'lorentz_transformations', 'lorentz_transformations_diagram'
        ],
        'nuclear_physics': [
            'radioactive_decay_physics', 'radioactive_decay_physics_diagram',
            'nuclear_reactions_physics', 'nuclear_reactions_physics_diagram',
            'binding_energy', 'binding_energy_diagram',
            'fission_fusion', 'fission_fusion_diagram',
            'radiation_detection', 'radiation_detection_diagram'
        ],

        // ==================== MATHEMATICS TOPICS ====================
        'number_theory': [
            'number_properties', 'prime_numbers', 'hcf_lcm',
            'modular_arithmetic', 'divisibility', 'rational_irrational'
        ],
        'algebra': [
            'algebraic_expressions', 'linear_equations', 'quadratic_equations',
            'simultaneous_equations', 'polynomials', 'rational_expressions',
            'exponential_logarithmic'
        ],
        'functions': [
            'function_basics', 'domain_range', 'function_types',
            'transformations', 'inverse_functions', 'piecewise_functions'
        ],
        'geometry': [
            'angles', 'triangles', 'similarity_congruence',
            'quadrilaterals', 'circles', 'coordinate_geometry',
            'solid_geometry', 'surface_area_volume'
        ],
        'trigonometry': [
            'trig_ratios', 'special_angles', 'trig_identities',
            'sine_cosine_rules', 'radian_measure', 'trig_equations',
            'trig_graphs'
        ],
        'vectors': [
            'vector_basics', 'vector_operations', 'dot_product',
            'cross_product', 'vector_equations'
        ],
        'matrices': [
            'matrix_operations', 'determinants', 'inverse_matrices',
            'matrix_transformations'
        ],
        'sequences': [
            'arithmetic_sequences', 'geometric_sequences', 'series_sums',
            'binomial_theorem'
        ]
    };

    let problemTypes = topicMapping[topic] || ['mole_calculations'];
    
    // Apply grade level filtering if provided
    if (gradeLevel && subject) {
        const gradeInfo = this.getAppropriateProblemTypesForGrade(subject, gradeLevel);
        
        if (gradeInfo) {
            // Filter problem types to only include those appropriate for the grade level
            const allowedTypes = gradeInfo.problemTypes;
            
            problemTypes = problemTypes.filter(type => {
                // Remove _diagram suffix for comparison
                const baseType = type.replace(/_diagram$/, '');
                return allowedTypes.includes(baseType);
            });
            
            console.log(`   🎯 Filtered to ${problemTypes.length} problem types for ${gradeLevel}`);
            
            // If no problems match the grade level, use all problems but log warning
            if (problemTypes.length === 0) {
                console.warn(`   ⚠ No problems match grade ${gradeLevel} for topic ${topic}, using all available`);
                problemTypes = topicMapping[topic] || ['mole_calculations'];
            }
        }
    }
    
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

    // ========================================================================
    // UPDATED: displayExamPaperPreview to show grade level info
    // ========================================================================

    displayExamPaperPreview(examPaper) {
        console.log('\n' + '='.repeat(80));
        console.log('EXAMINATION PAPER PREVIEW');
        console.log('='.repeat(80) + '\n');
        
        console.log(`📋 Exam: ${examPaper.metadata.examType}`);
        console.log(`📚 Subject: ${examPaper.metadata.subjectName} (${examPaper.metadata.subjectCode})`);
        console.log(`🎓 Grade: ${examPaper.metadata.gradeLevel}`);
        console.log(`📊 Difficulty Level: ${examPaper.metadata.gradeDifficulty || 'Not specified'}`);
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
            console.log(`  Grade Level: ${section.gradeLevel || examPaper.metadata.gradeLevel}`);
            
            // Show diagram count
            const diagramCount = section.questions.filter(q => q.diagramInfo && q.diagramInfo.success).length;
            if (diagramCount > 0) {
                console.log(`  📊 Questions with diagrams: ${diagramCount}`);
            }
            
            // Show question types for this section
            const questionTypes = [...new Set(section.questions.map(q => q.type))];
            console.log(`  🎯 Problem types: ${questionTypes.slice(0, 3).join(', ')}${questionTypes.length > 3 ? '...' : ''}`);
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

        // Plants (Botany) Generators
        plant_structure: this.generateRelatedPlantStructure.bind(this),
        plant_transport: this.generateRelatedPlantTransport.bind(this),
        plant_reproduction: this.generateRelatedPlantReproduction.bind(this),
        plant_hormones: this.generateRelatedPlantHormones.bind(this),
        tropisms: this.generateRelatedTropisms.bind(this),
        plant_anatomy: this.generateRelatedPlantAnatomy.bind(this),       
        

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

