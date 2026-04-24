// ============================================================
// LESSON PROCESSING SYSTEM
// EnhancedMolecularBiologyWorkbook — patch file
//
// Add all methods below into the EnhancedMolecularBiologyWorkbook
// class body, and update handleMolecularProblem as shown at the
// bottom of this file.
// ============================================================


// ─────────────────────────────────────────────────────────────
// SECTION 1 — LESSON FIELD REGISTRY
//
// Defines every top-level key that can appear in a lesson object
// and the category it belongs to.  Used by:
//   • getLessonFields()     — enumerate available fields
//   • parseLessonRequest()  — validate requested fields
//   • extractLessonFields() — pull only the requested subset
// ─────────────────────────────────────────────────────────────

initializeLessonFieldRegistry() {
    // Each entry: fieldKey → { category, description, resolvesDatabase }
    // resolvesDatabase: true means this field references databaseLinks /
    // conceptLinks and should be resolved before being returned.
    this.lessonFieldRegistry = {

        // ── Identity / navigation ────────────────────────────────────
        title:              { category: 'identity',    description: 'Lesson title string' },
        databaseLinks:      { category: 'navigation',  description: 'Keys into misconceptions, scenarios, studyTips, rubrics, and assessment databases', resolvesDatabase: true },
        conceptLinks:       { category: 'navigation',  description: 'Per-concept maps into all four databases', resolvesDatabase: true },

        // ── Introduction block ───────────────────────────────────────
        topicIntroduction:  { category: 'introduction', description: 'Overview, whyItMatters, bigPicture, priorKnowledge, topicRoadmap' },

        // ── Core content ─────────────────────────────────────────────
        concepts:           { category: 'core',        description: 'Array of core concept statements' },
        theory:             { category: 'core',        description: 'Narrative theoretical background' },
        keyDefinitions:     { category: 'core',        description: 'Glossary object { term: definition }' },

        // ── Lesson-specific domain objects ───────────────────────────
        // These vary by lesson.  The registry lists common ones;
        // extractLessonFields() passes unknown keys through unchanged.
        cellStructureComparison:  { category: 'domain', description: 'Prokaryote vs eukaryote structural table' },
        plasmaMembrane:           { category: 'domain', description: 'Fluid mosaic model and membrane protein detail' },
        membraneTransport:        { category: 'domain', description: 'All transport modes with mechanisms' },
        cellCycle:                { category: 'domain', description: 'Interphase, mitosis phases, checkpoints, cancer link' },
        cellSignalling:           { category: 'domain', description: 'Signal types, receptors, second messengers' },
        dnaStructure:             { category: 'domain', description: 'Base pairing, double helix, histones' },
        dnaReplication:           { category: 'domain', description: 'Semi-conservative mechanism, enzymes, fidelity' },
        transcription:            { category: 'domain', description: 'RNA polymerase, steps, eukaryotic processing' },
        geneticCode:              { category: 'domain', description: 'Codon properties and key codons' },
        translation:              { category: 'domain', description: 'Ribosome, steps, tRNA' },
        geneRegulation:           { category: 'domain', description: 'lac operon, eukaryotic control, levels' },
        mutations:                { category: 'domain', description: 'Mutation types, causes, repair' },
        biotechnologyApplications:{ category: 'domain', description: 'PCR, gel electrophoresis, CRISPR, recombinant DNA' },

        // ── Applied / synthesis ──────────────────────────────────────
        applications:       { category: 'applied',     description: 'Real-world application bullet list' },
        topicSummary:       { category: 'synthesis',   description: 'coreInsights, keyEquations, commonMistakesToAvoid, connections, examReadinessChecklist' },
    };

    // Convenience: fields that belong to the introduction sub-object
    this.introductionSubFields = [
        'overview', 'whyItMatters', 'bigPicture', 'priorKnowledge', 'topicRoadmap'
    ];

    // Convenience: fields that belong to the topicSummary sub-object
    this.summarySubFields = [
        'coreInsights', 'keyEquations', 'commonMistakesToAvoid', 'connections', 'examReadinessChecklist'
    ];
}


// ─────────────────────────────────────────────────────────────
// SECTION 2 — LESSON IDENTIFICATION HELPERS
// ─────────────────────────────────────────────────────────────

/**
 * Return all registered lesson keys.
 */
getAvailableLessons() {
    return Object.keys(this.lessons);
}

/**
 * Resolve a lesson key from a free-text topic string.
 * Tries exact match, then case-insensitive, then substring.
 *
 * @param {string} topic
 * @returns {string|null} lesson key or null
 */
resolveLessonKey(topic) {
    if (!topic) return null;
    const t = topic.trim();

    // 1. Exact match
    if (this.lessons[t]) return t;

    // 2. Case-insensitive exact
    const lower = t.toLowerCase();
    for (const key of Object.keys(this.lessons)) {
        if (key.toLowerCase() === lower) return key;
    }

    // 3. Title match (lesson.title contains the search term)
    for (const [key, lesson] of Object.entries(this.lessons)) {
        if (lesson.title && lesson.title.toLowerCase().includes(lower)) return key;
    }

    // 4. Substring key match
    for (const key of Object.keys(this.lessons)) {
        if (key.toLowerCase().includes(lower) || lower.includes(key.toLowerCase())) return key;
    }

    return null;
}

/**
 * Return the list of all valid field keys for a given lesson key,
 * combining registry keys with any extra domain keys actually
 * present in that lesson.
 *
 * @param {string} lessonKey
 * @returns {string[]}
 */
getLessonFields(lessonKey) {
    const lesson = this.lessons[lessonKey];
    if (!lesson) return [];

    const registered = new Set(Object.keys(this.lessonFieldRegistry));
    const present    = new Set(Object.keys(lesson));

    // Union: everything in the registry that is present + anything
    // extra that is present but not in the registry (domain-specific keys)
    const all = new Set([...present].filter(k => registered.has(k) || present.has(k)));
    return [...all];
}


// ─────────────────────────────────────────────────────────────
// SECTION 3 — DATABASE RESOLUTION
//
// databaseLinks and conceptLinks reference keys in:
//   this.commonMisconceptions
//   this.contextualScenarios
//   this.studyTips           (keyed by lesson, then by tip category)
//   this.assessmentRubrics
//   this.assessmentQuestions
//
// resolveDatabase* methods hydrate those references into actual
// content objects so callers receive self-contained data.
// ─────────────────────────────────────────────────────────────

/**
 * Hydrate a lesson's databaseLinks object.
 * Returns an object with fully resolved arrays/objects for each
 * database category listed in databaseLinks.
 *
 * @param {string}   lessonKey
 * @param {object}   databaseLinks  — as stored in the lesson
 * @param {string[]} [only]         — optional subset of db categories
 * @returns {object}
 */
resolveDatabaseLinks(lessonKey, databaseLinks, only = null) {
    const resolved = {};

    const categories = only
        ? Object.keys(databaseLinks).filter(k => only.includes(k))
        : Object.keys(databaseLinks);

    for (const category of categories) {
        const keys = databaseLinks[category];

        switch (category) {

            case 'misconceptions':
                resolved.misconceptions = this._resolveFromMisconceptions(keys);
                break;

            case 'contextualScenarios':
                resolved.contextualScenarios = this._resolveFromScenarios(keys);
                break;

            case 'studyTips':
                resolved.studyTips = this._resolveFromStudyTips(lessonKey, keys);
                break;

            case 'assessmentRubrics':
                resolved.assessmentRubrics = this._resolveFromRubrics(lessonKey, keys);
                break;

            case 'assessmentQuestions':
                resolved.assessmentQuestions = this._resolveFromQuestions(keys);
                break;

            default:
                // Pass unknown categories through unchanged
                resolved[category] = keys;
        }
    }

    return resolved;
}

/**
 * Hydrate a lesson's conceptLinks object.
 * Returns an object keyed by concept statement; each value
 * contains resolved database content for that concept.
 *
 * @param {string}   lessonKey
 * @param {object}   conceptLinks
 * @param {string[]} [concepts]   — optional filter to specific concepts
 * @param {string[]} [dbCats]     — optional filter to specific db categories
 * @returns {object}
 */
resolveConceptLinks(lessonKey, conceptLinks, concepts = null, dbCats = null) {
    const resolved = {};

    const conceptStatements = concepts
        ? Object.keys(conceptLinks).filter(c =>
            concepts.some(q => c.toLowerCase().includes(q.toLowerCase()))
          )
        : Object.keys(conceptLinks);

    for (const concept of conceptStatements) {
        const links = conceptLinks[concept];
        resolved[concept] = this.resolveDatabaseLinks(lessonKey, links, dbCats);
    }

    return resolved;
}

// ── Private resolution helpers ────────────────────────────────

_resolveFromMisconceptions(keys) {
    if (!this.commonMisconceptions) return {};
    const result = {};
    for (const key of keys) {
        if (this.commonMisconceptions[key]) {
            result[key] = this.commonMisconceptions[key];
        }
    }
    return result;
}

_resolveFromScenarios(keys) {
    if (!this.contextualScenarios) return {};
    const result = {};
    for (const key of keys) {
        if (this.contextualScenarios[key]) {
            result[key] = this.contextualScenarios[key];
        }
    }
    return result;
}

_resolveFromStudyTips(lessonKey, tipKeys) {
    // studyTips is keyed first by lesson, then by tip category
    if (!this.studyTips) return {};

    // Try lesson-keyed first, then fall back to a flat lookup
    const lessonTips = this.studyTips[lessonKey] || this.studyTips;
    const result = {};

    for (const key of tipKeys) {
        if (lessonTips[key] !== undefined) {
            result[key] = lessonTips[key];
        }
    }
    return result;
}

_resolveFromRubrics(lessonKey, rubricKeys) {
    if (!this.assessmentRubrics) return {};

    // Try lesson-keyed rubric first
    const rubricSource = this.assessmentRubrics[lessonKey] || this.assessmentRubrics;
    const result = {};

    // rubricKeys is an array of level names like ['remember', 'understand', ...]
    // Support both knowledgeLevel sub-object and top-level level keys
    const levelSource = rubricSource.knowledgeLevel || rubricSource;

    for (const key of rubricKeys) {
        if (levelSource[key] !== undefined) {
            result[key] = levelSource[key];
        }
    }

    // Also include understandingLevels if present and key matches
    if (rubricSource.understandingLevels) {
        result._understandingLevels = rubricSource.understandingLevels;
    }

    return result;
}

_resolveFromQuestions(keys) {
    if (!this.assessmentQuestions) return {};
    const result = {};
    for (const key of keys) {
        if (this.assessmentQuestions[key]) {
            result[key] = this.assessmentQuestions[key];
        }
    }
    return result;
}


// ─────────────────────────────────────────────────────────────
// SECTION 4 — FIELD EXTRACTION
//
// extractLessonFields() is the core of the filtering system.
// It accepts a lesson object and a request specification and
// returns only the requested content.
// ─────────────────────────────────────────────────────────────

/**
 * Extract a subset of fields from a resolved lesson object.
 *
 * @param {string}   lessonKey  — key into this.lessons
 * @param {object}   options
 *   fields            {string[]}  top-level lesson field names to include
 *                                 (omit or pass null/[] for all fields)
 *   introSubFields    {string[]}  sub-fields of topicIntroduction
 *   summarySubFields  {string[]}  sub-fields of topicSummary
 *   concepts          {string[]}  concept statements to filter (substring match)
 *   dbCategories      {string[]}  database categories to resolve
 *                                 (e.g. ['misconceptions', 'studyTips'])
 *   resolveDatabase   {boolean}   hydrate databaseLinks / conceptLinks
 *                                 (default true)
 *
 * @returns {object}  A self-contained lesson content object.
 */
extractLessonFields(lessonKey, options = {}) {
    const lesson = this.lessons[lessonKey];
    if (!lesson) {
        throw new Error(`Lesson not found: "${lessonKey}". ` +
            `Available lessons: ${this.getAvailableLessons().join(', ')}`);
    }

    const {
        fields         = null,
        introSubFields = null,
        summarySubFields: summaryFields = null,
        concepts       = null,
        dbCategories   = null,
        resolveDatabase = true,
    } = options;

    // Determine which top-level fields to include
    const wantedFields = (fields && fields.length > 0)
        ? fields
        : Object.keys(lesson);     // all fields when no filter specified

    const result = {
        _lessonKey: lessonKey,
        _requestedFields: wantedFields,
    };

    for (const field of wantedFields) {
        if (!(field in lesson)) continue;   // silently skip absent fields

        switch (field) {

            // ── Fields that resolve against databases ────────────────
            case 'databaseLinks':
                if (resolveDatabase) {
                    result.databaseLinks = this.resolveDatabaseLinks(
                        lessonKey, lesson.databaseLinks, dbCategories
                    );
                } else {
                    result.databaseLinks = lesson.databaseLinks;
                }
                break;

            case 'conceptLinks':
                if (resolveDatabase) {
                    result.conceptLinks = this.resolveConceptLinks(
                        lessonKey, lesson.conceptLinks, concepts, dbCategories
                    );
                } else {
                    // Return raw links, optionally filtered by concept
                    if (concepts && concepts.length > 0) {
                        result.conceptLinks = {};
                        for (const [concept, links] of Object.entries(lesson.conceptLinks)) {
                            if (concepts.some(q => concept.toLowerCase().includes(q.toLowerCase()))) {
                                result.conceptLinks[concept] = links;
                            }
                        }
                    } else {
                        result.conceptLinks = lesson.conceptLinks;
                    }
                }
                break;

            // ── Introduction: support sub-field selection ────────────
            case 'topicIntroduction':
                if (introSubFields && introSubFields.length > 0) {
                    result.topicIntroduction = {};
                    for (const sub of introSubFields) {
                        if (lesson.topicIntroduction[sub] !== undefined) {
                            result.topicIntroduction[sub] = lesson.topicIntroduction[sub];
                        }
                    }
                } else {
                    result.topicIntroduction = lesson.topicIntroduction;
                }
                break;

            // ── concepts: support filtering by concept text ──────────
            case 'concepts':
                if (concepts && concepts.length > 0) {
                    result.concepts = lesson.concepts.filter(c =>
                        concepts.some(q => c.toLowerCase().includes(q.toLowerCase()))
                    );
                } else {
                    result.concepts = lesson.concepts;
                }
                break;

            // ── Summary: support sub-field selection ─────────────────
            case 'topicSummary':
                if (summaryFields && summaryFields.length > 0) {
                    result.topicSummary = {};
                    for (const sub of summaryFields) {
                        if (lesson.topicSummary[sub] !== undefined) {
                            result.topicSummary[sub] = lesson.topicSummary[sub];
                        }
                    }
                } else {
                    result.topicSummary = lesson.topicSummary;
                }
                break;

            // ── All other fields: pass through unchanged ─────────────
            default:
                result[field] = lesson[field];
        }
    }

    return result;
}


// ─────────────────────────────────────────────────────────────
// SECTION 5 — LESSON REQUEST PARSER
//
// Mirrors parseMolecularProblem() but for lesson requests.
// Converts a free-text topic + options bag into a normalised
// config that processLesson() and handleLessonRequest() can use.
// ─────────────────────────────────────────────────────────────

/**
 * Parse a lesson request into a normalised config object.
 *
 * @param {string} topic     — lesson name / key / substring
 * @param {object} options   — same shape as extractLessonFields options,
 *                             plus requestType / context
 * @returns {object}
 */
parseLessonRequest(topic, options = {}) {
    const lessonKey = this.resolveLessonKey(topic);

    if (!lessonKey) {
        const available = this.getAvailableLessons().join(', ');
        throw new Error(
            `Cannot resolve lesson from topic: "${topic}". ` +
            `Available lessons: ${available}`
        );
    }

    const lesson = this.lessons[lessonKey];

    // Validate requested fields against available fields
    const availableFields = this.getLessonFields(lessonKey);
    const requestedFields = options.fields || [];

    const invalidFields = requestedFields.filter(f => !availableFields.includes(f));
    if (invalidFields.length > 0) {
        console.warn(
            `[LessonProcessor] Unknown field(s) for "${lessonKey}": ${invalidFields.join(', ')}. ` +
            `Available: ${availableFields.join(', ')}`
        );
    }

    return {
        lessonKey,
        lessonTitle: lesson.title,
        requestedFields: requestedFields.filter(f => availableFields.includes(f)),
        introSubFields:    options.introSubFields    || null,
        summarySubFields:  options.summarySubFields  || null,
        concepts:          options.concepts          || null,
        dbCategories:      options.dbCategories      || null,
        resolveDatabase:   options.resolveDatabase   !== false,   // default true
        context:           options.context           || {},
        parsedAt:          new Date().toISOString(),
    };
}


// ─────────────────────────────────────────────────────────────
// SECTION 6 — LESSON CONTENT PROCESSOR
//
// processLesson() is the high-level entry point, analogous to
// getMolecularContent() for topics and generateExperimentContent()
// for experiments.
// ─────────────────────────────────────────────────────────────

/**
 * Process a lesson request and return enriched, filtered content.
 *
 * @param {object} config  — output of parseLessonRequest()
 * @returns {object}       — resolved, filtered lesson content
 */
processLesson(config) {
    const {
        lessonKey,
        requestedFields,
        introSubFields,
        summarySubFields,
        concepts,
        dbCategories,
        resolveDatabase,
    } = config;

    // 1. Extract (and optionally resolve) the requested fields
    const content = this.extractLessonFields(lessonKey, {
        fields:          requestedFields.length > 0 ? requestedFields : null,
        introSubFields,
        summarySubFields,
        concepts,
        dbCategories,
        resolveDatabase,
    });

    // 2. Attach adaptive learning enrichments (same as topic flow)
    if (this.adaptiveDifficulty) {
        content._learnerProfile = { ...this.learnerProfile };
    }

    if (this.metacognitiveSupport && !content.conceptLinks) {
        // Only add standalone prompts when conceptLinks wasn't requested
        // (conceptLinks already embeds scenario/misconception data)
        content._metacognitivePrompts = this.getMetacognitivePrompts(lessonKey);
    }

    // 3. Tag the result for workbook generation
    content._sourceType = 'lesson';
    content._lessonKey  = lessonKey;

    return content;
}


// ─────────────────────────────────────────────────────────────
// SECTION 7 — LESSON REQUEST HANDLER
//
// handleLessonRequest() is the public-facing method that mirrors
// handleExperimentRequest().  It is wired into handleMolecularProblem().
// ─────────────────────────────────────────────────────────────

/**
 * Handle a lesson-type request end-to-end.
 *
 * @param {object} config
 *   topic          {string}    lesson name / key
 *   fields         {string[]}  optional field filter
 *   introSubFields {string[]}  optional intro sub-field filter
 *   summarySubFields {string[]} optional summary sub-field filter
 *   concepts       {string[]}  optional concept filter
 *   dbCategories   {string[]}  optional database-category filter
 *   resolveDatabase {boolean}  hydrate database refs (default true)
 *   context        {object}    arbitrary caller context
 *
 * @returns {object}
 *   { lessonConfig, content, workbook, getDiagrams }
 */
handleLessonRequest(config) {
    const {
        topic,
        fields,
        introSubFields,
        summarySubFields,
        concepts,
        dbCategories,
        resolveDatabase,
        context,
    } = config;

    // 1. Parse + validate
    const lessonConfig = this.parseLessonRequest(topic, {
        fields,
        introSubFields,
        summarySubFields,
        concepts,
        dbCategories,
        resolveDatabase,
        context,
    });

    // 2. Process content
    const content = this.processLesson(lessonConfig);

    // 3. Generate workbook (non-blocking; same pattern as molecular topics)
    this.generateLessonWorkbook(lessonConfig, content);

    // 4. Return consolidated result
    return {
        lessonConfig,
        content,
        workbook:    this.currentWorkbook,
        getDiagrams: () => this.waitForDiagrams(),
    };
}


// ─────────────────────────────────────────────────────────────
// SECTION 8 — LESSON WORKBOOK GENERATION
// ─────────────────────────────────────────────────────────────

/**
 * Build this.currentWorkbook for a lesson request.
 * Produces sections only for the fields that were actually returned
 * in `content`, so a filtered request produces a lean workbook.
 *
 * @param {object} lessonConfig  — from parseLessonRequest()
 * @param {object} content       — from processLesson()
 */
generateLessonWorkbook(lessonConfig, content) {
    const workbook = this.createWorkbookStructure();
    workbook.title = `${content.title || lessonConfig.lessonTitle} — Lesson Workbook`;

    const sections = [];

    // ── Title block ──────────────────────────────────────────────────────
    sections.push({
        title:  'Lesson Overview',
        type:   'header',
        data:   [
            ['Lesson',          content.title || lessonConfig.lessonTitle],
            ['Fields included', lessonConfig.requestedFields.length > 0
                ? lessonConfig.requestedFields.join(', ')
                : 'All fields'],
        ],
    });

    // ── topicIntroduction ────────────────────────────────────────────────
    if (content.topicIntroduction) {
        const intro = content.topicIntroduction;
        const rows  = [];

        if (intro.overview)       rows.push(['Overview',       intro.overview]);
        if (intro.whyItMatters)   rows.push(['Why It Matters', intro.whyItMatters]);
        if (intro.bigPicture)     rows.push(['Big Picture',    intro.bigPicture]);
        if (intro.priorKnowledge) {
            rows.push(['Prior Knowledge', '']);
            (intro.priorKnowledge).forEach(p => rows.push(['  •', p]));
        }
        if (intro.topicRoadmap) {
            rows.push(['Topic Roadmap', '']);
            (intro.topicRoadmap).forEach((step, i) => rows.push([`  ${i + 1}.`, step]));
        }

        if (rows.length > 0) {
            sections.push({ title: 'Introduction', type: 'introduction', data: rows });
        }
    }

    // ── concepts ─────────────────────────────────────────────────────────
    if (content.concepts) {
        sections.push({
            title: 'Core Concepts',
            type:  'concepts',
            data:  content.concepts.map((c, i) => [`${i + 1}.`, c]),
        });
    }

    // ── theory ───────────────────────────────────────────────────────────
    if (content.theory) {
        sections.push({
            title: 'Theory',
            type:  'theory',
            data:  [['', content.theory]],
        });
    }

    // ── keyDefinitions ───────────────────────────────────────────────────
    if (content.keyDefinitions) {
        sections.push({
            title: 'Key Definitions',
            type:  'definitions',
            data:  Object.entries(content.keyDefinitions).map(([term, def]) => [term, def]),
        });
    }

    // ── domain-specific lesson objects ───────────────────────────────────
    // Any field not handled above that is a plain object/array
    const handledFields = new Set([
        '_lessonKey', '_requestedFields', '_sourceType',
        '_learnerProfile', '_metacognitivePrompts',
        'title', 'databaseLinks', 'conceptLinks',
        'topicIntroduction', 'concepts', 'theory', 'keyDefinitions', 'topicSummary',
        'applications',
    ]);

    for (const [field, value] of Object.entries(content)) {
        if (handledFields.has(field)) continue;
        if (value === null || value === undefined) continue;

        const title = field
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, s => s.toUpperCase())
            .trim();

        sections.push({
            title,
            type:  'domain_content',
            data:  this._flattenDomainObject(value),
        });
    }

    // ── applications ─────────────────────────────────────────────────────
    if (content.applications) {
        sections.push({
            title: 'Applications',
            type:  'applications',
            data:  content.applications.map((a, i) => [`${i + 1}.`, a]),
        });
    }

    // ── topicSummary ─────────────────────────────────────────────────────
    if (content.topicSummary) {
        const s    = content.topicSummary;
        const rows = [];

        if (s.coreInsights) {
            rows.push(['Core Insights', '']);
            s.coreInsights.forEach((ins, i) => rows.push([`  ${i + 1}.`, ins]));
        }
        if (s.keyEquations) {
            rows.push(['Key Equations / Principles', '']);
            Object.entries(s.keyEquations).forEach(([k, v]) => rows.push([`  ${k}`, v]));
        }
        if (s.commonMistakesToAvoid) {
            rows.push(['Common Mistakes to Avoid', '']);
            s.commonMistakesToAvoid.forEach(m => rows.push(['  ✗', m]));
        }
        if (s.connections) {
            rows.push(['Connections to Other Topics', '']);
            s.connections.forEach(c => rows.push(['  ↔', c]));
        }
        if (s.examReadinessChecklist) {
            rows.push(['Exam Readiness Checklist', '']);
            s.examReadinessChecklist.forEach(q => rows.push(['  ☐', q]));
        }

        if (rows.length > 0) {
            sections.push({ title: 'Topic Summary', type: 'summary', data: rows });
        }
    }

    // ── resolved databaseLinks ───────────────────────────────────────────
    if (content.databaseLinks) {
        for (const [category, resolved] of Object.entries(content.databaseLinks)) {
            const catTitle = category
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, s => s.toUpperCase());

            sections.push({
                title: catTitle,
                type:  `database_${category}`,
                data:  this._flattenDomainObject(resolved),
            });
        }
    }

    // ── resolved conceptLinks ────────────────────────────────────────────
    if (content.conceptLinks) {
        for (const [concept, resolved] of Object.entries(content.conceptLinks)) {
            const rows = [['Concept', concept], ['', '']];
            for (const [category, data] of Object.entries(resolved)) {
                rows.push([category.toUpperCase(), '']);
                this._flattenDomainObject(data).forEach(row => rows.push(['  ' + row[0], row[1]]));
                rows.push(['', '']);
            }
            sections.push({
                title: `Concept Links — ${concept.slice(0, 60)}${concept.length > 60 ? '…' : ''}`,
                type:  'concept_links',
                data:  rows,
            });
        }
    }

    // ── metacognitive prompts ────────────────────────────────────────────
    if (content._metacognitivePrompts) {
        sections.push({
            title: 'Metacognitive Prompts',
            type:  'metacognitive',
            data:  this._flattenDomainObject(content._metacognitivePrompts),
        });
    }

    workbook.sections  = sections.filter(s => s !== null);
    this.currentWorkbook = workbook;
}

/**
 * Recursively flatten any JS object/array into [label, value] row pairs
 * suitable for a workbook section's `data` array.
 *
 * @param {*}      value
 * @param {number} depth  — current recursion depth (controls indentation)
 * @returns {Array<[string, string]>}
 */
_flattenDomainObject(value, depth = 0) {
    const indent = '  '.repeat(depth);
    const rows   = [];

    if (value === null || value === undefined) return rows;

    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        rows.push([indent, String(value)]);
        return rows;
    }

    if (Array.isArray(value)) {
        value.forEach((item, i) => {
            if (typeof item === 'string') {
                rows.push([`${indent}${i + 1}.`, item]);
            } else if (typeof item === 'object' && item !== null) {
                // Named objects (e.g. { name, description })
                const label = item.name || item.title || item.label || `Item ${i + 1}`;
                rows.push([`${indent}${label}`, '']);
                this._flattenDomainObject(item, depth + 1).forEach(r => rows.push(r));
            } else {
                rows.push([`${indent}${i + 1}.`, String(item)]);
            }
        });
        return rows;
    }

    if (typeof value === 'object') {
        for (const [key, val] of Object.entries(value)) {
            const label = key
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, s => s.toUpperCase())
                .trim();

            if (val === null || val === undefined) continue;

            if (typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean') {
                rows.push([`${indent}${label}`, String(val)]);
            } else {
                rows.push([`${indent}${label}`, '']);
                this._flattenDomainObject(val, depth + 1).forEach(r => rows.push(r));
            }
        }
    }

    return rows;
}


// ─────────────────────────────────────────────────────────────
// SECTION 9 — CONVENIENCE QUERY METHODS
//
// High-level "ask for exactly what you need" API.
// These wrap handleLessonRequest() with preset field lists
// so callers don't need to know internal field names.
// ─────────────────────────────────────────────────────────────

/** Return only the glossary for a lesson. */
getLessonDefinitions(lessonKey) {
    return this.handleLessonRequest({ topic: lessonKey, fields: ['title', 'keyDefinitions'] });
}

/** Return only core concepts + theory. */
getLessonCore(lessonKey) {
    return this.handleLessonRequest({ topic: lessonKey, fields: ['title', 'concepts', 'theory'] });
}

/** Return introduction block, optionally filtered to specific sub-fields. */
getLessonIntroduction(lessonKey, subFields = null) {
    return this.handleLessonRequest({
        topic:          lessonKey,
        fields:         ['title', 'topicIntroduction'],
        introSubFields: subFields,
    });
}

/** Return summary block, optionally filtered to specific sub-fields. */
getLessonSummary(lessonKey, subFields = null) {
        return this.handleLessonRequest({
        topic:           lessonKey,
        fields:          ['title', 'topicSummary'],
        summarySubFields: subFields,
    });
}

/** Return resolved databaseLinks for specific db categories only. */
getLessonDatabaseContent(lessonKey, dbCategories = null) {
    return this.handleLessonRequest({
        topic:        lessonKey,
        fields:       ['title', 'databaseLinks'],
        dbCategories,
    });
}

/** Return resolved conceptLinks, optionally filtered by concept text. */
getLessonConceptLinks(lessonKey, concepts = null, dbCategories = null) {
    return this.handleLessonRequest({
        topic:        lessonKey,
        fields:       ['title', 'conceptLinks'],
        concepts,
        dbCategories,
    });
}

/** Return misconceptions only (resolved from databaseLinks). */
getLessonMisconceptions(lessonKey) {
    return this.handleLessonRequest({
        topic:        lessonKey,
        fields:       ['title', 'databaseLinks'],
        dbCategories: ['misconceptions'],
    });
}

/** Return study tips only (resolved from databaseLinks). */
getLessonStudyTips(lessonKey) {
    return this.handleLessonRequest({
        topic:        lessonKey,
        fields:       ['title', 'databaseLinks'],
        dbCategories: ['studyTips'],
    });
}

/** Return assessment rubrics only. */
getLessonRubrics(lessonKey, levels = null) {
    return this.handleLessonRequest({
        topic:        lessonKey,
        fields:       ['title', 'databaseLinks'],
        dbCategories: ['assessmentRubrics'],
        // levels filtering is handled inside _resolveFromRubrics via dbCategories
    });
}


// ─────────────────────────────────────────────────────────────
// SECTION 10 — UPDATED handleMolecularProblem
//
// Replace the existing handleMolecularProblem() with this version.
// The only change is the addition of the lesson branch (marked ★).
// ─────────────────────────────────────────────────────────────

handleMolecularProblem(config) {
    const { topic, parameters, subTopic, context, requestType } = config;

    try {
        // ★ LESSON BRANCH — check before experiment / topic branches
        const isLessonRequest =
            requestType === 'lesson' ||
            (typeof topic === 'string' && this.resolveLessonKey(topic) !== null &&
             requestType !== 'experiment' && requestType !== 'topic');

        if (isLessonRequest) {
            return this.handleLessonRequest({
                topic,
                fields:           config.fields           || (parameters && parameters.fields)           || null,
                introSubFields:   config.introSubFields   || (parameters && parameters.introSubFields)   || null,
                summarySubFields: config.summarySubFields || (parameters && parameters.summarySubFields) || null,
                concepts:         config.concepts         || (parameters && parameters.concepts)         || null,
                dbCategories:     config.dbCategories     || (parameters && parameters.dbCategories)     || null,
                resolveDatabase:  config.resolveDatabase  !== undefined
                    ? config.resolveDatabase
                    : (parameters && parameters.resolveDatabase !== undefined
                        ? parameters.resolveDatabase
                        : true),
                context,
            });
        }

        // EXPERIMENT BRANCH — unchanged
        const isExperimentRequest =
            requestType === 'experiment' ||
            (typeof topic === 'string' && topic.toLowerCase().includes('experiment'));

        if (isExperimentRequest) {
            return this.handleExperimentRequest(config);
        }

        // TOPIC / MOLECULAR-CONTENT BRANCH — unchanged
        this.currentProblem = this.parseMolecularProblem(topic, parameters, subTopic, context);
        this.currentContent = this.getMolecularContent(this.currentProblem);

        if (this.adaptiveDifficulty) {
            this.currentContent = this.adaptContentDifficulty(
                this.currentContent, this.learnerProfile.currentLevel
            );
        }
        if (this.contextualLearning) {
            this.currentContent.contextualScenarios =
                this.getContextualScenarios(this.currentProblem.type);
        }
        if (this.includeExperiments) {
            this.currentContent.relatedExperiments =
                this.getRelatedExperiments(this.currentProblem.type);
        }
        if (this.metacognitiveSupport) {
            this.currentContent.metacognitivePrompts =
                this.getMetacognitivePrompts(this.currentProblem.type);
        }

        this.contentSteps = this.generateMolecularContent(
            this.currentProblem, this.currentContent
        );

        this.generateMolecularWorkbook();

        return {
            workbook:    this.currentWorkbook,
            content:     this.currentContent,
            steps:       this.contentSteps,
            diagrams:    this.diagramData,
            experiments: this.currentContent.relatedExperiments,
            learnerProfile: this.learnerProfile,
            getDiagrams: () => this.waitForDiagrams(),
        };

    } catch (error) {
        throw new Error(`Failed to process molecular biology request: ${error.message}`);
    }
}


// ─────────────────────────────────────────────────────────────
// SECTION 11 — CONSTRUCTOR ADDITIONS
//
// Add these two lines inside the constructor, after the existing
// this.initializeAssessmentRubrics() call:
//
//   this.initializeLessonFieldRegistry();
//
// (studyTips initialisation already exists as initializeStudyTips()
//  in the original code — ensure it is called in the constructor too.)
// ─────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────
// USAGE EXAMPLES
// ─────────────────────────────────────────────────────────────
//
// const wb = new EnhancedMolecularBiologyWorkbook();
//
// ── 1. Full lesson ────────────────────────────────────────────
// wb.handleMolecularProblem({ topic: 'cellBiology', requestType: 'lesson' });
//
// ── 2. Just definitions + concepts ───────────────────────────
// wb.handleMolecularProblem({
//     topic: 'cellBiology',
//     requestType: 'lesson',
//     fields: ['title', 'keyDefinitions', 'concepts'],
// });
//
// ── 3. Introduction — prior knowledge + roadmap only ─────────
// wb.handleMolecularProblem({
//     topic:          'molecularBiology',
//     requestType:    'lesson',
//     fields:         ['title', 'topicIntroduction'],
//     introSubFields: ['priorKnowledge', 'topicRoadmap'],
// });
//
// ── 4. Summary — exam checklist only ─────────────────────────
// wb.handleMolecularProblem({
//     topic:            'cellBiology',
//     requestType:      'lesson',
//     fields:           ['topicSummary'],
//     summarySubFields: ['examReadinessChecklist', 'commonMistakesToAvoid'],
// });
//
// ── 5. Misconceptions only ────────────────────────────────────
// wb.getLessonMisconceptions('cellBiology');
//
// ── 6. Study tips only ───────────────────────────────────────
// wb.getLessonStudyTips('molecularBiology');
//
// ── 7. Concept links for membrane transport concepts ──────────
// wb.getLessonConceptLinks(
//     'cellBiology',
//     ['membrane'],                      // concept filter (substring)
//     ['misconceptions', 'studyTips'],   // db category filter
// );
//
// ── 8. Specific domain object ────────────────────────────────
// wb.handleMolecularProblem({
//     topic:       'cellBiology',
//     requestType: 'lesson',
//     fields:      ['title', 'cellCycle', 'cellSignalling'],
// });
//
// ── 9. Rubrics for specific Bloom's levels ───────────────────
// wb.handleMolecularProblem({
//     topic:        'molecularBiology',
//     requestType:  'lesson',
//     fields:       ['title', 'databaseLinks'],
//     dbCategories: ['assessmentRubrics'],
// });
//
// ── 10. All three request types in sequence ───────────────────
// wb.handleMolecularProblem({ topic: 'carbohydrates',  requestType: 'topic'      });
// wb.handleMolecularProblem({ topic: 'prouts_classification', requestType: 'experiment' });
// wb.handleMolecularProblem({ topic: 'cellBiology',    requestType: 'lesson'     });
