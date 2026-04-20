// ============================================================================
// examinationPaperRegistry.js
//
// Architecture: Option 2 — Base Pages + Subject Overrides (Layered Registry)
//
// ┌─────────────────────────────────────────────────────────────────────┐
// │  REGISTRY CLASS    Supported subjects, page keys, subject-level     │
// │                    helpers, cross-subject helpers, stats, guards    │
// │                    NOTE: getPage() resolver lives in               │
// │                    subjectOverrides.js                              │
// └─────────────────────────────────────────────────────────────────────┘
//
// Depends on:  BasePages.js               (base page structure definitions)
// Consumed by: subjectOverrides.js        (resolver patch + full export)
//
// Supported subjects:  chemistry | biology | physics | mathematics
//
// Supported page keys: coverPage | questionSectionAPage |
//                      questionSectionBPage | questionSectionCPage |
//                      closingPage | formattingConfig
// ============================================================================

import { BasePages } from './BasePages.js';


// ============================================================================
// EXAMINATION PAPER REGISTRY CLASS
// Supported subjects, page keys, all helper methods, stats, and guards.
// NOTE: The getPage() resolver is intentionally absent here — it lives in
//       subjectOverrides.js where it can close over both BasePages and
//       SubjectOverrides simultaneously, then is patched onto this class.
// ============================================================================

class ExaminationPaperRegistry {

    static supportedSubjects = ['chemistry', 'biology', 'physics', 'mathematics'];

    static supportedPageKeys = [
        'coverPage',
        'questionSectionAPage',
        'questionSectionBPage',
        'questionSectionCPage',
        'closingPage',
        'formattingConfig'
    ];

    // ── Problem type configurations per subject ───────────────────────────
    //
    // Each entry describes a question/problem type that can appear in this
    // subject's examination.  Fields:
    //   id               – machine key, used to reference the type elsewhere
    //   label            – human-readable display name
    //   description      – what the type tests / involves
    //   diagramRequired  – whether a pre-drawn diagram must be embedded
    //   workingSpace     – 'none' | 'lines' | 'box' | 'grid'
    //   typicalSection   – which section this type most commonly appears in
    //   componentHints   – componentOptions IDs that are usually needed

    static subjectProblemTypes = {

        chemistry: [
            {
                id: 'mole_calculations',
                label: 'Mole Calculations',
                description: 'Mass, moles, molar mass, Avogadro — stoichiometric quantity calculations',
                diagramRequired: false,
                workingSpace: 'box',
                typicalSection: 'questionSectionBPage',
                componentHints: ['calculationWorkingBox', 'markAllocation']
            },
            {
                id: 'alkanes',
                label: 'Alkanes & Homologous Series',
                description: 'Naming, structural formulae, properties, and reactions of alkanes and related homologous series',
                diagramRequired: true,
                workingSpace: 'box',
                typicalSection: 'questionSectionAPage',
                componentHints: ['structuralFormulaBox', 'chemicalEquationSpace', 'labelledDiagram']
            },
            {
                id: 'functional_groups_diagram',
                label: 'Functional Groups (Diagram)',
                description: 'Identification, drawing, and naming of organic functional groups from structural diagrams',
                diagramRequired: true,
                workingSpace: 'box',
                typicalSection: 'questionSectionAPage',
                componentHints: ['structuralFormulaBox', 'labelledDiagram', 'diagramSpace']
            },
            {
                id: 'galvanic_cells',
                label: 'Galvanic Cells',
                description: 'EMF calculation, cell notation, electrode reactions, and spontaneity from electrochemical series',
                diagramRequired: true,
                workingSpace: 'box',
                typicalSection: 'questionSectionBPage',
                componentHints: ['halfEquationSpace', 'calculationWorkingBox', 'diagramSpace', 'labelledDiagram']
            },
            {
                id: 'electrolysis_diagram',
                label: 'Electrolysis (Diagram)',
                description: 'Electrode identification, product prediction, and discharge order in electrolytic cells',
                diagramRequired: true,
                workingSpace: 'box',
                typicalSection: 'questionSectionBPage',
                componentHints: ['diagramSpace', 'labelledDiagram', 'halfEquationSpace', 'ionicEquationSpace']
            },
            {
                id: 'equilibrium_constants',
                label: 'Equilibrium Constants',
                description: 'Writing Kc / Kp expressions, calculating equilibrium constants, and Le Chatelier applications',
                diagramRequired: false,
                workingSpace: 'box',
                typicalSection: 'questionSectionBPage',
                componentHints: ['calculationWorkingBox', 'chemicalEquationSpace', 'dataTable']
            },
            {
                id: 'titrations_diagram',
                label: 'Titrations (Diagram)',
                description: 'Acid–base and redox titration procedures, calculations, and indicator selection',
                diagramRequired: true,
                workingSpace: 'box',
                typicalSection: 'questionSectionBPage',
                componentHints: ['titrationDataTable', 'calculationWorkingBox', 'diagramSpace']
            },
            {
                id: 'electron_configuration',
                label: 'Electron Configuration',
                description: 'Writing electronic configurations, orbital diagrams, and linking config to periodic properties',
                diagramRequired: false,
                workingSpace: 'lines',
                typicalSection: 'questionSectionAPage',
                componentHints: ['blankAnswerLines', 'diagramSpace', 'markAllocation']
            },
            {
                id: 'atomic_structure_diagram',
                label: 'Atomic Structure (Diagram)',
                description: 'Proton, neutron, electron counts; isotopes; mass number; nuclear notation diagrams',
                diagramRequired: true,
                workingSpace: 'box',
                typicalSection: 'questionSectionAPage',
                componentHints: ['diagramSpace', 'labelledDiagram', 'blankAnswerLines']
            }
        ],

        biology: [
            {
                id: 'cell_division',
                label: 'Cell Division',
                description: 'Stages of mitosis and meiosis, chromosome behaviour, and significance of each division type',
                diagramRequired: true,
                workingSpace: 'lines',
                typicalSection: 'questionSectionAPage',
                componentHints: ['biologicalDiagramSpace', 'labelledDiagram', 'blankAnswerLines']
            },
            {
                id: 'cell_structure_diagram',
                label: 'Cell Structure (Diagram)',
                description: 'Identification and function of organelles in plant, animal, and bacterial cells',
                diagramRequired: true,
                workingSpace: 'lines',
                typicalSection: 'questionSectionAPage',
                componentHints: ['biologicalDiagramSpace', 'labelledDiagram', 'microscopeDiagramSpace']
            },
            {
                id: 'mendelian_genetics',
                label: 'Mendelian Genetics',
                description: 'Monohybrid and dihybrid crosses, Punnett squares, genotype/phenotype ratios, and inheritance patterns',
                diagramRequired: true,
                workingSpace: 'box',
                typicalSection: 'questionSectionBPage',
                componentHints: ['geneticsCrossGrid', 'calculationWorkingBox', 'blankAnswerLines']
            },
            {
                id: 'translation_diagram',
                label: 'Translation (Diagram)',
                description: 'mRNA codons, tRNA anticodons, ribosome movement, and polypeptide assembly during translation',
                diagramRequired: true,
                workingSpace: 'lines',
                typicalSection: 'questionSectionBPage',
                componentHints: ['biologicalDiagramSpace', 'labelledDiagram', 'dataTable']
            },
            {
                id: 'ecosystems',
                label: 'Ecosystems',
                description: 'Energy flow, food webs, nutrient cycling, population dynamics, and ecological relationships',
                diagramRequired: true,
                workingSpace: 'lines',
                typicalSection: 'questionSectionBPage',
                componentHints: ['foodWebBox', 'dataTable', 'graphAxis', 'blankAnswerLines']
            },
            {
                id: 'nervous_system',
                label: 'Nervous System',
                description: 'Neurone structure, reflex arcs, synaptic transmission, and the CNS/PNS organisation',
                diagramRequired: true,
                workingSpace: 'lines',
                typicalSection: 'questionSectionBPage',
                componentHints: ['biologicalDiagramSpace', 'labelledDiagram', 'blankAnswerLines']
            },
            {
                id: 'excretory_system_diagram',
                label: 'Excretory System (Diagram)',
                description: 'Kidney structure, nephron function, urine formation, and osmoregulation',
                diagramRequired: true,
                workingSpace: 'lines',
                typicalSection: 'questionSectionBPage',
                componentHints: ['biologicalDiagramSpace', 'labelledDiagram', 'blankAnswerLines']
            },
            {
                id: 'plant_structure',
                label: 'Plant Structure',
                description: 'Root, stem, and leaf anatomy; xylem and phloem; transpiration and translocation',
                diagramRequired: true,
                workingSpace: 'lines',
                typicalSection: 'questionSectionAPage',
                componentHints: ['biologicalDiagramSpace', 'labelledDiagram', 'microscopeDiagramSpace']
            },
            {
                id: 'bacteria_diagram',
                label: 'Bacteria (Diagram)',
                description: 'Prokaryotic cell structure, reproduction, and classification features',
                diagramRequired: true,
                workingSpace: 'lines',
                typicalSection: 'questionSectionAPage',
                componentHints: ['biologicalDiagramSpace', 'labelledDiagram', 'blankAnswerLines']
            },
            {
                id: 'pathogens',
                label: 'Pathogens',
                description: 'Types of pathogens (bacteria, viruses, fungi, protists), disease transmission, and immune responses',
                diagramRequired: false,
                workingSpace: 'lines',
                typicalSection: 'questionSectionAPage',
                componentHints: ['blankAnswerLines', 'dataTable', 'diagramSpace']
            }
        ],

        physics: [
            {
                id: 'kinematics',
                label: 'Kinematics',
                description: 'Displacement, velocity, acceleration, SUVAT equations, and motion graphs',
                diagramRequired: false,
                workingSpace: 'box',
                typicalSection: 'questionSectionBPage',
                componentHints: ['calculationWorkingBox', 'velocityTimeGraphAxis', 'graphAxis']
            },
            {
                id: 'forces_and_newtons_laws',
                label: "Forces & Newton's Laws",
                description: "Free-body diagrams, resultant forces, Newton's three laws, and equilibrium",
                diagramRequired: true,
                workingSpace: 'box',
                typicalSection: 'questionSectionBPage',
                componentHints: ['vectorDiagramSpace', 'calculationWorkingBox', 'diagramSpace']
            },
            {
                id: 'energy_work_power',
                label: 'Energy, Work & Power',
                description: 'Kinetic and potential energy, work done, power, and efficiency calculations',
                diagramRequired: false,
                workingSpace: 'box',
                typicalSection: 'questionSectionBPage',
                componentHints: ['calculationWorkingBox', 'dataTable', 'graphAxis']
            },
            {
                id: 'waves_and_properties',
                label: 'Waves & Properties',
                description: 'Transverse and longitudinal waves, wavelength, frequency, amplitude, wave speed, and the wave equation',
                diagramRequired: true,
                workingSpace: 'box',
                typicalSection: 'questionSectionAPage',
                componentHints: ['waveformSketchSpace', 'calculationWorkingBox', 'labelledDiagram']
            },
            {
                id: 'circuits_and_ohms_law',
                label: "Circuits & Ohm's Law",
                description: "Series and parallel circuits, Ohm's Law, resistance, voltage dividers, and V–I graphs",
                diagramRequired: true,
                workingSpace: 'box',
                typicalSection: 'questionSectionBPage',
                componentHints: ['circuitDiagramSpace', 'calculationWorkingBox', 'graphAxis', 'dataTable']
            },
            {
                id: 'nuclear_physics',
                label: 'Nuclear Physics',
                description: 'Radioactive decay types, half-life, nuclear equations, binding energy, fission, and fusion',
                diagramRequired: false,
                workingSpace: 'box',
                typicalSection: 'questionSectionBPage',
                componentHints: ['calculationWorkingBox', 'dataTable', 'blankAnswerLines']
            },
            {
                id: 'electromagnetism',
                label: 'Electromagnetism',
                description: 'Magnetic field patterns, motor effect, electromagnetic induction, transformers, and generators',
                diagramRequired: true,
                workingSpace: 'box',
                typicalSection: 'questionSectionBPage',
                componentHints: ['diagramSpace', 'labelledDiagram', 'calculationWorkingBox']
            },
            {
                id: 'pressure_and_moments',
                label: 'Pressure & Moments',
                description: 'Pressure in fluids, atmospheric pressure, moments, torques, and conditions for equilibrium',
                diagramRequired: true,
                workingSpace: 'box',
                typicalSection: 'questionSectionAPage',
                componentHints: ['diagramSpace', 'calculationWorkingBox', 'vectorDiagramSpace']
            },
            {
                id: 'thermal_physics',
                label: 'Thermal Physics',
                description: 'Temperature scales, specific heat capacity, latent heat, gas laws, and thermal expansion',
                diagramRequired: false,
                workingSpace: 'box',
                typicalSection: 'questionSectionBPage',
                componentHints: ['calculationWorkingBox', 'dataTable', 'graphAxis']
            },
            {
                id: 'optics_ray_diagrams',
                label: 'Optics (Ray Diagrams)',
                description: 'Reflection, refraction, total internal reflection, lenses, and ray diagram construction',
                diagramRequired: true,
                workingSpace: 'box',
                typicalSection: 'questionSectionBPage',
                componentHints: ['rayDiagramSpace', 'labelledDiagram', 'calculationWorkingBox']
            }
        ],

        mathematics: [
            {
                id: 'algebra_equations',
                label: 'Algebra & Equations',
                description: 'Simplifying expressions, solving linear and simultaneous equations, and algebraic manipulation',
                diagramRequired: false,
                workingSpace: 'lines',
                typicalSection: 'questionSectionAPage',
                componentHints: ['blankAnswerLines', 'calculationWorkingBox', 'markAllocation']
            },
            {
                id: 'quadratic_equations',
                label: 'Quadratic Equations',
                description: 'Factorisation, completing the square, quadratic formula, and graphical interpretation',
                diagramRequired: false,
                workingSpace: 'box',
                typicalSection: 'questionSectionBPage',
                componentHints: ['calculationWorkingBox', 'coordinatePlaneBox', 'blankAnswerLines']
            },
            {
                id: 'trigonometry',
                label: 'Trigonometry',
                description: 'SOH-CAH-TOA, sine rule, cosine rule, trigonometric identities, and bearings',
                diagramRequired: true,
                workingSpace: 'box',
                typicalSection: 'questionSectionBPage',
                componentHints: ['calculationWorkingBox', 'diagramSpace', 'geometricConstructionSpace']
            },
            {
                id: 'geometry_and_mensuration',
                label: 'Geometry & Mensuration',
                description: 'Areas, volumes, angle properties, circle theorems, and geometric proofs',
                diagramRequired: true,
                workingSpace: 'box',
                typicalSection: 'questionSectionBPage',
                componentHints: ['geometricConstructionSpace', 'calculationWorkingBox', 'gridPaperBox']
            },
            {
                id: 'statistics_and_probability',
                label: 'Statistics & Probability',
                description: 'Mean, median, mode, range, frequency distributions, tree diagrams, and probability calculations',
                diagramRequired: false,
                workingSpace: 'box',
                typicalSection: 'questionSectionBPage',
                componentHints: ['dataTable', 'probabilityTreeSpace', 'calculationWorkingBox', 'graphAxis']
            },
            {
                id: 'vectors_and_matrices',
                label: 'Vectors & Matrices',
                description: 'Vector addition, scalar multiplication, matrix operations, transformations, and determinants',
                diagramRequired: true,
                workingSpace: 'box',
                typicalSection: 'questionSectionBPage',
                componentHints: ['matrixWorkingBox', 'coordinatePlaneBox', 'calculationWorkingBox']
            },
            {
                id: 'calculus_differentiation',
                label: 'Calculus — Differentiation',
                description: 'First principles, differentiation rules, stationary points, tangents, and normals',
                diagramRequired: false,
                workingSpace: 'box',
                typicalSection: 'questionSectionCPage',
                componentHints: ['calculusWorkingBox', 'coordinatePlaneBox', 'blankAnswerLines']
            },
            {
                id: 'calculus_integration',
                label: 'Calculus — Integration',
                description: 'Indefinite and definite integrals, area under a curve, and integration techniques',
                diagramRequired: true,
                workingSpace: 'box',
                typicalSection: 'questionSectionCPage',
                componentHints: ['calculusWorkingBox', 'coordinatePlaneBox', 'calculationWorkingBox']
            },
            {
                id: 'number_and_arithmetic',
                label: 'Number & Arithmetic',
                description: 'BODMAS, fractions, decimals, percentages, indices, standard form, and surds',
                diagramRequired: false,
                workingSpace: 'lines',
                typicalSection: 'questionSectionAPage',
                componentHints: ['blankAnswerLines', 'calculationWorkingBox', 'markAllocation']
            },
            {
                id: 'sequences_and_series',
                label: 'Sequences & Series',
                description: 'Arithmetic and geometric sequences, nth-term formulae, sum of series, and proof by induction',
                diagramRequired: false,
                workingSpace: 'box',
                typicalSection: 'questionSectionCPage',
                componentHints: ['calculationWorkingBox', 'proofScaffoldBox', 'blankAnswerLines']
            }
        ]

    }; // end subjectProblemTypes



        // ── Core resolver ─────────────────────────────────────────────────────
    /**
     * Deep-merges BasePages[pageKey] with SubjectOverrides[subject][pageKey].
     *
     * Merge rules:
     *   • Scalar fields (strings, booleans, numbers) : override wins.
     *   • examples                                   : replaced by subject examples.
     *   • insets                                     : base + override concatenated, deduped.
     *   • componentOptionsAdditions                  : appended to base componentOptions.
     *   • questionFormatsAdditions                   : appended to base questionFormats.
     *   • defaultOptions                             : shallow-merged (override patches base).
     *
     * @param {string} subject  'chemistry' | 'biology' | 'physics' | 'mathematics'
     * @param {string} pageKey  one of supportedPageKeys
     * @returns {object}        fully resolved page definition
     */
    



    // ── Subject-level helpers ─────────────────────────────────────────────

    /** Returns all resolved pages for a given subject.
     *  Delegates to getPage(), which is patched in by subjectOverrides.js. */
    static getAllPagesForSubject(subject) {
        this._assertSubject(subject);
        return this.supportedPageKeys.reduce((acc, key) => {
            acc[key] = this.getPage(subject, key);
            return acc;
        }, {});
    }

    /** Returns resolved question sections only (excludes cover, closing, config) */
    static getQuestionSections(subject) {
        this._assertSubject(subject);
        return ['questionSectionAPage', 'questionSectionBPage', 'questionSectionCPage']
            .reduce((acc, key) => {
                acc[key] = this.getPage(subject, key);
                return acc;
            }, {});
    }

    /** Returns all inset types available for a subject across all pages */
    static getInsetTypesForSubject(subject) {
        this._assertSubject(subject);
        const insets = new Set();
        this.supportedPageKeys.forEach(key => {
            const page = this.getPage(subject, key);
            (page.insets ?? []).forEach(i => insets.add(i));
        });
        return Array.from(insets);
    }

    /** Returns all componentOptions available for a subject across all pages */
    static getComponentOptionsForSubject(subject) {
        this._assertSubject(subject);
        const components = new Set();
        this.supportedPageKeys.forEach(key => {
            const page = this.getPage(subject, key);
            (page.componentOptions ?? []).forEach(c => components.add(c));
        });
        return Array.from(components);
    }

    /** Returns all problem types registered for a given subject */
    static getProblemTypesForSubject(subject) {
        this._assertSubject(subject);
        return this.subjectProblemTypes[subject] ?? [];
    }

    /** Returns a single problem type definition by id for a given subject */
    static getProblemTypeById(subject, problemTypeId) {
        this._assertSubject(subject);
        const found = (this.subjectProblemTypes[subject] ?? [])
            .find(pt => pt.id === problemTypeId);
        if (!found) {
            throw new Error(
                `Unknown problem type "${problemTypeId}" for subject "${subject}".`
            );
        }
        return found;
    }

    /** Returns all problem types whose typicalSection matches the given page key */
    static getProblemTypesBySection(subject, pageKey) {
        this._assertSubject(subject);
        this._assertPageKey(pageKey);
        return (this.subjectProblemTypes[subject] ?? [])
            .filter(pt => pt.typicalSection === pageKey);
    }

    /** Returns all problem types that require a diagram for the given subject */
    static getDiagramProblemTypes(subject) {
        this._assertSubject(subject);
        return (this.subjectProblemTypes[subject] ?? [])
            .filter(pt => pt.diagramRequired === true);
    }


    // ── Cross-subject helpers ─────────────────────────────────────────────

    /** Returns the same page resolved for every subject — useful for comparisons */
    static getPageAcrossSubjects(pageKey) {
        this._assertPageKey(pageKey);
        return this.supportedSubjects.reduce((acc, subject) => {
            acc[subject] = this.getPage(subject, pageKey);
            return acc;
        }, {});
    }

    /**
     * Finds subject-specific insets that are NOT in the base — i.e. the unique
     * specialist inserts each subject contributes.
     */
    static getSpecialistInsets(subject) {
        this._assertSubject(subject);
        const specialist = new Set();
        this.supportedPageKeys.forEach(key => {
            const baseInsets     = new Set(BasePages[key].insets ?? []);
            const resolvedInsets = this.getPage(subject, key).insets ?? [];
            resolvedInsets.forEach(i => {
                if (!baseInsets.has(i)) specialist.add(i);
            });
        });
        return Array.from(specialist);
    }

    /**
     * Finds specialist componentOptions each subject contributes beyond the base.
     */
    static getSpecialistComponents(subject) {
        this._assertSubject(subject);
        const specialist = new Set();
        this.supportedPageKeys.forEach(key => {
            const baseSet  = new Set(BasePages[key].componentOptions ?? []);
            const resolved = this.getPage(subject, key).componentOptions ?? [];
            resolved.forEach(c => {
                if (!baseSet.has(c)) specialist.add(c);
            });
        });
        return Array.from(specialist);
    }

    /**
     * Search across all subjects and page keys.
     * Returns { subject: { pageKey: resolvedPage } } for any match.
     */
    static searchPages(query) {
        const q = query.toLowerCase();
        const results = {};
        this.supportedSubjects.forEach(subject => {
            this.supportedPageKeys.forEach(key => {
                const page = this.getPage(subject, key);
                const hit  =
                    page.name.toLowerCase().includes(q)                            ||
                    page.description.toLowerCase().includes(q)                     ||
                    page.subject.toLowerCase().includes(q)                         ||
                    key.toLowerCase().includes(q)                                  ||
                    (page.examples ?? []).some(ex => ex.toLowerCase().includes(q)) ||
                    (page.insets   ?? []).some(i  => i.toLowerCase().includes(q));
                if (hit) {
                    if (!results[subject]) results[subject] = {};
                    results[subject][key] = page;
                }
            });
        });
        return results;
    }

    /** Returns required drawingSteps for a given subject + page */
    static getRequiredSteps(subject, pageKey) {
        return (this.getPage(subject, pageKey).drawingSteps ?? [])
            .filter(s => s.required === true);
    }

    /** Returns optional drawingSteps for a given subject + page */
    static getOptionalSteps(subject, pageKey) {
        return (this.getPage(subject, pageKey).drawingSteps ?? [])
            .filter(s => s.required === false);
    }

    /** Returns assembly status across all pages for a subject */
    static getPaperStatus(subject) {
        this._assertSubject(subject);
        return this.supportedPageKeys.reduce((acc, key) => {
            const page = this.getPage(subject, key);
            acc[key] = {
                name: page.name,
                pageType: page.pageType,
                pageStatus: page.defaultOptions.pageStatus,
                requiredFieldsMet: page.dataRequired.length === 0
            };
            return acc;
        }, {});
    }


    // ── Registry-level stats ──────────────────────────────────────────────

    static getTotalSubjectCount()  { return this.supportedSubjects.length; }
    static getTotalPageTypeCount() { return this.supportedPageKeys.length; }
    static getTotalResolvable()    { return this.getTotalSubjectCount() * this.getTotalPageTypeCount(); }

    static printSummary() {
        console.log('=== EXAMINATION PAPER REGISTRY SUMMARY ===');
        console.log(`Subjects:            ${this.getTotalSubjectCount()}  (${this.supportedSubjects.join(', ')})`);
        console.log(`Page types:          ${this.getTotalPageTypeCount()}`);
        console.log(`Total resolvable:    ${this.getTotalResolvable()} pages`);
        console.log('');

        this.supportedSubjects.forEach(subject => {
            console.log(`── ${subject.toUpperCase()} ──`);
            console.log(`   Specialist insets:     ${this.getSpecialistInsets(subject).join(', ')}`);
            console.log(`   Specialist components: ${this.getSpecialistComponents(subject).join(', ')}`);
            const ptCount = (this.subjectProblemTypes[subject] ?? []).length;
            console.log(`   Problem types:         ${ptCount}`);
            console.log('');
            this.supportedPageKeys.forEach(key => {
                const page = this.getPage(subject, key);
                const req  = (page.drawingSteps ?? []).filter(s =>  s.required).length;
                const opt  = (page.drawingSteps ?? []).filter(s => !s.required).length;
                const ins  = (page.insets ?? []).length;
                const com  = (page.componentOptions ?? []).length;
                console.log(
                    `   ${key.padEnd(28)} ` +
                    `components:${String(com).padStart(3)}  ` +
                    `insets:${String(ins).padStart(3)}  ` +
                    `steps(req/opt): ${req}/${opt}`
                );
            });
            console.log('');
        });
    }


    // ── Private guards ────────────────────────────────────────────────────

    static _assertSubject(subject) {
        if (!this.supportedSubjects.includes(subject)) {
            throw new Error(
                `Unknown subject "${subject}". ` +
                `Supported: ${this.supportedSubjects.join(', ')}`
            );
        }
    }

    static _assertPageKey(pageKey) {
        if (!this.supportedPageKeys.includes(pageKey)) {
            throw new Error(
                `Unknown page key "${pageKey}". ` +
                `Supported: ${this.supportedPageKeys.join(', ')}`
            );
        }
    }
}

export { ExaminationPaperRegistry };
