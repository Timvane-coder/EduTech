// ============================================================================
// subjectOverrides.js
//
// Architecture: Option 2 — Base Pages + Subject Overrides (Layered Registry)
//
// ┌─────────────────────────────────────────────────────────────────────┐
// │  SUBJECT OVERRIDES Per-subject content driven entirely from         │
// │                    ExaminationPaperRegistry.subjectProblemTypes:    │
// │                    problemTypeIds  ← pt.id per section              │
// │                    questionFormats ← pt.label per section           │
// │                    componentOptionsAdditions ← pt.componentHints    │
// │                    diagramRequired ← pt.diagramRequired (any true)  │
// │                    insets          ← subject specialist insets       │
// │                    defaultOptions  ← subject patches                │
// ├─────────────────────────────────────────────────────────────────────┤
// │  RESOLVER          getPage(subject, pageKey) deep-merges base +     │
// │                    override at call time, then stamps resolved      │
// │                    problemTypes array onto the page                 │
// └─────────────────────────────────────────────────────────────────────┘
//
// Depends on:  examinationPaperRegistry.js
//              (BasePages, ExaminationPaperRegistry)
// ============================================================================

import { ExaminationPaperRegistry } from './examinationPaperRegistry.js';
import {BasePages} from './BasePages.js';

// ============================================================================
// SECTION 1 — SUBJECT OVERRIDES
//
// For every question section the following fields are sourced directly from
// ExaminationPaperRegistry.subjectProblemTypes:
//
//   problemTypeIds            – pt.id   for every pt whose typicalSection
//                               matches this page key (replaces free-text
//                               examples)
//   questionFormatsAdditions  – pt.label for the same filtered set
//   componentOptionsAdditions – deduplicated union of pt.componentHints
//                               across all problem types for this section
//   diagramRequired           – true if ANY problem type in this section
//                               has diagramRequired === true
//   insets                    – subject-specific reference materials that
//                               support every problem type in the subject
//
// Cover page, closing page, and formattingConfig are not derived from
// problem types and remain authored directly.
// ============================================================================

const SubjectOverrides = {

    // ── Chemistry ─────────────────────────────────────────────────────────
    //
    // subjectProblemTypes → chemistry:
    //
    //   questionSectionAPage  (typicalSection === 'questionSectionAPage'):
    //     alkanes                  diagramRequired: true
    //     functional_groups_diagram diagramRequired: true
    //     electron_configuration   diagramRequired: false
    //     atomic_structure_diagram diagramRequired: true
    //
    //   questionSectionBPage  (typicalSection === 'questionSectionBPage'):
    //     mole_calculations        diagramRequired: false
    //     galvanic_cells           diagramRequired: true
    //     electrolysis_diagram     diagramRequired: true
    //     equilibrium_constants    diagramRequired: false
    //     titrations_diagram       diagramRequired: true
    //
    //   questionSectionCPage: no chemistry problem type maps here;
    //     section retains base question formats and uses chemistry insets.

    chemistry: {

        coverPage: {
            examples: [
                'IGCSE Chemistry 0620 Paper 2 Theory',
                'A-Level Chemistry electrochemistry paper',
                'Internal Form 5 Chemistry second-term exam',
                'WAEC Chemistry Paper 1 cover'
            ],
            defaultOptions: {
                subjectTitle: 'Chemistry',
                duration: '1 hour 30 minutes',
                totalMarks: 80
            }
        },

        // Section A — recall, identification, and short structured
        // Problem types: alkanes | functional_groups_diagram |
        //                electron_configuration | atomic_structure_diagram
        questionSectionAPage: {
            problemTypeIds: [
                'alkanes',
                'functional_groups_diagram',
                'electron_configuration',
                'atomic_structure_diagram'
            ],
            // Labels sourced from pt.label for each id above
            questionFormatsAdditions: [
                'Alkanes & Homologous Series',
                'Functional Groups (Diagram)',
                'Electron Configuration',
                'Atomic Structure (Diagram)'
            ],
            // Union of componentHints across all four Section A problem types,
            // deduplicated:
            //   alkanes:                   structuralFormulaBox, chemicalEquationSpace, labelledDiagram
            //   functional_groups_diagram: structuralFormulaBox, labelledDiagram, diagramSpace
            //   electron_configuration:    blankAnswerLines, diagramSpace, markAllocation
            //   atomic_structure_diagram:  diagramSpace, labelledDiagram, blankAnswerLines
            componentOptionsAdditions: [
                'structuralFormulaBox',
                'chemicalEquationSpace',
                'labelledDiagram',
                'diagramSpace',
                'blankAnswerLines',
                'markAllocation'
            ],
            // diagramRequired: true — alkanes, functional_groups_diagram, and
            //   atomic_structure_diagram all have diagramRequired: true
            diagramRequired: true,
            // Insets: periodic table and data booklet support all Section A
            // chemistry problem types; formula sheet and electrochemical series
            // added for completeness across the paper
            insets: [
                'periodicTable',
                'formulaSheet',
                'dataBooklet',
                'electrochemicalSeries'
            ],
            defaultOptions: { insetType: 'periodicTable' }
        },

        // Section B — calculation, data-response, and multi-step analysis
        // Problem types: mole_calculations | galvanic_cells |
        //                electrolysis_diagram | equilibrium_constants |
        //                titrations_diagram
        questionSectionBPage: {
            problemTypeIds: [
                'mole_calculations',
                'galvanic_cells',
                'electrolysis_diagram',
                'equilibrium_constants',
                'titrations_diagram'
            ],
            // Labels sourced from pt.label for each id above
            questionFormatsAdditions: [
                'Mole Calculations',
                'Galvanic Cells',
                'Electrolysis (Diagram)',
                'Equilibrium Constants',
                'Titrations (Diagram)'
            ],
            // Union of componentHints across all five Section B problem types,
            // deduplicated:
            //   mole_calculations:    calculationWorkingBox, markAllocation
            //   galvanic_cells:       halfEquationSpace, calculationWorkingBox, diagramSpace, labelledDiagram
            //   electrolysis_diagram: diagramSpace, labelledDiagram, halfEquationSpace, ionicEquationSpace
            //   equilibrium_constants: calculationWorkingBox, chemicalEquationSpace, dataTable
            //   titrations_diagram:   titrationDataTable, calculationWorkingBox, diagramSpace
            componentOptionsAdditions: [
                'calculationWorkingBox',
                'markAllocation',
                'halfEquationSpace',
                'diagramSpace',
                'labelledDiagram',
                'ionicEquationSpace',
                'chemicalEquationSpace',
                'dataTable',
                'titrationDataTable'
            ],
            // diagramRequired: true — galvanic_cells, electrolysis_diagram, and
            //   titrations_diagram all have diagramRequired: true
            diagramRequired: true,
            insets: [
                'periodicTable',
                'electrochemicalSeries',
                'formulaSheet',
                'dataBooklet',
                'nernstEquationCard',
                'gibbsEnergyCard'
            ],
            defaultOptions: { insetType: 'electrochemicalSeries' }
        },

        // Section C — extended response and evaluation
        // No chemistry problem types map to questionSectionCPage in the
        // registry; section carries chemistry-specific component additions
        // and insets to support extended writing on all chemistry topics.
        questionSectionCPage: {
            problemTypeIds: [],
            questionFormatsAdditions: [
                'Synoptic Chemistry Essay',
                'Thermodynamic Evaluation',
                'Experimental Design & Analysis'
            ],
            componentOptionsAdditions: [
                'chemicalEquationSpace',
                'halfEquationSpace',
                'reactionPathwayBox',
                'energyLevelDiagramSpace'
            ],
            diagramRequired: false,
            insets: [
                'periodicTable',
                'electrochemicalSeries',
                'formulaSheet',
                'dataBooklet',
                'gibbsEnergyCard',
                'markingRubric'
            ],
            defaultOptions: { insetType: 'markingRubric' }
        },

        closingPage: {
            examples: [
                'Chemistry paper end-of-paper with section marks grid',
                'Examiner-use grid: Section A / B / C marks'
            ],
            defaultOptions: {
                endOfPaperMarker: 'END OF CHEMISTRY EXAMINATION PAPER'
            }
        },

        formattingConfig: {
            examples: [
                'A4, Times New Roman 12pt, 1.5 spacing — standard board chemistry style',
                'A4, Arial 11pt, 1.15 spacing — accessible large-print chemistry variant'
            ],
            defaultOptions: {
                bodyFont: 'Times New Roman',
                bodyFontSize: 12,
                colorProfile: 'black-and-white'
            }
        }
    },


    // ── Biology ───────────────────────────────────────────────────────────
    //
    // subjectProblemTypes → biology:
    //
    //   questionSectionAPage  (typicalSection === 'questionSectionAPage'):
    //     cell_division          diagramRequired: true
    //     cell_structure_diagram diagramRequired: true
    //     plant_structure        diagramRequired: true
    //     bacteria_diagram       diagramRequired: true
    //     pathogens              diagramRequired: false
    //
    //   questionSectionBPage  (typicalSection === 'questionSectionBPage'):
    //     mendelian_genetics     diagramRequired: true
    //     translation_diagram    diagramRequired: true
    //     ecosystems             diagramRequired: true
    //     nervous_system         diagramRequired: true
    //     excretory_system_diagram diagramRequired: true
    //
    //   questionSectionCPage: no biology problem type maps here;
    //     section carries biology insets for extended essay and
    //     investigative writing.

    biology: {

        coverPage: {
            examples: [
                'IGCSE Biology 0610 Paper 2 Theory',
                'A-Level Biology cell biology and genetics paper',
                'Internal Form 4 Biology first-term exam',
                'WAEC Biology Paper 1 cover'
            ],
            defaultOptions: {
                subjectTitle: 'Biology',
                duration: '1 hour 15 minutes',
                totalMarks: 75
            }
        },

        // Section A — identification, labelling, and recall
        // Problem types: cell_division | cell_structure_diagram |
        //                plant_structure | bacteria_diagram | pathogens
        questionSectionAPage: {
            problemTypeIds: [
                'cell_division',
                'cell_structure_diagram',
                'plant_structure',
                'bacteria_diagram',
                'pathogens'
            ],
            // Labels sourced from pt.label for each id above
            questionFormatsAdditions: [
                'Cell Division',
                'Cell Structure (Diagram)',
                'Plant Structure',
                'Bacteria (Diagram)',
                'Pathogens'
            ],
            // Union of componentHints across all five Section A problem types,
            // deduplicated:
            //   cell_division:          biologicalDiagramSpace, labelledDiagram, blankAnswerLines
            //   cell_structure_diagram: biologicalDiagramSpace, labelledDiagram, microscopeDiagramSpace
            //   plant_structure:        biologicalDiagramSpace, labelledDiagram, microscopeDiagramSpace
            //   bacteria_diagram:       biologicalDiagramSpace, labelledDiagram, blankAnswerLines
            //   pathogens:              blankAnswerLines, dataTable, diagramSpace
            componentOptionsAdditions: [
                'biologicalDiagramSpace',
                'labelledDiagram',
                'blankAnswerLines',
                'microscopeDiagramSpace',
                'dataTable',
                'diagramSpace'
            ],
            // diagramRequired: true — cell_division, cell_structure_diagram,
            //   plant_structure, and bacteria_diagram all have diagramRequired: true
            diagramRequired: true,
            insets: [
                'cellOrganelleReference',
                'biologicalKeyTermsSheet',
                'humanBodySystemsDiagram',
                'classificationKeyCard'
            ],
            defaultOptions: { insetType: 'cellOrganelleReference' }
        },

        // Section B — data-response, genetics, and experimental analysis
        // Problem types: mendelian_genetics | translation_diagram |
        //                ecosystems | nervous_system | excretory_system_diagram
        questionSectionBPage: {
            problemTypeIds: [
                'mendelian_genetics',
                'translation_diagram',
                'ecosystems',
                'nervous_system',
                'excretory_system_diagram'
            ],
            // Labels sourced from pt.label for each id above
            questionFormatsAdditions: [
                'Mendelian Genetics',
                'Translation (Diagram)',
                'Ecosystems',
                'Nervous System',
                'Excretory System (Diagram)'
            ],
            // Union of componentHints across all five Section B problem types,
            // deduplicated:
            //   mendelian_genetics:       geneticsCrossGrid, calculationWorkingBox, blankAnswerLines
            //   translation_diagram:      biologicalDiagramSpace, labelledDiagram, dataTable
            //   ecosystems:               foodWebBox, dataTable, graphAxis, blankAnswerLines
            //   nervous_system:           biologicalDiagramSpace, labelledDiagram, blankAnswerLines
            //   excretory_system_diagram: biologicalDiagramSpace, labelledDiagram, blankAnswerLines
            componentOptionsAdditions: [
                'geneticsCrossGrid',
                'calculationWorkingBox',
                'blankAnswerLines',
                'biologicalDiagramSpace',
                'labelledDiagram',
                'dataTable',
                'foodWebBox',
                'graphAxis'
            ],
            // diagramRequired: true — all five Section B biology problem types
            //   have diagramRequired: true
            diagramRequired: true,
            insets: [
                'geneticsReferenceCard',
                'biologicalKeyTermsSheet',
                'humanBodySystemsDiagram',
                'cellOrganelleReference',
                'enzymeKineticsGraph'
            ],
            defaultOptions: { insetType: 'geneticsReferenceCard' }
        },

        // Section C — extended response, evaluation, and synoptic essays
        // No biology problem types map to questionSectionCPage; section
        // carries biology insets for extended investigative writing.
        questionSectionCPage: {
            problemTypeIds: [],
            questionFormatsAdditions: [
                'Ecology Synoptic Essay',
                'Investigation Evaluation',
                'Evolutionary Argument Task'
            ],
            componentOptionsAdditions: [
                'biologicalDiagramSpace',
                'ecosystemInteractionBox',
                'experimentDesignTemplate'
            ],
            diagramRequired: false,
            insets: [
                'biologicalKeyTermsSheet',
                'humanBodySystemsDiagram',
                'markingRubric',
                'enzymeKineticsGraph',
                'classificationKeyCard'
            ],
            defaultOptions: { insetType: 'markingRubric' }
        },

        closingPage: {
            examples: [
                'Biology paper end with section marks grid',
                'Examiner-use grid: Section A / B / C marks'
            ],
            defaultOptions: {
                endOfPaperMarker: 'END OF BIOLOGY EXAMINATION PAPER'
            }
        },

        formattingConfig: {
            examples: [
                'A4, Times New Roman 12pt, 1.5 spacing — standard board biology style',
                'A4, Arial 11pt, 1.5 spacing — biology accessible variant'
            ],
            defaultOptions: {
                bodyFont: 'Times New Roman',
                bodyFontSize: 12,
                colorProfile: 'black-and-white'
            }
        }
    },


    // ── Physics ───────────────────────────────────────────────────────────
    //
    // subjectProblemTypes → physics:
    //
    //   questionSectionAPage  (typicalSection === 'questionSectionAPage'):
    //     waves_and_properties   diagramRequired: true
    //     pressure_and_moments   diagramRequired: true
    //
    //   questionSectionBPage  (typicalSection === 'questionSectionBPage'):
    //     kinematics             diagramRequired: false
    //     forces_and_newtons_laws diagramRequired: true
    //     energy_work_power      diagramRequired: false
    //     circuits_and_ohms_law  diagramRequired: true
    //     nuclear_physics        diagramRequired: false
    //     electromagnetism       diagramRequired: true
    //     thermal_physics        diagramRequired: false
    //     optics_ray_diagrams    diagramRequired: true
    //
    //   questionSectionCPage: no physics problem type maps here;
    //     section carries physics insets for extended design and
    //     evaluation writing.

    physics: {

        coverPage: {
            examples: [
                'IGCSE Physics 0625 Paper 4 Extended Theory',
                'A-Level Physics mechanics and waves paper',
                'Internal Form 5 Physics second-term exam',
                'WAEC Physics Paper 2 cover'
            ],
            defaultOptions: {
                subjectTitle: 'Physics',
                duration: '1 hour 15 minutes',
                totalMarks: 80
            }
        },

        // Section A — recall, identification, and short structured
        // Problem types: waves_and_properties | pressure_and_moments
        questionSectionAPage: {
            problemTypeIds: [
                'waves_and_properties',
                'pressure_and_moments'
            ],
            // Labels sourced from pt.label for each id above
            questionFormatsAdditions: [
                'Waves & Properties',
                'Pressure & Moments'
            ],
            // Union of componentHints across both Section A problem types,
            // deduplicated:
            //   waves_and_properties: waveformSketchSpace, calculationWorkingBox, labelledDiagram
            //   pressure_and_moments: diagramSpace, calculationWorkingBox, vectorDiagramSpace
            componentOptionsAdditions: [
                'waveformSketchSpace',
                'calculationWorkingBox',
                'labelledDiagram',
                'diagramSpace',
                'vectorDiagramSpace'
            ],
            // diagramRequired: true — both Section A physics problem types
            //   have diagramRequired: true
            diagramRequired: true,
            insets: [
                'physicsFormulaeSheet',
                'siUnitsReference',
                'circuitSymbolsCard',
                'electromagneticSpectrumCard'
            ],
            defaultOptions: { insetType: 'physicsFormulaeSheet' }
        },

        // Section B — calculation, data-response, and multi-step analysis
        // Problem types: kinematics | forces_and_newtons_laws |
        //                energy_work_power | circuits_and_ohms_law |
        //                nuclear_physics | electromagnetism |
        //                thermal_physics | optics_ray_diagrams
        questionSectionBPage: {
            problemTypeIds: [
                'kinematics',
                'forces_and_newtons_laws',
                'energy_work_power',
                'circuits_and_ohms_law',
                'nuclear_physics',
                'electromagnetism',
                'thermal_physics',
                'optics_ray_diagrams'
            ],
            // Labels sourced from pt.label for each id above
            questionFormatsAdditions: [
                'Kinematics',
                "Forces & Newton's Laws",
                'Energy, Work & Power',
                "Circuits & Ohm's Law",
                'Nuclear Physics',
                'Electromagnetism',
                'Thermal Physics',
                'Optics (Ray Diagrams)'
            ],
            // Union of componentHints across all eight Section B problem types,
            // deduplicated:
            //   kinematics:              calculationWorkingBox, velocityTimeGraphAxis, graphAxis
            //   forces_and_newtons_laws: vectorDiagramSpace, calculationWorkingBox, diagramSpace
            //   energy_work_power:       calculationWorkingBox, dataTable, graphAxis
            //   circuits_and_ohms_law:   circuitDiagramSpace, calculationWorkingBox, graphAxis, dataTable
            //   nuclear_physics:         calculationWorkingBox, dataTable, blankAnswerLines
            //   electromagnetism:        diagramSpace, labelledDiagram, calculationWorkingBox
            //   thermal_physics:         calculationWorkingBox, dataTable, graphAxis
            //   optics_ray_diagrams:     rayDiagramSpace, labelledDiagram, calculationWorkingBox
            componentOptionsAdditions: [
                'calculationWorkingBox',
                'velocityTimeGraphAxis',
                'graphAxis',
                'vectorDiagramSpace',
                'diagramSpace',
                'dataTable',
                'circuitDiagramSpace',
                'blankAnswerLines',
                'labelledDiagram',
                'rayDiagramSpace'
            ],
            // diagramRequired: true — forces_and_newtons_laws, circuits_and_ohms_law,
            //   electromagnetism, and optics_ray_diagrams all have diagramRequired: true
            diagramRequired: true,
            insets: [
                'physicsFormulaeSheet',
                'siUnitsReference',
                'circuitSymbolsCard',
                'gravitationalFieldCard',
                'nuclearDataCard'
            ],
            defaultOptions: { insetType: 'physicsFormulaeSheet' }
        },

        // Section C — extended response and experimental design
        // No physics problem types map to questionSectionCPage; section
        // carries physics insets for extended engineering and design tasks.
        questionSectionCPage: {
            problemTypeIds: [],
            questionFormatsAdditions: [
                'Engineering Application Essay',
                'Experimental Design with Error Analysis',
                'Quantitative Evaluation Task'
            ],
            componentOptionsAdditions: [
                'circuitDiagramSpace',
                'vectorDiagramSpace',
                'experimentApparatusBox',
                'errorAnalysisBox'
            ],
            diagramRequired: false,
            insets: [
                'physicsFormulaeSheet',
                'siUnitsReference',
                'gravitationalFieldCard',
                'nuclearDataCard',
                'markingRubric'
            ],
            defaultOptions: { insetType: 'markingRubric' }
        },

        closingPage: {
            examples: [
                'Physics paper end with section marks grid',
                'Examiner-use grid: Section A / B / C marks'
            ],
            defaultOptions: {
                endOfPaperMarker: 'END OF PHYSICS EXAMINATION PAPER'
            }
        },

        formattingConfig: {
            examples: [
                'A4, Times New Roman 12pt, 1.5 spacing — standard board physics style',
                'A4, Arial 11pt, 1.15 spacing — physics accessible large-print variant'
            ],
            defaultOptions: {
                bodyFont: 'Times New Roman',
                bodyFontSize: 12,
                colorProfile: 'black-and-white'
            }
        }
    },


    // ── Mathematics ───────────────────────────────────────────────────────
    //
    // subjectProblemTypes → mathematics:
    //
    //   questionSectionAPage  (typicalSection === 'questionSectionAPage'):
    //     algebra_equations      diagramRequired: false
    //     number_and_arithmetic  diagramRequired: false
    //
    //   questionSectionBPage  (typicalSection === 'questionSectionBPage'):
    //     quadratic_equations    diagramRequired: false
    //     trigonometry           diagramRequired: true
    //     geometry_and_mensuration diagramRequired: true
    //     statistics_and_probability diagramRequired: false
    //     vectors_and_matrices   diagramRequired: true
    //
    //   questionSectionCPage  (typicalSection === 'questionSectionCPage'):
    //     calculus_differentiation diagramRequired: false
    //     calculus_integration   diagramRequired: true
    //     sequences_and_series   diagramRequired: false

    mathematics: {

        coverPage: {
            examples: [
                'IGCSE Mathematics 0580 Paper 2 Non-calculator',
                'A-Level Pure Mathematics and Statistics paper',
                'Internal Form 4 Mathematics second-term exam',
                'WAEC Mathematics Paper 1 cover'
            ],
            defaultOptions: {
                subjectTitle: 'Mathematics',
                duration: '2 hours',
                totalMarks: 100
            }
        },

        // Section A — arithmetic, basic algebra, and recall
        // Problem types: algebra_equations | number_and_arithmetic
        questionSectionAPage: {
            problemTypeIds: [
                'algebra_equations',
                'number_and_arithmetic'
            ],
            // Labels sourced from pt.label for each id above
            questionFormatsAdditions: [
                'Algebra & Equations',
                'Number & Arithmetic'
            ],
            // Union of componentHints across both Section A problem types,
            // deduplicated:
            //   algebra_equations:    blankAnswerLines, calculationWorkingBox, markAllocation
            //   number_and_arithmetic: blankAnswerLines, calculationWorkingBox, markAllocation
            componentOptionsAdditions: [
                'blankAnswerLines',
                'calculationWorkingBox',
                'markAllocation',
                'numberLineSpace',
                'gridPaperBox'
            ],
            // diagramRequired: false — neither Section A maths problem type
            //   requires a pre-drawn diagram
            diagramRequired: false,
            insets: [
                'mathematicsFormulaeSheet',
                'geometryPropertiesCard',
                'statisticsFormulaCard',
                'trigonometryRatiosCard'
            ],
            defaultOptions: { insetType: 'mathematicsFormulaeSheet' }
        },

        // Section B — structured calculation and multi-step problem solving
        // Problem types: quadratic_equations | trigonometry |
        //                geometry_and_mensuration | statistics_and_probability |
        //                vectors_and_matrices
        questionSectionBPage: {
            problemTypeIds: [
                'quadratic_equations',
                'trigonometry',
                'geometry_and_mensuration',
                'statistics_and_probability',
                'vectors_and_matrices'
            ],
            // Labels sourced from pt.label for each id above
            questionFormatsAdditions: [
                'Quadratic Equations',
                'Trigonometry',
                'Geometry & Mensuration',
                'Statistics & Probability',
                'Vectors & Matrices'
            ],
            // Union of componentHints across all five Section B problem types,
            // deduplicated:
            //   quadratic_equations:        calculationWorkingBox, coordinatePlaneBox, blankAnswerLines
            //   trigonometry:               calculationWorkingBox, diagramSpace, geometricConstructionSpace
            //   geometry_and_mensuration:   geometricConstructionSpace, calculationWorkingBox, gridPaperBox
            //   statistics_and_probability: dataTable, probabilityTreeSpace, calculationWorkingBox, graphAxis
            //   vectors_and_matrices:       matrixWorkingBox, coordinatePlaneBox, calculationWorkingBox
            componentOptionsAdditions: [
                'calculationWorkingBox',
                'coordinatePlaneBox',
                'blankAnswerLines',
                'diagramSpace',
                'geometricConstructionSpace',
                'gridPaperBox',
                'dataTable',
                'probabilityTreeSpace',
                'graphAxis',
                'matrixWorkingBox',
                'setDiagramSpace'
            ],
            // diagramRequired: true — trigonometry, geometry_and_mensuration,
            //   and vectors_and_matrices all have diagramRequired: true
            diagramRequired: true,
            insets: [
                'mathematicsFormulaeSheet',
                'trigonometryRatiosCard',
                'geometryPropertiesCard',
                'statisticsFormulaCard',
                'logarithmTables'
            ],
            defaultOptions: { insetType: 'mathematicsFormulaeSheet' }
        },

        // Section C — extended response, proof, and calculus
        // Problem types: calculus_differentiation | calculus_integration |
        //                sequences_and_series
        questionSectionCPage: {
            problemTypeIds: [
                'calculus_differentiation',
                'calculus_integration',
                'sequences_and_series'
            ],
            // Labels sourced from pt.label for each id above
            questionFormatsAdditions: [
                'Calculus — Differentiation',
                'Calculus — Integration',
                'Sequences & Series'
            ],
            // Union of componentHints across all three Section C problem types,
            // deduplicated:
            //   calculus_differentiation: calculusWorkingBox, coordinatePlaneBox, blankAnswerLines
            //   calculus_integration:     calculusWorkingBox, coordinatePlaneBox, calculationWorkingBox
            //   sequences_and_series:     calculationWorkingBox, proofScaffoldBox, blankAnswerLines
            componentOptionsAdditions: [
                'calculusWorkingBox',
                'coordinatePlaneBox',
                'blankAnswerLines',
                'calculationWorkingBox',
                'proofScaffoldBox',
                'statisticsOutputTable'
            ],
            // diagramRequired: true — calculus_integration has diagramRequired: true
            diagramRequired: true,
            insets: [
                'mathematicsFormulaeSheet',
                'trigonometryRatiosCard',
                'statisticsFormulaCard',
                'logarithmTables',
                'markingRubric'
            ],
            defaultOptions: { insetType: 'mathematicsFormulaeSheet' }
        },

        closingPage: {
            examples: [
                'Mathematics paper end with section marks grid',
                'Examiner-use grid: Section A / B / C marks'
            ],
            defaultOptions: {
                endOfPaperMarker: 'END OF MATHEMATICS EXAMINATION PAPER'
            }
        },

        formattingConfig: {
            examples: [
                'A4, Times New Roman 12pt, 1.5 spacing — standard board mathematics style',
                'A4, Arial 11pt, 1.15 spacing — mathematics accessible large-print variant'
            ],
            defaultOptions: {
                bodyFont: 'Times New Roman',
                bodyFontSize: 12,
                lineSpacing: 1.5,
                colorProfile: 'black-and-white',
                answerLineSpacing: 10
            }
        }
    }

}; // end SubjectOverrides


// ============================================================================
// SECTION 2 — RESOLVER
// getPage() is defined here so it can close over both BasePages (imported)
// and SubjectOverrides (defined above).  It is then patched onto
// ExaminationPaperRegistry as a static method so the rest of the class's
// helper methods (getAllPagesForSubject, searchPages, etc.) can call
// this.getPage() transparently.
// ============================================================================

/**
 * Deep-merges BasePages[pageKey] with SubjectOverrides[subject][pageKey],
 * then stamps the matching problem-type configurations onto the result.
 *
 * Merge rules:
 *   • Scalar fields (strings, booleans, numbers) : override wins.
 *   • problemTypeIds                             : replaced by subject array.
 *   • insets                                     : base + override concatenated, deduped.
 *   • componentOptionsAdditions                  : appended to base componentOptions.
 *   • questionFormatsAdditions                   : appended to base questionFormats.
 *   • diagramRequired                            : stamped directly onto resolved page.
 *   • defaultOptions                             : shallow-merged (override patches base).
 *   • problemTypes                               : full problem-type objects whose
 *                                                  typicalSection === pageKey attached
 *                                                  as resolved.problemTypes.
 *
 * @param {string} subject  'chemistry' | 'biology' | 'physics' | 'mathematics'
 * @param {string} pageKey  one of ExaminationPaperRegistry.supportedPageKeys
 * @returns {object}        fully resolved page definition
 */
ExaminationPaperRegistry.getPage = function (subject, pageKey) {
    this._assertSubject(subject);
    this._assertPageKey(pageKey);

    const base     = BasePages[pageKey];
    const override = SubjectOverrides[subject]?.[pageKey] ?? {};

    const resolved = { ...base };

    // Stamp subject
    resolved.subject = subject;

    // Scalar overrides
    if (override.name)        resolved.name        = override.name;
    if (override.description) resolved.description = override.description;
    if (override.usage)       resolved.usage       = override.usage;

    // examples — subject replaces base placeholder
    if (override.examples) resolved.examples = override.examples;

    // problemTypeIds — subject array replaces any prior value
    resolved.problemTypeIds = override.problemTypeIds ?? [];

    // diagramRequired — stamped from override (any section with a diagram
    // problem type sets this to true; purely textual sections set false)
    if (override.diagramRequired !== undefined) {
        resolved.diagramRequired = override.diagramRequired;
    }

    // insets — base + subject, deduplicated
    if (override.insets) {
        resolved.insets = [...new Set([...(base.insets ?? []), ...override.insets])];
    }

    // componentOptions — append specialist additions (already deduplicated
    // within the override; spread ensures no base duplication either)
    if (override.componentOptionsAdditions) {
        resolved.componentOptions = [
            ...new Set([
                ...(base.componentOptions ?? []),
                ...override.componentOptionsAdditions
            ])
        ];
    }

    // questionFormats — append specialist additions (labels from pt.label)
    if (override.questionFormatsAdditions && base.questionFormats) {
        resolved.questionFormats = [
            ...base.questionFormats,
            ...override.questionFormatsAdditions
        ];
    }

    // defaultOptions — shallow-merge (override patches base)
    if (override.defaultOptions) {
        resolved.defaultOptions = {
            ...base.defaultOptions,
            ...override.defaultOptions
        };
    }

    // problemTypes — attach full problem-type objects whose typicalSection
    // matches this page key.  Cover / closing / config receive an empty array
    // so callers can always iterate safely.
    resolved.problemTypes = (this.subjectProblemTypes[subject] ?? [])
        .filter(pt => pt.typicalSection === pageKey);

    return resolved;
};

export { SubjectOverrides, BasePages,ExaminationPaperRegistry };
