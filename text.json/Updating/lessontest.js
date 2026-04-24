// ============================================================
// LESSON PROCESSOR — EXAMPLE USAGE
// EnhancedMolecularBiologyWorkbook
//
// This file demonstrates every supported call pattern for the
// lesson processing system introduced in lesson-processor.js.
//
// Run with:
//   node lesson-processor-examples.js
//
// Prerequisites:
//   • EnhancedMolecularBiologyWorkbook is importable from its
//     source file (adjust the import path below as needed).
//   • lesson-processor.js methods have been merged into the class.
// ============================================================

import { EnhancedMolecularBiologyWorkbook } from './biology.js'; // adjust path as needed

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────

/** Pretty-print a result object with a labelled heading. */
function printResult(label, result) {
    console.log('\n' + '═'.repeat(72));
    console.log(`  ${label}`);
    console.log('═'.repeat(72));
    console.log(JSON.stringify(result, null, 2));
}

/** Print only the top-level keys of a result (avoids wall of text). */
function printKeys(label, result) {
    console.log('\n' + '─'.repeat(72));
    console.log(`  ${label}`);
    console.log('─'.repeat(72));

    if (result && result.content) {
        console.log('  result.lessonConfig keys :', Object.keys(result.lessonConfig  || {}));
        console.log('  result.content keys      :', Object.keys(result.content));
        console.log('  result.workbook sections :',
            (result.workbook?.sections || []).map(s => s.title));
    } else {
        console.log(JSON.stringify(result, null, 2));
    }
}


// ─────────────────────────────────────────────────────────────
// INITIALISE WORKBOOK
// ─────────────────────────────────────────────────────────────

const wb = new EnhancedMolecularBiologyWorkbook({
    explanationLevel: 'intermediate',
    detailLevel:      'detailed',
});

console.log('\nAvailable lessons :', wb.getAvailableLessons());
console.log('Available fields (cellBiology) :', wb.getLessonFields('cellBiology'));
console.log('Available fields (molecularBiology) :', wb.getLessonFields('molecularBiology'));


// ─────────────────────────────────────────────────────────────
// EXAMPLE 1 — Full lesson via handleMolecularProblem
//
// requestType: 'lesson' routes directly to handleLessonRequest.
// No field filter → all top-level fields are returned and all
// databaseLinks / conceptLinks are resolved.
// ─────────────────────────────────────────────────────────────

const ex1 = wb.handleMolecularProblem({
    topic:       'cellBiology',
    requestType: 'lesson',
});

printKeys('Example 1 — Full cellBiology lesson (all fields)', ex1);


// ─────────────────────────────────────────────────────────────
// EXAMPLE 2 — Filter to definitions + concepts only
//
// fields: [...] restricts which top-level lesson keys are returned.
// Useful when you only need the glossary and concept list for a
// quick-reference card or flashcard deck.
// ─────────────────────────────────────────────────────────────

const ex2 = wb.handleMolecularProblem({
    topic:       'cellBiology',
    requestType: 'lesson',
    fields:      ['title', 'keyDefinitions', 'concepts'],
});

printKeys('Example 2 — cellBiology: title + keyDefinitions + concepts', ex2);
console.log('\n  concept count      :', ex2.content.concepts?.length);
console.log('  definition count   :', Object.keys(ex2.content.keyDefinitions || {}).length);


// ─────────────────────────────────────────────────────────────
// EXAMPLE 3 — Introduction block, sub-fields only
//
// introSubFields restricts which keys inside topicIntroduction
// are returned.  Here we want only what the student needs to
// know before starting and the order in which topics are covered.
// ─────────────────────────────────────────────────────────────

const ex3 = wb.handleMolecularProblem({
    topic:          'molecularBiology',
    requestType:    'lesson',
    fields:         ['title', 'topicIntroduction'],
    introSubFields: ['priorKnowledge', 'topicRoadmap'],
});

printKeys('Example 3 — molecularBiology intro: priorKnowledge + topicRoadmap', ex3);
console.log('\n  prior knowledge items :', ex3.content.topicIntroduction?.priorKnowledge?.length);
console.log('  roadmap steps         :', ex3.content.topicIntroduction?.topicRoadmap?.length);


// ─────────────────────────────────────────────────────────────
// EXAMPLE 4 — Introduction sub-fields: overview + whyItMatters
//
// Good for generating a lesson "hook" — the motivating context
// without the full structural roadmap.
// ─────────────────────────────────────────────────────────────

const ex4 = wb.handleMolecularProblem({
    topic:          'cellBiology',
    requestType:    'lesson',
    fields:         ['title', 'topicIntroduction'],
    introSubFields: ['overview', 'whyItMatters', 'bigPicture'],
});

printKeys('Example 4 — cellBiology intro: overview + whyItMatters + bigPicture', ex4);


// ─────────────────────────────────────────────────────────────
// EXAMPLE 5 — Summary block, exam checklist + common mistakes
//
// summarySubFields restricts which keys inside topicSummary are
// returned.  Perfect for a revision sheet at the end of a lesson.
// ─────────────────────────────────────────────────────────────

const ex5 = wb.handleMolecularProblem({
    topic:            'cellBiology',
    requestType:      'lesson',
    fields:           ['title', 'topicSummary'],
    summarySubFields: ['examReadinessChecklist', 'commonMistakesToAvoid'],
});

printKeys('Example 5 — cellBiology summary: examReadinessChecklist + commonMistakesToAvoid', ex5);
console.log('\n  checklist items :', ex5.content.topicSummary?.examReadinessChecklist?.length);
console.log('  mistake items   :', ex5.content.topicSummary?.commonMistakesToAvoid?.length);


// ─────────────────────────────────────────────────────────────
// EXAMPLE 6 — Summary block, core insights + connections only
// ─────────────────────────────────────────────────────────────

const ex6 = wb.handleMolecularProblem({
    topic:            'molecularBiology',
    requestType:      'lesson',
    fields:           ['title', 'topicSummary'],
    summarySubFields: ['coreInsights', 'connections'],
});

printKeys('Example 6 — molecularBiology summary: coreInsights + connections', ex6);


// ─────────────────────────────────────────────────────────────
// EXAMPLE 7 — Misconceptions only (convenience method)
//
// getLessonMisconceptions() is a one-liner wrapper around
// handleLessonRequest with fields + dbCategories preset.
// ─────────────────────────────────────────────────────────────

const ex7 = wb.getLessonMisconceptions('cellBiology');

printKeys('Example 7 — cellBiology: misconceptions (convenience method)', ex7);
console.log('\n  misconception categories returned :',
    Object.keys(ex7.content.databaseLinks?.misconceptions || {}));


// ─────────────────────────────────────────────────────────────
// EXAMPLE 8 — Study tips only (convenience method)
// ─────────────────────────────────────────────────────────────

const ex8 = wb.getLessonStudyTips('molecularBiology');

printKeys('Example 8 — molecularBiology: studyTips (convenience method)', ex8);
console.log('\n  tip categories returned :',
    Object.keys(ex8.content.databaseLinks?.studyTips || {}));


// ─────────────────────────────────────────────────────────────
// EXAMPLE 9 — Assessment rubrics only (convenience method)
// ─────────────────────────────────────────────────────────────

const ex9 = wb.getLessonRubrics('cellBiology');

printKeys('Example 9 — cellBiology: assessmentRubrics (convenience method)', ex9);
console.log('\n  Bloom\'s levels returned :',
    Object.keys(ex9.content.databaseLinks?.assessmentRubrics || {})
          .filter(k => k !== '_understandingLevels'));


// ─────────────────────────────────────────────────────────────
// EXAMPLE 10 — Concept links for membrane-related concepts
//
// concepts: ['membrane'] filters conceptLinks to only those
// concept statements whose text contains "membrane".
// dbCategories limits which databases are resolved per concept.
// ─────────────────────────────────────────────────────────────

const ex10 = wb.getLessonConceptLinks(
    'cellBiology',
    ['membrane'],                       // concept text filter (substring)
    ['misconceptions', 'studyTips'],    // db category filter
);

printKeys('Example 10 — cellBiology conceptLinks: membrane concepts × misconceptions + studyTips', ex10);
console.log('\n  matched concepts :',
    Object.keys(ex10.content.conceptLinks || {}));


// ─────────────────────────────────────────────────────────────
// EXAMPLE 11 — Concept links for cell division, all db categories
// ─────────────────────────────────────────────────────────────

const ex11 = wb.getLessonConceptLinks(
    'cellBiology',
    ['cell cycle', 'division'],         // concept text filter
);

printKeys('Example 11 — cellBiology conceptLinks: cell cycle concepts, all db categories', ex11);
console.log('\n  matched concepts :',
    Object.keys(ex11.content.conceptLinks || {}));


// ─────────────────────────────────────────────────────────────
// EXAMPLE 12 — Specific domain objects only
//
// fields can reference any top-level domain key present in the
// lesson.  This pulls only the detailed cell cycle and signalling
// objects without the rest of the lesson.
// ─────────────────────────────────────────────────────────────

const ex12 = wb.handleMolecularProblem({
    topic:       'cellBiology',
    requestType: 'lesson',
    fields:      ['title', 'cellCycle', 'cellSignalling'],
});

printKeys('Example 12 — cellBiology domain objects: cellCycle + cellSignalling', ex12);
console.log('\n  cellCycle keys     :', Object.keys(ex12.content.cellCycle     || {}));
console.log('  cellSignalling keys:', Object.keys(ex12.content.cellSignalling || {}));


// ─────────────────────────────────────────────────────────────
// EXAMPLE 13 — Domain objects from molecularBiology lesson
// ─────────────────────────────────────────────────────────────

const ex13 = wb.handleMolecularProblem({
    topic:       'molecularBiology',
    requestType: 'lesson',
    fields:      ['title', 'dnaReplication', 'transcription', 'geneticCode'],
});

printKeys('Example 13 — molecularBiology: dnaReplication + transcription + geneticCode', ex13);
console.log('\n  dnaReplication keys :', Object.keys(ex13.content.dnaReplication || {}));
console.log('  transcription keys  :', Object.keys(ex13.content.transcription   || {}));
console.log('  geneticCode keys    :', Object.keys(ex13.content.geneticCode     || {}));


// ─────────────────────────────────────────────────────────────
// EXAMPLE 14 — Core + theory + definitions in one call
//
// Combines the three most commonly needed "core" fields into a
// single request — useful as a study-card data source.
// ─────────────────────────────────────────────────────────────

const ex14 = wb.getLessonCore('molecularBiology');

printKeys('Example 14 — molecularBiology core (convenience method)', ex14);
console.log('\n  concept count      :', ex14.content.concepts?.length);
console.log('  theory present     :', !!ex14.content.theory);


// ─────────────────────────────────────────────────────────────
// EXAMPLE 15 — Definitions only (convenience method)
// ─────────────────────────────────────────────────────────────

const ex15 = wb.getLessonDefinitions('cellBiology');

printKeys('Example 15 — cellBiology definitions (convenience method)', ex15);
console.log('\n  definition count :', Object.keys(ex15.content.keyDefinitions || {}).length);
console.log('  first 5 terms    :',
    Object.keys(ex15.content.keyDefinitions || {}).slice(0, 5));


// ─────────────────────────────────────────────────────────────
// EXAMPLE 16 — databaseLinks with a specific category subset
//
// getLessonDatabaseContent() resolves only the requested db
// categories from databaseLinks — useful when you want scenarios
// and questions but not all the other database data.
// ─────────────────────────────────────────────────────────────

const ex16 = wb.getLessonDatabaseContent(
    'cellBiology',
    ['contextualScenarios', 'assessmentQuestions'],
);

printKeys('Example 16 — cellBiology databaseLinks: contextualScenarios + assessmentQuestions', ex16);
console.log('\n  scenario categories  :',
    Object.keys(ex16.content.databaseLinks?.contextualScenarios || {}));
console.log('  question categories  :',
    Object.keys(ex16.content.databaseLinks?.assessmentQuestions || {}));


// ─────────────────────────────────────────────────────────────
// EXAMPLE 17 — Raw (unresolved) database links
//
// resolveDatabase: false returns the raw key arrays from
// databaseLinks / conceptLinks without hydrating them.
// Useful when you only need the key names, not the full content.
// ─────────────────────────────────────────────────────────────

const ex17 = wb.handleMolecularProblem({
    topic:           'cellBiology',
    requestType:     'lesson',
    fields:          ['title', 'databaseLinks', 'conceptLinks'],
    resolveDatabase: false,
});

printKeys('Example 17 — cellBiology: raw (unresolved) databaseLinks + conceptLinks', ex17);
console.log('\n  databaseLinks keys (raw)  :',
    Object.keys(ex17.content.databaseLinks || {}));
console.log('  conceptLinks count (raw)  :',
    Object.keys(ex17.content.conceptLinks  || {}).length);


// ─────────────────────────────────────────────────────────────
// EXAMPLE 18 — Concept filter applied to raw conceptLinks
//
// Combining resolveDatabase: false with a concept filter returns
// the raw key arrays for only the matched concept statements.
// ─────────────────────────────────────────────────────────────

const ex18 = wb.handleMolecularProblem({
    topic:           'molecularBiology',
    requestType:     'lesson',
    fields:          ['title', 'conceptLinks'],
    concepts:        ['transcription', 'translation'],
    resolveDatabase: false,
});

printKeys('Example 18 — molecularBiology conceptLinks raw: transcription + translation', ex18);
console.log('\n  matched concepts :',
    Object.keys(ex18.content.conceptLinks || {}));


// ─────────────────────────────────────────────────────────────
// EXAMPLE 19 — Lesson resolved by title substring
//
// resolveLessonKey() also matches against lesson.title, so you
// can pass a human-readable name rather than the camelCase key.
// ─────────────────────────────────────────────────────────────

const resolvedKey = wb.resolveLessonKey('Molecular Biology');
console.log('\n─'.repeat(72));
console.log('  Example 19 — resolveLessonKey("Molecular Biology") →', resolvedKey);

const ex19 = wb.handleMolecularProblem({
    topic:       'Molecular Biology',   // title string, not camelCase key
    requestType: 'lesson',
    fields:      ['title', 'concepts'],
});

printKeys('Example 19 — Lesson resolved from title string "Molecular Biology"', ex19);


// ─────────────────────────────────────────────────────────────
// EXAMPLE 20 — All three requestType values in sequence
//
// Demonstrates that handleMolecularProblem() correctly dispatches
// to the topic, experiment, and lesson branches independently.
// ─────────────────────────────────────────────────────────────

console.log('\n' + '═'.repeat(72));
console.log('  Example 20 — All three requestType branches');
console.log('═'.repeat(72));

// Topic branch
const ex20a = wb.handleMolecularProblem({
    topic:       'carbohydrates',
    requestType: 'topic',
});
console.log('\n  [topic]      carbohydrates — content keys :',
    Object.keys(ex20a.content || {}));

// Experiment branch
const ex20b = wb.handleMolecularProblem({
    topic:       'prouts_classification',
    requestType: 'experiment',
});
console.log('  [experiment] prouts_classification — section titles :',
    (ex20b.workbook?.sections || []).map(s => s.title));

// Lesson branch
const ex20c = wb.handleMolecularProblem({
    topic:       'cellBiology',
    requestType: 'lesson',
    fields:      ['title', 'theory'],
});
console.log('  [lesson]     cellBiology — content keys :',
    Object.keys(ex20c.content || {}));


// ─────────────────────────────────────────────────────────────
// EXAMPLE 21 — Workbook section inspection
//
// Shows what the generated workbook looks like for a filtered
// request — only the requested fields produce workbook sections.
// ─────────────────────────────────────────────────────────────

const ex21 = wb.handleMolecularProblem({
    topic:            'cellBiology',
    requestType:      'lesson',
    fields:           ['title', 'keyDefinitions', 'topicSummary'],
    summarySubFields: ['coreInsights', 'examReadinessChecklist'],
});

console.log('\n' + '─'.repeat(72));
console.log('  Example 21 — Workbook sections for filtered cellBiology request');
console.log('─'.repeat(72));
console.log('\n  Sections generated:');
(ex21.workbook?.sections || []).forEach((s, i) => {
    console.log(`    ${i + 1}. [${s.type}] ${s.title}  (${s.data?.length ?? 0} rows)`);
});


// ─────────────────────────────────────────────────────────────
// EXAMPLE 22 — getLessonIntroduction convenience method
// ─────────────────────────────────────────────────────────────

const ex22a = wb.getLessonIntroduction('cellBiology');
printKeys('Example 22a — cellBiology full introduction', ex22a);

const ex22b = wb.getLessonIntroduction('cellBiology', ['overview', 'whyItMatters']);
printKeys('Example 22b — cellBiology introduction: overview + whyItMatters only', ex22b);
console.log('\n  topicIntroduction keys :',
    Object.keys(ex22b.content.topicIntroduction || {}));


// ─────────────────────────────────────────────────────────────
// EXAMPLE 23 — getLessonSummary convenience method
// ─────────────────────────────────────────────────────────────

const ex23a = wb.getLessonSummary('molecularBiology');
printKeys('Example 23a — molecularBiology full summary', ex23a);
console.log('\n  summary keys :', Object.keys(ex23a.content.topicSummary || {}));

const ex23b = wb.getLessonSummary('molecularBiology', ['keyEquations', 'connections']);
printKeys('Example 23b — molecularBiology summary: keyEquations + connections only', ex23b);
console.log('\n  summary keys :', Object.keys(ex23b.content.topicSummary || {}));


// ─────────────────────────────────────────────────────────────
// EXAMPLE 24 — Field validation: unknown field warning
//
// Requesting a field that doesn't exist in the lesson produces a
// console.warn (not a thrown error) and the field is silently
// omitted from the result.
// ─────────────────────────────────────────────────────────────

console.log('\n─'.repeat(72));
console.log('  Example 24 — Unknown field graceful handling (expect a console.warn)');
console.log('─'.repeat(72));

const ex24 = wb.handleMolecularProblem({
    topic:       'cellBiology',
    requestType: 'lesson',
    fields:      ['title', 'concepts', 'nonExistentField'],
});

console.log('\n  Content keys returned (nonExistentField absent) :',
    Object.keys(ex24.content));


// ─────────────────────────────────────────────────────────────
// EXAMPLE 25 — Lesson key resolution edge cases
// ─────────────────────────────────────────────────────────────

console.log('\n─'.repeat(72));
console.log('  Example 25 — resolveLessonKey edge cases');
console.log('─'.repeat(72));

const testInputs = [
    'cellBiology',          // exact camelCase key
    'CellBiology',          // wrong case
    'Cell Biology',         // spaced title
    'cell biology',         // lowercase spaced
    'DNA, RNA',             // partial title match
    'molecular',            // partial key match
    'unknownTopic',         // no match → null
];

testInputs.forEach(input => {
    const resolved = wb.resolveLessonKey(input);
    console.log(`  "${input}" → ${resolved !== null ? `"${resolved}"` : 'null (not found)'}`);
});
