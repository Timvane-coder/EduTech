// === COMPREHENSIVE CHEMISTRY EXAMINATION PAPER GENERATOR ===
// Terminal-based with DOCX/PDF export capabilities
import readline from 'readline';
import * as docx from "docx";
import PDFDocument from 'pdfkit';

import fs from 'fs';

const { Document, Packer, Paragraph, TextRun, Table, TableCell, TableRow, 
        AlignmentType, HeadingLevel, BorderStyle, WidthType, UnderlineType } = docx;


class ChemistryExamPaperGenerator {
    constructor() {
        this.initializeRelatedProblemGenerators();
        this.initializeExamSettings();
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

    // === MAIN EXAM PAPER GENERATION METHOD ===

    generateExaminationPaper(config) {
        const {
            // Header Information
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
            
            // Paper Configuration
            numberOfQuestions = 15,
            numberOfSections = 3,
            topics = ['stoichiometry', 'organic_chemistry', 'acid_base_chemistry'],
            sectionConfiguration = {
                sectionA: { difficulty: 'easier', questionsCount: 7, marksPercentage: 40 },
                sectionB: { difficulty: 'similar', questionsCount: 5, marksPercentage: 35 },
                sectionC: { difficulty: 'harder', questionsCount: 3, marksPercentage: 25 }
            },
            
            // Formatting Options
            paperSize = 'A4',
            orientation = 'Portrait',
            lineSpacing = 'comfortable',
            answerSpaceLines = 5,
            includeLogo = false,
            logoPath = '',
            
            // Instructions
            instructions = [
                'Answer ALL questions in the spaces provided',
                'Write your Name, Class, and Index Number clearly',
                'All working must be shown for full credit',
                'Use black or blue pen only (pencil for diagrams)',
                'Scientific calculators are allowed',
                'Non-programmable calculators only',
                'Mobile phones and smart devices are strictly prohibited'
            ],
            
            // Additional Instructions per Section
            sectionInstructions = {
                A: 'Answer all questions in this section. Each question carries equal marks.',
                B: 'Answer all questions in this section. Show all working clearly.',
                C: 'Answer any TWO questions from this section. Each question carries equal marks.'
            },
            
            // Footer Information
            examinerName = 'Dr. John Smith',
            examinerTitle = 'Senior Chemistry Teacher',
            moderatorName = 'Prof. Jane Doe',
            copyrightYear = new Date().getFullYear(),
            copyrightHolder = 'National Examination Board',
            
            // Export Options
            includeMarkingScheme = true,
            separateMarkingSchemeFile = true
            
        } = config;

        try {
            // Generate questions based on configuration
            const questions = this.generateQuestionsForExam({
                topics,
                sectionConfiguration,
                totalMarks
            });

            // Create complete exam paper document structure
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
                    generatedAt: new Date().toISOString(),
                    generatedBy: 'Chemistry Exam Paper Generator v1.0'
                },
                
                // Page 1: Header/Cover Page
                coverPage: this.generateCoverPage({
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
                    instructions,
                    includeLogo,
                    logoPath
                }),
                
                // Pages 2+: Question Sections
                questionSections: questions.sections,
                
                // Last Page: Footer
                closingPage: this.generateClosingPage({
                    examinerName,
                    examinerTitle,
                    moderatorName,
                    copyrightYear,
                    copyrightHolder
                }),
                
                // Separate Document: Marking Scheme
                markingScheme: includeMarkingScheme ? this.generateMarkingScheme(questions) : null,
                
                // Formatting Settings
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

    // === QUESTION GENERATION FOR EXAM ===

    generateQuestionsForExam(config) {
        const { topics, sectionConfiguration, totalMarks } = config;

        const sections = [];
        const sectionLabels = Object.keys(sectionConfiguration);

        sectionLabels.forEach(sectionKey => {
            const sectionConfig = sectionConfiguration[sectionKey];
            const sectionLabel = sectionKey.replace('section', '');
            const sectionMarks = Math.round((totalMarks * sectionConfig.marksPercentage) / 100);

            const sectionQuestions = this.generateSectionQuestions({
                sectionLabel,
                topics,
                difficulty: sectionConfig.difficulty,
                questionsCount: sectionConfig.questionsCount,
                targetMarks: sectionMarks
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
        const { sectionLabel, topics, difficulty, questionsCount, targetMarks } = config;

        const questions = [];
        const marksPerQuestion = Math.round(targetMarks / questionsCount);
        let questionNumber = this.getStartingQuestionNumber(sectionLabel);

        for (let i = 0; i < questionsCount; i++) {
            const topic = topics[i % topics.length]; // Rotate through topics
            const problemType = this.selectProblemTypeFromTopic(topic);
            
            const originalProblem = { type: problemType, parameters: {} };
            const originalSolution = {};
            
            const relatedProblems = this.generateRelatedProblems(originalProblem, originalSolution, {
                count: 1,
                difficultyRange: [difficulty]
            });

            if (relatedProblems.relatedProblems.length > 0) {
                const problem = relatedProblems.relatedProblems[0];
                const questionMarks = this.assignMarks(difficulty, marksPerQuestion);
                
                questions.push({
                    number: questionNumber,
                    topic: this.formatTopicName(topic),
                    difficulty: difficulty,
                    problemText: problem.problem,
                    scenario: problem.scenario,
                    marks: questionMarks,
                    parameters: problem.parameters,
                    realWorldContext: problem.realWorldContext,
                    subparts: this.generateSubparts(problem, questionMarks, difficulty),
                    answerSpaceType: this.determineAnswerSpaceType(problem, questionMarks)
                });

                questionNumber++;
            }
        }

        return { 
            questions, 
            totalMarks: questions.reduce((sum, q) => sum + q.marks, 0)
        };
    }

    getStartingQuestionNumber(sectionLabel) {
        const startNumbers = { 'A': 1, 'B': 8, 'C': 13, 'D': 16, 'E': 19, 'F': 22 };
        return startNumbers[sectionLabel] || 1;
    }

    formatTopicName(topic) {
        const topicNames = {
            'stoichiometry': 'Stoichiometry',
            'organic_chemistry': 'Organic Chemistry',
            'acid_base_chemistry': 'Acid-Base Chemistry',
            'redox_chemistry': 'Redox Chemistry',
            'equilibrium': 'Chemical Equilibrium',
            'kinetics': 'Chemical Kinetics',
            'thermodynamics': 'Thermodynamics',
            'atomic_structure': 'Atomic Structure',
            'bonding': 'Chemical Bonding'
        };
        return topicNames[topic] || topic;
    }

    getSectionTitle(label, difficulty) {
        const titles = {
            'easier': 'Multiple Choice and Short Answer Questions',
            'similar': 'Structured Questions',
            'harder': 'Extended Response Questions'
        };
        return titles[difficulty] || 'Questions';
    }

    getSectionInstructions(label, config) {
        const instructions = {
            'A': `Answer ALL questions in this section. Each question carries ${Math.round(100 * config.marksPercentage / 100 / config.questionsCount)} marks.`,
            'B': 'Answer ALL questions in this section. Show all working clearly for full credit.',
            'C': 'Answer ALL questions in this section. Detailed explanations are required.'
        };
        return instructions[label] || 'Answer all questions in this section.';
    }

    assignMarks(difficulty, baseMarks) {
        const marksRange = this.examSettings.markingSchemes[difficulty].marksRange;
        const closestMark = marksRange.reduce((prev, curr) => 
            Math.abs(curr - baseMarks) < Math.abs(prev - baseMarks) ? curr : prev
        );
        return closestMark;
    }

    generateSubparts(problem, totalMarks, difficulty) {
        const subparts = [];
        
        // Generate subparts based on total marks
        if (totalMarks >= 8) {
            // Complex question: 4 subparts
            const distribution = [
                { weight: 0.2, type: 'define' },
                { weight: 0.3, type: 'calculate' },
                { weight: 0.3, type: 'explain' },
                { weight: 0.2, type: 'conclude' }
            ];
            
            distribution.forEach((part, index) => {
                const marks = Math.round(totalMarks * part.weight);
                if (marks > 0) {
                    subparts.push({
                        label: String.fromCharCode(97 + index), // a, b, c, d
                        question: this.generateSubpartText(problem, part.type, difficulty),
                        marks: marks,
                        type: part.type
                    });
                }
            });
        } else if (totalMarks >= 5) {
            // Medium question: 2-3 subparts
            subparts.push(
                { label: 'a', question: this.generateSubpartText(problem, 'identify', difficulty), marks: Math.ceil(totalMarks * 0.4), type: 'identify' },
                { label: 'b', question: this.generateSubpartText(problem, 'calculate', difficulty), marks: Math.floor(totalMarks * 0.6), type: 'calculate' }
            );
        }
        // For marks < 5, no subparts (single question)
        
        return subparts;
    }

    generateSubpartText(problem, type, difficulty) {
        const templates = {
            define: [
                'Define the key term(s) used in this question.',
                'State what is meant by the term mentioned above.',
                'Explain the meaning of the concept in this context.'
            ],
            identify: [
                'Identify the compounds/elements involved in this reaction.',
                'State what type of reaction this represents.',
                'Name the process described in the question.'
            ],
            calculate: [
                'Calculate the value requested. Show all your working.',
                'Determine the quantity asked for in the question.',
                'Work out the numerical answer with appropriate units.'
            ],
            explain: [
                'Explain your reasoning for the answer in part (a).',
                'Describe the process that leads to this result.',
                'Give reasons for your answer, referring to chemical principles.'
            ],
            conclude: [
                'State the final answer with appropriate units and significant figures.',
                'Summarize your findings from the calculations above.',
                'Draw a conclusion based on your results.'
            ]
        };
        
        const options = templates[type] || ['Answer this part of the question.'];
        return options[Math.floor(Math.random() * options.length)];
    }

    determineAnswerSpaceType(problem, marks) {
        if (marks <= 2) return 'short'; // 2-3 lines
        if (marks <= 5) return 'medium'; // 5-7 lines
        if (marks <= 8) return 'long'; // 10-12 lines
        return 'extended'; // 15+ lines or full page
    }

    // === COVER PAGE GENERATION ===

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
                title: 'FOR EXAMINER\'S USE ONLY',
                fields: [
                    { label: 'CANDIDATE NAME', width: 'full', underline: true },
                    { label: 'INDEX NUMBER', width: 'half', underline: true },
                    { label: 'CLASS/GRADE', width: 'half', underline: true },
                    { label: 'DATE', width: 'half', underline: true },
                    { label: 'SIGNATURE', width: 'half', underline: true }
                ]
            },
            
            instructions: {
                title: 'INSTRUCTIONS TO CANDIDATES',
                items: config.instructions,
                warnings: [
                    '⚠ DO NOT OPEN THIS PAPER UNTIL INSTRUCTED TO DO SO',
                    '⚠ READ ALL INSTRUCTIONS CAREFULLY BEFORE STARTING'
                ]
            },
            
            marksTable: {
                title: 'FOR EXAMINER\'S USE ONLY',
                columns: ['Section', 'Maximum Marks', 'Marks Obtained'],
                rows: [
                    ['A', '40', ''],
                    ['B', '35', ''],
                    ['C', '25', ''],
                    ['TOTAL', '100', '']
                ]
            }
        };
    }

    // === CLOSING PAGE GENERATION ===

    generateClosingPage(config) {
        return {
            endMessage: {
                text: 'END OF EXAMINATION',
                style: 'centered, bold, large'
            },
            
            spacer: {
                lines: 5
            },
            
            examinerDetails: {
                preparedBy: {
                    label: 'Prepared by',
                    name: config.examinerName,
                    title: config.examinerTitle,
                    signature: '___________________',
                    date: `Date: ${new Date().toLocaleDateString()}`
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
                notice: 'All rights reserved. This examination paper is confidential and may not be reproduced, stored, or transmitted in any form without written permission from the copyright holder.'
            },
            
            confidentialityNotice: [
                'This examination paper contains confidential material.',
                'Unauthorized reproduction, distribution, or disclosure is strictly prohibited.',
                'Candidates found with unauthorized materials will be disqualified.'
            ]
        };
    }

    // === MARKING SCHEME GENERATION ===

    generateMarkingScheme(questions) {
        const markingScheme = {
            metadata: {
                title: 'CONFIDENTIAL MARKING SCHEME',
                subtitle: 'For Internal Use by Examiners Only',
                warning: '⚠ THIS DOCUMENT CONTAINS CONFIDENTIAL INFORMATION',
                generatedDate: new Date().toISOString()
            },
            
            generalGuidelines: [
                'Award marks according to the scheme provided',
                'Accept equivalent correct answers not listed in the scheme',
                'Deduct marks for missing units where applicable',
                'Award method marks even if final answer is incorrect',
                'Round off answers to appropriate significant figures',
                'Do not penalize the same error twice (error carry forward applies)'
            ],
            
            sections: []
        };

        questions.sections.forEach(section => {
            const sectionScheme = {
                section: section.label,
                title: section.title,
                totalMarks: section.totalMarks,
                questions: []
            };

            section.questions.forEach(question => {
                const questionScheme = {
                    number: question.number,
                    topic: question.topic,
                    totalMarks: question.marks,
                    
                    expectedAnswer: this.generateExpectedAnswer(question),
                    
                    markingPoints: this.generateDetailedMarkingPoints(question),
                    
                    acceptableAlternatives: this.generateAcceptableAlternatives(question),
                    
                    commonErrors: this.generateCommonErrors(question),
                    
                    partialCreditGuidelines: this.generatePartialCreditGuidelines(question)
                };

                sectionScheme.questions.push(questionScheme);
            });

            markingScheme.sections.push(sectionScheme);
        });

        return markingScheme;
    }

    generateExpectedAnswer(question) {
        // Generate model answer based on question type
        const answer = {
            approach: 'Step-by-step solution demonstrating clear understanding',
            keyPoints: [],
            calculation: null,
            finalAnswer: null
        };

        // Add key points based on difficulty
        if (question.difficulty === 'easier') {
            answer.keyPoints = [
                'Direct application of formula or concept',
                'Simple one-step or two-step calculation',
                'Clear statement of answer with units'
            ];
        } else if (question.difficulty === 'similar') {
            answer.keyPoints = [
                'Identification of relevant information',
                'Selection of appropriate method/formula',
                'Systematic calculation with intermediate steps',
                'Verification of answer reasonableness',
                'Final answer with correct units and sig figs'
            ];
        } else {
            answer.keyPoints = [
                'Comprehensive analysis of the problem',
                'Integration of multiple concepts',
                'Detailed multi-step solution',
                'Critical evaluation of results',
                'Well-justified conclusion'
            ];
        }

        return answer;
    }

    generateDetailedMarkingPoints(question) {
        const points = [];
        
        if (question.subparts.length > 0) {
            // Detailed marking for each subpart
            question.subparts.forEach(subpart => {
                points.push({
                    part: `(${subpart.label})`,
                    totalMarks: subpart.marks,
                    breakdown: this.breakdownMarks(subpart.marks, subpart.type),
                    criteria: this.generateMarkingCriteria(subpart.type)
                });
            });
        } else {
            // Single question marking breakdown
            points.push({
                part: 'Complete Answer',
                totalMarks: question.marks,
                breakdown: this.breakdownMarks(question.marks, 'complete'),
                criteria: this.generateMarkingCriteria('complete')
            });
        }

        return points;
    }

    breakdownMarks(totalMarks, type) {
        const breakdown = [];
        
        if (type === 'define' || type === 'identify') {
            breakdown.push({ component: 'Correct identification/definition', marks: totalMarks });
        } else if (type === 'calculate') {
            const setupMarks = Math.ceil(totalMarks * 0.3);
            const processMarks = Math.ceil(totalMarks * 0.5);
            const answerMarks = totalMarks - setupMarks - processMarks;
            
            breakdown.push(
                { component: 'Correct formula/setup', marks: setupMarks },
                { component: 'Correct process/working', marks: processMarks },
                { component: 'Correct final answer with units', marks: answerMarks }
            );
        } else if (type === 'explain') {
            breakdown.push(
                { component: 'Clear explanation', marks: Math.ceil(totalMarks * 0.6) },
                { component: 'Use of chemical terminology', marks: Math.floor(totalMarks * 0.4) }
            );
        } else {
            // Complete question
            breakdown.push(
                { component: 'Understanding/approach', marks: Math.ceil(totalMarks * 0.25) },
                { component: 'Method/working', marks: Math.ceil(totalMarks * 0.5) },
                { component: 'Answer/conclusion', marks: Math.floor(totalMarks * 0.25) }
            );
        }

        return breakdown;
    }

    generateMarkingCriteria(type) {
        const criteria = {
            define: [
                'Award full marks for precise, scientifically accurate definition',
                'Deduct 1 mark for incomplete or vague definitions',
                'Accept alternative correct phrasings'
            ],
            identify: [
                'Award marks for correct identification',
                'Spelling must be correct for chemical names',
                'Accept chemical formulas if correct'
            ],
            calculate: [
                'Award method marks even if final answer is wrong',
                'Correct answer without working gets half marks only',
                'Units must be included for full marks',
                'Answers must be to appropriate significant figures'
            ],
            explain: [
                'Award marks for clarity and completeness of explanation',
                'Chemical terminology must be used correctly',
                'Logical flow of ideas is essential',
                'Examples strengthen the answer'
            ],
            complete: [
                'Comprehensive answer addressing all aspects',
                'Clear structure and organization',
                'Correct use of chemical principles',
                'Appropriate level of detail'
            ]
        };

        return criteria[type] || criteria.complete;
    }

    generateAcceptableAlternatives(question) {
        return [
            'Equivalent expressions using different notation',
            'Answers within acceptable rounding range (±2% for calculations)',
            'Alternative correct approaches using different methods',
            'Standard chemical names vs. IUPAC names (both acceptable)'
        ];
    }

    generateCommonErrors(question) {
        return [
            {
                error: 'Missing or incorrect units',
                penalty: '-1 mark',
                guidance: 'Units are essential in chemistry'
            },
            {
                error: 'Incorrect significant figures',
                penalty: '-1 mark',
                guidance: 'Answer must match precision of given data'
            },
            {
                error: 'Arithmetic mistakes in calculation',
                penalty: 'Award method marks, zero for final answer',
                guidance: 'Check if error is carried forward'
            },
            {
                error: 'Incomplete chemical equations',
                penalty: '-1 to -2 marks depending on severity',
                guidance: 'Equations must be balanced and complete'
            },
            {
                error: 'Vague or ambiguous explanations',
                penalty: 'Partial credit only',
                guidance: 'Precision in language is important'
            }
        ];
    }

    generatePartialCreditGuidelines(question) {
        return {
            methodMarks: 'Award marks for correct approach even if answer is wrong',
            errorCarryForward: 'Do not penalize same error multiple times',
            incompleteSolutions: 'Award marks proportional to progress made',
            missingUnits: 'Deduct 1 mark but award all other marks if deserved',
            wrongFormula: 'Zero marks for setup, but award marks if subsequent steps are correct for their formula'
        };
    }



// === UTILITY METHODS ===

selectProblemTypeFromTopic(topic) {
    const topicMapping = {
        'stoichiometry': ['mole_calculations', 'equation_balancing', 'mass_mass_stoichiometry', 'limiting_reagent', 'percent_yield'],
        'organic_chemistry': ['alkanes', 'alkenes', 'functional_groups', 'isomerism', 'nomenclature'],
        'acid_base_chemistry': ['acid_base_neutralization', 'ph_calculations', 'buffers', 'titrations'],
        'redox_chemistry': ['redox_stoichiometry', 'oxidation_states', 'half_reactions', 'electrochemistry'],
        'equilibrium': ['equilibrium_constants', 'le_chatelier', 'solubility_equilibria'],
        'kinetics': ['reaction_kinetics', 'rate_laws', 'activation_energy'],
        'thermodynamics': ['entropy', 'gibbs_free_energy', 'spontaneity'],
        'atomic_structure': ['atomic_structure', 'electron_configuration', 'periodic_trends', 'bonding']
    };

    const problemTypes = topicMapping[topic] || ['mole_calculations'];
    return problemTypes[Math.floor(Math.random() * problemTypes.length)];
}



