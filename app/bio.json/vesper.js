// test_exam_generator.js
import EnhancedSpreadsheetWorkbook from './worksheet.js';

// ============================================================================
// TEST SUITE FOR EXAM PAPER GENERATOR INTEGRATION
// ============================================================================

async function testExamPaperGeneration() {
    console.log('\n' + '='.repeat(80));
    console.log('TESTING EXAM PAPER GENERATOR INTEGRATION');
    console.log('='.repeat(80) + '\n');

    const workbook = new EnhancedSpreadsheetWorkbook({
        sheetName: 'Exam Generator Test',
        author: 'Test Suite'
    });

    try {
        // ====================================================================
        // TEST 1: CHEMISTRY EXAM - INTERMEDIATE LEVEL
        // ====================================================================
        console.log('\n📝 TEST 1: Chemistry Exam - Intermediate Level');
        console.log('-'.repeat(80));

        workbook.initializeExamConfig('chemistry');
        workbook.configureGradeLevel('Grade 10');
        workbook.configureTopics(['stoichiometry', 'organic_chemistry', 'acid_base_chemistry']);
        
        workbook.displayExamConfig();

        const chemExam = await workbook.generateExaminationPaper();
        console.log(`✅ Chemistry exam generated (Index: ${chemExam.index})`);

        // Export all documents
        await workbook.exportExamPaperToDOCX(chemExam.index, 'test_chemistry_exam.docx');
        await workbook.exportExamPaperToPDF(chemExam.index, 'test_chemistry_exam.pdf');
        await workbook.exportMarkingSchemeToDOCX(chemExam.index, 'test_chemistry_scheme.docx');
        await workbook.exportMarkingSchemeToPDF(chemExam.index, 'test_chemistry_scheme.pdf');
        await workbook.generateComprehensiveSolutions(chemExam.index, 'test_chemistry_solutions.docx');

        console.log('✅ All Chemistry documents exported');

        // ====================================================================
        // TEST 2: BIOLOGY EXAM - ADVANCED LEVEL
        // ====================================================================
        console.log('\n📝 TEST 2: Biology Exam - Advanced Level');
        console.log('-'.repeat(80));

        workbook.initializeExamConfig('biology');
        workbook.configureGradeLevel('Grade 12');
        workbook.configureTopics(['genetics', 'cell_biology', 'evolution', 'ecology']);
        
        const bioExam = await workbook.generateExaminationPaper();
        console.log(`✅ Biology exam generated (Index: ${bioExam.index})`);

        await workbook.exportExamPaperToDOCX(bioExam.index, 'test_biology_exam.docx');
        await workbook.exportMarkingSchemeToDOCX(bioExam.index, 'test_biology_scheme.docx');

        console.log('✅ Biology documents exported');

        // ====================================================================
        // TEST 3: PHYSICS EXAM - BEGINNER LEVEL
        // ====================================================================
        console.log('\n📝 TEST 3: Physics Exam - Beginner Level');
        console.log('-'.repeat(80));

        workbook.initializeExamConfig('physics');
        workbook.configureGradeLevel('Grade 8');
        workbook.configureTopics(['mechanics', 'waves', 'thermodynamics']);
        
        const physExam = await workbook.generateExaminationPaper();
        console.log(`✅ Physics exam generated (Index: ${physExam.index})`);

        await workbook.exportExamPaperToDOCX(physExam.index, 'test_physics_exam.docx');

        console.log('✅ Physics documents exported');

        // ====================================================================
        // TEST 4: MATHEMATICS EXAM - PROFESSIONAL LEVEL
        // ====================================================================
        console.log('\n📝 TEST 4: Mathematics Exam - Professional Level');
        console.log('-'.repeat(80));

        workbook.initializeExamConfig('mathematics');
        workbook.configureGradeLevel('University');
        workbook.configureTopics(['algebra', 'calculus', 'vectors', 'matrices']);
        
        const mathExam = await workbook.generateExaminationPaper();
        console.log(`✅ Mathematics exam generated (Index: ${mathExam.index})`);

        await workbook.exportExamPaperToDOCX(mathExam.index, 'test_math_exam.docx');

        console.log('✅ Mathematics documents exported');

        // ====================================================================
        // TEST 5: CUSTOM CONFIGURATION TEST
        // ====================================================================
        console.log('\n📝 TEST 5: Custom Configuration Test');
        console.log('-'.repeat(80));

        workbook.initializeExamConfig('chemistry');
        workbook.configureGradeLevel('A-Level');
        
        // Custom metadata
        workbook.configureMetadata({
            schoolName: 'Advanced Science Academy',
            examType: 'Final Examination',
            academicYear: '2024/2025',
            term: 'Third Term',
            duration: '3 hours',
            totalMarks: 150,
            examinerName: 'Dr. Sarah Johnson',
            examinerTitle: 'Head of Chemistry Department'
        });

        // Custom section configuration
        workbook.configureSections({
            sectionA: { difficulty: 'easier', questionsCount: 10, marksPercentage: 35 },
            sectionB: { difficulty: 'similar', questionsCount: 6, marksPercentage: 40 },
            sectionC: { difficulty: 'harder', questionsCount: 4, marksPercentage: 25 }
        });

        workbook.configureTopics(['stoichiometry', 'redox_chemistry', 'organic_chemistry', 'equilibrium']);

        const customExam = await workbook.generateExaminationPaper();
        console.log(`✅ Custom exam generated (Index: ${customExam.index})`);

        await workbook.exportExamPaperToDOCX(customExam.index, 'test_custom_exam.docx');

        console.log('✅ Custom documents exported');

        // ====================================================================
        // TEST 6: CHECK AVAILABLE PROBLEMS
        // ====================================================================
        console.log('\n📝 TEST 6: Check Available Problems');
        console.log('-'.repeat(80));

        const problemCheck = workbook.checkAvailableProblems(chemExam.index);
        
        console.log(`\n📊 Problem Availability Report:`);
        console.log(`   Total Problems: ${problemCheck.totalProblems}`);
        console.log(`   Problems with Solvers: ${problemCheck.withSolvers.length}`);
        console.log(`   Problems without Solvers: ${problemCheck.withoutSolvers.length}`);
        console.log(`   Can Generate Solutions: ${problemCheck.canGenerateDocument ? 'Yes ✅' : 'No ❌'}`);

        if (problemCheck.withSolvers.length > 0) {
            console.log(`\n   Sample solvable problems:`);
            problemCheck.withSolvers.slice(0, 3).forEach(p => {
                console.log(`      Q${p.questionNumber}: ${p.scenario.substring(0, 60)}...`);
            });
        }

        // ====================================================================
        // TEST 7: LIST ALL GENERATED EXAMS
        // ====================================================================
        console.log('\n📝 TEST 7: List All Generated Exams');
        console.log('-'.repeat(80));

        workbook.listExamPapers();

        // ====================================================================
        // TEST 8: VIEW EXAM HISTORY
        // ====================================================================
        console.log('\n📝 TEST 8: View Exam History');
        console.log('-'.repeat(80));

        workbook.displayExamHistory();

        // ====================================================================
        // TEST 9: WORKBOOK STATUS WITH EXAMS
        // ====================================================================
        console.log('\n📝 TEST 9: Complete Workbook Status');
        console.log('-'.repeat(80));

        workbook.displayCompleteWorkbookStatus();

        // ====================================================================
        // TEST 10: EXPORT COMPLETE WORKBOOK
        // ====================================================================
        console.log('\n📝 TEST 10: Export Complete Workbook');
        console.log('-'.repeat(80));

        const exportedFile = workbook.exportCompleteWorkbook('test_complete_workbook.json');
        console.log(`✅ Complete workbook exported to: ${exportedFile}`);

        // ====================================================================
        // SUMMARY
        // ====================================================================
        console.log('\n' + '='.repeat(80));
        console.log('TEST SUMMARY');
        console.log('='.repeat(80));
        console.log(`✅ Total Exams Generated: ${workbook.examPapers.length}`);
        console.log(`✅ Total History Entries: ${workbook.examHistory.length}`);
        console.log(`✅ All tests passed successfully!`);
        console.log('='.repeat(80) + '\n');

        return {
            success: true,
            examsGenerated: workbook.examPapers.length,
            workbook: workbook
        };

    } catch (error) {
        console.error('\n❌ TEST FAILED:', error.message);
        console.error(error.stack);
        return {
            success: false,
            error: error.message
        };
    }
}

// ============================================================================
// QUICK TEST FUNCTION
// ============================================================================

async function quickTest() {
    console.log('\n⚡ QUICK TEST - Single Exam Generation');
    console.log('='.repeat(80) + '\n');

    const workbook = new EnhancedSpreadsheetWorkbook();

    try {
        // Quick generate a chemistry exam
        const result = await workbook.quickGenerateExam('chemistry', 'Grade 10', 3);
        
        console.log('\n✅ Quick test completed successfully!');
        console.log(`   Files generated in current directory`);
        
        return result;

    } catch (error) {
        console.error('\n❌ Quick test failed:', error.message);
        return { success: false, error: error.message };
    }
}

// ============================================================================
// INTERACTIVE TEST FUNCTION
// ============================================================================

async function interactiveTest() {
    console.log('\n🎯 INTERACTIVE TEST - User Configuration');
    console.log('='.repeat(80) + '\n');

    const workbook = new EnhancedSpreadsheetWorkbook();

    try {
        // Run the interactive demonstration
        await workbook.demonstrateExamPaperGenerator();
        
        console.log('\n✅ Interactive test completed!');
        
        return { success: true };

    } catch (error) {
        console.error('\n❌ Interactive test failed:', error.message);
        return { success: false, error: error.message };
    }
}

// ============================================================================
// SPECIFIC SUBJECT TESTS
// ============================================================================

async function testChemistryExam() {
    console.log('\n🧪 CHEMISTRY EXAM TEST');
    console.log('='.repeat(80) + '\n');

    const workbook = new EnhancedSpreadsheetWorkbook();

    try {
        workbook.initializeExamConfig('chemistry');
        workbook.configureGradeLevel('Grade 11');
        
        // Get available topics for this grade
        const topics = workbook.getAvailableTopics('chemistry', 'Grade 11');
        console.log(`Available topics: ${topics.join(', ')}`);
        
        // Select first 4 topics
        workbook.configureTopics(topics.slice(0, 4));
        
        // Generate exam
        const exam = await workbook.generateExaminationPaper();
        
        // Export all documents
        await workbook.exportExamPaperToDOCX(exam.index, 'chemistry_test.docx');
        await workbook.exportExamPaperToPDF(exam.index, 'chemistry_test.pdf');
        await workbook.exportMarkingSchemeToDOCX(exam.index, 'chemistry_scheme.docx');
        await workbook.generateComprehensiveSolutions(exam.index, 'chemistry_solutions.docx');
        
        console.log('\n✅ Chemistry exam test completed!');
        return { success: true, exam };

    } catch (error) {
        console.error('\n❌ Chemistry test failed:', error.message);
        return { success: false, error: error.message };
    }
}

async function testBiologyExam() {
    console.log('\n🧬 BIOLOGY EXAM TEST');
    console.log('='.repeat(80) + '\n');

    const workbook = new EnhancedSpreadsheetWorkbook();

    try {
        workbook.initializeExamConfig('biology');
        workbook.configureGradeLevel('Grade 12');
        
        const topics = workbook.getAvailableTopics('biology', 'Grade 12');
        workbook.configureTopics(topics.slice(0, 4));
        
        const exam = await workbook.generateExaminationPaper();
        
        await workbook.exportExamPaperToDOCX(exam.index, 'biology_test.docx');
        await workbook.exportMarkingSchemeToDOCX(exam.index, 'biology_scheme.docx');
        
        console.log('\n✅ Biology exam test completed!');
        return { success: true, exam };

    } catch (error) {
        console.error('\n❌ Biology test failed:', error.message);
        return { success: false, error: error.message };
    }
}

async function testPhysicsExam() {
    console.log('\n⚛️ PHYSICS EXAM TEST');
    console.log('='.repeat(80) + '\n');

    const workbook = new EnhancedSpreadsheetWorkbook();

    try {
        workbook.initializeExamConfig('physics');
        workbook.configureGradeLevel('A-Level');
        
        const topics = workbook.getAvailableTopics('physics', 'A-Level');
        workbook.configureTopics(topics.slice(0, 3));
        
        const exam = await workbook.generateExaminationPaper();
        
        await workbook.exportExamPaperToDOCX(exam.index, 'physics_test.docx');
        await workbook.exportMarkingSchemeToDOCX(exam.index, 'physics_scheme.docx');
        
        console.log('\n✅ Physics exam test completed!');
        return { success: true, exam };

    } catch (error) {
        console.error('\n❌ Physics test failed:', error.message);
        return { success: false, error: error.message };
    }
}

async function testMathematicsExam() {
    console.log('\n📐 MATHEMATICS EXAM TEST');
    console.log('='.repeat(80) + '\n');

    const workbook = new EnhancedSpreadsheetWorkbook();

    try {
        workbook.initializeExamConfig('mathematics');
        workbook.configureGradeLevel('Grade 10');
        
        const topics = workbook.getAvailableTopics('mathematics', 'Grade 10');
        workbook.configureTopics(topics.slice(0, 4));
        
        const exam = await workbook.generateExaminationPaper();
        
        await workbook.exportExamPaperToDOCX(exam.index, 'math_test.docx');
        await workbook.exportMarkingSchemeToDOCX(exam.index, 'math_scheme.docx');
        
        console.log('\n✅ Mathematics exam test completed!');
        return { success: true, exam };

    } catch (error) {
        console.error('\n❌ Mathematics test failed:', error.message);
        return { success: false, error: error.message };
    }
}

// ============================================================================
// GRADE LEVEL TESTS
// ============================================================================

async function testAllGradeLevels() {
    console.log('\n🎓 TESTING ALL GRADE LEVELS');
    console.log('='.repeat(80) + '\n');

    const workbook = new EnhancedSpreadsheetWorkbook();
    const gradeLevels = ['Grade 8', 'Grade 10', 'Grade 12', 'University'];
    const results = [];

    for (const grade of gradeLevels) {
        console.log(`\nTesting ${grade}...`);
        
        try {
            workbook.initializeExamConfig('chemistry');
            workbook.configureGradeLevel(grade);
            
            const topics = workbook.getAvailableTopics('chemistry', grade);
            workbook.configureTopics(topics.slice(0, 3));
            
            const exam = await workbook.generateExaminationPaper();
            
            results.push({
                grade,
                success: true,
                examIndex: exam.index,
                topics: topics.length
            });
            
            console.log(`✅ ${grade} exam generated successfully`);
            
        } catch (error) {
            results.push({
                grade,
                success: false,
                error: error.message
            });
            console.error(`❌ ${grade} failed: ${error.message}`);
        }
    }

    console.log('\n' + '='.repeat(80));
    console.log('GRADE LEVEL TEST SUMMARY');
    console.log('='.repeat(80));
    
    results.forEach(r => {
        const status = r.success ? '✅ PASS' : '❌ FAIL';
        console.log(`${r.grade}: ${status}`);
        if (r.success) {
            console.log(`   Topics available: ${r.topics}`);
            console.log(`   Exam index: ${r.examIndex}`);
        }
    });

    return results;
}

// ============================================================================
// MULTI-SUBJECT TEST
// ============================================================================

async function testAllSubjects() {
    console.log('\n📚 TESTING ALL SUBJECTS');
    console.log('='.repeat(80) + '\n');

    const workbook = new EnhancedSpreadsheetWorkbook();
    const subjects = ['chemistry', 'biology', 'physics', 'mathematics'];
    const results = [];

    for (const subject of subjects) {
        console.log(`\nTesting ${subject.toUpperCase()}...`);
        
        try {
            workbook.initializeExamConfig(subject);
            workbook.configureGradeLevel('Grade 10');
            
            const topics = workbook.getAvailableTopics(subject, 'Grade 10');
            workbook.configureTopics(topics.slice(0, 3));
            
            const exam = await workbook.generateExaminationPaper();
            
            await workbook.exportExamPaperToDOCX(
                exam.index,
                `${subject}_grade10_test.docx`
            );
            
            results.push({
                subject,
                success: true,
                examIndex: exam.index,
                topicsUsed: topics.slice(0, 3).length
            });
            
            console.log(`✅ ${subject} exam generated and exported`);
            
        } catch (error) {
            results.push({
                subject,
                success: false,
                error: error.message
            });
            console.error(`❌ ${subject} failed: ${error.message}`);
        }
    }

    console.log('\n' + '='.repeat(80));
    console.log('MULTI-SUBJECT TEST SUMMARY');
    console.log('='.repeat(80));
    
    results.forEach(r => {
        const status = r.success ? '✅ PASS' : '❌ FAIL';
        console.log(`${r.subject.toUpperCase()}: ${status}`);
        if (r.success) {
            console.log(`   Topics used: ${r.topicsUsed}`);
            console.log(`   Exam index: ${r.examIndex}`);
        }
    });

    return results;
}

// ============================================================================
// MAIN TEST RUNNER
// ============================================================================

async function runAllTests() {
    console.log('\n' + '█'.repeat(80));
    console.log('COMPREHENSIVE EXAM PAPER GENERATOR TEST SUITE');
    console.log('█'.repeat(80) + '\n');

    const testResults = {
        mainTest: null,
        quickTest: null,
        chemistryTest: null,
        biologyTest: null,
        physicsTest: null,
        mathTest: null,
        gradeLevelTest: null,
        multiSubjectTest: null
    };

    try {
        // Run main comprehensive test
        console.log('\n🔬 Running Comprehensive Test...');
        testResults.mainTest = await testExamPaperGeneration();

        // Run quick test
        console.log('\n⚡ Running Quick Test...');
        testResults.quickTest = await quickTest();

        // Run subject-specific tests
        console.log('\n🧪 Running Subject-Specific Tests...');
        testResults.chemistryTest = await testChemistryExam();
        testResults.biologyTest = await testBiologyExam();
        testResults.physicsTest = await testPhysicsExam();
        testResults.mathTest = await testMathematicsExam();

        // Run grade level test
        console.log('\n🎓 Running Grade Level Test...');
        testResults.gradeLevelTest = await testAllGradeLevels();

        // Run multi-subject test
        console.log('\n📚 Running Multi-Subject Test...');
        testResults.multiSubjectTest = await testAllSubjects();

        // Final summary
        console.log('\n' + '█'.repeat(80));
        console.log('FINAL TEST SUMMARY');
        console.log('█'.repeat(80));
        
        const passedTests = Object.values(testResults).filter(r => 
            r && (r.success === true || (Array.isArray(r) && r.every(item => item.success)))
        ).length;
        
        const totalTests = Object.keys(testResults).length;
        
        console.log(`\n✅ Tests Passed: ${passedTests}/${totalTests}`);
        console.log(`\n📊 Detailed Results:`);
        
        Object.entries(testResults).forEach(([testName, result]) => {
            if (result) {
                const status = result.success ? '✅ PASS' : '❌ FAIL';
                console.log(`   ${testName}: ${status}`);
            }
        });

        console.log('\n' + '█'.repeat(80));
        console.log(`🎉 TEST SUITE COMPLETE - ${passedTests}/${totalTests} PASSED`);
        console.log('█'.repeat(80) + '\n');

        return testResults;

    } catch (error) {
        console.error('\n❌ TEST SUITE FAILED:', error.message);
        console.error(error.stack);
        return { success: false, error: error.message };
    }
}

// ============================================================================
// EXPORT TEST FUNCTIONS
// ============================================================================

export {
    testExamPaperGeneration,
    quickTest,
    interactiveTest,
    testChemistryExam,
    testBiologyExam,
    testPhysicsExam,
    testMathematicsExam,
    testAllGradeLevels,
    testAllSubjects,
    runAllTests
};

// ============================================================================
// RUN TESTS IF EXECUTED DIRECTLY
// ============================================================================

if (import.meta.url === `file://${process.argv[1]}`) {
    runAllTests().then(results => {
        console.log('\n✅ All tests completed');
        process.exit(results.success !== false ? 0 : 1);
    }).catch(error => {
        console.error('\n❌ Test suite error:', error);
        process.exit(1);
    });
}
