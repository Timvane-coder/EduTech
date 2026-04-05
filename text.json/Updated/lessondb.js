/ 1. Add reference keys inside the enzyme lesson itself
// These tell the system which database entries belong to this lesson

enzymes: {
    title: "Enzyme Function and Kinetics: Biological Catalysis",

    // 1. Updated databaseLinks and conceptLinks inside the enzyme lesson

databaseLinks: {
    misconceptions: [
        'enzymeBasics',
        'enzymeKinetics',
        'enzymeInhibition',
        'enzymeRegulation',
        'temperatureAndPH'
    ],
    contextualScenarios: [
        'enzymeBasics',
        'enzymeKinetics',
        'enzymeInhibition',
        'enzymeRegulation'
    ],
    studyTips: [
        'diagrams',
        'comparisonTables',
        'specimens',
        'flashcards',
        'mnemonics',
        'practiceRoutines',
        'dissectionAndExperiment'
    ],
    assessmentRubrics: [
        'remember',
        'understand',
        'apply',
        'analyze',
        'evaluate',
        'create'
    ],
    assessmentQuestions: [
        'enzymeBasics',
        'enzymeInhibition',
        'enzymeKinetics',
        'enzymeRegulation'
    ]
},

conceptLinks: {
    "Enzymes are biological catalysts that speed up reactions": {
        misconceptions:       ['enzymeBasics'],
        scenarios:            ['enzymeBasics'],
        studyTips:            ['diagrams', 'specimens'],
        assessmentRubrics:    ['remember', 'understand'],
        assessmentQuestions:  ['enzymeBasics']
    },
    "Active site is specific for substrate (lock-and-key or induced fit)": {
        misconceptions:       ['enzymeBasics'],
        scenarios:            ['enzymeBasics'],
        studyTips:            ['diagrams', 'comparisonTables'],
        assessmentRubrics:    ['remember', 'understand', 'apply'],
        assessmentQuestions:  ['enzymeBasics']
    },
    "Enzyme activity depends on temperature, pH, and cofactors": {
        misconceptions:       ['temperatureAndPH'],
        scenarios:            ['enzymeBasics'],
        studyTips:            ['specimens', 'flashcards'],
        assessmentRubrics:    ['understand', 'apply'],
        assessmentQuestions:  ['enzymeBasics']
    },
    "Michaelis-Menten kinetics describes enzyme behavior": {
        misconceptions:       ['enzymeKinetics'],
        scenarios:            ['enzymeKinetics'],
        studyTips:            ['diagrams', 'comparisonTables', 'practiceRoutines', 'dissectionAndExperiment'],
        assessmentRubrics:    ['apply', 'analyze', 'evaluate'],
        assessmentQuestions:  ['enzymeKinetics']
    },
    "Enzymes can be regulated by inhibitors and activators": {
        misconceptions:       ['enzymeInhibition', 'enzymeRegulation'],
        scenarios:            ['enzymeInhibition', 'enzymeRegulation'],
        studyTips:            ['comparisonTables', 'flashcards', 'mnemonics'],
        assessmentRubrics:    ['apply', 'analyze', 'evaluate', 'create'],
        assessmentQuestions:  ['enzymeInhibition', 'enzymeRegulation']
    }
},


// 2. Updated getSupportingContent — all five types handled

getSupportingContent(lessonKey, type, subtopic = null) {
    const lesson = this.lessons[lessonKey];
    if (!lesson?.databaseLinks) return null;

    const validTypes = lesson.databaseLinks[type];
    if (!validTypes) return null;

    const keys = subtopic
        ? (validTypes.includes(subtopic) ? [subtopic] : [])
        : validTypes;

    if (keys.length === 0) return null;

    switch (type) {
        case 'misconceptions':
            return this._extractFromDB(
                this.commonMisconceptions, keys
            );
        case 'contextualScenarios':
            return this._extractFromDB(
                this.contextualScenarios, keys
            );
        case 'studyTips':
            return this._extractFromDB(
                this.studyTips, keys
            );
        case 'assessmentRubrics':
            // Points to knowledgeLevel since that's where
            // the Bloom's levels live in the rubrics database
            return this._extractFromDB(
                this.assessmentRubrics.knowledgeLevel, keys
            );
        case 'assessmentQuestions':
            return this._extractFromDB(
                this.assessmentQuestions, keys
            );
        default:
            return null;
    }
},
// 3. All retrieval methods — updated with paired rubric+question helper

// Pull all content for a database type across the whole lesson
getSupportingContent(lessonKey, type, subtopic = null) { /* above */ },

// Pull one random item from a type, optionally filtered to a subtopic
getRandomItem(lessonKey, type, subtopic = null) {
    const content = this.getSupportingContent(lessonKey, type, subtopic);
    if (!content) return null;

    const allItems = Object.values(content).flat();
    if (allItems.length === 0) return null;

    return allItems[Math.floor(Math.random() * allItems.length)];
},

// Pull one random item from every database type at once
getRandomReviewSet(lessonKey) {
    const lesson = this.lessons[lessonKey];
    if (!lesson?.databaseLinks) return null;

    const review = {};
    for (const type of Object.keys(lesson.databaseLinks)) {
        review[type] = this.getRandomItem(lessonKey, type);
    }
    return review;
},

// Pull all content matched to a specific concept being taught
getContentForConcept(lessonKey, concept) {
    const lesson = this.lessons[lessonKey];
    const link = lesson?.conceptLinks?.[concept];
    if (!link) return null;

    const result = {};
    for (const [type, subtopics] of Object.entries(link)) {
        // conceptLinks uses 'scenarios' as the key
        // but getSupportingContent expects 'contextualScenarios'
        const dbType = type === 'scenarios' ? 'contextualScenarios' : type;
        result[dbType] = {};
        for (const subtopic of subtopics) {
            const content = this.getSupportingContent(lessonKey, dbType, subtopic);
            if (content) result[dbType][subtopic] = content[subtopic];
        }
    }
    return result;
},

// NEW — pull a matched rubric+question pair at the same Bloom's level
// Useful for generating a task with its grading standard together
getMatchedRubricAndQuestion(lessonKey, bloomsLevel = null) {
    const lesson = this.lessons[lessonKey];
    if (!lesson?.databaseLinks) return null;

    const rubricLevels = lesson.databaseLinks.assessmentRubrics;
    const questionTopics = lesson.databaseLinks.assessmentQuestions;

    // Pick a random Bloom's level if none specified
    const level = bloomsLevel && rubricLevels.includes(bloomsLevel)
        ? bloomsLevel
        : rubricLevels[Math.floor(Math.random() * rubricLevels.length)];

    // Get rubric for that level
    const rubricContent = this.getSupportingContent(lessonKey, 'assessmentRubrics', level);
    const rubric = rubricContent?.[level] ?? null;

    // Get a random topic's question at the same Bloom's level
    const randomTopic = questionTopics[Math.floor(Math.random() * questionTopics.length)];
    const questionContent = this.getSupportingContent(lessonKey, 'assessmentQuestions', randomTopic);
    const question = questionContent?.[randomTopic]?.[level] ?? null;

    return {
        bloomsLevel: level,
        rubric,
        question,
        topic: randomTopic
    };
},

// NEW — pull one random item per concept across all five databases
// Useful for generating a per-concept summary card
getConceptSummaryCard(lessonKey, concept) {
    const lesson = this.lessons[lessonKey];
    const link = lesson?.conceptLinks?.[concept];
    if (!link) return null;

    const card = { concept };

    // One random misconception
    const miscSubtopic = link.misconceptions?.[
        Math.floor(Math.random() * link.misconceptions.length)
    ];
    card.misconception = this.getRandomItem(lessonKey, 'misconceptions', miscSubtopic);

    // One random scenario
    const scenSubtopic = link.scenarios?.[
        Math.floor(Math.random() * link.scenarios.length)
    ];
    card.scenario = this.getRandomItem(lessonKey, 'contextualScenarios', scenSubtopic);

    // One random study tip
    const tipSubtopic = link.studyTips?.[
        Math.floor(Math.random() * link.studyTips.length)
    ];
    card.studyTip = this.getRandomItem(lessonKey, 'studyTips', tipSubtopic);

    // Matched rubric + question at a random Bloom's level from this concept's levels
    const level = link.assessmentRubrics?.[
        Math.floor(Math.random() * link.assessmentRubrics.length)
    ];
    const questionTopic = link.assessmentQuestions?.[
        Math.floor(Math.random() * link.assessmentQuestions.length)
    ];
    const rubricContent = this.getSupportingContent(lessonKey, 'assessmentRubrics', level);
    const questionContent = this.getSupportingContent(lessonKey, 'assessmentQuestions', questionTopic);

    card.assessment = {
        bloomsLevel: level,
        rubric: rubricContent?.[level] ?? null,
        question: questionContent?.[questionTopic]?.[level] ?? null
    };

    return card;
},

// Internal helper
_extractFromDB(db, keys) {
    if (!db) return null;
    const result = {};
    for (const key of keys) {
        if (db[key] !== undefined) result[key] = db[key];
    }
    return Object.keys(result).length > 0 ? result : null;
},

// 4. Full usage examples

// --- Single random items ---

// Random misconception from anywhere in the enzyme databases
biology.getRandomItem('enzymes', 'misconceptions');

// Random misconception specific to enzyme inhibition
biology.getRandomItem('enzymes', 'misconceptions', 'enzymeInhibition');

// Random contextual scenario from enzyme kinetics
biology.getRandomItem('enzymes', 'contextualScenarios', 'enzymeKinetics');

// Random study tip from the diagrams category
biology.getRandomItem('enzymes', 'studyTips', 'diagrams');

// Random rubric at the analyze level
biology.getRandomItem('enzymes', 'assessmentRubrics', 'analyze');

// Random question from the enzyme inhibition topic
biology.getRandomItem('enzymes', 'assessmentQuestions', 'enzymeInhibition');


// --- Matched pairs ---

// Random Bloom's level rubric paired with a question at the same level
biology.getMatchedRubricAndQuestion('enzymes');
// Returns: { bloomsLevel, rubric, question, topic }

// Specifically at the evaluate level
biology.getMatchedRubricAndQuestion('enzymes', 'evaluate');
// Returns: { bloomsLevel: 'evaluate', rubric: {...}, question: "...", topic: "enzymeKinetics" }


// --- Concept-driven retrieval ---

// All database content matched to one concept
biology.getContentForConcept(
    'enzymes',
    'Michaelis-Menten kinetics describes enzyme behavior'
);
// Returns matched misconceptions, scenarios, studyTips,
// assessmentRubrics, and assessmentQuestions — nothing unrelated

// One-item summary card for a concept — one of everything
biology.getConceptSummaryCard(
    'enzymes',
    'Enzymes can be regulated by inhibitors and activators'
);
// Returns: {
//   concept,
//   misconception,   — one random item from enzymeInhibition or enzymeRegulation
//   scenario,        — one random item from enzymeInhibition or enzymeRegulation
//   studyTip,        — one random item from comparisonTables, flashcards, or mnemonics
//   assessment: {
//     bloomsLevel,   — one level from apply/analyze/evaluate/create
//     rubric,        — the rubric standard for that level
//     question       — the actual question at that level
//   }
// }


// --- Full review set ---

// One random item from all five databases at once
biology.getRandomReviewSet('enzymes');
// Returns: {
//   misconceptions,
//   contextualScenarios,
//   studyTips,
//   assessmentRubrics,
//   assessmentQuestions
// }
